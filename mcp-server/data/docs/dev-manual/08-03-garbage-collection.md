# 垃圾回收相关接口 - 系统全局相关

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/8.3.html*

---

## 垃圾回收相关接口

---

## 触发垃圾回收任务(TriggerGCJob)



### API请求

 URLs

```
PUT zstack/v1/gc-jobs/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "triggerGCJob": {},   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"triggerGCJob":{}}' \ http://localhost:8080/zstack/v1/gc-jobs/1450275537b53cfeba9e6ac79ebadb16/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{     "error": {         "code": "SYS.1001",         "description": "A message or a operation timeout",         "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
TriggerGCJobAction action = new TriggerGCJobAction(); action.uuid = "ff4eb99f62364bcab4cbcebe4dea7de7"; action.sessionId = "7a51dbf52d5d41b0a877491143b6937a"; TriggerGCJobAction.Result res = action.call();
```

 Python SDK

```
TriggerGCJobAction action = TriggerGCJobAction() action.uuid = "a1d1ab14128e4f7398924591915ac65c" action.sessionId = "6dcc50cb3dc5401b8ce03540a225f623" TriggerGCJobAction.Result res = action.call()
```

---

## 删除垃圾回收任务(DeleteGCJob)



### API请求

 URLs

```
DELETE zstack/v1/gc-jobs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth ea06449412a24699955ea802430000f3" \ -X DELETE http://localhost:8080/zstack/v1/gc-jobs/3a5d968dd8d743c280888a4973ea71d5
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{     "error": {         "code": "SYS.1001",         "description": "A message or a operation timeout",         "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
DeleteGCJobAction action = new DeleteGCJobAction(); action.uuid = "6bac0ebceac44a198609b0019c40a8eb"; action.sessionId = "78e46c7bfe0249fe9613223642222085"; DeleteGCJobAction.Result res = action.call();
```

 Python SDK

```
DeleteGCJobAction action = DeleteGCJobAction() action.uuid = "42db77385ebf4768bf105011ec8e6aaf" action.sessionId = "331167c4de264088862128e5043c5a93" DeleteGCJobAction.Result res = action.call()
```

---

### 查询垃圾回收任务(QueryGCJob)



#### API请求

 URLs

```
GET zstack/v1/gc-jobs
GET zstack/v1/gc-jobs/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 8a590138fd064e5b8747e9fa75dd6c63" \
-X GET http://localhost:8080/zstack/v1/gc-jobs?q=name=gc&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 68ab95870cb4460fb9c82360f9ed64b2" \
-X GET http://localhost:8080/zstack/v1/gc-jobs/b41ea820e0bd47d5a028ddb3eb10bb98
```



可查询字段

运行CLI命令行工具，输入`QueryGCJob`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "c7606f2ed20b4212aa3d1ce4e00acc1c",
      "name": "TestGC",
      "type": "TimeBased",
      "createDate": "Jun 7, 2017 9:21:16 PM",
      "lastOpDate": "Jun 7, 2017 9:21:16 PM"
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
| runnerClass | String |  | 0.6 |
| context | String |  | 0.6 |
| status | String |  | 0.6 |
| managementNodeUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryGCJobAction action = new QueryGCJobAction();
action.conditions = asList("name=gc","state=Enabled");
action.sessionId = "3b403b588a96471cbee74a19d4a846aa";
QueryGCJobAction.Result res = action.call();
```

 Python SDK

```
QueryGCJobAction action = QueryGCJobAction()
action.conditions = ["name=gc","state=Enabled"]
action.sessionId = "76af9b84c87f4dcf9aa8f9042a982a6b"
QueryGCJobAction.Result res = action.call()
```
