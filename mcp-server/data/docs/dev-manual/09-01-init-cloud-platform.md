# 如何初始化云平台 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.1.html*

---

## 如何初始化云平台



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API初始化云平台。本文以管理员身份（admin）登录管理节点系统，介绍如何初始化云平台。 本文所使用的资源组合如下：
 - 集群类型：KVM集群
 - 镜像服务器类型：镜像仓库
 - 主存储类型：本地存储
 - 二层网络类型：NoVlan
 - 三层网络类型：扁平网络
  API调用流程概览：
 1. 登录云平台
 2. 创建区域
 3. 创建集群
 4. 添加物理机
 5. 添加镜像服务器
 6. 镜像服务器加载区域
 7. 添加主存储
 8. 主存储加载集群
 9. 创建计算规格
 10. 添加镜像
 11. 创建二层网络
 12. 二层网络加载集群
 13. 创建三层网络
 14. 添加IP地址段


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"1c1c7cfa1c254e3c9ebc003186b26ea2","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Jul 21, 2022 3:54:12 PM","createDate":"Jul 21, 2022 1:54:12 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zones
   - name：必填项，设置区域名称
 返回结果：

```
{"inventory":{"uuid":"7e63ce956d5b41598a53cf79b59ce967","name":"TestZone","description":"test zone","state":"Enabled","type":"zstack","createDate":"Jul 21, 2022 4:02:47 PM","lastOpDate":"Jul 21, 2022 4:02:47 PM"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"c49bd398fdfa4fdebe7ec3cf2db7c86d","success":true,"id":"eb0a234d63b24bb2b5327259038645bd","createdTime":1658390567679}
```

其中：
   - uuid字段即为所创建成功的区域的UUID
 2. uuid字段即为所创建成功的区域的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/clusters
   - zoneUuid：必填项，指定集群所在区域的UUID
   - name：必填项，设置集群名称
   - hypervisorType：必填项，指定虚拟机管理程序类型，支持Simulation和KVM两种类型集群，本场景设置为KVM
 返回结果：

```
{"inventory":{"name":"cluster1","uuid":"a9779ce0a5ee48c484b248b7ef4e42c8","description":"test","state":"Enabled","hypervisorType":"KVM","createDate":"Jul 21, 2022 4:38:46 PM","lastOpDate":"Jul 21, 2022 4:38:46 PM","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","type":"zstack"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"28007ffe9bd3409ea8e3d12cd5c9bf32","success":true,"id":"97f6af67adaf4d948ba50d9e16cdc464","createdTime":1658392726448}
```

其中：
   - uuid字段即为所创建成功的集群的UUID
 3. uuid字段即为所创建成功的集群的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/hosts/kvm
   - username：必填项，SSH登录用户名
   - password：必填项，SSH登录密码
   - sshPort：选填项，SSH登录端口号
   - name：必填项，设置物理机名称
   - managementIp：必填项，设置物理机管理节点IP地址
   - clusterUuid：必填项，指定物理机所在集群UUID
 返回结果：

```
{"inventory":{"username":"root","sshPort":22,"zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","name":"Host1","uuid":"3f4530be5fdb4e54a6976a45d47ed53c","clusterUuid":"a9779ce0a5ee48c484b248b7ef4e42c8","managementIp":"127.0.0.1","hypervisorType":"KVM","state":"Enabled","status":"Connected","totalCpuCapacity":40,"availableCpuCapacity":40,"cpuSockets":1,"totalMemoryCapacity":12510146560,"availableMemoryCapacity":12510146560,"cpuNum":4,"architecture":"x86_64","createDate":"Jul 21, 2022 5:24:14 PM","lastOpDate":"Jul 21, 2022 5:27:18 PM"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"b62d1f95320c4843866e06bf05b3b6ff","success":true,"id":"d4355d8f151f4198a27a662de7a3f2e5","createdTime":1658395454090}
```

其中：
   - uuid字段即为所添加成功的物理机的UUID
 4. uuid字段即为所添加成功的物理机的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/backup-storage/image-store
   - hostname：必填项，用作镜像服务器的物理主机IP地址
   - username：必填项，SSH登录用户名
   - password：必填项，SSH登录密码
   - sshPort：选填项，SSH登录端口号
   - url：必填项，设置镜像服务器本地数据存放路径
   - name：必填项，设置镜像服务器名称
   - importImages：选填项，选择是否导入镜像
 返回结果：

```
{"inventory":{"hostname":"10.0.191.107","username":"root","sshPort":22,"uuid":"f0fe23c070ec4e42b31d176cb007f640","name":"ImageStore","url":"/cloud_bs","totalCapacity":39486861312,"availableCapacity":18421432320,"type":"ImageStoreBackupStorage","state":"Enabled","status":"Connected","createDate":"Jul 21, 2022 5:50:00 PM","lastOpDate":"Jul 21, 2022 5:50:19 PM","attachedZoneUuids":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"ea940b17e4d5405cbb74a347d879e285","success":true,"id":"aa2d8d6d20114fbc82c4e3f77805ecfa","createdTime":1658397000393}
```

其中：
   - uuid字段即为所添加成功的镜像服务器的UUID
 5. uuid字段即为所添加成功的镜像服务器的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zones/zoneUuid/backup-storage/backupStorageUuid
 返回结果：

```
{"inventory":{"hostname":"10.0.191.107","username":"root","sshPort":22,"uuid":"f0fe23c070ec4e42b31d176cb007f640","name":"ImageStore","url":"/cloud_bs","totalCapacity":39486861312,"availableCapacity":18215878656,"type":"ImageStoreBackupStorage","state":"Enabled","status":"Connected","createDate":"Jul 21, 2022 5:50:00 PM","lastOpDate":"Jul 22, 2022 11:32:56 AM","attachedZoneUuids":["7e63ce956d5b41598a53cf79b59ce967"]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"60cb6b6fbaf04f87a71372220c07eb8d","success":true,"id":"8395983d98f1462fb653c35c9803fc2d","createdTime":1658460796601}
```

6. HTTP请求URL为：http://localhost:8080/zstack/v1/zones/zoneUuid/backup-storage/backupStorageUuid
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/primary-storage/local-storage
   - url：必填项，设置主存储本地数据存放路径
   - name：必填项，设置主存储名称
   - zoneUuid：必填项，指定主存储所在的区域UUID
 返回结果：

```
{"inventory":{"uuid":"30e757fdce01424689fc3a85dc86b60f","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","name":"PS1","url":"/cloud_ps","totalCapacity":0,"availableCapacity":0,"totalPhysicalCapacity":0,"availablePhysicalCapacity":0,"type":"LocalStorage","state":"Enabled","status":"Connected","mountPath":"/cloud_ps","createDate":"Jul 21, 2022 5:55:57 PM","lastOpDate":"Jul 21, 2022 5:55:58 PM","attachedClusterUuids":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"10938de93fba48f7b6417bae385d968a","success":true,"id":"d118aefcc89c4f348d5a1c66d715b59b","createdTime":1658397357777}
```

其中：
   - uuid字段即为所添加成功的主存储的UUID
 7. uuid字段即为所添加成功的主存储的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/clusters/clusterUuid/primary-storage/primaryStorageUuid
 返回结果：

```
{"inventory":{"uuid":"30e757fdce01424689fc3a85dc86b60f","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","name":"PS1","url":"/cloud_ps","totalCapacity":39486861312,"availableCapacity":18411601920,"totalPhysicalCapacity":39486861312,"availablePhysicalCapacity":18411601920,"systemUsedCapacity":21075259392,"type":"LocalStorage","state":"Enabled","status":"Connected","mountPath":"/cloud_ps","createDate":"Jul 21, 2022 5:55:57 PM","lastOpDate":"Jul 21, 2022 5:55:58 PM","attachedClusterUuids":["a9779ce0a5ee48c484b248b7ef4e42c8"]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"5892f68023294feba295e73a4f2b5040","success":true,"id":"3360eda02a09401e828458d5933e5f58","createdTime":1658397709196}
```

8. HTTP请求URL为：http://localhost:8080/zstack/v1/clusters/clusterUuid/primary-storage/primaryStorageUuid
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/instance-offerings
   - name：必填项，设置计算规格名称
   - cpuNum：必填项，指定用计算规格所创建云主机的CPU核数目
   - memorySize：必填项，指定用计算规格所创建云主机的内存大小，单位为Byte
 返回结果：

```
{"inventory":{"uuid":"35ae1685021c44888f81d9afee704300","name":"vrouter","zoneUuid":"90113f41716c428994c335a359658cd8","clusterUuid":"472707c33a2f48bb8628ad1641733c62","imageUuid":"6cde3d29d1344619ae83b27c26bb10ce","hostUuid":"2cda455d62a84bb0bae8de8b6e57153c","lastHostUuid":"2cda455d62a84bb0bae8de8b6e57153c","instanceOfferingUuid":"5b6c9bb6929f4da89c09d57a6f442317","rootVolumeUuid":"15bc8e6026084de1b7c1378079a1ac70","platform":"Linux","defaultL3NetworkUuid":"c3a910a0ce7749acbc4d09a55ebba9d5","type":"ApplianceVm","hypervisorType":"KVM","memorySize":1073741824,"cpuNum":1,"cpuSpeed":0,"allocatorStrategy":"LeastVmPreferredHostAllocatorStrategy","createDate":"Mar 1, 2022 3:01:42 PM","lastOpDate":"Apr 6, 2022 3:40:33 PM","state":"Running","internalId":1,"vmNics":[{"uuid":"a03ddf19f06c4d82ac14db2454dc12f2","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"abc7a5954f903f10b3f0b6918e474e51","l3NetworkUuid":"9d8f9391f45a4fa18109bd51ab71328a","ip":"11.231.20.1","mac":"fa:9f:66:a8:07:03","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"11.231.20.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"abc7a5954f903f10b3f0b6918e474e51","ipRangeUuid":"7f29c7c2637b420e8650eabaaa8b4325","l3NetworkUuid":"9d8f9391f45a4fa18109bd51ab71328a","ipVersion":4,"ip":"11.231.20.1","netmask":"255.255.255.0","gateway":"11.231.20.1","metaData":"4","ipInLong":199693313,"vmNicUuid":"a03ddf19f06c4d82ac14db2454dc12f2","createDate":"Mar 31, 2022 2:44:11 PM","lastOpDate":"Mar 31, 2022 2:44:11 PM"}],"internalName":"vnic1.3","deviceId":3,"type":"VNIC","createDate":"Mar 31, 2022 2:44:11 PM","lastOpDate":"Mar 31, 2022 2:44:11 PM"},{"uuid":"56af12e7f0ab48fa8b57c06cd19a599d","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"d46401ee1be4364ba04eba2dc608ae8d","l3NetworkUuid":"28d73c1cbb7241f38ad775c43715895c","ip":"192.168.40.1","mac":"fa:18:23:3e:a1:05","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.40.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"d46401ee1be4364ba04eba2dc608ae8d","ipRangeUuid":"64242c60293a4c53b7adbadaf3004923","l3NetworkUuid":"28d73c1cbb7241f38ad775c43715895c","ipVersion":4,"ip":"192.168.40.1","netmask":"255.255.255.0","gateway":"192.168.40.1","metaData":"4","ipInLong":3232245761,"vmNicUuid":"56af12e7f0ab48fa8b57c06cd19a599d","createDate":"Apr 18, 2022 6:02:47 PM","lastOpDate":"Apr 18, 2022 6:02:47 PM"}],"internalName":"vnic1.5","deviceId":5,"type":"VNIC","createDate":"Apr 18, 2022 6:02:47 PM","lastOpDate":"Apr 18, 2022 6:02:47 PM"},{"uuid":"79ccf0099bcb46bd9b5ea6c3950e5923","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"8b62316a9be23170805bf0fb0a9951f7","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","ip":"192.168.70.1","mac":"fa:1e:1a:83:6e:07","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.70.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"8b62316a9be23170805bf0fb0a9951f7","ipRangeUuid":"d0a66a72bc834345b40d165c585ca1cb","l3NetworkUuid":"f4c5dc15ae5c4e2b9eefc1197d406d8d","ipVersion":4,"ip":"192.168.70.1","netmask":"255.255.255.0","gateway":"192.168.70.1","metaData":"4","ipInLong":3232253441,"vmNicUuid":"79ccf0099bcb46bd9b5ea6c3950e5923","createDate":"Apr 19, 2022 12:50:45 AM","lastOpDate":"Apr 19, 2022 12:50:46 AM"}],"internalName":"vnic1.7","deviceId":7,"type":"VNIC","createDate":"Apr 19, 2022 12:50:45 AM","lastOpDate":"Apr 19, 2022 12:50:46 AM"},{"uuid":"8d3b004414414ef2a527be4970de7919","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"71c2833592863e05a9e979a7cf4035fc","l3NetworkUuid":"bc4efdf20cbc48ea812cf93249aedce4","ip":"192.168.50.1","mac":"fa:64:29:85:cd:06","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.50.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"71c2833592863e05a9e979a7cf4035fc","ipRangeUuid":"25921a1b3c9647c9b0faa8eca74f716a","l3NetworkUuid":"bc4efdf20cbc48ea812cf93249aedce4","ipVersion":4,"ip":"192.168.50.1","netmask":"255.255.255.0","gateway":"192.168.50.1","metaData":"4","ipInLong":3232248321,"vmNicUuid":"8d3b004414414ef2a527be4970de7919","createDate":"Apr 18, 2022 6:05:59 PM","lastOpDate":"Apr 18, 2022 6:06:02 PM"}],"internalName":"vnic1.6","deviceId":6,"type":"VNIC","createDate":"Apr 18, 2022 6:05:59 PM","lastOpDate":"Apr 18, 2022 6:06:03 PM"},{"uuid":"1cd65a815fad499080b5c924bd3ff7a1","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"645802f264c7359794eba3d9d34badef","l3NetworkUuid":"a377e39e4d284ad4a2c56ce77c4851f9","ip":"11.221.1.41","mac":"fa:aa:3c:fc:ff:04","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"11.221.1.1","metaData":"8","driverType":"virtio","usedIps":[{"uuid":"645802f264c7359794eba3d9d34badef","ipRangeUuid":"c20595af6ee74278a01826a307a40905","l3NetworkUuid":"a377e39e4d284ad4a2c56ce77c4851f9","ipVersion":4,"ip":"11.221.1.41","netmask":"255.255.255.0","gateway":"11.221.1.1","ipInLong":199033129,"vmNicUuid":"1cd65a815fad499080b5c924bd3ff7a1","createDate":"Mar 31, 2022 2:48:04 PM","lastOpDate":"Mar 31, 2022 2:48:04 PM"}],"internalName":"vnic1.4","deviceId":4,"type":"VNIC","createDate":"Mar 31, 2022 2:48:04 PM","lastOpDate":"Mar 31, 2022 2:48:04 PM"},{"uuid":"5cecaeee99044e42a029d2d3d66aa348","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"d6e312b739fb37cfb49b740ce3165ccb","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ip":"192.168.30.1","mac":"fa:51:78:6d:ac:02","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.30.1","metaData":"4","driverType":"virtio","usedIps":[{"uuid":"d6e312b739fb37cfb49b740ce3165ccb","ipRangeUuid":"c3430ab08df24e839d5ba96e08474496","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ipVersion":4,"ip":"192.168.30.1","netmask":"255.255.255.0","gateway":"192.168.30.1","metaData":"4","ipInLong":3232243201,"vmNicUuid":"5cecaeee99044e42a029d2d3d66aa348","createDate":"Mar 1, 2022 3:41:40 PM","lastOpDate":"Mar 1, 2022 3:41:41 PM"}],"internalName":"vnic1.2","deviceId":2,"type":"VNIC","createDate":"Mar 1, 2022 3:41:40 PM","lastOpDate":"Mar 1, 2022 3:41:41 PM"},{"uuid":"f6c24fe9d3834079bc69e6fcf783029d","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"a95b9fcd17b73180a880286448662736","l3NetworkUuid":"929bd10e55c248d1a3329f715ee80479","ip":"10.72.209.40","mac":"fa:c7:af:9b:fc:00","netmask":"255.0.0.0","gateway":"10.0.0.1","metaData":"2","driverType":"virtio","usedIps":[{"uuid":"a95b9fcd17b73180a880286448662736","ipRangeUuid":"443f66e955d04c74a740b1d6f1bcc10e","l3NetworkUuid":"929bd10e55c248d1a3329f715ee80479","ipVersion":4,"ip":"10.72.209.40","netmask":"255.0.0.0","gateway":"10.0.0.1","ipInLong":172544296,"vmNicUuid":"f6c24fe9d3834079bc69e6fcf783029d","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"}],"internalName":"vnic1.0","deviceId":0,"type":"VNIC","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"},{"uuid":"0348b41d14e848ee8bef13e08a6a7ab3","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","usedIpUuid":"bb839a04384f42739ea2aeeaa8d7236a","l3NetworkUuid":"c3a910a0ce7749acbc4d09a55ebba9d5","ip":"192.168.10.20","mac":"fa:5a:b7:c1:d5:01","netmask":"255.255.255.0","gateway":"192.168.10.1","metaData":"1","driverType":"virtio","usedIps":[{"uuid":"bb839a04384f42739ea2aeeaa8d7236a","ipRangeUuid":"94afd94e865c467dadabfea15567b91b","l3NetworkUuid":"c3a910a0ce7749acbc4d09a55ebba9d5","ipVersion":4,"ip":"192.168.10.20","netmask":"255.255.255.0","gateway":"192.168.10.1","ipInLong":3232238100,"vmNicUuid":"0348b41d14e848ee8bef13e08a6a7ab3","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"}],"internalName":"vnic1.1","deviceId":1,"type":"VNIC","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:44 PM"}],"allVolumes":[{"uuid":"15bc8e6026084de1b7c1378079a1ac70","name":"ROOT-for-vrouter","description":"Root volume for VM[uuid:703632f048774e4a91e8c849538e81a7]","primaryStorageUuid":"96b3b9e6cf744f93bde1d03ab49e6c7a","vmInstanceUuid":"703632f048774e4a91e8c849538e81a7","rootImageUuid":"6cde3d29d1344619ae83b27c26bb10ce","installPath":"/cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-15bc8e6026084de1b7c1378079a1ac70/15bc8e6026084de1b7c1378079a1ac70.qcow2","type":"Root","format":"qcow2","size":42949672960,"actualSize":764870656,"deviceId":0,"state":"Enabled","status":"Ready","createDate":"Mar 1, 2022 3:01:44 PM","lastOpDate":"Mar 1, 2022 3:01:46 PM","isShareable":false}],"vmCdRoms":[],"guestOsType":"Linux"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"e5a692c6285c4ad5af5f7fca1118028a","success":true,"id":"d8fa1a8332264b0c91b68a2896b895a0","createdTime":1650300645789}
```

其中：
   - uuid字段即为所创建成功的计算规格的UUID
 9. uuid字段即为所创建成功的计算规格的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/images
   - name：必填项，设置镜像名称
   - url：必填项，指定存储所需添加镜像的URL地址
   - mediaType：选填项，指定镜像类型，支持指定RootVolumeTemplate、ISO、DataVolumeTemplate三种类型
 返回结果：

```
{"inventory":{"uuid":"52a6b220d94c4b369b3520c76c90036a","name":"Image1","state":"Enabled","status":"Ready","size":19862528,"actualSize":16384000,"md5Sum":"18133585d5ca2a9c937c37012542ff2177aaad0c300ef258902674dbcd2cd2d3","url":"http://smb.zstack.io/mirror/diskimages/zstack_image_test2.qcow2","mediaType":"RootVolumeTemplate","guestOsType":"Linux","type":"zstack","platform":"Linux","architecture":"x86_64","format":"qcow2","system":false,"virtio":false,"createDate":"Jul 22, 2022 11:54:07 AM","lastOpDate":"Jul 22, 2022 11:54:08 AM","backupStorageRefs":[{"id":1,"imageUuid":"52a6b220d94c4b369b3520c76c90036a","backupStorageUuid":"f0fe23c070ec4e42b31d176cb007f640","installPath":"zstore://52a6b220d94c4b369b3520c76c90036a/a5dd7c062733725b2c3ffa212efeed954d9f7528","status":"Ready","createDate":"Jul 22, 2022 11:54:07 AM","lastOpDate":"Jul 22, 2022 11:54:08 AM"}]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"2a7313b17dac49c98a26a5612133d98a","success":true,"id":"e17b1e12e1f94319bdc831df9afccb86","createdTime":1658462047367}
```

其中：
   - uuid字段即为所创建成功的镜像的UUID
 10. uuid字段即为所创建成功的镜像的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l2-networks/no-vlan
   - name：必填项，设置二层网络名称
   - zoneUuid：必填项，指定二层网络所在区域
   - physicalInterface：必填项，指定二层网络的物理网卡
 返回结果：

```
{"inventory":{"uuid":"3f50451988a1485bb47d6830abd6c17e","name":"L2Network1","description":"Test","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","physicalInterface":"eth0","type":"L2NoVlanNetwork","vSwitchType":"LinuxBridge","createDate":"Jul 22, 2022 12:01:05 PM","lastOpDate":"Jul 22, 2022 12:01:05 PM","attachedClusterUuids":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"8a7d5d42529749ddb1f1e36f47521c46","success":true,"id":"5533402b4dd342f883a626800153f09d","createdTime":1658462465156}
```

其中：
   - uuid字段即为所创建成功的二层网络的UUID
 11. uuid字段即为所创建成功的二层网络的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l2-networks/l2NetworkUuid/clusters/clusterUuid
   - name：必填项，设置二层网络名称
   - zoneUuid：必填项，指定二层网络所在区域
   - physicalInterface：必填项，指定二层网络的物理网卡
 返回结果：

```
{"inventory":{"uuid":"3f50451988a1485bb47d6830abd6c17e","name":"L2Network1","description":"Test","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","physicalInterface":"eth0","type":"L2NoVlanNetwork","vSwitchType":"LinuxBridge","createDate":"Jul 22, 2022 12:01:05 PM","lastOpDate":"Jul 22, 2022 12:01:05 PM","attachedClusterUuids":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"8a7d5d42529749ddb1f1e36f47521c46","success":true,"id":"5533402b4dd342f883a626800153f09d","createdTime":1658462465156}
```

12. physicalInterface：必填项，指定二层网络的物理网卡
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/l3-networks
   - name：必填项，设置三层网络名称
   - type：必填项，指定三层网络类型，支持指定L3BasicNetwork和L3VpcNetwork，本场景创建扁平网络，需设置为L3BasicNetwork
   - l2NetworkUuid：必填项，指定用于创建三层网络的二层网络UUID
   - category：必填项，指定三层网络类别，支持指定Public、Private、和System，本场景创建扁平网络，需设置为Private
   - system：创建扁平网络网络时为必填项，可选值为false
 返回结果：

```
{"inventory":{"uuid":"1abe265517d54df3b237c9bbb3023d3a","name":"L3Network1","type":"L3BasicNetwork","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","l2NetworkUuid":"3f50451988a1485bb47d6830abd6c17e","state":"Enabled","system":false,"category":"Private","ipVersion":4,"createDate":"Jul 22, 2022 12:06:51 PM","lastOpDate":"Jul 22, 2022 12:06:51 PM","ipRanges":[],"networkServices":[],"hostRoute":[]},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"44cb6abe04d14f74be7747ce6b9fb654","success":true,"id":"93a71b9c6f904fd18e2bd5514338755e","createdTime":1658462811774}
```

其中：
   - uuid字段即为所创建成功的三层网络的UUID
 13. uuid字段即为所创建成功的三层网络的UUID
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

14. ipRangeType ：选填项，指定IP地址段类型，包括普通地址段（Normal）和地址池（AddressPool）


至此，云平台初始化已完成。若用户需创建云主机，可参考[如何创建加载数据云盘的云主机]。
