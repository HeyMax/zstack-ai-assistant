# 如何创建加载数据云盘的云主机 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.2.html*

---

## 如何创建加载数据云盘的云主机



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API创建云主机。本文主要以管理员身份（admin）登录管理节点系统，介绍如何创建一个加载数据云盘的云主机。您也可以使用云平台其他已授权账户/用户身份登录系统创建。 调用API创建云主机前，需确保：
 - 云主机所需的物理机、主存储、镜像、计算规格、二层网络、三层网络等资源均已准备就绪。详细可参考[如何初始化云平台]。
  API调用流程概览：
 1. 登录云平台
 2. 创建云盘规格
 3. 创建云主机


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
   - HTTP请求URL为：http://localhost:8080/zstack/v1/disk-offerings
   - name：必填项，设置云盘规格名称
   - diskSize：必填项，设置用该云盘规格所创云盘的大小，单位为Byte
 返回结果：

```
{"inventory":{"uuid":"f02c541041d3481d84abc9f748a11937","name":"diskOffering1","diskSize":21474836480,"sortKey":0,"state":"Enabled","type":"DefaultDiskOfferingType","createDate":"Jul 22, 2022 12:21:02 PM","lastOpDate":"Jul 22, 2022 12:21:02 PM","allocatorStrategy":"DefaultPrimaryStorageAllocationStrategy"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"e9552019273d4a728b2cf7bf09ad66a3","success":true,"id":"5ba073ca4aa74edda479a6ca3c7cc623","createdTime":1658463662414}
```

其中：
   - uuid字段即为所创建成功的云盘规格的UUID
 2. uuid字段即为所创建成功的云盘规格的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/vm-instances
   - name：必填项，设置云主机名称
   - instanceOfferingUuid：必填项，指定用于创建云主机的计算规格的UUID
   - imageUuid：必填项，指定用于创建云主机的镜像的UUID
   - dataDiskOfferingUuids：选填项，指定用于创建数据云盘所使用的云盘规格UUID，云盘创建成功后，会自动加载至云主机
   - l3NetworkUuids：必填项，指定云主机所在三层网络的UUID，支持指定一个或多个三层网络
   - clusterUuid：选填项，用于指定云主机所在物理机集群
   - strategy：选填项，用于设置云主机创建完成后是否立即启动
 返回结果：

```
{"inventory":{"uuid":"6ee5990c5c4f4fdabb755148b1dbaaa2","name":"VM1","description":"This is a test VM instance","zoneUuid":"7e63ce956d5b41598a53cf79b59ce967","clusterUuid":"a9779ce0a5ee48c484b248b7ef4e42c8","imageUuid":"52a6b220d94c4b369b3520c76c90036a","hostUuid":"3f4530be5fdb4e54a6976a45d47ed53c","lastHostUuid":"3f4530be5fdb4e54a6976a45d47ed53c","instanceOfferingUuid":"35ae1685021c44888f81d9afee704300","rootVolumeUuid":"cb04ce84aa7847c0bed050d1eb542c1c","platform":"Linux","architecture":"x86_64","defaultL3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","type":"UserVm","hypervisorType":"KVM","memorySize":1073741824,"cpuNum":1,"cpuSpeed":0,"allocatorStrategy":"LeastVmPreferredHostAllocatorStrategy","createDate":"Jul 22, 2022 1:15:27 PM","lastOpDate":"Jul 22, 2022 1:15:32 PM","state":"Running","internalId":5,"vmNics":[{"uuid":"91362c6735194c9e9a6edbb1a1bb95d8","vmInstanceUuid":"6ee5990c5c4f4fdabb755148b1dbaaa2","usedIpUuid":"ff06befe00f13152aa2893134d961848","l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","ip":"192.168.101.45","mac":"fa:14:a3:64:ce:00","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.101.1","driverType":"virtio","usedIps":[{"uuid":"ff06befe00f13152aa2893134d961848","ipRangeUuid":"3e387e4419914167b1e70b774785f632","l3NetworkUuid":"1abe265517d54df3b237c9bbb3023d3a","ipVersion":4,"ip":"192.168.101.45","netmask":"255.255.255.0","gateway":"192.168.101.1","ipInLong":3232261421,"vmNicUuid":"91362c6735194c9e9a6edbb1a1bb95d8","createDate":"Jul 22, 2022 1:15:28 PM","lastOpDate":"Jul 22, 2022 1:15:28 PM"}],"internalName":"vnic5.0","deviceId":0,"type":"VNIC","createDate":"Jul 22, 2022 1:15:28 PM","lastOpDate":"Jul 22, 2022 1:15:28 PM"}],"allVolumes":[{"uuid":"6b82dfbd37ad4869b4c07287b7bae0ac","name":"DATA-for-VM1","description":"DataVolume-6ee5990c5c4f4fdabb755148b1dbaaa2","primaryStorageUuid":"30e757fdce01424689fc3a85dc86b60f","vmInstanceUuid":"6ee5990c5c4f4fdabb755148b1dbaaa2","diskOfferingUuid":"f02c541041d3481d84abc9f748a11937","installPath":"/cloud_ps/dataVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-6b82dfbd37ad4869b4c07287b7bae0ac/6b82dfbd37ad4869b4c07287b7bae0ac.qcow2","type":"Data","format":"qcow2","size":8589934592,"actualSize":0,"deviceId":1,"state":"Enabled","status":"Ready","createDate":"Jul 22, 2022 1:15:28 PM","lastOpDate":"Jul 22, 2022 1:15:30 PM","isShareable":false},{"uuid":"cb04ce84aa7847c0bed050d1eb542c1c","name":"ROOT-for-VM1","description":"Root volume for VM[uuid:6ee5990c5c4f4fdabb755148b1dbaaa2]","primaryStorageUuid":"30e757fdce01424689fc3a85dc86b60f","vmInstanceUuid":"6ee5990c5c4f4fdabb755148b1dbaaa2","rootImageUuid":"52a6b220d94c4b369b3520c76c90036a","installPath":"/cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-cb04ce84aa7847c0bed050d1eb542c1c/cb04ce84aa7847c0bed050d1eb542c1c.qcow2","type":"Root","format":"qcow2","size":19862528,"actualSize":16384000,"deviceId":0,"state":"Enabled","status":"Ready","createDate":"Jul 22, 2022 1:15:28 PM","lastOpDate":"Jul 22, 2022 1:15:30 PM","isShareable":false}],"vmCdRoms":[{"uuid":"f1f86360448240ce8d223dbc1ab37df0","vmInstanceUuid":"6ee5990c5c4f4fdabb755148b1dbaaa2","deviceId":0,"name":"vm-6ee5990c5c4f4fdabb755148b1dbaaa2-cdRom","createDate":"Jul 22, 2022 1:15:28 PM","lastOpDate":"Jul 22, 2022 1:15:28 PM"}],"guestOsType":"Linux"},"type":{"_name":"key.event.API.API_EVENT"},"apiId":"c710bb3e24844f488f85196d9ba1e0b2","success":true,"id":"43e8676207d34302a914b16123e38e88","createdTime":1658466927855}
```

其中：
   - uuid字段即为所创建成功的云主机的UUID
 3. uuid字段即为所创建成功的云主机的UUID
