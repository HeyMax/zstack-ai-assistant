// Playbook Engine — 运维标准操作规程（SOP）
// 将常见运维场景封装为多步推理流程，LLM 检测到意图后自动执行全部步骤

export class PlaybookEngine {
  constructor() {
    this.playbooks = new Map();
    this._loadBuiltinPlaybooks();
  }

  /**
   * 注册一个 playbook
   */
  register(playbook) {
    this.playbooks.set(playbook.id, playbook);
  }

  /**
   * 根据用户输入匹配最佳 playbook
   * @returns {object|null} matched playbook or null
   */
  match(userMessage) {
    const msg = userMessage.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const pb of this.playbooks.values()) {
      let score = 0;
      for (const trigger of pb.triggers) {
        if (msg.includes(trigger)) score++;
      }
      // 加权：精确匹配短语得分更高
      for (const phrase of (pb.triggerPhrases || [])) {
        if (msg.includes(phrase)) score += 3;
      }
      if (score > bestScore) {
        bestScore = score;
        bestMatch = pb;
      }
    }

    return bestScore >= 1 ? bestMatch : null;
  }

  /**
   * 生成 playbook 感知的 System Prompt 片段
   * 注入到 LLM System Prompt 中，让 LLM 知道有哪些 playbook 可用
   */
  generatePromptAddon() {
    if (this.playbooks.size === 0) return '';

    const entries = [];
    for (const pb of this.playbooks.values()) {
      const stepsSummary = pb.steps
        .map((s, i) => `  ${i + 1}. ${s.description}`)
        .join('\n');
      entries.push(
        `### ${pb.name}\n` +
        `触发词: ${pb.triggers.join('、')}\n` +
        `场景: ${pb.description}\n` +
        `步骤:\n${stepsSummary}`
      );
    }

    return `
## 运维 Playbook（自动多步推理）

当检测到用户意图匹配以下场景时，**按照 Playbook 步骤自动执行全部操作**，不要等用户追问。
每个步骤完成后实时展示中间结果，全部完成后输出**综合分析报告**。

${entries.join('\n\n')}

### 执行准则
- 匹配到 Playbook 后，按步骤顺序执行，**独立步骤可并行调用**
- 每步完成后用简短标题标注进度（如"✅ 第1步：CPU Top10 已获取"）
- 全部步骤完成后输出完整诊断报告（表格 + 建议 + 风险提示）
- 如果某步失败，跳过并在报告中注明，不要中断整个流程
`;
  }

  /**
   * 获取所有 playbook 的简要列表（用于 LLM tool description 或用户展示）
   */
  list() {
    return Array.from(this.playbooks.values()).map(pb => ({
      id: pb.id,
      name: pb.name,
      description: pb.description,
      triggers: pb.triggers
    }));
  }

  // ========== 内置 Playbook ==========

  _loadBuiltinPlaybooks() {
    this.register({
      id: 'vm-performance-diagnosis',
      name: 'VM 性能诊断',
      description: '用户反馈 VM 卡顿/慢/高负载时，自动从 CPU、内存、物理机三个维度诊断瓶颈',
      triggers: ['卡', '慢', '高负载', 'cpu高', '性能差', '响应慢', '卡顿', '延迟高', '负载高'],
      triggerPhrases: ['虚拟机很卡', 'vm很慢', '性能诊断', '负载排查'],
      steps: [
        {
          description: '获取 CPU 使用率 Top10 的 VM',
          tools: ['get_metric_summary'],
          params: {
            namespace: 'ZStack/VM', metric_name: 'CPUUsedUtilization',
            label_key: 'VMUuid', top_n: 10, resolve_resource: 'vm'
          }
        },
        {
          description: '获取内存使用率 Top10 的 VM',
          tools: ['get_metric_summary'],
          params: {
            namespace: 'ZStack/VM', metric_name: 'MemoryUsedInPercent',
            label_key: 'VMUuid', top_n: 10, resolve_resource: 'vm'
          }
        },
        {
          description: '查询物理机整体负载（CPU + 内存），定位是否整机过载',
          tools: ['get_metric_summary'],
          params: {
            namespace: 'ZStack/Host', metric_name: 'CPUUsedUtilization',
            label_key: 'HostUuid', top_n: 10, resolve_resource: 'host'
          }
        },
        {
          description: '综合分析 CPU/内存/物理机数据，诊断瓶颈并给出建议（扩容/迁移/优化）',
          tools: [],
          analysis: true
        }
      ]
    });

    this.register({
      id: 'storage-capacity-check',
      name: '存储容量巡检',
      description: '检查主存储和备份存储的容量使用情况，预警即将用满的存储',
      triggers: ['存储满', '磁盘不足', '容量', '扩容', '存储巡检', '空间不足'],
      triggerPhrases: ['存储容量', '磁盘容量', '存储使用率'],
      steps: [
        {
          description: '查询所有主存储的容量和使用率',
          tools: ['zstack_query'],
          params: { resource_path: 'primary-storage' }
        },
        {
          description: '查询所有备份存储的容量和使用率',
          tools: ['zstack_query'],
          params: { resource_path: 'backup-storage' }
        },
        {
          description: '统计云盘总数和总占用空间',
          tools: ['zstack_zql'],
          params: { zql: "count volume where status='Ready'" }
        },
        {
          description: '查询大于 100GB 的云盘（潜在空间占用大户）',
          tools: ['zstack_zql'],
          params: { zql: "query volume where status='Ready' and actualSize>107374182400 limit 20" }
        },
        {
          description: '综合分析存储使用率趋势，给出扩容建议和清理建议',
          tools: [],
          analysis: true
        }
      ]
    });

    this.register({
      id: 'daily-inspection',
      name: '日常巡检',
      description: '全面巡检云平台健康状态：计算、存储、网络、告警、管理节点',
      triggers: ['巡检', '健康检查', '日常检查', '每日巡检', '平台状态', '健康状态'],
      triggerPhrases: ['做个巡检', '巡检报告', '日常巡检', '整体状况'],
      steps: [
        {
          description: '统计 VM 总数及各状态分布',
          tools: ['zstack_zql'],
          params: { zql: 'count vminstance' },
          additionalQueries: [
            "count vminstance where state='Running'",
            "count vminstance where state='Stopped'",
            "count vminstance where state='Unknown'"
          ]
        },
        {
          description: '查询物理机状态（Connected/Disconnected）',
          tools: ['zstack_query'],
          params: { resource_path: 'hosts' }
        },
        {
          description: '查询主存储和备份存储容量',
          tools: ['zstack_query'],
          params: { resource_path: 'primary-storage' }
        },
        {
          description: '查询活跃告警',
          tools: ['zstack_zql'],
          params: { zql: "query alarm where state='Alarming' limit 20" }
        },
        {
          description: '获取物理机 CPU 负载 Top5',
          tools: ['get_metric_summary'],
          params: {
            namespace: 'ZStack/Host', metric_name: 'CPUUsedUtilization',
            label_key: 'HostUuid', top_n: 5, resolve_resource: 'host'
          }
        },
        {
          description: '查询管理节点状态和版本',
          tools: ['zstack_query'],
          params: { resource_path: 'management-nodes' }
        },
        {
          description: '输出巡检报告：各维度汇总表格 + 风险项 + 建议',
          tools: [],
          analysis: true
        }
      ]
    });

    this.register({
      id: 'network-diagnosis',
      name: '网络连通性排查',
      description: 'VM 网络不通时，从网卡、L3 网络、安全组、VPC/路由、EIP 多层排查',
      triggers: ['网络不通', 'ping不通', '连不上', '网络故障', '访问不了', '无法连接'],
      triggerPhrases: ['网络诊断', '网络排查', '网络不通'],
      steps: [
        {
          description: '查询目标 VM 的网卡和 IP 地址信息',
          tools: ['zstack_zql'],
          params: { zql: "query vmnic where vmInstanceUuid='{vmUuid}'" },
          requiresInput: 'vmUuid'
        },
        {
          description: '查询 VM 所属 L3 网络状态和 DHCP 配置',
          tools: ['zstack_query'],
          params: { resource_path: 'l3-networks' }
        },
        {
          description: '检查安全组规则是否放行了目标端口',
          tools: ['zstack_query'],
          params: { resource_path: 'security-groups' }
        },
        {
          description: '检查 EIP/VIP 绑定状态',
          tools: ['zstack_query'],
          params: { resource_path: 'eips' }
        },
        {
          description: '检查 VPC 路由器状态和路由条目',
          tools: ['zstack_query'],
          params: { resource_path: 'vpc/virtual-routers' }
        },
        {
          description: '综合分析网络链路，定位断点并给出修复建议',
          tools: [],
          analysis: true
        }
      ]
    });

    this.register({
      id: 'resource-cleanup',
      name: '资源清理建议',
      description: '查找可回收的闲置资源：已停止 VM、未挂载云盘、过期快照、未使用 VIP/EIP',
      triggers: ['清理', '回收', '闲置', '浪费', '未使用', '过期'],
      triggerPhrases: ['资源清理', '闲置资源', '回收资源'],
      steps: [
        {
          description: '查询长期停止的 VM（Stopped 状态）',
          tools: ['zstack_zql'],
          params: { zql: "query vminstance where state='Stopped' limit 50" }
        },
        {
          description: '查询未挂载的数据云盘',
          tools: ['zstack_zql'],
          params: { zql: "query volume where type='Data' and vmInstanceUuid is null and status='Ready' limit 50" }
        },
        {
          description: '查询未绑定的 VIP 和 EIP',
          tools: ['zstack_query'],
          params: { resource_path: 'vips' }
        },
        {
          description: '统计快照数量和总占用空间',
          tools: ['zstack_zql'],
          params: { zql: "count volumesnapshot" }
        },
        {
          description: '输出清理建议报告：分类列出可回收资源、预计释放空间、优先级',
          tools: [],
          analysis: true
        }
      ]
    });
  }
}
