# 如何查看项目下云主机资源信息 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.12.html*

---

## 如何查看项目下云主机资源信息



ZStack Cloud支持通过普通API调用以及ZQL语句两种方式查询项目下云主机资源信息。

---

## 使用API查看项目下云主机资源信息



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，查看指定项目下云主机资源信息。本文主要以管理员身份（admin）登录管理节点系统查看指定项目下云主机、云盘等资源信息。您也可以使用云平台其他已授权账户/用户身份登录系统查看。 API调用流程概览：
 1. 登录云平台
 2. 查询指定项目的项目信息
 3. 查询项目下的云主机资源信息


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
   - HTTP请求URL为：http://localhost:8080/zstackv1/iam2/projects
   - name=Test：查询名为Test的项目
 返回结果：

```
{"schema":{"inventories[0]":"org.zstack.iam2.entity.IAM2ProjectInventory","inventories[0].attributes[0]":"org.zstack.iam2.entity.IAM2AttributeInventory","inventories[0].attributes[0].type":"org.zstack.iam2.entity.AttributeType","inventories[0].state":"org.zstack.iam2.entity.ProjectState"},"inventories":[{"uuid":"dc95629919d847648255036b8ffb561d","name":"Test","description":"","state":"Enabled","createDate":"Apr 20, 2022 6:43:52 PM","lastOpDate":"Apr 20, 2022 6:46:42 PM","attributes":[{"uuid":"dcda5281e37d475ea7603da10326f5aa","name":"__ProjectRelatedZone__","value":"90113f41716c428994c335a359658cd8","type":"Customized"}],"linkedAccountUuid":"3ae0ad01322b44b69b2cf9a6083477cf"}]}
```

其中：
   - linkedAccountUuid为项目对应的账户UUID
 2. linkedAccountUuid为项目对应的账户UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstackv1/zql
   - zql：查询指定项目下云主机资源信息所使用的语句，需通过URL进行编码
 返回结果：

```
{"results":[{"inventories":[{"uuid":"6f732eee54a048f8b105d30ede826b67","name":"Testbyfangwen-1","description":"","zoneUuid":"90113f41716c428994c335a359658cd8","clusterUuid":"472707c33a2f48bb8628ad1641733c62","imageUuid":"46254de557f94845aae5e8a26fa6aef6","hostUuid":"2cda455d62a84bb0bae8de8b6e57153c","lastHostUuid":"2cda455d62a84bb0bae8de8b6e57153c","instanceOfferingUuid":"7d3afc90915a490aa622f1bff23b4e7a","rootVolumeUuid":"7bac67b0c1a2484c994ec414990cac29","platform":"Linux","architecture":"x86_64","defaultL3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","type":"UserVm","hypervisorType":"KVM","memorySize":1073741824,"cpuNum":1,"cpuSpeed":0,"allocatorStrategy":"LeastVmPreferredHostAllocatorStrategy","createDate":"Apr 20, 2022 6:50:04 PM","lastOpDate":"Apr 20, 2022 6:50:10 PM","state":"Running","internalId":22,"vmNics":[{"uuid":"337d99db52fa44c9980a28a26f1104c1","vmInstanceUuid":"6f732eee54a048f8b105d30ede826b67","usedIpUuid":"899b266ab74835fc85e7a794cf47cedd","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ip":"192.168.30.18","mac":"fa:32:b2:56:26:00","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.30.1","driverType":"virtio","usedIps":[{"uuid":"899b266ab74835fc85e7a794cf47cedd","ipRangeUuid":"c3430ab08df24e839d5ba96e08474496","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ipVersion":4,"ip":"192.168.30.18","netmask":"255.255.255.0","gateway":"192.168.30.1","ipInLong":3232243218,"vmNicUuid":"337d99db52fa44c9980a28a26f1104c1","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM"}],"internalName":"vnic22.0","deviceId":0,"type":"VNIC","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM"}],"allVolumes":[{"uuid":"7bac67b0c1a2484c994ec414990cac29","name":"ROOT-for-Testbyfangwen-1","description":"Root volume for VM[uuid:6f732eee54a048f8b105d30ede826b67]","primaryStorageUuid":"96b3b9e6cf744f93bde1d03ab49e6c7a","vmInstanceUuid":"6f732eee54a048f8b105d30ede826b67","rootImageUuid":"46254de557f94845aae5e8a26fa6aef6","installPath":"/cloud_ps/rootVolumes/acct-3ae0ad01322b44b69b2cf9a6083477cf/vol-7bac67b0c1a2484c994ec414990cac29/7bac67b0c1a2484c994ec414990cac29.qcow2","type":"Root","format":"qcow2","size":12682240,"actualSize":7995392,"deviceId":0,"state":"Enabled","status":"Ready","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM","isShareable":false}],"vmCdRoms":[{"uuid":"0145b2b42803419bb4e1b156e087bd43","vmInstanceUuid":"6f732eee54a048f8b105d30ede826b67","deviceId":0,"name":"vm-6f732eee54a048f8b105d30ede826b67-cdRom","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM"}],"guestOsType":"Linux"},{"uuid":"a58e7bb22d0743ae9047bedbef017f5a","name":"Testbyfangwen-2","description":"","zoneUuid":"90113f41716c428994c335a359658cd8","clusterUuid":"472707c33a2f48bb8628ad1641733c62","imageUuid":"46254de557f94845aae5e8a26fa6aef6","hostUuid":"2cda455d62a84bb0bae8de8b6e57153c","lastHostUuid":"2cda455d62a84bb0bae8de8b6e57153c","instanceOfferingUuid":"7d3afc90915a490aa622f1bff23b4e7a","rootVolumeUuid":"d6cf8b7154ef471db0dba68b80a9ee9e","platform":"Linux","architecture":"x86_64","defaultL3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","type":"UserVm","hypervisorType":"KVM","memorySize":1073741824,"cpuNum":1,"cpuSpeed":0,"allocatorStrategy":"LeastVmPreferredHostAllocatorStrategy","createDate":"Apr 20, 2022 6:50:04 PM","lastOpDate":"Apr 20, 2022 6:50:12 PM","state":"Running","internalId":21,"vmNics":[{"uuid":"3e3910926475416c81a9fd2f34dbc182","vmInstanceUuid":"a58e7bb22d0743ae9047bedbef017f5a","usedIpUuid":"2b3c894924cd316ca2c19ae26e370675","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ip":"192.168.30.15","mac":"fa:bf:3c:94:87:00","hypervisorType":"KVM","netmask":"255.255.255.0","gateway":"192.168.30.1","driverType":"virtio","usedIps":[{"uuid":"2b3c894924cd316ca2c19ae26e370675","ipRangeUuid":"c3430ab08df24e839d5ba96e08474496","l3NetworkUuid":"36a9201f735442e0893ed0d110fdc906","ipVersion":4,"ip":"192.168.30.15","netmask":"255.255.255.0","gateway":"192.168.30.1","ipInLong":3232243215,"vmNicUuid":"3e3910926475416c81a9fd2f34dbc182","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM"}],"internalName":"vnic21.0","deviceId":0,"type":"VNIC","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM"}],"allVolumes":[{"uuid":"d6cf8b7154ef471db0dba68b80a9ee9e","name":"ROOT-for-Testbyfangwen-2","description":"Root volume for VM[uuid:a58e7bb22d0743ae9047bedbef017f5a]","primaryStorageUuid":"96b3b9e6cf744f93bde1d03ab49e6c7a","vmInstanceUuid":"a58e7bb22d0743ae9047bedbef017f5a","rootImageUuid":"46254de557f94845aae5e8a26fa6aef6","installPath":"/cloud_ps/rootVolumes/acct-3ae0ad01322b44b69b2cf9a6083477cf/vol-d6cf8b7154ef471db0dba68b80a9ee9e/d6cf8b7154ef471db0dba68b80a9ee9e.qcow2","type":"Root","format":"qcow2","size":12682240,"actualSize":7995392,"deviceId":0,"state":"Enabled","status":"Ready","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM","isShareable":false}],"vmCdRoms":[{"uuid":"4999b69422f74ff082e3e8262cd614a2","vmInstanceUuid":"a58e7bb22d0743ae9047bedbef017f5a","deviceId":0,"name":"vm-a58e7bb22d0743ae9047bedbef017f5a-cdRom","createDate":"Apr 20, 2022 6:50:05 PM","lastOpDate":"Apr 20, 2022 6:50:05 PM"}],"guestOsType":"Linux"}]}]}
```

其中：
   - inventories字段即为Test项目下的云主机资源信息，该项目下存在名称分别为Testbyfangwen-1和Testbyfangwen-2的云主机
 3. inventories字段即为Test项目下的云主机资源信息，该项目下存在名称分别为Testbyfangwen-1和Testbyfangwen-2的云主机

---

### 使用ZQL查看项目下云主机资源信息



ZStack Cloud支持通过ZQL语句以HTTP方式查看指定项目下云主机、云盘等资源信息。本文主要通过以管理员身份（admin）登录管理节点系统查看指定项目下云主机、云盘等资源信息。您也可以使用云平台其他已授权账户/用户身份登录系统查看。

使用ZQL语句查看云主机信息前，需获取调用ZQL语句所需的Sesion ID。

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
query vminstance where uuid in (query accountresourceref.resourceUuid where accountUuid in (query IAM2ProjectAccountRef.accountUuid where projectUuid='c3e0ad72d7c74e5f8cdf335bec73cb1f'))
```


 - 语义：查询项目下指定云主机的所有信息
 - query关键字、where从句、query子句可参考[ZQL语法]
   - vminstance.uuid：必填项，目标查询返回的云主机UUID
   - projectUuid：必填项，指定项目UUID
 - projectUuid：必填项，指定项目UUID
  ZQL语句返回结果：

```
{
    "results": [
        {
            "inventories": [
                {
                    "allVolumes": [
                        {
                            "actualSize": 33161216,
                            "createDate": "Feb 11, 2022 3:25:43 PM",
                            "description": "Root volume for VM[uuid:0018f969ae074ceaafbef2eb8abcedcd]",
                            "deviceId": 0,
                            "format": "qcow2",
                            "installPath": "/cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-4e5161ca9ad74c18a1f0741a04243f0d/4e5161ca9ad74c18a1f0741a04243f0d.qcow2",
                            "isShareable": false,
                            "lastOpDate": "Feb 11, 2022 3:26:24 PM",
                            "name": "ROOT-for-test",
                            "primaryStorageUuid": "b2218a7a0d0241988faf34d3f0e9f37b",
                            "rootImageUuid": "104702fd8d33433392a3cb583da4c380",
                            "size": 12682240,
                            "state": "Enabled",
                            "status": "Ready",
                            "type": "Root",
                            "uuid": "4e5161ca9ad74c18a1f0741a04243f0d",
                            "vmInstanceUuid": "0018f969ae074ceaafbef2eb8abcedcd"
                        }
                    ],
                    "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
                    "architecture": "x86_64",
                    "clusterUuid": "fe67ba482bc14baeba29084fce027679",
                    "cpuNum": 1,
                    "cpuSpeed": 0,
                    "createDate": "Feb 11, 2022 3:24:42 PM",
                    "defaultL3NetworkUuid": "461aa152f9ca4f02a52f9db420edd686",
                    "description": "",
                    "guestOsType": "Linux",
                    "hypervisorType": "KVM",
                    "imageUuid": "104702fd8d33433392a3cb583da4c380",
                    "instanceOfferingUuid": "ae9e610c887c4fda8a0f914aca5b9196",
                    "lastHostUuid": "c5ee913b1fbe46aba2e4035d037471bf",
                    "lastOpDate": "Mar 11, 2022 1:38:51 PM",
                    "memorySize": 1073741824,
                    "name": "test",
                    "platform": "Linux",
                    "rootVolumeUuid": "4e5161ca9ad74c18a1f0741a04243f0d",
                    "state": "Stopped",
                    "type": "UserVm",
                    "uuid": "0018f969ae074ceaafbef2eb8abcedcd",
                    "vmCdRoms": [
                        {
                            "createDate": "Feb 11, 2022 3:25:50 PM",
                            "deviceId": 0,
                            "lastOpDate": "Feb 11, 2022 3:25:50 PM",
                            "name": "vm-0018f969ae074ceaafbef2eb8abcedcd-cdRom",
                            "uuid": "adce839b07e145e8a2fdc3a3bb8fd079",
                            "vmInstanceUuid": "0018f969ae074ceaafbef2eb8abcedcd"
                        }
                    ],
                    "vmNics": [
                        {
                            "createDate": "Feb 11, 2022 3:25:49 PM",
                            "deviceId": 0,
                            "driverType": "virtio",
                            "gateway": "10.0.0.1",
                            "hypervisorType": "KVM",
                            "internalName": "vnic19.0",
                            "ip": "10.92.1.252",
                            "l3NetworkUuid": "461aa152f9ca4f02a52f9db420edd686",
                            "lastOpDate": "Feb 11, 2022 3:25:49 PM",
                            "mac": "fa:88:a3:a1:98:00",
                            "netmask": "255.0.0.0",
                            "type": "VNIC",
                            "usedIps": [
                                {
                                    "createDate": "Feb 11, 2022 3:25:47 PM",
                                    "gateway": "10.0.0.1",
                                    "ip": "10.92.1.252",
                                    "ipInLong": 173801980,
                                    "ipRangeUuid": "5a6b2d19e44a4f969453f8760480f5ca",
                                    "ipVersion": 4,
                                    "l3NetworkUuid": "461aa152f9ca4f02a52f9db420edd686",
                                    "lastOpDate": "Feb 11, 2022 3:25:49 PM",
                                    "netmask": "255.0.0.0",
                                    "uuid": "48ecf8167e793252852f7a70f2a8dd32",
                                    "vmNicUuid": "a762bb5ef5fe4bcb8ebe50156d5d23d4"
                                }
                            ],
                            "uuid": "a762bb5ef5fe4bcb8ebe50156d5d23d4",
                            "vmInstanceUuid": "0018f969ae074ceaafbef2eb8abcedcd"
                        }
                    ],
                    "zoneUuid": "3aa884def2784e5f961f6ad71d5def91"
                }
            ]
        }
    ],
    "success": true
}
```

其中：
 - inventories字段即为指定项目下的云主机资源信息，该项目下存在名称为test的云主机
