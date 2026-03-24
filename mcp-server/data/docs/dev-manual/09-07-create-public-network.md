# 如何创建公有网络并加载网络服务 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.7.html*

---

## 如何创建公有网络并加载网络服务



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，创建公有网络并加载网络服务。本文主要以管理员身份（admin）登录管理节点系统，创建公有网络并加载相应的网络服务。您也可以使用云平台其他已授权账户/用户身份登录系统创建。 调用API查看云主机内部监控数据前，需确保：
 - 云平台已创建二层网络，若未创建二层网络，可参考[二层网络资源相关接口]进行创建。说明: 推荐二层网络和三层网络为一一对应的关系，即一个二层网络仅用于创建一个三层网络。
 - 请提前规划好网络地址段，同一个公有网络下的地址段不能重叠。
     -
    -
    -
    -
    -
    -
    -
    -
    -
    -

    -
    -
    -
    -
    -
    -

    -


| 网络服务实现方式 | 描述 | 支持的网络类型 | 支持的网络服务 |
| --- | --- | --- | --- |
| vrouter | 使用VPC路由器实现网络服务 | VPC网络 | IPsec VRouterRoute CentralizedDNS VipQos DNS SNAT LoadBalancer PortForwarding Eip DHCP |
| Flat | 在物理机上使用namespace实现网络服务 | VPC网络、扁平网络、公有网络 | VipQos DNS HostRoute Userdata Eip DHCP |
| SecurityGroup | 在物理机上使用iptables实现网络服务 | VPC网络、扁平网络、公有网络 | SecurityGroup |
| VirtualRouter | 不建议使用 | 不建议使用 | 不建议使用 |

  -
 -
  API调用流程概览：
 1. 登录云平台
 2. 创建公有网络
 3. 加载网络服务到公有网络
 4. 向公有网络添加DNS
 5. 添加IP地址范围


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"155dbbe8193344a5913c412f2732c0d7","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 19, 2022 8:06:42 PM","createDate":"Apr 19, 2022 6:06:42 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks
   - name：必填项，设置公有网络名称
   - l2NetworkUuid：必填项，指定二层网络UUID
   - category：必填项，指定网络类别，支持指定Public、Private、和System，本场景创建公有网络，需设置为Public
   - type：创建公有网络时为必填项，指定网络类型，可选值为L3BasicNetwork
   - system：创建公有网络时为必填项，可选值为false
 返回结果：

```
{"inventory":{"uuid":"f96c7f7fe73440478ebdb22fe5e0371f","name":"PubNetwork1","type":"L3BasicNetwork","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","l2NetworkUuid":"3f50451988a1485bb47d6830abd6c17e","state":"Enabled","system":false,"category":"Public","ipVersion":4,"createDate":"Jul 22, 2022 2:05:28 PM","lastOpDate":"Jul 22, 2022 2:05:28 PM","ipRanges":[],"networkServices":[],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"6af2168245f1457382b6ccd7bbc4074e","success":true,"id":"8b883194d8d44e12a8592d1f9ea0f8dc","createdTime":1658469928805}
```

其中：
   - uuid字段即为所创建成功的公有网络的UUID
 2. uuid字段即为所创建成功的公有网络的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/network-services
   - l3NetworkUuid：必填项，指定三层网络UUID
   - networkServices：必填项，设置要加载的网络服务
 返回结果：

```
{"inventory":{"uuid":"f96c7f7fe73440478ebdb22fe5e0371f","name":"PubNetwork1","type":"L3BasicNetwork","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","l2NetworkUuid":"3f50451988a1485bb47d6830abd6c17e","state":"Enabled","system":false,"category":"Public","ipVersion":4,"createDate":"Jul 22, 2022 2:05:28 PM","lastOpDate":"Jul 22, 2022 2:05:28 PM","ipRanges":[],"networkServices":[{"l3NetworkUuid":"f96c7f7fe73440478ebdb22fe5e0371f","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"HostRoute"},{"l3NetworkUuid":"f96c7f7fe73440478ebdb22fe5e0371f","networkServiceProviderUuid":"3cda74aba607461680e476892928981a","networkServiceType":"SecurityGroup"},{"l3NetworkUuid":"f96c7f7fe73440478ebdb22fe5e0371f","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"DHCP"},{"l3NetworkUuid":"f96c7f7fe73440478ebdb22fe5e0371f","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"Userdata"}],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"17b88bb9d0f44ce0a54725aee51785f9","success":true,"id":"61cdd22fa4c34941b366aaa432fbe858","createdTime":1658470345475}
```

3. networkServices：必填项，设置要加载的网络服务
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/ip-ranges
   - l3NetworkUuid：必填项，指定公有网络UUID
   - name：必填项，指定三层网络IP地址段名称
   - startIp：必填项，指定IP地址段的起始地址
   - endIp：必填项，指定IP地址段的结束地址
   - netmask：必填项，指定IP地址段的网络掩码
   - gateway：必填项，指定IP地址段的网关
   - ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）
 返回结果：

```
{"inventory":{"uuid":"ac7dcbc1f57943e2939c9d5c8fe8144d","l3NetworkUuid":"f96c7f7fe73440478ebdb22fe5e0371f","name":"PubNetIP-Range","startIp":"192.168.72.10","endIp":"192.168.72.250","netmask":"255.255.255.0","gateway":"192.168.72.1","networkCidr":"192.168.72.0/24","ipVersion":4,"prefixLen":24,"ipRangeType":"Normal","createDate":"Jul 22, 2022 2:18:28 PM","lastOpDate":"Jul 22, 2022 2:18:28 PM"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"bb7e99c82a754d5ab3fc81e07b9e8f0a","success":true,"id":"8eeda23fe1ca4d5fb598e6983afc3e81","createdTime":1658470708662}
```

4. ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/dns
   - l3NetworkUuid：必填项，指定公有网络UUID
   - dns：必填项，指定DNS地址
 返回结果：

```
{"inventory":{"uuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-L3Network","type":"L3VpcNetwork","zoneUuid":"90113f41716c428994c335a359658cd8","l2NetworkUuid":"473fc24161fc4ffa88a8e77efe155584","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Apr 19, 2022 12:37:16 AM","lastOpDate":"Apr 19, 2022 12:37:16 AM","dns":["223.5.5.5"],"ipRanges":[{"uuid":"d0a66a72bc834345b40d165c585ca1cb","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-IP-Range","startIp":"192.168.70.10","endIp":"192.168.70.250","netmask":"255.255.255.0","gateway":"192.168.70.1","networkCidr":"192.168.70.0/24","ipVersion":4,"prefixLen":24,"createDate":"Apr 19, 2022 12:47:26 AM","lastOpDate":"Apr 19, 2022 12:47:26 AM"}],"networkServices":[{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"3996dab6bcd34ab1891b8024742aa963","networkServiceType":"DHCP"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"LoadBalancer"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"3996dab6bcd34ab1891b8024742aa963","networkServiceType":"Userdata"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"PortForwarding"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"IPsec"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"VRouterRoute"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"DNS"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"VipQos"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"SNAT"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"Eip"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"CentralizedDNS"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"e9557354f98645368dd1a6a67b72a828","networkServiceType":"SecurityGroup"}],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"e9e3a64077604369bfc14f7a4cfd1c57","success":true,"id":"8af4586d144649879173bcc1d144db3b","createdTime":1650300553408}
```

5. dns：必填项，指定DNS地址
