# 迁移服务(Plus) - 平台运维

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/5.5.html*

---

## 迁移服务(Plus)



迁移服务以单独的功能模块形式提供，需提前购买迁移服务模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

## 迁移服务相关接口

---

## 添加V2V迁移服务器(AddV2VConversionHost)



### API请求

 URLs

```
POST zstack/v1/v2v-conversion-hosts
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "V2V-Converter-01",     "description": "to convert vm from foreign hypervisor",     "type": "VMWARE",     "hostUuid": "fc2971a1a5943bdda6733feecfb26861",     "storagePath": "/path/to/large/directory/"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"V2V-Converter-01","description":"to convert vm from foreign hypervisor","type":"VMWARE","hostUuid":"fc2971a1a5943bdda6733feecfb26861","storagePath":"/path/to/large/directory/"}}' http://localhost:8080/zstack/v1/v2v-conversion-hosts
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.1 |
| type | String | body(包含在**params**结构中) | V2V迁移服务器类型 | VMWARE | 3.0.1 |
| hostUuid | String | body(包含在`v`结构中) | 物理机UUID |  | 3.0.1 |
| storagePath | String | body(包含在**params**结构中) | V2V迁移镜像保存路径 |  | 3.0.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.0.1 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.1 |


  - 选项格式为：`conversion::network::cidr::{netcidr}`
  - 例如：`conversion::network::cidr::{10.0.0.1/24} `
- 例如：`conversion::network::cidr::{10.0.0.1/24} `


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "uuid": "c6ac169863173a9bb5742974d731a242",     "name": "V2V-Converter-01",     "description": "to convert vm from foreign hypervisor",     "type": "VMWARE",     "hostUuid": "dcffe404cd0336a5817bfba0e56117ac",     "storagePath": "/path/to/large/directory/",     "state": "Enabled"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.1 |
| inventory | V2VConversionHostInventory | 详情参考[inventory] | 3.0.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.1 |
| description | String | 错误的概要描述 | 3.0.1 |
| details | String | 错误的详细信息 | 3.0.1 |
| elaboration | String | 保留字段，默认为null | 3.0.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.1 |
| name | String | 资源名称 | 3.0.1 |
| description | String | 资源的详细描述 | 3.0.1 |
| type | String | 类型 | 3.0.1 |
| hostUuid | String | 物理机UUID | 3.0.1 |
| storagePath | String | V2V迁移镜像保存路径 | 3.0.1 |
| state | String | 状态 | 3.0.1 |
| createDate | Timestamp | 创建时间 | 3.0.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.1 |



#

### SDK示例

 Java SDK

```
AddV2VConversionHostAction action = new AddV2VConversionHostAction(); action.name = "V2V-Converter-01"; action.description = "to convert vm from foreign hypervisor"; action.type = "VMWARE"; action.hostUuid = "fc2971a1a5943bdda6733feecfb26861"; action.storagePath = "/path/to/large/directory/"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; AddV2VConversionHostAction.Result res = action.call();
```

 Python SDK

```
AddV2VConversionHostAction action = AddV2VConversionHostAction() action.name = "V2V-Converter-01" action.description = "to convert vm from foreign hypervisor" action.type = "VMWARE" action.hostUuid = "fc2971a1a5943bdda6733feecfb26861" action.storagePath = "/path/to/large/directory/" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" AddV2VConversionHostAction.Result res = action.call()
```

---

## 修改V2V迁移服务器状态(ChangeV2VConversionHostState)



### API请求

 URLs

```
PUT zstack/v1/v2v-conversion-hosts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "changeV2VConversionHostState": {     "stateEvent": "disable"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"changeV2VConversionHostState":{"stateEvent":"disable"}}' http://localhost:8080/zstack/v1/v2v-conversion-hosts/99c4cb23248e37aeb54037578aaa120f/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.1 |
| stateEvent | String | body(包含在**changeV2VConversionHostState**结构中) | 状态事件 | enable disable | 3.0.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.1 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "ac5f6b519b86352faa5e1d94ad5461d8",     "name": "new-name",     "description": "new description",     "type": "VMWARE",     "hostUuid": "d5d8d26dfc913c9aa8f220a238b9e0bb",     "storagePath": "/path/to/large/directory/",     "state": "Disabled"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.1 |
| inventory | V2VConversionHostInventory | 详情参考[inventory] | 3.0.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.1 |
| description | String | 错误的概要描述 | 3.0.1 |
| details | String | 错误的详细信息 | 3.0.1 |
| elaboration | String | 保留字段，默认为null | 3.0.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.1 |

 # inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.1 |
| name | String | 资源名称 | 3.0.1 |
| description | String | 资源的详细描述 | 3.0.1 |
| type | String | 类型 | 3.0.1 |
| hostUuid | String | 物理机UUID | 3.0.1 |
| storagePath | String | V2V迁移镜像保存路径 | 3.0.1 |
| state | String | 状态 | 3.0.1 |
| createDate | Timestamp | 创建时间 | 3.0.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.1 |



### SDK示例

 Java SDK

```
ChangeV2VConversionHostStateAction action = new ChangeV2VConversionHostStateAction(); action.uuid = "99c4cb23248e37aeb54037578aaa120f"; action.stateEvent = "disable"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; ChangeV2VConversionHostStateAction.Result res = action.call();
```

 Python SDK

```
ChangeV2VConversionHostStateAction action = ChangeV2VConversionHostStateAction() action.uuid = "99c4cb23248e37aeb54037578aaa120f" action.stateEvent = "disable" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" ChangeV2VConversionHostStateAction.Result res = action.call()
```

---

#### V2V迁移(ConvertVmFromForeignHypervisor)



##### API请求

 URLs

```
POST zstack/v1/v2vs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "vmware://155cb773228d346ba8ed1135d48f3718",
    "name": "VM-1",
    "description": "vm migrated from foreign hypervisor",
    "conversionHostUuid": "30099212bdc030ad8c2d9634f8104fb0",
    "cpuNum": 1.0,
    "memorySize": 1.073741824E9,
    "clusterUuid": "336cdcfb4a3c3757b4fd77e7340ee322",
    "primaryStorageUuid": "40de3bc8e79c31cb9f052546e162524b",
    "l3NetworkUuids": [
      "5ad0b57788373ec7b805fd54246b1a33"
    ],
    "defaultL3NetworkUuid": "5ad0b57788373ec7b805fd54246b1a33",
    "platform": "Linux",
    "strategy": "InstantStart",
    "convertStrategy": "CapacityOptimized",
    "pauseVm": false
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"url":"vmware://155cb773228d346ba8ed1135d48f3718","name":"VM-1","description":"vm migrated from foreign hypervisor","conversionHostUuid":"30099212bdc030ad8c2d9634f8104fb0","cpuNum":1.0,"memorySize":1.073741824E9,"clusterUuid":"336cdcfb4a3c3757b4fd77e7340ee322","primaryStorageUuid":"40de3bc8e79c31cb9f052546e162524b","l3NetworkUuids":["5ad0b57788373ec7b805fd54246b1a33"],"defaultL3NetworkUuid":"5ad0b57788373ec7b805fd54246b1a33","platform":"Linux","strategy":"InstantStart","convertStrategy":"CapacityOptimized","pauseVm":false}}' http://localhost:8080/zstack/v1/v2vs
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | 源云主机路径 |  | 3.0.1 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.1 |
| conversionHostUuid (可选) | String | body(包含在**params**结构中) | V2V迁移服务器UUID |  | 3.0.1 |
| cpuNum | Integer | body(包含在**params**结构中) | CPU核数 |  | 3.0.1 |
| memorySize | Long | body(包含在**params**结构中) | 内存大小 |  | 3.0.1 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 3.0.1 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 3.0.1 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 3.0.1 |
| primaryStorageUuid | String | body(包含在**params**结构中) | 主存储UUID |  | 3.0.1 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 三层网络UUID列表 |  | 3.0.1 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认三层网络UUID |  | 3.0.1 |
| platform (可选) | String | body(包含在**params**结构中) | 平台 | Linux Windows WindowsVirtio Paravirtualization Other | 3.0.1 |
| type (可选) | String | body(包含在**params**结构中) | 云主机类型 | UserVm ApplianceVm | 3.0.1 |
| strategy (可选) | String | body(包含在**params**结构中) | V2V迁移策略，决定迁移后目标云主机是否马上启动 | InstantStart JustConvert | 3.0.1 |
| longJobName (可选) | String | body(包含在**params**结构中) | 迁移任务名称 |  | 3.0.1 |
| longJobDescription (可选) | String | body(包含在**params**结构中) | 迁移任务描述 |  | 3.0.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | V2V迁移长任务资源UUID |  | 3.0.1 |
| convertStrategy (可选) | String | body(包含在**params**结构中) | 迁移转化策略 | CapacityOptimized EfficiencyFirst | 3.6.0 |
| sshPrivKey (可选) | String | body(包含在**params**结构中) | 用于验证SSH登录的私钥 |  | 3.6.0 |
| pauseVm (可选) | boolean | body(包含在**params**结构中) | 迁移之前暂停虚拟机 |  | 3.6.0 |
| volumeFilters (可选) | List | body(包含在**params**结构中) | 云盘过滤信息 |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "58c143053914375e94529a5590c64f95"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.1 |
| inventory | LongJobInventory | 详情参考[inventory] | 3.0.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.1 |
| description | String | 错误的概要描述 | 3.0.1 |
| details | String | 错误的详细信息 | 3.0.1 |
| elaboration | String | 保留字段，默认为null | 3.0.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.1 |
| name | String | 资源名称 | 3.0.1 |
| description | String | 资源的详细描述 | 3.0.1 |
| apiId | String | 用于关联TaskProgress的APIID | 3.0.1 |
| jobName | String | 任务名称 | 3.0.1 |
| jobData | String | 任务数据 | 3.0.1 |
| jobResult | String | 任务结果 | 3.0.1 |
| targetResourceUuid | String | 目标资源UUID | 3.0.1 |
| managementNodeUuid | String | 管理节点UUID | 3.0.1 |
| createDate | Timestamp | 创建时间 | 3.0.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.1 |
| state | LongJobState | 详情参考[state] | 3.0.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.0.1 |
| ordinal | int |  | 3.0.1 |



##### SDK示例

 Java SDK

```
ConvertVmFromForeignHypervisorAction action = new ConvertVmFromForeignHypervisorAction();
action.url = "vmware://155cb773228d346ba8ed1135d48f3718";
action.name = "VM-1";
action.description = "vm migrated from foreign hypervisor";
action.conversionHostUuid = "30099212bdc030ad8c2d9634f8104fb0";
action.cpuNum = 1.0;
action.memorySize = 1.073741824E9;
action.clusterUuid = "336cdcfb4a3c3757b4fd77e7340ee322";
action.primaryStorageUuid = "40de3bc8e79c31cb9f052546e162524b";
action.l3NetworkUuids = asList("5ad0b57788373ec7b805fd54246b1a33");
action.defaultL3NetworkUuid = "5ad0b57788373ec7b805fd54246b1a33";
action.platform = "Linux";
action.strategy = "InstantStart";
action.convertStrategy = "CapacityOptimized";
action.pauseVm = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ConvertVmFromForeignHypervisorAction.Result res = action.call();
```

 Python SDK

```
ConvertVmFromForeignHypervisorAction action = ConvertVmFromForeignHypervisorAction()
action.url = "vmware://155cb773228d346ba8ed1135d48f3718"
action.name = "VM-1"
action.description = "vm migrated from foreign hypervisor"
action.conversionHostUuid = "30099212bdc030ad8c2d9634f8104fb0"
action.cpuNum = 1.0
action.memorySize = 1.073741824E9
action.clusterUuid = "336cdcfb4a3c3757b4fd77e7340ee322"
action.primaryStorageUuid = "40de3bc8e79c31cb9f052546e162524b"
action.l3NetworkUuids = [5ad0b57788373ec7b805fd54246b1a33]
action.defaultL3NetworkUuid = "5ad0b57788373ec7b805fd54246b1a33"
action.platform = "Linux"
action.strategy = "InstantStart"
action.convertStrategy = "CapacityOptimized"
action.pauseVm = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ConvertVmFromForeignHypervisorAction.Result res = action.call()
```

---

#### 删除V2V迁移服务器(DeleteV2VConversionHost)



##### API请求

 URLs

```
DELETE zstack/v1/v2v-conversion-hosts/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/v2v-conversion-hosts/5392899dcf7d351eab91ceeb6d38d4e5?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.1 |
| deleteMode (可选) | String | url |  |  | 3.0.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.1 |



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
DeleteV2VConversionHostAction action = new DeleteV2VConversionHostAction();
action.uuid = "5392899dcf7d351eab91ceeb6d38d4e5";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteV2VConversionHostAction.Result res = action.call();
```

 Python SDK

```
DeleteV2VConversionHostAction action = DeleteV2VConversionHostAction()
action.uuid = "5392899dcf7d351eab91ceeb6d38d4e5"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteV2VConversionHostAction.Result res = action.call()
```

---

#### 查询V2V迁移服务器(QueryV2VConversionHost)



##### API请求

 URLs

```
GET zstack/v1/v2v-conversion-hosts
GET zstack/v1/v2v-conversion-hosts/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/v2v-conversion-hosts?q=uuid=4fb0bf1bce02350a9a19277897bc0595
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/v2v-conversion-hosts/beb30505a0b434b68c1b68565290ebcf
```



可查询字段

运行CLI命令行工具，输入QueryV2VConversionHost并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "91f0ea12823a39dea9db5d1cab133e3f",
      "name": "V2V-Converter-01",
      "description": "to convert vm from foreign hypervisor",
      "type": "VMWARE",
      "hostUuid": "f773c300a8343774bc45e0ea3980d6da",
      "storagePath": "/path/to/large/directory/",
      "state": "Enabled"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.1 |
| inventories | List | 详情参考[inventories] | 3.0.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.1 |
| description | String | 错误的概要描述 | 3.0.1 |
| details | String | 错误的详细信息 | 3.0.1 |
| elaboration | String | 保留字段，默认为null | 3.0.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.1 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.1 |
| name | String | 资源名称 | 3.0.1 |
| description | String | 资源的详细描述 | 3.0.1 |
| type | String | 类型 | 3.0.1 |
| hostUuid | String | 物理机UUID | 3.0.1 |
| storagePath | String | V2V迁移镜像保存路径 | 3.0.1 |
| state | String | 状态 | 3.0.1 |
| createDate | Timestamp | 创建时间 | 3.0.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.1 |



##### SDK示例

 Java SDK

```
QueryV2VConversionHostAction action = new QueryV2VConversionHostAction();
action.conditions = asList("uuid=fbc030b04f5f3249bb1e6dad82489102");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryV2VConversionHostAction.Result res = action.call();
```

 Python SDK

```
QueryV2VConversionHostAction action = QueryV2VConversionHostAction()
action.conditions = ["uuid=7e845caa39013c19b3c4ea9630bdfef1"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryV2VConversionHostAction.Result res = action.call()
```

---

#### 更新V2V迁移服务器(UpdateV2VConversionHost)



##### API请求

 URLs

```
PUT zstack/v1/v2v-conversion-hosts/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateV2VConversionHost": {
    "name": "new-name",
    "description": "new description",
    "storagePath": "/path/to/new/large/directory/"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateV2VConversionHost":{"name":"new-name","description":"new description","storagePath":"/path/to/new/large/directory/"}}' http://localhost:8080/zstack/v1/v2v-conversion-hosts/077ec852bf603aa7b2ad7159e7707251/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.1 |
| name (可选) | String | body(包含在**updateV2VConversionHost**结构中) | 资源名称 |  | 3.0.1 |
| description (可选) | String | body(包含在**updateV2VConversionHost**结构中) | 资源的详细描述 |  | 3.0.1 |
| storagePath (可选) | String | body(包含在**updateV2VConversionHost**结构中) | V2V迁移镜像保存路径 |  | 3.0.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "fae22298c74b381b9dc0abcb02e7a3d7",
    "name": "new-name",
    "description": "new description",
    "type": "VMWARE",
    "hostUuid": "fd0aa0e947d535f4985fd4fef8b309e7",
    "storagePath": "/path/to/large/directory/",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.1 |
| inventory | V2VConversionHostInventory | 详情参考[inventory] | 3.0.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.1 |
| description | String | 错误的概要描述 | 3.0.1 |
| details | String | 错误的详细信息 | 3.0.1 |
| elaboration | String | 保留字段，默认为null | 3.0.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.1 |
| name | String | 资源名称 | 3.0.1 |
| description | String | 资源的详细描述 | 3.0.1 |
| type | String | 类型 | 3.0.1 |
| hostUuid | String | 物理机UUID | 3.0.1 |
| storagePath | String | V2V迁移镜像保存路径 | 3.0.1 |
| state | String | 状态 | 3.0.1 |
| createDate | Timestamp | 创建时间 | 3.0.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.1 |



##### SDK示例

 Java SDK

```
UpdateV2VConversionHostAction action = new UpdateV2VConversionHostAction();
action.uuid = "077ec852bf603aa7b2ad7159e7707251";
action.name = "new-name";
action.description = "new description";
action.storagePath = "/path/to/new/large/directory/";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateV2VConversionHostAction.Result res = action.call();
```

 Python SDK

```
UpdateV2VConversionHostAction action = UpdateV2VConversionHostAction()
action.uuid = "077ec852bf603aa7b2ad7159e7707251"
action.name = "new-name"
action.description = "new description"
action.storagePath = "/path/to/new/large/directory/"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateV2VConversionHostAction.Result res = action.call()
```
