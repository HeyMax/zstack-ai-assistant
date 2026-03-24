# 标签管理相关接口 - 平台运维

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/5.4.html*

---

## 标签管理相关接口

---

## 创建系统标签(CreateSystemTag)



### API请求

 URLs

```
POST zstack/v1/system-tags
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "resourceType": "HostVO",     "resourceUuid": "c31d63c6d40d489e87fa7e1ee5707d47",     "tag": "reservedMemory::1G"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"resourceType":"HostVO","resourceUuid":"47609e353c6f331f93ac114d06379f8d","tag":"reservedMemory::1G"}}' \ http://localhost:8080/zstack/v1/system-tags
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceType | String | body(包含在params结构中) | 当创建一个标签时, 用户必须指定标签所关联的资源类型 |  | 0.6 |
| resourceUuid | String | body(包含在params结构中) | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID |  | 0.6 |
| tag | String | body(包含在params结构中) | 标签字符串 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`autoReleaseSpecReleatedPhysicalPciDevice`
  - 例如：`autoReleaseSpecReleatedPhysicalPciDevice`
- 例如：`autoReleaseSpecReleatedPhysicalPciDevice`
  - 选项格式为：`autoReleaseSpecReleatedVirtualPciDevice`
  - 例如：`autoReleaseSpecReleatedVirtualPciDevice`
- 例如：`autoReleaseSpecReleatedVirtualPciDevice`
  - 选项格式为：`resourceBindings::Cluster:clusterUuid`，其中clusterUuid为对应的集群uuid
  - 例如：`resourceBindings::Cluster:2sdasf231jvznsdak`
- 例如：`resourceBindings::Cluster:2sdasf231jvznsdak`
  - 选项格式为：`applianceType::type`，其中type为性能独享型负载均衡器或VPC路由器的镜像
  - 例如：`applianceType::slb`
- 例如：`applianceType::slb`
  - 选项格式为：`SlbGroupUuid::uuid`，其中uuid性能独享型负载均衡器的uuid
  - 例如：`SlbGroupUuid::12345678 `
- 例如：`SlbGroupUuid::12345678 `
  - 选项格式为：`extraBootParams::{自定义参数}`
  - 例如：`extraBootParams::{acpi=noirq noapic}`
- 例如：`extraBootParams::{acpi=noirq noapic}`


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "inherent": false,     "uuid": "55d86810cb564ecc934fa79d498b9dc3",     "resourceType": "HostVO",     "tag": "reservedMemory::1G",     "type": "System",     "createDate": "Apr 24, 2017 7:10:55 PM",     "lastOpDate": "Apr 24, 2017 7:10:55 PM"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SystemTagInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ode | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inherent | Boolean | 内部系统标签 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| resourceUuid | String | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID | 0.6 |
| resourceType | String | 当创建一个标签时, 用户必须制定标签所关联的资源类型(resource type) | 0.6 |
| tag | String | 标签字符串 | 0.6 |
| type | String | 保留域, 请不要使用它 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
CreateSystemTagAction action = new CreateSystemTagAction(); action.resourceType = "HostVO"; action.resourceUuid = "c63dfecc5c3f4f24bdab3eda92036eef"; action.tag = "reservedMemory::1G"; action.sessionId = "494209d421304d1cb9b8aaab7cac3a45"; CreateSystemTagAction.Result res = action.call();
```

 Python SDK

```
CreateSystemTagAction action = CreateSystemTagAction() action.resourceType = "HostVO" action.resourceUuid = "d8f0bf84c4bc41c99ff7129a369515c1" action.tag = "reservedMemory::1G" action.sessionId = "f84ee562742b4aaab791842d71f5d472" CreateSystemTagAction.Result res = action.call()
```

---

## 查询系统标签(QuerySystemTag)



### API请求

 URLs

```
GET zstack/v1/system-tags GET zstack/v1/system-tags/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 67bf58bea6854e568556b0e9f4bc84f6" \ -X GET http://localhost:8080/zstack/v1/system-tags?q=inherent=true&q=resourceType=HostVO
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth c798e7031aaa430386636f9ff8d6bb17" \ -X GET http://localhost:8080/zstack/v1/system-tags/7c8162efed2840c08a43e0afdcebf01b
```



可查询字段

运行CLI命令行工具，输入`QuerySystemTag`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "inherent": false,       "uuid": "0bba7cb618314646aea4e70b9be3bfea",       "resourceType": "HostVO",       "tag": "reservedMemory::1G",       "type": "System",       "createDate": "May 11, 2017 1:22:40 PM",       "lastOpDate": "May 11, 2017 1:22:40 PM"     }   ] }
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
| inherent | Boolean | 内部系统标签 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| resourceUuid | String | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID | 0.6 |
| resourceType | String | 当创建一个标签时, 用户必须制定标签所关联的资源类型(resource type) | 0.6 |
| tag | String | 标签字符串 | 0.6 |
| type | String | 保留域, 请不要使用它 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
QuerySystemTagAction action = new QuerySystemTagAction(); action.conditions = asList("inherent=true","resourceType=HostVO"); action.sessionId = "05c74fc02e574e678a407f0ccef8ae5f"; QuerySystemTagAction.Result res = action.call();
```

 Python SDK

```
QuerySystemTagAction action = QuerySystemTagAction() action.conditions = ["inherent=true","resourceType=HostVO"] action.sessionId = "a1d2f95577514d0a918ce1502dc27e33" QuerySystemTagAction.Result res = action.call()
```

---

## 更新系统标签（UpdateSystemTag）



### API请求

 URLs

```
PUT zstack/v1/system-tags/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "updateSystemTag": {     "tag": "for-large-DB"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"updateSystemTag":{"tag":"for-large-DB"}}' \ http://localhost:8080/zstack/v1/system-tags/2cb4ac52794535c3ae61f9612c1579e7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| tag | String | body(包含在**updateSystemTag**结构中) | 标签字符串 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回

 返回示例

```
{   "inventory": {     "inherent": false,     "uuid": "c17377dfd0794521a4fe02b6eb16cc5a",     "resourceType": "HostVO",     "tag": "reservedMemory::1G",     "type": "System",     "createDate": "May 11, 2017 1:22:30 PM",     "lastOpDate": "May 11, 2017 1:22:30 PM"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SystemTagInventory | 详情参考[inventory] | 0.6 |

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
| inherent | Boolean | 内部系统标签 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| resourceUuid | String | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID | 0.6 |
| resourceType | String | 当创建一个标签时, 用户必须制定标签所关联的资源类型(resource type) | 0.6 |
| tag | String | 标签字符串 | 0.6 |
| type | String | 保留域, 请不要使用它 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
UpdateSystemTagAction action = new UpdateSystemTagAction(); action.uuid = "1ba32bc1af0446b29bd969029a6052a5"; action.tag = "for-large-DB"; action.sessionId = "367f6162107a47d58c471c9164139fab"; UpdateSystemTagAction.Result res = action.call();
```

 Python SDK

```
UpdateSystemTagAction action = UpdateSystemTagAction() action.uuid = "be98b2f4e342485486cfa612eeabcaa5" action.tag = "for-large-DB" action.sessionId = "6b7af956a9a9477eba02753417380070" UpdateSystemTagAction.Result res = action.call()
```

---

### 创建用户标签(CreateUserTag)



#### API请求

 URLs

```
POST zstack/v1/user-tags
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "resourceType": "DiskOfferingVO",
    "resourceUuid": "beff527f6ccb45c8b215c59434b2fa5c",
    "tag": "for-large-DB"
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
-X POST -d '{"params":{"resourceType":"DiskOfferingVO","resourceUuid":"0a93a8d099a9339bb21b6e14a4ca3eea","tag":"for-large-DB"}}' \
http://localhost:8080/zstack/v1/user-tags
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceType | String | body(包含在**params**结构中) | 当创建一个标签时, 用户必须制定标签所关联的资源类型 |  | 0.6 |
| resourceUuid | String | body(包含在**params**结构中) | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID |  | 0.6 |
| tag | String | body(包含在**params**结构中) | 标签字符串 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b97c64cbf0524f809c05bf9eaf262b79",
    "resourceType": "DiskOfferingVO",
    "tag": "for-large-DB",
    "type": "User",
    "createDate": "May 11, 2017 1:22:33 PM",
    "lastOpDate": "May 11, 2017 1:22:33 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | UserTagInventory | 详情参考[inventory] | 0.6 |

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
| resourceUuid | String | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID | 0.6 |
| resourceType | String | 当创建一个标签时, 用户必须制定标签所关联的资源类型(resource type) | 0.6 |
| tag | String | 标签字符串 | 0.6 |
| type | String | 保留域, 请不要使用它 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
CreateUserTagAction action = new CreateUserTagAction();
action.resourceType = "DiskOfferingVO";
action.resourceUuid = "824246fa21d8405fbd48ea1cc7dbf049";
action.tag = "for-large-DB";
action.sessionId = "5d9cde1f7e6a43f586ec78dedf743201";
CreateUserTagAction.Result res = action.call();
```

 Python SDK

```
CreateUserTagAction action = CreateUserTagAction()
action.resourceType = "DiskOfferingVO"
action.resourceUuid = "11f5e230f43d49e69815c35fbd39bad5"
action.tag = "for-large-DB"
action.sessionId = "6301b756253c4103adbf8c891d858e5f"
CreateUserTagAction.Result res = action.call()
```

---

### 查询用户标签(QueryUserTag)



#### API请求



URLs

```
GET zstack/v1/user-tags
GET zstack/v1/user-tags/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/user-tags?q=resourceType=DiskOfferingVO&q=tag=for-large-DB
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/user-tags/e2a3aa3463dd382fb9e434304167f331
```



可查询字段

运行CLI命令行工具，输入`QueryUserTag`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "ae4f2dd05a513e1e8d350d448c2071a9",
      "resourceType": "DiskOfferingVO",
      "tag": "for-large-DB",
      "type": "User",
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
| resourceUuid | String | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID | 0.6 |
| resourceType | String | 当创建一个标签时, 用户必须制定标签所关联的资源类型(resource type) | 0.6 |
| tag | String | 标签字符串 | 0.6 |
| type | String | 保留域, 请不要使用它 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryUserTagAction action = new QueryUserTagAction();
action.conditions = asList("resourceType=DiskOfferingVO","tag=for-large-DB");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryUserTagAction.Result res = action.call();
```

 Python SDK

```
QueryUserTagAction action = QueryUserTagAction()
action.conditions = ["resourceType=DiskOfferingVO","tag=for-large-DB"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryUserTagAction.Result res = action.call()
```

---

### 删除标签(DeleteTag)



可用于删除系统标签（SystemTag）、用户标签（UserTag）、以及资源标签（Tag）。

#### API请求

 URLs

```
DELETE zstack/v1/tags/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7a2a51da1758430382624e00144e70c5" \
-X DELETE http://localhost:8080/zstack/v1/tags/1d33d909355247508cdbf9a0c0037dbe?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`autoReleaseSpecReleatedPhysicalPciDevice`
  - 例如：`autoReleaseSpecReleatedPhysicalPciDevice`
- 例如：`autoReleaseSpecReleatedPhysicalPciDevice`
  - 选项格式为：`autoReleaseSpecReleatedVirtualPciDevice`
  - 例如：`autoReleaseSpecReleatedVirtualPciDevice`
- 例如：`autoReleaseSpecReleatedVirtualPciDevice`


> **注意:** 说明:



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
DeleteTagAction action = new DeleteTagAction();
action.uuid = "8262e178c23140f6a4de6f0d9e6a0913";
action.deleteMode = "Permissive";
action.sessionId = "94c2bff91f834a96b691a36e47888967";
DeleteTagAction.Result res = action.call();
```

 Python SDK

```
DeleteTagAction action = DeleteTagAction()
action.uuid = "86a3f5e633dd40358cab072951058ec9"
action.deleteMode = "Permissive"
action.sessionId = "87c504af0b5a484d87a5ad4ddac57baa"
DeleteTagAction.Result res = action.call()
```

---

### 创建资源标签(CreateTag)



#### API请求

 URLs

```
POST zstack/v1/tags
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "new-tag",
    "value": "new-tag",
    "description": "tag-for-volume",
    "color": "#FFFFFF",
    "type": "simple"
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
-X POST -d '{"params":{"name":"new-tag","value":"new-tag","description":"tag-for-volume","color":"#FFFFFF","type":"simple"}}' http://localhost:8080/zstack/v1/tags
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.2.0 |
| value | String | body(包含在**params**结构中) | 标签的值 |  | 3.2.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.2.0 |
| color (可选) | String | body(包含在**params**结构中) | 标签的颜色 |  | 3.2.0 |
| type (可选) | String | body(包含在**params**结构中) | 标签的类型 | simple withToken | 3.2.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



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
CreateTagAction action = new CreateTagAction();
action.name = "new-tag";
action.value = "new-tag";
action.description = "tag-for-volume";
action.color = "#FFFFFF";
action.type = "simple";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateTagAction.Result res = action.call();
```

 Python SDK

```
CreateTagAction action = new CreateTagAction();
action.name = "new-tag";
action.value = "new-tag";
action.description = "tag-for-volume";
action.color = "#FFFFFF";
action.type = "simple";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateTagAction.Result res = action.call();
```

---

### 查询资源标签(QueryTag)



#### API请求

 URLs

```
GET zstack/v1/tags
```


```
GET zstack/v1/tags/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tags
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tags/6f81ada534e3363f9e8a00caa2f48564
```



可查询字段

运行CLI命令行工具，输入QueryTag并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f7ac675964d0386b89d8df713f68aee0",
      "name": "SSD",
      "value": "SSD",
      "description": "SSD volume",
      "color": "#FFFFFF",
      "type": "simple",
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| name | String | 资源名称 | 3.2.0 |
| value | String |  | 3.2.0 |
| description | String | 资源的详细描述 | 3.2.0 |
| color | String |  | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| type | TagPatternType | 详情参考[type] | 3.2.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.2.0 |
| ordinal | int |  | 3.2.0 |



#### SDK示例

 Java SDK

```
QueryTagAction action = new QueryTagAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTagAction.Result res = action.call();
```

 Python SDK

```
QueryTagAction action = QueryTagAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTagAction.Result res = action.call()
```

---

### 更新资源标签(UpdateTag)



#### API请求

 URLs

```
PUT zstack/v1/tags/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateTag": {
    "value": "new-tag",
    "description": "tag-for-volume",
    "color": "#FFFFFF"
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
-X PUT -d '{"updateTag":{"value":"new-tag","description":"tag-for-volume","color":"#FFFFFF"}}' http://localhost:8080/zstack/v1/tags/bc54e798f6ad4b9aa6a71365271d9464/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.2.0 |
| name (可选) | String | body(包含在**updateTag**结构中) | 资源名称 |  | 3.2.0 |
| value (可选) | String | body(包含在**updateTag**结构中) | 标签的值 |  | 3.2.0 |
| description (可选) | String | body(包含在**updateTag**结构中) | 资源的详细描述 |  | 3.2.0 |
| color (可选) | String | body(包含在**updateTag**结构中) | 标签的颜色 |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



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
UpdateTagAction action = new UpdateTagAction();
action.uuid = "a2bdf841dfdd48ecae5cabf44d0088e1";
action.value = "new-tag";
action.description = "tag-for-volume";
action.color = "#FFFFFF";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateTagAction.Result res = action.call();
```

 Python SDK

```
UpdateTagAction action = UpdateTagAction()
action.uuid = "982dddcd308b423baf8f82a74afc4e1c"
action.value = "new-tag"
action.description = "tag-for-volume"
action.color = "#FFFFFF"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateTagAction.Result res = action.call()
```

---

### 加载资源标签(AttachTagToResources)



#### API请求

 URLs

```
POST zstack/v1/tags/{tagUuid}/resources
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "resourceUuids": [
      "bcd0e0f674aa47298dcbdc0efeffb55d"
    ]
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
-X POST -d '{"params":{"resourceUuids":["80ed93103b624518ab0e642c6611bc0f"]}}' http://localhost:8080/zstack/v1/tags/05811acb63e34f4c9c62b19a8eb4090b/resources
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| tagUuid | String | url | 标签UUID |  | 3.2.0 |
| resourceUuids | List | body(包含在**params**结构中) | 资源UUID |  | 3.2.0 |
| tokens (可选) | Map | body(包含在**params**结构中) | 通过标签存放的键和值 |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



#### API返回




> **注意:** 说明: 该API调用成功后，返回success为**true**。成功克隆的虚拟机数量由numberOfClonedVm返回。实际过程中，由于资源限制，可能存在部分成功、部分失败的情况。每台虚拟机的克隆失败原因存放在inventories里面的**error**字段。

 返回示例

```
{
  "results": [
    {
      "inventory": {
        "tagPatternUuid": "f9060711c8453a2580f840d7aa1c5485",
        "uuid": "b2f817b3400232018956a4d2d198edc4",
        "resourceType": "DiskOfferingVO",
        "tag": "for-large-DB",
        "type": "User",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      },
      "success": true
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.2.0 |
| results | List | 详情参考[results] | 3.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.2.0 |
| description | String | 错误的概要描述 | 3.2.0 |
| details | String | 错误的详细信息 | 3.2.0 |
| elaboration | String | 保留字段，默认为null | 3.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.2.0 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.2.0 |
| error | ErrorCode | 详情参考[error] | 3.2.0 |
| inventory | UserTagInventory | 详情参考[inventory] | 3.2.0 |

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
| tagPatternUuid | String |  | 3.2.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| resourceUuid | String |  | 3.2.0 |
| resourceType | String |  | 3.2.0 |
| tag | String |  | 3.2.0 |
| type | String |  | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| tagPattern | TagPatternInventory | 详情参考[tagPattern] | 3.2.0 |

 #tagPattern

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.2.0 |
| name | String | 资源名称 | 3.2.0 |
| value | String |  | 3.2.0 |
| description | String | 资源的详细描述 | 3.2.0 |
| color | String |  | 3.2.0 |
| createDate | Timestamp | 创建时间 | 3.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.2.0 |
| type | TagPatternType | 详情参考[type] | 3.2.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.2.0 |
| ordinal | int |  | 3.2.0 |



#### SDK示例

 Java SDK

```
AttachTagToResourcesAction action = new AttachTagToResourcesAction();
action.tagUuid = "6369948f4523457b87c311c550aa3e16";
action.resourceUuids = asList("ae2fdc6bbd254fcba9c36ac174c87a31");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachTagToResourcesAction.Result res = action.call();
```

 Python SDK

```
AttachTagToResourcesAction action = AttachTagToResourcesAction()
action.tagUuid = "1e9bee8a666340fe86599fa03962af90"
action.resourceUuids = [a4bb584d6c50401c98b7535dca839ba0]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachTagToResourcesAction.Result res = action.call()
```

---

### 卸载资源标签(DetachTagFromResources)



#### API请求

 URLs

```
DELETE zstack/v1/tags/{tagUuid}/resources?resourceUuids={resourceUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/tags/a8d23deaee2f4e7f96d11f066a180b92/resources?resourceUuids=44f7b0ec930f458c9f4e7705ad7a0cb9
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| tagUuid | String | url | 标签UUID |  | 3.2.0 |
| resourceUuids | List | url | 资源UUID |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



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
DetachTagFromResourcesAction action = new DetachTagFromResourcesAction();
action.tagUuid = "09f0323668dc47fdac599724f1e6eb26";
action.resourceUuids = asList("170664525bde452db0923d200ac8e57b");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachTagFromResourcesAction.Result res = action.call();
```

 Python SDK

```
DetachTagFromResourcesAction action = DetachTagFromResourcesAction()
action.tagUuid = "ff438628636242909e58eed72696aae8"
action.resourceUuids = [7719cc49d1574d479316d43f77183899]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachTagFromResourcesAction.Result res = action.call()
```
