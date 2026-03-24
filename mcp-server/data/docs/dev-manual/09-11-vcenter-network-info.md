# 如何查看vCenter三层网络资源信息 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.11.html*

---

## 如何查看vCenter三层网络资源信息



ZStack Cloud支持通过普通API调用以及ZQL语句两种方式查询vCenter关联三层网络资源信息。

---

## 使用API查看vCenter三层网络资源信息



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，查询vCenter三层网络资源信息。本文主要以管理员身份（admin）登录管理节点系统查询。您也可以使用云平台其他已通过授权账户/用户身份登录系统查询。 API调用流程概览：
 1. 登录云平台
 2. 查询vCenter三层网络资源信息


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"12284325ad2a497d8458ae0c90f66c59","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 20, 2022 11:39:43 PM","createDate":"Apr 20, 2022 9:39:43 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstackv1/zql
   - zql：查询vCenter三层网络资源信息所使用的语句，需通过URL进行编码
 返回结果：

```
{"results":[{"inventories":[{"uuid":"0260922d2f794c55ac903f322ed7d144","name":"L3-test","description":"imported from vCenter: 172.20.57.1","type":"L3BasicNetwork","zoneUuid":"dcd8eeff74164f189c5161c57f30c829","l2NetworkUuid":"3e4bef57d9ca4a8bbee3ec59f46d087d","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jun 21, 2021 6:11:05 PM","lastOpDate":"Jun 21, 2021 6:11:05 PM","ipRanges":[{"uuid":"34ceedba93f1490993714c15c1b19f02","l3NetworkUuid":"0260922d2f794c55ac903f322ed7d144"}]}]}
```

其中：
   - inventories字段即为所需查询vCenter下的三层网络资源信息，
 2. inventories字段即为所需查询vCenter下的三层网络资源信息，

---

### 使用ZQL查看vCenter三层网络资源信息



ZStack Cloud支持通过ZQL语句以HTTP方式查询vCenter三层网络资源信息。本文主要通过以管理员身份（admin）登录管理节点系统查询vCenter三层网络资源信息。您也可以使用云平台其他已授权账户/用户身份登录系统查询。

使用ZQL语句查询三层网络资源信息前，需获取调用ZQL语句所需的Sesion ID。

#### 使用Curl调用ZQL查询示例

 Curl示例：

```
curl http://localhost:8080/zstack/v1/zql?zql=yourZQL -X GET -H 'Connection:close' -H 'Content-Type:application/json' -H 'Authorization:OAuth SesionID'
```

其中：
 - yourZQL：查询使用的ZQL语句，需通过URL进行编码
 - SessionID：调用ZQL语句所需的Sesion ID，例如376c223518e347bcbeca40d2c7c515b9
  ZQL语句：

```
query L3Network where uuid not in (query L3Network.uuid wherel2Network.cluster.type='zstack')
```


 - 语义：查询目标vCenter三层网络资源信息
 - query关键字、where从句、query子句可参考[ZQL语法]
  ZQL语句返回结果：

```
{"results":[{"inventories":[{"uuid":"0260922d2f794c55ac903f322ed7d144","name":"L3-test","description":"imported from vCenter: 172.20.57.1","type":"L3BasicNetwork","zoneUuid":"dcd8eeff74164f189c5161c57f30c829","l2NetworkUuid":"3e4bef57d9ca4a8bbee3ec59f46d087d","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jun 21, 2021 6:11:05 PM","lastOpDate":"Jun 21, 2021 6:11:05 PM","ipRanges":[{"uuid":"34ceedba93f1490993714c15c1b19f02","l3NetworkUuid":"0260922d2f794c55ac903f322ed7d144"}]}]}
```

其中：
 - inventories字段即为所查询目标vCenter三层网络资源信息
