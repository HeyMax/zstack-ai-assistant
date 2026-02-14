// Test script for ZStack AI Assistant
// Tests: API connectivity, all major queries, LLM tool calling flow

const ZSTACK_ENDPOINT = 'http://172.24.245.30:8080';
const ZSTACK_ACCOUNT = 'admin';
const ZSTACK_PASSWORD = 'password';

// Anthropic config from the extension defaults
const LLM_BASE_URL = 'https://cdr.digiman.live/claude-kiro-oauth';
const LLM_API_KEY = '123456';
const LLM_MODEL = 'claude-sonnet-4-20250514'; // Use sonnet for faster testing

async function sha512(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-512', data);
  return Array.from(new Uint8Array(hashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');
}

async function zstackFetch(path, method = 'GET', body = null, sessionId = null) {
  const headers = { 'Content-Type': 'application/json;charset=UTF-8' };
  if (sessionId) headers['Authorization'] = `OAuth ${sessionId}`;
  const opts = { method, headers };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${ZSTACK_ENDPOINT}/zstack${path}`, opts);
  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch { data = text; }
  return { status: res.status, ok: res.ok, data };
}

let sessionId = null;
let passed = 0;
let failed = 0;
const errors = [];

function ok(name) { passed++; console.log(`  ✅ ${name}`); }
function fail(name, err) { failed++; errors.push({ name, err }); console.log(`  ❌ ${name}: ${err}`); }

async function test(name, fn) {
  try {
    await fn();
    ok(name);
  } catch (e) {
    fail(name, e.message);
  }
}

// ========== Test Suite ==========

async function testLogin() {
  console.log('\n🔐 Login Tests');
  
  await test('SHA-512 password hash', async () => {
    const hash = await sha512('password');
    if (hash.length !== 128) throw new Error(`Hash length ${hash.length}, expected 128`);
  });

  await test('Login with correct credentials', async () => {
    const hash = await sha512(ZSTACK_PASSWORD);
    const res = await zstackFetch('/v1/accounts/login', 'PUT', {
      logInByAccount: { accountName: ZSTACK_ACCOUNT, password: hash }
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(res.data)}`);
    sessionId = res.data.inventory?.uuid;
    if (!sessionId) throw new Error('No session UUID in response');
  });

  await test('Login with wrong password returns error', async () => {
    const res = await zstackFetch('/v1/accounts/login', 'PUT', {
      logInByAccount: { accountName: ZSTACK_ACCOUNT, password: 'wronghash' }
    });
    if (res.ok) throw new Error('Should have failed');
  });
}

async function testQueries() {
  console.log('\n📋 Query Tests (all major resource types)');

  const queryTests = [
    ['vm-instances', 'VMs'],
    ['hosts', 'Hosts'],
    ['images', 'Images'],
    ['instance-offerings', 'Instance Offerings'],
    ['disk-offerings', 'Disk Offerings'],
    ['l2-networks', 'L2 Networks'],
    ['l3-networks', 'L3 Networks'],
    ['volumes', 'Volumes'],
    ['volume-snapshots', 'Volume Snapshots'],
    ['primary-storage', 'Primary Storage'],
    ['backup-storage', 'Backup Storage'],
    ['zones', 'Zones'],
    ['clusters', 'Clusters'],
    ['vips', 'VIPs'],
    ['eips', 'EIPs'],
    ['security-groups', 'Security Groups'],
    ['load-balancers', 'Load Balancers'],
    ['load-balancers/listeners', 'LB Listeners'],
    ['load-balancers/servergroups', 'LB Server Groups'],
    ['port-forwarding', 'Port Forwarding'],
    ['ipsec', 'IPsec'],
    ['vpc/virtual-routers', 'VPC Routers'],
    ['vrouter-route-tables', 'Route Tables'],
    ['accounts', 'Accounts'],
    ['iam2/projects', 'IAM2 Projects'],
    ['iam2/virtual-ids', 'IAM2 Virtual IDs'],
    ['management-nodes', 'Management Nodes'],
    ['global-configurations', 'Global Configs'],
    ['system-tags', 'System Tags'],
    ['scheduler/jobs', 'Scheduler Jobs'],
    ['zwatch/alarms', 'Alarms'],
    ['nics', 'VM NICs'],
    ['certificates', 'Certificates'],
    ['affinity-groups', 'Affinity Groups'],
  ];

  const results = {};
  for (const [path, label] of queryTests) {
    await test(`Query ${label} (${path})`, async () => {
      const res = await zstackFetch(`/v1/${path}?limit=5`, 'GET', null, sessionId);
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(res.data).slice(0, 200)}`);
      const inventories = res.data.inventories || [];
      results[path] = inventories.length;
    });
  }
  
  console.log('\n  📊 Resource counts:');
  for (const [path, count] of Object.entries(results)) {
    if (count > 0) console.log(`     ${path}: ${count}+`);
  }
}

async function testQueryConditions() {
  console.log('\n🔍 Query with Conditions');

  await test('Query VMs with state=Running', async () => {
    const res = await zstackFetch('/v1/vm-instances?limit=5&q=state=Running', 'GET', null, sessionId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  });

  await test('Query hosts with status=Connected', async () => {
    const res = await zstackFetch('/v1/hosts?limit=5&q=status=Connected', 'GET', null, sessionId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  });
}

async function testZQL() {
  console.log('\n🔮 ZQL Tests');

  await test('ZQL: query vminstance', async () => {
    const res = await zstackFetch('/v1/zql?zql=' + encodeURIComponent('query vminstance limit 3'), 'GET', null, sessionId);
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${JSON.stringify(res.data).slice(0, 200)}`);
  });

  await test('ZQL: query host return with vminstance', async () => {
    const res = await zstackFetch('/v1/zql?zql=' + encodeURIComponent('query host limit 2'), 'GET', null, sessionId);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
  });
}

async function testGetByUuid() {
  console.log('\n🔎 Get by UUID');

  // First get a VM UUID
  const vmRes = await zstackFetch('/v1/vm-instances?limit=1', 'GET', null, sessionId);
  if (vmRes.ok && vmRes.data.inventories?.length > 0) {
    const vmUuid = vmRes.data.inventories[0].uuid;
    await test(`Get VM by UUID (${vmUuid.slice(0, 8)}...)`, async () => {
      const res = await zstackFetch(`/v1/vm-instances/${vmUuid}`, 'GET', null, sessionId);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      if (res.data.inventory?.uuid !== vmUuid) throw new Error('UUID mismatch');
    });
  } else {
    console.log('  ⏭️  No VMs found, skipping get-by-uuid test');
  }
}

async function testActions() {
  console.log('\n⚡ Action Tests (read-only, no destructive ops)');

  // Test that action endpoint format is correct by checking a VM's console
  const vmRes = await zstackFetch('/v1/vm-instances?limit=1&q=state=Running', 'GET', null, sessionId);
  if (vmRes.ok && vmRes.data.inventories?.length > 0) {
    const vm = vmRes.data.inventories[0];
    console.log(`  ℹ️  Found running VM: ${vm.name} (${vm.uuid.slice(0, 8)}...)`);
    // We won't actually perform actions to avoid disrupting the environment
    console.log('  ⏭️  Skipping destructive action tests (safe mode)');
  } else {
    console.log('  ⏭️  No running VMs found');
  }
}

async function testLLMConnection() {
  console.log('\n🤖 LLM Connection Test');

  await test('Anthropic API reachable', async () => {
    const res = await fetch(`${LLM_BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': LLM_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        messages: [{ role: 'user', content: '回复OK' }],
        max_tokens: 10
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const text = data.content?.[0]?.text || '';
    if (!text) throw new Error('Empty response');
    console.log(`     LLM responded: "${text}"`);
  });
}

async function testLLMToolCalling() {
  console.log('\n🛠️  LLM Tool Calling Test');

  const tools = [
    {
      name: 'query_vms',
      description: '查询云主机列表',
      input_schema: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  ];

  await test('LLM uses tool when asked to query VMs', async () => {
    const res = await fetch(`${LLM_BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': LLM_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        system: '你是ZStack运维助手，用工具查询资源。',
        messages: [{ role: 'user', content: '查看所有云主机' }],
        tools,
        max_tokens: 1024
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const toolUse = data.content?.find(b => b.type === 'tool_use');
    if (!toolUse) throw new Error('Model did not call any tool');
    if (toolUse.name !== 'query_vms') throw new Error(`Expected query_vms, got ${toolUse.name}`);
    console.log(`     Model called: ${toolUse.name}(${JSON.stringify(toolUse.input)})`);
  });
}

async function testEndToEndFlow() {
  console.log('\n🔄 End-to-End Flow Test (simulated multi-step)');

  // Simulate what happens when user says "查看所有云主机"
  // Step 1: LLM decides to call query_vms
  // Step 2: We execute the tool against ZStack
  // Step 3: LLM formats the response

  await test('Full flow: user asks → LLM calls tool → ZStack responds → LLM formats', async () => {
    const tools = [
      {
        name: 'zstack_query',
        description: '查询ZStack资源',
        input_schema: {
          type: 'object',
          properties: {
            resource_path: { type: 'string' },
            conditions: { type: 'array', items: { type: 'string' } },
            limit: { type: 'integer' }
          },
          required: ['resource_path']
        }
      }
    ];

    // Round 1: User asks, LLM calls tool
    const r1 = await fetch(`${LLM_BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': LLM_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        system: '你是ZStack运维助手。用中文回复。',
        messages: [{ role: 'user', content: '帮我看看有哪些物理机' }],
        tools,
        max_tokens: 1024
      })
    });
    const d1 = await r1.json();
    if (d1.error) throw new Error(`Round 1: ${d1.error.message}`);
    
    const toolUse = d1.content?.find(b => b.type === 'tool_use');
    if (!toolUse) throw new Error('Round 1: No tool call');
    console.log(`     Round 1: LLM called ${toolUse.name}(${JSON.stringify(toolUse.input).slice(0, 100)})`);

    // Execute tool against real ZStack
    const path = toolUse.input.resource_path || 'hosts';
    const limit = toolUse.input.limit || 10;
    const zRes = await zstackFetch(`/v1/${path}?limit=${limit}`, 'GET', null, sessionId);
    if (!zRes.ok) throw new Error(`ZStack query failed: ${zRes.status}`);
    const toolResult = JSON.stringify(zRes.data).slice(0, 4000);
    console.log(`     ZStack returned ${zRes.data.inventories?.length || 0} results`);

    // Round 2: Feed tool result back, LLM formats response
    const r2 = await fetch(`${LLM_BASE_URL}/v1/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': LLM_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: LLM_MODEL,
        system: '你是ZStack运维助手。用中文回复，简洁展示关键信息。',
        messages: [
          { role: 'user', content: '帮我看看有哪些物理机' },
          { role: 'assistant', content: d1.content },
          { role: 'user', content: [{ type: 'tool_result', tool_use_id: toolUse.id, content: toolResult }] }
        ],
        tools,
        max_tokens: 2048
      })
    });
    const d2 = await r2.json();
    if (d2.error) throw new Error(`Round 2: ${d2.error.message}`);
    
    const finalText = d2.content?.filter(b => b.type === 'text').map(b => b.text).join('');
    if (!finalText) throw new Error('Round 2: No text response');
    console.log(`     Round 2: LLM response (${finalText.length} chars): "${finalText.slice(0, 150)}..."`);
  });
}

// ========== Run ==========
async function main() {
  console.log('🚀 ZStack AI Assistant - Integration Test Suite');
  console.log(`   Endpoint: ${ZSTACK_ENDPOINT}`);
  console.log(`   LLM: ${LLM_MODEL} via ${LLM_BASE_URL}`);
  
  await testLogin();
  if (!sessionId) {
    console.log('\n💀 Login failed, cannot continue');
    process.exit(1);
  }
  
  await testQueries();
  await testQueryConditions();
  await testZQL();
  await testGetByUuid();
  await testActions();
  await testLLMConnection();
  await testLLMToolCalling();
  await testEndToEndFlow();

  console.log(`\n${'='.repeat(50)}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  if (errors.length > 0) {
    console.log('\nFailures:');
    errors.forEach(e => console.log(`  - ${e.name}: ${e.err}`));
  }
  console.log();
}

main().catch(e => { console.error('Fatal:', e); process.exit(1); });
