# VMware管理(Plus) - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.8.html*

---

## VMware管理(Plus)



VMware管理以单独的功能模块形式提供，需提前购买VMware管理模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

## vCenter相关接口

---

## 添加vCenter资源(AddVCenter)



### API请求

 URLs

```
POST zstack/v1/vcenters
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "username": "admin@vsphere-local.net",     "password": "test-pass",     "zoneUuid": "25b9e68b1cc43836a79f1a35e3108880",     "name": "vc1",     "https": true,     "domainName": "vsphere-local.net"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"username":"admin@vsphere-local.net","password":"test-pass","zoneUuid":"25b9e68b1cc43836a79f1a35e3108880","name":"vc1","https":true,"domainName":"vsphere-local.net"}}' \ http://localhost:8080/zstack/v1/vcenters
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| username | String | body(包含在**params**结构中) | 登录 vCenter 用户名 |  | 0.6 |
| password | String | body(包含在**params**结构中) | 登录 vCenter 用户密码 |  | 0.6 |
| zoneUuid | String | body(包含在**params**结构中) | vCenter 将要添加至的目标区域UUID |  | 0.6 |
| name | String | body(包含在**params**结构中) | vCenter 的名称 |  | 0.6 |
| https (可选) | boolean | body(包含在**params**结构中) | 是否启用 HTTPS 登录（默认开启） |  | 0.6 |
| domainName | String | body(包含在**params**结构中) | vCenter 域名 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | vCenter 的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | vCenter 的UUID。若指定，云主机会使用该字段值作为UUID。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| port (可选) | Integer | body(包含在`params`结构中) |  |  | 0.6 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "1497ae9206ea3f82bb13c34c307299b9",     "name": "vc1",     "domainName": "vsphere-local.net",     "userName": "admin@vsphere-local.net",     "https": true,     "state": "Enabled",     "status": "Connected"   },   "skippedResources": {     "vmInstances": [       {         "uuid": "example",         "name": "exampleVm"       }     ]   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.3 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VCenterInventory | 详情参考[inventory] | 0.6 |
| skippedResources | SkippedResources | 详情参考[skippedResources] | 4.5.3 |

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
| domainName | String |  | 0.6 |
| port | Integer |  | 0.6 |
| userName | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| https | Boolean |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #skippedResources

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstances | Set | 详情参考[vmInstances] | 4.5.3 |

 #vmInstances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| name | String | 资源名称 | 4.5.3 |
| description | String | 资源的详细描述 | 4.5.3 |
| zoneUuid | String | 区域UUID | 4.5.3 |
| clusterUuid | String | 集群UUID | 4.5.3 |
| imageUuid | String | 镜像UUID | 4.5.3 |
| hostUuid | String | 物理机UUID | 4.5.3 |
| lastHostUuid | String |  | 4.5.3 |
| instanceOfferingUuid | String | 计算规格UUID | 4.5.3 |
| rootVolumeUuid | String | 根云盘UUID | 4.5.3 |
| platform | String |  | 4.5.3 |
| architecture | String | 架构类型 | 4.5.3 |
| defaultL3NetworkUuid | String |  | 4.5.3 |
| type | String |  | 4.5.3 |
| hypervisorType | String |  | 4.5.3 |
| memorySize | Long |  | 4.5.3 |
| cpuNum | Integer |  | 4.5.3 |
| cpuSpeed | Long |  | 4.5.3 |
| allocatorStrategy | String |  | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |
| state | String |  | 4.5.3 |
| guestOsType | String | 操作系统类型 | 4.5.3 |
| vmNics | List | 详情参考[vmNics] | 4.5.3 |
| allVolumes | List | 详情参考[allVolumes] | 4.5.3 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.5.3 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| vmInstanceUuid | String | 云主机UUID | 4.5.3 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.3 |
| ip | String | IP地址 | 4.5.3 |
| mac | String | MAC地址 | 4.5.3 |
| hypervisorType | String | 虚拟化类型 | 4.5.3 |
| netmask | String | 子网掩码 | 4.5.3 |
| gateway | String | 网关 | 4.5.3 |
| metaData | String |  | 4.5.3 |
| ipVersion | Integer | IP地址版本 | 4.5.3 |
| deviceId | Integer | 设备ID | 4.5.3 |
| type | String | 网卡类型 | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |
| usedIps | List | 详情参考[usedIps] | 4.5.3 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| ipRangeUuid | String | IP段UUID | 4.5.3 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.3 |
| ipVersion | Integer | IP协议号 | 4.5.3 |
| ip | String | IP地址 | 4.5.3 |
| netmask | String | 网络掩码 | 4.5.3 |
| gateway | String | 网关地址 | 4.5.3 |
| usedFor | String |  | 4.5.3 |
| ipInLong | long |  | 4.5.3 |
| vmNicUuid | String | 云主机网卡UUID | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| name | String | 资源名称 | 4.5.3 |
| description | String | 资源的详细描述 | 4.5.3 |
| primaryStorageUuid | String | 主存储UUID | 4.5.3 |
| vmInstanceUuid | String | 云主机UUID | 4.5.3 |
| diskOfferingUuid | String | 云盘规格UUID | 4.5.3 |
| rootImageUuid | String | 云盘根镜像UUID | 4.5.3 |
| installPath | String | 云盘在主存储上的路径 | 4.5.3 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.5.3 |
| format | String | 云盘格式 | 4.5.3 |
| size | Long | 云盘大小 | 4.5.3 |
| actualSize | Long | 云盘真实大小 | 4.5.3 |
| deviceId | Integer |  | 4.5.3 |
| state | String | 云盘是否开启 | 4.5.3 |
| status | String | 云盘状态 | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |
| isShareable | Boolean | 是否共享云盘 | 4.5.3 |
| volumeQos | String | 云盘QoS，格式如total=1048576 | 4.5.3 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| vmInstanceUuid | String | 云主机UUID | 4.5.3 |
| deviceId | Integer | 光驱顺序号 | 4.5.3 |
| isoUuid | String | ISO镜像UUID | 4.5.3 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.5.3 |
| name | String | 资源名称 | 4.5.3 |
| description | String | 资源的详细描述 | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |



### SDK示例

 Java SDK

```
AddVCenterAction action = new AddVCenterAction(); action.username = "admin@vsphere-local.net"; action.password = "test-pass"; action.zoneUuid = "25b9e68b1cc43836a79f1a35e3108880"; action.name = "vc1"; action.https = true; action.domainName = "vsphere-local.net"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; AddVCenterAction.Result res = action.call();
```

 Python SDK

```
AddVCenterAction action = AddVCenterAction() action.username = "admin@vsphere-local.net" action.password = "test-pass" action.zoneUuid = "25b9e68b1cc43836a79f1a35e3108880" action.name = "vc1" action.https = true action.domainName = "vsphere-local.net" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" AddVCenterAction.Result res = action.call()
```

---

## 查询vCenter资源(QueryVCenter)



### API请求

 URLs

```
GET zstack/v1/vcenters GET zstack/v1/vcenters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth e46c3ba50f324bcbabda6c40d11d1e33" \ -X GET http://localhost:8080/zstack/v1/vcenters?q=uuid=7e580c2f8b6c4e31aff447c45c72c3bb
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth d0552ed3feb243a1b87fcff421388964" \ -X GET http://localhost:8080/zstack/v1/vcenters/bb39998d05004cd9aa5bf816cc308ed1
```



可查询字段

运行CLI命令行工具，输入`QueryVCenter`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "uuid": "b84429ea486d3e878afd4175bff667e0",       "name": "vc1",       "domainName": "vsphere-local.net",       "userName": "admin@vsphere-local.net",       "version": "6.0.0",       "https": true,       "state": "Enabled",       "status": "Connected"     }   ] }
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
| domainName | String |  | 3.9.0 |
| port | Integer |  | 3.9.0 |
| userName | String |  | 3.9.0 |
| zoneUuid | String | 区域UUID | 3.9.0 |
| version | String | vCenter版本 | 3.9.0 |
| https | Boolean |  | 3.9.0 |
| state | String |  | 3.9.0 |
| status | String |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



### SDK示例

 Java SDK

```
QueryVCenterAction action = new QueryVCenterAction(); action.conditions = asList("uuid=70118e1db5084255a0e44c7af24d57b7"); action.sessionId = "10dbde6695b74150878bec7cbe97eda5"; QueryVCenterAction.Result res = action.call();
```

 Python SDK

```
QueryVCenterAction action = QueryVCenterAction() action.conditions = ["uuid=4e5f668c85be4bb4a1b5990611ad806b"] action.sessionId = "708e5e17b29a4527a8480faadd49fdbc" QueryVCenterAction.Result res = action.call()
```

---

#### 删除vCenter资源(DeleteVCenter)



##### API请求

 URLs

```
DELETE zstack/v1/vcenters/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth cf9047b652144c11b62e7176eef5540b" \
-X DELETE http://localhost:8080/zstack/v1/vcenters/cd00a732974e4ca99886338bac41d511?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | vCenter 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | url | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
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
DeleteVCenterAction action = new DeleteVCenterAction();
action.uuid = "17ab65db07b04666ad8eef6158e7532f";
action.deleteMode = "Permissive";
action.sessionId = "e8e3599ce54c41a4b5ff3322d2479844";
DeleteVCenterAction.Result res = action.call();
```

 Python SDK

```
DeleteVCenterAction action = DeleteVCenterAction()
action.uuid = "f516dab538a64c5a9f0f2a55141ae439"
action.deleteMode = "Permissive"
action.sessionId = "aca4acf373b04a2fb1ad1112f540b1b3"
DeleteVCenterAction.Result res = action.call()
```

---

#### 更新vCenter资源(UpdateVCenter)



##### API请求

 URLs

```
PUT zstack/v1/vcenters/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVCenter": {
    "name": "Test-VCenter",
    "description": "Test-Description",
    "username": "Test-Username",
    "password": "Test-Password",
    "domainName": "Test-DomainName",
    "port": 443
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateVCenter":{"name":"Test-VCenter","description":"Test-Description","username":"Test-Username","password":"Test-Password","domainName":"Test-DomainName","port":443}}' \
http://localhost:8080/zstack/v1/vcenters/08a6059f054a3866abf6302b6461e340/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3.2 |
| name (可选) | String | body(包含在**updateVCenter**结构中) | 资源名称 |  | 2.3.2 |
| description (可选) | String | body(包含在**updateVCenter**结构中) | 资源的详细描述 |  | 2.3.2 |
| username (可选) | String | body(包含在**updateVCenter**结构中) |  |  | 2.3.2 |
| password (可选) | String | body(包含在**updateVCenter**结构中) |  |  | 2.3.2 |
| domainName (可选) | String | body(包含在**updateVCenter**结构中) |  |  | 2.3.2 |
| port (可选) | Integer | body(包含在**updateVCenter**结构中) |  |  | 2.3.2 |
| state(可选) | String | body(包含在**updateVCenter**结构中) | VCenter启用状态 | Enabled Disabled | 4.8.0 |
| systemTags (可选) | List | body |  |  | 2.3.2 |
| userTags (可选) | List | body |  |  | 2.3.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "6c42846814243c408a225e3738a2440f",
    "name": "Test-VCenter",
    "description": "Test-Description",
    "domainName": "Test-DomainName",
    "userName": "Test-Username",
    "password": "Test-Password"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.2 |
| inventory | VCenterInventory | 详情参考[inventory] | 2.3.2 |

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
| domainName | String |  | 0.6 |
| port | Integer |  | 0.6 |
| userName | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| https | Boolean |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateVCenterAction action = new UpdateVCenterAction();
action.uuid = "08a6059f054a3866abf6302b6461e340";
action.name = "Test-VCenter";
action.description = "Test-Description";
action.username = "Test-Username";
action.password = "Test-Password";
action.domainName = "Test-DomainName";
action.port = 443;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVCenterAction.Result res = action.call();
```

 Python SDK

```
UpdateVCenterAction action = UpdateVCenterAction()
action.uuid = "08a6059f054a3866abf6302b6461e340"
action.name = "Test-VCenter"
action.description = "Test-Description"
action.username = "Test-Username"
action.password = "Test-Password"
action.domainName = "Test-DomainName"
action.port = 443
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVCenterAction.Result res = action.call()
```

---

#### 同步vCenter资源(SyncVCenter)



##### API请求

 URLs

```
PUT zstack/v1/vcenters/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncVCenter": {},
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncVCenter":{}}' \
http://localhost:8080/zstack/v1/vcenters/ada8b8f96b3033bc9420c13bba7d51b9/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | vCenter资源的UUID，唯一标示该资源 |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "skippedResources": {
    "vmInstances": [
      {
        "uuid": "example",
        "name": "exampleVm"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.5.3 |
| skippedResources | SkippedResources | 详情参考[skippedResources] | 4.5.3 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.3 |

  #skippedResources

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstances | Set | 详情参考[vmInstances] | 4.5.3 |

 #vmInstances

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| name | String | 资源名称 | 4.5.3 |
| description | String | 资源的详细描述 | 4.5.3 |
| zoneUuid | String | 区域UUID | 4.5.3 |
| clusterUuid | String | 集群UUID | 4.5.3 |
| imageUuid | String | 镜像UUID | 4.5.3 |
| hostUuid | String | 物理机UUID | 4.5.3 |
| lastHostUuid | String |  | 4.5.3 |
| instanceOfferingUuid | String | 计算规格UUID | 4.5.3 |
| rootVolumeUuid | String | 根云盘UUID | 4.5.3 |
| platform | String |  | 4.5.3 |
| architecture | String | 架构类型 | 4.5.3 |
| defaultL3NetworkUuid | String |  | 4.5.3 |
| type | String |  | 4.5.3 |
| hypervisorType | String |  | 4.5.3 |
| memorySize | Long |  | 4.5.3 |
| cpuNum | Integer |  | 4.5.3 |
| cpuSpeed | Long |  | 4.5.3 |
| allocatorStrategy | String |  | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |
| state | String |  | 4.5.3 |
| guestOsType | String | 操作系统类型 | 4.5.3 |
| vmNics | List | 详情参考[vmNics] | 4.5.3 |
| allVolumes | List | 详情参考[allVolumes] | 4.5.3 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.5.3 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| vmInstanceUuid | String | 云主机UUID | 4.5.3 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.3 |
| ip | String | IP地址 | 4.5.3 |
| mac | String | MAC地址 | 4.5.3 |
| hypervisorType | String | 虚拟化类型 | 4.5.3 |
| netmask | String | 子网掩码 | 4.5.3 |
| gateway | String | 网关 | 4.5.3 |
| metaData | String |  | 4.5.3 |
| ipVersion | Integer | IP地址版本 | 4.5.3 |
| deviceId | Integer | 设备ID | 4.5.3 |
| type | String | 网卡类型 | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |
| usedIps | List | 详情参考[usedIps] | 4.5.3 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| ipRangeUuid | String | IP段UUID | 4.5.3 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.3 |
| ipVersion | Integer | IP协议号 | 4.5.3 |
| ip | String | IP地址 | 4.5.3 |
| netmask | String | 网络掩码 | 4.5.3 |
| gateway | String | 网关地址 | 4.5.3 |
| usedFor | String |  | 4.5.3 |
| ipInLong | long |  | 4.5.3 |
| vmNicUuid | String | 云主机网卡UUID | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| name | String | 资源名称 | 4.5.3 |
| description | String | 资源的详细描述 | 4.5.3 |
| primaryStorageUuid | String | 主存储UUID | 4.5.3 |
| vmInstanceUuid | String | 云主机UUID | 4.5.3 |
| diskOfferingUuid | String | 云盘规格UUID | 4.5.3 |
| rootImageUuid | String | 云盘根镜像UUID | 4.5.3 |
| installPath | String | 云盘在主存储上的路径 | 4.5.3 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.5.3 |
| format | String | 云盘格式 | 4.5.3 |
| size | Long | 云盘大小 | 4.5.3 |
| actualSize | Long | 云盘真实大小 | 4.5.3 |
| deviceId | Integer |  | 4.5.3 |
| state | String | 云盘是否开启 | 4.5.3 |
| status | String | 云盘状态 | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |
| isShareable | Boolean | 是否共享云盘 | 4.5.3 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.5.3 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.3 |
| vmInstanceUuid | String | 云主机UUID | 4.5.3 |
| deviceId | Integer | 光驱顺序号 | 4.5.3 |
| isoUuid | String | ISO镜像UUID | 4.5.3 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.5.3 |
| name | String | 资源名称 | 4.5.3 |
| description | String | 资源的详细描述 | 4.5.3 |
| createDate | Timestamp | 创建时间 | 4.5.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.3 |

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
SyncVCenterAction action = new SyncVCenterAction();
action.uuid = "ada8b8f96b3033bc9420c13bba7d51b9";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncVCenterAction.Result res = action.call();
```

 Python SDK

```
SyncVCenterAction action = SyncVCenterAction()
action.uuid = "ada8b8f96b3033bc9420c13bba7d51b9"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncVCenterAction.Result res = action.call()
```

---

#### 查询vCenter集群(QueryVCenterCluster)



##### API请求

 URLs

```
GET zstack/v1/vcenters/clusters
GET zstack/v1/vcenters/clusters/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b4ad190088e14bb89ad9594fd311a9b9" \
-X GET http://localhost:8080/zstack/v1/vcenters/clusters?q=uuid=82019f6ef752427480de4812339149bd
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e2545e88cc674f52bb6d9dd3954e8ea7" \
-X GET http://localhost:8080/zstack/v1/vcenters/clusters/ccf3e1c048d84ebbad90802a7bd0907c
```



可查询字段

运行CLI命令行工具，输入`QueryVCenterCluster`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "vCenterUuid": "c5198b0ec6b0364297a3c42b195c3e31",
      "morval": "Test-morval",
      "dataCenterUuid": "96dfe6e8f3ba3b159c3531cd3d50d298",
      "name": "Test-name",
      "uuid": "d76f19f8e136386b815be9839a100b1c",
      "description": "Test-description",
      "state": "Enabled",
      "hypervisorType": "ESX",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "zoneUuid": "ecd7aeb8347d3fca8e3f455da531e4f1",
      "type": "vmware"
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
| vCenterUuid | String | vCenterUuid | 3.9.0 |
| dataCenterUuid | String | 数据中心uuid | 3.9.0 |
| morval | String | morval | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| state | String | 状态 | 3.9.0 |
| hypervisorType | String | 虚拟机管理程序类型 | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| zoneUuid | String | 区域UUID | 3.9.0 |
| type | String | 集群类型 | 3.9.0 |



##### SDK示例

 Java SDK

```
QueryVCenterClusterAction action = new QueryVCenterClusterAction();
action.conditions = asList("uuid=1197f1e666b24da9b96ca15b76d23029");
action.sessionId = "833bf9348c13481792af75ade4d2d0fb";
QueryVCenterClusterAction.Result res = action.call();
```

 Python SDK

```
QueryVCenterClusterAction action = QueryVCenterClusterAction()
action.conditions = ["uuid=99e19ea5de35490f8f78f2b2c54e867b"]
action.sessionId = "bbfbeaea067840879cbc285146514152"
QueryVCenterClusterAction.Result res = action.call()
```

---

#### 查询vCenter主存储(QueryVCenterPrimaryStorage)



##### API请求

 URLs

```
GET zstack/v1/vcenters/primary-storage
GET zstack/v1/vcenters/primary-storage/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 0d623b631fd7402d83b9ff2b25bdd831" \
-X GET http://localhost:8080/zstack/v1/vcenters/primary-storage?q=uuid=981850c9581d4ffb9df096112f902031
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c9d5f42a19d745c6928da0cd5325e1d6" \
-X GET http://localhost:8080/zstack/v1/vcenters/primary-storage/d51815cfb0974e168f18578618474f75
```



可查询字段

运行CLI命令行工具，输入`QueryVCenterPrimaryStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QueryVCenterPrimaryStorageAction action = new QueryVCenterPrimaryStorageAction();
action.conditions = asList("uuid=252afc9b92b34337adda34baa66f41c4");
action.sessionId = "0574d9e353cb434cb8873871d6c312ba";
QueryVCenterPrimaryStorageAction.Result res = action.call();
```

 Python SDK

```
QueryVCenterPrimaryStorageAction action = QueryVCenterPrimaryStorageAction()
action.conditions = ["uuid=9fad4c72758b46d38c0866e460ef4b46"]
action.sessionId = "ceba885251524d33a45220db9b465a9e"
QueryVCenterPrimaryStorageAction.Result res = action.call()
```

---

#### 查询vCenter镜像服务器(QueryVCenterBackupStorage)



##### API请求

 URLs

```
GET zstack/v1/vcenters/backup-storage
GET zstack/v1/vcenters/backup-storage/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7ef3836bac52419aad77c40b44fffb75" \
-X GET http://localhost:8080/zstack/v1/vcenters/backup-storage?q=uuid=5557b285420b48b0b8c9bcea75b8b118
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 5176427af8404b40b3fdc2faa26790d1" \
-X GET http://localhost:8080/zstack/v1/vcenters/backup-storage/59ca8b1caccf41eca787b0fbd354bde9
```



可查询字段

运行CLI命令行工具，输入`QueryVCenterBackupStorage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QueryVCenterBackupStorageAction action = new QueryVCenterBackupStorageAction();
action.conditions = asList("uuid=7557d599e0204b11b4dbf0d1dca47218");
action.sessionId = "76854653db20477199d441bc07a74552";
QueryVCenterBackupStorageAction.Result res = action.call();
```

 Python SDK

```
QueryVCenterBackupStorageAction action = QueryVCenterBackupStorageAction()
action.conditions = ["uuid=ea80ba3ee9de4938a148d5b29fdc1780"]
action.sessionId = "365e725adbea460b9352adf7848a7026"
QueryVCenterBackupStorageAction.Result res = action.call()
```

---

#### 查询vCenter资源池(QueryVCenterResourcePool)



##### API请求

 URLs

```
GET zstack/v1/vcenters/clusters/resourcepools
```


```
GET zstack/v1/vcenters/clusters/resourcepools/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vcenters/clusters/resourcepools?q=uuid=a52728c900cc3000990c379962d72eaf
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vcenters/clusters/resourcepools/06c28743a1523c7285d6782624bf93ad
```



可查询字段

运行CLI命令行工具，输入QueryVCenterResourcePool并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "7b2495fb762a3e539d078fa6339523e3",
      "vCenterClusterUuid": "3cbf58119aaa3d9e9aa12011070e1055",
      "name": "resource-pool-1",
      "morVal": "Mor-Val-1",
      "CPULimit": 1.0E9,
      "CPUOverheadLimit": -1.0,
      "CPUReservation": 5.0E8,
      "CPUShares": 1000.0,
      "CPULevel": "green",
      "memoryLimit": 1.073741824E9,
      "memoryOverheadLimit": -1.0,
      "memoryReservation": 5.24288E8,
      "memoryShares": 1000.0,
      "memoryLevel": "green",
      "subResources": [
        {
          "uuid": "4b271fc9805638f2bd95e826376ba7e7",
          "vCenterResourcePoolUuid": "7b2495fb762a3e539d078fa6339523e3",
          "resourceUuid": "8ba5ebb4c49d378982190f2e0ec93001",
          "resourceType": "VmInstanceVO"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventories | List | 详情参考[inventories] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |

  #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| vCenterClusterUuid | String |  | 3.3.0 |
| name | String | 资源名称 | 3.3.0 |
| morVal | String |  | 3.3.0 |
| parentUuid | String |  | 3.3.0 |
| CPULimit | Long |  | 3.3.0 |
| CPUOverheadLimit | Long |  | 3.3.0 |
| CPUReservation | Long |  | 3.3.0 |
| CPUShares | Long |  | 3.3.0 |
| CPULevel | String |  | 3.3.0 |
| memoryLimit | Long |  | 3.3.0 |
| memoryOverheadLimit | Long |  | 3.3.0 |
| memoryReservation | Long |  | 3.3.0 |
| memoryShares | Long |  | 3.3.0 |
| memoryLevel | String |  | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |
| subResources | List | 详情参考[subResources] | 3.3.0 |

 #subResources

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| vCenterResourcePoolUuid | String |  | 3.3.0 |
| resourceUuid | String |  | 3.3.0 |
| resourceType | String |  | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |



##### SDK示例

 Java SDK

```
QueryVCenterResourcePoolAction action = new QueryVCenterResourcePoolAction();
action.conditions = asList("uuid=0a60a64e4bdf3dc2b4df3ac7b60a9824");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVCenterResourcePoolAction.Result res = action.call();
```

 Python SDK

```
QueryVCenterResourcePoolAction action = QueryVCenterResourcePoolAction()
action.conditions = ["uuid=f73ce0f7806a3a39a9119a4b38bd44e5"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVCenterResourcePoolAction.Result res = action.call()
```
