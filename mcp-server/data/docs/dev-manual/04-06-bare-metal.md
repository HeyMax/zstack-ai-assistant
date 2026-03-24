# 裸金属管理(Plus) - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.6.html*

---

## 裸金属管理(Plus)



裸金属管理以单独的功能模块形式提供，需提前购买裸金属管理模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

## 裸金属管理相关接口

---

## 创建裸机设备(CreateBaremetalChassis)



### API请求

 URLs

```
POST zstack/v1/baremetal/chassis
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "test",     "clusterUuid": "bf598e729e61382ab2486ac40f25c425",     "ipmiAddress": "1.1.1.1",     "ipmiPort": "623.0",     "ipmiUsername": "root",     "ipmiPassword": "password"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"test","clusterUuid":"bf598e729e61382ab2486ac40f25c425","ipmiAddress":"1.1.1.1","ipmiPort":"623.0","ipmiUsername":"root","ipmiPassword":"password"}}' http://localhost:8080/zstack/v1/baremetal/chassis
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.6.0 |
| clusterUuid | String | body(包含在**params**结构中) | 集群UUID |  | 2.6.0 |
| ipmiAddress | String | body(包含在**params**结构中) | IPMI地址 |  | 2.6.0 |
| ipmiPort (可选) | Integer | body(包含在**params**结构中) | IPMI端口 |  | 2.6.0 |
| ipmiUsername | String | body(包含在**params**结构中) | IPMI用户名 |  | 2.6.0 |
| ipmiPassword | String | body(包含在**params**结构中) | IPMI密码 |  | 2.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "40fae70b4c573bdfad57d031eaba0eb0",     "ipmiAddress": "1.1.1.1",     "ipmiPort": 623.0,     "ipmiUsername": "root",     "ipmiPassword": "password",     "state": "Enabled",     "status": "HWInfoUnknown"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalChassisInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| ipmiAddress | String | IPMI地址 | 2.6.0 |
| ipmiPort | Integer | IPMI端口 | 2.6.0 |
| ipmiUsername | String | IPMI用户名 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



### SDK示例

 Java SDK

```
CreateBaremetalChassisAction action = new CreateBaremetalChassisAction(); action.name = "test"; action.clusterUuid = "bf598e729e61382ab2486ac40f25c425"; action.ipmiAddress = "1.1.1.1"; action.ipmiPort = "623.0"; action.ipmiUsername = "root"; action.ipmiPassword = "password"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
CreateBaremetalChassisAction action = CreateBaremetalChassisAction() action.name = "test" action.clusterUuid = "bf598e729e61382ab2486ac40f25c425" action.ipmiAddress = "1.1.1.1" action.ipmiPort = "623.0" action.ipmiUsername = "root" action.ipmiPassword = "password" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateBaremetalChassisAction.Result res = action.call()
```

---

## 删除裸机设备(DeleteBaremetalChassis)



### API请求

 URLs

```
DELETE zstack/v1/baremetal/chassis/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/baremetal/chassis/b4962c6429d23e93b9473f5aee202496
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



### API返回



该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ "error": {     "code": "SYS.1001",     "description": "A message or a operation timeout",     "details": "Create VM on KVM timeout after 300s" } }
```



### SDK示例

 Java SDK

```
DeleteBaremetalChassisAction action = new DeleteBaremetalChassisAction(); action.uuid = "b4962c6429d23e93b9473f5aee202496"; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
DeleteBaremetalChassisAction action = DeleteBaremetalChassisAction() action.uuid = "b4962c6429d23e93b9473f5aee202496" action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteBaremetalChassisAction.Result res = action.call()
```

---

#### 更新裸机设备(UpdateBaremetalChassis)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBaremetalChassis": {
    "name": "test",
    "ipmiAddress": "1.1.1.1",
    "ipmiPort": "623.0",
    "ipmiUsername": "root",
    "ipmiPassword": "password"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBaremetalChassis":{"name":"test","ipmiAddress":"1.1.1.1","ipmiPort":"623.0","ipmiUsername":"root","ipmiPassword":"password"}}' \
http://localhost:8080/zstack/v1/baremetal/chassis/cd68e7a048d831768c622a18accd5885/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| name (可选) | String | body(包含在**updateBaremetalChassis**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**updateBaremetalChassis**结构中) | 资源的详细描述 |  | 2.6.0 |
| ipmiAddress (可选) | String | body(包含在**updateBaremetalChassis**结构中) | IPMI地址 |  | 2.6.0 |
| ipmiPort (可选) | Integer | body(包含在**updateBaremetalChassis**结构中) | IPMI端口 |  | 2.6.0 |
| ipmiUsername (可选) | String | body(包含在**updateBaremetalChassis**结构中) | IPMI用户名 |  | 2.6.0 |
| ipmiPassword (可选) | String | body(包含在**updateBaremetalChassis**结构中) | IPMI密码 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2a0f218999633ee9a79fe655206b8671",
    "ipmiAddress": "1.1.1.1",
    "ipmiPort": "623.0",
    "ipmiUsername": "root",
    "ipmiPassword": "password",
    "state": "Enabled",
    "status": "Available"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalChassisInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| ipmiAddress | String | IPMI地址 | 2.6.0 |
| ipmiPort | Integer | IPMI端口 | 2.6.0 |
| ipmiUsername | String | IPMI用户名 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
UpdateBaremetalChassisAction action = new UpdateBaremetalChassisAction();
action.uuid = "cd68e7a048d831768c622a18accd5885";
action.name = "test";
action.ipmiAddress = "1.1.1.1";
action.ipmiPort = "623.0";
action.ipmiUsername = "root";
action.ipmiPassword = "password";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
UpdateBaremetalChassisAction action = UpdateBaremetalChassisAction()
action.uuid = "cd68e7a048d831768c622a18accd5885"
action.name = "test"
action.ipmiAddress = "1.1.1.1"
action.ipmiPort = "623.0"
action.ipmiUsername = "root"
action.ipmiPassword = "password"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBaremetalChassisAction.Result res = action.call()
```

---

#### 查询裸机设备(QueryBaremetalChassis)



##### API请求

 URLs

```
GET zstack/v1/baremetal/chassis
GET zstack/v1/baremetal/chassis/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/chassis?q=uuid=fcdbdc973fe138d991cb9e4c0c96bf24
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/chassis/74db6aa9f4593fddbe914d86510e9244
```



可查询字段

运行CLI命令行工具，输入QueryBaremetalChassis并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "adf78dd20777349f8b1a9f31b5b1de71",
      "ipmiAddress": "1.1.1.1",
      "ipmiPort": "623.0",
      "ipmiUsername": "root",
      "ipmiPassword": "password",
      "state": "Enabled",
      "status": "Available"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventories | List | 详情参考[inventories] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| ipmiAddress | String | IPMI地址 | 2.6.0 |
| ipmiPort | Integer | IPMI端口 | 2.6.0 |
| ipmiUsername | String | IPMI用户名 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
QueryBaremetalChassisAction action = new QueryBaremetalChassisAction();
action.conditions = asList("uuid=79aa822340b2328793e624e0416cc55a");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
QueryBaremetalChassisAction action = QueryBaremetalChassisAction()
action.conditions = ["uuid=41375a72ff0d381fac8f50f5b8e7a27f"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBaremetalChassisAction.Result res = action.call()
```

---

#### 批量添加裸金属设备(BatchCreateBaremetalChassis)



##### API请求

 URLs

```
POST zstack/v1/baremetal/chassis/from-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "baremetalChassisInfo": "FILE CONTENT ENCODE BY BASE64"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"baremetalChassisInfo":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/baremetal/chassis/from-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| baremetalChassisInfo | String | body(包含在**params**结构中) | 经过base64编码的裸金属设备信息 |  | 3.1.1 |
| longJobName (可选) | String | body(包含在**params**结构中) | 长任务名称 |  | 3.1.1 |
| longJobDescription (可选) | String | body(包含在**params**结构中) | 长任务简介 |  | 3.1.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.1.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.1 |



##### API返回

 返回示例

```

{
  "inventory": {
    "uuid": "cec9662c5cc534779833c89d8104aa7d",
    "name": "APIBatchCreateBaremetalChassisMsg",
    "apiId": "85ef8b327b0a3c71a53827b30892f327",
    "jobName": "APIBatchCreateBaremetalChassisMsg",
    "jobData": "{\"createMessages\":[]",
    "jobResult": "",
    "state": "Succeeded",
    "managementNodeUuid": "31c1228477b6310b9eb28a75e892b046"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.1 |
| inventory | LongJobInventory | 详情参考[inventory] | 3.1.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.1 |
| description | String | 错误的概要描述 | 3.1.1 |
| details | String | 错误的详细信息 | 3.1.1 |
| elaboration | String | 保留字段，默认为null | 3.1.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| apiId | String | 用于关联TaskProgress的APIID | 3.1.1 |
| jobName | String | 任务名称 | 3.1.1 |
| jobData | String | 任务数据 | 3.1.1 |
| jobResult | String | 任务结果 | 3.1.1 |
| targetResourceUuid | String | 目标资源UUID | 3.1.1 |
| managementNodeUuid | String | 管理节点UUID | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| state | LongJobState | 详情参考[state] | 3.1.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.1 |
| ordinal | int |  | 3.1.1 |



##### SDK示例

 Java SDK

```
BatchCreateBaremetalChassisAction action = new BatchCreateBaremetalChassisAction();
action.baremetalChassisInfo = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
BatchCreateBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
BatchCreateBaremetalChassisAction action = BatchCreateBaremetalChassisAction()
action.baremetalChassisInfo = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
BatchCreateBaremetalChassisAction.Result res = action.call()
```

---

#### 检查批量添加裸金属设备文件合法性(CheckBaremetalChassisConfigFile)



##### API请求

 URLs

```
POST /v1/baremetal/chassis/from-file/check
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "baremetalChassisInfo": "FILE CONTENT ENCODE BY BASE64"
  },
  "systemTags": [],
  "userTags": []
}
```

上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"baremetalChassisInfo":"FILE CONTENT ENCODE BY BASE64"}}' http://localhost:8080/zstack/v1/baremetal/chassis/from-file/check
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| baremetalChassisInfo | String | body(包含在**params**结构中) | 经过base64编码的裸金属设备信息 |  | 3.1.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.1 |



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
CheckBaremetalChassisConfigFileAction action = new CheckBaremetalChassisConfigFileAction();
action.baremetalChassisInfo = "FILE CONTENT ENCODE BY BASE64";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckBaremetalChassisConfigFileAction.Result res = action.call();
```

 Python SDK

```
CheckBaremetalChassisConfigFileAction action = CheckBaremetalChassisConfigFileAction()
action.baremetalChassisInfo = "FILE CONTENT ENCODE BY BASE64"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckBaremetalChassisConfigFileAction.Result res = action.call()
```

---

#### 开启裸机设备电源(PowerOnBaremetalChassis)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/chassis/{chassisUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerOnBaremetalChassis": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"powerOnBaremetalChassis":{}}' http://localhost:8080/zstack/v1/baremetal/chassis/7405d7ceb46634528618789cde730795/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisUuid | String | url | 裸机设备UUID |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
PowerOnBaremetalChassisAction action = new PowerOnBaremetalChassisAction();
action.chassisUuid = "7405d7ceb46634528618789cde730795";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerOnBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
PowerOnBaremetalChassisAction action = PowerOnBaremetalChassisAction()
action.chassisUuid = "7405d7ceb46634528618789cde730795"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerOnBaremetalChassisAction.Result res = action.call()
```

---

#### 关闭裸机设备电源(PowerOffBaremetalChassis)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/chassis/{chassisUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerOffBaremetalChassis": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"powerOffBaremetalChassis":{}}' http://localhost:8080/zstack/v1/baremetal/chassis/ee53c6d1f4ad3ebb8971aa5933d6f9d6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisUuid | String | url | 裸机设备UUID |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
PowerOffBaremetalChassisAction action = new PowerOffBaremetalChassisAction();
action.chassisUuid = "ee53c6d1f4ad3ebb8971aa5933d6f9d6";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerOffBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
PowerOffBaremetalChassisAction action = PowerOffBaremetalChassisAction()
action.chassisUuid = "ee53c6d1f4ad3ebb8971aa5933d6f9d6"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerOffBaremetalChassisAction.Result res = action.call()
```

---

#### 重启裸机设备电源(PowerResetBaremetalChassis)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/chassis/{chassisUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "powerResetBaremetalChassis": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"powerResetBaremetalChassis":{}}' http://localhost:8080/zstack/v1/baremetal/chassis/8a947fc86c0c3e1d89462722af254ddf/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisUuid | String | url | 裸机设备UUID |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
PowerResetBaremetalChassisAction action = new PowerResetBaremetalChassisAction();
action.chassisUuid = "8a947fc86c0c3e1d89462722af254ddf";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PowerResetBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
PowerResetBaremetalChassisAction action = PowerResetBaremetalChassisAction()
action.chassisUuid = "8a947fc86c0c3e1d89462722af254ddf"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PowerResetBaremetalChassisAction.Result res = action.call()
```

---

#### 获取裸机设备电源状态(GetBaremetalChassisPowerStatus)



##### API请求

 URLs

```
GET zstack/v1/baremetal/chassis/{uuid}/powerstatus
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/chassis/1fcf1caf5dae30f08ff995620a5bdffd/powerstatus
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | query | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "status": "ON"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| status | String | 电源状态 | 2.6.0 |
| success | boolean |  | 2.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| error | ErrorCode | 详情参考[error] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |



##### SDK示例

 Java SDK

```
GetBaremetalChassisPowerStatusAction action = new GetBaremetalChassisPowerStatusAction();
action.uuid = "1fcf1caf5dae30f08ff995620a5bdffd";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetBaremetalChassisPowerStatusAction.Result res = action.call();
```

 Python SDK

```
GetBaremetalChassisPowerStatusAction action = GetBaremetalChassisPowerStatusAction()
action.uuid = "1fcf1caf5dae30f08ff995620a5bdffd"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetBaremetalChassisPowerStatusAction.Result res = action.call()
```

---

#### 修改裸机设备状态(ChangeBaremetalChassisState)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeBaremetalChassisState": {
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
-X PUT -d '{"changeBaremetalChassisState":{"stateEvent":"enable"}}' http://localhost:8080/zstack/v1/baremetal/chassis/1a600f11b61e3585bbd26d06166ff640/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| stateEvent | String | body(包含在**changeBaremetalChassisState**结构中) | 状态事件 | enable disable | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "506008545fa7391cb2586ae7d6180696",
    "ipmiAddress": "1.1.1.1",
    "ipmiPort": 623.0,
    "ipmiUsername": "root",
    "ipmiPassword": "password",
    "state": "Enabled",
    "status": "Available"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalChassisInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| ipmiAddress | String | IPMI地址 | 2.6.0 |
| ipmiPort | Integer | IPMI端口 | 2.6.0 |
| ipmiUsername | String | IPMI用户名 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
ChangeBaremetalChassisStateAction action = new ChangeBaremetalChassisStateAction();
action.uuid = "1a600f11b61e3585bbd26d06166ff640";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeBaremetalChassisStateAction.Result res = action.call();
```

 Python SDK

```
ChangeBaremetalChassisStateAction action = ChangeBaremetalChassisStateAction()
action.uuid = "1a600f11b61e3585bbd26d06166ff640"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeBaremetalChassisStateAction.Result res = action.call()
```

---

#### 下发获取裸机硬件信息命令(InspectBaremetalChassis)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/chassis/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "inspectBaremetalChassis": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"inspectBaremetalChassis":{}}' http://localhost:8080/zstack/v1/baremetal/chassis/514c293bdd6c3bc38f0dd5050f85642d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 裸机设备UUID |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a4871bb97ab03c818419484564fadbfb",
    "ipmiAddress": "1.1.1.1",
    "ipmiPort": 623.0,
    "ipmiUsername": "root",
    "ipmiPassword": "password",
    "state": "Enabled",
    "status": "PxeBooting"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalChassisInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| ipmiAddress | String | IPMI地址 | 2.6.0 |
| ipmiPort | Integer | IPMI端口 | 2.6.0 |
| ipmiUsername | String | IPMI用户名 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
InspectBaremetalChassisAction action = new InspectBaremetalChassisAction();
action.uuid = "514c293bdd6c3bc38f0dd5050f85642d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
InspectBaremetalChassisAction.Result res = action.call();
```

 Python SDK

```
InspectBaremetalChassisAction action = InspectBaremetalChassisAction()
action.uuid = "514c293bdd6c3bc38f0dd5050f85642d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
InspectBaremetalChassisAction.Result res = action.call()
```

---

#### 创建裸机实例(CreateBaremetalInstance)



##### API请求

 URLs

```
POST zstack/v1/baremetal/instances
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "chassisUuid": "b79a4de35d2b346c96ac0093f2aadef1",
    "imageUuid": "2f4cf15ce5c2345999550bd13195feaf",
    "templateUuid": "7fffea7efdae39968d51ef5686c09365",
    "username": "root",
    "password": "password",
    "nicCfgs": {
      "6c:b3:11:1b:0b:1e": "fa8f784c641a3193bb070b90b2ac9e66",
      "6c:b3:11:1b:0b:1f": "ee081a7ea13e312d8191926076fba22c"
    },
    "bondingCfgs": {
      "120342ecdb913830b88553ba982edb78": "23b04081ead93f4bb6be6443755e46a5"
    },
    "customConfigurations": {
      "keyboard": "en_US",
      "hostname": "localhost"
    },
    "strategy": "InstantStart"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"BM-1","description":"This is a baremetal instance.","chassisUuid":"b79a4de35d2b346c96ac0093f2aadef1","imageUuid":"2f4cf15ce5c2345999550bd13195feaf","templateUuid":"7fffea7efdae39968d51ef5686c09365","username":"root","password":"password","nicCfgs":{"6c:b3:11:1b:0b:1e":"fa8f784c641a3193bb070b90b2ac9e66","6c:b3:11:1b:0b:1f":"ee081a7ea13e312d8191926076fba22c"},"bondingCfgs":{"120342ecdb913830b88553ba982edb78":"23b04081ead93f4bb6be6443755e46a5"},"customConfigurations":{"keyboard":"en_US","hostname":"localhost"},"strategy":"InstantStart"}}' http://localhost:8080/zstack/v1/baremetal/instances
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.6.0 |
| chassisUuid | String | body(包含在**params**结构中) | 裸机设备UUID |  | 2.6.0 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID |  | 2.6.0 |
| templateUuid (可选) | String | body(包含在**params**结构中) | 预配置模板UUID |  | 3.3.0 |
| username (可选) | String | body(包含在**params**结构中) | 系统用户 |  | 3.3.0 |
| password | String | body(包含在**params**结构中) | 系统密码 |  | 2.6.0 |
| nicCfgs (可选) | Map | body(包含在**params**结构中) | 裸机网络配置 |  | 2.6.0 |
| bondingCfgs (可选) | Map | body(包含在**params**结构中) | 网卡绑定配置 |  | 3.3.0 |
| customConfigurations (可选) | Map | body(包含在**params**结构中) | 自定义变量 |  | 3.3.0 |
| strategy (可选) | String | body(包含在**params**结构中) | 裸机实例创建策略 | InstantStart JustCreate | 2.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID。若指定，则裸机实例会以该字段值作为UUID。 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |


  - 选项格式为：`staticIp::{%s}::{%s}                                     其中第一个%s是三层网络UUID，第二个是所指定的IP地址`
  - 例如：`staticIp::f00d593dff2e4bd58473388ac411ade2::192.168.0.10`
- 例如：`staticIp::f00d593dff2e4bd58473388ac411ade2::192.168.0.10`

  - 如果没有这个TAG，则系统安装过程中如果发现目标磁盘中存在已有分区，则安装过程暂停，避免覆盖磁盘数据；
  - 如果有这个TAG，则自动清理已有分区，覆盖安装。
- 如果有这个TAG，则自动清理已有分区，覆盖安装。

  - 选项格式为：`switchInfo::{%s}::{%s}`
  - 例如：`switchInfo::mac::information1,information2`
- 例如：`switchInfo::mac::information1,information2`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1dc13c821a713f7fbfa7dd754f100a73",
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "zoneUuid": "0f67724b4dc5397ea39751fda57c4ce6",
    "clusterUuid": "7921d51dba31317e8c09d50e44abd010",
    "chassisUuid": "5183b18300e43aa784a643b86a9772b7",
    "imageUuid": "a39b3870f3ae393cadcc3b4cfb454653",
    "platform": "Linux",
    "state": "Created",
    "status": "Unprovisioned",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "bmNics": [
      {
        "uuid": "006915f4766c32ee8b09bf951dd43264",
        "baremetalInstanceUuid": "1dc13c821a713f7fbfa7dd754f100a73",
        "l3NetworkUuid": "1fa935a68b4e312aa482df27b3b759a5",
        "mac": "6c:b3:11:1b:0b:1e",
        "ip": "192.168.0.10",
        "netmask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "pxe": false
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalInstanceInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
CreateBaremetalInstanceAction action = new CreateBaremetalInstanceAction();
action.name = "BM-1";
action.description = "This is a baremetal instance.";
action.chassisUuid = "b79a4de35d2b346c96ac0093f2aadef1";
action.imageUuid = "2f4cf15ce5c2345999550bd13195feaf";
action.templateUuid = "7fffea7efdae39968d51ef5686c09365";
action.username = "root";
action.password = "password";
action.nicCfgs = [6c:b3:11:1b:0b:1e:fa8f784c641a3193bb070b90b2ac9e66, 6c:b3:11:1b:0b:1f:ee081a7ea13e312d8191926076fba22c];
action.bondingCfgs = [120342ecdb913830b88553ba982edb78:23b04081ead93f4bb6be6443755e46a5];
action.customConfigurations = [keyboard:en_US, hostname:localhost];
action.strategy = "InstantStart";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
CreateBaremetalInstanceAction action = CreateBaremetalInstanceAction()
action.name = "BM-1"
action.description = "This is a baremetal instance."
action.chassisUuid = "b79a4de35d2b346c96ac0093f2aadef1"
action.imageUuid = "2f4cf15ce5c2345999550bd13195feaf"
action.templateUuid = "7fffea7efdae39968d51ef5686c09365"
action.username = "root"
action.password = "password"
action.nicCfgs = [6c:b3:11:1b:0b:1e:fa8f784c641a3193bb070b90b2ac9e66, 6c:b3:11:1b:0b:1f:ee081a7ea13e312d8191926076fba22c]
action.bondingCfgs = [120342ecdb913830b88553ba982edb78:23b04081ead93f4bb6be6443755e46a5]
action.customConfigurations = [keyboard:en_US, hostname:localhost]
action.strategy = "InstantStart"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBaremetalInstanceAction.Result res = action.call()
```

---

#### 查询裸机实例(QueryBaremetalInstance)



##### API请求

 URLs

```
GET zstack/v1/baremetal/instances
GET zstack/v1/baremetal/instances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/instances?q=uuid = 93c50425e0ed3b2884027db70620db38
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/instances/f52fb05bdd0837bdbc28dd08a529526c
```



可查询字段

运行CLI命令行工具，输入QueryBaremetalInstance并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "9d3a2dd0d48c3220a40a66a33874f25a",
      "name": "BM-1",
      "description": "This is a baremetal instance.",
      "zoneUuid": "4d1bf4f2ab113292808be87ad9ff553b",
      "clusterUuid": "e24ee969ccc83aa287713ec2dca4e8e0",
      "chassisUuid": "da16af4bb6c43b8fba2b5ba918e0cdbb",
      "imageUuid": "70ff9f3ae5863fcfab60999afdf55219",
      "platform": "Linux",
      "state": "Running",
      "status": "Provisioned",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "bmNics": [
        {
          "uuid": "8fb718abb0bd3ce99215d446cd6dba1d",
          "baremetalInstanceUuid": "9d3a2dd0d48c3220a40a66a33874f25a",
          "l3NetworkUuid": "8b40c2c7a19e3c96b4bca63b56909898",
          "mac": "6c:b3:11:1b:0b:1e",
          "ip": "192.168.0.10",
          "netmask": "255.255.255.0",
          "gateway": "192.168.0.1",
          "pxe": false
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventories | List | 详情参考[inventories] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| baremetalBondingUuid | String | BOND UUID | 3.4.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
QueryBaremetalInstanceAction action = new QueryBaremetalInstanceAction();
action.conditions = asList("uuid = 7fac9998fb703185a8b6655af59d0d21");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
QueryBaremetalInstanceAction action = QueryBaremetalInstanceAction()
action.conditions = ["uuid = a52323ca9c6132eeb0dc607570fb988f"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBaremetalInstanceAction.Result res = action.call()
```

---

#### 启动裸机实例(StartBaremetalInstance)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "startBaremetalInstance": {
    "pxeBoot": false
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"startBaremetalInstance":{"pxeBoot":false}}' http://localhost:8080/zstack/v1/baremetal/instances/dc6931adfb8a38bf9919d46b1531e9e4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| pxeBoot (可选) | Boolean | body(包含在**startBaremetalInstance**结构中) | 是否通过网络PXE启动 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0be601277df73fa7bdb114b9ece8aec3",
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "zoneUuid": "9b4745853c913a549499e39c2f8db6c7",
    "clusterUuid": "21f709c6a9783fcb80803dece29a712a",
    "chassisUuid": "4c3e24bc9218382c83ff81e9205fdc47",
    "imageUuid": "e425f9323a4e3463b3a308c5ecca6653",
    "platform": "Linux",
    "state": "Running",
    "status": "Provisioned",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "bmNics": [
      {
        "uuid": "de7f5a22aa483de88bb3ede1c7dd071f",
        "baremetalInstanceUuid": "0be601277df73fa7bdb114b9ece8aec3",
        "l3NetworkUuid": "41ebe67163003dec94da84c6c5224037",
        "mac": "6c:b3:11:1b:0b:1e",
        "ip": "192.168.0.10",
        "netmask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "pxe": false
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalInstanceInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| baremetalBondingUuid | String | BOND UUID | 3.3.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
StartBaremetalInstanceAction action = new StartBaremetalInstanceAction();
action.uuid = "dc6931adfb8a38bf9919d46b1531e9e4";
action.pxeBoot = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
StartBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
StartBaremetalInstanceAction action = StartBaremetalInstanceAction()
action.uuid = "dc6931adfb8a38bf9919d46b1531e9e4"
action.pxeBoot = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
StartBaremetalInstanceAction.Result res = action.call()
```

---

#### 关闭裸机实例(StopBaremetalInstance)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "stopBaremetalInstance": {
    "type": "grace"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"stopBaremetalInstance":{"type":"grace"}}' http://localhost:8080/zstack/v1/baremetal/instances/d106a65de4e43667a794a0606a05f724/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| type (可选) | String | body(包含在**stopBaremetalInstance**结构中) | 裸机实例关闭方式 | grace cold | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4bf8e15fe39c3b0d8055b7074a522d2d",
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "zoneUuid": "541a4429a399336288dcbb83fe2573b4",
    "clusterUuid": "30efc0a59ac53afeb1d4d1fe2226a0a9",
    "chassisUuid": "7bd2492307033fedb5311dd23ddf2bbd",
    "imageUuid": "441390c7c83c3592ac29e6f1e38d392f",
    "platform": "Linux",
    "state": "Stopped",
    "status": "Provisioned",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "bmNics": [
      {
        "uuid": "f81e9b15830538b9b826e113146f1ed1",
        "baremetalInstanceUuid": "4bf8e15fe39c3b0d8055b7074a522d2d",
        "l3NetworkUuid": "811f43fa4f9f34b9a3a1756911ad9fc1",
        "mac": "6c:b3:11:1b:0b:1e",
        "ip": "192.168.0.10",
        "netmask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "pxe": false
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalInstanceInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| baremetalBondingUuid | String | BOND UUID | 3.4.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
StopBaremetalInstanceAction action = new StopBaremetalInstanceAction();
action.uuid = "d106a65de4e43667a794a0606a05f724";
action.type = "grace";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
StopBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
StopBaremetalInstanceAction action = StopBaremetalInstanceAction()
action.uuid = "d106a65de4e43667a794a0606a05f724"
action.type = "grace"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
StopBaremetalInstanceAction.Result res = action.call()
```

---

#### 更新裸机实例(UpdateBaremetalInstance)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBaremetalInstance": {
    "name": "BM-1-RENAMED"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBaremetalInstance":{"name":"BM-1-RENAMED"}}' http://localhost:8080/zstack/v1/baremetal/instances/eb538a2a8f17342697593ac468b93d1a/actions
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| name (可选) | String | body(包含在**updateBaremetalInstance**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**updateBaremetalInstance**结构中) | 资源的详细描述 |  | 2.6.0 |
| password (可选) | String | body(包含在**updateBaremetalInstance**结构中) | 系统ROOT密码 |  | 2.6.0 |
| platform (可选) | String | body(包含在**updateBaremetalInstance**结构中) | 系统平台 | Linux | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "30073bc1b10e3b5eba5db9e54436b1dd",
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "zoneUuid": "99b8c0883a563feb849fe7c6b0b0b97d",
    "clusterUuid": "38324d028b28352fad5236f861ba7aeb",
    "chassisUuid": "692781dfb73d32d5907ef33199d97db6",
    "imageUuid": "a54bab6133d83045a8941368520eff77",
    "platform": "Linux",
    "state": "Stopped",
    "status": "Provisioned",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "bmNics": [
      {
        "uuid": "5233971bebdd352c9d708617a23311a4",
        "baremetalInstanceUuid": "30073bc1b10e3b5eba5db9e54436b1dd",
        "l3NetworkUuid": "dce0c157a45d38209afbb615743435aa",
        "mac": "6c:b3:11:1b:0b:1e",
        "ip": "192.168.0.10",
        "netmask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "pxe": false
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalInstanceInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| baremetalBondingUuid | String | BOND UUID | 3.3.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
UpdateBaremetalInstanceAction action = new UpdateBaremetalInstanceAction();
action.uuid = "eb538a2a8f17342697593ac468b93d1a";
action.name = "BM-1-RENAMED";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
UpdateBaremetalInstanceAction action = UpdateBaremetalInstanceAction()
action.uuid = "eb538a2a8f17342697593ac468b93d1a"
action.name = "BM-1-RENAMED"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBaremetalInstanceAction.Result res = action.call()
```

---

#### 重启裸机实例(RebootBaremetalInstance)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "rebootBaremetalInstance": {
    "pxeBoot": false
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"rebootBaremetalInstance":{"pxeBoot":false}}' http://localhost:8080/zstack/v1/baremetal/instances/c3be8e4c6f783f0c9aecd9600b2c3768/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| pxeBoot (可选) | Boolean | body(包含在**rebootBaremetalInstance**结构中) | 是否通过网络PXE启动 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "227ea410fadd38668fb7dd5679d3f095",
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "zoneUuid": "946022bde3053bf29c7cbbf466241c7f",
    "clusterUuid": "a7b427907a883ae2acf0a6d408eae0e5",
    "chassisUuid": "0746a3cc213a345d89d31bfd82b00e12",
    "imageUuid": "828c0bc2e8f132bc924ed0a616860e66",
    "platform": "Linux",
    "state": "Rebooting",
    "status": "Provisioned",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "bmNics": [
      {
        "uuid": "fe99549e3f4f3683b4fb37f623de9115",
        "baremetalInstanceUuid": "227ea410fadd38668fb7dd5679d3f095",
        "l3NetworkUuid": "99f6eb7273e936f3ad638ba00b474a4b",
        "mac": "6c:b3:11:1b:0b:1e",
        "ip": "192.168.0.10",
        "netmask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "pxe": false
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalInstanceInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| baremetalBondingUuid | String | BOND UUID | 3.4.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
RebootBaremetalInstanceAction action = new RebootBaremetalInstanceAction();
action.uuid = "c3be8e4c6f783f0c9aecd9600b2c3768";
action.pxeBoot = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RebootBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
RebootBaremetalInstanceAction action = RebootBaremetalInstanceAction()
action.uuid = "c3be8e4c6f783f0c9aecd9600b2c3768"
action.pxeBoot = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RebootBaremetalInstanceAction.Result res = action.call()
```

---

#### 删除裸机实例(DestroyBaremetalInstance)



##### API请求

 URLs

```
DELETE zstack/v1/baremetal/instances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal/instances/8f34148a0cce3acf883c6f6b59eb8c0d
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
DestroyBaremetalInstanceAction action = new DestroyBaremetalInstanceAction();
action.uuid = "8f34148a0cce3acf883c6f6b59eb8c0d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DestroyBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
DestroyBaremetalInstanceAction action = DestroyBaremetalInstanceAction()
action.uuid = "8f34148a0cce3acf883c6f6b59eb8c0d"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DestroyBaremetalInstanceAction.Result res = action.call()
```

---

#### 彻底删除裸机实例(ExpungeBaremetalInstance)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "expungeBaremetalInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"expungeBaremetalInstance":{}}' http://localhost:8080/zstack/v1/baremetal/instances/1016135ece1d3b189112cea52ae84d8d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
ExpungeBaremetalInstanceAction action = new ExpungeBaremetalInstanceAction();
action.uuid = "1016135ece1d3b189112cea52ae84d8d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExpungeBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
ExpungeBaremetalInstanceAction action = ExpungeBaremetalInstanceAction()
action.uuid = "1016135ece1d3b189112cea52ae84d8d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExpungeBaremetalInstanceAction.Result res = action.call()
```

---

#### 恢复已删除的裸机实例(RecoverBaremetalInstance)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverBaremetalInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"recoverBaremetalInstance":{}}' http://localhost:8080/zstack/v1/baremetal/instances/0a71736890e437928f90415a276ca245/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "38471d80059739568ee29b580ee00314",
    "name": "BM-1",
    "description": "This is a baremetal instance.",
    "zoneUuid": "cd3f0df2f33d3d47af58fa92d45e0ed3",
    "clusterUuid": "fc7f9da7d8a53a939a4163619a2e6264",
    "chassisUuid": "36d14ed4da51339eae615f7716724d25",
    "imageUuid": "4eec69d4ae423807bf38164c6d592d86",
    "platform": "Linux",
    "state": "Stopped",
    "status": "Provisioned",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "bmNics": [
      {
        "uuid": "9e01966b83283f9b967be10fe13ce8bf",
        "baremetalInstanceUuid": "38471d80059739568ee29b580ee00314",
        "l3NetworkUuid": "294c0bcaa1e43fae9abaadef23d72e24",
        "mac": "6c:b3:11:1b:0b:1e",
        "ip": "192.168.0.10",
        "netmask": "255.255.255.0",
        "gateway": "192.168.0.1",
        "pxe": false
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalInstanceInventory | 详情参考[inventory] | 2.6.0 |

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
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| zoneUuid | String | 区域UUID | 2.6.0 |
| clusterUuid | String | 集群UUID | 2.6.0 |
| pxeServerUuid | String |  | 3.1.1 |
| chassisUuid | String | 裸机设备UUID | 2.6.0 |
| imageUuid | String | 镜像UUID | 2.6.0 |
| platform | String | 系统平台 | 2.6.0 |
| state | String |  | 2.6.0 |
| status | String |  | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| bmNics | List | 详情参考[bmNics] | 2.6.0 |

 #bmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| baremetalInstanceUuid | String | 裸机实例UUID | 2.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 2.6.0 |
| baremetalBondingUuid | String | BOND UUID | 3.4.0 |
| mac | String | MAC地址 | 2.6.0 |
| ip | String | IP地址 | 2.6.0 |
| netmask | String | 子网掩码 | 2.6.0 |
| gateway | String | 网关 | 2.6.0 |
| metadata | String |  | 2.6.0 |
| pxe | Boolean | 是否PXE启动网卡 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
RecoverBaremetalInstanceAction action = new RecoverBaremetalInstanceAction();
action.uuid = "0a71736890e437928f90415a276ca245";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RecoverBaremetalInstanceAction.Result res = action.call();
```

 Python SDK

```
RecoverBaremetalInstanceAction action = RecoverBaremetalInstanceAction()
action.uuid = "0a71736890e437928f90415a276ca245"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RecoverBaremetalInstanceAction.Result res = action.call()
```

---

#### 创建裸金属网卡绑定(CreateBaremetalBonding)



##### API请求

 URLs

```
POST zstack/v1/baremetal/network/bondings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "chassisUuid": "8a3fddc82d1536ad8f695d25d84404f2",
    "name": "bond0",
    "mode": 1.0,
    "slaves": "d4:ae:52:6e:d1:0d,d4:ae:52:6e:d1:04",
    "opts": "miimon=100",
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"chassisUuid":"8a3fddc82d1536ad8f695d25d84404f2","name":"bond0","mode":1.0,"slaves": "d4:ae:52:6e:d1:0d,d4:ae:52:6e:d1:04", "opts": "miimon=100"}}' http://localhost:8080/zstack/v1/baremetal/network/bondings
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| chassisUuid | String | body(包含在**params**结构中) | 裸金属设备UUID |  | 3.3.0 |
| name | String | body(包含在**params**结构中) | 网卡绑定名称 |  | 3.3.0 |
| mode | Integer | body(包含在**params**结构中) | 网卡绑定模式 |  | 3.3.0 |
| slaves | String | body(包含在**params**结构中) | 网卡绑定Slaves MAC地址 |  | 3.3.0 |
| opts (可选) | String | body(包含在**params**结构中) | 网卡绑定选项 |  | 3.3.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a904ce62244c415795da26028fc281b4",
    "chassisUuid": "c034b1866a754e3c88ca7d67770dc8eb",
    "name": "bond0",
    "mode": 1.0,
    "slaves": "d4:ae:52:6e:d1:0d,d4:ae:52:6e:d1:04",
    "opts": "miimon=100",
    "createDate": "Jan 8, 2019 3:06:09 PM",
    "lastOpDate": "Jan 8, 2019 3:06:09 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventory | BaremetalBondingInventory | 详情参考[inventory] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| chassisUuid | String | 裸金属设备UUID | 3.3.0 |
| name | String | 网卡绑定名称 | 3.3.0 |
| mode | Integer | 网卡绑定模式 | 3.3.0 |
| slaves | String | Slave MAC地址，逗号分隔 | 3.3.0 |
| opts | String | 网卡绑定选项 | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |



##### SDK示例

 Java SDK

```
CreateBaremetalBondingAction action = new CreateBaremetalBondingAction();
action.chassisUuid = "8a3fddc82d1536ad8f695d25d84404f2";
action.name = "bond0";
action.mode = 1.0;
action.slaves = "d4:ae:52:6e:d1:0d,d4:ae:52:6e:d1:0e";
action.opts = "miimon=100";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBaremetalBondingAction.Result res = action.call();
```

 Python SDK

```
CreateBaremetalBondingAction action = CreateBaremetalBondingAction()
action.chassisUuid = "8a3fddc82d1536ad8f695d25d84404f2"
action.name = "bond0"
action.mode = 1.0
action.slaves = "d4:ae:52:6e:d1:0d,d4:ae:52:6e:d1:0e"
action.opts = "miimon=100"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBaremetalBondingAction.Result res = action.call()
```

---

#### 查询裸金属网卡绑定(QueryBaremetalBonding)



##### API请求

 URLs

```
GET zstack/v1/baremetal/network/bondings
GET zstack/v1/baremetal/network/bondings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/network/bondings?q=uuid=10d30b226f093a4c9ccd911575406e7b
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/network/bondings/e0ea2452b6be30a6a7fbfc01dd5e70f5
```



可查询字段

运行CLI命令行工具，输入QueryBaremetalBonding并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "6880ed37f7ce4381ae611fd6965696fd",
      "chassisUuid": "59c92fcd611241eb9f55f4b721a62883",
      "name": "bond0",
      "mode": 1.0,
      "slaves": "d4:ae:52:6e:d1:0d,d4:ae:52:6e:d1:04",
      "opts": "miimon=100",
      "createDate": "Jan 8, 2019 3:05:44 PM",
      "lastOpDate": "Jan 8, 2019 3:05:44 PM"
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
| chassisUuid | String | 裸金属设备UUID | 3.4.0 |
| name | String | 网卡绑定名称 | 3.4.0 |
| mode | Integer | 网卡绑定模式 | 3.4.0 |
| slaves | String | Slave MAC地址，逗号分隔 | 3.4.0 |
| opts | String | 网卡绑定选项 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
QueryBaremetalBondingAction action = new QueryBaremetalBondingAction();
action.conditions = asList("uuid=eb879ea0b5b93f12aefb1a8bb21cf135");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBaremetalBondingAction.Result res = action.call();
```

 Python SDK

```
QueryBaremetalBondingAction action = QueryBaremetalBondingAction()
action.conditions = ["uuid=3c90a0f5fb763620ab38cc6184732ea3"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBaremetalBondingAction.Result res = action.call()
```

---

#### 添加预配置模板(AddPreconfigurationTemplate)



##### API请求

 URLs

```
POST zstack/v1/baremetal/preconfigurations
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "centos-7.2-minimal",
    "description": "centos-7.2-minimal kickstart file",
    "distribution": "centos7.2-x86_64",
    "type": "kickstart",
    "content": "..."
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"centos-7.2-minimal","description":"centos-7.2-minimal kickstart file","distribution":"centos7.2-x86_64","type":"kickstart","content":"..."}}' http://localhost:8080/zstack/v1/baremetal/preconfigurations
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在结构中) | 资源名称 |  | 3.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.4.0 |
| distribution | String | body(包含在**params**结构中) | 适用操作系统发行版 |  | 3.4.0 |
| type | String | body(包含在**params**结构中) | 模板类型 | kickstart preseed autoyast | 3.4.0 |
| content | String | body(包含在**params**结构中) | 模板内容 |  | 3.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0bfb87d3a9c842bbbf509a4b7eb6e3b2",
    "name": "centos_7_x86_64_mini_v1.cfg",
    "description": "centos-7-minimal kickstart file",
    "distribution": "centos-7-x86_64",
    "type": "kickstart",
    "content": "...",
    "md5sum": "0447e03f5a6747c0984842b5ee117a21",
    "isPredefined": false,
    "state": "Enabled",
    "createDate": "Jan 11, 2019 10:38:59 AM",
    "lastOpDate": "Jan 11, 2019 10:38:59 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | PreconfigurationTemplateInventory | 详情参考[inventory] | 3.4.0 |

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
| distribution | String | 适用操作系统发行版 | 3.4.0 |
| type | String | 模板类型 | 3.4.0 |
| content | String | 模板内容 | 3.4.0 |
| md5sum | String | 模板MD5 | 3.4.0 |
| isPredefined | Boolean | 是否系统预置 | 3.4.0 |
| state | String | 状态 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
AddPreconfigurationTemplateAction action = new AddPreconfigurationTemplateAction();
action.name = "centos-7.2-minimal";
action.description = "centos-7.2-minimal kickstart file";
action.distribution = "centos7.2-x86_64";
action.type = "kickstart";
action.content = "...";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddPreconfigurationTemplateAction.Result res = action.call();
```

 Python SDK

```
AddPreconfigurationTemplateAction action = AddPreconfigurationTemplateAction()
action.name = "centos-7.2-minimal"
action.description = "centos-7.2-minimal kickstart file"
action.distribution = "centos7.2-x86_64"
action.type = "kickstart"
action.content = "..."
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddPreconfigurationTemplateAction.Result res = action.call()
```

---

#### 修改预配置模板状态(ChangePreconfigurationTemplateState)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/preconfigurations/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changePreconfigurationTemplateState": {
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
-X PUT -d '{"changePreconfigurationTemplateState":{"stateEvent":"disable"}}' http://localhost:8080/zstack/v1/baremetal/preconfigurations/48e32bae102b30ccb921f582a33cee14/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| stateEvent | String | body(包含在**changePreconfigurationTemplateState**结构中) | 状态事件 | enable disable | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1bc7b68589b44d7eb906605ceaed3e23",
    "name": "centos_7_x86_64_mini_v1.cfg",
    "description": "centos-7-minimal kickstart file",
    "distribution": "centos-7-x86_64",
    "type": "kickstart",
    "content": "...",
    "md5sum": "b4ddb3884d63478d819b5507df6b21a8",
    "isPredefined": false,
    "state": "Enabled",
    "createDate": "Feb 28, 2019 4:55:38 PM",
    "lastOpDate": "Feb 28, 2019 4:55:38 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | PreconfigurationTemplateInventory | 详情参考[inventory] | 3.4.0 |

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
| distribution | String | 适用操作系统发行版 | 3.4.0 |
| type | String | 模板类型 | 3.4.0 |
| content | String | 模板内容 | 3.4.0 |
| md5sum | String | 模板MD5 | 3.4.0 |
| isPredefined | Boolean | 是否系统预置 | 3.4.0 |
| state | String | 状态 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
ChangePreconfigurationTemplateStateAction action = new ChangePreconfigurationTemplateStateAction();
action.uuid = "48e32bae102b30ccb921f582a33cee14";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangePreconfigurationTemplateStateAction.Result res = action.call();
```

 Python SDK

```
ChangePreconfigurationTemplateStateAction action = ChangePreconfigurationTemplateStateAction()
action.uuid = "48e32bae102b30ccb921f582a33cee14"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangePreconfigurationTemplateStateAction.Result res = action.call()
```

---

#### 删除预配置模板(DeletePreconfigurationTemplate)



##### API请求

 URLs

```
DELETE zstack/v1/baremetal/preconfigurations/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal/preconfigurations/5a236fbddd5e46a6ab6e634a5c8b8e68
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



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
DeletePreconfigurationTemplateAction action = new DeletePreconfigurationTemplateAction();
action.uuid = "d5624ed789d14c10a35bc68f0a8c803d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePreconfigurationTemplateAction.Result res = action.call();
```

 Python SDK

```
DeletePreconfigurationTemplateAction action = DeletePreconfigurationTemplateAction()
action.uuid = "45495daa9c6542fd82a4ed00e2ce6023"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePreconfigurationTemplateAction.Result res = action.call()
```

---

#### 更新预配置模板(UpdatePreconfigurationTemplate)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/preconfigurations/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updatePreconfigurationTemplate": {
    "name": "centos-7.2-minimal",
    "description": "centos-7.2-minimal kickstart file",
    "distribution": "centos7.2-x86_64",
    "type": "kickstart",
    "content": "..."
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updatePreconfigurationTemplate":{"name":"centos-7.2-minimal","description":"centos-7.2-minimal kickstart file","distribution":"centos7.2-x86_64","type":"kickstart","content":"..."}}' http://localhost:8080/zstack/v1/baremetal/preconfigurations/a4f774d88df141749f077f7df185a0e3/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.4.0 |
| name (可选) | String | body(包含在**updatePreconfigurationTemplate**结构中) | 资源名称 |  | 3.4.0 |
| description (可选) | String | body(包含在**updatePreconfigurationTemplate**结构中) | 资源的详细描述 |  | 3.4.0 |
| distribution (可选) | String | body(包含在**updatePreconfigurationTemplate**结构中) | 适用操作系统发行版 |  | 3.4.0 |
| type (可选) | String | body(包含在**updatePreconfigurationTemplate**结构中) | 模板类型 | kickstart preseed autoyast | 3.4.0 |
| content (可选) | String | body(包含在**updatePreconfigurationTemplate**结构中) | 模板内容 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "fee95538b8a64831a9f29b972bcdf165",
    "name": "centos_7_x86_64_mini_v1.cfg",
    "description": "centos-7-minimal kickstart file",
    "distribution": "centos-7-x86_64",
    "type": "kickstart",
    "content": "...",
    "md5sum": "6c5fbedaf16f4682840a3a2c9b712b21",
    "isPredefined": false,
    "state": "Enabled",
    "createDate": "Jan 11, 2019 10:38:58 AM",
    "lastOpDate": "Jan 11, 2019 10:38:58 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | PreconfigurationTemplateInventory | 详情参考[inventory] | 3.4.0 |

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
| distribution | String | 适用操作系统发行版 | 3.4.0 |
| type | String | 模板类型 | 3.4.0 |
| content | String | 模板内容 | 3.4.0 |
| md5sum | String | 模板MD5 | 3.4.0 |
| isPredefined | Boolean | 是否系统预置 | 3.4.0 |
| state | String | 状态 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
UpdatePreconfigurationTemplateAction action = new UpdatePreconfigurationTemplateAction();
action.uuid = "2dd907badf9e4ff994986173aee0402f";
action.name = "centos-7.2-minimal";
action.description = "centos-7.2-minimal kickstart file";
action.distribution = "centos7.2-x86_64";
action.type = "kickstart";
action.content = "...";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdatePreconfigurationTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdatePreconfigurationTemplateAction action = UpdatePreconfigurationTemplateAction()
action.uuid = "9abdf90afc1b4ddcbf1eb1357c6b6229"
action.name = "centos-7.2-minimal"
action.description = "centos-7.2-minimal kickstart file"
action.distribution = "centos7.2-x86_64"
action.type = "kickstart"
action.content = "..."
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdatePreconfigurationTemplateAction.Result res = action.call()
```

---

#### 查询预配置模板(QueryPreconfigurationTemplate)



##### API请求

 URLs

```
GET zstack/v1/baremetal/preconfigurations
GET zstack/v1/baremetal/preconfigurations/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/preconfigurations?q=uuid=6b34fcf11d6732ba851203bc602b46b7
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/preconfigurations/ed428c815ff43f1ebc97483767b1a6e4
```



可查询字段

运行CLI命令行工具，输入QueryPreconfigurationTemplate并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "d55e08748c1d424dbcb7b311dbff56c6",
      "name": "centos_7_x86_64_mini_v1.cfg",
      "description": "centos-7-minimal kickstart file",
      "distribution": "centos-7-x86_64",
      "type": "kickstart",
      "content": "...",
      "md5sum": "7a5bf28bb4164419923a98a63a34680f",
      "isPredefined": false,
      "state": "Enabled",
      "createDate": "Feb 28, 2019 4:55:50 PM",
      "lastOpDate": "Feb 28, 2019 4:55:50 PM"
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
| name | String | 资源名称 | 3.4.0 |
| description | String | 资源的详细描述 | 3.4.0 |
| distribution | String | 适用操作系统发行版 | 3.4.0 |
| type | String | 模板类型 | 3.4.0 |
| content | String | 模板内容 | 3.4.0 |
| md5sum | String | 模板MD5 | 3.4.0 |
| isPredefined | Boolean | 是否系统预置 | 3.4.0 |
| state | String | 状态 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
QueryPreconfigurationTemplateAction action = new QueryPreconfigurationTemplateAction();
action.conditions = asList("uuid=c3cd8741c2fb3ba88f0493ec77b8fad6");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPreconfigurationTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryPreconfigurationTemplateAction action = QueryPreconfigurationTemplateAction()
action.conditions = ["uuid=deb4635e9984326b818d0433dfd78576"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPreconfigurationTemplateAction.Result res = action.call()
```

---

### 安装服务相关接口

---

#### 创建部署服务器(CreateBaremetalPxeServer)



##### API请求

 URLs

```
POST zstack/v1/baremetal/pxeservers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "4d813a1e8053335d931094e4f41c0cad",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"zoneUuid":"4d813a1e8053335d931094e4f41c0cad","name":"test","hostname":"127.0.0.1","sshUsername":"root","sshPassword":"password","sshPort":22.0,"storagePath":"/cloud_bm_cache","dhcpInterface":"eth0","dhcpRangeBegin":"10.0.0.1","dhcpRangeEnd":"10.0.0.255","dhcpRangeNetmask":"255.255.255.0"}}' http://localhost:8080/zstack/v1/baremetal/pxeservers
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.1.1 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.1.1 |
| dhcpInterface | String | body(包含在**params**结构中) | DHCP请求监听网卡 |  | 3.1.1 |
| dhcpRangeBegin (可选) | String | body(包含在**params**结构中) | DHCP地址范围起始 |  | 3.1.1 |
| dhcpRangeEnd (可选) | String | body(包含在**params**结构中) | DHCP地址范围终止 |  | 3.1.1 |
| dhcpRangeNetmask (可选) | String | body(包含在**params**结构中) | DHCP地址范围掩码 |  | 3.1.1 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 3.1.1 |
| hostname | String | body(包含在**params**结构中) |  |  | 3.1.1 |
| sshUsername | String | body(包含在**params**结构中) |  |  | 3.1.1 |
| sshPassword | String | body(包含在**params**结构中) |  |  | 3.1.1 |
| sshPort (可选) | Integer | body(包含在**params**结构中) |  |  | 3.1.1 |
| storagePath | String | body(包含在**params**结构中) |  |  | 3.1.1 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e958961c7785304691d49ec5ac7df64d",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Connecting"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.1 |
| inventory | BaremetalPxeServerInventory | 详情参考[inventory] | 3.1.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.1 |
| description | String | 错误的概要描述 | 3.1.1 |
| details | String | 错误的详细信息 | 3.1.1 |
| elaboration | String | 保留字段，默认为null | 3.1.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| zoneUuid | String | 区域UUID | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| hostname | String | 部署服务器地址 | 3.1.1 |
| sshUsername | String | 部署服务器SSH账户 | 3.1.1 |
| sshPassword | String | 部署服务器SSH密码 | 3.1.1 |
| sshPort | Integer | 部署服务器SSH端口 | 3.1.1 |
| storagePath | String | 部署服务器存储路径 | 3.1.1 |
| dhcpInterface | String | DHCP请求监听网卡 | 3.1.1 |
| dhcpInterfaceAddress | String | DHCP请求监听网卡IP | 3.1.1 |
| dhcpRangeBegin | String | DHCP地址范围起始 | 3.1.1 |
| dhcpRangeEnd | String | DHCP地址范围终止 | 3.1.1 |
| dhcpRangeNetmask | String | DHCP子网掩码 | 3.1.1 |
| state | String | 部署服务器运行状态 | 3.1.1 |
| status | String | 部署服务器连接状态 | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| totalCapacity | Long | 存储路径总容量 | 3.1.1 |
| availableCapacity | Long | 存储路径可用容量 | 3.1.1 |
| attachedClusterUuids | List | 部署服务器挂载集群UUID列表 | 3.1.1 |



##### SDK示例

 Java SDK

```
CreateBaremetalPxeServerAction action = new CreateBaremetalPxeServerAction();
action.zoneUuid = "4d813a1e8053335d931094e4f41c0cad";
action.name = "test";
action.hostname = "127.0.0.1";
action.sshUsername = "root";
action.sshPassword = "password";
action.sshPort = 22.0;
action.storagePath = "/cloud_bm_cache";
action.dhcpInterface = "eth0";
action.dhcpRangeBegin = "10.0.0.1";
action.dhcpRangeEnd = "10.0.0.255";
action.dhcpRangeNetmask = "255.255.255.0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
CreateBaremetalPxeServerAction action = CreateBaremetalPxeServerAction()
action.zoneUuid = "4d813a1e8053335d931094e4f41c0cad"
action.name = "test"
action.hostname = "127.0.0.1"
action.sshUsername = "root"
action.sshPassword = "password"
action.sshPort = 22.0
action.storagePath = "/cloud_bm_cache"
action.dhcpInterface = "eth0"
action.dhcpRangeBegin = "10.0.0.1"
action.dhcpRangeEnd = "10.0.0.255"
action.dhcpRangeNetmask = "255.255.255.0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateBaremetalPxeServerAction.Result res = action.call()
```

---

#### 删除部署服务器(DeleteBaremetalPxeServer)



##### API请求

 URLs

```
DELETE zstack/v1/baremetal/pxeservers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/baremetal/pxeservers/da517231390c368b91440d0bda783ba1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
DeleteBaremetalPxeServerAction action = new DeleteBaremetalPxeServerAction();
action.uuid = "da517231390c368b91440d0bda783ba1";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
DeleteBaremetalPxeServerAction action = DeleteBaremetalPxeServerAction()
action.uuid = "da517231390c368b91440d0bda783ba1"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteBaremetalPxeServerAction.Result res = action.call()
```

---

#### 查询部署服务器(QueryBaremetalPxeServer)



##### API请求

 URLs

```
GET zstack/v1/baremetal/pxeservers
GET zstack/v1/baremetal/pxeservers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/pxeservers?q=uuid=b56be5d49df637308e7db1ae725a311e
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/baremetal/pxeservers/fdefdaf042463cfb8939563c5f910c8f
```



可查询字段

运行CLI命令行工具，输入QueryBaremetalPxeServer并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "90afdd2b218b376592a25421e396597e",
      "name": "test",
      "hostname": "127.0.0.1",
      "sshUsername": "root",
      "sshPassword": "password",
      "sshPort": 22.0,
      "storagePath": "/cloud_bm_cache",
      "dhcpInterface": "eth0",
      "dhcpRangeBegin": "10.0.0.1",
      "dhcpRangeEnd": "10.0.0.255",
      "dhcpRangeNetmask": "255.255.255.0",
      "state": "Enabled",
      "status": "Connected"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventories | List | 详情参考[inventories] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| zoneUuid | String | 区域UUID | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| hostname | String | 部署服务器地址 | 3.1.1 |
| sshUsername | String | 部署服务器SSH账户 | 3.1.1 |
| sshPassword | String | 部署服务器SSH密码 | 3.1.1 |
| sshPort | Integer | 部署服务器SSH端口 | 3.1.1 |
| storagePath | String | 部署服务器存储路径 | 3.1.1 |
| dhcpInterface | String | DHCP请求监听网卡 | 3.1.1 |
| dhcpRangeBegin | String | DHCP地址范围起始 | 3.1.1 |
| dhcpRangeEnd | String | DHCP地址范围终止 | 3.1.1 |
| dhcpRangeNetmask | String | DHCP子网掩码 | 3.1.1 |
| state | String | 部署服务器运行状态 | 3.1.1 |
| status | String | 部署服务器连接状态 | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| totalCapacity | Long | 存储路径总容量 | 3.1.1 |
| availableCapacity | Long | 存储路径可用容量 | 3.1.1 |
| attachedClusterUuids | List | 部署服务器挂载集群UUID列表 | 3.1.1 |



##### SDK示例

 Java SDK

```
QueryBaremetalPxeServerAction action = new QueryBaremetalPxeServerAction();
action.conditions = asList("uuid=543c0df623633fe0a0158e955b1a5702");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
QueryBaremetalPxeServerAction action = QueryBaremetalPxeServerAction()
action.conditions = ["uuid=a065f4830c9f301ead495e941ce7bd4e"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryBaremetalPxeServerAction.Result res = action.call()
```

---

#### 启动部署服务器(StartBaremetalPxeServer)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/pxeservers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "startBaremetalPxeServer": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"startBaremetalPxeServer":{}}' http://localhost:8080/zstack/v1/baremetal/pxeservers/340b1f6b12ab305aa05c12ded00020e7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ac3a53373cfd328b8932bdd29f4886dd",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Connected"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |



##### SDK示例

 Java SDK

```
StartBaremetalPxeServerAction action = new StartBaremetalPxeServerAction();
action.uuid = "340b1f6b12ab305aa05c12ded00020e7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
StartBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
StartBaremetalPxeServerAction action = StartBaremetalPxeServerAction()
action.uuid = "340b1f6b12ab305aa05c12ded00020e7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
StartBaremetalPxeServerAction.Result res = action.call()
```

---

#### 停止部署服务器(StopBaremetalPxeServer)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/pxeservers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "stopBaremetalPxeServer": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"stopBaremetalPxeServer":{}}' http://localhost:8080/zstack/v1/baremetal/pxeservers/26a3032ad77330df8de53c6d89f02f12/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "743173fddfb0319fa9b21827875c1341",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Disconnected"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |



##### SDK示例

 Java SDK

```
StopBaremetalPxeServerAction action = new StopBaremetalPxeServerAction();
action.uuid = "26a3032ad77330df8de53c6d89f02f12";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
StopBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
StopBaremetalPxeServerAction action = StopBaremetalPxeServerAction()
action.uuid = "26a3032ad77330df8de53c6d89f02f12"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
StopBaremetalPxeServerAction.Result res = action.call()
```

---

#### 更新部署服务器(UpdateBaremetalPxeServer)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/pxeservers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateBaremetalPxeServer": {
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpRangeBegin": "10.0.0.200",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Connected"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateBaremetalPxeServer":{"name":"test","dhcpRangeBegin":"10.0.0.200","dhcpRangeNetmask":"255.255.255.0"}}' http://localhost:8080/zstack/v1/baremetal/pxeservers/da1ddf8e5ca838ea9fa55f20946dded6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| name (可选) | String | body(包含在**updateBaremetalPxeServer**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**updateBaremetalPxeServer**结构中) | 资源的详细描述 |  | 2.6.0 |
| dhcpInterface (可选) | String | body(包含在**updateBaremetalPxeServer**结构中) | DHCP请求监听网卡 |  | 2.6.0 |
| dhcpRangeBegin (可选) | String | body(包含在**updateBaremetalPxeServer**结构中) | DHCP地址范围起始 |  | 2.6.0 |
| dhcpRangeEnd (可选) | String | body(包含在**updateBaremetalPxeServer**结构中) | DHCP地址范围终止 |  | 2.6.0 |
| dhcpRangeNetmask (可选) | String | body(包含在**updateBaremetalPxeServer**结构中) | DHCP地址范围掩码 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1a88afcfd21b35aa82da9f4b734826b7",
    "name": "test",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | BaremetalPxeServerInventory | 详情参考[inventory] | 2.6.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| zoneUuid | String | 区域UUID | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| hostname | String | 部署服务器地址 | 3.1.1 |
| sshUsername | String | 部署服务器SSH账户 | 3.1.1 |
| sshPassword | String | 部署服务器SSH密码 | 3.1.1 |
| sshPort | Integer | 部署服务器SSH端口 | 3.1.1 |
| storagePath | String | 部署服务器存储路径 | 3.1.1 |
| dhcpInterface | String | DHCP请求监听网卡 | 3.1.1 |
| dhcpRangeBegin | String | DHCP地址范围起始 | 3.1.1 |
| dhcpRangeEnd | String | DHCP地址范围终止 | 3.1.1 |
| dhcpRangeNetmask | String | DHCP子网掩码 | 3.1.1 |
| state | String | 部署服务器运行状态 | 3.1.1 |
| status | String | 部署服务器连接状态 | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| totalCapacity | Long | 存储路径总容量 | 3.1.1 |
| availableCapacity | Long | 存储路径可用容量 | 3.1.1 |
| attachedClusterUuids | List | 部署服务器挂载集群UUID列表 | 3.1.1 |



##### SDK示例

 Java SDK

```
UpdateBaremetalPxeServerAction action = new UpdateBaremetalPxeServerAction();
action.uuid = "da1ddf8e5ca838ea9fa55f20946dded6";
action.name = "test";
action.dhcpRangeBegin = "10.0.0.200";
action.dhcpRangeNetmask = "255.255.255.0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
UpdateBaremetalPxeServerAction action = UpdateBaremetalPxeServerAction()
action.uuid = "da1ddf8e5ca838ea9fa55f20946dded6"
action.name = "test"
action.dhcpRangeBegin = "10.0.0.200"
action.dhcpRangeNetmask = "255.255.255.0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateBaremetalPxeServerAction.Result res = action.call()
```

---

#### 重连部署服务器(ReconnectBaremetalPxeServer)



##### API请求

 URLs

```
PUT zstack/v1/baremetal/pxeservers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reconnectBaremetalPxeServer": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reconnectBaremetalPxeServer":{}}' http://localhost:8080/zstack/v1/baremetal/pxeservers/65273a162ba83a4d99abc6ede60e6eeb/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "95c83db8181c31ea84f2ed95b3800501",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Connected"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.1 |
| inventory | BaremetalPxeServerInventory | 详情参考[inventory] | 3.1.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.1 |
| description | String | 错误的概要描述 | 3.1.1 |
| details | String | 错误的详细信息 | 3.1.1 |
| elaboration | String | 保留字段，默认为null | 3.1.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| zoneUuid | String | 区域UUID | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| hostname | String | 部署服务器地址 | 3.1.1 |
| sshUsername | String | 部署服务器SSH账户 | 3.1.1 |
| sshPassword | String | 部署服务器SSH密码 | 3.1.1 |
| sshPort | Integer | 部署服务器SSH端口 | 3.1.1 |
| storagePath | String | 部署服务器存储路径 | 3.1.1 |
| dhcpInterface | String | DHCP请求监听网卡 | 3.1.1 |
| dhcpRangeBegin | String | DHCP地址范围起始 | 3.1.1 |
| dhcpRangeEnd | String | DHCP地址范围终止 | 3.1.1 |
| dhcpRangeNetmask | String | DHCP子网掩码 | 3.1.1 |
| state | String | 部署服务器运行状态 | 3.1.1 |
| status | String | 部署服务器连接状态 | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| totalCapacity | Long | 存储路径总容量 | 3.1.1 |
| availableCapacity | Long | 存储路径可用容量 | 3.1.1 |
| attachedClusterUuids | List | 部署服务器挂载集群UUID列表 | 3.1.1 |



##### SDK示例

 Java SDK

```
ReconnectBaremetalPxeServerAction action = new ReconnectBaremetalPxeServerAction();
action.uuid = "65273a162ba83a4d99abc6ede60e6eeb";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReconnectBaremetalPxeServerAction.Result res = action.call();
```

 Python SDK

```
ReconnectBaremetalPxeServerAction action = ReconnectBaremetalPxeServerAction()
action.uuid = "65273a162ba83a4d99abc6ede60e6eeb"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReconnectBaremetalPxeServerAction.Result res = action.call()
```

---

#### 将部署服务器加载至裸金属集群(AttachBaremetalPxeServerToCluster)



##### API请求

 URLs

```
POST zstack/v1/clusters/{clusterUuid}/pxeservers/{pxeServerUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/clusters/47b43452a77a309e9c9e1b3b23a9e978/pxeservers/b069eaeb0e2c355aaabca9738fb8332b
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pxeServerUuid | String | url | 部署服务器UUID |  | 3.1.1 |
| clusterUuid | String | url | 裸金属集群UUID |  | 3.1.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "976aafa241603b26acb48dce89e29dec",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Disconnected"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.1 |
| inventory | BaremetalPxeServerInventory | 详情参考[inventory] | 3.1.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.1 |
| description | String | 错误的概要描述 | 3.1.1 |
| details | String | 错误的详细信息 | 3.1.1 |
| elaboration | String | 保留字段，默认为null | 3.1.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| zoneUuid | String | 区域UUID | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| hostname | String | 部署服务器地址 | 3.1.1 |
| sshUsername | String | 部署服务器SSH账户 | 3.1.1 |
| sshPassword | String | 部署服务器SSH密码 | 3.1.1 |
| sshPort | Integer | 部署服务器SSH端口 | 3.1.1 |
| storagePath | String | 部署服务器存储路径 | 3.1.1 |
| dhcpInterface | String | DHCP请求监听网卡 | 3.1.1 |
| dhcpRangeBegin | String | DHCP地址范围起始 | 3.1.1 |
| dhcpRangeEnd | String | DHCP地址范围终止 | 3.1.1 |
| dhcpRangeNetmask | String | DHCP子网掩码 | 3.1.1 |
| state | String | 部署服务器运行状态 | 3.1.1 |
| status | String | 部署服务器连接状态 | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| totalCapacity | Long | 存储路径总容量 | 3.1.1 |
| availableCapacity | Long | 存储路径可用容量 | 3.1.1 |
| attachedClusterUuids | List | 部署服务器挂载集群UUID列表 | 3.1.1 |



##### SDK示例

 Java SDK

```
AttachBaremetalPxeServerToClusterAction action = new AttachBaremetalPxeServerToClusterAction();
action.pxeServerUuid = "b069eaeb0e2c355aaabca9738fb8332b";
action.clusterUuid = "47b43452a77a309e9c9e1b3b23a9e978";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachBaremetalPxeServerToClusterAction.Result res = action.call();
```

 Python SDK

```
AttachBaremetalPxeServerToClusterAction action = AttachBaremetalPxeServerToClusterAction()
action.pxeServerUuid = "b069eaeb0e2c355aaabca9738fb8332b"
action.clusterUuid = "47b43452a77a309e9c9e1b3b23a9e978"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachBaremetalPxeServerToClusterAction.Result res = action.call()
```

---

#### 从裸金属集群卸载部署服务器(DetachBaremetalPxeServerFromCluster)



##### API请求

 URLs

```
DELETE zstack/v1/clusters/{clusterUuid}/pxeservers/{pxeServerUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/clusters/42ade7c792e43f138f8b693294ad9b4c/pxeservers/2e9c8220a3ea3dbf9f8c3cb66567ff52
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| pxeServerUuid | String | url | 部署服务器UUID |  | 3.1.1 |
| clusterUuid | String | url | 裸金属集群UUID |  | 3.1.1 |
| systemTags (可选) | List | body | 系统标签 |  | 3.1.1 |
| userTags (可选) | List | body | 用户标签 |  | 3.1.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bcd0703a8bbb394fa4e819ad90297b48",
    "name": "test",
    "hostname": "127.0.0.1",
    "sshUsername": "root",
    "sshPassword": "password",
    "sshPort": 22.0,
    "storagePath": "/cloud_bm_cache",
    "dhcpInterface": "eth0",
    "dhcpRangeBegin": "10.0.0.1",
    "dhcpRangeEnd": "10.0.0.255",
    "dhcpRangeNetmask": "255.255.255.0",
    "state": "Enabled",
    "status": "Disconnected"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.1 |
| inventory | BaremetalPxeServerInventory | 详情参考[inventory] | 3.1.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.1 |
| description | String | 错误的概要描述 | 3.1.1 |
| details | String | 错误的详细信息 | 3.1.1 |
| elaboration | String | 保留字段，默认为null | 3.1.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.1 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.1 |
| zoneUuid | String | 区域UUID | 3.1.1 |
| name | String | 资源名称 | 3.1.1 |
| description | String | 资源的详细描述 | 3.1.1 |
| hostname | String | 部署服务器地址 | 3.1.1 |
| sshUsername | String | 部署服务器SSH账户 | 3.1.1 |
| sshPassword | String | 部署服务器SSH密码 | 3.1.1 |
| sshPort | Integer | 部署服务器SSH端口 | 3.1.1 |
| storagePath | String | 部署服务器存储路径 | 3.1.1 |
| dhcpInterface | String | DHCP请求监听网卡 | 3.1.1 |
| dhcpRangeBegin | String | DHCP地址范围起始 | 3.1.1 |
| dhcpRangeEnd | String | DHCP地址范围终止 | 3.1.1 |
| dhcpRangeNetmask | String | DHCP子网掩码 | 3.1.1 |
| state | String | 部署服务器运行状态 | 3.1.1 |
| status | String | 部署服务器连接状态 | 3.1.1 |
| createDate | Timestamp | 创建时间 | 3.1.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.1 |
| totalCapacity | Long | 存储路径总容量 | 3.1.1 |
| availableCapacity | Long | 存储路径可用容量 | 3.1.1 |
| attachedClusterUuids | List | 部署服务器挂载集群UUID列表 | 3.1.1 |



##### SDK示例

 Java SDK

```
DetachBaremetalPxeServerFromClusterAction action = new DetachBaremetalPxeServerFromClusterAction();
action.pxeServerUuid = "2e9c8220a3ea3dbf9f8c3cb66567ff52";
action.clusterUuid = "42ade7c792e43f138f8b693294ad9b4c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachBaremetalPxeServerFromClusterAction.Result res = action.call();
```

 Python SDK

```
DetachBaremetalPxeServerFromClusterAction action = DetachBaremetalPxeServerFromClusterAction()
action.pxeServerUuid = "2e9c8220a3ea3dbf9f8c3cb66567ff52"
action.clusterUuid = "42ade7c792e43f138f8b693294ad9b4c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachBaremetalPxeServerFromClusterAction.Result res = action.call()
```
