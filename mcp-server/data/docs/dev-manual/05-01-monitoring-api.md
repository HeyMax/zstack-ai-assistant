# 云平台监控相关接口 - 平台运维

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/5.1.html*

---

## 云平台监控相关接口

---

## 监控报警/通知服务

---

## 监控报警相关接口

---

## 时序数据（Metric）

---

#### 获取所有metric元数据(GetAllMetricMetadata)



##### API请求

 URLs

```
GET zstack/v1/zwatch/metrics/meta-data
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/metrics/meta-data?name=VMHAProcess
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | query | 监控指标名称 |  | 3.9.0 |
| namespace (可选) | String | query | 监控指标命名空间 |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "metrics": [
    {
      "namespace": "ZStack/VM",
      "name": "org.zstack.zwatch.datatype.Metric@4efa6b58",
      "description": "CPUIdleUtilization",
      "labelNames": [
        "VMUuid",
        "CPUNum"
      ],
      "driver": "PrometheusDatabaseDriver"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| metrics | List | 详情参考[metrics] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #metrics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| namespace | String | 名字空间 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 描述 | 3.9.0 |
| labelNames | List | 标签名 | 2.3 |



##### SDK示例

 Java SDK

```
GetAllMetricMetadataAction action = new GetAllMetricMetadataAction();
action.name = "VMHAProcess";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetAllMetricMetadataAction.Result res = action.call();
```

 Python SDK

```
GetAllMetricMetadataAction action = GetAllMetricMetadataAction()
action.name = "VMHAProcess"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetAllMetricMetadataAction.Result res = action.call()
```

---

#### 获取metric的标签值(GetMetricLabelValue)



##### API请求

 URLs

```
GET zstack/v1/zwatch/metrics/label-values
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/metrics/label-values?namespace=ZStack/VM&metricName=CPUIdleUtilization&startTime=1.58806818E9&endTime=1.58806824E9&labelNames=CPUNum&filterLabels=VMUuid=e47f7145f4cd4fca8e2856038ecdf3e1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| namespace | String | query | 名字空间名称 |  | 2.3 |
| metricName | String | query | 监控指标名称 |  | 2.3 |
| labelNames | List | query | 要获取值得标签名列表 |  | 2.3 |
| filterLabels (可选) | List | query | 标签过滤器列表，例如可以指定标签HostUuid=e47f7145f4cd4fca8e2856038ecdf3e1来选择特定物理机的，labelNames中指定标签的值 |  | 2.3 |
| startTime (可选) | Long | query | 起始时间 |  | 3.9.0 |
| endTime (可选) | Long | query | 结束时间 |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "labels": [
    {
      "VMUuid": "e47f7145f4cd4fca8e2856038ecdf3e1",
      "CPUNum": "1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| labels | List | 标签值 | 0.6 |
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
GetMetricLabelValueAction action = new GetMetricLabelValueAction();
action.namespace = "ZStack/VM";
action.metricName = "CPUIdleUtilization";
action.startTime = 1.58806818E9;
action.endTime = 1.58806824E9;
action.labelNames = asList("CPUNum");
action.filterLabels = asList("VMUuid=e47f7145f4cd4fca8e2856038ecdf3e1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetMetricLabelValueAction.Result res = action.call();
```

 Python SDK

```
GetMetricLabelValueAction action = GetMetricLabelValueAction()
action.namespace = "ZStack/VM"
action.metricName = "CPUIdleUtilization"
action.startTime = 1.58806818E9
action.endTime = 1.58806824E9
action.labelNames = [CPUNum]
action.filterLabels = [VMUuid=e47f7145f4cd4fca8e2856038ecdf3e1]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetMetricLabelValueAction.Result res = action.call()
```

---

#### 获取metric数据(GetMetricData)



##### API请求

 URLs

```
GET zstack/v1/zwatch/metrics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/metrics?namespace=ZStack/VM&metricName=CPUIdleUtilization&startTime=
1.588831825415E12&period=30.0&labels=VMUuid=b89391d8b93b470a99055001a4383cc7&labels=CPUNum=4
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| namespace | String | query | 名字空间 |  | 2.3 |
| metricName | String | query | 监控项 |  | 2.3 |
| startTime (可选) | Long | query | 起始时间 |  | 2.3 |
| endTime (可选) | Long | query | 结束时间 |  | 2.3 |
| period (可选) | Integer | query | 数据精度 |  | 2.3 |
| labels (可选) | List | query | 过滤标签 |  | 2.3 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |
| functions (可选) | List | query | 函数列表 |  | 2.3 |
| offsetAheadOfCurrentTime (可选) | Long | query |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "data": [
    {
      "value": 101.02,
      "time": 1.519829245957E12,
      "labels": {
        "VMUuid": "9304ab73d9b84852ad1d5061fd4760a5"
      }
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| data | List | 详情参考[data] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #data

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| value | double | 监控值 | 0.6 |
| time | long | 记录生成时间 | 0.6 |
| labels | Map | 标签 | 0.6 |



##### SDK示例

 Java SDK

```
GetMetricDataAction action = new GetMetricDataAction();
action.namespace = "ZStack/VM";
action.metricName = "CPUIdleUtilization";
action.startTime = 1.519829246005E12;
action.period = 30.0;
action.labels = asList("VMUuid=3bb5b754320a4331bd907f10d8683568","CPUNum=4");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetMetricDataAction.Result res = action.call();
```

 Python SDK

```
GetMetricDataAction action = GetMetricDataAction()
action.namespace = "ZStack/VM"
action.metricName = "CPUIdleUtilization"
action.startTime = 1.519829246005E12
action.period = 30.0
action.labels = [VMUuid=b577cfe6aad447c1b2e793fdc6d7975b, CPUNum=4]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetMetricDataAction.Result res = action.call()
```

---

#### 存入自定义metric数据(PutMetricData)



##### API请求

 URLs

```
POST zstack/v1/zwatch/metrics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "namespace": "MyNameSpace",
    "data": [
      {
        "metricName": "UserDefinedName",
        "value": 100.01,
        "labels": {
          "label1": "value1"
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
-X POST -d '{"params":{"namespace":"MyNameSpace","data":[{"metricName":"UserDefinedName","value":100.01,"labels":{"label1":"value1"}}]}}' \
http://localhost:8080/zstack/v1/zwatch/metrics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| namespace | String | body(包含在**params**结构中) | 自定义名字空间名称 |  | 2.3 |
| data | List | body(包含在**params**结构中) | 数据 |  | 2.3 |
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
PutMetricDataAction action = new PutMetricDataAction();
action.namespace = "MyNameSpace";
action.data = asList([metricName:UserDefinedName, value:100.01, labels:[label1:value1]]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PutMetricDataAction.Result res = action.call();
```

 Python SDK

```
PutMetricDataAction action = PutMetricDataAction()
action.namespace = "MyNameSpace"
action.data = [[metricName:UserDefinedName, value:100.01, labels:[label1:value1]]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PutMetricDataAction.Result res = action.call()
```

---

#### 事件（Event）

---

#### 获取所有event元数据(GetAllEventMetadata)



##### API请求

 URLs

```
GET zstack/v1/zwatch/events/meta-data
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/events/meta-data?name=VMHAProcess
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | query | 事件名称 |  | 3.9.0 |
| namespace (可选) | String | query | 事件命名空间 |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "events": [
    {
      "namespace": "ZStack/VM",
      "name": "org.zstack.zwatch.datatype.EventFamily@631b5229",
      "description": "VMHAProcess",
      "labelNames": [
        "HAProcess",
        "HADetails"
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| events | List | 详情参考[events] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #events

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| namespace | String | 名字空间 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 描述 | 3.9.0 |
| labelNames | List | 标签名 | 2.3 |



##### SDK示例

 Java SDK

```
GetAllEventMetadataAction action = new GetAllEventMetadataAction();
action.name = "VMHAProcess";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetAllEventMetadataAction.Result res = action.call();
```

 Python SDK

```
GetAllEventMetadataAction action = GetAllEventMetadataAction()
action.name = "VMHAProcess"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetAllEventMetadataAction.Result res = action.call()
```

---

#### 获取事件(GetEventData)



##### API请求

 URLs

```
GET zstack/v1/zwatch/events
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/events?startTime=1.596444516295E12&limit=10.0&conditions=HostUuid=99ca12b945a8489c93a3412cbc744193&count=false&start=0.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| startTime (可选) | Long | query | 起始时间 |  | 2.3 |
| endTime (可选) | Long | query | 结束时间 |  | 2.3 |
| limit (可选) | Integer | query | 最大返回条数 |  | 2.3 |
| offsetAheadOfCurrentTime (可选) | Long | query | 早于当前时间的毫秒数，例如：查询最近一小时的消息，则传入3600000 |  | 3.3.0 |
| conditions (可选) | List | query | 查询条件 |  | 3.3.0 |
| count (可选) | boolean | query | 是否查询事件数量 |  | 3.3.0 |
| endpointUuid (可选) | String | query | 接收端Uuid |  | 3.10.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "events": [
    {
      "namespace": "ZStack/VM",
      "name": "org.zstack.zwatch.datatype.EventFamily@2c24d960",
      "labels": {},
      "emergencyLevel": "Normal",
      "resourceId": "b7bbe5fb9ab049c5a36bf8a646471cff",
      "resourceName": "VmInstanceVO",
      "time": 1.596444516324E12
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | Long | 事件数目 | 3.3.0 |
| success | boolean |  | 3.3.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| events | List | 详情参考[events] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #events

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| namespace | String | 名字空间 | 2.3 |
| name | String | 事件名 | 2.3 |
| labels | Map | 标签 | 2.3 |
| resourceId | String | 产生事件资源的ID（如果为ZStack Cloud资源则为资源UUID） | 2.3 |
| resourceName | String | 资源名称 | 2.3 |
| error | String | 如果事件代表错误，该字段为错误详情 | 2.3 |
| time | long | 事件产生时间 | 2.3 |
| dataUuid | String | 消息UUID | 3.3 |
| accountUuid | String | 账户UUID | 3.3 |
| emergencyLevel | EmergencyLevel | 详情参考[emergencyLevel] | 2.3 |

 #emergencyLevel

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |



##### SDK示例

 Java SDK

```
GetEventDataAction action = new GetEventDataAction();
action.startTime = 1.596444516404E12;
action.limit = 10.0;
action.conditions = asList("HostUuid=00d80d7c47124d6d8e2c7736e9af1c34");
action.count = false;
action.start = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetEventDataAction.Result res = action.call();
```

 Python SDK

```
GetEventDataAction action = GetEventDataAction()
action.startTime = 1.596444516405E12
action.limit = 10.0
action.conditions = [HostUuid=7581302347d0439fbdde32b914e2449a]
action.count = false
action.start = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetEventDataAction.Result res = action.call()
```

---

#### 更新事件消息(UpdateEventData)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/events/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateEventData": {
    "dataUuid": "a24e9918fdf83d0aae19846bd52411e4",
    "updateMode": "OnlyOne",
    "readStatus": "Read"
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
-X PUT -d '{"updateEventData":{"dataUuid":"a24e9918fdf83d0aae19846bd52411e4","updateMode":"OnlyOne","readStatus":"Read"}}' http://localhost:8080/zstack/v1/zwatch/events/actions
```

 参数列表
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| dataUuid (可选) | String | body(包含在**updateEventData**结构中) | 资源的UUID，唯一标示该资源 |  | 3.3.0 |
| dataStartTime (可选) | Long | body(包含在**updateEventData**结构中) | 选择目标消息的起始时间，updateMode需要传入InRange |  | 3.3.0 |
| dataEndTime (可选) | Long | body(包含在**updateEventData**结构中) | 选择目标消息的结束时间，updateMode需要传入InRange |  | 3.3.0 |
| updateMode | String | body(包含在**updateEventData**结构中) | 选择更新目标消息的范围，OnlyOne表示只更新指定的消息，InRange表示更新某个时间范围产生的消息， All表示更新所有消息 | OnlyOne InRange All | 3.3.0 |
| readStatus (可选) | String | body(包含在**updateEventData**结构中) | 更新消息已读状态 | Read Unread | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



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
UpdateEventDataAction action = new UpdateEventDataAction();
action.dataUuid = "a24e9918fdf83d0aae19846bd52411e4";
action.updateMode = "OnlyOne";
action.readStatus = "Read";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateEventDataAction.Result res = action.call();
```

 Python SDK

```
UpdateEventDataAction action = UpdateEventDataAction()
action.dataUuid = "a24e9918fdf83d0aae19846bd52411e4"
action.updateMode = "OnlyOne"
action.readStatus = "Read"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateEventDataAction.Result res = action.call()
```

---

#### 查询事件报警器报警记录(QueryEventRecord)



##### API请求

 URLs

```
GET zstack/v1/zwatch/event-records
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/event-records?q=dataUuid=bcb5816592553e04a101e37c69d1837a
```



可查询字段

运行CLI命令行工具，输入QueryEventRecord并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "createTime": 1.510669257141E12,
      "namespace": "ZStack/PrimaryStorage",
      "name": "PrimaryStorageDisconnected",
      "emergencyLevel": "Emergent",
      "resourceId": "ff1d1d9429da35cfb3d4dfad772d0f3a",
      "dataUuid": "64f3d04e7144348db07585dfc9293582",
      "accountUuid": "1f2c621ce02d37268da28bb368f6b265",
      "subscriptionUuid": "e30c7668d9c13585915da7e6442f6749",
      "readStatus": true,
      "labels": "{\"Error\":\"No Host state is Enabled, Please check the availability of the host\"}"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventories | List | 详情参考[inventories] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| time | long | 时间 | 4.1.0 |
| count | long | 数量 | 4.1.0 |
| id | long | 消息ID | 4.1.0 |
| createTime | long | 创建时间 | 4.1.0 |
| namespace | String | 名字空间 | 4.1.0 |
| name | String | 名称 | 4.1.0 |
| emergencyLevel | String | 报警等级 | 4.1.0 |
| resourceId | String | 资源UUID | 4.1.0 |
| error | String | 错误信息 | 4.1.0 |
| dataUuid | String | 消息UUID | 4.1.0 |
| accountUuid | String | 账户UUID | 4.1.0 |
| subscriptionUuid | String | 事件报警器UUID | 4.1.0 |
| readStatus | Boolean | 已读状态 | 4.1.0 |
| labels | String | 标签列表 | 4.1.0 |



##### SDK示例

 Java SDK

```
QueryEventRecordAction action = new QueryEventRecordAction();
action.conditions = asList("dataUuid=1e5badf2a4a43bae91b16dbd1aee0c0b");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryEventRecordAction.Result res = action.call();
```

 Python SDK

```
QueryEventRecordAction action = QueryEventRecordAction()
action.conditions = ["dataUuid=60290f65736a317cb52b0721d90ce315"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryEventRecordAction.Result res = action.call()
```

---

#### 报警器（Alarm）

---

#### 创建报警器 (CreateAlarm)



##### API请求

 URLs

```
POST zstack/v1/zwatch/alarms
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "namespace": "ZStack/VM",
    "metricName": "org.zstack.zwatch.datatype.Metric@53fa9b19",
    "threshold": 60.0,
    "repeatInterval": 1800.0,
    "enableRecovery": true,
    "labels": [
      {
        "key": "VMUuid",
        "value": "ca6b4ad7a0e446c6a8c4f52d93215f6e",
        "op": "Equal"
      }
    ],
    "actions": [
      {
        "actionUuid": "19b7cfaf6134408897d95588b01308fe",
        "actionType": "sns"
      }
    ],
    "repeatCount": -1.0,
    "type": "Any"
    "enableRecovery": true
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"VM CPU Alarm","comparisonOperator":"LessThanOrEqualTo","period":60.0,"namespace":"ZStack/VM","metricName":"org.zstack.zwatch.datatype.Metric@53fa9b19","threshold":60.0,"repeatInterval":1800.0,"labels":[{"key":"VMUuid","value":"61f6b705fcb944df8138ea6b52b0b4a6","op":"Equal"}],"actions":[{"actionUuid":"699541db497e4d3e9c49020c2dad8d6c","actionType":"sns"}],"repeatCount":-1.0,"type":"Any","enableRecovery":true}}' http://localhost:8080/zstack/v1/zwatch/alarms
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
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| comparisonOperator | String | body(包含在**params**结构中) | 阈值比较符 | GreaterThanOrEqualTo GreaterThan LessThan LessThanOrEqualTo | 2.3 |
| period(可选) | Integer | body(包含在**params**结构中) | 阈值持续时间 |  | 2.3 |
| namespace | String | body(包含在**params**结构中) | 名字空间 |  | 2.3 |
| metricName | String | body(包含在**params**结构中) | 监控项名 |  | 2.3 |
| threshold | Double | body(包含在**params**结构中) | 阈值 |  | 2.3 |
| repeatInterval (可选) | Integer | body(包含在**params**结构中) | 报警重复时间 |  | 2.3 |
| labels (可选) | List | body(包含在**params**结构中) | 标签列表 |  | 2.3 |
| actions (可选) | List | body(包含在**params**结构中) | 报警动作列表 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| repeatCount (可选) | Integer | body(包含在**params**结构中) | 报警重复次数 |  | 3.3.0 |
| type (可选) | String | body(包含在**params**结构中) | 报警器类型 |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| enableRecovery | Boolean | body(包含在**params**结构中) | 开启恢复通知 |  | 3.4.0 |
| emergencyLevel (可选) | String | body(包含在**params**结构中) | 报警等级 | Emergent Important Normal | 3.8.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "6ff094db7e8b4640880751c5a17e7b63",
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "namespace": "ZStack/VM",
    "metricName": "org.zstack.zwatch.datatype.Metric@c2e79f0",
    "threshold": 30.0,
    "repeatInterval": 1800.0,
    "repeatCount": -1.0,
    "status": "Alarm",
    "state": "Enabled",
    "enableRecovery": true,
    "createDate": "Jul 6, 2018 1:51:02 PM",
    "lastOpDate": "Jul 6, 2018 1:51:02 PM",
    "labels": [
      {
        "uuid": "cccd980c3bb84f4486d96a960eb08edb",
        "key": "VMUuid",
        "operator": "\u003d",
        "value": "f486fd81583747459d8a6cd47f9228e5"
      }
    ],
    "actions": [
      {
        "alarmUuid": "8a6a98e3cc484388a746d725265886b3",
        "actionType": "sns",
        "actionUuid": "86a2b51fbc7f406c906711081852fa49"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AlarmInventory | 详情参考[inventory] | 2.3 |

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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| enableRecovery | Boolean | 开启恢复通知 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
CreateAlarmAction action = new CreateAlarmAction();
action.name = "VM CPU Alarm";
action.comparisonOperator = "LessThanOrEqualTo";
action.period = 60.0;
action.namespace = "ZStack/VM";
action.metricName = "org.zstack.zwatch.datatype.Metric@c2e79f0";
action.threshold = 60.0;
action.repeatInterval = 1800.0;
action.labels = asList([key:VMUuid, value:45821a26f579447fa77bfb82b1b0268e, op:Equal]);
action.actions = asList([actionUuid:8e06ec09862c46c3aaf9fc6337815ffb, actionType:sns]);
action.repeatCount = -1.0;
action.type = "Any";
action.enableRecovery = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAlarmAction.Result res = action.call();
```

 Python SDK

```
CreateAlarmAction action = CreateAlarmAction()
action.name = "VM CPU Alarm"
action.comparisonOperator = "LessThanOrEqualTo"
action.period = 60.0
action.namespace = "ZStack/VM"
action.metricName = "org.zstack.zwatch.datatype.Metric@c2e79f0"
action.threshold = 60.0
action.repeatInterval = 1800.0
action.labels = [[key:VMUuid, value:7dd44bfe750f42859528b27ef90f1412, op:Equal]]
action.actions = [[actionUuid:b1acb139666140d09f4f93b8dd96f49f, actionType:sns]]
action.repeatCount = -1.0
action.type = "Any"
action.enableRecovery = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAlarmAction.Result res = action.call()
```

---

#### 删除报警器（DeleteAlarm）



##### API请求

 URLs

```
DELETE zstack/v1/zwatch/alarms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/zwatch/alarms/2aae360b1240374696d79a0cca10bf24
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



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
DeleteAlarmAction action = new DeleteAlarmAction();
action.uuid = "2aae360b1240374696d79a0cca10bf24";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAlarmAction.Result res = action.call();
```

 Python SDK

```
DeleteAlarmAction action = DeleteAlarmAction()
action.uuid = "2aae360b1240374696d79a0cca10bf24"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAlarmAction.Result res = action.call()
```

---

#### 修改报警器 (UpdateAlarm)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/alarms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAlarm": {
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "enableRecovery": true
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
-X PUT -d '{"updateAlarm":{"name":"VM CPU Alarm","comparisonOperator":"LessThanOrEqualTo","period":60.0,"enableRecovery":true}}' http://localhost:8080/zstack/v1/zwatch/alarms/28397feb3d083fdc9346edb066fbf589/actions
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
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| name (可选) | String | body(包含在**updateAlarm**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**updateAlarm**结构中) | 资源的详细描述 |  | 2.3 |
| comparisonOperator (可选) | String | body(包含在**updateAlarm**结构中) | 阈值比较符 | GreaterThanOrEqualTo GreaterThan LessThan LessThanOrEqualTo | 2.3 |
| period (可选) | Integer | body(包含在**updateAlarm**结构中) | 阈值持续时间 |  | 2.3 |
| threshold (可选) | Double | body(包含在**updateAlarm**结构中) | 阈值 |  | 2.3 |
| repeatInterval (可选) | Integer | body(包含在**updateAlarm**结构中) | 报警重复时间 |  | 2.3 |
| repeatCount (可选) | Integer | body(包含在**updateAlarm**结构中) | 报警重复次数 |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| repeatCount (可选) | Integer | body(包含在**updateAlarm**结构中) | 报警重复次数 |  | 3.2 |
| enableRecovery (可选) | Boolean | 开启恢复通知 |  |  | 3.4.0 |
| emergencyLevel (可选) | String | body(包含在**updateAlarm**结构中) | 报警等级 | Emergent Important Normal | 3.8.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "33e642a1eb3c4f27a7da7acc5891de0a",
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "namespace": "ZStack/VM",
    "metricName": "org.zstack.zwatch.datatype.Metric@22c0dd63",
    "threshold": 30.0,
    "repeatInterval": 1800.0,
    "repeatCount": -1.0,
    "status": "Alarm",
    "state": "Enabled",
    "createDate": "Jan 8, 2019 4:11:27 PM",
    "lastOpDate": "Jan 8, 2019 4:11:27 PM",
    "labels": [
      {
        "uuid": "c4da2db2fa454368a3a05016ae8c8070",
        "key": "VMUuid",
        "operator": "\u003d",
        "value": "396d863211e446938ea01eb10bc9fd18"
      }
    ],
    "actions": [
      {
        "alarmUuid": "0d18a844bbf544bb914ab9287651f59f",
        "actionType": "sns",
        "actionUuid": "17b884822b284e6e9a0b67307a28955c"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AlarmInventory | 详情参考[inventory] | 2.3 |

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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| enableRecovery | Boolean | 开启恢复通知 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
UpdateAlarmAction action = new UpdateAlarmAction();
action.uuid = "28397feb3d083fdc9346edb066fbf589";
action.name = "VM CPU Alarm";
action.comparisonOperator = "LessThanOrEqualTo";
action.period = 60.0;
action.enableRecovery = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAlarmAction.Result res = action.call();
```

 Python SDK

```
UpdateAlarmAction action = UpdateAlarmAction()
action.uuid = "28397feb3d083fdc9346edb066fbf589"
action.name = "VM CPU Alarm"
action.comparisonOperator = "LessThanOrEqualTo"
action.period = 60.0
action.enableRecovery = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAlarmAction.Result res = action.call()
```

---

#### 修改事件报警器 (UpdateSubscribeEvent)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/events/subscriptions/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSubscribeEvent": {
    "emergencyLevel": "Emergent"
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
-X PUT -d '{"updateSubscribeEvent":{"emergencyLevel":"Emergent"}}' http://localhost:8080/zstack/v1/zwatch/events/subscriptions/37fc1fcc0fa93fb493702469039edbfb/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 事件报警器UUID |  | 3.8.0 |
| emergencyLevel (可选) | String | body(包含在**updateSubscribeEvent**结构中) | 报警等级 | Emergent Important Normal | 3.8.0 |
| systemTags (可选) | List | body |  |  | 3.8.0 |
| userTags (可选) | List | body |  |  | 3.8.0 |



##### API返回

 返回示例：

```
{
  "inventory": {
    "uuid": "d1b38b37691948218df07900a2c1c065",
    "name": "vm_state_change_event",
    "namespace": "ZStack/VM",
    "eventName": "org.zstack.zwatch.datatype.EventFamily@35324244",
    "state": "Enabled",
    "actions": [
      {
        "subscriptionUuid": "30d1075270c94f6e9312c1a4404cc67a",
        "actionType": "sns",
        "actionUuid": "33308113390a472286df32a99cd477ef"
      }
    ],
    "labels": [
      {
        "uuid": "26246baade39495c99d018d826ae576e",
        "key": "DestinationHostUuid",
        "operator": "Equal",
        "value": "79e249b6995a4c819d8e6cd33798135a"
      }
    ],
    "lastOpDate": "Jan 11, 2020 11:48:35 PM",
    "createDate": "Jan 11, 2020 11:48:35 PM",
    "emergencyLevel": "Emergent"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.8.0 |
| inventory | EventSubscriptionInventory | 详情参考[inventory] | 3.8.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.8.0 |
| description | String | 错误的概要描述 | 3.8.0 |
| details | String | 错误的详细信息 | 3.8.0 |
| elaboration | String | 保留字段，默认为null | 3.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.8.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.8.0 |
| name | String | 资源名称 | 3.8.0 |
| namespace | String | 名字空间 | 3.8.0 |
| eventName | String | 事件名 | 3.8.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.8.0 |
| createDate | Timestamp | 创建时间 | 3.8.0 |
| emergencyLevel | String | 报警等级 | 3.8.0 |
| state | EventSubscriptionState | 详情参考[state] | 3.8.0 |
| actions | List | 详情参考[actions] | 3.8.0 |
| labels | List | 详情参考[labels] | 3.8.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.8.0 |
| ordinal | int |  | 3.8.0 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| subscriptionUuid | String | 事件订阅UUID | 3.8.0 |
| actionType | String | 动作类型 | 3.8.0 |
| actionUuid | String | 动作UUID | 3.8.0 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.8.0 |
| key | String | 标签名 | 3.8.0 |
| value | String | 标签值 | 3.8.0 |
| operator | Operator | 详情参考[operator] | 3.8.0 |

 #operator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| op | String |  | 3.8.0 |
| name | String | 资源名称 | 3.8.0 |
| ordinal | int |  | 3.8.0 |



##### SDK示例

 Java SDK

```
UpdateSubscribeEventAction action = new UpdateSubscribeEventAction();
action.uuid = "37fc1fcc0fa93fb493702469039edbfb";
action.emergencyLevel = "Emergent";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSubscribeEventAction.Result res = action.call();
```

 Python SDK

```
UpdateSubscribeEventAction action = UpdateSubscribeEventAction()
action.uuid = "37fc1fcc0fa93fb493702469039edbfb"
action.emergencyLevel = "Emergent"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSubscribeEventAction.Result res = action.call()
```

---

#### 增加报警动作 (AddActionToAlarm)



##### API请求

 URLs

```
POST zstack/v1/zwatch/alarms/{alarmUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "actionUuid": "a48c9fa0454238a4b731279b92d8bad1",
    "actionType": "sns"
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
-X POST -d '{"params":{"actionUuid":"a48c9fa0454238a4b731279b92d8bad1","actionType":"sns"}}' http://localhost:8080/zstack/v1/zwatch/alarms/3edde2bd29493568a2640f75d218ed05/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| alarmUuid | String | url | 报警器UUID |  | 2.3 |
| actionUuid | String | body(包含在**params**结构中) | 报警动作UUID |  | 2.3 |
| actionType | String | body(包含在**params**结构中) | 报警动作类型 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "6b9ce7e8a6c04476aa22ce6c851a7f80",
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "namespace": "ZStack/VM",
    "metricName": "org.zstack.zwatch.datatype.Metric@565e1ebe",
    "threshold": 30.0,
    "repeatInterval": 1800.0,
    "status": "Alarm",
    "state": "Enabled",
    "createDate": "Jul 6, 2018 1:50:39 PM",
    "lastOpDate": "Jul 6, 2018 1:50:39 PM",
    "labels": [
      {
        "uuid": "f183fec66c3d40938621568943f4c0bf",
        "key": "VMUuid",
        "operator": "\u003d",
        "value": "7d46ab7f0f104ad0908f23d648bcaa9e"
      }
    ],
    "actions": [
      {
        "alarmUuid": "7379b3951c9f4c82a0571cc55ebc98b3",
        "actionType": "sns",
        "actionUuid": "27e18067eb614fd4bcb047c008e3a4c0"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AlarmInventory | 详情参考[inventory] | 2.3 |

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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
AddActionToAlarmAction action = new AddActionToAlarmAction();
action.alarmUuid = "3edde2bd29493568a2640f75d218ed05";
action.actionUuid = "a48c9fa0454238a4b731279b92d8bad1";
action.actionType = "sns";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddActionToAlarmAction.Result res = action.call();
```

 Python SDK

```
AddActionToAlarmAction action = AddActionToAlarmAction()
action.alarmUuid = "3edde2bd29493568a2640f75d218ed05"
action.actionUuid = "a48c9fa0454238a4b731279b92d8bad1"
action.actionType = "sns"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddActionToAlarmAction.Result res = action.call()
```

---

#### 删除报警动作 (RemoveActionFromAlarm)



##### API请求

 URLs

```
DELETE zstack/v1/zwatch/alarms/{alarmUuid}/actions/{actionUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/zwatch/alarms/2c95bdf5490131bbb421622579b59eb8/actions/41c582ab1cea31d5addd02bb00bb173d
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| alarmUuid | String | url | 报警器UUID |  | 2.3 |
| actionUuid | String | url | 报警动作UUID |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3f753a2f9dd44becb0435b2a517fd5d4",
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "namespace": "ZStack/VM",
    "metricName": "org.zstack.zwatch.datatype.Metric@565e1ebe",
    "threshold": 30.0,
    "repeatInterval": 1800.0,
    "status": "Alarm",
    "state": "Enabled",
    "createDate": "Jul 6, 2018 1:50:59 PM",
    "lastOpDate": "Jul 6, 2018 1:50:59 PM",
    "labels": [
      {
        "uuid": "cf7ff04d570f4f509e6b22851ceb231d",
        "key": "VMUuid",
        "operator": "\u003d",
        "value": "cda155f903f1417f951578ea74623f5e"
      }
    ],
    "actions": [
      {
        "alarmUuid": "5d2a502edc8d4c34b90ae499c7fdb437",
        "actionType": "sns",
        "actionUuid": "4b7903efe370462aab75bb5890971e6d"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AlarmInventory | 详情参考[inventory] | 2.3 |

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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
RemoveActionFromAlarmAction action = new RemoveActionFromAlarmAction();
action.alarmUuid = "2c95bdf5490131bbb421622579b59eb8";
action.actionUuid = "41c582ab1cea31d5addd02bb00bb173d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveActionFromAlarmAction.Result res = action.call();
```

 Python SDK

```
RemoveActionFromAlarmAction action = RemoveActionFromAlarmAction()
action.alarmUuid = "2c95bdf5490131bbb421622579b59eb8"
action.actionUuid = "41c582ab1cea31d5addd02bb00bb173d"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveActionFromAlarmAction.Result res = action.call()
```

---

#### 增加标签到报警器（AddLabelToAlarm）



##### API请求

 URLs

```
POST zstack/v1/zwatch/alarms/{alarmUuid}/labels
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "key": "VMUuid",
    "value": "2840f151485641cca48b190ebb989cbf",
    "operator": "Equal"
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
-X POST -d '{"params":{"key":"VMUuid","value":"165af818089b4e9f8c07691de549f8d4","operator":"Equal"}}' http://localhost:8080/zstack/v1/zwatch/alarms/00b90ca9d59d3f539530fbcc8572c403/labels
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| alarmUuid | String | url | 报警器UUID |  | 2.3 |
| key | String | body(包含在**params**结构中) | 标签键 |  | 2.3 |
| value | String | body(包含在**params**结构中) | 标签值 |  | 2.3 |
| operator | String | body(包含在**params**结构中) | 操作符 | Regex Equal | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3f54b760c8d64e17bc282258335b718a",
    "key": "VMUuid",
    "operator": "\u003d",
    "value": "dd5b28c103594573b7bb21a02cb000c4"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AlarmInventory | 详情参考[inventory] | 2.3 |

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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
AddLabelToAlarmAction action = new AddLabelToAlarmAction();
action.alarmUuid = "00b90ca9d59d3f539530fbcc8572c403";
action.key = "VMUuid";
action.value = "bfaa02ec5c37490d829ae95bebf15b78";
action.operator = "Equal";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddLabelToAlarmAction.Result res = action.call();
```

 Python SDK

```
AddLabelToAlarmAction action = AddLabelToAlarmAction()
action.alarmUuid = "00b90ca9d59d3f539530fbcc8572c403"
action.key = "VMUuid"
action.value = "b4eb5d369bfb45719fbe862484011563"
action.operator = "Equal"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddLabelToAlarmAction.Result res = action.call()
```

---

#### 修改报警器标签(UpdateAlarmLabel)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/alarms/labels/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAlarmLabel": {
    "key": "VMUuid",
    "value": "e9859e9eb51e4ea583a7c529407208a2",
    "operator": "Equal"
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
-X PUT -d '{"updateAlarmLabel":{"key":"VMUuid","value":"59ab62f070784eb2b0d98f0d12386f0d","operator":"Equal"}}' http://localhost:8080/zstack/v1/zwatch/alarms/labels/3c228226ca213c18b54627668dd37d80/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.3 |
| key | String | body(包含在**updateAlarmLabel**结构中) | 标签键 |  | 3.3 |
| value | String | body(包含在**updateAlarmLabel**结构中) | 标签值 |  | 3.3 |
| operator | String | body(包含在**updateAlarmLabel**结构中) | 标签操作符 | Regex Equal | 3.3 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3 |
| userTags (可选) | List | body | 用户标签 |  | 3.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5ea6d350f0e64d0b9467d033e9c6d052",
    "key": "VMUuid",
    "operator": "\u003d",
    "value": "35956236f261467cb2cef1db8626024e"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventory | AlarmLabelInventory | 详情参考[inventory] | 3.3.0 |

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
| key | String |  | 3.3.0 |
| operator | String |  | 3.3.0 |
| value | String |  | 3.3.0 |



##### SDK示例

 Java SDK

```
UpdateAlarmLabelAction action = new UpdateAlarmLabelAction();
action.uuid = "3c228226ca213c18b54627668dd37d80";
action.key = "VMUuid";
action.value = "1a33d5ce225241e0b2cbc80123e36351";
action.operator = "Equal";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAlarmLabelAction.Result res = action.call();
```

 Python SDK

```
UpdateAlarmLabelAction action = UpdateAlarmLabelAction()
action.uuid = "3c228226ca213c18b54627668dd37d80"
action.key = "VMUuid"
action.value = "20034c6b21a24918912857c8ed923c6b"
action.operator = "Equal"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAlarmLabelAction.Result res = action.call()
```

---

#### 从报警器上删除标签 (RemoveLabelFromAlarm)



##### API请求

 URLs

```
DELETE zstack/v1/zwatch/alarms/labels/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/zwatch/alarms/labels/160037fc792d3815ba25fe8a48d1b237
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



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
RemoveLabelFromAlarmAction action = new RemoveLabelFromAlarmAction();
action.uuid = "160037fc792d3815ba25fe8a48d1b237";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveLabelFromAlarmAction.Result res = action.call();
```

 Python SDK

```
RemoveLabelFromAlarmAction action = RemoveLabelFromAlarmAction()
action.uuid = "160037fc792d3815ba25fe8a48d1b237"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveLabelFromAlarmAction.Result res = action.call()
```

---

#### 更改报警器状态 (ChangeAlarmState)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/alarms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAlarmState": {
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
-X PUT -d '{"changeAlarmState":{"stateEvent":"disable"}}' http://localhost:8080/zstack/v1/zwatch/alarms/226149ca389f387e95d0f671bd6b551f/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**changeAlarmState**结构中) | 状态事件 | enabled disabled | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3b57de3128b545a18bb7da2f086f6362",
    "name": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60.0,
    "namespace": "ZStack/VM",
    "metricName": "org.zstack.zwatch.datatype.Metric@565e1ebe",
    "threshold": 30.0,
    "repeatInterval": 1800.0,
    "status": "Alarm",
    "state": "Enabled",
    "createDate": "Jul 6, 2018 1:50:57 PM",
    "lastOpDate": "Jul 6, 2018 1:50:57 PM",
    "labels": [
      {
        "uuid": "61f43f3a05f74ef39b5b2c30354a5246",
        "key": "VMUuid",
        "operator": "\u003d",
        "value": "23958e475ae34735a4ca0b808df0cf50"
      }
    ],
    "actions": [
      {
        "alarmUuid": "f01eb4d0ec1d4cdc81dc478c87f9fceb",
        "actionType": "sns",
        "actionUuid": "c9d79c14e37a4ebb83cf0d76fb7b8dbc"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AlarmInventory | 详情参考[inventory] | 2.3 |

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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
ChangeAlarmStateAction action = new ChangeAlarmStateAction();
action.uuid = "226149ca389f387e95d0f671bd6b551f";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAlarmStateAction.Result res = action.call();
```

 Python SDK

```
ChangeAlarmStateAction action = ChangeAlarmStateAction()
action.uuid = "226149ca389f387e95d0f671bd6b551f"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAlarmStateAction.Result res = action.call()
```

---

#### 查询报警器 (QueryAlarm)



##### API请求

 URLs

```
GET zstack/v1/zwatch/alarms
GET zstack/v1/zwatch/alarms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarms?q=name=VM
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarms/572c61c4a1393b6ebce520a0102dc46c
```



可查询字段

运行CLI命令行工具，输入QueryAlarm并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "5c9ef4b25c2a485da77eab50745d53cf",
      "name": "VM CPU Alarm",
      "comparisonOperator": "LessThanOrEqualTo",
      "period": 60.0,
      "namespace": "ZStack/VM",
      "metricName": "org.zstack.zwatch.datatype.Metric@565e1ebe",
      "threshold": 30.0,
      "repeatInterval": 1800.0,
      "status": "Alarm",
      "state": "Enabled",
      "createDate": "Jul 6, 2018 1:50:51 PM",
      "lastOpDate": "Jul 6, 2018 1:50:51 PM",
      "labels": [
        {
          "uuid": "5ab29656f8df43a3a78d672af8940896",
          "key": "VMUuid",
          "operator": "\u003d",
          "value": "b128326b8b944c0499992c00cabd4711"
        }
      ],
      "actions": [
        {
          "alarmUuid": "2028f51e88b6449fb33442215810845f",
          "actionType": "sns",
          "actionUuid": "9486671b2f4c4413976f1d6938ac1d01"
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
| period | Integer | 阈值持续时间 | 2.3 |
| namespace | String | 名字空间 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| threshold | Double | 阈值 | 2.3 |
| repeatInterval | Integer | 报警重复时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 2.3 |
| status | AlarmStatus | 详情参考[status] | 2.3 |
| labels | List | 详情参考[labels] | 2.3 |
| actions | List | 详情参考[actions] | 2.3 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3 |
| ordinal | int |  | 2.3 |

  #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| OK | AlarmStatus | 监控中 | 2.3 |
| Alarm | AlarmStatus | 已触发 | 2.3 |
| InsufficientData | AlarmStatus | 数据不足 | 2.3 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| key | String | 标签键 | 2.3 |
| operator | String | 比较符 | 2.3 |
| value | String | 标签值 | 2.3 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| actionType | String | 报警动作类型 | 2.3 |
| actionUuid | String | 报警动作UUID | 2.3 |



##### SDK示例

 Java SDK

```
QueryAlarmAction action = new QueryAlarmAction();
action.conditions = asList("name=VM");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAlarmAction.Result res = action.call();
```

 Python SDK

```
QueryAlarmAction action = QueryAlarmAction()
action.conditions = ["name=VM"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAlarmAction.Result res = action.call()
```

---

#### 获取资源报警器历史(GetAlarmData)



##### API请求

 URLs

```
GET zstack/v1/zwatch/alarm-histories
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarm-histories?startTime=1.596444525E9&endTime=1.596530925E9&limit=200.0&count=false&excludeOtherAccount=false&start=0.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| startTime (可选) | Long | query | 起始时间 |  | 2.3 |
| endTime (可选) | Long | query | 结束时间 |  | 2.3 |
| limit (可选) | Integer | query | 返回记录条数数量 |  | 2.3 |
| conditions (可选) | List | query | 条件列表，用于过滤结果 |  | 2.3 |
| count (可选) | boolean | query | 是否查询消息数量 |  | 3.3.0 |
| excludeOtherAccount (可选) | boolean | query | 是否排除非当前账号的消息（只对SystemAdmin生效） |  | 3.3.0 |
| endpointUuid (可选) | String | query | 接收端Uuid |  | 3.10.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "histories": [
    {
      "alarmUuid": "143b24a12d193c1992c4774dc3b34fda",
      "namespace": "ZStack/VM",
      "metricName": "CPUUsedUtilization",
      "accountUuid": "90aea7a1dfe93cf7bd3379254dddbdf9",
      "resourceUuid": "4e6bb5390d3938cb9ce830a4766ee4d8",
      "resourceType": "VmInstanceVO",
      "alarmStatus": "Alarm",
      "alarmName": "test-alarm",
      "threshold": 90.0,
      "labels": "VMUuid Equal 4e6bb5390d3938cb9ce830a4766ee4d8, CPUNum Equal 2",
      "metricValue": 10.0,
      "comparisonOperator": "LessThan",
      "time": 1.510669257141E12
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| histories | List | 详情参考[histories] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #histories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| alarmUuid | String | 报警器UUID | 2.3 |
| namespace | String | 名字空间名称 | 2.3 |
| metricName | String | 监控项名称 | 2.3 |
| accountUuid | String | 账户UUID | 2.3 |
| resourceUuid | String | 资源UUID | 2.3 |
| resourceType | String | 资源类型 | 2.3 |
| alarmStatus | String | 报警器状态 | 2.3 |
| alarmName | String | 报警器名称 | 2.3 |
| threshold | Double | 报警阈值 | 2.3 |
| period | Integer | 阈值持续周期 | 2.3 |
| labels | String | 标签列表 | 2.3 |
| metricValue | Double | 监控项当时值 | 2.3 |
| time | long | 报警纪录生成时间 | 2.3 |



##### SDK示例

 Java SDK

```
GetAlarmDataAction action = new GetAlarmDataAction();
action.startTime = 1.530856218E9;
action.endTime = 1.530942618E9;
action.limit = 200.0;
action.count = false;
action.excludeOtherAccount = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetAlarmDataAction.Result res = action.call();
```

 Python SDK

```
GetAlarmDataAction action = GetAlarmDataAction()
action.startTime = 1.530856218E9
action.endTime = 1.530942618E9
action.limit = 200.0
action.count = false;
action.excludeOtherAccount = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetAlarmDataAction.Result res = action.call()
```

---

#### 更新报警器历史消息(UpdateAlarmData)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/alarm-histories/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAlarmData": {
    "dataUuid": "514d4a1ed3573bf8a14ac350de0a2513",
    "updateMode": "OnlyOne",
    "readStatus": "Read"
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
-X PUT -d '{"updateAlarmData":{"dataUuid":"514d4a1ed3573bf8a14ac350de0a2513","updateMode":"OnlyOne","readStatus":"Read"}}' http://localhost:8080/zstack/v1/zwatch/alarm-histories/actions
```

 参数列表
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| dataUuid (可选) | String | body(包含在**updateAlarmData**结构中) | 资源的UUID，唯一标示该资源 |  | 3.3.0 |
| dataStartTime (可选) | Long | body(包含在**updateAlarmData**结构中) | 选择目标消息的起始时间，updateMode需要传入InRange |  | 3.3.0 |
| dataEndTime (可选) | Long | body(包含在**updateAlarmData**结构中) | 选择目标消息的结束时间，updateMode需要传入InRange |  | 3.3.0 |
| updateMode | String | body(包含在**updateAlarmData**结构中) | 选择更新目标消息的范围，OnlyOne表示只更新指定的消息，InRange表示更新某个时间范围产生的消息， All表示更新所有消息 | OnlyOne InRange All | 3.3.0 |
| readStatus (可选) | String | body(包含在**updateAlarmData**结构中) | 更新消息已读状态 | Read Unread | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



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
UpdateAlarmDataAction action = new UpdateAlarmDataAction();
action.dataUuid = "514d4a1ed3573bf8a14ac350de0a2513";
action.updateMode = "OnlyOne";
action.readStatus = "Read";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAlarmDataAction.Result res = action.call();
```

 Python SDK

```
UpdateAlarmDataAction action = UpdateAlarmDataAction()
action.dataUuid = "514d4a1ed3573bf8a14ac350de0a2513"
action.updateMode = "OnlyOne"
action.readStatus = "Read"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAlarmDataAction.Result res = action.call()
```

---

#### 统计报警消息数量(GetZWatchAlertHistogram)



##### API请求

 URLs

```
GET zstack/v1/zwatch/alert-histories/histogram
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alert-histories/histogram?startTime=1.623414899E9&endTime=1.623501299E9&intervalHours=8.0&groupColumns=emergencyLevel
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| tableName | String | query | 消息类型 |  | 4.1.0 |
| startTime | Long | query | 起始时间 |  | 4.1.0 |
| endTime | Long | query | 结束时间 |  | 4.1.0 |
| intervalHours | String | query | 间隔小时 |  | 4.1.0 |
| groupColumns (可选) | List | query | 分组属性 |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "histograms": [
    {
      "time": 1.510669257141E12,
      "count": 50.0,
      "tags": [
        {
          "name": "emergencyLevel",
          "value": "Emergent"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| histograms | List |  | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #histories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| time | long | 时间 | 4.1.0 |
| count | long | 数量 | 4.1.0 |
| tags | List | 详情参考[tags] | 4.1.0 |

 #tags

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | tag名称 | 4.1.0 |
| value | String | tag值 | 4.1.0 |



##### SDK示例

 Java SDK

```
GetZWatchAlertHistogramAction action = new GetZWatchAlertHistogramAction();
action.startTime = 1.623414899E9;
action.endTime = 1.623501299E9;
action.intervalHours = 8.0;
action.groupColumns = asList("emergencyLevel");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetZWatchAlertHistogramAction.Result res = action.call();
```

 Python SDK

```
GetZWatchAlertHistogramAction action = GetZWatchAlertHistogramAction()
action.startTime = 1.623414899E9
action.endTime = 1.623501299E9
action.intervalHours = 8.0
action.groupColumns = [emergencyLevel]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetZWatchAlertHistogramAction.Result res = action.call()
```

---

#### 查询资源报警器报警记录(QueryAlarmRecord)



##### API请求

 URLs

```
GET zstack/v1/zwatch/alarm-records
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarm-records?q=dataUuid=f30e0a92898a3cf39b98c7b20d5d09d7
```



可查询字段

运行CLI命令行工具，输入QueryAlarmRecord并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "createTime": 1.510669257141E12,
      "accountUuid": "ce8e0ae7bfb93fb09c3339443fb79b5a",
      "alarmName": "ZStack Primary Storage Physical Available Capacity Alarm",
      "alarmStatus": "Alarm",
      "alarmUuid": "701f9528318737bb9db81c4f9b5721a7",
      "comparisonOperator": "LessThan",
      "context": "{\"PrimaryStorageType\":\"LocalStorage\"}",
      "dataUuid": "2e6afdb668443ef9a9a82fcba794d21b",
      "emergencyLevel": "Emergent",
      "metricName": "AvailablePhysicalCapacityInPercent",
      "metricValue": 20.0,
      "namespace": "ZStack/PrimaryStorage",
      "period": 600.0,
      "readStatus": false,
      "resourceUuid": "8a596bd1689c3e83a408c2713d99fc6e",
      "threshold": 21.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| histograms | List |  | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long | 消息ID | 4.1.0 |
| createTime | long | 创建时间 | 4.1.0 |
| accountUuid | String | 账户UUID | 4.1.0 |
| alarmName | String | 报警器名称 | 4.1.0 |
| alarmStatus | String | 报警状态 | 4.1.0 |
| alarmUuid | String | 报警器UUID | 4.1.0 |
| comparisonOperator | String | 阈值比较符 | 4.1.0 |
| context | String | 内容 | 4.1.0 |
| dataUuid | String | 消息UUID | 4.1.0 |
| emergencyLevel | String | 报警等级 | 4.1.0 |
| labels | String | 标签列表 | 4.1.0 |
| metricName | String | 监控项名称 | 4.1.0 |
| metricValue | Double | 监控项值 | 4.1.0 |
| namespace | String | 名字空间 | 4.1.0 |
| period | int | 阈值持续时间 | 4.1.0 |
| readStatus | Boolean | 已读状态 | 4.1.0 |
| resourceUuid | String | 资源UUID | 4.1.0 |
| threshold | Double | 阈值 | 4.1.0 |



##### SDK示例

 Java SDK

```
QueryAlarmRecordAction action = new QueryAlarmRecordAction();
action.conditions = asList("dataUuid=8860f33a964e3141aee2c3ffde2918b7");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAlarmRecordAction.Result res = action.call();
```

 Python SDK

```
QueryAlarmRecordAction action = QueryAlarmRecordAction()
action.conditions = ["dataUuid=a83224ddc145340b9b7b12170ba614ba"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAlarmRecordAction.Result res = action.call()
```

---

#### 修改一键报警模板(UpdateActiveAlarmTemplate)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/activealarms/templates/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateActiveAlarmTemplate": {
    "alarmName": "VM-CPUAverageUsedUtilization",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60,
    "threshold": 80.0,
    "repeatInterval": 1800,
    "repeatCount": -1,
    "emergencyLevel": "Emergent"
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
-X PUT -d '{"updateActiveAlarmTemplate":{"alarmName":"VM-CPUAverageUsedUtilization","comparisonOperator":"LessThanOrEqualTo","period":60,"threshold":80.0,"repeatInterval":1800,"repeatCount":-1,"emergencyLevel":"Emergent"}}' http://localhost:8080/zstack/v1/zwatch/activealarms/templates/c3e82dade74732009d5f4fd0b462f65d/actions
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
| uuid | String | url | 模板UUID |  | 4.7.0 |
| alarmName (可选) | String | body (包含在**updateActiveAlarmTemplate**结构中) | 模板名称 |  | 4.7.0 |
| comparisonOperator (可选) | String | body (包含在**updateActiveAlarmTemplate**结构中) | 阈值比较符 | GreaterThanOrEqualTo GreaterThan LessThan LessThanOrEqualTo | 4.7.0 |
| period (可选) | Integer | body (包含在**updateActiveAlarmTemplate**结构中) | 阈值持续时间 |  | 4.7.0 |
| threshold (可选) | Double | body (包含在**updateActiveAlarmTemplate**结构中) | 阈值 |  | 4.7.0 |
| repeatInterval (可选) | Integer | body (包含在**updateActiveAlarmTemplate**结构中) | 报警重复时间 |  | 4.7.0 |
| repeatCount (可选) | Integer | body (包含在**updateActiveAlarmTemplate**结构中) | 报警重复次数 |  | 4.7.0 |
| emergencyLevel (可选) | String | body (包含在**updateActiveAlarmTemplate**结构中) | 报警等级 | Emergent Important Normal | 4.7.0 |
| labels (可选) | String | body (包含在**updateActiveAlarmTemplate**结构中) |  |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ea8aa7b6b2e43d4a9f3a19ba121ab72a",
    "alarmName": "VM CPU Alarm",
    "comparisonOperator": "LessThanOrEqualTo",
    "period": 60,
    "repeatInterval": 60,
    "repeatCount": -1,
    "namespace": "zstack/VM",
    "metricName": "CPUIdleUtilization",
    "threshold": 30.0,
    "emergencyLevel": "Emergent",
    "labels": "[{\"uuid\":\"48cc4d3273a249009ea2166b71495785\",\"key\":\"VMUuid\",\"operator\":\"\u003d\",\"value\":\"c69d93586ca349b9a3bc074e2739e20a\"}]",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | ActiveAlarmTemplateInventory | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| alarmName | String |  | 4.7.0 |
| period | int |  | 4.7.0 |
| repeatInterval | int |  | 4.7.0 |
| repeatCount | int |  | 4.7.0 |
| namespace | String |  | 4.7.0 |
| metricName | String |  | 4.7.0 |
| threshold | double |  | 4.7.0 |
| labels | String |  | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| comparisonOperator | ComparisonOperator | 详情参考[comparisonOperator] | 4.7.0 |
| emergencyLevel | EmergencyLevel | 详情参考[emergencyLevel] | 4.7.0 |

 #comparisonOperator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| GreaterThanOrEqualTo | ComparisonOperator |  | 4.7.0 |
| GreaterThan | ComparisonOperator |  | 4.7.0 |
| LessThan | ComparisonOperator |  | 4.7.0 |
| LessThanOrEqualTo | ComparisonOperator |  | 4.7.0 |

 #emergencyLevel

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Emergent | EmergencyLevel |  | 4.7.0 |
| Important | EmergencyLevel |  | 4.7.0 |
| Normal | EmergencyLevel |  | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
UpdateActiveAlarmTemplateAction action = new UpdateActiveAlarmTemplateAction();
action.uuid = "c3e82dade74732009d5f4fd0b462f65d";
action.alarmName = "VM-CPUAverageUsedUtilization";
action.comparisonOperator = "LessThanOrEqualTo";
action.period = 60;
action.threshold = 80.0;
action.repeatInterval = 1800;
action.repeatCount = -1;
action.emergencyLevel = "Emergent";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateActiveAlarmTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateActiveAlarmTemplateAction action = UpdateActiveAlarmTemplateAction()
action.uuid = "c3e82dade74732009d5f4fd0b462f65d"
action.alarmName = "VM-CPUAverageUsedUtilization"
action.comparisonOperator = "LessThanOrEqualTo"
action.period = 60
action.threshold = 80.0
action.repeatInterval = 1800
action.repeatCount = -1
action.emergencyLevel = "Emergent"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateActiveAlarmTemplateAction.Result res = action.call()
```

---

#### 修改事件报警器状态(ChangeEventSubscriptionState)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/change/eventSubscription/{uuid}/state
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeEventSubscriptionState": {
    "state": "Disabled"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" /
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" /
-X PUT -d '{"changeEventSubscriptionState":{"state":"Disabled"}}' http://localhost:8080/zstack/v1/zwatch/change/eventSubscription/2140655d1d183a6690c0eecdbc721ec0/state
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| state | String | body (包含在**changeEventSubscriptionState**结构中) | 事件报警器状态 | Enabled Disabled | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



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
ChangeEventSubscriptionStateAction action = new ChangeEventSubscriptionStateAction();
action.uuid = "2140655d1d183a6690c0eecdbc721ec0";
action.state = "Disabled";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeEventSubscriptionStateAction.Result res = action.call();
```

 Python SDK

```
ChangeEventSubscriptionStateAction action = ChangeEventSubscriptionStateAction()
action.uuid = "2140655d1d183a6690c0eecdbc721ec0"
action.state = "Disabled"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeEventSubscriptionStateAction.Result res = action.call()
```

---

#### 事件订阅（Event Subscription）

---

#### 订阅事件 (SubscribeEvent)



##### API请求

 URLs

```
POST zstack/v1/zwatch/events/subscriptions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "namespace": "ZStack/VM",
    "eventName": "VMUuid",
    "actions": [
      {
        "actionUuid": "2fbeae18082445d09c890fa076ff9fd9",
        "actionType": "sns"
      }
    ],
    "labels": [
      {
        "key": "VMUuid",
        "value": "0c60949d81964f23a0d860b30472c51b",
        "op": "Equal"
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
-X POST -d '{"params":{"namespace":"ZStack/VM","eventName":"VMUuid","actions":[{"actionUuid":"c7b1b7e054494aeab843a9c7371cdfc4","actionType":"sns"}],"labels":[{"key":"VMUuid","value":"47056270f2ea45409a419f1165f83945","op":"Equal"}]}}' \
http://localhost:8080/zstack/v1/zwatch/events/subscriptions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| namespace | String | body(包含在**params**结构中) | 名字空间 |  | 2.3 |
| eventName | String | body(包含在**params**结构中) | 事件名 |  | 2.3 |
| actions (可选) | List | body(包含在**params**结构中) | 事件动作 |  | 2.3 |
| labels (可选) | List | body(包含在**params**结构中) | 事件标签 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| emergencyLevel (可选) | String | body(包含在**params**结构中) | 报警等级 | Emergent Important Normal | 3.8.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.8.0 |



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
SubscribeEventAction action = new SubscribeEventAction();
action.namespace = "ZStack/VM";
action.eventName = "VMUuid";
action.actions = asList([actionUuid:08a502ad6e944ceb8c70f523b69385e3, actionType:sns]);
action.labels = asList([key:VMUuid, value:896391b873dc41288c0841b5fe8cb71b, op:Equal]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SubscribeEventAction.Result res = action.call();
```

 Python SDK

```
SubscribeEventAction action = SubscribeEventAction()
action.namespace = "ZStack/VM"
action.eventName = "VMUuid"
action.actions = [[actionUuid:393df28f2bab49aba01fc229dae849c8, actionType:sns]]
action.labels = [[key:VMUuid, value:abd2e73d08d248b6be73e31eb6a97e82, op:Equal]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SubscribeEventAction.Result res = action.call()
```

---

#### 退订事件（UnsubscribeEvent）



##### API请求

 URLs

```
DELETE zstack/v1/zwatch/events/subscriptions/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/zwatch/events/subscriptions/298e2e2506163851a268907ed8ea7995
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



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
UnsubscribeEventAction action = new UnsubscribeEventAction();
action.uuid = "298e2e2506163851a268907ed8ea7995";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UnsubscribeEventAction.Result res = action.call();
```

 Python SDK

```
UnsubscribeEventAction action = UnsubscribeEventAction()
action.uuid = "298e2e2506163851a268907ed8ea7995"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UnsubscribeEventAction.Result res = action.call()
```

---

#### 查询事件订阅 （QueryEventSubscription）



##### API请求

 URLs

```
GET zstack/v1/zwatch/events/subscriptions
GET zstack/v1/zwatch/events/subscriptions/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/events/subscriptions?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/events/subscriptions/57618e9763ce3b7e990870c3a7ae8c53
```



可查询字段

运行CLI命令行工具，输入QueryEventSubscription并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "9404fe697a6b4d7dbac98065af20dc57",
      "namespace": "ZStack/VM",
      "eventName": "org.zstack.zwatch.datatype.EventFamily@80723ca",
      "state": "Enabled",
      "actions": [
        {
          "subscriptionUuid": "650cf6a269284671a42f93631c87dfec",
          "actionType": "sns",
          "actionUuid": "fe296dcbc31c4afa9f76494b1930c8cc"
        }
      ],
      "labels": [
        {
          "uuid": "d29fe54ca47540a9b20b308429f21434",
          "key": "DestinationHostUuid",
          "operator": "Equal",
          "value": "733509c8c5684c678ffe99f59d4aba21"
        }
      ],
      "lastOpDate": "Jul 6, 2018 1:51:00 PM",
      "createDate": "Jul 6, 2018 1:51:00 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.1 |
| inventories | List | 详情参考[inventories] | 2.3.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.1 |
| description | String | 错误的概要描述 | 2.3.1 |
| details | String | 错误的详细信息 | 2.3.1 |
| elaboration | String | 保留字段，默认为null | 2.3.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.1 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.1 |
| name | String | 资源名称 | 3.0.0 |
| namespace | String | 名字空间 | 2.3.1 |
| eventName | String | 事件名 | 2.3.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.1 |
| createDate | Timestamp | 创建时间 | 2.3.1 |
| state | EventSubscriptionState | 详情参考[state] | 2.3.1 |
| actions | List | 详情参考[actions] | 2.3.1 |
| labels | List | 详情参考[labels] | 2.3.1 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.3.1 |
| ordinal | int |  | 2.3.1 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| subscriptionUuid | String | 事件订阅UUID | 2.3.1 |
| actionType | String | 动作类型 | 2.3.1 |
| actionUuid | String | 动作UUID | 2.3.1 |

 #labels

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3.1 |
| key | String | 标签名 | 2.3.1 |
| value | String | 标签值 | 2.3.1 |
| operator | Operator | 详情参考[operator] | 2.3.1 |

 #operator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| op | String |  | 2.3.1 |
| name | String | 资源名称 | 2.3.1 |
| ordinal | int |  | 2.3.1 |



##### SDK示例

 Java SDK

```
QueryEventSubscriptionAction action = new QueryEventSubscriptionAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryEventSubscriptionAction.Result res = action.call();
```

 Python SDK

```
QueryEventSubscriptionAction action = QueryEventSubscriptionAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryEventSubscriptionAction.Result res = action.call()
```

---

#### 更新事件订阅的标签(UpdateEventSubscriptionLabel)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/events/subscriptions/labels/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateEventSubscriptionLabel": {
    "key": "VMUuid",
    "value": "42c233c17c6e4907b7be1f11a41f3a17",
    "operator": "Equal"
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
-X PUT -d '{"updateEventSubscriptionLabel":{"key":"VMUuid","value":"228fc2c5041248df9b0d317f6f7a8585","operator":"Equal"}}' http://localhost:8080/zstack/v1/zwatch/events/subscriptions/labels/cfb859d412933a1da57ae99e2aa442ce/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 原事件订阅标签的UUID，唯一标示该资源 |  | 3.9.0 |
| key | String | body(包含在**updateEventSubscriptionLabel**结构中) | 标签的新名 |  | 3.9.0 |
| value | String | body(包含在**updateEventSubscriptionLabel**结构中) | 标签的新值 |  | 3.9.0 |
| operator | String | body(包含在**updateEventSubscriptionLabel**结构中) | 标签的新操作符 | Regex Equal | 3.9.0 |
| systemTags (可选) | List | body |  |  | 3.9.0 |
| userTags (可选) | List | body |  |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d937a1c6d9de3f2285b0cb23316624a8",
    "key": "VMUuid",
    "operator": "Equal",
    "value": "19cf33283b484ff6b73a6d98e1d762f5"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | EventSubscriptionLabelInventory | 详情参考[inventory] | 3.9.0 |

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
| key | String | 标签名 | 3.9.0 |
| value | String | 标签值 | 3.9.0 |
| operator | Operator | 详情参考[operator] | 3.9.0 |

 #operator

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| op | String |  | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| ordinal | int |  | 3.9.0 |



##### SDK示例

 Java SDK

```
UpdateEventSubscriptionLabelAction action = new UpdateEventSubscriptionLabelAction();
action.uuid = "cfb859d412933a1da57ae99e2aa442ce";
action.key = "VMUuid";
action.value = "9d7099dd361049aaaf801ca6b17b2858";
action.operator = "Equal";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateEventSubscriptionLabelAction.Result res = action.call();
```

 Python SDK

```
UpdateEventSubscriptionLabelAction action = UpdateEventSubscriptionLabelAction()
action.uuid = "cfb859d412933a1da57ae99e2aa442ce"
action.key = "VMUuid"
action.value = "27e59f9fe7ed46118a2f6b8a383ce494"
action.operator = "Equal"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateEventSubscriptionLabelAction.Result res = action.call()
```

---

#### 报警文本模板（Text Template）

---

#### 创建报警消息模板(CreateSNSTextTemplate)



##### API请求

 URLs

```
POST zstack/v1/zwatch/alarms/sns/text-templates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "email template",
    "applicationPlatformType": "Email",
    "subject": "Alarm ${ALARM_NAME} [${ALARM_METRIC} ${ALARM_COMPARISON_OPERATOR} threshold ${ALARM_THRESHOLD}] changes status to ${ALARM_CURRENT_STATUS}",
    "recoverySubject": "Alarm ${ALARM_NAME} ${TITLE_ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "recoveryTemplate": "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": true
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
-X POST -d '{"params":{"name":"email template","applicationPlatformType":"Email","subject":"Alarm ${ALARM_NAME} [${ALARM_METRIC} ${ALARM_COMPARISON_OPERATOR} threshold ${ALARM_THRESHOLD}] changes status to ${ALARM_CURRENT_STATUS}","recoverySubject":"Alarm ${ALARM_NAME} ${TITLE_ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}","template":"Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}","recoveryTemplate":"Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}","defaultTemplate":true}}' http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| applicationPlatformType | String | body(包含在**params**结构中) | SNS应用平台类型 |  | 2.3 |
| template | String | body(包含在**params**结构中) | 报警消息模板文本 |  | 2.3 |
| recoveryTemplate | String | body(包含在**params**结构中) | 恢复报警模板文本 |  | 3.4.0 |
| defaultTemplate (可选) | Boolean | body(包含在**params**结构中) | 是否作为默认模板 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| type（可选） | String | body(包含在**params**结构中) |  | alarm event combined | 5.1.8 |
| tagUuids（可选） | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.1.8 |
| subject (可选) | String | body(包含在**params**结构中) | 主题 |  | 5.1.8 |
| recoverySubject | String | body(包含在**params**结构中) | 恢复主题 |  | 5.1.8 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "533c0a77d8694f068ea0425f587c9c2a",
    "name": "email template",
    "applicationPlatformType": "Email",
    "subject": "Alarm ${ALARM_NAME} [${ALARM_METRIC} ${ALARM_COMPARISON_OPERATOR} threshold ${ALARM_THRESHOLD}] changes status to ${ALARM_CURRENT_STATUS}",
    "recoverySubject": "Alarm ${ALARM_NAME} ${TITLE_ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "recoveryTemplate": "Resource ${EVENT_RESOURCE_ID} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": false,
    "createDate": "Jun 13, 2024 5:26:38 PM",
    "lastOpDate": "Jun 13, 2024 5:26:38 PM"
  }
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSTextTemplateInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| applicationPlatformType | String | 应用平台类型 | 2.3 |
| template | String | 模板文本 | 2.3 |
| recoveryTemplate | String | 恢复模板文本 | 5.1.8 |
| defaultTemplate | Boolean | 是否为默认模板 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateSNSTextTemplateAction action = new CreateSNSTextTemplateAction();
action.name = "email template";
action.applicationPlatformType = "Email";
action.subject = "Alarm ${ALARM_NAME} [${ALARM_METRIC} ${ALARM_COMPARISON_OPERATOR} threshold ${ALARM_THRESHOLD}] changes status to ${ALARM_CURRENT_STATUS}";
action.recoverySubject = "Alarm ${ALARM_NAME} ${TITLE_ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}";
action.template = "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}";
action.recoveryTemplate = "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}";
action.defaultTemplate = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSTextTemplateAction.Result res = action.call();

```

 Python SDK

```
CreateSNSTextTemplateAction action = CreateSNSTextTemplateAction()
action.name = "email template"
action.applicationPlatformType = "Email"
action.subject = "Alarm ${ALARM_NAME} [${ALARM_METRIC} ${ALARM_COMPARISON_OPERATOR} threshold ${ALARM_THRESHOLD}] changes status to ${ALARM_CURRENT_STATUS}"
action.recoverySubject = "Alarm ${ALARM_NAME} ${TITLE_ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}"
action.template = "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}"
action.recoveryTemplate = "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}"
action.defaultTemplate = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSTextTemplateAction.Result res = action.call()

```

---

#### 删除报警消息模板(DeleteSNSTextTemplate)



删除报警消息模板。

##### API请求

 URLs

```
DELETE zstack/v1/zwatch/alarms/sns/text-templates/{uuid}?deleteMode={deleteMode}
```

 Headers

```

Authorization: OAuth the-session-uuid
```

 Curl示例

```

curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/a4ce47e628303c4fa55743f1b84c61b4?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | url |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



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

DeleteSNSTextTemplateAction action = new DeleteSNSTextTemplateAction();
action.uuid = "a4ce47e628303c4fa55743f1b84c61b4";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSNSTextTemplateAction.Result res = action.call();
```

 Python SDK

```

DeleteSNSTextTemplateAction action = DeleteSNSTextTemplateAction()
action.uuid = "a4ce47e628303c4fa55743f1b84c61b4"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSNSTextTemplateAction.Result res = action.call()
```

---

#### 更新报警消息模板(UpdateSNSTextTemplate)



更新报警消息模板。

##### API请求

 URLs

```
PUT zstack/v1/zwatch/alarms/sns/text-templates/{uuid}/actions
```

 Headers

```

Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSTextTemplate": {
    "name": "email template",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "recoveryTemplate": "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": true
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
-X PUT -d '{"updateSNSTextTemplate":{"name":"email template","template":"Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}","recoveryTemplate":"Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}","defaultTemplate":true}}' http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/108482a9d3153463abd49712701ad937/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| name (可选) | String | body(包含在**updateSNSTextTemplate**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**updateSNSTextTemplate**结构中) | 资源的详细描述 |  | 2.3 |
| template (可选) | String | body(包含在**updateSNSTextTemplate**结构中) | 报警消息模板文本 |  | 2.3 |
| recoveryTemplate (可选) | String | body(包含在**updateSNSTextTemplate**结构中) | 恢复报警消息模板文本 |  | 3.4.0 |
| defaultTemplate (可选) | Boolean | body(包含在**updateSNSTextTemplate**结构中) | 是否为默认模板 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cc881c03f4c04ea9a0e0dda61f4c2f00",
    "name": "email template",
    "applicationPlatformType": "Email",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "recoveryTemplate": "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": false,
    "createDate": "Jul 6, 2018 1:51:22 PM",
    "lastOpDate": "Jul 6, 2018 1:51:22 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSTextTemplateInventory | 详情参考[inventory] | 2.3 |

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
| applicationPlatformType | String | 应用平台类型 | 2.3 |
| template | String | 模板文本 | 2.3 |
| recoveryTemplate | String | 模板文本 | 3.4.0 |
| defaultTemplate | Boolean | 是否为默认模板 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateSNSTextTemplateAction action = new UpdateSNSTextTemplateAction();
action.uuid = "108482a9d3153463abd49712701ad937";
action.name = "email template";
action.template = "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}";
action.recoveryTemplate = "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}";
action.defaultTemplate = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSTextTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSTextTemplateAction action = UpdateSNSTextTemplateAction()
action.uuid = "108482a9d3153463abd49712701ad937"
action.name = "email template"
action.template = "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}"
action.recoveryTemplate = "Alarm ${ALARM_NAME} Resource ${ALARM_RESOURCE_NAME} changes status to ${ALARM_CURRENT_STATUS}"
action.defaultTemplate = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSTextTemplateAction.Result res = action.call()
```

---

#### 查询报警消息模板(QuerySNSTextTemplate)



查询报警消息模板。

##### API请求

URLs

```
GET zstack/v1/zwatch/alarms/sns/text-templates
GET zstack/v1/zwatch/alarms/sns/text-templates/{uuid}
```

Headers

```
Authorization: OAuth the-session-uuid
```

Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/1dc97bd699e739c6968fb3e702ab4cb6
```

可查询字段

运行CLI命令行工具，输入`QuerySNSTextTemplate`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "c275ce35fae13a09bcd4c54a7406bd3e",
      "name": "Test-SNS-Template",
      "description": "sns text template",
      "applicationPlatformType": "Email",
      "template": "报警器 ${ALARM_NAME} 状态改变成 ${ALARM_CURRENT_STATUS}",
      "defaultTemplate": false,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
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
| applicationPlatformType | String | 应用平台类型 | 2.3 |
| template | String | 模板文本 | 2.3 |
| defaultTemplate | Boolean | 是否为默认模板 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QuerySNSTextTemplateAction action = new QuerySNSTextTemplateAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSTextTemplateAction.Result res = action.call();
```

 Python SDK

```
QuerySNSTextTemplateAction action = QuerySNSTextTemplateAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSTextTemplateAction.Result res = action.call()
```

---

#### 创建SNS监控阿里云短信模板(CreateAliyunSmsSNSTextTemplate)



##### API请求

 URLs

```
POST zstack/v1/zwatch/alarms/sns/text-templates/aliyun-sms
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "sign": "举个例子",
    "alarmTemplateCode": "SMS_153055065",
    "eventTemplateCode": "SMS_153055066",
    "eventTemplate": "Event ${EVENT_NAME} happend.",
    "name": "aliyunSMS Template",
    "applicationPlatformType": "AliyunSms",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": true
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
-X POST -d '{"params":{"sign":"举个例子","alarmTemplateCode":"SMS_153055065","eventTemplateCode":"SMS_153055066","eventTemplate":"Event ${EVENT_NAME} happend.","name":"aliyunSMS Template","applicationPlatformType":"AliyunSms","template":"Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}","defaultTemplate":true}}' http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/aliyun-sms
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sign | String | body(包含在**params**结构中) | 短信签名名称 |  | 3.7.0 |
| alarmTemplateCode | String | body(包含在**params**结构中) | 资源报警器模板Code |  | 3.7.0 |
| eventTemplateCode | String | body(包含在**params**结构中) | 事件报警器模板Code |  | 3.7.0 |
| eventTemplate (可选) | String | body(包含在**params**结构中) | 事件报警器模板文本 |  | 3.7.0 |
| name | String | body(包含在**params**结构中) | 模板名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**params**结构中) | 模板的详细描述 |  | 3.7.0 |
| applicationPlatformType | String | body(包含在**params**结构中) | SNS应用平台类型 |  | 3.7.0 |
| template | String | body(包含在**params**结构中) | 资源报警器模板文本 |  | 3.7.0 |
| recoveryTemplate (可选) | String | body(包含在**params**结构中) | 恢复模板文本 |  | 3.7.0 |
| defaultTemplate (可选) | Boolean | body(包含在**params**结构中) | 是否作为默认模板 |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "335d5580cfad41d98e699d5d80830818",
    "name": "email template",
    "applicationPlatformType": "Email",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "recoveryTemplate": "Resource ${EVENT_RESOURCE_ID} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": false,
    "createDate": "Oct 8, 2019 5:31:52 PM",
    "lastOpDate": "Oct 8, 2019 5:31:52 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | SNSTextTemplateInventory | 详情参考[inventory] | 3.7.0 |

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
| applicationPlatformType | String | 应用平台类型 | 3.7.0 |
| template | String | 模板文本 | 3.7.0 |
| recoveryTemplate | String | 恢复模板文本 | 3.7.0 |
| defaultTemplate | Boolean | 是否为默认模板 | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
CreateAliyunSmsSNSTextTemplateAction action = new CreateAliyunSmsSNSTextTemplateAction();
action.sign = "举个例子";
action.alarmTemplateCode = "SMS_153055065";
action.eventTemplateCode = "SMS_153055066";
action.eventTemplate = "Event ${EVENT_NAME} happend.";
action.name = "aliyunSMS Template";
action.applicationPlatformType = "AliyunSms";
action.template = "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}";
action.defaultTemplate = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAliyunSmsSNSTextTemplateAction.Result res = action.call();
```

 Python SDK

```
CreateAliyunSmsSNSTextTemplateAction action = CreateAliyunSmsSNSTextTemplateAction()
action.sign = "举个例子"
action.alarmTemplateCode = "SMS_153055065"
action.eventTemplateCode = "SMS_153055066"
action.eventTemplate = "Event ${EVENT_NAME} happend."
action.name = "aliyunSMS Template"
action.applicationPlatformType = "AliyunSms"
action.template = "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}"
action.defaultTemplate = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAliyunSmsSNSTextTemplateAction.Result res = action.call()
```

---

#### 更新SNS阿里云短信文本模板(UpdateAliyunSmsSNSTextTemplate)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/alarms/sns/text-templates/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAliyunSmsSNSTextTemplate": {
    "alarmTemplateCode": "SMS_123456789",
    "sign": "示例签名",
    "eventTemplateCode": "SMS_987654321",
    "eventTemplate": "your aliyun sms event template here",
    "name": "aliyunSmsTemplate",
    "description": "description",
    "template": "your aliyun sms alarm template here",
    "defaultTemplate": true
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
-X PUT -d '{"updateAliyunSmsSNSTextTemplate":{"alarmTemplateCode":"SMS_123456789","sign":"示例签名","eventTemplateCode":"SMS_987654321","eventTemplate":"your aliyun sms event template here","name":"aliyunSmsTemplate","description":"description","template":"your aliyun sms alarm template here","defaultTemplate":true}}' http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/d7e89644ef273ca8baf451bf845553fd/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| alarmTemplateCode (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 资源报警器模板Code |  | 3.7.0 |
| sign (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 短信签名名称 |  | 3.7.0 |
| eventTemplateCode (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 事件报警器模板Code |  | 3.7.0 |
| eventTemplate (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 事件报警器模板文本 |  | 3.7.0 |
| uuid | String | url | 模板的UUID，唯一标示该资源 |  | 3.7.0 |
| name (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 模板名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 模板的详细描述 |  | 3.7.0 |
| template (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 资源报警器模板文本 |  | 3.7.0 |
| recoveryTemplate (可选) | String | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 恢复模板文本 |  | 3.7.0 |
| defaultTemplate (可选) | Boolean | body(包含在**updateAliyunSmsSNSTextTemplate**结构中) | 是否为默认模板 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "alarmTemplateCode": "SMS_153055065",
    "sign": "示例签名",
    "eventTemplateCode": "SMS_123456789",
    "eventTemplate": "Event ${EVENT_NAME} had just happened",
    "uuid": "f8b819b8af9c402fac43932ef95cb468",
    "name": "email template",
    "applicationPlatformType": "AliyunSms",
    "template": "Alarm ${ALARM_NAME} changes status to ${ALARM_CURRENT_STATUS}",
    "recoveryTemplate": "Resource ${EVENT_RESOURCE_ID} changes status to ${ALARM_CURRENT_STATUS}",
    "defaultTemplate": false,
    "createDate": "Oct 8, 2019 5:32:12 PM",
    "lastOpDate": "Oct 8, 2019 5:32:12 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | AliyunSmsSNSTextTemplateInventory | 详情参考[inventory] | 3.7.0 |

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
| alarmTemplateCode | String | 资源报警器模板Code | 3.7.0 |
| sign | String | 短信签名名称 | 3.7.0 |
| eventTemplateCode | String | 事件报警器模板Code | 3.7.0 |
| eventTemplate | String | 事件报警器模板文本 | 3.7.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 模板名称 | 3.7.0 |
| description | String | 模板的详细描述 | 3.7.0 |
| applicationPlatformType | String | 应用平台类型 | 3.7.0 |
| template | String | 资源报警器模板文本 | 3.7.0 |
| recoveryTemplate | String | 恢复模板文本 | 3.7.0 |
| defaultTemplate | Boolean | 是否为默认模板 | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
UpdateAliyunSmsSNSTextTemplateAction action = new UpdateAliyunSmsSNSTextTemplateAction();
action.alarmTemplateCode = "SMS_123456789";
action.sign = "示例签名";
action.eventTemplateCode = "SMS_987654321";
action.eventTemplate = "your aliyun sms event template here";
action.uuid = "d7e89644ef273ca8baf451bf845553fd";
action.name = "aliyunSmsTemplate";
action.description = "description";
action.template = "your aliyun sms alarm template here";
action.defaultTemplate = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAliyunSmsSNSTextTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateAliyunSmsSNSTextTemplateAction action = UpdateAliyunSmsSNSTextTemplateAction()
action.alarmTemplateCode = "SMS_123456789"
action.sign = "示例签名"
action.eventTemplateCode = "SMS_987654321"
action.eventTemplate = "your aliyun sms event template here"
action.uuid = "d7e89644ef273ca8baf451bf845553fd"
action.name = "aliyunSmsTemplate"
action.description = "description"
action.template = "your aliyun sms alarm template here"
action.defaultTemplate = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAliyunSmsSNSTextTemplateAction.Result res = action.call()
```

---

#### 查询SNS监控阿里云短信模板(QueryAliyunSmsSNSTextTemplate)



##### API请求

 URLs

```
GET zstack/v1/zwatch/alarms/sns/text-templates/aliyun-sms
GET zstack/v1/zwatch/alarms/sns/text-templates/aliyun-sms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/aliyun-sms?q=smsTemplateCode=SMS_123456789
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/alarms/sns/text-templates/aliyun-sms/f7ffc76a46233bc590acd41e1954ed29
```



可查询字段

运行CLI命令行工具，输入QueryAliyunSmsSNSTextTemplate并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QueryAliyunSmsSNSTextTemplateAction action = new QueryAliyunSmsSNSTextTemplateAction();
action.conditions = asList("smsTemplateCode=SMS_123456789");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAliyunSmsSNSTextTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryAliyunSmsSNSTextTemplateAction action = QueryAliyunSmsSNSTextTemplateAction()
action.conditions = ["smsTemplateCode=SMS_123456789"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAliyunSmsSNSTextTemplateAction.Result res = action.call()
```

---

#### 审计

---

#### 获取审计数据(GetAuditData)



##### API请求

 URLs

```
GET zstack/v1/zwatch/audits
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/audits?startTime=1.557300700509E12&limit=50.0&auditType=Resource
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| startTime (可选) | Long | query | 起始时间 |  | 2.3 |
| endTime (可选) | Long | query | 结束时间 |  | 2.3 |
| limit (可选) | Integer | query | 最大返回条数 |  | 2.3 |
| labels (可选) | List | query | 过滤标签列表 |  | 2.3 |
| auditType (可选) | AuditType | query | 审计类型，默认为Resource | Login Resource | 3.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.3 |
| userTags (可选) | List | query | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "audits": [
    {
      "resourceUuid": "b1ca3fab6ebc4302ad9249d5402cb06c",
      "resourceType": "VmInstanceVO",
      "clientIp": "172.0.0.1",
      "clientBrowser": "Chrome/69.0.3497.81",
      "apiName": "org.zstack.header.vm.APISetVmRDPMsg",
      "operatorAccountUuid": "36c27e8ff05c4780bf6d2fa65700f22e",
      "duration": 22.0,
      "requestUuid": "d78093c0b2fb3850b3ce563b3a0b029d",
      "responseUuid": "08cf3fd2c4614811b4acc0620e20a98e",
      "sessionUuid": "05e5c663eb794faab5c5606c38103a17",
      "responseDump": "{\"success\":true}",
      "time": 1.512037844556E12
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| audits | List | 详情参考[audits] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #audits

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourceUuid | String | 资源UUID | 2.3 |
| resourceType | String | 资源类型 | 2.3 |
| apiName | String | API名称 | 2.3 |
| error | String | 错误详情 | 2.3 |
| operatorAccountUuid | String | 发起API账号UUID | 2.3 |
| duration | long | API耗时 | 2.3 |
| requestUuid | String | API请求UUID | 2.3 |
| responseUuid | String | API返回UUID | 2.3 |
| sessionUuid | String | 会话UUID | 2.3 |
| requestDump | String | API请求JSON存档 | 2.3 |
| responseDump | String | API返回JSON存档 | 2.3 |
| time | long | 记录生成时间 | 2.3 |



##### SDK示例

 Java SDK

```
GetAuditDataAction action = new GetAuditDataAction();
action.startTime = 1.557300701132E12;
action.limit = 50.0;
action.conditions = asList("VMUuid=4ca37b1e21e846bf8d35b23d4138489c");
action.auditType = "Resource";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetAuditDataAction.Result res = action.call();
```

 Python SDK

```
GetAuditDataAction action = GetAuditDataAction()
action.startTime = 1.557300701178E12
action.limit = 50.0
action.conditions = [VMUuid=6623c395df0d44b6afc3732e76aac0ac]
action.auditType = "Resource"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetAuditDataAction.Result res = action.call()
```

---

#### 附录

---

#### 所有Metric元数据



用户可以用`GetAllMetricMetadata`获取系统中已定义的metric以及其元数据。以ZStack Cloud 4.4.0版本为例：

```
{
    "metrics": [
        {
            "description": "管理节点数据目录磁盘空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementServerDirFreeCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点数据目录磁盘空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementServerDirFreeCapacityInPercent",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点数据目录磁盘已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementServerDirUsedCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点数据目录磁盘占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementServerDirUsedCapacityInPercent",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点influxdb目录磁盘占用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementInfluxDBUsedCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点prometheus目录磁盘占用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementPrometheusUsedCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点ZStack日志目录磁盘占用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementZStackLogCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点ZStack备份目录磁盘占用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementZStackDBBackupCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "管理节点Mysql目录磁盘占用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "DirPath"
            ],
            "name": "ManagementMysqlCapacityInBytes",
            "namespace": "ZStack/System"
        },
        {
            "description": "CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "CPUIdleUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "CPUSystemUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "CPUUserUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "CPUWaitUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAllIdleUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "CPUUsedUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAllUsedUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "平均CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAverageUsedUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "平均CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAverageUserUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "平均CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAverageWaitUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "平均CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAverageSystemUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "平均CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "CPUAverageIdleUtilization",
            "namespace": "ZStack/Host"
        },
        {
            "description": "内存未使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "MemoryFreeBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "内存未使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "MemoryFreeInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "内存使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "MemoryUsedBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "内存使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "MemoryUsedInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的读IOPS总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadOps",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllReadOps",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的写IOPS总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteOps",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllWriteOps",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的读带宽总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllReadBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的写带宽总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllWriteBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkAllInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInPackets",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkAllInPackets",
            "namespace": "ZStack/Host"
        },
        {
            "description": "网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInErrors",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkAllInErrors",
            "namespace": "ZStack/Host"
        },
        {
            "description": "网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkAllOutBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutPackets",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkAllOutPackets",
            "namespace": "ZStack/Host"
        },
        {
            "description": "网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutErrors",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkAllOutErrors",
            "namespace": "ZStack/Host"
        },
        {
            "description": "Conntrack连接数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkConntrackCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "Conntrack已使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "NetworkConntrackInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskTotalCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllFreeCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllFreeCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskAllUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "磁盘容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "云平台系统文件占用磁盘容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskZStackUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "云平台系统文件占用磁盘容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskZStackUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "客户业务数据占用磁盘容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskTransUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "客户业务数据占用磁盘容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskTransUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "根盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskRootUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "根盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskRootUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的IO平均时延",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskLatency",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的IO平均时延",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "Wwid"
            ],
            "name": "DiskLatencyWwid",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的写IOPS总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "Wwid"
            ],
            "name": "DiskWriteOpsWwid",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的读IOPS总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "Wwid"
            ],
            "name": "DiskReadOpsWwid",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的写带宽总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "Wwid"
            ],
            "name": "DiskWriteBytesWwid",
            "namespace": "ZStack/Host"
        },
        {
            "description": "所有物理机对同一磁盘标识的读带宽总量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "Wwid"
            ],
            "name": "DiskReadBytesWwid",
            "namespace": "ZStack/Host"
        },
        {
            "description": "卷组总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "VolumeGroupName"
            ],
            "name": "VolumeGroupCapacityInbytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "卷组可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "VolumeGroupName"
            ],
            "name": "VolumeGroupFreeCapacityInbytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "卷组已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "VolumeGroupName"
            ],
            "name": "VolumeGroupUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "RAID状态(0为正常，5为降级)",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "TargetId"
            ],
            "name": "RaidState",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理磁盘状态",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "SlotNumber",
                "DiskGroup"
            ],
            "name": "PhysicalDiskState",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理磁盘温度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "SlotNumber",
                "DiskGroup"
            ],
            "name": "PhysicalDiskTemperature",
            "namespace": "ZStack/Host"
        },
        {
            "description": "供电单元状态（0为正常，其他为异常）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "PowerSupplyId"
            ],
            "name": "PowerSupply",
            "namespace": "ZStack/Host"
        },
        {
            "description": "IPMI模块状态（0为正常，其他为异常）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "IpmiStatus",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理网卡状态（0为正常，其他为异常，Speed单位为Mb/s，表示千兆/万兆网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "InterfaceName",
                "InterfaceSpeed"
            ],
            "name": "PhysicalNetworkInterface",
            "namespace": "ZStack/Host"
        },
        {
            "description": "XFS文件系统碎片化程度百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "DiskXfsFragInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "HostTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ConnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ConnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "DisconnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "DisconnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "KVM物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "KVMHostTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连KVM接物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "KVMConnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接KVM物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "KVMConnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接KVM物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "KVMDisconnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接KVM物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "KVMDisconnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "ESX物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ESXHostTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接ESX物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ESXConnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接ESX物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ESXConnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接ESX物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ESXDisconnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接ESX物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ESXDisconnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "神龙物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "XDragonHostTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接神龙物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "XDragonConnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接神龙物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "XDragonConnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接神龙物理机数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "XDragonDisconnectedHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接神龙物理机百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "XDragonDisconnectedHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "弹性裸金属网关节点数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "Baremetal2GateWayTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接弹性裸金属网关节点数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "Baremetal2ConnectedGateWayCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已连接弹性裸金属网关节点百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "Baremetal2ConnectedGateWayInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接弹性裸金属网关节点数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "Baremetal2DisconnectedGateWayCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "未连接弹性裸金属网关节点百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "Baremetal2DisconnectedGateWayInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "全部CPU数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPUCapacityTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已使用CPU数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPUUsedCapacityCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已禁用CPU数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPULockedCapacityCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已使用CPU百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPUUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已禁用CPU百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPULockedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "可用CPU数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPUAvailableCapacityCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "可用CPU百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "CPUAvailableCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机已使用CPU数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "CPUUsedCapacityPerHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机已使用CPU百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "CPUUsedCapacityPerHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机可用CPU数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "CPUAvailableCapacityPerHostCount",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机可用CPU百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "CPUAvailableCapacityPerHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "内存容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryCapacityTotal",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已使用内存容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已使用内存百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已禁用内存容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryLockedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "已禁用内存容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryLockedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "剩余内存容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryAvailableCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "剩余内存容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "MemoryAvailableCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机已使用内存容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "MemoryUsedCapacityPerHostInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机已使用内存容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "MemoryUsedCapacityPerHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机可用内存容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "MemoryAvailableCapacityPerHostInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机可用内存容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "HypervisorType"
            ],
            "name": "MemoryAvailableCapacityPerHostInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "v2v迁移主机容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "V2VAvailableCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "v2v迁移主机容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "V2VAvailableCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "v2v迁移主机己用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "V2VUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "v2v迁移主机己用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "V2VUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机风扇转速",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "FanSpeedName"
            ],
            "name": "FanSpeedRpm",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机风扇状态（0为正常，其他为异常）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "FanSpeedName"
            ],
            "name": "FanSpeedState",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机CPU温度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "CpuTemperature",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机SSD剩余寿命",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter",
                "SerialNumber"
            ],
            "name": "SSDLifeLeft",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机块设备已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "BlockDeviceUsedCapacityInBytes",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机块设备已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "BlockDeviceUsedCapacityInPercent",
            "namespace": "ZStack/Host"
        },
        {
            "description": "虚拟IP下行网络流量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VipUUID"
            ],
            "name": "VIPInBoundTrafficInBytes",
            "namespace": "ZStack/VIP"
        },
        {
            "description": "虚拟IP下行网络包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VipUUID"
            ],
            "name": "VIPInBoundTrafficInPackages",
            "namespace": "ZStack/VIP"
        },
        {
            "description": "虚拟IP上行网络流量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VipUUID"
            ],
            "name": "VIPOutBoundTrafficInBytes",
            "namespace": "ZStack/VIP"
        },
        {
            "description": "虚拟IP上行网络包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VipUUID"
            ],
            "name": "VIPOutBoundTrafficInPackages",
            "namespace": "ZStack/VIP"
        },
        {
            "description": "项目虚拟机quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "VmQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目运行主机百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "RunningVMInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目CPUquota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "CPUQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目内存quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "MemoryQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目GPU quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "GPUQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目亲和组quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "AffinityGroupQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目云盘快照quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "VolumeSnapshotQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目数据云盘quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "VolumeDataQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目使用存储容量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "VolumeCapacityQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目镜像数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "ImageQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目镜像容量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "ImageCapacityQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目使用备份容量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "BackupStorageCapacityQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目备份数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "BackupStorageQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目vxlan 数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "VxlanNetworkQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目三层网络数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "L3NetworkQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目安全组数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "SecurityGroupQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目虚拟ip数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "VipQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目弹性IP数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "EipQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目端口转发数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "PortForwardQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目负载均衡数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "LoadBalancerQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "项目监听器数量quota百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [
                "projectUuid"
            ],
            "name": "LoadBalancerListenerQuotaUsedInPercent",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "双管理节点数据库不同步",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "TimeNeededToSyncDB",
            "namespace": "ZStack/MN"
        },
        {
            "description": "仲裁IP不可达",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "DbFencerIpReachable",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点运行时长",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "MNProgressLasts",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点打开的socket数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "MNProgressSocketNum",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点的Java GC情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MNProgressGCStatus",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点的开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MNProgressExpends",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点处理消息数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MNProgressMsgNum",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点线程池情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MNThreadPoolStatus",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点队列情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MNQueueStatus",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql进程运行时长",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "MysqlLasts",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql进程开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MysqlProgressExpends",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql慢SQL数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "MysqlSlowQuery",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysqlprocesslist情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "db",
                "type"
            ],
            "name": "MysqlProcessLists",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql表大小",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "db",
                "type"
            ],
            "name": "MysqlTableSize",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql读请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MysqlQuerys",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql写请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MysqlTransactions",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql打开表及锁情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "table"
            ],
            "name": "MysqlOpenttables",
            "namespace": "ZStack/MN"
        },
        {
            "description": "mysql读cache命中",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MysqlQueryCache",
            "namespace": "ZStack/MN"
        },
        {
            "description": "数据库错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "MysqlDbError",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ManagementNodeIP",
                "type"
            ],
            "name": "ErrorCodes",
            "namespace": "ZStack/MN"
        },
        {
            "description": "prometheus进程运行时长",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip"
            ],
            "name": "PrometheusLasts",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "prometheus进程打开socket数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip"
            ],
            "name": "PrometheusSocketNum",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "prometheus进程开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "PrometheusExpends",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "prometheus进程磁盘空间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "PrometheusDiskSpace",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "prometheus请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "target",
                "type"
            ],
            "name": "PrometheusQueries",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "prometheus单位时间请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "target",
                "type"
            ],
            "name": "PrometheusDeltaQueries",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "influxdb进程运行时长",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip"
            ],
            "name": "InfluxdbLasts",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "influxdb进程打开socket数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip"
            ],
            "name": "InfluxdbSocketNum",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "influxdb进程开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "InfluxdbExpends",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "influxdb进程磁盘空间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "InfluxdbDiskSpace",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "influxdb请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "table",
                "type"
            ],
            "name": "InfluxdbQueries",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "influxdb单位时间请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "table",
                "type"
            ],
            "name": "InfluxdbDeltaQueries",
            "namespace": "ZStack/Prometheus"
        },
        {
            "description": "内部监控CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUSystemUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "内部监控CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUserUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "内部监控CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUWaitUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "内部监控CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUIdleUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "内部监控CPU已使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUsedUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "内部监控CPU系统进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemCPUAverageSystemUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内部监控CPU用户进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUserUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内部监控CPU等待IO完成平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemCPUAverageWaitUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内部监控CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemCPUAverageIdleUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内部监控CPU平均已使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUsedUtilization",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "DiskAllFreeCapacityInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "DiskAllFreeCapacityInPercent",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "DiskAllUsedCapacityInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "DiskAllUsedCapacityInPercent",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInPercent",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInPercent",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskTotalCapacityInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘每秒读字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskReadBytesPerSecond",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘每秒读请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskReadRequestPerSecond",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘每秒写字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskWriteBytesPerSecond",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机磁盘每秒写请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskWriteRequestPerSecond",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机网卡接收字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部网卡接收字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemNetworkAllInBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机网卡接收报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkInPackets",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部网卡接收报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemNetworkAllInPackets",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机网卡接收错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkInErrors",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部网卡接收错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemNetworkAllInErrors",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机网卡发送字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkOutBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部网卡发送字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemNetworkAllOutBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机网卡发送报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkOutPackets",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部网卡发送报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemNetworkAllOutPackets",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机网卡发送错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkOutErrors",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机全部网卡发送错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemNetworkAllOutErrors",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内存总字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemMemoryTotalBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内存空余节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemMemoryFreeBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内存已使用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内存可用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemMemoryAvailableBytes",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内存空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemMemoryFreePercent",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "弹性裸金属云主机内存使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "Baremetal2VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedPercent",
            "namespace": "ZStack/Baremetal2VM"
        },
        {
            "description": "rest同步API",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "SyncAPIs",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest异步API",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "ASyncAPIs",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest同步API增加量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "IncreaseSyncAPIs",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest异步API增加量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "IncreaseASyncAPIs",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest同步调用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "SyncRests",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest异步调用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "ASyncRests",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest同步调用量增量数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "IncreaseSyncRests",
            "namespace": "ZStack/REST"
        },
        {
            "description": "rest异步调用量增加数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ip",
                "type"
            ],
            "name": "IncreaseASyncRests",
            "namespace": "ZStack/REST"
        },
        {
            "description": "CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "CPUUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAverageUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "CPUIdleUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAllUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAllIdleUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUSystemUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUserUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUWaitUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUIdleUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU系统进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageSystemUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU用户进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUserUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU等待IO完成平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageWaitUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageIdleUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadOps",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllReadOps",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteOps",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllWriteOps",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllReadBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllWriteBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllFreeCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllFreeCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllUsedCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllUsedCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInPackets",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInPackets",
            "namespace": "ZStack/VM"
        },
        {
            "description": "网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInErrors",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInErrors",
            "namespace": "ZStack/VM"
        },
        {
            "description": "网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutPackets",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutPackets",
            "namespace": "ZStack/VM"
        },
        {
            "description": "网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutErrors",
            "namespace": "ZStack/VM"
        },
        {
            "description": "全部网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutErrors",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内存空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryFreeBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内存空闲百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryFreeInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内存已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryUsedBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内存已用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryUsedInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控全部内存总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryTotalBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控内存空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryFreeBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控内存已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控内存可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryAvailableBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控内存空闲容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryFreePercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "内部监控内存已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "zwatch客户端版本",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "ZWatchAgentVersion",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例崩溃检查模块运行情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "ZWatchAgentFeaturePvpanic",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU系统占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUSystemUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU用户占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUUserUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU IO等待占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUWaitUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUIdleUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU平均系统占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageSystemUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU平均用户占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageUserUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU平均IO等待占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageWaitUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageIdleUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageUsedUtilization",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例全部磁盘可用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllFreeCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例全部磁盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllFreeCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例全部磁盘使用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllUsedCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例全部磁盘使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllUsedCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例磁盘可用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskFreeCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例磁盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskFreeCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例磁盘使用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskUsedCapacityInBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例磁盘使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskUsedCapacityInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例内存总字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryTotalBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例内存空余节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryFreeBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例内存已使用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryUsedBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例内存可用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryAvailableBytes",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例内存空闲百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryFreePercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例内存使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryUsedPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例占用物理机的cpu开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUOccupiedByVm",
            "namespace": "ZStack/VM"
        },
        {
            "description": "负载均衡实例占用物理机的内存开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryOccupiedByVm",
            "namespace": "ZStack/VM"
        },
        {
            "description": "5分钟网卡入字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInBytesIn5Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "5分钟网卡入包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInPacketsIn5Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "5分钟网卡出字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutBytesIn5Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "5分钟网卡出包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutPacketsIn5Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "1分钟网卡入字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInBytesIn1Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "1分钟网卡入包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInPacketsIn1Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "1分钟网卡出字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutBytesIn1Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "1分钟网卡出包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutPacketsIn1Min",
            "namespace": "ZStack/VM"
        },
        {
            "description": "云主机数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "TotalVMCount",
            "namespace": "ZStack/VM"
        },
        {
            "description": "运行云主机数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "RunningVMCount",
            "namespace": "ZStack/VM"
        },
        {
            "description": "运行云主机百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "RunningVMInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "停止云主机数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "StoppedVMCount",
            "namespace": "ZStack/VM"
        },
        {
            "description": "停止云主机百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "StoppedVMInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "其他状态云主机数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "OtherStateVMCount",
            "namespace": "ZStack/VM"
        },
        {
            "description": "其他状态云主机百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "OtherStateVMInPercent",
            "namespace": "ZStack/VM"
        },
        {
            "description": "CDP任务已用分配容量使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "CdpTaskUuid",
                "CdpTaskStatus"
            ],
            "name": "CdpTaskUsedCapacityInPercent",
            "namespace": "ZStack/CdpTask"
        },
        {
            "description": "全部可用IP数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalAvailableIPCount",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "全部可用IP百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalAvailableIPInPercent",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "全部已用IP数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalUsedIPCount",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "全部已用IP百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalUsedIPInPercent",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "全部已禁用IP数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalLockedIPCount",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "全部已禁用IP百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalLockedIPInPercent",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "可用IP数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "L3NetworkUuid",
                "L3NetworkType"
            ],
            "name": "AvailableIPCount",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "可用IP百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "L3NetworkUuid",
                "L3NetworkType"
            ],
            "name": "AvailableIPInPercent",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "已用IP数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "L3NetworkUuid",
                "L3NetworkType"
            ],
            "name": "UsedIPCount",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "已用IP百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "L3NetworkUuid",
                "L3NetworkType"
            ],
            "name": "UsedIPInPercent",
            "namespace": "ZStack/L3Network"
        },
        {
            "description": "云盘总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalVolumeCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "根云盘总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "RootVolumeCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "根云盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "RootVolumeInPercent",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "数据云盘总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "DataVolumeCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "数据云盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "DataVolumeInPercent",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "可用数据云盘总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ReadyDataVolumeCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "可用数据云盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "ReadyDataVolumeInPercent",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "云盘快照总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalVolumeSnapshotCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "根云盘快照总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "RootVolumeSnapshotCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "根云盘快照百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "RootVolumeSnapshotInPercent",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "数据云盘快照总数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "DataVolumeSnapshotCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "数据云盘快照百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "DataVolumeSnapshotInPercent",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "云盘使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VolumeUuid"
            ],
            "name": "VolumeActualSizeInPercent",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "云盘碎片程度（Ext总数）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VolumeUuid"
            ],
            "name": "VolumeXfsFragCount",
            "namespace": "ZStack/Volume"
        },
        {
            "description": "内部监控CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUSystemUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUserUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUWaitUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUIdleUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU已使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUsedUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU系统进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemCPUAverageSystemUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU用户进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemCPUAverageUserUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU等待IO完成平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemCPUAverageWaitUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemCPUAverageIdleUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "内部监控CPU平均已使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemCPUAverageUsedUtilization",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "全部磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "DiskAllFreeCapacityInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "全部磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "DiskAllFreeCapacityInPercent",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "全部磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "DiskAllUsedCapacityInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "全部磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "DiskAllUsedCapacityInPercent",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInPercent",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInPercent",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskTotalCapacityInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘每秒读字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskReadBytesPerSecond",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘每秒读请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskReadRequestPerSecond",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘每秒写字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskWriteBytesPerSecond",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "磁盘每秒写请求数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskWriteRequestPerSecond",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机网卡接收字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机全部网卡接收字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemNetworkAllInBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机网卡接收报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkInPackets",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机全部网卡接收报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemNetworkAllInPackets",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机网卡接收错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkInErrors",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机全部网卡接收错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemNetworkAllInErrors",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机网卡发送字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkOutBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机全部网卡发送字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemNetworkAllOutBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机网卡发送报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkOutPackets",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机全部网卡发送报数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemNetworkAllOutPackets",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机网卡发送错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "OperatingSystemNetworkOutErrors",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机全部网卡发送错误报字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemNetworkAllOutErrors",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机内存总字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemMemoryTotalBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机内存空余节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemMemoryFreeBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机内存已使用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemMemoryUsedBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机内存可用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemMemoryAvailableBytes",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机内存空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemMemoryFreePercent",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "裸金属云主机内存使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BaremetalVMUuid"
            ],
            "name": "OperatingSystemMemoryUsedPercent",
            "namespace": "ZStack/BaremetalVM"
        },
        {
            "description": "全部镜像存储可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalAvailableCapacityInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部镜像存储可用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalAvailableCapacityInPercent",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像服务器可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "BackupStorageType"
            ],
            "name": "AvailableCapacityInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像服务器可用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "BackupStorageType"
            ],
            "name": "AvailableCapacityInPercent",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部镜像存储已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalUsedCapacityInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部镜像存储已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalUsedCapacityInPercent",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像服务器已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "BackupStorageType"
            ],
            "name": "UsedCapacityInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像服务器已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "BackupStorageType"
            ],
            "name": "UsedCapacityInPercent",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像存储禁用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalLockedCapacityInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像存储禁用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalLockedCapacityInPercent",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid"
            ],
            "name": "NetworkAllInBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInPackets",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid"
            ],
            "name": "NetworkAllInPackets",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInErrors",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid"
            ],
            "name": "NetworkAllInErrors",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid"
            ],
            "name": "NetworkAllOutBytes",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutPackets",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid"
            ],
            "name": "NetworkAllOutPackets",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutErrors",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "全部网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "BackupStorageUuid"
            ],
            "name": "NetworkAllOutErrors",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "云主机CPU使用率（兆赫）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmCPUUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机CPU使用率（兆赫）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VmCPUUsageMHZ",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机CPU空闲状态时间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VmCPUIdle",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机CPU使用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VmCPUUsed",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机内存使用率（百分比）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmMemoryUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "为云主机映射的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmMemoryGranted",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机主动读取或写入的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmMemoryActive",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "从云主机上回收的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmMemoryVmMemCtl",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "备份云主机内存的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmMemoryConsumed",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机所需的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VmMemoryEntitlement",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机磁盘使用率（百分比）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmDiskUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机磁盘读速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmDiskRead",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机磁盘写速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmDiskWrite",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机磁盘最大时延",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmDiskMaxTotalLatency",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "每秒向虚拟磁盘发出的读取命令的平均数目",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmVirtualDiskNumberReadAveraged",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "每秒向虚拟磁盘发出的写入命令的平均数目",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmVirtualDiskNumberWriteAveraged",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机虚拟磁盘读速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmVirtualDiskRead",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机虚拟磁盘写速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmVirtualDiskWrite",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "读虚拟磁盘耗费的平均时间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmVirtualDiskTotalReadLatency",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "写虚拟磁盘耗费的平均时间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "VmVirtualDiskTotalWriteLatency",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机网络总负载",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机接收数据包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkPacketRx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机发送数据包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkPacketTx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机接收数据包平均速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkReceived",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机发送数据包平均速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkTransmitted",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "每秒接收的平均数据量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkByteRx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "每秒发送的平均数据量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "VmNetworkByteTx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机CPU使用率（兆赫）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostCPUUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机CPU使用率（兆赫）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "HostCPUUsageMHZ",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机CPU空闲状态时间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "HostCPUIdle",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机CPU使用量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "CPUNum"
            ],
            "name": "HostCPUUsed",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机内存使用率（百分比）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostMemoryUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "为物理机分配的内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostMemoryGranted",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机主动读取或写入的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostMemoryActive",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "从云主机上回收的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostMemoryHostMemCtl",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "备份云主机内存的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostMemoryConsumed",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云主机所需的物理内存量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid"
            ],
            "name": "HostMemoryEntitlement",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机磁盘使用率（百分比）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostDiskUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机磁盘读速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostDiskRead",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机磁盘写速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostDiskWrite",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机磁盘最大时延",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostDiskMaxTotalLatency",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机每秒向虚拟磁盘发出的读取命令的平均数目",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostVirtualDiskNumberReadAveraged",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机每秒向虚拟磁盘发出的写入命令的平均数目",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostVirtualDiskNumberWriteAveraged",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机虚拟磁盘读速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostVirtualDiskRead",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机虚拟磁盘写速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostVirtualDiskWrite",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "读取虚拟磁盘耗费的平均时间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostVirtualDiskTotalReadLatency",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "写入虚拟磁盘耗费的平均时间",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "DiskDeviceLetter"
            ],
            "name": "HostVirtualDiskTotalWriteLatency",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机网络总负载",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkUsage",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机接收数据包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkPacketRx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机发送数据包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkPacketTx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机接收数据包平均速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkReceived",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "物理机发送数据包平均速率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkTransmitted",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "每秒接收的平均数据量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkByteRx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "每秒发送的平均数据量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "HostUuid",
                "NetworkDeviceLetter"
            ],
            "name": "HostNetworkByteTx",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "主存储全部容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储全部可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalAvailableCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储全部可用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalAvailableCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储全部已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalUsedCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储全部已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalUsedCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储全部已禁用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalLockedCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储全部已禁用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [],
            "name": "TotalLockedCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "TotalPhysicalCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "AvailableCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储可用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "AvailableCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "UsedCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "UsedCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储可用物理容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "AvailablePhysicalCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储可用物理容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "AvailablePhysicalCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储已用物理容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "UsedPhysicalCapacityInBytes",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储已用物理容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "UsedPhysicalCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "根云盘数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "RootVolumeCount",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "数据云盘数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "DataVolumeCount",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "快照数量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PrimaryStorageType"
            ],
            "name": "SnapshotCount",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "Ceph存储池可用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PoolName"
            ],
            "name": "PoolAvailableCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "Ceph存储池已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "PrimaryStorageUuid",
                "PoolName"
            ],
            "name": "PoolUsedCapacityInPercent",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "镜像总数",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "TotalImageCount",
            "namespace": "ZStack/Image"
        },
        {
            "description": "可用镜像总数",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "ReadyImageCount",
            "namespace": "ZStack/Image"
        },
        {
            "description": "可用镜像百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "ReadyImageInPercent",
            "namespace": "ZStack/Image"
        },
        {
            "description": "根云盘镜像数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "RootVolumeTemplateCount",
            "namespace": "ZStack/Image"
        },
        {
            "description": "根云盘镜像百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "RootVolumeTemplateInPercent",
            "namespace": "ZStack/Image"
        },
        {
            "description": "数据云盘镜像数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "DataVolumeTemplateCount",
            "namespace": "ZStack/Image"
        },
        {
            "description": "数据云盘镜像百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "DataVolumeTemplateInPercent",
            "namespace": "ZStack/Image"
        },
        {
            "description": "ISO镜像数量",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "ISOCount",
            "namespace": "ZStack/Image"
        },
        {
            "description": "ISO镜像百分比",
            "driver": "MysqlDatabaseDriver",
            "labelNames": [],
            "name": "ISOInPercent",
            "namespace": "ZStack/Image"
        },
        {
            "description": "CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "CPUUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAverageUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "CPUIdleUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAllUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAllIdleUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUSystemUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUserUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUWaitUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUIdleUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU系统进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageSystemUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU用户进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUserUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU等待IO完成平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageWaitUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageIdleUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadOps",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllReadOps",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteOps",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllWriteOps",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllReadBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllWriteBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllFreeCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllFreeCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllUsedCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllUsedCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInPackets",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInPackets",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInErrors",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInErrors",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutPackets",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutPackets",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutErrors",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "全部网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutErrors",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内存空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryFreeBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内存空闲百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryFreeInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内存已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryUsedBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内存已用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryUsedInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控全部内存总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryTotalBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控内存空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryFreeBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控内存已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控内存可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryAvailableBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控内存空闲容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryFreePercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "内部监控内存已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "zwatch客户端版本",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "ZWatchAgentVersion",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例崩溃检查模块运行情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "ZWatchAgentFeaturePvpanic",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU系统占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUSystemUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU用户占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUUserUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU IO等待占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUWaitUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUIdleUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU平均系统占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageSystemUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU平均用户占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageUserUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU平均IO等待占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageWaitUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageIdleUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageUsedUtilization",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例全部磁盘可用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllFreeCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例全部磁盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllFreeCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例全部磁盘使用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllUsedCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例全部磁盘使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllUsedCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例磁盘可用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskFreeCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例磁盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskFreeCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例磁盘使用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskUsedCapacityInBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例磁盘使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskUsedCapacityInPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例内存总字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryTotalBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例内存空余节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryFreeBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例内存已使用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryUsedBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例内存可用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryAvailableBytes",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例内存空闲百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryFreePercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例内存使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryUsedPercent",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例占用物理机的cpu开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUOccupiedByVm",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例占用物理机的内存开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryOccupiedByVm",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "5分钟网卡入字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInBytesIn5Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "5分钟网卡入包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInPacketsIn5Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "5分钟网卡出字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutBytesIn5Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "5分钟网卡出包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutPacketsIn5Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "1分钟网卡入字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInBytesIn1Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "1分钟网卡入包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInPacketsIn1Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "1分钟网卡出字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutBytesIn1Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "1分钟网卡出包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutPacketsIn1Min",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "许可证有效期(天)",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "UUID",
                "ResourceType"
            ],
            "name": "LicenseEnabledDays",
            "namespace": "ZStack/License"
        },
        {
            "description": "负载均衡监听器健康状态（单个网卡，1表示正常，0表示异常)",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "LoadBalancerUuid",
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendStatus",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器活跃连接数（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器流入流量（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendTrafficInBytes",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器流出流量（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendTrafficOutBytes",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器健康状态（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerStatus",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器活跃连接数（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器流入流量（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerTrafficInBytes",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器流出流量（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerTrafficOutBytes",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器连接使用率（单个服务器，百分比）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerSessionUsage",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器拒绝连接数（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerRefusedSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器并发连接数（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerConcurrentSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器新建连接数（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerNewSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器全部连接数（单个服务器）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid"
            ],
            "name": "LoadBalancerTotalSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器拒绝连接数（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendRefusedSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器并发连接数（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendConcurrentSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器新建连接数（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendNewSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "负载均衡监听器全部连接数（单个网卡）",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "ListenerUuid",
                "NicIpAddress"
            ],
            "name": "LoadBalancerBackendTotalSessionNumber",
            "namespace": "ZStack/LoadBalancer"
        },
        {
            "description": "CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "CPUUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAverageUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "CPUIdleUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAllUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUAllIdleUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU系统进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUSystemUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU用户进程使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUserUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU等待IO完成使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUWaitUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUIdleUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "OperatingSystemCPUUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU系统进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageSystemUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU用户进程平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUserUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU等待IO完成平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageWaitUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageIdleUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemCPUAverageUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadOps",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘读IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllReadOps",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteOps",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘写IOPS",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllWriteOps",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskReadBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘读速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllReadBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter"
            ],
            "name": "DiskWriteBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘写速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllWriteBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllFreeCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllFreeCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllUsedCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "DiskAllUsedCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘剩余容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘剩余容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskFreeCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘已使用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "磁盘已使用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "DiskDeviceLetter",
                "MountPoint",
                "FSType"
            ],
            "name": "DiskUsedCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部网卡入速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInPackets",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部网卡入包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInPackets",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkInErrors",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部网卡入错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllInErrors",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部网卡出速度",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutPackets",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部网卡出包数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutPackets",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "NetworkOutErrors",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "全部网卡出错误数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "NetworkAllOutErrors",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内存空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryFreeBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内存空闲百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryFreeInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内存已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryUsedBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内存已用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryUsedInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控全部内存总容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryTotalBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控内存空闲容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryFreeBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控内存已用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控内存可用容量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryAvailableBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控内存空闲容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryFreePercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "内部监控内存已用容量百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "OperatingSystemMemoryUsedPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "zwatch客户端版本",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "ZWatchAgentVersion",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例崩溃检查模块运行情况",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "ZWatchAgentFeaturePvpanic",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU系统占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUSystemUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU用户占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUUserUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU IO等待占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUWaitUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUIdleUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "CPUNum"
            ],
            "name": "VRouterCPUUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU平均系统占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageSystemUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU平均用户占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageUserUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU平均IO等待占用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageWaitUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU平均空闲率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageIdleUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例CPU平均使用率",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterCPUAverageUsedUtilization",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例全部磁盘可用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllFreeCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例全部磁盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllFreeCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例全部磁盘使用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllUsedCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例全部磁盘使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterDiskAllUsedCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例磁盘可用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskFreeCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例磁盘百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskFreeCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例磁盘使用字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskUsedCapacityInBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例磁盘使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "MountPoint",
                "FSType"
            ],
            "name": "VRouterDiskUsedCapacityInPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例内存总字节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryTotalBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例内存空余节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryFreeBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例内存已使用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryUsedBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例内存可用节数",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryAvailableBytes",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例内存空闲百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryFreePercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例内存使用百分比",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "VRouterMemoryUsedPercent",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例占用物理机的cpu开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "CPUOccupiedByVm",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例占用物理机的内存开销",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid"
            ],
            "name": "MemoryOccupiedByVm",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "5分钟网卡入字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInBytesIn5Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "5分钟网卡入包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInPacketsIn5Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "5分钟网卡出字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutBytesIn5Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "5分钟网卡出包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutPacketsIn5Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "1分钟网卡入字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInBytesIn1Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "1分钟网卡入包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkInPacketsIn1Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "1分钟网卡出字节量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutBytesIn1Min",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "1分钟网卡出包量",
            "driver": "PrometheusDatabaseDriver",
            "labelNames": [
                "VMUuid",
                "NetworkDeviceLetter"
            ],
            "name": "TotalNetworkOutPacketsIn1Min",
            "namespace": "ZStack/SlbVmInstance"
        }
```

---

#### 所有事件元数据



用户可以用`GetAllEventMetadata`获得系统所有已定义事件以及其元数据，以3.9.0版本为例：

```
{
    "events": [
        {
            "description": "密码机状态变化",
            "labelNames": [
                "OldState",
                "NewState",
                "Reason"
            ],
            "name": "SecurityMachineStateChange",
            "namespace": "ZStack/SecurityMachine"
        },
        {
            "description": "第三方平台报警",
            "labelNames": [
                "Uuid",
                "PlatformUuid",
                "Product",
                "Service",
                "Message",
                "DataSource",
                "Metric",
                "AlertLevel",
                "AlertTime",
                "Dimensions"
            ],
            "name": "ThirdpartyAlert",
            "namespace": "ZStack/Thirdparty"
        },
        {
            "description": "物理机状态发生变化",
            "labelNames": [
                "OldStatus",
                "NewStatus"
            ],
            "name": "HostStatusChanged",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机上发现了未受系统管控的云主机",
            "labelNames": [
                "UnknownVMIdentity"
            ],
            "name": "HostUnknownVMDetected",
            "namespace": "ZStack/Host"
        },
        {
            "description": "对物理机上云主机操作失败",
            "labelNames": [
                "VmUuidsString",
                "ErrorVMOperation",
                "Details"
            ],
            "name": "HostVMOperateErrorDetected",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机失联",
            "labelNames": [
                "Error"
            ],
            "name": "HostDisconnected",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机连通性检测",
            "labelNames": [
                "CheckProcess",
                "Details"
            ],
            "name": "HostCheckAlive",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机上高可用云主机自我仲裁已触发",
            "labelNames": [
                "PrimaryStorageUuid",
                "VmUuidsString",
                "Reason"
            ],
            "name": "VMHAHostSelfFencerTriggered",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机上挂载路径错误",
            "labelNames": [
                "FaultMountPoint"
            ],
            "name": "FaultMountPointOnHost",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机已连接",
            "labelNames": [
                "OldStatus",
                "NewStatus"
            ],
            "name": "HostConnected",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机网络链路上线",
            "labelNames": [
                "PhysicalNicFromBond",
                "PhysicalNicName",
                "PhysicalNicAddr",
                "PhysicalNicStatus"
            ],
            "name": "HostPhysicalNicStatusUp",
            "namespace": "ZStack/Host"
        },
        {
            "description": "物理机网络链路离线",
            "labelNames": [
                "PhysicalNicFromBond",
                "PhysicalNicName",
                "PhysicalNicAddr",
                "PhysicalNicStatus"
            ],
            "name": "HostPhysicalNicStatusDown",
            "namespace": "ZStack/Host"
        },
        {
            "description": "项目回收策略",
            "labelNames": [
                "Retire"
            ],
            "name": "IAM2ProjecRetire",
            "namespace": "ZStack/IAM2Project"
        },
        {
            "description": "Session强制退出",
            "labelNames": [
                "accountUuid",
                "userUuid"
            ],
            "name": "SessionForceLogout",
            "namespace": "ZStack/Identity"
        },
        {
            "description": "管理节点失联",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "ManagementNodeLeft",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点已连接",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "ManagementNodeJoin",
            "namespace": "ZStack/MN"
        },
        {
            "description": "管理节点时间回溯",
            "labelNames": [
                "ManagementNodeIP"
            ],
            "name": "ManagementNodeTemporalRegression",
            "namespace": "ZStack/MN"
        },
        {
            "description": "云主机高可用进程",
            "labelNames": [
                "HAProcess",
                "HADetails"
            ],
            "name": "VMHAProcess",
            "namespace": "ZStack/VM"
        },
        {
            "description": "云主机在物理机上的状态发生变化",
            "labelNames": [
                "OldState",
                "NewState"
            ],
            "name": "VMStateChanged",
            "namespace": "ZStack/VM"
        },
        {
            "description": "云主机在物理机HA启动",
            "labelNames": [
                "DestinationHostUuid"
            ],
            "name": "VMHAStarted",
            "namespace": "ZStack/VM"
        },
        {
            "description": "云主机在物理机上的状态发生变化",
            "labelNames": [
                "OldState",
                "NewState",
                "SourceHostUuid",
                "DestinationHostUuid"
            ],
            "name": "VMStateChangedOnHost",
            "namespace": "ZStack/VM"
        },
        {
            "description": "云主机处于in shutdown状态",
            "labelNames": [
                "Error"
            ],
            "name": "VMStateInShutdown",
            "namespace": "ZStack/VM"
        },
        {
            "description": "FT辅助云主机启动失败",
            "labelNames": [
                "Error"
            ],
            "name": "VMFailedRecoverFaultTolerance",
            "namespace": "ZStack/VM"
        },
        {
            "description": "云主机崩溃",
            "labelNames": [
                "Error"
            ],
            "name": "VmCrash",
            "namespace": "ZStack/VM"
        },
        {
            "description": "FT辅助云主机开始恢复",
            "labelNames": [
                "FTDetails"
            ],
            "name": "VMRequestRecoverFaultTolerance",
            "namespace": "ZStack/VM"
        },
        {
            "description": "物理机进入维护模式触发云主机迁移失败",
            "labelNames": [
                "hostUuid",
                "vmUuid",
                "Error"
            ],
            "name": "MigrateVMFailedWithHostMaintain",
            "namespace": "ZStack/HA"
        },
        {
            "description": "CDP任务失败",
            "labelNames": [
                "Error"
            ],
            "name": "CdpTaskFailed",
            "namespace": "ZStack/CdpTask"
        },
        {
            "description": "CDP任务状态异常切换",
            "labelNames": [
                "Error"
            ],
            "name": "CdpTaskStatusAbnormallyChanged",
            "namespace": "ZStack/CdpTask"
        },
        {
            "description": "镜像服务器失联",
            "labelNames": [
                "Error"
            ],
            "name": "BackupStorageDisconnected",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "镜像服务器已连接",
            "labelNames": [
                "OldStatus",
                "NewStatus"
            ],
            "name": "BackupStorageConnected",
            "namespace": "ZStack/BackupStorage"
        },
        {
            "description": "短信发送失败",
            "labelNames": [
                "PhoneNumber",
                "ErrCode",
                "ErrMessage"
            ],
            "name": "SendSmsFailed",
            "namespace": "ZStack/SNS"
        },
        {
            "description": "vCenter物理机时间异常",
            "labelNames": [
                "TimeDifferenceInHour"
            ],
            "name": "VCenterHostWrongDateTime",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "vCenter资源事件",
            "labelNames": [
                "Description",
                "Severity",
                "Time",
                "Target",
                "User"
            ],
            "name": "VCenterResourceEvent",
            "namespace": "ZStack/VCenter"
        },
        {
            "description": "云盘快照定时任务",
            "labelNames": [
                "VMSchedulerName",
                "VMSchedulerExecutedResult",
                "isSuccess"
            ],
            "name": "VolumeSnapshotScheduler",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "云盘备份定时任务",
            "labelNames": [
                "VMSchedulerName",
                "VMSchedulerExecutedResult",
                "isSuccess"
            ],
            "name": "VolumeBackupScheduler",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "云主机启动定时任务",
            "labelNames": [
                "VMSchedulerName",
                "VMSchedulerExecutedResult",
                "isSuccess"
            ],
            "name": "VMStartScheduler",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "云主机停止定时任务",
            "labelNames": [
                "VMSchedulerName",
                "VMSchedulerExecutedResult",
                "isSuccess"
            ],
            "name": "VMStopScheduler",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "云主机重启定时任务",
            "labelNames": [
                "VMSchedulerName",
                "VMSchedulerExecutedResult",
                "isSuccess"
            ],
            "name": "VMRebootScheduler",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "数据库备份定时任务",
            "labelNames": [
                "DatabaseSchedulerName",
                "DatabaseSchedulerExecutedResult",
                "isSuccess"
            ],
            "name": "DatabaseBackupScheduler",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "定时任务组结果失败",
            "labelNames": [
                "SchedulerJobGroupName",
                "TotalExecutionJobCount",
                "FailedExecutionJobCount",
                "SchedulerJobGroupErrors"
            ],
            "name": "JobGroupFailure",
            "namespace": "ZStack/Scheduler"
        },
        {
            "description": "yunshan网络异常事件",
            "labelNames": [
                "RequestContent",
                "Results",
                "Details"
            ],
            "name": "YunshanNSPInforEvents",
            "namespace": "ZStack/SDN"
        },
        {
            "description": "主存储失联",
            "labelNames": [
                "Error"
            ],
            "name": "PrimaryStorageDisconnected",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储已连接",
            "labelNames": [
                "OldStatus",
                "NewStatus"
            ],
            "name": "PrimaryStorageConnected",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "主存储到物理机连接状态检查失败",
            "labelNames": [
                "Error",
                "HostUuid"
            ],
            "name": "PrimaryStorageHostDisconnected",
            "namespace": "ZStack/PrimaryStorage"
        },
        {
            "description": "路由器失联",
            "labelNames": [
                "Error"
            ],
            "name": "VRouterDisconnected",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "路由器异常停机",
            "labelNames": [
                "OldState",
                "NewState",
                "ApplianceVmType"
            ],
            "name": "VRouterPaused",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "路由器已连接",
            "labelNames": [
                "OldStatus",
                "NewStatus"
            ],
            "name": "VRouterConnected",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "路由器状态异常",
            "labelNames": [
                "Error"
            ],
            "name": "VRouterUnhealthy",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "路由器状态正常",
            "labelNames": [
                "NewStatus"
            ],
            "name": "VRouterHealthy",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "路由器高可用组主备发生切换",
            "labelNames": [
                "Error"
            ],
            "name": "MasterVpcRouterChanged",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "VPC路由器磁盘空间被异常文件占用",
            "labelNames": [
                "DiskTotal",
                "DiskUsed",
                "DisKUsage",
                "AbnormalFiles"
            ],
            "name": "VRouterAbnormalFilesExists",
            "namespace": "ZStack/VRouter"
        },
        {
            "description": "负载均衡实例已连接",
            "labelNames": [
                "Error"
            ],
            "name": "SlbVmInstanceDisconnected",
            "namespace": "ZStack/SlbVmInstance"
        },
        {
            "description": "负载均衡实例失联",
            "labelNames": [
                "OldStatus",
                "NewStatus"
            ],
            "name": "SlbVmInstanceConnected",
            "namespace": "ZStack/SlbVmInstance"
        }
    ],
    "success": true
}
```


   - DestinationHostUuid：VM HA启动的物理机UUID
 - DestinationHostUuid：VM HA启动的物理机UUID
   - OldState: 之前的状态，Started,Stopped ...
   - NewState：新状态
   - SourceHostUuid：之前所在物理机UUID
   - DestinationHostUuid：当前所在物理机UUID



> **注意:** 说明: SourceHostUuid和DestinationHostUuid可能相同

- DestinationHostUuid：当前所在物理机UUID
   - Error：导致失联错误的字符串
 - Error：导致失联错误的字符串
   - Error：导致失联错误的字符串
 - Error：导致失联错误的字符串
   - OldStatus：之前状态
   - NewStatus：当前状态



> **注意:** 说明: 用户操作，例如执行重连，导致的状态变化不会触发该事件

- NewStatus：当前状态
   - UnknownVMIdentity：未知虚拟机的ID（virsh list看到的VM ID)
 - UnknownVMIdentity：未知虚拟机的ID（virsh list看到的VM ID)
   - Error：导致失联错误的字符串
 - Error：导致失联错误的字符串
   - Error：导致失联错误的字符串
 - Error：导致失联错误的字符串

---

#### 通知服务相关接口

---

#### 创建主题(CreateSNSTopic)



##### API请求

 URLs

```
POST zstack/v1/sns/topics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "api topic",
    "locale": "zh_CN"
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
-X POST -d '{"params":{"name":"api topic","locale":"zh_CN"}}' \
http://localhost:8080/zstack/v1/sns/topics
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| tagUuids(可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| locale(可选) | String | body(包含在**params**结构中) | 国际化语言 | zh_CN en_US | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a3a307316bb543e786b6dcac39847642",
    "name": "new name",
    "state": "Enabled",
    "locale": "zh_CN",
    "createDate": "Dec 25, 2023 2:08:21 PM",
    "lastOpDate": "Dec 25, 2023 2:08:21 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSTopicInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| state | String | 状态 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateSNSTopicAction action = new CreateSNSTopicAction();
action.name = "api topic";
action.locale = "zh_CN";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSTopicAction.Result res = action.call();
```

 Python SDK

```
CreateSNSTopicAction action = CreateSNSTopicAction()
action.name = "api topic"
action.locale = "zh_CN"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSTopicAction.Result res = action.call()
```

---

#### 删除主题(DeleteSNSTopic)



##### API请求

 URLs

```
DELETE zstack/v1/sns/topics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/topics/2e5e362e1a7836618d6cce49fba21e78
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 5.0.0 |
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
DeleteSNSTopicAction action = new DeleteSNSTopicAction();
action.uuid = "2e5e362e1a7836618d6cce49fba21e78";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSNSTopicAction.Result res = action.call();
```

 Python SDK

```
DeleteSNSTopicAction action = DeleteSNSTopicAction()
action.uuid = "2e5e362e1a7836618d6cce49fba21e78"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSNSTopicAction.Result res = action.call()
```

---

#### 更改主题状态(ChangeSNSTopicState)



##### API请求

 URLs

```
PUT zstack/v1/zwatch/topics/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSNSTopicState": {
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
-X PUT -d '{"changeSNSTopicState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/zwatch/topics/89f0adcff110385a8a8fa2568a744ab5/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**changeSNSTopicState**结构中) | 状态事件 | enable disable | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "54a92ecb4ed346e0b1af4747b65d01a7",
    "name": "new name",
    "state": "Enabled",
    "locale": "zh_CN",
    "createDate": "Dec 25, 2023 2:08:19 PM",
    "lastOpDate": "Dec 25, 2023 2:08:19 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSTopicInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| state | String | 状态 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |



##### SDK示例

 Java SDK

```
ChangeSNSTopicStateAction action = new ChangeSNSTopicStateAction();
action.uuid = "89f0adcff110385a8a8fa2568a744ab5";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSNSTopicStateAction.Result res = action.call();
```

 Python SDK

```
ChangeSNSTopicStateAction action = ChangeSNSTopicStateAction()
action.uuid = "89f0adcff110385a8a8fa2568a744ab5"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSNSTopicStateAction.Result res = action.call()
```

---

#### 更新主题(UpdateSNSTopic)



##### API请求

 URLs

```
PUT zstack/v1/sns/topics/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSTopic": {
    "name": "new name",
    "locale": "zh_CN"
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
-X PUT -d '{"updateSNSTopic":{"name":"new name","locale":"zh_CN"}}' \
http://localhost:8080/zstack/v1/sns/topics/3e7550bf8ead3f02b366df6e499dc285/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| name (可选) | String | body(包含在**updateSNSTopic**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**updateSNSTopic**结构中) | 资源的详细描述 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 应用标签 |  | 2.3 |
| locale (可选) | String | body(包含在**updateSNSTopic**结构中) | 国际化语言 | zh_CN en_US | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1a688d109d5e4f1b90a2b1b6b7d90c07",
    "name": "new name",
    "state": "Enabled",
    "locale": "zh_CN",
    "createDate": "Dec 25, 2023 2:06:14 PM",
    "lastOpDate": "Dec 25, 2023 2:06:14 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSTopicInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| state | String | 状态 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateSNSTopicAction action = new UpdateSNSTopicAction();
action.uuid = "3e7550bf8ead3f02b366df6e499dc285";
action.name = "new name";
action.locale = "zh_CN";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSTopicAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSTopicAction action = UpdateSNSTopicAction()
action.uuid = "3e7550bf8ead3f02b366df6e499dc285"
action.name = "new name"
action.locale = "zh_CN"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSTopicAction.Result res = action.call()
```

---

#### 查询主题(QuerySNSTopic)



##### API请求

 URLs

```
GET zstack/v1/sns/topics
GET zstack/v1/sns/topics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/topics?q=name=api
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/topics/b47d348c8c4a3559af1b09f31f7c26eb
```



可查询字段

运行CLI命令行工具，输入`QuerySNSTopic`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "988a911a699447559744161ce34c2676",
      "name": "new name",
      "state": "Enabled",
      "locale": "zh_CN",
      "createDate": "Dec 25, 2023 2:07:11 PM",
      "lastOpDate": "Dec 25, 2023 2:07:11 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventories | List | 详情参考[inventories] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| state | String | 状态 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QuerySNSTopicAction action = new QuerySNSTopicAction();
action.conditions = asList("name=api");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSTopicAction.Result res = action.call();
```

 Python SDK

```
QuerySNSTopicAction action = QuerySNSTopicAction()
action.conditions = ["name=api"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSTopicAction.Result res = action.call()
```

---

#### 创建邮件服务器(CreateSNSEmailPlatform)



##### API请求

 URLs

```
POST zstack/v1/sns/application-platforms/email
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "smtpServer": "email.zstack.io",
    "smtpPort": 20.0,
    "username": "example@cloud.io",
    "password": "password",
    "encryptType": "STARTTLS",
    "name": "email platform"
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
-X POST -d '{"params":{"smtpServer":"email.zstack.io","smtpPort":20.0,"username":"example@cloud.io",
"password":"password","encryptType":"STARTTLS","name":"email platform"}}' \
http://localhost:8080/zstack/v1/sns/application-platforms/email
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| smtpServer | String | body(包含在**params**结构中) | SMTP服务器地址 |  | 2.3 |
| smtpPort | Integer | body(包含在**params**结构中) | SMTP端口 |  | 2.3 |
| username | String | body(包含在**params**结构中) | 用户名 |  | 4.1.0 |
| password (可选) | String | body(包含在**params**结构中) | 密码 |  | 2.3 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| encryptType (可选) | String | body(包含在**params**结构中) |  | SSL STARTTLS NONE | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |


- 添加邮箱服务器时，系统会自动检测用户名、密码、邮箱服务器地址、邮箱服务器端口、加密类型是否正确，等待时间不超过5秒。


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f6122105d8994b498e6184efcf03bb64",
    "name": "email platform",
    "description": "example description",
    "state": "Enabled",
    "type": "Email",
    "createDate": "Feb 28, 2018 9:47:35 AM",
    "lastOpDate": "Feb 28, 2018 9:47:35 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSApplicationPlatformInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateSNSEmailPlatformAction action = new CreateSNSEmailPlatformAction();
action.smtpServer = "email.zstack.io";
action.smtpPort = 20.0;
action.username = "example@cloud.io";
action.password = "password";
action.encryptType = "STARTTLS";
action.name = "email platform";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSEmailPlatformAction.Result res = action.call();
```

 Python SDK

```
CreateSNSEmailPlatformAction action = CreateSNSEmailPlatformAction()
action.smtpServer = "email.zstack.io"
action.smtpPort = 20.0
action.username = "example@cloud.io"
action.password = "password"
action.encryptType = "STARTTLS"
action.name = "email platform"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSEmailPlatformAction.Result res = action.call()
```

---

#### 测试邮件服务器(ValidateSNSEmailPlatform)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-platforms/email/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "validateSNSEmailPlatform": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"validateSNSEmailPlatform":{}}' \
http://localhost:8080/zstack/v1/sns/application-platforms/email/ee6f4b67dc7e3b298353a6fe2b5d0a6f/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
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
ValidateSNSEmailPlatformAction action = new ValidateSNSEmailPlatformAction();
action.uuid = "ee6f4b67dc7e3b298353a6fe2b5d0a6f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ValidateSNSEmailPlatformAction.Result res = action.call();
```

 Python SDK

```
ValidateSNSEmailPlatformAction action = ValidateSNSEmailPlatformAction()
action.uuid = "ee6f4b67dc7e3b298353a6fe2b5d0a6f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ValidateSNSEmailPlatformAction.Result res = action.call()
```

---

#### 删除SNS应用平台(DeleteSNSApplicationPlatform)



##### API请求

 URLs

```
DELETE zstack/v1/sns/application-platforms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/application-platforms/992bf9e24f6f3f25866956f8079ffadc
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 5.0.0 |
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
DeleteSNSApplicationPlatformAction action = new DeleteSNSApplicationPlatformAction();
action.uuid = "992bf9e24f6f3f25866956f8079ffadc";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSNSApplicationPlatformAction.Result res = action.call();
```

 Python SDK

```
DeleteSNSApplicationPlatformAction action = DeleteSNSApplicationPlatformAction()
action.uuid = "992bf9e24f6f3f25866956f8079ffadc"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSNSApplicationPlatformAction.Result res = action.call()
```

---

#### 查询邮件服务器(QuerySNSEmailPlatform)



##### API请求

 URLs

```
GET zstack/v1/sns/application-platforms/email
GET zstack/v1/sns/application-platforms/email/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-platforms/email?q=name=email
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-platforms/email/fe6d6cd0fbf53a4eaa772f326972d765
```



可查询字段

运行CLI命令行工具，输入`QuerySNSEmailPlatform`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSEmailPlatformAction action = new QuerySNSEmailPlatformAction();
action.conditions = asList("name=email");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSEmailPlatformAction.Result res = action.call();
```

 Python SDK

```
QuerySNSEmailPlatformAction action = QuerySNSEmailPlatformAction()
action.conditions = ["name=email"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSEmailPlatformAction.Result res = action.call()
```

---

#### 更新SNS应用平台(UpdateSNSApplicationPlatform)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-platforms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSApplicationPlatform": {
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
-X PUT -d '{"updateSNSApplicationPlatform":{"name":"new name"}}' \
http://localhost:8080/zstack/v1/sns/application-platforms/577aff1dcbe932798fd615e88813c7ce/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| name (可选) | String | body(包含在**updateSNSApplicationPlatform**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**updateSNSApplicationPlatform**结构中) | 资源的详细描述 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 应用标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5687e054cc0744f0b048e825b5b9475f",
    "name": "email platform",
    "description": "example description",
    "state": "Enabled",
    "type": "Email",
    "createDate": "Dec 25, 2023 2:06:02 PM",
    "lastOpDate": "Dec 25, 2023 2:06:02 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSApplicationPlatformInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateSNSApplicationPlatformAction action = new UpdateSNSApplicationPlatformAction();
action.uuid = "577aff1dcbe932798fd615e88813c7ce";
action.name = "new name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSApplicationPlatformAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSApplicationPlatformAction action = UpdateSNSApplicationPlatformAction()
action.uuid = "577aff1dcbe932798fd615e88813c7ce"
action.name = "new name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSApplicationPlatformAction.Result res = action.call()
```

---

#### 查询SNS应用平台(QuerySNSApplicationPlatform)



##### API请求

 URLs

```
GET zstack/v1/sns/application-platforms
GET zstack/v1/sns/application-platforms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-platforms?q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-platforms/b9a635c9ff7c3544a232cad5b9a4aaf7
```



可查询字段

运行CLI命令行工具，输入`QuerySNSApplicationPlatform`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "c418160d00ff407986dde8bd10a7f0c4",
      "name": "email platform",
      "description": "example description",
      "state": "Enabled",
      "type": "Email",
      "createDate": "Dec 25, 2023 2:06:03 PM",
      "lastOpDate": "Dec 25, 2023 2:06:03 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventories | List | 详情参考[inventories] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QuerySNSApplicationPlatformAction action = new QuerySNSApplicationPlatformAction();
action.conditions = asList("state=Enabled");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSApplicationPlatformAction.Result res = action.call();
```

 Python SDK

```
QuerySNSApplicationPlatformAction action = QuerySNSApplicationPlatformAction()
action.conditions = ["state=Enabled"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSApplicationPlatformAction.Result res = action.call()
```

---

#### 更改SNS应用平台状态(ChangeSNSApplicationPlatformState)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-platforms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSNSApplicationPlatformState": {
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
-X PUT -d '{"changeSNSApplicationPlatformState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/sns/application-platforms/bf16a9b0315a3942afb8b7f29e1287eb/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**changeSNSApplicationPlatformState**结构中) | 状态事件 | enable disable | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c41b8b33a85b4d539684b43f0cde156b",
    "name": "email platform",
    "description": "example description",
    "state": "Enabled",
    "type": "Email",
    "createDate": "Dec 25, 2023 2:03:32 PM",
    "lastOpDate": "Dec 25, 2023 2:03:32 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSApplicationPlatformInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |



##### SDK示例

 Java SDK

```
ChangeSNSApplicationPlatformStateAction action = new ChangeSNSApplicationPlatformStateAction();
action.uuid = "bf16a9b0315a3942afb8b7f29e1287eb";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSNSApplicationPlatformStateAction.Result res = action.call();
```

 Python SDK

```
ChangeSNSApplicationPlatformStateAction action = ChangeSNSApplicationPlatformStateAction()
action.uuid = "bf16a9b0315a3942afb8b7f29e1287eb"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSNSApplicationPlatformStateAction.Result res = action.call()
```

---

#### 创建邮件接收端(CreateSNSEmailEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/emails
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "email": "example@cloud.io",
    "emails": [
      "example@cloud.io"
    ],
    "name": "email",
    "platformUuid": "5efc525948a537e39a91290c57d6d37b"
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
-X POST -d '{"params":{"email":"example@cloud.io","emails":["example@cloud.io"],"name":"email","platformUuid":"5efc525948a537e39a91290c57d6d37b"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/emails
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| email (可选) | String | body(包含在**params**结构中) | email地址 |  | 5.0.0 |
| emails (可选) | List | body(包含在**params**结构中) |  |  | 3.7.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.0.0 |
| platformUuid (可选) | String | body(包含在**params**结构中) | 应用平台UUID |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:03:24 PM",
    "lastOpDate": "Dec 25, 2023 2:03:24 PM"

  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 2.3 |

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
| name | String | 资源名称 | 2.3 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| platformUuid | String | 应用平台UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateSNSEmailEndpointAction action = new CreateSNSEmailEndpointAction();
action.email = "example@cloud.io";
action.emails = asList("example@cloud.io");
action.name = "email";
action.platformUuid = "5efc525948a537e39a91290c57d6d37b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSEmailEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSEmailEndpointAction action = CreateSNSEmailEndpointAction()
action.email = "example@cloud.io"
action.emails = [example@cloud.io]
action.name = "email"
action.platformUuid = "5efc525948a537e39a91290c57d6d37b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSEmailEndpointAction.Result res = action.call()
```

---

#### 发送测试邮件(SNSEmailTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/email/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "emails": [
      "example@zstack.io"
    ],
    "platformUuid": "d5904b92d6df39a5905212bde24b2946",
    "endpointUuid": "2ff88c96f20f36469bdfcd2fa84e533d",
    "subject": "test email subject",
    "text": "this is a test email of content"
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
-X POST -d '{"params":{"emails":["example@zstack.io"],"platformUuid":"d5904b92d6df39a5905212bde24b2946","endpointUuid":"2ff88c96f20f36469bdfcd2fa84e533d","subject":"test email subject","text":"this is a test email of content"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/email/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| emails (可选) | List | body(包含在**params**结构中) | 接收邮箱地址 |  | 5.1.8 |
| platformUuid (可选) | String | body(包含在**params**结构中) | 邮箱平台UUID |  | 5.1.8 |
| endpointUuid (可选) | String | body(包含在**params**结构中) | 邮箱端点UUID |  | 5.1.8 |
| subject (可选) | String | body(包含在**params**结构中) | 主题 |  | 5.1.8 |
| text (可选) | String | body(包含在**params**结构中) | 内容 |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| connected | boolean | 发送结果 | 5.1.8 |
| webhookResp | LinkedHashMap | 对端响应内容 | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.8 |
| description | String | 错误的概要描述 | 5.1.8 |
| details | String | 错误的详细信息 | 5.1.8 |
| elaboration | String | 保留字段，默认为null | 5.1.8 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.8 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.8 |



##### SDK示例

 Java SDK

```
SNSEmailTestConnectionAction action = new SNSEmailTestConnectionAction();
action.emails = asList("example@zstack.io");
action.platformUuid = "d5904b92d6df39a5905212bde24b2946";
action.endpointUuid = "2ff88c96f20f36469bdfcd2fa84e533d";
action.subject = "test email subject";
action.text = "this is a test email of content";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSEmailTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSEmailTestConnectionAction action = SNSEmailTestConnectionAction()
action.emails = [example@zstack.io]
action.platformUuid = "d5904b92d6df39a5905212bde24b2946"
action.endpointUuid = "2ff88c96f20f36469bdfcd2fa84e533d"
action.subject = "test email subject"
action.text = "this is a test email of content"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSEmailTestConnectionAction.Result res = action.call()
```

---

#### 查询邮件接收端(QuerySNSEmailEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/emails
GET zstack/v1/sns/application-endpoints/emails/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/emails?q=email=test@cloud.io
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/emails/bbae379b811f3d18a422d73557ece1b1
```



可查询字段

运行CLI命令行工具，输入`QuerySNSEmailEndpoint`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSEmailEndpointAction action = new QuerySNSEmailEndpointAction();
action.conditions = asList("email=test@cloud.io");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSEmailEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSEmailEndpointAction action = QuerySNSEmailEndpointAction()
action.conditions = ["email=test@cloud.io"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSEmailEndpointAction.Result res = action.call()
```

---

#### 创建Webhook接收端(CreateSNSHttpEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/http
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "http://127.0.0.1:6666/test-url",
    "username": "username",
    "password": "password",
    "name": "http"
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
-X POST -d '{"params":{"url":"http://127.0.0.1:6666/test-url","username":"username","password":"password","name":"http"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/http
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | HTTP URL |  | 2.3 |
| username (可选) | String | body(包含在**params**结构中) | 用户名 |  | 2.3 |
| password (可选) | String | body(包含在**params**结构中) | 密码 |  | 2.3 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| platformUuid (可选) | String | body(包含在**params**结构中) |  |  | 0.6 |



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
CreateSNSHttpEndpointAction action = new CreateSNSHttpEndpointAction();
action.url = "http://127.0.0.1:6666/test-url";
action.username = "username";
action.password = "password";
action.name = "http";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSHttpEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSHttpEndpointAction action = CreateSNSHttpEndpointAction()
action.url = "http://127.0.0.1:6666/test-url"
action.username = "username"
action.password = "password"
action.name = "http"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSHttpEndpointAction.Result res = action.call()
```

---

#### 更新Webhook终端(UpdateSNSHttpEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/http/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSHttpEndpoint": {
    "url": "https://open.http.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "username": "admin",
    "password": "password",
    "name": "new name",
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
-X PUT -d '{"updateSNSHttpEndpoint":{"url":"https://open.http.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","username":"admin","password":"password","name":"new name","description":"desc"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/http/c051c930bd95394c9cd6b3775f8cb475/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | **updateSNSHttpEndpoint** | webhook url |  | 5.0.0 |
| username (可选) | Boolean | **updateSNSHttpEndpoint** | username |  | 5.0.0 |
| password (可选) | String | **updateSNSHttpEndpoint** | password |  | 5.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| name (可选) | String | **updateSNSHttpEndpoint** | 资源名称 |  | 5.0.0 |
| description (可选) | String | **updateSNSHttpEndpoint** | 资源的详细描述 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:08:22 PM",
    "lastOpDate": "Dec 25, 2023 2:08:22 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateSNSHttpEndpointAction action = new UpdateSNSHttpEndpointAction();
action.url = "https://open.http.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.username = "admin";
action.password = "password";
action.uuid = "c051c930bd95394c9cd6b3775f8cb475";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSHttpEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSHttpEndpointAction action = UpdateSNSHttpEndpointAction()
action.url = "https://open.http.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.username = "admin"
action.password = "password"
action.uuid = "c051c930bd95394c9cd6b3775f8cb475"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSHttpEndpointAction.Result res = action.call()
```

---

#### 查询Webhook接收端(QuerySNSHttpEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/http
GET zstack/v1/sns/application-endpoints/http/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/http?q=url=http://url
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/http/cbd9163bb4683e10b8a5025621e36862
```



可查询字段

运行CLI命令行工具，输入`QuerySNSHttpEndpoint`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSHttpEndpointAction action = new QuerySNSHttpEndpointAction();
action.conditions = asList("url=http://url");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSHttpEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSHttpEndpointAction action = QuerySNSHttpEndpointAction()
action.conditions = ["url=http://url"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSHttpEndpointAction.Result res = action.call()
```

---

#### 发送测试Webhook请求(SNSHttpTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/http/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "username": "admin",
    "password": "password",
    "endpointUuid": "1c201c27a81740ddadbc5d2f3f38a5e4"
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
-X POST -d '{"params":{"url":"https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","username":"admin","password":"password","endpointUuid":"1c201c27a81740ddadbc5d2f3f38a5e4"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/http/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | body(包含在**params**结构中) | webhook url |  | 5.1.8 |
| username (可选) | String | body(包含在**params**结构中) | Basic Auth 用户名 |  | 5.1.8 |
| password (可选) | String | body(包含在**params**结构中) | Basic Auth 密码 |  | 5.1.8 |
| endpointUuid (可选) | String | body(包含在**params**结构中) | 端点uuid |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": "{\u0027result\u0027: \u0027success\u0027}"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| connected | boolean | 发送结果 | 5.1.8 |
| webhookResp | LinkedHashMap | 对端响应内容 | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.8 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.8 |
| description | String | 错误的概要描述 | 5.1.8 |
| details | String | 错误的详细信息 | 5.1.8 |
| elaboration | String | 保留字段，默认为null | 5.1.8 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.8 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.8 |



##### SDK示例

 Java SDK

```
SNSHttpTestConnectionAction action = new SNSHttpTestConnectionAction();
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.username = "admin";
action.password = "password";
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSHttpTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSHttpTestConnectionAction action = SNSHttpTestConnectionAction()
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.username = "admin"
action.password = "password"
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSHttpTestConnectionAction.Result res = action.call()
```

---

#### 创建钉钉接收端(CreateSNSDingTalkEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/ding-talk
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "http://dingding-robot-url",
    "atAll": false,
    "secret": "SECca7c224f47ab16fbe51050ae0b8ebfc505b2b866fc0eb3768c8d79527d1bacc0",
    "atPersonPhoneNumbers": [
      "18900002222",
      "13377778888"
    ],
    "atPersonList": {
      "13377778888": "jack"
    },
    "name": "dinding"
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
-X POST -d '{"params":{"url":"http://dingding-robot-url","atAll":false,"secret":"SECca7c224f47ab16fbe51050ae0b8ebfc505b2b866fc0eb3768c8d79527d1bacc0","atPersonPhoneNumbers":["18900002222","13377778888"],"atPersonList":{"13377778888":"jack"},"name":"dinding"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | 钉钉机器人URL |  | 2.3 |
| atAll (可选) | Boolean | body(包含在**params**结构中) | 是否消息@所有人 |  | 2.3 |
| atPersonPhoneNumbers (可选) | List | body(包含在**params**结构中) | 要@用户的电话号码 |  | 2.3 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| platformUuid (可选) | String | body(包含在**params**结构中) | 通知平台uuid |  | 2.3 |
| tagUuid (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| secret (可选) | String | body(包含在**params**结构中) | 钉钉密钥 |  | 5.0.0 |
| atPersonList (可选) | Map | body(包含在**params**结构中) | @用户信息 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "url": "http://dingding-url",
    "atAll": false,
    "secret": "SECca7c224f47ab16fbe51050ae0b8ebfc505b2b866fc0eb3768c8d79527d1bacc0",
    "atPersonPhoneNumbers": [
      "18900001111"
    ],
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:05:12 PM",
    "lastOpDate": "Dec 25, 2023 2:05:12 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSDingTalkEndpointInventory | 详情参考[inventory] | 2.3 |

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
| url | String | 钉钉机器人URL | 2.3 |
| atAll | boolean | 是否@所有人 | 2.3 |
| secret | String | 钉钉密钥 | 5.0.0 |
| atPersonPhoneNumbers | List | @用户的电话号码 | 2.3 |
| name | String | 资源名称 | 2.3 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 终端类型 | 2.3 |
| state | String | 状态 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| platform | SNSApplicationPlatformInventory | 详情参考[platform] | 5.0.0 |

 #platform

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CreateSNSDingTalkEndpointAction action = new CreateSNSDingTalkEndpointAction();
action.url = "http://dingding-robot-url";
action.atAll = false;
action.atPersonPhoneNumbers = asList("18900002222","13377778888");
action.name = "dinding";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSDingTalkEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSDingTalkEndpointAction action = new CreateSNSDingTalkEndpointAction()
action.url = "http://dingding-robot-url"
action.atAll = false
action.atPersonPhoneNumbers = asList("18900002222","13377778888")
action.name = "dinding"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSDingTalkEndpointAction.Result res = action.call()
```

---

#### 查询钉钉终端(QuerySNSDingTalkEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/ding-talk
GET zstack/v1/sns/application-endpoints/ding-talk/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk?q=url=http://dingding-url
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/69658f91a1f130e0986fbfb19de1b3c9
```



可查询字段

运行CLI命令行工具，输入`QuerySNSDingTalkEndpoint`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSDingTalkEndpointAction action = new QuerySNSDingTalkEndpointAction();
action.conditions = asList("url=http://dingding-url");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSDingTalkEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSDingTalkEndpointAction action = QuerySNSDingTalkEndpointAction()
action.conditions = ["url=http://dingding-url"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSDingTalkEndpointAction.Result res = action.call()
```

---

#### 测试钉钉连通性(SNSDingTalkTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/ding-talk/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "atAll": true,
    "atPersonPhoneNumbers": [
      "13062689903",
      "13062689901"
    ],
    "secret": "SECf8310c22767fe6f7cc5c00c6c4b1343605c445e9adaa28e39138749127a1c962",
    "testMsg": "hello world",
    "endpointUuid": "1c201c27a81740ddadbc5d2f3f38a5e4"
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
-X POST -d '{"params":{"url":"https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","atAll":true,"atPersonPhoneNumbers":["13062689903","13062689901"],"secret":"SECf8310c22767fe6f7cc5c00c6c4b1343605c445e9adaa28e39138749127a1c962","testMsg":"hello world","endpointUuid":"1c201c27a81740ddadbc5d2f3f38a5e4"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| testMsg | String | body(包含在**params**结构中) | 测试消息文本 |  | 5.0.0 |
| endpointUuid (可选) | String | body(包含在**params**结构中) | 钉钉endpoint uuid |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| url (可选) | String | body(包含在**params**结构中) | webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | body(包含在**params**结构中) | 是否@所有人 |  | 5.0.0 |
| atPersonPhoneNumbers (可选) | List | body(包含在**params**结构中) | @手机号 |  | 5.0.0 |
| secret (可选) | String | body(包含在**params**结构中) | 钉钉秘钥 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| connected | boolean | webhook url 连通性标识(仅代表能否联通) | 5.0.0 |
| webhookResp | LinkedHashMap | webhook url 发送测试消息对端返回([https://open.dingtalk.com/document/robots/custom-robot-access#title-7ur-3ok-s1a]) | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
SNSDingTalkTestConnectionAction action = new SNSDingTalkTestConnectionAction();
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.atAll = true;
action.atPersonPhoneNumbers = asList("13062689903","13062689901");
action.secret = "SECf8310c22767fe6f7cc5c00c6c4b1343605c445e9adaa28e39138749127a1c962";
action.testMsg = "hello world";
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSDingTalkTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSDingTalkTestConnectionAction action = SNSDingTalkTestConnectionAction()
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.atAll = true
action.atPersonPhoneNumbers = [13062689903, 13062689901]
action.secret = "SECf8310c22767fe6f7cc5c00c6c4b1343605c445e9adaa28e39138749127a1c962"
action.testMsg = "hello world"
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSDingTalkTestConnectionAction.Result res = action.call()
```

---

#### 更新钉钉终端(UpdateSNSDingTalkEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/ding-talk/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSDingTalkEndpoint": {
    "url": "https://open.ding-talk.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "atAll": false,
    "secret": "fiSmveXkeD2jIjrENHYjQd",
    "name": "new name",
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
-X PUT -d '{"updateSNSDingTalkEndpoint":{"url":"https://open.ding-talk.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","atAll":false,"secret":"fiSmveXkeD2jIjrENHYjQd","name":"new name","description":"desc"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/f2d2a456d49f3a9596440448eb4f26de/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | **updateSNSDingTalkEndpoint** | webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | **updateSNSDingTalkEndpoint** | @所有人 |  | 5.0.0 |
| secret (可选) | String | **updateSNSDingTalkEndpoint** | 秘钥 |  | 5.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| name (可选) | String | **updateSNSDingTalkEndpoint** | 资源名称 |  | 5.0.0 |
| description (可选) | String | **updateSNSDingTalkEndpoint** | 资源的详细描述 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:07:46 PM",
    "lastOpDate": "Dec 25, 2023 2:07:46 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateSNSDingTalkEndpointAction action = new UpdateSNSDingTalkEndpointAction();
action.url = "https://open.ding-talk.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.atAll = false;
action.secret = "fiSmveXkeD2jIjrENHYjQd";
action.uuid = "f2d2a456d49f3a9596440448eb4f26de";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSDingTalkEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSDingTalkEndpointAction action = UpdateSNSDingTalkEndpointAction()
action.url = "https://open.ding-talk.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.atAll = false
action.secret = "fiSmveXkeD2jIjrENHYjQd"
action.uuid = "f2d2a456d49f3a9596440448eb4f26de"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSDingTalkEndpointAction.Result res = action.call()
```

---

#### 添加钉钉用户(AddSNSDingTalkAtPerson)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/ding-talk/at-persons
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "phoneNumber": "18099997777",
    "endpointUuid": "5b9b95ca0cda3ab4bb51b5a4e1965305",
    "remark": "jack"
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
-X POST -d '{"params":{"phoneNumber":"18099997777","endpointUuid":"5b9b95ca0cda3ab4bb51b5a4e1965305","remark":"jack"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/at-persons
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| phoneNumber | String | body(包含在**params**结构中) | 用户电话号码（钉钉用户以电话注册） |  | 2.3 |
| endpointUuid | String | body(包含在**params**结构中) | 钉钉终端UUID |  | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| tagUuid (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| remark (可选) | String | body(包含在**params**结构中) | 备注 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "af3c83c835234d11b1afe022e85d67ec",
    "phoneNumber": "18988887777",
    "endpointUuid": "7b9b311a1a6c445bbe48c02b52f91ef6",
    "createDate": "Dec 25, 2023 2:07:43 PM",
    "lastOpDate": "Dec 25, 2023 2:07:43 PM",
    "remark": "jack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSDingTalkAtPersonInventory | 详情参考[inventory] | 2.3 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| phoneNumber | String | 手机号码 | 5.0.0 |
| endpointUuid | String | 钉钉endpoint UUID | 5.0.0 |



##### SDK示例

 Java SDK

```
AddSNSDingTalkAtPersonAction action = new AddSNSDingTalkAtPersonAction();
action.phoneNumber = "18099997777";
action.endpointUuid = "5b9b95ca0cda3ab4bb51b5a4e1965305";
action.remark = "jack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSNSDingTalkAtPersonAction.Result res = action.call();
```

 Python SDK

```
AddSNSDingTalkAtPersonAction action = AddSNSDingTalkAtPersonAction()
action.phoneNumber = "18099997777"
action.endpointUuid = "5b9b95ca0cda3ab4bb51b5a4e1965305"
action.remark = "jack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSNSDingTalkAtPersonAction.Result res = action.call()
```

---

#### 删除钉钉用户(RemoveSNSDingTalkAtPerson)



##### API请求

 URLs

```
DELETE zstack/v1/sns/application-endpoints/ding-talk/{endpointUuid}/at-persons/{phoneNumber}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/696e69a1023f323ca147be82ed7f13cd/at-persons/18988887777?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| deleteMode (可选) | String | body |  |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |
| endpointUuid | String | url | 钉钉接收端UUID |  | 2.3 |
| phoneNumber | String | url | 要删除的atPerson的电话 |  | 2.3 |



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
RemoveSNSDingTalkAtPersonAction action = new RemoveSNSDingTalkAtPersonAction();
action.endpointUuid = "696e69a1023f323ca147be82ed7f13cd";
action.phoneNumber = "18988887777";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveSNSDingTalkAtPersonAction.Result res = action.call();
```

 Python SDK

```
RemoveSNSDingTalkAtPersonAction action = RemoveSNSDingTalkAtPersonAction()
action.endpointUuid = "696e69a1023f323ca147be82ed7f13cd"
action.phoneNumber = "18988887777"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveSNSDingTalkAtPersonAction.Result res = action.call()
```

---

#### 查询钉钉@用户(QuerySNSDingTalkAtPerson)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/ding-talk/at-persons
```


```

GET zstack/v1/sns/application-endpoints/ding-talk/at-persons/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/at-persons?q=uuid=bc09a0f65270322da363ad99552b234e&q=endpointUuid=a4e3535bc4663b15832d7cc091855e13
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/at-persons/38f8430ba7c9331d9d6d920072d7bf27
```



可查询字段

运行zstack-cli命令行工具，输入QuerySNSDingTalkAtPerson并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
  "inventories": [
    {
      "uuid": "234f8735703a38ecb840cfe9042bc945",
      "phoneNumber": "13062689903",
      "endpointUuid": "9488e18c34b933f5a06d1f45301c7f20"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationPlatformInventory | 详情参考[inventory] | 5.0.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| phoneNumber | String | 手机号码 | 5.0.0 |
| endpointUuid | String | 钉钉endpoint uuid | 5.0.0 |



##### SDK示例

 Java SDK

```
QuerySNSDingTalkAtPersonAction action = new QuerySNSDingTalkAtPersonAction();
action.conditions = asList("uuid=3806b82167a33673b5067831090f317d","endpointUuid=c36e1b34d3e73db7a53e067da95de3d5");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSDingTalkAtPersonAction.Result res = action.call();
```

 Python SDK

```
QuerySNSDingTalkAtPersonAction action = QuerySNSDingTalkAtPersonAction()
action.conditions = ["uuid=b836d745aa623217838bc9d0ecb3bb1f","endpointUuid=dc9f00eecd1837e484bde65bf53f45a1"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSDingTalkAtPersonAction.Result res = action.call()
```

---

#### 更新钉钉@用户(UpdateAtPersonOfAtDingTalkEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/ding-talk/at-persons/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAtPersonOfAtDingTalkEndpoint": {
    "endpointUuid": "d7be4980da0a308380b761afd3f36687",
    "phoneNumber": "13062689903",
    "remark": "jack"
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
-X PUT -d '{"updateAtPersonOfAtDingTalkEndpoint":{"endpointUuid":"d7be4980da0a308380b761afd3f36687","phoneNumber":"13062689903","remark":"jack"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/ding-talk/at-persons/c42464333dce35db9fbc8816f22b1d31/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| endpointUuid | String | body(包含在**updateAtPersonOfAtDingTalkEndpoint**结构中) | 钉钉endpoint uuid |  | 5.0.0 |
| phoneNumber (可选) | String | body(包含在**updateAtPersonOfAtDingTalkEndpoint**结构中) | 手机号码 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| remark | String | body(包含在**updateAtPersonOfAtDingTalkEndpoint**结构中) | 备注 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bb8f58cf82bd42a0902e192a920e02be",
    "phoneNumber": "18988887777",
    "endpointUuid": "e046be58ccbf4ab592bfb18aa0975418",
    "createDate": "Dec 25, 2023 2:07:18 PM",
    "lastOpDate": "Dec 25, 2023 2:07:18 PM",
    "remark": "jack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSDingTalkAtPersonInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| phoneNumber | String | 手机号码 | 5.0.0 |
| endpointUuid | String | 钉钉endpoint uuid | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateAtPersonOfAtDingTalkEndpointAction action = new UpdateAtPersonOfAtDingTalkEndpointAction();
action.uuid = "c42464333dce35db9fbc8816f22b1d31";
action.endpointUuid = "d7be4980da0a308380b761afd3f36687";
action.phoneNumber = "13062689903";
action.remark = "jack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAtPersonOfAtDingTalkEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateAtPersonOfAtDingTalkEndpointAction action = UpdateAtPersonOfAtDingTalkEndpointAction()
action.uuid = "c42464333dce35db9fbc8816f22b1d31"
action.endpointUuid = "d7be4980da0a308380b761afd3f36687"
action.phoneNumber = "13062689903"
action.remark = "jack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAtPersonOfAtDingTalkEndpointAction.Result res = action.call()
```

---

#### 删除接收端(DeleteSNSApplicationEndpoint)



##### API请求

 URLs

```
DELETE zstack/v1/sns/application-endpoints/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/application-endpoints/f068da2f92f7354cbc9054a6c14989ea
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| deleteMode (可选) | String | body |  |  | 2.3 |
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
DeleteSNSApplicationEndpointAction action = new DeleteSNSApplicationEndpointAction();
action.uuid = "f068da2f92f7354cbc9054a6c14989ea";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSNSApplicationEndpointAction.Result res = action.call();
```

 Python SDK

```
DeleteSNSApplicationEndpointAction action = DeleteSNSApplicationEndpointAction()
action.uuid = "f068da2f92f7354cbc9054a6c14989ea"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSNSApplicationEndpointAction.Result res = action.call()
```

---

#### 更新接收端(UpdateSNSApplicationEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSApplicationEndpoint": {
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
-X PUT -d '{"updateSNSApplicationEndpoint":{"name":"new name"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/7d6155384f4e3cdaa6e877ecec59318c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| name (可选) | String | body(包含在**updateSNSApplicationEndpoint**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**updateSNSApplicationEndpoint**结构中) | 资源的详细描述 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:06:16 PM",
    "lastOpDate": "Dec 25, 2023 2:06:16 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 2.3 |

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
| name | String | 资源名称 | 2.3 |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| platformUuid | String | 应用平台UUID | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateSNSApplicationEndpointAction action = new UpdateSNSApplicationEndpointAction();
action.uuid = "7d6155384f4e3cdaa6e877ecec59318c";
action.name = "new name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSApplicationEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSApplicationEndpointAction action = UpdateSNSApplicationEndpointAction()
action.uuid = "7d6155384f4e3cdaa6e877ecec59318c"
action.name = "new name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSApplicationEndpointAction.Result res = action.call()
```

---

#### 查询接收端(QuerySNSApplicationEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints
GET zstack/v1/sns/application-endpoints/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints?q=name=http
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/b8a4be12db8237a1a42f897402afd4e8
```



可查询字段

运行CLI命令行工具，输入`QuerySNSApplicationEndpoint`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSApplicationEndpointAction action = new QuerySNSApplicationEndpointAction();
action.conditions = asList("name=http");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSApplicationEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSApplicationEndpointAction action = QuerySNSApplicationEndpointAction()
action.conditions = ["name=http"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSApplicationEndpointAction.Result res = action.call()
```

---

#### 更改接收端(ChangeSNSApplicationEndpointState)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeSNSApplicationEndpointState": {
    "stateEvent": "disable"
  },
  "systemTags": [],
  "userTags": []
}
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"changeSNSApplicationEndpointState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/1485ef44ea5234ee83d80d3a15937e19/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**changeSNSApplicationEndpointState**结构中) | 状态事件 | enable disable | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:06:05 PM",
    "lastOpDate": "Dec 25, 2023 2:06:05 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| type | String | 类型 | 2.3 |
| platformUuid | String | 应用平台UUID | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |



##### SDK示例

 Java SDK

```
ChangeSNSApplicationEndpointStateAction action = new ChangeSNSApplicationEndpointStateAction();
action.uuid = "1485ef44ea5234ee83d80d3a15937e19";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeSNSApplicationEndpointStateAction.Result res = action.call();
```

 Python SDK

```
ChangeSNSApplicationEndpointStateAction action = ChangeSNSApplicationEndpointStateAction()
action.uuid = "1485ef44ea5234ee83d80d3a15937e19"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeSNSApplicationEndpointStateAction.Result res = action.call()
```

---

#### 创建阿里云短信接收端(CreateSNSAliyunSmsEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/sms-endpoints/aliyunsms
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "accessKeyUuid": "4eb00e2bf95bp5s505e6eccd647d9k35",
    "receivers": [
      "13555555555",
      "18666666666"
    ],
    "name": "AliyunSms",
    "description": "This is an Aliyun SMS Endpoint"
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
-X POST -d '{"params":{"accessKeyUuid":"4eb00e2bf95bp5s505e6eccd647d9k35","receivers":["13555555555","18666666666"],"name":"AliyunSms","description":"This is an Aliyun SMS Endpoint"}}' http://localhost:8080/zstack/v1/sns/sms-endpoints/aliyunsms
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accessKeyUuid | String | body(包含在**params**结构中) | 阿里云AccessKey信息Uuid |  | 3.7.0 |
| receivers (可选) | List | body(包含在**params**结构中) | 短信接收者 |  | 3.7.0 |
| name | String | body(包含在**params**结构中) | 接收端名称 |  | 3.7.0 |
| description (可选) | String | body(包含在**params**结构中) | 接收端的详细描述 |  | 3.7.0 |
| platformUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "041723a4d9d14e8686dbec7d1369c05e",
    "description": "example SNSSmsEndpoint Description",
    "type": "AliyunSms",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:04:52 PM",
    "lastOpDate": "Dec 25, 2023 2:04:52 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | SNSSmsEndpointInventory | 详情参考[inventory] | 3.7.0 |

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
| receivers | List | 短信接收者 | 3.7.0 |
| name | String | 短信接收端名称 | 3.7.0 |
| uuid | String | 短信接收端的UUID，唯一标示该资源 | 3.7.0 |
| description | String | 短信接收端的详细描述 | 3.7.0 |
| type | String | 短信接收端类型 | 3.7.0 |
| state | String | 短信接收端状态 | 3.7.0 |
| platformUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
CreateSNSAliyunSmsEndpointAction action = new CreateSNSAliyunSmsEndpointAction();
action.accessKeyUuid = "4eb00e2bf95bp5s505e6eccd647d9k35";
action.receivers = asList("13555555555","18666666666");
action.name = "AliyunSms";
action.description = "This is an Aliyun SMS Endpoint";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSAliyunSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSAliyunSmsEndpointAction action = CreateSNSAliyunSmsEndpointAction()
action.accessKeyUuid = "4eb00e2bf95bp5s505e6eccd647d9k35"
action.receivers = [13555555555, 18666666666]
action.name = "AliyunSms"
action.description = "This is an Aliyun SMS Endpoint"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSAliyunSmsEndpointAction.Result res = action.call()
```

---

#### 验证阿里云短信接收端(ValidateSNSAliyunSmsEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/sms-endpoints/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "validateSNSAliyunSmsEndpoint": {
    "phoneNumbers": [
      "134567898765",
      "18654321234"
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
-X PUT -d '{"validateSNSAliyunSmsEndpoint":{"phoneNumbers":["134567898765","18654321234"]}}' http://localhost:8080/zstack/v1/sns/sms-endpoints/56304854f10730adac30a81c1e8e8de4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 接收端的UUID，唯一标示该资源 |  | 3.7.0 |
| phoneNumbers | List | body(包含在**validateSNSAliyunSmsEndpoint**结构中) | 验证短信接收者 |  | 3.7.0 |
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
ValidateSNSAliyunSmsEndpointAction action = new ValidateSNSAliyunSmsEndpointAction();
action.uuid = "56304854f10730adac30a81c1e8e8de4";
action.phoneNumbers = asList("134567898765","18654321234");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ValidateSNSAliyunSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
ValidateSNSAliyunSmsEndpointAction action = ValidateSNSAliyunSmsEndpointAction()
action.uuid = "56304854f10730adac30a81c1e8e8de4"
action.phoneNumbers = [134567898765, 18654321234]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ValidateSNSAliyunSmsEndpointAction.Result res = action.call()
```

---

#### 创建通用短信接收端(CreateSNSUniversalSmsEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/universal-sms
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "smsAccessKeyId": "smsAccessKeyId",
    "smsAccessKeySecret": "smsAccessKeySecret",
    "supplier": "Emay",
    "name": "Universal Sms"
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
-X POST -d '{"params":{"smsAccessKeyId":"smsAccessKeyId","smsAccessKeySecret":"smsAccessKeySecret","supplier":"Emay","name":"Universal Sms"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/universal-sms
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| smsAccessKeyId | String | body(包含在**params**结构中) |  |  | 5.1.8 |
| smsAccessKeySecret | String | body(包含在**params**结构中) |  |  | 5.1.8 |
| supplier | String | body(包含在**params**结构中) |  |  | 5.1.8 |
| additionParam (可选) | Map | body(包含在**params**结构中) |  |  | 5.1.8 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.1.8 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.1.8 |
| platformUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.1.8 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.1.8 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |



##### API返回

 返回示例

```
{
  "inventory": {
    "smsAccessKeyId": "smsAccessKeyId",
    "smsAccessKeySecret": "smsAccessKeySecret",
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "UniversalSms",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Jun 13, 2024 5:28:34 PM",
    "lastOpDate": "Jun 13, 2024 5:28:34 PM",
    "connectionStatus": "UP"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.8 |
| inventory | SNSUniversalSmsEndpointInventory | 详情参考[inventory] | 5.1.8 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.8 |
| description | String | 错误的概要描述 | 5.1.8 |
| details | String | 错误的详细信息 | 5.1.8 |
| elaboration | String | 保留字段，默认为null | 5.1.8 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.8 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.8 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| smsAccessKeyId | String | 访问密钥ID | 5.1.8 |
| smsAccessKeySecret | String | 访问密钥密码 | 5.1.8 |
| supplier | String | 短信提供商 | 5.1.8 |
| name | String | 资源名称 | 5.1.8 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.8 |
| description | String | 资源的详细描述 | 5.1.8 |
| state | String |  | 5.1.8 |
| platformUuid | String |  | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |
| platform | SNSApplicationPlatformInventory | 详情参考[#platform] | 5.1.8 |

 #platform

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.8 |
| name | String | 资源名称 | 5.1.8 |
| description | String | 资源的详细描述 | 5.1.8 |
| type | String | 类型 | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |



##### SDK示例

 Java SDK

```
CreateSNSUniversalSmsEndpointAction action = new CreateSNSUniversalSmsEndpointAction();
action.smsAccessKeyId = "smsAccessKeyId";
action.smsAccessKeySecret = "smsAccessKeySecret";
action.supplier = "Emay";
action.name = "Universal Sms";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSUniversalSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSUniversalSmsEndpointAction action = CreateSNSUniversalSmsEndpointAction()
action.smsAccessKeyId = "smsAccessKeyId"
action.smsAccessKeySecret = "smsAccessKeySecret"
action.supplier = "Emay"
action.name = "Universal Sms"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSUniversalSmsEndpointAction.Result res = action.call()
```

---

#### 更新通用短信接收端(UpdateSNSUniversalSmsEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/universal-sms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSUniversalSmsEndpoint": {
    "smsAccessKeyId": "smsAccessKeyId",
    "smsAccessKeySecret": "smsAccessKeySecret",
    "name": "new name",
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
-X PUT -d '{"updateSNSUniversalSmsEndpoint":{"smsAccessKeyId":"smsAccessKeyId","smsAccessKeySecret":"smsAccessKeySecret","name":"new name","description":"desc"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/universal-sms/6460cd6f98923299a5b91ccc4a43c159/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| smsAccessKeyId | String | body(包含在**updateSNSUniversalSmsEndpoint**结构中) | 访问密钥ID |  | 5.1.8 |
| smsAccessKeySecret | String | body(包含在**updateSNSUniversalSmsEndpoint**结构中) | 访问密钥密码 |  | 5.1.8 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.1.8 |
| name (可选) | String | body(包含在**updateSNSUniversalSmsEndpoint**结构中) | 资源名称 |  | 5.1.8 |
| description (可选) | String | body(包含在**updateSNSUniversalSmsEndpoint**结构中) | 资源的详细描述 |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |
| platformUuid (可选) | String | body(包含在**updateSNSUniversalSmsEndpoint**结构中) | 平台uuid |  | 5.1.8 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Jun 13, 2024 5:26:46 PM",
    "lastOpDate": "Jun 13, 2024 5:26:46 PM",
    "connectionStatus": "UP"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.8 |
| inventory | SNSUniversalSmsEndpointInventory | 详情参考[inventory] | 5.1.8 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.8 |
| description | String | 错误的概要描述 | 5.1.8 |
| details | String | 错误的详细信息 | 5.1.8 |
| elaboration | String | 保留字段，默认为null | 5.1.8 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.8 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.8 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 5.1.8 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.8 |
| description | String | 资源的详细描述 | 5.1.8 |
| type | String | 类型 | 5.1.8 |
| platformUuid | String | 应用平台UUID | 5.1.8 |
| createDate | Timestamp | 创建时间 | 5.1.8 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.8 |
| connectionStatus | String | 联通状态(UP,DOWN) | 5.1.8 |



##### SDK示例

 Java SDK

```
UpdateSNSUniversalSmsEndpointAction action = new UpdateSNSUniversalSmsEndpointAction();
action.smsAccessKeyId = "smsAccessKeyId";
action.smsAccessKeySecret = "smsAccessKeySecret";
action.uuid = "6460cd6f98923299a5b91ccc4a43c159";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSUniversalSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSUniversalSmsEndpointAction action = UpdateSNSUniversalSmsEndpointAction()
action.smsAccessKeyId = "smsAccessKeyId"
action.smsAccessKeySecret = "smsAccessKeySecret"
action.uuid = "6460cd6f98923299a5b91ccc4a43c159"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSUniversalSmsEndpointAction.Result res = action.call()
```

---

#### 验证通用短信接收端(ValidateSNSUniversalSmsEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/universal-sms/{uuid}/validate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "validateSNSUniversalSmsEndpoint": {
    "testMsg": "test sms",
    "phoneNumbers": [
      "134567898765",
      "18654321234"
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
-X PUT -d '{"validateSNSUniversalSmsEndpoint":{"testMsg":"test sms","phoneNumbers":["134567898765","18654321234"]}}' http://localhost:8080/zstack/v1/sns/application-endpoints/universal-sms/b762d45d18943f16abac61b600874b09/validate
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| testMsg | String | body(包含在**validateSNSUniversalSmsEndpoint**结构中) |  |  | 5.1.8 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.1.8 |
| phoneNumbers | List | body(包含在**validateSNSUniversalSmsEndpoint**结构中) |  |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |



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
ValidateSNSUniversalSmsEndpointAction action = new ValidateSNSUniversalSmsEndpointAction();
action.testMsg = "test sms";
action.uuid = "b762d45d18943f16abac61b600874b09";
action.phoneNumbers = asList("134567898765","18654321234");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ValidateSNSUniversalSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
ValidateSNSUniversalSmsEndpointAction action = ValidateSNSUniversalSmsEndpointAction()
action.testMsg = "test sms"
action.uuid = "b762d45d18943f16abac61b600874b09"
action.phoneNumbers = [134567898765, 18654321234]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ValidateSNSUniversalSmsEndpointAction.Result res = action.call()
```

---

#### 查询通用短信接收端(QuerySNSUniversalSmsEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/universal-sms
```


```
GET zstack/v1/sns/application-endpoints/universal-sms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/universal-sms?q=url=http://universal-sms-url
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/universal-sms/004b6a5c2ad13e3eaf53db006d47eaf2
```



可查询字段

运行CLI命令行工具，输入`QuerySNSUniversalSmsEndpoint`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSUniversalSmsEndpointAction action = new QuerySNSUniversalSmsEndpointAction();
action.conditions = asList("url=http://universal-sms-url");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSUniversalSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSUniversalSmsEndpointAction action = QuerySNSUniversalSmsEndpointAction()
action.conditions = ["url=http://universal-sms-url"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSUniversalSmsEndpointAction.Result res = action.call()
```

---

#### 添加短信接收者(AddSNSSmsReceiver)



##### API请求

 URLs

```
POST zstack/v1/sns/sms-endpoints/receivers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "phoneNumber": "13333333333",
    "phoneNumberList": [
      "13333333333"
    ],
    "endpointUuid": "467e77c4cc42492f9794429e689a9874",
    "type": "AliyunSms",
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
-X POST -d '{"params":{"phoneNumber":"13333333333","phoneNumberList":["13333333333"],"endpointUuid":"467e77c4cc42492f9794429e689a9874","type":"AliyunSms","description":"description"}}' http://localhost:8080/zstack/v1/sns/sms-endpoints/receivers
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| phoneNumber（可选） | String | body(包含在**params**结构中) | 短信接收号码 |  | 3.7.0 |
| phoneNumberList（可选） | List | body(包含在**params**结构中) | 短信接收号码列表 |  | 5.1.8 |
| endpointUuid | String | body(包含在**params**结构中) | 短信接收端Uuid |  | 3.7.0 |
| type | String | body(包含在**params**结构中) | 短信接收端类型 | AliyunSms UniversalSms | 5.1.8 |
| description (可选) | String | body(包含在**params**结构中) | 短信接收者描述 |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "d122a14806e8405894d00034b0a91dd1",
      "phoneNumber": "18912345678",
      "endpointUuid": "d539f1d109534f90b0cbf50cff412585",
      "type": "AliyunSms",
      "description": "description",
      "createDate": "Jun 13, 2024 5:29:04 PM",
      "lastOpDate": "Jun 13, 2024 5:29:04 PM"
    }
  ]
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 5.1.8 |

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
| phoneNumber | String | 短信接收号码 | 3.7.0 |
| endpointUuid | String | 短信接收端Uuid | 3.7.0 |
| description | String | 短信接收者描述 | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |
| type | SmsReceiverType | 详情参考[type] | 3.7.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| AliyunSms | SmsReceiverType | 阿里云短信 | 3.7.0 |
| UniversalSms | SmsReceiverType | 通用短信 | 5.1.8 |



##### SDK示例

 Java SDK

```
AddSNSSmsReceiverAction action = new AddSNSSmsReceiverAction();
action.phoneNumber = "13333333333";
action.phoneNumberList = asList("13333333333");
action.endpointUuid = "467e77c4cc42492f9794429e689a9874";
action.type = "AliyunSms";
action.description = "description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSNSSmsReceiverAction.Result res = action.call();

```

 Python SDK

```
AddSNSSmsReceiverAction action = AddSNSSmsReceiverAction()
action.phoneNumber = "13333333333"
action.phoneNumberList = [13333333333]
action.endpointUuid = "467e77c4cc42492f9794429e689a9874"
action.type = "AliyunSms"
action.description = "description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSNSSmsReceiverAction.Result res = action.call()

```

---

#### 删除短信接收者(RemoveSNSSmsReceiver)



##### API请求

 URLs

```
DELETE zstack/v1/sns/sms-endpoints/{endpointUuid}/receivers/{phoneNumber}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/sms-endpoints/196b91815e983d1397cb336a4fc9d054/receivers/13333333333
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| endpointUuid | String | url | 短信接收端Uuid |  | 3.7.0 |
| phoneNumber（可选） | String | url | 短信接收号码 |  | 3.7.0 |
| phoneNumberList（可选） | List | body | 短信接收号码列表 |  | 5.1.8 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing, Permissive | 3.7.0 |
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
RemoveSNSSmsReceiverAction action = new RemoveSNSSmsReceiverAction();
action.endpointUuid = "196b91815e983d1397cb336a4fc9d054";
action.phoneNumber = "13333333333";
action.phoneNumberList = asList("13333333333");
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveSNSSmsReceiverAction.Result res = action.call();

```

 Python SDK

```
RemoveSNSSmsReceiverAction action = RemoveSNSSmsReceiverAction()
action.endpointUuid = "196b91815e983d1397cb336a4fc9d054"
action.phoneNumber = "13333333333"
action.phoneNumberList = [13333333333]
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveSNSSmsReceiverAction.Result res = action.call()

```

---

#### 查询短信接收端(QuerySNSSmsEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/sms-endpoints
GET zstack/v1/sns/sms-endpoints/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/sms-endpoints?q=name=SmsEndpoint
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/sms-endpoints/5efca3a7d67031fbba5bc512e52a4798
```



可查询字段

运行CLI命令行工具，输入QuerySNSSmsEndpoint并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSSmsEndpointAction action = new QuerySNSSmsEndpointAction();
action.conditions = asList("name=SmsEndpoint");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSSmsEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSSmsEndpointAction action = QuerySNSSmsEndpointAction()
action.conditions = ["name=SmsEndpoint"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSSmsEndpointAction.Result res = action.call()
```

---

#### 给SNS邮件接受端增加邮箱地址(AddEmailAddressToSNSEmailEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/emails/email-addresses
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "emailAddress": "example@cloud.io",
    "endpointUuid": "74220bbf0d8b3c6b943a294c2679ca69"
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
-X POST -d '{"params":{"emailAddress":"example@cloud.io","endpointUuid":"74220bbf0d8b3c6b943a294c2679ca69"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/emails/email-addresses
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| emailAddress | String | body(包含在**params**结构中) | 邮箱地址 |  | 3.7.0 |
| endpointUuid | String | body(包含在**params**结构中) | 接收端uuid |  | 3.7.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.7.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "02d89445bc1f4e2db80baa734563a312",
    "emailAddress": "example@cloud.io",
    "endpointUuid": "e99050f8f59649f0a9e842958665f1b3",
    "createDate": "Dec 25, 2023 2:04:26 PM",
    "lastOpDate": "Dec 25, 2023 2:04:26 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | SNSEmailAddressInventory | 详情参考[inventory] | 3.7.0 |

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
| emailAddress | String |  | 3.7.0 |
| endpointUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
AddEmailAddressToSNSEmailEndpointAction action = new AddEmailAddressToSNSEmailEndpointAction();
action.emailAddress = "example@cloud.io";
action.endpointUuid = "74220bbf0d8b3c6b943a294c2679ca69";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddEmailAddressToSNSEmailEndpointAction.Result res = action.call();
```

 Python SDK

```
AddEmailAddressToSNSEmailEndpointAction action = AddEmailAddressToSNSEmailEndpointAction()
action.emailAddress = "example@cloud.io"
action.endpointUuid = "74220bbf0d8b3c6b943a294c2679ca69"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddEmailAddressToSNSEmailEndpointAction.Result res = action.call()
```

---

#### 更新接收端邮箱地址(UpdateEmailAddressOfSNSEmailEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/emails/email-addresses
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateEmailAddressOfSNSEmailEndpoint": {
    "emailAddressUuid": "cb2b3d85e0da3a299c52c23510ba15dd",
    "endpointUuid": "f305528eb6773a73beac3f94f79d3017",
    "emailAddress": "example@cloud.io"
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
-X PUT -d '{"updateEmailAddressOfSNSEmailEndpoint":{"emailAddressUuid":"cb2b3d85e0da3a299c52c23510ba15dd","endpointUuid":"f305528eb6773a73beac3f94f79d3017","emailAddress":"example@cloud.io"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/emails/email-addresses
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| emailAddressUuid | String | body(包含在**updateEmailAddressOfSNSEmailEndpoint**结构中) | 邮箱地址uuid |  | 5.0.0 |
| endpointUuid | String | body(包含在**updateEmailAddressOfSNSEmailEndpoint**结构中) | 接收端uuid |  | 5.0.0 |
| emailAddress | String | body(包含在**updateEmailAddressOfSNSEmailEndpoint**结构中) | 新邮箱地址 |  | 5.0.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4d5bf84154764c9fb6e91c6739081bcf",
    "emailAddress": "example@cloud.io",
    "endpointUuid": "aac215a1d95d43c4ba4cad7ed3ad1670",
    "createDate": "Dec 25, 2023 2:07:43 PM",
    "lastOpDate": "Dec 25, 2023 2:07:43 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | SNSEmailAddressInventory | 详情参考[inventory] | 3.7.0 |

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
| emailAddress | String |  | 3.7.0 |
| endpointUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateEmailAddressOfSNSEmailEndpointAction action = new UpdateEmailAddressOfSNSEmailEndpointAction();
action.emailAddressUuid = "cb2b3d85e0da3a299c52c23510ba15dd";
action.endpointUuid = "f305528eb6773a73beac3f94f79d3017";
action.emailAddress = "example@cloud.io";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateEmailAddressOfSNSEmailEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateEmailAddressOfSNSEmailEndpointAction action = UpdateEmailAddressOfSNSEmailEndpointAction()
action.emailAddressUuid = "cb2b3d85e0da3a299c52c23510ba15dd"
action.endpointUuid = "f305528eb6773a73beac3f94f79d3017"
action.emailAddress = "example@cloud.io"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateEmailAddressOfSNSEmailEndpointAction.Result res = action.call()
```

---

#### 删除邮箱接收端的地址(DeleteEmailAddressOfSNSEmailEndpoint)



##### API请求

 URLs

```
DELETE zstack/v1/sns/application-endpoints/emails/{endpointUuid}/email-addresses/{emailAddressUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/application-endpoints/emails/c9d1789432133840862986db31a8e3fb/email-addresses/7671c40279e23d1cba927a5726957fcb
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| emailAddressUuid | String | url |  |  | 3.7.0 |
| endpointUuid | String | url |  |  | 3.7.0 |
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
DeleteEmailAddressOfSNSEmailEndpointAction action = new DeleteEmailAddressOfSNSEmailEndpointAction();
action.emailAddressUuid = "7671c40279e23d1cba927a5726957fcb";
action.endpointUuid = "c9d1789432133840862986db31a8e3fb";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteEmailAddressOfSNSEmailEndpointAction.Result res = action.call();
```

 Python SDK

```
DeleteEmailAddressOfSNSEmailEndpointAction action = DeleteEmailAddressOfSNSEmailEndpointAction()
action.emailAddressUuid = "7671c40279e23d1cba927a5726957fcb"
action.endpointUuid = "c9d1789432133840862986db31a8e3fb"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteEmailAddressOfSNSEmailEndpointAction.Result res = action.call()
```

---

#### 查询接收端邮箱地址(QuerySNSEmailAddress)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/emails/email-addresses
```


```
GET zstack/v1/sns/application-endpoints/emails/email-addresses/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/emails/email-addresses?q=uuid=b1a8e21bed1e3592af8ba5ffff497af6&q=endpointUuid=547ffd3cbdb2399d8c6dde2d983502d5
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/emails/email-addresses/9c1b8131d9a03e3b88602a5072a89c0b
```



可查询字段

运行CLI命令行工具，输入QuerySNSEmailAddress并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "102431efdb133a70b7e04347de22e396",
      "emailAddress": "test@cloud.io",
      "endpointUuid": "4ff65a1d7762348495dd0c4da110d7cd",
      "createDate": "Dec 25, 2023 2:08:35 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
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
| emailAddress | String |  | 3.7.0 |
| endpointUuid | String |  | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
QuerySNSEmailAddressAction action = new QuerySNSEmailAddressAction();
action.conditions = asList("uuid=19beae4d7df63aa6ba24b7422521af7b","endpointUuid=4758483d0db33c6bb82961d4c1e837aa");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSEmailAddressAction.Result res = action.call();
```

 Python SDK

```
QuerySNSEmailAddressAction action = QuerySNSEmailAddressAction()
action.conditions = ["uuid=2ab2f6138c1c3b98b5834764c29dd596","endpointUuid=01106fe537473575be43fec7173e2dd1"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSEmailAddressAction.Result res = action.call()
```

---

#### 创建微软Teams接收端(CreateSNSMicrosoftTeamsEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/microsoft-teams
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "http://teams-robot-url",
    "name": "Microsoft teams"
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
-X POST -d '{"params":{"url":"http://teams-robot-url","name":"Microsoft teams"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/microsoft-teams
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | 连接器的url |  | 3.10.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.10.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.10.0 |
| platformUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.10.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.10.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.10.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.10.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.10.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "url": "http://teams-robot-url",
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:06:32 PM",
    "lastOpDate": "Dec 25, 2023 2:06:32 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.10.0 |
| inventory | SNSSmsEndpointInventory | 详情参考[inventory] | 3.10.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.10.0 |
| description | String | 错误的概要描述 | 3.10.0 |
| details | String | 错误的详细信息 | 3.10.0 |
| elaboration | String | 保留字段，默认为null | 3.10.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.10.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.10.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| url | String | 连接器的url | 3.10.0 |
| name | String | 资源名称 | 3.10.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.10.0 |
| description | String | 资源的详细描述 | 3.10.0 |
| type | String |  | 3.10.0 |
| state | String |  | 3.10.0 |
| platformUuid | String |  | 3.10.0 |
| createDate | Timestamp | 创建时间 | 3.10.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.10.0 |



##### SDK示例

 Java SDK

```
CreateSNSMicrosoftTeamsEndpointAction action = new CreateSNSMicrosoftTeamsEndpointAction();
action.url = "http://teams-robot-url";
action.name = "Microsoft teams";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSMicrosoftTeamsEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSMicrosoftTeamsEndpointAction action = CreateSNSMicrosoftTeamsEndpointAction()
action.url = "http://teams-robot-url"
action.name = "Microsoft teams"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSMicrosoftTeamsEndpointAction.Result res = action.call()
```

---

#### 查询微软Teams接收端(QuerySNSMicrosoftTeamsEndpoint)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/microsoft-teams
```


```
GET zstack/v1/sns/application-endpoints/microsoft-teams/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/microsoft-teams?q=url=http://teams-url
```



可查询字段

运行CLI命令行工具，输入QuerySNSMicrosoftTeamsEndpoint并按Tab键查看所有可查询字段以及可跨表查询的资源名。

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
QuerySNSMicrosoftTeamsEndpointAction action = new QuerySNSMicrosoftTeamsEndpointAction();
action.conditions = asList("url=http://teams-url");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSMicrosoftTeamsEndpointAction.Result res = action.call();
```

 Python SDK

```
QuerySNSMicrosoftTeamsEndpointAction action = QuerySNSMicrosoftTeamsEndpointAction()
action.conditions = ["url=http://teams-url"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSMicrosoftTeamsEndpointAction.Result res = action.call()
```

---

#### 测试企业微信连通性(SNSMicrosoftTeamsTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/we-com/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4",
    "atAll": false,
    "atPersonUserIds": [
      "zhangsan",
      "lisi"
    ],
    "testMsg": "hello",
    "endpointUuid": "1c201c27a81740ddadbc5d2f3f38a5e4"
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
-X POST -d '{"params":{"url":"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4","atAll":false,"atPersonUserIds":["zhangsan","lisi"],"testMsg":"hello","endpointUuid":"1c201c27a81740ddadbc5d2f3f38a5e4"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| testMsg | String | body(包含在**params**结构中) | 测试消息 |  | 5.0.0 |
| endpointUuid (可选) | String | body(包含在**params**结构中) | 企业微信 endpoint uuid |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| url (可选) | String | body(包含在**params**结构中) | webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | body(包含在**params**结构中) | @所有人 |  | 5.0.0 |
| atPersonUserIds (可选) | List | body(包含在**params**结构中) | @用户id集合 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| connected | boolean | webhook url 是否联通 | 5.0.0 |
| webhookResp | boolean | webhook 返回数据 | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
SNSWeComTestConnectionAction action = new SNSWeComTestConnectionAction();
action.url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4";
action.atAll = false;
action.atPersonUserIds = asList("zhangsan","lisi");
action.testMsg = "hello";
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSWeComTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSWeComTestConnectionAction action = SNSWeComTestConnectionAction()
action.url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4"
action.atAll = false
action.atPersonUserIds = [zhangsan, lisi]
action.testMsg = "hello"
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSWeComTestConnectionAction.Result res = action.call()
```

---

#### 更新企业微信@用户(UpdateAtPersonOfAtWeComEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/we-com/at-persons/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAtPersonOfAtWeComEndpoint": {
    "endpointUuid": "4aec8a68c63439f197df9623ec89cda6",
    "userId": "zhang.san",
    "remark": "jack"
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
-X PUT -d '{"updateAtPersonOfAtWeComEndpoint":{"endpointUuid":"4aec8a68c63439f197df9623ec89cda6","userId":"zhang.san","remark":"jack"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/at-persons/87df59c09f0336c2817d318a468f717c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| endpointUuid | String | body(包含在**updateAtPersonOfAtWeComEndpoint**结构中) | 企业微信endpoint uuid |  | 5.0.0 |
| userId(可选) | String | body(包含在**updateAtPersonOfAtWeComEndpoint**结构中) | 企业微信用户id |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| remark (可选) | String | body(包含在**updateAtPersonOfAtWeComEndpoint**结构中) | 备注 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "018934b79afc42cdbc7cb18f0330580e",
    "userId": "18988887777",
    "endpointUuid": "3579680f648d41af8a96218a339bd7b3",
    "remark": "jack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSWeComAtPersonInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| userId | String | 企业微信用户id | 5.0.0 |
| endpointUuid | String | 企业微信endpoint uuid | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateAtPersonOfAtWeComEndpointAction action = new UpdateAtPersonOfAtWeComEndpointAction();
action.uuid = "87df59c09f0336c2817d318a468f717c";
action.endpointUuid = "4aec8a68c63439f197df9623ec89cda6";
action.userId = "zhang.san";
action.remark = "jack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAtPersonOfAtWeComEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateAtPersonOfAtWeComEndpointAction action = UpdateAtPersonOfAtWeComEndpointAction()
action.uuid = "87df59c09f0336c2817d318a468f717c"
action.endpointUuid = "4aec8a68c63439f197df9623ec89cda6"
action.userId = "zhang.san"
action.remark = "jack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAtPersonOfAtWeComEndpointAction.Result res = action.call()
```

---

#### 更新企业微信终端(UpdateSNSWeComEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/we-com/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSWeComEndpoint": {
    "url": "https://we-com.com",
    "atAll": false,
    "name": "new name",
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
-X PUT -d '{"updateSNSWeComEndpoint":{"url":"https://we-com.com","atAll":false,"name":"new name","description":"desc"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/a7f66f9db3d134808a5fe9c469ab8fd4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | **updateSNSWeComEndpoint** | webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | **updateSNSWeComEndpoint** | @所有人 |  | 5.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| name (可选) | String | **updateSNSWeComEndpoint** | 资源名称 |  | 5.0.0 |
| description (可选) | String | **updateSNSWeComEndpoint** | 资源的详细描述 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:08:01 PM",
    "lastOpDate": "Dec 25, 2023 2:08:01 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateSNSWeComEndpointAction action = new UpdateSNSWeComEndpointAction();
action.url = "https://we-com.com";
action.atAll = false;
action.uuid = "a7f66f9db3d134808a5fe9c469ab8fd4";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSWeComEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSWeComEndpointAction action = UpdateSNSWeComEndpointAction()
action.url = "https://we-com.com"
action.atAll = false
action.uuid = "a7f66f9db3d134808a5fe9c469ab8fd4"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSWeComEndpointAction.Result res = action.call()
```

---

#### 添加飞书@用户(AddSNSFeiShuAtPerson)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/feishu/at-persons
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "userId": "18099997777",
    "endpointUuid": "9214e9f129783370bea45388a1734073",
    "remark": "jack"
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
-X POST -d '{"params":{"userId":"18099997777","endpointUuid":"9214e9f129783370bea45388a1734073","remark":"jack"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/at-persons
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userId | String | body(包含在**params**结构中) | 飞书userId |  | 5.0.0 |
| endpointUuid | String | body(包含在**params**结构中) | 飞书Endpoint UUID |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| tagUuid (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| remark (可选) | String | body(包含在**params**结构中) | 备注 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "de3e104204da4c31a9600685c2b8a106",
    "userId": "18988887777",
    "endpointUuid": "58361e5ce6704eb6999830034397a8aa",
    "createDate": "Dec 25, 2023 2:09:10 PM",
    "lastOpDate": "Dec 25, 2023 2:09:10 PM",
    "remark": "jack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSFeiShuAtPersonInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| userId | String | 飞书用户id | 5.0.0 |
| endpointUuid | String | 飞书endpoint UUID | 5.0.0 |



##### SDK示例

 Java SDK

```
AddSNSFeiShuAtPersonAction action = new AddSNSFeiShuAtPersonAction();
action.userId = "18099997777";
action.endpointUuid = "9214e9f129783370bea45388a1734073";
action.remark = "jack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSNSFeiShuAtPersonAction.Result res = action.call();
```

 Python SDK

```
AddSNSFeiShuAtPersonAction action = AddSNSFeiShuAtPersonAction()
action.userId = "18099997777"
action.endpointUuid = "9214e9f129783370bea45388a1734073"
action.remark = "jack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSNSFeiShuAtPersonAction.Result res = action.call()
```

---

#### 创建飞书接收端(CreateSNSFeiShuEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/feishu
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4",
    "atAll": false,
    "atPersonUserIds": [
      "18900002222",
      "13377778888"
    ],
    "secret": "DPKfmrIhYXY5M2TWGXy0ed",
    "atPersonList": {
      "13377778888": "jack"
    },
    "name": "feishu"
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
-X POST -d '{"params":{"url":"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4","atAll":false,"atPersonUserIds":["18900002222","13377778888"],"secret":"DPKfmrIhYXY5M2TWGXy0ed","atPersonList":{"13377778888":"jack"},"name":"feishu"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/feishu
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | 飞书机器人 webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | body(包含在**params**结构中) | 是否@所有人 |  | 5.0.0 |
| atPersonUserIds (可选) | List | body(包含在**params**结构中) | @用户id |  | 5.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.0.0 |
| platformUuid (可选) | String | body(包含在**params**结构中) | 通知平台uuid |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| secret (可选) | String | body(包含在**params**结构中) | 飞书秘钥 |  | 5.0.0 |
| atPersonList (可选) | Map | body(包含在**params**结构中) | @用户信息(推荐使用) |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "url": "http://feishu-url",
    "atAll": false,
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:06:05 PM",
    "lastOpDate": "Dec 25, 2023 2:06:05 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSFeiShuEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| url | String | 飞书机器人url | 5.0.0 |
| atAll | boolean | @所有人 | 5.0.0 |
| atPersonUserIds | List | @用户id | 5.0.0 |
| secret | String | 飞书秘钥 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| state | String | 状态 | 5.0.0 |
| platformUuid | String | 平台uuid | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |
| platform | SNSApplicationPlatformInventory | 详情参考[platform] | 5.0.0 |

 #platform

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CreateSNSFeiShuEndpoint action = new CreateSNSFeiShuEndpoint();
action.url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4";
action.atAll = false;
action.atPersonUserIds = asList("18900002222","13377778888");
action.name = "feishu";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSFeiShuEndpoint.Result res = action.call();
```

 Python SDK

```
CreateSNSFeiShuEndpoint action = new CreateSNSFeiShuEndpoint()
action.url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4"
action.atAll = false
action.atPersonUserIds = asList("18900002222","13377778888")
action.name = "feishu"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSFeiShuEndpoint.Result res = action.call()
```

---

#### 查询飞书@用户(QuerySNSFeiShuAtPerson)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/feishu/at-persons
GET zstack/v1/sns/application-endpoints/feishu/at-persons/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/at-persons?q=uuid=0fce8f7cc0fb3c54b4f2ce7c53a1547a&q=endpointUuid=2ba8eb33d960377087c0f461de85642c
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/at-persons/66e1178e2a6d3941b472c2532abe0450
```



可查询字段

运行zstack-cli命令行工具，输入QuerySNSFeiShuAtPerson并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
  "inventories": [
    {
      "uuid": "zhang.san",
      "endpointUuid": "bcb849d464dd3a0aba49fba91209b4e2"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventories | List | 详情参考[inventories] | 5.0.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| userId | String | 飞书用户id | 5.0.0 |
| endpointUuid | String | 飞书endpoint uuid | 5.0.0 |



##### SDK示例

 Java SDK

```
QuerySNSFeiShuAtPersonAction action = new QuerySNSFeiShuAtPersonAction();
action.conditions = asList("uuid=3c1da61415ec3311a18e7ff94f488fc9","endpointUuid=5ceba2786e113cf5ae1af0f95ff3623c");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSFeiShuAtPersonAction.Result res = action.call();
```

 Python SDK

```
QuerySNSFeiShuAtPersonAction action = QuerySNSFeiShuAtPersonAction()
action.conditions = ["uuid=c309bdc1cb213847aa4be3d57b4b2d55","endpointUuid=8b95394f0d55320085f44175ee0d116f"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSFeiShuAtPersonAction.Result res = action.call()
```

---

#### 删除飞书用户(RemoveSNSFeiShuAtPerson)



##### API请求

 URLs

```
DELETE zstack/v1/sns/application-endpoints/feishu/{endpointUuid}/at-persons/{userId}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/43241429944f37a1b1c9470d8c2f3e1c/at-persons/18988887777?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| endpointUuid | String | url | 飞书Endpoint uuid |  | 5.0.0 |
| userId | String | url | 飞书 userId |  | 5.0.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



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
RemoveSNSFeiShuAtPersonAction action = new RemoveSNSFeiShuAtPersonAction();
action.endpointUuid = "43241429944f37a1b1c9470d8c2f3e1c";
action.userId = "18988887777";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveSNSFeiShuAtPersonAction.Result res = action.call();
```

 Python SDK

```
RemoveSNSFeiShuAtPersonAction action = RemoveSNSFeiShuAtPersonAction()
action.endpointUuid = "43241429944f37a1b1c9470d8c2f3e1c"
action.userId = "18988887777"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveSNSFeiShuAtPersonAction.Result res = action.call()
```

---

#### 测试飞书连通性 (SNSFeiShuTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/feishu/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "atAll": true,
    "atPersonUserIds": [
      "13062689903",
      "13062689901"
    ],
    "secret": "fiSmveXkeD2jIjrENHYjQd",
    "testMsg": "hello world",
    "endpointUuid": "1c201c27a81740ddadbc5d2f3f38a5e4"
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
-X POST -d '{"params":{"url":"https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","atAll":true,"atPersonUserIds":["13062689903","13062689901"],"secret":"fiSmveXkeD2jIjrENHYjQd","testMsg":"hello world","endpointUuid":"1c201c27a81740ddadbc5d2f3f38a5e4"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| testMsg | String | body(包含在`params`结构中) | 测试消息 |  | 5.0.0 |
| endpointUuid (可选) | String | body(包含在`params`结构中) | 飞书endpoint uuid |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| url (可选) | String | body(包含在`params`结构中) | webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | body(包含在`params`结构中) | @所有人 |  | 5.0.0 |
| atPersonUserIds (可选) | List | body(包含在`params`结构中) | @用户id |  | 5.0.0 |
| secret (可选) | String | body(包含在`params`结构中) | 飞书秘钥 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| connected | boolean | webhook url 连通性标识(仅代表能否联通) | 5.0.0 |
| webhookResp | LinkedHashMap | 飞书返回消息([https://open.feishu.cn/document/client-docs/bot-v3/add-custom-bot#e2f7069c]) | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
SNSFeiShuTestConnectionAction action = new SNSFeiShuTestConnectionAction();
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.atAll = true;
action.atPersonUserIds = asList("13062689903","13062689901");
action.secret = "fiSmveXkeD2jIjrENHYjQd";
action.testMsg = "hello world";
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSFeiShuTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSFeiShuTestConnectionAction action = SNSFeiShuTestConnectionAction()
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.atAll = true
action.atPersonUserIds = [13062689903, 13062689901]
action.secret = "fiSmveXkeD2jIjrENHYjQd"
action.testMsg = "hello world"
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSFeiShuTestConnectionAction.Result res = action.call()
```

---

#### 更新飞书@用户(UpdateAtPersonOfAtFeiShuEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/feishu/at-persons/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAtPersonOfAtFeiShuEndpoint": {
    "endpointUuid": "60274b11ffdc3ea080be205b964848d2",
    "userId": "zhang.san",
    "remark": "jack"
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
-X PUT -d '{"updateAtPersonOfAtFeiShuEndpoint":{"endpointUuid":"60274b11ffdc3ea080be205b964848d2","userId":"zhang.san","remark":"jack"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/at-persons/399ba943200638c2a63b65f002b6e180/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| endpointUuid | String | body(包含在**updateAtPersonOfAtFeiShuEndpoint**结构中) | 飞书endpoint uuid |  | 5.0.0 |
| userId(可选) | String | body(包含在**updateAtPersonOfAtFeiShuEndpoint**结构中) | 飞书用户id |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| remark | String | body(包含在**updateAtPersonOfAtFeiShuEndpoint**结构中) | 备注 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cd642af04dc14443a61693c5ed9f055f",
    "userId": "18988887777",
    "endpointUuid": "edb3de87e9014eb9b1903739f3e8ec05",
    "createDate": "Dec 25, 2023 2:06:56 PM",
    "lastOpDate": "Dec 25, 2023 2:06:56 PM",
    "remark": "jack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSFeiShuAtPersonInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| userId | String | 飞书用户id | 5.0.0 |
| endpointUuid | String | 飞书endpoint uuid | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateAtPersonOfAtFeiShuEndpointAction action = new UpdateAtPersonOfAtFeiShuEndpointAction();
action.uuid = "399ba943200638c2a63b65f002b6e180";
action.endpointUuid = "60274b11ffdc3ea080be205b964848d2";
action.userId = "zhang.san";
action.remark = "jack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAtPersonOfAtFeiShuEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateAtPersonOfAtFeiShuEndpointAction action = UpdateAtPersonOfAtFeiShuEndpointAction()
action.uuid = "399ba943200638c2a63b65f002b6e180"
action.endpointUuid = "60274b11ffdc3ea080be205b964848d2"
action.userId = "zhang.san"
action.remark = "jack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAtPersonOfAtFeiShuEndpointAction.Result res = action.call()
```

---

#### 更新飞书终端(UpdateSNSFeiShuEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/feishu/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSFeiShuEndpoint": {
    "url": "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "atAll": false,
    "secret": "fiSmveXkeD2jIjrENHYjQd",
    "name": "new name",
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
-X PUT -d '{"updateSNSFeiShuEndpoint":{"url":"https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","atAll":false,"secret":"fiSmveXkeD2jIjrENHYjQd","name":"new name","description":"desc"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/feishu/74a9c83578883992b21555b2f46ce38d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | **updateSNSFeiShuEndpoint** | webhook url |  | 5.0.0 |
| atAll (可选) | Boolean | **updateSNSFeiShuEndpoint** | @所有人 |  | 5.0.0 |
| secret (可选) | String | **updateSNSFeiShuEndpoint** | 秘钥 |  | 5.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| name (可选) | String | **updateSNSFeiShuEndpoint** | 资源名称 |  | 5.0.0 |
| description (可选) | String | **updateSNSFeiShuEndpoint** | 资源的详细描述 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:04:58 PM",
    "lastOpDate": "Dec 25, 2023 2:04:58 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateSNSFeiShuEndpointAction action = new UpdateSNSFeiShuEndpointAction();
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.atAll = false;
action.secret = "fiSmveXkeD2jIjrENHYjQd";
action.uuid = "74a9c83578883992b21555b2f46ce38d";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSFeiShuEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSFeiShuEndpointAction action = UpdateSNSFeiShuEndpointAction()
action.url = "https://open.feishu.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.atAll = false
action.secret = "fiSmveXkeD2jIjrENHYjQd"
action.uuid = "74a9c83578883992b21555b2f46ce38d"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSFeiShuEndpointAction.Result res = action.call()
```

---

#### 测试微软Team连通性(SNSMicrosoftTeamsTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/microsoft-teams/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://microsoft.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4",
    "testMsg": "hello",
    "endpointUuid": "1c201c27a81740ddadbc5d2f3f38a5e4"
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
-X POST -d '{"params":{"url":"https://microsoft.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4","testMsg":"hello","endpointUuid":"1c201c27a81740ddadbc5d2f3f38a5e4"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/microsoft-teams/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | body(包含在**params**结构中) | webhook url |  | 5.0.0 |
| testMsg | String | body(包含在**params**结构中) | 测试消息 |  | 5.0.0 |
| endpointUuid (可选) | String | body(包含在**params**结构中) | microsoft teams endpoint uuid |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| connected | boolean | webhook url 是否联通 | 5.0.0 |
| webhookResp | LinkedHashMap | webhook 返回数据 | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |



##### SDK示例

 Java SDK

```
SNSMicrosoftTeamsTestConnectionAction action = new SNSMicrosoftTeamsTestConnectionAction();
action.url = "https://microsoft.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4";
action.testMsg = "hello";
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSMicrosoftTeamsTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSMicrosoftTeamsTestConnectionAction action = SNSMicrosoftTeamsTestConnectionAction()
action.url = "https://microsoft.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4"
action.testMsg = "hello"
action.endpointUuid = "1c201c27a81740ddadbc5d2f3f38a5e4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSMicrosoftTeamsTestConnectionAction.Result res = action.call()
```

---

#### 更新微软Teams终端(UpdateSNSMicrosoftTeamsEndpoint)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-endpoints/microsoft-teams/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSMicrosoftTeamsEndpoint": {
    "url": "https://open.microsoft-teams.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81",
    "name": "new name",
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
-X PUT -d '{"updateSNSMicrosoftTeamsEndpoint":{"url":"https://open.microsoft-teams.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81","name":"new name","description":"desc"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/microsoft-teams/74653e34090f3c6fbe9f45b693600dcf/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url (可选) | String | body(包含在**updateSNSMicrosoftTeamsEndpoint**结构中) | webhook url |  | 5.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| name (可选) | String | body(包含在**updateSNSMicrosoftTeamsEndpoint**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**updateSNSMicrosoftTeamsEndpoint**结构中) | 资源的详细描述 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:04:12 PM",
    "lastOpDate": "Dec 25, 2023 2:04:12 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateSNSMicrosoftTeamsEndpointAction action = new UpdateSNSMicrosoftTeamsEndpointAction();
action.url = "https://open.microsoft-teams.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81";
action.uuid = "74653e34090f3c6fbe9f45b693600dcf";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSMicrosoftTeamsEndpointAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSMicrosoftTeamsEndpointAction action = UpdateSNSMicrosoftTeamsEndpointAction()
action.url = "https://open.microsoft-teams.cn/open-apis/bot/v2/hook/006879a3-0898-4428-aad4-3221db3daf81"
action.uuid = "74653e34090f3c6fbe9f45b693600dcf"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSMicrosoftTeamsEndpointAction.Result res = action.call()
```

---

#### 创建Snmp终端(CreateSNSSnmpEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/snmp
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "snmp endpoint",
    "platformUuid": "c453382b049c3280b69157501914870d"
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
-X POST -d '{"params":{"name":"snmp endpoint","platformUuid":"c453382b049c3280b69157501914870d"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/snmp
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.0.0 |
| platformUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:08:53 PM",
    "lastOpDate": "Dec 25, 2023 2:08:53 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 短信接收端名称 | 5.0.0 |
| uuid | String | 短信接收端的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 短信接收端的详细描述 | 5.0.0 |
| type | String | 短信接收端类型 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CreateSNSSnmpEndpointAction action = new CreateSNSSnmpEndpointAction();
action.name = "snmp endpoint";
action.platformUuid = "c453382b049c3280b69157501914870d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSSnmpEndpointAction.Result res = action.call();
```

 Python SDK

```
CreateSNSSnmpEndpointAction action = CreateSNSSnmpEndpointAction()
action.name = "snmp endpoint"
action.platformUuid = "c453382b049c3280b69157501914870d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSSnmpEndpointAction.Result res = action.call()
```

---

#### 创建Snmp服务器(CreateSNSSnmpPlatform)



##### API请求

 URLs

```
POST zstack/v1/sns/application-platforms/snmp
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "snmpAddress": "127.0.0.1",
    "snmpPort": 161,
    "name": "snmp platform"
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
-X POST -d '{"params":{"snmpAddress":"127.0.0.1","snmpPort":161,"name":"snmp platform"}}' \
http://localhost:8080/zstack/v1/sns/application-platforms/snmp
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| snmpAddress | String | body(包含在**params**结构中) | SNMP服务器地址 |  | 5.0.0 |
| snmpPort | Integer | body(包含在**params**结构中) | SNMP端口 |  | 5.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "660744a0d0cd4fe4ad1c11181955f30f",
    "name": "email platform",
    "description": "example description",
    "state": "Enabled",
    "type": "Email",
    "createDate": "Dec 25, 2023 2:07:14 PM",
    "lastOpDate": "Dec 25, 2023 2:07:14 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationPlatformInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CreateSNSSnmpPlatformAction action = new CreateSNSSnmpPlatformAction();
action.snmpAddress = "127.0.0.1";
action.snmpPort = 161;
action.name = "snmp platform";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSSnmpPlatformAction.Result res = action.call();
```

 Python SDK

```
CreateSNSSnmpPlatformAction action = CreateSNSSnmpPlatformAction()
action.snmpAddress = "127.0.0.1"
action.snmpPort = 161
action.name = "snmp platform"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSSnmpPlatformAction.Result res = action.call()
```

---

#### 发送Snmp测试消息(SNSSnmpTestConnection)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/snmp/test-connection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "platformUuid": "d71f754a80663dc7a6a2003cc5667846",
    "endpointUuid": "e3a38d5d8d123991bd0a986150f3e6df"
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
-X POST -d '{"params":{"platformUuid":"d71f754a80663dc7a6a2003cc5667846","endpointUuid":"e3a38d5d8d123991bd0a986150f3e6df"}}' http://localhost:8080/zstack/v1/sns/application-endpoints/snmp/test-connection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| platformUuid (可选) | String | body(包含在**params**结构中) | SNMP平台UUID |  | 5.1.8 |
| endpointUuid (可选) | String | body(包含在**params**结构中) | SNMP 端点uuid |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |



##### API返回

 返回示例

```
{
  "connected": true,
  "webhookResp": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.1.8 |
| connected | boolean | 是否联通 | 5.1.8 |
| webhookResp | LinkedHashMap | 对端响应 | 5.1.8 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.8 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.8 |
| description | String | 错误的概要描述 | 5.1.8 |
| details | String | 错误的详细信息 | 5.1.8 |
| elaboration | String | 保留字段，默认为null | 5.1.8 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.8 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.8 |



##### SDK示例

 Java SDK

```
SNSSnmpTestConnectionAction action = new SNSSnmpTestConnectionAction();
action.platformUuid = "d71f754a80663dc7a6a2003cc5667846";
action.endpointUuid = "e3a38d5d8d123991bd0a986150f3e6df";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SNSSnmpTestConnectionAction.Result res = action.call();
```

 Python SDK

```
SNSSnmpTestConnectionAction action = SNSSnmpTestConnectionAction()
action.platformUuid = "d71f754a80663dc7a6a2003cc5667846"
action.endpointUuid = "e3a38d5d8d123991bd0a986150f3e6df"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SNSSnmpTestConnectionAction.Result res = action.call()
```

---

#### 查询Snmp应用平台(QuerySNSSnmpPlatform)



##### API请求

 URLs

```
GET zstack/v1/sns/application-platforms/snmp
GET zstack/v1/sns/application-platforms/snmp/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-platforms/snmp?q=name=snmp
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-platforms/snmp/282706a5c66231019bf6c250304903bf
```



可查询字段

运行zstack-cli命令行工具，输入`QuerySNSSnmpPlatform`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回



返回示例 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

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
QuerySNSSnmpPlatformAction action = new QuerySNSSnmpPlatformAction();
action.conditions = asList("name=snmp");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSSnmpPlatformAction.Result res = action.call();
```

 Python SDK

```
QuerySNSSnmpPlatformAction action = QuerySNSSnmpPlatformAction()
action.conditions = ["name=snmp"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSSnmpPlatformAction.Result res = action.call()
```

---

#### 更新Snmp应用平台(UpdateSNSSnmpPlatform)



##### API请求

 URLs

```
PUT zstack/v1/sns/application-platforms/snmp/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSNSSnmpPlatform": {
    "snmpAddress": "127.0.0.1",
    "snmpPort": 161,
    "name": "snmp platform name"
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
-X PUT -d '{"updateSNSSnmpPlatform":{"snmpAddress":"127.0.0.1","snmpPort":161,"name":"snmp platform name"}}' \
http://localhost:8080/zstack/v1/sns/application-platforms/snmp/cbd548888e9d37b594bc99c1892589ed
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| snmpAddress | String | body(包含在**updateSNSSnmpPlatform**结构中) | SNMP服务器地址 |  | 5.0.0 |
| snmpPort | Integer | body(包含在**updateSNSSnmpPlatform**结构中) | SNMP端口 |  | 5.0.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| name (可选) | String | body(包含在**updateSNSSnmpPlatform**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**updateSNSSnmpPlatform**结构中) | 资源的详细描述 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5687e054cc0744f0b048e825b5b9475f",
    "name": "email platform",
    "description": "example description",
    "state": "Enabled",
    "type": "Email",
    "createDate": "Dec 25, 2023 2:06:02 PM",
    "lastOpDate": "Dec 25, 2023 2:06:02 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSApplicationPlatformInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
UpdateSNSSnmpPlatformAction action = new UpdateSNSSnmpPlatformAction();
action.snmpAddress = "127.0.0.1";
action.snmpPort = 161;
action.uuid = "cbd548888e9d37b594bc99c1892589ed";
action.name = "snmp platform name";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSNSSnmpPlatformAction.Result res = action.call();
```

 Python SDK

```
UpdateSNSSnmpPlatformAction action = UpdateSNSSnmpPlatformAction()
action.snmpAddress = "127.0.0.1"
action.snmpPort = 161
action.uuid = "cbd548888e9d37b594bc99c1892589ed"
action.name = "snmp platform name"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSNSSnmpPlatformAction.Result res = action.call()
```

---

#### 添加企业微信用户(AddSNSWeComAtPerson)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/we-com/at-persons
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "userId": "18099997777",
    "endpointUuid": "3af92b4b14e83963b8565f194f302fce",
    "remark": "jack"
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
-X POST -d '{"params":{"userId":"18099997777","endpointUuid":"3af92b4b14e83963b8565f194f302fce","remark":"jack"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/at-persons
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userId | String | body(包含在**params**结构中) | 企业微信用户id |  | 5.0.0 |
| endpointUuid | String | body(包含在**params**结构中) | 企业微信Endpoint UUID |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.0.0 |
| tagUuid (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| remark (可选) | String | body(包含在**params**结构中) | 备注 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b354a3fbec2e449d92708ccfd4dabb17",
    "userId": "18988887777",
    "endpointUuid": "346f6422817e4147bf405a38d0b69f5e",
    "remark": "jack"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSWeComAtPersonInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| userId | String | 企业微信用户id | 5.0.0 |
| endpointUuid | String | 企业微信endpoint UUID | 5.0.0 |



##### SDK示例

 Java SDK

```
AddSNSWeComAtPersonAction action = new AddSNSWeComAtPersonAction();
action.userId = "18099997777";
action.endpointUuid = "3af92b4b14e83963b8565f194f302fce";
action.remark = "jack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSNSWeComAtPersonAction.Result res = action.call();
```

 Python SDK

```
AddSNSWeComAtPersonAction action = AddSNSWeComAtPersonAction()
action.userId = "18099997777"
action.endpointUuid = "3af92b4b14e83963b8565f194f302fce"
action.remark = "jack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSNSWeComAtPersonAction.Result res = action.call()
```

---

#### 创建企业微信服务器(CreateSNSWeComEndpoint)



##### API请求

 URLs

```
POST zstack/v1/sns/application-endpoints/we-com
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "url": "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4",
    "atAll": false,
    "atPersonUserIds": [
      "18900002222",
      "13377778888"
    ],
    "atPersonList": {
      "13377778888": "jack"
    },
    "name": "wecom"
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
-X POST -d '{"params":{"url":"https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=f8b9014a-207a-44d5-ae26-3501bf01dbc4","atAll":false,"atPersonUserIds":["18900002222","13377778888"],"atPersonList":{"13377778888":"jack"},"name":"wecom"}}' \
http://localhost:8080/zstack/v1/sns/application-endpoints/we-com
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | body(包含在**params**结构中) | 企业微信聊天机器人webhook url |  | 5.0.0 |
| atALL (可选) | Boolean | body(包含在**params**结构中) | 是否@所有人 |  | 5.0.0 |
| atPersonUserIds | List | body(包含在**params**结构中) | @用户 (user_id) |  | 5.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |
| atPersonList | Map | body(包含在**params**结构中) | @用户信息 (推荐使用) |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "url": "http://wecom-url",
    "atAll": false,
    "name": "example",
    "uuid": "917fe66f76b241f0843dfbd6be685fc1",
    "description": "description example",
    "type": "Email",
    "state": "Enabled",
    "platformUuid": "4eb0ceebf95b452585ebeacd647d9f35",
    "createDate": "Dec 25, 2023 2:05:58 PM",
    "lastOpDate": "Dec 25, 2023 2:05:58 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventory | SNSWeComEndpointInventory | 详情参考[inventory] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| url | String | 企业微信机器人 webhook url | 5.0.0 |
| atAll | boolean | 是否@所有人 | 5.0.0 |
| atPersonUserIds | List | @用户id | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 终端类型 | 5.0.0 |
| state | String | 状态 | 5.0.0 |
| platformUuid | String | 应用平台UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |
| platform | SNSApplicationPlatformInventory | 详情参考[platform] | 5.0.0 |

 #platform

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| type | String | 类型 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CreateSNSWeComEndpoint action = new CreateSNSWeComEndpoint();
action.url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4";
action.atAll = false;
action.atPersonUserIds = asList("18900002222","13377778888");
action.name = "wecom";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSNSWeComEndpoint.Result res = action.call();
```

 Python SDK

```
CreateSNSWeComEndpoint action = new CreateSNSWeComEndpoint()
action.url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key\u003df8b9014a-207a-44d5-ae26-3501bf01dbc4"
action.atAll = false
action.atPersonUserIds = asList("18900002222","13377778888")
action.name = "wecom"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSNSWeComEndpoint.Result res = action.call()
```

---

#### 查询企业微信@用户(QuerySNSWeComAtPerson)



##### API请求

 URLs

```
GET zstack/v1/sns/application-endpoints/we-com/at-persons
GET zstack/v1/sns/application-endpoints/we-com/at-persons/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/at-persons?q=uuid=ec74d6afc6fa32419a8e22857038dca8&q=endpointUuid=b1a06b4282043ec39305377a3df1c99d
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/at-persons/8ab29c25622e3419b5690b6002596af3
```



可查询字段

运行zstack-cli命令行工具，输入QuerySNSWeComAtPerson并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
  "inventories": [
    {
      "uuid": "02be8517bdda3a3990343870d24a55df",
      "userId": "zhang.san",
      "endpointUuid": "6c8dafc01f3135ec954d6fd937f4e0e1"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |
| inventories | List | 详情参考[inventories] | 5.0.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| userId | String | 企业微信用户id | 5.0.0 |
| endpointUuid | String | 企业微信endpoint uuid | 5.0.0 |



##### SDK示例

 Java SDK

```
QuerySNSWeComAtPersonAction action = new QuerySNSWeComAtPersonAction();
action.conditions = asList("uuid=4bd23fb21c7d3d4d9d5d18b794ab05d0","endpointUuid=a0b96b1f27fa3ef992e1fd37b1ab58f9");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSWeComAtPersonAction.Result res = action.call();
```

 Python SDK

```
QuerySNSWeComAtPersonAction action = QuerySNSWeComAtPersonAction()
action.conditions = ["uuid=0f5346ee4a9d36da9228e57e3249f853","endpointUuid=6f42b53c5a9336368921441afdf19583"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSWeComAtPersonAction.Result res = action.call()
```

---

#### 删除企业微信用户(RemoveSNSWeComAtPerson)



##### API请求

 URLs

```
DELETE zstack/v1/sns/application-endpoints/we-com/{endpointUuid}/at-persons/{userId}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/application-endpoints/we-com/169842ede65135aeb32d0a88b644f8eb/at-persons/18988887777?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| endpointUuid | String | url | 企业微信机器人webhook url |  | 5.0.0 |
| userId | String | url | 企业微信userId |  | 5.0.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



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
RemoveSNSWeComAtPersonAction action = new RemoveSNSWeComAtPersonAction();
action.endpointUuid = "169842ede65135aeb32d0a88b644f8eb";
action.userId = "18988887777";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveSNSWeComAtPersonAction.Result res = action.call();
```

 Python SDK

```
RemoveSNSWeComAtPersonAction action = RemoveSNSWeComAtPersonAction()
action.endpointUuid = "169842ede65135aeb32d0a88b644f8eb"
action.userId = "18988887777"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveSNSWeComAtPersonAction.Result res = action.call()
```

---

#### 订阅主题(SubscribeSNSTopic)



##### API请求

 URLs

```
POST zstack/v1/sns/topics/{topicUuid}/endpoints/{endpointUuid}
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
http://localhost:8080/zstack/v1/sns/topics/755ac6aea82f3365a66b86258c55189e/endpoints/c1f5c1e23ff13001b249c18253984741
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| topicUuid | String | url | 应用主题UUID |  | 2.3 |
| endpointUuid | String | url | 终端UUID |  | 2.3 |
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
SubscribeSNSTopicAction action = new SubscribeSNSTopicAction();
action.topicUuid = "755ac6aea82f3365a66b86258c55189e";
action.endpointUuid = "c1f5c1e23ff13001b249c18253984741";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SubscribeSNSTopicAction.Result res = action.call();
```

 Python SDK

```
SubscribeSNSTopicAction action = SubscribeSNSTopicAction()
action.topicUuid = "755ac6aea82f3365a66b86258c55189e"
action.endpointUuid = "c1f5c1e23ff13001b249c18253984741"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SubscribeSNSTopicAction.Result res = action.call()
```

---

#### 查询订阅主题的终端（QuerySNSTopicSubscriber）



##### API请求

 URLs

```
GET zstack/v1/sns/topics/subscribers
GET zstack/v1/sns/topics/subscribers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/topics/subscribers?q=topicUuid=3677dc0f00964b80886f3b2bbf9338cd
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/sns/topics/subscribers/15b4071325193fdcbae66b6388ea9c6f
```



可查询字段

运行CLI命令行工具，输入QuerySNSTopicSubscriber并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "topicUuid": "3677dc0f00964b80886f3b2bbf9338cd",
      "endpointUuid": "f8c5c56233844126ad5f5a0174da3098"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3.1 |
| inventories | List | 详情参考[inventories] | 2.3.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3.1 |
| description | String | 错误的概要描述 | 2.3.1 |
| details | String | 错误的详细信息 | 2.3.1 |
| elaboration | String | 保留字段，默认为null | 2.3.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3.1 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| topicUuid | String | 主题UUID | 2.3.1 |
| endpointUuid | String | 终端UUID | 2.3.1 |
| createDate | Timestamp | 创建时间 | 2.3.1 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3.1 |



##### SDK示例

 Java SDK

```
QuerySNSTopicSubscriberAction action = new QuerySNSTopicSubscriberAction();
action.conditions = asList("topicUuid=3677dc0f00964b80886f3b2bbf9338cd");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySNSTopicSubscriberAction.Result res = action.call();
```

 Python SDK

```
QuerySNSTopicSubscriberAction action = QuerySNSTopicSubscriberAction()
action.conditions = ["topicUuid=3677dc0f00964b80886f3b2bbf9338cd"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySNSTopicSubscriberAction.Result res = action.call()
```

---

#### 退订主题(UnsubscribeSNSTopic)



##### API请求

 URLs

```
DELETE zstack/v1/sns/topics/{topicUuid}/endpoints/{endpointUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/sns/topics/bd6c49ad623a3740880ca6d3ed3bb793/endpoints/36d6eb53f7c23fbca1ac72008940efc8?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| topicUuid | String | url | 主题UUID |  | 2.3 |
| endpointUuid | String | url | 终端UUID |  | 2.3 |
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
UnsubscribeSNSTopicAction action = new UnsubscribeSNSTopicAction();
action.topicUuid = "bd6c49ad623a3740880ca6d3ed3bb793";
action.endpointUuid = "36d6eb53f7c23fbca1ac72008940efc8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UnsubscribeSNSTopicAction.Result res = action.call();
```

 Python SDK

```
UnsubscribeSNSTopicAction action = UnsubscribeSNSTopicAction()
action.topicUuid = "bd6c49ad623a3740880ca6d3ed3bb793"
action.endpointUuid = "36d6eb53f7c23fbca1ac72008940efc8"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UnsubscribeSNSTopicAction.Result res = action.call()
```

---

### 容量管理相关接口

---

#### 获取管理节点目录容量(GetManagementNodeDirCapacity)



##### API请求

 URLs

```
GET zstack/v1/zwatch/mn
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/zwatch/mn?managementNodeUuids=33a2f11d59aa321aa4acfa78afe8f35a&managementNodeUuids=6bf0aca356a13cf787d87ceeb8fcba7f
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| managementNodeUuids (可选) | List | query | 管理节点的uuid |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "result": {
    "3b16bb23007634b3a0f35dec4cb10c28": [
      {
        "name": "total",
        "size": "128000"
      },
      {
        "name": "used",
        "size": "127000"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| result | Map | 管理节点目录容量信息详细内容 | 3.9.0 |
| success | boolean |  | 3.9.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| error | ErrorCode | 详情参考[error] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |



##### SDK示例

 Java SDK

```
GetManagementNodeDirCapacityAction action = new GetManagementNodeDirCapacityAction();
action.managementNodeUuids = asList("33a2f11d59aa321aa4acfa78afe8f35a","6bf0aca356a13cf787d87ceeb8fcba7f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetManagementNodeDirCapacityAction.Result res = action.call();
```

 Python SDK

```
GetManagementNodeDirCapacityAction action = GetManagementNodeDirCapacityAction()
action.managementNodeUuids = [33a2f11d59aa321aa4acfa78afe8f35a, 6bf0aca356a13cf787d87ceeb8fcba7f]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetManagementNodeDirCapacityAction.Result res = action.call()
```

---

### 管理节点相关接口

---

#### 查询管理节点(QueryManagementNode)



##### API请求

 URLs

```
GET zstack/v1/management-nodes
GET zstack/v1/management-nodes/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth f5db0d0f90104a79b02c8f1c34dfc13b" \
-X GET http://localhost:8080/zstack/v1/management-nodes?q=uuid=2c0761c3720f4d2c93435f1b8edb1297
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 5ffa91907f3c4d0392d7daa73b1a0627" \
-X GET http://localhost:8080/zstack/v1/management-nodes/bc27558979364d7c9b34a7317965e0be
```



可查询字段

运行CLI命令行工具，输入`QueryManagementNode`并按Tab键查看所有可查询字段以及可跨表查询的资源名

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "188b2c6376c34d3687c5a7a19685ffa6",
      "hostName": "127.0.0.1",
      "joinDate": "May 11, 2017 1:22:44 PM",
      "heartBeat": "May 11, 2017 1:22:44 PM"
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
| hostName | String | 宿主机名称 | 0.6 |
| joinDate | Timestamp | 加入时间 | 0.6 |
| heartBeat | Timestamp | 心跳时间 | 0.6 |



##### SDK示例

 Java SDK

```
ueryManagementNodeAction action = new QueryManagementNodeAction();
action.conditions = asList("uuid=7c2075262bb44872b6ceaef5ee94b089");
action.sessionId = "293267e661d8400ca3808ff5f445a6e8";
QueryManagementNodeAction.Result res = action.call();
```

 Python SDK

```
QueryManagementNodeAction action = QueryManagementNodeAction()
action.conditions = ["uuid=3bcbd030e10746eeba9f8ea938f2647a"]
action.sessionId = "21526cb97ac541b6b27192b4c671ec08"
QueryManagementNodeAction.Result res = action.call()
```

---

#### 获取当前版本(GetVersion)



##### API请求

 URLs

```
PUT zstack/v1/management-nodes/actions
```

 Body

```
{
  "getVersion": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"getVersion":{}}' http://localhost:8080/zstack/v1/management-nodes/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "version": "1.9.x"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| version | String | 管理节点当前版本 | 0.6 |
| success | boolean | 成功标志 | 0.6 |
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
GetVersionAction action = new GetVersionAction();
GetVersionAction.Result res = action.call();
```

 Python SDK

```
GetVersionAction action = GetVersionAction()
GetVersionAction.Result res = action.call()
```

---

#### 获取当前时间(GetCurrentTime)



##### API请求

 URLs

```
PUT zstack/v1/management-nodes/actions
```

 Body

```
{
  "getCurrentTime": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"getCurrentTime":{}}' http://localhost:8080/zstack/v1/management-nodes/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "currentTime": {
    "MillionSeconds": 1.494480176967E12,
    "Seconds": 1.494480176E9
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| currentTime | Map | 管理节点当前时间 | 0.6 |
| success | boolean | 成功标志 | 0.6 |
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
GetCurrentTimeAction action = new GetCurrentTimeAction();
GetCurrentTimeAction.Result res = action.call();
```

 Python SDK

```
GetCurrentTimeAction action = GetCurrentTimeAction()
GetCurrentTimeAction.Result res = action.call()
```

---

#### 获取管理节点当前的时区信息（GetPlatformTimeZone）



##### API请求

 URLs

```
GET zstack/v1/management-nodes/platform-timezone
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" -X GET http://localhost:8080/zstack/v1/management-nodes/platform-timezone?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "timezone": "Asia/Shanghai",
  "offset": "+8:00"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| timezone | String | 时区名称 | 4.1.0 |
| offset | String | 与GMT时间的时差 | 4.1.0 |
| success | boolean |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |



##### SDK示例

 Java SDK

```
GetPlatformTimeZoneAction action = new GetPlatformTimeZoneAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetPlatformTimeZoneAction.Result res = action.call();
```

 Python SDK

```
GetPlatformTimeZoneAction action = GetPlatformTimeZoneAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetPlatformTimeZoneAction.Result res = action.call()
```

---

#### 检查管理节点是否能正常开始工作(IsReadyToGo)



##### API请求

 URLs

```
GET zstack/v1/management-nodes/ready
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 61f9cb0129d749ebbd3d6052bfc759b2" \
-X GET http://localhost:8080/zstack/v1/management-nodes/ready?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| managementNodeId (可选) | String | query |  |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例：

```
{
  "managementNodeId": "28ff5884cbf83d48b2e50203a5f2e636"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
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
IsReadyToGoAction action = new IsReadyToGoAction();
action.sessionId = "4feaf1772217415a876735801e468fac";
IsReadyToGoAction.Result res = action.call();
```

 Python SDK

```
IsReadyToGoAction action = IsReadyToGoAction()
action.sessionId = "432b9a5c589c4c09b33b79d8272528be"
IsReadyToGoAction.Result res = action.call()
```

---

#### 获取管理节点操作系统信息(GetManagementNodeOS)



##### API请求

 URLs

```
PUT zstack/v1/management/actions
```

 Body

```
{
  "getManagementNodeOS": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"getManagementNodeOS":{}}' http://localhost:8080/zstack/v1/management/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例：

```
{
  "name": "Linux",
  "version": "5.4.0-33-generic"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.1.0 |
| version | String |  | 4.1.0 |
| success | boolean |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |



##### SDK示例

 Java SDK

```
GetManagementNodeOSAction action = new GetManagementNodeOSAction();
GetManagementNodeOSAction.Result res = action.call();
```

 Python SDK

```
GetManagementNodeOSAction action = GetManagementNodeOSAction()
GetManagementNodeOSAction.Result res = action.call()
```

---

#### 获取管理节点CPU架构类型(GetManagementNodeArch)



##### API请求

 URLs

```
PUT zstack/v1/management-nodes/actions
```

 Body

```
{
  "getManagementNodeArch": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"getManagementNodeArch":{}}' http://localhost:8080/zstack/v1/management-nodes/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例：

```
{
  "architecture": "x86_64"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.1.0 |
| version | String |  | 4.1.0 |
| success | boolean |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |



##### SDK示例

 Java SDK

```
GetManagementNodeArchAction action = new GetManagementNodeArchAction();
GetManagementNodeArchAction.Result res = action.call();
```

 Python SDK

```
GetManagementNodeArchAction action = GetManagementNodeArchAction()
GetManagementNodeArchAction.Result res = action.call()
```
