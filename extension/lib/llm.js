// LLM Engine with ZStack Full API Coverage
export class LLMEngine {
  constructor() {
    this.apiKey = '';
    this.baseUrl = '';
    this.provider = 'openai';
    this.model = 'gpt-4o-mini';
    this.messages = [];
    this.zstackClient = null;
    this.versionInfo = null;
  }

  configure({ apiKey, baseUrl, provider, model, zstackClient }) {
    if (apiKey) this.apiKey = apiKey;
    if (baseUrl !== undefined) this.baseUrl = baseUrl;
    if (provider) this.provider = provider;
    if (model) this.model = model;
    if (zstackClient) this.zstackClient = zstackClient;
  }

  // Get version-specific system prompt
  async getVersionAwarePrompt() {
    let versionPrompt = '';
    let enterprisePrompt = '';
    
    if (this.zstackClient && this.zstackClient.isLoggedIn()) {
      try {
        const version = await this.zstackClient.getVersion();
        const isEnterprise = await this.zstackClient.checkEnterprise();
        
        if (version) {
          const v = `${version.major}.${version.minor}.${version.update}`;
          versionPrompt = `\n## 当前环境版本\n- ZStack 版本: ${v}\n`;
          
          // Version-specific hints
          if (version.major >= 5 && version.minor >= 4) {
            versionPrompt += `- 支持 KVM裸金属、DRS 动态资源调度、CDP 连续数据保护\n`;
          }
          if (version.major >= 5 && version.minor >= 5) {
            versionPrompt += `- 支持 IAM2 身份管理、VPC 高可用、混合云增强\n`;
          }
        }
        
        if (isEnterprise) {
          enterprisePrompt = `\n## 企业版功能\n当前连接为企业版，支持以下高级功能：\n- VPC（虚拟私有云）高级功能\n- DRS（动态资源调度）\n- 裸金属服务器管理\n- CDP（连续数据保护）\n- 混合云集成\n- 高级计费功能\n`;
        }
      } catch (e) {
        console.warn('Failed to get version info:', e);
      }
    }
    
    return versionPrompt + enterprisePrompt;
  }

  clearHistory() { this.messages = []; }

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

      const response = this.provider === 'anthropic'
        ? await this._callAnthropic()
        : await this._callOpenAI();

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
        const results = await Promise.all(
          response.toolCalls.map(async tc => ({
            type: 'tool_result',
            tool_use_id: tc.id,
            content: JSON.stringify(await this._executeTool(tc.name, tc.input)).slice(0, 8000)
          }))
        );
        this.messages.push({ role: 'user', content: results });
      } else {
        this.messages.push(response.rawMessage);
        const results = await Promise.all(
          response.toolCalls.map(async tc => ({
            role: 'tool',
            tool_call_id: tc.id,
            content: JSON.stringify(await this._executeTool(tc.function.name, JSON.parse(tc.function.arguments))).slice(0, 8000)
          }))
        );
        results.forEach(r => this.messages.push(r));
      }
      emit('tool_done', { tools: toolNames, round: i + 1 });
    }
    return '操作轮次已达上限(50轮)，部分操作可能已完成。请查看云平台确认状态，或分步执行剩余操作。';
  }

  async _callOpenAI() {
    const url = this.baseUrl
      ? `${this.baseUrl.replace(/\/$/, '')}/v1/chat/completions`
      : 'https://api.openai.com/v1/chat/completions';
    
    // Get version-aware prompt additions
    const versionAwareInfo = await this.getVersionAwarePrompt();
    const fullSystemPrompt = versionAwareInfo ? SYSTEM_PROMPT + versionAwareInfo : SYSTEM_PROMPT;
    
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
      body: JSON.stringify({
        model: this.model,
        messages: [{ role: 'system', content: fullSystemPrompt }, ...this.messages],
        tools: TOOLS,
        tool_choice: 'auto',
        max_tokens: 4096
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
    const url = this.baseUrl
      ? `${this.baseUrl.replace(/\/$/, '')}/v1/messages`
      : 'https://api.anthropic.com/v1/messages';
    
    // Get version-aware prompt additions
    const versionAwareInfo = await this.getVersionAwarePrompt();
    const fullSystemPrompt = versionAwareInfo ? SYSTEM_PROMPT + versionAwareInfo : SYSTEM_PROMPT;
    
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
        system: fullSystemPrompt,
        messages: this.messages,
        tools: TOOLS_ANTHROPIC,
        max_tokens: 4096
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
        case 'query_l2_networks': return await cli.queryL2Networks(args.conditions || []);
        case 'query_instance_offerings': return await cli.queryInstanceOfferings(args.conditions || []);
        case 'query_volumes': return await cli.queryVolumes(args.conditions || []);
        case 'query_snapshots': return await cli.queryVolumeSnapshots(args.conditions || []);
        case 'query_primary_storage': return await cli.queryPrimaryStorage(args.conditions || []);
        case 'query_backup_storage': return await cli.queryBackupStorage(args.conditions || []);
        case 'query_load_balancers': return await cli.queryLoadBalancers(args.conditions || []);
        case 'query_vips': return await cli.queryVips(args.conditions || []);
        case 'query_eips': return await cli.queryEips(args.conditions || []);
        case 'query_security_groups': return await cli.querySecurityGroups(args.conditions || []);
        case 'query_port_forwarding': return await cli.queryPortForwarding(args.conditions || []);
        case 'query_ipsec': return await cli.queryIPSec(args.conditions || []);
        case 'query_vpc_routers': return await cli.queryVpcRouters(args.conditions || []);
        case 'query_clusters': return await cli.queryClusters(args.conditions || []);
        case 'query_zones': return await cli.queryZones(args.conditions || []);

        default:
          return { error: `未知工具: ${name}` };
      }
    } catch (e) {
      return { error: e.message };
    }
  }
}

// ========== System Prompt ==========
const SYSTEM_PROMPT = `你是 ZStack 云平台智能运维助手，拥有完整的 ZStack API 访问能力。

## ZStack 架构概览

### 资源层次结构
ZStack 采用分层架构，资源之间有明确的依赖关系：

```
Zone（区域）
├── Cluster（集群）
│   └── Host（物理机）
│       └── VM Instance（云主机）
│           ├── VmNic（网卡）←── L3Network
│           └── Volume（云盘）←── PrimaryStorage
├── L2Network（L2网络/物理网络）
│   └── L3Network（L3网络/虚拟网络）
│       └── VmNic
├── PrimaryStorage（主存储）
│   ├── Volume（云盘）
│   └── VolumeSnapshot（快照）
└── BackupStorage（备份存储）
    └── Image（镜像）
```

### 资源依赖关系（创建 VM 必需）
1. **Zone（区域）** - 最顶层逻辑单元
2. **Cluster（集群）** - 属于 Zone，关联 Host 和 PrimaryStorage
3. **Host（物理机）** - 属于 Cluster，运行 VM
4. **PrimaryStorage（主存储）** - 属于 Zone/Cluster，提供存储
   - 支持类型：NFS、LocalStorage、Ceph、SharedBlock、iSCSI
5. **L2Network（L2网络）** - 提供二层网络
   - 类型：Flat（扁平）、VLAN、VXLAN
6. **L3Network（L3网络）** - 属于 L2Network，提供 IP
7. **Image（镜像）** - 存储在 BackupStorage，用于创建 VM
8. **InstanceOffering（计算规格）** - CPU/内存配置
9. **DiskOffering（云盘规格）** - 数据盘配置

### 核心模块（源码组织）
- **zstack/core** - 核心框架（消息总线、DB、Plugin、升级）
- **zstack/compute** - 计算域（VM、Cluster、Host、Zone 管理）
- **zstack/storage** - 存储域（Volume、Snapshot、Primary/Backup Storage）
- **zstack/network** - 网络域（L2、L3、Network Service）
- **zstack/plugin** - 插件实现（KVM、Ceph、SecurityGroup、LoadBalancer 等）
- **premium/** - 企业版功能（VPC、DRS、AutoScaling、BareMetal、CDP 等）
- **zstack-utility/** - 工具组件（Agent、CLI、BuildSystem）

---

## 完整资源清单

### 计算资源
- **vm-instances** - 云主机（虚拟机）
- **images** - 镜像（系统盘模板）
- **instance-offerings** - 计算规格（CPU/内存）
- **disk-offerings** - 云盘规格
- **vm-cdroms** - ISO 启动盘
- **root-volume-templates** - 根云盘模板

### 存储资源
- **volumes** - 云盘（数据盘）
- **volume-snapshots** - 云盘快照
- **volume-backups** - 云盘备份
- **primary-storage** - 主存储（NFS、Ceph、SharedBlock、iSCSI、LocalStorage）
- **backup-storage** - 备份存储（SFTP、ImageStore、Ceph）
- **snapshot-policies** - 快照策略
- **volume-qos** - 云盘 QoS

### 网络资源 - L2 网络
- **l2-networks** - L2 网络
  - FlatNetwork - 扁平网络
  - VLANNetwork - VLAN 网络
  - VXLANNetwork - VXLAN 网络
  - LinuxBridgeNetwork - Linux Bridge 网络

### 网络资源 - L3 网络
- **l3-networks** - L3 网络
  - L3BasicNetwork - 基础三层网络（Underlay）
  - L3VpcNetwork - VPC 三层网络（Overlay）
- **dhcp-options** - DHCP 配置
- **dns** - DNS 服务
- **ip-ranges** - IP 地址范围

### 网络服务（Network Services）
- **DHCP** - 动态主机配置协议
- **DNS** - 域名服务
- **SNAT** - 源地址转换
- **PortForwarding** - 端口转发
- **EIP** - 弹性 IP
- **SecurityGroup** - 安全组
- **LoadBalancer** - 负载均衡器

### 负载均衡（LB）
- **load-balancers** - 负载均衡器实例
- **load-balancers/listeners** - 监听器（端口映射）
- **load-balancers/servergroups** - 服务器组（后端服务器池）
- **load-balancers/certificates** - SSL 证书
- **load-balancers/access-control-lists** - 访问控制列表

### VPC（虚拟私有云）- 企业版
- **vpc/virtual-routers** - VPC 路由器
- **vrouter-route-tables** - 路由表
- **vpcfirewalls** - VPC 防火墙
- **vpc-ha-groups** - VPC 高可用组
- **vpc-acl** - VPC 访问控制列表

### VPN
- **ipsec-connections** - IPsec VPN 连接
- **vpn-connections** - VPN 连接
- **vpn-gateways** - VPN 网关

### 身份认证与权限（IAM）
- **accounts** - 账户（租户）
- **users** - 用户
- **user-groups** - 用户组
- **policies** - 权限策略
- **iam2/projects** - IAM2 项目
- **iam2/virtual-ids** - IAM2 虚拟身份
- **iam2/organizations** - IAM2 组织
- **iam2/virtual-id-groups** - IAM2 虚拟身份组
- **iam2/attributes** - IAM2 属性

### 监控与告警
- **zwatch/alarms** - 告警规则
- **zwatch/events** - 事件
- **zwatch/events/subscriptions** - 事件订阅
- **zwatch/monitorgroups** - 监控组
- **monitor/triggers** - 监控触发器
- **monitor/trigger-actions** - 触发器动作（邮件、短信、Webhook）
- **sns/topics** - SNS 主题
- **sns/application-endpoints** - 应用端点

### 基础设施
- **zones** - 区域
- **clusters** - 集群
- **hosts** - 物理机
- **management-nodes** - 管理节点
- **亲和组 (affinity-groups)** - 亲和性策略

### 运维管理
- **scheduler/jobs** - 定时任务
- **scheduler/triggers** - 定时触发器
- **global-configurations** - 全局配置
- **system-tags** - 系统标签
- **user-tags** - 用户标签
- **login-control** - 登录控制
- **license** - 许可信息

### 备份与容灾
- **backup/database** - 数据库备份
- **backup-volume** - 卷备份
- **cdp-backup-storage/policy** - CDP 策略（企业版）
- **cdp-task** - CDP 任务（企业版）

### 弹性伸缩（Auto Scaling）- 企业版
- **autoscaling/groups** - 伸缩组
- **autoscaling/rules** - 伸缩规则
- **autoscaling/group-instances** - 伸缩实例

### 裸金属（Bare Metal）- 企业版
- **baremetal2/bm-instances** - 裸金属服务器
- **baremetal2/chassis** - 裸金属机箱
- **baremetal2/provision-networks** - 裸金属配置网络
- **baremetal2/pxe-servers** - PXE 服务器

### V2V 迁移
- **v2vs** - 迁移任务
- **v2v-conversion-hosts** - 转换主机

### 混合云 - 企业版
- **aliyun/ecs-instances** - 阿里云 ECS
- **aliyun/vpcs** - 阿里云 VPC
- **aliyun/ebs-backup-storage** - 阿里云 EBS 备份存储
- **hybrid/eip-addresses** - 混合云 EIP
- **hybrid/identity-zone** - 混合云身份区域
- **hybrid/datacenter** - 数据中心

### 计费（Billing）- 企业版
- **billing/price** - 价格配置
- **billing/coupon** - 优惠券

---

## 版本查询 API

连接 ZStack 后，系统会自动获取版本信息：
- **获取版本**: PUT /zstack/v1/management-nodes/actions body: {"getVersion": {}}
  - 返回: {"version": "4.8.30"}
- **获取许可**: PUT /zstack/v1/management-nodes/actions body: {"getLicense": {}}
  - 返回: {"licensed": true, "expirationDate": "2025-12-31"}

**版本特性参考**:
- 5.3+: 基础云平台功能
- 5.4+: KVM裸金属、DRS动态资源调度、CDP连续数据保护
- 5.5+: IAM2身份管理、VPC高可用、混合云增强

---

## 创建资源格式

### 创建云主机
\`\`\`
{
  "params": {
    "name": "vm-name",
    "instanceOfferingUuid": "规格UUID",
    "imageUuid": "镜像UUID",
    "l3NetworkUuids": ["网络UUID"],
    "clusterUuid": "集群UUID（可选）",
    "hostUuid": "指定宿主机UUID（可选）"
  }
}
\`\`\`

### 创建负载均衡器
\`\`\`
{
  "params": {
    "name": "lb-name",
    "vipUuid": "VIP UUID"
  }
}
\`\`\`

### 创建监听器
路径: load-balancers/{lbUuid}/listeners
\`\`\`
{
  "params": {
    "name": "listener-name",
    "loadBalancerPort": 80,
    "instancePort": 8080,
    "protocol": "http"
  }
}
\`\`\`

### 创建 VPC 路由器（企业版）
\`\`\`
{
  "params": {
    "name": "vpc-name",
    "l3NetworkUuid": "L3网络UUID"
  }
}
\`\`\`

---

## Action 操作格式

- 启动云主机: {"startVmInstance": {}}
- 停止云主机: {"stopVmInstance": {"type": "grace"}}
- 迁移云主机: {"migrateVm": {"hostUuid": "目标宿主机UUID"}}
- 创建快照: {"createVolumeSnapshot": {"name": "snapshot-name"}}
- 挂载云盘: {"attachDataVolume": {"volumeUuid": "云盘UUID"}}

## 网络服务详解

### 负载均衡 (Load Balancer)
- **负载均衡器 (load-balancers)**: 基于 VIP 创建，将流量分发到后端服务器
- **监听器 (load-balancers/listeners)**: 监听端口和协议配置，支持 TCP/HTTP/HTTPS
- **服务器组 (load-balancers/servergroups)**: 后端服务器组，关联 VM 网卡
- **常用操作**: addBackendServer(添加后端)、removeBackendServer(移除后端)、refreshLoadBalancer(刷新)

### 端口转发 (Port Forwarding)
- **资源路径**: port-forwarding
- **作用**: 将外网流量转发到内部 VM 的指定端口
- **创建参数**: vipUuid, vmNicUuid, protocol, privatePort, publicPort

### 弹性 IP (EIP)
- **资源路径**: eips
- **作用**: 为 VM 提供公网访问能力
- **创建参数**: vipUuid(从已有VIP分配) 或 name + guestIp + l3NetworkUuid(新建)

### 安全组 (Security Group)
- **资源路径**: security-groups
- **规则**: ingress-rule(入站)、egress-rule(出站)
- **常用操作**: addSecurityGroupRule, deleteSecurityGroupRule
- **关联**: 通过 vm-nic-security-group-ref 关联到 VM 网卡

### IPsec VPN
- **资源路径**: ipsec-connections
- **组件**: ipsec-peer-cidr(对端网段)
- **常用操作**: connect, disconnect

### DHCP 服务
- **资源路径**: dhcp-options
- **作用**: 为 L3 网络配置 DNS、网关等 DHCP 选项

## 网络资源详解

### L2Network 类型
- **FlatNetwork (扁平网络)**: 无 VLAN 标签，物理网络直通
- **VlanNetwork (VLAN网络)**: 802.1Q VLAN 隔离，需要 vlanId 参数
- **VxlanNetwork (VXLAN网络)**:overlay 隔离，支持大规模租户
- **VxlanNetworkPool (VXLAN池)**: 集中管理 VXLAN ID 资源

### L3Network 类型
- **L3BasicNetwork**: 基础三层网络，支持 SNAT、DHCP
- **L3VpcNetwork**: VPC 专用网络，与 VPC 路由器关联

### 网络服务 (Network Services)
- **DNS**: 提供域名解析，关联 L3Network
- **SNAT**: 源地址转换，让 VM 访问外网
- **PortForwarding**: 端口转发服务
- **LoadBalancing**: 负载均衡服务
- **IPsec**: VPN 隧道服务
- 查询网络服务: network-service-l3network-ref

### VIP (虚拟 IP)
- **资源路径**: vips
- **作用**: 作为负载均衡器、EIP 的外网入口
- **关联服务**: 通过 vip-network-services-ref 关联网络服务

## 存储资源详解

### 主存储类型 (Primary Storage)
- **NFS**: 网络文件系统，简单易用
- **Ceph**: 分布式存储，支持块存储、对象存储
- **SharedBlock**: 共享块存储，支持 iSCSI
- **iSCSI**: 传统 SAN 存储
- **LocalStorage**: 本地存储，无网络开销

### 备份存储 (Backup Storage)
- **资源路径**: backup-storage
- **类型**: ImageStore、S3、Ceph、阿里云 OSS

### 快照策略 (Snapshot Policy)
- **资源路径**: snapshot-policies
- **参数**: schedule, time, repeat, retention

### CDP 连续数据保护 (企业版)
- **资源路径**: cdp-backup-storage/policy, cdp-task
- **功能**: 实时数据保护，支持任意时间点恢复
- **操作**: createCdpPolicy, startCdpTask, restoreCdpTask

## 平台监控详解

### 告警 (Alarms)
- **资源路径**: zwatch/alarms
- **触发条件**: 基于监控指标阈值
- **状态**: Active, Archived, Cleared

### 事件 (Events)
- **资源路径**: zwatch/events
- **订阅**: zwatch/events/subscriptions
- **作用**: 实时推送资源状态变更

### 监控组 (Monitor Groups)
- **资源路径**: zwatch/monitorgroups
- **作用**: 对 VM 按组批量监控
- **关联**: monitor-group-instances

### 监控模板 (Monitor Templates)
- **资源路径**: monitor-templates
- **作用**: 定义告警规则模板

### 告警动作 (Trigger Actions)
- **资源路径**: zwatch/trigger-actions
- **类型**: 通知、webhook、自动修复

## 租户管理详解

### 账户 (Account)
- **资源路径**: accounts
- **属性**: name, password, type(User/Admin)
- **操作**: login, logout, changePassword

### 用户 (User)
- **资源路径**: users
- **从属**: 属于 Account
- **操作**: createUser, updateUser, deleteUser

### 用户组 (Group)
- **资源路径**: groups
- **作用**: 批量管理用户权限

### 权限策略 (Policy)
- **资源路径**: policies
- **格式**: JSON 格式的权限表达式
- **语法**: 
```json
{
  "resource": "vm-instances",
  "action": "APIQueryVmInstanceMsg",
  "effect": "allow"
}
```

### IAM2 项目 (企业版)
- **资源路径**: iam2/projects
- **作用**: 多租户资源隔离
- **特性**: 独立配额、资源视图

### IAM2 虚拟 ID (企业版)
- **资源路径**: iam2/virtual-ids
- **作用**: 跨云统一身份管理
- **组**: iam2/virtual-id-groups

## 企业版功能详解

### VPC 路由器
- **资源路径**: vpc/virtual-routers
- **作用**: VPC 内三层转发
- **网络**: 关联 L3VpcNetwork

### VPC 高可用 (VPC HA)
- **资源路径**: vpc-ha-groups
- **功能**: 主备切换保证 VPC 网络高可用
- **组件**: vpc-ha-group-vip-ref(浮动IP)

### DRS 动态资源调度 (企业版)
- **资源路径**: cluster-drs
- **功能**: 自动迁移 VM 平衡负载
- **策略**: 调度规则 host-scheduling-rules

### 裸金属管理 (企业版)
- **资源路径**: baremetal2/bm-instances
- **组件**: baremetal2/chassis(物理服务器)
- **操作**: provision(配置)、deploy(部署)

### 混合云 (企业版)
- **阿里云**: aliyun/proxy-vpcs, aliyun/ebs-backup-storage
- **AWS**: (通过 VPC 对等连接)
- **资源**: hybrid/eip-addresses(混合云EIP)

## 通用 API 工具
对于上面列出的所有资源以及未列出的资源，你都可以使用通用 API 工具(zstack_query/zstack_create/zstack_delete/zstack_action/zstack_update)来操作。
resource_path 就是 API 路径去掉 "v1/" 前缀后的部分，例如 "vm-instances"、"load-balancers/listeners"。

## ZQL 查询
ZStack 支持 ZQL (ZStack Query Language)，语法类似 SQL：
- query vminstance where name='test'
- query vminstance where clusterUuid='xxx' and state='Running'
- query host where status='Connected' return with (vminstance)
对于复杂查询，优先使用 ZQL。

## 常用 API 路径参考
### 计算与存储
vm-instances, images, instance-offerings, disk-offerings, volumes, volume-snapshots, volume-backups, snapshot-policies

### 网络与负载均衡
l2-networks, l3-networks, vips, eips, port-forwarding, security-groups, security-group-rules,
load-balancers, load-balancers/listeners, load-balancers/servergroups,
ipsec-connections, ipsec-peer-cidr, dhcp-options, network-service-l3network-ref

### VPC
vpc/virtual-routers, vrouter-route-tables, vpcfirewalls, vpc-firewall-rules, vpc-ha-groups

### 基础设施
hosts, clusters, zones, primary-storage, backup-storage, primary-storage/ceph, backup-storage/ceph,
management-nodes, nics, vm-instances/cdroms, affinity-groups, ssh-key-pair

### 身份认证
accounts, users, groups, policies, iam2/projects, iam2/virtual-ids, iam2/virtual-id-groups, iam2/organizations

### 监控告警
zwatch/alarms, zwatch/events, zwatch/events/subscriptions, zwatch/monitorgroups, zwatch/monitor-group-instances,
monitor-templates, zwatch/trigger-actions

### 运维与调度
scheduler/jobs, scheduler/triggers, global-configurations, system-tags, certificates, ldap/servers, licenses

### 企业版功能
autoscaling/groups, autoscaling/rules, autoscaling/group-instances,
baremetal2/bm-instances, baremetal2/chassis, baremetal2/provision-networks,
cdp-backup-storage/policy, cdp-task, cluster-drs, host-scheduling-rules,
v2vs, v2v-conversion-hosts,
aliyun/proxy-vpcs, aliyun/ebs-backup-storage, hybrid/eip-addresses

## 创建资源的 body 格式
创建资源时 body 通常为 { "params": { ...fields } }，具体字段参考 ZStack API 文档。
常见创建示例：

### 计算资源
- 创建云主机: { "params": { "name": "xxx", "instanceOfferingUuid": "xxx", "imageUuid": "xxx", "l3NetworkUuids": ["xxx"] } }

### 网络资源
- 创建L3网络: { "params": { "name": "xxx", "l2NetworkUuid": "xxx", "category": "Public" } }
- 创建VIP: { "params": { "name": "xxx", "l3NetworkUuid": "xxx" } }
- 创建EIP: { "params": { "name": "xxx", "vipUuid": "xxx", "vmNicUuid": "xxx" } }
- 创建端口转发: { "params": { "name": "xxx", "vipUuid": "xxx", "vmNicUuid": "xxx", "protocol": "tcp", "privatePort": 22, "publicPort": 2222 } }
- 创建安全组: { "params": { "name": "xxx" } }
- 添加安全组规则: { "params": { "securityGroupUuid": "xxx", "rule": { "type": "Ingress", "protocol": "TCP", "startPort": 80, "endPort": 80, "cidr": "0.0.0.0/0" } } }
- 创建IPsec VPN: { "params": { "name": "xxx", "l3NetworkUuid": "xxx", "peerAddress": "xxx", "psk": "xxx" } }

### 负载均衡
- 创建负载均衡器: { "params": { "name": "xxx", "vipUuid": "xxx" } }
- 创建监听器: { "params": { "name": "xxx", "loadBalancerPort": 80, "instancePort": 80, "protocol": "tcp" } }
  路径: load-balancers/{lbUuid}/listeners
- 创建服务器组: { "params": { "name": "xxx" } }
  路径: load-balancers/{lbUuid}/servergroups
- 添加后端服务器: { "params": { "serverGroupUuid": "xxx", "vmNicUuids": ["xxx"] } }

### 存储资源
- 创建快照策略: { "params": { "name": "xxx", "schedule": "0 2 * * *", "retention": 7 } }

### 监控告警
- 创建监控组: { "params": { "name": "xxx" } }
- 创建告警: { "params": { "name": "xxx", "targetUuid": "xxx", "metric": "CPU", "threshold": 80 } }

### 身份认证
- 创建账户: { "params": { "name": "xxx", "password": "xxx" } }
- 创建IAM2项目: { "params": { "name": "xxx", "description": "xxx" } }

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
- 操作前确认关键信息
- 查询结果用表格或列表展示关键字段
- 危险操作（删除、停机）需要明确提醒`;

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
      description: 'ZQL查询：使用 ZStack Query Language 执行复杂查询，语法类似SQL。如 "query vminstance where state=Running"',
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
