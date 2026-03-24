# AD/LDAP/OAuth相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.4.html*

---

## AD/LDAP/OAuth相关接口

---

## 添加AD/LDAP服务器(AddLdapServer)



### API请求

 URLs

```
POST zstack/v1/ldap/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{ "params": { "name": "miao", "description": "miao desc", "url": "ldap://localhost:1888", "base": "dc\u003dexample,dc\u003dcom", "username": "", "password": "", "encryption": "None"   }, "systemTags": [], "userTags": [] }
```

 ````

> **注意:** 说明: 上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"miao","description":"miao desc","url":"ldap://localhost:1888","base":"dc=example,dc=com","username":"","password":"","encryption":"None"}}' \ http://localhost:8080/zstack/v1/ldap/servers
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| url | String | body(包含在params结构中) | LDAP服务器访问地址 |  | 0.6 |
| base | String | body(包含在params结构中) | LDAP服务查询BaseDN |  | 0.6 |
| username | String | body(包含在params结构中) | 访问LDAP服务器使用的用户名 |  | 0.6 |
| password | String | body(包含在params结构中) | 密码 |  | 0.6 |
| encryption | String | body(包含在params结构中) | 加密方式 | None TLS | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`virtualIDSyncConfiguration::{\"rules\":[{\"name\":\"name\",\"attribute\":\"cn\",\"type\":\"SYSTEM\",\"optional\":\"true\"},{\"name\":\"fullname\",\"attribute\":\"cn\",\"type\":\"CUSTOM\",\"optional\":\"true\"}]}`
  - 例如：`virtualIDSyncConfiguration::{\"rules\":[{\"name\":\"name\",\"attribute\":\"cn\",\"type\":\"SYSTEM\",\"optional\":\"true\"},{\"name\":\"fullname\",\"attribute\":\"cn\",\"type\":\"CUSTOM\",\"optional\":\"true\"}]}`
- 例如：`virtualIDSyncConfiguration::{\"rules\":[{\"name\":\"name\",\"attribute\":\"cn\",\"type\":\"SYSTEM\",\"optional\":\"true\"},{\"name\":\"fullname\",\"attribute\":\"cn\",\"type\":\"CUSTOM\",\"optional\":\"true\"}]}`
  - 选项格式为：`organizationSyncConfiguration::{\"rules\":[{\"name\":\"name\",\"attribute\":\"distinguishedName\",\"type\":\"SYSTEM\",\"optional\":\"true\"},{\"name\":\"description\",\"attribute\":description,\"type\":\"SYSTEM\",\"optional\":\"true\"}],\"strategy\":\"Group\"}`
  - 例如：`organizationSyncConfiguration::{\"rules\":[{\"name\":\"name\",\"attribute\":\"distinguishedName\",\"type\":\"SYSTEM\",\"optional\":\"true\"},{\"name\":\"description\",\"attribute\":description,\"type\":\"SYSTEM\",\"optional\":\"true\"}],\"strategy\":\"Group\"}`
- 例如：`organizationSyncConfiguration::{\"rules\":[{\"name\":\"name\",\"attribute\":\"distinguishedName\",\"type\":\"SYSTEM\",\"optional\":\"true\"},{\"name\":\"description\",\"attribute\":description,\"type\":\"SYSTEM\",\"optional\":\"true\"}],\"strategy\":\"Group\"}`


> **注意:** 说明:


- 添加AD/LDAP时，系统会自动检测服务器、端口、基准检索DN、登录属性、用户DN、密码是否正确，等待时间不超过5秒。


> **注意:** 说明:



### API返回

 返回示例

```
{ "inventory": { "uuid": "ef7291bd94ce478880938851e3ff6ad6", "name": "miao", "description": "miao desc", "url": "ldap://localhost:1888", "base": "dc\u003dexample,dc\u003dcom", "username": "", "password": "", "encryption": "None"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LdapServerInventory | 详情参考[inventory] | 0.6 |

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
| url | String |  | 0.6 |
| base | String | LDAP服务器访问地址 | 0.6 |
| username | String | 用于访问LDAP服务器的用户名 | 0.6 |
| password | String | 密码 | 0.6 |
| encryption | String | 加密方式 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
AddLdapServerAction action = new AddLdapServerAction(); action.name = "miao"; action.description = "miao desc"; action.url = "ldap://localhost:1888"; action.base = "dc=example,dc=com"; action.username = ""; action.password = ""; action.encryption = "None"; action.sessionId = "c805609607b94f1688e4f5791089ab6f"; AddLdapServerAction.Result res = action.call();
```

 Python SDK

```
AddLdapServerAction action = AddLdapServerAction() action.name = "miao" action.description = "miao desc" action.url = "ldap://localhost:1888" action.base = "dc=example,dc=com" action.username = "" action.password = "" action.encryption = "None" action.sessionId = "611a70f771874450945f77465bca7642" AddLdapServerAction.Result res = action.call()
```

---

## 删除AD/LDAP服务器(DeleteLdapServer)



### API请求

 URLs

```
DELETE/v1/ldap/servers/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth a90abb1116c0428097769adfdc9ae867" \ -X DELETE http://localhost:8080/zstack/v1/ldap/servers/93d7c467c493464fa3d244163c94f64e?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ "error": { "code": "SYS.1001", "description": "A message or a operation timeout", "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
DeleteLdapServerAction action = new DeleteLdapServerAction(); action.uuid = "0e757aebf26346c19ee1f163ea9f0915"; action.deleteMode = "Permissive"; action.sessionId = "3dae39cdbba749ba91deda6b854695ec"; DeleteLdapServerAction.Result res = action.call();
```

 Python SDK

```
DeleteLdapServerAction action = DeleteLdapServerAction() action.uuid = "7755f302acd44c62833f9d4eb3f7327c" action.deleteMode = "Permissive" action.sessionId = "61e33f5ab13b44ef873ef7fc719d3804" DeleteLdapServerAction.Result res = action.call()
```

---

## 查询AD/LDAP服务器(QueryLdapServer)



### API请求

 URLs

```
GET zstack/v1/ldap/servers GET zstack/v1/ldap/servers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 940b9dba281d40b897497a95e8a0e942" \ -X GET http://localhost:8080/zstack/v1/ldap/servers?q=name=ldap server
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth e4e74e66dc074b24b7071b43b12240a2" \ -X GET http://localhost:8080/zstack/v1/ldap/servers/c898d74cdcb94ac4b3b28ac6b7a8f7f5
```



可查询字段

运行CLI命令行工具，输入QueryLdapServer并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{ "inventories": [     { "uuid": "91820f68407a441c9ba031ac15fa322d", "name": "miao", "description": "miao desc", "url": "ldap://localhost:1888", "base": "dc\u003dexample,dc\u003dcom", "username": "", "password": "", "encryption": "None"     }   ] }
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
| url | String |  | 0.6 |
| base | String | LDAP服务器访问地址 | 0.6 |
| username | String | 用于访问LDAP服务器的用户名 | 0.6 |
| password | String | 密码 | 0.6 |
| encryption | String | 加密方式 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
QueryLdapServerAction action = new QueryLdapServerAction(); action.conditions = asList("name=ldap server"); action.sessionId = "a8d28261d5b940c9bdd4712a511bd537"; QueryLdapServerAction.Result res = action.call();
```

 Python SDK

```
QueryLdapServerAction action = QueryLdapServerAction() action.conditions = ["name=ldap server"] action.sessionId = "aee6bc43a2fb4f1eb6c35e3a064dd464" QueryLdapServerAction.Result res = action.call()
```

---

### 更新AD/LDAP服务器(UpdateLdapServer)



#### API请求

 URLs

```
PUT zstack/v1/ldap/servers/{ldapServerUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateLdapServer": {
"name": "new name"
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e0360b3fd1d04df0b98005ab41f233ea" \
-X PUT -d '{"updateLdapServer":{"name":"new name"}}' \
http://localhost:8080/zstack/v1/ldap/servers/6c2af8cab16b3310a3d31aa772b093ba
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ldapServerUuid | String | url | LDAP服务器的UUID |  | 0.6 |
| name (可选) | String | body(包含在**updateLdapServer**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateLdapServer**结构中) | 资源的详细描述 |  | 0.6 |
| url (可选) | String | body(包含在**updateLdapServer**结构中) | LDAP服务器的访问地址 |  | 0.6 |
| base (可选) | String | body(包含在**updateLdapServer**结构中) | LDAP服务器的查询BaseDN |  | 0.6 |
| username (可选) | String | body(包含在**updateLdapServer**结构中) | 访问LDAP服务器的用户名 |  | 0.6 |
| password (可选) | String | body(包含在**updateLdapServer**结构中) | 密码 |  | 0.6 |
| encryption (可选) | String | body(包含在**updateLdapServer**结构中) | 加密方式 | None TLS | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"uuid": "8e1ee5b25564449fbd6054621567b5c1",
"name": "new name",
"description": "miao desc",
"url": "ldap://localhost:1888",
"base": "dc\u003dexample,dc\u003dcom",
"username": "",
"password": "",
"encryption": "None"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LdapServerInventory | 详情参考[inventory] | 0.6 |

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
| url | String |  | 0.6 |
| base | String | LDAP服务器访问地址 | 0.6 |
| username | String | 用于访问LDAP服务器的用户名 | 0.6 |
| password | String | 密码 | 0.6 |
| encryption | String | 加密方式 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
UpdateLdapServerAction action = new UpdateLdapServerAction();
action.ldapServerUuid = "37fbaf59c5d74dd7b61c2af4e74c28cf";
action.name = "new name";
action.sessionId = "f968929105af41ef8a6a2c602f315c91";
UpdateLdapServerAction.Result res = action.call();
```

 Python SDK

```
UpdateLdapServerAction action = UpdateLdapServerAction()
action.ldapServerUuid = "57e7fe86092046228999e8599c6c8bd1"
action.name = "new name"
action.sessionId = "f6ca4878b0164e9eab1d6219777c5af2"
UpdateLdapServerAction.Result res = action.call()
```

---

### 创建AD/LDAP绑定(CreateLdapBinding)



#### API请求

 URLs

```
POST zstack/v1/ldap/bindings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ldapUid": "ou\u003dEmployee,uid\u003dtest",
    "accountUuid": "29777229ee1e32d29c6f255b126e29a1"
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
-X POST -d '{"params":{"ldapUid":"ou=Employee,uid=test","accountUuid":"29777229ee1e32d29c6f255b126e29a1"}}' http://localhost:8080/zstack/v1/ldap/bindings
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ldapUid | String | body (包含在**params**结构中) | LDAP UID |  | 4.7.0 |
| accountUuid | String | body (包含在**params**结构中) | 账户UUID |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a552eb007adf4070ade72a4b678ecc30",
    "ldapUid": "ou\u003dEmployee,uid\u003dtest",
    "ldapServerUuid": "cd37f226e18c4ef09bb613200e3e90ba",
    "accountUuid": "5ff96c17eb8f476a988991e9410b153f"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 0.6 |
| inventory | LdapAccountRefInventory | 详情参考[inventory] | 0.6 |

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
| ldapUid | String | LDAP登录使用的UID | 0.6 |
| ldapServerUuid | String | LDAP服务器UUID | 0.6 |
| accountUuid | String | 账户UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
CreateLdapBindingAction action = new CreateLdapBindingAction();
action.ldapUid = "ou=Employee,uid=test";
action.accountUuid = "7bff0855d3da4ab89659d29821d6daee";
action.sessionId = "5fd897a8db504aee91a64a3b02c05ce9";
CreateLdapBindingAction.Result res = action.call();
```

 Python SDK

```
CreateLdapBindingAction action = CreateLdapBindingAction()
action.ldapUid = "ou=Employee,uid=test"
action.accountUuid = "db2842e0b16d4aa2af39abee7e80d2f1"
action.sessionId = "9ece25398fe74a91a90cec68b50cd203"
CreateLdapBindingAction.Result res = action.call()
```

---

### 删除AD/LDAP绑定(DeleteLdapBinding)



#### API请求

 URLs

```
DELETE/v1/ldap/bindings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 50d8d41e03b54adf9d8d88342a9d6efe" \
-X DELETE http://localhost:8080/zstack/v1/ldap/bindings/9a04287ade54400686e99485c86d9545?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeleteLdapBindingAction action = new DeleteLdapBindingAction();
action.uuid = "5f9ff578f8ff4231b2ad18f5aa185076";
action.sessionId = "6690dcc7a9c64c26a17ae9bf29955e0a";
DeleteLdapBindingAction.Result res = action.call();
```

 Python SDK

```
DeleteLdapBindingAction action = DeleteLdapBindingAction()
action.uuid = "3e5a338390d046008e2723c475c90a66"
action.sessionId = "2f93ee0fc083464fbe73053354ba470c"
DeleteLdapBindingAction.Result res = action.call()
```

---

### 查询AD/LDAP绑定(QueryLdapBinding)



#### API请求

 URLs

```
GET zstack/v1/ldap/bindings
GET zstack/v1/ldap/bindings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f114b38ccae244c38cda7ec7dbdd062c" \
-X GET http://localhost:8080/zstack/v1/ldap/bindings?q=accountUuid=f1672bbe810b4b3b89f030f5f51fdb79
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 43f9144da747462eaa08da071d317c45" \
-X GET http://localhost:8080/zstack/v1/ldap/bindings/9e959125b2f64a86a2a380b335b2543e
```



可查询字段

运行CLI命令行工具，输入`QueryLdapBinding`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "7e7c5818d2bc4d45b61fdbed5c1a64b0",
      "ldapUid": "ou\u003dEmployee,uid\u003dtest",
      "ldapServerUuid": "540e7691df7349c58cff8ffcaf305b9b",
      "accountUuid": "0829b88f337b4500b2ba28936fe5ae3d"
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
| description | String | 错误的概要描述5 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ldapUid | String | LDAP登录使用的UID | 0.6 |
| ldapServerUuid | String | LDAP服务器UUID | 0.6 |
| accountUuid | String | 账户UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryLdapBindingAction action = new QueryLdapBindingAction();
action.conditions = asList("accountUuid=d5915883c1c04b62af8423f04bb1b3f3");
action.sessionId = "2b7a31a70f7d4e90b0159cd0b9396f26";
QueryLdapBindingAction.Result res = action.call();
```

 Python SDK

```
QueryLdapBindingAction action = QueryLdapBindingAction()
action.conditions = ["accountUuid=15cdbd6f45bf434492ef22eb2d77b6f4"]
action.sessionId = "4956fb9e5d874e88851634154bda4d4a"
QueryLdapBindingAction.Result res = action.call()
```

---

### 清理无效的AD/LDAP绑定(CleanInvalidLdapBinding)



#### API请求

 URLs

```
PUT zstack/v1/ldap/bindings/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "cleanInvalidLdapBinding": {},
  "systemTags": [],
  "userTags": []
}
```

 ````

> **注意:** 说明: 上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f8ba3bdbb1fe407db3da890e5a47d322" \
-X PUT -d '{"cleanInvalidLdapBinding":{}}' \
http://localhost:8080/zstack/v1/ldap/bindings/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f9e03ca4fe8a3680831df56460533615",
      "name": "admin",
      "type": "Normal",
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
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| type | String | 账户类型（管理员，普通账户） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
CleanInvalidLdapBindingAction action = new CleanInvalidLdapBindingAction();
action.sessionId = "ba374e312f0044669323e3ba55aa44a2";
CleanInvalidLdapBindingAction.Result res = action.call();
```

 Python SDK

```
CleanInvalidLdapBindingAction action = CleanInvalidLdapBindingAction()
action.sessionId = "61a940c24a5e4667a03c87dbd968dfd8"
CleanInvalidLdapBindingAction.Result res = action.call()
```

---

### 使用AD/LDAP身份登录(LogInByLdap)



#### API请求

 URLs

```
PUT zstack/v1/ldap/login
```

 Body

```
{
  "logInByLdap": {
    "uid": "ou\u003dEmployee,uid\u003dtest",
    "password": "password",
    "verifyCode": "test",
    "captchaUuid": "3bb4e611b10e32cfaaa7fb4b1e3515ac"
  },
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"logInByLdap":{"uid":"ou=Employee,uid=test","password":"password","verifyCode":"test","captchaUuid":"3bb4e611b10e32cfaaa7fb4b1e3515ac"}}'
http://localhost:8080/zstack/v1/ldap/login
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uid | String | body(包含在**logInByLdap**结构中) | LDAP UID |  | 0.6 |
| password | String | body(包含在**logInByLdap**结构中) | 密码 |  | 0.6 |
| captchaUuid (可选) | String | body(包含在**logInByAccount**结构中) | 验证码UUID |  | 2.6.0 |
| verifyCode (可选) | String | body(包含在**logInByAccount**结构中) | 验证码 |  | 2.6.0 |
| clientInfo (可选) | Map | body(包含在**logInByAccount**结构中) | 客户端信息 |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"uuid": "2ce3cd4b2e5c441699edc09e612e916c",
"accountUuid": "27df0ac39afd42eab643dfb1d448252b",
"expiredDate": "Jun 7, 2017 9:20:34 PM"
"noSessionEvaluation": false
  },
"accountInventory": {
"uuid": "243382994e2643c18f5f5ec69305d866",
"name": "test",
"type": "Normal"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功标志 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SessionInventory | 详情参考[inventory] | 0.6 |
| accountInventory | AccountInventory | 详情参考[accountInventory] | 0.6 |
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

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| accountUuid | String | 账户UUID | 0.6 |
| userUuid | String | 用户UUID | 0.6 |
| expiredDate | Timestamp | 会话过期日期 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |

 #accountInventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| type | String | 账户类型（管理员，普通账户） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



#### SDK示例

 Java SDK

```
LogInByLdapAction action = new LogInByLdapAction();
action.uid = "ou=Employee,uid=test";
action.password = "password";
action.verifyCode = "test";
action.captchaUuid = "3bb4e611b10e32cfaaa7fb4b1e3515ac";
LogInByLdapAction.Result res = action.call();
```

 Python SDK

```
LogInByLdapAction action = LogInByLdapAction()
action.uid = "ou=Employee,uid=test"
action.password = "password"
action.verifyCode = "test"
action.captchaUuid = "3bb4e611b10e32cfaaa7fb4b1e3515ac"
LogInByLdapAction.Result res = action.call()
```

---

### 获取AD/LDAP条目(GetLdapEntry)



#### API请求

 URLs

```
GET zstack/v1/ldap/entry
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ldap/entry?ldapFilter=(cn=user_xxx)&limit=2500.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ldapFilter | String | query | 查询条件 |  | 2.2 |
| systemTags (可选) | List | query | 系统标签 |  | 2.2 |
| userTags (可选) | List | query | 用户标签 |  | 2.2 |
| limit (可选) | Integer | query | 最多返回的记录数，类似MySQL的limit |  | 2.2 |



#### API返回

 返回示例

```
{
    "inventories": [
        {
            "attributes": [
                {
                    "id": "userPrincipalName",
                    "orderMatters": false,
                    "values": [
                        "weiqi@adtest.zs"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "displayName",
                    "orderMatters": false,
                    "values": [
                        "zstest"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "name",
                    "orderMatters": false,
                    "values": [
                        "weiqi"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "distinguishedName",
                    "orderMatters": false,
                    "values": [
                        "CN=weiqi,OU=ui,OU=zstest,DC=adtest,DC=zs"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "cn",
                    "orderMatters": false,
                    "values": [
                        "weiqi"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "objectClass",
                    "orderMatters": false,
                    "values": [
                        "top",
                        "person",
                        "organizationalPerson",
                        "user"
                    ],
                    "valuesAsNames": {}
                }
            ],
            "dn": "CN=weiqi,OU=ui,OU=zstest,dc=adtest,dc=zs"
        }
    ],
    "success": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventories | List |  | 2.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |



#### SDK示例

 Java SDK

```
GetLdapEntryAction action = new GetLdapEntryAction();
action.ldapFilter = "(cn=user_xxx)";
action.limit = 2500.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetLdapEntryAction.Result res = action.call();
```

 Python SDK

```
GetLdapEntryAction action = GetLdapEntryAction()
action.ldapFilter = "(cn=user_xxx)"
action.limit = 2500.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetLdapEntryAction.Result res = action.call()
```

---

### 获取可绑定的AD/LDAP条目(GetCandidateLdapEntryForBinding)



获取可绑定的AD/LDAP条目（排除已绑定的AD/LDAP条目）。

#### API请求

 URLs

```
GET zstack/v1/ldap/entries/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ldap/entries/candidates?ldapFilter=(cn=user_xxx)&limit=2500.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ldapFilter | String | query | 查询条件 |  | 2.2 |
| systemTags (可选) | List | query |  |  | 2.2 |
| userTags (可选) | List | query |  |  | 2.2 |
| limit (可选) | Integer | query | 最多返回的记录数，类似MySQL的limit |  | 2.2 |



#### API返回

 返回示例

```
{
    "inventories": [
        {
            "attributes": [
                {
                    "id": "userPrincipalName",
                    "orderMatters": false,
                    "values": [
                        "weiqi@adtest.zs"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "displayName",
                    "orderMatters": false,
                    "values": [
                        "zstest"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "name",
                    "orderMatters": false,
                    "values": [
                        "weiqi"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "distinguishedName",
                    "orderMatters": false,
                    "values": [
                        "CN=weiqi,OU=ui,OU=zstest,DC=adtest,DC=zs"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "cn",
                    "orderMatters": false,
                    "values": [
                        "weiqi"
                    ],
                    "valuesAsNames": {}
                },
                {
                    "id": "objectClass",
                    "orderMatters": false,
                    "values": [
                        "top",
                        "person",
                        "organizationalPerson",
                        "user"
                    ],
                    "valuesAsNames": {}
                }
            ],
            "dn": "CN=weiqi,OU=ui,OU=zstest,dc=adtest,dc=zs"
        }
    ],
    "success": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventories | List |  | 2.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |



#### SDK示例

 Java SDK

```
GetCandidateLdapEntryForBindingAction action = new GetCandidateLdapEntryForBindingAction();
action.ldapFilter = "(cn=user_xxx)";
action.limit = 2500.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateLdapEntryForBindingAction.Result res = action.call();
```

 Python SDK

```
GetCandidateLdapEntryForBindingAction action = GetCandidateLdapEntryForBindingAction()
action.ldapFilter = "(cn=user_xxx)"
action.limit = 2500.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateLdapEntryForBindingAction.Result res = action.call()
```

---

### 创建OAuth客户端(CreateOAuthClient)



#### API请求

 URLs

```
POST zstack/v1/create/oauth2/client
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
    "description": "test",
    "clientId": "756770202fcd36bfbaa00ea7dea7f5ff",
    "clientSecret": "8255b36a4e0e38ffa20dda1a079aa687",
    "authorizationUrl": "http://zstack.com/code",
    "tokenUrl": "http://zstack.com/token",
    "userinfoUrl": "http://zstack.com/userinfoUrl",
    "redirectUrl": "http://zstack.com/redirectUrl",
    "logoutUrl": "http://zstack.com/logoutUrl",
    "loginType": "iam1",
    "identityProvider": "zf-soft",
    "pluginUuid": "393e36ee1b9e3dd281ef04443a0b4c73",
    "urlTemplate": "http://172.24.194.28:5000/oauth1/verify/?username\u003d${username}\u0026sessionId\u003d${sessionId}\u0026userUuid\u003d${userUuid}\u0026accountUuid\u003d${accountUuid}\u0026loginType\u003d${loginType}\u0026userType\u003d${userType}\u0027",
    "scopeList": [
      "559bf858d9cd35ce830dcfbfc2195195"
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
-X POST -d '{"params":{"name":"test","description":"test","clientId":"756770202fcd36bfbaa00ea7dea7f5ff","clientSecret":"8255b36a4e0e38ffa20dda1a079aa687","authorizationUrl":"http://zstack.com/code","tokenUrl":"http://zstack.com/token","userinfoUrl":"http://zstack.com/userinfoUrl","redirectUrl":"http://zstack.com/redirectUrl","logoutUrl":"http://zstack.com/logoutUrl","loginType":"iam1","identityProvider":"zf-soft","pluginUuid":"393e36ee1b9e3dd281ef04443a0b4c73","urlTemplate":"http://172.24.194.28:5000/oauth1/verify/?username=${username}&sessionId=${sessionId}&userUuid=${userUuid}&accountUuid=${accountUuid}&loginType=${loginType}&userType=${userType}'","scopeList":["559bf858d9cd35ce830dcfbfc2195195"]}}' http://localhost:8080/zstack/v1/create/oauth2/client
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| clientId | String | body(包含在**params**结构中) | 客户端ID |  | 4.5.0 |
| clientSecret (可选) | String | body(包含在**params**结构中) | 客户端密钥 |  | 4.5.0 |
| authorizationUrl (可选) | String | body(包含在**params**结构中) | 认证url |  | 4.5.0 |
| tokenUrl | String | body(包含在**params**结构中) | 认证token url |  | 4.5.0 |
| loginType | String | body(包含在**params**结构中) | 登录的类型 | cas-iam1 cas-iam2 oauth2-iam1 oauth2-iam2 | 4.5.0 |
| grantType | String | body(包含在**params**结构中) | 认证模式 |  | 4.5.0 |
| urlTemplate | String | body(包含在**params**结构中) | 认证之后跳转的地址 |  | 4.5.0 |
| clientType | String | body(包含在**params**结构中) | 客户端类型 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.5.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |
| userinfoUrl (可选) | String | body(包含在**params**结构中) | 请求用户信息地址 |  | 4.7.21 |
| redirectUrl (可选) | String | body(包含在**params**结构中) | 用户自定义回调地址 |  | 4.7.21 |
| logoutUrl (可选) | String | body(包含在**params**结构中) | 登出地址 |  | 4.7.21 |
| scopeList (可选) | List | body(包含在**params**结构中) | 权限范围 |  | 5.1.8 |
| identityProvider (可选) | String | body(包含在**params**结构中) | 认证供应商 |  | 5.1.8 |
| pluginUuid (可选) | String | body(包含在**params**结构中) | 供应商插件UUID |  | 5.3.20 |



#### API返回

 返回示例

```
{
  "inventory": {
    "clientId": "b7e1d25d8ae833f8b6f13c448efbfb4a",
    "clientSecret": "64a93cc0b9263993a25ef033994afc10",
    "authorizationUrl": "http://zstack.com/code",
    "tokenUrl": "http://zstack.com/token",
    "userinfoUrl": "http://zstack.com/userinfoUrl",
    "uuid": "628dbf582da836ba9693c8813f98371f",
    "loginMNUrl": "http://127.0.0.1:8080/zstack/sso/oauth2/",
    "redirectUrl": "http://zstack.com/redirectUrl"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventory | OAuth2ClientInventory | 详情参考[inventory] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventory
-
-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| clientId | String | 客户端ID | 4.5.0 |
| clientSecret | String | 客户端密钥 | 4.5.0 |
| authorizationUrl | String | 认证url | 4.5.0 |
| tokenUrl | String | 认证token url | 4.5.0 |
| grantType | String | 认证模式 | 4.5.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| clientType | String | clientType | 4.5.0 |
| loginType | String | 登录的类型： cas-iam1 cas-ima2 oauth2-iam1 oauth2-iam2 | 4.5.0 |
| loginMNUrl | String | 免密登录url | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| accountUuid | String | 账户UUID | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



#### SDK示例

 Java SDK

```
CreateOAuthClientAction action = new CreateOAuthClientAction();
action.name = "test";
action.description = "test";
action.clientId = "756770202fcd36bfbaa00ea7dea7f5ff";
action.clientSecret = "8255b36a4e0e38ffa20dda1a079aa687";
action.authorizationUrl = "http://zstack.com/code";
action.tokenUrl = "http://zstack.com/token";
action.userinfoUrl = "http://zstack.com/userinfoUrl";
action.redirectUrl = "http://zstack.com/redirectUrl";
action.logoutUrl = "http://zstack.com/logoutUrl";
action.loginType = "iam1";
action.identityProvider = "zf-soft";
action.pluginUuid = "393e36ee1b9e3dd281ef04443a0b4c73";
action.urlTemplate = "http://172.24.194.28:5000/oauth1/verify/?username=${username}&sessionId=${sessionId}&userUuid=${userUuid}&accountUuid=${accountUuid}&loginType=${loginType}&userType=${userType}'";
action.scopeList = asList("559bf858d9cd35ce830dcfbfc2195195");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateOAuthClientAction.Result res = action.call();

```

 Python SDK

```
CreateOAuthClientAction action = CreateOAuthClientAction()
action.name = "test"
action.description = "test"
action.clientId = "756770202fcd36bfbaa00ea7dea7f5ff"
action.clientSecret = "8255b36a4e0e38ffa20dda1a079aa687"
action.authorizationUrl = "http://zstack.com/code"
action.tokenUrl = "http://zstack.com/token"
action.userinfoUrl = "http://zstack.com/userinfoUrl"
action.redirectUrl = "http://zstack.com/redirectUrl"
action.logoutUrl = "http://zstack.com/logoutUrl"
action.loginType = "iam1"
action.identityProvider = "zf-soft"
action.pluginUuid = "393e36ee1b9e3dd281ef04443a0b4c73"
action.urlTemplate = "http://172.24.194.28:5000/oauth1/verify/?username=${username}&sessionId=${sessionId}&userUuid=${userUuid}&accountUuid=${accountUuid}&loginType=${loginType}&userType=${userType}'"
action.scopeList = [559bf858d9cd35ce830dcfbfc2195195]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateOAuthClientAction.Result res = action.call()

```

---

### 删除认证客户端(DeleteSSOClient)



#### API请求

 URLs

```
POST zstack/v1/delete/sso/client
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "uuid": "3e54cb2e27ff31dda2c49851bf2662d2",
    "deleteMode": "Permissive"
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
-X POST -d '{"params":{"uuid":"3e54cb2e27ff31dda2c49851bf2662d2","deleteMode":"Permissive"}}' \
http://localhost:8080/zstack/v1/delete/sso/client
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| deleteMode (可选) | String | body(包含在**params**结构中) | 删除模式： Permissive Enforcing，Permissive |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



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
DeleteSSOClientAction action = new DeleteSSOClientAction();
action.uuid = "3e54cb2e27ff31dda2c49851bf2662d2";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSSOClientAction.Result res = action.call();
```

 Python SDK

```
DeleteSSOClientAction action = DeleteSSOClientAction()
action.uuid = "3e54cb2e27ff31dda2c49851bf2662d2"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSSOClientAction.Result res = action.call()
```

---

### 更新OAuth客户端(UpdateOAuthClient)



#### API请求

 URLs

```
POST zstack/v1/update/oauth2/client
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
    "description": "test",
    "clientId": "9f44e569b86c3883b0295fcab980e945",
    "clientSecret": "8b151acd0f7533538ed9e9315fadcaca",
    "authorizationUrl": "http://zstack.com/code",
    "tokenUrl": "http://zstack.com/token",
    "redirectUrl": "http://zstack.com/redirectUrl",
    "userinfoUrl": "http://zstack.com/userinfoUrl",
    "identityProvider": "zf-soft",
    "pluginUuid": "0b3b9a43772439c3aaa102fe8361b3d1",
    "loginType": "iam1",
    "logoutUrl": "http://zstack.com/logouturl",
    "scopeList": [
      "d8f4a70ef87b35c986336a88dd5bafd1"
    ]
  },
  "systemTags": [],
  "userTags": []
}

```



上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"test","description":"test","clientId":"9f44e569b86c3883b0295fcab980e945","clientSecret":"8b151acd0f7533538ed9e9315fadcaca","authorizationUrl":"http://zstack.com/code","tokenUrl":"http://zstack.com/token","redirectUrl":"http://zstack.com/redirectUrl","userinfoUrl":"http://zstack.com/userinfoUrl","identityProvider":"zf-soft","pluginUuid":"0b3b9a43772439c3aaa102fe8361b3d1","loginType":"iam1","logoutUrl":"http://zstack.com/logouturl","scopeList":["d8f4a70ef87b35c986336a88dd5bafd1"]}}' http://localhost:8080/zstack/v1/update/oauth2/client
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| clientId (可选) | String | body(包含在**params**结构中) | 客户端ID |  | 4.5.0 |
| clientSecret (可选) | String | body(包含在**params**结构中) | 客户端密钥 |  | 4.5.0 |
| authorizationUrl (可选) | String | body(包含在**params**结构中) | 认证url |  | 4.5.0 |
| tokenUrl (可选) | String | body(包含在**params**结构中) | 认证token url |  | 4.5.0 |
| loginType (可选) | String | body(包含在**params**结构中) | 登录的类型 | cas-iam1 cas-iam2 oauth2-iam1 oauth2-iam2 | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |
| redirectUrl (可选) | String | body(包含在**params**结构中) | 用户自定义回调地址 |  | 4.7.21 |
| userinfoUrl (可选) | String | body(包含在**params**结构中) | 请求用户信息地址 |  | 4.7.21 |
| logoutUrl (可选) | String | body(包含在**params**结构中) | 登出地址 |  | 4.7.21 |
| scopeList (可选) | List | body(包含在**params**结构中) | 权限范围 |  | 5.1.8 |
| identityProvider (可选) | String | pluginUuid (可选) | 认证供应商 |  | 5.1.8 |
| pluginUuid (可选) |  | pluginUuid (可选) | 供应商插件UUID |  | 5.3.28 |



#### API返回

 返回示例

```
{
  "inventory": {
    "clientId": "90de13d7ad483cb582bd14c792bd1ba7",
    "clientSecret": "e9107bd9f6213e29926da80c016a9639",
    "authorizationUrl": "http://zstack.com/code",
    "tokenUrl": "http://zstack.com/token",
    "userinfoUrl": "http://zstack.com/userinfoUrl",
    "uuid": "76467fb551ca362d98d6ba0782f3bb4c",
    "loginMNUrl": "http://127.0.0.1:8080/zstack/sso/oauth2/",
    "redirectUrl": "http://zstack.com/redirectUrl"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventory | OAuth2ClientInventory | 详情参考[inventory] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventory
-
-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| clientId | String | 客户端ID | 4.5.0 |
| clientSecret | String | 客户端密钥 | 4.5.0 |
| authorizationUrl | String | 认证url | 4.5.0 |
| tokenUrl | String | 认证token url | 4.5.0 |
| grantType | String | 认证模式 | 4.5.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| clientType | String | clientType | 4.5.0 |
| loginType | String | 登录的类型： cas-iam1 cas-ima2 oauth2-iam1 oauth2-iam2 | 4.5.0 |
| loginMNUrl | String | 免密登录url | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| accountUuid | String | 账户UUID | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



#### SDK示例

 Java SDK

```
UpdateOAuthClientAction action = new UpdateOAuthClientAction();
action.name = "test";
action.description = "test";
action.clientId = "9f44e569b86c3883b0295fcab980e945";
action.clientSecret = "8b151acd0f7533538ed9e9315fadcaca";
action.authorizationUrl = "http://zstack.com/code";
action.tokenUrl = "http://zstack.com/token";
action.redirectUrl = "http://zstack.com/redirectUrl";
action.userinfoUrl = "http://zstack.com/userinfoUrl";
action.identityProvider = "zf-soft";
action.pluginUuid = "0b3b9a43772439c3aaa102fe8361b3d1";
action.loginType = "iam1";
action.logoutUrl = "http://zstack.com/logouturl";
action.scopeList = asList("d8f4a70ef87b35c986336a88dd5bafd1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateOAuthClientAction.Result res = action.call();

```

 Python SDK

```
UpdateOAuthClientAction action = UpdateOAuthClientAction()
action.name = "test"
action.description = "test"
action.clientId = "9f44e569b86c3883b0295fcab980e945"
action.clientSecret = "8b151acd0f7533538ed9e9315fadcaca"
action.authorizationUrl = "http://zstack.com/code"
action.tokenUrl = "http://zstack.com/token"
action.redirectUrl = "http://zstack.com/redirectUrl"
action.userinfoUrl = "http://zstack.com/userinfoUrl"
action.identityProvider = "zf-soft"
action.pluginUuid = "0b3b9a43772439c3aaa102fe8361b3d1"
action.loginType = "iam1"
action.logoutUrl = "http://zstack.com/logouturl"
action.scopeList = [d8f4a70ef87b35c986336a88dd5bafd1]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateOAuthClientAction.Result res = action.call()

```
