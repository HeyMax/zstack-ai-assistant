# 网络服务 - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.4.html*

---

## 网络服务

---

## 网络服务相关接口

---

## 获取网络服务类型(GetNetworkServiceTypes)



### API请求

 URLs

```
GET zstack/v1/network-services/types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 8a5a05acd4fb47b7839a9c50a74c3f1a" \ -X GET http://localhost:8080/zstack/v1/network-services/types
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



### API返回

 返回示例

```
{ "serviceAndProviderTypes": { "SecurityGroup": [ "929ae57afd1b4815b04ecb25bd67fb02"     ]   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| types | Map |  | 0.6 |
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



### SDK示例

 Java SDK

```
GetNetworkServiceTypesAction action = new GetNetworkServiceTypesAction(); action.sessionId = "bcb01c0891bb48a1974e2004b3397678"; GetNetworkServiceTypesAction.Result res = action.call();
```

 Python SDK

```
GetNetworkServiceTypesAction action = GetNetworkServiceTypesAction() action.sessionId = "35c50339c05b4d6c9b4461a478c17239" GetNetworkServiceTypesAction.Result res = action.call()
```

---

## 查询网络服务模块(QueryNetworkServiceProvider)



### API请求

 URLs

```
GET zstack/v1/network-services/providers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 0305524eb18344ea95193f8283a7212f" \ -X GET http://localhost:8080/zstack/v1/network-services/providers
```



可查询字段

运行CLI命令行工具，输入`QueryNetworkServiceProvider`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{ "inventories": [     { "uuid": "3cf04a2c5e1a4c4c8947545323e35d6a", "name": "SecurityGroup", "type": "SecurityGroup", "createDate": "Jun 7, 2017 9:21:03 PM", "lastOpDate": "Jun 7, 2017 9:21:03 PM", "networkServiceTypes": [ "SecurityGroup"       ], "attachedL2NetworkUuids": []     }   ] }
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
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| networkServiceTypes | Set |  | 0.6 |
| attachedL2NetworkUuids | Set |  | 0.6 |



### SDK示例

 Java SDK

```
QueryNetworkServiceProviderAction action = new QueryNetworkServiceProviderAction(); action.conditions = asList(); action.sessionId = "3d4bfef1a32241528160058368824670"; QueryNetworkServiceProviderAction.Result res = action.call();
```

 Python SDK

```
QueryNetworkServiceProviderAction action = QueryNetworkServiceProviderAction() action.conditions = [] action.sessionId = "db50128c5ab745e68c9b30c52d24ebf9" QueryNetworkServiceProviderAction.Result res = action.call()
```

---

#### 查询网络服务与三层网络引用(QueryNetworkServiceL3NetworkRef)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/network-services/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth aa530ebc39804e00b3df02b8862eaec3" \
-X GET http://localhost:8080/zstack/v1/l3-networks/network-services/refs
```



可查询字段

运行CLI命令行工具，输入QueryNetworkServiceL3NetworkRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"l3NetworkUuid": "fc5bd613a8fd45ed9b96ff5d99ae6717",
"networkServiceProviderUuid": "f79573afadc44f4fb83aaf67eeb98cde",
"networkServiceType": "PortForwarding"
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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryNetworkServiceL3NetworkRefAction action = new QueryNetworkServiceL3NetworkRefAction();
action.conditions = asList();
action.sessionId = "01368722cb7e4c7eac03e7040f8b73e1";
QueryNetworkServiceL3NetworkRefAction.Result res = action.call();
```

 Python SDK

```
QueryNetworkServiceL3NetworkRefAction action = QueryNetworkServiceL3NetworkRefAction()
action.conditions = []
action.sessionId = "237996a7dddf4cf3a42f6ea15893bc76"
QueryNetworkServiceL3NetworkRefAction.Result res = action.call()
```

---

#### 挂载网络服务到三层网络(AttachNetworkServiceToL3Network)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/network-services
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"networkServices": {
"95f60161f9d5483dbfe92a10d8795334": [
"PortForwarding"
      ]
    }
  },
"systemTags": [],
"userTags": []
}
```



> **注意:** 说明: 上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"networkServices":{"41083a0985973a62bf8e6086dff0a2df":["PortForwarding"]}}}' \
http://localhost:8080/zstack/v1/l3-networks/ae8e1e4d66003a08b748363b8ebb0be8/network-services
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| networkServices | Map | body(包含在params结构中) | 网络服务 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
AttachNetworkServiceToL3NetworkAction action = new AttachNetworkServiceToL3NetworkAction();
action.l3NetworkUuid = "e1a80b4d97ca442b8f313739de6d7997";
action.networkServices = [a3b86894e3b948288ccb1886a4084f03:[PortForwarding]];
action.sessionId = "4de1ca63ca1a4a0db7d799093b387c76";
AttachNetworkServiceToL3NetworkAction.Result res = action.call();
```

 Python SDK

```
AttachNetworkServiceToL3NetworkAction action = AttachNetworkServiceToL3NetworkAction()
action.l3NetworkUuid = "38daee20c0264e41b58ea573c261f439"
action.networkServices = [7fb4f50bf7c74c30951fb7adbb202a95:[PortForwarding]]
action.sessionId = "4be26def099940f0979b1afaf414bba6"
AttachNetworkServiceToL3NetworkAction.Result res = action.call()
```

---

#### 从三层网络卸载网络服务(DetachNetworkServiceFromL3Network)



##### API请求

 URLs

```
DELETE/v1/l3-networks/{l3NetworkUuid}/network-services?networkServices={networkServices}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 6c324aa381644b8b87d229ba3fdad834" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/0cf8b1d49cb34d9c8f3fb0f70a4ec20d/network-services?networkServices.fa376f5cad7c3ddb8ff4e8ae0430f8d4=PortForwarding&networkServices.fa376f5cad7c3ddb8ff4e8ae0430f8d4=EIP
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| networkServices | Map | body | 网络服务 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
DetachNetworkServiceFromL3NetworkAction action = new DetachNetworkServiceFromL3NetworkAction();
action.l3NetworkUuid = "ce1dedf370494cd4b49c1dd1c845c96b";
action.networkServices = [76b66ca373834d0e8f4011f84dbf6006:[PortForwarding, EIP]];
action.sessionId = "095d243ad49d4717b99b49c6151c25c8";
DetachNetworkServiceFromL3NetworkAction.Result res = action.call();
```

 Python SDK

```
DetachNetworkServiceFromL3NetworkAction action = DetachNetworkServiceFromL3NetworkAction()
action.l3NetworkUuid = "a679835ba20342c5809e1be8ddf5e5c8"
action.networkServices = [b78e8e4ca36b4eefa5c38140c7611ef3:[PortForwarding, EIP]]
action.sessionId = "73aa0dad7996453f80331b833df6f320"
DetachNetworkServiceFromL3NetworkAction.Result res = action.call()
```

---

#### 防火墙相关接口

---

#### 创建防火墙(CreateVpcFirewall)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vpcUuid": "bc370cafacc83fad8f3ad583dea8da12",
    "description": "example-des",
    "name": "example-name"
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
-X POST -d '{"params":{"vpcUuid":"bc370cafacc83fad8f3ad583dea8da12","description":"example-des","name":"example-name"}}' http://localhost:8080/zstack/v1/vpcfirewalls
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vpcUuid | String | body(包含在**params**结构中) | VPC路由器UUID |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "refs": [
      {
        "id": 1.0,
        "ruleSetUuid": "06fc56b0483a3bf487b9cdfeaa6c4be2",
        "l3NetworkUuid": "27e1a95342083ce4a790d4f9dcf7f9bd",
        "packetsForwardType": "in",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "description": "example-des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallInventory | 详情参考[inventory] | 3.6.0 |

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
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| refs | List | 详情参考[refs] | 3.6.0 |

 #refs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long | 防火墙规则序号 | 3.6.0 |
| ruleSetUuid | String | 防火墙规则集UUID | 3.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| vpcFirewallUuid | String | 防火墙UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| packetsForwardType | PacketsForwardType | 详情参考[packetsForwardType] | 3.6.0 |

 #packetsForwardType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| in | PacketsForwardType | 入方向 | 3.6.0 |
| out | PacketsForwardType | 出方向 | 3.6.0 |



##### SDK示例

 Java SDK

```
CreateVpcFirewallAction action = new CreateVpcFirewallAction();
action.vpcUuid = "bc370cafacc83fad8f3ad583dea8da12";
action.description = "example-des";
action.name = "example-name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVpcFirewallAction.Result res = action.call();
```

 Python SDK

```
CreateVpcFirewallAction action = CreateVpcFirewallAction()
action.vpcUuid = "bc370cafacc83fad8f3ad583dea8da12"
action.description = "example-des"
action.name = "example-name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVpcFirewallAction.Result res = action.call()
```

---

#### 查询防火墙(QueryVpcFirewall)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls
```


```
GET zstack/v1/vpcfirewalls/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/98631b6cb2b33384b780e1ef61aff0d0
```



可查询字段

运行CLI命令行工具，输入QueryVpcFirewall并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "name",
      "refs": [
        {
          "id": 1.0,
          "ruleSetUuid": "01a959eec095396eaed841c886219eec",
          "l3NetworkUuid": "76cbd34de351334bbd0f51ee0653d0ab",
          "packetsForwardType": "in",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "description": "example-des"
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
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| refs | List | 详情参考[refs] | 3.6.0 |

 #refs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 3.6.0 |
| ruleSetUuid | String |  | 3.6.0 |
| l3NetworkUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| packetsForwardType | PacketsForwardType | 详情参考[packetsForwardType] | 3.6.0 |

 #packetsForwardType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| in | PacketsForwardType |  | 3.6.0 |
| out | PacketsForwardType |  | 3.6.0 |
| local | PacketsForwardType |  | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryVpcFirewallAction action = new QueryVpcFirewallAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVpcFirewallAction.Result res = action.call();
```

 Python SDK

```
QueryVpcFirewallAction action = QueryVpcFirewallAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVpcFirewallAction.Result res = action.call()
```

---

#### 更新防火墙(UpdateVpcFirewall)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVpcFirewall": {
    "description": "example-des",
    "name": "example-name"
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
-X PUT -d '{"updateVpcFirewall":{"description":"example-des","name":"example-name"}}' http://localhost:8080/zstack/v1/vpcfirewalls/822689d1957d30378fe0c200df72f33a/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| description (可选) | String | body(包含在**updateVpcFirewall**结构中) | 资源的详细描述 |  | 3.6.0 |
| name (可选) | String | body(包含在**updateVpcFirewall**结构中) | 资源名称 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example-name",
    "refs": [
      {
        "id": 1.0,
        "ruleSetUuid": "b3074e9040ef3a2ea30d5843a85b3cdb",
        "l3NetworkUuid": "a53439b32bc133b2a95bd09c9a8c5b67",
        "packetsForwardType": "in",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "description": "example-des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallInventory | 详情参考[inventory] | 3.6.0 |

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
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| refs | List | 详情参考[refs] | 3.6.0 |

 #ruleSets

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| vpcFirewallUuid | String |  | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| isDefault | boolean |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| actionType | ActionType | 详情参考[actionType] | 3.6.0 |

 #actionType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #refs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 3.6.0 |
| ruleSetUuid | String |  | 3.6.0 |
| l3Uuid | String |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| packetsForwardType | PacketsForwardType | 详情参考[packetsForwardType] | 3.6.0 |

 #packetsForwardType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| in | PacketsForwardType |  | 3.6.0 |
| out | PacketsForwardType |  | 3.6.0 |
| local | PacketsForwardType |  | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdateVpcFirewallAction action = new UpdateVpcFirewallAction();
action.uuid = "822689d1957d30378fe0c200df72f33a";
action.description = "example-des";
action.name = "example-name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVpcFirewallAction.Result res = action.call();
```

 Python SDK

```
UpdateVpcFirewallAction action = UpdateVpcFirewallAction()
action.uuid = "822689d1957d30378fe0c200df72f33a"
action.description = "example-des"
action.name = "example-name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVpcFirewallAction.Result res = action.call()
```

---

#### 刷新防火墙配置(RefreshFirewall)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/refresh/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "refreshFirewall": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"refreshFirewall":{}}' http://localhost:8080/zstack/v1/vpcfirewalls/refresh/f461b936af043aa89aa2bdeb221085e7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "refs": [
      {
        "id": 1.0,
        "ruleSetUuid": "05cc1e225ef83107b6075d758c8dcee2",
        "l3NetworkUuid": "178e23cc9fdc3673b90ee258fe60395f",
        "packetsForwardType": "in",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "description": "example-des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallInventory | 详情参考[inventory] | 3.6.0 |

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
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| refs | List | 详情参考[refs] | 3.6.0 |

 #refs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 3.6.0 |
| ruleSetUuid | String |  | 3.6.0 |
| l3NetworkUuid | String |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| packetsForwardType | PacketsForwardType | 详情参考[packetsForwardType] | 3.6.0 |

 #packetsForwardType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| in | PacketsForwardType |  | 3.6.0 |
| out | PacketsForwardType |  | 3.6.0 |
| local | PacketsForwardType |  | 3.6.0 |



##### SDK示例

 Java SDK

```
RefreshFirewallAction action = new RefreshFirewallAction();
action.uuid = "f461b936af043aa89aa2bdeb221085e7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RefreshFirewallAction.Result res = action.call();
```

 Python SDK

```
RefreshFirewallAction action = RefreshFirewallAction()
action.uuid = "f461b936af043aa89aa2bdeb221085e7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RefreshFirewallAction.Result res = action.call()
```

---

#### 删除防火墙(DeleteFirewall)



##### API请求

 URLs

```
DELETE zstack/v1/vpcfirewalls/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vpcfirewalls/09b37275fd073e4db292628ea260dd20?deleteMode=Permissive

```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.0.0 |
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
DeleteFirewallAction action = new DeleteFirewallAction();
action.uuid = "09b37275fd073e4db292628ea260dd20";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFirewallAction.Result res = action.call();
```

 Python SDK

```
DeleteFirewallAction action = DeleteFirewallAction()
action.uuid = "09b37275fd073e4db292628ea260dd20"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFirewallAction.Result res = action.call()
```

---

#### 创建防火墙规则集(CreateFirewallRuleSet)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/ruleSets
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "name",
    "actionType": "drop",
    "description": "example-des"
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
-X POST -d '{"params":{"name":"name","vpcFirewallUuid":"e9a77f42bdbb3b5692012c6007a5893a","actionType":"drop","description":"example-des"}}' http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.6.0 |
| actionType (可选) | String | body(包含在**params**结构中) | 动作 | drop accept reject | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "actionType": "drop",
    "description": "example-des",
    "enableDefaultLog": false,
    "isDefault": false,
    "isApplied": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallRuleSetInventory | 详情参考[inventory] | 3.6.0 |

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
| isDefault | boolean |  | 3.6.0 |
| isApplied | boolean |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| actionType | ActionType | 详情参考[actionType] | 3.6.0 |
| rules | List | 详情参考[rules] | 3.6.0 |

 #actionType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isDefault | boolean | 是否为系统规则 | 3.6.0 |
| isApplied | boolean | 是否已在使用 | 4.0.0 |
| expired | boolean | 是否是过期规则 | 4.0.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
CreateFirewallRuleSetAction action = new CreateFirewallRuleSetAction();
action.name = "name";
action.vpcFirewallUuid = "e9a77f42bdbb3b5692012c6007a5893a";
action.actionType = "drop";
action.description = "example-des";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFirewallRuleSetAction.Result res = action.call();
```

 Python SDK

```
CreateFirewallRuleSetAction action = CreateFirewallRuleSetAction()
action.name = "name"
action.vpcFirewallUuid = "e9a77f42bdbb3b5692012c6007a5893a"
action.actionType = "drop"
action.description = "example-des"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFirewallRuleSetAction.Result res = action.call()
```

---

#### 查询防火墙规则集(QueryFirewallRuleSet)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls/ruleSets
```


```
GET zstack/v1/vpcfirewalls/ruleSets/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets/a26016d5c50a3908a0692d57d033c154
```



可查询字段

运行CLI命令行工具，输入QueryFirewallRuleSet并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "name",
      "actionType": "drop",
      "description": "example-des",
      "enableDefaultLog": false,
      "isDefault": false,
      "isApplied": false
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
| isDefault | boolean |  | 3.6.0 |
| isApplied | boolean |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| actionType | ActionType | 详情参考[actionType] | 3.6.0 |
| rules | List | 详情参考[rules] | 3.6.0 |

 #actionType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isDefault | boolean | 是否为系统规则 | 3.6.0 |
| isApplied | boolean | 是否已在使用 | 4.0.0 |
| expired | boolean | 是否是过期规则 | 4.0.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryFirewallRuleSetAction action = new QueryFirewallRuleSetAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFirewallRuleSetAction.Result res = action.call();
```

 Python SDK

```
QueryFirewallRuleSetAction action = QueryFirewallRuleSetAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFirewallRuleSetAction.Result res = action.call()
```

---

#### 更新防火墙规则集(UpdateFirewallRuleSet)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/ruleSets/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateFirewallRuleSet": {
    "description": "example-des",
    "actionType": "drop"
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
-X PUT -d '{"updateFirewallRuleSet":{"description":"example-des","actionType":"drop"}}' http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets/6b93eca80a9032c3a567b2e3af0f03db/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| name (可选) | String | body(包含在**updateFirewallRuleSet**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**updateFirewallRuleSet**结构中) | 资源的详细描述 |  | 3.6.0 |
| actionType (可选) | String | body(包含在**updateFirewallRuleSet**结构中) |  | drop accept reject | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "actionType": "drop",
    "description": "example-des",
    "enableDefaultLog": false,
    "isDefault": false,
    "isApplied": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallRuleSetInventory | 详情参考[inventory] | 3.6.0 |

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
| isDefault | boolean |  | 3.6.0 |
| isApplied | boolean |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| actionType | ActionType | 详情参考[actionType] | 3.6.0 |
| rules | List | See rules | 3.6.0 |

 #actionType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isApplied | boolean | 是否已在使用 | 4.0.0 |
| expired | boolean | 是否是过期规则 | 4.0.0 |
| isDefault | boolean | 是否为系统规则 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdateFirewallRuleSetAction action = new UpdateFirewallRuleSetAction();
action.uuid = "6b93eca80a9032c3a567b2e3af0f03db";
action.description = "example-des";
action.actionType = "drop";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateFirewallRuleSetAction.Result res = action.call();
```

 Python SDK

```
UpdateFirewallRuleSetAction action = UpdateFirewallRuleSetAction()
action.uuid = "6b93eca80a9032c3a567b2e3af0f03db"
action.description = "example-des"
action.actionType = "drop"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateFirewallRuleSetAction.Result res = action.call()
```

---

#### 删除防火墙规则集(DeleteFirewallRuleSet)



##### API请求

 URLs

```
DELETE zstack/v1/vpcfirewalls/ruleSets/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets/62b6ef32f6573f01929c5020d976bd66?deleteMode=Permissive

```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.0.0 |
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
DeleteFirewallRuleSetAction action = new DeleteFirewallRuleSetAction();
action.uuid = "62b6ef32f6573f01929c5020d976bd66";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFirewallRuleSetAction.Result res = action.call();
```

 Python SDK

```
DeleteFirewallRuleSetAction action = DeleteFirewallRuleSetAction()
action.uuid = "62b6ef32f6573f01929c5020d976bd66"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFirewallRuleSetAction.Result res = action.call()
```

---

#### 网络加载防火墙规则集(AttachFirewallRuleSetToL3)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/ruleSets/{ruleSetUuid}/l3networks/{l3Uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vpcFirewallUuid": "d5a0a7ce8bdf315a87189bb3f1c12f98",
    "forward": "in"
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
-X POST -d '{"params":{"vpcFirewallUuid":"d5a0a7ce8bdf315a87189bb3f1c12f98","forward":"in"}}' http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets/c9ada0bdf0ec3b0a87e534030e4d9b8c/l3networks/b552d497789f3609a764e03fbdf535ad
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vpcFirewallUuid | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| l3Uuid | String | url |  |  | 3.6.0 |
| forward | String | body(包含在**params**结构中) |  | in out | 3.6.0 |
| ruleSetUuid | String | url |  |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "id": 1.0,
    "ruleSetUuid": "91e9fed42a113c0395a81920c4179a43",
    "l3NetworkUuid": "ad2bbeb82973334fa0ab243f52088fea",
    "packetsForwardType": "in",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallRuleSetL3RefInventory | 详情参考[inventory] | 3.6.0 |

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
| id | long |  | 3.6.0 |
| ruleSetUuid | String |  | 3.6.0 |
| l3NetworkUuid | String |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| packetsForwardType | PacketsForwardType | 详情参考[packetsForwardType] | 3.6.0 |

 #packetsForwardType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| in | PacketsForwardType |  | 3.6.0 |
| out | PacketsForwardType |  | 3.6.0 |
| local | PacketsForwardType |  | 3.6.0 |



##### SDK示例

 Java SDK

```
AttachFirewallRuleSetToL3Action action = new AttachFirewallRuleSetToL3Action();
action.vpcFirewallUuid = "d5a0a7ce8bdf315a87189bb3f1c12f98";
action.l3Uuid = "b552d497789f3609a764e03fbdf535ad";
action.forward = "in";
action.ruleSetUuid = "c9ada0bdf0ec3b0a87e534030e4d9b8c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachFirewallRuleSetToL3Action.Result res = action.call();
```

 Python SDK

```
AttachFirewallRuleSetToL3Action action = AttachFirewallRuleSetToL3Action()
action.vpcFirewallUuid = "d5a0a7ce8bdf315a87189bb3f1c12f98"
action.l3Uuid = "b552d497789f3609a764e03fbdf535ad"
action.forward = "in"
action.ruleSetUuid = "c9ada0bdf0ec3b0a87e534030e4d9b8c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachFirewallRuleSetToL3Action.Result res = action.call()
```

---

#### 网络卸载防火墙规则集(DetachFirewallRuleSetFromL3)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/l3networks/{l3Uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vpcFirewallUuid": "582cdc20cf313b8696da15f67f71c38f",
    "forward": "in"
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
-X POST -d '{"params":{"vpcFirewallUuid":"582cdc20cf313b8696da15f67f71c38f","forward":"in"}}' http://localhost:8080/zstack/v1/vpcfirewalls/l3networks/912cc5a14b193c2fa76290eac7046230
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vpcFirewallUuid | String | body(包含在**params**结构中) | 防火墙uuid |  | 3.6.0 |
| l3Uuid | String | url | 三层网络uuid |  | 4.0.0 |
| forward | String | body(包含在**params**结构中) | 方向 | in out | 4.0.0 |
| ruleSetUuid | String | url |  |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用标签 |  | 3.6.0 |



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
DetachFirewallRuleSetFromL3Action action = new DetachFirewallRuleSetFromL3Action();
action.vpcFirewallUuid = "582cdc20cf313b8696da15f67f71c38f";
action.l3Uuid = "912cc5a14b193c2fa76290eac7046230";
action.forward = "in";
action.ruleSetUuid = "a54a917869733b5590053eb3f4505089";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachFirewallRuleSetFromL3Action.Result res = action.call();
```

 Python SDK

```
DetachFirewallRuleSetFromL3Action action = DetachFirewallRuleSetFromL3Action()
action.vpcFirewallUuid = "582cdc20cf313b8696da15f67f71c38f"
action.l3Uuid = "912cc5a14b193c2fa76290eac7046230"
action.forward = "in"
action.ruleSetUuid = "a54a917869733b5590053eb3f4505089"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachFirewallRuleSetFromL3Action.Result res = action.call()
```

---

#### 查询防火墙规则集与三层网络关联关系(QueryFirewallRuleSetL3Ref)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls/l3networks/rulesets/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/l3networks/rulesets/refs
```



可查询字段

运行CLI命令行工具，输入QueryFirewallRuleSetL3Ref并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "ruleSetUuid": "f4575926f7a13c82a0d610dfac995ffa",
      "l3NetworkUuid": "85044a1e0ccb3c859c0b024e967fb191",
      "packetsForwardType": "in",
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
| id | long |  | 3.6.0 |
| ruleSetUuid | String |  | 3.6.0 |
| l3NetworkUuid | String |  | 3.6.0 |
| vpcFirewallUuid | String |  | 3.6 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| packetsForwardType | PacketsForwardType | 详情参考[packetsForwardType] | 3.6.0 |

 #packetsForwardType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| in | PacketsForwardType |  | 3.6.0 |
| out | PacketsForwardType |  | 3.6.0 |
| local | PacketsForwardType |  | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryFirewallRuleSetL3RefAction action = new QueryFirewallRuleSetL3RefAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFirewallRuleSetL3RefAction.Result res = action.call();
```

 Python SDK

```
QueryFirewallRuleSetL3RefAction action = QueryFirewallRuleSetL3RefAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFirewallRuleSetL3RefAction.Result res = action.call()
```

---

#### 创建防火墙规则(CreateFirewallRule)



##### API请求

 URLs

```
POST /v1/vpcfirewalls/rules
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ruleSetUuid": "0079c9339a7f32d69c289119ff223d81",
    "action": "accept",
    "protocol": "tcp",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "ruleNumber": 1001.0,
    "enableLog": false,
    "state": "disable",
    "description": "example rule des"
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
-X POST -d '{"params":{"vpcFirewallUuid":"bd79e42aa97f360585e91a8defa639e2","ruleSetUuid":"0e453dd8d6543540ac4ae293806c9d04","action":"accept","protocol":"tcp","destPort":"22","sourcePort":"22","sourceIp":"192.168.1.2","destIp":"192.168.1.1","allowStates":"invalid,new","tcpFlag":"SYN","icmpTypeName":"echo-reply","ruleNumber":1001.0,"enableLog":false,"state":"disable","description":"example rule des"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules
```

 参数列表
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleSetUuid | String | body(包含在**params**结构中) | 规则集uuid |  | 3.6.0 |
| action | String | body(包含在**params**结构中) | 动作 | drop accept reject | 3.6.0 |
| protocol (可选) | String | body(包含在**params**结构中) | 协议 |  | 3.6.0 |
| destPort (可选) | String | body(包含在**params**结构中) | 目标端口 |  | 3.6.0 |
| sourcePort (可选) | String | body(包含在**params**结构中) | 源端口 |  | 3.6.0 |
| sourceIp (可选) | String | body(包含在`params`结构中) | 源ip |  | 3.6.0 |
| destIp (可选) | String | body(包含在**params**结构中) | 目标ip |  | 3.6.0 |
| allowStates (可选) | String | body(包含在**params**结构中) | 允许状态 |  | 3.6.0 |
| tcpFlag (可选) | String | body(包含在**params**结构中) | tcp flag |  | 3.6.0 |
| icmpTypeName (可选) | String | body(包含在**params**结构中) | icmpType |  | 3.6.0 |
| ruleNumber | Integer | body(包含在**params**结构中) | 优先级 |  | 3.6.0 |
| enableLog (可选) | boolean | body(包含在`params`结构中) | 是否开启日志 |  | 3.6.0 |
| state | String | body(包含在**params**结构中) | 状态 | enable disable | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "ruleSetUuid": "34db2df69d593f0b893a2cc9035bd2f3",
    "action": "accept",
    "protocol": "TCP",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "ruleNumber": 1001.0,
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "enableLog": false,
    "isApplied": true,
    "expired": false,
    "state": "disable",
    "isDefault": false,
    "description": "example rule des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallRuleInventory | 详情参考[inventory] | 3.6.0 |

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
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isApplied | boolean | 是否为系统规则 | 4.0.0 |
| expired | boolean | 是否已在使用 | 4.0.0 |
| isDefault | boolean | 是否是过期规则 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
CreateFirewallRuleAction action = new CreateFirewallRuleAction();
action.vpcFirewallUuid = "bd79e42aa97f360585e91a8defa639e2";
action.ruleSetUuid = "0e453dd8d6543540ac4ae293806c9d04";
action.action = "accept";
action.protocol = "tcp";
action.destPort = "22";
action.sourcePort = "22";
action.sourceIp = "192.168.1.2";
action.destIp = "192.168.1.1";
action.allowStates = "invalid,new";
action.tcpFlag = "SYN";
action.icmpTypeName = "echo-reply";
action.ruleNumber = 1001.0;
action.enableLog = false;
action.state = "disable";
action.description = "example rule des";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFirewallRuleAction.Result res = action.call();
```

 Python SDK

```
CreateFirewallRuleAction action = CreateFirewallRuleAction()
action.vpcFirewallUuid = "bd79e42aa97f360585e91a8defa639e2"
action.ruleSetUuid = "0e453dd8d6543540ac4ae293806c9d04"
action.action = "accept"
action.protocol = "tcp"
action.destPort = "22"
action.sourcePort = "22"
action.sourceIp = "192.168.1.2"
action.destIp = "192.168.1.1"
action.allowStates = "invalid,new"
action.tcpFlag = "SYN"
action.icmpTypeName = "echo-reply"
action.ruleNumber = 1001.0
action.enableLog = false
action.state = "disable"
action.description = "example rule des"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFirewallRuleAction.Result res = action.call()
```

---

#### 通过文件创建防火墙规则(CreateFirewallRuleFromConfigFile)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/rules/from-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ruleInfo": "[{\"ruleNumber\":1004,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ICMP\",\"tcpFlag\":null,\"icmpTypeName\":\"echo-reply\",\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.41\",\"destIp\":\"192.168.0.50\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1003,\"action\":\"reject\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"UDP\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":\"77\",\"destPort\":\"88\",\"sourceIp\":\"192.168.0.31\",\"destIp\":\"192.168.0.40\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1002,\"action\":\"drop\",\"allowStates\":\"new,invalid,related\",\"protocol\":\"TCP\",\"tcpFlag\":\"SYN,ACK\",\"icmpTypeName\":null,\"sourcePort\":\"55\",\"destPort\":\"66\",\"sourceIp\":\"192.168.0.21\",\"destIp\":\"192.168.0.30\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1001,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ALL\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.10\",\"destIp\":\"192.168.0.20\",\"description\":null,\"state\":\"enable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"}]"
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
-X PUT -d '{"params":{"ruleInfo":"[{\"ruleNumber\":1004,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ICMP\",\"tcpFlag\":null,\"icmpTypeName\":\"echo-reply\",\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.41\",\"destIp\":\"192.168.0.50\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1003,\"action\":\"reject\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"UDP\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":\"77\",\"destPort\":\"88\",\"sourceIp\":\"192.168.0.31\",\"destIp\":\"192.168.0.40\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1002,\"action\":\"drop\",\"allowStates\":\"new,invalid,related\",\"protocol\":\"TCP\",\"tcpFlag\":\"SYN,ACK\",\"icmpTypeName\":null,\"sourcePort\":\"55\",\"destPort\":\"66\",\"sourceIp\":\"192.168.0.21\",\"destIp\":\"192.168.0.30\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1001,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ALL\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.10\",\"destIp\":\"192.168.0.20\",\"description\":null,\"state\":\"enable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"}]"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules/from-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleInfo | String | body(包含在**params**结构中) | 防火墙规则信息 |  | 4.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.4.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.4.0 |
| systemTags (可选) | List | body |  |  | 4.4.0 |
| userTags (可选) | List | body |  |  | 4.4.0 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "name": "name",
      "actionType": "drop",
      "description": "example-des",
      "enableDefaultLog": false,
      "isDefault": false,
      "isApplied": true
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.0 |
| inventory | VpcFirewallRuleSetInventory | 详情参考[inventory] | 4.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.0 |
| description | String | 错误的概要描述 | 4.4.0 |
| details | String | 错误的详细信息 | 4.4.0 |
| elaboration | String | 保留字段，默认为null | 4.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.0 |
| name | String | 资源名称 | 4.4.0 |
| description | String | 资源的详细描述 | 4.4.0 |
| isDefault | boolean |  | 4.4.0 |
| isApplied | boolean |  | 4.4.0 |
| createDate | Timestamp | 创建时间 | 4.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.0 |
| actionType | ActionType | 详情参考[actionType] | 4.4.0 |

 #actionType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 4.4.0 |
| reject | ActionType |  | 4.4.0 |
| accept | ActionType |  | 4.4.0 |



##### SDK示例

 Java SDK

```
CreateFirewallRuleFromConfigFileAction action = new CreateFirewallRuleFromConfigFileAction();
action.ruleInfo = "[{"ruleNumber":1004,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ICMP","tcpFlag":null,"icmpTypeName":"echo-reply","sourcePort":null,"destPort":null,"sourceIp":"192.168.0.41","destIp":"192.168.0.50","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1003,"action":"reject","allowStates":"new,established,invalid,related","protocol":"UDP","tcpFlag":null,"icmpTypeName":null,"sourcePort":"77","destPort":"88","sourceIp":"192.168.0.31","destIp":"192.168.0.40","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1002,"action":"drop","allowStates":"new,invalid,related","protocol":"TCP","tcpFlag":"SYN,ACK","icmpTypeName":null,"sourcePort":"55","destPort":"66","sourceIp":"192.168.0.21","destIp":"192.168.0.30","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1001,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ALL","tcpFlag":null,"icmpTypeName":null,"sourcePort":null,"destPort":null,"sourceIp":"192.168.0.10","destIp":"192.168.0.20","description":null,"state":"enable", "ruleSetUuid": "${defaultRuleSet.uuid}"}]";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFirewallRuleFromConfigFileAction.Result res = action.call();
```

 Python SDK

```
CreateFirewallRuleFromConfigFileAction action = CreateFirewallRuleFromConfigFileAction()
action.ruleInfo = "[{"ruleNumber":1004,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ICMP","tcpFlag":null,"icmpTypeName":"echo-reply","sourcePort":null,"destPort":null,"sourceIp":"192.168.0.41","destIp":"192.168.0.50","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1003,"action":"reject","allowStates":"new,established,invalid,related","protocol":"UDP","tcpFlag":null,"icmpTypeName":null,"sourcePort":"77","destPort":"88","sourceIp":"192.168.0.31","destIp":"192.168.0.40","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1002,"action":"drop","allowStates":"new,invalid,related","protocol":"TCP","tcpFlag":"SYN,ACK","icmpTypeName":null,"sourcePort":"55","destPort":"66","sourceIp":"192.168.0.21","destIp":"192.168.0.30","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1001,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ALL","tcpFlag":null,"icmpTypeName":null,"sourcePort":null,"destPort":null,"sourceIp":"192.168.0.10","destIp":"192.168.0.20","description":null,"state":"enable", "ruleSetUuid": "${defaultRuleSet.uuid}"}]"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFirewallRuleFromConfigFileAction.Result res = action.call()
```

---

#### 查询防火墙规则(QueryFirewallRule)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls/rules
```


```
GET zstack/v1/vpcfirewalls/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/rules
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/rules/ace430872549342fbaca32f1d4c333e1
```



可查询字段

运行CLI命令行工具，输入QueryFirewallRule并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "ruleSetUuid": "9fe12b6d1b3d38dbab13405722ccf264",
      "action": "accept",
      "protocol": "TCP",
      "destPort": "22",
      "sourcePort": "22",
      "sourceIp": "192.168.1.2",
      "destIp": "192.168.1.1",
      "ruleNumber": 1001.0,
      "allowStates": "invalid,new",
      "tcpFlag": "SYN",
      "icmpTypeName": "echo-reply",
      "enableLog": false,
      "isApplied": true,
      "expired": false,
      "state": "disable",
      "isDefault": false,
      "description": "example rule des"
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
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isApplied | boolean | 是否为系统规则 | 4.0.0 |
| expired | boolean | 是否已在使用 | 4.0.0 |
| isDefault | boolean | 是否是过期规则 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryFirewallRuleAction action = new QueryFirewallRuleAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFirewallRuleAction.Result res = action.call();
```

 Python SDK

```
QueryFirewallRuleAction action = QueryFirewallRuleAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFirewallRuleAction.Result res = action.call()
```

---

#### 更新防火墙规则(UpdateFirewallRule)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/rules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateFirewallRule": {
    "ruleSetUuid": "c7b605d7c7e037f8b4df43bfe5a26d0f",
    "action": "accept",
    "protocol": "tcp",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "ruleNumber": 1001.0,
    "enableLog": false,
    "state": "disable",
    "description": "example rule des"
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
-X PUT -d '{"updateFirewallRule":{"vpcFirewallUuid":"181da73e752432b283d3096bb29afb59","ruleSetUuid":"cb6db506c523354282aecf56acd4b78d","action":"accept","protocol":"tcp","destPort":"22","sourcePort":"22","sourceIp":"192.168.1.2","destIp":"192.168.1.1","allowStates":"invalid,new","tcpFlag":"SYN","icmpTypeName":"echo-reply","ruleNumber":1001.0,"enableLog":false,"state":"disable","description":"example rule des"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules/7e9bd2ad1f48320d8782d737b262abb1/actions
```

 参数列表
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleSetUuid | String | body(包含在**updateFirewallRule**结构中) | 规则集uuid |  | 4.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| action | String | body(包含在**updateFirewallRule**结构中) | 动作 | drop reject accept | 3.6.0 |
| protocol (可选) | String | body(包含在**updateFirewallRule**结构中) | 协议 |  | 3.6.0 |
| destPort (可选) | String | body(包含在**updateFirewallRule**结构中) | 目标端口 |  | 3.6.0 |
| sourcePort (可选) | String | body(包含在**updateFirewallRule**结构中) | 源端口 |  | 3.6.0 |
| sourceIp (可选) | String | body(包含在**updateFirewallRule**结构中) | 源ip |  | 3.6.0 |
| destIp (可选) | String | body(包含在**updateFirewallRule**结构中) | 目标ip |  | 3.6.0 |
| allowStates (可选) | String | body(包含在**updateFirewallRule**结构中) | 允许状态 |  | 3.6.0 |
| tcpFlag (可选) | String | body(包含在**updateFirewallRule**结构中) | tcp flag |  | 3.6.0 |
| icmpTypeName (可选) | String | body(包含在**updateFirewallRule**结构中) | icmpType |  | 3.6.0 |
| ruleNumber | Integer | body(包含在**updateFirewallRule**结构中) | 优先级 |  | 3.6.0 |
| enableLog (可选) | boolean | body(包含在**updateFirewallRule**结构中) | 是否开启日志 |  | 3.6.0 |
| state | String | body(包含在**updateFirewallRule**结构中) | 状态 | enable disable | 3.6.0 |
| description (可选) | String | body(包含在**updateFirewallRule**结构中) | 资源的详细描述 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 标签UUID列表 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "ruleSetUuid": "52099ab881ba30a09589fa0040a1b6a2",
    "action": "accept",
    "protocol": "TCP",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "ruleNumber": 1001.0,
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "enableLog": false,
    "isApplied": true,
    "expired": false,
    "state": "disable",
    "isDefault": false,
    "description": "example rule des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallRuleInventory | 详情参考[inventory] | 3.6.0 |

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
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isApplied | boolean | 是否已在使用 | 4.0.0 |
| expired | boolean | 是否是过期规则 | 4.0.0 |
| isDefault | boolean | 是否为系统规则 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdateFirewallRuleAction action = new UpdateFirewallRuleAction();
action.ruleSetUuid = "c7b605d7c7e037f8b4df43bfe5a26d0f";
action.uuid = "7e9bd2ad1f48320d8782d737b262abb1";
action.action = "accept";
action.protocol = "tcp";
action.destPort = "22";
action.sourcePort = "22";
action.sourceIp = "192.168.1.2";
action.destIp = "192.168.1.1";
action.allowStates = "invalid,new";
action.tcpFlag = "SYN";
action.icmpTypeName = "echo-reply";
action.ruleNumber = 1001.0;
action.enableLog = false;
action.state = "disable";
action.description = "example rule des";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateFirewallRuleAction.Result res = action.call();
```

 Python SDK

```
UpdateFirewallRuleAction action = UpdateFirewallRuleAction()
action.ruleSetUuid = "c7b605d7c7e037f8b4df43bfe5a26d0f"
action.uuid = "7e9bd2ad1f48320d8782d737b262abb1"
action.action = "accept"
action.protocol = "tcp"
action.destPort = "22"
action.sourcePort = "22"
action.sourceIp = "192.168.1.2"
action.destIp = "192.168.1.1"
action.allowStates = "invalid,new"
action.tcpFlag = "SYN"
action.icmpTypeName = "echo-reply"
action.ruleNumber = 1001.0
action.enableLog = false
action.state = "disable"
action.description = "example rule des"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateFirewallRuleAction.Result res = action.call()
```

---

#### 删除防火墙规则(DeleteFirewallRule)



##### API请求

 URLs

```
DELETE zstack/v1/vpcfirewalls/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vpcfirewalls/rules/6238605440b535dd9f7d5d033a732659?deleteMode=Permissive
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.0.0 |
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
DeleteFirewallRuleAction action = new DeleteFirewallRuleAction();
action.uuid = "6238605440b535dd9f7d5d033a732659";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFirewallRuleAction.Result res = action.call();
```

 Python SDK

```
DeleteFirewallRuleAction action = DeleteFirewallRuleAction()
action.uuid = "6238605440b535dd9f7d5d033a732659"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFirewallRuleAction.Result res = action.call()
```

---

#### 检查添加防火墙规则文件合法性(CheckFirewallRuleConfigFile)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/rules/from-file/check
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ruleInfo": "[{\"ruleNumber\":1004,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ICMP\",\"tcpFlag\":null,\"icmpTypeName\":\"echo-reply\",\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.41\",\"destIp\":\"192.168.0.50\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1003,\"action\":\"reject\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"UDP\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":\"77\",\"destPort\":\"88\",\"sourceIp\":\"192.168.0.31\",\"destIp\":\"192.168.0.40\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1002,\"action\":\"drop\",\"allowStates\":\"new,invalid,related\",\"protocol\":\"TCP\",\"tcpFlag\":\"SYN,ACK\",\"icmpTypeName\":null,\"sourcePort\":\"55\",\"destPort\":\"66\",\"sourceIp\":\"192.168.0.21\",\"destIp\":\"192.168.0.30\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1001,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ALL\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.10\",\"destIp\":\"192.168.0.20\",\"description\":null,\"state\":\"enable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"}]"
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
-X PUT -d '{"params":{"ruleInfo":"[{\"ruleNumber\":1004,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ICMP\",\"tcpFlag\":null,\"icmpTypeName\":\"echo-reply\",\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.41\",\"destIp\":\"192.168.0.50\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1003,\"action\":\"reject\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"UDP\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":\"77\",\"destPort\":\"88\",\"sourceIp\":\"192.168.0.31\",\"destIp\":\"192.168.0.40\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1002,\"action\":\"drop\",\"allowStates\":\"new,invalid,related\",\"protocol\":\"TCP\",\"tcpFlag\":\"SYN,ACK\",\"icmpTypeName\":null,\"sourcePort\":\"55\",\"destPort\":\"66\",\"sourceIp\":\"192.168.0.21\",\"destIp\":\"192.168.0.30\",\"description\":null,\"state\":\"disable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"},{\"ruleNumber\":1001,\"action\":\"accept\",\"allowStates\":\"new,established,invalid,related\",\"protocol\":\"ALL\",\"tcpFlag\":null,\"icmpTypeName\":null,\"sourcePort\":null,\"destPort\":null,\"sourceIp\":\"192.168.0.10\",\"destIp\":\"192.168.0.20\",\"description\":null,\"state\":\"enable\", \"ruleSetUuid\": \"${defaultRuleSet.uuid}\"}]"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules/from-file/check
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleInfo | String | body(包含在**params**结构中) | 防火墙规则信息 |  | 4.4.0 |
| systemTags (可选) | List | body |  |  | 4.4.0 |
| userTags (可选) | List | body |  |  | 4.4.0 |



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
CheckFirewallRuleConfigFileAction action = new CheckFirewallRuleConfigFileAction();
action.ruleInfo = "[{"ruleNumber":1004,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ICMP","tcpFlag":null,"icmpTypeName":"echo-reply","sourcePort":null,"destPort":null,"sourceIp":"192.168.0.41","destIp":"192.168.0.50","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1003,"action":"reject","allowStates":"new,established,invalid,related","protocol":"UDP","tcpFlag":null,"icmpTypeName":null,"sourcePort":"77","destPort":"88","sourceIp":"192.168.0.31","destIp":"192.168.0.40","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1002,"action":"drop","allowStates":"new,invalid,related","protocol":"TCP","tcpFlag":"SYN,ACK","icmpTypeName":null,"sourcePort":"55","destPort":"66","sourceIp":"192.168.0.21","destIp":"192.168.0.30","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1001,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ALL","tcpFlag":null,"icmpTypeName":null,"sourcePort":null,"destPort":null,"sourceIp":"192.168.0.10","destIp":"192.168.0.20","description":null,"state":"enable", "ruleSetUuid": "${defaultRuleSet.uuid}"}]";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckFirewallRuleConfigFileAction.Result res = action.call();
```

 Python SDK

```
CheckFirewallRuleConfigFileAction action = CheckFirewallRuleConfigFileAction()
action.ruleInfo = "[{"ruleNumber":1004,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ICMP","tcpFlag":null,"icmpTypeName":"echo-reply","sourcePort":null,"destPort":null,"sourceIp":"192.168.0.41","destIp":"192.168.0.50","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1003,"action":"reject","allowStates":"new,established,invalid,related","protocol":"UDP","tcpFlag":null,"icmpTypeName":null,"sourcePort":"77","destPort":"88","sourceIp":"192.168.0.31","destIp":"192.168.0.40","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1002,"action":"drop","allowStates":"new,invalid,related","protocol":"TCP","tcpFlag":"SYN,ACK","icmpTypeName":null,"sourcePort":"55","destPort":"66","sourceIp":"192.168.0.21","destIp":"192.168.0.30","description":null,"state":"disable", "ruleSetUuid": "${defaultRuleSet.uuid}"},{"ruleNumber":1001,"action":"accept","allowStates":"new,established,invalid,related","protocol":"ALL","tcpFlag":null,"icmpTypeName":null,"sourcePort":null,"destPort":null,"sourceIp":"192.168.0.10","destIp":"192.168.0.20","description":null,"state":"enable", "ruleSetUuid": "${defaultRuleSet.uuid}"}]"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckFirewallRuleConfigFileAction.Result res = action.call()
```

---

#### 更改防火墙规则状态(ChangeFirewallRuleState)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/rules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeFirewallRuleState": {
    "state": "disable"
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
-X PUT -d '{"changeFirewallRuleState":{"state":"disable"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules/4eef3024e5bd36f38be22b5af9807b20/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| state | String | body(包含在**changeFirewallRuleState**结构中) | 状态 | enable disable | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "ruleSetUuid": "387ccd99cb2b3374a24f86108c3b8653",
    "action": "accept",
    "protocol": "TCP",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "ruleNumber": 1001.0,
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "enableLog": false,
    "isApplied": true,
    "expired": false,
    "isDefault": false,
    "description": "example rule des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VpcFirewallRuleInventory | 详情参考[inventory] | 3.6.0 |

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
| ruleSetUuid | String | 防火墙规则集uuid | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destIp | String | 目的ip | 3.6.0 |
| ruleNumber | Integer | 优先级 | 3.6.0 |
| allowStates | String | 检测报文状态 | 3.6.0 |
| tcpFlag | String | tcpFlag | 3.6.0 |
| icmpTypeName | String | icmpType | 3.6.0 |
| isDefault | boolean | 是否为系统规则 | 3.6.0 |
| isApplied | boolean | 是否已在使用 | 4.0.0 |
| expired | boolean | 是否是过期规则 | 4.0.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| action | ActionType | 详情参考[action] | 3.6.0 |
| protocol | ProtocolType | 详情参考[protocol] | 3.6.0 |
| state | FirewallRuleState | 详情参考[state] | 3.6.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 3.6.0 |
| reject | ActionType |  | 3.6.0 |
| accept | ActionType |  | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 3.6.0 |
| all | ProtocolType |  | 3.6.0 |
| ah | ProtocolType |  | 3.6.0 |
| ax.25 | ProtocolType |  | 3.6.0 |
| dccp | ProtocolType |  | 3.6.0 |
| ddp | ProtocolType |  | 3.6.0 |
| egp | ProtocolType |  | 3.6.0 |
| eigrp | ProtocolType |  | 3.6.0 |
| encap | ProtocolType |  | 3.6.0 |
| esp | ProtocolType |  | 3.6.0 |
| etherip | ProtocolType |  | 3.6.0 |
| fc | ProtocolType |  | 3.6.0 |
| ggp | ProtocolType |  | 3.6.0 |
| gre | ProtocolType |  | 3.6.0 |
| hip | ProtocolType |  | 3.6.0 |
| hmp | ProtocolType |  | 3.6.0 |
| icmp | ProtocolType |  | 3.6.0 |
| ipdr-cmtp | ProtocolType |  | 3.6.0 |
| idpr | ProtocolType |  | 3.6.0 |
| igmp | ProtocolType |  | 3.6.0 |
| igp | ProtocolType |  | 3.6.0 |
| ip | ProtocolType |  | 3.6.0 |
| ipcomp | ProtocolType |  | 3.6.0 |
| ipencap | ProtocolType |  | 3.6.0 |
| ipip | ProtocolType |  | 3.6.0 |
| isis | ProtocolType |  | 3.6.0 |
| iso-tp4 | ProtocolType |  | 3.6.0 |
| l2tp | ProtocolType |  | 3.6.0 |
| manet | ProtocolType |  | 3.6.0 |
| mpls-in-ip | ProtocolType |  | 3.6.0 |
| ospf | ProtocolType |  | 3.6.0 |
| pim | ProtocolType |  | 3.6.0 |
| pup | ProtocolType |  | 3.6.0 |
| rdp | ProtocolType |  | 3.6.0 |
| rohc | ProtocolType |  | 3.6.0 |
| rspf | ProtocolType |  | 3.6.0 |
| rsvp | ProtocolType |  | 3.6.0 |
| sctp | ProtocolType |  | 3.6.0 |
| skip | ProtocolType |  | 3.6.0 |
| st | ProtocolType |  | 3.6.0 |
| tcp | ProtocolType |  | 3.6.0 |
| udp | ProtocolType |  | 3.6.0 |
| udplite | ProtocolType |  | 3.6.0 |
| vmtp | ProtocolType |  | 3.6.0 |
| vrrp | ProtocolType |  | 3.6.0 |
| wesp | ProtocolType |  | 3.6.0 |
| xns-idp | ProtocolType |  | 3.6.0 |
| xtp | ProtocolType |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 3.6.0 |
| enable | FirewallRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
ChangeFirewallRuleStateAction action = new ChangeFirewallRuleStateAction();
action.uuid = "4eef3024e5bd36f38be22b5af9807b20";
action.state = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeFirewallRuleStateAction.Result res = action.call();
```

 Python SDK

```
ChangeFirewallRuleStateAction action = ChangeFirewallRuleStateAction()
action.uuid = "4eef3024e5bd36f38be22b5af9807b20"
action.state = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeFirewallRuleStateAction.Result res = action.call()
```

---

#### 创建防火墙规则模板(CreateFirewallRuleTemplate)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/rules/template
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "action": "accept",
    "protocol": "tcp",
    "name": "rule-template",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "ruleNumber": 1001.0,
    "enableLog": false,
    "state": "disable",
    "description": "example rule des"
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
-X POST -d '{"params":{"action":"accept","protocol":"tcp","name":"rule-template","destPort":"22","sourcePort":"22","sourceIp":"192.168.1.2","destIp":"192.168.1.1","allowStates":"invalid,new","tcpFlag":"SYN","icmpTypeName":"echo-reply","ruleNumber":1001.0,"enableLog":false,"state":"disable","description":"example rule des"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules/template
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| action | String | body(包含在**params**结构中) |  | drop reject accept | 4.0.0 |
| protocol (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| destPort (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| sourcePort (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| sourceIp (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| destIp (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| allowStates (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| tcpFlag (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| icmpTypeName (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| ruleNumber | Integer | body(包含在**params**结构中) |  |  | 4.0.0 |
| enableLog (可选) | boolean | body(包含在**params**结构中) |  |  | 4.0.0 |
| state (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "action": "accept",
    "protocol": "TCP",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "ruleNumber": 1001.0,
    "enableLog": false,
    "state": "disable",
    "isDefault": false,
    "description": "example rule des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VpcFirewallRuleTemplateInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| destPort | String |  | 4.0.0 |
| sourcePort | String |  | 4.0.0 |
| sourceIp | String |  | 4.0.0 |
| destIp | String |  | 4.0.0 |
| allowStates | String |  | 4.0.0 |
| tcpFlag | String |  | 4.0.0 |
| icmpTypeName | String |  | 4.0.0 |
| ruleNumber | int |  | 4.0.0 |
| enableLog | boolean |  | 4.0.0 |
| isDefault | boolean |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| action | ActionType | 详情参考[action] | 4.0.0 |
| protocol | ProtocolType | 详情参考[protocol] | 4.0.0 |
| state | FirewallRuleState | 详情参考[state] | 4.0.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 4.0.0 |
| reject | ActionType |  | 4.0.0 |
| accept | ActionType |  | 4.0.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 4.0.0 |
| all | ProtocolType |  | 4.0.0 |
| ah | ProtocolType |  | 4.0.0 |
| ax.25 | ProtocolType |  | 4.0.0 |
| dccp | ProtocolType |  | 4.0.0 |
| ddp | ProtocolType |  | 4.0.0 |
| egp | ProtocolType |  | 4.0.0 |
| eigrp | ProtocolType |  | 4.0.0 |
| encap | ProtocolType |  | 4.0.0 |
| esp | ProtocolType |  | 4.0.0 |
| etherip | ProtocolType |  | 4.0.0 |
| fc | ProtocolType |  | 4.0.0 |
| ggp | ProtocolType |  | 4.0.0 |
| gre | ProtocolType |  | 4.0.0 |
| hip | ProtocolType |  | 4.0.0 |
| hmp | ProtocolType |  | 4.0.0 |
| icmp | ProtocolType |  | 4.0.0 |
| ipdr-cmtp | ProtocolType |  | 4.0.0 |
| idpr | ProtocolType |  | 4.0.0 |
| igmp | ProtocolType |  | 4.0.0 |
| igp | ProtocolType |  | 4.0.0 |
| ip | ProtocolType |  | 4.0.0 |
| ipcomp | ProtocolType |  | 4.0.0 |
| ipencap | ProtocolType |  | 4.0.0 |
| ipip | ProtocolType |  | 4.0.0 |
| isis | ProtocolType |  | 4.0.0 |
| iso-tp4 | ProtocolType |  | 4.0.0 |
| l2tp | ProtocolType |  | 4.0.0 |
| manet | ProtocolType |  | 4.0.0 |
| pls-in-ip | ProtocolType |  | 4.0.0 |
| ospf | ProtocolType |  | 4.0.0 |
| pim | ProtocolType |  | 4.0.0 |
| pup | ProtocolType |  | 4.0.0 |
| rdp | ProtocolType |  | 4.0.0 |
| rohc | ProtocolType |  | 4.0.0 |
| rspf | ProtocolType |  | 4.0.0 |
| rsvp | ProtocolType |  | 4.0.0 |
| sctp | ProtocolType |  | 4.0.0 |
| skip | ProtocolType |  | 4.0.0 |
| st | ProtocolType |  | 4.0.0 |
| tcp | ProtocolType |  | 4.0.0 |
| udp | ProtocolType |  | 4.0.0 |
| udplite | ProtocolType |  | 4.0.0 |
| vmtp | ProtocolType |  | 4.0.0 |
| vrrp | ProtocolType |  | 4.0.0 |
| wesp | ProtocolType |  | 4.0.0 |
| xns-idp | ProtocolType |  | 4.0.0 |
| xtp | ProtocolType |  | 4.0.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 4.0.0 |
| enable | FirewallRuleState |  | 4.0.0 |



##### SDK示例

 Java SDK

```
CreateFirewallRuleTemplateAction action = new CreateFirewallRuleTemplateAction();
action.action = "accept";
action.protocol = "tcp";
action.name = "rule-template";
action.destPort = "22";
action.sourcePort = "22";
action.sourceIp = "192.168.1.2";
action.destIp = "192.168.1.1";
action.allowStates = "invalid,new";
action.tcpFlag = "SYN";
action.icmpTypeName = "echo-reply";
action.ruleNumber = 1001.0;
action.enableLog = false;
action.state = "disable";
action.description = "example rule des";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFirewallRuleTemplateAction.Result res = action.call();
```

 Python SDK

```
CreateFirewallRuleTemplateAction action = CreateFirewallRuleTemplateAction()
action.action = "accept"
action.protocol = "tcp"
action.name = "rule-template"
action.destPort = "22"
action.sourcePort = "22"
action.sourceIp = "192.168.1.2"
action.destIp = "192.168.1.1"
action.allowStates = "invalid,new"
action.tcpFlag = "SYN"
action.icmpTypeName = "echo-reply"
action.ruleNumber = 1001.0
action.enableLog = false
action.state = "disable"
action.description = "example rule des"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFirewallRuleTemplateAction.Result res = action.call()
```

---

#### 删除防火墙规则模板(DeleteFirewallRuleTemplate)



##### API请求

 URLs

```
DELETE zstack/v1/vpcfirewalls/ipset/templates/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vpcfirewalls/rules/templates/8de197dab6af3e30b7131bc6d50f935d?deleteMode=Permissive
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.0.0 |
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
DeleteFirewallRuleTemplateAction action = new DeleteFirewallRuleTemplateAction();
action.uuid = "8de197dab6af3e30b7131bc6d50f935d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFirewallRuleTemplateAction.Result res = action.call();
```

 Python SDK

```
DeleteFirewallRuleTemplateAction action = DeleteFirewallRuleTemplateAction()
action.uuid = "8de197dab6af3e30b7131bc6d50f935d"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFirewallRuleTemplateAction.Result res = action.call()
```

---

#### 更新防火墙规则模板(UpdateFirewallRuleTemplate)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/rules/template/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateFirewallRuleTemplate": {
    "name": "rule-template-name",
    "action": "accept",
    "protocol": "tcp",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "ruleNumber": 1001.0,
    "enableLog": false,
    "state": "disable",
    "description": "example rule des"
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
-X PUT -d '{"updateFirewallRuleTemplate":{"name":"rule-template-name","action":"accept","protocol":"tcp","destPort":"22","sourcePort":"22","sourceIp":"192.168.1.2","destIp":"192.168.1.1","allowStates":"invalid,new","tcpFlag":"SYN","icmpTypeName":"echo-reply","ruleNumber":1001.0,"enableLog":false,"state":"disable","description":"example rule des"}}' http://localhost:8080/zstack/v1/vpcfirewalls/rules/template/0e85a35457763de9bc0a4d19d15e4630/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name | String | body(包含在**updateFirewallRuleTemplate**结构中) | 资源名称 |  | 4.0.0 |
| action | String | body(包含在**updateFirewallRuleTemplate**结构中) |  | drop reject accept | 4.0.0 |
| protocol (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| destPort (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| sourcePort (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| sourceIp (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| destIp (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| allowStates (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| tcpFlag (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| icmpTypeName (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| ruleNumber | Integer | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| enableLog (可选) | boolean | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| state (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) |  |  | 4.0.0 |
| description (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) | 资源的详细描述 |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**updateFirewallRuleTemplate**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**updateFirewallRuleTemplate**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "action": "accept",
    "protocol": "TCP",
    "destPort": "22",
    "sourcePort": "22",
    "sourceIp": "192.168.1.2",
    "destIp": "192.168.1.1",
    "allowStates": "invalid,new",
    "tcpFlag": "SYN",
    "icmpTypeName": "echo-reply",
    "ruleNumber": 1001.0,
    "enableLog": false,
    "state": "disable",
    "isDefault": false,
    "description": "example rule des"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VpcFirewallRuleTemplateInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| destPort | String |  | 4.0.0 |
| sourcePort | String |  | 4.0.0 |
| sourceIp | String |  | 4.0.0 |
| destIp | String |  | 4.0.0 |
| allowStates | String |  | 4.0.0 |
| tcpFlag | String |  | 4.0.0 |
| icmpTypeName | String |  | 4.0.0 |
| ruleNumber | int |  | 4.0.0 |
| enableLog | boolean |  | 4.0.0 |
| isDefault | boolean |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| action | ActionType | 详情参考[action] | 4.0.0 |
| protocol | ProtocolType | 详情参考[protocol] | 4.0.0 |
| state | FirewallRuleState | 详情参考[state] | 4.0.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 4.0.0 |
| reject | ActionType |  | 4.0.0 |
| accept | ActionType |  | 4.0.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 4.0.0 |
| all | ProtocolType |  | 4.0.0 |
| ah | ProtocolType |  | 4.0.0 |
| ax.25 | ProtocolType |  | 4.0.0 |
| dccp | ProtocolType |  | 4.0.0 |
| ddp | ProtocolType |  | 4.0.0 |
| egp | ProtocolType |  | 4.0.0 |
| eigrp | ProtocolType |  | 4.0.0 |
| encap | ProtocolType |  | 4.0.0 |
| esp | ProtocolType |  | 4.0.0 |
| etherip | ProtocolType |  | 4.0.0 |
| fc | ProtocolType |  | 4.0.0 |
| ggp | ProtocolType |  | 4.0.0 |
| gre | ProtocolType |  | 4.0.0 |
| hip | ProtocolType |  | 4.0.0 |
| hmp | ProtocolType |  | 4.0.0 |
| icmp | ProtocolType |  | 4.0.0 |
| ipdr-cmtp | ProtocolType |  | 4.0.0 |
| idpr | ProtocolType |  | 4.0.0 |
| igmp | ProtocolType |  | 4.0.0 |
| igp | ProtocolType |  | 4.0.0 |
| ip | ProtocolType |  | 4.0.0 |
| ipcomp | ProtocolType |  | 4.0.0 |
| ipencap | ProtocolType |  | 4.0.0 |
| ipip | ProtocolType |  | 4.0.0 |
| isis | ProtocolType |  | 4.0.0 |
| iso-tp4 | ProtocolType |  | 4.0.0 |
| l2tp | ProtocolType |  | 4.0.0 |
| manet | ProtocolType |  | 4.0.0 |
| pls-in-ip | ProtocolType |  | 4.0.0 |
| ospf | ProtocolType |  | 4.0.0 |
| pim | ProtocolType |  | 4.0.0 |
| pup | ProtocolType |  | 4.0.0 |
| rdp | ProtocolType |  | 4.0.0 |
| rohc | ProtocolType |  | 4.0.0 |
| rspf | ProtocolType |  | 4.0.0 |
| rsvp | ProtocolType |  | 4.0.0 |
| sctp | ProtocolType |  | 4.0.0 |
| skip | ProtocolType |  | 4.0.0 |
| st | ProtocolType |  | 4.0.0 |
| tcp | ProtocolType |  | 4.0.0 |
| udp | ProtocolType |  | 4.0.0 |
| udplite | ProtocolType |  | 4.0.0 |
| vmtp | ProtocolType |  | 4.0.0 |
| vrrp | ProtocolType |  | 4.0.0 |
| wesp | ProtocolType |  | 4.0.0 |
| xns-idp | ProtocolType |  | 4.0.0 |
| xtp | ProtocolType |  | 4.0.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 4.0.0 |
| enable | FirewallRuleState |  | 4.0.0 |



##### SDK示例

 Java SDK

```
UpdateFirewallRuleTemplateAction action = new UpdateFirewallRuleTemplateAction();
action.uuid = "0e85a35457763de9bc0a4d19d15e4630";
action.name = "rule-template-name";
action.action = "accept";
action.protocol = "tcp";
action.destPort = "22";
action.sourcePort = "22";
action.sourceIp = "192.168.1.2";
action.destIp = "192.168.1.1";
action.allowStates = "invalid,new";
action.tcpFlag = "SYN";
action.icmpTypeName = "echo-reply";
action.ruleNumber = 1001.0;
action.enableLog = false;
action.state = "disable";
action.description = "example rule des";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateFirewallRuleTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateFirewallRuleTemplateAction action = UpdateFirewallRuleTemplateAction()
action.uuid = "0e85a35457763de9bc0a4d19d15e4630"
action.name = "rule-template-name"
action.action = "accept"
action.protocol = "tcp"
action.destPort = "22"
action.sourcePort = "22"
action.sourceIp = "192.168.1.2"
action.destIp = "192.168.1.1"
action.allowStates = "invalid,new"
action.tcpFlag = "SYN"
action.icmpTypeName = "echo-reply"
action.ruleNumber = 1001.0
action.enableLog = false
action.state = "disable"
action.description = "example rule des"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateFirewallRuleTemplateAction.Result res = action.call()
```

---

#### 查询防火墙规则模板(QueryFirewallRuleTemplate)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls/rules/templates
GET zstack/v1/vpcfirewalls/rules/templates/uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/rules/templates
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/rules/templates/uuid}
```



可查询字段

运行CLI命令行工具，输入QueryVpcFirewallVRouterRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例：

```
{
  "inventories": [
    {
      "action": "accept",
      "protocol": "TCP",
      "destPort": "22",
      "sourcePort": "22",
      "sourceIp": "192.168.1.2",
      "destIp": "192.168.1.1",
      "allowStates": "invalid,new",
      "tcpFlag": "SYN",
      "icmpTypeName": "echo-reply",
      "ruleNumber": 1001.0,
      "enableLog": false,
      "state": "disable",
      "isDefault": false,
      "description": "example rule des"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | List | 详情参考[inventories] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.0.0 |
| destPort | String |  | 4.0.0 |
| sourcePort | String |  | 4.0.0 |
| sourceIp | String |  | 4.0.0 |
| destIp | String |  | 4.0.0 |
| allowStates | String |  | 4.0.0 |
| tcpFlag | String |  | 4.0.0 |
| icmpTypeName | String |  | 4.0.0 |
| ruleNumber | int |  | 4.0.0 |
| enableLog | boolean |  | 4.0.0 |
| isDefault | boolean |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| action | ActionType | 详情参考[action] | 4.0.0 |
| protocol | ProtocolType | 详情参考[protocol] | 4.0.0 |
| state | FirewallRuleState | 详情参考[state] | 4.0.0 |

 #action

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 4.0.0 |
| reject | ActionType |  | 4.0.0 |
| accept | ActionType |  | 4.0.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp_udp | ProtocolType |  | 4.0.0 |
| all | ProtocolType |  | 4.0.0 |
| ah | ProtocolType |  | 4.0.0 |
| ax.25 | ProtocolType |  | 4.0.0 |
| dccp | ProtocolType |  | 4.0.0 |
| ddp | ProtocolType |  | 4.0.0 |
| egp | ProtocolType |  | 4.0.0 |
| eigrp | ProtocolType |  | 4.0.0 |
| encap | ProtocolType |  | 4.0.0 |
| esp | ProtocolType |  | 4.0.0 |
| etherip | ProtocolType |  | 4.0.0 |
| fc | ProtocolType |  | 4.0.0 |
| ggp | ProtocolType |  | 4.0.0 |
| gre | ProtocolType |  | 4.0.0 |
| hip | ProtocolType |  | 4.0.0 |
| hmp | ProtocolType |  | 4.0.0 |
| icmp | ProtocolType |  | 4.0.0 |
| ipdr-cmtp | ProtocolType |  | 4.0.0 |
| idpr | ProtocolType |  | 4.0.0 |
| igmp | ProtocolType |  | 4.0.0 |
| igp | ProtocolType |  | 4.0.0 |
| ip | ProtocolType |  | 4.0.0 |
| ipcomp | ProtocolType |  | 4.0.0 |
| ipencap | ProtocolType |  | 4.0.0 |
| ipip | ProtocolType |  | 4.0.0 |
| isis | ProtocolType |  | 4.0.0 |
| iso-tp4 | ProtocolType |  | 4.0.0 |
| l2tp | ProtocolType |  | 4.0.0 |
| manet | ProtocolType |  | 4.0.0 |
| pls-in-ip | ProtocolType |  | 4.0.0 |
| ospf | ProtocolType |  | 4.0.0 |
| pim | ProtocolType |  | 4.0.0 |
| pup | ProtocolType |  | 4.0.0 |
| rdp | ProtocolType |  | 4.0.0 |
| rohc | ProtocolType |  | 4.0.0 |
| rspf | ProtocolType |  | 4.0.0 |
| rsvp | ProtocolType |  | 4.0.0 |
| sctp | ProtocolType |  | 4.0.0 |
| skip | ProtocolType |  | 4.0.0 |
| st | ProtocolType |  | 4.0.0 |
| tcp | ProtocolType |  | 4.0.0 |
| udp | ProtocolType |  | 4.0.0 |
| udplite | ProtocolType |  | 4.0.0 |
| vmtp | ProtocolType |  | 4.0.0 |
| vrrp | ProtocolType |  | 4.0.0 |
| wesp | ProtocolType |  | 4.0.0 |
| xns-idp | ProtocolType |  | 4.0.0 |
| xtp | ProtocolType |  | 4.0.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| disable | FirewallRuleState |  | 4.0.0 |
| enable | FirewallRuleState |  | 4.0.0 |



##### SDK示例

 Java SDK

```
QueryFirewallRuleTemplateAction action = new QueryFirewallRuleTemplateAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFirewallRuleTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryFirewallRuleTemplateAction action = QueryFirewallRuleTemplateAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFirewallRuleTemplateAction.Result res = action.call()
```

---

#### 查询防火墙与单节点路由器关联关系(QueryVpcFirewallVRouterRef)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls/vrouters/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/vrouters/refs?
```



可查询字段

运行CLI命令行工具，输入QueryVpcFirewallVRouterRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "vpcFirewallUuid": "cd7ab20e4768316c86230f2d982ae5a5",
      "vRouterUuid": "7013faeb3b4736d1800749b1e910a845",
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
| id | long |  | 3.6.0 |
| vpcFirewallUuid | String |  | 3.6.0 |
| vRouterUuid | String |  | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryVpcFirewallVRouterRefAction action = new QueryVpcFirewallVRouterRefAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVpcFirewallVRouterRefAction.Result res = action.call();
```

 Python SDK

```
QueryVpcFirewallVRouterRefAction action = QueryVpcFirewallVRouterRefAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVpcFirewallVRouterRefAction.Result res = action.call()
```

---

#### 下发规则集更改内容到路由器(ApplyRuleSetChanges)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/ruleSets/apply/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "applyRuleSetChanges": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"applyRuleSetChanges":{}}' http://localhost:8080/zstack/v1/vpcfirewalls/ruleSets/apply/e78b0b5ebe1c33159b0faa2d88a41b21/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| systemTags (可选) | List | body |  |  | 4.0.0 |
| userTags (可选) | List | body |  |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "actionType": "drop",
    "description": "example-des",
    "enableDefaultLog": false,
    "isDefault": false,
    "isApplied": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VpcFirewallRuleSetInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| isDefault | boolean |  | 4.0.0 |
| isApplied | boolean |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| actionType | ActionType | 详情参考actionType | 4.0.0 |

 #actionType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| drop | ActionType |  | 4.0.0 |
| reject | ActionType |  | 4.0.0 |
| accept | ActionType |  | 4.0.0 |



##### SDK示例

 Java SDK

```
ApplyRuleSetChangesAction action = new ApplyRuleSetChangesAction();
action.uuid = "e78b0b5ebe1c33159b0faa2d88a41b21";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ApplyRuleSetChangesAction.Result res = action.call();
```

 Python SDK

```
ApplyRuleSetChangesAction action = ApplyRuleSetChangesAction()
action.uuid = "e78b0b5ebe1c33159b0faa2d88a41b21"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ApplyRuleSetChangesAction.Result res = action.call()
```

---

#### 创建防火墙IP或端口模板(CreateFirewallIpSetTemplate)



##### API请求

 URLs

```
POST zstack/v1/vpcfirewalls/ipset/templates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "ipset-template",
    "sourceValue": "192.168.1.2",
    "destValue": "192.168.1.1,10.0.0.1/24",
    "type": "ip"
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
-X POST -d '{"params":{"name":"ipset-template","sourceValue":"192.168.1.2","destValue":"192.168.1.1,10.0.0.1/24","type":"ip"}}' http://localhost:8080/zstack/v1/vpcfirewalls/ipset/templates
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| sourceValue (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| destValue (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| type | IpSetType | body(包含在**params**结构中) |  | ip port | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ipset-template",
    "sourceValue": "192.168.1.2",
    "destValue": "192.168.1.1,10.0.0.1/24",
    "type": "ip"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VpcFirewallIpSetTemplateInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| sourceValue | String |  | 4.0.0 |
| destValue | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| type | IpSetType | 详情参考[type] | 4.0.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ip | IpSetType |  | 4.0.0 |
| port | IpSetType |  | 4.0.0 |



##### SDK示例

 Java SDK

```
CreateFirewallIpSetTemplateAction action = new CreateFirewallIpSetTemplateAction();
action.name = "ipset-template";
action.sourceValue = "192.168.1.2";
action.destValue = "192.168.1.1,10.0.0.1/24";
action.type = "ip";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFirewallIpSetTemplateAction.Result res = action.call();
```

 Python SDK

```
CreateFirewallIpSetTemplateAction action = CreateFirewallIpSetTemplateAction()
action.name = "ipset-template"
action.sourceValue = "192.168.1.2"
action.destValue = "192.168.1.1,10.0.0.1/24"
action.type = "ip"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFirewallIpSetTemplateAction.Result res = action.call()
```

---

#### 删除防火墙IP或端口模板(DeleteFirewallIpSetTemplate)



##### API请求

 URLs

```
DELETE /v1/vpcfirewalls/ipset/templates/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X DELETE http://localhost:8080/zstack/v1/vpcfirewalls/ipset/templates/e84fbe6b5a9c31a1b4b83cfde4028893?deleteMode=Permissive
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.0.0 |
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
DeleteFirewallIpSetTemplateAction action = new DeleteFirewallIpSetTemplateAction();
action.uuid = "e84fbe6b5a9c31a1b4b83cfde4028893";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFirewallIpSetTemplateAction.Result res = action.call();
```

 Python SDK

```
DeleteFirewallIpSetTemplateAction action = DeleteFirewallIpSetTemplateAction()
action.uuid = "e84fbe6b5a9c31a1b4b83cfde4028893"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFirewallIpSetTemplateAction.Result res = action.call()
```

---

#### 更新防火墙IP或端口模板(UpdateFirewallIpSetTemplate)



##### API请求

 URLs

```
PUT zstack/v1/vpcfirewalls/ipset/templates/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateFirewallIpSetTemplate": {
    "name": "ipset-template",
    "sourceValue": "192.168.1.2",
    "destValue": "192.168.1.1,10.0.0.1/24",
    "type": "ip"
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
-X PUT -d '{"updateFirewallIpSetTemplate":{"name":"ipset-template","sourceValue":"192.168.1.2","destValue":"192.168.1.1,10.0.0.1/24","type":"ip"}}' http://localhost:8080/zstack/v1/vpcfirewalls/ipset/templates/c7df801f021e334f9d548eac2eb2cd47/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name（可选） | String | body(包含在**updateFirewallIpSetTemplate**结构中) | 资源名称 |  | 4.0.0 |
| sourceValue (可选) | String | body(包含在**updateFirewallIpSetTemplate**结构中) |  |  | 4.0.0 |
| destValue (可选) | String | body(包含在**updateFirewallIpSetTemplate**结构中) |  |  | 4.0.0 |
| type | IpSetType | body(包含在**updateFirewallIpSetTemplate**结构中) |  | ip port | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ipset-template",
    "sourceValue": "192.168.1.2",
    "destValue": "192.168.1.1,10.0.0.1/24",
    "type": "ip"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VpcFirewallRuleTemplateInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| sourceValue | String |  | 4.0.0 |
| destValue | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| type | IpSetType | 详情参考[type] | 4.0.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ip | IpSetType |  | 4.0.0 |
| port | IpSetType |  | 4.0.0 |



##### SDK示例

 Java SDK

```
UpdateFirewallIpSetTemplateAction action = new UpdateFirewallIpSetTemplateAction();
action.uuid = "c7df801f021e334f9d548eac2eb2cd47";
action.name = "ipset-template";
action.sourceValue = "192.168.1.2";
action.destValue = "192.168.1.1,10.0.0.1/24";
action.type = "ip";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateFirewallIpSetTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateFirewallIpSetTemplateAction action = UpdateFirewallIpSetTemplateAction()
action.uuid = "c7df801f021e334f9d548eac2eb2cd47"
action.name = "ipset-template"
action.sourceValue = "192.168.1.2"
action.destValue = "192.168.1.1,10.0.0.1/24"
action.type = "ip"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateFirewallIpSetTemplateAction.Result res = action.call()
```

---

#### 查询防火墙IP或端口模板(QueryFirewallIpSetTemplate)



##### API请求

 URLs

```
GET zstack/v1/vpcfirewalls/ipset/templates
GET zstack/v1/vpcfirewalls/ipset/templates/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/ipset/templates
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpcfirewalls/ipset/templates/fe6b68e5315035d88b02dd423de0342c
```



可查询字段

运行CLI命令行工具，输入QueryVpcFirewallVRouterRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例：

```
{
  "inventories": [
    {
      "name": "ipset-template",
      "sourceValue": "192.168.1.2",
      "destValue": "192.168.1.1,10.0.0.1/24",
      "type": "ip"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VpcFirewallIpSetTemplateInventory | 详情参考[inventories] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | long | 资源名称 | 4.0.0 |
| sourceValue | String |  | 4.0.0 |
| destValue | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| accountUuid | String | 账户UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| type | IpSetType | 详情参考[type] | 4.0.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ip | IpSetType |  | 4.0.0 |
| port | IpSetType |  | 4.0.0 |



##### SDK示例

 Java SDK

```
QueryFirewallIpSetTemplateAction action = new QueryFirewallIpSetTemplateAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFirewallIpSetTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryFirewallIpSetTemplateAction action = QueryFirewallIpSetTemplateAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFirewallIpSetTemplateAction.Result res = action.call()
```

---

#### 安全组相关接口

---

#### 创建安全组(CreateSecurityGroup)



##### API请求

 URLs

```
POST zstack/v1/security-groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "sp",
"description": "test create security group"
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
-X POST -d '{"params":{"name":"sp","description":"test create security group"}}' \
http://localhost:8080/zstack/v1/security-groups
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| ipVersion (可选) | Integer | body(包含在params结构中) | ip协议号 | 4 6 | 3.1.0 |
| resourceUuid (可选) | String | body(包含在params结构中) | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "7bb070cdebf44fd8af354f25344d758b",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:21:20 PM",
"lastOpDate": "Jun 7, 2017 9:21:20 PM",
"internalId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义,如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR,如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
CreateSecurityGroupAction action = new CreateSecurityGroupAction();
action.name = "sp";
action.description = "test create security group";
action.sessionId = "b5032c14210c4668a3a2bcd341d80bbf";
CreateSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
CreateSecurityGroupAction action = CreateSecurityGroupAction()
action.name = "sp"
action.description = "test create security group"
action.sessionId = "e34f8139af4548d5ade539ca2a5d7983"
CreateSecurityGroupAction.Result res = action.call()
```

---

#### 删除安全组(DeleteSecurityGroup)



##### API请求

 URLs

```
DELETE zstack/v1/security-groups/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 6674ae438b8646d3b4a99a7fe7a48719" \
-X DELETE http://localhost:8080/zstack/v1/security-groups/6791f54e4fb147d1b26030723efe03bd?deleteMode=Permissive
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | Permissive:：如果删除过程中发生错误或者删除不被允许云平台会停止删除操作在这种情况下, 包含失败原因的错误代码会被返回 Enforcing： 云平台会忽略所有错误和权限而直接删除资源;在这种情况下, 删除操作总是会成功 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
DeleteSecurityGroupAction action = new DeleteSecurityGroupAction();
action.uuid = "86efff16586b4d82bfea66deba85cc50";
action.deleteMode = "Permissive";
action.sessionId = "079653952584401b997df37fd7044433";
DeleteSecurityGroupAction.Result res = action.call();

```

 Python SDK

```
DeleteSecurityGroupAction action = DeleteSecurityGroupAction()
action.uuid = "59098134c4214c79a48ced0ed7952ecd"
action.deleteMode = "Permissive"
action.sessionId = "2fb58330c68d46f6aa700740d52b02c0"
DeleteSecurityGroupAction.Result res = action.call()
```

---

#### 查询安全组(QuerySecurityGroup)



##### API请求

 URLs

```
GET zstack/v1/security-groups
GET zstack/v1/security-groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 1f3fcf6a885148b69702e52d22de9606" \
-X GET http://localhost:8080/zstack/v1/security-groups?q=name=web&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth a0c4c995a9e34c639cc72732bcd7bd2f" \
-X GET http://localhost:8080/zstack/v1/security-groups/af0d90237c084afaa16f997847579152
```



可查询字段

运行CLI命令行工具，输入`QuerySecurityGroup`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "6f757e65fed243babeac0be896e77caf",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:20:34 PM",
"lastOpDate": "Jun 7, 2017 9:20:34 PM",
"internalId": 0.0
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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的结束端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义,如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR,如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QuerySecurityGroupAction action = new QuerySecurityGroupAction();
action.conditions = asList("name=web","state=Enabled");
action.sessionId = "604cf540e620468fa3fad7098196bb96";
QuerySecurityGroupAction.Result res = action.call();
```

 Python SDK

```
QuerySecurityGroupAction action = QuerySecurityGroupAction()
action.conditions = ["name=web","state=Enabled"]
action.sessionId = "55a3657d35f14ee4b41401bd7ada15a7"
QuerySecurityGroupAction.Result res = action.call()
```

---

#### 更新安全组(UpdateSecurityGroup)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateSecurityGroup": {
"name": "new sg",
"description": "for test update"
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
-X PUT -d '{"updateSecurityGroup":{"name":"new sg","description":"for test update"}}' \
http://localhost:8080/zstack/v1/security-groups/549bb03c235a3fa8aa18fb79539d4862/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateSecurityGroup**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateSecurityGroup**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "def8dff9ec5046e39f57193f488d716a",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:20:15 PM",
"lastOpDate": "Jun 7, 2017 9:20:15 PM",
"internalId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义,如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR,如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateSecurityGroupAction action = new UpdateSecurityGroupAction();
action.uuid = "b60e66856f6c4f7ca16854cfd170fb99";
action.name = "new sg";
action.description = "for test update";
action.sessionId = "8c23751364b746628177641202ff0999";
UpdateSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateSecurityGroupAction action = UpdateSecurityGroupAction()
action.uuid = "f6fc05d6ba854530bd8141733d6db4ad"
action.name = "new sg"
action.description = "for test update"
action.sessionId = "f75e99d861ca4660925d72313692d663"
UpdateSecurityGroupAction.Result res = action.call()
```

---

#### 改变安全组状态(ChangeSecurityGroupState)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeSecurityGroupState": {
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
-X PUT -d '{"changeSecurityGroupState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/security-groups/85a1d77188d836eab47b34e7129fb5fb/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeSecurityGroupState**结构中) | 安全组状态 | enabledisable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "eebb81d825214555a61567f8811fca15",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:20:16 PM",
"lastOpDate": "Jun 7, 2017 9:20:16 PM",
"internalId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules
-
-

-
-

-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP，它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义。 如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeSecurityGroupStateAction action = new ChangeSecurityGroupStateAction();
action.uuid = "9389a923cd8c4cacb12e57b979fa1e5f";
action.stateEvent = "disable";
action.sessionId = "772deba87e7847459e5b1f428531bee2";
ChangeSecurityGroupStateAction.Result res = action.call();
```

 Python SDK

```
ChangeSecurityGroupStateAction action = ChangeSecurityGroupStateAction()
action.uuid = "1ecf0093245b4a6a948d5d09983f0193"
action.stateEvent = "disable"
action.sessionId = "eb76404af2f140f993ae68bb22a80781"
ChangeSecurityGroupStateAction.Result res = action.call()
```

---

#### 挂载安全组到L3网络(AttachSecurityGroupToL3Network)



##### API请求

 URLs

```
POST zstack/v1/security-groups/{securityGroupUuid}/l3-networks/{l3NetworkUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/security-groups/0551a95211783295879d083216cb493b/l3-networks/35aa9f6e9a2b3f849d1631ba89d0b27d
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组UUID |  | 0.6 |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "5870eab620d2487d8d0320eabe185718",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:20:28 PM",
"lastOpDate": "Jun 7, 2017 9:20:28 PM",
"internalId": 0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules
-
-

-
-

-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP，它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义。 如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AttachSecurityGroupToL3NetworkAction action = new AttachSecurityGroupToL3NetworkAction();
action.securityGroupUuid = "eef2d772f4e94997816fdf8512a8233a";
action.l3NetworkUuid = "6761570f790c400596839da61767f890";
action.sessionId = "efb745c9a7204e9a941608059f3c3a10";
AttachSecurityGroupToL3NetworkAction.Result res = action.call();
```

 Python SDK

```
AttachSecurityGroupToL3NetworkAction action = AttachSecurityGroupToL3NetworkAction()
action.securityGroupUuid = "ae9aebcc28d1490293382c661d123c16"
action.l3NetworkUuid = "cd2fdc4303e34ead806a492d18d4b5fa"
action.sessionId = "9938bf24e1b24c39ab4dc3edc0aeb38d"
AttachSecurityGroupToL3NetworkAction.Result res = action.call()
```

---

#### 从L3网络卸载安全组(DetachSecurityGroupFromL3Network)



##### API请求

 URLs

```
DELETE/v1/security-groups/{securityGroupUuid}/l3-networks/{l3NetworkUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 6edcc17febe04b9fb77059cf096f2cc5" \
-X DELETE http://localhost:8080/zstack/v1/security-groups/08d569c03f8343168f2ae80861db92f3/l3-networks/af8199498a9e4ab1be6d1fea8ec7fbee?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组UUID |  | 0.6 |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "6cf7a5c5d89b4094ad912a555319d4d0",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:21:06 PM",
"lastOpDate": "Jun 7, 2017 9:21:06 PM",
"internalId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义,如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR,如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
DetachSecurityGroupFromL3NetworkAction action = new DetachSecurityGroupFromL3NetworkAction();
action.securityGroupUuid = "823d378084fa445c8d180895db4dd8c1";
action.l3NetworkUuid = "cf6dd2bbd5f940d0976e8c2cd2c063c9";
action.sessionId = "915660a10fc74d509d5ef72caf5892bd";
DetachSecurityGroupFromL3NetworkAction.Result res = action.call();
```

 Python SDK

```
DetachSecurityGroupFromL3NetworkAction action = DetachSecurityGroupFromL3NetworkAction()
action.securityGroupUuid = "726d6b2f8a674da681f32c66102494df"
action.l3NetworkUuid = "f32da69be7ce4918bb81b8a7ce891177"
action.sessionId = "933ada040fb14b94941997381877bacc"
DetachSecurityGroupFromL3NetworkAction.Result res = action.call()
```

---

#### 获取网卡列表清单(GetCandidateVmNicForSecurityGroup)



获取可应用安全组的网卡列表清单。

##### API请求

 URLs

```
GET zstack/v1/security-groups/{securityGroupUuid}/vm-instances/candidate-nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth aec584233a724de089d05b8090e5a296" \
-X GET http://localhost:8080/zstack/v1/security-groups/584e70f6d3504c7a811df5eeba61839c/vm-instances/candidate-nics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "80d2eab0354c329b8257e8f9fcd76d43",
      "vmInstanceUuid": "e8af62992ec5343facac7c5fc164ddd0",
      "l3NetworkUuid": "738cc18ef5003a00937c0e17e6c67a2d",
      "ip": "192.168.0.123",
      "mac": "fa:ef:34:5c:6c:00",
      "hypervisorType": "KVM",
      "netmask": "255.255.255.0",
      "gateway": "192.168.0.1",
      "internalName": "eth0",
      "deviceId": 0.0
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
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetCandidateVmNicForSecurityGroupAction action = new GetCandidateVmNicForSecurityGroupAction();
action.securityGroupUuid = "4060760487504ea3b1ad25bcbabacff5";
action.sessionId = "488b3f4cc8ea4868ab0a7874c4d6358e";
GetCandidateVmNicForSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
GetCandidateVmNicForSecurityGroupAction action = GetCandidateVmNicForSecurityGroupAction()
action.securityGroupUuid = "c30e353b2fe0408ca3ee09a5495b5fa4"
action.sessionId = "acaa2edf939e47b1a399b413f6b26400"
GetCandidateVmNicForSecurityGroupAction.Result res = action.call()
```

---

#### 添加虚拟机网卡到安全组(AddVmNicToSecurityGroup)



##### API请求

URLs

```
POST zstack/v1/security-groups/{securityGroupUuid}/vm-instances/nics
```

Headers

```
Authorization: OAuth the-session-uuid
```

**Body**

```
{
"params": {
"vmNicUuids": [
"8432b2608a8a4f639cc56a8c65ee42ef"
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
-X POST -d '{"params":{"vmNicUuids":["c37875cec7133f41adbeb336cdd33ef8"]}}' \
http://localhost:8080/zstack/v1/security-groups/f52566f939f635629a43cd3e27f78dd9/vm-instances/nics
```

参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组UUID |  | 0.6 |
| vmNicUuids | List | body(包含在params结构中) | 云主机网卡的uuid列表 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
AddVmNicToSecurityGroupAction action = new AddVmNicToSecurityGroupAction();
action.securityGroupUuid = "b651075ffcac475c91d3edaa5e9ade75";
action.vmNicUuids = asList("ff0f6c13311b46ddb186a95c0d18350a");
action.sessionId = "605fca0559284eff95d78e418508ff2f";
AddVmNicToSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
AddVmNicToSecurityGroupAction action = AddVmNicToSecurityGroupAction()
action.securityGroupUuid = "2da1519b9b39451e8742aadaa9241952"
action.vmNicUuids = [bda4ceec2917426cb9ee20b3bcb20653]
action.sessionId = "863d503abfbc4334846d67c1eac375f9"
AddVmNicToSecurityGroupAction.Result res = action.call()
```

---

#### 从安全组删除虚拟机网卡(DeleteVmNicFromSecurityGroup)



从安全组删除虚拟机网卡, 这个命令是异步执行的, 在它返回后可能规则仍然没有对所有虚拟机网卡生效。

##### API请求

 URLs

```
DELETE /v1/security-groups/{securityGroupUuid}/vm-instances/nics?vmNicUuids={vmNicUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/security-groups/2c78da48235c3015aa9f9c99e81060b2/vm-instances/nics?vmNicUuids=9aef4c831b1540e7832332972138d78c&vmNicUuids=c40dd02ddf654031aec25346626db553
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组UUID |  | 0.6 |
| vmNicUuids | List | body | 网卡的uuid列表 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
DeleteVmNicFromSecurityGroupAction action = new DeleteVmNicFromSecurityGroupAction();
action.securityGroupUuid = "2c78da48235c3015aa9f9c99e81060b2";
action.vmNicUuids = asList("f8e9c3a73e7c399ca148057f8b2897c3","ae09cd7292913bfe84e467286aaa7a9f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVmNicFromSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteVmNicFromSecurityGroupAction action = DeleteVmNicFromSecurityGroupAction()
action.securityGroupUuid = "2c78da48235c3015aa9f9c99e81060b2"
action.vmNicUuids = [f8e9c3a73e7c399ca148057f8b2897c3, ae09cd7292913bfe84e467286aaa7a9f]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVmNicFromSecurityGroupAction.Result res = action.call()
```

---

#### 查询应用了安全组的网卡列表(QueryVmNicInSecurityGroup)



##### API请求

 URLs

```
GET zstack/v1/security-groups/vm-instances/nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3f2df305cc614ecb9d0b93480cf84b33" \
-X GET http://localhost:8080/zstack/v1/security-groups/vm-instances/nics
```



可查询字段

运行CLI命令行工具，输入`QueryVmNicInSecurityGroup`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "9bac6b3729ae4915bc9f4cee67753774",
"vmNicUuid": "7d0784059df64a11aef748e18b0d5fa7",
"securityGroupUuid": "d3ace95b1236482896f5d1921638ada5",
"vmInstanceUuid": "ace37e89d86c4994942f858a67172a0d",
"createDate": "Jun 7, 2017 9:20:32 PM",
"lastOpDate": "Jun 7, 2017 9:20:32 PM"
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
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QueryVmNicInSecurityGroupAction action = new QueryVmNicInSecurityGroupAction();
action.conditions = asList();
action.sessionId = "fc82274e695143118923150b6008bef2";
QueryVmNicInSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
QueryVmNicInSecurityGroupAction action = QueryVmNicInSecurityGroupAction()
action.conditions = []
action.sessionId = "32b2bfd366774b67a51ebdeb374df1cc"
QueryVmNicInSecurityGroupAction.Result res = action.call()
```

---

#### 添加安全组规则(AddSecurityGroupRule)



##### API请求

 URLs

```
POST zstack/v1/security-groups/{securityGroupUuid}/rules
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "rules": [
      {
        "type": "Ingress",
         "state": "Enabled",
        "description": "test",
        "remoteSecurityGroupUuid": "7d4337c2b18339ffb6f5d1023fc2ea42",
        "ipVersion": 4,
        "protocol": "TCP",
          "srcIpRange": "10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24",
        "dstIpRange": "10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24",
        "dstPortRange": "1000,1001,1002-1005,1008",
        "action": "ACCEPT"
      }
    ],
    "priority": -1
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{"rules":[{"type":"Ingress","state":"Enabled","description":"test","remoteSecurityGroupUuid":"7d4337c2b18339ffb6f5d1023fc2ea42","ipVersion":4,"protocol":"TCP","srcIpRange":"10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24","dstIpRange":"10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24","dstPortRange":"1000,1001,1002-1005,1008","action":"ACCEPT"}],"priority":-1}}'
http://localhost:8080/zstack/v1/security-groups/00fdf47ec62b316a8f17c80d0ee59a01/rules
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组UUID |  | 0.6 |
| rules | List | body(包含在**params**结构中) | 安全组中的规则 |  | 0.6 |
| remoteSecurityGroupUuids (可选) | List | body(包含在**params**结构中) | 应用组间策略的远端安全组UUID |  | 2.1 |
| priority(可选) | Integer | body(包含在**params**结构中) | 规则优先级 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5949aece9cd64d5a939d6dc5e2c1f327",
    "name": "web",
    "description": "for test",
    "state": "Enabled",
    "createDate": "Sep 22, 2017 12:24:11 PM",
    "lastOpDate": "Sep 22, 2017 12:24:11 PM",
    "internalId": 0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules
-
-

-
-

-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态 | 0.6 |
| priority | Integer | 规则优先级 | 4.7.21 |
| description | String | 规则描述 | 4.7.21 |
| srcIpRange | String | 源IP范围 | 4.7.21 |
| dstIpRange | String | 目的IP范围 | 4.7.21 |
| srcPortRange | String | 源端口范围，当前版本未实现 | 4.7.21 |
| dstPortRange | String | 目的端口范围 | 4.7.21 |
| action | String | 规则的默认动作 | 4.7.21 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| allowedCidr | String | 允许的CIDR，根据流量类型的不同，允许的CIDR有不同的含义 如果流量类型是Ingress，允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress，允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR创建时间 | 0.6 |
| startPort | Integer | 如果协议是TCP/UDP，它是端口范围（port range）的起始端口号 如果协议是ICMP，它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP，它是端口范围（port range）的起始端口号 如果协议是ICMP，它是ICMP类型（type） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AddSecurityGroupRuleAction action = new AddSecurityGroupRuleAction();
action.securityGroupUuid = "00fdf47ec62b316a8f17c80d0ee59a01";
action.rules = asList([type:Ingress, state:Enabled, description:test, remoteSecurityGroupUuid:7d4337c2b18339ffb6f5d1023fc2ea42, ipVersion:4, protocol:TCP, srcIpRange:10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24, dstIpRange:10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24, dstPortRange:1000,1001,1002-1005,1008, action:ACCEPT]);
action.priority = -1;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSecurityGroupRuleAction.Result res = action.call();

```

 Python SDK

```
AddSecurityGroupRuleAction action = AddSecurityGroupRuleAction()
action.securityGroupUuid = "00fdf47ec62b316a8f17c80d0ee59a01"
action.rules = [[type:Ingress, state:Enabled, description:test, remoteSecurityGroupUuid:7d4337c2b18339ffb6f5d1023fc2ea42, ipVersion:4, protocol:TCP, srcIpRange:10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24, dstIpRange:10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24, dstPortRange:1000,1001,1002-1005,1008, action:ACCEPT]]
action.priority = -1
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSecurityGroupRuleAction.Result res = action.call()

```

---

#### 删除安全组规则(DeleteSecurityGroupRule)



##### API请求

 URLs

```
DELETE zstack/v1/security-groups/rules?ruleUuids={ruleUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 56ec3e843f8e48d1b3cf9e848885dc81" \
-X DELETE http://localhost:8080/zstack/v1/security-groups/rules?ruleUuids=1f0becde585e39d280acbd6c5b21bd39
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleUuids | List | body | 安全组规则的uuid列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "06abc64deb0b4c8c9dc8831743e34662",
"name": "web",
"description": "for test",
"state": "Enabled",
"createDate": "Jun 7, 2017 9:20:23 PM",
"lastOpDate": "Jun 7, 2017 9:20:23 PM",
"internalId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 0.6 |

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
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedL3NetworkUuids | Set |  | 0.6 |
| rules | List | 详情参考[rules] | 0.6 |

 #rules
-
-

-
-

-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP，它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义。 如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
DeleteSecurityGroupRuleAction action = new DeleteSecurityGroupRuleAction();
action.ruleUuids = asList("5a88c1873bbf48e4a018f03f6bd055b6");
action.sessionId = "f42c32dbfc214bc58fb057d2c9cb63b1";
DeleteSecurityGroupRuleAction.Result res = action.call();
```

 Python SDK

```
DeleteSecurityGroupRuleAction action = DeleteSecurityGroupRuleAction()
action.ruleUuids = [a9b41667676244e5b3da07d866869b31]
action.sessionId = "f8b0b8d01d8c4adc8058083e9f48a8a9"
DeleteSecurityGroupRuleAction.Result res = action.call()
```

---

#### 查询安全组规则(QuerySecurityGroupRule)



##### API请求

 URLs

```
GET zstack/v1/security-groups/rules
GET zstack/v1/security-groups/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 9aa7adfe564e4acda956ef90430b0f1b" \
-X GET http://localhost:8080/zstack/v1/security-groups/rules?q=endPort=22&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 36a86c5b46784b169fe82d7c990ae1a7" \
-X GET http://localhost:8080/zstack/v1/security-groups/rules/ae59353d95f744b5b4396e1783ddb918
```



可查询字段

运行CLI命令行工具，输入`QuerySecurityGroupRule`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "b3a99fc1548b41778258153cfd70f4b7",
"securityGroupUuid": "629d55f78c9f4b0e8e3504b9834ca1bb",
"type": "Ingress",
"startPort": 22.0,
"endPort": 22.0,
"protocol": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:20:25 PM",
"lastOpDate": "Jun 7, 2017 9:20:25 PM"
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
| securityGroupUuid | String | 安全组UUID | 0.6 |
| type | String | 流量类型 | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的结束端口号; 如果协议是ICMP, 它是ICMP类型（type） | 0.6 |
| protocol | String | 流量协议类型 | 0.6 |
| state | String | 规则的可用状态, 当前版本未实现 | 0.6 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义,如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR,如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 0.6 |
| remoteSecurityGroupUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QuerySecurityGroupRuleAction action = new QuerySecurityGroupRuleAction();
action.conditions = asList("endPort=22","state=Enabled");
action.sessionId = "362452e4e8a746ce981a5a54c7390445";
QuerySecurityGroupRuleAction.Result res = action.call();
```

 Python SDK

```
QuerySecurityGroupRuleAction action = QuerySecurityGroupRuleAction()
action.conditions = ["endPort=22","state=Enabled"]
action.sessionId = "37e099aa344c40ca947d11dff7ec2b91"
QuerySecurityGroupRuleAction.Result res = action.call()
```

---

#### 检查安全组规则是否可用(ValidateSecurityGroupRule)



##### API请求

 URLs

```
GET zstack/v1/security-groups/{securityGroupUuid}/rules/validation
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/security-groups/0351d8b796bd3165967f13d1da2f9576/rules/validation?type=Ingress&protocol=TCP&remoteSecurityGroupUuid=f938bc96baae3dc4b18be6bdbf34e783&ipVersion=4&srcIpRange=10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24&dstIpRange=10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24&dstPortRange=1000,1001,1002-1005,1008&action=ACCEPT
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组的UUID，唯一标示该资源 |  | 4.7.21 |
| type | String | query | 安全组规则的方向 | Ingress Egress | 4.7.21 |
| protocol | String | query | 安全组规则的协议类型 | TCP UDP ICMP ALL | 4.7.21 |
| remoteSecurityGroupUuid (可选) | String | query | 远端安全组的UUID，唯一标示该资源 |  | 4.7.21 |
| ipVersion (可选) | Integer | query | 安全组规则的IP版本 | 4 6 | 4.7.21 |
| srcIpRange (可选) | String | query | 安全组规则的源ip范围 |  | 4.7.21 |
| dstIpRange (可选) | String | query | 安全组规则的目的ip范围 |  | 4.7.21 |
| dstPortRange (可选) | String | query | 安全组规则的目的端口范围 |  | 4.7.21 |
| action (可选) | String | query | 安全组规则的动作 | ACCEPT DROP | 4.7.21 |
| startPort (可选) | Integer | query | 安全组规则的起始端口 |  | 4.7.21 |
| endPort (可选) | Integer | query | 安全组规则的结束端口 |  | 4.7.21 |
| allowedCidr (可选) | String | query | 安全组规则的ip范围 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "available": true,
  "code": "SG.2000"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| available | boolean | 规则是否可用 | 4.7.21 |
| code | String | 规则检验错误码 | 4.7.21 |
| reason | String | 原因 | 4.7.21 |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

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
ValidateSecurityGroupRuleAction action = new ValidateSecurityGroupRuleAction();
action.securityGroupUuid = "0351d8b796bd3165967f13d1da2f9576";
action.type = "Ingress";
action.protocol = "TCP";
action.remoteSecurityGroupUuid = "f938bc96baae3dc4b18be6bdbf34e783";
action.ipVersion = 4;
action.srcIpRange = "10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24";
action.dstIpRange = "10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24";
action.dstPortRange = "1000,1001,1002-1005,1008";
action.action = "ACCEPT";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ValidateSecurityGroupRuleAction.Result res = action.call();
```

 Python SDK

```
ValidateSecurityGroupRuleAction action = ValidateSecurityGroupRuleAction()
action.securityGroupUuid = "0351d8b796bd3165967f13d1da2f9576"
action.type = "Ingress"
action.protocol = "TCP"
action.remoteSecurityGroupUuid = "f938bc96baae3dc4b18be6bdbf34e783"
action.ipVersion = 4
action.srcIpRange = "10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24"
action.dstIpRange = "10.0.0.1,10.0.0.2-10.0.0.200,10.1.1.0/24"
action.dstPortRange = "1000,1001,1002-1005,1008"
action.action = "ACCEPT"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ValidateSecurityGroupRuleAction.Result res = action.call()
```

---

#### 修改安全组规则(ChangeSecurityGroupRule)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/rules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSecurityGroupRule": {
    "description": "test",
    "remoteSecurityGroupUuid": "bd2dcc93fbd73999bf920aeaab3c9e4e",
    "action": "DROP",
    "state": "Enabled",
    "priority": 1,
    "protocol": "TCP",
    "srcIpRange": "1.1.1.1,2.2.2.0/24,3.3.3.1-3.3.3.10",
    "dstPortRange": "1001,2000-2023,6001"
  },
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"changeSecurityGroupRule":{"description":"test","remoteSecurityGroupUuid":"bd2dcc93fbd73999bf920aeaab3c9e4e","action":"DROP","state":"Enabled","priority":1,"protocol":"TCP","srcIpRange":"1.1.1.1,2.2.2.0/24,3.3.3.1-3.3.3.10","dstPortRange":"1001,2000-2023,6001"}}'
http://localhost:8080/zstack/v1/security-groups/85a1d77188d836eab47b34e7129fb5fb/actions
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
| uuid | String | url | 安全组规则的UUID，唯一标示该资源 |  | 4.7.21 |
| description(可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的描述 |  | 4.7.21 |
| remoteSecurityGroupUuid (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 应用组间策略的远端安全组UUID | enabledisable | 4.7.21 |
| action (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的默认动作 | DROP ACCEPT | 4.7.21 |
| state (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的状态 | Enabled Disabled | 4.7.21 |
| priority (可选) | Integer | body(包含在**changeSecurityGroupState**结构中) | 规则的优先级 |  | 4.7.21 |
| protocol (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的协议类型 | ALL TCP UDP ICMP | 4.7.21 |
| srcIpRange (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的源方向IP范围 |  | 4.7.21 |
| dstIpRange (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的目的方向IP范围 |  | 4.7.21 |
| dstPortRange (可选) | String | body(包含在**changeSecurityGroupState**结构中) | 规则的目的方向端口范围 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "68e4f4b48b51369c8c2ada5cb6c2c3c3",
    "securityGroupUuid": "c80ad90499213d3b9989afdbfe498390",
    "type": "ingress",
    "protocol": "tcp",
    "state": "enable",
    "srcIpRange": "10.10.10.1-10.10.10.10",
    "dstPortRange": "2001-2023",
    "action": "RETURN",
    "createDate": "Sep 15, 2023 9:57:59 AM",
    "lastOpDate": "Sep 15, 2023 9:57:59 AM"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory
-
-

-
-

-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| securityGroupUuid | String | 安全组UUID | 4.7.21 |
| type | String | 流量类型 | 4.7.21 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| protocol | String | 流量协议类型 | 4.7.21 |
| state | String | 规则的可用状态 | 4.7.21 |
| priority | Integer | 规则优先级 | 4.7.21 |
| description | String | 规则描述 | 4.7.21 |
| srcIpRange | String | 源IP范围 | 4.7.21 |
| dstIpRange | String | 目的IP范围 | 4.7.21 |
| srcPortRange | String | 源端口范围，当前版本未实现 | 4.7.21 |
| dstPortRange | String | 目的端口范围 | 4.7.21 |
| action | String | 规则的默认动作 | 4.7.21 |
| remoteSecurityGroupUuid | String |  | 4.7.21 |
| allowedCidr | String | 允许的CIDR，根据流量类型的不同, 允许的CIDR有不同的含义 如果流量类型是Ingress，允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress，允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 4.7.21 |
| startPort | Integer | 如果协议是TCP/UDP，它是端口范围（port range）的起始端口号 如果协议是ICMP，它是ICMP类型（type） | 4.7.21 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号 如果协议是ICMP, 它是ICMP类型（type） | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
ChangeSecurityGroupRuleAction action = new ChangeSecurityGroupRuleAction();
action.uuid = "33869c6c323d30599da314fe1e46b01c";
action.description = "test";
action.remoteSecurityGroupUuid = "bd2dcc93fbd73999bf920aeaab3c9e4e";
action.action = "DROP";
action.state = "Enabled";
action.priority = 1;
action.protocol = "TCP";
action.srcIpRange = "1.1.1.1,2.2.2.0/24,3.3.3.1-3.3.3.10";
action.dstPortRange = "1001,2000-2023,6001";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSecurityGroupRuleAction.Result res = action.call();

```

 Python SDK

```
ChangeSecurityGroupRuleAction action = ChangeSecurityGroupRuleAction()
action.uuid = "33869c6c323d30599da314fe1e46b01c"
action.description = "test"
action.remoteSecurityGroupUuid = "bd2dcc93fbd73999bf920aeaab3c9e4e"
action.action = "DROP"
action.state = "Enabled"
action.priority = 1
action.protocol = "TCP"
action.srcIpRange = "1.1.1.1,2.2.2.0/24,3.3.3.1-3.3.3.10"
action.dstPortRange = "1001,2000-2023,6001"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSecurityGroupRuleAction.Result res = action.call()

```

---

#### 更改安全组规则状态(ChangeSecurityGroupRuleState)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/{securityGroupUuid}/rules/state/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSecurityGroupRuleState": {
    "ruleUuids": [
      "c895848e49763a85a74d0a8cee5a0720"
    ],
    "state": "Enabled"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"changeSecurityGroupRuleState":{"ruleUuids":["c895848e49763a85a74d0a8cee5a0720"],"state":"Enabled"}}'
http://localhost:8080/zstack/v1/security-groups/fbd126afdf6b32caab55327d2901170f/rules/state/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组的UUID，唯一标示该资源 |  | 4.7.21 |
| ruleUuids | List | body(包含在**changeSecurityGroupRuleState**结构中) | 规则的UUID列表 |  | 4.7.21 |
| state | String | body(包含在**changeSecurityGroupRuleState**结构中) | 规则的状态 | Enabled Disabled | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7c95c623cc983a548dcf3c9a257f23ae",
    "name": "web",
    "description": "for test",
    "state": "Enabled",
    "createDate": "Sep 15, 2023 9:58:00 AM",
    "lastOpDate": "Sep 15, 2023 9:58:00 AM",
    "internalId": 0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| state | String |  | 4.7.21 |
| ipVersion | Integer | ip协议号 | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |
| attachedL3NetworkUuids | Set |  | 4.7.21 |
| rules | List | 详情参考[rules] | 4.7.21 |

 #rules
-
-

-
-

-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| securityGroupUuid | String | 安全组UUID | 4.7.21 |
| type | String | 流量类型 | 4.7.21 |
| ipVersion | Integer | ip协议号 | 4.7.21 |
| protocol | String | 流量协议类型 | 4.7.21 |
| state | String | 规则的可用状态 | 4.7.21 |
| priority | Integer | 规则优先级 | 4.7.21 |
| description | String | 规则描述 | 4.7.21 |
| srcIpRange | String | 源IP范围 | 4.7.21 |
| dstIpRange | String | 目的IP范围 | 4.7.21 |
| srcPortRange | String | 源端口范围，当前版本未实现 | 4.7.21 |
| dstPortRange | String | 目的端口范围 | 4.7.21 |
| action | String | 规则的默认动作 | 4.7.21 |
| remoteSecurityGroupUuid | String |  | 4.7.21 |
| allowedCidr | String | 允许的CIDR,根据流量类型的不同, 允许的CIDR有不同的含义 如果流量类型是Ingress, 允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress, 允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR | 4.7.21 |
| startPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号 如果协议是ICMP, 它是ICMP类型（type） | 4.7.21 |
| endPort | Integer | 如果协议是TCP/UDP, 它是端口范围（port range）的起始端口号； 如果协议是ICMP，它是ICMP类型（type） | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
ChangeSecurityGroupRuleStateAction action = new ChangeSecurityGroupRuleStateAction();
action.securityGroupUuid = "fbd126afdf6b32caab55327d2901170f";
action.ruleUuids = asList("c895848e49763a85a74d0a8cee5a0720");
action.state = "Enabled";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSecurityGroupRuleStateAction.Result res = action.call();
```

 Python SDK

```
ChangeSecurityGroupRuleStateAction action = ChangeSecurityGroupRuleStateAction()
action.securityGroupUuid = "fbd126afdf6b32caab55327d2901170f"
action.ruleUuids = [c895848e49763a85a74d0a8cee5a0720]
action.state = "Enabled"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSecurityGroupRuleStateAction.Result res = action.call()
```

---

#### 更新安全组规则优先级(UpdateSecurityGroupRulePriority)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/{securityGroupUuid}/rules/priority/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSecurityGroupRulePriority": {
    "type": "Ingress",
    "rules": [
      {
        "ruleUuid": "7a73154d5d2331308f462c6bf2f725cb",
        "priority": 1
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
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"updateSecurityGroupRulePriority":{"type":"Ingress","rules":[{"ruleUuid":"7a73154d5d2331308f462c6bf2f725cb","priority":1}]}}'
http://localhost:8080/zstack/v1/security-groups/ea321fd5d0f7388e8efd4427c9fae15f/rules/priority/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| securityGroupUuid | String | url | 安全组的UUID，唯一标示该资源 |  | 4.7.21 |
| type | String | body(包含在**updateSecurityGroupRulePriority**结构中) | 规则的类型 | Ingress Egress | 4.7.21 |
| rules | List | body(包含在**updateSecurityGroupRulePriority**结构中) | 规则的优先级 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "777dbc5ec0cb3b14828096daa9e04133",
    "name": "test",
    "internalId": 0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| state | String |  | 4.7.21 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |
| attachedL3NetworkUuids | Set |  | 4.7.21 |
| rules | List | 详情参考[rules] | 4.7.21 |

 #rules
-
-

-
-

-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| securityGroupUuid | String | 安全组UUID | 4.7.21 |
| type | String | 流量类型 | 4.7.21 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| protocol | String | 流量协议类型 | 4.7.21 |
| state | String | 规则的可用状态 | 4.7.21 |
| priority | Integer | 规则优先级 | 4.7.21 |
| description | String | 规则描述 | 4.7.21 |
| srcIpRange | String | 源IP范围 | 4.7.21 |
| dstIpRange | String | 目的IP范围 | 4.7.21 |
| srcPortRange | String | 源端口范围，当前版本未实现 | 4.7.21 |
| dstPortRange | String | 目的端口范围 | 4.7.21 |
| action | String | 规则的默认动作 | 4.7.21 |
| remoteSecurityGroupUuid | String |  | 4.7.21 |
| allowedCidr | String | 允许的CIDR，根据流量类型的不同，允许的CIDR有不同的含义 如果流量类型是Ingress，允许的CIDR是允许访问虚拟机网卡的源CIDR 如果流量类型是Egress，允许的CIDR是允许从虚拟机网卡离开并到达的目的地CIDR创建时间 | 4.7.21 |
| startPort | Integer | 如果协议是TCP/UDP，它是端口范围（port range）的起始端口号 如果协议是ICMP，它是ICMP类型（type） | 4.7.21 |
| endPort | Integer | 如果协议是TCP/UDP，它是端口范围（port range）的起始端口号 如果协议是ICMP，它是ICMP类型（type） | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
UpdateSecurityGroupRulePriorityAction action = new UpdateSecurityGroupRulePriorityAction();
action.securityGroupUuid = "ea321fd5d0f7388e8efd4427c9fae15f";
action.type = "Ingress";
action.rules = asList([ruleUuid:7a73154d5d2331308f462c6bf2f725cb, priority:1]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSecurityGroupRulePriorityAction.Result res = action.call();
```

 Python SDK

```
UpdateSecurityGroupRulePriorityAction action = UpdateSecurityGroupRulePriorityAction()
action.securityGroupUuid = "ea321fd5d0f7388e8efd4427c9fae15f"
action.type = "Ingress"
action.rules = [[ruleUuid:7a73154d5d2331308f462c6bf2f725cb, priority:1]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSecurityGroupRulePriorityAction.Result res = action.call()
```

---

#### 查询网卡的默认流量策略(QueryVmNicSecurityPolicy)



##### API请求

 URLs

```
GET zstack/v1/security-groups/nics/security-policy
GET zstack/security-groups/nics/{uuid}/security-policy
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/security-groups/nics/security-policy?q=ingressPolicy=DROP&q=egressPolicy=DROP
```


```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/security-groups/nics/a4ef9b72cb66352f9040ce0f8c180b80/security-policy
```



可查询字段

运行CLI命令行工具，输入`QueryVmNicSecurityPolicy`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "vmNicUuid": "40d02946a770317aa1edac79ef350f3f",
      "ingressPolicy": "DROP",
      "egressPolicy": "ACCEPT",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| inventories | List | 详情参考[inventory] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmNicUuid | String | 云主机网卡UUID | 4.7.21 |
| ingressPolicy | String | 网卡入方向安全策略 | 4.7.21 |
| egressPolicy | String | 网卡出方向安全策略 | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
QueryVmNicSecurityPolicyAction action = new QueryVmNicSecurityPolicyAction();
action.conditions = asList("ingressPolicy=DROP","egressPolicy=DROP");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVmNicSecurityPolicyAction.Result res = action.call();
```

 Python SDK

```
QueryVmNicSecurityPolicyAction action = QueryVmNicSecurityPolicyAction()
action.conditions = ["ingressPolicy=DROP","egressPolicy=DROP"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVmNicSecurityPolicyAction.Result res = action.call()
```

---

#### 修改网卡的默认流量策略(ChangeVmNicSecurityPolicy)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/nics/{vmNicUuid}/security-policy/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmNicSecurityPolicy": {
    "ingressPolicy": "ALLOW",
    "egressPolicy": "DENY"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"changeVmNicSecurityPolicy":{"ingressPolicy":"ALLOW","egressPolicy":"DENY"}}'
http://localhost:8080/zstack/v1/security-groups/nics/5551303bee7037c8848cdb5741be7ff7/security-policy/actions
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 网卡的UUID，唯一标示该资源 |  | 4.7.21 |
| ingressPolicy (可选) | String | body(包含在**changeVmNicSecurityPolicy**结构中) | 网卡入方向安全策略 | DENY ALLOW | 4.7.21 |
| egressPolicy (可选) | String | body(包含在**changeVmNicSecurityPolicy**结构中) | 网卡出方向安全策略 | DENY ALLOW | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2c8164f7e3213f1491640a2f98d0a979",
    "vmNicUuid": "c731cb960eb635a997e58d154d3c4252",
    "ingressPolicy": "DENY",
    "egressPolicy": "ALLOW",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmNicUuid | String | 云主机网卡UUID | 4.7.21 |
| ingressPolicy | String | 网卡入方向安全策略 | 4.7.21 |
| egressPolicy | String | 网卡出方向安全策略 | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
ChangeVmNicSecurityPolicyAction action = new ChangeVmNicSecurityPolicyAction();
action.vmNicUuid = "5551303bee7037c8848cdb5741be7ff7";
action.ingressPolicy = "ALLOW";
action.egressPolicy = "DENY";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmNicSecurityPolicyAction.Result res = action.call();
```

 Python SDK

```
ChangeVmNicSecurityPolicyAction action = ChangeVmNicSecurityPolicyAction()
action.vmNicUuid = "5551303bee7037c8848cdb5741be7ff7"
action.ingressPolicy = "ALLOW"
action.egressPolicy = "DENY"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmNicSecurityPolicyAction.Result res = action.call()
```

---

#### 设置网卡的安全组(SetVmNicSecurityGroup)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/nics/{vmNicUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmNicSecurityGroup": {
    "refs": [
      {
        "securityGroupUuid": "a63c3b35a6553b4a912ee60cd06d5066",
        "priority": 1
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
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"setVmNicSecurityGroup":{"refs":[{"securityGroupUuid":"a63c3b35a6553b4a912ee60cd06d5066","priority":1}]}}'
http://localhost:8080/zstack/v1/security-groups/nics/6b7ad223ebb2328bb646f2e77b34957b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 网卡的UUID，唯一标示该资源 |  | 4.7.21 |
| refs | List | body(包含在**setVmNicSecurityGroup**结构中) | 网卡挂载的安全组 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": [
    {
      "uuid": "33aa195b943c3faa87e2c75a787cb7f5",
      "priority": 1,
      "securityGroupUuid": "63ec5dcb248138968f0153160b5b8b3a"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| priority | Integer | 安全组优先级 | 4.7.21 |
| vmNicUuid | String | 云主机网卡UUID | 4.7.21 |
| securityGroupUuid | String | 安全组UUID | 4.7.21 |
| vmInstanceUuid | String | 云主机UUID | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
SetVmNicSecurityGroupAction action = new SetVmNicSecurityGroupAction();
action.vmNicUuid = "6b7ad223ebb2328bb646f2e77b34957b";
action.refs = asList([securityGroupUuid:a63c3b35a6553b4a912ee60cd06d5066, priority:1]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmNicSecurityGroupAction.Result res = action.call();
```

 Python SDK

```
SetVmNicSecurityGroupAction action = SetVmNicSecurityGroupAction()
action.vmNicUuid = "6b7ad223ebb2328bb646f2e77b34957b"
action.refs = [[securityGroupUuid:a63c3b35a6553b4a912ee60cd06d5066, priority:1]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmNicSecurityGroupAction.Result res = action.call()
```

---

#### 虚拟IP相关接口

---

#### 创建虚拟IP(CreateVip)



##### API请求

 URLs

```
POST zstack/v1/vips
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "vip1",
    "l3NetworkUuid": "15788630ef6644af99c5378edf4e54da",
    "ipRangeUuid": "2e6e249189d83883aeb4c0fe79f82967",
    "requiredIp": "10.0.0.2"
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
-X POST -d '{"params":{"name":"vip1","l3NetworkUuid":"b75e7bddf2803f6c85f8450b01262546","ipRangeUuid":"2e6e249189d83883aeb4c0fe79f82967","requiredIp":"10.0.0.2"}}' http://localhost:8080/zstack/v1/vips
```

 参数列表
-
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| l3NetworkUuid | String | body(包含在**params**结构中) | 使用虚拟IP网络服务的三层网络UUID |  | 0.6 |
| ipRangeUuid (可选) | String | body(包含在**params**结构中) | IP段UUID |  | 3.9.0 |
| allocatorStrategy (可选) | String | body(包含在**params**结构中) | 分配策略 | DefaultHostAllocatorStrategy LastHostPreferredAllocatorStrategy LeastVmPreferredHostAllocatorStrategy MinimumCPUUsageHostAllocatorStrategy MinimumMemoryUsageHostAllocatorStrategy MaxInstancePerHostHostAllocatorStrategy | 0.6 |
| requiredIp (可选) | String | body(包含在**params**结构中) | 请求的IP |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
 {
  "inventory": {
    "uuid": "45a2700283f039a39f40100505a68609",
    "name": "vip1",
    "ipRangeUuid": "da8d443f5c923c969118721845891d53",
    "l3NetworkUuid": "e43b5613fd8039ee888cca53dae87341",
    "ip": "192.168.0.1",
    "state": "Enabled",
    "gateway": "127.0.0.1",
    "netmask": "255.255.0.0",
    "peerL3NetworkUuids": [
      "1f970d11e2be3b0da5ad65cd4d20a549"
    ],
    "system": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VipInventory | 详情参考[inventory] | 0.6 |

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
| l3NetworkUuid | String | 使用虚拟IP网络服务的三层网络UUID | 0.6 |
| ip | String | IPv4类型的IP地址 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |
| gateway | String | 网关 | 0.6 |
| netmask | String | 子网掩码 | 0.6 |
| prefixLen | Integer | 掩码长度 | 3.1.0 |
| serviceProvider | String | 提供VIP服务的服务提供者 | 0.6 |
| peerL3NetworkUuids | List | 提供VIP服务的L3网络UUID | 0.6 |
| useFor | String | 用途，例如：端口转发 | 0.6 |
| system | boolean | 是否系统创建 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| servicesRefs | List | 详情参考[servicesRefs] | 0.6 |

 #servicesRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| serviceType | String | 服务类型 | 3.9.0 |
| vipUuid | String | VIP UUID | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
CreateVipAction action = new CreateVipAction();
action.name = "vip1";
action.l3NetworkUuid = "b75e7bddf2803f6c85f8450b01262546";
action.ipRangeUuid = "2e6e249189d83883aeb4c0fe79f82967";
action.requiredIp = "10.0.0.2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVipAction.Result res = action.call();
```

 Python SDK

```
CreateVipAction action = CreateVipAction()
action.name = "vip1"
action.l3NetworkUuid = "b75e7bddf2803f6c85f8450b01262546"
action.ipRangeUuid = "2e6e249189d83883aeb4c0fe79f82967"
action.requiredIp = "10.0.0.2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVipAction.Result res = action.call()
```

---

#### 删除虚拟IP(DeleteVip)



##### API请求

 URLs

```
DELETE zstack/v1/vips/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 191031ca5ac34d5e92e1a86cde878edf" \
-X DELETE http://localhost:8080/zstack/v1/vips/38791fa2927b459cbeff033db96c3479?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
DeleteVipAction action = new DeleteVipAction();
action.uuid = "8da4c26b4089423f93cbce8ab804f9e9";
action.deleteMode = "Permissive";
action.sessionId = "772f7846b7c24d9b933deb8b03fc3024";
DeleteVipAction.Result res = action.call();
```

 Python SDK

```
DeleteVipAction action = DeleteVipAction()
action.uuid = "addc2d7cb578402f9ce1569402338c1b"
action.deleteMode = "Permissive"
action.sessionId = "429360288ef140afaeb86961b638ea62"
DeleteVipAction.Result res = action.call()
```

---

#### 查询虚拟IP(QueryVip)



##### API请求

 URLs

```
GET zstack/v1/vips
GET zstack/v1/vips/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fbe1443215334b0aa609b5417f5f36ab" \
-X GET http://localhost:8080/zstack/v1/vips?q=uuid=ba1cf7be9f20433fa5091bec091ba22d
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 39036aee2ef641afac5b253aae2377be" \
-X GET http://localhost:8080/zstack/v1/vips/a077653982cb422daa06e6c2d840b140
```



可查询字段

运行CLI命令行工具，输入`QueryVip`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "8c5eb4938be549218fda4c87de4d8cad",
      "name": "new name",
      "ipRangeUuid": "7d0dda5b1c4f40069ec4cfd6b66bdf48",
      "l3NetworkUuid": "a81054a6807e47a09922473e9ab376cb",
      "ip": "192.168.0.1",
      "state": "Enabled",
      "gateway": "127.0.0.1",
      "netmask": "255.255.0.0",
      "peerL3NetworkUuid": [
        "64ef7a2ea9ec4095b343ea239a7ba344"
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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String | IPv4类型的IP地址 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |
| gateway | String | 网关 | 0.6 |
| netmask | String | 子网掩码 | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| serviceProvider | String | 提供VIP服务的服务提供者 | 0.6 |
| peerL3NetworkUuid | String | L3网络UUID | 0.6 |
| useFor | String | 用途，例如：端口转发 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QueryVipAction action = new QueryVipAction();
action.conditions = asList("uuid=0a573b1c687246ff970c04ef5d0eaf07");
action.sessionId = "bf2f206d12d742d3a9182ea663e12265";
QueryVipAction.Result res = action.call();
```

 Python SDK

```
QueryVipAction action = QueryVipAction()
action.conditions = ["uuid=5a3bf1e979944ea4a958fdac5a8bcef2"]
action.sessionId = "bc563fd71d014e84a49f1d280ef020ff"
QueryVipAction.Result res = action.call()
```

---

#### 检查虚拟IP端口可用性(CheckVipPortAvailability)



##### API请求

 URLs

```
GET zstack/v1/vips/{vipUuid}/check-port-availability
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json";charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET -d '{"params":{"vipUuid":"b75e7bddf2803f6c85f8450b01262546","protocolType":"TCP","port":5}}' http://localhost:8080/zstack/v1/vips/e6ac71f8cf433c51822bedea67cf4781//check-port-availability
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vipUuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 4.7.21 |
| protocolType | String | body(包含在**params**结构中) | 协议名称 |  | 4.7.21 |
| port | int | body(包含在**params**结构中) | 查询端口 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "available":true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| available | boolean | Java内置数据类型 | 4.7.21 |

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
CheckVipPortAvailabilityAction action = new CheckVipPortAvailabilityAction();
action.vipUuid = "e6ac71f8cf433c51822bedea67cf4781";
action.protocolType = "TCP";
action.port = 5;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckVipPortAvailabilityAction.Result res = action.call();
```

 Python SDK

```
CheckVipPortAvailabilityAction action = new CheckVipPortAvailabilityAction();
action.vipUuid = "e6ac71f8cf433c51822bedea67cf4781";
action.protocolType = "TCP";
action.port = 5;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckVipPortAvailabilityAction.Result res = action.call();
```

---

#### 获取虚拟IP可用端口(GetVipAvailablePort)



##### API请求

 URLs

```
GET zstack/v1/vips/{vipUuid}/get-port-availability
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json";charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X GET -d '{"params":{"vipUuid":"b75e7bddf2803f6c85f8450b01262546","protocolType":"TCP","start":5,"limit":20}}' http://localhost:8080/zstack/v1/vips/e6ac71f8cf433c51822bedea67cf4781/get-port-availability
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vipUuid | String | body(包含在**params**结构中) | 资源的UUID，唯一标示该资源 |  | 4.7.21 |
| protocolType | String | body(包含在**params**结构中) | 协议名称 |  | 4.7.21 |
| start(可选) | Integer | body(包含在**params**结构中) | 查询开始下标 |  | 4.7.21 |
| limit(可选) | Integer | body(包含在**params**结构中) | 查询长度 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "availablePort":[1,2,3]
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| availablePort | List | Java内置数据类型 | 4.7.21 |

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
GetVipAvailablePortAction action = new GetVipAvailablePortAction();
action.vipUuid = "e6ac71f8cf433c51822bedea67cf4781";
action.protocolType = "TCP";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVipAvailablePortAction.Result res = action.call();
```

 Python SDK

```
GetVipAvailablePortAction action = new GetVipAvailablePortAction();
action.vipUuid = "e6ac71f8cf433c51822bedea67cf4781";
action.protocolType = "TCP";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVipAvailablePortAction.Result res = action.call();
```

---

#### 更新虚拟IP(UpdateVip)



##### API请求

 URLs

```
PUT zstack/v1/vips/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVip": {
    "name": "new name"
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
-X PUT -d '{"updateVip":{"name":"new name"}}' \
http://localhost:8080/zstack/v1/vips/cb7f47adc9e0386d952990c88835048c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateVip**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateVip**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "afc62fc544524344804c558156b57938",
    "name": "new name",
    "ipRangeUuid": "cbe101ec40844785ac64f0693e56122a",
    "l3NetworkUuid": "06272fa02c0b4776a0fb1bab6171ba34",
    "ip": "192.168.0.1",
    "state": "Enabled",
    "gateway": "127.0.0.1",
    "netmask": "255.255.0.0",
    "peerL3NetworkUuid": [
      "e35c8f6a65d14e8492e6fb72382dc1b4"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VipInventory | 详情参考[inventory] | 0.6 |

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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String | IPv4类型的IP地址 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |
| gateway | String | 网关 | 0.6 |
| netmask | String | 子网掩码 | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| serviceProvider | String | 提供VIP服务的服务提供者 | 0.6 |
| peerL3NetworkUuid | String | L3网络UUID | 0.6 |
| useFor | String | 用途，例如：端口转发 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateVipAction action = new UpdateVipAction();
action.uuid = "dbea243ee5c04eb5b68f8905baec42c6";
action.name = "new name";
action.sessionId = "b9f7110e36c147e7abcfbd0215c56368";
UpdateVipAction.Result res = action.call();
```

 Python SDK

```
UpdateVipAction action = UpdateVipAction()
action.uuid = "620313f8f6724571addc8ef00959d951"
action.name = "new name"
action.sessionId = "4632313cde0a4cbaa67c7ff2109ebe60"
UpdateVipAction.Result res = action.call()
```

---

#### 更改虚拟IP启用状态(ChangeVipState)



##### API请求

 URLs

```
PUT zstack/v1/vips/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVipState": {
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
-X PUT -d '{"changeVipState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/vips/5dae8db6e42831a1a219768d1f16abb5/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeVipState**结构中) | 状态事件 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "50be5da2ebcc41b1aa0413b611f2a723",
    "name": "vip1",
    "ipRangeUuid": "6c8c280a596846a3967c1202cc049770",
    "l3NetworkUuid": "df62c1dedde04fffbd591dc737a10772",
    "ip": "192.168.0.1",
    "state": "Enabled",
    "gateway": "127.0.0.1",
    "netmask": "255.255.0.0",
    "peerL3NetworkUuid": [
      "bdb49f66946143538608b8feb6b3c35a"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VipInventory | 详情参考[inventory] | 0.6 |

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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String | IPv4类型的IP地址 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |
| gateway | String | 网关 | 0.6 |
| netmask | String | 子网掩码 | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| serviceProvider | String | 提供VIP服务的服务提供者 | 0.6 |
| peerL3NetworkUuid | String | L3网络UUID | 0.6 |
| useFor | String | 用途，例如：端口转发 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeVipStateAction action = new ChangeVipStateAction();
action.uuid = "2165a4d5e45441088244ff4fa3614412";
action.stateEvent = "enable";
action.sessionId = "2e1079fe6f4f45dab2f97f86d5a0fbc8";
ChangeVipStateAction.Result res = action.call();
```

 Python SDK

```
ChangeVipStateAction action = ChangeVipStateAction()
action.uuid = "0191aa0014ae4b24ac7a87886a6d5527"
action.stateEvent = "enable"
action.sessionId = "1549fc2b0547482fb562020512ad89b6"
ChangeVipStateAction.Result res = action.call()
```

---

#### 获取虚拟IP所有业务端口列表(GetVipUsedPorts)



获取虚拟IP上所有业务的端口列表。业务类型包含负载均衡、端口转发、IPsec隧道。

##### API请求

 URLs

```
GET zstack/v1/vips/{uuid}/usedports
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e7b86195e5f74c698dc5d0521b0ad25d" \
-X GET http://localhost:8080/zstack/v1/vips/d8474e0dbfe84d47a449bb34979cbcb9/usedports?protocol=TCP
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | query | VIP UUID |  | 2.2 |
| protocol | String | query | 协议 | tcp udp | 2.2 |
| systemTags (可选) | List | query |  |  | 2.2 |
| userTags (可选) | List | query |  |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4f5f926580f4452a897b05b8f99e67ec",
      "protcol": "TCP",
      "usedPorts": [
        "100",
        "200",
        "201",
        "202",
        "204",
        "1000"
      ]
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
| uuid | String | VIP UUID | 2.2 |
| protcol | String |  | 2.2 |
| usedPorts | List |  | 2.2 |



##### SDK示例

 Java SDK

```
GetVipUsedPortsAction action = new GetVipUsedPortsAction();
action.uuid = "771a6f6fae9d49dca26ae309d137549e";
action.protocol = "TCP";
action.sessionId = "ef2bbc8896fa4368a4da1c4b2e39a9d8";
GetVipUsedPortsAction.Result res = action.call();
```

 Python SDK

```
GetVipUsedPortsAction action = GetVipUsedPortsAction()
action.uuid = "66313677af4e42fe8926703d89cf0164"
action.protocol = "TCP"
action.sessionId = "62f7ea6470954497966345142873bbfa"
GetVipUsedPortsAction.Result res = action.call()
```

---

#### 设置虚拟IP限速(SetVipQos)



##### API请求

 URLs

```
PUT zstack/v1/vips/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVipQos": {
    "port": 22.0,
    "outboundBandwidth": 1048576.0,
    "inboundBandwidth": 1048576.0
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
-X PUT -d '{"setVipQos":{"port":22.0,"outboundBandwidth":1048576.0,"inboundBandwidth":1048576.0}}' \
http://localhost:8080/zstack/v1/vips/9b500046ab303d42a8d8a17565b5673b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| port (可选) | Integer | body(包含在**setVipQos**结构中) | 端口 |  | 2.3 |
| outboundBandwidth (可选) | Long | body(包含在**setVipQos**结构中) | 出流量带宽限制 |  | 2.3 |
| inboundBandwidth (可选) | Long | body(包含在**setVipQos**结构中) | 入流量带宽限制。对于参数inboundBandwidth和outboundBandwidth，两者至少要设置一个。 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |


> **注意:** 说明: 对于参数**inboundBandwidth**和**outboundBandwidth**，两者至少要设置一个。



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "dd9459fe90ff4ae0b26ab3cbf1f1e3a2",
    "vipUuid": "e82e583934b441aaaf37039ff5eba877",
    "port": 80.0,
    "inboundBandwidth": 1048576.0,
    "outboundBandwidth": 1048576.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | VipQosInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| vipUuid | String | 虚拟IP UUID | 2.3 |
| port | Integer | 端口 | 2.3 |
| inboundBandwidth | Long | 出流量带宽限制 | 2.3 |
| outboundBandwidth | Long | 入流量带宽限制 | 2.3 |
| type | String | 限速单位类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
SetVipQosAction action = new SetVipQosAction();
action.uuid = "9b500046ab303d42a8d8a17565b5673b";
action.port = 22.0;
action.outboundBandwidth = 1048576.0;
action.inboundBandwidth = 1048576.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVipQosAction.Result res = action.call();
```

 Python SDK

```
SetVipQosAction action = SetVipQosAction()
action.uuid = "9b500046ab303d42a8d8a17565b5673b"
action.port = 22.0
action.outboundBandwidth = 1048576.0
action.inboundBandwidth = 1048576.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVipQosAction.Result res = action.call()
```

---

#### 获取虚拟IP限速(GetVipQos)



##### API请求

 URLs

```
GET zstack/v1/vip/{uuid}/vip-qos
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vip/e7bd5b22962e33ba8608533f18f10bd1/vip-qos
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "5a0b0e4ab75c4fffa890cf085add862f",
      "vipUuid": "23349810e3874c2dad85042db1ac11dc",
      "port": 80.0,
      "inboundBandwidth": 1048576.0,
      "outboundBandwidth": 1048576.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventories | List | 详情参考[inventories] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| vipUuid | String | 虚拟IP UUID | 2.3 |
| port | Integer | 端口 | 2.3 |
| inboundBandwidth | Long | 出流量带宽限制 | 2.3 |
| outboundBandwidth | Long | 入流量带宽限制 | 2.3 |
| type | String | 限速单位类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
GetVipQosAction action = new GetVipQosAction();
action.uuid = "e7bd5b22962e33ba8608533f18f10bd1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVipQosAction.Result res = action.call();
```

 Python SDK

```
GetVipQosAction action = GetVipQosAction()
action.uuid = "e7bd5b22962e33ba8608533f18f10bd1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVipQosAction.Result res = action.call()
```

---

#### 取消虚拟IP限速(DeleteVipQos)



##### API请求

 URLs

```
DELETE zstack/v1/vips/{uuid}/vip-qos?port={port}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vips/cbfc39af27633b31927fa0c259bfde80/vip-qos?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| port (可选) | Integer | url | 端口 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



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
DeleteVipQosAction action = new DeleteVipQosAction();
action.uuid = "cbfc39af27633b31927fa0c259bfde80";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVipQosAction.Result res = action.call();
```

 Python SDK

```
DeleteVipQosAction action = DeleteVipQosAction()
action.uuid = "cbfc39af27633b31927fa0c259bfde80"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVipQosAction.Result res = action.call()
```

---

#### 弹性IP相关接口

---

#### 创建弹性IP(CreateEip)



##### API请求

 URLs

```
POST zstack/v1/eips
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "Test-EIP",
"vipUuid": "7fdf1752627948afb2418f93825c478b",
"vmNicUuid": "be5532b08b7a48949667b654468dc5a5"
  },
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c0bd88f213cf42bc8b8fd42d1b269d50" \
-X POST -d '{"params":{"name":"Test-EIP","vipUuid":"f1b1901cefa939d7bf5775ec71735637","vmNicUuid":"bb64d3fc676b3b5cbdf0d768eb7d05a1"}}' \
http://localhost:8080/zstack/v1/eips
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 弹性IP名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 弹性IP的详细描述 |  | 0.6 |
| vipUuid | String | body(包含在params结构中) | VIP UUID |  | 0.6 |
| vmNicUuid (可选) | String | body(包含在params结构中) | 云主机网卡UUID |  | 0.6 |
| usedIpUuid (可选) | String | body(包含在**params**结构中) | IP地址Uuid |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID。若指定，云主机会使用该字段值作为UUID |  | 0.6 |
| systemTags (可选) | List | body | EIP的系统标签 |  | 0.6 |
| userTags (可选) | List | body | EIP的用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "Test-EIP",
"vmNicUuid": "07f9715b85da40d9bd17e5f4277304bd",
"vipUuid": "acc6dc9271f54e58ab94e4a1069bc7e5"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | EipInventory | 详情参考[inventory] | 0.6 |

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
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vipIp | String |  | 0.6 |
| guestIp | String |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateEipAction action = new CreateEipAction();
action.name = "Test-EIP";
action.vipUuid = "a600144228904c709d9d36a7d8e7bc50";
action.vmNicUuid = "c6ef3b3fc5c54033ad07514e3ee71199";
action.sessionId = "284027438a4e46d4abb185a30eaac6ff";
CreateEipAction.Result res = action.call();
```

 Python SDK

```
CreateEipAction action = CreateEipAction()
action.name = "Test-EIP"
action.vipUuid = "8e6507f39d6f40479f48a974a9d6afd2"
action.vmNicUuid = "91ad47c708e140fd83348182a3f098a6"
action.sessionId = "9bdd3970d72144c8899edb0158a4ed6d"
CreateEipAction.Result res = action.call()
```

---

#### 删除弹性IP(DeleteEip)



##### API请求

 URLs

```
DELETE/v1/eips/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 45ccb9eb4add405d9059fb45990a6e8c" \
-X DELETE http://localhost:8080/zstack/v1/eips/468cb75384344acd87f22610d07080e5?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 弹性IP的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
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
DeleteEipAction action = new DeleteEipAction();
action.uuid = "7ff634c9d79c48ca976a34ce53951c76";
action.deleteMode = "Permissive";
action.sessionId = "44b7b711d77b4dfa91257db5b9a61585";
DeleteEipAction.Result res = action.call();
```

 Python SDK

```
DeleteEipAction action = DeleteEipAction()
action.uuid = "e0699e3693ea429180371be5ca95e49e"
action.deleteMode = "Permissive"
action.sessionId = "ee71c70ee83a4ef8876f86d3876dbc8f"
DeleteEipAction.Result res = action.call()
```

---

#### 查询弹性IP(QueryEip)



##### API请求

 URLs

```
GET zstack/v1/eips
GET zstack/v1/eips/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth ecbf8328397545a890cb7f299016ff65" \
-X GET http://localhost:8080/zstack/v1/eips
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 58e98c60b171447b8c1940b5a8a1ad0f" \
-X GET http://localhost:8080/zstack/v1/eips/66803656d159456dacda9c074945e40d
```



可查询字段

运行CLI命令行工具，输入`QueryEip`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "Test-EIP",
"vmNicUuid": "67dfb04014b64489addb9ff7db5c7eb8",
"vipUuid": "e5bafce543e044419a8ffad7d416201e"
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
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vipIp | String |  | 0.6 |
| guestIp | String |  | 0.6 |



##### SDK示例



Java SDK

```
QueryEipAction action = new QueryEipAction();
action.conditions = asList();
action.sessionId = "02a7bb80af0a43ea8cecb01e8361f4a3";
QueryEipAction.Result res = action.call();
```

 Python SDK

```
QueryEipAction action = QueryEipAction()
action.conditions = []
action.sessionId = "84b2e52f0e2a41d09b428627b6266f28"
QueryEipAction.Result res = action.call()
```

---

#### 更新弹性IP(UpdateEip)



##### API请求

 URLs

```
PUT zstack/v1/eips/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateEip": {
"name": "Test-EIP"
  },
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 48675e997cc24705a248f756bd4c617c" \
-X PUT -d '{"updateEip":{"name":"Test-EIP"}}' \
http://localhost:8080/zstack/v1/eips/4d153a67262f341cbb4d5351ec844ab7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 弹性IP的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在updateEip结构中) | 弹性IP名称 |  | 0.6 |
| description (可选) | String | body(包含在updateEip结构中) | 弹性IP的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "Test-EIP",
"vmNicUuid": "cb1779456b2e47ecb436385e9731fa92",
"vipUuid": "b092230e024e4d4bab4f8919ee6b4848"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | EipInventory | 详情参考[inventory] | 0.6 |

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
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vipIp | String |  | 0.6 |
| guestIp | String |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateEipAction action = new UpdateEipAction();
action.uuid = "81ab4053a9484332b8e1aafa7e00a399";
action.name = "Test-EIP";
action.sessionId = "08c50da7ac034e6f9461785af2f94a7e";
UpdateEipAction.Result res = action.call();
```

 Python SDK

```
UpdateEipAction action = UpdateEipAction()
action.uuid = "e510fba3a1c646559d1db59f9b37c751"
action.name = "Test-EIP"
action.sessionId = "2d0aff43d9fe4294b16069f6762d0832"
UpdateEipAction.Result res = action.call()
```

---

#### 更改弹性IP启用状态(ChangeEipState)



##### API请求

 URLs

```
PUT zstack/v1/eips/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeEipState": {
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
-H "Authorization: OAuth ba708ad93aa54eb696ea994d412d539a" \
-X PUT -d '{"changeEipState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/eips/e6c715aaa65c39aa948d88e548a5f044/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 弹性IP的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeEipState**结构中) | 状态事件 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-EIP",
    "vmNicUuid": "8384e17c064a4b3f819421beb695891d",
    "vipUuid": "4ab30bbbf55f4bcda38acd573335d6d7",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | EipInventory | 详情参考[inventory] | 0.6 |

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
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vipIp | String |  | 0.6 |
| guestIp | String |  | 0.6 |



##### SDK示例

 Java SDK

```
ChangeEipStateAction action = new ChangeEipStateAction();
action.uuid = "ae4f106e8e884788bf73ee2e863a2ad3";
action.stateEvent = "enable";
action.sessionId = "c35fc61e1a784c41a17cb9a0fe9cd2a5";
ChangeEipStateAction.Result res = action.call();
```

 Python SDK

```
ChangeEipStateAction action = ChangeEipStateAction()
action.uuid = "b5b5cd464d2d48cca37352fb904e5226"
action.stateEvent = "enable"
action.sessionId = "17f673d897dc47fb845c48fba7af7942"
ChangeEipStateAction.Result res = action.call()
```

---

#### 获取可绑定指定弹性IP的云主机网卡(GetEipAttachableVmNics)



##### API请求

 URLs

```
GET zstack/v1/eips/{eipUuid}/vm-instances/candidate-nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth dd4a7d40a7e246879ea53fff9fb6dc02" \
-X GET http://localhost:8080/zstack/v1/eips/6bd0a6a4e5dd4f618ff314289acc112f/vm-instances/candidate-nics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| eipUuid (可选) | String | url | 弹性IP UUID |  | 0.6 |
| vipUuid (可选) | String | query | VIP UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b9d15f91920738cb9c1d3d54c543da87",
      "vmInstanceUuid": "426e0bf3909c3049be70e9f621d69cae",
      "usedIpUuid": "74f3ce37130c386f8b79d1656285a41b",
      "l3NetworkUuid": "cad25a3e482d39e8b428a4f25db07b41",
      "ip": "192.168.1.10",
      "mac": "00:0c:29:bd:99:fc",
      "hypervisorType": "KVM",
      "netmask": "255.255.255.0",
      "gateway": "192.168.1.1",
      "deviceId": 0.0,
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
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetEipAttachableVmNicsAction action = new GetEipAttachableVmNicsAction();
action.eipUuid = "281f3fe6c8bc42d7a2b7911db8bc8a9b";
action.sessionId = "05d5744919984e6680655fcfc85e6dd9";
GetEipAttachableVmNicsAction.Result res = action.call();
```

 Python SDK

```
GetEipAttachableVmNicsAction action = GetEipAttachableVmNicsAction()
action.eipUuid = "998c40730b1b4dd19ca464d7d30f432c"
action.sessionId = "7682cccdd2c74324b1a82232cd730657"
GetEipAttachableVmNicsAction.Result res = action.call()
```

---

#### 获取vmNic可绑定的EIp(GetVmNicAttachableEips)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/nics/{vmNicUuid}/candidate-eips
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth dd4a7d40a7e246879ea53fff9fb6dc02" \
-X GET http://localhost:8080/zstack/v1/vm-instances/nics/9d11dc19607c32cda7268c0655e117fc/candidate-eips?limit=1000.0&start=0.0
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 4.4.6 |
| ipVersion (可选) | Integer | query | IP地址版本 | 4 6 | 4.4.6 |
| limit (可选) | Integer | query | 统计结果数量 |  | 4.4.6 |
| start (可选) | Integer | query | 起始查询记录位置 |  | 4.4.6 |
| systemTags (可选) | List | query | 系统标签 |  | 4.4.6 |
| userTags (可选) | List | query | 用户标签 |  | 4.4.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "fe174df8c1003e3a9f13aa73104f45ee",
      "name": "eip",
      "vmNicUuid": "d29fb63d5aba4bbf98ec8663d6b4ba21",
      "vipUuid": "a5cfe85eb0d7448fbe153360c52114ce",
      "createDate": "Nov 14, 2017 9:20:57 AM",
      "lastOpDate": "Nov 14, 2017 9:20:57 AM",
      "state": "Enable",
      "vipIp": "10.72.109.11",
      "guestIp": "172.168.1.1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.6 |
| inventories | List | 详情参考[inventories] | 4.4.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.6 |
| description | String | 错误的概要描述 | 4.4.6 |
| details | String | 错误的详细信息 | 4.4.6 |
| elaboration | String | 保留字段，默认为null | 4.4.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| vmNicUuid | String | 云主机网卡UUID | 4.4.6 |
| vipUuid | String | VIP UUID | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| state | String |  | 4.4.6 |
| vipIp | String |  | 4.4.6 |
| guestIp | String |  | 4.4.6 |



##### SDK示例

 Java SDK

```
GetVmNicAttachableEipsAction action = new GetVmNicAttachableEipsAction();
action.vmNicUuid = "9d11dc19607c32cda7268c0655e117fc";
action.limit = 1000.0;
action.start = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmNicAttachableEipsAction.Result res = action.call();
```

 Python SDK

```
GetVmNicAttachableEipsAction action = GetVmNicAttachableEipsAction()
action.vmNicUuid = "9d11dc19607c32cda7268c0655e117fc"
action.limit = 1000.0
action.start = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmNicAttachableEipsAction.Result res = action.call()
```

---

#### 绑定弹性IP(AttachEip)



##### API请求

 URLs

```
POST zstack/v1/eips/{eipUuid}/vm-instances/nics/{vmNicUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/eips/b7b3d87e803434f3b597638377830e68/vm-instances/nics/3fb731573096397c90dbe65781d5b616
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| eipUuid | String | url | 弹性IP UUID |  | 0.6 |
| vmNicUuid | String | body | 云主机网卡UUID |  | 0.6 |
| usedIpUuid (可选) | String | body(包含在**params**结构中) | IP地址Uuid |  | 3.1.0 |
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



##### SDK示例

 Java SDK

```
AttachEipAction action = new AttachEipAction();
action.eipUuid = "dfee2872f32f4eab81cce8be02d564f7";
action.vmNicUuid = "77439a0f6c464053937fdfc12531647e";
action.sessionId = "80a49201196649f296e8b1c3b03d2284";
AttachEipAction.Result res = action.call();
```

 Python SDK

```
AttachEipAction action = AttachEipAction()
action.eipUuid = "080064a02ea9470a9364bdc255c1cfa6"
action.vmNicUuid = "e255a04227b94b5181eda063e1f8b17a"
action.sessionId = "beebaac6f3fe4ac99db525f8775b5a61"
AttachEipAction.Result res = action.call()
```

---

#### 解绑弹性IP(DetachEip)



##### API请求

 URLs

```
DELETE/v1/eips/{uuid}/vm-instances/nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7e5d824e15c64e1ca2fc3eca9e315c41" \
-X DELETE http://localhost:8080/zstack/v1/eips/6e1a3bdbe38045658546a6b7fb3df990/vm-instances/nics?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 弹性IP的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "Test-EIP",
"vmNicUuid": "04c0bc3e4c1d44c8aac1fd2e1be10d81",
"vipUuid": "8284fce519774899a3ba01e304df6c3b"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | EipInventory | 详情参考[inventory] | 0.6 |

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
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vipIp | String |  | 0.6 |
| guestIp | String |  | 0.6 |



##### SDK示例

 Java SDK

```
DetachEipAction action = new DetachEipAction();
action.uuid = "9a8c75df80524b13adf769626703efc0";
action.sessionId = "e7b6f5ef6d134d058e7d85e3ccd226a8";
DetachEipAction.Result res = action.call();
```



Python SDK

```
DetachEipAction action = DetachEipAction()
action.uuid = "28ddb9165c1444a7a7aa5119a5ceb926"
action.sessionId = "47e371f392934e3f8edbc49031fcf376"
DetachEipAction.Result res = action.call()
```

---

#### 端口转发相关接口

---

#### 创建端口转发规则(CreatePortForwardingRule)



##### **API请求**

 URLs

```
POST zstack/v1/port-forwarding
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"vipUuid": "214cf4f562bf40b98a7c954081f94f03",
"vipPortStart": 22.0,
"protocolType": "TCP",
"vmNicUuid": "84590db8896d4e498bf69d35239a31cc",
"name": "pf1"
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
-X POST -d '{"params":{"vipUuid":"1c4824bb6043388cac7499dd481ecaa4","vipPortStart":22.0,"protocolType":"TCP","vmNicUuid":"0611006103d335dfbfc0f9bb2a46d541","name":"pf1"}}' \
http://localhost:8080/zstack/v1/port-forwarding
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vipUuid | String | body(包含在params结构中) | VIP UUID |  | 0.6 |
| vipPortStart | Integer | body(包含在params结构中) | VIP的起始端口号 |  | 0.6 |
| vipPortEnd (可选) | Integer | body(包含在params结构中) | VIP的结束端口号; 如果忽略不设置, 会默认设置为vipPortStart |  | 0.6 |
| privatePortStart (可选) | Integer | body(包含在params结构中) | 客户IP（虚拟机网卡的IP地址）的起始端口号; 如果忽略不设置, 会默认设置为vipPortStart |  | 0.6 |
| privatePortEnd (可选) | Integer | body(包含在params结构中) | 客户IP（虚拟机网卡的IP地址）的结束端口号; 如果忽略不设置, 会默认设置为vipPortEnd |  | 0.6 |
| protocolType | String | body(包含在params结构中) | 网络流量协议类型 | TCP UDP | 0.6 |
| vmNicUuid (可选) | String | body(包含在params结构中) | 云主机网卡UUID |  | 0.6 |
| allowedCidr (可选) | String | body(包含在params结构中) | 源CIDR; 端口转发规则只作用于源CIDR的流量; 如果忽略不设置, 会默认设置为to 0.0.0.0/0 |  | 0.6 |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 用户指定的资源UUID，若指定，系统不会为该资源随机分配UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "895a8ce93d274db78e2ef1462f8b8a29",
"name": "TestAttachRule",
"description": "test atatch rule",
"vipIp": "192.168.0.187",
"guestIp": "10.0.0.244",
"vipUuid": "6151c96fd2ac4d6cbd8f8eedffc06de5",
"vipPortStart": 33.0,
"vipPortEnd": 33.0,
"privatePortStart": 33.0,
"privatePortEnd": 33.0,
"vmNicUuid": "581ea3b08aef4096ac24e160f1ab0f8e",
"protocolType": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:20:10 PM",
"lastOpDate": "Jun 7, 2017 9:20:10 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PortForwardingRuleInventory | 详情参考[inventory] | 0.6 |

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
| vipIp | String | VIP的IP地址 | 0.6 |
| guestIp | String | 虚拟机网卡的IP地址 | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| vipPortStart | Integer | VIP的起始端口号 | 0.6 |
| vipPortEnd | Integer | VIP的结束端口号 | 0.6 |
| privatePortStart | Integer | 客户IP的起始端口号 | 0.6 |
| privatePortEnd | Integer | 客户IP的结束端口号 | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| protocolType | String | 网络流量的协议类型 | 0.6 |
| state | String | 规则可用状态 | 0.6 |
| allowedCidr | String | 源CIDR; 端口转发规则只作用于源CIDR的流量 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
CreatePortForwardingRuleAction action = new CreatePortForwardingRuleAction();
action.vipUuid = "966f9f294e094243bcfaf7eeee70aeae";
action.vipPortStart = 22.0;
action.protocolType = "TCP";
action.vmNicUuid = "ace8c962d59248e38fadac5df9a108a7";
action.name = "pf1";
action.sessionId = "5f4df8c7fae44602b5f7e5d376904d6b";
CreatePortForwardingRuleAction.Result res = action.call();

```

 Python SDK

```
CreatePortForwardingRuleAction action = CreatePortForwardingRuleAction()
action.vipUuid = "1d130b0bb1e44aafa76d6280479f5399"
action.vipPortStart = 22.0
action.protocolType = "TCP"
action.vmNicUuid = "78c6172984874e5e9cdd3bf0248080ca"
action.name = "pf1"
action.sessionId = "4a3371ccd0cc4cdfa75ae46aeec14f41"
CreatePortForwardingRuleAction.Result res = action.call()
```

---

#### 删除端口转发规则(DeletePortForwardingRule)



##### **API请求**

 URLs

```
DELETE zstack/v1/port-forwarding/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 064a2c25381042d6b623c12e26418e78" \
-X DELETE http://localhost:8080/zstack/v1/port-forwarding/495b48a2bcf745e1ac584be6e366f0ab?deleteMode=Permissive
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | Permissive：如果删除过程中发生错误或者删除不被允许云平台会停止删除操作;在这种情况下, 包含失败原因的错误代码会被返回. Enforcing：云平台会忽略所有错误和权限而直接删除资源; 在这种情况下, 删除操作总是会成功. |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeletePortForwardingRuleAction action = new DeletePortForwardingRuleAction();
action.uuid = "42154ff320ea407dbc8b48088e541dcb";
action.deleteMode = "Permissive";
action.sessionId = "2b5cb5c82fb846669cd2c5e557bb140e";
DeletePortForwardingRuleAction.Result res = action.call();
```

 Python SDK

```
DeletePortForwardingRuleAction action = DeletePortForwardingRuleAction()
action.uuid = "a8ac2d430d71487ea47419950e39ee4a"
action.deleteMode = "Permissive"
action.sessionId = "156eb3cd301546828a925386f331eb34"
DeletePortForwardingRuleAction.Result res = action.call()
```

---

#### 查询端口转发规则(QueryPortForwardingRule)



##### API请求

 URLs

```
GET zstack/v1/port-forwarding
GET zstack/v1/port-forwarding/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 959a6d98336c4575a31212834d8ccc4d" \
-X GET http://localhost:8080/zstack/v1/port-forwarding?q=name=pf1&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 0389ba8bf3c44bf8a9c5ee89d066fbdc" \
-X GET http://localhost:8080/zstack/v1/port-forwarding/3d9c9dbbea944e039d55e706aacb6899
```



可查询字段

运行CLI命令行工具，输入`QueryPortForwardingRule`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "c5cf6d7df3164418b3fe5c7569eb1dea",
"name": "TestAttachRule",
"description": "test atatch rule",
"vipIp": "192.168.0.187",
"guestIp": "10.0.0.244",
"vipUuid": "b5166a0c9adb4aaf8088022b5336209a",
"vipPortStart": 33.0,
"vipPortEnd": 33.0,
"privatePortStart": 33.0,
"privatePortEnd": 33.0,
"vmNicUuid": "8aa417eb4537475b815b289240e0c0c2",
"protocolType": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:21:17 PM",
"lastOpDate": "Jun 7, 2017 9:21:17 PM"
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
| vipIp | String | VIP的IP地址 | 0.6 |
| guestIp | String | 虚拟机网卡的IP地址 | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| vipPortStart | Integer | VIP的起始端口号 | 0.6 |
| vipPortEnd | Integer | VIP的结束端口号 | 0.6 |
| privatePortStart | Integer | 客户IP的起始端口号 | 0.6 |
| privatePortEnd | Integer | 客户IP的结束端口号 | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| protocolType | String | 网络流量的协议类型 | 0.6 |
| state | String | 规则可用状态 | 0.6 |
| allowedCidr | String | 源CIDR; 端口转发规则只作用于源CIDR的流量 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QueryPortForwardingRuleAction action = new QueryPortForwardingRuleAction();
action.conditions = asList("name=pf1","state=Enabled");
action.sessionId = "4311e616ca8b4bb19d0792be1e08f3b8";
QueryPortForwardingRuleAction.Result res = action.call();
```

 Python SDK

```
QueryPortForwardingRuleAction action = QueryPortForwardingRuleAction()
action.conditions = ["name=pf1","state=Enabled"]
action.sessionId = "b9745425f62d43289db77d9bfd117b35"
QueryPortForwardingRuleAction.Result res = action.call()
```

---

#### 更新端口转发规则(UpdatePortForwardingRule)



##### API请求

 URLs

```
PUT zstack/v1/port-forwarding/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updatePortForwardingRule": {
"name": "pf2",
"description": "new rule"
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
-X PUT -d '{"updatePortForwardingRule":{"name":"pf2","description":"new rule"}}' \
http://localhost:8080/zstack/v1/port-forwarding/07eb042c2f5837a99f4018c3ee7e4137/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updatePortForwardingRule**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updatePortForwardingRule**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "420edb331ec34871a416e570fa4faf8b",
"name": "TestAttachRule",
"description": "test atatch rule",
"vipIp": "192.168.0.187",
"guestIp": "10.0.0.244",
"vipUuid": "8282dbb28b70416790bd83d08d3718ba",
"vipPortStart": 33.0,
"vipPortEnd": 33.0,
"privatePortStart": 33.0,
"privatePortEnd": 33.0,
"vmNicUuid": "2e63ec7524074e9dad1255d5e02f0697",
"protocolType": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:20:38 PM",
"lastOpDate": "Jun 7, 2017 9:20:38 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PortForwardingRuleInventory | 详情参考[inventory] | 0.6 |

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
| vipIp | String | VIP的IP地址 | 0.6 |
| guestIp | String | 虚拟机网卡的IP地址 | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| vipPortStart | Integer | VIP的起始端口号 | 0.6 |
| vipPortEnd | Integer | VIP的结束端口号 | 0.6 |
| privatePortStart | Integer | 客户IP的起始端口号 | 0.6 |
| privatePortEnd | Integer | 客户IP的结束端口号 | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| protocolType | String | 网络流量的协议类型 | 0.6 |
| state | String | 规则可用状态 | 0.6 |
| allowedCidr | String | 源CIDR; 端口转发规则只作用于源CIDR的流量 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdatePortForwardingRuleAction action = new UpdatePortForwardingRuleAction();
action.uuid = "b180491f86cd4de4befd11df26ebc4b1";
action.name = "pf2";
action.description = "new rule";
action.sessionId = "1130b06d95ed438386c8199cfae9e55b";
UpdatePortForwardingRuleAction.Result res = action.call();
```

 Python SDK

```
UpdatePortForwardingRuleAction action = UpdatePortForwardingRuleAction()
action.uuid = "fe896714482549eaac0cd07a6661664a"
action.name = "pf2"
action.description = "new rule"
action.sessionId = "0992d35c275a4def8bcbb013653b65f9"
UpdatePortForwardingRuleAction.Result res = action.call()
```

---

#### 改变端口转发规则的状态(ChangePortForwardingRuleState)



##### API请求

 URLs

```
PUT zstack/v1/port-forwarding/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changePortForwardingRuleState": {
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
-X PUT -d '{"changePortForwardingRuleState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/port-forwarding/d391cd5c4b57369daa48190ec0e193f6/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changePortForwardingRuleState**结构中) | 端口转发规则的状态 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "59d724e1f8e8417693fbc14d124ce801",
"name": "TestAttachRule",
"description": "test atatch rule",
"vipIp": "192.168.0.187",
"guestIp": "10.0.0.244",
"vipUuid": "f9c5cbc8662d43408dc704003d4f70ad",
"vipPortStart": 33.0,
"vipPortEnd": 33.0,
"privatePortStart": 33.0,
"privatePortEnd": 33.0,
"vmNicUuid": "1b41288698ac45149f352ab6c8de2531",
"protocolType": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:20:26 PM",
"lastOpDate": "Jun 7, 2017 9:20:26 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PortForwardingRuleInventory | 详情参考[inventory] | 0.6 |

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
| vipIp | String | VIP的IP地址 | 0.6 |
| guestIp | String | 虚拟机网卡的IP地址 | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| vipPortStart | Integer | VIP的起始端口号 | 0.6 |
| vipPortEnd | Integer | VIP的结束端口号 | 0.6 |
| privatePortStart | Integer | 客户IP的起始端口号 | 0.6 |
| privatePortEnd | Integer | 客户IP的结束端口号 | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| protocolType | String | 网络流量的协议类型 | 0.6 |
| state | String | 规则可用状态 | 0.6 |
| allowedCidr | String | 源CIDR; 端口转发规则只作用于源CIDR的流量 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
ChangePortForwardingRuleStateAction action = new ChangePortForwardingRuleStateAction();
action.uuid = "4a721a0136d94428951072e3314b5187";
action.stateEvent = "disable";
action.sessionId = "ce7e78520ff34fbd8dcc181fba226ee0";
ChangePortForwardingRuleStateAction.Result res = action.call();
```

 Python SDK

```
ChangePortForwardingRuleStateAction action = ChangePortForwardingRuleStateAction()
action.uuid = "a694cfa2057e4bd087a076e6f970f8cf"
action.stateEvent = "disable"
action.sessionId = "abbfa65e2f3040038dc85a68ffa37c8b"
ChangePortForwardingRuleStateAction.Result res = action.call()
```

---

#### 获取云主机网卡列表(GetPortForwardingAttachableVmNics)



获取可应用端口转发规则的云主机网卡列表。

##### API请求

 URLs

```
GET zstack/v1/port-forwarding/{ruleUuid}/vm-instances/candidate-nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b6d8f8edb4aa48f388591c2dc83fabe9" \
-X GET http://localhost:8080/zstack/v1/port-forwarding/039e99f4cf9741adabaf972914fa9a30/vm-instances/candidate-nics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleUuid | String | url | 规则的uuid |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "2eb90e57e12f400ba8349742840eb9f9",
"vmInstanceUuid": "efa24e175ba34c1196f9818ea6f56e5f",
"l3NetworkUuid": "39e4eeeb2b1e4bb885922cb5c6585277",
"ip": "192.168.0.123",
"mac": "fa:ef:34:5c:6c:00",
"netmask": "255.255.255.0",
"gateway": "192.168.0.1",
"internalName": "eth0",
"deviceId": 0.0
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
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetPortForwardingAttachableVmNicsAction action = new GetPortForwardingAttachableVmNicsAction();
action.ruleUuid = "5980282a68024f039ddfe379b43e49b1";
action.sessionId = "e309fcb7cb0545a3b802a21acfa4b397";
GetPortForwardingAttachableVmNicsAction.Result res = action.call();
```

 Python SDK

```
GetPortForwardingAttachableVmNicsAction action = GetPortForwardingAttachableVmNicsAction()
action.ruleUuid = "530c24831aaf4ff6bda365c774952576"
action.sessionId = "595b1267d25d4c709c081ecb3ea2f00e"
GetPortForwardingAttachableVmNicsAction.Result res = action.call()
```

---

#### 挂载规则到虚拟机网卡上(AttachPortForwardingRule)



##### API请求

 URLs

```
POST zstack/v1/port-forwarding/{ruleUuid}/vm-instances/nics/{vmNicUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/port-forwarding/4c74c079f5b836e1912d20914953d722/vm-instances/nics/05c384cc720e32e4b57e93daea1c5b91
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleUuid | String | url | 规则的uuid |  | 0.6 |
| vmNicUuid | String | url | 云主机网卡UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "8727976deceb42e898d9efc50863564a",
"name": "TestAttachRule",
"description": "test atatch rule",
"vipIp": "192.168.0.187",
"guestIp": "10.0.0.244",
"vipUuid": "2aa6a4055ce94c319894dfddc330376f",
"vipPortStart": 33,
"vipPortEnd": 33,
"privatePortStart": 33,
"privatePortEnd": 33,
"vmNicUuid": "39f90e4259784eee880e1cbef31c88da",
"protocolType": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:20:32 PM",
"lastOpDate": "Jun 7, 2017 9:20:32 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PortForwardingRuleInventory | 详情参考[inventory] | 0.6 |

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
| vipIp | String | VIP的IP地址 | 0.6 |
| guestIp | String | 虚拟机网卡的IP地址 | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| vipPortStart | Integer | VIP的起始端口号 | 0.6 |
| vipPortEnd | Integer | VIP的结束端口号 | 0.6 |
| privatePortStart | Integer | 客户IP的起始端口号 | 0.6 |
| privatePortEnd | Integer | 客户IP的结束端口号 | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| protocolType | String | 网络流量的协议类型 | 0.6 |
| state | String | 规则可用状态 | 0.6 |
| allowedCidr | String | 源CIDR; 端口转发规则只作用于源CIDR的流量 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AttachPortForwardingRuleAction action = new AttachPortForwardingRuleAction();
action.ruleUuid = "b34b406cf94f432eb0755a9201798d1f";
action.vmNicUuid = "be5e6e16b1f0428a833d3152699766ea";
action.sessionId = "14dc12a577f14f1b9622850e00f06884";
AttachPortForwardingRuleAction.Result res = action.call();
```

 Python SDK

```
AttachPortForwardingRuleAction action = AttachPortForwardingRuleAction()
action.ruleUuid = "3b83c27e561643778396b003a6294cea"
action.vmNicUuid = "4892663d34c642f8854306188276e890"
action.sessionId = "e1b52fc03d0f479c8da456abd4fd6e6b"
AttachPortForwardingRuleAction.Result res = action.call()
```

---

#### 从虚拟机网卡卸载规则(DetachPortForwardingRule)



##### **API请求**

 URLs

```
DELETE/v1/port-forwarding/{uuid}/vm-instances/nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth a6a2c933ccf449c99bd49481e9636751" \
-X DELETE http://localhost:8080/zstack/v1/port-forwarding/484d4bed50ab4c18a670982952ccfe61/vm-instances/nics?
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
"uuid": "dc6ec21666fb42e6be62455f8e5a7307",
"name": "TestAttachRule",
"description": "test atatch rule",
"vipIp": "192.168.0.187",
"guestIp": "10.0.0.244",
"vipUuid": "72dfbe63f95147048a98e514ecbd3ee8",
"vipPortStart": 33.0,
"vipPortEnd": 33.0,
"privatePortStart": 33.0,
"privatePortEnd": 33.0,
"vmNicUuid": "f06654fb4bd6485ebfba84398c98966f",
"protocolType": "TCP",
"state": "Enabled",
"allowedCidr": "0.0.0.0/0",
"createDate": "Jun 7, 2017 9:20:02 PM",
"lastOpDate": "Jun 7, 2017 9:20:02 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PortForwardingRuleInventory | 详情参考[inventory] | 0.6 |

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
| vipIp | String | VIP的IP地址 | 0.6 |
| guestIp | String | 虚拟机网卡的IP地址 | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| vipPortStart | Integer | VIP的起始端口号 | 0.6 |
| vipPortEnd | Integer | VIP的结束端口号 | 0.6 |
| privatePortStart | Integer | 客户IP的起始端口号 | 0.6 |
| privatePortEnd | Integer | 客户IP的结束端口号 | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| protocolType | String | 网络流量的协议类型 | 0.6 |
| state | String | 规则可用状态 | 0.6 |
| allowedCidr | String | 源CIDR; 端口转发规则只作用于源CIDR的流量 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
DetachPortForwardingRuleAction action = new DetachPortForwardingRuleAction();
action.uuid = "307d4bf5fed34a859ade0af30c6720f9";
action.sessionId = "8c78997bf11344d79b49a2254ab88bb8";
DetachPortForwardingRuleAction.Result res = action.call();
```

 Python SDK

```
DetachPortForwardingRuleAction action = DetachPortForwardingRuleAction()
action.uuid = "c284fc4425ea4467b81dad21df147a8e"
action.sessionId = "545a07392cb2409e9888f8737da4ddfc"
DetachPortForwardingRuleAction.Result res = action.call()
```

---

#### 负载均衡相关接口

---

#### 创建负载均衡器(CreateLoadBalancer)



##### API请求

 URLs

```
POST zstack/v1/load-balancers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "Test-Lb",
"vipUuid": "59a98484f6fe43b9af1d782f725f40ac"
  },
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 855586410b7b4c0cba21bfd5ed2df4fb" \
-X POST -d '{"params":{"name":"Test-Lb","vipUuid":"d7720f0981853e91b37678e4acb1d4f0"}}' http://localhost:8080/zstack/v1/load-balancers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| vipUuid | String | body(包含在params结构中) | VIP UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
CreateLoadBalancerAction action = new CreateLoadBalancerAction();
action.name = "Test-Lb";
action.vipUuid = "861b79a91e894ea68f77ffd7007bb57d";
action.sessionId = "056fdb04a78544fd9a43f757d6af4700";
CreateLoadBalancerAction.Result res = action.call();
```

Python SDK

```
CreateLoadBalancerAction action = CreateLoadBalancerAction()
action.name = "Test-Lb"
action.vipUuid = "3b1839e4bef9437a9b0cf28789951009"
action.sessionId = "b21c8f46991440d48be3dcf5c4a36f15"
CreateLoadBalancerAction.Result res = action.call()
```

---

#### 删除负载均衡器(DeleteLoadBalancer)



##### API请求

 URLs

```
DELETE/v1/load-balancers/listeners/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 1ac325e9a263466d88a9bdf44c64ce96" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/listeners/db191bc52926462eb21d24b30db7971f
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeleteLoadBalancerListenerAction action = new DeleteLoadBalancerListenerAction();
action.uuid = "2e7918e14cb345888cb57769f117fb91";
action.sessionId = "efa96e940fce42c58c5e43885ce1f37f";
DeleteLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
DeleteLoadBalancerListenerAction action = DeleteLoadBalancerListenerAction()
action.uuid = "be721492004a49038940201562070e1e"
action.sessionId = "4a6baa8346204970bf3ce9397f48504a"
DeleteLoadBalancerListenerAction.Result res = action.call()

```

---

#### 查询负载均衡器(QueryLoadBalancer)



##### API请求

 URLs

```
GET zstack/v1/load-balancers
GET zstack/v1/load-balancers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 18a70c9589fa4d93a59a228488e459fb" \
-X GET http://localhost:8080/zstack/v1/load-balancers
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b3fd9ebb07e44e61be3c1f4d24710f9d" \
-X GET http://localhost:8080/zstack/v1/load-balancers/2bc2a3e1855249c6ad436556915253d5
```



可查询字段

运行CLI命令行工具，输入`QueryLoadBalancer`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "Test-Lb",
"uuid": "36c2ba1d4a86409693a2de40fa0473ca",
"vipUuid": "8807c418b3b74ee5991006bcc4c670e4"
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
| state | String |  | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| listeners | List | 详情参考[listeners] | 0.6 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| certificateRefs | List | 详情参考[certificateRefs] | 0.6 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| listenerUuid | String |  | 2.3 |
| certificateUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QueryLoadBalancerAction action = new QueryLoadBalancerAction();
action.conditions = asList();
action.sessionId = "d649f3ea966e437db93b2049bef206ca";
QueryLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
QueryLoadBalancerAction action = QueryLoadBalancerAction()
action.conditions = []
action.sessionId = "244697b709b0490ab8d8d37e6f94592f"
QueryLoadBalancerAction.Result res = action.call()
```

---

#### 刷新负载均衡器(RefreshLoadBalancer)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"refreshLoadBalancer": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b1e125550d924d17a0efa1bb6dd36806" \
-X PUT -d '{"refreshLoadBalancer":{}}' \
http://localhost:8080/zstack/v1/load-balancers/9fb0a5a16d06393db160485b0b79fd49/actions
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
"name": "Test-Lb",
"uuid": "ee6de94ed5bf49c8b09a7bd3e5965c60",
"vipUuid": "691e275592d84c898c1d495febf42a9a"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LoadBalancerInventory | 详情参考[inventory] | 0.6 |

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
| state | String |  | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| listeners | List | 详情参考[listeners] | 0.6 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| aclRefs | List | 详情参考[aclRefs] | 3.9.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 0.6 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 3.9.0 |
| listenerUuid | String | 监听器唯一标识 | 3.9.0 |
| aclUuid | String | 访问策略组唯一标识 | 3.9.0 |
| type | String | 访问策略类型 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| listenerUuid | String |  | 2.3 |
| certificateUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
RefreshLoadBalancerAction action = new RefreshLoadBalancerAction();
action.uuid = "cad53be6896e43cf8aef4021d165f56d";
action.sessionId = "fec73392481a4edaa2738131516ef0d7";
RefreshLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
RefreshLoadBalancerAction action = RefreshLoadBalancerAction()
action.uuid = "3556da2f1d3b47e48ec3068a5c3055ba"
action.sessionId = "9947fe6582f44b5a961143d08f49a2eb"
RefreshLoadBalancerAction.Result res = action.call()
```

---

#### 创建负载均衡监听器(CreateLoadBalancerListener)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/{loadBalancerUuid}/listeners
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-Listener",
    "instancePort": 80,
    "loadBalancerPort": 80,
    "protocol": "http"
    "aclStatus": "disable",
    "aclType": "black"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{"name":"Test-Listener","instancePort":80,"loadBalancerPort":80,"protocol":"http","aclStatus":"disable","aclType":"black"}}'
http://localhost:8080/zstack/v1/load-balancers/192b3fe960d63e078ced8f59529a25ad/listeners
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
| loadBalancerUuid | String | url | 负载均衡器UUID |  | 0.6 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| instancePort(可选) | Integer | body(包含在**params**结构中) | 云主机端口 |  | 0.6 |
| loadBalancerPort | int | body(包含在**params**结构中) | 负载均衡器端口 |  | 0.6 |
| protocol (可选) | String | body(包含在**params**结构中) | 协议 | tcp http https udp | 3.0.0 |
| certificateUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3.2 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 0.6 |
| instancePort (可选) | Integer | body(包含在**params**结构中) |  |  | 0.6 |
| healthCheckProtocol (可选) | String | body(包含在**params**结构中) | 健康检查协议 | tcp udp http | 3.9.0 |
| healthCheckMethod (可选) | String | body(包含在**params**结构中) | 健康检查方法 | GET HEAD | 3.9.0 |
| healthCheckURI (可选) | String | body(包含在**params**结构中) | 健康检查的URI |  | 3.9.0 |
| healthCheckHttpCode (可选) | String | body(包含在**params**结构中) | 健康检查期望的返回码 |  | 3.9.0 |
| aclStatus (可选) | String | body(包含在**params**结构中) | 访问控制策略状态 | enable disable | 3.9.0 |
| aclUuids (可选) | list | body(包含在**params**结构中) | 访问控制策略组 |  | 3.9.0 |
| aclType (可选) | String | body(包含在**params**结构中) | 访问控制策略类型 | white black | 3.9.0 |
| tagUuids (可选) | list | body(包含在**params**结构中) | 标签UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| securityPolicyType (可选) | String | body(包含在**params**结构中) | TLS安全策略 | tls_cipher_policy_default tls_cipher_policy_1_0 tls_cipher_policy_1_1 tls_cipher_policy_1_2 tls_cipher_policy_1_2_strict tls_cipher_policy_1_2_strict_with_1_3 | 5.0.0 |
| httpVersions (可选) | List | body(包含在**params**结构中) | 负载均衡器前端网络http协议版本 | h1 h2 | 5.0.0 |
| tcpProxyProtocol (可选) | String | body(包含在**params**结构中) | tcp proxy_protocol协议 | v1 v2 disable | 5.0.0 |
| httpCompressAlgos (可选) | List | body(包含在**params**结构中) | http压缩算法 | deflate raw-deflate gzip disable | 5.0.0 |


  - 选项格式为：`healthCheckParameter::{parameter}                                         `，参数形如：`healthCheckParameter::method:uri:expect-result                                     `
  - 例如：`healthCheckParameter::GET:/healthstatus.html:http_2xx`
- 例如：`healthCheckParameter::GET:/healthstatus.html:http_2xx`
  - 选项格式为：`accessControlStatus::{status}`
  - 例如：`accessControlStatus::enable`
- 例如：`accessControlStatus::enable`
  - 选项格式为：`sessionPersistence::{%s}，其中%s可以为disable/iphash/insert/rewrite`
  - 例如：`sessionPersistence::insert`
- 例如：`sessionPersistence::insert`
  - 选项格式为：`sessionIdleTimeout::{%s}，其中%s可以为30-3600`
  - 例如：`sessionIdleTimeout::60`
- 例如：`sessionIdleTimeout::60`
  - 选项格式为：`validRegexValues::{%s}，其中%s可以为"[A-Za-z0-9_-]+",                                         maxLength = 20`
  - 例如：`cookieName::zstack-cookie`
- 例如：`cookieName::zstack-cookie`
  - 选项格式为：`httpRedirectHttps::{%s}，其中%s可以为disable/enable`
  - 例如：`httpRedirectHttps::enable`
- 例如：`httpRedirectHttps::enable`
  - 选项格式为：`redirectPort::{%s}，其中%s可以为1-65535`
  - 例如：`redirectPort::80`
- 例如：`redirectPort::80`
  - 选项格式为：`statusCode::{%s}，其中%s可以为301/302/303/307/308`
  - 例如：`statusCode::302`
- 例如：`statusCode::302`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e82212513e2f3644885d98ce164ee687",
    "name": "Test-Listener",
    "loadBalancerUuid": "f7b267e9a5683ba5981b79196ca65d47",
    "instancePort": 80,
    "loadBalancerPort": 80,
    "protocol": "http"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | Boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 0.6 |

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
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| serverGroupUuid | String |  | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| aclRefs | List | 详情参考[aclRefs] | 3.9.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 0.6 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 5.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 3.9.0 |
| listenerUuid | String | 监听器唯一标识 | 3.9.0 |
| aclUuid | String | 访问策略组唯一标识 | 3.9.0 |
| type | String | 访问策略类型 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| listenerUuid | String |  | 2.3 |
| certificateUuid | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.0.0 |
| listenerUuid | String |  | 5.0.0 |
| serverGroupUuid | String |  | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CreateLoadBalancerListenerAction action = new CreateLoadBalancerListenerAction();
action.loadBalancerUuid = "192b3fe960d63e078ced8f59529a25ad";
action.name = "Test-Listener";
action.instancePort = 80;
action.loadBalancerPort = 80;
action.protocol = "http";
action.aclStatus = "disable";
action.aclType = "black";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
CreateLoadBalancerListenerAction action = CreateLoadBalancerListenerAction()
action.loadBalancerUuid = "192b3fe960d63e078ced8f59529a25ad"
action.name = "Test-Listener"
action.instancePort = 80
action.loadBalancerPort = 80
action.protocol = "http"
action.aclStatus = "disable"
action.aclType = "black"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateLoadBalancerListenerAction.Result res = action.call()
```

---

#### 删除负载均衡监听器(DeleteLoadBalancerListener)



##### API请求

 URLs

```
DELETE/v1/load-balancers/listeners/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 1ac325e9a263466d88a9bdf44c64ce96" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/listeners/db191bc52926462eb21d24b30db7971f?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
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



##### SDK示例

 Java SDK

```
DeleteLoadBalancerListenerAction action = new DeleteLoadBalancerListenerAction();
action.uuid = "2e7918e14cb345888cb57769f117fb91";
action.sessionId = "efa96e940fce42c58c5e43885ce1f37f";
DeleteLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
DeleteLoadBalancerListenerAction action = DeleteLoadBalancerListenerAction()
action.uuid = "be721492004a49038940201562070e1e"
action.sessionId = "4a6baa8346204970bf3ce9397f48504a"
DeleteLoadBalancerListenerAction.Result res = action.call()
```

---

#### 查询负载均衡监听器(QueryLoadBalancerListener)



##### **API请求**

 URLs

```
GET zstack/v1/load-balancers/listeners
GET zstack/v1/load-balancers/listeners/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 6d7ca1c2f39440d5a4110962854c3234" \
-X GET http://localhost:8080/zstack/v1/load-balancers/listeners
```


```
curl \
-H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 057112ec0d5e4bcd9193b1f9499169eb" \
-X GET http://localhost:8080/zstack/v1/load-balancers/listeners/cdf776df1cb04ae6a3cf1fb1330dab2d
```



可查询字段

运行CLI命令行工具，输入QueryLoadBalancerListener并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "be2f6e299e364f5cb71e52f11eeee34e",
"name": "Test-Listener",
"loadBalancerUuid": "90a89f6ec62b4acf9ccb770b453fddc5",
"instancePort": 80.0,
"loadBalancerPort": 80.0,
"protocol": "http"
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
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| certificateRefs | List | 详情参考[certificateRefs] | 0.6 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| listenerUuid | String |  | 2.3 |
| certificateUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QueryLoadBalancerListenerAction action = new QueryLoadBalancerListenerAction();
action.conditions = asList();
action.sessionId = "c616bc4ee56648b6a921b2da70fe7798";
QueryLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
QueryLoadBalancerListenerAction action = QueryLoadBalancerListenerAction()
action.conditions = []
action.sessionId = "529b237f77cd4130b861ebe99a30c983"
QueryLoadBalancerListenerAction.Result res = action.call()
```

---

#### 更新负载均衡监听器(UpdateLoadBalancerListener)



##### **API请求**

 URLs

```
PUT zstack/v1/load-balancers/listeners/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateLoadBalancerListener": {
    "name": "Test-Listener",
    "description": "desc info"
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
-X PUT -d '{"updateLoadBalancerListener":{"name":"Test-Listener","description":"desc info"}}' \
http://localhost:8080/zstack/v1/load-balancers/listeners/6566eed5ab7432d2956b1c093d25daab
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateLoadBalancerListener**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateLoadBalancerListener**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "84735dfea01d359196587f35314a1e17",
    "name": "Test-Listener",
    "description": "desc info",
    "loadBalancerUuid": "c8f77d0df3c83e449f0d372dbe80bd09",
    "instancePort": 80.0,
    "loadBalancerPort": 80.0,
    "protocol": "http"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 0.6 |

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
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| certificateRefs | List | 详情参考[certificateRefs] | 0.6 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| listenerUuid | String |  | 2.3 |
| certificateUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateLoadBalancerListenerAction action = new UpdateLoadBalancerListenerAction();
action.uuid = "6566eed5ab7432d2956b1c093d25daab";
action.name = "Test-Listener";
action.description = "desc info";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
UpdateLoadBalancerListenerAction action = UpdateLoadBalancerListenerAction()
action.uuid = "6566eed5ab7432d2956b1c093d25daab"
action.name = "Test-Listener"
action.description = "desc info"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateLoadBalancerListenerAction.Result res = action.call()
```

---

#### 修改负载均衡监听器参数(ChangeLoadBalancerListener)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/listeners/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeLoadBalancerListener": {
    "connectionIdleTimeout": 300,
    "maxConnection": 5000,
    "balancerAlgorithm": "roundrobin",
    "healthCheckTarget": "default",
    "healthyThreshold": 2,
    "unhealthyThreshold": 3,
    "healthCheckInterval": 5,
    "nbprocess": 1,
    "httpMode": "http-keep-alive",
    "sessionPersistence": "insert",
    "sessionIdleTimeout": 60
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
-X PUT -d '{"changeLoadBalancerListener":{"connectionIdleTimeout":300,"maxConnection":5000,"balancerAlgorithm":"roundrobin","healthCheckTarget":"default","healthyThreshold":2,"unhealthyThreshold":3,"healthCheckInterval":5,"nbprocess":1,"httpMode":"http-keep-alive","sessionPersistence":"insert","sessionIdleTimeout":60}}'
http://localhost:8080/zstack/v1/load-balancers/listeners/ca4f7cea0c5a3a329742b127d7f80615/actions
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
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| connectionIdleTimeout (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 空闲连接超时 |  | 4.6.0 |
| maxConnection (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 最大连接并发数 |  | 4.6.0 |
| balancerAlgorithm (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 负载均衡算法 | weightroundrobin roundrobin leastconn source | 4.6.0 |
| healthCheckTarget (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 健康检查端口 |  | 4.6.0 |
| healthyThreshold (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 健康检查阈值 |  | 4.6.0 |
| unhealthyThreshold (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 非健康检查阈值 |  | 4.6.0 |
| healthCheckInterval (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 健康检查间隔 |  | 4.6.0 |
| healthCheckProtocol (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 负载均衡健康检查协议 | tcp udp http | 3.9.0 |
| healthCheckMethod (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 健康检查方法 | GET HEAD | 3.9.0 |
| healthCheckURI (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 健康检查的URI |  | 3.9.0 |
| healthCheckHttpCode (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 健康检查期望的成功返回码 |  | 3.9.0 |
| aclStatus (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 访问控制状态 | enable disable | 3.9.0 |
| securityPolicyType (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | TLS安全策略 | tls_cipher_policy_default tls_cipher_policy_1_0 tls_cipher_policy_1_1 tls_cipher_policy_1_2 tls_cipher_policy_1_2_strict tls_cipher_policy_1_2_strict_with_1_3 | 4.1.0 |
| nbprocess (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 负载均衡进程数量 |  | 4.1.0 |
| httpMode (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 负载均衡HTTP模式 | http-keep-alive http-server-close http-tunnel httpclose forceclose | 4.1.0 |
| sessionPersistence (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | 会话保持模式 | disable iphash insert rewrite | 4.6.0 |
| sessionIdleTimeout (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 会话保持超时时间 |  | 4.6.0 |
| cookieName (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | Cookie名称 |  | 4.6.0 |
| systemTags (可选) | List | body |  |  | 3.4.0 |
| userTags (可选) | List | body |  |  | 3.4.0 |
| httpRedirectHttps (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | http重定向https | disable enable | 4.7.21 |
| redirectPort (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 重定向端口 |  | 4.7.21 |
| statusCode (可选) | Integer | body(包含在**changeLoadBalancerListener**结构中) | 重定向状态码 | 301 302 303 307 308 | 4.7.21 |
| httpVersions (可选) | List | body(包含在**changeLoadBalancerListener**结构中) | 负载均衡器前端网络http协议版本 | h1 h2 | 5.0.0 |
| tcpProxyProtocol (可选) | String | body(包含在**changeLoadBalancerListener**结构中) | tcp proxy_protocol协议 | v1 v2 disable | 5.0.0 |
| httpCompressAlgos (可选) | List | body(包含在**changeLoadBalancerListener**结构中) | http压缩算法 | deflate raw-deflate gzip diasble | 5.0.0 |


  - 选项格式为：`balancerWeight::{nicUuid}::{weight}                                     `，其中weight为对应后端server的权重.范围:0~100的整数，默认为100。
  - 例如：`balancerWeight::{"c44007641c9040c6b2587e19b1b3e2b0"}::{100}                                     `
- 例如：`balancerWeight::{"c44007641c9040c6b2587e19b1b3e2b0"}::{100}                                     `


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "6356c8f8ae7534bab9a2175144dbc997",
    "name": "Test-Listener",
    "description": "desc info",
    "loadBalancerUuid": "4b32d1a27d8e3d77a606e5014caddd86",
    "instancePort": 80,
    "loadBalancerPort": 80,
    "protocol": "http"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 3.4.0 |

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
| name | String | 资源名称 | 3.4.0 |
| description | String | 资源的详细描述 | 3.4.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 3.4.0 |
| instancePort | Integer |  | 3.4.0 |
| loadBalancerPort | Integer |  | 3.4.0 |
| protocol | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 3.4.0 |
| aclRefs | List | 详情参考[aclRefs] | 3.9.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 3.4.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.1.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.4.0 |
| listenerUuid | String |  | 3.4.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.4.0 |
| status | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 3.9.0 |
| listenerUuid | String | 监听器唯一标识 | 3.9.0 |
| aclUuid | String | 访问策略组唯一标识 | 3.9.0 |
| type | String | 访问策略类型 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.4.0 |
| listenerUuid | String |  | 3.4.0 |
| certificateUuid | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.1.0 |
| listenerUuid | String |  | 4.1.0 |
| serverGroupUuid | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
ChangeLoadBalancerListenerAction action = new ChangeLoadBalancerListenerAction();
action.uuid = "ca4f7cea0c5a3a329742b127d7f80615";
action.connectionIdleTimeout = 300;
action.maxConnection = 5000;
action.balancerAlgorithm = "roundrobin";
action.healthCheckTarget = "default";
action.healthyThreshold = 2;
action.unhealthyThreshold = 3;
action.healthCheckInterval = 5;
action.nbprocess = 1;
action.httpMode = "http-keep-alive";
action.sessionPersistence = "insert";
action.sessionIdleTimeout = 60;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
ChangeLoadBalancerListenerAction action = ChangeLoadBalancerListenerAction()
action.uuid = "ca4f7cea0c5a3a329742b127d7f80615"
action.connectionIdleTimeout = 300
action.maxConnection = 5000
action.balancerAlgorithm = "roundrobin"
action.healthCheckTarget = "default"
action.healthyThreshold = 2
action.unhealthyThreshold = 3
action.healthCheckInterval = 5
action.nbprocess = 1
action.httpMode = "http-keep-alive"
action.sessionPersistence = "insert"
action.sessionIdleTimeout = 60
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeLoadBalancerListenerAction.Result res = action.call()
```

---

#### 获取云主机网卡(GetCandidateVmNicsForLoadBalancer)



获取可供负载均衡器添加的云主机网卡。

##### API请求

 URLs

```
GET zstack/v1/load-balancers/listeners/{listenerUuid}/vm-instances/candidate-nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e75a29e482104fd094dde90d69b212c6" \
-X GET http://localhost:8080/zstack/v1/load-balancers/listeners/4fe68eaa71ec47699c19b7819bd52f80/vm-instances/candidate-nics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| listenerUuid | String | url | 负载均衡监听器UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "241c356448ea4dfab7e95dd1e52a163d",
"vmInstanceUuid": "5d0f9bee14d94943a4e6ec34c599dc19",
"usedIpUuid": "2974a99c5bc2481cb54759c83fea8f52",
"l3NetworkUuid": "a3dfb2211d6e4d538a73bb3453876654",
"ip": "192.168.1.10",
"mac": "00:0c:29:bd:99:fc",
"netmask": "255.255.255.0",
"gateway": "192.168.1.1",
"deviceId": 0.0,
"createDate": "Jun 7, 2017 9:21:22 PM",
"lastOpDate": "Jun 7, 2017 9:21:22 PM"
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
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetCandidateVmNicsForLoadBalancerAction action = new GetCandidateVmNicsForLoadBalancerAction();
action.listenerUuid = "939a6fd54937468b9b9c27c4d3903c6e";
action.sessionId = "af93732431cf45e7828b579fcb9e46bc";
GetCandidateVmNicsForLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
GetCandidateVmNicsForLoadBalancerAction action = GetCandidateVmNicsForLoadBalancerAction()
action.listenerUuid = "a100b63272ff460eb0301f5759ff2fce"
action.sessionId = "423e456aac8041aa9bfdf4ce26ab32ce"
GetCandidateVmNicsForLoadBalancerAction.Result res = action.call()
```

---

#### 添加云主机网卡到负载均衡器(AddVmNicToLoadBalancer)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/listeners/{listenerUuid}/vm-instances/nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"vmNicUuids": [
"aadbfdd8413545d9a1d53d8a0cfa58a8"
    ]
  },
"systemTags": [],
"userTags": []
}
```



上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 47ac995879a9490f83b6b6ef79bca99f" \
-X POST -d '{"params":{"vmNicUuids":["f141d926d13b34cc905507ce7aa9a479"]}}' \
http://localhost:8080/zstack/v1/load-balancers/listeners/21e488793c5831a0842d72a63bcdaf04/vm-instances/nics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuids | List | body(包含在params结构中) | 云主机网卡UUID |  | 0.6 |
| listenerUuid | String | url | 负载均衡监听器UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`balancerWeight::{nicUuid}::{weight}                                     `，其中weight为对应后端server的权重.范围:0~100的整数，默认为100。
  - 例如：`balancerWeight::{"c44007641c9040c6b2587e19b1b3e2b0"}::{100}                                     `
- 例如：`balancerWeight::{"c44007641c9040c6b2587e19b1b3e2b0"}::{100}                                     `


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
AddVmNicToLoadBalancerAction action = new AddVmNicToLoadBalancerAction();
action.vmNicUuids = asList("01741d3cc9d0422197b2176f3c977d52");
action.listenerUuid = "fd774b08700545ddaa5938fb2ccf4320";
action.sessionId = "ed5ea413b2354a94ac7b427528f88d26";
AddVmNicToLoadBalancerAction.Result res = action.call()
```

 Python SDK

```
AddVmNicToLoadBalancerAction action = AddVmNicToLoadBalancerAction()
action.vmNicUuids = [9b08b7603be945d2928a08a0e8d1fc00]
action.listenerUuid = "874bcad239a645af8cd69ed267a48809"
action.sessionId = "a70b5f9862424ceb8ea8e2c7d679e0df"
AddVmNicToLoadBalancerAction.Result res = action.call()
```

---

#### 从负载均衡器移除云主机网卡(RemoveVmNicFromLoadBalancer)



##### API请求

 URLs

```
DELETE/v1/load-balancers/listeners/{listenerUuid}/vm-instances/nics?vmNicUuids={vmNicUuids}

```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth a846184b54d845dbb85e50ba35364b6e" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/listeners/9fda51c382d841e0a47a4195f8dac67b/vm-instances/nics?vmNicUuids=9952aa24a745355b866782dd9b1c53e8

```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuids | List | body | 云主机网卡UUID |  | 0.6 |
| listenerUuid | String | url | 负载均衡监听器UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "Test-Lb",
"uuid": "40f1e1e109d34feaa119ad14b7ed5638",
"vipUuid": "d3968f8dd2764d988f09b251617b2cf9"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LoadBalancerInventory | 详情参考[inventory] | 0.6 |

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
| state | String |  | 0.6 |
| vipUuid | String | VIP UUID | 0.6 |
| listeners | List | 详情参考[listeners] | 0.6 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



SDK示例 Java SDK

```
RemoveVmNicFromLoadBalancerAction action = new RemoveVmNicFromLoadBalancerAction();
action.vmNicUuids = asList("6d6c33021c0a432c9030046c3a24be6e");
action.listenerUuid = "0a11bad9fdb84538953689a5c4430126";
action.sessionId = "867ccf6fbe934fe19e8bb5ba861de7fd";
RemoveVmNicFromLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
RemoveVmNicFromLoadBalancerAction action = RemoveVmNicFromLoadBalancerAction()
action.vmNicUuids = [ef9de345e68f4e6aa51164eff6ee5249]
action.listenerUuid = "04f42584e0a14afdb382e0961f057076"
action.sessionId = "46c7dabf668943faa1bb8b6be0d60397"
RemoveVmNicFromLoadBalancerAction.Result res = action.call()
```

---

#### 更新负载均衡器(UpdateLoadBalancer)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateLoadBalancer": {
    "name": "Test-Lb",
    "description": "info"
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
-X PUT -d '{"updateLoadBalancer":{"name":"Test-Lb","description":"info"}}' \
http://localhost:8080/zstack/v1/load-balancers/a355359f46d13e5ab64d6eeff66aedbf/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateLoadBalancer**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateLoadBalancer**结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**updateLoadBalancer**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如

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
UpdateLoadBalancerAction action = new UpdateLoadBalancerAction();
action.uuid = "a355359f46d13e5ab64d6eeff66aedbf";
action.name = "Test-Lb";
action.description = "info";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
UpdateLoadBalancerAction action = UpdateLoadBalancerAction()
action.uuid = "a355359f46d13e5ab64d6eeff66aedbf"
action.name = "Test-Lb"
action.description = "info"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateLoadBalancerAction.Result res = action.call()
```

---

#### 获取负载均衡所属资源(GetLoadBalancerOwner)



##### API请求

 URLs

```
GET zstack/v1/load-balancers/{loadBalancerUuid}/owner
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/01a14d335cec36a7b0c36bedc8181465/owner?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| loadBalancerUuid | String | url | 负载均衡器UUID |  | 5.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "vpc": {}
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.0 |
| vpc | VpcRouterVmInventory | 详情参考[vpc] | 5.1.0 |
| vpcHa | VpcHaGroupInventory | 详情参考[vpcHa] | 5.1.0 |
| slb | SlbGroupInventory | 详情参考[slb] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #vpc

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| publicNetworkUuid | String |  | 5.1.0 |
| virtualRouterVips | List |  | 5.1.0 |
| applianceVmType | String |  | 5.1.0 |
| managementNetworkUuid | String |  | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | String |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| dns | List | 详情参考[dns] | 5.1.0 |
| haRef | List | 详情参考[haRef] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #dns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| vpcRouterUuid | String |  | 5.1.0 |
| dns | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #haRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vpcHaRouterUuid | String |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| ip | String |  | 5.1.0 |
| mac | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| netmask | String |  | 5.1.0 |
| gateway | String |  | 5.1.0 |
| metaData | String |  | 5.1.0 |
| ipVersion |  |  | 5.1.0 |
| driverType | String |  | 5.1.0 |
| internalName | String |  | 5.1.0 |
| deviceId |  |  | 5.1.0 |
| type | String |  | 5.1.0 |
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| primaryStorageUuid | String | 主存储UUID | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.1.0 |
| rootImageUuid | String |  | 5.1.0 |
| installPath | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| format | String |  | 5.1.0 |
| size | Long |  | 5.1.0 |
| actualSize | Long |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| state | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| isShareable | Boolean |  | 5.1.0 |
| volumeQos | String |  | 5.1.0 |
| lastDetachDate | Timestamp |  | 5.1.0 |
| lastVmInstanceUuid | String |  | 5.1.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| isoUuid | String |  | 5.1.0 |
| isoInstallPath | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #vpcHa

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| monitors | List | 详情参考[monitors] | 5.1.0 |
| vrRefs | List | 详情参考[vrRefs] | 5.1.0 |
| services | List | 详情参考[services] | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| vpcHaRouterUuid | String |  | 5.1.0 |
| monitorIp | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #vrRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vpcHaRouterUuid | String |  | 5.1.0 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vpcHaRouterUuid | String |  | 5.1.0 |
| networkServiceName | String |  | 5.1.0 |
| networkServiceUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| vpcHaRouterUuid | String |  | 5.1.0 |
| vipUuid | String | VIP UUID | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| ip | String |  | 5.1.0 |
| netmask | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #slb

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| backendType | String | 实例镜像类型 | 5.1.0 |
| deployType | String | 部署方式 | 5.1.0 |
| slbOfferingUuid | String | 实例规格 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| configVersion | Long | 配置版本 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| slbVms | List | 详情参考[slbVms] | 5.1.0 |
| lbs | List | 详情参考[lbs] | 5.1.0 |
| networks | List | 详情参考[networks] | 5.1.0 |
| monitorIps | List | 详情参考[monitorIps] | 5.1.0 |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| configVersion | String |  | 5.1.0 |
| publicNetworkUuid | String |  | 5.1.0 |
| virtualRouterVips | List |  | 5.1.0 |
| applianceVmType | String |  | 5.1.0 |
| managementNetworkUuid | String |  | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| reservedMemorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 5.1.0 |
| configTasks | List | 详情参考[configTasks] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| taskName | String |  | 5.1.0 |
| taskData | String |  | 5.1.0 |
| retryNumber | long |  | 5.1.0 |
| lastFailedReason | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| status | SlbVmInstanceConfigTaskStatus | 详情参考[status] | 5.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Pending | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Starting | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Success | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Failed | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| ip | String |  | 5.1.0 |
| mac | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| netmask | String |  | 5.1.0 |
| gateway | String |  | 5.1.0 |
| metaData | String |  | 5.1.0 |
| ipVersion |  |  | 5.1.0 |
| driverType | String |  | 5.1.0 |
| internalName | String |  | 5.1.0 |
| deviceId |  |  | 5.1.0 |
| type | String |  | 5.1.0 |
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| state | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| vipUuid | String | VIP UUID | 5.1.0 |
| ipv6VipUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| listeners | List | 详情参考[listeners] | 5.1.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 5.1.0 |
| instancePort | Integer |  | 5.1.0 |
| loadBalancerPort | Integer |  | 5.1.0 |
| protocol | String |  | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 5.1.0 |
| aclRefs | List | 详情参考[aclRefs] | 5.1.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 5.1.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 5.1.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 5.1.0 |
| listenerUuid | String | 监听器唯一标识 | 5.1.0 |
| aclUuid | String | 访问策略组唯一标识 | 5.1.0 |
| type | String | 访问策略类型 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| certificateUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| l3NetworkCategory | String |  | 5.1.0 |
| l3NetworkType | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #monitorIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| slbGroupUuid | String |  | 5.1.0 |
| monitorIp | String |  | 5.1.0 |
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
GetLoadBalancerOwnerAction action = new GetLoadBalancerOwnerAction();
action.loadBalancerUuid = "01a14d335cec36a7b0c36bedc8181465";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetLoadBalancerOwnerAction.Result res = action.call();

```

 Python SDK

```
GetLoadBalancerOwnerAction action = GetLoadBalancerOwnerAction()
action.loadBalancerUuid = "01a14d335cec36a7b0c36bedc8181465"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetLoadBalancerOwnerAction.Result res = action.call()

```

---

#### 配置负载均衡实例(ProvisionSlbInstance)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/slb/instances/{uuid}/provision
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "provisionSlbInstance": {},
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"provisionSlbInstance":{}}' http://localhost:8080/zstack/v1/load-balancers/slb/instances/0540bae0537334d7a71f13316444f53a/provision
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| slbInstanceUuid | String | body(包含在**provisionSlbInstance**结构中) |  |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "slb",
    "backendType": "vyos",
    "deployType": "NoHA",
    "description": "slb test"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.0 |
| inventory | CertificateInventory | 详情参考[inventory] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| backendType | String | 实例镜像类型 | 5.1.0 |
| deployType | String | 部署方式 | 5.1.0 |
| slbOfferingUuid | String | 实例规格 |  |
| description | String | 资源的详细描述 | 5.1.0 |
| configVersion | Long | 配置版本 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| slbVms | List | 详情参考[slbVms] | 5.1.0 |
| lbs | List | 详情参考[lbs] | 5.1.0 |
| networks | List | 详情参考[networks] | 5.1.0 |
| monitorIps | List | 详情参考[monitorIps] | 5.1.0 |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.0 |
| configVersion | long | 错误的概要描述 | 5.1.0 |
| publicNetworkUuid | String | 错误的详细信息 | 5.1.0 |
| virtualRouterVips | List | 保留字段，默认为null | 5.1.0 |
| applianceVmType | String | 保留字段，默认为null | 5.1.0 |
| managementNetworkUuid | String | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| reservedMemorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 5.1.0 |
| configTasks | List | 详情参考[configTasks] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| taskName | String |  | 5.1.0 |
| taskData | String |  | 5.1.0 |
| retryNumber | long |  | 5.1.0 |
| lastFailedReason | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| status | SlbVmInstanceConfigTaskStatus | 详情参考[status] | 5.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Pending | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Starting | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Success | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Failed | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
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
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| primaryStorageUuid | String | 主存储UUID | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.1.0 |
| rootImageUuid | String |  | 5.1.0 |
| installPath | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| format | String |  | 5.1.0 |
| size | Long |  | 5.1.0 |
| actualSize | Long |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| state | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| isShareable | Boolean |  | 5.1.0 |
| volumeQos | String |  | 5.1.0 |
| lastDetachDate | Timestamp |  | 5.1.0 |
| lastVmInstanceUuid | String |  | 5.1.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| isoUuid | String |  | 5.1.0 |
| isoInstallPath | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| state | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| vipUuid | String | VIP UUID | 5.1.0 |
| ipv6VipUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| listeners | List | 详情参考[listeners] | 5.1.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 5.1.0 |
| instancePort | Integer |  | 5.1.0 |
| loadBalancerPort | Integer |  | 5.1.0 |
| protocol | String |  | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 5.1.0 |
| aclRefs | List | 详情参考[aclRefs] | 5.1.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 5.1.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 5.1.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 5.1.0 |
| listenerUuid | String | 监听器唯一标识 | 5.1.0 |
| aclUuid | String | 访问策略组唯一标识 | 5.1.0 |
| type | String | 访问策略类型 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| certificateUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| l3NetworkCategory | String |  | 5.1.0 |
| l3NetworkType | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #monitorIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| slbGroupUuid | String |  | 5.1.0 |
| monitorIp | String |  | 5.1.0 |
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
ProvisionSlbInstanceAction action = new ProvisionSlbInstanceAction();
action.uuid = "0540bae0537334d7a71f13316444f53a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ProvisionSlbInstanceAction.Result res = action.call();

```

 Python SDK

```
ProvisionSlbInstanceAction action = ProvisionSlbInstanceAction()
action.uuid = "0540bae0537334d7a71f13316444f53a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ProvisionSlbInstanceAction.Result res = action.call()

```

---

#### 创建SLB集群(CreateSlbGroup)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/slb/groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "slbGroup",
    "slbOfferingUuid": "f66b4cd06a2d3ae985e40514502c3ea3",
    "frontEndL3NetworkUuid": "307ab51e198a35bab0bcc517f849aa46",
    "backendType": "VYOS",
    "deployType": "NoHA",
    "description": "this is a slb spec for test"
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
-X POST -d '{"params":{"name":"slbGroup","slbOfferingUuid":"f66b4cd06a2d3ae985e40514502c3ea3","frontEndL3NetworkUuid":"307ab51e198a35bab0bcc517f849aa46","backendType":"VYOS","deployType":"Direct","description":"this is a slb spec for test"}}' http://localhost:8080/zstack/v1/load-balancers/slb/groups
```

   参数列表
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| slbOfferingUuid | String | body(包含在**params**结构中) | 高性能实例规格uuid |  | 4.0.0 |
| frontEndL3NetworkUuid | String | body(包含在**params**结构中) | 前端网络uuid |  | 4.0.0 |
| backendL3NetworkUuids (可选) | List | body(包含在**params**结构中) | 后端所属网络uuid |  | 4.0.0 |
| backendType (可选) | String | body(包含在**params**结构中) | 后端类型 | VYOS | 4.0.0 |
| deployType (可选) | String | body(包含在**params**结构中) | 部署类型 | NoHA HA | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| monitorIps (可选) | List | body(包含在**params**结构中) | 监控IP |  | 5.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | SlbGroupInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| backendType | String |  | 4.0.0 |
| deployType | String |  | 4.0.0 |
| slbOfferingUuid | String |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| slbVms | List | 详情参考[slbVms] | 4.0.0 |
| lbs | List | 详情参考[lbs] | 4.0.0 |
| networks | List | 详情参考[networks] | 4.0.0 |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| publicNetworkUuid | String |  | 4.0.0 |
| virtualRouterVips | List |  | 4.0.0 |
| applianceVmType | String |  | 4.0.0 |
| managementNetworkUuid | String |  | 4.0.0 |
| defaultRouteL3NetworkUuid | String |  | 4.0.0 |
| status | String |  | 4.0.0 |
| agentPort | Integer |  | 4.0.0 |
| haStatus | String |  | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.0.0 |
| lastHostUuid | String |  | 4.0.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String |  | 4.0.0 |
| defaultL3NetworkUuid | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| hypervisorType | String |  | 4.0.0 |
| memorySize | Long |  | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| cpuSpeed | Long |  | 4.0.0 |
| allocatorStrategy | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String |  | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.0.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| primaryStorageUuid | String | 主存储UUID | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.0.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.0.0 |
| installPath | String | 云盘在主存储上的路径 | 4.0.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.0.0 |
| format | String | 云盘格式 | 4.0.0 |
| size | Long | 云盘大小 | 4.0.0 |
| actualSize | Long | 云盘真实大小 | 4.0.0 |
| deviceId | Integer |  | 4.0.0 |
| state | String | 云盘是否开启 | 4.0.0 |
| status | String | 云盘状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| isShareable | Boolean | 是否共享云盘 | 4.0.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.0.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| deviceId | Integer | 光驱顺序号 | 4.0.0 |
| isoUuid | String | ISO镜像UUID | 4.0.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| state | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| vipUuid | String | VIP UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| listeners | List | 详情参考[listeners] | 4.0.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 4.0.0 |
| instancePort | Integer |  | 4.0.0 |
| loadBalancerPort | Integer |  | 4.0.0 |
| protocol | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 4.0.0 |
| aclRefs | List | 详情参考[aclRefs] | 4.0.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 4.0.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 4.0.0 |
| listenerUuid | String | 监听器唯一标识 | 4.0.0 |
| aclUuid | String | 访问策略组唯一标识 | 4.0.0 |
| type | String | 访问策略类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| certificateUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| l3NetworkCategory | String |  | 4.0.0 |
| l3NetworkType | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
CreateSlbGroupAction action = new CreateSlbGroupAction();
action.name = "slbGroup";
action.slbOfferingUuid = "f66b4cd06a2d3ae985e40514502c3ea3";
action.frontEndL3NetworkUuid = "307ab51e198a35bab0bcc517f849aa46";
action.backendType = "VYOS";
action.deployType = "NoHA";
action.description = "this is a slb spec for test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSlbGroupAction.Result res = action.call();
```

 Python SDK

```
CreateSlbGroupAction action = CreateSlbGroupAction()
action.name = "slbGroup"
action.slbOfferingUuid = "f66b4cd06a2d3ae985e40514502c3ea3"
action.backendType = "vyos"
action.deployType = "NoHA"
action.description = "this is a slb spec for test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSlbGroupAction.Result res = action.call()
```

---

#### 修改SLB集群部署方式(ChangeSlbGroupDeployType)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/slb/groups/{slbGroupUuid}/deployType
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSlbGroupDeployType": {
    "deployType": "HA"
  },
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"changeSlbGroupDeployType":{"deployType":"HA"}}' http://localhost:8080/zstack/v1/load-balancers/slb/groups/5f54a03021ea30e89183306ea004a78e/deployType
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| slbGroupUuid | String | url |  |  | 5.1.0 |
| deployType | List | body(包含在**changeSlbGroupDeployType**结构中) |  |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "slb",
    "backendType": "vyos",
    "deployType": "NoHA",
    "description": "slb test"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.0 |
| inventory | CertificateInventory | 详情参考[inventory] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| backendType | String | 实例镜像类型 | 5.1.0 |
| deployType | String | 部署方式 | 5.1.0 |
| slbOfferingUuid | String | 实例规格 |  |
| description | String | 资源的详细描述 | 5.1.0 |
| configVersion | Long | 配置版本 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| slbVms | List | 详情参考[slbVms] |  |
| lbs | List | 详情参考[lbs] |  |
| networks | List | 详情参考[networks] |  |
| monitorIps | List | 详情参考[monitorIps] |  |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| publicNetworkUuid | String |  | 5.1.0 |
| virtualRouterVips | List |  | 5.1.0 |
| applianceVmType | String |  | 5.1.0 |
| managementNetworkUuid | String |  | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| reservedMemorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 5.1.0 |
| configTasks | List | 详情参考[configTasks] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| taskName | String |  | 5.1.0 |
| taskData | String |  | 5.1.0 |
| retryNumber | long |  | 5.1.0 |
| lastFailedReason | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| status | SlbVmInstanceConfigTaskStatus | 详情参考[status] | 5.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Pending | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Starting | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Success | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Failed | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
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
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| primaryStorageUuid | String | 主存储UUID | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.1.0 |
| rootImageUuid | String |  | 5.1.0 |
| installPath | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| format | String |  | 5.1.0 |
| size | Long |  | 5.1.0 |
| actualSize | Long |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| state | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| isShareable | Boolean |  | 5.1.0 |
| volumeQos | String |  | 5.1.0 |
| lastDetachDate | Timestamp |  | 5.1.0 |
| lastVmInstanceUuid | String |  | 5.1.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| isoUuid | String |  | 5.1.0 |
| isoInstallPath | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| state | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| vipUuid | String | VIP UUID | 5.1.0 |
| ipv6VipUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| listeners | List | 详情参考[listeners] | 5.1.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 5.1.0 |
| instancePort | Integer |  | 5.1.0 |
| loadBalancerPort | Integer |  | 5.1.0 |
| protocol | String |  | 5.1.0 |
| serverGroupUuid | String |  | 4.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 5.1.0 |
| aclRefs | List | 详情参考[aclRefs] | 5.1.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 5.1.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 5.1.0 |
| listenerUuid | String | 监听器唯一标识 | 5.1.0 |
| aclUuid | String | 访问策略组唯一标识 | 5.1.0 |
| type | String | 访问策略类型 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| certificateUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| l3NetworkCategory | String |  | 5.1.0 |
| l3NetworkType | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #monitorIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| slbGroupUuid | String |  | 5.1.0 |
| monitorIp | String |  | 5.1.0 |
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
ChangeSlbGroupDeployTypeAction action = new ChangeSlbGroupDeployTypeAction();
action.slbGroupUuid = "5f54a03021ea30e89183306ea004a78e";
action.deployType = "HA";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSlbGroupDeployTypeAction.Result res = action.call();

```

 Python SDK

```
ChangeSlbGroupDeployTypeAction action = ChangeSlbGroupDeployTypeAction()
action.slbGroupUuid = "5f54a03021ea30e89183306ea004a78e"
action.deployType = "HA"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSlbGroupDeployTypeAction.Result res = action.call()

```

---

#### 修改SLB集群健康监控IP(ChangeSlbGroupMonitorIps)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/slb/groups/{slbGroupUuid}/monitorIps
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSlbGroupMonitorIps": {
    "monitorIps": []
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
-X PUT -d '{"changeSlbGroupMonitorIps":{"monitorIps":[]}}' http://localhost:8080/zstack/v1/load-balancers/slb/groups/6d07e175d34d3b14822166b865136ec8/monitorIps
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| slbGroupUuid | String | url |  |  | 5.1.0 |
| deployType | List | body(包含在**changeSlbGroupDeployType**结构中) |  |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "slb",
    "backendType": "vyos",
    "deployType": "NoHA",
    "description": "slb test"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.0 |
| inventory | CertificateInventory | 详情参考[inventory] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| backendType | String | 实例镜像类型 | 5.1.0 |
| deployType | String | 部署方式 | 5.1.0 |
| slbOfferingUuid | String | 实例规格 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| configVersion | Long | 配置版本 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| slbVms | List | 详情参考[slbVms] |  |
| lbs | List | 详情参考[lbs] |  |
| networks | List | 详情参考[networks] |  |
| monitorIps | List | 详情参考[monitorIps] |  |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.0 |
| configVersion | long | 错误的概要描述 | 5.1.0 |
| publicNetworkUuid | String | 错误的详细信息 | 5.1.0 |
| virtualRouterVips | List | 保留字段，默认为null | 5.1.0 |
| applianceVmType | String | 保留字段，默认为null | 5.1.0 |
| managementNetworkUuid | String | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| reservedMemorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 5.1.0 |
| configTasks | List | 详情参考[configTasks] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| taskName | String |  | 5.1.0 |
| taskData | String |  | 5.1.0 |
| retryNumber | long |  | 5.1.0 |
| lastFailedReason | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| status | SlbVmInstanceConfigTaskStatus | 详情参考[status] | 5.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Pending | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Starting | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Success | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Failed | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
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
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| primaryStorageUuid | String | 主存储UUID | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.1.0 |
| rootImageUuid | String |  | 5.1.0 |
| installPath | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| format | String |  | 5.1.0 |
| size | Long |  | 5.1.0 |
| actualSize | Long |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| state | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| isShareable | Boolean |  | 5.1.0 |
| volumeQos | String |  | 5.1.0 |
| lastDetachDate | Timestamp |  | 5.1.0 |
| lastVmInstanceUuid | String |  | 5.1.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| isoUuid | String |  | 5.1.0 |
| isoInstallPath | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| state | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| vipUuid | String | VIP UUID | 5.1.0 |
| ipv6VipUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| listeners | List | 详情参考[listeners] | 5.1.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 5.1.0 |
| instancePort | Integer |  | 5.1.0 |
| loadBalancerPort | Integer |  | 5.1.0 |
| protocol | String |  | 5.1.0 |
| serverGroupUuid | String |  | 4.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 5.1.0 |
| aclRefs | List | 详情参考[aclRefs] | 5.1.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 5.1.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 5.1.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 5.1.0 |
| listenerUuid | String | 监听器唯一标识 | 5.1.0 |
| aclUuid | String | 访问策略组唯一标识 | 5.1.0 |
| type | String | 访问策略类型 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| certificateUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| listenerUuid | String |  | 5.1.0 |
| serverGroupUuid | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| l3NetworkCategory | String |  | 5.1.0 |
| l3NetworkType | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

 #monitorIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.1.0 |
| slbGroupUuid | String |  | 5.1.0 |
| monitorIp | String |  | 5.1.0 |
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
ChangeSlbGroupMonitorIpsAction action = new ChangeSlbGroupMonitorIpsAction();
action.slbGroupUuid = "6d07e175d34d3b14822166b865136ec8";
action.monitorIps = new ArrayList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSlbGroupMonitorIpsAction.Result res = action.call();

```

 Python SDK

```
ChangeSlbGroupMonitorIpsAction action = ChangeSlbGroupMonitorIpsAction()
action.slbGroupUuid = "6d07e175d34d3b14822166b865136ec8"
action.monitorIps = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSlbGroupMonitorIpsAction.Result res = action.call()

```

---

#### 查询SLB实例(QuerySlbVmInstance)



##### API请求

 URLs

```
GET zstack/v1/load-balancers/slb/instances
GET zstack/v1/load-balancers/slb/instances/{uuid}

```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/slb/instances?q=uuid=76efa7d6d9033af6b8b85c0d4050f725
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/slb/instances/bebda93d772c3ea8a16242cf8fb85e64
```



可查询字段

运行**zstack-cli**命令行工具，输入`QuerySlbVmInstance`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "slbGroupUuid": "0643d154403b3f668cd86e632b839751",
      "configTasks": [
        {
          "vmInstanceUuid": "b44f739da7d03d1e8d746992bf1d0511",
          "configVersion": 101,
          "taskName": "taskA",
          "taskData": "Data",
          "retryNumber": 2,
          "lastFailedReason": "failed",
          "status": "Failed"
        }
      ],
      "configVersion": 100,
      "uuid": "b44f739da7d03d1e8d746992bf1d0511",
      "name": "SLB",
      "description": "SLB Instance VM",
      "zoneUuid": "1ddfa48e92d432219525e71710872fed",
      "clusterUuid": "fe266a478f7a3ee791d60ec8bf515107",
      "imageUuid": "7b76ac4b5d5338f7aa534dd6d2f651de",
      "hostUuid": "d3d2f05490d93a548da3975b9aef2b02",
      "lastHostUuid": "458e298932f13bf8970a49ab37eef4b2",
      "instanceOfferingUuid": "2cb51561bace3d9cbe0e1537ed5c8d87",
      "rootVolumeUuid": "a258b546210239239b6b007257b534dd",
      "platform": "Linux",
      "defaultL3NetworkUuid": "75d6d9c236a63240ba3de52babcddb4e",
      "type": "ApplianceVm",
      "hypervisorType": "KVM",
      "memorySize": 8589934592,
      "cpuNum": 1,
      "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "state": "Running",
      "vmNics": [
        {
          "uuid": "e2ddf013a62d385f9ae7b3da274da83b",
          "vmInstanceUuid": "b44f739da7d03d1e8d746992bf1d0511",
          "usedIpUuid": "f190b722694839e2bbd1fa6f2cb1ded5",
          "l3NetworkUuid": "40ec403203343b738576fbf4b575bdec",
          "ip": "192.168.1.10",
          "mac": "00:0c:29:bd:99:fc",
          "hypervisorType": "KVM",
          "netmask": "255.255.255.0",
          "gateway": "192.168.1.1",
          "deviceId": 0,
          "state": "enable",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "allVolumes": [
        {
          "uuid": "c5055efcc2323281add5f09787f73d15",
          "name": "Root-Volume-For-VM-b44f739da7d03d1e8d746992bf1d0511",
          "primaryStorageUuid": "9e0252991dcc3ae09e10b69aad9743be",
          "vmInstanceUuid": "b44f739da7d03d1e8d746992bf1d0511",
          "diskOfferingUuid": "17b973054ad83a9a99c2defce44731d2",
          "rootImageUuid": "7b76ac4b5d5338f7aa534dd6d2f651de",
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-fcdefa0ed8dc3cabbca631c8205d57cc/c63e2314a73f3182af05c14e7f3155c9.qcow2",
          "type": "Root",
          "format": "qcow2",
          "size": 107374182400,
          "actualSize": 21474836480,
          "deviceId": 0,
          "state": "Enabled",
          "status": "Ready",
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
| success | boolean |  | 5.1.0 |
| inventories | List | 详情参考[inventories] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 5.1.0 |
| configVersion | Long |  | 5.1.0 |
| publicNetworkUuid | String |  | 5.1.0 |
| virtualRouterVips | List |  | 5.1.0 |
| applianceVmType | String |  | 5.1.0 |
| managementNetworkUuid | String |  | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| reservedMemorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed |  |  | 5.1.0 |
| allocatorStrategy | Long |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 5.1.0 |
| configTasks | List | 详情参考[configTasks] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| taskName | String |  | 5.1.0 |
| taskData | String |  | 5.1.0 |
| retryNumber | long |  | 5.1.0 |
| lastFailedReason | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| status | SlbVmInstanceConfigTaskStatus | 详情参考[status] | 5.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Pending | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Starting | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Success | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Failed | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
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
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| ipRangeUuid | String | IP段UUID | 5.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.0.0 |
| ipVersion | Integer |  | 5.0.0 |
| ip | String |  | 5.0.0 |
| netmask | String |  | 5.0.0 |
| gateway | String |  | 5.0.0 |
| usedFor | String |  | 5.0.0 |
| ipInLong | long |  | 5.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| primaryStorageUuid | String | 主存储UUID | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.1.0 |
| rootImageUuid | String |  | 5.1.0 |
| installPath | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| format | String |  | 5.1.0 |
| size | Long |  | 5.1.0 |
| actualSize | Long |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| state | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| isShareable | Boolean |  | 5.1.0 |
| volumeQos | String |  | 5.1.0 |
| lastDetachDate | Timestamp |  | 5.1.0 |
| lastVmInstanceUuid | String |  | 5.1.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| isoUuid | String |  | 5.1.0 |
| isoInstallPath | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
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
QuerySlbVmInstanceAction action = new QuerySlbVmInstanceAction();
action.conditions = asList("uuid=f6fba7cb05293adc9afb013d01b7ad5b");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySlbVmInstanceAction.Result res = action.call();

```

 Python SDK

```
QuerySlbVmInstanceAction action = QuerySlbVmInstanceAction()
action.conditions = ["uuid=2c88152e016f37838064f644e2225968"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySlbVmInstanceAction.Result res = action.call()

```

---

#### 创建证书(CreateCertificate)



##### API请求

 URLs

```
POST zstack/v1/certificates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "www.domain.com",
    "certificate": "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAECggEAd0Ixye3O8ifNgLAE1K0MBcyouMNWCMFJzHX34nO9vkILdKk3imWBWUgxrUn713CezOjZJn6PjuEyujs7UmpUA22Cyp27PqbHkAvNM02SUxx1bB19UIapSGaM7gvmTvkoAxT4+DVD9NL4wktgp22HYnNImEgs+AaxLB9sokEvC6mxP23pv7LfnK4EDH2b+1pbE++VheVIBZxK+mTdxPRgwQBJv2VtK0LRDndnRU8gmB5O0KBnep3sCsAKmWtAJf37L9lWgc9QC7LysnuMsZ10KuoeQndVetsAazBARHhUdLd1fWQqbLklC6NtcLodoS+umuvHArKx6LungK4cmNyGZQKBgQD8abrSQXOJuNNx7N+EJjn3hjc3FOrSAgGY7LCiQ/qEP8EkWslxotRHKqKqz78oq4RApT/fBV17HqPe67IJ5xhwYlIUASzs8WvigRV6ITSZv92G8iOSdW7ALZzF4q+tc2RgPvW/pZPaHoxfNU6TC/QW35qAslPWab7Tel9cGb030wKBgQDLf+OLfUfhJUq8mZ3L8U1p1QLpSJNx282hGVg+OXwpuQQZ5qrxkhzF/xBYCjmMQMEfxLtRJxYTPgkHcTp9ozl4ICXdmHpL8V+E5PBQjbCBNCbE8kjXngCc0wiKsLJIUWmKoVRoq7dAaUz3INzkp0tujf8aa7DzC+1C4+j5nvFlkwKBgCTAKClQyke1F2Qw/uI4xpvZeNSWQRJOpHjljVoy15jFx5NJfKcE9C9gb8q68LQ1NM5MwR3xpAi3D1j3rDZw5UgHqLes7CObiv+xl7TufMAeBV0OiEtcucFVYswVE0sH0AeLYzCCJSLO69U457XVObbS26X9UOOZBeW4nYXFYZ1tAoGBAJgnShIcnObZRDUZwqMfC5uqud+E9UF3cBsY4SK9RnnHrSpUjtHKRps/5498LaURMZS4OroluFqw0n1vCqWvqiOIHee+vwoTMjEiIBCKsEMapDYzVYVpzNl07HkOPm7V+Ey/7WXJpl2RngtU1fRcpYjGwMuXY5mF/GM8FxC055bjAoGATYqGLqNhbZ0SVhgSs/2vHMlJYaHwJLlYPS+9OWk5JycvYSbfa9/rc2jblieuE5MseHQFqU0BRVeHqY4dqpQpeO45fC5h9vqC4Lp2LaXbwtxv5Z0cb/o8ecXuSXeF/G2PQvhK44IQFb9RSLuQBUMp/gX6UNVS0dP+7dDpim5n2zY\u003d-----END PRIVATE KEY----------BEGIN CERTIFICATE-----MIID4zCCAsugAwIBAgIJAJWhNGBNfAtTMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJDTjELMAkGA1UECAwCU0gxCzAJBgNVBAcMAlNIMQ8wDQYDVQQKDAZaU1RBQ0sxDDAKBgNVBAsMA0RldjEZMBcGA1UEAwwQc2hpeGluLnpzdGFjay5pbzEkMCIGCSqGSIb3DQEJARYVc2hpeGluLnJ1YW5AenN0YWNrLmlvMB4XDTE4MDMyMDA0NDYwM1oXDTE5MDMyMDA0NDYwM1owgYcxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJTSDELMAkGA1UEBwwCU0gxDzANBgNVBAoMBlpTVEFDSzEMMAoGA1UECwwDRGV2MRkwFwYDVQQDDBBzaGl4aW4uenN0YWNrLmlvMSQwIgYJKoZIhvcNAQkBFhVzaGl4aW4ucnVhbkB6c3RhY2suaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAGjUDBOMB0GA1UdDgQWBBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAfBgNVHSMEGDAWgBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQDH5POu4FmmAsHXe49gL6Y6Kdcti2FTBYse7ru05V4URGsU5Dab25mATqp7z7WCiv9pTdlC0KoJieML7rpLiLskBBLpToU8bUigX96q5dmMtDbLSmGeYfhHj9tHeYuGv0U2eRcN2Jo6xlHrl6X3RazO/h/9mCW6sLAGgaJ9MyQAiqRfYaO+ToBqdbHmBEwmueaOO7wFy9UbU7F/CdeEzblKdWRMKQgf5yxA6pXYghjPWWNAqElxnnXskBmjMhYaDfGCQuRK5Ma362ax0i8UGqYfMnflBgy1qX8+f7VjyWokK4tcjep72TTYkIVBGbwBMqk2U2v5qslBRmM5+pmAESJq-----END CERTIFICATE-----"
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
-X POST -d '{"params":{"name":"www.domain.com","certificate":"-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAECggEAd0Ixye3O8ifNgLAE1K0MBcyouMNWCMFJzHX34nO9vkILdKk3imWBWUgxrUn713CezOjZJn6PjuEyujs7UmpUA22Cyp27PqbHkAvNM02SUxx1bB19UIapSGaM7gvmTvkoAxT4+DVD9NL4wktgp22HYnNImEgs+AaxLB9sokEvC6mxP23pv7LfnK4EDH2b+1pbE++VheVIBZxK+mTdxPRgwQBJv2VtK0LRDndnRU8gmB5O0KBnep3sCsAKmWtAJf37L9lWgc9QC7LysnuMsZ10KuoeQndVetsAazBARHhUdLd1fWQqbLklC6NtcLodoS+umuvHArKx6LungK4cmNyGZQKBgQD8abrSQXOJuNNx7N+EJjn3hjc3FOrSAgGY7LCiQ/qEP8EkWslxotRHKqKqz78oq4RApT/fBV17HqPe67IJ5xhwYlIUASzs8WvigRV6ITSZv92G8iOSdW7ALZzF4q+tc2RgPvW/pZPaHoxfNU6TC/QW35qAslPWab7Tel9cGb030wKBgQDLf+OLfUfhJUq8mZ3L8U1p1QLpSJNx282hGVg+OXwpuQQZ5qrxkhzF/xBYCjmMQMEfxLtRJxYTPgkHcTp9ozl4ICXdmHpL8V+E5PBQjbCBNCbE8kjXngCc0wiKsLJIUWmKoVRoq7dAaUz3INzkp0tujf8aa7DzC+1C4+j5nvFlkwKBgCTAKClQyke1F2Qw/uI4xpvZeNSWQRJOpHjljVoy15jFx5NJfKcE9C9gb8q68LQ1NM5MwR3xpAi3D1j3rDZw5UgHqLes7CObiv+xl7TufMAeBV0OiEtcucFVYswVE0sH0AeLYzCCJSLO69U457XVObbS26X9UOOZBeW4nYXFYZ1tAoGBAJgnShIcnObZRDUZwqMfC5uqud+E9UF3cBsY4SK9RnnHrSpUjtHKRps/5498LaURMZS4OroluFqw0n1vCqWvqiOIHee+vwoTMjEiIBCKsEMapDYzVYVpzNl07HkOPm7V+Ey/7WXJpl2RngtU1fRcpYjGwMuXY5mF/GM8FxC055bjAoGATYqGLqNhbZ0SVhgSs/2vHMlJYaHwJLlYPS+9OWk5JycvYSbfa9/rc2jblieuE5MseHQFqU0BRVeHqY4dqpQpeO45fC5h9vqC4Lp2LaXbwtxv5Z0cb/o8ecXuSXeF/G2PQvhK44IQFb9RSLuQBUMp/gX6UNVS0dP+7dDpim5n2zY=-----END PRIVATE KEY----------BEGIN CERTIFICATE-----MIID4zCCAsugAwIBAgIJAJWhNGBNfAtTMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJDTjELMAkGA1UECAwCU0gxCzAJBgNVBAcMAlNIMQ8wDQYDVQQKDAZaU1RBQ0sxDDAKBgNVBAsMA0RldjEZMBcGA1UEAwwQc2hpeGluLnpzdGFjay5pbzEkMCIGCSqGSIb3DQEJARYVc2hpeGluLnJ1YW5AenN0YWNrLmlvMB4XDTE4MDMyMDA0NDYwM1oXDTE5MDMyMDA0NDYwM1owgYcxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJTSDELMAkGA1UEBwwCU0gxDzANBgNVBAoMBlpTVEFDSzEMMAoGA1UECwwDRGV2MRkwFwYDVQQDDBBzaGl4aW4uenN0YWNrLmlvMSQwIgYJKoZIhvcNAQkBFhVzaGl4aW4ucnVhbkB6c3RhY2suaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAGjUDBOMB0GA1UdDgQWBBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAfBgNVHSMEGDAWgBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQDH5POu4FmmAsHXe49gL6Y6Kdcti2FTBYse7ru05V4URGsU5Dab25mATqp7z7WCiv9pTdlC0KoJieML7rpLiLskBBLpToU8bUigX96q5dmMtDbLSmGeYfhHj9tHeYuGv0U2eRcN2Jo6xlHrl6X3RazO/h/9mCW6sLAGgaJ9MyQAiqRfYaO+ToBqdbHmBEwmueaOO7wFy9UbU7F/CdeEzblKdWRMKQgf5yxA6pXYghjPWWNAqElxnnXskBmjMhYaDfGCQuRK5Ma362ax0i8UGqYfMnflBgy1qX8+f7VjyWokK4tcjep72TTYkIVBGbwBMqk2U2v5qslBRmM5+pmAESJq-----END CERTIFICATE-----"}}' http://localhost:8080/zstack/v1/certificates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3.2 |
| certificate | String | body(包含在**params**结构中) |  |  | 2.3.2 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3.2 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3.2 |
| systemTags (可选) | List | body |  |  | 2.3.2 |
| userTags (可选) | List | body |  |  | 2.3.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "www.domain.com",
    "certificate": "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAECggEAd0Ixye3O8ifNgLAE1K0MBcyouMNWCMFJzHX34nO9vkILdKk3imWBWUgxrUn713CezOjZJn6PjuEyujs7UmpUA22Cyp27PqbHkAvNM02SUxx1bB19UIapSGaM7gvmTvkoAxT4+DVD9NL4wktgp22HYnNImEgs+AaxLB9sokEvC6mxP23pv7LfnK4EDH2b+1pbE++VheVIBZxK+mTdxPRgwQBJv2VtK0LRDndnRU8gmB5O0KBnep3sCsAKmWtAJf37L9lWgc9QC7LysnuMsZ10KuoeQndVetsAazBARHhUdLd1fWQqbLklC6NtcLodoS+umuvHArKx6LungK4cmNyGZQKBgQD8abrSQXOJuNNx7N+EJjn3hjc3FOrSAgGY7LCiQ/qEP8EkWslxotRHKqKqz78oq4RApT/fBV17HqPe67IJ5xhwYlIUASzs8WvigRV6ITSZv92G8iOSdW7ALZzF4q+tc2RgPvW/pZPaHoxfNU6TC/QW35qAslPWab7Tel9cGb030wKBgQDLf+OLfUfhJUq8mZ3L8U1p1QLpSJNx282hGVg+OXwpuQQZ5qrxkhzF/xBYCjmMQMEfxLtRJxYTPgkHcTp9ozl4ICXdmHpL8V+E5PBQjbCBNCbE8kjXngCc0wiKsLJIUWmKoVRoq7dAaUz3INzkp0tujf8aa7DzC+1C4+j5nvFlkwKBgCTAKClQyke1F2Qw/uI4xpvZeNSWQRJOpHjljVoy15jFx5NJfKcE9C9gb8q68LQ1NM5MwR3xpAi3D1j3rDZw5UgHqLes7CObiv+xl7TufMAeBV0OiEtcucFVYswVE0sH0AeLYzCCJSLO69U457XVObbS26X9UOOZBeW4nYXFYZ1tAoGBAJgnShIcnObZRDUZwqMfC5uqud+E9UF3cBsY4SK9RnnHrSpUjtHKRps/5498LaURMZS4OroluFqw0n1vCqWvqiOIHee+vwoTMjEiIBCKsEMapDYzVYVpzNl07HkOPm7V+Ey/7WXJpl2RngtU1fRcpYjGwMuXY5mF/GM8FxC055bjAoGATYqGLqNhbZ0SVhgSs/2vHMlJYaHwJLlYPS+9OWk5JycvYSbfa9/rc2jblieuE5MseHQFqU0BRVeHqY4dqpQpeO45fC5h9vqC4Lp2LaXbwtxv5Z0cb/o8ecXuSXeF/G2PQvhK44IQFb9RSLuQBUMp/gX6UNVS0dP+7dDpim5n2zY\u003d-----END PRIVATE KEY----------BEGIN CERTIFICATE-----MIID4zCCAsugAwIBAgIJAJWhNGBNfAtTMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJDTjELMAkGA1UECAwCU0gxCzAJBgNVBAcMAlNIMQ8wDQYDVQQKDAZaU1RBQ0sxDDAKBgNVBAsMA0RldjEZMBcGA1UEAwwQc2hpeGluLnpzdGFjay5pbzEkMCIGCSqGSIb3DQEJARYVc2hpeGluLnJ1YW5AenN0YWNrLmlvMB4XDTE4MDMyMDA0NDYwM1oXDTE5MDMyMDA0NDYwM1owgYcxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJTSDELMAkGA1UEBwwCU0gxDzANBgNVBAoMBlpTVEFDSzEMMAoGA1UECwwDRGV2MRkwFwYDVQQDDBBzaGl4aW4uenN0YWNrLmlvMSQwIgYJKoZIhvcNAQkBFhVzaGl4aW4ucnVhbkB6c3RhY2suaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAGjUDBOMB0GA1UdDgQWBBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAfBgNVHSMEGDAWgBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQDH5POu4FmmAsHXe49gL6Y6Kdcti2FTBYse7ru05V4URGsU5Dab25mATqp7z7WCiv9pTdlC0KoJieML7rpLiLskBBLpToU8bUigX96q5dmMtDbLSmGeYfhHj9tHeYuGv0U2eRcN2Jo6xlHrl6X3RazO/h/9mCW6sLAGgaJ9MyQAiqRfYaO+ToBqdbHmBEwmueaOO7wFy9UbU7F/CdeEzblKdWRMKQgf5yxA6pXYghjPWWNAqElxnnXskBmjMhYaDfGCQuRK5Ma362ax0i8UGqYfMnflBgy1qX8+f7VjyWokK4tcjep72TTYkIVBGbwBMqk2U2v5qslBRmM5+pmAESJq-----END CERTIFICATE-----"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventory | CertificateInventory | 详情参考[inventory] | 2.3.2 |

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
| name | String | 资源名称 | 2.3.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.2 |
| certificate | String | 证书内容 | 2.3.2 |
| description | String | 资源的详细描述 | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |
| listeners | List | 详情参考[listeners] | 2.3.2 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3.2 |
| listenerUuid | String |  | 2.3.2 |
| certificateUuid | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 2.3.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.2 |



##### SDK示例

 Java SDK

```
CreateCertificateAction action = new CreateCertificateAction();
action.name = "www.domain.com";
action.certificate = "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAECggEAd0Ixye3O8ifNgLAE1K0MBcyouMNWCMFJzHX34nO9vkILdKk3imWBWUgxrUn713CezOjZJn6PjuEyujs7UmpUA22Cyp27PqbHkAvNM02SUxx1bB19UIapSGaM7gvmTvkoAxT4+DVD9NL4wktgp22HYnNImEgs+AaxLB9sokEvC6mxP23pv7LfnK4EDH2b+1pbE++VheVIBZxK+mTdxPRgwQBJv2VtK0LRDndnRU8gmB5O0KBnep3sCsAKmWtAJf37L9lWgc9QC7LysnuMsZ10KuoeQndVetsAazBARHhUdLd1fWQqbLklC6NtcLodoS+umuvHArKx6LungK4cmNyGZQKBgQD8abrSQXOJuNNx7N+EJjn3hjc3FOrSAgGY7LCiQ/qEP8EkWslxotRHKqKqz78oq4RApT/fBV17HqPe67IJ5xhwYlIUASzs8WvigRV6ITSZv92G8iOSdW7ALZzF4q+tc2RgPvW/pZPaHoxfNU6TC/QW35qAslPWab7Tel9cGb030wKBgQDLf+OLfUfhJUq8mZ3L8U1p1QLpSJNx282hGVg+OXwpuQQZ5qrxkhzF/xBYCjmMQMEfxLtRJxYTPgkHcTp9ozl4ICXdmHpL8V+E5PBQjbCBNCbE8kjXngCc0wiKsLJIUWmKoVRoq7dAaUz3INzkp0tujf8aa7DzC+1C4+j5nvFlkwKBgCTAKClQyke1F2Qw/uI4xpvZeNSWQRJOpHjljVoy15jFx5NJfKcE9C9gb8q68LQ1NM5MwR3xpAi3D1j3rDZw5UgHqLes7CObiv+xl7TufMAeBV0OiEtcucFVYswVE0sH0AeLYzCCJSLO69U457XVObbS26X9UOOZBeW4nYXFYZ1tAoGBAJgnShIcnObZRDUZwqMfC5uqud+E9UF3cBsY4SK9RnnHrSpUjtHKRps/5498LaURMZS4OroluFqw0n1vCqWvqiOIHee+vwoTMjEiIBCKsEMapDYzVYVpzNl07HkOPm7V+Ey/7WXJpl2RngtU1fRcpYjGwMuXY5mF/GM8FxC055bjAoGATYqGLqNhbZ0SVhgSs/2vHMlJYaHwJLlYPS+9OWk5JycvYSbfa9/rc2jblieuE5MseHQFqU0BRVeHqY4dqpQpeO45fC5h9vqC4Lp2LaXbwtxv5Z0cb/o8ecXuSXeF/G2PQvhK44IQFb9RSLuQBUMp/gX6UNVS0dP+7dDpim5n2zY=-----END PRIVATE KEY----------BEGIN CERTIFICATE-----MIID4zCCAsugAwIBAgIJAJWhNGBNfAtTMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJDTjELMAkGA1UECAwCU0gxCzAJBgNVBAcMAlNIMQ8wDQYDVQQKDAZaU1RBQ0sxDDAKBgNVBAsMA0RldjEZMBcGA1UEAwwQc2hpeGluLnpzdGFjay5pbzEkMCIGCSqGSIb3DQEJARYVc2hpeGluLnJ1YW5AenN0YWNrLmlvMB4XDTE4MDMyMDA0NDYwM1oXDTE5MDMyMDA0NDYwM1owgYcxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJTSDELMAkGA1UEBwwCU0gxDzANBgNVBAoMBlpTVEFDSzEMMAoGA1UECwwDRGV2MRkwFwYDVQQDDBBzaGl4aW4uenN0YWNrLmlvMSQwIgYJKoZIhvcNAQkBFhVzaGl4aW4ucnVhbkB6c3RhY2suaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAGjUDBOMB0GA1UdDgQWBBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAfBgNVHSMEGDAWgBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQDH5POu4FmmAsHXe49gL6Y6Kdcti2FTBYse7ru05V4URGsU5Dab25mATqp7z7WCiv9pTdlC0KoJieML7rpLiLskBBLpToU8bUigX96q5dmMtDbLSmGeYfhHj9tHeYuGv0U2eRcN2Jo6xlHrl6X3RazO/h/9mCW6sLAGgaJ9MyQAiqRfYaO+ToBqdbHmBEwmueaOO7wFy9UbU7F/CdeEzblKdWRMKQgf5yxA6pXYghjPWWNAqElxnnXskBmjMhYaDfGCQuRK5Ma362ax0i8UGqYfMnflBgy1qX8+f7VjyWokK4tcjep72TTYkIVBGbwBMqk2U2v5qslBRmM5+pmAESJq-----END CERTIFICATE-----";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateCertificateAction.Result res = action.call();
```

 Python SDK

```
CreateCertificateAction action = CreateCertificateAction()
action.name = "www.domain.com"
action.certificate = "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAECggEAd0Ixye3O8ifNgLAE1K0MBcyouMNWCMFJzHX34nO9vkILdKk3imWBWUgxrUn713CezOjZJn6PjuEyujs7UmpUA22Cyp27PqbHkAvNM02SUxx1bB19UIapSGaM7gvmTvkoAxT4+DVD9NL4wktgp22HYnNImEgs+AaxLB9sokEvC6mxP23pv7LfnK4EDH2b+1pbE++VheVIBZxK+mTdxPRgwQBJv2VtK0LRDndnRU8gmB5O0KBnep3sCsAKmWtAJf37L9lWgc9QC7LysnuMsZ10KuoeQndVetsAazBARHhUdLd1fWQqbLklC6NtcLodoS+umuvHArKx6LungK4cmNyGZQKBgQD8abrSQXOJuNNx7N+EJjn3hjc3FOrSAgGY7LCiQ/qEP8EkWslxotRHKqKqz78oq4RApT/fBV17HqPe67IJ5xhwYlIUASzs8WvigRV6ITSZv92G8iOSdW7ALZzF4q+tc2RgPvW/pZPaHoxfNU6TC/QW35qAslPWab7Tel9cGb030wKBgQDLf+OLfUfhJUq8mZ3L8U1p1QLpSJNx282hGVg+OXwpuQQZ5qrxkhzF/xBYCjmMQMEfxLtRJxYTPgkHcTp9ozl4ICXdmHpL8V+E5PBQjbCBNCbE8kjXngCc0wiKsLJIUWmKoVRoq7dAaUz3INzkp0tujf8aa7DzC+1C4+j5nvFlkwKBgCTAKClQyke1F2Qw/uI4xpvZeNSWQRJOpHjljVoy15jFx5NJfKcE9C9gb8q68LQ1NM5MwR3xpAi3D1j3rDZw5UgHqLes7CObiv+xl7TufMAeBV0OiEtcucFVYswVE0sH0AeLYzCCJSLO69U457XVObbS26X9UOOZBeW4nYXFYZ1tAoGBAJgnShIcnObZRDUZwqMfC5uqud+E9UF3cBsY4SK9RnnHrSpUjtHKRps/5498LaURMZS4OroluFqw0n1vCqWvqiOIHee+vwoTMjEiIBCKsEMapDYzVYVpzNl07HkOPm7V+Ey/7WXJpl2RngtU1fRcpYjGwMuXY5mF/GM8FxC055bjAoGATYqGLqNhbZ0SVhgSs/2vHMlJYaHwJLlYPS+9OWk5JycvYSbfa9/rc2jblieuE5MseHQFqU0BRVeHqY4dqpQpeO45fC5h9vqC4Lp2LaXbwtxv5Z0cb/o8ecXuSXeF/G2PQvhK44IQFb9RSLuQBUMp/gX6UNVS0dP+7dDpim5n2zY=-----END PRIVATE KEY----------BEGIN CERTIFICATE-----MIID4zCCAsugAwIBAgIJAJWhNGBNfAtTMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJDTjELMAkGA1UECAwCU0gxCzAJBgNVBAcMAlNIMQ8wDQYDVQQKDAZaU1RBQ0sxDDAKBgNVBAsMA0RldjEZMBcGA1UEAwwQc2hpeGluLnpzdGFjay5pbzEkMCIGCSqGSIb3DQEJARYVc2hpeGluLnJ1YW5AenN0YWNrLmlvMB4XDTE4MDMyMDA0NDYwM1oXDTE5MDMyMDA0NDYwM1owgYcxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJTSDELMAkGA1UEBwwCU0gxDzANBgNVBAoMBlpTVEFDSzEMMAoGA1UECwwDRGV2MRkwFwYDVQQDDBBzaGl4aW4uenN0YWNrLmlvMSQwIgYJKoZIhvcNAQkBFhVzaGl4aW4ucnVhbkB6c3RhY2suaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAGjUDBOMB0GA1UdDgQWBBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAfBgNVHSMEGDAWgBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQDH5POu4FmmAsHXe49gL6Y6Kdcti2FTBYse7ru05V4URGsU5Dab25mATqp7z7WCiv9pTdlC0KoJieML7rpLiLskBBLpToU8bUigX96q5dmMtDbLSmGeYfhHj9tHeYuGv0U2eRcN2Jo6xlHrl6X3RazO/h/9mCW6sLAGgaJ9MyQAiqRfYaO+ToBqdbHmBEwmueaOO7wFy9UbU7F/CdeEzblKdWRMKQgf5yxA6pXYghjPWWNAqElxnnXskBmjMhYaDfGCQuRK5Ma362ax0i8UGqYfMnflBgy1qX8+f7VjyWokK4tcjep72TTYkIVBGbwBMqk2U2v5qslBRmM5+pmAESJq-----END CERTIFICATE-----"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateCertificateAction.Result res = action.call()
```

---

#### 删除证书(DeleteCertificate)



##### API请求

 URLs

```
DELETE zstack/v1/certificates/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/certificates/378bccfaa21d3b7fbb7b9bb014d1541c
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3.2 |
| deleteMode (可选) | String | body |  |  | 2.3.2 |
| systemTags (可选) | List | body |  |  | 2.3.2 |
| userTags (可选) | List | body |  |  | 2.3.2 |



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
DeleteCertificateAction action = new DeleteCertificateAction();
action.uuid = "378bccfaa21d3b7fbb7b9bb014d1541c";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteCertificateAction.Result res = action.call();
```

 Python SDK

```
DeleteCertificateAction action = DeleteCertificateAction()
action.uuid = "378bccfaa21d3b7fbb7b9bb014d1541c"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteCertificateAction.Result res = action.call()
```

---

#### 查询证书(QueryCertificate)



##### API请求

 URLs

```
GET zstack/v1/certificates
GET zstack/v1/certificates/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/certificates
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/certificates/658b7eeb6e2e3ea28c4243ae24e20e07
```



可查询字段

运行CLI命令行工具，输入`QueryCertificate`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "www.domain.com",
      "certificate": "-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAECggEAd0Ixye3O8ifNgLAE1K0MBcyouMNWCMFJzHX34nO9vkILdKk3imWBWUgxrUn713CezOjZJn6PjuEyujs7UmpUA22Cyp27PqbHkAvNM02SUxx1bB19UIapSGaM7gvmTvkoAxT4+DVD9NL4wktgp22HYnNImEgs+AaxLB9sokEvC6mxP23pv7LfnK4EDH2b+1pbE++VheVIBZxK+mTdxPRgwQBJv2VtK0LRDndnRU8gmB5O0KBnep3sCsAKmWtAJf37L9lWgc9QC7LysnuMsZ10KuoeQndVetsAazBARHhUdLd1fWQqbLklC6NtcLodoS+umuvHArKx6LungK4cmNyGZQKBgQD8abrSQXOJuNNx7N+EJjn3hjc3FOrSAgGY7LCiQ/qEP8EkWslxotRHKqKqz78oq4RApT/fBV17HqPe67IJ5xhwYlIUASzs8WvigRV6ITSZv92G8iOSdW7ALZzF4q+tc2RgPvW/pZPaHoxfNU6TC/QW35qAslPWab7Tel9cGb030wKBgQDLf+OLfUfhJUq8mZ3L8U1p1QLpSJNx282hGVg+OXwpuQQZ5qrxkhzF/xBYCjmMQMEfxLtRJxYTPgkHcTp9ozl4ICXdmHpL8V+E5PBQjbCBNCbE8kjXngCc0wiKsLJIUWmKoVRoq7dAaUz3INzkp0tujf8aa7DzC+1C4+j5nvFlkwKBgCTAKClQyke1F2Qw/uI4xpvZeNSWQRJOpHjljVoy15jFx5NJfKcE9C9gb8q68LQ1NM5MwR3xpAi3D1j3rDZw5UgHqLes7CObiv+xl7TufMAeBV0OiEtcucFVYswVE0sH0AeLYzCCJSLO69U457XVObbS26X9UOOZBeW4nYXFYZ1tAoGBAJgnShIcnObZRDUZwqMfC5uqud+E9UF3cBsY4SK9RnnHrSpUjtHKRps/5498LaURMZS4OroluFqw0n1vCqWvqiOIHee+vwoTMjEiIBCKsEMapDYzVYVpzNl07HkOPm7V+Ey/7WXJpl2RngtU1fRcpYjGwMuXY5mF/GM8FxC055bjAoGATYqGLqNhbZ0SVhgSs/2vHMlJYaHwJLlYPS+9OWk5JycvYSbfa9/rc2jblieuE5MseHQFqU0BRVeHqY4dqpQpeO45fC5h9vqC4Lp2LaXbwtxv5Z0cb/o8ecXuSXeF/G2PQvhK44IQFb9RSLuQBUMp/gX6UNVS0dP+7dDpim5n2zY\u003d-----END PRIVATE KEY----------BEGIN CERTIFICATE-----MIID4zCCAsugAwIBAgIJAJWhNGBNfAtTMA0GCSqGSIb3DQEBCwUAMIGHMQswCQYDVQQGEwJDTjELMAkGA1UECAwCU0gxCzAJBgNVBAcMAlNIMQ8wDQYDVQQKDAZaU1RBQ0sxDDAKBgNVBAsMA0RldjEZMBcGA1UEAwwQc2hpeGluLnpzdGFjay5pbzEkMCIGCSqGSIb3DQEJARYVc2hpeGluLnJ1YW5AenN0YWNrLmlvMB4XDTE4MDMyMDA0NDYwM1oXDTE5MDMyMDA0NDYwM1owgYcxCzAJBgNVBAYTAkNOMQswCQYDVQQIDAJTSDELMAkGA1UEBwwCU0gxDzANBgNVBAoMBlpTVEFDSzEMMAoGA1UECwwDRGV2MRkwFwYDVQQDDBBzaGl4aW4uenN0YWNrLmlvMSQwIgYJKoZIhvcNAQkBFhVzaGl4aW4ucnVhbkB6c3RhY2suaW8wggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDIpe/zscx2QwunyYPHusMCt/5n4LWSi4pzfsUfvzo4txTe7WwWZ4H3iEA7RwSkg49xx3Rn6jh9S0RMncqUjTxPUjlZKoN0w+nU2AsxXhbV8AiS3UoWJcZUtlfLAjeUKajy1F5hyxHsKJlmOozAcXObunzuaWkKvjchqMSX54+E02h7JNtzv9lagr0MsB4hkraanlpQWr4mv3N7D8kBz9wplMeJXeo4awls3kygiN63TnIQ5hzF7jNxR3uSFYQtUfLnzKcj4aIma62tDf6pkpQ3S+SprGs/OkGvEldNus6FXTO7ixFyORM27ka3Rmv6SYQQquV+950xfb42n9s2UE0pAgMBAAGjUDBOMB0GA1UdDgQWBBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAfBgNVHSMEGDAWgBTg8PjTZJmWSDA9GPTJ7K5wWTPVsjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBCwUAA4IBAQDH5POu4FmmAsHXe49gL6Y6Kdcti2FTBYse7ru05V4URGsU5Dab25mATqp7z7WCiv9pTdlC0KoJieML7rpLiLskBBLpToU8bUigX96q5dmMtDbLSmGeYfhHj9tHeYuGv0U2eRcN2Jo6xlHrl6X3RazO/h/9mCW6sLAGgaJ9MyQAiqRfYaO+ToBqdbHmBEwmueaOO7wFy9UbU7F/CdeEzblKdWRMKQgf5yxA6pXYghjPWWNAqElxnnXskBmjMhYaDfGCQuRK5Ma362ax0i8UGqYfMnflBgy1qX8+f7VjyWokK4tcjep72TTYkIVBGbwBMqk2U2v5qslBRmM5+pmAESJq-----END CERTIFICATE-----"
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
| certificate | String | 证书内容 | 2.3.2 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| listeners | List | 详情参考[listeners] | 0.6 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3.2 |
| listenerUuid | String |  | 0.6 |
| certificateUuid | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QueryCertificateAction action = new QueryCertificateAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryCertificateAction.Result res = action.call();
```

 Python SDK

```
QueryCertificateAction action = QueryCertificateAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryCertificateAction.Result res = action.call()
```

---

#### 添加证书到负载均衡(AddCertificateToLoadBalancerListener)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/listeners/{listenerUuid}/certificate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "certificateUuid": "707589c97d89315691794dbdadb1252f"
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
-X POST -d '{"params":{"certificateUuid":"707589c97d89315691794dbdadb1252f"}}' \
http://localhost:8080/zstack/v1/load-balancers/listeners/706687a8f42538e99a8519b9cbd61440/certificate
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| certificateUuid | String | body(包含在**params**结构中) |  |  | 2.3.2 |
| listenerUuid | String | url |  |  | 2.3.2 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-Lb-Listener",
    "loadBalancerUuid": "5f6148b3eafc37e59a6cfcb30f3bd8b8",
    "vmNicRefs": [
      {
        "listenerUuid": "5f6148b3eafc37e59a6cfcb30f3bd8b8",
        "vmNicUuid": "202ca851ff3e30d0b43a6176008a7bed"
      }
    ],
    "certificateRefs": [
      {
        "listenerUuid": "5f6148b3eafc37e59a6cfcb30f3bd8b8",
        "certificateUuid": "fb20f7baabb93cc9a2e0e713c5dfd870"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 0.6 |

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
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| certificateRefs | List | 详情参考[certificateRefs] | 2.3.2 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3.2 |
| listenerUuid | String |  | 2.3.2 |
| certificateUuid | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AddCertificateToLoadBalancerListenerAction action = new AddCertificateToLoadBalancerListenerAction();
action.certificateUuid = "707589c97d89315691794dbdadb1252f";
action.listenerUuid = "706687a8f42538e99a8519b9cbd61440";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddCertificateToLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
AddCertificateToLoadBalancerListenerAction action = AddCertificateToLoadBalancerListenerAction()
action.certificateUuid = "707589c97d89315691794dbdadb1252f"
action.listenerUuid = "706687a8f42538e99a8519b9cbd61440"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddCertificateToLoadBalancerListenerAction.Result res = action.call()
```

---

#### 从负载均衡移除证书(RemoveCertificateFromLoadBalancerListener)



##### API请求

 URLs

```
DELETE zstack/v1/load-balancers/listeners/{listenerUuid}/certificate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/listeners/7b49bf59591335e8a9e3aa35c0949c0a/certificate
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| certificateUuid | String | body |  |  | 2.3.2 |
| listenerUuid | String | url |  |  | 2.3.2 |
| systemTags (可选) | List | body |  |  | 2.3.2 |
| userTags (可选) | List | body |  |  | 2.3.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-Lb-Listener",
    "loadBalancerUuid": "12c0b22525323a3d98d77a0fc722dfe6",
    "vmNicRefs": [
      {
        "listenerUuid": "12c0b22525323a3d98d77a0fc722dfe6",
        "vmNicUuid": "e1fffed46c7c329ea08eef0cf3162319"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 0.6 |

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
| loadBalancerUuid | String | 负载均衡器UUID | 0.6 |
| instancePort | Integer |  | 0.6 |
| loadBalancerPort | Integer |  | 0.6 |
| protocol | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 0.6 |
| certificateRefs | List | 详情参考[certificateRefs] | 0.6 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 0.6 |
| listenerUuid | String |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3.2 |
| listenerUuid | String |  | 2.3.2 |
| certificateUuid | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
RemoveCertificateFromLoadBalancerListenerAction action = new RemoveCertificateFromLoadBalancerListenerAction();
action.certificateUuid = "ae54af269496365d99c558a7f4137a6c";
action.listenerUuid = "7b49bf59591335e8a9e3aa35c0949c0a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveCertificateFromLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
RemoveCertificateFromLoadBalancerListenerAction action = RemoveCertificateFromLoadBalancerListenerAction()
action.certificateUuid = "ae54af269496365d99c558a7f4137a6c"
action.listenerUuid = "7b49bf59591335e8a9e3aa35c0949c0a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveCertificateFromLoadBalancerListenerAction.Result res = action.call()
```

---

#### 更新证书信息(UpdateCertificate)



##### API请求

 URLs

```
PUT zstack/v1/certificates/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateCertificate": {
    "name": "Test-Cer",
    "description": "info"
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
-X PUT -d '{"updateCertificate":{"name":"Test-Cer","description":"info"}}' \
http://localhost:8080/zstack/v1/certificates/e7fbc0a186d838f7b6fb0ae5133300ec/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateCertificate**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateCertificate**结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**updateCertificate**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-Cer",
    "certificate": "123456789",
    "description": "Certificate for lb"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | CertificateInventory | 详情参考[inventory] | 0.6 |

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
| certificate | String | 证书内容 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| listeners | List | 详情参考[listeners] | 2.3 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3.2 |
| listenerUuid | String |  | 2.3 |
| certificateUuid | String |  | 2.3.2 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateCertificateAction action = new UpdateCertificateAction();
action.uuid = "e7fbc0a186d838f7b6fb0ae5133300ec";
action.name = "Test-Cer";
action.description = "info";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateCertificateAction.Result res = action.call();
```

 Python SDK

```
UpdateCertificateAction action = UpdateCertificateAction()
action.uuid = "e7fbc0a186d838f7b6fb0ae5133300ec"
action.name = "Test-Cer"
action.description = "info"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateCertificateAction.Result res = action.call()
```

---

#### 修改控制策略组转发规则名称(ChangeAccessControlListRedirectRule)



##### API请求

 URLs

```
POST zstack/v1/access-control-lists/redirectRules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAccessControlListRedirectRule": {
    "name": "acl-group"
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
-X PUT -d '{"changeAccessControlListRedirectRule":{"name":"acl-group"}}' http://localhost:8080/zstack/v1/access-control-lists/redirectRules/e58d9a2195c432fda747f33a884028ed/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.1.0 |
| name (可选) | String | body(包含在**changeAccessControlListRedirectRule**结构中) | 转发规则名称 |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "aclUuid": "bc9854edd56938f59a7ad06d2ffddb77",
    "type": "RedirectRule",
    "name": "acl-group",
    "domain": "zstack.io",
    "url": "/test"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | AccessControlListEntryInventory | 详情参考[inventory] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| aclUuid | String |  | 4.1.0 |
| type | String |  | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| domain | String |  | 4.1.0 |
| url | String |  | 4.1.0 |
| ipEntries | String |  | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
ChangeAccessControlListRedirectRuleAction action = new ChangeAccessControlListRedirectRuleAction();
action.uuid = "e58d9a2195c432fda747f33a884028ed";
action.name = "acl-group";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAccessControlListRedirectRuleAction.Result res = action.call();
```

 Python SDK

```
ChangeAccessControlListRedirectRuleAction action = ChangeAccessControlListRedirectRuleAction()
action.uuid = "e58d9a2195c432fda747f33a884028ed"
action.name = "acl-group"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAccessControlListRedirectRuleAction.Result res = action.call()
```

---

#### 修改访问控制组绑定的后端服务器组(ChangeAccessControlListServerGroup)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/listener/acl/{aclUuid}/servergroup/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAccessControlListServerGroup": {
    "serverGroupUuids": [
      "89bdb613cad93f5f881b9127986d4d1b"
    ],
    "listenerUuid": "e58cd2cd6a633f999909c7e5ce448e07"
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
-X PUT -d '{"changeAccessControlListServerGroup":{"serverGroupUuids":["89bdb613cad93f5f881b9127986d4d1b"],"listenerUuid":"e58cd2cd6a633f999909c7e5ce448e07"}}' http://localhost:8080/zstack/v1/load-balancers/listener/acl/07f904e5fbc8312992dd85a99c8edc9b/servergroup/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serverGroupUuids | List | body(包含在**changeAccessControlListServerGroup**结构中) | 负载均衡器服务器组uuid |  | 4.1.0 |
| listenerUuid | String | body(包含在**changeAccessControlListServerGroup**结构中) | 监听器唯一标识 |  | 4.1.0 |
| aclUuid | String | url | 访问控制策略组的唯一标识 |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



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
ChangeAccessControlListServerGroupAction action = new ChangeAccessControlListServerGroupAction();
action.serverGroupUuids = asList("89bdb613cad93f5f881b9127986d4d1b");
action.listenerUuid = "e58cd2cd6a633f999909c7e5ce448e07";
action.aclUuid = "07f904e5fbc8312992dd85a99c8edc9b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAccessControlListServerGroupAction.Result res = action.call();
```

 Python SDK

```
ChangeAccessControlListServerGroupAction action = ChangeAccessControlListServerGroupAction()
action.serverGroupUuids = [89bdb613cad93f5f881b9127986d4d1b]
action.listenerUuid = "e58cd2cd6a633f999909c7e5ce448e07"
action.aclUuid = "07f904e5fbc8312992dd85a99c8edc9b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAccessControlListServerGroupAction.Result res = action.call()
```

---

#### 获取负载均衡监听器访问控制策略条目(GetLoadBalancerListenerACLEntries)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/listeners/access-control-lists/entries
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/listeners/access-control-lists/entries
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| listenerUuids (可选) | List | query |  |  | 4.1.0 |
| type (可选) | String | query |  |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



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
GetLoadBalancerListenerACLEntriesAction action = new GetLoadBalancerListenerACLEntriesAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetLoadBalancerListenerACLEntriesAction.Result res = action.call();
```

 Python SDK

```
GetLoadBalancerListenerACLEntriesAction action = GetLoadBalancerListenerACLEntriesAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetLoadBalancerListenerACLEntriesAction.Result res = action.call()
```

---

#### 创建访问控制策略组(CreateAccessControlList)



##### API请求

 URLs

```
POST zstack/v1/access-control-lists
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "acl-group",
    "ipVersion": 4.0
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
-X POST -d '{"params":{"name":"acl-group","ipVersion":4.0}}' http://localhost:8080/zstack/v1/access-control-lists
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.9.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.9.0 |
| ipVersion (可选) | Integer | body(包含在**params**结构中) | IP协议版本 | 4 6 | 3.9.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.9.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "acl-group",
    "ipVersion": 4.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | AccessControlListInventory | 详情参考[inventory] | 3.9.0 |

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
| name | String | 资源名称 | 3.9.0 |
| ipVersion | Integer | IP地址版本 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| entries | List | 详情参考[entries] | 3.9.0 |

 #entries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| aclUuid | String | 访问控制策略组的唯一标识 | 3.9.0 |
| ipEntries | String | IP组 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
CreateAccessControlListAction action = new CreateAccessControlListAction();
action.name = "acl-group";
action.ipVersion = 4.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAccessControlListAction.Result res = action.call();
```

 Python SDK

```
CreateAccessControlListAction action = CreateAccessControlListAction()
action.name = "acl-group"
action.ipVersion = 4.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAccessControlListAction.Result res = action.call()
```

---

#### 删除访问控制策略组(DeleteAccessControlList)



##### API请求

 URLs

```
DELETE zstack/v1/access-control-lists/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/access-control-lists/f2a128d702d83f4389ad82d425b0e74e
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.9.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



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
DeleteAccessControlListAction action = new DeleteAccessControlListAction();
action.uuid = "f2a128d702d83f4389ad82d425b0e74e";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAccessControlListAction.Result res = action.call();
```

 Python SDK

```
DeleteAccessControlListAction action = DeleteAccessControlListAction()
action.uuid = "f2a128d702d83f4389ad82d425b0e74e"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAccessControlListAction.Result res = action.call()
```

---

#### 查询访问控制策略组(QueryAccessControlList)



##### API请求

 URLs

```
GET zstack/v1/access-control-lists
```


```
GET zstack/v1/access-control-lists/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/access-control-lists
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/access-control-lists/83146a1d0dd93c6abc53788a6434bd57
```



可查询字段

运行CLI命令行工具，输入QueryAccessControlList并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "0abdbd20b8173ccf89f881309b5e40d0",
      "name": "acl-group"
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
| name | String | 资源名称 | 3.9.0 |
| ipVersion | Integer | IP地址版本 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| entries | List | 详情参考[entries] | 3.9.0 |

 #entries

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| aclUuid | String | 访问控制策略组的唯一标识 | 3.9.0 |
| ipEntries | String | IP组 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
QueryAccessControlListAction action = new QueryAccessControlListAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAccessControlListAction.Result res = action.call();
```

 Python SDK

```
QueryAccessControlListAction action = QueryAccessControlListAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAccessControlListAction.Result res = action.call()
```

---

#### 向访问控制策略组添加IP组(AddAccessControlListEntry)



##### API请求

 URLs

```
POST zstack/v1/access-control-lists/{aclUuid}/ipentries
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "entries": "192.168.12.1,192.168.48.0/24"
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
-X POST -d '{"params":{"entries":"192.168.12.1,192.168.48.0/24"}}' http://localhost:8080/zstack/v1/access-control-lists/101a39fcb6c538a4914d0ae7fa8468a4/ipentries
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| aclUuid | String | url | 访问控制策略组的唯一标识 |  | 3.9.0 |
| entries | String | body(包含在**params**结构中) | IP组 |  | 3.9.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.9.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.9.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "aclUuid": "3e05577ffa823e759d67e112aa7e5f80",
    "ipEntries": "192.168.48.0/24"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | AccessControlListEntryInventory | 详情参考[inventory] | 3.9.0 |

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
| aclUuid | String | 访问控制策略组的唯一标识 | 3.9.0 |
| ipEntries | String | IP组 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
AddAccessControlListEntryAction action = new AddAccessControlListEntryAction();
action.aclUuid = "101a39fcb6c538a4914d0ae7fa8468a4";
action.entries = "192.168.12.1,192.168.48.0/24";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAccessControlListEntryAction.Result res = action.call();
```

 Python SDK

```
AddAccessControlListEntryAction action = AddAccessControlListEntryAction()
action.aclUuid = "101a39fcb6c538a4914d0ae7fa8468a4"
action.entries = "192.168.12.1,192.168.48.0/24"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAccessControlListEntryAction.Result res = action.call()
```

---

#### 删除访问控制策略的IP组(RemoveAccessControlListEntry)



##### API请求

 URLs

```
DELETE zstack/v1/access-control-lists/{aclUuid}/ipentries/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/access-control-lists/c151f0f90e143c26b6667e70ebbe5b7b/ipentries/22c9d1f964b63f6abc52fed8437042a3
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| aclUuid | String | url | 访问控制策略组的唯一标识 |  | 3.9.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.9.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



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
RemoveAccessControlListEntryAction action = new RemoveAccessControlListEntryAction();
action.aclUuid = "c151f0f90e143c26b6667e70ebbe5b7b";
action.uuid = "22c9d1f964b63f6abc52fed8437042a3";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveAccessControlListEntryAction.Result res = action.call();
```

 Python SDK

```
RemoveAccessControlListEntryAction action = RemoveAccessControlListEntryAction()
action.aclUuid = "c151f0f90e143c26b6667e70ebbe5b7b"
action.uuid = "22c9d1f964b63f6abc52fed8437042a3"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveAccessControlListEntryAction.Result res = action.call()
```

---

#### 添加监听器的访问控制策略(AddAccessControlListToLoadBalancer)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/listeners/{listenerUuid}/access-control-lists
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "aclUuids": [
      "25e10ecdb6d63b598899c1103d2cdf46"
    ],
    "aclType": "black"
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
-X POST -d '{"params":{"aclUuids":["25e10ecdb6d63b598899c1103d2cdf46"],"aclType":"black"}}' http://localhost:8080/zstack/v1/load-balancers/listeners/19c1a4dcaea637da86e3ecbb6a3a5f6e/access-control-lists
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| aclUuids | List | body(包含在**params**结构中) | 访问控制策略组的唯一标识 |  | 3.9.0 |
| aclType | String | body(包含在**params**结构中) | 访问控制策略类型 | white black redirect | 4.1.0 |
| listenerUuid | String | url | 监听器唯一标识 |  | 3.9.0 |
| serverGroupUuids (可选) | List | body | 负载均衡器服务器组uuid |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



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
AddAccessControlListToLoadBalancerAction action = new AddAccessControlListToLoadBalancerAction();
action.aclUuids = asList("25e10ecdb6d63b598899c1103d2cdf46");
action.aclType = "black";
action.listenerUuid = "19c1a4dcaea637da86e3ecbb6a3a5f6e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAccessControlListToLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
AddAccessControlListToLoadBalancerAction action = AddAccessControlListToLoadBalancerAction()
action.aclUuids = [25e10ecdb6d63b598899c1103d2cdf46]
action.aclType = "black"
action.listenerUuid = "19c1a4dcaea637da86e3ecbb6a3a5f6e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAccessControlListToLoadBalancerAction.Result res = action.call()
```

---

#### 删除监听器访问控制策略(RemoveAccessControlListFromLoadBalancer)



##### API请求

 URLs

```
DELETE zstack/v1/load-balancers/listeners/{listenerUuid}/access-control-lists
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/listeners/0299b3e26af5350c8db91930723d2065/access-control-lists
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| aclUuids | List | body | 访问控制策略组唯一标识 |  | 3.9.0 |
| listenerUuid | String | url | 监听器唯一标识 |  | 3.9.0 |
| serverGroupUuids (可选) | List | body |  |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "fb39937eaf5b3564af4b23d48802d438",
    "name": "test-lb-listener"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 3.9.0 |

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
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 3.9.0 |
| instancePort | Integer |  | 3.9.0 |
| loadBalancerPort | Integer |  | 3.9.0 |
| protocol | String |  | 3.9.0 |
| serverGroupUuid | String |  | 4.1.3 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 3.9.0 |
| aclRefs | List | 详情参考[aclRefs] | 3.9.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 3.9.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.1.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.9.0 |
| listenerUuid | String |  | 3.9.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.9.0 |
| status | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 3.9.0 |
| listenerUuid | String | 监听器唯一标识 | 3.9.0 |
| aclUuid | String | 访问策略组唯一标识 | 3.9.0 |
| type | String | 访问策略类型 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.9.0 |
| listenerUuid | String |  | 3.9.0 |
| certificateUuid | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.1.0 |
| listenerUuid | String |  | 4.1.0 |
| serverGroupUuid | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
RemoveAccessControlListFromLoadBalancerAction action = new RemoveAccessControlListFromLoadBalancerAction();
action.aclUuids = asList("027bfcc0fddf39e3be51badf4777c0cd");
action.listenerUuid = "0299b3e26af5350c8db91930723d2065";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveAccessControlListFromLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
RemoveAccessControlListFromLoadBalancerAction action = RemoveAccessControlListFromLoadBalancerAction()
action.aclUuids = [027bfcc0fddf39e3be51badf4777c0cd]
action.listenerUuid = "0299b3e26af5350c8db91930723d2065"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveAccessControlListFromLoadBalancerAction.Result res = action.call()
```

---

#### 获取监听器可加载L3网络(GetCandidateL3NetworksForLoadBalancer)



##### API请求

 URLs

```
GET zstack/v1/load-balancers/listeners/{listenerUuid}/networks/candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/listeners/6ecc19bdec0139499e3abf6c51bca683/networks/candidates?limit=1000.0&start=0.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| listenerUuid | String | url |  |  | 3.9.0 |
| limit (可选) | Integer | query |  |  | 3.9.0 |
| start (可选) | Integer | query |  |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "Test-L3Network",
      "l2NetworkUuid": "7631f86a65af335fb1496afe8e7ac9ee"
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
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| type | String |  | 3.9.0 |
| zoneUuid | String | 区域UUID | 3.9.0 |
| l2NetworkUuid | String | 二层网络UUID | 3.9.0 |
| state | String |  | 3.9.0 |
| dnsDomain | String |  | 3.9.0 |
| system | Boolean |  | 3.9.0 |
| category | String |  | 3.9.0 |
| ipVersion | Integer |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| dns | List |  | 3.9.0 |
| ipRanges | List | 详情参考[ipRanges] | 3.9.0 |
| networkServices | List | 详情参考[networkServices] | 3.9.0 |
| hostRoute | List | 详情参考[hostRoute] | 3.9.0 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| startIp | String |  | 3.9.0 |
| endIp | String |  | 3.9.0 |
| netmask | String |  | 3.9.0 |
| gateway | String |  | 3.9.0 |
| networkCidr | String |  | 3.9.0 |
| ipVersion | Integer |  | 3.9.0 |
| addressMode | String |  | 3.9.0 |
| prefixLen | Integer |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 3.9.0 |
| networkServiceType | String |  | 3.9.0 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| prefix | String |  | 3.9.0 |
| nexthop | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
GetCandidateL3NetworksForLoadBalancerAction action = new GetCandidateL3NetworksForLoadBalancerAction();
action.listenerUuid = "6ecc19bdec0139499e3abf6c51bca683";
action.limit = 1000.0;
action.start = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateL3NetworksForLoadBalancerAction.Result res = action.call();
```

 Python SDK

```
GetCandidateL3NetworksForLoadBalancerAction action = GetCandidateL3NetworksForLoadBalancerAction()
action.listenerUuid = "6ecc19bdec0139499e3abf6c51bca683"
action.limit = 1000.0
action.start = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateL3NetworksForLoadBalancerAction.Result res = action.call()
```

---

#### 创建负载均衡器服务器组(CreateLoadBalancerServerGroup)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/{loadBalancerUuid}/servergroups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "create-Lb",
    "ipVersion": 4
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{"name":"create-Lb","ipVersion":4}}' http://localhost:8080/zstack/v1/load-balancers/7cac70b63aad32dda436e95bba3c34cb/servergroups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| loadBalancerUuid | String | url | 负载均衡器UUID |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |
| ipVersion (可选) | Integer | body(包含在**params**结构中) | IP版本 |  | 5.1.0 |



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
CreateLoadBalancerServerGroupAction action = new CreateLoadBalancerServerGroupAction();
action.name = "create-Lb";
action.loadBalancerUuid = "7cac70b63aad32dda436e95bba3c34cb";
action.ipVersion = 4;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateLoadBalancerServerGroupAction.Result res = action.call();
```

 Python SDK

```
CreateLoadBalancerServerGroupAction action = CreateLoadBalancerServerGroupAction()
action.name = "create-Lb"
action.loadBalancerUuid = "7cac70b63aad32dda436e95bba3c34cb"
action.ipVersion = 4
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateLoadBalancerServerGroupAction.Result res = action.call()
```

---

#### 删除负载均衡器服务器组(DeleteLoadBalancerServerGroup)



##### API请求

 URLs

```
DELETE zstack/v1/load-balancers/servergroups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/servergroups/1e1fef3a79563c1080210f094ea62898?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 服务器组uuid |  | 4.0.0 |
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
DeleteLoadBalancerServerGroupAction action = new DeleteLoadBalancerServerGroupAction();
action.uuid = "1e1fef3a79563c1080210f094ea62898";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteLoadBalancerServerGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteLoadBalancerServerGroupAction action = DeleteLoadBalancerServerGroupAction()
action.uuid = "1e1fef3a79563c1080210f094ea62898"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteLoadBalancerServerGroupAction.Result res = action.call()
```

---

#### 更新负载均衡器服务器组(UpdateLoadBalancerServerGroup)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/servergroups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateLoadBalancerServerGroup": {
    "name": "updateServerGroup",
    "description": "updateServerGroup"
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
-X PUT -d '{"updateLoadBalancerServerGroup":{"name":"updateServerGroup","description":"updateServerGroup"}}' http://localhost:8080/zstack/v1/load-balancers/servergroups/e29a3b43310933718221e4c314c8af6f/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name(可选) | String | body(包含在**updateLoadBalancerServerGroup**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateLoadBalancerServerGroup**结构中) | 资源的详细描述 |  | 4.0.0 |
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
UpdateLoadBalancerServerGroupAction action = new UpdateLoadBalancerServerGroupAction();
action.uuid = "e29a3b43310933718221e4c314c8af6f";
action.name = "updateServerGroup";
action.description = "updateServerGroup";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateLoadBalancerServerGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateLoadBalancerServerGroupAction action = UpdateLoadBalancerServerGroupAction()
action.uuid = "e29a3b43310933718221e4c314c8af6f"
action.name = "updateServerGroup"
action.description = "updateServerGroup"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateLoadBalancerServerGroupAction.Result res = action.call()
```

---

#### 查询负载均衡器服务器组(QueryLoadBalancerServerGroup)



##### API请求

 URLs

```
GET zstack/v1/load-balancers/servergroups
```


```
GET zstack/v1/load-balancers/servergroups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/servergroups
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/servergroups/3d12c68915bd391ca7cea7a95249b47b
```



可查询字段

运行CLI命令行工具，输入QueryLoadBalancerServerGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f523d90c41b136279b523052149c9690",
      "name": "Test-LbServerGroup"
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

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| listenerServerGroupRefs | List | 详情参考[listenerServerGroupRefs] | 4.0.0 |
| serverIps | List | 详情参考[serverIps] | 4.0.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 4.0.0 |

 #listenerServerGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #serverIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| ipAddress | String |  | 4.0.0 |
| weight | Long |  | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| weight | Long |  | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
QueryLoadBalancerServerGroupAction action = new QueryLoadBalancerServerGroupAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryLoadBalancerServerGroupAction.Result res = action.call();
```

 Python SDK

```
QueryLoadBalancerServerGroupAction action = QueryLoadBalancerServerGroupAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryLoadBalancerServerGroupAction.Result res = action.call()
```

---

#### 添加后端服务器到服务器组(AddBackendServerToServerGroup)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/servergroups/{serverGroupUuid}/backendservers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmNics": [
      {
        "70856dd6ee693c30b28e6233850fc494": "10"
      }
    ],
    "servers": [
      {
        "192.168.1.1": "20"
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
-X POST -d '{"params":{"vmNics":[{"70856dd6ee693c30b28e6233850fc494":"10"}],"servers":[{"192.168.1.1":"20"}]}}' http://localhost:8080/zstack/v1/load-balancers/servergroups/9e9c1f7a74ce3cb6b51d4f938537f765/backendservers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serverGroupUuid | String | url | 负载均衡器服务器组uuid |  | 4.0.0 |
| vmNics (可选) | List | body(包含在**params**结构中) | 后端服务器网卡 |  | 4.0.0 |
| servers (可选) | List | body(包含在**params**结构中) | 后端服务器IP |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



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
AddBackendServerToServerGroupAction action = new AddBackendServerToServerGroupAction();
action.serverGroupUuid = "9e9c1f7a74ce3cb6b51d4f938537f765";
action.vmNics = asList([70856dd6ee693c30b28e6233850fc494:10]);
action.servers = asList([192.168.1.1:20]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddBackendServerToServerGroupAction.Result res = action.call();
```

 Python SDK

```
AddBackendServerToServerGroupAction action = AddBackendServerToServerGroupAction()
action.serverGroupUuid = "9e9c1f7a74ce3cb6b51d4f938537f765"
action.vmNics = [[70856dd6ee693c30b28e6233850fc494:10]]
action.servers = [[192.168.1.1:20]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddBackendServerToServerGroupAction.Result res = action.call()
```

---

#### 从服务器组移除后端服务器(RemoveBackendServerFromServerGroup)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/servergroups/{serverGroupUuid}/backendservers/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "removeBackendServerFromServerGroup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"removeBackendServerFromServerGroup":{}}' http://localhost:8080/zstack/v1/load-balancers/servergroups/af07cb06004d35b6af53aa12c8438f22/backendservers/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serverGroupUuid | String | url |  |  | 4.0.0 |
| vmNicUuids (可选) | List | body(包含在**removeBackendServerFromServerGroup**结构中) |  |  | 4.0.0 |
| serverIps (可选) | List | body(包含在**removeBackendServerFromServerGroup**结构中) |  |  | 4.0.0 |
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
RemoveBackendServerFromServerGroupAction action = new RemoveBackendServerFromServerGroupAction();
action.serverGroupUuid = "af07cb06004d35b6af53aa12c8438f22";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveBackendServerFromServerGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveBackendServerFromServerGroupAction action = RemoveBackendServerFromServerGroupAction()
action.serverGroupUuid = "af07cb06004d35b6af53aa12c8438f22"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveBackendServerFromServerGroupAction.Result res = action.call()
```

---

#### 添加服务器组到负载均衡监听器(AddServerGroupToLoadBalancerListener)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/listeners/{listenerUuid}/servergroups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "serverGroupUuid": "05a078a03cad32a6a4c5c05f418eb27a"
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
-X POST -d '{"params":{"serverGroupUuid":"05a078a03cad32a6a4c5c05f418eb27a"}}' http://localhost:8080/zstack/v1/load-balancers/listeners/cb64a1d37cae35449ca3f9813150f073/servergroups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serverGroupUuid | String | body(包含在**params**结构中) | 负载均衡器服务器组uuid |  | 4.0.0 |
| listenerUuid | String | url | 负载均衡器监听器uuid |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2bdca7f6bea932cd8373468d971ef61f",
    "name": "Test-Listener",
    "loadBalancerUuid": "32a8cf1442b43724bef1aa2f94aa97e4",
    "instancePort": 80.0,
    "loadBalancerPort": 80.0,
    "protocol": "http"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 4.0.0 |
| instancePort | Integer |  | 4.0.0 |
| loadBalancerPort | Integer |  | 4.0.0 |
| protocol | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 4.0.0 |
| aclRefs | List | 详情参考[alcRefs] | 4.0.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 4.0.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #alcRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 4.0.0 |
| listenerUuid | String | 监听器唯一标识 | 4.0.0 |
| aclUuid | String | 访问策略组唯一标识 | 4.0.0 |
| type | String | 访问策略类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| certificateUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
AddServerGroupToLoadBalancerListenerAction action = new AddServerGroupToLoadBalancerListenerAction();
action.serverGroupUuid = "05a078a03cad32a6a4c5c05f418eb27a";
action.listenerUuid = "cb64a1d37cae35449ca3f9813150f073";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddServerGroupToLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
AddServerGroupToLoadBalancerListenerAction action = AddServerGroupToLoadBalancerListenerAction()
action.serverGroupUuid = "05a078a03cad32a6a4c5c05f418eb27a"
action.listenerUuid = "cb64a1d37cae35449ca3f9813150f073"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddServerGroupToLoadBalancerListenerAction.Result res = action.call()
```

---

#### 从负载均衡监听器移除服务器组(RemoveServerGroupFromLoadBalancerListener)



##### API请求

 URLs

```
DELETE zstack/v1/load-balancers/listeners/{listenerUuid}/servergroups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/listeners/f75607a7bf203e07bab135d9363bd17d/servergroups
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serverGroupUuid | String | body | 服务器组uuid |  | 4.0.0 |
| listenerUuid | String | url | 监听器uuid |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0938faf74f7d34cd97d35427b1b562e5",
    "name": "Test-Listener",
    "loadBalancerUuid": "e64028f4b3f33896a49d4da1d4e51a8f",
    "instancePort": 80.0,
    "loadBalancerPort": 80.0,
    "protocol": "http"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | LoadBalancerListenerInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 4.0.0 |
| instancePort | Integer |  | 4.0.0 |
| loadBalancerPort | Integer |  | 4.0.0 |
| protocol | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 4.0.0 |
| aclRefs | List | 详情参考[aclRefs] | 4.0.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 4.0.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 4.0.0 |
| listenerUuid | String | 监听器唯一标识 | 4.0.0 |
| aclUuid | String | 访问策略组唯一标识 | 4.0.0 |
| type | String | 访问策略类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| certificateUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
RemoveServerGroupFromLoadBalancerListenerAction action = new RemoveServerGroupFromLoadBalancerListenerAction();
action.serverGroupUuid = "f08184f0cda83505bc2a703b5e589160";
action.listenerUuid = "f75607a7bf203e07bab135d9363bd17d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveServerGroupFromLoadBalancerListenerAction.Result res = action.call();
```

 Python SDK

```
RemoveServerGroupFromLoadBalancerListenerAction action = RemoveServerGroupFromLoadBalancerListenerAction()
action.serverGroupUuid = "f08184f0cda83505bc2a703b5e589160"
action.listenerUuid = "f75607a7bf203e07bab135d9363bd17d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveServerGroupFromLoadBalancerListenerAction.Result res = action.call()
```

---

#### 更新负载均衡后端服务器参数(ChangeLoadBalancerBackendServer)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/servergroups/{serverGroupUuid}/backendserver/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeLoadBalancerBackendServer": {
    "vmNics": [
      {
        "c1409d7fc54333d5ad3163d406620c01": "10"
      }
    ],
    "servers": [
      {
        "192.168.1.1": "20"
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
-X PUT -d '{"changeLoadBalancerBackendServer":{"vmNics":[{"c1409d7fc54333d5ad3163d406620c01":"10"}],"servers":[{"192.168.1.1":"20"}]}}' http://localhost:8080/zstack/v1/load-balancers/servergroups/892bcf49ff433372952a09db93f851e6/backendserver/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| serverGroupUuid | String | url | 负载均衡器服务器组uuid |  | 4.0.0 |
| vmNics (可选) | List | body(包含在**changeLoadBalancerBackendServer**结构中) | 后端服务器组网卡 |  | 4.0.0 |
| servers (可选) | List | body(包含在**changeLoadBalancerBackendServer**结构中) | 后端服务器组网ip |  | 4.0.0 |
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
ChangeLoadBalancerBackendServerAction action = new ChangeLoadBalancerBackendServerAction();
action.serverGroupUuid = "892bcf49ff433372952a09db93f851e6";
action.vmNics = asList([c1409d7fc54333d5ad3163d406620c01:10]);
action.servers = asList([192.168.1.1:20]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeLoadBalancerBackendServerAction.Result res = action.call();
```

 Python SDK

```
ChangeLoadBalancerBackendServerAction action = ChangeLoadBalancerBackendServerAction()
action.serverGroupUuid = "892bcf49ff433372952a09db93f851e6"
action.vmNics = [[c1409d7fc54333d5ad3163d406620c01:10]]
action.servers = [[192.168.1.1:20]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeLoadBalancerBackendServerAction.Result res = action.call()
```

---

#### 获取可供负载均衡器服务器组添加的云主机网卡(GetCandidateVmNicsForLoadBalancerServerGroup)



##### API请求

 URLs

```
GET zstack/v1/load-balancers/servergroups/candidate-nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/servergroups/candidate-nics?servergroupUuid=8e19c3c1227635b39799ff85cd2e01b4&loadBalancerUuid=786271b7eea63f0785ed67e3a36bfe35
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| servergroupUuid (可选) | String | query |  |  | 4.0.0 |
| loadBalancerUuid (可选) | String | query | 负载均衡器UUID |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |
| ipVersion (可选) | Integer | query |  | 4 6 | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "798c7b209b34303aa9a48593594bccee",
      "vmInstanceUuid": "c158c92bdda63bbb97c8dea6d284350a",
      "usedIpUuid": "702b0b20aebe3d4a880abe851940462d",
      "l3NetworkUuid": "a1cebc14f5b236578049889964686822",
      "ip": "192.168.1.10",
      "mac": "00:0c:29:bd:99:fc",
      "hypervisorType": "KVM",
      "netmask": "255.255.255.0",
      "gateway": "192.168.1.1",
      "deviceId": 0.0,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
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

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
GetCandidateVmNicsForLoadBalancerServerGroupAction action = new GetCandidateVmNicsForLoadBalancerServerGroupAction();
action.servergroupUuid = "8e19c3c1227635b39799ff85cd2e01b4";
action.loadBalancerUuid = "786271b7eea63f0785ed67e3a36bfe35";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateVmNicsForLoadBalancerServerGroupAction.Result res = action.call();
```

 Python SDK

```
GetCandidateVmNicsForLoadBalancerServerGroupAction action = GetCandidateVmNicsForLoadBalancerServerGroupAction()
action.servergroupUuid = "8e19c3c1227635b39799ff85cd2e01b4"
action.loadBalancerUuid = "786271b7eea63f0785ed67e3a36bfe35"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateVmNicsForLoadBalancerServerGroupAction.Result res = action.call()
```

---

#### 删除性能独享型负载均衡器组(DeleteSlbGroup)



##### API请求

 URLs

```
DELETE zstack/v1/load-balancers/slb/group/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/load-balancers/slb/group/d0b541dcd7d230378a0d97e6c1e07d48
```

   参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.0.0 |
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
DeleteSlbGroupAction action = new DeleteSlbGroupAction();
action.uuid = "d0b541dcd7d230378a0d97e6c1e07d48";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSlbGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteSlbGroupAction action = DeleteSlbGroupAction()
action.uuid = "d0b541dcd7d230378a0d97e6c1e07d48"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSlbGroupAction.Result res = action.call()
```

---

#### 更新性能独享型负载均衡器组(UpdateSlbGroup)



##### API请求

 URLs

```
PUT zstack/v1/load-balancers/slb/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSlbGroup": {
    "name": "slb",
    "description": "slb test",
    "slbOfferingUuid": "3996416dcab833258087ac86be993858"
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
-X PUT -d '{"updateSlbGroup":{"name":"slb","description":"slb test","slbOfferingUuid":"3996416dcab833258087ac86be993858"}}' http://localhost:8080/zstack/v1/load-balancers/slb/group/fa13412281f333469e8009c531ef9755/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name (可选) | String | body(包含在**updateSlbGroup**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateSlbGroup**结构中) | 资源的详细描述 |  | 4.0.0 |
| slbOfferingUuid (可选) | String | body(包含在**updateSlbGroup**结构中) | 性能独享型负载均衡器规格 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "slb",
    "backendType": "vyos",
    "deployType": "direct",
    "description": "slb test"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | SlbGroupInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| backendType | String |  | 4.0.0 |
| deployType | String |  | 4.0.0 |
| slbOfferingUuid | String |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| slbVms | List | 详情参考[slbVms] | 4.0.0 |
| lbs | List | 详情参考[lbs] | 4.0.0 |
| networks | List | 详情参考[networks] | 4.0.0 |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| publicNetworkUuid | String |  | 4.0.0 |
| virtualRouterVips | List |  | 4.0.0 |
| applianceVmType | String |  | 4.0.0 |
| managementNetworkUuid | String |  | 4.0.0 |
| defaultRouteL3NetworkUuid | String |  | 4.0.0 |
| status | String |  | 4.0.0 |
| agentPort | Integer |  | 4.0.0 |
| haStatus | String |  | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.0.0 |
| lastHostUuid | String |  | 4.0.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String |  | 4.0.0 |
| defaultL3NetworkUuid | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| hypervisorType | String |  | 4.0.0 |
| memorySize | Long |  | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| cpuSpeed | Long |  | 4.0.0 |
| allocatorStrategy | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String |  | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.0.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| primaryStorageUuid | String | 主存储UUID | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.0.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.0.0 |
| installPath | String | 云盘在主存储上的路径 | 4.0.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.0.0 |
| format | String | 云盘格式 | 4.0.0 |
| size | Long | 云盘大小 | 4.0.0 |
| actualSize | Long | 云盘真实大小 | 4.0.0 |
| deviceId | Integer |  | 4.0.0 |
| state | String | 云盘是否开启 | 4.0.0 |
| status | String | 云盘状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| isShareable | Boolean | 是否共享云盘 | 4.0.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.0.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| deviceId | Integer | 光驱顺序号 | 4.0.0 |
| isoUuid | String | ISO镜像UUID | 4.0.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| state | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| vipUuid | String | VIP UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| listeners | List | 详情参考[listeners] | 4.0.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 4.0.0 |
| instancePort | Integer |  | 4.0.0 |
| loadBalancerPort | Integer |  | 4.0.0 |
| protocol | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 4.0.0 |
| aclRefs | List | 详情参考[aclRefs] | 4.0.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 4.0.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 4.0.0 |
| listenerUuid | String | 监听器唯一标识 | 4.0.0 |
| aclUuid | String | 访问策略组唯一标识 | 4.0.0 |
| type | String | 访问策略类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| certificateUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| l3NetworkCategory | String |  | 4.0.0 |
| l3NetworkType | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
UpdateSlbGroupAction action = new UpdateSlbGroupAction();
action.uuid = "fa13412281f333469e8009c531ef9755";
action.name = "slb";
action.description = "slb test";
action.slbOfferingUuid = "3996416dcab833258087ac86be993858";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSlbGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateSlbGroupAction action = UpdateSlbGroupAction()
action.uuid = "fa13412281f333469e8009c531ef9755"
action.name = "slb"
action.description = "slb test"
action.slbOfferingUuid = "3996416dcab833258087ac86be993858"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSlbGroupAction.Result res = action.call()
```

---

#### 查询性能独享型负载均衡器组(QuerySlbGroup)



##### API请求

 URLs

```
GET zstack/v1/load-balancers/slb/groups
```


```
GET zstack/v1/load-balancers/slb/groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/slb/groups
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/load-balancers/slb/groups/3cdd853e3e8d364b83f6e1e4965df7b0
```



可查询字段

运行CLI命令行工具，输入QuerySlbGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "slb",
      "backendType": "vyos",
      "deployType": "direct",
      "description": "slb test"
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

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| backendType | String |  | 4.0.0 |
| deployType | String |  | 4.0.0 |
| slbOfferingUuid | String |  | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| slbVms | List | 详情参考[slbVms] | 4.0.0 |
| lbs | List | 详情参考[lbs] | 4.0.0 |
| networks | List | 详情参考[networks] | 4.0.0 |

 #slbVms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| publicNetworkUuid | String |  | 4.0.0 |
| virtualRouterVips | List |  | 4.0.0 |
| applianceVmType | String |  | 4.0.0 |
| managementNetworkUuid | String |  | 4.0.0 |
| defaultRouteL3NetworkUuid | String |  | 4.0.0 |
| status | String |  | 4.0.0 |
| agentPort | Integer |  | 4.0.0 |
| haStatus | String |  | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.0.0 |
| lastHostUuid | String |  | 4.0.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String |  | 4.0.0 |
| defaultL3NetworkUuid | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| hypervisorType | String |  | 4.0.0 |
| memorySize | Long |  | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| cpuSpeed | Long |  | 4.0.0 |
| allocatorStrategy | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String |  | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.0.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| primaryStorageUuid | String | 主存储UUID | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.0.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.0.0 |
| installPath | String | 云盘在主存储上的路径 | 4.0.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.0.0 |
| format | String | 云盘格式 | 4.0.0 |
| size | Long | 云盘大小 | 4.0.0 |
| actualSize | Long | 云盘真实大小 | 4.0.0 |
| deviceId | Integer |  | 4.0.0 |
| state | String | 云盘是否开启 | 4.0.0 |
| status | String | 云盘状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| isShareable | Boolean | 是否共享云盘 | 4.0.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.0.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| deviceId | Integer | 光驱顺序号 | 4.0.0 |
| isoUuid | String | ISO镜像UUID | 4.0.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #lbs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| state | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| vipUuid | String | VIP UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| listeners | List | 详情参考[listeners] | 4.0.0 |

 #listeners

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| loadBalancerUuid | String | 负载均衡器UUID | 4.0.0 |
| instancePort | Integer |  | 4.0.0 |
| loadBalancerPort | Integer |  | 4.0.0 |
| protocol | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| vmNicRefs | List | 详情参考[vmNicRefs] | 4.0.0 |
| aclRefs | List | 详情参考[aclRefs] | 4.0.0 |
| certificateRefs | List | 详情参考[certificateRefs] | 4.0.0 |
| serverGroupRefs | List | 详情参考[serverGroupRefs] | 4.0.0 |

 #vmNicRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| status | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #aclRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long | 资源唯一标识 | 4.0.0 |
| listenerUuid | String | 监听器唯一标识 | 4.0.0 |
| aclUuid | String | 访问策略组唯一标识 | 4.0.0 |
| type | String | 访问策略类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #certificateRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| certificateUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #serverGroupRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 4.0.0 |
| listenerUuid | String |  | 4.0.0 |
| serverGroupUuid | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| slbGroupUuid | String |  | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| l3NetworkCategory | String |  | 4.0.0 |
| l3NetworkType | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
QuerySlbGroupAction action = new QuerySlbGroupAction();
action.conditions = asList("uuid=8751fa7f60f4394ea89b9197961113f2");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySlbGroupAction.Result res = action.call();
```

 Python SDK

```
QuerySlbGroupAction action = QuerySlbGroupAction()
action.conditions = ["uuid=067ab1149fd733359870c11f10398cfd"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySlbGroupAction.Result res = action.call()
```

---

#### 创建高性能实例性负载均衡器规格(CreateSlbOffering)



##### API请求

 URLs

```
POST zstack/v1/instance-offerings/slb
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "bdbae55ce73b3e2ab8a4ae3a6df0b287",
    "managementNetworkUuid": "7661f1f6d5a63d6eb3b9c3890ab3f9bb",
    "imageUuid": "2bae0841f4c63f128efcf66d095d73b0",
    "name": "SLB-Offering",
    "cpuNum": 2.0,
    "memorySize": 1024.0,
    "sortKey": 0.0,
    "type": "SLB"
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
-X POST -d '{"params":{"zoneUuid":"bdbae55ce73b3e2ab8a4ae3a6df0b287","managementNetworkUuid":"7661f1f6d5a63d6eb3b9c3890ab3f9bb","imageUuid":"2bae0841f4c63f128efcf66d095d73b0","name":"SLB-Offering","cpuNum":2.0,"memorySize":1024.0,"sortKey":0.0,"type":"SLB"}}' http://localhost:8080/zstack/v1/instance-offerings/slb
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 4.0.0 |
| managementNetworkUuid | String | body(包含在**params**结构中) | 管理网络uuid |  | 4.0.0 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID |  | 4.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| cpuNum | int | body(包含在**params**结构中) |  |  | 4.0.0 |
| memorySize | long | body(包含在**params**结构中) |  |  | 4.0.0 |
| allocatorStrategy (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| sortKey (可选) | int | body(包含在**params**结构中) |  |  | 4.0.0 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3b0af4671cc93f619ef326a3c99d825c",
    "name": "instanceOffering1",
    "cpuNum": 2.0,
    "cpuSpeed": 1.0,
    "type": "UserVm",
    "allocatorStrategy": "Mevoco",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 4.0.0 |

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
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| cpuNum | Integer | CPU数量 | 4.0.0 |
| cpuSpeed | Integer | CPU速度 | 4.0.0 |
| memorySize | Long | 内存大小 | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| allocatorStrategy | String | 分配策略 | 4.0.0 |
| sortKey | Integer |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 状态（启用，禁用） | 4.0.0 |



##### SDK示例

 Java SDK

```
CreateSlbOfferingAction action = new CreateSlbOfferingAction();
action.zoneUuid = "bdbae55ce73b3e2ab8a4ae3a6df0b287";
action.managementNetworkUuid = "7661f1f6d5a63d6eb3b9c3890ab3f9bb";
action.imageUuid = "2bae0841f4c63f128efcf66d095d73b0";
action.name = "SLB-Offering";
action.cpuNum = 2.0;
action.memorySize = 1024.0;
action.sortKey = 0.0;
action.type = "SLB";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSlbOfferingAction.Result res = action.call();
```

 Python SDK

```
CreateSlbOfferingAction action = CreateSlbOfferingAction()
action.zoneUuid = "bdbae55ce73b3e2ab8a4ae3a6df0b287"
action.managementNetworkUuid = "7661f1f6d5a63d6eb3b9c3890ab3f9bb"
action.imageUuid = "2bae0841f4c63f128efcf66d095d73b0"
action.name = "SLB-Offering"
action.cpuNum = 2.0
action.memorySize = 1024.0
action.sortKey = 0.0
action.type = "SLB"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSlbOfferingAction.Result res = action.call()
```

---

#### 查询性能独享型负载均衡器规格(QuerySlbOffering)



##### API请求

 URLs

```
GET zstack/v1/instance-offerings/slb
```


```
GET zstack/v1/instance-offerings/slb/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/instance-offerings/slb
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/instance-offerings/slb/cab5a4776ee936938d2cdd08860ee50a
```



可查询字段

运行CLI命令行工具，输入QuerySlbOffering并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "managementNetworkUuid": "fdd51745e9ee3a4cb5bca03cf021c22f",
      "zoneUuid": "305d0c8b5c5a3edd81a641911126c332",
      "imageUuid": "b2f980076c3e3e6f8e9f3d4fd22bb7fb",
      "name": "SLB-Offering",
      "cpuNum": 2.0,
      "cpuSpeed": 1.0,
      "memorySize": 1024.0,
      "type": "SLB"
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

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| managementNetworkUuid | String |  | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| cpuSpeed | Integer |  | 4.0.0 |
| memorySize | Long |  | 4.0.0 |
| type | String |  | 4.0.0 |
| allocatorStrategy | String |  | 4.0.0 |
| sortKey | Integer |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String |  | 4.0.0 |



##### SDK示例

 Java SDK

```
QuerySlbOfferingAction action = new QuerySlbOfferingAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySlbOfferingAction.Result res = action.call();
```

 Python SDK

```
QuerySlbOfferingAction action = QuerySlbOfferingAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySlbOfferingAction.Result res = action.call()
```

---

#### 创建高性能负载均衡器实例(CreateSlbInstance)



##### API请求

 URLs

```
POST zstack/v1/load-balancers/slb/instances
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "SlbInstance",
    "slbGroupUuid": "9f4fcda488f9346ca9c8ea9243d6d8e3",
    "description": "this is a slb for test"
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
-X POST -d '{"params":{"name":"SlbInstance","slbGroupUuid":"9f4fcda488f9346ca9c8ea9243d6d8e3","description":"this is a slb for test"}}' \
http://localhost:8080/zstack/v1/load-balancers/slb/instances
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| slbGroupUuid | String | body(包含在**params**结构中) | 性能独享型负载均衡器组UUID |  | 4.0.0 |
| description (可选) | List | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 4.0.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 4.0.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) |  |  | 5.5.0 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) |  |  | 5.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "configVersion": 0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | SlbVmInstanceInventory | 详情参考[inventory] | 4.0.0 |

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
| slbGroupUuid | String |  | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| publicNetworkUuid | String |  | 5.1.0 |
| virtualRouterVips | List |  | 5.1.0 |
| applianceVmType | String |  | 5.1.0 |
| managementNetworkUuid | String |  | 5.1.0 |
| defaultRouteL3NetworkUuid | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| agentPort | Integer |  | 5.1.0 |
| haStatus | String |  | 5.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| reservedMemorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 5.1.0 |
| configTasks | List | 详情参考[configTasks] | 5.1.0 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.1.0 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| configVersion | long |  | 5.1.0 |
| taskName | String |  | 5.1.0 |
| taskData | String |  | 5.1.0 |
| retryNumber | long |  | 5.1.0 |
| lastFailedReason | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| status | SlbVmInstanceConfigTaskStatus | 详情参考[status] | 5.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Pending | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Starting | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Success | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |
| Failed | SlbVmInstanceConfigTaskStatus |  | 5.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.13 |
| ip | String |  | 4.7.13 |
| mac | String |  | 4.7.13 |
| hypervisorType | String |  | 4.7.13 |
| netmask | String |  | 4.7.13 |
| gateway | String |  | 4.7.13 |
| metaData | String |  | 4.7.13 |
| ipVersion | Integer |  | 4.7.13 |
| driverType | String |  | 4.7.13 |
| internalName | String |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| type | String |  | 4.7.13 |
| state | String | 网卡状态 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| usedIps | List | 详情参考[usedIps] | 4.7.13 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| ipRangeUuid | String | IP段UUID | 5.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.0.0 |
| ipVersion | Integer |  | 5.0.0 |
| ip | String |  | 5.0.0 |
| netmask | String |  | 5.0.0 |
| gateway | String |  | 5.0.0 |
| usedFor | String | 分配原因 | 5.0.0 |
| ipInLong | long |  | 5.0.0 |
| ipInBinary | byte[] |  | 5.2.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| primaryStorageUuid | String | 主存储UUID | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.13 |
| rootImageUuid | String |  | 4.7.13 |
| installPath | String |  | 4.7.13 |
| type | String |  | 4.7.13 |
| format | String |  | 4.7.13 |
| size | Long |  | 4.7.13 |
| actualSize | Long |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| state | String |  | 4.7.13 |
| status | String |  | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| isShareable | Boolean |  | 4.7.13 |
| volumeQos | String |  | 4.7.13 |
| lastDetachDate | Timestamp |  | 4.7.13 |
| lastVmInstanceUuid | String |  | 4.7.13 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| deviceId | Integer | 光驱顺序号 | 4.0.0 |
| isoUuid | String | ISO镜像UUID | 4.0.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
CreateSlbInstanceAction action = new CreateSlbInstanceAction();
action.name = "SlbInstance";
action.slbGroupUuid = "9f4fcda488f9346ca9c8ea9243d6d8e3";
action.description = "this is a slb for test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSlbInstanceAction.Result res = action.call();
```

 Python SDK

```
CreateSlbInstanceAction action = CreateSlbInstanceAction()
action.name = "SlbInstance"
action.slbGroupUuid = "9f4fcda488f9346ca9c8ea9243d6d8e3"
action.description = "this is a slb for test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSlbInstanceAction.Result res = action.call()
```

---

#### 向访问控制策略组添加转发规则(AddAccessControlListRedirectRule)



##### API请求

 URLs

```
POST zstack/v1/access-control-lists/{aclUuid}/redirectRules
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "redirect-rule",
    "domain": "zstack.io",
    "url": "/cloud",
    "redirectPort": 8080
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
-X POST -d '{"params":{"name":"redirect-rule","domain":"zstack.io","url":"/cloud","redirectPort":8080}}' \
http://localhost:8080/zstack/v1/access-control-lists/f1ca42b8901833fbac7cbd06e3b4d7cb/redirectRules
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 4.1.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.1.3 |
| domain (可选) | String | body(包含在**params**结构中) | 域名说明: 对于参数domain和url，两者至少要设置一个 |  | 4.1.3 |
| url | String | body(包含在**params**结构中) | url说明: 如指定了domain且不指定url，该参数可传/ |  | 4.1.3 |
| aclUuid | String | url | 访问控制策略组的唯一标识 |  | 4.1.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.1.3 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.1.3 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.3 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.3 |
| redirectPort (可选) | Integer | body(包含在**params**结构中) | 转发端口 |  | 5.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "aclUuid": "3e05577ffa823e759d67e112aa7e5f80",
    "ipEntries": "192.168.48.0/24",
    "redirectPort": 8080
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9 |
| inventory | AccessControlListEntryInventory | 详情参考[inventory] | 3.9 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.20 |
| description | String | 错误的概要描述 | 5.3.20 |
| details | String | 错误的详细信息 | 5.3.20 |
| elaboration | String | 保留字段，默认为null | 5.3.20 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.20 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.20 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| aclUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| name | String | 资源名称 | 0.6 |
| domain | String |  | 0.6 |
| url | String |  | 0.6 |
| ipEntries | String |  | 0.6 |
| redirectPort | Integer |  | 5.5.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AddAccessControlListRedirectRuleAction action = new AddAccessControlListRedirectRuleAction();
action.name = "redirect-rule";
action.domain = "zstack.io";
action.url = "/cloud";
action.aclUuid = "f1ca42b8901833fbac7cbd06e3b4d7cb";
action.redirectPort = 8080;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddAccessControlListRedirectRuleAction.Result res = action.call();
```

 Python SDK

```
AddAccessControlListRedirectRuleAction action = AddAccessControlListRedirectRuleAction()
action.name = "redirect-rule"
action.domain = "zstack.io"
action.url = "/cloud"
action.aclUuid = "f1ca42b8901833fbac7cbd06e3b4d7cb"
action.redirectPort = 8080
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddAccessControlListRedirectRuleAction.Result res = action.call()
```

---

#### IPsec相关接口

---

#### 创建IPsec连接(CreateIPsecConnection)



##### API请求

 URLs

```
POST zstack/v1/ipsec
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-IPSec",
    "vipUuid": "cefa2f4e56ef33e496ccbb5879850f76",
    "peerAddress": "100.64.10.10",
    "authMode": "psk",
    "authKey": "auth",
    "idType": "ip",
    "localId": "1.1.1.1",
    "remoteId": "2.2.2.2",
    "l3NetworkUuid": "a4097ba23a7e38339029e1839bb415e1",
    "peerCidrs": [
      "192.168.100.0/24"
    ],
    "ikeVersion": "ikev2",
    "ikeAuthAlgorithm": "sha256",
    "ikeEncryptionAlgorithm": "aes-256",
    "ikeDhGroup": 2.0,
    "ikeLifeTime": 86400.0,
    "policyAuthAlgorithm": "sha256",
    "policyEncryptionAlgorithm": "aes-256",
    "pfs": "dh-group14",
    "policyMode": "tunnel",
    "transformProtocol": "esp",
    "lifeTime": 3600.0
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
-X POST -d '{"params":{"name":"Test-IPSec","vipUuid":"cefa2f4e56ef33e496ccbb5879850f76","peerAddress":"100.64.10.10","authMode":"psk","authKey":"auth","idType":"ip","localId":"1.1.1.1","remoteId":"2.2.2.2","l3NetworkUuid":"a4097ba23a7e38339029e1839bb415e1","peerCidrs":["192.168.100.0/24"],"ikeVersion":"ikev2","ikeAuthAlgorithm":"sha256","ikeEncryptionAlgorithm":"aes-256","ikeDhGroup":2.0,"ikeLifeTime":86400.0,"policyAuthAlgorithm":"sha256","policyEncryptionAlgorithm":"aes-256","pfs":"dh-group14","policyMode":"tunnel","transformProtocol":"esp","lifeTime":3600.0}}' \
http://localhost:8080/zstack/v1/ipsec
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
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| l3NetworkUuid (可选) | String | body(包含在**params**结构中) | 三层网络UUID |  | 2.3 |
| peerAddress | String | body(包含在**params**结构中) | 远端网络地址 |  | 4.5.0 |
| authMode (可选) | String | body(包含在**params**结构中) | 认证模式 | psk certs | 0.6 |
| authKey | String | body(包含在**params**结构中) | 认证密钥 |  | 0.6 |
| idType (可选) | String | body(包含在**params**结构中) | ID配置方法 | ip name fqdn | 4.5.0 |
| vipUuid | String | body(包含在**params**结构中) | VIP UUID |  | 0.6 |
| localId (可选) | String | body(包含在**params**结构中) | 本端ID |  | 4.5.0 |
| remoteId (可选) | String | body(包含在**params**结构中) | 对端ID |  | 4.5.0 |
| peerCidrs (可选) | List | body(包含在**params**结构中) | 目的网络CIDR |  | 4.5.0 |
| ikeVersion (可选) | String | body(包含在**params**结构中) | IKE版本 | ike ikev1 ikev2 | 4.5.0 |
| ikeAuthAlgorithm (可选) | String | body(包含在**params**结构中) | IKE验证算法 | md5 sha1 sha256 sha384 sha512 | 0.6 |
| ikeEncryptionAlgorithm (可选) | String | body(包含在**params**结构中) | IKE加密算法 | 3des aes-128 aes-192 aes-256 | 0.6 |
| ikeDhGroup (可选) | int | body(包含在**params**结构中) | IKE DH组 |  | 4.5.0 |
| ikeLifeTime (可选) | int | body(包含在**params**结构中) | IKE存活时间 |  | 4.5.0 |
| policyAuthAlgorithm (可选) | String | body(包含在**params**结构中) | ESP认证算法 | md5 sha1 sha256 sha384 sha512 | 0.6 |
| policyEncryptionAlgorithm (可选) | String | body(包含在**params**结构中) | ESP加密算法 | 3des aes-128 aes-192 aes-256 | 0.6 |
| pfs (可选) | String | body(包含在**params**结构中) | PFS DH组 | none dh-group0 dh-group2 dh-group5 dh-group14 dh-group15 dh-group16 dh-group17 dh-group18 dh-group19 dh-group20 dh-group21 dh-group22 dh-group23 dh-group24 dh-group25 dh-group26 | 4.5.0 |
| policyMode (可选) | String | body(包含在**params**结构中) | 封装模式 | tunnel transport | 4.5.0 |
| transformProtocol (可选) | String | body(包含在**params**结构中) | 安全协议 | esp ah ah-esp | 4.5.0 |
| lifeTime (可选) | int | body(包含在**params**结构中) | IPSec存活时间 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-IPSec",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "6a33d0d912263fd7a47d036eead9a27f",
    "status": "Connecting",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "199b04405d1e3fef83fd67a7a1f77bb3",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "6deaa1c0ffd43f8eb3ebe2e8e7e66811",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {}
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 0.6 |

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
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 0.6 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| peerCidrs | List | 详情参考[peerCidrs] | 0.6 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| cidr | String |  | 0.6 |
| connectionUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateIPsecConnectionAction action = new CreateIPsecConnectionAction();
action.name = "Test-IPSec";
action.vipUuid = "cefa2f4e56ef33e496ccbb5879850f76";
action.peerAddress = "100.64.10.10";
action.authMode = "psk";
action.authKey = "auth";
action.idType = "ip";
action.localId = "1.1.1.1";
action.remoteId = "2.2.2.2";
action.l3NetworkUuid = "a4097ba23a7e38339029e1839bb415e1";
action.peerCidrs = asList("192.168.100.0/24");
action.ikeVersion = "ikev2";
action.ikeAuthAlgorithm = "sha256";
action.ikeEncryptionAlgorithm = "aes-256";
action.ikeDhGroup = 2.0;
action.ikeLifeTime = 86400.0;
action.policyAuthAlgorithm = "sha256";
action.policyEncryptionAlgorithm = "aes-256";
action.pfs = "dh-group14";
action.policyMode = "tunnel";
action.transformProtocol = "esp";
action.lifeTime = 3600.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
CreateIPsecConnectionAction action = CreateIPsecConnectionAction()
action.name = "Test-IPSec"
action.vipUuid = "cefa2f4e56ef33e496ccbb5879850f76"
action.peerAddress = "100.64.10.10"
action.authMode = "psk"
action.authKey = "auth"
action.idType = "ip"
action.localId = "1.1.1.1"
action.remoteId = "2.2.2.2"
action.l3NetworkUuid = "a4097ba23a7e38339029e1839bb415e1"
action.peerCidrs = [192.168.100.0/24]
action.ikeVersion = "ikev2"
action.ikeAuthAlgorithm = "sha256"
action.ikeEncryptionAlgorithm = "aes-256"
action.ikeDhGroup = 2.0
action.ikeLifeTime = 86400.0
action.policyAuthAlgorithm = "sha256"
action.policyEncryptionAlgorithm = "aes-256"
action.pfs = "dh-group14"
action.policyMode = "tunnel"
action.transformProtocol = "esp"
action.lifeTime = 3600.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateIPsecConnectionAction.Result res = action.call()
```

---

#### 删除IPsec连接(DeleteIPsecConnection)



##### API请求

 URLs

```
DELETE zstack/v1/ipsec/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/ipsec/7176e70d92953235998cce8b486e2467
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 4.5.0 |
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
DeleteIPsecConnectionAction action = new DeleteIPsecConnectionAction();
action.uuid = "2935596566fa421f833a801d501dbb53";
action.deleteMode = "Permissive";
action.sessionId = "7392673bd2244ad2a63280e81f9a7014";
DeleteIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
DeleteIPsecConnectionAction action = DeleteIPsecConnectionAction()
action.uuid = "808078c31bdd499591bc009b8ae3446f"
action.deleteMode = "Permissive"
action.sessionId = "fcafdabd9a5e47c5ae7ff92c121173f9"
DeleteIPsecConnectionAction.Result res = action.call()
```

---

#### 查询IPsec连接(QueryIPSecConnection)



##### API请求

 URLs

```
GET zstack/v1/ipsec
GET zstack/v1/ipsec/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ipsec
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ipsec/ea540aa23c0b36a887cd93a912fd0c32
```



可查询字段

运行CLI命令行工具，输入**QueryIPSecConnection**并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "Test-IPSec",
      "peerAddress": "100.64.10.10",
      "authKey": "auth",
      "vipUuid": "ca0f405c79ea3b53aa588f58ed10e410",
      "ikeLifeTime": 0.0,
      "lifeTime": 0.0,
      "peerCidrs": [
        {
          "uuid": "72744840ae243518859730e99ea42157",
          "cidr": "192.168.100.0/24",
          "connectionUuid": "9d832d652fc732d6a5cebe1d8173c6c9",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "l3NetworkRefs": [
        {}
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
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
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 0.6 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| peerCidrs | List | 详情参考[peerCidrs] | 0.6 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| cidr | String |  | 0.6 |
| connectionUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QueryIPSecConnectionAction action = new QueryIPSecConnectionAction();
action.conditions = asList();
action.sessionId = "2da0145074b749de95a5f7e6197dedf5";
QueryIPSecConnectionAction.Result res = action.call();
```

 Python SDK

```
QueryIPSecConnectionAction action = QueryIPSecConnectionAction()
action.conditions = []
action.sessionId = "39df08f032b9490a853c60158dee9140"
QueryIPSecConnectionAction.Result res = action.call()
```

---

#### 更新IPsec连接(UpdateIPsecConnection)



##### API请求

 URLs

```
PUT zstack/v1/ipsec/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateIPsecConnection": {
    "name": "test Ipsec",
    "description": "info",
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
-X PUT -d '{"updateIPsecConnection":{"name":"test Ipsec","description":"info"}}' \
http://localhost:8080/zstack/v1/ipsec/1bcf0b898cf33f05b29edeb54a87ed82
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateIPsecConnection**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateIPsecConnection**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回



返回示例

```
{
  "inventory": {
    "name": "Test-IPSec",
    "description": "desc info ",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "7c94b57b6daa38c9b6862f11101e9612",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "4796b27ab42d3baba893ea3d34c723e4",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "2ce0380d4a5e3aed95b1511682926aeb",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {}
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 0.6 |

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
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 2.3 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| peerCidrs | List | 详情参考[peerCidrs] | 0.6 |
| l3NetworkRefs | |List| | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| cidr | String |  | 0.6 |
| connectionUuid | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateIPsecConnectionAction action = new UpdateIPsecConnectionAction();
action.uuid = "cedcb7a02f1548cbb8a68665cab0b191";
action.name = "test Ipsec";
action.description = "info";
action.deleteMode = "Permissive";
action.sessionId = "4e74102f098948cf97781ee6604b1571";
UpdateIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
UpdateIPsecConnectionAction action = UpdateIPsecConnectionAction()
action.uuid = "dba5bbf127124fe2a3def62bcb96743d"
action.name = "test Ipsec"
action.description = "info"
action.deleteMode = "Permissive"
action.sessionId = "cc93dbb3278c4a699f2f1635eb756caf"
UpdateIPsecConnectionAction.Result res = action.call()
```

---

#### 更改IPsec连接状态(ChangeIPSecConnectionState)



##### API请求

 URLs

```
PUT zstack/v1/ipsec/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIPSecConnectionState": {
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
-X PUT -d '{"changeIPSecConnectionState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/ipsec/76424bb25d3a37c9961fff1116bc06da/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**changeIPSecConnectionState**结构中) |  | enable disable | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "13b5a2cd8c5c30a9a47ba95802cf4e1a",
    "name": "IPSec-1",
    "state": "Enabled",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 4.5.0 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| peerCidrs | List | 详情参考[peerCidrs] | 2.3 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| cidr | String |  | 2.3 |
| connectionUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID,唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
ChangeIPSecConnectionStateAction action = new ChangeIPSecConnectionStateAction();
action.uuid = "76424bb25d3a37c9961fff1116bc06da";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIPSecConnectionStateAction.Result res = action.call();
```

 Python SDK

```
ChangeIPSecConnectionStateAction action = ChangeIPSecConnectionStateAction()
action.uuid = "76424bb25d3a37c9961fff1116bc06da"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIPSecConnectionStateAction.Result res = action.call()
```

---

#### 重连IPsec(ReconnectIPsecConnection)



##### API请求

 URLs

```
PUT zstack/v1/ipsec/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectIPsecConnection": {},
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectIPsecConnection":{}}' \
http://localhost:8080/zstack/v1/ipsec/5186dbf43843358ea9e7420c4af27338/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回



返回示例

```
{
  "inventory": {
    "name": "Test-IPSec",
    "description": "desc info ",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "37c2aa27aff4338abb41fb5bdaa90f77",
    "status": "Connecting",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "0cf06fba80743d09bb31845d0b187197",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "654dedd65de8345cae7042a375451146",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {}
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 4.5.0 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| peerCidrs | List | 详情参考[peerCidrs] | 4.5.0 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 4.5.0 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| cidr | String |  | 4.5.0 |
| connectionUuid | String |  | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| connectionUuid | String |  | 4.5.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |

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
ReconnectIPsecConnectionAction action = new ReconnectIPsecConnectionAction();
action.uuid = "5186dbf43843358ea9e7420c4af27338";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReconnectIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
ReconnectIPsecConnectionAction action = ReconnectIPsecConnectionAction()
action.uuid = "5186dbf43843358ea9e7420c4af27338"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReconnectIPsecConnectionAction.Result res = action.call()
```

---

#### 修改IPsec连接配置(ChangeIPsecConnection)



##### API请求

 URLs

```
PUT zstack/v1/ipsec/config/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeIPsecConnection": {
    "peerAddress": "2.2.2.2",
    "authMode": "psk",
    "authKey": "12345678",
    "idType": "ip",
    "localId": "1.1.1.1",
    "remoteId": "2.2.2.2",
    "ikeVersion": "ikev2",
    "ikeAuthAlgorithm": "sha256",
    "ikeEncryptionAlgorithm": "aes-256",
    "ikeDhGroup": 2.0,
    "ikeLifeTime": 86400.0,
    "policyAuthAlgorithm": "sha256",
    "policyEncryptionAlgorithm": "aes-256",
    "pfs": "dh-group14",
    "policyMode": "tunnel",
    "transformProtocol": "esp",
    "lifeTime": 3600.0
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
-X PUT -d '{"changeIPsecConnection":{"peerAddress":"2.2.2.2","authMode":"psk","authKey":"12345678","idType":"ip","localId":"1.1.1.1","remoteId":"2.2.2.2","ikeVersion":"ikev2","ikeAuthAlgorithm":"sha256","ikeEncryptionAlgorithm":"aes-256","ikeDhGroup":2.0,"ikeLifeTime":86400.0,"policyAuthAlgorithm":"sha256","policyEncryptionAlgorithm":"aes-256","pfs":"dh-group14","policyMode":"tunnel","transformProtocol":"esp","lifeTime":3600.0}}' \
http://localhost:8080/zstack/v1/ipsec/config/fe981c6d20243102b6939d5eada78ef9
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
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| peerAddress | String | body(包含在**changeIPsecConnection**结构中) | 远端网络地址 |  | 4.5.0 |
| authMode (可选) | String | body(包含在**changeIPsecConnection**结构中) | 认证模式 | psk certs | 4.5.0 |
| authKey | String | body(包含在**changeIPsecConnection**结构中) | 认证密钥 |  | 4.5.0 |
| idType (可选) | String | body(包含在**changeIPsecConnection**结构中) | ID配置方法 | ip name fqdn | 4.5.0 |
| localId (可选) | String | body(包含在**changeIPsecConnection**结构中) | 本端ID |  | 4.5.0 |
| remoteId (可选) | String | body(包含在**changeIPsecConnection**结构中) | 对端ID |  | 4.5.0 |
| ikeVersion (可选) | String | body(包含在**changeIPsecConnection**结构中) | IKE版本 | ike ikev1 ikev2 | 4.5.0 |
| ikeAuthAlgorithm (可选) | String | body(包含在**changeIPsecConnection**结构中) | IKE验证算法 | md5 sha1 sha256 sha384 sha512 | 4.5.0 |
| ikeEncryptionAlgorithm (可选) | String | body(包含在**changeIPsecConnection**结构中) | IKE加密算法 | 3des aes-128 aes-192 aes-256 | 4.5.0 |
| ikeDhGroup (可选) | int | body(包含在**changeIPsecConnection**结构中) | IKE DH组 |  | 4.5.0 |
| ikeLifeTime (可选) | int | body(包含在**changeIPsecConnection**结构中) | IKE存活时间 |  | 4.5.0 |
| policyAuthAlgorithm (可选) | String | body(包含在**changeIPsecConnection**结构中) | ESP认证算法 | md5 sha1 sha256 sha384 sha512 | 4.5.0 |
| policyEncryptionAlgorithm (可选) | String | body(包含在**changeIPsecConnection**结构中) | ESP加密算法 | 3des aes-128 aes-192 aes-256 | 4.5.0 |
| pfs (可选) | String | body(包含在**changeIPsecConnection**结构中) | PFS DH组 | none dh-group2 dh-group5 dh-group14 dh-group15 dh-group16 dh-group17 dh-group18 dh-group19 dh-group20 dh-group21 dh-group22 dh-group23 dh-group24 dh-group25 dh-group26 | 4.5.0 |
| policyMode (可选) | String | body(包含在**changeIPsecConnection**结构中) | 封装模式 | tunnel transport | 4.5.0 |
| transformProtocol (可选) | String | body(包含在**changeIPsecConnection**结构中) | 安全协议 | esp ah ah-esp | 4.5.0 |
| lifeTime (可选) | int | body(包含在**changeIPsecConnection**结构中) | IPSec存活时间 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回



返回示例

```
{
  "inventory": {
    "name": "Test-IPSec",
    "description": "desc info ",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "9f580de9b80c32feb149be989f5c9158",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "c97d7be1bae43cac8fad2099ab9d4ef3",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "5700953056a03c589a264faa51db6a8f",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {}
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 4.5.0 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| peerCidrs | List | 详情参考[peerCidrs] | 4.5.0 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 4.5.0 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| cidr | String |  | 4.5.0 |
| connectionUuid | String |  | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| connectionUuid | String |  | 4.5.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |

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
ChangeIPsecConnectionAction action = new ChangeIPsecConnectionAction();
action.uuid = "fe981c6d20243102b6939d5eada78ef9";
action.peerAddress = "2.2.2.2";
action.authMode = "psk";
action.authKey = "12345678";
action.idType = "ip";
action.localId = "1.1.1.1";
action.remoteId = "2.2.2.2";
action.ikeVersion = "ikev2";
action.ikeAuthAlgorithm = "sha256";
action.ikeEncryptionAlgorithm = "aes-256";
action.ikeDhGroup = 2.0;
action.ikeLifeTime = 86400.0;
action.policyAuthAlgorithm = "sha256";
action.policyEncryptionAlgorithm = "aes-256";
action.pfs = "dh-group14";
action.policyMode = "tunnel";
action.transformProtocol = "esp";
action.lifeTime = 3600.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
ChangeIPsecConnectionAction action = ChangeIPsecConnectionAction()
action.uuid = "fe981c6d20243102b6939d5eada78ef9"
action.peerAddress = "2.2.2.2"
action.authMode = "psk"
action.authKey = "12345678"
action.idType = "ip"
action.localId = "1.1.1.1"
action.remoteId = "2.2.2.2"
action.ikeVersion = "ikev2"
action.ikeAuthAlgorithm = "sha256"
action.ikeEncryptionAlgorithm = "aes-256"
action.ikeDhGroup = 2.0
action.ikeLifeTime = 86400.0
action.policyAuthAlgorithm = "sha256"
action.policyEncryptionAlgorithm = "aes-256"
action.pfs = "dh-group14"
action.policyMode = "tunnel"
action.transformProtocol = "esp"
action.lifeTime = 3600.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeIPsecConnectionAction.Result res = action.call()
```

---

#### 添加三层网络到IPsec连接(AttachL3NetworksToIPsecConnection)



##### API请求

 URLs

```
POST zstack/v1/ipsec/{uuid}/l3networks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "l3NetworkUuids": [
      "4b0779efacdc39a5b2dd4799e2452720"
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
-X POST -d '{"params":{"l3NetworkUuids":["4b0779efacdc39a5b2dd4799e2452720"]}}' \
http://localhost:8080/zstack/v1/ipsec/8f6fa5c86fd13968b8d8666f4b117aca/l3networks
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| l3NetworkUuids | List | body(包含在**params**结构中) |  |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3293505dd7de3a2aacca821c4a9d8b5e",
    "name": "Test-IPSec",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "58d827fb56cb3fc394c89429c28c29a4",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "185878e63f1c39c48de641f55f8a870b",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "3293505dd7de3a2aacca821c4a9d8b5e",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {
        "uuid": "a1e9c14d5d9736c0885b6cc67238873e",
        "connectionUuid": "3293505dd7de3a2aacca821c4a9d8b5e",
        "l3NetworkUuid": "43253fb59d8c36b49f684278747bf209",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 4.5.0 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | PFS DH组 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| peerCidrs | List | 详情参考[peerCidrs] | 2.3 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| cidr | String |  | 2.3 |
| connectionUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
AttachL3NetworksToIPsecConnectionAction action = new AttachL3NetworksToIPsecConnectionAction();
action.uuid = "8f6fa5c86fd13968b8d8666f4b117aca";
action.l3NetworkUuids = asList("4b0779efacdc39a5b2dd4799e2452720");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachL3NetworksToIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
AttachL3NetworksToIPsecConnectionAction action = AttachL3NetworksToIPsecConnectionAction()
action.uuid = "8f6fa5c86fd13968b8d8666f4b117aca"
action.l3NetworkUuids = [4b0779efacdc39a5b2dd4799e2452720]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachL3NetworksToIPsecConnectionAction.Result res = action.call()
```

---

#### 从IPsec连接删除三层网络(DetachL3NetworksFromIPsecConnection)



##### API请求

 URLs

```
DELETE zstack/v1/ipsec/{uuid}/l3networks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/ipsec/ad4996bae0fb374bbbf696422f64e4aa/l3networks
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| l3NetworkUuids | List | body |  |  | 4.5.0 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8897085a1f673f71abe4b5972959a341",
    "name": "Test-IPSec",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "bda6c7ab0bfa37ae8fd0404c62bb7782",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "6756721235283be68ff449db51ad480b",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "8897085a1f673f71abe4b5972959a341",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {
        "uuid": "7c982a34282a3d5ea7436a80a0d38d0c",
        "connectionUuid": "8897085a1f673f71abe4b5972959a341",
        "l3NetworkUuid": "a110262802763e35a695935852b7b470",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 2.3 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| peerCidrs | List | 详情参考[peerCidrs] | 2.3 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| cidr | String |  | 2.3 |
| connectionUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
DetachL3NetworksFromIPsecConnectionAction action = new
DetachL3NetworksFromIPsecConnectionAction();
action.uuid = "ad4996bae0fb374bbbf696422f64e4aa";
action.l3NetworkUuids = asList("a835701f0df63d14ad1281eb9cc1a768");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachL3NetworksFromIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
DetachL3NetworksFromIPsecConnectionAction action = DetachL3NetworksFromIPsecConnectionAction()
action.uuid = "ad4996bae0fb374bbbf696422f64e4aa"
action.l3NetworkUuids = [a835701f0df63d14ad1281eb9cc1a768]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachL3NetworksFromIPsecConnectionAction.Result res = action.call()
```

---

#### 添加远端CIDR到IPsec连接(AddRemoteCidrsToIPsecConnection)



##### API请求

 URLs

```
POST zstack/v1/ipsec/{uuid}/remote-cidrs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "peerCidrs": [
      "192.168.100.0/24"
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
-X POST -d '{"params":{"peerCidrs":["192.168.100.0/24"]}}' \
http://localhost:8080/zstack/v1/ipsec/053658b061363df4be557d13ee0baaef/remote-cidrs
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| peerCidrs | List | body(包含在**params**结构中) |  |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "55c06a7088a5341c8b4ebed294282bfe",
    "name": "Test-IPSec",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "a66955e81e893c0f81effba08f1f2f94",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "15b9949bc0553aeeaf53e96a1b437e7c",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "55c06a7088a5341c8b4ebed294282bfe",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {
        "uuid": "1223ba4c4d0533feb975ff45027ab47f",
        "connectionUuid": "55c06a7088a5341c8b4ebed294282bfe",
        "l3NetworkUuid": "163595b272913065b082d890a68d96a7",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 2.3 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| peerCidrs | List | 详情参考[peerCidrs] | 2.3 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| cidr | String |  | 2.3 |
| connectionUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
AddRemoteCidrsToIPsecConnectionAction action = new AddRemoteCidrsToIPsecConnectionAction();
action.uuid = "053658b061363df4be557d13ee0baaef";
action.peerCidrs = asList("192.168.100.0/24");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddRemoteCidrsToIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
AddRemoteCidrsToIPsecConnectionAction action = AddRemoteCidrsToIPsecConnectionAction()
action.uuid = "053658b061363df4be557d13ee0baaef"
action.peerCidrs = [192.168.100.0/24]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddRemoteCidrsToIPsecConnectionAction.Result res = action.call()
```

---

#### 删除远端CIDR(RemoveRemoteCidrsFromIPsecConnection)



从IPsec连接删除远端CIDR。

##### API请求

 URLs

```
DELETE zstack/v1/ipsec/{uuid}/remote-cidrs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/ipsec/2428fc093ea93b6fb4eda5cc921da355/remote-cidrs
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| peerCidrs | List | body |  |  | 4.5.0 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a069f4ee49c835869e046204ff5eba8f",
    "name": "Test-IPSec",
    "peerAddress": "100.64.10.10",
    "authKey": "auth",
    "vipUuid": "6af41f780abb3c69b122c29cc3948bab",
    "ikeLifeTime": 0.0,
    "lifeTime": 0.0,
    "peerCidrs": [
      {
        "uuid": "d0cb54ce25053f629623baef345f4bd0",
        "cidr": "192.168.100.0/24",
        "connectionUuid": "a069f4ee49c835869e046204ff5eba8f",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "l3NetworkRefs": [
      {
        "uuid": "4e539c9cd56b37d4bb27c6244169fc55",
        "connectionUuid": "a069f4ee49c835869e046204ff5eba8f",
        "l3NetworkUuid": "7c63cc15a47b3c90a0350bd8c6e6906e",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | IPsecConnectionInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| peerAddress | String | 远端网络地址 | 4.5.0 |
| authMode | String | 认证模式 | 4.5.0 |
| authKey | String | 认证密钥 | 4.5.0 |
| vipUuid | String | VIP UUID | 2.3 |
| ikeAuthAlgorithm | String | IKE验证算法 | 4.5.0 |
| ikeEncryptionAlgorithm | String | IKE加密算法 | 4.5.0 |
| ikeDhGroup | Integer | IKE DH组 | 4.5.0 |
| policyAuthAlgorithm | String | ESP认证算法 | 4.5.0 |
| policyEncryptionAlgorithm | String | ESP加密算法 | 4.5.0 |
| pfs | String | PFS DH组 | 4.5.0 |
| policyMode | String | 封装模式 | 4.5.0 |
| transformProtocol | String | 安全协议 | 4.5.0 |
| ikeVersion | String | IKE版本 | 4.5.0 |
| idType | String | ID配置方法 | 4.5.0 |
| localId | String | 本端ID | 4.5.0 |
| remoteId | String | 对端ID | 4.5.0 |
| state | String | 启用状态 | 4.5.0 |
| status | String | 就绪状态 | 4.5.0 |
| ikeLifeTime | int | IKE存活时间 | 4.5.0 |
| lifeTime | int | IPSec存活时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| peerCidrs | List | 详情参考[peerCidrs] | 2.3 |
| l3NetworkRefs | List | 详情参考[l3NetworkRefs] | 2.3 |

 #peerCidrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| cidr | String |  | 2.3 |
| connectionUuid | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #l3NetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| connectionUuid | String |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
RemoveRemoteCidrsFromIPsecConnectionAction action = new
RemoveRemoteCidrsFromIPsecConnectionAction();
action.uuid = "2428fc093ea93b6fb4eda5cc921da355";
action.peerCidrs = asList("192.168.100.0/24");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveRemoteCidrsFromIPsecConnectionAction.Result res = action.call();
```

 Python SDK

```
RemoveRemoteCidrsFromIPsecConnectionAction action = RemoveRemoteCidrsFromIPsecConnectionAction()
action.uuid = "2428fc093ea93b6fb4eda5cc921da355"
action.peerCidrs = [192.168.100.0/24]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveRemoteCidrsFromIPsecConnectionAction.Result res = action.call()
```

---

#### Netflow相关接口

---

#### 创建流量监控搜集器(CreateFlowCollector)



##### API请求

 URLs

```
POST zstack/v1/flowmeters/{flowMeterUuid}/collectors
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "server": "192.168.48.12"
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
-X POST -d '{"params":{"server":"192.168.48.12"}}' http://localhost:8080/zstack/v1/flowmeters/3d5b7f5cbc1535fc91b5e97ac56221cf/collectors
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| flowMeterUuid | String | url | 流量监控资源的uuid |  | 3.6.0 |
| server (可选) | String | body(包含在**params**结构中) | 流量搜集器的ip地址 |  | 3.6.0 |
| port (可选) | Long | body(包含在**params**结构中) | 流量搜集器服务的port |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "93adc3c5f9c03d3d9aa24cd78bf77d0f",
    "server": "192.168.48.12",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | FlowCollectorInventory | 详情参考[inventory] | 3.6.0 |

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
| flowMeterUuid | String |  | 3.6.0 |
| server | String | 搜集器IP | 3.6.0 |
| port | Long | 搜集器的UDP端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
CreateFlowCollectorAction action = new CreateFlowCollectorAction();
action.flowMeterUuid = "3d5b7f5cbc1535fc91b5e97ac56221cf";
action.server = "192.168.48.12";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFlowCollectorAction.Result res = action.call();
```

 Python SDK

```
CreateFlowCollectorAction action = CreateFlowCollectorAction()
action.flowMeterUuid = "3d5b7f5cbc1535fc91b5e97ac56221cf"
action.server = "192.168.48.12"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFlowCollectorAction.Result res = action.call()
```

---

#### 查询流量监控的搜集器(QueryFlowCollector)



##### API请求

 URLs

```
GET zstack/v1/flowmeters/collectors
GET zstack/v1/flowmeters/collectors/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/collectors?q=uuid=6579310b521d3dd587dd42e73755df6c
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/collectors/98bab890be3f329d99bb9e67a3f405a1
```



可查询字段

运行CLI命令行工具，输入QueryFlowCollector并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "e231c750a95b301cb4b6de429fa11bbc",
      "server": "192.168.48.12",
      "port": 2055.0,
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| server | String | 搜集器IP | 3.6.0 |
| port | Long | 搜集器的UDP端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryFlowCollectorAction action = new QueryFlowCollectorAction();
action.conditions = asList("uuid=cfcc92fcc9143d7eba4f927b8f6e7120");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFlowCollectorAction.Result res = action.call();
```

 Python SDK

```
QueryFlowCollectorAction action = QueryFlowCollectorAction()
action.conditions = ["uuid=e88fd76aa0a535479d9203a47609103d"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFlowCollectorAction.Result res = action.call()
```

---

#### 更新搜集器信息(UpdateFlowCollector)



##### API请求

 URLs

```
PUT zstack/v1/flowmeters/collectors/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateFlowCollector": {
    "server": "192.168.48.12"
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
-X PUT -d '{"updateFlowCollector":{"server":"192.168.48.12"}}' http://localhost:8080/zstack/v1/flowmeters/collectors/a08b84909ccf3ace897d565643688b13/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| server (可选) | String | body(包含在**updateFlowCollector**结构中) | 搜集器的IP |  | 3.6.0 |
| port (可选) | Long | body(包含在**updateFlowCollector**结构中) | UDP端口 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "93adc3c5f9c03d3d9aa24cd78bf77d0f",
    "server": "192.168.48.12",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | FlowCollectorInventory | 详情参考[inventory] | 3.6.0 |

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
| flowMeterUuid | String |  | 3.6.0 |
| server | String | 搜集器IP | 3.6.0 |
| port | Long | 搜集器的UDP端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdateFlowCollectorAction action = new UpdateFlowCollectorAction();
action.uuid = "a08b84909ccf3ace897d565643688b13";
action.server = "192.168.48.12";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateFlowCollectorAction.Result res = action.call();
```

 Python SDK

```
UpdateFlowCollectorAction action = UpdateFlowCollectorAction()
action.uuid = "a08b84909ccf3ace897d565643688b13"
action.server = "192.168.48.12"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateFlowCollectorAction.Result res = action.call()
```

---

#### 删除流量监控搜集器(DeleteFlowCollector)



##### API请求

 URLs

```
DELETE zstack/v1/flowmeters/collectors/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/flowmeters/collectors/4a09dc60a4be305b8a6b1157eedb61bb?deleteMode=Permissive

```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| deleteMode (可选) | String | body |  |  | 3.6.0 |
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
DeleteFlowCollectorAction action = new DeleteFlowCollectorAction();
action.uuid = "4a09dc60a4be305b8a6b1157eedb61bb";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFlowCollectorAction.Result res = action.call();
```

 Python SDK

```
DeleteFlowCollectorAction action = DeleteFlowCollectorAction()
action.uuid = "4a09dc60a4be305b8a6b1157eedb61bb"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFlowCollectorAction.Result res = action.call()
```

---

#### 创建流量监控资源(CreateFlowMeter)



##### API请求

 URLs

```
POST zstack/v1/flowmeters
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "type": "NetFlow"
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
-X POST -d '{"params":{"type":"NetFlow"}}' http://localhost:8080/zstack/v1/flowmeters
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| version (可选) | String | body(包含在**params**结构中) | 流量监控协议的版本号 | V5 V9 | 3.6.0 |
| type | String | body(包含在**params**结构中) | 流量监控使用的协议 | NetFlow sFlow | 3.6.0 |
| sample (可选) | Integer | body(包含在**params**结构中) | 流量监控的采样率 |  | 3.6.0 |
| generateInterval (可选) | Integer | body(包含在**params**结构中) | 流量监控向搜集器发送的时间间隔 |  | 3.6.0 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| server (可选) | String | body(包含在**params**结构中) | 搜集器的ip地址 |  | 3.6.0 |
| port (可选) | Long | body(包含在**params**结构中) | 搜集器服务的UDP端口 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |


  - 选项格式为：`expireInterval::xx`，其中 xx=[1,3600] 单位秒
  - 例如：`expireInterval::1200`
- 例如：`expireInterval::1200`
  - 选项格式为：`activeTimeout::xx`，其中 xx单位秒
  - 例如：`activeTimeout::3600`
- 例如：`activeTimeout::3600`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5fd98cedd76139a4b0dc68482ac61878",
    "type": "NetFlow",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | FlowMeterInventory | 详情参考[inventory] | 3.6.0 |

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
| sample | Long | 流的采样率 | 3.6.0 |
| expireInterval | Long | 流发送间隔 | 3.6.0 |
| version | String | 流量监控协议的版本 | 3.6.0 |
| type | String | 流量监控协议 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| collectors | List | 详情参考[collectors] | 3.6.0 |
| networkRefs | List | 详情参考[networkRefs] | 3.6.0 |

 #collectors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| server | String | 搜集器IP | 3.6.0 |
| port | Long | 搜集器的UDP端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |

 #networkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| vRouterUuid | String |  | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
CreateFlowMeterAction action = new CreateFlowMeterAction();
action.type = "NetFlow";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateFlowMeterAction.Result res = action.call();
```

 Python SDK

```
CreateFlowMeterAction action = CreateFlowMeterAction()
action.type = "NetFlow"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateFlowMeterAction.Result res = action.call()
```

---

#### 查询流量监控资源(QueryFlowMeter)



##### API请求

 URLs

```
GET zstack/v1/flowmeters
GET zstack/v1/flowmeters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/84b52e4a84bd3747b3c1429eb47a4f34
```



可查询字段

运行CLI命令行工具，输入QueryFlowMeter并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4ba598ab40a1321798fb957a9eddb77d",
      "type": "NetFlow",
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| sample | Long | 流的采样率 | 3.6.0 |
| expireInterval | Long | 流发送间隔 | 3.6.0 |
| version | String | 流量监控协议的版本 | 3.6.0 |
| type | String | 流量监控协议 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| collectors | List | 详情参考[collectors] | 3.6.0 |
| networkRefs | List | 详情参考[networkRefs] | 3.6.0 |

 #collectors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| server | String | 搜集器IP | 3.6.0 |
| port | Long | 搜集器的UDP端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |

 #networkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| vRouterUuid | String |  | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryFlowMeterAction action = new QueryFlowMeterAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryFlowMeterAction.Result res = action.call();
```

 Python SDK

```
QueryFlowMeterAction action = QueryFlowMeterAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryFlowMeterAction.Result res = action.call()
```

---

#### 更新流量监控的信息(UpdateFlowMeter)



##### API请求

 URLs

```
PUT zstack/v1/flowmeters/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateFlowMeter": {
    "version": "V5"
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
-X PUT -d '{"updateFlowMeter":{"version":"V5"}}' http://localhost:8080/zstack/v1/flowmeters/46191b3339313efaa8a2321490ccd666/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| version (可选) | String | body(包含在**updateFlowMeter**结构中) | 流量监控协议的版本 | V5 V9 | 3.6.0 |
| sample (可选) | Long | body(包含在**updateFlowMeter**结构中) | 流量采集样本率 |  | 3.6.0 |
| name (可选) | String | body(包含在**updateFlowMeter**结构中) | 资源名称 |  | 3.6.0 |
| expireInterval (可选) | Long | body(包含在**updateFlowMeter**结构中) | 流量发送间隔 |  | 3.6.0 |
| description (可选) | String | body(包含在**updateFlowMeter**结构中) | 资源的详细描述 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "collectors": [],
    "uuid": "40175d4f6adc33b69926219a69318de4",
    "sample": 1.0,
    "version": "V5",
    "type": "NetFlow",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | FlowMeterInventory | 详情参考[inventory] | 3.6.0 |

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
| sample | Long | 流的采样率 | 3.6.0 |
| expireInterval | Long | 流发送间隔 | 3.6.0 |
| version | String | 流量监控协议的版本 | 3.6.0 |
| type | String | 流量监控协议 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| collectors | List | 详情参考[collectors] | 3.6.0 |
| networkRefs | List | 详情参考[networkRefs] | 3.6.0 |

 #collectors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| server | String | 搜集器IP | 3.6.0 |
| port | Long | 搜集器的UDP端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |

 #networkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| vRouterUuid | String |  | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdateFlowMeterAction action = new UpdateFlowMeterAction();
action.uuid = "46191b3339313efaa8a2321490ccd666";
action.version = "V5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateFlowMeterAction.Result res = action.call();
```

 Python SDK

```
UpdateFlowMeterAction action = UpdateFlowMeterAction()
action.uuid = "46191b3339313efaa8a2321490ccd666"
action.version = "V5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateFlowMeterAction.Result res = action.call()
```

---

#### 删除流量监控资源(DeleteFlowMeter)



##### API请求

 URLs

```
DELETE zstack/v1/flowmeters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/flowmeters/3a65b90e4cbc30b9b90c6defa9d4150d?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| deleteMode (可选) | String | body |  |  | 3.6.0 |
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
DeleteFlowMeterAction action = new DeleteFlowMeterAction();
action.uuid = "3a65b90e4cbc30b9b90c6defa9d4150d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteFlowMeterAction.Result res = action.call();
```

 Python SDK

```
DeleteFlowMeterAction action = DeleteFlowMeterAction()
action.uuid = "3a65b90e4cbc30b9b90c6defa9d4150d"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteFlowMeterAction.Result res = action.call()
```

---

#### 添加VPC路由器网络到FlowMeter中(AddVRouterNetworksToFlowMeter)



##### API请求

 URLs

```
POST zstack/v1/flowmeters/{flowMeterUuid}/router/{vRouterUuid}/addnetworks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "l3NetworkUuids": [
      "fc4a406728373583a22ebca19874b2e1"
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
-X POST -d '{"params":{"l3NetworkUuids":["fc4a406728373583a22ebca19874b2e1"]}}' http://localhost:8080/zstack/v1/flowmeters/2fd1cc7c10023dd880e566f510f043ee/router/5248c2e5e7c0308abc2863c2249fce61/addnetworks
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| flowMeterUuid | String | url | 流量监控资源 |  | 3.6.0 |
| vRouterUuid | String | url | VPC路由器的uuid或者VPC路由器组的uuid |  | 3.6.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | VPC路由器网络的uuid |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b10d1994c1813b9982ab5e52bf07c2e0",
      "vRouterUuid": "335d1d3f24c132dba22362dbb4867c7a",
      "flowMeterUuid": "f01fef876e503331a4d6b186c41ef1d1",
      "l3NetworkUuid": "80b4e4931a8a3760bde3d66f1c03a1ae",
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| vRouterUuid | String |  | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
AddVRouterNetworksToFlowMeterAction action = new AddVRouterNetworksToFlowMeterAction();
action.flowMeterUuid = "2fd1cc7c10023dd880e566f510f043ee";
action.vRouterUuid = "5248c2e5e7c0308abc2863c2249fce61";
action.l3NetworkUuids = asList("fc4a406728373583a22ebca19874b2e1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddVRouterNetworksToFlowMeterAction.Result res = action.call();
```

 Python SDK

```
AddVRouterNetworksToFlowMeterAction action = AddVRouterNetworksToFlowMeterAction()
action.flowMeterUuid = "2fd1cc7c10023dd880e566f510f043ee"
action.vRouterUuid = "5248c2e5e7c0308abc2863c2249fce61"
action.l3NetworkUuids = [fc4a406728373583a22ebca19874b2e1]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddVRouterNetworksToFlowMeterAction.Result res = action.call()
```

---

#### 查询开启流量监控的VPC网络(QueryVRouterFlowMeterNetwork)



##### API请求

 URLs

```
GET zstack/v1/flowmeters/networks
GET zstack/v1/flowmeters/networks/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/networks?q=uuid=d515c0ab43ac369e9419c9c861d5c2f7
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/networks/6d67988b515133dea956ddbac0f1d361
```



可查询字段

运行CLI命令行工具，输入QueryVRouterFlowMeterNetwork并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "62413232b13c3ff496876495906d9254",
      "vRouterUuid": "276b37d53794342b8b93f11ffdab0b24",
      "flowMeterUuid": "606c59dee3e0371da1b6a829c249bb79",
      "l3NetworkUuid": "7d744eec67cb385cb8f55e84056a3a50",
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| vRouterUuid | String |  | 3.6.0 |
| flowMeterUuid | String |  | 3.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryVRouterFlowMeterNetworkAction action = new QueryVRouterFlowMeterNetworkAction();
action.conditions = asList("uuid=87600bd6f382333ea003d14514a9d077");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVRouterFlowMeterNetworkAction.Result res = action.call();
```

 Python SDK

```
QueryVRouterFlowMeterNetworkAction action = QueryVRouterFlowMeterNetworkAction()
action.conditions = ["uuid=ac2b106208373677a9d39040d44dd1db"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVRouterFlowMeterNetworkAction.Result res = action.call()
```

---

#### 流量监控的统计信息(GetVRouterFlowCounter)



##### API请求

 URLs

```
GET zstack/v1/flowmeters/{vRouterUuid}/counter
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/eee5bf613b913040b6609c2b07efea07/counter
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | url | 路由器uuid |  | 3.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "counters": [
    {
      "device": "eth1",
      "totalEntries": "12",
      "totalPkts": "123",
      "totalBytes": "12345"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| counters | List | 详情参考[counters] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #counters

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| device | String | 网络接口 | 3.6.0 |
| totalEntries | String | flow总计值 | 3.6.0 |
| totalPkts | String | 总的包数值 | 3.6.0 |
| totalBytes | String | 总的字节值 | 3.6.0 |



##### SDK示例

 Java SDK

```
GetVRouterFlowCounterAction action = new GetVRouterFlowCounterAction();
action.vRouterUuid = "eee5bf613b913040b6609c2b07efea07";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVRouterFlowCounterAction.Result res = action.call();
```

 Python SDK

```
GetVRouterFlowCounterAction action = GetVRouterFlowCounterAction()
action.vRouterUuid = "eee5bf613b913040b6609c2b07efea07"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVRouterFlowCounterAction.Result res = action.call()
```

---

#### 清除VPC路由器网络的流量监控(RemoveVRouterNetworksFromFlowMeter)



##### API请求

 URLs

```
DELETE zstack/v1/flowmeters/networks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/flowmeters/networks?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuids | List | body |  |  | 3.6.0 |
| deleteMode (可选) | String | body |  |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



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
RemoveVRouterNetworksFromFlowMeterAction action = new RemoveVRouterNetworksFromFlowMeterAction();
action.uuids = asList("aaa9d2325b073fd39a7f1a67b007b1ae");
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveVRouterNetworksFromFlowMeterAction.Result res = action.call();
```

 Python SDK

```
RemoveVRouterNetworksFromFlowMeterAction action = RemoveVRouterNetworksFromFlowMeterAction()
action.uuids = [aaa9d2325b073fd39a7f1a67b007b1ae]
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveVRouterNetworksFromFlowMeterAction.Result res = action.call()
```

---

#### 获取流量监控协议中使用的系统标识(GetFlowMeterRouterId)



##### API请求

 URLs

```
GET zstack/v1/flowmeters/{vRouterUuid}/routerid
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/flowmeters/7ca3752b57ef3c8c89257e1eeb720b88/routerid
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | url | VPC路由器的uuid |  | 3.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "routerId": 120.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| routerId | Long | 路由器标识 | 3.6.0 |
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
GetFlowMeterRouterIdAction action = new GetFlowMeterRouterIdAction();
action.vRouterUuid = "7ca3752b57ef3c8c89257e1eeb720b88";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetFlowMeterRouterIdAction.Result res = action.call();
```

 Python SDK

```
GetFlowMeterRouterIdAction action = GetFlowMeterRouterIdAction()
action.vRouterUuid = "7ca3752b57ef3c8c89257e1eeb720b88"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetFlowMeterRouterIdAction.Result res = action.call()
```

---

#### 设置流量监控协议使用的VPC标识(SetFlowMeterRouterId)



##### API请求

 URLs

```
POST zstack/v1/flowmeters/{vRouterUuid}/routerid
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "routerId": 120.0
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
-X POST -d '{"params":{"routerId":120.0}}' http://localhost:8080/zstack/v1/flowmeters/0bfa81935a6c3dd1a8c68de1874e8a1d/routerid
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | url |  |  | 3.6.0 |
| routerId | Long | body(包含在**params**结构中) | 路由器标识 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "routerId": 120.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| routerId | Long | VPC路由器的流量监控标识 | 3.6.0 |
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
SetFlowMeterRouterIdAction action = new SetFlowMeterRouterIdAction();
action.vRouterUuid = "0bfa81935a6c3dd1a8c68de1874e8a1d";
action.routerId = 120.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetFlowMeterRouterIdAction.Result res = action.call();
```

 Python SDK

```
SetFlowMeterRouterIdAction action = SetFlowMeterRouterIdAction()
action.vRouterUuid = "0bfa81935a6c3dd1a8c68de1874e8a1d"
action.routerId = 120.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetFlowMeterRouterIdAction.Result res = action.call()
```

---

#### 端口镜像相关接口

---

#### 创建端口镜像(CreatePortMirror)



##### API请求

 URLs

```
POST zstack/v1/port-mirrors
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "mirrorNetworkUuid": "7d4ac8aafcd33306b21a0c40a6dec9cb"
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
-X POST -d '{"params":{"mirrorNetworkUuid":"7d4ac8aafcd33306b21a0c40a6dec9cb"}}' http://localhost:8080/zstack/v1/port-mirrors
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| mirrorNetworkUuid | String | body(包含在**params**结构中) | 镜像网络资源的UUID |  | 3.7.0 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.7.0 |
| stateEvent (可选) | String | body(包含在**params**结构中) | 流量镜像服务的状态 | enable disable | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "66818821906036338c8e8f7773b03263",
    "name": "port mirror",
    "state": "Enabled",
    "mirrorNetworkUuid": "c1da6a9a815f3b17be87c19f9a43fe77",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | PortMirrorInventory | 详情参考[inventory] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| mirrorNetworkUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| state | PortMirrorState | 详情参考[state] | 3.7.0 |
| sessions | List | 详情参考[sessions] | 3.7.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PortMirrorState |  | 3.7.0 |
| Disabled | PortMirrorState |  | 3.7.0 |

 #sessions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| internalId | Long |  | 3.7.0 |
| srcEndPoint | String |  | 3.7.0 |
| dstEndPoint | String |  | 3.7.0 |
| portMirrorUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SessionStatus | 详情参考[status] | 3.7.0 |
| type | SessionType | 详情参考[type] | 3.7.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | SessionStatus |  | 3.7.0 |
| Active | SessionStatus |  | 3.7.0 |
| Inactive | SessionStatus |  | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Ingress | SessionType |  | 3.7.0 |
| Egress | SessionType |  | 3.7.0 |
| Bidirection | SessionType |  | 3.7.0 |



##### SDK示例

 Java SDK

```
CreatePortMirrorAction action = new CreatePortMirrorAction();
action.mirrorNetworkUuid = "7d4ac8aafcd33306b21a0c40a6dec9cb";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePortMirrorAction.Result res = action.call();
```

 Python SDK

```
CreatePortMirrorAction action = CreatePortMirrorAction()
action.mirrorNetworkUuid = "7d4ac8aafcd33306b21a0c40a6dec9cb"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePortMirrorAction.Result res = action.call()
```

---

#### 查询端口镜像(QueryPortMirror)



##### API请求

 URLs

```
GET zstack/v1/port-mirrors
GET zstack/v1/portMirrors/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/port-mirrors?q=name=web&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/portMirrors/5aa247a04fbd3b9e9331e78645e81729
```



可查询字段

运行CLI命令行工具，输入QueryPortMirror并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "a1595ae4032236ed8cf8c0d8b4b498e7",
      "name": "port mirror",
      "state": "Enabled",
      "mirrorNetworkUuid": "2616116e22ab3033adc12890947259a6",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| mirrorNetworkUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| state | PortMirrorState | 详情参考[state] | 3.7.0 |
| sessions | List | 详情参考[sessions] | 3.7.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PortMirrorState |  | 3.7.0 |
| Disabled | PortMirrorState |  | 3.7.0 |

 #sessions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| internalId | Long |  | 3.7.0 |
| srcEndPoint | String |  | 3.7.0 |
| dstEndPoint | String |  | 3.7.0 |
| portMirrorUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SessionStatus | 详情参考[status] | 3.7.0 |
| type | SessionType | 详情参考[type] | 3.7.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | SessionStatus |  | 3.7.0 |
| Active | SessionStatus |  | 3.7.0 |
| Inactive | SessionStatus |  | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Ingress | SessionType |  | 3.7.0 |
| Egress | SessionType |  | 3.7.0 |
| Bidirection | SessionType |  | 3.7.0 |



##### SDK示例

 Java SDK

```
QueryPortMirrorAction action = new QueryPortMirrorAction();
action.conditions = asList("name=web","state=Enabled");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPortMirrorAction.Result res = action.call();
```

 Python SDK

```
QueryPortMirrorAction action = QueryPortMirrorAction()
action.conditions = ["name=web","state=Enabled"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPortMirrorAction.Result res = action.call()
```

---

#### 更新端口镜像(UpdatePortMirror)



##### API请求

 URLs

```
PUT zstack/v1/port-mirrors/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updatePortMirror": {
    "name": "new pm",
    "description": "for test update"
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
-X PUT -d '{"updatePortMirror":{"name":"new pm","description":"for test update"}}' http://localhost:8080/zstack/v1/port-mirrors/8b4a0c82ba273ceda3ef09daf0ecd90d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| name (可选) | String | body(包含在**updatePortMirror**结构中) | 资源名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**updatePortMirror**结构中) | 资源的详细描述 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2bafc0057bac3a6294a24a48c079c738",
    "name": "port mirror",
    "state": "Enabled",
    "mirrorNetworkUuid": "aacd59f03a853463846361bb946097c8",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | PortMirrorInventory | 详情参考[inventory] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| mirrorNetworkUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| state | PortMirrorState | 详情参考[state] | 3.7.0 |
| sessions | List | 详情参考[sessions] | 3.7.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PortMirrorState |  | 3.7.0 |
| Disabled | PortMirrorState |  | 3.7.0 |

 #sessions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| internalId | Long |  | 3.7.0 |
| srcEndPoint | String |  | 3.7.0 |
| dstEndPoint | String |  | 3.7.0 |
| portMirrorUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SessionStatus | 详情参考[status] | 3.7.0 |
| type | SessionType | 详情参考[type] | 3.7.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | SessionStatus |  | 3.7.0 |
| Active | SessionStatus |  | 3.7.0 |
| Inactive | SessionStatus |  | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Ingress | SessionType |  | 3.7.0 |
| Egress | SessionType |  | 3.7.0 |
| Bidirection | SessionType |  | 3.7.0 |



##### SDK示例

 Java SDK

```
UpdatePortMirrorAction action = new UpdatePortMirrorAction();
action.uuid = "8b4a0c82ba273ceda3ef09daf0ecd90d";
action.name = "new pm";
action.description = "for test update";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdatePortMirrorAction.Result res = action.call();
```

 Python SDK

```
UpdatePortMirrorAction action = UpdatePortMirrorAction()
action.uuid = "8b4a0c82ba273ceda3ef09daf0ecd90d"
action.name = "new pm"
action.description = "for test update"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdatePortMirrorAction.Result res = action.call()
```

---

#### 删除端口镜像(DeletePortMirror)



##### API请求

 URLs

```
DELETE zstack/v1/port-mirrors/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/port-mirrors/b4959c6b70c836508290dce51e9a1394
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| deleteMode (可选) | String | body |  |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



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
DeletePortMirrorAction action = new DeletePortMirrorAction();
action.uuid = "b4959c6b70c836508290dce51e9a1394";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePortMirrorAction.Result res = action.call();
```

 Python SDK

```
DeletePortMirrorAction action = DeletePortMirrorAction()
action.uuid = "b4959c6b70c836508290dce51e9a1394"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePortMirrorAction.Result res = action.call()
```

---

#### 创建端口镜像会话(CreatePortMirrorSession)



##### API请求

 URLs

```
POST zstack/v1/port-mirrors/sessions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "portMirrorUuid": "d848a38e94c53c9dafbb422f5e534237",
    "name": "session",
    "type": "Ingress",
    "srcEndPoint": "404d456d595a3fcf8e758dc864a47c2e",
    "dstEndPoint": "5ffb697b680d3d76bf3c50f344d5f742"
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
-X POST -d '{"params":{"portMirrorUuid":"d848a38e94c53c9dafbb422f5e534237","name":"session","type":"Ingress","srcEndPoint":"404d456d595a3fcf8e758dc864a47c2e","dstEndPoint":"5ffb697b680d3d76bf3c50f344d5f742"}}' http://localhost:8080/zstack/v1/port-mirrors/sessions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| portMirrorUuid | String | body(包含在**params**结构中) | 端口镜像服务的UUID |  | 3.7.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.7.0 |
| type | String | body(包含在**params**结构中) | 会话资源的类型 | Ingress Egress Bidirection | 3.7.0 |
| srcEndPoint | String | body(包含在**params**结构中) | 镜像会话源端口 |  | 3.7.0 |
| dstEndPoint | String | body(包含在**params**结构中) | 镜像会话目的端口 |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "6f8ad47ea3a336aca4d32e53e3b6d731",
    "name": "port mirror",
    "srcEndPoint": "f9dbfde2c5bd398a8691b9f4be4a6a79",
    "type": "Ingress",
    "dstEndPoint": "76ea062350ac3a2aacf22545954185ed",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | PortMirrorSessionInventory | 详情参考[inventory] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| internalId | Long |  | 3.7.0 |
| srcEndPoint | String |  | 3.7.0 |
| dstEndPoint | String |  | 3.7.0 |
| portMirrorUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SessionStatus | 详情参考[status] | 3.7.0 |
| type | SessionType | 详情参考[type] | 3.7.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | SessionStatus |  | 3.7.0 |
| Active | SessionStatus |  | 3.7.0 |
| Inactive | SessionStatus |  | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Ingress | SessionType |  | 3.7.0 |
| Egress | SessionType |  | 3.7.0 |
| Bidirection | SessionType |  | 3.7.0 |



##### SDK示例

 Java SDK

```
CreatePortMirrorSessionAction action = new CreatePortMirrorSessionAction();
action.portMirrorUuid = "d848a38e94c53c9dafbb422f5e534237";
action.name = "session";
action.type = "Ingress";
action.srcEndPoint = "404d456d595a3fcf8e758dc864a47c2e";
action.dstEndPoint = "5ffb697b680d3d76bf3c50f344d5f742";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePortMirrorSessionAction.Result res = action.call();
```

 Python SDK

```
CreatePortMirrorSessionAction action = CreatePortMirrorSessionAction()
action.portMirrorUuid = "d848a38e94c53c9dafbb422f5e534237"
action.name = "session"
action.type = "Ingress"
action.srcEndPoint = "404d456d595a3fcf8e758dc864a47c2e"
action.dstEndPoint = "5ffb697b680d3d76bf3c50f344d5f742"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePortMirrorSessionAction.Result res = action.call()
```

---

#### 查询端口镜像会话(QueryPortMirrorSession)



##### API请求

 URLs

```
GET zstack/v1/port-mirrors/sessions
GET zstack/v1/port-mirrors/sessions/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/port-mirrors/sessions?q=name=session&q=direction=Egress&q=srcEndPoint=123456xxx
```



可查询字段

运行CLI命令行工具，输入QueryPortMirrorSession并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "aab3ce5ac3de3d2b982bb376fe8909af",
      "name": "port mirror session",
      "status": "Active",
      "srcEndPoint": "c568cf147cff3cac83f855f622986db8",
      "type": "Egress",
      "dstEndPoint": "f5b953f2b56d316894daf4eb2d5a9627",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| internalId | Long |  | 3.7.0 |
| srcEndPoint | String |  | 3.7.0 |
| dstEndPoint | String |  | 3.7.0 |
| portMirrorUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SessionStatus | 详情参考[status] | 3.7.0 |
| type | SessionType | 详情参考[type] | 3.7.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | SessionStatus |  | 3.7.0 |
| Active | SessionStatus |  | 3.7.0 |
| Inactive | SessionStatus |  | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Ingress | SessionType |  | 3.7.0 |
| Egress | SessionType |  | 3.7.0 |
| Bidirection | SessionType |  | 3.7.0 |



##### SDK示例

 Java SDK

```
QueryPortMirrorSessionAction action = new QueryPortMirrorSessionAction();
action.conditions = asList("name=session","direction=Egress","srcEndPoint=123456xxx");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPortMirrorSessionAction.Result res = action.call();
```

 Python SDK

```
QueryPortMirrorSessionAction action = QueryPortMirrorSessionAction()
action.conditions = ["name=session","direction=Egress","srcEndPoint=123456xxx"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPortMirrorSessionAction.Result res = action.call()
```

---

#### 更新端口镜像服务状态(ChangePortMirrorState)



##### API请求

 URLs

```
PUT zstack/v1/port-mirrors/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changePortMirrorState": {
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
-X PUT -d '{"changePortMirrorState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/port-mirrors/3b3454b75a593d718ba24cc7d677cacd/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| stateEvent | String | body(包含在**changePortMirrorState**结构中) | 状态 | enable disable | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8752424e2b1e398a9d28fbb076cff81f",
    "name": "port mirror",
    "state": "Enabled",
    "mirrorNetworkUuid": "ad51cb6be5d83cb4bfeb8eb95b2e6437",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | PortMirrorInventory | 详情参考[inventory] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| mirrorNetworkUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| state | PortMirrorState | 详情参考[state] | 3.7.0 |
| sessions | List | 详情参考[sessions] | 3.7.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | PortMirrorState |  | 3.7.0 |
| Disabled | PortMirrorState |  | 3.7.0 |

 #sessions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| internalId | Long |  | 3.7.0 |
| srcEndPoint | String |  | 3.7.0 |
| dstEndPoint | String |  | 3.7.0 |
| portMirrorUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SessionStatus | 详情参考[status] | 3.7.0 |
| type | SessionType | 详情参考[type] | 3.7.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | SessionStatus |  | 3.7.0 |
| Active | SessionStatus |  | 3.7.0 |
| Inactive | SessionStatus |  | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Ingress | SessionType |  | 3.7.0 |
| Egress | SessionType |  | 3.7.0 |
| Bidirection | SessionType |  | 3.7.0 |



##### SDK示例

 Java SDK

```
ChangePortMirrorStateAction action = new ChangePortMirrorStateAction();
action.uuid = "3b3454b75a593d718ba24cc7d677cacd";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangePortMirrorStateAction.Result res = action.call();
```

 Python SDK

```
ChangePortMirrorStateAction action = ChangePortMirrorStateAction()
action.uuid = "3b3454b75a593d718ba24cc7d677cacd"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangePortMirrorStateAction.Result res = action.call()
```

---

#### 删除端口镜像会话(DeletePortMirrorSession)



##### API请求

 URLs

```
DELETE zstack/v1/port-mirrors/sessons/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/port-mirrors/sessons/3c1f4de89ffd3f83932bbd95321dbf20
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| deleteMode (可选) | String | body |  |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



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
DeletePortMirrorSessionAction action = new DeletePortMirrorSessionAction();
action.uuid = "3c1f4de89ffd3f83932bbd95321dbf20";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePortMirrorSessionAction.Result res = action.call();
```

 Python SDK

```
DeletePortMirrorSessionAction action = DeletePortMirrorSessionAction()
action.uuid = "3c1f4de89ffd3f83932bbd95321dbf20"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePortMirrorSessionAction.Result res = action.call()
```

---

#### 获取系统中可以使用端口镜像服务的网卡(GetCandidateVmNicsForPortMirror)



##### API请求

 URLs

```
GET zstack/v1/port-mirrors/{portMirrorUuid}/vm-instances/candidate-nics/{type}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/port-mirrors/35f9487b28bf3ef3995bdaa9b0c7e14c/vm-instances/candidate-nics/source?
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| portMirrorUuid | String | url | 端口镜像服务的uuid |  | 3.7.0 |
| type | String | url | 网卡类型 | source dest | 3.7.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "7b606cc2eaf03d59be9ccf7eb8e64146",
      "vmInstanceUuid": "3426dad7e3b63a8db7cf0f2679b25c3d",
      "usedIpUuid": "6e85b642844e3afe9dfca1a159d982f2",
      "l3NetworkUuid": "dc154c4096f73e4f9ebf14bbdd577927",
      "ip": "192.168.1.10",
      "mac": "00:0c:29:bd:99:fc",
      "hypervisorType": "KVM",
      "netmask": "255.255.255.0",
      "gateway": "192.168.1.1",
      "deviceId": 0.0,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vmInstanceUuid | String | 云主机UUID | 3.7.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.7.0 |
| ip | String |  | 3.7.0 |
| mac | String |  | 3.7.0 |
| hypervisorType | String |  | 3.7.0 |
| netmask | String |  | 3.7.0 |
| gateway | String |  | 3.7.0 |
| metaData | String |  | 3.7.0 |
| ipVersion | Integer |  | 3.7.0 |
| deviceId | Integer |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| usedIps | List | 详情参考[usedIps] | 3.7.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| ipRangeUuid | String | IP段UUID | 3.7.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.7.0 |
| ipVersion | Integer |  | 3.7.0 |
| ip | String |  | 3.7.0 |
| netmask | String |  | 3.7.0 |
| gateway | String |  | 3.7.0 |
| usedFor | String |  | 3.7.0 |
| ipInLong | long |  | 3.7.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
GetCandidateVmNicsForPortMirrorAction action = new GetCandidateVmNicsForPortMirrorAction();
action.portMirrorUuid = "35f9487b28bf3ef3995bdaa9b0c7e14c";
action.type = "source";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateVmNicsForPortMirrorAction.Result res = action.call();
```

 Python SDK

```
GetCandidateVmNicsForPortMirrorAction action = GetCandidateVmNicsForPortMirrorAction()
action.portMirrorUuid = "35f9487b28bf3ef3995bdaa9b0c7e14c"
action.type = "source"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateVmNicsForPortMirrorAction.Result res = action.call()
```

---

#### 查询端口镜像网络分配的IP(QueryPortMirrorNetworkUsedIp)



##### API请求

 URLs

```
GET zstack/v1/port-mirrors/networks/usedIps
GET zstack/v1/port-mirrors/networks/usedIps/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/port-mirrors/networks/usedIps?q=
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/port-mirrors/networks/usedIps/bfe3d806d9cc3e649a3d80e548409c89
```



可查询字段

运行CLI命令行工具，输入QueryPortMirrorNetworkUsedIp并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "l3NetworkUuid": "207f29af9d033376ba8f7c2a4ae243c4",
      "hostUuid": "c7a6c1c107e2368e8cec88481e29967b",
      "description": "for test",
      "clusterUuid": "1a4911d67929346b949853fd92d5a0bc",
      "uuid": "fe8301ee9bf93c5db2e2240644619c56"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 3.7.0 |
| hostUuid | String | 物理机UUID | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| clusterUuid | String | 集群UUID | 3.7.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| usedIpInventory | UsedIpInventory | 详情参考[usedIpInventory] | 3.7.0 |

 #usedIpInventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| ipRangeUuid | String | IP段UUID | 3.7.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.7.0 |
| ipVersion | Integer |  | 3.7.0 |
| ip | String |  | 3.7.0 |
| netmask | String |  | 3.7.0 |
| gateway | String |  | 3.7.0 |
| usedFor | String |  | 3.7.0 |
| ipInLong | long |  | 3.7.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
QueryPortMirrorNetworkUsedIpAction action = new QueryPortMirrorNetworkUsedIpAction();
action.conditions = asList("");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPortMirrorNetworkUsedIpAction.Result res = action.call();
```

 Python SDK

```
QueryPortMirrorNetworkUsedIpAction action = QueryPortMirrorNetworkUsedIpAction()
action.conditions = [""]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPortMirrorNetworkUsedIpAction.Result res = action.call()
```

---

#### 共享带宽相关接口
