# 如何查看云平台扁平网络资源信息 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.6.html*

---

## 如何查看云平台扁平网络资源信息



ZStack Cloud支持通过普通API调用以及ZQL语句两种方式查询扁平网络资源信息。

---

## 使用API查看扁平网络资源信息



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，查询扁平网络信息。本文主要以管理员身份（admin）登录管理节点系统查询。您也可以使用云平台其他已通过授权账户/用户身份登录系统查询。 API调用流程概览：
 1. 登录云平台
 2. 查询扁平网络信息


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
   - zql：查询扁平网络信息所使用的语句，需通过URL进行编码
 返回结果：

```
{"results":[{"inventories":[{"uuid":"373dac920b2d40e1a9cad6fbce5c828e","name":"test","type":"L3BasicNetwork","zoneUuid":"dcd8eeff74164f189c5161c57f30c829","l2NetworkUuid":"8b4d186db26d44ebae5027146f4b2e31","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"May 20, 2021 4:24:52 PM","lastOpDate":"May 20, 2021 4:24:52 PM","dns":["223.5.5.5"],"ipRanges":[{"uuid":"74012de01be04bec96bf9509211ee956","l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","name":"dfw","startIp":"192.168.98.2","endIp":"192.168.98.254","netmask":"255.255.255.0","gateway":"192.168.98.1","networkCidr":"192.168.98.0/24","ipVersion":4,"prefixLen":24,"createDate":"May 20, 2021 4:24:53 PM","lastOpDate":"May 20, 2021 4:24:53 PM"}],"networkServices":[{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"2b2fae4a01e94bb9bac46435f2c45a7c","networkServiceType":"SecurityGroup"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"VipQos"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"DNS"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"2b2bef0d048948c3ba079fe5fcdfbf22","networkServiceType":"LoadBalancer"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"DHCP"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"HostRoute"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"Eip"},{"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","networkServiceProviderUuid":"6cb7b09e55234739a5ae295a89a24682","networkServiceType":"Userdata"}],"hostRoute":[{"id":3,"l3NetworkUuid":"373dac920b2d40e1a9cad6fbce5c828e","prefix":"169.254.169.254/32","nexthop":"192.168.98.235","createDate":"May 24, 2021 1:28:41 PM","lastOpDate":"May 24, 2021 1:28:41 PM"}]},}]}]}]}
```

其中：
   - inventories字段即为所需查询到的扁平网络信息，云平台上存在一个名称为test的扁平网络
 2. inventories字段即为所需查询到的扁平网络信息，云平台上存在一个名称为test的扁平网络

---

### 使用ZQL查看扁平网络资源信息



ZStack Cloud支持通过ZQL语句以HTTP方式查询扁平网络资源信息。本文主要通过以管理员身份（admin）登录管理节点系统查询扁平网络资源信息。您也可以使用云平台其他已授权账户/用户身份登录系统查询。

使用ZQL语句查询扁平网络资源信息前，需获取调用ZQL语句所需的Sesion ID。

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
query L3Network where ((category='Private' andtype='L3BasicNetwork') and uuid not in (query L3Network.uuid wherel2Network.cluster.type='vmware'))
```


 - 语义：查询扁平网络资源的所有信息
 - query关键字、where从句、query子句可参考[ZQL语法]
  ZQL语句返回结果：

```
{"results":[{"inventories":[{"uuid":"0260922d2f794c55ac903f322ed7d144","name":"L3-test","description":"imported from vCenter: 172.20.57.1","type":"L3BasicNetwork","zoneUuid":"dcd8eeff74164f189c5161c57f30c829","l2NetworkUuid":"3e4bef57d9ca4a8bbee3ec59f46d087d","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jun 21, 2021 6:11:05 PM","lastOpDate":"Jun 21, 2021 6:11:05 PM","ipRanges":[{"uuid":"34ceedba93f1490993714c15c1b19f02","l3NetworkUuid":"0260922d2f794c55ac903f322ed7d144"}]}]}
```

其中：
 - inventories字段即为所需查询到的扁平网络信息，云平台上存在一个名称为L3-test的扁平网络
