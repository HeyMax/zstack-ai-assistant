# 时间管理相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.11.html*

---

## 时间管理相关接口

---

## 获取当前chrony时间源服务器(GetChronyServers)



### API请求

 URLs

```
GET zstack/v1/zops/chrony/servers
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"  -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"  -X GET http://localhost:8080/zstack/v1/zops/chrony/servers?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.21 |



### API返回

 返回示例

```
{   "servers": [     {       "internal": {         "hostname": "172.0.0.1",         "status": "Connected"       },       "external": {         "hostname": "ntp.test.com",         "status": "Connected"       }     }   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| servers | List | 详情参考[servers] | 4.7.21 |

 #servers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| internal | ChronyServerInfo | 详情参考[internal] | 4.7.21 |
| external | ChronyServerInfo | 详情参考[external] | 4.7.21 |

 #internal

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostname | String | 地址 | 4.7.21 |
| status | HostConnectedStatus | 详情参考[status] | 4.7.21 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connected | HostConnectedStatus | 网络可达 | 4.7.21 |
| Disconnected | HostConnectedStatus | 网络不可达 | 4.7.21 |
| Unknown | HostConnectedStatus | 网络连接状态未知 | 4.7.21 |

 #external

|  |  |  |  |
| --- | --- | --- | --- |
| hostname | String | 地址 | 4.7.21 |
| status | HostConnectedStatus | 详情参考[status] | 4.7.21 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connected | HostConnectedStatus | 网络可达 | 4.7.21 |
| Disconnected | HostConnectedStatus | 网络不可达 | 4.7.21 |
| Unknown | HostConnectedStatus | 网络连接状态未知 | 4.7.21 |

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
GetChronyServersAction action = new GetChronyServersAction(); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; GetChronyServersAction.Result res = action.call();
```

 Python SDK

```
GetChronyServersAction action = GetChronyServersAction() action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" GetChronyServersAction.Result res = action.call()
```

---

## 检查多个主机之间的网络连通性(CheckNetworkReachable)



### API请求

 URLs

```
GET zstack/v1/zops/check/network
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"  -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"  -X GET http://localhost:8080/zstack/v1/zops/check/network?sourceHostnames=172.0.0.1&targetHostnames=test1.com&targetHostnames=test2.com
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sourceHostnames (可选) | List | query | 源指定ip地址或域名集合 |  | 4.7.21 |
| targetHostnames | List | query | 目标ip地址或域名集合 |  | 4.7.21 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.21 |



### API返回

 返回示例

```
{   "results": [     {       "sourceHostname": "172.0.0.1",       "targetHostname": "test2.com",       "status": "Disconnected"     },     {}   ] }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| results | List | 详情参考[results] | 4.7.21 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sourceHostname | String | 源地址 | 4.7.21 |
| targetHostname | String | 目标地址 | 4.7.21 |
| status | HostConnectedStatus | 详情参考[status] | 4.7.21 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Connected | HostConnectedStatus | 网络可达 | 4.7.21 |
| Disconnected | HostConnectedStatus | 网络不可达 | 4.7.21 |
| Unknown | HostConnectedStatus | 网络连接状态未知 | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |



### SDK示例

 Java SDK

```
CheckNetworkReachableAction action = new CheckNetworkReachableAction(); action.sourceHostnames = asList("172.0.0.1"); action.targetHostnames = asList("test1.com","test2.com"); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CheckNetworkReachableAction.Result res = action.call();
```

 Python SDK

```
CheckNetworkReachableAction action = CheckNetworkReachableAction() action.sourceHostnames = [172.0.0.1] action.targetHostnames = [test1.com, test2.com] action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CheckNetworkReachableAction.Result res = action.call()
```

---

## 同步chrony时间源(SyncChronyServers)



### API请求

 URLs

```
PUT zstack/v1/zops/chrony/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "syncChronyServers": {},   "systemTags": [],   "userTags": [] }
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"  -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"  -X PUT -d '{"syncChronyServers":{}}'  http://localhost:8080/zstack/v1/zops/chrony/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
SyncChronyServersAction action = new SyncChronyServersAction(); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; SyncChronyServersAction.Result res = action.call();
```

 Python SDK

```
SyncChronyServersAction action = SyncChronyServersAction() action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" SyncChronyServersAction.Result res = action.call()
```

---

### 修改chrony时间源服务器(UpdateChronyServers)



#### API请求

 URLs

```
PUT zstack/v1/zops/chrony/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateChronyServers": {
    "internalHostnames": [
      "172.0.0.1",
      "172.0.0.2"
    ],
    "externalHostnames": [
      "test1.ntp.com"
    ]
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
-X PUT -d '{"updateChronyServers":{"internalHostnames":["172.0.0.1","172.0.0.2"],"externalHostnames":["test1.ntp.com"]}}'
http://localhost:8080/zstack/v1/zops/chrony/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| internalHostnames (可选) | List | body(包含在**updateChronyServers**结构中) | 内部时间源集合 |  | 4.7.21 |
| externalHostnames (可选) | List | body(包含在**updateChronyServers**结构中) | 外部时间源集合 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



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
UpdateChronyServersAction action = new UpdateChronyServersAction();
action.internalHostnames = asList("172.0.0.1","172.0.0.2");
action.externalHostnames = asList("test1.ntp.com");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateChronyServersAction.Result res = action.call();
```

 Python SDK

```
UpdateChronyServersAction action = UpdateChronyServersAction()
action.internalHostnames = [172.0.0.1, 172.0.0.2]
action.externalHostnames = [test1.ntp.com]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateChronyServersAction.Result res = action.call()
```
