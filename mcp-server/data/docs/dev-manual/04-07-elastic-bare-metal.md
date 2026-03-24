# 弹性裸金属管理(Plus) - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.7.html*

---

## 弹性裸金属管理(Plus)



弹性裸金属管理以单独的功能模块形式提供，需提前购买弹性裸金属管理模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

## 创建块存储卷(CreateBlockVolume)



### API请求

 URLs

```
POST zstack/v1/block-volumes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "example",     "description": "block volume test"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"  -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"  -X POST -d '{"params":{"name":"example","description":"block volume test"}}'  http://localhost:8080/zstack/v1/block-volumes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 | 资源名称 | 4.7.11 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 | 资源的详细描述 | 4.7.11 |
| size | Long | body(包含在**params**结构中) | 容量 | 容量 | 4.7.11 |
| primaryStorageUuid | String | body(包含在**params**结构中) | 主存储UUID | 主存储UUID | 4.7.11 |
| accessPathId（可选） | Integer | body(包含在**params**结构中) | 访问路径id | 访问路径id | 4.7.11 |
| accessPathIqn（可选） | String | body(包含在**params**结构中) | 访问路径iqn | 访问路径iqn | 5.1.0 |
| burstTotalBw (可选) | Long | body(包含在**params**结构中) | 突发带宽 | 突发带宽 | 4.7.11 |
| burstTotalIops (可选) | Long | body(包含在**params**结构中) | 突发IOPS | 突发IOPS | 4.7.11 |
| maxTotalBw (可选) | Long | body(包含在**params**结构中) | 最大带宽 | 最大带宽 | 4.7.11 |
| maxTotalIops (可选) | Long | body(包含在**params**结构中) | 最大IOPS | 最大IOPS | 4.7.11 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID | 资源UUID | 4.7.11 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 | 标签UUID列表 | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 | 系统标签 | 4.7.11 |
| userTags (可选) | List | body | 用户标签 | 用户标签 | 4.7.11 |
| protocol (可选) | String | body(包含在**params**结构中) | 卷所属协议 | 卷所属协议 | 5.1.0 |



### API返回

 返回示例

```
{   "inventory": {} }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| inventory | VolumeInventory | 详情参考[inventory] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| iscsiPath | String |  | 4.7.11 |
| vendor | String |  | 4.7.11 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.11 |
| name | String | 资源名称 | 4.7.11 |
| description | String | 资源的详细描述 | 4.7.11 |
| primaryStorageUuid | String | 主存储UUID | 4.7.11 |
| vmInstanceUuid | String | 云主机UUID | 4.7.11 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.11 |
| rootImageUuid | String |  | 4.7.11 |
| installPath | String |  | 4.7.11 |
| type | String |  | 4.7.11 |
| format | String |  | 4.7.11 |
| size | Long |  | 4.7.11 |
| actualSize | Long |  | 4.7.11 |
| deviceId | Integer |  | 4.7.11 |
| state | String |  | 4.7.11 |
| status | String |  | 4.7.11 |
| createDate | Timestamp | 创建时间 | 4.7.11 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.11 |
| isShareable | Boolean |  | 4.7.11 |
| volumeQos | String |  | 4.7.11 |
| lastDetachDate | Timestamp |  | 4.7.11 |
| lastVmInstanceUuid | String |  | 4.7.11 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



### SDK示例

 Java SDK

```
CreateBlockVolumeAction action = new CreateBlockVolumeAction(); action.name = "example"; action.description = "block volume test"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateBlockVolumeAction.Result res = action.call();
```

 Python SDK

```
CreateBlockVolumeAction action = CreateBlockVolumeAction() action.name = "example" action.description = "block volume test" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateBlockVolumeAction.Result res = action.call()
```

---

## 获取访问路径列表(GetAccessPath)



### API请求

 URLs

```
GET zstack/v1/block-volumes/access/path/
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"  -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"  -X GET http://localhost:8080/zstack/v1/block-volumes/access/path?primaryStorageUuid=56963d0046b330839488e795b5109e44
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.11 |
| primaryStorageUuid | String | query | 主存储UUID |  | 4.7.11 |



### API返回

 返回示例

```
{   "pathInfos": [     {       "accessPathId": 1,       "accessPathIqn": "iqn",       "targetCount": 1     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.11 |
| inventory | VolumeInventory | 详情参考[pathInfos] | 4.7.11 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.11 |

 #pathInfos

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.7.11 |
| accessPathId | String | 访问路径id | 4.7.11 |
| accessPathIqn | String | 访问路径iqn | 4.7.11 |
| targetCount | Integer | 关联目标数量 | 4.7.11 |
| gatewayIps | List | 网关ip | 4.7.11 |

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
CreateBlockVolumeAction action = new CreateBlockVolumeAction(); action.name = "example"; action.description = "block volume test"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateBlockVolumeAction.Result res = action.call();
```

 Python SDK

```
CreateBlockVolumeAction action = CreateBlockVolumeAction() action.name = "example" action.description = "block volume test" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateBlockVolumeAction.Result res = action.call()
```

---

### 更新xsky类型的块存储卷(UpdateXskyBlockVolume)



#### API请求

 URLs

```
PUT zstack/v1/xsky/block-volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateXskyBlockVolume": {
    "name": "example"
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
-X PUT -d '{"updateXskyBlockVolume":{"name":"example"}}'
http://localhost:8080/zstack/v1/xsky/block-volumes/eeb07fe1a24833959f75c38b9c7e4132/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.11 |
| name (可选) | String | body(包含在**updateXskyBlockVolume**结构中) | 资源名称 |  | 4.7.11 |
| description (可选) | String | body(包含在**updateXskyBlockVolume**结构中) | 资源的详细描述 |  | 4.7.11 |
| burstTotalBw (可选) | Long | body(包含在**updateXskyBlockVolume**结构中) |  |  | 4.7.11 |
| burstTotalIops (可选) | Long | body(包含在**updateXskyBlockVolume**结构中) |  |  | 4.7.11 |
| maxTotalBw (可选) | Long | body(包含在**updateXskyBlockVolume**结构中) |  |  | 4.7.11 |
| maxTotalIops (可选) | Long | body(包含在**updateXskyBlockVolume**结构中) |  |  | 4.7.11 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.11 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.11 |



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
UpdateXskyBlockVolumeAction action = new UpdateXskyBlockVolumeAction();
action.uuid = "eeb07fe1a24833959f75c38b9c7e4132";
action.name = "example";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateXskyBlockVolumeAction.Result res = action.call();
```

 Python SDK

```
UpdateXskyBlockVolumeAction action = UpdateXskyBlockVolumeAction()
action.uuid = "eeb07fe1a24833959f75c38b9c7e4132"
action.name = "example"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateXskyBlockVolumeAction.Result res = action.call()
```

---

### 查询xsky类型块存储卷(QueryXskyBlockVolume)



#### API请求

 URLs

```
GET zstack/v1/xksy/block-volumes
GET zstack/xsky/block-volumes/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/xksy/block-volumes?q=uuid=xxx&q=name=xxx
```



```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/xsky/block-volumes/54e1b033658b3aa28536d0064c07c536
```



可查询字段

运行CLI命令行工具，输入`QueryXskyBlockVolume`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QueryXskyBlockVolumeAction action = new QueryXskyBlockVolumeAction();
action.conditions = asList("uuid=xxx","name=xxx");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryXskyBlockVolumeAction.Result res = action.call();
```

 Python SDK

```
QueryXskyBlockVolumeAction action = QueryXskyBlockVolumeAction()
action.conditions = ["uuid=xxx","name=xxx"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryXskyBlockVolumeAction.Result res = action.call()
```

---

### 删除裸金属节点(DeleteBareMetal2Chassis)



#### API请求

 URLs

```
DELETE zstack/v1/baremetal2/chassis/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal2/chassis/3f793d991a023499bda3e179e6910317
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
DeleteBareMetal2ChassisAction action = new DeleteBareMetal2ChassisAction();
action.uuid = "3f793d991a023499bda3e179e6910317";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
DeleteBareMetal2ChassisAction action = DeleteBareMetal2ChassisAction()
action.uuid = "3f793d991a023499bda3e179e6910317"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteBareMetal2ChassisAction.Result res = action.call()
```

---

### 更新裸金属节点信息(UpdateBareMetal2Chassis)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBareMetal2Chassis": {
    "name": "NEW_BM_CHASSIS",
    "description": "This is a new bare metal chassis."
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBareMetal2Chassis":{"name":"NEW_BM_CHASSIS","description":"This is a new bare metal chassis."}}' http://localhost:8080/zstack/v1/baremetal2/chassis/4e99972d89a63a9fa061971a3267374f/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name (可选) | String | body(包含在**updateBaremetalChassis**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateBaremetalChassis**结构中) | 资源的详细描述 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ff9c61a4323b429eb53552098b3582e5",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "6324e249a6434599867f0bdc4166f89d",
    "clusterUuid": "4569c6fc1b4e453691bfa3bed90d66d2",
    "chassisOfferingUuid": "dfd1ef44f65f49a8b788a31727eeea17",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BaremetalChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
UpdateBareMetal2ChassisAction action = new UpdateBareMetal2ChassisAction();
action.uuid = "4e99972d89a63a9fa061971a3267374f";
action.name = "NEW_BM_CHASSIS";
action.description = "This is a new bare metal chassis.";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
UpdateBareMetal2ChassisAction action = UpdateBareMetal2ChassisAction()
action.uuid = "4e99972d89a63a9fa061971a3267374f"
action.name = "NEW_BM_CHASSIS"
action.description = "This is a new bare metal chassis."
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBareMetal2ChassisAction.Result res = action.call()
```

---

### 查询裸金属节点上的GPU设备(QueryBareMetal2ChassisGpuDevice)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/chassis/gpu-device/gpu-devices
```


```
GET zstack/v1/baremetal2/chassis/gpu-device/gpu-devices/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/gpu-device/gpu-devices?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/gpu-device/gpu-devices/0182e9be97a2385f9e32ff2f77540abb
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryBareMetal2ChassisGpuDevice`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

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
| serialNumber | String |  | 5.1.8 |
| memory | String |  | 5.1.8 |
| power | String |  | 5.1.8 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.8 |
| chassisUuid | String |  | 5.1.8 |
| description | String | 资源的详细描述 | 5.1.8 |
| type | String |  | 5.1.8 |
| pciDeviceAddress | String |  | 5.1.8 |
| vendorId | String |  | 5.1.8 |
| deviceId | String |  | 5.1.8 |
| subvendorId | String |  | 5.1.8 |
| subdeviceId | String |  | 5.1.8 |
| iommuGroup | String |  | 5.1.8 |
| name | String | 资源名称 | 5.1.8 |
| vendor | String |  | 5.1.8 |
| device | String |  | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |



#### SDK示例

 Java SDK

```
QueryBareMetal2ChassisGpuDeviceAction action = new QueryBareMetal2ChassisGpuDeviceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2ChassisGpuDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2ChassisGpuDeviceAction action = QueryBareMetal2ChassisGpuDeviceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2ChassisGpuDeviceAction.Result res = action.call()
```

---

### 查询裸金属节点上的PCI设备(QueryBareMetal2ChassisPciDevice)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/chassis/pci-device/pci-devices
```


```
GET zstack/v1/baremetal2/chassis/pci-device/pci-devices/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/pci-device/pci-devices?
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/pci-device/pci-devices/a2c7298ca3b53d7da79988705ce21ec3
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryBareMetal2ChassisPciDevice`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

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
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.8 |
| chassisUuid | String |  | 5.1.8 |
| description | String | 资源的详细描述 | 5.1.8 |
| type | String |  | 5.1.8 |
| pciDeviceAddress | String |  | 5.1.8 |
| vendorId | String |  | 5.1.8 |
| deviceId | String |  | 5.1.8 |
| subvendorId | String |  | 5.1.8 |
| subdeviceId | String |  | 5.1.8 |
| iommuGroup | String |  | 5.1.8 |
| name | String | 资源名称 | 5.1.8 |
| vendor | String |  | 5.1.8 |
| device | String |  | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |



#### SDK示例

 Java SDK

```
QueryBareMetal2ChassisPciDeviceAction action = new QueryBareMetal2ChassisPciDeviceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2ChassisPciDeviceAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2ChassisPciDeviceAction action = QueryBareMetal2ChassisPciDeviceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2ChassisPciDeviceAction.Result res = action.call()
```

---

### 获取裸金属节点BIOS启动模式(GetBareMetal2SupportedBootMode)



#### API请求

 URLs

```
GET /v1/baremetal2/chassis/supported-boot-modes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/supported-boot-modes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "supportedBootMode": "UEFI"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| supportedBootMode | String | 支持的启动模式 | 4.0.0 |
| success | boolean | 获取成功 | 4.0.0 |
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



#### SDK示例

 Java SDK

```
GetBareMetal2SupportedBootModeAction action = new GetBareMetal2SupportedBootModeAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetBareMetal2SupportedBootModeAction.Result res = action.call();
```

 Python SDK

```
GetBareMetal2SupportedBootModeAction action = GetBareMetal2SupportedBootModeAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetBareMetal2SupportedBootModeAction.Result res = action.call()
```

---

### 查询裸金属节点(QueryBareMetal2Chassis)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/chassis
```


```
GET zstack/v1/baremetal2/chassis/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/fe0910252e6933f197074d0672e7512c
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2Chassis并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "7e131e3f9aed47b38e3da0a722124fc1",
      "name": "BM_CHASSIS",
      "description": "This is a bare metal chassis.",
      "zoneUuid": "d6b27e49ee6647e48b0a61f16ff24134",
      "clusterUuid": "d4003ca2d0a74f8ea3758e18095b4598",
      "chassisOfferingUuid": "60f8b2a5472846ebb603933f84d9dff6",
      "type": "IPMI",
      "state": "Enabled",
      "status": "Available",
      "powerStatus": "POWER_ON",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
QueryBareMetal2ChassisAction action = new QueryBareMetal2ChassisAction();
action.conditions = asList("uuid=9e93f7377ef9316d888fd2f0f9d8c3cf");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2ChassisAction action = QueryBareMetal2ChassisAction()
action.conditions = ["uuid=9753116ff50a3f9ea28d7c02bb4e9eb8"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2ChassisAction.Result res = action.call()
```

---

### 获取裸金属节点硬件信息(InspectBareMetal2Chassis)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "inspectBareMetal2Chassis": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"inspectBareMetal2Chassis":{}}' \
http://localhost:8080/zstack/v1/baremetal2/chassis/374cb67145683e44a18ed671a424142f/actions
```



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bc5e32728aa54d3585b8f75fe4a9d7bb",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "b7b96162d5464b1cb3ba7704675d1335",
    "clusterUuid": "4c8c2faa3c4a4b77947564ba8abadbc8",
    "chassisOfferingUuid": "2e90012ebfa34c6881e983ce478486d4",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
InspectBareMetal2ChassisAction action = new InspectBareMetal2ChassisAction();
action.uuid = "374cb67145683e44a18ed671a424142f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
InspectBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
InspectBareMetal2ChassisAction action = InspectBareMetal2ChassisAction()
action.uuid = "374cb67145683e44a18ed671a424142f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
InspectBareMetal2ChassisAction.Result res = action.call()
```

---

### 启动裸金属节点(PowerOnBareMetal2Chassis)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerOnBareMetal2Chassis": {
    "bootDev": "ipxe",
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"powerOnBareMetal2Chassis":{"bootDev":"ipxe"}}' \
http://localhost:8080/zstack/v1/baremetal2/chassis/4afdf33129373e5d845a46226bd698c1/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| bootDev (可选) | String | body(包含在**powerOnBareMetal2Chassis**结构中) | 启动设备 | disk ipxe | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "fe18fce7bab640479fc99e963f27765c",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "9f82f0a1782141a0a50cb0fc4e55862b",
    "clusterUuid": "27fb6e8be3ea4f3f9beb9f13978b2df4",
    "chassisOfferingUuid": "89db818c01014601b4e3c0e9980f6be0",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
PowerOnBareMetal2ChassisAction action = new PowerOnBareMetal2ChassisAction();
action.uuid = "4afdf33129373e5d845a46226bd698c1";
action.bootDev = "ipxe";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerOnBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
PowerOnBareMetal2ChassisAction action = PowerOnBareMetal2ChassisAction()
action.uuid = "4afdf33129373e5d845a46226bd698c1"
action.bootDev = "ipxe"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerOnBareMetal2ChassisAction.Result res = action.call()
```

---

### 关闭裸金属节点(PowerOffBareMetal2Chassis)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerOffBareMetal2Chassis": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"powerOffBareMetal2Chassis":{}}' http://localhost:8080/zstack/v1/baremetal2/chassis/d6e50887e1a6309c85e2f61aa2669c09/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a4d5ea20fd11487c92be0f342839d087",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "2001f4c806194ec5a702c8182ef656be",
    "clusterUuid": "6e7ec663eead4469b222e4d93c23c54b",
    "chassisOfferingUuid": "f946913c5a9a4e6a9205cee80f107bfc",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
PowerOffBareMetal2ChassisAction action = new PowerOffBareMetal2ChassisAction();
action.uuid = "d6e50887e1a6309c85e2f61aa2669c09";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerOffBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
PowerOffBareMetal2ChassisAction action = PowerOffBareMetal2ChassisAction()
action.uuid = "d6e50887e1a6309c85e2f61aa2669c09"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerOffBareMetal2ChassisAction.Result res = action.call()
```

---

### 重启裸金属节点(PowerResetBareMetal2Chassis)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerResetBareMetal2Chassis": {
    "bootDev": "ipxe",
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"powerResetBareMetal2Chassis":{"bootDev":"ipxe"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/8732657cd2763a929ce2deb3d246c6b1/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| bootDev (可选) | String | body(包含在**powerResetBareMetal2Chassis**结构中) | 启动设备 | disk ipxe | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cce529c23f734cdba583bd613981b5ba",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "294ec41558af487280ed7c80aed67566",
    "clusterUuid": "6507f73219b94dcfa881bf5dca8b8e52",
    "chassisOfferingUuid": "a55f2ecd884b4ea49f29d171fae426d7",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
PowerResetBareMetal2ChassisAction action = new PowerResetBareMetal2ChassisAction();
action.uuid = "8732657cd2763a929ce2deb3d246c6b1";
action.bootDev = "ipxe";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerResetBareMetal2ChassisAction.Result res = action.call();
```

 Python SDK

```
PowerResetBareMetal2ChassisAction action = PowerResetBareMetal2ChassisAction()
action.uuid = "8732657cd2763a929ce2deb3d246c6b1"
action.bootDev = "ipxe"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerResetBareMetal2ChassisAction.Result res = action.call()
```

---

### 获取裸金属节点电源状态(GetBareMetal2ChassisPowerStatus)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/chassis/{uuid}/powerstatus
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/5b681b2883c33eee8d536dde6fc6edc0/powerstatus
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "status": "ON"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| status | String | 电源状态 | 4.0.0 |
| success | boolean | 获取成功 | 4.0.0 |
| error | ErrorCode | 详情参考[error] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |



#### SDK示例

 Java SDK

```
GetBareMetal2ChassisPowerStatusAction action = new GetBareMetal2ChassisPowerStatusAction();
action.uuid = "5b681b2883c33eee8d536dde6fc6edc0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetBareMetal2ChassisPowerStatusAction.Result res = action.call();
```

 Python SDK

```
GetBareMetal2ChassisPowerStatusAction action = GetBareMetal2ChassisPowerStatusAction()
action.uuid = "5b681b2883c33eee8d536dde6fc6edc0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetBareMetal2ChassisPowerStatusAction.Result res = action.call()
```

---

### 更改裸金属节点启用状态(ChangeBareMetal2ChassisState)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBareMetal2ChassisState": {
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
-X PUT -d '{"changeBareMetal2ChassisState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/6661f1145e90370f921d4809cf5d542f/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| stateEvent | String | body(包含在**changeBareMetal2ChassisState**结构中) | 状态事件 | enable disable | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bba32ab86c2144f28e37dc5a08b851f1",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "0c20255099d7481f91780b0d2e4efb0c",
    "clusterUuid": "36dc10452949470385c15a1b24e5a5b9",
    "chassisOfferingUuid": "5e58278750c14cbf86b5447ddd848fea",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
ChangeBareMetal2ChassisStateAction action = new ChangeBareMetal2ChassisStateAction();
action.uuid = "6661f1145e90370f921d4809cf5d542f";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBareMetal2ChassisStateAction.Result res = action.call();
```

 Python SDK

```
ChangeBareMetal2ChassisStateAction action = ChangeBareMetal2ChassisStateAction()
action.uuid = "6661f1145e90370f921d4809cf5d542f"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBareMetal2ChassisStateAction.Result res = action.call()
```

---

### 使用IPMI地址单个添加裸金属节点(AddBareMetal2IpmiChassis)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/chassis/ipmi
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "ipmiAddress": "192.168.0.10",
    "ipmiPort": 623.0,
    "ipmiUsername": "root",
    "ipmiPassword": "password",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "clusterUuid": "68e54b937895308ca398f21826eb1343"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"ipmiAddress":"192.168.0.10","ipmiPort":623.0,"ipmiUsername":"root","ipmiPassword":"password","name":"BM_CHASSIS","description":"This is a bare metal chassis.","clusterUuid":"68e54b937895308ca398f21826eb1343"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/ipmi
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ipmiAddress | String | body(包含在**params**结构中) | IPMI地址 |  | 4.0.0 |
| ipmiPort (可选) | Integer | body(包含在**params**结构中) | IPMI端口 |  | 4.0.0 |
| ipmiUsername | String | body(包含在**params**结构中) | IPMI用户名 |  | 4.0.0 |
| ipmiPassword | String | body(包含在**params**结构中) | IPMI密码 |  | 4.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| clusterUuid | String | body(包含在**params**结构中) | 集群UUID |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |


  - 选项格式为：`chassisPlatform::系统类型`
  - 例如：`chassisPlatform::Windows`
- 例如：`chassisPlatform::Windows`


> **注意:** 说明:



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "89ddbcdf9d224e1ea59bbd92bcad71ea",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "7edd3186e6644022a197ad26fb8ee170",
    "clusterUuid": "37001f84733748fd8ae4201f9a622735",
    "chassisOfferingUuid": "693c1790b8374e6aa0888ab50ecd9deb",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
AddBareMetal2IpmiChassisAction action = new AddBareMetal2IpmiChassisAction();
action.ipmiAddress = "192.168.0.10";
action.ipmiPort = 623.0;
action.ipmiUsername = "root";
action.ipmiPassword = "password";
action.name = "BM_CHASSIS";
action.description = "This is a bare metal chassis.";
action.clusterUuid = "68e54b937895308ca398f21826eb1343";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddBareMetal2IpmiChassisAction.Result res = action.call();
```

 Python SDK

```
AddBareMetal2IpmiChassisAction action = AddBareMetal2IpmiChassisAction()
action.ipmiAddress = "192.168.0.10"
action.ipmiPort = 623.0
action.ipmiUsername = "root"
action.ipmiPassword = "password"
action.name = "BM_CHASSIS"
action.description = "This is a bare metal chassis."
action.clusterUuid = "68e54b937895308ca398f21826eb1343"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddBareMetal2IpmiChassisAction.Result res = action.call()
```

---

### 使用IPMI地址范围批量添加裸金属节点(BatchAddBareMetal2IpmiChassis)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/chassis/ipmi/from-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "chassisInfo": "FILE CONTENT ENCODE BY BASE64"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"chassisInfo":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/ipmi/from-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisInfo | String | body(包含在**params**结构中) | 经过base64编码的裸金属节点IPMI信息 |  | 4.0.0 |
| longJobName (可选) | String | body(包含在**params**结构中) | 长任务名称 |  | 4.0.0 |
| longJobDescription (可选) | String | body(包含在**params**结构中) | 长任务简介 |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1a3e5b9ece0738f5b1ca785271dd7b34",
    "name": "APIBatchAddBareMetal2ChassisEvent",
    "apiId": "d22289087f32358ca7d06ed3c1969462",
    "jobName": "APIBatchAddBareMetal2ChassisEvent",
    "jobData": "{\"createMessages\":[]",
    "jobResult": "",
    "state": "Succeeded",
    "managementNodeUuid": "a0b0f5b18c6e3cbb84b7d75e3eea991d"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | LongJobInventory | 详情参考[inventory] | 4.0.0 |

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
| apiId | String | 用于关联TaskProgress的APIID | 4.0.0 |
| jobName | String | 任务名称 | 4.0.0 |
| jobData | String | 任务数据 | 4.0.0 |
| jobResult | String | 任务结果 | 4.0.0 |
| targetResourceUuid | String | 目标资源UUID | 4.0.0 |
| managementNodeUuid | String | 管理节点UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | LongJobState | 详情参考[state] | 4.0.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.0.0 |
| ordinal | int |  | 4.0.0 |



#### SDK示例

 Java SDK

```
BatchAddBareMetal2IpmiChassisAction action = new BatchAddBareMetal2IpmiChassisAction();
action.chassisInfo = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
BatchAddBareMetal2IpmiChassisAction.Result res = action.call();
```

 Python SDK

```
BatchAddBareMetal2IpmiChassisAction action = BatchAddBareMetal2IpmiChassisAction()
action.chassisInfo = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
BatchAddBareMetal2IpmiChassisAction.Result res = action.call()
```

---

### 更新裸金属节点IPMI信息(UpdateBareMetal2IpmiChassis)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/ipmi/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBareMetal2IpmiChassis": {
    "ipmiAddress": "192.168.0.10",
    "ipmiPort": 623.0,
    "ipmiUsername": "username",
    "ipmiPassword": "password",
    "name": "NEW_BM_CHASSIS",
    "description": "This is a new bare metal chassis."
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBareMetal2IpmiChassis":{"ipmiAddress":"192.168.0.10","ipmiPort":623.0,\
"ipmiUsername":"username","ipmiPassword":"password","name":"NEW_BM_CHASSIS","description":"This is a new bare metal chassis."}}' http://localhost:8080/zstack/v1/baremetal2/chassis/ipmi/3f2b98a171ba35b88e3c1fc2f4dffdca/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ipmiAddress (可选) | String | body(包含在**updateBareMetal2IpmiChassis**结构中) | IPMI地址 |  | 4.0.0 |
| ipmiPort (可选) | Integer | body(包含在**updateBareMetal2IpmiChassis**结构中) | IPMI端口 |  | 4.0.0 |
| ipmiUsername (可选) | String | body(包含在**updateBareMetal2IpmiChassis**结构中) | IPMI用户名 |  | 4.0.0 |
| ipmiPassword (可选) | String | body(包含在**updateBareMetal2IpmiChassis**结构中) | IPMI密码 |  | 4.0.0 |
| uuid | String | body(包含在**updateBareMetal2IpmiChassis**结构中) | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name (可选) | String | body(包含在**updateBareMetal2IpmiChassis**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateBareMetal2IpmiChassis**结构中) | 资源的详细描述 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "96fe737e7de04a2e81e76e836660d901",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "8aa20b5003db4b33820fa3fc7cdea3f1",
    "clusterUuid": "40838c67c1f143d9aa4c66280b0cbd71",
    "chassisOfferingUuid": "042acb57ad7e4f029a4dfda42970e7cf",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.3.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 分配状态 | 4.0.0 |
| powerStatus | String | 电源状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| chassisNics | List | 详情参考[chassisNics] | 4.0.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.0.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.0.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| mac | String | 网卡MAC | 4.0.0 |
| speed | String | 网卡速率 | 4.0.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.0.0 |
| type | String | 磁盘类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
UpdateBareMetal2IpmiChassisAction action = new UpdateBareMetal2IpmiChassisAction();
action.ipmiAddress = "192.168.0.10";
action.ipmiPort = 623.0;
action.ipmiUsername = "username";
action.ipmiPassword = "password";
action.uuid = "3f2b98a171ba35b88e3c1fc2f4dffdca";
action.name = "NEW_BM_CHASSIS";
action.description = "This is a new bare metal chassis.";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBareMetal2IpmiChassisAction.Result res = action.call();
```

 Python SDK

```
UpdateBareMetal2IpmiChassisAction action = UpdateBareMetal2IpmiChassisAction()
action.ipmiAddress = "192.168.0.10"
action.ipmiPort = 623.0
action.ipmiUsername = "username"
action.ipmiPassword = "password"
action.uuid = "3f2b98a171ba35b88e3c1fc2f4dffdca"
action.name = "NEW_BM_CHASSIS"
action.description = "This is a new bare metal chassis."
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBareMetal2IpmiChassisAction.Result res = action.call()
```

---

### 检查批量添加裸金属节点文件(CheckBareMetal2IpmiChassisConfigFile)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/chassis/ipmi/from-file/check
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "chassisInfo": "FILE CONTENT ENCODE BY BASE64"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"chassisInfo":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/ipmi/from-file/check
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisInfo | String | body(包含在`params`结构中) | 经过base64编码的裸金属节点IPMI信息 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



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
CheckBareMetal2IpmiChassisConfigFileAction action = new CheckBareMetal2IpmiChassisConfigFileAction();
action.chassisInfo = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckBareMetal2IpmiChassisConfigFileAction.Result res = action.call();
```

 Python SDK

```
CheckBareMetal2IpmiChassisConfigFileAction action = CheckBareMetal2IpmiChassisConfigFileAction()
action.chassisInfo = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckBareMetal2IpmiChassisConfigFileAction.Result res = action.call()
```

---

### 创建裸金属节点硬件信息(CreateBareMetal2IpmiChassisHardwareInfo)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/chassis/ipmi/hardwareinfos
```

 Body

```
{
  "params": {
    "ipmiAddress": "192.168.0.10",
    "ipmiPort": 623.0,
    "hardwareInfo": "{\u0027architecture\u0027:\u0027x86_64\u0027, \u0027cpuModelName\u0027:\u0027Intel i7-6700K\u0027, \u0027cpuNum\u0027:\u00278\u0027, \u0027memorySize\u0027:\u002733421254656\u0027,\u0027nics\u0027:[{\u0027nicMac\u0027:\u002740:8d:5c:f7:8d:61\u0027, \u0027nicSpeed\u0027:\u00271000Mbps\u0027, \u0027isProvisionNic\u0027:\u0027true\u0027}]}"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"ipmiAddress":"192.168.0.10","ipmiPort":623.0,"hardwareInfo":"{'architecture':'x86_64', 'cpuModelName':'Intel i7-6700K', 'cpuNum':'8', 'memorySize':'33421254656','nics':[{'nicMac':'40:8d:5c:f7:8d:61', 'nicSpeed':'1000Mbps', 'isProvisionNic':'true'}]}"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/ipmi/hardwareinfos
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| ipmiAddress | String | body(包含在**params**结构中) | IPMI地址 |  | 4.0.0 |
| ipmiPort | Integer | body(包含在**params**结构中) | IPMI端口 |  | 4.0.0 |
| hardwareInfo | String | body(包含在**params**结构中) | 硬件信息 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



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
CreateBareMetal2IpmiChassisHardwareInfoAction action = new CreateBareMetal2IpmiChassisHardwareInfoAction();
action.ipmiAddress = "192.168.0.10";
action.ipmiPort = 623.0;
action.hardwareInfo = "{'architecture':'x86_64', 'cpuModelName':'Intel i7-6700K', 'cpuNum':'8', 'memorySize':'33421254656','nics':[{'nicMac':'40:8d:5c:f7:8d:61', 'nicSpeed':'1000Mbps', 'isProvisionNic':'true'}]}";
CreateBareMetal2IpmiChassisHardwareInfoAction.Result res = action.call();
```

 Python SDK

```
CreateBareMetal2IpmiChassisHardwareInfoAction action = CreateBareMetal2IpmiChassisHardwareInfoAction()
action.ipmiAddress = "192.168.0.10"
action.ipmiPort = 623.0
action.hardwareInfo = "{'architecture':'x86_64', 'cpuModelName':'Intel i7-6700K', 'cpuNum':'8', 'memorySize':'33421254656','nics':[{'nicMac':'40:8d:5c:f7:8d:61', 'nicSpeed':'1000Mbps', 'isProvisionNic':'true'}]}"
CreateBareMetal2IpmiChassisHardwareInfoAction.Result res = action.call()
```

---

### 更新裸金属节点规格(UpdateBareMetal2ChassisOffering)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/offerings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBareMetal2ChassisOffering": {
    "name": "new-offering-name",
    "description": "new-offering-description"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBareMetal2ChassisOffering":{"name":"new-offering-name","description":"new-offering-description"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/offerings/530ce92eb98a345ba74cc0f7fae932aa/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name (可选) | String | body(包含在**updateBareMetal2ChassisOffering**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateBareMetal2ChassisOffering**结构中) | 资源的详细描述 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4f1b206549984f77a170a776ed62dd52",
    "name": "BM-8C-8G",
    "description": "This is bare metal instance offering.",
    "architecture": "x86_64",
    "cpuModelName": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz",
    "cpuNum": 8.0,
    "memorySize": 8.589934592E9,
    "bootMode": "UEFI",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisOfferingInventory | 详情参考[inventory] | 4.0.0 |

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
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
UpdateBareMetal2ChassisOfferingAction action = new UpdateBareMetal2ChassisOfferingAction();
action.uuid = "530ce92eb98a345ba74cc0f7fae932aa";
action.name = "new-offering-name";
action.description = "new-offering-description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBareMetal2ChassisOfferingAction.Result res = action.call();
```

 Python SDK

```
UpdateBareMetal2ChassisOfferingAction action = UpdateBareMetal2ChassisOfferingAction()
action.uuid = "530ce92eb98a345ba74cc0f7fae932aa"
action.name = "new-offering-name"
action.description = "new-offering-description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBareMetal2ChassisOfferingAction.Result res = action.call()
```

---

### 查询裸金属节点规格(QueryBareMetal2ChassisOffering)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/chassis/offerings
```


```
GET zstack/v1/baremetal2/chassis/offerings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/offerings?q=uuid=20cc19e5bbcd3a4b882dc31a82524944
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/chassis/offerings/747272874a1039579de13fba1b230645
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2ChassisOffering并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f64db447a42a4673a5b2a6aa6476725e",
      "name": "BM-8C-8G",
      "description": "This is bare metal instance offering.",
      "architecture": "x86_64",
      "cpuModelName": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz",
      "cpuNum": 8.0,
      "memorySize": 8.589934592E9,
      "bootMode": "UEFI",
      "state": "Enabled",
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
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
QueryBareMetal2ChassisOfferingAction action = new QueryBareMetal2ChassisOfferingAction();
action.conditions = asList("uuid=34a1289f0165376aae6782a7c37460b3");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2ChassisOfferingAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2ChassisOfferingAction action = QueryBareMetal2ChassisOfferingAction()
action.conditions = ["uuid=38acdcf9fd6339bcb04a94ef9bc5b95c"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2ChassisOfferingAction.Result res = action.call()
```

---

### 更改裸金属节点规格启用状态(ChangeBareMetal2ChassisOfferingState)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/chassis/offerings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBareMetal2ChassisOfferingState": {
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
-X PUT -d '{"changeBareMetal2ChassisOfferingState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/offerings/bb6d3f5ef72d3051aaff974b442a0cbf/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| stateEvent | String | body(包含在**changeBareMetal2ChassisOfferingState**结构中) | 状态事件 | enable disable | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8020c6ab0e4346df8146d922a5319c2c",
    "name": "BM-8C-8G",
    "description": "This is bare metal instance offering.",
    "architecture": "x86_64",
    "cpuModelName": "Intel(R) Core(TM) i7-6700K CPU @ 4.00GHz",
    "cpuNum": 8.0,
    "memorySize": 8.589934592E9,
    "bootMode": "UEFI",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisOfferingInventory | 详情参考[inventory] | 4.0.0 |

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
| architecture | String | CPU架构 | 4.0.0 |
| cpuModelName | String | CPU型号 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| bootMode | String | 启动模式 | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
ChangeBareMetal2ChassisOfferingStateAction action = new ChangeBareMetal2ChassisOfferingStateAction();
action.uuid = "bb6d3f5ef72d3051aaff974b442a0cbf";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBareMetal2ChassisOfferingStateAction.Result res = action.call();
```

 Python SDK

```
ChangeBareMetal2ChassisOfferingStateAction action = ChangeBareMetal2ChassisOfferingStateAction()
action.uuid = "bb6d3f5ef72d3051aaff974b442a0cbf"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBareMetal2ChassisOfferingStateAction.Result res = action.call()
```

---

### 添加网关节点(AddBareMetal2Gateway)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/gateways
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
    "sshPort": 22.0,
    "name": "gateway",
    "managementIp": "127.0.0.1",
    "clusterUuid": "5b08798053343ec686244dc3a36bbccf"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"username":"userName","password":"password","sshPort":22.0,"name":"gateway","managementIp":"127.0.0.1","clusterUuid":"5b08798053343ec686244dc3a36bbccf"}}' http://localhost:8080/zstack/v1/baremetal2/gateways
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| username | String | body(包含在**params**结构中) | 用户名 |  | 4.0.0 |
| password | String | body(包含在**params**结构中) | 密码 |  | 4.0.0 |
| sshPort (可选) | int | body(包含在**params**结构中) | SSH端口 |  | 4.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| managementIp | String | body(包含在**params**结构中) | 管理网络IP地址 |  | 4.0.0 |
| clusterUuid | String | body(包含在**params**结构中) | 集群UUID |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "zoneUuid": "24b761ab09f7349684387fdf822aaee7",
    "name": "example",
    "uuid": "f893fe1c941939738a0ec271880d8e53",
    "clusterUuid": "4191157f33ab34d0a55b8e30444a1367",
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
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ChassisOfferingInventory | 详情参考[inventory] | 4.0.0 |

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
| totalMemoryCapacity | Long |  | 4.0.0 |
| availableMemoryCapacity | Long |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
AddBareMetal2GatewayAction action = new AddBareMetal2GatewayAction();
action.username = "userName";
action.password = "password";
action.sshPort = 22.0;
action.name = "gateway";
action.managementIp = "127.0.0.1";
action.clusterUuid = "5b08798053343ec686244dc3a36bbccf";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddBareMetal2GatewayAction.Result res = action.call();
```

 Python SDK

```
AddBareMetal2GatewayAction action = AddBareMetal2GatewayAction()
action.username = "userName"
action.password = "password"
action.sshPort = 22.0
action.name = "gateway"
action.managementIp = "127.0.0.1"
action.clusterUuid = "5b08798053343ec686244dc3a36bbccf"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddBareMetal2GatewayAction.Result res = action.call()
```

---

### 删除网关节点(DeleteBareMetal2Gateway)



#### API请求

 URLs

```
DELETE zstack/v1/baremetal2/gateways/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal2/gateways/f34f2a3179ae362eb5c01ae22581d2ac
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
DeleteBareMetal2GatewayAction action = new DeleteBareMetal2GatewayAction();
action.uuid = "f34f2a3179ae362eb5c01ae22581d2ac";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteBareMetal2GatewayAction.Result res = action.call();
```

 Python SDK

```
DeleteBareMetal2GatewayAction action = DeleteBareMetal2GatewayAction()
action.uuid = "f34f2a3179ae362eb5c01ae22581d2ac"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteBareMetal2GatewayAction.Result res = action.call()
```

---

### 更新网关节点(UpdateBareMetal2Gateway)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/gateways/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBareMetal2Gateway": {
    "sshPort": 22.0,
    "password": "password",
    "name": "NEW_BM_GATEWAY",
    "description": "This is a new bare metal gateway.",
    "managementIp": "192.168.0.10"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBareMetal2Gateway":{"sshPort":22.0,"password":"password","name":"NEW_BM_GATEWAY","description":"This is a new bare metal gateway.","managementIp":"192.168.0.10"}}' http://localhost:8080/zstack/v1/baremetal2/gateways/bb000d56b8143341a57a76b7344b9b65/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sshPort (可选) | Integer | body(包含在**updateBareMetal2Gateway**结构中) | SSH端口 |  | 4.0.0 |
| username (可选) | String | body(包含在**updateBareMetal2Gateway**结构中) | 用户名 |  | 4.0.0 |
| password (可选) | String | body(包含在**updateBareMetal2Gateway**结构中) | 密码 |  | 4.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name (可选) | String | body(包含在**updateBareMetal2Gateway**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateBareMetal2Gateway**结构中) | 资源的详细描述 |  | 4.0.0 |
| managementIp (可选) | String | body(包含在**updateBareMetal2Gateway**结构中) | 管理网络IP地址 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "username": "username",
    "password": "password",
    "sshPort": 22.0,
    "zoneUuid": "e5337859dc214ce49ce31acea22a3bab",
    "name": "BM_GATEWAY",
    "uuid": "ce1634f0ff72403fbb457b1630420096",
    "description": "This is a bare metal gateway.",
    "managementIp": "192.168.0.10",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2GatewayInventory | 详情参考[inventory] | 4.0.0 |

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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
UpdateBareMetal2GatewayAction action = new UpdateBareMetal2GatewayAction();
action.sshPort = 22.0;
action.password = "password";
action.uuid = "bb000d56b8143341a57a76b7344b9b65";
action.name = "NEW_BM_GATEWAY";
action.description = "This is a new bare metal gateway.";
action.managementIp = "192.168.0.10";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBareMetal2GatewayAction.Result res = action.call();
```

 Python SDK

```
UpdateBareMetal2GatewayAction action = UpdateBareMetal2GatewayAction()
action.sshPort = 22.0
action.password = "password"
action.uuid = "bb000d56b8143341a57a76b7344b9b65"
action.name = "NEW_BM_GATEWAY"
action.description = "This is a new bare metal gateway."
action.managementIp = "192.168.0.10"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBareMetal2GatewayAction.Result res = action.call()
```

---

### 查询网关节点(QueryBareMetal2Gateway)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/gateways
```


```
GET zstack/v1/baremetal2/gateways/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/gateways/48735292c5113181bcc27dddbfc123fd
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/gateways?q=uuid=317ac820ec8b35d4acf701b7333a4fcc
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2Gateway并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "username": "username",
      "password": "password",
      "sshPort": 22.0,
      "zoneUuid": "d5e6f16bbbab4c1e8c71a0ad108837d9",
      "name": "BM_GATEWAY",
      "uuid": "19b634f736574b7c93ff89c8741714d7",
      "description": "This is a bare metal gateway.",
      "managementIp": "192.168.0.10",
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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
QueryBareMetal2GatewayAction action = new QueryBareMetal2GatewayAction();
action.conditions = asList("uuid=089cc9f73e31367c8d3db89f736957b2");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2GatewayAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2GatewayAction action = QueryBareMetal2GatewayAction()
action.conditions = ["uuid=88779d1fce2138c28744a2ed1265df1d"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2GatewayAction.Result res = action.call()
```

---

### 更改网关节点启用状态(ChangeBareMetal2GatewayState)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/gateways/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBareMetal2GatewayState": {
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
-X PUT -d '{"changeBareMetal2GatewayState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/baremetal2/gateways/45e9cf4edc7638eaad0ef5e2ca03a911/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| stateEvent | String | body(包含在**changeBareMetal2GatewayState**结构中) | 状态事件 | enable disable | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "username": "username",
    "password": "password",
    "sshPort": 22.0,
    "zoneUuid": "f7ee69031623443a82c3d1ad14e17216",
    "name": "BM_GATEWAY",
    "uuid": "3827d83852794e138019088f4e9e2371",
    "description": "This is a bare metal gateway.",
    "managementIp": "192.168.0.10",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2GatewayInventory | 详情参考[inventory] | 4.0.0 |

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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
ChangeBareMetal2GatewayStateAction action = new ChangeBareMetal2GatewayStateAction();
action.uuid = "45e9cf4edc7638eaad0ef5e2ca03a911";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBareMetal2GatewayStateAction.Result res = action.call();
```

 Python SDK

```
ChangeBareMetal2GatewayStateAction action = ChangeBareMetal2GatewayStateAction()
action.uuid = "45e9cf4edc7638eaad0ef5e2ca03a911"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBareMetal2GatewayStateAction.Result res = action.call()
```

---

### 重连网关节点(ReconnectBareMetal2Gateway)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/gateways/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectBareMetal2Gateway": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectBareMetal2Gateway":{}}' http://localhost:8080/zstack/v1/baremetal2/gateways/42194e64d56e3e0cb3d6343429ac9fc1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "username": "username",
    "password": "password",
    "sshPort": 22.0,
    "zoneUuid": "dba32ea5c90f4944b38668f502050ab0",
    "name": "BM_GATEWAY",
    "uuid": "34d1f5a0920843279738a58c6251ff92",
    "description": "This is a bare metal gateway.",
    "managementIp": "192.168.0.10",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2GatewayInventory | 详情参考[inventory] | 4.0.0 |

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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
ReconnectBareMetal2GatewayAction action = new ReconnectBareMetal2GatewayAction();
action.uuid = "42194e64d56e3e0cb3d6343429ac9fc1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReconnectBareMetal2GatewayAction.Result res = action.call();
```

 Python SDK

```
ReconnectBareMetal2GatewayAction action = ReconnectBareMetal2GatewayAction()
action.uuid = "42194e64d56e3e0cb3d6343429ac9fc1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReconnectBareMetal2GatewayAction.Result res = action.call()
```

---

### 获取网关节点分配策略(GetBareMetal2GatewayAllocatorStrategies)



#### API请求

URLs

```
GET zstack/v1/baremetal2/gateways/allocators/strategies
```

Headers

```
Authorization: OAuth the-session-uuid
```

Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/gateways/allocators/strategies
```

参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "gatewayAllocatorStrategies": [
    "DefaultGatewayAllocatorStrategy",
    "LastGatewayPreferredAllocatorStrategy",
    "LeastBmPreferredGatewayAllocatorStrategy"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| strategies | List | 裸金属网关节点分配策略列表 | 4.0.0 |
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



#### SDK示例

 Java SDK

```
GetBareMetal2GatewayAllocatorStrategiesAction action = new GetBareMetal2GatewayAllocatorStrategiesAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetBareMetal2GatewayAllocatorStrategiesAction.Result res = action.call();
```

 Python SDK

```
GetBareMetal2GatewayAllocatorStrategiesAction action = GetBareMetal2GatewayAllocatorStrategiesAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetBareMetal2GatewayAllocatorStrategiesAction.Result res = action.call()
```

---

### 将网关节点加载到弹性裸金属集群(AttachBareMetal2GatewayToCluster)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/clusters/{clusterUuid}/gateways/{gatewayUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/baremetal2/clusters/089e7fab17b7332b970fbfd9e4be1506/gateways/1371ab1d5d8b3ba59e3fec417a0f2650
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | url | 集群UUID |  | 4.0.0 |
| gatewayUuid | String | url | 裸金属网关节点UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "username": "username",
    "password": "password",
    "sshPort": 22.0,
    "zoneUuid": "27aafe8965d54cbcbfe96efb6f2d987b",
    "name": "BM_GATEWAY",
    "uuid": "2c28e0ba594b479fa4fd6ec29187a055",
    "description": "This is a bare metal gateway.",
    "managementIp": "192.168.0.10",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2GatewayInventory | 详情参考[inventory] | 4.0.0 |

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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
AttachBareMetal2GatewayToClusterAction action = new AttachBareMetal2GatewayToClusterAction();
action.clusterUuid = "089e7fab17b7332b970fbfd9e4be1506";
action.gatewayUuid = "1371ab1d5d8b3ba59e3fec417a0f2650";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachBareMetal2GatewayToClusterAction.Result res = action.call();
```

 Python SDK

```
AttachBareMetal2GatewayToClusterAction action = AttachBareMetal2GatewayToClusterAction()
action.clusterUuid = "089e7fab17b7332b970fbfd9e4be1506"
action.gatewayUuid = "1371ab1d5d8b3ba59e3fec417a0f2650"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachBareMetal2GatewayToClusterAction.Result res = action.call()
```

---

### 将网关节点从弹性裸金属集群卸载(DetachBareMetal2GatewayFromCluster)



#### API请求

 URLs

```
DELETE zstack/v1/baremetal2/clusters/{clusterUuid}/gateways/{gatewayUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal2/clusters/d2b8680d85ec3ffe9e25764059f74ef3/gateways/2576cacdeef53f13963547db023b6679
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | url | 集群UUID |  | 4.0.0 |
| gatewayUuid | String | url | 裸金属网关节点UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "username": "username",
    "password": "password",
    "sshPort": 22.0,
    "zoneUuid": "43aca62381ee4237a4cb59d164420ce6",
    "name": "BM_GATEWAY",
    "uuid": "3d93240bb6db464db7a8354b817b4ef8",
    "description": "This is a bare metal gateway.",
    "managementIp": "192.168.0.10",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2GatewayInventory | 详情参考[inventory] | 4.0.0 |

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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
DetachBareMetal2GatewayFromClusterAction action = new DetachBareMetal2GatewayFromClusterAction();
action.clusterUuid = "d2b8680d85ec3ffe9e25764059f74ef3";
action.gatewayUuid = "2576cacdeef53f13963547db023b6679";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachBareMetal2GatewayFromClusterAction.Result res = action.call();
```

 Python SDK

```
DetachBareMetal2GatewayFromClusterAction action = DetachBareMetal2GatewayFromClusterAction()
action.clusterUuid = "d2b8680d85ec3ffe9e25764059f74ef3"
action.gatewayUuid = "2576cacdeef53f13963547db023b6679"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachBareMetal2GatewayFromClusterAction.Result res = action.call()
```

---

### 为网关节点更改弹性裸金属集群(ChangeBareMetal2GatewayCluster)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/gateways/{gatewayUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBareMetal2GatewayCluster": {
    "clusterUuid": "4a25d17182513ddca1b0fb2b5d6ed6c9"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"changeBareMetal2GatewayCluster":{"clusterUuid":"4a25d17182513ddca1b0fb2b5d6ed6c9"}}' http://localhost:8080/zstack/v1/baremetal2/gateways/43ec286e4b23393dba7bee8a6483b266/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| gatewayUuid | String | url |  |  | 4.0.0 |
| clusterUuid | String | body(包含在**changeBareMetal2GatewayCluster**结构中) | 集群UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "username": "username",
    "password": "password",
    "sshPort": 22.0,
    "zoneUuid": "13bed655774f4fbdaff916c205b34cc4",
    "name": "BM_GATEWAY",
    "uuid": "a557900a7fa945bdbf2135e4dd177580",
    "description": "This is a bare metal gateway.",
    "managementIp": "192.168.0.10",
    "state": "Enabled",
    "status": "Connected",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2GatewayInventory | 详情参考[inventory] | 4.0.0 |

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
| attachedClusterUuids | List | 挂载集群的UUID列表 | 4.0.0 |
| username | String | 用户名 | 4.0.0 |
| sshPort | Integer | SSH端口 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| managementIp | String | 管理网络IP地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| state | String | 启用状态 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| totalCpuCapacity | Long | CPU总量 | 4.0.0 |
| availableCpuCapacity | Long | CPU可用量 | 4.0.0 |
| cpuSockets | Integer |  | 4.0.0 |
| totalMemoryCapacity | Long | 内存总量 | 4.0.0 |
| availableMemoryCapacity | Long | 内存可用量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| provisionNic | BareMetal2GatewayProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



#### SDK示例

 Java SDK

```
ChangeBareMetal2GatewayClusterAction action = new ChangeBareMetal2GatewayClusterAction();
action.gatewayUuid = "43ec286e4b23393dba7bee8a6483b266";
action.clusterUuid = "4a25d17182513ddca1b0fb2b5d6ed6c9";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBareMetal2GatewayClusterAction.Result res = action.call();
```

 Python SDK

```
ChangeBareMetal2GatewayClusterAction action = ChangeBareMetal2GatewayClusterAction()
action.gatewayUuid = "43ec286e4b23393dba7bee8a6483b266"
action.clusterUuid = "4a25d17182513ddca1b0fb2b5d6ed6c9"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBareMetal2GatewayClusterAction.Result res = action.call()
```

---

### 创建弹性裸金属实例(CreateBareMetal2Instance)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/bm-instances
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "BM",
    "description": "This is a bare metal instance",
    "clusterUuid": "d42170a418c3371f82ac5f21d10feff4",
    "chassisOfferingUuid": "b759701ddf47367eb55efea665eb3bd8",
    "imageUuid": "529c9474896035f8bb8aa806bec5c28b"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"BM","description":"This is a bare metal instance","clusterUuid":"d42170a418c3371f82ac5f21d10feff4","chassisOfferingUuid":"b759701ddf47367eb55efea665eb3bd8","imageUuid":"529c9474896035f8bb8aa806bec5c28b"}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 4.0.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 4.0.0 |
| gatewayUuid (可选) | String | body(包含在**params**结构中) | 裸金属网关节点UUID |  | 4.0.0 |
| chassisUuid (可选) | String | body(包含在**params**结构中) | 裸金属节点UUID |  | 4.0.0 |
| chassisOfferingUuid (可选) | String | body(包含在**params**结构中) | 裸金属节点规格UUID |  | 4.0.0 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID |  | 4.0.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根云盘所在主存储UUID |  | 4.0.0 |
| primaryStorageUuidForDataVolume (可选) | String | body(包含在**params**结构中) | 数据盘所在主存储UUID |  | 4.0.0 |
| dataDiskOfferingUuids (可选) | List | body(包含在**params**结构中) | 数据云盘规格UUID列表 |  | 4.0.0 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 根云盘系统标签 |  | 4.0.0 |
| dataVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 数据盘系统标签 |  | 4.0.0 |
| gatewayAllocatorStrategy (可选) | String | body(包含在**params**结构中) | 裸金属网关节点分配策略 |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |


  - 选项格式为：`systemDisk::WWN`
  - 例如：`systemDisk::0x5000c500d490b3d0`
- 例如：`systemDisk::0x5000c500d490b3d0`


> **注意:** 说明:



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "8f3f024ff93c4728ad1015f4a8b077b8",
    "lastChassisUuid": "7440bd4a6f914300bf69d2d93c613569",
    "gatewayUuid": "5d28e9fbb9eb4c0baefed41d1b9e545b",
    "lastGatewayUuid": "89cfdd03373f46efb8ff96e208ac4e26",
    "chassisOfferingUuid": "f2749886529548d4bec92ff84cac97b5",
    "status": "Connected",
    "uuid": "def346afd69041ffa8efb7652be896a3",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "f74c8875e9c34970b296bb6d674e9740",
    "clusterUuid": "a89231cb2d624e919e8e2ad57b82eed1",
    "imageUuid": "1359ff33717d4d009624351a65203a26",
    "rootVolumeUuid": "3325c28692474e8b83b1c69d89d5fcef",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8.589934592E9,
    "cpuNum": 8.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 4.0.0 |

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
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| provisionNic | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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



#### SDK示例

 Java SDK

```
CreateBareMetal2IpmiChassisHardwareInfoAction action = new CreateBareMetal2IpmiChassisHardwareInfoAction();
action.ipmiAddress = "192.168.0.10";
action.ipmiPort = 623.0;
action.hardwareInfo = "{'architecture':'x86_64', 'cpuModelName':'Intel i7-6700K', 'cpuNum':'8', 'memorySize':'33421254656','nics':[{'nicMac':'40:8d:5c:f7:8d:61', 'nicSpeed':'1000Mbps', 'isProvisionNic':'true'}]}";
CreateBareMetal2IpmiChassisHardwareInfoAction.Result res = action.call();
```

 Python SDK

```
CreateBareMetal2IpmiChassisHardwareInfoAction action = CreateBareMetal2IpmiChassisHardwareInfoAction()
action.ipmiAddress = "192.168.0.10"
action.ipmiPort = 623.0
action.hardwareInfo = "{'architecture':'x86_64', 'cpuModelName':'Intel i7-6700K', 'cpuNum':'8', 'memorySize':'33421254656','nics':[{'nicMac':'40:8d:5c:f7:8d:61', 'nicSpeed':'1000Mbps', 'isProvisionNic':'true'}]}"
CreateBareMetal2IpmiChassisHardwareInfoAction.Result res = action.call()
```

---

### 更新弹性裸金属实例(UpdateBareMetal2Instance)



#### API请求

 URLs

```
PUT /v1/baremetal2/bm-instances/{uuid}/action
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBareMetal2Instance": {
    "name": "new-bm2-instance-name",
    "description": "new-bm2-instance-description",
    "state": "Running",
    "chassisOfferingUuid": "75f357e1c7d931f8977c44cf6e472088",
    "defaultL3NetworkUuid": "93b3ad570c9238568da83b838e41b944",
    "autoReleaseChassisEvent": "enable"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBareMetal2Instance":{"name":"new-bm2-instance-name","description":"new-bm2-instance-description","state":"Running","chassisOfferingUuid":"75f357e1c7d931f8977c44cf6e472088","defaultL3NetworkUuid":"93b3ad570c9238568da83b838e41b944","autoReleaseChassisEvent":"enable"}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances/fe3ee28c03793c57b64c5cc76e096566/action
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name（可选） | String | body(包含在**updateBareMetal2Instance**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateBareMetal2Instance**结构中) | 资源的详细描述 |  | 4.0.0 |
| state（可选） |  | body(包含在**updateBareMetal2Instance**结构中) | 运行状态 | Stopped Running |  |
| chassisOfferingUuid (可选) | String | body(包含在**updateBareMetal2Instance**结构中) | 节点规格UUID |  | 4.0.0 |
| defaultL3NetworkUuid（可选） | String | body(包含在**updateBareMetal2Instance**结构中) | 默认网络UUID |  | 4.0.0 |
| autoReleaseChassisEvent (可选) | String | body(包含在**updateBareMetal2Instance**结构中) | 关机自动释放节点 | enable disable | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "7453e747768542489c23050886938b77",
    "lastChassisUuid": "b39799cc4126488aa17814ea424a3dd7",
    "gatewayUuid": "196bf822c5e349adabf8794d9cb5e75c",
    "lastGatewayUuid": "350145e2738d44e9a5167eeb478cae00",
    "chassisOfferingUuid": "2d45764c371d49f48431f018618eb10b",
    "status": "Connected",
    "uuid": "d9fe21f56dfb414494d1b09905f19179",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "d02a19753dfa4ee4ad43597c7e6d3a73",
    "clusterUuid": "966745e8fa264ca4811096a530202acd",
    "imageUuid": "02a4dc10172f4652bc160d4f8e397aee",
    "rootVolumeUuid": "f86494fac7714dad95bf90732e9bd319",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8.589934592E9,
    "cpuNum": 8.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 4.0.0 |

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
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| provisionNic | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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



#### SDK示例

 Java SDK

```
UpdateBareMetal2InstanceAction action = new UpdateBareMetal2InstanceAction();
action.uuid = "fe3ee28c03793c57b64c5cc76e096566";
action.name = "new-bm2-instance-name";
action.description = "new-bm2-instance-description";
action.state = "Running";
action.chassisOfferingUuid = "75f357e1c7d931f8977c44cf6e472088";
action.defaultL3NetworkUuid = "93b3ad570c9238568da83b838e41b944";
action.autoReleaseChassisEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBareMetal2InstanceAction.Result res = action.call();
```

 Python SDK

```
UpdateBareMetal2InstanceAction action = UpdateBareMetal2InstanceAction()
action.uuid = "fe3ee28c03793c57b64c5cc76e096566"
action.name = "new-bm2-instance-name"
action.description = "new-bm2-instance-description"
action.state = "Running"
action.chassisOfferingUuid = "75f357e1c7d931f8977c44cf6e472088"
action.defaultL3NetworkUuid = "93b3ad570c9238568da83b838e41b944"
action.autoReleaseChassisEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBareMetal2InstanceAction.Result res = action.call()
```

---

### 查询弹性裸金属实例(QueryBareMetal2Instance)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/bm-instances
```


```
GET zstack/v1/baremetal2/bm-instances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/bm-instances?q=uuid=36cd7d9df10737999a92f9ce1395842d
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/bm-instances/8c77fa2039993ac9ac02ddcc5fc67fcd
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2Instance并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "chassisUuid": "463018b125d742e8acb3d6a5412eb674",
      "lastChassisUuid": "5facc3e540e3464daef9dc123aae9f2b",
      "gatewayUuid": "2cdd33f2d2f14b599965b2b351c77c10",
      "lastGatewayUuid": "e96b15632b2d4975ae4252a8d33b3904",
      "chassisOfferingUuid": "db5d18b6551e4af492bda6cef97045e3",
      "status": "Connected",
      "uuid": "f6898853cff24b2a85c388f4c676d1a7",
      "name": "BM-1",
      "description": "This is a BareMetal2 Instance.",
      "zoneUuid": "8f741ad043a54c98a9729c3871cfc985",
      "clusterUuid": "1bf322359f0e41668a67e119fc2184d1",
      "imageUuid": "17ddfe24cce247f2a27a13ad78b1536a",
      "rootVolumeUuid": "e1551175153c4d4f89edfccf85e15fbe",
      "platform": "Linux",
      "type": "baremetal2",
      "memorySize": 8.589934592E9,
      "cpuNum": 8.0,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "state": "Running"
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
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| provisionNic | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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



#### SDK示例

 Java SDK

```
QueryBareMetal2GatewayAction action = new QueryBareMetal2GatewayAction();
action.conditions = asList("uuid=089cc9f73e31367c8d3db89f736957b2");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2GatewayAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2GatewayAction action = QueryBareMetal2GatewayAction()
action.conditions = ["uuid=88779d1fce2138c28744a2ed1265df1d"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2GatewayAction.Result res = action.call()
```

---

### 修改弹性裸金属实例密码(ChangeBareMetal2InstancePassword)



#### API请求

 URLs

```
PUT /v1/baremetal2/bm-instances/{uuid}/action
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBareMetal2InstancePassword": {
    "username": "root",
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
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"changeBareMetal2InstancePassword":{"username":"root","password":"password"}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances/f2c1f0101aef32c782ddd6a09899d296/action
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| username | String | body(包含在**changeBareMetal2InstancePassword**结构中) | 用户名 |  | 4.0.0 |
| password | String | body(包含在**changeBareMetal2InstancePassword**结构中) | 密码 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "1c06589d9b39475d8da1488cedad433b",
    "lastChassisUuid": "381c287319f040d6bfda27f2e873c495",
    "gatewayUuid": "ee6e344efcac481f9fb135c83868f2a0",
    "lastGatewayUuid": "77f3d8f675ae4fc1b52ddb35e64743ef",
    "chassisOfferingUuid": "0799c5e4b9db480abf0072a74af99cbc",
    "status": "Connected",
    "uuid": "f615bc219c264801ae2d183071b55b44",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "f67ee2185540426495b410a3c8ea2ba9",
    "clusterUuid": "146f701449f8455f9d0ab375c86c1de4",
    "imageUuid": "9d8169d053c84ef5bee8f68225c95983",
    "rootVolumeUuid": "794df7c17cbf451eaa86ad3124a0f577",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8.589934592E9,
    "cpuNum": 8.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 4.0.0 |

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
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| provisionNic | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| interfaceName | String | 网卡名称 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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



#### SDK示例

 Java SDK

```
ChangeBareMetal2InstancePasswordAction action = new ChangeBareMetal2InstancePasswordAction();
action.uuid = "f2c1f0101aef32c782ddd6a09899d296";
action.username = "root";
action.password = "password";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBareMetal2InstancePasswordAction.Result res = action.call();
```

 Python SDK

```
ChangeBareMetal2InstancePasswordAction action = ChangeBareMetal2InstancePasswordAction()
action.uuid = "f2c1f0101aef32c782ddd6a09899d296"
action.username = "root"
action.password = "password"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBareMetal2InstancePasswordAction.Result res = action.call()
```

---

### 启动弹性裸金属实例(StartBareMetal2Instance)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/bm-instances/{uuid}/action
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "startBareMetal2Instance": {
    "clusterUuid": "5308459a6fbd35dba89956f7025e34e3",
    "gatewayUuid": "921a40b2a91a3189b70fb41e5c838d80",
    "chassisUuid": "93db25cb3e763d57b2ebfce5129434c1"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"startBareMetal2Instance":{"clusterUuid":"5308459a6fbd35dba89956f7025e34e3","gatewayUuid":"921a40b2a91a3189b70fb41e5c838d80","chassisUuid":"93db25cb3e763d57b2ebfce5129434c1"}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances/62f5e08b9d5f3c729a63d558d3eb023a/action
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| clusterUuid (可选) | String | body(包含在**startBareMetal2Instance**结构中) | 集群UUID |  | 4.0.0 |
| gatewayUuid (可选) | String | body(包含在**startBareMetal2Instance**结构中) | 裸金属网关节点UUID |  | 4.0.0 |
| chassisUuid (可选) | String | body(包含在**startBareMetal2Instance**结构中) | 裸金属节点UUID |  | 4.0.0 |
| chassisOfferingUuid (可选) | String | body | 裸金属节点规格UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "71589294e70d41408331e22b5dc61510",
    "lastChassisUuid": "aa3bd0a4fb3545d59df7febd62fcb22b",
    "gatewayUuid": "770bdbc4be1a4faf84756022fe434caf",
    "lastGatewayUuid": "b8ed1247500b405ead053babc8f1a5db",
    "chassisOfferingUuid": "bbeb7fddcf9943749ca1a96cddf16f15",
    "status": "Connected",
    "uuid": "a60f5e148e2f4a2ba06afc2785bf8a42",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "c40cb9c7e86a45c892b190cc9a356e7a",
    "clusterUuid": "8251f2399e7c4075969686fe22367b81",
    "imageUuid": "3e2afb0cc212448bb8f72ddaaa90d080",
    "rootVolumeUuid": "8dc4889a2d6748a5aaa17ebaa2cbca28",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8.589934592E9,
    "cpuNum": 8.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 4.0.0 |

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
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| provisionNic | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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



#### SDK示例

 Java SDK

```
StartBareMetal2InstanceAction action = new StartBareMetal2InstanceAction();
action.uuid = "62f5e08b9d5f3c729a63d558d3eb023a";
action.clusterUuid = "5308459a6fbd35dba89956f7025e34e3";
action.gatewayUuid = "921a40b2a91a3189b70fb41e5c838d80";
action.chassisUuid = "93db25cb3e763d57b2ebfce5129434c1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
StartBareMetal2InstanceAction.Result res = action.call();
```

 Python SDK

```
StartBareMetal2InstanceAction action = StartBareMetal2InstanceAction()
action.uuid = "62f5e08b9d5f3c729a63d558d3eb023a"
action.clusterUuid = "5308459a6fbd35dba89956f7025e34e3"
action.gatewayUuid = "921a40b2a91a3189b70fb41e5c838d80"
action.chassisUuid = "93db25cb3e763d57b2ebfce5129434c1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
StartBareMetal2InstanceAction.Result res = action.call()
```

---

### 重连弹性裸金属实例(ReconnectBareMetal2Instance)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/bm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectBareMetal2Instance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectBareMetal2Instance":{}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances/a84e99583ee53cfda312c5dc578e8f26/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "eec8c68bf7604e72838f648343d9964a",
    "lastChassisUuid": "ae05edc9fe9942bb9d3d8579d7369b4e",
    "gatewayUuid": "d9b1f4714b42423ca6a575823428eda9",
    "lastGatewayUuid": "4802704a191145b7bc47a76edca35bae",
    "chassisOfferingUuid": "d31fcd90e61b4554badc31eff3483432",
    "status": "Connected",
    "uuid": "0c6170f7bf9c40ca96e0f9c8922ea778",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "b672b1b8daa14672a3062977dbd6a9b4",
    "clusterUuid": "473e3067f9df4f678e5703614b95a33e",
    "imageUuid": "d987409f81464857a2b6980862d964de",
    "rootVolumeUuid": "db4f08d513bc49ac97939a80eb3e390b",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8.589934592E9,
    "cpuNum": 8.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 4.0.0 |

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
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| provisionNic | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNic] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #provisionNic

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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



#### SDK示例

 Java SDK

```
ReconnectBareMetal2InstanceAction action = new ReconnectBareMetal2InstanceAction();
action.uuid = "a84e99583ee53cfda312c5dc578e8f26";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReconnectBareMetal2InstanceAction.Result res = action.call();
```

 Python SDK

```
ReconnectBareMetal2InstanceAction action = ReconnectBareMetal2InstanceAction()
action.uuid = "a84e99583ee53cfda312c5dc578e8f26"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReconnectBareMetal2InstanceAction.Result res = action.call()
```

---

### 检查部署IP是否可用(CheckStaticProvisionIp)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/bm-instances/static/provision/ip/check
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "clusterUuid": "25f9e4033cc13338b813cc239347843b",
    "provisionIp": "10.99.0.3"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"clusterUuid":"25f9e4033cc13338b813cc239347843b","provisionIp":"10.99.0.3"}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances/static/provision/ip/check
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | body(包含在**params**结构中) | 集群UUID |  | 5.2.0 |
| provisionIp | String | body(包含在**params**结构中) | 部署IP |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



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
CheckStaticProvisionIpAction action = new CheckStaticProvisionIpAction();
action.clusterUuid = "25f9e4033cc13338b813cc239347843b";
action.provisionIp = "10.99.0.3";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckStaticProvisionIpAction.Result res = action.call();
```

 Python SDK

```
CheckStaticProvisionIpAction action = CheckStaticProvisionIpAction()
action.clusterUuid = "25f9e4033cc13338b813cc239347843b"
action.provisionIp = "10.99.0.3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckStaticProvisionIpAction.Result res = action.call()
```

---

### 通过弹性裸金属实例获取硬件信息(InspectBareMetal2ChassisByInstance)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/bm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "inspectBareMetal2ChassisByInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"inspectBareMetal2ChassisByInstance":{}}' http://localhost:8080/zstack/v1/baremetal2/bm-instances/d40144a84b1633e8b2aacd333a7105d3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "33ce10962f314b71be5b846cd7230af7",
    "name": "BM_CHASSIS",
    "description": "This is a bare metal chassis.",
    "zoneUuid": "d07b6968028a49e199373c51af1aca23",
    "clusterUuid": "3cb1198f2d964626ba1309a43d854610",
    "chassisOfferingUuid": "6f0ee825fd9a441885eebd70f0f9171c",
    "type": "IPMI",
    "state": "Enabled",
    "status": "Available",
    "powerStatus": "POWER_ON",
    "provisionType": "Remote",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |
| inventory | BareMetal2ChassisInventory | 详情参考[inventory] | 5.2.0 |

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
| zoneUuid | String | 区域UUID | 5.2.0 |
| clusterUuid | String | 集群UUID | 5.2.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 5.2.0 |
| type | String | 类型 | 5.2.0 |
| state | String | 启用状态 | 5.2.0 |
| status | String | 分配状态 | 5.2.0 |
| powerStatus | String | 电源状态 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |
| chassisNics | List | 详情参考[chassisNics] | 5.2.0 |
| chassisDisks | List | 详情参考[chassisDisks] | 5.2.0 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 5.2.0 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| chassisUuid | String | 裸金属节点UUID | 5.2.0 |
| mac | String | 网卡MAC | 5.2.0 |
| speed | String | 网卡速率 | 5.2.0 |
| isProvisionNic | Boolean | 是否为部署网卡 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| chassisUuid | String | 裸金属节点UUID | 5.2.0 |
| diskSize | Long | 磁盘空间(以字节为单位) | 5.2.0 |
| type | String | 磁盘类型 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| architecture | String | CPU架构 | 5.2.0 |
| cpuModelName | String | CPU型号 | 5.2.0 |
| cpuNum | Integer | CPU核数 | 5.2.0 |
| memorySize | Long | 内存容量 | 5.2.0 |
| bootMode | String | 启动模式 | 5.2.0 |
| state | String | 状态 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |



#### SDK示例

 Java SDK

```
InspectBareMetal2ChassisByInstanceAction action = new InspectBareMetal2ChassisByInstanceAction();
action.uuid = "d40144a84b1633e8b2aacd333a7105d3";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
InspectBareMetal2ChassisByInstanceAction.Result res = action.call();
```

 Python SDK

```
InspectBareMetal2ChassisByInstanceAction action = InspectBareMetal2ChassisByInstanceAction()
action.uuid = "d40144a84b1633e8b2aacd333a7105d3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
InspectBareMetal2ChassisByInstanceAction.Result res = action.call()
```

---

### 创建裸金属实例Bond配置(CreateBareMetal2Bonding)



#### API请求

 URLs

```
POST /v1/baremetal2/chassis/bond
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "chassisUuid": "a4fbbe7091973f5b94232054883f5237",
    "name": "bond0",
    "mode": 1.0,
    "slaves": "40:8d:5c:f7:8d:68,40:8d:5c:f7:8d:69"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"chassisUuid":"a4fbbe7091973f5b94232054883f5237","name":"bond0","mode":1.0,"slaves":"40:8d:5c:f7:8d:68,40:8d:5c:f7:8d:69"}}' http://localhost:8080/zstack/v1/baremetal2/chassis/bond
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisUuid | String | body(包含在**params**结构中) |  |  | 4.4.24 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.4.24 |
| mode | Integer | body(包含在**params**结构中) |  |  | 4.4.24 |
| slaves | String | body(包含在**params**结构中) |  |  | 4.4.24 |
| opts (可选) | String | body(包含在**params**结构中) |  |  | 4.4.24 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.24 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.24 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "f4eab1389d2a4cf49c8dfef456480c5a",
    "name": "bond0",
    "slaves": "40:8d:5c:f7:8d:60,40:8d:5c:f7:8d:61",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "uuid": "d5090788c5624c039857ddbd32467234"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.24 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.24 |
| inventory | BareMetal2BondingInventory | 详情参考[inventory] | 4.4.24 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.24 |
| description | String | 错误的概要描述 | 4.4.24 |
| details | String | 错误的详细信息 | 4.4.24 |
| elaboration | String | 保留字段，默认为null | 4.4.24 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.24 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.24 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| chassisUuid | String |  | 4.4.24 |
| name | String | 资源名称 | 4.4.24 |
| slaves | String |  | 4.4.24 |
| opts | String |  | 4.4.24 |
| mode | Integer |  | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |
| accountUuid | String | 账户UUID | 4.4.24 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |



#### SDK示例

 Java SDK

```
CreateBareMetal2BondingAction action = new CreateBareMetal2BondingAction();
action.chassisUuid = "a4fbbe7091973f5b94232054883f5237";
action.name = "bond0";
action.mode = 1.0;
action.slaves = "40:8d:5c:f7:8d:68,40:8d:5c:f7:8d:69";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBareMetal2BondingAction.Result res = action.call();
```

 Python SDK

```
CreateBareMetal2BondingAction action = CreateBareMetal2BondingAction()
action.chassisUuid = "a4fbbe7091973f5b94232054883f5237"
action.name = "bond0"
action.mode = 1.0
action.slaves = "40:8d:5c:f7:8d:68,40:8d:5c:f7:8d:69"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBareMetal2BondingAction.Result res = action.call()
```

---

### 清理裸金属实例Bond信息(CleanUpBareMetal2Bonding)



#### API请求

 URLs

```
PUT /v1/baremetal2/chassis/{chassisUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "cleanUpBareMetal2Bonding": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"cleanUpBareMetal2Bonding":{}}' http://localhost:8080/zstack/v1/baremetal2/chassis/696b73a0a9d03df58131f56f00bf4b4d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisUuid | String | body(包含在**params**结构中) |  |  | 4.4.24 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.24 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.24 |



#### API返回

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



#### SDK示例

 Java SDK

```
CleanUpBareMetal2BondingAction action = new CleanUpBareMetal2BondingAction();
action.chassisUuid = "696b73a0a9d03df58131f56f00bf4b4d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CleanUpBareMetal2BondingAction.Result res = action.call();
```

 Python SDK

```
CleanUpBareMetal2BondingAction action = CleanUpBareMetal2BondingAction()
action.chassisUuid = "696b73a0a9d03df58131f56f00bf4b4d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CleanUpBareMetal2BondingAction.Result res = action.call()
```

---

### 查询裸金属实例的bond网络配置(QueryBareMetal2Bonding)



#### API请求

 URLs

```
GET /v1/baremetal2/bonding
```

 Headers

```
Authorization: OAuth the-session-uuid
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2Bonding并按Tab键查看所有可查询字段以及可跨表查询的资源名。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/bonding?q=uuid=0250c111188b3c4f92efd998c89fb32d
```



#### API返回

 返回示例

```
{
  "inventories": [
    {
      "chassisUuid": "08e177d0c35648de8939515bf9d5adad",
      "name": "bond0",
      "slaves": "40:8d:5c:f7:8d:60,40:8d:5c:f7:8d:61",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "uuid": "7910f442d5c94e82963e17155567b6f3"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.24 |
| success | boolean |  | 4.4.24 |
| inventories | List | 详情参考[inventories] | 4.4.24 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.24 |
| description | String | 错误的概要描述 | 4.4.24 |
| details | String | 错误的详细信息 | 4.4.24 |
| elaboration | String | 保留字段，默认为null | 4.4.24 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.24 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.24 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| chassisUuid | String |  | 4.4.24 |
| name | String | 资源名称 | 4.4.24 |
| slaves | String |  | 4.4.24 |
| opts | String |  | 4.4.24 |
| mode | Integer |  | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |
| accountUuid | String | 账户UUID | 4.4.24 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |



#### SDK示例

 Java SDK

```
QueryBareMetal2BondingAction action = new QueryBareMetal2BondingAction();
action.conditions = asList("uuid=7a85935a77ff378bbd349f619f647b26");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2BondingAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2BondingAction action = QueryBareMetal2BondingAction()
action.conditions = ["uuid=cb72ba18b6f83cec99cbf2519694ad33"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2BondingAction.Result res = action.call()
```

---

### 查询Bond和实例网卡的关联(QueryBareMetal2BondingNicRef)



#### API请求

 URLs

```
GET /v1/baremetal2/bonding/nic/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2BondingNicRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/bonding/nic/refs?q=uuid=1ca709f9d1cf377b99b20f277e7c97f9
```



#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "8efce80a3b804b038d4cc7055e3eb162",
      "name": "BM_CHASSIS",
      "description": "This is a bare metal chassis.",
      "zoneUuid": "fc08d44db9ec493e8f14150a3bf4fe40",
      "clusterUuid": "06fe95935cd74d3bbb15c049e7333295",
      "chassisOfferingUuid": "aa98b259748448b992c58076910b7343",
      "type": "IPMI",
      "state": "Enabled",
      "status": "Available",
      "powerStatus": "POWER_ON",
      "provisionType": "Remote",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.24 |
| success | boolean |  | 4.4.24 |
| inventories | List | 详情参考[inventories] | 4.4.24 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.24 |
| description | String | 错误的概要描述 | 4.4.24 |
| details | String | 错误的详细信息 | 4.4.24 |
| elaboration | String | 保留字段，默认为null | 4.4.24 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.24 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.24 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |
| name | String | 资源名称 | 4.4.24 |
| description | String | 资源的详细描述 | 4.4.24 |
| zoneUuid | String | 区域UUID | 4.4.24 |
| clusterUuid | String | 集群UUID | 4.4.24 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.4.24 |
| type | String | 类型 | 4.4.24 |
| state | String | 启用状态 | 4.4.24 |
| status | String | 分配状态 | 4.4.24 |
| powerStatus | String | 电源状态 | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |
| chassisNics | List | 详情参考[chassisNics] | 4.4.24 |
| chassisDisks | List | 详情参考[chassisDisks] | 4.4.24 |
| chassisOffering | BareMetal2ChassisOfferingInventory | 详情参考[chassisOffering] | 4.4.24 |

 #chassisNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |
| chassisUuid | String | 裸金属节点UUID | 4.4.24 |
| mac | String | 网卡MAC | 4.4.24 |
| speed | String | 网卡速率 | 4.4.24 |
| isProvisionNic | Boolean | 是否为部署网卡 | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |

 #chassisDisks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |
| chassisUuid | String | 裸金属节点UUID | 4.4.24 |
| diskSize | Long | 磁盘空间(以字节为单位) | 4.4.24 |
| type | String | 磁盘类型 | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |

 #chassisOffering

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |
| name | String | 资源名称 | 4.4.24 |
| description | String | 资源的详细描述 | 4.4.24 |
| architecture | String | CPU架构 | 4.4.24 |
| cpuModelName | String | CPU型号 | 4.4.24 |
| cpuNum | Integer | CPU核数 | 4.4.24 |
| memorySize | Long | 内存容量 | 4.4.24 |
| bootMode | String | 启动模式 | 4.4.24 |
| state | String | 状态 | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |



#### SDK示例

 Java SDK

```
QueryBareMetal2BondingNicRefAction action = new QueryBareMetal2BondingNicRefAction();
action.conditions = asList("uuid=9c199dcc0a8e3f888e2e2979b9c68b5e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2BondingNicRefAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2BondingNicRefAction action = QueryBareMetal2BondingNicRefAction()
action.conditions = ["uuid=2dfe71bbf313315f825a52a17568fc71"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2BondingNicRefAction.Result res = action.call()
```

---

### 创建部署网络(CreateBareMetal2ProvisionNetwork)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/provision-networks
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "BM_PROVISION_NETWORK",
    "description": "This is a baremetal2 provision network.",
    "zoneUuid": "3391c3bf65fb34d0ae8ace100c28da77",
    "dhcpInterface": "eth0",
    "dhcpRangeStartIp": "192.168.0.100",
    "dhcpRangeEndIp": "192.168.0.200",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "192.168.0.1"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"BM_PROVISION_NETWORK","description":"This is a baremetal2 provision network.","zoneUuid":"3391c3bf65fb34d0ae8ace100c28da77","dhcpInterface":"eth0","dhcpRangeStartIp":"192.168.0.100","dhcpRangeEndIp":"192.168.0.200","dhcpRangeNetmask":"255.255.255.0","dhcpRangeGateway":"192.168.0.1"}}' http://localhost:8080/zstack/v1/baremetal2/provision-networks
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.0.0 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 4.0.0 |
| dhcpInterface | String | body(包含在**params**结构中) | DHCP监听网卡名 |  | 4.0.0 |
| dhcpRangeStartIp | String | body(包含在**params**结构中) | DHCP起始IP地址 |  | 4.0.0 |
| dhcpRangeEndIp | String | body(包含在**params**结构中) | DHCP终止IP地址 |  | 4.0.0 |
| dhcpRangeNetmask | String | body(包含在**params**结构中) | 子网掩码 |  | 4.0.0 |
| dhcpRangeGateway (可选) | String | body(包含在**params**结构中) | 网关地址 |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0adedb8acdba4a889a4679c0f2a3dccd",
    "zoneUuid": "dee0edff3afc42d988c54a3675f56617",
    "name": "BM_PROVISION_NETWORK",
    "description": "This is a bare metal provision network.",
    "dhcpInterface": "eth0",
    "dhcpRangeStartIp": "192.168.0.10",
    "dhcpRangeEndIp": "192.168.0.100",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "192.168.0.1",
    "dhcpRangeNetworkCidr": "192.168.0.10/24",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ProvisionNetworkInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| dhcpInterface | String | DHCP监听网卡 | 4.0.0 |
| dhcpRangeStartIp | String | DHCP起始IP地址 | 4.0.0 |
| dhcpRangeEndIp | String | DHCP终止IP地址 | 4.0.0 |
| dhcpRangeNetmask | String | 子网掩码 | 4.0.0 |
| dhcpRangeGateway | String | 网关地址 | 4.0.0 |
| dhcpRangeNetworkCidr | String | CIDR | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| attachedClusterUuids | List |  | 4.0.0 |



#### SDK示例

 Java SDK

```
CreateBareMetal2ProvisionNetworkAction action = new CreateBareMetal2ProvisionNetworkAction();
action.name = "BM_PROVISION_NETWORK";
action.description = "This is a baremetal2 provision network.";
action.zoneUuid = "3391c3bf65fb34d0ae8ace100c28da77";
action.dhcpInterface = "eth0";
action.dhcpRangeStartIp = "192.168.0.100";
action.dhcpRangeEndIp = "192.168.0.200";
action.dhcpRangeNetmask = "255.255.255.0";
action.dhcpRangeGateway = "192.168.0.1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBareMetal2ProvisionNetworkAction.Result res = action.call();
```

 Python SDK

```
CreateBareMetal2ProvisionNetworkAction action = CreateBareMetal2ProvisionNetworkAction()
action.name = "BM_PROVISION_NETWORK"
action.description = "This is a baremetal2 provision network."
action.zoneUuid = "3391c3bf65fb34d0ae8ace100c28da77"
action.dhcpInterface = "eth0"
action.dhcpRangeStartIp = "192.168.0.100"
action.dhcpRangeEndIp = "192.168.0.200"
action.dhcpRangeNetmask = "255.255.255.0"
action.dhcpRangeGateway = "192.168.0.1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBareMetal2ProvisionNetworkAction.Result res = action.call()
```

---

### 删除部署网络(DeleteBareMetal2ProvisionNetwork)



#### API请求

 URLs

```
DELETE zstack/v1/baremetal2/provision-networks/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal2/provision-networks/b3418be5bae83706b8864daa54f0a680
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
DeleteBareMetal2ProvisionNetworkAction action = new DeleteBareMetal2ProvisionNetworkAction();
action.uuid = "b3418be5bae83706b8864daa54f0a680";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteBareMetal2ProvisionNetworkAction.Result res = action.call();
```

 Python SDK

```
DeleteBareMetal2ProvisionNetworkAction action = DeleteBareMetal2ProvisionNetworkAction()
action.uuid = "b3418be5bae83706b8864daa54f0a680"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteBareMetal2ProvisionNetworkAction.Result res = action.call()
```

---

### 更新部署网络(UpdateBareMetal2ProvisionNetwork)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/provision-networks/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBareMetal2ProvisionNetwork": {
    "name": "NEW_BM_PROVISION_NETWORK",
    "description": "This is a new bare metal provision network.",
    "dhcpInterface": "ens0",
    "dhcpRangeStartIp": "10.0.0.100",
    "dhcpRangeEndIp": "10.0.0.200",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "10.0.0.1"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBareMetal2ProvisionNetwork":{"name":"NEW_BM_PROVISION_NETWORK","description":"This is a new bare metal provision network.","dhcpInterface":"ens0","dhcpRangeStartIp":"10.0.0.100","dhcpRangeEndIp":"10.0.0.200","dhcpRangeNetmask":"255.255.255.0","dhcpRangeGateway":"10.0.0.1"}}' http://localhost:8080/zstack/v1/baremetal2/provision-networks/597f524b0c70326d87f654a78f82b304/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| name (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | 资源名称 |  | 4.0.0 |
| description (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | 资源的详细描述 |  | 4.0.0 |
| dhcpInterface (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | DHCP监听网卡 |  | 4.0.0 |
| dhcpRangeStartIp (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | DHCP起始IP地址 |  | 4.0.0 |
| dhcpRangeEndIp (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | DHCP终止IP地址 |  | 4.0.0 |
| dhcpRangeNetmask (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | 子网掩码 |  | 4.0.0 |
| dhcpRangeGateway (可选) | String | body(包含在**updateBareMetal2ProvisionNetwork**结构中) | 网关地址 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "71a316af965a48949b55603ab30be6e8",
    "zoneUuid": "c052ae4b7fa447848f25e1c7fab543d2",
    "name": "BM_PROVISION_NETWORK",
    "description": "This is a bare metal provision network.",
    "dhcpInterface": "eth0",
    "dhcpRangeStartIp": "192.168.0.10",
    "dhcpRangeEndIp": "192.168.0.100",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "192.168.0.1",
    "dhcpRangeNetworkCidr": "192.168.0.10/24",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ProvisionNetworkInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| dhcpInterface | String | DHCP监听网卡 | 4.0.0 |
| dhcpRangeStartIp | String | DHCP起始IP地址 | 4.0.0 |
| dhcpRangeEndIp | String | DHCP终止IP地址 | 4.0.0 |
| dhcpRangeNetmask | String | 子网掩码 | 4.0.0 |
| dhcpRangeGateway | String | 网关地址 | 4.0.0 |
| dhcpRangeNetworkCidr | String | CIDR | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| attachedClusterUuids | List |  | 4.0.0 |



#### SDK示例

 Java SDK

```
UpdateBareMetal2ProvisionNetworkAction action = new UpdateBareMetal2ProvisionNetworkAction();
action.uuid = "597f524b0c70326d87f654a78f82b304";
action.name = "NEW_BM_PROVISION_NETWORK";
action.description = "This is a new bare metal provision network.";
action.dhcpInterface = "ens0";
action.dhcpRangeStartIp = "10.0.0.100";
action.dhcpRangeEndIp = "10.0.0.200";
action.dhcpRangeNetmask = "255.255.255.0";
action.dhcpRangeGateway = "10.0.0.1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBareMetal2ProvisionNetworkAction.Result res = action.call();
```

 Python SDK

```
UpdateBareMetal2ProvisionNetworkAction action = UpdateBareMetal2ProvisionNetworkAction()
action.uuid = "597f524b0c70326d87f654a78f82b304"
action.name = "NEW_BM_PROVISION_NETWORK"
action.description = "This is a new bare metal provision network."
action.dhcpInterface = "ens0"
action.dhcpRangeStartIp = "10.0.0.100"
action.dhcpRangeEndIp = "10.0.0.200"
action.dhcpRangeNetmask = "255.255.255.0"
action.dhcpRangeGateway = "10.0.0.1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBareMetal2ProvisionNetworkAction.Result res = action.call()
```

---

### 查询部署网络(QueryBareMetal2ProvisionNetwork)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/provision-networks
```


```
GET zstack/v1/baremetal2/provision-networks/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/provision-networks?q=uuid=b21a4853a2fe382081e2a3be5805e9a9
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/provision-networks/c8ce6d5ae2bf32f180334bf3a8a6cfd0
```



可查询字段

运行CLI命令行工具，输入QueryBareMetal2ProvisionNetwork并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "dc29aa53b5624dca835173938e8fee4b",
      "zoneUuid": "6f25b0e09f46488ba7c29d16a45a0257",
      "name": "BM_PROVISION_NETWORK",
      "description": "This is a bare metal provision network.",
      "dhcpInterface": "eth0",
      "dhcpRangeStartIp": "192.168.0.10",
      "dhcpRangeEndIp": "192.168.0.100",
      "dhcpRangeNetmask": "255.255.255.0",
      "dhcpRangeGateway": "192.168.0.1",
      "dhcpRangeNetworkCidr": "192.168.0.10/24",
      "state": "Enabled",
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
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| dhcpInterface | String | DHCP监听网卡 | 4.0.0 |
| dhcpRangeStartIp | String | DHCP起始IP地址 | 4.0.0 |
| dhcpRangeEndIp | String | DHCP终止IP地址 | 4.0.0 |
| dhcpRangeNetmask | String | 子网掩码 | 4.0.0 |
| dhcpRangeGateway | String | 网关地址 | 4.0.0 |
| dhcpRangeNetworkCidr | String | CIDR | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| attachedClusterUuids | List |  | 4.0.0 |



#### SDK示例

 Java SDK

```
QueryBareMetal2ProvisionNetworkAction action = new QueryBareMetal2ProvisionNetworkAction();
action.conditions = asList("uuid=51b899bda0df3484be1c6bc1fbba68de");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBareMetal2ProvisionNetworkAction.Result res = action.call();
```

 Python SDK

```
QueryBareMetal2ProvisionNetworkAction action = QueryBareMetal2ProvisionNetworkAction()
action.conditions = ["uuid=07e9ed20cfc13057adee51036dc1687e"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBareMetal2ProvisionNetworkAction.Result res = action.call()
```

---

### 更改部署网络启用状态(ChangeBareMetal2ProvisionNetworkState)



#### API请求

 URLs

```
PUT zstack/v1/baremetal2/provision-networks/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBareMetal2ProvisionNetworkState": {
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
-X PUT -d '{"changeBareMetal2ProvisionNetworkState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/baremetal2/provision-networks/9d2b61e0abba3dd5830fe13bde6fc935/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| stateEvent | String | body(包含在**changeBareMetal2ProvisionNetworkState**结构中) | 状态事件 | enable disable | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0f0a5bd7eaef49d2a4ddff9507afa4e8",
    "zoneUuid": "1d5a403dcfdb4b6fa581540579e5d5cb",
    "name": "BM_PROVISION_NETWORK",
    "description": "This is a bare metal provision network.",
    "dhcpInterface": "eth0",
    "dhcpRangeStartIp": "192.168.0.10",
    "dhcpRangeEndIp": "192.168.0.100",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "192.168.0.1",
    "dhcpRangeNetworkCidr": "192.168.0.10/24",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ProvisionNetworkInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| dhcpInterface | String | DHCP监听网卡 | 4.0.0 |
| dhcpRangeStartIp | String | DHCP起始IP地址 | 4.0.0 |
| dhcpRangeEndIp | String | DHCP终止IP地址 | 4.0.0 |
| dhcpRangeNetmask | String | 子网掩码 | 4.0.0 |
| dhcpRangeGateway | String | 网关地址 | 4.0.0 |
| dhcpRangeNetworkCidr | String | CIDR | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| attachedClusterUuids | List |  | 4.0.0 |



#### SDK示例

 Java SDK

```
ChangeBareMetal2ProvisionNetworkStateAction action = new ChangeBareMetal2ProvisionNetworkStateAction();
action.uuid = "9d2b61e0abba3dd5830fe13bde6fc935";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBareMetal2ProvisionNetworkStateAction.Result res = action.call();
```

 Python SDK

```
ChangeBareMetal2ProvisionNetworkStateAction action = ChangeBareMetal2ProvisionNetworkStateAction()
action.uuid = "9d2b61e0abba3dd5830fe13bde6fc935"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBareMetal2ProvisionNetworkStateAction.Result res = action.call()
```

---

### 将部署网络加载到弹性裸金属集群(AttachBareMetal2ProvisionNetworkToCluster)



#### API请求

 URLs

```
POST zstack/v1/baremetal2/clusters/{clusterUuid}/provision-networks/{networkUuid}
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
http://localhost:8080/zstack/v1/baremetal2/clusters/2ed064d2addf3644bdd69aaa187c0ca9/provision-networks/ce03631365e0340bbd99a0092508abff
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | url | 集群UUID |  | 4.0.0 |
| networkUuid | String | url | 裸金属部署网络UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bc86a5d650424baaab9f875bfe3337bd",
    "zoneUuid": "3f7405e07ab54cd9bdcfa6008c398be1",
    "name": "BM_PROVISION_NETWORK",
    "description": "This is a bare metal provision network.",
    "dhcpInterface": "eth0",
    "dhcpRangeStartIp": "192.168.0.10",
    "dhcpRangeEndIp": "192.168.0.100",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "192.168.0.1",
    "dhcpRangeNetworkCidr": "192.168.0.10/24",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ProvisionNetworkInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| dhcpInterface | String | DHCP监听网卡 | 4.0.0 |
| dhcpRangeStartIp | String | DHCP起始IP地址 | 4.0.0 |
| dhcpRangeEndIp | String | DHCP终止IP地址 | 4.0.0 |
| dhcpRangeNetmask | String | 子网掩码 | 4.0.0 |
| dhcpRangeGateway | String | 网关地址 | 4.0.0 |
| dhcpRangeNetworkCidr | String | CIDR | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| attachedClusterUuids | List |  | 4.0.0 |



#### SDK示例

 Java SDK

```
AttachBareMetal2ProvisionNetworkToClusterAction action = new AttachBareMetal2ProvisionNetworkToClusterAction();
action.clusterUuid = "2ed064d2addf3644bdd69aaa187c0ca9";
action.networkUuid = "ce03631365e0340bbd99a0092508abff";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachBareMetal2ProvisionNetworkToClusterAction.Result res = action.call();
```

 Python SDK

```
AttachBareMetal2ProvisionNetworkToClusterAction action = AttachBareMetal2ProvisionNetworkToClusterAction()
action.clusterUuid = "2ed064d2addf3644bdd69aaa187c0ca9"
action.networkUuid = "ce03631365e0340bbd99a0092508abff"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachBareMetal2ProvisionNetworkToClusterAction.Result res = action.call()
```

---

### 将部署网络从弹性裸金属集群卸载(DetachBareMetal2ProvisionNetworkFromCluster)



#### API请求

 URLs

```
DELETE zstack/v1/baremetal2/clusters/{clusterUuid}/provision-networks/{networkUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal2/clusters/06c9bd8a09e83fb192e26b774212a4d5/provision-networks/3800bd5ce801397eb9a4a7a0a9f169f3
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | url | 集群UUID |  | 4.0.0 |
| networkUuid | String | url | 裸金属部署网络UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "36c2f908644340128807eb1e55f59858",
    "zoneUuid": "a388561312514f43b10f8a335bfe3403",
    "name": "BM_PROVISION_NETWORK",
    "description": "This is a bare metal provision network.",
    "dhcpInterface": "eth0",
    "dhcpRangeStartIp": "192.168.0.10",
    "dhcpRangeEndIp": "192.168.0.100",
    "dhcpRangeNetmask": "255.255.255.0",
    "dhcpRangeGateway": "192.168.0.1",
    "dhcpRangeNetworkCidr": "192.168.0.10/24",
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | BareMetal2ProvisionNetworkInventory | 详情参考[inventory] | 4.0.0 |

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
| zoneUuid | String | 区域UUID | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| dhcpInterface | String | DHCP监听网卡 | 4.0.0 |
| dhcpRangeStartIp | String | DHCP起始IP地址 | 4.0.0 |
| dhcpRangeEndIp | String | DHCP终止IP地址 | 4.0.0 |
| dhcpRangeNetmask | String | 子网掩码 | 4.0.0 |
| dhcpRangeGateway | String | 网关地址 | 4.0.0 |
| dhcpRangeNetworkCidr | String | CIDR | 4.0.0 |
| state | String | 状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| attachedClusterUuids | List |  | 4.0.0 |



#### SDK示例

 Java SDK

```
DetachBareMetal2ProvisionNetworkFromClusterAction action = new DetachBareMetal2ProvisionNetworkFromClusterAction();
action.clusterUuid = "06c9bd8a09e83fb192e26b774212a4d5";
action.networkUuid = "3800bd5ce801397eb9a4a7a0a9f169f3";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachBareMetal2ProvisionNetworkFromClusterAction.Result res = action.call();
```

 Python SDK

```
DetachBareMetal2ProvisionNetworkFromClusterAction action = DetachBareMetal2ProvisionNetworkFromClusterAction()
action.clusterUuid = "06c9bd8a09e83fb192e26b774212a4d5"
action.networkUuid = "3800bd5ce801397eb9a4a7a0a9f169f3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachBareMetal2ProvisionNetworkFromClusterAction.Result res = action.call()
```

---

### 获取部署网络IP地址可用量(GetBareMetal2ProvisionNetworkIpAddressCapacity)



#### API请求

 URLs

```
GET zstack/v1/baremetal2/provision-networks/ip-capacity
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal2/provision-networks/ip-capacity?networkUuids=f9c4c95cf7f43f6eaf7af5e7b3715c60
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| networkUuids | List | query | 裸金属部署网络UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



#### API返回

 返回示例

```
{
  "capacityData": [
    {
      "networkUuid": "da4ac0c888fc34b399a343140780a627",
      "totalCapacity": 100.0,
      "availableCapacity": 50.0,
      "gatewayUsedIpNumber": 10.0,
      "instanceUsedIpNumber": 40.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 获取成功 | 4.0.0 |
| capacityData | List | 详情参考[capacityData] | 4.0.0 |
| error | ErrorCode | 详情参考[error] | 4.0.0 |

 #capacityData

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| totalCapacity | long | IP总量 | 4.0.0 |
| availableCapacity | long | IP可用量 | 4.0.0 |
| gatewayUsedIpNumber | long | 裸金属网关节点占用IP数量 | 4.0.0 |
| instanceUsedIpNumber | long | 裸金属实例占用IP数量 | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |



#### SDK示例

 Java SDK

```
GetBareMetal2ProvisionNetworkIpAddressCapacityAction action = new GetBareMetal2ProvisionNetworkIpAddressCapacityAction();
action.networkUuids = asList("f9c4c95cf7f43f6eaf7af5e7b3715c60");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetBareMetal2ProvisionNetworkIpAddressCapacityAction.Result res = action.call();
```

 Python SDK

```
GetBareMetal2ProvisionNetworkIpAddressCapacityAction action = GetBareMetal2ProvisionNetworkIpAddressCapacityAction()
action.networkUuids = [f9c4c95cf7f43f6eaf7af5e7b3715c60]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetBareMetal2ProvisionNetworkIpAddressCapacityAction.Result res = action.call()
```

---

### 从实例备份数据新建弹性裸金属实例(CreateBareMetal2InstanceFromVmBackup)



#### API请求

 URLs

```
POST zstack/v1/baremetal2-instance/from/vm-backup/{groupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "New-BareMetal-Instance",
    "description": "This is a bare metal instance created from vm backup.",
    "zoneUuid": "ab593cddece13e78b2a1b7745870eb87",
    "clusterUuid": "6d775d44d2153da9956f3173b0138646",
    "gatewayUuid": "78da4dbcec473f45b002064f463a0d09",
    "chassisUuid": "3b099920323a3b539df62af1af86d47c",
    "chassisDiskUuid": "f705f9c189ab32bf9ad97255fe8fab55",
    "primaryStorageUuidForRootVolume": "24c91178649f342283e4d7d7dfb3fe27",
    "rootVolumeSystemTags": [
      "tag1",
      "tag2"
    ],
    "gatewayAllocatorStrategy": "DefaultAllocatorStrategy"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"New-BareMetal-Instance","description":"This is a bare metal instance created from vm backup.","zoneUuid":"ab593cddece13e78b2a1b7745870eb87","clusterUuid":"6d775d44d2153da9956f3173b0138646","gatewayUuid":"78da4dbcec473f45b002064f463a0d09","chassisUuid":"3b099920323a3b539df62af1af86d47c","chassisDiskUuid":"f705f9c189ab32bf9ad97255fe8fab55","primaryStorageUuidForRootVolume":"24c91178649f342283e4d7d7dfb3fe27","rootVolumeSystemTags":["tag1","tag2"],"gatewayAllocatorStrategy":"DefaultAllocatorStrategy"}}' \
http://localhost:8080/zstack/v1/baremetal2-instance/from/vm-backup/a4cdc1a10d7d3e9397c01e0136bc1eab
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.5.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.5.6 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 5.5.6 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 5.5.6 |
| gatewayUuid (可选) | String | body(包含在**params**结构中) | 裸金属网关节点UUID |  | 5.5.6 |
| groupUuid | String | url | 备份数据组UUID |  | 5.5.6 |
| chassisUuid (可选) | String | body(包含在**params**结构中) | 裸金属节点UUID |  | 5.5.6 |
| chassisOfferingUuid (可选) | String | body(包含在**params**结构中) | 裸金属规格UUID说明: 对于参数chassisUuid和chassisOfferingUuid，两者至少要设置一个。 |  | 5.5.6 |
| chassisDiskUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.5.6 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根云盘主存储 |  | 5.5.6 |
| primaryStorageUuidForDataVolume (可选) | String | body(包含在**params**结构中) | 数据云盘主存储 |  | 5.5.6 |
| dataDiskOfferingUuids (可选) | List | body(包含在**params**结构中) | 数据云盘规格UUID |  | 5.5.6 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 根云盘系统标签 |  | 5.5.6 |
| dataVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 数据云盘系统标签 |  | 5.5.6 |
| gatewayAllocatorStrategy (可选) | String | body(包含在**params**结构中) | 裸金属网关节点分配策略 |  | 5.5.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.5.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.5.6 |
| systemTags (可选) | List | body | 系统标签 |  | 5.5.6 |
| userTags (可选) | List | body | 用户标签 |  | 5.5.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "81554a6ff599416b9e52ced2af50f6e9",
    "lastChassisUuid": "59fd7178455f479da6bc83de953898ea",
    "gatewayUuid": "8fbe18d4be76461383b540611df22b7e",
    "lastGatewayUuid": "d492e5b96f5a4fa88cb0ac304902f5c2",
    "chassisOfferingUuid": "6ef976116b4346de88d4e70f2ff8498c",
    "status": "Connected",
    "provisionType": "Remote",
    "agentVersion": "2.0.0",
    "isLatestAgent": true,
    "uuid": "3261d308bf1b4295a8bbdc1c52b08e33",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "d5849358f65c40518904cdbaba78b821",
    "clusterUuid": "ce69c134f6344119af9faeaf6f0a735a",
    "imageUuid": "9da74193c8b5413d890955fcaef694cf",
    "rootVolumeUuid": "3a29abbc54c040f597469300200aaa7b",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8589934592,
    "cpuNum": 8,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.5.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.5.6 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 5.5.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| provisionType | String |  | 4.7.13 |
| agentVersion | String |  | 4.7.13 |
| isLatestAgent | boolean |  | 4.7.13 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.7.13 |
| lastHostUuid | String |  | 4.7.13 |
| instanceOfferingUuid | String | 计算规格UUID | 4.7.13 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| architecture | String |  | 4.7.13 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| allocatorStrategy | String |  | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| guestOsType | String |  | 4.7.13 |
| provisionNics | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNics] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.7.13 |

 #provisionNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.20 |
| description | String | 错误的概要描述 | 5.3.20 |
| details | String | 错误的详细信息 | 5.3.20 |
| elaboration | String | 保留字段，默认为null | 5.3.20 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.20 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.20 |



#### SDK示例

 Java SDK

```
CreateBareMetal2InstanceFromVmBackupAction action = new CreateBareMetal2InstanceFromVmBackupAction();
action.name = "New-BareMetal-Instance";
action.description = "This is a bare metal instance created from vm backup.";
action.zoneUuid = "ab593cddece13e78b2a1b7745870eb87";
action.clusterUuid = "6d775d44d2153da9956f3173b0138646";
action.gatewayUuid = "78da4dbcec473f45b002064f463a0d09";
action.groupUuid = "a4cdc1a10d7d3e9397c01e0136bc1eab";
action.chassisUuid = "3b099920323a3b539df62af1af86d47c";
action.chassisDiskUuid = "f705f9c189ab32bf9ad97255fe8fab55";
action.primaryStorageUuidForRootVolume = "24c91178649f342283e4d7d7dfb3fe27";
action.rootVolumeSystemTags = asList("tag1","tag2");
action.gatewayAllocatorStrategy = "DefaultAllocatorStrategy";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBareMetal2InstanceFromVmBackupAction.Result res = action.call();
```

 Python SDK

```
CreateBareMetal2InstanceFromVmBackupAction action = CreateBareMetal2InstanceFromVmBackupAction()
action.name = "New-BareMetal-Instance"
action.description = "This is a bare metal instance created from vm backup."
action.zoneUuid = "ab593cddece13e78b2a1b7745870eb87"
action.clusterUuid = "6d775d44d2153da9956f3173b0138646"
action.gatewayUuid = "78da4dbcec473f45b002064f463a0d09"
action.groupUuid = "a4cdc1a10d7d3e9397c01e0136bc1eab"
action.chassisUuid = "3b099920323a3b539df62af1af86d47c"
action.chassisDiskUuid = "f705f9c189ab32bf9ad97255fe8fab55"
action.primaryStorageUuidForRootVolume = "24c91178649f342283e4d7d7dfb3fe27"
action.rootVolumeSystemTags = [tag1, tag2]
action.gatewayAllocatorStrategy = "DefaultAllocatorStrategy"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBareMetal2InstanceFromVmBackupAction.Result res = action.call()
```

---

### 从云盘备份数据新建弹性裸金属实例(CreateBareMetal2InstanceFromVolumeBackup)



#### API请求

 URLs

```
POST zstack/v1/baremetal2-instance/from/volume-backup/{backupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "New-BareMetal-Instance",
    "description": "This is a bare metal instance created from volume backup.",
    "zoneUuid": "a6bd3e3415303e0ba10093587062da90",
    "clusterUuid": "fbbb8afe94e73e6384eb42806a81bbfa",
    "gatewayUuid": "d1cda3e4e0453703a8c1743e570680ee",
    "chassisUuid": "c40496c747af3710aec065a4a993c0a0",
    "chassisDiskUuid": "17e8555e857b38cebe935db9af3f2df6",
    "primaryStorageUuidForRootVolume": "2d21e7bd7c273be4bc630f15aa82e708",
    "rootVolumeSystemTags": [
      "tag1",
      "tag2"
    ],
    "gatewayAllocatorStrategy": "DefaultAllocatorStrategy"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"New-BareMetal-Instance","description":"This is a bare metal instance created from volume backup.","zoneUuid":"a6bd3e3415303e0ba10093587062da90","clusterUuid":"fbbb8afe94e73e6384eb42806a81bbfa","gatewayUuid":"d1cda3e4e0453703a8c1743e570680ee","chassisUuid":"c40496c747af3710aec065a4a993c0a0","chassisDiskUuid":"17e8555e857b38cebe935db9af3f2df6","primaryStorageUuidForRootVolume":"2d21e7bd7c273be4bc630f15aa82e708","rootVolumeSystemTags":["tag1","tag2"],"gatewayAllocatorStrategy":"DefaultAllocatorStrategy"}}' \
http://localhost:8080/zstack/v1/baremetal2-instance/from/volume-backup/03a77b5d079a3d1da607e6fcca155a67
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.5.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.5.6 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 5.5.6 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 5.5.6 |
| gatewayUuid (可选) | String | body(包含在**params**结构中) | 裸金属网关节点UUID |  | 5.5.6 |
| backupUuid | String | url | 备份数据UUID |  | 5.5.6 |
| chassisUuid (可选) | String | body(包含在**params**结构中) | 裸金属节点UUID |  | 5.5.6 |
| chassisOfferingUuid (可选) | String | body(包含在**params**结构中) | 裸金属规格UUID说明: 对于参数chassisUuid和chassisOfferingUuid，两者至少要设置一个。 |  | 5.5.6 |
| chassisDiskUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.5.6 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根云盘主存储 |  | 5.5.6 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 根云盘系统标签 |  | 5.5.6 |
| gatewayAllocatorStrategy (可选) | String | body(包含在**params**结构中) | 裸金属网关节点分配策略 |  | 5.5.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.5.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.5.6 |
| systemTags (可选) | List | body | 系统标签 |  | 5.5.6 |
| userTags (可选) | List | body | 用户标签 |  | 5.5.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "chassisUuid": "81f62f9cd29e4a6f9b30e7acb5f37f2a",
    "lastChassisUuid": "aa573d1305ea427bbffc35ea64bfe644",
    "gatewayUuid": "f8d24330e04c42749fb415a68a4826a8",
    "lastGatewayUuid": "bc826d08dba54bae9b85fcaa1e35591f",
    "chassisOfferingUuid": "7ad393f46f6e4794ada11efbc22ec5b2",
    "status": "Connected",
    "provisionType": "Remote",
    "agentVersion": "2.0.0",
    "isLatestAgent": true,
    "uuid": "69dabbb90a6f4aa889c947a2107cfbdd",
    "name": "BM-1",
    "description": "This is a BareMetal2 Instance.",
    "zoneUuid": "50a7b341788b41f086bd92d51691ad2d",
    "clusterUuid": "8086e39efdec45b8a9e2ed6738b6609f",
    "imageUuid": "66516c70956642a189420900a33d3aeb",
    "rootVolumeUuid": "0f1c76cbb51a481e9a978fad78b437b4",
    "platform": "Linux",
    "type": "baremetal2",
    "memorySize": 8589934592,
    "cpuNum": 8,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.5.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.5.6 |
| inventory | BareMetal2InstanceInventory | 详情参考[inventory] | 5.5.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| chassisUuid | String | 裸金属节点UUID | 4.0.0 |
| lastChassisUuid | String | 上次所在裸金属节点UUID | 4.0.0 |
| gatewayUuid | String | 裸金属网关节点UUID | 4.0.0 |
| lastGatewayUuid | String | 上次所在裸金属网关节点UUID | 4.0.0 |
| chassisOfferingUuid | String | 裸金属节点规格UUID | 4.0.0 |
| gatewayAllocatorStrategy | String | 裸金属网关节点分配策略 | 4.0.0 |
| status | String | 连接状态 | 4.0.0 |
| provisionType | String |  | 4.7.13 |
| agentVersion | String |  | 4.7.13 |
| isLatestAgent | boolean |  | 4.7.13 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.7.13 |
| lastHostUuid | String |  | 4.7.13 |
| instanceOfferingUuid | String | 计算规格UUID | 4.7.13 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String | 平台类型 | 4.0.0 |
| architecture | String |  | 4.7.13 |
| defaultL3NetworkUuid | String | 默认网络UUID | 4.0.0 |
| type | String | 类型 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| memorySize | Long | 内存容量 | 4.0.0 |
| cpuNum | Integer | CPU核数 | 4.0.0 |
| cpuSpeed | Long | CPU速率 | 4.0.0 |
| allocatorStrategy | String |  | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String | 运行状态 | 4.0.0 |
| guestOsType | String |  | 4.7.13 |
| provisionNics | BareMetal2InstanceProvisionNicInventory | 详情参考[provisionNics] | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.7.13 |

 #provisionNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| networkUuid | String | 裸金属部署网络UUID | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| metadata | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

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

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.20 |
| description | String | 错误的概要描述 | 5.3.20 |
| details | String | 错误的详细信息 | 5.3.20 |
| elaboration | String | 保留字段，默认为null | 5.3.20 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.20 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.20 |



#### SDK示例

 Java SDK

```
CreateBareMetal2InstanceFromVolumeBackupAction action = new CreateBareMetal2InstanceFromVolumeBackupAction();
action.name = "New-BareMetal-Instance";
action.description = "This is a bare metal instance created from volume backup.";
action.zoneUuid = "a6bd3e3415303e0ba10093587062da90";
action.clusterUuid = "fbbb8afe94e73e6384eb42806a81bbfa";
action.gatewayUuid = "d1cda3e4e0453703a8c1743e570680ee";
action.backupUuid = "03a77b5d079a3d1da607e6fcca155a67";
action.chassisUuid = "c40496c747af3710aec065a4a993c0a0";
action.chassisDiskUuid = "17e8555e857b38cebe935db9af3f2df6";
action.primaryStorageUuidForRootVolume = "2d21e7bd7c273be4bc630f15aa82e708";
action.rootVolumeSystemTags = asList("tag1","tag2");
action.gatewayAllocatorStrategy = "DefaultAllocatorStrategy";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBareMetal2InstanceFromVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
CreateBareMetal2InstanceFromVolumeBackupAction action = CreateBareMetal2InstanceFromVolumeBackupAction()
action.name = "New-BareMetal-Instance"
action.description = "This is a bare metal instance created from volume backup."
action.zoneUuid = "a6bd3e3415303e0ba10093587062da90"
action.clusterUuid = "fbbb8afe94e73e6384eb42806a81bbfa"
action.gatewayUuid = "d1cda3e4e0453703a8c1743e570680ee"
action.backupUuid = "03a77b5d079a3d1da607e6fcca155a67"
action.chassisUuid = "c40496c747af3710aec065a4a993c0a0"
action.chassisDiskUuid = "17e8555e857b38cebe935db9af3f2df6"
action.primaryStorageUuidForRootVolume = "2d21e7bd7c273be4bc630f15aa82e708"
action.rootVolumeSystemTags = [tag1, tag2]
action.gatewayAllocatorStrategy = "DefaultAllocatorStrategy"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBareMetal2InstanceFromVolumeBackupAction.Result res = action.call()
```
