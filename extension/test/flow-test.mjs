// Test: Full multi-step LLM conversation loop against real ZStack
// Simulates what the extension does when user asks a complex question

const ZSTACK_ENDPOINT = 'http://172.24.245.30:8080';
const LLM_BASE_URL = 'https://cdr.digiman.live/claude-kiro-oauth';
const LLM_API_KEY = '123456';
const LLM_MODEL = 'claude-sonnet-4-20250514';

const SYSTEM_PROMPT = `你是 ZStack 云平台智能运维助手。

## 工具使用
你可以通过 zstack_query 查询任意资源，通过 zstack_create 创建资源，通过 zstack_action 执行操作。
resource_path 是 API 路径（不含 v1/ 前缀）。

## 效率优化
- 尽量一次调用多个工具（并行 tool_call），不要一个一个串行调
- 创建多台相同配置的 VM 时，获取一次规格/镜像/网络信息后批量创建

## 常用路径
vm-instances, hosts, images, instance-offerings, l3-networks, volumes, load-balancers, 
load-balancers/listeners, load-balancers/servergroups, vips, nics

## 创建示例
- VM: POST v1/vm-instances, body: {"params":{"name":"x","instanceOfferingUuid":"x","imageUuid":"x","l3NetworkUuids":["x"]}}
- VIP: POST v1/vips, body: {"params":{"name":"x","l3NetworkUuid":"x"}}
- LB: POST v1/load-balancers, body: {"params":{"name":"x","vipUuid":"x"}}
- Listener: POST v1/load-balancers/{lbUuid}/listeners, body: {"params":{"name":"x","loadBalancerPort":80,"instancePort":80,"protocol":"tcp"}}
- ServerGroup: POST v1/load-balancers/{lbUuid}/servergroups, body: {"params":{"name":"x"}}
- AddBackend: PUT v1/load-balancers/servergroups/{sgUuid}/actions, body: {"addBackendServer":{"vmNicUuids":["x"]}}

用中文回复。`;

const TOOLS = [
  {
    name: 'zstack_query',
    description: '查询ZStack资源。resource_path如vm-instances, hosts, images等',
    input_schema: {
      type: 'object',
      properties: {
        resource_path: { type: 'string' },
        conditions: { type: 'array', items: { type: 'string' } },
        limit: { type: 'integer' }
      },
      required: ['resource_path']
    }
  },
  {
    name: 'zstack_create',
    description: '创建ZStack资源',
    input_schema: {
      type: 'object',
      properties: {
        resource_path: { type: 'string' },
        body: { type: 'object' }
      },
      required: ['resource_path', 'body']
    }
  },
  {
    name: 'zstack_action',
    description: '对资源执行action',
    input_schema: {
      type: 'object',
      properties: {
        resource_path: { type: 'string' },
        uuid: { type: 'string' },
        body: { type: 'object' }
      },
      required: ['resource_path', 'uuid', 'body']
    }
  },
  {
    name: 'zstack_get',
    description: '获取单个资源详情',
    input_schema: {
      type: 'object',
      properties: {
        resource_path: { type: 'string' },
        uuid: { type: 'string' }
      },
      required: ['resource_path', 'uuid']
    }
  }
];

// ZStack API helpers
let sessionId = null;

async function sha512(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function zstackLogin() {
  const hash = await sha512('password');
  const res = await fetch(`${ZSTACK_ENDPOINT}/zstack/v1/accounts/login`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({ logInByAccount: { accountName: 'admin', password: hash } })
  });
  const data = await res.json();
  sessionId = data.inventory.uuid;
  console.log(`✅ Logged in (session: ${sessionId.slice(0, 8)}...)`);
}

async function zstackAPI(method, path, body = null) {
  const headers = { 'Content-Type': 'application/json;charset=UTF-8', 'Authorization': `OAuth ${sessionId}` };
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${ZSTACK_ENDPOINT}/zstack/${path}`, opts);
  return res.json();
}

async function executeTool(name, input) {
  switch (name) {
    case 'zstack_query': {
      const params = new URLSearchParams();
      params.set('limit', String(input.limit || 100));
      (input.conditions || []).forEach(c => params.append('q', c));
      return await zstackAPI('GET', `v1/${input.resource_path}?${params}`);
    }
    case 'zstack_get':
      return await zstackAPI('GET', `v1/${input.resource_path}/${input.uuid}`);
    case 'zstack_create':
      return await zstackAPI('POST', `v1/${input.resource_path}`, input.body);
    case 'zstack_action':
      return await zstackAPI('PUT', `v1/${input.resource_path}/${input.uuid}/actions`, input.body);
    default:
      return { error: `Unknown tool: ${name}` };
  }
}

// Simulate the full conversation loop
async function runConversation(userMessage, dryRun = true) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`👤 User: ${userMessage}`);
  console.log(`   Mode: ${dryRun ? 'DRY RUN (no creates)' : 'LIVE'}`);
  console.log(`${'='.repeat(60)}`);

  const messages = [{ role: 'user', content: userMessage }];
  const startTime = Date.now();
  const maxRounds = 100;

  for (let round = 1; round <= maxRounds; round++) {
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\n--- Round ${round} (${elapsed}s) ---`);

    const res = await fetch(`${LLM_BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': LLM_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        system: SYSTEM_PROMPT,
        messages,
        tools: TOOLS,
        max_tokens: 4096
      })
    });
    const data = await res.json();
    if (data.error) {
      console.log(`❌ LLM Error: ${data.error.message}`);
      return;
    }

    const textBlocks = data.content.filter(b => b.type === 'text');
    const toolBlocks = data.content.filter(b => b.type === 'tool_use');

    // Show any text the model produced
    for (const tb of textBlocks) {
      if (tb.text.trim()) console.log(`💬 ${tb.text.slice(0, 300)}`);
    }

    // If no tool calls, we're done
    if (toolBlocks.length === 0) {
      const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
      console.log(`\n✅ Completed in ${round} rounds, ${totalTime}s`);
      return;
    }

    // Show tool calls
    console.log(`🔧 ${toolBlocks.length} tool call(s):`);
    for (const tc of toolBlocks) {
      const inputStr = JSON.stringify(tc.input).slice(0, 150);
      console.log(`   → ${tc.name}(${inputStr})`);
    }

    // Execute tools (in parallel)
    messages.push({ role: 'assistant', content: data.content });
    const toolResults = [];

    await Promise.all(toolBlocks.map(async (tc) => {
      let result;
      if (dryRun && tc.name === 'zstack_create') {
        // In dry run, simulate create responses
        result = { 
          inventory: { 
            uuid: `fake-${Math.random().toString(36).slice(2, 10)}`,
            name: tc.input.body?.params?.name || 'test',
            state: 'Created'
          },
          _dryRun: true 
        };
        console.log(`   ⏭️  DRY RUN: Skipped create ${tc.input.resource_path}`);
      } else if (dryRun && tc.name === 'zstack_action') {
        result = { success: true, _dryRun: true };
        console.log(`   ⏭️  DRY RUN: Skipped action on ${tc.input.resource_path}`);
      } else {
        result = await executeTool(tc.name, tc.input);
        const count = result.inventories?.length;
        if (count !== undefined) console.log(`   ✅ ${tc.name} returned ${count} results`);
        else console.log(`   ✅ ${tc.name} completed`);
      }
      toolResults.push({
        type: 'tool_result',
        tool_use_id: tc.id,
        content: JSON.stringify(result).slice(0, 8000)
      });
    }));

    messages.push({ role: 'user', content: toolResults });
  }

  console.log(`\n❌ Hit max rounds (${maxRounds})`);
}

async function main() {
  console.log('🧪 Multi-Step Conversation Flow Test\n');
  await zstackLogin();

  // Test 1: Simple query (should be 1-2 rounds)
  await runConversation('查看所有云主机的状态');

  // Test 2: Multi-resource query (should be 2-3 rounds)
  await runConversation('帮我看看物理机的负载情况，以及每台物理机上跑了多少虚拟机');

  // Test 3: Complex create flow - DRY RUN (the user's actual request)
  await runConversation('帮我创建4台云主机作为后端服务器，然后创建一个负载均衡器，把它们都加进去', true);

  console.log('\n\n🏁 All conversation tests complete');
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
