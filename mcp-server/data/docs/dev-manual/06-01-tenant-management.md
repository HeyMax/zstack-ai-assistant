# 租户管理(Plus) - 运营管理

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/6.1.html*

---

## 租户管理(Plus)



租户管理以单独的功能模块形式提供，需提前购买租户管理模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

## 组织架构相关接口

---

## 添加组织(CreateIAM2Organization)



### API请求

 URLs

```
POST /v1/iam2/organizations
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "org1",     "type": "Company",     "parentUuid": "398f147aef0347099c16548bce0ceca1",     "attributes": [       {         "name": "some-attribute-name",         "value": "attribute-value"       }     ],     "quota": {       "vm.num": 100.0     }   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"org1","type":"Company","parentUuid":"939e7abba5ec42b084d0be9945b95fc2","attributes":[{"name":"some-attribute-name","value":"attribute-value"}],"quota":{"vm.num":100.0}}}' http://localhost:8080/zstack/v1/iam2/organizations
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.4.0 |
| type | OrganizationType | body(包含在**params**结构中) | 组织类型 | Company Department | 2.4.0 |
| parentUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| attributes (可选) | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| quota (可选) | List | body(包含在**params**结构中) | 配额 |  | 4.3.6 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "d8880014345347e1ab945d8ef750fac7",     "name": "org1",     "state": "Enabled",     "type": "Company",     "srcType": "ZStack",     "parentUuid": "1dffd2c40215412d8ab4b811ce6888f0",     "rootOrganizationUuid": "a531128bc8724f0ba55a85c425f22c32",     "attributes": [       {         "uuid": "053353cf77d6493daef4de70c9ff8d24",         "name": "attribute-name",         "value": "attribute-value",         "type": "Customized"       }     ]   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2OrganizationInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| parentUuid | String |  | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| type | OrganizationType | 详情参考[type] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| organizationUuid | String |  | 2.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



### SDK示例

 Java SDK

```
CreateIAM2OrganizationAction action = new CreateIAM2OrganizationAction(); action.name = "org1"; action.type = "Company"; action.parentUuid = "1d650e96108c47a297a7529d45afef97"; action.attributes = asList([name:some-attribute-name, value:attribute-value]); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2OrganizationAction action = CreateIAM2OrganizationAction() action.name = "org1" action.type = "Company" action.parentUuid = "a7faaafa84ae4345957fd7e61434481b" action.attributes = [[name:some-attribute-name, value:attribute-value]] action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateIAM2OrganizationAction.Result res = action.call()
```

---

## 删除组织(DeleteIAM2Organization)



### API请求

 URLs

```
DELETE /v1/iam2/organizations/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/iam2/organizations/b30d1f09a0df3f708bba1208ade2aa90?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| deleteMode (可选) | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



### API返回



该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ "error": {     "code": "SYS.1001",     "description": "A message or a operation timeout",     "details": "Create VM on KVM timeout after 300s" } }
```



### SDK示例

 Java SDK

```
DeleteIAM2OrganizationAction action = new DeleteIAM2OrganizationAction(); action.uuid = "b30d1f09a0df3f708bba1208ade2aa90"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
DeleteIAM2OrganizationAction action = DeleteIAM2OrganizationAction() action.uuid = "b30d1f09a0df3f708bba1208ade2aa90" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteIAM2OrganizationAction.Result res = action.call()
```

---

#### 查询组织(QueryIAM2Organization)



##### API请求

 URLs

```
GET zstack/v1/iam2/organizations
```


```
GET zstack/v1/iam2/organizations/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/organizations?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/organizations/e09768162e273e56aaffa649184585e3
```



可查询字段

运行CLI命令行工具，输入QueryIAM2Organization并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "22e5c247ec02478286a1fccfdaa9a2d3",
      "name": "org1",
      "state": "Enabled",
      "type": "Company",
      "parentUuid": "3714d14d9b78487e983236a5ae65a190",
      "attributes": [
        {
          "uuid": "ee3bccfce21243cfbfc03cce1118b929",
          "name": "attribute-name",
          "value": "attribute-value",
          "type": "Customized"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventories | List | 详情参考[inventories] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| parentUuid | String |  | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| type | OrganizationType | 详情参考[type] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| organizationUuid | String |  | 2.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
QueryIAM2OrganizationAction action = new QueryIAM2OrganizationAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2OrganizationAction action = QueryIAM2OrganizationAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2OrganizationAction.Result res = action.call()
```

---

#### 更新组织(UpdateIAM2Organization)



##### API请求

 URLs

```
PUT zstack/v1/iam2/organizations/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIAM2Organization": {
    "name": "new-name",
    "description": "new-description",
    "parentUuid": "56bf430cab663c908d1ebe7ab28e5e90"
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
-X PUT -d '{"updateIAM2Organization":{"name":"new-name","description":"new-description","parentUuid":"56bf430cab663c908d1ebe7ab28e5e90"}}' http://localhost:8080/zstack/v1/iam2/organizations/f68813583328377fa44bb72d75a13ed5/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| name (可选) | String | body(包含在**updateIAM2Organization**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**updateIAM2Organization**结构中) | 资源的详细描述 |  | 2.4.0 |
| parentUuid (可选) | String | body(包含在**updateIAM2Organization**结构中) |  |  | 2.4.0 |
| type (可选) | OrganizationType | body(包含在**updateIAM2Organization**结构中) |  | Company Department | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3f0315c83d524c0fa0da9be22c1cd58e",
    "name": "org1",
    "state": "Enabled",
    "type": "Company",
    "parentUuid": "8b15e39fb62a43089610103be30c17b5",
    "attributes": [
      {
        "uuid": "5dd14ca022554b22938d94c27de872fb",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2OrganizationInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| parentUuid | String |  | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| type | OrganizationType | 详情参考[type] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| organizationUuid | String |  | 2.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
UpdateIAM2OrganizationAction action = new UpdateIAM2OrganizationAction();
action.uuid = "f68813583328377fa44bb72d75a13ed5";
action.name = "new-name";
action.description = "new-description";
action.parentUuid = "56bf430cab663c908d1ebe7ab28e5e90";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
UpdateIAM2OrganizationAction action = UpdateIAM2OrganizationAction()
action.uuid = "f68813583328377fa44bb72d75a13ed5"
action.name = "new-name"
action.description = "new-description"
action.parentUuid = "56bf430cab663c908d1ebe7ab28e5e90"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIAM2OrganizationAction.Result res = action.call()
```

---

#### 修改组织的上级部门(ChangeIAM2OrganizationParent)



##### API请求

 URLs

```
PUT zstack/v1/iam2/organizations/{parentUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIAM2OrganizationParent": {
    "childrenUuids": [
      "b71dcc43656f399c82b09a379d1d6a74",
      "220c9c0ec8a53c37b9c680b0deed7563"
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
-X PUT -d '{"changeIAM2OrganizationParent":{"childrenUuids":["b71dcc43656f399c82b09a379d1d6a74","220c9c0ec8a53c37b9c680b0deed7563"]}}' http://localhost:8080/zstack/v1/iam2/organizations/4fef501c5ba331f496907f642f609ea3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| parentUuid | String | url |  |  | 2.4.0 |
| childrenUuids | List | body(包含在**changeIAM2OrganizationParent**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
ChangeIAM2OrganizationParentAction action = new ChangeIAM2OrganizationParentAction();
action.parentUuid = "4fef501c5ba331f496907f642f609ea3";
action.childrenUuids = asList("b71dcc43656f399c82b09a379d1d6a74","220c9c0ec8a53c37b9c680b0deed7563");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIAM2OrganizationParentAction.Result res = action.call();
```

 Python SDK

```
ChangeIAM2OrganizationParentAction action = ChangeIAM2OrganizationParentAction()
action.parentUuid = "4fef501c5ba331f496907f642f609ea3"
action.childrenUuids = [b71dcc43656f399c82b09a379d1d6a74, 220c9c0ec8a53c37b9c680b0deed7563]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIAM2OrganizationParentAction.Result res = action.call()
```

---

#### 修改组织状态(ChangeIAM2OrganizationState)



##### API请求

 URLs

```
PUT zstack/v1/iam2/organizations/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIAM2OrganizationState": {
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
-X PUT -d '{"changeIAM2OrganizationState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/iam2/organizations/61e292aa7d3f3796a313c338214e0f34/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| stateEvent | StateEvent | body(包含在**changeIAM2OrganizationState**结构中) |  | enable disable | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

返回示例

```
{
  "inventory": {
    "uuid": "c62fea9f96644a9cb5ba1ba383a9335c",
    "name": "org1",
    "state": "Enabled",
    "type": "Company",
    "parentUuid": "80f101e520f94f958b1357f7d7a3dc37",
    "attributes": [
      {
        "uuid": "754a49f70fcb46ad879b347447af7b25",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2OrganizationInventory | 详情参考[inventory] | 2.4.0 |

#error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

#inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| parentUuid | String |  | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| type | OrganizationType | 详情参考[type] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

#state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

#type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

#attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| organizationUuid | String |  | 2.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

#type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
ChangeIAM2OrganizationStateAction action = new ChangeIAM2OrganizationStateAction();
action.uuid = "61e292aa7d3f3796a313c338214e0f34";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIAM2OrganizationStateAction.Result res = action.call();
```

 Python SDK

```
ChangeIAM2OrganizationStateAction action = ChangeIAM2OrganizationStateAction()
action.uuid = "61e292aa7d3f3796a313c338214e0f34"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIAM2OrganizationStateAction.Result res = action.call()
```

---

#### 从组织移除属性(RemoveAttributesFromIAM2Organization)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/organizations/{uuid}/attributes?attributeUuids={attributeUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/organizations/7783a8869e6a31a29562fb58dfdccc69/attributes?attributeUuids=cdec45ca22a43b47942268b3dc90bc43&attributeUuids=f6febd00a2633bd98d8763ffdff1b693
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributeUuids | List | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveAttributesFromIAM2OrganizationAction action = new RemoveAttributesFromIAM2OrganizationAction();
action.uuid = "7783a8869e6a31a29562fb58dfdccc69";
action.attributeUuids = asList("cdec45ca22a43b47942268b3dc90bc43","f6febd00a2633bd98d8763ffdff1b693");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveAttributesFromIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
RemoveAttributesFromIAM2OrganizationAction action = RemoveAttributesFromIAM2OrganizationAction()
action.uuid = "7783a8869e6a31a29562fb58dfdccc69"
action.attributeUuids = [cdec45ca22a43b47942268b3dc90bc43, f6febd00a2633bd98d8763ffdff1b693]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveAttributesFromIAM2OrganizationAction.Result res = action.call()
```

---

#### 从组织移除用户(RemoveIAM2VirtualIDsFromOrganization)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/organizations/{organizationUuid}/virtual-ids?virtualIDUuids={virtualIDUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/organizations/a28a5646a6ed32b2b854af830709d05c/virtual-ids?virtualIDUuids=f998d391462734c69998072fc801b96c&virtualIDUuids=df9c6eeb32df35558b8dd214f2527a23
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDUuids | List | url |  |  | 2.4.0 |
| organizationUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveIAM2VirtualIDsFromOrganizationAction action = new RemoveIAM2VirtualIDsFromOrganizationAction();
action.virtualIDUuids = asList("f998d391462734c69998072fc801b96c","df9c6eeb32df35558b8dd214f2527a23");
action.organizationUuid = "a28a5646a6ed32b2b854af830709d05c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveIAM2VirtualIDsFromOrganizationAction.Result res = action.call();
```

 Python SDK

```
RemoveIAM2VirtualIDsFromOrganizationAction action = RemoveIAM2VirtualIDsFromOrganizationAction()
action.virtualIDUuids = [f998d391462734c69998072fc801b96c, df9c6eeb32df35558b8dd214f2527a23]
action.organizationUuid = "a28a5646a6ed32b2b854af830709d05c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveIAM2VirtualIDsFromOrganizationAction.Result res = action.call()
```

---

#### 创建用户(CreateIAM2VirtualID)



##### API请求

 URLs

```
POST zstack/v1/iam2/virtual-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "id1",
    "password": "password",
    "attributes": [
      {
        "name": "some-attribute-name",
        "value": "attribute-value"
      }
    ],
    "projectUuid": "fbc22f14b3873e30b4439d973ab2f817",
    "organizationUuid": "5fef6c4ca6e63c7fa5e82d1437190ebe",
    "withoutDefaultRole": false
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
-X POST -d '{"params":{"name":"id1","password":"password","attributes":[{"name":"some-attribute-name","value":"attribute-value"}],"projectUuid":"fbc22f14b3873e30b4439d973ab2f817","organizationUuid":"5fef6c4ca6e63c7fa5e82d1437190ebe","withoutDefaultRole":false}}' http://localhost:8080/zstack/v1/iam2/virtual-ids
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.4.0 |
| password | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.4.0 |
| attributes (可选) | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| projectUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| organizationUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "894f1c5bf6714a76b08324c69b8cac7c",
    "name": "id1",
    "state": "Enabled",
    "attributes": [
      {
        "uuid": "04f039d7f3f04dc5a1b6bf9fe93e6cdd",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2VirtualIDInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
CreateIAM2VirtualIDAction action = new CreateIAM2VirtualIDAction();
action.name = "id1";
action.password = "password";
action.attributes = asList([name:some-attribute-name, value:attribute-value]);
action.projectUuid = "fbc22f14b3873e30b4439d973ab2f817";
action.organizationUuid = "5fef6c4ca6e63c7fa5e82d1437190ebe";
action.withoutDefaultRole = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2VirtualIDAction action = CreateIAM2VirtualIDAction()
action.name = "id1"
action.password = "password"
action.attributes = [[name:some-attribute-name, value:attribute-value]]
action.projectUuid = "fbc22f14b3873e30b4439d973ab2f817"
action.organizationUuid = "5fef6c4ca6e63c7fa5e82d1437190ebe"
action.withoutDefaultRole = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2VirtualIDAction.Result res = action.call()
```

---

#### 删除用户(DeleteIAM2VirtualID)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/virtual-ids/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/virtual-ids/b141cd136a1f384d9e8e68319f8e1281?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| deleteMode (可选) | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
DeleteIAM2VirtualIDAction action = new DeleteIAM2VirtualIDAction();
action.uuid = "b141cd136a1f384d9e8e68319f8e1281";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
DeleteIAM2VirtualIDAction action = DeleteIAM2VirtualIDAction()
action.uuid = "b141cd136a1f384d9e8e68319f8e1281"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIAM2VirtualIDAction.Result res = action.call()
```

---

#### 查询用户(QueryIAM2VirtualID)



##### API请求

 URLs

```
GET zstack/v1/iam2/virtual-ids
```


```
GET zstack/v1/iam2/virtual-ids/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/virtual-ids?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/virtual-ids/53c8b09e9ea63679add5c2003c4ce1cd
```



可查询字段

运行CLI命令行工具，输入QueryIAM2VirtualID并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "e6e349e2d3e94ad39d2d620366de2b33",
      "name": "id1",
      "state": "Enabled",
      "attributes": [
        {
          "uuid": "fcd5e53a4bc44906a31e93012b46dab1",
          "name": "attribute-name",
          "value": "attribute-value",
          "type": "Customized"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventories | List | 详情参考[inventories] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
QueryIAM2VirtualIDAction action = new QueryIAM2VirtualIDAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2VirtualIDAction action = QueryIAM2VirtualIDAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2VirtualIDAction.Result res = action.call()
```

---

#### 登录用户(LoginIAM2VirtualID)



##### API请求

 URLs

```
PUT zstack/v1/iam2/virtual-ids/login
```

 Body

```
{
  "loginIAM2VirtualID": {
    "name": "id1",
    "password": "password"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"loginIAM2VirtualID":{"name":"id1","password":"password"}}' http://localhost:8080/zstack/v1/iam2/virtual-ids/login
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**loginIAM2VirtualID**结构中) | 资源名称 |  | 2.4.0 |
| password | String | body(包含在**loginIAM2VirtualID**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |
| captchaUuid (可选) | String | body(包含在**loginIAM2VirtualID**结构中) |  |  | 2.4.0 |
| verifyCode (可选) | String | body(包含在**loginIAM2VirtualID**结构中) |  |  | 2.4.0 |
| clientInfo (可选) | Map | body(包含在**loginIAM2VirtualID**结构中) | 客户端信息 |  | 3.5.0 |


  - 选项格式为：`twofatoken::双因子验证6位安全码`
  - 例如：`twofatoken::123456`
- 例如：`twofatoken::123456`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7fcdc9d9e4bf3d8681a4472f38951dc0",
    "noSessionEvaluation": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | SessionInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| accountUuid | String | 账户UUID | 2.4.0 |
| userUuid | String | 用户UUID | 2.4.0 |
| expiredDate | Timestamp |  | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |



##### SDK示例

 Java SDK

```
LoginIAM2VirtualIDAction action = new LoginIAM2VirtualIDAction();
action.name = "id1";
action.password = "password";
LoginIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
LoginIAM2VirtualIDAction action = LoginIAM2VirtualIDAction()
action.name = "id1"
action.password = "password"
LoginIAM2VirtualIDAction.Result res = action.call()
```

---

#### 修改用户状态(ChangeIAM2VirtualIDState)



##### API请求

 URLs

```
PUT zstack/v1/iam2/virtual-ids/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIAM2VirtualIDState": {
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
-X PUT -d '{"changeIAM2VirtualIDState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/iam2/virtual-ids/cc723702dcc24fafba542aa64d953d58/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| stateEvent | StateEvent | body(包含在**changeIAM2VirtualIDState**结构中) |  | enable disable | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0524ea53082646569dfbc1bdecc82b70",
    "name": "id1",
    "state": "Enabled",
    "attributes": [
      {
        "uuid": "9eb16e277f1f412890e0fa8f6b76d432",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2VirtualIDInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
ChangeIAM2VirtualIDStateAction action = new ChangeIAM2VirtualIDStateAction();
action.uuid = "028961c0f40b4a63b8bf8f8fb6da2e6a";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIAM2VirtualIDStateAction.Result res = action.call();
```

 Python SDK

```
ChangeIAM2VirtualIDStateAction action = ChangeIAM2VirtualIDStateAction()
action.uuid = "7a40071d17b74e8085fb41c1e6f2216b"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIAM2VirtualIDStateAction.Result res = action.call()
```

---

#### 将用户添加到组织(AddIAM2VirtualIDsToOrganization)



##### API请求

 URLs

```
POST zstack/v1/iam2/organizations/{organizationUuid}/virtual-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "virtualIDUuids": [
      "e747d2bd298c38aab5ac7ee561377845",
      "8bda3c55564031bc9666cd6607e1aa6f"
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
-X POST -d '{"params":{"virtualIDUuids":["e747d2bd298c38aab5ac7ee561377845","8bda3c55564031bc9666cd6607e1aa6f"]}}' http://localhost:8080/zstack/v1/iam2/organizations/e28067165c7a3d098ea64c564ac2f53f/virtual-ids
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDUuids | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| organizationUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddIAM2VirtualIDsToOrganizationAction action = new AddIAM2VirtualIDsToOrganizationAction();
action.virtualIDUuids = asList("e747d2bd298c38aab5ac7ee561377845","8bda3c55564031bc9666cd6607e1aa6f");
action.organizationUuid = "e28067165c7a3d098ea64c564ac2f53f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIAM2VirtualIDsToOrganizationAction.Result res = action.call();
```

 Python SDK

```
AddIAM2VirtualIDsToOrganizationAction action = AddIAM2VirtualIDsToOrganizationAction()
action.virtualIDUuids = [e747d2bd298c38aab5ac7ee561377845, 8bda3c55564031bc9666cd6607e1aa6f]
action.organizationUuid = "e28067165c7a3d098ea64c564ac2f53f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIAM2VirtualIDsToOrganizationAction.Result res = action.call()
```

---

#### 为用户添加属性(AddAttributesToIAM2VirtualID)



##### API请求

 URLs

```
POST zstack/v1/iam2/virtual-ids/{uuid}/attributes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "attributes": [
      {
        "name": "some-attribute-name",
        "value": "attribute-value"
      }
    ]
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributes | List | body(包含在**params**结构中) | 属性 |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddAttributesToIAM2VirtualIDAction action = new AddAttributesToIAM2VirtualIDAction();
action.uuid = "94d943b468573d9d9cdfd5472a6235dc";
action.attributes = asList([name:some-attribute-name, value:attribute-value]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAttributesToIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
AddAttributesToIAM2VirtualIDAction action = AddAttributesToIAM2VirtualIDAction()
action.uuid = "94d943b468573d9d9cdfd5472a6235dc"
action.attributes = [[name:some-attribute-name, value:attribute-value]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAttributesToIAM2VirtualIDAction.Result res = action.call()
```

---

#### 从用户移除属性(RemoveAttributesFromIAM2VirtualID)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/virtual-ids/{uuid}/attributes?attributeUuids={attributeUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/virtual-ids/041a44d7d5983fe480c577c897b08eb7/attributes?attributeUuids=4d06d2b6742636dfaed60ea4b8807aa2&attributeUuids=c7ba41447321334b852cf2217bfa34f4
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributeUuids | List | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveAttributesFromIAM2VirtualIDAction action = new RemoveAttributesFromIAM2VirtualIDAction();
action.uuid = "041a44d7d5983fe480c577c897b08eb7";
action.attributeUuids = asList("4d06d2b6742636dfaed60ea4b8807aa2","c7ba41447321334b852cf2217bfa34f4");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveAttributesFromIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
RemoveAttributesFromIAM2VirtualIDAction action = RemoveAttributesFromIAM2VirtualIDAction()
action.uuid = "041a44d7d5983fe480c577c897b08eb7"
action.attributeUuids = [4d06d2b6742636dfaed60ea4b8807aa2, c7ba41447321334b852cf2217bfa34f4]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveAttributesFromIAM2VirtualIDAction.Result res = action.call()
```

---

#### 设置部门负责人(SetOrganizationSupervisor)



##### API请求

 URLs

```
PUT zstack/v1/iam2/organizations/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setOrganizationSupervisor": {
    "virtualIDUuid": "b3edb976bc0244b38711fad11913fb49"
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
-X PUT -d '{"setOrganizationSupervisor":{"virtualIDUuid":"4424b77e00cb49bca232faf58e5d1f5e"}}' http://localhost:8080/zstack/v1/iam2/organizations/25a96af2ef0144e5ae4d0fbee57a6af8/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| virtualIDUuid | String | body(包含在**setOrganizationSupervisor**结构中) |  |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



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
SetOrganizationSupervisorAction action = new SetOrganizationSupervisorAction();
action.uuid = "ea1a78daf9ff449b89326e95bc56bdcd";
action.virtualIDUuid = "b0d40be841ad41b7aec8a80ee483a88b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetOrganizationSupervisorAction.Result res = action.call();
```

 Python SDK

```
SetOrganizationSupervisorAction action = SetOrganizationSupervisorAction()
action.uuid = "a4f5561ff9404c6ebb6c07dce8245f17"
action.virtualIDUuid = "d9376e7c92cf43f3a27bf006e46406ca"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetOrganizationSupervisorAction.Result res = action.call()
```

---

#### 通过文件导入方式创建用户(BatchCreateIAM2VirtualIDFromConfigFile)



根据导入文件批量创建IAM2用户。

##### API请求

 URLs

```
POST zstack/v1/iam2/virtual-ids/from-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "virtualIDInfos": "FILE CONTENT ENCODE BY BASE64"
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
-X POST -d '{"params":{"virtualIDInfos":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/iam2/virtual-ids/from-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDInfos | String | body(包含在**params**结构中) | 传入的base64格式的用户信息 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "numberOfImportedUser": 10.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| numberOfImportedUser | int | 批量创建用户时成功创建的用户数量 | 3.6.0 |
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
BatchCreateIAM2VirtualIDFromConfigFileAction action = new BatchCreateIAM2VirtualIDFromConfigFileAction();
action.virtualIDInfos = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
BatchCreateIAM2VirtualIDFromConfigFileAction.Result res = action.call();
```

 Python SDK

```
BatchCreateIAM2VirtualIDFromConfigFileAction action = BatchCreateIAM2VirtualIDFromConfigFileAction()
action.virtualIDInfos = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
BatchCreateIAM2VirtualIDFromConfigFileAction.Result res = action.call()
```

---

#### 创建用户文件语法检查(CheckIAM2VirtualIDConfigFile)



检查文件传入的用户信息是否可用于批量创建。

##### API请求

 URLs

```
PUT zstack/v1/iam2/virtual-ids/from-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "checkIAM2VirtualIDConfigFile": {
    "virtualIDInfos": "FILE CONTENT ENCODE BY BASE64"
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
-X PUT -d '{"checkIAM2VirtualIDConfigFile":{"virtualIDInfos":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/iam2/virtual-ids/from-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDInfos | String | body(包含在**checkIAM2VirtualIDConfigFile**结构中) | 传入的base64格式的用户信息 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "results": [
    {
      "line": 123.0,
      "detail": "用户名重复"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| results | List | 详情参考[results] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| line | int |  | 3.6.0 |
| detail | String |  | 3.6.0 |



##### SDK示例

 Java SDK

```
CheckIAM2VirtualIDConfigFileAction action = new CheckIAM2VirtualIDConfigFileAction();
action.virtualIDInfos = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckIAM2VirtualIDConfigFileAction.Result res = action.call();
```

 Python SDK

```
CheckIAM2VirtualIDConfigFileAction action = CheckIAM2VirtualIDConfigFileAction()
action.virtualIDInfos = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckIAM2VirtualIDConfigFileAction.Result res = action.call()
```

---

#### 将项目加载到组织(AttachIAM2ProjectToIAM2Organization)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/{projectUuid}/iam2/organizations/{organizationUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/iam2/projects/d5698b56f9f23a61958201cf7bee4e72/iam2/organizations/72363068daea3772bb52aa663554c1e5
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuid | String | url | 项目UUID |  | 3.6.0 |
| organizationUuid | String | url | 组织UUID |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "262a60f99c5a49e8866ed9f92ef550e2",
    "name": "project",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | IAM2ProjectInventory | 详情参考[inventory] | 3.6.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| linkedAccountUuid | String |  | 3.6.0 |
| state | ProjectState | 详情参考[state] | 3.6.0 |
| attributes | List | 详情参考[attributes] | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.6.0 |
| ordinal | int |  | 3.6.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| value | String |  | 3.6.0 |
| type | AttributeType | 详情参考[type] | 3.6.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.6.0 |
| ordinal | int |  | 3.6.0 |



##### SDK示例

 Java SDK

```
AttachIAM2ProjectToIAM2OrganizationAction action = new AttachIAM2ProjectToIAM2OrganizationAction();
action.projectUuid = "d5698b56f9f23a61958201cf7bee4e72";
action.organizationUuid = "72363068daea3772bb52aa663554c1e5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachIAM2ProjectToIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
AttachIAM2ProjectToIAM2OrganizationAction action = AttachIAM2ProjectToIAM2OrganizationAction()
action.projectUuid = "d5698b56f9f23a61958201cf7bee4e72"
action.organizationUuid = "72363068daea3772bb52aa663554c1e5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachIAM2ProjectToIAM2OrganizationAction.Result res = action.call()
```

---

#### 从组织卸载项目(DetachIAM2ProjectFromIAM2Organization)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/{projectUuid}/iam2/organizations
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/3fbdf0b46d3b3dec908ddb90fd4c6f42/iam2/organizations
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuid | String | url | 项目UUID |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "de0637fdd1ca423489d31ab65e5bf886",
    "name": "project",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | IAM2ProjectInventory | 详情参考[inventory] | 3.6.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| linkedAccountUuid | String |  | 3.6.0 |
| state | ProjectState | 详情参考[state] | 3.6.0 |
| attributes | List | 详情参考[attributes] | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.6.0 |
| ordinal | int |  | 3.6.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| value | String |  | 3.6.0 |
| type | AttributeType | 详情参考[type] | 3.6.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.6.0 |
| ordinal | int |  | 3.6.0 |



##### SDK示例

 Java SDK

```
DetachIAM2ProjectFromIAM2OrganizationAction action = new DetachIAM2ProjectFromIAM2OrganizationAction();
action.projectUuid = "3fbdf0b46d3b3dec908ddb90fd4c6f42";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachIAM2ProjectFromIAM2OrganizationAction.Result res = action.call();
```

 Python SDK

```
DetachIAM2ProjectFromIAM2OrganizationAction action = DetachIAM2ProjectFromIAM2OrganizationAction()
action.projectUuid = "3fbdf0b46d3b3dec908ddb90fd4c6f42"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachIAM2ProjectFromIAM2OrganizationAction.Result res = action.call()
```

---

#### 查询组织与项目关联关系(QueryIAM2OrganizationProjectRef)



##### API请求

 URLs

```
GET zstack/v1/iam2/projects/organizations/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/projects/organizations/refs?q=projectUuid=6b0fa1d3c0433a378e50f42a53034457
```



可查询字段

运行CLI命令行工具，输入`QueryIAM2OrganizationProjectRef`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "projectUuid": "29db1d979502319da9ecacb37168e0c6",
      "organizationUuid": "cd0af78809683f72b02a3fe8da0f1db0",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
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
| projectUuid | String | 项目UUID | 3.6.0 |
| organizationUuid | String | 组织UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryIAM2OrganizationProjectRefAction action = new QueryIAM2OrganizationProjectRefAction();
action.conditions = asList("projectUuid=a36c8328d0543cf09d51730a3ee5441f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2OrganizationProjectRefAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2OrganizationProjectRefAction action = QueryIAM2OrganizationProjectRefAction()
action.conditions = ["projectUuid=287be9d5470a3a6b95c985de918c19f8"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2OrganizationProjectRefAction.Result res = action.call()
```

---

#### 查询项目与账号关联关系(QueryIAM2ProjectAccountRef)



##### API请求

 URLs

```
GET zstack/v1/iam2/projects/account/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/projects/account/refs?q=projectUuid=d8b70d161b993f479cd737fbf74fe597
```



可查询字段

运行CLI命令行工具，输入`QueryIAM2ProjectAccountRef`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "projectUuid": "84e2577b7dcd327792d89b5ea0869044",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
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
| projectUuid | String | 项目UUID | 3.6.0 |
| accountUuid | String | 账户UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryIAM2ProjectAccountRefAction action = new QueryIAM2ProjectAccountRefAction();
action.conditions = asList("projectUuid=e326155182fe367ab919c9282b261db7");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2ProjectAccountRefAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2ProjectAccountRefAction action = QueryIAM2ProjectAccountRefAction()
action.conditions = ["projectUuid=efd02b28577c3d6d855ebf27329757e2"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2ProjectAccountRefAction.Result res = action.call()
```

---

#### 获取组织架构的成员数量(GetIAM2OrganizationVirtualIDNumber)



##### API请求

 URLs

```
GET zstack/v1/iam2/organizations/{uuid}/virtualIDNumber
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/organizations/0572004dc33b36c4bd38216a024f5e0d/virtualIDNumber
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "virtualTotalNumber": 0.0,
  "virtualDirectNumber": 0.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| virtualTotalNumber | Integer |  | 4.0.0 |
| virtualDirectNumber | Integer |  | 4.0.0 |
| success | boolean |  | 4.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |



##### SDK示例

 Java SDK

```
GetIAM2OrganizationVirtualIDNumberAction action = new GetIAM2OrganizationVirtualIDNumberAction();
action.uuid = "0572004dc33b36c4bd38216a024f5e0d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetIAM2OrganizationVirtualIDNumberAction.Result res = action.call();
```

 Python SDK

```
GetIAM2OrganizationVirtualIDNumberAction action = GetIAM2OrganizationVirtualIDNumberAction()
action.uuid = "0572004dc33b36c4bd38216a024f5e0d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetIAM2OrganizationVirtualIDNumberAction.Result res = action.call()
```

---

#### 设置运营管理员(SetOrganizationOperation)



##### API请求

 URLs

```
GET zstack/v1/iam2/organizations/{uuid}/operation
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setOrganizationOperation": {
    "virtualIDUuid": "7c5f7a277d094ce2bb17a3e7c776c636"
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
-X PUT -d '{"setOrganizationOperation":{"virtualIDUuid":"f8f5f4f72e5c47aab9a73aa5a1b6a1df"}}' http://localhost:8080/zstack/v1/iam2/organizations/8cf02a09ab864bcf883e19a1c06e6c7b/operation
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.6 |
| virtualIDUuid | String | body(包含在**setOrganizationOperation**结构中) | 用户uuid |  | 4.3.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.3.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.3.6 |



##### API返回

 返回示例

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
SetOrganizationOperationAction action = new SetOrganizationOperationAction();
action.uuid = "460a3e9f3d2047679e2bcdf3cb0a8c3a";
action.virtualIDUuid = "12d54783a9ee42d198135ee1929d91ec";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetOrganizationOperationAction.Result res = action.call();
```

 Python SDK

```
SetOrganizationOperationAction action = SetOrganizationOperationAction()
action.uuid = "673bd0eb6d0c4ef0b4c1dd2ef30ed82e"
action.virtualIDUuid = "543c2373e1da4c0cb76d232156db525f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetOrganizationOperationAction.Result res = action.call()
```

---

#### 更新组织架构Quota(UpdateOrganizationQuota)



##### API请求

 URLs

```
GET zstack/v1/iam2/Organization/quotas/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateOrganizationQuota": {
    "identityUuid": "3e083dfff99b309bb15e848f7acef41b",
    "name": "quota",
    "value": 100.0
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
-X PUT -d '{"updateOrganizationQuota":{"identityUuid":"3e083dfff99b309bb15e848f7acef41b","name":"quota","value":100.0}}' http://localhost:8080/zstack/v1/iam2/Organization/quotas/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| identityUuid | String | body(包含在**updateOrganizationQuota**结构中) | uuid |  | 4.3.6 |
| name | String | body(包含在**updateOrganizationQuota**结构中) | quota名称 |  | 4.3.6 |
| value | long | body(包含在**updateOrganizationQuota**结构中) | 修改的值 |  | 4.3.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.3.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.3.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "quota",
    "identityUuid": "09081c19d997357ca8f07b4c44ddc640",
    "value": 20.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| inventory | QuotaInventory | 详情参考[inventory] | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.3.6 |
| identityUuid | String | 身份UUID（账户UUID，用户UUID） | 4.3.6 |
| identityType | String | 身份类型（账户，用户） | 4.3.6 |
| value | Long | 默认配额值 | 4.3.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.3.6 |
| createDate | Timestamp | 创建时间 | 4.3.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.6 |
| description | String | 错误的概要描述 | 4.3.6 |
| details | String | 错误的详细信息 | 4.3.6 |
| elaboration | String | 保留字段，默认为null | 4.3.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.6 |



##### SDK示例

 Java SDK

```
UpdateOrganizationQuotaAction action = new UpdateOrganizationQuotaAction();
action.identityUuid = "3e083dfff99b309bb15e848f7acef41b";
action.name = "quota";
action.value = 100.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateOrganizationQuotaAction.Result res = action.call();
```

 Python SDK

```
UpdateOrganizationQuotaAction action = UpdateOrganizationQuotaAction()
action.identityUuid = "3e083dfff99b309bb15e848f7acef41b"
action.name = "quota"
action.value = 100.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateOrganizationQuotaAction.Result res = action.call()
```

---

#### 获取组织架构的Quota(GetOrganizationQuotaUsage)



##### API请求

 URLs

```
GET zstack/v1/iam2/organizations/quota/{uuid}/usages
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/organizations/quota/9636f37046a63657b26cb28ed8cbc38a/usages
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.6 |
| systemTags (可选) | List | query | 系统标签 |  | 4.3.6 |
| userTags (可选) | List | query | 用户标签 |  | 4.3.6 |



##### API返回

 返回示例

```
{
  "usages": [
    {
      "name": "testquota",
      "total": 20.0,
      "used": 10.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| usages | List | 详情参考[usages] | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.6 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.3.6 |
| total | Long | 配额总量 | 4.3.6 |
| used | Long | 配额已用量 | 4.3.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.6 |
| description | String | 错误的概要描述 | 4.3.6 |
| details | String | 错误的详细信息 | 4.3.6 |
| elaboration | String | 保留字段，默认为null | 4.3.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.6 |



##### SDK示例

 Java SDK

```
GetOrganizationQuotaUsageAction action = new GetOrganizationQuotaUsageAction();
action.uuid = "9636f37046a63657b26cb28ed8cbc38a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetOrganizationQuotaUsageAction.Result res = action.call();
```

 Python SDK

```
GetOrganizationQuotaUsageAction action = GetOrganizationQuotaUsageAction()
action.uuid = "9636f37046a63657b26cb28ed8cbc38a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetOrganizationQuotaUsageAction.Result res = action.call()
```

---

### 项目管理相关接口

---

#### 创建项目(CreateIAM2Project)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "project",
    "attributes": [
      {
        "uuid": "a99e433b27b24c9e9abdf35f7b90d223",
        "name": "some-attribute-name",
        "value": "attribute-value"
      }
    ],
    "resourceTemplates": [
      "{\n  \"name\": \"sgName\",\n  \"resourceType\": \"SecurityGroupVO\"\n}"
    ],
    "organizationUuid": "50ce7e8c3b5f36c5b7ae528349364968",
    "linkAccountUuid": "c8e44da1b1c43772bede84cb8efa136c"
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
-X POST -d '{"params":{"name":"project","attributes":[{"uuid":"361cd01f898d4c1f99f75bdc221fa004","name":"some-attribute-name","value":"attribute-value"}],"resourceTemplates":["{\n  \"name\": \"sgName\",\n  \"resourceType\": \"SecurityGroupVO\"\n}"],"organizationUuid":"50ce7e8c3b5f36c5b7ae528349364968","linkAccountUuid":"c8e44da1b1c43772bede84cb8efa136c"}}' http://localhost:8080/zstack/v1/iam2/projects
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.4.0 |
| attributes (可选) | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |
| quota (可选) | Map | body(包含在**params**结构中) |  |  | 2.4.0 |
| roleUuids (可选) | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| resourceTemplates (可选) | List | body(包含在**params**结构中) |  |  | 0.6 |
| organizationUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| linkAccountUuid (可选) | String | body(包含在**params**结构中) | 关联的子账号UUID (提前填充需要创建的关联子账号UUID) |  | 5.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "58e83e6bc8ff4b89a6ab5f35b8494a76",
    "name": "project",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2ProjectInventory | 详情参考[inventory] | 2.4.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| linkedAccountUuid | String |  | 2.4.0 |
| state | ProjectState | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
CreateIAM2ProjectAction action = new CreateIAM2ProjectAction();
action.name = "project";
action.attributes = asList([uuid:6b7d9f5941bc404fa870bbd229ee06a2, name:some-attribute-name, value:attribute-value]);
action.resourceTemplates = asList("{
  "name": "sgName",
  "resourceType": "SecurityGroupVO"
}");
action.organizationUuid = "50ce7e8c3b5f36c5b7ae528349364968";
action.linkAccountUuid = "c8e44da1b1c43772bede84cb8efa136c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2ProjectAction action = CreateIAM2ProjectAction()
action.name = "project"
action.attributes = [[uuid:aefcbabf39644be088caa501a44e2a87, name:some-attribute-name, value:attribute-value]]
action.resourceTemplates = [{
  "name": "sgName",
  "resourceType": "SecurityGroupVO"
}]
action.organizationUuid = "50ce7e8c3b5f36c5b7ae528349364968"
action.linkAccountUuid = "c8e44da1b1c43772bede84cb8efa136c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2ProjectAction.Result res = action.call()
```

---

#### 从模版创建IAM2项目(CreateIAM2ProjectFromTemplate)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/from/templates/{templateUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "project",
    "organizationUuid": "589ddc9593ea3d378fd34623ee243b55",
    "resourceTemplates": [
      "{\n  \"name\": \"sgName\",\n  \"resourceType\": \"SecurityGroupVO\"\n}"
    ],
    "linkAccountUuid": "245f97ea8c8835a99d8294876f2fbe7b"
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
-X POST -d '{"params":{"name":"project","organizationUuid":"589ddc9593ea3d378fd34623ee243b55","resourceTemplates":["{\n  \"name\": \"sgName\",\n  \"resourceType\": \"SecurityGroupVO\"\n}"],"linkAccountUuid":"245f97ea8c8835a99d8294876f2fbe7b"}}' http://localhost:8080/zstack/v1/iam2/projects/from/templates/adff5802786439228aaf60d8a53f7f93
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在`params`结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 2.4.0 |
| templateUuid | String | url |  |  | 2.4.0 |
| resourceUuid (可选) | String | body(包含在`params`结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |
| roleUuids (可选) | List | body(包含在`params`结构中) |  |  | 2.4.0 |
| organizationUuid (可选) | String | body(包含在`params`结构中) |  |  | 0.6 |
| tagUuids (可选) | List | body(包含在`params`结构中) | 标签UUID列表 |  | 3.4.0 |
| resourceTemplates (可选) | List | body(包含在`params`结构中) | 资源模板 |  | 5.0.0 |
| linkAccountUuid (可选) | String | body(包含在`params`结构中) | 关联子账号的UUID，为空则系统生成 |  | 5.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c6c6a122eb564cbd9db2f779fe355d21",
    "name": "project",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2ProjectInventory | 详情参考[inventory] | 2.4.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| linkedAccountUuid | String |  | 2.4.0 |
| state | ProjectState | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
CreateIAM2ProjectFromTemplateAction action = new CreateIAM2ProjectFromTemplateAction();
action.name = "project";
action.templateUuid = "adff5802786439228aaf60d8a53f7f93";
action.organizationUuid = "589ddc9593ea3d378fd34623ee243b55";
action.resourceTemplates = asList("{
  "name": "sgName",
  "resourceType": "SecurityGroupVO"
}");
action.linkAccountUuid = "245f97ea8c8835a99d8294876f2fbe7b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2ProjectFromTemplateAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2ProjectFromTemplateAction action = CreateIAM2ProjectFromTemplateAction()
action.name = "project"
action.templateUuid = "adff5802786439228aaf60d8a53f7f93"
action.organizationUuid = "589ddc9593ea3d378fd34623ee243b55"
action.resourceTemplates = [{
  "name": "sgName",
  "resourceType": "SecurityGroupVO"
}]
action.linkAccountUuid = "245f97ea8c8835a99d8294876f2fbe7b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2ProjectFromTemplateAction.Result res = action.call()
```

---

#### 删除项目(DeleteIAM2Project)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/fffc7e1b2a983029833d1ab52bfa8187?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| deleteMode (可选) | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
DeleteIAM2ProjectAction action = new DeleteIAM2ProjectAction();
action.uuid = "fffc7e1b2a983029833d1ab52bfa8187";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
DeleteIAM2ProjectAction action = DeleteIAM2ProjectAction()
action.uuid = "fffc7e1b2a983029833d1ab52bfa8187"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIAM2ProjectAction.Result res = action.call()
```

---

#### 查询项目(QueryIAM2Project)



##### API请求

 URLs

```
GET zstack/v1/iam2/projects
```


```
GET zstack/v1/iam2/projects/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/projects?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/projects/834affbf924e354f97ad0f47ff95d27d
```



可查询字段

运行CLI命令行工具，输入QueryIAM2Project并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "daa77ad8d7af42cbadc88950cb85abe4",
      "name": "project",
      "state": "Enabled"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventories | List | 详情参考[inventories] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| linkedAccountUuid | String |  | 2.4.0 |
| state | ProjectState | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
QueryIAM2ProjectAction action = new QueryIAM2ProjectAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2ProjectAction action = QueryIAM2ProjectAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2ProjectAction.Result res = action.call()
```

---

#### 更新项目(UpdateIAM2Project)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIAM2Project": {
    "name": "new-name"
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
-X PUT -d '{"updateIAM2Project":{"name":"new-name"}}' http://localhost:8080/zstack/v1/iam2/projects/63f57ce8c8013d56ac4df307cfb1c648/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| name (可选) | String | body(包含在**updateIAM2Project**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**updateIAM2Project**结构中) | 资源的详细描述 |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "41d47db9cb0040edabe5823e1fff0c0e",
    "name": "project",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2ProjectInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| linkedAccountUuid | String |  | 2.4.0 |
| state | ProjectState | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
UpdateIAM2ProjectAction action = new UpdateIAM2ProjectAction();
action.uuid = "63f57ce8c8013d56ac4df307cfb1c648";
action.name = "new-name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
UpdateIAM2ProjectAction action = UpdateIAM2ProjectAction()
action.uuid = "63f57ce8c8013d56ac4df307cfb1c648"
action.name = "new-name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIAM2ProjectAction.Result res = action.call()
```

---

#### 登录项目(LoginIAM2Project)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/login
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "loginIAM2Project": {
    "projectName": "project"
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
-X PUT -d '{"loginIAM2Project":{"projectName":"project"}}' http://localhost:8080/zstack/v1/iam2/projects/login
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectName | String | body(包含在**loginIAM2Project**结构中) |  |  | 2.4.0 |
| clientInfo （可选） | Map | body(包含在**loginIAM2Project**结构中) | 客户端信息 |  | 3.5.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3357cccd4d1436748a1721d5e12f2fcd",
    "noSessionEvaluation": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | SessionInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| accountUuid | String | 账户UUID | 2.4.0 |
| userUuid | String | 用户UUID | 2.4.0 |
| expiredDate | Timestamp |  | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |



##### SDK示例

 Java SDK

```
LoginIAM2ProjectAction action = new LoginIAM2ProjectAction();
action.projectName = "project";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
LoginIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
LoginIAM2ProjectAction action = LoginIAM2ProjectAction()
action.projectName = "project"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
LoginIAM2ProjectAction.Result res = action.call()
```

---

#### 设置项目登陆限制(SetIAM2ProjectLoginExpired)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/add/login-expired/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setIAM2ProjectLoginExpired": {
    "loginExpired": "allow 1/59 * * * * ? * to 30/59 * * * * ? *",
    "loginExpiredAttributeUuid": "64faa902ed69361aa47c71d95768315b"
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
-X PUT -d '{"setIAM2ProjectLoginExpired":{"loginExpired":"allow 1/59 * * * * ? * to 30/59 * * * * ? *","loginExpiredAttributeUuid":"64faa902ed69361aa47c71d95768315b"}}' http://localhost:8080/zstack/v1/iam2/projects/add/login-expired/6b2eb879751736389b66649f98f3e29b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.0 |
| loginExpired | String | body(包含在`setIAM2ProjectLoginExpired`结构中) | 表达式 |  | 4.3.0 |
| loginExpiredAttributeUuid (可选) | String | body(包含在`setIAM2ProjectLoginExpired`结构中) | 表达式属性UUID (允许提前设置数据UUID，不填入则系统随机生成) |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.3.0 |



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
SetIAM2ProjectLoginExpiredAction action = new SetIAM2ProjectLoginExpiredAction();
action.uuid = "6b2eb879751736389b66649f98f3e29b";
action.loginExpired = "allow 1/59 * * * * ? * to 30/59 * * * * ? *";
action.loginExpiredAttributeUuid = "64faa902ed69361aa47c71d95768315b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetIAM2ProjectLoginExpiredAction.Result res = action.call();
```

 Python SDK

```
SetIAM2ProjectLoginExpiredAction action = SetIAM2ProjectLoginExpiredAction()
action.uuid = "6b2eb879751736389b66649f98f3e29b"
action.loginExpired = "allow 1/59 * * * * ? * to 30/59 * * * * ? *"
action.loginExpiredAttributeUuid = "64faa902ed69361aa47c71d95768315b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetIAM2ProjectLoginExpiredAction.Result res = action.call()
```

---

#### 删除项目限制登陆(RemoveIAM2ProjectLoginExpired)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/remove/login-expired/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "removeIAM2ProjectLoginExpired": {
    "attributeUuid": "f386055bea993b6c88d39d33fe133c44"
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
-X PUT -d '{"removeIAM2ProjectLoginExpired":{"attributeUuid":"f386055bea993b6c88d39d33fe133c44"}}' http://localhost:8080/zstack/v1/iam2/projects/remove/login-expired/b81a99d69d77366d8b1bba254aa02e0a/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.0 |
| attributeUuid | Map | body(包含在**removeIAM2ProjectLoginExpired**结构中) |  |  | 4.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.3.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{{
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
RemoveIAM2ProjectLoginExpiredAction action = new RemoveIAM2ProjectLoginExpiredAction();
action.uuid = "b81a99d69d77366d8b1bba254aa02e0a";
action.attributeUuid = "f386055bea993b6c88d39d33fe133c44";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveIAM2ProjectLoginExpiredAction.Result res = action.call();
```

 Python SDK

```
RemoveIAM2ProjectLoginExpiredAction action = RemoveIAM2ProjectLoginExpiredAction()
action.uuid = "b81a99d69d77366d8b1bba254aa02e0a"
action.attributeUuid = "f386055bea993b6c88d39d33fe133c44"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveIAM2ProjectLoginExpiredAction.Result res = action.call()
```

---

#### 修改项目状态(ChangeIAM2ProjectState)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIAM2ProjectState": {
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
-X PUT -d '{"changeIAM2ProjectState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/iam2/projects/13096969d0093f76802126ca15d9ac9c/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| stateEvent | StateEvent | body(包含在**changeIAM2ProjectState**结构中) |  | enable disable | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

返回示例

```
{
  "inventory": {
    "uuid": "21fc3599223d46ddb5d065f6bf674a70",
    "name": "project",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2ProjectInventory | 详情参考[inventory] | 2.4.0 |

#error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

#inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| linkedAccountUuid | String |  | 2.4.0 |
| state | ProjectState | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

#state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

#attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

#type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
ChangeIAM2ProjectStateAction action = new ChangeIAM2ProjectStateAction();
action.uuid = "13096969d0093f76802126ca15d9ac9c";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIAM2ProjectStateAction.Result res = action.call();
```

 Python SDK

```
ChangeIAM2ProjectStateAction action = ChangeIAM2ProjectStateAction()
action.uuid = "13096969d0093f76802126ca15d9ac9c"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIAM2ProjectStateAction.Result res = action.call()
```

---

#### 从项目移除成员(RemoveIAM2VirtualIDsFromProject)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/{projectUuid}/virtual-ids?virtualIDUuids={virtualIDUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/bd9eaf0cc58e3ffb8792922633be41d6/virtual-ids?virtualIDUuids=e1bc00e294e430069d37c620583ed9fd&virtualIDUuids=28852db42801373ba539eb67387e7658
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuid | String | url |  |  | 2.4.0 |
| virtualIDUuids | List | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveIAM2VirtualIDsFromProjectAction action = new RemoveIAM2VirtualIDsFromProjectAction();
action.projectUuid = "bd9eaf0cc58e3ffb8792922633be41d6";
action.virtualIDUuids = asList("e1bc00e294e430069d37c620583ed9fd","28852db42801373ba539eb67387e7658");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveIAM2VirtualIDsFromProjectAction.Result res = action.call();
```

 Python SDK

```
RemoveIAM2VirtualIDsFromProjectAction action = RemoveIAM2VirtualIDsFromProjectAction()
action.projectUuid = "bd9eaf0cc58e3ffb8792922633be41d6"
action.virtualIDUuids = [e1bc00e294e430069d37c620583ed9fd, 28852db42801373ba539eb67387e7658]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveIAM2VirtualIDsFromProjectAction.Result res = action.call()
```

---

#### 获取系统属性(GetIAM2SystemAttributes)



##### API请求

 URLs

```
GET /v1/iam2/attributes/system
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/attributes/system
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query |  |  | 2.4.0 |
| userTags (可选) | List | query |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f6fb2ce8587d4455b51164b3970b2568",
      "name": "__ProjectAdmin__",
      "type": "System"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventories | List | 详情参考[inventories] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
GetIAM2SystemAttributesAction action = new GetIAM2SystemAttributesAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetIAM2SystemAttributesAction.Result res = action.call();
```

 Python SDK

```
GetIAM2SystemAttributesAction action = GetIAM2SystemAttributesAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetIAM2SystemAttributesAction.Result res = action.call()
```

---

#### 为项目添加属性(AddAttributesToIAM2Project)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/{uuid}/attributes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "attributes": [
      {
        "name": "some-attribute-name",
        "value": "attribute-value"
      }
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
-X POST -d '{"params":{"attributes":[{"name":"some-attribute-name","value":"attribute-value"}]}}' http://localhost:8080/zstack/v1/iam2/projects/71c17463bb2434f28e4649d77cd12366/attributes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributes | List | body(包含在**params**结构中) | 属性 |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddAttributesToIAM2ProjectAction action = new AddAttributesToIAM2ProjectAction();
action.uuid = "71c17463bb2434f28e4649d77cd12366";
action.attributes = asList([name:some-attribute-name, value:attribute-value]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAttributesToIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
AddAttributesToIAM2ProjectAction action = AddAttributesToIAM2ProjectAction()
action.uuid = "71c17463bb2434f28e4649d77cd12366"
action.attributes = [[name:some-attribute-name, value:attribute-value]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAttributesToIAM2ProjectAction.Result res = action.call()
```

---

#### 从项目移除属性(RemoveAttributesFromIAM2Project)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/{uuid}/attributes?attributeUuids={attributeUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/3212113e647a3c4d9e7d2dc87f607a45/attributes?attributeUuids=46f60ffedda13fbda87a584d5b23b6ba&attributeUuids=c41ee23e5fd330ccbb9f9cf8bb2061c1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributeUuids | List | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveAttributesFromIAM2ProjectAction action = new RemoveAttributesFromIAM2ProjectAction();
action.uuid = "3212113e647a3c4d9e7d2dc87f607a45";
action.attributeUuids = asList("46f60ffedda13fbda87a584d5b23b6ba","c41ee23e5fd330ccbb9f9cf8bb2061c1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveAttributesFromIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
RemoveAttributesFromIAM2ProjectAction action = RemoveAttributesFromIAM2ProjectAction()
action.uuid = "3212113e647a3c4d9e7d2dc87f607a45"
action.attributeUuids = [46f60ffedda13fbda87a584d5b23b6ba, c41ee23e5fd330ccbb9f9cf8bb2061c1]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveAttributesFromIAM2ProjectAction.Result res = action.call()
```

---

#### 创建成员组(CreateIAM2VirtualIDGroup)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/{projectUuid}/groups?projectUuid={projectUuid}
```


```
POST zstack/v1/iam2/groups?projectUuid={projectUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "projectUuid": "ae81ff6fb37e392ca9b7568475f064b6",
    "name": "group"
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
-X POST -d '{"params":{"projectUuid":"ae81ff6fb37e392ca9b7568475f064b6","name":"group"}}' http://localhost:8080/zstack/v1/iam2/groups
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"projectUuid":"ae81ff6fb37e392ca9b7568475f064b6","name":"group"}}' http://localhost:8080/zstack/v1/iam2/projects/ae81ff6fb37e392ca9b7568475f064b6/groups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuid（可选） | String | url |  |  | 4.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.4.0 |
| attributes (可选) | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7c1b800eb5644c35823bbed13d14b54c",
    "projectUuid": "04ef5931e13e4362b1960e03033b7d79",
    "name": "group-name",
    "state": "Enabled",
    "attributes": [
      {
        "uuid": "70200048148344c1833a5cc8d6227f0b",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2VirtualIDGroupInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| projectUuid | String |  | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
CreateIAM2VirtualIDGroupAction action = new CreateIAM2VirtualIDGroupAction();
action.projectUuid = "ae81ff6fb37e392ca9b7568475f064b6";
action.name = "group";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2VirtualIDGroupAction action = CreateIAM2VirtualIDGroupAction()
action.projectUuid = "ae81ff6fb37e392ca9b7568475f064b6"
action.name = "group"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 删除成员组(DeleteIAM2VirtualIDGroup)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/groups/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/groups/70844c49506031a69cb4a19a1478cddf?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| deleteMode (可选) | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
DeleteIAM2VirtualIDGroupAction action = new DeleteIAM2VirtualIDGroupAction();
action.uuid = "70844c49506031a69cb4a19a1478cddf";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteIAM2VirtualIDGroupAction action = DeleteIAM2VirtualIDGroupAction()
action.uuid = "70844c49506031a69cb4a19a1478cddf"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 查询成员组(QueryIAM2VirtualIDGroup)



##### API请求

 URLs

```
GET zstack/v1/iam2/projects/groups
```


```
GET zstack/v1/iam2/projects/groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/projects/groups?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/projects/groups/dfc5a52d28e3354fad1aaf634e50eb35
```



可查询字段

运行CLI命令行工具，输入QueryIAM2VirtualIDGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "89142c9562a74f619d9e2fe90982e559",
      "projectUuid": "bb66c8d69fbd419082b7c1f5e0e91ac9",
      "name": "group-name",
      "state": "Enabled",
      "attributes": [
        {
          "uuid": "39f0d375a4974ef3a8757de82ab1fdce",
          "name": "attribute-name",
          "value": "attribute-value",
          "type": "Customized"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventories | List | 详情参考[inventories] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| projectUuid | String |  | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
QueryIAM2VirtualIDGroupAction action = new QueryIAM2VirtualIDGroupAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2VirtualIDGroupAction action = QueryIAM2VirtualIDGroupAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 更新成员组(UpdateIAM2VirtualIDGroup)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIAM2VirtualIDGroup": {
    "name": "new-name"
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
-X PUT -d '{"updateIAM2VirtualIDGroup":{"name":"new-name"}}' http://localhost:8080/zstack/v1/iam2/projects/groups/384bd47592273ddcb71039de694a37d3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| name (可选) | String | body(包含在**updateIAM2VirtualIDGroup**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**updateIAM2VirtualIDGroup**结构中) | 资源的详细描述 |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "9d44314e3c1a40759a0af2c59b4bd9b2",
    "projectUuid": "943d49ec4af74b8795d4c37b01d9e512",
    "name": "group-name",
    "state": "Enabled",
    "attributes": [
      {
        "uuid": "2e3fb2391e774e81bd55c6130c083c1d",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2VirtualIDGroupInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| projectUuid | String |  | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
UpdateIAM2VirtualIDGroupAction action = new UpdateIAM2VirtualIDGroupAction();
action.uuid = "384bd47592273ddcb71039de694a37d3";
action.name = "new-name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateIAM2VirtualIDGroupAction action = UpdateIAM2VirtualIDGroupAction()
action.uuid = "384bd47592273ddcb71039de694a37d3"
action.name = "new-name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 修改成员组状态(ChangeIAM2VirtualIDGroupState)



##### API请求

 URLs

```
PUT zstack/v1/iam2/projects/groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIAM2VirtualIDGroupState": {
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
-X PUT -d '{"changeIAM2VirtualIDGroupState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/iam2/projects/groups/dbc102a32b41404da8f639fe782834e9/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| stateEvent | StateEvent | body(包含在**changeIAM2VirtualIDGroupState**结构中) |  | enable disable | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2da22aa4a4c840e2a0e5368427c7ab60",
    "projectUuid": "8aaf3ae982794c6e9f491964b2f419b2",
    "name": "group-name",
    "state": "Enabled",
    "attributes": [
      {
        "uuid": "d754761544514141ab5080ecbe9e31e5",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2VirtualIDGroupInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| projectUuid | String |  | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
ChangeIAM2VirtualIDGroupStateAction action = new ChangeIAM2VirtualIDGroupStateAction();
action.uuid = "b5b3e38809d24fb4b8c72603c5290c6b";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIAM2VirtualIDGroupStateAction.Result res = action.call();
```

 Python SDK

```
ChangeIAM2VirtualIDGroupStateAction action = ChangeIAM2VirtualIDGroupStateAction()
action.uuid = "28b8a0760b484c5c91cdda19ee998644"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIAM2VirtualIDGroupStateAction.Result res = action.call()
```

---

#### 将成员添加到项目(AddIAM2VirtualIDsToProject)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/{projectUuid}/virtual-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "virtualIDUuids": [
      "6552671ff11d301cb593ed46b6db53ed",
      "f2a0c8724833360c939db5665d83aefc"
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
-X POST -d '{"params":{"virtualIDUuids":["6552671ff11d301cb593ed46b6db53ed","f2a0c8724833360c939db5665d83aefc"]}}' http://localhost:8080/zstack/v1/iam2/projects/70d6ff93ccec388d92cd5c2c96f9df0b/virtual-ids
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuid | String | url |  |  | 2.4.0 |
| virtualIDUuids | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |
| roleUuids (可选) | List | body(包含在**params**结构中) |  |  | 2.4.0 |



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
AddIAM2VirtualIDsToProjectAction action = new AddIAM2VirtualIDsToProjectAction();
action.projectUuid = "70d6ff93ccec388d92cd5c2c96f9df0b";
action.virtualIDUuids = asList("6552671ff11d301cb593ed46b6db53ed","f2a0c8724833360c939db5665d83aefc");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIAM2VirtualIDsToProjectAction.Result res = action.call();
```

 Python SDK

```
AddIAM2VirtualIDsToProjectAction action = AddIAM2VirtualIDsToProjectAction()
action.projectUuid = "70d6ff93ccec388d92cd5c2c96f9df0b"
action.virtualIDUuids = [6552671ff11d301cb593ed46b6db53ed, f2a0c8724833360c939db5665d83aefc]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIAM2VirtualIDsToProjectAction.Result res = action.call()
```

---

#### 将多个用户添加到多个项目(AddIAM2VirtualIDsToProjects)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/virtual-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "projectUuids": [
      "106f65981c7a36498a75df50b95beb07",
      "5ee4abd779493b96a9c150f5a044963e"
    ],
    "virtualIDUuids": [
      "573e6aa70b063c5abe03528ffe4f095c",
      "ff71e39e4c2c340590b24d8609194392"
    ],
    "roleUuids": [
      "259c6ad5c2db3a8caf1b97436059f9df",
      "66e234a2951c3468823cd79a1d4315f9"
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
-X POST -d '{"params":{"projectUuids":["106f65981c7a36498a75df50b95beb07","5ee4abd779493b96a9c150f5a044963e"],"virtualIDUuids":["573e6aa70b063c5abe03528ffe4f095c","ff71e39e4c2c340590b24d8609194392"],"roleUuids":["259c6ad5c2db3a8caf1b97436059f9df","66e234a2951c3468823cd79a1d4315f9"]}}' http://localhost:8080/zstack/v1/iam2/projects/virtual-ids
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuids | List | body(包含在**params**结构中) | 项目uuid |  | 4.0.0 |
| virtualIDUuids | List | body(包含在**params**结构中) | 用户uuid |  | 4.0.0 |
| roleUuids (可选) | List | body(包含在**params**结构中) | 角色uuid |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



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
AddIAM2VirtualIDsToProjectsAction action = new AddIAM2VirtualIDsToProjectsAction();
action.projectUuids = asList("106f65981c7a36498a75df50b95beb07","5ee4abd779493b96a9c150f5a044963e");
action.virtualIDUuids = asList("573e6aa70b063c5abe03528ffe4f095c","ff71e39e4c2c340590b24d8609194392");
action.roleUuids = asList("259c6ad5c2db3a8caf1b97436059f9df","66e234a2951c3468823cd79a1d4315f9");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIAM2VirtualIDsToProjectsAction.Result res = action.call();
```

 Python SDK

```
AddIAM2VirtualIDsToProjectsAction action = AddIAM2VirtualIDsToProjectsAction()
action.projectUuids = [106f65981c7a36498a75df50b95beb07, 5ee4abd779493b96a9c150f5a044963e]
action.virtualIDUuids = [573e6aa70b063c5abe03528ffe4f095c, ff71e39e4c2c340590b24d8609194392]
action.roleUuids = [259c6ad5c2db3a8caf1b97436059f9df, 66e234a2951c3468823cd79a1d4315f9]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIAM2VirtualIDsToProjectsAction.Result res = action.call()
```

---

#### 将用户移出项目(RemoveIAM2VirtualIDsFromProjects)



##### API请求

 URLs

```
DELECT zstack/v1/iam2/projects/virtual-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/virtual-ids
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuids | List | body(包含在**params**结构中) | 项目uuid |  | 4.0.0 |
| virtualIDUuids | List | body(包含在**params**结构中) | 用户uuid |  | 4.0.0 |
| systemTags (可选) | List | body(包含在**params**结构中) | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body(包含在**params**结构中) | 用户标签 |  | 4.0.0 |



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
RemoveIAM2VirtualIDsFromProjectsAction action = new RemoveIAM2VirtualIDsFromProjectsAction();
action.projectUuids = asList("4b2abe7589643af3a924c3d852b68645","3b52002f0fbd37ac9714dcd218f3862b");
action.virtualIDUuids = asList("0fbfc7baae4f394bbf368605da56da84","e78eeced9c15367e84c7e467bdc8ac70");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveIAM2VirtualIDsFromProjectsAction.Result res = action.call();
```

 Python SDK

```
RemoveIAM2VirtualIDsFromProjectsAction action = RemoveIAM2VirtualIDsFromProjectsAction()
action.projectUuids = [4b2abe7589643af3a924c3d852b68645, 3b52002f0fbd37ac9714dcd218f3862b]
action.virtualIDUuids = [0fbfc7baae4f394bbf368605da56da84, e78eeced9c15367e84c7e467bdc8ac70]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveIAM2VirtualIDsFromProjectsAction.Result res = action.call()
```

---

#### 将多个成员组添加到多个项目(AddIAM2VirtualIDGroupToProjects)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "structs": []
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
-X POST -d '{"params":{"structs":[]}}' http://localhost:8080/zstack/v1/iam2/projects/groups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuids | List | body(包含在**params**结构中) | 项目uuid |  | 4.0.0 |
| groupUuids | List | body(包含在**params**结构中) | 用户组uuid |  | 4.0.0 |
| roleUuids (可选) | List | body(包含在**params**结构中) | 角色uuid |  | 4.0.0 |
| systemTags (可选) | List | body |  |  | 4.0.0 |
| userTags (可选) | List | body |  |  | 4.0.0 |



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
AddIAM2VirtualIDGroupToProjectsAction action = new AddIAM2VirtualIDGroupToProjectsAction();
action.structs = new ArrayList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIAM2VirtualIDGroupToProjectsAction.Result res = action.call();
```

 Python SDK

```
AddIAM2VirtualIDGroupToProjectsAction action = AddIAM2VirtualIDGroupToProjectsAction()
action.structs = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIAM2VirtualIDGroupToProjectsAction.Result res = action.call()
```

---

#### 将成员组移出项目(RemoveIAM2VirtualIDGroupFromProjects)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/groups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuids (可选) | List | body(包含在**params**结构中) | 项目uuid |  | 4.0.0 |
| groupUuids (可选) | List | body(包含在**params**结构中) | 用户uuid |  | 4.0.0 |
| systemTags (可选) | List | body(包含在**params**结构中) | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body(包含在**params**结构中) | 用户标签 |  | 4.0.0 |



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
RemoveIAM2VirtualIDGroupFromProjectsAction action = new RemoveIAM2VirtualIDGroupFromProjectsAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveIAM2VirtualIDGroupFromProjectsAction.Result res = action.call();
```

 Python SDK

```
RemoveIAM2VirtualIDGroupFromProjectsAction action = RemoveIAM2VirtualIDGroupFromProjectsAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveIAM2VirtualIDGroupFromProjectsAction.Result res = action.call()
```

---

#### 向项目添加资源(AddResourceToIAM2Project)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/add/resource/
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "projectUuid": "4b596d98fa90346cb7ac102ed2ba354a",
    "resourceTemplates": [
      "{}",
      "{}"
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
-X POST -d '{"params":{"projectUuid":"4b596d98fa90346cb7ac102ed2ba354a","resourceTemplates":["{}","{}"]}}' http://localhost:8080/zstack/v1/iam2/projects/add/resource/
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| projectUuid | String | body(包含在**params**结构中) | 项目uuid |  | 4.4.0 |
| resourceTemplates | List | body(包含在**params**结构中) | 资源模板 |  | 4.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.0 |



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
AddResourceToIAM2ProjectAction action = new AddResourceToIAM2ProjectAction();
action.projectUuid = "4b596d98fa90346cb7ac102ed2ba354a";
action.resourceTemplates = asList("{}","{}");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddResourceToIAM2ProjectAction.Result res = action.call();
```

 Python SDK

```
AddResourceToIAM2ProjectAction action = AddResourceToIAM2ProjectAction()
action.projectUuid = "4b596d98fa90346cb7ac102ed2ba354a"
action.resourceTemplates = [{}, {}]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddResourceToIAM2ProjectAction.Result res = action.call()
```

---

#### 将成员添加到成员组(AddIAM2VirtualIDsToGroup)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/groups/{groupUuid}/virtual-ids
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "virtualIDUuids": [
      "28e44658cba33e57b96da2c430cbbefe",
      "f9450427d6b03c2cb992c80a3a64efaa"
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
-X POST -d '{"params":{"virtualIDUuids":["28e44658cba33e57b96da2c430cbbefe","f9450427d6b03c2cb992c80a3a64efaa"]}}' http://localhost:8080/zstack/v1/iam2/projects/groups/2a5a0fe00543339f8c424e069df8c956/virtual-ids
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDUuids | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| groupUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddIAM2VirtualIDsToGroupAction action = new AddIAM2VirtualIDsToGroupAction();
action.virtualIDUuids = asList("28e44658cba33e57b96da2c430cbbefe","f9450427d6b03c2cb992c80a3a64efaa");
action.groupUuid = "2a5a0fe00543339f8c424e069df8c956";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIAM2VirtualIDsToGroupAction.Result res = action.call();
```

 Python SDK

```
AddIAM2VirtualIDsToGroupAction action = AddIAM2VirtualIDsToGroupAction()
action.virtualIDUuids = [28e44658cba33e57b96da2c430cbbefe, f9450427d6b03c2cb992c80a3a64efaa]
action.groupUuid = "2a5a0fe00543339f8c424e069df8c956"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIAM2VirtualIDsToGroupAction.Result res = action.call()
```

---

#### 从成员组移除成员(RemoveIAM2VirtualIDsFromGroup)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/groups/{groupUuid}/virtual-ids?virtualIDUuids={virtualIDUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/groups/7e89f250537f36818cd3d079f2730b2d/virtual-ids?virtualIDUuids=de445baef47130f68b3db86d7614151f&virtualIDUuids=a44ee69219963ef98ca3a15963fc8cfc
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDUuids | List | url |  |  | 2.4.0 |
| groupUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveIAM2VirtualIDsFromGroupAction action = new RemoveIAM2VirtualIDsFromGroupAction();
action.virtualIDUuids = asList("de445baef47130f68b3db86d7614151f","a44ee69219963ef98ca3a15963fc8cfc");
action.groupUuid = "7e89f250537f36818cd3d079f2730b2d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveIAM2VirtualIDsFromGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveIAM2VirtualIDsFromGroupAction action = RemoveIAM2VirtualIDsFromGroupAction()
action.virtualIDUuids = [de445baef47130f68b3db86d7614151f, a44ee69219963ef98ca3a15963fc8cfc]
action.groupUuid = "7e89f250537f36818cd3d079f2730b2d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveIAM2VirtualIDsFromGroupAction.Result res = action.call()
```

---

#### 更新权限(UpdateIAM2VirtualID)



##### API请求

 URLs

```
PUT zstack/v1/iam2/virtual-ids/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIAM2VirtualID": {
    "name": "new-name",
    "description": "new-desc",
    "password": "new-password"
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
-X PUT -d '{"updateIAM2VirtualID":{"name":"new-name","description":"new-desc","password":"new-password"}}' http://localhost:8080/zstack/v1/iam2/virtual-ids/348ac2cc1d9438ffa84878d4cb494234/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| name (可选) | String | body(包含在**updateIAM2VirtualID**结构中) | 资源名称 |  | 2.4.0 |
| description (可选) | String | body(包含在**updateIAM2VirtualID**结构中) | 资源的详细描述 |  | 2.4.0 |
| password (可选) | String | body(包含在**updateIAM2VirtualID**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4906f550acb843b7ae64c32fbf7251c3",
    "name": "id1",
    "state": "Enabled",
    "attributes": [
      {
        "uuid": "b0926ede396547f9b1f6199c05ffe4d4",
        "name": "attribute-name",
        "value": "attribute-value",
        "type": "Customized"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| inventory | IAM2VirtualIDInventory | 详情参考[inventory] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.4.0 |
| description | String | 错误的概要描述 | 2.4.0 |
| details | String | 错误的详细信息 | 2.4.0 |
| elaboration | String | 保留字段，默认为null | 2.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| description | String | 资源的详细描述 | 2.4.0 |
| createDate | Timestamp | 创建时间 | 2.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4.0 |
| state | State | 详情参考[state] | 2.4.0 |
| attributes | List | 详情参考[attributes] | 2.4.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.4.0 |
| name | String | 资源名称 | 2.4.0 |
| value | String |  | 2.4.0 |
| type | AttributeType | 详情参考[type] | 2.4.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.4.0 |
| ordinal | int |  | 2.4.0 |



##### SDK示例

 Java SDK

```
UpdateIAM2VirtualIDAction action = new UpdateIAM2VirtualIDAction();
action.uuid = "348ac2cc1d9438ffa84878d4cb494234";
action.name = "new-name";
action.description = "new-desc";
action.password = "new-password";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
UpdateIAM2VirtualIDAction action = UpdateIAM2VirtualIDAction()
action.uuid = "348ac2cc1d9438ffa84878d4cb494234"
action.name = "new-name"
action.description = "new-desc"
action.password = "new-password"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIAM2VirtualIDAction.Result res = action.call()
```

---

#### 为成员添加权限(AddRolesToIAM2VirtualID)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/virtual-ids/{virtualIDUuid}/roles
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "roleUuids": [
      "d1140b7d8ca03f7ba15ce467a9befec6",
      "8245aba180633254a5dfd76cbdd6f773"
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
-X POST -d '{"params":{"roleUuids":["d1140b7d8ca03f7ba15ce467a9befec6","8245aba180633254a5dfd76cbdd6f773"]}}' http://localhost:8080/zstack/v1/iam2/projects/virtual-ids/3390a29bd4df30a8a2b69cf2b56be703/roles
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDUuid | String | url |  |  | 2.4.0 |
| roleUuids | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddRolesToIAM2VirtualIDAction action = new AddRolesToIAM2VirtualIDAction();
action.virtualIDUuid = "3390a29bd4df30a8a2b69cf2b56be703";
action.roleUuids = asList("d1140b7d8ca03f7ba15ce467a9befec6","8245aba180633254a5dfd76cbdd6f773");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddRolesToIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
AddRolesToIAM2VirtualIDAction action = AddRolesToIAM2VirtualIDAction()
action.virtualIDUuid = "3390a29bd4df30a8a2b69cf2b56be703"
action.roleUuids = [d1140b7d8ca03f7ba15ce467a9befec6, 8245aba180633254a5dfd76cbdd6f773]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddRolesToIAM2VirtualIDAction.Result res = action.call()
```

---

#### 从成员移除权限(RemoveRolesFromIAM2VirtualID)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/virtual-ids/{virtualIDUuid}/roles?roleUuids={roleUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/virtual-ids/8ac88abb03b336c68d9a5facd7a0cd8d/roles?roleUuids=0c535557981832d2a8a9748c590e7222
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuids | List | url |  |  | 2.4.0 |
| virtualIDUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveRolesFromIAM2VirtualIDAction action = new RemoveRolesFromIAM2VirtualIDAction();
action.roleUuids = asList("0c535557981832d2a8a9748c590e7222");
action.virtualIDUuid = "8ac88abb03b336c68d9a5facd7a0cd8d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveRolesFromIAM2VirtualIDAction.Result res = action.call();
```

 Python SDK

```
RemoveRolesFromIAM2VirtualIDAction action = RemoveRolesFromIAM2VirtualIDAction()
action.roleUuids = [0c535557981832d2a8a9748c590e7222]
action.virtualIDUuid = "8ac88abb03b336c68d9a5facd7a0cd8d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveRolesFromIAM2VirtualIDAction.Result res = action.call()
```

---

#### 为成员组添加权限(AddRolesToIAM2VirtualIDGroup)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/groups/{groupUuid}/roles
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "roleUuids": [
      "15258e508f6e39cabb2b68e5e8b1dc57",
      "e01f1cc2abc934fc88491a3b2bd4d77f"
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
-X POST -d '{"params":{"roleUuids":["15258e508f6e39cabb2b68e5e8b1dc57","e01f1cc2abc934fc88491a3b2bd4d77f"]}}' http://localhost:8080/zstack/v1/iam2/projects/groups/606625f400b739b99a78355a54175dc7/roles
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuids | List | body(包含在**params**结构中) |  |  | 2.4.0 |
| groupUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddRolesToIAM2VirtualIDGroupAction action = new AddRolesToIAM2VirtualIDGroupAction();
action.roleUuids = asList("15258e508f6e39cabb2b68e5e8b1dc57","e01f1cc2abc934fc88491a3b2bd4d77f");
action.groupUuid = "606625f400b739b99a78355a54175dc7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddRolesToIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
AddRolesToIAM2VirtualIDGroupAction action = AddRolesToIAM2VirtualIDGroupAction()
action.roleUuids = [15258e508f6e39cabb2b68e5e8b1dc57, e01f1cc2abc934fc88491a3b2bd4d77f]
action.groupUuid = "606625f400b739b99a78355a54175dc7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddRolesToIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 从成员组移除权限(RemoveRolesFromIAM2VirtualIDGroup)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/groups/{groupUuid}/roles?roleUuids={roleUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/groups/a1a30de59ad4346d9660fa63ea326ee7/roles?roleUuids=46c87204285e38428ddbf4c971df2907&roleUuids=ebf229bcbc13378686158380a5fe5217
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuids | List | url |  |  | 2.4.0 |
| groupUuid | String | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveRolesFromIAM2VirtualIDGroupAction action = new RemoveRolesFromIAM2VirtualIDGroupAction();
action.roleUuids = asList("46c87204285e38428ddbf4c971df2907","ebf229bcbc13378686158380a5fe5217");
action.groupUuid = "a1a30de59ad4346d9660fa63ea326ee7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveRolesFromIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveRolesFromIAM2VirtualIDGroupAction action = RemoveRolesFromIAM2VirtualIDGroupAction()
action.roleUuids = [46c87204285e38428ddbf4c971df2907, ebf229bcbc13378686158380a5fe5217]
action.groupUuid = "a1a30de59ad4346d9660fa63ea326ee7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveRolesFromIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 为成员组添加属性(AddAttributesToIAM2VirtualIDGroup)



##### API请求

 URLs

```
POST zstack/v1/iam2/projects/groups/{uuid}/attributes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "attributes": [
      {
        "name": "some-attribute-name",
        "value": "attribute-value"
      }
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
-X POST -d '{"params":{"attributes":[{"name":"some-attribute-name","value":"attribute-value"}]}}' http://localhost:8080/zstack/v1/iam2/projects/groups/21fb131f6da53f8f8c22fd1ae334a931/attributes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributes | List | body(包含在**params**结构中) | 属性 |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
AddAttributesToIAM2VirtualIDGroupAction action = new AddAttributesToIAM2VirtualIDGroupAction();
action.uuid = "21fb131f6da53f8f8c22fd1ae334a931";
action.attributes = asList([name:some-attribute-name, value:attribute-value]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAttributesToIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
AddAttributesToIAM2VirtualIDGroupAction action = AddAttributesToIAM2VirtualIDGroupAction()
action.uuid = "21fb131f6da53f8f8c22fd1ae334a931"
action.attributes = [[name:some-attribute-name, value:attribute-value]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAttributesToIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 从成员组移除属性(RemoveAttributesFromIAM2VirtualIDGroup)



##### API请求

 URLs

```
DELETE zstack/v1/iam2/projects/groups/{uuid}/attributes?attributeUuids={attributeUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/projects/groups/3244b0ff8134320b81db4f470f6f9dee/attributes?attributeUuids=68a7c71c12c039e38e677ced921248e4&attributeUuids=aa7306e18d8b3f0283457a55637e93de
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| attributeUuids | List | url |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



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
RemoveAttributesFromIAM2VirtualIDGroupAction action = new RemoveAttributesFromIAM2VirtualIDGroupAction();
action.uuid = "3244b0ff8134320b81db4f470f6f9dee";
action.attributeUuids = asList("68a7c71c12c039e38e677ced921248e4","aa7306e18d8b3f0283457a55637e93de");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveAttributesFromIAM2VirtualIDGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveAttributesFromIAM2VirtualIDGroupAction action = RemoveAttributesFromIAM2VirtualIDGroupAction()
action.uuid = "3244b0ff8134320b81db4f470f6f9dee"
action.attributeUuids = [68a7c71c12c039e38e677ced921248e4, aa7306e18d8b3f0283457a55637e93de]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveAttributesFromIAM2VirtualIDGroupAction.Result res = action.call()
```

---

#### 创建角色(CreateRole)



##### API请求

 URLs

```
POST zstack/v1/identities/roles
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "role-1",
    "description": "role for test",
    "statements": [
      "statement for test"
    ],
    "policyUuids": [
      "c950762ed8ab31818b320c704a1a276f"
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
-X POST -d '{"params":{"name":"role-1","description":"role for test","statements":["statement for test"],"policyUuids":["c950762ed8ab31818b320c704a1a276f"]}}' http://localhost:8080/zstack/v1/identities/roles
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| statements (可选) | List | body(包含在**params**结构中) |  |  | 0.6 |
| policyUuids (可选) | List | body(包含在**params**结构中) |  |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7e9df59e6d453b2187a0da3ee94f63c9",
    "name": "role-1",
    "description": "role for test",
    "type": "Customized",
    "state": "Enabled",
    "statements": [
      "statement for test"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | RoleInventory | 详情参考[inventory] | 0.6 |

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
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | RoleType | 详情参考[type] | 0.6 |
| state | RoleState | 详情参考[state] | 0.6 |
| statements | List | 详情参考[statements] | 0.6 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #statements

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| statement | PolicyStatement | 详情参考[statement] | 0.6 |

 #statement

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| principals | List |  | 0.6 |
| actions | List |  | 0.6 |
| resources | List |  | 0.6 |
| effect | StatementEffect | 详情参考[effect] | 0.6 |

 #effect

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateRoleAction action = new CreateRoleAction();
action.name = "role-1";
action.description = "role for test";
action.statements = asList("statement for test");
action.policyUuids = asList("c950762ed8ab31818b320c704a1a276f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateRoleAction.Result res = action.call();
```

 Python SDK

```
CreateRoleAction action = CreateRoleAction()
action.name = "role-1"
action.description = "role for test"
action.statements = [statement for test]
action.policyUuids = [c950762ed8ab31818b320c704a1a276f]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateRoleAction.Result res = action.call()
```

---

#### 删除角色(DeleteRole)



##### API请求

 URLs

```
DELETE zstack/v1/identities/roles/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/identities/roles/6576d603b86634d68d49e9df50443e7f?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | url |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
DeleteRoleAction action = new DeleteRoleAction();
action.uuid = "6576d603b86634d68d49e9df50443e7f";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteRoleAction.Result res = action.call();
```

 Python SDK

```
DeleteRoleAction action = DeleteRoleAction()
action.uuid = "6576d603b86634d68d49e9df50443e7f"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteRoleAction.Result res = action.call()
```

---

#### 查询角色(QueryRole)



##### API请求

 URLs

```
GET zstack/v1/identities/roles
GET zstack/v1/identities/roles/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/identities/roles?q=name=role-1
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/identities/roles/159398ac7d57325daeb62f4abbc5107b
```



可查询字段

运行CLI命令行工具，输入QueryRole并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "bc0df9075c8f30cc9150ea9d2030b470",
      "name": "role-1",
      "description": "role for test",
      "type": "Customized",
      "state": "Enabled",
      "statements": [
        "statement for test"
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
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | RoleType | 详情参考[type] | 0.6 |
| state | RoleState | 详情参考[state] | 0.6 |
| statements | List | 详情参考[statements] | 0.6 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #statements

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| statement | PolicyStatement | 详情参考[statement] | 0.6 |

 #statement

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| principals | List |  | 0.6 |
| actions | List |  | 0.6 |
| resources | List |  | 0.6 |
| effect | StatementEffect | 详情参考[effect] | 0.6 |

 #effect

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryRoleAction action = new QueryRoleAction();
action.conditions = asList("name=role-1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryRoleAction.Result res = action.call();
```

 Python SDK

```
QueryRoleAction action = QueryRoleAction()
action.conditions = ["name=role-1"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryRoleAction.Result res = action.call()
```

---

#### 更新角色(UpdateRole)



##### API请求

 URLs

```
PUT zstack/v1/identities/roles/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateRole": {
    "name": "role-1",
    "description": "role for test",
    "statements": [
      {}
    ],
    "policyUuids": [
      "da93f6bf55823973a1bea123d7f5427f"
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
-X PUT -d '{"updateRole":{"name":"role-1","description":"role for test","statements":[{}],"policyUuids":["da93f6bf55823973a1bea123d7f5427f"]}}' http://localhost:8080/zstack/v1/identities/roles/a3489a74f7e23a5682b808b59f4d25c4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name | String | body(包含在**updateRole**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateRole**结构中) | 资源的详细描述 |  | 0.6 |
| statements (可选) | List | body(包含在**updateRole**结构中) | 角色权限描述 |  | 0.6 |
| policyUuids (可选) | List | body(包含在**updateRole**结构中) | 角色权限UUID |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "14c577188a0c3ee8871e27087a287bc2",
    "name": "role-1",
    "description": "role for test",
    "type": "Customized",
    "state": "Enabled",
    "statements": [
      "statement for test"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | RoleInventory | 详情参考[inventory] | 0.6 |

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
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | RoleType | 详情参考[type] | 0.6 |
| statements | List | 详情参考[statements] | 0.6 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #statements

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| statement | PolicyStatement | 详情参考[statement] | 0.6 |

 #statement

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| principals | List |  | 0.6 |
| actions | List |  | 0.6 |
| resources | List |  | 0.6 |
| effect | StatementEffect | 详情参考[effect] | 0.6 |

 #effect

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateRoleAction action = new UpdateRoleAction();
action.uuid = "a3489a74f7e23a5682b808b59f4d25c4";
action.name = "role-1";
action.description = "role for test";
action.statements = asList([:]);
action.policyUuids = asList("da93f6bf55823973a1bea123d7f5427f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateRoleAction.Result res = action.call();
```

 Python SDK

```
UpdateRoleAction action = UpdateRoleAction()
action.uuid = "a3489a74f7e23a5682b808b59f4d25c4"
action.name = "role-1"
action.description = "role for test"
action.statements = [[:]]
action.policyUuids = [da93f6bf55823973a1bea123d7f5427f]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateRoleAction.Result res = action.call()
```

---

#### 更改角色状态(ChangeRoleState)



##### API请求

 URLs

```
PUT zstack/v1/identities/roles/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeRoleState": {
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
-X PUT -d '{"changeRoleState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/identities/roles/bd69220686b1390e9ae7c473c73745fa/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | RoleStateEvent | body(包含在**changeRoleState**结构中) |  | enable disable | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "69f93c9ed74235e18019dafcf3f1fb65",
    "name": "role-1",
    "description": "role for test",
    "type": "Customized",
    "state": "Enabled",
    "statements": [
      "statement for test"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | RoleInventory | 详情参考[inventory] | 0.6 |

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
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| type | RoleType | 详情参考[type] | 0.6 |
| state | RoleState | 详情参考[state] | 0.6 |
| statements | List | 详情参考[statements] | 0.6 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |

 #statements

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| statement | PolicyStatement | 详情参考[statement] | 0.6 |

 #statement

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| principals | List |  | 0.6 |
| actions | List |  | 0.6 |
| resources | List |  | 0.6 |
| effect | StatementEffect | 详情参考[effect] | 0.6 |

 #effect

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int |  | 0.6 |



##### SDK示例

 Java SDK

```
ChangeRoleStateAction action = new ChangeRoleStateAction();
action.uuid = "bd69220686b1390e9ae7c473c73745fa";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeRoleStateAction.Result res = action.call();
```

 Python SDK

```
ChangeRoleStateAction action = ChangeRoleStateAction()
action.uuid = "bd69220686b1390e9ae7c473c73745fa"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeRoleStateAction.Result res = action.call()
```

---

#### 加载权限到角色(AttachPolicyToRole)



##### API请求

 URLs

```
POST zstack/v1/identities/policies/{policyUuid}/roles/{roleUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/identities/policies/b6d28a1479ba35ff992c468c6422086b/roles/ac53fe888c20385691c8c89335041b00
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuid | String | url |  |  | 0.6 |
| policyUuid | String | url | 权限策略UUID |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
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
AttachPolicyToRoleAction action = new AttachPolicyToRoleAction();
action.roleUuid = "ac53fe888c20385691c8c89335041b00";
action.policyUuid = "b6d28a1479ba35ff992c468c6422086b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachPolicyToRoleAction.Result res = action.call();
```

 Python SDK

```
AttachPolicyToRoleAction action = AttachPolicyToRoleAction()
action.roleUuid = "ac53fe888c20385691c8c89335041b00"
action.policyUuid = "b6d28a1479ba35ff992c468c6422086b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachPolicyToRoleAction.Result res = action.call()
```

---

#### 从角色中移除权限(DetachPolicyFromRole)



##### API请求

 URLs

```
DELETE zstack/v1/identities/policies/{policyUuid}/roles/{roleUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/identities/policies/1690962271f435cda25a5db08a21694c/roles/1d06e80ea3b23da9a6c5cc9b434ce7ce?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuid | String | url |  |  | 0.6 |
| policyUuid | String | url | 权限策略UUID |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
DetachPolicyFromRoleAction action = new DetachPolicyFromRoleAction();
action.roleUuid = "1d06e80ea3b23da9a6c5cc9b434ce7ce";
action.policyUuid = "1690962271f435cda25a5db08a21694c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachPolicyFromRoleAction.Result res = action.call();
```

 Python SDK

```
DetachPolicyFromRoleAction action = DetachPolicyFromRoleAction()
action.roleUuid = "1d06e80ea3b23da9a6c5cc9b434ce7ce"
action.policyUuid = "1690962271f435cda25a5db08a21694c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachPolicyFromRoleAction.Result res = action.call()
```

---

#### 添加权限属性到角色(AddPolicyStatementsToRole)



##### API请求

 URLs

```
POST zstack/v1/identities/roles/{uuid}/policy-statements
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "statements": [
      {
        "name": "state-1",
        "effect": "Allow",
        "actions": [
          "accpet"
        ]
      }
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
-X POST -d '{"params":{"statements":[{"name":"state-1","effect":"Allow","actions":["accpet"]}]}}' http://localhost:8080/zstack/v1/identities/roles/4723bb74195e3ce28de45bbbd9173173/policy-statements
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| statements | List | body(包含在**params**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
AddPolicyStatementsToRoleAction action = new AddPolicyStatementsToRoleAction();
action.uuid = "4723bb74195e3ce28de45bbbd9173173";
action.statements = asList([name:state-1, effect:Allow, actions:[accpet]]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddPolicyStatementsToRoleAction.Result res = action.call();
```

 Python SDK

```
AddPolicyStatementsToRoleAction action = AddPolicyStatementsToRoleAction()
action.uuid = "4723bb74195e3ce28de45bbbd9173173"
action.statements = [[name:state-1, effect:Allow, actions:[accpet]]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddPolicyStatementsToRoleAction.Result res = action.call()
```

---

#### 从角色移除权限属性(RemovePolicyStatementsFromRole)



##### API请求

 URLs

```
DELETE zstack/v1/identities/roles/{uuid}/policy-statements?policyStatementUuids={policyStatementUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/identities/roles/fd6ff08afb3e3a4db5f13816b0110caa/policy-statements?policyStatementUuids=d0e7ec31946437d3b17ec2e20e48a1ac
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| policyStatementUuids | List | url |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
RemovePolicyStatementsFromRoleAction action = new RemovePolicyStatementsFromRoleAction();
action.uuid = "fd6ff08afb3e3a4db5f13816b0110caa";
action.policyStatementUuids = asList("d0e7ec31946437d3b17ec2e20e48a1ac");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemovePolicyStatementsFromRoleAction.Result res = action.call();
```

 Python SDK

```
RemovePolicyStatementsFromRoleAction action = RemovePolicyStatementsFromRoleAction()
action.uuid = "fd6ff08afb3e3a4db5f13816b0110caa"
action.policyStatementUuids = [d0e7ec31946437d3b17ec2e20e48a1ac]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemovePolicyStatementsFromRoleAction.Result res = action.call()
```

---

#### 加载角色到账户(AttachRoleToAccount)



##### API请求

 URLs

```
POST zstack/v1/identities/accounts/{accountUuid}/roles/{roleUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/identities/accounts/053a25bbfe2c34a889d75601e64d4a51/roles/b7a901c45db33f12993c9c7aad874ff4
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuid | String | url |  |  | 0.6 |
| accountUuid | String | url | 账户UUID |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
AttachRoleToAccountAction action = new AttachRoleToAccountAction();
action.roleUuid = "b7a901c45db33f12993c9c7aad874ff4";
action.accountUuid = "053a25bbfe2c34a889d75601e64d4a51";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachRoleToAccountAction.Result res = action.call();
```

 Python SDK

```
AttachRoleToAccountAction action = AttachRoleToAccountAction()
action.roleUuid = "b7a901c45db33f12993c9c7aad874ff4"
action.accountUuid = "053a25bbfe2c34a889d75601e64d4a51"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachRoleToAccountAction.Result res = action.call()
```

---

#### 从账户卸载角色(DetachRoleFromAccount)



##### API请求

 URLs

```
DELETE zstack/v1/identities/accounts/{accountUuid}/roles/{roleUuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/identities/accounts/ac3ea9154a603cbcabbb1664dbcf66ef/roles/ca3f332b7ffd347fa30ba01be1176b96?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| roleUuid | String | url |  |  | 0.6 |
| accountUuid | String | url | 账户UUID |  | 0.6 |
| deleteMode (可选) | String | url |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
DetachRoleFromAccountAction action = new DetachRoleFromAccountAction();
action.roleUuid = "ca3f332b7ffd347fa30ba01be1176b96";
action.accountUuid = "ac3ea9154a603cbcabbb1664dbcf66ef";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachRoleFromAccountAction.Result res = action.call();
```

 Python SDK

```
DetachRoleFromAccountAction action = DetachRoleFromAccountAction()
action.roleUuid = "ca3f332b7ffd347fa30ba01be1176b96"
action.accountUuid = "ac3ea9154a603cbcabbb1664dbcf66ef"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachRoleFromAccountAction.Result res = action.call()
```

---

#### 获取IAM2用户API权限(GetIAM2VirtualIDAPIPermission)



##### API请求

 URLs

```
GET zstack/v1/iam2/virtual-ids/api-permissions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/virtual-ids/api-permissions?apisToCheck={"apiName":"org.zstack.header.vm.APICreateVmInstanceMsg","body":{"name":"vm"}}
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| apisToCheck (可选) | List | query |  |  | 2.4.0 |
| systemTags (可选) | List | query |  |  | 2.4.0 |
| userTags (可选) | List | query |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "permissions": {
    "org.zstack.header.vm.APICreateVmInstanceMsg": {
      "allow": true
    }
  },
  "noPermission": false
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| noPermission | boolean |  | 2.4.0 |
| success | boolean |  | 2.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4.0 |
| permissions | Map | 详情参考[permissions] | 2.4.0 |
| error | ErrorCode | 详情参考[error] | 2.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #permissions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| allow | boolean | 是否有权限 | 2.4.0 |

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
GetIAM2VirtualIDAPIPermissionAction action = new GetIAM2VirtualIDAPIPermissionAction();
action.apisToCheck = asList("{"apiName":"org.zstack.header.vm.APICreateVmInstanceMsg","body":{"name":"vm"}}");
action.onlyCheckParams = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetIAM2VirtualIDAPIPermissionAction.Result res = action.call();
```

 Python SDK

```
GetIAM2VirtualIDAPIPermissionAction action = GetIAM2VirtualIDAPIPermissionAction()
action.apisToCheck = [{"apiName":"org.zstack.header.vm.APICreateVmInstanceMsg","body":{"name":"vm"}}]
action.onlyCheckParams = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetIAM2VirtualIDAPIPermissionAction.Result res = action.call()
```

---

#### 切换平台角色(LoginIAM2Platform)



##### API请求

 URLs

```
PUT zstack/v1/iam2/platform/login
```

 Body

```
{
  "loginIAM2Platform": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"loginIAM2Platform":{}}' http://localhost:8080/zstack/v1/iam2/platform/login
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clientInfo (可选) | Map | body(包含在**loginIAM2Platform**结构中) |  |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 系统标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "243138fdb96e37d785ff4bfe01484b75",
    "noSessionEvaluation": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | SessionInventory | 详情参考[inventory] | 4.0.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| userUuid | String | 用户UUID | 4.0.0 |
| expiredDate | Timestamp |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
LoginIAM2PlatformAction action = new LoginIAM2PlatformAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
LoginIAM2PlatformAction.Result res = action.call();
```

 Python SDK

```
LoginIAM2PlatformAction action = LoginIAM2PlatformAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
LoginIAM2PlatformAction.Result res = action.call()
```

---

### 工单管理相关接口

---

#### 创建工单(CreateTicket)



##### API请求

 URLs

```
POST zstack/v1/tickets
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "this is a new ticket",
    "requests": [
      {
        "requestName": "create vm",
        "apiName": "org.zstack.header.vm.APICreateVmInstanceMsg",
        "executeTimes": 1.0,
        "apiBody": {
          "name": "vm name",
          "instanceOfferingUuid": "46466abc6c8931fdaab7a8df43e4f175",
          "imageUuid": "43e997234af63863b28a5e9987e1d122",
          "l3NetworkUuids": [
            "8b4ddd66c7ba30598cdc7ab835e04f96"
          ],
          "strategy": "InstantStart",
          "timeout": -1.0,
          "headers": {},
          "id": "a9a029dba17842939f0227420d197121",
          "createdTime": 1.545993580705E12
        }
      }
    ],
    "accountSystemType": "iam2",
    "accountSystemContext": {
      "projectUuid": "28c9a199e3e842d28c9805eb89be56cb",
      "virtualIDUuid": "1c255722caf34cb888b57d11a744248c"
    }
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
-X POST -d '{"params":{"name":"this is a new ticket","requests":[{"requestName":"create vm","apiName":"org.zstack.header.vm.APICreateVmInstanceMsg","executeTimes":1.0,"apiBody":{"name":"vm name","instanceOfferingUuid":"46466abc6c8931fdaab7a8df43e4f175","imageUuid":"43e997234af63863b28a5e9987e1d122","l3NetworkUuids":["8b4ddd66c7ba30598cdc7ab835e04f96"],"strategy":"InstantStart","timeout":-1.0,"headers":{},"id":"590ee3ceb92248e08967bf413de91e26","createdTime":1.545993580708E12}}],"accountSystemType":"iam2","accountSystemContext":{"projectUuid":"a497d61cc2d848f2a1101ebd7bc7362f","virtualIDUuid":"c0df7a66330f4cc3b83d1c3695aac291"}}}' http://localhost:8080/zstack/v1/tickets
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.0 |
| requests | List | body(包含在**params**结构中) |  |  | 3.0.0 |
| flowCollectionUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| accountSystemType | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| accountSystemContext | Object | body(包含在**params**结构中) |  |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
CreateTicketAction action = new CreateTicketAction();
action.name = "this is a new ticket";
action.requests = asList([requestName:create vm, apiName:org.zstack.header.vm.APICreateVmInstanceMsg, executeTimes:1.0, apiBody:[name:vm name, instanceOfferingUuid:46466abc6c8931fdaab7a8df43e4f175, imageUuid:43e997234af63863b28a5e9987e1d122, l3NetworkUuids:[8b4ddd66c7ba30598cdc7ab835e04f96], strategy:InstantStart, timeout:-1.0, headers:[:], id:0132535043b04abf9f56eb9a1fb4c87b, createdTime:1.545993580749E12]]);
action.accountSystemType = "iam2";
action.accountSystemContext = [projectUuid:01ce66b048c5477195b5d6e43507239c, virtualIDUuid:cd120a6130884e4ca80a01b10e59de86];
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateTicketAction.Result res = action.call();
```

 Python SDK

```
CreateTicketAction action = CreateTicketAction()
action.name = "this is a new ticket"
action.requests = [[requestName:create vm, apiName:org.zstack.header.vm.APICreateVmInstanceMsg, executeTimes:1.0, apiBody:[name:vm name, instanceOfferingUuid:46466abc6c8931fdaab7a8df43e4f175, imageUuid:43e997234af63863b28a5e9987e1d122, l3NetworkUuids:[8b4ddd66c7ba30598cdc7ab835e04f96], strategy:InstantStart, timeout:-1.0, headers:[:], id:379419159124407c903a2b3f13ca6f96, createdTime:1.54599358075E12]]]
action.accountSystemType = "iam2"
action.accountSystemContext = [projectUuid:629c222d0b834ec3aa3af9f5a0e5d986, virtualIDUuid:bf3198f5680341ac88f54d59e94ad7ab]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateTicketAction.Result res = action.call()
```

---

#### 更新工单请求(UpdateTicketRequest)



##### API请求

 URLs

```
PUT zstack/v1/tickets/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateTicketRequest": {
    "requests": [
      {
        "requestName": "create vm",
        "apiName": "org.zstack.header.vm.APICreateVmInstanceMsg",
        "executeTimes": 1.0,
        "apiBody": {
          "name": "vm name",
          "instanceOfferingUuid": "dba186c0f4e73c8b853e36b37a028761",
          "imageUuid": "a3688b0adaaf3745b9919d6bcbf374b1",
          "l3NetworkUuids": [
            "cc68b29962063148a2b5434d434f1f90"
          ],
          "strategy": "InstantStart",
          "timeout": -1.0,
          "headers": {},
          "id": "779c0969ca40422a9f371710c245e271",
          "createdTime": 1.564025557712E12
        }
      }
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
-X PUT -d '{"updateTicketRequest":{"requests":[{"requestName":"create vm","apiName":"org.zstack.header.vm.APICreateVmInstanceMsg","executeTimes":1.0,"apiBody":{"name":"vm name","instanceOfferingUuid":"dba186c0f4e73c8b853e36b37a028761","imageUuid":"a3688b0adaaf3745b9919d6bcbf374b1","l3NetworkUuids":["cc68b29962063148a2b5434d434f1f90"],"strategy":"InstantStart","timeout":-1.0,"headers":{},"id":"151dc242428a4b39a81a9b31712e7f09","createdTime":1.564025557718E12}}]}}' http://localhost:8080/zstack/v1/tickets/3d7955e800593abcb49e89c372d6a5ce/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| requests | List | body(包含在**updateTicketRequest**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "14b4cced263d4e0b8511292980c7984f",
    "name": "ticket",
    "description": "ticket description",
    "status": "IntermediateApproved",
    "request": [
      {
        "requestName": "create vm",
        "apiName": "org.zstack.header.vm.APICreateVmInstanceMsg",
        "executeTimes": 1.0,
        "apiBody": {
          "name": "vm name",
          "instanceOfferingUuid": "c14ffce45a924c7c89b29b472b0cc6a5",
          "imageUuid": "21bc6910199d44b3bbd0e336bb88f424",
          "l3NetworkUuids": [
            "ff4916c36d9a4c1683c20e5a22ceceb7"
          ],
          "strategy": "InstantStart",
          "timeout": -1.0,
          "headers": {},
          "id": "bde85ab4eb754339bc6bb42623097c56",
          "createdTime": 1.564025557751E12
        }
      }
    ],
    "accountSystemType": "iam2",
    "ticketTypeUuid": "3b933e9aaf2d49b9a3dcf0c92867790f",
    "accountSystemContext": {
      "projectUuid": "2294a0edf109447bafa802bb73b29cd3",
      "virtualIDUuid": "178c834b9bc84bac9e77460b42eb3494"
    },
    "flowCollectionUuid": "9fbbac8054d54f0490438eaaba3e1cf8"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| accountSystemType | String |  | 3.0.0 |
| ticketTypeUuid | String | 工单类型UUID | 3.6.0 |
| accountSystemContext | Object |  | 3.0.0 |
| currentFlowUuid | String |  | 3.0.0 |
| flowCollectionUuid | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| status | TicketStatus | 详情参考[status] | 3.0.0 |
| request | List | 详情参考[request] | 3.0.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.0.0 |
| ordinal | int |  | 3.0.0 |

 #request

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| requestName | String |  | 3.0.0 |
| apiName | String |  | 3.0.0 |
| executeTimes | int |  | 3.0.0 |
| apiBody | Object |  | 3.0.0 |



##### SDK示例

 Java SDK

```
UpdateTicketRequestAction action = new UpdateTicketRequestAction();
action.uuid = "3d7955e800593abcb49e89c372d6a5ce";
action.requests = asList([requestName:create vm, apiName:org.zstack.header.vm.APICreateVmInstanceMsg, executeTimes:1.0, apiBody:[name:vm name, instanceOfferingUuid:dba186c0f4e73c8b853e36b37a028761, imageUuid:a3688b0adaaf3745b9919d6bcbf374b1, l3NetworkUuids:[cc68b29962063148a2b5434d434f1f90], strategy:InstantStart, timeout:-1.0, headers:[:], id:ac92123f5b9144159389b4d3d5e95fcf, createdTime:1.564025557873E12]]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateTicketRequestAction.Result res = action.call();
```

 Python SDK

```
UpdateTicketRequestAction action = UpdateTicketRequestAction()
action.uuid = "3d7955e800593abcb49e89c372d6a5ce"
action.requests = [[requestName:create vm, apiName:org.zstack.header.vm.APICreateVmInstanceMsg, executeTimes:1.0, apiBody:[name:vm name, instanceOfferingUuid:dba186c0f4e73c8b853e36b37a028761, imageUuid:a3688b0adaaf3745b9919d6bcbf374b1, l3NetworkUuids:[cc68b29962063148a2b5434d434f1f90], strategy:InstantStart, timeout:-1.0, headers:[:], id:2be0f869588b4051907cd550a9913683, createdTime:1.564025557879E12]]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateTicketRequestAction.Result res = action.call()
```

---

#### 修改工单状态(ChangeTicketStatus)



##### API请求

 URLs

```
PUT zstack/v1/tickets/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeTicketStatus": {
    "statusEvent": "approve",
    "comment": "this is the comment for change status operation"
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
-X PUT -d '{"changeTicketStatus":{"statusEvent":"approve","comment":"this is the comment for change status operation"}}' http://localhost:8080/zstack/v1/tickets/e9377476db3f375bbff78dc3b9204f00/actions
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| statusEvent | TicketStatusEvent | body(包含在**changeTicketStatus**结构中) |  | open approve cancel reject reopen | 3.0.0 |
| comment (可选) | String | body(包含在**changeTicketStatus**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f4483251fdfd48cdae0dbb966a2652c9",
    "name": "ticket",
    "description": "ticket description",
    "status": "IntermediateApproved",
    "request": [
      {
        "requestName": "create vm",
        "apiName": "org.zstack.header.vm.APICreateVmInstanceMsg",
        "executeTimes": 1.0,
        "apiBody": {
          "name": "vm name",
          "instanceOfferingUuid": "e539401d4cf74a6c93b173b9fa01d4e6",
          "imageUuid": "16e0a61a2ca145eaaae6c7e9ef72ae31",
          "l3NetworkUuids": [
            "0fbf9d6545e6480790ee9b2f7da59f65"
          ],
          "strategy": "InstantStart",
          "timeout": -1.0,
          "headers": {},
          "id": "3f1b84f2f3ca453caf3086625d57eff5",
          "createdTime": 1.56402555717E12
        }
      }
    ],
    "accountSystemType": "iam2",
    "ticketTypeUuid": "3b933e9aaf2d49b9a3dcf0c92867790f",
    "accountSystemContext": {
      "projectUuid": "21423d5537cc4891b33745b3ad9045f8",
      "virtualIDUuid": "1470a380fe454b4298ba178245aa499c"
    },
    "flowCollectionUuid": "6aa051e47de74658885bca987b9c4a35"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| accountSystemType | String |  | 3.0.0 |
| ticketTypeUuid | String | 工单类型UUID | 3.6.0 |
| accountSystemContext | Object |  | 3.0.0 |
| currentFlowUuid | String |  | 3.0.0 |
| flowCollectionUuid | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| status | TicketStatus | 详情参考[status] | 3.0.0 |
| request | List | 详情参考[request] | 3.0.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.0.0 |
| ordinal | int |  | 3.0.0 |

 #request

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| requestName | String |  | 3.0.0 |
| apiName | String |  | 3.0.0 |
| executeTimes | int |  | 3.0.0 |
| apiBody | Object |  | 3.0.0 |



##### SDK示例

 Java SDK

```
ChangeTicketStatusAction action = new ChangeTicketStatusAction();
action.uuid = "e9377476db3f375bbff78dc3b9204f00";
action.statusEvent = "approve";
action.comment = "this is the comment for change status operation";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeTicketStatusAction.Result res = action.call();
```

 Python SDK

```
ChangeTicketStatusAction action = ChangeTicketStatusAction()
action.uuid = "e9377476db3f375bbff78dc3b9204f00"
action.statusEvent = "approve"
action.comment = "this is the comment for change status operation"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeTicketStatusAction.Result res = action.call()
```

---

#### 查询工单(QueryTicket)



##### API请求

 URLs

```
GET zstack/v1/tickets
```


```
GET zstack/v1/tickets/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets?q=uuid=b17f50a117f0320588b55c24947a5fbf
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/dc7a48ed388b3a2da9939c4e84151d05
```



可查询字段

运行CLI命令行工具，输入QueryTicket并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b891de634d914b93957e2824c6297295",
      "name": "ticket",
      "description": "ticket description",
      "status": "IntermediateApproved",
      "request": [
        {
          "requestName": "create vm",
          "apiName": "org.zstack.header.vm.APICreateVmInstanceMsg",
          "executeTimes": 1.0,
          "apiBody": {
            "name": "vm name",
            "instanceOfferingUuid": "8166c9b945954375b7bf649fd734b63d",
            "imageUuid": "da8c8c3174704a2eac160f0c9c373a3c",
            "l3NetworkUuids": [
              "0858e5fd17524673bbbcb8f275d45c86"
            ],
            "strategy": "InstantStart",
            "timeout": -1.0,
            "headers": {},
            "id": "8f9fbb135562492e8f713b913334b7fb",
            "createdTime": 1.564025557548E12
          }
        }
      ],
      "accountSystemType": "iam2",
      "ticketTypeUuid": "3b933e9aaf2d49b9a3dcf0c92867790f",
      "accountSystemContext": {
        "projectUuid": "92594abfcbd34543b38a793b004f97ba",
        "virtualIDUuid": "fc9c42f94a194a4e9718fa764dcc5599"
      },
      "flowCollectionUuid": "2719925626f3464787071d4ba22f9cc7"
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
| description | String | 资源的详细描述 | 3.0.0 |
| accountSystemType | String |  | 3.0.0 |
| ticketTypeUuid | String | 工单类型UUID | 3.6.0 |
| accountSystemContext | Object |  | 3.0.0 |
| currentFlowUuid | String |  | 3.0.0 |
| flowCollectionUuid | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| status | TicketStatus | 详情参考[status] | 3.0.0 |
| request | List | 详情参考[request] | 3.0.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.0.0 |
| ordinal | int |  | 3.0.0 |

 #request

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| requestName | String |  | 3.0.0 |
| apiName | String |  | 3.0.0 |
| executeTimes | int |  | 3.0.0 |
| apiBody | Object |  | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryTicketAction action = new QueryTicketAction();
action.conditions = asList("uuid=e397806ebbe0376b96d7c857e06b9714");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTicketAction.Result res = action.call();
```

 Python SDK

```
QueryTicketAction action = QueryTicketAction()
action.conditions = ["uuid=0198e730d1dc334da8aab9b3a219ba35"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTicketAction.Result res = action.call()
```

---

#### 查询归档的工单(QueryArchiveTicket)



##### API请求

 URLs

```
GET zstack/v1/tickets/archives
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/archives
```



可查询字段

运行CLI命令行工具，输入QueryArchiveTicket并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QueryArchiveTicketAction action = new QueryArchiveTicketAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryArchiveTicketAction.Result res = action.call();
```

 Python SDK

```
QueryArchiveTicketAction action = QueryArchiveTicketAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryArchiveTicketAction.Result res = action.call()
```

---

#### 查询工单历史(QueryTicketHistory)



##### API请求

 URLs

```
GET zstack/v1/tickets/histories
```


```
GET zstack/v1/tickets/histories/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/histories?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/histories/2cbcaa4913f73d968a9b075a1607bbee
```



可查询字段

运行CLI命令行工具，输入QueryTicketHistory并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "fromStatus": "Pending",
      "toStatus": "IntermediateApproved",
      "comment": "approve ticket",
      "operationContextType": "StatusChanged",
      "operationContext": {
        "requestResults": [
          {
            "requestName": "org.zstack.header.vm.APICreateVmInstanceMsg",
            "successTimes": 1.0,
            "failureTimes": 0.0,
            "errors": []
          }
        ]
      },
      "operatorUuid": "f2bf860263bc3856b0c50d712b0d4b7b",
      "createDate": "Dec 28, 2018 6:38:12 PM",
      "lastOpDate": "Dec 28, 2018 6:38:12 PM"
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
| ticketUuid | String |  | 3.0.0 |
| comment | String |  | 3.0.0 |
| operationContextType | String |  | 3.0.0 |
| operationContext | LinkedHashMap |  | 3.0.0 |
| operatorType | String |  | 3.0.0 |
| operatorUuid | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| fromStatus | TicketStatus | 详情参考[fromStatus] | 3.0.0 |
| toStatus | TicketStatus | 详情参考[toStatus] | 3.0.0 |

 #fromStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.0.0 |
| ordinal | int |  | 3.0.0 |

 #toStatus

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.0.0 |
| ordinal | int |  | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryTicketHistoryAction action = new QueryTicketHistoryAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTicketHistoryAction.Result res = action.call();
```

 Python SDK

```
QueryTicketHistoryAction action = QueryTicketHistoryAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTicketHistoryAction.Result res = action.call()
```

---

#### 创建工单流程(CreateIAM2TickFlowCollection)



##### API请求

 URLs

```
POST zstack/v1/tickets/flow-collections
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "flows": [
      {
        "name": "flow1",
        "approverUuid": "1c4db59a73b63f968889764bcb2bae9d"
      },
      {
        "name": "flow2",
        "approverUuid": "eb9dc5050030323281c255864ca6c633"
      }
    ],
    "projectUuid": "bdd993eb57c13134967b15ed38ba33c4",
    "name": "flow collection",
    "description": "flow collection description",
    "isDefault": false
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
-X POST -d '{"params":{"flows":[{"name":"flow1","approverUuid":"1c4db59a73b63f968889764bcb2bae9d"},{"name":"flow2","approverUuid":"eb9dc5050030323281c255864ca6c633"}],"projectUuid":"bdd993eb57c13134967b15ed38ba33c4","name":"flow collection","description":"flow collection description","isDefault":false}}' http://localhost:8080/zstack/v1/tickets/flow-collections
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| flows (可选) | List | body(包含在**params**结构中) |  |  | 3.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| description（可选） | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.0 |
| isDefault (可选) | Boolean | body(包含在**params**结构中) |  |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |
| projectUuid | String | body(包含在**params**结构中) |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "state": "Enabled",
    "status": "Valid",
    "lastOpDate": "Dec 28, 2018 6:50:31 PM",
    "isDefault": true,
    "flows": [
      {
        "name": "flow name",
        "description": "flow description",
        "flowContextType": "iam2",
        "createDate": "Dec 28, 2018 6:50:31 PM",
        "lastOpDate": "Dec 28, 2018 6:50:31 PM",
        "collectionUuid": "1dffd5fae83f3f55be42c56a0c2b266b"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketFlowCollectionInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| isDefault | Boolean |  | 3.0.0 |
| flows | List | 详情参考[flows] | 3.0.0 |

 #flows

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
CreateIAM2TickFlowCollectionAction action = new CreateIAM2TickFlowCollectionAction();
action.flows = asList([name:flow1, approverUuid:1c4db59a73b63f968889764bcb2bae9d],[name:flow2, approverUuid:eb9dc5050030323281c255864ca6c633]);
action.projectUuid = "bdd993eb57c13134967b15ed38ba33c4";
action.name = "flow collection";
action.description = "flow collection description";
action.isDefault = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2TickFlowCollectionAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2TickFlowCollectionAction action = CreateIAM2TickFlowCollectionAction()
action.flows = [[name:flow1, approverUuid:1c4db59a73b63f968889764bcb2bae9d], [name:flow2, approverUuid:eb9dc5050030323281c255864ca6c633]]
action.projectUuid = "bdd993eb57c13134967b15ed38ba33c4"
action.name = "flow collection"
action.description = "flow collection description"
action.isDefault = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2TickFlowCollectionAction.Result res = action.call()
```

---

#### 删除工单流程(DeleteTicketFlowCollection)



##### API请求

 URLs

```
DELETE zstack/v1/tickets/flow-collections/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/tickets/flow-collections/657b0e4c4b21394db32f1c7c1066efa9?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| deleteMode (可选) | String | body |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
DeleteTicketFlowCollectionAction action = new DeleteTicketFlowCollectionAction();
action.uuid = "657b0e4c4b21394db32f1c7c1066efa9";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteTicketFlowCollectionAction.Result res = action.call();
```

 Python SDK

```
DeleteTicketFlowCollectionAction action = DeleteTicketFlowCollectionAction()
action.uuid = "657b0e4c4b21394db32f1c7c1066efa9"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteTicketFlowCollectionAction.Result res = action.call()
```

---

#### 修改工单流程(UpdateIAM2TicketFlowCollection)



##### API请求

 URLs

```
PUT zstack/v1/tickets/flow-collections/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIAM2TicketFlowCollection": {
    "flows": [
      {
        "name": "flow1",
        "approverUuid": "8603f9c875a23cf1815b85e16f0d972e"
      },
      {
        "name": "flow2",
        "approverUuid": "9563991259ad3820bf48e5d8b86b5da4"
      }
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
-X PUT -d '{"updateIAM2TicketFlowCollection":{"flows":[{"name":"flow1","approverUuid":"8603f9c875a23cf1815b85e16f0d972e"},{"name":"flow2","approverUuid":"9563991259ad3820bf48e5d8b86b5da4"}]}}' http://localhost:8080/zstack/v1/tickets/flow-collections/610687f0ec5c3ca286a27fa13888df2e/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| flows (可选) | List | body(包含在**updateIAM2TicketFlowCollection**结构中) |  |  | 3.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| name (可选) | String | body(包含在**updateIAM2TicketFlowCollection**结构中) | 资源名称 |  | 3.0.0 |
| description (可选) | String | body(包含在**updateIAM2TicketFlowCollection**结构中) | 资源的详细描述 |  | 3.0.0 |
| isDefault (可选) | Boolean | body(包含在**updateIAM2TicketFlowCollection**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7db7660049ba42fc95de91ac238145a5",
    "name": "collection name",
    "state": "Enabled",
    "status": "Valid",
    "isDefault": false,
    "flows": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketFlowCollectionInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| isDefault | Boolean |  | 3.0.0 |
| flows | List | 详情参考[flows] | 3.0.0 |

 #flows

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
UpdateIAM2TicketFlowCollectionAction action = new UpdateIAM2TicketFlowCollectionAction();
action.flows = asList([name:flow1, approverUuid:8603f9c875a23cf1815b85e16f0d972e],[name:flow2, approverUuid:9563991259ad3820bf48e5d8b86b5da4]);
action.uuid = "610687f0ec5c3ca286a27fa13888df2e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIAM2TicketFlowCollectionAction.Result res = action.call();
```

 Python SDK

```
UpdateIAM2TicketFlowCollectionAction action = UpdateIAM2TicketFlowCollectionAction()
action.flows = [[name:flow1, approverUuid:8603f9c875a23cf1815b85e16f0d972e], [name:flow2, approverUuid:9563991259ad3820bf48e5d8b86b5da4]]
action.uuid = "610687f0ec5c3ca286a27fa13888df2e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIAM2TicketFlowCollectionAction.Result res = action.call()
```

---

#### 查询工单流程(QueryTicketFlowCollection)



##### API请求

 URLs

```
GET zstack/v1/tickets/flow-collections
```


```
GET zstack/v1/tickets/flow-collections/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/flow-collections
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/flow-collections/19575ca3d82838a39763f3081e3f5055
```



可查询字段

运行CLI命令行工具，输入QueryTicketFlowCollection并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "aafa04d2d3b447bb866a62457aa24fdd",
      "name": "collection name",
      "state": "Enabled",
      "status": "Valid",
      "isDefault": false,
      "flows": []
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
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| isDefault | Boolean |  | 3.0.0 |
| flows | List | 详情参考[flows] | 3.0.0 |

 #flows

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryTicketFlowCollectionAction action = new QueryTicketFlowCollectionAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTicketFlowCollectionAction.Result res = action.call();
```

 Python SDK

```
QueryTicketFlowCollectionAction action = QueryTicketFlowCollectionAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTicketFlowCollectionAction.Result res = action.call()
```

---

#### 修改工单流程状态(ChangeTicketFlowCollectionState)



##### API请求

 URLs

```
PUT zstack/v1/tickets/flow-collections/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeTicketFlowCollectionState": {
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
-X PUT -d '{"changeTicketFlowCollectionState":{"stateEvent":"disable"}}' http://localhost:8080/zstack/v1/tickets/flow-collections/b2a1edfb81d73aea989b25727b7a1417/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| stateEvent | String | body(包含在**changeTicketFlowCollectionState**结构中) |  | enable disable | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "34d5466ff50d4e719aa854c2a1d58e81",
    "name": "collection name",
    "state": "Enabled",
    "status": "Valid",
    "isDefault": false,
    "flows": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketFlowCollectionInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| isDefault | Boolean |  | 3.0.0 |
| flows | List | 详情参考[flows] | 3.0.0 |

 #flows

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
ChangeTicketFlowCollectionStateAction action = new ChangeTicketFlowCollectionStateAction();
action.uuid = "b2a1edfb81d73aea989b25727b7a1417";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeTicketFlowCollectionStateAction.Result res = action.call();
```

 Python SDK

```
ChangeTicketFlowCollectionStateAction action = ChangeTicketFlowCollectionStateAction()
action.uuid = "b2a1edfb81d73aea989b25727b7a1417"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeTicketFlowCollectionStateAction.Result res = action.call()
```

---

#### 查询工单步骤(QueryTicketFlow)



##### API请求

 URLs

```
GET zstack/v1/tickets/flow
```


```
GET zstack/v1/tickets/flow/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/flow
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/tickets/flow/c6c9263205103dd3b6194140c5c06b74
```



可查询字段

运行CLI命令行工具，输入QueryTicketFlow并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "ea0457b5994a4710a182015cef690d75",
      "name": "flow1",
      "description": "flow description",
      "parentFlowUuid": "8d7b4b6b72bf4ff2bcf945b313320dc1",
      "flowContextType": "{\"approverUuid\":\"139bcc292cb141bea1e8d40bf8bbaed9\"}",
      "createDate": "Dec 28, 2018 6:39:29 PM",
      "lastOpDate": "Dec 28, 2018 6:39:29 PM",
      "collectionUuid": "a87c7cb15468456dbce88da5f65c0073"
    },
    {
      "uuid": "8d7b4b6b72bf4ff2bcf945b313320dc1",
      "name": "flow2",
      "description": "flow description",
      "flowContextType": "{\"approverUuid\":\"1cc3e1575809468dba5cedcfe8cc5a4c\"}",
      "createDate": "Dec 28, 2018 6:39:29 PM",
      "lastOpDate": "Dec 28, 2018 6:39:29 PM",
      "collectionUuid": "a87c7cb15468456dbce88da5f65c0073"
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
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryTicketFlowAction action = new QueryTicketFlowAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTicketFlowAction.Result res = action.call();
```

 Python SDK

```
QueryTicketFlowAction action = QueryTicketFlowAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTicketFlowAction.Result res = action.call()
```

---

#### 添加自定义审批的步骤(AddIAM2TicketFlow)



##### API请求

 URLs

```
POST zstack/v1/tickets/flow
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "approverUuid": "92b1b555f19531df9a94ce42c8959fa9",
    "approverTitle": "SystemAdmin",
    "name": "example flow",
    "collectionUuid": "d72760c4e3b24c45be267f5aa0a2c5a1"
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
-X POST -d '{"params":{"approverUuid":"92b1b555f19531df9a94ce42c8959fa9","approverTitle":"SystemAdmin","name":"example flow","collectionUuid":"82b6111a0d7f47bd955f385f959b1eb7"}}' http://localhost:8080/zstack/v1/tickets/flow
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| approverUuid | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| approverTitle (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.0 |
| collectionUuid | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| parentFlowUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f9b5298fc4d2429294513ffe340215c8",
    "name": "flow1",
    "description": "flow description",
    "parentFlowUuid": "4ca39493ec06407cb50fa92880f9bcbc",
    "flowContextType": "{\"approverUuid\":\"99a8ba4f86564f0787ab2c8b11bfadb0\"}",
    "createDate": "Dec 28, 2018 6:38:25 PM",
    "lastOpDate": "Dec 28, 2018 6:38:25 PM",
    "collectionUuid": "5d32a7a22ea645409dd7b12b5223f723"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketFlowInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
AddIAM2TicketFlowAction action = new AddIAM2TicketFlowAction();
action.approverUuid = "92b1b555f19531df9a94ce42c8959fa9";
action.approverTitle = "SystemAdmin";
action.name = "example flow";
action.collectionUuid = "4913282e13a64fe29b802c78b67e2c84";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIAM2TicketFlowAction.Result res = action.call();
```

 Python SDK

```
AddIAM2TicketFlowAction action = AddIAM2TicketFlowAction()
action.approverUuid = "92b1b555f19531df9a94ce42c8959fa9"
action.approverTitle = "SystemAdmin"
action.name = "example flow"
action.collectionUuid = "12d574495c074cf59de72c911391b8bb"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIAM2TicketFlowAction.Result res = action.call()
```

---

#### 修改自定义审批的步骤(UpdateIAM2TicketFlow)



##### API请求

 URLs

```
PUT zstack/v1/tickets/flow/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIAM2TicketFlow": {
    "name": "new ticket flow name",
    "description": "new ticket flow description",
    "approverUuid": "714d3eedb96f32a39598fb11ae0d9927"
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
-X PUT -d '{"updateIAM2TicketFlow":{"name":"new ticket flow name","description":"new ticket flow description","approverUuid":"714d3eedb96f32a39598fb11ae0d9927"}}' http://localhost:8080/zstack/v1/tickets/flow/919e8fbb3b3b30f480b41563e36839cc/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| name (可选) | String | body(包含在**updateIAM2TicketFlow**结构中) | 资源名称 |  | 3.0.0 |
| description (可选) | String | body(包含在**updateIAM2TicketFlow**结构中) | 资源的详细描述 |  | 3.0.0 |
| approverUuid (可选) | String | body(包含在**updateIAM2TicketFlow**结构中) |  |  | 3.0.0 |
| approverTitle (可选) | String | body(包含在**updateIAM2TicketFlow**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1dc3521c3ec74b81813121404e5941e6",
    "name": "flow1",
    "description": "flow description",
    "parentFlowUuid": "bb2897de253e497f94587fc09b5ef969",
    "flowContextType": "{\"approverUuid\":\"da8cc8c2412246b6b29b38328b7dab88\"}",
    "createDate": "Dec 28, 2018 6:39:33 PM",
    "lastOpDate": "Dec 28, 2018 6:39:33 PM",
    "collectionUuid": "2b9bdd8b1c1d4163864e55d16840954f"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | TicketFlowInventory | 详情参考[inventory] | 3.0.0 |

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
| description | String | 资源的详细描述 | 3.0.0 |
| parentFlowUuid | String |  | 3.0.0 |
| flowContext | String |  | 3.0.0 |
| flowContextType | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| collectionUuid | String |  | 3.0.0 |



##### SDK示例

 Java SDK

```
UpdateIAM2TicketFlowAction action = new UpdateIAM2TicketFlowAction();
action.uuid = "919e8fbb3b3b30f480b41563e36839cc";
action.name = "new ticket flow name";
action.description = "new ticket flow description";
action.approverUuid = "714d3eedb96f32a39598fb11ae0d9927";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateIAM2TicketFlowAction.Result res = action.call();
```

 Python SDK

```
UpdateIAM2TicketFlowAction action = UpdateIAM2TicketFlowAction()
action.uuid = "919e8fbb3b3b30f480b41563e36839cc"
action.name = "new ticket flow name"
action.description = "new ticket flow description"
action.approverUuid = "714d3eedb96f32a39598fb11ae0d9927"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateIAM2TicketFlowAction.Result res = action.call()
```

---

#### 删除自定义审批的步骤(DeleteIAM2TicketFlow)



##### API请求

 URLs

```
DELETE zstack/v1/tickets/flow/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/tickets/flow/482baf2f2f4f3315b81064ecc5b3625c?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| deleteMode (可选) | String | body |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
DeleteIAM2TicketFlowAction action = new DeleteIAM2TicketFlowAction();
action.uuid = "482baf2f2f4f3315b81064ecc5b3625c";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIAM2TicketFlowAction.Result res = action.call();
```

 Python SDK

```
DeleteIAM2TicketFlowAction action = DeleteIAM2TicketFlowAction()
action.uuid = "482baf2f2f4f3315b81064ecc5b3625c"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIAM2TicketFlowAction.Result res = action.call()
```

---

#### 增加工单审批流程对应的工单类型(AddTicketTypesToTicketFlowCollection)



##### API请求

 URLs

```
POST zstack/v1/tickets/flow-collections/{ticketFlowCollectionUuid}/ticket-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ticketTypeUuids": [
      "3b933e9aaf2d49b9a3dcf0c92867790f",
      "ef064ef45fb446d381db7b7d5f71695c"
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
-X POST -d '{"params":{"ticketTypeUuids":["3b933e9aaf2d49b9a3dcf0c92867790f","ef064ef45fb446d381db7b7d5f71695c"]}}' http://localhost:8080/zstack/v1/tickets/flow-collections/4f4bf50d510f4bf1959d8c5baa218cc4/ticket-types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ticketFlowCollectionUuid | String | url | 工单流程UUID |  | 3.6.0 |
| ticketTypeUuids | List | body(包含在**params**结构中) | 工单类型UUID |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



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
AddTicketTypesToTicketFlowCollectionAction action = new AddTicketTypesToTicketFlowCollectionAction();
action.ticketFlowCollectionUuid = "d8aa14d3ea224e36bd071b2355c94882";
action.ticketTypeUuids = asList("3b933e9aaf2d49b9a3dcf0c92867790f","ef064ef45fb446d381db7b7d5f71695c");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddTicketTypesToTicketFlowCollectionAction.Result res = action.call();
```

 Python SDK

```
AddTicketTypesToTicketFlowCollectionAction action = AddTicketTypesToTicketFlowCollectionAction()
action.ticketFlowCollectionUuid = "5682400944cd4ca0acb82ff8d67462a6"
action.ticketTypeUuids = [3b933e9aaf2d49b9a3dcf0c92867790f, ef064ef45fb446d381db7b7d5f71695c]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddTicketTypesToTicketFlowCollectionAction.Result res = action.call()
```

---

#### 移除工单流程关联的工单类型(RemoveTicketTypesFromTicketFlowCollection)



##### API请求

 URLs

```
DELETE zstack/v1/tickets/flow-collections/{ticketFlowCollectionUuid}/ticket-types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/tickets/flow-collections/839c88649a804cf6b56f3e80aac1c578/ticket-types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ticketFlowCollectionUuid | String | url |  |  | 3.6.0 |
| ticketTypeUuids | List | body |  |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



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
RemoveTicketTypesFromTicketFlowCollectionAction action = new RemoveTicketTypesFromTicketFlowCollectionAction();
action.ticketFlowCollectionUuid = "f4ccacf67bb04b4698d01ffbfed57134";
action.ticketTypeUuids = asList("3b933e9aaf2d49b9a3dcf0c92867790f","ef064ef45fb446d381db7b7d5f71695c");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveTicketTypesFromTicketFlowCollectionAction.Result res = action.call();
```

 Python SDK

```
RemoveTicketTypesFromTicketFlowCollectionAction action = RemoveTicketTypesFromTicketFlowCollectionAction()
action.ticketFlowCollectionUuid = "97e30e33bea34366850c62781d342e22"
action.ticketTypeUuids = [3b933e9aaf2d49b9a3dcf0c92867790f, ef064ef45fb446d381db7b7d5f71695c]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveTicketTypesFromTicketFlowCollectionAction.Result res = action.call()
```

---

#### 查询工单类型(QueryTicketType)



##### API请求

 URLs

```
GET zstack/v1/ticket-types
```



```
GET zstack/v1/ticket-types/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ticket-types?q=uuid=8cab296e0d8e3c86aef43d7e76c874c6
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ticket-types/e3e9345750b93455ad7336be8bd60420
```



可查询字段

运行CLI命令行工具，输入QueryTicketType并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "3b933e9aaf2d49b9a3dcf0c92867790f",
      "name": "CREATE_VM_INSTANCE_TICKET_TYPE",
      "adminOnly": false,
      "createDate": "Jul 18, 2019 4:09:46 PM",
      "lastOpDate": "Jul 18, 2019 4:09:46 PM"
    }
  ]
}
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
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| type | String |  | 3.6.0 |
| requests | String |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryTicketTypeAction action = new QueryTicketTypeAction();
action.conditions = asList("uuid=bbeba1e02a88309192252bbfe409df4f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTicketTypeAction.Result res = action.call();
```

 Python SDK

```
QueryTicketTypeAction action = QueryTicketTypeAction()
action.conditions = ["uuid=60ebfd64ef4238f9bbdd77c3c0569d64"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTicketTypeAction.Result res = action.call()
```

---

### 统一认证SSO相关接口

---

#### 通过AD/LDAP用户DN创建IAM2用户(CreateIAM2VirtualIDFromLdapUid)



##### API请求

 URLs

```
POST zstack/v1/iam2/virtual-id/ldap/uid
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ldapUid": "ou\u003dEmployee,uid\u003dtest"
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
-X POST -d '{"params":{"ldapUid":"ou=Employee,uid=test"}}' http://localhost:8080/zstack/v1/iam2/virtual-id/ldap/uid
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ldapUid | String | body (包含在**params**结构中) | AD/LDAP用户UID |  | 4.7.0 |
| resourceUuid (可选) | String | body (包含在**params**结构中) | 资源UUID |  | 4.7.0 |
| tagUuids (可选) | List | body (包含在**params**结构中) | 标签UUID列表 |  | 4.7.0 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "417c94a9fdfb3b61b2e0d11ed42f4b4d",
    "ldapUid": "ou\u003dEmployee,uid\u003dtest",
    "ldapServerUuid": "6e667cc905903cfc82ddef6f14d45831",
    "virtualIDUuid": "bbcf2b14a0d13401872088bd1aa7f930"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | LdapIAM2VirtualIDRefInventory | 详情参考[inventory] | 3.5.1 |

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
| ldapUid | String | AD/LDAP条目标志 | 3.5.1 |
| ldapServerUuid | String | AD/LDAP服务器 | 3.5.1 |
| resourceUuid | String | 资源UUID | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
CreateIAM2VirtualIDFromLdapUidAction action = new CreateIAM2VirtualIDFromLdapUidAction();
action.ldapUid = "ou=Employee,uid=test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2VirtualIDFromLdapUidAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2VirtualIDFromLdapUidAction action = CreateIAM2VirtualIDFromLdapUidAction()
action.ldapUid = "ou=Employee,uid=test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2VirtualIDFromLdapUidAction.Result res = action.call()
```

---

#### 创建AD/LDAP用户和IAM2用户绑定关系(CreateIAM2VirtualIDLdapBinding)



##### API请求

 URLs

```
POST zstack/v1/iam2/ldap/bindings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "virtualIDUuid": "7f78522de8ce3e3c8550207c26704dc8",
    "ldapUid": "ou\u003dEmployee,uid\u003dtest"
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
-X POST -d '{"params":{"virtualIDUuid":"7f78522de8ce3e3c8550207c26704dc8","ldapUid":"ou=Employee,uid=test"}}' http://localhost:8080/zstack/v1/iam2/ldap/bindings
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualIDUuid | String | body (包含在**params**结构中) | IAM2用户UUID |  | 4.7.0 |
| ldapUid | String | body (包含在**params**结构中) | AD/LDAP用户UUID |  | 4.7.0 |
| resourceUuid (可选) | String | body (包含在**params**结构中) |  |  | 4.7.0 |
| tagUuids (可选) | List | body (包含在**params**结构中) | 标签UUID列表 |  | 4.7.0 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "35f1a7c85cf038f6892a9c6b5e2f0470",
    "ldapUid": "ou\u003dEmployee,uid\u003dtest",
    "ldapServerUuid": "1bca8f5b607b3d0d9cc5b22270c3a262",
    "virtualIDUuid": "5d1be61d0d1d3657afdd9e7829f4d2ed"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | LdapIAM2VirtualIDRefInventory | 详情参考[inventory] | 3.5.1 |

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
| ldapUid | String | AD/LDAP条目标志 | 3.5.1 |
| ldapServerUuid | String | AD/LDAP服务器UUID | 3.5.1 |
| resourceUuid | String | 资源UUID | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
CreateIAM2VirtualIDLdapBindingAction action = new CreateIAM2VirtualIDLdapBindingAction();
action.virtualIDUuid = "52d9727518053f50889bebe14617d2d2";
action.ldapUid = "ou=Employee,uid=test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIAM2VirtualIDLdapBindingAction.Result res = action.call();
```

 Python SDK

```
CreateIAM2VirtualIDLdapBindingAction action = CreateIAM2VirtualIDLdapBindingAction()
action.virtualIDUuid = "52d9727518053f50889bebe14617d2d2"
action.ldapUid = "ou=Employee,uid=test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIAM2VirtualIDLdapBindingAction.Result res = action.call()
```

---

#### 获取AD/LDAP认证可用用户条目(GetCandidateLdapEntryForIAM2Binding)



用于获取可供IAM2用户绑定的AD/LDAP条目。

##### API请求

 URLs

```
GET zstack/v1/iam2/ldap/entries/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/ldap/entries/candidates?ldapFilter=(cn=user_xxx)&limit=2500.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ldapFilter | String | query | AD/LDAP查询条件 |  | 3.5.1 |
| limit (可选) | Integer | query | AD/LDAP查询条数限制 |  | 3.5.1 |
| systemTags (可选) | List | query |  |  | 3.5.1 |
| userTags (可选) | List | query |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventories": []
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventories | List |  | 3.5.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |

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
GetCandidateLdapEntryForIAM2BindingAction action = new GetCandidateLdapEntryForIAM2BindingAction();
action.ldapFilter = "(cn=user_xxx)";
action.limit = 2500.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateLdapEntryForIAM2BindingAction.Result res = action.call();
```

 Python SDK

```
GetCandidateLdapEntryForIAM2BindingAction action = GetCandidateLdapEntryForIAM2BindingAction()
action.ldapFilter = "(cn=user_xxx)"
action.limit = 2500.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateLdapEntryForIAM2BindingAction.Result res = action.call()
```

---

#### 通过AD/LDAP认证登录IAM2用户(LoginIAM2VirtualIDWithLdap)



##### API请求

 URLs

```
PUT zstack/v1/iam2/login/virtual-ids/ldap
```

 Body

```
{
  "loginIAM2VirtualIDWithLdap": {
    "uid": "ou\u003dEmployee,uid\u003dtest",
    "password": "password"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"loginIAM2VirtualIDWithLdap":{"uid":"ou=Employee,uid=test","password":"password"}}' http://localhost:8080/zstack/v1/iam2/login/virtual-ids/ldap
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uid | String | body(包含在**loginIAM2VirtualIDWithLdap**结构中) | 平台指定的AD/LDAP用户登录属性值 |  | 3.5.1 |
| password | String | body(包含在**loginIAM2VirtualIDWithLdap**结构中) | AD/LDAP用户登录密码 |  | 3.5.1 |
| verifyCode (可选) | String | body(包含在**loginIAM2VirtualIDWithLdap**结构中) | 验证登录码 |  | 3.5.1 |
| captchaUuid (可选) | String | body(包含在**loginIAM2VirtualIDWithLdap**结构中) | 验证登录码UUID |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4abb254913c23d488c161bcd3524f176",
    "accountUuid": "ac1453a45c6830c6ad6d488326a4c0ec",
    "expiredDate": "Nov 14, 2017 10:20:57 PM",
    "noSessionEvaluation": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | SessionInventory | 详情参考[inventory] | 3.5.1 |

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
| accountUuid | String | 账户UUID | 3.5.1 |
| userUuid | String | 用户UUID | 3.5.1 |
| expiredDate | Timestamp |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
LoginIAM2VirtualIDWithLdapAction action = new LoginIAM2VirtualIDWithLdapAction();
action.uid = "ou=Employee,uid=test";
action.password = "password";
LoginIAM2VirtualIDWithLdapAction.Result res = action.call();
```

 Python SDK

```
LoginIAM2VirtualIDWithLdapAction action = LoginIAM2VirtualIDWithLdapAction()
action.uid = "ou=Employee,uid=test"
action.password = "password"
LoginIAM2VirtualIDWithLdapAction.Result res = action.call()
```

---

#### 删除IAM2用户与AD/LDAP用户绑定关系(DeleteIAM2VirtualIDLdapBinding)



##### API请求

 URLs

```
DELETE /v1/iam2/ldap/bindings/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/iam2/ldap/bindings/0a7983d3082530c4b6d4b844e694694e?deleteMode=Permissive
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
DeleteIAM2VirtualIDLdapBindingAction action = new DeleteIAM2VirtualIDLdapBindingAction();
action.uuid = "0a7983d3082530c4b6d4b844e694694e";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIAM2VirtualIDLdapBindingAction.Result res = action.call();
```

 Python SDK

```
DeleteIAM2VirtualIDLdapBindingAction action = DeleteIAM2VirtualIDLdapBindingAction()
action.uuid = "0a7983d3082530c4b6d4b844e694694e"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIAM2VirtualIDLdapBindingAction.Result res = action.call()
```

---

#### 清除IAM2用户与AD/LDAP用户绑定关系(CleanInvalidLdapIAM2Binding)



清除IAM2用户与AD/LDAP用户的绑定关系。

##### API请求

 URLs

```
PUT zstack/v1/iam2/ldap/bindings/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "cleanInvalidLdapIAM2Binding": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"cleanInvalidLdapIAM2Binding":{}}' http://localhost:8080/zstack/v1/iam2/ldap/bindings/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "642833fc31983380b25ecf08f3f8f8f4",
      "name": "admin",
      "state": "Enabled",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
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
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |
| state | State | 详情参考[state] | 3.5.1 |
| attributes | List | 详情参考[attributes] | 3.5.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.5.1 |
| ordinal | int |  | 3.5.1 |

 #attributes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.1 |
| name | String | 资源名称 | 3.5.1 |
| value | String |  | 3.5.1 |
| type | AttributeType | 详情参考[type] | 3.5.1 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.5.1 |
| ordinal | int |  | 3.5.1 |



##### SDK示例

 Java SDK

```
CleanInvalidLdapIAM2BindingAction action = new CleanInvalidLdapIAM2BindingAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CleanInvalidLdapIAM2BindingAction.Result res = action.call();
```

 Python SDK

```
CleanInvalidLdapIAM2BindingAction action = CleanInvalidLdapIAM2BindingAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CleanInvalidLdapIAM2BindingAction.Result res = action.call()
```

---

#### 查询AD/LDAP绑定(QueryIAM2LdapBinding)



##### API请求

 URLs

```
GET zstack/v1/iam2/ldap/bindings
```


```
GET zstack/v1/iam2/ldap/bindings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/ldap/bindings?q=accountUuid=bb452952218931cdb9c058085748dc8a
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/iam2/ldap/bindings/c757b80ef90f37dba57f180ac1b52269
```



可查询字段

运行CLI命令行工具，输入QueryIAM2LdapBinding并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "5e66b22cb6d33a87802d12b4ee280f64",
      "ldapUid": "ou\u003dEmployee,uid\u003dtest",
      "ldapServerUuid": "03f1ff7e314232ebbb365c7fc62878f3",
      "resourceUuid": "3946f8a48c6d320fbddd0e6c0c30c281"
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
| ldapUid | String | AD/LDAP条目标志 | 3.5.1 |
| ldapServerUuid | String | AD/LDAP服务器UUID | 3.5.1 |
| resourceUuid | String | 资源UUID | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
QueryIAM2LdapBindingAction action = new QueryIAM2LdapBindingAction();
action.conditions = asList("accountUuid=cf0b19d0309c31e2bf9d2f9e50a3a013");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIAM2LdapBindingAction.Result res = action.call();
```

 Python SDK

```
QueryIAM2LdapBindingAction action = QueryIAM2LdapBindingAction()
action.conditions = ["accountUuid=5f37176baf4b35479f25bf375879c83d"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIAM2LdapBindingAction.Result res = action.call()
```

---

#### 同步AD/LDAP服务器用户及组织(SyncLdapServer)



##### API请求

 URLs

```
PUT zstack/v1/ldap/servers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncLdapServer": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncLdapServer":{}}' http://localhost:8080/zstack/v1/ldap/servers/7a3718959bae3ac88e0b828e06ab2e22/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "14dc461677b23ea1a984849f501a7152"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | LongJobInventory | 详情参考[inventory] | 3.5.1 |

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
| apiId | String | 用于关联TaskProgress的APIID | 3.5.1 |
| jobName | String | 任务名称 | 3.5.1 |
| jobData | String | 任务数据 | 3.5.1 |
| jobResult | String | 任务结果 | 3.5.1 |
| targetResourceUuid | String | 目标资源UUID | 3.5.1 |
| managementNodeUuid | String | 管理节点UUID | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |
| state | LongJobState | 详情参考[state] | 3.5.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.5.1 |
| ordinal | int |  | 3.5.1 |



##### SDK示例

 Java SDK

```
SyncLdapServerAction action = new SyncLdapServerAction();
action.uuid = "7a3718959bae3ac88e0b828e06ab2e22";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncLdapServerAction.Result res = action.call();
```

 Python SDK

```
SyncLdapServerAction action = SyncLdapServerAction()
action.uuid = "7a3718959bae3ac88e0b828e06ab2e22"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncLdapServerAction.Result res = action.call()
```

---

#### 创建OAuth客户端(CreateOAuthClient)



##### API请求

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



##### API返回

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



##### SDK示例

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

#### 更新OAuth客户端(UpdateOAuthClient)



##### API请求

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



##### API返回

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



##### SDK示例

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

---

#### 获取OAuth2 Token(GetOAuth2Token)



##### API请求

 URLs

```
GET zstack/v1/get/oauth2/token
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X  GET http://localhost:8080/zstack/v1/get/oauth2/token
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "accessToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGV3NnY2k4cENJQkZFY1hoVkZmNkhzVUkwU1FmekN2SGJ0LVFFOHc4OXJZIn0.eyJleHAiOjE2NjM1NzQ3NjcsImlhdCI6MTY2MzU3NDQ2NywiYXV0aF90aW1lIjoxNjYzNTc0NDY3LCJqdGkiOiI2MzQwOTRjNy00ZjA3LTRlZGMtYjMxMS05MmE5NDc0NWIwYTkiLCJpc3MiOiJodHRwczovLzE3Mi4yMC4xNi4xODg6ODQ0My9hdXRoL3JlYWxtcy9jbG91ZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkNjYyYWNiYi0yMjYxLTQ2ODctYjNkZS0zOTI2OTA0ZWRlNzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbG91ZF9zc28iLCJzZXNzaW9uX3N0YXRlIjoiNTM1MjM0ZDUtOTEyYi00NzY2LThhMjktN2Q5MTdkYjE2YTBmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNsb3VkIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiNTM1MjM0ZDUtOTEyYi00NzY2LThhMjktN2Q5MTdkYjE2YTBmIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoicWl1eXUgemhhbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJxaXV5dSIsImdpdmVuX25hbWUiOiJxaXV5dSIsImZhbWlseV9uYW1lIjoiemhhbmciLCJlbWFpbCI6IjI0OTQ0OTcyNkBxcS5jb20ifQ.Mun8NSAnoPW3IjRLFySji8r243ydDYCARMXRstTllM1vsmVp56E3wpfJy8LAf_9PPAo-ryoTkuj1O2Z_nDV4F5lMQ_QASwqIMoBKzg3_Umf-D2pPlTC9BjMIuCeK0qoFiuJq23IS7IN9lYAHDRMdyP6MLUjkyqW-sWgq1l3boT7FcHfkl6cGBzFDLigpsckkm_b7yiN8lDxBdw7SNTcg_AO6D7ZipPG09up8hiatq_4fY1vnhfiBbL9pa8vX4wKoGGR8B_-uO6PrcALOt08QrW06YB084n56dzjD3hCRe9fA9tHB7krTCMnHZN-Bf0QptsYEzwU5zUvIRke9SM88Kg",
    "idToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGV3NnY2k4cENJQkZFY1hoVkZmNkhzVUkwU1FmekN2SGJ0LVFFOHc4OXJZIn0.eyJleHAiOjE2NjM1NzQ3NjcsImlhdCI6MTY2MzU3NDQ2NywiYXV0aF90aW1lIjoxNjYzNTc0NDY3LCJqdGkiOiI2MzQwOTRjNy00ZjA3LTRlZGMtYjMxMS05MmE5NDc0NWIwYTkiLCJpc3MiOiJodHRwczovLzE3Mi4yMC4xNi4xODg6ODQ0My9hdXRoL3JlYWxtcy9jbG91ZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkNjYyYWNiYi0yMjYxLTQ2ODctYjNkZS0zOTI2OTA0ZWRlNzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbG91ZF9zc28iLCJzZXNzaW9uX3N0YXRlIjoiNTM1MjM0ZDUtOTEyYi00NzY2LThhMjktN2Q5MTdkYjE2YTBmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNsb3VkIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiNTM1MjM0ZDUtOTEyYi00NzY2LThhMjktN2Q5MTdkYjE2YTBmIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoicWl1eXUgemhhbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJxaXV5dSIsImdpdmVuX25hbWUiOiJxaXV5dSIsImZhbWlseV9uYW1lIjoiemhhbmciLCJlbWFpbCI6IjI0OTQ0OTcyNkBxcS5jb20ifQ.Mun8NSAnoPW3IjRLFySji8r243ydDYCARMXRstTllM1vsmVp56E3wpfJy8LAf_9PPAo-ryoTkuj1O2Z_nDV4F5lMQ_QASwqIMoBKzg3_Umf-D2pPlTC9BjMIuCeK0qoFiuJq23IS7IN9lYAHDRMdyP6MLUjkyqW-sWgq1l3boT7FcHfkl6cGBzFDLigpsckkm_b7yiN8lDxBdw7SNTcg_AO6D7ZipPG09up8hiatq_4fY1vnhfiBbL9pa8vX4wKoGGR8B_-uO6PrcALOt08QrW06YB084n56dzjD3hCRe9fA9tHB7krTCMnHZN-Bf0QptsYEzwU5zUvIRke9SM88Kg",
    "refreshToken": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJGV3NnY2k4cENJQkZFY1hoVkZmNkhzVUkwU1FmekN2SGJ0LVFFOHc4OXJZIn0.eyJleHAiOjE2NjM1NzQ3NjcsImlhdCI6MTY2MzU3NDQ2NywiYXV0aF90aW1lIjoxNjYzNTc0NDY3LCJqdGkiOiI2MzQwOTRjNy00ZjA3LTRlZGMtYjMxMS05MmE5NDc0NWIwYTkiLCJpc3MiOiJodHRwczovLzE3Mi4yMC4xNi4xODg6ODQ0My9hdXRoL3JlYWxtcy9jbG91ZCIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiJkNjYyYWNiYi0yMjYxLTQ2ODctYjNkZS0zOTI2OTA0ZWRlNzQiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJjbG91ZF9zc28iLCJzZXNzaW9uX3N0YXRlIjoiNTM1MjM0ZDUtOTEyYi00NzY2LThhMjktN2Q5MTdkYjE2YTBmIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIvKiJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJkZWZhdWx0LXJvbGVzLWNsb3VkIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwic2lkIjoiNTM1MjM0ZDUtOTEyYi00NzY2LThhMjktN2Q5MTdkYjE2YTBmIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJuYW1lIjoicWl1eXUgemhhbmciLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJxaXV5dSIsImdpdmVuX25hbWUiOiJxaXV5dSIsImZhbWlseV9uYW1lIjoiemhhbmciLCJlbWFpbCI6IjI0OTQ0OTcyNkBxcS5jb20ifQ.Mun8NSAnoPW3IjRLFySji8r243ydDYCARMXRstTllM1vsmVp56E3wpfJy8LAf_9PPAo-ryoTkuj1O2Z_nDV4F5lMQ_QASwqIMoBKzg3_Umf-D2pPlTC9BjMIuCeK0qoFiuJq23IS7IN9lYAHDRMdyP6MLUjkyqW-sWgq1l3boT7FcHfkl6cGBzFDLigpsckkm_b7yiN8lDxBdw7SNTcg_AO6D7ZipPG09up8hiatq_4fY1vnhfiBbL9pa8vX4wKoGGR8B_-uO6PrcALOt08QrW06YB084n56dzjD3hCRe9fA9tHB7krTCMnHZN-Bf0QptsYEzwU5zUvIRke9SM88Kg",
    "uuid": "58ac3d5235f230cbbac1bcf966c43685",
    "clientUuid": "b2d39b32cba335888e6c6d9a15c9ce3d",
    "userUuid": "1489d2a1d93531ffb83f2c49cd4cedcd"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| inventory | OAuth2TokenInventory | 详情参考[inventory] | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| accessToken | String | accessToken | 4.6.21 |
| idToken | String | idToken | 4.6.21 |
| refreshToken | String | refreshToken | 4.6.21 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| clientUuid | String | clientUuid | 4.6.21 |
| userUuid | String | 用户UUID | 4.6.21 |
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
GetOAuth2TokenAction action = new GetOAuth2TokenAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetOAuth2TokenAction.Result res = action.call();
```

 Python SDK

```
GetOAuth2TokenAction action = GetOAuth2TokenAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetOAuth2TokenAction.Result res = action.call()
```

---

#### 创建CAS客户端(CreateCasClient)



##### API请求

 URLs

```
POST zstack/v1/create/cas/client
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
    "casServerLoginUrl": "http://zstack.com/login",
    "casServerUrlPrefix": "http://zstack.com",
    "serverName": "http://127.0.0.1:8080",
    "loginType": "iam1"
  },
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X POST -d '{"params":{"name":"test","description":"test","casServerLoginUrl":"http://zstack.com/login","casServerUrlPrefix":"http://zstack.com","serverName":"http://127.0.0.1:8080","loginType":"iam1"}}' \
http://localhost:8080/zstack/v1/create/cas/client
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
| casServerLoginUrl | String | body(包含在**params**结构中) | casServerLoginUrl |  | 4.5.0 |
| casServerUrlPrefix | String | body(包含在**params**结构中) | casServerUrlPrefix |  | 4.5.0 |
| serverName | String | body(包含在**params**结构中) | mn的地址(http://{mn_ip:port}/8080) |  | 4.5.0 |
| loginType | String | body(包含在**params**结构中) | 登录的类型： cas-iam1 cas-iam2 oauth2-iam1 oauth2-iam2 |  | 4.5.0 |
| urlTemplate (可选) | String | body(包含在**params**结构中) | 免密登录之后的跳转 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.5.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "casServerUrlPrefix": "http://zstack.com",
    "serverName": "http://127.0.0.1",
    "state": "Enabled",
    "uuid": "6bc5a073efd73d6d861d348694abcc91",
    "loginMNUrl": "http://127.0.0.1:8080/zstack/sso/cas/"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventory | CasClientInventory | 详情参考[inventory] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventory
-
-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| casServerLoginUrl | String | casServerLoginUrl | 4.5.0 |
| casServerUrlPrefix | String | casServerUrlPrefix | 4.5.0 |
| serverName | String | mn的地址(http://{mn_ip:port}/8080) | 4.5.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| clientType | String | clientType | 4.5.0 |
| loginType | String | 登录的类型： cas-iam1 cas-ima2 oauth2-iam1 oauth2-iam2 | 4.5.0 |
| loginMNUrl | String | 免密登录的url | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| accountUuid | String | 账户UUID | 4.5.0 |
| state | CasState | 详情参考[state] | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CasState |  | 4.5.0 |
| Disabled | CasState |  | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



##### SDK示例

 Java SDK

```
CreateCasClientAction action = new CreateCasClientAction();
action.name = "test";
action.description = "test";
action.casServerLoginUrl = "http://zstack.com/login";
action.casServerUrlPrefix = "http://zstack.com";
action.serverName = "http://127.0.0.1:8080";
action.loginType = "iam1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateCasClientAction.Result res = action.call();
```

 Python SDK

```
CreateCasClientAction action = CreateCasClientAction()
action.name = "test"
action.description = "test"
action.casServerLoginUrl = "http://zstack.com/login"
action.casServerUrlPrefix = "http://zstack.com"
action.serverName = "http://127.0.0.1:8080"
action.loginType = "iam1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateCasClientAction.Result res = action.call()
```

---

#### 更新CAS客户端(UpdateCasClient)



##### API请求

 URLs

```
POST zstack/v1/update/cas/client
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "uuid": "c9b85d8d64353f89a0fc97833dbda36e",
    "description": "test",
    "name": "test",
    "casServerLoginUrl": "http://zstack.com/login",
    "casServerUrlPrefix": "http://zstack.com",
    "serverName": "http://127.0.0.1:8080",
    "loginType": "iam1"
  },
  "systemTags": [],
  "userTags": []
}
```



上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"uuid":"c9b85d8d64353f89a0fc97833dbda36e","description":"test","name":"test","casServerLoginUrl":"http://zstack.com/login","casServerUrlPrefix":"http://zstack.com","serverName":"http://127.0.0.1:8080","loginType":"iam1"}}' \
http://localhost:8080/zstack/v1/update/cas/client
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| casServerLoginUrl (可选) | String | body(包含在**params**结构中) | casServerLoginUrl |  | 4.5.0 |
| casServerUrlPrefix (可选) | String | body(包含在**params**结构中) | casServerUrlPrefix |  | 4.5.0 |
| serverName (可选) | String | body(包含在**params**结构中) | mn的地址(http://{mn_ip:port}/8080) |  | 4.5.0 |
| loginType (可选) | String | body(包含在**params**结构中) | 登录的类型： cas-iam1 cas-iam2 oauth2-iam1 oauth2-iam2 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "casServerLoginUrl": "http://zstack.com/login",
    "casServerUrlPrefix": "http://zstack.com",
    "serverName": "http://127.0.0.1:8080/",
    "uuid": "5068f4c641153a3d9353c3326dc1dd5e",
    "name": "test",
    "description": "test",
    "loginType": "iam2",
    "loginMNUrl": "http://127.0.0.1:8080/zstack/sso/cas/"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventory | CasClientInventory | 详情参考[inventory] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventory
-
-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| casServerLoginUrl | String | casServerLoginUrl | 4.5.0 |
| casServerUrlPrefix | String | casServerUrlPrefix | 4.5.0 |
| serverName | String | mn的地址(http://{mn_ip:port}/8080) | 4.5.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| clientType | String | clientType | 4.5.0 |
| loginType | String | 登录的类型： cas-iam1 cas-ima2 oauth2-iam1 oauth2-iam2 | 4.5.0 |
| loginMNUrl | String | 免密登录的url | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| accountUuid | String | 账户UUID | 4.5.0 |
| state | CasState | 详情参考[state] | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CasState |  | 4.5.0 |
| Disabled | CasState |  | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



##### SDK示例

 Java SDK

```
UpdateCasClientAction action = new UpdateCasClientAction();
action.uuid = "c9b85d8d64353f89a0fc97833dbda36e";
action.description = "test";
action.name = "test";
action.casServerLoginUrl = "http://zstack.com/login";
action.casServerUrlPrefix = "http://zstack.com";
action.serverName = "http://127.0.0.1:8080";
action.loginType = "iam1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateCasClientAction.Result res = action.call();
```

 Python SDK

```
UpdateCasClientAction action = UpdateCasClientAction()
action.uuid = "c9b85d8d64353f89a0fc97833dbda36e"
action.description = "test"
action.name = "test"
action.casServerLoginUrl = "http://zstack.com/login"
action.casServerUrlPrefix = "http://zstack.com"
action.serverName = "http://127.0.0.1:8080"
action.loginType = "iam1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateCasClientAction.Result res = action.call()
```

---

#### 删除认证客户端(DeleteSSOClient)



##### API请求

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

#### 获取认证客户端(GetSSOClient)



##### API请求

 URLs

```
GET zstack/v1/get/sso/client
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X  GET http://localhost:8080/zstack/v1/get/sso/client
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.21 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "1fbb7c4cb98d38beb31fa9bd74bff347",
      "name": "test",
      "clientType": "OIDC",
      "loginMNUrl": "http://127.0.0.1:8080/zstack/sso/oauth2/"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| description | String | 资源的详细描述 | 4.6.21 |
| clientType | String | 客户端类型 | 4.6.21 |
| loginType | String | 登录类型 | 4.6.21 |
| loginMNUrl | String | 登录跳转url | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| accountUuid | String | 账户UUID | 4.6.21 |

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
GetSSOClientAction action = new GetSSOClientAction();
GetSSOClientAction.Result res = action.call();
```

 Python SDK

```
GetSSOClientAction action = GetSSOClientAction()
GetSSOClientAction.Result res = action.call()
```

---

#### 修改重定向UI(UpdateSSORedirectTemplate)



##### API请求

 URLs

```
POST zstack/v1/update/sso/redirectTemplate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "uuid": "35cc6909f0f23e55a209cd552d8bc938",
    "redirectTemplate": "http://zstack.com/userinfoUrl"
  },
  "systemTags": [],
  "userTags": []
}
```



上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{"uuid":"35cc6909f0f23e55a209cd552d8bc938","redirectTemplate":"http://zstack.com/userinfoUrl"}}'
http://localhost:8080/zstack/v1/update/sso/redirectTemplate
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 4.7.21 |
| redirectTemplate | String | body(包含在**params**结构中) | UI重定向地址 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "43679041066d37b28f676a49851ade69",
    "clientUuid": "3e5541e27b9c320fa4ad0a86777cc5ab",
    "redirectTemplate": "http://zstack.com/code"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| inventory | OAuth2ClientInventory | 详情参考[inventory] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| clientUuid | String | 客户端uuid | 4.7.21 |
| redirectTemplate | String | 跳转的模板 | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |

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
UpdateSSORedirectTemplateAction action = new UpdateSSORedirectTemplateAction();
action.uuid = "35cc6909f0f23e55a209cd552d8bc938";
action.redirectTemplate = "http://zstack.com/userinfoUrl";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSSORedirectTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateSSORedirectTemplateAction action = UpdateSSORedirectTemplateAction()
action.uuid = "35cc6909f0f23e55a209cd552d8bc938"
action.redirectTemplate = "http://zstack.com/userinfoUrl"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSSORedirectTemplateAction.Result res = action.call()
```
