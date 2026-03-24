# 网络资源 - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.3.html*

---

## 网络资源

---

## SDN设备相关接口

---

## 添加SDN控制器(AddSdnController)



### API请求

 URLs

```
POST zstack/v1/sdn-controllers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "vendorType": "vendor",     "name": "sdn-1",     "description": "sdn controller from vendor",     "ip": "192.168.1.1",     "userName": "admin",     "password": "password"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \  -X POST -d '{"params":{"vendorType":"vendor","name":"sdn-1","description":"sdn controller from vendor","ip":"192.168.1.1","userName":"admin","password":"password"}}' http://localhost:8080/zstack/v1/sdn-controllers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vendorType | String | body(包含在`params`结构中) |  |  | 3.7 |
| name | String | body(包含在`params`结构中) | 资源名称 |  | 3.7 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 3.7 |
| ip | String | body(包含在`params`结构中) |  |  | 3.7 |
| userName (可选) | String | body(包含在`params`结构中) |  |  | 3.7 |
| password (可选) | String | body(包含在`params`结构中) |  |  | 3.7 |
| resourceUuid (可选) | String | body(包含在`params`结构中) |  |  | 3.7 |
| tagUuids (可选) | List | body(包含在`params`结构中) | 标签UUID列表 |  | 3.7 |
| systemTags (可选) | List | body |  |  | 3.7 |
| userTags (可选) | List | body |  |  | 3.7 |
| zoneUuid (可选) | String | body(包含在`params`结构中) | 区域UUID |  | 5.3.0 |


  - 选项格式为：`vdsUuid::{%s}`
  - 例如：`vdsUuid::1234-5678`
  - 关联资源：`SdnControllerVO.class`
- 关联资源：`SdnControllerVO.class`
  - 选项格式为：`startVlan::{%s}::endVlan::{%s}`
  - 例如：`startVlan::110::endVlan::120`
  - 关联资源：`SdnControllerVO.class`
- 关联资源：`SdnControllerVO.class`
    - 选项格式为：`startVni::{%s}::endVni::{%s}`
    - 例如：` startVni::100::endVni::200`
    - 关联资源：`SdnControllerVO.class`
  - 关联资源：`SdnControllerVO.class`
- 关联资源：`SdnControllerVO.class`


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "uuid": "2f7e443a152833efb0f4b7d196a35ce0",     "vendorType": "H3C VCFC",     "name": "sdn-1",     "description": "sdn controller from vendor",     "ip": "192.168.1.1",     "username": "admin",     "password": "password"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 3.7.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vendorType | String |  | 3.7.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| ip | String |  | 3.7.0 |
| username | String |  | 3.7.0 |
| password | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.3.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.3.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | SDN控制器Uuid | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.3.0 |
| vtepIp | String | 物理机VTEP IP | 5.3.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.3.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.3.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.3.0 |
| bondMode | String | 物理机网卡bond模式 | 5.3.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.3.0 |



### SDK示例

 Java SDK

```
AddSdnControllerAction action = new AddSdnControllerAction(); action.vendorType = "vendor"; action.name = "sdn-1"; action.description = "sdn controller from vendor"; action.ip = "192.168.1.1"; action.userName = "admin"; action.password = "password"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; AddSdnControllerAction.Result res = action.call();
```

 Python SDK

```
AddSdnControllerAction action = AddSdnControllerAction() action.vendorType = "vendor" action.name = "sdn-1" action.description = "sdn controller from vendor" action.ip = "192.168.1.1" action.userName = "admin" action.password = "password" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" AddSdnControllerAction.Result res = action.call()
```

---

## 删除SDN控制器(RemoveSdnController)



### API请求

 URLs

```
DELETE zstack/v1/sdn-controllers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/sdn-controllers/237901c5097b38c480315569a1ac7567?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| deleteMode (可选) | String | body |  |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
RemoveSdnControllerAction action = new RemoveSdnControllerAction(); action.uuid = "237901c5097b38c480315569a1ac7567"; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; RemoveSdnControllerAction.Result res = action.call();
```

 Python SDK

```
RemoveSdnControllerAction action = RemoveSdnControllerAction() action.uuid = "237901c5097b38c480315569a1ac7567" action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" RemoveSdnControllerAction.Result res = action.call()
```

---

#### 查询SDN控制器(QuerySdnController)



##### API请求

 URLs

```
GET zstack/v1/sdn-controllers
GET zstack/v1/sdn-controllers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controllers?q=uuid=5e897e7e3a663786b873a3e020dbfc0a
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controllers/37c3e4f7602930c5888107528521ac90
```



可查询字段

运行CLI命令行工具，输入QuerySdnController并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b4134eb269a632eda5df826686733c5e",
      "name": "test-sdn",
      "description": "sdn for test",
      "ip": "192.168.1.1",
      "username": "admin",
      "password": "password"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 3.7.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vendorType | String |  | 3.7.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| ip | String |  | 3.7.0 |
| username | String |  | 3.7.0 |
| password | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.3.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.3.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | SDN控制器Uuid | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.3.0 |
| vtepIp | String | 物理机VTEP IP | 5.3.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.3.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.3.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.3.0 |
| bondMode | String | 物理机网卡bond模式 | 5.3.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.3.0 |



##### SDK示例

 Java SDK

```
QuerySdnControllerAction action = new QuerySdnControllerAction();
action.conditions = asList("uuid=e9f330402ed03b32a865ac4f19890589");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySdnControllerAction.Result res = action.call();
```

 Python SDK

```
QuerySdnControllerAction action = QuerySdnControllerAction()
action.conditions = ["uuid=d6a1f2d694273d31bfd23736ab530e44"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySdnControllerAction.Result res = action.call()
```

---

#### 修改SDN控制器(ChangeSdnController)



##### API请求

 URLs

```
PUT zstack/v1/sdn-controllers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSdnController": {
    "userName": "sdnuser",
    "password": "newpassword"
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
-X PUT -d '{"changeSdnController":{"userName":"sdnuser","password":"newpassword"}}' http://localhost:8080/zstack/v1/sdn-controllers/fde0b2acbe6c3c7192e32d113f4e00b8/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | SDN控制器资源UUID |  | 5.4.0 |
| userName (可选) | String | body(包含在**changeSdnController**结构中) | SDN控制器新用户名 |  | 5.4.0 |
| password (可选) | String | body(包含在**changeSdnController**结构中) | SDN控制器新密码 |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |
| vlanRanges (可选) | List | body(包含在**changeSdnController**结构中) |  |  | 5.4.0 |


  - 选项格式为：`mirrorNetwork::{L3NetworkVOUuid}`
  - 例如：`mirrorNetwork::1c707a63817b4f29b1235fa1f76c0ccc`
- 例如：`mirrorNetwork::1c707a63817b4f29b1235fa1f76c0ccc`
  - 选项格式为：`logicalRouterUuid::{%s}`
  - 例如：`logicalRouterUuid::ecb4a71e0e32476da948a583ea0a220d`
- 例如：`logicalRouterUuid::ecb4a71e0e32476da948a583ea0a220d`
  - 选项格式为：`startVlan::{%s}::endVlan::{%s}`
  - 例如：`startVlan::100::endVlan::1000`
- 例如：`startVlan::100::endVlan::1000`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cd65a5af636038bf91f4e404ef9594b1",
    "vendorType": "H3C-VCFC",
    "name": "updated-sdn-controller",
    "description": "Updated SDN controller configuration",
    "ip": "192.168.1.100",
    "username": "admin",
    "password": "newpassword",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 5.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| vendorType | String |  | 5.4.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| ip | String |  | 5.4.0 |
| username | String |  | 5.4.0 |
| password | String |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.4.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.4.0 |
| description | String | 错误的概要描述 | 5.4.0 |
| details | String | 错误的详细信息 | 5.4.0 |
| elaboration | String | 保留字段，默认为null | 5.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.4.0 |



##### SDK示例

 Java SDK

```
ChangeSdnControllerAction action = new ChangeSdnControllerAction();
action.uuid = "fde0b2acbe6c3c7192e32d113f4e00b8";
action.userName = "sdnuser";
action.password = "newpassword";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSdnControllerAction.Result res = action.call();
```

 Python SDK

```
ChangeSdnControllerAction action = ChangeSdnControllerAction()
action.uuid = "fde0b2acbe6c3c7192e32d113f4e00b8"
action.userName = "sdnuser"
action.password = "newpassword"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSdnControllerAction.Result res = action.call()
```

---

#### 拉取SDN控制器租户(PullSdnControllerTenant)



##### API请求

 URLs

```
PUT zstack/v1/sdn-controllers/{uuid}/tenant/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "pullSdnControllerTenant": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"pullSdnControllerTenant":{}}' http://localhost:8080/zstack/v1/sdn-controllers/6d53fa409b343fc8a231c100e3f3c90f/tenant/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



##### API返回

 返回示例

```
{
  "inventories": []
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| inventories | List | 详情参考[inventories] | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| sdnControllerUuid | String |  | 5.3.28 |
| tenantUuid | String |  | 5.3.28 |
| vdsUuid | String |  | 5.3.28 |
| tenantName | String |  | 5.3.28 |
| vdsName | String |  | 5.3.28 |
| cloudDomainName | String |  | 5.3.28 |
| status | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |



##### SDK示例

 Java SDK

```
PullSdnControllerTenantAction action = new PullSdnControllerTenantAction();
action.uuid = "6d53fa409b343fc8a231c100e3f3c90f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PullSdnControllerTenantAction.Result res = action.call();
```

 Python SDK

```
PullSdnControllerTenantAction action = PullSdnControllerTenantAction()
action.uuid = "6d53fa409b343fc8a231c100e3f3c90f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PullSdnControllerTenantAction.Result res = action.call()
```

---

#### 创建华为SDN虚拟路由器(CreateHuaweiIMasterVRouter)



##### API请求

 URLs

```
POST zstack/v1/sdn-controller/huawei-imaster/vrouters
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "test-vrouter",
    "description": "Test VRouter for Huawei iMaster",
    "huaweiVpcUuid": "67ed6b0065633829892c11ccf1ee2dba"
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
-X POST -d '{"params":{"name":"test-vrouter","description":"Test VRouter for Huawei iMaster","huaweiVpcUuid":"67ed6b0065633829892c11ccf1ee2dba"}}' http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vrouters
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.4.0 |
| huaweiVpcUuid | String | body(包含在**params**结构中) |  |  | 5.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.4.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5a7236affa1f34d7908972b14956b18b",
    "name": "test-vrouter",
    "description": "Test VRouter for Huawei iMaster",
    "logicalNetworkId": "605a782332663c769f1845ac76efc526",
    "tenantId": "3350497bb7393700b77bc28d625468d8",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.4.0 |
| inventory | HuaweiIMasterVRouterInventory | 详情参考[inventory] | 5.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.4.0 |
| description | String | 错误的概要描述 | 5.4.0 |
| details | String | 错误的详细信息 | 5.4.0 |
| elaboration | String | 保留字段，默认为null | 5.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| logicalNetworkId | String |  | 5.4.0 |
| tenantId | String |  | 5.4.0 |
| fabricUuid | String |  | 5.4.0 |
| deleted | Boolean |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |



##### SDK示例

 Java SDK

```
CreateHuaweiIMasterVRouterAction action = new CreateHuaweiIMasterVRouterAction();
action.name = "test-vrouter";
action.description = "Test VRouter for Huawei iMaster";
action.huaweiVpcUuid = "67ed6b0065633829892c11ccf1ee2dba";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateHuaweiIMasterVRouterAction.Result res = action.call();
```

 Python SDK

```
CreateHuaweiIMasterVRouterAction action = CreateHuaweiIMasterVRouterAction()
action.name = "test-vrouter"
action.description = "Test VRouter for Huawei iMaster"
action.huaweiVpcUuid = "67ed6b0065633829892c11ccf1ee2dba"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateHuaweiIMasterVRouterAction.Result res = action.call()
```

---

#### 删除华为SDN虚拟路由器(DeleteHuaweiIMasterVRouter)



##### API请求

 URLs

```
DELETE zstack/v1/sdn-controller/huawei-imaster/vrouters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vrouters/523c2083fec532b79fbc3701909e3b25
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.0 |
| sdnControllerUuid (可选) | String | body |  |  | 5.4.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |



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
DeleteHuaweiIMasterVRouterAction action = new DeleteHuaweiIMasterVRouterAction();
action.uuid = "523c2083fec532b79fbc3701909e3b25";
action.sdnControllerUuid = "6f0803e4276a38308d958c2d8dc7381c";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteHuaweiIMasterVRouterAction.Result res = action.call();
```

 Python SDK

```
DeleteHuaweiIMasterVRouterAction action = DeleteHuaweiIMasterVRouterAction()
action.uuid = "523c2083fec532b79fbc3701909e3b25"
action.sdnControllerUuid = "6f0803e4276a38308d958c2d8dc7381c"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteHuaweiIMasterVRouterAction.Result res = action.call()
```

---

#### 查询华为SDN虚拟路由器(QueryHuaweiIMasterVRouter)



##### API请求

 URLs

```
GET zstack/v1/sdn-controller/huawei-imaster/vrouters
GET zstack/v1/sdn-controller/huawei-imaster/vrouters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vroutersq=uuid=6a3128b0ec823829ae6dbbdd9e59122e
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vrouters/c59afc7c9cb739bab4286803ba3536fd
```



可查询字段

运行CLI命令行工具，输入QueryHuaweiIMasterVRouter并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "e75a229874b23b35903e52a6f52059cb",
      "name": "vrouter1",
      "description": "vrouter for test",
      "logicalNetworkId": "87ed0075640733c291aa223772d9d82d",
      "tenantId": "2f4c1e3a62fa3da1ab1cca8b53074b9f"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.0 |
| inventories | List | 详情参考[inventories] | 5.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.4.0 |
| description | String | 错误的概要描述 | 5.4.0 |
| details | String | 错误的详细信息 | 5.4.0 |
| elaboration | String | 保留字段，默认为null | 5.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| logicalNetworkId | String |  | 5.4.0 |
| tenantId | String |  | 5.4.0 |
| fabricUuid | String |  | 5.4.0 |
| deleted | Boolean |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |



##### SDK示例

 Java SDK

```
QueryHuaweiIMasterVRouterAction action = new QueryHuaweiIMasterVRouterAction();
action.conditions = asList("uuid=5accb3ddb5b1343b81617f13d13a3632");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHuaweiIMasterVRouterAction.Result res = action.call();
```

 Python SDK

```
QueryHuaweiIMasterVRouterAction action = QueryHuaweiIMasterVRouterAction()
action.conditions = ["uuid=dd650dbcf99931a9a9bd442b2b3e4f0d"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHuaweiIMasterVRouterAction.Result res = action.call()
```

---

#### 删除华为SDN租户(DeleteHuaweiIMasterTenant)



##### API请求

 URLs

```
DELETE zstack/v1/sdn-controller/huawei-imaster/tenants/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/tenants/082fa02e39d53778a21a7e86b044ce17
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.0 |
| sdnControllerUuid (可选) | String | body | 指定的华为iMaster租户 |  | 5.4.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |



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
DeleteHuaweiIMasterTenantAction action = new DeleteHuaweiIMasterTenantAction();
action.uuid = "082fa02e39d53778a21a7e86b044ce17";
action.sdnControllerUuid = "2969528393513dcb812b38947a2ff3bc";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteHuaweiIMasterTenantAction.Result res = action.call();
```

 Python SDK

```
DeleteHuaweiIMasterTenantAction action = DeleteHuaweiIMasterTenantAction()
action.uuid = "082fa02e39d53778a21a7e86b044ce17"
action.sdnControllerUuid = "2969528393513dcb812b38947a2ff3bc"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteHuaweiIMasterTenantAction.Result res = action.call()
```

---

#### 查询华为SDN租户(QueryHuaweiIMasterTenant)



##### API请求

 URLs

```
GET zstack/v1/sdn-controller/huawei-imaster/tenants
GET zstack/v1/sdn-controller/huawei-imaster/tenants/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/tenants?q=uuid=a611c5dc7e463ffaab957ebfc51e2afe
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/tenants/756bdfbf03b336f8863fa39595ffb7ca
```



可查询字段

运行CLI命令行工具，输入QueryHuaweiIMasterTenant并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4ca38813eb493b34a95f9f506c97f92d",
      "name": "tenant1",
      "description": "sdn for test",
      "fabricIds": [
        "5c9a525042c53d559350692d45de92b3"
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 操作是否成功 | 5.4.0 |
| inventories | List | 详情参考[inventories] | 5.4.0 |
| error | ErrorCode | 详情参考[error] | 5.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.4.0 |
| description | String | 错误的概要描述 | 5.4.0 |
| details | String | 错误的详细信息 | 5.4.0 |
| elaboration | String | 保留字段，默认为null | 5.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| fabricIds | String |  | 5.4.0 |
| sdnControllerUuid | String |  | 5.4.0 |
| deleted | Boolean |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |



##### SDK示例

 Java SDK

```
QueryHuaweiIMasterTenantAction action = new QueryHuaweiIMasterTenantAction();
action.conditions = asList("uuid=d57c6fedabbf3a5b91e543f5cf1c9980");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHuaweiIMasterTenantAction.Result res = action.call();
```

 Python SDK

```
QueryHuaweiIMasterTenantAction action = QueryHuaweiIMasterTenantAction()
action.conditions = ["uuid=3295ba081400315ea46f1f074b850933"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHuaweiIMasterTenantAction.Result res = action.call()
```

---

#### 删除华为SDN VPC(DeleteHuaweiIMasterVpc)



##### API请求

 URLs

```
DELETE zstack/v1/sdn-controller/huawei-imaster/vpcs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vpcs/7daed678898c31968176551f0b718ab6
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.0 |
| sdnControllerUuid | String | body |  |  | 5.4.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.4.0 |
| systemTags(可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |



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
DeleteHuaweiIMasterVpcAction action = new DeleteHuaweiIMasterVpcAction();
action.uuid = "7daed678898c31968176551f0b718ab6";
action.sdnControllerUuid = "34bab7bf172633e78e54fdefdc5c0b6e";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteHuaweiIMasterVpcAction.Result res = action.call();
```

 Python SDK

```
DeleteHuaweiIMasterVpcAction action = DeleteHuaweiIMasterVpcAction()
action.uuid = "7daed678898c31968176551f0b718ab6"
action.sdnControllerUuid = "34bab7bf172633e78e54fdefdc5c0b6e"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteHuaweiIMasterVpcAction.Result res = action.call()
```

---

#### 查询华为SDN VPC(QueryHuaweiIMasterVpc)



##### API请求

 URLs

```
GET zstack/v1/sdn-controller/huawei-imaster/vpcs
GET zstack/v1/sdn-controller/huawei-imaster/vpcs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vpcs?q=uuid=94ca3286f3e43125a09243d352c9428d
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/vpcs/e1101c95aee93111bc47ce3b83727169
```



可查询字段

运行CLI命令行工具，输入QueryHuaweiIMasterVpc并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "1e7388c5359a3809b87bfe9c9c891061",
      "name": "vpc1",
      "description": "vpc for test",
      "tenantId": "07b9992d75a635619bac0bac52aac5bd",
      "fabricId": "a5bfb6a007c5380bb244975552fd9528"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 操作是否成功 | 5.4.0 |
| inventories | List | 详情参考[inventories] | 5.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.4.0 |
| description | String | 错误的概要描述 | 5.4.0 |
| details | String | 错误的详细信息 | 5.4.0 |
| elaboration | String | 保留字段，默认为null | 5.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| tenantId | String | 租户标识符 | 5.4.0 |
| fabricId | String | fabric标识符 | 5.4.0 |
| sdnControllerUuid | String | SDN控制器UUID | 5.4.0 |
| deleted | Boolean | 删除标记 | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |



##### SDK示例

 Java SDK

```
QueryHuaweiIMasterVpcAction action = new QueryHuaweiIMasterVpcAction();
action.conditions = asList("uuid=1949ad5872293963b8bc71047b5efa71");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHuaweiIMasterVpcAction.Result res = action.call();
```

 Python SDK

```
QueryHuaweiIMasterVpcAction action = QueryHuaweiIMasterVpcAction()
action.conditions = ["uuid=af61d2ecb4f93f98b0d75c7e1c3cff25"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHuaweiIMasterVpcAction.Result res = action.call()
```

---

#### 删除华为SDN Fabric(DeleteHuaweiIMasterFabric)



##### API请求

 URLs

```
DELETE zstack/v1/sdn-controller/huawei-imaster/fabrics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/fabrics/1aa09d25169430c2a01ec3f1b6f1ff67
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.0 |
| sdnControllerUuid (可选) | String | body |  |  | 5.4.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |



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
DeleteHuaweiIMasterFabricAction action = new DeleteHuaweiIMasterFabricAction();
action.uuid = "1aa09d25169430c2a01ec3f1b6f1ff67";
action.sdnControllerUuid = "7b50926063c439b4ba2b2da766b6dc67";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteHuaweiIMasterFabricAction.Result res = action.call();
```

 Python SDK

```
DeleteHuaweiIMasterFabricAction action = DeleteHuaweiIMasterFabricAction()
action.uuid = "1aa09d25169430c2a01ec3f1b6f1ff67"
action.sdnControllerUuid = "7b50926063c439b4ba2b2da766b6dc67"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteHuaweiIMasterFabricAction.Result res = action.call()
```

---

#### 查询华为SDN Fabric(QueryHuaweiIMasterFabric)



##### API请求

 URLs

```
GET zstack/v1/sdn-controller/huawei-imaster/fabrics
GET zstack/v1/sdn-controller/huawei-imaster/fabrics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/fabrics?q=uuid=838b4d7e1c6937b08065c471fcdb5d03
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/fabrics/99e0f6310d3f3a75ad1856fff8014061
```



可查询字段

运行CLI命令行工具，输入QueryHuaweiIMasterFabric并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "74c62e19bc8f3792979d2d70b7af53a4",
      "name": "fabric",
      "description": "fabric for test"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.0 |
| inventories | List | 详情参考[inventories] | 5.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.4.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| sdnControllerUuid | String | SDN控制器UUID | 5.4.0 |
| deleted | Boolean | 删除标记 | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |



##### SDK示例

 Java SDK

```
QueryHuaweiIMasterFabricAction action = new QueryHuaweiIMasterFabricAction();
action.conditions = asList("uuid=f9aae037a6cf38b68374e7b1c8d3e65b");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryHuaweiIMasterFabricAction.Result res = action.call();
```

 Python SDK

```
QueryHuaweiIMasterFabricAction action = QueryHuaweiIMasterFabricAction()
action.conditions = ["uuid=1b1c880dd7f43329affa520bfcbe635b"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryHuaweiIMasterFabricAction.Result res = action.call()
```

---

#### 重连SDN控制器(ReconnectSdnController)



##### API请求

 URLs

```
PUT zstack/v1/sdn-controllers/{sdnControllerUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectSdnController": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectSdnController":{}}' http://localhost:8080/zstack/v1/sdn-controllers/911e4bc69d453bf89aae865ea6878263/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sdnControllerUuid | String | url |  |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "65eede773d4a340681558318aabdc6a5",
    "vendorType": "H3C VCFC",
    "name": "sdn-1",
    "description": "sdn controller from vendor",
    "ip": "192.168.1.1",
    "username": "admin",
    "password": "password"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vendorType | String |  | 3.7.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| ip | String |  | 3.7.0 |
| username | String |  | 3.7.0 |
| password | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.3.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.3.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | SDN控制器Uuid | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.3.0 |
| vtepIp | String | 物理机VTEP IP | 5.3.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.3.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.3.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.3.0 |
| bondMode | String | 物理机网卡bond模式 | 5.3.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.3.0 |

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
ReconnectSdnControllerAction action = new ReconnectSdnControllerAction();
action.sdnControllerUuid = "911e4bc69d453bf89aae865ea6878263";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReconnectSdnControllerAction.Result res = action.call();
```

 Python SDK

```
ReconnectSdnControllerAction action = ReconnectSdnControllerAction()
action.sdnControllerUuid = "911e4bc69d453bf89aae865ea6878263"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReconnectSdnControllerAction.Result res = action.call()
```

---

#### 更新SDN控制器(UpdateSdnController)



##### API请求

 URLs

```
PUT zstack/v1/sdn-controllers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSdnController": {
    "name": "Test-Net",
    "description": "Test"
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
-X PUT -d '{"updateSdnController":{"name":"Test-Net","description":"Test"}}' http://localhost:8080/zstack/v1/sdn-controllers/4a39301758b13cda968bdcd866452d14/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| name (可选) | String | body(包含在**updateSdnController**结构中) | 资源名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**updateSdnController**结构中) | 资源的详细描述 |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "722428da8bac30d2b75daa2f6cd34e9d",
    "vendorType": "H3C VCFC",
    "name": "sdn-1",
    "description": "sdn controller from vendor",
    "ip": "192.168.1.1",
    "username": "admin",
    "password": "password"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 3.7.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7 |
| vendorType | String |  | 3.7 |
| vendorVersion | String | 厂商版本 | 5.4 |
| name | String | 资源名称 | 3.7 |
| description | String | 资源的详细描述 | 3.7 |
| ip | String |  | 3.7 |
| username | String |  | 3.7 |
| password | String |  | 3.7 |
| createDate | Timestamp | 创建时间 | 3.7 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |



##### SDK示例

 Java SDK

```
UpdateSdnControllerAction action = new UpdateSdnControllerAction();
action.uuid = "4a39301758b13cda968bdcd866452d14";
action.name = "Test-Net";
action.description = "Test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSdnControllerAction.Result res = action.call();
```

 Python SDK

```
UpdateSdnControllerAction action = UpdateSdnControllerAction()
action.uuid = "4a39301758b13cda968bdcd866452d14"
action.name = "Test-Net"
action.description = "Test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSdnControllerAction.Result res = action.call()
```

---

#### 拉取华为SDN最新配置(PullHuaweiIMasterController)



##### API请求

 URLs

```
PUT zstack/v1/sdn-controller/huawei-imaster/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "pullHuaweiIMasterController": {
    "pullSwitch": false
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
-X PUT -d '{"pullHuaweiIMasterController":{"pullSwitch":false}}' http://localhost:8080/zstack/v1/sdn-controller/huawei-imaster/10b101c6b2583c1ab6a08c4ea6962d6a/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.0 |
| pullSwitch (可选) | boolean | body(包含在**pullHuaweiIMasterController**结构中) | 是否拉取交换机信息 |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.0 |



##### API返回

 返回示例

```
{
  "inventories": []
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.0 |
| inventories | List | 详情参考[inventories] | 5.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.4.0 |
| description | String | 错误的概要描述 | 5.4.0 |
| details | String | 错误的详细信息 | 5.4.0 |
| elaboration | String | 保留字段，默认为null | 5.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| vendorType | String |  | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| ip | String |  | 5.4.0 |
| username | String |  | 5.4.0 |
| password | String |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| fabrics | List | 详情参考[fabrics] | 5.4.0 |
| tenants | List | 详情参考[tenants] | 5.4.0 |
| vpcs | List | 详情参考[vpcs] | 5.4.0 |
| vrouters | List | 详情参考[vrouters] | 5.4.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.4.0 |
| vniRanges | List | 详情参考[vniRanges] | 5.4.0 |
| vxlanPools | List | 详情参考[vxlanPools] | 5.4.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.4.0 |

 #fabrics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| sdnControllerUuid | String | SDN控制器UUID | 5.4.0 |
| deleted | Boolean | 删除标记 | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |

 #tenants

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| fabricIds | String |  | 5.4.0 |
| sdnControllerUuid | String |  | 5.4.0 |
| deleted | Boolean |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |

 #vpcs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| tenantId | String | 租户标识符 | 5.4.0 |
| fabricId | String | fabric标识符 | 5.4.0 |
| sdnControllerUuid | String | SDN控制器UUID | 5.4.0 |
| deleted | Boolean | 删除标记 | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |

 #vrouters

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| logicalNetworkId | String |  | 5.4.0 |
| tenantId | String |  | 5.4.0 |
| fabricUuid | String |  | 5.4.0 |
| deleted | Boolean |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.4.0 |
| Connected | SdnControllerStatus | 已连接 | 5.4.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.4.0 |

 #vniRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| startVni | Integer |  | 5.4.0 |
| endVni | Integer |  | 5.4.0 |

 #vxlanPools

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String |  | 5.4.0 |
| attachedCidrs | Map |  | 5.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| zoneUuid | String | 区域UUID | 5.4.0 |
| physicalInterface | String |  | 5.4.0 |
| type | String |  | 5.4.0 |
| vSwitchType | String |  | 5.4.0 |
| virtualNetworkId | Integer |  | 5.4.0 |
| isolated | Boolean |  | 5.4.0 |
| pvlan | String |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| attachedClusterUuids | List |  | 5.4.0 |
| attachedVtepRefs | List | 详情参考[attachedVtepRefs] | 5.4.0 |
| remoteVteps | List | 详情参考[remoteVteps] | 5.4.0 |
| attachedVxlanNetworkRefs | List | 详情参考[attachedVxlanNetworkRefs] | 5.4.0 |
| attachedVniRanges | List | 详情参考[attachedVniRanges] | 5.4.0 |

 #attachedVtepRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| hostUuid | String | 物理机UUID | 5.4.0 |
| vtepIp | String |  | 5.4.0 |
| port | Integer |  | 5.4.0 |
| type | String |  | 5.4.0 |
| physicalInterface | String |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| poolUuid | String | VXLAN资源池UUID | 5.4.0 |

 #remoteVteps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| clusterUuid | String | 集群UUID | 5.4.0 |
| vtepIp | String | 隧道端点IP地址 | 5.4.0 |
| port | Integer | 端口 | 5.4.0 |
| type | String | 类型 | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| poolUuid | String | VXLAN资源池UUID | 5.4.0 |

 #attachedVxlanNetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vni | Integer | Vni号 | 5.4.0 |
| poolUuid | String | VXLAN资源池UUID | 5.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| zoneUuid | String | 区域UUID | 5.4.0 |
| physicalInterface | String | 物理网卡 | 5.4.0 |
| type | String | 二层网络类型 | 5.4.0 |
| vSwitchType | String |  | 5.4.0 |
| virtualNetworkId | Integer |  | 5.4.0 |
| isolated | Boolean |  | 5.4.0 |
| pvlan | String |  | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| attachedClusterUuids | List | 挂载集群的UUID列表 | 5.4.0 |

 #attachedVniRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| name | String | 资源名称 | 5.4.0 |
| description | String | 资源的详细描述 | 5.4.0 |
| startVni | Integer | 起始Vni | 5.4.0 |
| endVni | Integer | 结束Vni | 5.4.0 |
| createDate | Timestamp | 创建时间 | 5.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.0 |
| l2NetworkUuid | String | 二层网络UUID | 5.4.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | 资源的UUID，唯一标示该资源 | 5.4.0 |
| hostUuid | String | 物理机UUID | 5.4.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.4.0 |
| vtepIp | String | 物理机VTEP IP | 5.4.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.4.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.4.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.4.0 |
| bondMode | String | 物理机网卡bond模式 | 5.4.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.4.0 |



##### SDK示例

 Java SDK

```
PullHuaweiIMasterControllerAction action = new PullHuaweiIMasterControllerAction();
action.uuid = "10b101c6b2583c1ab6a08c4ea6962d6a";
action.pullSwitch = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PullHuaweiIMasterControllerAction.Result res = action.call();
```

 Python SDK

```
PullHuaweiIMasterControllerAction action = PullHuaweiIMasterControllerAction()
action.uuid = "10b101c6b2583c1ab6a08c4ea6962d6a"
action.pullSwitch = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PullHuaweiIMasterControllerAction.Result res = action.call()
```

---

#### SDN控制器绑定物理机(SdnControllerAddHost)



##### API请求

 URLs

```
POST zstack/v1/sdn-controllers/{sdnControllerUuid}/hosts/{hostUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST http://localhost:8080/zstack/v1/sdn-controllers/13dced0afb8d3bb4ad238eb476eca64e/hosts/1f4e13ef459c39968a10f79cc5905ea4
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sdnControllerUuid | String | url | SDN控制器UUID |  | 5.3.0 |
| hostUuid | String | url | 物理机UUID |  | 5.3.0 |
| vSwitchType (可选) | String | body | 虚拟交换机类型 | OvsKernel OvsDpdk SRIOV | 5.3.0 |
| nicNames | List | body | 物理机网卡名称列表 |  | 5.3.0 |
| vtepIp (可选) | String | body | 物理机VTEP IP |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |
| netmask (可选) | String | body | 物理机VTEP IP掩码 |  | 5.3.0 |
| bondMode (可选) | String | body | 物理机网卡bond模式 |  | 5.3.0 |
| lacpMode (可选) | String | body | 物理机网卡LACP模式 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2b317c278d253df6bab1acd9b293d957",
    "vendorType": "H3C VCFC",
    "name": "sdn-1",
    "description": "sdn controller from vendor",
    "ip": "192.168.1.1",
    "username": "admin",
    "password": "password"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vendorType | String |  | 3.7.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| ip | String |  | 3.7.0 |
| username | String |  | 3.7.0 |
| password | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.3.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.3.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | SDN控制器Uuid | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.3.0 |
| vtepIp | String | 物理机VTEP IP | 5.3.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.3.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.3.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.3.0 |
| bondMode | String | 物理机网卡bond模式 | 5.3.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.3.0 |

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
SdnControllerAddHostAction action = new SdnControllerAddHostAction();
action.sdnControllerUuid = "13dced0afb8d3bb4ad238eb476eca64e";
action.hostUuid = "1f4e13ef459c39968a10f79cc5905ea4";
action.vSwitchType = "H3C VCFC";
action.vtepIp = "192.168.1.101";
action.netmask = "ens1 ens2";
action.bondMode = "active-backup";
action.lacpMode = "off";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SdnControllerAddHostAction.Result res = action.call();
```

 Python SDK

```
SdnControllerAddHostAction action = SdnControllerAddHostAction()
action.sdnControllerUuid = "13dced0afb8d3bb4ad238eb476eca64e"
action.hostUuid = "1f4e13ef459c39968a10f79cc5905ea4"
action.vSwitchType = "H3C VCFC"
action.vtepIp = "192.168.1.101"
action.netmask = "ens1 ens2"
action.bondMode = "active-backup"
action.lacpMode = "off"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SdnControllerAddHostAction.Result res = action.call()
```

---

#### SDN控制器更改物理机(SdnControllerChangeHost)



##### API请求

 URLs

```
PUT zstack/v1/sdn-controllers/{sdnControllerUuid}/hosts/{hostUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "sdnControllerChangeHost": {
    "vSwitchType": "H3C VCFC",
    "vtepIp": "192.168.1.101",
    "netmask": "ens1 ens2",
    "bondMode": "active-backup",
    "lacpMode": "off"
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
-X PUT -d '{"sdnControllerChangeHost":{"vSwitchType":"H3C VCFC","vtepIp":"192.168.1.101","netmask":"ens1 ens2","bondMode":"active-backup","lacpMode":"off"}}' http://localhost:8080/zstack/v1/sdn-controllers/51a894d84f22366eb0ff853748f7cb1d/hosts/772b68aff57f3bbb82c40d569d6bc76a/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sdnControllerUuid | String | url | SDN控制器UUID |  | 5.3.0 |
| hostUuid | String | url | 物理机UUID |  | 5.3.0 |
| vSwitchType (可选) | String | body(包含在**sdnControllerChangeHost**结构中) | 虚拟交换机类型 | OvnDpdk OvnKernel | 5.3.0 |
| nicNames (可选) | List | body(包含在**sdnControllerChangeHost**结构中) | 物理机网卡名称列表 |  | 5.3.0 |
| vtepIp (可选) | String | body(包含在**sdnControllerChangeHost**结构中) | 物理机VTEP IP |  | 5.3.0 |
| netmask (可选) | String | body(包含在**sdnControllerChangeHost**结构中) | 物理机VTEP IP掩码 |  | 5.3.0 |
| bondMode (可选) | String | body(包含在**sdnControllerChangeHost**结构中) | 物理机网卡bond模式 |  | 5.3.0 |
| lacpMode (可选) | String | body(包含在**sdnControllerChangeHost**结构中) | 物理机网卡LACP模式 |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b2d35464d0db3362b605c1e79814f237",
    "vendorType": "H3C VCFC",
    "name": "sdn-1",
    "description": "sdn controller from vendor",
    "ip": "192.168.1.1",
    "username": "admin",
    "password": "password"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vendorType | String |  | 3.7.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| ip | String |  | 3.7.0 |
| username | String |  | 3.7.0 |
| password | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.3.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.3.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | SDN控制器UUID | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.3.0 |
| vtepIp | String | 物理机VTEP IP | 5.3.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.3.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.3.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.3.0 |
| bondMode | String | 物理机网卡bond模式 | 5.3.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.3.0 |

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
SdnControllerChangeHostAction action = new SdnControllerChangeHostAction();
action.sdnControllerUuid = "51a894d84f22366eb0ff853748f7cb1d";
action.hostUuid = "772b68aff57f3bbb82c40d569d6bc76a";
action.vSwitchType = "H3C VCFC";
action.vtepIp = "192.168.1.101";
action.netmask = "ens1 ens2";
action.bondMode = "active-backup";
action.lacpMode = "off";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SdnControllerChangeHostAction.Result res = action.call();
```

 Python SDK

```
SdnControllerChangeHostAction action = SdnControllerChangeHostAction()
action.sdnControllerUuid = "51a894d84f22366eb0ff853748f7cb1d"
action.hostUuid = "772b68aff57f3bbb82c40d569d6bc76a"
action.vSwitchType = "H3C VCFC"
action.vtepIp = "192.168.1.101"
action.netmask = "ens1 ens2"
action.bondMode = "active-backup"
action.lacpMode = "off"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SdnControllerChangeHostAction.Result res = action.call()
```

---

#### SDN控制器解绑物理机 (SdnControllerRemoveHost)



##### API请求

 URLs

```
DELETE zstack/v1/sdn-controllers/{sdnControllerUuid}/hosts/{hostUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sdn-controllers/2adbaedc05a03129bd055ba7a3f045cc/hosts/1fb1da4d101335b2b981f0b107ac7ba8
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sdnControllerUuid | String | url | SDN控制器UUID |  | 5.3.0 |
| hostUuid | String | url | 物理机UUID |  | 5.3.0 |
| vSwitchType (可选) | String | body | 虚拟交换机类型 | OvnDpdk OvnKernel | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5aedd20ff2883bca8bdcc0dd7a46e779",
    "vendorType": "H3C VCFC",
    "name": "sdn-1",
    "description": "sdn controller from vendor",
    "ip": "192.168.1.1",
    "username": "admin",
    "password": "password"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.0 |
| inventory | SdnControllerInventory | 详情参考[inventory] | 5.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vendorType | String |  | 3.7.0 |
| vendorVersion | String | 厂商版本 | 5.4.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| ip | String |  | 3.7.0 |
| username | String |  | 3.7.0 |
| password | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| status | SdnControllerStatus | 详情参考[status] | 5.3.0 |
| hostRefs | List | 详情参考[hostRefs] | 5.3.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connecting | SdnControllerStatus | 连接中 | 5.3.0 |
| Connected | SdnControllerStatus | 已连接 | 5.3.0 |
| Disconnected | SdnControllerStatus | 已失联 | 5.3.0 |

 #hostRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sdnControllerUuid | String | SDN控制器UUID | 5.3.0 |
| hostUuid | String | 物理机UUID | 5.3.0 |
| vSwitchType | String | 虚拟交换机类型 | 5.3.0 |
| vtepIp | String | 物理机VTEP IP | 5.3.0 |
| nicPciAddresses | String | 物理机网卡和PCI地址映射 | 5.3.0 |
| nicDrivers | String | 物理机网卡和驱动类型映射 | 5.3.0 |
| netmask | String | 物理机VTEP IP掩码 | 5.3.0 |
| bondMode | String | 物理机网卡bond模式 | 5.3.0 |
| lacpMode | String | 物理机网卡LACP模式 | 5.3.0 |

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
SdnControllerRemoveHostAction action = new SdnControllerRemoveHostAction();
action.sdnControllerUuid = "2adbaedc05a03129bd055ba7a3f045cc";
action.hostUuid = "1fb1da4d101335b2b981f0b107ac7ba8";
action.vSwitchType = "OvnDpdk";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SdnControllerRemoveHostAction.Result res = action.call();
```

 Python SDK

```
SdnControllerRemoveHostAction action = SdnControllerRemoveHostAction()
action.sdnControllerUuid = "2adbaedc05a03129bd055ba7a3f045cc"
action.hostUuid = "1fb1da4d101335b2b981f0b107ac7ba8"
action.vSwitchType = "OvnDpdk"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SdnControllerRemoveHostAction.Result res = action.call()
```

---

#### 创建OVN控制器规格(CreateOvnControllerOffering)



##### API请求

 URLs

```
POST zstack/v1/instance-offerings/ovn
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "9ea522ec01fc3da286fa47b8a60a0824",
    "managementNetworkUuid": "3302e9bed4e33ab68912cf3d75fcc749",
    "imageUuid": "c2e0cc0faa713de795a079ad7b6470d0",
    "name": "ovn-Offering",
    "cpuNum": 2,
    "memorySize": 1024,
    "reservedMemorySize": 0,
    "sortKey": 0,
    "type": "Ovn"
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
-X POST -d '{"params":{"zoneUuid":"9ea522ec01fc3da286fa47b8a60a0824","managementNetworkUuid":"3302e9bed4e33ab68912cf3d75fcc749","imageUuid":"c2e0cc0faa713de795a079ad7b6470d0","name":"ovn-Offering","cpuNum":2,"memorySize":1024,"reservedMemorySize":0,"sortKey":0,"type":"Ovn"}}' http://localhost:8080/zstack/v1/instance-offerings/ovn
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 5.3.20 |
| managementNetworkUuid | String | body(包含在**params**结构中) | 管理网UUID |  | 5.3.20 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID |  | 5.3.20 |
| name | String | body(包含在**params**结构中) | 规格名称 |  | 5.3.20 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.3.20 |
| cpuNum | int | body(包含在**params**结构中) | CPU数目 |  | 5.3.20 |
| memorySize | long | body(包含在**params**结构中) | 内存大小，单位Byte |  | 5.3.20 |
| reservedMemorySize (可选) | long | body(包含在**params**结构中) |  |  | 5.3.20 |
| allocatorStrategy (可选) | String | body(包含在**params**结构中) | 分配策略 |  | 5.3.20 |
| sortKey (可选) | int | body(包含在**params**结构中) |  |  | 5.3.20 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 5.3.20 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.3.20 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.3.20 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.20 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.20 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3b0af4671cc93f619ef326a3c99d825c",
    "name": "instanceOffering1",
    "cpuNum": 2,
    "cpuSpeed": 1,
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
| success | Boolean |  | 5.3.20 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败，操作成功时该字段为null。 详情参考[error] | 5.3.20 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 5.3.20 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.20 |
| name | String | 资源名称 | 5.3.20 |
| description | String | 资源的详细描述 | 5.3.20 |
| cpuNum | Integer | CPU数量 | 5.3.20 |
| cpuSpeed | Integer | CPU速度 | 5.3.20 |
| memorySize | Long | 内存大小 | 5.3.20 |
| type | String | 类型 | 5.3.20 |
| allocatorStrategy | String | 分配策略 | 5.3.20 |
| sortKey | Integer |  | 5.3.20 |
| createDate | Timestamp | 创建时间 | 5.3.20 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.20 |
| state | String | 状态（启用，禁用） | 5.3.20 |



##### SDK示例

 Java SDK

```
CreateOvnControllerOfferingAction action = new CreateOvnControllerOfferingAction();
action.zoneUuid = "9ea522ec01fc3da286fa47b8a60a0824";
action.managementNetworkUuid = "3302e9bed4e33ab68912cf3d75fcc749";
action.imageUuid = "c2e0cc0faa713de795a079ad7b6470d0";
action.name = "ovn-Offering";
action.cpuNum = 2;
action.memorySize = 1024;
action.reservedMemorySize = 0;
action.sortKey = 0;
action.type = "Ovn";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateOvnControllerOfferingAction.Result res = action.call();
```

 Python SDK

```
CreateOvnControllerOfferingAction action = CreateOvnControllerOfferingAction()
action.zoneUuid = "9ea522ec01fc3da286fa47b8a60a0824"
action.managementNetworkUuid = "3302e9bed4e33ab68912cf3d75fcc749"
action.imageUuid = "c2e0cc0faa713de795a079ad7b6470d0"
action.name = "ovn-Offering"
action.cpuNum = 2
action.memorySize = 1024
action.reservedMemorySize = 0
action.sortKey = 0
action.type = "Ovn"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateOvnControllerOfferingAction.Result res = action.call()
```

---

#### 创建NFV实例规格(CreateNfvInstOffering)



##### API请求

 URLs

```
POST zstack/v1/instance-offerings/nfvinst
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "4e805d7b14bd3f14a91f94775beb12c9",
    "managementNetworkUuid": "8517112e29f13eac8470f918baac3edd",
    "imageUuid": "3db251b909a13775a8c80f6b76b34f0c",
    "name": "DEDICATED-SLB-Offering",
    "cpuNum": 2,
    "memorySize": 1024,
    "reservedMemorySize": 0,
    "sortKey": 0
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
-X POST -d '{"params":{"zoneUuid":"4e805d7b14bd3f14a91f94775beb12c9","managementNetworkUuid":"8517112e29f13eac8470f918baac3edd","imageUuid":"3db251b909a13775a8c80f6b76b34f0c","name":"DEDICATED-SLB-Offering","cpuNum":2,"memorySize":1024,"reservedMemorySize":0,"sortKey":0}}' \
http://localhost:8080/zstack/v1/instance-offerings/nfvinst
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| managementNetworkUuid | String | body(包含在**params**结构中) |  |  | 0.6 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID |  | 0.6 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| cpuNum | int | body(包含在**params**结构中) |  |  | 0.6 |
| memorySize | long | body(包含在**params**结构中) |  |  | 0.6 |
| allocatorStrategy (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| sortKey (可选) | int | body(包含在**params**结构中) |  |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| reservedMemorySize (可选) | long | body(包含在**params**结构中) |  |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3b0af4671cc93f619ef326a3c99d825c",
    "name": "instanceOffering1",
    "cpuNum": 2,
    "cpuSpeed": 1,
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
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
CreateNfvInstOfferingAction action = new CreateNfvInstOfferingAction();
action.zoneUuid = "4e805d7b14bd3f14a91f94775beb12c9";
action.managementNetworkUuid = "8517112e29f13eac8470f918baac3edd";
action.imageUuid = "3db251b909a13775a8c80f6b76b34f0c";
action.name = "DEDICATED-SLB-Offering";
action.cpuNum = 2;
action.memorySize = 1024;
action.reservedMemorySize = 0;
action.sortKey = 0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateNfvInstOfferingAction.Result res = action.call();
```

 Python SDK

```
CreateNfvInstOfferingAction action = CreateNfvInstOfferingAction()
action.zoneUuid = "4e805d7b14bd3f14a91f94775beb12c9"
action.managementNetworkUuid = "8517112e29f13eac8470f918baac3edd"
action.imageUuid = "3db251b909a13775a8c80f6b76b34f0c"
action.name = "DEDICATED-SLB-Offering"
action.cpuNum = 2
action.memorySize = 1024
action.reservedMemorySize = 0
action.sortKey = 0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateNfvInstOfferingAction.Result res = action.call()
```

---

#### 创建NFV实例(CreateNfvInst)



##### API请求

 URLs

```
POST zstack/v1/nfvinstgroup/inst
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "NfvInst",
    "nfvInstGroupUuid": "ebd1efff3ce534129170d32bcb7a8a1b",
    "description": "this is a nfv inst for test"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X POST -d '{"params":{"name":"NfvInst","nfvInstGroupUuid":"ebd1efff3ce534129170d32bcb7a8a1b","description":"this is a nfv inst for test"}}' \ \
http://localhost:8080/zstack/v1/nfvinstgroup/inst
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| nfvInstGroupUuid | String | body(包含在**params**结构中) |  |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 0.6 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | NfvInstInventory | 详情参考[inventory] | 0.6 |

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
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |



##### SDK示例

 Java SDK

```
CreateNfvInstAction action = new CreateNfvInstAction();
action.name = "NfvInst";
action.nfvInstGroupUuid = "ebd1efff3ce534129170d32bcb7a8a1b";
action.description = "this is a nfv inst for test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateNfvInstAction.Result res = action.call();
```

 Python SDK

```
CreateNfvInstAction action = CreateNfvInstAction()
action.name = "NfvInst"
action.nfvInstGroupUuid = "ebd1efff3ce534129170d32bcb7a8a1b"
action.description = "this is a nfv inst for test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateNfvInstAction.Result res = action.call()
```

---

#### 添加NFV实例到NFV组 (AttachNfvInstToGroup)



##### API请求

 URLs

```
PUT zstack/v1/nfvinstgroup/group/{groupUuid}/instances/{nfvInstUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "attachNfvInstToGroup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
 -X PUT -d '{"attachNfvInstToGroup":{}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/567d546382d33bd2b44b4b52f7109896/instances/5d9126e217473805b351c309279ee492/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | url |  |  | 5.4.2 |
| nfvInstUuid | String | url |  |  | 5.4.2 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.2 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ovn-controller-group",
    "uuid": "7f45e412407e3d66b967c74b10380d04",
    "description": "OVN SDN Controller HA Group",
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.2 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 5.4.2 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[funcType] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[operationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
AttachNfvInstToGroupAction action = new AttachNfvInstToGroupAction();
action.groupUuid = "567d546382d33bd2b44b4b52f7109896";
action.nfvInstUuid = "5d9126e217473805b351c309279ee492";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachNfvInstToGroupAction.Result res = action.call();
```

 Python SDK

```
AttachNfvInstToGroupAction action = AttachNfvInstToGroupAction()
action.groupUuid = "567d546382d33bd2b44b4b52f7109896"
action.nfvInstUuid = "5d9126e217473805b351c309279ee492"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachNfvInstToGroupAction.Result res = action.call()
```

---

#### 从NFV组删除实例(DetachNfvInstFromGroup)



##### API请求

 URLs

```
PUT zstack/v1/nfvinstgroup/group/{groupUuid}/instances/{nfvInstUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "detachNfvInstFromGroup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"detachNfvInstFromGroup":{}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/ac8a5781ccce3f099a7d99676f4bf518/instances/887cc8c54cfd3b9e8b58ec5e310a7bb0/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | url |  |  | 5.4.2 |
| nfvInstUuid | String | url |  |  | 5.4.2 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.2 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ovn-controller-group",
    "uuid": "e2c651d088a33695b8013aa49bba833c",
    "description": "OVN SDN Controller HA Group",
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.2 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 5.4.2 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[funcType] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[operationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
DetachNfvInstFromGroupAction action = new DetachNfvInstFromGroupAction();
action.groupUuid = "ac8a5781ccce3f099a7d99676f4bf518";
action.nfvInstUuid = "887cc8c54cfd3b9e8b58ec5e310a7bb0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachNfvInstFromGroupAction.Result res = action.call();
```

 Python SDK

```
DetachNfvInstFromGroupAction action = DetachNfvInstFromGroupAction()
action.groupUuid = "ac8a5781ccce3f099a7d99676f4bf518"
action.nfvInstUuid = "887cc8c54cfd3b9e8b58ec5e310a7bb0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachNfvInstFromGroupAction.Result res = action.call()
```

---

#### 重连NFV实例(ReconnectNfvInst)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/appliances/nfvinst/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectNfvInst": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectNfvInst":{}}' \
http://localhost:8080/zstack/v1/vm-instances/appliances/nfvinst/88eff88e87e63114a614f8d7ef6fee60/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "managementNetworkUuid": "47ba3309aba3352f9c0f2abd2168f9f6",
    "name": "Test-NfvInst",
    "description": "this is a nfv vm",
    "clusterUuid": "711ef65a8dab345bad1e456b3585f155",
    "imageUuid": "d0ee9f7493c332a6824007bccf785852",
    "instanceOfferingUuid": "dae6bdd8a3a83d63ae36bce0d5704afa"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ApplianceVmInventory | 详情参考[inventory] | 0.6 |

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
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

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
| usedIps | List | 详情参考[usedlps] | 4.7.13 |

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



##### SDK示例

 Java SDK

```
ReconnectNfvInstAction action = new ReconnectNfvInstAction();
action.vmInstanceUuid = "88eff88e87e63114a614f8d7ef6fee60";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReconnectNfvInstAction.Result res = action.call();
```

 Python SDK

```
ReconnectNfvInstAction action = ReconnectNfvInstAction()
action.vmInstanceUuid = "88eff88e87e63114a614f8d7ef6fee60"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReconnectNfvInstAction.Result res = action.call()
```

---

#### 部署NFV实例配置(ProvisionNfvInstConfig)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/appliances/nfvinst/{vmInstanceUuid}/provision
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "provisionNfvInstConfig": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"provisionNfvInstConfig":{}}' \
http://localhost:8080/zstack/v1/vm-instances/appliances/nfvinst/8dcbeddb685a30f5aea4d03b2bb97bf4/provision
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "managementNetworkUuid": "7e02d6549e333ee28bf03ce6a1cf88ab",
    "name": "Test-NfvInst",
    "description": "this is a nfv inst vm",
    "clusterUuid": "486d257fe1fc3a3ba4b84383fa6debb9",
    "imageUuid": "2f382f1546d534319d31f1473ddd682b",
    "instanceOfferingUuid": "62b777323fce30648d39ba2c061a64e0"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ApplianceVmInventory | 详情参考[inventory] | 0.6 |

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
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

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



##### SDK示例

 Java SDK

```
ProvisionNfvInstConfigAction action = new ProvisionNfvInstConfigAction();
action.vmInstanceUuid = "8dcbeddb685a30f5aea4d03b2bb97bf4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ProvisionNfvInstConfigAction.Result res = action.call();
```

 Python SDK

```
ProvisionNfvInstConfigAction action = ProvisionNfvInstConfigAction()
action.vmInstanceUuid = "8dcbeddb685a30f5aea4d03b2bb97bf4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ProvisionNfvInstConfigAction.Result res = action.call()
```

---

#### 创建NFV高可用组(CreateNfvInstGroup)



##### API请求

 URLs

```
POST zstack/v1/nfvinstgroup/group
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "nfvInstGroup",
    "instType": "KVM",
    "funcType": "DEDICATED_SLB"
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
-X POST -d '{"params":{"name":"nfvInstGroup","instType":"KVM","funcType":"DEDICATED_SLB"}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group
```

 参数列表
-

-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| instType | String | body(包含在**params**结构中) |  | KVM | 0.6 |
| funcType | String | body(包含在**params**结构中) |  | DEDICATED_SLB | 0.6 |
| monitorIps (可选) | List | body(包含在**params**结构中) |  |  | 0.6 |
| nfvInstOfferingUuid | String | body(包含在**params**结构中) |  |  | 0.6 |
| frontEndL3NetworkUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| backendL3NetworkUuids (可选) | List | body(包含在**params**结构中) |  |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| netOsDistro (可选) | String | body(包含在**params**结构中) |  |  | 5.4.2 |
| baseOsDistro (可选) | String | body(包含在**params**结构中) |  |  | 5.4.2 |
| vipUuid (可选) | String | body(包含在**params**结构中) | VIP UUID |  | 5.4.2 |
| ipv6VipUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.4.2 |
| primaryStorageUuid (可选) | String | body(包含在**params**结构中) | 主存储UUID |  | 5.4.2 |
| primaryStoragePoolUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.4.2 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 5.4.2 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[functype] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[OperationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
CreateNfvInstGroupAction action = new CreateNfvInstGroupAction();
action.name = "nfvInstGroup";
action.instType = "KVM";
action.funcType = "DEDICATED_SLB";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateNfvInstGroupAction.Result res = action.call();
```

 Python SDK

```
CreateNfvInstGroupAction action = CreateNfvInstGroupAction()
action.name = "nfvInstGroup"
action.instType = "KVM"
action.funcType = "DEDICATED_SLB"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateNfvInstGroupAction.Result res = action.call()
```

---

#### 删除NFV组(DeleteNfvInstGroup)



##### API请求

 URLs

```
DELETE zstack/v1/nfvinstgroup/group/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE \
http://localhost:8080/zstack/v1/nfvinstgroup/group/4161bb82e42332bd8a34cec6d4c3aedd
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 0.6 |
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
DeleteNfvInstGroupAction action = new DeleteNfvInstGroupAction();
action.uuid = "4161bb82e42332bd8a34cec6d4c3aedd";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteNfvInstGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteNfvInstGroupAction action = DeleteNfvInstGroupAction()
action.uuid = "4161bb82e42332bd8a34cec6d4c3aedd"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteNfvInstGroupAction.Result res = action.call()
```

---

#### 部署NFV组(ProvisionNfvInstGroup)



##### API请求

 URLs

```
PUT zstack/v1/nfvinstgroup/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "provisionNfvInstGroup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"provisionNfvInstGroup":{}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/f35f1cb6eb9037158a17e2b94d6f3655/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.2 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.2 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ovn-controller-group",
    "uuid": "5373205b70163c54b333c2af3a3ab3d0",
    "description": "OVN SDN Controller HA Group",
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.2 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 5.4.2 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[funcType] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[operationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
ProvisionNfvInstGroupAction action = new ProvisionNfvInstGroupAction();
action.uuid = "f35f1cb6eb9037158a17e2b94d6f3655";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ProvisionNfvInstGroupAction.Result res = action.call();
```

 Python SDK

```
ProvisionNfvInstGroupAction action = ProvisionNfvInstGroupAction()
action.uuid = "f35f1cb6eb9037158a17e2b94d6f3655"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ProvisionNfvInstGroupAction.Result res = action.call()
```

---

#### 更新NFV组(UpdateNfvInstGroup)



##### API请求

 URLs

```
PUT zstack/v1/nfvinstgroup/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateNfvInstGroup": {
    "name": "nfvInstGroup-1",
    "description": "nfv inst group test"
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
-X PUT -d '{"updateNfvInstGroup":{"name":"nfvInstGroup-1","description":"nfv inst group test"}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/ff57ab6e79613a40b7e55d38e3069ea5/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5 |
| name (可选) | String | body(包含在**updateNfvInstGroup**结构中) | 资源名称 |  | 5.5 |
| description (可选) | String | body(包含在**updateNfvInstGroup**结构中) | 资源的详细描述 |  | 5.5 |
| systemTags (可选) | List | body |  |  | 5.5 |
| userTags (可选) | List | body |  |  | 5.5 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-nfvinstgroup",
    "uuid": "ca9371db50593f2786205e163e5e99d6",
    "description": "nfv inst group description",
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.2 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 5.4.2 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[funcType] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[operationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
UpdateNfvInstGroupAction action = new UpdateNfvInstGroupAction();
action.uuid = "ff57ab6e79613a40b7e55d38e3069ea5";
action.name = "nfvInstGroup-1";
action.description = "nfv inst group test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateNfvInstGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateNfvInstGroupAction action = UpdateNfvInstGroupAction()
action.uuid = "ff57ab6e79613a40b7e55d38e3069ea5"
action.name = "nfvInstGroup-1"
action.description = "nfv inst group test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateNfvInstGroupAction.Result res = action.call()
```

---

#### 同步NFV组(SyncNfvInstGroup)



##### API请求

 URLs

```
PUT zstack/v1/nfvinstgroup/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncNfvInstGroup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
X PUT -d '{"syncNfvInstGroup":{}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/f6befd7f753634faba06ac3c4391b9ca/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.2 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.2 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ovn-controller-group",
    "uuid": "021818d61ed638b9913d79422dd33d4a",
    "description": "OVN SDN Controller HA Group",
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.2 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 5.4.2 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[funcType] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[operationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| usedIps | List | 详情参考[usedlps] | 4.7.13 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
SyncNfvInstGroupAction action = new SyncNfvInstGroupAction();
action.uuid = "f6befd7f753634faba06ac3c4391b9ca";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncNfvInstGroupAction.Result res = action.call();
```

 Python SDK

```
SyncNfvInstGroupAction action = SyncNfvInstGroupAction()
action.uuid = "f6befd7f753634faba06ac3c4391b9ca"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncNfvInstGroupAction.Result res = action.call()
```

---

#### 添加L3网络到NVF组(AddL3NetworkToGroup)



##### API请求

 URLs

```
POST zstack/v1/nfvinstgroup/group/{nfvInstGroupUuid}/service/{networkServiceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "frontEndL3NetworkUuid": "2353b0e1eaf430dca4b3024c238e455f"
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
-X POST -d '{"params":{"frontEndL3NetworkUuid":"2353b0e1eaf430dca4b3024c238e455f"}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/0c2382cd771b33279d44695f721fc791/service/cdb5f49b42503212a1b7b2eb77ca3e93
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| nfvInstGroupUuid | String | url |  |  | 0.6 |
| networkServiceUuid | String | url |  |  | 0.6 |
| frontEndL3NetworkUuid | String | body(包含在**params**结构中) |  |  | 0.6 |
| backendL3NetworkUuids | List | body(包含在**params**结构中) |  |  | 0.6 |
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
AddL3NetworkToGroupAction action = new AddL3NetworkToGroupAction();
action.nfvInstGroupUuid = "0c2382cd771b33279d44695f721fc791";
action.networkServiceUuid = "cdb5f49b42503212a1b7b2eb77ca3e93";
action.frontEndL3NetworkUuid = "2353b0e1eaf430dca4b3024c238e455f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddL3NetworkToGroupAction.Result res = action.call();
```

 Python SDK

```
AddL3NetworkToGroupAction action = AddL3NetworkToGroupAction()
action.nfvInstGroupUuid = "0c2382cd771b33279d44695f721fc791"
action.networkServiceUuid = "cdb5f49b42503212a1b7b2eb77ca3e93"
action.frontEndL3NetworkUuid = "2353b0e1eaf430dca4b3024c238e455f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddL3NetworkToGroupAction.Result res = action.call()
```

---

#### 修改NFV组的操作模式 (ChangeNfvInstGroupOperationMode)



##### API请求

 URLs

```
PUT zstack/v1/nfvinstgroup/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeNfvInstGroupOperationMode": {
    "operationMode": "Maintenance"
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
-X PUT -d '{"changeNfvInstGroupOperationMode":{"operationMode":"Maintenance"}}' \
http://localhost:8080/zstack/v1/nfvinstgroup/group/1dd069e761853e6f83d146e08fc988b7/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.2 |
| operationMode | String | body(包含在**changeNfvInstGroupOperationMode**结构中) |  | Normal Maintenance | 5.4.2 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.2 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "ovn-controller-group",
    "uuid": "db47a6637d2731d9b9469505c468a098",
    "description": "OVN SDN Controller HA Group",
    "configVersion": 0,
    "l3Networks": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | NfvInstGroupInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| nfvInstOfferingUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| vipUuid | String | VIP UUID | 5.4.2 |
| ipv6VipUuid | String |  | 5.4.2 |
| primaryStorageUuid | String | 主存储UUID | 5.4.2 |
| primaryStoragePoolUuid | String |  | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| instType | InstType | 详情参考[instType] | 5.4.2 |
| funcType | FuncType | 详情参考[funcType] | 5.4.2 |
| status | NfvInstGroupStatus | 详情参考[status] | 5.4.2 |
| operationMode | NfvInstGroupOperationMode | 详情参考[operationMode] | 5.4.2 |
| instances | List | 详情参考[instances] | 5.4.2 |
| monitors | List | 详情参考[monitors] | 5.4.2 |
| services | List | 详情参考[services] | 5.4.2 |
| configTasks | List | 详情参考[configTasks] | 5.4.2 |
| l3Networks | List | 详情参考[l3Networks] | 5.4.2 |

 #instType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| KVM | InstType |  | 5.4.2 |
| CONTAINER | InstType |  | 5.4.2 |
| HOST | InstType |  | 5.4.2 |

 #funcType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OVN_SDN_CONTROLLER | FuncType |  | 5.4.2 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Initializing | NfvInstGroupStatus |  | 5.4.2 |
| Healthy | NfvInstGroupStatus |  | 5.4.2 |
| Degraded | NfvInstGroupStatus |  | 5.4.2 |
| Operating | NfvInstGroupStatus |  | 5.4.2 |
| Unavailable | NfvInstGroupStatus |  | 5.4.2 |

 #operationMode

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | NfvInstGroupOperationMode |  | 5.4.2 |
| Maintenance | NfvInstGroupOperationMode |  | 5.4.2 |

 #instances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| configVersion | int |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| netOsDistro | String |  | 5.4.2 |
| baseOsDistro | String |  | 5.4.2 |
| clusterStatus | String |  | 5.4.2 |
| statusDetail | String |  | 5.4.2 |
| applianceVmType | String |  | 5.4.2 |
| managementNetworkUuid | String |  | 5.4.2 |
| defaultRouteL3NetworkUuid | String |  | 5.4.2 |
| status | String |  | 5.4.2 |
| agentPort | Integer |  | 5.4.2 |
| haStatus | String |  | 5.4.2 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.4.2 |
| name | String | 资源名称 | 5.4.2 |
| description | String | 资源的详细描述 | 5.4.2 |
| zoneUuid | String | 区域UUID | 5.4.2 |
| clusterUuid | String | 集群UUID | 5.4.2 |
| imageUuid | String | 镜像UUID | 5.4.2 |
| hostUuid | String | 物理机UUID | 5.4.2 |
| lastHostUuid | String |  | 5.4.2 |
| instanceOfferingUuid | String | 计算规格UUID | 5.4.2 |
| rootVolumeUuid | String | 根云盘UUID | 5.4.2 |
| platform | String |  | 5.4.2 |
| architecture | String |  | 5.4.2 |
| defaultL3NetworkUuid | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| hypervisorType | String |  | 5.4.2 |
| memorySize | Long |  | 5.4.2 |
| reservedMemorySize | Long |  | 5.4.2 |
| cpuNum | Integer |  | 5.4.2 |
| cpuSpeed | Long |  | 5.4.2 |
| allocatorStrategy | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |
| state | String |  | 5.4.2 |
| guestOsType | String |  | 5.4.2 |
| vmNics | List | 详情参考[vmNics] | 5.4.2 |
| allVolumes | List | 详情参考[allVolumes] | 5.4.2 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.4.2 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| monitorIp | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceName | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |

 #configTasks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 5.4.2 |
| nfvInstGroupUuid | String |  | 5.4.2 |
| configVersion | int |  | 5.4.2 |
| serviceUuid | String |  | 5.4.2 |
| taskName | String |  | 5.4.2 |
| taskData | String |  | 5.4.2 |
| path | String |  | 5.4.2 |
| checkStatus | boolean |  | 5.4.2 |

 #l3Networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nfvInstGroupUuid | String |  | 5.4.2 |
| networkServiceUuid | String |  | 5.4.2 |
| l3NetworkUuid | String | 三层网络UUID | 5.4.2 |
| l3NetworkCategory | String |  | 5.4.2 |
| l3NetworkType | String |  | 5.4.2 |
| type | String |  | 5.4.2 |
| createDate | Timestamp | 创建时间 | 5.4.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.4.2 |



##### SDK示例

 Java SDK

```
ChangeNfvInstGroupOperationModeAction action = new ChangeNfvInstGroupOperationModeAction();
action.uuid = "1dd069e761853e6f83d146e08fc988b7";
action.operationMode = "Maintenance";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeNfvInstGroupOperationModeAction.Result res = action.call();
```

 Python SDK

```
ChangeNfvInstGroupOperationModeAction action = ChangeNfvInstGroupOperationModeAction()
action.uuid = "1dd069e761853e6f83d146e08fc988b7"
action.operationMode = "Maintenance"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeNfvInstGroupOperationModeAction.Result res = action.call()
```

---

### 二层网络资源相关接口

---

#### 创建tungsten fabric二层网络(CreateL2TfNetwork)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/tf
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Tf-L2-Network",
    "description": "Test",
    "zoneUuid": "10f059adb4c83f5ba9a296369d52ffbe",
    "vSwitchType": "LinuxBridge"
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
-X POST -d '{"params":{"name":"Tf-L2-Network","description":"Test","zoneUuid":"10f059adb4c83f5ba9a296369d52ffbe","vSwitchType":"LinuxBridge"}}' \
http://localhost:8080/zstack/v1/l2-networks/tf
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ipPrefix (可选) | String | body(包含在**params**结构中) | IP地址前缀 |  | 4.8.0 |
| ipPrefixLength (可选) | Integer | body(包含在**params**结构中) | IP地址前缀长度 |  | 4.8.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.8.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.8.0 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 4.8.0 |
| physicalInterface | String | body(包含在**params**结构中) | 物理网卡 |  | 4.8.0 |
| type (可选) | String | body(包含在**params**结构中) | 二层网络类型 |  | 4.8.0 |
| vSwitchType (可选) | String | body(包含在**params**结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk MacVlan | 4.8.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.8.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.8.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.8.0 |



##### **API返回**

 返回示例

```
{
  "inventory": {
    "uuid": "672906b1aeca3a68a24c1b07a4f8deb5",
    "name": "test",
    "zoneUuid": "b478828872db33a4807d90e9f16f39e4",
    "physicalInterface": "eth0"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.8.0 |
| inventory | L2NetworkInventory | 详情参考[inventory] | 4.8.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |

 #inventroy

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.8.0 |
| name | String | 资源名称 | 4.8.0 |
| description | String | 资源的详细描述 | 4.8.0 |
| zoneUuid | String | 区域UUID | 4.8.0 |
| physicalInterface | String | 物理网卡 | 4.8.0 |
| type | String | 资源类型 | 4.8.0 |
| createDate | Timestamp | 创建时间 | 4.8.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.8.0 |
| attachedClusterUuids | List | 已加载集群UUID | 4.8.0 |



##### SDK示例

 Java SDK

```
CreateL2TfNetworkAction action = new CreateL2TfNetworkAction();
action.name = "Tf-L2-Network";
action.description = "Test";
action.zoneUuid = "10f059adb4c83f5ba9a296369d52ffbe";
action.vSwitchType = "LinuxBridge";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2TfNetworkAction.Result res = action.call();
```

 Python SDK

```
CreateL2TfNetworkAction action = CreateL2TfNetworkAction()
action.name = "Tf-L2-Network"
action.description = "Test"
action.zoneUuid = "10f059adb4c83f5ba9a296369d52ffbe"
action.vSwitchType = "LinuxBridge"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2TfNetworkAction.Result res = action.call()
```

---

#### 创建硬件VXLAN网络(CreateL2HardwareVxlanNetwork)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/hardware-vxlan
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vni": 10,
    "poolUuid": "772ca51845273486bd60aeb13c545050",
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "79c1192d59303c218de085a48666cffa",
    "vSwitchType": "LinuxBridge",
    "isolated": false
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
-X POST -d '{"params":{"vni":10,"poolUuid":"772ca51845273486bd60aeb13c545050","name":"Test-Net","description":"Test","zoneUuid":"79c1192d59303c218de085a48666cffa","vSwitchType":"LinuxBridge","isolated":false}}' \
http://localhost:8080/zstack/v1/l2-networks/hardware-vxlan
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vni (可选) | Integer | body(包含在`params`结构中) | VNI号 |  | 3.7 |
| poolUuid | String | body(包含在`params`结构中) | VXLAN资源池UUID |  | 3.7 |
| name | String | body(包含在`params`结构中) | 资源名称 |  | 3.7 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 3.7 |
| zoneUuid | String | body(包含在`params`结构中) | 区域UUID |  | 3.7 |
| physicalInterface | String | body(包含在`params`结构中) | 物理网卡 |  | 3.7 |
| type (可选) | String | body(包含在`params`结构中) | 二层网络类型 |  | 3.7 |
| resourceUuid (可选) | String | body(包含在`params`结构中) | 资源UUID。若指定，二层网络会使用该字段值作为UUID |  | 3.7 |
| tagUuids (可选) | List | body(包含在`params`结构中) | 标签UUID列表 |  | 3.7 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7 |
| userTags (可选) | List | body | 用户标签 |  | 3.7 |
| vSwitchType (可选) | String | body(包含在`params`结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk MacVlan | 0.6 |
| isolated (可选) | Boolean | body(包含在`params`结构中) |  |  | 5.0.0 |
| pvlan (可选) | String | body(包含在`params`结构中) |  |  | 5.0.0 |
| h3cTenantUuid (可选) | String | body(包含在`params`结构中) |  |  | 5.4.0 |
| vlan (可选) | Integer | body(包含在`params`结构中) |  |  | 5.4.0 |


  - 选项格式为：`huaweiVpcUuid::{%s}`
  - 例如：`huaweiVpcUuid::                                 bf4eb98c0bb74441a652715f1c9a065d`
- 例如：`huaweiVpcUuid::                                 bf4eb98c0bb74441a652715f1c9a065d`
  - 选项格式为：`huaweiTenantUuid::{%s}`
  - 例如：`huaweiTenantUuid::                                     e9218d9e4a2e4a029d33ce6a683d44e8`
- 例如：`huaweiTenantUuid::                                     e9218d9e4a2e4a029d33ce6a683d44e8`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "vni": 10,
    "poolUuid": "7b3b9aaa42d3364d846a598cce125174",
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "e88a75173e193288b9a51c35f7c8e1ac",
    "type": "L2VxlanNetwork"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7 |
| inventory | L2VxlanNetworkInventory | 详情参考[inventory] | 3.7 |

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
| vni | Integer | VNI号 | 0.6 |
| poolUuid | String | VXLAN资源池UUID | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String | 物理网卡 | 0.6 |
| type | String | 二层网络类型 | 0.6 |
| vSwitchType | String |  | 5.3.0 |
| virtualNetworkId | Integer |  | 5.3.0 |
| isolated | Boolean |  | 5.3.0 |
| pvlan | String |  | 5.3.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List | 挂载集群的UUID列表 | 0.6 |



##### SDK示例

 Java SDK

```
CreateL2HardwareVxlanNetworkAction action = new CreateL2HardwareVxlanNetworkAction();
action.vni = 10;
action.poolUuid = "772ca51845273486bd60aeb13c545050";
action.name = "Test-Net";
action.description = "Test";
action.zoneUuid = "79c1192d59303c218de085a48666cffa";
action.vSwitchType = "LinuxBridge";
action.isolated = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2HardwareVxlanNetworkAction.Result res = action.call();
```

 Python SDK

```
CreateL2HardwareVxlanNetworkAction action = CreateL2HardwareVxlanNetworkAction()
action.vni = 10
action.poolUuid = "772ca51845273486bd60aeb13c545050"
action.name = "Test-Net"
action.description = "Test"
action.zoneUuid = "79c1192d59303c218de085a48666cffa"
action.vSwitchType = "LinuxBridge"
action.isolated = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2HardwareVxlanNetworkAction.Result res = action.call()
```

---

#### 创建硬件VXLAN资源池(CreateL2HardwareVxlanNetworkPool)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/hardware-vxlan-pool
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "sdnControllerUuid": "0b2231798a5c3971811ca4c9647776b8",
    "name": "Test-NetPool",
    "description": "Test",
    "zoneUuid": "0198cfa1482e31c2bc99512d1aa5b29b",
    "physicalInterface": "bond0",
    "vSwitchType": "LinuxBridge",
    "isolated": false
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
-X POST -d '{"params":{"sdnControllerUuid":"0b2231798a5c3971811ca4c9647776b8", \
"name":"Test-NetPool","description":"Test","zoneUuid":"0198cfa1482e31c2bc99512d1aa5b29b","physicalInterface":"bond0","vSwitchType":"LinuxBridge","isolated":false}}' \
http://localhost:8080/zstack/v1/l2-networks/hardware-vxlan-pool
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sdnControllerUuid | String | body(包含在`params`结构中) | SDN控制器UUID |  | 3.7 |
| name | String | body(包含在`params`结构中) | 资源名称 |  | 3.7 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 3.7 |
| zoneUuid | String | body(包含在`params`结构中) | 区域UUID |  | 3.7 |
| physicalInterface | String | body(包含在`params`结构中) | 物理网卡 |  | 3.7 |
| type (可选) | String | body(包含在`params`结构中) | 二层网络类型 |  | 3.7 |
| resourceUuid (可选) | String | body(包含在`params`结构中) | 资源UUID。若指定，二层网络会使用该字段值作为UUID |  | 3.7 |
| tagUuids (可选) | List | body(包含在`params`结构中) | 标签UUID列表 |  | 3.7 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7 |
| userTags (可选) | List | body | 用户标签 |  | 3.7 |
| vSwitchType (可选) | String | body(包含在`params`结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk MacVlan | 4.1.2 |
| isolated (可选) | Boolean | body(包含在`params`结构中) |  |  | 4.8.0 |
| pvlan (可选) | String | body(包含在`params`结构中) |  |  | 4.8.0 |
| startVlan (可选) | Integer | body(包含在`params`结构中) |  |  | 5.3.28 |
| endVlan (可选) | Integer | body(包含在`params`结构中) |  |  | 5.3.28 |



##### API返回

 返回示例

```
{
  "inventory": {
    "sdnControllerUuid": "359216656f7f3f8681b76e52a0f11429",
    "name": "Test-NetPool",
    "description": "Test",
    "zoneUuid": "7d07d7a4ebfa340da32ac686f77edd4e",
    "type": "HardwareVxlanNetworkPool"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.8.0 |
| inventory | HardwareL2VxlanNetworkPoolInventory | 详情参考[inventory] | 4.8.0 |

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
| sdnControllerUuid | String |  | 5.3.0 |
| attachedCidrs | Map |  | 5.3.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.0 |
| name | String | 资源名称 | 5.3.0 |
| description | String | 资源的详细描述 | 5.3.0 |
| zoneUuid | String | 区域UUID | 5.3.0 |
| physicalInterface | String |  | 5.3.0 |
| type | String |  | 5.3.0 |
| vSwitchType | String |  | 5.3.0 |
| virtualNetworkId | Integer |  | 5.3.0 |
| isolated | Boolean |  | 5.3.0 |
| pvlan | String |  | 5.3.0 |
| createDate | Timestamp | 创建时间 | 5.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.0 |
| attachedClusterUuids | List |  | 5.3.0 |
| attachedVtepRefs | List | 详情参考[attachedVtepRefs] | 5.3.0 |
| remoteVteps | List | 详情参考[remoteVteps] | 5.3.0 |
| attachedVxlanNetworkRefs | List | 详情参考[attachedVxlanNetworkRefs] | 5.3.0 |
| attachedVniRanges | List | 详情参考[attachedVniRanges] | 5.3.0 |

 #attachedVtepRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| vtepIp | String | 隧道端点IP地址 | 0.6 |
| port | Integer | 端口 | 0.6 |
| type | String | 类型 | 0.6 |
| physicalInterface | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| poolUuid | String | VXLAN资源池UUID | 0.6 |

 #remoteVteps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.11 |
| clusterUuid | String | 集群UUID | 5.3.0 |
| vtepIp | String | 隧道端点IP地址 | 4.7.11 |
| port | Integer | 端口 | 4.7.11 |
| type | String | 类型 | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.11 |
| poolUuid | String | VXLAN资源池UUID | 4.7.11 |

 #attachedVxlanNetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vni | Integer | Vni号 | 0.6 |
| poolUuid | String | VXLAN资源池UUID | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String | 物理网卡 | 0.6 |
| type | String | 二层网络类型 | 0.6 |
| vSwitchType | String |  | 5.3.0 |
| virtualNetworkId | Integer |  | 5.3.0 |
| isolated | Boolean |  | 5.3.0 |
| pvlan | String |  | 5.3.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List | 挂载集群的UUID列表 | 0.6 |

 #attachedVniRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startVni | Integer | 起始VNI | 0.6 |
| endVni | Integer | 结束VNI | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |



##### SDK示例

 Java SDK

```
CreateL2HardwareVxlanNetworkPoolAction action = new CreateL2HardwareVxlanNetworkPoolAction();
action.sdnControllerUuid = "0b2231798a5c3971811ca4c9647776b8";
action.name = "Test-NetPool";
action.description = "Test";
action.zoneUuid = "0198cfa1482e31c2bc99512d1aa5b29b";
action.physicalInterface = "bond0";
action.vSwitchType = "LinuxBridge";
action.isolated = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2HardwareVxlanNetworkPoolAction.Result res = action.call();
```

 Python SDK

```
CreateL2HardwareVxlanNetworkPoolAction action = CreateL2HardwareVxlanNetworkPoolAction()
action.sdnControllerUuid = "0b2231798a5c3971811ca4c9647776b8"
action.name = "Test-NetPool"
action.description = "Test"
action.zoneUuid = "0198cfa1482e31c2bc99512d1aa5b29b"
action.physicalInterface = "bond0"
action.vSwitchType = "LinuxBridge"
action.isolated = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2HardwareVxlanNetworkPoolAction.Result res = action.call()
```

---

#### 创建VXLAN网络(CreateL2VxlanNetwork)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/vxlan
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vni": 10,
    "poolUuid": "c27a329718ed3585a27d227174ed1ace",
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "8dd66847fcf930178acc687cb4c1438c",
    "vSwitchType": "LinuxBridge"
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
-X POST -d '{"params":{"vni":10,"poolUuid":"c27a329718ed3585a27d227174ed1ace","name":"Test-Net","description":"Test","zoneUuid":"8dd66847fcf930178acc687cb4c1438c","vSwitchType":"LinuxBridge"}}' \
http://localhost:8080/zstack/v1/l2-networks/vxlan
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vni (可选) | Integer | body(包含在**params**结构中) | Vxlan网络VNI |  | 0.6 |
| poolUuid | String | body(包含在**params**结构中) | Vxlan网络资源池UUID |  | 0.6 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| physicalInterface | String | body(包含在**params**结构中) |  |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |
| vSwitchType (可选) | String | body(包含在**params**结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk | 4.8.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vni": 10,
    "poolUuid": "848a93cca6b43a67930af04c70f2abd3",
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "1b6c6d39024a3e59ba597cd651fe064f",
    "type": "L2VxlanNetwork"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L2VxlanNetworkPoolInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vni | Integer |  | 0.6 |
| poolUuid | String | Vxlan网络资源池uuid | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateL2VxlanNetworkAction action = new CreateL2VxlanNetworkAction();
action.vni = 10;
action.poolUuid = "c27a329718ed3585a27d227174ed1ace";
action.name = "Test-Net";
action.description = "Test";
action.zoneUuid = "8dd66847fcf930178acc687cb4c1438c";
action.vSwitchType = "LinuxBridge";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2VxlanNetworkAction.Result res = action.call();
```

 Python SDK

```
CreateL2VxlanNetworkAction action = CreateL2VxlanNetworkAction()
action.vni = 10
action.poolUuid = "c27a329718ed3585a27d227174ed1ace"
action.name = "Test-Net"
action.description = "Test"
action.zoneUuid = "8dd66847fcf930178acc687cb4c1438c"
action.vSwitchType = "LinuxBridge"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2VxlanNetworkAction.Result res = action.call()
```

---

#### 查询VXLAN网络(QueryL2VxlanNetwork）



##### API请求

 URLs

```
GET zstack/v1/l2-networks/vxlan
GET zstack/v1/l2-networks/vxlan/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth eff53f15d4ad4f17b3dc13bc15d7f0f6" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vxlan
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 801edfc2a7f244198ed2f13743c1b232" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vxlan/8dcdd0a8c57a45a5a884887f5a0681c7
```



可查询字段

运行CLI命令行工具，输入`QueryL2VxlanNetwork`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "Test-Net",
"description": "Test",
"zoneUuid": "ef52a71330384e3080c88b243bf3fae2",
"type": "L2VxlanNetwork"
"vSwitchType":"LinuxBridge"
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
| vni | Integer |  | 0.6 |
| poolUuid | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |
| vSwitchType | String | 虚拟交换机类型 | 4.8.0 |



##### SDK示例

 Java SDK

```
QueryL2VxlanNetworkAction action = new QueryL2VxlanNetworkAction();
action.conditions = asList();
action.sessionId = "4a008984bc2844e59b6fa8acf188d587";
QueryL2VxlanNetworkAction.Result res = action.call();
```

 Python SDK

```
QueryL2VxlanNetworkAction action = QueryL2VxlanNetworkAction()
action.conditions = []
action.sessionId = "c530e08c8ad24dbeb986647100eff212"
QueryL2VxlanNetworkAction.Result res = action.call()
```

---

#### 创建VXLAN网络池(CreateL2VxlanNetworkPool)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/vxlan-pool
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-NetPool",
    "description": "Test",
    "zoneUuid": "2de2048daac33068aecac1f5b40d1343",
    "vSwitchType": "LinuxBridge"
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
-X POST -d '{"params":{"name":"Test-NetPool","description":"Test","zoneUuid":"2de2048daac33068aecac1f5b40d1343","vSwitchType":"LinuxBridge"}}' \
http://localhost:8080/zstack/v1/l2-networks/vxlan-pool
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| physicalInterface | String | body(包含在**params**结构中) |  |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |
| vSwitchType | String | body(包含在**params**结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk | 4.8.0 |
| TagUuid(可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.8.0 |



##### **API返回**

 返回示例

```
{
  "inventory": {
    "name": "Test-NetPool",
    "description": "Test",
    "zoneUuid": "7340dabd00b739e9ab33895edcdc48de",
    "type": "L2VxlanNetwork"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L2VxlanNetworkPoolInventory | 详情参考[inventory] | 0.6 |

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
| attachedCidrs | Map |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |
| attachedVtepRefs | List | 详情参考[attachedVtepRefs] | 0.6 |
| attachedVxlanNetworkRefs | List | 详情参考[**attachedVxlanNetworkRefs**] | 0.6 |
| attachedVniRanges | List | 详情参考[attachedVniRanges] | 0.6 |

 #attachedVtepRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| vtepIp | String |  | 0.6 |
| port | Integer |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后修改时间 | 0.6 |
| poolUuid | String |  | 0.6 |

 #attachedVxlanNetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vni | Integer |  | 0.6 |
| poolUuid | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |

 #attachedVniRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startVni | Integer |  | 0.6 |
| endVni | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |



##### SDK示例

 Java SDK

```
CreateL2VxlanNetworkPoolAction action = new CreateL2VxlanNetworkPoolAction();
action.name = "Test-NetPool";
action.description = "Test";
action.zoneUuid = "2de2048daac33068aecac1f5b40d1343";
action.vSwitchType = "LinuxBridge";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2VxlanNetworkPoolAction.Result res = action.call();

```

 Python SDK

```
CreateL2VxlanNetworkPoolAction action = CreateL2VxlanNetworkPoolAction()
action.name = "Test-NetPool"
action.description = "Test"
action.zoneUuid = "2de2048daac33068aecac1f5b40d1343"
action.vSwitchType = "LinuxBridge"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2VxlanNetworkPoolAction.Result res = action.call()

```

---

#### 查询VXLAN网络池(QueryL2VxlanNetworkPool)



##### API请求

 URLs

```
GET zstack/v1/l2-networks/vxlan-pool
GET zstack/v1/l2-networks/vxlan-pool/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b2132aefec76492cb00aff0a2d97a202" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vxlan-pool
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 07c093f70f10467e826adc1743a022e6" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vxlan-pool/0576843440c74069b541faa856f71d39
```



可查询字段

运行CLI命令行工具，输入`QueryL2VxlanNetworkPool`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "Test-Net",
"description": "Test",
"zoneUuid": "6199e247f6bf4157a41e51ed7ff2f78c",
"type": "L2VxlanNetworkPool"
"vSwitchType":LinuxBridge
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
| attachedCidrs | Map |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |
| attachedVtepRefs | List | 详情参考[attachedVtepRefs] | 0.6 |
| attachedVxlanNetworkRefs | List | 详情参考[**attachedVxlanNetworkRefs**] | 0.6 |
| attachedVniRanges | List | 详情参考[attachedVniRanges] | 0.6 |
| vSwitchType | String | 虚拟交换机类型 | 4.8.0 |

 #attachedVtepRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| vtepIp | String |  | 0.6 |
| port | Integer |  | 0.6 |
| type | String |  | 0.6 |
| poolUuid | String |  | 0.6 |

 #attachedVxlanNetworkRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vni | Integer |  | 0.6 |
| poolUuid | String |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |

 #attachedVniRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startVni | Integer |  | 0.6 |
| endVni | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |



##### SDK示例

 Java SDK

```
QueryL2VxlanNetworkPoolAction action = new QueryL2VxlanNetworkPoolAction();
action.conditions = asList();
action.sessionId = "773c52887a0945c4b5dee525e71f5287";
QueryL2VxlanNetworkPoolAction.Result res = action.call();
```

 Python SDK

```
QueryL2VxlanNetworkPoolAction action = QueryL2VxlanNetworkPoolAction()
action.conditions = []
action.sessionId = "0fa3249e9dbd48f3951a93a772882f67"
QueryL2VxlanNetworkPoolAction.Result res = action.call()
```

---

#### 创建二层VLAN网络(CreateL2VlanNetwork)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/vlan
```

 Headers

```
OAuth: the-session-uuid
```

 Body

```
{
  "params": {
    "vlan": 10,
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "43af355e5eae3ab0b74ee76ca9c19005",
    "physicalInterface": "eth0",
    "vSwitchType": "LinuxBridge",
    "isolated": false
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
-X POST -d '{"params":{"vlan":10,"name":"Test-Net","description":"Test","zoneUuid":"43af355e5eae3ab0b74ee76ca9c19005","physicalInterface":"eth0","vSwitchType":"LinuxBridge","isolated":false}}' \
http://localhost:8080/zstack/v1/l2-networks/vlan
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vlan | Integer | body(包含在**params**结构中) |  |  | 0.6 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| physicalInterface | String | body(包含在**params**结构中) |  |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| vSwitchType (可选) | String | body(包含在**params**结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk MacVlan | 4.8.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) |  |  | 4.8.0 |
| isolated (可选) | Boolean | body(包含在**params**结构中) |  |  | 5.0.0 |


  - 选项格式为：`enableSRIOV`
  - 例如：`enableSRIOV`
- 例如：`enableSRIOV`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "vlan": 10,
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "75aea7e72b5a3ce7a1f87efb70ac6339",
    "physicalInterface": "eth0",
    "type": "L2VlanNetwork"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L2NetworkInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vlan | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateL2VlanNetworkAction action = new CreateL2VlanNetworkAction();
action.vlan = 10;
action.name = "Test-Net";
action.description = "Test";
action.zoneUuid = "43af355e5eae3ab0b74ee76ca9c19005";
action.physicalInterface = "eth0";
action.vSwitchType = "LinuxBridge";
action.isolated = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2VlanNetworkAction.Result res = action.call();
```

 Python SDK

```
CreateL2VlanNetworkAction action = CreateL2VlanNetworkAction()
action.vlan = 10
action.name = "Test-Net"
action.description = "Test"
action.zoneUuid = "43af355e5eae3ab0b74ee76ca9c19005"
action.physicalInterface = "eth0"
action.vSwitchType = "LinuxBridge"
action.isolated = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2VlanNetworkAction.Result res = action.call()
```

---

#### 查询二层VLAN网络(QueryL2VlanNetwork)



##### API请求

 URLs

```
GET zstack/v1/l2-networks/vlan
GET zstack/v1/l2-networks/vlan/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 1456f654cfcb46889ff24bd83da741f4" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vlan
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3ad0ef4e609e43829cde6fcaac60d90d" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vlan/d1eefa849cc84978bacd10ef5e1da12f
```



可查询字段

运行CLI命令行工具，输入`QueryL2VlanNetwork`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"vlan": 10.0,
"name": "Test-Net",
"description": "Test",
"zoneUuid": "02681829852848e6b25d6a11aa673f0c",
"physicalInterface": "eth0",
"type": "L2VlanNetwork"
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
| vlan | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |
| vSwitchType | String | 虚拟交换机类型 | 4.8.0 |



##### **SDK示例**

 Java SDK

```
QueryL2VlanNetworkAction action = new QueryL2VlanNetworkAction();
action.conditions = asList();
action.sessionId = "9ae1447a4dce41f9835c2a89ed7e7eba";
QueryL2VlanNetworkAction.Result res = action.call();
```

 Python SDK

```
QueryL2VlanNetworkAction action = QueryL2VlanNetworkAction()
action.conditions = []
action.sessionId = "3e20ec335a82447e9e39c10b371de1b3"
QueryL2VlanNetworkAction.Result res = action.call()
```

---

#### 创建普通二层网络(CreateL2NoVlanNetwork)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/no-vlan
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "c23ba5023fcb3b4b8c3e76c443005e3d",
    "physicalInterface": "eth0",
    "vSwitchType": "LinuxBridge",
    "isolated": false
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
-X POST -d '{"params":{"name":"Test-Net","description":"Test","zoneUuid":"c23ba5023fcb3b4b8c3e76c443005e3d","physicalInterface":"eth0","vSwitchType":"LinuxBridge","isolated":false}}' http://localhost:8080/zstack/v1/l2-networks/no-vlan
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 普通二层网络名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 普通二层网络的详细描述 |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 0.6 |
| physicalInterface | String | body(包含在**params**结构中) | 物理网卡 |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) | 二层网络类型 |  | 0.6 |
| vSwitchType (可选) | String | body(包含在**params**结构中) | 虚拟交换机类型 | LinuxBridge OvsDpdk MacVlan OvnDpdk | 4.8.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，二层网络会使用该字段值作为UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| isolated (可选) | Boolean | body(包含在**params**结构中) |  |  | 5.3.20 |
| pvlan (可选) | String | body(包含在**params**结构中) |  |  | 5.3.20 |


  - 选项格式为：`enableSRIOV`
  - 例如：`enableSRIOV`
- 例如：`enableSRIOV`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "672906b1aeca3a68a24c1b07a4f8deb5",
    "name": "test",
    "zoneUuid": "b478828872db33a4807d90e9f16f39e4",
    "physicalInterface": "eth0"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L2NetworkInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String | 物理网卡 | 5.3.20 |
| type | String | 二层网络类型 | 5.3.20 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List | 挂载集群的UUID列表 | 5.3.20 |



##### SDK示例

 Java SDK

```
CreateL2NoVlanNetworkAction action = new CreateL2NoVlanNetworkAction();
action.name = "Test-Net";
action.description = "Test";
action.zoneUuid = "c23ba5023fcb3b4b8c3e76c443005e3d";
action.physicalInterface = "eth0";
action.vSwitchType = "LinuxBridge";
action.isolated = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL2NoVlanNetworkAction.Result res = action.call();
```

 Python SDK

```
CreateL2NoVlanNetworkAction action = CreateL2NoVlanNetworkAction()
action.name = "Test-Net"
action.description = "Test"
action.zoneUuid = "c23ba5023fcb3b4b8c3e76c443005e3d"
action.physicalInterface = "eth0"
action.vSwitchType = "LinuxBridge"
action.isolated = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL2NoVlanNetworkAction.Result res = action.call()
```

---

#### 删除二层网络(DeleteL2Network)



##### API请求

 URLs

```
DELETE zstack/v1/l2-networks/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth ff3445cd125b4f67b6fc551133852726" \
-X DELETE http://localhost:8080/zstack/v1/l2-networks/254811ac54a04835a8f82871f96ab86f?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.8.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 4.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.8.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.8.0 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
    "error": {
        "code": "SYS.1001",
        "description": "A message or a operation timeout",
        "details": "Create VM on KVM timeout after 300s"
    }
}/9
```



##### SDK示例

 Java SDK

```
DeleteL2NetworkAction action = new DeleteL2NetworkAction();
action.uuid = "8952ecc352fc49b9a0b22286772e74e2";
action.deleteMode = "Permissive";
action.sessionId = "1bece9d1092e47e7ba176ac2e3b03793";
DeleteL2NetworkAction.Result res = action.call();
```

 Python SDK

```
DeleteL2NetworkAction action = DeleteL2NetworkAction()
action.uuid = "f1f6deb480d44b77b53b74784c17a1d9"
action.deleteMode = "Permissive"
action.sessionId = "9b914d6dc4d64c8f8f45452bad140f9f"
DeleteL2NetworkAction.Result res = action.call()
```

---

#### 查询二层网络(QueryL2Network)



##### API请求

 URLs

```
GET zstack/v1/l2-networks
GET zstack/v1/l2-networks/{uuid}
```

 Headers

```
OAuth: the-session-uuid
```

 Curl示例

```
curl
-H "Content-Type: application/json;charset=UTF-8" \
-H "OAuth: 9bdaea2355c6417b9e6f3acff94fe731"\
-X GET http://localhost:8080/zstack/v1/l2-networks
```


```
curl
-H "Content-Type: application/json;charset=UTF-8" \
-H "OAuth: 0469a0dfcb7343abb2eb08d876ad3209" \
-X GET http://localhost:8080/zstack/v1/l2-networks/a523215c60b14236869d249176fb328d
```



可查询字段

运行CLI命令行工具，输入`QueryL2Network`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"vlan": 10.0,
"name": "Test-Net",
"description": "Test",
"zoneUuid": "a5af85a0db3a4433b58ff429eea1e9a3",
"physicalInterface": "eth0",
"type": "L2VlanNetwork"
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
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryL2NetworkAction action = new QueryL2NetworkAction();
action.conditions = asList();
action.sessionId = "c9c0aa502c3d4bdd8cf480364a17fe67";
QueryL2NetworkAction.Result res = action.call();
```

 Python SDK

```
QueryL2NetworkAction action = QueryL2NetworkAction()
action.conditions = []
action.sessionId = "2170549725174f5f9eb390d314f86f8b"
QueryL2NetworkAction.Result res = action.call()
```

---

#### 从集群上卸载二层网络(DetachL2NetworkFromCluster)



##### API请求

 URLs

```
DELETE/v1/l2-networks/{l2NetworkUuid}/clusters/{clusterUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/l2-networks/baef7db345553050846947bb2d818be0/clusters/2fb51e7e35d339c4bac77819a9c4fea1?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l2NetworkUuid | String | url | 二层网络UUID |  | 0.6 |
| clusterUuid | String | url | 集群UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vlan": 10,
    "name": "Test-Net",
    "description": "Test",
    "zoneUuid": "7a531508c19d396d84abeda34b83d946",
    "physicalInterface": "eth0",
    "type": "L2VlanNetwork"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L2NetworkInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.8.0 |
| name | String | 资源名称 | 4.8.0 |
| description | String | 资源的详细描述 | 4.8.0 |
| zoneUuid | String | 区域UUID | 4.8.0 |
| physicalInterface | String |  | 4.8.0 |
| type | String |  | 4.8.0 |
| createDate | Timestamp | 创建时间 | 4.8.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.8.0 |
| attachedClusterUuids | List |  | 4.8.0 |



##### **SDK示例**

 Java SDK

```
DetachL2NetworkFromClusterAction action = new DetachL2NetworkFromClusterAction();
action.l2NetworkUuid = "baef7db345553050846947bb2d818be0";
action.clusterUuid = "2fb51e7e35d339c4bac77819a9c4fea1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachL2NetworkFromClusterAction.Result res = action.call();
```

 Python SDK

```
DetachL2NetworkFromClusterAction action = DetachL2NetworkFromClusterAction()
action.l2NetworkUuid = "baef7db345553050846947bb2d818be0"
action.clusterUuid = "2fb51e7e35d339c4bac77819a9c4fea1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachL2NetworkFromClusterAction.Result res = action.call()
```

---

#### 更新二层网络(UpdateL2Network)



##### AI请求

 URLs

```
PUT zstack/v1/l2-networks/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateL2Network": {
"name": "Test-Net",
"description": "Test"
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
-X PUT -d '{"updateL2Network":{"name":"Test-Net","description":"Test"}}' \
http://localhost:8080/zstack/v1/l2-networks/8a44ece25f973842b841591a554f5fee/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateL2Network**结构中) | 普通二层网络名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateL2Network**结构中) | 普通二层网络的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |

  API返回返回示例

```
{
"inventory": {
"vlan": 10.0,
"name": "Test-Net",
"description": "Test",
"zoneUuid": "95bb5b1156ff49caacaf9acc2eda0058",
"physicalInterface": "eth0",
"type": "L2VlanNetwork"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L2NetworkInventory | 详情参考[inventory] | 0.6 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateL2NetworkAction action = new UpdateL2NetworkAction();
action.uuid = "f7ea5335fcab4d438069879d62384b0e";
action.name = "Test-Net";
action.description = "Test";
action.sessionId = "05627ec42486449cb6b422ef927829f1";
UpdateL2NetworkAction.Result res = action.call();
```

 Python SDK

```
UpdateL2NetworkAction action = UpdateL2NetworkAction()
action.uuid = "7dc08ad01b8a4d578aab2ae0ad750f1b"
action.name = "Test-Net"
action.description = "Test"
action.sessionId = "130b064e63204a479857ced03f550cf2"
UpdateL2NetworkAction.Result res = action.call()
```

---

#### 获取二层网络类型(GetL2NetworkTypes)



##### API请求

 URLs

```
GET zstack/v1/l2-networks/types
```

 Headers

```
OAuth: the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "OAuth: 76514d7cdcf44b57bc26ff7b4ae0be63" \
-X GET http://localhost:8080/zstack/v1/l2-networks/types
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
"l2NetworkTypes": [
"L2VlanNetwork",
"L2NoVlanNetwork"
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
GetL2NetworkTypesAction action = new GetL2NetworkTypesAction();
action.sessionId = "485005865e744e19a12ad2f9af2ea997";
GetL2NetworkTypesAction.Result res = action.call();
```

 Python SDK

```
GetL2NetworkTypesAction action = GetL2NetworkTypesAction()
action.sessionId = "b34f3c756aa542789f35bc1774845bc1"
GetL2NetworkTypesAction.Result res = action.call()
```

---

#### 挂载二层网络到集群(AttachL2NetworkToCluster)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/{l2NetworkUuid}/clusters/{clusterUuid}
```

 Headers

```
OAuth: the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST http://localhost:8080/zstack/v1/l2-networks/e852ba6eb4c03f2fafdb73ce838d8980/clusters/112816423a1a3b50a58d54fd1f6a8665
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l2NetworkUuid | String | url | 二层网络UUID |  | 0.6 |
| clusterUuid | String | url | 集群UUID |  | 0.6 |
| l2ProviderType (可选) | String | body | 二层网络实现类型 | LinuxBridge | 4.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"vlan": 10.0,
"name": "Test-Net",
"description": "Test",
"zoneUuid": "95ab67ece21e3ce39896b9b391a21a94",
"physicalInterface": "eth0",
"type": "L2VlanNetwork"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.8.0 |
| inventory | L2NetworkInventory | 详情参考[inventory] | 4.8.0 |

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
| zoneUuid | String | 区域UUID | 0.6 |
| physicalInterface | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |



##### **SDK示例**

 Java SDK

```
AttachL2NetworkToClusterAction action = new AttachL2NetworkToClusterAction();
action.l2NetworkUuid = "e852ba6eb4c03f2fafdb73ce838d8980";
action.clusterUuid = "112816423a1a3b50a58d54fd1f6a8665";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachL2NetworkToClusterAction.Result res = action.call();
```

 Python SDK

```
AttachL2NetworkToClusterAction action = AttachL2NetworkToClusterAction()
action.l2NetworkUuid = "e852ba6eb4c03f2fafdb73ce838d8980"
action.clusterUuid = "112816423a1a3b50a58d54fd1f6a8665"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachL2NetworkToClusterAction.Result res = action.call()
```

---

#### 创建VNI Range(CreateVniRange)



##### API请求

 URLs

```
POST zstack/v1/l2-networks/vxlan-pool/{l2NetworkUuid}/vni-ranges
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "TestVniRange",
    "description": "Here is a Vni Range",
    "startVni": 10.0,
    "endVni": 5000.0
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
-X POST -d '{"params":{"name":"TestVniRange","description":"Here is a Vni Range","startVni":10.0,"endVni":5000.0}}' \
http://localhost:8080/zstack/v1/l2-networks/vxlan-pool/66b7ddcebeea33eaaa39a2b4667267ab/vni-ranges
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| startVni | Integer | body(包含在params结构中) |  |  | 0.6 |
| endVni | Integer | body(包含在params结构中) |  |  | 0.6 |
| l2NetworkUuid | String | url | 二层Vxlan网络资源池uuid |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "TestVniRange",
"description": "Here is a Vni Range",
"startVni": 10.0,
"endVni": 5000.0,
"l2NetworkUuid": "252d938da43a48c98ce93fe7163f14df"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VniRangeInventory | 详情参考[inventory] | 0.6 |

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
| startVni | Integer |  | 0.6 |
| endVni | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |



##### SDK示例

 Java SDK

```
CreateVniRangeAction action = new CreateVniRangeAction();
action.name = "TestVniRange";
action.description = "Here is a Vni Range";
action.startVni = 10.0;
action.endVni = 5000.0;
action.l2NetworkUuid = "9548ed5fc8434782890d5c6ae24d87a7";
action.sessionId = "977eac0795364c5995c20120e9e35ca1";
CreateVniRangeAction.Result res = action.call();
```

 Python SDK

```
CreateVniRangeAction action = CreateVniRangeAction()
action.name = "TestVniRange"
action.description = "Here is a Vni Range"
action.startVni = 10.0
action.endVni = 5000.0
action.l2NetworkUuid = "d55172d6e90e403da46074d53c680838"
action.sessionId = "dfacd10f07444a99bca68426cc19f079"
CreateVniRangeAction.Result res = action.call()
```

---

#### 删除VNI Range(DeleteVniRange)



##### API请求

 URLs

```
DELETE/v1/l2-networks/vxlan-pool/vni-ranges/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 49bf51476d4f49e3b6322688a4c02027" \
-X DELETE http://localhost:8080/zstack/v1/l2-networks/vxlan-pool/vni-ranges/57aae81f5ed248e3bea4509843ab919f?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body |  |  | 0.6 |
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
DeleteVniRangeAction action = new DeleteVniRangeAction();
action.uuid = "8ad0e38ae63d4f2d86b9cd2283c5df03";
action.deleteMode = "Permissive";
action.sessionId = "85100440f4f94c68ba0884e09c7429dc";
DeleteVniRangeAction.Result res = action.call();
```

 Python SDK

```
DeleteVniRangeAction action = DeleteVniRangeAction()
action.uuid = "4aef50ec1f784e66ab79ef021216389d"
action.deleteMode = "Permissive"
action.sessionId = "dfbae4e4897f497a9803a2a5dc23f848"
DeleteVniRangeAction.Result res = action.call()
```

---

#### 查询VNI Range(QueryVniRange)



##### API请求

 URLs

```
GET zstack/v1/l2-networks/vxlan-pool/vni-range
GET zstack/v1/l2-networks/vxlan-pool/vni-range/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 337c51002a0f4fec9b9ced4cdd9ca08d" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vxlan-pool/vni-range
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 69245fbe344f4adf95454deb1bfe74fb" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vxlan-pool/vni-range/4397921aaa5d45c7ba9bbde764b89389
```



可查询字段

运行CLI命令行工具，输入`QueryVniRange`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"name": "Test-Range",
"description": "Test",
"startVni": 10.0,
"endVni": 10000.0,
"l2NetworkUuid": "32e0539245504a22a474ea2f34db16d0"
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
| startVni | Integer |  | 0.6 |
| endVni | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |



##### SDK示例

 Java SDK

```
QueryVniRangeAction action = new QueryVniRangeAction();
action.conditions = asList();
action.sessionId = "eb1c573c6d4240ecb746321b12f9e1d3";
QueryVniRangeAction.Result res = action.call();
```

 Python SDK

```
QueryVniRangeAction action = QueryVniRangeAction()
action.conditions = []
action.sessionId = "89f7a520087049dcbd87f91aa20994fa"
QueryVniRangeAction.Result res = action.call()
```

---

#### 修改VNI Range(UpdateVniRange)



##### API请求

 URLs

```
PUT zstack/v1/l2-networks/vxlan-pool/vni-ranges/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVniRange": {
    "name": "VNI-NEW"
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
-X PUT -d '{"updateVniRange":{"name":"VNI-NEW"}}' http://localhost:8080/zstack/v1/l2-networks/vxlan-pool/vni-ranges/f85dd9a8fcdc33c6a55f4786e0ffae52
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.3.0 |
| name (可选) | String | body |  |  | 3.3.0 |
| systemTags (可选) | List | body |  |  | 3.3.0 |
| userTags (可选) | List | body |  |  | 3.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-Range",
    "description": "Test",
    "startVni": 10.0,
    "endVni": 10000.0,
    "l2NetworkUuid": "73f29ba3afd83876830ab1794046e47a"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |



##### SDK示例

 Java SDK

```
UpdateVniRangeAction action = new UpdateVniRangeAction();
action.uuid = "f85dd9a8fcdc33c6a55f4786e0ffae52";
action.name = "VNI-NEW";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVniRangeAction.Result res = action.call();
```

 Python SDK

```
UpdateVniRangeAction action = UpdateVniRangeAction()
action.uuid = "f85dd9a8fcdc33c6a55f4786e0ffae52"
action.name = "VNI-NEW"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVniRangeAction.Result res = action.call()
```

---

#### 获取虚拟交换机类型(GetVSwitchTypes)



##### API请求

 URLs

```
GET zstack//v1/l2-networks/vSwitchTypes
```

 Headers

```
OAuth: the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l2-networks/vSwitchTypes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.8.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.8.0 |



##### API返回

 返回示例

```
{
  "vSwitchTypes": [
    "LinuxBridge",
    "OVSDPDK"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | boolean |  | 4.8.0 |
| types | List |  | 4.8.0 |
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
GetVSwitchTypesAction action = new GetVSwitchTypesAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVSwitchTypesAction.Result res = action.call();
```

 Python SDK

```
GetVSwitchTypesAction action = GetVSwitchTypesAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVSwitchTypesAction.Result res = action.call()
```

---

### 三层网络相关接口

---

#### 创建三层网络(CreateL3Network)



##### API请求

 URLs

```
POST zstack/v1/l3-networks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-L3Network",
    "type": "L3BasicNetwork",
    "l2NetworkUuid": "bb059728e72f3ff1b3ae2fc9caba3dce",
    "category": "Private",
    "system": false,
    "enableIPAM": true
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
-X POST -d '{"params":{"name":"Test-L3Network","type":"L3BasicNetwork","l2NetworkUuid":"bb059728e72f3ff1b3ae2fc9caba3dce","category":"Private","system":false,"enableIPAM":true}}' \
http://localhost:8080/zstack/v1/l3-networks
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
| name | String | body(包含在**params**结构中) | 三层网络的名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 三层网络的详细描述 |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) | 三层网络类型 | L3BasicNetwork L3VpcNetwork | 0.6 |
| l2NetworkUuid | String | body(包含在**params**结构中) | 二层网络UUID |  | 0.6 |
| ipVersion (可选) | Integer | body(包含在**params**结构中) | ip协议号 | 4 6 | 4.6.21 |
| system (可选) | boolean | body(包含在**params**结构中) | 是否用于系统云主机 |  | 0.6 |
| dnsDomain (可选) | String | body(包含在**params**结构中) | DNS域 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，三层网络会使用该字段值作为UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| category (可选) | String | body(包含在**params**结构中) | 网络类型，需要与system标签搭配使用，system为false时可设置为Public、Private | Public Private System | 2.2 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.6.21 |
| enableIPAM (可选) | Boolean | body(包含在**params**结构中) | IP地址管理是否启用 |  | 4.6.21 |


  - 选项格式为：`mirrorNetwork::{L3NetworkVOUuid}`
  - 例如：`mirrorNetwork::1c707a63817b4f29b1235fa1f76c0ccc`
- 例如：`mirrorNetwork::1c707a63817b4f29b1235fa1f76c0ccc`
  - 选项格式为：`logicalRouterUuid::{%s}`
  - 例如：`logicalRouterUuid::ecb4a71e0e32476da948a583ea0a220d`
- 例如：`logicalRouterUuid::ecb4a71e0e32476da948a583ea0a220d`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-L3Network",
    "l2NetworkUuid": "d15de5c033f8359b839496eec349b704",
    "category": "Private"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 0.6 |

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
| type | String | 三层网络类型 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String | 三层网络的可用状态 | 0.6 |
| dnsDomain | String | DNS域 | 0.6 |
| system | Boolean | 是否用于系统云主机 | 0.6 |
| category | String | 网络类型，需要与system标签搭配使用，system为false时可设置为Public、Private | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List | 域名解析服务器 | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String | 起始地址 | 4.6.21 |
| endIp | String | 结束地址 | 4.6.21 |
| netmask | String | 掩码 | 4.6.21 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String | 网络CIDR | 4.6.21 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| ipRangeType | IpRangeType | 详情参考[ipRangeType]. | 4.6.21 |

 #ipRangeType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | IpRangeType | 普通地址段 | 4.6.21 |
| AddressPool | IpRangeType | 地址池段 | 4.6.21 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateL3NetworkAction action = new CreateL3NetworkAction();
action.name = "Test-L3Network";
action.type = "L3BasicNetwork";
action.l2NetworkUuid = "bb059728e72f3ff1b3ae2fc9caba3dce";
action.category = "Private";
action.system = false;
action.enableIPAM = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateL3NetworkAction.Result res = action.call();
```

 Python SDK

```
CreateL3NetworkAction action = CreateL3NetworkAction()
action.name = "Test-L3Network"
action.type = "L3BasicNetwork"
action.l2NetworkUuid = "bb059728e72f3ff1b3ae2fc9caba3dce"
action.category = "Private"
action.system = false
action.enableIPAM = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateL3NetworkAction.Result res = action.call()
```

---

#### 删除三层网络(DeleteL3Network)



##### API请求

 URLs

```
DELETE zstack/v1/l3-networks/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 9e78fa4cfc8a49baadb763cd62ac6a3f" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/76490f9cd26d4c8a9501cc5a5312aa99?deleteMode=Permissive
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
DeleteL3NetworkAction action = new DeleteL3NetworkAction();
action.uuid = "c19ee03770c6486b85abc58ea10f017a";
action.deleteMode = "Permissive";
action.sessionId = "b8b93037f8064e219bdcbe9dd9a9f366";
DeleteL3NetworkAction.Result res = action.call();
```

 Python SDK

```
DeleteL3NetworkAction action = DeleteL3NetworkAction()
action.uuid = "8c4a39676be64072b20e7b7dc4b0ccc7"
action.deleteMode = "Permissive"
action.sessionId = "e0e4140009fc4b95af7197bffc64f7c0"
DeleteL3NetworkAction.Result res = action.call()
```

---

#### 查询三层网络(QueryL3Network)



##### API请求

 URLs

```
GET zstack/v1/l3-networks
GET zstack/v1/l3-networks/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 98858a4b613f46a4815c34c1c930b34e" \
-X GET http://localhost:8080/zstack/v1/l3-networks
```


```

```


> **注意:** 说明: 例如：查询三层私有网络curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 98858a4b613f46a4815c34c1c930b34e" \
-X GET http://localhost:8080/zstack/v1/l3-networks?q=category=Private



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c1148725103644bc8e2879d72fa47389" \
-X GET http://localhost:8080/zstack/v1/l3-networks/9d119c003bb54d4781443bbc7febcd7f
```



可查询字段

运行CLI命令行工具，输入`QueryL3Network`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "Test-L3Network",
      "l2NetworkUuid": "8bcf5b824378406494d81ffdae56bde3"
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
| type | String | 三层网络类型 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String | 三层网络的可用状态 | 0.6 |
| dnsDomain | String | DNS域 | 0.6 |
| system | Boolean | 是否用于系统云主机 | 0.6 |
| category | String | 网络类型，需要与system标签搭配使用，system为true时可设置为Public、Private | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List | 域名解析服务器 | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QueryL3NetworkAction action = new QueryL3NetworkAction();
action.conditions = asList();
action.sessionId = "58f4bcc9b20f46bfaba379ca0c739535";
QueryL3NetworkAction.Result res = action.call();
```

 Python SDK

```
QueryL3NetworkAction action = QueryL3NetworkAction()
action.conditions = []
action.sessionId = "2f99e245b0f04712941da401ecab7173"
QueryL3NetworkAction.Result res = action.call()
```

---

#### 更新三层网络(UpdateL3Network)



##### API请求

 URLs

```
PUT zstack/v1/l3-networks/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateL3Network": {
    "name": "Test-L3Network"
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
-X PUT -d '{"updateL3Network":{"name":"Test-L3Network"}}' \
http://localhost:8080/zstack/v1/l3-networks/a1a3a4bea5e73628b591081fde9f019a/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateL3Network**结构中) | 三层网络的名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateL3Network**结构中) | 三层网络的详细描述 |  | 0.6 |
| system (可选) | Boolean | body(包含在**updateL3Network**结构中) | 是否用于系统云主机 |  | 0.6 |
| dnsDomain (可选) | String | body(包含在**updateL3Network**结构中) | DNS域 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| category (可选) | String | body(包含在**updateL3Network**结构中) | 网络类型，需要与system标签搭配使用，system为true时可设置为Public、Private | Public Private System | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "dd370da0d6fa49288fc119b35db36b7c",
    "name": "Test-L3Network"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 0.6 |

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
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateL3NetworkAction action = new UpdateL3NetworkAction();
action.uuid = "88d2a1d687974c0ea0e102c276739e39";
action.name = "Test-L3Network";
action.sessionId = "dae0914beced4293bd336fe443ed0d2b";
UpdateL3NetworkAction.Result res = action.call();
```

 Python SDK

```
UpdateL3NetworkAction action = UpdateL3NetworkAction()
action.uuid = "3210b12187464e35bfdc50d8d4e2d1d0"
action.name = "Test-L3Network"
action.sessionId = "9e0b1d4240ef4421804612b01c98d7b8"
UpdateL3NetworkAction.Result res = action.call()
```

---

#### 获取三层网络类型(GetL3NetworkTypes)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/types
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3a142b201e9342abbb5864a0ea48992e" \
-X GET http://localhost:8080/zstack/v1/l3-networks/types
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
"l3NetworkTypes": [
"L3BasicNetwork"
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
GetL3NetworkTypesAction action = new GetL3NetworkTypesAction();
action.sessionId = "9105437ebb27461fbae36ecb9336ceba";
GetL3NetworkTypesAction.Result res = action.call();
```

 Python SDK

```
GetL3NetworkTypesAction action = GetL3NetworkTypesAction()
action.sessionId = "a69bae9c3cad4209b042956b23c70af7"
GetL3NetworkTypesAction.Result res = action.call()
```

---

#### 改变三层网络状态(ChangeL3NetworkState)



##### API请求

 URLs

```
PUT zstack/v1/l3-networks/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeL3NetworkState": {
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
-X PUT -d '{"changeL3NetworkState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/l3-networks/a8744f1ba60c33f3a2c912c077f41fe5/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeL3NetworkState**结构中) | 状态，可选**enable**与**disable** | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "Test-L3Network",
"l2NetworkUuid": "dfae4bce43694f4d9fc0ba5cdf4e38bd"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 0.6 |

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
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRange

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
ChangeL3NetworkStateAction action = new ChangeL3NetworkStateAction();
action.uuid = "eb0849bf0e57400da650a09f2e852260";
action.stateEvent = "enable";
action.sessionId = "be8ec965ebd94169ba713c42dc079af9";
ChangeL3NetworkStateAction.Result res = action.call();

```

 Python SDK

```
ChangeL3NetworkStateAction action = ChangeL3NetworkStateAction()
action.uuid = "d8a1565df89748a2a21ef87b9c9f5be7"
action.stateEvent = "enable"
action.sessionId = "7b8417b9ee3b4df8a21acc8e7c41a7f9"
ChangeL3NetworkStateAction.Result res = action.call()
```

---

#### 获取网络DHCP服务所用地址(GetL3NetworkDhcpIpAddress)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/{l3NetworkUuid}/dhcp-ip
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/82cae6542d3b3e7ea50dab8681f3785c/dhcp-ip
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"ip": "192.168.100.3"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ip | String | IP地址 | 0.6 |
| ip6 | String | IPv6地址 | 3.10.0 |
| success | boolean | 成功 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 error

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
GetL3NetworkDhcpIpAddressAction action = new GetL3NetworkDhcpIpAddressAction();
action.l3NetworkUuid = "1c311c313859434f8586d4288a31952e";
action.sessionId = "dd1a8993de0e41e18d8718ea2e2d8259";
GetL3NetworkDhcpIpAddressAction.Result res = action.call();
```

 Python SDK

```
GetL3NetworkDhcpIpAddressAction action = GetL3NetworkDhcpIpAddressAction()
action.l3NetworkUuid = "4970a85c53a24e35a55f44830058e719"
action.sessionId = "50fd78e250d94c5d944a5fa1a5d6bde0"
GetL3NetworkDhcpIpAddressAction.Result res = action.call()
```

---

#### 向三层网络添加DNS(AddDnsToL3Network)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/dns
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "dns": "8.8.8.8"
  },
  "systemTags": [],
  "userTags": []
}
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"dns":"8.8.8.8"}}' \
http://localhost:8080/zstack/v1/l3-networks/0b8da8c298ed3960925abbcc4f913da8/dns
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| dns | String | url | DNS地址 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-L3Network",
    "l2NetworkUuid": "08f7b0b577a84c28968ddce5a9377c5d",
    "dns": [
      "8.8.8.8"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 0.6 |

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
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
AddDnsToL3NetworkAction action = new AddDnsToL3NetworkAction();
action.l3NetworkUuid = "80bfafb9c4534a2593fcda534ee6414f";
action.dns = "8.8.8.8";
action.sessionId = "0a24af3791134b81bba960844b3aa899";
AddDnsToL3NetworkAction.Result res = action.call();
```

 Python SDK

```
AddDnsToL3NetworkAction action = AddDnsToL3NetworkAction()
action.l3NetworkUuid = "17ecd7a47dc34f1ba01df5180480e264"
action.dns = "8.8.8.8"
action.sessionId = "30e00bf1296244cd98c93dec6182ab72"
AddDnsToL3NetworkAction.Result res = action.call()
```

---

#### 从三层网络移除DNS(RemoveDnsFromL3Network)



##### API请求

 URLs

```
DELETE/v1/l3-networks/{l3NetworkUuid}/dns/{dns}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 209fa412351946a6bef267d423f4e53c" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/d96f7d4c0506435a9a1aa7394976c0b2/dns/8.8.4.4?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| dns | String | url | DNS地址 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"name": "Test-L3Network",
"l2NetworkUuid": "535aea9c1be24fb9b172fa1955341685",
"dns": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 0.6 |

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
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
RemoveDnsFromL3NetworkAction action = new RemoveDnsFromL3NetworkAction();
action.l3NetworkUuid = "3e9227b9ecbd42bba0f3a4620f5655d2";
action.dns = "8.8.4.4";
action.sessionId = "f3e42d2a37ed4c42a6ce7d192af94e05";
RemoveDnsFromL3NetworkAction.Result res = action.call();
```

 Python SDK

```
RemoveDnsFromL3NetworkAction action = RemoveDnsFromL3NetworkAction()
action.l3NetworkUuid = "4046beb7d6164cb3843fb5fac2f86ac3"
action.dns = "8.8.4.4"
action.sessionId = "e9fd57376378422e9b58ada9be59185c"
RemoveDnsFromL3NetworkAction.Result res = action.call()
```

---

#### 向三层网络添加主机路由(AddHostRouteToL3Network)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/hostroute
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "prefix": "169.254.169.254/32",
    "nexthop": "192.168.1.254"
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
-X POST -d '{"params":{"prefix":"169.254.169.254/32","nexthop":"192.168.1.254"}}' \
http://localhost:8080/zstack/v1/l3-networks/45d86c07f10437c6bf3161bae9974bb7/hostroute
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 2.3 |
| prefix | String | body(包含在**params**结构中) |  |  | 2.3 |
| nexthop | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-L3Network",
    "l2NetworkUuid": "7dfdf976ef1334fba5c3b475104011b2",
    "dns": [
      "8.8.8.8"
    ],
    "hostRoute": [
      {
        "prefix": "169.254.169.254/32",
        "nexthop": "192.168.1.254"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 2.3 |

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
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
AddHostRouteToL3NetworkAction action = new AddHostRouteToL3NetworkAction();
action.l3NetworkUuid = "45d86c07f10437c6bf3161bae9974bb7";
action.prefix = "169.254.169.254/32";
action.nexthop = "192.168.1.254";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddHostRouteToL3NetworkAction.Result res = action.call();
```

 Python SDK

```
AddHostRouteToL3NetworkAction action = AddHostRouteToL3NetworkAction()
action.l3NetworkUuid = "45d86c07f10437c6bf3161bae9974bb7"
action.prefix = "169.254.169.254/32"
action.nexthop = "192.168.1.254"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddHostRouteToL3NetworkAction.Result res = action.call()
```

---

#### 从三层网络移除主机路由(RemoveHostRouteFromL3Network)



##### API请求

 URLs

```
DELETE zstack/v1/l3-networks/{l3NetworkUuid}/hostroute?prefix={prefix}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/8648a70a245232c5a1bee9ae408419e5/hostroute?prefix=169.254.169.254/32
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 2.3 |
| prefix | String | body |  |  | 2.3 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "Test-L3Network",
    "l2NetworkUuid": "15e1e6a016f43a5688ca3d3445076309",
    "dns": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 2.3 |

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
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
RemoveHostRouteFromL3NetworkAction action = new RemoveHostRouteFromL3NetworkAction();
action.l3NetworkUuid = "8648a70a245232c5a1bee9ae408419e5";
action.prefix = "169.254.169.254/32";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveHostRouteFromL3NetworkAction.Result res = action.call();
```

 **Python SDK**

```
RemoveHostRouteFromL3NetworkAction action = RemoveHostRouteFromL3NetworkAction()
action.l3NetworkUuid = "8648a70a245232c5a1bee9ae408419e5"
action.prefix = "169.254.169.254/32"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveHostRouteFromL3NetworkAction.Result res = action.call()
```

---

#### 获取空闲IP(GetFreeIp)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/ip/free
```


```
GET zstack/v1/l3-networks/{l3NetworkUuid}/ip/free
```


```
GET zstack/v1/l3-networks/ip-ranges/{ipRangeUuid}/ip/free
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/ip/free?l3NetworkUuid=c8cd63a1882331a9a5ee83e5d9b265ec&ipRangeUuid=10fc8508fd723e63bcc57b8bb6d7a133&limit=100.0
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/c8cd63a1882331a9a5ee83e5d9b265ec/ip/free?l3NetworkUuid=c8cd63a1882331a9a5ee83e5d9b265ec&ipRangeUuid=10fc8508fd723e63bcc57b8bb6d7a133&limit=100.0
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/ip-ranges/10fc8508fd723e63bcc57b8bb6d7a133/ip/free?l3NetworkUuid=c8cd63a1882331a9a5ee83e5d9b265ec&ipRangeUuid=10fc8508fd723e63bcc57b8bb6d7a133&limit=100.0
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid (可选) | String | query | 三层网络UUID说明: l3NetworkUuid和ipRangeUuid二选一 |  | 0.6 |
| ipRangeUuid (可选) | String | query | IP段UUID说明: l3NetworkUuid和ipRangeUuid二选一 |  | 0.6 |
| start (可选) | String | query | 起始值 |  | 0.6 |
| ipRangeType (可选) | String | query | 地址类型 | Normal AddressPool | 3.9.0 |
| ipVersion (可选) | Integer | query | IP地址版本号 | 4 6 | 3.10.0 |
| limit (可选) | int | query | 数量限制 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "ipRangeUuid": "662d600a4b644f98a0c49df2e5430d69",
      "ip": "10.20.10.5",
      "netmask": "255.255.255.0",
      "gateway": "10.20.10.1"
    },
    {
      "ipRangeUuid": "662d600a4b644f98a0c49df2e5430d69",
      "ip": "10.20.10.6",
      "netmask": "255.255.255.0",
      "gateway": "10.20.10.1"
    },
    {
      "ipRangeUuid": "662d600a4b644f98a0c49df2e5430d69",
      "ip": "10.20.10.10",
      "netmask": "255.255.255.0",
      "gateway": "10.20.10.1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | L3NetworkInventory | 详情参考[inventory] | 0.6 |

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
| ipRangeUuid | String | IP段UUID | 0.6 |
| ip | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |



##### SDK示例

 Java SDK

```
GetFreeIpAction action = new GetFreeIpAction();
action.l3NetworkUuid = "c8cd63a1882331a9a5ee83e5d9b265ec";
action.ipRangeUuid = "10fc8508fd723e63bcc57b8bb6d7a133";
action.limit = 100.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetFreeIpAction.Result res = action.call();
```

 Python SDK

```
GetFreeIpAction action = GetFreeIpAction()
action.l3NetworkUuid = "c8cd63a1882331a9a5ee83e5d9b265ec"
action.ipRangeUuid = "10fc8508fd723e63bcc57b8bb6d7a133"
action.limit = 100.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetFreeIpAction.Result res = action.call()
```

---

#### 检查IP可用性(CheckIpAvailability)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/{l3NetworkUuid}/ip/{ip}/availability
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/44fc110c3d87326299b46975aacb1705/ip/192.168.10.100/availability?arpCheck=false&ipRangeCheck=true
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| ip | String | url | IP地址 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |
| arpCheck (可选) | Boolean | query | 使用arping检测 |  | 5.1.0 |
| ipRangeCheck (可选) | Boolean | query | 在数据库可用地址段内检测 |  | 5.1.0 |



##### API返回

 返回示例

```
{
"available": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| available | boolean | 可用 | 0.6 |
| reason | String | 原因 | 3.4 |
| success | boolean | 成功 | 0.6 |
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
CheckIpAvailabilityAction action = new CheckIpAvailabilityAction();
action.l3NetworkUuid = "44fc110c3d87326299b46975aacb1705";
action.ip = "192.168.10.100";
action.arpCheck = false;
action.ipRangeCheck = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckIpAvailabilityAction.Result res = action.call();
```

 Python SDK

```
CheckIpAvailabilityAction action = CheckIpAvailabilityAction()
action.l3NetworkUuid = "44fc110c3d87326299b46975aacb1705"
action.ip = "192.168.10.100"
action.arpCheck = false
action.ipRangeCheck = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckIpAvailabilityAction.Result res = action.call()
```

---

#### 获取IP网络地址容量(GetIpAddressCapacity)



##### API请求

 URLs

```
GET zstack/v1/ip-capacity
```

 Headers

```
Authorization: OAuth the-session-uuid s
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/ip-capacity?ipRangeUuids=6bf57331ebe433389c6c230153ac5d8d&all=false
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 起始版本 |
| --- | --- | --- | --- | --- |
| zoneUuids (可选) | List | query | 区域UUID | 0.6 |
| l3NetworkUuids (可选) | List | query | 三层网络UUID | 0.6 |
| ipRangeUuids (可选) | List | query | IP地址范围UUID | 0.6 |
| all (可选) | boolean | query | 系统全局 | 0.6 |
| systemTags (可选) | List | query | 系统标签 | 0.6 |
| userTags (可选) | List | query | 用户标签 | 0.6 |



##### API返回

 返回示例

```
{
  "totalCapacity": 20.0,
  "availableCapacity": 15.0,
  "usedIpAddressNumber": 5.0,
  "ipv4TotalCapacity": 0.0,
  "ipv4AvailableCapacity": 0.0,
  "ipv4UsedIpAddressNumber": 0.0,
  "ipv6TotalCapacity": 0.0,
  "ipv6AvailableCapacity": 0.0,
  "ipv6UsedIpAddressNumber": 0.0,
  "capacityData": [
    {
      "resourceUuid": "68b9a1c74c4c33c7b818e4c14bdea0a7",
      "totalCapacity": 20.0,
      "availableCapacity": 15.0,
      "usedIpAddressNumber": 5.0,
      "ipv4TotalCapacity": 0.0,
      "ipv4AvailableCapacity": 0.0,
      "ipv4UsedIpAddressNumber": 0.0,
      "ipv6TotalCapacity": 0.0,
      "ipv6AvailableCapacity": 0.0,
      "ipv6UsedIpAddressNumber": 0.0
    }
  ],
  "resourceType": "L3NetworkVO"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| totalCapacity | long | IP地址容量 | 0.6 |
| availableCapacity | long | 可用IP地址容量 | 0.6 |
| usedIpAddressNumber | long | 已使用IP数量 | 3.10.0 |
| ipv4TotalCapacity | long | IPv4地址容量 | 3.10.0 |
| ipv4AvailableCapacity | long | 可用IPv4地址容量 | 3.10.0 |
| ipv4UsedIpAddressNumber | long | 已使用IPv4数量 | 3.10.0 |
| ipv6TotalCapacity | long | IPv6地址容量 | 3.10.0 |
| ipv6AvailableCapacity | long | 可用IPv6地址容量 | 3.10.0 |
| ipv6UsedIpAddressNumber | long | 已使用IPv6数量 | 3.10.0 |
| resourceType | String | 所查询资源的类型（地址范围、三层网络、区域） | 3.9.0 |
| success | boolean | 成功 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| capacityData | List | 详情参考[capacityData] | 3.9.0 |
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

 #capacityData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourceUuid | String | 资源UUID | 3.9.0 |
| totalCapacity | long | IP地址总容量 | 3.9.0 |
| availableCapacity | long | 可用IP地址容量 | 3.9.0 |
| usedIpAddressNumber | long | 已用IP地址容量 | 3.9.0 |
| ipv4TotalCapacity | long | IPv4地址总容量 | 3.10.0 |
| ipv4AvailableCapacity | long | 可用IPv4地址容量 | 3.10.0 |
| ipv4UsedIpAddressNumber | long | 已用IPv4地址容量 | 3.10.0 |
| ipv6TotalCapacity | long | IPv6地址总容量 | 3.10.0 |
| ipv6AvailableCapacity | long | 可用IPv6地址容量 | 3.10.0 |
| ipv6UsedIpAddressNumber | long | 已用IPv6地址容量 | 3.10.0 |

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
GetIpAddressCapacityAction action = new GetIpAddressCapacityAction();
action.ipRangeUuids = asList("6bf57331ebe433389c6c230153ac5d8d");
action.all = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetIpAddressCapacityAction.Result res = action.call();
```

 Python SDK

```
GetIpAddressCapacityAction action = GetIpAddressCapacityAction()
action.ipRangeUuids = [6bf57331ebe433389c6c230153ac5d8d]
action.all = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetIpAddressCapacityAction.Result res = action.call()
```

---

#### 添加IP地址范围(AddIpRange)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/ip-ranges
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-IP-Range",
    "startIp": "192.168.100.10",
    "endIp": "192.168.100.250",
    "netmask": "255.255.255.0",
    "gateway": "192.168.100.1",
    "ipRangeType": "Normal"
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
-X POST -d '{"params":{"name":"Test-IP-Range","startIp":"192.168.100.10","endIp":"192.168.100.250","netmask":"255.255.255.0","gateway":"192.168.100.1","ipRangeType":"Normal"}}' http://localhost:8080/zstack/v1/l3-networks/acc0573590db3297814610cab774b60b/ip-ranges
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| name | String | body(包含在**params**结构中) | 三层网络的名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 三层网络的详细描述 |  | 0.6 |
| startIp | String | body(包含在**params**结构中) | 起始地址 |  | 0.6 |
| endIp | String | body(包含在**params**结构中) | 结束地址 |  | 0.6 |
| netmask | String | body(包含在**params**结构中) | 网络掩码 |  | 0.6 |
| gateway | String | body(包含在**params**结构中) | 网关 |  | 0.6 |
| ipRangeType (可选) | String | body(包含在**params**结构中) | 地址类型 | Normal AddressPool | 3.9.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，三层网络会使用该字段值作为UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`flatNetwork::DhcpServer::{%s}::ipUuid::{%s}`
  - 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`
- 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "l3NetworkUuid": "4cbec970df744e258726f71de79e6497",
    "name": "Test-IP-Range",
    "startIp": "192.168.100.10",
    "endIp": "192.168.100.250",
    "netmask": "255.255.255.0",
    "gateway": "192.168.100.1"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | IpRangeInventory | 详情参考[inventory] | 0.6 |

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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| ipRangeType | IpRangeType | 详情参考[ipRangeType] | 3.9.0 |

 #ipRangeType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | IpRangeType |  | 3.9.0 |
| AddressPool | IpRangeType |  | 3.9.0 |



##### SDK示例

 Java SDK

```
AddIpRangeAction action = new AddIpRangeAction();
action.l3NetworkUuid = "acc0573590db3297814610cab774b60b";
action.name = "Test-IP-Range";
action.startIp = "192.168.100.10";
action.endIp = "192.168.100.250";
action.netmask = "255.255.255.0";
action.gateway = "192.168.100.1";
action.ipRangeType = "Normal";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIpRangeAction.Result res = action.call();
```

 Python SDK

```
AddIpRangeAction action = AddIpRangeAction()
action.l3NetworkUuid = "acc0573590db3297814610cab774b60b"
action.name = "Test-IP-Range"
action.startIp = "192.168.100.10"
action.endIp = "192.168.100.250"
action.netmask = "255.255.255.0"
action.gateway = "192.168.100.1"
action.ipRangeType = "Normal"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIpRangeAction.Result res = action.call()
```

---

#### 删除IP地址范围(DeleteIpRange)



##### API请求

 URLs

```
DELETE/v1/l3-networks/ip-ranges/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 1872261fb9824d9f9dd73a991cf05a44" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/ip-ranges/a2a9f85d22914afe95a195b63143830d?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | IP地址范围的UUID |  | 0.6 |
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
DeleteIpRangeAction action = new DeleteIpRangeAction();
action.uuid = "6d1f44d0fe1440189eb293f18d7bf682";
action.deleteMode = "Permissive";
action.sessionId = "4a3745cb42f5430f874c6f6c4b298e95";
DeleteIpRangeAction.Result res = action.call();
```

 Python SDK

```
DeleteIpRangeAction action = DeleteIpRangeAction()
action.uuid = "0f1fcf2e779543baa416deb89eeeb2db"
action.deleteMode = "Permissive"
action.sessionId = "d07fb42a181d43dda2b6992536b02804"
DeleteIpRangeAction.Result res = action.call()
```

---

#### 查询IP地址范围(QueryIpRange)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/ip-ranges
GET /v1/l3-networks/ip-ranges/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 8f7b1e0396c54646a4b37affdfdda079" \
-X GET http://localhost:8080/zstack/v1/l3-networks/ip-ranges?q=uuid=887227aa5d5c49e2a8137b79dad3738a
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 60a5dfda1a9843809415eb28f2550f94" \
-X GET http://localhost:8080/zstack/v1/l3-networks/ip-ranges/17684784fcc04571a47eb24dc2eb9638
```



可查询字段

运行CLI命令行工具，输入QueryIpRange并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"l3NetworkUuid": "9a72daf0034443aa81864e593f0f5b32",
"name": "Test-IPRange",
"networkCidr": "192.168.10.0/24"
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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
QueryIpRangeAction action = new QueryIpRangeAction();
action.conditions = asList("uuid=d5764d7ab9174e5486e55ba805d28675");
action.sessionId = "5357e54aa55a4846ac96972776d3100f";
QueryIpRangeAction.Result res = action.call();
```

 Python SDK

```
QueryIpRangeAction action = QueryIpRangeAction()
action.conditions = ["uuid=2cda79a574344eeb9f38393253ddf858"]
action.sessionId = "c87d6755153549f6a4e7373b601ac99f"
QueryIpRangeAction.Result res = action.call()
```

---

#### 更新IP地址范围(UpdateIpRange)



##### API请求



URLs

```
PUT zstack/v1/l3-networks/ip-ranges/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateIpRange": {},
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
-X PUT -d '{"updateIpRange":{}}' \
http://localhost:8080/zstack/v1/l3-networks/ip-ranges/0ebb3eb1c1e134bea93c2f9ed2e2beef/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateIpRange**结构中) | 三层网络的名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateIpRange**结构中) | 三层网络的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"l3NetworkUuid": "f7f0ee7b4978413fa36c811e47dd56a3",
"name": "Test-IPRange",
"networkCidr": "192.168.10.0/24"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | IpRangeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名 | 类型 | 描述 | 起始版本 |
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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateIpRangeAction action = new UpdateIpRangeAction();
action.uuid = "97054a54a1fc4b49ba3d7a5d44b9e385";
action.sessionId = "8644fd2755f148359edff9521b27868b";
UpdateIpRangeAction.Result res = action.call();
```

 Python SDK

```
UpdateIpRangeAction action = UpdateIpRangeAction()
action.uuid = "2b4499297735445482dc994113574b41"
action.sessionId = "0a16c9ea3e6e4ad9b1ff71a826b67277"
UpdateIpRangeAction.Result res = action.call()
```

---

#### 通过网络CIDR添加IP地址范围(AddIpRangeByNetworkCidr)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/ip-ranges/by-cidr
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-IPRange",
    "networkCidr": "192.168.10.0/24",
    "ipRangeType": "Normal"
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
-X POST -d '{"params":{"name":"Test-IPRange","networkCidr":"192.168.10.0/24","ipRangeType":"Normal"}}' http://localhost:8080/zstack/v1/l3-networks/c186887bc5e43da7ba42bd5d66eba0cd/ip-ranges/by-cidr
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 三层网络的名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 三层网络的详细描述 |  | 0.6 |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| networkCidr | String | body(包含在**params**结构中) | 网络CIDR |  | 0.6 |
| gateway (可选) | String | body(包含在**params**结构中) | 网关 |  | 3.7.0 |
| ipRangeType (可选) | String | body(包含在**params**结构中) | 地址类型 | Normal AddressPool | 3.9.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，三层网络会使用该字段值作为UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`flatNetwork::DhcpServer::{%s}::ipUuid::{%s}`
  - 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`
- 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`


> **注意:** 说明:



##### API返回

 返回示例

```
{
"inventory": {
"l3NetworkUuid": "4e0926c4fa27455f88c7d94420bf3422",
"name": "Test-IPRange",
"networkCidr": "192.168.10.0/24"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | IpRangeInventory | 详情参考[inventory] | 0.6 |

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
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| ipRangeType | IpRangeType | 详情参考[ipRangeType] | 3.9.0 |

 #ipRangeType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | IpRangeType |  | 3.9.0 |
| AddressPool | IpRangeType |  | 3.9.0 |



##### SDK示例

 Java SDK

```
AddIpRangeByNetworkCidrAction action = new AddIpRangeByNetworkCidrAction();
action.name = "Test-IPRange";
action.l3NetworkUuid = "c186887bc5e43da7ba42bd5d66eba0cd";
action.networkCidr = "192.168.10.0/24";
action.ipRangeType = "Normal";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIpRangeByNetworkCidrAction.Result res = action.call();
```

 Python SDK

```
AddIpRangeByNetworkCidrAction action = AddIpRangeByNetworkCidrAction()
action.name = "Test-IPRange"
action.l3NetworkUuid = "c186887bc5e43da7ba42bd5d66eba0cd"
action.networkCidr = "192.168.10.0/24"
action.ipRangeType = "Normal"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIpRangeByNetworkCidrAction.Result res = action.call()
```

---

#### 获取三层网络Mtu值(GetL3NetworkMtu)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/{l3NetworkUuid}/mtu
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth dc112a530fd2402cae6b4962f65eae4e" \
-X GET http://localhost:8080/zstack/v1/l3-networks/be54f79eb90f4f929da7fe64e1aea8e4/mtu
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "mtu": 9216.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| mtu | Integer |  | 2.1 |
| success | boolean |  | 2.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| error | ErrorCode | 详情参考[error] | 2.1 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |

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
GetL3NetworkMtuAction action = new GetL3NetworkMtuAction();
action.l3NetworkUuid = "fd8d572d777d4383b201ddfce629d50e";
action.sessionId = "0cc5202de3ce4881a305e5fa1d431aaa";
GetL3NetworkMtuAction.Result res = action.call();
```

 Python SDK

```
GetL3NetworkMtuAction action = GetL3NetworkMtuAction()
action.l3NetworkUuid = "7615cfd154a048dcab07a1114ee6205d"
action.sessionId = "d0f3cf05a49345438a92108d2fd86cfe"
GetL3NetworkMtuAction.Result res = action.call()
```

---

#### 设置三层网络Mtu值(SetL3NetworkMtu)



##### API请求



URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/mtu
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "mtu": 9216.0
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
-X POST -d '{"params":{"mtu":9216.0}}' \
http://localhost:8080/zstack/v1/l3-networks/817672c1bb903264a9a41c34332c3145/mtu
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 2.1 |
| mtu | Integer | body(包含在**params**结构中) |  |  | 2.1 |
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
SetL3NetworkMtuAction action = new SetL3NetworkMtuAction();
action.l3NetworkUuid = "b19ce058b0f54c6d83c14078c0079c2c";
action.mtu = 9216.0;
action.sessionId = "b441c616886c4183a51ba044e35c7d66";
SetL3NetworkMtuAction.Result res = action.call();
```

 Python SDK

```
SetL3NetworkMtuAction action = SetL3NetworkMtuAction()
action.l3NetworkUuid = "67dc01887dfc4142aabe4221675c1b98"
action.mtu = 9216.0
action.sessionId = "d5188e0801994e3a9dfb3d3ebc2f7a39"
SetL3NetworkMtuAction.Result res = action.call()
```

---

#### 获取三层网络上路由器的接口地址（GetL3NetworkRouterInterfaceIp）



##### API请求

 URLs

```
GET zstack/v1/l3-networks/{l3NetworkUuid}/router-interface-ip
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/71aa55703e063d9db0f13fa0b285a82b/router-interface-ip
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 2.2 |
| systemTags (可选) | List | query |  |  | 2.2 |
| userTags (可选) | List | query |  |  | 2.2 |



##### API返回

 返回示例

```
{
  "routerInterfaceIp": "192.168.0.2"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| routerInterfaceIp | String | 三层网络上路由器的接口地址，仅当会在普通三层网络上创建VPC路由器或在VPC网络上加载VPC路由器时有效 | 2.2 |
| success | boolean |  | 2.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |

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
GetL3NetworkRouterInterfaceIpAction action = new GetL3NetworkRouterInterfaceIpAction();
action.l3NetworkUuid = "23453c09a0f534d5bb10a3267c09aac8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetL3NetworkRouterInterfaceIpAction.Result res = action.call();
```

 Python SDK

```
GetL3NetworkRouterInterfaceIpAction action = GetL3NetworkRouterInterfaceIpAction()
action.l3NetworkUuid = "5cece4a676083f6fa3491a068e3e34e6"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetL3NetworkRouterInterfaceIpAction.Result res = action.call()
```

---

#### 设置三层网络路由器接口IP(SetL3NetworkRouterInterfaceIp)



设置三层网络上路由器接口地址，仅当会在普通三层网络上创建VPC路由器或在VPC网络上加载VPC路由器时有效。

##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/router-interface-ip
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "routerInterfaceIp": "192.168.10.2"
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
-X POST -d '{"params":{"routerInterfaceIp":"192.168.10.2"}}' \
http://localhost:8080/zstack/v1/l3-networks/40124528890f368c8752825634144fd5/router-interface-ip
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 2.1 |
| routerInterfaceIp | String | body(包含在**params**结构中) |  |  | 2.1 |
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
SetL3NetworkRouterInterfaceIpAction action = new SetL3NetworkRouterInterfaceIpAction();
action.l3NetworkUuid = "00ab12382f544de0ac71b48afe7ecd9c";
action.routerInterfaceIp = "192.168.10.2";
action.sessionId = "279a26540d254f42b7a2320652e6c64b";
SetL3NetworkRouterInterfaceIpAction.Result res = action.call();
```

 Python SDK

```
SetL3NetworkRouterInterfaceIpAction action = SetL3NetworkRouterInterfaceIpAction()
action.l3NetworkUuid = "3558f265c4204eae93104e3ffa974661"
action.routerInterfaceIp = "192.168.10.2"
action.sessionId = "97c0fdecc551496d86b8861f045df21a"
SetL3NetworkRouterInterfaceIpAction.Result res = action.call()
```

---

#### 添加IPv6地址范围(AddIpv6Range)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/ipv6-ranges
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-IP-Range",
    "startIp": "2002:2001::02",
    "endIp": "2002:2001::FE",
    "gateway": "2002:2001::01",
    "prefixLen": 64,
    "addressMode": "Stateful-DHCP"
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
-X POST -d '{"params":{"name":"Test-IP-Range","startIp":"2002:2001::02","endIp":"2002:2001::FE","gateway":"2002:2001::01","prefixLen":64.0,"addressMode":"Stateful-DHCP"}}' http://localhost:8080/zstack/v1/l3-networks/b6f82aa00c3f37adba4b349eb427db80/ipv6-ranges
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 3.1.0 |
| name | String | body(包含在**params**结构中) | 三层网络的名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 三层网络的详细描述 |  | 3.1.0 |
| startIp | String | body(包含在**params**结构中) | 起始地址 |  | 3.1.0 |
| endIp | String | body(包含在**params**结构中) | 结束地址 |  | 3.1.0 |
| gateway | String | body(包含在**params**结构中) | 网关 |  | 3.1.0 |
| prefixLen | Integer | body(包含在**params**结构中) | 前缀长度 |  | 3.1.0 |
| addressMode | String | body(包含在**params**结构中) | IPv6地址分配模式 | SLAAC Stateful-DHCP Stateless-DHCP | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，三层网络会使用该字段值作为UUID |  | 3.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.0 |


  - 选项格式为：`flatNetwork::DhcpServer::{%s}::ipUuid::{%s}`
  - 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`
- 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "l3NetworkUuid": "10d6128c8f473a63889597becc396bba",
    "name": "Test-IP-Range",
    "startIp": "2002:2001::02",
    "endIp": "2002:2001::FE",
    "netmask": "FFFF:FFFF:FFFF:FFFF:0:0:0:0",
	"prefixLen": "64"
    "gateway": "2002:2001::01"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | IpRangeInventory | 详情参考[inventory] | 3.1.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| startIp | String |  | 3.1.0 |
| endIp | String |  | 3.1.0 |
| netmask | String |  | 3.1.0 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 3.1.0 |
| networkCidr | String |  | 3.1.0 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
AddIpv6RangeAction action = new AddIpv6RangeAction();
action.l3NetworkUuid = "b6f82aa00c3f37adba4b349eb427db80";
action.name = "Test-IP-Range";
action.startIp = "2002:2001::02";
action.endIp = "2002:2001::FE";
action.gateway = "2002:2001::01";
action.prefixLen = 64;
action.addressMode = "Stateful-DHCP";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIpv6RangeAction.Result res = action.call();
```

 Python SDK

```
AddIpv6RangeAction action = AddIpv6RangeAction()
action.l3NetworkUuid = "b6f82aa00c3f37adba4b349eb427db80"
action.name = "Test-IP-Range"
action.startIp = "2002:2001::02"
action.endIp = "2002:2001::FE"
action.gateway = "2002:2001::01"
action.prefixLen = 64
action.addressMode = "Stateful-DHCP"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIpv6RangeAction.Result res = action.call()
```

---

#### 通过网络CIDR添加IPv6地址范围(AddIpv6RangeByNetworkCidr)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/ipv6-ranges/by-cidr
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-IPRange",
    "networkCidr": "2002:2001::/64",
    "addressMode": "SLAAC"
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
-X POST -d '{"params":{"name":"Test-IPRange","networkCidr":"2002:2001::/64","addressMode":"SLAAC"}}' http://localhost:8080/zstack/v1/l3-networks/92850b5a66633e2aa8c3a8ae6ebb541d/ipv6-ranges/by-cidr
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 三层网络的名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 三层网络的详细描述 |  | 3.1.0 |
| l3NetworkUuid | String | url | 三层网络UUID |  | 3.1.0 |
| networkCidr | String | body(包含在**params**结构中) | 网络CIDR |  | 3.1.0 |
| addressMode | String | body(包含在**params**结构中) | IPv6地址分配模式 | SLAAC Stateful-DHCP Stateless-DHCP | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，三层网络会使用该字段值作为UUID |  | 3.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.0 |


  - 选项格式为：`flatNetwork::DhcpServer::{%s}::ipUuid::{%s}`
  - 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`
- 例如：`flatNetwork::DhcpServer::192.168.1.100::ipUuid::null`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "l3NetworkUuid": "6735b2c2bc0c345892b7d66b1616d909",
    "name": "Test-IPRange",
    "networkCidr": "2002:2001::/64"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | IpRangeInventory | 详情参考[inventory] | 3.1.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| startIp | String |  | 3.1.0 |
| endIp | String |  | 3.1.0 |
| netmask | String |  | 3.1.0 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 3.1.0 |
| networkCidr | String |  | 3.1.0 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
AddIpv6RangeByNetworkCidrAction action = new AddIpv6RangeByNetworkCidrAction();
action.name = "Test-IPRange";
action.l3NetworkUuid = "92850b5a66633e2aa8c3a8ae6ebb541d";
action.networkCidr = "2002:2001::/64";
action.addressMode = "SLAAC";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddIpv6RangeByNetworkCidrAction.Result res = action.call();
```

 Python SDK

```
AddIpv6RangeByNetworkCidrAction action = AddIpv6RangeByNetworkCidrAction()
action.name = "Test-IPRange"
action.l3NetworkUuid = "92850b5a66633e2aa8c3a8ae6ebb541d"
action.networkCidr = "2002:2001::/64"
action.addressMode = "SLAAC"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddIpv6RangeByNetworkCidrAction.Result res = action.call()
```

---

#### 查询IP地址(QueryIpAddress)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/ip-address
GET zstack/v1/l3-networks/ip-address{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/ip-address
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/ip-address/87b2ab50f6c13ebb9dd73ca46bb22bc7
```



可查询字段

运行CLI命令行工具，输入`QueryIpAddress`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "3ccfbfd6bd483a5eaeabed00b284f4fc",
      "ipRangeUuid": "1b3a29978ea73f0db4ce8d8c2d0bd479",
      "l3NetworkUuid": "c11b366475f836078e5aa86469de2eef",
      "ipVersion": 4.0,
      "ip": "192.168.1.100",
      "netmask": "255.255.255.0",
      "gateway": "192.168.1.1",
      "ipInLong": 0.0,
      "vmNicUuid": "28e22f67b2893b208547333dfef7cfa8"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[errot] | 3.1.0 |
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
| ipRangeUuid | String | IP段UUID | 3.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.1.0 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 3.1.0 |
| netmask | String | 网络掩码 | 3.1.0 |
| gateway | String | 网关地址 | 3.1.0 |
| usedFor | String |  | 3.1.0 |
| ipInLong | long |  | 3.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryIpAddressAction action = new QueryIpAddressAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryIpAddressAction.Result res = action.call();
```

 Python SDK

```
QueryIpAddressAction action = QueryIpAddressAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryIpAddressAction.Result res = action.call()
```

---

#### 获取三层网络IP地址使用情况统计(GetL3NetworkIpStatistic)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/{l3NetworkUuid}/ip-statistic
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/9bdd769f3e603f65bd368512ebe8b998/ip-statistic?resourceType=All&sortBy=Ip&sortDirection=asc&start=0.0&limit=20.0&replyWithCount=false
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
| l3NetworkUuid | String | url | 三层网络UUID |  | 3.7.0 |
| resourceType (可选) | String | query | 统计资源类型 | All Vip VM | 3.7.0 |
| ip (可选) | String | query | 指定IP地址 |  | 3.7.0 |
| sortBy (可选) | String | query | 排序方式 | Ip CreateDate | 3.7.0 |
| sortDirection (可选) | String | query | 排序方向 | asc desc | 3.7.0 |
| start (可选) | Integer | query | 统计结果起始位置 |  | 3.7.0 |
| limit (可选) | Integer | query | 统计结果数量 |  | 3.7.0 |
| replyWithCount (可选) | boolean | query | 同时返回统计结果总数 |  | 3.7.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "ipStatistics": [
    {
      "ip": "192.168.0.1",
      "resourceTypes": [
        "Other"
      ]
    }
  ],
  "total": 1.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | Long | IP统计结果总数 | 3.7.0 |
| success | boolean | 成功 | 3.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| ipStatistics | List | 详情参考[ipStatistics] | 3.7.0 |
| error | ErrorCode | 详情参考[error] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #ipStatistics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| ip | String | IP地址 | 3.7.0 |
| vipUuid | String | 虚拟IP的UUID | 3.7.0 |
| vipName | String | 虚拟IP名字 | 3.7.0 |
| vmInstanceUuid | String | 虚拟机实例UUID | 3.7.0 |
| vmInstanceName | String | 虚拟机实例名字 | 3.7.0 |
| vmInstanceType | String | 虚拟机实例类型 | 3.7.0 |
| vmDefaultIp | String | 虚拟机实例默认IP | 3.7.0 |
| resourceTypes | List | 绑定到IP地址的资源类型列表 | 3.7.0 |
| state | String | 资源状态 | 3.7.0 |
| useFor | String | 虚拟IP绑定的网络服务 | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| ownerName | String | 资源所有者名字 | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |



##### SDK示例

 Java SDK

```
GetL3NetworkIpStatisticAction action = new GetL3NetworkIpStatisticAction();
action.l3NetworkUuid = "9bdd769f3e603f65bd368512ebe8b998";
action.resourceType = "All";
action.sortBy = "Ip";
action.sortDirection = "asc";
action.start = 0.0;
action.limit = 20.0;
action.replyWithCount = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetL3NetworkIpStatisticAction.Result res = action.call();
```

 Python SDK

```
GetL3NetworkIpStatisticAction action = GetL3NetworkIpStatisticAction()
action.l3NetworkUuid = "9bdd769f3e603f65bd368512ebe8b998"
action.resourceType = "All"
action.sortBy = "Ip"
action.sortDirection = "asc"
action.start = 0.0
action.limit = 20.0
action.replyWithCount = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetL3NetworkIpStatisticAction.Result res = action.call()
```

---

#### 查询IP地址池(QueryAddressPool)



##### API请求

 URLs

```
GET zstack/v1/l3-networks/address-pools
```


```
GET zstack/v1/l3-networks/address-pools/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/address-pools?q=uuid=a73cf6bc10a0390bb5e461d9f5e3fd6d
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/l3-networks/address-pools/f45cb0f9098336a39662b7553f42deb5
```



可查询字段

运行CLI命令行工具，输入QueryAddressPool并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "l3NetworkUuid": "81ce7828f3f63c0ea8a69dd9139bdaa0",
      "name": "Test-IPRange",
      "networkCidr": "192.168.10.0/24",
      "ipRangeType": "AddressPool"
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
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| startIp | String | 起始IP | 3.9.0 |
| endIp | String | 结束IP | 3.9.0 |
| netmask | String | 掩码 | 3.9.0 |
| gateway | String | 网关 | 3.9.0 |
| networkCidr | String | 网络CIDR | 3.9.0 |
| ipVersion | Integer | ip协议号 | 3.9.0 |
| addressMode | String | IPv6地址分配模式 | 3.9.0 |
| prefixLen | Integer | 掩码长度 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| ipRangeType | IpRangeType | 详情参考[ipRangeType] | 3.9.0 |

 #ipRangeType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | IpRangeType | 普通地址段 | 3.9.0 |
| AddressPool | IpRangeType | 地址池段 | 3.9.0 |



##### SDK示例

 Java SDK

```
QueryAddressPoolAction action = new QueryAddressPoolAction();
action.conditions = asList("uuid=4cbab87c862032f1a161bebe7e1f55a1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAddressPoolAction.Result res = action.call();
```

 Python SDK

```
QueryAddressPoolAction action = QueryAddressPoolAction()
action.conditions = ["uuid=455d45fad9893eba9565de38588c7416"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAddressPoolAction.Result res = action.call()
```

---

#### 添加保留地址段(AddReservedIpRange)



##### API请求

 URLs

```
POST zstack/v1/l3-networks/{l3NetworkUuid}/reserved-ip-ranges
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "startIp": "192.168.100.10",
    "endIp": "192.168.100.250"
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
-X POST -d '{"params":{"startIp":"192.168.100.10","endIp":"192.168.100.250"}}' \
http://localhost:8080/zstack/v1/l3-networks/dc9fb647bbd73a768da652b6cd100495/reserved-ip-ranges
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 5.1.0 |
| startIp | String | body(包含在**params**结构中) | 开始IP(包含在地址段内) |  | 5.1.0 |
| endIp | String | body(包含在**params**结构中) | 结束IP(包含在地址段内) |  | 5.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "l3NetworkUuid": "9bb0926251903385928489eba7388cd4",
    "name": "Test-IP-Range",
    "startIp": "192.168.100.10",
    "endIp": "192.168.100.250"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.0 |
| inventory | ReservedIpRangeInventory | 详情参考[inventory] | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| startIp | String | 起始IP(包含在保留地址段内) | 5.1.0 |
| endIp | String | 结束IP(包含在保留地址段内) | 5.1.0 |
| ipVersion | Integer | ip协议号 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |

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
AddReservedIpRangeAction action = new AddReservedIpRangeAction();
action.l3NetworkUuid = "dc9fb647bbd73a768da652b6cd100495";
action.startIp = "192.168.100.10";
action.endIp = "192.168.100.250";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddReservedIpRangeAction.Result res = action.call();
```

 Python SDK

```
AddReservedIpRangeAction action = AddReservedIpRangeAction()
action.l3NetworkUuid = "dc9fb647bbd73a768da652b6cd100495"
action.startIp = "192.168.100.10"
action.endIp = "192.168.100.250"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddReservedIpRangeAction.Result res = action.call()
```

---

#### 删除保留地址段(DeleteReservedIpRange)



##### API请求

 URLs

```
DELETE zstack/v1/l3-networks/reserved-ip-ranges/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/reserved-ip-ranges/c01027fecc013c338e25d67581eed865
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.1.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



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
DeleteReservedIpRangeAction action = new DeleteReservedIpRangeAction();
action.uuid = "c01027fecc013c338e25d67581eed865";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteReservedIpRangeAction.Result res = action.call();
```

 Python SDK

```
DeleteReservedIpRangeAction action = DeleteReservedIpRangeAction()
action.uuid = "c01027fecc013c338e25d67581eed865"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteReservedIpRangeAction.Result res = action.call()
```

---

#### 修改DHCP服务器地址(ChangeL3NetworkDhcpIpAddress)



##### API请求

 URLs

```
PUT zstack/v1/l3-networks/{l3NetworkUuid}/dhcp-ip
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeL3NetworkDhcpIpAddress": {
    "dhcpServerIp": "192.168.1.100",
    "dhcpv6ServerIp": "2024:04:28:01::100"
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
-X PUT -d '{"changeL3NetworkDhcpIpAddress":{"dhcpServerIp":"192.168.1.100","dhcpv6ServerIp":"2024:04:28:01::100"}}' \
http://localhost:8080/zstack/v1/l3-networks/6b693b00316b30819bb30bfe0df10256/dhcp-ip
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 5.1.0 |
| dhcpServerIp (可选) | String | body(包含在**changeL3NetworkDhcpIpAddress**结构中) | DHCP v4 服务器地址 |  | 5.1.0 |
| dhcpv6ServerIp (可选) | String | body(包含在**changeL3NetworkDhcpIpAddress**结构中) | DHCP v6 服务器地址 |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "dhcpServerIp": "192.168.100.3",
  "dhcpv6ServerIp": "2024:04:28:01::100"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| dhcpServerIp | String |  | 5.1.0 |
| dhcpv6ServerIp | String |  | 5.1.0 |
| success | boolean |  | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |

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
ChangeL3NetworkDhcpIpAddressAction action = new ChangeL3NetworkDhcpIpAddressAction();
action.l3NetworkUuid = "6b693b00316b30819bb30bfe0df10256";
action.dhcpServerIp = "192.168.1.100";
action.dhcpv6ServerIp = "2024:04:28:01::100";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeL3NetworkDhcpIpAddressAction.Result res = action.call();
```

 Python SDK

```
ChangeL3NetworkDhcpIpAddressAction action = ChangeL3NetworkDhcpIpAddressAction()
action.l3NetworkUuid = "6b693b00316b30819bb30bfe0df10256"
action.dhcpServerIp = "192.168.1.100"
action.dhcpv6ServerIp = "2024:04:28:01::100"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeL3NetworkDhcpIpAddressAction.Result res = action.call()
```

---

#### 删除IP地址(DeleteIpAddress)



##### API请求

 URLs

```
DELETE zstack/v1/l3-networks/{l3NetworkUuid}/ip-address
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/l3-networks/b6e5c225bf553bc8bd5a5fcf3fac9fa3/ip-address
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | url | 三层网络UUID |  | 5.1.0 |
| usedIpUuids | List | body | 被删除地址Uuid |  | 5.1.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |



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
DeleteIpAddressAction action = new DeleteIpAddressAction();
action.l3NetworkUuid = "b6e5c225bf553bc8bd5a5fcf3fac9fa3";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteIpAddressAction.Result res = action.call();

```

 Python SDK

```
DeleteIpAddressAction action = DeleteIpAddressAction()
action.l3NetworkUuid = "b6e5c225bf553bc8bd5a5fcf3fac9fa3"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteIpAddressAction.Result res = action.call()

```

---

### 路由资源相关接口

---

#### 重连VPC路由器(ReconnectVirtualRouter)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/appliances/virtual-routers/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"reconnectVirtualRouter": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bd24a72b74a148e8b18ee2b2367534d6" \
-X PUT -d '{"reconnectVirtualRouter":{}}' \
http://localhost:8080/zstack/v1/vm-instances/appliances/virtual-routers/74f9bb00796c366a83a6201df9e26f43/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"managementNetworkUuid": "9a154450da784a418db5406a463d2235",
"name": "Test-Router",
"description": "this is a virtual router vm",
"clusterUuid": "9b359b8de95d4d97a19d53bf4193993a",
"imageUuid": "c7bbef849e5d47478ee1db445d55530b",
"instanceOfferingUuid": "5437f63807864c37b4d3042ee28f2680"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ApplianceVmInventory | 详情参考[inventory] | 0.6 |

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
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
ReconnectVirtualRouterAction action = new ReconnectVirtualRouterAction();
action.vmInstanceUuid = "3b20e87b87b442518efff8744c2cfde8";
action.sessionId = "ce03736cdddf4c49bce35d8e55e189c7";
ReconnectVirtualRouterAction.Result res = action.call();
```

 Python SDK

```
ReconnectVirtualRouterAction action = ReconnectVirtualRouterAction()
action.vmInstanceUuid = "ae937aa909594b1bb2e36359cd7dbc5b"
action.sessionId = "4434d7282a7d4940bb0695c0d252bfae"
ReconnectVirtualRouterAction.Result res = action.call()
```

---

#### 查询VPC路由器 (QueryVirtualRouterVm)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/appliances/virtual-routers
GET zstack/v1/vm-instances/appliances/virtual-routers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 823cd67ecc7c4e6fa25efbc7f9b5130b" \
-X GET http://localhost:8080/zstack/v1/vm-instances/appliances/virtual-routers?q=name=Test-Router
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 5b8a868c89ef434086caeb6ade4613bf" \
-X GET http://localhost:8080/zstack/v1/vm-instances/appliances/virtual-routers/a1f8c5edc13743d79ec8c9d912d1c280
```



可查询字段

运行CLI命令行工具，输入`QueryVirtualRouterVm`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "eb4c132875424e19aa200c5685f7d9ca",
"name": "Test-VM",
"description": "Appliance VM",
"zoneUuid": "453595b58b1f407aa8b551c279738191",
"clusterUuid": "bc24a488a7c740ef828839d6624b15a2",
"imageUuid": "729f3c664fb14ffa8886cbf5d14bec47",
"hostUuid": "bdd8a04c22b6482287a2ac071319f59d",
"lastHostUuid": "bc6337a5a73142c8afbc4108f69595cf",
"instanceOfferingUuid": "5beedb45ba9547a4a154c747c69c38bd",
"rootVolumeUuid": "b07d68c5879b49a680f6fc375d06603f",
"platform": "Linux",
"defaultL3NetworkUuid": "dfd914d7f33a434a880fd0cd29db1ad1",
"type": "UserVm",
"hypervisorType": "KVM",
"memorySize": 8.589934592E9,
"cpuNum": 1.0,
"allocatorStrategy": "LastHostPreferredAllocatorStrategy",
"createDate": "Jun 7, 2017 9:21:17 PM",
"lastOpDate": "Jun 7, 2017 9:21:17 PM",
"state": "Running",
"vmNics": [
        {
"uuid": "ba1a965bee39412c962735987da7722a",
"vmInstanceUuid": "eb4c132875424e19aa200c5685f7d9ca",
"usedIpUuid": "7250d89102a44251aa49a5bcf093d484",
"l3NetworkUuid": "dfd914d7f33a434a880fd0cd29db1ad1",
"ip": "192.168.1.10",
"mac": "00:0c:29:bd:99:fc",
"netmask": "255.255.255.0",
"gateway": "192.168.1.1",
"deviceId": 0.0,
"createDate": "Jun 7, 2017 9:21:17 PM",
"lastOpDate": "Jun 7, 2017 9:21:17 PM"
        }
      ],
"allVolumes": [
        {
"uuid": "b07d68c5879b49a680f6fc375d06603f",
"name": "Root-Volume-For-VM-eb4c132875424e19aa200c5685f7d9ca",
"primaryStorageUuid": "f82bd3273e1a42a7bc53f1d098d07c63",
"vmInstanceUuid": "eb4c132875424e19aa200c5685f7d9ca",
"diskOfferingUuid": "71a6bbc236974c188ad258875a0cc837",
"rootImageUuid": "729f3c664fb14ffa8886cbf5d14bec47",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-b07d68c5879b49a680f6fc375d06603f/b07d68c5879b49a680f6fc375d06603f.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:21:17 PM",
"lastOpDate": "Jun 7, 2017 9:21:17 PM"
        }
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
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryVirtualRouterVmAction action = new QueryVirtualRouterVmAction();
action.conditions = asList("name=Test-Router");
action.sessionId = "f25578538ecf4a55b98d51e5b8788adb";
QueryVirtualRouterVmAction.Result res = action.call();
```

 Python SDK

```
QueryVirtualRouterVmAction action = QueryVirtualRouterVmAction()
action.conditions = ["name=Test-Router"]
action.sessionId = "d1cd40ad61f149689bb358c997377d4a"
QueryVirtualRouterVmAction.Result res = action.call()
```

---

#### 查询服务云主机(QueryApplianceVm)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/appliances
GET zstack/v1/vm-instances/appliances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fee14fed21eb4535bcd2fd6a11fa9dcd" \
-X GET http://localhost:8080/zstack/v1/vm-instances/appliances?q=uuid=59b2f0ff7d3e49faab66fdb4bdfee249
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f11e69b5788b458e8149425132902365" \
-X GET http://localhost:8080/zstack/v1/vm-instances/appliances/5eaf0998a54345e5bb25bfdad34b2b31
```



可查询字段

运行CLI命令行工具，输入`QueryApplianceVm`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "f71a399a79794ab8a41e26a601ac7387",
"name": "Test-VM",
"description": "Appliance VM",
"zoneUuid": "4cf173a14e67440c9349c1e236a56c37",
"clusterUuid": "07412e72791c474fa240b75da1b210c5",
"imageUuid": "7bc33ed9760f424a9b9ff21fc0bbb48e",
"hostUuid": "0cbed62c52bc407e994c966f246363bd",
"lastHostUuid": "08921382c4f44705bae7cba6414c811d",
"instanceOfferingUuid": "e056c84995cb4d68ac78dbcc30af3f4f",
"rootVolumeUuid": "2557a6f997ee457fad526e179a76e8c0",
"platform": "Linux",
"defaultL3NetworkUuid": "748fc87b7fcb456cbea47432e52b377d",
"type": "UserVm",
"hypervisorType": "KVM",
"memorySize": 8.589934592E9,
"cpuNum": 1.0,
"allocatorStrategy": "LastHostPreferredAllocatorStrategy",
"createDate": "Jun 7, 2017 9:20:39 PM",
"lastOpDate": "Jun 7, 2017 9:20:39 PM",
"state": "Running",
"vmNics": [
        {
"uuid": "d2dfc67ddf28431bb64cc90fe0e113f6",
"vmInstanceUuid": "f71a399a79794ab8a41e26a601ac7387",
"usedIpUuid": "f654374b78534f5fb9b75873084932a3",
"l3NetworkUuid": "748fc87b7fcb456cbea47432e52b377d",
"ip": "192.168.1.10",
"mac": "00:0c:29:bd:99:fc",
"netmask": "255.255.255.0",
"gateway": "192.168.1.1",
"deviceId": 0.0,
"createDate": "Jun 7, 2017 9:20:39 PM",
"lastOpDate": "Jun 7, 2017 9:20:39 PM"
        }
      ],
"allVolumes": [
        {
"uuid": "2557a6f997ee457fad526e179a76e8c0",
"name": "Root-Volume-For-VM-f71a399a79794ab8a41e26a601ac7387",
"primaryStorageUuid": "d00057b39df9494bbaf00d047dd04825",
"vmInstanceUuid": "f71a399a79794ab8a41e26a601ac7387",
"diskOfferingUuid": "20346d1b6643492fbc4da8d6baf4b6d2",
"rootImageUuid": "7bc33ed9760f424a9b9ff21fc0bbb48e",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-2557a6f997ee457fad526e179a76e8c0/2557a6f997ee457fad526e179a76e8c0.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:20:39 PM",
"lastOpDate": "Jun 7, 2017 9:20:39 PM"
        }
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
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryApplianceVmAction action = new QueryApplianceVmAction();
action.conditions = asList("uuid=691c9a2eb7964cdd8cfad52a4acece7b");
action.sessionId = "9fec03d462184d6b9a87d314c00597ed";
QueryApplianceVmAction.Result res = action.call();
```

 Python SDK

```
QueryApplianceVmAction action = QueryApplianceVmAction()
action.conditions = ["uuid=0c17514849ac49809d6e6047fc4b4978"]
action.sessionId = "485840ed54bc40cc9e47feabd0475ae7"
QueryApplianceVmAction.Result res = action.call()
```

---

#### 创建路由器规格(CreateVirtualRouterOffering)



##### API请求

 URLs

```
POST zstack/v1/instance-offerings/virtual-routers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"zoneUuid": "b2826f6c4a5b433b87916e2240132ffa",
"managementNetworkUuid": "2f8e7e8636db4313b735edddc488a961",
"imageUuid": "bc78c126c6a94ee3aec0c840b50730a7",
"publicNetworkUuid": "95c8cc36b34e4ad89d0eb9b0b6ee02e6",
"isDefault": true,
"name": "VirtualRouter-Offering",
"cpuNum": 2.0,
"memorySize": 1024.0,
"sortKey": 0.0,
"type": "VirtualRouter"
  },
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth bca83008f4154b488a8167f021144e4d" \
-X POST -d '{"params":{"zoneUuid":"a0f488a96504388cae48c6c489c5f368","managementNetworkUuid":"3f5412e1ad0b3021bbdb77503fc7de86","imageUuid":"23743ebd52213235a11e21245100bd57","publicNetworkUuid":"1a24d621f66432eb845b3835697538ed","isDefault":true,"name":"VirtualRouter-Offering","cpuNum":2.0,"memorySize":1024.0,"sortKey":0.0,"type":"VirtualRouter"}}' \
http://localhost:8080/zstack/v1/instance-offerings/virtual-routers
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
| zoneUuid | String | body(包含在params结构中) | 区域UUID |  | 0.6 |
| managementNetworkUuid | String | body(包含在params结构中) | 管理L3网络UUID |  | 0.6 |
| imageUuid | String | body(包含在params结构中) | 镜像UUID |  | 0.6 |
| publicNetworkUuid (可选) | String | body(包含在params结构中) | 公有L3网络UUID |  | 0.6 |
| isDefault (可选) | Boolean | body(包含在params结构中) | 默认 |  | 0.6 |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| cpuNum | int | body(包含在params结构中) | CPU数量 |  | 0.6 |
| memorySize | long | body(包含在params结构中) | 内存大小 |  | 0.6 |
| allocatorStrategy (可选) | String | body(包含在params结构中) | 分配策略 | DefaultHostAllocatorStrategy LastHostPreferredAllocatorStrategy LeastVmPreferredHostAllocatorStrategy MinimumCPUUsageHostAllocatorStrategy MinimumMemoryUsageHostAllocatorStrategy MaxInstancePerHostHostAllocatorStrategy | 0.6 |
| sortKey (可选) | int | body(包含在params结构中) | 排序主键 |  | 0.6 |
| type (可选) | String | body(包含在params结构中) | 类型 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "db5bb944a9ef48eda9ff68d3eaedefed",
"name": "instanceOffering1",
"cpuNum": 2.0,
"cpuSpeed": 1.0,
"type": "UserVm",
"allocatorStrategy": "Mevoco",
"createDate": "Jun 7, 2017 9:20:13 PM",
"lastOpDate": "Jun 7, 2017 9:20:13 PM",
"state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 0.6 |

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
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
CreateVirtualRouterOfferingAction action = new CreateVirtualRouterOfferingAction();
action.zoneUuid = "389c6a48c332450ea280933b34e61ac4";
action.managementNetworkUuid = "381c2166c0454d95aed829715ae294b8";
action.imageUuid = "a4da1399797145bc87e36b424e5336af";
action.publicNetworkUuid = "5bf6caac74304a489eda76ae64624f6b";
action.isDefault = true;
action.name = "VirtualRouter-Offering";
action.cpuNum = 2.0;
action.memorySize = 1024.0;
action.sortKey = 0.0;
action.type = "VirtualRouter";
action.sessionId = "b811bf42d0b541ea993787b1fa80e724";
CreateVirtualRouterOfferingAction.Result res = action.call();
```

 Python SDK

```
CreateVirtualRouterOfferingAction action = CreateVirtualRouterOfferingAction()
action.zoneUuid = "d115bed650ad45128aff5216c9f72d23"
action.managementNetworkUuid = "1b4f915b327d488db04c517b767e2731"
action.imageUuid = "737992cde79646ce915681b74e4c4de7"
action.publicNetworkUuid = "6af154a9cd274134ac44d2d889474158"
action.isDefault = true
action.name = "VirtualRouter-Offering"
action.cpuNum = 2.0
action.memorySize = 1024.0
action.sortKey = 0.0
action.type = "VirtualRouter"
action.sessionId = "71db629e6f484b3187c48ecb1d65dcea"
CreateVirtualRouterOfferingAction.Result res = action.call()
```

---

#### 查询路由器规格(QueryVirtualRouterOffering)



##### API请求

 URLs

```
GET zstack/v1/instance-offerings/virtual-routers
GET zstack/v1/instance-offerings/virtual-routers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 94af029a0bed40d68dbabeff17f22add" \
-X GET http://localhost:8080/zstack/v1/instance-offerings/virtual-routers
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth db0361e95b29493db9bc03cd35db6129" \
-X GET http://localhost:8080/zstack/v1/instance-offerings/virtual-routers/e422506307254250b817c4f7aa70f277
```



可查询字段

运行CLI命令行工具，输入`QueryVirtualRouterOffering`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"managementNetworkUuid": "6d5e54344898416c9a20a104341c82d5",
"publicNetworkUuid": "c6a23a0ed6ad4337a35d8a946694f8ea",
"zoneUuid": "a12ffae2039847a8b9046478ad03fecd",
"isDefault": true,
"imageUuid": "ca56a16b15bb47c0a26055e28d1e621f",
"name": "VirtualRouter-Offering",
"cpuNum": 2.0,
"cpuSpeed": 1.0,
"memorySize": 1024.0,
"type": "VirtualRouter"
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
| managementNetworkUuid | String |  | 0.6 |
| publicNetworkUuid | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| isDefault | Boolean |  | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Integer |  | 0.6 |
| memorySize | Long |  | 0.6 |
| type | String |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryVirtualRouterOfferingAction action = new QueryVirtualRouterOfferingAction();
action.conditions = asList();
action.sessionId = "8779bc03a81d463bbebee36eedcc8197";
QueryVirtualRouterOfferingAction.Result res = action.call();
```

 Python SDK

```
QueryVirtualRouterOfferingAction action = QueryVirtualRouterOfferingAction()
action.conditions = []
action.sessionId = "ec9a74a6c42241fb95575a9ba79c6fa6"
QueryVirtualRouterOfferingAction.Result res = action.call()
```

---

#### 更新路由器规格(UpdateVirtualRouterOffering)



##### API请求

 URLs

```
PUT zstack/v1/instance-offerings/virtual-routers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVirtualRouterOffering": {
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
-X PUT -d '{"updateVirtualRouterOffering":{"isDefault":false}}' \
http://localhost:8080/zstack/v1/instance-offerings/virtual-routers/46a68145223e3c4fb25b5de2b12e43c2/actions
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
| isDefault (可选) | Boolean | body(包含在**updateVirtualRouterOffering**结构中) | 默认 |  | 0.6 |
| imageUuid (可选) | String | body(包含在**updateVirtualRouterOffering**结构中) | 镜像UUID |  | 0.6 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateVirtualRouterOffering**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateVirtualRouterOffering**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| allocatorStrategy (可选) | String | body(包含在**updateVirtualRouterOffering**结构中) |  | DefaultHostAllocatorStrategy LastHostPreferredAllocatorStrategy LeastVmPreferredHostAllocatorStrategy MinimumCPUUsageHostAllocatorStrategy MinimumMemoryUsageHostAllocatorStrategy MaxInstancePerHostHostAllocatorStrategy | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "99395ef3a9083f7ba2d64201d6afc6b0",
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
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 0.6 |

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
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
UpdateVirtualRouterOfferingAction action = new UpdateVirtualRouterOfferingAction();
action.isDefault = false;
action.uuid = "46a68145223e3c4fb25b5de2b12e43c2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVirtualRouterOfferingAction.Result res = action.call();
```

 Python SDK

```
UpdateVirtualRouterOfferingAction action = UpdateVirtualRouterOfferingAction()
action.isDefault = false
action.uuid = "46a68145223e3c4fb25b5de2b12e43c2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVirtualRouterOfferingAction.Result res = action.call()
```

---

#### 获取路由器可加载外部网络(GetAttachablePublicL3ForVRouter)



获取路由可加载的公有网络和系统网络，将自动排除地址冲突的网络。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/appliances/virtual-routers/{vmInstanceUuid}/attachable-public-l3s
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 15085fa6b94f46c1bd4bb4f6b69aa092" \
-X GET http://localhost:8080/zstack/v1/vm-instances/appliances/virtual-routers/ac547d8a596c45ca864cd53235499c18/attachable-public-l3s
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 路由器的UUID |  | 2.2 |
| systemTags (可选) | List | query |  |  | 2.2 |
| userTags (可选) | List | query |  |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "03108cd5c1c9427ea954fe35e8ae6811",
      "name": "test-pub-l3",
      "description": "test pub l3",
      "zoneUuid": "a18dc0e9dc054349af6adeda2efd17f0",
      "l2NetworkUuid": "e1791fb069554a69b05caf77d6d900a7",
      "system": true,
      "createDate": "Sep 29, 2017 2:41:24 PM",
      "lastOpDate": "Sep 29, 2017 2:41:24 PM",
      "ipRanges": [
        {
          "l3NetworkUuid": "3c26ee27f6e549b9974535ab1e04ad33",
          "name": "test ip range",
          "startIp": "100.64.0.10",
          "endIp": "100.64.0.100",
          "netmask": "255.255.255.0",
          "gateway": "100.64.0.1",
          "networkCidr": "100.64.0.0/24",
          "createDate": "Sep 29, 2017 2:41:24 PM",
          "lastOpDate": "Sep 29, 2017 2:41:24 PM"
        }
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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| type | String |  | 2.2 |
| zoneUuid | String | 区域UUID | 2.2 |
| l2NetworkUuid | String | 二层网络UUID | 2.2 |
| state | String |  | 2.2 |
| dnsDomain | String |  | 2.2 |
| system | Boolean |  | 2.2 |
| category | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| dns | List |  | 2.2 |
| ipRanges | List | 详情参考[ipRanges] | 2.2 |
| networkServices | List | 详情参考[networkServices] | 2.2 |
| hostRoute | List | 详情参考[hostRoute] | 2.3 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| l3NetworkUuid | String | 三层网络UUID | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| startIp | String |  | 2.2 |
| endIp | String |  | 2.2 |
| netmask | String |  | 2.2 |
| gateway | String |  | 2.2 |
| networkCidr | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 2.2 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 2.2 |
| networkServiceType | String |  | 2.2 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
GetAttachablePublicL3ForVRouterAction action = new GetAttachablePublicL3ForVRouterAction();
action.vmInstanceUuid = "851b21ed7425479daf3783b886f6ab35";
action.sessionId = "8f1a0a142f514a49849df351c40d6116";
GetAttachablePublicL3ForVRouterAction.Result res = action.call();
```

 Python SDK

```
GetAttachablePublicL3ForVRouterAction action = GetAttachablePublicL3ForVRouterAction()
action.vmInstanceUuid = "f78e670c912447b68dcae9a6af79617c"
action.sessionId = "99e6b06b41ff4d16bb2c2b11e4e3a7bb"
GetAttachablePublicL3ForVRouterAction.Result res = action.call()
```

---

#### 路由器路由表相关接口

---

#### 创建路由表(CreateVRouterRouteTable)



##### API请求

 URLs

```
POST zstack/v1/vrouter-route-tables
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "Test-VRouterRouteTable",
    "description": "Test-VRouterRouteTable"
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
-X POST -d '{"params":{"name":"Test-VRouterRouteTable","description":"Test-VRouterRouteTable"}}' \
http://localhost:8080/zstack/v1/vrouter-route-tables
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在`params`结构中) | 资源名称 |  | 2.1 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 2.1 |
| resourceUuid (可选) | String | body(包含在`params`结构中) |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-route-table",
    "description": "Test route table",
    "attachedRouterRefs": [],
    "routeEntries": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | VRouterRouteTableInventory | 详情参考[inventory] | 2.1 |

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
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| attachedRouterRefs | List | 详情参考[attachedRouterRefs] | 2.1 |
| routeEntries | List | 详情参考[routeEntries] | 2.1 |

 #attachedRouterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| virtualRouterVmUuid | String |  | 2.1 |
| routeTableUuid | String |  | 2.1 |

 #routeEntries
-

-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| type | String | 类型 允许用户添加"静态路由"、"黑洞路由"两种类型，系统会根据是否填下一跳自动判断类型 | 2.1 |
| routeTableUuid | String | 路由表UUID | 2.1 |
| destination | String | 目标网络地址 | 2.1 |
| target | String | 下一跳地址 为一个路由器设备目前可以直接到达的IP地址，如果不可以直接到达，将会进行递归路由 | 2.1 |
| distance | Integer | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |



##### SDK示例

 Java SDK

```
CreateVRouterRouteTableAction action = new CreateVRouterRouteTableAction();
action.name = "Test-VRouterRouteTable";
action.description = "Test-VRouterRouteTable";
action.sessionId = "36ae8b4476774bbd819b694d466f5351";
CreateVRouterRouteTableAction.Result res = action.call();
```

 Python SDK

```
CreateVRouterRouteTableAction action = CreateVRouterRouteTableAction()
action.name = "Test-VRouterRouteTable"
action.description = "Test-VRouterRouteTable"
action.sessionId = "c68d30a1ccc9487381ea5ec872cfcced"
CreateVRouterRouteTableAction.Result res = action.call()
```

---

#### 删除路由表(DeleteVRouterRouteTable)



##### API请求

 URLs

```
DELETE zstack/v1/vrouter-route-tables/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c92c3c7cf7c64dac9e783ab3414e7901" \
-X DELETE http://localhost:8080/zstack/v1/vrouter-route-tables/865cd01ad01f4c46b0a63163eb13e20b?deleteMode=Permissive
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
DeleteVRouterRouteTableAction action = new DeleteVRouterRouteTableAction();
action.uuid = "fb0b9186685544bcb5af032b1426736a";
action.deleteMode = "Permissive";
action.sessionId = "aa1c19e2398949c99132c47e97f11569";
DeleteVRouterRouteTableAction.Result res = action.call();
```

 Python SDK

```
DeleteVRouterRouteTableAction action = DeleteVRouterRouteTableAction()
action.uuid = "dcf18f99774046de99d5791bfba27b35"
action.deleteMode = "Permissive"
action.sessionId = "c2345a70fb6b4ffabc717ca555e60782"
DeleteVRouterRouteTableAction.Result res = action.call()
```

---

#### 查询路由表(QueryVRouterRouteTable)



##### API请求

 URLs

```
GET zstack/v1/vrouter-route-tables
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 48eaf58e3b6e4c51a56c8d9caa991311" \
-X GET http://localhost:8080/zstack/v1/vrouter-route-tables
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 20f83215e3bf491782fe7646a42b5c8b" \
-X GET http://localhost:8080/zstack/v1/vrouter-route-tables/3b8991d7295a4cccb08d028911a9164b
```



可查询字段

运行CLI命令行工具，输入`QueryVRouterRouteTable`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QueryVRouterRouteTableAction action = new QueryVRouterRouteTableAction();
action.conditions = asList();
action.sessionId = "1e7d262944584f57a8908c9acd1ec62f";
QueryVRouterRouteTableAction.Result res = action.call();
```

 Python SDK

```
QueryVRouterRouteTableAction action = QueryVRouterRouteTableAction()
action.conditions = []
action.sessionId = "6ad6d8b304984d3ba5b64ddd2062efcb"
QueryVRouterRouteTableAction.Result res = action.call()
```

---

#### 获取路由器实时路由表(GetVRouterRouteTable)



返回路由设备实际实时路由表，包括非用户添加的全部路由。

##### API请求

 URLs

```
GET zstack/v1/vrouter-route-tables/vrouter/{virtualRouterVmUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth ef1c95285ef3435c949854955edc6c66" \
-X GET http://localhost:8080/zstack/v1/vrouter-route-tables/vrouter/27e810f019b74106877814ddb0c6e3bf
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| virtualRouterVmUuid | String | url | 路由器设备UUID |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
        "type": "ZStack"
        "destination": "0.0.0.0/0"
        "target": "100.64.201.1"
        "status": "selected"
    },
    {
        "uuid": "7b86eaba601c4ceda5987036c9ea7981"
        "type": "UserStatic"
        "destination": "100.64.0.0/24"
        "target": "100.64.201.10"
        "distance": "128"
        "status": "selected"
    },
    {
        "uuid": "d15ebfe03aec49e6a0453e74eede350d"
        "type": "UserStatic"
        "destination": "100.64.0.0/24"
        "target": "100.64.201.11"
        "distance": "128"
        "status": "active"
    },
    {
        "type": "ZStack"
        "destination": "10.0.57.94/32"
        "target": "eth0"
    },
    {
        "uuid": "50e6070313fa4a05b17907a32be0a63f"
        "type": "UserStatic"
        "destination": "10.0.57.94/32"
        "target": "100.64.201.12"
        "distance": "1"
        "status": "inactive"
    },
    {
        "type": "DirectConnect"
        "destination": "192.168.197.0/24"
        "target": "eth1"
        "status": "selected"
    },
    {
        "uuid": "6b446d5cf776471c913582ab30bd6340"
        "type": "DirectConnect"
        "destination": "192.168.197.0/24"
        "target": "100.64.201.13"
        "distance": "1"
        "status": "inactive"
    },
    {
        "uuid": "0aad7115c1f94aa1bf5db1a4d6d3fd17"
        "type": "UserBlackHole"
        "destination": "192.168.198.0/24"
        "distance": "1"
        "status": "selected"
    },
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
-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| type | String | 除用户添加的**静态路由**、**黑洞路由**外，**ZStack**类型表示由系统添加的路由，**DirectConnect**表示直连路由 | 2.1 |
| destination | String | 目标网络地址 | 2.1 |
| target | String | 下一跳地址或网卡 | 2.1 |
| distance | Integer | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 | 2.1 |
| status | String | 路由状态 **active**：活跃的路由 **inactive**：表示非活跃路由 **selected**：表示多路径路由中活跃的路由 | 2.1 |



##### SDK示例

 Java SDK

```
GetVRouterRouteTableAction action = new GetVRouterRouteTableAction();
action.virtualRouterVmUuid = "dfa2698bd9f04cd5be56e5b51826359d";
action.sessionId = "8fbf06a3245a42fc99ef63f618364de7";
GetVRouterRouteTableAction.Result res = action.call();
```

 Python SDK

```
GetVRouterRouteTableAction action = GetVRouterRouteTableAction()
action.virtualRouterVmUuid = "1646d8ca4e144f63896c26488491e016"
action.sessionId = "161364959641477981aa68cd63b19348"
GetVRouterRouteTableAction.Result res = action.call()
```

---

#### 添加路由条目(AddVRouterRouteEntry)



##### API请求

 URLs

```
POST zstack/v1/vrouter-route-tables/{routeTableUuid}/route-entries
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "description": "Test route",
    "type": "UserStatic",
    "destination": "192.168.2.0/24",
    "target": "172.20.1.1"
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
-X POST -d '{"params":{"description":"Test route","type":"UserStatic","destination":"192.168.2.0/24","target":"172.20.1.1"}}' \
http://localhost:8080/zstack/v1/vrouter-route-tables/011e554588e93a849e890685d6adb6be/route-entries
```

 参数列表
-

-
-

-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.1 |
| type (可选) | String | body(包含在**params**结构中) | 类型 允许用户添加"静态路由"、"黑洞路由"两种类型，系统会根据是否填下一条自动判断类型 | UserStatic UserBlackHole | 2.1 |
| routeTableUuid | String | url | 路由表UUID |  | 2.1 |
| destination | String | body(包含在**params**结构中) | 目标网络地址，使用网络地址CIDR格式，如果用户填写的不是标准CIDR格式，系统会自动转换 |  | 2.1 |
| target (可选) | String | body(包含在**params**结构中) | 下一跳地址 为一个路由器设备目前可以直接到达的IP地址，如果不可以直接到达，将会进行递归路由 |  | 2.1 |
| distance (可选) | Integer | body(包含在**params**结构中) | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 |  | 2.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "description": "Test route",
    "type": "UserStatic",
    "routeTableUuid": "5dad5ac78c3642088dc3ed6bc4d8c853",
    "destination": "192.168.2.0/24",
    "target": "172.20.1.1",
    "distance": 128.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | VRouterRouteEntryInventory | 详情参考[inventory] | 2.1 |

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
| description | String | 资源的详细描述 | 2.1 |
| type | String | 类型，允许用户添加"静态路由"、"黑洞路由"两种类型，系统会根据是否填下一跳自动判断类型，在外在获取实时路由表API还会返回"ZStack"类型表示由系统添加的路由，"DirectConnect"直连路由 | 2.1 |
| routeTableUuid | String | 路由表UUID | 2.1 |
| destination | String | 目标网络地址 | 2.1 |
| target | String | 下一条地址 | 2.1 |
| distance | Integer | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |



##### SDK示例

 Java SDK

```
AddVRouterRouteEntryAction action = new AddVRouterRouteEntryAction();
action.description = "Test route";
action.type = "UserStatic";
action.routeTableUuid = "5c33ae47c7c94aaea08ead913ddfe0b4";
action.destination = "192.168.2.0/24";
action.target = "172.20.1.1";
action.sessionId = "f75a12a294fe4128b105e1d8f97257b3";
AddVRouterRouteEntryAction.Result res = action.call();
```

 Python SDK

```
AddVRouterRouteEntryAction action = AddVRouterRouteEntryAction()
action.description = "Test route"
action.type = "UserStatic"
action.routeTableUuid = "4fab7c04998c44b4b6d2bc4da0b35ddb"
action.destination = "192.168.2.0/24"
action.target = "172.20.1.1"
action.sessionId = "1510b167ddf54461b69e41802ddcf5eb"
AddVRouterRouteEntryAction.Result res = action.call()
```

---

#### 删除路由条目(DeleteVRouterRouteEntry)



##### API请求

 URLs

```
DELETE zstack/v1/vrouter-route-tables/{routeTableUuid}/route-entries/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 07ed3c114a7f4ca0a10861d448a8b973" \
-X DELETE http://localhost:8080/zstack/v1/vrouter-route-tables/a713099cca4c487e8ee46ed2ad798903/route-entries/44f6816c4c7444b9b93b11c385f2bb19?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| routeTableUuid | String | url |  |  | 2.1 |
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
DeleteVRouterRouteEntryAction action = new DeleteVRouterRouteEntryAction();
action.uuid = "6cc2578afb134d03959feb8cd586de06";
action.routeTableUuid = "e9b7f623b59d4cb5832a0eef61fdc273";
action.deleteMode = "Permissive";
action.sessionId = "eeda6890b1a2428087ae1c3d5b8e1311";
DeleteVRouterRouteEntryAction.Result res = action.call();
```

 Python SDK

```
DeleteVRouterRouteEntryAction action = DeleteVRouterRouteEntryAction()
action.uuid = "eb9a0a4ab242430896d50be1a75c1c0d"
action.routeTableUuid = "295cbd7c2b1746ba9907eabecdb6cdf0"
action.deleteMode = "Permissive"
action.sessionId = "dd36b5ccb2444679820945da4ba4ebf3"
DeleteVRouterRouteEntryAction.Result res = action.call()
```

---

#### 查询路由条目(QueryVRouterRouteEntry)



##### API请求

 URLs

```
GET zstack/v1/vrouter-route-tables/route-entries
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 0a9d413ce14245f89cde947aa57ae4c3" \
-X GET http://localhost:8080/zstack/v1/vrouter-route-tables/route-entries
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth eb2e3203532b405cbe9c2fde23deb53e" \
-X GET http://localhost:8080/zstack/v1/vrouter-route-tables/route-entries/6c19d2d2bad3489f8b095c98fea971a5
```



可查询字段

运行CLI命令行工具，输入`QueryVRouterRouteEntry`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "description": "Test route",
      "type": "UserStatic",
      "routeTableUuid": "4b9b27aa14794f3c98f23818d8a4b281",
      "destination": "192.168.2.0/24",
      "target": "172.20.1.1"
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
-

-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| type | String | 类型 允许用户添加"静态路由"、"黑洞路由"两种类型，系统会根据是否填下一跳自动判断类型 | 2.1 |
| routeTableUuid | String | 路由表UUID | 2.1 |
| destination | String | 目标网络地址 | 2.1 |
| target | String | 下一跳地址 为一个路由器设备目前可以直接到达的IP地址，如果不可以直接到达，将会进行递归路由 | 2.1 |
| distance | Integer | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |



##### SDK示例

 Java SDK

```
QueryVRouterRouteEntryAction action = new QueryVRouterRouteEntryAction();
action.conditions = asList();
action.sessionId = "4388bb850faf4cf69e13ecb9bbdcd77e";
QueryVRouterRouteEntryAction.Result res = action.call();
```

 Python SDK

```
QueryVRouterRouteEntryAction action = QueryVRouterRouteEntryAction()
action.conditions = []
action.sessionId = "116b877273e84748994435d8603423b4"
QueryVRouterRouteEntryAction.Result res = action.call()
```

---

#### 绑定路由表到路由器(AttachVRouterRouteTableToVRouter)



##### API请求

 URLs

```
POST zstack/v1/vrouter-route-tables/{routeTableUuid}/attach
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "virtualRouterVmUuid": "49e427183ffe4dd8b7c40a635f11f71b"
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
-X POST -d '{"params":{"virtualRouterVmUuid":"2b8bbccba54438e994d4d14d570a1807"}}' \
http://localhost:8080/zstack/v1/vrouter-route-tables/ee1fc77524993a60a8c0e4b7245470db/attach
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| routeTableUuid | String | url |  |  | 2.1 |
| virtualRouterVmUuid | String | body(包含在**params**结构中) | 路由设备UUID |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回



返回示例

```
{
  "inventory": {
    "name": "test-route-table",
    "description": "Test route table",
    "attachedRouterRefs": [],
    "routeEntries": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | VRouterRouteTableInventory | 详情参考[inventory] | 2.1 |

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
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| attachedRouterRefs | List | 详情参考[attachedRouterRefs] | 2.1 |
| routeEntries | List | 详情参考[routeEntries] | 2.1 |

 #attachedRouterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| virtualRouterVmUuid | String |  | 2.1 |
| routeTableUuid | String |  | 2.1 |

 #routeEntries
-

-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| type | String | 类型 允许用户添加"静态路由"、"黑洞路由"两种类型，系统会根据是否填下一跳自动判断类型 | 2.1 |
| routeTableUuid | String | 路由表UUID | 2.1 |
| destination | String | 目标网络地址 | 2.1 |
| target | String | 下一跳地址 为一个路由器设备目前可以直接到达的IP地址，如果不可以直接到达，将会进行递归路由 | 2.1 |
| distance | Integer | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |



##### SDK示例



Java SDK

```
AttachVRouterRouteTableToVRouterAction action = new AttachVRouterRouteTableToVRouterAction();
action.routeTableUuid = "9d77dce987404000a00dd64594863e32";
action.virtualRouterVmUuid = "bfb7963808fa4d64b94cbbc8eb593398";
action.sessionId = "48e036e5881d41fa9070d2b6aa75c7ee";
AttachVRouterRouteTableToVRouterAction.Result res = action.call();
```

 Python SDK

```
AttachVRouterRouteTableToVRouterAction action = AttachVRouterRouteTableToVRouterAction()
action.routeTableUuid = "0afcb79f56f74b1a96cce814362f861f"
action.virtualRouterVmUuid = "611126cb62094da4b6023824f0f2d0c9"
action.sessionId = "56fd37c6dff343948028d9b826ea4b10"
AttachVRouterRouteTableToVRouterAction.Result res = action.call()
```

---

#### 解绑路由表(DetachVRouterRouteTableFromVRouter)



从路由器设备解绑路由表。

##### API请求

 URLs

```
DELETE zstack/v1/vrouter-route-tables/{routeTableUuid}/detach/{virtualRouterVmUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vrouter-route-tables/2ef92879139f36e291314bed861a0cc7/detach/50391e085c803988a3fa27e210834a16
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| routeTableUuid | String | url | 路由表UUID |  | 2.1 |
| virtualRouterVmUuid | String | url | 路由表设备UUID |  | 2.1 |
| systemTags (可选) | List | body |  |  | 2.1 |
| userTags (可选) | List | body |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-route-table",
    "description": "Test route table",
    "attachedRouterRefs": [],
    "routeEntries": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |
| inventory | VRouterRouteTableInventory | 详情参考[inventory] | 2.1 |

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
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |
| attachedRouterRefs | List | 详情参考[attachedRouterRefs] | 2.1 |
| routeEntries | List | 详情参考[routeEntries] | 2.1 |

 #attachedRouterRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| virtualRouterVmUuid | String |  | 2.1 |
| routeTableUuid | String |  | 2.1 |

 #routeEntries
-

-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.1 |
| description | String | 资源的详细描述 | 2.1 |
| type | String | 类型 允许用户添加"静态路由"、"黑洞路由"两种类型，系统会根据是否填下一跳自动判断类型 | 2.1 |
| routeTableUuid | String | 路由表UUID | 2.1 |
| destination | String | 目标网络地址 | 2.1 |
| target | String | 下一跳地址 为一个路由器设备目前可以直接到达的IP地址，如果不可以直接到达，将会进行递归路由 | 2.1 |
| distance | Integer | 路由优先级，在最小匹配下如果有多条路由规则匹配，优先级数字小的规则将会被匹配 | 2.1 |
| createDate | Timestamp | 创建时间 | 2.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.1 |



##### SDK示例



Java SDK

```
DetachVRouterRouteTableFromVRouterAction action = new DetachVRouterRouteTableFromVRouterAction();
action.routeTableUuid = "c157be1c2fac4806bd0e1ce04087a9b5";
action.virtualRouterVmUuid = "b844d0085c544aecb9a1c49e6c0fa4e9";
action.sessionId = "7299252a24404d92a5ee621ea5a2e6df";
DetachVRouterRouteTableFromVRouterAction.Result res = action.call();
```

 Python SDK

```
DetachVRouterRouteTableFromVRouterAction action = DetachVRouterRouteTableFromVRouterAction()
action.routeTableUuid = "a7bece0ef6e04218af583d0d20078ec2"
action.virtualRouterVmUuid = "06a9a546ec6f4395b46fe5704f476ca2"
action.sessionId = "6923e611467343a3ad2f4c47163ad4bd"
DetachVRouterRouteTableFromVRouterAction.Result res = action.call()
```

---

#### 查询绑定关系(QueryVirtualRouterVRouterRouteTableRef)



查询路由器设备与路由表绑定关系。

##### API请求

 URLs

```
GET zstack/v1/vrouter-route-tables/virtual-router-refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 735e8b68e40442659dac22fc30d7774b" \
-X GET http://localhost:8080/zstack/v1/vrouter-route-tables/virtual-router-refs
```



可查询字段

运行CLI命令行工具，输入`QueryVirtualRouterVRouterRouteTableRef`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "virtualRouterVmUuid": "ebec6ece12504916a12f13441282bb67",
      "routeTableUuid": "fbf34e1fc6924ff3ba4c338435dd8e61"
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
| virtualRouterVmUuid | String |  | 2.1 |
| routeTableUuid | String |  | 2.1 |



##### SDK示例

 Java SDK

```
QueryVirtualRouterVRouterRouteTableRefAction action = new QueryVirtualRouterVRouterRouteTableRefAction();
action.conditions = asList();
action.sessionId = "ec7b3e5724604965a1dcf3c7eb58a7c1";
QueryVirtualRouterVRouterRouteTableRefAction.Result res = action.call();
```

 Python SDK

```
QueryVirtualRouterVRouterRouteTableRefAction action = QueryVirtualRouterVRouterRouteTableRefAction()
action.conditions = []
action.sessionId = "b2ca8cc84dae431e95cff3e95ace26c1"
QueryVirtualRouterVRouterRouteTableRefAction.Result res = action.call()
```

---

### VPC相关接口

---

#### 创建VPC路由器(CreateVpcVRouter)



##### API请求

 URLs

```
POST zstack/v1/vpc/virtual-routers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "TestVPC",
    "virtualRouterOfferingUuid": "81e8c1f14a6e352884e6941c4a2de95a",
    "description": "this is a vpc for test"
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
-X POST -d '{"params":{"name":"TestVPC","virtualRouterOfferingUuid":"81e8c1f14a6e352884e6941c4a2de95a","description":"this is a vpc for test"}}' \
http://localhost:8080/zstack/v1/vpc/virtual-routers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.2.2 |
| virtualRouterOfferingUuid | String | body(包含在**params**结构中) | 云路由规格 |  | 2.2.2 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.2.2 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源的UUID |  | 2.2.2 |
| systemTags (可选) | List | body |  |  | 2.2.2 |
| userTags (可选) | List | body |  |  | 2.2.2 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 3.10.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 3.10.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 3.10.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 主存储UUID。若指定，路由器的根云盘会在指定主存储创建 |  | 4.4.24 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 路由器根盘所需要的系统标签 |  | 4.4.24 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 0.6 |


  - 选项格式为：`haUuid::HA_GROUP_UUID`
  - 例如：`haUuid::e2af8f869eff49d2a3d6f86cadc27090`
- 例如：`haUuid::e2af8f869eff49d2a3d6f86cadc27090`
  - 选项格式为：`staticVip::L3UUID::IP`，L3UUID为路由器规格中的公网UUID，IP为用户指定的公网IP。
  - 例如：`staticVip::4ed5cce4f55a43aca8e61ebbc0c3985d::172.20.1.1                                 `
    - 选项格式为：`resourceBindings::Cluster:clusterUuid`，其中clusterUuid为对应的集群uuid
    - 例如：`resourceBindings::Cluster:2sdasf231jvznsdak`
  - 例如：`resourceBindings::Cluster:2sdasf231jvznsdak`
- 例如：`resourceBindings::Cluster:2sdasf231jvznsdak`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "applianceVmType": "vpcvrouter",
    "managementNetworkUuid": "a01fad3eb1d14bd787b8830e1d287ee3",
    "status": "Connected",
    "agentPort": 7272.0,
    "uuid": "4de286dcb34343a0b5dedaea96307c06",
    "name": "TestVPC",
    "description": "this is a vpc for test",
    "zoneUuid": "88634bc51a1345b98058c1827999bd75",
    "clusterUuid": "5ebca05bc3cf4d5b970ddb32b10455c0",
    "imageUuid": "490043dfeb814b119f0f6c264ed6bb1e",
    "hostUuid": "a19572ae4fcc4b7d8a090d06c99067fa",
    "lastHostUuid": "d374797d2d01495cb4dedd9e452909d0",
    "instanceOfferingUuid": "8fcc3c2b5e1b41e586ed07ffece475e4",
    "rootVolumeUuid": "ed5b232109f64f0dbe3342ffa8924d14",
    "platform": "Linux",
    "defaultL3NetworkUuid": "2aedc4cd00f8495f8fc08c991dd7be4c",
    "type": "ApplianceVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 4.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 9, 2017 4:20:39 PM",
    "lastOpDate": "Nov 9, 2017 4:20:39 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "6c8b46eec225440bb7179b6c797937ed",
        "vmInstanceUuid": "4de286dcb34343a0b5dedaea96307c06",
        "usedIpUuid": "033b876b861f4b9abaf594a893c1c94f",
        "l3NetworkUuid": "49e2d31895c94bf0808372360ebcae31",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 9, 2017 4:20:39 PM",
        "lastOpDate": "Nov 9, 2017 4:20:39 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "ed5b232109f64f0dbe3342ffa8924d14",
        "name": "Root-Volume-For-VM-4de286dcb34343a0b5dedaea96307c06",
        "primaryStorageUuid": "c3f1cbaf9b014c1d8989ff940ed5593a",
        "vmInstanceUuid": "4de286dcb34343a0b5dedaea96307c06",
        "diskOfferingUuid": "93bfd802ebea486ab4ce071967235b76",
        "rootImageUuid": "490043dfeb814b119f0f6c264ed6bb1e",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-ed5b232109f64f0dbe3342ffa8924d14/ed5b232109f64f0dbe3342ffa8924d14.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 9, 2017 4:20:39 PM",
        "lastOpDate": "Nov 9, 2017 4:20:39 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 2.3 |

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
| zoneUuid | String | 区域UUID | 2.3 |
| clusterUuid | String | 集群UUID | 2.3 |
| imageUuid | String | 镜像UUID | 2.3 |
| hostUuid | String | 物理机UUID | 2.3 |
| lastHostUuid | String | 上一次运行路由器设备的物理机UUID | 2.3 |
| instanceOfferingUuid | String | 计算规格UUID | 2.3 |
| rootVolumeUuid | String | 根云盘UUID | 2.3 |
| platform | String | 路由器设备运行平台 | 2.3 |
| architecture | String |  | 2.3 |
| defaultL3NetworkUuid | String | 默认三层网络UUID | 2.3 |
| type | String | 路由器设备类型 | 2.3 |
| hypervisorType | String | 路由器设备的hypervisor类型 | 2.3 |
| memorySize | Long | 内存大小 | 2.3 |
| cpuNum | Integer | cpu数量 | 2.3 |
| cpuSpeed | Long | cpu主频 | 2.3 |
| allocatorStrategy | String | 分配策略 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| state | String | 路由器设备的可用状态 | 2.3 |
| guestOsType | String |  | 2.3 |
| vmNics | List | 详情参考[vmNics] | 2.3 |
| allVolumes | List | 详情参考[allVolumes] | 2.3 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 2.3 |

 #vmNics
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| vmInstanceUuid | String | 云主机UUID | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| ip | String | ip地址 | 2.3 |
| mac | String | mac地址 | 2.3 |
| hypervisorType | String |  | 2.3 |
| netmask | String | 子网掩码 | 2.3 |
| gateway | String | 网关 | 2.3 |
| metaData | String | 内部使用的保留域 | 2.3 |
| deviceId | Integer | 设备ID 标识网卡在客户操作系统（guest operating system）以太网设备中顺序的整型数字。 例如， 0通常代表eth0，1通常代表eth1。 | 2.3 |
| deviceId | Integer |  | 2.3 |
| type | String |  | 2.3 |
| internalName | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| usedIps | List | 详情参考[usedIps] | 2.3 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| ipRangeUuid | String | IP段UUID | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| ipVersion | Integer |  | 2.3 |
| ip | String |  | 2.3 |
| netmask | String |  | 2.3 |
| gateway | String |  | 2.3 |
| usedFor | String |  | 2.3 |
| ipInLong | long |  | 2.3 |
| vmNicUuid | String | 云主机网卡UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| primaryStorageUuid | String | 主存储UUID | 2.3 |
| vmInstanceUuid | String | 云主机UUID | 2.3 |
| diskOfferingUuid | String | 云盘规格UUID | 2.3 |
| rootImageUuid | String | 根云盘镜像UUID | 2.3 |
| installPath | String | 安装路径 | 2.3 |
| type | String | 云盘类型 | 2.3 |
| format | String | 云盘格式 | 2.3 |
| size | Long | 云盘虚拟容量 | 2.3 |
| actualSize | Long | 云盘实际容量 | 2.3 |
| deviceId | Integer | 设备ID | 2.3 |
| state | String | 云盘的可用状态 | 2.3 |
| status | String | 云盘的连接状态 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| volumeQos | String |  | 2.3 |
| lastDetachDate | Timestamp |  | 2.3 |
| lastVmInstanceUuid | String |  | 2.3 |
| isShareable | Boolean | 云盘是否共享 | 2.3 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| deviceId | Integer |  | 0.6 |
| isoUuid | String |  | 0.6 |
| isoInstallPath | String |  | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
CreateVpcVRouterAction action = new CreateVpcVRouterAction();
action.name = "TestVPC";
action.virtualRouterOfferingUuid = "81e8c1f14a6e352884e6941c4a2de95a";
action.description = "this is a vpc for test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVpcVRouterAction.Result res = action.call();
```

 Python SDK

```
CreateVpcVRouterAction action = CreateVpcVRouterAction()
action.name = "TestVPC"
action.virtualRouterOfferingUuid = "81e8c1f14a6e352884e6941c4a2de95a"
action.description = "this is a vpc for test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVpcVRouterAction.Result res = action.call()
```

---

#### 查询VPC路由器(QueryVpcRouter)



##### API请求

 URLs

```
GET zstack/v1/vpc/virtual-routers
GET zstack/v1/vpc/virtual-routers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/virtual-routers?q=name=vpcRouter
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/virtual-routers/205d11a687d03b46852d4d24fc85ae75
```



可查询字段

运行CLI命令行工具，输入`QueryVpcRouter`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "dns": [
        {
          "vpcRouterUuid": "4183325c367d384a84458f89c35d62a8",
          "dns": "8.8.8.8"
        }
      ],
      "uuid": "4183325c367d384a84458f89c35d62a8",
      "name": "Test-VM",
      "description": "web server VM",
      "zoneUuid": "77689ed989253db0bb5863b103e06ecd",
      "clusterUuid": "7f124c177f1535cebca9b0a555998e8e",
      "imageUuid": "9e0eaf2e7ea93bc0bfc9f22d3f7328cd",
      "hostUuid": "72547613a0bf320caca7a149d99e3ed4",
      "lastHostUuid": "9e54bc8261f6396db6c66eb8a76e246d",
      "instanceOfferingUuid": "e115b1542d2e35c8b9fbb5afd9fd067c",
      "rootVolumeUuid": "48afbfcc2d36391586f7b6b44df93712",
      "platform": "Linux",
      "defaultL3NetworkUuid": "70dc6311679638c0a1e323d583332463",
      "type": "UserVm",
      "hypervisorType": "KVM",
      "memorySize": 8.589934592E9,
      "cpuNum": 1.0,
      "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "state": "Running",
      "vmNics": [
        {
          "uuid": "df1eae8361983c86a46d3d922ad0a6f4",
          "vmInstanceUuid": "4183325c367d384a84458f89c35d62a8",
          "usedIpUuid": "2bdc1a927ebb34f89a880d8aefc7c763",
          "l3NetworkUuid": "70dc6311679638c0a1e323d583332463",
          "ip": "192.168.1.10",
          "mac": "00:0c:29:bd:99:fc",
          "netmask": "255.255.255.0",
          "gateway": "192.168.1.1",
          "deviceId": 0.0,
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "allVolumes": [
        {
          "uuid": "48afbfcc2d36391586f7b6b44df93712",
          "name": "Root-Volume-For-VM-4183325c367d384a84458f89c35d62a8",
          "primaryStorageUuid": "a33d58803a2a307bb1762b9209e64ba2",
          "vmInstanceUuid": "4183325c367d384a84458f89c35d62a8",
          "diskOfferingUuid": "c762d59a3e6f36d89bff2ce3ea4b864c",
          "rootImageUuid": "9e0eaf2e7ea93bc0bfc9f22d3f7328cd",
          "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-48afbfcc2d36391586f7b6b44df93712/48afbfcc2d36391586f7b6b44df93712.qcow2",
          "type": "Root",
          "format": "qcow2",
          "size": 1.073741824E11,
          "actualSize": 2.147483648E10,
          "deviceId": 0.0,
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
| publicNetworkUuid | String |  | 0.6 |
| virtualRouterVips | List |  | 0.6 |
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| dns | List | 详情参考[dns] | 2.4 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #dns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vpcRouterUuid | String |  | 2.4 |
| dns | String |  | 2.4 |
| createDate | Timestamp | 创建时间 | 2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4 |

 #vmNics

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryVpcRouterAction action = new QueryVpcRouterAction();
action.conditions = asList("name=vpcRouter");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVpcRouterAction.Result res = action.call();
```

 Python SDK

```
QueryVpcRouterAction action = QueryVpcRouterAction()
action.conditions = ["name=vpcRouter"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVpcRouterAction.Result res = action.call()
```

---

#### 获取VPC路由器可加载的三层网络(GetAttachableVpcL3Network)



##### API请求

 URLs

```
POST zstack/v1/vpc/virtual-routers/{uuid}/attachable-vpc-l3s
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/vpc/virtual-routers/417478f0b61732408176f16615ab6d32/attachable-vpc-l3s
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "81c29ac529163ffa9d4f246d68518dd1",
      "name": "test-l3",
      "description": "test l3",
      "type": "L3VpcNetwork",
      "zoneUuid": "aea3c47aa8273399ac8827fbc78aae67",
      "l2NetworkUuid": "cbba13d2e8273d529cfcb89c66d54fb2",
      "system": false,
      "category": "Private",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "ipRanges": [
        {
          "l3NetworkUuid": "cc5980d5c4173dd5b57dc1b28cdb0683",
          "name": "test ip range",
          "startIp": "100.64.0.10",
          "endIp": "100.64.0.100",
          "netmask": "255.255.255.0",
          "gateway": "100.64.0.1",
          "networkCidr": "100.64.0.0/24",
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
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 三层网络类型 | 2.3 |
| zoneUuid | String | 区域UUID | 2.3 |
| l2NetworkUuid | String | 二层网络UUID | 2.3 |
| state | String | 三层网络的可用状态 | 2.3 |
| dnsDomain | String | DNS域 | 2.3 |
| system | Boolean | 是否用于系统云主机 | 2.3 |
| category | String | 网络类型，需要与system标签搭配使用，system为true时可设置为Public、Private | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| dns | List | 域名解析服务器 | 2.3 |
| ipRanges | List | 详情参考[ipRanges] | 2.3 |
| networkServices | List | 详情参考[networkServices] | 2.3 |
| hostRoute | List | 详情参考[hostRoute] |  |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| startIp | String | 起始ip | 2.3 |
| endIp | String | 结束ip | 2.3 |
| netmask | String | 子网掩码 | 2.3 |
| gateway | String | 网关 | 2.3 |
| networkCidr | String | CIDR范围 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 2.3 |
| networkServiceType | String | 网络服务类型 | 2.3 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
GetAttachableVpcL3NetworkAction action = new GetAttachableVpcL3NetworkAction();
action.uuid = "417478f0b61732408176f16615ab6d32";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetAttachableVpcL3NetworkAction.Result res = action.call();
```

 Python SDK

```
GetAttachableVpcL3NetworkAction action = GetAttachableVpcL3NetworkAction()
action.uuid = "417478f0b61732408176f16615ab6d32"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetAttachableVpcL3NetworkAction.Result res = action.call()
```

---

#### 获取实时流量状态(GetVpcVRouterDistributedRoutingConnections)



获取VPC路由器实时流量状态。

##### API请求

 URLs

```
GET zstack/v1/vpc/virtual-routers/{uuid}/tracked-connections
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/virtual-routers/f37467649dca3ee8a0ddad0b856a8df6/tracked-connections
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源。需要开启分布式路由，才能获取到VPC路由器实时流量状态。 |  | 2.3 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventories": {
    "192.168.31.156,192.168.105.175": {
      "sourceL2NetworkType": "L2VlanNetwork",
      "destinationL2NetworkType": "L2VlanNetwork",
      "sourceMac": "fa:bf:6e:37:c3:00",
      "destinationMac": "fa:3a:b3:ae:f4:00",
      "sourceL2NetworkVni": 3101.0,
      "destinationL2NetworkVni": 3105.0,
      "lastOpDate": "2017-12-02 15:23:44.872099448 +0800 CST m\u003d+70467.712498312",
      "status": "ZSNP_DST_SUCC"
    }
  }
}
```


-
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventories | Map | 实时流量状态集合，结构为Map Key是通信两端的地址； 内容为一个Map，包含：源网络和目的网络的类型、VNI，通信两端的Mac，上一次操作的时间以及目前的优化状态； 其中**ZSNP_DST_SUCC**表示优化成功 | 2.3 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |



##### SDK示例

 Java SDK

```
GetVpcVRouterDistributedRoutingConnectionsAction action = new GetVpcVRouterDistributedRoutingConnectionsAction();
action.uuid = "f37467649dca3ee8a0ddad0b856a8df6";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVpcVRouterDistributedRoutingConnectionsAction.Result res = action.call();
```

 Python SDK

```
GetVpcVRouterDistributedRoutingConnectionsAction action = GetVpcVRouterDistributedRoutingConnectionsAction()
action.uuid = "f37467649dca3ee8a0ddad0b856a8df6"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVpcVRouterDistributedRoutingConnectionsAction.Result res = action.call()
```

---

#### 获取分布式路由是否打开(GetVpcVRouterDistributedRoutingEnabled)



获取VPC路由器分布式路由是否打开。

##### API请求

 URLs

```
GET zstack/v1/vpc/virtual-routers/{uuid}/distributed-routing
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/virtual-routers/9fab45026c2239d884db36ce9190660f/distributed-routing
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回



返回示例

```
{
  "enabled": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enabled | boolean | 获取VPC路由器分布式路由是否打开 | 2.3 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |



##### SDK示例

 Java SDK

```
GetVpcVRouterDistributedRoutingEnabledAction action = new GetVpcVRouterDistributedRoutingEnabledAction();
action.uuid = "9fab45026c2239d884db36ce9190660f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVpcVRouterDistributedRoutingEnabledAction.Result res = action.call();
```

 Python SDK

```
GetVpcVRouterDistributedRoutingEnabledAction action = GetVpcVRouterDistributedRoutingEnabledAction()
action.uuid = "9fab45026c2239d884db36ce9190660f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVpcVRouterDistributedRoutingEnabledAction.Result res = action.call()
```

---

#### 设置分布式路由开关(SetVpcVRouterDistributedRoutingEnabled)



设置VPC路由器分布式路由开关。

##### API请求

 URLs

```
POST zstack/v1/vpc/virtual-routers/{uuid}/distributed-routing
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
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
-X POST -d '{"params":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/vpc/virtual-routers/fed6eb5e41d83512ba1f836b5473b4fc/distributed-routing
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**params**结构中) | 资源的可用状态 | enable disable | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "enabled": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enabled | boolean | 设置VPC路由器分布式路由开关是否打开 | 2.3 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |



##### SDK示例

 Java SDK

```
SetVpcVRouterDistributedRoutingEnabledAction action = new SetVpcVRouterDistributedRoutingEnabledAction();
action.uuid = "fed6eb5e41d83512ba1f836b5473b4fc";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVpcVRouterDistributedRoutingEnabledAction.Result res = action.call();
```

 Python SDK

```
SetVpcVRouterDistributedRoutingEnabledAction action = SetVpcVRouterDistributedRoutingEnabledAction()
action.uuid = "fed6eb5e41d83512ba1f836b5473b4fc"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVpcVRouterDistributedRoutingEnabledAction.Result res = action.call()
```

---

#### 向VPC路由器添加DNS(AddDnsToVpcRouter)



##### API请求

 URLs

```
POST zstack/v1/vpc/virtual-routers/{uuid}/dns
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "dns": "8.8.8.8"
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
-X POST -d '{"params":{"dns":"8.8.8.8"}}' \
http://localhost:8080/zstack/v1/vpc/virtual-routers/a6b12587c0c93b50956c689cae6e4404/dns
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.4.0 |
| dns | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.4.0 |
| systemTags (可选) | List | body |  |  | 2.4.0 |
| userTags (可选) | List | body |  |  | 2.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "dns": [
      {
        "vpcRouterUuid": "8ddf2e00f7623bf38125744211f17c12",
        "dns": "8.8.8.8"
      }
    ],
    "applianceVmType": "vpcvrouter",
    "managementNetworkUuid": "363b0211294d3fe1af316723d18d54a3",
    "status": "Connected",
    "agentPort": 7272.0,
    "uuid": "8ddf2e00f7623bf38125744211f17c12",
    "name": "TestVPC",
    "description": "this is a vpc for test",
    "zoneUuid": "d3cd927aa5953371aa13b82688258c13",
    "clusterUuid": "61a2077d121637a09f27f5d1926d545e",
    "imageUuid": "09024d35eab63bc080dc0f0e7aa3fa5c",
    "hostUuid": "092e3f1b71a53b01bcc2919fb31b43a3",
    "lastHostUuid": "64eb21f707d53db4822602c3714fc69e",
    "instanceOfferingUuid": "ec1a12c9f896392bb42757c02f24870c",
    "rootVolumeUuid": "857592621b163444899c275b258d780c",
    "platform": "Linux",
    "defaultL3NetworkUuid": "ad1173e8e97e385a8d3aaec182ee1fc3",
    "type": "ApplianceVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 4.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "e0ba27ddc8fe33e882cc15dc60dcd58e",
        "vmInstanceUuid": "8ddf2e00f7623bf38125744211f17c12",
        "usedIpUuid": "0aecfc23129a3b7395fbff6e5d17303c",
        "l3NetworkUuid": "d3d2b9e10ce4376782ccf210ad62f49e",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "857592621b163444899c275b258d780c",
        "name": "Root-Volume-For-VM-8ddf2e00f7623bf38125744211f17c12",
        "primaryStorageUuid": "1b880ac4a03e3ce0859b52e4c4274e76",
        "vmInstanceUuid": "8ddf2e00f7623bf38125744211f17c12",
        "diskOfferingUuid": "37537d10d728350687d0739141dd4b42",
        "rootImageUuid": "09024d35eab63bc080dc0f0e7aa3fa5c",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-857592621b163444899c275b258d780c/857592621b163444899c275b258d780c.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.4 |
| inventory | VpcRouterVmInventory | 详情参考[inventory] | 2.4 |

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
| publicNetworkUuid | String |  | 0.6 |
| virtualRouterVips | List |  | 0.6 |
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| dns | List | 详情参考[dns] | 2.4 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #dns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vpcRouterUuid | String |  | 2.4 |
| dns | String |  | 2.4 |
| createDate | Timestamp | 创建时间 | 2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4 |

 #vmNics

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
AddDnsToVpcRouterAction action = new AddDnsToVpcRouterAction();
action.uuid = "a6b12587c0c93b50956c689cae6e4404";
action.dns = "8.8.8.8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddDnsToVpcRouterAction.Result res = action.call();
```

 Python SDK

```
AddDnsToVpcRouterAction action = AddDnsToVpcRouterAction()
action.uuid = "a6b12587c0c93b50956c689cae6e4404"
action.dns = "8.8.8.8"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddDnsToVpcRouterAction.Result res = action.call()
```

---

#### 从VPC路由器移除DNS(RemoveDnsFromVpcRouter)



##### API请求

 URLs

```
DELETE zstack/v1/vpc/virtual-routers/{uuid}/dns?dns={dns}

```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vpc/virtual-routers/704e0c0e0fd23566bfac3416fb5cd5dd/dns?dns=8.8.4.4
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| dns | String | url |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "dns": [
      {
        "vpcRouterUuid": "67a8f5c346923086bff064bc332dee1f",
        "dns": "8.8.8.8"
      }
    ],
    "applianceVmType": "vpcvrouter",
    "managementNetworkUuid": "8afbedef6a8c3c44b0da74ac251c8710",
    "status": "Connected",
    "agentPort": 7272.0,
    "uuid": "67a8f5c346923086bff064bc332dee1f",
    "name": "TestVPC",
    "description": "this is a vpc for test",
    "zoneUuid": "ed322832de35346e83ee3af58ae0ba1f",
    "clusterUuid": "8152b3dd20ad39eab72feeb39b54bd5a",
    "imageUuid": "d9f78c772d123b72b423f2d38d177404",
    "hostUuid": "2936a13adb2d321aaf2f8a6bad17b512",
    "lastHostUuid": "dc046362b4903f87b4cf99a31bf8b0c0",
    "instanceOfferingUuid": "d0656359210c3448baaedb3284a59607",
    "rootVolumeUuid": "7df4d03d3f773176b84d0015b26eba3a",
    "platform": "Linux",
    "defaultL3NetworkUuid": "91fce38c41e83adcbd1a2ddc7a657a68",
    "type": "ApplianceVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 4.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "13f3d555d0083171b02f542e359699b6",
        "vmInstanceUuid": "67a8f5c346923086bff064bc332dee1f",
        "usedIpUuid": "da61650287ed32238b557d6c11c245d5",
        "l3NetworkUuid": "27fc48db6d34311e9a68c61c4f7737b1",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "7df4d03d3f773176b84d0015b26eba3a",
        "name": "Root-Volume-For-VM-67a8f5c346923086bff064bc332dee1f",
        "primaryStorageUuid": "e274d0516c1432bdbc9187a95f03958b",
        "vmInstanceUuid": "67a8f5c346923086bff064bc332dee1f",
        "diskOfferingUuid": "f36042caf77835b0912e008a1ff49d88",
        "rootImageUuid": "d9f78c772d123b72b423f2d38d177404",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-7df4d03d3f773176b84d0015b26eba3a/7df4d03d3f773176b84d0015b26eba3a.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VpcRouterVmInventory | 详情参考[inventory] | 0.6 |

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
| publicNetworkUuid | String |  | 0.6 |
| virtualRouterVips | List |  | 0.6 |
| applianceVmType | String |  | 0.6 |
| managementNetworkUuid | String |  | 0.6 |
| defaultRouteL3NetworkUuid | String |  | 0.6 |
| status | String |  | 0.6 |
| agentPort | Integer |  | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| dns | List | 详情参考[dns] | 2.4 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #dns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vpcRouterUuid | String |  | 2.4 |
| dns | String |  | 2.4 |
| createDate | Timestamp | 创建时间 | 2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4 |

 #vmNics

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

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
RemoveDnsFromVpcRouterAction action = new RemoveDnsFromVpcRouterAction();
action.uuid = "704e0c0e0fd23566bfac3416fb5cd5dd";
action.dns = "8.8.4.4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveDnsFromVpcRouterAction.Result res = action.call();
```

 Python SDK

```
RemoveDnsFromVpcRouterAction action = RemoveDnsFromVpcRouterAction()
action.uuid = "704e0c0e0fd23566bfac3416fb5cd5dd"
action.dns = "8.8.4.4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveDnsFromVpcRouterAction.Result res = action.call()
```

---

#### 获取VPC路由器的网络服务状态(GetVpcVRouterNetworkServiceState)



##### API请求

 URLs

```
GET zstack/v1/vpc/virtual-routers/{uuid}/networkservicestate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/virtual-routers/51d5917daba83390978604d7b9c8c13a/networkservicestate?networkService=SNAT
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| networkService | String | query | 路由器提供的网络服务 | SNAT | 3.4.0 |
| systemTags (可选) | List | query | 路由器的系统标签 |  | 3.4.0 |
| userTags (可选) | List | query | 路由器的用户标签 |  | 3.4.0 |


  - 选项格式为：`disabledService::SNAT`
  - 例如：`disabledService::SNAT`
  - **SystemTag**没有`resourceType::VirtualRouterVmVO`的VPC路由器则是表示开启SNAT功能,有此flag表示关闭SNAT功能。
- **SystemTag**没有`resourceType::VirtualRouterVmVO`的VPC路由器则是表示开启SNAT功能,有此flag表示关闭SNAT功能。


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "state": "enable"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| state | String |  | 3.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |



##### SDK示例

 Java SDK

```
GetVpcVRouterNetworkServiceStateAction action = new GetVpcVRouterNetworkServiceStateAction();
action.uuid = "51d5917daba83390978604d7b9c8c13a";
action.networkService = "SNAT";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVpcVRouterNetworkServiceStateAction.Result res = action.call();
```

 Python SDK

```
GetVpcVRouterNetworkServiceStateAction action = GetVpcVRouterNetworkServiceStateAction()
action.uuid = "51d5917daba83390978604d7b9c8c13a"
action.networkService = "SNAT"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVpcVRouterNetworkServiceStateAction.Result res = action.call()
```

---

#### 设置VPC路由器的网络服务(SetVpcVRouterNetworkServiceState)



##### API请求

 URLs

```
POST zstack/v1/vpc/virtual-routers/{uuid}/networkservicestate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "networkService": "SNAT",
    "state": "enable"
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
-X POST -d '{"params":{"networkService":"SNAT","state":"enable"}}' http://localhost:8080/zstack/v1/vpc/virtual-routers/824ad6ab1b5a3bd1ad935fa098d77826/networkservicestate
```

 参数列表
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| networkService | String | body(包含在**params**结构中) | 路由器提供的网络服务 | SNAT | 3.4.0 |
| state | String | body(包含在**params**结构中) | 服务状态 | enable disable | 3.4.0 |
| systemTags (可选) | List | body | 路由器的系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 路由器的用户标签 |  | 3.4.0 |


  - 选项格式为：`disabledService::SNAT`
  - 例如：`disabledService::SNAT`
  - **SystemTag**没有`resourceType::VirtualRouterVmVO`的VPC路由器则是表示开启SNAT功能,有此flag表示关闭SNAT功能。
- **SystemTag**没有`resourceType::VirtualRouterVmVO`的VPC路由器则是表示开启SNAT功能,有此flag表示关闭SNAT功能。


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "state": "enable"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| state | String |  | 3.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |



##### SDK示例

 Java SDK

```
SetVpcVRouterNetworkServiceStateAction action = new SetVpcVRouterNetworkServiceStateAction();
action.uuid = "824ad6ab1b5a3bd1ad935fa098d77826";
action.networkService = "SNAT";
action.state = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVpcVRouterNetworkServiceStateAction.Result res = action.call();
```

 Python SDK

```
SetVpcVRouterNetworkServiceStateAction action = SetVpcVRouterNetworkServiceStateAction()
action.uuid = "824ad6ab1b5a3bd1ad935fa098d77826"
action.networkService = "SNAT"
action.state = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVpcVRouterNetworkServiceStateAction.Result res = action.call()
```

---

#### 更新高可用组仲裁ip(ChangeVpcHaGroupMonitorIps)



##### API请求

 URLs

```
PUT zstack/v1/vpc/hagroups/{uuid}/monitorIps
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVpcHaGroupMonitorIps": {
    "monitorIps": [
      "8.8.8.8"
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
-X PUT -d '{"changeVpcHaGroupMonitorIps":{"monitorIps":["8.8.8.8"]}}' http://localhost:8080/zstack/v1/vpc/hagroups/580eaca0eceb3da1bc03aa0b2dfaed64/monitorIps
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.1 |
| monitorIps (可选) | List | body(包含在**changeVpcHaGroupMonitorIps**结构中) |  |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "85ba2342e37930f6a0cdd056565654cd",
    "name": "test-vpcha",
    "monitors": [
      {
        "id": 0.0,
        "vpcHaRouterUuid": "85ba2342e37930f6a0cdd056565654cd",
        "monitorIp": "1.1.1.1"
      }
    ],
    "vrRefs": [
      {
        "uuid": "c109f7860f2439ca86d1dbc51dbece39",
        "vpcHaRouterUuid": "85ba2342e37930f6a0cdd056565654cd"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5 |
| inventory | VpcHaGroupInventory | 详情参考[inventory] | 3.5 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5 |
| name | String | 资源名称 | 3.5 |
| description | String | 资源的详细描述 | 3.5 |
| createDate | Timestamp | 创建时间 | 3.5 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5 |
| monitors | List | 详情参考[monitors] | 3.5 |
| vrRefs | List | 详情参考[vrRefs] | 3.5 |
| services | List | 详情参考[services] | 3.5 |
| usedIps | List | 详情参考[usedIps] | 3.5 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5 |
| vpcHaRouterUuid | String |  | 3.5 |
| monitorIp | String |  | 3.5 |
| createDate | Timestamp | 创建时间 | 3.5 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5 |

 #vrRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5 |
| VpcHaRouterUuid | String |  | 3.5 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5 |
| vpcHaRouterUuid | String |  | 3.5 |
| networkServiceName | String |  | 3.5 |
| networkServiceUuid | String |  | 3.5 |
| createDate | Timestamp | 创建时间 | 3.5 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5 |
| vpcHaRouterUuid | String |  | 3.5 |
| vipUuid | String | VIP UUID | 3.5 |
| l3NetworkUuid | String | 三层网络UUID | 3.5 |
| ip | String |  | 3.5 |
| netmask | String |  | 3.5 |
| createDate | Timestamp | 创建时间 | 3.5 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5 |



##### SDK示例

 Java SDK

```
ChangeVpcHaGroupMonitorIpsAction action = new ChangeVpcHaGroupMonitorIpsAction();
action.uuid = "580eaca0eceb3da1bc03aa0b2dfaed64";
action.monitorIps = asList("8.8.8.8");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVpcHaGroupMonitorIpsAction.Result res = action.call();
```

 Python SDK

```
ChangeVpcHaGroupMonitorIpsAction action = ChangeVpcHaGroupMonitorIpsAction()
action.uuid = "580eaca0eceb3da1bc03aa0b2dfaed64"
action.monitorIps = [8.8.8.8]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVpcHaGroupMonitorIpsAction.Result res = action.call()
```

---

#### 创建高可用组(CreateVpcHaGroup)



##### API请求

 URLs

```
POST zstack/v1/vpc/hagroups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "vpcha-router",
    "description": "this is a vpc for test",
    "monitorIps": [
      "8.8.8.8"
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
-X POST -d '{"params":{"name":"vpcha-router","description":"this is a vpc for test","monitorIps":["8.8.8.8"]}}' http://localhost:8080/zstack/v1/vpc/hagroups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.5.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.5.1 |
| monitorIps (可选) | List | body(包含在**params**结构中) |  |  | 3.5.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.5.1 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d32cd856d4603754aa30d8fe60ea07a4",
    "name": "test-vpcha",
    "monitors": [
      {
        "id": 0.0,
        "vpcHaRouterUuid": "d32cd856d4603754aa30d8fe60ea07a4",
        "monitorIp": "1.1.1.1"
      }
    ],
    "vrRefs": [
      {
        "uuid": "a26bee5e86153d2aa579c01756ca0944",
        "vpcHaRouterUuid": "d32cd856d4603754aa30d8fe60ea07a4"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | VpcHaGroupInventory | 详情参考[inventory] | 3.5.1 |

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
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |
| monitors | List | 详情参考[monitors] | 3.5.1 |
| vrRefs | List | 详情参考[vrRefs] | 3.5.1 |
| services | List | 详情参考[services] | 3.5.1 |
| usedIps | List | 详情参考[usedIps] | 3.5.1 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| monitorIp | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |

 #vrRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.1 |
| VpcHaRouterUuid | String |  | 3.5.1 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| networkServiceName | String |  | 3.5.1 |
| networkServiceUuid | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| vipUuid | String | VIP UUID | 3.5.1 |
| l3NetworkUuid | String | 三层网络UUID | 3.5.1 |
| ip | String |  | 3.5.1 |
| netmask | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
CreateVpcHaGroupAction action = new CreateVpcHaGroupAction();
action.name = "vpcha-router";
action.description = "this is a vpc for test";
action.monitorIps = asList("8.8.8.8");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVpcHaGroupAction.Result res = action.call();
```

 Python SDK

```
CreateVpcHaGroupAction action = CreateVpcHaGroupAction()
action.name = "vpcha-router"
action.description = "this is a vpc for test"
action.monitorIps = [8.8.8.8]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVpcHaGroupAction.Result res = action.call()
```

---

#### 删除高可用组(DeleteVpcHaGroup)



##### API请求

 URLs

```
DELETE zstack/v1/vpc/hagroups/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vpc/hagroups/90376847491b3d9a85df382f65d60a16?deleteMode=Permissive
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
DeleteVpcHaGroupAction action = new DeleteVpcHaGroupAction();
action.uuid = "90376847491b3d9a85df382f65d60a16";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVpcHaGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteVpcHaGroupAction action = DeleteVpcHaGroupAction()
action.uuid = "90376847491b3d9a85df382f65d60a16"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVpcHaGroupAction.Result res = action.call()
```

---

#### 更新高可用组(UpdateVpcHaGroup)



##### API请求

 URLs

```
PUT zstack/v1/vpc/hagroups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVpcHaGroup": {
    "name": "ha-1",
    "description": "vpc ha test"
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
-X PUT -d '{"updateVpcHaGroup":{"name":"ha-1","description":"vpc ha test"}}' http://localhost:8080/zstack/v1/vpc/hagroups/0f3d8a0c297f3972b798d128070ca785/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.5.1 |
| name (可选) | String | body(包含在**updateVpcHaGroup**结构中) | 资源名称 |  | 3.5.1 |
| description (可选) | String | body(包含在**updateVpcHaGroup**结构中) | 资源的详细描述 |  | 3.5.1 |
| systemTags (可选) | List | body |  |  | 3.5.1 |
| userTags (可选) | List | body |  |  | 3.5.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5ddaa8fa444c3b0a8e9187d87eb026f6",
    "name": "test-vpcha",
    "monitors": [
      {
        "id": 0.0,
        "vpcHaRouterUuid": "5ddaa8fa444c3b0a8e9187d87eb026f6",
        "monitorIp": "1.1.1.1"
      }
    ],
    "vrRefs": [
      {
        "uuid": "184c6cab367e3da0aaf7624aa40bb3d0",
        "vpcHaRouterUuid": "5ddaa8fa444c3b0a8e9187d87eb026f6"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.1 |
| inventory | VpcHaGroupInventory | 详情参考[inventory] | 3.5.1 |

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
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |
| monitors | List | 详情参考[monitors] | 3.5.1 |
| vrRefs | List | 详情参考[vrRefs] | 3.5.1 |
| services | List | 详情参考[services] | 3.5.1 |
| usedIps | List | 详情参考[usedIps] | 3.5.1 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| monitorIp | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |

 #vrRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.1 |
| VpcHaRouterUuid | String |  | 3.5.1 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| networkServiceName | String |  | 3.5.1 |
| networkServiceUuid | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| vipUuid | String | VIP UUID | 3.5.1 |
| l3NetworkUuid | String | 三层网络UUID | 3.5.1 |
| ip | String |  | 3.5.1 |
| netmask | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
UpdateVpcHaGroupAction action = new UpdateVpcHaGroupAction();
action.uuid = "0f3d8a0c297f3972b798d128070ca785";
action.name = "ha-1";
action.description = "vpc ha test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVpcHaGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateVpcHaGroupAction action = UpdateVpcHaGroupAction()
action.uuid = "0f3d8a0c297f3972b798d128070ca785"
action.name = "ha-1"
action.description = "vpc ha test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVpcHaGroupAction.Result res = action.call()
```

---

#### 查询高可用(QueryVpcHaGroup)



##### API请求

 URLs

```
GET zstack/v1/vpc/hagroups
GET zstack/v1/vpc/hagroups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/hagroups?q=uuid=3c5648a2a8a931cb9396d07479e833f7
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/hagroups/2dc01a9b66a73a9399a7c1f29c91863a
```



可查询字段

运行CLI命令行工具，输入QueryVpcHaGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "843c2f1083d33689b1ecc19bd802158b",
      "name": "test-vpcha",
      "monitors": [
        {
          "id": 0.0,
          "vpcHaRouterUuid": "843c2f1083d33689b1ecc19bd802158b",
          "monitorIp": "1.1.1.1"
        }
      ],
      "vrRefs": [
        {
          "uuid": "87c3f098d2c7387b867ba0beb5d1a561",
          "vpcHaRouterUuid": "843c2f1083d33689b1ecc19bd802158b"
        }
      ]
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
| monitors | List | 详情参考[monitors] | 3.5.1 |
| vrRefs | List | 详情参考[vrRefs] | 3.5.1 |
| services | List | 详情参考[services] | 3.5.1 |
| usedIps | List | 详情参考[usedIps] | 3.5.1 |

 #monitors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| monitorIp | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |

 #vrRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.5.1 |
| VpcHaRouterUuid | String |  | 3.5.1 |

 #services

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| networkServiceName | String |  | 3.5.1 |
| networkServiceUuid | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.5.1 |
| vpcHaRouterUuid | String |  | 3.5.1 |
| vipUuid | String | VIP UUID | 3.5.1 |
| l3NetworkUuid | String | 三层网络UUID | 3.5.1 |
| ip | String |  | 3.5.1 |
| netmask | String |  | 3.5.1 |
| createDate | Timestamp | 创建时间 | 3.5.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.5.1 |



##### SDK示例

 Java SDK

```
QueryVpcHaGroupAction action = new QueryVpcHaGroupAction();
action.conditions = asList("uuid=26a2360f164c3a7fba94281b9e24046c");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVpcHaGroupAction.Result res = action.call();
```

 Python SDK

```
QueryVpcHaGroupAction action = QueryVpcHaGroupAction()
action.conditions = ["uuid=ddbc6e5deaee3fdfad33738ea1daefca"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVpcHaGroupAction.Result res = action.call()
```

---

#### 更新虚拟路由器(UpdateVirtualRouter)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/appliances/virtual-routers/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVirtualRouter": {
    "defaultRouteL3NetworkUuid": "9889c6be639d3aefb72ae84f435c94c7"
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
-X PUT -d '{"updateVirtualRouter":{"defaultRouteL3NetworkUuid":"9889c6be639d3aefb72ae84f435c94c7"}}' http://localhost:8080/zstack/v1/vm-instances/appliances/virtual-routers/abd7e9700ed839a583c5af6f8b4dd417/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | body(包含在**updateVirtualRouter**结构中) | 资源的UUID，唯一标示该资源 |  | 3.9.0 |
| defaultRouteL3NetworkUuid (可选) | String | body(包含在**updateVirtualRouter**结构中) |  |  | 3.9.0 |
| systemTags (可选) | List | body |  |  | 3.9.0 |
| userTags (可选) | List | body |  |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "publicNetworkUuid": "142981c8c8243113b52db453575fb03f",
    "managementNetworkUuid": "1d182cdfa0a93daa9e4eb275b86645ff",
    "name": "Test-Router",
    "description": "this is a virtual router vm",
    "clusterUuid": "ea4cb55d692a3c45a154892539117472",
    "imageUuid": "3764ffab842333c895a9e1746315fab3",
    "instanceOfferingUuid": "ba4019cd841430258d8943f281b36c19"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | VirtualRouterVmInventory | 详情参考[inventory] | 3.9.0 |

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
| publicNetworkUuid | String |  | 3.9.0 |
| virtualRouterVips | List |  | 3.9.0 |
| applianceVmType | String |  | 3.9.0 |
| managementNetworkUuid | String |  | 3.9.0 |
| defaultRouteL3NetworkUuid | String |  | 3.9.0 |
| status | String |  | 3.9.0 |
| agentPort | Integer |  | 3.9.0 |
| haStatus | String |  | 3.9.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| zoneUuid | String | 区域UUID | 3.9.0 |
| clusterUuid | String | 集群UUID | 3.9.0 |
| imageUuid | String | 镜像UUID | 3.9.0 |
| hostUuid | String | 物理机UUID | 3.9.0 |
| lastHostUuid | String |  | 3.9.0 |
| instanceOfferingUuid | String | 计算规格UUID | 3.9.0 |
| rootVolumeUuid | String | 根云盘UUID | 3.9.0 |
| platform | String |  | 3.9.0 |
| defaultL3NetworkUuid | String |  | 3.9.0 |
| type | String |  | 3.9.0 |
| hypervisorType | String |  | 3.9.0 |
| memorySize | Long |  | 3.9.0 |
| cpuNum | Integer |  | 3.9.0 |
| cpuSpeed | Long |  | 3.9.0 |
| allocatorStrategy | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| state | String |  | 3.9.0 |
| vmNics | List | 详情参考[vmNics] | 3.9.0 |
| allVolumes | List | 详情参考[allVolumes] | 3.9.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 3.9.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| vmInstanceUuid | String | 云主机UUID | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ip | String |  | 3.9.0 |
| mac | String |  | 3.9.0 |
| hypervisorType | String |  | 3.9.0 |
| netmask | String |  | 3.9.0 |
| gateway | String |  | 3.9.0 |
| metaData | String |  | 3.9.0 |
| ipVersion | Integer |  | 3.9.0 |
| driverType | String |  | 3.9.0 |
| deviceId | Integer |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| usedIps | List | 详情参考[usedIps] | 3.9.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| ipRangeUuid | String | IP段UUID | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ipVersion | Integer |  | 3.9.0 |
| ip | String |  | 3.9.0 |
| netmask | String |  | 3.9.0 |
| gateway | String |  | 3.9.0 |
| usedFor | String |  | 3.9.0 |
| ipInLong | long |  | 3.9.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| primaryStorageUuid | String | 主存储UUID | 3.9.0 |
| vmInstanceUuid | String | 云主机UUID | 3.9.0 |
| diskOfferingUuid | String | 云盘规格UUID | 3.9.0 |
| rootImageUuid | String |  | 3.9.0 |
| installPath | String |  | 3.9.0 |
| type | String |  | 3.9.0 |
| format | String |  | 3.9.0 |
| size | Long |  | 3.9.0 |
| actualSize | Long |  | 3.9.0 |
| deviceId | Integer |  | 3.9.0 |
| state | String |  | 3.9.0 |
| status | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| isShareable | Boolean |  | 3.9.0 |
| volumeQos | String |  | 3.9.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| vmInstanceUuid | String | 云主机UUID | 3.9.0 |
| deviceId | Integer |  | 3.9.0 |
| isoUuid | String |  | 3.9.0 |
| isoInstallPath | String |  | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
UpdateVirtualRouterAction action = new UpdateVirtualRouterAction();
action.vmInstanceUuid = "abd7e9700ed839a583c5af6f8b4dd417";
action.defaultRouteL3NetworkUuid = "9889c6be639d3aefb72ae84f435c94c7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVirtualRouterAction.Result res = action.call();
```

 Python SDK

```
UpdateVirtualRouterAction action = UpdateVirtualRouterAction()
action.vmInstanceUuid = "abd7e9700ed839a583c5af6f8b4dd417"
action.defaultRouteL3NetworkUuid = "9889c6be639d3aefb72ae84f435c94c7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVirtualRouterAction.Result res = action.call()
```

---

#### VPC路由器软件版本升级(UpdateVirtualRouterSoftwareVersion)



##### API请求

 URLs

```
POST zstack/v1/vpc/virtual-routers/{uuid}/softwareversion
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "softwareName": "IPsec",
    "targetVersion": "5.9.4"
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
-X POST -d '{"params":{"softwareName":"IPsec","targetVersion":"5.9.4"}}' \
http://localhost:8080/zstackv1/vpc/virtual-routers/8971d40547ca3641ac809bb967426e17/softwareversion
```

 参数列表
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| softwareName | String | body(包含在**params**结构中) | VPC路由器软件名称 | IPsec | 4.5.0 |
| targetVersion | String | body(包含在**params**结构中) | 目标版本 | 4.5.2 5.9.4 | 4.5.0 |
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
UpdateVirtualRouterSoftwareVersionAction action = new UpdateVirtualRouterSoftwareVersionAction();
action.uuid = "8971d40547ca3641ac809bb967426e17";
action.softwareName = "IPsec";
action.targetVersion = "5.9.4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVirtualRouterSoftwareVersionAction.Result res = action.call();
```

 Python SDK

```
UpdateVirtualRouterSoftwareVersionAction action = UpdateVirtualRouterSoftwareVersionAction()
action.uuid = "8971d40547ca3641ac809bb967426e17"
action.softwareName = "IPsec"
action.targetVersion = "5.9.4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVirtualRouterSoftwareVersionAction.Result res = action.call()
```

---

#### 获取VPC路由器软件版本(GetVirtualRouterSoftwareVersion)



##### API请求

 URLs

```
GET zstack/v1/vpc/virtual-routers/{uuid}/softwareversion
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vpc/virtual-routers/softwareversion \
uuid=c25bedf80bde367a86344add1264ed06&softwareName=IPsec&needUpdate=false
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | query | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| softwareName | String | query | VPC路由器软件名称 | IPsec | 4.5.0 |
| needUpdate (可选) | Boolean | query | 是否需要升级 |  | 4.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "4eb255bf21ff3b3384768b06aa612818",
      "softwareName": "IPsec",
      "currentVersion": "4.5.2",
      "latestVersion": "5.9.4"
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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| softwareName | String | VPC软件名称 | 4.5.0 |
| currentVersion | String | 当前版本 | 4.5.0 |
| latestVersion | String | 最新版本 | 4.5.0 |

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
GetVirtualRouterSoftwareVersionAction action = new GetVirtualRouterSoftwareVersionAction();
action.uuid = "c25bedf80bde367a86344add1264ed06";
action.softwareName = "IPsec";
action.needUpdate = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVirtualRouterSoftwareVersionAction.Result res = action.call();
```

 Python SDK

```
GetVirtualRouterSoftwareVersionAction action = GetVirtualRouterSoftwareVersionAction()
action.uuid = "c25bedf80bde367a86344add1264ed06"
action.softwareName = "IPsec"
action.needUpdate = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVirtualRouterSoftwareVersionAction.Result res = action.call()
```

---

### OSPF相关接口

---

#### 创建路由区域资源(CreateVRouterOspfArea)



##### API请求

 URLs

```
POST zstack/v1/routerArea
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "areaId": "1.1.1.1"
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
-X POST -d '{"params":{"areaId":"1.1.1.1"}}' http://localhost:8080/zstack/v1/routerArea
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| areaId | String | body(包含在**params**结构中) | 区域Id，区域标识 |  | 3.4.0 |
| areaAuth (可选) | String | body(包含在**params**结构中) | OSPF区域的认证方式 |  | 3.4.0 |
| areaType (可选) | String | body(包含在**params**结构中) | 区域类型 |  | 3.4.0 |
| password (可选) | String | body(包含在**params**结构中) | 认证方式为plaintext时的密码 |  | 3.4.0 |
| keyId (可选) | Integer | body(包含在**params**结构中) | 认证方式为MD5时用到的keyid |  | 3.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 区域资源的唯一标识 |  | 3.4.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d82d2b6108b0331b90161b939987e5ae",
    "areaId": "1",
    "type": "Stub",
    "authentication": "Plaintext",
    "password": "password",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | RouterAreaInventory | 详情参考[inventory] | 3.4.0 |

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
| areaId | String |  | 3.4.0 |
| type | String |  | 3.4.0 |
| authentication | String |  | 3.4.0 |
| password | String |  | 3.4.0 |
| keyId | Integer |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
CreateVRouterOspfAreaAction action = new CreateVRouterOspfAreaAction();
action.areaId = "1.1.1.1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVRouterOspfAreaAction.Result res = action.call();
```

 Python SDK

```
CreateVRouterOspfAreaAction action = CreateVRouterOspfAreaAction()
action.areaId = "1.1.1.1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVRouterOspfAreaAction.Result res = action.call()
```

---

#### 删除OSPF路由区域(DeleteVRouterOspfArea)



##### API请求

 URLs

```
DELETE zstack/v1/routerArea/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/routerArea/8c7d2c714e1231549dd2a66a3f140ae5
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| deleteMode (可选) | String | body |  |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



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
DeleteVRouterOspfAreaAction action = new DeleteVRouterOspfAreaAction();
action.uuid = "8c7d2c714e1231549dd2a66a3f140ae5";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVRouterOspfAreaAction.Result res = action.call();
```

 Python SDK

```
DeleteVRouterOspfAreaAction action = DeleteVRouterOspfAreaAction()
action.uuid = "8c7d2c714e1231549dd2a66a3f140ae5"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVRouterOspfAreaAction.Result res = action.call()
```

---

#### 获取OSPF的邻居信息(GetVRouterOspfNeighbor)



##### API请求

 URLs

```
GET zstack/v1/routerArea/{vRouterUuid}/neighbor
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/routerArea/dfb6151287b632599becfc5716b8c374/neighbor
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | url | 路由器的uuid，唯一标识 |  | 3.4.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "neighbors": [
    null,
    null
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| neighbors | List | 详情参考[neighbors] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #neighbors

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | String |  | 3.4.0 |
| priority | String |  | 3.4.0 |
| state | String |  | 3.4.0 |
| deadTime | String |  | 3.4.0 |
| neighborAddress | String |  | 3.4.0 |
| device | String |  | 3.4.0 |



##### SDK示例

 Java SDK

```
GetVRouterOspfNeighborAction action = new GetVRouterOspfNeighborAction();
action.vRouterUuid = "dfb6151287b632599becfc5716b8c374";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVRouterOspfNeighborAction.Result res = action.call();
```

 Python SDK

```
GetVRouterOspfNeighborAction action = GetVRouterOspfNeighborAction()
action.vRouterUuid = "dfb6151287b632599becfc5716b8c374"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVRouterOspfNeighborAction.Result res = action.call()
```

---

#### 查询OSPF路由区域信息(QueryVRouterOspfArea)



##### API请求

 URLs

```
GET zstack/v1/routerArea
GET zstack/v1/routerArea/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/routerArea?q=areaId=1.1.1.1
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/routerArea/aba25a3e8e0e3b46bcb48042812eb38d
```



可查询字段

运行CLI命令行工具，输入QueryVRouterOspfArea并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "24b7fb05b43538238f2071c81255fb35",
      "areaId": "1",
      "type": "Standard",
      "authentication": "None",
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
| areaId | String |  | 3.4.0 |
| type | String |  | 3.4.0 |
| authentication | String |  | 3.4.0 |
| password | String |  | 3.4.0 |
| keyId | Integer |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
QueryVRouterOspfAreaAction action = new QueryVRouterOspfAreaAction();
action.conditions = asList("areaId=1.1.1.1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVRouterOspfAreaAction.Result res = action.call();
```

 Python SDK

```
QueryVRouterOspfAreaAction action = QueryVRouterOspfAreaAction()
action.conditions = ["areaId=1.1.1.1"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVRouterOspfAreaAction.Result res = action.call()
```

---

#### 获取路由器的ID(GetVRouterRouterId)



##### API请求

 URLs

```
GET zstack/v1/routerArea/{vRouterUuid}/routerid
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/routerArea/9b8b08cd553c3fd1ba4efc3e6c98512d/routerid?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | url | 路由器的UUID，唯一标识 |  | 3.4.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.4.0 |


  - 选项格式为：` routeProtocolRouterId::xxxx`
  - 例如：`routeProtocolRouterId::1.1.1.1`
- 例如：`routeProtocolRouterId::1.1.1.1`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "routerId": "10.10.10.1"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| routerId | String |  | 3.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |



##### SDK示例

 Java SDK

```
GetVRouterRouterIdAction action = new GetVRouterRouterIdAction();
action.vRouterUuid = "9b8b08cd553c3fd1ba4efc3e6c98512d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVRouterRouterIdAction.Result res = action.call();
```

 Python SDK

```
GetVRouterRouterIdAction action = GetVRouterRouterIdAction()
action.vRouterUuid = "9b8b08cd553c3fd1ba4efc3e6c98512d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVRouterRouterIdAction.Result res = action.call()
```

---

#### 设置路由器的ID(SetVRouterRouterId)



##### API请求

 URLs

```
POST zstack/v1/routerArea/{vRouterUuid}/routerid
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "routerId": "10.10.10.1"
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
-X POST -d '{"params":{"routerId":"10.10.10.1"}}' http://localhost:8080/zstack/v1/routerArea/7b579cbb55f73f62a5afcfe83c823b7b/routerid
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | url | 路由器的UUID，唯一标识 |  | 3.4.0 |
| routerId | String | body(包含在**params**结构中) | IP地址形式的ID |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |


  - 选项格式为：` routeProtocolRouterId::xxxx`
  - 例如：`routeProtocolRouterId::1.1.1.1`
- 例如：`routeProtocolRouterId::1.1.1.1`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "routerId": "10.10.10.1"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| routerId | String |  | 3.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |



##### SDK示例

 Java SDK

```
SetVRouterRouterIdAction action = new SetVRouterRouterIdAction();
action.vRouterUuid = "7b579cbb55f73f62a5afcfe83c823b7b";
action.routerId = "10.10.10.1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVRouterRouterIdAction.Result res = action.call();
```

 Python SDK

```
SetVRouterRouterIdAction action = SetVRouterRouterIdAction()
action.vRouterUuid = "7b579cbb55f73f62a5afcfe83c823b7b"
action.routerId = "10.10.10.1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVRouterRouterIdAction.Result res = action.call()
```

---

#### 添加网络到OSPF的区域(AddVRouterNetworksToOspfArea)



##### API请求

 URLs

```
POST zstack/v1/routerArea/{routerAreaUuid}/router/{vRouterUuid}/addnetworks
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
      "080a5356667a34e3bda18a157e3743ec"
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
-X POST -d '{"params":{"l3NetworkUuids":["080a5356667a34e3bda18a157e3743ec"]}}' http://localhost:8080/zstack/v1/routerArea/2785aa6a32603b7a8a24b5a143975123/router/beaad9552cd531b7b59c631d0b0f7eb9/addnetworks
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| routerAreaUuid | String | url | 路由区域的id，唯一标识 |  | 3.4.0 |
| vRouterUuid | String | url | vpc路由器的唯一标识id |  | 3.4.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 3层网络的唯一标识id |  | 3.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源的标识id |  | 3.4.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 路由器系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 路由器用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "dns": [
      {
        "vpcRouterUuid": "acc537da2e003f349ed4cd9cf53eaab4",
        "dns": "8.8.8.8"
      }
    ],
    "routerAreaRef": [
      {
        "uuid": "b3a4930e15fa358b9a2943b320ecf886",
        "vRouterUuid": "b02959e102353bfd9fd14a149fa20565",
        "routerAreaUuid": "d397110ba793345797e33bc6ed3db65f",
        "l3NetworkUuid": "202258e4c4893f85a6b5baa7b8b55bb0",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "applianceVmType": "vpcvrouter",
    "managementNetworkUuid": "b877c7f5faca31c2a31575a70352ebc8",
    "status": "Connected",
    "agentPort": 7272.0,
    "uuid": "acc537da2e003f349ed4cd9cf53eaab4",
    "name": "TestVPC",
    "description": "this is a vpc for test",
    "zoneUuid": "6ccc1079e90737768bf679ce611f9fe7",
    "clusterUuid": "b15eecfa47083749811d79e2780f6f91",
    "imageUuid": "15790865172133e1b8a2d7a1374d5732",
    "hostUuid": "d332dc4237c332adbc2079bdb904ca36",
    "lastHostUuid": "8d79aaec39033ed89facfb3089715d31",
    "instanceOfferingUuid": "274cf5e3e2123fb1a7309ca9273d1436",
    "rootVolumeUuid": "7dc7594d739c39a5ab89806e96b722f6",
    "platform": "Linux",
    "defaultL3NetworkUuid": "5c8c85ba45c83490b2cf8db490f483c0",
    "type": "ApplianceVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 4.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "72cc686cd7b83b53aad2036b99a84c07",
        "vmInstanceUuid": "acc537da2e003f349ed4cd9cf53eaab4",
        "usedIpUuid": "92683b734202356d8fa8e6cb7447b4e1",
        "l3NetworkUuid": "69c3dba93a423bf4a1cecbd86da9261b",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "7dc7594d739c39a5ab89806e96b722f6",
        "name": "Root-Volume-For-VM-acc537da2e003f349ed4cd9cf53eaab4",
        "primaryStorageUuid": "5d93dbda7e4e386891657de613d9a28d",
        "vmInstanceUuid": "acc537da2e003f349ed4cd9cf53eaab4",
        "diskOfferingUuid": "52bc981286ea3087b9969e47aa520fac",
        "rootImageUuid": "15790865172133e1b8a2d7a1374d5732",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-7dc7594d739c39a5ab89806e96b722f6/7dc7594d739c39a5ab89806e96b722f6.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | VpcRouterVmInventory | 详情参考[inventory] | 3.4.0 |

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
| publicNetworkUuid | String |  | 3.4.0 |
| virtualRouterVips | List |  | 3.4.0 |
| applianceVmType | String |  | 3.4.0 |
| managementNetworkUuid | String |  | 3.4.0 |
| defaultRouteL3NetworkUuid | String |  | 3.4.0 |
| status | String |  | 3.4.0 |
| agentPort | Integer |  | 3.4.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| name | String | 资源名称 | 3.4.0 |
| description | String | 资源的详细描述 | 3.4.0 |
| zoneUuid | String | 区域UUID | 3.4.0 |
| clusterUuid | String | 集群UUID | 3.4.0 |
| imageUuid | String | 镜像UUID | 3.4.0 |
| hostUuid | String | 物理机UUID | 3.4.0 |
| lastHostUuid | String |  | 3.4.0 |
| instanceOfferingUuid | String | 计算规格UUID | 3.4.0 |
| rootVolumeUuid | String | 根云盘UUID | 3.4.0 |
| platform | String |  | 3.4.0 |
| defaultL3NetworkUuid | String |  | 3.4.0 |
| type | String |  | 3.4.0 |
| hypervisorType | String |  | 3.4.0 |
| memorySize | Long |  | 3.4.0 |
| cpuNum | Integer |  | 3.4.0 |
| cpuSpeed | Long |  | 3.4.0 |
| allocatorStrategy | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| state | String |  | 3.4.0 |
| dns | List | 详情参考[dns] | 3.4.0 |
| routerAreaRef | List | 详情参考[routerAreaRef] | 3.4.0 |
| vmNics | List | 详情参考[vmNics] | 3.4.0 |
| allVolumes | List | 详情参考[allVolumes] | 3.4.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 3.4.0 |

 #dns

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 3.4.0 |
| vpcRouterUuid | String |  | 3.4.0 |
| dns | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |

 #routerAreaRef

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| vRouterUuid | String |  | 3.4.0 |
| routerAreaUuid | String |  | 3.4.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| vmInstanceUuid | String | 云主机UUID | 3.4.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.4.0 |
| ip | String |  | 3.4.0 |
| mac | String |  | 3.4.0 |
| hypervisorType | String |  | 3.4.0 |
| netmask | String |  | 3.4.0 |
| gateway | String |  | 3.4.0 |
| metaData | String |  | 3.4.0 |
| ipVersion | Integer |  | 3.4.0 |
| deviceId | Integer |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| usedIps | List | 详情参考[usedIps] | 3.4.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| ipRangeUuid | String | IP段UUID | 3.4.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.4.0 |
| ipVersion | Integer |  | 3.4.0 |
| ip | String |  | 3.4.0 |
| netmask | String |  | 3.4.0 |
| gateway | String |  | 3.4.0 |
| usedFor | String |  | 3.4.0 |
| ipInLong | long |  | 3.4.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| name | String | 资源名称 | 3.4.0 |
| description | String | 资源的详细描述 | 3.4.0 |
| primaryStorageUuid | String | 主存储UUID | 3.4.0 |
| vmInstanceUuid | String | 云主机UUID | 3.4.0 |
| diskOfferingUuid | String | 云盘规格UUID | 3.4.0 |
| rootImageUuid | String |  | 3.4.0 |
| installPath | String |  | 3.4.0 |
| type | String |  | 3.4.0 |
| format | String |  | 3.4.0 |
| size | Long |  | 3.4.0 |
| actualSize | Long |  | 3.4.0 |
| deviceId | Integer |  | 3.4.0 |
| state | String |  | 3.4.0 |
| status | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| isShareable | Boolean |  | 3.4.0 |
| volumeQos | String |  | 3.4.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| vmInstanceUuid | String | 云主机UUID | 3.4.0 |
| deviceId | Integer |  | 3.4.0 |
| isoUuid | String |  | 3.4.0 |
| isoInstallPath | String |  | 3.4.0 |
| name | String | 资源名称 | 3.4.0 |
| description | String | 资源的详细描述 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
AddVRouterNetworksToOspfAreaAction action = new AddVRouterNetworksToOspfAreaAction();
action.routerAreaUuid = "2785aa6a32603b7a8a24b5a143975123";
action.vRouterUuid = "beaad9552cd531b7b59c631d0b0f7eb9";
action.l3NetworkUuids = asList("080a5356667a34e3bda18a157e3743ec");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddVRouterNetworksToOspfAreaAction.Result res = action.call();
```

 Python SDK

```
AddVRouterNetworksToOspfAreaAction action = AddVRouterNetworksToOspfAreaAction()
action.routerAreaUuid = "2785aa6a32603b7a8a24b5a143975123"
action.vRouterUuid = "beaad9552cd531b7b59c631d0b0f7eb9"
action.l3NetworkUuids = [080a5356667a34e3bda18a157e3743ec]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddVRouterNetworksToOspfAreaAction.Result res = action.call()
```

---

#### 从路由区域中移除网络(RemoveVRouterNetworksFromOspfArea)



##### API请求

 URLs

```
DELETE zstack/v1/routerArea/networks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/routerArea/networks?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuids | List | body | 网络区域表中的uuid，全局唯一标识 |  | 3.4.0 |
| deleteMode (可选) | String | body |  |  | 3.4.0 |
| systemTags (可选) | List | body |  |  | 3.4.0 |
| userTags (可选) | List | body |  |  | 3.4.0 |



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
RemoveVRouterNetworksFromOspfAreaAction action = new RemoveVRouterNetworksFromOspfAreaAction();
action.uuids = asList("ad747eefbaf534d4a46822cc02fd329a");
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveVRouterNetworksFromOspfAreaAction.Result res = action.call();
```

 Python SDK

```
RemoveVRouterNetworksFromOspfAreaAction action = RemoveVRouterNetworksFromOspfAreaAction()
action.uuids = [ad747eefbaf534d4a46822cc02fd329a]
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveVRouterNetworksFromOspfAreaAction.Result res = action.call()
```

---

#### 更改OSPF的路由区域属性(UpdateVRouterOspfArea)



##### API请求

 URLs

```
PUT zstack/v1/routerArea/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVRouterOspfArea": {
    "areaType": "Standard"
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
-X PUT -d '{"updateVRouterOspfArea":{"areaType":"Standard"}}' http://localhost:8080/zstack/v1/routerArea/35bc0bb59575326c822b07a945b48a51/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| areaAuth (可选) | String | body(包含在**updateVRouterOspfArea**结构中) | 区域认证方式 |  | 3.4.0 |
| areaType (可选) | String | body(包含在**updateVRouterOspfArea**结构中) | 区域类型 |  | 3.4.0 |
| password (可选) | String | body(包含在**updateVRouterOspfArea**结构中) | 认证需要的password |  | 3.4.0 |
| keyId (可选) | Integer | body(包含在**updateVRouterOspfArea**结构中) | 认证需要的KeyID |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b90552421b6a390fa55da5b489a53e32",
    "areaId": "1",
    "type": "Stub",
    "authentication": "MD5",
    "keyId": 128.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | RouterAreaInventory | 详情参考[inventory] | 3.4.0 |

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
| areaId | String |  | 3.4.0 |
| type | String |  | 3.4.0 |
| authentication | String |  | 3.4.0 |
| password | String |  | 3.4.0 |
| keyId | Integer |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
UpdateVRouterOspfAreaAction action = new UpdateVRouterOspfAreaAction();
action.uuid = "35bc0bb59575326c822b07a945b48a51";
action.areaType = "Standard";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVRouterOspfAreaAction.Result res = action.call();
```

 Python SDK

```
UpdateVRouterOspfAreaAction action = UpdateVRouterOspfAreaAction()
action.uuid = "35bc0bb59575326c822b07a945b48a51"
action.areaType = "Standard"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVRouterOspfAreaAction.Result res = action.call()
```

---

#### 查询路由加入到区域的网络信息(QueryVRouterOspfNetwork)



##### API请求

 URLs

```
GET zstack/v1/routerArea/network
GET zstack/v1/routerArea/networkR/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/routerArea/network?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/routerArea/networkR/cbdc3b6f584539508a95f2fe8fc0d6bb
```



可查询字段

运行CLI命令行工具，输入QueryVRouterOspfNetwork并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "fb2a103989cd3ad581c3ad6931765a2e",
      "vRouterUuid": "2449c7b9976c301bb5917cf25e021e65",
      "routerAreaUuid": "e53cb89baf223faf9b2683752c80a3a5",
      "l3NetworkUuid": "937b798289cf30bf884600143b5dfc0d",
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
| vRouterUuid | String |  | 3.4.0 |
| routerAreaUuid | String |  | 3.4.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
QueryVRouterOspfNetworkAction action = new QueryVRouterOspfNetworkAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVRouterOspfNetworkAction.Result res = action.call();
```

 Python SDK

```
QueryVRouterOspfNetworkAction action = QueryVRouterOspfNetworkAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVRouterOspfNetworkAction.Result res = action.call()
```

---

### 组播路由相关接口

---

#### 创建组播路由器(CreateMulticastRouter)



##### API请求

 URLs

```
POST zstack/v1/multicast/virtual-routers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vpcRouterVmUuid": "6fe7772600d039bf80d8e2359fcef61a",
    "description": "this is a header router for test"
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
-X POST -d '{"params":{"vpcRouterVmUuid":"6fe7772600d039bf80d8e2359fcef61a","description":"this is a header router for test"}}' http://localhost:8080/zstack/v1/multicast/virtual-routers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vpcRouterVmUuid | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "974c38ae483737c3b4ded18de56773b6",
    "description": "test for header",
    "rpGroups": [
      {
        "uuid": "0bda384377d53656b89270948f795ab8",
        "multicastRouterUuid": "974c38ae483737c3b4ded18de56773b6",
        "rpAddress": "1.2.3.4",
        "groupAddress": "239.1.1.1/32"
      }
    ],
    "vpcVrs": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | MulticastRouterInventory | 详情参考[inventory] | 3.7.0 |

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
| vpcRouterUuid | String |  | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| state | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| rpGroups | List | 详情参考[rpGroups] | 3.7.0 |
| vpcVrs | List | 详情参考[vpcVrs] | 3.7.0 |

 #rpGroups

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| multicastRouterUuid | String |  | 3.7.0 |
| rpAddress | String |  | 3.7.0 |
| groupAddress | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |

 #vpcVrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vpcRouterUuid | String |  | 3.7.0 |



##### SDK示例

 Java SDK

```
CreateMulticastRouterAction action = new CreateMulticastRouterAction();
action.vpcRouterVmUuid = "6fe7772600d039bf80d8e2359fcef61a";
action.description = "this is a header router for test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateMulticastRouterAction.Result res = action.call();
```

 Python SDK

```
CreateMulticastRouterAction action = CreateMulticastRouterAction()
action.vpcRouterVmUuid = "6fe7772600d039bf80d8e2359fcef61a"
action.description = "this is a header router for test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateMulticastRouterAction.Result res = action.call()
```

---

#### 删除组播路由器(DeleteMulticastRouter)



##### API请求

 URLs

```
DELETE zstack/v1/multicast/virtual-routers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/multicast/virtual-routers/cce17d3b823933a8b0694af5159fed4d?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| deleteMode (可选) | String | body |  |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



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
DeleteMulticastRouterAction action = new DeleteMulticastRouterAction();
action.uuid = "cce17d3b823933a8b0694af5159fed4d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteMulticastRouterAction.Result res = action.call();
```

 Python SDK

```
DeleteMulticastRouterAction action = DeleteMulticastRouterAction()
action.uuid = "cce17d3b823933a8b0694af5159fed4d"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteMulticastRouterAction.Result res = action.call()
```

---

#### 查询组播路由器(QueryMulticastRouter)



##### API请求

 URLs

```
GET zstack/v1/multicast/virtual-routers
GET zstack/v1/multicast/virtual-routers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/multicast/virtual-routers?q=name=multicastRouter
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/multicast/virtual-routers/83791299370039dba6b9318e46dfcf69
```



可查询字段

运行CLI命令行工具，输入QueryMulticastRouter并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "df41b45fd5213ceab084e5b733886ac0",
      "description": "test for header",
      "rpGroups": [
        {
          "uuid": "08f7436a526b3cbab51ca95d9e578d27",
          "multicastRouterUuid": "df41b45fd5213ceab084e5b733886ac0",
          "rpAddress": "1.2.3.4",
          "groupAddress": "239.1.1.1/32"
        }
      ],
      "vpcVrs": []
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
| vpcRouterUuid | String |  | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| state | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| rpGroups | List | 详情参考[rpGroups] | 3.7.0 |
| vpcVrs | List | 详情参考[vpcVrs] | 3.7.0 |

 #rpGroups

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| multicastRouterUuid | String |  | 3.7.0 |
| rpAddress | String |  | 3.7.0 |
| groupAddress | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |

 #vpcVrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vpcRouterUuid | String |  | 3.7.0 |



##### SDK示例

 Java SDK

```
QueryMulticastRouterAction action = new QueryMulticastRouterAction();
action.conditions = asList("name=multicastRouter");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryMulticastRouterAction.Result res = action.call();
```

 Python SDK

```
QueryMulticastRouterAction action = QueryMulticastRouterAction()
action.conditions = ["name=multicastRouter"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryMulticastRouterAction.Result res = action.call()
```

---

#### 改变组播路由器状态(ChangeMulticastRouterState)



##### API请求

 URLs

```
PUT zstack/v1/multicast/virtual-routers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeMulticastRouterState": {
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
-X PUT -d '{"changeMulticastRouterState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/multicast/virtual-routers/0cbf995f538b3aed855e3e50ea38eb0c/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| stateEvent | String | body(包含在**changeMulticastRouterState**结构中) |  | enable disable | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "93ce20a6a51932ce8f544033d5cdca3c",
    "description": "test for header",
    "rpGroups": [
      {
        "uuid": "3ef422d857ff3a09a6c000900ac37f78",
        "multicastRouterUuid": "93ce20a6a51932ce8f544033d5cdca3c",
        "rpAddress": "1.2.3.4",
        "groupAddress": "239.1.1.1/32"
      }
    ],
    "vpcVrs": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | MulticastRouterInventory | 详情参考[inventory] | 3.7.0 |

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
| vpcRouterUuid | String |  | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| state | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| rpGroups | List | 详情参考[rpGroups] | 3.7.0 |
| vpcVrs | List | 详情参考[vpcVrs] | 3.7.0 |

 #rpGroups

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| multicastRouterUuid | String |  | 3.7.0 |
| rpAddress | String |  | 3.7.0 |
| groupAddress | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |

 #vpcVrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vpcRouterUuid | String |  | 3.7.0 |



##### SDK示例

 Java SDK

```
ChangeMulticastRouterStateAction action = new ChangeMulticastRouterStateAction();
action.uuid = "0cbf995f538b3aed855e3e50ea38eb0c";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeMulticastRouterStateAction.Result res = action.call();
```

 Python SDK

```
ChangeMulticastRouterStateAction action = ChangeMulticastRouterStateAction()
action.uuid = "0cbf995f538b3aed855e3e50ea38eb0c"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeMulticastRouterStateAction.Result res = action.call()
```

---

#### 获取组播路由表(GetVpcMulticastRoute)



##### API请求

 URLs

```
GET zstack/v1/multicast/virtual-routers/{uuid}/routes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/multicast/virtual-routers/a880287e652d3137a9f7349dc7f65a49/routes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| systemTags (可选) | List | query |  |  | 3.7.0 |
| userTags (可选) | List | query |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "sourceAddress": "1.2.3.4",
      "groupAddress": "239.1.1.1",
      "ingressInterfaces": "eth0",
      "egressInterfaces": "eth1"
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
| sourceAddress | String |  | 3.7.0 |
| groupAddress | String |  | 3.7.0 |
| ingressInterfaces | String |  | 3.7.0 |
| egressInterfaces | String |  | 3.7.0 |



##### SDK示例

 Java SDK

```
GetVpcMulticastRouteAction action = new GetVpcMulticastRouteAction();
action.uuid = "a880287e652d3137a9f7349dc7f65a49";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVpcMulticastRouteAction.Result res = action.call();
```

 Python SDK

```
GetVpcMulticastRouteAction action = GetVpcMulticastRouteAction()
action.uuid = "a880287e652d3137a9f7349dc7f65a49"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVpcMulticastRouteAction.Result res = action.call()
```

---

#### 添加组播路由静态RP地址(AddRendezvousPointToMulticastRouter)



##### API请求

 URLs

```
POST zstack/v1/multicast/virtual-routers/{uuid}/RendezvousPoint
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "rpAddress": "1.2.3.4",
    "groupAddress": "239.0.0.1/32"
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
-X POST -d '{"params":{"rpAddress":"1.2.3.4","groupAddress":"239.0.0.1/32"}}' http://localhost:8080/zstack/v1/multicast/virtual-routers/fae38e0915973679ac76cc40da3e2f51/RendezvousPoint
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| rpAddress | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| groupAddress | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "9127988e024a3a87865efcd1381d8fd4",
    "description": "test for header",
    "rpGroups": [
      {
        "uuid": "68953d6bf3913f0188ddf66656daedaa",
        "multicastRouterUuid": "9127988e024a3a87865efcd1381d8fd4",
        "rpAddress": "1.2.3.4",
        "groupAddress": "239.1.1.1/32"
      }
    ],
    "vpcVrs": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | MulticastRouterInventory | 详情参考[inventory] | 3.7.0 |

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
| vpcRouterUuid | String |  | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| state | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| rpGroups | List | 详情参考[rpGroups] | 3.7.0 |
| vpcVrs | List | 详情参考[vpcVrs] | 3.7.0 |

 #rpGroups

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| multicastRouterUuid | String |  | 3.7.0 |
| rpAddress | String |  | 3.7.0 |
| groupAddress | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |

 #vpcVrs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| vpcRouterUuid | String |  | 3.7.0 |



##### SDK示例

 Java SDK

```
AddRendezvousPointToMulticastRouterAction action = new AddRendezvousPointToMulticastRouterAction();
action.uuid = "fae38e0915973679ac76cc40da3e2f51";
action.rpAddress = "1.2.3.4";
action.groupAddress = "239.0.0.1/32";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddRendezvousPointToMulticastRouterAction.Result res = action.call();
```

 Python SDK

```
AddRendezvousPointToMulticastRouterAction action = AddRendezvousPointToMulticastRouterAction()
action.uuid = "fae38e0915973679ac76cc40da3e2f51"
action.rpAddress = "1.2.3.4"
action.groupAddress = "239.0.0.1/32"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddRendezvousPointToMulticastRouterAction.Result res = action.call()
```

---

#### 删除组播路由器静态RP地址(RemoveRendezvousPointFromMulticastRouter)



##### API请求

 URLs

```
DELETE zstack/v1/multicast/virtual-routers/{uuid}/RendezvousPoint
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/multicast/virtual-routers/b0efeaec578931d49c6c8b457287e1db/RendezvousPoint?deleteMode=Permissive

```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| rpAddress | String | body |  |  | 3.7.0 |
| groupAddress | String | body |  |  | 3.7.0 |
| deleteMode (可选) | String | body |  |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



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
RemoveRendezvousPointFromMulticastRouterAction action = new RemoveRendezvousPointFromMulticastRouterAction();
action.uuid = "b0efeaec578931d49c6c8b457287e1db";
action.rpAddress = "1.2.3.4";
action.groupAddress = "239.1.1.1/32";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveRendezvousPointFromMulticastRouterAction.Result res = action.call();
```

 Python SDK

```
RemoveRendezvousPointFromMulticastRouterAction action = RemoveRendezvousPointFromMulticastRouterAction()
action.uuid = "b0efeaec578931d49c6c8b457287e1db"
action.rpAddress = "1.2.3.4"
action.groupAddress = "239.1.1.1/32"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveRendezvousPointFromMulticastRouterAction.Result res = action.call()
```

---

### 策略路由相关接口

---

#### 创建策略路由规则集(CreatePolicyRouteRuleSet)



##### API请求

 URLs

```
POST zstack/v1/policy-routes/rulesets
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "ruleSet",
    "description": "description",
    "vRouterUuid": "85eb5d9f50bc3919b793b3caf9f3e859"
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
-X POST -d '{"params":{"name":"ruleSet","description":"description","vRouterUuid":"85eb5d9f50bc3919b793b3caf9f3e859"}}' http://localhost:8080/zstack/v1/policy-routes/rulesets
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| vRouterUuid | String | body(包含在**params**结构中) | 路由器uuid |  | 3.6.0 |
| type (可选) | String | body(包含在**params**结构中) |  | User EgressWhereComeFrom | 3.9.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "description": "example-des",
    "rules": [
      {
        "uuid": "74cc4fed46f633f2a618b0e06d122377",
        "ruleNumber": 1.0,
        "ruleSetUuid": "00693e31fa3b3e3fba017ed714c02cdf",
        "tableUuid": "b273e0c273c03559872efa272194492c",
        "destIp": "192.168.1.1",
        "sourceIp": "10.0.0.1",
        "destPort": "22",
        "sourcePort": "80",
        "protocol": "tcp",
        "state": "enable"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | PolicyRouteRuleSetInventory | 详情参考[inventory] | 3.6.0 |

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
| type | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| rules | List | 详情参考[rules] | 3.6.0 |
| l3Refs | List | 详情参考[l3Refs] | 3.9.0 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| ruleNumber | int | 优先级 | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destIp | String | 目标ip | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| protocol | PolicyRouteRuleProtocol | 详情参考[protocol] | 3.6.0 |
| state | PolicyRouteRuleState | 详情参考[state] | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp | PolicyRouteRuleProtocol |  | 3.6.0 |
| udp | PolicyRouteRuleProtocol |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | PolicyRouteRuleState |  | 3.6.0 |
| disable | PolicyRouteRuleState |  | 3.6.0 |

 #l3Refs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ruleSetUuid | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
CreatePolicyRouteRuleSetAction action = new CreatePolicyRouteRuleSetAction();
action.name = "ruleSet";
action.description = "description";
action.vRouterUuid = "85eb5d9f50bc3919b793b3caf9f3e859";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePolicyRouteRuleSetAction.Result res = action.call();
```

 Python SDK

```
CreatePolicyRouteRuleSetAction action = CreatePolicyRouteRuleSetAction()
action.name = "ruleSet"
action.description = "description"
action.vRouterUuid = "85eb5d9f50bc3919b793b3caf9f3e859"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePolicyRouteRuleSetAction.Result res = action.call()
```

---

#### 删除策略路由规则集(DeletePolicyRouteRuleSet)



##### API请求

 URLs

```
DELETE zstack/v1/policy-routes/ruleSets/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/policy-routes/ruleSets/f430004bc0ed315c89eb7909a48d27e7?deleteMode=Permissive
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
DeletePolicyRouteRuleSetAction action = new DeletePolicyRouteRuleSetAction();
action.uuid = "f430004bc0ed315c89eb7909a48d27e7";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePolicyRouteRuleSetAction.Result res = action.call();
```

 Python SDK

```
DeletePolicyRouteRuleSetAction action = DeletePolicyRouteRuleSetAction()
action.uuid = "f430004bc0ed315c89eb7909a48d27e7"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePolicyRouteRuleSetAction.Result res = action.call()
```

---

#### 更新策略路由规则集属性(UpdatePolicyRouteRuleSet)



##### API请求

 URLs

```
PUT zstack/v1/policy-routes/ruleSets/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updatePolicyRouteRuleSet": {
    "name": "name",
    "description": "desc"
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
-X PUT -d '{"updatePolicyRouteRuleSet":{"name":"name","description":"desc"}}' http://localhost:8080/zstack/v1/policy-routes/ruleSets/e58212f4cd0c3f2f96d27dde19de1383/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| name (可选) | String | body(包含在**updatePolicyRouteRuleSet**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**updatePolicyRouteRuleSet**结构中) | 资源的详细描述 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "name",
    "description": "example-des",
    "rules": []
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | PolicyRouteRuleSetInventory | 详情参考[inventory] | 3.6.0 |

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
| rules | List | 详情参考[rules] | 3.6.0 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| ruleNumber | int | 优先级 | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destIp | String | 目标ip | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| protocol | PolicyRouteRuleProtocol | 详情参考[protocol] | 3.6.0 |
| state | PolicyRouteRuleState | 详情参考[state] | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp | PolicyRouteRuleProtocol |  | 3.6.0 |
| udp | PolicyRouteRuleProtocol |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | PolicyRouteRuleState |  | 3.6.0 |
| disable | PolicyRouteRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdatePolicyRouteRuleSetAction action = new UpdatePolicyRouteRuleSetAction();
action.uuid = "e58212f4cd0c3f2f96d27dde19de1383";
action.name = "name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdatePolicyRouteRuleSetAction.Result res = action.call();
```

 Python SDK

```
UpdatePolicyRouteRuleSetAction action = UpdatePolicyRouteRuleSetAction()
action.uuid = "e58212f4cd0c3f2f96d27dde19de1383"
action.name = "name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdatePolicyRouteRuleSetAction.Result res = action.call()
```

---

#### 查询策略路由规则集(QueryPolicyRouteRuleSet)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/rulesets
```


```
GET zstack/v1/policy-routes/rulesets/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rulesets
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rulesets/f3c338fa05d63ceaa90fedcaffebfd66
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteRuleSet并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "name",
      "description": "example-des",
      "rules": [
        {
          "uuid": "2e05ab3c36323487baea2414005817ee",
          "ruleNumber": 1.0,
          "ruleSetUuid": "4c86543d473f3127885b3ffc8be5ec88",
          "tableUuid": "d2ad1f7ad9aa354e8da24829bbd31a05",
          "destIp": "192.168.1.1",
          "sourceIp": "10.0.0.1",
          "destPort": "22",
          "sourcePort": "80",
          "protocol": "tcp",
          "state": "enable"
        }
      ]
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
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| rules | List | 详情参考[rules] | 3.6.0 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| ruleNumber | int | 优先级 | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destIp | String | 目标ip | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| protocol | PolicyRouteRuleProtocol | 详情参考[protocol] | 3.6.0 |
| state | PolicyRouteRuleState | 详情参考[state] | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp | PolicyRouteRuleProtocol |  | 3.6.0 |
| udp | PolicyRouteRuleProtocol |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | PolicyRouteRuleState |  | 3.6.0 |
| disable | PolicyRouteRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryPolicyRouteRuleSetAction action = new QueryPolicyRouteRuleSetAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteRuleSetAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteRuleSetAction action = QueryPolicyRouteRuleSetAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteRuleSetAction.Result res = action.call()
```

---

#### 查询策略路由规则集网络关联(QueryPolicyRouteRuleSetL3Ref)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/rulesets/l3networdks/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rulesets/l3networdks/refs
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteRuleSetL3Ref并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "l3NetworkUuid": "764cba1766563fd683ef1fcf76c7295c",
      "ruleSetUuid": "ddb87b28f0253810b753fc9ae62ebd31"
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
| l3NetworkUuid | String | 三层网络UUID | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryPolicyRouteRuleSetL3RefAction action = new QueryPolicyRouteRuleSetL3RefAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteRuleSetL3RefAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteRuleSetL3RefAction action = QueryPolicyRouteRuleSetL3RefAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteRuleSetL3RefAction.Result res = action.call()
```

---

#### 查询策略路由规则集与单节点路由器关联(QueryPolicyRouteRuleSetVRouterRef)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/rulesets/vrouters/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rulesets/vrouters/refs
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteRuleSetVRouterRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "vRouterUuid": "8715faa19cb03995a864330766fdc77c",
      "ruleSetUuid": "2e27f9015ad3357996546fd51c2d808e"
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
| vRouterUuid | String | 路由器uuid | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryPolicyRouteRuleSetVRouterRefAction action = new QueryPolicyRouteRuleSetVRouterRefAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteRuleSetVRouterRefAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteRuleSetVRouterRefAction action = QueryPolicyRouteRuleSetVRouterRefAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteRuleSetVRouterRefAction.Result res = action.call()
```

---

#### 创建策略路由规则集规则(CreatePolicyRouteRule)



##### API请求

 URLs

```
POST zstack/v1/policy-routes/rules
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ruleSetUuid": "ec2472bf205931318e02a2bb5356c0ee",
    "tableUuid": "b4c03beba98c3502ac53d784dd9bfe61",
    "ruleNumber": 1001.0,
    "destIp": "192.168.1.0/24",
    "sourceIp": "192.168.2.0/24",
    "destPort": "22",
    "sourcePort": "33",
    "protocol": "tcp"
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
-X POST -d '{"params":{"ruleSetUuid":"ec2472bf205931318e02a2bb5356c0ee","tableUuid":"b4c03beba98c3502ac53d784dd9bfe61","ruleNumber":1001.0,"destIp":"192.168.1.0/24","sourceIp":"192.168.2.0/24","destPort":"22","sourcePort":"33","protocol":"tcp"}}' http://localhost:8080/zstack/v1/policy-routes/rules
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ruleSetUuid | String | body(包含在**params**结构中) | 策略路由规则集uuid |  | 3.6.0 |
| tableUuid | String | body(包含在**params**结构中) | 策略路由表uuid |  | 3.6.0 |
| ruleNumber | int | body(包含在**params**结构中) | 规则优先级 |  | 3.6.0 |
| destIp (可选) | String | body(包含在**params**结构中) | 目标ip |  | 3.6.0 |
| sourceIp (可选) | String | body(包含在**params**结构中) | 源ip |  | 3.6.0 |
| destPort (可选) | String | body(包含在**params**结构中) | 目标端口 |  | 3.6.0 |
| sourcePort (可选) | String | body(包含在**params**结构中) | 源端口 |  | 3.6.0 |
| protocol (可选) | String | body(包含在**params**结构中) | 协议 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8b14e8fd1bae3b35acb67d19b8c7580e",
    "ruleNumber": 1.0,
    "ruleSetUuid": "7cd6023e32c639169b2316ffec4c79f3",
    "tableUuid": "3d5c0b99cfac3654a451c854cf449091",
    "destIp": "192.168.1.1",
    "sourceIp": "80",
    "destPort": "22",
    "protocol": "tcp",
    "state": "enable"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | PolicyRouteRuleInventory | 详情参考[inventory] | 3.6.0 |

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
| ruleNumber | int | 优先级 | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destIp | String | 目标ip | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| protocol | PolicyRouteRuleProtocol | 详情参考[protocol] | 3.6.0 |
| state | PolicyRouteRuleState | 详情参考[state] | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp | PolicyRouteRuleProtocol |  | 3.6.0 |
| udp | PolicyRouteRuleProtocol |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | PolicyRouteRuleState |  | 3.6.0 |
| disable | PolicyRouteRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
CreatePolicyRouteRuleAction action = new CreatePolicyRouteRuleAction();
action.ruleSetUuid = "ec2472bf205931318e02a2bb5356c0ee";
action.tableUuid = "b4c03beba98c3502ac53d784dd9bfe61";
action.ruleNumber = 1001.0;
action.destIp = "192.168.1.0/24";
action.sourceIp = "192.168.2.0/24";
action.destPort = "22";
action.sourcePort = "33";
action.protocol = "tcp";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePolicyRouteRuleAction.Result res = action.call();
```

 Python SDK

```
CreatePolicyRouteRuleAction action = CreatePolicyRouteRuleAction()
action.ruleSetUuid = "ec2472bf205931318e02a2bb5356c0ee"
action.tableUuid = "b4c03beba98c3502ac53d784dd9bfe61"
action.ruleNumber = 1001.0
action.destIp = "192.168.1.0/24"
action.sourceIp = "192.168.2.0/24"
action.destPort = "22"
action.sourcePort = "33"
action.protocol = "tcp"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePolicyRouteRuleAction.Result res = action.call()
```

---

#### 删除策略路由规则集规则(DeletePolicyRouteRule)



##### API请求

 URLs

```
DELETE zstack/v1/policy-routes/rules/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/policy-routes/rules/b02689c3b5513b8db2bb5f45a8c7b169?deleteMode=Permissive
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
DeletePolicyRouteRuleAction action = new DeletePolicyRouteRuleAction();
action.uuid = "b02689c3b5513b8db2bb5f45a8c7b169";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePolicyRouteRuleAction.Result res = action.call();
```

 Python SDK

```
DeletePolicyRouteRuleAction action = DeletePolicyRouteRuleAction()
action.uuid = "b02689c3b5513b8db2bb5f45a8c7b169"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePolicyRouteRuleAction.Result res = action.call()
```

---

#### 创建策略路由表(CreatePolicyRouteTable)



##### API请求

 URLs

```
POST zstack/v1/policy-routes/tables
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vRouterUuid": "efe77450940f3dfe9023f2589fdeda25",
    "number": 1.0,
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
-X POST -d '{"params":{"vRouterUuid":"efe77450940f3dfe9023f2589fdeda25","number":1.0,"description":"description"}}' http://localhost:8080/zstack/v1/policy-routes/tables
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vRouterUuid | String | body(包含在**params**结构中) | 路由器uuid |  | 3.6.0 |
| number | Integer | body(包含在**params**结构中) | 表名 |  | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8bd52616389d3ce7b5d74bc2424d3f8d",
    "tableNumber": 1.0,
    "description": "example-des",
    "routes": [
      {
        "tableUuid": "2a7ba1261cef3cf19b587e493e479286",
        "destinationCidr": "192.168.1.0/24",
        "nextHopIp": "192.168.1.1",
        "distance": 1.0
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | PolicyRouteTableInventory | 详情参考[inventory] | 3.6.0 |

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
| tableNumber | int | 表名 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| routes | List | 详情参考[routes] | 3.6.0 |

 #routes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destinationCidr | String | 目标cidr | 3.6.0 |
| nextHopIp | String | 下一跳ip | 3.6.0 |
| distance | int | 优先级 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
CreatePolicyRouteTableAction action = new CreatePolicyRouteTableAction();
action.vRouterUuid = "efe77450940f3dfe9023f2589fdeda25";
action.number = 1.0;
action.description = "description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePolicyRouteTableAction.Result res = action.call();
```

 Python SDK

```
CreatePolicyRouteTableAction action = CreatePolicyRouteTableAction()
action.vRouterUuid = "efe77450940f3dfe9023f2589fdeda25"
action.number = 1.0
action.description = "description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePolicyRouteTableAction.Result res = action.call()
```

---

#### 删除策略路由表(DeletePolicyRouteTable)



##### API请求

 URLs

```
DELETE zstack/v1/policy-routes/tables/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/policy-routes/tables/4c24bf6b15d3338ab1d66eac97eec58b?deleteMode=Permissive
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
DeletePolicyRouteTableAction action = new DeletePolicyRouteTableAction();
action.uuid = "4c24bf6b15d3338ab1d66eac97eec58b";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePolicyRouteTableAction.Result res = action.call();
```

 Python SDK

```
DeletePolicyRouteTableAction action = DeletePolicyRouteTableAction()
action.uuid = "4c24bf6b15d3338ab1d66eac97eec58b"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePolicyRouteTableAction.Result res = action.call()
```

---

#### 查询策略路由表(QueryPolicyRouteTable)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/tables
```


```
GET zstack/v1/policy-routes/tables/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/tables
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/tables/e32b296e6633331284c5cbbd71cedfa4
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteTable并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "6e39025e9eb432fda488f19e7104fdf0",
      "tableNumber": 1.0,
      "description": "example-des",
      "routes": [
        {
          "tableUuid": "90f075232c383565ac3dbc09554c4152",
          "destinationCidr": "192.168.1.0/24",
          "nextHopIp": "192.168.1.1",
          "distance": 1.0
        }
      ]
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
| tableNumber | int | 表名 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| routes | List | 详情参考[routes] | 3.6.0 |

 #routes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destinationCidr | String | 目标cidr | 3.6.0 |
| nextHopIp | String | 下一跳ip | 3.6.0 |
| distance | int | 优先级 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryPolicyRouteTableAction action = new QueryPolicyRouteTableAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteTableAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteTableAction action = QueryPolicyRouteTableAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteTableAction.Result res = action.call()
```

---

#### 查询策略路由表与单节点路由器关联(QueryPolicyRouteTableVRouterRef)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/tables/vrouters/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/tables/vrouters/refs
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteTableVRouterRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "tableUuid": "cc3bb710f9d43cedb044213253363604",
      "vRouterUuid": "f281299552813438acc3c5a400802a78"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
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
QueryPolicyRouteTableVRouterRefAction action = new QueryPolicyRouteTableVRouterRefAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteTableVRouterRefAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteTableVRouterRefAction action = QueryPolicyRouteTableVRouterRefAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteTableVRouterRefAction.Result res = action.call()
```

---

#### 创建策略路由(CreatePolicyRouteTableRouteEntry)



##### API请求

 URLs

```
POST zstack/v1/policy-routes/routes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "tableUuid": "ef44a453884a3b93867d6ec0b7dd5716",
    "destinationCidr": "192.168.1.0/24",
    "nextHopIp": "192.168.1.1",
    "distance": 1.0
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
-X POST -d '{"params":{"tableUuid":"ef44a453884a3b93867d6ec0b7dd5716","destinationCidr":"192.168.1.0/24","nextHopIp":"192.168.1.1","distance":1.0}}' http://localhost:8080/zstack/v1/policy-routes/routes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| tableUuid | String | body(包含在**params**结构中) | 策略路由表uuid |  | 3.6.0 |
| destinationCidr | String | body(包含在**params**结构中) | 目标ip cidr |  | 3.6.0 |
| nextHopIp | String | body(包含在**params**结构中) | 下一跳ip |  | 3.6.0 |
| distance (可选) | Integer | body(包含在**params**结构中) | 优先级 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "tableUuid": "a6e9466373c333948f8d6ef573992d43",
    "destinationCidr": "192.168.1.0/24",
    "nextHopIp": "192.168.1.1",
    "distance": 1.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | PolicyRouteTableRouteEntryInventory | 详情参考[inventory] | 3.6.0 |

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
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destinationCidr | String | 目标cidr | 3.6.0 |
| nextHopIp | String | 下一跳ip | 3.6.0 |
| distance | int | 优先级 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
CreatePolicyRouteTableRouteEntryAction action = new CreatePolicyRouteTableRouteEntryAction();
action.tableUuid = "ef44a453884a3b93867d6ec0b7dd5716";
action.destinationCidr = "192.168.1.0/24";
action.nextHopIp = "192.168.1.1";
action.distance = 1.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePolicyRouteTableRouteEntryAction.Result res = action.call();
```

 Python SDK

```
CreatePolicyRouteTableRouteEntryAction action = CreatePolicyRouteTableRouteEntryAction()
action.tableUuid = "ef44a453884a3b93867d6ec0b7dd5716"
action.destinationCidr = "192.168.1.0/24"
action.nextHopIp = "192.168.1.1"
action.distance = 1.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePolicyRouteTableRouteEntryAction.Result res = action.call()
```

---

#### 删除策略路由(DeletePolicyRouteTableRouteEntry)



##### API请求

 URLs

```
DELETE zstack/v1/policy-routes/routes/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/policy-routes/routes/7e28a7059fb33a8bb2d7c61b7951303e?deleteMode=Permissive
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
DeletePolicyRouteTableRouteEntryAction action = new DeletePolicyRouteTableRouteEntryAction();
action.uuid = "7e28a7059fb33a8bb2d7c61b7951303e";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePolicyRouteTableRouteEntryAction.Result res = action.call();
```

 Python SDK

```
DeletePolicyRouteTableRouteEntryAction action = DeletePolicyRouteTableRouteEntryAction()
action.uuid = "7e28a7059fb33a8bb2d7c61b7951303e"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePolicyRouteTableRouteEntryAction.Result res = action.call()
```

---

#### 查询策略路由(QueryPolicyRouteTableRouteEntry)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/routes
```


```
GET zstack/v1/policy-routes/routes/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/routes
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/routes/775c98615c5936f3aab19b6271c9e5dc
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteTableRouteEntry并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "tableUuid": "49bf5678360b38058ab7096715e219f4",
      "destinationCidr": "192.168.1.0/24",
      "nextHopIp": "192.168.1.1",
      "distance": 1.0
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
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destinationCidr | String | 目标cidr | 3.6.0 |
| nextHopIp | String | 下一跳ip | 3.6.0 |
| distance | int | 优先级 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryPolicyRouteTableRouteEntryAction action = new QueryPolicyRouteTableRouteEntryAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteTableRouteEntryAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteTableRouteEntryAction action = QueryPolicyRouteTableRouteEntryAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteTableRouteEntryAction.Result res = action.call()
```

---

#### 查询策略路由规则(QueryPolicyRouteRule)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/rules
```


```
GET zstack/v1/policy-routes/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rules
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rules/cc3c19210de13878994ddcb5bee8a34c
```



可查询字段

运行CLI命令行工具，输入QueryPolicyRouteRule并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "538840755c1a36e0b79f1d04097b252e",
      "ruleNumber": 1.0,
      "ruleSetUuid": "7cb413c84b243290a7105e8c21f42b59",
      "tableUuid": "d29940b692f33c0eaf96b0193029636c",
      "destIp": "192.168.1.1",
      "sourceIp": "80",
      "destPort": "22",
      "protocol": "tcp",
      "state": "enable"
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
| ruleNumber | int | 优先级 | 3.6.0 |
| ruleSetUuid | String | 策略路由规则集uuid | 3.6.0 |
| tableUuid | String | 策略路由表uuid | 3.6.0 |
| destIp | String | 目标ip | 3.6.0 |
| sourceIp | String | 源ip | 3.6.0 |
| destPort | String | 目标端口 | 3.6.0 |
| sourcePort | String | 源端口 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| protocol | PolicyRouteRuleProtocol | 详情参考[protocol] | 3.6.0 |
| state | PolicyRouteRuleState | 详情参考[state] | 3.6.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp | PolicyRouteRuleProtocol |  | 3.6.0 |
| udp | PolicyRouteRuleProtocol |  | 3.6.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | PolicyRouteRuleState |  | 3.6.0 |
| disable | PolicyRouteRuleState |  | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryPolicyRouteRuleAction action = new QueryPolicyRouteRuleAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPolicyRouteRuleAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyRouteRuleAction action = QueryPolicyRouteRuleAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPolicyRouteRuleAction.Result res = action.call()
```

---

#### 网络加载策略路由规则集(AttachPolicyRouteRuleSetToL3)



##### API请求

 URLs

```
POST zstack/v1/policy-routes/rulesets/{ruleSetUuid}/l3networks/{l3Uuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/policy-routes/rulesets/1e6eb259093e3fa2a30c837ae69d259c/l3networks/8748b8be922938bbb430ed9cbe3e4e46
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3Uuid | String | url | 三层网络uuid |  | 3.6.0 |
| ruleSetUuid | String | url | 策略路由规则集uuid |  | 3.6.0 |
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
AttachPolicyRouteRuleSetToL3Action action = new AttachPolicyRouteRuleSetToL3Action();
action.l3Uuid = "8748b8be922938bbb430ed9cbe3e4e46";
action.ruleSetUuid = "1e6eb259093e3fa2a30c837ae69d259c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachPolicyRouteRuleSetToL3Action.Result res = action.call();
```

 Python SDK

```
AttachPolicyRouteRuleSetToL3Action action = AttachPolicyRouteRuleSetToL3Action()
action.l3Uuid = "8748b8be922938bbb430ed9cbe3e4e46"
action.ruleSetUuid = "1e6eb259093e3fa2a30c837ae69d259c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachPolicyRouteRuleSetToL3Action.Result res = action.call()
```

---

#### 网络解绑策略路由(DetachPolicyRouteRuleSetFromL3)



##### API请求

 URLs

```
DELETE zstack/v1/policy-routes/rulesets/{ruleSetUuid}/l3networks/{l3Uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/policy-routes/rulesets/75641a6f70c03fcea051d7fb5e45a0e5/l3networks/9556f3da05743aa88a603e086875e22c
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3Uuid | String | url | 三层网络uuid |  | 3.6.0 |
| ruleSetUuid | String | url | 策略规则集uuid |  | 3.6.0 |
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
DetachPolicyRouteRuleSetFromL3Action action = new DetachPolicyRouteRuleSetFromL3Action();
action.l3Uuid = "9556f3da05743aa88a603e086875e22c";
action.ruleSetUuid = "75641a6f70c03fcea051d7fb5e45a0e5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachPolicyRouteRuleSetFromL3Action.Result res = action.call();
```

 Python SDK

```
DetachPolicyRouteRuleSetFromL3Action action = DetachPolicyRouteRuleSetFromL3Action()
action.l3Uuid = "9556f3da05743aa88a603e086875e22c"
action.ruleSetUuid = "75641a6f70c03fcea051d7fb5e45a0e5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachPolicyRouteRuleSetFromL3Action.Result res = action.call()
```

---

#### 获取虚拟路由器的策略路由集合(GetPolicyRouteRuleSetFromVirtualRouter)



##### API请求

 URLs

```
GET zstack/v1/policy-routes/rulesets/virtualrouter/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/policy-routes/rulesets/virtualrouter/d38e9c3321af3f01a5509fa7f43dc46a
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "de191bb7f4763ce580fd7e2ed457cde8",
      "name": "policy-rule-set",
      "description": "policy rule set",
      "type": "User",
      "rules": [],
      "l3Refs": []
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
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| rules | List | 详情参考[rules] | 3.9.0 |
| l3Refs | List | 详情参考[l3Refs] | 3.9.0 |

 #rules

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| ruleNumber | int |  | 3.9.0 |
| ruleSetUuid | String |  | 3.9.0 |
| tableUuid | String |  | 3.9.0 |
| destIp | String |  | 3.9.0 |
| sourceIp | String |  | 3.9.0 |
| destPort | String |  | 3.9.0 |
| sourcePort | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| protocol | PolicyRouteRuleProtocol | 详情参考[protocol] | 3.9.0 |
| state | PolicyRouteRuleState | 详情参考[state] | 3.9.0 |

 #protocol

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| tcp | PolicyRouteRuleProtocol |  | 3.9.0 |
| udp | PolicyRouteRuleProtocol |  | 3.9.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | PolicyRouteRuleState |  | 3.9.0 |
| disable | PolicyRouteRuleState |  | 3.9.0 |

 #l3Refs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ruleSetUuid | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
GetPolicyRouteRuleSetFromVirtualRouterAction action = new GetPolicyRouteRuleSetFromVirtualRouterAction();
action.vmInstanceUuid = "d38e9c3321af3f01a5509fa7f43dc46a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPolicyRouteRuleSetFromVirtualRouterAction.Result res = action.call();
```

 Python SDK

```
GetPolicyRouteRuleSetFromVirtualRouterAction action = GetPolicyRouteRuleSetFromVirtualRouterAction()
action.vmInstanceUuid = "d38e9c3321af3f01a5509fa7f43dc46a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPolicyRouteRuleSetFromVirtualRouterAction.Result res = action.call()
```
