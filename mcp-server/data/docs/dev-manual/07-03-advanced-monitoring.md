# 高级监控服务器相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.3.html*

---

## 高级监控服务器相关接口

---

## 创建高级监控服务器 (CreateObservabilityServer)



### API请求

 URLs

```
POST zstack/v1/observability-servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "obs-1",     "observabilityServerOfferingUuid": "83475c2834f83dd59ccf8741787d800e",     "description": "desc",     "zoneUuid": "0f33fd3eee6a3b61abce2de06cb1dc24",     "clusterUuid": "8a47ef8b40e33be8880d24f496cceaf6",     "hostUuid": "b009ff2ecfe334e5b9dae2501af8c612",     "primaryStorageUuidForRootVolume": "137d4d95aded3f09a133fb9fd6197349"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"obs-1","observabilityServerOfferingUuid":"83475c2834f83dd59ccf8741787d800e","description":"desc","zoneUuid":"0f33fd3eee6a3b61abce2de06cb1dc24","clusterUuid":"8a47ef8b40e33be8880d24f496cceaf6","hostUuid":"b009ff2ecfe334e5b9dae2501af8c612","primaryStorageUuidForRootVolume":"137d4d95aded3f09a133fb9fd6197349"}}' \ http://localhost:8080/zstack/v1/observability-servers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.3.28 |
| observabilityServerOfferingUuid | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.3.28 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 5.3.28 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 5.3.28 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 5.3.28 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) |  |  | 5.3.28 |
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
| inventory | VmInstanceInventory | 详情参考[inventory] | 5.3.28 |

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
| zoneUuid | String | 区域UUID | 5.3.28 |
| clusterUuid | String | 集群UUID | 5.3.28 |
| imageUuid | String | 镜像UUID | 5.3.28 |
| hostUuid | String | 物理机UUID | 5.3.28 |
| lastHostUuid | String |  | 5.3.28 |
| instanceOfferingUuid | String | 计算规格UUID | 5.3.28 |
| rootVolumeUuid | String | 根云盘UUID | 5.3.28 |
| platform | String |  | 5.3.28 |
| architecture | String |  | 5.3.28 |
| defaultL3NetworkUuid | String |  | 5.3.28 |
| type | String |  | 5.3.28 |
| hypervisorType | String |  | 5.3.28 |
| memorySize | Long |  | 5.3.28 |
| reservedMemorySize | Long |  | 5.3.28 |
| cpuNum | Integer |  | 5.3.28 |
| cpuSpeed | Long |  | 5.3.28 |
| allocatorStrategy | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| state | String |  | 5.3.28 |
| guestOsType | String |  | 5.3.28 |
| vmNics | List | 详情参考[vmNics] | 5.3.28 |
| allVolumes | List | 详情参考[allVolumes] | 5.3.28 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.3.28 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| l3NetworkUuid | String | 三层网络UUID | 5.3.28 |
| ip | String |  | 5.3.28 |
| mac | String |  | 5.3.28 |
| hypervisorType | String |  | 5.3.28 |
| netmask | String |  | 5.3.28 |
| gateway | String |  | 5.3.28 |
| metaData | String |  | 5.3.28 |
| ipVersion | Integer |  | 5.3.28 |
| driverType | String |  | 5.3.28 |
| internalName | String |  | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| type | String |  | 5.3.28 |
| state | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| usedIps | List | 详情参考[usedIps] | 5.3.28 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| ipRangeUuid | String | IP段UUID | 5.3.28 |
| l3NetworkUuid | String | 三层网络UUID | 5.3.28 |
| ipVersion | Integer |  | 5.3.28 |
| ip | String |  | 5.3.28 |
| netmask | String |  | 5.3.28 |
| gateway | String |  | 5.3.28 |
| usedFor | String |  | 5.3.28 |
| ipInLong | long |  | 5.3.28 |
| ipInBinary | byte[] |  | 5.3.28 |
| vmNicUuid | String | 云主机网卡UUID | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| primaryStorageUuid | String | 主存储UUID | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| diskOfferingUuid | String | 云盘规格UUID | 5.3.28 |
| rootImageUuid | String |  | 5.3.28 |
| installPath | String |  | 5.3.28 |
| type | String |  | 5.3.28 |
| format | String |  | 5.3.28 |
| size | Long |  | 5.3.28 |
| actualSize | Long |  | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| state | String |  | 5.3.28 |
| status | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| isShareable | Boolean |  | 5.3.28 |
| volumeQos | String |  | 5.3.28 |
| lastDetachDate | Timestamp |  | 5.3.28 |
| lastVmInstanceUuid | String |  | 5.3.28 |
| lastAttachDate | Timestamp |  | 5.3.28 |
| protocol | String |  | 5.3.28 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| isoUuid | String |  | 5.3.28 |
| isoInstallPath | String |  | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| protocol | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |



### SDK示例

 Java SDK

```
CreateObservabilityServerAction action = new CreateObservabilityServerAction(); action.name = "obs-1"; action.observabilityServerOfferingUuid = "83475c2834f83dd59ccf8741787d800e"; action.description = "desc"; action.zoneUuid = "0f33fd3eee6a3b61abce2de06cb1dc24"; action.clusterUuid = "8a47ef8b40e33be8880d24f496cceaf6"; action.hostUuid = "b009ff2ecfe334e5b9dae2501af8c612"; action.primaryStorageUuidForRootVolume = "137d4d95aded3f09a133fb9fd6197349"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateObservabilityServerAction.Result res = action.call();
```

 Python SDK

```
CreateObservabilityServerAction action = CreateObservabilityServerAction() action.name = "obs-1" action.observabilityServerOfferingUuid = "83475c2834f83dd59ccf8741787d800e" action.description = "desc" action.zoneUuid = "0f33fd3eee6a3b61abce2de06cb1dc24" action.clusterUuid = "8a47ef8b40e33be8880d24f496cceaf6" action.hostUuid = "b009ff2ecfe334e5b9dae2501af8c612" action.primaryStorageUuidForRootVolume = "137d4d95aded3f09a133fb9fd6197349" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateObservabilityServerAction.Result res = action.call()
```

---

## 高级监控服务器绑定服务 (AttachServiceToObservabilityServer)



### API请求

 URLs

```
POST zstack/v1/observability-server/{observabilityServerUuid}/service
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "serviceType": "loadBalancer",     "serviceUuid": "50b12612d2b4318193c2e040d98e8f7b"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"serviceType":"loadBalancer","serviceUuid":"50b12612d2b4318193c2e040d98e8f7b"}}' \ http://localhost:8080/zstack/v1/observability-server/3e38d4c1adb73203b35120914b12ec61/service
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| observabilityServerUuid | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| serviceType | String | body(包含在**params**结构中) |  | loadBalancer | 5.3.28 |
| serviceUuid | String | body(包含在**params**结构中) |  |  | 5.3.28 |
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
| inventory | ObservabilityServerVmInventory | 详情参考[inventory] | 5.3.28 |

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
| publicNetworkUuid | String |  | 5.3.28 |
| applianceVmType | String |  | 5.3.28 |
| managementNetworkUuid | String |  | 5.3.28 |
| defaultRouteL3NetworkUuid | String |  | 5.3.28 |
| status | String |  | 5.3.28 |
| agentPort | Integer |  | 5.3.28 |
| haStatus | String |  | 5.3.28 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| zoneUuid | String | 区域UUID | 5.3.28 |
| clusterUuid | String | 集群UUID | 5.3.28 |
| imageUuid | String | 镜像UUID | 5.3.28 |
| hostUuid | String | 物理机UUID | 5.3.28 |
| lastHostUuid | String |  | 5.3.28 |
| instanceOfferingUuid | String | 计算规格UUID | 5.3.28 |
| rootVolumeUuid | String | 根云盘UUID | 5.3.28 |
| platform | String |  | 5.3.28 |
| architecture | String |  | 5.3.28 |
| defaultL3NetworkUuid | String |  | 5.3.28 |
| type | String |  | 5.3.28 |
| hypervisorType | String |  | 5.3.28 |
| memorySize | Long |  | 5.3.28 |
| reservedMemorySize | Long |  | 5.3.28 |
| cpuNum | Integer |  | 5.3.28 |
| cpuSpeed | Long |  | 5.3.28 |
| allocatorStrategy | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| state | String |  | 5.3.28 |
| guestOsType | String |  | 5.3.28 |
| vmNics | List | 详情参考[vmNics] | 5.3.28 |
| allVolumes | List | 详情参考[allVolumes] | 5.3.28 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.3.28 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| l3NetworkUuid | String | 三层网络UUID | 5.3.28 |
| ip | String |  | 5.3.28 |
| mac | String |  | 5.3.28 |
| hypervisorType | String |  | 5.3.28 |
| netmask | String |  | 5.3.28 |
| gateway | String |  | 5.3.28 |
| metaData | String |  | 5.3.28 |
| ipVersion | Integer |  | 5.3.28 |
| driverType | String |  | 5.3.28 |
| internalName | String |  | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| type | String |  | 5.3.28 |
| state | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| usedIps | List | 详情参考[usedIps] | 5.3.28 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| ipRangeUuid | String | IP段UUID | 5.3.28 |
| l3NetworkUuid | String | 三层网络UUID | 5.3.28 |
| ipVersion | Integer |  | 5.3.28 |
| ip | String |  | 5.3.28 |
| netmask | String |  | 5.3.28 |
| gateway | String |  | 5.3.28 |
| usedFor | String |  | 5.3.28 |
| ipInLong | long |  | 5.3.28 |
| ipInBinary | byte[] |  | 5.3.28 |
| vmNicUuid | String | 云主机网卡UUID | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| primaryStorageUuid | String | 主存储UUID | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| diskOfferingUuid | String | 云盘规格UUID | 5.3.28 |
| rootImageUuid | String |  | 5.3.28 |
| installPath | String |  | 5.3.28 |
| type | String |  | 5.3.28 |
| format | String |  | 5.3.28 |
| size | Long |  | 5.3.28 |
| actualSize | Long |  | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| state | String |  | 5.3.28 |
| status | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| isShareable | Boolean |  | 5.3.28 |
| volumeQos | String |  | 5.3.28 |
| lastDetachDate | Timestamp |  | 5.3.28 |
| lastVmInstanceUuid | String |  | 5.3.28 |
| lastAttachDate | Timestamp |  | 5.3.28 |
| protocol | String |  | 5.3.28 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| isoUuid | String |  | 5.3.28 |
| isoInstallPath | String |  | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| protocol | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |



### SDK示例

 Java SDK

```
AttachServiceToObservabilityServerAction action = new AttachServiceToObservabilityServerAction(); action.observabilityServerUuid = "3e38d4c1adb73203b35120914b12ec61"; action.serviceType = "loadBalancer"; action.serviceUuid = "50b12612d2b4318193c2e040d98e8f7b"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; AttachServiceToObservabilityServerAction.Result res = action.call();
```

 Python SDK

```
AttachServiceToObservabilityServerAction action = AttachServiceToObservabilityServerAction() action.observabilityServerUuid = "3e38d4c1adb73203b35120914b12ec61" action.serviceType = "loadBalancer" action.serviceUuid = "50b12612d2b4318193c2e040d98e8f7b" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" AttachServiceToObservabilityServerAction.Result res = action.call()
```

---

## 高级监控服务器解绑服务 (DetachServiceFromObservabilityServer)



### API请求

 URLs

```
DELETE zstack/v1/observability-server/{observabilityServerUuid}/service
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/observability-server/eb4f0a1b78c139d9b291acc85ada69d0/service
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| observabilityServerUuid | String | body |  |  | 5.3.28 |
| serviceType | String | body |  | loadBalancer | 5.3.28 |
| serviceUuid | String | body |  |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "43db67751fbe3e7ca1302f06fb7264ae",     "name": "ExampleObservabilityServer",     "description": "This is an example observability server."   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventory | ObservabilityServerVmInventory | 详情参考[inventory] | 5.3.28 |

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
| publicNetworkUuid | String |  | 5.3.28 |
| applianceVmType | String |  | 5.3.28 |
| managementNetworkUuid | String |  | 5.3.28 |
| defaultRouteL3NetworkUuid | String |  | 5.3.28 |
| status | String |  | 5.3.28 |
| agentPort | Integer |  | 5.3.28 |
| haStatus | String |  | 5.3.28 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| zoneUuid | String | 区域UUID | 5.3.28 |
| clusterUuid | String | 集群UUID | 5.3.28 |
| imageUuid | String | 镜像UUID | 5.3.28 |
| hostUuid | String | 物理机UUID | 5.3.28 |
| lastHostUuid | String |  | 5.3.28 |
| instanceOfferingUuid | String | 计算规格UUID | 5.3.28 |
| rootVolumeUuid | String | 根云盘UUID | 5.3.28 |
| platform | String |  | 5.3.28 |
| architecture | String |  | 5.3.28 |
| defaultL3NetworkUuid | String |  | 5.3.28 |
| type | String |  | 5.3.28 |
| hypervisorType | String |  | 5.3.28 |
| memorySize | Long |  | 5.3.28 |
| reservedMemorySize | Long |  | 5.3.28 |
| cpuNum | Integer |  | 5.3.28 |
| cpuSpeed | Long |  | 5.3.28 |
| allocatorStrategy | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| state | String |  | 5.3.28 |
| guestOsType | String |  | 5.3.28 |
| vmNics | List | 详情参考[vmNics] | 5.3.28 |
| allVolumes | List | 详情参考[allVolumes] | 5.3.28 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.3.28 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| l3NetworkUuid | String | 三层网络UUID | 5.3.28 |
| ip | String |  | 5.3.28 |
| mac | String |  | 5.3.28 |
| hypervisorType | String |  | 5.3.28 |
| netmask | String |  | 5.3.28 |
| gateway | String |  | 5.3.28 |
| metaData | String |  | 5.3.28 |
| ipVersion | Integer |  | 5.3.28 |
| driverType | String |  | 5.3.28 |
| internalName | String |  | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| type | String |  | 5.3.28 |
| state | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| usedIps | List | 详情参考[usedIps] | 5.3.28 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| ipRangeUuid | String | IP段UUID | 5.3.28 |
| l3NetworkUuid | String | 三层网络UUID | 5.3.28 |
| ipVersion | Integer |  | 5.3.28 |
| ip | String |  | 5.3.28 |
| netmask | String |  | 5.3.28 |
| gateway | String |  | 5.3.28 |
| usedFor | String |  | 5.3.28 |
| ipInLong | long |  | 5.3.28 |
| ipInBinary | byte[] |  | 5.3.28 |
| vmNicUuid | String | 云主机网卡UUID | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| primaryStorageUuid | String | 主存储UUID | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| diskOfferingUuid | String | 云盘规格UUID | 5.3.28 |
| rootImageUuid | String |  | 5.3.28 |
| installPath | String |  | 5.3.28 |
| type | String |  | 5.3.28 |
| format | String |  | 5.3.28 |
| size | Long |  | 5.3.28 |
| actualSize | Long |  | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| state | String |  | 5.3.28 |
| status | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| isShareable | Boolean |  | 5.3.28 |
| volumeQos | String |  | 5.3.28 |
| lastDetachDate | Timestamp |  | 5.3.28 |
| lastVmInstanceUuid | String |  | 5.3.28 |
| lastAttachDate | Timestamp |  | 5.3.28 |
| protocol | String |  | 5.3.28 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| vmInstanceUuid | String | 云主机UUID | 5.3.28 |
| deviceId | Integer |  | 5.3.28 |
| isoUuid | String |  | 5.3.28 |
| isoInstallPath | String |  | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| protocol | String |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |



### SDK示例

 Java SDK

```
DetachServiceFromObservabilityServerAction action = new DetachServiceFromObservabilityServerAction(); action.observabilityServerUuid = "eb4f0a1b78c139d9b291acc85ada69d0"; action.serviceType = "loadBalancer"; action.serviceUuid = "6dd5dbdc01a6339086958415859fbb60"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DetachServiceFromObservabilityServerAction.Result res = action.call();
```

 Python SDK

```
DetachServiceFromObservabilityServerAction action = DetachServiceFromObservabilityServerAction() action.observabilityServerUuid = "eb4f0a1b78c139d9b291acc85ada69d0" action.serviceType = "loadBalancer" action.serviceUuid = "6dd5dbdc01a6339086958415859fbb60" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DetachServiceFromObservabilityServerAction.Result res = action.call()
```

---

### 创建高级监控服务器规格 (CreateObservabilityServerOffering)



#### API请求

 URLs

```
POST zstack/v1/instance-offerings/observability-servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "08c1ec2300e13fc2985d4b42e955f620",
    "managementNetworkUuid": "5c046b968a0e3e33aa08abfe5427b083",
    "imageUuid": "4948cd5ab5e234848bdcf933a45a826f",
    "publicNetworkUuid": "296c48c1b7b43cd0b4094450f63b389d",
    "isDefault": true,
    "name": "ObservabilityServer-Offering",
    "cpuNum": 2,
    "memorySize": 1024,
    "reservedMemorySize": 0,
    "sortKey": 0,
    "type": "ObservabilityServer"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"zoneUuid":"08c1ec2300e13fc2985d4b42e955f620","managementNetworkUuid":"5c046b968a0e3e33aa08abfe5427b083","imageUuid":"4948cd5ab5e234848bdcf933a45a826f","publicNetworkUuid":"296c48c1b7b43cd0b4094450f63b389d","isDefault":true,"name":"ObservabilityServer-Offering","cpuNum":2,"memorySize":1024,"reservedMemorySize":0,"sortKey":0,"type":"ObservabilityServer"}}' \
http://localhost:8080/zstack/v1/instance-offerings/observability-servers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 5.3.28 |
| managementNetworkUuid | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID |  | 5.3.28 |
| publicNetworkUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| isDefault (可选) | Boolean | body(包含在**params**结构中) |  |  | 5.3.28 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.3.28 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.3.28 |
| cpuNum | int | body(包含在**params**结构中) |  |  | 5.3.28 |
| memorySize | long | body(包含在**params**结构中) |  |  | 5.3.28 |
| reservedMemorySize (可选) | long | body(包含在**params**结构中) |  |  | 5.3.28 |
| allocatorStrategy (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| sortKey (可选) | int | body(包含在**params**结构中) |  |  | 5.3.28 |
| type (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.3.28 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



#### API返回

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
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 5.3.28 |

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
| cpuNum | Integer | CPU数量 | 5.3.28 |
| cpuSpeed | Integer | CPU速度 | 5.3.28 |
| memorySize | Long | 内存大小 | 5.3.28 |
| type | String | 类型 | 5.3.28 |
| allocatorStrategy | String | 分配策略 | 5.3.28 |
| sortKey | Integer |  | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| state | String | 状态 (启用，禁用) | 5.3.28 |



#### SDK示例

 Java SDK

```
CreateObservabilityServerOfferingAction action = new CreateObservabilityServerOfferingAction();
action.zoneUuid = "08c1ec2300e13fc2985d4b42e955f620";
action.managementNetworkUuid = "5c046b968a0e3e33aa08abfe5427b083";
action.imageUuid = "4948cd5ab5e234848bdcf933a45a826f";
action.publicNetworkUuid = "296c48c1b7b43cd0b4094450f63b389d";
action.isDefault = true;
action.name = "ObservabilityServer-Offering";
action.cpuNum = 2;
action.memorySize = 1024;
action.reservedMemorySize = 0;
action.sortKey = 0;
action.type = "ObservabilityServer";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateObservabilityServerOfferingAction.Result res = action.call();
```

 Python SDK

```
CreateObservabilityServerOfferingAction action = CreateObservabilityServerOfferingAction()
action.zoneUuid = "08c1ec2300e13fc2985d4b42e955f620"
action.managementNetworkUuid = "5c046b968a0e3e33aa08abfe5427b083"
action.imageUuid = "4948cd5ab5e234848bdcf933a45a826f"
action.publicNetworkUuid = "296c48c1b7b43cd0b4094450f63b389d"
action.isDefault = true
action.name = "ObservabilityServer-Offering"
action.cpuNum = 2
action.memorySize = 1024
action.reservedMemorySize = 0
action.sortKey = 0
action.type = "ObservabilityServer"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateObservabilityServerOfferingAction.Result res = action.call()
```

---

### 获取高级监控服务器服务数据 (GetObservabilityServerServiceData)



#### API请求

 URLs

```
POST zstack/v1/observability-server/{observabilityServerUuid}/service-data
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "serviceType": "loadBalancer",
    "serviceUuid": "11836e85c4d7391a8d8c54248fd89815",
    "limit": 10,
    "startTime": "2024-12-01 17:00:00",
    "endTime": "2024-12-01 18:00:00",
    "sortDirection": "asc"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"serviceType":"loadBalancer","serviceUuid":"11836e85c4d7391a8d8c54248fd89815","limit":10,"startTime":"2024-12-01 17:00:00","endTime":"2024-12-01 18:00:00","sortDirection":"asc"}}' \
http://localhost:8080/zstack/v1/observability-server/f1718b20d8cd3daba51e1b39dcf35299/service-data
```

 参数列表
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| observabilityServerUuid | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| serviceType | String | body(包含在**params**结构中) |  | loadBalancer | 5.3.28 |
| serviceUuid | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| limit (可选) | Integer | body(包含在**params**结构中) |  |  | 5.3.28 |
| startTime (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| endTime (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| sortDirection (可选) | String | body(包含在**params**结构中) |  | asc desc | 5.3.28 |
| labelFilters (可选) | Map | body(包含在**params**结构中) |  |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



#### API返回

 返回示例

```
{
  "inventories": []
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | Integer |  | 5.3.28 |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventory | List | 详情参考[inventories] | 5.3.28 |

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
| job | String |  | 5.3.28 |
| fileName | String |  | 5.3.28 |



#### SDK示例

 Java SDK

```
GetObservabilityServerServiceDataAction action = new GetObservabilityServerServiceDataAction();
action.observabilityServerUuid = "f1718b20d8cd3daba51e1b39dcf35299";
action.serviceType = "loadBalancer";
action.serviceUuid = "11836e85c4d7391a8d8c54248fd89815";
action.limit = 10;
action.startTime = "2024-12-01 17:00:00";
action.endTime = "2024-12-01 18:00:00";
action.sortDirection = "asc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetObservabilityServerServiceDataAction.Result res = action.call();
```

 Python SDK

```
GetObservabilityServerServiceDataAction action = GetObservabilityServerServiceDataAction()
action.observabilityServerUuid = "f1718b20d8cd3daba51e1b39dcf35299"
action.serviceType = "loadBalancer"
action.serviceUuid = "11836e85c4d7391a8d8c54248fd89815"
action.limit = 10
action.startTime = "2024-12-01 17:00:00"
action.endTime = "2024-12-01 18:00:00"
action.sortDirection = "asc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetObservabilityServerServiceDataAction.Result res = action.call()
```
