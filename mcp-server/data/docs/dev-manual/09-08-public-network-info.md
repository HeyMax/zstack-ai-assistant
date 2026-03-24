# 如何查看云平台公有网络资源信息 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.8.html*

---

## 如何查看云平台公有网络资源信息



ZStack Cloud支持通过普通API调用以及ZQL语句两种方式查询公有网络资源信息。

---

## 使用API查看公有网络资源信息



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，查询公有网络信息。本文主要以管理员身份（admin）登录管理节点系统查询。您也可以使用云平台其他已通过授权账户/用户身份登录系统查询。 API调用流程概览：
 1. 登录云平台
 2. 查询公有网络信息


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
   - zql：查询公有网络信息所使用的语句，需通过URL进行编码
 返回结果：

```
{"results":[{"inventories":[{"uuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","name":"L3-test-IPv4","description":"","type":"L3BasicNetwork","zoneUuid":"dcd8eeff74164f189c5161c57f30c829","l2NetworkUuid":"818250f4831e4aa18b5ac522436a4ace","state":"Enabled","system":false,"category":"Public","ipVersion":4,"createDate":"Feb 3, 2021 5:30:13 PM","lastOpDate":"Apr 21, 2021 4:46:11 PM","dns":["114.114.114.114"],"ipRanges":[{"uuid":"335f69ed07df49248579691b9a2efa89","l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","name":"L3-test-IPv4","startIp":"10.151.0.2","endIp":"10.151.0.254","netmask":"255.0.0.0","gateway":"10.0.0.1","networkCidr":"10.0.0.0/8","ipVersion":4,"prefixLen":8,"createDate":"Feb 3, 2021 5:31:53 PM","lastOpDate":"Feb 3, 2021 5:31:53 PM"}],"networkServices":[{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"Userdata"},{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"2b2fae4a01e94bb9bac46435f2c45a7c","networkServiceType":"SecurityGroup"},{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"HostRoute"},{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"DHCP"}],"hostRoute":[{"id":2,"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","prefix":"169.254.169.254/32","nexthop":"10.151.0.248","createDate":"Apr 13, 2021 5:11:06 PM","lastOpDate":"Apr 13, 2021 5:11:06 PM"}]}]}]}
```

其中：
   - inventories字段即为所需查询到的公有网络信息，云平台上存在一个名称为L3-test-IPv4的公有网络
 2. inventories字段即为所需查询到的公有网络信息，云平台上存在一个名称为L3-test-IPv4的公有网络

---

### 使用ZQL查看公有网络资源信息



ZStack Cloud支持通过ZQL语句以HTTP方式查询公有网络资源信息。本文主要通过以管理员身份（admin）登录管理节点系统查询公有网络资源信息。您也可以使用云平台其他已授权账户/用户身份登录系统查询。

使用ZQL语句查询公有网络资源信息前，需获取调用ZQL语句所需的Sesion ID。

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
query L3Network where (category='Public' and uuid not in(query L3Network.uuid where l2Network.cluster.type='vmware'))
```


 - 语义：查询公有网络资源的所有信息
 - query关键字、where从句、query子句可参考[ZQL语法]
  ZQL语句返回结果：

```
{"results":[{"inventories":[{"uuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","name":"L3-test-IPv4","description":"","type":"L3BasicNetwork","zoneUuid":"dcd8eeff74164f189c5161c57f30c829","l2NetworkUuid":"818250f4831e4aa18b5ac522436a4ace","state":"Enabled","system":false,"category":"Public","ipVersion":4,"createDate":"Feb 3, 2021 5:30:13 PM","lastOpDate":"Apr 21, 2021 4:46:11 PM","dns":["114.114.114.114"],"ipRanges":[{"uuid":"335f69ed07df49248579691b9a2efa89","l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","name":"L3-test-IPv4","startIp":"10.151.0.2","endIp":"10.151.0.254","netmask":"255.0.0.0","gateway":"10.0.0.1","networkCidr":"10.0.0.0/8","ipVersion":4,"prefixLen":8,"createDate":"Feb 3, 2021 5:31:53 PM","lastOpDate":"Feb 3, 2021 5:31:53 PM"}],"networkServices":[{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"Userdata"},{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"2b2fae4a01e94bb9bac46435f2c45a7c","networkServiceType":"SecurityGroup"},{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"HostRoute"},{"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"DHCP"}],"hostRoute":[{"id":2,"l3NetworkUuid":"0f8cbdd58bcf47a4b56ee9689ca5774a","prefix":"169.254.169.254/32","nexthop":"10.151.0.248","createDate":"Apr 13, 2021 5:11:06 PM","lastOpDate":"Apr 13, 2021 5:11:06 PM"}]}]}]}
```

其中：
 - inventories字段即为所需查询到的公有网络信息，云平台上存在一个名称为L3-test-IPv4的公有网络
