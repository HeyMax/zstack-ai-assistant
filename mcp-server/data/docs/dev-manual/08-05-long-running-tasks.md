# 长时任务相关接口 - 系统全局相关

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/8.5.html*

---

## 长时任务相关接口

---

## 提交长时任务(SubmitLongJob)



### API请求

 URLs

```
POST zstack/v1/longjobs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "migrate-volume",     "description": "migrate volume to another Ceph primary storage",     "jobName": "APIPrimaryStorageMigrateVolumeMsg",     "jobData": "{\"volumeUuid\":\"45a53d3d93384433add8ead7616586cf\", \"dstPrimaryStorageUuid\":\"70a0618804864b3dabe8be9824c8028c\"}",     "targetResourceUuid": "45a53d3d93384433add8ead7616586cf"   },   "systemTags": [],   "userTags": [] }
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"migrate-volume","description":"migrate volume to another Ceph primary storage","jobName":"APIPrimaryStorageMigrateVolumeMsg","jobData":"{\"volumeUuid\":\"45a53d3d93384433add8ead7616586cf\", \"dstPrimaryStorageUuid\":\"70a0618804864b3dabe8be9824c8028c\"}","targetResourceUuid":"45a53d3d93384433add8ead7616586cf"}}' \ http://localhost:8080/zstack/v1/longjobs
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| jobName | String | body(包含在**params**结构中) | 任务名称 |  | 2.3 |
| jobData | String | body(包含在**params**结构中) | 任务数据 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| targetResourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |


  - 选项格式为：`uploadImage::{IMAGE_ID}`
  - 例如：`uploadImage::68b329da9893e34099c7d8ad5cb9c940`
- 例如：`uploadImage::68b329da9893e34099c7d8ad5cb9c940`


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "uuid": "23598186b9ef35aa89fbebf8f04d497a"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | LongJobInventory | 详情参考[inventory] | 2.3 |

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
| apiId | String | 用于关联TaskProgress的APIID | 2.3 |
| jobName | String | 任务名称 | 2.3 |
| jobData | String | 任务数据 | 2.3 |
| jobResult | String | 任务结果 | 2.3 |
| targetResourceUuid | String | 目标资源UUID | 2.3 |
| managementNodeUuid | String | 管理节点UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| state | LongJobState | 详情参考[state] | 2.3 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |



### SDK示例

 Java SDK

```
SubmitLongJobAction action = new SubmitLongJobAction(); action.name = "migrate-volume"; action.description = "migrate volume to another Ceph primary storage"; action.jobName = "APIPrimaryStorageMigrateVolumeMsg"; action.jobData = "{"volumeUuid":"45a53d3d93384433add8ead7616586cf", "dstPrimaryStorageUuid":"70a0618804864b3dabe8be9824c8028c"}"; action.targetResourceUuid = "45a53d3d93384433add8ead7616586cf"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; SubmitLongJobAction.Result res = action.call();
```

 Python SDK

```
SubmitLongJobAction action = SubmitLongJobAction() action.name = "migrate-volume" action.description = "migrate volume to another Ceph primary storage" action.jobName = "APIPrimaryStorageMigrateVolumeMsg" action.jobData = "{"volumeUuid":"45a53d3d93384433add8ead7616586cf", "dstPrimaryStorageUuid":"70a0618804864b3dabe8be9824c8028c"}" action.targetResourceUuid = "45a53d3d93384433add8ead7616586cf" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" SubmitLongJobAction.Result res = action.call()
```

---

## 更新长时任务(UpdateLongJob)



### API请求

 URLs

```
PUT zstack/v1/longjobs/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "updateLongJob": {     "name": "new-name",     "description": "new-description"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"updateLongJob":{"name":"new-name","description":"new-description"}}' http://localhost:8080/zstack/v1/longjobs/dee3e1e3706f3e52a2cb9a47850508e7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.9.0 |
| name (可选) | String | body(包含在**updateLongJob**结构中) | 资源名称 |  | 3.9.0 |
| description (可选) | String | body(包含在**updateLongJob**结构中) | 资源的详细描述 |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "464cdf695427358696dae171544b67ef",     "name": "new-name",     "description": "new-description"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | LongJobInventory | 详情参考[inventory] | 3.9.0 |

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
| apiId | String | 用于关联TaskProgress的APIID | 3.9.0 |
| jobName | String | 任务名称 | 3.9.0 |
| jobData | String | 任务数据 | 3.9.0 |
| jobResult | String | 任务结果 | 3.9.0 |
| targetResourceUuid | String | 目标资源UUID | 3.9.0 |
| managementNodeUuid | String | 管理节点UUID | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| state | LongJobState | 详情参考[state] | 3.9.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Waiting | LongJobState |  | 3.9.0 |
| Suspended | LongJobState |  | 3.9.0 |
| Running | LongJobState |  | 3.9.0 |
| Succeeded | LongJobState |  | 3.9.0 |
| Canceling | LongJobState |  | 3.9.0 |
| Canceled | LongJobState |  | 3.9.0 |
| Failed | LongJobState |  | 3.9.0 |



### SDK示例

 Java SDK

```
UpdateLongJobAction action = new UpdateLongJobAction(); action.uuid = "dee3e1e3706f3e52a2cb9a47850508e7"; action.name = "new-name"; action.description = "new-description"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; UpdateLongJobAction.Result res = action.call();
```

 Python SDK

```
UpdateLongJobAction action = UpdateLongJobAction() action.uuid = "dee3e1e3706f3e52a2cb9a47850508e7" action.name = "new-name" action.description = "new-description" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" UpdateLongJobAction.Result res = action.call()
```

---

## 删除长时任务(DeleteLongJob)



### API请求

 URLs

```
DELETE zstack/v1/longjobs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/longjobs/a87ae356c6583cc7b312412337f96609?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{     "error": {         "code": "SYS.1001",         "description": "A message or a operation timeout",         "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
DeleteLongJobAction action = new DeleteLongJobAction(); action.uuid = "a87ae356c6583cc7b312412337f96609"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteLongJobAction.Result res = action.call();
```

 Python SDK

```
DeleteLongJobAction action = DeleteLongJobAction() action.uuid = "a87ae356c6583cc7b312412337f96609" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteLongJobAction.Result res = action.call()
```

---

### 查询长时任务(QueryLongJob)



#### API请求

 URLs

```
GET zstack/v1/longjobs
GET zstack/v1/longjobs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/longjobs
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/longjobs/f031e4ea64673a5f96e022f4eb81fc59
```



可查询字段

运行CLI命令行工具，输入`QueryLongJob`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "e8a3fcaa8c393684b78a6dc1b20db49f"
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
| apiId | String | 用于关联TaskProgress的APIID | 2.3 |
| jobName | String | 任务名称 | 2.3 |
| jobData | String | 任务数据 | 2.3 |
| jobResult | String | 任务结果 | 2.3 |
| targetResourceUuid | String | 目标资源UUID | 2.3 |
| managementNodeUuid | String | 管理节点UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| state | LongJobState | 详情参考[state] | 2.3 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |



#### SDK示例

 Java SDK

```
QueryLongJobAction action = new QueryLongJobAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryLongJobAction.Result res = action.call();
```

 Python SDK

```
QueryLongJobAction action = QueryLongJobAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryLongJobAction.Result res = action.call()
```
