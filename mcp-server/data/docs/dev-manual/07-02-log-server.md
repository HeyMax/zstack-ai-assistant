# 日志服务器相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.2.html*

---

## 日志服务器相关接口

---

## 添加日志服务器 (AddLogServer)



### API请求

 URLs

```
POST zstack/v1/log/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "log-server",     "description": "log server",     "category": "ManagementNodeLog",     "type": "Log4j2",     "level": "ALL",     "configuration": "{\n\"appenderType\": \"Syslog\",\n\"configuration\": {\n\"hostname\": \"192.168.0.11\",\n\"port\": \"514\",\n\"protocol\": \"UDP\",\n\"facility\": \"LOCAL5\"\n}\n}"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"log-server","description":"log server","category":"ManagementNodeLog","type":"Log4j2","level":"ALL","configuration":"{\n\"appenderType\": \"Syslog\",\n\"configuration\": {\n\"hostname\": \"192.168.0.11\",\n\"port\": \"514\",\n\"protocol\": \"UDP\",\n\"facility\": \"LOCAL5\"\n}\n}"}}' \ http://localhost:8080/zstack/v1/log/servers
```

 参数列表
-
-

-
-

-
-
-
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.3.28 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.3.28 |
| category | String | body(包含在**params**结构中) | 日志类别(管理节点日志、平台操作日志) | ManagementNodeLog PlatformOperationLog | 5.3.28 |
| type | String | body(包含在**params**结构中) | 日志类型 | Log4j2 FluentBit | 5.3.28 |
| level (可选) | String | body(包含在**params**结构中) | 日志级别 | OFF FATAL ERROR WARN INFO DEBUG TRACE ALL | 5.3.28 |
| configuration | String | body(包含在**params**结构中) | 日志具体配置 |  | 5.3.28 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.3.28 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



### API返回

 返回示例

```
{   "inventory": {} }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventory | LogServerInventory | 详情参考[inventory] | 5.3.28 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.28 |
| description | String | 错误的概要描述 | 5.3.28 |
| details | String | 错误的详细信息 | 5.3.28 |
| elaboration | String | 保留字段，默认为null | 5.3.28 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.28 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.28 |

  #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| configuration | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| category | LogCategory | 详情参考[category] | 5.3.28 |
| type | LogType | 详情参考[type] | 5.3.28 |
| level | LogLevel | 详情参考[level] | 5.3.28 |

  #category

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ManagementNodeLog | LogCategory |  | 5.3.28 |
| PlatformOperationLog | LogCategory |  | 5.3.28 |

  #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Log4j2 | LogType |  | 5.3.28 |
| FluentBit | LogType |  | 5.3.28 |

 #level

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OFF | LogLevel |  | 5.3.28 |
| FATAL | LogLevel |  | 5.3.28 |
| ERROR | LogLevel |  | 5.3.28 |
| WARN | LogLevel |  | 5.3.28 |
| INFO | LogLevel |  | 5.3.28 |
| DEBUG | LogLevel |  | 5.3.28 |
| TRACE | LogLevel |  | 5.3.28 |
| ALL | LogLevel |  | 5.3.28 |



### SDK示例

 Java SDK

```
AddLogServerAction action = new AddLogServerAction(); action.name = "log-server"; action.description = "log server"; action.category = "ManagementNodeLog"; action.type = "Log4j2"; action.level = "ALL"; action.configuration = "{ "appenderType": "Syslog", "configuration": { "hostname": "192.168.0.11", "port": "514", "protocol": "UDP", "facility": "LOCAL5" } }"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; AddLogServerAction.Result res = action.call();
```

 Python SDK

```
AddLogServerAction action = AddLogServerAction() action.name = "log-server" action.description = "log server" action.category = "ManagementNodeLog" action.type = "Log4j2" action.level = "ALL" action.configuration = "{ "appenderType": "Syslog", "configuration": { "hostname": "192.168.0.11", "port": "514", "protocol": "UDP", "facility": "LOCAL5" } }" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" AddLogServerAction.Result res = action.call()
```

---

## 删除日志服务器 (DeleteLogSever)



### API请求

 URLs

```
DELETE zstack/v1/log/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/log/servers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body | 资源的UUID，唯一标示该资源 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
DeleteLogServerAction action = new DeleteLogServerAction(); action.uuid = "cdc213d6ba25367ea6c4d201491d900c"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteLogServerAction.Result res = action.call();
```

 Python SDK

```
DeleteLogServerAction action = DeleteLogServerAction() action.uuid = "cdc213d6ba25367ea6c4d201491d900c" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteLogServerAction.Result res = action.call()
```

---

## 查询日志服务器 (QueryLogServer)



### API请求

 URLs

```
GET zstack/v1/log/servers
```


```
GET zstack/v1/log/servers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/log/servers?q=uuid=xxx&q=name=xxx
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/log/servers/9699713cfb583c70b749adca2c01a77b
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryLogServer`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
QueryLogServerAction action = new QueryLogServerAction(); action.conditions = asList("uuid=xxx","name=xxx"); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; QueryLogServerAction.Result res = action.call();
```

 Python SDK

```
QueryLogServerAction action = QueryLogServerAction() action.conditions = ["uuid=xxx","name=xxx"] action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" QueryLogServerAction.Result res = action.call()
```

---

### 更新日志服务器 (UpdateLogServer)



#### API请求

 URLs

```
PUT zstack/v1/log/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateLogServer": {
    "uuid": "10bf3f837edf37a0be99a84d1edafb6b",
    "name": "example"
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
-X PUT -d '{"updateLogServer":{"uuid":"10bf3f837edf37a0be99a84d1edafb6b","name":"example"}}' \
http://localhost:8080/zstack/v1/log/servers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**updateLogServer**结构中) | 资源的UUID，唯一标示该资源 |  | 5.3.28 |
| name (可选) | String | body(包含在**updateLogServer**结构中) | 资源名称 |  | 5.3.28 |
| description (可选) | String | body(包含在**updateLogServer**结构中) | 资源的详细描述 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



#### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

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
UpdateLogServerAction action = new UpdateLogServerAction();
action.uuid = "10bf3f837edf37a0be99a84d1edafb6b";
action.name = "example";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateLogServerAction.Result res = action.call();
```

 Python SDK

```
UpdateLogServerAction action = UpdateLogServerAction()
action.uuid = "10bf3f837edf37a0be99a84d1edafb6b"
action.name = "example"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateLogServerAction.Result res = action.call()
```
