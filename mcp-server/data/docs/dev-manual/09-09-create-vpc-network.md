# 如何创建VPC网络并加载网络服务和VPC路由器 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.9.html*

---

## 如何创建VPC网络并加载网络服务和VPC路由器



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，创建VPC网络并加载网络服务和VPC路由器。本文主要以管理员身份（admin）登录管理节点系统，创建VPC网络并加载相应的网络服务和VPC路由器。您也可以使用云平台其他已授权账户/用户身份登录系统创建。 调用API查看云主机内部监控数据前，需确保：
 - 云平台已创建二层网络，若未创建二层网络，可参考[二层网络资源相关接口]进行创建。说明: 推荐二层网络和三层网络为一一对应的关系，即一个二层网络仅用于创建一个三层网络。
 - 请提前规划好网络地址段，同一个VPC网络下的地址段不能重叠。
 - 请确保云平台已创建VPC路由器。若未创建VPC路由器，可参考[创建VPC路由器(CreateVpcVRouter)]进行创建。
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
 2. 创建VPC网络
 3. 加载网络服务到VPC网络
 4. 添加IP地址段
 5. 向VPC网络添加DNS
 6. 加载VPC网络至VPC路由器


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"8b0a7837e1fc4549982d739fabf2de9c","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 19, 2022 8:06:42 PM","createDate":"Apr 19, 2022 6:06:42 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks
   - name：必填项，设置VPC网络名称
   - l2NetworkUuid：必填项，指定二层网络UUID
   - category：创建VPC网络时为必填项，指定网络类别，可选值为private
   - type：创建VPC网络时为必填项，指定网络类型，可选值为L3VpcNetwork
   - system：创建VPC网络时为必填项，可选值为false
 返回结果：

```
{"inventory":{"uuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-L3Network","type":"L3VpcNetwork","zoneUuid":"90113f41716c428994c335a359658cd8","l2NetworkUuid":"473fc24161fc4ffa88a8e77efe155584","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Apr 19, 2022 12:37:16 AM","lastOpDate":"Apr 19, 2022 12:37:16 AM","ipRanges":[],"networkServices":[],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"60f24005d4c8475db43ce7056c3df075","success":true,"id":"c5a6e613e13c4e65894cce8273be57c6","createdTime":1650299836259}
```

其中：
   - uuid字段即为所创建成功的VPC网络的UUID
 2. uuid字段即为所创建成功的VPC网络的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/network-services
   - networkServices：必填项，设置要加载的网络服务
   - l3NetworkUuid：必填项，指定VPC网络UUID
 返回结果：

```
{"inventory":{"uuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-L3Network","type":"L3VpcNetwork","zoneUuid":"90113f41716c428994c335a359658cd8","l2NetworkUuid":"473fc24161fc4ffa88a8e77efe155584","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Apr 19, 2022 12:37:16 AM","lastOpDate":"Apr 19, 2022 12:37:16 AM","ipRanges":[],"networkServices":[{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"CentralizedDNS"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"e9557354f98645368dd1a6a67b72a828","networkServiceType":"SecurityGroup"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"SNAT"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"PortForwarding"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"3996dab6bcd34ab1891b8024742aa963","networkServiceType":"DHCP"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"LoadBalancer"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"VipQos"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"Eip"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"IPsec"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"VRouterRoute"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"3996dab6bcd34ab1891b8024742aa963","networkServiceType":"Userdata"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"DNS"}],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"6de33dd7d7084869965daa85514b4daf","success":true,"id":"101ad0ab97d4449ba9158e355e160979","createdTime":1650300094389}
```

3. l3NetworkUuid：必填项，指定VPC网络UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/ip-ranges
   - l3NetworkUuid：必填项，指定VPC网络UUID
   - name：必填项，指定VPC网络IP地址段名称
   - startIp：必填项，指定IP地址段的起始地址
   - endIp：必填项，指定IP地址段的结束地址
   - netmask：必填项，指定IP地址段的网络掩码
   - gateway：必填项，指定IP地址段的网关
   - ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）
 返回结果：

```
{"inventory":{"uuid":"d0a66a72bc834345b40d165c585ca1cb","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-IP-Range","startIp":"192.168.70.10","endIp":"192.168.70.250","netmask":"255.255.255.0","gateway":"192.168.70.1","networkCidr":"192.168.80.0/24","ipVersion":4,"prefixLen":24,"ipRangeType":"Normal","createDate":"Apr 19, 2022 12:47:26 AM","lastOpDate":"Apr 19, 2022 12:47:26 AM"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"b7f5149621f94b908ef418c3fcd29679","success":true,"id":"580b05fe1693414798f0f6aaabeeb529","createdTime":1650300446964}
```

4. ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks/l3NetworkUuid/dns
   - l3NetworkUuid：必填项，指定VPC网络UUID
   - dns：必填项，指定DNS地址
 返回结果：

```
{"inventory":{"uuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-L3Network","type":"L3VpcNetwork","zoneUuid":"90113f41716c428994c335a359658cd8","l2NetworkUuid":"473fc24161fc4ffa88a8e77efe155584","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Apr 19, 2022 12:37:16 AM","lastOpDate":"Apr 19, 2022 12:37:16 AM","dns":["223.5.5.5"],"ipRanges":[{"uuid":"d0a66a72bc834345b40d165c585ca1cb","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","name":"Test-IP-Range","startIp":"192.168.70.10","endIp":"192.168.70.250","netmask":"255.255.255.0","gateway":"192.168.70.1","networkCidr":"192.168.70.0/24","ipVersion":4,"prefixLen":24,"createDate":"Apr 19, 2022 12:47:26 AM","lastOpDate":"Apr 19, 2022 12:47:26 AM"}],"networkServices":[{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"3996dab6bcd34ab1891b8024742aa963","networkServiceType":"DHCP"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"LoadBalancer"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"3996dab6bcd34ab1891b8024742aa963","networkServiceType":"Userdata"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"PortForwarding"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"IPsec"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"VRouterRoute"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"DNS"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"VipQos"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"SNAT"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"Eip"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"89a9deba669d42af9a3fe1b503480e54","networkServiceType":"CentralizedDNS"},{"l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","networkServiceProviderUuid":"e9557354f98645368dd1a6a67b72a828","networkServiceType":"SecurityGroup"}],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"e9e3a64077604369bfc14f7a4cfd1c57","success":true,"id":"8af4586d144649879173bcc1d144db3b","createdTime":1650300553408}
```

5. dns：必填项，指定DNS地址
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/vm-instances/vmInstanceUuid/l3-networks/l3NetworkUuid
   - vmInstanceUuid：必填项，指定VPC路由器UUID
   - l3NetworkUuid：必填项，指定VPC网络UUID
   - driverType：选填项，指定驱动类型
 返回结果：

```
{"inventory":{"uuid":"703632f048774e4a91e8c849538e81a7","name":"vrouter","zoneUuid":"90113f41716c428994c335a359658cd8","clusterUuid":"472707c33a2f48bb8628ad1641733c62","imageUuid":"6cde3d29d1344619ae83b27c26bb10ce","hostUuid":"2cda455d62a84bb0bae8de8b6e57153c","lastHostUuid":"2cda455d62a84bb0bae8de8b6e57153c","instanceOfferingUuid":"5b6c9bb6929f4da89c09d57a6f442317","rootVolumeUuid":"15bc8e6026084de1b7c1378079a1ac70","platform":"Linux","defaultL3NetworkUuid":"c3a910a0ce7749acbc4d09a55ebba9d5","type":"ApplianceVm","hypervisorType":"KVM","memorySize":1073741824,"cpuNum":1,"cpuSpeed":0,"allocatorStrategy":"LeastVmPreferredHostAllocatorStrategy","createDate":"Mar 1, 2022 3:01:42 PM","lastOpDate":"Apr 6, 2022 3:40:33 PM","state":"Running","internalId":1,"vmNics":[{"uuid":"a03ddf19f06c4d82ac14db2454dc12f2","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"abc7a5954f903f10b3f0b6918e474e51","l3NetworkUuid":"9d8f9391f45a4fa18109bd51ab71328a","ip":"11.231.20.1","mac":"fa:9f:66:a8:07:03","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"11.231.20.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"abc7a5954f903f10b3f0b6918e474e51","ipRangeUuid":"7f29c7c2637b420e8650eabaaa8b4325","l3NetworkUuid":"9d8f9391f45a4fa18109bd51ab71328a","ipVersion":4,"ip":"11.231.20.1","netmask":"255.255.255.0","gateway":"11.231.20.1","metaData":"4","ipInLong":199693313,"vmNicUuid":"a03ddf19f06c4d82ac14db2454dc12f2","createDate":"Mar 31, 2022 2:44:11 PM","lastOpDate":"Mar 31, 2022 2:44:11 PM"}],"internalName":"vnic1.3","deviceId":3,"type":"VNIC","createDate":"Mar 31, 2022 2:44:11 PM","lastOpDate":"Mar 31, 2022 2:44:11 PM"},{"uuid":"56af12e7f0ab48fa8b57c06cd19a599d","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"d46401ee1be4364ba04eba2dc608ae8d","l3NetworkUuid":"28d73c1cbb7241f38ad775c43715895c","ip":"192.168.40.1","mac":"fa:18:23:3e:a1:05","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.40.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"d46401ee1be4364ba04eba2dc608ae8d","ipRangeUuid":"64242c60293a4c53b7adbadaf3004923","l3NetworkUuid":"28d73c1cbb7241f38ad775c43715895c","ipVersion":4,"ip":"192.168.40.1","netmask":"255.255.255.0","gateway":"192.168.40.1","metaData":"4","ipInLong":3232245761,"vmNicUuid":"56af12e7f0ab48fa8b57c06cd19a599d","createDate":"Apr 18, 2022 6:02:47 PM","lastOpDate":"Apr 18, 2022 6:02:47 PM"}],"internalName":"vnic1.5","deviceId":5,"type":"VNIC","createDate":"Apr 18, 2022 6:02:47 PM","lastOpDate":"Apr 18, 2022 6:02:47 PM"},{"uuid":"79ccf0099bcb46bd9b5ea6c3950e5923","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"8b62316a9be23170805bf0fb0a9951f7","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","ip":"192.168.70.1","mac":"fa:1e:1a:83:6e:07","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.70.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"8b62316a9be23170805bf0fb0a9951f7","ipRangeUuid":"d0a66a72bc834345b40d165c585ca1cb","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","ipVersion":4,"ip":"192.168.70.1","netmask":"255.255.255.0","gateway":"192.168.70.1","metaData":"4","ipInLong":3232253441,"vmNicUuid":"79ccf0099bcb46bd9b5ea6c3950e5923","createDate":"Apr 19, 2022 12:50:45 AM","lastOpDate":"Apr 19, 2022 12:50:46 AM"}],"internalName":"vnic1.7","deviceId":7,"type":"VNIC","createDate":"Apr 19, 2022 12:50:45 AM","lastOpDate":"Apr 19, 2022 12:50:46 AM"},{"uuid":"8d3b004414414ef2a527be4970de7919","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"71c2833592863e05a9e979a7cf4035fc","l3NetworkUuid":"bc4efdf20cbc48ea812cf93249aedce4","ip":"192.168.50.1","mac":"fa:64:29:85:cd:06","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.50.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"71c2833592863e05a9e979a7cf4035fc","ipRangeUuid":"25921a1b3c9647c9b0faa8eca74f716a","l3NetworkUuid":"bc4efdf20cbc48ea812cf93249aedce4","ipVersion":4,"ip":"192.168.50.1","netmask":"255.255.255.0","gateway":"192.168.50.1","metaData":"4","ipInLong":3232248321,"vmNicUuid":"8d3b004414414ef2a527be4970de7919","createDate":"Apr 18, 2022 6:05:59 PM","lastOpDate":"Apr 18, 2022 6:06:02 PM"}],"internalName":"vnic1.6","deviceId":6,"type":"VNIC","createDate":"Apr 18, 2022 6:05:59 PM","lastOpDate":"Apr 18, 2022 6:06:03 PM"},{"uuid":"1cd65a815fad499080b5c924bd3ff7a1","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"645802f264c7359794eba3d9d34badef","l3NetworkUuid":"a377e39e4d284ad4a2c56ce77c4851f9","ip":"11.221.1.41","mac":"fa:aa:3c:fc:ff:04","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"11.221.1.1","metaData":"8","driverType":"virtio","usedIps":[{"uuid":"645802f264c7359794eba3d9d34badef","ipRangeUuid":"c20595af6ee74278a01826a307a40905","l3NetworkUuid":"a377e39e4d284ad4a2c56ce77c4851f9","ipVersion":4,"ip":"11.221.1.41","netmask":"255.255.255.0","gateway":"11.221.1.1","ipInLong":199033129,"vmNicUuid":"1cd65a815fad499080b5c924bd3ff7a1","createDate":"Mar 31, 2022 2:48:04 PM","lastOpDate":"Mar 31, 2022 2:48:04 PM"}],"internalName":"vnic1.4","deviceId":4,"type":"VNIC","createDate":"Mar 31, 2022 2:48:04 PM","lastOpDate":"Mar 31, 2022 2:48:04 PM"},{"uuid":"5cecaeee99044e42a029d2d3d66aa348","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"d6e312b739fb37cfb49b740ce3165ccb","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ip":"192.168.30.1","mac":"fa:51:78:6d:ac:02","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.30.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"d6e312b739fb37cfb49b740ce3165ccb","ipRangeUuid":"c3430ab08df24e839d5ba96e08474496","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ipVersion":4,"ip":"192.168.30.1","netmask":"255.255.255.0","gateway":"192.168.30.1","metaData":"4","ipInLong":3232243201,"vmNicUuid":"5cecaeee99044e42a029d2d3d66aa348","createDate":"Mar 1, 2022 3:41:40 PM","lastOpDate":"Mar 1, 2022 3:41:41 PM"}],"internalName":"vnic1.2","deviceId":2,"type":"VNIC","createDate":"Mar 1, 2022 3:41:40 PM","lastOpDate":"Mar 1, 2022 3:41:41 PM"},{"uuid":"f6c24fe9d3834079bc69e6fcf783029d","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"a95b9fcd17b73180a880286448662736","l3NetworkUuid":"929bd10e55c248d1a3329f715ee80479","ip":"10.72.209.40","mac":"fa:c7:af:9b:fc:00","netmask":"255.0.0.0","gateway":"10.0.0.1","metaData":"2","driverType":"virtio","usedIps":[{"uuid":"a95b9fcd17b73180a880286448662736","ipRangeUuid":"443f66e955d04c74a740b1d6f1bcc10e","l3NetworkUuid":"929bd10e55c248d1a3329f715ee80479","ipVersion":4,"ip":"10.72.209.40","netmask":"255.0.0.0","gateway":"10.0.0.1","ipInLong":172544296,"vmNicUuid":"f6c24fe9d3834079bc69e6fcf783029d","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"}],"internalName":"vnic1.0","deviceId":0,"type":"VNIC","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"},{"uuid":"0348b41d14e848ee8bef13e08a6a7ab3","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"bb839a04384f42739ea2aeeaa8d7236a","l3NetworkUuid":"c3a910a0ce7749acbc4d09a55ebba9d5","ip":"192.168.10.20","mac":"fa:5a:b7:c1:d5:01","netmask":"255.255.255.0","gateway":"192.168.10.1","metaData":"1","driverType":"virtio","usedIps":[{"uuid":"bb839a04384f42739ea2aeeaa8d7236a","ipRangeUuid":"94afd94e865c467dadabfea15567b91b","l3NetworkUuid":"c3a910a0ce7749acbc4d09a55ebba9d5","ipVersion":4,"ip":"192.168.10.20","netmask":"255.255.255.0","gateway":"192.168.10.1","ipInLong":3232238100,"vmNicUuid":"0348b41d14e848ee8bef13e08a6a7ab3","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"}],"internalName":"vnic1.1","deviceId":1,"type":"VNIC","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"}],"allVolumes":[{"uuid":"15bc8e6026084de1b7c1378079a1ac70","name":"ROOT-for-vrouter","description":"Root volume for VM[uuid:703632f048774e4a91e8c849538e81a7]","primaryStorageUuid":"96b3b9e6cf744f93bde1d03ab49e6c7a","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","rootImageUuid":"6cde3d29d1344619ae83b27c26bb10ce","installPath":"/cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-15bc8e6026084de1b7c1378079a1ac70/15bc8e6026084de1b7c1378079a1ac70.qcow2","type":"Root","format":"qcow2","size":42949672960,"actualSize":764870656,"deviceId":0,"state":"Enabled","status":"Ready","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:46 PM","isShareable":false}],"vmCdRoms":[],"guestOsType":"Linux"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"e5a692c6285c4ad5af5f7fca1118028a","success":true,"id":"d8fa1a8332264b0c91b68a2896b895a0","createdTime":1650300645789}
```

6. driverType：选填项，指定驱动类型
