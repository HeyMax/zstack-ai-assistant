# 自动化运维 - 平台运维

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/5.3.html*

---

## 自动化运维

---

## 脚本库相关接口

---

## 创建脚本 (CreateGuestVmScript)



### API请求

 URLs

```
POST zstack/v1/scripts
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "script1",     "description": "this is a script",     "scriptContent": "ZWNobyBoZWxsb3dvcmxkCg\u003d\u003d",     "renderParams": "[{\"key\":\"key\",\"value\":\"value\",\"description\":\"description\"}]",     "platform": "Linux",     "scriptType": "Shell",     "scriptTimeout": 30   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"script1","description":"this is a script","scriptContent":"ZWNobyBoZWxsb3dvcmxkCg==","renderParams":"[{\"key\":\"key\",\"value\":\"value\",\"description\":\"description\"}]","platform":"Linux","scriptType":"Shell","scriptTimeout":30}}' http://localhost:8080/zstack/v1/scripts
```

 参数列表
-
-

-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.2.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.2.0 |
| scriptContent | String | body(包含在**params**结构中) | 脚本内容 |  | 5.2.0 |
| renderParams (可选) | String | body(包含在**params**结构中) | 参数 |  | 5.2.0 |
| platform | String | body(包含在**params**结构中) | 平台 | Windows Linux | 5.2.0 |
| scriptType | String | body(包含在**params**结构中) | 脚本类型 | Shell Python Perl Bat Powershell | 5.2.0 |
| scriptTimeout (可选) | int | body(包含在**params**结构中) | 超时时间 |  | 5.2.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.2.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "a90f02b86916371a87bb5f2716dbfc0c",     "name": "script1",     "description": "this is a script",     "scriptContent": "echo helloworld",     "renderParams": "[{\"key\":\"key\",\"value\":\"value\",\"description\":\"description\"}]",     "platform": "Linux",     "scriptType": "Shell",     "scriptTimeout": 30,     "createDate": "Sep 23, 2024 11:53:59 AM",     "lastOpDate": "Sep 23, 2024 11:53:59 AM"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventory | GuestVmScriptInventory | 详情参考[inventory] | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| scriptContent | String | 脚本内容 | 5.2.0 |
| renderParams | String | 参数 | 5.2.0 |
| platform | String | 平台 | 5.2.0 |
| scriptType | String | 类型 | 5.2.0 |
| scriptTimeout | Integer | 超时时间 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |



### SDK示例

 Java SDK

```
CreateGuestVmScriptAction action = new CreateGuestVmScriptAction(); action.name = "script1"; action.description = "this is a script"; action.scriptContent = "ZWNobyBoZWxsb3dvcmxkCg=="; action.renderParams = "[{"key":"key","value":"value","description":"description"}]"; action.platform = "Linux"; action.scriptType = "Shell"; action.scriptTimeout = 30; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateGuestVmScriptAction.Result res = action.call();
```

 Python SDK

```
CreateGuestVmScriptAction action = CreateGuestVmScriptAction() action.name = "script1" action.description = "this is a script" action.scriptContent = "ZWNobyBoZWxsb3dvcmxkCg==" action.renderParams = "[{"key":"key","value":"value","description":"description"}]" action.platform = "Linux" action.scriptType = "Shell" action.scriptTimeout = 30 action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateGuestVmScriptAction.Result res = action.call()
```

---

## 删除脚本 (DeleteGuestVmScript)



### API请求

 URLs

```
DELETE zstack/v1/scripts/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/scripts/ed1ef717239e37c29163dcad7576b8d4
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.2.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing，Permissive | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
DeleteGuestVmScriptAction action = new DeleteGuestVmScriptAction(); action.uuid = "ed1ef717239e37c29163dcad7576b8d4"; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteGuestVmScriptAction.Result res = action.call();
```

 Python SDK

```
DeleteGuestVmScriptAction action = DeleteGuestVmScriptAction() action.uuid = "ed1ef717239e37c29163dcad7576b8d4" action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteGuestVmScriptAction.Result res = action.call()
```

---

#### 更新脚本 (UpdateGuestVmScript)



##### API请求

 URLs

```
PUT zstack/v1/scripts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateGuestVmScript": {
    "name": "test-script",
    "description": "desc",
    "scriptContent": "ls -lh",
    "renderParams": "",
    "platform": "Linux",
    "scriptType": "Shell",
    "scriptTimeout": 60
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
-X PUT -d '{"updateGuestVmScript":{"name":"test-script","description":"desc","scriptContent":"ls -lh","renderParams":"","platform":"Linux","scriptType":"Shell","scriptTimeout":60}}' http://localhost:8080/zstack/v1/scripts/110b774720573fd6aec8ec70b669ffb8/actions
```

 参数列表
-
-

-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.2.0 |
| name (可选) | String | body(包含在**updateGuestVmScript**结构中) | 资源名称 |  | 5.2.0 |
| description (可选) | String | body(包含在**updateGuestVmScript**结构中) | 资源的详细描述 |  | 5.2.0 |
| scriptContent (可选) | String | body(包含在**updateGuestVmScript**结构中) | 脚本内容 |  | 5.2.0 |
| renderParams (可选) | String | body(包含在**updateGuestVmScript**结构中) | 参数 |  | 5.2.0 |
| platform (可选) | String | body(包含在**updateGuestVmScript**结构中) | 平台 | Windows Linux | 5.2.0 |
| scriptType (可选) | String | body(包含在**updateGuestVmScript**结构中) | 脚本类型 | Shell Python Perl Bat Powershell | 5.2.0 |
| scriptTimeout (可选) | Integer | body(包含在**updateGuestVmScript**结构中) | 超时时间 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
UpdateGuestVmScriptAction action = new UpdateGuestVmScriptAction();
action.uuid = "110b774720573fd6aec8ec70b669ffb8";
action.name = "test-script";
action.description = "desc";
action.scriptContent = "ls -lh";
action.renderParams = "";
action.platform = "Linux";
action.scriptType = "Shell";
action.scriptTimeout = 60;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateGuestVmScriptAction.Result res = action.call();
```

 Python SDK

```
UpdateGuestVmScriptAction action = UpdateGuestVmScriptAction()
action.uuid = "110b774720573fd6aec8ec70b669ffb8"
action.name = "test-script"
action.description = "desc"
action.scriptContent = "ls -lh"
action.renderParams = ""
action.platform = "Linux"
action.scriptType = "Shell"
action.scriptTimeout = 60
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateGuestVmScriptAction.Result res = action.call()
```

---

#### 执行脚本 (ExecuteGuestVmScript)



##### API请求

 URLs

```
PUT zstack/v1/scripts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "executeGuestVmScript": {
    "vmInstanceUuids": [
      "c9cc2aa748383595b144d9d12ff3abb2"
    ],
    "scriptTimeout": 60
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
-X PUT -d '{"executeGuestVmScript":{"vmInstanceUuids":["c9cc2aa748383595b144d9d12ff3abb2"],"scriptTimeout":60}}' http://localhost:8080/zstack/v1/scripts/f9f25df251013694bbbf68bb42b1bde1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.2.0 |
| vmInstanceUuids | List | body(包含在**executeGuestVmScript**结构中) | 云主机UUID |  | 5.2.0 |
| scriptTimeout (可选) | Integer | body(包含在**executeGuestVmScript**结构中) | 超时时间 |  | 5.2.0 |
| logPath (可选) | String | body(包含在**executeGuestVmScript**结构中) | 日志路径 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e5dc4c630a7138a692e45ad372c5ba17",
    "scriptUuid": "da3f23e42960342b81c8d7f4cbceeb69",
    "recordName": "202308111633_script1",
    "scriptTimeout": 30,
    "status": "Running",
    "executor": "admin",
    "executionCount": 20,
    "version": 1,
    "startTime": "Sep 23, 2024 11:50:03 AM",
    "endTime": "Sep 23, 2024 11:50:03 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventory | GuestVmScriptExecutedRecordInventory | 详情参考[inventory] | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| scriptUuid | String | 脚本UUID | 5.2.0 |
| recordName | String | 记录名称 | 5.2.0 |
| scriptTimeout | Integer | 超时时间 | 5.2.0 |
| status | String | 状态 | 5.2.0 |
| executor | String | 执行人 | 5.2.0 |
| executionCount | Integer | 执行次数 | 5.2.0 |
| version | Integer | 版本 | 5.2.0 |
| scriptContent | String | 脚本内容 | 5.2.0 |
| startTime | Timestamp | 开始时间 | 5.2.0 |
| endTime | Timestamp | 结束时间 | 5.2.0 |



##### SDK示例

 Java SDK

```
ExecuteGuestVmScriptAction action = new ExecuteGuestVmScriptAction();
action.uuid = "f9f25df251013694bbbf68bb42b1bde1";
action.vmInstanceUuids = asList("c9cc2aa748383595b144d9d12ff3abb2");
action.scriptTimeout = 60;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExecuteGuestVmScriptAction.Result res = action.call();
```

 Python SDK

```
ExecuteGuestVmScriptAction action = new ExecuteGuestVmScriptAction();
action.uuid = "f9f25df251013694bbbf68bb42b1bde1";
action.vmInstanceUuids = asList("c9cc2aa748383595b144d9d12ff3abb2");
action.scriptTimeout = 60;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExecuteGuestVmScriptAction.Result res = action.call();
```

---

#### 查询脚本 (QueryGuestVmScript)



##### API请求

 URLs

```
GET zstack/v1/scripts
```


```
GET zstack/v1/scripts/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scripts?q=uuid={uuid}&q=name='script1'&q=platform='Linux'&q=scriptType='Shell'
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scripts/a37904a75a75326c87f5db7fe4bac326
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryGuestVmScript`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "script1",
      "description": "this is a script",
      "scriptContent": "ZWNobyBoZWxsb3dvcmxkCg\u003d\u003d",
      "renderParams": "[{\"key\":\"key\",\"value\":\"value\",\"description\":\"description\"}]",
      "platform": "Linux",
      "scriptType": "Shell",
      "scriptTimeout": 30
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventory | SchedulerTriggerInventory | 详情参考[inventories] | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| scriptContent | String | 脚本内容 | 5.2.0 |
| renderParams | String | 参数 | 5.2.0 |
| platform | String | 平台 | 5.2.0 |
| scriptType | String | 类型 | 5.2.0 |
| scriptTimeout | Integer | 超时时间 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |



##### SDK示例

 Java SDK

```
QueryGuestVmScriptAction action = new QueryGuestVmScriptAction();
action.conditions = asList("uuid={uuid}","name='script1'","platform='Linux'","scriptType='Shell'");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryGuestVmScriptAction.Result res = action.call();
```

 Python SDK

```
QueryGuestVmScriptAction action = QueryGuestVmScriptAction()
action.conditions = ["uuid={uuid}","name='script1'","platform='Linux'","scriptType='Shell'"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryGuestVmScriptAction.Result res = action.call()
```

---

#### 查询脚本执行记录 (QueryGuestVmScriptExecutedRecord)



##### API请求

 URLs

```
GET zstack/v1/scripts/records
```


```
GET zstack/v1/scripts/records/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scripts/records?q=uuid={uuid}&q=scriptUuid={uuid}&q=platform='Linux'&q=scriptType='Shell'&q=executedVmNum=2&q=executedUser='admin'
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scripts/records/a26b5051d35633b89903fbef2cf01c8a
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryGuestVmScriptExecutedRecord`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "459a1b622be53d6ebc830c0682b8016b",
      "scriptUuid": "692066c11aa83d11a5af28ada4fb7057",
      "recordName": "202308111633_script1",
      "scriptTimeout": 30,
      "executor": "admin",
      "executionCount": 20,
      "startTime": "Sep 23, 2024 11:51:30 AM",
      "endTime": "Sep 23, 2024 11:51:30 AM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventories | List | 详情参考[inventories] | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| scriptUuid | String | 脚本UUID | 5.2.0 |
| recordName | String | 记录名称 | 5.2.0 |
| scriptTimeout | Integer | 超时时间 | 5.2.0 |
| status | String | 状态 | 5.2.0 |
| executor | String | 执行人 | 5.2.0 |
| executionCount | Integer | 执行次数 | 5.2.0 |
| version | Integer | 版本 | 5.2.0 |
| scriptContent | String | 脚本内容 | 5.2.0 |
| startTime | Timestamp | 开始时间 | 5.2.0 |
| endTime | Timestamp | 结束时间 | 5.2.0 |



##### SDK示例

 Java SDK

```
QueryGuestVmScriptExecutedRecordAction action = new QueryGuestVmScriptExecutedRecordAction();
action.conditions = asList("uuid={uuid}","scriptUuid={uuid}","platform='Linux'","scriptType='Shell'","executedVmNum=2","executedUser='admin'");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryGuestVmScriptExecutedRecordAction.Result res = action.call();
```

 Python SDK

```
QueryGuestVmScriptExecutedRecordAction action = QueryGuestVmScriptExecutedRecordAction()
action.conditions = ["uuid={uuid}","scriptUuid={uuid}","platform='Linux'","scriptType='Shell'","executedVmNum=2","executedUser='admin'"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryGuestVmScriptExecutedRecordAction.Result res = action.call()
```

---

#### 查询脚本执行记录明细 (QueryGuestVmScriptExecutedRecordDetail)



##### API请求

 URLs

```
GET zstack/v1/scripts/records/details
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scripts/records/details?q=recordUuid={ExecuteRecordUuid}&q=vmInstanceUuid={vmInstanceUuid}
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryGuestVmScriptExecutedRecordDetail`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "recordUuid": "ab90a0142aef36fd97c3c759bc7e459d",
      "vmInstanceUuid": "4708f0f6f76e39e882886241761d0c27",
      "status": "Completed",
      "stdout": "helloworld",
      "errCause": "",
      "stderr": "1/0 is not a goodScript",
      "startTime": "Sep 23, 2024 11:53:03 AM",
      "endTime": "Sep 23, 2024 11:53:03 AM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventories | List | 详情参考[inventories] | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| recordUuid | String | 记录UUID | 5.2.0 |
| vmInstanceUuid | String | 云主机UUID | 5.2.0 |
| vmName | String | 云主机名称 | 5.2.0 |
| status | String | 状态 | 5.2.0 |
| exitCode | Integer | 退出code | 5.2.0 |
| stdout | String | 标准输出 | 5.2.0 |
| errCause | String | 错误原因 | 5.2.0 |
| stderr | String | 错误输出 | 5.2.0 |
| startTime | Timestamp | 开始时间 | 5.2.0 |
| endTime | Timestamp | 结束时间 | 5.2.0 |



##### SDK示例

 Java SDK

```
QueryGuestVmScriptExecutedRecordDetailAction action = new QueryGuestVmScriptExecutedRecordDetailAction();
action.conditions = asList("recordUuid={ExecuteRecordUuid}","vmInstanceUuid={vmInstanceUuid}");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryGuestVmScriptExecutedRecordDetailAction.Result res = action.call();
```

 Python SDK

```
QueryGuestVmScriptExecutedRecordDetailAction action = QueryGuestVmScriptExecutedRecordDetailAction()
action.conditions = ["recordUuid={ExecuteRecordUuid}","vmInstanceUuid={vmInstanceUuid}"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryGuestVmScriptExecutedRecordDetailAction.Result res = action.call()
```

---

### XML Hook相关接口

---

#### 创建用户自定义XML Hook (CreateVmUserDefinedXmlHookScript)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/xml-hook-script
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "hook",
    "description": "xml hook",
    "hookScript": "base64"
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
-X POST -d '{"params":{"name":"hook","description":"xml hook","hookScript":"base64"}}' http://localhost:8080/zstack/v1/vm-instances/xml-hook-script
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.2.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.2.0 |
| hookScript | String | body(包含在**params**结构中) | xml hook脚本内容 |  | 5.2.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.2.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

 返回示例

```
{
  "inventory": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventory | XmlHookInventory | 详情参考[inventory] | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| hookScript | String | XML Hook脚本内容 | 5.2.0 |
| libvirtVersion | String | Libvirt版本 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |
| type | XmlHookType | 详情参考[type] | 5.2.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| System | XmlHookType |  | 5.2.0 |
| Customization | XmlHookType |  | 5.2.0 |



##### SDK示例

 Java SDK

```
CreateVmUserDefinedXmlHookScriptAction action = new CreateVmUserDefinedXmlHookScriptAction();
action.name = "hook";
action.description = "xml hook";
action.hookScript = "base64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmUserDefinedXmlHookScriptAction.Result res = action.call();
```

 Python SDK

```
CreateVmUserDefinedXmlHookScriptAction action = CreateVmUserDefinedXmlHookScriptAction()
action.name = "hook"
action.description = "xml hook"
action.hookScript = "base64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmUserDefinedXmlHookScriptAction.Result res = action.call()
```

---

#### 彻底删除用户自定义XML Hook (ExpungeVmUserDefinedXmlHookScript)



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/xml-hook-script/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/xml-hook-script/99df64f50f5b34c6be5a7339d676aeb6
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
ExpungeVmUserDefinedXmlHookScriptAction action = new ExpungeVmUserDefinedXmlHookScriptAction();
action.uuid = "99df64f50f5b34c6be5a7339d676aeb6";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExpungeVmUserDefinedXmlHookScriptAction.Result res = action.call();
```

 Python SDK

```
ExpungeVmUserDefinedXmlHookScriptAction action = ExpungeVmUserDefinedXmlHookScriptAction()
action.uuid = "99df64f50f5b34c6be5a7339d676aeb6"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExpungeVmUserDefinedXmlHookScriptAction.Result res = action.call()
```

---

#### 查询用户自定义XML Hook (QueryVmUserDefinedXmlHookScript)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/xml-hook-script
GET zstack/v1/vm-instances/xml-hook-script/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/xml-hook-script?q=uuid=xxx&q=name=xxx
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/xml-hook-script/c2643474f4ca3bb1a5c9e821f53c3ed2
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryVmUserDefinedXmlHookScript`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

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



##### SDK示例

 Java SDK

```
QueryVmUserDefinedXmlHookScriptAction action = new QueryVmUserDefinedXmlHookScriptAction();
action.conditions = asList("uuid=xxx","name=xxx");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVmUserDefinedXmlHookScriptAction.Result res = action.call();
```

 Python SDK

```
QueryVmUserDefinedXmlHookScriptAction action = QueryVmUserDefinedXmlHookScriptAction()
action.conditions = ["uuid=xxx","name=xxx"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVmUserDefinedXmlHookScriptAction.Result res = action.call()
```

---

#### 更新用户自定义XML Hook (UpdateVmUserDefinedXmlHookScript)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/xml-hook-script
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmUserDefinedXmlHookScript": {
    "uuid": "a44a23f78c9c391c9d2f3a6a576e77d6",
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
-X PUT -d '{"updateVmUserDefinedXmlHookScript":{"uuid":"a44a23f78c9c391c9d2f3a6a576e77d6","name":"example"}}' http://localhost:8080/zstack/v1/vm-instances/xml-hook-script
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**updateVmUserDefinedXmlHookScript**结构中) | 资源的UUID，唯一标示该资源 |  | 5.2.0 |
| name (可选) | String | body(包含在**updateVmUserDefinedXmlHookScript**结构中) | 资源名称 |  | 5.2.0 |
| description (可选) | String | body(包含在**updateVmUserDefinedXmlHookScript**结构中) | 资源的详细描述 |  | 5.2.0 |
| hookScript (可选) | String | body(包含在**updateVmUserDefinedXmlHookScript**结构中) | XML Hook 脚本内容 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |
| startupStrategy (可选) | String | body(包含在**updateVmUserDefinedXmlHookScript**结构中) | 启动策略 | Reboot None | 5.2.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
UpdateVmUserDefinedXmlHookScriptAction action = new UpdateVmUserDefinedXmlHookScriptAction();
action.uuid = "a44a23f78c9c391c9d2f3a6a576e77d6";
action.name = "example";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmUserDefinedXmlHookScriptAction.Result res = action.call();
```

 Python SDK

```
UpdateVmUserDefinedXmlHookScriptAction action = UpdateVmUserDefinedXmlHookScriptAction()
action.uuid = "a44a23f78c9c391c9d2f3a6a576e77d6"
action.name = "example"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmUserDefinedXmlHookScriptAction.Result res = action.call()
```

---

#### 挂载用户自定义XML Hook到云主机 (AttachUserDefinedXmlHookScriptToVm)



##### API请求

 URLs

```
POST zstack/v1/xmlhook/{xmlHookUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "startupStrategy": "None"
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
-X POST -d '{"params":{"startupStrategy":"None"}}' http://localhost:8080/zstack/v1/xmlhook/73300c2b203e3e43bc4b0dec7c3b0f21/vm-instances/6baaffd8cb123dcc954b6242835267b9
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 5.2.0 |
| xmlHookUuid | String | url | xml hook UUID |  | 5.2.0 |
| startupStrategy (可选) | String | body(包含在**params**结构中) | 启动策略 | Reboot None | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
AttachUserDefinedXmlHookScriptToVmAction action = new AttachUserDefinedXmlHookScriptToVmAction();
action.vmInstanceUuid = "6baaffd8cb123dcc954b6242835267b9";
action.xmlHookUuid = "73300c2b203e3e43bc4b0dec7c3b0f21";
action.startupStrategy = "None";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachUserDefinedXmlHookScriptToVmAction.Result res = action.call();
```

 Python SDK

```
AttachUserDefinedXmlHookScriptToVmAction action = AttachUserDefinedXmlHookScriptToVmAction()
action.vmInstanceUuid = "6baaffd8cb123dcc954b6242835267b9"
action.xmlHookUuid = "73300c2b203e3e43bc4b0dec7c3b0f21"
action.startupStrategy = "None"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachUserDefinedXmlHookScriptToVmAction.Result res = action.call()
```

---

#### 从云主机卸载用户自定义XML Hook (DetachUserDefinedXmlHookScriptFromVm)



##### API请求

 URLs

```
DELETE zstack/v1/xmlhook/vm-instances/{vmInstanceUuid}/detach
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/xmlhook/vm-instances/588ac603fdd73c7c8519235a73271188/detach
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 5.2.0 |
| startupStrategy (可选) | String | body | 启动策略 | Reboot None | 5.2.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing，Permissive | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DetachUserDefinedXmlHookScriptFromVmAction action = new DetachUserDefinedXmlHookScriptFromVmAction();
action.vmInstanceUuid = "588ac603fdd73c7c8519235a73271188";
action.startupStrategy = "None";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachUserDefinedXmlHookScriptFromVmAction.Result res = action.call();
```

 Python SDK

```
DetachUserDefinedXmlHookScriptFromVmAction action = DetachUserDefinedXmlHookScriptFromVmAction()
action.vmInstanceUuid = "588ac603fdd73c7c8519235a73271188"
action.startupStrategy = "None"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachUserDefinedXmlHookScriptFromVmAction.Result res = action.call()
```

---

### 定时运维相关接口

---

#### 创建定时器(CreateSchedulerTrigger)



##### API请求

 URLs

```
POST zstack/v1/scheduler/triggers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "trigger",
    "description": "description",
    "schedulerInterval": 3600.0,
    "repeatCount": 100.0,
    "startTime": 1.510669257141E12,
    "schedulerType": "simple"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" 、
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" 、
-X POST -d '{"params":{"name":"trigger","description":"description","schedulerInterval":3600.0,"repeatCount":100.0,"startTime":1.510669257141E12,"schedulerType":"simple"}}' 、
http://localhost:8080/zstack/v1/scheduler/triggers
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.1 |
| schedulerInterval (可选) | Integer | body(包含在**params**结构中) | 间隔时间 当简单定时任务执行超过一次时，必须设置间隔时间； 简单定时任务永远重复时，必须设置间隔时间 |  | 2.1 |
| repeatCount (可选) | Integer | body(包含在**params**结构中) |  |  | 2.1 |
| startTime (可选) | Long | body(包含在**params**结构中) | Unix Time |  | 2.1 |
| schedulerType | String | body(包含在**params**结构中) | simple cron |  | 2.1 |
| cron (可选) | String | body(包含在**params**结构中) |  |  | 2.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "20c7355021f83597a4cf7854f5788b74",
    "name": "trigger",
    "description": "this is a scheduler trigger",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | SchedulerTriggerInventory | 详情参考[inventory] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| name | String | 资源名称 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| schedulerType | String |  | 2.1 |
| schedulerInterval | Integer |  | 2.1 |
| repeatCount | Integer |  | 2.1 |
| startTime | Timestamp |  | 2.1 |
| stopTime | Timestamp |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| jobsUuid | List |  | 2.1 |



##### SDK示例

 Java SDK

```
CreateSchedulerTriggerAction action = new CreateSchedulerTriggerAction();
action.name = "trigger";
action.description = "description";
action.schedulerInterval = 3600.0;
action.repeatCount = 100.0;
action.startTime = 1.510669257141E12;
action.schedulerType = "simple";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
CreateSchedulerTriggerAction action = CreateSchedulerTriggerAction()
action.name = "trigger"
action.description = "description"
action.schedulerInterval = 3600.0
action.repeatCount = 100.0
action.startTime = 1.510669257141E12
action.schedulerType = "simple"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSchedulerTriggerAction.Result res = action.call()
```

---

#### 删除定时器(DeleteSchedulerTrigger)



##### API请求



URLs

```
DELETE zstack/v1/scheduler/triggers/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 9101c6e1eef94f2aa7b76ce2833c3991" \
-X DELETE http://localhost:8080/zstack/v1/scheduler/triggers/fe26ab519ac24389bae2664503258590?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| deleteMode (可选) | String | url |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回



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



##### SDK示例

 Java SDK

```
DeleteSchedulerTriggerAction action = new DeleteSchedulerTriggerAction();
action.uuid = "3ac4a7a8d71f4147b98a59995cbcf807";
action.deleteMode = "Permissive";
action.sessionId = "c0de81361fb743c297aec4f4f35085b9";
DeleteSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
DeleteSchedulerTriggerAction action = DeleteSchedulerTriggerAction()
action.uuid = "769b16c91f234f2c8e2fc4fe6fe8441b"
action.deleteMode = "Permissive"
action.sessionId = "a960f5dfa4304cd1bcb96ed0d16c3e67"
DeleteSchedulerTriggerAction.Result res = action.call()
```

---

#### 查询定时器(QuerySchedulerTrigger)



##### API请求

 URLs

```
GET zstack/v1/scheduler/triggers
GET zstack/v1/scheduler/triggers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f86c2715690e402c85aec6d981d1d9b1" \
-X GET http://localhost:8080/zstack/v1/scheduler/triggers?q=name=TestSchedulerTrigger&q=name=trigger
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bb395f07706c4e5f93fb9d767248001e" \
-X GET http://localhost:8080/zstack/v1/scheduler/triggers/245751f5233d4bc3b4a9966e8cdd0e7e
```



可查询字段

运行CLI命令行工具，输入`QuerySchedulerTrigger`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "8bc53f2626f14f5a974300909e4229f3",
      "name": "test",
      "description": "a test trigger",
      "startTime": "Jul 17, 2017 10:18:54 AM",
      "stopTime": "Jul 17, 2017 10:18:54 AM",
      "createDate": "Jul 17, 2017 10:18:54 AM",
      "lastOpDate": "Jul 17, 2017 10:18:54 AM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventories | List | 详情参考[inventories] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| schedulerType | String |  | 0.6 |
| schedulerInterval | Integer |  | 0.6 |
| repeatCount | Integer |  | 0.6 |
| startTime | Timestamp |  | 0.6 |
| stopTime | Timestamp |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| jobsUuid | List |  | 0.6 |



##### SDK示例

 Java SDK

```
QuerySchedulerTriggerAction action = new QuerySchedulerTriggerAction();
action.conditions = asList("name=TestSchedulerTrigger","name=trigger");
action.sessionId = "fd4f6b37415e467b847e862e2d003639";
QuerySchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
QuerySchedulerTriggerAction action = QuerySchedulerTriggerAction()
action.conditions = ["name=TestSchedulerTrigger","name=trigger"]
action.sessionId = "d1353798888548bd87fb76a0b431ad3f"
QuerySchedulerTriggerAction.Result res = action.call()
```

---

#### 更新定时器(UpdateSchedulerTrigger)



##### API请求

 URLs

```
PUT zstack/v1/scheduler/triggers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSchedulerTrigger": {
    "name": "Test2",
    "description": "new test",
    "schedulerInterval": 3600.0,
    "repeatCount": 100.0,
    "startTime": 1.510669257141E12
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
-X PUT -d '{"updateSchedulerTrigger":{"name":"Test2","description":"new test","schedulerInterval":3600.0,"repeatCount":100.0,"startTime":1.510669257141E12}}' \
http://localhost:8080/zstack/v1/scheduler/triggers/029825497836308c8ab6146e57015c20/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| name (可选) | String | body(包含在**updateSchedulerTrigger**结构中) | 资源名称 |  | 2.1 |
| description (可选) | String | body(包含在**updateSchedulerTrigger**结构中) | 资源的详细描述 |  | 2.1 |
| schedulerInterval (可选) | Integer | body(包含在**updateSchedulerTrigger**结构中) |  |  | 2.3 |
| repeatCount (可选) | Integer | body(包含在**updateSchedulerTrigger**结构中) |  |  | 2.3 |
| startTime (可选) | Long | body(包含在**updateSchedulerTrigger**结构中) |  |  | 2.3 |
| cron (可选) | String | body(包含在**updateSchedulerTrigger**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回



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



##### SDK示例

 **Java SDK**

```
UpdateSchedulerTriggerAction action = new UpdateSchedulerTriggerAction();
action.uuid = "2b18c3e0f3f1428e97dbd90badd54211";
action.name = "Test2";
action.description = "new test";
action.schedulerInterval = 3600.0;
action.repeatCount = 100.0;
action.startTime = 1.510669257141E12;
action.sessionId = "f0a41bd750b64bf09ed7122c1b9f4949";
UpdateSchedulerTriggerAction.Result res = action.call();
```

**Python SDK**

```
UpdateSchedulerTriggerAction action = UpdateSchedulerTriggerAction()
action.uuid = "3e077605d62e4075be62cb1218c7762f"
action.name = "Test2"
action.description = "new test"
action.schedulerInterval = 3600.0;
action.repeatCount = 100.0;
action.startTime = 1.510669257141E12;
action.sessionId = "f9133e066bbe4190a8ba5b2acb038669"
UpdateSchedulerTriggerAction.Result res = action.call()
```

---

#### 添加定时任务到定时器(AddSchedulerJobToSchedulerTrigger)



##### API请求

 URLs

```
POST zstack/v1/scheduler/jobs/{schedulerJobUuid}/scheduler/triggers/{schedulerTriggerUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" 、
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" 、
-X POST http://localhost:8080/zstack/v1/scheduler/jobs/0bae2d859dfa3863bc3e02f20bbce8a5/scheduler/triggers/3653b5151ed032178264edaaf9e8c3d1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobUuid | String | url | 定时任务UUID |  | 2.1 |
| schedulerTriggerUuid | String | url | 定时器UUID |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |
| triggerNow (可选) | boolean | body(包含在**params**结构中) |  |  | 3.2.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ceb4e1ee7e204505917387f0582f1710",
    "schedulerJobUuid": "7352a98748f548ed974492ac8cc5172a",
    "schedulerTriggerUuid": "21960244adbc427098bb37c31709ffbe"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | SchedulerJobSchedulerTriggerInventory | 详情参考[inventory] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| schedulerJobUuid | String |  | 2.1 |
| schedulerTriggerUuid | String |  | 2.1 |
| jobGroup | String |  | 2.1 |
| triggerGroup | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |



##### SDK示例

 Java SDK

```
AddSchedulerJobToSchedulerTriggerAction action = new AddSchedulerJobToSchedulerTriggerAction();
action.schedulerJobUuid = "0bae2d859dfa3863bc3e02f20bbce8a5";
action.schedulerTriggerUuid = "3653b5151ed032178264edaaf9e8c3d1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSchedulerJobToSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
AddSchedulerJobToSchedulerTriggerAction action = AddSchedulerJobToSchedulerTriggerAction()
action.schedulerJobUuid = "0bae2d859dfa3863bc3e02f20bbce8a5"
action.schedulerTriggerUuid = "3653b5151ed032178264edaaf9e8c3d1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSchedulerJobToSchedulerTriggerAction.Result res = action.call()
```

---

#### 从定时器移除定时任务(RemoveSchedulerJobFromSchedulerTrigger)



##### API请求



URLs

```
DELETE zstack/v1/scheduler/jobs/{schedulerJobUuid}/scheduler/triggers/{schedulerTriggerUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 32b614664dfc4c77a4ced15b7b434f2b" \
-X DELETE http://localhost:8080/zstack/v1/scheduler/jobs/62af314ef99046f8929934e0e9b41892/scheduler/triggers/fe1c048505c54cb3b27981fc2e967770?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobUuid | String | url | 定时任务UUID |  | 2.1 |
| schedulerTriggerUuid | String | url | 定时器UUID |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回



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



##### SDK示例

 Java SDK

```
RemoveSchedulerJobFromSchedulerTriggerAction action = new RemoveSchedulerJobFromSchedulerTriggerAction();
action.schedulerJobUuid = "9fe2e6e2059c4034b41e8a9422eff40f";
action.schedulerTriggerUuid = "3e8934f791f04ebcaeb4523a10ae020a";
action.sessionId = "2754c780ce3746b88045b11124c7cd71";
RemoveSchedulerJobFromSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
RemoveSchedulerJobFromSchedulerTriggerAction action = RemoveSchedulerJobFromSchedulerTriggerAction()
action.schedulerJobUuid = "18041254de834d398897ae66197db7c1"
action.schedulerTriggerUuid = "a7f89b17034a4714ba3ecda2435aa5a0"
action.sessionId = "7944081646ef439a9e5847380491e998"
RemoveSchedulerJobFromSchedulerTriggerAction.Result res = action.call()
```

---

#### 创建定时任务(CreateSchedulerJob)



##### API请求

 URLs

```
POST zstack/v1/scheduler/jobs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "job",
    "description": "description",
    "targetResourceUuid": "cb4c7a39a84b39bc94dd78bf50f682c9",
    "type": "startVm"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" 、
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" 、
-X POST -d '{"params":{"name":"job","description":"description","targetResourceUuid":"cb4c7a39a84b39bc94dd78bf50f682c9","type":"startVm"}}' 、
http://localhost:8080/zstack/v1/scheduler/jobs
```

 参数列表
-
-
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.1 |
| targetResourceUuid | String | body(包含在**params**结构中) |  |  | 2.1 |
| type | String | body(包含在**params**结构中) |  | startVm stopVm rebootVm volumeSnapshot runAutoScalingGroup addIAM2ProjectLoginExpired cancleIAM2ProjectLoginExpired | 4.3.0 |
| parameters (可选) | Map | body(包含在**params**结构中) |  |  | 2.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body | 用户标签 |  | 2.1 |


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


| type参数 | parameters可选参数 |
| --- | --- |
| startVm |  |
| stopVm |  |
| rebootVm |  |
| volumeSnapshot | snapshotMaxNumber |
| volumeBackup | volumeReadBandwidth volumeWriteBandwidth networkReadBandwidth networkWriteBandwidth fullBackupTriggerUuid retentionType* retentionValue* backupStorageUuids* remoteBackupStorageUuid |
| vmBackup (targetResourceUuid 填 rootVolumeUuid) | volumeReadBandwidth volumeReadBandwidth volumeWriteBandwidth networkReadBandwidth networkWriteBandwidth fullBackupTriggerUuid retentionType* retentionValue* backupStorageUuids* |
| databaseBackup | retentionType* retentionValue* backupStorageUuids* remoteBackupStorageUuid |


> **注意:** 说明: parameters 参数的可选值由type决定。关系如下：



##### API返回

 返回示例：

```
{
  "inventory": {
    "uuid": "0cd85a37bb88346c8c2d122913d812df",
    "targetResourceUuid": "c458e0fb141932d0a87af999b0d0ab81",
    "name": "SchedulerJob",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | SchedulerInventory | 详情参考[inventory] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| targetResourceUuid | String |  | 2.1 |
| name | String | 资源名称 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| state | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| triggersUuid | List |  | 2.1 |



##### SDK示例

 Java SDK

```
CreateSchedulerJobAction action = new CreateSchedulerJobAction();
action.name = "job";
action.description = "description";
action.targetResourceUuid = "cb4c7a39a84b39bc94dd78bf50f682c9";
action.type = "startVm";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSchedulerJobAction.Result res = action.call();
```

 Python SDK

```
CreateSchedulerJobAction action = CreateSchedulerJobAction()
action.name = "job"
action.description = "description"
action.targetResourceUuid = "cb4c7a39a84b39bc94dd78bf50f682c9"
action.type = "startVm"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSchedulerJobAction.Result res = action.call()
```

---

#### 删除定时任务(DeleteSchedulerJob)



##### API请求

 URLs

```
DELETE zstack/v1/scheduler/jobs/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c9b798cf05f44047b9f79f4f66e0e960" \
-X DELETE http://localhost:8080/zstack/v1/scheduler/jobs/1ae34aa114424c45ab5af9f9be7af8c1?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| deleteMode (可选) | String | url |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回



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



##### SDK示例

 Java SDK

```
DeleteSchedulerJobAction action = new DeleteSchedulerJobAction();
action.uuid = "8730c7093939498c9bea46f84435cced";
action.deleteMode = "Permissive";
action.sessionId = "be23055450334fb9add5e0e9031cf238";
DeleteSchedulerJobAction.Result res = action.call();
```

 Python SDK

```
DeleteSchedulerJobAction action = DeleteSchedulerJobAction()
action.uuid = "8a723f909a94473fab6cfb41fb34077f"
action.deleteMode = "Permissive"
action.sessionId = "4e0af23135a7446b90fe40c911f5e946"
DeleteSchedulerJobAction.Result res = action.call()
```

---

#### 查询定时任务(QuerySchedulerJob)



##### API请求

 URLs

```
GET zstack/v1/scheduler/jobs
GET zstack/v1/scheduler/jobs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b0d89c0878b3492b9f258fcadc81e5f2" \
-X GET http://localhost:8080/zstack/v1/scheduler/jobs?q=name=TestScheduler&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c50c86041f044014bfdc88f2806d989b" \
-X GET http://localhost:8080/zstack/v1/scheduler/jobs/eb52cb8434bc4929b34097d630043695
```



可查询字段

运行CLI命令行工具，输入`QuerySchedulerJob`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回



返回示例

```
{
  "inventories": [
    {
      "uuid": "346e89a1e0f64ce092fc4541f695151f",
      "targetResourceUuid": "b08f45dbea734a9b9507bb773af28428",
      "name": "test",
      "createDate": "Jul 17, 2017 10:18:54 AM",
      "lastOpDate": "Jul 17, 2017 10:18:54 AM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventories | List | 详情参考[inventories] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| targetResourceUuid | String |  | 2.1 |
| name | String | 资源名称 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| state | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| triggersUuid | List |  | 2.1 |



##### SDK示例

 Java SDK

```
QuerySchedulerJobAction action = new QuerySchedulerJobAction();
action.conditions = asList("name=TestScheduler","state=Enabled");
action.sessionId = "0864c676a4fc4e408dc6d89548e1387f";
QuerySchedulerJobAction.Result res = action.call();
```

 Python SDK

```
QuerySchedulerJobAction action = QuerySchedulerJobAction()
action.conditions = ["name=TestScheduler","state=Enabled"]
action.sessionId = "a25af40af81541c5b7160af8a135b040"
QuerySchedulerJobAction.Result res = action.call()
```

---

#### 更新定时任务(UpdateSchedulerJob)



##### API请求

 URLs

```
PUT zstack/v1/scheduler/jobs/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSchedulerJob": {
    "name": "Test2",
    "description": "new test"
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
-X PUT -d '{"updateSchedulerJob":{"name":"Test2","description":"new test"}}' \
http://localhost:8080/zstack/v1/scheduler/jobs/676b5d17ee953aa892c6439a06e49bf6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| name (可选) | String | body(包含在**updateSchedulerJob**结构中) | 资源名称 |  | 2.1 |
| description (可选) | String | body(包含在**updateSchedulerJob**结构中) | 资源的详细描述 |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "11f1249eaae74b50b909839492ee0991",
    "targetResourceUuid": "eee374cb49904855ad1c46a1c92846af",
    "name": "Test",
    "description": "create volume snapshot job",
    "createDate": "Jul 17, 2017 10:18:53 AM",
    "lastOpDate": "Jul 17, 2017 10:18:53 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | SchedulerJobInventory | 详情参考[inventory] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| targetResourceUuid | String |  | 2.1 |
| name | String | 资源名称 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| state | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| triggersUuid | List |  | 2.1 |



##### SDK示例

 Java SDK

```
UpdateSchedulerJobAction action = new UpdateSchedulerJobAction();
action.uuid = "4283a6a09fac4871ab8cd4f94384d32e";
action.name = "Test2";
action.description = "new test";
action.sessionId = "c15d0314892e493281494181e19eae02";
UpdateSchedulerJobAction.Result res = action.call();
```

 Python SDK

```
UpdateSchedulerJobAction action = UpdateSchedulerJobAction()
action.uuid = "f0696f10eb5b408b8f6fddb1094f7b2b"
action.name = "Test2"
action.description = "new test"
action.sessionId = "47041d647e834f5698e613a5e4a99a08"
UpdateSchedulerJobAction.Result res = action.call()
```

---

#### 获取未挂载定时器的任务(GetNoTriggerSchedulerJobs)



##### API请求

 URLs

```
GET zstack/v1/scheduler/jobs/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scheduler/jobs/candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "34c6734f8d9141198bc07b083eecaa1d",
      "name": "job",
      "description": "this is a scheduler job",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
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
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| targetResourceUuid | String |  | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| triggersUuid | List |  | 0.6 |



##### SDK示例

 Java SDK

```
GetNoTriggerSchedulerJobsAction action = new GetNoTriggerSchedulerJobsAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetNoTriggerSchedulerJobsAction.Result res = action.call();
```

 Python SDK

```
GetNoTriggerSchedulerJobsAction action = GetNoTriggerSchedulerJobsAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetNoTriggerSchedulerJobsAction.Result res = action.call()
```

---

#### 改变定时任务状态(ChangeSchedulerState)



##### API请求



URLs

```
PUT zstack/v1/schedulers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSchedulerState": {
    "stateEvent": "disable"
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
-X PUT -d '{"changeSchedulerState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/schedulers/53cd804df69d3565b4efcd460c0ddd52
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| stateEvent | String | body(包含在**changeSchedulerState**结构中) | 要设置的定时任务状态 | enable disable | 2.1 |
| systemTags (可选) | List | body | 系统标签 |  | 2.1 |
| userTags (可选) | List | body | 用户标签 |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "07a35fc1199d31c9bca5db5334f947c9",
    "targetResourceUuid": "5d07512a1bf036e7be1e8938ff7938b3",
    "name": "Test",
    "description": "Create volume snapshot scheduler job",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | SchedulerInventory | 详情参考[inventory] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| targetResourceUuid | String |  | 2.1 |
| name | String | 资源名称 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| state | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| triggersUuid | List |  | 2.1 |



##### SDK示例

 Java SDK

```
ChangeSchedulerStateAction action = new ChangeSchedulerStateAction();
action.uuid = "53cd804df69d3565b4efcd460c0ddd52";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSchedulerStateAction.Result res = action.call();
```

 Python SDK

```
ChangeSchedulerStateAction action = ChangeSchedulerStateAction()
action.uuid = "53cd804df69d3565b4efcd460c0ddd52"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSchedulerStateAction.Result res = action.call()
```
