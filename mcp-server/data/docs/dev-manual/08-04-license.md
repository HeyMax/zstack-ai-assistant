# 许可证相关接口 - 系统全局相关

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/8.4.html*

---

## 许可证相关接口

---

## 获取许可证信息(GetLicenseInfo)



### API请求

 URLs

```
GET zstack/v1/licenses
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -X GET http://localhost:8080/zstack/v1/licenses
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| additionSession (可选) | String | query | 额外的信息,是一个json字符串 |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |


   - 选项格式为：`platformId::{%s}`。其中{%s}为请求码md5值的前10位。
   - 例如：`platformId::a95d3ee34r`
 - 例如：`platformId::a95d3ee34r`


### API返回

 返回示例

```
{   "inventory": {     "licenseType": "Free",     "licenseRequest": "example request",     "issuedDate": "2017-01-19 14:31:06",     "user": "example",     "hostNum": 10.0,     "expired": true,     "managementNodeUuid": "00898b3538e53e70bb7521e54ff80276"   },   "additions": [] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LicenseInventory | 详情参考[inventory] | 0.6 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| licenseType | String |  | 0.6 |
| licenseRequest | String |  | 0.6 |
| expiredDate | String |  | 0.6 |
| issuedDate | String |  | 0.6 |
| user | String |  | 0.6 |
| prodInfo | String | 许可证产品名称 | 4.1.0 |
| hostNum | Integer |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| vmNum | Integer |  | 4.1.0 |
| availableHostNum | Integer |  | 0.6 |
| availableCpuNum | Integer |  | 0.6 |
| availableVmNum | Integer |  | 4.1.0 |
| expired | boolean |  | 0.6 |
| managementNodeUuid | String |  | 4.1.0 |



### SDK示例

 Java SDK

```
GetLicenseInfoAction action = new GetLicenseInfoAction(); GetLicenseInfoAction.Result res = action.call();
```

 Python SDK

```
GetLicenseInfoAction action = GetLicenseInfoAction() GetLicenseInfoAction.Result res = action.call()
```

---

## 获取许可证历史授权信息（GetLicenseRecords）



### API请求

 URLs

```
GET zstack/v1/licenses/records
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -X GET http://localhost:8080/zstack/v1/licenses/records?limit=20.0&start=0.0&replyWithCount=true&count=false&sortBy=uploadDate&sortDirection=desc
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| limit (可选) | Integer | query | 最多返回的记录数，类似MySQL的limit，默认值20 |  | 4.1.0 |
| start (可选) | Integer | query | 起始查询记录位置，类似MySQL的offset。跟**limit**配合使用可以实现分页 |  | 4.1.0 |
| replyWithCount (可选) | boolean | query | 计数查询，查询是否附加返回数据记录数。当设置成**true**时，API在返回数据记录的同时返回满足查询条件的记录数 |  | 4.1.0 |
| count (可选) | boolean | query | 计数查询，相当于MySQL中的count()函数。当设置成**true**时，API只返回的是满足查询条件的记录数 |  | 4.1.0 |
| sortBy (可选) | String | query | 以字段排序，等同于MySQL中的sort by关键字，例如sortBy=ip。必须跟**sortDirection**配合使用 |  | 4.1.0 |
| sortDirection (可选) | String | query | 字段排序方向，必须跟**sortBy**配合使用 |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



### API返回

 返回示例

```
{   "inventories": [     {       "user": "example",       "hostNum": 10.0,       "licenseType": "Free",       "issuedDate": "2017-01-19 14:31:06",       "managementNodeUuid": "00898b3538e53e70bb7521e54ff80276",       "expired": true     }   ],   "total": 1.0 }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | Long | 许可证历史授权数据总量。如果设置count或replyWithCount为true则返回该值 | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | LicenseInventory | 详情参考[inventory] | 4.1.0 |

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
| uuid | String |  | 4.1.0 |
| licenseType | String |  | 4.1.0 |
| expiredDate | String |  | 4.1.0 |
| issuedDate | String |  | 4.1.0 |
| uploadDate | String | 许可证上传时间 | 4.1.0 |
| user | String |  | 4.1.0 |
| prodInfo | String | 许可证产品名称 | 4.1.0 |
| hostNum | Integer |  | 4.1.0 |
| cpuNum | Integer |  | 4.1.0 |
| vmNum | Integer |  | 4.1.0 |
| expired | boolean |  | 4.1.0 |
| managementNodeUuid | String |  | 4.1.0 |



### SDK示例

 Java SDK

```
GetLicenseRecordsAction action = new GetLicenseRecordsAction(); action.limit = 20.0; action.start = 0.0; action.replyWithCount = true; action.count = false; action.sortBy = "uploadDate"; action.sortDirection = "desc"; GetLicenseRecordsAction.Result res = action.call();
```

 Python SDK

```
GetLicenseRecordsAction action = GetLicenseRecordsAction() action.limit = 20.0 action.start = 0.0 action.replyWithCount = true action.count = false action.sortBy = "uploadDate" action.sortDirection = "desc" GetLicenseRecordsAction.Result res = action.call()
```

---

## 获取许可证容量(GetLicenseCapabilities)



### API请求

 URLs

```
GET zstack/v1/licenses/capabilities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X GET http://localhost:8080/zstack/v1/licenses/capabilities
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{     "error": {         "code": "SYS.1001",         "description": "A message or a operation timeout",         "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
GetLicenseCapabilitiesAction action = new GetLicenseCapabilitiesAction(); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; GetLicenseCapabilitiesAction.Result res = action.call();
```

 Python SDK

```
GetLicenseCapabilitiesAction action = GetLicenseCapabilitiesAction() action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" GetLicenseCapabilitiesAction.Result res = action.call()
```

---

### 删除许可证文件(DeleteLicense)



#### API请求

 URLs

```
DELETE /v1/licenses/mn/{managementNodeUuid}/actions?uuid={uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/licenses/mn/4a1821df62404868ada349c672e79a5b/actions?uuid=jh34g5uy4g5434i5h45ui93457348
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| managementNodeUuid | String | url | 管理节点的UUID |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



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
DeleteLicenseAction action = new DeleteLicenseAction();
action.managementNodeUuid = "a762967a15a14d69833002d91119c493";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteLicenseAction.Result res = action.call();
```

 Python SDK

```
DeleteLicenseAction action = DeleteLicenseAction()
action.managementNodeUuid = "32875f270bfc4bdb842ede0b42ed39a3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteLicenseAction.Result res = action.call()
```

---

### 重新加载许可证(ReloadLicense)



#### API请求

 URLs

```
PUT zstack/v1/licenses/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reloadLicense": {
    "managementNodeUuids": [
      "839034e1da8e37a08b67e3a8279a1650",
      "7869acf9b8bd34079f14a93751e60810"
    ]
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
-X PUT -d '{"reloadLicense":{"managementNodeUuids":["839034e1da8e37a08b67e3a8279a1650","7869acf9b8bd34079f14a93751e60810"]}}' \
http://localhost:8080/zstack/v1/licenses/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| managementNodeUuids (可选) | List | body(包含在**reloadLicense**结构中) | 管理节点UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "licenseRequest": "eyJwcml2YXRlS2V5IjoiLS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLVxuTUlJRWhnSUJBQUtCL0RjMGtxWGl2UmRPTGRWeC8xK1MzMUtaejNQd1dkek9ob3NvY29rU2wwdnBxYzc2cHF1V1xubDNwQ0FWZ01UaG1OUlo1Z05xaVM2MWdvcmY4WkY3eHBGUWd1cms0WjZxVEl3aDc3emo2NEhPMHBmYnpndzFmL1xuMm9Ga3l1N25GQU5wamxMUEpxalYva0xwL3RVeGpqY0w0ZG9TcDY1TGM3a2lrOXY1aTBpeXlYZEs5dWJsTnFNNVxuV2VNNWdFLzdzeG5IZS9TbFY1Nk1UeWtDeUdpbGVMMmwvUFlmQ2JuYUN4ZG9oOERzKzJ2RnpJaFZ3RWwyYkppZ1xuQkptMlU3VzNKZzltWGZEb2dDTHMyMTE4TXdDUGFQVWVMRTArWlBBNUduL2ZxZUZad2hDMElMcnM3ZTZyZThxK1xuVWpBN2RXeVoxVm50Y0xiWGUxbW94Vm1DSWx4VWd3SURBUUFCQW9IOE1JMXRXTFkxQmhVOUhGZVplVTRzV1hKclxuVVJXWGd5cWtqQ2t6cXJpT0ZqYllvUEF6dS8vREU4U1BlQWZDZkppU0hUdVRkdWxZVVAzZUlkakkxbTA1RVN3MVxuSXYyS01BbGRLWERmTUt3dXpLck1LbDBua1BLMkUwMDVhYW9VSVBncU0weDdQTXlRUmZ1VW81NWs3S2JucVNyMVxuRE1iUmJZY3FzYklrdlBoNGhOK3V0bHNvb3dFM0FZQ1FxNjkrL3NkVzhRd0V6dTRiOG9oYzFCWlJXUC9MdHhrUVxuemdxSVo4Qkw1R1BoLy9RN2xEeGZEa1d4Nkpia0o5blEyWVJKbnBSZGhYTk1mZndValpRRG9wcmhKbi9IektSdFxueWZDc1d5UUttSjBvMlJYVzBEczdycS9SeXJVelc5UElseHlqSnBBSEhMeUI0UndRUUhqbGVZczVBbjV6a0xSU1xuNGlhZFRGZFVZdi9UV0xvcVRtQ25ZNURmUWlnUTBqajNNRE0xRERmWUtKa2szazBHSkh6cjQ2WlZiaWRqMEdhU1xuaXNqc3l3RERtN2wxM1BSL1ZFRVo0bDk5L2F2OFY0bGs5ZkZVYmp5MG5sWEZZcjAzZ2NLZDBCYnlPbk84dU5MM1xuOUpWeG9GVUNqaG1HSm1WQk1tTXFXMjN1L013Y1l5b2pnbjhDZm5wS2RTWHd2ZCtrSzUycEwyWC9kQlBYcnhFU1xuT2hyYXpVN1lPamdKM2VuWVpVRG5oOEhFOGtzRTVVSk9RZDZ4enU4N2xmU1FkTEZnT29DdzFlSVVZNTl3TFdxTVxuRE9qaXdXdDlQdjBGSnFtOVBKaHpkTmZ3dVJhSU9QbDI3WTZ5ejVRQkRrcnIvOTdtODB6d21KYWxhNjkwV2VPbFxuSU9jcE85ekVqUk1qL1FKK09DUGF4Y3poRDFjUHNZbnFWMlJxQTdWUmxOOTBlRkN1SUFYUDhKMDBzeGQ5WlgvTFxuYmJLa1hsQ0pjeHFES2tzNXpXNW05ZGQvNWpCejdaS1AxT2NDeTN4RnArcGxrMUlSSTZQdXRlSVlXM2kxK3RSVVxuUEhCTUZWUHZGRFVMZ0o3T3JLWm9ybFhkNTNZSTloWEw1blJ1aWU2TlovMUVlVzNMUmhzU1ZHL0hBbjVrV2NOR1xuRGdhUmhiTnczZ3VTSkkwSlYxMUdvZkZpWmhoQjBmZjhVa1J6QjJzWFZxYzFYN3IveXBXaTBuc0ZGbDNjUE1ZeFxuK1hSNHRhRnNSekJNSkRVWCtjS2JBeS80ejFLdk5RakNNajdtM08zam9DTEtyTFFGaEdWVWVMNDU4Z3VheFQ4SVxuUmg4aXQ5d0JVQkcyMVNuSHdhK2R1YnlGVkhYV0ZNZzdZN1VDZm1TQWlyd0V0UFVkVUJId1dwY2Q4aFlqdHU1QlxuZWkzajQ5R1lmV1JYand0N3lLNnJheVpldE9KekJLNGZ5Ynp1a0ZjbkF4TzRtTmxGZnI5cWprc0tmTXBWMGVyU1xuTHYwVjhnSDRRYVZpQ0hqcDYxR1ZaeHcyaUp1OUxsZmNsK2x0Wjh0dURaNzA5MjRFWkpUY1FNN0RjQVcwY3ZKZlxudXFCNFRGYWNzbFNBTFFcdTAwM2RcdTAwM2Rcbi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tXG4iLCJsaWNlbnNlUmVxdWVzdCI6ImV5SjBhSFZ0WW5CeWFXNTBJam9pWlhsS2FtTklWblJpTWxKc1lrTkpOa2xyYkhWa1IxWnpTMFpKY0VsRlRuWmpiVlZ2VmtVd2NFbEhhek5NVkZFelQxUkJaMUV4UWxaSlJVRm5UWGswTWsxRlpFbGxhVWx6U1cxT2QyUllUV2xQYVVsNVNXbDNhVnB0UlRaWmFrazJXbTFKTmxsNlZUWk9la0UyVFVSQmFVOXBTbXhrUjJoc1kybEpjMGx0YUhaak0xSjFXVmN4YkVscWIybE5WRUYwVFVNd2VFNTZWWFJOYWxFMVNXbDNhV0pYVm5SaFZ6VnlXV2xKTmtscVRUUlBSRVUxVFhwWmFVeERTbnBsV0U0eFpGZHNhMGxxYjJsTlZWbDZUV3BHUjFKVVRYUk5ha0Y0VVhrd01GRjZRa05NVlVWNVVrVlZkRkZxWjNsTmFsRjVUa1ZaTVZKRVkzcEphWGRwWkcxV2VXTXliSFppYVVrMlNXcEJkVTFUU2praUxDSndkV0pyWlhraU9pSXRMUzB0TFVKRlIwbE9JRkJWUWt4SlF5QkxSVmt0TFMwdExWeHVUVWxKUWtoRVFVNUNaMnR4YUd0cFJ6bDNNRUpCVVVWR1FVRlBRMEZSYTBGTlNVbENRa0ZMUWk5RVl6QnJjVmhwZGxKa1QweGtWbmd2TVN0VE16RkxXbHh1ZWpOUWQxZGtlazlvYjNOdlkyOXJVMnd3ZG5CeFl6YzJjSEYxVjJ3emNFTkJWbWROVkdodFRsSmFOV2RPY1dsVE5qRm5iM0ptT0ZwR04zaHdSbEZuZFZ4dWNtczBXalp4VkVsM2FEYzNlbW8yTkVoUE1IQm1ZbnBuZHpGbUx6SnZSbXQ1ZFRkdVJrRk9jR3BzVEZCS2NXcFdMMnRNY0M5MFZYaHFhbU5NTkdSdlUxeHVjRFkxVEdNM2EybHJPWFkxYVRCcGVYbFlaRXM1ZFdKc1RuRk5OVmRsVFRWblJTODNjM2h1U0dVdlUyeFdOVFpOVkhsclEzbEhhV3hsVERKc0wxQlpabHh1UTJKdVlVTjRaRzlvT0VSekt6SjJSbnBKYUZaM1JXd3lZa3BwWjBKS2JUSlZOMWN6U21jNWJWaG1SRzluUTB4ek1qRXhPRTEzUTFCaFVGVmxURVV3SzF4dVdsQkJOVWR1TDJXA12SAWlRoeEsxVnFRVGRrVjNsYU1WWnVkR05NWWxobE1XMXZlRlp0UTBsc2VGVm5kMGxFUVZGQlFseHVMUzB0TFMxRlRrUWdVRlZDVEVsRElFdEZXUzB0TFMwdFhHNGlmUVx1MDAzZFx1MDAzZCJ9",
    "expiredDate": "2017-02-05 19:44:21",
    "issuedDate": " 2017-01-06 19:44:21",
    "user": " example@mevoco.com",
    "hostNum": 10.0,
    "expired": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LicenseInventory | 详情参考[inventory] | 0.6 |

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
| licenseType | String |  | 0.6 |
| licenseRequest | String |  | 0.6 |
| expiredDate | String |  | 0.6 |
| issuedDate | String |  | 0.6 |
| user | String |  | 0.6 |
| hostNum | Integer |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| availableHostNum | Integer |  | 0.6 |
| availableCpuNum | Integer |  | 0.6 |
| expired | boolean |  | 0.6 |



#### SDK示例

 Java SDK

```
ReloadLicenseAction action = new ReloadLicenseAction();
action.managementNodeUuids = asList("839034e1da8e37a08b67e3a8279a1650","7869acf9b8bd34079f14a93751e60810");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ReloadLicenseAction.Result res = action.call();
```

 Python SDK

```
ReloadLicenseAction action = ReloadLicenseAction()
action.managementNodeUuids = [839034e1da8e37a08b67e3a8279a1650, 7869acf9b8bd34079f14a93751e60810]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ReloadLicenseAction.Result res = action.call()
```

---

### 更新许可证信息(UpdateLicense)



#### API请求

 URLs

```
PUT zstack/v1/licenses/mn/{managementNodeUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateLicense": {
    "license": "this is license string"
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
-X PUT -d '{"updateLicense":{"license":"this is license string"}}' \
http://localhost:8080/zstack/v1/licenses/mn/f03b0d69643038f9812edbf4b259cac1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| managementNodeUuid | String | url | 管理节点uuid |  | 0.6 |
| license | String | body(包含在**updateLicense**结构中) | 进行过base64 encode的license内容 |  | 0.6 |
| additionSession (可选) | String | body(包含在**updateLicense**结构中) | 额外的信息,是一个json字符串 |  | 4.1.0 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "licenseRequest": "eyJwcml2YXRlS2V5IjoiLS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLVxuTUlJRWhnSUJBQUtCL0RjMGtxWGl2UmRPTGRWeC8xK1MzMUtaejNQd1dkek9ob3NvY29rU2wwdnBxYzc2cHF1V1xubDNwQ0FWZ01UaG1OUlo1Z05xaVM2MWdvcmY4WkY3eHBGUWd1cms0WjZxVEl3aDc3emo2NEhPMHBmYnpndzFmL1xuMm9Ga3l1N25GQU5wamxMUEpxalYva0xwL3RVeGpqY0w0ZG9TcDY1TGM3a2lrOXY1aTBpeXlYZEs5dWJsTnFNNVxuV2VNNWdFLzdzeG5IZS9TbFY1Nk1UeWtDeUdpbGVMMmwvUFlmQ2JuYUN4ZG9oOERzKzJ2RnpJaFZ3RWwyYkppZ1xuQkptMlU3VzNKZzltWGZEb2dDTHMyMTE4TXdDUGFQVWVMRTArWlBBNUduL2ZxZUZad2hDMElMcnM3ZTZyZThxK1xuVWpBN2RXeVoxVm50Y0xiWGUxbW94Vm1DSWx4VWd3SURBUUFCQW9IOE1JMXRXTFkxQmhVOUhGZVplVTRzV1hKclxuVVJXWGd5cWtqQ2t6cXJpT0ZqYllvUEF6dS8vREU4U1BlQWZDZkppU0hUdVRkdWxZVVAzZUlkakkxbTA1RVN3MVxuSXYyS01BbGRLWERmTUt3dXpLck1LbDBua1BLMkUwMDVhYW9VSVBncU0weDdQTXlRUmZ1VW81NWs3S2JucVNyMVxuRE1iUmJZY3FzYklrdlBoNGhOK3V0bHNvb3dFM0FZQ1FxNjkrL3NkVzhRd0V6dTRiOG9oYzFCWlJXUC9MdHhrUVxuemdxSVo4Qkw1R1BoLy9RN2xEeGZEa1d4Nkpia0o5blEyWVJKbnBSZGhYTk1mZndValpRRG9wcmhKbi9IektSdFxueWZDc1d5UUttSjBvMlJYVzBEczdycS9SeXJVelc5UElseHlqSnBBSEhMeUI0UndRUUhqbGVZczVBbjV6a0xSU1xuNGlhZFRGZFVZdi9UV0xvcVRtQ25ZNURmUWlnUTBqajNNRE0xRERmWUtKa2szazBHSkh6cjQ2WlZiaWRqMEdhU1xuaXNqc3l3RERtN2wxM1BSL1ZFRVo0bDk5L2F2OFY0bGs5ZkZVYmp5MG5sWEZZcjAzZ2NLZDBCYnlPbk84dU5MM1xuOUpWeG9GVUNqaG1HSm1WQk1tTXFXMjN1L013Y1l5b2pnbjhDZm5wS2RTWHd2ZCtrSzUycEwyWC9kQlBYcnhFU1xuT2hyYXpVN1lPamdKM2VuWVpVRG5oOEhFOGtzRTVVSk9RZDZ4enU4N2xmU1FkTEZnT29DdzFlSVVZNTl3TFdxTVxuRE9qaXdXdDlQdjBGSnFtOVBKaHpkTmZ3dVJhSU9QbDI3WTZ5ejVRQkRrcnIvOTdtODB6d21KYWxhNjkwV2VPbFxuSU9jcE85ekVqUk1qL1FKK09DUGF4Y3poRDFjUHNZbnFWMlJxQTdWUmxOOTBlRkN1SUFYUDhKMDBzeGQ5WlgvTFxuYmJLa1hsQ0pjeHFES2tzNXpXNW05ZGQvNWpCejdaS1AxT2NDeTN4RnArcGxrMUlSSTZQdXRlSVlXM2kxK3RSVVxuUEhCTUZWUHZGRFVMZ0o3T3JLWm9ybFhkNTNZSTloWEw1blJ1aWU2TlovMUVlVzNMUmhzU1ZHL0hBbjVrV2NOR1xuRGdhUmhiTnczZ3VTSkkwSlYxMUdvZkZpWmhoQjBmZjhVa1J6QjJzWFZxYzFYN3IveXBXaTBuc0ZGbDNjUE1ZeFxuK1hSNHRhRnNSekJNSkRVWCtjS2JBeS80ejFLdk5RakNNajdtM08zam9DTEtyTFFGaEdWVWVMNDU4Z3VheFQ4SVxuUmg4aXQ5d0JVQkcyMVNuSHdhK2R1YnlGVkhYV0ZNZzdZN1VDZm1TQWlyd0V0UFVkVUJId1dwY2Q4aFlqdHU1QlxuZWkzajQ5R1lmV1JYand0N3lLNnJheVpldE9KekJLNGZ5Ynp1a0ZjbkF4TzRtTmxGZnI5cWprc0tmTXBWMGVyU1xuTHYwVjhnSDRRYVZpQ0hqcDYxR1ZaeHcyaUp1OUxsZmNsK2x0Wjh0dURaNzA5MjRFWkpUY1FNN0RjQVcwY3ZKZlxudXFCNFRGYWNzbFNBTFFcdTAwM2RcdTAwM2Rcbi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tXG4iLCJsaWNlbnNlUmVxdWVzdCI6ImV5SjBhSFZ0WW5CeWFXNTBJam9pWlhsS2FtTklWblJpTWxKc1lrTkpOa2xyYkhWa1IxWnpTMFpKY0VsRlRuWmpiVlZ2VmtVd2NFbEhhek5NVkZFelQxUkJaMUV4UWxaSlJVRm5UWGswTWsxRlpFbGxhVWx6U1cxT2QyUllUV2xQYVVsNVNXbDNhVnB0UlRaWmFrazJXbTFKTmxsNlZUWk9la0UyVFVSQmFVOXBTbXhrUjJoc1kybEpjMGx0YUhaak0xSjFXVmN4YkVscWIybE5WRUYwVFVNd2VFNTZWWFJOYWxFMVNXbDNhV0pYVm5SaFZ6VnlXV2xKTmtscVRUUlBSRVUxVFhwWmFVeERTbnBsV0U0eFpGZHNhMGxxYjJsTlZWbDZUV3BHUjFKVVRYUk5ha0Y0VVhrd01GRjZRa05NVlVWNVVrVlZkRkZxWjNsTmFsRjVUa1ZaTVZKRVkzcEphWGRwWkcxV2VXTXliSFppYVVrMlNXcEJkVTFUU2praUxDSndkV0pyWlhraU9pSXRMUzB0TFVKRlIwbE9JRkJWUWt4SlF5QkxSVmt0TFMwdExWeHVUVWxKUWtoRVFVNUNaMnR4YUd0cFJ6bDNNRUpCVVVWR1FVRlBRMEZSYTBGTlNVbENRa0ZMUWk5RVl6QnJjVmhwZGxKa1QweGtWbmd2TVN0VE16RkxXbHh1ZWpOUWQxZGtlazlvYjNOdlkyOXJVMnd3ZG5CeFl6YzJjSEYxVjJ3emNFTkJWbWROVkdodFRsSmFOV2RPY1dsVE5qRm5iM0ptT0ZwR04zaHdSbEZuZFZ4dWNtczBXalp4VkVsM2FEYzNlbW8yTkVoUE1IQm1ZbnBuZHpGbUx6SnZSbXQ1ZFRkdVJrRk9jR3BzVEZCS2NXcFdMMnRNY0M5MFZYaHFhbU5NTkdSdlUxeHVjRFkxVEdNM2EybHJPWFkxYVRCcGVYbFlaRXM1ZFdKc1RuRk5OVmRsVFRWblJTODNjM2h1U0dVdlUyeFdOVFpOVkhsclEzbEhhV3hsVERKc0wxQlpabHh1UTJKdVlVTjRaRzlvT0VSekt6SjJSbnBKYUZaM1JXd3lZa3BwWjBKS2JUSlZOMWN6U21jNWJWaG1SRzluUTB4ek1qRXhPRTEzUTFCaFVGVmxURVV3SzF4dVdsQkJOVWR1TDJXA12SAWlRoeEsxVnFRVGRrVjNsYU1WWnVkR05NWWxobE1XMXZlRlp0UTBsc2VGVm5kMGxFUVZGQlFseHVMUzB0TFMxRlRrUWdVRlZDVEVsRElFdEZXUzB0TFMwdFhHNGlmUVx1MDAzZFx1MDAzZCJ9",
    "expiredDate": "2017-02-05 19:44:21",
    "issuedDate": " 2017-01-06 19:44:21",
    "user": " example@mevoco.com",
    "hostNum": 10.0,
    "expired": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | LicenseInventory | 详情参考[inventory] | 0.6 |

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
| licenseType | String |  | 0.6 |
| licenseRequest | String |  | 0.6 |
| expiredDate | String |  | 0.6 |
| issuedDate | String |  | 0.6 |
| user | String |  | 0.6 |
| hostNum | Integer |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| availableHostNum | Integer |  | 0.6 |
| availableCpuNum | Integer |  | 0.6 |
| expired | boolean |  | 0.6 |



#### SDK示例

 Java SDK

```
UpdateLicenseAction action = new UpdateLicenseAction();
action.managementNodeUuid = "f03b0d69643038f9812edbf4b259cac1";
action.license = "this is license string";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateLicenseAction.Result res = action.call();
```

 Python SDK

```
UpdateLicenseAction action = UpdateLicenseAction()
action.managementNodeUuid = "f03b0d69643038f9812edbf4b259cac1"
action.license = "this is license string"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateLicenseAction.Result res = action.call()
```

---

### 推送模块许可证使用量(PushLicenseAddOnsUsage)



#### API请求

 URLs

```
PUT zstack/v1/licenses/addons/usage
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "pushLicenseAddOnsUsage": {
    "addOnsUsage": "[{\"usage\":10,\"module\":\"CPU.Zaku\"}]"
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
-X PUT -d '{"pushLicenseAddOnsUsage":{"addOnsUsage":"[{\"usage\":10,\"module\":\"CPU.Zaku\"}]"}}' http://localhost:8080/zstack/v1/licenses/addons/usage
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| addOnsUsage | String | body(包含在**pushLicenseAddOnsUsage**结构中) | 各模块使用量 |  | 5.1.8 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.8 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.8 |



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
PushLicenseAddOnsUsageAction action = new PushLicenseAddOnsUsageAction();
action.addOnsUsage = "[{"usage":10,"module":"CPU.Zaku"}]";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PushLicenseAddOnsUsageAction.Result res = action.call();
```

 Python SDK

```
PushLicenseAddOnsUsageAction action = PushLicenseAddOnsUsageAction()
action.addOnsUsage = "[{"usage":10,"module":"CPU.Zaku"}]"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PushLicenseAddOnsUsageAction.Result res = action.call()
```
