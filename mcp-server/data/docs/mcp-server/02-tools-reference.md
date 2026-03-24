# ZStack MCP Server 工具参考

## 工具概览

MCP Server 提供 6 个 MCP Tool，覆盖 API 搜索/执行和监控数据两大能力域：

| 工具名称 | 功能 | 是否需要 ZStack 连接 |
|----------|------|---------------------|
| `search_api` | 按关键词搜索 ZStack API | 否（本地索引） |
| `describe_api` | 获取 API 的详细参数说明 | 否（本地索引） |
| `execute_api` | 执行 ZStack API 并返回结果 | 是 |
| `search_metric` | 搜索监控指标 | 否（本地索引） |
| `get_metric_data` | 获取监控时序数据 | 是 |
| `get_metric_summary` | 获取监控聚合 TopN 排名 | 是 |

## 详细说明

### 1. search_api — 搜索 ZStack API

根据关键词在 2000+ ZStack API 中搜索匹配项。使用倒排索引 + 驼峰拆分实现快速模糊搜索。

**参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `keywords` | `list[str]` | 是 | — | 搜索关键词列表，如 `["Query", "Vm"]` |
| `category` | `str` | 否 | — | 按分类过滤，如 `"vm"`, `"volume"`, `"network"` |
| `limit` | `int` | 否 | 15 | 最多返回数量 |

**返回示例**:
```json
{
  "success": true,
  "count": 3,
  "apis": [
    {"name": "QueryVmInstance", "description": "查询云主机", "category": "vm", "callType": "sync"},
    {"name": "QueryVmNic", "description": "查询云主机网卡", "category": "vm", "callType": "sync"}
  ]
}
```

**搜索逻辑**: 所有关键词取交集——每个关键词都必须在 API 名称或 token 中有匹配。关键词会自动处理：字符串会按逗号/空格拆分，`null` 值会被过滤。

---

### 2. describe_api — 获取 API 详细参数

获取指定 API 的精简参数说明。对 Query API 会自动隐藏标准查询参数（`limit`, `start`, `count`, `groupBy` 等），仅保留核心参数和可查询字段列表。

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `api_name` | `str` | 是 | API 名称，如 `"QueryVmInstance"` |

**返回内容**:
- `api`: API 名称
- `desc`: 描述
- `params`: 参数列表（每个含 `name`, `type`, 可选 `req` 和 `desc`）
- `fields`: 可查询/排序的字段列表（仅 Query API）
- `usage`: Query API 的 conditions 用法提示

如果 API 未找到，会返回模糊搜索建议列表 `suggestions`。

---

### 3. execute_api — 执行 ZStack API

执行指定的 ZStack API 调用。

**参数**:

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `api_name` | `str` | 是 | API 名称 |
| `parameters` | `dict` | 是 | API 参数字典 |

**安全限制**:
- 默认仅允许只读 API（前缀为 `Query`, `Get`, `List`, `Describe`, `Check`, `Count`, `Search`, `Calculate`, `Preview`, `Validate`, `Test`）
- 写操作 API（如 `CreateVmInstance`, `DeleteVolume`）需设置 `ZSTACK_ALLOW_ALL_API=true`

**自动规范化**（针对 Query API）:
- `fields` 字符串自动转数组：`"uuid,name"` → `["uuid", "name"]`
- `conditions` 单对象自动转数组：`{...}` → `[{...}]`
- `in` 操作符的 `value` 数组自动转逗号字符串：`["a","b"]` → `"a,b"`

**错误处理智能提示**:
- 如果 `?=` 操作符不支持，提示改用 `like`，并提供修正后的 `suggestedParameters`
- 如果 `like` 不支持，提示改用 `?=`
- 如果 `~=` 不支持，提示改用 `like` 并自动转换正则表达式为 LIKE 模式
- Session 过期时自动刷新（仅用户名密码认证模式）

**Query API 条件语法**:

```json
{
  "conditions": [
    {"name": "字段名", "op": "操作符", "value": "值"}
  ]
}
```

| 操作符 | 含义 | 示例 |
|--------|------|------|
| `=` | 等于 | `{"name":"uuid", "op":"=", "value":"xxx"}` |
| `!=` | 不等于 | `{"name":"state", "op":"!=", "value":"Deleted"}` |
| `>`, `>=`, `<`, `<=` | 比较 | `{"name":"cpuNum", "op":">", "value":"4"}` |
| `?=` 或 `like` | 模糊匹配 | `{"name":"name", "op":"like", "value":"%test%"}` |
| `~=` | 正则匹配（部分版本） | `{"name":"name", "op":"~=", "value":".*test.*"}` |
| `=null` / `!=null` | 空/非空 | `{"name":"description", "op":"=null", "value":""}` |
| `in` / `not in` | 列表匹配 | `{"name":"state", "op":"in", "value":"Running,Stopped"}` |

**调用示例**:
```json
{
  "api_name": "QueryVmInstance",
  "parameters": {
    "conditions": [
      {"name": "uuid", "op": "like", "value": "ae6e57a0%"}
    ],
    "fields": ["uuid", "name", "state", "cpuNum", "memorySize"]
  }
}
```

---

### 4. search_metric — 搜索监控指标

在 ZStack 监控指标库中搜索可用指标。

**参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `keywords` | `list[str]` | 是 | — | 搜索关键词 |
| `namespace` | `str` | 否 | — | 命名空间过滤（模糊匹配），如 `"vm"`, `"host"`, `"ZStack/VM"` |
| `limit` | `int` | 否 | 20 | 最多返回数量 |
| `match_mode` | `str` | 否 | `"or"` | `"and"` 取交集，`"or"` 取并集 |
| `prefer_namespaces` | `list[str]` | 否 | `["ZStack/VM","ZStack/Host"]` | 优先排序的命名空间 |

**返回示例**:
```json
{
  "success": true,
  "count": 2,
  "metrics": [
    {
      "name": "CPUUsedUtilization",
      "description": "CPU使用率",
      "namespace": "ZStack/VM",
      "labelNames": ["VMUuid", "HostUuid"]
    }
  ]
}
```

**提示**:
- 不确定 namespace 时先不传，返回结果会携带 namespace 值供后续使用
- 指标名在不同 namespace 可能重名，建议配合 `namespace` 或 `prefer_namespaces` 使用
- 当指定 namespace 无结果时，会自动回退搜索并提供跨命名空间建议 (`suggestedNamespaces`)

---

### 5. get_metric_data — 获取监控数据

从 ZStack 获取时序监控数据，底层调用 `APIGetMetricDataMsg`。

**参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `namespace` | `str` | 是 | — | 命名空间 |
| `metric_name` | `str` | 是 | — | 指标名称 |
| `start_time` | `str\|int` | 否 | — | 开始时间（ISO 8601 或秒级时间戳） |
| `end_time` | `str\|int` | 否 | — | 结束时间 |
| `period` | `int` | 否 | 60 | 采样周期（秒） |
| `labels` | `list[str]\|dict` | 否 | — | 标签过滤 |
| `summary_only` | `bool` | 否 | `false` | 仅返回统计摘要 |

**时间格式支持**:
- ISO 8601: `"2024-01-15T10:00:00Z"`, `"2024-01-15 10:00:00"`
- 秒级时间戳: `1705312800`
- 毫秒时间戳: `1705312800000`（自动转为秒级）

**Labels 格式支持**:
- 字符串列表: `["VMUuid=xxx", "HostUuid=yyy"]`
- 字典: `{"VMUuid": "xxx", "HostUuid": "yyy"}`
- 对象列表: `[{"key": "VMUuid", "value": "xxx"}]`

**数据量控制**:
- 估算公式: `点数 ≈ ceil((end - start) / period) × series_count`
- 不传 labels 时可能返回多组序列（每个 label 组合一组）
- 建议：缩短时间范围、增大 period、或添加 labels 过滤

**`summary_only=true` 模式**: 返回统计信息而非原始数据点：
```json
{
  "success": true,
  "summary": {
    "avg": 45.2, "max": 98.1, "min": 2.3,
    "sum": 12345.6, "count": 273,
    "variance": 512.7, "stddev": 22.6
  },
  "dataPointCount": 273,
  "seriesCount": 1
}
```

---

### 6. get_metric_summary — 监控聚合 TopN

按指定 label_key 分组聚合监控数据，返回 TopN 排名。适用于"哪些 VM/Host 的 CPU 使用率最高"等排名类查询。

**参数**:

| 参数 | 类型 | 必填 | 默认值 | 说明 |
|------|------|------|--------|------|
| `namespace` | `str` | 是 | — | 命名空间 |
| `metric_name` | `str` | 是 | — | 主指标名称 |
| `label_key` | `str` | 是 | — | 分组标签键，如 `"VMUuid"`, `"HostUuid"` |
| `metric_names` | `list[str]` | 否 | — | 多指标合并（如网络 in/out） |
| `start_time` | `str\|int` | 否 | — | 开始时间 |
| `end_time` | `str\|int` | 否 | — | 结束时间 |
| `period` | `int` | 否 | 60 | 采样周期（秒） |
| `aggregate` | `str` | 否 | `"max"` | 单指标聚合: `max`/`avg`/`sum`/`min` |
| `combine` | `str` | 否 | `"sum"` | 多指标合并: `sum`/`avg`/`max`/`min` |
| `threshold_op` | `str` | 否 | — | 阈值比较符: `>`,`>=`,`<`,`<=`,`==`,`!=` |
| `threshold_value` | `number` | 否 | — | 阈值数值 |
| `top_n` | `int` | 否 | 10 | 返回条数 |
| `resolve_resource` | `str` | 否 | — | `"vm"` 或 `"host"` 用于解析 UUID 为名称 |

**典型使用场景**:
- "CPU 使用率最高的 10 台 VM": `metric_name="CPUUsedUtilization"`, `label_key="VMUuid"`, `resolve_resource="vm"`
- "网络流量最大的主机（in+out）": `metric_names=["NetworkInBytes","NetworkOutBytes"]`, `label_key="HostUuid"`, `combine="sum"`
- "内存使用超 90% 的 VM": `metric_name="MemoryUsedPercent"`, `threshold_op=">="`, `threshold_value=90`

**返回示例**:
```json
{
  "success": true,
  "metrics": ["CPUUsedUtilization"],
  "aggregate": "max",
  "combine": "sum",
  "count": 3,
  "result": [
    {"labelValue": "uuid-1", "name": "web-server-01", "exists": true, "aggregateValue": 95.2, "stats": {"avg": 78.1, "max": 95.2, "min": 12.3, "count": 60}},
    {"labelValue": "uuid-2", "name": "db-server-01", "exists": true, "aggregateValue": 87.5, "stats": {"avg": 65.3, "max": 87.5, "min": 10.1, "count": 60}}
  ]
}
```

## 典型交互流程

用户问: "帮我查一下 UUID 以 ae6e57a0 开头的 VM 的详情"

AI 执行步骤:
1. `search_api(keywords=["Query", "Vm", "Instance"])` → 找到 `QueryVmInstance`
2. `describe_api(api_name="QueryVmInstance")` → 获取参数说明和可用字段
3. `execute_api(api_name="QueryVmInstance", parameters={"conditions": [{"name": "uuid", "op": "like", "value": "ae6e57a0%"}]})` → 获取 VM 详情

用户问: "最近一小时哪些 VM 的 CPU 使用率最高？"

AI 执行步骤:
1. `search_metric(keywords=["CPU", "Usage"])` → 找到 `CPUUsedUtilization` (namespace: `ZStack/VM`)
2. `get_metric_summary(namespace="ZStack/VM", metric_name="CPUUsedUtilization", label_key="VMUuid", resolve_resource="vm", top_n=10)` → 获取 Top10 VM
