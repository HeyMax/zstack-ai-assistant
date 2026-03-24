# 插件管理相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.10.html*

---

## 插件管理相关接口

---

## 删除插件驱动 (DeletePluginDrivers)



### API请求

 URLs

```
DELETE zstack/v1/external/plugins/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/external/plugins/e90949fe5ddd3e68a4646b97b812f905
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.3.20 |



### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{ 	"error": { 		"code": "SYS.1001", 		"description": "A message or a operation timeout", 		"details": "Create VM on KVM timeout after 300s" 	} }
```



### SDK示例

 Java SDK

```
DeletePluginDriversAction action = new DeletePluginDriversAction(); action.uuid = "e90949fe5ddd3e68a4646b97b812f905"; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeletePluginDriversAction.Result res = action.call();
```

 Python SDK

```
DeletePluginDriversAction action = DeletePluginDriversAction() action.uuid = "e90949fe5ddd3e68a4646b97b812f905" action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeletePluginDriversAction.Result res = action.call()
```

---

### 刷新插件驱动 (RefreshPluginDrivers)



#### API请求

 URLs

```
PUT zstack/v1/external/plugins
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "refreshPluginDrivers": {
    "name": "prometheus"
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
-X PUT -d '{"refreshPluginDrivers":{"name":"prometheus"}}' http://localhost:8080/zstack/v1/external/plugins
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**refreshPluginDrivers**结构中) | 资源名称 |  | 5.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.0 |



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
RefreshPluginDriversAction action = new RefreshPluginDriversAction();
action.name = "prometheus";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RefreshPluginDriversAction.Result res = action.call();
```

 Python SDK

```
RefreshPluginDriversAction action = RefreshPluginDriversAction()
action.name = "prometheus"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RefreshPluginDriversAction.Result res = action.call()
```
