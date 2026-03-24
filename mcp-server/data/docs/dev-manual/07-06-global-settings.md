# 全局设置相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.6.html*

---

## 全局设置相关接口

---

## 查询全局设置(QueryGlobalConfig)



### API请求

 URLs

```
GET zstack/v1/global-configurations
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 036d9a68cd8243e99e8d740eaf8b4baf" \ -X GET http://localhost:8080/zstack/v1/global-configurations
```



可查询字段

运行CLI命令行工具，输入QueryGlobalConfig并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "name": "reservedCapacity",       "category": "backupStorage",       "description": "Reserved capcacity on every backup storage",       "defaultValue": "1G",       "value": "2G"     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| category | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| defaultValue | String |  | 0.6 |
| value | String |  | 0.6 |



### SDK示例

 Java SDK

```
QueryGlobalConfigAction action = new QueryGlobalConfigAction(); action.conditions = asList(); action.sessionId = "8509eaa6301b4935a4b100a05f1fe2ba"; QueryGlobalConfigAction.Result res = action.call();
```

 Python SDK

```
QueryGlobalConfigAction action = QueryGlobalConfigAction() action.conditions = [] action.sessionId = "e085fdf6aa354291b71ae8dc5fa880fe" QueryGlobalConfigAction.Result res = action.call()
```

---

## 更新全局设置(UpdateGlobalConfig)



### API请求

 URLs

```
PUT zstack/v1/global-configurations/{category}/{name}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{ "updateGlobalConfig": { "value": "90"   }, "systemTags": [], "userTags": [] }
```

 ````

> **注意:** 说明: 上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"updateGlobalConfig":{"value":"90"}}' \ http://localhost:8080/zstack/v1/global-configurations/quota/scheduler.num/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| category | String | url | 类型 |  | 0.6 |
| name | String | url | 资源名称 |  | 0.6 |
| value (可选) | String | body(包含在**updateGlobalConfig**结构中) | 值 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回

 返回示例

```
{   "inventory": {     "name": "scheduler.num",     "category": "quota",     "description": "default quota for scheduler.num",     "defaultValue": "80",     "value": "90"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | GlobalConfigInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| category | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| defaultValue | String |  | 0.6 |
| value | String |  | 0.6 |



### SDK示例

 Java SDK

```
UpdateGlobalConfigAction action = new UpdateGlobalConfigAction(); action.category = "quota"; action.name = "scheduler.num"; action.value = "90"; action.sessionId = "84a1a9ed2d54449db13e01f7d6face7e"; UpdateGlobalConfigAction.Result res = action.call();
```

 Python SDK

```
UpdateGlobalConfigAction action = UpdateGlobalConfigAction() action.category = "quota" action.name = "scheduler.num" action.value = "90" action.sessionId = "b077cfa8599a4ff1ac4fd7ba67b20a82" UpdateGlobalConfigAction.Result res = action.call()
```

---

### 重置全局设置(ResetGlobalConfig)



#### API请求

 URLs

```
PUT zstack/v1/global-configurations/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "resetGlobalConfig": {},
  "systemTags": [],
  "userTags": []
}
```

 ````

> **注意:** 说明: 上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"resetGlobalConfig":{}}' http://localhost:8080/zstack/v1/global-configurations/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.0 |



#### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



#### SDK示例

 Java SDK

```
ResetGlobalConfigAction action = new ResetGlobalConfigAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ResetGlobalConfigAction.Result res = action.call();
```

 Python SDK

```
ResetGlobalConfigAction action = ResetGlobalConfigAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ResetGlobalConfigAction.Result res = action.call()
```
