# 硬件设施 - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.2.html*

---

## 硬件设施

---

## 区域相关接口

---

## 创建区域(CreateZone)



### API请求

 URLs

```
POST zstack/v1/zones
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{ "params": { "name": "TestZone", "description": "test zone"   }, "systemTags": [], "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"TestZone","description":"test zone"}}' \ http://localhost:8080/zstack/v1/zones
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 用户指定的资源uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回



返回示例

```
{ "inventory": { "uuid": "0d26522305c34d07b5661ccda62053c0", "name": "TestZone", "description": "Test", "state": "Enabled", "type": "zstack", "createDate": "Jun 7, 2017 9:20:28 PM", "lastOpDate": "Jun 7, 2017 9:20:28 PM"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ZoneInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
CreateZoneAction action = new CreateZoneAction(); action.name = "TestZone"; action.description = "test zone"; action.sessionId = "982a09118de64ef7a9051fde346270c5"; CreateZoneAction.Result res = action.call();
```

 Python SDK

```
CreateZoneAction action = CreateZoneAction() action.name = "TestZone" action.description = "test zone" action.sessionId = "79e260dca17b4bdf9b7d7b4e150883df" CreateZoneAction.Result res = action.call()
```

---

## 删除区域(DeleteZone）



### API请求

 URLs

```
DELETE zstack/v1/zones/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 05fc0a34be264877a9dc8dfb5f90d619" \ -X DELETE http://localhost:8080/zstack/v1/zones/d3483ca440334af3acc09d8631e814c6?deleteMode=Permissive
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | Permissive：如果删除过程中发生错误或者删除不被允许，云平台会停止删除操作；在这种情况下, 包含失败原因的错误代码会被返回。 Enforcing：云平台会忽略所有错误和权限而直接删除资源；在这种情况下, 删除操作总是会成功。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回



该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{ "error": { "code": "SYS.1001", "description": "A message or a operation timeout", "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
DeleteZoneAction action = new DeleteZoneAction(); action.uuid = "8987020fccd14191a5a89dda6f3db81e"; action.deleteMode = "Permissive"; action.sessionId = "835b1b72c4554a7e92c425ad9eaebc6d"; DeleteZoneAction.Result res = action.call();
```

 Python SDK

```
DeleteZoneAction action = DeleteZoneAction() action.uuid = "a4bcb439c99a42e197cac90be83e706e" action.deleteMode = "Permissive" action.sessionId = "6eaf02e52c884e378a3730ce4267d83a" DeleteZoneAction.Result res = action.call()
```

---

#### 查询区域(QueryZone)



##### API请求

 URLs

```
GET zstack/v1/zones
GET zstack/v1/zones/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e556a104ae874303897ac67d83564086" \
-X GET http://localhost:8080/zstack/v1/zones?q=name=TestZone&q=state=Enabled
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7e9fd15bba0d43a2b1a7212c85fb8787" \
-X GET http://localhost:8080/zstack/v1/zones/9276d05c7d7545d6b61bfc50f017b86c
```



可查询字段

运行CLI命令行工具，输入`QueryZone`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "a58fb4240ed04129a0896b565f24a9df",
"name": "TestZone",
"description": "Test",
"state": "Enabled",
"type": "zstack",
"createDate": "Jun 7, 2017 9:20:29 PM",
"lastOpDate": "Jun 7, 2017 9:20:29 PM"
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
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QueryZoneAction action = new QueryZoneAction();
action.conditions = asList("name=TestZone","state=Enabled");
action.sessionId = "608079b963b54e8a9aa3a2291adae89f";
QueryZoneAction.Result res = action.call();
```

 Python SDK

```
QueryZoneAction action = QueryZoneAction()
action.conditions = ["name=TestZone","state=Enabled"]
action.sessionId = "be89929b7fd34d25a5c1a7f47f4490cd"
QueryZoneAction.Result res = action.call()
```

---

#### 更新区域(UpdateZone）



更新区域的名称、描述、系统标签或者用户标签。

##### API请求

 URLs

```
PUT zstack/v1/zones/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateZone": {
"name": "TestZone2",
"description": "test second zone"
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
-X PUT -d '{"updateZone":{"name":"TestZone2","description":"test second zone"}}' \
http://localhost:8080/zstack/v1/zones/3fc9a2d76b043ead90c537561edcb50e/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**updateZone**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateZone**结构中) | 资源的详细描述 |  | 0.6 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "eb5d94d030e84fb286c4f281520b163b",
"name": "TestZone",
"description": "Test",
"state": "Enabled",
"type": "zstack",
"createDate": "Jun 7, 2017 9:20:45 PM",
"lastOpDate": "Jun 7, 2017 9:20:45 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ZoneInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateZoneAction action = new UpdateZoneAction();
action.name = "TestZone2";
action.description = "test second zone";
action.uuid = "e676dc07cbad45ccb96fd6033ed3c72f";
action.sessionId = "14b97d8a960b4c758389f6b6f5930210";
UpdateZoneAction.Result res = action.call();
```

 Python SDK

```
UpdateZoneAction action = UpdateZoneAction()
action.name = "TestZone2"
action.description = "test second zone"
action.uuid = "20ab7e6d18134e84ac5322741be661ca"
action.sessionId = "8b46ebd366c54b808c63812ecef9fff0"
UpdateZoneAction.Result res = action.call()
```

---

#### 改变区域的可用状态(ChangeZoneState)



##### API请求

 URLs

```
PUT zstack/v1/zones/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeZoneState": {
"stateEvent": "enable"
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
-X PUT -d '{"changeZoneState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/zones/af28b8e014ba35619ab68739fe72c2a3/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeZoneState**结构中) | 状态触发事件 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "5ea6fdd8a3a24fa2b17b1b89ad29da6b",
"name": "TestZone",
"description": "Test",
"state": "Enabled",
"type": "zstack",
"createDate": "Jun 7, 2017 9:21:08 PM",
"lastOpDate": "Jun 7, 2017 9:21:08 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ZoneInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeZoneStateAction action = new ChangeZoneStateAction();
action.uuid = "61defcb978894aec8839a099bd0eb1a2";
action.stateEvent = "enable";
action.sessionId = "166c291cd367487c9032f4f23531863c";
ChangeZoneStateAction.Result res = action.call();
```

 Python SDK

```
ChangeZoneStateAction action = ChangeZoneStateAction()
action.uuid = "8feaadcae6f847a7b7fe707d150b7fef"
action.stateEvent = "enable"
action.sessionId = "b6988f47cb2e4a13abe7b2116d3a2a78"
ChangeZoneStateAction.Result res = action.call()
```

---

### 集群相关接口

---

#### 创建一个集群(CreateCluster)



##### API请求

 URLs

```
POST zstack/v1/clusters
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"zoneUuid": "d5629a75f0a24280ac669d93d38a7dcd",
"name": "cluster1",
"description": "test",
"hypervisorType": "KVM"
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
-X POST -d '{"params":{"zoneUuid":"e1fb7d87073b397c857eaeeb16243103","name":"cluster1","description":"test","hypervisorType":"KVM"}}' \
http://localhost:8080/zstack/v1/clusters
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在params结构中) | 区域UUID |  | 0.6 |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| hypervisorType | String | body(包含在params结构中) | 虚拟机管理程序类型 | KVM Simulator | 4.0.0 |
| type (可选) | String | body(包含在params结构中) | 保留域, 请不要使用 | zstack | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 当reourceUuid不等于null, 云平台使用这个值作为被创建资源的UUID； 否则云平台会自动生成一个UUID |  | 0.6 |
| architecture (可选) | String | body(包含在params结构中) |  | x86_64 aarch64 mips64el | 4.0.0 |
| tagUuids (可选) | List | body(包含在params结构中) |  |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "cluster1",
"uuid": "dc7442bb39674d779d688369329ba845",
"description": "test",
"state": "Enabled",
"hypervisorType": "KVM",
"createDate": "Jun 7, 2017 9:20:31 PM",
"lastOpDate": "Jun 7, 2017 9:20:31 PM",
"zoneUuid": "342b68c14869412984d6327a58b18f9b",
"type": "zstack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ClusterInventory | 详情参考[inventory] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 集群状态 | 0.6 |
| hypervisorType | String | 虚拟机管理程序类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| type | String | 保留域 | 0.6 |



##### SDK示例

 Java SDK

```
CreateClusterAction action = new CreateClusterAction();
action.zoneUuid = "70fd596da027478eb22ac9357aed23f4";
action.name = "cluster1";
action.description = "test";
action.hypervisorType = "KVM";
action.sessionId = "894477861bcc45488978b584908e4ee3";
CreateClusterAction.Result res = action.call();
```

 Python SDK

```
CreateClusterAction action = CreateClusterAction()
action.zoneUuid = "cfe698802c87486986878daa2da7e02f"
action.name = "cluster1"
action.description = "test"
action.hypervisorType = "KVM"
action.sessionId = "0664130c5d36414bbb3a7a59ef87ea5a"
CreateClusterAction.Result res = action.call()
```

---

#### 删除一个集群(DeleteCluster)



##### API请求

 URLs

```
DELETE zstack/v1/clusters/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth d55b1a48ad2348ceb3bea95b407a8bde" \
-X DELETE http://localhost:8080/zstack/v1/clusters/a5bb7e5ca83f41748538d953709ba3c3?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeleteClusterAction action = new DeleteClusterAction();
action.uuid = "51b6e91ce692487ea582418f52835061";
action.deleteMode = "Permissive";
action.sessionId = "41695ae924854a3abfc1e681e092f744";
DeleteClusterAction.Result res = action.call();
```

 Python SDK

```
DeleteClusterAction action = DeleteClusterAction()
action.uuid = "2e9d94bbe3d240d3a660e86a7cd6aff8"
action.deleteMode = "Permissive"
action.sessionId = "386fba061d404eeb830a772e31fd4faf"
DeleteClusterAction.Result res = action.call()
```

---

#### 查询集群(QueryCluster)



##### API请求

 URLs

```
GET zstack/v1/clusters
GET zstack/v1/clusters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 815c808ecfb5461b953544d4bcefea31" \
-X GET http://localhost:8080/zstack/v1/clusters?q=hypervisorType=KVM
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 663eef55906d4b6e9750f9b4ed65f5f9" \
-X GET http://localhost:8080/zstack/v1/clusters/a8d5ea1ceda34616a26bec2fce3b4d8a
```



可查询字段

运行CLI命令行工具，输入`QueryCluster`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "cluster1",
"uuid": "41f3a4eb130347a2af6d7f2e0d21fab0",
"description": "test",
"state": "Enabled",
"hypervisorType": "KVM",
"createDate": "Jun 7, 2017 9:20:13 PM",
"lastOpDate": "Jun 7, 2017 9:20:13 PM",
"zoneUuid": "aad01c8b25774796b2e341ec51a7c9c1",
"type": "zstack"
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
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 集群状态 | 0.6 |
| hypervisorType | String | 虚拟机管理程序类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| type | String | 保留域 | 0.6 |



##### SDK示例

 Java SDK

```
QueryClusterAction action = new QueryClusterAction();
action.conditions = asList("hypervisorType=KVM");
action.sessionId = "3e214b652cc947ea9e1aa256d05752ea";
QueryClusterAction.Result res = action.call();
```

 Python SDK

```
QueryClusterAction action = QueryClusterAction()
action.conditions = ["hypervisorType=KVM"]
action.sessionId = "ad8f3cd4b5bc4da0a3a91dc8bcbdd18c"
QueryClusterAction.Result res = action.call()
```

---

#### 更新集群(UpdateCluster)



##### API请求

 URLs

```
PUT zstack/v1/clusters/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateCluster": {
"name": "cluster1",
"description": "test"
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
-X PUT -d '{"updateCluster":{"name":"cluster1","description":"test"}}' \
http://localhost:8080/zstack/v1/clusters/851a3783e1503de2a1b9222014c843c4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateCluster**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateCluster**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "cluster1",
"uuid": "9dd0fbecb0e04260ad161c66d1da9f96",
"description": "test",
"state": "Enabled",
"hypervisorType": "KVM",
"createDate": "Jun 7, 2017 9:20:29 PM",
"lastOpDate": "Jun 7, 2017 9:20:29 PM",
"zoneUuid": "25b7ddce968f4cbbb58aa5a205e116ee",
"type": "zstack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ClusterInventory | 详情参考[inventory] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 集群状态 | 0.6 |
| hypervisorType | String | 虚拟机管理程序类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| type | String | 保留域 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateClusterAction action = new UpdateClusterAction();
action.uuid = "ce185b26a4f14153941a868435d94498";
action.name = "cluster1";
action.description = "test";
action.sessionId = "5abfadbc97d64b4687ba6281de117d2d";
UpdateClusterAction.Result res = action.call();
```

 Python SDK

```
UpdateClusterAction action = UpdateClusterAction()
action.uuid = "a643ba1b98524c60acced530ce2ded1b"
action.name = "cluster1"
action.description = "test"
action.sessionId = "cc779e5d5344493d9bd1cb1ced887321"
UpdateClusterAction.Result res = action.call()
```

---

#### 改变一个集群的可用状态(ChangeClusterState)



##### API请求

 URLs

```
PUT zstack/v1/clusters/{uuid}/actions
```



Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeClusterState": {
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
-X PUT -d '{"changeClusterState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/clusters/652ee5e996203bfbb5eb75e750720093/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeClusterState**结构中) | 可用状态触发事件 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "cluster1",
"uuid": "2cebd4274c7c4550add1ee3620b52a81",
"description": "test",
"state": "Enabled",
"hypervisorType": "KVM",
"createDate": "Jun 7, 2017 9:20:25 PM",
"lastOpDate": "Jun 7, 2017 9:20:25 PM",
"zoneUuid": "90eb72b73e144650990db2aa1ddee7c1",
"type": "zstack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ClusterInventory | 详情参考[inventory] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 集群状态 | 0.6 |
| hypervisorType | String | 虚拟机管理程序类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| type | String | 保留域 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeClusterStateAction action = new ChangeClusterStateAction();
action.uuid = "b97eb5ab5e264edbad128090b0ac28c2";
action.stateEvent = "disable";
action.sessionId = "79368b716c6a4d5db37fc7c601bf14cc";
ChangeClusterStateAction.Result res = action.call();
```

 Python SDK

```
ChangeClusterStateAction action = ChangeClusterStateAction()
action.uuid = "24f520e8991d464eaf2ed9b1e55996a3"
action.stateEvent = "disable"
action.sessionId = "11db5049d24342e7af8b1a3992484184"
ChangeClusterStateAction.Result res = action.call()
```

---

#### 升级集群内物理机的操作系统(UpdateClusterOS)



##### API请求

 URLs

```
PUT zstack/v1/clusters/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateClusterOS": {
    "excludePackages": [
      "kernel",
      "systemd*"
    ],
    "updatePackages": [
      "zstack-release"
    ],
    "releaseVersion": "c74",
    "force": false
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
-X PUT -d '{"updateClusterOS":{"excludePackages":["kernel","systemd*"],"updatePackages":["zstack-release"],"releaseVersion":"c74","force":false}}' http://localhost:8080/zstack/v1/clusters/31c4951f39ae38969802e833448369ae/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| excludePackages (可选) | List | body(包含在**updateClusterOS**结构中) | 不升级的包列表 |  | 3.7.0 |
| updatePackages (可选) | List | body(包含在**updateClusterOS**结构中) | 要升级的包列表 |  | 3.7.0 |
| releaseVersion (可选) | String | body(包含在**updateClusterOS**结构中) | 升级所用源的版本 |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**updateClusterOS**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**updateClusterOS**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| force (可选) | boolean | body(包含在**updateClusterOS**结构中) | 强制 | true false | 5.2.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "932696598b64375ea4ae6226cc0c1407"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | LongJobInventory | 详情参考[inventory] | 2.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2.4 |
| name | String | 资源名称 | 2.2.4 |
| description | String | 资源的详细描述 | 2.2.4 |
| apiId | String | 用于关联TaskProgress的APIID | 2.2.4 |
| jobName | String | 任务名称 | 2.2.4 |
| jobData | String | 任务数据 | 2.2.4 |
| jobResult | String | 任务结果 | 2.2.4 |
| targetResourceUuid | String | 目标资源UUID | 2.2.4 |
| managementNodeUuid | String | 管理节点UUID | 2.2.4 |
| createDate | Timestamp | 创建时间 | 2.2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2.4 |
| executeTime | Long |  | 3.7.0 |
| state | LongJobState | 详情参考[state] | 2.2.4 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.24 |
| ordinal | int |  | 2.2.4 |



##### SDK示例

 Java SDK

```
UpdateClusterOSAction action = new UpdateClusterOSAction();
action.uuid = "31c4951f39ae38969802e833448369ae";
action.excludePackages = asList("kernel","systemd*");
action.updatePackages = asList("zstack-release");
action.releaseVersion = "c74";
action.force = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateClusterOSAction.Result res = action.call();

```

 Python SDK

```
UpdateClusterOSAction action = UpdateClusterOSAction()
action.uuid = "31c4951f39ae38969802e833448369ae"
action.excludePackages = [kernel, systemd*]
action.updatePackages = [zstack-release]
action.releaseVersion = "c74"
action.force = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateClusterOSAction.Result res = action.call()

```

---

### 物理机相关接口

---

#### 创建Bond网口(CreateBonding)



##### API请求

 URLs

```
POST zstack/v1/hosts/bondings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "hostUuids": [
      "83e1a4a2ca0d3b0e836b032118196455"
    ],
    "type": "LinuxBonding",
    "mode": "802.3ad",
    "xmitHashPolicy": "layer2+3"
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
-X POST -d '{"params":{"hostUuids":["83e1a4a2ca0d3b0e836b032118196455"],"type":"LinuxBonding","mode":"802.3ad","xmitHashPolicy":"layer2+3"}}' http://localhost:8080/zstack/v1/hosts/bondings
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
| hostUuids | List | body (包含在**params**结构中) | 主机UUID列表 |  | 5.0.0 |
| bondingName | String | body (包含在**params**结构中) | Bond名称 |  | 4.7.0 |
| slaveUuids (可选) | List | body (包含在**params**结构中) | slave网卡UUIDs列表 |  | 5.0.0 |
| slaveNames (可选) | List | body (包含在**params**结构中) | slave网卡名称列表 |  | 5.0.0 |
| type | String | body (包含在**params**结构中) | Bond类型 | LinuxBonding OvsBonding | 4.7.0 |
| mode | String | body (包含在**params**结构中) | 工作方式 | 802.3ad active-backup | 4.7.0 |
| xmitHashPolicy (可选) | String | body (包含在**params**结构中) | 哈希算法策略 | layer2 layer2+3 layer3+4 | 4.7.0 |
| description (可选) | String | body (包含在**params**结构中) | 资源的详细描述 |  | 4.7.0 |
| resourceUuid (可选) | String | body (包含在**params**结构中) | 资源UUID |  | 4.7.0 |
| tagUuids (可选) | List | body (包含在**params**结构中) | 标签UUID列表 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "hostUuid": "ad58bd08605338648dce127f256f332e",
      "bondingName": "test",
      "mode": "802.3ad",
      "xmitHashPolicy": "layer2+3",
      "ipAddresses": [
        "192.168.1.1"
      ],
      "type": "LinuxBonding",
      "slaves": [
        {
          "uuid": "97e1e9fb0cd73af8bd3e84376e59fa26",
          "hostUuid": "ad58bd08605338648dce127f256f332e",
          "interfaceName": "eno1",
          "interfaceType": "bondingSlave",
          "speed": 1000,
          "slaveActive": true,
          "carrierActive": true,
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | List | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| bondingName | String | Bond名称 | 4.7.0 |
| bondingType | String | Bond应用状态，有noBridge、bridgeSlave | 4.7.0 |
| speed | Long | Bond速率 | 4.7.0 |
| mode | String | Bond模式 | 4.7.0 |
| xmitHashPolicy | String | 哈希策略 | 4.7.0 |
| miiStatus | String | MII状态 | 4.7.0 |
| mac | String | MAC地址 | 4.7.0 |
| ipAddresses | List | IP地址 | 4.7.0 |
| gateway | String | 网关地址 | 4.7.0 |
| callBackIp | String | 回调地址 | 4.7.0 |
| miimon | Long | MII监控间隔 | 4.7.0 |
| type | String | Bond类型 | 4.7.0 |
| allSlavesActive | Boolean |  | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| slaves | List | 详情参考[slaves] | 4.7.0 |

 #slaves

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| bondingUuid | String | Bond UUID | 4.7.0 |
| interfaceModel | String | 网卡型号 | 5.0.0 |
| vendorId | String | 产商Id | 5.0.0 |
| deviceId | String | 设备Id | 5.0.0 |
| subvendorId | String | 子产商Id | 5.0.0 |
| subdeviceId | String | 子设备Id | 5.0.0 |
| interfaceName | String | 网卡名称 | 4.7.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 4.7.0 |
| speed | Long | 网卡速率 | 4.7.0 |
| slaveActive | Boolean | Bond链路状态 | 4.7.0 |
| carrierActive | Boolean | 物理链路状态 | 4.7.0 |
| ipAddresses | List | IP地址 | 4.7.0 |
| gateway | String | 网关地址 | 4.7.0 |
| mac | String | MAC地址 | 4.7.0 |
| callBackIp | String | 回调地址 | 4.7.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 4.7.0 |
| offloadStatus | String |  | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
CreateBondingAction action = new CreateBondingAction();
action.hostUuids = asList("83e1a4a2ca0d3b0e836b032118196455");
action.type = "LinuxBonding";
action.mode = "802.3ad";
action.xmitHashPolicy = "layer2+3";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBondingAction.Result res = action.call();
```

 Python SDK

```
CreateBondingAction action = CreateBondingAction()
action.hostUuids = [83e1a4a2ca0d3b0e836b032118196455]
action.type = "LinuxBonding"
action.mode = "802.3ad"
action.xmitHashPolicy = "layer2+3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBondingAction.Result res = action.call()
```

---

#### 删除Bond网口(DeleteBonding)



##### API请求

 URLs

```
DELETE zstack/v1/hosts/bondings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/hosts/bondings/6176f82c38f336d0a9ade9a84e1931a1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| deleteMode (可选) | String | body | 删除模式 (Permissive/Enforcing，Permissive) |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



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
DeleteBondingAction action = new DeleteBondingAction();
action.uuid = "6176f82c38f336d0a9ade9a84e1931a1";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteBondingAction.Result res = action.call();
```

 Python SDK

```
DeleteBondingAction action = DeleteBondingAction()
action.uuid = "6176f82c38f336d0a9ade9a84e1931a1"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteBondingAction.Result res = action.call()
```

---

#### 查询物理机(QueryHost)



##### API请求

 URLs

```
GET zstack/v1/hosts
GET zstack/v1/hosts/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 99a86d711f154752b52a7de2b3c43a63" \
-X GET http://localhost:8080/zstack/v1/hosts?q=uuid=66547f0fc9fd45d98f6b8482488f2993
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bd46777b8a8c4616a64f0cdbcf1bf98e" \
-X GET http://localhost:8080/zstack/v1/hosts/bb582f21cfad4f61a2ab1ec062131b4a
```



可查询字段

运行CLI命令行工具，输入`QueryHost`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "zoneUuid": "37649b12f572303a883c19c4c7af0856",
      "name": "example",
      "uuid": "f7bae73b9874344b8766dfcdda48ad6e",
      "clusterUuid": "d59c027b81fe3bbc9d78ef45f574febb",
      "description": "example",
      "managementIp": "192.168.0.1",
      "hypervisorType": "KVM",
      "state": "Enabled",
      "status": "Connected",
      "totalCpuCapacity": 4.0,
      "availableCpuCapacity": 2.0,
      "cpuSockets": 4.0,
      "totalMemoryCapacity": 1840414720,
      "availableMemoryCapacity": 1840414720,
      "cpuNum": 4.0
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
-
-
-
-

-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String | 物理机状态，包括： Enabled Disabled PreMaintenance Maintenance | 0.6 |
| status | String | Connecting Connected Disconnected | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |


- Enabled 可以转换到 Disabled, PreMaintenance；
- Disabled 可以转换到 Enabled, PreMaintenance；
- PreMaintenance 可以转换到 Disabled, Enabled, Maintenance；
- Maintenance 可以转换到 Disabled, Enabled。


> **注意:** 说明: 物理机状态变更总结如下：



##### SDK示例

 Java SDK

```
QueryHostAction action = new QueryHostAction();
action.conditions = asList("uuid=fb0510cd5bf04565be44c43da20169c7");
action.sessionId = "d69767ca64854cfb99960282fcdb8aed";
QueryHostAction.Result res = action.call();
```

 Python SDK

```
QueryHostAction action = QueryHostAction()
action.conditions = ["uuid=2ddc05f8f46b4d5ab40053fdb72ae69d"]
action.sessionId = "96b183220af446c39d7cf2674761d85e"
QueryHostAction.Result res = action.call()
```

---

#### 查询物理机系统类型(QueryHostOsCategory)



##### API请求

 URLs

```
GET zstack/v1/hosts/os/category
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/os/category?q=architecture=x86_64&q=osReleaseVersion="helix core 7.6"
```



可查询字段

运行CLI命令行工具，输入`QueryHost`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "architecture": "x86_64",
      "osReleaseVersion": "helix Core 7.6.1810",
      "metadataList": [
        {
          "managementNodeUuid": "fe5459189a8733ef9b6b8141b84f7071",
          "hypervisor": "qemu-kvm",
          "version": "4.2.0-632.g6a6222b.el7",
          "createDate": "Nov 14, 2017 2:20:57 PM",
          "lastOpDate": "Nov 14, 2017 2:20:57 PM"
        }
      ],
      "createDate": "Nov 14, 2017 2:20:57 PM",
      "lastOpDate": "Nov 14, 2017 2:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 查询是否成功 | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该条目 | 4.6.21 |
| architecture | String | 物理机架构，比如**x86_64** | 4.6.21 |
| osReleaseVersion | String | 物理机操作系统版本 | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| metadataList | List | 详情参考[metadataList] | 4.6.21 |

 #metadataList

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该条目 | 4.6.21 |
| categoryUuid | String | 支持的物理机类型条目 UUID | 4.6.21 |
| managementNodeUuid | String | 管理节点 UUID | 4.6.21 |
| hypervisor | String | 管理程序名称，比如 **qemu-kvm** | 4.6.21 |
| version | String | 版本号，比如**4.2.0-632.g6a6222b.el7** | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |



##### SDK示例

 Java SDK

```
QueryHostOsCategoryAction action = new QueryHostOsCategoryAction();
action.conditions = asList("architecture=x86_64","osReleaseVersion=\"helix Core 7.6\"");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHostOsCategoryAction.Result res = action.call();
```

 Python SDK

```
QueryHostOsCategoryAction action = QueryHostOsCategoryAction()
action.conditions = ["architecture=x86_64","osReleaseVersion=\"helix Core 7.6""]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHostOsCategoryAction.Result res = action.call()
```

---

#### 查询资源的虚拟化软件信息(QueryKvmHypervisorInfo)



##### API请求

 URLs

```
GET zstack/v1/hosts/kvm/hypervisor/info
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/kvm/hypervisor/info?q=uuid=dd025c0199ef3b7080120db73772234f
```



可查询字段

运行CLI命令行工具，输入`QueryHost`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "a3097e5ebe8a35929e1f2fe4304893f1",
      "hypervisor": "qemu-kvm",
      "version": "4.2.0-632.g6a6222b.el7",
      "matchState": "Matched",
      "createDate": "Nov 14, 2017 2:20:57 PM",
      "lastOpDate": "Nov 14, 2017 2:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 查询是否成功 | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，可以为物理机或云主机的 UUID | 4.6.21 |
| hypervisor | String | 虚拟化软件名称，比如**qemu-kvm** | 4.6.21 |
| version | String | 版本号，比如**4.2.0-632.g6a6222b.el7** | 4.6.21 |
| matchState | String | 和预期版本号的匹配状态，可能的值为**Matched**, **Unmatched**,**Unknown** | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |



##### SDK示例

 Java SDK

```
QueryKvmHypervisorInfoAction action = new QueryKvmHypervisorInfoAction();
action.conditions = asList("uuid=0601103239cd30c2bd738b98d4440199");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryKvmHypervisorInfoAction.Result res = action.call();
```

 Python SDK

```
QueryKvmHypervisorInfoAction action = QueryKvmHypervisorInfoAction()
action.conditions = ["uuid=838e20e529cc3a19a9f0efa50e9e2409"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryKvmHypervisorInfoAction.Result res = action.call()
```

---

#### 删除物理机(DeleteHost)



##### API请求



URLs

```
DELETE zstack/v1/hosts/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 999c480f7f344c3b803c3d74b82b7145" \
-X DELETE http://localhost:8080/zstack/v1/hosts/bb2e5125ac2c4b3680463d7aeaf57773?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing，默认 Permissive) |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeleteHostAction action = new DeleteHostAction();
action.uuid = "2d4b91d9831d4630bf113ea75f78cb7a";
action.deleteMode = "Permissive";
action.sessionId = "923c9089a5fd4ea5b9fbfc1dec5802e2";
DeleteHostAction.Result res = action.call();
```



Python SDK

```
DeleteHostAction action = DeleteHostAction()
action.uuid = "f62a37111c154ec9afeaeb2700ebcfe6"
action.deleteMode = "Permissive"
action.sessionId = "2aa7f575d8654712ba985f4a36594f0a"
DeleteHostAction.Result res = action.call()
```

---

#### 更新物理机信息(UpdateHost)



##### API请求

 URLs

```
PUT zstack/v1/hosts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateHost": {
"name": "example",
"description": "example",
"managementIp": "192.168.0.1"
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
-X PUT -d '{"updateHost":{"name":"example","description":"example","managementIp":"192.168.0.1"}}' \
http://localhost:8080/zstack/v1/hosts/fe98e821991a3c96af96fc7e458d2020/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateHost**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateHost**结构中) | 资源的详细描述 |  | 0.6 |
| managementIp (可选) | String | body(包含在**updateHost**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"zoneUuid": "2adef89f417e40dbab643656bbdc6eab",
"name": "example",
"uuid": "aaeb1d3c1f5a43fd941bfebab10b9f34",
"clusterUuid": "c12dec3c77e34c40a86c4ceea02b860b",
"description": "example",
"managementIp": "192.168.0.1",
"hypervisorType": "KVM",
"state": "Enabled",
"status": "Connected",
"totalCpuCapacity": 4.0,
"availableCpuCapacity": 2.0,
"totalMemoryCapacity": 4.0,
"availableMemoryCapacity": 4.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | HostInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateHostAction action = new UpdateHostAction();
action.uuid = "17aa30b0eb5849fca56804ddd5050c84";
action.name = "example";
action.description = "example";
action.managementIp = "192.168.0.1";
action.sessionId = "f303f20ae5b740468f56e8007acba81c";
UpdateHostAction.Result res = action.call();
```

 Python SDK

```
UpdateHostAction action = UpdateHostAction()
action.uuid = "3925f7e788b54e86831644a6f85ea7c7"
action.name = "example"
action.description = "example"
action.managementIp = "192.168.0.1"
action.sessionId = "83a1c2866a8a42f98c66ed7196a58d75"
UpdateHostAction.Result res = action.call()
```

---

#### 更新物理机启用状态(ChangeHostState)



##### API请求

 URLs

```
PUT zstack/v1/hosts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeHostState": {
"stateEvent": "enable"
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
-X PUT -d '{"changeHostState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/hosts/70e37940fe263e858a151850a312143f/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在`changeHostState`结构中) | 期望的物理机启用状态 | enable disable maintain | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



返回示例

```
{
"inventory": {
"zoneUuid": "faf35db46f044232a96b1c9ac228f7a1",
"name": "example",
"uuid": "cf2e376062fe4a06bd5ab4d76cd88f5d",
"clusterUuid": "7f314660761a4899b5967b6f4aad88f3",
"description": "example",
"managementIp": "192.168.0.1",
"hypervisorType": "KVM",
"state": "Enabled",
"status": "Connected",
"totalCpuCapacity": 4.0,
"availableCpuCapacity": 2.0,
"totalMemoryCapacity": 4.0,
"availableMemoryCapacity": 4.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | HostInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeHostStateAction action = new ChangeHostStateAction();
action.uuid = "c5089a867d1c4d52a272b115da9fb51b";
action.stateEvent = "enable";
action.sessionId = "3523eb84bca24927b6c3a3177253ae55";
ChangeHostStateAction.Result res = action.call();
```

 Python SDK

```
ChangeHostStateAction action = ChangeHostStateAction()
action.uuid = "16ae0707e32a4fc58153084e8649e8ab"
action.stateEvent = "enable"
action.sessionId = "dd5b5dd2df854908a044b74151f135e1"
ChangeHostStateAction.Result res = action.call()
```

---

#### 重连物理机(ReconnectHost)



##### API请求

 URLs

```
PUT zstack/v1/hosts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"reconnectHost": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectHost":{}}' \
http://localhost:8080/zstack/v1/hosts/26caa95d6fb53d08ad6716ef03bf4b28/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
ReconnectHostAction action = new ReconnectHostAction();
action.uuid = "1c44c6b269724a62b7fb69bd25e5a8a9";
action.sessionId = "ccc6f95bad044da59080a87e710587c0";
ReconnectHostAction.Result res = action.call();
```

 Python SDK

```
ReconnectHostAction action = ReconnectHostAction()
action.uuid = "562400a5ff1e4532aacedf708d3ad75e"
action.sessionId = "eb137b7f6e45448691b652fe4245a52b"
ReconnectHostAction.Result res = action.call()
```

---

#### 获取物理机分配策略(GetHostAllocatorStrategies)



##### API请求

 URLs

```
GET zstack/v1/hosts/allocators/strategies
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f8e76d7a6ec0461cab685e6bd9d724d2" \
-X GET http://localhost:8080/zstack/v1/hosts/allocators/strategies
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"hostAllocatorStrategies": [
"b39183b36b8e4cb386bd7bb45c7c1997",
"e01d613c77a44b65b6bef75b4ef2accb"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| strategies | List | 策略 | 0.6 |
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
GetHostAllocatorStrategiesAction action = new GetHostAllocatorStrategiesAction();
action.sessionId = "c10fb9fbab4744ecae6686b4193423e8";
GetHostAllocatorStrategiesAction.Result res = action.call();
```

 Python SDK

```
GetHostAllocatorStrategiesAction action = GetHostAllocatorStrategiesAction()
action.sessionId = "caa6b3db2d5b42f79b44566b10763973"
GetHostAllocatorStrategiesAction.Result res = action.call()
```

---

#### 获取云主机虚拟化技术类型(GetHypervisorTypes)



##### API请求

 URLs

```
GET zstack/v1/hosts/hypervisor-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fa53caa553b8446e9bb1c3ccae31cfcd" \
-X GET http://localhost:8080/zstack/v1/hosts/hypervisor-types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



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
GetHypervisorTypesAction action = new GetHypervisorTypesAction();
action.sessionId = "6e32c684aeab461db30fb6631a1ac898";
GetHypervisorTypesAction.Result res = action.call();
```

 Python SDK

```
GetHypervisorTypesAction action = GetHypervisorTypesAction()
action.sessionId = "48f0a488d41d4f84b77c343a24e206e4"
GetHypervisorTypesAction.Result res = action.call()
```

---

#### 获取物理机交集网卡信息(GetCandidateNetworkInterfaces)



##### API请求

 URLs

```
GET zstack/v1/cluster/hosts-network-interfaces
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cluster/hosts-network-interfaces?hostUuids=5712f3960ae23d24988f4e091bf5704f&slaveOnly=true&limit=1000&start=0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuids | List | query | 物理机UUIDs |  | 4.7.0 |
| limit (可选) | Integer | query |  |  | 4.7.0 |
| start (可选) | Integer | query |  |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |
| slaveOnly (可选) | boolean | query | 仅获取slave网卡 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "slaveNames": [
    "eth0",
    "eth1"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slaveUuids | List | 网卡UUIDs | 4.7.0 |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |



##### SDK示例

 Java SDK

```
GetCandidateNetworkInterfacesAction action = new GetCandidateNetworkInterfacesAction();
action.hostUuids = asList("5712f3960ae23d24988f4e091bf5704f");
action.slaveOnly = true;
action.limit = 1000;
action.start = 0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateNetworkInterfacesAction.Result res = action.call();
```

 Python SDK

```
GetCandidateNetworkInterfacesAction action = GetCandidateNetworkInterfacesAction()
action.hostUuids = [5712f3960ae23d24988f4e091bf5704f]
action.slaveOnly = true
action.limit = 1000
action.start = 0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateNetworkInterfacesAction.Result res = action.call()
```

---

#### 获取网口交集子接口信息(GetCandidateInterfaceVlanIds)



##### API请求

 URLs

```
GET zstack/v1/host/network-interface-vlan-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/host/network-interface-vlan-ids?interfaceUuids=d25e83af6ccf3d9ca8baa1702861a0c8&limit=1000&start=0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuids | List | query | 网口UUID |  | 4.7.11 |
| limit (可选) | Integer | query |  |  | 4.7.11 |
| start (可选) | Integer | query |  |  | 4.7.11 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
    "vlanIds": [
        1010,
        1011,
        10,
        11,
        2000,
        1101,
        1110,
        1108,
        1107,
        1109,
        1106,
        1103,
        1102,
        1105,
        1104,
        0
    ],
    "success": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vlanIds | List | vlan接口ID | 4.7.11 |
| success | boolean |  | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
GetCandidateInterfaceVlanIdsAction action = new GetCandidateInterfaceVlanIdsAction();
action.interfaceUuids = asList("d25e83af6ccf3d9ca8baa1702861a0c8");
action.limit = 1000;
action.start = 0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateInterfaceVlanIdsAction.Result res = action.call();
```

 Python SDK

```
GetCandidateInterfaceVlanIdsAction action = GetCandidateInterfaceVlanIdsAction()
action.interfaceUuids = [d25e83af6ccf3d9ca8baa1702861a0c8]
action.limit = 1000
action.start = 0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateInterfaceVlanIdsAction.Result res = action.call()
```

---

#### 获取物理机多路径拓扑(GetHostMultipathTopology)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/multipath/topology
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/multipath/topology?hostUuid=da8052bf25c43b73ad0c9a7546d166ae&diskUuids=360014058e50754920324473a4c85c767&diskUuids=36001405a5d87d462c2c47acb683c4c37
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuid | String | query | 物理机UUID |  | 5.3.0 |
| diskUuids | List | query | 磁盘UUID |  | 5.3.0 |
| systemTags (可选) | List | query | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | query | 用户标签 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "results": [
    {
      "diskUuid": "360014058e50754920324473a4c85c767",
      "devices": [
        {
          "disk": "sda",
          "status": "active",
          "state": "running",
          "target": "iqn.2003-01.org.linux-iscsi.172-20-14-68.x8664:sn.23019b11e653",
          "targetType": "iSCSI"
        },
        {
          "disk": "sdb",
          "status": "enabled",
          "state": "running",
          "target": "iqn.2003-01.org.linux-iscsi.172-20-14-68.x8664:sn.23019b11e653",
          "targetType": "iSCSI"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| results | List | 详情参考[results] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| diskUuid | String | 磁盘UUID | 5.3.0 |
| devices | List | 详情参考[devices] | 5.3.0 |

 #devices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disk | String | 磁盘名称 | 5.3.0 |
| state | String | 磁盘健康状态 | 5.3.0 |
| status | String | 磁盘启用状态 | 5.3.0 |
| target | String | 磁盘所在目标 | 5.3.0 |
| targetType | String | 磁盘所在目标类型 | 5.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.0 |
| description | String | 错误的概要描述 | 5.3.0 |
| details | String | 错误的详细信息 | 5.3.0 |
| elaboration | String | 保留字段，默认为null | 5.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.0 |



##### SDK示例

 Java SDK

```
GetHostMultipathTopologyAction action = new GetHostMultipathTopologyAction();
action.hostUuid = "da8052bf25c43b73ad0c9a7546d166ae";
action.diskUuids = asList("360014058e50754920324473a4c85c767","36001405a5d87d462c2c47acb683c4c37");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostMultipathTopologyAction.Result res = action.call();
```

 Python SDK

```
GetHostMultipathTopologyAction action = GetHostMultipathTopologyAction()
action.hostUuid = "da8052bf25c43b73ad0c9a7546d166ae"
action.diskUuids = [360014058e50754920324473a4c85c767, 36001405a5d87d462c2c47acb683c4c37]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostMultipathTopologyAction.Result res = action.call()
```

---

#### 在Bond网口配置IP(SetIpOnHostNetworkBonding)



##### API请求

 URLs

```
POST zstack/v1/hosts/bondings/{bondingUuid}/ip
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ipAddress": "1.1.1.1",
    "netmask": "255.255.0.0"
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
-X POST -d '{"params":{"ipAddress":"1.1.1.1","netmask":"255.255.0.0"}}' http://localhost:8080/zstack/v1/hosts/bondings/d4671664bb2a38479eddedbe4633121b/ip
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| bondingUuid | String | url | Bond网口UUID |  | 4.7.0 |
| ipAddress (可选) | String | body (包含在**params**结构中) | IP地址 |  | 4.7.0 |
| netmask (可选) | String | body (包含在**params**结构中) | 子网掩码 |  | 4.7.0 |
| isDefaultRoute (可选) | Boolean | body (包含在**params**结构中) | 是否设置默认路由 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "hostUuid": "00949fb236003bbf85cfd151becdc8cf",
    "ipAddresses": [
      "192.168.1.1"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | HostNetworkBondingInventory | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| bondingName | String | Bond名称 | 4.7.0 |
| bondingType | String | Bond应用状态，有noBridge、bridgeSlave | 4.7.0 |
| speed | Long | Bond速率 | 4.7.0 |
| mode | String | Bond模式 | 4.7.0 |
| xmitHashPolicy | String | 哈希策略 | 4.7.0 |
| miiStatus | String | MII状态 | 4.7.0 |
| mac | String | MAC地址 | 4.7.0 |
| ipAddresses | List | IP地址 | 4.7.0 |
| gateway | String | 网关地址 | 4.7.0 |
| callBackIp | String | 回调地址 | 4.7.0 |
| miimon | Long | MII监控间隔 | 4.7.0 |
| type | String | Bond类型 | 4.7.0 |
| allSlavesActive | Boolean |  | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| slaves | List | 详情参考[slaves] | 4.7.0 |

 #slaves

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| bondingUuid | String | Bond UUID | 4.7.0 |
| interfaceName | String | 网卡名称 | 4.7.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 4.7.0 |
| speed | Long | 网卡速率 | 4.7.0 |
| slaveActive | Boolean | Bond链路状态 | 4.7.0 |
| carrierActive | Boolean | 物理链路状态 | 4.7.0 |
| ipAddresses | List | IP地址 | 4.7.0 |
| gateway | String | 网关地址 | 4.7.0 |
| mac | String | MAC地址 | 4.7.0 |
| callBackIp | String | 回调地址 | 4.7.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 4.7.0 |
| offloadStatus | String |  | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
SetIpOnHostNetworkBondingAction action = new SetIpOnHostNetworkBondingAction();
action.bondingUuid = "d4671664bb2a38479eddedbe4633121b";
action.ipAddress = "1.1.1.1";
action.netmask = "255.255.0.0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetIpOnHostNetworkBondingAction.Result res = action.call();
```

 Python SDK

```
SetIpOnHostNetworkBondingAction action = SetIpOnHostNetworkBondingAction()
action.bondingUuid = "d4671664bb2a38479eddedbe4633121b"
action.ipAddress = "1.1.1.1"
action.netmask = "255.255.0.0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetIpOnHostNetworkBondingAction.Result res = action.call()
```

---

#### 在物理网口配置ip(SetIpOnHostNetworkInterface)



##### API请求

 URLs

```
POST zstack/v1/hosts/nics/{interfaceUuid}/ip
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ipAddress": "1.1.1.1",
    "netmask": "255.255.0.0"
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
-X POST -d '{"params":{"ipAddress":"1.1.1.1","netmask":"255.255.0.0"}}' http://localhost:8080/zstack/v1/hosts/nics/d50ade48aec73edc87b0f7c2d6a84bcc/ip
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuid | String | url | 物理网口UUID |  | 4.7.0 |
| ipAddress (可选) | String | body (包含在**params**结构中) | IP地址 |  | 4.7.0 |
| netmask (可选) | String | body (包含在**params**结构中) | 子网掩码 |  | 4.7.0 |
| isDefaultRoute (可选) | Boolean | body (包含在**params**结构中) | 是否设置默认路由 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "hostUuid": "d7fd94874d4235439abe33e041dd0928",
    "ipAddresses": [
      "192.168.1.1"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | HostNetworkInterfaceInventory | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| bondingUuid | String | Bond UUID | 4.7.0 |
| interfaceName | String | 网卡名称 | 4.7.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 4.7.0 |
| speed | Long | 网卡速率 | 4.7.0 |
| slaveActive | Boolean | Bond链路状态 | 4.7.0 |
| carrierActive | Boolean | 物理链路状态 | 4.7.0 |
| ipAddresses | List | IP地址 | 4.7.0 |
| gateway | String | 网关地址 | 4.7.0 |
| mac | String | MAC地址 | 4.7.0 |
| callBackIp | String | 回调地址 | 4.7.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 4.7.0 |
| offloadStatus | String |  | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
SetIpOnHostNetworkInterfaceAction action = new SetIpOnHostNetworkInterfaceAction();
action.interfaceUuid = "d50ade48aec73edc87b0f7c2d6a84bcc";
action.ipAddress = "1.1.1.1";
action.netmask = "255.255.0.0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetIpOnHostNetworkInterfaceAction.Result res = action.call();
```

 Python SDK

```
SetIpOnHostNetworkInterfaceAction action = SetIpOnHostNetworkInterfaceAction()
action.interfaceUuid = "d50ade48aec73edc87b0f7c2d6a84bcc"
action.ipAddress = "1.1.1.1"
action.netmask = "255.255.0.0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetIpOnHostNetworkInterfaceAction.Result res = action.call()
```

---

#### 更新Bond网口(UpdateBonding)



##### API请求

 URLs

```
PUT zstack/v1/hosts/bondings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBonding": {
    "mode": "802.3ad",
    "xmitHashPolicy": "layer2+3"
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
-X PUT -d '{"updateBonding":{"mode":"802.3ad","xmitHashPolicy":"layer2+3"}}' http://localhost:8080/zstack/v1/hosts/bondings/1facb0c5125037a5bc4167cd2ad30d1f/actions
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
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| slaveUuids (可选) | List | body (包含在**updateBonding**结构中) | slave网卡Uuids列表 |  | 5.0.0 |
| slaveNames (可选) | List | body (包含在**updateBonding**结构中) | slave网卡名称列表 |  | 5.0.0 |
| type (可选) | String | body (包含在**updateBonding**结构中) | Bond类型 | LinuxBonding OvsBonding | 4.7.0 |
| mode (可选) | String | body (包含在**updateBonding**结构中) | 工作方式 | 802.3ad active-backup | 4.7.0 |
| xmitHashPolicy (可选) | String | body (包含在**updateBonding**结构中) | 哈希算法策略 | layer2 layer2+3 layer3+4 | 4.7.0 |
| description (可选) | String | body (包含在**updateBonding**结构中) | 资源的详细描述 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



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
UpdateBondingAction action = new UpdateBondingAction();
action.uuid = "1facb0c5125037a5bc4167cd2ad30d1f";
action.mode = "802.3ad";
action.xmitHashPolicy = "layer2+3";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBondingAction.Result res = action.call();
```

 Python SDK

```
UpdateBondingAction action = UpdateBondingAction()
action.uuid = "1facb0c5125037a5bc4167cd2ad30d1f"
action.mode = "802.3ad"
action.xmitHashPolicy = "layer2+3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBondingAction.Result res = action.call()
```

---

#### 绑定slave到Bond网口(AttachNicToBonding)



##### API请求

 URLs

```
PUT zstack/v1/hosts/bondings/{uuid}/attach
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "attachNicToBonding": {
    "slaveUuids": [
      "9cc96c09880135db95e1b7d677607d6e"
    ],
    "type": "LinuxBonding"
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
-X PUT -d '{"attachNicToBonding":{"slaveUuids":["9cc96c09880135db95e1b7d677607d6e"],"type":"LinuxBonding"}}' \
http://localhost:8080/zstack/v1/hosts/bondings/e1fa374a84f231c681df08101f0ddd99/attach
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| slaveUuids | List | body (包含在**attachNicToBonding**结构中) | slave网卡Uuids |  | 5.0.0 |
| type (可选) | String | body (包含在**attachNicToBonding**结构中) | Bond类型 | LinuxBonding OvsBonding | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



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
AttachNicToBondingAction action = new AttachNicToBondingAction();
action.uuid = "e1fa374a84f231c681df08101f0ddd99";
action.slaveUuids = asList("9cc96c09880135db95e1b7d677607d6e");
action.type = "LinuxBonding";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachNicToBondingAction.Result res = action.call();
```

 Python SDK

```
AttachNicToBondingAction action = AttachNicToBondingAction()
action.uuid = "e1fa374a84f231c681df08101f0ddd99"
action.slaveUuids = [9cc96c09880135db95e1b7d677607d6e]
action.type = "LinuxBonding"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachNicToBondingAction.Result res = action.call()
```

---

#### 从Bond网口解绑slave(DetachNicFromBonding)



##### API请求

 URLs

```
PUT zstack/v1/hosts/bondings/{uuid}/detach
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "detachNicFromBonding": {
    "slaveUuids": [
      "23ac510ff6a830ac8a52553e86e00b07"
    ],
    "type": "LinuxBonding"
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
-X PUT -d '{"detachNicFromBonding":{"slaveUuids":["23ac510ff6a830ac8a52553e86e00b07"],"type":"LinuxBonding"}}' \
http://localhost:8080/zstack/v1/hosts/bondings/bee329acc0573a16bc30fafada5a96f6/detach
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| slaveUuids | List | body (包含在**detachNicFromBonding**结构中) | slave网卡Uuids |  | 5.0.0 |
| type (可选) | String | body (包含在**detachNicFromBonding**结构中) | Bond类型 | LinuxBonding OvsBonding | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



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
DetachNicFromBondingAction action = new DetachNicFromBondingAction();
action.uuid = "bee329acc0573a16bc30fafada5a96f6";
action.slaveUuids = asList("23ac510ff6a830ac8a52553e86e00b07");
action.type = "LinuxBonding";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachNicFromBondingAction.Result res = action.call();
```

 Python SDK

```
DetachNicFromBondingAction action = DetachNicFromBondingAction()
action.uuid = "bee329acc0573a16bc30fafada5a96f6"
action.slaveUuids = [23ac510ff6a830ac8a52553e86e00b07]
action.type = "LinuxBonding"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachNicFromBondingAction.Result res = action.call()
```

---

#### 更新物理网口信息(UpdateHostNetworkInterface)



##### API请求

 URLs

```
POST zstack/v1/hosts/nics/{interfaceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "description": "description"
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
-X POST -d '{"params":{"description":"description"}}' http://localhost:8080/zstack/v1/hosts/nics/b6731de9831a3db0921965c0fd0705a4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuid | String | url | 物理网口UUID |  | 4.7.0 |
| description | String | body (包含在**params**结构中) | 资源的详细描述 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "description": "network"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | HostNetworkInterfaceInventory | 详情参考[inventroy] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| bondingUuid | String | Bond UUID | 4.7.0 |
| interfaceName | String | 网卡名称 | 4.7.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 4.7.0 |
| speed | Long | 网卡速率 | 4.7.0 |
| slaveActive | Boolean | Bond链路状态 | 4.7.0 |
| carrierActive | Boolean | 物理链路状态 | 4.7.0 |
| ipAddresses | List | IP地址 | 4.7.0 |
| gateway | String | 网关地址 | 4.7.0 |
| mac | String | MAC地址 | 4.7.0 |
| callBackIp | String | 回调地址 | 4.7.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 4.7.0 |
| offloadStatus | String |  | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
UpdateHostNetworkInterfaceAction action = new UpdateHostNetworkInterfaceAction();
action.interfaceUuid = "b6731de9831a3db0921965c0fd0705a4";
action.description = "description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateHostNetworkInterfaceAction.Result res = action.call();
```

 Python SDK

```
UpdateHostNetworkInterfaceAction action = UpdateHostNetworkInterfaceAction()
action.interfaceUuid = "b6731de9831a3db0921965c0fd0705a4"
action.description = "description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateHostNetworkInterfaceAction.Result res = action.call()
```

---

#### 更新KVM主机信息(UpdateKVMHost)



##### API请求



URLs

```
PUT zstack/v1/hosts/kvm/{uuid}/actions
```



Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateKVMHost": {
"username": "userName",
"password": "password",
"sshPort": 22.0
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
-X PUT -d '{"updateKVMHost":{"username":"userName","password":"password","sshPort":22.0}}' \
http://localhost:8080/zstack/v1/hosts/kvm/477399a02a343bf2971d86c531053f9e/actions
```



参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| username (可选) | String | body(包含在**updateKVMHost**结构中) | 用户名 |  | 0.6 |
| password (可选) | String | body(包含在**updateKVMHost**结构中) | 密码 |  | 0.6 |
| sshPort (可选) | Integer | body(包含在**updateKVMHost**结构中) | ssh端口号 |  | 0.6 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateKVMHost**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateKVMHost**结构中) | 资源的详细描述 |  | 0.6 |
| managementIp (可选) | String | body(包含在**updateKVMHost**结构中) | 管理节点IP |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"zoneUuid": "d31e6ae8ef1e4d63be02c3be94093e90",
"name": "example",
"uuid": "3bfeb74997084a7fa53b7afaf709b6d1",
"clusterUuid": "cec3beee49bb4697905c556e462b3dbe",
"description": "example",
"managementIp": "192.168.0.1",
"hypervisorType": "KVM",
"state": "Enabled",
"status": "Connected",
"totalCpuCapacity": 4.0,
"availableCpuCapacity": 2.0,
"totalMemoryCapacity": 4.0,
"availableMemoryCapacity": 4.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | HostInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateKVMHostAction action = new UpdateKVMHostAction();
action.username = "userName";
action.password = "password";
action.sshPort = 22.0;
action.uuid = "ca5abd5b6d8c491e87c129dd8458e85a";
action.sessionId = "86935baec2b04df38590f99f5116f045";
UpdateKVMHostAction.Result res = action.call();
```

 Python SDK

```
UpdateKVMHostAction action = UpdateKVMHostAction()
action.username = "userName"
action.password = "password"
action.sshPort = 22.0
action.uuid = "dfe24a4ad70947bbac06b06acbf47297"
action.sessionId = "043064e67c5c414c904df55e29efd658"
UpdateKVMHostAction.Result res = action.call()
```

---

#### 添加KVM主机(AddKVMHost)



##### API请求

 URLs

```
POST zstack/v1/hosts/kvm
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"username": "userName",
"password": "password",
"sshPort": 22,
"name": "newHost",
"managementIp": "127.0.0.1",
"clusterUuid": "449c63f16f9144528d99315f903be36e"
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
-X POST -d '{"params":{"username":"userName","password":"password","sshPort":"22","name":"newHost","managementIp":"127.0.0.1","clusterUuid":"9adf394ca46432afb1218d220bf2925e"}}' \
http://localhost:8080/zstack/v1/hosts/kvm
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| username | String | body(包含在params结构中) | ssh用户名 |  | 0.6 |
| password | String | body(包含在params结构中) | ssh密码 |  | 0.6 |
| sshPort (可选) | int | body(包含在params结构中) | ssh端口号 |  | 0.6 |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| managementIp | String | body(包含在params结构中) | 物理机管理节点IP |  | 0.6 |
| clusterUuid | String | body(包含在params结构中) | 集群UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`pageTableExtensionDisabled`
  - 例如：`pageTableExtensionDisabled`
- 例如：`pageTableExtensionDisabled`


> **注意:** 说明:



##### API返回

 返回示例

```
{
"inventory": {
"zoneUuid": "d4160c59319c4642832e666514364a79",
"name": "example",
"uuid": "479e88bab7a647e3b066a724c8bb3b82",
"clusterUuid": "42ade59801804602b9986b42fd103d1c",
"description": "example",
"managementIp": "192.168.0.1",
"hypervisorType": "KVM",
"state": "Enabled",
"status": "Connected",
"totalCpuCapacity": 4.0,
"availableCpuCapacity": 2.0,
"totalMemoryCapacity": 4.0,
"availableMemoryCapacity": 4.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | HostInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AddKVMHostAction action = new AddKVMHostAction();
action.username = "userName";
action.password = "password";
action.sshPort = 22;
action.name = "newHost";
action.managementIp = "127.0.0.1";
action.clusterUuid = "03de4c2f2b5445b7a3ab5ba44930c4e8";
action.sessionId = "5354944d50634bed8088567b5d551e6f";
AddKVMHostAction.Result res = action.call();
```

 Python SDK

```
AddKVMHostAction action = AddKVMHostAction()
action.username = "userName"
action.password = "password"
action.sshPort = 22
action.name = "newHost"
action.managementIp = "127.0.0.1"
action.clusterUuid = "9fa355cc5434466cba6fb478b8559dad"
action.sessionId = "d3770b6e43874065a1ff3cf127857e32"
AddKVMHostAction.Result res = action.call()
```

---

#### KVM运行Shell命令(KvmRunShell)



##### API请求

URLs

```
PUT zstack/v1/hosts/kvm/actions
```

Headers

```
Authorization: OAuth the-session-uuid
```

Body

```
{
"kvmRunShell": {
"hostUuids": [
"d987c37b69e14c0fbc02e32f0689e81e",
"6d47a55252504d49a5c8f344190a578c"
    ],
"script": "ls"
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
-X PUT -d '{"kvmRunShell":{"hostUuids":["7b474bb39b14397b97bc7d8d0bdd8854","580f2a7f2ca23af6aa1c93e88d4a788e"],"script":"ls"}}' \
http://localhost:8080/zstack/v1/hosts/kvm/actions
```

参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuids | Set | body(包含在**kvmRunShell**结构中) | 目标机器UUID |  | 0.6 |
| script | String | body(包含在**kvmRunShell**结构中) | 脚本 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



返回示例

```
{
"inventory": {
"8903b4b7fa694c149d932bc53ee716df": {
"returnCode": 100.0,
"stdout": "hello",
"errorCode": {}
    }
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | Map | 详情参考[inventory] | 0.6 |

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
| returnCode | int |  | 0.6 |
| stdout | String |  | 0.6 |
| stderr | String |  | 0.6 |
| errorCode | ErrorCode | 详情参考[errorCode] | 0.6 |

 #errorCode

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
KvmRunShellAction action = new KvmRunShellAction();
action.hostUuids = asList("f3349fddda414ee0b64c5f32635ff76e","624ca9859a044fbe909f2aeef4e95b3e");
action.script = "ls";
action.sessionId = "c5e92dd1ca554dd781a50961fd8121ac";
KvmRunShellAction.Result res = action.call();
```

 Python SDK

```
KvmRunShellAction action = KvmRunShellAction()
action.hostUuids = [b0e1155a97644eb1a756dd8d3de8eb3b, 04a502bd377e4763850d7a94ba4ffb43]
action.script = "ls"
action.sessionId = "72425e0cb8d8425f96114b5760d9a495"
KvmRunShellAction.Result res = action.call()
```

---

#### 通过文件导入方式添加物理机(AddKVMHostFromConfigFile)



##### API请求

 URLs

```
POST zstack/v1/hosts/kvm/from-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "hostInfo": "FILE CONTENT ENCODE BY BASE64"
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
-X POST -d '{"params":{"hostInfo":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/hosts/kvm/from-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostInfo | String | body(包含在**params**结构中) | 经过base64编码的物理机信息 |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "results": [
    {
      "ip": "127.0.0.1",
      "success": true
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| results | List | 详情参考[results] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ip | String | 物理机IP | 3.1.0 |
| success | boolean |  | 3.1.0 |
| error | ErrorCode | 详情参考[error] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |



##### SDK示例

 Java SDK

```
AddKVMHostFromConfigFileAction action = new AddKVMHostFromConfigFileAction();
action.hostInfo = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddKVMHostFromConfigFileAction.Result res = action.call();
```

 Python SDK

```
AddKVMHostFromConfigFileAction action = AddKVMHostFromConfigFileAction()
action.hostInfo = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddKVMHostFromConfigFileAction.Result res = action.call()
```

---

#### 添加物理机文件语法检查(CheckKVMHostConfigFile)



##### API请求

 URLs

```
POST /v1/hosts/kvm/from-file/check
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "hostInfo": "FILE CONTENT ENCODE BY BASE64"
  },
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
-X POST -d '{"params":{"hostInfo":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/hosts/kvm/from-file/check
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostInfo | String | body(包含在**params**结构中) | 经过base64编码的物理机信息 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



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
CheckKVMHostConfigFileAction action = new CheckKVMHostConfigFileAction();
action.hostInfo = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckKVMHostConfigFileAction.Result res = action.call();
```

 Python SDK

```
CheckKVMHostConfigFileAction action = CheckKVMHostConfigFileAction()
action.hostInfo = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckKVMHostConfigFileAction.Result res = action.call()
```

---

#### 标记物理网口(非聚合口)网络类型(SetServiceTypeOnHostNetworkInterface)



##### API请求

 URLs

```
POST zstack/v1/hosts/nics/service-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "interfaceUuids": [
      "2894f52c7d84366c85dd115b3bc193ca"
    ]
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
-X POST -d '{"params":{"interfaceUuids":["2894f52c7d84366c85dd115b3bc193ca"]}}' \
http://localhost:8080/zstack/v1/hosts/nics/service-types
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuids | List | body(包含在**params**结构中) | 物理网口Uuids |  | 4.7.11 |
| vlanIds (可选) | List | body(包含在**params**结构中) | vlan接口Ids |  | 4.7.11 |
| serviceTypes (可选) | List | body(包含在**params**结构中) | 网络服务类型 | ManagementNetwork TenantNetwork StorageNetwork BackupNetwork MigrationNetwork | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "id": 0,
      "interfaceUuid": "8534263f624a3962b7603c99a3e44eb2",
      "vlanId": 10,
      "serviceType": "BackupNetwork"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| inventory | List | 详情参考[inventory] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| interfaceUuid | String | 物理网口Uuid | 4.7.11 |
| vlanId | Integer | vlan子接口id | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.11 |
| serviceType | HostNetworkInterfaceServiceType | 详情参考[serviceType] | 4.7.11 |

 #serviceType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ManagementNetwork | HostNetworkInterfaceServiceType | 管理网络 | 4.7.11 |
| TenantNetwork | HostNetworkInterfaceServiceType | 业务网络 | 4.7.11 |
| StorageNetwork | HostNetworkInterfaceServiceType | 存储网络 | 4.7.11 |
| BackupNetwork | HostNetworkInterfaceServiceType | 备份网络 | 4.7.11 |
| MigrationNetwork | HostNetworkInterfaceServiceType | 迁移网络 | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
SetServiceTypeOnHostNetworkInterfaceAction action = new SetServiceTypeOnHostNetworkInterfaceAction();
action.interfaceUuids = asList("2894f52c7d84366c85dd115b3bc193ca");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetServiceTypeOnHostNetworkInterfaceAction.Result res = action.call();
```

 Python SDK

```
SetServiceTypeOnHostNetworkInterfaceAction action = SetServiceTypeOnHostNetworkInterfaceAction()
action.interfaceUuids = [2894f52c7d84366c85dd115b3bc193ca]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetServiceTypeOnHostNetworkInterfaceAction.Result res = action.call()
```

---

#### 标记聚合网口网络类型(SetServiceTypeOnHostNetworkBonding)



##### API请求

 URLs

```
POST zstack/v1/hosts/bondings/service-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "bondingUuids": [
      "e96881d20cde3a9ab337cdf0ab4e8b08"
    ],
    "serviceTypes": [
      "TenantNetwork"
    ]
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
-X POST -d '{"params":{"bondingUuids":["e96881d20cde3a9ab337cdf0ab4e8b08"],"serviceTypes":["TenantNetwork"]}}' \
http://localhost:8080/zstack/v1/hosts/bondings/service-types
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| bondingUuids | List | body(包含在`params`结构中) | bond网口Uuids |  | 4.7.11 |
| vlanIds (可选) | List | body(包含在`params`结构中) | vlan接口Ids |  | 4.7.11 |
| serviceTypes (可选) | List | body(包含在`params`结构中) | 网络服务类型 | ManagementNetwork TenantNetwork StorageNetwork BackupNetwork MigrationNetwork | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "id": 0,
      "bondingUuid": "d1fd53a607c936859414f6222175c820",
      "vlanId": 10,
      "serviceType": "BackupNetwork"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| inventory | List | 详情参考[inventory] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| bondingUuid | String | bond网口Uuid | 4.7.11 |
| vlanId | Integer | vlan子接口id | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.11 |
| serviceType | HostNetworkInterfaceServiceType | 详情参考[serviceType] | 4.7.11 |

 #serviceType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ManagementNetwork | HostNetworkInterfaceServiceType | 管理网络 | 4.7.11 |
| TenantNetwork | HostNetworkInterfaceServiceType | 业务网络 | 4.7.11 |
| StorageNetwork | HostNetworkInterfaceServiceType | 存储网络 | 4.7.11 |
| BackupNetwork | HostNetworkInterfaceServiceType | 备份网络 | 4.7.11 |
| MigrationNetwork | HostNetworkInterfaceServiceType | 迁移网络 | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
SetServiceTypeOnHostNetworkBondingAction action = new SetServiceTypeOnHostNetworkBondingAction();
action.bondingUuids = asList("e96881d20cde3a9ab337cdf0ab4e8b08");
action.serviceTypes = asList("TenantNetwork");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetServiceTypeOnHostNetworkBondingAction.Result res = action.call();
```

 Python SDK

```
SetServiceTypeOnHostNetworkBondingAction action = SetServiceTypeOnHostNetworkBondingAction()
action.bondingUuids = [e96881d20cde3a9ab337cdf0ab4e8b08]
action.serviceTypes = [TenantNetwork]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetServiceTypeOnHostNetworkBondingAction.Result res = action.call()
```

---

#### 获取物理网口网络类型信息(GetInterfaceServiceTypeStatistic)



##### API请求

 URLs

```
GET zstack/v1/hosts/hosts-network-interfaces/service-type-statistic
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/hosts-network-interfaces/service-type-statistic? \
interfaceUuid=d8797841479d3951bcb698164b56bd9e&interfaceType=All&sortBy=CreateDate&sortDirection=asc&start=0&limit=20&replyWithCount=false
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
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuid (可选) | String | query | 物理机网卡UUID |  | 4.7.11 |
| vlanId (可选) | Integer | query | vlan接口ID |  | 4.7.11 |
| interfaceType (可选) | String | query | 网卡类型 | All Interface Bonding | 4.7.11 |
| serviceType (可选) | List | query | 统计网络类型 | All ManagementNetwork TenantNetwork StorageNetwork MigrationNetwork BackupNetwork | 4.7.11 |
| zoneUuid (可选) | String | query | 区域UUID |  | 4.7.11 |
| clusterUuid (可选) | String | query | 集群UUID |  | 4.7.11 |
| hostUuid (可选) | String | query | 物理机UUID |  | 4.7.11 |
| sortBy (可选) | String | query | 排序方式 | InterfaceName VlanId HostIp HostName ClusterName CreateDate | 4.7.11 |
| sortDirection (可选) | String | query | 排序方向 | asc desc | 4.7.11 |
| start (可选) | Integer | query | 统计结果起始位置 |  | 4.7.11 |
| limit (可选) | Integer | query | 统计结果数量 |  | 4.7.11 |
| replyWithCount (可选) | boolean | query | 同时返回统计结果总数 |  | 4.7.11 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "serviceTypeStatistics": [
    {
      "interfaceUuid": "474f9d7d7a1d3b46b8f17363dca7ebef",
      "serviceTypes": [
        "ManagementNetwork"
      ]
    }
  ],
  "total": 1
}}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | Long | 统计结果总数 | 4.7.11 |
| success | boolean | 成功 | 4.7.11 |
| serviceTypeStatistics | List | 详情参考[serviceTypeStatistics] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #serviceTypeStatistics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| interfaceUuid | String | 网卡UUID | 4.7.11 |
| interfaceName | String | 网卡名 | 4.7.11 |
| vlanId | Integer | vlan接口ID | 4.7.11 |
| serviceTypes | List | 网络类型集 | 4.7.11 |
| hostUuid | String | 物理机UUID | 4.7.11 |
| hostName | String | 物理机名称 | 4.7.11 |
| hostIp | String | 物理机IP | 4.7.11 |
| clusterUuid | String | 集群UUID | 4.7.11 |
| clusterName | String | 集群名称 | 4.7.11 |
| zoneUuid | String | 区域UUID | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
GetInterfaceServiceTypeStatisticAction action = new GetInterfaceServiceTypeStatisticAction();
action.interfaceUuid = "d8797841479d3951bcb698164b56bd9e";
action.interfaceType = "All";
action.sortBy = "CreateDate";
action.sortDirection = "asc";
action.start = 0;
action.limit = 20;
action.replyWithCount = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetInterfaceServiceTypeStatisticAction.Result res = action.call();
```

 Python SDK

```
GetInterfaceServiceTypeStatisticAction action = GetInterfaceServiceTypeStatisticAction()
action.interfaceUuid = "d8797841479d3951bcb698164b56bd9e"
action.interfaceType = "All"
action.sortBy = "CreateDate"
action.sortDirection = "asc"
action.start = 0
action.limit = 20
action.replyWithCount = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetInterfaceServiceTypeStatisticAction.Result res = action.call()
```

---

#### 获取物理机物理网络信息(GetHostNetworkFacts)



##### API请求

 URLs

```
GET zstack/v1/hosts/network-facts/{hostUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/network-facts/9397de8c860231c08b87031e226c691b
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuid | String | url | 物理机UUID |  | 3.5.0 |
| systemTags (可选) | List | query |  |  | 3.5.0 |
| userTags (可选) | List | query |  |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "bondings": [
    {
      "uuid": "c1ff34db684e3b8785572902ef99efea",
      "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
      "bondingName": "bond0",
      "mode": "active-backup 1",
      "xmitHashPolicy": "layer2 0",
      "miiStatus": "up",
      "mac": "ac:1f:6b:93:6c:8c",
      "ipAddresses": [
        "172.20.0.116/16"
      ],
      "miimon": 100.0,
      "allSlavesActive": true,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "slaves": [
        {
          "uuid": "08643629c29d34a0a4a2d858b49a41a4",
          "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
          "bondingUuid": "c1ff34db684e3b8785572902ef99efea",
          "interfaceName": "eno1",
          "interfaceType": "bondingSlave",
          "speed": 1000.0,
          "slaveActive": true,
          "carrierActive": true,
          "mac": "ac:1f:6b:93:6c:8c",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        },
        {
          "uuid": "14ca7ad13e573cfdb6f929b12b750553",
          "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
          "bondingUuid": "c1ff34db684e3b8785572902ef99efea",
          "interfaceName": "eno2",
          "interfaceType": "bondingSlave",
          "speed": 1000.0,
          "slaveActive": false,
          "carrierActive": false,
          "mac": "ac:1f:6b:93:6c:8c",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ]
    }
  ],
  "nics": [
    {
      "uuid": "08643629c29d34a0a4a2d858b49a41a4",
      "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
      "bondingUuid": "c1ff34db684e3b8785572902ef99efea",
      "interfaceName": "eno1",
      "interfaceType": "bondingSlave",
      "speed": 1000.0,
      "slaveActive": true,
      "carrierActive": true,
      "mac": "ac:1f:6b:93:6c:8c",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "14ca7ad13e573cfdb6f929b12b750553",
      "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
      "bondingUuid": "c1ff34db684e3b8785572902ef99efea",
      "interfaceName": "eno2",
      "interfaceType": "bondingSlave",
      "speed": 1000.0,
      "slaveActive": false,
      "carrierActive": false,
      "mac": "ac:1f:6b:93:6c:8c",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "8d871eb89020363ebc764ed41be4c213",
      "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
      "interfaceName": "ens2f0",
      "interfaceType": "noMaster",
      "speed": 1000.0,
      "slaveActive": true,
      "carrierActive": true,
      "ipAddresses": [
        "169.254.0.115/24"
      ],
      "mac": "98:03:9b:00:ea:f2",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "d39d0eead2d53e47a8f7b3aca375c1d3",
      "hostUuid": "e336fa8ef9283fe4a4d746957284379a",
      "interfaceName": "ens2f1",
      "interfaceType": "bridgeSlave",
      "speed": 1000.0,
      "slaveActive": false,
      "carrierActive": false,
      "mac": "98:03:9b:00:ea:f3",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| bondings | List | 详情参考[bondings] | 3.5.0 |
| nics | List | 详情参考[nics] | 3.5.0 |
| error | ErrorCode | 详情参考[error] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #bondings

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| bondingName | String | Bond名称 | 3.5.0 |
| mode | String | Bond模式 | 3.5.0 |
| xmitHashPolicy | String | 哈希策略 | 3.5.0 |
| miiStatus | String | mii状态 | 3.5.0 |
| mac | String | MAC地址 | 3.5.0 |
| ipAddresses | List | IP地址 | 3.5.0 |
| miimon | Long | mii监控间隔 | 3.5.0 |
| allSlavesActive | Boolean |  | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| slaves | List | 详情参考[slaves] | 3.5.0 |

 #slaves

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| bondingUuid | String | Bond UUID | 3.5.0 |
| interfaceName | String | 网卡名称 | 3.5.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 3.5.0 |
| speed | Long | 网卡速率 | 3.5.0 |
| slaveActive | Boolean | Bond链路状态 | 3.5.0 |
| carrierActive | Boolean | 物理链路状态 | 3.5.0 |
| ipAddresses | List | IP地址 | 3.5.0 |
| mac | String | MAC地址 | 3.5.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |

 #nics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| bondingUuid | String | Bond UUID | 3.5.0 |
| interfaceName | String | 网卡名称 | 3.5.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 3.5.0 |
| speed | Long | 网卡速率 | 3.5.0 |
| slaveActive | Boolean | Bond链路状态 | 3.5.0 |
| carrierActive | Boolean | 物理链路状态 | 3.5.0 |
| ipAddresses | List | IP地址 | 3.5.0 |
| mac | String | MAC地址 | 3.5.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |



##### SDK示例

 Java SDK

```
GetHostNetworkFactsAction action = new GetHostNetworkFactsAction();
action.hostUuid = "9397de8c860231c08b87031e226c691b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostNetworkFactsAction.Result res = action.call();
```

 Python SDK

```
GetHostNetworkFactsAction action = GetHostNetworkFactsAction()
action.hostUuid = "9397de8c860231c08b87031e226c691b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostNetworkFactsAction.Result res = action.call()
```

---

#### 查询物理机Bond信息(QueryHostNetworkBonding)



##### API请求

 URLs

```
GET zstack/v1/hosts/bondings
```


```
GET zstack/v1/hosts/bondings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/bondings
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/bondings/4557b1f12ef7393c926b8b7223ddebac
```



可查询字段

运行CLI命令行工具，输入QueryHostNetworkBonding并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "2e2226e18e853f20a5791684a1b644c8",
      "hostUuid": "903696c585a639bb8049713b98d93437",
      "bondingName": "bond0",
      "mode": "active-backup 1",
      "xmitHashPolicy": "layer2 0",
      "miiStatus": "up",
      "mac": "ac:1f:6b:93:6c:8c",
      "ipAddresses": [
        "172.20.0.116/16"
      ],
      "miimon": 100.0,
      "allSlavesActive": true,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "slaves": [
        {
          "uuid": "17a40aa475cf322494ea82e09066892e",
          "hostUuid": "903696c585a639bb8049713b98d93437",
          "bondingUuid": "2e2226e18e853f20a5791684a1b644c8",
          "interfaceName": "eno1",
          "interfaceType": "bondingSlave",
          "speed": 1000.0,
          "slaveActive": true,
          "carrierActive": true,
          "mac": "ac:1f:6b:93:6c:8c",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        },
        {
          "uuid": "c3716c87b9173cbb8315e7d7f3645bc4",
          "hostUuid": "903696c585a639bb8049713b98d93437",
          "bondingUuid": "2e2226e18e853f20a5791684a1b644c8",
          "interfaceName": "eno2",
          "interfaceType": "bondingSlave",
          "speed": 1000.0,
          "slaveActive": false,
          "carrierActive": false,
          "mac": "ac:1f:6b:93:6c:8c",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventories | List | 详情参考[inventories] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| hostUuid | String | 物理机UUID | 3.9.0 |
| bondingName | String | Bond名称 | 3.9.0 |
| mode | String | Bond模式 | 3.9.0 |
| xmitHashPolicy | String | 哈希策略 | 3.9.0 |
| miiStatus | String | mii状态 | 3.9.0 |
| mac | String | MAC地址 | 3.9.0 |
| ipAddresses | List | IP地址 | 3.9.0 |
| miimon | Long | mii监控间隔 | 3.9.0 |
| allSlavesActive | Boolean |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| slaves | List | 详情参考[slaves] | 3.9.0 |

 #slaves

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| hostUuid | String | 物理机UUID | 3.9.0 |
| bondingUuid | String | Bond UUID | 3.9.0 |
| interfaceName | String | 网卡名称 | 3.9.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 3.9.0 |
| speed | Long | 网卡速率 | 3.9.0 |
| slaveActive | Boolean | Bond链路状态 | 3.9.0 |
| carrierActive | Boolean | 物理链路状态 | 3.9.0 |
| ipAddresses | List | IP地址 | 3.9.0 |
| mac | String | MAC地址 | 3.9.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
QueryHostNetworkBondingAction action = new QueryHostNetworkBondingAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHostNetworkBondingAction.Result res = action.call();
```

 Python SDK

```
QueryHostNetworkBondingAction action = QueryHostNetworkBondingAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHostNetworkBondingAction.Result res = action.call()
```

---

#### 查询物理机网卡信息(QueryHostNetworkInterface)



##### API请求

 URLs

```
GET zstack/v1/hosts/nics
```


```
GET zstack/v1/hosts/nics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/nics
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/nics/df5b59fdb3c9388297fd89c5fa6dea65
```



可查询字段

运行CLI命令行工具，输入QueryHostNetworkInterface并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "310ca8ce7010363ca7ac83d37373238f",
      "hostUuid": "7f8d05522f01397e97f60d84f5ffa2b9",
      "bondingUuid": "6fbe88605eed35ba95399687585be3d1",
      "interfaceName": "eno1",
      "interfaceType": "bondingSlave",
      "speed": 1000.0,
      "slaveActive": true,
      "carrierActive": true,
      "mac": "98:03:9b:00:ea:f1",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "3213802883d13c72b54c084233c4de2a",
      "hostUuid": "7f8d05522f01397e97f60d84f5ffa2b9",
      "bondingUuid": "6fbe88605eed35ba95399687585be3d1",
      "interfaceName": "eno2",
      "interfaceType": "bondingSlave",
      "speed": 1000.0,
      "slaveActive": false,
      "carrierActive": false,
      "mac": "98:03:9b:00:ea:f1",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "3015b6b0c74d316699ebe09dc60e1001",
      "hostUuid": "7f8d05522f01397e97f60d84f5ffa2b9",
      "interfaceName": "ens2f0",
      "interfaceType": "noMaster",
      "speed": 1000.0,
      "slaveActive": true,
      "carrierActive": true,
      "ipAddresses": [
        "169.254.0.115/24"
      ],
      "mac": "98:03:9b:00:ea:f2",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "e3b513e177a1313a93b32b290643f849",
      "hostUuid": "7f8d05522f01397e97f60d84f5ffa2b9",
      "interfaceName": "ens2f1",
      "interfaceType": "bridgeSlave",
      "speed": 1000.0,
      "slaveActive": false,
      "carrierActive": false,
      "mac": "98:03:9b:00:ea:f3",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventories | List | 详情参考[inventories] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| hostUuid | String | 物理机UUID | 3.9.0 |
| bondingUuid | String | Bond UUID | 3.9.0 |
| interfaceName | String | 网卡名称 | 3.9.0 |
| interfaceType | String | 网卡应用状态，有nomaster、bridgeSlave、bondSlave | 3.9.0 |
| speed | Long | 网卡速率 | 3.9.0 |
| slaveActive | Boolean | Bond链路状态 | 3.9.0 |
| carrierActive | Boolean | 物理链路状态 | 3.9.0 |
| ipAddresses | List | IP地址 | 3.9.0 |
| mac | String | MAC地址 | 3.9.0 |
| pciDeviceAddress | String | 网卡PCI地址 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
QueryHostNetworkInterfaceAction action = new QueryHostNetworkInterfaceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHostNetworkInterfaceAction.Result res = action.call();
```

 Python SDK

```
QueryHostNetworkInterfaceAction action = QueryHostNetworkInterfaceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHostNetworkInterfaceAction.Result res = action.call()
```

---

#### 查询HBA卡信息(QueryHBADevice)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/hba
```


```
GET zstack/v1/storage-devices/hba/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/hba?q=uuid=db041d8a238732be82740eaf5a43d252
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/hba/1698716626f33b6fb1637a76590e1fe6
```



可查询字段

运行zstack-cli命令行工具，输入QueryFcHbaDevice并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "portName": "10000090fab38778",
      "portState": "Online",
      "speed": "8 Gbit",
      "supportedSpeeds": "16 Gbit",
      "symbolicName": "QLE2692 FW:v9.07.00 DVR:v10.02.00.106-k",
      "supportedClasses": "Class 3",
      "uuid": "511a5ac34b423ac99a33d5c863531d2e",
      "name": "host",
      "hostUuid": "38e3ebc0b54e3cf8a99db5f7c80ee59e",
      "hbaType": "FC"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventories | List | 详情参考[inventories] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.0 |
| name | String | 资源名称 | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| portName | String | 端口名字 | 5.3.0 |
| portState | String | 端口状态 | 5.3.0 |
| hbaType | String | 类型 | 5.3.0 |
| speed | String | 速度 | 5.3.0 |
| supportedSpeeds | String | 支持的速度 | 5.3.0 |
| symbolicName | String | 符号名称 | 5.3.0 |
| supportedClasses | String | 服务类别 | 5.3.0 |
| createDate | String | 创建时间 | 5.3.0 |
| lastOpDate | String | 最后一次修改时间 | 5.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.0 |
| description | String | 错误的概要描述 | 5.3.0 |
| details | String | 错误的详细信息 | 5.3.0 |
| elaboration | String | 保留字段，默认为null | 5.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.0 |



##### SDK示例

 Java SDK

```
QueryFcHbaDeviceAction action = new QueryFcHbaDeviceAction();
action.conditions = asList("uuid=744cbe74c6f8365dafdbcf9568cfafa0");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFcHbaDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryFcHbaDeviceAction action = QueryFcHbaDeviceAction()
action.conditions = ["uuid=e8b3f35dce0c38da8cec8a56347899e9"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFcHbaDeviceAction.Result res = action.call()
```

---

#### 查询物理机的NUMA拓扑信息(GetHostNUMATopology)



##### API请求

 URLs

```
POST zstack/v1/hosts/{uuid}/numa
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/21529457e42c30f0a9b2a137915a0b28/numa
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 物理机UUID |  | 4.3.12 |



##### API返回

 返回示例

```
{
        "topology": {
            "0": {
                "distance": ["10", "10", "21", "21"],
                "cpus": ["0", "1", "2", "3", "4", "5", "6", "7"],
                "VMsUuid": ["f7bae73b9874344b8766dfcdda48ad6e", "f7bae73b9874344b8766dfcdda48ad6e"],
                "free": 5688.0,
                "size": 8191.0
            },
            "1": {
                "distance": ["10", "10", "21", "21"],
                "cpus": ["16", "17", "18", "19", "20", "21", "22", "23"],
                "VMsUuid": ["f7bae73b9874344b8766dfcdda48ad6e", "f7bae73b9874344b8766dfcdda48ad6e"],
                "free": 5688.0,
                "size": 8191.0
            },
            "2": {
                "distance": ["21", "21", "10", "10"],
                "cpus": ["8", "9", "10", "11", "12", "13", "14", "15"],
                "VMsUuid": ["f7bae73b9874344b8766dfcdda48ad6e", "f7bae73b9874344b8766dfcdda48ad6e"],
                "free": 5688.0,
                "size": 8191.0
            },
            "3": {
                "distance": ["21", "21", "10", "10"],
                "cpus": ["24", "25", "26", "27", "28", "29", "30", "31"],
                "VMsUuid": ["f7bae73b9874344b8766dfcdda48ad6e", "f7bae73b9874344b8766dfcdda48ad6e"],
                "free": 5688.0,
                "size": 8191.0
            }
        },
        "name": "172.20.14.243",
        "uuid": "7fd86bbe6ca94a8d810aa1d33e29932c"
    }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.12 |
| name | String | 资源名称 | 4.3.12 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.3.12 |
| topology | String | NUMA拓扑信息，详情见[topology] | 4.3.12 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.12 |
| description | String | 错误的概要描述 | 4.3.12 |
| details | String | 错误的详细信息 | 4.3.12 |
| elaboration | String | 保留字段，默认为null | 4.3.12 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.12 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.12 |

 #topology

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| cpus | array[string] | NUMA node包含的CPUs id列表 | 4.3.12 |
| size | long | NUMA node总内存大小(单位为B) | 4.3.12 |
| distance | array[string] | 该NUMA node与其他node的距离 | 4.3.12 |
| VMsUuid | array[string] | 该NUMA node关联VM的Uuid | 4.3.12 |
| free | long | NUMA node可用内存大小(单位为B) | 4.3.12 |



##### SDK示例

 Java SDK

```
GetHostNUMATopologyAction action = new GetHostNUMATopologyAction();
action.uuid = "2b8e587e99093c46b27e774dfe93024f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostNUMATopologyAction.Result res = action.call();
```

 Python SDK

```
GetHostNUMATopologyAction action = new GetHostNUMATopologyAction();
action.uuid = "2b8e587e99093c46b27e774dfe93024f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostNUMATopologyAction.Result res = action.call();
```

---

#### 分配物理机计算资源(AllocateHostResource)



##### API请求

 URLs

```
POST zstack/v1/hosts/{uuid}/allocate-resource
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "strategy": "continuous",
    "scene": "normal",
    "vcpu": 2,
    "memSize": 1234567
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
-X POST -d '{"params":{"strategy":"continuous","scene":"normal","vcpu":2,"memSize":1234567}}' \
http://localhost:8080/zstack/v1/hosts/0ce1fccc44b53601a54c3090233c07dd/allocate-resource
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.11 |
| strategy | String | body(包含在**params**结构中) | 分配策略 | continuous | 4.7.11 |
| scene | String | body(包含在**params**结构中) | 分配场景 | normal performance | 4.7.11 |
| vcpu | int | body(包含在**params**结构中) | 需要的vCPU数量 |  | 4.7.11 |
| memSize (可选) | Long | body(包含在**params**结构中) | 需要的内存大小 |  | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "name": "example",
  "uuid": "f7bae73b9874344b8766dfcdda48ad6e",
  "vCPUPin": [
    {
      "vCPU": "0",
      "pCPU": "13"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| name | String | 资源名称 | 4.7.11 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.11 |
| vCPUPin | List | 为对应vCPU数量分配的pCPU信息 | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
AllocateHostResourceAction action = new AllocateHostResourceAction();
action.uuid = "0ce1fccc44b53601a54c3090233c07dd";
action.strategy = "continuous";
action.scene = "normal";
action.vcpu = 2;
action.memSize = 1234567;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AllocateHostResourceAction.Result res = action.call();
```

 Python SDK

```
AllocateHostResourceAction action = AllocateHostResourceAction()
action.uuid = "0ce1fccc44b53601a54c3090233c07dd"
action.strategy = "continuous"
action.scene = "normal"
action.vcpu = 2
action.memSize = 1234567
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AllocateHostResourceAction.Result res = action.call()
```

---

#### 根据云主机需求获取物理机资源的分配信息(GetHostResourceAllocation)



##### API请求

 URLs

```
POST zstack/v1/hosts/{uuid}/resource-allocation
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "strategy": "continuous",
    "scene": "normal",
    "vcpu": 60
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
-X POST //localhost:8080/zstack/v1/hosts/21529457e42c30f0a9b2a137915a0b28/resource-allocation -d '{"params": {"strategy": "continuous", "scene": "normal", "vcpu": 60}}'
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 物理机UUID |  | 4.3.12 |
| strategy | String | body(包含在**params**结构中) | 资源分配策略 | continuous(连续分配策略) | 4.3.12 |
| scene | String | body(包含在**params**结构中) | 场景类型 | normal performance | 4.3.12 |
| vcpu | String | body(包含在**params**结构中) | 云主机需要分配的vCPU数量 | [1,512] | 4.3.12 |



##### API返回

 返回示例

```
{
      "name": "example",
      "uuid": "f7bae73b9874344b8766dfcdda48ad6e",
      "vCPUPin": [
        {
            "vCPU": "0",
            "pCPU": "13"
        },
        {
            "vCPU": "1",
            "pCPU": "12"
        },
        {
            "vCPU": "2",
            "pCPU": "11"
        },
        {
            "vCPU": "3",
            "pCPU": "10"
        },
        {
            "vCPU": "4",
            "pCPU": "9"
        },
        {
            "vCPU": "5",
            "pCPU": "8"
        }
      ]
    }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.12 |
| name | String | 资源名称 | 4.3.12 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.3.12 |
| vCPUPin | array[json] | 此次分配推荐的vCPU pin信息，详情请见[CPU Pin] | 4.3.12 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.12 |
| description | String | 错误的概要描述 | 4.3.12 |
| details | String | 错误的详细信息 | 4.3.12 |
| elaboration | String | 保留字段，默认为null | 4.3.12 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.12 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.12 |

 #CPU Pin

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vCPU | string | 云主机vCPU id | 4.3.12 |
| pCPU | string | 物理机pCPU id | 4.3.12 |



##### SDK示例

 Java SDK

```
GetHostResourceAllocationAction action = new GetHostResourceAllocationAction()
action.uuid = "ff6d905e75d63e18ab0a9fc2ac14951c"
action.scene = "normal"
action.strategy = "continuous"
action.vcpu = 60
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostResourceAllocationAction.Result res = action.call()
```

 Python SDK

```
GetHostResourceAllocationAction action = new GetHostResourceAllocationAction()
action.uuid = "ff6d905e75d63e18ab0a9fc2ac14951c"
action.scene = "normal"
action.strategy = "continuous"
action.vcpu = 60
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostResourceAllocationAction.Result res = action.call()
```

---

#### 获取物理机最新电源状态(GetHostPowerStatus)



##### API请求

 URLs

```
PUT zstack/v1/hosts/power/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "getHostPowerStatus": {
    "method": "AUTO"
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
-X PUT -d '{"getHostPowerStatus":{"method":"AUTO"}}' //localhost:8080/zstack/v1/hosts/power/12d6c065d8cb3e128b5c33f7c619f65f/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| method (可选) | String | body(包含在**getHostPowerStatus**结构中) | 获取物理机电源状态方式 | AUTO AGENT IPMI | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "ipmiAddress": "192.168.0.1",
    "ipmiUsername": "admin",
    "ipmiPort": 623,
    "ipmiPassword": "password",
    "ipmiPowerStatus": "POWER_ON"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory |  | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| ipmiAddress | String | IPMI地址 | 4.7.0 |
| ipmiUsername | String | IPMI用户名 | 4.7.0 |
| ipmiPort | int | IPMI端口 | 4.7.0 |
| ipmiPowerStatus | String | IPMI电源状态 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
GetHostPowerStatusAction action = new GetHostPowerStatusAction();
action.uuid = "12d6c065d8cb3e128b5c33f7c619f65f";
action.method = "AUTO";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostPowerStatusAction.Result res = action.call();
```

 Python SDK

```
GetHostPowerStatusAction action = GetHostPowerStatusAction()
action.uuid = "12d6c065d8cb3e128b5c33f7c619f65f"
action.method = "AUTO"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostPowerStatusAction.Result res = action.call()
```

---

#### 获取物理机网页终端链接(GetHostWebSshUrl)



##### API请求

 URLs

```
POST zstack/v1/hosts/webssh
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "uuid": "1e6eb11de9d5347e9a5bc72269f45247",
    "https": false
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
-X POST -d '{"params":{"uuid":"1e6eb11de9d5347e9a5bc72269f45247","https":false}}' //localhost:8080/zstack/v1/hosts/webssh
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在`params`结构中) | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |
| https (可选) | Boolean | body(包含在**params**结构中) |  |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "url": "ws://{{ip}}:8888/ws?id\u003d140147795208568"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| url | String | 物理机网页终端链接 | 4.7.0 |
| success | boolean | 是否成功 | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
GetHostWebSshUrlAction action = new GetHostWebSshUrlAction();
action.uuid = "1e6eb11de9d5347e9a5bc72269f45247";
action.https = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostWebSshUrlAction.Result res = action.call();
```

 Python SDK

```
GetHostWebSshUrlAction action = GetHostWebSshUrlAction()
action.uuid = "1e6eb11de9d5347e9a5bc72269f45247"
action.https = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostWebSshUrlAction.Result res = action.call()
```

---

#### 物理机开机(PowerOnHost)



##### API请求

 URLs

```
PUT zstack/v1/hosts/power/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerOnHost": {
    "returnEarly": false
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
-X PUT -d '{"powerOnHost":{"returnEarly":false}}' //localhost:8080/zstack/v1/hosts/power/494e84c334963183bfeef342e38bf4b4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| returnEarly (可选) | boolean | body(包含在**powerOnHost**结构中) | 是否提前返回 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



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
PowerOnHostAction action = new PowerOnHostAction();
action.uuid = "494e84c334963183bfeef342e38bf4b4";
action.returnEarly = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerOnHostAction.Result res = action.call();
```

 Python SDK

```
PowerOnHostAction action = PowerOnHostAction()
action.uuid = "494e84c334963183bfeef342e38bf4b4"
action.returnEarly = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerOnHostAction.Result res = action.call()
```

---

#### 重启物理机(PowerResetHost)



##### API请求

 URLs

```
PUT zstack/v1/hosts/power/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerResetHost": {
    "returnEarly": false,
    "method": "AUTO"
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
-X PUT -d '{"powerResetHost":{"returnEarly":false,"method":"AUTO"}}' //localhost:8080/zstack/v1/hosts/power/cbe0a6dc2b2b3dc9a84928f27461816b/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| method (可选) | String | body(包含在**powerResetHost**结构中) | 重启方式 | AUTO AGENT IPMI | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |
| returnEarly (可选) | boolean | body(包含在**powerResetHost**结构中) | 是否提前返回 |  | 4.7.0 |



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
PowerResetHostAction action = new PowerResetHostAction();
action.uuid = "cbe0a6dc2b2b3dc9a84928f27461816b";
action.returnEarly = false;
action.method = "AUTO";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerResetHostAction.Result res = action.call();
```

 Python SDK

```
PowerResetHostAction action = PowerResetHostAction()
action.uuid = "cbe0a6dc2b2b3dc9a84928f27461816b"
action.returnEarly = false
action.method = "AUTO"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerResetHostAction.Result res = action.call()
```

---

#### 关闭物理机(ShutdownHost)



##### API请求

 URLs

```
PUT zstack/v1/hosts/power/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "shutdownHost": {
    "returnEarly": false,
    "force": false,
    "method": "AUTO"
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
-X PUT -d '{"shutdownHost":{"returnEarly":false,"force":false,"method":"AUTO"}}' //localhost:8080/zstack/v1/hosts/power/700457ff11133edf93541013f6caf8e7/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| returnEarly (可选) | boolean | body(包含在**shutdownHost**结构中) | 是否提前返回 |  | 4.7.0 |
| force (可选) | boolean | body(包含在**shutdownHost**结构中) | 是否强制关机 |  | 0.6 |
| method (可选) | String | body(包含在**shutdownHost**结构中) | 关机方式 | AUTO AGENT IPMI | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



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
ShutdownHostAction action = new ShutdownHostAction();
action.uuid = "700457ff11133edf93541013f6caf8e7";
action.returnEarly = false;
action.force = false;
action.method = "AUTO";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ShutdownHostAction.Result res = action.call();
```

 Python SDK

```
ShutdownHostAction action = ShutdownHostAction()
action.uuid = "700457ff11133edf93541013f6caf8e7"
action.returnEarly = false
action.force = false
action.method = "AUTO"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ShutdownHostAction.Result res = action.call()
```

---

#### 更新物理机IPMI信息(UpdateHostIpmi)



##### API请求

 URLs

```
PUT zstack/v1/hosts/ipmi/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateHostIpmi": {
    "ipmiAddress": "127.0.0.10",
    "ipmiUsername": "admin",
    "ipmiPassword": "password",
    "ipmiPort": 623
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X PUT -d '{"updateHostIpmi":{"ipmiAddress":"127.0.0.10","ipmiUsername":"admin","ipmiPassword":"password","ipmiPort":623}}' \
http://localhost:8080/zstack/v1/hosts/ipmi/6cbd75f1a7cb3805b47a8dca8871c1c6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| ipmiAddress (可选) | String | body(包含在**updateHostIpmi**结构中) | IPMI地址 |  | 4.7.0 |
| ipmiUsername (可选) | String | body(包含在**updateHostIpmi**结构中) | IPMI用户名 |  | 4.7.0 |
| ipmiPassword (可选) | String | body(包含在**updateHostIpmi**结构中) | IPMI密码 |  | 4.7.0 |
| ipmiPort (可选) | int | body(包含在**updateHostIpmi**结构中) | IPMI端口 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "hostIpmiInventory": {
    "ipmiAddress": "192.168.0.1",
    "ipmiUsername": "admin",
    "ipmiPort": 623,
    "ipmiPassword": "password"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| hostIpmiInventory | HostIpmiInventory | 详情参考[hostIpmiInventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #hostIpmiInventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| ipmiAddress | String | IPMI地址 | 4.7.0 |
| ipmiUsername | String | IPMI用户名 | 4.7.0 |
| ipmiPort | int | IPMI端口 | 4.7.0 |
| ipmiPowerStatus | String | IPMI电源状态 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
UpdateHostIpmiAction action = new UpdateHostIpmiAction();
action.uuid = "6cbd75f1a7cb3805b47a8dca8871c1c6";
action.ipmiAddress = "127.0.0.10";
action.ipmiUsername = "admin";
action.ipmiPassword = "password";
action.ipmiPort = 623;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateHostIpmiAction.Result res = action.call();
```

 Python SDK

```
UpdateHostIpmiAction action = UpdateHostIpmiAction()
action.uuid = "6cbd75f1a7cb3805b47a8dca8871c1c6"
action.ipmiAddress = "127.0.0.10"
action.ipmiUsername = "admin"
action.ipmiPassword = "password"
action.ipmiPort = 623
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateHostIpmiAction.Result res = action.call()
```

---

#### 修改物理网口LLDP工作模式(ChangeHostNetworkInterfaceLldpMode)



##### API请求

 URLs

```
PUT zstack/v1/hostNetworkInterface/lldp/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeHostNetworkInterfaceLldpMode": {
    "interfaceUuids": [
      "f37102496ac2357aaa214622322adb65"
    ],
    "mode": "rx_only"
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
-X PUT -d '{"changeHostNetworkInterfaceLldpMode":{"interfaceUuids":["f37102496ac2357aaa214622322adb65"],"mode":"rx_only"}}' \
http://localhost:8080/zstack/v1/hostNetworkInterface/lldp/actions
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuids | List | body (包含在**changeHostNetworkInterfaceLldpMode**结构中) | 物理网口UUID |  | 5.0.0 |
| mode(可选) | String | body (包含在**changeHostNetworkInterfaceLldpMode**结构中) | LLDP工作模式 | rx_only tx_only rx_and_tx disable | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "interfaceUuid": "1cae08c11e8530a8bf892df7ef709249",
      "mode": "rx_only"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| inventories | List | 详情参考[inventrories] | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| interfaceUuid | String | 物理网口Uuid | 5.0.0 |
| mode | String | LLDP工作模式 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |
| lldp | HostNetworkInterfaceLldpRefInventory | 详情参考[lldp] | 5.0.0 |

 #lldp

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| lldpUuid | String | LLDP UUID | 5.0.0 |
| chassisId | String | 机箱标识 | 5.0.0 |
| timeToLive | Integer | 生存时间 | 5.0.0 |
| managementAddress | String | 管理地址 | 5.0.0 |
| systemName | String | 系统名称 | 5.0.0 |
| systemDescription | String | 系统描述 | 5.0.0 |
| systemCapabilities | String | 系统能力 | 5.0.0 |
| portId | String | 端口标识 | 5.0.0 |
| portDescription | String | 端口描述 | 5.0.0 |
| vlanId | Integer | VLAN标识 | 5.0.0 |
| aggregationPortId | Long | 聚合端口标识 | 5.0.0 |
| mtu | Integer | 最大传输单元 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
ChangeHostNetworkInterfaceLldpModeAction action = new ChangeHostNetworkInterfaceLldpModeAction();
action.interfaceUuids = asList("f37102496ac2357aaa214622322adb65");
action.mode = "rx_only";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeHostNetworkInterfaceLldpModeAction.Result res = action.call();
```

 Python SDK

```
ChangeHostNetworkInterfaceLldpModeAction action = ChangeHostNetworkInterfaceLldpModeAction()
action.interfaceUuids = [f37102496ac2357aaa214622322adb65]
action.mode = "rx_only"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeHostNetworkInterfaceLldpModeAction.Result res = action.call()
```

---

#### 获取物理网口LLDP信息(GetHostNetworkInterfaceLldp)



##### API请求

 URLs

```
GET zstack/v1/hostNetworkInterface/lldp/{interfaceUuid}/info
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hostNetworkInterface/lldp/e1b5f128aa183da6a6b719f136fdc5d2/info
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuids | String | url | 物理网口UUID |  | 5.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "lldp": {
    "lldpUuid": "6b7c1267888a38779eac7694315855f0",
    "chassisId": "mac 00:1e:08:1d:05:ba",
    "timeToLive": 120,
    "managementAddress": "172.25.2.4",
    "systemName": "BM-MN-3",
    "systemDescription": " CentecOS software, E530, Version 7.4.7 Copyright (C) 2004-2021 Centec Networks Inc.  All Rights Reserved.",
    "systemCapabilities": "Bridge, on  Router, on",
    "portId": "ifname eth-0-5",
    "portDescription": "eth-0-4",
    "vlanId": 3999,
    "aggregationPortId": 4294965248,
    "mtu": 9600
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| lldp | HostNetworkInterfaceLldpRefInventory | 详情参考[lldp] | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #lldp

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| lldpUuid | String | LLDP UUID | 5.0.0 |
| chassisId | String | 机箱标识 | 5.0.0 |
| timeToLive | Integer | 生存时间 | 5.0.0 |
| managementAddress | String | 管理地址 | 5.0.0 |
| systemName | String | 系统名称 | 5.0.0 |
| systemDescription | String | 系统描述 | 5.0.0 |
| systemCapabilities | String | 系统能力 | 5.0.0 |
| portId | String | 端口标识 | 5.0.0 |
| portDescription | String | 端口描述 | 5.0.0 |
| vlanId | Integer | VLAN标识 | 5.0.0 |
| aggregationPortId | Long | 聚合端口标识 | 5.0.0 |
| mtu | Integer | 最大传输单元 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
GetHostNetworkInterfaceLldpAction action = new GetHostNetworkInterfaceLldpAction();
action.interfaceUuid = "e1b5f128aa183da6a6b719f136fdc5d2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostNetworkInterfaceLldpAction.Result res = action.call();
```

 Python SDK

```
GetHostNetworkInterfaceLldpAction action = GetHostNetworkInterfaceLldpAction()
action.interfaceUuid = "e1b5f128aa183da6a6b719f136fdc5d2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostNetworkInterfaceLldpAction.Result res = action.call()
```

---

#### 查询物理网口LLDP配置(QueryHostNetworkInterfaceLldp)



##### API请求

 URLs

```
GET zstack/v1/hostNetworkInterface/lldp/all
```


```
GET zstack/v1/hostNetworkInterface/lldp/{interfaceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hostNetworkInterface/lldp/all
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hostNetworkInterface/lldp/{interfaceUuid}
```



可查询字段

运行zstack-cli命令行工具，输入QueryHostNetworkInterfaceLldp并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "interfaceUuid": "d90dd5538ca2343099ea96cb89857aca",
      "mode": "rx_only"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| lldp | List | 详情参考[inventories] | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| interfaceUuid | String | 物理网口Uuid | 5.0.0 |
| mode | String | LLDP工作模式 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |
| lldp | HostNetworkInterfaceLldpRefInventory | 详情参考[lldp] | 5.0.0 |

 #lldp

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| lldpUuid | String | LLDP UUID | 5.0.0 |
| chassisId | String | 机箱标识 | 5.0.0 |
| timeToLive | Integer | 生存时间 | 5.0.0 |
| managementAddress | String | 管理地址 | 5.0.0 |
| systemName | String | 系统名称 | 5.0.0 |
| systemDescription | String | 系统描述 | 5.0.0 |
| systemCapabilities | String | 系统能力 | 5.0.0 |
| portId | String | 端口标识 | 5.0.0 |
| portDescription | String | 端口描述 | 5.0.0 |
| vlanId | Integer | VLAN标识 | 5.0.0 |
| aggregationPortId | Long | 聚合端口标识 | 5.0.0 |
| mtu | Integer | 最大传输单元 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
QueryHostNetworkInterfaceLldpAction action = new QueryHostNetworkInterfaceLldpAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHostNetworkInterfaceLldpAction.Result res = action.call();
```

 Python SDK

```
QueryHostNetworkInterfaceLldpAction action = QueryHostNetworkInterfaceLldpAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHostNetworkInterfaceLldpAction.Result res = action.call()
```

---

#### PCI设备相关接口

---

#### 查询PCI设备(QueryPciDevice)



##### API请求

 URL

```
GET zstack/v1/pci-device/pci-devices
GET zstack/v1/pci-device/pci-devices/{uuid}
```

 Header

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 043ef942ef97460bba5c9381bb7a7455" \
-X GET http://localhost:8080/zstack/v1/pci-device/pci-devices
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 4af958832a32465aa544c3d7722af1da" \
-X GET http://localhost:8080/zstack/v1/pci-device/pci-devices/5b39eaae24e84e4ca7eb0bc56d6827c1
```



可查询字段

运行CLI命令行工具，输入`QueryPciDevice`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {}
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
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 2.1 |
| hostUuid | String | 物理机UUID | 2.1 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 2.1 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| vendorId | String | 供应商ID | 2.1 |
| deviceId | String | 设备ID | 2.1 |
| subvendorId | String | 子供应商ID | 2.1 |
| subdeviceId | String | 子设备ID | 2.1 |
| pciDeviceAddress | String | PCI设备地址 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceType | 详情参考[type] | 2.1 |
| state | PciDeviceState | 详情参考[state] | 2.1 |
| status | PciDeviceStatus | 详情参考[status] | 2.1 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virtStatus] | 3.5.0 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 2.1 |
| matchedPciDeviceOfferingRef | List | 详情参考[matchedPciDeviceOfferingRef] | 2.1 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 2.1 |
| Disabled | PciDeviceState | 停用 | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 2.1 |
| Attached | PciDeviceStatus | 已挂载 | 2.1 |
| System | PciDeviceStatus | 系统 | 2.1 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 3.5.0 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 3.5.0 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String | 键 | 2.1 |
| value | String | 值 | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

  #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
QueryPciDeviceAction action = new QueryPciDeviceAction();
action.conditions = asList();
action.sessionId = "9895783acb8541c6938417b602429219";
QueryPciDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryPciDeviceAction action = QueryPciDeviceAction()
action.conditions = []
action.sessionId = "515d02b3a2094575beadbf3db7127880"
QueryPciDeviceAction.Result res = action.call()
```

---

#### 更新PCI设备(UpdatePciDevice)



##### API请求

 URL

```
PUT zstack/v1/pci-device/pci-devices/{uuid}/actions
```

 Header

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updatePciDevice": {
    "state": "Disabled",
    "description": "test pci",
    "metaData": "key1:value1;key2:value2"
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
-X PUT -d '{"updatePciDevice":{"state":"Disabled","description":"test pci","metaData":"key1:value1;key2:value2"}}' \
http://localhost:8080/zstack/v1/pci-device/pci-devices/4bec7e7c2c1e337599e0455165906fd5/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| state (可选) | String | body(包含在**updatePciDevice**结构中) |  | Enabled Disabled | 2.1 |
| description (可选) | String | body(包含在**updatePciDevice**结构中) | 资源的详细描述 |  | 2.1 |
| metaData (可选) | String | body(包含在**updatePciDevice**结构中) |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "description": "test pci",
    "hostUuid": "47c749c4520c3c5ba2ddcb6bf725cc40",
    "vmInstanceUuid": "8452e9231dd339158054902001b453d0",
    "status": "Active",
    "state": "Disabled",
    "type": "GPU_Video_Controller",
    "vendorId": "10de",
    "deviceId": "0e0f",
    "subvendorId": "10de",
    "subdeviceId": "118b",
    "metaData": {
      "metaData": "render:Equal:true;anime:Equal:true",
      "metaDataEntries": [
        {
          "key": "render",
          "op": "Equal",
          "value": "true"
        },
        {
          "key": "anime",
          "op": "Equal",
          "value": "true"
        }
      ]
    },
    "pciDeviceAddress": "0000:06:00.1"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | PciDeviceInventory | 详情参考[inventory] | 2.1 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 2.1 |
| hostUuid | String | 物理机UUID | 2.1 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 2.1 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| vendorId | String | 供应商ID | 2.1 |
| deviceId | String | 设备ID | 2.1 |
| subvendorId | String | 子供应商ID | 2.1 |
| subdeviceId | String | 子设备ID | 2.1 |
| pciDeviceAddress | String | PCI设备地址 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceType | 详情参考[type] | 2.1 |
| state | PciDeviceState | 详情参考[state] | 2.1 |
| status | PciDeviceStatus | 详情参考[status] | 2.1 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virtStatus] | 3.5.0 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 2.1 |
| matchedPciDeviceOfferingRef | List | 详情参考[matchedPciDeviceOfferingRef] | 2.1 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 2.1 |
| Disabled | PciDeviceState | 停用 | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 2.1 |
| Attached | PciDeviceStatus | 已挂载 | 2.1 |
| System | PciDeviceStatus | 系统 | 2.1 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 3.5.0 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 3.5.0 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String | 键 | 2.1 |
| value | String | 值 | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
UpdatePciDeviceAction action = new UpdatePciDeviceAction();
action.uuid = "4bec7e7c2c1e337599e0455165906fd5";
action.state = "Disabled";
action.description = "test pci";
action.metaData = "key1:value1;key2:value2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdatePciDeviceAction.Result res = action.call();
```

 Python SDK

```
UpdatePciDeviceAction action = UpdatePciDeviceAction()
action.uuid = "4bec7e7c2c1e337599e0455165906fd5"
action.state = "Disabled"
action.description = "test pci"
action.metaData = "key1:value1;key2:value2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdatePciDeviceAction.Result res = action.call()
```

---

#### 删除PCI设备(DeletePciDevice)



删除失效的PCI设备，只允许删除Inactive状态的PCI设备。

##### API请求

 URLs

```
DELETE zstack/v1/pci-device/pci-devices/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e48a9a18b86946af89ad991945942f6c" \
-X DELETE http://localhost:8080/zstack/v1/pci-device/pci-devices/eae6d78d9ae344babc2c32028bea20f0?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| deleteMode (可选) | String | url |  |  | 2.1 |
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
DeletePciDeviceAction action = new DeletePciDeviceAction();
action.uuid = "435ae2ba1b3948a68835af0134ab8a97";
action.deleteMode = "Permissive";
action.sessionId = "c9e0d2c1a0614733854d12cb9670b475";
DeletePciDeviceAction.Result res = action.call();
```

 Python SDK

```
DeletePciDeviceAction action = DeletePciDeviceAction()
action.uuid = "5ab09caf016345adad9ee77462da8acf"
action.deleteMode = "Permissive"
action.sessionId = "f048bfdfbdad403b9e2223a0d8b96bc6"
DeletePciDeviceAction.Result res = action.call()
```

---

#### 获取PCI设备列表(GetPciDeviceCandidatesForAttachingVm)



获取云主机可绑定PCI设备列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/candidate-pci-devices
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3ac79a27693a48bda0c56e1a1ee3c4f6" \
-X GET http://localhost:8080/zstack/v1/vm-instances/30f116d6602248249266776f279ef674/candidate-pci-devices
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |
| types (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "99bc47cf68e340a1b0a85c874637ec7b",
      "hostUuid": "f853669ede9c4699bdff97e30d91235b",
      "status": "Attached",
      "type": "GPU_Video_Controller",
      "vendorId": "10de",
      "deviceId": "0e0f",
      "subvendorId": "10de",
      "subdeviceId": "118b",
      "pciDeviceAddress": "0000:06:00.1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |
| error | ErrorCode | 详情参考[error] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 2.1 |
| hostUuid | String | 物理机UUID | 2.1 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 2.1 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| vendorId | String | 供应商ID | 2.1 |
| deviceId | String | 设备ID | 2.1 |
| subvendorId | String | 子供应商ID | 2.1 |
| subdeviceId | String | 子设备ID | 2.1 |
| pciDeviceAddress | String | PCI设备地址 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceType | 详情参考[type] | 2.1 |
| state | PciDeviceState | 详情参考[state] | 2.1 |
| status | PciDeviceStatus | 详情参考[status] | 2.1 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virtStatus] | 3.5.0 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 2.1 |
| matchedPciDeviceOfferingRef | List | 详情参考[matchedPciDeviceOfferingRef] | 2.1 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 2.1 |
| Disabled | PciDeviceState | 停用 | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 2.1 |
| Attached | PciDeviceStatus | 已挂载 | 2.1 |
| System | PciDeviceStatus | 系统 | 2.1 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 3.5.0 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 3.5.0 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String | 键 | 2.1 |
| value | String | 值 | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |

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
GetPciDeviceCandidatesForAttachingVmAction action = new GetPciDeviceCandidatesForAttachingVmAction();
action.vmInstanceUuid = "178ad6dd410d4f75a5b956c6f9525603";
action.sessionId = "865b02dddee54fdea331471b5c266728";
GetPciDeviceCandidatesForAttachingVmAction.Result res = action.call();
```

 Python SDK

```
GetPciDeviceCandidatesForAttachingVmAction action = GetPciDeviceCandidatesForAttachingVmAction()
action.vmInstanceUuid = "0b89549b899d4e0ca421c443df97132f"
action.sessionId = "675223f565f747229d25c72354f866bb"
GetPciDeviceCandidatesForAttachingVmAction.Result res = action.call()
```

---

#### 获取可加载PCI设备(GetPciDeviceCandidatesForNewCreateVm)



为新建虚拟机获取可加载PCI设备。

##### API请求

 URLs

```
GET zstack/v1/pci-device/candidate-pci-devices-for-new-create-vm
```

 Headers

```

Authorization: OAuth the-session-uuid
```

 Curl示例

```

curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/pci-device/candidate-pci-devices-for-new-create-vm?hostUuid=3376aee6af913e278a1a6aafc28c2e94
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuid (可选) | String | query | 物理机UUID |  | 2.4 |
| clusterUuids (可选) | List | query |  |  | 2.4 |
| types (可选) | List | query |  |  | 2.4 |
| systemTags (可选) | List | query |  |  | 2.4 |
| userTags (可选) | List | query |  |  | 2.4 |



##### API返回

 返回示例

```

{
  "inventories": [
    {
      "uuid": "1d2d54391e4d303cbf12543508b208ba",
      "hostUuid": "d98a93185af134fda630723444fd49d4",
      "status": "Attached",
      "type": "GPU_Video_Controller",
      "vendorId": "10de",
      "deviceId": "0e0f",
      "subvendorId": "10de",
      "subdeviceId": "118b",
      "pciDeviceAddress": "0000:06:00.1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |
| error | ErrorCode | 详情参考[error] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 2.1 |
| hostUuid | String | 物理机UUID | 2.1 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 2.1 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| vendorId | String | 供应商ID | 2.1 |
| deviceId | String | 设备ID | 2.1 |
| subvendorId | String | 子供应商ID | 2.1 |
| subdeviceId | String | 子设备ID | 2.1 |
| pciDeviceAddress | String | PCI设备地址 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceType | 详情参考[type] | 2.1 |
| state | PciDeviceState | 详情参考[state] | 2.1 |
| status | PciDeviceStatus | 详情参考[status] | 2.1 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virtStatus] | 3.5.0 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 2.1 |
| matchedPciDeviceOfferingRef | List | 详情参考[matchedPciDeviceOfferingRef] | 2.1 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 2.1 |
| Disabled | PciDeviceState | 停用 | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 2.1 |
| Attached | PciDeviceStatus | 已挂载 | 2.1 |
| System | PciDeviceStatus | 系统 | 2.1 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 3.5.0 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 3.5.0 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String | 键 | 2.1 |
| value | String | 值 | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |

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

GetPciDeviceCandidatesForNewCreateVmAction action = new GetPciDeviceCandidatesForNewCreateVmAction();
action.hostUuid = "3376aee6af913e278a1a6aafc28c2e94";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPciDeviceCandidatesForNewCreateVmAction.Result res = action.call();
```

 Python SDK

```

GetPciDeviceCandidatesForNewCreateVmAction action = GetPciDeviceCandidatesForNewCreateVmAction()
action.hostUuid = "3376aee6af913e278a1a6aafc28c2e94"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPciDeviceCandidatesForNewCreateVmAction.Result res = action.call()
```

---

#### 绑定PCI设备到云主机(AttachPciDeviceToVm)



绑定PCI设备到云主机，管理员可以直接将状态为System、Active的PCI设备绑定到状态为Active、Stop的云主机。

##### API请求

 URLs

```
POST zstack/v1/pci-device/pci-devices/{pciDeviceUuid}/attach
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmInstanceUuid": "ea787ebae18f4e668e5962fd7db982a3"
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
-X POST -d '{"params":{"vmInstanceUuid":"d3f41f8b996b390992cc4607e7bb10dc"}}' \
http://localhost:8080/zstack/v1/pci-device/pci-devices/201b541edbed3dccbebfaa57b3beb9bb/attach
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciDeviceUuid | String | url | PCI设备UUID |  | 2.1 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4d0454694e264b2cafaa2adfd3e48602",
    "hostUuid": "b17bee8ff0814edc9661a65b281d2d78",
    "vmInstanceUuid": "ca4f71e2328f4f06b78d5b7255342dde",
    "status": "Attached",
    "type": "GPU_Video_Controller",
    "vendorId": "10de",
    "deviceId": "0e0f",
    "subvendorId": "10de",
    "subdeviceId": "118b",
    "pciDeviceAddress": "0000:06:00.1"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | PciDeviceInventory | 详情参考[inventory] | 2.1 |

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
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 2.1 |
| hostUuid | String | 物理机UUID | 2.1 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 2.1 |
| vendorId | String |  | 2.1 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| vendorId | String | 供应商ID | 2.1 |
| deviceId | String | 设备ID | 2.1 |
| subvendorId | String | 子供应商ID | 2.1 |
| subdeviceId | String | 子设备ID | 2.1 |
| pciDeviceAddress | String | PCI设备地址 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| status | PciDeviceStatus | 详情参考[status] | 2.1 |
| state | PciDeviceState | 详情参考[state] | 2.1 |
| type | PciDeviceType | 详情参考[type] | 2.1 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virtStatus] | 3.5.0 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 2.1 |
| matchedPciDeviceOfferingRef | List | 详情参考[**matchedPciDeviceOfferingRef**] | 2.1 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 2.1 |
| Disabled | PciDeviceState | 停用 | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 2.1 |
| Attached | PciDeviceStatus | 已挂载 | 2.1 |
| System | PciDeviceStatus | 系统 | 2.1 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 3.5.0 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 3.5.0 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String |  | 2.1 |
| value | String |  | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
AttachPciDeviceToVmAction action = new AttachPciDeviceToVmAction();
action.pciDeviceUuid = "201b541edbed3dccbebfaa57b3beb9bb";
action.vmInstanceUuid = "d3f41f8b996b390992cc4607e7bb10dc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachPciDeviceToVmAction.Result res = action.call();
```

 Python SDK

```
AttachPciDeviceToVmAction action = AttachPciDeviceToVmAction()
action.pciDeviceUuid = "201b541edbed3dccbebfaa57b3beb9bb"
action.vmInstanceUuid = "d3f41f8b996b390992cc4607e7bb10dc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachPciDeviceToVmAction.Result res = action.call()
```

---

#### 卸载PCI设备(DetachPciDeviceFromVm)



从云主机上卸载PCI设备

##### API请求

URLs

```
POST zstack/v1/pci-device/pci-devices/{pciDeviceUuid}/detach
```

Headers

```
Authorization: OAuth the-session-uuid
```

Body

```
{
  "params": {
    "vmInstanceUuid": "3603d1324fdd4393b62f5bc21e558eef"
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
-X POST -d '{"params":{"vmInstanceUuid":"42d2fcfc217f38faa02035132e7b4b16"}}' \
http://localhost:8080/zstack/v1/pci-device/pci-devices/f44964a4252a3de3a435d2ab04bb9fb8/detach
```

参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciDeviceUuid | String | url |  |  | 2.1 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3b1256e08a6544f4abe7de5b9ea81970",
    "hostUuid": "056dbc6f8170409a953c120a16a87d18",
    "status": "Active",
    "type": "GPU_Video_Controller",
    "vendorId": "10de",
    "deviceId": "0e0f",
    "subvendorId": "10de",
    "subdeviceId": "118b",
    "pciDeviceAddress": "0000:06:00.1"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | PciDeviceInventory | 详情参考[inventory] | 2.1 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 2.1 |
| hostUuid | String | 物理机UUID | 2.1 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 2.1 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| vendorId | String | 供应商ID | 2.1 |
| deviceId | String | 设备ID | 2.1 |
| subvendorId | String | 子供应商ID | 2.1 |
| subdeviceId | String | 子设备ID | 2.1 |
| pciDeviceAddress | String | PCI设备地址 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceType | 详情参考[type] | 2.1 |
| state | PciDeviceState | 详情参考[state] | 2.1 |
| status | PciDeviceStatus | 详情参考[status] | 2.1 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virtStatus] | 3.5.0 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 2.1 |
| matchedPciDeviceOfferingRef | List | 详情参考[matchedPciDeviceOfferingRef] | 2.1 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 2.1 |
| Disabled | PciDeviceState | 停用 | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 2.1 |
| Attached | PciDeviceStatus | 已挂载 | 2.1 |
| System | PciDeviceStatus | 系统 | 2.1 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 3.5.0 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 3.5.0 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 3.5.0 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 3.5.0 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String | 键 | 2.1 |
| value | String | 值 | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



SDK示例 Java SDK

```
DetachPciDeviceFromVmAction action = new DetachPciDeviceFromVmAction();
action.pciDeviceUuid = "f44964a4252a3de3a435d2ab04bb9fb8";
action.vmInstanceUuid = "42d2fcfc217f38faa02035132e7b4b16";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachPciDeviceFromVmAction.Result res = action.call();
```

 Python SDK

```
DetachPciDeviceFromVmAction action = DetachPciDeviceFromVmAction()
action.pciDeviceUuid = "60f04d2b75944c27a6922abb8e307a28"
action.vmInstanceUuid = "72ff58a5d24e40299ed9eda91a683be2"
action.sessionId = "4404fdf219e94d7ab37b48c4950fd26d"
DetachPciDeviceFromVmAction.Result res = action.call()
```

---

#### 创建PCI设备规格(CreatePciDeviceOffering)



##### API请求

 URLs

```
POST zstack/v1/pci-device/pci-device-offerings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "test",
    "vendorId": "10de",
    "deviceId": "0e0f"
  },
  "systemTags": [],
  "userTags": []
}
```



````

> **注意:** 说明: 上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。



##### Curl示例



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"test","vendorId":"10de","deviceId":"0e0f"}}' \
http://localhost:8080/zstack/v1/pci-device/pci-device-offerings
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name(可选) | String | body(包含在**params**结构中) | 资源名称 |  | 2.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.1 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 2.1 |
| vendorId | String | body(包含在**params**结构中) | 供应商ID |  | 2.1 |
| deviceId | String | body(包含在**params**结构中) | 设备ID |  | 2.1 |
| subvendorId (可选) | String | body(包含在**params**结构中) | 子供应商ID |  | 2.1 |
| subdeviceId (可选) | String | body(包含在**params**结构中) | 子设备ID |  | 2.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "type": "GPU_Video",
    "vendorId": "10de",
    "deviceId": "0e0f",
    "subvendorId": "10de",
    "subdeviceId": "118b"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | PciDeviceOfferingInventory | 详情参考[inventory] | 2.1 |

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
| vendorId | String |  | 2.1 |
| deviceId | String |  | 2.1 |
| subvendorId | String |  | 2.1 |
| subdeviceId | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceOfferingType | 详情参考[type] | 2.1 |
| attachedInstanceOfferings | List | 详情参考[**attachedInstanceOfferings**] | 2.1 |
| matchedPciDevices | List | 详情参考[matchedPciDevices] | 2.1 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video | PciDeviceOfferingType | GPU显卡 | 2.1 |
| GPU_Audio | PciDeviceOfferingType | GPU声卡 | 2.1 |
| Generic | PciDeviceOfferingType | 一般设备 | 2.1 |

 #attachedInstanceOfferings

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 2.1 |
| instanceOfferingUuid | String | 计算规格UUID | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |
| pciDeviceCount | Integer |  | 2.1 |
| metadata | PciDeviceMetaData | 详情参考[metadata] | 2.1 |

 #metadata

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String |  | 2.1 |
| value | String |  | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDevices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |



##### SDK示例

 Java SDK

```
CreatePciDeviceOfferingAction action = new CreatePciDeviceOfferingAction();
action.name = "test";
action.vendorId = "10de";
action.deviceId = "0e0f";
action.sessionId = "0cb0086840314456812971957614aa63";
CreatePciDeviceOfferingAction.Result res = action.call();
```

 Python SDK

```
CreatePciDeviceOfferingAction action = CreatePciDeviceOfferingAction()
action.name = "test"
action.vendorId = "10de"
action.deviceId = "0e0f"
action.sessionId = "b2dcf8abb771429f8f2484d0f4df428d"
CreatePciDeviceOfferingAction.Result res = action.call()
```

---

#### 删除PCI设备规格(DeletePciDeviceOffering)



##### API请求

 URLs

```
DELETE zstack/v1/pci-device/pci-device-offerings/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/pci-device/pci-device-offerings/900f2eefdec630c68313eb025123375d?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| deleteMode (可选) | String | url |  |  | 2.1 |
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
DeletePciDeviceOfferingAction action = new DeletePciDeviceOfferingAction();
action.uuid = "f47d555477e645af9a8817ce00b98b9d";
action.deleteMode = "Permissive";
action.sessionId = "c6809b8d823a4be484b82d03083a9ed0";
DeletePciDeviceOfferingAction.Result res = action.call();
```

 Python SDK

```
DeletePciDeviceOfferingAction action = DeletePciDeviceOfferingAction()
action.uuid = "d5458c1007774c16aa0ae771056172ca"
action.deleteMode = "Permissive"
action.sessionId = "99e57c0e1caf44929feb35de6cd90605"
DeletePciDeviceOfferingAction.Result res = action.call()
```

---

#### 查询PCI设备规格信息(QueryPciDeviceOffering)



##### API请求

 URLs

```
GET zstack/v1/pci-device/pci-device-offerings
GET zstack/v1/pci-device/pci-device-offerings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 0356dc4f75ac4798817b29d957ccb4bc" \
-X GET http://localhost:8080/zstack/v1/pci-device/pci-device-offerings
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 159ccf53b07a4b97ba3ea07dcf385f34" \
-X GET http://localhost:8080/zstack/v1/pci-device/pci-device-offerings/a43387ea19d84cecb328c34af59f6292
```



可查询字段

运行CLI命令行工具，输入`QueryPciDeviceOffering`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {}
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
| name | String | 资源名称 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| vendorId | String |  | 2.1 |
| deviceId | String |  | 2.1 |
| subvendorId | String |  | 2.1 |
| subdeviceId | String |  | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| type | PciDeviceOfferingType | 详情参考[type] | 2.1 |
| attachedInstanceOfferings | List | 详情参考[**attachedInstanceOfferings**] | 2.1 |
| matchedPciDevices | List | 详情参考[**matchedPciDevices**] | 2.1 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| 类型 | String | 类型，保留字段 | 2.1 |

 #attachedInstanceOfferings

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 2.1 |
| instanceOfferingUuid | String | 计算规格UUID | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |
| pciDeviceCount | Integer |  | 2.1 |
| metadata | PciDeviceMetaData | 详情参考[metadata] | 2.1 |

 #metadata

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 2.1 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 2.1 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String |  | 2.1 |
| value | String |  | 2.1 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 2.1 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 2.1 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 2.1 |

 #matchedPciDevices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |



##### SDK示例

 Java SDK

```
QueryPciDeviceOfferingAction action = new QueryPciDeviceOfferingAction();
action.conditions = asList();
action.sessionId = "fa91fe0f572c4ac1bcc975572985eed9";
QueryPciDeviceOfferingAction.Result res = action.call();
```

 Python SDK

```
QueryPciDeviceOfferingAction action = QueryPciDeviceOfferingAction()
action.conditions = []
action.sessionId = "c194660b515f48c98b469f591cdfe5a2"
QueryPciDeviceOfferingAction.Result res = action.call()
```

---

#### 查询PCI设备规格匹配(QueryPciDevicePciDeviceOffering)



##### API请求

 URLs

```
GET zstack/v1/pci-devices/pci-devices/pci-device-offerings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b4f4b13d193c4db9890eb1e5e055341a" \
-X GET http://localhost:8080/zstack/v1/pci-devices/pci-devices/pci-device-offerings
```



可查询字段

运行CLI命令行工具，输入`QueryPciDevicePciDeviceOffering`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {}
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
| pciDeviceUuid | String |  | 2.1 |
| pciDeviceOfferingUuid | String |  | 2.1 |



##### SDK示例

 Java SDK

```
QueryPciDevicePciDeviceOfferingAction action = new QueryPciDevicePciDeviceOfferingAction();
action.conditions = asList();
action.sessionId = "31a0eed2b439493997c448262d1ebc38";
QueryPciDevicePciDeviceOfferingAction.Result res = action.call();
```

 Python SDK

```
QueryPciDevicePciDeviceOfferingAction action = QueryPciDevicePciDeviceOfferingAction()
action.conditions = []
action.sessionId = "0dce1b66e4584dce83137f266aae1200"
QueryPciDevicePciDeviceOfferingAction.Result res = action.call()
```

---

#### 获取物理机lommu启用状态(GetHostIommuStatus)



##### API请求

 URLs

```
GET zstack/v1/pci-device/hosts/status/uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 5dd20f6d5e414a15a8923f349758b5ff" \
-X GET http://localhost:8080/zstack/v1/pci-device/hosts/status/uuid}?uuid=fcc8d4defb1e4064907636e7cf0ed885
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | query | 资源的UUID，唯一标示该资源 |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "status": "Active"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 2.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| status | HostIommuStatusType | 详情参考[status] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.1 |
| ordinal | int |  | 2.1 |



##### SDK示例

 Java SDK

```
GetHostIommuStatusAction action = new GetHostIommuStatusAction();
action.uuid = "78e175a479124efeb8182c00a854a05d";
action.sessionId = "8b8cba1389204acb8d56fbed1dad8458";
GetHostIommuStatusAction.Result res = action.call();
```

 Python SDK

```
GetHostIommuStatusAction action = GetHostIommuStatusAction()
action.uuid = "7a446ba1cfe644f09fc454d7b32c6f4d"
action.sessionId = "c44236d523584717974407c5e972e7fc"
GetHostIommuStatusAction.Result res = action.call()
```

---

#### 更新物理机Iommu启用状态(UpdateHostIommuState)



##### API请求

 URLs

```
PUT zstack/v1/pci-device/hosts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateHostIommuState": {
    "state": "Enabled"
  },
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
-X PUT -d '{"updateHostIommuState":{"state":"Enabled"}}' \
http://localhost:8080/zstack/v1/pci-device/hosts/7619742c9ff43b898487db33e1f096a4/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| state | String | body(包含在**updateHostIommuState**结构中) |  | Enabled Disabled | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "state": "Enabled"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 2.1 |
| state | HostIommuStateType | 详情参考[state] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateHostIommuStateAction action = new UpdateHostIommuStateAction();
action.uuid = "30bc8157b4894ceb9be0387248febb72";
action.state = "Enabled";
action.sessionId = "c06ce6f86c10486f891ec7aab3896865";
UpdateHostIommuStateAction.Result res = action.call();
```

 Python SDK

```
UpdateHostIommuStateAction action = UpdateHostIommuStateAction()
action.uuid = "53ad6ee9424148e8894c305370a1a9ba"
action.state = "Enabled"
action.sessionId = "f04fcfb3bfe3438aa56dd43e87202f04"
UpdateHostIommuStateAction.Result res = action.call()
```

---

#### 获取物理机lommu就绪状态(GetHostIommuState)



##### API请求

 URLs

```
GET zstack/v1/pci-device/hosts/state/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 637890e6fd754515a256c9c105d5c1c7" \
-X GET http://localhost:8080/zstack/v1/pci-device/hosts/state/904c207877bd4c20a4fc6811ec8cd808
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "state": "Enabled"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 2.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| state | HostIommuStateType | 详情参考[state] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.1 |
| ordinal | int |  | 2.1 |



##### SDK示例

 Java SDK

```
GetHostIommuStateAction action = new GetHostIommuStateAction();
action.uuid = "5e615f4d46784d72a8e0d7895123298e";
action.sessionId = "e7fd08c2494d401dadfa7d08649d0d09";
GetHostIommuStateAction.Result res = action.call();
```

 Python SDK

```
GetHostIommuStateAction action = GetHostIommuStateAction()
action.uuid = "c05c88f401074402bed2531c23424ae0"
action.sessionId = "4e3f9322969f4cb394d22a3d6dc4f89b"
GetHostIommuStateAction.Result res = action.call()
```

---

#### 将PCI设备规格加载到云主机(AddPciDeviceSpecToVmInstance)



##### API请求

 URLs

```
POST zstack/v1/pci-device-specs/{pciSpecUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "pciDeviceNumber": 1.0
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
-X POST -d '{"params":{"pciDeviceNumber":1.0}}' http://localhost:8080/zstack/v1/pci-device-specs/ace129cb77d93012bf47f839b9429881/vm-instances/16ecb900082437e8aaf554ce19620030
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciSpecUuid | String | url | PCI设备规格UUID |  | 3.5.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.5.0 |
| pciDeviceNumber (可选) | Integer | body(包含在**params**结构中) |  |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vmInstanceUuid": "ed0836204dbd496bb9cfa25f091d9d4a",
    "pciSpecUuid": "f9e3605232d343d99bca77ba13c1ca34",
    "pciDeviceNumber": 1.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | VmInstancePciDeviceSpecRefInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| pciDeviceNumber | Integer | 需要为云主机挂载的符合设备规格的设备个数，默认为1 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
AddPciDeviceSpecToVmInstanceAction action = new AddPciDeviceSpecToVmInstanceAction();
action.pciSpecUuid = "ace129cb77d93012bf47f839b9429881";
action.vmInstanceUuid = "16ecb900082437e8aaf554ce19620030";
action.pciDeviceNumber = 1.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddPciDeviceSpecToVmInstanceAction.Result res = action.call();
```

 Python SDK

```
AddPciDeviceSpecToVmInstanceAction action = AddPciDeviceSpecToVmInstanceAction()
action.pciSpecUuid = "ace129cb77d93012bf47f839b9429881"
action.vmInstanceUuid = "16ecb900082437e8aaf554ce19620030"
action.pciDeviceNumber = 1.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddPciDeviceSpecToVmInstanceAction.Result res = action.call()
```

---

#### 将PCI设备规格从云主机卸载(RemovePciDeviceSpecFromVmInstance)



##### API请求

 URLs

```
DELETE zstack/v1/pci-device-specs/{pciSpecUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/pci-device-specs/1c8f91c1699c35bfbb1847d2c20f7371/vm-instances/422fe51c278930f085e1323b0e858e3f?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciSpecUuid | String | url | PCI设备规格UUID |  | 3.5.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 系统标签 |  | 3.5.0 |



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
RemovePciDeviceSpecFromVmInstanceAction action = new RemovePciDeviceSpecFromVmInstanceAction();
action.pciSpecUuid = "1c8f91c1699c35bfbb1847d2c20f7371";
action.vmInstanceUuid = "422fe51c278930f085e1323b0e858e3f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemovePciDeviceSpecFromVmInstanceAction.Result res = action.call();
```

 Python SDK

```
RemovePciDeviceSpecFromVmInstanceAction action = RemovePciDeviceSpecFromVmInstanceAction()
action.pciSpecUuid = "1c8f91c1699c35bfbb1847d2c20f7371"
action.vmInstanceUuid = "422fe51c278930f085e1323b0e858e3f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemovePciDeviceSpecFromVmInstanceAction.Result res = action.call()
```

---

#### 更新PCI设备规格(UpdatePciDeviceSpec)



##### API请求

 URLs

```
PUT zstack/v1/pci-device-specs/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updatePciDeviceSpec": {
    "name": "MSI_GTX1060",
    "description": "NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller",
    "romContent": "*BASE64 ENCODED ROM CONTENT*",
    "romVersion": "86.06.0E.00.29",
    "abandonSpecRom": false,
    "state": "Enabled"
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
-X PUT -d '{"updatePciDeviceSpec":{"name":"MSI_GTX1060","description":"NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller","romContent":"*BASE64 ENCODED ROM CONTENT*","romVersion":"86.06.0E.00.29","abandonSpecRom":false,"state":"Enabled"}}' http://localhost:8080/zstack/v1/pci-device-specs/78ba2350be1e451597c2d42f778d0241/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.0 |
| name (可选) | String | body(包含在**updatePciDeviceSpec**结构中) | 资源名称 |  | 3.5.0 |
| description (可选) | String | body(包含在**updatePciDeviceSpec**结构中) | 资源的详细描述 |  | 3.5.0 |
| romContent (可选) | String | body(包含在**updatePciDeviceSpec**结构中) | BASE64编码后的固件内容 |  | 3.5.0 |
| romVersion (可选) | String | body(包含在**updatePciDeviceSpec**结构中) | 固件版本 |  | 3.5.0 |
| abandonSpecRom (可选) | boolean | body(包含在**updatePciDeviceSpec**结构中) | 删除已有固件 |  | 3.5.0 |
| state (可选) | String | body(包含在**updatePciDeviceSpec**结构中) | PCI设备规格启用状态 | Enabled Disabled | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ff483f5d5bf14587ac2d46a565b0f28f",
    "name": "MSI_GTX1060",
    "description": "NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller",
    "vendorId": "10de",
    "deviceId": "1c03",
    "subvendorId": "1462",
    "subdeviceId": "3283",
    "type": "GPU_Video_Controller",
    "state": "Enabled",
    "romVersion": "86.06.0E.00.28",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | PciDeviceSpecInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| vendorId | String | 供应商ID | 3.5.0 |
| deviceId | String | 设备ID | 3.5.0 |
| subvendorId | String | 子供应商ID | 3.5.0 |
| subdeviceId | String | 子设备ID | 3.5.0 |
| ramSize | String | 显存容量 | 3.5.0 |
| maxPartNum | Integer | 最大切分数量 | 3.5.0 |
| isVirtual | Boolean | 是否虚拟设备 | 3.5.0 |
| romVersion | String | 固件版本 | 3.5.0 |
| romMd5sum | String | 固件MD5 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | PciDeviceType | 详情参考[type] | 3.5.0 |
| state | PciDeviceSpecState | 详情参考[state] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceSpecState | 启用 | 3.5.0 |
| Disabled | PciDeviceSpecState | 停用 | 3.5.0 |



##### SDK示例

 Java SDK

```
UpdatePciDeviceSpecAction action = new UpdatePciDeviceSpecAction();
action.uuid = "4fd1d8c83d674e7abaa931a3972a37da";
action.name = "MSI_GTX1060";
action.description = "NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller";
action.romContent = "*BASE64 ENCODED ROM CONTENT*";
action.romVersion = "86.06.0E.00.29";
action.abandonSpecRom = false;
action.state = "Enabled";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdatePciDeviceSpecAction.Result res = action.call();
```

 Python SDK

```
UpdatePciDeviceSpecAction action = UpdatePciDeviceSpecAction()
action.uuid = "12de0d18f2e24fb8b178644cfcad105a"
action.name = "MSI_GTX1060"
action.description = "NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller"
action.romContent = "*BASE64 ENCODED ROM CONTENT*"
action.romVersion = "86.06.0E.00.29"
action.abandonSpecRom = false
action.state = "Enabled"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdatePciDeviceSpecAction.Result res = action.call()
```

---

#### 获取PCI设备规格候选列表(GetPciDeviceSpecCandidates)



##### API请求

 URLs

```
GET zstack/v1/pci-device-specs/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/pci-device-specs/candidates?clusterUuids=d3305a8348d937ba97d260fb0af0e87d&clusterUuids=4943e8ab691435f98f7d22e3196f36a0&hostUuid=8bcb6475294a3283b5105f36c52c4aa9&vmInstanceUuid=c4bd1f978e843300b8de214567841c3a&types=GPU_Video_Controller&types=GPU_Audio_Controller
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuids (可选) | List | query | 集群UUID |  | 3.5.0 |
| hostUuid (可选) | String | query | 物理机UUID |  | 3.5.0 |
| vmInstanceUuid (可选) | String | query | 云主机UUID |  | 3.5.0 |
| vmInstanceUuids (可选) | List | query | 云主机UUID列表 |  | 3.6.1 |
| types (可选) | List | query | 设备类型 |  | 3.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "87aceed20b6a46fbb4e45b74a514afd9",
      "name": "MSI_GTX1060",
      "description": "NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller",
      "vendorId": "10de",
      "deviceId": "1c03",
      "subvendorId": "1462",
      "subdeviceId": "3283",
      "type": "GPU_Video_Controller",
      "state": "Enabled",
      "romVersion": "86.06.0E.00.28",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| vendorId | String | 供应商ID | 3.5.0 |
| deviceId | String | 设备ID | 3.5.0 |
| subvendorId | String | 子供应商ID | 3.5.0 |
| subdeviceId | String | 子设备ID | 3.5.0 |
| ramSize | String | 显存容量 | 3.5.0 |
| maxPartNum | Integer | 最大切分数量 | 3.5.0 |
| isVirtual | Boolean | 是否虚拟设备 | 3.5.0 |
| romVersion | String | 固件版本 | 3.5.0 |
| romMd5sum | String | 固件MD5 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | PciDeviceType | 详情参考[type] | 3.5.0 |
| state | PciDeviceSpecState | 详情参考[state] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceSpecState | 启用 | 3.5.0 |
| Disabled | PciDeviceSpecState | 停用 | 3.5.0 |



##### SDK示例

 Java SDK

```
GetPciDeviceSpecCandidatesAction action = new GetPciDeviceSpecCandidatesAction();
action.clusterUuids = asList("d3305a8348d937ba97d260fb0af0e87d","4943e8ab691435f98f7d22e3196f36a0");
action.hostUuid = "8bcb6475294a3283b5105f36c52c4aa9";
action.vmInstanceUuid = "c4bd1f978e843300b8de214567841c3a";
action.types = asList("GPU_Video_Controller","GPU_Audio_Controller");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPciDeviceSpecCandidatesAction.Result res = action.call();
```

 Python SDK

```
GetPciDeviceSpecCandidatesAction action = GetPciDeviceSpecCandidatesAction()
action.clusterUuids = [d3305a8348d937ba97d260fb0af0e87d, 4943e8ab691435f98f7d22e3196f36a0]
action.hostUuid = "8bcb6475294a3283b5105f36c52c4aa9"
action.vmInstanceUuid = "c4bd1f978e843300b8de214567841c3a"
action.types = [GPU_Video_Controller, GPU_Audio_Controller]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPciDeviceSpecCandidatesAction.Result res = action.call()
```

---

#### 查询PCI设备规格(QueryPciDeviceSpec)



##### API请求

 URLs

```
GET zstack/v1/pci-device-specs
```


```
GET zstack/v1/pci-device-specs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/pci-device-specs?q=uuid=148eb0059a193de59e5278395c36baa7
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/pci-device-specs/f5caf15dfb98366cbf87d41aa01385b9
```



可查询字段

运行CLI命令行工具，输入QueryPciDeviceSpec并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4e583459b0bb4a8085f2acf4040ab802",
      "name": "MSI_GTX1060",
      "description": "NVIDIA Corporation, GP106 [GeForce GTX 1060 6GB], a1, VGA compatible controller",
      "vendorId": "10de",
      "deviceId": "1c03",
      "subvendorId": "1462",
      "subdeviceId": "3283",
      "type": "GPU_Video_Controller",
      "state": "Enabled",
      "romVersion": "86.06.0E.00.28",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| vendorId | String | 供应商ID | 3.5.0 |
| deviceId | String | 设备ID | 3.5.0 |
| subvendorId | String | 子供应商ID | 3.5.0 |
| subdeviceId | String | 子设备ID | 3.5.0 |
| ramSize | String | 显存容量 | 3.5.0 |
| maxPartNum | Integer | 最大切分数量 | 3.5.0 |
| isVirtual | Boolean | 是否虚拟设备 | 3.5.0 |
| romVersion | String | 固件版本 | 3.5.0 |
| romMd5sum | String | 固件MD5 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | PciDeviceType | 详情参考[type] | 3.5.0 |
| state | PciDeviceSpecState | 详情参考[state] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 2.1 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 2.1 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 2.1 |
| Moxa_Device | PciDeviceType | MOXA卡 | 2.1 |
| Generic | PciDeviceType | 一般设备 | 2.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceSpecState | 启用 | 3.5.0 |
| Disabled | PciDeviceSpecState | 停用 | 3.5.0 |



##### SDK示例

 Java SDK

```
QueryPciDeviceSpecAction action = new QueryPciDeviceSpecAction();
action.conditions = asList("uuid=96a05dc8dbee32ddb15c63680df63792");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPciDeviceSpecAction.Result res = action.call();
```

 Python SDK

```
QueryPciDeviceSpecAction action = QueryPciDeviceSpecAction()
action.conditions = ["uuid=362f676642ba3288bf02c98fcee26d74"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPciDeviceSpecAction.Result res = action.call()
```

---

#### 查询云主机与PCI设备规格的关联关系(QueryVmInstancePciDeviceSpecRef)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/pci-device-specs
```


```
GET zstack/v1/vm-instances/{vmInstanceUuid}/pci-device-specs/{pciSpecUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/{vmInstanceUuid}/pci-device-specs?q=vmInstanceUuid=e58abf7fd2d0332bb18ba348195be863
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/{vmInstanceUuid}/pci-device-specs/{pciSpecUuid}?q=vmInstanceUuid=34ff56e0fd1e3cd789a30d66fd4bf3aa
```



可查询字段

运行CLI命令行工具，输入QueryVmInstancePciDeviceSpecRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "vmInstanceUuid": "c40d04f99f7647f2bf145aa6e3d463ff",
      "pciSpecUuid": "9afda707d3b14838adaa48d4295f3d5f",
      "pciDeviceNumber": 1.0,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| pciSpecUuid | String | PCI设备规格UUID | 3.5.0 |
| pciDeviceNumber | Integer | 需要为云主机挂载的符合设备规格的设备个数，默认为1 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
QueryVmInstancePciDeviceSpecRefAction action = new QueryVmInstancePciDeviceSpecRefAction();
action.conditions = asList("vmInstanceUuid=67c3ebbb1c683373a52310b218164181");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVmInstancePciDeviceSpecRefAction.Result res = action.call();
```

 Python SDK

```
QueryVmInstancePciDeviceSpecRefAction action = QueryVmInstancePciDeviceSpecRefAction()
action.conditions = ["vmInstanceUuid=aef75bdacefd33349d9f15eb0f96fe89"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVmInstancePciDeviceSpecRefAction.Result res = action.call()
```

---

#### 虚拟化切分支持SR-IOV的PCI设备(GenerateSriovPciDevices)



##### API请求

 URLs

```
PUT zstack/v1/pci-devices/{pciDeviceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "generateSriovPciDevices": {
    "virtPartNum": 4.0
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
-X PUT -d '{"generateSriovPciDevices":{"virtPartNum":4.0}}' http://localhost:8080/zstack/v1/pci-devices/ce07829a08273d129f3b9d11cdf830b9/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciDeviceUuid | String | url | PCI UUID |  | 3.5.0 |
| virtPartNum | Integer | body(包含在**generateSriovPciDevices**结构中) | 切分数量 |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



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
GenerateSriovPciDevicesAction action = new GenerateSriovPciDevicesAction();
action.pciDeviceUuid = "ce07829a08273d129f3b9d11cdf830b9";
action.virtPartNum = 4.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GenerateSriovPciDevicesAction.Result res = action.call();
```

 Python SDK

```
GenerateSriovPciDevicesAction action = GenerateSriovPciDevicesAction()
action.pciDeviceUuid = "ce07829a08273d129f3b9d11cdf830b9"
action.virtPartNum = 4.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GenerateSriovPciDevicesAction.Result res = action.call()
```

---

#### 虚拟化还原支持SR-IOV的PCI设备(UngenerateSriovPciDevices)



##### API请求

 URLs

```
PUT zstack/v1/pci-devices/{pciDeviceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "ungenerateSriovPciDevices": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"ungenerateSriovPciDevices":{}}' http://localhost:8080/zstack/v1/pci-devices/31f8b8c366c63901ac928106568eca85/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciDeviceUuid | String | url | PCI UUID |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



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
UngenerateSriovPciDevicesAction action = new UngenerateSriovPciDevicesAction();
action.pciDeviceUuid = "31f8b8c366c63901ac928106568eca85";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UngenerateSriovPciDevicesAction.Result res = action.call();
```

 Python SDK

```
UngenerateSriovPciDevicesAction action = UngenerateSriovPciDevicesAction()
action.pciDeviceUuid = "31f8b8c366c63901ac928106568eca85"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UngenerateSriovPciDevicesAction.Result res = action.call()
```

---

#### 虚拟化切分支持VFIO_MDEV的PCI设备(GenerateMdevDevices)



##### API请求

 URLs

```
PUT zstack/v1/pci-devices/{pciDeviceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "generateMdevDevices": {
    "mdevSpecUuid": "013f5f259daa3e119ec79496ed2f5697"
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
-X PUT -d '{"generateMdevDevices":{"mdevSpecUuid":"013f5f259daa3e119ec79496ed2f5697"}}' http://localhost:8080/zstack/v1/pci-devices/b5b60d1bc9353c948c635a500a044c97/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciDeviceUuid | String | url | PCI设备UUID |  | 3.5.0 |
| mdevSpecUuid | String | body(包含在**generateMdevDevices**结构中) | MDEV设备规格UUID |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



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
GenerateMdevDevicesAction action = new GenerateMdevDevicesAction();
action.pciDeviceUuid = "b5b60d1bc9353c948c635a500a044c97";
action.mdevSpecUuid = "013f5f259daa3e119ec79496ed2f5697";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GenerateMdevDevicesAction.Result res = action.call();
```

 Python SDK

```
GenerateMdevDevicesAction action = GenerateMdevDevicesAction()
action.pciDeviceUuid = "b5b60d1bc9353c948c635a500a044c97"
action.mdevSpecUuid = "013f5f259daa3e119ec79496ed2f5697"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GenerateMdevDevicesAction.Result res = action.call()
```

---

#### 虚拟化还原支持VFIO_MDEV的PCI设备(UngenerateMdevDevices)



##### API请求

 URLs

```
PUT zstack/v1/pci-devices/{pciDeviceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "ungenerateMdevDevices": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"ungenerateMdevDevices":{}}' http://localhost:8080/zstack/v1/pci-devices/772a0f2d8aaa3626964e080122a48c25/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pciDeviceUuid | String | url | 被切分的PCI设备UUID |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



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
UngenerateMdevDevicesAction action = new UngenerateMdevDevicesAction();
action.pciDeviceUuid = "772a0f2d8aaa3626964e080122a48c25";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UngenerateMdevDevicesAction.Result res = action.call();
```

 Python SDK

```
UngenerateMdevDevicesAction action = UngenerateMdevDevicesAction()
action.pciDeviceUuid = "772a0f2d8aaa3626964e080122a48c25"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UngenerateMdevDevicesAction.Result res = action.call()
```

---

#### 查询PCI设备切分出的MDEV设备(QueryMdevDeviceSpec)



##### API请求

 URLs

```
GET zstack/v1/mdev-device-specs
```


```
GET zstack/v1/mdev-device-specs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mdev-device-specs?q=uuid=80e1584c51673827abf32ad7c57fa5ed
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mdev-device-specs/21accb3c691435f4a453de1566f19a37
```



可查询字段

运行CLI命令行工具，输入QueryMdevDeviceSpec并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "18ebda01fb874e7db54ccd3a6712e92d",
      "name": "GRID_M60-2A",
      "specification": "{Max Resolution\u003d1920*1080, GRID License\u003dGRID-Virtual-Apps,3.0, Instance Number\u003d4, Display Heads\u003d4, Vendor\u003dNVIDIA, Frame Rate Limit\u003d60FPS, Name\u003dGRID_M60-2A, RAM\u003d2048MB}",
      "type": "GPU_Video_Controller",
      "state": "Enabled",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| specification | String | 规格详情 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceSpecState | 详情参考[state] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceSpecState | 启用 | 3.5.0 |
| Disabled | MdevDeviceSpecState | 停用 | 3.5.0 |



##### SDK示例

 Java SDK

```
QueryMdevDeviceSpecAction action = new QueryMdevDeviceSpecAction();
action.conditions = asList("uuid=96eb790c250833cd8889736e712639d9");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryMdevDeviceSpecAction.Result res = action.call();
```

 Python SDK

```
QueryMdevDeviceSpecAction action = QueryMdevDeviceSpecAction()
action.conditions = ["uuid=804f01b24a4f3ad6b78b09345e0ada3a"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryMdevDeviceSpecAction.Result res = action.call()
```

---

#### 将PCI设备切分出的MDEV设备绑定到云主机(AttachMdevDeviceToVm)



##### API请求

 URLs

```
POST zstack/v1/mdev-devices/{mdevDeviceUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/mdev-devices/2a23f189ed803f869deab2b22ef83b4d/vm-instances/e4108c6e45303e3bbd9743093127b894
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mdevDeviceUuid | String | url | MDEV设备UUID |  | 3.5.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2b29e6effba34e848164039e02511b89",
    "name": "GRID M60-2A",
    "parentUuid": "e9e3fe7b21644a19ac33e84dd27e3175",
    "hostUuid": "af505b47d522413d99d361b93cf92d2a",
    "mdevSpecUuid": "072b847576c34b419a29b16f62198e09",
    "type": "GPU_Video_Controller",
    "state": "Enabled",
    "status": "Active",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | MdevDeviceInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceState | 详情参考[state] | 3.5.0 |
| status | MdevDeviceStatus | 详情参考[status] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceState | 启用 | 3.5.0 |
| Disabled | MdevDeviceState | 停用 | 3.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | MdevDeviceStatus | 就绪 | 3.5.0 |
| Attached | MdevDeviceStatus | 已挂载 | 3.5.0 |



##### SDK示例

 Java SDK

```
AttachMdevDeviceToVmAction action = new AttachMdevDeviceToVmAction();
action.mdevDeviceUuid = "2a23f189ed803f869deab2b22ef83b4d";
action.vmInstanceUuid = "e4108c6e45303e3bbd9743093127b894";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachMdevDeviceToVmAction.Result res = action.call();
```

 Python SDK

```
AttachMdevDeviceToVmAction action = AttachMdevDeviceToVmAction()
action.mdevDeviceUuid = "2a23f189ed803f869deab2b22ef83b4d"
action.vmInstanceUuid = "e4108c6e45303e3bbd9743093127b894"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachMdevDeviceToVmAction.Result res = action.call()
```

---

#### 将PCI设备切分出的MDEV设备从云主机卸载(DetachMdevDeviceFromVm)



##### API请求

 URLs

```
DELETE zstack/v1/mdev-devices/{mdevDeviceUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/mdev-devices/4c2897ae50b8370489aa2e0caa96d370/vm-instances/16aefa196d5535f6836ec25d301ee3aa?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mdevDeviceUuid | String | url | MDEV设备UUID |  | 3.5.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.5.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing，默认 Permissive) |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "db19d22ce51b4900bb404e673bdf6584",
    "name": "GRID M60-2A",
    "parentUuid": "7cb5801ead03491db07fa7db3cb3b1f1",
    "hostUuid": "eedf47e3f5f64953a507b11f999970ff",
    "mdevSpecUuid": "807b8e35a04d4d9d9a0ff431be6068a0",
    "type": "GPU_Video_Controller",
    "state": "Enabled",
    "status": "Active",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | MdevDeviceInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceState | 详情参考[state] | 3.5.0 |
| status | MdevDeviceStatus | 详情参考[status] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceState | 启用 | 3.5.0 |
| Disabled | MdevDeviceState | 停用 | 3.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | MdevDeviceStatus | 就绪 | 3.5.0 |
| Attached | MdevDeviceStatus | 已挂载 | 3.5.0 |



##### SDK示例

 Java SDK

```
DetachMdevDeviceFromVmAction action = new DetachMdevDeviceFromVmAction();
action.mdevDeviceUuid = "4c2897ae50b8370489aa2e0caa96d370";
action.vmInstanceUuid = "16aefa196d5535f6836ec25d301ee3aa";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachMdevDeviceFromVmAction.Result res = action.call();
```

 Python SDK

```
DetachMdevDeviceFromVmAction action = DetachMdevDeviceFromVmAction()
action.mdevDeviceUuid = "4c2897ae50b8370489aa2e0caa96d370"
action.vmInstanceUuid = "16aefa196d5535f6836ec25d301ee3aa"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachMdevDeviceFromVmAction.Result res = action.call()
```

---

#### 更新PCI设备切分出的MDEV设备(UpdateMdevDevice)



##### API请求

 URLs

```
PUT zstack/v1/mdev-devices/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateMdevDevice": {
    "name": "NVIDIA_M60-2A",
    "description": "NVIDIA_M60-2A_2048MB_1920*1080_4Ins_60FPS",
    "state": "Enabled"
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
-X PUT -d '{"updateMdevDevice":{"name":"NVIDIA_M60-2A","description":"NVIDIA_M60-2A_2048MB_1920*1080_4Ins_60FPS","state":"Enabled"}}' http://localhost:8080/zstack/v1/mdev-devices/d89cea7c8a03306790d91e68fb0d0e65/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.0 |
| name (可选) | String | body(包含在**updateMdevDevice**结构中) | 资源名称 |  | 3.5.0 |
| description (可选) | String | body(包含在**updateMdevDevice**结构中) | 资源的详细描述 |  | 3.5.0 |
| state (可选) | String | body(包含在**updateMdevDevice**结构中) | 设备状态 | Enabled Disabled | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d026caddef774497aaf494d032fc8d61",
    "name": "GRID M60-2A",
    "parentUuid": "822875fb541440fb87ed31e3688c286e",
    "hostUuid": "80ab6fb85aa34745944d3772ab6a3e27",
    "mdevSpecUuid": "83a58b54e1fb449494876298b1a94148",
    "type": "GPU_Video_Controller",
    "state": "Enabled",
    "status": "Active",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | MdevDeviceInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceState | 详情参考[state] | 3.5.0 |
| status | MdevDeviceStatus | 详情参考[status] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceState | 启用 | 3.5.0 |
| Disabled | MdevDeviceState | 停用 | 3.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | MdevDeviceStatus | 就绪 | 3.5.0 |
| Attached | MdevDeviceStatus | 已挂载 | 3.5.0 |



##### SDK示例

 Java SDK

```
UpdateMdevDeviceAction action = new UpdateMdevDeviceAction();
action.uuid = "d89cea7c8a03306790d91e68fb0d0e65";
action.name = "NVIDIA_M60-2A";
action.description = "NVIDIA_M60-2A_2048MB_1920*1080_4Ins_60FPS";
action.state = "Enabled";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateMdevDeviceAction.Result res = action.call();
```

 Python SDK

```
UpdateMdevDeviceAction action = UpdateMdevDeviceAction()
action.uuid = "d89cea7c8a03306790d91e68fb0d0e65"
action.name = "NVIDIA_M60-2A"
action.description = "NVIDIA_M60-2A_2048MB_1920*1080_4Ins_60FPS"
action.state = "Enabled"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateMdevDeviceAction.Result res = action.call()
```

---

#### 获取可用的MDEV设备(GetMdevDeviceCandidates)



##### API请求

 URLs

```
GET zstack/v1/mdev-devices/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mdev-devices/candidates?vmInstanceUuid=3be91dd3332a3ef0b57831dcfc28a0c2&types=GPU_Video_Controller
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuids (可选) | List | query | 集群UUID |  | 3.5.0 |
| hostUuid (可选) | String | query | 物理机UUID |  | 3.5.0 |
| vmInstanceUuid (可选) | String | query | 云主机UUID |  | 3.5.0 |
| types (可选) | List | query | 设备类型 |  | 3.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4dd1f251873b4173939179c29b864df0",
      "name": "GRID M60-2A",
      "parentUuid": "36ff3d337d644bb9803f6599ec77189c",
      "hostUuid": "f1c21432e12245e78ee05324bb0886b4",
      "mdevSpecUuid": "8c9ddca8f93d4457acf78194986f8034",
      "type": "GPU_Video_Controller",
      "state": "Enabled",
      "status": "Active",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceState | 详情参考[state] | 3.5.0 |
| status | MdevDeviceStatus | 详情参考[status] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceState | 启用 | 3.5.0 |
| Disabled | MdevDeviceState | 停用 | 3.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | MdevDeviceStatus | 就绪 | 3.5.0 |
| Attached | MdevDeviceStatus | 已挂载 | 3.5.0 |



##### SDK示例

 Java SDK

```
GetMdevDeviceCandidatesAction action = new GetMdevDeviceCandidatesAction();
action.vmInstanceUuid = "3be91dd3332a3ef0b57831dcfc28a0c2";
action.types = asList("GPU_Video_Controller");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetMdevDeviceCandidatesAction.Result res = action.call();
```

 Python SDK

```
GetMdevDeviceCandidatesAction action = GetMdevDeviceCandidatesAction()
action.vmInstanceUuid = "3be91dd3332a3ef0b57831dcfc28a0c2"
action.types = [GPU_Video_Controller]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetMdevDeviceCandidatesAction.Result res = action.call()
```

---

#### 查询PCI设备切分出的MDEV设备(QueryMdevDevice)



##### API请求

 URLs

```
GET zstack/v1/mdev-devices
```


```
GET zstack/v1/mdev-devices/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mdev-devices
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mdev-devices/9fa9e261caad306f89ccde6f0dca7a1d
```



可查询字段

运行CLI命令行工具，输入QueryMdevDevice并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "597624b580d1458f82671b0ef77cf6a4",
      "name": "GRID M60-2A",
      "parentUuid": "90c171f07b21452b87b6d5ee58f4d687",
      "hostUuid": "b440c9393fc644cc8394d789ea1e18e1",
      "mdevSpecUuid": "91b07312092741f18a382942a92f1373",
      "type": "GPU_Video_Controller",
      "state": "Enabled",
      "status": "Active",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| parentUuid | String | 物理PCI设备UUID | 3.5.0 |
| hostUuid | String | 物理机UUID | 3.5.0 |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceState | 详情参考[state] | 3.5.0 |
| status | MdevDeviceStatus | 详情参考[status] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceState | 启用 | 3.5.0 |
| Disabled | MdevDeviceState | 停用 | 3.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | MdevDeviceStatus | 就绪 | 3.5.0 |
| Attached | MdevDeviceStatus | 已挂载 | 3.5.0 |



##### SDK示例

 Java SDK

```
QueryMdevDeviceAction action = new QueryMdevDeviceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryMdevDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryMdevDeviceAction action = QueryMdevDeviceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryMdevDeviceAction.Result res = action.call()
```

---

#### 将MDEV设备规格加载到云主机(AddMdevDeviceSpecToVmInstance)



##### API请求

 URLs

```
POST zstack/v1/mdev-device-specs/{mdevSpecUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "mdevDeviceNumber": 1.0
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
-X POST -d '{"params":{"mdevDeviceNumber":1.0}}' http://localhost:8080/zstack/v1/mdev-device-specs/dbcfe5ae889933a2a740584935e63e72/vm-instances/3d0b1d8b82ba3dd0b95a7903f735bdd1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mdevSpecUuid | String | url | MDEV设备规格UUID |  | 3.5.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.5.0 |
| mdevDeviceNumber (可选) | Integer | body(包含在**params**结构中) |  |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vmInstanceUuid": "e2af8f869eff49d2a3d6f86cadc27090",
    "mdevSpecUuid": "aa2e5e2cd0e749fab48ed045117ed70b",
    "mdevDeviceNumber": 1.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | VmInstanceMdevDeviceSpecRefInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| mdevDeviceNumber | Integer | 需要为云主机挂载的符合设备规格的设备个数，默认为1 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
AddMdevDeviceSpecToVmInstanceAction action = new AddMdevDeviceSpecToVmInstanceAction();
action.mdevSpecUuid = "dbcfe5ae889933a2a740584935e63e72";
action.vmInstanceUuid = "3d0b1d8b82ba3dd0b95a7903f735bdd1";
action.mdevDeviceNumber = 1.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddMdevDeviceSpecToVmInstanceAction.Result res = action.call();
```

 Python SDK

```
AddMdevDeviceSpecToVmInstanceAction action = AddMdevDeviceSpecToVmInstanceAction()
action.mdevSpecUuid = "dbcfe5ae889933a2a740584935e63e72"
action.vmInstanceUuid = "3d0b1d8b82ba3dd0b95a7903f735bdd1"
action.mdevDeviceNumber = 1.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddMdevDeviceSpecToVmInstanceAction.Result res = action.call()
```

---

#### 将MDEV设备规格从云主机卸载(RemoveMdevDeviceSpecFromVmInstance)



##### API请求

 URLs

```
DELETE zstack/v1/mdev-device-specs/{mdevSpecUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/mdev-device-specs/195f9b240d4a3f8b9946950694745fff/vm-instances/76ce5da88e383ee983955f3a24aea5cf?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mdevSpecUuid | String | url | MDEV设备规格UUID |  | 3.5.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.5.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing，默认 Permissive) |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



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
RemoveMdevDeviceSpecFromVmInstanceAction action = new RemoveMdevDeviceSpecFromVmInstanceAction();
action.mdevSpecUuid = "195f9b240d4a3f8b9946950694745fff";
action.vmInstanceUuid = "76ce5da88e383ee983955f3a24aea5cf";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveMdevDeviceSpecFromVmInstanceAction.Result res = action.call();
```

 Python SDK

```
RemoveMdevDeviceSpecFromVmInstanceAction action = RemoveMdevDeviceSpecFromVmInstanceAction()
action.mdevSpecUuid = "195f9b240d4a3f8b9946950694745fff"
action.vmInstanceUuid = "76ce5da88e383ee983955f3a24aea5cf"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveMdevDeviceSpecFromVmInstanceAction.Result res = action.call()
```

---

#### 更新MDEV设备规格(UpdateMdevDeviceSpec)



##### API请求

 URLs

```
PUT zstack/v1/mdev-device-specs/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateMdevDeviceSpec": {
    "name": "GRID_M60-2A",
    "description": "NVIDIA Corporation, GM204GL [Tesla M60], a1, VGA compatible controller",
    "state": "Enabled"
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
-X PUT -d '{"updateMdevDeviceSpec":{"name":"GRID_M60-2A","description":"NVIDIA Corporation, GM204GL [Tesla M60], a1, VGA compatible controller","state":"Enabled"}}' http://localhost:8080/zstack/v1/mdev-device-specs/abd8da93989a45b3b31023bf293b7a56/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.0 |
| name (可选) | String | body(包含在**updateMdevDeviceSpec**结构中) | 资源名称 |  | 3.5.0 |
| description (可选) | String | body(包含在**updateMdevDeviceSpec**结构中) | 资源的详细描述 |  | 3.5.0 |
| state (可选) | String | body(包含在**updateMdevDeviceSpec**结构中) | 规格状态 | Enabled Disabled | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7cb7791f5c334fa699670765199e47ae",
    "name": "GRID_M60-2A",
    "specification": "{Max Resolution\u003d1920*1080, GRID License\u003dGRID-Virtual-Apps,3.0, Instance Number\u003d4, Display Heads\u003d4, Vendor\u003dNVIDIA, Frame Rate Limit\u003d60FPS, Name\u003dGRID_M60-2A, RAM\u003d2048MB}",
    "type": "GPU_Video_Controller",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventory | MdevDeviceSpecInventory | 详情参考[inventory] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| specification | String | 规格详情 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceSpecState | 详情参考[state] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceSpecState | 启用 | 3.5.0 |
| Disabled | MdevDeviceSpecState | 停用 | 3.5.0 |



##### SDK示例

 Java SDK

```
UpdateMdevDeviceSpecAction action = new UpdateMdevDeviceSpecAction();
action.uuid = "53f36ffde0b54220a0894794e2420e37";
action.name = "GRID_M60-2A";
action.description = "NVIDIA Corporation, GM204GL [Tesla M60], a1, VGA compatible controller";
action.state = "Enabled";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateMdevDeviceSpecAction.Result res = action.call();
```

 Python SDK

```
UpdateMdevDeviceSpecAction action = UpdateMdevDeviceSpecAction()
action.uuid = "bfd502190f794603b26f699f8f8949f4"
action.name = "GRID_M60-2A"
action.description = "NVIDIA Corporation, GM204GL [Tesla M60], a1, VGA compatible controller"
action.state = "Enabled"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateMdevDeviceSpecAction.Result res = action.call()
```

---

#### 获取可用的MDEV设备规格(GetMdevDeviceSpecCandidates)



##### API请求

 URLs

```
GET zstack/v1/mdev-device-specs/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mdev-device-specs/candidates?vmInstanceUuid=319897b485313c7a96b0af986b91baea&types=GPU_Video_Controller
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuids (可选) | List | query | 集群UUID |  | 3.5.0 |
| hostUuid (可选) | String | query | 物理机UUID |  | 3.5.0 |
| vmInstanceUuid (可选) | String | query | 云主机UUID |  | 3.5.0 |
| vmInstanceUuids (可选) | List | query | 云主机UUID列表 |  | 3.6.1 |
| types (可选) | List | query | 设备类型 |  | 3.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "886c86dcca0a4f6696cf390c08d3e551",
      "name": "GRID_M60-2A",
      "specification": "{Max Resolution\u003d1920*1080, GRID License\u003dGRID-Virtual-Apps,3.0, Instance Number\u003d4, Display Heads\u003d4, Vendor\u003dNVIDIA, Frame Rate Limit\u003d60FPS, Name\u003dGRID_M60-2A, RAM\u003d2048MB}",
      "type": "GPU_Video_Controller",
      "state": "Enabled",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.0 |
| name | String | 资源名称 | 3.5.0 |
| description | String | 资源的详细描述 | 3.5.0 |
| specification | String | 规格详情 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |
| type | MdevDeviceType | 详情参考[type] | 3.5.0 |
| state | MdevDeviceSpecState | 详情参考[state] | 3.5.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | MdevDeviceType | GPU显卡控制器 | 3.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MdevDeviceSpecState | 启用 | 3.5.0 |
| Disabled | MdevDeviceSpecState | 停用 | 3.5.0 |



##### SDK示例

 Java SDK

```
GetMdevDeviceSpecCandidatesAction action = new GetMdevDeviceSpecCandidatesAction();
action.vmInstanceUuid = "319897b485313c7a96b0af986b91baea";
action.types = asList("GPU_Video_Controller");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetMdevDeviceSpecCandidatesAction.Result res = action.call();
```

 Python SDK

```
GetMdevDeviceSpecCandidatesAction action = GetMdevDeviceSpecCandidatesAction()
action.vmInstanceUuid = "319897b485313c7a96b0af986b91baea"
action.types = [GPU_Video_Controller]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetMdevDeviceSpecCandidatesAction.Result res = action.call()
```

---

#### 查询云主机与MDEV设备规格的关联关系(QueryVmInstanceMdevDeviceSpecRef)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/mdev-device-specs
```


```
GET zstack/v1/vm-instances/{vmInstanceUuid}/mdev-device-specs/{mdevSpecUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/{vmInstanceUuid}/mdev-device-specs?q=vmInstanceUuid=15ea1f7027833d9ea566ea590184d5d2
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/{vmInstanceUuid}/mdev-device-specs/{mdevSpecUuid}?q=vmInstanceUuid=5e3c68fed5ef39089614830ff30dfd50
```



可查询字段

运行CLI命令行工具，输入QueryVmInstanceMdevDeviceSpecRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "vmInstanceUuid": "56bfe280b3c84fe2abf1281a7050aabe",
      "mdevSpecUuid": "461d734e25824e4e9516c4798fa27068",
      "mdevDeviceNumber": 1.0,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 3.5.0 |
| mdevSpecUuid | String | MDEV设备规格UUID | 3.5.0 |
| mdevDeviceNumber | Integer | 需要为云主机挂载的符合设备规格的设备个数，默认为1 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 3.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.0 |



##### SDK示例

 Java SDK

```
QueryVmInstanceMdevDeviceSpecRefAction action = new QueryVmInstanceMdevDeviceSpecRefAction();
action.conditions = asList("vmInstanceUuid=308f8eccec9b320bbe082f233e7f822c");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVmInstanceMdevDeviceSpecRefAction.Result res = action.call();
```

 Python SDK

```
QueryVmInstanceMdevDeviceSpecRefAction action = QueryVmInstanceMdevDeviceSpecRefAction()
action.conditions = ["vmInstanceUuid=254f7f2f30bb3b7bb26595fc5120a63b"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVmInstanceMdevDeviceSpecRefAction.Result res = action.call()
```

---

#### USB重定向相关接口

---

#### 获取云主机usb重定向开关状态(GetVmUsbRedirect)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/usbredirect
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bb5fd18e914f4bfd88032edd0ee7b975" \
-X GET http://localhost:8080/zstack/v1/vm-instances/4b9d28c1d35f4f14b8ba1bb982500c50/usbredirect
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "enable": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | boolean | usb redirect 开关是否开启 | 2.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |



##### SDK示例

 Java SDK

```
GetVmUsbRedirectAction action = new GetVmUsbRedirectAction();
action.uuid = "c58671c58dd147e29d4bc263feafa04d";
action.sessionId = "e173648fdca94fd3ae720473a305ce4c";
GetVmUsbRedirectAction.Result res = action.call();
```

 Python SDK

```
GetVmUsbRedirectAction action = GetVmUsbRedirectAction()
action.uuid = "08efac4de45a4f6789d1009afa9e295e"
action.sessionId = "3f5a7473758d4c8ab3cc4664461500a4"
GetVmUsbRedirectAction.Result res = action.call()
```

---

#### 设置云主机usb重定向开关(SetVmUsbRedirect)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmUsbRedirect": {
    "enable": true
  },
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
-X PUT -d '{"setVmUsbRedirect":{"enable":true}}' \
http://localhost:8080/zstack/v1/vm-instances/ceeca8ab8c6b33fab9bdc143dec13211/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| enable | boolean | body(包含在**setVmUsbRedirect**结构中) | 设置为true代表开关开启，设置为false代表开关关闭 | true false | 2.1 |
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
SetVmUsbRedirectAction action = new SetVmUsbRedirectAction();
action.uuid = "8c14cf1dd17642c19622c924d065bb00";
action.enable = true;
action.sessionId = "6a5e2cc211794d28b9e1641c1a53d018";
SetVmUsbRedirectAction.Result res = action.call();
```

 Python SDK

```
SetVmUsbRedirectAction action = SetVmUsbRedirectAction()
action.uuid = "977cd1ae8b5f4dcab4c5f2062089ebf9"
action.enable = true
action.sessionId = "e6b4af2b358b44ea9fc3ff185d9af869"
SetVmUsbRedirectAction.Result res = action.call()
```

---

#### USB透传相关接口

---

#### 云主机加载物理机USB设备(AttachUsbDeviceToVm)



##### API请求

 URLs

```
POST zstack/v1/usb-device/usb-devices/{usbDeviceUuid}/attach
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmInstanceUuid": "2a3697245a4a3e829a246e222c243688",
    "attachType": "PassThrough"
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
-X POST -d '{"params":{"vmInstanceUuid":"2a3697245a4a3e829a246e222c243688","attachType":"PassThrough"}}' http://localhost:8080/zstack/v1/usb-device/usb-devices/84838a1925bb3eb3b2440a8afd420e40/attach
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| usbDeviceUuid | String | url | USB设备UUID |  | 2.2 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 2.2 |
| attachType (可选) | String | body(包含在**params**结构中) | 加载类型 | PassThrough Redirect | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回



返回示例

```
{
  "inventory": {
    "uuid": "dc782167a4853525848fd04bf606d072",
    "name": "usb",
    "hostUuid": "dea6020aae7b3244be45eee6ae1d4d0f",
    "vmInstanceUuid": "33471e0ae8a33b3b8b0f295eff6e4db4",
    "state": "Enabled",
    "busNum": "001",
    "devNum": "001",
    "idVendor": "0781",
    "idProduct": "5591",
    "iManufacturer": "SanDisk",
    "iProduct": "Ultra USB 3.0",
    "iSerial": "000000000001",
    "usbVersion": "3.0",
    "attachType": "PassThrough"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventory | UsbDeviceInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| hostUuid | String | 物理机UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| busNum | String | 总线号 | 2.2 |
| devNum | String | 设备号 | 2.2 |
| idVendor | String | VendorID | 2.2 |
| idProduct | String | ProductID | 2.2 |
| iManufacturer | String | 生产商 | 2.2 |
| iProduct | String | 设备类型 | 2.2 |
| iSerial | String | 序列号 | 2.2 |
| usbVersion | String | USB版本 | 2.2 |
| attachType | String | 加载方式 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| state | UsbDeviceState | 详情参考[state] | 2.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.2 |
| ordinal | int |  | 2.2 |



##### SDK示例

 Java SDK

```
AttachUsbDeviceToVmAction action = new AttachUsbDeviceToVmAction();
action.usbDeviceUuid = "84838a1925bb3eb3b2440a8afd420e40";
action.vmInstanceUuid = "2a3697245a4a3e829a246e222c243688";
action.attachType = "PassThrough";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachUsbDeviceToVmAction.Result res = action.call();
```

 Python SDK

```
AttachUsbDeviceToVmAction action = AttachUsbDeviceToVmAction()
action.usbDeviceUuid = "84838a1925bb3eb3b2440a8afd420e40"
action.vmInstanceUuid = "2a3697245a4a3e829a246e222c243688"
action.attachType = "PassThrough"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachUsbDeviceToVmAction.Result res = action.call()
```

---

#### 将云主机挂载的USB设备卸载(DetachUsbDeviceFromVm)



##### API请求

 URLs

```
POST zstack/v1/usb-device/usb-devices/{usbDeviceUuid}/detach
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' \
http://localhost:8080/zstack/v1/usb-device/usb-devices/17a5e98e5f943e8fafa01602d50cf3ad/detach
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| usbDeviceUuid | String | url | USB设备UUID |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



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
DetachUsbDeviceFromVmAction action = new DetachUsbDeviceFromVmAction();
action.usbDeviceUuid = "5256c889e9f0489e8fd12b66d176fb7d";
action.sessionId = "8082962f2d304a3fbee969e6b4749338";
DetachUsbDeviceFromVmAction.Result res = action.call();
```

 Python SDK

```
DetachUsbDeviceFromVmAction action = DetachUsbDeviceFromVmAction()
action.usbDeviceUuid = "ced1bbb139c54d1d973ddc38ae565244"
action.sessionId = "f6550a168b9847fca4c98df088d86c09"
DetachUsbDeviceFromVmAction.Result res = action.call()
```

---

#### 获取USB透传候选列表(GetUsbDeviceCandidatesForAttachingVm)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/candidate-usb-devices
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/ab759c79169739cb9e13ff091c4fa386/candidate-usb-devices?attachType=PassThrough
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 2.2 |
| attachType (可选) | String | query | 加载类型 | PassThrough Redirect | 3.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.2 |
| userTags (可选) | List | query | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b58b4b48b3b8398f93b8b529f6f5b53a",
      "name": "usb",
      "hostUuid": "9f7438cf6fd233cf8fc27d4f311326ca",
      "vmInstanceUuid": "ccdfb1d443433e1a8beac3a1d54374d5",
      "state": "Enabled",
      "busNum": "001",
      "devNum": "001",
      "idVendor": "0781",
      "idProduct": "5591",
      "iManufacturer": "SanDisk",
      "iProduct": "Ultra USB 3.0",
      "iSerial": "000000000001",
      "usbVersion": "3.0",
      "attachType": "PassThrough"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 2.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventories | List | 详情参考[inventories] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| hostUuid | String | 物理机UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| busNum | String | 总线号 | 2.2 |
| devNum | String | 设备号 | 2.2 |
| idVendor | String | VendorID | 2.2 |
| idProduct | String | ProductID | 2.2 |
| iManufacturer | String | 生产商 | 2.2 |
| iProduct | String | 设备类型 | 2.2 |
| iSerial | String | 序列号 | 2.2 |
| usbVersion | String | USB版本 | 2.2 |
| attachType | String | 加载方式 | 3.5.0 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| state | UsbDeviceState | 详情参考[state] | 2.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.2 |
| ordinal | int |  | 2.2 |



##### SDK示例

 Java SDK

```
GetUsbDeviceCandidatesForAttachingVmAction action = new GetUsbDeviceCandidatesForAttachingVmAction();
action.vmInstanceUuid = "ab759c79169739cb9e13ff091c4fa386";
action.attachType = "PassThrough";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetUsbDeviceCandidatesForAttachingVmAction.Result res = action.call();
```

 Python SDK

```
GetUsbDeviceCandidatesForAttachingVmAction action = GetUsbDeviceCandidatesForAttachingVmAction()
action.vmInstanceUuid = "ab759c79169739cb9e13ff091c4fa386"
action.attachType = "PassThrough"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetUsbDeviceCandidatesForAttachingVmAction.Result res = action.call()
```

---

#### 查询USB设备(QueryUsbDevice)



##### API请求

 URLs

```
GET zstack/v1/usb-device/usb-devices
GET zstack/v1/usb-device/usb-devices/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 54e99d3cba30426599008210fe537a5a" \
-X GET http://localhost:8080/zstack/v1/usb-device/usb-devices
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bd2e6629c65f4be6b0ae893664d80fac" \
-X GET http://localhost:8080/zstack/v1/usb-device/usb-devices/d2da293d46ac46279168ae02b361c69f
```



可查询字段

运行CLI命令行工具，输入`QueryUsbDevice`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "0beadc00381c4ca09216dc2ebfb0fba3",
      "name": "usb",
      "hostUuid": "648749ea79fb412aab27712c5813600a",
      "vmInstanceUuid": "f862f3c01f3340d6ab68e7a79757342f",
      "state": "Enabled",
      "busNum": "001",
      "devNum": "001",
      "idVendor": "0781",
      "idProduct": "5591",
      "iManufacturer": "SanDisk",
      "iProduct": "Ultra USB 3.0",
      "iSerial": "000000000001",
      "usbVersion": "3.0",
      "attachType": "PassThrough"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventories | List | 详情参[inventories] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| hostUuid | String | 物理机UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| busNum | String | 总线号 | 2.2 |
| devNum | String | 设备号 | 2.2 |
| idVendor | String | VendorID | 2.2 |
| idProduct | String | ProductID | 2.2 |
| iManufacturer | String | 生产商 | 2.2 |
| iProduct | String | 设备类型 | 2.2 |
| iSerial | String | 序列号 | 2.2 |
| usbVersion | String | USB版本 | 2.2 |
| attachType | String | 加载方式 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| state | UsbDeviceState | 详情参考[state] | 2.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.2 |
| ordinal | int |  | 2.2 |



##### SDK示例

 Java SDK

```
QueryUsbDeviceAction action = new QueryUsbDeviceAction();
action.conditions = asList();
action.sessionId = "b51bb939a8844869abb32e9cedbc9a1f";
QueryUsbDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryUsbDeviceAction action = QueryUsbDeviceAction()
action.conditions = []
action.sessionId = "9f884d4333ba46369cd1039c9ea44965"
QueryUsbDeviceAction.Result res = action.call()
```

---

#### 更新USB设备(UpdateUsbDevice)



##### API请求

 URLs

```
PUT zstack/v1/usb-device/usb-devices/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateUsbDevice": {
    "name": "usb",
    "description": "this is a usb device",
    "state": "Enabled"
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
-X PUT -d '{"updateUsbDevice":{"name":"usb","description":"this is a usb device","state":"Enabled"}}' \
http://localhost:8080/zstack/v1/usb-device/usb-devices/9d1ab4950ce933edabbaf8e73ca7e879/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| name (可选) | String | body(包含在**updateUsbDevice**结构中) | 资源名称 |  | 2.2 |
| description (可选) | String | body(包含在**updateUsbDevice**结构中) | 资源的详细描述 |  | 2.2 |
| state (可选) | String | body(包含在**updateUsbDevice**结构中) | USB设备状态 | Enabled Disabled | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2695f7ce0bda4587bbabbbfaad080554",
    "description": "test usb",
    "hostUuid": "4261ceb358ce473fa62c137c1ba8d3ef",
    "vmInstanceUuid": "4c059c5e0a834d86984d3141d8ec42cb",
    "state": "Disabled",
    "idVendor": "10de",
    "idProduct": "0e0f",
    "iManufacturer": "SanDisk",
    "iProduct": "USB Storage",
    "iSerial": "000000000001",
    "usbVersion": "3.0",
    "attachType": "PassThrough"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventory | UsbDeviceInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| hostUuid | String | 物理机UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| busNum | String | 总线号 | 2.2 |
| devNum | String | 设备号 | 2.2 |
| idVendor | String | VendorID | 2.2 |
| idProduct | String | ProductID | 2.2 |
| iManufacturer | String | 生产商 | 2.2 |
| iProduct | String | 设备类型 | 2.2 |
| iSerial | String | 序列号 | 2.2 |
| usbVersion | String | USB版本 | 2.2 |
| attachType | String | 加载方式 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| state | UsbDeviceState | 详情参考[state] | 2.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.2 |
| ordinal | int |  | 2.2 |



##### SDK示例

 Java SDK

```
UpdateUsbDeviceAction action = new UpdateUsbDeviceAction();
action.uuid = "86d05b807cfa47a7969745f0ffe8ee4b";
action.name = "usb";
action.description = "this is a usb device";
action.state = "Enabled";
action.sessionId = "86600ceaed5642ad810828129fe0e4a0";
UpdateUsbDeviceAction.Result res = action.call();
```

 Python SDK

```
UpdateUsbDeviceAction action = UpdateUsbDeviceAction()
action.uuid = "f16940abc205404bb17b00367f5b6a8d"
action.name = "usb"
action.description = "this is a usb device"
action.state = "Enabled"
action.sessionId = "a65b10bd9a164d33a42d8bacfab5acd6"
UpdateUsbDeviceAction.Result res = action.call()
```

---

#### SR-IOV相关接口

---

#### L3网络中是否存在可用VF网卡(IsVfNicAvailableInL3Network)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/{l3NetworkUuid}/hosts/{hostUuid}/vfnicavailable
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/443e156ec6883356974f97f803187310/hosts/037404d26b033e9d9fe0d3e7e4bbaa8b/vfnicavailable
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 3.9.0 |
| hostUuid | String | url | 物理机UUID |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "vfNicAvailable": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vfNicAvailable | boolean | 是否存在可用VF网卡 | 3.9.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |



##### SDK示例

 Java SDK

```
IsVfNicAvailableInL3NetworkAction action = new IsVfNicAvailableInL3NetworkAction();
action.l3NetworkUuid = "443e156ec6883356974f97f803187310";
action.hostUuid = "037404d26b033e9d9fe0d3e7e4bbaa8b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
IsVfNicAvailableInL3NetworkAction.Result res = action.call();
```

 Python SDK

```
IsVfNicAvailableInL3NetworkAction action = IsVfNicAvailableInL3NetworkAction()
action.l3NetworkUuid = "443e156ec6883356974f97f803187310"
action.hostUuid = "037404d26b033e9d9fe0d3e7e4bbaa8b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
IsVfNicAvailableInL3NetworkAction.Result res = action.call()
```

---

#### 修改云主机网卡类型(ChangeVmNicType)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/nics/{vmNicUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmNicType": {
    "vmNicType": "VNIC"
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
-X PUT -d '{"changeVmNicType":{"vmNicType":"VNIC"}}' http://localhost:8080/zstack/v1/vm-instances/nics/ba83aa15bafd33e792267c428465b1e5/actions
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 3.9.0 |
| vmNicType | String | body(包含在**changeVmNicType**结构中) | 云主机网卡类型 | VNIC | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bd44ea50e2573d5d9249c938dba0dad6",
    "vmInstanceUuid": "1311eba1f7e53c3aa816a140fd783068",
    "usedIpUuid": "464575b453d53e60941c7eeee08f3149",
    "l3NetworkUuid": "b62214c53fde3f6eb825bf2ce59e3d2e",
    "ip": "192.168.1.10",
    "mac": "00:0c:29:bd:99:fc",
    "hypervisorType": "KVM",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "deviceId": 0.0,
    "type": "VF"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | VmNicInventory | 详情参考[inventory] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| vmInstanceUuid | String | 云主机UUID | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ip | String | IP地址 | 3.9.0 |
| mac | String | MAC地址 | 3.9.0 |
| hypervisorType | String | 虚拟化类型 | 3.9.0 |
| netmask | String | 子网掩码 | 3.9.0 |
| gateway | String | 网关 | 3.9.0 |
| metaData | String |  | 3.9.0 |
| ipVersion | Integer | IP地址版本 | 3.9.0 |
| deviceId | Integer | 设备ID | 3.9.0 |
| type | String | 网卡类型 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| usedIps | List | 详情参考[usedIps] | 3.9.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| ipRangeUuid | String | IP段UUID | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ipVersion | Integer | IP协议号 | 3.9.0 |
| ip | String | IP地址 | 3.9.0 |
| netmask | String | 网络掩码 | 3.9.0 |
| gateway | String | 网关地址 | 3.9.0 |
| usedFor | String |  | 3.9.0 |
| ipInLong | long |  | 3.9.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
ChangeVmNicTypeAction action = new ChangeVmNicTypeAction();
action.vmNicUuid = "ba83aa15bafd33e792267c428465b1e5";
action.vmNicType = "VNIC";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmNicTypeAction.Result res = action.call();
```

 Python SDK

```
ChangeVmNicTypeAction action = ChangeVmNicTypeAction()
action.vmNicUuid = "ba83aa15bafd33e792267c428465b1e5"
action.vmNicType = "VNIC"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmNicTypeAction.Result res = action.call()
```

---

#### 修改云主机VF网卡高可用状态(ChangeVfNicHaState)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/nics/{vfNicUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVfNicHaState": {
    "haState": "Enabled"
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
-X PUT -d '{"changeVfNicHaState":{"haState":"Enabled"}}' http://localhost:8080/zstack/v1/vm-instances/nics/8536b111015d3fd289907c5f53c80153/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vfNicUuid | String | url | VF网卡UUID |  | 5.1.0 |
| haState | String | body(包含在**changeVfNicHaState**结构中) | 高可用状态 |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "pciDeviceUuid": "4935759d5e543ff7bb9901262d67e805",
    "haState": "Enabled",
    "uuid": "5a39466d15e9303d8cd091be8f8b98a0",
    "vmInstanceUuid": "0c9912e742793004bd585150a4e243d0",
    "usedIpUuid": "6c1404d271ce3da4a5a845563b65ab55",
    "l3NetworkUuid": "0d42b1c567da3721b04d1bc316b2e0cb",
    "ip": "192.168.1.2",
    "mac": "00:0c:29:bd:99:fc",
    "hypervisorType": "KVM",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "deviceId": 0,
    "type": "VF",
    "state": "enable"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.0 |
| inventory | VmVfNicInventory | 详情参考[inventory] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | 网卡PCI地址 | 5.1.0 |
| haState | String | 高可用状态 | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| ip | String |  | 5.1.0 |
| mac | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| netmask | String |  | 5.1.0 |
| gateway | String |  | 5.1.0 |
| metaData | String |  | 5.1.0 |
| ipVersion | Integer |  | 5.1.0 |
| driverType | String |  | 5.1.0 |
| internalName | String |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| type | String |  | 5.1.0 |
| state | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考 | 5.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| ipRangeUuid | String | IP段UUID | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| ipVersion | Integer |  | 5.1.0 |
| ip | String |  | 5.1.0 |
| netmask | String |  | 5.1.0 |
| gateway | String |  | 5.1.0 |
| usedFor | String |  | 5.1.0 |
| ipInLong | long |  | 5.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.0 |
| description | String | 错误的概要描述 | 5.1.0 |
| details | String | 错误的详细信息 | 5.1.0 |
| elaboration | String | 保留字段，默认为null | 5.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.0 |



##### SDK示例

 Java SDK

```
ChangeVfNicHaStateAction action = new ChangeVfNicHaStateAction();
action.vfNicUuid = "8536b111015d3fd289907c5f53c80153";
action.haState = "Enabled";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVfNicHaStateAction.Result res = action.call();
```

 Python SDK

```
ChangeVfNicHaStateAction action = ChangeVfNicHaStateAction()
action.vfNicUuid = "8536b111015d3fd289907c5f53c80153"
action.haState = "Enabled"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVfNicHaStateAction.Result res = action.call()
```

---

#### 获取L2网络可用的SRIOV VF(GetVfPciDeviceAvailableInL2Network)



##### API请求

 URLs

```
GET zstack/v1/l2-networks/vf-pci-devices-available
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vf-pci-devices-available?l2NetworkUuids=7615ff44c9f03400b32b9138e1d332fc
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l2NetworkUuids | List | query | 2层网络Uuid |  | 5.3.20 |
| systemTags (可选) | List | query | 系统标签 |  | 5.3.20 |
| userTags (可选) | List | query | 用户标签 |  | 5.3.20 |



##### API返回

 返回示例

```
{
  "l2VfAvailableClusters": {
    "76a2d0892dbb3047adc9f27227a47a24": [
      {
        "clusterHostAvailableVfs": {
          "cc8a747f6148357182ccbc922baf3611": {
            "ef8963015cb337e6b6e9ded639e74985": 10
          }
        }
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.20 |
| l2VfAvailableClusters | Map |  | 5.3.20 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.3.20 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.20 |
| description | String | 错误的概要描述 | 5.3.20 |
| details | String | 错误的详细信息 | 5.3.20 |
| elaboration | String | 保留字段，默认为null | 5.3.20 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.20 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.20 |



##### SDK示例

 Java SDK

```
GetVfPciDeviceAvailableInL2NetworkAction action = new GetVfPciDeviceAvailableInL2NetworkAction();
action.l2NetworkUuids = asList("7615ff44c9f03400b32b9138e1d332fc");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVfPciDeviceAvailableInL2NetworkAction.Result res = action.call();
```

 Python SDK

```
GetVfPciDeviceAvailableInL2NetworkAction action = GetVfPciDeviceAvailableInL2NetworkAction()
action.l2NetworkUuids = [7615ff44c9f03400b32b9138e1d332fc]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVfPciDeviceAvailableInL2NetworkAction.Result res = action.call()
```

---

#### 龙芯SE模块相关接口

---

#### 虚拟化切分支持VFIO_MDEV的MTTY设备(GenerateSeMdevDevices)



##### API请求



URLs

```
PUT zstack/v1/mtty-devices/{mttyDeviceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "generateSeMdevDevices": {
    "virtPartNum": 4.0
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
-X PUT -d '{"generateSeMdevDevices":{"virtPartNum":4.0}}' http://localhost:8080/zstack/v1/mtty-devices/d6e129976ad830fdbd2361a62f9f44e0/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mttyDeviceUuid | String | url | MTTY设备UUID |  | 4.6.0 |
| virtPartNum | Integer | body(包含在**generateSeMdevDevices**结构中) | 切分数量 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



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
GenerateSeMdevDevicesAction action = new GenerateSeMdevDevicesAction();
action.mttyDeviceUuid = "d6e129976ad830fdbd2361a62f9f44e0";
action.virtPartNum = 4.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GenerateSeMdevDevicesAction.Result res = action.call();
```



Python SDK

```
GenerateSeMdevDevicesAction action = GenerateSeMdevDevicesAction()
action.mttyDeviceUuid = "d6e129976ad830fdbd2361a62f9f44e0"
action.virtPartNum = 4.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GenerateSeMdevDevicesAction.Result res = action.call()
```

---

#### 查询MTTY设备(QueryMttyDevice)



##### API请求

 URLs

```
GET zstack/v1/mtty-devices
```


```
GET zstack/v1/mtty-devices/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mtty-devices
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/mtty-devices/af9814346f623e61a86a603854231eac
```



可查询字段

运行CLI命令行工具，输入QueryMttyDevice并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "36f2f7aa68d1494ea0ac11d98bab0f5d",
      "name": "SE Device",
      "hostUuid": "109ad7360f5846deaf65e61ea7f51013",
      "type": "SE_Controller",
      "state": "Enabled",
      "virtStatus": "VFIO_MDEV_VIRTUALIZABLE"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventories | List | 详情参考[inventories] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| hostUuid | String | 物理机UUID | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| type | MttyDeviceType | 详情参考[type] | 4.6.0 |
| state | MttyDeviceState | 详情参考[state] | 4.6.0 |
| virtStatus | MttyDeviceVirtStatus | 详情参考[virtStatus] | 4.6.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| SE_Controller | MttyDeviceType | SE控制器 | 4.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | MttyDeviceState | 启用 | 4.6.0 |
| Disabled | MttyDeviceState | 停用 | 4.6.0 |

 #virtStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| VFIO_MDEV_VIRTUALIZABLE | MttyDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 4.6.0 |
| VFIO_MDEV_VIRTUALIZED | MttyDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 4.6.0 |
| UNVIRTUALIZABLE | MttyDeviceVirtStatus | 不可虚拟化 | 4.6.0 |
| UNKNOWN | MttyDeviceVirtStatus | 未知 | 4.6.0 |



##### SDK示例

 Java SDK

```
QueryHostNetworkInterfaceAction action = new QueryHostNetworkInterfaceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHostNetworkInterfaceAction.Result res = action.call();
```

 Python SDK

```
QueryHostNetworkInterfaceAction action = QueryHostNetworkInterfaceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHostNetworkInterfaceAction.Result res = action.call()
```

---

#### 虚拟化还原支持VFIO_MDEV的MTTY设备(UngenerateSeMdevDevices)



##### API请求



URLs

```
PUT zstack/v1/mtty-devices/{mttyDeviceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "ungenerateSeMdevDevices": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"ungenerateSeMdevDevices":{}}' http://localhost:8080/zstack/v1/mtty-devices/1efca0f4fb223cbd83e5d225d0c97637/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mttyDeviceUuid | String | url | 被切分的MTTY设备UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



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
UngenerateSeMdevDevicesAction action = new UngenerateSeMdevDevicesAction();
action.mttyDeviceUuid = "1efca0f4fb223cbd83e5d225d0c97637";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UngenerateSeMdevDevicesAction.Result res = action.call();
```



Python SDK

```
UngenerateSeMdevDevicesAction action = UngenerateSeMdevDevicesAction()
action.mttyDeviceUuid = "1efca0f4fb223cbd83e5d225d0c97637"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UngenerateSeMdevDevicesAction.Result res = action.call()
```

---

#### 删除MDEV设备(DeleteMdevDevice)



##### API请求



URLs

```
Delete zstack/v1/mdev-device/{mdevDeviceUuid}?uuid={uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/mdev-devices/f858a5a7428935b39aa038b6d781efdb
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | MDEV设备UUID |  | 4.6.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



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
DeleteMdevDeviceAction action = new DeleteMdevDeviceAction();
action.mdevDeviceUuid = "f858a5a7428935b39aa038b6d781efdb";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteMdevDeviceAction.Result res = action.call();
```



Python SDK

```
DeleteMdevDeviceAction action = DeleteMdevDeviceAction()
action.mdevDeviceUuid = "f858a5a7428935b39aa038b6d781efdb"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteMdevDeviceAction.Result res = action.call()
```

---

#### 海光SE模块相关接口

---

#### 在Hygon物理机生成MDEV设备 (GenerateHygonMdevDevices)



##### API请求



URLs

```
PUT zstack/v1/hygon-devices/{hostUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```

{
  "generateHygonMdevDevices": {
    "maxQemuNum": 64
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
-X PUT -d '{"generateHygonMdevDevices":{"maxQemuNum":64}}' http://localhost:8080/zstack/v1/hygon-devices/8426a1ab49763402b20d3dbe7061ed6b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuid | String | url | 物理机UUID |  | 5.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.5.0 |
| maxQemuNum | Integer | body(包含在**generateHygonMdevDevices**结构中) | 指定每个物理CCP卡要为 QEMU云主机创建多少个虚拟设备 (MDEV) ，max_qemu_num=128 每个CCP生成 128 个给云主机使用的MDEV。 |  | 5.5.0 |



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
GenerateHygonMdevDevicesAction action = new GenerateHygonMdevDevicesAction();
action.hostUuid = "8426a1ab49763402b20d3dbe7061ed6b";
action.maxQemuNum = 64;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GenerateHygonMdevDevicesAction.Result res = action.call();
```



Python SDK

```
GenerateHygonMdevDevicesAction action = GenerateHygonMdevDevicesAction()
action.hostUuid = "8426a1ab49763402b20d3dbe7061ed6b"
action.maxQemuNum = 64
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GenerateHygonMdevDevicesAction.Result res = action.call()
```

---

#### 在Hygon物理机上取消生成的MDEV设备(UngenerateHygonMdevDevices)



##### API请求



URLs

```
PUT zstack/v1/hygon-devices/{hostUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```

{
  "ungenerateHygonMdevDevices": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"ungenerateHygonMdevDevices":{}}' http://localhost:8080/zstack/v1/hygon-devices/3c36d4ec8c3532f2ab7fc63af19f8ad8/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuid | String | url | 物理机UUID |  | 5.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.5.0 |



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
UngenerateHygonMdevDevicesAction action = new UngenerateHygonMdevDevicesAction();
action.hostUuid = "3c36d4ec8c3532f2ab7fc63af19f8ad8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UngenerateHygonMdevDevicesAction.Result res = action.call();
```



Python SDK

```
UngenerateHygonMdevDevicesAction action = UngenerateHygonMdevDevicesAction()
action.hostUuid = "3c36d4ec8c3532f2ab7fc63af19f8ad8"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UngenerateHygonMdevDevicesAction.Result res = action.call()
```

---

#### 设置云主机是否开启Hygon SE设备透传标识 (SetVmInstanceHygonMdev)



##### API请求



URLs

```
POST zstack/v1/vm-instances/{uuid}/hygon-mdev
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```

{
  "params": {
    "hygonSecurityElementEnable": "true"
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
-X POST -d '{"params":{"hygonSecurityElementEnable":"true"}}' http://localhost:8080/zstack/v1/vm-instances/b06cf99107ca3047a9e1e2189874f6dd/hygon-mdev
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 5.5.0 |
| hygonSecurityElementEnable | String | body(包含在**params**结构中) | 是否启用海光安全元素功能 |  | 5.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.5.0 |



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
SetVmInstanceHygonMdevAction action = new SetVmInstanceHygonMdevAction();
action.uuid = "b06cf99107ca3047a9e1e2189874f6dd";
action.hygonSecurityElementEnable = "true";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmInstanceHygonMdevAction.Result res = action.call();
```



Python SDK

```
SetVmInstanceHygonMdevAction action = SetVmInstanceHygonMdevAction()
action.uuid = "b06cf99107ca3047a9e1e2189874f6dd"
action.hygonSecurityElementEnable = "true"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmInstanceHygonMdevAction.Result res = action.call()
```

---

### GPU设备相关接口

---

#### 查询GPU信息(QueryGpuDevice)



##### API请求

 URLs

```
GET zstack/v1/gpu-device/gpu-devices
```


```
GET zstack/v1/gpu-device/gpu-devices/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/gpu-device/gpu-devices?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/gpu-device/gpu-devices/36fd4a643a173c36a45bfa3a1761c567
```



可查询字段

运行CLI命令行工具，输入`QueryGpuDevice`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {}
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.8 |
| inventories | List | 详情参考[inventories] | 5.1.8 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.8 |
| description | String | 错误的概要描述 | 5.1.8 |
| details | String | 错误的详细信息 | 5.1.8 |
| elaboration | String | 保留字段，默认为null | 5.1.8 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.8 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.8 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| serialNumber | String | 序列号 | 5.1.8 |
| memory | String | 显存 | 5.1.8 |
| power | String | 能耗 | 5.1.8 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.8 |
| name | String | 资源名称 | 5.1.8 |
| description | String | 资源的详细描述 | 5.1.8 |
| hostUuid | String | 物理机UUID | 5.1.8 |
| parentUuid | String |  | 5.1.8 |
| vmInstanceUuid | String | 云主机UUID | 5.1.8 |
| pciSpecUuid | String |  | 5.1.8 |
| vendorId | String |  | 5.1.8 |
| vendor | String |  | 5.1.8 |
| deviceId | String |  | 5.1.8 |
| device | String |  | 5.1.8 |
| subvendorId | String |  | 5.1.8 |
| subdeviceId | String |  | 5.1.8 |
| pciDeviceAddress | String |  | 5.1.8 |
| iommuGroup | String |  | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |
| type | PciDeviceType | 详情参考[type] | 5.1.8 |
| state | PciDeviceState | 详情参考[state] | 5.1.8 |
| status | PciDeviceStatus | 详情参考[status] | 5.1.8 |
| virtStatus | PciDeviceVirtStatus | 详情参考[virStatus] | 5.1.8 |
| chooser | PciDeviceChooser | 详情参考[chooser] | 5.1.8 |
| metaData | PciDeviceMetaData | 详情参考[metaData] | 5.1.8 |
| matchedPciDeviceOfferingRef | List | 详情参考[matchedPciDeviceOfferingRef] | 5.1.8 |
| mdevSpecRefs | List | 详情参考[mdevSpecRefs] | 5.1.8 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GPU_Video_Controller | PciDeviceType | GPU显卡控制器 | 5.1.8 |
| GPU_Audio_Controller | PciDeviceType | GPU声卡控制器 | 5.1.8 |
| GPU_3D_Controller | PciDeviceType | GPU 3D控制器 | 5.1.8 |
| Moxa_Device | PciDeviceType | MOXA卡 | 5.1.8 |
| Generic | PciDeviceType | 一般设备 | 5.1.8 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PciDeviceState | 启用 | 5.1.8 |
| Disabled | PciDeviceState | 停用 | 5.1.8 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Active | PciDeviceStatus | 就绪 | 5.1.8 |
| Attached | PciDeviceStatus | 已挂载 | 5.1.8 |
| System | PciDeviceStatus | 系统 | 5.1.8 |

 #virStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| UNVIRTUALIZABLE | PciDeviceVirtStatus | 不可虚拟化 | 5.1.8 |
| SRIOV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持SRIOV虚拟化 | 5.1.8 |
| VFIO_MDEV_VIRTUALIZABLE | PciDeviceVirtStatus | 支持VFIO_MDEV虚拟化 | 5.1.8 |
| SRIOV_VIRTUALIZED | PciDeviceVirtStatus | 已SRIOV虚拟化 | 5.1.8 |
| VFIO_MDEV_VIRTUALIZED | PciDeviceVirtStatus | 已VFIO_MDEV虚拟化 | 5.1.8 |
| SRIOV_VIRTUAL | PciDeviceVirtStatus | SRIOV虚拟设备 | 5.1.8 |
| UNKNOWN | PciDeviceVirtStatus | 未知 | 5.1.8 |

 #chooser

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| None | PciDeviceChooser |  | 5.1.8 |
| Device | PciDeviceChooser |  | 5.1.8 |
| Spec | PciDeviceChooser |  | 5.1.8 |

 #metaData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| metaData | String |  | 5.1.8 |
| metaDataEntries | List | 详情参考[metaDataEntries] | 5.1.8 |

 #metaDataEntries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| key | String | 键 | 5.1.8 |
| value | String | 值 | 5.1.8 |
| op | PciDeviceMetaDataOperator | 详情参考[op] | 5.1.8 |

 #op

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Equal | PciDeviceMetaDataOperator | 相等 | 5.1.8 |
| Unequal | PciDeviceMetaDataOperator | 不等 | 5.1.8 |

 #matchedPciDeviceOfferingRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String |  | 5.1.8 |
| pciDeviceOfferingUuid | String |  | 5.1.8 |

 #mdevSpecRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| pciDeviceUuid | String | PCI设备UUID | 5.1.8 |
| mdevSpecUuid | String | MDEV设备规格UUID | 5.1.8 |
| effective | Boolean | 当前MDEV规格是否被用于切分该PCI设备 | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |



##### SDK示例

 Java SDK

```
QueryGpuDeviceAction action = new QueryGpuDeviceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryGpuDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryGpuDeviceAction action = QueryGpuDeviceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryGpuDeviceAction.Result res = action.call()
```

---

### 主存储相关接口

---

#### 删除主存储(DeletePrimaryStorage)



##### API请求



URLs

```
DELETE zstack/v1/primary-storage/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth af6279db8d5d4434afe789fdb214fe86" \
-X DELETE http://localhost:8080/zstack/v1/primary-storage/84ecb184e2f649ac9300f804dfd9f43e?deleteMode=Permissive
```



参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeletePrimaryStorageAction action = new DeletePrimaryStorageAction();
action.uuid = "c471a57db90945129303e69cf731fee3";
action.deleteMode = "Permissive";
action.sessionId = "34041f0d587e4ce1827dd88f34a0a94b";
DeletePrimaryStorageAction.Result res = action.call();
```



Python SDK

```
DeletePrimaryStorageAction action = DeletePrimaryStorageAction()
action.uuid = "309a9da1c0884e679dd7f96502130ce3"
action.deleteMode = "Permissive"
action.sessionId = "0aa8b461719c45eea867c0be49565489"
DeletePrimaryStorageAction.Result res = action.call()
```

---

#### 查询主存储(QueryPrimaryStorage)



##### API请求

 URLs

```
GET zstack/v1/primary-storage
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f889c6a0220c4b34b3007f72bd04e839" \
-X GET http://localhost:8080/zstack/v1/primary-storage?q=uuid=2160b1e46b0a422fbc9ce6e4a7de1023
```



可查询字段

运行CLI命令行工具，输入`QueryPrimaryStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"efbdb96e4f9c457eacf11dcb19923af9"
      ]
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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryPrimaryStorageAction action = new QueryPrimaryStorageAction();
action.conditions = asList("uuid=56235f6bf5c24513bce99d4ec824c63f");
action.sessionId = "16f5568fa9aa48e79b3a3ed579787fd0";
QueryPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
QueryPrimaryStorageAction action = QueryPrimaryStorageAction()
action.conditions = ["uuid=52f2459af9ce4c35a0c7de9c98aaebb0"]
action.sessionId = "ade5be353d114f948f976ae43d397815"
QueryPrimaryStorageAction.Result res = action.call()
```

---

#### 向集群添加主存储(AttachPrimaryStorageToCluster)



##### API请求

 URLs

```
POST zstack/v1/clusters/{clusterUuid}/primary-storage/{primaryStorageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/clusters/06fa0d99fd9733409ea9dcb29e070fcf/primary-storage/e6df72f4eaaa324fb650cb7165bff218
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | url | 集群UUID |  | 0.6 |
| primaryStorageUuid | String | url | 主存储UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"f0262ff5aeb54cd19e0a33bfaa61f5a4"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AttachPrimaryStorageToClusterAction action = new AttachPrimaryStorageToClusterAction();
action.clusterUuid = "473e453a99844ea2a3b65aa637d33841";
action.primaryStorageUuid = "ffd9b14c1c3442f2bde3209cbe9cc195";
action.sessionId = "97c7848a46b44ba89f348f434b5f2288";
AttachPrimaryStorageToClusterAction.Result res = action.call();
```

 Python SDK

```
AttachPrimaryStorageToClusterAction action = AttachPrimaryStorageToClusterAction()
action.clusterUuid = "cfae196b0d514f9fbc6ecd5360cb6ccf"
action.primaryStorageUuid = "c122244cd9ab48fa80f61e781e98bb03"
action.sessionId = "c5b2cc8440fc4a6299c5f96a37d38a7f"
AttachPrimaryStorageToClusterAction.Result res = action.call()
```

---

#### 从集群卸载主存储(DetachPrimaryStorageFromCluster)



##### API请求

 URLs

```
DELETE/v1/clusters/{clusterUuid}/primary-storage/{primaryStorageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth d4e0a29dc5d94c9ca378b56c1eb538d7" \
-X DELETE http://localhost:8080/zstack/v1/clusters/d4ff9ff0511b4848870aa648748f9890/primary-storage/b91bcd212e434b1d97d80df127460f84?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| primaryStorageUuid | String | url | 主存储UUID |  | 0.6 |
| clusterUuid | String | url | 集群UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
DetachPrimaryStorageFromClusterAction action = new DetachPrimaryStorageFromClusterAction();
action.primaryStorageUuid = "c3444a3237a84d7e904b23d25106855a";
action.clusterUuid = "7ff9675810c84884984ee771d5a5b05c";
action.sessionId = "e678af3ed83b4ba893e0e514d2c07eb5";
DetachPrimaryStorageFromClusterAction.Result res = action.call();
```

 Python SDK

```
DetachPrimaryStorageFromClusterAction action = DetachPrimaryStorageFromClusterAction()
action.primaryStorageUuid = "4dbcd51ef01c44728b19c4d5aa06ac59"
action.clusterUuid = "554ac500d71b476e91ecf5440980aba9"
action.sessionId = "21fdcfe391a14d46ad5a7dcccbc3ddfa"
DetachPrimaryStorageFromClusterAction.Result res = action.call()
```

---

#### 重连主存储(ReconnectPrimaryStorage)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"reconnectPrimaryStorage": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectPrimaryStorage":{}}' \
http://localhost:8080/zstack/v1/primary-storage/699940f430123e588f4669ad7c17cf65/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"830a084ef24849cb8e65ffccb1e20e03"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
ReconnectPrimaryStorageAction action = new ReconnectPrimaryStorageAction();
action.uuid = "b346884f494b41d382e6fc3c1c6d406d";
action.sessionId = "634bb3b8568a4ee1b6f2abd3fc6edf65";
ReconnectPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
ReconnectPrimaryStorageAction action = ReconnectPrimaryStorageAction()
action.uuid = "78b0b8b7ac4f4c3887ee71f0bd159012"
action.sessionId = "97ce6c4f337d458ba25b9c4b1308fc1f"
ReconnectPrimaryStorageAction.Result res = action.call()
```

---

#### 获取主存储容量(GetPrimaryStorageCapacity)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/capacities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 68c022afb7f74007980cf23a76fd2fd0" \
-X GET http://localhost:8080/zstack/v1/primary-storage/capacities?primaryStorageUuids=c8fd0638491c4c4ea70762c51d8445b5&all=false
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuids (可选) | List | query | 区域UUID列表 |  | 0.6 |
| clusterUuids (可选) | List | query | 集群UUID列表 |  | 0.6 |
| primaryStorageUuids (可选) | List | query | 主存储UUID列表 |  | 0.6 |
| all (可选) | boolean | query | 当主存储UUID列表为空时，该项为真表示查询系统中所有的主存储。 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.73078528E8,
"totalPhysicalCapacity": 1.073741824E9,
"availablePhysicalCapacity": 9.73078528E8
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| totalCapacity | long |  | 0.6 |
| availableCapacity | long |  | 0.6 |
| totalPhysicalCapacity | long |  | 0.6 |
| availablePhysicalCapacity | long |  | 0.6 |
| success | boolean |  | 0.6 |
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
GetPrimaryStorageCapacityAction action = new GetPrimaryStorageCapacityAction();
action.primaryStorageUuids = asList("9e151bee519044c0b19bdfc12d8d24ab");
action.all = false;
action.sessionId = "79627053d567472eaed5de6b16fcdb91";
GetPrimaryStorageCapacityAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageCapacityAction action = GetPrimaryStorageCapacityAction()
action.primaryStorageUuids = [f78f7e2087ff437da395fb308db84300]
action.all = false
action.sessionId = "112ffe3fbad14be49c896feb9076dc10"
GetPrimaryStorageCapacityAction.Result res = action.call()
```

---

#### 刷新主存储容量(SyncPrimaryStorageCapacity)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/{primaryStorageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"syncPrimaryStorageCapacity": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncPrimaryStorageCapacity":{}}' \
http://localhost:8080/zstack/v1/primary-storage/36ad940fe805304b85ca8af209b044b5/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| primaryStorageUuid | String | url | 主存储UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"availableCapacity": 9.73078528E8,
"availablePhysicalCapacity": 9.73078528E8,
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"06b22ab47bb74d2d97dba43ccdde8b9a"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
SyncPrimaryStorageCapacityAction action = new SyncPrimaryStorageCapacityAction();
action.primaryStorageUuid = "42508a6dbeb24968b4fd7c7a1f4f6859";
action.sessionId = "bd1b393d64bd424c848cc2760c7aef0f";
SyncPrimaryStorageCapacityAction.Result res = action.call();
```

 Python SDK

```
SyncPrimaryStorageCapacityAction action = SyncPrimaryStorageCapacityAction()
action.primaryStorageUuid = "695578d15cc04f2a84585deab75d29c7"
action.sessionId = "fdead04edbc741f99c826afc6db003a9"
SyncPrimaryStorageCapacityAction.Result res = action.call()
```

---

#### 更改主存储状态(ChangePrimaryStorageState)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changePrimaryStorageState": {
"stateEvent": "Disabled"
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
-X PUT -d '{"changePrimaryStorageState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/primary-storage/2e9c3a048ce03f5db297da323061a0de/actions
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changePrimaryStorageState**结构中) | 主存储的目标状态 | enable disable maintain deleting | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Disabled",
"attachedClusterUuids": [
"408395dfdebb427e9453048436556a66"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
ChangePrimaryStorageStateAction action = new ChangePrimaryStorageStateAction();
action.uuid = "236d97d1752643018266bb4151d6a431";
action.stateEvent = "Disabled";
action.sessionId = "bf409a0349c44104ab3dbb77415847a0";
ChangePrimaryStorageStateAction.Result res = action.call();
```

 Python SDK

```
ChangePrimaryStorageStateAction action = ChangePrimaryStorageStateAction()
action.uuid = "5c612d1387af4d13b381db54c7307059"
action.stateEvent = "Disabled"
action.sessionId = "441b4bd8c5e54003b62af7e4c44db8c1"
ChangePrimaryStorageStateAction.Result res = action.call()
```

---

#### 更新主存储信息(UpdatePrimaryStorage)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updatePrimaryStorage": {
"name": "New PS1"
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
-X PUT -d '{"updatePrimaryStorage":{"name":"New PS1"}}' \
http://localhost:8080/zstack/v1/primary-storage/1ed3e2350ff736918ac97c2a4d7d2f6e/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updatePrimaryStorage**结构中) | 主存储的新名称 |  | 0.6 |
| description (可选) | String | body(包含在**updatePrimaryStorage**结构中) | 主存储的新详细描述 |  | 0.6 |
| url (可选) | String | body(包含在**updatePrimaryStorage**结构中) | 主存储的新地址 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "New PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"31d01fe839da465ca540292132b50209"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdatePrimaryStorageAction action = new UpdatePrimaryStorageAction();
action.uuid = "7253221c336c4510b97607943f3b1a3c";
action.name = "New PS1";
action.sessionId = "0f4cfa5daeb2408da149a88d99c90df4";
UpdatePrimaryStorageAction.Result res = action.call();
```



Python SDK

```
UpdatePrimaryStorageAction action = UpdatePrimaryStorageAction()
action.uuid = "e75ab68c9201465496fb27c9f6ff234b"
action.name = "New PS1"
action.sessionId = "b18ea5e60dcc445abfb3ffa28761c77e"
UpdatePrimaryStorageAction.Result res = action.call()
```

---

#### 清除主存储镜像缓存(CleanUpImageCacheOnPrimaryStorage)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"cleanUpImageCacheOnPrimaryStorage": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"cleanUpImageCacheOnPrimaryStorage":{}}' \
http://localhost:8080/zstack/v1/primary-storage/06e884ad8dbf3ed0bb061f4645b17075/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储的UUID，唯一标示该资源 |  | 0.6 |
| mode (可选) | String | body | 模式 | soft hard | 3.10.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### **API返回**

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
CleanUpImageCacheOnPrimaryStorageAction action = new CleanUpImageCacheOnPrimaryStorageAction();
action.uuid = "cb50319265d540e19cbf98137fcbca0e";
action.sessionId = "5dc546cb18cc46b885412564a39c512f";
CleanUpImageCacheOnPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
CleanUpImageCacheOnPrimaryStorageAction action = CleanUpImageCacheOnPrimaryStorageAction()
action.uuid = "cd35f62a64cd4daf9397f2e3bf5e910b"
action.sessionId = "e3ef197e97264195903b0fbdf52ae4c7"
CleanUpImageCacheOnPrimaryStorageAction.Result res = action.call()
```

---

#### 获取主存储分配策略清单(GetPrimaryStorageAllocatorStrategies)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/allocators/strategies
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c74da723ad8b47d387c211a4fcbc0697" \
-X GET http://localhost:8080/zstack/v1/primary-storage/allocators/strategies
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"primaryStorageAllocatorStrategies": [
"DefaultPrimaryStorageAllocationStrategy",
"LocalStorageAllocatorStrategy"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| strategies | List |  | 0.6 |
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
GetPrimaryStorageAllocatorStrategiesAction action = new GetPrimaryStorageAllocatorStrategiesAction();
action.sessionId = "ed5d5f6e4ac14b61a972469e88589b38";
GetPrimaryStorageAllocatorStrategiesAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageAllocatorStrategiesAction action = GetPrimaryStorageAllocatorStrategiesAction()
action.sessionId = "78a99afd143f4ffca767a27bf9b3af93"
GetPrimaryStorageAllocatorStrategiesAction.Result res = action.call()
```

---

#### 清空主存储垃圾(CleanUpStorageTrashOnPrimaryStorage)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/{uuid}/storagetrash/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "cleanUpStorageTrashOnPrimaryStorage": {
    "force": false
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
-X PUT -d '{"cleanUpStorageTrashOnPrimaryStorage":{"force":false}}'\
http://localhost:8080/zstack/v1/primary-storage/238259a845cb344bbb5ad7013f91d644/storagetrash/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储的UUID，唯一标示该资源 |  | 4.8.0 |
| force (可选) | boolean | body(包含在**cleanUpStorageTrashOnPrimaryStorage**结构中) | 是否强制清理主存储垃圾 |  | 4.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.8.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.8.0 |



##### **API返回**

 返回示例

```
{
  "result": {
    "pool-2": [
      "E92501AC0F30486282317C3412E27307",
      "876D1F78BB35405DBBFEC61226B13FDA"
    ],
    "pool-1": [
      "09f35ca96dfa4f7d8171a6583bbcc4fe",
      "7ae6b23ab27e48b7b7abd25c22f1f91a"
    ]
  },
  "total": 4
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| result | Map | 清理成功的存储垃圾的集合 | 4.8.0 |
| total | Integer | 清理成功的存储垃圾的数量 | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.8.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |



##### SDK示例

 Java SDK

```
CleanUpStorageTrashOnPrimaryStorageAction action = new CleanUpStorageTrashOnPrimaryStorageAction();
action.uuid = "238259a845cb344bbb5ad7013f91d644";
action.force = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CleanUpStorageTrashOnPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
CleanUpStorageTrashOnPrimaryStorageAction action = new CleanUpStorageTrashOnPrimaryStorageAction();
action.uuid = "238259a845cb344bbb5ad7013f91d644";
action.force = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CleanUpStorageTrashOnPrimaryStorageAction.Result res = action.call();
```

---

#### 获取主存储类型列表(GetPrimaryStorageTypes)



##### **API请求**

 URLs

```
GET zstack/v1/primary-storage/types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 4b39cdd6eaea4476bf9d93d42ddc4186" \
-X GET http://localhost:8080/zstack/v1/primary-storage/types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"primaryStorageTypes": [
"LocalStorage",
"NFS",
"SharedMountPoint",
"Ceph"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| types | List |  | 0.6 |
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
GetPrimaryStorageTypesAction action = new GetPrimaryStorageTypesAction();
action.sessionId = "1dccf587f1de4aa998b73bb0b85c3eae";
GetPrimaryStorageTypesAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageTypesAction action = GetPrimaryStorageTypesAction()
action.sessionId = "0090252c9cf641cc90bd1a3d93dfd6b6"
GetPrimaryStorageTypesAction.Result res = action.call()
```

---

#### 获取候选列表(GetPrimaryStorageCandidatesForVolumeMigration)



获取云盘迁移的目标主存储候选列表。

##### API请求

 URLs

```
GET zstack/v1/primary-storage/volumes/{volumeUuid}/migration-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 39b0ace2ecc0459c929c8e352ea906f2" \
-X GET http://localhost:8080/zstack/v1/primary-storage/volumes/073f14f2d6dc437b8114faa4223f0ce8/migration-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 2.2 |
| systemTags (可选) | List | query | 系统标签 |  | 2.2 |
| userTags (可选) | List | query | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "64776c6c7dfd46b091ec387d21b5adb0",
      "name": "PS-1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 2.2 |
| inventories | List | 详情参考[inventories] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| zoneUuid | String | 区域UUID | 2.2 |
| name | String | 资源名称 | 2.2 |
| url | String |  | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| totalCapacity | Long |  | 2.2 |
| availableCapacity | Long |  | 2.2 |
| totalPhysicalCapacity | Long |  | 2.2 |
| availablePhysicalCapacity | Long |  | 2.2 |
| systemUsedCapacity | Long |  | 2.2 |
| type | String |  | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| mountPath | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| attachedClusterUuids | List |  | 2.2 |



##### SDK示例

 Java SDK

```
GetPrimaryStorageCandidatesForVolumeMigrationAction action = new GetPrimaryStorageCandidatesForVolumeMigrationAction();
action.volumeUuid = "06b0f7d7098349b5ba336013aea319f5";
action.sessionId = "5869e8a6986b40c8be1ac3a520a6a9a1";
GetPrimaryStorageCandidatesForVolumeMigrationAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageCandidatesForVolumeMigrationAction action = GetPrimaryStorageCandidatesForVolumeMigrationAction()
action.volumeUuid = "8800d0ffad8f42d7911347ca0af8e224"
action.sessionId = "a1b986a4bb5b409ba84951d3a3c1ed54"
GetPrimaryStorageCandidatesForVolumeMigrationAction.Result res = action.call()
```

---

#### 获取跨存储迁移可选物理机列表(GetHostCandidatesForVmMigration)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/hosts/{vmInstanceUuid}/migration-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/hosts/73e5ee655c3d3ef7b9fc0f3a3b560270/migration-candidates?dstPrimaryStorageUuid=cc8db724e1b334568026ca38d5c27b0f
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.0.0 |
| dstPrimaryStorageUuid | String | query | 目的主存储UUID |  | 4.0.0 |
| limit (可选) | Integer | query | 获取物理机列表数量 |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "HOST-1",
      "uuid": "b72c8853294a3e08abe838c58a61efb9"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventories | List | 详情参考[inventories] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String |  | 4.0.0 |
| hypervisorType | String |  | 4.0.0 |
| state | String |  | 4.0.0 |
| status | String |  | 4.0.0 |
| totalCpuCapacity | Long |  | 4.0.0 |
| availableCpuCapacity | Long |  | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long |  | 4.0.0 |
| availableMemoryCapacity | Long |  | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
GetHostCandidatesForVmMigrationAction action = new GetHostCandidatesForVmMigrationAction();
action.vmInstanceUuid = "73e5ee655c3d3ef7b9fc0f3a3b560270";
action.dstPrimaryStorageUuid = "cc8db724e1b334568026ca38d5c27b0f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetHostCandidatesForVmMigrationAction.Result res = action.call();
```

 Python SDK

```
GetHostCandidatesForVmMigrationAction action = GetHostCandidatesForVmMigrationAction()
action.vmInstanceUuid = "73e5ee655c3d3ef7b9fc0f3a3b560270"
action.dstPrimaryStorageUuid = "cc8db724e1b334568026ca38d5c27b0f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetHostCandidatesForVmMigrationAction.Result res = action.call()
```

---

#### 跨主存储迁移云盘(PrimaryStorageMigrateVolume)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/volumes/{volumeUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "primaryStorageMigrateVolume": {
    "dstPrimaryStorageUuid": "aafceb95938e42a6be5475f19a92eec9"
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
-X PUT -d '{"primaryStorageMigrateVolume":{"dstPrimaryStorageUuid":"ed4370b338da37d8a537bfb738e736f2"}}' \
http://localhost:8080/zstack/v1/primary-storage/volumes/b6e9b22601f7319fadd329d065b0cd1b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 2.2 |
| dstPrimaryStorageUuid | String | body(包含在**primaryStorageMigrateVolume**结构中) | 目标主存储UUID |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5fa2d1c7adcd4963b1f9016075764fcb",
    "name": "test-volume",
    "primaryStorageUuid": "6ebc0be6faaa41f28874daa6076322bd",
    "vmInstanceUuid": "2c528326ddcf43dd9bdd1d80da7a15ef",
    "diskOfferingUuid": "2af3082d23444be9833c32c53ea2b1ed",
    "rootImageUuid": "254bdaf01a33407082d8afe540b76796",
    "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-5fa2d1c7adcd4963b1f9016075764fcb/5fa2d1c7adcd4963b1f9016075764fcb.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Oct 26, 2017 3:38:58 PM",
    "lastOpDate": "Oct 26, 2017 3:38:58 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventory | VolumeInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| primaryStorageUuid | String | 主存储UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| diskOfferingUuid | String | 云盘规格UUID | 2.2 |
| rootImageUuid | String |  | 2.2 |
| installPath | String |  | 2.2 |
| type | String |  | 2.2 |
| format | String |  | 2.2 |
| size | Long |  | 2.2 |
| actualSize | Long |  | 2.2 |
| deviceId | Integer |  | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| isShareable | Boolean |  | 2.2 |



##### SDK示例

 Java SDK

```
PrimaryStorageMigrateVolumeAction action = new PrimaryStorageMigrateVolumeAction();
action.volumeUuid = "af5d94f0f24c45f79280fc4661919b2c";
action.dstPrimaryStorageUuid = "e8d756d48e5d48a69f5bec6221ddbc79";
action.sessionId = "c186caf64d0043158b2c5ea9784697ab";
PrimaryStorageMigrateVolumeAction.Result res = action.call();
```

 Python SDK

```
PrimaryStorageMigrateVolumeAction action = PrimaryStorageMigrateVolumeAction()
action.volumeUuid = "7e170d744c014517b3b38f20111f400d"
action.dstPrimaryStorageUuid = "8c2cc857b81d4d75b404809e57e02deb"
action.sessionId = "ec12693efdf14d72b2a59de9c039870a"
PrimaryStorageMigrateVolumeAction.Result res = action.call()
```

---

#### 跨主存储迁移云主机(PrimaryStorageMigrateVm)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "primaryStorageMigrateVm": {
    "dstPrimaryStorageUuid": "21e2f323f0f73feca4269e4056497281",
    "dstHostUuid": "2208f64378cc3b5fa4a11609ca4ef524",
    "withDataVolumes": true,
    "withSnapshots": false,
    "downTime": 300,
    "bandwidth": 0
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
-X PUT -d '{"primaryStorageMigrateVm":{"dstPrimaryStorageUuid":"21e2f323f0f73feca4269e4056497281","dstHostUuid":"2208f64378cc3b5fa4a11609ca4ef524","withDataVolumes":true,"withSnapshots":false,"downTime":300,"bandwidth":0}}' \
http://localhost:8080/zstack/v1/vm-instances/332389a8b7453ccd85e625ef581694e9/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.1.0 |
| dstPrimaryStorageUuid | String | body(包含在**primaryStorageMigrateVm**结构中) | 目标主存储UUID |  | 3.1.0 |
| withDataVolumes (可选) | boolean | body(包含在**primaryStorageMigrateVm**结构中) | 迁移包含云盘 |  | 3.1.0 |
| withSnapshots (可选) | boolean | body(包含在**primaryStorageMigrateVm**结构中) | 迁移包含快照 |  | 3.1.0 |
| dstHostUuid (可选) | String | body(包含在**primaryStorageMigrateVm**结构中) |  |  | 4.0.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |
| strategy (可选) | String | body(包含在**primaryStorageMigrateVm**结构中) |  |  | 4.6.0 |
| downTime (可选) | Integer | body(包含在**primaryStorageMigrateVm**结构中) | 迁移停机时间 |  | 4.6.21 |
| bandwidth (可选) | long | body(包含在**primaryStorageMigrateVm**结构中) | 迁移存储限速，单位MB/s |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f483af349d39312c8078d142c40fb721",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "b7280443258337bb9e8d2abf4a014644",
    "clusterUuid": "a2c0ace5be2d35b5a365067a0127b377",
    "imageUuid": "14fb13b692e837dfa31d75ffc02d4d4d",
    "hostUuid": "f0690203b1463867bcb2f5a48a1fa91a",
    "lastHostUuid": "655acef664af39e9b6b7fec0d4de56c0",
    "instanceOfferingUuid": "772a66f21ef23ba7a69ad292e4489ebb",
    "rootVolumeUuid": "65b10a950f1336f48b770f98b25176eb",
    "platform": "Linux",
    "defaultL3NetworkUuid": "80c8af5ff0a135e18a3e7a4d2223ebd2",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8589934592,
    "cpuNum": 1,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 9:20:57 AM",
    "lastOpDate": "Nov 14, 2017 9:20:57 AM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "b16455db309330289acb58edbfabd4b7",
        "vmInstanceUuid": "f483af349d39312c8078d142c40fb721",
        "usedIpUuid": "27787a727c143a7aada42e6c3b111887",
        "l3NetworkUuid": "80c8af5ff0a135e18a3e7a4d2223ebd2",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0,
        "state": "enable",
        "createDate": "Nov 14, 2017 9:20:57 AM",
        "lastOpDate": "Nov 14, 2017 9:20:57 AM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "65b10a950f1336f48b770f98b25176eb",
        "name": "Root-Volume-For-VM-f483af349d39312c8078d142c40fb721",
        "primaryStorageUuid": "55245463f914331c954909475279c3b0",
        "vmInstanceUuid": "f483af349d39312c8078d142c40fb721",
        "diskOfferingUuid": "b2cb37282f5034fb808dff68dc18db9e",
        "rootImageUuid": "14fb13b692e837dfa31d75ffc02d4d4d",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-65b10a950f1336f48b770f98b25176eb/65b10a950f1336f48b770f98b25176eb.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 107374182400,
        "actualSize": 21474836480,
        "deviceId": 0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 9:20:57 AM",
        "lastOpDate": "Nov 14, 2017 9:20:57 AM"
      },
      {
        "uuid": "97bf368f3bde3490b0c08d37ac8bc747",
        "name": "Data-Volume-For-VM-f483af349d39312c8078d142c40fb721",
        "primaryStorageUuid": "4df2eddd6ac1307ebbff27d0044f72e9",
        "vmInstanceUuid": "f483af349d39312c8078d142c40fb721",
        "diskOfferingUuid": "06ea8f5a59843b8aa4d18d9c6d2b7a1d",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-97bf368f3bde3490b0c08d37ac8bc747/97bf368f3bde3490b0c08d37ac8bc747.qcow2",
        "type": "Data",
        "format": "qcow2",
        "size": 536870912000,
        "actualSize": 107374182400,
        "deviceId": 1,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 9:20:57 AM",
        "lastOpDate": "Nov 14, 2017 9:20:57 AM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| zoneUuid | String | 区域UUID | 3.1.0 |
| clusterUuid | String | 集群UUID | 3.1.0 |
| imageUuid | String | 镜像UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| lastHostUuid | String |  | 3.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 3.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 3.1.0 |
| platform | String |  | 3.1.0 |
| architecture | String |  | 4.6.21 |
| defaultL3NetworkUuid | String |  | 3.1.0 |
| type | String |  | 3.1.0 |
| hypervisorType | String |  | 3.1.0 |
| memorySize | Long |  | 3.1.0 |
| cpuNum | Integer |  | 3.1.0 |
| cpuSpeed | Long |  | 3.1.0 |
| allocatorStrategy | String |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| state | String |  | 3.1.0 |
| guestOsType | String |  | 4.6.21 |
| vmNics | List | 详情参考[vmNics] | 3.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 3.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.6.21 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.1.0 |
| ip | String |  | 3.1.0 |
| mac | String |  | 3.1.0 |
| netmask | String |  | 3.1.0 |
| gateway | String |  | 3.1.0 |
| metaData | String |  | 3.1.0 |
| deviceId | Integer |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| usedIps | List | 详情参考[usedIps] | 4.6.21 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| ipRangeUuid | String | IP段UUID | 4.6.21 |
| l3NetworkUuid | String | 三层网络UUID | 4.6.21 |
| ipVersion | Integer | IP协议号 | 4.6.21 |
| ip | String | IP地址 | 4.6.21 |
| netmask | String | 网络掩码 | 4.6.21 |
| gateway | String | 网关地址 | 4.6.21 |
| usedFor | String |  | 4.6.21 |
| ipInLong | long |  | 4.6.21 |
| vmNicUuid | String | 云主机网卡UUID | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| primaryStorageUuid | String | 主存储UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 3.1.0 |
| rootImageUuid | String |  | 3.1.0 |
| installPath | String |  | 3.1.0 |
| type | String |  | 3.1.0 |
| format | String |  | 3.1.0 |
| size | Long |  | 3.1.0 |
| actualSize | Long |  | 3.1.0 |
| deviceId | Integer |  | 3.1.0 |
| state | String |  | 3.1.0 |
| status | String |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| isShareable | Boolean |  | 3.1.0 |

  #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| vmInstanceUuid | String | 云主机UUID | 4.6.21 |
| deviceId | Integer |  | 4.6.21 |
| isoUuid | String |  | 4.6.21 |
| isoInstallPath | String |  | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| description | String | 资源的详细描述 | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |



##### SDK示例

 Java SDK

```
PrimaryStorageMigrateVmAction action = new PrimaryStorageMigrateVmAction();
action.vmInstanceUuid = "332389a8b7453ccd85e625ef581694e9";
action.dstPrimaryStorageUuid = "21e2f323f0f73feca4269e4056497281";
action.dstHostUuid = "2208f64378cc3b5fa4a11609ca4ef524";
action.withDataVolumes = true;
action.withSnapshots = false;
action.downTime = 300;
action.bandwidth = 0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PrimaryStorageMigrateVmAction.Result res = action.call();
```

 Python SDK

```
PrimaryStorageMigrateVmAction action = PrimaryStorageMigrateVmAction()
action.vmInstanceUuid = "332389a8b7453ccd85e625ef581694e9"
action.dstPrimaryStorageUuid = "21e2f323f0f73feca4269e4056497281"
action.dstHostUuid = "2208f64378cc3b5fa4a11609ca4ef524"
action.withDataVolumes = true
action.withSnapshots = false
action.downTime = 300
action.bandwidth = 0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PrimaryStorageMigrateVmAction.Result res = action.call()
```

---

#### 获取存储迁移候选列表(GetPrimaryStorageCandidatesForVmMigration)



获取跨主存储迁移云主机候选主存储列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/storage-migration-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/2ac3852f503a339f857c9381d881bd91/storage-migration-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.1.0 |
| withDataVolumes (可选) | boolean | body(包含在**primaryStorageMigrateVm**结构中) |  |  | 3.7.0 |
| migrateStorageOnly(可选) | boolean | body(包含在**primaryStorageMigrateVm**结构中) | 是否仅迁移存储 |  | 4.4.0 |
| systemTags (可选) | List | query |  |  | 3.1.0 |
| userTags (可选) | List | query |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "19e075320ee9327182fcb82a8b0a078b",
      "name": "PS-1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| zoneUuid | String | 区域UUID | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| url | String |  | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| totalCapacity | Long |  | 3.1.0 |
| availableCapacity | Long |  | 3.1.0 |
| totalPhysicalCapacity | Long |  | 3.1.0 |
| availablePhysicalCapacity | Long |  | 3.1.0 |
| systemUsedCapacity | Long |  | 3.1.0 |
| type | String |  | 3.1.0 |
| state | String |  | 3.1.0 |
| status | String |  | 3.1.0 |
| mountPath | String |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| attachedClusterUuids | List |  | 3.1.0 |



##### SDK示例

 Java SDK

```
GetPrimaryStorageCandidatesForVmMigrationAction action = new GetPrimaryStorageCandidatesForVmMigrationAction();
action.vmInstanceUuid = "2ac3852f503a339f857c9381d881bd91";
action.withDataVolumes = true;
action.migrateStorageOnly = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPrimaryStorageCandidatesForVmMigrationAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageCandidatesForVmMigrationAction action = GetPrimaryStorageCandidatesForVmMigrationAction()
action.vmInstanceUuid = "2ac3852f503a339f857c9381d881bd91"
action.withDataVolumes = true
action.migrateStorageOnly = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPrimaryStorageCandidatesForVmMigrationAction.Result res = action.call()
```

---

#### 获取主存储的License信息(GetPrimaryStorageLicenseInfo)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/{uuid}/license
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/9b624d6e4ca53a4aa10bfc341281d0ef/license
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 主存储UUID |  | 3.6.0 |
| systemTags (可选) | List | query |  |  | 3.6.0 |
| userTags (可选) | List | query |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "uuid": "28d49729434c388b987efbb84b5b0ee6",
  "name": "Ceph",
  "expireTime": ""
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String |  | 3.6.0 |
| name | String |  | 3.6.0 |
| expireTime | String |  | 3.6.0 |
| success | boolean |  | 3.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |



##### SDK示例

 Java SDK

```
GetPrimaryStorageLicenseInfoAction action = new GetPrimaryStorageLicenseInfoAction();
action.uuid = "9b624d6e4ca53a4aa10bfc341281d0ef";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPrimaryStorageLicenseInfoAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageLicenseInfoAction action = GetPrimaryStorageLicenseInfoAction()
action.uuid = "9b624d6e4ca53a4aa10bfc341281d0ef"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPrimaryStorageLicenseInfoAction.Result res = action.call()
```

---

#### 获取主存储预测容量报告(GetPrimaryStorageUsageReport)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/{primaryStorageUuid}/usage/report
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/primary-storage/902707d77b6e36179ee0117e6614e52f/usage/report?

```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| primaryStorageUuid | String | url | 主存储UUID |  | 4.7.21 |
| uris (可选) | List | query | 存储协议 |  | 4.7.21 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "uriUsageForecast": {},
  "usageReport": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| uriUsageForecast | Map | 详情参考[uriUsageForecast] | 4.7.21 |
| usageReport | UsageReport | 详情参考[usagereport] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #uriUsageForecast

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| usedPhysicalCapacitiesForecast | List |  | 4.7.21 |
| UsedPhysicalCapacitiesHistory | List |  | 4.7.21 |
| TotalPhysicalCapacitiesHistory | List |  | 4.7.21 |
| startTime | Long |  | 4.7.21 |
| interval | Long |  | 4.7.21 |

 #usageReport

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| usedPhysicalCapacitiesForecast | List |  | 4.7.21 |
| UsedPhysicalCapacitiesHistory | List |  | 4.7.21 |
| TotalPhysicalCapacitiesHistory | List |  | 4.7.21 |
| startTime | Long |  | 4.7.21 |
| interval | Long |  | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |



##### SDK示例

 Java SDK

```
GetPrimaryStorageLicenseInfoAction action = new GetPrimaryStorageLicenseInfoAction();
action.uuid = "9b624d6e4ca53a4aa10bfc341281d0ef";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPrimaryStorageLicenseInfoAction.Result res = action.call();
```

 Python SDK

```
GetPrimaryStorageLicenseInfoAction action = GetPrimaryStorageLicenseInfoAction()
action.uuid = "9b624d6e4ca53a4aa10bfc341281d0ef"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPrimaryStorageLicenseInfoAction.Result res = action.call()
```

---

#### 本地存储相关接口

---

#### 添加本地存储为主存储(AddLocalPrimaryStorage)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/local-storage
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"url": "/Cloud_ps",
"name": "PS1",
"zoneUuid": "a71cbd7404e9474c81ed45d167b7eab8"
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
-X POST -d '{"params":{"url":"/Cloud_ps","name":"PS1","zoneUuid":"3b9a66322185343e9068b2bfd185b690"}}' \
http://localhost:8080/zstack/v1/primary-storage/local-storage
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在`params`结构中) | 本地存储的路径 |  | 0.6 |
| name | String | body(包含在`params`结构中) | 本地存储主存储名称 |  | 0.6 |
| description (可选) | String | body(包含在`params`结构中) | 本地存储主存储的详细描述 |  | 0.6 |
| type (可选) | String | body(包含在`params`结构中) | 类型为 LocalStorage |  | 0.6 |
| zoneUuid | String | body(包含在`params`结构中) | 区域UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在`params`结构中) | 资源UUID。若指定，本地存储主存储会使用该字段值作为UUID。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"562116d368c8467c95c53321757538dc"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AddLocalPrimaryStorageAction action = new AddLocalPrimaryStorageAction();
action.url = "/Cloud_ps";
action.name = "PS1";
action.zoneUuid = "e9762e3b848e4d0a8f36f1b2fe888b14";
action.sessionId = "01b750dce9e94191abd9216fe8c5e77b";
AddLocalPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddLocalPrimaryStorageAction action = AddLocalPrimaryStorageAction()
action.url = "/Cloud_ps"
action.name = "PS1"
action.zoneUuid = "bd54c662683b4144b33a72a357064387"
action.sessionId = "b6dd1fd80b7144adbf23d4b1089d978d"
AddLocalPrimaryStorageAction.Result res = action.call()
```

---

#### 查询本地存储资源引用(QueryLocalStorageResourceRef)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/local-storage/resource-refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7642f366a18e41d6b9144fa25b4e32fe" \
-X GET http://localhost:8080/zstack/v1/primary-storage/local-storage/resource-refs?q=uuid=18b4bc6daf0542b09b6756ddce3f87cd
```



可查询字段

运行CLI命令行工具，输入`QueryLocalStorageResourceRef`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

API返回 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

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
QueryLocalStorageResourceRefAction action = new QueryLocalStorageResourceRefAction();
action.conditions = asList("uuid=46e9ff5cd91a404382107d52a1947614");
action.sessionId = "aaaf8ed4fe224287afff3c38083279a9";
QueryLocalStorageResourceRefAction.Result res = action.call();

```

 Python SDK

```
QueryLocalStorageResourceRefAction action = QueryLocalStorageResourceRefAction()
action.conditions = ["uuid=8249a62afd0e440981775795244ab276"]
action.sessionId = "62b361c83e6a4685b13f629f3d402ed7"
QueryLocalStorageResourceRefAction.Result res = action.call()
```

---

#### 迁移本地存储上存放的云盘(LocalStorageMigrateVolume)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/local-storage/volumes/{volumeUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"localStorageMigrateVolume": {
"destHostUuid": "511e02b9b8c9427c9fbbac55b8c7ec62"
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
-X PUT -d '{"localStorageMigrateVolume":{"destHostUuid":"58118467f70733cdb19f39bd07868384"}}' \
http://localhost:8080/zstack/v1/primary-storage/local-storage/volumes/f15736d2850536f3a6ea1d68f7c89b7f/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 0.6 |
| destHostUuid | String | body(包含在**localStorageMigrateVolume**结构中) | 目标主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"resourceUuid": "bad5e950cf014275bf9ba6e4cfe78a97",
"primaryStorageUuid": "81d893539a6b4ce7b9957c7a5d6c5df8",
"hostUuid": "9d250b88ae90449db567cfa18a75fecc",
"size": 2.4035328E7
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LocalStorageResourceRefInventory | 详情参考[inventory] | 0.6 |

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
| resourceUuid | String |  | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| size | Long |  | 0.6 |
| resourceType | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
LocalStorageMigrateVolumeAction action = new LocalStorageMigrateVolumeAction();
action.volumeUuid = "1d4825d4845c4bba81033de367f0a03c";
action.destHostUuid = "e82e6f37aa3b472ab36b32962b2ba44c";
action.sessionId = "74b8b0a565c542e8bc146d7d9c06c764";
LocalStorageMigrateVolumeAction.Result res = action.call();
```

 Python SDK

```
LocalStorageMigrateVolumeAction action = LocalStorageMigrateVolumeAction()
action.volumeUuid = "85f9e2cb4d2640b3a5fe4ec74ebccd22"
action.destHostUuid = "f841732d6c604d12bf2cbbb458f09bee"
action.sessionId = "535bc181a3aa41a0989ac795f58ba664"
LocalStorageMigrateVolumeAction.Result res = action.call()
```

---

#### 获取主机本地存储容量(GetLocalStorageHostDiskCapacity)



##### **API请求**

 URLs

```
GET zstack/v1/primary-storage/local-storage/{primaryStorageUuid}/capacities
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c5115e16f4a44fb6a66bba611f888eb3" \
-X GET http://localhost:8080/zstack/v1/primary-storage/local-storage/b839f809d5954d47aecf0b0d56fb98fa/capacities?hostUuid=b3a59363895143cf847518a0badd3ea3
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostUuid (可选) | String | query | 物理机UUID |  | 0.6 |
| primaryStorageUuid | String | url | 主存储UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventories": [
    {
"hostUuid": "02b36a53204d496290c4f2f8b31a7575",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.73078528E8,
"totalPhysicalCapacity": 1.073741824E9,
"availablePhysicalCapacity": 9.73078528E8
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
| hostUuid | String | 物理机UUID | 0.6 |
| totalCapacity | long |  | 0.6 |
| availableCapacity | long |  | 0.6 |
| totalPhysicalCapacity | long |  | 0.6 |
| availablePhysicalCapacity | long |  | 0.6 |



##### SDK示例

 Java SDK

```
GetLocalStorageHostDiskCapacityAction action = new GetLocalStorageHostDiskCapacityAction();
action.hostUuid = "e63ea47c5aa14106a6abd89ddc8f43de";
action.primaryStorageUuid = "a193ec73e0824726bc30fa88f7f906cc";
action.sessionId = "0d48347e758c4089a85b586f6d2c0953";
GetLocalStorageHostDiskCapacityAction.Result res = action.call();
```

 Python SDK

```
GetLocalStorageHostDiskCapacityAction action = GetLocalStorageHostDiskCapacityAction()
action.hostUuid = "fbaace8b570a4be6998dc376b95dcdf1"
action.primaryStorageUuid = "71d63b28517243538d83c326bc21423a"
action.sessionId = "cc34ee291d8a4d7bad091c4a66d97094"
GetLocalStorageHostDiskCapacityAction.Result res = action.call()
```

---

#### 获取迁移本地存储物理机(LocalStorageGetVolumeMigratableHosts)



检查哪些物理机可以迁移本地存储上存放的云盘。

##### API请求

 URLs

```
GET zstack/v1/volumes/{volumeUuid}/migration-target-hosts
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 47c467d5c9944985bfbfead8d44cfec2" \
-X GET http://localhost:8080/zstack/v1/volumes/ef7fe562459146d6bb13078821d451a8/migration-target-hosts?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 0.6 |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |



##### **API返回**

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
LocalStorageGetVolumeMigratableHostsAction action = new LocalStorageGetVolumeMigratableHostsAction();
action.volumeUuid = "dd15184d915c422686da18415b194ce9";
action.sessionId = "1ce8dcd82213420ba5aea5c488834eba";
LocalStorageGetVolumeMigratableHostsAction.Result res = action.call();
```

 Python SDK

```
LocalStorageGetVolumeMigratableHostsAction action = LocalStorageGetVolumeMigratableHostsAction()
action.volumeUuid = "19a3d12dc45540f997ac0c6ad0cfb8d7"
action.sessionId = "e6d54fe5d8424c45b723f65a1136d23e"
LocalStorageGetVolumeMigratableHostsAction.Result res = action.call()
```

---

#### NFS主存储相关接口

---

#### 添加NFS主存储(AddNfsPrimaryStorage)





##### API请求

 URLs

```
POST zstack/v1/primary-storage/nfs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"url": "192.168.0.25:/share/nfs",
"name": "PS1",
"type": "NFS",
"zoneUuid": "4539fbc9b2704ef0a9ee7ee30af7c64e"
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
-X POST -d '{"params":{"url":"192.168.0.25:/share/nfs","name":"PS1","type":"NFS","zoneUuid":"9ce5da0042333fcaa16e0f7ff20aba13"}}' \
http://localhost:8080/zstack/v1/primary-storage/nfs
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在params结构中) | NFS 公开地址，格式为 nfs-host:/path/to/export |  | 0.6 |
| name | String | body(包含在params结构中) | NFS 主存储名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | NFS 主存储的详细描述 |  | 0.6 |
| type (可选) | String | body(包含在params结构中) | 类型为 NFS |  | 0.6 |
| zoneUuid | String | body(包含在params结构中) | 区域UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID。若指定，NFS 主存储会使用该字段值作为UUID。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "PS1",
"url": "/Cloud_ps",
"type": "LocalStorage",
"state": "Enabled",
"status": "Connected",
"attachedClusterUuids": [
"d949efe47c4141508073e2d77f005211"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AddNfsPrimaryStorageAction action = new AddNfsPrimaryStorageAction();
action.url = "192.168.0.25:/share/nfs";
action.name = "PS1";
action.type = "NFS";
action.zoneUuid = "af419954499e4b92b30a9a1467ef83a8";
action.sessionId = "03c711c7f3c84733a032d86796e7bdee";
AddNfsPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddNfsPrimaryStorageAction action = AddNfsPrimaryStorageAction()
action.url = "192.168.0.25:/share/nfs"
action.name = "PS1"
action.type = "NFS"
action.zoneUuid = "57d530e766014126861c6873ea6fbc7d"
action.sessionId = "4b9d819194df4e57821921721a856e2d"
AddNfsPrimaryStorageAction.Result res = action.call()
```

---

#### Shared Mount Point主存储相关接口

---

#### 添加一个共享挂载点的主存储(AddSharedMountPointPrimaryStorage)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/smp
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "/smp_mountpoint",
    "name": "smp",
    "type": "SharedMountPoint",
    "zoneUuid": "f0e339a95f5c4e8a913737160c20548d"
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
-X POST -d '{"params":{"url":"/smp_mountpoint","name":"smp","type":"SharedMountPoint","zoneUuid":"80396633969c3d3d92938132c793b1ca"}}' \
http://localhost:8080/zstack/v1/primary-storage/smp
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | 共享挂载主存储所在的本地路径 |  | 0.6 |
| name | String | body(包含在**params**结构中) | 共享挂载主存储的名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 共享挂载主存储的详细描述 |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) | 主存储的类型，应为SharedMountPoint |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 共享挂载主存储的uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "PS1",
    "url": "/Cloud_ps",
    "type": "SharedMountPoint",
    "state": "Enabled",
    "status": "Connected",
    "attachedClusterUuids": [
      "50028186764548f1b5b49379acaddcda"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AddSharedMountPointPrimaryStorageAction action = new AddSharedMountPointPrimaryStorageAction();
action.url = "/smp_mountpoint";
action.name = "smp";
action.type = "SharedMountPoint";
action.zoneUuid = "8c54cbec38cb4704b3eb9703a8589637";
action.sessionId = "bb400831e7ce4ca19dca6469845770be";
AddSharedMountPointPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddSharedMountPointPrimaryStorageAction action = AddSharedMountPointPrimaryStorageAction()
action.url = "/smp_mountpoint"
action.name = "smp"
action.type = "SharedMountPoint"
action.zoneUuid = "7fa8ff29d2db43b783c36800990bf6d8"
action.sessionId = "26ab143d25144285b1bde8752b761bf9"
AddSharedMountPointPrimaryStorageAction.Result res = action.call()
```

---

#### Ceph主存储相关接口

---

#### 添加Ceph主存储(AddCephPrimaryStorage)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/ceph
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "monUrls": [
      "root:password@localhost/?monPort\u003d7777"
    ],
    "rootVolumePoolName": "zs-images",
    "dataVolumePoolName": "zs-data-volume",
    "imageCachePoolName": "zs-image-cache",
    "name": "My Ceph Primary Storage",
    "zoneUuid": "d42197a462c34a44989bdf38d5aa2424"
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
-X POST -d '{"params":{"monUrls":["root:password@localhost/?monPort=7777"],"rootVolumePoolName":"zs-images","dataVolumePoolName":"zs-data-volume","imageCachePoolName":"zs-image-cache","name":"My Ceph Primary Storage","zoneUuid":"251a3dffccaf39fc8d190eedcf4395bf"}}' \
http://localhost:8080/zstack/v1/primary-storage/ceph
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| monUrls | List | body(包含在**params**结构中) | Ceph mon 的地址列表 |  | 0.6 |
| rootVolumePoolName (可选) | String | body(包含在**params**结构中) | 指定 Root Volume 可使用的 Ceph pool 名字 |  | 0.6 |
| dataVolumePoolName (可选) | String | body(包含在**params**结构中) | 指定 Data Volume 可使用的 Ceph pool 名字 |  | 0.6 |
| imageCachePoolName (可选) | String | body(包含在**params**结构中) | 指定镜像缓存可使用的 Ceph pool 名字 |  | 0.6 |
| url | String | body(包含在**params**结构中) | 未使用 |  | 0.6 |
| name | String | body(包含在**params**结构中) | Ceph 主存储的名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | Ceph 主存储的详细描述 |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) | Ceph 主存储的类型，此处为 Ceph |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，Ceph 主存储会使用该字段值作为UUID。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`ceph::manufacturer::Platform`
  - 例如：`ceph::manufacturer::xsky`
- 例如：`ceph::manufacturer::xsky`
  - 选项格式为：`ceph::thirdPartyPlatform::TOKEN`
  - 例如：`ceph::thirdPartyPlatform::68b329da9893e34099c7d8ad5cb9c940`
- 例如：`ceph::thirdPartyPlatform::68b329da9893e34099c7d8ad5cb9c940`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Ceph-1",
    "url": "not used",
    "type": "Ceph",
    "state": "Enabled",
    "status": "Connected",
    "attachedClusterUuids": [
      "2d8583d86bd1472e8ec0e04e26ea273f"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AddCephPrimaryStorageAction action = new AddCephPrimaryStorageAction();
action.monUrls = asList("root:password@localhost/?monPort=7777");
action.rootVolumePoolName = "zs-images";
action.dataVolumePoolName = "zs-data-volume";
action.imageCachePoolName = "zs-image-cache";
action.name = "My Ceph Primary Storage";
action.zoneUuid = "88b49879acd34e11afa5bb3ea9164d5a";
action.sessionId = "33a01ee65ac64450940359dc3181f9b1";
AddCephPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddCephPrimaryStorageAction action = AddCephPrimaryStorageAction()
action.monUrls = [root:password@localhost/?monPort=7777]
action.rootVolumePoolName = "zs-images"
action.dataVolumePoolName = "zs-data-volume"
action.imageCachePoolName = "zs-image-cache"
action.name = "My Ceph Primary Storage"
action.zoneUuid = "0f05052514554462b437f9cfa272f57f"
action.sessionId = "cb3d5ecb63634ca093ea223c55e6a30a"
AddCephPrimaryStorageAction.Result res = action.call()
```

---

#### 查询Ceph主存储(QueryCephPrimaryStorage)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/ceph
GET zstack/v1/primary-storage/ceph/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 9b17423dbac84ff4ace2e0d5f4d9e0d2" \
-X GET http://localhost:8080/zstack/v1/primary-storage/ceph?q=uuid=c7b3cbd9ae3e44bb9536728191761cb3
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c0e6df86e0b34164b3e0471d7b0cdcb4" \
-X GET http://localhost:8080/zstack/v1/primary-storage/ceph/1ffb7b09c405477b95563abfcad506a0
```



可查询字段

运行CLI命令行工具，输入`QueryCephPrimaryStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "Ceph-1",
      "url": "not used",
      "type": "Ceph",
      "state": "Enabled",
      "status": "Connected",
      "attachedClusterUuids": [
        "1b70bb2e338f4a278b9efadda42ad26f"
      ]
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
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryCephPrimaryStorageAction action = new QueryCephPrimaryStorageAction();
action.conditions = asList("uuid=d351d433b5974116a4c9649ef5b89e64");
action.sessionId = "172c3d6b977b4cbfbd401ace20ad0442";
QueryCephPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
QueryCephPrimaryStorageAction action = QueryCephPrimaryStorageAction()
action.conditions = ["uuid=aa79df396a4943f8b9066c4d8057565d"]
action.sessionId = "0aca367c9e7946d29a63044684d5dd71"
QueryCephPrimaryStorageAction.Result res = action.call()
```

---

#### 为Ceph主存储添加mon节点(AddMonToCephPrimaryStorage)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/ceph/{uuid}/mons
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"monUrls": [
"10.0.1.3"
    ]
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
-X POST -d '{"params":{"monUrls":["10.0.1.3"]}}' \
http://localhost:8080/zstack/v1/primary-storage/ceph/6496e4b29793368dbacf388d83446acc/mons
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | Ceph 主存储的UUID |  | 0.6 |
| monUrls | List | body(包含在**params**结构中) | mon 节点地址列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
AddMonToCephPrimaryStorageAction action = new AddMonToCephPrimaryStorageAction();
action.uuid = "d0e3946e312a40c6af85da9163ac2519";
action.monUrls = asList("10.0.1.3");
action.sessionId = "6033eea9a2514c078c7af2a709ead405";
AddMonToCephPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddMonToCephPrimaryStorageAction action = AddMonToCephPrimaryStorageAction()
action.uuid = "6b631b40a3fa434785a8b0bd49a3f199"
action.monUrls = [10.0.1.3]
action.sessionId = "c455c88362f84aa7acd07bd5f6d3a4d3"
AddMonToCephPrimaryStorageAction.Result res = action.call()
```

---

#### 从Ceph主存储删除mon节点(RemoveMonFromCephPrimaryStorage)



##### API请求

 URLs

```
DELETE/v1/primary-storage/ceph/{uuid}/mons?monHostnames={monHostnames}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b57c6816e9b64ae881a356f9308bb6c7" \
-X DELETE http://localhost:8080/zstack/v1/primary-storage/ceph/31db2011f3944c85ae24a7ca607302e5/mons?monHostnames=10.0.1.2
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | Ceph 主存储的UUID |  | 0.6 |
| monHostnames | List | body | mon 节点名字列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"mons": [
      {
"monAddr": "10.0.1.2",
"monUuid": "c72a3fc6e06649de811bf90ba8c9c574"
      }
    ],
"name": "My Ceph Primary Storage",
"description": "Public Ceph Primary Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:21:07 PM",
"lastOpDate": "Jun 7, 2017 9:21:07 PM",
"attachedClusterUuids": [
"c0f667d99bfc41c1a133528a2089a9a7"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CephPrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| fsid | String |  | 0.6 |
| rootVolumePoolName | String |  | 0.6 |
| dataVolumePoolName | String |  | 0.6 |
| imageCachePoolName | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |
| mons | List | 详情参考[mons] | 0.6 |

 #mons

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostname | String |  | 0.6 |
| monPort | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| monAddr | String |  | 0.6 |
| sshUsername | String |  | 0.6 |
| sshPassword | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| status | String |  | 0.6 |
| monUuid | String |  | 0.6 |



##### SDK示例

 Java SDK

```
RemoveMonFromCephPrimaryStorageAction action = new RemoveMonFromCephPrimaryStorageAction();
action.uuid = "05aa4826fdbd4021b72e4d9a5db67bbc";
action.monHostnames = asList("10.0.1.2");
action.sessionId = "2412a720a3bb4992887979298217b300";
RemoveMonFromCephPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
RemoveMonFromCephPrimaryStorageAction action = RemoveMonFromCephPrimaryStorageAction()
action.uuid = "fb3dca5509154ca48698f374794f4d93"
action.monHostnames = [10.0.1.2]
action.sessionId = "9eb682deaa894cea80e1608056492948"
RemoveMonFromCephPrimaryStorageAction.Result res = action.call()
```

---

#### 更新Ceph主存储mon节点(UpdateCephPrimaryStorageMon)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/ceph/mons/{monUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateCephPrimaryStorageMon": {
"hostname": "10.0.1.4"
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
-X PUT -d '{"updateCephPrimaryStorageMon":{"hostname":"10.0.1.4"}}' \
http://localhost:8080/zstack/v1/primary-storage/ceph/mons/cda8b731b2e23b8eb1081dec0f7a0a60/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| monUuid | String | url | mon节点UUID |  | 0.6 |
| hostname (可选) | String | body(包含在**updateCephPrimaryStorageMon**结构中) | mon节点新主机IP地址 |  | 0.6 |
| sshUsername (可选) | String | body(包含在**updateCephPrimaryStorageMon**结构中) | mon节点主机 ssh 用户名 |  | 0.6 |
| sshPassword (可选) | String | body(包含在**updateCephPrimaryStorageMon**结构中) | mon节点主机 ssh 用户密码 |  | 0.6 |
| sshPort (可选) | Integer | body(包含在**updateCephPrimaryStorageMon**结构中) | mon节点主机 ssh 端口 |  | 0.6 |
| monPort (可选) | Integer | body(包含在**updateCephPrimaryStorageMon**结构中) | mon的新端口 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"mons": [
      {
"monAddr": "10.0.1.4",
"monUuid": "d557e48870b04ef699509d2998084bdb"
      }
    ],
"name": "My Ceph Primary Storage",
"description": "Public Ceph Primary Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:21:22 PM",
"lastOpDate": "Jun 7, 2017 9:21:22 PM",
"attachedClusterUuids": [
"3fa1f7c2bbb544e1a04ba9f9da935abe"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CephPrimaryStorageInventory | 详情参考[inventory] | 0.6 |

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
| fsid | String |  | 0.6 |
| rootVolumePoolName | String |  | 0.6 |
| dataVolumePoolName | String |  | 0.6 |
| imageCachePoolName | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |
| mons | List | 详情参考[mons] | 0.6 |

 #mons

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostname | String |  | 0.6 |
| monPort | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| monAddr | String |  | 0.6 |
| sshUsername | String |  | 0.6 |
| sshPassword | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| status | String |  | 0.6 |
| monUuid | String |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateCephPrimaryStorageMonAction action = new UpdateCephPrimaryStorageMonAction();
action.monUuid = "3341eaef160045d6b6fd085a22a3c69f";
action.hostname = "10.0.1.4";
action.sessionId = "359aceecda5e478e81d4eaea9e86bca8";
UpdateCephPrimaryStorageMonAction.Result res = action.call();

```

 Python SDK

```
UpdateCephPrimaryStorageMonAction action = UpdateCephPrimaryStorageMonAction()
action.monUuid = "70bc5237403848f6b5b6a60079c3ab91"
action.hostname = "10.0.1.4"
action.sessionId = "b1737cdb77c4420ba72aab66c4438521"
UpdateCephPrimaryStorageMonAction.Result res = action.call()
```

---

#### 添加Ceph主存储池(AddCephPrimaryStoragePool)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/ceph/{primaryStorageUuid}/pools
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "poolName": "highPerformance",
    "aliasName": "alias pool name",
    "description": "for high performance data volumes",
    "isCreate": true
    "type": "ROOT
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
-X POST -d '{"params":{"poolName":"highPerformance","aliasName":"alias pool name","description":"for high performance data volumes","isCreate":true,"type":"Root"}}' http://localhost:8080/zstack/v1/primary-storage/ceph/fe5adfa6042b33cd8ee7b5bcd994245f/pools
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| primaryStorageUuid | String | url | 主存储UUID |  | 0.6 |
| poolName | String | body(包含在**params**结构中) |  |  | 0.6 |
| aliasName (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| isCreate (可选) | boolean | body(包含在**params**结构中) |  |  | 0.6 |
| type | String | body(包含在**params**结构中) | 存储池类型 |  | 3.1.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "97ac9dc5fc223f80918747a8a398478b",
    "primaryStorageUuid": "82b127a3f6cc3ec7bd7ff01069310099",
    "poolName": "pool name",
    "aliasName": "alias name",
    "description": "description",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "type": "Data"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 详情参考[error] | 0.6 |
| inventory | CephPrimaryStoragePoolInventory | 详情参考[inventory] | 0.6 |

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
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| poolName | String |  | 0.6 |
| aliasName | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | String |  | 0.6 |
| availableCapacity | Long |  | 2.3.2 |
| usedCapacity | Long |  | 2.3.2 |
| replicatedSize | Integer |  | 2.3.2 |



##### SDK示例

 Java SDK

```
AddCephPrimaryStoragePoolAction action = new AddCephPrimaryStoragePoolAction();
action.primaryStorageUuid = "fe5adfa6042b33cd8ee7b5bcd994245f";
action.poolName = "highPerformance";
action.aliasName = "alias pool name";
action.description = "for high performance data volumes";
action.isCreate = true;
action.type = "Root"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddCephPrimaryStoragePoolAction.Result res = action.call();
```

 Python SDK

```
AddCephPrimaryStoragePoolAction action = AddCephPrimaryStoragePoolAction()
action.primaryStorageUuid = "fe5adfa6042b33cd8ee7b5bcd994245f"
action.poolName = "highPerformance"
action.aliasName = "alias pool name"
action.type = "Root"
action.description = "for high performance data volumes"
action.isCreate = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddCephPrimaryStoragePoolAction.Result res = action.call()
```

---

#### 删除Ceph主存储池(DeleteCephPrimaryStoragePool)



##### API请求

 URLs

```
DELETE zstack/v1/primary-storage/ceph/pools/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/primary-storage/ceph/pools/5d9ee6f791d33de3a3aff68f7a746282?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
DeleteCephPrimaryStoragePoolAction action = new DeleteCephPrimaryStoragePoolAction();
action.uuid = "5d9ee6f791d33de3a3aff68f7a746282";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteCephPrimaryStoragePoolAction.Result res = action.call();
```

 Python SDK

```
DeleteCephPrimaryStoragePoolAction action = DeleteCephPrimaryStoragePoolAction()
action.uuid = "5d9ee6f791d33de3a3aff68f7a746282"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteCephPrimaryStoragePoolAction.Result res = action.call()
```

---

#### 查询Ceph主存储池(QueryCephPrimaryStoragePool)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/ceph/pools
GET zstack/v1/primary-storage/ceph/pools/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/ceph/pools?q=name=highPerformance
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/ceph/pools/d4e5d23825ff3004856e1720eff59131
```



可查询字段

运行CLI命令行工具，输入`QueryCephPrimaryStoragePool`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "primaryStorageUuid": "d0e638ede3263a9080c41ce860106043",
      "poolName": "test pool",
      "aliasName": "alias test pool",
      "description": "high performance",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "type": "Data"
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
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| poolName | String |  | 0.6 |
| aliasName | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | String |  | 0.6 |
| usedCapacity | Long |  | 2.3.2 |
| replicatedSize | Integer |  | 2.3.2 |
| availableCapacity | Long |  | 2.3.2 |



##### SDK示例

 Java SDK

```
QueryCephPrimaryStoragePoolAction action = new QueryCephPrimaryStoragePoolAction();
action.conditions = asList("name=highPerformance");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryCephPrimaryStoragePoolAction.Result res = action.call();
```

 Python SDK

```
QueryCephPrimaryStoragePoolAction action = QueryCephPrimaryStoragePoolAction()
action.conditions = ["name=highPerformance"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryCephPrimaryStoragePoolAction.Result res = action.call()
```

---

#### 更新Ceph主存储池(UpdateCephPrimaryStoragePool)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/ceph/pools/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateCephPrimaryStoragePool": {
    "aliasName": "alias",
    "description": "description"
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
-X PUT -d '{"updateCephPrimaryStoragePool":{"aliasName":"alias","description":"description"}}' \
http://localhost:8080/zstack/v1/primary-storage/ceph/pools/8b2d94a2a12332a7ace559238644472c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| aliasName (可选) | String | body(包含在**updateCephPrimaryStoragePool**结构中) |  |  | 0.6 |
| description (可选) | String | body(包含在**updateCephPrimaryStoragePool**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7f0e174e86e739d695b0e5b9674e3638",
    "primaryStorageUuid": "6b247ebee1e4326998f10e03a5f8c230",
    "poolName": "pool name",
    "aliasName": "alias name",
    "description": "description",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "type": "Data"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CephPrimaryStoragePoolInventory | 详情参考[inventory] | 0.6 |

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
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| poolName | String |  | 0.6 |
| aliasName | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | String |  | 0.6 |
| usedCapacity | Long |  | 2.3.2 |
| replicatedSize | Integer |  | 2.3.2 |
| availableCapacity | Long |  | 2.3.2 |



##### SDK示例

 Java SDK

```
UpdateCephPrimaryStoragePoolAction action = new UpdateCephPrimaryStoragePoolAction();
action.uuid = "8b2d94a2a12332a7ace559238644472c";
action.aliasName = "alias";
action.description = "description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateCephPrimaryStoragePoolAction.Result res = action.call();
```

 Python SDK

```
UpdateCephPrimaryStoragePoolAction action = UpdateCephPrimaryStoragePoolAction()
action.uuid = "8b2d94a2a12332a7ace559238644472c"
action.aliasName = "alias"
action.description = "description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateCephPrimaryStoragePoolAction.Result res = action.call()
```

---

#### 查询Ceph OSD组(QueryCephOsdGroup)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/ceph/osdgroups
GET zstack/v1/primary-storage/ceph/osdgroups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/ceph/osdgroups\
q=uuid=b2c53eee77bc3bfea5374d417babff07
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/ceph/osdgroups/9ee0973b0e79393e9f7d03a6e3a6f645
```



可查询字段

运行CLI命令行工具，输入`QueryCephOsdGroup`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "osds": "osd.1",
      "availableCapacity": 0.0,
      "availablePhysicalCapacity": 1024.0,
      "totalPhysicalCapacity": 1024.0,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventories | List | 详情参考[inventories] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| primaryStorageUuid | String | 主存储UUID | 4.5.0 |
| osds | String |  | 4.5.0 |
| availableCapacity | long |  | 4.5.0 |
| availablePhysicalCapacity | long |  | 4.5.0 |
| totalPhysicalCapacity | long |  | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



##### SDK示例

 Java SDK

```
QueryCephOsdGroupAction action = new QueryCephOsdGroupAction();
action.conditions = asList("uuid=3e479fc0962c3561a854d868fce5ab3e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryCephOsdGroupAction.Result res = action.call();
```

 Python SDK

```
QueryCephOsdGroupAction action = QueryCephOsdGroupAction()
action.conditions = ["uuid=45906504e89335809e54a79897eb1357"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryCephOsdGroupAction.Result res = action.call()
```

---

#### Shared Block主存储相关接口

---

#### 添加Shared Block主存储(AddSharedBlockGroupPrimaryStorage)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/sharedblockgroup
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "diskUuids": [
      "1b5682b663b937a59adb9e318cab6b05"
    ],
    "name": "shared-block-group-1",
    "type": "SharedBlock",
    "zoneUuid": "eee8b39ad50b300c8935e554a967691b"
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
-X POST -d '{"params":{"diskUuids":["1b5682b663b937a59adb9e318cab6b05"],"name":"shared-block-group-1","type":"SharedBlock","zoneUuid":"eee8b39ad50b300c8935e554a967691b"}}' http://localhost:8080/zstack/v1/primary-storage/sharedblockgroup
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| diskUuids | List | body(包含在**params**结构中) | 磁盘唯一表示（例如UUID, WWN, WWID） |  | 2.3.2 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3.2 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3.2 |
| type (可选) | String | body(包含在**params**结构中) | 主存储类型，此处为 SharedBlock |  | 2.3.2 |
| url | String | body(包含在**params**结构中) | 未使用 |  | 2.3.2 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 2.3.2 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3.2 |
| systemTags (可选) | List | body |  |  | 2.3.2 |
| userTags (可选) | List | body |  |  | 2.3.2 |


  - 选项格式为：`primaryStorageVolumeProvisioningStrategy::ThinProvisioning,                                         primaryStorageVolumeProvisioningStrategy::ThickProvisioning`
  - 例如：`primaryStorageVolumeProvisioningStrategy::ThinProvisioning,                                         primaryStorageVolumeProvisioningStrategy::ThickProvisioning`
- 例如：`primaryStorageVolumeProvisioningStrategy::ThinProvisioning,                                         primaryStorageVolumeProvisioningStrategy::ThickProvisioning`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "PS1",
    "url": "/Cloud_ps",
    "type": "LocalStorage",
    "state": "Enabled",
    "status": "Connected",
    "attachedClusterUuids": [
      "c6e9684e8bb93a9192c946dcd0564b39"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 2.3.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.2 |
| description | String | 错误的概要描述 | 2.3.2 |
| details | String | 错误的详细信息 | 2.3.2 |
| elaboration | String | 保留字段，默认为null | 2.3.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| zoneUuid | String | 区域UUID | 2.3.2 |
| name | String | 资源名称 | 2.3.2 |
| url | String |  | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| totalCapacity | Long |  | 2.3.2 |
| availableCapacity | Long |  | 2.3.2 |
| totalPhysicalCapacity | Long |  | 2.3.2 |
| availablePhysicalCapacity | Long |  | 2.3.2 |
| systemUsedCapacity | Long |  | 2.3.2 |
| type | String |  | 2.3.2 |
| state | String |  | 2.3.2 |
| status | String |  | 2.3.2 |
| mountPath | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| attachedClusterUuids | List |  | 2.3.2 |



##### SDK示例

 Java SDK

```
AddSharedBlockGroupPrimaryStorageAction action = new AddSharedBlockGroupPrimaryStorageAction();
action.diskUuids = asList("1b5682b663b937a59adb9e318cab6b05");
action.name = "shared-block-group-1";
action.type = "SharedBlock";
action.zoneUuid = "eee8b39ad50b300c8935e554a967691b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSharedBlockGroupPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddSharedBlockGroupPrimaryStorageAction action = AddSharedBlockGroupPrimaryStorageAction()
action.diskUuids = [1b5682b663b937a59adb9e318cab6b05]
action.name = "shared-block-group-1"
action.type = "SharedBlock"
action.zoneUuid = "eee8b39ad50b300c8935e554a967691b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSharedBlockGroupPrimaryStorageAction.Result res = action.call()
```

---

#### 查询连接状态(QuerySharedBlockGroupPrimaryStorageHostRef)



查询SharedBlock主存储物理机连接状态。

##### API请求

 URLs

```
GET zstack/v1/sharedblock-group/host-refs
GET zstack/v1/sharedblock-group/{primaryStorageUuid}/host-refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sharedblock-group/host-refs
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sharedblock-group/{primaryStorageUuid}/host-refs
```



可查询字段

运行CLI命令行工具，输入QuerySharedBlock并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "primaryStorageUuid": "a9e96e98cc2c3a3baa23e31503fc93e6",
      "hostUuid": "7c5510f255663a3cbfd53367c0172507",
      "hostId": 100.0,
      "status": "Connected",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventories | List | 详情参考[inventories] | 2.3.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.2 |
| description | String | 错误的概要描述 | 2.3.2 |
| details | String | 错误的详细信息 | 2.3.2 |
| elaboration | String | 保留字段，默认为null | 2.3.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| primaryStorageUuid | String | 主存储UUID | 2.3.2 |
| hostUuid | String | 物理机UUID | 2.3.2 |
| hostId | Integer | 物理机ID | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| status | PrimaryStorageHostStatus | 详情参考[status] | 2.3.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |



##### SDK示例

 Java SDK

```
QuerySharedBlockGroupPrimaryStorageHostRefAction action = new QuerySharedBlockGroupPrimaryStorageHostRefAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySharedBlockGroupPrimaryStorageHostRefAction.Result res = action.call();
```

 Python SDK

```
QuerySharedBlockGroupPrimaryStorageHostRefAction action = QuerySharedBlockGroupPrimaryStorageHostRefAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySharedBlockGroupPrimaryStorageHostRefAction.Result res = action.call()
```

---

#### 查询Shared Block主存储(QuerySharedBlockGroupPrimaryStorage)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/sharedblockgroup
GET zstack/v1/primary-storage/sharedblockgroup/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/sharedblockgroup
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/sharedblockgroup/ab5776cffa893955a533f7e89cdaf025
```



可查询字段

运行CLI命令行工具，输入QuerySharedBlock并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "sharedBlocks": [
        {
          "uuid": "2bf68818dc2c3ffbb9c9f283c8a1f524",
          "sharedBlockGroupUuid": "23ef265b88143074b88ad450afe5cbac",
          "type": "LvmLogicalVolumeBasic",
          "diskUuid": "b4d9459d02533fdeb4dee8b8bf943bed",
          "name": "test shared block",
          "description": "description",
          "state": "Enabled",
          "status": "Connected",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "sharedBlockGroupType": "LvmVolumeGroupBasic",
      "uuid": "23ef265b88143074b88ad450afe5cbac",
      "name": "shared block group primary storage",
      "description": "shared block group primary storage description",
      "availableCapacity": 1.073741824E9,
      "availablePhysicalCapacity": 1.073741824E9,
      "type": "SharedBlock",
      "state": "Enabled",
      "status": "Connected",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventories | List | 详情参考[inventories] | 2.3.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.2 |
| description | String | 错误的概要描述 | 2.3.2 |
| details | String | 错误的详细信息 | 2.3.2 |
| elaboration | String | 保留字段，默认为null | 2.3.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| zoneUuid | String | 区域UUID | 2.3.2 |
| name | String | 资源名称 | 2.3.2 |
| url | String | 未使用 | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| totalCapacity | Long | 总空间 | 2.3.2 |
| availableCapacity | Long | 可用空间 | 2.3.2 |
| totalPhysicalCapacity | Long | 总物理空间 | 2.3.2 |
| availablePhysicalCapacity | Long | 物理可用空间 | 2.3.2 |
| systemUsedCapacity | Long | 系统使用空间 | 2.3.2 |
| type | String | 主存储类型 | 2.3.2 |
| state | String | 启用状态 | 2.3.2 |
| status | String | 连接状态 | 2.3.2 |
| mountPath | String | 未使用 | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| attachedClusterUuids | List | 挂载的集群 | 2.3.2 |
| sharedBlocks | List | 详情参考[sharedBlocks] | 2.3.2 |
| sharedBlockGroupType | SharedBlockGroupType | 详情参考[sharedBlockGroupType] | 2.3.2 |

 #sharedBlocks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| sharedBlockGroupUuid | String | 共享块设备组UUID | 2.3.2 |
| diskUuid | String | 磁盘唯一标示（例如UUID, WWN, WWID） | 2.3.2 |
| name | String | 资源名称 | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| type | SharedBlockType | 详情参考[type] | 2.3.2 |
| state | SharedBlockState | 详情参考[state] | 2.3.2 |
| status | SharedBlockStatus | 详情参考[status] | 2.3.2 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #sharedBlockGroupType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |



##### SDK示例

 Java SDK

```
QuerySharedBlockGroupPrimaryStorageAction action = new QuerySharedBlockGroupPrimaryStorageAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySharedBlockGroupPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
QuerySharedBlockGroupPrimaryStorageAction action = QuerySharedBlockGroupPrimaryStorageAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySharedBlockGroupPrimaryStorageAction.Result res = action.call()
```

---

#### 添加LUN到Shared Block主存储(AddSharedBlockToSharedBlockGroup)



添加共享块设备到Shared Block主存储。

##### API请求

 URLs

```
POST zstack/v1/primary-storage/sharedblockgroup/{uuid}/sharedblocks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "diskUuid": "3bc916e4700e36c9ad9575fcf47222ab"
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
-X POST -d '{"params":{"diskUuid":"3bc916e4700e36c9ad9575fcf47222ab"}}' http://localhost:8080/zstack/v1/primary-storage/sharedblockgroup/506367e0d66d3fdb92eda345ed347c21/sharedblocks
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| diskUuid | String | body(包含在**params**结构中) | 磁盘维一标示（例如UUID, WWN, WWID） |  | 2.3.2 |
| uuid | String | url | 主存储UUID |  | 2.3.2 |
| systemTags (可选) | List | body |  |  | 2.3.2 |
| userTags (可选) | List | body |  |  | 2.3.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "sharedBlocks": [
      {
        "uuid": "5bc4ef2f6f703bfd9aef732be038103d",
        "sharedBlockGroupUuid": "08f3dd28f1c433fe871e3fe760476981",
        "type": "LvmLogicalVolumeBasic",
        "diskUuid": "b9a89d214e3b37eda7a1aa948c59db13",
        "name": "test shared block",
        "description": "description",
        "state": "Enabled",
        "status": "Connected",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "sharedBlockGroupType": "LvmVolumeGroupBasic",
    "uuid": "08f3dd28f1c433fe871e3fe760476981",
    "name": "shared block group primary storage",
    "description": "shared block group primary storage description",
    "availableCapacity": 1.073741824E9,
    "availablePhysicalCapacity": 1.073741824E9,
    "type": "SharedBlock",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventory | SharedBlockGroupPrimaryStorageInventory | 详情参考[inventory] | 2.3.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.2 |
| description | String | 错误的概要描述 | 2.3.2 |
| details | String | 错误的详细信息 | 2.3.2 |
| elaboration | String | 保留字段，默认为null | 2.3.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| zoneUuid | String | 区域UUID | 2.3.2 |
| name | String | 资源名称 | 2.3.2 |
| url | String | 未使用 | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| totalCapacity | Long | 总空间 | 2.3.2 |
| availableCapacity | Long | 可用空间 | 2.3.2 |
| totalPhysicalCapacity | Long | 总物理空间 | 2.3.2 |
| availablePhysicalCapacity | Long | 物理可用空间 | 2.3.2 |
| systemUsedCapacity | Long | 系统使用空间 | 2.3.2 |
| type | String | 主存储类型 | 2.3.2 |
| state | String | 启用状态 | 2.3.2 |
| status | String | 连接状态 | 2.3.2 |
| mountPath | String | 未使用 | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| attachedClusterUuids | List | 挂载的集群 | 2.3.2 |
| sharedBlocks | List | 详情参考[sharedBlocks] | 2.3.2 |
| sharedBlockGroupType | SharedBlockGroupType | 详情参考[sharedBlockGroupType] | 2.3.2 |

 #sharedBlocks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| sharedBlockGroupUuid | String | 共享块设备组UUID | 2.3.2 |
| diskUuid | String | 磁盘唯一标示（例如UUID, WWN, WWID） | 2.3.2 |
| name | String | 资源名称 | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| type | SharedBlockType | 详情参考[type] | 2.3.2 |
| state | SharedBlockState | 详情参考[state] | 2.3.2 |
| status | SharedBlockStatus | 详情参考[status] | 2.3.2 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #sharedBlockGroupType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |



##### SDK示例

 Java SDK

```
AddSharedBlockToSharedBlockGroupAction action = new AddSharedBlockToSharedBlockGroupAction();
action.diskUuid = "3bc916e4700e36c9ad9575fcf47222ab";
action.uuid = "506367e0d66d3fdb92eda345ed347c21";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSharedBlockToSharedBlockGroupAction.Result res = action.call();
```

 Python SDK

```
AddSharedBlockToSharedBlockGroupAction action = AddSharedBlockToSharedBlockGroupAction()
action.diskUuid = "3bc916e4700e36c9ad9575fcf47222ab"
action.uuid = "506367e0d66d3fdb92eda345ed347c21"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSharedBlockToSharedBlockGroupAction.Result res = action.call()
```

---

#### 获取共享块设备候选清单(GetSharedBlockCandidate)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/sharedblockgroup/sharedblock-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/sharedblockgroup/sharedblock-candidates?clusterUuid=a8efc4d72a2334dcad7f71bcb4821d6f
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | query | 集群UUID |  | 2.6.0 |
| systemTags (可选) | List | query |  |  | 2.6.0 |
| userTags (可选) | List | query |  |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "results": [
    {
      "wwid": "ata-Samsung_SSD_850_EVO_M.2_250GB_S33CNX0H600299D",
      "vendor": "DELL",
      "model": "MD32xx",
      "wwn": "0x6b083fe000daf018",
      "serial": "6b083fe000daf018000015505abbe00a",
      "hctl": "",
      "type": "mpath",
      "size": 3.000318820352E13
    },
    {}
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| results | List | 详情参考[results] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| wwid | String | 设备WWID | 2.6.0 |
| vendor | String | 设备供应商 | 2.6.0 |
| model | String | 设备型号 | 2.6.0 |
| wwn | String | 设备WWN | 2.6.0 |
| serial | String | 设备序列号 | 2.6.0 |
| hctl | String | SCSI设备HCTL | 2.6.0 |
| type | String | 设备类型 | 2.6.0 |
| size | Long | 设备大小 | 2.6.0 |



##### SDK示例

 Java SDK

```
GetSharedBlockCandidateAction action = new GetSharedBlockCandidateAction();
action.clusterUuid = "a8efc4d72a2334dcad7f71bcb4821d6f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetSharedBlockCandidateAction.Result res = action.call();
```

 Python SDK

```
GetSharedBlockCandidateAction action = GetSharedBlockCandidateAction()
action.clusterUuid = "a8efc4d72a2334dcad7f71bcb4821d6f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetSharedBlockCandidateAction.Result res = action.call()
```

---

#### 刷新共享块设备容量(RefreshSharedblockDeviceCapacity)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/sharedblockgroup/{sharedBlockGroupUuid}/sharedblocks/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```

curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/primary-storage/sharedblockgroup/2974c033608537e68a305b0f29412776/sharedblocks/9bd10e4bcc0939a2b041755a160d7b34
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | url | 共享块设备UUID，如为空则更新共享块存储下所有设备 |  | 2.6.0 |
| sharedBlockGroupUuid | String | url | 共享块存储UUID |  | 2.6.0 |
| systemTags (可选) | List | body |  |  | 2.6.0 |
| userTags (可选) | List | body |  |  | 2.6.0 |



##### API返回

 返回示例

```

{
  "inventory": {
    "sharedBlocks": [
      {
        "uuid": "fd474b5a711f3bcab14061e1507b0691",
        "sharedBlockGroupUuid": "9f900d7cc336370da2dccdd832a1613d",
        "type": "LvmLogicalVolumeBasic",
        "diskUuid": "b9bec04964ab30a7bf80bdbf7ec997d9",
        "name": "test shared block",
        "description": "description",
        "state": "Enabled",
        "status": "Connected",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "sharedBlockGroupType": "LvmVolumeGroupBasic",
    "uuid": "9f900d7cc336370da2dccdd832a1613d",
    "name": "shared block group primary storage",
    "description": "shared block group primary storage description",
    "availableCapacity": 1.073741824E9,
    "availablePhysicalCapacity": 1.073741824E9,
    "type": "SharedBlock",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | SharedBlockGroupPrimaryStorageInventory | 详情参考[inventory] | 2.6.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| url | String | 未使用 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| totalCapacity | Long | 总空间 | 2.6.0 |
| availableCapacity | Long | 可用空间 | 2.6.0 |
| totalPhysicalCapacity | Long | 总物理空间 | 2.6.0 |
| availablePhysicalCapacity | Long | 物理可用空间 | 2.6.0 |
| systemUsedCapacity | Long | 系统使用空间 | 2.6.0 |
| type | String | 主存储类型 | 2.6.0 |
| state | String | 启用状态 | 2.6.0 |
| status | String | 连接状态 | 2.6.0 |
| mountPath | String | 未使用 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| attachedClusterUuids | List | 挂载的集群 | 2.6.0 |
| sharedBlocks | List | 详情参考[sharedBlocks] | 2.6.0 |
| sharedBlockGroupType | SharedBlockGroupType | 详情参考[sharedBlockGroupType] | 2.6.0 |

 #sharedBlocks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| sharedBlockGroupUuid | String | 共享块设备组UUID | 2.6.0 |
| diskUuid | String | 磁盘唯一标示（例如UUID, WWN, WWID） | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| type | SharedBlockType | 详情参考[type] | 2.6.0 |
| state | SharedBlockState | 详情参考[state] | 2.6.0 |
| status | SharedBlockStatus | 详情参考[status] | 2.6.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.6.0 |
| ordinal | int |  | 2.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.6.0 |
| ordinal | int |  | 2.6.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.6.0 |
| ordinal | int |  | 2.6.0 |

 #sharedBlockGroupType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.6.0 |
| ordinal | int |  | 2.6.0 |



##### SDK示例

 Java SDK

```

RefreshSharedblockDeviceCapacityAction action = new RefreshSharedblockDeviceCapacityAction();
action.uuid = "9bd10e4bcc0939a2b041755a160d7b34";
action.sharedBlockGroupUuid = "2974c033608537e68a305b0f29412776";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RefreshSharedblockDeviceCapacityAction.Result res = action.call();
```

 Python SDK

```

RefreshSharedblockDeviceCapacityAction action = RefreshSharedblockDeviceCapacityAction()
action.uuid = "9bd10e4bcc0939a2b041755a160d7b34"
action.sharedBlockGroupUuid = "2974c033608537e68a305b0f29412776"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RefreshSharedblockDeviceCapacityAction.Result res = action.call()
```

---

#### 查询共享块设备(QuerySharedBlock)



##### API请求

 URLs

```
GET zstack/v1/sharedblock-group/sharedblocks
GET zstack/v1/sharedblock-group/
GET zstack/v1/sharedblock-group/sharedblock/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sharedblock-group/sharedblocks
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sharedblock-group/
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sharedblock-group/sharedblock/e6076fa169ed38ba8f66e73c2db7158d
```



可查询字段

运行CLI命令行工具，输入QuerySharedBlock并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "3787d759b8323d2e8f0b19ef0bfe930b",
      "sharedBlockGroupUuid": "0dcfcb85f7613689886ae34114064cbd",
      "type": "LvmLogicalVolumeBasic",
      "name": "test shared block",
      "description": "description",
      "state": "Enabled",
      "status": "Connected",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventories | List | 详情参考[inventories] | 2.3.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.2 |
| description | String | 错误的概要描述 | 2.3.2 |
| details | String | 错误的详细信息 | 2.3.2 |
| elaboration | String | 保留字段，默认为null | 2.3.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| sharedBlockGroupUuid | String | 共享块设备组UUID | 2.3.2 |
| diskUuid | String | 磁盘唯一标示（例如UUID, WWN, WWID） | 2.3.2 |
| name | String | 资源名称 | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| type | SharedBlockType | 详情参考[type] | 2.3.2 |
| state | SharedBlockState | 详情参考[state] | 2.3.2 |
| status | SharedBlockStatus | 详情参考[status] | 2.3.2 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.2 |
| ordinal | int |  | 2.3.2 |



##### SDK示例

 Java SDK

```
QuerySharedBlockAction action = new QuerySharedBlockAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySharedBlockAction.Result res = action.call();
```

 Python SDK

```
QuerySharedBlockAction action = QuerySharedBlockAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySharedBlockAction.Result res = action.call()
```

---

#### XStor Block主存储相关接口

---

#### 添加Block主存储(AddBlockPrimaryStorage)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/block
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "param": {
    "vendorName": "XStor",
    "metadata": "{\u0027ip\u0027:\u0027127.0.0.1\u0027, \u0027port\u0027:8443, \u0027username\u0027:\u0027test\u0027, \u0027password\u0027:\u0027password\u0027}"
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
-X POST -d '{"param":{"vendorName":"XStor","metadata":"{'ip':'127.0.0.1', 'port':8443, 'username':'test', 'password':'password'}"}}' http://localhost:8080/zstack/v1/primary-storage/block
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vendorName | String | body(包含在`param`结构中) | 存储厂商名称 |  | 4.6.0 |
| metadata | String | body(包含在`param`结构中) | 存储的元数据 |  | 4.6.0 |
| url | String | body(包含在`param`结构中) | 未使用 |  | 4.6.0 |
| name | String | body(包含在`param`结构中) | Block主存储的名称 |  | 4.6.0 |
| description (可选) | String | body(包含在`param`结构中) | Block主存储的详细描述 |  | 4.6.0 |
| type (可选) | String | body(包含在`param`结构中) | 主存储的类型，此处为Block |  | 4.6.0 |
| zoneUuid | String | body(包含在`param`结构中) | 区域UUID |  | 4.6.0 |
| resourceUuid (可选) | String | body(包含在`param`结构中) | 资源UUID |  | 4.6.0 |
| tagUuids (可选) | List | body(包含在`param`结构中) | 标签UUID列表 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "PS1",
    "url": "/zstack_ps",
    "type": "LocalStorage",
    "state": "Enabled",
    "status": "Connected",
    "attachedClusterUuids": [
      "c6e9684e8bb93a9192c946dcd0564b39"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| url | String |  | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| totalCapacity | Long | 总空间 | 4.6.0 |
| availableCapacity | Long | 可用空间 | 4.6.0 |
| totalPhysicalCapacity | Long | 总物理空间 | 4.6.0 |
| availablePhysicalCapacity | Long | 物理可用空间 | 4.6.0 |
| systemUsedCapacity | Long | 系统使用空间 | 4.6.0 |
| type | String | 主存储类型 | 4.6.0 |
| state | String | 启用状态 | 4.6.0 |
| status | String | 连接状态 | 4.6.0 |
| mountPath | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| attachedClusterUuids | List | 挂载的集群 | 4.6.0 |



##### SDK示例

 Java SDK

```
AddBlockPrimaryStorageAction action = new AddBlockPrimaryStorageAction();
action.vendorName = "XStor";
action.metadata = "{'ip':'127.0.0.1', 'port':8443, 'username':'test', 'password':'password'}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddBlockPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
AddBlockPrimaryStorageAction action = AddBlockPrimaryStorageAction()
action.vendorName = "XStor"
action.metadata = "{'ip':'127.0.0.1', 'port':8443, 'username':'test', 'password':'password'}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddBlockPrimaryStorageAction.Result res = action.call()
```

---

#### 获取Block存储的元数据(GetBlockPrimaryStorageMetadata)



##### API请求

 URLs

```
POST zstack/v1/primary-storage/block/metadata
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "param": {
    "vendorName": "XStor",
    "metadata": "{\u0027ip\u0027:\u0027127.0.0.1\u0027,\u0027port\u0027:8443,\u0027username\u0027:\u0027test\u0027,\u0027password\u0027:\u0027123\u0027}"
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
-X POST -d '{"param":{"vendorName":"XStor","metadata":"{'ip':'127.0.0.1','port':8443,'username':'test','password':'123'}"}}' http://localhost:8080/zstack/v1/primary-storage/block/metadata
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vendorName | String | body(包含在**param**结构中) | Block存储厂商名称 |  | 4.6.0 |
| metadata | String | body(包含在**param**结构中) | 存储元数据（ip，port，用户名、密码） |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "vendorName": "XStor",
      "uuid": "8f93d463f7d73e1c959aee815ff1e9a8"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | PrimaryStorageInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vendorName | String | 存储厂商名称 | 4.6.0 |
| metadata | String | 存储元数据 | 4.6.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| name | String | 主存储名称 | 4.6.0 |
| url | String | 未使用 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| totalCapacity | Long | 总空间 | 4.6.0 |
| availableCapacity | Long | 可用空间 | 4.6.0 |
| totalPhysicalCapacity | Long | 总物理空间 | 4.6.0 |
| availablePhysicalCapacity | Long | 物理可用空间 | 4.6.0 |
| systemUsedCapacity | Long | 系统使用空间 | 4.6.0 |
| type | String | 主存储类型 | 4.6.0 |
| state | String | 启用状态 | 4.6.0 |
| status | String | 连接状态 | 4.6.0 |
| mountPath | String | 未使用 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| attachedClusterUuids | List | 挂载的集群 | 4.6.0 |



##### SDK示例

 Java SDK

```
GetBlockPrimaryStorageMetadataAction action = new GetBlockPrimaryStorageMetadataAction();
action.vendorName = "XStor";
action.metadata = "{'ip':'127.0.0.1','port':8443,'username':'test','password':'123'}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetBlockPrimaryStorageMetadataAction.Result res = action.call();
```

 Python SDK

```
GetBlockPrimaryStorageMetadataAction action = GetBlockPrimaryStorageMetadataAction()
action.vendorName = "XStor"
action.metadata = "{'ip':'127.0.0.1','port':8443,'username':'test','password':'123'}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetBlockPrimaryStorageMetadataAction.Result res = action.call()
```

---

#### 查询Block主存储(QueryBlockPrimaryStorage)



##### API请求

 URLs

```
GET zstack/v1/primary-storage/block
```


```
GET zstack/v1/primary-storage/block/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/block
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/primary-storage/block/27520555d8e2373e9a7ec3801e358e1c
```



可查询字段

运行**zstack-cli**命令行工具，输入`QueryBlockPrimaryStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "vendorName": "XStor",
      "uuid": "8f93d463f7d73e1c959aee815ff1e9a8"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | PrimaryStorageInventory | 详情参考[inventories] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vendorName | String | 存储厂商名称 | 4.6.0 |
| metadata | String | 存储元数据 | 4.6.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| name | String | 主存储名称 | 4.6.0 |
| url | String | 未使用 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| totalCapacity | Long | 总空间 | 4.6.0 |
| availableCapacity | Long | 可用空间 | 4.6.0 |
| totalPhysicalCapacity | Long | 总物理空间 | 4.6.0 |
| availablePhysicalCapacity | Long | 物理可用空间 | 4.6.0 |
| systemUsedCapacity | Long | 系统使用空间 | 4.6.0 |
| type | String | 主存储类型 | 4.6.0 |
| state | String | 启用状态 | 4.6.0 |
| status | String | 连接状态 | 4.6.0 |
| mountPath | String | 未使用 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| attachedClusterUuids | List | 挂载的集群 | 4.6.0 |



##### SDK示例

 Java SDK

```
QueryBlockPrimaryStorageAction action = new QueryBlockPrimaryStorageAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBlockPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
QueryBlockPrimaryStorageAction action = QueryBlockPrimaryStorageAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBlockPrimaryStorageAction.Result res = action.call()
```

---

#### 更新Block主存储(UpdateBlockPrimaryStorage)



##### API请求

 URLs

```
PUT zstack/v1/primary-storage/block/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBlockPrimaryStorage": {
    "vendorName": "XStor",
    "metadata": "{\u0027ip\u0027:\u0027127.0.0.1\u0027, \u0027port\u0027:8443, \u0027user\u0027:\u0027test\u0027, \u0027password\u0027:\u0027password\u0027}"
  },
  "systemTags": [],
  "userTags": []
}}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBlockPrimaryStorage":{"vendorName":"XStor","metadata":"{'ip':'127.0.0.1', 'port':8443, 'user':'test', 'password':'password'}"}}' \
http://localhost:8080/zstack/v1/primary-storage/block/blockPrimarySttorageUuid/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vendorName(可选) | String | body(包含在**param**结构中) | Block存储厂商名称 |  | 4.8.0 |
| metadata(可选) | String | body(包含在**param**结构中) | 存储元数据（ip，port，用户名、密码） |  | 4.8..0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.8.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.8..0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vendorName": "XStor",
    "metadata": "{\u0027ip\u0027:\u0027127.0.0.1\u0027, \u0027port\u0027:8443, \u0027user\u0027:\u0027test\u0027, \u0027password\u0027:\u0027password\u0027}",
    "uuid": "c85e957b4b4b3f949494275d443c9807",
    "name": "block primary storage",
    "description": "block primary storage description",
    "availableCapacity": 1073741824,
    "availablePhysicalCapacity": 1073741824,
    "type": "BlockStorage",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| inventory | BlockPrimaryStorageInventory | 详情参考[inventories] | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.8.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vendorName | String | 存储厂商名称 | 4.8.0 |
| metadata | String | 存储元数据 | 4.8.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.8.0 |
| zoneUuid | String | 区域UUID | 4.8.0 |
| name | String | 主存储名称 | 4.8.0 |
| url | String | 未使用 | 4.8.0 |
| description | String | 资源的详细描述 | 4.8.0 |
| totalCapacity | Long | 总空间 | 4.8.0 |
| availableCapacity | Long | 可用空间 | 4.8.0 |
| totalPhysicalCapacity | Long | 总物理空间 | 4.8.0 |
| availablePhysicalCapacity | Long | 物理可用空间 | 4.8.0 |
| systemUsedCapacity | Long | 系统使用空间 | 4.8.0 |
| type | String | 主存储类型 | 4.8.0 |
| state | String | 启用状态 | 4.8.0 |
| status | String | 连接状态 | 4.8.0 |
| mountPath | String | 未使用 | 4.8.0 |
| createDate | Timestamp | 创建时间 | 4.8.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.8.0 |
| attachedClusterUuids | List | 挂载的集群 | 4.8.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |



##### SDK示例

 Java SDK

```
UpdateBlockPrimaryStorageAction action = new UpdateBlockPrimaryStorageAction();
action.vendorName = "XStor";
action.metadata = "{'ip':'127.0.0.1', 'port':8443, 'user':'test', 'password':'password'}";
action.uuid = "blockPrimarySttorageUuid";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBlockPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
UpdateBlockPrimaryStorageAction action = UpdateBlockPrimaryStorageAction()
action.vendorName = "XStor"
action.metadata = "{'ip':'127.0.0.1', 'port':8443, 'user':'test', 'password':'password'}"
action.uuid = "blockPrimarySttorageUuid"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBlockPrimaryStorageAction.Result res = action.call()
```

---

### 镜像服务器相关接口

---

#### 删除镜像服务器(DeleteBackupStorage)



##### API请求

 URLs

```
DELETE zstack/v1/backup-storage/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3cb9fd3d9fad4f64b62086b1aeabf42a" \
-X DELETE http://localhost:8080/zstack/v1/backup-storage/12b157dc061a46739168b6e87bf2657f?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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



SDK示例 Java SDK

```
DeleteBackupStorageAction action = new DeleteBackupStorageAction();
action.uuid = "1c8acbc2af8445a5b631350276787580";
action.deleteMode = "Permissive";
action.sessionId = "4caf9cc241604dbca3088779d6772dbe";
DeleteBackupStorageAction.Result res = action.call();
```

 Python SDK

```
DeleteBackupStorageAction action = DeleteBackupStorageAction()
action.uuid = "06473459fd474a26bb1d79e2edd004f3"
action.deleteMode = "Permissive"
action.sessionId = "a6fead8970fe45cfa6ba92e7dcf08d66"
DeleteBackupStorageAction.Result res = action.call()
```

---

#### 查询镜像服务器(QueryBackupStorage)



##### API请求

 URLs

```
GET zstack/v1/backup-storage
GET zstack/v1/backup-storage/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth dce9c25b65254343b0f9a568a661f348" \
-X GET http://localhost:8080/zstack/v1/backup-storage?q=uuid=435e61f882cf431bb4ae48246489a988
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fe9a6571fc9949e7a0d31d94fae9b87c" \
-X GET http://localhost:8080/zstack/v1/backup-storage/1ab3b836a88342e1bbc1b1a17d092f0f
```



可查询字段

运行CLI命令行工具，输入QueryBackupStorage并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例（imagestore）

```
{
    "inventories": [
        {
            "attachedZoneUuids": [
                "140ebc2fbdb74ae197323a69d432f25e"
            ],
            "availableCapacity": 4931431059456,
            "createDate": "Apr 11, 2018 2:50:54 PM",
            "description": "",
            "hostname": "172.20.1.115",
            "lastOpDate": "Dec 13, 2019 7:32:49 PM",
            "name": "image-store",
            "sshPort": 22,
            "state": "Enabled",
            "status": "Connected",
            "totalCapacity": 9992857976832,
            "type": "ImageStoreBackupStorage",
            "url": "/zstack_imagestore",
            "username": "root",
            "uuid": "1ab3b836a88342e1bbc1b1a17d092f0f"
        }
    ],
    "success": true
}
```

返回示例（ceph）

```
{
    "inventories": [
        {
            "attachedZoneUuids": [
                "195ae9157b9248e3889cc56cfd7d0f8d"
            ],
            "availableCapacity": 297500737536,
            "createDate": "Dec 14, 2019 9:46:05 AM",
            "description": "Test",
            "fsid": "d53902bc-ff50-4d08-8769-9d83448478d3",
            "lastOpDate": "Dec 14, 2019 11:30:40 AM",
            "mons": [
                {
                    "backupStorageUuid": "eed424abee694bcda5a5e414a61ea3d3",
                    "createDate": "Dec 14, 2019 9:46:05 AM",
                    "hostname": "172.24.249.174",
                    "lastOpDate": "Dec 14, 2019 11:21:46 AM",
                    "monAddr": "172.24.249.174",
                    "monPort": 6789,
                    "monUuid": "e6707015afc8405ba0b184ca7a318b63",
                    "sshPassword": "password",
                    "sshPort": 22,
                    "sshUsername": "root",
                    "status": "Connected"
                },
                {
                    "backupStorageUuid": "eed424abee694bcda5a5e414a61ea3d3",
                    "createDate": "Dec 14, 2019 9:46:05 AM",
                    "hostname": "172.24.252.188",
                    "lastOpDate": "Dec 14, 2019 11:21:45 AM",
                    "monAddr": "172.24.252.188",
                    "monPort": 6789,
                    "monUuid": "d5e70424ddac4c03ab06466d600ef4ae",
                    "sshPassword": "password",
                    "sshPort": 22,
                    "sshUsername": "root",
                    "status": "Connected"
                },
                {
                    "backupStorageUuid": "eed424abee694bcda5a5e414a61ea3d3",
                    "createDate": "Dec 14, 2019 9:46:05 AM",
                    "hostname": "172.24.247.108",
                    "lastOpDate": "Dec 14, 2019 11:21:16 AM",
                    "monAddr": "172.24.247.108",
                    "monPort": 6789,
                    "monUuid": "378826f5f690480983f39514e0b00f75",
                    "sshPassword": "password",
                    "sshPort": 22,
                    "sshUsername": "root",
                    "status": "Connected"
                }
            ],
            "name": "ceph-bs",
            "poolAvailableCapacity": 99166913877,
            "poolName": "bak-t-eed424abee694bcda5a5e414a61ea3d3",
            "poolReplicatedSize": 3,
            "poolUsedCapacity": 2787687082,
            "state": "Enabled",
            "status": "Connected",
            "totalCapacity": 305863802880,
            "type": "Ceph",
            "url": "not used",
            "uuid": "eed424abee694bcda5a5e414a61ea3d3"
        }
    ],
    "success": true
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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryBackupStorageAction action = new QueryBackupStorageAction();
action.conditions = asList("uuid=b8e17834373747ae8b6555db80e74586");
action.sessionId = "f5d478c4facf42f4a3f16c8efbfd9628";
QueryBackupStorageAction.Result res = action.call();
```

 Python SDK

```
QueryBackupStorageAction action = QueryBackupStorageAction()
action.conditions = ["uuid=0359113913834277bc815b446a6eff25"]
action.sessionId = "dc56b36c279f449ea2d430d2513a4cb0"
QueryBackupStorageAction.Result res = action.call()
```

---

#### 重连镜像服务器(ReconnectBackupStorage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"reconnectBackupStorage": {},
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
-X PUT -d '{"reconnectBackupStorage":{}}' \
http://localhost:8080/zstack/v1/backup-storage/37ea58b550103d40b23420e870bd616f/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "My Backup Storage",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:21 PM",
"lastOpDate": "Jun 7, 2017 9:20:21 PM",
"attachedZoneUuids": [
"410e621653de4bab8fd44f81e74b9225"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
ReconnectBackupStorageAction action = new ReconnectBackupStorageAction();
action.uuid = "f68e2350598547198b72bd578d14b037";
action.sessionId = "dcc8725e00f4437889104fe6ce942f96";
ReconnectBackupStorageAction.Result res = action.call();
```

 Python SDK

```
ReconnectBackupStorageAction action = ReconnectBackupStorageAction()
action.uuid = "2f2571f4864c46778544b500d006dfe7"
action.sessionId = "a1c68d6ead48410ab9fd255d4c73f843"
ReconnectBackupStorageAction.Result res = action.call()
```

---

#### 更改镜像服务器可用状态(ChangeBackupStorageState)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeBackupStorageState": {
"stateEvent": "Disabled"
  },
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
-X PUT -d '{"changeBackupStorageState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/backup-storage/7d2e0c9d7b3734f28b3a22eab93ddb63/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeBackupStorageState**结构中) | 镜像服务器的目标状态 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "My Backup Storage",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Disabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:45 PM",
"lastOpDate": "Jun 7, 2017 9:20:45 PM",
"attachedZoneUuids": [
"c1b882e3dfc944348ab63b478a64f257"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
ChangeBackupStorageStateAction action = new ChangeBackupStorageStateAction();
action.uuid = "35b513d450dd484b8aae9c2a5c488a76";
action.stateEvent = "Disabled";
action.sessionId = "6235716916cc4fffbc027a3cca374c5e";
ChangeBackupStorageStateAction.Result res = action.call();
```

 Python SDK

```
ChangeBackupStorageStateAction action = ChangeBackupStorageStateAction()
action.uuid = "1576b0cf06b041d99e5f615b72bb384f"
action.stateEvent = "Disabled"
action.sessionId = "4226acacae2b489c8ba81e4af682a57a"
ChangeBackupStorageStateAction.Result res = action.call()
```

---

#### 获取镜像服务器存储容量(GetBackupStorageCapacity)



##### API请求

 URLs

```
GET zstack/v1/backup-storage/capacities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 4804c84fa75e442e890d3a01a5bc2882" \
-X GET http://localhost:8080/zstack/v1/backup-storage/capacities?zoneUuids=6c4a26e1ec274395977b1fd98144dd27&all=true
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuids (可选) | List | query | 区域UUID列表 |  | 0.6 |
| backupStorageUuids (可选) | List | query | 镜像服务器UUID列表 zoneUuids, backupStorageUuids 至少有一个不为空 若zoneUuids, backupStorageUuids均为空，all为真 |  | 0.6 |
| all (可选) | boolean | query | 当镜像服务器UUID列表为空时，该项为真表示查询系统中所有的镜像服务器。 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| totalCapacity | long | 总容量（以字节计） | 0.6 |
| availableCapacity | long | 可用容量（以字节计） | 0.6 |
| success | boolean | 成功失败标志 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
|  | ErrorCode | 详情参考[error] | 0.6 |

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
GetBackupStorageCapacityAction action = new GetBackupStorageCapacityAction();
action.zoneUuids = asList("aae3e25dc11b41f8ae41739814949cfe");
action.all = true;
action.sessionId = "fbcc6cc548a44caea69bb492ea13a4bd";
GetBackupStorageCapacityAction.Result res = action.call();
```

 Python SDK

```
GetBackupStorageCapacityAction action = GetBackupStorageCapacityAction()
action.zoneUuids = [afa2a794d1244f55acc0f8d2d0e5cdc7]
action.all = true
action.sessionId = "1574e3585df94016a047e1d836978f3e"
GetBackupStorageCapacityAction.Result res = action.call()
```

---

#### 获取镜像服务器类型列表(GetBackupStorageTypes)



##### API请求

 URLs

```
GET zstack/v1/backup-storage/types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 47583a9a72f84121b84135296f3af8cf" \
-X GET http://localhost:8080/zstack/v1/backup-storage/types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"backupStorageTypes": [
"Ceph",
"ImageStore"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| types | List | 镜像服务器类型列表 | 0.6 |
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
GetBackupStorageTypesAction action = new GetBackupStorageTypesAction();
action.sessionId = "010841c1e6ea46cd9cde645ad31cc2e4";
GetBackupStorageTypesAction.Result res = action.call();
```

 Python SDK

```
GetBackupStorageTypesAction action = GetBackupStorageTypesAction()
action.sessionId = "0c34591f7bcf4460ba3db2791b164f01"
GetBackupStorageTypesAction.Result res = action.call()
```

---

#### 更新镜像服务器信息(UpdateBackupStorage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateBackupStorage": {
"name": "New Name"
  },
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
-X PUT -d '{"updateBackupStorage":{"name":"New Name"}}' \
http://localhost:8080/zstack/v1/backup-storage/72f0f262f3323515b177d148ad1efb66/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 指定目标镜像服务器的UUID |  | 0.6 |
| name (可选) | String | body(包含在**updateBackupStorage**结构中) | 镜像服务器的新名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateBackupStorage**结构中) | 镜像服务器新的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "New Name",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:36 PM",
"lastOpDate": "Jun 7, 2017 9:20:36 PM",
"attachedZoneUuids": [
"90b2283f6c454453923dcf2f8e188330"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateBackupStorageAction action = new UpdateBackupStorageAction();
action.uuid = "2fe89c39bc2442aba58d5666d447b7c8";
action.name = "New Name";
action.sessionId = "1c2edd7a86564567ad34b7960808654e";
UpdateBackupStorageAction.Result res = action.call();
```

 Python SDK

```
UpdateBackupStorageAction action = UpdateBackupStorageAction()
action.uuid = "f85f3310a70e4e01be84364aeb2caa42"
action.name = "New Name"
action.sessionId = "4176bd78f5754872b4963e0d3ddbc529"
UpdateBackupStorageAction.Result res = action.call()
```

---

#### 从镜像服务器导出镜像(ExportImageFromBackupStorage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/{backupStorageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"exportImageFromBackupStorage": {
"imageUuid": "bd09de6529704e168923b77e5c1445c3"
  },
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
-X PUT -d '{"exportImageFromBackupStorage":{"imageUuid":"0538b97654be3249a962327ace7c5520"}}' \
http://localhost:8080/zstack/v1/backup-storage/03c75cf832863825b43696ea22d5d1ad/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 1.7 |
| imageUuid | String | body(包含在**exportImageFromBackupStorage**结构中) | 镜像UUID |  | 1.7 |
| exportFormat (可选) | String | body(包含在**exportImageFromBackupStorage**结构中) | 导出镜像的保存格式 |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 1.7 |
| userTags (可选) | List | body | 用户标签 |  | 1.7 |



##### API返回

 返回示例

```
{"imageUrl": "http://bs-host-name/path/to/image.qcow2",
  "exportMd5Sum": "8a239d17b045dea51c4677fa90a42ed8"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUrl | String | 被导出镜像的访问地址 | 1.7 |
| exportMd5Sum | String | 被导出镜像的md5值 | 3.9.0 |
| success | boolean | 导出成功失败标志 | 1.7 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 1.7 |

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
ExportImageFromBackupStorageAction action = new ExportImageFromBackupStorageAction();
action.backupStorageUuid = "b95c2eef6b8d44248305bc21b58324dd";
action.imageUuid = "a8e908dd49a444d2ad37dd729a2d881f";
action.sessionId = "f58bf3e6d8294d488573fc62511a2ad0";
ExportImageFromBackupStorageAction.Result res = action.call();
```

 Python SDK

```
ExportImageFromBackupStorageAction action = ExportImageFromBackupStorageAction()
action.backupStorageUuid = "dda8b4f308534e98a5fc2facdbc7936e"
action.imageUuid = "7ed5c3c65ae941dabe9ecc00b7a1b015"
action.sessionId = "f724920d165944218cd71b76e755757e"
ExportImageFromBackupStorageAction.Result res = action.call()
```

---

#### 从镜像服务器元数据中同步镜像(SyncImage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/image-store/{imageStoreUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncImage": {},
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncImage":{}}' \
http://localhost:8080/zstack/v1/backup-storage/image-store/81f447310d194ef5a8c0f7bbdcdc8401/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageStoreUuid | String | url | 镜像服务器UUID |  | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



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

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
SyncImageAction action = new SyncImageAction();
action.imageStoreUuid = "cff07127e2134fe28396a1aaeb70a1cf";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncImageAction.Result res = action.call();
```

 Python SDK

```
SyncImageAction action = SyncImageAction()
action.imageStoreUuid = "8a1247ffe8354566adb6ccae56aa1db3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncImageAction.Result res = action.call()
```

---

#### 从镜像服务器删除导出的镜像(DeleteExportedImageFromBackupStorage)



##### API请求

 URLs

```
DELETE/v1/backup-storage/{backupStorageUuid}/exported-images/{imageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bb7d8495054d412fa8c7c16b8625222c" \
-X DELETE http://localhost:8080/zstack/v1/backup-storage/c03c38ab9d184143891718c4b3f664d1/exported-images/dce27bd0a0ae4aaa8771ac33d481ec52?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 1.7 |
| imageUuid | String | url | 镜像UUID |  | 1.7 |
| systemTags (可选) | List | body | 系统标签 |  | 1.7 |
| userTags (可选) | List | body | 用户标签 |  | 1.7 |



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
DeleteExportedImageFromBackupStorageAction action = new DeleteExportedImageFromBackupStorageAction();
action.backupStorageUuid = "9c781fd5c7334e8492c9d3409ad0c63a";
action.imageUuid = "b9b4f79d505040eba37ad6e4581b64fd";
action.sessionId = "ecce8dd56c3a476c8dd1ac90aeb0d321";
DeleteExportedImageFromBackupStorageAction.Result res = action.call();
```

 Python SDK

```
DeleteExportedImageFromBackupStorageAction action = DeleteExportedImageFromBackupStorageAction()
action.backupStorageUuid = "29e4e1a659004403bd9b3738b36dd37e"
action.imageUuid = "2ba013855b8f4c688d977b545272541f"
action.sessionId = "e2c772523e104f3da969630930e68a17"
DeleteExportedImageFromBackupStorageAction.Result res = action.call()
```

---

#### 挂载镜像服务器至区域(AttachBackupStorageToZone)



##### API请求

 URLs

```
POST zstack/v1/zones/{zoneUuid}/backup-storage/{backupStorageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/zones/5776b543bc713f6d9abca9cd605c8199/backup-storage/53ef01cbf71d3bd68206908b87e51403
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | url | 区域UUID |  | 0.6 |
| backupStorageUuid | String | url | 镜像存储UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "My Backup Storage",
"description": "Public Backup Storage",
"totalCapacity": 1073741824,
"availableCapacity": 968884224,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:19 PM",
"lastOpDate": "Jun 7, 2017 9:20:19 PM",
"attachedZoneUuids": [
"73799602dbf64c0d85694de34fc596c3"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AttachBackupStorageToZoneAction action = new AttachBackupStorageToZoneAction();
action.zoneUuid = "426c6d907d3546378bd0007a74fc68e4";
action.backupStorageUuid = "d60efb0b61c3420a8e2d90d30054548f";
action.sessionId = "1b44ab68b73b4336a34aa10f6dc93cf8";
AttachBackupStorageToZoneAction.Result res = action.call();
```

 Python SDK

```
AttachBackupStorageToZoneAction action = AttachBackupStorageToZoneAction()
action.zoneUuid = "a590b4b45fbf441499bc0eebc23966d8"
action.backupStorageUuid = "62be70c887354bcfbec52c64e88a6718"
action.sessionId = "bf4faf33fd544650928a0d0732a2f1c1"
AttachBackupStorageToZoneAction.Result res = action.call()
```

---

#### 从区域中卸载已经挂载的镜像服务器(DetachBackupStorageFromZone)



##### API请求

 URLs

```
DELETE/v1/zones/{zoneUuid}/backup-storage/{backupStorageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth d0143df7af864c029c386e8957d218b6" \
-X DELETE http://localhost:8080/zstack/v1/zones/cb571dd2f60740de9fea4d9003a9f33f/backup-storage/8cbfbfd5b24a4d01aaa7da5a6fc96169?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 0.6 |
| zoneUuid | String | url | 区域UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "My Backup Storage",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:21 PM",
"lastOpDate": "Jun 7, 2017 9:20:21 PM",
"attachedZoneUuids": [
"c57c33405b544ee580e6892a796cff96"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
DetachBackupStorageFromZoneAction action = new DetachBackupStorageFromZoneAction();
action.backupStorageUuid = "a1b0bc9a79984c43bbf04da9d3ae6a4d";
action.zoneUuid = "c2be518dc66a4f3cb513d0cda54e9e96";
action.sessionId = "6256e305d8eb4d969dc244ae0b8fc7cb";
DetachBackupStorageFromZoneAction.Result res = action.call();
```

 Python SDK

```
DetachBackupStorageFromZoneAction action = DetachBackupStorageFromZoneAction()
action.backupStorageUuid = "86342d8a57fb42c19113ff5311947874"
action.zoneUuid = "c33c4fb6a91d4c13a75014262256bfbd"
action.sessionId = "0b9369db754a4e01b6ab28bc1140bebc"
DetachBackupStorageFromZoneAction.Result res = action.call()
```

---

#### 跨镜像服务器迁移镜像(BackupStorageMigrateImage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/images/{imageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "backupStorageMigrateImage": {
    "srcBackupStorageUuid": "94a166b9be264f1cafc6de4373117711",
    "dstBackupStorageUuid": "01e8e16d56f44880bfe00bdd22da37ed"
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
-X PUT -d '{"backupStorageMigrateImage":{"srcBackupStorageUuid":"dc0d29bb93a93c9b859919c42b8ea583","dstBackupStorageUuid":"1a1c9bfe9f1d328c846e829339f91184"}}' \
http://localhost:8080/zstack/v1/backup-storage/images/728c33a3e6a5319c9276fb43ae982de7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageUuid | String | url | 镜像UUID |  | 2.2 |
| srcBackupStorageUuid | String | body(包含在**backupStorageMigrateImage**结构中) | 源镜像服务器UUID |  | 2.2 |
| dstBackupStorageUuid | String | body(包含在**backupStorageMigrateImage**结构中) | 目标镜像服务器UUID |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5030c88a703e41b986d140880ad79bcd",
    "name": "TinyLinux",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0.0,
        "imageUuid": "5030c88a703e41b986d140880ad79bcd",
        "backupStorageUuid": "21df59afa9414a0aa405cb4c4fef2fee",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 2.2 |
| inventory | ImageInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| size | Long |  | 2.2 |
| actualSize | Long |  | 2.2 |
| md5Sum | String |  | 2.2 |
| url | String |  | 2.2 |
| mediaType | String |  | 2.2 |
| guestOsType | String |  | 2.2 |
| type | String |  | 2.2 |
| platform | String |  | 2.2 |
| format | String |  | 2.2 |
| system | Boolean |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.2 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 2.2 |
| backupStorageUuid | String | 镜像存储UUID | 2.2 |
| installPath | String |  | 2.2 |
| exportUrl | String |  | 2.2 |
| exportMd5Sum | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |



##### SDK示例

 Java SDK

```
BackupStorageMigrateImageAction action = new BackupStorageMigrateImageAction();
action.imageUuid = "c128546f17ba4dfc92055232549fd335";
action.srcBackupStorageUuid = "5346ba40a0d34caeb0b93f1b1a0db365";
action.dstBackupStorageUuid = "1a2dd487461f403eb47ac8c976c129a2";
action.sessionId = "c9fd105944334cddb33c03a1b3d3f423";
BackupStorageMigrateImageAction.Result res = action.call();
```

 Python SDK

```
BackupStorageMigrateImageAction action = BackupStorageMigrateImageAction()
action.imageUuid = "ecda1a5ff835474897b59aedd04bee5e"
action.srcBackupStorageUuid = "84242c5298634005b748140d01538d6a"
action.dstBackupStorageUuid = "593ed6cba5b046aeb33b77a6ac1fa927"
action.sessionId = "6a214423493146078b5a2c9b3f74b80d"
BackupStorageMigrateImageAction.Result res = action.call()
```

---

#### 获取候选列表(GetBackupStorageCandidatesForImageMigration)



获取镜像迁移的目标镜像服务器候选列表。

##### API请求

 URLs

```
GET zstack/v1/backup-storage/{srcBackupStorageUuid}/migration-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3de5faeefb2d404ab8794990b744538c" \
-X GET http://localhost:8080/zstack/v1/backup-storage/3c738531e0b64399a354022d59a46ebb/migration-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| srcBackupStorageUuid | String | url | 待迁移镜像所在镜像服务器UUID |  | 2.2 |
| systemTags (可选) | List | query | 系统标签 |  | 2.2 |
| userTags (可选) | List | query | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "7ed005f5dcfd4ca7b1883b97c803f53b",
      "name": "BS-1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventories | List | 详情参考[inventories] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| url | String |  | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| totalCapacity | Long |  | 2.2 |
| availableCapacity | Long |  | 2.2 |
| type | String |  | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| attachedZoneUuids | List |  | 2.2 |



##### SDK示例

 Java SDK

```
GetBackupStorageCandidatesForImageMigrationAction action = new GetBackupStorageCandidatesForImageMigrationAction();
action.srcBackupStorageUuid = "cf9fb97b3045411ab5345fe678116bf8";
action.sessionId = "2887bb5380f242f8ab43ae2d8649cb73";
GetBackupStorageCandidatesForImageMigrationAction.Result res = action.call();
```

 Python SDK

```
GetBackupStorageCandidatesForImageMigrationAction action = GetBackupStorageCandidatesForImageMigrationAction()
action.srcBackupStorageUuid = "962c8f5399354df591c08fc3d25b58c1"
action.sessionId = "ab7451c36d8c4c3ea85d3c7395389fda"
GetBackupStorageCandidatesForImageMigrationAction.Result res = action.call()
```

---

#### 镜像仓库服务器相关接口

---

#### 添加镜像仓库服务器(AddImageStoreBackupStorage)



##### API请求

 URLs

```
POST zstack/v1/backup-storage/image-store
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"hostname": "192.168.1.8",
"username": "admin",
"password": "admin%pass",
"sshPort": 22.0,
"url": "/data/imagestore",
"name": "ImageStore",
"importImages": false
  },
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
-X POST -d '{"params":{"hostname":"192.168.1.8","username":"admin","password":"admin%pass","sshPort":22.0,"url":"/data/imagestore","name":"ImageStore","importImages":false}}' \
http://localhost:8080/zstack/v1/backup-storage/image-store
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostname | String | body(包含在params结构中) | 服务器主机地址 |  | 1.6 |
| username | String | body(包含在params结构中) | 服务器 SSH 用户名 (用于 Ansible 部署) |  | 1.6 |
| password | String | body(包含在params结构中) | 服务器 SSH 用户密码 |  | 1.6 |
| sshPort (可选) | int | body(包含在params结构中) | 服务器 SSH 端口 |  | 1.6 |
| url | String | body(包含在params结构中) | 镜像仓库本地数据存放路径 |  | 1.6 |
| name | String | body(包含在params结构中) | 镜像仓库服务器名称 |  | 1.6 |
| description (可选) | String | body(包含在params结构中) | 镜像仓库的详细描述 |  | 1.6 |
| type (可选) | String | body(包含在params结构中) | 这里是 ImageStoreBackupStorage |  | 1.6 |
| importImages (可选) | boolean | body(包含在params结构中) | 是否导入镜像 |  | 1.9 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID。若指定，镜像服务器会使用该字段值作为UUID |  | 1.6 |
| systemTags (可选) | List | body(包含在params结构中) | 系统标签 |  | 1.6 |
| userTags (可选) | List | body(包含在params结构中) | 用户标签 |  | 1.6 |


  - 选项格式为：`fsInfo::type::$TYPE::url::$URL::options::$OPTIONS`
  - 例如：`fsInfo::type::nfs::url::172.32.1.119:/nas/nfs2::options::nolock,vers=3,rsize=32768,wsize=32768`
- 例如：`fsInfo::type::nfs::url::172.32.1.119:/nas/nfs2::options::nolock,vers=3,rsize=32768,wsize=32768`


> **注意:** 说明:



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
AddImageStoreBackupStorageAction action = new AddImageStoreBackupStorageAction();
action.hostname = "192.168.1.8";
action.username = "admin";
action.password = "admin%pass";
action.sshPort = 22.0;
action.url = "/data/imagestore";
action.name = "ImageStore";
action.importImages = false;
action.sessionId = "5171f258102a43368597dedd6317622b";
AddImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
AddImageStoreBackupStorageAction action = AddImageStoreBackupStorageAction()
action.hostname = "192.168.1.8"
action.username = "admin"
action.password = "admin%pass"
action.sshPort = 22.0
action.url = "/data/imagestore"
action.name = "ImageStore"
action.importImages = false
action.sessionId = "7b360d3775524a9780474b07ff68ed15"
AddImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 查询镜像仓库服务器(QueryImageStoreBackupStorage)



##### API请求

 URLs

```
GET zstack/v1/backup-storage/image-store
GET zstack/v1/backup-storage/image-store/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f3580612efa9402082b0b57447e3fbc9" \
-X GET http://localhost:8080/zstack/v1/backup-storage/image-store?q=uuid=5870d2edddff4ccc9f27a67e3a23391a
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3831efab7c7a40ce88149e508f433169" \
-X GET http://localhost:8080/zstack/v1/backup-storage/image-store/3f326deb28fa4176964867d888b197a4
```



可查询字段

运行CLI命令行工具，输入QueryImageStoreBackupStorage并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "hostname": "127.0.0.1",
      "username": "zstack",
      "sshPort": 22.0,
      "uuid": "744dc382db7b3598af79246b67e45230",
      "name": "ImageStoreBS",
      "url": "/Cloud_bs",
      "description": "My ImageStore Backup Storage.",
      "totalCapacity": 1.099511627776E12,
      "availableCapacity": 5.49755813888E11,
      "type": "ImageStoreBackupStorage",
      "state": "Enabled",
      "status": "Connected",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "attachedZoneUuids": [
        "c3affca1fde2388691216e0f7884f515"
      ]
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
| hostname | String |  | 0.6 |
| username | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



SDK示例 Java SDK

```
QueryImageStoreBackupStorageAction action = new QueryImageStoreBackupStorageAction();
action.conditions = asList("uuid=d087b11dccd94ea8933ecc37b193fd50");
action.sessionId = "3b90553d582f4ec2aebfb8a384e4e447";
QueryImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
QueryImageStoreBackupStorageAction action = QueryImageStoreBackupStorageAction()
action.conditions = ["uuid=0c5b7c9cb2d84636aa2bbe20ce576ff8"]
action.sessionId = "89dbffa3dab64d5693b61cacce2d2268"
QueryImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 重连镜像仓库服务器(ReconnectImageStoreBackupStorage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/image-store/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"reconnectImageStoreBackupStorage": {},
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
-X PUT -d '{"reconnectImageStoreBackupStorage":{}}' \
http://localhost:8080/zstack/v1/backup-storage/image-store/a6d3a3c8a24b3f669fcecbb7bc6798ca/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 镜像仓库服务器的UUID |  | 1.6 |
| systemTags (可选) | List | body(包含在params结构中) | 系统标签 |  | 1.6 |
| userTags (可选) | List | body(包含在params结构中) | 用户标签 |  | 1.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "ImageStore",
"totalCapacity": 1.073741824E9,
"availableCapacity": 8.05306368E8,
"state": "Enabled",
"status": "Connected",
"attachedZoneUuids": [
"3b8b703c308741ec9a38411d003fdcbe"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageStoreBackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| hostname | String |  | 0.6 |
| username | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
ReconnectImageStoreBackupStorageAction action = new ReconnectImageStoreBackupStorageAction();
action.uuid = "35f288ca1e2f4f719c4f284277f78545";
action.sessionId = "af42d38e4ccc499ea5ca72ea82beae11";
ReconnectImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
ReconnectImageStoreBackupStorageAction action = ReconnectImageStoreBackupStorageAction()
action.uuid = "751f52d7c74140119ca865261e30cafa"
action.sessionId = "075295f4c9fe45c185d1821e6c4d0f71"
ReconnectImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 更新镜像仓库服务器信息(UpdateImageStoreBackupStorage)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/image-store/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateImageStoreBackupStorage": {
"hostname": "192.168.1.18"
  },
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
-X PUT -d '{"updateImageStoreBackupStorage":{"hostname":"192.168.1.18"}}' \
http://localhost:8080/zstack/v1/backup-storage/image-store/fa603f20ce2c370a8ba9d1928c3d6173/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| username (可选) | String | body(包含在**updateImageStoreBackupStorage**结构中) | SSH 用户名 (用于 Ansible 部署) |  | 1.6 |
| password (可选) | String | body(包含在**updateImageStoreBackupStorage**结构中) | SSH 用户密码 |  | 1.6 |
| hostname (可选) | String | body(包含在**updateImageStoreBackupStorage**结构中) | 镜像服务器主机名 |  | 1.6 |
| sshPort (可选) | Integer | body(包含在**updateImageStoreBackupStorage**结构中) | SSH 端口号 |  | 1.6 |
| uuid | String | url | 镜像服务器的UUID |  | 1.6 |
| name (可选) | String | body(包含在**updateImageStoreBackupStorage**结构中) | 镜像服务器的新名称 |  | 1.6 |
| description (可选) | String | body(包含在**updateImageStoreBackupStorage**结构中) | 镜像服务器的更新详细描述 |  | 1.6 |
| systemTags (可选) | List | body(包含在**updateImageStoreBackupStorage**结构中) | 系统标签 |  | 1.6 |
| userTags (可选) | List | body(包含在**updateImageStoreBackupStorage**结构中) | 用户标签 |  | 1.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "New Name",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:12 PM",
"lastOpDate": "Jun 7, 2017 9:20:12 PM",
"attachedZoneUuids": [
"7c99892d8d5542faae4d1dd7d17be252"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateImageStoreBackupStorageAction action = new UpdateImageStoreBackupStorageAction();
action.hostname = "192.168.1.18";
action.uuid = "b7220dfd8c604483819df54af3e2e5df";
action.sessionId = "d9f658720aa84cc190cb26f84b4a9137";
UpdateImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
UpdateImageStoreBackupStorageAction action = UpdateImageStoreBackupStorageAction()
action.hostname = "192.168.1.18"
action.uuid = "9cf8df2338b9497d886ccb49dfb4278c"
action.sessionId = "4b8bc0b578ca4da1bb5baf1802480de2"
UpdateImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 从镜像仓库回收磁盘空间(ReclaimSpaceFromImageStore)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/image-store/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"reclaimSpaceFromImageStore": {},
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
-X PUT -d '{"reclaimSpaceFromImageStore":{}}' \
http://localhost:8080/zstack/v1/backup-storage/image-store/ec74c4664f52342e898fb0fa966d915e/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 镜像仓库的UUID，唯一标示该资源 |  | 1.10 |
| systemTags (可选) | List | body(包含在params结构中) | 系统标签 |  | 1.10 |
| userTags (可选) | List | body(包含在params结构中) | 用户标签 |  | 1.10 |



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
ReclaimSpaceFromImageStoreAction action = new ReclaimSpaceFromImageStoreAction();
action.uuid = "1dbdc3a4c7cd47d288f6c71116ae5b1f";
action.sessionId = "2e4a160b40b64fb4a9faa04829000d68";
ReclaimSpaceFromImageStoreAction.Result res = action.call();
```

 Python SDK

```
ReclaimSpaceFromImageStoreAction action = ReclaimSpaceFromImageStoreAction()
action.uuid = "713fa4965e6f4f70aeb1c96cd9d959ef"
action.sessionId = "87839a65f127443093bc708bcdaf3b0c"
ReclaimSpaceFromImageStoreAction.Result res = action.call()
```

---

#### Ceph镜像服务器相关接口

---

#### 添加Ceph镜像服务器(AddCephBackupStorage)



##### API请求

 URLs

```
POST zstack/v1/backup-storage/ceph
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"monUrls": [
"10.0.1.2"
    ],
"poolName": "zs-images",
"name": "My Ceph Backup Storage",
"importImages": false
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
-X POST -d '{"params":{"monUrls":["10.0.1.2"],"poolName":"zs-images","name":"My Ceph Backup Storage","importImages":false}}' \
http://localhost:8080/zstack/v1/backup-storage/ceph
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| monUrls | List | body(包含在params结构中) | Ceph mon 的地址列表 |  | 0.6 |
| poolName (可选) | String | body(包含在params结构中) | 用于存放镜像的 Ceph pool 的名字 |  | 0.6 |
| url | String | body(包含在params结构中) | 未使用 |  | 0.6 |
| name | String | body(包含在params结构中) | 镜像服务器名字 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 镜像服务器的详细描述 |  | 0.6 |
| type (可选) | String | body(包含在params结构中) | 镜像服务器的类型，此处为 Ceph |  | 0.6 |
| importImages (可选) | boolean | body(包含在params结构中) | 添加后是否导入镜像 |  | 1.9 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID。若指定，镜像服务器会使用该字段值作为UUID。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "My Backup Storage",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:17 PM",
"lastOpDate": "Jun 7, 2017 9:20:17 PM",
"attachedZoneUuids": [
"812bb731a83847ffba9d8caa3a4633d2"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | BackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
AddCephBackupStorageAction action = new AddCephBackupStorageAction();
action.monUrls = asList("10.0.1.2");
action.poolName = "zs-images";
action.name = "My Ceph Backup Storage";
action.importImages = false;
action.sessionId = "a6df67e34a4840a38f6cdb1f5fdeeaa9";
AddCephBackupStorageAction.Result res = action.call();
```

 Python SDK

```
AddCephBackupStorageAction action = AddCephBackupStorageAction()
action.monUrls = [10.0.1.2]
action.poolName = "zs-images"
action.name = "My Ceph Backup Storage"
action.importImages = false
action.sessionId = "fb435a60b1a84c3e82fd9dc90d933b39"
AddCephBackupStorageAction.Result res = action.call()
```

---

#### 查询Ceph镜像服务器(QueryCephBackupStorage)



##### API请求

 URLs

```
GET zstack/v1/backup-storage/ceph
GET zstack/v1/backup-storage/ceph/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth d380f3382f294e7bac14527b517d0c49" \
-X GET http://localhost:8080/zstack/v1/backup-storage/ceph?q=uuid=005420eeec6c4a6292939ea7fa8a954b
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 0aab3ffc9f9c49fba1932c9f2cf38434" \\
-X GET http://localhost:8080/zstack/v1/backup-storage/ceph/3e3c2f5e4f5d476ba1ef8e5ba42be06b
```



可查询字段

运行CLI命令行工具，输入`QueryCephBackupStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "My Backup Storage",
"description": "Public Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:21:12 PM",
"lastOpDate": "Jun 7, 2017 9:21:12 PM",
"attachedZoneUuids": [
"1613a61a681b4d7790ffc1d2bd2870d3"
      ]
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
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryCephBackupStorageAction action = new QueryCephBackupStorageAction();
action.conditions = asList("uuid=fd7807cb1d744273bf8632362f2095aa");
action.sessionId = "940c1b37499e4e3c831625717ddb1c8f";
QueryCephBackupStorageAction.Result res = action.call();
```

 Python SDK

```
QueryCephBackupStorageAction action = QueryCephBackupStorageAction()
action.conditions = ["uuid=2c8474f249234365993ba771e4b495ba"]
action.sessionId = "2b7bb843955e4574b8ca8862d0223f8d"
QueryCephBackupStorageAction.Result res = action.call()
```

---

#### 更新Ceph镜像服务器mon节点(UpdateCephBackupStorageMon)



##### API请求

 URLs

```
PUT zstack/v1/backup-storage/ceph/mons/{monUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateCephBackupStorageMon": {
"hostname": "10.0.1.4"
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
-X PUT -d '{"updateCephBackupStorageMon":{"hostname":"10.0.1.4"}}' \
http://localhost:8080/zstack/v1/backup-storage/ceph/mons/c239e1d3164b3383bd12828632f706d6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| monUuid | String | url | mon节点UUID |  | 0.6 |
| hostname (可选) | String | body(包含在**updateCephBackupStorageMon**结构中) | mon节点新主机IP地址 |  | 0.6 |
| sshUsername (可选) | String | body(包含在**updateCephBackupStorageMon**结构中) | mon节点主机 ssh 用户名 |  | 0.6 |
| sshPassword (可选) | String | body(包含在**updateCephBackupStorageMon**结构中) | mon节点主机 ssh 用户密码 |  | 0.6 |
| sshPort (可选) | Integer | body(包含在**updateCephBackupStorageMon**结构中) | mon节点主机 ssh 端口 |  | 0.6 |
| monPort (可选) | Integer | body(包含在**updateCephBackupStorageMon**结构中) | mon节点的端口 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"mons": [
      {
"monAddr": "10.0.1.4",
"monUuid": "e1fd732039e64d3bb81d779cdea2e0e1"
      }
    ],
"name": "My Ceph Backup Storage",
"description": "Public Ceph Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:08 PM",
"lastOpDate": "Jun 7, 2017 9:20:08 PM",
"attachedZoneUuids": [
"073a93204ff54164af04748a7c2697c6"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CephBackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| fsid | String |  | 0.6 |
| poolName | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |
| poolUsedCapacity | Long |  | 2.3.2 |
| poolReplicatedSize | Integer |  | 2.3.2 |
| poolAvailableCapacity | Long |  | 2.3.2 |
| mons | List | 详情参考[mons] | 0.6 |

 #mons

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostname | String |  | 0.6 |
| monPort | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| monAddr | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| status | String |  | 0.6 |
| sshUsername | String |  | 0.6 |
| sshPassword | String |  | 0.6 |
| monUuid | String |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateCephBackupStorageMonAction action = new UpdateCephBackupStorageMonAction();
action.monUuid = "84b6fb1a92354d7081ac68d49c2c8346";
action.hostname = "10.0.1.4";
action.sessionId = "7012077b892a4102a98bc1a6a10b1b4f";
UpdateCephBackupStorageMonAction.Result res = action.call();
```

 Python SDK

```
UpdateCephBackupStorageMonAction action = UpdateCephBackupStorageMonAction()
action.monUuid = "622aa943b0204bf3a6c44e63321823f4"
action.hostname = "10.0.1.4"
action.sessionId = "5958f913a1464da58e1be33de69d470b"
UpdateCephBackupStorageMonAction.Result res = action.call()
```

---

#### Ceph镜像服务器添加mon节点(AddMonToCephBackupStorage)



##### API请求

 URLs

```
DELETE zstack/v1/backup-storage/ceph/{uuid}/mons
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"monUrls":["10.0.1.3"]}}' \
http://localhost:8080/zstack/v1/backup-storage/ceph/5229b4e9acf934e1a80337a8090d72d1/mons
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | Ceph镜像服务器的UUID |  | 0.6 |
| monUrls | List | body | mon节点名字列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"mons": [
      {
"monAddr": "10.0.1.2",
"monUuid": "d79571a057c94c41b0fad2ca688a6cec"
      }
    ],
"name": "My Ceph Backup Storage",
"description": "Public Ceph Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:30 PM",
"lastOpDate": "Jun 7, 2017 9:20:30 PM",
"attachedZoneUuids": [
"4fd92cde485a4225b97c86846c9f586c"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CephBackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| fsid | String |  | 0.6 |
| poolName | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |
| poolAvailableCapacity | Long |  | 2.3.2 |
| poolUsedCapacity | Long |  | 2.3.2 |
| poolReplicatedSize | Integer |  | 2.3.2 |
| mons | List | 详情参考[mons] | 0.6 |

 #mons

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostname | String |  | 0.6 |
| monPort | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| monAddr | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| status | String |  | 0.6 |
| sshUsername | String |  | 0.6 |
| sshPassword | String |  | 0.6 |
| monUuid | String |  | 0.6 |



##### SDK示例

 Java SDK

```
RemoveMonFromCephBackupStorageAction action = new RemoveMonFromCephBackupStorageAction();
action.uuid = "728cc9123a694a39a9e1915d9e50ee9f";
action.monHostnames = asList("10.0.1.2");
action.sessionId = "e12938edf7634fcebba3938d07acde47";
RemoveMonFromCephBackupStorageAction.Result res = action.call();
```

 Python SDK

```
RemoveMonFromCephBackupStorageAction action = RemoveMonFromCephBackupStorageAction()
action.uuid = "eede3cd9cbca4b3289e92a976619b67d"
action.monHostnames = [10.0.1.2]
action.sessionId = "fb2ddd76c26f43729fe5346e196c8532"
RemoveMonFromCephBackupStorageAction.Result res = action.call()
```

---

#### Ceph镜像服务器删除mon节点(RemoveMonFromCephBackupStorage)



##### API请求

 URLs

```
DELETE zstack/v1/backup-storage/ceph/{uuid}/mons?monHostnames={monHostnames}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 861c8d1f7c6c483fbde2a23f8e846e4a" \
-X DELETE http://localhost:8080/zstack/v1/backup-storage/ceph/3a6bd95933784fc49717392356cb67f3/mons?monHostnames=10.0.1.2
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | Ceph镜像服务器的UUID |  | 0.6 |
| monHostnames | List | body | mon节点名字列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"mons": [
      {
"monAddr": "10.0.1.2",
"monUuid": "d79571a057c94c41b0fad2ca688a6cec"
      }
    ],
"name": "My Ceph Backup Storage",
"description": "Public Ceph Backup Storage",
"totalCapacity": 1.073741824E9,
"availableCapacity": 9.68884224E8,
"type": "Ceph",
"state": "Enabled",
"status": "Connected",
"createDate": "Jun 7, 2017 9:20:30 PM",
"lastOpDate": "Jun 7, 2017 9:20:30 PM",
"attachedZoneUuids": [
"4fd92cde485a4225b97c86846c9f586c"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CephBackupStorageInventory | 详情参考[inventory] | 0.6 |

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
| fsid | String |  | 0.6 |
| poolName | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedZoneUuids | List |  | 0.6 |
| poolUsedCapacity | Long |  | 2.3.2 |
| poolReplicatedSize | Integer |  | 2.3.2 |
| poolAvailableCapacity | Long |  | 2.3.2 |
| mons | List | 详情参考[mons] | 0.6 |

 #mons

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostname | String |  | 0.6 |
| monPort | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| monAddr | String |  | 0.6 |
| sshPort | Integer |  | 0.6 |
| status | String |  | 0.6 |
| sshUsername | String |  | 0.6 |
| sshPassword | String |  | 0.6 |
| monUuid | String |  | 0.6 |



##### SDK示例

 Java SDK

```
RemoveMonFromCephBackupStorageAction action = new RemoveMonFromCephBackupStorageAction();
action.uuid = "728cc9123a694a39a9e1915d9e50ee9f";
action.monHostnames = asList("10.0.1.2");
action.sessionId = "e12938edf7634fcebba3938d07acde47";
RemoveMonFromCephBackupStorageAction.Result res = action.call();
```

 Python SDK

```
RemoveMonFromCephBackupStorageAction action = RemoveMonFromCephBackupStorageAction()
action.uuid = "eede3cd9cbca4b3289e92a976619b67d"
action.monHostnames = [10.0.1.2]
action.sessionId = "fb2ddd76c26f43729fe5346e196c8532"
RemoveMonFromCephBackupStorageAction.Result res = action.call()
```

---

### SAN存储相关接口

---

#### 查询SCSI Lun(QueryScsiLun)



##### API请求



查询Iscsi块设备和FC块设备。 URLs

```
GET zstack/v1/storage-devices/scsi-lun/luns
GET zstack/v1/storage-devices/scsi-lun/luns/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/scsi-lun/luns
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/scsi-lun/luns/c4006c2a536f3617944e2b00aff74af6
```



可查询字段

运行CLI命令行工具，输入QueryScsiLun并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

返回示例

```
{
  "inventories": [
    {
      "name": "fc-lun-36b083fe000daf018000022905ba35d8f",
      "uuid": "6f2428969262315488684c85e14eded2",
      "wwid": "36b083fe000daf018000022905ba35d8f",
      "vendor": "DELL",
      "model": "MD32xx",
      "wwn": "0x6f01faf000d5c3e7",
      "serial": "6b083fe000daf018000015505abbe00a",
      "type": "mpath",
      "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
      "size": 5.49755813888E12,
      "scsiLunHostRefs": [
        {
          "id": 1.0,
          "scsiLunUuid": "6f2428969262315488684c85e14eded2",
          "hostUuid": "0b756ca2d3843412860b7ec1b9315dd4",
          "createDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "scsiLunVmInstanceRefs": [],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "name": "iscsi-lun-scsi-14f504e46494c45524d5342436a6c2d4a4443672d30593032",
      "uuid": "7bfde6b8e5503606849a4f3781bc02d7",
      "wwid": "scsi-14f504e46494c45524d5342436a6c2d4a4443672d30593032",
      "vendor": "OPNFILER",
      "model": "VIRTUAL-DISK",
      "serial": "4f504e46494c45524d5342436a6c2d4a4443672d30593032",
      "type": "disk",
      "path": "ip-10.0.104.213:3260-iscsi-iqn.2018-09.io.cloud:tsn.0000003-lun-0",
      "size": 5.49755813888E12,
      "scsiLunHostRefs": [],
      "scsiLunVmInstanceRefs": [],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
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
| name | String | 资源名称 | 3.2.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| wwid | String | 磁盘全局唯一表示 | 3.2.0 |
| vendor | String | 磁盘供应商 | 3.2.0 |
| model | String | 磁盘型号 | 3.2.0 |
| wwn | String | 磁盘WWN | 3.2.0 |
| serial | String | 磁盘序列号 | 3.2.0 |
| type | String | 磁盘类型 | 3.2.0 |
| path | String | 磁盘路径 | 3.2.0 |
| state | String | 磁盘启用状态 | 3.2.0 |
| size | Long | 磁盘大小 | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.2.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.2.0 |

#scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 3.2.0 |
| hostUuid | String | 物理机UUID | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |

#scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 3.2.0 |
| vmInstanceUuid | String | 云主机UUID | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |



##### SDK示例

 Java SDK

```
QueryScsiLunAction action = new QueryScsiLunAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryScsiLunAction.Result res = action.call();
```

 Python SDK

```
QueryScsiLunAction action = QueryScsiLunAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryScsiLunAction.Result res = action.call()
```

---

#### 将LUN设备从物理机卸载(DetachScsiLunFromHost)



##### API请求

 URLs

```
PUT zstack/v1/storage-devices/scsi-lun/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "detachScsiLunFromHost": {
    "hostUuid": "dce542427a3a3d1fa13324c9f67352cb"
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
-X PUT -d '{"detachScsiLunFromHost":{"hostUuid":"dce542427a3a3d1fa13324c9f67352cb"}}' http://localhost:8080/zstack/v1/storage-devices/scsi-lun/fb5d3f596f683bd7a3b1bf1c396d5f4d/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | SCSI LUN UUID |  | 4.2.0 |
| hostUuid (可选) | String | body(包含在**detachScsiLunFromHost**结构中) | 物理机UUID |  | 4.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.2.0 |



##### API返回

返回示例

```
{
  "inventory": {
    "name": "test-scsi-lun",
    "uuid": "e09fbca6d27332a1946326f3ae114fc3",
    "wwid": "36b083fe000daf018000022905ba35d8f",
    "vendor": "DELL",
    "model": "MD32xx",
    "wwn": "0x6f01faf000d5c3e7",
    "serial": "6b083fe000daf018000015505abbe00a",
    "type": "mpath",
    "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
    "size": 5.49755813888E12,
    "scsiLunHostRefs": [],
    "scsiLunVmInstanceRefs": [],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.2.0 |
| inventories | List | 详情参考[inventory] | 4.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.2.0 |
| description | String | 错误的概要描述 | 4.2.0 |
| details | String | 错误的详细信息 | 4.2.0 |
| elaboration | String | 保留字段，默认为null | 4.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.2.0 |

#inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.2.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.2.0 |
| wwid | String | 磁盘全局唯一表示 | 4.2.0 |
| vendor | String | 磁盘供应商 | 4.2.0 |
| model | String | 磁盘型号 | 4.2.0 |
| wwn | String | 磁盘WWN | 4.2.0 |
| serial | String | 磁盘序列号 | 4.2.0 |
| type | String | 磁盘类型 | 4.2.0 |
| path | String | 磁盘路径 | 4.2.0 |
| state | String | 磁盘启用状态 | 4.2.0 |
| size | Long | 磁盘大小 | 4.2.0 |
| createDate | Timestamp | 创建时间 | 4.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.2.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 4.2.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 4.2.0 |

#scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 4.2.0 |
| hostUuid | String | 物理机UUID | 4.2.0 |
| createDate | Timestamp | 创建时间 | 4.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.2.0 |

#scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 4.2.0 |
| vmInstanceUuid | String | 云主机UUID | 4.2.0 |
| createDate | Timestamp | 创建时间 | 4.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.2.0 |



##### SDK示例

 Java SDK

```
DetachScsiLunFromHostAction action = new DetachScsiLunFromHostAction();
action.uuid = "fb5d3f596f683bd7a3b1bf1c396d5f4d";
action.hostUuid = "dce542427a3a3d1fa13324c9f67352cb";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachScsiLunFromHostAction.Result res = action.call();
```

 Python SDK

```
DetachScsiLunFromHostAction action = DetachScsiLunFromHostAction()
action.uuid = "fb5d3f596f683bd7a3b1bf1c396d5f4d"
action.hostUuid = "dce542427a3a3d1fa13324c9f67352cb"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachScsiLunFromHostAction.Result res = action.call()
```

---

#### iSCSI服务器相关接口

---

#### 添加iSCSI服务器(AddIscsiServer)



##### API请求

 URLs

```
POST zstack/v1/storage-devices/iscsi/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ip": "10.0.0.201",
    "port": 3260.0
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
-X POST -d '{"params":{"ip":"10.0.0.201","port":3260.0}}' http://localhost:8080/zstack/v1/storage-devices/iscsi/servers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| ip | String | body(包含在**params**结构中) | IP地址 |  | 3.0.0 |
| port (可选) | Integer | body(包含在**params**结构中) | 端口，默认为3260 |  | 3.0.0 |
| chapUserName (可选) | String | body(包含在**params**结构中) | CHAP用户名，默认为空 |  | 3.0.0 |
| chapUserPassword (可选) | String | body(包含在**params**结构中) | CHAP密码，默认为空 |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0b77c2e947ca3b40b79f6342728ec8fc",
    "name": "iscsi-server-10.0.0.201",
    "ip": "10.0.0.201",
    "port": 3260.0,
    "chapUserName": "username",
    "chapUserPassword": "password",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | IscsiServerInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| ip | String | IP地址 | 3.0.0 |
| port | Integer | 端口 | 3.0.0 |
| chapUserName | String | CHAP用户名 | 3.0.0 |
| chapUserPassword | String | CHAP密码 | 3.0.0 |
| state | String | 启用状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiTargets | List | 详情参考[iscsiTargets] | 3.0.0 |
| iscsiClusterRefs | List | 详情参考[iscsiClusterRefs] | 3.0.0 |

 #iscsiTargets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String | iSCSI服务器UUID | 3.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iqn | String | iSCSI IQN | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiLuns | List | 详情参考[iscsiLuns] | 3.0.0 |

 #iscsiLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |

 #iscsiClusterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String |  | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
AddIscsiServerAction action = new AddIscsiServerAction();
action.ip = "10.0.0.201";
action.port = 3260.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIscsiServerAction.Result res = action.call();
```

 Python SDK

```
AddIscsiServerAction action = AddIscsiServerAction()
action.ip = "10.0.0.201"
action.port = 3260.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIscsiServerAction.Result res = action.call()
```

---

#### 删除iSCSI服务器(DeleteIscsiServer)



##### API请求

 URLs

```
DELETE zstack/v1/storage-devices/iscsi/servers/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/storage-devices/iscsi/servers/7a3f7749fd393899b4b74d2b470e15eb?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | iSCSI服务器的UUID |  | 3.0.0 |
| deleteMode (可选) | String | url |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
DeleteIscsiServerAction action = new DeleteIscsiServerAction();
action.uuid = "7a3f7749fd393899b4b74d2b470e15eb";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIscsiServerAction.Result res = action.call();
```

 Python SDK

```
DeleteIscsiServerAction action = DeleteIscsiServerAction()
action.uuid = "7a3f7749fd393899b4b74d2b470e15eb"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIscsiServerAction.Result res = action.call()
```

---

#### 查询iSCSI服务器(QueryIscsiServer)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/iscsi/servers
GET zstack/v1/storage-devices/iscsi
GET zstack/v1/storage-devices/iscsi/servers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/iscsi/servers
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/iscsi
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/iscsi/servers/cf91d809261735be9f20429880c1d19c
```



可查询字段

运行CLI命令行工具，输入QueryIscsiServer并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "fd97e8b6d61c399abed358ea6b2fc206",
      "name": "iscsi-server-10.0.0.201",
      "ip": "10.0.0.201",
      "port": 3260.0,
      "chapUserName": "username",
      "chapUserPassword": "password",
      "state": "Enabled",
      "iscsiTargets": [
        {
          "iscsiServerUuid": "fd97e8b6d61c399abed358ea6b2fc206",
          "uuid": "d156429110f13c2ca07bbc04e4031231",
          "iqn": "iqn.2018-01.io.cloud:tsn.00001",
          "state": "Enabled",
          "iscsiLuns": [
            {
              "uuid": "500f63c8f44939bbab102222927f9290",
              "iscsiTargetUuid": "d156429110f13c2ca07bbc04e4031231",
              "wwid": "36b083fe000daf018000015505abbe00a",
              "vendor": "DELL",
              "model": "MD32xx",
              "wwn": "0x6b083fe000daf018",
              "serial": "6b083fe000daf018000015505abbe00a",
              "hctl": "6:0:1:1",
              "type": "mpath",
              "path": "ip-0.0.0.201:3260-iscsi-iqn.2018-01.io.cloud:tsn.00001-lun-0",
              "size": 3.000318820352E13,
              "multipathDeviceUuid": "36b083fe000daf018000015505abbe00a"
            }
          ],
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "iscsiClusterRefs": [
        {
          "id": 1.0,
          "iscsiServerUuid": "fd97e8b6d61c399abed358ea6b2fc206",
          "clusterUuid": "02db8eb4e3043f55b7f1cf02df735611",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventories | List | 详情参考[inventories] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| ip | String | IP地址 | 3.0.0 |
| port | Integer | 端口 | 3.0.0 |
| chapUserName | String | CHAP用户名 | 3.0.0 |
| chapUserPassword | String | CHAP密码 | 3.0.0 |
| state | String | 启用状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiTargets | List | 详情参考[iscsiTargets] | 3.0.0 |
| iscsiClusterRefs | List | 详情参考[iscsiClusterRefs] | 3.0.0 |

 #iscsiTargets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String | iSCSI服务器UUID | 3.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iqn | String | iSCSI IQN | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiLuns | List | 详情参考[iscsiLuns] | 3.0.0 |

 #iscsiLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |

 #iscsiClusterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String |  | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryIscsiServerAction action = new QueryIscsiServerAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIscsiServerAction.Result res = action.call();
```

 Python SDK

```
QueryIscsiServerAction action = QueryIscsiServerAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIscsiServerAction.Result res = action.call()
```

---

#### 刷新iSCSI服务器(RefreshIscsiServer)



##### API请求

 URLs

```
POST zstack/v1/storage-devices/iscsi/servers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/storage-devices/iscsi/servers/0243c5d7322a36718ad76d865682ba44
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a4a3ef3c3ed537e6b1040ee4b7d77686",
    "name": "iscsi-server-10.0.0.201",
    "ip": "10.0.0.201",
    "port": 3260.0,
    "chapUserName": "username",
    "chapUserPassword": "password",
    "state": "Enabled",
    "iscsiTargets": [
      {
        "iscsiServerUuid": "a4a3ef3c3ed537e6b1040ee4b7d77686",
        "uuid": "3da0cdedd9763edfab39a897f87454e9",
        "iqn": "iqn.2018-01.io.cloud:tsn.00001",
        "iscsiLuns": [
          {
            "uuid": "f569b3e3baf838e59d8a115458d72a9b",
            "iscsiTargetUuid": "3da0cdedd9763edfab39a897f87454e9",
            "wwid": "36b083fe000daf018000015505abbe00a",
            "vendor": "DELL",
            "model": "MD32xx",
            "wwn": "0x6b083fe000daf018",
            "serial": "6b083fe000daf018000015505abbe00a",
            "hctl": "6:0:1:1",
            "type": "mpath",
            "path": "ip-0.0.0.201:3260-iscsi-iqn.2018-01.io.cloud:tsn.00001-lun-0",
            "size": 3.000318820352E13,
            "multipathDeviceUuid": "36b083fe000daf018000015505abbe00a"
          }
        ],
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "iscsiClusterRefs": [
      {
        "id": 1.0,
        "iscsiServerUuid": "a4a3ef3c3ed537e6b1040ee4b7d77686",
        "clusterUuid": "da1ddc379fc137789b12bcac0ed90148",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | IscsiServerInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| ip | String | IP地址 | 3.0.0 |
| port | Integer | 端口 | 3.0.0 |
| chapUserName | String | CHAP用户名 | 3.0.0 |
| chapUserPassword | String | CHAP密码 | 3.0.0 |
| state | String | 启用状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiTargets | List | 详情参考[iscsiTargets] | 3.0.0 |
| iscsiClusterRefs | List | 详情参考[iscsiClusterRefs] | 3.0.0 |

 #iscsiTargets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String | iSCSI服务器UUID | 3.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iqn | String | iSCSI IQN | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiLuns | List | 详情参考[iscsiLuns] | 3.0.0 |

 #iscsiLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |

 #iscsiClusterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String |  | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
RefreshIscsiServerAction action = new RefreshIscsiServerAction();
action.uuid = "0243c5d7322a36718ad76d865682ba44";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RefreshIscsiServerAction.Result res = action.call();
```

 Python SDK

```
RefreshIscsiServerAction action = RefreshIscsiServerAction()
action.uuid = "0243c5d7322a36718ad76d865682ba44"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RefreshIscsiServerAction.Result res = action.call()
```

---

#### 更新iSCSI服务器配置(UpdateIscsiServer)



##### API请求

 URLs

```
POST zstack/v1/storage-devices/iscsi/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIscsiServer": {
    "name": "test-iscsi-server"
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
-X PUT -d '{"updateIscsiServer":{"name":"test-iscsi-server"}}' http://localhost:8080/zstack/v1/storage-devices/iscsi/servers/98d2177199ca301d9fd842eace2dbc67/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| chapUserName (可选) | String | body(包含在**params**结构中) | CHAP用户名 |  | 3.0.0 |
| chapUserPassword (可选) | String | body(包含在**params**结构中) | CHAP密码 |  | 3.0.0 |
| state (可选) | String | body(包含在**params**结构中) | 启用状态 | Enabled Disabled | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0b77c2e947ca3b40b79f6342728ec8fc",
    "name": "iscsi-server-10.0.0.201",
    "ip": "10.0.0.201",
    "port": 3260.0,
    "chapUserName": "username",
    "chapUserPassword": "password",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | IscsiServerInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| ip | String | IP地址 | 3.0.0 |
| port | Integer | 端口 | 3.0.0 |
| chapUserName | String | CHAP用户名 | 3.0.0 |
| chapUserPassword | String | CHAP密码 | 3.0.0 |
| state | String | 启用状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiTargets | List | 详情参考[iscsiTargets] | 3.0.0 |
| iscsiClusterRefs | List | 详情参考[iscsiClusterRefs] | 3.0.0 |

 #iscsiTargets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String | iSCSI服务器UUID | 3.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iqn | String | iSCSI IQN | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiLuns | List | 详情参考[iscsiLuns] | 3.0.0 |

 #iscsiLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |

 #iscsiClusterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String |  | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
UpdateIscsiServerAction action = new UpdateIscsiServerAction();
action.uuid = "98d2177199ca301d9fd842eace2dbc67";
action.name = "test-iscsi-server";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIscsiServerAction.Result res = action.call();
```

 Python SDK

```
UpdateIscsiServerAction action = UpdateIscsiServerAction()
action.uuid = "98d2177199ca301d9fd842eace2dbc67"
action.name = "test-iscsi-server"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIscsiServerAction.Result res = action.call()
```

---

#### 将iSCSI服务器加载到集群(AttachIscsiServerToCluster)



##### API请求

 URLs

```
POST zstack/v1/clusters/{clusterUuid}/storage-devices/iscsi/servers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/clusters/ee5a78dfa67b34598e9fe734111592a7/storage-devices/iscsi/servers/3ae1ec6d33d53ab7b8cea6e33e517e28
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | iSCSI服务器的的UUID |  | 3.0.0 |
| clusterUuid | String | url | 集群UUID |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a3d69cbb4ccc35f49354f34b9a52833d",
    "name": "iscsi-server-10.0.0.201",
    "ip": "10.0.0.201",
    "port": 3260.0,
    "chapUserName": "username",
    "chapUserPassword": "password",
    "state": "Enabled",
    "iscsiTargets": [
      {
        "iscsiServerUuid": "a3d69cbb4ccc35f49354f34b9a52833d",
        "uuid": "0a0f4da9f2ba3fddac178737e11cef73",
        "iqn": "iqn.2018-01.io.cloud:tsn.00001",
        "state": "Enabled",
        "iscsiLuns": [
          {
            "uuid": "f63e921f951435ee9d18901b8eccf986",
            "iscsiTargetUuid": "0a0f4da9f2ba3fddac178737e11cef73",
            "wwid": "36b083fe000daf018000015505abbe00a",
            "vendor": "DELL",
            "model": "MD32xx",
            "wwn": "0x6b083fe000daf018",
            "serial": "6b083fe000daf018000015505abbe00a",
            "hctl": "6:0:1:1",
            "type": "mpath",
            "path": "ip-0.0.0.201:3260-iscsi-iqn.2018-01.io.cloud:tsn.00001-lun-0",
            "size": 3.000318820352E13,
            "multipathDeviceUuid": "36b083fe000daf018000015505abbe00a"
          }
        ],
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "iscsiClusterRefs": [
      {
        "id": 1.0,
        "iscsiServerUuid": "a3d69cbb4ccc35f49354f34b9a52833d",
        "clusterUuid": "962af991872e3ac98a2c4a7385f92541",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | IscsiServerInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| ip | String | IP地址 | 3.0.0 |
| port | Integer | 端口 | 3.0.0 |
| chapUserName | String | CHAP用户名 | 3.0.0 |
| chapUserPassword | String | CHAP密码 | 3.0.0 |
| state | String | 启用状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiTargets | List | 详情参考[iscsiTargets] | 3.0.0 |
| iscsiClusterRefs | List | 详情参考[iscsiClusterRefs] | 3.0.0 |

 #iscsiTargets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String | iSCSI服务器UUID | 3.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iqn | String | iSCSI IQN | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiLuns | List | 详情参考[iscsiLuns] | 3.0.0 |

 #iscsiLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |

 #iscsiClusterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String |  | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
AttachIscsiServerToClusterAction action = new AttachIscsiServerToClusterAction();
action.uuid = "3ae1ec6d33d53ab7b8cea6e33e517e28";
action.clusterUuid = "ee5a78dfa67b34598e9fe734111592a7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachIscsiServerToClusterAction.Result res = action.call();
```

 Python SDK

```
AttachIscsiServerToClusterAction action = AttachIscsiServerToClusterAction()
action.uuid = "3ae1ec6d33d53ab7b8cea6e33e517e28"
action.clusterUuid = "ee5a78dfa67b34598e9fe734111592a7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachIscsiServerToClusterAction.Result res = action.call()
```

---

#### 将iSCSI服务器从集群卸载(DetachIscsiServerFromCluster)



##### API请求

 URLs

```
DELETE zstack/v1/clusters/{clusterUuid}/storage-devices/iscsi/servers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/clusters/81ecbd4ae7c9346aa3225592441c36df/storage-devices/iscsi/servers/132d1caceecd3847b30bd901485ccc44
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | iSCSI服务器的UUID |  | 3.0.0 |
| clusterUuid | String | url | 集群UUID |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2c42d5e271e93a91a4467bf936a21018",
    "ip": "10.0.0.201",
    "port": 3260.0,
    "chapUserName": "username",
    "chapUserPassword": "password",
    "state": "Enabled",
    "iscsiTargets": [
      {
        "iscsiServerUuid": "2c42d5e271e93a91a4467bf936a21018",
        "uuid": "84fb04ce8ac03803b99cab5cccd831d1",
        "iqn": "iqn.2018-01.io.cloud:tsn.00001",
        "state": "Enabled",
        "iscsiLuns": [
          {
            "uuid": "44d2c6a338123031a55ce32f102432af",
            "iscsiTargetUuid": "84fb04ce8ac03803b99cab5cccd831d1",
            "wwid": "36b083fe000daf018000015505abbe00a",
            "vendor": "DELL",
            "model": "MD32xx",
            "wwn": "0x6b083fe000daf018",
            "serial": "6b083fe000daf018000015505abbe00a",
            "hctl": "6:0:1:1",
            "type": "mpath",
            "path": "ip-0.0.0.201:3260-iscsi-iqn.2018-01.io.cloud:tsn.00001-lun-0",
            "size": 3.000318820352E13,
            "multipathDeviceUuid": "36b083fe000daf018000015505abbe00a"
          }
        ],
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "iscsiClusterRefs": [
      {
        "id": 1.0,
        "iscsiServerUuid": "2c42d5e271e93a91a4467bf936a21018",
        "clusterUuid": "ced139d5eded3049bbfe8364804fa8c0",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | IscsiServerInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| ip | String | IP地址 | 3.0.0 |
| port | Integer | 端口 | 3.0.0 |
| chapUserName | String | CHAP用户名 | 3.0.0 |
| chapUserPassword | String | CHAP密码 | 3.0.0 |
| state | String | 启用状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiTargets | List | 详情参考[iscsiTargets] | 3.0.0 |
| iscsiClusterRefs | List | 详情参考[iscsiClusterRefs] | 3.0.0 |

 #iscsiTargets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String | iSCSI服务器UUID | 3.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iqn | String | iSCSI IQN | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| iscsiLuns | List | 详情参考[iscsiLuns] | 3.0.0 |

 #iscsiLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |

 #iscsiClusterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiServerUuid | String |  | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
DetachIscsiServerFromClusterAction action = new DetachIscsiServerFromClusterAction();
action.uuid = "132d1caceecd3847b30bd901485ccc44";
action.clusterUuid = "81ecbd4ae7c9346aa3225592441c36df";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachIscsiServerFromClusterAction.Result res = action.call();
```

 Python SDK

```
DetachIscsiServerFromClusterAction action = DetachIscsiServerFromClusterAction()
action.uuid = "132d1caceecd3847b30bd901485ccc44"
action.clusterUuid = "81ecbd4ae7c9346aa3225592441c36df"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachIscsiServerFromClusterAction.Result res = action.call()
```

---

#### 查询iSCSI磁盘(QueryIscsiLun)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/iscsi/luns
GET zstack/v1/storage-devices/iscsi/luns/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/iscsi/luns
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/iscsi/luns/da96929549c63b66b8afc63be70a373f
```



可查询字段

运行CLI命令行工具，输入QueryIscsiLun并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "d833304319da3b32bc92f21c763a8e5b",
      "wwid": "36b083fe000daf018000015505abbe00a",
      "vendor": "DELL",
      "model": "MD32xx",
      "wwn": "0x6b083fe000daf018",
      "serial": "6b083fe000daf018000015505abbe00a",
      "hctl": "6:0:1:1",
      "type": "mpath",
      "path": "ip-0.0.0.201:3260-iscsi-iqn.2018-01.io.cloud:tsn.00001-lun-0",
      "size": 3.000318820352E13,
      "multipathDeviceUuid": "36b083fe000daf018000015505abbe00a"
    },
    {
      "uuid": "a21ee1e2e3f63a61ac983c53c29552d2",
      "wwid": "36b083fe000daf018000015505abbe00a",
      "vendor": "DELL",
      "model": "MD32xx",
      "wwn": "0x6b083fe000daf018",
      "serial": "6b083fe000daf018000015505abbe00a",
      "hctl": "6:0:3:1",
      "type": "mpath",
      "path": "ip-0.0.0.201:3260-iscsi-iqn.2018-01.io.cloud:tsn.00002-lun-0",
      "size": 3.000318820352E13,
      "multipathDeviceUuid": "36b083fe000daf018000015505abbe00a"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventories | List | 详情参考[inventories] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| iscsiTargetUuid | String | iSCSI目标UUID | 3.0.0 |
| wwid | String | 唯一识别ID | 3.0.0 |
| vendor | String | 设备供应商 | 3.0.0 |
| model | String | 设备型号 | 3.0.0 |
| wwn | String | 设备WWN | 3.0.0 |
| serial | String | 设备序列号 | 3.0.0 |
| hctl | String | SCSI设备HCTL | 3.0.0 |
| type | String | 设备类型 | 3.0.0 |
| path | String | 设备路径 | 3.0.0 |
| size | Long | 设备大小 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryIscsiLunAction action = new QueryIscsiLunAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIscsiLunAction.Result res = action.call();
```

 Python SDK

```
QueryIscsiLunAction action = QueryIscsiLunAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIscsiLunAction.Result res = action.call()
```

---

#### FC存储相关接口

---

#### 查询FC SAN存储(QueryFiberChannelStorage)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/fiber-channel/controllers
GET zstack/v1/storage-devices/fiber-channel
GET zstack/v1/storage-devices/fiber-channel/controllers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/fiber-channel/controllers?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/fiber-channel?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/fiber-channel/controllers/6ca3d260093e3c06840309e9e756b1bf
```



可查询字段

运行CLI命令行工具，输入`QueryFiberChannelStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "afedd6ab89d338fbaab258f981ca2295",
      "state": "Enabled",
      "fiberChannelLuns": [
        {
          "fiberChannelStorageUuid": "afedd6ab89d338fbaab258f981ca2295",
          "name": "fc-lun-36b083fe000daf018000022905ba35d8f",
          "uuid": "2e69f8443fbc3ec3a25a92ab8632f80f",
          "wwid": "36b083fe000daf018000022905ba35d8f",
          "vendor": "DELL",
          "model": "MD32xx",
          "wwn": "0x6f01faf000d5c3e7",
          "serial": "6b083fe000daf018000015505abbe00a",
          "type": "mpath",
          "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
          "size": 5.49755813888E12,
          "scsiLunHostRefs": [
            {
              "id": 3.0,
              "scsiLunUuid": "5a89fbd0d7793673acfa2e69acc56ce4",
              "hostUuid": "bc3f69d449aa3410bd7267a1050de980",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ],
          "scsiLunVmInstanceRefs": []
        },
        {
          "fiberChannelStorageUuid": "afedd6ab89d338fbaab258f981ca2295",
          "name": "fc-lun-36f01faf000d5c3e7000023ef5ba362f2",
          "uuid": "52039a86c9173ff7a86ce214fc3d47cf",
          "wwid": "36f01faf000d5c3e7000023ef5ba362f2",
          "vendor": "DELL",
          "model": "MD32xx",
          "wwn": "0x6b083fe000daf018",
          "serial": "6b083fe000daf018000015505abbe00a",
          "type": "mpath",
          "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-12",
          "size": 5.49755813888E12,
          "scsiLunHostRefs": [
            {
              "id": 3.0,
              "scsiLunUuid": "5a89fbd0d7793673acfa2e69acc56ce4",
              "hostUuid": "bc3f69d449aa3410bd7267a1050de980",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ],
          "scsiLunVmInstanceRefs": []
        }
      ],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "4e902db710403f68a7703e45d00e551d",
      "state": "Enabled",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| wwnn | String | FC SAN全局唯一表示 | 3.1.0 |
| state | String | 启用状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| fiberChannelLuns | List | 详情参考[fiberChannelLuns] | 3.1.0 |

 #fiberChannelLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| fiberChannelStorageUuid | String | FC SAN存储UUID | 3.1.0 |
| wwid | String | 磁盘全局唯一表示 | 3.1.0 |
| vendor | String | 供应商 | 3.1.0 |
| model | String | 型号 | 3.1.0 |
| wwn | String | 磁盘WWN | 3.1.0 |
| serial | String | 磁盘序列号 | 3.1.0 |
| type | String | 磁盘类型 | 3.1.0 |
| path | String | 磁盘路径 | 3.1.0 |
| size | Long | 磁盘大小 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| state | String | 启用状态 | 3.1.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.1.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.1.0 |

 #scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryFiberChannelStorageAction action = new QueryFiberChannelStorageAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFiberChannelStorageAction.Result res = action.call();
```

 Python SDK

```
QueryFiberChannelStorageAction action = QueryFiberChannelStorageAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFiberChannelStorageAction.Result res = action.call()
```

---

#### 刷新FC SAN存储(RefreshFiberChannelStorage)



##### API请求

 URLs

```
POST zstack/v1/storage-devices/fiber-channel/controllers
POST zstack/v1/storage-devices/fiber-channel/controllers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "uuid": "52049ca66e8135f5aac2835aecab62a0"
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
-X POST -d '{"params":{"uuid":"52049ca66e8135f5aac2835aecab62a0"}}' http://localhost:8080/zstack/v1/storage-devices/fiber-channel/controllers
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"uuid":"52049ca66e8135f5aac2835aecab62a0"}}' http://localhost:8080/zstack/v1/storage-devices/fiber-channel/controllers/52049ca66e8135f5aac2835aecab62a0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | body(包含在**params**结构中) | FC SAN存储的UUID，唯一标示该资源 |  | 3.1.0 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "971fa2e9e689304183d4eef676ad0241",
      "state": "Enabled",
      "fiberChannelLuns": [
        {
          "fiberChannelStorageUuid": "971fa2e9e689304183d4eef676ad0241",
          "name": "fc-lun-36b083fe000daf018000022905ba35d8f",
          "uuid": "2fb634b5c6ae3e1390360e982cdaf9d2",
          "wwid": "36b083fe000daf018000022905ba35d8f",
          "vendor": "DELL",
          "model": "MD32xx",
          "wwn": "0x6f01faf000d5c3e7",
          "serial": "6b083fe000daf018000015505abbe00a",
          "type": "mpath",
          "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
          "size": 5.49755813888E12,
          "scsiLunHostRefs": [
            {
              "id": 3.0,
              "scsiLunUuid": "fd0a53d0234e303c9ba7c316f5484a59",
              "hostUuid": "ef288e9807853188b76d3d445a35b345",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ],
          "scsiLunVmInstanceRefs": []
        },
        {
          "fiberChannelStorageUuid": "971fa2e9e689304183d4eef676ad0241",
          "name": "fc-lun-36f01faf000d5c3e7000023ef5ba362f2",
          "uuid": "fb37b3bb268c38c3803b93ee60f25ef6",
          "wwid": "36f01faf000d5c3e7000023ef5ba362f2",
          "vendor": "DELL",
          "model": "MD32xx",
          "wwn": "0x6b083fe000daf018",
          "serial": "6b083fe000daf018000015505abbe00a",
          "type": "mpath",
          "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-12",
          "size": 5.49755813888E12,
          "scsiLunHostRefs": [
            {
              "id": 3.0,
              "scsiLunUuid": "fd0a53d0234e303c9ba7c316f5484a59",
              "hostUuid": "ef288e9807853188b76d3d445a35b345",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ],
          "scsiLunVmInstanceRefs": []
        }
      ],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "ddc6eb334da838b08224ed6c43e67d0e",
      "state": "Enabled",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| wwnn | String | FC SAN全局唯一表示 | 3.1.0 |
| state | String | 启用状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| fiberChannelLuns | List | 详情参考[fiberChannelLuns] | 3.1.0 |

 #fiberChannelLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| fiberChannelStorageUuid | String | FC SAN存储UUID | 3.1.0 |
| wwid | String | 磁盘全局唯一表示 | 3.1.0 |
| vendor | String | 供应商 | 3.1.0 |
| model | String | 型号 | 3.1.0 |
| wwn | String | 磁盘WWN | 3.1.0 |
| serial | String | 磁盘序列号 | 3.1.0 |
| type | String | 磁盘类型 | 3.1.0 |
| path | String | 磁盘路径 | 3.1.0 |
| size | Long | 磁盘大小 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| state | String | 启用状态 | 3.1.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.1.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.1.0 |

 #scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
RefreshFiberChannelStorageAction action = new RefreshFiberChannelStorageAction();
action.uuid = "52049ca66e8135f5aac2835aecab62a0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RefreshFiberChannelStorageAction.Result res = action.call();
```

 Python SDK

```
RefreshFiberChannelStorageAction action = RefreshFiberChannelStorageAction()
action.uuid = "52049ca66e8135f5aac2835aecab62a0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RefreshFiberChannelStorageAction.Result res = action.call()
```

---

#### 更新SCSI LUN配置(UpdateScsiLun)



##### API请求

 URLs

```
PUT zstack/v1/storage-devices/scsi-lun/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateScsiLun": {
    "name": "test-scsi-lun"
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
-X PUT -d '{"updateScsiLun":{"name":"test-scsi-lun"}}' http://localhost:8080/zstack/v1/storage-devices/scsi-lun/e2e9d7f44ee23960bc6e4e31b0a010d9/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| name (可选) | String | body(包含在**updateScsiLun**结构中) | 资源名称 |  | 3.1.0 |
| state (可选) | String | body(包含在**updateScsiLun**结构中) | 启用状态 | Enabled Disabled | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-scsi-lun",
    "uuid": "57cefcdc1746340ba1649c446059aea0",
    "wwid": "36b083fe000daf018000022905ba35d8f",
    "vendor": "DELL",
    "model": "MD32xx",
    "wwn": "0x6f01faf000d5c3e7",
    "serial": "6b083fe000daf018000015505abbe00a",
    "type": "mpath",
    "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
    "size": 5.49755813888E12,
    "scsiLunHostRefs": [
      {
        "id": 1.0,
        "scsiLunUuid": "57cefcdc1746340ba1649c446059aea0",
        "hostUuid": "6e76dfbcc3b338c482ff51de1f0d76da",
        "createDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "scsiLunVmInstanceRefs": [],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | ScsiLunInventory | 详情参考[inventory] | 3.1.0 |

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
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| wwid | String | 磁盘全局唯一表示 | 3.1.0 |
| vendor | String | 磁盘供应商 | 3.1.0 |
| model | String | 磁盘型号 | 3.1.0 |
| wwn | String | 磁盘WWN | 3.1.0 |
| serial | String | 磁盘序列号 | 3.1.0 |
| type | String | 磁盘类型 | 3.1.0 |
| path | String | 磁盘路径 | 3.1.0 |
| state | String | 磁盘启用状态 | 3.1.0 |
| size | Long | 磁盘大小 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.1.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.1.0 |

 #scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
UpdateScsiLunAction action = new UpdateScsiLunAction();
action.uuid = "e2e9d7f44ee23960bc6e4e31b0a010d9";
action.name = "test-scsi-lun";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateScsiLunAction.Result res = action.call();
```

 Python SDK

```
UpdateScsiLunAction action = UpdateScsiLunAction()
action.uuid = "e2e9d7f44ee23960bc6e4e31b0a010d9"
action.name = "test-scsi-lun"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateScsiLunAction.Result res = action.call()
```

---

#### 将SCSI LUN加载到云主机(AttachScsiLunToVmInstance)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmInstanceUuid}/scsi-lun/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "disableMultiPathAttach": false
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
-X POST -d '{"params":{"disableMultiPathAttach":false}}' http://localhost:8080/zstack/v1/vm-instances/e5bc51b4fdd13d35b4abe7be408435d4/scsi-lun/e4ea0f73829b3206a497c88b896613d6
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | SCSI LUN的UUID，唯一标示该资源 |  | 3.1.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.1.0 |
| disableMultiPathAttach (可选) | String | url | 关闭自动加载多路径设备 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "fc-lun-36b083fe000daf018000022905ba35d8f",
    "uuid": "d20114f179003943904fee1127d16eba",
    "wwid": "36b083fe000daf018000022905ba35d8f",
    "vendor": "DELL",
    "model": "MD32xx",
    "wwn": "0x6f01faf000d5c3e7",
    "serial": "6b083fe000daf018000015505abbe00a",
    "type": "mpath",
    "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
    "size": 5.49755813888E12,
    "scsiLunHostRefs": [
      {
        "id": 1.0,
        "scsiLunUuid": "d20114f179003943904fee1127d16eba",
        "hostUuid": "e62d261d3f293e0182f85779e105eb13",
        "createDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "scsiLunVmInstanceRefs": [
      {
        "id": 1.0,
        "scsiLunUuid": "d20114f179003943904fee1127d16eba",
        "vmInstanceUuid": "84af387a5ef034818cc8488eaddbf5f3",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "attachMultipath": false
      }
    ],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | ScsiLunInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| wwid | String | 磁盘全局唯一表示 | 3.1.0 |
| vendor | String | 磁盘供应商 | 3.1.0 |
| model | String | 磁盘型号 | 3.1.0 |
| wwn | String | 磁盘WWN | 3.1.0 |
| serial | String | 磁盘序列号 | 3.1.0 |
| type | String | 磁盘类型 | 3.1.0 |
| path | String | 磁盘路径 | 3.1.0 |
| state | String | 磁盘启用状态 | 3.1.0 |
| size | Long | 磁盘大小 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.1.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.1.0 |

 #scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
AttachScsiLunToVmInstanceAction action = new AttachScsiLunToVmInstanceAction();
action.uuid = "e4ea0f73829b3206a497c88b896613d6";
action.vmInstanceUuid = "e5bc51b4fdd13d35b4abe7be408435d4";
action.disableMultiPathAttach = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachScsiLunToVmInstanceAction.Result res = action.call();
```

 Python SDK

```
AttachScsiLunToVmInstanceAction action = AttachScsiLunToVmInstanceAction()
action.uuid = "e4ea0f73829b3206a497c88b896613d6"
action.vmInstanceUuid = "e5bc51b4fdd13d35b4abe7be408435d4"
action.disableMultiPathAttach = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachScsiLunToVmInstanceAction.Result res = action.call()
```

---

#### 将SCSI LUN从云主机卸载(DetachScsiLunFromVmInstance)



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{vmInstanceUuid}/scsi-lun/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/68b34252ae3a386e92b74ce3a2bd7e4a/scsi-lun/4af9531a118a3b7aba404d794a4cfa51
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回



返回示例

```
{
  "inventory": {
    "name": "fc-lun-36b083fe000daf018000022905ba35d8f",
    "uuid": "a51554a318e333f1b96a7abe91674ede",
    "wwid": "36b083fe000daf018000022905ba35d8f",
    "vendor": "DELL",
    "model": "MD32xx",
    "wwn": "0x6f01faf000d5c3e7",
    "serial": "6b083fe000daf018000015505abbe00a",
    "type": "mpath",
    "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
    "size": 5.49755813888E12,
    "scsiLunHostRefs": [
      {
        "id": 1.0,
        "scsiLunUuid": "a51554a318e333f1b96a7abe91674ede",
        "hostUuid": "5c5a4a7c480e3b5791e0915785968eb1",
        "createDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "scsiLunVmInstanceRefs": [],
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | ScsiLunInventory | 详情参考[inventory] | 3.1.0 |

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
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| wwid | String | 磁盘全局唯一表示 | 3.1.0 |
| vendor | String | 磁盘供应商 | 3.1.0 |
| model | String | 磁盘型号 | 3.1.0 |
| wwn | String | 磁盘WWN | 3.1.0 |
| serial | String | 磁盘序列号 | 3.1.0 |
| type | String | 磁盘类型 | 3.1.0 |
| path | String | 磁盘路径 | 3.1.0 |
| state | String | 磁盘启用状态 | 3.1.0 |
| size | Long | 磁盘大小 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.1.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.1.0 |

 #scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI LUN UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
DetachScsiLunFromVmInstanceAction action = new DetachScsiLunFromVmInstanceAction();
action.uuid = "4af9531a118a3b7aba404d794a4cfa51";
action.vmInstanceUuid = "68b34252ae3a386e92b74ce3a2bd7e4a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachScsiLunFromVmInstanceAction.Result res = action.call();
```

 Python SDK

```
DetachScsiLunFromVmInstanceAction action = DetachScsiLunFromVmInstanceAction()
action.uuid = "4af9531a118a3b7aba404d794a4cfa51"
action.vmInstanceUuid = "68b34252ae3a386e92b74ce3a2bd7e4a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachScsiLunFromVmInstanceAction.Result res = action.call()
```

---

#### 检查SCSI Lun与集群连接关系(CheckScsiLunClusterStatus)



##### API请求

 URLs

```
PUT zstack/v1/storage-devices/scsi-lun/{uuid}/cluster/{clusterUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "checkScsiLunClusterStatus": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"checkScsiLunClusterStatus":{}}' http://localhost:8080/zstack/v1/storage-devices/scsi-lun/abe6bf1e763739f88f97055c14246245/cluster/5415c2beb8a93447a27f69c109cdfb23
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| clusterUuid | String | url | 集群UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "attachedHosts": [
      {
        "zoneUuid": "5899ac6fab7d3951acae1d43c4fd7f97",
        "name": "example",
        "uuid": "161616a23a4834cfbe3dd7000a75ef51",
        "clusterUuid": "b886a9367ff9362d8955443cc5065fab",
        "description": "example",
        "managementIp": "192.168.0.1",
        "hypervisorType": "KVM",
        "state": "Enabled",
        "status": "Connected",
        "totalCpuCapacity": 4.0,
        "availableCpuCapacity": 2.0,
        "totalMemoryCapacity": 4.0,
        "availableMemoryCapacity": 4.0
      }
    ],
    "unattachedHosts": [
      {
        "zoneUuid": "ee802d3432203cc99a9711b3d26e047d",
        "name": "example",
        "uuid": "0d28db87cedc3c729300bcc7f426f9b6",
        "clusterUuid": "5d5325e38b4331c28efe5367dc583110",
        "description": "example",
        "managementIp": "192.168.0.2",
        "hypervisorType": "KVM",
        "state": "Enabled",
        "status": "Connected",
        "totalCpuCapacity": 4.0,
        "availableCpuCapacity": 2.0,
        "totalMemoryCapacity": 4.0,
        "availableMemoryCapacity": 4.0
      }
    ],
    "isAllHostsAttached": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | ScsiLunClusterStatusInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| isAllHostsAttached | Boolean | SCSI Lun是否已与集群全部物理机连接 | 3.1.0 |
| attachedHosts | List | 详情参考[attachedHosts] | 3.1.0 |
| unattachedHosts | List | 详情参考[unattachedHosts] | 3.1.0 |

 #attachedHosts

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| clusterUuid | String | 集群UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| managementIp | String |  | 3.1.0 |
| hypervisorType | String |  | 3.1.0 |
| state | String |  | 3.1.0 |
| status | String |  | 3.1.0 |
| totalCpuCapacity | Long |  | 3.1.0 |
| availableCpuCapacity | Long |  | 3.1.0 |
| totalMemoryCapacity | Long |  | 3.1.0 |
| availableMemoryCapacity | Long |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #unattachedHosts

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| clusterUuid | String | 集群UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| managementIp | String |  | 3.1.0 |
| hypervisorType | String |  | 3.1.0 |
| state | String |  | 3.1.0 |
| status | String |  | 3.1.0 |
| totalCpuCapacity | Long |  | 3.1.0 |
| availableCpuCapacity | Long |  | 3.1.0 |
| totalMemoryCapacity | Long |  | 3.1.0 |
| availableMemoryCapacity | Long |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
CheckScsiLunClusterStatusAction action = new CheckScsiLunClusterStatusAction();
action.uuid = "abe6bf1e763739f88f97055c14246245";
action.clusterUuid = "5415c2beb8a93447a27f69c109cdfb23";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckScsiLunClusterStatusAction.Result res = action.call();
```

 Python SDK

```
CheckScsiLunClusterStatusAction action = CheckScsiLunClusterStatusAction()
action.uuid = "abe6bf1e763739f88f97055c14246245"
action.clusterUuid = "5415c2beb8a93447a27f69c109cdfb23"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckScsiLunClusterStatusAction.Result res = action.call()
```

---

#### 获取可加载的SCSI Lun(GetScsiLunCandidatesForAttachingVm)



获取云主机可以加载的SCSI Lun。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/candidate-storage-devices
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/ccd1f4cb76e83c3b997fc4ed16ed529f/candidate-storage-devices?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.1.0 |
| systemTags (可选) | List | query |  |  | 3.1.0 |
| userTags (可选) | List | query |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "fc-lun-36b083fe000daf018000022905ba35d8f",
      "uuid": "d4714249ba273a5c9d1c1cb3a1a16f24",
      "wwid": "36b083fe000daf018000022905ba35d8f",
      "vendor": "DELL",
      "model": "MD32xx",
      "wwn": "0x6f01faf000d5c3e7",
      "serial": "6b083fe000daf018000015505abbe00a",
      "type": "mpath",
      "path": "pci-0000:05:00.0-fc-0x2012b083fedaf018-lun-11",
      "size": 5.49755813888E12,
      "scsiLunHostRefs": [
        {
          "id": 1.0,
          "scsiLunUuid": "d4714249ba273a5c9d1c1cb3a1a16f24",
          "hostUuid": "c922c37f885e35aeb1ae87db3446fc7e",
          "createDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "scsiLunVmInstanceRefs": [],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |
| error | ErrorCode | 详情参考[error] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| wwid | String | 磁盘全局唯一表示 | 3.1.0 |
| vendor | String | 磁盘供应商 | 3.1.0 |
| model | String | 磁盘型号 | 3.1.0 |
| wwn | String | 磁盘WWN | 3.1.0 |
| serial | String | 磁盘序列号 | 3.1.0 |
| type | String | 磁盘类型 | 3.1.0 |
| path | String | 磁盘路径 | 3.1.0 |
| state | String | 磁盘启用状态 | 3.1.0 |
| size | Long | 磁盘大小 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| scsiLunHostRefs | List | 详情参考[scsiLunHostRefs] | 3.1.0 |
| scsiLunVmInstanceRefs | List | 详情参考[scsiLunVmInstanceRefs] | 3.1.0 |

 #scsiLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 3.1.0 |
| hostUuid | String | 物理机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #scsiLunVmInstanceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scsiLunUuid | String | SCSI Lun UUID | 3.1.0 |
| vmInstanceUuid | String | 云主机UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |



##### SDK示例

 Java SDK

```
GetScsiLunCandidatesForAttachingVmAction action = new GetScsiLunCandidatesForAttachingVmAction();
action.vmInstanceUuid = "ccd1f4cb76e83c3b997fc4ed16ed529f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetScsiLunCandidatesForAttachingVmAction.Result res = action.call();
```

 Python SDK

```
GetScsiLunCandidatesForAttachingVmAction action = GetScsiLunCandidatesForAttachingVmAction()
action.vmInstanceUuid = "ccd1f4cb76e83c3b997fc4ed16ed529f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetScsiLunCandidatesForAttachingVmAction.Result res = action.call()
```

---

#### NVMe存储相关接口

---

#### 查询NVMe磁盘(QueryNvmeLun)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/nvme/luns
GET zstack/v1/storage-devices/nvme/luns/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/nvme/luns
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/nvme/luns/066996e131e03824a7ef6a22defed432
```



可查询字段

运行CLI命令行工具，输入`QueryNvmeLun`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "nvmeTargetUuid": "f04819a9445c3d068c075e753d48fc3c",
      "nvmeLunHostRefs": [],
      "name": "nvme-lun-36b083fe000daf018000022905ba35d8f",
      "uuid": "138c10cda11c3b8e9c7d988350d5cf64",
      "wwid": "uuid.48daeab7-7f15-405e-8481-7152cb9b0aca",
      "wwn": "uuid.48daeab7-7f15-405e-8481-7152cb9b0aca",
      "serial": "3d87eca1686c1782",
      "type": "disk",
      "path": "nvme-uuid.48daeab7-7f15-405e-8481-7152cb9b0aca ",
      "size": 5497558138880
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nvmeTargetUuid | String | 所属NVMe设备UUID | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| wwid | String | 全局唯一标识 | 4.6.21 |
| vendor | String | 供应商 | 4.6.21 |
| model | String | 型号 | 4.6.21 |
| wwn | String |  | 4.6.21 |
| serial | String | 序列号 | 4.6.21 |
| type | String | 类型 | 4.6.21 |
| hctl | String |  | 4.6.21 |
| path | String | 路径 | 4.6.21 |
| state | String | 状态 | 4.6.21 |
| size | Long | 大小 | 4.6.21 |
| multipathDeviceUuid | String | 多路径设备UUID | 4.6.21 |
| source | String | 磁盘来源，NVMe | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| nvmeLunHostRefs | List | 详情参考[nvmeLunHostRefs] | 4.6.21 |

 #nvmeLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nvmeLunUuid | List | NVme磁盘UUID | 4.6.21 |
| hostUuid | String | 物理机UUID | 4.6.21 |
| path | String | 磁盘路径 | 4.6.21 |
| hctl | String | 磁盘HCTL | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |



##### SDK示例

 Java SDK

```
QueryNvmeLunAction action = new QueryNvmeLunAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryNvmeLunAction.Result res = action.call();
```

 Python SDK

```
QueryNvmeLunAction action = QueryNvmeLunAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryNvmeLunAction.Result res = action.call()
```

---

#### 查询NVMe设备(QueryNvmeTarget)



##### API请求

 URLs

```
GET zstack/v1/storage-devices/nvme/controllers
GET zstack/v1/storage-devices/nvme
GET zstack/v1/storage-devices/nvme/controllers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/nvme/controllers
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/nvme
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/storage-devices/nvme/controllers/de0f2549ed0130948f14b00916fbf9a0
```



可查询字段

运行CLI命令行工具，输入`QueryNvmeTarget`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "40ab069909633d4293c62f44efb26db8",
      "state": "Enabled",
      "nvmeLuns": [
        {
          "nvmeTargetUuid": "40ab069909633d4293c62f44efb26db8",
          "nvmeLunHostRefs": [
            {
              "id": 1,
              "nvmeLunUuid": "5690b46050623763a0335e753c347fa1",
              "hostUuid": "d6f8a7ff0069304080b345c077c3aeb9",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ],
          "name": "nvme-lun-36b083fe000daf018000022905ba35d8f",
          "uuid": "5690b46050623763a0335e753c347fa1",
          "wwid": "uuid.48daeab7-7f15-405e-8481-7152cb9b0aca",
          "wwn": "uuid.48daeab7-7f15-405e-8481-7152cb9b0aca",
          "serial": "3d87eca1686c1782",
          "type": "disk",
          "path": "nvme-uuid.48daeab7-7f15-405e-8481-7152cb9b0aca ",
          "size": 5497558138880
        }
      ],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| nqn | String | NVMe限定名称 | 4.6.21 |
| state | String | 状态 | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| nvmeLuns | List | 详情参考[nvmeLuns] | 4.6.21 |

 #nvmeLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nvmeTargetUuid | String | 所属NVMe设备UUID | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| wwid | String | 全局唯一标识 | 4.6.21 |
| vendor | String | 供应商 | 4.6.21 |
| model | String | 型号 | 4.6.21 |
| wwn | String |  | 4.6.21 |
| serial | String | 序列号 | 4.6.21 |
| type | String | 类型 | 4.6.21 |
| hctl | String |  | 4.6.21 |
| path | String | 路径 | 4.6.21 |
| state | String | 状态 | 4.6.21 |
| size | Long | 大小 | 4.6.21 |
| multipathDeviceUuid | String | 多路径设备UUID | 4.6.21 |
| source | String | 磁盘来源，NVMe | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| nvmeLunHostRefs | List | 详情参考[nvmeLunHostRefs] | 4.6.21 |

 #nvmeLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nvmeLunUuid | List | NVme磁盘UUID | 4.6.21 |
| hostUuid | String | 物理机UUID | 4.6.21 |
| path | String | 磁盘路径 | 4.6.21 |
| hctl | String | 磁盘HCTL | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |



##### SDK示例

 Java SDK

```
QueryNvmeTargetAction action = new QueryNvmeTargetAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryNvmeTargetAction.Result res = action.call();
```

 Python SDK

```
QueryNvmeTargetAction action = QueryNvmeTargetAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryNvmeTargetAction.Result res = action.call()
```

---

#### 刷新NVMe设备(RefreshNvmeTarget)



##### API请求

 URLs

```
POST zstack/v1/storage-devices/nvme/controllers

```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "7a7b52cf91933070af3c8273f30ef458"
  },
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X POST -d '{"params":{"zoneUuid":"7a7b52cf91933070af3c8273f30ef458"}}' \
http://localhost:8080/zstack/v1/storage-devices/nvme/controllers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在**params**结构中) |  | 区域UUID | 4.6.21 |
| nvmeLunUuids (可选) | List | body(包含在**params**结构中) |  | NVMe磁盘UUID | 4.6.21 |
| systemTags (可选) | List | body |  | 系统标签 | 4.6.21 |
| userTags (可选) | List | body |  | 用户标签 | 4.6.21 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "88ed12f1c3d7329c9b3fd00a87ce999e",
      "state": "Enabled",
      "nvmeLuns": [
        {
          "nvmeTargetUuid": "88ed12f1c3d7329c9b3fd00a87ce999e",
          "nvmeLunHostRefs": [
            {
              "id": 1,
              "nvmeLunUuid": "3adbd21bfa483cb2bc48b91c1438c788",
              "hostUuid": "8c26dfd50d963292b8a51ddc0f9957f5",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ],
          "name": "nvme-lun-36b083fe000daf018000022905ba35d8f",
          "uuid": "3adbd21bfa483cb2bc48b91c1438c788",
          "wwid": "uuid.48daeab7-7f15-405e-8481-7152cb9b0aca",
          "wwn": "uuid.48daeab7-7f15-405e-8481-7152cb9b0aca",
          "serial": "3d87eca1686c1782",
          "type": "disk",
          "path": "nvme-uuid.48daeab7-7f15-405e-8481-7152cb9b0aca ",
          "size": 5497558138880
        }
      ],
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| nqn | String | NVMe限定名称 | 4.6.21 |
| state | String | 状态 | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| nvmeLuns | List | 详情参考[nvmeLuns]. | 4.6.21 |

 #nvmeLuns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nvmeTargetUuid | String | 所属NVMe设备UUID | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| wwid | String | 全局唯一标识 | 4.6.21 |
| vendor | String | 供应商 | 4.6.21 |
| model | String | 型号 | 4.6.21 |
| wwn | String |  | 4.6.21 |
| serial | String | 序列号 | 4.6.21 |
| type | String | 类型 | 4.6.21 |
| hctl | String |  | 4.6.21 |
| path | String | 路径 | 4.6.21 |
| state | String | 状态 | 4.6.21 |
| size | Long | 大小 | 4.6.21 |
| multipathDeviceUuid | String | 多路径设备UUID | 4.6.21 |
| source | String | 磁盘来源，NVMe | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| nvmeLunHostRefs | List | 详情参考[nvmeLunHostRefs]. | 4.6.21 |

 #nvmeLunHostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nvmeLunUuid | List | NVme磁盘UUID | 4.6.21 |
| hostUuid | String | 物理机UUID | 4.6.21 |
| path | String | 磁盘路径 | 4.6.21 |
| hctl | String | 磁盘HCTL | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |



##### SDK示例

 Java SDK

```
QueryNvmeTargetAction action = new QueryNvmeTargetAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryNvmeTargetAction.Result res = action.call();
```

 Python SDK

```
QueryNvmeTargetAction action = QueryNvmeTargetAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryNvmeTargetAction.Result res = action.call()
```

---

### 物理网络相关接口

---

#### 创建物理网络标签类型(CreateHostNetworkServiceType)



##### API请求

 URLs

```
POST zstack/v1/hosts/service-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```

{
  "params": {
    "serviceType": "ManagementNetwork",
    "system": true
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
-X POST -d '{"params":{"serviceType":"ManagementNetwork","system":true}}' \
http://localhost:8080/zstack/v1/hosts/service-types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serviceType | String | body(包含在**params**结构中) |  |  | 5.3.0 |
| system (可选) | boolean | body(包含在**params**结构中) |  |  | 5.3.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.3.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventory | HostNetworkLabelInventory | 详情参考[inventory] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.0 |
| serviceType | String |  | 5.3.0 |
| system | Boolean |  | 5.3.0 |
| createDate | Timestamp | 创建时间 | 5.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.0 |
| description | String | 错误的概要描述 | 5.3.0 |
| details | String | 错误的详细信息 | 5.3.0 |
| elaboration | String | 保留字段，默认为null | 5.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.0 |



##### SDK示例

 Java SDK

```
CreateHostNetworkServiceTypeAction action = new CreateHostNetworkServiceTypeAction();
action.serviceType = "ManagementNetwork";
action.system = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateHostNetworkServiceTypeAction.Result res = action.call();
```

 Python SDK

```
CreateHostNetworkServiceTypeAction action = CreateHostNetworkServiceTypeAction()
action.serviceType = "ManagementNetwork"
action.system = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateHostNetworkServiceTypeAction.Result res = action.call()
```

---

#### 删除物理网络标签类型(DeleteHostNetworkServiceType)



##### API请求

 URLs

```
DELETE zstack/v1/hosts/service-types/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```

curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/hosts/service-types/21ce80c3a7783e11b78a343a50470abf
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



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
DeleteHostNetworkServiceTypeAction action = new DeleteHostNetworkServiceTypeAction();
action.uuid = "21ce80c3a7783e11b78a343a50470abf";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteHostNetworkServiceTypeAction.Result res = action.call();
```

 Python SDK

```
DeleteHostNetworkServiceTypeAction action = DeleteHostNetworkServiceTypeAction()
action.uuid = "21ce80c3a7783e11b78a343a50470abf"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteHostNetworkServiceTypeAction.Result res = action.call()
```

---

#### 更新物理网络标签类型(UpdateHostNetworkServiceType)



##### API请求

 URLs

```
PUT zstack/v1/hosts/service-types/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateHostNetworkServiceType": {
    "serviceType": "ManagementNetwork",
    "system": true
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
-X PUT -d '{"updateHostNetworkServiceType":{"serviceType":"ManagementNetwork","system":true}}' \
http://localhost:8080/zstack/v1/hosts/service-types/63513aaff0a13c6fa9f9661acf9cd64b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.0 |
| serviceType | String | body(包含在**updateHostNetworkServiceType**结构中) |  |  | 5.3.0 |
| system (可选) | boolean | body(包含在**updateHostNetworkServiceType**结构中) |  |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventory | HostNetworkLabelInventory | 详情参考[inventory] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.0 |
| serviceType | String |  | 5.3.0 |
| system | Boolean |  | 5.3.0 |
| createDate | Timestamp | 创建时间 | 5.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.0 |
| description | String | 错误的概要描述 | 5.3.0 |
| details | String | 错误的详细信息 | 5.3.0 |
| elaboration | String | 保留字段，默认为null | 5.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.0 |



##### SDK示例

 Java SDK

```
UpdateHostNetworkServiceTypeAction action = new UpdateHostNetworkServiceTypeAction();
action.uuid = "63513aaff0a13c6fa9f9661acf9cd64b";
action.serviceType = "ManagementNetwork";
action.system = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateHostNetworkServiceTypeAction.Result res = action.call();
```

 Python SDK

```
UpdateHostNetworkServiceTypeAction action = UpdateHostNetworkServiceTypeAction()
action.uuid = "63513aaff0a13c6fa9f9661acf9cd64b"
action.serviceType = "ManagementNetwork"
action.system = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateHostNetworkServiceTypeAction.Result res = action.call()
```

---

#### 标记物理网口(非聚合口)网络类型(SetServiceTypeOnHostNetworkInterface)



##### API请求

 URLs

```
POST zstack/v1/hosts/nics/service-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "interfaceUuids": [
      "2894f52c7d84366c85dd115b3bc193ca"
    ]
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
-X POST -d '{"params":{"interfaceUuids":["2894f52c7d84366c85dd115b3bc193ca"]}}' \
http://localhost:8080/zstack/v1/hosts/nics/service-types
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuids | List | body(包含在**params**结构中) | 物理网口Uuids |  | 4.7.11 |
| vlanIds (可选) | List | body(包含在**params**结构中) | vlan接口Ids |  | 4.7.11 |
| serviceTypes (可选) | List | body(包含在**params**结构中) | 网络服务类型 | ManagementNetwork TenantNetwork StorageNetwork BackupNetwork MigrationNetwork | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "id": 0,
      "interfaceUuid": "8534263f624a3962b7603c99a3e44eb2",
      "vlanId": 10,
      "serviceType": "BackupNetwork"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| inventory | List | 详情参考[inventory] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| interfaceUuid | String | 物理网口Uuid | 4.7.11 |
| vlanId | Integer | vlan子接口id | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.11 |
| serviceType | HostNetworkInterfaceServiceType | 详情参考[serviceType] | 4.7.11 |

 #serviceType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ManagementNetwork | HostNetworkInterfaceServiceType | 管理网络 | 4.7.11 |
| TenantNetwork | HostNetworkInterfaceServiceType | 业务网络 | 4.7.11 |
| StorageNetwork | HostNetworkInterfaceServiceType | 存储网络 | 4.7.11 |
| BackupNetwork | HostNetworkInterfaceServiceType | 备份网络 | 4.7.11 |
| MigrationNetwork | HostNetworkInterfaceServiceType | 迁移网络 | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
SetServiceTypeOnHostNetworkInterfaceAction action = new SetServiceTypeOnHostNetworkInterfaceAction();
action.interfaceUuids = asList("2894f52c7d84366c85dd115b3bc193ca");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetServiceTypeOnHostNetworkInterfaceAction.Result res = action.call();
```

 Python SDK

```
SetServiceTypeOnHostNetworkInterfaceAction action = SetServiceTypeOnHostNetworkInterfaceAction()
action.interfaceUuids = [2894f52c7d84366c85dd115b3bc193ca]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetServiceTypeOnHostNetworkInterfaceAction.Result res = action.call()
```

---

#### 标记聚合网口网络类型(SetServiceTypeOnHostNetworkBonding)



##### API请求

 URLs

```
POST zstack/v1/hosts/bondings/service-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "bondingUuids": [
      "e96881d20cde3a9ab337cdf0ab4e8b08"
    ],
    "serviceTypes": [
      "TenantNetwork"
    ]
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
-X POST -d '{"params":{"bondingUuids":["e96881d20cde3a9ab337cdf0ab4e8b08"],"serviceTypes":["TenantNetwork"]}}' \
http://localhost:8080/zstack/v1/hosts/bondings/service-types
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| bondingUuids | List | body(包含在`params`结构中) | bond网口Uuids |  | 4.7.11 |
| vlanIds (可选) | List | body(包含在`params`结构中) | vlan接口Ids |  | 4.7.11 |
| serviceTypes (可选) | List | body(包含在`params`结构中) | 网络服务类型 | ManagementNetwork TenantNetwork StorageNetwork BackupNetwork MigrationNetwork | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "id": 0,
      "bondingUuid": "d1fd53a607c936859414f6222175c820",
      "vlanId": 10,
      "serviceType": "BackupNetwork"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| inventory | List | 详情参考[inventory] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| bondingUuid | String | bond网口Uuid | 4.7.11 |
| vlanId | Integer | vlan子接口id | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.11 |
| serviceType | HostNetworkInterfaceServiceType | 详情参考[serviceType] | 4.7.11 |

 #serviceType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ManagementNetwork | HostNetworkInterfaceServiceType | 管理网络 | 4.7.11 |
| TenantNetwork | HostNetworkInterfaceServiceType | 业务网络 | 4.7.11 |
| StorageNetwork | HostNetworkInterfaceServiceType | 存储网络 | 4.7.11 |
| BackupNetwork | HostNetworkInterfaceServiceType | 备份网络 | 4.7.11 |
| MigrationNetwork | HostNetworkInterfaceServiceType | 迁移网络 | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
SetServiceTypeOnHostNetworkBondingAction action = new SetServiceTypeOnHostNetworkBondingAction();
action.bondingUuids = asList("e96881d20cde3a9ab337cdf0ab4e8b08");
action.serviceTypes = asList("TenantNetwork");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetServiceTypeOnHostNetworkBondingAction.Result res = action.call();
```

 Python SDK

```
SetServiceTypeOnHostNetworkBondingAction action = SetServiceTypeOnHostNetworkBondingAction()
action.bondingUuids = [e96881d20cde3a9ab337cdf0ab4e8b08]
action.serviceTypes = [TenantNetwork]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetServiceTypeOnHostNetworkBondingAction.Result res = action.call()
```

---

#### 获取网口交集子接口信息(GetCandidateInterfaceVlanIds)



##### API请求

 URLs

```
GET zstack/v1/host/network-interface-vlan-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/host/network-interface-vlan-ids?interfaceUuids=d25e83af6ccf3d9ca8baa1702861a0c8&limit=1000&start=0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuids | List | query | 网口UUID |  | 4.7.11 |
| limit (可选) | Integer | query |  |  | 4.7.11 |
| start (可选) | Integer | query |  |  | 4.7.11 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
    "vlanIds": [
        1010,
        1011,
        10,
        11,
        2000,
        1101,
        1110,
        1108,
        1107,
        1109,
        1106,
        1103,
        1102,
        1105,
        1104,
        0
    ],
    "success": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vlanIds | List | vlan接口ID | 4.7.11 |
| success | boolean |  | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
GetCandidateInterfaceVlanIdsAction action = new GetCandidateInterfaceVlanIdsAction();
action.interfaceUuids = asList("d25e83af6ccf3d9ca8baa1702861a0c8");
action.limit = 1000;
action.start = 0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateInterfaceVlanIdsAction.Result res = action.call();
```

 Python SDK

```
GetCandidateInterfaceVlanIdsAction action = GetCandidateInterfaceVlanIdsAction()
action.interfaceUuids = [d25e83af6ccf3d9ca8baa1702861a0c8]
action.limit = 1000
action.start = 0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateInterfaceVlanIdsAction.Result res = action.call()
```

---

#### 获取物理网口网络类型信息(GetInterfaceServiceTypeStatistic)



##### API请求

 URLs

```
GET zstack/v1/hosts/hosts-network-interfaces/service-type-statistic
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/hosts/hosts-network-interfaces/service-type-statistic? \
interfaceUuid=d8797841479d3951bcb698164b56bd9e&interfaceType=All&sortBy=CreateDate&sortDirection=asc&start=0&limit=20&replyWithCount=false
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
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| interfaceUuid (可选) | String | query | 物理机网卡UUID |  | 4.7.11 |
| vlanId (可选) | Integer | query | vlan接口ID |  | 4.7.11 |
| interfaceType (可选) | String | query | 网卡类型 | All Interface Bonding | 4.7.11 |
| serviceType (可选) | List | query | 统计网络类型 | All ManagementNetwork TenantNetwork StorageNetwork MigrationNetwork BackupNetwork | 4.7.11 |
| zoneUuid (可选) | String | query | 区域UUID |  | 4.7.11 |
| clusterUuid (可选) | String | query | 集群UUID |  | 4.7.11 |
| hostUuid (可选) | String | query | 物理机UUID |  | 4.7.11 |
| sortBy (可选) | String | query | 排序方式 | InterfaceName VlanId HostIp HostName ClusterName CreateDate | 4.7.11 |
| sortDirection (可选) | String | query | 排序方向 | asc desc | 4.7.11 |
| start (可选) | Integer | query | 统计结果起始位置 |  | 4.7.11 |
| limit (可选) | Integer | query | 统计结果数量 |  | 4.7.11 |
| replyWithCount (可选) | boolean | query | 同时返回统计结果总数 |  | 4.7.11 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.11 |



##### API返回

 返回示例

```
{
  "serviceTypeStatistics": [
    {
      "interfaceUuid": "474f9d7d7a1d3b46b8f17363dca7ebef",
      "serviceTypes": [
        "ManagementNetwork"
      ]
    }
  ],
  "total": 1
}}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | Long | 统计结果总数 | 4.7.11 |
| success | boolean | 成功 | 4.7.11 |
| serviceTypeStatistics | List | 详情参考[serviceTypeStatistics] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #serviceTypeStatistics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| interfaceUuid | String | 网卡UUID | 4.7.11 |
| interfaceName | String | 网卡名 | 4.7.11 |
| vlanId | Integer | vlan接口ID | 4.7.11 |
| serviceTypes | List | 网络类型集 | 4.7.11 |
| hostUuid | String | 物理机UUID | 4.7.11 |
| hostName | String | 物理机名称 | 4.7.11 |
| hostIp | String | 物理机IP | 4.7.11 |
| clusterUuid | String | 集群UUID | 4.7.11 |
| clusterName | String | 集群名称 | 4.7.11 |
| zoneUuid | String | 区域UUID | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.11 |
| description | String | 错误的概要描述 | 4.7.11 |
| details | String | 错误的详细信息 | 4.7.11 |
| elaboration | String | 保留字段，默认为null | 4.7.11 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.11 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.11 |



##### SDK示例

 Java SDK

```
GetInterfaceServiceTypeStatisticAction action = new GetInterfaceServiceTypeStatisticAction();
action.interfaceUuid = "d8797841479d3951bcb698164b56bd9e";
action.interfaceType = "All";
action.sortBy = "CreateDate";
action.sortDirection = "asc";
action.start = 0;
action.limit = 20;
action.replyWithCount = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetInterfaceServiceTypeStatisticAction.Result res = action.call();
```

 Python SDK

```
GetInterfaceServiceTypeStatisticAction action = GetInterfaceServiceTypeStatisticAction()
action.interfaceUuid = "d8797841479d3951bcb698164b56bd9e"
action.interfaceType = "All"
action.sortBy = "CreateDate"
action.sortDirection = "asc"
action.start = 0
action.limit = 20
action.replyWithCount = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetInterfaceServiceTypeStatisticAction.Result res = action.call()
```
