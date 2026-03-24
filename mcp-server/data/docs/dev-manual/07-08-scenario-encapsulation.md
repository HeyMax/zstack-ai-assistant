# 场景封装相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.8.html*

---

## 场景封装相关接口

---

## 应用模板(ApplyTemplateConfig)



### API请求

 URLs

```
PUT zstack/v1/template-configurations/{templateUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "applyTemplateConfig": {},   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"applyTemplateConfig":{}}' http://localhost:8080/zstack/v1/template-configurations/00000000/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| templateUuid | String | url | 模板Uuid |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
ApplyTemplateConfigAction action = new ApplyTemplateConfigAction(); action.templateUuid = "00000000"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; ApplyTemplateConfigAction.Result res = action.call();
```

 Python SDK

```
ApplyTemplateConfigAction action = ApplyTemplateConfigAction() action.templateUuid = "00000000" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" ApplyTemplateConfigAction.Result res = action.call()
```

---

## 查询所有模板信息(QueryGlobalConfigTemplate)



### API请求

 URLs

```
GET zstack/v1/template-configurations/templates GET zstack/v1/template-configurations/templates/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/template-configurations/templates?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/template-configurations/templates/8bca97cf1b2030f7b0872191260a4dc5
```



可查询字段

运行CLI命令行工具，输入QueryGlobalConfigTemplate并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "uuid": "reservedCapacity",       "name": "scenes1",       "type": "System",       "description": "For scenes1"     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventories | List | 详情参考[inventories] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 模板名称 | 3.6.0 |
| type | String | 模板类型 | 3.6.0 |
| description | String | 该模板的描述信息及推荐场景 | 3.6.0 |



### SDK示例

 Java SDK

```
QueryGlobalConfigTemplateAction action = new QueryGlobalConfigTemplateAction(); action.conditions = asList(); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; QueryGlobalConfigTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryGlobalConfigTemplateAction action = QueryGlobalConfigTemplateAction() action.conditions = [] action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" QueryGlobalConfigTemplateAction.Result res = action.call()
```

---

## 查询模板具体配置(QueryTemplateConfig)



### API请求

 URLs

```
GET zstack/v1/template-configurations/configs GET zstack/v1/template-configurations/configs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/template-configurations/configs?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/template-configurations/configs/8d81b083dd0b3374af2454ab8d3fb0ef
```



可查询字段

运行CLI命令行工具，输入QueryTemplateConfig并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "templateUuid": "0000111122223333",       "category": "backupStorage",       "name": "reservedCapacity",       "defaultValue": "1G",       "value": "2G"     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventories | List | 详情参考[inventories] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| templateUuid | String | 所属模板Uuid | 3.6.0 |
| category | String | 配置类型 | 3.6.0 |
| name | String | 配置名称 | 3.6.0 |
| defaultValue | String | 模板默认值 | 3.6.0 |
| value | String | 模板值 | 3.6.0 |



### SDK示例

 Java SDK

```
QueryTemplateConfigAction action = new QueryTemplateConfigAction(); action.conditions = asList(); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; QueryTemplateConfigAction.Result res = action.call();
```

 Python SDK

```
QueryTemplateConfigAction action = QueryTemplateConfigAction() action.conditions = [] action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" QueryTemplateConfigAction.Result res = action.call()
```

---

### 更新模板值(UpdateTemplateConfig)



#### API请求

 URLs

```
PUT zstack/v1/template-configurations/{templateUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateTemplateConfig": {
    "category": "quota",
    "name": "scheduler.num",
    "value": "90"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateTemplateConfig":{"category":"quota","name":"scheduler.num","value":"90"}}' http://localhost:8080/zstack/v1/template-configurations/0000/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| templateUuid | String | url | 模板Uuid |  | 3.6.0 |
| category | String | body(包含在**updateTemplateConfig**结构中) | 对应的GlobalConfig配置类型 |  | 3.6.0 |
| name | String | body(包含在**updateTemplateConfig**结构中) | 对应的GlobalConfig配置名称 |  | 3.6.0 |
| value | String | body(包含在**updateTemplateConfig**结构中) | 模板值 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "templateUuid": "000011112222",
    "category": "vm",
    "name": "emulateHyperV",
    "defaultValue": "true",
    "value": "true"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | TemplateConfigInventory | 详情参考[inventory] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| templateUuid | String | 所属模板Uuid | 3.6.0 |
| category | String | 配置类型 | 3.6.0 |
| name | String | 配置名称 | 3.6.0 |
| defaultValue | String | 模板默认值 | 3.6.0 |
| value | String | 模板值 | 3.6.0 |



#### SDK示例

 Java SDK

```
UpdateTemplateConfigAction action = new UpdateTemplateConfigAction();
action.templateUuid = "0000";
action.category = "quota";
action.name = "scheduler.num";
action.value = "90";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateTemplateConfigAction.Result res = action.call();
```

 Python SDK

```
UpdateTemplateConfigAction action = UpdateTemplateConfigAction()
action.templateUuid = "0000"
action.category = "quota"
action.name = "scheduler.num"
action.value = "90"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateTemplateConfigAction.Result res = action.call()
```

---

### 重置模板到初始状态(ResetTemplateConfig)



#### API请求

 URLs

```
PUT zstack/v1/template-configurations/{templateUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "resetTemplateConfig": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"resetTemplateConfig":{}}' http://localhost:8080/zstack/v1/template-configurations/00000000/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| templateUuid | String | url | 模板Uuid |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



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
ResetTemplateConfigAction action = new ResetTemplateConfigAction();
action.templateUuid = "00000000";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ResetTemplateConfigAction.Result res = action.call();
```

 Python SDK

```
ResetTemplateConfigAction action = ResetTemplateConfigAction()
action.templateUuid = "00000000"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ResetTemplateConfigAction.Result res = action.call()
```

---

### 重置模板配置到默认值(RevertTemplateConfig)



#### API请求

 URLs

```
PUT zstack/v1/template-configurations/{templateUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "resetTemplateConfig": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X PUT -d '{"revertTemplateConfig":{}}' http://localhost:8080/zstack/v1/template-configurations/fd5ae067a0b037d2af3a6ec060c4be86/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| templateUuid | String | url | 模板UUID |  | 4.6.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.21 |



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
RevertTemplateConfigAction action = new RevertTemplateConfigAction();
action.templateUuid = "fd5ae067a0b037d2af3a6ec060c4be86";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RevertTemplateConfigAction.Result res = action.call();
```

 Python SDK

```
RevertTemplateConfigAction action = RevertTemplateConfigAction()
action.templateUuid = "fd5ae067a0b037d2af3a6ec060c4be86"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RevertTemplateConfigAction.Result res = action.call()
```
