// LLM Engine with ZStack Full API Coverage
export class LLMEngine {
  constructor() {
    this.apiKey = '';
    this.baseUrl = '';
    this.provider = 'openai';
    this.model = 'gpt-4o-mini';
    this.messages = [];
    this.zstackClient = null;
    this.queryMode = 'compact';
  }

  configure({ apiKey, baseUrl, provider, model, zstackClient, queryMode }) {
    if (apiKey) this.apiKey = apiKey;
    if (baseUrl !== undefined) this.baseUrl = baseUrl;
    if (provider) this.provider = provider;
    if (model) this.model = model;
    if (zstackClient) this.zstackClient = zstackClient;
    if (queryMode) this.queryMode = queryMode;
  }

  clearHistory() { this.messages = []; }

  _systemPrompt() {
    const modeInstructions = this.queryMode === 'full'
      ? QUERY_MODE_FULL
      : QUERY_MODE_COMPACT;
    return SYSTEM_PROMPT_BASE + '\n' + modeInstructions;
  }

  // Default base URLs per provider (include version path)
  static BASE_URLS = {
    openai: 'https://api.openai.com/v1',
    anthropic: 'https://api.anthropic.com/v1',
    glm: 'https://open.bigmodel.cn/api/paas/v4',
    deepseek: 'https://api.deepseek.com/v1',
    qwen: 'https://dashscope.aliyuncs.com/compatible-mode/v1'
  };

  // Providers that use OpenAI-compatible API format
  static OPENAI_COMPAT = new Set(['openai', 'glm', 'deepseek', 'qwen']);

  async chat(userMessage, onEvent) {
    this.messages.push({ role: 'user', content: userMessage });
    const emit = (type, data) => { if (onEvent) onEvent({ type, ...data }); };

    const maxRounds = 100;
    const startTime = Date.now();
    const timeoutMs = 5 * 60 * 1000; // 5 minutes max
    for (let i = 0; i < maxRounds; i++) {
      if (Date.now() - startTime > timeoutMs) {
        return '操作超时(5分钟)，部分操作可能已完成。请查看云平台确认状态。';
      }
      emit('status', { text: `思考中... (${i + 1})` });

      const response = LLMEngine.OPENAI_COMPAT.has(this.provider)
        ? await this._callOpenAI()
        : this.provider === 'anthropic'
          ? await this._callAnthropic()
          : await this._callOpenAI(); // fallback to OpenAI format

      if (!response.toolCalls || response.toolCalls.length === 0) {
        this.messages.push({ role: 'assistant', content: response.content });
        emit('text', { text: response.content });
        return response.content;
      }

      // Show what tools are being called
      const toolNames = this.provider === 'anthropic'
        ? response.toolCalls.map(tc => tc.name)
        : response.toolCalls.map(tc => tc.function.name);
      emit('tool_start', { tools: toolNames, round: i + 1 });

      // If model also returned text alongside tool calls, emit it
      if (response.content) emit('text', { text: response.content });

      // Execute tool calls in parallel
      if (this.provider === 'anthropic') {
        this.messages.push({ role: 'assistant', content: response.rawContent });
        const truncateLimit = this.queryMode === 'full' ? 80000 : 30000;
        const results = await Promise.all(
          response.toolCalls.map(async tc => ({
            type: 'tool_result',
            tool_use_id: tc.id,
            content: JSON.stringify(await this._executeTool(tc.name, tc.input)).slice(0, truncateLimit)
          }))
        );
        this.messages.push({ role: 'user', content: results });
      } else {
        this.messages.push(response.rawMessage);
        const truncateLimit = this.queryMode === 'full' ? 80000 : 30000;
        const results = await Promise.all(
          response.toolCalls.map(async tc => ({
            role: 'tool',
            tool_call_id: tc.id,
            content: JSON.stringify(await this._executeTool(tc.function.name, JSON.parse(tc.function.arguments))).slice(0, truncateLimit)
          }))
        );
        results.forEach(r => this.messages.push(r));
      }
      emit('tool_done', { tools: toolNames, round: i + 1 });
    }
    return '操作轮次已达上限(50轮)，部分操作可能已完成。请查看云平台确认状态，或分步执行剩余操作。';
  }

  async _callOpenAI() {
    const defaultBase = LLMEngine.BASE_URLS[this.provider] || LLMEngine.BASE_URLS.openai;
    const base = this.baseUrl || defaultBase;
    const url = `${base.replace(/\/$/, '')}/chat/completions`;
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
      body: JSON.stringify({
        model: this.model,
        messages: [{ role: 'system', content: this._systemPrompt() }, ...this.messages],
        tools: TOOLS,
        tool_choice: 'auto',
        max_tokens: 16384
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const msg = data.choices[0].message;
    return {
      content: msg.content || '',
      toolCalls: msg.tool_calls || null,
      rawMessage: msg
    };
  }

  async _callAnthropic() {
    const defaultBase = LLMEngine.BASE_URLS.anthropic;
    const base = this.baseUrl || defaultBase;
    const url = `${base.replace(/\/$/, '')}/messages`;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: this.model,
        system: this._systemPrompt(),
        messages: this.messages,
        tools: TOOLS_ANTHROPIC,
        max_tokens: 16384
      })
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message);

    const textBlocks = data.content.filter(b => b.type === 'text').map(b => b.text).join('');
    const toolBlocks = data.content.filter(b => b.type === 'tool_use');

    return {
      content: textBlocks,
      toolCalls: toolBlocks.length > 0 ? toolBlocks.map(b => ({ id: b.id, name: b.name, input: b.input })) : null,
      rawContent: data.content
    };
  }

  async _executeTool(name, args) {
    const cli = this.zstackClient;
    if (!cli || !cli.isLoggedIn()) return { error: '未连接到 ZStack，请先配置并登录' };

    try {
      switch (name) {
        // === Generic API ===
        case 'zstack_query':
          return await cli.query(args.resource_path, args.conditions || [], args.limit || 100, args.start || 0, args.sort_by, args.sort_direction);
        case 'zstack_get':
          return await cli.get(args.resource_path, args.uuid);
        case 'zstack_create':
          return await cli.create(args.resource_path, args.body);
        case 'zstack_delete':
          return await cli.remove(args.resource_path, args.uuid, args.delete_mode || 'Permissive');
        case 'zstack_action':
          return await cli.action(args.resource_path, args.uuid, args.body);
        case 'zstack_update':
          return await cli.update(args.resource_path, args.uuid, args.body);
        case 'zstack_zql':
          return await cli.zql(args.zql);

        // === VM shortcuts ===
        case 'query_vms': return await cli.queryVmInstances(args.conditions || []);
        case 'create_vm': return await cli.createVm(args.params);
        case 'start_vm': return await cli.startVm(args.uuid);
        case 'stop_vm': return await cli.stopVm(args.uuid, args.type);
        case 'reboot_vm': return await cli.rebootVm(args.uuid);
        case 'delete_vm': return await cli.deleteVm(args.uuid);
        case 'migrate_vm': return await cli.migrateVm(args.uuid, args.hostUuid);

        // === Quick queries ===
        case 'query_hosts': return await cli.queryHosts(args.conditions || []);
        case 'query_images': return await cli.queryImages(args.conditions || []);
        case 'query_l3_networks': return await cli.queryL3Networks(args.conditions || []);
        case 'query_instance_offerings': return await cli.queryInstanceOfferings(args.conditions || []);
        case 'query_volumes': return await cli.queryVolumes(args.conditions || []);
        case 'query_load_balancers': return await cli.queryLoadBalancers(args.conditions || []);
        case 'query_vips': return await cli.queryVips(args.conditions || []);
        case 'query_eips': return await cli.queryEips(args.conditions || []);
        case 'query_security_groups': return await cli.querySecurityGroups(args.conditions || []);
        case 'query_vpc_routers': return await cli.queryVpcRouters(args.conditions || []);

        default:
          return { error: `未知工具: ${name}` };
      }
    } catch (e) {
      return { error: e.message };
    }
  }
}

// ========== System Prompt ==========
const SYSTEM_PROMPT_BASE = `你是 ZStack 云平台智能运维助手，拥有完整的 ZStack API 访问能力。

## 回复风格（必须遵守）
- 查询结果直接用表格展示，不要加多余的开场白、道歉、解释或建议
- 不要说"让我整理一下"、"抱歉让您久等"、"如果需要我可以"之类的废话
- 用户没问就不要主动提建议
- 表格只展示关键字段：名称、状态、IP、CPU、内存，不要把所有字段都列出来
- 操作成功就说"已完成"，失败就说原因，简洁明了

## 核心能力
你可以通过工具管理 ZStack 云平台的所有资源，包括但不限于：

**计算**: 云主机(vm-instances)、镜像(images)、计算规格(instance-offerings)、云盘规格(disk-offerings)
**存储**: 云盘(volumes)、快照(volume-snapshots)、备份(volume-backups)、主存储(primary-storage)、镜像仓库(backup-storage)、Ceph存储
**网络**: L2网络(l2-networks)、L3网络(l3-networks)、VIP(vips)、弹性IP(eips)、端口转发(port-forwarding)、安全组(security-groups)、IPsec VPN(ipsec)
**负载均衡**: 负载均衡器(load-balancers)、监听器(load-balancers/listeners)、服务器组(load-balancers/servergroups)
**VPC**: VPC路由器(vpc/virtual-routers)、路由表(vrouter-route-tables)、VPC防火墙(vpcfirewalls)
**基础设施**: 区域(zones)、集群(clusters)、物理机(hosts)、管理节点(management-nodes)
**身份认证**: 账户(accounts)、IAM2项目(iam2/projects)、虚拟身份(iam2/virtual-ids)
**监控告警**: 告警(zwatch/alarms)、事件订阅(zwatch/events/subscriptions)、监控组(zwatch/monitorgroups)
**运维**: 定时任务(scheduler/jobs)、全局配置(global-configurations)、系统标签(system-tags)
**裸金属**: 裸金属服务器(baremetal2/bm-instances)、机箱(baremetal2/chassis)
**弹性伸缩**: 伸缩组(autoscaling/groups)、伸缩规则(autoscaling/rules)
**CDP备份**: CDP策略(cdp-backup-storage/policy)、CDP任务(cdp-task)
**V2V迁移**: 迁移任务(v2vs)、转换主机(v2v-conversion-hosts)

## 通用 API 工具
对于上面列出的所有资源以及未列出的资源，你都可以使用通用 API 工具(zstack_query/zstack_create/zstack_delete/zstack_action/zstack_update)来操作。
resource_path 就是 API 路径去掉 "v1/" 前缀后的部分，例如 "vm-instances"、"load-balancers/listeners"。

## ZQL 查询
ZStack 支持 ZQL (ZStack Query Language)，语法类似 SQL：
- query vminstance where name='test'
- query vminstance where clusterUuid='xxx' and state='Running'
- query host where status='Connected' return with (vminstance)
- count vminstance  → 返回资源总数（不受分页限制）
- count vminstance where state='Running'  → 按条件统计数量
对于复杂查询，优先使用 ZQL。

⚠️ **ZQL 语法关键规则**：所有字符串值必须用单引号包裹！
- ✅ 正确: count vminstance where state='Running'
- ❌ 错误: count vminstance where state=Running （会报错！）
- ✅ 正确: query host where status='Connected'
- ❌ 错误: query host where status=Connected
只有纯数字值不需要引号，其他所有值（状态、名称、UUID等）都必须加单引号。

## ⚠️ 分页警告（极其重要）
ZStack API 默认每次最多返回100条记录（分页）。这意味着：
- zstack_query 返回的数组长度最多100，**绝对不能**用数组长度当作资源总数！
- 如果你看到返回了100条记录，真实总数很可能远大于100
- **获取准确总数的唯一方法**：使用 ZQL count，例如 "count vminstance"
- 查询资源时，**必须先用 ZQL count 获取真实总数**，再决定如何展示

## 常用 API 路径参考
vm-instances, images, instance-offerings, disk-offerings, volumes, volume-snapshots, volume-backups,
hosts, clusters, zones, l2-networks, l3-networks, vips, eips, port-forwarding, security-groups,
load-balancers, load-balancers/listeners, load-balancers/servergroups,
vpc/virtual-routers, vrouter-route-tables, vpcfirewalls, ipsec,
primary-storage, backup-storage, primary-storage/ceph, backup-storage/ceph,
accounts, iam2/projects, iam2/virtual-ids,
zwatch/alarms, zwatch/events/subscriptions, zwatch/monitorgroups,
scheduler/jobs, scheduler/triggers, global-configurations, system-tags, management-nodes,
nics, vm-instances/cdroms, affinity-groups, ssh-key-pair,
autoscaling/groups, baremetal2/bm-instances, cdp-task, v2vs,
certificates, ldap/servers, licenses

## 创建资源的 body 格式
创建资源时 body 通常为 { "params": { ...fields } }，具体字段参考 ZStack API 文档。
常见创建示例：
- 创建云主机: { "params": { "name": "xxx", "instanceOfferingUuid": "xxx", "imageUuid": "xxx", "l3NetworkUuids": ["xxx"] } }
- 创建VIP: { "params": { "name": "xxx", "l3NetworkUuid": "xxx" } }
- 创建负载均衡器: { "params": { "name": "xxx", "vipUuid": "xxx" } }
- 创建监听器: { "params": { "name": "xxx", "loadBalancerPort": 80, "instancePort": 80, "protocol": "tcp" } }
  路径: load-balancers/{lbUuid}/listeners
- 创建服务器组: { "params": { "name": "xxx" } }
  路径: load-balancers/{lbUuid}/servergroups
- 创建EIP: { "params": { "name": "xxx", "vipUuid": "xxx", "vmNicUuid": "xxx" } }
- 创建安全组: { "params": { "name": "xxx" } }

## Action 操作的 body 格式
Action 操作 body 格式为 { "actionName": { ...params } }，例如：
- 启动云主机: { "startVmInstance": {} }
- 停止云主机: { "stopVmInstance": { "type": "grace" } }
- 迁移云主机: { "migrateVm": { "hostUuid": "xxx" } }
- 刷新LB: { "refreshLoadBalancer": {} }
- 添加后端服务器: { "addBackendServer": { "vmNicUuids": ["xxx"] } }
- 挂载云盘: { "attachDataVolume": { "vmInstanceUuid": "xxx" } }

## 效率优化
- 尽量一次调用多个工具（并行 tool_call），不要一个一个串行调
- 创建多台相同配置的 VM 时，获取一次规格/镜像/网络信息后批量创建
- 复杂操作（如"创建LB并添加后端"）拆成清晰步骤，但每步尽量合并多个调用
- 用 ZQL 做复杂查询比多次 query 更高效

## 回复规范
- 用中文回复
- 危险操作（删除、停机）需要明确提醒`;

const QUERY_MODE_COMPACT = `
## 当前查询模式：⚡ 精简模式
**查询资源的标准流程（必须严格遵守）：**
1. 第一步：用 ZQL count 获取真实总数，如 "count vminstance"，按状态分别统计 "count vminstance where state='Running'" 等
2. 第二步：用概览告知用户（如：总数 705 台，运行中 500，已停止 180，其它 25）
3. 第三步：用 zstack_query（limit=20）展示前20条记录的表格
4. 第四步：告知用户"以上为前20条，共 X 条，需要查看更多吗？"
⚠️ 绝对禁止用 API 返回的数组长度当总数！API 默认只返回100条！`;

const QUERY_MODE_FULL = `
## 当前查询模式：📋 全量模式
**查询资源的标准流程（必须严格遵守）：**
1. 第一步：用 ZQL count 获取真实总数，如 "count vminstance"，按状态分别统计
2. 第二步：用概览告知用户（如：总数 705 台，运行中 500，已停止 180，其它 25）
3. 第三步：分批查询并展示全部数据：
   - 每批用 zstack_query（limit=100, start=0/100/200/...）翻页获取
   - 每批数据立即用表格展示，表格包含：序号、名称、状态、IP、关键属性
   - 持续翻页直到获取全部数据，不要中途停下来问用户
4. 如果总数超过 500 条，先展示前 500 条，然后告知用户剩余数量并询问是否继续
⚠️ 绝对禁止用 API 返回的数组长度当总数！API 默认只返回100条！
⚠️ 全量模式的核心目标是展示尽可能多的数据，不要缩减列数或行数`;

// ========== Tool Definitions (OpenAI format) ==========
const TOOLS = [
  // --- Generic API Tools ---
  {
    type: 'function',
    function: {
      name: 'zstack_query',
      description: '通用查询：查询任意 ZStack 资源列表。resource_path 为 API 路径（不含 v1/ 前缀），如 "vm-instances"、"load-balancers/listeners"、"hosts"',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径，如 vm-instances, volumes, load-balancers, hosts, l3-networks 等' },
          conditions: { type: 'array', items: { type: 'string' }, description: '查询条件列表，如 ["name=test", "state=Running"]' },
          limit: { type: 'integer', description: '返回数量限制，默认100' },
          start: { type: 'integer', description: '起始偏移' },
          sort_by: { type: 'string', description: '排序字段' },
          sort_direction: { type: 'string', enum: ['asc', 'desc'], description: '排序方向' }
        },
        required: ['resource_path']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_get',
      description: '通用获取：根据 UUID 获取单个资源详情',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' }
        },
        required: ['resource_path', 'uuid']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_create',
      description: '通用创建：创建任意 ZStack 资源。body 通常为 {"params": {...}}。注意某些资源创建路径包含父资源UUID，如 load-balancers/{lbUuid}/listeners',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: '创建API路径（含父资源UUID），如 "v1/load-balancers/xxx-uuid/listeners"' },
          body: { type: 'object', description: '请求体，通常为 {"params": {...fields}}' }
        },
        required: ['resource_path', 'body']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_delete',
      description: '通用删除：删除任意 ZStack 资源',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' },
          delete_mode: { type: 'string', enum: ['Permissive', 'Enforcing'], description: '删除模式，默认Permissive' }
        },
        required: ['resource_path', 'uuid']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_action',
      description: '通用操作：对资源执行 action（启停、迁移、挂载、刷新等）。body 格式为 {"actionName": {...params}}',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' },
          body: { type: 'object', description: '操作体，如 {"startVmInstance": {}}' }
        },
        required: ['resource_path', 'uuid', 'body']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_update',
      description: '通用更新：更新资源属性',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' },
          body: { type: 'object', description: '更新体，如 {"updateVmInstance": {"name": "new-name"}}' }
        },
        required: ['resource_path', 'uuid', 'body']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_zql',
      description: 'ZQL查询：使用 ZStack Query Language 执行复杂查询。支持 query（查数据）和 count（统计数量）。示例："query vminstance where state=Running"、"count vminstance"、"count vminstance where state=Stopped"。⚠️ 查询资源前必须先用 count 获取真实总数，不要用 API 返回数组长度当总数！',
      parameters: {
        type: 'object',
        properties: {
          zql: { type: 'string', description: 'ZQL查询语句' }
        },
        required: ['zql']
      }
    }
  },
  // --- VM Shortcuts ---
  {
    type: 'function',
    function: {
      name: 'query_vms',
      description: '快捷：查询云主机列表',
      parameters: {
        type: 'object',
        properties: { conditions: { type: 'array', items: { type: 'string' } } }
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'create_vm',
      description: '快捷：创建云主机',
      parameters: {
        type: 'object',
        properties: {
          params: {
            type: 'object',
            description: '创建参数：name, instanceOfferingUuid, imageUuid, l3NetworkUuids, dataDiskOfferingUuids, rootDiskOfferingUuid, description 等'
          }
        },
        required: ['params']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'start_vm',
      description: '快捷：启动云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'stop_vm',
      description: '快捷：停止云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' }, type: { type: 'string', enum: ['grace', 'cold'] } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'reboot_vm',
      description: '快捷：重启云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'delete_vm',
      description: '快捷：删除云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'migrate_vm',
      description: '快捷：迁移云主机到指定物理机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' }, hostUuid: { type: 'string' } }, required: ['uuid', 'hostUuid'] }
    }
  },
  // --- Quick Queries ---
  {
    type: 'function',
    function: {
      name: 'query_hosts',
      description: '快捷：查询物理机列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_images',
      description: '快捷：查询镜像列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_l3_networks',
      description: '快捷：查询L3网络列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_instance_offerings',
      description: '快捷：查询计算规格列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_volumes',
      description: '快捷：查询云盘列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_load_balancers',
      description: '快捷：查询负载均衡器列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_vips',
      description: '快捷：查询VIP列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_eips',
      description: '快捷：查询弹性IP列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_security_groups',
      description: '快捷：查询安全组列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_vpc_routers',
      description: '快捷：查询VPC路由器列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  }
];

// Anthropic format tools
const TOOLS_ANTHROPIC = TOOLS.map(t => ({
  name: t.function.name,
  description: t.function.description,
  input_schema: t.function.parameters
}));
