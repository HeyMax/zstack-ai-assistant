# 访问控制 - 运营管理

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/6.3.html*

---

## 访问控制

---

## 控制台相关接口

---

## 请求控制台访问地址(RequestConsoleAccess)



### API请求

 URLs

```
POST zstack/v1/consoles
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "vmInstanceUuid": "b95acae48c804003ac3820751b58a50d"   },   "systemTags": [],   "userTags": [] }
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"vmInstanceUuid":"e0442db541833083bd7e411a4d94d969"}}' \ http://localhost:8080/zstack/v1/consoles
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | body(包含在params结构中) | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回

 返回示例

```
{   "inventory": {     "scheme": "http",     "hostname": "127.0.0.1",     "port": 4900.0,     "token": "d96caf24fae54c76b7652f548a258261"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ConsoleInventory | 详情参考[inventory] | 0.6 |

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
| scheme | String | 访问协议类型 | 0.6 |
| hostname | String | 宿主机名称 | 0.6 |
| port | int | 端口 | 0.6 |
| token | String | 口令 | 0.6 |



### SDK示例

 Java SDK

```
RequestConsoleAccessAction action = new RequestConsoleAccessAction(); action.vmInstanceUuid = "c8925478e1f840caa1f3919affa19155"; action.sessionId = "f896abb919754292aa8d2f286596142c"; RequestConsoleAccessAction.Result res = action.call();
```

 Python SDK

```
RequestConsoleAccessAction action = RequestConsoleAccessAction() action.vmInstanceUuid = "f37c825f87444941bf16261f63c7dbb7" action.sessionId = "331a21749df940e4b447e9103518890d" RequestConsoleAccessAction.Result res = action.call()
```

---

## 查询控制台代理(QueryConsoleProxyAgent)



### API请求

 URLs

```
GET zstack/v1/consoles/agents GET zstack/v1/consoles/agents/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 350b72c2d3f24641a767acbcec744b19" \ -X GET http://localhost:8080/zstack/v1/consoles/agents?q=uuid=745b7c17cd224025b3adfef4ae61b3d2
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth bb08e240616b482984c397e4517a021c" \ -X GET http://localhost:8080/zstack/v1/consoles/agents/8a3cc2be7e20420db29925e381c598bc
```



可查询字段

运行CLI命令行工具，输入`QueryConsoleProxyAgent`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "uuid": "c77bbc7d3364449e9543d0776a6087de",       "managementIp": "127.0.0.1",       "type": "ManagementServerConsoleProxy",       "state": "Connected"     }   ] }
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
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String | 管理节点IP | 0.6 |
| type | String | 类型 | 0.6 |
| status | String | 状态（连接，断开） | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
QueryConsoleProxyAgentAction action = new QueryConsoleProxyAgentAction(); action.conditions = asList("uuid=dfbe49d87cb94d93b69354fa1270012b"); action.sessionId = "e2300cd4f74a457e87f13842aeb8fdef"; QueryConsoleProxyAgentAction.Result res = action.call();
```

 Python SDK

```
QueryConsoleProxyAgentAction action = QueryConsoleProxyAgentAction() action.conditions = ["uuid=1e47046946f849ee871de20a2b045750"] action.sessionId = "1655d7f2e56d4710824cd1082bd5cc94" QueryConsoleProxyAgentAction.Result res = action.call()
```

---

#### 重连控制台代理(ReconnectConsoleProxyAgent)



##### API请求

 URLs

```
PUT zstack/v1/consoles/agents
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectConsoleProxyAgent": {
    "agentUuids": [
      "ce9f63639c6947fc9de43014a9c42af6",
      "5cf200f8fa6640278ab3751a9e40a122",
      "896f44bd3a2544e3b49a30dbe41303da"
    ]
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 **Curl示例**

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectConsoleProxyAgent":{"agentUuids":["9a00b78598253e68914541e6760ddeaa","c18fbd323fbd3902961e4105ec9364d0","96efd32908dd3f71bef8c0f414dbf828"]}}' \
http://localhost:8080/zstack/v1/consoles/agents
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| agentUuids (可选) | List | body(包含在params结构中) | 控制台代理Agent的UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "976e8d54d42841da85eb697f3e8534b6": true,
    "ac4b5e3b69e5499eba381082199b5d42": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventory | Map | 控制台代理Agent清单 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
ReconnectConsoleProxyAgentAction action = new ReconnectConsoleProxyAgentAction();
action.agentUuids = asList("9b1d2cae4e75418ba8ca00a7f8d61eee","b3c9068b99664b65851bc29e39c3e336","89ea316d7f114203bb352d22b1f878e2");
action.sessionId = "607aa9478e0f452ab3fe43f0bb44771f";
ReconnectConsoleProxyAgentAction.Result res = action.call();
```

 Python SDK

```
ReconnectConsoleProxyAgentAction action = ReconnectConsoleProxyAgentAction()
action.agentUuids = [6b5d95576b444661a23454913abce886, 64326c502c4042b196d9602737733d64, 1cc5a9dbb4284fbe850e387788b365ec]
action.sessionId = "dc7db7612de24cb7a3d91d1d08b03162"
ReconnectConsoleProxyAgentAction.Result res = action.call()
```

---

#### 更新控制台代理(UpdateConsoleProxyAgent)



##### API请求

 URLs

```
PUT zstack/v1/consoles/agents/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateConsoleProxyAgent": {
    "consoleProxyOverriddenIp": "127.0.0.1"
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
-X PUT -d '{"updateConsoleProxyAgent":{"consoleProxyOverriddenIp":"127.0.0.1"}}' \
http://localhost:8080/zstack/v1/consoles/agents/f616460f24cd330180db4188c3a905b6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| consoleProxyOverriddenIp | String | body(包含在**updateConsoleProxyAgent**结构中) | 新的控制台代理IP |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | ConsoleProxyAgentInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String | 管理节点IP | 0.6 |
| type | String | 类型 | 0.6 |
| status | String | 状态（连接，断开） | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateConsoleProxyAgentAction action = new UpdateConsoleProxyAgentAction();
action.uuid = "f616460f24cd330180db4188c3a905b6";
action.consoleProxyOverriddenIp = "127.0.0.1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateConsoleProxyAgentAction.Result res = action.call();
```

 Python SDK

```
UpdateConsoleProxyAgentAction action = UpdateConsoleProxyAgentAction()
action.uuid = "f616460f24cd330180db4188c3a905b6"
action.consoleProxyOverriddenIp = "127.0.0.1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateConsoleProxyAgentAction.Result res = action.call()
```

---

### AccessKey相关接口

---

#### 创建AccessKey(CreateAccessKey)



##### API请求

 URLs

```
POST zstack/v1/accesskeys
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "accountUuid": "db517023502d34ef9309e49674af88d0",
    "userUuid": "019f0d7b414b31d98a8de6cab4a8b999"
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
-X POST -d '{"params":{"accountUuid":"db517023502d34ef9309e49674af88d0","userUuid":"019f0d7b414b31d98a8de6cab4a8b999"}}' http://localhost:8080/zstack/v1/accesskeys
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | body(包含在**params**结构中) | 账户UUID |  | 3.2.0 |
| userUuid | String | body(包含在**params**结构中) | 用户UUID |  | 3.2.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.2.0 |
| AccessKeyID (可选) | String | body(包含在**params**结构中) | 生成的AccessKeyID |  | 3.7.0 |
| AccessKeySecret (可选) | String | body(包含在**params**结构中) | 生成的AccessKeySecret |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "01f82a92a3f83136b3a5fa13b0f1dde6",
    "accountUuid": "bc81e5aad7363ebaa904ee81edbfdd1f",
    "userUuid": "20e90349268736d7950284d122f64213",
    "AccessKeyID": "1234567890abcdedfhij",
    "AccessKeySecret": "1234567890abcdedfhij1234567890abcdedfhij",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.2.0 |
| inventory | AccessKeyInventory | 详情参考[inventory] | 3.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.2.0 |
| description | String | 错误的概要描述 | 3.2.0 |
| details | String | 错误的详细信息 | 3.2.0 |
| elaboration | String | 保留字段，默认为null | 3.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.2.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| description | String | 资源的详细描述 | 3.2.0 |
| accountUuid | String | 账户UUID | 3.2.0 |
| userUuid | String | 用户UUID | 3.2.0 |
| AccessKeyID | String |  | 3.2.0 |
| AccessKeySecret | String |  | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| state | AccessKeyState | 详情参考[state] | 3.2.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.2.0 |
| ordinal | int |  | 3.2.0 |



##### SDK示例

 Java SDK

```
CreateAccessKeyAction action = new CreateAccessKeyAction();
action.accountUuid = "db517023502d34ef9309e49674af88d0";
action.userUuid = "019f0d7b414b31d98a8de6cab4a8b999";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAccessKeyAction.Result res = action.call();
```

 Python SDK

```
CreateAccessKeyAction action = CreateAccessKeyAction()
action.accountUuid = "db517023502d34ef9309e49674af88d0"
action.userUuid = "019f0d7b414b31d98a8de6cab4a8b999"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAccessKeyAction.Result res = action.call()
```

---

#### 删除AccessKey(DeleteAccessKey)



##### API请求

 URLs

```
DELETE zstack/v1/accesskeys/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/accesskeys/7fcbb0096e3d3e2a8dd4f83610d3dac9?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | AccessKey UUID，唯一标示该资源 |  | 3.2.0 |
| deleteMode (可选) | String | url |  |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



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
DeleteAccessKeyAction action = new DeleteAccessKeyAction();
action.uuid = "7fcbb0096e3d3e2a8dd4f83610d3dac9";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAccessKeyAction.Result res = action.call();
```

 Python SDK

```
DeleteAccessKeyAction action = DeleteAccessKeyAction()
action.uuid = "7fcbb0096e3d3e2a8dd4f83610d3dac9"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAccessKeyAction.Result res = action.call()
```

---

#### 查询AccessKey(QueryAccessKey)



##### API请求

 URLs

```
GET zstack/v1/accesskeys
GET zstack/v1/accesskeys/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/accesskeys?q=uuid=fc008e53779632989bf9393ecf074e25
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/accesskeys/f99c1aea4a6e35e4a88c6abfe11cce8d
```



可查询字段

运行CLI命令行工具，输入QueryAccessKey并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "12be3dd32afa3cf2afa4c06037f218b7",
      "accountUuid": "324ecf74dd5c3b9a9f2b75edfdbd858f",
      "userUuid": "49c0bc4cfa6d3a67930fe4a4cc32248c",
      "AccessKeyID": "1234567890abcdedfhij",
      "AccessKeySecret": "1234567890abcdedfhij1234567890abcdedfhij",
      "state": "Enabled"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.2.0 |
| inventories | List | 详情参考[inventories] | 3.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.2.0 |
| description | String | 错误的概要描述 | 3.2.0 |
| details | String | 错误的详细信息 | 3.2.0 |
| elaboration | String | 保留字段，默认为null | 3.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.2.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| description | String | 资源的详细描述 | 3.2.0 |
| accountUuid | String | 账户UUID | 3.2.0 |
| userUuid | String | 用户UUID | 3.2.0 |
| AccessKeyID | String |  | 3.2.0 |
| AccessKeySecret | String |  | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| state | AccessKeyState | 详情参考[state] | 3.2.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.2.0 |
| ordinal | int |  | 3.2.0 |



##### SDK示例

 Java SDK

```
QueryAccessKeyAction action = new QueryAccessKeyAction();
action.conditions = asList("uuid=f0c530f17978349faa8c4736accd0375");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAccessKeyAction.Result res = action.call();
```

 Python SDK

```
QueryAccessKeyAction action = QueryAccessKeyAction()
action.conditions = ["uuid=ee3c98b8528e3fe2aa9d817cd48b1358"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAccessKeyAction.Result res = action.call()
```

---

#### 开启或关闭AccessKey(ChangeAccessKeyState)



##### API请求

 URLs

```
PUT zstack/v1/accesskeys/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAccessKeyState": {
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
-X PUT -d '{"changeAccessKeyState":{"stateEvent":"disable"}}' http://localhost:8080/zstack/v1/accesskeys/2c9c06fee2513d4b81f1af281ab6bb7b/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | AccessKey UUID，唯一标示该资源 |  | 3.2.0 |
| stateEvent | String | body(包含在**changeAccessKeyState**结构中) | 开启或关闭 | enable disable | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "defe79b1a43f35818dc6d3959b571773",
    "accountUuid": "d0c06c8d19f439b1b8f481dbdf3e3a3c",
    "userUuid": "b622d5d01ef63237878023e93ade5003",
    "AccessKeyID": "1234567890abcdedfhij",
    "AccessKeySecret": "1234567890abcdedfhij1234567890abcdedfhij",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.2.0 |
| inventory | AccessKeyInventory | 详情参考[inventory] | 3.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.2.0 |
| description | String | 错误的概要描述 | 3.2.0 |
| details | String | 错误的详细信息 | 3.2.0 |
| elaboration | String | 保留字段，默认为null | 3.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.2.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| description | String | 资源的详细描述 | 3.2.0 |
| accountUuid | String | 账户UUID | 3.2.0 |
| userUuid | String | 用户UUID | 3.2.0 |
| AccessKeyID | String |  | 3.2.0 |
| AccessKeySecret | String |  | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| state | AccessKeyState | 详情参考[state] | 3.2.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.2.0 |
| ordinal | int |  | 3.2.0 |



##### SDK示例

 Java SDK

```
ChangeAccessKeyStateAction action = new ChangeAccessKeyStateAction();
action.uuid = "2c9c06fee2513d4b81f1af281ab6bb7b";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAccessKeyStateAction.Result res = action.call();
```

 Python SDK

```
ChangeAccessKeyStateAction action = ChangeAccessKeyStateAction()
action.uuid = "2c9c06fee2513d4b81f1af281ab6bb7b"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAccessKeyStateAction.Result res = action.call()
```

---

### IP黑白名单相关接口

---

#### 增加IP访问控制规则(AddAccessControlRule)



##### API请求

 URLs

```
POST zstack/v1/login-control/access-control/rules
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "rule1",
    "description": "this is a rule",
    "rule": "172.20.1.1,172.20.1.2",
    "controlStrategy": "ACCEPT"
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
-X POST -d '{"params":{"name":"rule1","description":"this is a rule","rule":"172.20.1.1,172.20.1.2","controlStrategy":"ACCEPT"}}' http://localhost:8080/zstack/v1/login-control/access-control/rules
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.5.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.5.1 |
| rule | String | body(包含在**params**结构中) |  |  | 3.5.1 |
| controlStrategy | String | body(包含在**params**结构中) |  |  | 3.5.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.5.1 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



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
AddAccessControlRuleAction action = new AddAccessControlRuleAction();
action.name = "rule1";
action.description = "this is a rule";
action.rule = "172.20.1.1,172.20.1.2";
action.controlStrategy = "ACCEPT";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAccessControlRuleAction.Result res = action.call();
```

 Python SDK

```
AddAccessControlRuleAction action = AddAccessControlRuleAction()
action.name = "rule1"
action.description = "this is a rule"
action.rule = "172.20.1.1,172.20.1.2"
action.controlStrategy = "ACCEPT"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAccessControlRuleAction.Result res = action.call()
```

---

#### 删除IP访问控制规则(DeleteAccessControlRule)



##### API请求

 URLs

```
DELETE zstack/v1/login-control/access-control/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/login-control/access-control/rules/04baa07ba917360394ec649e26b93593?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.1 |
| deleteMode (可选) | String | body |  |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



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
DeleteAccessControlRuleAction action = new DeleteAccessControlRuleAction();
action.uuid = "04baa07ba917360394ec649e26b93593";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAccessControlRuleAction.Result res = action.call();
```

 Python SDK

```
DeleteAccessControlRuleAction action = DeleteAccessControlRuleAction()
action.uuid = "04baa07ba917360394ec649e26b93593"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAccessControlRuleAction.Result res = action.call()
```

---

#### 更新IP访问控制规则(UpdateAccessControlRule)



##### API请求

 URLs

```
PUT zstack/v1/login-control/access-control/rules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAccessControlRule": {
    "name": "rule1",
    "description": "this is a rule"
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
-X PUT -d '{"updateAccessControlRule":{"name":"rule1","description":"this is a rule"}}' http://localhost:8080/zstack/v1/login-control/access-control/rules/6bc3181222854438ac8af53f2b57ecf7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.1 |
| name (可选) | String | body(包含在**updateAccessControlRule**结构中) | 资源名称 |  | 3.5.1 |
| description (可选) | String | body(包含在**updateAccessControlRule**结构中) | 资源的详细描述 |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "rule",
    "description": "this is rule description",
    "rule": "172.20.1.1",
    "strategy": "ACCEPT",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | AccessControlRuleInventory | 详情参考[inventory] | 3.5.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.1 |
| description | String | 错误的概要描述 | 3.5.1 |
| details | String | 错误的详细信息 | 3.5.1 |
| elaboration | String | 保留字段，默认为null | 3.5.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.1 |
| name | String | 资源名称 | 3.5.1 |
| description | String | 资源的详细描述 | 3.5.1 |
| rule | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |
| strategy | ControlStrategy | 详情参考[strategy] | 3.5.1 |

 #strategy

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ACCEPT | ControlStrategy |  | 3.5.1 |
| REJECT | ControlStrategy |  | 3.5.1 |



##### SDK示例

 Java SDK

```
UpdateAccessControlRuleAction action = new UpdateAccessControlRuleAction();
action.uuid = "c3fb6843d7b84791bbffb762e35b3065";
action.name = "rule1";
action.description = "this is a rule";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAccessControlRuleAction.Result res = action.call();
```

 Python SDK

```
UpdateAccessControlRuleAction action = UpdateAccessControlRuleAction()
action.uuid = "4c30b1ea5adf450ebca75f8b8606b964"
action.name = "rule1"
action.description = "this is a rule"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAccessControlRuleAction.Result res = action.call()
```

---

#### 查询IP访问控制规则(QueryAccessControlRule)



##### API请求

 URLs

```
GET zstack/v1/login-control/access-control/rules
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/login-control/access-control/rules?q=uuid=4f41ad1c52ac3ba690282ede3d1ebb2a
```



可查询字段

运行CLI命令行工具，输入QueryAccessControlRule并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "rule": "192.168.10.0/24"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventories | List | 详情参考[inventories] | 3.5.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.1 |
| description | String | 错误的概要描述 | 3.5.1 |
| details | String | 错误的详细信息 | 3.5.1 |
| elaboration | String | 保留字段，默认为null | 3.5.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.1 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.1 |
| name | String | 资源名称 | 3.5.1 |
| description | String | 资源的详细描述 | 3.5.1 |
| rule | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |
| strategy | ControlStrategy | 详情参考[strategy] | 3.5.1 |

 #strategy

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ACCEPT | ControlStrategy |  | 3.5.1 |
| REJECT | ControlStrategy |  | 3.5.1 |



##### SDK示例

 Java SDK

```
QueryAccessControlRuleAction action = new QueryAccessControlRuleAction();
action.conditions = asList("uuid=b4cae0f6a9ac3cd686ba36c81291d197");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAccessControlRuleAction.Result res = action.call();
```

 Python SDK

```
QueryAccessControlRuleAction action = QueryAccessControlRuleAction()
action.conditions = ["uuid=4b3f7d2f1fda3f1d8089b4d037364bf9"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAccessControlRuleAction.Result res = action.call()
```

---

#### 获取登录验证码(GetLoginCaptcha)



##### API请求

 URLs

```
GET zstack/v1/login/control/captcha
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -X GET http://localhost:8080/zstack/v1/login/control/captcha?resourceName=admin&loginType=Test
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceName | String | query |  |  | 3.5.1 |
| loginType | String | query |  |  | 3.5.1 |
| captchaUuid (可选) | String | query |  |  | 3.5.1 |
| systemTags (可选) | List | query |  |  | 3.5.1 |
| userTags (可选) | List | query |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "captchaUuid": "64dd651f9c0043c28490b3a4d76d394e",
  "captcha": "test"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| captchaUuid | String |  | 3.5.1 |
| captcha | String |  | 3.5.1 |
| success | boolean |  | 3.5.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| error | ErrorCode | 详情参考[error] | 3.5.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.1 |
| description | String | 错误的概要描述 | 3.5.1 |
| details | String | 错误的详细信息 | 3.5.1 |
| elaboration | String | 保留字段，默认为null | 3.5.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.1 |
| description | String | 错误的概要描述 | 3.5.1 |
| details | String | 错误的详细信息 | 3.5.1 |
| elaboration | String | 保留字段，默认为null | 3.5.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.1 |



##### SDK示例

 Java SDK

```
GetLoginCaptchaAction action = new GetLoginCaptchaAction();
action.resourceName = "admin";
action.loginType = "Test";
GetLoginCaptchaAction.Result res = action.call();
```

 Python SDK

```
GetLoginCaptchaAction action = GetLoginCaptchaAction()
action.resourceName = "admin"
action.loginType = "Test"
GetLoginCaptchaAction.Result res = action.call()
```
