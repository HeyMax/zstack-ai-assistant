# 如何创建扁平网络并加载网络服务 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.5.html*

---

## 如何创建扁平网络并加载网络服务



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，创建扁平网络并加载网络服务。本文主要以管理员身份（admin）登录管理节点系统，创建扁平网络并加载相应的网络服务。您也可以使用云平台其他已授权账户/用户身份登录系统创建。 调用API查看云主机内部监控数据前，需确保：
 - 云平台已创建二层网络，若未创建二层网络，可参考[二层网络资源相关接口]进行创建。说明: 推荐二层网络和三层网络为一一对应的关系，即一个二层网络仅用于创建一个三层网络。
 - 请提前规划好网络地址段，同一个扁平网络下的地址段不能重叠。
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
 2. 创建扁平网络
 3. 添加IP地址段
 4. 加载网络服务到网络服务
 5. 向扁平网络添加DNS


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
   - name：必填项，设置三层网络名称
   - type：必填项，指定三层网络类型，支持指定L3BasicNetwork和L3VpcNetwork，本场景创建扁平网络，需设置为L3BasicNetwork
   - l2NetworkUuid：必填项，指定用于创建三层网络的二层网络UUID
   - category：必填项，指定三层网络类别，支持指定Public、Private、和System，本场景创建扁平网络，需设置为Private
   - system：创建扁平网络时为必填项，可选值为false
 返回结果：

```
{"inventory":{"uuid":"1abe265517d54df3b237c9bbb3023d3a","name":"L3Network1","type":"L3BasicNetwork","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","l2NetworkUuid":"3f50451988a1485bb47d6830abd6c17e","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jul 22, 2022 12:06:51 PM","lastOpDate":"Jul 22, 2022 12:06:51 PM","ipRanges":[],"networkServices":[],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"44cb6abe04d14f74be7747ce6b9fb654","success":true,"id":"93a71b9c6f904fd18e2bd5514338755e","createdTime":1658462811774}
```

其中：
   - uuid字段即为所创建成功的扁平网络的UUID
 2. uuid字段即为所创建成功的扁平网络的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/ip-ranges
   - name：必填项，指定三层网络IP地址段名称
   - startIp：必填项，指定IP地址段的起始地址
   - endIp：必填项，指定IP地址段的结束地址
   - netmask：必填项，指定IP地址段的网络掩码
   - gateway：必填项，指定IP地址段的网关
   - ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）
 返回结果：

```
{"inventory":{"uuid":"3e387e4419914167b1e70b774785f632","l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","name":"Test-IP-Range","startIp":"192.168.101.10","endIp":"192.168.101.250","netmask":"255.255.255.0","gateway":"192.168.101.1","networkCidr":"192.168.101.0/24","ipVersion":4,"prefixLen":24,"ipRangeType":"Normal","createDate":"Jul 22, 2022 12:11:54 PM","lastOpDate":"Jul 22, 2022 12:11:54 PM"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"745c8be45f824a7eb8f88ad8e339edf2","success":true,"id":"f0af35339c0443b8b5f916fb63b34a46","createdTime":1658463115088}
```

3. ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/network-services
   - networkServices：必填项，设置要加载的网络服务
   - l3NetworkUuid：必填项，指定扁平网络UUID
 返回结果：

```
{"inventory":{"uuid":"1abe265517d54df3b237c9bbb3023d3a","name":"L3Network1","type":"L3BasicNetwork","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","l2NetworkUuid":"3f50451988a1485bb47d6830abd6c17e","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jul 22, 2022 12:06:51 PM","lastOpDate":"Jul 22, 2022 12:06:51 PM","ipRanges":[{"uuid":"3e387e4419914167b1e70b774785f632","l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","name":"Test-IP-Range","startIp":"192.168.101.10","endIp":"192.168.101.250","netmask":"255.255.255.0","gateway":"192.168.101.1","networkCidr":"192.168.101.0/24","ipVersion":4,"prefixLen":24,"createDate":"Jul 22, 2022 12:11:54 PM","lastOpDate":"Jul 22, 2022 12:11:54 PM"}],"networkServices":[{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"VipQos"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"DNS"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"3cda74aba607461680e476892928981a","networkServiceType":"SecurityGroup"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"3d7f1619e20249809e65e6223b77907e","networkServiceType":"LoadBalancer"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"HostRoute"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"Eip"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"DHCP"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"Userdata"}],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"3cb72144a0494288ac17d0976cc1276e","success":true,"id":"40bf50edd78145baa3c9e5e75cc96e4e","createdTime":1658468176328}
```

4. l3NetworkUuid：必填项，指定扁平网络UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/dns
   - l3NetworkUuid：必填项，指定扁平网络UUID
   - dns：必填项，指定DNS地址
 返回结果：

```
{"inventory":{"uuid":"1abe265517d54df3b237c9bbb3023d3a","name":"L3Network1","type":"L3BasicNetwork","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","l2NetworkUuid":"3f50451988a1485bb47d6830abd6c17e","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jul 22, 2022 12:06:51 PM","lastOpDate":"Jul 22, 2022 12:06:51 PM","dns":["223.5.5.5"],"ipRanges":[{"uuid":"3e387e4419914167b1e70b774785f632","l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","name":"Test-IP-Range","startIp":"192.168.101.10","endIp":"192.168.101.250","netmask":"255.255.255.0","gateway":"192.168.101.1","networkCidr":"192.168.101.0/24","ipVersion":4,"prefixLen":24,"createDate":"Jul 22, 2022 12:11:54 PM","lastOpDate":"Jul 22, 2022 12:11:54 PM"}],"networkServices":[{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"VipQos"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"3d7f1619e20249809e65e6223b77907e","networkServiceType":"LoadBalancer"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"DHCP"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"Eip"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"HostRoute"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"DNS"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"c6953edcffdd4481aaac5f4966f6ea92","networkServiceType":"Userdata"},{"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","networkServiceProviderUuid":"3cda74aba607461680e476892928981a","networkServiceType":"SecurityGroup"}],"hostRoute":[{"id":1,"l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","prefix":"169.254.169.254/32","nexthop":"192.168.101.98","createDate":"Jul 22, 2022 1:51:45 PM","lastOpDate":"Jul 22, 2022 1:51:45 PM"}]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"cb620a112fbd4485b8786c60c318b69f","success":true,"id":"a1d09587a36e4b4bbd070457d1131898","createdTime":1658469105684}
```

5. dns：必填项，指定DNS地址
