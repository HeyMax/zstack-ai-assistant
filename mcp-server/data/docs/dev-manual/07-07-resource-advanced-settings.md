# 资源高级设置相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.7.html*

---

## 资源高级设置相关接口

---

## 获取资源的资源高级设置(GetResourceConfig)



### API请求

 URLs

```
GET zstack/v1/resource-configurations/{resourceUuid}/{category}/{name}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/resource-configurations/77663dd5ff84460bbf1817aa3c59d125/host/cpu.overProvisioning.ratio
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| category | String | url | 设置类型 |  | 3.4.0 |
| name | String | url | 设置名称 |  | 3.4.0 |
| resourceUuid | String | url | 资源UUID |  | 3.4.0 |
| systemTags (可选) | List | query |  |  | 3.4.0 |
| userTags (可选) | List | query |  |  | 3.4.0 |



### API返回

 返回示例

```
{   "value": "5",   "effectiveConfigs": [     {       "uuid": "dae9aeb6d74e4f44823f2e0c4f1cc79f",       "resourceUuid": "46597de31eac41539c4e6eda52885769",       "resourceType": "HostVO",       "name": "cpu.overProvisioning.ratio",       "category": "host",       "value": "5",       "createDate": "Nov 14, 2017 10:20:57 PM",       "lastOpDate": "Nov 14, 2017 10:20:57 PM"     },     {       "uuid": "5c3c94a73d7b4a95a1818241f2e427ae",       "resourceUuid": "371519310f344695854de27bb9743121",       "resourceType": "ClusterVO",       "name": "cpu.overProvisioning.ratio",       "category": "host",       "value": "10",       "createDate": "Nov 14, 2017 10:20:57 PM",       "lastOpDate": "Nov 14, 2017 10:20:57 PM"     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| value | String | 配置的值 | 3.4.0 |
| success | boolean |  | 3.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| effectiveConfigs | List | 生效的设置列表，按优先级从高到低排序，详情参考[effectiveConfigs] | 3.4.0 |
| error | ErrorCode | 详情参考[error] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #effectiveConfigs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| resourceUuid | String | 配置对应的资源UUID | 3.4.0 |
| resourceType | String | 配置对应的资源类型 | 3.4.0 |
| name | String | 配置名称 | 3.4.0 |
| description | String | 配置的详细描述 | 3.4.0 |
| category | String | 配置类别 | 3.4.0 |
| value | String | 配置的值 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |



### SDK示例

 Java SDK

```
GetResourceConfigAction action = new GetResourceConfigAction(); action.category = "host"; action.name = "cpu.overProvisioning.ratio"; action.resourceUuid = "70fdcc564f564c29af98e48e78be56e4"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; GetResourceConfigAction.Result res = action.call();
```

 Python SDK

```
GetResourceConfigAction action = GetResourceConfigAction() action.category = "host" action.name = "cpu.overProvisioning.ratio" action.resourceUuid = "b1ea1d424bf04a50b15b33bcd0f8a80d" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" GetResourceConfigAction.Result res = action.call()
```

---

## 获取可配置的资源高级设置(GetResourceBindableConfig)



### API请求

 URLs

```
GET zstack/v1/resource-configurations/bindable GET zstack/v1/resource-configurations/bindable/{category}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/resource-configurations/bindable?category=host
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/resource-configurations/bindable/host?category=host
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| category (可选) | String | query | 设置类型 |  | 3.4.0 |
| systemTags (可选) | List | query |  |  | 3.4.0 |
| userTags (可选) | List | query |  |  | 3.4.0 |



### API返回

 返回示例

```
{   "bindableConfigs": [     {       "name": "cpu.overProvisioning.ratio",       "category": "host",       "bindResourceTypes": [         "HostVO",         "ClusterVO",         "ZoneVO"       ]     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| bindableConfigs | List | 详情参考[bindableConfigs] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #bindableConfigs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 设置名称 | 3.4.0 |
| category | String | 设置类型 | 3.4.0 |
| description | String | 设置的详细描述 | 3.4.0 |
| bindResourceTypes | List | 设置可绑定的资源类型 | 3.4.0 |



### SDK示例

 Java SDK

```
GetResourceBindableConfigAction action = new GetResourceBindableConfigAction(); action.category = "host"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; GetResourceBindableConfigAction.Result res = action.call();
```

 Python SDK

```
GetResourceBindableConfigAction action = GetResourceBindableConfigAction() action.category = "host" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" GetResourceBindableConfigAction.Result res = action.call()
```

---

## 删除资源的资源高级设置(DeleteResourceConfig)



### API请求

 URLs

```
DELETE zstack/v1/resource-configurations/{category}/{name}/{resourceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/resource-configurations/host/cpu.overProvisioning.ratio/02bcf0b045e247e59bfd51630064443f
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| category | String | url | 设置类型 |  | 3.4.0 |
| name | String | url | 设置名称 |  | 3.4.0 |
| resourceUuid | String | url | 资源UUID |  | 3.4.0 |
| deleteMode (可选) | String | body |  |  | 3.4.0 |
| systemTags (可选) | List | body |  |  | 3.4.0 |
| userTags (可选) | List | body |  |  | 3.4.0 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
DeleteResourceConfigAction action = new DeleteResourceConfigAction(); action.category = "host"; action.name = "cpu.overProvisioning.ratio"; action.resourceUuid = "763612d48d514b35a7df506cf1a23f57"; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteResourceConfigAction.Result res = action.call();
```

 Python SDK

```
DeleteResourceConfigAction action = DeleteResourceConfigAction() action.category = "host" action.name = "cpu.overProvisioning.ratio" action.resourceUuid = "4ac85edbee2c489ea58e3f26b53182de" action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteResourceConfigAction.Result res = action.call()
```

---

### 查询资源高级设置(QueryResourceConfig)



#### API请求

 URLs

```
GET zstack/v1/resource-configurations
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/resource-configurations
```



可查询字段

运行CLI命令行工具，输入QueryResourceConfig并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4944c2599c394bd5be5ccc1099dfdb4b",
      "resourceUuid": "45a511dfef1b474dbef3c1ff88275465",
      "resourceType": "ClusterVO",
      "name": "cpu.overProvisioning.ratio",
      "category": "host",
      "value": "10",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventories | List | 详情参考[inventories] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| resourceUuid | String | 配置对应的资源UUID | 3.4.0 |
| resourceType | String | 配置对应的资源类型 | 3.4.0 |
| name | String | 配置名称 | 3.4.0 |
| description | String | 配置的详细描述 | 3.4.0 |
| category | String | 配置类别 | 3.4.0 |
| value | String | 配置的值 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



#### SDK示例

 Java SDK

```
QueryResourceConfigAction action = new QueryResourceConfigAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryResourceConfigAction.Result res = action.call();
```

 Python SDK

```
QueryResourceConfigAction action = QueryResourceConfigAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryResourceConfigAction.Result res = action.call()
```

---

### 更新资源高级设置(UpdateResourceConfig)



#### API请求

 URLs

```
PUT zstack/v1/resource-configurations/{category}/{name}/{resourceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateResourceConfig": {
    "value": "10"
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
-X PUT -d '{"updateResourceConfig":{"value":"10"}}' http://localhost:8080/zstack/v1/resource-configurations/host/cpu.overProvisioning.ratio/afd5f67a253b4990b9e8160672357eed/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| category | String | url | 设置类型 |  | 3.4.0 |
| name | String | url | 设置名称 |  | 3.4.0 |
| resourceUuid | String | url | 设置的资源UUID |  | 3.4.0 |
| value | String | body(包含在**updateResourceConfig**结构中) | 设置的值 |  | 3.4.0 |
| systemTags (可选) | List | body |  |  | 3.4.0 |
| userTags (可选) | List | body |  |  | 3.4.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ce61962673574ff689e2e6cb6f8cf558",
    "resourceUuid": "435a7c71c82b4b0b971f4674ab346822",
    "resourceType": "ClusterVO",
    "name": "cpu.overProvisioning.ratio",
    "category": "host",
    "value": "10",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | ResourceConfigInventory | 详情参考[inventory] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| resourceUuid | String | 配置对应的资源UUID | 3.4.0 |
| resourceType | String | 配置对应的资源类型 | 3.4.0 |
| name | String | 配置名称 | 3.4.0 |
| description | String | 配置的详细描述 | 3.4.0 |
| category | String | 配置类别 | 3.4.0 |
| value | String | 配置的值 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



#### SDK示例

 Java SDK

```
UpdateResourceConfigAction action = new UpdateResourceConfigAction();
action.category = "host";
action.name = "cpu.overProvisioning.ratio";
action.resourceUuid = "5fa296dff4f04c96b29f38bef93e9e15";
action.value = "10";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateResourceConfigAction.Result res = action.call();
```

 Python SDK

```
UpdateResourceConfigAction action = UpdateResourceConfigAction()
action.category = "host"
action.name = "cpu.overProvisioning.ratio"
action.resourceUuid = "1e0f389aca364a1f94929bb4f39597b3"
action.value = "10"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateResourceConfigAction.Result res = action.call()
```
