// Workflow Engine — 可编排的多步操作执行器
// 支持 JSON 定义的工作流模板：串行/并行/循环/条件分支

export class WorkflowEngine {
  constructor() {
    this.workflows = new Map();
    this._loadBuiltinWorkflows();
  }

  /**
   * 注册一个 workflow
   */
  register(workflow) {
    if (!workflow.id || !workflow.steps) throw new Error('Workflow 缺少 id 或 steps');
    this.workflows.set(workflow.id, workflow);
  }

  /**
   * 获取所有可用 workflow 的列表（用于 LLM tool description）
   */
  list() {
    return Array.from(this.workflows.values()).map(wf => ({
      id: wf.id,
      name: wf.name,
      description: wf.description,
      parameters: wf.parameters || {}
    }));
  }

  /**
   * 获取 workflow 详情
   */
  get(workflowId) {
    return this.workflows.get(workflowId) || null;
  }

  /**
   * 生成给 LLM 的 tool description，让 LLM 知道有哪些 workflow 可用
   */
  generateToolDescription() {
    const items = this.list();
    if (items.length === 0) return '暂无可用的工作流模板';
    return items.map(wf => {
      const paramDesc = Object.entries(wf.parameters)
        .map(([k, v]) => `  - ${k}: ${v.description || v.type}${v.required ? ' (必填)' : ` (默认: ${v.default})`}`)
        .join('\n');
      return `- **${wf.id}** — ${wf.name}: ${wf.description}\n  参数:\n${paramDesc}`;
    }).join('\n\n');
  }

  /**
   * 执行 workflow
   * @param {string} workflowId
   * @param {object} params - 用户提供的参数
   * @param {object} executors - { zstackClient, mcpClient } 用于实际执行 API 调用
   * @param {function} onProgress - 进度回调 (stepId, status, result)
   * @returns {object} 执行上下文（包含所有步骤结果）
   */
  async execute(workflowId, params, executors, onProgress = () => {}) {
    const wf = this.workflows.get(workflowId);
    if (!wf) throw new Error(`未找到工作流: ${workflowId}`);

    // 校验必填参数
    for (const [key, schema] of Object.entries(wf.parameters || {})) {
      if (schema.required && (params[key] === undefined || params[key] === null)) {
        throw new Error(`缺少必填参数: ${key} — ${schema.description || ''}`);
      }
    }

    // 填充默认值
    const ctx = { _params: { ...params } };
    for (const [key, schema] of Object.entries(wf.parameters || {})) {
      if (ctx._params[key] === undefined && schema.default !== undefined) {
        ctx._params[key] = schema.default;
      }
    }

    const results = [];

    for (const step of wf.steps) {
      onProgress(step.id, 'running', null);

      try {
        if (step.parallel) {
          // 并行执行多个子步骤
          const parallelResults = await Promise.all(
            step.parallel.map(sub =>
              this._executeStep(sub, ctx, executors).then(r => {
                if (sub.output) ctx[sub.output] = r;
                return { id: sub.id || sub.output, result: r, success: true };
              }).catch(e => ({ id: sub.id || sub.output, error: e.message, success: false }))
            )
          );
          results.push({ id: step.id, type: 'parallel', results: parallelResults });
          onProgress(step.id, 'done', parallelResults);

        } else if (step.loop) {
          // 循环执行
          const count = this._resolve(step.loop.count, ctx);
          const loopResults = [];
          for (let i = 0; i < count; i++) {
            ctx._loop = { index: i, total: count };
            try {
              const r = await this._executeStep(step, ctx, executors);
              loopResults.push({ index: i, result: r, success: true });
            } catch (e) {
              loopResults.push({ index: i, error: e.message, success: false });
            }
          }
          if (step.output) ctx[step.output] = loopResults.filter(r => r.success).map(r => r.result);
          delete ctx._loop;
          results.push({ id: step.id, type: 'loop', results: loopResults });
          onProgress(step.id, 'done', loopResults);

        } else if (step.condition) {
          // 条件执行
          const shouldRun = this._evaluateCondition(step.condition, ctx);
          if (shouldRun) {
            const r = await this._executeStep(step, ctx, executors);
            if (step.output) ctx[step.output] = r;
            results.push({ id: step.id, type: 'conditional', executed: true, result: r });
            onProgress(step.id, 'done', r);
          } else {
            results.push({ id: step.id, type: 'conditional', executed: false, reason: 'condition not met' });
            onProgress(step.id, 'skipped', null);
          }

        } else {
          // 普通串行步骤
          const r = await this._executeStep(step, ctx, executors);
          if (step.output) ctx[step.output] = r;
          results.push({ id: step.id, type: 'sequential', result: r, success: true });
          onProgress(step.id, 'done', r);
        }
      } catch (e) {
        results.push({ id: step.id, error: e.message, success: false });
        onProgress(step.id, 'error', e.message);
        // 继续下一步（容错），除非标记为 critical
        if (step.critical) {
          throw new Error(`关键步骤 ${step.id} 失败: ${e.message}`);
        }
      }
    }

    return { workflow: workflowId, params: ctx._params, results, context: ctx };
  }

  /**
   * 执行单个步骤
   */
  async _executeStep(step, ctx, executors) {
    const { zstackClient, mcpClient } = executors;
    const action = step.action;
    const params = this._resolveParams(step.params || {}, ctx);

    switch (action) {
      case 'zstack_query':
        return zstackClient.query(
          this._fixPath(params.resource_path),
          params.conditions || [], params.limit || 100, params.start || 0
        );
      case 'zstack_create':
        return zstackClient.create(this._fixPath(params.resource_path), params.body);
      case 'zstack_delete':
        return zstackClient.remove(this._fixPath(params.resource_path), params.uuid, params.delete_mode || 'Permissive');
      case 'zstack_action':
        return zstackClient.action(this._fixPath(params.resource_path), params.uuid, params.body);
      case 'zstack_update':
        return zstackClient.update(this._fixPath(params.resource_path), params.uuid, params.body);
      case 'zstack_zql':
        return zstackClient.zql(params.zql);
      case 'mcp_call':
        if (!mcpClient?.enabled) throw new Error('MCP Server 未启用');
        return mcpClient.callTool(params.tool_name, params.arguments || {});
      default:
        throw new Error(`未知 action: ${action}`);
    }
  }

  _fixPath(p) {
    return p && !p.startsWith('v1/') ? `v1/${p}` : p;
  }

  /**
   * 解析模板字符串中的变量 ${xxx}
   */
  _resolve(template, ctx) {
    if (typeof template === 'number') return template;
    if (typeof template !== 'string') return template;

    return template.replace(/\$\{([^}]+)\}/g, (_, expr) => {
      const parts = expr.split('.');
      let val = ctx._params;

      // 先在 _params 中查找，再在 ctx 顶层查找
      for (const part of parts) {
        const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
        if (arrayMatch) {
          val = val?.[arrayMatch[1]]?.[parseInt(arrayMatch[2])];
        } else {
          val = val?.[part];
        }
        if (val === undefined) break;
      }

      if (val === undefined) {
        // 在 ctx 顶层再找一次
        val = ctx;
        for (const part of parts) {
          const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
          if (arrayMatch) {
            val = val?.[arrayMatch[1]]?.[parseInt(arrayMatch[2])];
          } else {
            val = val?.[part];
          }
          if (val === undefined) break;
        }
      }

      return val !== undefined ? String(val) : `\${${expr}}`;
    });
  }

  /**
   * 递归解析 params 对象中的所有模板变量
   */
  _resolveParams(params, ctx) {
    if (typeof params === 'string') return this._resolve(params, ctx);
    if (Array.isArray(params)) return params.map(p => this._resolveParams(p, ctx));
    if (typeof params === 'object' && params !== null) {
      const resolved = {};
      for (const [k, v] of Object.entries(params)) {
        resolved[k] = this._resolveParams(v, ctx);
      }
      return resolved;
    }
    return params;
  }

  /**
   * 简单条件评估
   */
  _evaluateCondition(condition, ctx) {
    // 支持: "exists:varName" / "notEmpty:varName" / "gt:varName:value"
    const [op, ...args] = condition.split(':');
    const val = this._resolve(`\${${args[0]}}`, ctx);
    switch (op) {
      case 'exists': return val !== undefined && val !== `\${${args[0]}}`;
      case 'notEmpty': return val && val !== `\${${args[0]}}` && (Array.isArray(val) ? val.length > 0 : true);
      case 'gt': return Number(val) > Number(args[1]);
      case 'lt': return Number(val) < Number(args[1]);
      case 'eq': return String(val) === String(args[1]);
      default: return true;
    }
  }

  // ========== 内置 Workflow 模板 ==========

  _loadBuiltinWorkflows() {
    this.register({
      id: 'create-test-env',
      name: '创建测试环境',
      description: '一键创建测试环境：查找可用资源 → 创建安全组 → 批量创建 VM',
      parameters: {
        env_name: { type: 'string', required: true, description: '环境名称前缀' },
        vm_count: { type: 'integer', default: 3, description: '创建 VM 数量' }
      },
      steps: [
        {
          id: 'find_resources',
          parallel: [
            {
              id: 'find_offerings',
              action: 'zstack_query',
              params: { resource_path: 'instance-offerings', limit: 5 },
              output: 'offerings'
            },
            {
              id: 'find_images',
              action: 'zstack_zql',
              params: { zql: "query image where status='Ready' and state='Enabled' limit 5" },
              output: 'images'
            },
            {
              id: 'find_networks',
              action: 'zstack_query',
              params: { resource_path: 'l3-networks', limit: 5 },
              output: 'networks'
            }
          ]
        },
        {
          id: 'create_sg',
          action: 'zstack_create',
          params: {
            resource_path: 'security-groups',
            body: { params: { name: '${env_name}-sg', description: '测试环境安全组 by AI workflow' } }
          },
          output: 'sg'
        },
        {
          id: 'create_vms',
          action: 'zstack_create',
          loop: { count: '${vm_count}' },
          params: {
            resource_path: 'vm-instances',
            body: {
              params: {
                name: '${env_name}-vm-${_loop.index}',
                instanceOfferingUuid: '${offerings.inventories[0].uuid}',
                imageUuid: '${images.results[0].inventories[0].uuid}',
                l3NetworkUuids: ['${networks.inventories[0].uuid}']
              }
            }
          },
          output: 'vms'
        }
      ]
    });

    this.register({
      id: 'cleanup-stopped-vms',
      name: '清理已停止 VM',
      description: '查找所有已停止的 VM，列出详情供确认后批量删除',
      parameters: {
        dry_run: { type: 'boolean', default: true, description: '是否仅预览（不执行删除）' },
        max_delete: { type: 'integer', default: 10, description: '最多删除数量' }
      },
      steps: [
        {
          id: 'find_stopped',
          action: 'zstack_zql',
          params: { zql: "query vminstance where state='Stopped' limit 100" },
          output: 'stopped_vms'
        },
        {
          id: 'count_stopped',
          action: 'zstack_zql',
          params: { zql: "count vminstance where state='Stopped'" },
          output: 'stopped_count'
        }
        // 注意：实际删除需要 LLM 在分析结果后，使用 zstack_delete 逐个执行
        // workflow 只负责查询和编排，危险操作仍需用户确认
      ]
    });

    this.register({
      id: 'batch-vm-snapshot',
      name: '批量创建快照',
      description: '为指定条件的 VM 批量创建系统盘快照（用于变更前备份）',
      parameters: {
        condition: { type: 'string', default: "state='Running'", description: 'VM 过滤条件（ZQL where 子句）' },
        snapshot_prefix: { type: 'string', default: 'backup', description: '快照名称前缀' },
        max_vms: { type: 'integer', default: 20, description: '最多处理 VM 数量' }
      },
      steps: [
        {
          id: 'find_vms',
          action: 'zstack_zql',
          params: { zql: "query vminstance where ${condition} limit ${max_vms}" },
          output: 'target_vms'
        },
        {
          id: 'find_root_volumes',
          action: 'zstack_zql',
          params: { zql: "query volume where type='Root' and status='Ready' limit ${max_vms}" },
          output: 'root_volumes'
        }
        // 实际创建快照由 LLM 根据结果逐个执行 zstack_create volume-snapshots
      ]
    });

    this.register({
      id: 'host-maintenance-prep',
      name: '物理机维护准备',
      description: '物理机进入维护模式前的检查：列出上面的 VM、检查目标主机容量、评估迁移风险',
      parameters: {
        host_uuid: { type: 'string', required: true, description: '要维护的物理机 UUID' }
      },
      steps: [
        {
          id: 'host_info',
          action: 'zstack_query',
          params: { resource_path: 'hosts', conditions: ['uuid=${host_uuid}'] },
          output: 'host'
        },
        {
          id: 'vms_on_host',
          action: 'zstack_zql',
          params: { zql: "query vminstance where hostUuid='${host_uuid}' and state='Running'" },
          output: 'running_vms'
        },
        {
          id: 'all_hosts',
          action: 'zstack_query',
          params: { resource_path: 'hosts', conditions: ["status=Connected"] },
          output: 'available_hosts'
        }
        // LLM 分析：目标主机上有多少 VM、其他主机是否有足够容量接收迁移
      ]
    });
  }
}
