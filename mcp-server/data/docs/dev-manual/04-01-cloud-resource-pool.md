# 云资源池 - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.1.html*

---

## 云资源池

---

## 云主机相关接口

---

## 创建云主机(CreateVmInstance)



创建一个新的云主机。

### API请求

 URLs

```
POST zstack/v1/vm-instances
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "vm1",     "instanceOfferingUuid": "ae97ced44efc3314b8f7798972b4ba1a",     "imageUuid": "da119f7906513eccabf271991c35a65e",     "l3NetworkUuids": [       "cc0e4c5e77df3af68e59668e7f9e06c5"     ],     "dataDiskOfferingUuids": [       "19d22d051b063d379a2816daaf431838",       "905d94a6abb5398fa1995f6398e3f6fc"     ],     "clusterUuid": "a0468dc645223f67bd0f2ab95276bbae",     "description": "this is a vm",     "strategy": "InstantStart",     "rootVolumeSystemTags": [       "volumeProvisioningStrategy::ThickProvisioning"     ]   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"  -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"  -X POST -d '{"params":{"name":"vm1","instanceOfferingUuid":"ae97ced44efc3314b8f7798972b4ba1a","imageUuid":"da119f7906513eccabf271991c35a65e","l3NetworkUuids":["cc0e4c5e77df3af68e59668e7f9e06c5"],"dataDiskOfferingUuids":["19d22d051b063d379a2816daaf431838","905d94a6abb5398fa1995f6398e3f6fc"],"clusterUuid":"a0468dc645223f67bd0f2ab95276bbae","description":"this is a vm","strategy":"InstantStart","rootVolumeSystemTags":["volumeProvisioningStrategy::ThickProvisioning"]}}'  http://localhost:8080/zstack/v1/vm-instances
```

 参数列表
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
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 云主机名称 |  | 0.6 |
| instanceOfferingUuid | String | body(包含在**params**结构中) | 计算规格UUID 指定云主机的CPU、内存等参数。 |  | 0.6 |
| imageUuid | String | body(包含在**params**结构中) | 镜像UUID 云主机的根云盘会从该字段指定的镜像创建。 |  | 0.6 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 三层网络UUID列表 可指定一个或多个三层网络，云主机会在每个三层网络上创建一个网卡。 |  | 0.6 |
| type (可选) | String | body(包含在**params**结构中) | 云主机类型 保留字段，无需指定。 | UserVm ApplianceVm | 0.6 |
| rootDiskOfferingUuid (可选) | String | body(包含在**params**结构中) | 根云盘规格UUID 如果**imageUuid**字段指定的镜像类型是ISO，该字段必须指定以确定需要创建的根云盘大小。 如果镜像类型是非ISO，该字段无需指定。 |  | 0.6 |
| dataDiskSizes (可选) | List | body(包含在**params**结构中) | 自定义云盘大小列表。可以指定一个或多个云盘大小（可重复）为云主机创建一个或多个数据云盘。 |  | 4.4.24 |
| dataDiskOfferingUuids (可选) | List | body(包含在**params**结构中) | 云盘规格UUID列表 可指定一个或多个云盘规格UUID（UUID可以重复）为云主机创建一个或多个数据云盘。 |  | 0.6 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID 若指定，云主机会在指定区域创建。 |  | 0.6 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID 若指定，云主机会在指定集群创建，该字段优先级高于**zoneUuid**。 |  | 0.6 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID 若指定，云主机会在指定物理机创建，该字段优先级高于**zoneUuid**和**clusterUuid**。 |  | 0.6 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 主存储UUID 若指定，云主机的根云盘会在指定主存储创建。 |  | 1.8 |
| description (可选) | String | body(包含在**params**结构中) | 云主机的详细描述 |  | 0.6 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认三层网络UUID 当**l3NetworkUuids**指定了多个三层网络时，该字段指定提供默认路由的三层网络。 若不指定，**l3NetworkUuids**的第一个网络被选为默认网络。 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID 若指定，云主机会使用该字段值作为UUID。 |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 云主机系统标签 |  | 0.6 |
| userTags (可选) | List | body | 云主机用户标签 |  | 0.6 |
| strategy (可选) | String | body(包含在**params**结构中) | 云主机创建策略 创建后立刻启动 创建后不启动 |  | 0.6 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 云主机根盘所需要的系统标签 |  | 3.0 |
| dataVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 云主机数据盘所需要的系统标签 |  | 3.0 |
| cpuNum (可选) | Integer | body(包含在**params**结构中) |  |  | 3.4.0 |
| memorySize (可选) | Long | body(包含在**params**结构中) |  |  | 3.4.0 |
| rootDiskSize (可选) | Long | body(包含在**params**结构中) |  |  | 3.4.0 |
| dataVolumeSystemTagsOnIndex (可选) | Map | body(包含在**params**结构中) |  |  | 4.4.24 |
| sshKeyPairUuids (可选) | List | body(包含在**params**结构中) |  |  | 4.7.21 |
| reservedMemorySize (可选) | Long | body(包含在**params**结构中) |  |  | 4.7.21 |


  - 选项格式为：**affinityGroupUuid::UUID**
  - 例如：**affinityGroupUuid::5fd71606d5af451d981413f35367a8d6**
- 例如：**affinityGroupUuid::5fd71606d5af451d981413f35367a8d6**
  - 选项格式为：**pciDevice::UUID**
  - 例如：**pciDevice::634b48a7bca139d9944a0f95b0c2dddf**
- 例如：**pciDevice::634b48a7bca139d9944a0f95b0c2dddf**
  - 选项格式为：**vmCpuPinning::绑定策略**
  - 例如：**vmCpuPinning::1:3;1-3:4-7,^6**
  - 仅admin支持更新、创建、删除该SystemTag。克隆云主机时，同时会克隆此SystemTag
- 仅admin支持更新、创建、删除该SystemTag。克隆云主机时，同时会克隆此SystemTag
  - 选项格式为：**userdata::脚本的base64编码**
  - 例如：**userdata::I2Nsb3VkLWNvbmZpZwp1c2VyczoKIC0gbmFtZTogdGVzdAogICBzaGVsbDogL2Jpbi9iYXNoCiAgIGdyb3VwczogdXNlcnMKICAgc3VkbzogWydBTEw9KEFMTCkgTk9QQVNTV0Q6QUxMJ10KICAgc3NoLWF1dGhvcml6ZWQta2V5czoKICAgICAgIC0gc3NoLXJzYSBBQUFBQjNOemFDMUxYQ0pmanJvRDFsVCByb290QDEwLTAtMC0xOApib290Y21kOgogLSBta2RpciAvdG1wL3RlbXAgCndyaXRlX2ZpbGVzOgogLSBwYXRoOiAvdG1wL1pTdGFja19jb25maWcKICAgY29udGVudDogfAogICAgICAgSGVsbG8sd29ybGQhCiAgIHBlcm1pc3Npb25zOiAnMDc1NScKaG9zdG5hbWU6IFBlcmYtdGVzdApkaXNhYmxlX3Jvb3Q6IGZhbHNlCnNzaF9wd2F1dGg6IHllcwpjaHBhc3N3ZDoKICBsaXN0OiB8CiAgICAgIHJvb3Q6d29yZAogIGV4cGlyZTogRmFsc2UKcnVuY21kOgogLSBlY2hvIGxzIC1sIC8gPi9yb290L2xpc3Quc2g=**
- 例如：**userdata::I2Nsb3VkLWNvbmZpZwp1c2VyczoKIC0gbmFtZTogdGVzdAogICBzaGVsbDogL2Jpbi9iYXNoCiAgIGdyb3VwczogdXNlcnMKICAgc3VkbzogWydBTEw9KEFMTCkgTk9QQVNTV0Q6QUxMJ10KICAgc3NoLWF1dGhvcml6ZWQta2V5czoKICAgICAgIC0gc3NoLXJzYSBBQUFBQjNOemFDMUxYQ0pmanJvRDFsVCByb290QDEwLTAtMC0xOApib290Y21kOgogLSBta2RpciAvdG1wL3RlbXAgCndyaXRlX2ZpbGVzOgogLSBwYXRoOiAvdG1wL1pTdGFja19jb25maWcKICAgY29udGVudDogfAogICAgICAgSGVsbG8sd29ybGQhCiAgIHBlcm1pc3Npb25zOiAnMDc1NScKaG9zdG5hbWU6IFBlcmYtdGVzdApkaXNhYmxlX3Jvb3Q6IGZhbHNlCnNzaF9wd2F1dGg6IHllcwpjaHBhc3N3ZDoKICBsaXN0OiB8CiAgICAgIHJvb3Q6d29yZAogIGV4cGlyZTogRmFsc2UKcnVuY21kOgogLSBlY2hvIGxzIC1sIC8gPi9yb290L2xpc3Quc2g=**
  - 选项格式为：**sshkey::公钥内容**
  - 例如：**sshkey::ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDPAGDmLG2yW1fGQsek4PdBL6wiVMHuLrl566ITPAf8A2Oi5BaExoUwdPjA96OaUSrtlsKlrXUMGEJwN1r1TrL9JdUMg7jww3QysGuS3P+bRsBe1TSGHS8LNc9JY9HpoL4ZN/j0zTaZfju9eDzbVsbDrF91x3yDeeGH6IG6gWJn96HPfrlg7REfo04eBdflsTaaFC0lAXoBOrnGVnzRdQfwTNRGmMAyFzCV83HOhVzBJuL5VqtAT8a0lSC4QgZTNROh6zbkTUUYYQu0QS65EaJCTyAhksuidRzyjLX3p3oMileKdJNugRa5IDHhGJXExIK+58Nvaqfj/03yN8IfO7sj root@hpe-77**
- 例如：**sshkey::ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDPAGDmLG2yW1fGQsek4PdBL6wiVMHuLrl566ITPAf8A2Oi5BaExoUwdPjA96OaUSrtlsKlrXUMGEJwN1r1TrL9JdUMg7jww3QysGuS3P+bRsBe1TSGHS8LNc9JY9HpoL4ZN/j0zTaZfju9eDzbVsbDrF91x3yDeeGH6IG6gWJn96HPfrlg7REfo04eBdflsTaaFC0lAXoBOrnGVnzRdQfwTNRGmMAyFzCV83HOhVzBJuL5VqtAT8a0lSC4QgZTNROh6zbkTUUYYQu0QS65EaJCTyAhksuidRzyjLX3p3oMileKdJNugRa5IDHhGJXExIK+58Nvaqfj/03yN8IfO7sj root@hpe-77**
  - 选项格式为：**ha::NeverStop**
  - 例如：**ha::NeverStop**
- 例如：**ha::NeverStop**
  - 选项格式为：**vmConsoleMode::控制台模式**
  - 例如：**vmConsoleMode::spice或者vmConsoleMode::vnc**
- 例如：**vmConsoleMode::spice或者vmConsoleMode::vnc**
  - 选项格式为：**usbRedirect::true**
  - 例如：**usbRedirect::true**
- 例如：**usbRedirect::true**
  - 选项格式为：**consolePassword::控制台密码**
  - 例如：**consolePassword::123456**
- 例如：**consolePassword::123456**
  - 选项格式为：**staticIp::三层网络UUID::指定的IP**
  - 例如：**staticIp::f00d593dff2e4bd58473388ac411ade2::192.168.0.10**
- 例如：**staticIp::f00d593dff2e4bd58473388ac411ade2::192.168.0.10**
  - 选项格式为：**customMac::三层网络UUID::指定的MAC地址**
  - 例如：**customMac::81a21a81cde84c1084c191354053a3b5::fa:00:37:ee:9f:00**
- 例如：**customMac::81a21a81cde84c1084c191354053a3b5::fa:00:37:ee:9f:00**
  - 选项格式为：**volumeProvisioningStrategy::ThinProvisioning, volumeProvisioningStrategy::ThickProvisioning**
  - 例如：**volumeProvisioningStrategy::ThinProvisioning, volumeProvisioningStrategy::ThickProvisioning**
- 例如：**volumeProvisioningStrategy::ThinProvisioning, volumeProvisioningStrategy::ThickProvisioning**
  - 选项格式为：**ceph::rootPoolName::xxx, 其中xxx代表池名称**
  - 例如：**ceph::rootPoolName::pri-v-r-26e11ca6814d4e1ba504d845f7848db3**
- 例如：**ceph::rootPoolName::pri-v-r-26e11ca6814d4e1ba504d845f7848db3**
  - 选项格式为：**vmMachineType::xx, 其中xx代表pc或q35**
  - 例如：**vmMachineType::pc**
- 例如：**vmMachineType::pc**
  - 选项格式为：**cdroms::${cdrom-1 config}::${cdrom-2 config}::${cdrom-3 config}**，cdrom config有三种可选择值: iso uuid(cdrom想要加载的iso uuid)，empty(不选择任何iso)，none(不配置光驱)。
    - 创建一个空的**cdrom: cdroms::empty::none::none**
    - 创建三个空的**cdrom: cdroms::empty::empty::empty**
    - 创建3个挂载了iso的**cdrom：cdroms::iso_1_uuid::iso_2_uuid::iso_3_uuid**
  - 创建3个挂载了iso的**cdrom：cdroms::iso_1_uuid::iso_2_uuid::iso_3_uuid**
- 创建3个挂载了iso的**cdrom：cdroms::iso_1_uuid::iso_2_uuid::iso_3_uuid**
  - 选项格式为：**createWithoutCdRom::true**
  - 例如：**createWithoutCdRom::true**
- 例如：**createWithoutCdRom::true**
  - 选项格式为：**mdevDevice::MDEV_DEV_UUID**
  - 例如：**mdevDevice::e2af8f869eff49d2a3d6f86cadc27090**
- 例如：**mdevDevice::e2af8f869eff49d2a3d6f86cadc27090**
  - 选项格式为：**autoReleaseSpecReleatedPhysicalPciDevice**
  - 例如：**autoReleaseSpecReleatedPhysicalPciDevice**
- 例如：**autoReleaseSpecReleatedPhysicalPciDevice**
  - 选项格式为：**autoReleaseSpecReleatedVirtualPciDevice**
  - 例如：**autoReleaseSpecReleatedVirtualPciDevice**
- 例如：**autoReleaseSpecReleatedVirtualPciDevice**
  - 选项格式为：**mdevDeviceSpec::MDEV_SPEC_UUID::MDEV_DEV_NUM**
  - 例如：**mdevDeviceSpec::e2af8f869eff49d2a3d6f86cadc27090::4**
- 例如：**mdevDeviceSpec::e2af8f869eff49d2a3d6f86cadc27090::4**
  - 选项格式为：**pciDeviceSpec::PCI_SPEC_UUID::PCI_DEV_NUM**
  - 例如：**pciDeviceSpec::e2af8f869eff49d2a3d6f86cadc27090::4**
- 例如：**pciDeviceSpec::e2af8f869eff49d2a3d6f86cadc27090::4**
  - 选项格式为：**vmPriority::PRIORITY_LEVEL**，其中PRIORITY_LEVEL可以为Normal/High
  - 例如：**vmPriority::Normal**
- 例如：**vmPriority::Normal**
  - 选项格式为：**GuestTools::TOOLS_VERSION**，其中TOOLS_VERSION初值为1.0.0，未来随着工具版本的提升，这个值会随之变化。
  - 例如：**GuestTools::1.0.0**
  - 补充说明：使用镜像创建云主机时，如果该镜像带有GuestTools标签，则从镜像拷贝GuestTools标签值到新云主机。
- 补充说明：使用镜像创建云主机时，如果该镜像带有GuestTools标签，则从镜像拷贝GuestTools标签值到新云主机。
  - 选项格式为：**resourceBindings::Cluster:clusterUuid**，其中clusterUuid为对应的集群uuid
  - 例如：**resourceBindings::Cluster:2sdasf231jvznsdak**
- 例如：**resourceBindings::Cluster:2sdasf231jvznsdak**
  - 选项格式为：**hostname::xxxxx**，其中xxxxx就是用户设置的主机名
  - 例如：**hostname::host.cloud.org**
- 例如：**hostname::host.cloud.org**
  - 选项格式为：**enableSRIOV::{L3_NETWORK_UUID} **
  - 例如：**enableSRIOV::9e19dafe81c64fed8e34f72e27582339**
- 例如：**enableSRIOV::9e19dafe81c64fed8e34f72e27582339**
  - 选项格式为：**driver::virtio**
  - 例如：**driver::virtio**
- 例如：**driver::virtio**
  - 选项格式为：**vmNumaEnable::boolean**
  - 例如：**vmNumaEnable::true**
- 例如：**vmNumaEnable::true**
  - 选项格式为：**vmEmulatorPinning::CPU**
  - 例如：**vmEmulatorPinning::1,2,3,4,5,6,7**
- 例如：**vmEmulatorPinning::1,2,3,4,5,6,7**
  - 选项格式为：**xmlhook::{xmlhookUuid}**
  - 例如：**xmlhook::35a678b482514da5aee22a6ab17d71e1**
- 例如：**xmlhook::35a678b482514da5aee22a6ab17d71e1**
  - 选项格式为：**required::installUrl::{%s}**
  - 例如：**required::installUrl::zbs://poolname**
- 例如：**required::installUrl::zbs://poolname**
    - 选项格式为：**hygonSecurityElementEnable::{%s}**
    - 例如：**hygonSecurityElementEnable::true**
    - 注意事项：使用该选项，需确保云主机所在物理机支持Hygon CCP特性，并已虚拟化切割SE设备。
  - 注意事项：使用该选项，需确保云主机所在物理机支持Hygon CCP特性，并已虚拟化切割SE设备。
- 注意事项：使用该选项，需确保云主机所在物理机支持Hygon CCP特性，并已虚拟化切割SE设备。


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "uuid": "6efab7159c6932429c6b0e7e0b64b660",     "name": "Test-VM",     "description": "web server VM",     "zoneUuid": "d10bd7a9565138efaf6171db8e18fa7d",     "clusterUuid": "692c71639d873bf6a356cd8e285d0d9c",     "imageUuid": "28061e65e48037eda71b53a0732bf087",     "hostUuid": "f877177de7bd377e811bc6313878b2b1",     "lastHostUuid": "a3ccdc90a600334f994c69aee4270ac5",     "instanceOfferingUuid": "9a874241f867333ca0bf0ab2134f8515",     "rootVolumeUuid": "f52d7c94d69d3bbb97d36a270fe910c3",     "platform": "Linux",     "defaultL3NetworkUuid": "2ac1b70fdb0f38769a29c6ebd0262cca",     "type": "UserVm",     "hypervisorType": "KVM",     "memorySize": 8589934592,     "cpuNum": 1,     "allocatorStrategy": "LastHostPreferredAllocatorStrategy",     "createDate": "Nov 14, 2017 10:20:57 PM",     "lastOpDate": "Nov 14, 2017 10:20:57 PM",     "state": "Running",     "vmNics": [       {         "uuid": "0dfbb8a297e9349ea8799c4ce48c6d10",         "vmInstanceUuid": "6efab7159c6932429c6b0e7e0b64b660",         "usedIpUuid": "39b57596a8ba35289bd9f40efceeae03",         "l3NetworkUuid": "2ac1b70fdb0f38769a29c6ebd0262cca",         "ip": "192.168.1.10",         "mac": "00:0c:29:bd:99:fc",         "hypervisorType": "KVM",         "netmask": "255.255.255.0",         "gateway": "192.168.1.1",         "deviceId": 0,         "state": "enable",         "createDate": "Nov 14, 2017 10:20:57 PM",         "lastOpDate": "Nov 14, 2017 10:20:57 PM"       }     ],     "allVolumes": [       {         "uuid": "f52d7c94d69d3bbb97d36a270fe910c3",         "name": "Root-Volume-For-VM-6efab7159c6932429c6b0e7e0b64b660",         "primaryStorageUuid": "4ed5bbb150a034b5917e7e6c9c4b8170",         "vmInstanceUuid": "6efab7159c6932429c6b0e7e0b64b660",         "diskOfferingUuid": "0521187274d73f5b936c22b145384c74",         "rootImageUuid": "28061e65e48037eda71b53a0732bf087",         "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-f52d7c94d69d3bbb97d36a270fe910c3/f52d7c94d69d3bbb97d36a270fe910c3.qcow2",         "type": "Root",         "format": "qcow2",         "size": 107374182400,         "actualSize": 21474836480,         "deviceId": 0,         "state": "Enabled",         "status": "Ready",         "createDate": "Nov 14, 2017 10:20:57 PM",         "lastOpDate": "Nov 14, 2017 10:20:57 PM"       }     ]   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String | 上一次运行云主机的物理机UUID | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String | 云主机运行平台 | 0.6 |
| defaultL3NetworkUuid | String | 默认三层网络UUID | 0.6 |
| type | String | 云主机类型 | 0.6 |
| hypervisorType | String | 云主机的hypervisor类型 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| cpuNum | Integer | cpu数量 | 0.6 |
| cpuSpeed | Long | cpu主频 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 云主机的可用状态 | 0.6 |
| guestOsType | String |  | 4.1.2 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.13 |
| ip | String |  | 4.7.13 |
| mac | String |  | 4.7.13 |
| hypervisorType | String |  | 4.7.13 |
| netmask | String |  | 4.7.13 |
| gateway | String |  | 4.7.13 |
| metaData | String |  | 4.7.13 |
| ipVersion | Integer |  | 4.7.13 |
| driverType | String |  | 4.7.13 |
| internalName | String |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| type | String |  | 4.7.13 |
| state | String | 网卡状态 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| usedIps | List | 详情参考[usedIps] | 4.7.13 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| ipRangeUuid | String | IP段UUID | 4.7.13 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.13 |
| ipVersion | Integer |  | 4.7.13 |
| ip | String |  | 4.7.13 |
| netmask | String |  | 4.7.13 |
| gateway | String |  | 4.7.13 |
| usedFor | String |  | 4.7.13 |
| ipInLong | long |  | 4.7.13 |
| vmNicUuid | String | 云主机网卡UUID | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| ipRangeUuid | String | IP段UUID | 4.7.13 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.13 |
| ipVersion | Integer |  | 4.7.13 |
| ip | String |  | 4.7.13 |
| netmask | String |  | 4.7.13 |
| gateway | String |  | 4.7.13 |
| usedFor | String |  | 4.7.13 |
| ipInLong | long |  | 4.7.13 |
| vmNicUuid | String | 云主机网卡UUID | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| primaryStorageUuid | String | 主存储UUID | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.13 |
| rootImageUuid | String |  | 4.7.13 |
| installPath | String |  | 4.7.13 |
| type | String |  | 4.7.13 |
| format | String |  | 4.7.13 |
| size | Long |  | 4.7.13 |
| actualSize | Long |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| state | String |  | 4.7.13 |
| status | String |  | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| isShareable | Boolean |  | 4.7.13 |
| volumeQos | String |  | 4.7.13 |
| lastDetachDate | Timestamp |  | 4.7.13 |
| lastVmInstanceUuid | String |  | 4.7.13 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |



### SDK示例

 Java SDK

```
CreateVmInstanceAction action = new CreateVmInstanceAction(); action.name = "vm1"; action.instanceOfferingUuid = "ae97ced44efc3314b8f7798972b4ba1a"; action.imageUuid = "da119f7906513eccabf271991c35a65e"; action.l3NetworkUuids = asList("cc0e4c5e77df3af68e59668e7f9e06c5"); action.dataDiskOfferingUuids = asList("19d22d051b063d379a2816daaf431838","905d94a6abb5398fa1995f6398e3f6fc"); action.clusterUuid = "a0468dc645223f67bd0f2ab95276bbae"; action.description = "this is a vm"; action.strategy = "InstantStart"; action.rootVolumeSystemTags = asList("volumeProvisioningStrategy::ThickProvisioning"); action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateVmInstanceAction.Result res = action.call();
```

 Python SDK

```
CreateVmInstanceAction action = CreateVmInstanceAction() action.name = "vm1" action.instanceOfferingUuid = "ae97ced44efc3314b8f7798972b4ba1a" action.imageUuid = "da119f7906513eccabf271991c35a65e" action.l3NetworkUuids = [cc0e4c5e77df3af68e59668e7f9e06c5] action.dataDiskOfferingUuids = [19d22d051b063d379a2816daaf431838, 905d94a6abb5398fa1995f6398e3f6fc] action.clusterUuid = "a0468dc645223f67bd0f2ab95276bbae" action.description = "this is a vm" action.strategy = "InstantStart" action.rootVolumeSystemTags = [volumeProvisioningStrategy::ThickProvisioning] action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateVmInstanceAction.Result res = action.call()
```

---

## 从云盘创建云主机(CreateVmInstanceFromVolume)



### API请求

 URLs

```
POST zstack/v1/vm-instances/from/volume
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "vm1",     "description": "this is a vm",     "instanceOfferingUuid": "80c606e35bc038bbb102e31cae191ea2",     "l3NetworkUuids": [       "333817afcaf63f13a101f674761c8a77"     ],     "volumeUuid": "23984cd68b903fd4883aa962c70d83fc",     "clusterUuid": "ada53eb6c42e34d3946ff1280718d9f2",     "strategy": "InstantStart"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"vm1","description":"this is a vm","instanceOfferingUuid":"80c606e35bc038bbb102e31cae191ea2","l3NetworkUuids":["333817afcaf63f13a101f674761c8a77"],"volumeUuid":"23984cd68b903fd4883aa962c70d83fc","clusterUuid":"ada53eb6c42e34d3946ff1280718d9f2","strategy":"InstantStart"}}' http://localhost:8080/zstack/v1/vm-instances/from/volume
```

 参数列表
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

-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.10.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.10.0 |
| instanceOfferingUuid (可选) | String | body(包含在**params**结构中) | 计算规格UUID，注意：该参数与CPU数量、内存大小二选一 |  | 3.10.0 |
| cpuNum (可选) | Integer | body(包含在**params**结构中) | CPU核数，单位为GB，该参数与instanceOfferingUuid二选一 |  | 3.10.0 |
| memorySize (可选) | Long | body(包含在**params**结构中) | 内存大小，单位为Byte，该参数与instanceOfferingUuid二选一 |  | 3.10.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 三层网络UUID 可指定一个或多个三层网络，云主机会在每个三层网络上创建一个网卡。 |  | 3.10.0 |
| type (可选) | String | body(包含在**params**结构中) | 云主机类型 保留字段，无需指定。 | UserVm ApplianceVm | 3.10.0 |
| volumeUuid | String | body(包含在**params**结构中) | 云盘UUID |  | 4.1.0 |
| platform (可选) | String | body(包含在**params**结构中) | 云盘系统平台 | Linux Windows Other | 3.10.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID 若指定，云主机会在指定区域创建。 |  | 3.10.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID 若指定，云主机会在指定集群创建，该字段优先级高于**zoneUuid**。 |  | 3.10.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID 若指定，云主机会在指定物理机创建，该字段优先级高于**zoneUuid**和**clusterUuid**。 |  | 3.10.0 |
| primaryStorageUuid (可选) | String | body(包含在**params**结构中) | 主存储UUID 若指定，云主机的根云盘会在指定主存储创建。 |  | 3.10.0 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认三层网络UUID 当**l3NetworkUuids**指定了多个三层网络时，该字段指定提供默认路由的三层网络。 若不指定，`l3NetworkUuids`的第一个网络被选为默认网络。 |  | 3.10.0 |
| strategy (可选) | String | body(包含在**params**结构中) | 云主机创建策略 创建后立刻启动 创建后不启动 | InstantStart CreateStopped | 3.10.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID 若指定，云主机会使用该字段值作为UUID。 |  | 3.10.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.10.0 |
| systemTags (可选) | List | body | 云主机系统标签 |  | 3.10.0 |
| userTags (可选) | List | body | 云主机用户标签 |  | 3.10.0 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "33614668ae7d386c91d662928f60b23f",     "name": "Test-VM",     "description": "web server VM",     "zoneUuid": "62f048b02e353ba4bdb9184ad7f54170",     "clusterUuid": "ff753adc06c83d5ab2b0291f57b4745a",     "imageUuid": "9291412f184f37a284b484b0788b24ca",     "hostUuid": "0f9f5c6561d733d18a94577c4cd0976f",     "lastHostUuid": "dc452dde2f7832b29bf91a0ddb6a004c",     "instanceOfferingUuid": "b35adab33ba139b98ee20c1e2be702d3",     "rootVolumeUuid": "f54fc6d488133688a6a7635f5c44a288",     "platform": "Linux",     "defaultL3NetworkUuid": "d82e3c622f933054a1939fb66e07681e",     "type": "UserVm",     "hypervisorType": "KVM",     "memorySize": 8.589934592E9,     "cpuNum": 1.0,     "allocatorStrategy": "LastHostPreferredAllocatorStrategy",     "createDate": "Nov 14, 2017 10:20:57 PM",     "lastOpDate": "Nov 14, 2017 10:20:57 PM",     "state": "Running",     "vmNics": [       {         "uuid": "16198ebdef9c3f8084acd1a919eff4f2",         "vmInstanceUuid": "33614668ae7d386c91d662928f60b23f",         "usedIpUuid": "8eb3618f949a3e588acf9d8b0ee8293f",         "l3NetworkUuid": "d82e3c622f933054a1939fb66e07681e",         "ip": "192.168.1.10",         "mac": "00:0c:29:bd:99:fc",         "hypervisorType": "KVM",         "netmask": "255.255.255.0",         "gateway": "192.168.1.1",         "deviceId": 0.0,         "createDate": "Nov 14, 2017 10:20:57 PM",         "lastOpDate": "Nov 14, 2017 10:20:57 PM"       }     ],     "allVolumes": [       {         "uuid": "f54fc6d488133688a6a7635f5c44a288",         "name": "Root-Volume-For-VM-33614668ae7d386c91d662928f60b23f",         "primaryStorageUuid": "769061e63aec3278b1e6c3619d6da766",         "vmInstanceUuid": "33614668ae7d386c91d662928f60b23f",         "rootImageUuid": "9291412f184f37a284b484b0788b24ca",         "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-f54fc6d488133688a6a7635f5c44a288/f54fc6d488133688a6a7635f5c44a288.qcow2",         "type": "Root",         "format": "qcow2",         "size": 1.073741824E11,         "actualSize": 2.147483648E10,         "deviceId": 0.0,         "state": "Enabled",         "status": "Ready",         "createDate": "Nov 14, 2017 10:20:57 PM",         "lastOpDate": "Nov 14, 2017 10:20:57 PM"       }     ]   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.10.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 3.10.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.10.0 |
| description | String | 错误的概要描述 | 3.10.0 |
| details | String | 错误的详细信息 | 3.10.0 |
| elaboration | String | 保留字段，默认为null | 3.10.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.10.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.10.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.10.0 |
| name | String | 资源名称 | 3.10.0 |
| description | String | 资源的详细描述 | 3.10.0 |
| zoneUuid | String | 区域UUID | 3.10.0 |
| clusterUuid | String | 集群UUID | 3.10.0 |
| imageUuid | String | 镜像UUID | 3.10.0 |
| hostUuid | String | 物理机UUID | 3.10.0 |
| lastHostUuid | String |  | 3.10.0 |
| instanceOfferingUuid | String | 计算规格UUID | 3.10.0 |
| rootVolumeUuid | String | 根云盘UUID | 3.10.0 |
| platform | String |  | 3.10.0 |
| defaultL3NetworkUuid | String |  | 3.10.0 |
| type | String |  | 3.10.0 |
| hypervisorType | String |  | 3.10.0 |
| memorySize | Long |  | 3.10.0 |
| cpuNum | Integer |  | 3.10.0 |
| cpuSpeed | Long |  | 3.10.0 |
| allocatorStrategy | String |  | 3.10.0 |
| createDate | Timestamp | 创建时间 | 3.10.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.10.0 |
| state | String |  | 3.10.0 |
| vmNics | List | 详情参考[vmNics] | 3.10.0 |
| allVolumes | List | 详情参考[allVolumes] | 3.10.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.10.0 |
| vmInstanceUuid | String | 云主机UUID | 3.10.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.10.0 |
| ip | String | ip地址 | 3.10.0 |
| mac | String | mac地址 | 3.10.0 |
| hypervisorType | String | 虚拟化类型 | 3.10.0 |
| netmask | String | 子网掩码 | 3.10.0 |
| gateway | String | 网关 | 3.10.0 |
| metaData | String | 内部使用的保留域 | 3.10.0 |
| ipVersion | Integer | IP地址版本 | 3.10.0 |
| deviceId | Integer | 设备ID | 3.10.0 |
| createDate | Timestamp | 创建时间 | 3.10.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.10.0 |
| usedIps | List | 详情参考[usedIps ] | 3.10.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.10.0 |
| ipRangeUuid | String | IP段UUID | 3.10.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.10.0 |
| ipVersion | Integer | IP协议号 | 3.10.0 |
| ip | String | IP地址 | 3.10.0 |
| netmask | String | 网络掩码 | 3.10.0 |
| gateway | String | 网关地址 | 3.10.0 |
| usedFor | String |  | 3.10.0 |
| ipInLong | long |  | 3.10.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.10.0 |
| createDate | Timestamp | 创建时间 | 3.10.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.10.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.10.0 |
| name | String | 资源名称 | 3.10.0 |
| description | String | 资源的详细描述 | 3.10.0 |
| primaryStorageUuid | String | 主存储UUID | 3.10.0 |
| vmInstanceUuid | String | 云主机UUID | 3.10.0 |
| diskOfferingUuid | String | 云盘规格UUID | 3.10.0 |
| rootImageUuid | String | 云盘根镜像UUID | 3.10.0 |
| installPath | String | 云盘在主存储上的路径 | 3.10.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 3.10.0 |
| format | String | 云盘格式 | 3.10.0 |
| size | Long | 云盘大小 | 3.10.0 |
| actualSize | Long | 云盘真实大小 | 3.10.0 |
| deviceId | Integer |  | 3.10.0 |
| state | String | 云盘是否开启 | 3.10.0 |
| status | String | 云盘状态 | 3.10.0 |
| createDate | Timestamp | 创建时间 | 3.10.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.10.0 |
| isShareable | Boolean | 是否共享云盘 | 3.10.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 3.10.0 |



### SDK示例

 Java SDK

```
CreateVmInstanceFromVolumeAction action = new CreateVmInstanceFromVolumeAction(); action.name = "vm1"; action.description = "this is a vm"; action.instanceOfferingUuid = "80c606e35bc038bbb102e31cae191ea2"; action.l3NetworkUuids = asList("333817afcaf63f13a101f674761c8a77"); action.volumeUuid = "23984cd68b903fd4883aa962c70d83fc"; action.clusterUuid = "ada53eb6c42e34d3946ff1280718d9f2"; action.strategy = "InstantStart"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateVmInstanceFromVolumeAction.Result res = action.call();
```

 Python SDK

```
CreateVmInstanceFromVolumeAction action = CreateVmInstanceFromVolumeAction() action.name = "vm1" action.description = "this is a vm" action.instanceOfferingUuid = "80c606e35bc038bbb102e31cae191ea2" action.l3NetworkUuids = [333817afcaf63f13a101f674761c8a77] action.volumeUuid = "23984cd68b903fd4883aa962c70d83fc" action.clusterUuid = "ada53eb6c42e34d3946ff1280718d9f2" action.strategy = "InstantStart" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateVmInstanceFromVolumeAction.Result res = action.call()
```

---

#### 从快照创建云主机(CreateVmInstanceFromVolumeSnapshot)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/from/volume-snapshots/{volumeSnapshotUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "vm1",
    "description": "this is a vm",
    "instanceOfferingUuid": "6900e329296732aca0e3658bcdcdd3ce",
    "l3NetworkUuids": [
      "990ffab4793036d29fc92142889f9ef2"
    ],
    "clusterUuid": "cd44bab6f1d43e59bbc885f869e89388",
    "strategy": "InstantStart"
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
-X POST -d '{"params":{"name":"vm1","description":"this is a vm","instanceOfferingUuid":"6900e329296732aca0e3658bcdcdd3ce","l3NetworkUuids":["990ffab4793036d29fc92142889f9ef2"],"clusterUuid":"cd44bab6f1d43e59bbc885f869e89388","strategy":"InstantStart"}}' http://localhost:8080/zstack/v1/vm-instances/from/volume-snapshots/f81c959344783f19ae4fc76f1e770201
```

 参数列表
-
-

-
-
-
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.1.0 |
| instanceOfferingUuid (可选) | String | body(包含在**params**结构中) | 计算规格UUID |  | 4.1.0 |
| cpuNum (可选) | Integer | body(包含在**params**结构中) | CPU数量 |  | 4.1.0 |
| memorySize (可选) | Long | body(包含在**params**结构中) | 内存大小 |  | 4.1.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 三层网络UUID |  | 4.1.0 |
| type (可选) | String | body(包含在**params**结构中) | 云主机系统平台类型 | UserVm ApplianceVm | 4.1.0 |
| volumeSnapshotUuid | String | url | 快照组UUID |  | 4.1.0 |
| platform (可选) | String | body(包含在**params**结构中) | 云主机系统平台类型 | Linux Windows Other Paravirtualization WindowsVirtio | 4.1.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 4.1.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 4.1.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 4.1.0 |
| primaryStorageUuid (可选) | String | body(包含在**params**结构中) | 主存储UUID |  | 4.1.0 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认三层网络UUID |  | 4.1.0 |
| strategy (可选) | String | body(包含在**params**结构中) | 创建策略 | InstantStart CreateStopped | 4.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "109d10001c5c3553a7f2333e6a48610a",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "f31cb809cf0b3c668953e2507d5467b2",
    "clusterUuid": "fdfdf92e7bbe3212ab6530b11d8e0af5",
    "imageUuid": "96acc892dd793fb98c1924d54eb27a88",
    "hostUuid": "8eb85f51f10c30c0a6305b73d2002899",
    "lastHostUuid": "59ae08c1f6ed3638b6e4aa35b5a30d2e",
    "instanceOfferingUuid": "8b6d6aabad773972a0549539099e3e68",
    "rootVolumeUuid": "70eda0fe06163e67accf01a266fd5274",
    "platform": "Linux",
    "defaultL3NetworkUuid": "5ec42284ceaa3ad18f2b498e98ab6acc",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "b6d840187f1932209c21888923f5f35e",
        "vmInstanceUuid": "109d10001c5c3553a7f2333e6a48610a",
        "usedIpUuid": "54e8db987a4a333c80a87e4a84ab7675",
        "l3NetworkUuid": "5ec42284ceaa3ad18f2b498e98ab6acc",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "70eda0fe06163e67accf01a266fd5274",
        "name": "Root-Volume-For-VM-109d10001c5c3553a7f2333e6a48610a",
        "primaryStorageUuid": "0739abbe904639649da74cdcf0abd25f",
        "vmInstanceUuid": "109d10001c5c3553a7f2333e6a48610a",
        "rootImageUuid": "96acc892dd793fb98c1924d54eb27a88",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-70eda0fe06163e67accf01a266fd5274/70eda0fe06163e67accf01a266fd5274.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| zoneUuid | String | 区域UUID | 4.1.0 |
| clusterUuid | String | 集群UUID | 4.1.0 |
| imageUuid | String | 镜像UUID | 4.1.0 |
| hostUuid | String | 物理机UUID | 4.1.0 |
| lastHostUuid | String |  | 4.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.1.0 |
| platform | String |  | 4.1.0 |
| defaultL3NetworkUuid | String |  | 4.1.0 |
| type | String |  | 4.1.0 |
| hypervisorType | String |  | 4.1.0 |
| memorySize | Long |  | 4.1.0 |
| cpuNum | Integer |  | 4.1.0 |
| cpuSpeed | Long |  | 4.1.0 |
| allocatorStrategy | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| state | String |  | 4.1.0 |
| vmNics | List | 详情参考[vmNics] | 4.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| mac | String | MAC地址 | 4.1.0 |
| hypervisorType | String | 虚拟化类型 | 4.1.0 |
| netmask | String | 子网掩码 | 4.1.0 |
| gateway | String | 网关 | 4.1.0 |
| metaData | String |  | 4.1.0 |
| ipVersion | Integer | IP地址版本 | 4.1.0 |
| deviceId | Integer | 设备ID | 4.1.0 |
| type | String | 网卡类型 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| usedIps | List | 详情参考[usedIps] | 4.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| ipRangeUuid | String | IP段UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ipVersion | Integer | IP协议号 | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| netmask | String | 网络掩码 | 4.1.0 |
| gateway | String | 网关地址 | 4.1.0 |
| usedFor | String |  | 4.1.0 |
| ipInLong | long |  | 4.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| primaryStorageUuid | String | 主存储UUID | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.1.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.1.0 |
| installPath | String | 云盘在主存储上的路径 | 4.1.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.1.0 |
| format | String | 云盘格式 | 4.1.0 |
| size | Long | 云盘大小 | 4.1.0 |
| actualSize | Long | 云盘真实大小 | 4.1.0 |
| deviceId | Integer |  | 4.1.0 |
| state | String | 云盘是否开启 | 4.1.0 |
| status | String | 云盘状态 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| isShareable | Boolean | 是否共享云盘 | 4.1.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.1.0 |



##### SDK示例

 Java SDK

```
CreateVmInstanceFromVolumeSnapshotGroupAction action = new CreateVmInstanceFromVolumeSnapshotGroupAction();
action.name = "vm1";
action.description = "this is a vm";
action.instanceOfferingUuid = "5dda0d1013a433e9959967199f819c60";
action.l3NetworkUuids = asList("5fc19e24bedc32f58116ce6d63247f1a");
action.volumeSnapshotGroupUuid = "da7e81e1d1793fdab7d5d05268d680a2";
action.clusterUuid = "984aef8dfbb33c069c62fac5249ab044";
action.strategy = "InstantStart";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmInstanceFromVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
CreateVmInstanceFromVolumeSnapshotGroupAction action = CreateVmInstanceFromVolumeSnapshotGroupAction()
action.name = "vm1"
action.description = "this is a vm"
action.instanceOfferingUuid = "5dda0d1013a433e9959967199f819c60"
action.l3NetworkUuids = [5fc19e24bedc32f58116ce6d63247f1a]
action.volumeSnapshotGroupUuid = "da7e81e1d1793fdab7d5d05268d680a2"
action.clusterUuid = "984aef8dfbb33c069c62fac5249ab044"
action.strategy = "InstantStart"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmInstanceFromVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 从快照组创建云主机(CreateVmInstanceFromVolumeSnapshotGroup)



##### API请求

 URLs

```
POST zstack/vm-instances/from/volume-snapshots/group/{volumeSnapshotGroupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "vm1",
    "description": "this is a vm",
    "instanceOfferingUuid": "5dda0d1013a433e9959967199f819c60",
    "l3NetworkUuids": [
      "5fc19e24bedc32f58116ce6d63247f1a"
    ],
    "clusterUuid": "984aef8dfbb33c069c62fac5249ab044",
    "strategy": "InstantStart"
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
-X POST -d '{"params":{"name":"vm1","description":"this is a vm","instanceOfferingUuid":"5dda0d1013a433e9959967199f819c60","l3NetworkUuids":["5fc19e24bedc32f58116ce6d63247f1a"],"clusterUuid":"984aef8dfbb33c069c62fac5249ab044","strategy":"InstantStart"}}' http://localhost:8080/zstack/v1/vm-instances/from/volume-snapshots/group/da7e81e1d1793fdab7d5d05268d680a2
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.1.0 |
| instanceOfferingUuid (可选) | String | body(包含在**params**结构中) | 计算规格UUID |  | 4.1.0 |
| cpuNum (可选) | Integer | body(包含在**params**结构中) | CPU数量 |  | 4.1.0 |
| memorySize (可选) | Long | body(包含在**params**结构中) | 内存大小 |  | 4.1.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 三层网络UUID |  | 4.1.0 |
| type (可选) | String | body(包含在**params**结构中) | 云主机类型 | UserVm ApplianceVm | 4.1.0 |
| volumeSnapshotGroupUuid | String | url | 快照组UUID |  | 4.1.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 4.1.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 4.1.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 4.1.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根盘的主存储UUID |  | 4.1.0 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认三层网络UUID |  | 4.1.0 |
| strategy (可选) | String | body(包含在**params**结构中) | 创建策略 | InstantStart CreateStopped | 4.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "109d10001c5c3553a7f2333e6a48610a",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "f31cb809cf0b3c668953e2507d5467b2",
    "clusterUuid": "fdfdf92e7bbe3212ab6530b11d8e0af5",
    "imageUuid": "96acc892dd793fb98c1924d54eb27a88",
    "hostUuid": "8eb85f51f10c30c0a6305b73d2002899",
    "lastHostUuid": "59ae08c1f6ed3638b6e4aa35b5a30d2e",
    "instanceOfferingUuid": "8b6d6aabad773972a0549539099e3e68",
    "rootVolumeUuid": "70eda0fe06163e67accf01a266fd5274",
    "platform": "Linux",
    "defaultL3NetworkUuid": "5ec42284ceaa3ad18f2b498e98ab6acc",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "b6d840187f1932209c21888923f5f35e",
        "vmInstanceUuid": "109d10001c5c3553a7f2333e6a48610a",
        "usedIpUuid": "54e8db987a4a333c80a87e4a84ab7675",
        "l3NetworkUuid": "5ec42284ceaa3ad18f2b498e98ab6acc",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "70eda0fe06163e67accf01a266fd5274",
        "name": "Root-Volume-For-VM-109d10001c5c3553a7f2333e6a48610a",
        "primaryStorageUuid": "0739abbe904639649da74cdcf0abd25f",
        "vmInstanceUuid": "109d10001c5c3553a7f2333e6a48610a",
        "rootImageUuid": "96acc892dd793fb98c1924d54eb27a88",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-70eda0fe06163e67accf01a266fd5274/70eda0fe06163e67accf01a266fd5274.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| zoneUuid | String | 区域UUID | 4.1.0 |
| clusterUuid | String | 集群UUID | 4.1.0 |
| imageUuid | String | 镜像UUID | 4.1.0 |
| hostUuid | String | 物理机UUID | 4.1.0 |
| lastHostUuid | String |  | 4.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.1.0 |
| platform | String |  | 4.1.0 |
| defaultL3NetworkUuid | String |  | 4.1.0 |
| type | String |  | 4.1.0 |
| hypervisorType | String |  | 4.1.0 |
| memorySize | Long |  | 4.1.0 |
| cpuNum | Integer |  | 4.1.0 |
| cpuSpeed | Long |  | 4.1.0 |
| allocatorStrategy | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| state | String |  | 4.1.0 |
| vmNics | List | 详情参考[vmNics] | 4.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| mac | String | MAC地址 | 4.1.0 |
| hypervisorType | String | 虚拟化类型 | 4.1.0 |
| netmask | String | 子网掩码 | 4.1.0 |
| gateway | String | 网关 | 4.1.0 |
| metaData | String |  | 4.1.0 |
| ipVersion | Integer | IP地址版本 | 4.1.0 |
| deviceId | Integer | 设备ID | 4.1.0 |
| type | String | 网卡类型 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| usedIps | List | 详情参考[usedIps] | 4.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| ipRangeUuid | String | IP段UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ipVersion | Integer | IP协议号 | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| netmask | String | 网络掩码 | 4.1.0 |
| gateway | String | 网关地址 | 4.1.0 |
| usedFor | String |  | 4.1.0 |
| ipInLong | long |  | 4.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| primaryStorageUuid | String | 主存储UUID | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.1.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.1.0 |
| installPath | String | 云盘在主存储上的路径 | 4.1.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.1.0 |
| format | String | 云盘格式 | 4.1.0 |
| size | Long | 云盘大小 | 4.1.0 |
| actualSize | Long | 云盘真实大小 | 4.1.0 |
| deviceId | Integer |  | 4.1.0 |
| state | String | 云盘是否开启 | 4.1.0 |
| status | String | 云盘状态 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| isShareable | Boolean | 是否共享云盘 | 4.1.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.1.0 |



##### SDK示例

 Java SDK

```
CreateVmInstanceFromVolumeSnapshotGroupAction action = new CreateVmInstanceFromVolumeSnapshotGroupAction();
action.name = "vm1";
action.description = "this is a vm";
action.instanceOfferingUuid = "5dda0d1013a433e9959967199f819c60";
action.l3NetworkUuids = asList("5fc19e24bedc32f58116ce6d63247f1a");
action.volumeSnapshotGroupUuid = "da7e81e1d1793fdab7d5d05268d680a2";
action.clusterUuid = "984aef8dfbb33c069c62fac5249ab044";
action.strategy = "InstantStart";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmInstanceFromVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
CreateVmInstanceFromVolumeSnapshotGroupAction action = CreateVmInstanceFromVolumeSnapshotGroupAction()
action.name = "vm1"
action.description = "this is a vm"
action.instanceOfferingUuid = "5dda0d1013a433e9959967199f819c60"
action.l3NetworkUuids = [5fc19e24bedc32f58116ce6d63247f1a]
action.volumeSnapshotGroupUuid = "da7e81e1d1793fdab7d5d05268d680a2"
action.clusterUuid = "984aef8dfbb33c069c62fac5249ab044"
action.strategy = "InstantStart"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmInstanceFromVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 从OVF模板导入云主机(CreateVmInstanceFromOvf)



##### API请求

 URLs

```
POST zstack/v1/ovf/create-vm-instance
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "xmlBase64": "PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPEVudmVsb3BlIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5kbXR",
    "jsonImageInfos": "[{\"ovfId\":\"vm-1-system.vmdk\",\"type\":\"Download\",\"installPath\":\"http://xxx/vm-1-system.vmdk\"}]",
    "backupStorageUuid": "3302f082e39d3ba8a246de74179e5512",
    "jsonCreateVmParam": "{\"name\":\"a\",\"clusterUuid\":\"e79b1a7be3183216a99874e942a7dd4a\",\"l3NetworkUuids\":[\"4f4b50d7cb6d3a9a944172b73653a593\"]}",
    "deleteImageAfterSuccess": true,
    "deleteImageOnFail": false
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
-X POST -d '{"params":{"xmlBase64":"PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPEVudmVsb3BlIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5kbXR","jsonImageInfos":"[{\"ovfId\":\"vm-1-system.vmdk\",\"type\":\"Download\",\"installPath\":\"http://xxx/vm-1-system.vmdk\"}]","backupStorageUuid":"3302f082e39d3ba8a246de74179e5512","jsonCreateVmParam":"{\"name\":\"a\",\"clusterUuid\":\"e79b1a7be3183216a99874e942a7dd4a\",\"l3NetworkUuids\":[\"4f4b50d7cb6d3a9a944172b73653a593\"]}","deleteImageAfterSuccess":true,"deleteImageOnFail":false}}' http://localhost:8080/zstack/v1/ovf/create-vm-instance
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| xmlBase64 | String | body(包含在**params**结构中) | 资源名称 |  | 4.4.6 |
| jsonImageInfos | String | body(包含在**params**结构中) | 描述OVF中disk ID与镜像文件对应关系的JSON字符串 |  | 4.4.6 |
| backupStorageUuid | String | body(包含在**params**结构中) | 用于存储上传镜像文件的镜像存储UUID |  | 4.4.6 |
| jsonCreateVmParam | String | body(包含在**params**结构中) | 包含云主机创建参数的消息的JSON字符串 |  | 4.4.6 |
| deleteImageAfterSuccess (可选) | boolean | body(包含在**params**结构中) | 部署完成后删除镜像文件 |  | 4.4.6 |
| deleteImageOnFail (可选) | boolean | body(包含在**params**结构中) | 部署失败后删除镜像文件 |  | 4.4.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.4.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.4.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ef8b74d3a7f931c3aacf258c20d25411",
    "name": "test-ovf",
    "description": "web server VM",
    "zoneUuid": "5f3cdedd4a823bfcadd45385f034b763",
    "clusterUuid": "2bb23d2c0a013338add7cedf2615ac39",
    "imageUuid": "f47e5dbf886e3d16b8097294efd63b37",
    "hostUuid": "82bad7cada82377684459e59292937b4",
    "lastHostUuid": "00e742c03afe3cd68234aa9c9352d5a7",
    "instanceOfferingUuid": "a9a166f625e23886a7227bdb472da645",
    "rootVolumeUuid": "3e92e577418835a3bfeb0d770e898052",
    "platform": "Linux",
    "defaultL3NetworkUuid": "e4f37ede6e563fe5943ae8b8c7c008d6",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 4.294967296E9,
    "cpuNum": 4.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 2:20:57 PM",
    "lastOpDate": "Nov 14, 2017 2:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "d5a26fdfdcff30748b22b85f4d7fadbe",
        "vmInstanceUuid": "ef8b74d3a7f931c3aacf258c20d25411",
        "usedIpUuid": "4423412a12653cb3af73231e16e526cf",
        "l3NetworkUuid": "e4f37ede6e563fe5943ae8b8c7c008d6",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 2:20:57 PM",
        "lastOpDate": "Nov 14, 2017 2:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "3e92e577418835a3bfeb0d770e898052",
        "name": "Root-Volume-For-VM-ef8b74d3a7f931c3aacf258c20d25411",
        "primaryStorageUuid": "353a440b83283acca73e3d3fd2cca0c5",
        "vmInstanceUuid": "ef8b74d3a7f931c3aacf258c20d25411",
        "diskOfferingUuid": "323969fdd2273f1a8e42aef10a9e8c6b",
        "rootImageUuid": "f47e5dbf886e3d16b8097294efd63b37",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-3e92e577418835a3bfeb0d770e898052/3e92e577418835a3bfeb0d770e898052.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 2:20:57 PM",
        "lastOpDate": "Nov 14, 2017 2:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.4.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.6 |
| description | String | 错误的概要描述 | 4.4.6 |
| details | String | 错误的详细信息 | 4.4.6 |
| elaboration | String | 保留字段，默认为null | 4.4.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| zoneUuid | String | 区域UUID | 4.4.6 |
| clusterUuid | String | 集群UUID | 4.4.6 |
| imageUuid | String | 镜像UUID | 4.4.6 |
| hostUuid | String | 物理机UUID | 4.4.6 |
| lastHostUuid | String |  | 4.4.6 |
| instanceOfferingUuid | String | 计算规格UUID | 4.4.6 |
| rootVolumeUuid | String | 根云盘UUID | 4.4.6 |
| platform | String |  | 4.4.6 |
| architecture | String |  | 4.4.6 |
| defaultL3NetworkUuid | String |  | 4.4.6 |
| type | String |  | 4.4.6 |
| hypervisorType | String |  | 4.4.6 |
| memorySize | Long |  | 4.4.6 |
| cpuNum | Integer |  | 4.4.6 |
| cpuSpeed | Long |  | 4.4.6 |
| allocatorStrategy | String |  | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| state | String |  | 4.4.6 |
| guestOsType | String |  | 4.4.6 |
| vmNics | List | 详情参考[vmNics] | 4.4.6 |
| allVolumes | List | 详情参考[allVolumes] | 4.4.6 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.4.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| vmInstanceUuid | String | 云主机UUID | 4.4.6 |
| l3NetworkUuid | String | 三层网络UUID | 4.4.6 |
| ip | String | IP地址 | 4.4.6 |
| mac | String | MAC地址 | 4.4.6 |
| hypervisorType | String | 虚拟化类型 | 4.4.6 |
| netmask | String | 子网掩码 | 4.4.6 |
| gateway | String | 网关 | 4.4.6 |
| metaData | String |  | 4.4.6 |
| ipVersion | Integer | IP地址版本 | 4.4.6 |
| driverType | String |  | 4.4.6 |
| internalName | String |  | 4.4.6 |
| deviceId | Integer | 设备ID | 4.4.6 |
| type | String | 网卡类型 | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| usedIps | List | 详情参考[usedIps] | 4.4.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| ipRangeUuid | String | IP段UUID | 4.4.6 |
| l3NetworkUuid | String | 三层网络UUID | 4.4.6 |
| ipVersion | Integer | IP协议号 | 4.4.6 |
| ip | String | IP地址 | 4.4.6 |
| netmask | String | 网络掩码 | 4.4.6 |
| gateway | String | 网关地址 | 4.4.6 |
| usedFor | String |  | 4.4.6 |
| ipInLong | long |  | 4.4.6 |
| vmNicUuid | String | 云主机网卡UUID | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| primaryStorageUuid | String | 主存储UUID | 4.4.6 |
| vmInstanceUuid | String | 云主机UUID | 4.4.6 |
| diskOfferingUuid | String | 云盘规格UUID | 4.4.6 |
| rootImageUuid | String | 云盘根镜像UUID | 4.4.6 |
| installPath | String | 云盘在主存储上的路径 | 4.4.6 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.4.6 |
| format | String | 云盘格式 | 4.4.6 |
| size | Long | 云盘大小 | 4.4.6 |
| actualSize | Long | 云盘真实大小 | 4.4.6 |
| deviceId | Integer |  | 4.4.6 |
| state | String | 云盘是否开启 | 4.4.6 |
| status | String | 云盘状态 | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| isShareable | Boolean | 是否共享云盘 | 4.4.6 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.4.6 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| vmInstanceUuid | String | 云主机UUID | 4.4.6 |
| deviceId | Integer |  | 4.4.6 |
| isoUuid | String |  | 4.4.6 |
| isoInstallPath | String |  | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |



##### SDK示例

 Java SDK

```
CreateVmInstanceFromOvfAction action = new CreateVmInstanceFromOvfAction();
action.xmlBase64 = "PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPEVudmVsb3BlIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5kbXR";
action.jsonImageInfos = "[{"ovfId":"vm-1-system.vmdk","type":"Download","installPath":"http://xxx/vm-1-system.vmdk"}]";
action.backupStorageUuid = "3302f082e39d3ba8a246de74179e5512";
action.jsonCreateVmParam = "{"name":"a","clusterUuid":"e79b1a7be3183216a99874e942a7dd4a","l3NetworkUuids":["4f4b50d7cb6d3a9a944172b73653a593"]}";
action.deleteImageAfterSuccess = true;
action.deleteImageOnFail = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmInstanceFromOvfAction.Result res = action.call();
```

 Python SDK

```
CreateVmInstanceFromOvfAction action = CreateVmInstanceFromOvfAction()
action.xmlBase64 = "PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPEVudmVsb3BlIHhtbG5zPSJodHRwOi8vc2NoZW1hcy5kbXR"
action.jsonImageInfos = "[{"ovfId":"vm-1-system.vmdk","type":"Download","installPath":"http://xxx/vm-1-system.vmdk"}]"
action.backupStorageUuid = "3302f082e39d3ba8a246de74179e5512"
action.jsonCreateVmParam = "{"name":"a","clusterUuid":"e79b1a7be3183216a99874e942a7dd4a","l3NetworkUuids":["4f4b50d7cb6d3a9a944172b73653a593"]}"
action.deleteImageAfterSuccess = true
action.deleteImageOnFail = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmInstanceFromOvfAction.Result res = action.call()
```

---

#### 导出云主机的OVA包(ExportVmOvaPackage)



##### API请求

 URLs

```
POST zstack/v1/ovf/ova-packages
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "ova",
    "description": "description",
    "vmUuid": "af3c221d1dc4351999e0834c00b33118",
    "backupStorageUuid": "4205d410ede03e759277c9987c660a16"
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
-X POST -d '{"params":{"name":"ova","description":"description","vmUuid":"af3c221d1dc4351999e0834c00b33118","backupStorageUuid":"4205d410ede03e759277c9987c660a16"}}' http://localhost:8080/zstack/v1/ovf/ova-packages
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 4.4.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.4.6 |
| vmUuid | String | body(包含在**params**结构中) | 源云主机UUID |  | 4.4.6 |
| backupStorageUuid | String | body(包含在**params**结构中) | 导出目的镜像存储UUID |  | 4.4.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.4.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.4.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "9f77f8d79ee138bfac21290c02fc2cb6",
    "name": "ova",
    "description": "description",
    "vmUuid": "43d306a42cdf38c48458d061e40b810a",
    "backupStorageUuid": "22f7145dba4f3da6af7ff8f0e02af6e3",
    "state": "Exported",
    "exportUrl": "http://bs-host-name/path/to/ova.ova",
    "md5Sum": "sampleMd5Sum",
    "format": "OVA",
    "size": 1.073741824E10,
    "createDate": "May 10, 2022 5:24:03 AM",
    "lastOpDate": "May 10, 2022 5:24:03 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.4.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.6 |
| description | String | 错误的概要描述 | 4.4.6 |
| details | String | 错误的详细信息 | 4.4.6 |
| elaboration | String | 保留字段，默认为null | 4.4.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| vmUuid | String | 源虚拟机UUID | 4.4.6 |
| backupStorageUuid | String | 镜像包文件位于的镜像存储UUID | 4.4.6 |
| exportUrl | String | 下载地址 | 4.4.6 |
| md5Sum | String | 镜像包文件MD5校验码 | 4.4.6 |
| format | String | 镜像包文件格式 | 4.4.6 |
| size | Long | 镜像包文件大小 | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| state | ImagePackageState | 详情参考[state] | 4.4.6 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Exporting | ImagePackageState | 导出中 | 4.4.6 |
| Exported | ImagePackageState | 已导出 | 4.4.6 |



##### SDK示例

 Java SDK

```
ExportVmOvaPackageAction action = new ExportVmOvaPackageAction();
action.name = "ova";
action.description = "description";
action.vmUuid = "af3c221d1dc4351999e0834c00b33118";
action.backupStorageUuid = "4205d410ede03e759277c9987c660a16";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExportVmOvaPackageAction.Result res = action.call();
```

 Python SDK

```
ExportVmOvaPackageAction action = ExportVmOvaPackageAction()
action.name = "ova"
action.description = "description"
action.vmUuid = "af3c221d1dc4351999e0834c00b33118"
action.backupStorageUuid = "4205d410ede03e759277c9987c660a16"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExportVmOvaPackageAction.Result res = action.call()
```

---

#### 解析OVF模板信息(ParseOvf)



##### API请求

 URLs

```
POST zstack/v1/ovf/parse
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "xmlBase64": "Base64 encoded ovf file content."
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
--X POST -d '{"params":{"xmlBase64":"Base64 encoded ovf file content."}}' http://localhost:8080/zstack/v1/ovf/parse
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| xmlBase64 | String | body(包含在`params`结构中) | Base64编码的OVF文件内容 |  | 4.4.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.6 |



##### API返回

 返回示例

```
{
  "ovfInfo": {
    "disks": [
      {
        "index": 0.0,
        "diskId": "system",
        "fileRef": "file1",
        "fileName": "system.vmdk",
        "format": "vmdk",
        "populatedSize": 1.688600576E9,
        "capacity": 6.442450944E10
      }
    ],
    "networks": [
      {
        "name": "red-net"
      }
    ],
    "cpu": {
      "instanceId": "2",
      "quantity": 4.0,
      "coresPerSocket": 4.0
    },
    "memory": {
      "instanceId": "3",
      "quantity": 4.294967296E9
    },
    "vmName": "VM-1",
    "os": {
      "id": 107.0,
      "version": "7",
      "osType": "centos",
      "description": "CentOS 7"
    },
    "systemInfo": {
      "virtualSystemType": "vmx-18"
    },
    "nics": [
      {
        "networkName": "red-net",
        "nicModel": "E1000",
        "nicName": "nic-1",
        "autoAllocation": true
      }
    ],
    "cdDrivers": [
      {
        "autoAllocation": true,
        "driverType": "SATA",
        "subType": "vmware.cdrom.remotepassthrough",
        "name": "CD"
      }
    ],
    "volumes": [
      {
        "name": "System Volume",
        "diskId": "system",
        "driverType": "IDE"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.6 |
| ovfInfo | OvfInfo | 详情参考[ovfInfo] | 4.4.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.6 |
| description | String | 错误的概要描述 | 4.4.6 |
| details | String | 错误的详细信息 | 4.4.6 |
| elaboration | String | 保留字段，默认为null | 4.4.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.6 |

 #ovfInfo

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmName | String | 云主机名称 | 4.4.6 |
| disks | List | 详情参考[disks] | 4.4.6 |
| networks | List | 详情参考[networks] | 4.4.6 |
| cpu | OvfCpuInfo | 详情参考[cpu] | 4.4.6 |
| memory | OvfMemoryInfo | 详情参考[memory] | 4.4.6 |
| os | OvfOSInfo | 详情参考[os] | 4.4.6 |
| systemInfo | OvfSystemInfo | 详情参考[systemInfo] | 4.4.6 |
| nics | List | 详情参考[nics] | 4.4.6 |
| cdDrivers | List | 详情参考[cdDrivers] | 4.4.6 |
| volumes | List | 详情参考[volumes] | 4.4.6 |

 #disks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| index | int | 磁盘序号 | 4.4.6 |
| diskId | String | 磁盘ID | 4.4.6 |
| fileRef | String | 文件引用名称 | 4.4.6 |
| fileName | String | 镜像文件名 | 4.4.6 |
| format | String | 镜像文件格式 | 4.4.6 |
| populatedSize | Long | 镜像文件大小 | 4.4.6 |
| capacity | Long | 磁盘容量，单位Byte | 4.4.6 |

 #networks

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 网络名称 | 4.4.6 |

 #cpu

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| instanceId | String | 硬件ID | 4.4.6 |
| quantity | Integer | CPU内核数量 | 4.4.6 |
| coresPerSocket | Integer | 每CPU内核数 | 4.4.6 |

 #memory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| instanceId | String | 硬件ID | 4.4.6 |
| quantity | Long | 内存容量，单位Byte | 4.4.6 |

 #os

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Integer | 操作系统ID | 4.4.6 |
| version | String | 操作系统版本 | 4.4.6 |
| osType | String | 操作系统类型 | 4.4.6 |
| description | String | 操作系统描述 | 4.4.6 |

 #systemInfo

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| virtualSystemType | String | 硬件系统类型 | 4.4.6 |
| firmwareType | String | 固件类型 | 4.4.6 |

 #nics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| networkName | String | 网络名称 | 4.4.6 |
| nicModel | String | 网卡型号 | 4.4.6 |
| nicName | String | 网卡名称 | 4.4.6 |
| autoAllocation | Boolean | 是否自动分配 | 4.4.6 |

 #cdDrivers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| autoAllocation | Boolean | 是否自动分配 | 4.4.6 |
| driverType | String | 光驱控制器类型 | 4.4.6 |
| subType | String | 子类型 | 4.4.6 |
| name | String | 光驱名称 | 4.4.6 |

 #volumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 磁盘名称 | 4.4.6 |
| diskId | String | 磁盘ID | 4.4.6 |
| driverType | String | 磁盘驱动器类型 | 4.4.6 |



##### SDK示例

 Java SDK

```
ParseOvfAction action = new ParseOvfAction();
action.xmlBase64 = "Base64 encoded ovf file content.";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ParseOvfAction.Result res = action.call();
```

 Python SDK

```
ParseOvfAction action = ParseOvfAction()
action.xmlBase64 = "Base64 encoded ovf file content."
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ParseOvfAction.Result res = action.call()
```

---

#### 删除云主机(DestroyVmInstance)



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 8d618c25ba3b4eb7bc6dda7e47d1b6b4" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/5e22e2b1c4ab40739cd0b7717368dfa7?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| deleteMode(可选) | String | body |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DestroyVmInstanceAction action = new DestroyVmInstanceAction();
action.uuid = "c0b82973fbed42a09f3a30ce142fb168";
action.deleteMode = "Permissive";
action.sessionId = "97ddb4b10e34452c90d8591927cf3de5";
DestroyVmInstanceAction.Result res = action.call();
```

 Python SDK

```
DestroyVmInstanceAction action = DestroyVmInstanceAction()
action.uuid = "0de3629902f1449d86256934552d5b3d"
action.deleteMode = "Permissive"
action.sessionId = "931c9e7e586c4b5fa44ed1155985ac1a"
DestroyVmInstanceAction.Result res = action.call()
```

---

#### 恢复已删除云主机(RecoverVmInstance)



恢复一个处于Destroyed状态的云主机。恢复后云主机处于Stopped状态并且没有IP地址。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"recoverVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/0eb6f6f88ff93da48cfc5bca0dbd5c18/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1b3cdc92c630366285008630dc04cccf",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "5e5e70ad37603682bffeeabb1f8ce2ab",
    "clusterUuid": "eaa8bd07672b362e81fefddf492f3500",
    "imageUuid": "f4054dad08253b9e815ca27816a6e6b1",
    "hostUuid": "b274b64311aa3b25ab18d6afe7e62b47",
    "lastHostUuid": "641b69d147fe37d58979c0bc0a8bb24b",
    "instanceOfferingUuid": "f7e6c6ad82623a8d9076e09493a52103",
    "rootVolumeUuid": "a7489a3011c233a4bd89c0b0ac9321bd",
    "platform": "Linux",
    "defaultL3NetworkUuid": "02f493cfb1873724949114b8a9bb85f7",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Stopped",
    "vmNics": [
      {
        "uuid": "0e912b741b5636fcbe4a6555d7ed3c83",
        "vmInstanceUuid": "1b3cdc92c630366285008630dc04cccf",
        "l3NetworkUuid": "02f493cfb1873724949114b8a9bb85f7",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "a7489a3011c233a4bd89c0b0ac9321bd",
        "name": "Root-Volume-For-VM-1b3cdc92c630366285008630dc04cccf",
        "primaryStorageUuid": "5543d328687234f88bb613a383453121",
        "vmInstanceUuid": "1b3cdc92c630366285008630dc04cccf",
        "diskOfferingUuid": "367b3392c77b3faf8786fdfa40cafcd3",
        "rootImageUuid": "f4054dad08253b9e815ca27816a6e6b1",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-a7489a3011c233a4bd89c0b0ac9321bd/a7489a3011c233a4bd89c0b0ac9321bd.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例



Java SDK

```
RecoverVmInstanceAction action = new RecoverVmInstanceAction();
action.uuid = "526fac8545fb4aa0aa2c78209378d63f";
action.sessionId = "a52aa10c9d5d445cb44593e21c3895f3";
RecoverVmInstanceAction.Result res = action.call();
```



Python SDK

```
RecoverVmInstanceAction action = RecoverVmInstanceAction()
action.uuid = "d0b44ed4139f4a7fa50951b99c9b2fd3"
action.sessionId = "078d6751ce124bd5a1fb00015116db8b"
RecoverVmInstanceAction.Result res = action.call()
```

---

#### 彻底删除云主机(ExpungeVmInstance)



彻底删除一个处于Destroyed状态的云主机。该操作会从数据库里面删除云主机并在主存储上删除该云主机的根云盘。该操作一旦执行就不可恢复。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "expungeVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"expungeVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/e57788f713963e98a99a9f6b0bd8482c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
ExpungeVmInstanceAction action = new ExpungeVmInstanceAction();
action.uuid = "f3b0b9538e6a49a88e189ba2c42b728e";
action.sessionId = "332f2d77997446fbaef62df0411b2635";
ExpungeVmInstanceAction.Result res = action.call();
```

 Python SDK

```
ExpungeVmInstanceAction action = ExpungeVmInstanceAction()
action.uuid = "1cc86ac86211480485a251a48bc1928e"
action.sessionId = "6af024d8e8bf44709b42ffa623e96073"
ExpungeVmInstanceAction.Result res = action.call()
```

---

#### 查询云主机(QueryVmInstance)



##### API请求

 URLs

```
GET zstack/v1/vm-instances
GET zstack/v1/vm-instances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 06771ba1b893402bb4c715b7acf3606e" \
-X GET http://localhost:8080/zstack/v1/vm-instances?q=name=vm1&q=vmNics.ip=192.168.20.100
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 95c7b190063f423ea6b305f054af8bf5" \
-X GET http://localhost:8080/zstack/v1/vm-instances/3b9c1b2bca5848459881bfad378540b5
```



可查询字段

运行CLI命令行工具，输入`QueryVmInstance`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "a43716db0d713c319be06811ebcc00a1",
      "name": "Test-VM",
      "description": "web server VM",
      "zoneUuid": "dfa731eef1f13f1da298855d6ce282bd",
      "clusterUuid": "743b07830cb6324192a2e0cc34186814",
      "imageUuid": "ea51c3f89cb53b0db4abdd648c476f80",
      "hostUuid": "d808c413110a32cab4d9c4d034818eb0",
      "lastHostUuid": "3da349b211ba3cebb5629c0f90aadf63",
      "instanceOfferingUuid": "1a3f2ce111cf318688f7bb0cc217d5ff",
      "rootVolumeUuid": "b677bd698e1d3e4b9787fa81827d13d4",
      "platform": "Linux",
      "architecture": "x86_64",
      "defaultL3NetworkUuid": "3bcc70b465c4371b8a7f9bd975fdec76",
      "type": "UserVm",
      "hypervisorType": "KVM",
      "memorySize": 8.589934592E9,
      "cpuNum": 1.0,
      "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
      "createDate": "Nov 14, 2017 9:20:57 AM",
      "lastOpDate": "Nov 14, 2017 9:20:57 AM",
      "state": "Running",
      "vmNics": [
        {
          "uuid": "39da5aec41f336929db3458395614151",
          "vmInstanceUuid": "a43716db0d713c319be06811ebcc00a1",
          "usedIpUuid": "69008cc8dbd03aeba1787ec024a0b326",
          "l3NetworkUuid": "3bcc70b465c4371b8a7f9bd975fdec76",
          "ip": "192.168.1.10",
          "mac": "00:0c:29:bd:99:fc",
          "hypervisorType": "KVM",
          "netmask": "255.255.255.0",
          "gateway": "192.168.1.1",
          "deviceId": 0.0,
          "createDate": "Nov 14, 2017 9:20:57 AM",
          "lastOpDate": "Nov 14, 2017 9:20:57 AM"
        }
      ],
      "allVolumes": [
        {
          "uuid": "b677bd698e1d3e4b9787fa81827d13d4",
          "name": "Root-Volume-For-VM-a43716db0d713c319be06811ebcc00a1",
          "primaryStorageUuid": "413b0d61df4e3b088f5ee045ff84b65b",
          "vmInstanceUuid": "a43716db0d713c319be06811ebcc00a1",
          "diskOfferingUuid": "37c73ea89a2b3a7bb7126f5fe7a32dc6",
          "rootImageUuid": "ea51c3f89cb53b0db4abdd648c476f80",
          "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-b677bd698e1d3e4b9787fa81827d13d4/b677bd698e1d3e4b9787fa81827d13d4.qcow2",
          "type": "Root",
          "format": "qcow2",
          "size": 1.073741824E11,
          "actualSize": 2.147483648E10,
          "deviceId": 0.0,
          "state": "Enabled",
          "status": "Ready",
          "createDate": "Nov 14, 2017 9:20:57 AM",
          "lastOpDate": "Nov 14, 2017 9:20:57 AM"
        }
      ],
      "vmCdRoms": [
        {
          "uuid": "45330c110bf23b08b1e41036d6c6aa6c",
          "deviceId": 0.0,
          "isoUuid": "5887742601aa32b5ac57e9024ff38ee8",
          "name": "cd-1",
          "description": "desc",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "guestOsType": "CentOS7"
    }
  ]
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories
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


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| architecture | String | 架构类型 | 4.5.0 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String | 云主机类型，包括： UserVm ApplianceVm | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 云主机状态，包括： Created Starting Running Stopping Stopped Rebooting Destroying Destroyed Migrating Expunging Pausing Paused Resuming VolumeMigrating Unknown | 0.6 |
| guestOsType | String | 操作系统类型 | 4.5.0 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.5.0 |


- Created 可以转换到 Starting, Destroying, Destroyed；
- Starting 可以转换到 Running, Stopped, Paused, Destroying, Unknown；
- Running 可以转换到 Destroying, Stopping, Stopped, Rebooting, Migrating, Pausing, Paused, Unknown；
- Stopping 可以转换到 Stopped, Destroying, Running, Unknown；
- Stopped 可以转换到 Starting, Running, Paused, Destroying, VolumeMigrating, Unknown；
- Migrating 可以转换到 Running, Stopped, Unknown, Destroying；
- VolumeMigrating 可以转换到 Stopped, Unknown, Destroying；
- Rebooting 可以转换到 Running, Stopped, Unknown, Destroying；
- Paused 可以转换到 Resuming, Stopped, Running, Stopping, Destroying, Unknown, Migrating；
- Pausing 可以转换到 Paused, Destroying, Running, Unknown；
- Resuming 可以转换到 Running, Destroying, Paused, Unknown；
- Unknown 可以转换到 Destroying, Stopping, Paused, Running, Stopped；
- Destroying 可以转换到 Unknown, Destroyed, Running, Expunging；
- Destroyed 可以转换到 Stopped。


> **注意:** 说明: 云主机状态变更总结如下：

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String | IP地址 | 0.6 |
| mac | String | MAC地址 | 0.6 |
| hypervisorType | String | 虚拟化类型 | 0.6 |
| netmask | String | 子网掩码 | 0.6 |
| gateway | String | 网关 | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | IP地址版本 | 0.6 |
| deviceId | Integer | 设备ID | 0.6 |
| type | String | 网卡类型 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String | 云盘根镜像UUID | 0.6 |
| installPath | String | 云盘在主存储上的路径 | 0.6 |
| type | String | 云盘类型，数据云盘/根云盘 | 0.6 |
| format | String | 云盘格式 | 0.6 |
| size | Long | 云盘大小 | 0.6 |
| actualSize | Long | 云盘真实大小 | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String | 云盘是否开启 | 0.6 |
| status | String | 云盘状态 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean | 是否共享云盘 | 0.6 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 3.2.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| vmInstanceUuid | String | 云主机UUID | 4.5.0 |
| deviceId | Integer | 光驱顺序号 | 4.5.0 |
| isoUuid | String | ISO镜像UUID | 4.5.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
QueryVmInstanceAction action = new QueryVmInstanceAction();
action.conditions = asList("name=vm1","vmNics.ip=192.168.20.100");
action.sessionId = "1a2f35770a8e4e53b4bfb9d0d7ae7e50";
QueryVmInstanceAction.Result res = action.call();
```

 Python SDK

```
QueryVmInstanceAction action = QueryVmInstanceAction()
action.conditions = ["name=vm1","vmNics.ip=192.168.20.100"]
action.sessionId = "0dd4f4ec663f4502ba3fedda9d0ebc1b"
QueryVmInstanceAction.Result res = action.call()
```

---

#### 启动云主机(StartVmInstance)



启动一个云主机。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "startVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"startVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/647db3dbf974372ead60d4ba1c9efac3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| clusterUuid (可选) | String | body(包含在**startVmInstance**结构中) | 集群UUID。若指定，云主机将在该集群启动 |  | 0.6 |
| hostUuid (可选) | String | body(包含在**startVmInstance**结构中) | 物理机UUID。若指定，云主机将在该物理机启动。该字段覆盖**clusterUuid**字段 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`haUuid::HA_GROUP_UUID`
  - 例如：`haUuid::e2af8f869eff49d2a3d6f86cadc27090`
- 例如：`haUuid::e2af8f869eff49d2a3d6f86cadc27090`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4fe3f157d2ed3952a528f7a7ad66b458",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "05f33790e80833f09d1e41d5dcce1cdb",
    "clusterUuid": "ed1f4443dfe83da2a4682eea6a6ff8a4",
    "imageUuid": "9d708bf2d7793d41a8d6aa91ffd8c997",
    "hostUuid": "5822c13181e73c7e8542884ba85e9339",
    "lastHostUuid": "b3ead9d0161f3c228cc4d4663f4886a4",
    "instanceOfferingUuid": "2799e9b24b173e47b63d15ee1e37212d",
    "rootVolumeUuid": "53bd57a8d319373eb2e957bb34d10ad6",
    "platform": "Linux",
    "defaultL3NetworkUuid": "0ed1289e1a5f333f9defdec7a6fd5f74",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "b2293d252de931be87ca1ac4379269e9",
        "vmInstanceUuid": "4fe3f157d2ed3952a528f7a7ad66b458",
        "usedIpUuid": "78c4d1ced5cb3d5f89dabf4798819ecc",
        "l3NetworkUuid": "0ed1289e1a5f333f9defdec7a6fd5f74",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "53bd57a8d319373eb2e957bb34d10ad6",
        "name": "Root-Volume-For-VM-4fe3f157d2ed3952a528f7a7ad66b458",
        "primaryStorageUuid": "6d34e188053e31efb36aeae392a6d92e",
        "vmInstanceUuid": "4fe3f157d2ed3952a528f7a7ad66b458",
        "diskOfferingUuid": "44980553f47e3bfe94674c2004a9ffe7",
        "rootImageUuid": "9d708bf2d7793d41a8d6aa91ffd8c997",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-53bd57a8d319373eb2e957bb34d10ad6/53bd57a8d319373eb2e957bb34d10ad6.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
StartVmInstanceAction action = new StartVmInstanceAction();
action.uuid = "22771459f2184f2f96c8da84b7e660d8";
action.sessionId = "a6beddb0aa754b4b992d92dc13ff0c2c";
StartVmInstanceAction.Result res = action.call();
```

 Python SDK

```
StartVmInstanceAction action = StartVmInstanceAction()
action.uuid = "b2b7503e1fdd482594700cf35715122a"
action.sessionId = "207b50ceb1b64ea48a7446b92932d4cb"
StartVmInstanceAction.Result res = action.call()
```

---

#### 停止云主机(StopVmInstance)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "stopVmInstance": {
    "type": "grace"
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
-X PUT -d '{"stopVmInstance":{"type":"grace"}}' \
http://localhost:8080/zstack/v1/vm-instances/5e2f112ee1ef3467933e1006b639b023/actions
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| type (可选) | String | body(包含在**stopVmInstance**结构中) | 停止云主机的方式。 **grace**：优雅关机，需要云主机里安装了相关ACPI驱动； **cold**：冷关机，相当于直接断电 | grace cold | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| stopHA (可选) | String | body(包含在**stopVmInstance**结构中) | 彻底关闭HA云主机 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "02b75a26397b347a8cf5cfaf5ce93ed1",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "2a9974ad7f7a343f908709094b509567",
    "clusterUuid": "e8626869bf793e0984bd4834c36582c4",
    "imageUuid": "7020002bfd163c9e8bf59e94b3948b3b",
    "hostUuid": "7cfc6cb3cb0d310281452e452f6fd8a5",
    "lastHostUuid": "e8b813355af136bdb5c34b1a760e52d4",
    "instanceOfferingUuid": "c8e4bc576e8633698b340ca572f45ae8",
    "rootVolumeUuid": "96b787ec9551331c907060238dff530f",
    "platform": "Linux",
    "defaultL3NetworkUuid": "6721d14d610037f193c17cb3b6f361b4",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Stopped",
    "vmNics": [
      {
        "uuid": "f13d9a01d5ff3953823f65f78bd94668",
        "vmInstanceUuid": "02b75a26397b347a8cf5cfaf5ce93ed1",
        "usedIpUuid": "9f7711d4a8b43c1ea582cedf98f44759",
        "l3NetworkUuid": "6721d14d610037f193c17cb3b6f361b4",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "96b787ec9551331c907060238dff530f",
        "name": "Root-Volume-For-VM-02b75a26397b347a8cf5cfaf5ce93ed1",
        "primaryStorageUuid": "d265ae8ea11d346cb0e657d46b6f2f86",
        "vmInstanceUuid": "02b75a26397b347a8cf5cfaf5ce93ed1",
        "diskOfferingUuid": "264dd6d637953cdda2ec0fc0c083a1fa",
        "rootImageUuid": "7020002bfd163c9e8bf59e94b3948b3b",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-96b787ec9551331c907060238dff530f/96b787ec9551331c907060238dff530f.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
StopVmInstanceAction action = new StopVmInstanceAction();
action.uuid = "b3edccc737664a24b6b8be3a249b87fb";
action.type = "grace";
action.sessionId = "7f36a5bff7ae49c185302dca91470133";
StopVmInstanceAction.Result res = action.call();
```

 Python SDK

```
StopVmInstanceAction action = StopVmInstanceAction()
action.uuid = "a6162b0be4104d069ab42f708d7da150"
action.type = "grace"
action.sessionId = "d369764a2e29479c9e70f86a3b4662e3"
StopVmInstanceAction.Result res = action.call()
```

---

#### 重启云主机(RebootVmInstance)



重启一个云主机。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "rebootVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"rebootVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/5bae2edd13e73805a552df9a2aa8d4c9/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c8ce67b231bc3a7b998fc5c514fa521a",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "dd0c0aae391d39b7b7904146604e5e61",
    "clusterUuid": "5adf2ae4f6d5339d80c8e698551358fc",
    "imageUuid": "2ad3afd4feac3e618b2603c42d6b2693",
    "hostUuid": "1d7c0568f02e3c85a1fd79aa0c7fc60d",
    "lastHostUuid": "cb0d0894cae53b83b44fe90923b31f6d",
    "instanceOfferingUuid": "5aefd43e8c833cebab918cdae7a5e128",
    "rootVolumeUuid": "627c0f9203ad3a5ea4ad443674aea323",
    "platform": "Linux",
    "defaultL3NetworkUuid": "e03922c991a03dc1b4e3b8988d06f65c",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "1bbcdfc8626930bc8113fb9ec805bfea",
        "vmInstanceUuid": "c8ce67b231bc3a7b998fc5c514fa521a",
        "usedIpUuid": "b73449f396c035c39f1074c5499589f7",
        "l3NetworkUuid": "e03922c991a03dc1b4e3b8988d06f65c",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "627c0f9203ad3a5ea4ad443674aea323",
        "name": "Root-Volume-For-VM-c8ce67b231bc3a7b998fc5c514fa521a",
        "primaryStorageUuid": "b0f0f4cbc97a31aaaaaa2e83e769c378",
        "vmInstanceUuid": "c8ce67b231bc3a7b998fc5c514fa521a",
        "diskOfferingUuid": "59c4db99fb6e3504ae5fe4e5a05dadd8",
        "rootImageUuid": "2ad3afd4feac3e618b2603c42d6b2693",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-627c0f9203ad3a5ea4ad443674aea323/627c0f9203ad3a5ea4ad443674aea323.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
RebootVmInstanceAction action = new RebootVmInstanceAction();
action.uuid = "69a8c3323e404923ac413a913b03e1c6";
action.sessionId = "6c8bbc1f21c64176b782ac60e6ee39da";
RebootVmInstanceAction.Result res = action.call();
```

 Python SDK

```
RebootVmInstanceAction action = RebootVmInstanceAction()
action.uuid = "f2dfa73793d048148a951f59cee38e65"
action.sessionId = "656c2f3efb3844efb6fad3f37e2fb6b8"
RebootVmInstanceAction.Result res = action.call()
```

---

#### 暂停云主机(PauseVmInstance)



暂停一个云主机，云主机状态仍然存在内存里面，稍后可以恢复。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "pauseVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"pauseVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/b7defb2dd07a38a8af7b98737a92080d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
    "inventory": {
        "allVolumes": [
            {
                "actualSize": 7995392,
                "createDate": "Mar 1, 2021 3:21:27 PM",
                "description": "Root volume for VM[uuid:01144322f84b45c7ae4d9c3404f72eaa]",
                "deviceId": 0,
                "format": "qcow2",
                "installPath": "/cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-a29bb104c0684e12ba82eb59ade27e77/a29bb104c0684e12ba82eb59ade27e77.qcow2",
                "isShareable": false,
                "lastOpDate": "Mar 1, 2021 3:21:28 PM",
                "name": "ROOT-for-云主机-3",
                "primaryStorageUuid": "4fff5349c39c495282634e53dd439e67",
                "rootImageUuid": "3ea614073812442e9b76c6edee8b044d",
                "size": 12682240,
                "state": "Enabled",
                "status": "Ready",
                "type": "Root",
                "uuid": "a29bb104c0684e12ba82eb59ade27e77",
                "vmInstanceUuid": "01144322f84b45c7ae4d9c3404f72eaa"
            }
        ],
        "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
        "clusterUuid": "ad712bfb092b4112996b3cc1fbc65ee9",
        "cpuNum": 1,
        "cpuSpeed": 0,
        "createDate": "Mar 1, 2021 3:21:27 PM",
        "defaultL3NetworkUuid": "b0caad1f94af4178a9712a3f18b9bf45",
        "description": "",
        "hostUuid": "d961c73eb0ad40838bf95a88288c1600",
        "hypervisorType": "KVM",
        "imageUuid": "3ea614073812442e9b76c6edee8b044d",
        "instanceOfferingUuid": "bd3e9c6da7a9496cacd77bf23d9b75b6",
        "lastHostUuid": "d961c73eb0ad40838bf95a88288c1600",
        "memorySize": 314572800,
        "name": "云主机-3",
        "platform": "Linux",
        "rootVolumeUuid": "a29bb104c0684e12ba82eb59ade27e77",
        "state": "Paused",
        "type": "UserVm",
        "uuid": "01144322f84b45c7ae4d9c3404f72eaa",
        "vmCdRoms": [
            {
                "createDate": "Mar 1, 2021 3:21:28 PM",
                "deviceId": 0,
                "lastOpDate": "Mar 1, 2021 3:21:28 PM",
                "name": "vm-01144322f84b45c7ae4d9c3404f72eaa-cdRom",
                "uuid": "5691df46c95343b1a1eb4837a4fc9467",
                "vmInstanceUuid": "01144322f84b45c7ae4d9c3404f72eaa"
            }
        ],
        "vmNics": [
            {
                "createDate": "Mar 1, 2021 3:21:28 PM",
                "deviceId": 0,
                "driverType": "virtio",
                "gateway": "10.0.0.1",
                "hypervisorType": "KVM",
                "internalName": "vnic13.0",
                "ip": "10.82.25.132",
                "l3NetworkUuid": "b0caad1f94af4178a9712a3f18b9bf45",
                "lastOpDate": "Mar 1, 2021 3:21:28 PM",
                "mac": "fa:df:d7:c0:37:00",
                "netmask": "255.0.0.0",
                "type": "VNIC",
                "usedIps": [
                    {
                        "createDate": "Mar 1, 2021 3:21:27 PM",
                        "gateway": "10.0.0.1",
                        "ip": "10.82.25.132",
                        "ipInLong": 173152644,
                        "ipRangeUuid": "af6cfb66f8584cf7b40fd3bbedeb5979",
                        "ipVersion": 4,
                        "l3NetworkUuid": "b0caad1f94af4178a9712a3f18b9bf45",
                        "lastOpDate": "Mar 1, 2021 3:21:27 PM",
                        "netmask": "255.0.0.0",
                        "uuid": "f0132933066a39bf86b87a5dd98e84a1",
                        "vmNicUuid": "62a9762efe9748dab5f6710d1dd9c9bb"
                    }
                ],
                "uuid": "62a9762efe9748dab5f6710d1dd9c9bb",
                "vmInstanceUuid": "01144322f84b45c7ae4d9c3404f72eaa"
            }
        ],
        "zoneUuid": "b9dca94180584c9390de0ab7269f32ca"
    },
    "success": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String | 云盘根镜像UUID | 4.1.0 |
| installPath | String | 云盘在主存储上的路径 | 4.1.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.1.0 |
| format | String | 云盘格式 | 4.1.0 |
| size | Long | 云盘大小 | 4.1.0 |
| actualSize | Long | 云盘真实大小 | 4.1.0 |
| deviceId | Integer |  | 4.1.0 |
| state | String | 云盘是否启动 | 4.1.0 |
| status | String | 云盘状态 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| isShareable | Boolean | 是否共享云盘 | 4.1.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.1.0 |



##### SDK示例

 Java SDK

```
PauseVmInstanceAction action = new PauseVmInstanceAction();
action.uuid = "b7defb2dd07a38a8af7b98737a92080d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PauseVmInstanceAction.Result res = action.call();
```

 Python SDK

```
PauseVmInstanceAction action = PauseVmInstanceAction()
action.uuid = "b7defb2dd07a38a8af7b98737a92080d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PauseVmInstanceAction.Result res = action.call()
```

---

#### 恢复暂停的云主机(ResumeVmInstance)



恢复一个被暂停的云主机，云主机从内存中恢复运行。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "resumeVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"resumeVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/ab9bacf8136c3c55ac77dae5f6d6f503/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "83d00b5be8ec37fe858c841e96200824",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "73e6cf01cbad3ca19e3844369ebc30c1",
    "clusterUuid": "85cbb3a1d2da3dd6bcb8adbb4dead1e4",
    "imageUuid": "0107a95e6c4d3617be678f94908b440b",
    "hostUuid": "19c81f0e22243a98b249d9fa725f20a7",
    "lastHostUuid": "969ed03e2e0835b79a61f796d9f4c702",
    "instanceOfferingUuid": "befdd124574c38669a2b236b509506bb",
    "rootVolumeUuid": "958e1ad5cf2038ca875f9d31dc721e5c",
    "platform": "Linux",
    "defaultL3NetworkUuid": "1f78a72f5f663f8ab4bcfb0b71e94396",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "ee337502670e323a8fb85134e36471bc",
        "vmInstanceUuid": "83d00b5be8ec37fe858c841e96200824",
        "usedIpUuid": "8b1565028e06391c9a88b2d8536bf6de",
        "l3NetworkUuid": "1f78a72f5f663f8ab4bcfb0b71e94396",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "958e1ad5cf2038ca875f9d31dc721e5c",
        "name": "Root-Volume-For-VM-83d00b5be8ec37fe858c841e96200824",
        "primaryStorageUuid": "25ff56ff28e03d9ebc584df9f7d3cf99",
        "vmInstanceUuid": "83d00b5be8ec37fe858c841e96200824",
        "diskOfferingUuid": "c976dbc160ec31e695f951bb2198c33c",
        "rootImageUuid": "0107a95e6c4d3617be678f94908b440b",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-958e1ad5cf2038ca875f9d31dc721e5c/958e1ad5cf2038ca875f9d31dc721e5c.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
ResumeVmInstanceAction action = new ResumeVmInstanceAction();
action.uuid = "c1304094962b4254b4d36c6e2744c2d5";
action.sessionId = "45e29136a13c49108df2fc7671c72431";
ResumeVmInstanceAction.Result res = action.call();
```

 Python SDK

```
ResumeVmInstanceAction action = ResumeVmInstanceAction()
action.uuid = "24876a8330574db78649efaf8bce7e62"
action.sessionId = "10f42b569887433fabdbb82672d32269"
ResumeVmInstanceAction.Result res = action.call()
```

---

#### 重置云主机(ReimageVmInstance)

  将一个云主机的根云盘重置为最初状态。该API只对从非ISO创建出的云主机有效。

> **注意:** Warning: 执行该API后，云主机根云盘重置成最初创建的状态，意味着所有后续写入的数据都会被丢失，该操作不可逆！



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "reimageVmInstance": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"reimageVmInstance":{}}' \
http://localhost:8080/zstack/v1/vm-instances/f38615d717a438c39eca3b8b560a00ef/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "efb855424e2b38d3bc320f105a13bc0b",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "33a8c6dea1773921b68e25fcb24ac6be",
    "clusterUuid": "18425d00b5323689892b7486cf73ddaf",
    "imageUuid": "7386cfa57d8530e3a41b7f55a3a5509c",
    "hostUuid": "1e7f7702093d3c2e92497116a4dfd8b2",
    "lastHostUuid": "99a8c35c2f283c4799752e4656e8628f",
    "instanceOfferingUuid": "29307f05cde03ec5bd559bb88fd8aefe",
    "rootVolumeUuid": "5cf22d393d493a15866a172f5d5429b4",
    "platform": "Linux",
    "defaultL3NetworkUuid": "249a8e5928ca3b2694766c235c1111ea",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "cae339f2a70834fe9e7d65f88f09f6f6",
        "vmInstanceUuid": "efb855424e2b38d3bc320f105a13bc0b",
        "usedIpUuid": "47d53a778b1a38c9992cc87e536ade2b",
        "l3NetworkUuid": "249a8e5928ca3b2694766c235c1111ea",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "5cf22d393d493a15866a172f5d5429b4",
        "name": "Root-Volume-For-VM-efb855424e2b38d3bc320f105a13bc0b",
        "primaryStorageUuid": "ed936519554c3237b5dd13745625defa",
        "vmInstanceUuid": "efb855424e2b38d3bc320f105a13bc0b",
        "diskOfferingUuid": "3f94a3d296b43309bb1be95baabf088c",
        "rootImageUuid": "7386cfa57d8530e3a41b7f55a3a5509c",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-5cf22d393d493a15866a172f5d5429b4/5cf22d393d493a15866a172f5d5429b4.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
ReimageVmInstanceAction action = new ReimageVmInstanceAction();
action.vmInstanceUuid = "b733a61173bc4a85974a5a1391b62d12";
action.sessionId = "04d122b7e2934964af3c2af59130e600";
ReimageVmInstanceAction.Result res = action.call();
```

 Python SDK

```
ReimageVmInstanceAction action = ReimageVmInstanceAction()
action.vmInstanceUuid = "9ef51a211ed14d839807bfe2e2822f1a"
action.sessionId = "a8ccdcd85e2e4314b6a4a5379b5a9df9"
ReimageVmInstanceAction.Result res = action.call()
```

---

#### 创建资源分组目录(CreateDirectory)



##### API请求

 URLs

```
POST zstack/v1/create/directory
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "directory",
    "parentUuid": "a76994f58191389da72d093afdad61c7",
    "zoneUuid": "64a7b0eae75d336cb6954c6efedc79dc",
    "type": "default"
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
-X POST -d '{"params":{"name":"directory","parentUuid":"a76994f58191389da72d093afdad61c7","zoneUuid":"64a7b0eae75d336cb6954c6efedc79dc","type":"default"}}' http://localhost:8080/zstack/v1/create/directory
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.6.0 |
| parentUuid (可选) | String | body(包含在**params**结构中) | 父级目录UUID |  | 4.6.0 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 4.6.0 |
| type | String | body(包含在**params**结构中) |  |  | 4.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ac818da023833bcd83728b6374c2a4f0",
    "name": "test",
    "groupName": "admin/first/second",
    "parentUuid": "d6e5792bd4ef374ba99948ae83d3a7c3",
    "rootDirectoryUuid": "cf6a11447d5f38dd95a91cc392105b16",
    "zoneUuid": "3714f0cd0f3233dc96dc5fec67886c29",
    "type": "default"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| groupName | String | 所属分组 | 4.6.0 |
| parentUuid | String | 父级目录UUID | 4.6.0 |
| rootDirectoryUuid | String | 根目录UUID | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| type | String | 目录类型 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
CreateDirectoryAction action = new CreateDirectoryAction();
action.name = "directory";
action.parentUuid = "a76994f58191389da72d093afdad61c7";
action.zoneUuid = "64a7b0eae75d336cb6954c6efedc79dc";
action.type = "default";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateDirectoryAction.Result res = action.call();
```

 Python SDK

```
CreateDirectoryAction action = CreateDirectoryAction()
action.name = "directory"
action.parentUuid = "a76994f58191389da72d093afdad61c7"
action.zoneUuid = "64a7b0eae75d336cb6954c6efedc79dc"
action.type = "default"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateDirectoryAction.Result res = action.call()
```

---

#### 删除资源分组目录(DeleteDirectory)



##### API请求

 URLs

```
DELETE zstack/v1/delete/directory
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/delete/directory
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing Permissive | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteDirectoryAction action = new DeleteDirectoryAction();
action.uuid = "7e0f83ed1d1c3e0b81b4d93afa882ead";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteDirectoryAction.Result res = action.call();
```

 Python SDK

```
DeleteDirectoryAction action = DeleteDirectoryAction()
action.uuid = "7e0f83ed1d1c3e0b81b4d93afa882ead"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteDirectoryAction.Result res = action.call()
```

---

#### 添加资源至分组目录(AddResourcesToDirectory)



##### API请求

 URLs

```
POST zstack/v1/add/resources/directory
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "resourceUuids": [
      "ac852a8d7c8f3e15811e8f647f24d0f7",
      "5bde5466936638648574ac73fa0abeb0"
    ],
    "directoryUuid": "1eb4cb0f7ed33305aba79b4af9ac4594"
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
-X POST -d '{"params":{"resourceUuids":["ac852a8d7c8f3e15811e8f647f24d0f7","5bde5466936638648574ac73fa0abeb0"],"directoryUuid":"1eb4cb0f7ed33305aba79b4af9ac4594"}}' http://localhost:8080/zstack/v1/add/resources/directory
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuids | List | body(包含在**params**结构中) | 批量资源UUID |  | 4.6.0 |
| directoryUuid | String | body(包含在**params**结构中) | 目录UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
AddResourcesToDirectoryAction action = new AddResourcesToDirectoryAction();
action.resourceUuids = asList("ac852a8d7c8f3e15811e8f647f24d0f7","5bde5466936638648574ac73fa0abeb0");
action.directoryUuid = "1eb4cb0f7ed33305aba79b4af9ac4594";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddResourcesToDirectoryAction.Result res = action.call();
```

 Python SDK

```
AddResourcesToDirectoryAction action = AddResourcesToDirectoryAction()
action.resourceUuids = [ac852a8d7c8f3e15811e8f647f24d0f7, 5bde5466936638648574ac73fa0abeb0]
action.directoryUuid = "1eb4cb0f7ed33305aba79b4af9ac4594"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddResourcesToDirectoryAction.Result res = action.call()
```

---

#### 移动资源至分组目录(MoveResourcesToDirectory)



##### API请求

 URLs

```
PUT zstack/v1/move/resources/directory
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "moveResourcesToDirectory": {
    "resourceUuids": [
      "4330b08677e93bdb9c02f2e62d5e1136",
      "1cba5c53426e34118c3b35821d9fcfa6"
    ],
    "directoryUuid": "192dda86ccb3388c97a272775b9d292e"
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
-X PUT -d '{"moveResourcesToDirectory":{"resourceUuids":["4330b08677e93bdb9c02f2e62d5e1136","1cba5c53426e34118c3b35821d9fcfa6"],"directoryUuid":"192dda86ccb3388c97a272775b9d292e"}}' http://localhost:8080/zstack/v1/move/resources/directory
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuids | List | body(包含在**params**结构中) | 批量资源UUID |  | 4.6.0 |
| directoryUuid | String | body(包含在**params**结构中) | 目录UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
MoveResourcesToDirectoryAction action = new MoveResourcesToDirectoryAction();
action.resourceUuids = asList("4330b08677e93bdb9c02f2e62d5e1136","1cba5c53426e34118c3b35821d9fcfa6");
action.directoryUuid = "192dda86ccb3388c97a272775b9d292e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
MoveResourcesToDirectoryAction.Result res = action.call();
```

 Python SDK

```
MoveResourcesToDirectoryAction action = MoveResourcesToDirectoryAction()
action.resourceUuids = [4330b08677e93bdb9c02f2e62d5e1136, 1cba5c53426e34118c3b35821d9fcfa6]
action.directoryUuid = "192dda86ccb3388c97a272775b9d292e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
MoveResourcesToDirectoryAction.Result res = action.call()
```

---

#### 从分组目录移除资源(RemoveResourcesFromDirectory)



##### API请求

 URLs

```
DELETE zstack/v1/remove/resources/directory
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/remove/resources/directory
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuids | List | body | 批量资源UUID |  | 4.6.0 |
| directoryUuid | String | body | 目录UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
RemoveResourcesFromDirectoryAction action = new RemoveResourcesFromDirectoryAction();
action.resourceUuids = asList("564a0f94cf5432fea482f3b415730984","6278513ce2ad336f9083ef62a49c614c");
action.directoryUuid = "5612979b05e438aabefc6c7978aed875";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveResourcesFromDirectoryAction.Result res = action.call();
```

 Python SDK

```
RemoveResourcesFromDirectoryAction action = RemoveResourcesFromDirectoryAction()
action.resourceUuids = [564a0f94cf5432fea482f3b415730984, 6278513ce2ad336f9083ef62a49c614c]
action.directoryUuid = "5612979b05e438aabefc6c7978aed875"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveResourcesFromDirectoryAction.Result res = action.call()
```

---

#### 更新分组目录(UpdateDirectory)



##### API请求

 URLs

```
PUT zstack/v1/update/directory
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateDirectory": {
    "uuid": "66a79f93fd5d3d269302297dc1459f6e",
    "name": "test"
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
-X PUT -d '{"updateDirectory":{"uuid":"66a79f93fd5d3d269302297dc1459f6e","name":"test"}}' http://localhost:8080/zstack/v1/update/directory
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**updateDirectory**结构中) | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| name | String | body(包含在**updateDirectory**结构中) | 资源名称 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ce9c80c271df30eba545af5b7efc6b09",
    "name": "test",
    "groupName": "admin/first/second",
    "parentUuid": "5cc7f45b66783385b3f4a9d1ef109a5d",
    "rootDirectoryUuid": "57290934e96a305fbdad6ccb33bb64b8",
    "zoneUuid": "b103949274663c19b9675ea6f6505dd5",
    "type": "default"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| groupName | String | 所属分组 | 4.6.0 |
| parentUuid | String | 父级目录UUID | 4.6.0 |
| rootDirectoryUuid | String | 根目录UUID | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| type | String | 目录类型 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
UpdateDirectoryAction action = new UpdateDirectoryAction();
action.uuid = "66a79f93fd5d3d269302297dc1459f6e";
action.name = "test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateDirectoryAction.Result res = action.call();
```

 Python SDK

```
UpdateDirectoryAction action = UpdateDirectoryAction()
action.uuid = "66a79f93fd5d3d269302297dc1459f6e"
action.name = "test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateDirectoryAction.Result res = action.call()
```

---

#### 查询分组目录(QueryDirectory)



##### API请求

 URLs

```
GET zstack/v1/directories
GET zstack/v1/directories/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/directories?q=uuid=39b8a9d8cb2e32b893bd82c5c2be7e24
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/directories/4cfe730d431f3550994064911c1c6e0e
```



可查询字段

运行CLI命令行工具，输入`QueryDirectory`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b3c48edddae03e05b328a5b0926ae353",
      "name": "test",
      "groupName": "admin/test",
      "parentUuid": "d0dc05fcf5753c6888d0b082bc0f9caf",
      "rootDirectoryUuid": "3830935ca3823d05b9010f242139fad4",
      "zoneUuid": "0f7266aa26f339cb8f0b47a73d0ddc30",
      "type": "vminstance"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | Boolean |  | 5.3.20 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.20 |
| inventories | List | 详情参考[inventories] | 5.3.20 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.20 |
| name | String | 资源名称 | 5.3.20 |
| groupName | String | 所属分组 | 5.3.20 |
| parentUuid | String | 父级目录UUID | 5.3.20 |
| rootDirectoryUuid | String | 根目录UUID | 5.3.20 |
| zoneUuid | String | 区域UUID | 5.3.20 |
| type | String | 目录类型 | 5.3.20 |
| createDate | Timestamp | 创建时间 | 5.3.20 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.20 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.20 |
| description | String | 错误的概要描述 | 5.3.20 |
| details | String | 错误的详细信息 | 5.3.20 |
| elaboration | String | 保留字段，默认为null | 5.3.20 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.20 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.20 |



##### SDK示例

 Java SDK

```
QueryDirectoryAction action = new QueryDirectoryAction();
action.conditions = asList("uuid=b07055c553733af095d0714456157626");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryDirectoryAction.Result res = action.call();
```

 Python SDK

```
QueryDirectoryAction action = QueryDirectoryAction()
action.conditions = ["uuid=e38b6311766c3f88ab31c2d02db4e58f"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryDirectoryAction.Result res = action.call()
```

---

#### 热迁移云主机(MigrateVm)



将云主机热迁移至另一个物理机。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "migrateVm": {
    "hostUuid": "7571fb72e52b3fcab1a6992e7eef4cce",
    "migrateFromDestination": false,
    "allowUnknown": false,
    "downTime": 300
  },
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X PUT -d '{"migrateVm":{"hostUuid":"7571fb72e52b3fcab1a6992e7eef4cce","migrateFromDestination":false,"allowUnknown":false,"downTime":300}}' \
http://localhost:8080/zstack/v1/vm-instances/c53c9b6235703b8ab96c1cc35859242d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| hostUuid (可选) | String | body(包含在**migrateVm**结构中) | 物理机UUID |  | 0.6 |
| migrateFromDestination (可选) | Boolean | body(包含在**migrateVm**结构中) | 从迁移目的物理机器发起迁移命令 |  | 2.3 |
| allowUnknown (可选) | boolean | body(包含在**migrateVm**结构中) | 允许未知状态的虚拟机 |  | 4.6.21 |
| strategy (可选) | String | body(包含在**migrateVm**结构中) |  | auto-converge | 4.6.21 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| downTime (可选) | Integer | body(包含在**migrateVm**结构中) | 热迁移物理机停机时间 |  | 4.6.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1124f021672c3de9848fa567b632a6bb",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "fdfd5d0dfdc936e284792eabf72c52db",
    "clusterUuid": "f42a18b125ba3d61bae560bccec84741",
    "imageUuid": "5e6155ea150b31bc8f7789acf9f42b12",
    "hostUuid": "d51ee2645a3130ffb294a0c28a121c5c",
    "lastHostUuid": "9d32be2f483b3995bff142d072fb410a",
    "instanceOfferingUuid": "07d4a48c8cd5365992c6916b07f770ef",
    "rootVolumeUuid": "4172134623e6332fbb9092cd105bde77",
    "platform": "Linux",
    "defaultL3NetworkUuid": "4f49dce686663b81b7d8acbe75a879ac",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8589934592,
    "cpuNum": 1,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "f5231a1c912e3a6592f1816b5812b660",
        "vmInstanceUuid": "1124f021672c3de9848fa567b632a6bb",
        "usedIpUuid": "c9f0e849407f3f5d86376560e00f31ae",
        "l3NetworkUuid": "4f49dce686663b81b7d8acbe75a879ac",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0,
        "state": "enable",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "4172134623e6332fbb9092cd105bde77",
        "name": "Root-Volume-For-VM-1124f021672c3de9848fa567b632a6bb",
        "primaryStorageUuid": "fe9f085199453903b09c5de54b6d194e",
        "vmInstanceUuid": "1124f021672c3de9848fa567b632a6bb",
        "diskOfferingUuid": "66805a23b6e3362d9527f3f4dcfe4402",
        "rootImageUuid": "5e6155ea150b31bc8f7789acf9f42b12",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-4172134623e6332fbb9092cd105bde77/4172134623e6332fbb9092cd105bde77.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 107374182400,
        "actualSize": 21474836480,
        "deviceId": 0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| architecture | String |  | 4.6.21 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| guestOsType | String |  | 4.6.21 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |
| vmCdRoms |  | 详情参考[vmCdRoms] | 4.6.21 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |

  #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| vmInstanceUuid | String | 云主机UUID | 4.6.21 |
| deviceId | Integer |  | 4.6.21 |
| isoUuid | String |  | 4.6.21 |
| isoInstallPath | String |  | 4.6.21 |
| name | String | 资源名称 | 4.6.21 |
| description | String | 资源的详细描述 | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |



##### SDK示例

 Java SDK

```
MigrateVmAction action = new MigrateVmAction();
action.vmInstanceUuid = "c53c9b6235703b8ab96c1cc35859242d";
action.hostUuid = "7571fb72e52b3fcab1a6992e7eef4cce";
action.migrateFromDestination = false;
action.allowUnknown = false;
action.downTime = 300;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
MigrateVmAction.Result res = action.call();
```

 Python SDK

```
MigrateVmAction action = MigrateVmAction()
action.vmInstanceUuid = "c53c9b6235703b8ab96c1cc35859242d"
action.hostUuid = "7571fb72e52b3fcab1a6992e7eef4cce"
action.migrateFromDestination = false
action.allowUnknown = false
action.downTime = 300
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
MigrateVmAction.Result res = action.call()
```

---

#### 查询共享磁盘所挂载的云主机(QueryShareableVolumeVmInstanceRef)



查询共享磁盘所挂载的云主机

##### API请求



URLs

```
GET zstack/v1/volumes/vm-instances/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 9f5a9540d63e4ade922c141078b95af9" \
-X GET http://localhost:8080/zstack/v1/volumes/vm-instances/refs?q=0c917562d5954544b37bf5e0ed0735a6&q=cddc1c17e94a43b5b50e1df53e076d11&q=2&q=Jan 22, 2017 2:41:37 PM&q=Jan 22, 2017 2:43:18 PM
```



可查询字段

运行CLI命令行工具，输入`QueryShareableVolumeVmInstanceRef`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

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



##### SDK示例

 Java SDK

```
QueryShareableVolumeVmInstanceRefAction action = new QueryShareableVolumeVmInstanceRefAction();
action.conditions = asList("0c917562d5954544b37bf5e0ed0735a6","cddc1c17e94a43b5b50e1df53e076d11","2","Jan 22, 2017 2:41:37 PM","Jan 22, 2017 2:43:18 PM");
action.sessionId = "9fa1cf123ab04b1691ea509bf48c9071";
QueryShareableVolumeVmInstanceRefAction.Result res = action.call();
```

 Python SDK

```
QueryShareableVolumeVmInstanceRefAction action = QueryShareableVolumeVmInstanceRefAction()
action.conditions = ["0c917562d5954544b37bf5e0ed0735a6","cddc1c17e94a43b5b50e1df53e076d11","2","Jan 22, 2017 2:41:37 PM","Jan 22, 2017 2:43:18 PM"]
action.sessionId = "730ddea9ae3246a0ad483f7b6e3bb49f"
QueryShareableVolumeVmInstanceRefAction.Result res = action.call()
```

---

#### 获取可热迁移的物理机列表(GetVmMigrationCandidateHosts)



获取一个云主机可以热迁移的物理机列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/migration-target-hosts
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth cf673ad3be454b49b24c4405f67531f0" \
-X GET http://localhost:8080/zstack/v1/vm-instances/98995eddf4854acc8b80da119fee81d5/migration-target-hosts
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "zoneUuid": "09ba44cadab94a1a95ab0b5216ace46a",
      "name": "example",
      "uuid": "25a4d0f25f5649ae847e81869384f155",
      "clusterUuid": "d96488a7d4524609a66983de7eb1bc6c",
      "description": "example",
      "managementIp": "192.168.0.1",
      "hypervisorType": "KVM",
      "state": "Enabled",
      "status": "Connected",
      "totalCpuCapacity": 4.0,
      "availableCpuCapacity": 2.0,
      "totalMemoryCapacity": 4.0,
      "availableMemoryCapacity": 4.0,
      "createDate": "May 11, 2017 1:22:56 PM",
      "lastOpDate": "May 11, 2017 1:22:56 PM"
    }
  ]
}

```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetVmMigrationCandidateHostsAction action = new GetVmMigrationCandidateHostsAction();
action.vmInstanceUuid = "9949593f81604daeb21159f1e0525c4a";
action.sessionId = "fb98227d4c434087861e9157db2eb5f7";
GetVmMigrationCandidateHostsAction.Result res = action.call();
```

 Python SDK

```
GetVmMigrationCandidateHostsAction action = GetVmMigrationCandidateHostsAction()
action.vmInstanceUuid = "8b530774005349c8b57b122b89d262d2"
action.sessionId = "a15e9d90559c4ed6b12e0ef05f77c493"
GetVmMigrationCandidateHostsAction.Result res = action.call()
```

---

#### 获取创建云主机时可选择的主存储(GetCandidatePrimaryStoragesForCreatingVm)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/candidate-storages
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/candidate-storages?imageUuid=5f977e1354aa300bb27e0584d52bb09a&l3NetworkUuids=0276c5ffc04731d6b671c972272bd10a&dataDiskOfferingUuids=0b2b7ff196113ed79dad6bf815a6033e&dataDiskOfferingUuids=cfad76f5d345387d9215773fcd5389c5&clusterUuid=90fac86c000b335396f995bef052fb41
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageUuid | String | query | 镜像UUID |  | 2.1 |
| l3NetworkUuids | List | query | 三层网络UUID |  | 2.1 |
| rootDiskOfferingUuid (可选) | String | query | 根云盘使用的云盘规格UUID，镜像类型为ISO时可选且必选 |  | 2.1 |
| rootDiskSize (可选) | Long | query | 自定义根云盘大小。仅在`imageUuid`指定的镜像是ISO时且`rootDiskOfferingUuid`为空需要指定 |  | 4.1.2 |
| dataDiskOfferingUuids (可选) | List | query | 数据云盘使用的云盘规格UUID |  | 2.1 |
| dataDiskSizes (可选) | List | query | 自定义数据云盘大小 |  | 4.3.9 |
| zoneUuid (可选) | String | query | 区域UUID |  | 2.1 |
| clusterUuid (可选) | String | query | 集群UUID |  | 2.1 |
| defaultL3NetworkUuid (可选) | String | query | 默认三层网络UUID |  | 2.1 |
| systemTags (可选) | List | query | 系统标签 |  | 2.1 |
| userTags (可选) | List | query | 用户标签 |  | 2.1 |
| instanceOfferingUuid (可选) | String | query | 计算规格UUID |  | 5.4.0 |



##### API返回

 返回示例

```
{
  "rootVolumePrimaryStorages": [
    {
      "uuid": "90087c635c70381baf16eb6dd5f8cfdc",
      "name": "example",
      "url": "/zstack_ps",
      "description": "example",
      "totalCapacity": 322122547200,
      "availableCapacity": 214748364800,
      "totalPhysicalCapacity": 322122547200,
      "availablePhysicalCapacity": 214748364800,
      "type": "LocalStorage",
      "state": "Enabled",
      "status": "Connected",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "attachedClusterUuids": [
        "f1d9f91b4b8b35f7b4435f86b79793be"
      ]
    }
  ],
  "dataVolumePrimaryStorages": {
    "d180546cd56b3677bffd7d338ba2666c": [
      {
        "uuid": "b5e92f8dbf223a1eac8fd101f63112b6",
        "name": "example",
        "url": "/opt/zstack/nfsprimarystorage/prim-b5e92f8dbf223a1eac8fd101f63112b6",
        "description": "example",
        "totalCapacity": 322122547200,
        "availableCapacity": 214748364800,
        "totalPhysicalCapacity": 322122547200,
        "availablePhysicalCapacity": 214748364800,
        "type": "NFS",
        "state": "Enabled",
        "status": "Connected",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM",
        "attachedClusterUuids": [
          "1d76e995472839f989472c71dbb450c0"
        ]
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| dataVolumePrimaryStorages | Map | 数据云盘可选主存储，分别对应每一个数据云盘规格（2.1 以后）或自定义数据云盘大小（4.3.9 以后） | 2.1 |
| success | boolean | 操作是否成功 | 2.1 |
| rootVolumePrimaryStorages | List | 详情参考[rootVolumePrimaryStorages] | 2.1 |
| error | ErrorCode | 详情参考[error] | 2.1 |

  #rootVolumePrimaryStorages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| url | String |  | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| totalCapacity | Long |  | 0.6 |
| availableCapacity | Long |  | 0.6 |
| totalPhysicalCapacity | Long |  | 0.6 |
| availablePhysicalCapacity | Long |  | 0.6 |
| systemUsedCapacity | Long |  | 0.6 |
| type | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| mountPath | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| attachedClusterUuids | List |  | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetCandidatePrimaryStoragesForCreatingVmAction action = new GetCandidatePrimaryStoragesForCreatingVmAction();
action.imageUuid = "5f977e1354aa300bb27e0584d52bb09a";
action.l3NetworkUuids = asList("b6c5bbd29b103127b3eedd9aa79c886d");
action.dataDiskOfferingUuids = asList("0b2b7ff196113ed79dad6bf815a6033e","cfad76f5d345387d9215773fcd5389c5");
action.clusterUuid = "90fac86c000b335396f995bef052fb41";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidatePrimaryStoragesForCreatingVmAction.Result res = action.call();
```

 Python SDK

```
GetCandidatePrimaryStoragesForCreatingVmAction action = GetCandidatePrimaryStoragesForCreatingVmAction()
action.imageUuid = "5f977e1354aa300bb27e0584d52bb09a"
action.l3NetworkUuids = [b6c5bbd29b103127b3eedd9aa79c886d]
action.dataDiskOfferingUuids = [0b2b7ff196113ed79dad6bf815a6033e, cfad76f5d345387d9215773fcd5389c5]
action.clusterUuid = "90fac86c000b335396f995bef052fb41"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidatePrimaryStoragesForCreatingVmAction.Result res = action.call()
```

---

#### 获取云主机可加载ISO列表(GetCandidateIsoForAttachingVm)



获取一个云主机以加载的ISO列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/iso-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fe731654cc114cc3b0cc1cb0bd437f77" \
-X GET http://localhost:8080/zstack/v1/vm-instances/1f65bf61248341708265de7d759828b2/iso-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "154c6715c5994bfd8c822fd6fc5792f8",
      "name": "TinyLinux",
      "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
      "mediaType": "RootVolumeTemplate",
      "platform": "Linux",
      "format": "qcow2",
      "backupStorageRefs": [
        {
          "id": 0.0,
          "imageUuid": "154c6715c5994bfd8c822fd6fc5792f8",
          "backupStorageUuid": "e7eed90ff5fd4448b3bee5e029c96636",
          "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
          "status": "Ready"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| md5Sum | String |  | 0.6 |
| url | String |  | 0.6 |
| mediaType | String |  | 0.6 |
| guestOsType | String |  | 0.6 |
| type | String |  | 0.6 |
| platform | String |  | 0.6 |
| format | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String |  | 0.6 |
| exportUrl | String |  | 0.6 |
| exportMd5Sum | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetCandidateIsoForAttachingVmAction action = new GetCandidateIsoForAttachingVmAction();
action.vmInstanceUuid = "9602b2514d61444ebab065a9282851b1";
action.sessionId = "4d6f70aefa1141c7b54b3a1bb1c16e2b";
GetCandidateIsoForAttachingVmAction.Result res = action.call();
```

 Python SDK

```
GetCandidateIsoForAttachingVmAction action = GetCandidateIsoForAttachingVmAction()
action.vmInstanceUuid = "1844fc9ceac541a7947079b6ce3bd077"
action.sessionId = "4e6c014978924a2d82177eed81bdd3d6"
GetCandidateIsoForAttachingVmAction.Result res = action.call()
```

---

#### 获取ISO可加载云主机列表(GetCandidateVmForAttachingIso)



获取一个ISO可以加载到的云主机列表。

##### API请求

 URLs

```
GET zstack/v1/images/iso/{isoUuid}/vm-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 54ca471114824451b5b3e4cc22f9a927" \
-X GET http://localhost:8080/zstack/v1/images/iso/3e5e142462c54736b1880b43d49edeba/vm-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| isoUuid | String | url | ISO UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f95bdc72e9963a05b8f19b8817f09d9d",
      "name": "Test-VM",
      "description": "web server VM",
      "zoneUuid": "389fb59c478b3a9fbe08e0cb0cbb4e4f",
      "clusterUuid": "f1c45e63860e3e17b068db42533f008b",
      "imageUuid": "5ccbd867873f36318f72cd32c74ee540",
      "hostUuid": "73ebd6bff3aa3745a0dffd978edaf561",
      "lastHostUuid": "1e1c43855d9c3998bf9d1c237a36dcaa",
      "instanceOfferingUuid": "6ef7a28c90b93a5ebe659644e6a956fc",
      "rootVolumeUuid": "5a5ebf77b9d23ecb9034e6d64a9c3d51",
      "platform": "Linux",
      "defaultL3NetworkUuid": "d9a2bfe33f6831098b35adb8022c3d3c",
      "type": "UserVm",
      "hypervisorType": "KVM",
      "memorySize": 8.589934592E9,
      "cpuNum": 1.0,
      "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "state": "Stopped",
      "vmNics": [
        {
          "uuid": "cfdc9377501d3ed180572e8093aff0e0",
          "vmInstanceUuid": "f95bdc72e9963a05b8f19b8817f09d9d",
          "usedIpUuid": "a8a2f1fd54f83c41bab8d7c169776dd9",
          "l3NetworkUuid": "d9a2bfe33f6831098b35adb8022c3d3c",
          "ip": "192.168.1.10",
          "mac": "00:0c:29:bd:99:fc",
          "hypervisorType": "KVM",
          "netmask": "255.255.255.0",
          "gateway": "192.168.1.1",
          "deviceId": 0.0,
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "allVolumes": [
        {
          "uuid": "5a5ebf77b9d23ecb9034e6d64a9c3d51",
          "name": "Root-Volume-For-VM-f95bdc72e9963a05b8f19b8817f09d9d",
          "primaryStorageUuid": "092c642a80cf3f11886a57c50fc54fec",
          "vmInstanceUuid": "f95bdc72e9963a05b8f19b8817f09d9d",
          "diskOfferingUuid": "8f0377c24026357693b8ba14fa368d08",
          "rootImageUuid": "5ccbd867873f36318f72cd32c74ee540",
          "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-5a5ebf77b9d23ecb9034e6d64a9c3d51/5a5ebf77b9d23ecb9034e6d64a9c3d51.qcow2",
          "type": "Root",
          "format": "qcow2",
          "size": 1.073741824E11,
          "actualSize": 2.147483648E10,
          "deviceId": 0.0,
          "state": "Enabled",
          "status": "Ready",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
GetCandidateVmForAttachingIsoAction action = new GetCandidateVmForAttachingIsoAction();
action.isoUuid = "c7824c614de74f908bc7d82e6f16ebe7";
action.sessionId = "24b72cf532ce4e87be824b510dfe8289";
GetCandidateVmForAttachingIsoAction.Result res = action.call();
```

 Python SDK

```
GetCandidateVmForAttachingIsoAction action = GetCandidateVmForAttachingIsoAction()
action.isoUuid = "3916247f217c44de99603f16ebe141bd"
action.sessionId = "a43eacd5ff59473f844257917e0b705c"
GetCandidateVmForAttachingIsoAction.Result res = action.call()
```

---

#### 加载ISO到云主机(AttachIsoToVmInstance)



加载一个ISO镜像到Running或Stopped的云主机。

##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmInstanceUuid}/iso/{isoUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST http://localhost:8080/zstack/v1/vm-instances/b1105c5dd00f323d99aa182dee237628/iso/8f36a77ab76e3425a571a7f75fca2d69
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| isoUuid | String | url | ISO UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`cdromUuid::cdrom_xx_uuid`
  - 例如：`cdromUuid::cdrom_xx_uuid`
- 例如：`cdromUuid::cdrom_xx_uuid`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7105b03e09794680b7ba1027f812c987",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "8fa381c6f74d4e6fb45fa83536dcd5b8",
    "clusterUuid": "e3ec6c0da6dd48318e4e714a653de68d",
    "imageUuid": "d74932c666774571a9fa1dfa648eb1be",
    "hostUuid": "7eae91b419e444dcb5964557048e8b98",
    "lastHostUuid": "d6e533fdf3704b77bb2417fdeaf49812",
    "instanceOfferingUuid": "5d92054212bc468bb1789c3343ed6472",
    "rootVolumeUuid": "2b0f6bb1aaf44768ad94b8fe2b747f5e",
    "platform": "Linux",
    "defaultL3NetworkUuid": "c9527ab637ed43d6a82ef64eaaebc7d4",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "May 11, 2017 1:23:01 PM",
    "lastOpDate": "May 11, 2017 1:23:01 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "f20b08a8c81b42959c6b33f34d012cfa",
        "vmInstanceUuid": "7105b03e09794680b7ba1027f812c987",
        "usedIpUuid": "1338d1697352464383dbdc9ba89311a6",
        "l3NetworkUuid": "c9527ab637ed43d6a82ef64eaaebc7d4",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "May 11, 2017 1:23:01 PM",
        "lastOpDate": "May 11, 2017 1:23:01 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "2b0f6bb1aaf44768ad94b8fe2b747f5e",
        "name": "Root-Volume-For-VM-7105b03e09794680b7ba1027f812c987",
        "primaryStorageUuid": "5ceb65417c3a4e94a375f19bda2470b9",
        "vmInstanceUuid": "7105b03e09794680b7ba1027f812c987",
        "diskOfferingUuid": "d6caadf062514f2b8073faefd52fad46",
        "rootImageUuid": "d74932c666774571a9fa1dfa648eb1be",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/\
vol-2b0f6bb1aaf44768ad94b8fe2b747f5e/2b0f6bb1aaf44768ad94b8fe2b747f5e.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "May 11, 2017 1:23:01 PM",
        "lastOpDate": "May 11, 2017 1:23:01 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
AttachIsoToVmInstanceAction action = new AttachIsoToVmInstanceAction();
action.vmInstanceUuid = "6f18cd9b9c1d4a6a860bf08775572904";
action.isoUuid = "32ff7e18cd844e32a1b0225544ac9539";
action.sessionId = "d495ba4961e14d438c5e3ebb9c0f5996";
AttachIsoToVmInstanceAction.Result res = action.call();
```

 Python SDK

```
AttachIsoToVmInstanceAction action = AttachIsoToVmInstanceAction()
action.vmInstanceUuid = "12819ba2af514022b355d474fe254fae"
action.isoUuid = "c907863d2fc84b729bececdab2de5c31"
action.sessionId = "b3acb29da25f4bfaa9a6960b8be9c2ca"
AttachIsoToVmInstanceAction.Result res = action.call()
```

---

#### 卸载云主机上的ISO(DetachIsoFromVmInstance)



如果云主机上挂载有ISO，卸载它。

##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{vmInstanceUuid}/iso?isoUuid={isoUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 402a9d5c22174d18b54daf3b989e1c59" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/ee0d9801bd604235b2a20a87fe50c7a4/iso?isoUuid=dffgdiofgerut566jveritynrt9w4c5u4tv9
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| isoUuid (可选) | String | body |  |  | 2.3.1 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c11b752cf9ab3c1796932b6e2d31130b",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "38bce95d22c13e9f9b4ebbee43fb19ff",
    "clusterUuid": "9f22602c966b338b822653bfac3e01a0",
    "imageUuid": "7f367e399b5e3d15b077288235834a44",
    "hostUuid": "a99d812afd4136b3af5cc1ced6973ed4",
    "lastHostUuid": "51391439dfa437daa7915c6fba892418",
    "instanceOfferingUuid": "b2cd7abbfe28364399304140235314eb",
    "rootVolumeUuid": "ed654518b598324f8b2c5f2b4942ac32",
    "platform": "Linux",
    "defaultL3NetworkUuid": "f03ba780bfe73e45ab06aff246101170",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "5f41aff015d63ba5b58cb9596ccbfb24",
        "vmInstanceUuid": "c11b752cf9ab3c1796932b6e2d31130b",
        "usedIpUuid": "0b520f1c41f33ce9a62c70c0724e26b6",
        "l3NetworkUuid": "f03ba780bfe73e45ab06aff246101170",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "ed654518b598324f8b2c5f2b4942ac32",
        "name": "Root-Volume-For-VM-c11b752cf9ab3c1796932b6e2d31130b",
        "primaryStorageUuid": "db4c942c7a4c33cb9d2184c1dda9c431",
        "vmInstanceUuid": "c11b752cf9ab3c1796932b6e2d31130b",
        "diskOfferingUuid": "fbeca8e72bdc313c83767b3f40d1cd79",
        "rootImageUuid": "7f367e399b5e3d15b077288235834a44",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-ed654518b598324f8b2c5f2b4942ac32/ed654518b598324f8b2c5f2b4942ac32.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
DetachIsoFromVmInstanceAction action = new DetachIsoFromVmInstanceAction();
action.vmInstanceUuid = "381bac8e696b4702aae2cfa5cdf8ae04";
action.sessionId = "4796188f38784439a721f2ef35a0d0d3";
DetachIsoFromVmInstanceAction.Result res = action.call();

```

 Python SDK

```
DetachIsoFromVmInstanceAction action = DetachIsoFromVmInstanceAction()
action.vmInstanceUuid = "7cc1f3997d1745698276cbc26262f556"
action.sessionId = "1e1f179e29df418c9656aa5a006818cb"
DetachIsoFromVmInstanceAction.Result res = action.call()
```

---

#### 获取云主机可加载云盘列表(GetVmAttachableDataVolume)



获取一个云主机可以加载的云盘列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/data-volume-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth cce1d38a40f1410ba1f4c4d466b19f29" \
-X GET http://localhost:8080/zstack/v1/vm-instances/1e56eb544ac746d0ac275894d8e46cf7/data-volume-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
    "inventories": [
        {
            "actualSize": 0,
            "createDate": "Feb 11, 2018 3:16:43 PM",
            "description": "",
            "diskOfferingUuid": "7342651134824ae4b0b8ccf2c3d6ff80",
            "format": "raw",
            "installPath": "ceph://pool-0dae37a4ed4845f9bd0b1135e39e32f1/265455ab64634a108c62b887e46cdb86",
            "isShareable": true,
            "lastOpDate": "Mar 13, 2018 3:45:20 PM",
            "name": "host-lc-2",
            "primaryStorageUuid": "3fb1fe025dd843a088f63638d759faaa",
            "size": 21474836480,
            "state": "Enabled",
            "status": "Ready",
            "type": "Data",
            "uuid": "265455ab64634a108c62b887e46cdb86"
        },
    ],
    "success": true
}
```



##### SDK示例

 Java SDK

```
GetVmAttachableDataVolumeAction action = new GetVmAttachableDataVolumeAction();
action.vmInstanceUuid = "c754b7c60a0d487ba321c747e8864319";
action.sessionId = "d67ef888a4964f328bf754183a1b66c1";
GetVmAttachableDataVolumeAction.Result res = action.call();
```

 Python SDK

```
GetVmAttachableDataVolumeAction action = GetVmAttachableDataVolumeAction()
action.vmInstanceUuid = "d0f7a36665ae4875a6124e9babf7c4c9"
action.sessionId = "974281316f914ffea0a48c2b9e1569d1"
GetVmAttachableDataVolumeAction.Result res = action.call()
```

---

#### 获取云主机可加载L3网络列表(GetVmAttachableL3Network)



获取一个云主机可加载三层网络列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/l3-networks-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: 26f05abbc21441dc921a573eda1fed6b" \
-X GET http://localhost:8080/zstack/v1/vm-instances/16bf0d8cb1e346568e4cfba52c70a9c2/l3-networks-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "d2f77ca69b1448d3b8e063c3d551cf1b",
      "name": "private L3",
      "type": "L3BasicNetwork",
      "zoneUuid": "67a6601dc8dd476ebca371123ff03f14",
      "l2NetworkUuid": "94bdffb080b346e7a3ac2f44f574cc4a",
      "state": "Enabled",
      "createDate": "Apr 24, 2017 7:11:08 PM",
      "lastOpDate": "Apr 24, 2017 7:11:08 PM",
      "ipRanges": [
        {
          "uuid": "e15972969ac64d1ea01c0c228d969bcc",
          "l3NetworkUuid": "d2f77ca69b1448d3b8e063c3d551cf1b",
          "name": "ip range",
          "startIp": "192.168.0.10",
          "endIp": "192.168.0.100",
          "netmask": "255.255.255.0",
          "gateway": "192.168.0.1",
          "createDate": "Apr 24, 2017 7:11:08 PM",
          "lastOpDate": "Apr 24, 2017 7:11:08 PM"
        }
      ],
      "networkServices": [
        {
          "l3NetworkUuid": "d2f77ca69b1448d3b8e063c3d551cf1b",
          "networkServiceProviderUuid": "a493b6286d6e43f89e06062b7a4ad182",
          "networkServiceType": "DHCP"
        },
        {
          "l3NetworkUuid": "d2f77ca69b1448d3b8e063c3d551cf1b",
          "networkServiceProviderUuid": "a493b6286d6e43f89e06062b7a4ad182",
          "networkServiceType": "DNS"
        },
        {
          "l3NetworkUuid": "d2f77ca69b1448d3b8e063c3d551cf1b",
          "networkServiceProviderUuid": "a493b6286d6e43f89e06062b7a4ad182",
          "networkServiceType": "SNAT"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| type | String |  | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| l2NetworkUuid | String | 二层网络UUID | 0.6 |
| state | String |  | 0.6 |
| dnsDomain | String |  | 0.6 |
| system | Boolean |  | 0.6 |
| category | String |  | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| dns | List |  | 0.6 |
| ipRanges | List | 详情参考[ipRanges] | 0.6 |
| networkServices | List | 详情参考[networkServices] | 0.6 |
| hostRoute | List | 详情参考[hostRoute] | 0.6 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| startIp | String |  | 0.6 |
| endIp | String |  | 0.6 |
| netmask | String |  | 0.6 |
| prefixLen | String | 掩码长度 | 3.1.0 |
| gateway | String |  | 0.6 |
| networkCidr | String |  | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| addressMode | String | IPv6地址分配模式 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 0.6 |
| networkServiceType | String |  | 0.6 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 2.3 |
| l3NetworkUuid | String | 三层网络UUID | 2.3 |
| prefix | String |  | 2.3 |
| nexthop | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
GetVmAttachableL3NetworkAction action = new GetVmAttachableL3NetworkAction();
action.vmInstanceUuid = "eb2f2966162a47768578a0fb4016d75f";
action.sessionId = "9fe9dda1b076485baa9f3d49dacb0b3d";
GetVmAttachableL3NetworkAction.Result res = action.call();
```

 Python SDK

```
GetVmAttachableL3NetworkAction action = GetVmAttachableL3NetworkAction()
action.vmInstanceUuid = "2c39b050a8984491922aeadbbdd8ed48"
action.sessionId = "006575fef83c43c68f7bfb9c05f6b05c"
GetVmAttachableL3NetworkAction.Result res = action.call()
```

---

#### 获取资源虚拟化软件信息(GetVirtualizerInfo)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/virtualizer-info
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/virtualizer-info? uuids=b5432fcc423434e7a5f5876f1fe1e910&uuids=67e54311bbef3b43b9c523b349b08ca9&uuids=d64aeea721f7331aa15e7fb95eee7390
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuids | List | query | 资源的 uuid，可以为云主机或物理机的 uuid |  | 4.6.21 |
| systemTags (可选) | List | query | 系统标签 |  | 4.6.21 |
| userTags (可选) | List | query | 用户标签 |  | 4.6.21 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "3ce46fb7eb2e369c88d5fd671d1c1694",
      "resourceType": "HostVO",
      "infoList": [
        {
          "hypervisor": "qemu-kvm",
          "currentVersion": "4.2.0-632.g6a6222b.el7",
          "expectVersion": "4.2.0-632.g6a6222b.el7",
          "matchState": "Matched"
        }
      ]
    },
    {
      "uuid": "5c10fab3f649380e9dce16bb22ffd572",
      "resourceType": "VmInstanceVO",
      "infoList": [
        {
          "hypervisor": "qemu-kvm",
          "currentVersion": "4.2.0-632.g6a6222b.el7",
          "expectVersion": "4.2.0-632.g6a6222b.el7",
          "matchState": "Matched"
        }
      ]
    },
    {
      "uuid": "78a8b78906233d57bce710e89b24ebc0",
      "resourceType": "VmInstanceVO",
      "infoList": [
        {
          "hypervisor": "qemu-kvm",
          "currentVersion": "4.2.0-632.g6a6222b.el7",
          "expectVersion": "4.2.0-632.g6a6222b.el7",
          "matchState": "Matched"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 操作是否成功 | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |
| inventories | List | 详情参考[inventories] | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.21 |
| resourceType | String | 资源类型 | 4.6.21 |
| error | List | 出现的查询错误，可能为 null | 4.6.21 |
| infoList | List | 详情参考[infoList] | 4.6.21 |

 #infoList

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hypervisor | String | 虚拟化软件，一般**qemu-kvm** | 4.6.21 |
| currentVersion | String | 云主机当前使用的虚拟化软件版本 / 物理机当前安装的虚拟化软件版本 | 4.6.21 |
| expectVersion | String | 期望的虚拟化软件版本。如果待查询的是 VM，则期望的虚拟化软件版本来自物理机；如果待查询的是物理机，则期望的虚拟化软件版本来自管理节点 | 4.6.21 |
| matchState | String | 当前虚拟化软件版本和期望是否匹配。如果当前版本或期望有一方没有查到，则返回**Unknown** | 4.6.21 |



##### SDK示例

 Java SDK

```
GetVirtualizerInfoAction action = new GetVirtualizerInfoAction();
action.uuids = asList("b5432fcc423434e7a5f5876f1fe1e910","67e54311bbef3b43b9c523b349b08ca9","d64aeea721f7331aa15e7fb95eee7390");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVirtualizerInfoAction.Result res = action.call();
```

 Python SDK

```
GetVirtualizerInfoAction action = GetVirtualizerInfoAction()
action.uuids = [b5432fcc423434e7a5f5876f1fe1e910, 67e54311bbef3b43b9c523b349b08ca9, d64aeea721f7331aa15e7fb95eee7390]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVirtualizerInfoAction.Result res = action.call()
```

---

#### 加载L3网络到云主机(AttachL3NetworkToVm)



动态添加一个网络到Running或者Stopped的云主机。

##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmInstanceUuid}/l3-networks/{l3NetworkUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "attachL3NetworkToVm": {
    "driverType": "E1000"
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
-X POST -d '{"params":{}}' \
http://localhost:8080/zstack/v1/vm-instances/f526e22f739838f4bcdfdd20f0ba8a73/l3-networks/00fab8159d1d3534802c588c2bd9a28b
```

 参数列表
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| l3NetworkUuid | String | url | 三层网络UUID |  | 0.6 |
| driverType | String | body | 网卡驱动类型 | vcenter侧的VPC可选的网卡驱动 E1000E E1000 Vmxnet3 Sriov | 4.0.0 |
| staticIp (可选) | String | body(包含在**params**结构中) | 指定分配给云主机的IP地址 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`enableSRIOV::{L3_NETWORK_UUID} `
  - 例如：`enableSRIOV::9e19dafe81c64fed8e34f72e27582339`
- 例如：`enableSRIOV::9e19dafe81c64fed8e34f72e27582339`
  - 选项格式为：`staticIp::三层网络UUID::指定的IP`
  - 例如：`staticIp::f00d593dff2e4bd58473388ac411ade2::192.168.0.10`
- 例如：`staticIp::f00d593dff2e4bd58473388ac411ade2::192.168.0.10`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e300c6dbbaa1326ebca205a7b2a0e7ea",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "c9b73cde21d23866802e8a5178f29f0d",
    "clusterUuid": "24a72428e400344b88f8c2faa4c292bd",
    "imageUuid": "5484ed82cdfc366c9657c695577bee37",
    "hostUuid": "5eb00f0897603309904b418c821b1acb",
    "lastHostUuid": "b2cfad47a7923346a735008c32ef0d0b",
    "instanceOfferingUuid": "bbea469feb78345591cc9ac6c0ce0c5c",
    "rootVolumeUuid": "fc8a81afd11136ac8a48cf458ac2945b",
    "platform": "Linux",
    "defaultL3NetworkUuid": "aa3e9117d9793eff81a614b0e18bade7",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "458704a1654637209667e69847ee3a97",
        "vmInstanceUuid": "e300c6dbbaa1326ebca205a7b2a0e7ea",
        "usedIpUuid": "b6edb8e1ccc533b98cb9cc1c14baf38b",
        "l3NetworkUuid": "aa3e9117d9793eff81a614b0e18bade7",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "fc8a81afd11136ac8a48cf458ac2945b",
        "name": "Root-Volume-For-VM-e300c6dbbaa1326ebca205a7b2a0e7ea",
        "primaryStorageUuid": "91dc7f8732243262933100a509ab808a",
        "vmInstanceUuid": "e300c6dbbaa1326ebca205a7b2a0e7ea",
        "diskOfferingUuid": "26483e8eca413d809f4f8c6afba75ae2",
        "rootImageUuid": "5484ed82cdfc366c9657c695577bee37",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-fc8a81afd11136ac8a48cf458ac2945b/fc8a81afd11136ac8a48cf458ac2945b.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
AttachL3NetworkToVmAction action = new AttachL3NetworkToVmAction();
action.vmInstanceUuid = "b8755237b07a4c85923ccc96ccc0d897";
action.l3NetworkUuid = "984008169505409dbbf2bbfee9c45ffe";
action.sessionId = "46b2a5b9b4fb44268f5eb186f69c1937";
AttachL3NetworkToVmAction.Result res = action.call();
```

 Python SDK

```
AttachL3NetworkToVmAction action = AttachL3NetworkToVmAction()
action.vmInstanceUuid = "aed2911fd48a4872858abe8f0bdadecf"
action.l3NetworkUuid = "0664fc2951974e338ec6266c8afcc07c"
action.sessionId = "0443d11232ae465db92eef1dcbc2a5d8"
AttachL3NetworkToVmAction.Result res = action.call()
```

---

#### 从云主机卸载网络(DetachL3NetworkFromVm)



从Running或Stopped的云主机上卸载一个网络。

##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/nics/{vmNicUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 54d954775dfb45bc8853485f81196cc1" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/\
nics/06147cc0c8214c1cbd9812e01c1cdcce?
```



| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID，该网卡所在网络会从云主机卸载掉 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "536d4140e0ee332bbca18b95fa02eab6",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "30930c14b63634b4a879f7a974b3eb25",
    "clusterUuid": "26e01d57f1f731e09d8c0733afd31b2d",
    "imageUuid": "4f2ef2b98a643a11bde6b8b6ac0fad7c",
    "hostUuid": "a8143ab421663d22809e7c9bfbad77d9",
    "lastHostUuid": "60d6576190e93cd89dd070cac6b600ea",
    "instanceOfferingUuid": "51d49dbc54d4332b89f1077177d9d9dc",
    "rootVolumeUuid": "d39f1a3944473cd8b97932cbd72fb9dd",
    "platform": "Linux",
    "defaultL3NetworkUuid": "3becf336fc1b31a397452ab8adee8766",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "6275ccc0b6ff3ce2af43841dea667729",
        "vmInstanceUuid": "536d4140e0ee332bbca18b95fa02eab6",
        "usedIpUuid": "4c213f2ea325325496282e9e9493ddc7",
        "l3NetworkUuid": "3becf336fc1b31a397452ab8adee8766",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "d39f1a3944473cd8b97932cbd72fb9dd",
        "name": "Root-Volume-For-VM-536d4140e0ee332bbca18b95fa02eab6",
        "primaryStorageUuid": "be341d00a19539698a454cc8ec423c35",
        "vmInstanceUuid": "536d4140e0ee332bbca18b95fa02eab6",
        "diskOfferingUuid": "7844548a5f2e33cb8a8779f2bd5a94a3",
        "rootImageUuid": "4f2ef2b98a643a11bde6b8b6ac0fad7c",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-d39f1a3944473cd8b97932cbd72fb9dd/d39f1a3944473cd8b97932cbd72fb9dd.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
DetachL3NetworkFromVmAction action = new DetachL3NetworkFromVmAction();
action.vmNicUuid = "6d31c3fb6c0e4299a9b421eda472f95f";
action.sessionId = "a093606a38254c98806e194e9eb84d72";
DetachL3NetworkFromVmAction.Result res = action.call();

```

 Python SDK

```
DetachL3NetworkFromVmAction action = DetachL3NetworkFromVmAction()
action.vmNicUuid = "820807ea569441c98db65cf3b436741c"
action.sessionId = "62cbb5f992b6489bbb73e93b9fc33edc"
DetachL3NetworkFromVmAction.Result res = action.call()
```

---

#### 创建云主机网卡(CreateVmNic)



##### API请求

 URLs

```
POST zstack/v1/nics
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "l3NetworkUuid": "cbb5d7cd7f51332cb18c124ea430863f"
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
-X POST -d '{"params":{"l3NetworkUuid":"cbb5d7cd7f51332cb18c124ea430863f"}}' http://localhost:8080/zstack/v1/nics
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| l3NetworkUuid | String | body(包含在**params**结构中) | 三层网络UUID |  | 4.0.0 |
| ip (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "158c432596ab3418bbdd04583541d42d",
    "usedIpUuid": "acfdb23e1b0e39e48b10ee02d10ed74f",
    "l3NetworkUuid": "a1791966d2fd375bbb469dd0308d3be6",
    "ip": "192.168.1.10",
    "mac": "00:0c:29:bd:99:fc",
    "hypervisorType": "KVM",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "deviceId": 0.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
CreateVmNicAction action = new CreateVmNicAction();
action.l3NetworkUuid = "cbb5d7cd7f51332cb18c124ea430863f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmNicAction.Result res = action.call();
```

 Python SDK

```
CreateVmNicAction action = CreateVmNicAction()
action.l3NetworkUuid = "cbb5d7cd7f51332cb18c124ea430863f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmNicAction.Result res = action.call()
```

---

#### 修改云主机网卡状态 (ChangeVmNicState)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/nics/{vmNicUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmNicState": {
    "state": "disable"
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
-X PUT -d '{"changeVmNicState":{"state":"disable"}}' http://localhost:8080/zstack/v1/vm-instances/nics/17d47a3b35813bb5a90f9643200a0f40/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 4.6.0 |
| state | String | body | 云主机网卡状态 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "11d9330dd53b3140a933afff53484a4c",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "9959e99dec6032a1b6ddc7557f33db64",
    "clusterUuid": "d1675e2a3a07326989def39ea008fc1d",
    "imageUuid": "2392ef4f86e63aaaa2b5614f6795e262",
    "hostUuid": "b1e0e26f93503ff1a36d1e52d722b9ab",
    "lastHostUuid": "799326ef34543e4d988893b236c846ce",
    "instanceOfferingUuid": "7acf02facef6324b8f5b945d920afd75",
    "rootVolumeUuid": "561bc94863f43272afb18628ff29e137",
    "platform": "Linux",
    "defaultL3NetworkUuid": "f011105734bb39189bb8105fdc081d58",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8589934592,
    "cpuNum": 1,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "836ece7a894337b782404822f6c200bd",
        "vmInstanceUuid": "11d9330dd53b3140a933afff53484a4c",
        "usedIpUuid": "52876b0aca4936719b11959c2e53d9dc",
        "l3NetworkUuid": "f011105734bb39189bb8105fdc081d58",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0,
        "state": "disable",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "561bc94863f43272afb18628ff29e137",
        "name": "Root-Volume-For-VM-11d9330dd53b3140a933afff53484a4c",
        "primaryStorageUuid": "75cfe252d83c3b498f8a6b00d7f03eb6",
        "vmInstanceUuid": "11d9330dd53b3140a933afff53484a4c",
        "diskOfferingUuid": "798091e2b84f30da8652329933d3bada",
        "rootImageUuid": "2392ef4f86e63aaaa2b5614f6795e262",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-561bc94863f43272afb18628ff29e137/561bc94863f43272afb18628ff29e137.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 107374182400,
        "actualSize": 21474836480,
        "deviceId": 0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| clusterUuid | String | 集群UUID | 4.6.0 |
| imageUuid | String | 镜像UUID | 4.6.0 |
| hostUuid | String | 物理机UUID | 4.6.0 |
| lastHostUuid | String |  | 4.6.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.6.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.6.0 |
| platform | String |  | 4.6.0 |
| architecture | String |  | 4.6.0 |
| defaultL3NetworkUuid | String |  | 4.6.0 |
| type | String |  | 4.6.0 |
| hypervisorType | String |  | 4.6.0 |
| memorySize | Long |  | 4.6.0 |
| cpuNum | Integer |  | 4.6.0 |
| cpuSpeed | Long |  | 4.6.0 |
| allocatorStrategy | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| state | String |  | 4.6.0 |
| guestOsType | String |  | 4.6.0 |
| vmNics | List | 详情参考[vmNics] | 4.6.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.6.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.6.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| vmInstanceUuid | String | 云主机UUID | 4.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.6.0 |
| ip | String |  | 4.6.0 |
| mac | String |  | 4.6.0 |
| hypervisorType | String |  | 4.6.0 |
| netmask | String |  | 4.6.0 |
| gateway | String |  | 4.6.0 |
| metaData | String |  | 4.6.0 |
| ipVersion | Integer |  | 4.6.0 |
| driverType | String |  | 4.6.0 |
| internalName | String |  | 4.6.0 |
| deviceId | Integer |  | 4.6.0 |
| type | String |  | 4.6.0 |
| state | String | 网卡状态 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| usedIps | List | 详情参考[usedIps] | 4.6.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| ipRangeUuid | String | IP段UUID | 4.6.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.6.0 |
| ipVersion | Integer |  | 4.6.0 |
| ip | String |  | 4.6.0 |
| netmask | String |  | 4.6.0 |
| gateway | String |  | 4.6.0 |
| usedFor | String |  | 4.6.0 |
| ipInLong | long |  | 4.6.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| primaryStorageUuid | String | 主存储UUID | 4.6.0 |
| vmInstanceUuid | String | 云主机UUID | 4.6.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.6.0 |
| rootImageUuid | String |  | 4.6.0 |
| installPath | String |  | 4.6.0 |
| type | String |  | 4.6.0 |
| format | String |  | 4.6.0 |
| size | Long |  | 4.6.0 |
| actualSize | Long |  | 4.6.0 |
| deviceId | Integer |  | 4.6.0 |
| state | String |  | 4.6.0 |
| status | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| isShareable | Boolean |  | 4.6.0 |
| volumeQos | String |  | 4.6.0 |
| lastDetachDate | Timestamp |  | 4.6.0 |
| lastVmInstanceUuid | String |  | 4.6.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| vmInstanceUuid | String | 云主机UUID | 4.6.0 |
| deviceId | Integer |  | 4.6.0 |
| isoUuid | String |  | 4.6.0 |
| isoInstallPath | String |  | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
ChangeVmNicStateAction action = new ChangeVmNicStateAction();
action.vmNicUuid = "17d47a3b35813bb5a90f9643200a0f40";
action.state = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmNicStateAction.Result res = action.call();
```

 Python SDK

```
ChangeVmNicStateAction action = ChangeVmNicStateAction()
action.vmNicUuid = "17d47a3b35813bb5a90f9643200a0f40"
action.state = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmNicStateAction.Result res = action.call()
```

---

#### 加载网卡到云主机(AttachVmNicToVm)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmInstanceUuid}/nices/{vmNicUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/vm-instances/4fea63520ff63f5f9856acd619add4f5/nices/8b22e01e4bf43b1dab1530d2b362bbc5
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 4.0.0 |
| vmInstanceUuid | List | url | 云主机UUID |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "afbd67886d773a45af9a20071bcb09bb",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "4b9ddab3f5f738f1a0161f5cf5f33f5c",
    "clusterUuid": "d7061d85666a380cb3dda4cc7f9f16ee",
    "imageUuid": "179a3412da4a32faa927eae552348907",
    "hostUuid": "6ee062370eee3df58623fa99be0b2ce0",
    "lastHostUuid": "09fdbebbaea73df79b744ad0d4bd7088",
    "instanceOfferingUuid": "6dc0db981e68348e89ac79ed18fa4b24",
    "rootVolumeUuid": "a876397202ac3d1daf9f4ea67e75e13d",
    "platform": "Linux",
    "defaultL3NetworkUuid": "3baaf68d632f3e9aa12be139d58d968e",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "b9415d324b50301e923a990bf65352d0",
        "vmInstanceUuid": "afbd67886d773a45af9a20071bcb09bb",
        "usedIpUuid": "76a49549cb183d35865276187afb482b",
        "l3NetworkUuid": "3baaf68d632f3e9aa12be139d58d968e",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "a876397202ac3d1daf9f4ea67e75e13d",
        "name": "Root-Volume-For-VM-afbd67886d773a45af9a20071bcb09bb",
        "primaryStorageUuid": "336625bac9e0326b9a9abc7801ef2c86",
        "vmInstanceUuid": "afbd67886d773a45af9a20071bcb09bb",
        "diskOfferingUuid": "475f8e09aae2389ea6945b46601aa683",
        "rootImageUuid": "179a3412da4a32faa927eae552348907",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-a876397202ac3d1daf9f4ea67e75e13d/a876397202ac3d1daf9f4ea67e75e13d.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.0.0 |
| lastHostUuid | String |  | 4.0.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String |  | 4.0.0 |
| defaultL3NetworkUuid | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| hypervisorType | String |  | 4.0.0 |
| memorySize | Long |  | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| cpuSpeed | Long |  | 4.0.0 |
| allocatorStrategy | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String |  | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| primaryStorageUuid | String | 主存储UUID | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.0.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.0.0 |
| installPath | String | 云盘在主存储上的路径 | 4.0.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.0.0 |
| format | String | 云盘格式 | 4.0.0 |
| size | Long | 云盘大小 | 4.0.0 |
| actualSize | Long | 云盘真实大小 | 4.0.0 |
| deviceId | Integer |  | 4.0.0 |
| state | String | 云盘是否开启 | 4.0.0 |
| status | String | 云盘状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| isShareable | Boolean | 是否共享云盘 | 4.0.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.0.0 |



##### SDK示例

 Java SDK

```
AttachVmNicToVmAction action = new AttachVmNicToVmAction();
action.vmNicUuid = "8b22e01e4bf43b1dab1530d2b362bbc5";
action.vmInstanceUuid = "4fea63520ff63f5f9856acd619add4f5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachVmNicToVmAction.Result res = action.call();
```

 Python SDK

```
AttachVmNicToVmAction action = AttachVmNicToVmAction()
action.vmNicUuid = "8b22e01e4bf43b1dab1530d2b362bbc5"
action.vmInstanceUuid = "4fea63520ff63f5f9856acd619add4f5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachVmNicToVmAction.Result res = action.call()
```

---

#### 删除云主机网卡(DeleteVmNic)



##### API请求

 URLs

```
DELETE zstack/v1/nics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/nics/e99db1aebeb43c3d82ae1ba427308200
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.0.0 |
| deleteMode (可选) | String | body |  |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
DeleteVmNicAction action = new DeleteVmNicAction();
action.uuid = "e99db1aebeb43c3d82ae1ba427308200";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVmNicAction.Result res = action.call();
```

 Python SDK

```
DeleteVmNicAction action = DeleteVmNicAction()
action.uuid = "e99db1aebeb43c3d82ae1ba427308200"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVmNicAction.Result res = action.call()
```

---

#### 更改网卡的默认流量策略(ChangeVmNicSecurityPolicy)



##### API请求

 URLs

```
PUT zstack/v1/security-groups/nics/{vmNicUuid}/security-policy/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmNicSecurityPolicy": {
    "ingressPolicy": "ALLOW",
    "egressPolicy": "DENY"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" -X PUT -d '{"changeVmNicSecurityPolicy":{"ingressPolicy":"ALLOW","egressPolicy":"DENY"}}' http://localhost:8080/zstack/v1/security-groups/nics/5551303bee7037c8848cdb5741be7ff7/security-policy/actions
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 网卡的UUID，唯一标示该资源 |  | 4.7.21 |
| ingressPolicy (可选) | String | body(包含在**changeVmNicSecurityPolicy**结构中) | 网卡入方向安全策略 | DENY ALLOW | 4.7.21 |
| egressPolicy (可选) | String | body(包含在**changeVmNicSecurityPolicy**结构中) | 网卡出方向安全策略 | DENY ALLOW | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2c8164f7e3213f1491640a2f98d0a979",
    "vmNicUuid": "c731cb960eb635a997e58d154d3c4252",
    "ingressPolicy": "DENY",
    "egressPolicy": "ALLOW",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventory | SecurityGroupInventory | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmNicUuid | String | 云主机网卡UUID | 4.7.21 |
| ingressPolicy | String | 网卡入方向安全策略 | 4.7.21 |
| egressPolicy | String | 网卡出方向安全策略 | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
ChangeVmNicSecurityPolicyAction action = new ChangeVmNicSecurityPolicyAction();
action.vmNicUuid = "5551303bee7037c8848cdb5741be7ff7";
action.ingressPolicy = "ALLOW";
action.egressPolicy = "DENY";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmNicSecurityPolicyAction.Result res = action.call();
```

 Python SDK

```
ChangeVmNicSecurityPolicyAction action = ChangeVmNicSecurityPolicyAction()
action.vmNicUuid = "5551303bee7037c8848cdb5741be7ff7"
action.ingressPolicy = "ALLOW"
action.egressPolicy = "DENY"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmNicSecurityPolicyAction.Result res = action.call()
```

---

#### 查询云主机网卡(QueryVmNic)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/nics
GET zstack/v1/vm-instances/nics/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: 185cf639b8b64150a2aa22ec84e2517b" \
-X GET http://localhost:8080/zstack/v1/vm-instances/nics?q=ip=172.20.100.100
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: 2e9d7313cbb6495ebb3ee5d0d5d20fde" \
-X GET http://localhost:8080/zstack/v1/vm-instances/nics/7363f51baaab41538d5fe402a69d2529
```



可查询字段

运行CLI命令行工具，输入QueryVmNic并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

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



##### SDK示例

 Java SDK

```
QueryVmNicAction action = new QueryVmNicAction();
action.conditions = asList("ip=172.20.100.100");
action.sessionId = "ca4e59e18f014c21afcdde859b2fba3a";
QueryVmNicAction.Result res = action.call();
```

 Python SDK

```
QueryVmNicAction action = QueryVmNicAction()
action.conditions = ["ip=172.20.100.100"]
action.sessionId = "8549e75dbbe548348ca2848692fb7fd8"
QueryVmNicAction.Result res = action.call()
```

---

#### 获取网卡加载的网络服务名称(GetVmNicAttachedNetworkService)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/nics/{vmNicUuid}/attached-networkservices
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/nics/8c193a29a4a43fccab83fea5a7281856/attached-networkservices
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "networkServices": [
    "Eip"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| networkServices | List |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |



##### SDK示例

 Java SDK

```
GetVmNicAttachedNetworkServiceAction action = new GetVmNicAttachedNetworkServiceAction();
action.vmNicUuid = "8c193a29a4a43fccab83fea5a7281856";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmNicAttachedNetworkServiceAction.Result res = action.call();
```

 Python SDK

```
GetVmNicAttachedNetworkServiceAction action = GetVmNicAttachedNetworkServiceAction()
action.vmNicUuid = "8c193a29a4a43fccab83fea5a7281856"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmNicAttachedNetworkServiceAction.Result res = action.call()
```

---

#### 修改云主机网卡三层网络(ChangeVmNicNetwork)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/nics/{vmNicUuid}/l3-networks/{l3NetworkUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/vm-instances/nics/1183a0462aa83243a659ff91326888fb/l3-networks/e46ab07103763f0dbd3e99af2e3be4b0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 4.1.0 |
| destL3NetworkUuid | String | body(包含在**params**结构中) |  |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "9d4cdab9192b3de3b2495b1e326910c7",
    "vmInstanceUuid": "0ae9a1992fb436a58e820bdcb4dd17c4",
    "usedIpUuid": "c0c5860c05ce3e70b14b4f501fedff71",
    "l3NetworkUuid": "9390346b3a8a3c829b05dbe30569390a",
    "ip": "192.168.1.10",
    "mac": "00:0c:29:bd:99:fc",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "deviceId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | VmNicInventory | 详情参考[inventory] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| mac | String | MAC地址 | 4.1.0 |
| hypervisorType | String | 虚拟化类型 | 4.1.0 |
| netmask | String | 子网掩码 | 4.1.0 |
| gateway | String | 网关 | 4.1.0 |
| metaData | String |  | 4.1.0 |
| ipVersion | Integer | IP地址版本 | 4.1.0 |
| deviceId | Integer | 设备ID | 4.1.0 |
| type | String | 网卡类型 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| usedIps | List | 详情参考[usedIps] | 4.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| ipRangeUuid | String | IP段UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ipVersion | Integer | IP协议号 | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| netmask | String | 网络掩码 | 4.1.0 |
| gateway | String | 网关地址 | 4.1.0 |
| usedFor | String |  | 4.1.0 |
| ipInLong | long |  | 4.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
ChangeVmNicNetworkAction action = new ChangeVmNicNetworkAction();
action.vmNicUuid = "1183a0462aa83243a659ff91326888fb";
action.destL3NetworkUuid = "e46ab07103763f0dbd3e99af2e3be4b0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmNicNetworkAction.Result res = action.call();
```

 Python SDK

```
ChangeVmNicNetworkAction action = ChangeVmNicNetworkAction()
action.vmNicUuid = "1183a0462aa83243a659ff91326888fb"
action.destL3NetworkUuid = "e46ab07103763f0dbd3e99af2e3be4b0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmNicNetworkAction.Result res = action.call()
```

---

#### 获取云主机网卡可挂载的三层网络(GetCandidateL3NetworksForChangeVmNicNetwork)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/nics/{vmNicUuid}/l3-networks-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/nics/3382601183c9319384d5aa17ec956a3f/l3-networks-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f8fc36eaff6f3253a134bab93823baf1",
      "name": "private L3",
      "type": "L3BasicNetwork",
      "zoneUuid": "9ef7d386414c3101adeecd45ec9a2d51",
      "l2NetworkUuid": "ad3adf2da22f36c2946d90fae7f99b19",
      "state": "Enabled",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "ipRanges": [
        {
          "uuid": "16f163ee55f93d4f8dca9fefcac41ecc",
          "l3NetworkUuid": "f8fc36eaff6f3253a134bab93823baf1",
          "name": "ip range",
          "startIp": "192.168.0.10",
          "endIp": "192.168.0.100",
          "netmask": "255.255.255.0",
          "gateway": "192.168.0.1",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ],
      "networkServices": [
        {
          "l3NetworkUuid": "f8fc36eaff6f3253a134bab93823baf1",
          "networkServiceProviderUuid": "f714dba2f49a3d6788aafbe8b5ab3dc2",
          "networkServiceType": "DHCP"
        },
        {
          "l3NetworkUuid": "f8fc36eaff6f3253a134bab93823baf1",
          "networkServiceProviderUuid": "f714dba2f49a3d6788aafbe8b5ab3dc2",
          "networkServiceType": "DNS"
        },
        {
          "l3NetworkUuid": "f8fc36eaff6f3253a134bab93823baf1",
          "networkServiceProviderUuid": "f714dba2f49a3d6788aafbe8b5ab3dc2",
          "networkServiceType": "SNAT"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | List | 详情参考[inventory] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| type | String |  | 4.1.0 |
| zoneUuid | String | 区域UUID | 4.1.0 |
| l2NetworkUuid | String | 二层网络UUID | 4.1.0 |
| state | String |  | 4.1.0 |
| dnsDomain | String |  | 4.1.0 |
| system | Boolean |  | 4.1.0 |
| category | String |  | 4.1.0 |
| ipVersion | Integer | ip协议号 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| dns | List |  | 4.1.0 |
| ipRanges | List | 详情参考[ipRanges] | 4.1.0 |
| networkServices | List | 详情参考[networkServices] | 4.1.0 |
| hostRoute | List | 详情参考[ipRangesx] | 4.1.0 |

 #ipRanges

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| startIp | String | 起始地址 | 4.1.0 |
| endIp | String | 结束地址 | 4.1.0 |
| netmask | String | 掩码 | 4.1.0 |
| prefixLen | String | 掩码长度 | 4.1.0 |
| gateway | String | 网关 | 4.1.0 |
| networkCidr | String | 网络CIDR | 4.1.0 |
| ipVersion | Integer | ip协议号 | 4.1.0 |
| addressMode | String | IPv6地址分配模式 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| ipRangeType | IpRangeType | 详情参考[ipRangeType] | 4.1.0 |

 #ipRangeType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Normal | IpRangeType | 普通地址段 | 4.1.0 |
| AddressPool | IpRangeType | 地址池段 | 4.1.0 |

 #networkServices

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| networkServiceProviderUuid | String | 网络服务提供模块UUID | 4.1.0 |
| networkServiceType | String |  | 4.1.0 |

 #hostRoute

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | Long |  | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| prefix | String |  | 4.1.0 |
| nexthop | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
GetCandidateL3NetworksForChangeVmNicNetworkAction action = new GetCandidateL3NetworksForChangeVmNicNetworkAction();
action.vmNicUuid = "3382601183c9319384d5aa17ec956a3f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateL3NetworksForChangeVmNicNetworkAction.Result res = action.call();
```

 Python SDK

```
GetCandidateL3NetworksForChangeVmNicNetworkAction action = GetCandidateL3NetworksForChangeVmNicNetworkAction()
action.vmNicUuid = "3382601183c9319384d5aa17ec956a3f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateL3NetworksForChangeVmNicNetworkAction.Result res = action.call()
```

---

#### 设置云主机网卡限速(SetNicQos)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setNicQos": {
    "outboundBandwidth": 819200.0,
    "inboundBandwidth": 819200.0
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
-X PUT -d '{"setNicQos":{"outboundBandwidth":819200.0,"inboundBandwidth":819200.0}}' \
http://localhost:8080/zstack/v1/vm-instances/1d86edf8c2e73980b83005e946449c57/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机网卡UUID |  | 0.6 |
| outboundBandwidth (可选) | Long | body(包含在params结构中) | 出流量带宽限制 |  | 0.6 |
| inboundBandwidth (可选) | Long | body(包含在params结构中) | 入流量带宽限制 |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetNicQoSAction action = new SetNicQoSAction();
action.uuid = "00cc6445774649b488f6a03b023d6701";
action.outboundBandwidth = 819200.0;
action.inboundBandwidth = 819200.0;
action.sessionId = "d5a1b6a5424e4b1c8cc23f77e8ba6d58";
SetNicQoSAction.Result res = action.call();
```

 Python SDK

```
SetNicQoSAction action = SetNicQoSAction()
action.uuid = "71548ce2c00240a3a5b065080d47f399"
action.outboundBandwidth = 819200.0
action.inboundBandwidth = 819200.0
action.sessionId = "a86b3caf907045b9a82e3a0cb0597330"
SetNicQoSAction.Result res = action.call()
```

---

#### 获取云主机网卡限速(GetNicQos)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/nic-qos
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/479590eada5337caa477f4a604f1016b/nic-qos
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机网卡的UUID |  | 0.6 |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |



##### API返回



返回示例

```
{
  "outboundBandwidth": 100000.0,
  "inboundBandwidth": 200000.0,
  "outboundBandwidthUpthreshold": 300000.0,
  "inboundBandwidthUpthreshold": 300000.0

}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| outboundBandwidth | long |  | 0.6 |
| inboundBandwidth | long |  | 0.6 |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetNicQosAction action = new GetNicQosAction();
action.uuid = "479590eada5337caa477f4a604f1016b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetNicQosAction.Result res = action.call();
```

 Python SDK

```
GetNicQosAction action = GetNicQosAction()
action.uuid = "479590eada5337caa477f4a604f1016b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetNicQosAction.Result res = action.call()
```

---

#### 取消云主机网卡限速(DeleteNicQos)



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{uuid}/nic-qos?direction={direction}
```



Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "direction": "example"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 2c879e6be1c64b079aec599845576657" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/9f9a2eb79c9b4fe5881b109033020899/nic-QoS?direction=in
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机网卡的UUID |  | 0.6 |
| direction | String | url | 入方向还是出方向(in or out) | inout | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回



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



##### SDK示例

 Java SDK

```
DeleteNicQoSAction action = new DeleteNicQoSAction();
action.uuid = "27b5b55e69284a8ea07871661de562a4";
action.direction = "example";
action.sessionId = "d83ac78201fc4ad38b17261bba4dc17b";
DeleteNicQoSAction.Result res = action.call();
```

 Python SDK

```
DeleteNicQoSAction action = DeleteNicQoSAction()
action.uuid = "efb14319aaf14069a1066f2b07a0e328"
action.direction = "example"
action.sessionId = "a0a6598343404cc38356abfc58877bd8"
DeleteNicQoSAction.Result res = action.call()

```

---

#### 获取相互依赖的镜像和L3网络(GetInterdependentL3NetworksImages)



ZStack Cloud中一个三层网络属于一个区域，而镜像所在的镜像服务器可以加载到一个或多个区域。镜像服务器本身跟集群也存在依赖关系，例如Ceph的镜像服务器只能跟Ceph的主存储一起工作。由于这种依赖关系的存在，创建云主机的时候指定的三层网络和镜像可能并不能一起工作。用户可以通过该API获得镜像或三层网络的相互依赖。

当指定了l3NetworkUuids参数时，返回的是可以跟这些三层网络一起工作的镜像清单。

当指定了imageUuid参数时，返回的是可以跟该镜像一起工作的三层网络清单。

##### API请求

 URLs

```
GET zstack/v1/images-l3networks/dependencies
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "55852cdc71ef4774a9dc1eaf85a29c42",
    "imageUuid": "012be26a00ac4e9583afb5ef9d8dc322"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth ecd5117a63cf444cb71bba734e7458c4" \
-X GET http://localhost:8080/zstack/v1/images-l3networks/dependencies?\
zoneUuid=55466c2e90ae46d88df91c4f72c3e304&imageUuid=40b1783bc2614500bf0926499bdc9b4a
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | query | 区域UUID。必须指定，以确定三层网络和镜像依赖关系。 |  | 0.6 |
| l3NetworkUuids (可选) | List | query | 三层网络UUID列表 |  | 0.6 |
| imageUuid (可选) | String | query | 镜像UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "e177bad0286f4ee38ac29f0ad0e772e6",
      "name": "private L3",
      "type": "L3BasicNetwork",
      "zoneUuid": "0f8c102ff69a43b0afa89c2833ed42bc",
      "l2NetworkUuid": "c110e7bdffce47578351477ec0728685",
      "state": "Enabled",
      "createDate": "May 11, 2017 1:22:45 PM",
      "lastOpDate": "May 11, 2017 1:22:45 PM",
      "ipRanges": [
        {
          "uuid": "703becbb056f426b8fe5997648fd7607",
          "l3NetworkUuid": "e177bad0286f4ee38ac29f0ad0e772e6",
          "name": "ip range",
          "startIp": "192.168.0.10",
          "endIp": "192.168.0.100",
          "netmask": "255.255.255.0",
          "gateway": "192.168.0.1",
          "createDate": "May 11, 2017 1:22:45 PM",
          "lastOpDate": "May 11, 2017 1:22:45 PM"
        }
      ],
      "networkServices": [
        {
          "l3NetworkUuid": "e177bad0286f4ee38ac29f0ad0e772e6",
          "networkServiceProviderUuid": "294f4a419cc44d51b1fcbf7352fe6c0d",
          "networkServiceType": "DHCP"
        },
        {
          "l3NetworkUuid": "e177bad0286f4ee38ac29f0ad0e772e6",
          "networkServiceProviderUuid": "294f4a419cc44d51b1fcbf7352fe6c0d",
          "networkServiceType": "DNS"
        },
        {
          "l3NetworkUuid": "e177bad0286f4ee38ac29f0ad0e772e6",
          "networkServiceProviderUuid": "294f4a419cc44d51b1fcbf7352fe6c0d",
          "networkServiceType": "SNAT"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventories | List | 若输入参数是l3NetworkUuids，为镜像清单;若输入参数是imageUuid，为三层网络清单 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetInterdependentL3NetworksImagesAction \
action = new GetInterdependentL3NetworksImagesAction();
action.zoneUuid = "e4f01bb336a04285a27c6107f6dfeb68";
action.imageUuid = "05ec09f400684e4ab552d74053fc002e";
action.sessionId = "833c8307f9c540058f1a3b0c9a369f89";
GetInterdependentL3NetworksImagesAction.Result res = action.call();
```

 Python SDK

```
GetInterdependentL3NetworksImagesAction \
action = GetInterdependentL3NetworksImagesAction()
action.zoneUuid = "9dff772313f64618896ce53c9d8a3594"
action.imageUuid = "9e91392ee23f4427bc82e7a9734c4966"
action.sessionId = "7713d16ef34c4ebdbe94a1b2261dcbeb"
GetInterdependentL3NetworksImagesAction.Result res = action.call()
```

---

#### 设置云主机SSH Key (SetVmSshKey)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmSshKey": {
    "SshKey": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCaaV5YUvz9nx54+pvxI\
e5L5uQFHFQsvpwRdVRfMObIgWgcliB9vl4hMCPHXfaKqJD79jBpwJWpUBPebKF7vgevWqFJeU\
gR/LBHTfOnRrEjVsSzanaGGzfjbrwMHdZ5YJVhDTE376+OuXz1Wu5M1mwcarJpcanmqNgyz8Yh\
Yjc50xKDusDVvtpLKxdC6WvhR0+7gaDJKkukip1Up8doOUeNUe2cObJfMoOgi2lNrtKorGp1O7\
Nv+mdTflboYizgQOCFReiW/1ipPjX06OMZZ3Tsx3ZwBib5ocDpLV9CjONvnDBygWb30wydVoUS\
p1hKIzlWPkfyWHjxCf9pvLcHGUXZ root@10-0-98-199"
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
-X PUT -d '{"setVmSshKey":{"SshKey":"ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCaaV5YUvz9nx54+pvxIe5L5uQFHFQsvpwRdVRfMObIgWgcliB9vl4hMCPHXfaKqJD79jBpwJWpUBPebKF7vgevWqFJeUgR/LBHTfOnRrEjVsSzanaGGzfjbrwMHdZ5YJVhDTE376+OuXz1Wu5M1mwcarJpcanmqNgyz8YhYjc50xKDusDVvtpLKxdC6WvhR0+7gaDJKkukip1Up8doOUeNUe2cObJfMoOgi2lNrtKorGp1O7Nv+mdTflboYizgQOCFReiW/1ipPjX06OMZZ3Tsx3ZwBib5ocDpLV9CjONvnDBygWb30wydVoUSp1hKIzlWPkfyWHjxCf9pvLcHGUXZ root@10-0-98-199"}}' \
http://localhost:8080/zstack/v1/vm-instances/6489aaa605a633a385c84e08f743234b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| SshKey | String | body(包含在**setVmSshKey**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a9ac797c56ef3f3cbf507ae40aec4f27",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "2e70982580653273908fb2d9119c6f39",
    "clusterUuid": "d528e795695c3160bdf263e14fa1457b",
    "imageUuid": "e4682534b58436e1b485b9551d0feae7",
    "hostUuid": "a6d8de59ab5837adaef38c9f80609011",
    "lastHostUuid": "0fd913e716e83b029d22cff8eccd9ca0",
    "instanceOfferingUuid": "5509f4e5355e36629d7e8467a27bd67f",
    "rootVolumeUuid": "f7e96fc9d7413cd2b5aaf6099b66a8e1",
    "platform": "Linux",
    "defaultL3NetworkUuid": "016e9ab79d383faa941b37f9b3e7f2da",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Stopped",
    "vmNics": [
      {
        "uuid": "2c2dffad4d8c3f51a693ac77c0ce61ce",
        "vmInstanceUuid": "a9ac797c56ef3f3cbf507ae40aec4f27",
        "usedIpUuid": "9e59064f42813027940517780bb7c4d9",
        "l3NetworkUuid": "016e9ab79d383faa941b37f9b3e7f2da",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "f7e96fc9d7413cd2b5aaf6099b66a8e1",
        "name": "Root-Volume-For-VM-a9ac797c56ef3f3cbf507ae40aec4f27",
        "primaryStorageUuid": "0155f19398db3bfdafebfd3b5f2f70cf",
        "vmInstanceUuid": "a9ac797c56ef3f3cbf507ae40aec4f27",
        "diskOfferingUuid": "a6479afc6363359aa38a76235a2ff1d2",
        "rootImageUuid": "e4682534b58436e1b485b9551d0feae7",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-f7e96fc9d7413cd2b5aaf6099b66a8e1/f7e96fc9d7413cd2b5aaf6099b66a8e1.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
SetVmSshKeyAction action = new SetVmSshKeyAction();
action.uuid = "29950a96104b4bac9ae0cb2f1207a3ca";
action.SshKey = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCaaV5YUvz9nx\
54+pvxIe5L5uQFHFQsvpwRdVRfMObIgWgcliB9vl4hMCPHXfaKqJD79jBpwJWpUBPebK\
F7vgevWqFJeUgR/LBHTfOnRrEjVsSzanaGGzfjbrwMHdZ5YJVhDTE376+OuXz1Wu5M1m\
wcarJpcanmqNgyz8YhYjc50xKDusDVvtpLKxdC6WvhR0+7gaDJKkukip1Up8doOUeNUe2\
cObJfMoOgi2lNrtKorGp1O7Nv+mdTflboYizgQOCFReiW/1ipPjX06OMZZ3Tsx3ZwBib5\
ocDpLV9CjONvnDBygWb30wydVoUSp1hKIzlWPkfyWHjxCf9pvLcHGUXZ root@10-0-98-199";
action.sessionId = "c461e0a37d104b3da532d027fdde304b";
SetVmSshKeyAction.Result res = action.call();
```

 Python SDK

```
SetVmSshKeyAction action = SetVmSshKeyAction()
action.uuid = "b40f07653f314e668a0674d42b670f90"
action.SshKey = "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCaaV5YUvz9nx54+p\
vxIe5L5uQFHFQsvpwRdVRfMObIgWgcliB9vl4hMCPHXfaKqJD79jBpwJWpUBPebKF7vgevWq\
FJeUgR/LBHTfOnRrEjVsSzanaGGzfjbrwMHdZ5YJVhDTE376+OuXz1Wu5M1mwcarJpcanmqN\
gyz8YhYjc50xKDusDVvtpLKxdC6WvhR0+7gaDJKkukip1Up8doOUeNUe2cObJfMoOgi2lNrt\
KorGp1O7Nv+mdTflboYizgQOCFReiW/1ipPjX06OMZZ3Tsx3ZwBib5ocDpLV9CjONvnDBygWb\
30wydVoUSp1hKIzlWPkfyWHjxCf9pvLcHGUXZ root@10-0-98-199"
action.sessionId = "1011d275b52341c6826095a10aa78805"
SetVmSshKeyAction.Result res = action.call()
```

---

#### 获取云主机SSH Key (GetVmSshKey)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/ssh-keys
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 9f358fd3fb0c451aa999d9fd5f21d675" \
-X GET http://localhost:8080/zstack/v1/vm-instances/905b14166587498982db9aa14aee50c1/ssh-keys
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "sshKey": "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCtgdrSt2i/4ayXoiR6qNd7dykOOcz205NVSUgw41GOZW3PdXa9WWMF1AP\
Htj8L2tYm3lKgIDSy1aQtpIEenu6L03BeqfPwepf2L89aZ/W4UPRpce9/bO4mSSJ6kvbZ7hFv+4KLUJCB9O7UrcFu7J/QwrkHNVNX1NsVUpq\
ebp3Ny8bxj0Wbr9ecqPKTclzygARRGz71iDQaEhLrQqy/Q8vr+/G1/uyAYfTnifCuuMTfh5DEsuKD1AEHMBVZEbJ4zupR4gywXnGRxHmEwE4\
64scACxeFWVx2flIXkTK8f3W0KBLCJ8VtTd8KxvKQBu2jJ70avmXNOzb5IaBDS root@172-20-12-46"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| sshKey | String | 云主机SSH Key | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmSshKeyAction action = new GetVmSshKeyAction();
action.uuid = "71e1defb50aa42128605fc702cc00137";
action.sessionId = "2f3fe0048fc6485f9123541a1244411f";
GetVmSshKeyAction.Result res = action.call();
```

 Python SDK

```
GetVmSshKeyAction action = GetVmSshKeyAction()
action.uuid = "c66da31c27004804b59f672002d4371c"
action.sessionId = "2b883a9c99e942f295beab6761ff8657"
GetVmSshKeyAction.Result res = action.call()
```

---

#### 删除云主机SSH Key(DeleteVmSshKey)



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{uuid}/ssh-keys
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: 2698b6ec6f4241e696c75416e8e31b48" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/add84c70ff0f4c98b897d6a3d7ba475c/ssh-keys
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1ea667c144cf431e9b1a9ca503947735",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "8de2e6726a4d412d9a8a445c5a85cfe4",
    "clusterUuid": "51900cf42e62496e90f61a9553f2dd44",
    "imageUuid": "309fa4ff1c1244dab6a350260e7c5838",
    "hostUuid": "64eeb6a53f534903b645f881e143140c",
    "lastHostUuid": "f11e3f8134a9473e8754580ab24e425e",
    "instanceOfferingUuid": "701ec48f6e084db4801ef0029cd8cee5",
    "rootVolumeUuid": "627b25aebb5143a9a98bb3cab47341cf",
    "platform": "Linux",
    "defaultL3NetworkUuid": "056f3dc6e1ec4a71b5bff6f0db3cc749",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Apr 24, 2017 7:11:29 PM",
    "lastOpDate": "Apr 24, 2017 7:11:29 PM",
    "state": "Stopped",
    "vmNics": [
      {
        "uuid": "33f03792d00c471e94b4cc42457a7e2a",
        "vmInstanceUuid": "1ea667c144cf431e9b1a9ca503947735",
        "usedIpUuid": "0dc93b05d54643b699a02427688a0871",
        "l3NetworkUuid": "056f3dc6e1ec4a71b5bff6f0db3cc749",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Apr 24, 2017 7:11:29 PM",
        "lastOpDate": "Apr 24, 2017 7:11:29 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "627b25aebb5143a9a98bb3cab47341cf",
        "name": "Root-Volume-For-VM-1ea667c144cf431e9b1a9ca503947735",
        "primaryStorageUuid": "1337db63a9c1489381a30cfc3bbb9965",
        "vmInstanceUuid": "1ea667c144cf431e9b1a9ca503947735",
        "diskOfferingUuid": "02e831a9c4634cf898e65ef074fdacf0",
        "rootImageUuid": "309fa4ff1c1244dab6a350260e7c5838",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-627b25aebb5143a9a98bb3cab47341cf/627b25aebb5143a9a98bb3cab47341cf.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Apr 24, 2017 7:11:29 PM",
        "lastOpDate": "Apr 24, 2017 7:11:29 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
DeleteVmSshKeyAction action = new DeleteVmSshKeyAction();
action.uuid = "59ab1ff13ea947769b7522cd95311837";
action.sessionId = "ad1c38b4ce1343a28a06d3eb08ae1123";
DeleteVmSshKeyAction.Result res = action.call();
```

 Python SDK

```
DeleteVmSshKeyAction action = DeleteVmSshKeyAction()
action.uuid = "22b709aa71ec47a2a0e0f758b55e844e"
action.sessionId = "f70cfa4d6dc04f2aa567621501247954"
DeleteVmSshKeyAction.Result res = action.call()
```

---

#### 变更云主机密码(ChangeVmPassword)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmPassword": {
    "password": "password",
    "account": "root"
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
-X PUT -d '{"changeVmPassword":{"password":"password","account":"root"}}' \
http://localhost:8080/zstack/v1/vm-instances/6401e6a584b43fcfaebe401fd07f6f92/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| password | String | body(包含在**changeVmPassword**结构中) | 密码 |  | 0.6 |
| account | String | body(包含在**changeVmPassword**结构中) | 账户 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
ChangeVmPasswordAction action = new ChangeVmPasswordAction();
action.uuid = "68bbdbf738884c3486f0fc0faf42c42c";
action.password = "password";
action.account = "root";
action.sessionId = "815834f2143b45c0a16fab615616795a";
ChangeVmPasswordAction.Result res = action.call();
```

 Python SDK

```
ChangeVmPasswordAction action = ChangeVmPasswordAction()
action.uuid = "39f2732b2c214fe29fb2fa82f748a4f6"
action.password = "password"
action.account = "root"
action.sessionId = "fee2d467d9af4dc5b541a56a736cb457"
ChangeVmPasswordAction.Result res = action.call()
```

---

#### 设置云主机控制台密码(SetVmConsolePassword)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmConsolePassword": {
    "consolePassword": "password"
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
-X PUT -d '{"setVmConsolePassword":{"consolePassword":"password"}}' \
http://localhost:8080/zstack/v1/vm-instances/18a8034dbb483acbad9400916fe1e56c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| consolePassword | String | body(包含在**setVmConsolePassword**结构中) | 控制台密码，明文字符串 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "bce15aed2a083a258b0d4a4459bf4045",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "b53edec7e1a83f9da3cf8df77c571518",
    "clusterUuid": "4b9c77951519303a8da978ec7794d36e",
    "imageUuid": "55f62c5a6f27386bab19ad847d03d7ea",
    "hostUuid": "a93d581689a334fabc3cd9be944c9019",
    "lastHostUuid": "548d5d819eb83c6a96ab63c5d7123b82",
    "instanceOfferingUuid": "d2c8669d1caf3741a53f25d1e30c9c38",
    "rootVolumeUuid": "05b1fab950eb3c02abe7d4a4c7a9509c",
    "platform": "Linux",
    "defaultL3NetworkUuid": "a2e4d085db833457ac01b617a4fb3f65",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "a653fd4b6b093d52924e88fe1b54d13d",
        "vmInstanceUuid": "bce15aed2a083a258b0d4a4459bf4045",
        "usedIpUuid": "f0d88327a73a34849d1c733348dceed7",
        "l3NetworkUuid": "a2e4d085db833457ac01b617a4fb3f65",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "05b1fab950eb3c02abe7d4a4c7a9509c",
        "name": "Root-Volume-For-VM-bce15aed2a083a258b0d4a4459bf4045",
        "primaryStorageUuid": "3f22c507730d36e4b94bbc6ecbb285ed",
        "vmInstanceUuid": "bce15aed2a083a258b0d4a4459bf4045",
        "diskOfferingUuid": "bcba65f045db3538820db3e997fa507a",
        "rootImageUuid": "55f62c5a6f27386bab19ad847d03d7ea",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-05b1fab950eb3c02abe7d4a4c7a9509c/05b1fab950eb3c02abe7d4a4c7a9509c.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
SetVmConsolePasswordAction action = new SetVmConsolePasswordAction();
action.uuid = "6e935fb07f7042e4b446e9dfe4682fb8";
action.consolePassword = "password";
action.sessionId = "89efad1766a24f8aae2b9acf36144714";
SetVmConsolePasswordAction.Result res = action.call();
```

 Python SDK

```
SetVmConsolePasswordAction action = SetVmConsolePasswordAction()
action.uuid = "8180d69a46474d83be4d2f2018f20b9b"
action.consolePassword = "password"
action.sessionId = "d59425db0bf148029cb619264a09087b"
SetVmConsolePasswordAction.Result res = action.call()
```

---

#### 删除云主机控制台密码(DeleteVmConsolePassword)



删除一个云主机的控制台密码。

##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{uuid}/console-password
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 91e9a99b7b23405e9b841f5b20ab5645" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/971c0188520145f682c32079f83108ff/console-password
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "69217bbc6ec440ea9c4d0f30403ddab9",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "49b47c3d1358407581450d1bff8a619b",
    "clusterUuid": "7c500334d3af42b683103b3ab09b9527",
    "imageUuid": "d515053df20b466cb98104ef939f48bb",
    "hostUuid": "e3c12c2c157946a9adb28870eb2e1884",
    "lastHostUuid": "55be742a1c4442fc8cd2401baebde106",
    "instanceOfferingUuid": "f561cb2a365f484f9a93f87aaafa8d03",
    "rootVolumeUuid": "4e07afc3a7c3471797f2cda5b0655d74",
    "platform": "Linux",
    "defaultL3NetworkUuid": "6b7c934ecaec4ffabfc7a111d1c4a262",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "May 11, 2017 1:22:35 PM",
    "lastOpDate": "May 11, 2017 1:22:35 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "e4cf2283c77d4183938f3d535523df0e",
        "vmInstanceUuid": "69217bbc6ec440ea9c4d0f30403ddab9",
        "usedIpUuid": "4ab173662e184155bdcc30d55ba83e99",
        "l3NetworkUuid": "6b7c934ecaec4ffabfc7a111d1c4a262",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "May 11, 2017 1:22:35 PM",
        "lastOpDate": "May 11, 2017 1:22:35 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "4e07afc3a7c3471797f2cda5b0655d74",
        "name": "Root-Volume-For-VM-69217bbc6ec440ea9c4d0f30403ddab9",
        "primaryStorageUuid": "9915c3b248d1407892e214eb67217caa",
        "vmInstanceUuid": "69217bbc6ec440ea9c4d0f30403ddab9",
        "diskOfferingUuid": "a819905e63774a7981bafc947b7fbbcb",
        "rootImageUuid": "d515053df20b466cb98104ef939f48bb",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/\
vol-4e07afc3a7c3471797f2cda5b0655d74/4e07afc3a7c3471797f2cda5b0655d74.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "May 11, 2017 1:22:35 PM",
        "lastOpDate": "May 11, 2017 1:22:35 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
DeleteVmConsolePasswordAction action = new DeleteVmConsolePasswordAction();
action.uuid = "ac34ea877bc24c0bb36e8d52d1046479";
action.sessionId = "dbd8f0f101bf4318bd44814c7f3b03da";
DeleteVmConsolePasswordAction.Result res = action.call();

```

 Python SDK

```
DeleteVmConsolePasswordAction action = DeleteVmConsolePasswordAction()
action.uuid = "9cefd9cf5c2a409f91ff902931eade7b"
action.sessionId = "9514a4d5eacd4c4f9a5dccdcc7bd99e3"
DeleteVmConsolePasswordAction.Result res = action.call()
```

---

#### 获取云主机控制台密码(GetVmConsolePassword)



获取一个云主机的控制台密码。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/console-passwords
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 64bdb6ac8c3044d589ab6a0e96745fc2" \
-X GET http://localhost:8080/zstack/v1/vm-instances/3bc9f63f0de6492991c59bef96b27565/console-passwords
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "consolePassword": "password"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| password | String | 控制台密码 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmConsolePasswordAction action = new GetVmConsolePasswordAction();
action.uuid = "b06703c5616e4c29ba4d080ea6b3d760";
action.sessionId = "4cf31da078ce44348e0d77af4269c756";
GetVmConsolePasswordAction.Result res = action.call();
```

 Python SDK

```
GetVmConsolePasswordAction action = GetVmConsolePasswordAction()
action.uuid = "73b0881a95c0456ca9d20f2896ea6b76"
action.sessionId = "d568904f39914ffbaf6245aa3c949b37"
GetVmConsolePasswordAction.Result res = action.call()
```

---

#### 更新云主机控制台密码(UpdateConsolePassword)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateConsolePassword": {
    "password": "new-password-123"
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
-X PUT -d '{"updateConsolePassword":{"password":"new-password-123"}}' \
http://localhost:8080/zstack/v1/vm-instances/efa69f6385e93855a2b07f4de8908fb1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.4.2 |
| password | String | body(包含在**updateConsolePassword**结构中) |  |  | 5.4.2 |
| systemTags (可选) | List | body | 系统标签 |  | 5.4.2 |
| userTags (可选) | List | body | 用户标签 |  | 5.4.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "12e95e232863327c846cfd4752a18abd",
    "name": "Test-VM-Updated",
    "state": "Running"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.4.2 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 5.4.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.4.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| architecture | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| guestOsType | String |  | 4.1.2 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.13 |
| ip | String |  | 4.7.13 |
| mac | String |  | 4.7.13 |
| hypervisorType | String |  | 4.7.13 |
| netmask | String |  | 4.7.13 |
| gateway | String |  | 4.7.13 |
| metaData | String |  | 4.7.13 |
| ipVersion | Integer |  | 4.7.13 |
| driverType | String |  | 4.7.13 |
| internalName | String |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| type | String |  | 4.7.13 |
| state | String | 网卡状态 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| usedIps | List | 详情参考[usedIps] | 4.7.13 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| ipRangeUuid | String | IP段UUID | 5.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.0.0 |
| ipVersion | Integer |  | 5.0.0 |
| ip | String |  | 5.0.0 |
| netmask | String |  | 5.0.0 |
| gateway | String |  | 5.0.0 |
| usedFor | String | 分配原因 | 5.0.0 |
| ipInLong | long |  | 5.0.0 |
| ipInBinary | byte[] |  | 5.2.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| primaryStorageUuid | String | 主存储UUID | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.13 |
| rootImageUuid | String |  | 4.7.13 |
| installPath | String |  | 4.7.13 |
| type | String |  | 4.7.13 |
| format | String |  | 4.7.13 |
| size | Long |  | 4.7.13 |
| actualSize | Long |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| state | String |  | 4.7.13 |
| status | String |  | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| isShareable | Boolean |  | 4.7.13 |
| volumeQos | String |  | 4.7.13 |
| lastDetachDate | Timestamp |  | 4.7.13 |
| lastVmInstanceUuid | String |  | 4.7.13 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |



##### SDK示例

 Java SDK

```
UpdateConsolePasswordAction action = new UpdateConsolePasswordAction();
action.uuid = "efa69f6385e93855a2b07f4de8908fb1";
action.password = "new-password-123";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateConsolePasswordAction.Result res = action.call();
```

 Python SDK

```
UpdateConsolePasswordAction action = UpdateConsolePasswordAction()
action.uuid = "efa69f6385e93855a2b07f4de8908fb1"
action.password = "new-password-123"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateConsolePasswordAction.Result res = action.call()
```

---

#### 获取云主机控制台地址和访问协议(GetVmConsoleAddress)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/console-addresses
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 5c66c9a616334283b055d150680fff98" \
-X GET http://localhost:8080/zstack/v1/vm-instances/bf2211ae8eaf408b817d3a05c19e2226/console-addresses
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回



返回示例

```
{
  "hostIp": "192.168.10.100",
  "port": 5900.0,
  "protocol": "vnc",
  "vdiPortInfo": {
    "vncPort": 5900.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| hostIp | String | 云主机运行物理机IP | 0.6 |
| port | int | 云主机控制台端口 | 0.6 |
| protocol | String | 云主机控制台协议，vnc或spice或vncAndSpice | 0.6 |
| success | boolean | 操作是否成功 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 0.6 |
| vdiPortInfo | vdiPortInfo | 详情参考[vdiPortInfo] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #vdiPortInfo

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vncPort | Integer | vnc端口号 | 3.7.0 |
| spicePort | Integer | spice端口号 | 3.7.0 |
| spiceTlsPort | Integer | spice开启Tls加密，会存在spiceTlsPort和spicePort两个端口号，通过spice客户端连接云主机需要使用spiceTlsPort端口号 | 3.7.0 |



##### SDK示例

 Java SDK

```
GetVmConsoleAddressAction action = new GetVmConsoleAddressAction();
action.uuid = "d6bb8b652c1445969b5c4227385956d3";
action.sessionId = "1c0ec00749234a96978591d641e0c64d";
GetVmConsoleAddressAction.Result res = action.call();
```

 Python SDK

```
GetVmConsoleAddressAction action = GetVmConsoleAddressAction()
action.uuid = "f6b7fe2da3ae4c929ad1c8ed14f37c8e"
action.sessionId = "5f127b3df90245ed93ef9da531442fdc"
GetVmConsoleAddressAction.Result res = action.call()
```

---

#### 设置云主机Hostname(SetVmHostname)

  设置云主机hostname。

> **注意:** 说明: ZStack Cloud通过DHCP服务器配置云主机hostname，如果云主机本身采用静态hostname方式，该API配置的hostname不生效。



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmHostname": {
    "hostname": "vm1.zstack.org"
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
-X PUT -d '{"setVmHostname":{"hostname":"vm1.zstack.org"}}' \
http://localhost:8080/zstack/v1/vm-instances/0d71345add0230f2a893e7789a831b81/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| hostname | String | body(包含在**setVmHostname**结构中) | hostname，必须符合RFC 1123标准 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



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



##### SDK示例

 Java SDK

```
SetVmHostnameAction action = new SetVmHostnameAction();
action.uuid = "ce11eb85ff0f417c9f1255f43e0bb124";
action.hostname = "vm1.zstack.org";
action.sessionId = "fc2d7aab6f0545029fa52fa068dabfbb";
SetVmHostnameAction.Result res = action.call();
```

 Python SDK

```
SetVmHostnameAction action = SetVmHostnameAction()
action.uuid = "7f11dce627ce4a0db39f20ce2e1afc57"
action.hostname = "vm1.zstack.org"
action.sessionId = "cb33487362ca41599fc2b43a119d8bc6"
SetVmHostnameAction.Result res = action.call()
```

---

#### 获取云主机Hostname(GetVmHostname)



获取云主机指定的Hostname。该Hostname是用户之前用SetVmHostname指定的。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/hostnames
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: 0e3cbe22c03a43bc9b7b3ae76c57a0e7" \
-X GET http://localhost:8080/zstack/v1/vm-instances/c5c6665ccbe2444e9cfa393366cdb5d4/hostnames
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "hostname": "vm1.zstack.orgl"
}
```



| 名字 | 类型 | 描述 | 起始版 |
| --- | --- | --- | --- |
| hostname | String | 云主机hostname | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmHostnameAction action = new GetVmHostnameAction();
action.uuid = "82c0f5918de14f65abe7ba5d37c28502";
action.sessionId = "24f9301f25784707a477483c5702c034";
GetVmHostnameAction.Result res = action.call();
```

 Python SDK

```
GetVmHostnameAction action = GetVmHostnameAction()
action.uuid = "5070e337b731448ca0698f83c7fc4c26"
action.sessionId = "f13e0ed993134a8ea35a3d382a971b14"
GetVmHostnameAction.Result res = action.call()
```

---

#### 删除云主机Hostname(DeleteVmHostname)

  删除云主机的Hostname。

> **注意:** 说明: 该删除操作仅仅是删除配置在数据库中以及DHCP服务器上的云主机hostname，无法改变云主机内部手动配置的hostname。



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{uuid}/hostnames?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth efe37b8868b54c6c93b9f83a04ffe27c" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/\
55fefc89f98b49f99e96bb01765d42ed/hostnames?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| deleteMode(可选) | String | body |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteVmHostnameAction action = new DeleteVmHostnameAction();
action.uuid = "ab14af23812445e891695e0c9ef7b635";
action.deleteMode = "Permissive";
action.sessionId = "25d8bc148fcb4061b0aa340d1e4c68a8";
DeleteVmHostnameAction.Result res = action.call();
```



Python SDK

```
DeleteVmHostnameAction action = DeleteVmHostnameAction()
action.uuid = "0f4ad3768b1e4e8bb1ec33646a3067de"
action.deleteMode = "Permissive"
action.sessionId = "fb18f70b6fc24b5f955817aaabbae4cc"
DeleteVmHostnameAction.Result res = action.call()
```

---

#### 创建启动云主机的定时任务(CreateStartVmInstanceScheduler)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmUuid}/schedulers/starting
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "schedulerName": "create-vm-scheduler",
    "schedulerDescription": "for test create vm scheduler",
    "type": "simple",
    "interval": 5.0,
    "repeatCount": 10.0,
    "startTime": 0.0
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: cf1274ab34e448cdb7f8aabd8461683e" \
-X POST -d '{"params":{"schedulerName":"create-vm-scheduler","schedulerDescription":\
"for test create vm scheduler","type":"simple","interval":5.0,"repeatCount":10.0,"startTime":0.0}}' \
http://localhost:8080/zstack/v1/vm-instances/0a8a39e89a104282b0ff78446515d7f1/schedulers/starting
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuid | String | url | 云主机uuid |  | 0.6 |
| clusterUuid (可选) | String | body(包含在******params**结构中) | 集群UUID |  | 0.6 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 0.6 |
| schedulerName | String | body(包含在**params**结构中) | 定时任务名称 |  | 1.6 |
| schedulerDescription (可选) | String | body(包含在**params**结构中) | 定时任务描述 |  | 1.6 |
| type | String | body(包含在**params**结构中) | 定时任务类型，simple或者cron | simplecron | 1.6 |
| interval (可选) | Integer | body(包含在**params**结构中) | 定时任务间隔，单位秒 |  | 1.6 |
| repeatCount (可选) | Integer | body(包含在**params**结构中) | 定时任务重复次数，仅针对simple类型的定时任务生效 |  | 1.6 |
| startTime (可选) | Long | body(包含在**params**结构中) | 定时任务启动时间，必须遵循unix timestamp格式，0为从立刻开始 |  | 1.6 |
| cron (可选) | String | body(包含在**params**结构中) | cron表达式，需遵循Java Quartz组件cron格式标准 |  | 1.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 用户可指定创建Scheduler所使用的uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "3e27a74894fb47b5a3c86c2b44409ccb",
    "targetResourceUuid": "d596e0adcb2b49a8a9efd132f0e43a73",
    "schedulerName": "Test",
    "schedulerType": "simple",
    "repeatCount": 10.0,
    "startTime": "Apr 24, 2017 7:11:02 PM",
    "createDate": "Apr 24, 2017 7:11:02 PM",
    "lastOpDate": "Apr 24, 2017 7:11:02 PM",
    "jobClassName": "CreateVolumeSnapshotJob",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 1.6 |
| inventory | SchedulerInventory | 详情参考[inventory] | 1.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| targetResourceUuid | String |  | 0.6 |
| schedulerName | String |  | 0.6 |
| schedulerJob | String |  | 0.6 |
| schedulerType | String |  | 0.6 |
| schedulerInterval | Integer |  | 0.6 |
| repeatCount | Integer |  | 0.6 |
| cronScheduler | String |  | 0.6 |
| startTime | Timestamp |  | 0.6 |
| stopTime | Timestamp |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateStartVmInstanceSchedulerAction action = new CreateStartVmInstanceSchedulerAction();
action.vmUuid = "7d86597d42eb4e31b2497a06361f710b";
action.schedulerName = "create-vm-scheduler";
action.schedulerDescription = "for test create vm scheduler";
action.type = "simple";
action.interval = 5.0;
action.repeatCount = 10.0;
action.startTime = 0.0;
action.sessionId = "a5e890d5bd78487f979861dee02aaafe";
CreateStartVmInstanceSchedulerAction.Result res = action.call();
```

 Python SDK

```
CreateStartVmInstanceSchedulerAction action = CreateStartVmInstanceSchedulerAction()
action.vmUuid = "26799d709f7e4794b33fb07cfd269373"
action.schedulerName = "create-vm-scheduler"
action.schedulerDescription = "for test create vm scheduler"
action.type = "simple"
action.interval = 5.0
action.repeatCount = 10.0
action.startTime = 0.0
action.sessionId = "d5fcddc65c454f6f85625f954d9507e5"
CreateStartVmInstanceSchedulerAction.Result res = action.call()
```

---

#### 创建停止云主机的定时任务(CreateStopVmInstanceScheduler)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmUuid}/schedulers/stopping
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "schedulerName": "vm-scheduler",
    "schedulerDescription": "for test stop vm scheduler",
    "type": "simple",
    "interval": 5.0,
    "repeatCount": 10.0,
    "startTime": 0.0
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth a19cb92d7c264d1d939b24b3d1cb07dc" \
-X POST http://localhost:8080/zstack/v1/vm-instances/09b1ee5bddea44a5bb56c471deae95d5/schedulers/stopping?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuid | String | url | 云主机uuid |  | 0.6 |
| schedulerName | String | body(包含在params结构中) | 定时任务名称 |  | 1.6 |
| schedulerDescription (可选) | String | body(包含在params结构中) | 定时任务描述 |  | 1.6 |
| type | String | body(包含在params结构中) | 定时任务类型，simple或者cron | simplecron | 1.6 |
| interval (可选) | Integer | body(包含在params结构中) | 定时任务间隔，单位秒 |  | 1.6 |
| repeatCount (可选) | Integer | body(包含在params结构中) | 定时任务重复次数，仅针对simple类型的定时任务生效 |  | 1.6 |
| startTime (可选) | Long | body(包含在params结构中) | 定时任务启动时间，必须遵循unix timestamp格式，0为从立刻开始 |  | 1.6 |
| cron (可选) | String | body(包含在params结构中) | cron表达式，需遵循Java Quartz组件cron格式标准 |  | 1.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 用户可指定创建Scheduler所使用的uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1c1b66d878494610aab6833dde9c6c04",
    "targetResourceUuid": "f1dd6bd2ae484bd5b3375c7579756e48",
    "schedulerName": "Test",
    "schedulerType": "simple",
    "repeatCount": 10.0,
    "startTime": "May 11, 2017 1:22:53 PM",
    "createDate": "May 11, 2017 1:22:53 PM",
    "lastOpDate": "May 11, 2017 1:22:53 PM",
    "jobClassName": "StopVmInstanceJob",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 1.6 |
| inventory | SchedulerInventory | 详情参考[inventory] | 1.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| targetResourceUuid | String |  | 0.6 |
| schedulerName | String |  | 0.6 |
| schedulerJob | String |  | 0.6 |
| schedulerType | String |  | 0.6 |
| schedulerInterval | Integer |  | 0.6 |
| repeatCount | Integer |  | 0.6 |
| cronScheduler | String |  | 0.6 |
| startTime | Timestamp |  | 0.6 |
| stopTime | Timestamp |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateStopVmInstanceSchedulerAction action = new CreateStopVmInstanceSchedulerAction();
action.vmUuid = "12cd4882e5784a81967a314be5f10a55";
action.schedulerName = "vm-scheduler";
action.schedulerDescription = "for test stop vm scheduler";
action.type = "simple";
action.interval = 5.0;
action.repeatCount = 10.0;
action.startTime = 0.0;
action.sessionId = "256f557f46ff499aad22d7b1776a7567";
CreateStopVmInstanceSchedulerAction.Result res = action.call();
```

 Python SDK

```
CreateStopVmInstanceSchedulerAction action = CreateStopVmInstanceSchedulerAction()
action.vmUuid = "3043caa47c6a4a0aa498f903ee5a3cbf"
action.schedulerName = "vm-scheduler"
action.schedulerDescription = "for test stop vm scheduler"
action.type = "simple"
action.interval = 5.0
action.repeatCount = 10.0
action.startTime = 0.0
action.sessionId = "3bdb1579024b433895943d4ff6278d15"
CreateStopVmInstanceSchedulerAction.Result res = action.call()
```

---

#### 创建重启云主机的定时任务(CreateRebootVmInstanceScheduler)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/{vmUuid}/schedulers/rebooting
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "schedulerName": "vm-scheduler",
    "schedulerDescription": "for test restart vm scheduler",
    "type": "simple",
    "interval": 5.0,
    "repeatCount": 10.0,
    "startTime": 0.0
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fa354b2ef2b34f109f268d264eee4d87" \
-X POST http://localhost:8080/zstack/v1/vm-instances/08eaedbeb14841c5bb8564663319fed9/\
schedulers/rebooting?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuid | String | url | 云主机uuid |  | 0.6 |
| schedulerName | String | body(包含在**params**结构中) | 定时任务名称 |  | 1.6 |
| schedulerDescription (可选) | String | body(包含在**params**结构中) | 定时任务描述 |  | 1.6 |
| type | String | body(包含在**params**结构中) | 定时任务类型，simple或者cron | simplecron | 1.6 |
| interval (可选) | Integer | body(包含在**params**结构中) | 定时任务间隔，单位秒 |  | 1.6 |
| repeatCount (可选) | Integer | body(包含在**params**结构中) | 定时任务重复次数，仅针对simple类型的定时任务生效 |  | 1.6 |
| startTime (可选) | Long | body(包含在**params**结构中) | 定时任务启动时间，必须遵循unix timestamp格式，0为从立刻开始 |  | 1.6 |
| cron (可选) | String | body(包含在**params**结构中) | cron表达式，需遵循Java Quartz组件cron格式标准 |  | 1.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 用户可指定创建Scheduler所使用的uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2664ccec6e584e529ab6671d88f87763",
    "targetResourceUuid": "308a32f93a7842ce94bdab3220f75aeb",
    "schedulerName": "Test",
    "schedulerType": "simple",
    "repeatCount": 10.0,
    "startTime": "May 11, 2017 1:22:27 PM",
    "createDate": "May 11, 2017 1:22:27 PM",
    "lastOpDate": "May 11, 2017 1:22:27 PM",
    "jobClassName": "CreateVolumeSnapshotJob",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 1.6 |
| inventory | SchedulerInventory | 详情参考[inventory] | 1.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| targetResourceUuid | String |  | 0.6 |
| schedulerName | String |  | 0.6 |
| schedulerJob | String |  | 0.6 |
| schedulerType | String |  | 0.6 |
| schedulerInterval | Integer |  | 0.6 |
| repeatCount | Integer |  | 0.6 |
| cronScheduler | String |  | 0.6 |
| startTime | Timestamp |  | 0.6 |
| stopTime | Timestamp |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateRebootVmInstanceSchedulerAction action = new CreateRebootVmInstanceSchedulerAction();
action.vmUuid = "65f8b54efe254b8e8e5b427bfdadd1e6";
action.schedulerName = "vm-scheduler";
action.schedulerDescription = "for test restart vm scheduler";
action.type = "simple";
action.interval = 5.0;
action.repeatCount = 10.0;
action.startTime = 0.0;
action.sessionId = "3cedf9bd8bbf424f860057259adfcdcf";
CreateRebootVmInstanceSchedulerAction.Result res = action.call();
```

 Python SDK

```
CreateRebootVmInstanceSchedulerAction action = CreateRebootVmInstanceSchedulerAction()
action.vmUuid = "1b0f699afaba45e1865f00bbaf026c6a"
action.schedulerName = "vm-scheduler"
action.schedulerDescription = "for test restart vm scheduler"
action.type = "simple"
action.interval = 5.0
action.repeatCount = 10.0
action.startTime = 0.0
action.sessionId = "22758ee34b2b4822a3253a8a56cee6cf"
CreateRebootVmInstanceSchedulerAction.Result res = action.call()
```

---

#### 获取云主机启动设备列表(GetVmBootOrder)



获取一个云主机的启动设备列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/boot-orders
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: 458995c072644d28b32b26f69e512c2c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/426cff83f17d4a5aa7c752484d730f20/boot-orders
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "order": [
    "HardDisk",
    "CdRom"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| orders | List | 启动设备列表 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmBootOrderAction action = new GetVmBootOrderAction();
action.uuid = "914ab429715b40d59efa76c1ccfe64d8";
action.sessionId = "0472be4a6e2c4e7c9d7bcf3da2938313";
GetVmBootOrderAction.Result res = action.call();
```

 Python SDK

```
GetVmBootOrderAction action = GetVmBootOrderAction()
action.uuid = "cba88e6e561049c8b7beaeccf4d46279"
action.sessionId = "bd37fd5e33e847d4bef4bb536d6410ea"
GetVmBootOrderAction.Result res = action.call()
```

---

#### 指定云主机启动设备(SetVmBootOrder)



指定一个云主机的启动设备。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmBootOrder": {
    "bootOrder": [
      "CdRom",
      "HardDisk"
    ]
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
-X PUT -d '{"setVmBootOrder":{"bootOrder":["CdRom","HardDisk"]}}' \
http://localhost:8080/zstack/v1/vm-instances/f757785b3980305095c89eb2b4e1b785/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| bootOrder (可选) | List | body(包含在**setVmBootOrder**结构中) | 启动设备。**CdRom**：光驱，**HardDisk**：云盘，**Network**：网络。若该字段不指定，则表示使用系统默认启动设备顺序(HardDisk, CdRom, Network) |  | 3.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`bootOrderOnce::{%s}`
  - 例如：`bootOrderOnce::true`
- 例如：`bootOrderOnce::true`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "16a1759999f43522989d50257c148f03",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "52c0c4d3965330c78035324338caca26",
    "clusterUuid": "0d18aab547103bcfb2098655bd1fc71b",
    "imageUuid": "f2a2344a96a93d84958cdd8e9396ac53",
    "hostUuid": "fbd24b0405723d06b41fb0d41d126a53",
    "lastHostUuid": "3e0502a12a413e5a8cea8022d774e8f7",
    "instanceOfferingUuid": "bac644877b783182ace705f49d8b0d5d",
    "rootVolumeUuid": "963beb34a38a31c6a663861152ebdfa7",
    "platform": "Linux",
    "defaultL3NetworkUuid": "58e3259d7ac63196bab7b4fde66a63e4",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Stopped",
    "vmNics": [
      {
        "uuid": "843c879cfd36341a845551d4f3f80adc",
        "vmInstanceUuid": "16a1759999f43522989d50257c148f03",
        "usedIpUuid": "34e14b0d570930bbaf521e6cf11703ad",
        "l3NetworkUuid": "58e3259d7ac63196bab7b4fde66a63e4",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "963beb34a38a31c6a663861152ebdfa7",
        "name": "Root-Volume-For-VM-16a1759999f43522989d50257c148f03",
        "primaryStorageUuid": "bb0ef0006c0831bcba36bf8cb449e4e5",
        "vmInstanceUuid": "16a1759999f43522989d50257c148f03",
        "diskOfferingUuid": "d3208f0181f1312b8807e228e1f89bc9",
        "rootImageUuid": "f2a2344a96a93d84958cdd8e9396ac53",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-963beb34a38a31c6a663861152ebdfa7/963beb34a38a31c6a663861152ebdfa7.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | ip协议号 | 3.1.0 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String | 云盘根镜像UUID | 0.6 |
| installPath | String | 云盘在主存储上的路径 | 0.6 |
| type | String | 云盘类型，数据云盘/根云盘 | 0.6 |
| format | String | 云盘格式 | 0.6 |
| size | Long | 云盘大小 | 0.6 |
| actualSize | Long | 云盘真实大小 | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String | 云盘是否开启 | 0.6 |
| status | String | 云盘状态 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean | 是否共享云盘 | 0.6 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 3.2.0 |



##### SDK示例

 Java SDK

```
SetVmBootOrderAction action = new SetVmBootOrderAction();
action.uuid = "a83e7ff6d8d84f6fa48a089b2a918258";
action.bootOrder = asList("CdRom","HardDisk");
action.sessionId = "93251a3a33994bd9b3d54d4d9abcf5d7";
SetVmBootOrderAction.Result res = action.call();
```

 Python SDK

```
SetVmBootOrderAction action = SetVmBootOrderAction()
action.uuid = "dccc7be070934387b50fe96f30439231"
action.bootOrder = [CdRom, HardDisk]
action.sessionId = "2da90129d60741a3bc69228448ed9795"
SetVmBootOrderAction.Result res = action.call()
```

---

#### 获取目的地列表(GetCandidateZonesClustersHostsForCreatingVm)



获取可以创建指定云主机参数的目的区域、集群、物理机。用户可以使用该API，通过指定云主机参数获得可以创建满足参数云主机的目的地。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/candidate-destinations
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/candidate-destinations?\
instanceOfferingUuid=0a3d761b0e3031a9b3c62f418fdade09&imageUuid=f6885d39912b347880517a58a9f5ad5b\
&l3NetworkUuids=51f30f4fcd3b3a0da2998b37f1a8d8a3\
&dataDiskOfferingUuids=cf8aa933d58230ee80a4181a66772d0b\
&dataDiskOfferingUuids=6a5ea214bc88372285ff3c301d64428c&clusterUuid=1f6b12b24aa03d4bb57f84a2df4a03f4
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| instanceOfferingUuid(可选) | String | query | 计算规格UUID |  | 0.6s |
| imageUuid | String | query | 镜像UUID |  | 0.6 |
| l3NetworkUuids | List | query | 三层网络列表 |  | 0.6 |
| rootDiskOfferingUuid (可选) | String | query | 根云盘规格。仅在**imageUuid**指定的镜像是ISO时需要指定 |  | 0.6 |
| dataDiskOfferingUuids (可选) | List | query | 云盘规格列表 |  | 0.6 |
| zoneUuid (可选) | String | query | 区域UUID |  | 0.6 |
| clusterUuid (可选) | String | query | 集群UUID |  | 0.6 |
| defaultL3NetworkUuid (可选) | String | query | 默认三层网络UUID |  | 0.6 |
| cpuNum (可选) | int | body | CPU数目 |  | 3.10.0 |
| memorySize (可选) | long | body | 内存大小, 单位Byte |  | 3.10.0 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "zones": [
    {
      "uuid": "b145bc2ad8f14810a6eec0f28508ca14",
      "name": "zone"
    }
  ],
  "clusters": [
    {
      "name": "cluster1",
      "uuid": "49adbf0f48a14b899b0e6f7928556313",
      "hypervisorType": "KVM",
      "createDate": "May 11, 2017 1:23:06 PM",
      "lastOpDate": "May 11, 2017 1:23:06 PM",
      "zoneUuid": "b68fec24ba0f492c94c2e046072c16f0"
    }
  ],
  "hosts": [
    {
      "zoneUuid": "b145bc2ad8f14810a6eec0f28508ca14",
      "name": "example",
      "uuid": "e1a5cb10bcbc48b4ab6dd4e648ef5960",
      "clusterUuid": "d5b32ea0ae1444d3b8b5a6b9d759af54",
      "description": "example",
      "managementIp": "192.168.0.1",
      "hypervisorType": "KVM",
      "state": "Enabled",
      "status": "Connected",
      "totalCpuCapacity": 4.0,
      "availableCpuCapacity": 2.0,
      "totalMemoryCapacity": 4.0,
      "availableMemoryCapacity": 4.0,
      "createDate": "May 11, 2017 1:23:06 PM",
      "lastOpDate": "May 11, 2017 1:23:06 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 操作是否成功 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| zones | List | 详情参考[zones] | 0.6 |
| clusters | List | 详情参考[clusters] | 0.6 |
| hosts | List | 详情参考[hosts] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #zones

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String |  | 0.6 |
| type | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #clusters

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 集群状态 | 0.6 |
| hypervisorType | String | 虚拟机管理程序类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| type | String | 保留域 | 0.6 |

 #hosts

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
GetCandidateZonesClustersHostsForCreatingVmAction action = new GetCandidateZonesClustersHostsForCreatingVmAction();
action.instanceOfferingUuid = "f1569e619ba44cfeb264759df0720b19";
action.imageUuid = "57374e8324c34999ba81bd363a576653";
action.l3NetworkUuids = asList("dfac2b50c85a498780cf6d1828075e51");
action.dataDiskOfferingUuids = asList("bbe0af9d301e44d6b4605c6ed61f33d5","49f0cbfd2b694e5f9a5cf631f7dc219b");
action.clusterUuid = "0efc966199184f99982e9874186aab38";
action.sessionId = "5d04a0ac859746dea2f9cd81329e91ea";
GetCandidateZonesClustersHostsForCreatingVmAction.Result res = action.call();
```

 Python SDK

```
GetCandidateZonesClustersHostsForCreatingVmAction action = GetCandidateZonesClustersHostsForCreatingVmAction()
action.instanceOfferingUuid = "6aef4e5bcf944af293096558effda40d"
action.imageUuid = "8a93ad62da8c436e8b79f37aae134bc6"
action.l3NetworkUuids = [3f1df9b106a04503bb1c7a68c7bddf75]
action.dataDiskOfferingUuids = [71817f0e5fa04e4e8ef5c035a0f84e67, ddb83b57bfc14aadb3df1ca6d40bfe04]
action.clusterUuid = "c910b625c0f94958a6a7e4ad3df15d34"
action.sessionId = "ae4cc6df99b14fb091a9b3779228709c"
GetCandidateZonesClustersHostsForCreatingVmAction.Result res = action.call()
```

---

#### 获取云主机可启动目的地列表(GetVmStartingCandidateClustersHosts)



获取一个停止的云主机可以启动的集群、物理机列表。用户可以用该API判断一个停止的云主机可以在哪些集群、物理机上启动。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/starting-target-hosts
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth: a2a9ac093ee64f669665aff2807bbe8a" \
-X GET http://localhost:8080/zstack/v1/vm-instances/d8cfc97f5099454bb3eed367a79d4e4c/starting-target-hosts
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "hostInventories": [
    {
      "zoneUuid": "1650e7c372ab4d43aa1b16e3a48f5f05",
      "name": "example",
      "uuid": "3b659b741cc743a5840aaab5a2c366d1",
      "clusterUuid": "5ecdcc0a2823494daa0c85a7889a7890",
      "description": "example",
      "managementIp": "192.168.0.1",
      "hypervisorType": "KVM",
      "state": "Enabled",
      "status": "Connected",
      "totalCpuCapacity": 4.0,
      "availableCpuCapacity": 2.0,
      "totalMemoryCapacity": 4.0,
      "availableMemoryCapacity": 4.0,
      "createDate": "Apr 24, 2017 7:11:02 PM",
      "lastOpDate": "Apr 24, 2017 7:11:02 PM"
    }
  ],
  "clusterInventories": [
    {
      "name": "cluster1",
      "uuid": "2ecd7d0ddad649e4a36a7f47e43dae1a",
      "hypervisorType": "KVM",
      "createDate": "Apr 24, 2017 7:11:02 PM",
      "lastOpDate": "Apr 24, 2017 7:11:02 PM",
      "zoneUuid": "268a180f9a7d4ebe9f5a0e7ad558d523"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| hosts | List | 详情参考[hosts] | 0.6 |
| clusters | List | 详情参考[clusters] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #hosts

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| zoneUuid | String | 区域UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| managementIp | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| totalCpuCapacity | Long |  | 0.6 |
| availableCpuCapacity | Long |  | 0.6 |
| cpuSockets | Integer |  | 0.6 |
| totalMemoryCapacity | Long |  | 0.6 |
| availableMemoryCapacity | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #clusters

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 集群状态 | 0.6 |
| hypervisorType | String | 虚拟机管理程序类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| type | String | 保留域 | 0.6 |



##### SDK示例

 Java SDK

```
GetVmStartingCandidateClustersHostsAction action = new GetVmStartingCandidateClustersHostsAction();
action.uuid = "a591b94c66d6452284f9940e7807425a";
action.sessionId = "5630397e6ade47e9bd73569f5177957e";
GetVmStartingCandidateClustersHostsAction.Result res = action.call();
```

 Python SDK

```
GetVmStartingCandidateClustersHostsAction action = GetVmStartingCandidateClustersHostsAction()
action.uuid = "0cb8127bcfb8431497562f7464ee9920"
action.sessionId = "9320fb483c3c4926a7870ffa045088b2"
GetVmStartingCandidateClustersHostsAction.Result res = action.call()
```

---

#### 指定云主机IP(SetVmStaticIp)



给云主机网卡指定IP，用户可以通过该API控制云平台分配给云主机网卡的IP。

用户要确保指定的IP在指定三层网络，并且IP未被占用。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmStaticIp": {
    "l3NetworkUuid": "61e66d487dff454f9509a1f19606d274",
    "ip": "192.168.10.10"
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
-X PUT -d '{"setVmStaticIp":{"l3NetworkUuid":"9fcbd78edb58391f8d9b879ea87598fd","ip":"192.168.10.10"}}' http://localhost:8080/zstack/v1/vm-instances/e3749802228a36038d0e17041414fd17/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| l3NetworkUuid | String | body(包含在**setVmStaticIp**结构中) | 三层网络UUID |  | 0.6 |
| ip (可选) | String | body(包含在**setVmStaticIp**结构中) | 指定IP地址 |  | 4.6.21 |
| ip6 (可选) | String | body(包含在**setVmStaticIp**结构中) | 指定IPv6地址 |  | 3.10.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| netmask (可选) | String | body(包含在**setVmStaticIp**结构中) | IPv4子网掩码 |  | 4.6.21 |
| gateway (可选) | String | body(包含在**setVmStaticIp**结构中) | IPv4网关 |  | 4.6.21 |
| ipv6Gateway (可选) | String | body(包含在**setVmStaticIp**结构中) | IPv6网关 |  | 4.6.21 |
| ipv6Prefix (可选) | String | body(包含在**setVmStaticIp**结构中) | IPv6前缀长度 |  | 4.6.21 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetVmStaticIpAction action = new SetVmStaticIpAction();
action.vmInstanceUuid = "e3749802228a36038d0e17041414fd17";
action.l3NetworkUuid = "9fcbd78edb58391f8d9b879ea87598fd";
action.ip = "192.168.10.10";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmStaticIpAction.Result res = action.call();
```

 Python SDK

```
SetVmStaticIpAction action = SetVmStaticIpAction()
action.vmInstanceUuid = "e3749802228a36038d0e17041414fd17"
action.l3NetworkUuid = "9fcbd78edb58391f8d9b879ea87598fd"
action.ip = "192.168.10.10"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmStaticIpAction.Result res = action.call()
```

---

#### 删除云主机指定IP(DeleteVmStaticIp)



删除云主机三层网络上指定的IP。

##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/{vmInstanceUuid}/static-ips?l3NetworkUuid={l3NetworkUuid}&deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "l3NetworkUuid": "0a52c0bd8b4049699ff5b772f3f3eb59",
    "deleteMode": "Permissive"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 64d0600e594944eca1f49970ab4ca25c" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/faf465c53e7f47898b8f41c5e90e46d3/static-ips?l3NetworkUuid=4ef401fb452e3b48af5914bcd336d670&deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| l3NetworkUuid | String | body | 三层网络UUID |  | 0.6 |
| deleteMode(可选) | String | body |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "aa498202ad064d949e953e6b1c34653a",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "ac43427ffc5948c8a24aa364a4471ada",
    "clusterUuid": "ba25be3393a1445b8fdfdba28f87155d",
    "imageUuid": "b0884882126445ddb8e3d5de3490bdcf",
    "hostUuid": "f4f2e93245bd40c3a5db51d9ac95c593",
    "lastHostUuid": "88f9a2a245ef4a289588851f927763e2",
    "instanceOfferingUuid": "1b206ad5484645528ba14a1c27c633d0",
    "rootVolumeUuid": "200bf3e928de459d9182fea4cf7eb3fd",
    "platform": "Linux",
    "defaultL3NetworkUuid": "44b85e2a6d7f443b9f0bed0842449a35",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "May 11, 2017 1:22:29 PM",
    "lastOpDate": "May 11, 2017 1:22:29 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "8767d51cb10341eebc866d756a23b160",
        "vmInstanceUuid": "aa498202ad064d949e953e6b1c34653a",
        "usedIpUuid": "cafa365e629846dd895cd4f273edd9bf",
        "l3NetworkUuid": "44b85e2a6d7f443b9f0bed0842449a35",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "May 11, 2017 1:22:29 PM",
        "lastOpDate": "May 11, 2017 1:22:29 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "200bf3e928de459d9182fea4cf7eb3fd",
        "name": "Root-Volume-For-VM-aa498202ad064d949e953e6b1c34653a",
        "primaryStorageUuid": "251c44e3521e49d4982aa9c7b3b6116b",
        "vmInstanceUuid": "aa498202ad064d949e953e6b1c34653a",
        "diskOfferingUuid": "afd12ea56bd84e8b9a26fe27b11d20ca",
        "rootImageUuid": "b0884882126445ddb8e3d5de3490bdcf",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-200bf3e928de459d9182fea4cf7eb3fd/200bf3e928de459d9182fea4cf7eb3fd.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "May 11, 2017 1:22:29 PM",
        "lastOpDate": "May 11, 2017 1:22:29 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
DeleteVmStaticIpAction action = new DeleteVmStaticIpAction();
action.vmInstanceUuid = "f81673bc3cf04884b19d5ded83cd9ff8";
action.l3NetworkUuid = "636a65b66bfc490985d44285a090ab11";
action.deleteMode = "Permissive";
action.sessionId = "93d5734188ee48058032d6a2cebebf80";
DeleteVmStaticIpAction.Result res = action.call();
```

 Python SDK

```
DeleteVmStaticIpAction action = DeleteVmStaticIpAction()
action.vmInstanceUuid = "6fa2e4774cb34e72986f3a4860c5fad4"
action.l3NetworkUuid = "fa3953b839434d4a81a106e578a3a366"
action.deleteMode = "Permissive"
action.sessionId = "5cc00379d1224a1c9be943419e54f467"
DeleteVmStaticIpAction.Result res = action.call()
```

---

#### 获取云主机能力(GetVmCapabilities)

  获取一个云主机的能力，用于判断云主机是否能做某些特定操作。目前已定义能力包括：

| 名称 | 描述 | 类型 |
| --- | --- | --- |
| LiveMigration | 是否支持热迁移 | Boolean |
| VolumeMigration | 是否支持根云盘迁移 | Boolean |



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/capabilities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b883d676f4514489ab993c87f6a8ee70" \
-X GET http://localhost:8080/zstack/v1/vm-instances/7a6c30c6de654cdf9d29b18a78c83a64/capabilities
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "capabilities": {
    "LiveMigration": false,
    "Reimage": false,
    "VolumeMigration": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| capabilities | Map | 云主机能力结果 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmCapabilitiesAction action = new GetVmCapabilitiesAction();
action.uuid = "2323ae79b3894f0a85018a2a458247aa";
action.sessionId = "05233d04bc144482a5b4a74fdea06408";
GetVmCapabilitiesAction.Result res = action.call();
```

 Python SDK

```
GetVmCapabilitiesAction action = GetVmCapabilitiesAction()
action.uuid = "0fb5a5b4a3e54314ba1c5fa2e07384d2"
action.sessionId = "71df5d9cf30845dba8d1ef804bdf2108"
GetVmCapabilitiesAction.Result res = action.call()
```

---

#### 更新云主机信息(UpdateVmInstance)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmInstance": {
    "name": "new vm name"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"\
 -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateVmInstance":{"name":"new vm name"}}' http://localhost:8080/zstack/v1/vm-instances/dfa2feae60f431ac8d5f071f5594cfc1/actions
```

 参数列表
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 0.6 |
| name (可选) | String | body(包含在**updateVmInstance**结构中) | 云主机名 |  | 0.6 |
| description (可选) | String | body(包含在**updateVmInstance**结构中) | 云主机详细描述 |  | 0.6 |
| state (可选) | String | body(包含在**updateVmInstance**结构中) | 云主机状态 通常不应该直接更新云主机状态，否则会导致云平台对云主机状态发生误判。 该字段只应用于云主机真实状态和云平台记录状态发生不一致，而云平台同步机制已失效时（通常意味着bug）。 管理员应完全理解使用该字段的后果。 | Stopped Running | 0.6 |
| defaultL3NetworkUuid (可选) | String | body(包含在**updateVmInstance**结构中) | 默认三层网络UUID |  | 0.6 |
| platform (可选) | String | body(包含在**updateVmInstance**结构中) | 云主机平台类型 | Linux Windows WindowsVirtio Other Paravirtualization | 0.6 |
| cpuNum (可选) | Integer | body(包含在**updateVmInstance**结构中) | 云主机CPU数量。需停止/启动云主机后生效 当全局设置NUMA为true情况下创建的云主机，支持动态调整 |  | 0.6 |
| memorySize (可选) | Long | body(包含在**updateVmInstance**结构中) | 云主机内存大小。需停止/启动云主机后生效 全局设置NUMA为true情况下创建的云主机，支持动态调整。 |  | 0.6 |
| guestOsType (可选) | String | body(包含在**updateVmInstance**结构中) |  |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "6710cdffb0653455809b6511a6b3aaa4",
    "name": "new vm name",
    "description": "web server VM",
    "zoneUuid": "aa63c5a3b3c436fa94e5e851f057fe23",
    "clusterUuid": "48b424d94ed239f1b18e1ce37db24cf8",
    "imageUuid": "4e1ac550da8d30c7b07162acc39773c1",
    "hostUuid": "1f3ffea4673e3e4197681ee030d1794b",
    "lastHostUuid": "d334dadb7cfc34da8f6f7d74dfd04692",
    "instanceOfferingUuid": "33b38aff5cbe3e24a9266300f7163d20",
    "rootVolumeUuid": "761df8e1eef933ee8d7f3b7f8551b754",
    "platform": "Linux",
    "defaultL3NetworkUuid": "3a3c91f4a28a31beb410d6d1c3dc862c",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "ae19167e24713aeea9c45e6f2d27249d",
        "vmInstanceUuid": "6710cdffb0653455809b6511a6b3aaa4",
        "usedIpUuid": "010f4817011b32d3b476faa3f393d765",
        "l3NetworkUuid": "3a3c91f4a28a31beb410d6d1c3dc862c",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "761df8e1eef933ee8d7f3b7f8551b754",
        "name": "Root-Volume-For-VM-6710cdffb0653455809b6511a6b3aaa4",
        "primaryStorageUuid": "da81ed018a9738ff97a16d7b7a43327d",
        "vmInstanceUuid": "6710cdffb0653455809b6511a6b3aaa4",
        "diskOfferingUuid": "bd9b406d36c13fc7ad3f995535415898",
        "rootImageUuid": "4e1ac550da8d30c7b07162acc39773c1",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-761df8e1eef933ee8d7f3b7f8551b754/761df8e1eef933ee8d7f3b7f8551b754.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String | IP地址 | 4.1.0 |
| mac | String | MAC地址 | 4.1.0 |
| hypervisorType | String | 虚拟化类型 | 4.1.0 |
| netmask | String | 子网掩码 | 4.1.0 |
| gateway | String | 网关 | 4.1.0 |
| metaData | String |  | 0.6 |
| ipVersion | Integer | IP地址版本 | 3.1.0 |
| deviceId | Integer | 设备ID | 0.6 |
| type | String | 网卡类型 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| usedIps | List | 详情参考[usedIps] | 0.6 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| ipRangeUuid | String | IP段UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ipVersion | Integer | IP协议号 | 3.1.0 |
| ip | String | IP地址 | 0.6 |
| netmask | String | 网络掩码 | 0.6 |
| gateway | String | 网关地址 | 0.6 |
| usedFor | String |  | 0.6 |
| ipInLong | long |  | 0.6 |
| vmNicUuid | String | 云主机网卡UUID | 3.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String | 云盘根镜像UUID | 4.1.0 |
| installPath | String | 云盘在主存储上的路径 | 4.1.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.1.0 |
| format | String | 云盘格式 | 4.1.0 |
| size | Long | 云盘大小 | 4.1.0 |
| actualSize | Long | 云盘真实大小 | 4.1.0 |
| deviceId | Integer |  | 0.6 |
| state | String | 云盘是否开启 | 4.1.0 |
| status | String | 云盘状态 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateVmInstanceAction action = new UpdateVmInstanceAction();
action.uuid = "c424899cef6f4723baf0aae3acbe6020";
action.name = "new vm name";
action.sessionId = "4320eeda74fa41788522c75ed42ec889";
UpdateVmInstanceAction.Result res = action.call();
```

 Python SDK

```
UpdateVmInstanceAction action = UpdateVmInstanceAction()
action.uuid = "fb287c6cb9134d208d1ed054577ad249"
action.name = "new vm name"
action.sessionId = "2f01595d029449dbbf6c052ad1914271"
UpdateVmInstanceAction.Result res = action.call()
```

---

#### 克隆云主机(CloneVmInstance)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "cloneVmInstance": {
    "strategy": "InstantStart",
    "names": [
      "vm1",
      "vm2"
    ],
    "full": false
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
-X PUT -d '{"cloneVmInstance":{"strategy":"InstantStart","names":["vm1","vm2"],"full":false}}' \
http://localhost:8080/zstack/v1/vm-instances/c4d628c203433f64b062ad07c8edf10d/actions
```

 参数列表
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| strategy (可选) | String | body(包含在**cloneVmInstance**结构中) | 策略 | CreateStopped InstantStart JustCreate 说明: JustCreate将仅创建云主机记录，不会进行任何初始化，且该云主机不会在UI展示。 | 0.6 |
| names | List | body(包含在**cloneVmInstance**结构中) | 云主机的名字清单 |  | 0.6 |
| full (可选) | Boolean | body(包含在**cloneVmInstance**结构中 | 是否克隆已挂载数据盘 |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**cloneVmInstance**结构中) |  |  | 4.6.21 |
| primaryStorageUuidForDataVolume (可选) | String | body(包含在**cloneVmInstance**结构中) |  |  | 4.6.21 |
| rootVolumeSystemTags (可选) | List | body(包含在**cloneVmInstance**结构中) |  |  | 4.6.21 |
| dataVolumeSystemTags (可选) | List | body(包含在**cloneVmInstance**结构中) |  |  | 4.6.21 |
| clusterUuid (可选) | String | body(包含在**cloneVmInstance**结构中) | 集群UUID |  | 4.6.21 |
| hostUuid (可选) | String | body(包含在**cloneVmInstance**结构中) | 物理机UUID |  | 4.6.21 |
| vmNicParams (可选) | List | body(包含在**cloneVmInstance**结构中) | 网卡参数 |  | 5.1.0 |



##### API返回

 返回示例

```
{
  "result": {
    "numberOfClonedVm": 1,
    "inventories": [
      {
        "inventory": {
          "uuid": "327b60d6b8cd31489ade6f4830bcec16",
          "name": "new vm name",
          "description": "web server VM",
          "zoneUuid": "d886a09330e13282b7a320a98d0a53ec",
          "clusterUuid": "f6f07dff7ede3b8cac7c8595a1698832",
          "imageUuid": "3b7ff22eb60d38318835817ba6a2b6a2",
          "hostUuid": "70c0f5223d083dfea2f1a02f69906306",
          "lastHostUuid": "123f7f85f82f3e99940836d97ae18e04",
          "instanceOfferingUuid": "001537d10c433857a7a98ae0a362c910",
          "rootVolumeUuid": "c8be7ec6a8573d98a580b457a7245141",
          "platform": "Linux",
          "defaultL3NetworkUuid": "2ac50b85591b3e87b2686c529cf062f9",
          "type": "UserVm",
          "hypervisorType": "KVM",
          "memorySize": 8589934592,
          "cpuNum": 1,
          "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM",
          "state": "Running",
          "allVolumes": [
            {
              "uuid": "c8be7ec6a8573d98a580b457a7245141",
              "name": "Root-Volume-For-VM-327b60d6b8cd31489ade6f4830bcec16",
              "primaryStorageUuid": "c2a27c5268493a5cba84b94e37b86b4d",
              "vmInstanceUuid": "327b60d6b8cd31489ade6f4830bcec16",
              "diskOfferingUuid": "358e00e7245a39b9aa1c1849d6ba9701",
              "rootImageUuid": "3b7ff22eb60d38318835817ba6a2b6a2",
              "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-c8be7ec6a8573d98a580b457a7245141/c8be7ec6a8573d98a580b457a7245141.qcow2",
              "type": "Root",
              "format": "qcow2",
              "size": 107374182400,
              "actualSize": 21474836480,
              "deviceId": 0,
              "state": "Enabled",
              "status": "Ready",
              "createDate": "Nov 14, 2017 10:20:57 PM",
              "lastOpDate": "Nov 14, 2017 10:20:57 PM"
            }
          ]
        }
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| result | CloneVmInstanceResults | 详情参考[result] | 0.6 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #result

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| numberOfClonedVm | int |  | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 详情参考[error] | 0.6 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| architecture | String |  | 4.6.21 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| guestOsType | String |  | 4.6.21 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.6.21 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.13 |
| ip | String |  | 4.7.13 |
| mac | String |  | 4.7.13 |
| hypervisorType | String |  | 4.7.13 |
| netmask | String |  | 4.7.13 |
| gateway | String |  | 4.7.13 |
| metaData | String |  | 4.7.13 |
| ipVersion | Integer |  | 4.7.13 |
| driverType | String |  | 4.7.13 |
| internalName | String |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| type | String |  | 4.7.13 |
| state | String | 网卡状态 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| usedIps | List | 详情参考[usedIps] | 4.7.13 |

  #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| ipRangeUuid | String | IP段UUID | 5.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.0.0 |
| ipVersion | Integer |  | 5.0.0 |
| ip | String |  | 5.0.0 |
| netmask | String |  | 5.0.0 |
| gateway | String |  | 5.0.0 |
| usedFor | String |  | 5.0.0 |
| ipInLong | long |  | 5.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |

  #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| primaryStorageUuid | String | 主存储UUID | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.13 |
| rootImageUuid | String |  | 4.7.13 |
| installPath | String |  | 4.7.13 |
| type | String |  | 4.7.13 |
| format | String |  | 4.7.13 |
| size | Long |  | 4.7.13 |
| actualSize | Long |  | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| state | String |  | 4.7.13 |
| status | String |  | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |
| isShareable | Boolean |  | 4.7.13 |
| volumeQos | String |  | 4.7.13 |
| lastDetachDate | Timestamp |  | 4.7.13 |
| lastVmInstanceUuid | String |  | 4.7.13 |

  #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.13 |
| vmInstanceUuid | String | 云主机UUID | 4.7.13 |
| deviceId | Integer |  | 4.7.13 |
| isoUuid | String |  | 4.7.13 |
| isoInstallPath | String |  | 4.7.13 |
| name | String | 资源名称 | 4.7.13 |
| description | String | 资源的详细描述 | 4.7.13 |
| createDate | Timestamp | 创建时间 | 4.7.13 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.13 |



##### SDK示例

 Java SDK

```
CloneVmInstanceAction action = new CloneVmInstanceAction();
action.vmInstanceUuid = "c4d628c203433f64b062ad07c8edf10d";
action.strategy = "InstantStart";
action.names = asList("vm1","vm2");
action.full = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CloneVmInstanceAction.Result res = action.call();
```

 Python SDK

```
CloneVmInstanceAction action = CloneVmInstanceAction()
action.vmInstanceUuid = "c4d628c203433f64b062ad07c8edf10d"
action.strategy = "InstantStart"
action.names = [vm1, vm2]
action.full = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CloneVmInstanceAction.Result res = action.call()
```

---

#### 设置云主机时钟同步（SetVmClockTrack）



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmClockTrack": {
    "track": "guest",
    "syncAfterVMResume": true,
    "intervalInSeconds": 60.0
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
-X PUT '{"setVmClockTrack":{"track":"guest","syncAfterVMResume":true,"intervalInSeconds":60.0}}' http://localhost:8080/zstack/v1/vm-instances/cc0a313462243900b6c843ff427b7f0e/actions
```

 参数列表
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.1.0 |
| track | String | body(包含在**setVmClockTrack**结构中) |  | guest host | 4.1.0 |
| syncAfterVMResume (可选) | Boolean | body(包含在**setVmClockTrack**结构中) | 暂停到恢复是否同步 |  | 4.4.24 |
| intervalInSeconds (可选) | Integer | body(包含在**setVmClockTrack**结构中) | 定期同步时间间隔 | 0 60 600 1800 3600 7200 21600 43200 86400 | 4.4.24 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
  "inventory": {
    "uuid": "19d64f55a9723e59849c0f9357a0dded",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "553326a3b554380ca4e4b2976efa4df5",
    "clusterUuid": "c9a8ba243c5a3d59b144e4e1ace143a2",
    "imageUuid": "e4297acdd9b43e3f9b7a8ec74211a3f2",
    "hostUuid": "f841ef12962037369ea4d8f3ba4c9c28",
    "lastHostUuid": "3b6273ea6b1a384584178e11f05bf1f0",
    "instanceOfferingUuid": "9ce1349c65ff3c80a423267837f5f34e",
    "rootVolumeUuid": "5319e0ae2b483949bf25b059a674dbc8",
    "platform": "Linux",
    "defaultL3NetworkUuid": "c715b758cd843ac997ccdfbbcc9097cc",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Stopped",
    "vmNics": [
      {
        "uuid": "8585080b6b5236a5875e8162c062e551",
        "vmInstanceUuid": "19d64f55a9723e59849c0f9357a0dded",
        "usedIpUuid": "c0bbe89468fa3b2aa6dc4e8aaa6df3f7",
        "l3NetworkUuid": "c715b758cd843ac997ccdfbbcc9097cc",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "5319e0ae2b483949bf25b059a674dbc8",
        "name": "Root-Volume-For-VM-19d64f55a9723e59849c0f9357a0dded",
        "primaryStorageUuid": "0e4e3cf961873074b8b3eca3bc693ece",
        "vmInstanceUuid": "19d64f55a9723e59849c0f9357a0dded",
        "diskOfferingUuid": "f1b95ad6d26e336e8809764ec2936fd2",
        "rootImageUuid": "e4297acdd9b43e3f9b7a8ec74211a3f2",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-5319e0ae2b483949bf25b059a674dbc8/5319e0ae2b483949bf25b059a674dbc8.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| zoneUuid | String | 区域UUID | 4.1.0 |
| clusterUuid | String | 集群UUID | 4.1.0 |
| imageUuid | String | 镜像UUID | 4.1.0 |
| hostUuid | String | 物理机UUID | 4.1.0 |
| lastHostUuid | String |  | 4.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.1.0 |
| platform | String |  | 4.1.0 |
| defaultL3NetworkUuid | String |  | 4.1.0 |
| type | String |  | 4.1.0 |
| hypervisorType | String |  | 4.1.0 |
| memorySize | Long |  | 4.1.0 |
| cpuNum | Integer |  | 4.1.0 |
| cpuSpeed | Long |  | 4.1.0 |
| allocatorStrategy | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| state | String |  | 4.1.0 |
| vmNics | List | 详情参考[vmNics] | 4.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.1.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| mac | String | MAC地址 | 4.1.0 |
| hypervisorType | String | 虚拟化类型 | 4.1.0 |
| netmask | String | 子网掩码 | 4.1.0 |
| gateway | String | 网关 | 4.1.0 |
| metaData | String |  | 4.1.0 |
| ipVersion | Integer | IP地址版本 | 4.1.0 |
| deviceId | Integer | 设备ID | 4.1.0 |
| type | String | 网卡类型 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| usedIps | List | 详情参考[usedIps] | 4.1.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| ipRangeUuid | String | IP段UUID | 4.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.1.0 |
| ipVersion | Integer | IP协议号 | 4.1.0 |
| ip | String | IP地址 | 4.1.0 |
| netmask | String | 网络掩码 | 4.1.0 |
| gateway | String | 网关地址 | 4.1.0 |
| usedFor | String |  | 4.1.0 |
| ipInLong | long |  | 4.1.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| primaryStorageUuid | String | 主存储UUID | 4.1.0 |
| vmInstanceUuid | String | 云主机UUID | 4.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.1.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.1.0 |
| installPath | String | 云盘在主存储上的路径 | 4.1.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.1.0 |
| format | String | 云盘格式 | 4.1.0 |
| size | Long | 云盘大小 | 4.1.0 |
| actualSize | Long | 云盘真实大小 | 4.1.0 |
| deviceId | Integer |  | 4.1.0 |
| state | String | 云盘是否开启 | 4.1.0 |
| status | String | 云盘状态 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| isShareable | Boolean | 是否共享云盘 | 4.1.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.1.0 |



##### SDK示例

 Java SDK

```
SetVmClockTrackAction action = new SetVmClockTrackAction();
action.uuid = "cc0a313462243900b6c843ff427b7f0e";
action.track = "guest";
action.syncAfterVMResume = true;
action.intervalInSeconds = 60.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmClockTrackAction.Result res = action.call();
```

 Python SDK

```
SetVmClockTrackAction action = SetVmClockTrackAction()
action.uuid = "cc0a313462243900b6c843ff427b7f0e"
action.track = "guest"
action.syncAfterVMResume = true
action.intervalInSeconds = 60.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmClockTrackAction.Result res = action.call()
```

---

#### 立即同步云主机时钟（SyncVmClock）



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncVmClock": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncVmClock":{}}' http://localhost:8080/zstack/v1/vm-instances/b9b970400c1f4a6dad1976be1c63f698/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.4.24 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.24 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.24 |



##### API返回

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



##### SDK示例

 Java SDK

```
SyncVmClockAction action = new SyncVmClockAction();
action.uuid = "bbf94dc05840489cbf8f5b5d1d0984dc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncVmClockAction.Result res = action.call();
```

 Python SDK

```
SyncVmClockAction action = SyncVmClockAction()
action.uuid = "0ce0a34f854d487281b32b8fd3608390"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncVmClockAction.Result res = action.call()
```

---

#### 设置云主机高可用级别(SetVmInstanceHaLevel)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/{uuid}/ha-levels
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "level": "NeverStop"
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
-X POST -d '{"params":{"level":"NeverStop"}}' \
http://localhost:8080/zstack/v1/vm-instances/76d39c6862b840a3aa4568d83db99022/ha-levels
```

 参数列表
-

-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机的资源Uuid |  | 0.6 |
| level | String | body(包含在**params**结构中) | 云主机高可用级别： NeverStop永不停机 | NeverStop | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
    "error": {
        "code": "SYS.1001",
        "description": "A message or a operation timeout"
    }
}
```



##### SDK示例

 Java SDK

```
SetVmInstanceHaLevelAction action = new SetVmInstanceHaLevelAction();
action.uuid = "76d39c6862b840a3aa4568d83db99022";
action.level = "NeverStop";
action.sessionId = "673a3db55e4a43739aa2b701462547f3";
SetVmInstanceHaLevelAction.Result res = action.call();
```

 Python SDK

```
SetVmInstanceHaLevelAction action = SetVmInstanceHaLevelAction()
action.uuid = "76d39c6862b840a3aa4568d83db99022"
action.level = "NeverStop"
action.sessionId = "f631227267ef445a9d8066e163c6618a"
SetVmInstanceHaLevelAction.Result res = action.call()
```

---

#### 获取云主机高可用级别(GetVmInstanceHaLevel)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/ha-levels
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 92f80693e3d641c68c014d4f762c0b70" \
-X GET http://localhost:8080/zstack/v1/vm-instances/76d39c6862b840a3aa4568d83db99022/ha-levels
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机资源Uuid |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "level": "NeverStop"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| level | String | 云主机高可用级别，NeverStop或OnHostFailure | 0.6 |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmInstanceHaLevelAction action = new GetVmInstanceHaLevelAction();
action.uuid = "76d39c6862b840a3aa4568d83db99022";
action.sessionId = "ed55da0421704d2ca59ff0106cae94bb";
GetVmInstanceHaLevelAction.Result res = action.call();
```

 Python SDK

```
GetVmInstanceHaLevelAction action = GetVmInstanceHaLevelAction()
action.uuid = "76d39c6862b840a3aa4568d83db99022"
action.sessionId = "559a84ded13d4e88a7fdb01f2dfd47f0"
GetVmInstanceHaLevelAction.Result res = action.call()
```

---

#### 取消云主机高可用(DeleteVmInstanceHaLevel)



##### API请求

 URLs

```
DELETE zstack/v1/instances/{uuid}/ha-levels
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 038c30608df54956bea7e06d6adf7ffe" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/76d39c6862b840a3aa4568d83db99022/ha-levels?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机资源Uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteVmInstanceHaLevelAction action = new DeleteVmInstanceHaLevelAction();
action.uuid = "76d39c6862b840a3aa4568d83db99022";
action.sessionId = "0cc42e2185664cd6a762ea527075e9f9";
DeleteVmInstanceHaLevelAction.Result res = action.call();
```

 Python SDK

```
DeleteVmInstanceHaLevelAction action = DeleteVmInstanceHaLevelAction()
action.uuid = "76d39c6862b840a3aa4568d83db99022"
action.sessionId = "55fbd55cda2a45f3abbd540620846039"
DeleteVmInstanceHaLevelAction.Result res = action.call()
```

---

#### 获取云主机Qga (GetVmQga)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/qga
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 34fc90e40acb4b59b0051485dc625b34" \
-X GET http://localhost:8080/zstack/v1/vm-instances/ab76c455f44b4b1b8a33ecdde1a98eb3/qga
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "uuid": "889251004c244ec6aafd2df09b8cfcbd",
  "enable": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| enable | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVmQgaAction action = new GetVmQgaAction();
action.uuid = "f2e1551d87d6495faa2bbf3059f060c6";
action.sessionId = "1759cb82bcb44dd9b06cac166513ea41";
GetVmQgaAction.Result res = action.call();
```

 Python SDK

```
GetVmQgaAction action = GetVmQgaAction()
action.uuid = "d9772f9d072f4412954e52516111cc3c"
action.sessionId = "9f1efc92185649659a77f8de8ea5d886"
GetVmQgaAction.Result res = action.call()
```

---

#### 设置云主机Qga (SetVmQga)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmQga": {
    "enable": false
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
-X PUT -d '{"setVmQga":{"enable":false}}' \
http://localhost:8080/zstack/v1/vm-instances/8f37ceee285c3418b28247388508601a/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| enable | boolean | body(包含在params结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetVmQgaAction action = new SetVmQgaAction();
action.uuid = "771991c9b47f45a392bddeadba95ab2b";
action.enable = false;
action.sessionId = "6dc45ce48e8345f89c8487bb9a5180f8";
SetVmQgaAction.Result res = action.call();
```

 Python SDK

```
SetVmQgaAction action = SetVmQgaAction()
action.uuid = "084bb6e8ecd9497fb261049cce04b116"
action.enable = false
action.sessionId = "5e78bf8076a84933928ee8d2ef04eca9"
SetVmQgaAction.Result res = action.call()
```

---

#### 获取云主机GuestTools状态 (QueryGuestToolsState)



##### API请求

 URLs

```
GET zstack/v1/guesttools
GET zstack/v1/guesttools/state
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/guesttools
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/guesttools/state
```



可查询字段

运行`zstack-cli`命令行工具，输入`QueryGuestToolsState`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

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



##### SDK示例

 Java SDK

```
QueryGuestToolsStateAction action = new QueryGuestToolsStateAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryGuestToolsStateAction.Result res = action.call();
```

 Python SDK

```
QueryGuestToolsStateAction action = QueryGuestToolsStateAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryGuestToolsStateAction.Result res = action.call()
```

---

#### 更新云主机GuestTools状态(UpdateGuestToolsState)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/guesttools-state
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateGuestToolsState": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateGuestToolsState":{}}' \
http://localhost:8080/zstack/v1/vm-instances/5222bedcc3333b848b4cfb67e14bcc2d/guesttools-state
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.6.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vmInstanceUuid": "321e85ca08b335e09f172041f7e710b5",
    "qgaState": "Running",
    "zwatchState": "Running",
    "version": "4.6.11",
    "platform": "Kylin",
    "osType": "Kylin"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.21 |
| inventory | GuestToolsStateInventory | 详情参考[inventory] | 4.6.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.21 |
| description | String | 错误的概要描述 | 4.6.21 |
| details | String | 错误的详细信息 | 4.6.21 |
| elaboration | String | 保留字段，默认为null | 4.6.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 4.6.21 |
| version | String | 云主机GuestTools版本 | 4.6.21 |
| platform | String | 云主机OS平台类型 | 4.6.21 |
| osType | String | 云主机OS类型 | 4.6.21 |
| createDate | Timestamp | 创建时间 | 4.6.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.21 |
| qgaState | GuestToolsQgaState | 详情参考[qgaState] | 4.6.21 |
| zwatchState | GuestToolsZWatchState | 详情参考[zwatchState] | 4.6.21 |

 #qgaState

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| NotInstalled | GuestToolsQgaState | 未安装 | 4.6.21 |
| Running | GuestToolsQgaState | 运行中 | 4.6.21 |
| NotRunning | GuestToolsQgaState | 停止 | 4.6.21 |
| NotUpgraded | GuestToolsQgaState | 待升级 | 4.6.21 |

 #zwatchState

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| NotInstalled | GuestToolsZWatchState | 未安装 | 4.6.21 |
| Running | GuestToolsZWatchState | 运行中 | 4.6.21 |
| NotRunning | GuestToolsZWatchState | 未运行 | 4.6.21 |



##### SDK示例

 Java SDK

```
UpdateGuestToolsStateAction action = new UpdateGuestToolsStateAction();
action.vmInstanceUuid = "5222bedcc3333b848b4cfb67e14bcc2d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateGuestToolsStateAction.Result res = action.call();
```

 Python SDK

```
UpdateGuestToolsStateAction action = UpdateGuestToolsStateAction()
action.vmInstanceUuid = "5222bedcc3333b848b4cfb67e14bcc2d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateGuestToolsStateAction.Result res = action.call()
```

---

#### 同步云主机网络配置(UpdateVmNetworkConfig)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/update-nic-config
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmNetworkConfig": {
    "vmNicUuids": [
      "afb48d4bfd193c6b9d46b866cb29a767"
    ]
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \-X PUT -d '{"updateVmNetworkConfig":{"vmNicUuids":["afb48d4bfd193c6b9d46b866cb29a767"]}}' \
http://localhost:8080/zstack/v1/vm-instances/1c8470e916873fe6ae0251c3f592a6c4/update-nic-config
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.6.21 |
| vmNicUuids | List | body(包含在**updateVmNetworkConfig**结构中) |  |  | 4.6.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.21 |



##### API返回

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



##### SDK示例

 Java SDK

```
UpdateVmNetworkConfigAction action = new UpdateVmNetworkConfigAction();
action.vmInstanceUuid = "1c8470e916873fe6ae0251c3f592a6c4";
action.vmNicUuids = asList("afb48d4bfd193c6b9d46b866cb29a767");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmNetworkConfigAction.Result res = action.call();
```

 Python SDK

```
UpdateVmNetworkConfigAction action = UpdateVmNetworkConfigAction()
action.vmInstanceUuid = "1c8470e916873fe6ae0251c3f592a6c4"
action.vmNicUuids = [afb48d4bfd193c6b9d46b866cb29a767]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmNetworkConfigAction.Result res = action.call()
```

---

#### 获取云主机RDP开关状态(GetVmRDP)



获取VM RDP开关状态,返回值为true或者false

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/rdp
```

 Headers

```
Authorization: OAuth the-session-uuid
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c38710f23af942819cc2c431bd94407b" \
-X GET http://localhost:8080/zstack/v1/vm-instances/78494eb669424e97b6f18920a920adbf/rdp
```

  参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.1 |
| systemTags (可选) | List | query |  |  | 2.1 |
| userTags (可选) | List | query |  |  | 2.1 |



##### API返回

 返回示例

```
{
  "enable": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | boolean | vm RDP 开关是否开启 | 2.1 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.1 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.1 |
| description | String | 错误的概要描述 | 2.1 |
| details | String | 错误的详细信息 | 2.1 |
| elaboration | String | 保留字段，默认为null | 2.1 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.1 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.1 |



##### SDK示例

 Java SDK

```
GetVmRDPAction action = new GetVmRDPAction();
action.uuid = "2503d2eb486e43469fef0e4864fb6c90";
action.sessionId = "380901023c664283a2a3edc0c52817f2";
GetVmRDPAction.Result res = action.call();
```

 Python SDK

```
GetVmRDPAction action = GetVmRDPAction()
action.uuid = "4cec955330e44ac980b99f20c811f1cc"
action.sessionId = "2971ac1171da458b964bf689032ba778"
GetVmRDPAction.Result res = action.call()
```

---

#### 设置云主机RDP开关状态(SetVmRDP)



设置云主机RDP功能是否开启，如果开启，桌面云会使用RDP连接该云主机。

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmRDP": {
    "enable": true
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
-X PUT -d '{"setVmRDP":{"enable":true}}' \
http://localhost:8080/zstack/v1/vm-instances/f523cb5736b630acb643dda6d31be5a0/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| enable | boolean | body(包含在**setVmRDP**结构中) | 云主机是否被标识为RDP可访问 |  | 2.2 |
| systemTags (可选) | List | body |  |  | 2.2 |
| userTags (可选) | List | body |  |  | 2.2 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetVmRDPAction action = new SetVmRDPAction();
action.uuid = "e2889e09bb0a4f1b9f2757d8bd0c1fc6";
action.enable = true;
action.sessionId = "595b40e65a1f4755a68573ab9ef6802c";
SetVmRDPAction.Result res = action.call();
```

 Python SDK

```
SetVmRDPAction action = SetVmRDPAction()
action.uuid = "dc71514a6e1a490b9985b1dcb4faff11"
action.enable = true
action.sessionId = "aee17676e2604d9ab50a4b8907c31568"
SetVmRDPAction.Result res = action.call()
```

---

#### 获取云主机支持的屏幕数(GetVmMonitorNumber)



获取vm支持的屏幕个数

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/monitorNumber
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 536c3b51e70f441190204e645a3d2d76" \
-X GET http://localhost:8080/zstack/v1/vm-instances/deb35f3b8ebf4b7e9765726a9c8e3505/monitorNumber
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| systemTags (可选) | List | query |  |  | 2.2 |
| userTags (可选) | List | query |  |  | 2.2 |



##### API返回

 返回示例

```
{
  "monitorNumber": 2.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| monitorNumber | Integer |  | 2.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |



##### SDK示例

 Java SDK

```
GetVmMonitorNumberAction action = new GetVmMonitorNumberAction();
action.uuid = "6415ca5909524c00b7b66c9662b45df1";
action.sessionId = "4bf39c422c2d4e01b5ab88da17096d0d";
GetVmMonitorNumberAction.Result res = action.call();
```

 Python SDK

```
GetVmMonitorNumberAction action = GetVmMonitorNumberAction()
action.uuid = "dc6e40115e674ccab14d9425d0028428"
action.sessionId = "3f5d36676ca94b9183b567470a22ed19"
GetVmMonitorNumberAction.Result res = action.call()
```

---

#### 设置云主机支持的屏幕数(SetVmMonitorNumber)



设置云主机支持的屏幕个数

##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmMonitorNumber": {
    "monitorNumber": 2.0
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
-X PUT -d '{"setVmMonitorNumber":{"monitorNumber":2.0}}' \
http://localhost:8080/zstack/v1/vm-instances/7cc2eec452593010bd2691f88385de7a/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| monitorNumber | Integer | body(包含在**setVmMonitorNumber**结构中) | 显示器个数 |  | 2.2 |
| systemTags (可选) | List | body |  |  | 2.2 |
| userTags (可选) | List | body |  |  | 2.2 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetVmMonitorNumberAction action = new SetVmMonitorNumberAction();
action.uuid = "eb57f91af28a48dcbb6c56220a9b6d24";
action.monitorNumber = 2.0;
action.sessionId = "d8b870a03f97490fa6c39085cec24da7";
SetVmMonitorNumberAction.Result res = action.call();
```

 Python SDK

```
SetVmMonitorNumberAction action = SetVmMonitorNumberAction()
action.uuid = "9a07d71b055e4da7a2f172e4cf7f337f"
action.monitorNumber = 2.0
action.sessionId = "56766234a9a54fe3b70c0e28b22fea5c"
SetVmMonitorNumberAction.Result res = action.call()
```

---

#### 修改云主机根云盘(ChangeVmImage)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmImage": {
    "imageUuid": "dbfd52c2f87c39cda8c8945fca8d6a5a"
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
-X PUT -d '{"changeVmImage":{"imageUuid":"dbfd52c2f87c39cda8c8945fca8d6a5a"}}' \
http://localhost:8080/zstack/v1/vm-instances/af9e42b52dc836dfac3ee89b08c47488/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 2.2 |
| imageUuid | String | body(包含在**changeVmImage**结构中) | 镜像UUID |  | 2.2 |
| resourceUuid (可选) | String | body(包含在**changeVmImage**结构中) |  |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |


  - 选项格式为：`ceph::rootPoolName::xxx, 其中xxx代表池名称`
  - 例如：`ceph::rootPoolName::pri-v-r-26e11ca6814d4e1ba504d845f7848db3`
- 例如：`ceph::rootPoolName::pri-v-r-26e11ca6814d4e1ba504d845f7848db3`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8753ddd9d41d3e1c81bca779096325e6",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "8f13ce3cefcc3b4f905140613c0790e9",
    "clusterUuid": "48574e91679f376f9443d75bd3deabd3",
    "imageUuid": "d20e62e8cab133498f1456c14e210644",
    "hostUuid": "1f74c3ba1d8a38afbc2c00b024b9df6f",
    "lastHostUuid": "9220f51b605a308ab2d540541261d452",
    "instanceOfferingUuid": "d1fe019ddd65376491f5b992dbe52f9d",
    "rootVolumeUuid": "d4131773654237c997b00fad3102d30d",
    "platform": "Linux",
    "defaultL3NetworkUuid": "f12a1735a9f33a86a16d9487351832ac",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8.589934592E9,
    "cpuNum": 1.0,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "6364c6ddbac03148b680f477761fd87a",
        "vmInstanceUuid": "8753ddd9d41d3e1c81bca779096325e6",
        "usedIpUuid": "996010937c043cee98258e261191d3e4",
        "l3NetworkUuid": "f12a1735a9f33a86a16d9487351832ac",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0.0,
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "d4131773654237c997b00fad3102d30d",
        "name": "Root-Volume-For-VM-8753ddd9d41d3e1c81bca779096325e6",
        "primaryStorageUuid": "080271df17b53de2857ab4728bafb21d",
        "vmInstanceUuid": "8753ddd9d41d3e1c81bca779096325e6",
        "diskOfferingUuid": "0fa1ba3b260633ecaa74111268b22d11",
        "rootImageUuid": "d20e62e8cab133498f1456c14e210644",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-d4131773654237c997b00fad3102d30d/d4131773654237c997b00fad3102d30d.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 1.073741824E11,
        "actualSize": 2.147483648E10,
        "deviceId": 0.0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| zoneUuid | String | 区域UUID | 2.2 |
| clusterUuid | String | 集群UUID | 2.2 |
| imageUuid | String | 镜像UUID | 2.2 |
| hostUuid | String | 物理机UUID | 2.2 |
| lastHostUuid | String |  | 2.2 |
| instanceOfferingUuid | String | 计算规格UUID | 2.2 |
| rootVolumeUuid | String | 根云盘UUID | 2.2 |
| platform | String |  | 2.2 |
| defaultL3NetworkUuid | String |  | 2.2 |
| type | String |  | 2.2 |
| hypervisorType | String |  | 2.2 |
| memorySize | Long |  | 2.2 |
| cpuNum | Integer |  | 2.2 |
| cpuSpeed | Long |  | 2.2 |
| allocatorStrategy | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| state | String |  | 2.2 |
| vmNics | List | 详情参考[vmNics] | 2.2 |
| allVolumes | List | 详情参考[allVolumes] | 2.2 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| l3NetworkUuid | String | 三层网络UUID | 2.2 |
| ip | String |  | 2.2 |
| mac | String |  | 2.2 |
| netmask | String |  | 2.2 |
| gateway | String |  | 2.2 |
| metaData | String |  | 2.2 |
| deviceId | Integer |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| primaryStorageUuid | String | 主存储UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| diskOfferingUuid | String | 云盘规格UUID | 2.2 |
| rootImageUuid | String |  | 2.2 |
| installPath | String |  | 2.2 |
| type | String |  | 2.2 |
| format | String |  | 2.2 |
| size | Long |  | 2.2 |
| actualSize | Long |  | 2.2 |
| deviceId | Integer |  | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| isShareable | Boolean |  | 2.2 |



##### SDK示例

 Java SDK

```
ChangeVmImageAction action = new ChangeVmImageAction();
action.vmInstanceUuid = "af9e42b52dc836dfac3ee89b08c47488";
action.imageUuid = "dbfd52c2f87c39cda8c8945fca8d6a5a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmImageAction.Result res = action.call();
```

 Python SDK

```
ChangeVmImageAction action = ChangeVmImageAction()
action.vmInstanceUuid = "af9e42b52dc836dfac3ee89b08c47488"
action.imageUuid = "dbfd52c2f87c39cda8c8945fca8d6a5a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmImageAction.Result res = action.call()
```

---

#### 获取候选镜像列表(GetImageCandidatesForVmToChange)



获取用于修改云主机根云盘的候选镜像列表。

##### API请求

 URLs

```
GET zstack/v1/vm-instances/{vmInstanceUuid}/image-candidates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/54f0aebe7a2536978aafb9eb7a95003e/image-candidates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid (可选) | String | url | 云主机UUID |  | 2.2 |
| systemTags (可选) | List | query | 系统标签 |  | 2.2 |
| userTags (可选) | List | query | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "2354990ad5ee343eba48bb07851a1423",
      "name": "TinyLinux",
      "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
      "mediaType": "RootVolumeTemplate",
      "platform": "Linux",
      "format": "qcow2",
      "backupStorageRefs": [
        {
          "id": 0.0,
          "imageUuid": "2354990ad5ee343eba48bb07851a1423",
          "backupStorageUuid": "a03a78dbdab23444bb109d67a5059389",
          "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
          "status": "Ready"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventories | List | 详情参考[inventories] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| size | Long |  | 2.2 |
| actualSize | Long |  | 2.2 |
| md5Sum | String |  | 2.2 |
| url | String |  | 2.2 |
| mediaType | String |  | 2.2 |
| guestOsType | String |  | 2.2 |
| type | String |  | 2.2 |
| platform | String |  | 2.2 |
| format | String |  | 2.2 |
| system | Boolean |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.2 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 2.2 |
| backupStorageUuid | String | 镜像存储UUID | 2.2 |
| installPath | String |  | 2.2 |
| exportUrl | String |  | 2.2 |
| exportMd5Sum | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |



##### SDK示例

 Java SDK

```
GetImageCandidatesForVmToChangeAction action = new GetImageCandidatesForVmToChangeAction();
action.vmInstanceUuid = "54f0aebe7a2536978aafb9eb7a95003e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetImageCandidatesForVmToChangeAction.Result res = action.call();
```

 Python SDK

```
GetImageCandidatesForVmToChangeAction action = GetImageCandidatesForVmToChangeAction()
action.vmInstanceUuid = "54f0aebe7a2536978aafb9eb7a95003e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetImageCandidatesForVmToChangeAction.Result res = action.call()
```

---

#### 更新云主机mac地址(UpdateVmNicMac)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/nics/{vmNicUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmNicMac": {
    "mac": "fa:4c:ee:9a:76:00"
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
-X PUT -d '{"updateVmNicMac":{"mac":"fa:4c:ee:9a:76:00"}}' \
http://localhost:8080/zstack/v1/vm-instances/nics/c6a34d551b36322ab83b87f7eab6bd41/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmNicUuid | String | url | 云主机网卡UUID |  | 2.3 |
| mac | String | body(包含在**updateVmNicMac**结构中) | mac地址 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
    "error": {
        "code": "SYS.1001",
        "description": "A message or a operation timeout",
        "details": "Create VM on KVM timeout after 300s"
    }
}
```



##### SDK示例

 Java SDK

```
UpdateVmNicMacAction action = new UpdateVmNicMacAction();
action.vmNicUuid = "c6a34d551b36322ab83b87f7eab6bd41";
action.mac = "fa:4c:ee:9a:76:00";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmNicMacAction.Result res = action.call();
```

 Python SDK

```
UpdateVmNicMacAction action = UpdateVmNicMacAction()
action.vmNicUuid = "c6a34d551b36322ab83b87f7eab6bd41"
action.mac = "fa:4c:ee:9a:76:00"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmNicMacAction.Result res = action.call()
```

---

#### 设置云主机防IP欺骗启用状态(SetVmCleanTraffic)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmCleanTraffic": {
    "enable": true
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
-X PUT -d '{"setVmCleanTraffic":{"enable":true}}' http://localhost:8080/zstack/v1/vm-instances/db90c27c8cc743e39ea7fa97a91617ba/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| enable | boolean | body(包含在**setVmCleanTraffic**结构中) | 是否启用云主机 clean-traffic | enable disable | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
SetVmCleanTrafficAction action = new SetVmCleanTrafficAction();
action.uuid = "1e62596491bb4a708e737f1ec626a08e";
action.enable = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmCleanTrafficAction.Result res = action.call();
```

 Python SDK

```
SetVmCleanTrafficAction action = SetVmCleanTrafficAction()
action.uuid = "69294c4a4e654535bbfd7fd92f4b52e9"
action.enable = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmCleanTrafficAction.Result res = action.call()
```

---

#### 为云主机创建CDROM(CreateVmCdRom)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/cdroms
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "cd-1",
    "vmInstanceUuid": "157321b6fb043d8a923aca66e6388086",
    "description": "this is a cd-rom"
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
-X POST -d '{"params":{"name":"cd-1","vmInstanceUuid":"157321b6fb043d8a923aca66e6388086","description":"this is a cd-rom"}}' http://localhost:8080/zstack/v1/vm-instances/cdroms
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.3.0 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 3.3.0 |
| isoUuid (可选) | String | body(包含在**params**结构中) | ISO镜像UUID |  | 3.3.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.3.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vmInstanceUuid": "47286977f0c530168fdbb1dfbfc167e8",
    "deviceId": 0.0,
    "isoUuid": "1712d13459ec3637be1020936e76e5a3",
    "name": "cd-1",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventory | VmCdRomInventory | 详情参考[inventory] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| vmInstanceUuid | String | 云主机UUID | 3.3.0 |
| deviceId | Integer | 光驱顺序号 | 3.3.0 |
| isoUuid | String | ISO镜像UUID | 3.3.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 3.3.0 |
| name | String | 资源名称 | 3.3.0 |
| description | String | 资源的详细描述 | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |



##### SDK示例

 Java SDK

```
CreateVmCdRomAction action = new CreateVmCdRomAction();
action.name = "cd-1";
action.vmInstanceUuid = "157321b6fb043d8a923aca66e6388086";
action.description = "this is a cd-rom";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmCdRomAction.Result res = action.call();
```

 Python SDK

```
CreateVmCdRomAction action = CreateVmCdRomAction()
action.name = "cd-1"
action.vmInstanceUuid = "157321b6fb043d8a923aca66e6388086"
action.description = "this is a cd-rom"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmCdRomAction.Result res = action.call()
```

---

#### 删除CDROM(DeleteVmCdRom)



##### API请求

 URLs

```
DELETE zstack/v1/vm-instances/cdroms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vm-instances/cdroms/90fc4f32b38732e2888c9cb5c4da5d8d
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.3.0 |
| deleteMode (可选) | String | body |  |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
DeleteVmCdRomAction action = new DeleteVmCdRomAction();
action.uuid = "90fc4f32b38732e2888c9cb5c4da5d8d";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVmCdRomAction.Result res = action.call();
```

 Python SDK

```
DeleteVmCdRomAction action = DeleteVmCdRomAction()
action.uuid = "90fc4f32b38732e2888c9cb5c4da5d8d"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVmCdRomAction.Result res = action.call()
```

---

#### 修改CDROM(UpdateVmCdRom)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/cdroms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmCdRom": {
    "name": "cd-2"
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
-X PUT -d '{"updateVmCdRom":{"name":"cd-2"}}' http://localhost:8080/zstack/v1/vm-instances/cdroms/407c8e5cee4b3430bbb9f0f4d4c8a422/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.3.0 |
| description (可选) | String | body(包含在**updateVmCdRom**结构中) | 资源的详细描述 |  | 3.3.0 |
| name (可选) | String | body(包含在**updateVmCdRom**结构中) | 资源名称 |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "257369b2f7e83256940adce2a6279187",
    "deviceId": 0.0,
    "isoUuid": "5ffbf20fb5e5342f91db1416740cf578",
    "name": "cd-1",
    "description": "desc",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventory | VmCdRomInventory | 详情参考[inventory] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| vmInstanceUuid | String | 云主机UUID | 3.3.0 |
| deviceId | Integer | 光驱顺序号 | 3.3.0 |
| isoUuid | String | ISO镜像UUID | 3.3.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 3.3.0 |
| name | String | 资源名称 | 3.3.0 |
| description | String | 资源的详细描述 | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |



##### SDK示例

 Java SDK

```
UpdateVmCdRomAction action = new UpdateVmCdRomAction();
action.uuid = "407c8e5cee4b3430bbb9f0f4d4c8a422";
action.name = "cd-2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmCdRomAction.Result res = action.call();
```

 Python SDK

```
UpdateVmCdRomAction action = UpdateVmCdRomAction()
action.uuid = "407c8e5cee4b3430bbb9f0f4d4c8a422"
action.name = "cd-2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmCdRomAction.Result res = action.call()
```

---

#### 设置云主机默认CDROM(SetVmInstanceDefaultCdRom)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/cdroms/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmInstanceDefaultCdRom": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"setVmInstanceDefaultCdRom":{}}' http://localhost:8080/zstack/v1/vm-instances/d447a8ba0a7739ebb9ea4328740cb6df/cdroms/65a54c4273433d74970e8bac4c406cd8/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.3.0 |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.3.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.3.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.3.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "vmInstanceUuid": "ec0fdf7fd86f39e89510b3102ad1c66e",
    "deviceId": 0.0,
    "isoUuid": "57adfd535d05345895007787f74d11a0",
    "name": "cd-1",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventory | VmCdRomInventory | 详情参考[inventory] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| vmInstanceUuid | String | 云主机UUID | 3.3.0 |
| deviceId | Integer | 光驱顺序号 | 3.3.0 |
| isoUuid | String | ISO镜像UUID | 3.3.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 3.3.0 |
| name | String | 资源名称 | 3.3.0 |
| description | String | 资源的详细描述 | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |



##### SDK示例

 Java SDK

```
SetVmInstanceDefaultCdRomAction action = new SetVmInstanceDefaultCdRomAction();
action.uuid = "65a54c4273433d74970e8bac4c406cd8";
action.vmInstanceUuid = "d447a8ba0a7739ebb9ea4328740cb6df";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmInstanceDefaultCdRomAction.Result res = action.call();
```

 Python SDK

```
SetVmInstanceDefaultCdRomAction action = SetVmInstanceDefaultCdRomAction()
action.uuid = "65a54c4273433d74970e8bac4c406cd8"
action.vmInstanceUuid = "d447a8ba0a7739ebb9ea4328740cb6df"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmInstanceDefaultCdRomAction.Result res = action.call()
```

---

#### 查询CDROM清单(QueryVmCdRom)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/cdroms
GET zstack/v1/vm-instances/cdroms/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/cdroms?q=name=cd-1
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/cdroms/cd0360ac748b3983897eb41913e97a6b
```



可查询字段

运行CLI命令行工具，输入QueryVmCdRom并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "68d090e26a0539f9b1b5d37229ee97de",
      "deviceId": 0.0,
      "isoUuid": "539acd1389523fb9ab243096d9842a05",
      "name": "cd-1",
      "description": "desc",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.3.0 |
| inventories | List | 详情参考[inventories] | 3.3.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.3.0 |
| description | String | 错误的概要描述 | 3.3.0 |
| details | String | 错误的详细信息 | 3.3.0 |
| elaboration | String | 保留字段，默认为null | 3.3.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.3.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.3.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.3.0 |
| vmInstanceUuid | String | 云主机UUID | 3.3.0 |
| deviceId | Integer | 光驱顺序号 | 3.3.0 |
| isoUuid | String | ISO镜像UUID | 3.3.0 |
| isoInstallPath | String | ISO镜像挂载路径 | 3.3.0 |
| name | String | 资源名称 | 3.3.0 |
| description | String | 资源的详细描述 | 3.3.0 |
| createDate | Timestamp | 创建时间 | 3.3.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.3.0 |



##### SDK示例

 Java SDK

```
QueryVmCdRomAction action = new QueryVmCdRomAction();
action.conditions = asList("name=cd-1");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVmCdRomAction.Result res = action.call();
```

 Python SDK

```
QueryVmCdRomAction action = QueryVmCdRomAction()
action.conditions = ["name=cd-1"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVmCdRomAction.Result res = action.call()
```

---

#### 更改云主机优先级级别(UpdateVmPriority)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmPriority": {
    "priority": "High"
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
-X PUT -d '{"updateVmPriority":{"priority":"High"}}' http://localhost:8080/zstack/v1/vm-instances/f308c452113832df898fb62ea87b2afc/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| priority | String | body(包含在**updateVmPriority**结构中) |  |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
UpdateVmPriorityAction action = new UpdateVmPriorityAction();
action.uuid = "f308c452113832df898fb62ea87b2afc";
action.priority = "High";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmPriorityAction.Result res = action.call();
```

 Python SDK

```
UpdateVmPriorityAction action = UpdateVmPriorityAction()
action.uuid = "f308c452113832df898fb62ea87b2afc"
action.priority = "High"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmPriorityAction.Result res = action.call()
```

---

#### 设置云主机显存(SetVmQxlMemory)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmQxlMemory": {
    "ram": 65536.0,
    "vram": 32768.0,
    "vgamem": 16384.0
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
-X PUT -d '{"setVmQxlMemory":{"ram":65536.0,"vram":32768.0,"vgamem":16384.0}}' http://localhost:8080/zstack/v1/vm-instances/cc590b2129c437a487311b0f9a8a0dbc/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 3.7.0 |
| ram (可选) | Integer | body(包含在**setVmQxlMemory**结构中) | 默认值为65536 |  | 3.7.0 |
| vram (可选) | Integer | body(包含在**setVmQxlMemory**结构中) | 默认值为32768 |  | 3.7.0 |
| vgamem (可选) | Integer | body(包含在**setVmQxlMemory**结构中) | 默认值为16384 |  | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |


  - 选项格式为：`qxlMemory::ram::vram::vgamem`
  - 例如：`qxlMemory::65536::32768::16384`
- 例如：`qxlMemory::65536::32768::16384`


> **注意:** 说明:



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
SetVmQxlMemoryAction action = new SetVmQxlMemoryAction();
action.uuid = "cc590b2129c437a487311b0f9a8a0dbc";
action.ram = 65536.0;
action.vram = 32768.0;
action.vgamem = 16384.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmQxlMemoryAction.Result res = action.call();
```

 Python SDK

```
SetVmQxlMemoryAction action = SetVmQxlMemoryAction()
action.uuid = "cc590b2129c437a487311b0f9a8a0dbc"
action.ram = 65536.0
action.vram = 32768.0
action.vgamem = 16384.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmQxlMemoryAction.Result res = action.call()
```

---

#### 设置云主机虚拟声卡类型(SetVmSoundType)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmSoundType": {
    "soundType": "ac97"
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
-X PUT -d '{"setVmSoundType":{"soundType":"ac97"}}' http://localhost:8080/zstack/v1/vm-instances/0ae1191601f430d88e1707716d24ff39/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 3.7.0 |
| soundType | String | body(包含在**setVmSoundType**结构中) | 虚拟声卡类型，默认为ich6 | ac97 ich6 | 3.7.0 |
| systemTags (可选) | List | body |  |  | 3.7.0 |
| userTags (可选) | List | body |  |  | 3.7.0 |


  - 选项格式为：`soundType::type`
  - 例如：`soundType::ac97`
  - 补充说明：Windows不同版本兼容性区别，Windows XP仅支持ac97驱动，ich6在Windows 10中免驱动，Windows 7可支持ac97或ich6驱动。
- 补充说明：Windows不同版本兼容性区别，Windows XP仅支持ac97驱动，ich6在Windows 10中免驱动，Windows 7可支持ac97或ich6驱动。


> **注意:** 说明:



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
SetVmSoundTypeAction action = new SetVmSoundTypeAction();
action.uuid = "0ae1191601f430d88e1707716d24ff39";
action.soundType = "ac97";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmSoundTypeAction.Result res = action.call();
```

 Python SDK

```
SetVmSoundTypeAction action = SetVmSoundTypeAction()
action.uuid = "0ae1191601f430d88e1707716d24ff39"
action.soundType = "ac97"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmSoundTypeAction.Result res = action.call()
```

---

#### 获取spice的CA证书(GetSpiceCertificates)



##### API请求

 URLs

```
GET zstack/v1/spice/certificates
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/spice/certificates
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query |  |  | 3.7.0 |
| userTags (可选) | List | query |  |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "certificateStr": "-----BEGIN CERTIFICATE-----\nMIIDVTCCAj2gAwIBAgIJALGiHgRCxwkwMA0GCSqGSIb3DQEBCwUAeEExCzAJBgNV\nBAYTAkNOMREwDwYDVQQHDAhTaGFuZ2hhaTEPMA0GA1UECgwGWlN0YWNrMQ4wDAYD\nVQQDDAVteSBDQTAeFw0xOTA5MjQwNjMxMzBaFw0yOTA5MjEwNjMxMzBaMEExCzAJ\nBgNVBAYTAkNOMREwDwYDVQQHDAhTaGFuZ2hhaTEPMA0GA1UECgwGWlN0YWNrMQ4w\nDAYDVQQDDAVteSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALQq\nHgcza7xK7zQ+zPNrzR3q1JJHkQ/OPF+DH5gheGlwfruWaGtAwVX9w0vfKDHCJ0BB\ndMQ4m1r2OX0yONVXNmlUnwq5VMdieqyO/1r41cHauqUTP6MkJ5/yD7ipfZP0r7sB\ngFAUIwaSdZk4hwnPou2ah4Uk/9yd0thBHKYCYZoVldLyPIe7aUHmkdkRY+MMdzqj\nGnspV1K7ux8xP3zG7CUG9Ns64rrjGNLRu81IJTYaJSigZ1ykZu1eYsUcGHB2QDcE\n4d9fw/8YaRVJOsBsABEzj9Qvi81i6VdTCGg2oFjBrSgcF7tNVQDufZLgXw3rlIsE\n+1+pwh5CgcviRcNTue0CAwEAAaNQME4wHQYDVR0OBBYEFMNx0BYaStgcpq1s30tW\nmAwjlqXaMB8GA1UdIwQYMBaAFMNx0BYaStgcpq1s30tWmAwjlqXaMAwGA1UdEwQF\nMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAAxDDzO8LDwI31sCr2K2t2P3n/hkxh0w\nnycRxKho9DFTnKSmMlusSd1AY/SjWO8+6dSi4wzmkJ/Zr0CeOBYhbDCFxG/OKO1K\nSfuR+gqZOAx8gB58Zk51KUxyYV3HKoRPftIh4nFO+mFUMXDuttuh12L7kbSQ6U3v\nL0uFg/59PnYe+aU+R/K1xXyZGViZJbgDqPDsCZYug0IRupu9j2Sces3XcX2TMCGR\nxPo2ZzBrOs3rJCK2nx16tHS5Zr5VP7zdn1YCS1/0HYUHRpi3HJPZAUR6dzDuK0IU\nPb0ufTldT6UOgJTof6TPMVl8dZATlJqMrjPtAOe3PtOKo8TPdjtQ15I\u003d\n-----END CERTIFICATE-----"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| certificateStr | String | spice CA证书 | 3.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |



##### SDK示例

 Java SDK

```
GetSpiceCertificatesAction action = new GetSpiceCertificatesAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetSpiceCertificatesAction.Result res = action.call();
```

 Python SDK

```
GetSpiceCertificatesAction action = GetSpiceCertificatesAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetSpiceCertificatesAction.Result res = action.call()
```

---

#### 为云主机加载增强工具镜像(AttachGuestToolsIsoToVm)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "attachGuestToolsIsoToVm": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"attachGuestToolsIsoToVm":{}}' http://localhost:8080/zstack/v1/vm-instances/f58d939e32073aa49acc4897bf81ae45/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.7.0 |


  - 选项格式为：`GuestTools::TOOLS_VERSION`。其中TOOLS_VERSION初值为1.0.0，未来随着工具版本的提升，这个值会随之变化。
  - 例如：`GuestTools::1.0.0`
  - 意义：记录物理机中GuestTools ISO版本，与管理节点/opt/zstack-dvd目录下的ISO版本对比，决定是否需要升级。
- 意义：记录物理机中GuestTools ISO版本，与管理节点/opt/zstack-dvd目录下的ISO版本对比，决定是否需要升级。


> **注意:** 说明:



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
AttachGuestToolsIsoToVmAction action = new AttachGuestToolsIsoToVmAction();
action.uuid = "f58d939e32073aa49acc4897bf81ae45";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachGuestToolsIsoToVmAction.Result res = action.call();
```

 Python SDK

```
AttachGuestToolsIsoToVmAction action = AttachGuestToolsIsoToVmAction()
action.uuid = "f58d939e32073aa49acc4897bf81ae45"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachGuestToolsIsoToVmAction.Result res = action.call()
```

---

#### 获取云主机可用的最新增强工具(GetLatestGuestToolsForVm)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/latest-guest-tools
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/f7be56d67fb731ac9e201c69428c6a69/latest-guest-tools
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "281ed8f30eff42c4a8d788384b782977",
    "managementNodeUuid": "9fbb4361b1e2466f933558d45746bb59",
    "architecture": "x86_64",
    "hypervisorType": "kvm",
    "version": "1.0.0",
    "createDate": "Oct 9, 2019 7:37:57 PM",
    "lastOpDate": "Oct 9, 2019 7:37:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 3.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventory | GuestToolsInventory | 详情参考[inventory] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.0 |
| name | String | 资源名称 | 3.7.0 |
| description | String | 资源的详细描述 | 3.7.0 |
| managementNodeUuid | String | 管理节点UUID | 3.7.0 |
| architecture | String | 架构 | 3.7.0 |
| hypervisorType | String | 虚拟化类型 | 3.7.0 |
| version | String | 版本 | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



##### SDK示例

 Java SDK

```
GetLatestGuestToolsForVmAction action = new GetLatestGuestToolsForVmAction();
action.uuid = "f7be56d67fb731ac9e201c69428c6a69";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetLatestGuestToolsForVmAction.Result res = action.call();
```

 Python SDK

```
GetLatestGuestToolsForVmAction action = GetLatestGuestToolsForVmAction()
action.uuid = "f7be56d67fb731ac9e201c69428c6a69"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetLatestGuestToolsForVmAction.Result res = action.call()
```

---

#### 获取云主机内部增强工具的信息(GetVmGuestToolsInfo)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/guest-tools-infos
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"\
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/5ecc83bf3f5033b9b78b4f9406c01f8f/guest-tools-infos
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.7.0 |


  - 选项格式为：`GuestTools::TOOLS_VERSION`。其中TOOLS_VERSION初值为1.0.0，未来随着工具版本的提升，这个值会随之变化。
  - 例如：`GuestTools::1.0.0`
  - 补充说明：该API用于获取云主机内部安装的GuestTools版本信息和当前运行状态，如果有返回且云主机当前没有GuestTools标签，则创建该标签； 如果有返回且与云主机当前GuestTools标签值不同，则更新该标签。
- 补充说明：该API用于获取云主机内部安装的GuestTools版本信息和当前运行状态，如果有返回且云主机当前没有GuestTools标签，则创建该标签； 如果有返回且与云主机当前GuestTools标签值不同，则更新该标签。


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "version": "1.0.0",
  "status": "Running",
  "features": {
    "pvpanic": "enable"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| version | String | 增强工具版本 | 3.7.0 |
| status | String | 增强工具运行状态 | 3.7.0 |
| features | Map | 增强工具支持的功能, 以及功能模块的相关状态 | 4.2.0 |
| success | boolean | 成功 | 3.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |



##### SDK示例

 Java SDK

```
GetVmGuestToolsInfoAction action = new GetVmGuestToolsInfoAction();
action.uuid = "5ecc83bf3f5033b9b78b4f9406c01f8f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmGuestToolsInfoAction.Result res = action.call();
```

 Python SDK

```
GetVmGuestToolsInfoAction action = GetVmGuestToolsInfoAction()
action.uuid = "5ecc83bf3f5033b9b78b4f9406c01f8f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmGuestToolsInfoAction.Result res = action.call()
```

---

#### 获取云主机第一启动项(GetVmInstanceFirstBootDevice)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/first-boot-device
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/50d8c8ed7d4737fd99a2e323cefeac81/first-boot-device
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.7.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.7.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.7.0 |



##### API返回

 返回示例

```
{
  "firstBootDevice": "CdRom"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| firstBootDevice | String | 云主机第一启动项 | 3.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.0 |
| description | String | 错误的概要描述 | 3.7.0 |
| details | String | 错误的详细信息 | 3.7.0 |
| elaboration | String | 保留字段，默认为null | 3.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.0 |



##### SDK示例

 Java SDK

```
GetVmInstanceFirstBootDeviceAction action = new GetVmInstanceFirstBootDeviceAction();
action.uuid = "50d8c8ed7d4737fd99a2e323cefeac81";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmInstanceFirstBootDeviceAction.Result res = action.call();
```

 Python SDK

```
GetVmInstanceFirstBootDeviceAction action = GetVmInstanceFirstBootDeviceAction()
action.uuid = "50d8c8ed7d4737fd99a2e323cefeac81"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmInstanceFirstBootDeviceAction.Result res = action.call()
```

---

#### 设置网卡型号(UpdateVmNicDriver)



##### API请求

 URLs

```
PUT zstack/vm-instances/{vmInstanceUuid}/actions?vmNicUuid={vmNicUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmNicDriver": {
    "vmNicUuid": "1954794b830e32edbcf17f36344bbd14",
    "driverType": "e1000"
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
-X PUT -d '{"updateVmNicDriver":{"vmNicUuid":"1954794b830e32edbcf17f36344bbd14","driverType":"e1000"}}' http://localhost:8080/zstack/v1/vm-instances/ca775a57e8d73a3ca85f490b53647b80/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 3.9.0 |
| vmNicUuid | String | url | 云主机网卡UUID |  | 3.9.0 |
| driverType | String | body(包含在**params**结构中) | 云主机网卡型号类型 | virtio e1000 rtl8139 | 3.9.0 |
| systemTags (可选) | List | body |  |  | 3.9.0 |
| userTags (可选) | List | body |  |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b6af955c36b23be693fca2db0df03737",
    "vmInstanceUuid": "ed3f3ea119883726b1a97ec3cc4b1583",
    "usedIpUuid": "78b119bae906373d825fa7e68faf6a0b",
    "l3NetworkUuid": "307365f47f933bf09ff951cb67b52c5b",
    "ip": "192.168.1.10",
    "mac": "00:0c:29:bd:99:fc",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "driverType": "e1000",
    "deviceId": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | VmNicInventory | 详情参考[inventory] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| vmInstanceUuid | String | 云主机UUID | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ip | String |  | 3.9.0 |
| mac | String |  | 3.9.0 |
| netmask | String |  | 3.9.0 |
| gateway | String |  | 3.9.0 |
| metaData | String |  | 3.9.0 |
| ipVersion | Integer | ip协议号 | 3.9.0 |
| deviceId | Integer |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |
| usedIps | List | 详情参考[usedIps] | 3.9.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| ipRangeUuid | String | IP段UUID | 3.9.0 |
| l3NetworkUuid | String | 三层网络UUID | 3.9.0 |
| ipVersion | Integer | IP协议号 | 3.9.0 |
| ip | String | IP地址 | 3.9.0 |
| netmask | String | 网络掩码 | 3.9.0 |
| gateway | String | 网关地址 | 3.9.0 |
| usedFor | String |  | 3.9.0 |
| ipInLong | long |  | 3.9.0 |
| vmNicUuid | String | 云主机网卡UUID | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
UpdateVmNicDriverAction action = new UpdateVmNicDriverAction();
action.vmInstanceUuid = "ca775a57e8d73a3ca85f490b53647b80";
action.vmNicUuid = "1954794b830e32edbcf17f36344bbd14";
action.driverType = "e1000";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmNicDriverAction.Result res = action.call();
```

 Python SDK

```
UpdateVmNicDriverAction action = UpdateVmNicDriverAction()
action.vmInstanceUuid = "ca775a57e8d73a3ca85f490b53647b80"
action.vmNicUuid = "1954794b830e32edbcf17f36344bbd14"
action.driverType = "e1000"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmNicDriverAction.Result res = action.call()
```

---

#### 获取云主机设备地址(GetVmDeviceAddress)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/devices
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/devices?uuid=a761ac08ca483af4a81d9ed3d9930ef4&resourceTypes=VolumeVO
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | query | 云主机UUID |  | 3.10.0 |
| resourceTypes | List | query | 资源类型 | VolumeVO | 3.10.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.10.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.10.0 |



##### API返回

 返回示例

```
{
  "addresses": {
    "VolumeVO": [
      {
        "address": "0000:01:00:0",
        "addressType": "pci",
        "deviceType": "disk",
        "resourceType": "VolumeVO"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| addresses | Map | 设备地址详情 | 3.10.0 |
| success | boolean |  | 3.10.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.10.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.10.0 |
| description | String | 错误的概要描述 | 3.10.0 |
| details | String | 错误的详细信息 | 3.10.0 |
| elaboration | String | 保留字段，默认为null | 3.10.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.10.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.10.0 |



##### SDK示例

 Java SDK

```
GetVmDeviceAddressAction action = new GetVmDeviceAddressAction();
action.uuid = "a761ac08ca483af4a81d9ed3d9930ef4";
action.resourceTypes = asList("VolumeVO");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmDeviceAddressAction.Result res = action.call();
```

 Python SDK

```
GetVmDeviceAddressAction action = GetVmDeviceAddressAction()
action.uuid = "a761ac08ca483af4a81d9ed3d9930ef4"
action.resourceTypes = [VolumeVO]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmDeviceAddressAction.Result res = action.call()
```

---

#### 批量获取云主机能力(GetVmsCapabilities)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/capabilities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmUuids": [
      "86db798b3a0530b187380da6c9c58190"
    ]
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
-X POST -d '{"params":{"vmUuids":["86db798b3a0530b187380da6c9c58190"]}}' http://localhost:8080/zstack/v1/vm-instances/capabilities
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuids | String | body(包含在**params**结构中) | 待查询的云主机uuid集合 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "vmsCaps": {
    "68e8ed0735333faab95816b3e8596cea": {
      "supportLiveMigration": true,
      "supportVolumeMigration": true,
      "supportReimage": true,
      "supportMemorySnapshot": false
    }
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| vmsCaps | Map | 详情参考[vmsCaps] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #vmsCaps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| supportLiveMigration | boolean |  | 4.0.0 |
| supportVolumeMigration | boolean |  | 4.0.0 |
| supportReimage | boolean |  | 4.0.0 |
| supportMemorySnapshot | boolean |  | 4.0.0 |



##### SDK示例

 Java SDK

```
GetVmsCapabilitiesAction action = new GetVmsCapabilitiesAction();
action.vmUuids = asList("86db798b3a0530b187380da6c9c58190");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmsCapabilitiesAction.Result res = action.call();
```

 Python SDK

```
GetVmsCapabilitiesAction action = GetVmsCapabilitiesAction()
action.vmUuids = [86db798b3a0530b187380da6c9c58190]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmsCapabilitiesAction.Result res = action.call()
```

---

#### 设置云主机vNUMA（SetVmNuma）



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmNuma": {
    "enable": true
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
-X PUT -d '{"setVmNuma":{"enable":true}}' http://localhost:8080/zstack/v1/vm-instances/f523cb5736b630acb643dda6d31be5a0/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | vm的UUID，唯一标示该资源 |  | 4.3.12 |
| enable | boolean | body(包含在**setVmNuma**结构中) | 云主机是否开启vm Numa功能 |  | 4.3.12 |
| systemTags (可选) | List | body |  |  | 4.3.12 |
| userTags (可选) | List | body |  |  | 4.3.12 |


  - 选项格式为：`affinityGroupUuid::UUID`
  - 例如：`affinityGroupUuid::5fd71606d5af451d981413f35367a8d6`
- 例如：`affinityGroupUuid::5fd71606d5af451d981413f35367a8d6`


> **注意:** 说明:



##### API返回

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



##### SDK示例

 Java SDK

```
SetVmNumaAction action = new SetVmNumaAction();
action.uuid = "f523cb5736b630acb643dda6d31be5a0";
action.enable = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmNumaAction.Result res = action.call();
```

 Python SDK

```
SetVmNumaAction action = SetVmNumaAction()
action.uuid = "f523cb5736b630acb643dda6d31be5a0"
action.enable = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmNumaAction.Result res = action.call()
```

---

#### 获取VM Numa开关状态（GetVmNuma）



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/vnuma
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/1dd7af3a42403a1d9b3734f5ed573103/vnuma
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | vm的UUID，唯一标示该资源 |  | 4.3.12 |
| systemTags (可选) | List | body |  |  | 4.3.12 |
| userTags (可选) | List | body |  |  | 4.3.12 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
  "enable": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| enable | boolean | vm Numa 开关是否开启 | 4.3.12 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.12 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.12 |
| description | String | 错误的概要描述 | 4.3.12 |
| details | String | 错误的详细信息 | 4.3.12 |
| elaboration | String | 保留字段，默认为null | 4.3.12 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.12 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.12 |



##### SDK示例

 Java SDK

```
GetVmNumaAction action = new GetVmNumaAction();
action.uuid = "1dd7af3a42403a1d9b3734f5ed573103";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmNumaAction.Result res = action.call();
```

 Python SDK

```
GetVmNumaAction action = GetVmNumaAction()
action.uuid = "1dd7af3a42403a1d9b3734f5ed573103"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmNumaAction.Result res = action.call()
```

---

#### 查询云主机的vNUMA拓扑信息（GetVmvNUMATopology）



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/vnuma-topology
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/21529457e42c30f0a9b2a137915a0b28/vnuma-topology
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机UUID |  | 4.3.12 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
        "hostUuid": "7fd86bbe6ca94a8d810aa1d33e29932c",
        "topology": [
            {
                "CPUsID": ["0", "1", "2", "3"],
                "distance": ["10", "21"],
                "nodeID": 0,
                "memSize": 1024,
                "phyNodeID": 0
            },
            {
                "CPUsID": ["4", "5", "6", "7"],
                "distance": ["21", "10"],
                "nodeID": 1,
                "memSize": 2048,
                "phyNodeID": 1
            }
        ],
        "name": "vm0",
        "uuid": "71b30db8bca34e9191ed09bff2990e80"
    }
```



| 名字 | 类型 | 描述 | 起始版 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.12 |
| name | String | 云主机名称 | 4.3.12 |
| uuid | String | 云主机的UUID，唯一标示该资源 | 4.3.12 |
| hostUuid | String | 云主机所在物理机的UUID，唯一标示该资源 | 4.3.12 |
| topology | array[json] | vNUMA拓扑信息，详情见[topology] | 4.3.12 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.12 |
| description | String | 错误的概要描述 | 4.3.12 |
| details | String | 错误的详细信息 | 4.3.12 |
| elaboration | String | 保留字段，默认为null | 4.3.12 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.12 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.12 |

 #topology

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| nodeID | int | vNUMA node ID | 4.3.12 |
| CPUsID | array[string] | vNUMA node包含的vCPUs id列表 | 4.3.12 |
| phyNodeID | int | 物理机NUMA node id | 4.3.12 |
| distance | array[string] | 云主机vNUMA node的距离信息 | 4.3.12 |
| memSize | long | 云主机vNUMA node的内存大小(单位为B) | 4.3.12 |



##### SDK示例

 Java SDK

```
GetVmvNUMATopologyAction action = new GetVmvNUMATopologyAction()
action.uuid ="ff6d905e75d63e18ab0a9fc2ac14951c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmvNUMATopologyAction.Result res = action.call()
```

 Python SDK

```
GetVmvNUMATopologyAction action = new GetVmvNUMATopologyAction()
action.uuid ="ff6d905e75d63e18ab0a9fc2ac14951c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmvNUMATopologyAction.Result res = action.call()
```

---

#### 设置云主机Emulator Pinning功能（SetVmEmulatorPinning）



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVmEmulatorPinning": {
    "emulatorPinning": "1-4"
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
-X PUT -d '{"setVmEmulatorPinning":{"emulatorPinning":"1-4"}}' http://localhost:8080/zstack/v1/vm-instances/f523cb5736b630acb643dda6d31be5a0/actions
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.12 |
| emulatorPinning | String | body(包含在**setVmEmulatorPinning**结构中) | 云主机Emulator 绑定在宿主机的某些cpu上,格式为(\^?(\d+)(-\d+)?,)+(例如0-1,16) |  | 4.3.12 |
| systemTags (可选) | List | body |  |  | 4.3.12 |
| userTags (可选) | List | body |  |  | 4.3.12 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetVmEmulatorPinningAction action = new SetVmEmulatorPinningAction();
action.uuid = "f523cb5736b630acb643dda6d31be5a0";
action.enable = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVmEmulatorPinningAction.Result res = action.call();
```

 Python SDK

```
SetVmEmulatorPinningAction action = SetVmEmulatorPinningAction()
action.uuid = "f523cb5736b630acb643dda6d31be5a0"
action.enable = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVmEmulatorPinningAction.Result res = action.call()
```

---

#### 获取VM Emulator Pin在那些物理机的cpu上（GetVmEmulatorPinning）



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/emulator-pinning
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/1dd7af3a42403a1d9b3734f5ed573103/emulator-pinning
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.12 |
| systemTags (可选) | List | body |  |  | 4.3.12 |
| userTags (可选) | List | body |  |  | 4.3.12 |



##### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{"emulatorPinning":"12,13"}
```



| 名字 | 类型 | 描述 | 起始版 |
| --- | --- | --- | --- |
| emulatorPinning | String | vm Emulator Pinning的物理机cpu编号 | 4.3.12 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.3.12 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.3.12 |
| description | String | 错误的概要描述 | 4.3.12 |
| details | String | 错误的详细信息 | 4.3.12 |
| elaboration | String | 保留字段，默认为null | 4.3.12 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.3.12 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.3.12 |



##### SDK示例

 Java SDK

```
GetVmEmulatorPinningAction action = new GetVmEmulatorPinningAction();
action.uuid = "1dd7af3a42403a1d9b3734f5ed573103";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmEmulatorPinningAction.Result res = action.call();
```

 Python SDK

```
GetVmEmulatorPinningAction action = GetVmEmulatorPinningAction()
action.uuid = "1dd7af3a42403a1d9b3734f5ed573103"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmEmulatorPinningAction.Result res = action.call()
```

---

#### 查询虚拟机调度历史（QueryVmSchedHistory）



##### API请求

 URLs

```
GET zstack//v1/vm/sched-history
```


```
GET zstack//v1/vm/sched-history/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm/sched-history?q=vmInstanceUuid=15b5b8ab631d300592bf83d66331f914
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm/sched-history/{vmInstanceUuid}?q=vmInstanceUuid=4240a319fabf3728960d1d7639f3fc0f
```



可查询字段

运行CLI命令行工具，输入QueryVmSchedHistory并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回



```
{
  "inventories": [
    {
      "id": 0.0,
      "vmInstanceUuid": "ec8fe40b4b0a38bc8f195bfc8bfc72e9",
      "accountUuid": "b07dda064256343c894cecfa5d50b42c",
      "schedType": "VMHA",
      "success": true,
      "lastHostUuid": "d4d26f65cfff3fafb98d3da284290455",
      "destHostUuid": "bc001bb4d762395db4b2ed97c6d6dae3"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| inventories | List | 详情参考[inventories] | 4.4.24 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceUuid | String | 云主机UUID | 4.4.24 |
| accountUuid | String | 账户UUID | 4.4.24 |
| schedType | String |  | 4.4.24 |
| success | Boolean |  | 4.4.24 |
| lastHostUuid | String |  | 4.4.24 |
| destHostUuid | String |  | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.24 |
| description | String | 错误的概要描述 | 4.4.24 |
| details | String | 错误的详细信息 | 4.4.24 |
| elaboration | String | 保留字段，默认为null | 4.4.24 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.24 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.24 |



##### SDK示例

 Java SDK

```
QueryVmSchedHistoryAction action = new QueryVmSchedHistoryAction();
action.conditions = asList("vmInstanceUuid=b35d14e4af4c3f4c8f745e73df083020");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVmSchedHistoryAction.Result res = action.call();
```

 Python SDK

```
QueryVmSchedHistoryAction action = QueryVmSchedHistoryAction()
action.conditions = ["vmInstanceUuid=f9bd0652c3843cb285c2e7b8c9f4561b"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVmSchedHistoryAction.Result res = action.call()
```

---

#### 扁平合并云主机(FlattenVmInstance)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "flattenVmInstance": {
    "full": true,
    "dryRun": false
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
-X PUT -d '{"flattenVmInstance":{"full":true,"dryRun":false}}' http://localhost:8080/zstack/v1/vm-instances/cb728238f38a3adcadac91425f9534b3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| full (可选) | boolean | body(包含在**flattenVmInstance**结构中) | 扁平合并云主机上所有云盘 |  | 4.7.0 |
| dryRun (可选) | boolean | body(包含在**flattenVmInstance**结构中) | 试运行，可用于预测数据用量 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ce09028b684c3eb78219f5e20bddc3d5",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "195b75808f5e334da0c35051b798605c",
    "clusterUuid": "9b24facbfe7e38d4a7959e15cb49932e",
    "imageUuid": "8cc2d322e48031a685dd7cf69bf69614",
    "hostUuid": "01dd8eacdf0b3b809f420fad019b4359",
    "lastHostUuid": "3462e6ec5e333d5f958c029bc9678610",
    "instanceOfferingUuid": "9b45c2c9d9323793a012be186db3dd5b",
    "rootVolumeUuid": "7197e64d225232a8947765e00de9b58c",
    "platform": "Linux",
    "defaultL3NetworkUuid": "9f1d4713936036fa905da008dc91311f",
    "type": "UserVm",
    "hypervisorType": "KVM",
    "memorySize": 8589934592,
    "cpuNum": 1,
    "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "state": "Running",
    "vmNics": [
      {
        "uuid": "12dadcafdbe2331fa1b5048a86f262c9",
        "vmInstanceUuid": "ce09028b684c3eb78219f5e20bddc3d5",
        "usedIpUuid": "592c4dc8c1c83a5185488e3aded371b4",
        "l3NetworkUuid": "9f1d4713936036fa905da008dc91311f",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
        "hypervisorType": "KVM",
        "netmask": "255.255.255.0",
        "gateway": "192.168.1.1",
        "deviceId": 0,
        "state": "enable",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ],
    "allVolumes": [
      {
        "uuid": "7197e64d225232a8947765e00de9b58c",
        "name": "Root-Volume-For-VM-ce09028b684c3eb78219f5e20bddc3d5",
        "primaryStorageUuid": "a8c0be2045ef3d5eacd48a201bccf5b8",
        "vmInstanceUuid": "ce09028b684c3eb78219f5e20bddc3d5",
        "diskOfferingUuid": "a6eb081851d531b29f771c672c194dbd",
        "rootImageUuid": "8cc2d322e48031a685dd7cf69bf69614",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-7197e64d225232a8947765e00de9b58c/7197e64d225232a8947765e00de9b58c.qcow2",
        "type": "Root",
        "format": "qcow2",
        "size": 107374182400,
        "actualSize": 21474836480,
        "deviceId": 0,
        "state": "Enabled",
        "status": "Ready",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| name | String | 资源名称 | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| zoneUuid | String | 区域UUID | 4.7.0 |
| clusterUuid | String | 集群UUID | 4.7.0 |
| imageUuid | String | 镜像UUID | 4.7.0 |
| hostUuid | String | 物理机UUID | 4.7.0 |
| lastHostUuid | String |  | 4.7.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.7.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.7.0 |
| platform | String |  | 4.7.0 |
| architecture | String |  | 4.7.0 |
| defaultL3NetworkUuid | String |  | 4.7.0 |
| type | String |  | 4.7.0 |
| hypervisorType | String |  | 4.7.0 |
| memorySize | Long |  | 4.7.0 |
| cpuNum | Integer |  | 4.7.0 |
| cpuSpeed | Long |  | 4.7.0 |
| allocatorStrategy | String |  | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| state | String |  | 4.7.0 |
| guestOsType | String |  | 4.7.0 |
| vmNics | List | 详情参考[vmNics] | 4.7.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.7.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.7.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| vmInstanceUuid | String | 云主机UUID | 4.7.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.0 |
| ip | String |  | 4.7.0 |
| mac | String |  | 4.7.0 |
| hypervisorType | String |  | 4.7.0 |
| netmask | String |  | 4.7.0 |
| gateway | String |  | 4.7.0 |
| metaData | String |  | 4.7.0 |
| ipVersion | Integer |  | 4.7.0 |
| driverType | String |  | 4.7.0 |
| internalName | String |  | 4.7.0 |
| deviceId | Integer |  | 4.7.0 |
| type | String |  | 4.7.0 |
| state | String | 网卡状态 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| usedIps | List | 详情参考[usedIps] | 4.7.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| ipRangeUuid | String | IP段UUID | 4.7.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.7.0 |
| ipVersion | Integer |  | 4.7.0 |
| ip | String |  | 4.7.0 |
| netmask | String |  | 4.7.0 |
| gateway | String |  | 4.7.0 |
| usedFor | String |  | 4.7.0 |
| ipInLong | long |  | 4.7.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| name | String | 资源名称 | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| primaryStorageUuid | String | 主存储UUID | 4.7.0 |
| vmInstanceUuid | String | 云主机UUID | 4.7.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.0 |
| rootImageUuid | String |  | 4.7.0 |
| installPath | String |  | 4.7.0 |
| type | String |  | 4.7.0 |
| format | String |  | 4.7.0 |
| size | Long |  | 4.7.0 |
| actualSize | Long |  | 4.7.0 |
| deviceId | Integer |  | 4.7.0 |
| state | String |  | 4.7.0 |
| status | String |  | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| isShareable | Boolean |  | 4.7.0 |
| volumeQos | String |  | 4.7.0 |
| lastDetachDate | Timestamp |  | 4.7.0 |
| lastVmInstanceUuid | String |  | 4.7.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| vmInstanceUuid | String | 云主机UUID | 4.7.0 |
| deviceId | Integer |  | 4.7.0 |
| isoUuid | String |  | 4.7.0 |
| isoInstallPath | String |  | 4.7.0 |
| name | String | 资源名称 | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
FlattenVmInstanceAction action = new FlattenVmInstanceAction();
action.uuid = "cb728238f38a3adcadac91425f9534b3";
action.full = true;
action.dryRun = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
FlattenVmInstanceAction.Result res = action.call();
```

 Python SDK

```
FlattenVmInstanceAction action = FlattenVmInstanceAction()
action.uuid = "cb728238f38a3adcadac91425f9534b3"
action.full = true
action.dryRun = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
FlattenVmInstanceAction.Result res = action.call()
```

---

#### 云主机执行命令(ExecuteGuestVmCommand)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/commands/exec
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmInstanceUuid": "af89f31332ac3457874450311affadc2",
    "platform": "Linux",
    "command": "echo helloworld",
    "commandTimeout": 20
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
-X POST -d '{"params":{"vmInstanceUuid":"af89f31332ac3457874450311affadc2","platform":"Linux","command":"echo helloworld","commandTimeout":20}}' http://localhost:8080/zstack/v1/vm-instances/commands/exec
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 5.2.0 |
| platform | String | body(包含在**params**结构中) | 平台 | Windows Linux | 5.2.0 |
| command | String | body(包含在**params**结构中) | 命令 |  | 5.2.0 |
| commandTimeout (可选) | Integer | body(包含在**params**结构中) | 超时时间 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

 返回示例

```
{
  "stream": "standardStream: hello world, errorStream: 1/0 is not a goodScript",
  "vmInstance": {
    "uuid": "fc022ba201c135d8809c5e02bf6bf156",
    "name": "vm_1"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.2.0 |
| stream | String | 流 | 5.2.0 |
| vmInstance | VmInstanceInventory | 详情参考[vmInstance] | 5.2.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.2.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| zoneUuid | String | 区域UUID | 5.2.0 |
| clusterUuid | String | 集群UUID | 5.2.0 |
| imageUuid | String | 镜像UUID | 5.2.0 |
| hostUuid | String | 物理机UUID | 5.2.0 |
| lastHostUuid | String |  | 5.2.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.2.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.2.0 |
| platform | String |  | 5.2.0 |
| architecture | String |  | 5.2.0 |
| defaultL3NetworkUuid | String |  | 5.2.0 |
| type | String |  | 5.2.0 |
| hypervisorType | String |  | 5.2.0 |
| memorySize | Long |  | 5.2.0 |
| cpuNum | Integer |  | 5.2.0 |
| cpuSpeed | Long |  | 5.2.0 |
| allocatorStrategy | String |  | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |
| state | String |  | 5.2.0 |
| guestOsType | String |  | 5.2.0 |
| vmNics | List | 详情参考[vmNics] | 5.2.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.2.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 5.2.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| vmInstanceUuid | String | 云主机UUID | 5.2.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.2.0 |
| ip | String |  | 5.2.0 |
| mac | String |  | 5.2.0 |
| hypervisorType | String |  | 5.2.0 |
| netmask | String |  | 5.2.0 |
| gateway | String |  | 5.2.0 |
| metaData | String |  | 5.2.0 |
| ipVersion | Integer |  | 5.2.0 |
| driverType | String |  | 5.2.0 |
| internalName | String |  | 5.2.0 |
| deviceId | Integer |  | 5.2.0 |
| type | String |  | 5.2.0 |
| state | String | 网卡状态 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |
| usedIps | List | 详情参考[usedIps] | 5.2.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| ipRangeUuid | String | IP段UUID | 5.2.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.2.0 |
| ipVersion | Integer |  | 5.2.0 |
| ip | String |  | 5.2.0 |
| netmask | String |  | 5.2.0 |
| gateway | String |  | 5.2.0 |
| usedFor | String |  | 5.2.0 |
| ipInLong | long |  | 5.2.0 |
| vmNicUuid | String | 云主机网卡UUID | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| primaryStorageUuid | String | 主存储UUID | 5.2.0 |
| vmInstanceUuid | String | 云主机UUID | 5.2.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.2.0 |
| rootImageUuid | String |  | 5.2.0 |
| installPath | String |  | 5.2.0 |
| type | String |  | 5.2.0 |
| format | String |  | 5.2.0 |
| size | Long |  | 5.2.0 |
| actualSize | Long |  | 5.2.0 |
| deviceId | Integer |  | 5.2.0 |
| state | String |  | 5.2.0 |
| status | String |  | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |
| isShareable | Boolean |  | 5.2.0 |
| volumeQos | String |  | 5.2.0 |
| lastDetachDate | Timestamp |  | 5.2.0 |
| lastVmInstanceUuid | String |  | 5.2.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.2.0 |
| vmInstanceUuid | String | 云主机UUID | 5.2.0 |
| deviceId | Integer |  | 5.2.0 |
| isoUuid | String |  | 5.2.0 |
| isoInstallPath | String |  | 5.2.0 |
| name | String | 资源名称 | 5.2.0 |
| description | String | 资源的详细描述 | 5.2.0 |
| createDate | Timestamp | 创建时间 | 5.2.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.2.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.2.0 |
| description | String | 错误的概要描述 | 5.2.0 |
| details | String | 错误的详细信息 | 5.2.0 |
| elaboration | String | 保留字段，默认为null | 5.2.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.2.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.2.0 |



##### SDK示例

 Java SDK

```
ExecuteGuestVmCommandAction action = new ExecuteGuestVmCommandAction();
action.vmInstanceUuid = "af89f31332ac3457874450311affadc2";
action.platform = "Linux";
action.command = "echo helloworld";
action.commandTimeout = 20;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExecuteGuestVmCommandAction.Result res = action.call();
```

 Python SDK

```
ExecuteGuestVmCommandAction action = ExecuteGuestVmCommandAction()
action.vmInstanceUuid = "af89f31332ac3457874450311affadc2"
action.platform = "Linux"
action.command = "echo helloworld"
action.commandTimeout = 20
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExecuteGuestVmCommandAction.Result res = action.call()
```

---

#### 发送文件到云主机(UploadFileToVm)



##### API请求

 URLs

```
POST zstack/v1/upload-file
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmInstanceUuids": [
      "358310f6b6b23b9f9bdcf8d34b03719f"
    ],
    "fileContent": "ZWNobyBoZWxsb3dvcmxkCg\u003d\u003d",
    "remotePath": "/var/lib/zstack/uploadfile"
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
-X POST -d '{"params":{"vmInstanceUuids":["358310f6b6b23b9f9bdcf8d34b03719f"],"fileContent":"ZWNobyBoZWxsb3dvcmxkCg==","remotePath":"/var/lib/zstack/uploadfile"}}' http://localhost:8080/zstack/v1/upload-file
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuids | List | body(包含在**params**结构中) | 要上传的云主机列表 |  | 5.2.0 |
| fileContent | String | body(包含在**params**结构中) | 要上传的文件内容,使用Base64加密 |  | 5.2.0 |
| remotePath | String | body(包含在**params**结构中) | 要上传的绝对路径,包含有文件名 |  | 5.2.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.2.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.2.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
UploadFileToVmAction action = new UploadFileToVmAction();
action.vmInstanceUuids = asList("358310f6b6b23b9f9bdcf8d34b03719f");
action.fileContent = "ZWNobyBoZWxsb3dvcmxkCg==";
action.remotePath = "/var/lib/zstack/uploadfile";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UploadFileToVmAction.Result res = action.call();
```

 Python SDK

```
UploadFileToVmAction action = UploadFileToVmAction()
action.vmInstanceUuids = [358310f6b6b23b9f9bdcf8d34b03719f]
action.fileContent = "ZWNobyBoZWxsb3dvcmxkCg=="
action.remotePath = "/var/lib/zstack/uploadfile"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UploadFileToVmAction.Result res = action.call()
```

---

### 云盘相关接口

---

#### 创建云盘(CreateDataVolume)



##### API请求

 URLs

```
POST zstack/v1/volumes/data
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "test-volume",
    "description": "test-data-volume",
    "diskOfferingUuid": "d8732f8e173543ef85a0c2066559ef94",
    "primaryStorageUuid": "ad21b7c7f4ca4d86b348a415347ab1b5",
    "resourceUuid": "e3c9ebe5b5144dd4ba791c5f2959726a"
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
-X POST -d '{"params":{"name":"test-volume","description":"test-data-volume","diskOfferingUuid":"d88594833a393e119c6fc5a8aa2ad08f","primaryStorageUuid":"5fe18eef72483c9cbde984a3176fab78","resourceUuid":"52f6075e4d6839fc8a40f569fb7d991e"}}' \
http://localhost:8080/zstack/v1/volumes/data
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 云盘名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 云盘的描述 |  | 0.6 |
| diskOfferingUuid | String | body(包含在params结构中) | 云盘规格UUID |  | 0.6 |
| primaryStorageUuid (可选) | String | body(包含在params结构中) | 主存储UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| tagUuids (可选) | List | body(包含在params结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：**volumeProvisioningStrategy::ThinProvisioning, volumeProvisioningStrategy::ThickProvisioning**
  - 例如：**volumeProvisioningStrategy::ThinProvisioning, volumeProvisioningStrategy::ThickProvisioning**
- 例如：**volumeProvisioningStrategy::ThinProvisioning, volumeProvisioningStrategy::ThickProvisioning**
  - 选项格式为：**required::installUrl::{%s}**
  - 例如：**required::installUrl::zbs://poolname**
- 例如：**required::installUrl::zbs://poolname**


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b9d6460b286441099fa9cb3fe5bce9ec",
    "name": "test-volume",
    "primaryStorageUuid": "d7d84bb097da41918ee27eeb3b92d4f4",
    "vmInstanceUuid": "8732b8e254ad4db18a5cad5d04315948",
    "diskOfferingUuid": "7e6d828db0b84d8cb62a44e3d4badc7d",
    "rootImageUuid": "8384b89b03914655b888f9b4f864ab07",
    "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-b9d6460b286441099fa9cb3fe5bce9ec/b9d6460b286441099fa9cb3fe5bce9ec.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "May 11, 2017 1:22:51 PM",
    "lastOpDate": "May 11, 2017 1:22:51 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateDataVolumeAction action = new CreateDataVolumeAction();
action.name = "test-volume";
action.description = "test-data-volume";
action.diskOfferingUuid = "cec2445214fd4e5bb10671b453d25677";
action.primaryStorageUuid = "be3baf0aa09f45ab9ae19c7b6d177ca2";
action.resourceUuid = "f2ebba352d8b43feb434f926f1635ae4";
action.sessionId = "054df264a21d40bbbdf4f292c4993842";
CreateDataVolumeAction.Result res = action.call();
```

 Python SDK

```
CreateDataVolumeAction action = CreateDataVolumeAction()
action.name = "test-volume"
action.description = "test-data-volume"
action.diskOfferingUuid = "d9ede14fbc6547808208d40658d1dbbd"
action.primaryStorageUuid = "f6f7257560cd4278b2202157b45d8687"
action.resourceUuid = "3344b25d00ae40c4bfab494d724cb95c"
action.sessionId = "755a549dc19e400ea3b22710c5370c75"
CreateDataVolumeAction.Result res = action.call()
```

---

#### 删除云盘(DeleteDataVolume)



##### API请求

 URLs

```
DELETE zstack/v1/volumes/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 92d7ee354b4e4ed19aea6a7ebb172096" \
-X DELETE http://localhost:8080/zstack/v1/volumes/3102474ff9514720b79ff3719ab6c8e5?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的资源Uuid |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteDataVolumeAction action = new DeleteDataVolumeAction();
action.uuid = "0c9ca7222d914c628d60f5f38b8a5e1e";
action.deleteMode = "Permissive";
action.sessionId = "6b164d54219d4ef8a287fb4937333d54";
DeleteDataVolumeAction.Result res = action.call();
```

 Python SDK

```
DeleteDataVolumeAction action = DeleteDataVolumeAction()
action.uuid = "ba73b65a66ce433790526c3ee146db3b"
action.deleteMode = "Permissive"
action.sessionId = "fce147bb4ab540448ad4f1798e90f3f9"
DeleteDataVolumeAction.Result res = action.call()
```

---

#### 彻底删除云盘(ExpungeDataVolume)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "expungeDataVolume": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"expungeDataVolume":{}}' \
http://localhost:8080/zstack/v1/volumes/6dd47cca96f238c899aacd61867db520/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
ExpungeDataVolumeAction action = new ExpungeDataVolumeAction();
action.uuid = "347edf4db9e9482a895f7aab3d7f4c26";
action.sessionId = "cc3787426fdd480f8ae6ad656b37b909";
ExpungeDataVolumeAction.Result res = action.call();
```

 Python SDK

```
ExpungeDataVolumeAction action = ExpungeDataVolumeAction()
action.uuid = "2dcb23f228294cab80bcd90e0024dc89"
action.sessionId = "86af19d2bda54fa6bee0204b8e33d4de"
ExpungeDataVolumeAction.Result res = action.call()
```

---

#### 恢复云盘(RecoverDataVolume)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverDataVolume": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"recoverDataVolume":{}}' \
http://localhost:8080/zstack/v1/volumes/9f5090fc93ff33e283e0ff3c99fad1e2/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "70820c8ead5144ebaf603b88e63a4d17",
    "name": "test-volume",
    "primaryStorageUuid": "abdb1c3460094359baa202c481633470",
    "vmInstanceUuid": "2f0d6191cc5d452cbbe83284f750c8dd",
    "diskOfferingUuid": "e3526a708a2845f49f2d09404bf0b67d",
    "rootImageUuid": "283433d3b0654d16a63f1add9abad3e6",
    "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-70820c8ead5144ebaf603b88e63a4d17/70820c8ead5144ebaf603b88e63a4d17.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "May 11, 2017 1:22:48 PM",
    "lastOpDate": "May 11, 2017 1:22:48 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
RecoverDataVolumeAction action = new RecoverDataVolumeAction();
action.uuid = "16bc12c40c2242189a9c80a0e908dc21";
action.sessionId = "e444803b7dd047238dca620217929bff";
RecoverDataVolumeAction.Result res = action.call();
```

 Python SDK

```
RecoverDataVolumeAction action = RecoverDataVolumeAction()
action.uuid = "d5bd95c8ce764a72b77510f17a2eb3a4"
action.sessionId = "ba4360074009447184682979d1c0fd26"
RecoverDataVolumeAction.Result res = action.call()
```

---

#### 开启或关闭云盘(ChangeVolumeState)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVolumeState": {
    "stateEvent": "enable"
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
-X PUT -d '{"changeVolumeState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/volumes/97fa26ec14d9328c9cfada75e3c0307b/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘资源Uuid |  | 0.6 |
| stateEvent | String | body(包含在**changeVolumeState**结构中) | 开启或关闭 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0404b47365d14328b69be6ba29f79e74",
    "name": "test-volume",
    "primaryStorageUuid": "b86a9e49bf0e4c96b13b416de45031b1",
    "vmInstanceUuid": "00e88729e2f64212a7ae19c135de879d",
    "diskOfferingUuid": "9042780280534984ad298f8c6613e162",
    "rootImageUuid": "de9c09f4f3f7409e98ac0dbb6cae76a2",
    "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-0404b47365d14328b69be6ba29f79e74/0404b47365d14328b69be6ba29f79e74.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Jun 7, 2017 9:21:21 PM",
    "lastOpDate": "Jun 7, 2017 9:21:21 PM"
  }
}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
ChangeVolumeStateAction action = new ChangeVolumeStateAction();
action.uuid = "67553476ee8643f49ac88304822acd7f";
action.stateEvent = "enable";
action.sessionId = "dc32c1bb220843efb1e3b27b9ca95695";
ChangeVolumeStateAction.Result res = action.call();
```

 Python SDK

```
ChangeVolumeStateAction action = ChangeVolumeStateAction()
action.uuid = "d18b8dc1ba91461f995e6904bd6a7fc4"
action.stateEvent = "enable"
action.sessionId = "72301e2f3cf94e57adf10f56a08d1d12"
ChangeVolumeStateAction.Result res = action.call()
```

---

#### 从镜像创建云盘(CreateDataVolumeFromVolumeTemplate)



##### API请求

 URLs

```
POST zstack/v1/volumes/data/from/data-volume-templates/{imageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "data-volume-1",
    "description": "dataVolume-from-volume-template",
    "primaryStorageUuid": "faf07bfbec0944499d566345f0de383e",
    "hostUuid": "c0411ea2b3d949fab31239d200a83faf"
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
-X POST -d '{"params":{"name":"data-volume-1","description":"dataVolume-from-volume-template","primaryStorageUuid":"849de664b4db321f8eeef65a1aa757c7","hostUuid":"0de619ae30373e97acc7bb4b42ca87a1"}}' \
http://localhost:8080/zstack/v1/volumes/data/from/data-volume-templates/285f4a49e7403d2dad9545b42c33b837
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageUuid | String | url | 镜像UUID |  | 0.6 |
| name | String | body(包含在params结构中) | 云盘名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 云盘的详细描述 |  | 0.6 |
| primaryStorageUuid | String | body(包含在params结构中) | 主存储UUID |  | 0.6 |
| hostUuid (可选) | String | body(包含在params结构中) | 物理机UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


- ZStack Cloud从镜像创建云盘时支持创建共享云盘，**SystemTags**增加**shareable **选项，使用 **shareable **参数来传递 SystemTag。创建时包含此SystemTag表示创建共享云盘，不包含表示创建普通云盘。


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "289aaa0f33004cb6adba798bf9c8273b",
    "name": "test-volume",
    "primaryStorageUuid": "5697632ba45c46408044aefbab433945",
    "vmInstanceUuid": "c0dcccf2ca8945e1b96b446f7bdba30f",
    "diskOfferingUuid": "5909df7b2c3f4751b0491f53533c505f",
    "rootImageUuid": "a8c3608b85a0450d99b9b5339ee4dcec",
    "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-289aaa0f33004cb6adba798bf9c8273b/289aaa0f33004cb6adba798bf9c8273b.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Jun 7, 2017 9:21:14 PM",
    "lastOpDate": "Jun 7, 2017 9:21:14 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateDataVolumeFromVolumeTemplateAction action = new CreateDataVolumeFromVolumeTemplateAction();
action.imageUuid = "f0f991b7883b49869e03b0e9d42a5ce9";
action.name = "data-volume-1";
action.description = "dataVolume-from-volume-template";
action.primaryStorageUuid = "0b325fbe797f413290c6015f49160caf";
action.hostUuid = "2c23c98e197745359455268a6414f6cc";
action.sessionId = "351589a73b6247ee817acfc89609a396";
CreateDataVolumeFromVolumeTemplateAction.Result res = action.call();
```

 Python SDK

```
CreateDataVolumeFromVolumeTemplateAction action = CreateDataVolumeFromVolumeTemplateAction()
action.imageUuid = "eeea8f11bf174bf39ffb341c96e93765"
action.name = "data-volume-1"
action.description = "dataVolume-from-volume-template"
action.primaryStorageUuid = "f1bf0bc060474a9484a822a7b9ea3bec"
action.hostUuid = "883173c367ba42e49434429012376f36"
action.sessionId = "7c098bc9e7e24c1ca81ff90d355b2fca"
CreateDataVolumeFromVolumeTemplateAction.Result res = action.call()
```

---

#### 从快照创建云盘(CreateDataVolumeFromVolumeSnapshot)



##### API请求

 URLs

```
POST zstack/v1/volumes/data/from/volume-snapshots/{volumeSnapshotUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "DataVolume-1",
"description": "dataVolume-from-snapshot",
"primaryStorageUuid": "4102177b842946a4adf6ba0008710ed6"
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
-X POST -d '{"params":{"name":"DataVolume-1","description":"dataVolume-from-snapshot","primaryStorageUuid":"b2237f228a343d0cb8b20b5b64663314"}}' \
http://localhost:8080/zstack/v1/volumes/data/from/volume-snapshots/192da9c7d6493a5d9a35d2df2dcc82b0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 云盘名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 云盘的详细描述 |  | 0.6 |
| volumeSnapshotUuid | String | url | 云盘快照UUID |  | 0.6 |
| primaryStorageUuid (可选) | String | body(包含在params结构中) | 主存储UUID |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源的Uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "0f7ad281abd34b4d94df149756daa45d",
"name": "test-volume",
"primaryStorageUuid": "e39d9b37365141f8a126e53555a57f2d",
"vmInstanceUuid": "b03e00f24ef842cb9c31fd0f8ab3f38b",
"diskOfferingUuid": "cc97edd1f7aa4cc39656e73490863b4d",
"rootImageUuid": "d15926cb82a54a26b098e19a982f2f6b",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-0f7ad281abd34b4d94df149756daa45d/0f7ad281abd34b4d94df149756daa45d.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:21:17 PM",
"lastOpDate": "Jun 7, 2017 9:21:17 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateDataVolumeFromVolumeSnapshotAction action = new CreateDataVolumeFromVolumeSnapshotAction();
action.name = "DataVolume-1";
action.description = "dataVolume-from-snapshot";
action.volumeSnapshotUuid = "179e11d25aea49ce81ba612108451a8f";
action.primaryStorageUuid = "4d39340d1a9d4bd7a834493af50020ab";
action.sessionId = "d28727a6c2fc44fe9673c4b67da615b5";
CreateDataVolumeFromVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
CreateDataVolumeFromVolumeSnapshotAction action = CreateDataVolumeFromVolumeSnapshotAction()
action.name = "DataVolume-1"
action.description = "dataVolume-from-snapshot"
action.volumeSnapshotUuid = "79200ff743314dd1b1e46bdf9b26f72f"
action.primaryStorageUuid = "920b891ae2b84a53a802a0ddc37a7d0c"
action.sessionId = "c4c003ce6d664a0db244e5587b6ec7d2"
CreateDataVolumeFromVolumeSnapshotAction.Result res = action.call()
```

---

#### 查询云盘(QueryVolume)



##### API请求

 URLs

```
GET zstack/v1/volumes
GET zstack/v1/volumes/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 37d226de07584043ab547642e4a9d14c" \
-X GET http://localhost:8080/zstack/v1/volumes
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 97dc2b0fd5264c6bb2ff9e693791d492" \
-X GET http://localhost:8080/zstack/v1/volumes/ca621f583bac4b979348fce553525146
```



可查询字段

运行CLI命令行工具，输入`QueryVolume`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "b289ce8ac3874e88b4d4ce5cc4fc4c6e",
      "name": "test-volume",
      "primaryStorageUuid": "8749501379364105ba214227fc79578f",
      "vmInstanceUuid": "4cf370ed63bb43f99d88755b87f722c1",
      "diskOfferingUuid": "9e4d1d1a0e1a483da86eac0ab99c96ce",
      "rootImageUuid": "0116e6093d80474693ddac2e670122e4",
      "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-b289ce8ac3874e88b4d4ce5cc4fc4c6e/b289ce8ac3874e88b4d4ce5cc4fc4c6e.qcow2",
      "type": "Root",
      "format": "qcow2",
      "size": 107374182400,
      "actualSize": 21474836480,
      "deviceId": 0.0,
      "state": "Enabled",
      "status": "Ready",
      "createDate": "Jun 7, 2017 9:20:25 PM",
      "lastOpDate": "Jun 7, 2017 9:20:25 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |
| volumeQos | String |  | 4.6.21 |
| lastDetachDate | Timestamp |  | 4.6.21 |
| lastVmInstanceUuid | String |  | 4.6.21 |



##### SDK示例

 Java SDK

```
QueryVolumeAction action = new QueryVolumeAction();
action.conditions = asList();
action.sessionId = "a6c77f7c77dd425e98f3089363725c06";
QueryVolumeAction.Result res = action.call();
```

 Python SDK

```
QueryVolumeAction action = QueryVolumeAction()
action.conditions = []
action.sessionId = "8e464fe1562b4fcc80b02596f455e6a8"
QueryVolumeAction.Result res = action.call()
```

---

#### 获取云盘格式(GetVolumeFormat)



##### API请求

 URLs

```
GET zstack/v1/volumes/formats
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 91c86306f8fd45ba9af34c549baa8052" \
-X GET http://localhost:8080/zstack/v1/volumes/formats
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "formats": [
    {
      "format": "iso",
      "masterHypervisorType": "KVM",
      "supportingHypervisorTypes": [
        "ESX",
        "KVM"
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| formats | List | 详情参考[formats] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #formats

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| format | String | 云盘格式 | 0.6 |
| masterHypervisorType | String | 默认的Hypervisor类型 | 0.6 |
| supportingHypervisorTypes | List | 支持的Hypervisor类型列表 | 0.6 |



##### SDK示例

 Java SDK

```
GetVolumeFormatAction action = new GetVolumeFormatAction();
action.sessionId = "6fda4c2362614bec9ec42a2eb8f4a4b0";
GetVolumeFormatAction.Result res = action.call();
```

 Python SDK

```
GetVolumeFormatAction action = GetVolumeFormatAction()
action.sessionId = "a5cd7896806e4717a609899d22a90594"
GetVolumeFormatAction.Result res = action.call()
```

---

#### 获取云盘支持的类型的能力(GetVolumeCapabilities)



##### API请求

 URLs

```
GET zstack/v1/volumes/{uuid}/capabilities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 202bde8c03d94942b052da20b48a2301" \
-X GET http://localhost:8080/zstack/v1/volumes/96646576bd1c44ac845810374ca41c58/capabilities
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"capabilities": {
"MigrationToOtherPrimaryStorage": true,
"MigrationInCurrentPrimaryStorage": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| capabilities | Map | 云盘支持的类型列表 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVolumeCapabilitiesAction action = new GetVolumeCapabilitiesAction();
action.uuid = "23c96138a1874aeebcd082be9b21f905";
action.sessionId = "b8980f940bad4558947437d211262e2f";
GetVolumeCapabilitiesAction.Result res = action.call();
```

 Python SDK

```
GetVolumeCapabilitiesAction action = GetVolumeCapabilitiesAction()
action.uuid = "b645da1aa3ed4771b0860d01144929b6"
action.sessionId = "277436d4a8f54942a496ca64b2d7f3f0"
GetVolumeCapabilitiesAction.Result res = action.call()
```

---

#### 同步云盘大小(SyncVolumeSize)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"syncVolumeSize": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncVolumeSize":{}}' \
http://localhost:8080/zstack/v1/volumes/017a6c821b3433c594285712cd7e69f4/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "d0cd0413d1b241fca524322b56f4687d",
"name": "test-volume",
"primaryStorageUuid": "8dea01cf7afb4d7bb89ea432fc15258e",
"vmInstanceUuid": "f93fa5fea43f42449409c35914c47732",
"diskOfferingUuid": "a2915a283c744389a6bae0d42b203e18",
"rootImageUuid": "da66399cb83048b0b87fa113ddcd3755",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-d0cd0413d1b241fca524322b56f4687d/d0cd0413d1b241fca524322b56f4687d.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:21:08 PM",
"lastOpDate": "Jun 7, 2017 9:21:08 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
SyncVolumeSizeAction action = new SyncVolumeSizeAction();
action.uuid = "793ac8595fbc44618934ccf474c9c82b";
action.sessionId = "eab6cd1a880749ae818f6402c0c72af5";
SyncVolumeSizeAction.Result res = action.call();
```

 Python SDK

```
SyncVolumeSizeAction action = SyncVolumeSizeAction()
action.uuid = "e269f644c3324709a2254d84a6f86457"
action.sessionId = "48363f37efe6484abfff927059cedae3"
SyncVolumeSizeAction.Result res = action.call()
```

---

#### 批量刷新云盘容量(BatchSyncVolumeSize)



##### API请求

 URLs

```
POST zstack/v1/volumes/batch-sync-volumes
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST http://localhost:8080/zstack/v1/volumes/batch-sync-volumes
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| clusterUuid | String | body | 集群UUID |  | 4.5.3 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.3 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.3 |



##### API返回

 返回示例

```
{
	“failCount”: 3,
	"successCount": 3
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| failCount | int | 失败数 | 4.5.3 |
| successCount | int | 成功数 | 4.5.3 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.3 |
| description | String | 错误的概要描述 | 4.5.3 |
| details | String | 错误的详细信息 | 4.5.3 |
| elaboration | String | 保留字段，默认为null | 4.5.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.3 |



##### SDK示例

 Java SDK

```
BatchSyncVolumeSizeAction action = new BatchSyncVolumeSizeAction();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
action.clusterUuid = "5hs8kc3m867kg4x46k8l04dv461vps9e";
BatchSyncVolumeSizeAction.Result res = action.call();
```

 Python SDK

```
BatchSyncVolumeSizeAction action = BatchSyncVolumeSizeAction()
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
action.clusterUuid = "5hs8kc3m867kg4x46k8l04dv461vps9e"
BatchSyncVolumeSizeAction.Result res = action.call()
```

---

#### 扩展根云盘(ResizeRootVolume)



##### API请求

 URLs

```
PUT zstack/v1/volumes/resize/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "resizeRootVolume": {
    "size": 1.0E7
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
-X PUT -d '{"resizeRootVolume":{"size":1.0E7}}' \
http://localhost:8080/zstack/v1/volumes/resize/16a052d270983392bd2824c06a44253f/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| size | long | body(包含在**resizeRootVolume**结构中) | 扩展后大小 |  | 2.2 |
| systemTags (可选) | List | body |  |  | 2.2 |
| userTags (可选) | List | body |  |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f6ace13363934d2d9a2dc29c53a83bc4",
    "name": "test-volume",
    "primaryStorageUuid": "a849a9d7cf864b95a4a1223db572a73c",
    "vmInstanceUuid": "d05fda61030645c293688fd2e67b6881",
    "diskOfferingUuid": "f31553ca15f4495cbd7f3954426f9f1f",
    "rootImageUuid": "5ef070a672ea48e583c8f4fd6441a58c",
    "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-f6ace13363934d2d9a2dc29c53a83bc4/f6ace13363934d2d9a2dc29c53a83bc4.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Sep 22, 2017 12:24:45 PM",
    "lastOpDate": "Sep 22, 2017 12:24:45 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventory | VolumeInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| primaryStorageUuid | String | 主存储UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| diskOfferingUuid | String | 云盘规格UUID | 2.2 |
| rootImageUuid | String |  | 2.2 |
| installPath | String |  | 2.2 |
| type | String |  | 2.2 |
| format | String |  | 2.2 |
| size | Long |  | 2.2 |
| actualSize | Long |  | 2.2 |
| deviceId | Integer |  | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| isShareable | Boolean |  | 2.2 |



##### SDK示例

 Java SDK

```
ResizeRootVolumeAction action = new ResizeRootVolumeAction();
action.uuid = "d39ece16a6e74d1582541f256a6bc6fe";
action.size = 1.0E7;
action.sessionId = "cae45c7f96264807afaf6337ee40c236";
ResizeRootVolumeAction.Result res = action.call();
```

 Python SDK

```
ResizeRootVolumeAction action = ResizeRootVolumeAction()
action.uuid = "9101b352108041baad9acfadcd38aa22"
action.size = 1.0E7
action.sessionId = "dfa1c04aa43f48118cae6ccaabd8bc5c"
ResizeRootVolumeAction.Result res = action.call()
```

---

#### 扩展数据云盘(ResizeDataVolume)



##### API请求



URLs

```
PUT zstack/v1/volumes/data/resize/{uuid}/actions
```



Headers

```
Authorization: OAuth the-session-uuid
```



Body

```
{
  "resizeDataVolume": {
    "size": 1.0E7
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
-X PUT -d '{"resizeDataVolume":{"size":1.0E7}}' \
http://localhost:8080/zstack/v1/volumes/data/resize/6c2a13e8d7fa3ef99091bc6a445d4e9c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| size | long | body(包含在**resizeDataVolume**结构中) | 扩展后大小 |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f17a01d17e4d39bdb17d227a1df97e3a",
    "name": "test-volume",
    "primaryStorageUuid": "83245aa16d02322785f84450d1a05441",
    "vmInstanceUuid": "14ca01538ffa3ab49aad3dd60c4c41b4",
    "diskOfferingUuid": "9dd65df23d453f25855a2c2b2f9f778b",
    "rootImageUuid": "825ca3ebcb053abf843ed8b2731ec4b9",
    "installPath": "/Cloud_ps/dataVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-f17a01d17e4d39bdb17d227a1df97e3a/f17a01d17e4d39bdb17d227a1df97e3a.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Nov 20, 2017 1:50:58 PM",
    "lastOpDate": "Nov 20, 2017 1:50:58 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.2 |
| inventory | VolumeInventory | 详情参考[inventory] | 2.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| primaryStorageUuid | String | 主存储UUID | 2.2 |
| vmInstanceUuid | String | 云主机UUID | 2.2 |
| diskOfferingUuid | String | 云盘规格UUID | 2.2 |
| rootImageUuid | String |  | 2.2 |
| installPath | String |  | 2.2 |
| type | String |  | 2.2 |
| format | String |  | 2.2 |
| size | Long |  | 2.2 |
| actualSize | Long |  | 2.2 |
| deviceId | Integer |  | 2.2 |
| state | String |  | 2.2 |
| status | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| isShareable | Boolean |  | 2.2 |



##### SDK示例

 Java SDK

```
ResizeDataVolumeAction action = new ResizeDataVolumeAction();
action.uuid = "6c2a13e8d7fa3ef99091bc6a445d4e9c";
action.size = 1.0E7;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ResizeDataVolumeAction.Result res = action.call();
```

 Python SDK

```
ResizeDataVolumeAction action = ResizeDataVolumeAction()
action.uuid = "6c2a13e8d7fa3ef99091bc6a445d4e9c"
action.size = 1.0E7
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ResizeDataVolumeAction.Result res = action.call()
```

---

#### 修改云盘属性(UpdateVolume)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateVolume": {
"name": "volume-1",
"description": "data-volume"
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
-X PUT -d '{"updateVolume":{"name":"volume-1","description":"data-volume"}}' \
http://localhost:8080/zstack/v1/volumes/f1eddfdb19ad3a0881b0be863901ff09/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateVolume**结构中) | 云盘名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateVolume**结构中) | 云盘的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



返回示例

```
{
"inventory": {
"uuid": "31ae1f16a1774ead98a84432e08e438c",
"name": "test-volume",
"primaryStorageUuid": "dafbef4c002b4bf49ac63a2e0cf8c616",
"vmInstanceUuid": "417e81050f424bf88b515c2bbc3e9d24",
"diskOfferingUuid": "80b0f3edaa2f4c0284240d16aebf8da4",
"rootImageUuid": "edb9e2aa51c5489db12a7073daa6c878",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-31ae1f16a1774ead98a84432e08e438c/31ae1f16a1774ead98a84432e08e438c.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:20:28 PM",
"lastOpDate": "Jun 7, 2017 9:20:28 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateVolumeAction action = new UpdateVolumeAction();
action.uuid = "cebcb28540d9474ebf0be79fc9c7efe4";
action.name = "volume-1";
action.description = "data-volume";
action.sessionId = "e5e68d56602441d187139189dce441f7";
UpdateVolumeAction.Result res = action.call();
```

 Python SDK

```
UpdateVolumeAction action = UpdateVolumeAction()
action.uuid = "d429120df78e4b7290fd4f50adfa2f2e"
action.name = "volume-1"
action.description = "data-volume"
action.sessionId = "31a278c3b4024dc48b952196c0ae34a0"
UpdateVolumeAction.Result res = action.call()
```

---

#### 设置云盘限速(SetVolumeQoS)



##### API请求

 URLs

```
POST zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVolumeQos": {
    "totalBandwidth": 10000.0,
    "totalIOPS": 1000.0
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
-X PUT -d '{"setVolumeQos":{"totalBandwidth":10000.0,"totalIOPS":1000.0}}' http://localhost:8080/zstack/v1/volumes/384f99ce0b7a307685856b23f75c5167/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID |  | 0.6 |
| volumeBandwidth | Long | body(包含在**params**结构中) | 云盘限速带宽 |  | 0.6 |
| mode (可选) | String | body(包含在**setVolumeQos**结构中) |  | total read write | 3.1.0 |
| readBandwidth (可选) | Long | body(包含在**setVolumeQos**结构中) |  |  | 4.4.0 |
| writeBandwidth (可选) | Long | body(包含在**setVolumeQos**结构中) |  |  | 4.4.0 |
| totalBandwidth (可选) | Long | body(包含在**setVolumeQos**结构中) |  |  | 4.4.0 |
| readIOPS (可选) | Long | body(包含在**setVolumeQos**结构中) |  |  | 4.4.0 |
| writeIOPS (可选) | Long | body(包含在**setVolumeQos**结构中) |  |  | 4.4.0 |
| totalIOPS (可选) | Long | body(包含在**setVolumeQos**结构中) |  |  | 4.4.0 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |


  - 选项格式为：`volumeReadBandwidth::xxx`，其中 xxx 是读QoS
  - 例如：`volumeReadBandwidth::20971520`
- 例如：`volumeReadBandwidth::20971520`
  - 选项格式为：`volumeWriteBandwidth::xxx`，其中 xxx 是写QoS
  - 例如：`vvolumeWriteBandwidth::20971520`
- 例如：`vvolumeWriteBandwidth::20971520`


> **注意:** 说明:



##### API返回



该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{
  "inventory": {
    "uuid": "6e9ee53ebad936da8a8d5d2741108a75",
    "name": "volume",
    "primaryStorageUuid": "630a2901d3083328a04333ca9e1330c0",
    "vmInstanceUuid": "042bfcd0830731d78f35598541b8de48",
    "diskOfferingUuid": "31294bcbedf53971bd71c2f247e0f9fc",
    "rootImageUuid": "0bc2f95ef0fb3785936d02ea58fd2e02",
    "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/inventory-6e9ee53ebad936da8a8d5d2741108a75/6e9ee53ebad936da8a8d5d2741108a75.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 1.073741824E11,
    "actualSize": 2.147483648E10,
    "deviceId": 0.0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "volumeQos": "total\u003d20971520"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 3.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | VolumeInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 3.2.0 |



##### SDK示例

 Java SDK

```
SetVolumeQosAction action = new SetVolumeQosAction();
action.uuid = "384f99ce0b7a307685856b23f75c5167";
action.totalBandwidth = 10000.0;
action.totalIOPS = 1000.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVolumeQosAction.Result res = action.call();
```

 Python SDK

```
SetVolumeQosAction action = SetVolumeQosAction()
action.uuid = "384f99ce0b7a307685856b23f75c5167"
action.totalBandwidth = 10000.0
action.totalIOPS = 1000.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVolumeQosAction.Result res = action.call()
```

---

#### 获取云盘限速(GetVolumeQoS)



##### API请求

 URLs

```
GET zstack/v1/volumes/{uuid}/qos
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volumes/66adb238cf70369089b3da287e6633bb/qos
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID |  | 0.6 |
| forceSync (可选) | Boolean | body | 是否到物理机上去同步数据 |  | 3.3.0 |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |


  - 选项格式为：`volumeReadBandwidth::xxx`，其中 xxx 是读QoS
  - 例如：`volumeReadBandwidth::20971520`
- 例如：`volumeReadBandwidth::20971520`
  - 选项格式为：`volumeWriteBandwidth::xxx`，其中 xxx 是写QoS
  - 例如：`vvolumeWriteBandwidth::20971520`
- 例如：`vvolumeWriteBandwidth::20971520`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "volumeUuid": "1dc9ff4cedae33eb84651468db5734ae",
  "volumeBandwidth": 100000.0,
  "volumeBandwidthRead": -1.0,
  "volumeBandwidthWrite": -1.0,
  "iopsTotal": -1.0,
  "iopsRead": 10000.0,
  "iopsWrite": 10000.0,
  "volumeBandwidthUpthreshold": 200000.0,
  "volumeBandwidthReadUpthreshold": -1.0,
  "volumeBandwidthWriteUpthreshold": -1.0,
  "iopsTotalUpthreshold": -1.0,
  "iopsReadUpthreshold": 20000.0,
  "iopsWriteUpthreshold": 15000.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeUuid | String | 云盘UUID | 3.10 |
| volumeBandwidth | long | 云盘带宽，默认-1 | 3.10 |
| volumeBandwidthRead | long | 云盘读带宽，默认-1 | 3.10 |
| volumeBandwidthWrite | long | 云盘写带宽，默认-1 | 3.10 |
| volumeBandwidthUpthreshold | long | 云盘带宽上限，默认-1 | 3.10 |
| volumeBandwidthReadUpthreshold | long | 云盘读带宽上限，默认-1 | 3.10 |
| volumeBandwidthWriteUpthreshold | long | 云盘写带宽上限，默认-1 | 3.10 |
| iopsTotalUpthreshold | long | 云盘总IOPS上限，-1表示无上限限制 | 4.4.0 |
| iopsReadUpthreshold | long | 云盘读取IOPS上限，-1表示无上限限制 | 4.4.0 |
| iopsWriteUpthreshold | long | 云盘写入IOPS上限，-1表示无上限限制 | 4.4.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetVolumeQosAction action = new GetVolumeQosAction();
action.uuid = "66adb238cf70369089b3da287e6633bb";
action.forceSync = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVolumeQosAction.Result res = action.call();
```

 Python SDK

```
GetVolumeQosAction action = GetVolumeQosAction()
action.uuid = "66adb238cf70369089b3da287e6633bb"
action.forceSync = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVolumeQosAction.Result res = action.call()
```

---

#### 取消云盘限速(DeleteVolumeQos)



##### API请求



URLs

```
DELETE zstack/v1/volumes/{uuid}/qos
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/volumes/f468b0dd61c538b0bbe85327f7deadcd/qos?
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID |  | 0.6 |
| mode (可选) | String | body |  | total read write all overwrite | 4.4.0 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |


  - 选项格式为：`volumeReadBandwidth::xxx`，其中 xxx 是读QoS
  - 例如：`volumeReadBandwidth::20971520`
- 例如：`volumeReadBandwidth::20971520`
  - 选项格式为：`volumeWriteBandwidth::xxx`，其中 xxx 是写QoS
  - 例如：`vvolumeWriteBandwidth::20971520`
- 例如：`vvolumeWriteBandwidth::20971520`


> **注意:** 说明:



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteVolumeQosAction action = new DeleteVolumeQosAction();
action.uuid = "f468b0dd61c538b0bbe85327f7deadcd";
action.mode = "total";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVolumeQosAction.Result res = action.call();
```

 Python SDK

```
DeleteVolumeQosAction action = DeleteVolumeQosAction()
action.uuid = "f468b0dd61c538b0bbe85327f7deadcd"
action.mode = "total"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVolumeQosAction.Result res = action.call()
```

---

#### 获取云盘IO线程绑定信息(GetVolumeIoThreadPin)



##### API请求

 URLs

```
GET zstack/v1/volumes/{uuid}/io-thread-pin
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volumes/93150452524b3b548cc597c8405fda21/io-thread-pin
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "volumeUuid": "a8ba696310303ccebb08e128759ecbf8",
  "pin": "3-6",
  "ioThreadId": "1"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| volumeUuid | String | 云盘UUID | 4.7.0 |
| ioThreadId | String | IO线程的id | 4.7.0 |
| pin | String | 绑定的CPU范围 | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
GetVolumeIoThreadPinAction action = new GetVolumeIoThreadPinAction();
action.uuid = "93150452524b3b548cc597c8405fda21";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVolumeIoThreadPinAction.Result res = action.call();
```

 Python SDK

```
GetVolumeIoThreadPinAction action = GetVolumeIoThreadPinAction()
action.uuid = "93150452524b3b548cc597c8405fda21"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVolumeIoThreadPinAction.Result res = action.call()
```

---

#### 设置云盘IO线程绑定(SetVolumeIoThreadPin)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setVolumeIoThreadPin": {
    "vmUuid": "f225b0e5d5ea3c7bbc3a99fd8fc8315e",
    "pin": "3-6",
    "ioThreadId": 1
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
-X PUT -d '{"setVolumeIoThreadPin":{"vmUuid":"f225b0e5d5ea3c7bbc3a99fd8fc8315e","pin":"3-6","ioThreadId":1}}' http://localhost:8080/zstack/v1/volumes/30603ac1c77f3e8b9358cd57dec56a54/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| vmUuid | String | body (包含在**setVolumeIoThreadPin**结构中) | 云盘加载目标云主机的UUID |  | 4.7.0 |
| pin | String | body (包含在**setVolumeIoThreadPin**结构中) | 绑定的CPU范围 |  | 4.7.0 |
| ioThreadId | int | body (包含在**setVolumeIoThreadPin**结构中) | IO线程的id |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "volumeUuid": "1a4f1e7372283246bd5400dc452d2937",
  "pin": "3-6",
  "ioThreadId": 1
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| volumeUuid | String | 云盘UUID | 4.7.0 |
| ioThreadId | Integer | IO线程的id | 4.7.0 |
| pin | String | 绑定的CPU范围 | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
SetVolumeIoThreadPinAction action = new SetVolumeIoThreadPinAction();
action.uuid = "30603ac1c77f3e8b9358cd57dec56a54";
action.vmUuid = "f225b0e5d5ea3c7bbc3a99fd8fc8315e";
action.pin = "3-6";
action.ioThreadId = 1;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetVolumeIoThreadPinAction.Result res = action.call();
```

 Python SDK

```
SetVolumeIoThreadPinAction action = SetVolumeIoThreadPinAction()
action.uuid = "30603ac1c77f3e8b9358cd57dec56a54"
action.vmUuid = "f225b0e5d5ea3c7bbc3a99fd8fc8315e"
action.pin = "3-6"
action.ioThreadId = 1
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetVolumeIoThreadPinAction.Result res = action.call()
```

---

#### 获取云盘可被加载的云主机列表(GetDataVolumeAttachableVm)



##### API请求

 URLs

```
GET zstack/v1/volumes/{volumeUuid}/candidate-vm-instances
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 2da4ab715edf474ea45825d21c7ce711" \
-X GET http://localhost:8080/zstack/v1/volumes/2b419a8547074e098d0da9ee92935344/candidate-vm-instances
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "237e1c010bed43288f2f158cd3b1e218",
"name": "Test-VM",
"description": "web server VM",
"zoneUuid": "4537a02725fd49adb8815887fe95e38d",
"clusterUuid": "fe33a5b88c054e94b13a8914086e50f3",
"imageUuid": "5bed7e1839c44b4289f0eab2af35681d",
"hostUuid": "0242f2a240564fd5bdf84bf651740129",
"lastHostUuid": "649a873867a247b1bed6b96b61b2e19a",
"instanceOfferingUuid": "1edf7842c7f34e00b48d3899d14a1ff2",
"rootVolumeUuid": "2adc2350eb16479aa7b9dfdb9bc82d6a",
"platform": "Linux",
"defaultL3NetworkUuid": "7119ed6d54ca4624aa8e362d07b03a35",
"type": "UserVm",
"hypervisorType": "KVM",
"memorySize": 8.589934592E9,
"cpuNum": 1.0,
"allocatorStrategy": "LastHostPreferredAllocatorStrategy",
"createDate": "Jun 7, 2017 9:20:15 PM",
"lastOpDate": "Jun 7, 2017 9:20:15 PM",
"state": "Running",
"vmNics": [
        {
"uuid": "f967eee9618c4ee3a8cda348b333ba21",
"vmInstanceUuid": "237e1c010bed43288f2f158cd3b1e218",
"usedIpUuid": "ead7ed9822e64f18b2f926cb71e0b9da",
"l3NetworkUuid": "7119ed6d54ca4624aa8e362d07b03a35",
"ip": "192.168.1.10",
"mac": "00:0c:29:bd:99:fc",
"netmask": "255.255.255.0",
"gateway": "192.168.1.1",
"deviceId": 0.0,
"createDate": "Jun 7, 2017 9:20:15 PM",
"lastOpDate": "Jun 7, 2017 9:20:15 PM"
        }
      ],
"allVolumes": [
        {
"uuid": "2adc2350eb16479aa7b9dfdb9bc82d6a",
"name": "Root-Volume-For-VM-237e1c010bed43288f2f158cd3b1e218",
"primaryStorageUuid": "bdffc9aef10d48e4b028d26b09df2e35",
"vmInstanceUuid": "237e1c010bed43288f2f158cd3b1e218",
"diskOfferingUuid": "0319566f3f7647dbb3a8e642b05f4bfe",
"rootImageUuid": "5bed7e1839c44b4289f0eab2af35681d",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-2adc2350eb16479aa7b9dfdb9bc82d6a/2adc2350eb16479aa7b9dfdb9bc82d6a.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:20:15 PM",
"lastOpDate": "Jun 7, 2017 9:20:15 PM"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| zoneUuid | String | 区域UUID | 0.6 |
| clusterUuid | String | 集群UUID | 0.6 |
| imageUuid | String | 镜像UUID | 0.6 |
| hostUuid | String | 物理机UUID | 0.6 |
| lastHostUuid | String |  | 0.6 |
| instanceOfferingUuid | String | 计算规格UUID | 0.6 |
| rootVolumeUuid | String | 根云盘UUID | 0.6 |
| platform | String |  | 0.6 |
| defaultL3NetworkUuid | String |  | 0.6 |
| type | String |  | 0.6 |
| hypervisorType | String |  | 0.6 |
| memorySize | Long |  | 0.6 |
| cpuNum | Integer |  | 0.6 |
| cpuSpeed | Long |  | 0.6 |
| allocatorStrategy | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String |  | 0.6 |
| vmNics | List | 详情参考[vmNics] | 0.6 |
| allVolumes | List | 详情参考[allVolumes] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| l3NetworkUuid | String | 三层网络UUID | 0.6 |
| ip | String |  | 0.6 |
| mac | String |  | 0.6 |
| netmask | String |  | 0.6 |
| gateway | String |  | 0.6 |
| metaData | String |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
GetDataVolumeAttachableVmAction action = new GetDataVolumeAttachableVmAction();
action.volumeUuid = "df8f99ea16c54b7f945cbf3bc3968708";
action.sessionId = "a6bd56927c384d639f6ed058226a6a87";
GetDataVolumeAttachableVmAction.Result res = action.call();
```

 Python SDK

```
GetDataVolumeAttachableVmAction action = GetDataVolumeAttachableVmAction()
action.volumeUuid = "212352bd2dc64bb6b42d052ba7b55c8f"
action.sessionId = "bc975e8c54764903857ddf7e22a8fa88"
GetDataVolumeAttachableVmAction.Result res = action.call()
```

---

#### 挂载云盘到云主机上(AttachDataVolumeToVm)



##### API请求

 URLs

```
POST zstack/v1/volumes/{volumeUuid}/vm-instances/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/volumes/6fdcff5868fe376a98359eba8b3d0efe/vm-instances/f6abc3b26ffe337ba61dd7298fb0b9df
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| volumeUuid | String | url | 云盘UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "4c118c4e51e54f839e6e0af9e17527f2",
"name": "test-volume",
"primaryStorageUuid": "9cd9e87803864fa1ae6cf4001fb5d4c8",
"vmInstanceUuid": "8a6f516d0da04addb062c903dd000830",
"diskOfferingUuid": "bdb5f71d810c49a08ff0e91f81936009",
"rootImageUuid": "a12e3048aab340c1b2c6bad2e4187a3a",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-4c118c4e51e54f839e6e0af9e17527f2/4c118c4e51e54f839e6e0af9e17527f2.qcow2",
"type": "Root",
"format": "qcow2",
"size": 107374182400,
"actualSize": 21474836480,
"deviceId": 0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:20:35 PM",
"lastOpDate": "Jun 7, 2017 9:20:35 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |
| volumeQos | String |  | 4.7.0 |
| lastDetachDate | Timestamp |  | 4.7.0 |
| lastVmInstanceUuid | String |  | 4.7.0 |



##### SDK示例

 Java SDK

```
AttachDataVolumeToVmAction action = new AttachDataVolumeToVmAction();
action.vmInstanceUuid = "255dc5614937406c9a988d9c1786b210";
action.volumeUuid = "1e54148b369b4edeb40fa355d96418f0";
action.sessionId = "f705bc797bc34ebd80690e8f154103d1";
AttachDataVolumeToVmAction.Result res = action.call();
```

 Python SDK

```
AttachDataVolumeToVmAction action = AttachDataVolumeToVmAction()
action.vmInstanceUuid = "ebbc8ec209e54fc3a9872316b4d70bc6"
action.volumeUuid = "9451c035198c4e91818a0f47d6fc47c5"
action.sessionId = "4f838000320d44daa355120a7adef512"
AttachDataVolumeToVmAction.Result res = action.call()
```

---

#### 从云主机上卸载云盘(DetachDataVolumeFromVm)



##### API请求

 URLs

```
DELETE zstack/v1/volumes/{uuid}/vm-instances?vmUuid={vmUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7e5632146864445d8429d29e51dec0cb" \
-X DELETE http://localhost:8080/zstack/v1/volumes/7beae849715345d7aa8793d1c2942279/vm-instances?vmUuid=88d866d0c5ec303cb55cf4d4077f1987
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 0.6 |
| vmUuid (可选) | String | body | 云主机的UUID |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "eeb5dcf6332e44cb81c190df7e6a68e9",
"name": "test-volume",
"primaryStorageUuid": "3d51fd1b41a5461ea1fcc7cc216e4db8",
"vmInstanceUuid": "e64ebdc324d445d5aad979fc62eb0a0d",
"diskOfferingUuid": "1391925279d7436cb6efd5c39c5144d1",
"rootImageUuid": "44794b5fec4a4061b533560fbaf458e2",
"installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-eeb5dcf6332e44cb81c190df7e6a68e9/eeb5dcf6332e44cb81c190df7e6a68e9.qcow2",
"type": "Root",
"format": "qcow2",
"size": 1.073741824E11,
"actualSize": 2.147483648E10,
"deviceId": 0.0,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:20:31 PM",
"lastOpDate": "Jun 7, 2017 9:20:31 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| vmInstanceUuid | String | 云主机UUID | 0.6 |
| diskOfferingUuid | String | 云盘规格UUID | 0.6 |
| rootImageUuid | String |  | 0.6 |
| installPath | String |  | 0.6 |
| type | String |  | 0.6 |
| format | String |  | 0.6 |
| size | Long |  | 0.6 |
| actualSize | Long |  | 0.6 |
| deviceId | Integer |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| isShareable | Boolean |  | 0.6 |



##### SDK示例

 Java SDK

```
DetachDataVolumeFromVmAction action = new DetachDataVolumeFromVmAction();
action.uuid = "a25328c5d8664e9bbfb4056561ff273b";
action.vmUuid = "a50e728336b8455e9802785ee6d81959";
action.sessionId = "b7ff5722af3e42f5ab4d0c77b8664f6c";
DetachDataVolumeFromVmAction.Result res = action.call();
```

 Python SDK

```
DetachDataVolumeFromVmAction action = DetachDataVolumeFromVmAction()
action.uuid = "b23d5a96ba19477dacae2429f9f181ef"
action.vmUuid = "58ab89b6a8e64a649fc38831ceaa95c8"
action.sessionId = "e97c2484efd84e0ba9f2f50a01a41d1a"
DetachDataVolumeFromVmAction.Result res = action.call()
```

---

#### 加载数据云盘到物理机(AttachDataVolumeToHost)



##### API请求

 URLs

```
POST zstack/v1/volumes/{volumeUuid}/hosts/{hostUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "mountPath": "/test/mount/path"
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
-X POST -d '{"params":{"mountPath":"/test/mount/path"}}' http://localhost:8080/zstack/v1/volumes/95bd25d20dff3591a83f45280d05a67d/hosts/c7310b853b1d3e97b09e52c32bd2e9c6
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 4.5.0 |
| hostUuid | String | url | 物理机UUID |  | 4.5.0 |
| mountPath | String | body | 物理机上的挂载路径 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
AttachDataVolumeToHostAction action = new AttachDataVolumeToHostAction();
action.volumeUuid = "95bd25d20dff3591a83f45280d05a67d";
action.hostUuid = "c7310b853b1d3e97b09e52c32bd2e9c6";
action.mountPath = "/test/mount/path";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachDataVolumeToHostAction.Result res = action.call();
```

 Python SDK

```
AttachDataVolumeToHostAction action = AttachDataVolumeToHostAction()
action.volumeUuid = "95bd25d20dff3591a83f45280d05a67d"
action.hostUuid = "c7310b853b1d3e97b09e52c32bd2e9c6"
action.mountPath = "/test/mount/path"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachDataVolumeToHostAction.Result res = action.call()
```

---

#### 从物理机卸载数据云盘(DetachDataVolumeFromHost)



##### API请求

 URLs

```
DELETE zstack/v1/volumes/{volumeUuid}/hosts
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/volumes/961e87cd9adc335eb4227d98cb835e3c/hosts
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 4.5.0 |
| hostUuid (可选) | String | body | 物理机UUID |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DetachDataVolumeFromHostAction action = new DetachDataVolumeFromHostAction();
action.volumeUuid = "961e87cd9adc335eb4227d98cb835e3c";
action.hostUuid = "aab7fb71a8eb3082b11f0fe1eb6fd181";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachDataVolumeFromHostAction.Result res = action.call();
```

 Python SDK

```
DetachDataVolumeFromHostAction action = DetachDataVolumeFromHostAction()
action.volumeUuid = "961e87cd9adc335eb4227d98cb835e3c"
action.hostUuid = "aab7fb71a8eb3082b11f0fe1eb6fd181"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachDataVolumeFromHostAction.Result res = action.call()
```

---

#### 从云盘创建快照(CreateVolumeSnapshot)



##### API请求

 URLs

```
POST zstack/v1/volumes/{volumeUuid}/volume-snapshots
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "snapshot-volume",
"description": "a snapshot for volume"
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
-X POST -d '{"params":{"name":"snapshot-volume","description":"a snapshot for volume"}}' \
http://localhost:8080/zstack/v1/volumes/96971a1cd12f3ebdba54578846992057/volume-snapshots
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 0.6 |
| name | String | body(包含在params结构中) | 快照名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 快照的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源的Uuid |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "ec8f396d8a5d48ce8bd949d469c0be62",
"name": "Snapshot-1",
"description": "create-snapshot-from-volume",
"type": "Hypervisor",
"volumeUuid": "e60a0fb0b75743c1b0fcb017e31db043",
"treeUuid": "b5cf59580ef443c4b7106cf755e6c572",
"parentUuid": "cc0e37297d76486186f0dd2b61ddf4e2",
"primaryStorageUuid": "82280d3f2f01482bbcdfee03599bcad5",
"primaryStorageInstallPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-e60a0fb0b75743c1b0fcb017e31db043/snapshots/ec8f396d8a5d48ce8bd949d469c0be62.qcow2",
"volumeType": "Root",
"format": "qcow2",
"latest": true,
"size": 1.073741824E9,
"state": "Enabled",
"status": "Ready",
"createDate": "Jun 7, 2017 9:20:17 PM",
"lastOpDate": "Jun 7, 2017 9:20:17 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeSnapshotInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| type | String |  | 0.6 |
| volumeUuid | String | 云盘UUID | 0.6 |
| treeUuid | String |  | 0.6 |
| parentUuid | String |  | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| primaryStorageInstallPath | String |  | 0.6 |
| volumeType | String |  | 0.6 |
| format | String |  | 0.6 |
| latest | Boolean |  | 0.6 |
| size | Long |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String |  | 0.6 |



##### SDK示例

 Java SDK

```
CreateVolumeSnapshotAction action = new CreateVolumeSnapshotAction();
action.volumeUuid = "093310638cef494088eac315cf1ff1b1";
action.name = "snapshot-volume";
action.description = "a snapshot for volume";
action.sessionId = "6020beb6826b4bb5a980965b435b2998";
CreateVolumeSnapshotAction.Result res = action.call();
```



Python SDK

```
CreateVolumeSnapshotAction action = CreateVolumeSnapshotAction()
action.volumeUuid = "5321658e475a4a8d9e41eef1186a079b"
action.name = "snapshot-volume"
action.description = "a snapshot for volume"
action.sessionId = "aad13372afb149918537613c50c3f49b"
CreateVolumeSnapshotAction.Result res = action.call()
```

---

#### 查询云盘快照(QueryVolumeSnapshot)



##### API请求

 URLs

```
GET zstack/v1/volume-snapshots
GET zstack/v1/volume-snapshots/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7f983595cc744a14bb0fc9bfdd712e39" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots?q=uuid=a3da945723d44971afded91bf3ebfd4d
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 90e4d7e2760e4f1893b78be27095bb9e" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots/d8713ee3864442de8afc6cd614f51921
```



可查询字段

运行CLI命令行工具，输入`QueryVolumeSnapshot`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "492ebccdeb804e308361b08e4f0e9a7a",
"name": "My Snapshot 2",
"primaryStorageUuid": "/Cloud_ps/rootVolumes/acct-e77f16d460ea46e18262547b56972273/vol-13c66bb52d0949398e520183b917f813/snapshots/2fa6979af5c6479fa98f37d316f44b5f.qcow2",
"volumeType": "Root",
"format": "qcow2",
"latest": false,
"size": 1310720.0,
"state": "Enabled",
"status": "Ready"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| type | String |  | 0.6 |
| volumeUuid | String | 云盘UUID | 0.6 |
| treeUuid | String |  | 0.6 |
| parentUuid | String |  | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| primaryStorageInstallPath | String |  | 0.6 |
| volumeType | String |  | 0.6 |
| format | String |  | 0.6 |
| latest | Boolean |  | 0.6 |
| size | Long |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String |  | 0.6 |



##### SDK示例

 Java SDK

```
QueryVolumeSnapshotAction action = new QueryVolumeSnapshotAction();
action.conditions = asList("uuid=d8722eb3601448dcbbd9f4b5a93ceb0e");
action.sessionId = "007c535099cc4f2eaab878d021a9d89a";
QueryVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
QueryVolumeSnapshotAction action = QueryVolumeSnapshotAction()
action.conditions = ["uuid=b64521c0da3a462da02687c4bee1a646"]
action.sessionId = "ecd0d0d0ccbc4be9a2c42a7d7b05d924"
QueryVolumeSnapshotAction.Result res = action.call()
```

---

#### 查询快照树(QueryVolumeSnapshotTree)



##### API请求

 URLs

```
GET zstack/v1/volume-snapshots/trees
GET zstack/v1/volume-snapshots/trees/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 6765993e28b6428fa5715c69c93962b2" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots/trees?q=uuid=5ef4209325014bee8b2609e5f2fa3857
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 31697ae56f274658a261b666089f3891" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots/trees/60a48ac22a474922bd4e18f4a16cff6d
```



可查询字段

运行CLI命令行工具，输入`QueryVolumeSnapshotTree`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

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



##### SDK示例

 Java SDK

```
QueryVolumeSnapshotTreeAction action = new QueryVolumeSnapshotTreeAction();
action.conditions = asList("uuid=f8b757fa8d354157aa83712be91c391c");
action.sessionId = "5a9d257d977543efb617d3a4619e9e10";
QueryVolumeSnapshotTreeAction.Result res = action.call();
```

 Python SDK

```
QueryVolumeSnapshotTreeAction action = QueryVolumeSnapshotTreeAction()
action.conditions = ["uuid=e7a8480f474e42aeabb8e9a5c74b2c3b"]
action.sessionId = "43ac6f171e87458096fda52a497a21b2"
QueryVolumeSnapshotTreeAction.Result res = action.call()
```

---

#### 更新云盘快照信息(UpdateVolumeSnapshot)



##### API请求

 URLs

```
PUT zstack/v1/volume-snapshots/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateVolumeSnapshot": {
"name": "My Snapshot"
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
-X PUT -d '{"updateVolumeSnapshot":{"name":"My Snapshot"}}' \
http://localhost:8080/zstack/v1/volume-snapshots/df56acfb356130869fc80dbf80cf3172/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 快照的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateVolumeSnapshot**结构中) | 快照的新名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateVolumeSnapshot**结构中) | 快照的新详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "a50e9be4b0eb492aa1cbb767e38ee45e",
"name": "My Snapshot 2",
"primaryStorageUuid": "/Cloud_ps/rootVolumes/acct-e77f16d460ea46e18262547b56972273/vol-13c66bb52d0949398e520183b917f813/snapshots/2fa6979af5c6479fa98f37d316f44b5f.qcow2",
"volumeType": "Root",
"format": "qcow2",
"latest": false,
"size": 1310720.0,
"state": "Enabled",
"status": "Ready"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | VolumeSnapshotInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| type | String |  | 0.6 |
| volumeUuid | String | 云盘UUID | 0.6 |
| treeUuid | String |  | 0.6 |
| parentUuid | String |  | 0.6 |
| primaryStorageUuid | String | 主存储UUID | 0.6 |
| primaryStorageInstallPath | String |  | 0.6 |
| volumeType | String |  | 0.6 |
| format | String |  | 0.6 |
| latest | Boolean |  | 0.6 |
| size | Long |  | 0.6 |
| state | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String |  | 0.6 |



##### SDK示例

 Java SDK

```
UpdateVolumeSnapshotAction action = new UpdateVolumeSnapshotAction();
action.uuid = "b4eadb8d20cc41e8a575c82553ec912c";
action.name = "My Snapshot";
action.sessionId = "94fb0621bb4647bb989864c845c6c22e";
UpdateVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
UpdateVolumeSnapshotAction action = UpdateVolumeSnapshotAction()
action.uuid = "e6ded156a6f440889b258d0738c517b4"
action.name = "My Snapshot"
action.sessionId = "36d4adc78a9d4c73b141095efa8c78bc"
UpdateVolumeSnapshotAction.Result res = action.call()
```

---

#### 删除云盘快照(DeleteVolumeSnapshot)



##### API请求

 URLs

```
DELETE zstack/v1/volume-snapshots/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/volume-snapshots/0e9ba69c3d0e3bf4b20dd7988b353505
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
| direction (可选) | String | body | 数据合并方向。pull：向前合并；commit：向后合并；auto：自动选择最优合并方向 |  | 5.4.0 |
| scope (可选) | String | body | 数据合并方式。single：仅合并单个快照；chain：合并整个快照链；auto：自动判断最佳合并范围 |  | 5.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



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



##### SDK示例

 Java SDK

```
DeleteVolumeSnapshotAction action = new DeleteVolumeSnapshotAction();
action.uuid = "0e9ba69c3d0e3bf4b20dd7988b353505";
action.direction = "auto";
action.scope = "chain";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
DeleteVolumeSnapshotAction action = DeleteVolumeSnapshotAction()
action.uuid = "0e9ba69c3d0e3bf4b20dd7988b353505"
action.direction = "auto"
action.scope = "chain"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVolumeSnapshotAction.Result res = action.call()
```

---

#### 将云盘回滚至指定快照(RevertVolumeFromSnapshot)



##### API请求

URLs

```
PUT zstack/v1/volume-snapshots/{uuid}/actions
```

Headers

```
Authorization: OAuth the-session-uuid
```

Body

```
{
"revertVolumeFromSnapshot": {},
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"revertVolumeFromSnapshot":{}}' \
http://localhost:8080/zstack/v1/volume-snapshots/eba17ed729a03a76afb168cf41373daf/actions
```

参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 快照的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



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



##### SDK示例

 Java SDK

```
RevertVolumeFromSnapshotAction action = new RevertVolumeFromSnapshotAction();
action.uuid = "34a3c300041249d098187c2120ab0097";
action.sessionId = "a5e0822600934b84ba8bb8fa0af5bce0";
RevertVolumeFromSnapshotAction.Result res = action.call();
```

 Python SDK

```
RevertVolumeFromSnapshotAction action = RevertVolumeFromSnapshotAction()
action.uuid = "f3728a6d5e324c41a98b12c067db105b"
action.sessionId = "63799306e40e486c94d31dc2fcbbee6a"
RevertVolumeFromSnapshotAction.Result res = action.call()
```

---

#### 获取快照容量(GetVolumeSnapshotSize)



##### API请求

 URLs

```
PUT zstack/v1/volume-snapshots/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "getVolumeSnapshotSize": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"getVolumeSnapshotSize":{}}' http://localhost:8080/zstack/v1/volume-snapshots/3bd9e0b3e39a3abe8d39ccbe9031c723/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 快照UUID |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.5.0 |



##### API返回

 返回示例

```
{
  "size": 1.073741824E11,
  "actualSize": 5.36870912E10
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| size | Long | 快照容量 | 3.5.0 |
| actualSize | Long | 快照实际容量 | 3.5.0 |
| success | boolean |  | 3.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| error | ErrorCode | 详情参考[error] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |



##### SDK示例

 Java SDK

```
GetVolumeSnapshotSizeAction action = new GetVolumeSnapshotSizeAction();
action.uuid = "3bd9e0b3e39a3abe8d39ccbe9031c723";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVolumeSnapshotSizeAction.Result res = action.call();
```

 Python SDK

```
GetVolumeSnapshotSizeAction action = GetVolumeSnapshotSizeAction()
action.uuid = "3bd9e0b3e39a3abe8d39ccbe9031c723"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVolumeSnapshotSizeAction.Result res = action.call()
```

---

#### 快照瘦身（ShrinkVolumeSnapshot）



##### API请求

 URLs

```
PUT zstack/v1/volume-snapshots/shrink/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "shrinkVolumeSnapshot": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"shrinkVolumeSnapshot":{}}' http://localhost:8080/zstack/v1/volume-snapshots/shrink/1ab2f9f306dd3ab4adbaf78491be0911/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.10.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.10.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.10.0 |



##### API返回

 返回示例

```
{
  "shrinkResult": {
    "oldSize": 2.147483648E9,
    "size": 1.073741824E9,
    "deltaSize": 1.073741824E9
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.10.0 |
| shrinkResult | ShrinkResult | 详情参考[shrinkResult] | 3.10.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.10.0 |
| description | String | 错误的概要描述 | 3.10.0 |
| details | String | 错误的详细信息 | 3.10.0 |
| elaboration | String | 保留字段，默认为null | 3.10.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.10.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.10.0 |

 #shrinkResult

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| oldSize | long |  | 3.10.0 |
| size | long |  | 3.10.0 |
| deltaSize | long |  | 3.10.0 |



##### SDK示例

 Java SDK

```
ShrinkVolumeSnapshotAction action = new ShrinkVolumeSnapshotAction();
action.uuid = "1ab2f9f306dd3ab4adbaf78491be0911";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ShrinkVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
ShrinkVolumeSnapshotAction action = ShrinkVolumeSnapshotAction()
action.uuid = "1ab2f9f306dd3ab4adbaf78491be0911"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ShrinkVolumeSnapshotAction.Result res = action.call()
```

---

#### 扁平合并云盘(FlattenVolume)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "flattenVolume": {
    "dryRun": false
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
-X PUT -d '{"flattenVolume":{"dryRun":false}}' http://localhost:8080/zstack/v1/volumes/df7876b9124d3fcb92528cf774fa6de1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.0 |
| dryRun (可选) | boolean | body(包含在**flattenVolume**结构中) | 试运行，可用于预测数据用量 |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "13ff90c5fcd43587915817a65cc87af3",
    "name": "test-volume",
    "primaryStorageUuid": "55db0399efaf35479125967b5bd6e8c7",
    "vmInstanceUuid": "c3f9c1907206307a896db9a94a35c29d",
    "diskOfferingUuid": "d4d9b3afe4993bfbba991b4414295a65",
    "rootImageUuid": "7bcdd79e0ed1347f9a2d4ea043bb9f37",
    "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-13ff90c5fcd43587915817a65cc87af3/13ff90c5fcd43587915817a65cc87af3.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 107374182400,
    "actualSize": 21474836480,
    "deviceId": 0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| inventory | VolumeInventory | 详情参考[inventory] | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.0 |
| name | String | 资源名称 | 4.7.0 |
| description | String | 资源的详细描述 | 4.7.0 |
| primaryStorageUuid | String | 主存储UUID | 4.7.0 |
| vmInstanceUuid | String | 云主机UUID | 4.7.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.7.0 |
| rootImageUuid | String |  | 4.7.0 |
| installPath | String |  | 4.7.0 |
| type | String |  | 4.7.0 |
| format | String |  | 4.7.0 |
| size | Long |  | 4.7.0 |
| actualSize | Long |  | 4.7.0 |
| deviceId | Integer |  | 4.7.0 |
| state | String |  | 4.7.0 |
| status | String |  | 4.7.0 |
| createDate | Timestamp | 创建时间 | 4.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.0 |
| isShareable | Boolean |  | 4.7.0 |
| volumeQos | String |  | 4.7.0 |
| lastDetachDate | Timestamp |  | 4.7.0 |
| lastVmInstanceUuid | String |  | 4.7.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.0 |
| description | String | 错误的概要描述 | 4.7.0 |
| details | String | 错误的详细信息 | 4.7.0 |
| elaboration | String | 保留字段，默认为null | 4.7.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.0 |



##### SDK示例

 Java SDK

```
FlattenVolumeAction action = new FlattenVolumeAction();
action.uuid = "df7876b9124d3fcb92528cf774fa6de1";
action.dryRun = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
FlattenVolumeAction.Result res = action.call();
```

 Python SDK

```
FlattenVolumeAction action = FlattenVolumeAction()
action.uuid = "df7876b9124d3fcb92528cf774fa6de1"
action.dryRun = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
FlattenVolumeAction.Result res = action.call()
```

---

### 镜像相关接口

---

#### 添加镜像(AddImage)



向镜像服务器添加镜像。

##### API请求

 URLs

```
POST zstack/v1/images
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "TinyLinux",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "architecture": "x86_64",
    "system": false,
    "format": "qcow2",
    "platform": "Linux",
    "backupStorageUuids": [
      "b8fc9c1c027438c28d36af24eca06595"
    ],
    "virtio": true
  },
  "systemTags": [],
  "userTags": []
}

```


> **注意:** 说明: 上述示例中**userTags**字段可以省略。列出是为了表示body中可以包含这个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d'{"params":{"name":"TinyLinux","url":"http://192.168.1.20/share/images/tinylinux.qcow2","mediaType":"RootVolumeTemplate","architecture":"x86_64","system":false,"format":"qcow2","platform":"Linux","backupStorageUuids":["b8fc9c1c027438c28d36af24eca06595"],"virtio":false}}' http://localhost:8080/zstack/v1/images
```

 参数列表
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 镜像名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 镜像的详细描述 |  | 0.6 |
| url | String | body(包含在params结构中) | 被添加镜像的URL地址 |  | 0.6 |
| mediaType (可选) | String | body(包含在params结构中) | 镜像的类型 | RootVolumeTemplate ISO DataVolumeTemplate | 0.6 |
| guestOsType (可选) | String | body(包含在params结构中) | 镜像对应客户机操作系统的类型 |  | 0.6 |
| system (可选) | boolean | body(包含在params结构中) | 是否系统镜像 |  | 0.6 |
| format (可选) | String | body(包含在params结构中) | 镜像的格式，比如：raw |  | 4.0.0 |
| platform (可选) | String | body(包含在params结构中) | 镜像的系统平台 | Linux Windows WindowsVirtio Other Paravirtualization | 0.6 |
| backupStorageUuids | List | body(包含在params结构中) | 指定添加镜像的镜像服务器UUID列表 |  | 0.6 |
| type (可选) | String | body(包含在params结构中) | 内部使用字段 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID。若指定，镜像会使用该字段值作为UUID。 |  | 0.6 |
| architecture (可选) | String | body(包含在params结构中) |  | x86_64 aarch64 mips64el loongarch64 | 4.0.0 |
| tagUuids (可选) | List | body(包含在params结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "1eb26d06364036b7860d2b7dbb462b8c",
    "name": "TinyLinux",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "architecture": "x86_64",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0.0,
        "imageUuid": "1eb26d06364036b7860d2b7dbb462b8c",
        "backupStorageUuid": "902dcc8d1015318fb4903df890765c4d",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 4.0.0 |
| status | String | 镜像的就绪状态 | 4.0.0 |
| size | Long | 镜像大小 | 4.0.0 |
| actualSize | Long | 镜像真实容量 | 4.0.0 |
| md5Sum | String | 镜像的md5值 | 4.0.0 |
| url | String | 镜像的URL地址 | 4.0.0 |
| mediaType | String | 镜像的类型 | 4.0.0 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 4.0.0 |
| type | String | 内部使用字段 | 4.0.0 |
| platform | String | 镜像的系统平台 | 4.0.0 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 4.0.0 |
| system | Boolean | 标识是否为系统镜像 | 4.0.0 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 4.0.0 |
| exportUrl | String | 导出镜像的url | 4.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 4.0.0 |
| status | String | 镜像就绪状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
AddImageAction action = new AddImageAction();
action.name = "TinyLinux";
action.url = "http://192.168.1.20/share/images/tinylinux.qcow2";
action.mediaType = "RootVolumeTemplate";
action.architecture = "x86_64";
action.system = false;
action.format = "qcow2";
action.platform = "Linux";
action.backupStorageUuids = asList("b8fc9c1c027438c28d36af24eca06595");
action.virtio = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddImageAction.Result res = action.call();
```

 Python SDK

```
AddImageAction action = AddImageAction()
action.name = "TinyLinux"
action.url = "http://192.168.1.20/share/images/tinylinux.qcow2"
action.mediaType = "RootVolumeTemplate"
action.architecture = "x86_64"
action.system = false
action.format = "qcow2"
action.platform = "Linux"
action.backupStorageUuids = [b8fc9c1c027438c28d36af24eca06595]
action.virtio = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddImageAction.Result res = action.call()
```

---

#### 删除镜像(DeleteImage)



##### API请求

 URLs

```
DELETE zstack/v1/images/{uuid}?backupStorageUuids={backupStorageUuids}&deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "backupStorageUuids": [
      "2499cd48fc33450a8737efff67ccb920"
    ],
    "deleteMode": "Permissive"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth fb8be86094544022ad3e3abd0027b420" \
-X DELETE http://localhost:8080/zstack/v1/images/f92e888c970c4f739d91e59f6dd94b1e?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 镜像的UUID，唯一标示该子资源 |  | 0.6 |
| backupStorageUuids (可选) | List | body | 镜像服务器UUID列表 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式(Permissive 或者 Enforcing, 默认 Permissive) |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteImageAction action = new DeleteImageAction();
action.uuid = "22850dff70934ffdaa839a950cb5a470";
action.backupStorageUuids = asList("32974c8955cd4ed79d13458e41490883");
action.deleteMode = "Permissive";
action.sessionId = "517a458b87ca49cf80bf26e6000bc611";
DeleteImageAction.Result res = action.call();
```

 Python SDK

```
DeleteImageAction action = DeleteImageAction()
action.uuid = "5bbd892e048b48b283e5d2f49a6a4e94"
action.backupStorageUuids = [fd127191bf504e3daf5292800c1ea2d8]
action.deleteMode = "Permissive"
action.sessionId = "cf5cf2689379496aaa4449fd14dc8330"
DeleteImageAction.Result res = action.call()
```

---

#### 彻底删除镜像(ExpungeImage)



##### API请求

 URLs

```
PUT zstack/v1/images/{imageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "expungeImage": {
    "backupStorageUuids": [
      "ef3843bdde80427e9c8c0d4f05aa5cde"
    ]
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
-X PUT -d '{"expungeImage":{"backupStorageUuids":["3be136c8d8b8323bb94b8464aae4b0a7"]}}' \
http://localhost:8080/zstack/v1/images/4dcddfadcd113b5f89f181c4f4a080c7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| Uuid | String | body(包含在params结构中) | 资源的UUID，唯一标示该资源 |  | 0.6 |
| imageUuid | String | url | 镜像UUID |  | 0.6 |
| backupStorageUuids (可选) | List | body(包含在params结构中) | 镜像服务器UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
ExpungeImageAction action = new ExpungeImageAction();
action.imageUuid = "ddb63556ae714ee78bf468d5067beedd";
action.backupStorageUuids = asList("6f21a1307fb24117a25ed907c00a3e47");
action.sessionId = "b12c879167d3459a844b6ac1f8ff3b74";
ExpungeImageAction.Result res = action.call();
```

 Python SDK

```
ExpungeImageAction action = ExpungeImageAction()
action.imageUuid = "59fcc3775336469facfd93c5c16bdb2d"
action.backupStorageUuids = [2dfcf2dfadb14022ac09172a82fb3aac]
action.sessionId = "11fe68c420514cb0a8d8e1d1c5755d11"
ExpungeImageAction.Result res = action.call()
```

---

#### 查询镜像(QueryImage)



##### API请求

 URLs

```
GET zstack/v1/images
GET zstack/v1/images/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth ecf1dc42b51d4c7c8f814bd10ac0ba79" \
-X GET http://localhost:8080/zstack/v1/images?q=uuid=0538611eb03a48e0bbcfd08e528f0aa1
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 69e2477d74ae4b53a19b21ee6e88f9da" \
-X GET http://localhost:8080/zstack/v1/images/21897673f8274d319c4aeba92e8e4c73
```



可查询字段

运行CLI命令行工具，输入`QueryImage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
    "inventories": [
        {
            "actualSize": 7995392,
            "backupStorageRefs": [
                {
                    "backupStorageUuid": "bbc730b63081460198c1c7cb63025255",
                    "createDate": "Mar 10, 2018 2:35:09 PM",
                    "imageUuid": "2402b660b6f1582bb65246597b2f47f2",
                    "installPath": "zstore://2402b660b6f1582bb65246597b2f47f2/2ab567b512cc696f2207cf0e3260baa4982e1c02",
                    "lastOpDate": "Mar 10, 2018 2:35:09 PM",
                    "status": "Ready"
                }
            ],
            "createDate": "Mar 10, 2018 2:35:09 PM",
            "description": "",
            "format": "qcow2",
            "lastOpDate": "Mar 10, 2018 2:35:10 PM",
            "md5Sum": "f0fde821df71aaec63063bef1fb0a46a231e5a3fbb37ed5671eabee7563eb3f8",
            "mediaType": "RootVolumeTemplate",
            "name": "Image-1",
            "platform": "Linux",
            "size": 12682240,
            "state": "Enabled",
            "status": "Ready",
            "system": false,
            "type": "zstack",
            "url": "file:///opt/zstack-dvd/zstack-image-1.4.qcow2",
            "uuid": "2402b660b6f1582bb65246597b2f47f2"
        }
    ],
    "success": true
}
```



##### SDK示例

 Java SDK

```
QueryImageAction action = new QueryImageAction();
action.conditions = asList("uuid=02928c0d94a847b0b785bc9830f931c6");
action.sessionId = "512102357b3e44c7a1704240176c8661";
QueryImageAction.Result res = action.call();
```

 Python SDK

```
QueryImageAction action = QueryImageAction()
action.conditions = ["uuid=4d4b95071b09499e9e15a206714d1586"]
action.sessionId = "893c8fe44f5b4b799b095c54ee7ae075"
QueryImageAction.Result res = action.call()
```

---

#### 恢复镜像(RecoverImage)



恢复被删除（但未彻底删除）的镜像。

##### API请求

 URLs

```
PUT zstack/v1/images/{imageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverImage": {
    "backupStorageUuids": [
      "b63989ade2194ce8b8f1823083395681"
    ]
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 5ab0e924388a44d7aa96b9e7df9d8df3" \
-X PUT -d '{"recoverImage":{"backupStorageUuids":["29849ef8f0fe3abeb8fff5e6d947d002"]}}' \
http://localhost:8080/zstack/v1/images/e55bb56eee93338cad8d7d1048a6b0c3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageUuid | String | url | 镜像UUID |  | 0.6 |
| backupStorageUuids (可选) | List | body(包含在params结构中) | 镜像服务器UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c019173f2b5742868058049be43033a1",
    "name": "TinyLinux",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "c019173f2b5742868058049be43033a1",
        "backupStorageUuid": "609d29fb59ee414f90cedbc3a71038c6",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | Boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 0.6 |
| status | String | 镜像的就绪状态 | 0.6 |
| size | Long | 镜像大小 | 0.6 |
| actualSize | Long | 镜像真实容量 | 0.6 |
| md5Sum | String | 镜像的md5值 | 0.6 |
| url | String | 镜像的URL地址 | 0.6 |
| mediaType | String | 镜像的类型 | 0.6 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 0.6 |
| type | String | 内部使用字段 | 0.6 |
| platform | String | 镜像的系统平台 | 0.6 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 0.6 |
| system | Boolean | 标识是否为系统镜像 | 0.6 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 0.6 |
| exportUrl | String | 导出镜像的url | 0.6 |
| exportMd5Sum | String | 导出镜像的md5值 | 0.6 |
| status | String | 镜像就绪状态 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
RecoverImageAction action = new RecoverImageAction();
action.imageUuid = "3220b5ea2ae24883a4eb847634e3e349";
action.backupStorageUuids = asList("ad4dcd853b894362bfd18c06779ed758");
action.sessionId = "66ba41da8526424d9ab70ed0072b8d22";
RecoverImageAction.Result res = action.call();
```

 Python SDK

```
RecoverImageAction action = RecoverImageAction()
action.imageUuid = "7f8bb365b8d3413ab5d09f6d381552c3"
action.backupStorageUuids = [14d99a1ade5a431ea254902c808d7319]
action.sessionId = "044d56deddd849a092ff02ae54386cf1"
RecoverImageAction.Result res = action.call()
```

---

#### 修改镜像状态(ChangeImageState)



##### API请求

 URLs

```
PUT zstack/v1/images/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeImageState": {
    "stateEvent": "disable"
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
-X PUT -d '{"changeImageState":{"stateEvent":"disable"}}' \
http://localhost:8080/zstack/v1/images/5a4e7e1f1a653505925da09d0a64936b/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 镜像的UUID，唯一标示该镜像 |  | 0.6 |
| stateEvent | String | body(包含在params结构中) | 镜像的状态 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e4891e6ef3a64ea08ce91ab379a5c856",
    "name": "TinyLinux",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "e4891e6ef3a64ea08ce91ab379a5c856",
        "backupStorageUuid": "8bf8f2f17e7c4cca8d684ae5d89eee9e",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 0.6 |
| status | String | 镜像的就绪状态 | 0.6 |
| size | Long | 镜像大小 | 0.6 |
| actualSize | Long | 镜像真实容量 | 0.6 |
| md5Sum | String | 镜像的md5值 | 0.6 |
| url | String | 镜像的URL地址 | 0.6 |
| mediaType | String | 镜像的类型 | 0.6 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 0.6 |
| type | String | 内部使用字段 | 0.6 |
| platform | String | 镜像的系统平台 | 0.6 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 0.6 |
| system | Boolean | 标识是否为系统镜像 | 0.6 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 0.6 |
| exportUrl | String | 导出镜像的url | 0.6 |
| exportMd5Sum | String | 导出镜像的md5值 | 0.6 |
| status | String | 镜像就绪状态 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeImageStateAction action = new ChangeImageStateAction();
action.uuid = "d6d3cf3feace41ae9fe519fcfdf337e1";
action.stateEvent = "disable";
action.sessionId = "e510317dfbf64f7c9423652cefba6583";
ChangeImageStateAction.Result res = action.call();
```

 Python SDK

```
ChangeImageStateAction action = ChangeImageStateAction()
action.uuid = "d33d29f7695a4376a9a37a094f89d9f2"
action.stateEvent = "disable"
action.sessionId = "ae3587d0cbf844c2921a97798d4dc37b"
ChangeImageStateAction.Result res = action.call()
```

---

#### 更新镜像信息(UpdateImage)



##### API请求

 URLs

```
PUT zstack/v1/images/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateImage": {
    "platform": "Windows",
    "virtio": false
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
-X PUT -d '{"updateImage":{"platform":"Windows","virtio":false}}' http://localhost:8080/zstack/v1/images/38549d5d5a3d3c5caefc18d8a9e0aa13/actions
```

 参数列表
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 镜像的UUID，唯一标示该镜像 |  | 0.6 |
| name (可选) | String | body(包含在params结构中) | 镜像名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 镜像的详细描述 |  | 0.6 |
| guestOsType (可选) | String | body(包含在params结构中) | 镜像对应的客户机操作系统类型 |  | 0.6 |
| mediaType (可选) | String | body(包含在params结构中) | 镜像的类型 | RootVolumeTemplate DataVolumeTemplate ISO | 0.6 |
| format (可选) | String | body(包含在params结构中) | 镜像的格式 | raw qcow2 iso | 0.6 |
| system (可选) | Boolean | body(包含在params结构中) | 标识是否为系统镜像 |  | 0.6 |
| platform (可选) | String | body(包含在params结构中) | 镜像的系统平台 | Linux Windows WindowsVirtio Other Paravirtualization | 0.6 |
| architecture（可选） | String | body(包含在**updateImage**结构中) |  | x86_64 aarch64 mips64el loongarch64 | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| virtio (可选) | Boolean | body(包含在**updateImage**结构中) |  |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "fadea0efc22e3e6fa43f537f1af6ee6b",
    "name": "TinyLinux",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Windows",
    "architecture": "x86_64",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0.0,
        "imageUuid": "fadea0efc22e3e6fa43f537f1af6ee6b",
        "backupStorageUuid": "b94ff32725d133fea53e8ada5ea7f0fc",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 4.0.0 |
| status | String | 镜像的就绪状态 | 4.0.0 |
| size | Long | 镜像大小 | 4.0.0 |
| actualSize | Long | 镜像真实容量 | 4.0.0 |
| md5Sum | String | 镜像的md5值 | 4.0.0 |
| url | String | 镜像的URL地址 | 4.0.0 |
| mediaType | String | 镜像的类型 | 4.0.0 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 4.0.0 |
| type | String | 内部使用字段 | 4.0.0 |
| platform | String | 镜像的系统平台 | 4.0.0 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 4.0.0 |
| system | Boolean | 标识是否为系统镜像 | 4.0.0 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 4.0.0 |
| exportUrl | String | 导出镜像的url | 4.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 4.0.0 |
| status | String | 镜像就绪状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateImageAction action = new UpdateImageAction();
action.uuid = "38549d5d5a3d3c5caefc18d8a9e0aa13";
action.platform = "Windows";
action.virtio = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateImageAction.Result res = action.call();
```

 Python SDK

```
UpdateImageAction action = UpdateImageAction()
action.uuid = "38549d5d5a3d3c5caefc18d8a9e0aa13"
action.platform = "Windows"
action.virtio = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateImageAction.Result res = action.call()
```

---

#### 刷新镜像大小信息(SyncImageSize)



##### API请求

 URLs

```
PUT zstack/v1/images/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncImageSize": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3a29210c52824730884918d670745453" \
-X PUT -d '{"syncImageSize":{}}' \
http://localhost:8080/zstack/v1/images/7d0fb69a716330bba16a3ee557ee0ab2/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 镜像的UUID，唯一标示该镜像 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a5288a2598074daabb0450db1eaf0e69",
    "name": "TinyLinux",
    "size": 2.097152E8,
    "actualSize": 2329057.0,
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "a5288a2598074daabb0450db1eaf0e69",
        "backupStorageUuid": "1a917c0b47c6475a996ed678f230419d",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | Boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 0.6 |
| status | String | 镜像的就绪状态 | 0.6 |
| size | Long | 镜像大小 | 0.6 |
| actualSize | Long | 镜像真实容量 | 0.6 |
| md5Sum | String | 镜像的md5值 | 0.6 |
| url | String | 镜像的URL地址 | 0.6 |
| mediaType | String | 镜像的类型 | 0.6 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 0.6 |
| type | String | 内部使用字段 | 0.6 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| platform | String | 镜像的系统平台 | 0.6 |
| format | String | 镜像的格式，比如：raw | 0.6 |
| system | Boolean | 标识是否为系统镜像 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String |  | 0.6 |
| exportUrl | String |  | 0.6 |
| exportMd5Sum | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
SyncImageSizeAction action = new SyncImageSizeAction();
action.uuid = "46638764dfcb47b2bf916bce60d50f9f";
action.sessionId = "557e2989aa7d4178861c4fcacb85e40c";
SyncImageSizeAction.Result res = action.call();
```

 Python SDK

```
SyncImageSizeAction action = SyncImageSizeAction()
action.uuid = "0073e30d1fd84cd0b47896e5bb22b205"
action.sessionId = "e6896c8311824d718e330908ec04d9a6"
SyncImageSizeAction.Result res = action.call()
```

---

#### 删除镜像包(DeleteImagePackage)



##### API请求

 URLs

```
DELETE zstack/v1/image-packages/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/image-packages/e7660c815f483befb15905bf6c776781?
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.4.6 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing | 4.4.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteImagePackageAction action = new DeleteImagePackageAction();
action.uuid = "e7660c815f483befb15905bf6c776781";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteImagePackageAction.Result res = action.call();
```

 Python SDK

```
DeleteImagePackageAction action = DeleteImagePackageAction()
action.uuid = "e7660c815f483befb15905bf6c776781"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteImagePackageAction.Result res = action.call()
```

---

#### 更新镜像包信息(UpdateImagePackage)



##### API请求

 URLs

```
PUT zstack/v1/image-packages/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateImagePackage": {
    "name": "ova-update",
    "description": "description-update"
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
-X GET http://localhost:8080/zstack/v1/image-packages/eeed157556d2328c9c3aeec71ab75463
```

   参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.4.6 |
| name (可选) | String | body(包含在`updateImagePackage`结构中) | 资源名称 |  | 4.4.6 |
| description (可选) | String | body(包含在`updateImagePackage`结构中) | 资源的详细描述 |  | 4.4.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.4.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.4.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ecdea1f236a13e74a5712edabb4cfe9e",
    "name": "ova",
    "description": "description",
    "vmUuid": "21c4183acbf737128aba034313e1f909",
    "backupStorageUuid": "99630920a09138ab93823380286efc57",
    "state": "Exported",
    "exportUrl": "http://bs-host-name/path/to/ova.ova",
    "md5Sum": "sampleMd5Sum",
    "format": "OVA",
    "size": 1.073741824E10,
    "createDate": "May 10, 2022 5:27:16 AM",
    "lastOpDate": "May 10, 2022 5:27:16 AM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.6 |
| inventory | ImagePackageInventory | 详情参考[inventory] | 4.4.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.6 |
| description | String | 错误的概要描述 | 4.4.6 |
| details | String | 错误的详细信息 | 4.4.6 |
| elaboration | String | 保留字段，默认为null | 4.4.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| vmUuid | String | 源虚拟机UUID | 4.4.6 |
| backupStorageUuid | String | 镜像包文件位于的镜像存储UUID | 4.4.6 |
| exportUrl | String | 下载地址 | 4.4.6 |
| md5Sum | String | 镜像包文件MD5校验码 | 4.4.6 |
| format | String | 镜像包文件格式 | 4.4.6 |
| size | Long | 镜像包文件大小 | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| state | ImagePackageState | 详情参考[state] | 4.4.6 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Exporting | ImagePackageState | 导出中 | 4.4.6 |
| Exported | ImagePackageState | 已导出 | 4.4.6 |



##### SDK示例

 Java SDK

```
QueryImagePackageAction action = new QueryImagePackageAction();
action.conditions = asList("uuid=5319396fe8f0393d998ac6c0939e780e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryImagePackageAction.Result res = action.call();
```

 Python SDK

```
QueryImagePackageAction action = QueryImagePackageAction()
action.conditions = ["uuid=99435bfd7903372289db27c8a2b1038c"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryImagePackageAction.Result res = action.call()
```

---

#### 查询镜像包(QueryImagePackage)



##### API请求

 URLs

```
GET zstack/v1/image-packages
```


```
GET zstack/v1/image-packages/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/image-packages?q=uuid=7cd2f1b456ce3045b78d3c1eb58cc03d
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/image-packages/1c57c91becf431f3b098800fc900c708
```



可查询字段

运行CLI命令行工具，输入`QueryImagePackage`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "e97e03503a5d3bf19a23f91c9a79e009",
      "name": "ova",
      "description": "description",
      "vmUuid": "b3da643979eb3452abbeb978208cb672",
      "backupStorageUuid": "6185f4e18a993ece84a06ec8c469b530",
      "state": "Exported",
      "exportUrl": "http://bs-host-name/path/to/ova.ova",
      "md5Sum": "sampleMd5Sum",
      "format": "OVA",
      "size": 1.073741824E10,
      "createDate": "May 10, 2022 5:26:20 AM",
      "lastOpDate": "May 10, 2022 5:26:20 AM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.4.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.6 |
| inventories | List | 详情参考[inventories] | 4.4.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.6 |
| description | String | 错误的概要描述 | 4.4.6 |
| details | String | 错误的详细信息 | 4.4.6 |
| elaboration | String | 保留字段，默认为null | 4.4.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.6 |
| name | String | 资源名称 | 4.4.6 |
| description | String | 资源的详细描述 | 4.4.6 |
| vmUuid | String | 源虚拟机UUID | 4.4.6 |
| backupStorageUuid | String | 镜像包文件位于的镜像存储UUID | 4.4.6 |
| exportUrl | String | 下载地址 | 4.4.6 |
| md5Sum | String | 镜像包文件MD5校验码 | 4.4.6 |
| format | String | 镜像包文件格式 | 4.4.6 |
| size | Long | 镜像包文件大小 | 4.4.6 |
| createDate | Timestamp | 创建时间 | 4.4.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.6 |
| state | ImagePackageState | 详情参考[state] | 4.4.6 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Exporting | ImagePackageState | 导出中 | 4.4.6 |
| Exported | ImagePackageState | 已导出 | 4.4.6 |



##### SDK示例

 Java SDK

```
QueryImagePackageAction action = new QueryImagePackageAction();
action.conditions = asList("uuid=5319396fe8f0393d998ac6c0939e780e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryImagePackageAction.Result res = action.call();
```

 Python SDK

```
QueryImagePackageAction action = QueryImagePackageAction()
action.conditions = ["uuid=99435bfd7903372289db27c8a2b1038c"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryImagePackageAction.Result res = action.call()
```

---

#### 获取镜像服务器候选(GetCandidateBackupStorageForCreatingImage)



获取创建镜像的镜像服务器候选。

##### API请求

 URLs

```
GET zstack/v1/images/candidate-backup-storage
GET zstack/v1/images/volumes/{volumeUuid}/candidate-backup-storage
GET zstack/v1/images/volume-snapshots/{volumeSnapshotUuid}/candidate-backup-storage
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/images/candidate-backup-storage?volumeUuid=599c51abe51a320d842584f90984a6f4&volumeSnapshotUuid=2deb33e07a90373ea4fa7bd3a0352e0d
```


```
curl -H "Content-Type: application/json" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/images/volumes/599c51abe51a320d842584f90984a6f4/candidate-backup-storage?volumeUuid=599c51abe51a320d842584f90984a6f4&volumeSnapshotUuid=2deb33e07a90373ea4fa7bd3a0352e0d
```


```
curl -H "Content-Type: application/json" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/images/volume-snapshots/2deb33e07a90373ea4fa7bd3a0352e0d/candidate-backup-storage?volumeUuid=599c51abe51a320d842584f90984a6f4&volumeSnapshotUuid=2deb33e07a90373ea4fa7bd3a0352e0d
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid (可选) | String | query | 云盘UUID，注意：volumeUuid 和 volumeSnapshotUuid 二选一 |  | 0.6 |
| volumeSnapshotUuid (可选) | String | query | 云盘快照UUID，注意：volumeUuid 和 volumeSnapshotUuid 二选一 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
GetCandidateBackupStorageForCreatingImageAction action = new GetCandidateBackupStorageForCreatingImageAction();
action.volumeUuid = "77e77779b5f94617af0a8b08b4a50129";
action.volumeSnapshotUuid = "4a5220b5b1f044f8826520eb506d0f98";
action.sessionId = "45b0a87571c2476ba2fe6623daaa79cf";
GetCandidateBackupStorageForCreatingImageAction.Result res = action.call();
```

 Python SDK

```
GetCandidateBackupStorageForCreatingImageAction action = GetCandidateBackupStorageForCreatingImageAction()
action.volumeUuid = "83792660358b4e14b266c5d0920b8b21"
action.volumeSnapshotUuid = "3d562e4325cc42ce8bd3115b48f79ae4"
action.sessionId = "2ba3d333ac284a20adc782766f597330"
GetCandidateBackupStorageForCreatingImageAction.Result res = action.call()
```

---

#### 从根云盘创建根云盘镜像(CreateRootVolumeTemplateFromRootVolume)



##### API请求

 URLs

```
POST zstack/v1/images/root-volume-templates/from/volumes/{rootVolumeUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "My Root Volume Template",
    "backupStorageUuids": [
      "a3cb55d45fb63d1da4911b9d16273a55"
    ],
    "platform": "Linux",
    "system": false
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
-X POST -d '{"params":{"name":"My Root Volume Template","backupStorageUuids":["a3cb55d45fb63d1da4911b9d16273a55"],"platform":"Linux","system":false}}' http://localhost:8080/zstack/v1/images/root-volume-templates/from/volumes/3bfc6f9eaf243299b8515382310be47b
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 根云盘镜像名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 根云盘镜像的详细描述 |  | 0.6 |
| guestOsType (可选) | String | body(包含在params结构中) | 根云盘镜像对应客户机操作系统类型 |  | 0.6 |
| backupStorageUuids (可选) | List | body(包含在params结构中) | 镜像服务器UUID列表 |  | 0.6 |
| rootVolumeUuid | String | body(包含在params结构中) | 根云盘UUID |  | 0.6 |
| platform (可选) | String | body(包含在params结构中) | 根云盘镜像对应的系统平台 | Linux Windows WindowsVirtio Other Paravirtualization | 0.6 |
| system (可选) | boolean | body(包含在params结构中) | 是否系统根云盘镜像 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 根云盘镜像UUID。若指定，根云盘镜像会使用该字段值作为UUID。 |  | 0.6 |
| architecture (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| virtio (可选) | boolean | body(包含在**params**结构中) |  |  | 5.0.0 |


  - 选项格式为：`GuestTools::TOOLS_VERSION`，其中TOOLS_VERSION初值为1.0.0，未来随着工具版本的提升，这个值会随之变化。
  - 例如：`GuestTools::1.0.0`
  - 补充说明：云主机根云盘创建镜像时，从云主机拷贝GuestTools标签值到镜像。
- 补充说明：云主机根云盘创建镜像时，从云主机拷贝GuestTools标签值到镜像。


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cad3a82224363f1e8592a7fd0bf419f9",
    "name": "My Root Volume Template",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "architecture": "x86_64",
    "format": "raw",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "cad3a82224363f1e8592a7fd0bf419f9",
        "backupStorageUuid": "ac938bdf013b3a94acf679955f69f647",
        "installPath": "ceph://zs-images/0cd599ec519249489475112a058bb93a",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 4.0.0 |
| status | String | 镜像的就绪状态 | 4.0.0 |
| size | Long | 镜像大小 | 4.0.0 |
| actualSize | Long | 镜像真实容量 | 4.0.0 |
| md5Sum | String | 镜像的md5值 | 4.0.0 |
| url | String | 镜像的URL地址 | 4.0.0 |
| mediaType | String | 镜像的类型 | 4.0.0 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 4.0.0 |
| type | String | 内部使用字段 | 4.0.0 |
| platform | String | 镜像的系统平台 | 4.0.0 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 4.0.0 |
| system | Boolean | 标识是否为系统镜像 | 4.0.0 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 4.0.0 |
| exportUrl | String | 导出镜像的url | 4.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 4.0.0 |
| status | String | 镜像就绪状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
CreateRootVolumeTemplateFromRootVolumeAction action = new CreateRootVolumeTemplateFromRootVolumeAction();
action.name = "My Root Volume Template";
action.backupStorageUuids = asList("a3cb55d45fb63d1da4911b9d16273a55");
action.rootVolumeUuid = "3bfc6f9eaf243299b8515382310be47b";
action.platform = "Linux";
action.system = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateRootVolumeTemplateFromRootVolumeAction.Result res = action.call();
```

 Python SDK

```
CreateRootVolumeTemplateFromRootVolumeAction action = CreateRootVolumeTemplateFromRootVolumeAction()
action.name = "My Root Volume Template"
action.backupStorageUuids = [a3cb55d45fb63d1da4911b9d16273a55]
action.rootVolumeUuid = "3bfc6f9eaf243299b8515382310be47b"
action.platform = "Linux"
action.system = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateRootVolumeTemplateFromRootVolumeAction.Result res = action.call()
```

---

#### 从云盘快照创建根云盘镜像(CreateRootVolumeTemplateFromVolumeSnapshot)



从云盘快照创建根云盘镜像。

##### API请求

 URLs

```
POST zstack/v1/images/root-volume-templates/from/volume-snapshots/{snapshotUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "My Root Volume Template",
    "backupStorageUuids": [
      "41a9753ebf8031ef83b41ebed095b783"
    ],
    "system": false
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
-X POST -d '{"params":{"name":"My Root Volume Template","backupStorageUuids":["41a9753ebf8031ef83b41ebed095b783"],"system":false}}' \
http://localhost:8080/zstack/v1/images/root-volume-templates/from/volume-snapshots/f31fda67d1be32998cef3f3d9a280e1c
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| snapshotUuid | String | url | 快照UUID |  | 0.6 |
| name | String | body(包含在params结构中) | 根云盘镜像名称 |  | 0.6 |
| description (可选) | String | body(包含在`params`结构中) | 根云盘镜像的详细描述 |  | 0.6 |
| guestOsType (可选) | String | body(包含在`params`结构中) | 根云盘客户机操作系统类型 |  | 0.6 |
| backupStorageUuids | List | body(包含在`params`结构中) | 镜像服务器UUID列表 |  | 0.6 |
| platform (可选) | String | body(包含在`params`结构中) | 根云盘镜像对应的系统平台 | Linux Windows WindowsVirtio Other Paravirtualization | 0.6 |
| system (可选) | boolean | body(包含在`params`结构中) | 是否系统根云盘镜像 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在`params`结构中) | 根云盘镜像UUID。若指定，根云盘镜像会使用该字段值作为UUID。 |  | 0.6 |
| architecture (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| virtio (可选) | boolean | body(包含在**params**结构中) |  |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cfe7842a8c1a30a1870965a7d6133760",
    "name": "My Root Volume Template",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "raw",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "cfe7842a8c1a30a1870965a7d6133760",
        "backupStorageUuid": "f5f16e1618323606a7501b50be251c05",
        "installPath": "ceph://zs-images/0cd599ec519249489475112a058bb93a",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |
| failures | List | 详情参考[failures] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 4.0.0 |
| status | String | 镜像的就绪状态 | 4.0.0 |
| size | Long | 镜像大小 | 4.0.0 |
| actualSize | Long | 镜像真实容量 | 4.0.0 |
| md5Sum | String | 镜像的md5值 | 4.0.0 |
| url | String | 镜像的URL地址 | 4.0.0 |
| mediaType | String | 镜像的类型 | 4.0.0 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 4.0.0 |
| type | String | 内部使用字段 | 4.0.0 |
| platform | String | 镜像的系统平台 | 4.0.0 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 4.0.0 |
| system | Boolean | 标识是否为系统镜像 | 4.0.0 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 4.0.0 |
| exportUrl | String | 导出镜像的url | 4.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 4.0.0 |
| status | String | 镜像就绪状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #failures

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| error | ErrorCode | 详情参考[error] | 0.6 |



##### SDK示例

 Java SDK

```
CreateRootVolumeTemplateFromVolumeSnapshotAction action = new CreateRootVolumeTemplateFromVolumeSnapshotAction();
action.snapshotUuid = "f31fda67d1be32998cef3f3d9a280e1c";
action.name = "My Root Volume Template";
action.backupStorageUuids = asList("41a9753ebf8031ef83b41ebed095b783");
action.system = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateRootVolumeTemplateFromVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
CreateRootVolumeTemplateFromVolumeSnapshotAction action = CreateRootVolumeTemplateFromVolumeSnapshotAction()
action.snapshotUuid = "f31fda67d1be32998cef3f3d9a280e1c"
action.name = "My Root Volume Template"
action.backupStorageUuids = [41a9753ebf8031ef83b41ebed095b783]
action.system = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateRootVolumeTemplateFromVolumeSnapshotAction.Result res = action.call()
```

---

#### 从云盘创建数据云盘镜像(CreateDataVolumeTemplateFromVolume)



##### API请求

 URLs

```
POST zstack/v1/images/data-volume-templates/from/volumes/{volumeUuid}
```

 Hearders

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "My Data Volume Template",
    "backupStorageUuids": [
      "7fd08286addc4b388fac61935892acd7"
    ]
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
-X POST -d '{"params":{"name":"My Data Volume Template","backupStorageUuids":["08e337886b873e8685991d1c7ba4d1ab"]}}' \
http://localhost:8080/zstack/v1/images/data-volume-templates/from/volumes/4c941eb9faeb3976803fce2f3609a475
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 数据云盘镜像名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 数据云盘镜像的详细描述 |  | 0.6 |
| volumeUuid | String | body(包含在params结构中) | 起始云盘UUID |  | 0.6 |
| backupStorageUuids (可选) | List | body(包含在params结构中) | 镜像服务器UUID列表 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 数据云盘镜像UUID。若指定，数据云盘镜像会使用该字段值作为UUID。 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |
| tagUuids（可选） | List | body(包含在params结构中) | 标签UUID |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7247cf569e2b4104832071822cf845c5",
    "name": "My Data Volume Template",
    "mediaType": "DataVolumeTemplate",
    "platform": "Linux",
    "format": "raw",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "7247cf569e2b4104832071822cf845c5",
        "backupStorageUuid": "1b8ab68b7e224a30aa31f00f1db2b5a6",
        "installPath": "ceph://zs-data-volume/0cd599ec519249489475112a058bb93a",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 0.6 |
| status | String | 镜像的就绪状态 | 0.6 |
| size | Long | 镜像大小 | 0.6 |
| actualSize | Long | 镜像真实容量 | 0.6 |
| md5Sum | String | 镜像的md5值 | 0.6 |
| url | String | 镜像的URL地址 | 0.6 |
| mediaType | String | 镜像的类型 | 0.6 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 0.6 |
| type | String | 内部使用字段 | 0.6 |
| platform | String | 镜像的系统平台 | 0.6 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 0.6 |
| system | Boolean | 标识是否为系统镜像 | 0.6 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String |  | 0.6 |
| exportUrl | String |  | 0.6 |
| exportMd5Sum | String |  | 0.6 |
| status | String |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



##### SDK示例

 Java SDK

```
CreateDataVolumeTemplateFromVolumeAction action = new CreateDataVolumeTemplateFromVolumeAction();
action.name = "My Data Volume Template";
action.volumeUuid = "816fb7184ae2498189000d7c0fe66112";
action.backupStorageUuids = asList("26b9d22ef1af4bdb880c3d77a8b1feda");
action.sessionId = "c17620d57db14c9383fbdd2650c80a73";
CreateDataVolumeTemplateFromVolumeAction.Result res = action.call();
```

 Python SDK

```
CreateDataVolumeTemplateFromVolumeAction action = CreateDataVolumeTemplateFromVolumeAction()
action.name = "My Data Volume Template"
action.volumeUuid = "38b644a29b2d498ebc5b50d1d212d904"
action.backupStorageUuids = [1954c35eb0a844d8bb6a64f9963be0f5]
action.sessionId = "343ff2f080414010adb1a35957f8b700"
CreateDataVolumeTemplateFromVolumeAction.Result res = action.call()
```

---

#### 从云盘快照创建数据云盘镜像(CreateDataVolumeTemplateFromVolumeSnapshot)



从指定的云盘快照创建出一个数据云盘镜像。

##### API请求

 URLs

```
POST zstack/v1/images/data-volume-templates/from/volume-snapshots/{snapshotUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "My Data Volume Template",
    "backupStorageUuids": [
      "dbf107f8efa531f786f243850499e010"
    ],
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
-X POST -d '{"params":{"name":"My Data Volume Template","backupStorageUuids":["dbf107f8efa531f786f243850499e010"]}}' \
http://localhost:8080/zstack/v1/images/data-volume-templates/from/volume-snapshots/58976137bf95309692762077cd7077e3
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| snapshotUuid | String | url | 快照UUID |  | 0.6 |
| name | String | body(包含在**params**结构中) | 数据云盘镜像名称 |  | 0.6 |
| description (可选) | String | body(包含在**params**结构中) | 数据云盘镜像的详细描述 |  | 0.6 |
| backupStorageUuids | List | body(包含在**params**结构中) | 镜像服务器UUID列表 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 数据云盘镜像UUID。若指定，数据云盘镜像会使用该字段值作为UUID |  | 0.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "314d80c2feb5352c984b3ffd36108c32",
    "name": "My Data Volume Template",
    "mediaType": "DataVolumeTemplate",
    "platform": "Linux",
    "format": "raw",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "314d80c2feb5352c984b3ffd36108c32",
        "backupStorageUuid": "d861144baadf31e3b1cbbb282242adcf",
        "installPath": "ceph://zs-images/0cd599ec519249489475112a058bb93a",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | ImageInventory | 详情参考[inventory] | 0.6 |
| failures | List | 详情参考[failures] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| state | String | 镜像的启动状态 | 0.6 |
| status | String | 镜像的就绪状态 | 0.6 |
| size | Long | 镜像大小 | 0.6 |
| actualSize | Long | 镜像真实容量 | 0.6 |
| md5Sum | String | 镜像的md5值 | 0.6 |
| url | String | 镜像的URL地址 | 0.6 |
| mediaType | String | 镜像的类型 | 0.6 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 0.6 |
| type | String | 内部使用字段 | 0.6 |
| platform | String | 镜像的系统平台 | 0.6 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 0.6 |
| system | Boolean | 标识是否为系统镜像 | 0.6 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 0.6 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 0.6 |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| installPath | String | 在镜像服务器上的安装路径 | 0.6 |
| exportUrl | String | 导出镜像的url | 0.6 |
| exportMd5Sum | String | 导出镜像的md5值 | 0.6 |
| status | String | 镜像就绪状态 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

 #failures

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| backupStorageUuid | String | 镜像存储UUID | 0.6 |
| error | ErrorCode | 详情参考[error] | 0.6 |



##### SDK示例

 Java SDK

```
CreateDataVolumeTemplateFromVolumeSnapshotAction action = new CreateDataVolumeTemplateFromVolumeSnapshotAction();
action.snapshotUuid = "58976137bf95309692762077cd7077e3";
action.name = "My Data Volume Template";
action.backupStorageUuids = asList("dbf107f8efa531f786f243850499e010");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateDataVolumeTemplateFromVolumeSnapshotAction.Result res = action.call();
```

 Python SDK

```
CreateDataVolumeTemplateFromVolumeSnapshotAction action = CreateDataVolumeTemplateFromVolumeSnapshotAction()
action.snapshotUuid = "58976137bf95309692762077cd7077e3"
action.name = "My Data Volume Template"
action.backupStorageUuids = [dbf107f8efa531f786f243850499e010]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateDataVolumeTemplateFromVolumeSnapshotAction.Result res = action.call()
```

---

#### 获取镜像Qga(GetImageQga)



##### API请求

 URLs

```
GET zstack/v1/images/{uuid}/qga
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e74211f026f741c1898d4377ecf58bd1" \
-X GET http://localhost:8080/zstack/v1/images/34a5bf0cc1014286bd944771c77e1c07/qga
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |



##### API返回

 返回示例

```
{
  "enable": false
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| enable | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
GetImageQgaAction action = new GetImageQgaAction();
action.uuid = "0d7b698ccb174702ae5fa7f15bce8612";
action.sessionId = "3e59586b589d4dbeb0afd078bb887655";
GetImageQgaAction.Result res = action.call();
```

 Python SDK

```
GetImageQgaAction action = GetImageQgaAction()
action.uuid = "82a89e52f2c54fab9b73f095e23ddecb"
action.sessionId = "fc8ea8bda61143cea7db98957ccd026f"
GetImageQgaAction.Result res = action.call()
```

---

#### 设置镜像Qga(SetImageQga)



##### API请求

 URLs

```
PUT zstack/v1/images/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setImageQga": {
    "enable": true
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
-X PUT -d '{"setImageQga":{"enable":true}}' \
http://localhost:8080/zstack/v1/images/f85a077c64883070ac3ba72079edc804/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| enable | boolean | body(包含在**setImageQga**结构中) |  |  | 0.6 |
| systemTags (可选) | List | body |  |  | 0.6 |
| userTags (可选) | List | body |  |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
SetImageQgaAction action = new SetImageQgaAction();
action.uuid = "0eca41aa133a43d2b8d14958cd3b3f26";
action.enable = true;
action.sessionId = "a05d7d13fb514bb5bd16060c7584d6e6";
SetImageQgaAction.Result res = action.call();
```

 Python SDK

```
SetImageQgaAction action = SetImageQgaAction()
action.uuid = "f397649bf07049efb0be7836962d03fe"
action.enable = true
action.sessionId = "0bfcd0ef201142bcb00ab5903b178da5"
SetImageQgaAction.Result res = action.call()
```

---

#### 设置镜像启动模式(SetImageBootMode)



##### API请求

 URLs

```
PUT zstack/v1/images/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setImageBootMode": {
    "bootMode": "Legacy"
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
-X PUT -d '{"setImageBootMode":{"bootMode":"Legacy"}}' http://localhost:8080/zstack/v1/images/4efcba4c12cc35f4a1b262038f7e7b80/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.9.0 |
| bootMode | String | body(包含在**setImageBootMode**结构中) | 镜像启动模式 | Legacy UEFI UEFI_WITH_CSM | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
SetImageBootModeAction action = new SetImageBootModeAction();
action.uuid = "4efcba4c12cc35f4a1b262038f7e7b80";
action.bootMode = "Legacy";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SetImageBootModeAction.Result res = action.call();
```

 Python SDK

```
SetImageBootModeAction action = SetImageBootModeAction()
action.uuid = "4efcba4c12cc35f4a1b262038f7e7b80"
action.bootMode = "Legacy"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SetImageBootModeAction.Result res = action.call()
```

---

#### 获取上传镜像任务详情(GetUploadImageJobDetails)



##### API请求

 URLs

```
PUT zstack/v1/images/upload-job/details/{imageId}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "setImageBootMode": {
    "bootMode": "Legacy"
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
-X GET http://localhost:8080/zstack/v1/images/upload-job/details/d41d8cd98f00b204e9800998ecf8427e?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageId | String | url | 上传镜像的唯一标识，由用户自定义，推荐使用 md5 |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "existingJobDetails": [
    {
      "longJobUuid": "0792dd52aeb9329cb1e677fae6465f23",
      "longJobState": "Suspended",
      "imageUuid": "ccf943310d86335bb3d2511ca8e14137",
      "imageUploadUrl": "http://127.0.0.1:8001/imagestore/upload",
      "offset": 452984832E8
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| existingJobDetails |  | 详情参考[existingJobDetails] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #existingJobDetails

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| longJobUuid | String | 长任务UUID | 4.1.0 |
| longJobState | String | 长任务状态 | 4.1.0 |
| imageUuid | String | 镜像UUID | 4.1.0 |
| imageUploadUrl | String | 镜像上传URL | 4.1.0 |
| offset | long | 上传偏移量，单位为 Byte | 4.1.0 |



##### SDK示例

 Java SDK

```
GetUploadImageJobDetailsAction action = new GetUploadImageJobDetailsAction();
action.imageId = "d41d8cd98f00b204e9800998ecf8427e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetUploadImageJobDetailsAction.Result res = action.call();
```

 Python SDK

```
GetUploadImageJobDetailsAction action = GetUploadImageJobDetailsAction()
action.imageId = "d41d8cd98f00b204e9800998ecf8427e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetUploadImageJobDetailsAction.Result res = action.call()
```

---

#### 计算镜像的MD5值(CalculateImageHash)



##### API请求

 URLs

```
PUT zstack/v1/images/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "calculateImageHash": {
    "backupStorageUuid": "0eeaa5988c743c638485304f3d1f867e",
    "algorithm": "MD5"
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
-X PUT -d '{"calculateImageHash":{"backupStorageUuid":"0eeaa5988c743c638485304f3d1f867e","algorithm":"MD5"}}' \
http://localhost:8080/zstack/v1/images/383bcf0b1515369a8169b66a91de1e00/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.0.0 |
| backupStorageUuid | String | body(包含在**calculateImageHash**结构中) | 镜像存储UUID |  | 5.0.0 |
| algorithm (可选) | String | body(包含在**calculateImageHash**结构中) |  |  | 5.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "368da584193638818c480bef63732659",
    "name": "TinyLinux",
    "md5Sum": "6fc2357e711877c14c09eec960e51aed",
    "url": "http://192.168.1.20/share/images/tinylinux.qcow2",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0,
        "imageUuid": "368da584193638818c480bef63732659",
        "backupStorageUuid": "17f9f8d310763247b5dc31779d880a41",
        "installPath": "ceph://zs-images/f0b149e053b34c7eb7fe694b182ebffd",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.0.0 |
| inventory | ImageInventory | 详情参考[inventory] | 5.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.0.0 |
| description | String | 错误的概要描述 | 5.0.0 |
| details | String | 错误的详细信息 | 5.0.0 |
| elaboration | String | 保留字段，默认为null | 5.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.0.0 |
| name | String | 资源名称 | 5.0.0 |
| description | String | 资源的详细描述 | 5.0.0 |
| state | String | 镜像的启动状态 | 5.0.0 |
| status | String | 镜像的就绪状态 | 5.0.0 |
| size | Long | 镜像大小 | 5.0.0 |
| actualSize | Long | 镜像真实容量 | 5.0.0 |
| md5Sum | String | 镜像的md5值 | 5.0.0 |
| url | String | 镜像的URL地址 | 5.0.0 |
| mediaType | String | 镜像的类型 | 5.0.0 |
| guestOsType | String | 镜像对应的客户机操作系统类型 | 5.0.0 |
| type | String | 内部使用字段 | 5.0.0 |
| platform | String | 镜像的系统平台 | 5.0.0 |
| architecture | String | 镜像CPU架构 | 5.0.0 |
| format | String | 镜像的格式，比如：raw | 5.0.0 |
| system | Boolean | 标识是否为系统镜像 | 5.0.0 |
| virtio | Boolean | 是否支持virtio | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 5.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 5.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 5.0.0 |
| installPath | String | 在镜像服务器上的安装路径 | 5.0.0 |
| exportUrl | String | 导出镜像的url | 5.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 5.0.0 |
| status | String | 镜像就绪状态 | 5.0.0 |
| createDate | Timestamp | 创建时间 | 5.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.0.0 |



##### SDK示例

 Java SDK

```
CalculateImageHashAction action = new CalculateImageHashAction();
action.uuid = "383bcf0b1515369a8169b66a91de1e00";
action.backupStorageUuid = "0eeaa5988c743c638485304f3d1f867e";
action.algorithm = "MD5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CalculateImageHashAction.Result res = action.call();
```

 Python SDK

```
CalculateImageHashAction action = CalculateImageHashAction()
action.uuid = "383bcf0b1515369a8169b66a91de1e00"
action.backupStorageUuid = "0eeaa5988c743c638485304f3d1f867e"
action.algorithm = "MD5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CalculateImageHashAction.Result res = action.call()
```

---

### 亲和组相关接口

---

#### 创建亲和组(CreateAffinityGroup)



##### API请求

 URLs

```
POST zstack/v1/affinity-groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "vm-affinity-group",
    "description": "vm affinity group for test vms",
    "policy": "antiSoft",
    "type": "host"
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
-X POST -d '{"params":{"name":"vm-affinity-group","description":"vm affinity group for test vms","policy":"antiSoft","type":"host"}}' \
http://localhost:8080/zstack/v1/affinity-groups
```

 参数列表
-

-
-

-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.3 |
| policy | String | body(包含在**params**结构中) | 亲和组策略 | antiSoft | 2.3 |
| type (可选) | String | body(包含在**params**结构中) | 亲和组类型 目前支持物理机亲和 未来将增加网络亲和、路由器亲和、数据中心或机架亲和等多种类型 | host | 2.3 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "05ad02be7c5f4a6a9b6d164cb2980be6",
    "name": "affinity-group-test",
    "description": "affinity group for test",
    "policy": "ANTISOFT",
    "version": "1.0",
    "type": "HOST"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| policy | String | 亲和组策略 | 2.3 |
| version | String | 亲和组分配算法的版本 | 2.3 |
| type | String | 亲和组类型 当前为物理机亲和 未来将增加网络亲和、路由器亲和、数据中心或机架亲和等多种类型 | 2.3 |
| appliance | String | 亲和组使用者标识 | 2.3 |
| state | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| usages | List | 详情参考[usages] | 2.3 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 亲和组与资源绑定关系的UUID | 2.3 |
| affinityGroupUuid | String | 亲和组UUID | 2.3 |
| resourceUuid | String | 加入亲和组的资源UUID | 2.3 |
| resourceType | String | 加入亲和组的资源类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
CreateAffinityGroupAction action = new CreateAffinityGroupAction();
action.name = "vm-affinity-group";
action.description = "vm affinity group for test vms";
action.policy = "antiSoft";
action.type = "host";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
CreateAffinityGroupAction action = CreateAffinityGroupAction()
action.name = "vm-affinity-group"
action.description = "vm affinity group for test vms"
action.policy = "antiSoft"
action.type = "host"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAffinityGroupAction.Result res = action.call()
```

---

#### 删除亲和组(DeleteAffinityGroup)



##### API请求

 URLs

```
DELETE zstack/v1/affinity-groups/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/affinity-groups/ed0b2f029cc53ca385adc19dd36b51be?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.2 |
| deleteMode (可选) | String | url | 删除模式 |  | 2.2 |
| systemTags (可选) | List | body | 系统标签 |  | 2.2 |
| userTags (可选) | List | body | 用户标签 |  | 2.2 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteAffinityGroupAction action = new DeleteAffinityGroupAction();
action.uuid = "ed0b2f029cc53ca385adc19dd36b51be";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteAffinityGroupAction action = DeleteAffinityGroupAction()
action.uuid = "ed0b2f029cc53ca385adc19dd36b51be"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAffinityGroupAction.Result res = action.call()
```

---

#### 查询亲和组(QueryAffinityGroup)



##### API请求

 URLs

```
GET zstack/v1/affinity-groups
GET zstack/v1/affinity-groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/affinity-groups?q=uuid=656ebc992c3333fea209c6c90e6a76cf
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/affinity-groups/b49759dff8593098a1d106c8129974cf
```



可查询字段

运行CLI命令行工具，输入`QueryAffinityGroup`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "99fa95af4aac4eaabd320dbdd6d36ef8",
      "name": "affinity-group-test",
      "description": "affinity group for test",
      "policy": "ANTISOFT",
      "version": "1.0",
      "type": "HOST",
      "usages": [
        {
          "resourceUuid": "acedd8848c874cd7b1c68df7c593f6c1",
          "resourceType": "HOST"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventories | List | 详情参考[inventories] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventories
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| policy | String | 亲和组策略 | 2.3 |
| version | String | 亲和组分配算法的版本 | 2.3 |
| type | String | 亲和组类型 当前为物理机亲和 未来将增加网络亲和、路由器亲和、数据中心或机架亲和等多种类型 | 2.3 |
| appliance | String | 亲和组使用者标识 | 2.3 |
| state | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| usages | List | 详情参考[usages] | 2.3 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 亲和组与资源绑定关系的UUID | 2.3 |
| affinityGroupUuid | String | 亲和组UUID | 2.3 |
| resourceUuid | String | 加入亲和组的资源UUID | 2.3 |
| resourceType | String | 加入亲和组的资源类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
QueryAffinityGroupAction action = new QueryAffinityGroupAction();
action.conditions = asList("uuid=bceb37906e673f37bb425933bdf2df46");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
QueryAffinityGroupAction action = QueryAffinityGroupAction()
action.conditions = ["uuid=3714ccec7a933aba94c073fcba6e52bd"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAffinityGroupAction.Result res = action.call()
```

---

#### 更新亲和组(UpdateAffinityGroup)



##### API请求

 URLs

```
PUT zstack/v1/affinity-groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```



Body

```
{
  "updateAffinityGroup": {
    "name": "new name",
    "description": "desc"
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
-X PUT -d '{"updateAffinityGroup":{"name":"new name","description":"desc"}}' \
http://localhost:8080/zstack/v1/affinity-groups/f287ad59b76c34b0917fa9f897b63d69/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| name (可选) | String | body(包含在**updateAffinityGroup**结构中) | 资源名称 |  | 2.3 |
| description (可选) | String | body(包含在**updateAffinityGroup**结构中) | 资源的详细描述 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "f8c3b350df9a3bfd960359f302a4fba2",
    "name": "affinity group",
    "description": "affinity group for test",
    "policy": "ANTISOFT",
    "type": "HOST"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| policy | String | 亲和组策略 | 2.3 |
| version | String | 亲和组分配算法的版本 | 2.3 |
| type | String | 亲和组类型 当前为物理机亲和 未来将增加网络亲和、路由器亲和、数据中心或机架亲和等多种类型 | 2.3 |
| appliance | String | 亲和组使用者标识 | 2.3 |
| state | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| usages | List | 详情参考[usages] | 2.3 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 亲和组与资源绑定关系的UUID | 2.3 |
| affinityGroupUuid | String | 亲和组UUID | 2.3 |
| resourceUuid | String | 加入亲和组的资源UUID | 2.3 |
| resourceType | String | 加入亲和组的资源类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
UpdateAffinityGroupAction action = new UpdateAffinityGroupAction();
action.uuid = "f287ad59b76c34b0917fa9f897b63d69";
action.name = "new name";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateAffinityGroupAction action = UpdateAffinityGroupAction()
action.uuid = "f287ad59b76c34b0917fa9f897b63d69"
action.name = "new name"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAffinityGroupAction.Result res = action.call()
```

---

#### 添加云主机到亲和组(AddVmToAffinityGroup)



##### API请求

 URLs

```
POST zstack/v1/affinity-groups/{affinityGroupUuid}/vm-instances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' \
http://localhost:8080/zstack/v1/affinity-groups/8e9398e9841b399693ab71fb722ea144/vm-instances/f67763f0793832619a22e2c53c66e7d8
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| affinityGroupUuid | String | url | 亲和组UUID |  | 2.3 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "cb4dee8a47d74f9986b4641648a4c85d",
    "name": "affinity-group-test",
    "description": "affinity group for test",
    "policy": "ANTISOFT",
    "version": "1.0",
    "type": "HOST",
    "usages": [
      {
        "uuid": "cb4dee8a47d74f9986b4641648a4c85d",
        "resourceUuid": "cf44d25659f24cefafbadbf8ad9a207d",
        "resourceType": "HOST"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 2.3 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.2 |
| description | String | 错误的概要描述 | 2.2 |
| details | String | 错误的详细信息 | 2.2 |
| elaboration | String | 保留字段，默认为null | 2.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.2 |

 #inventory
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| policy | String | 亲和组策略 | 2.2 |
| version | String | 亲和组分配算法的版本 | 2.2 |
| type | String | 亲和组类型 当前为物理机亲和 未来将增加网络亲和、路由器亲和、数据中心或机架亲和等多种类型 | 2.2 |
| appliance | String | 亲和组使用者标识 | 2.2 |
| state | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| usages | List | 详情参考[usages] | 2.2 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 亲和组与资源绑定关系的UUID | 2.2 |
| affinityGroupUuid | String | 亲和组UUID | 2.2 |
| resourceUuid | String | 加入亲和组的资源UUID | 2.2 |
| resourceType | String | 加入亲和组的资源类型 | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |



##### SDK示例

 Java SDK

```
AddVmToAffinityGroupAction action = new AddVmToAffinityGroupAction();
action.affinityGroupUuid = "8e9398e9841b399693ab71fb722ea144";
action.uuid = "f67763f0793832619a22e2c53c66e7d8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddVmToAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
AddVmToAffinityGroupAction action = AddVmToAffinityGroupAction()
action.affinityGroupUuid = "8e9398e9841b399693ab71fb722ea144"
action.uuid = "f67763f0793832619a22e2c53c66e7d8"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddVmToAffinityGroupAction.Result res = action.call()
```

---

#### 从亲和组移除云主机(RemoveVmFromAffinityGroup)



##### API请求

 URLs

```
DELETE zstack/v1/affinity-groups/{affinityGroupUuid}/vm-instances?uuid={uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/affinity-groups/6d1e8b61e30e38ceb8300ed722c6a85a/vm-instances?uuid=2736c4e5c4f3301e8a9ee7cc64847033
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| affinityGroupUuid | String | url | 亲和组UUID |  | 2.3 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 2.3 |
| userTags (可选) | List | body | 用户标签 |  | 2.3 |



##### API返回



返回示例

```
{
  "inventory": {
    "uuid": "15b102d8d08947e6b38fc619c71a5cfe",
    "name": "affinity-group-test",
    "description": "affinity group for test",
    "policy": "ANTISOFT",
    "version": "1.0",
    "type": "HOST"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.3 |
| description | String | 错误的概要描述 | 2.3 |
| details | String | 错误的详细信息 | 2.3 |
| elaboration | String | 保留字段，默认为null | 2.3 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.3 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.3 |

 #inventory
-
-


| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.3 |
| name | String | 资源名称 | 2.3 |
| description | String | 资源的详细描述 | 2.3 |
| policy | String | 亲和组策略 | 2.3 |
| version | String | 亲和组分配算法的版本 | 2.3 |
| type | String | 亲和组类型 当前为物理机亲和 未来将增加网络亲和、路由器亲和、数据中心或机架亲和等多种类型 | 2.3 |
| appliance | String | 亲和组使用者标识 | 2.3 |
| state | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |
| usages | List | 详情参考[usages] | 2.3 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 亲和组与资源绑定关系的UUID | 2.3 |
| affinityGroupUuid | String | 亲和组UUID | 2.3 |
| resourceUuid | String | 加入亲和组的资源UUID | 2.3 |
| resourceType | String | 加入亲和组的资源类型 | 2.3 |
| createDate | Timestamp | 创建时间 | 2.3 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.3 |



##### SDK示例

 Java SDK

```
RemoveVmFromAffinityGroupAction action = new RemoveVmFromAffinityGroupAction();
action.affinityGroupUuid = "6d1e8b61e30e38ceb8300ed722c6a85a";
action.uuid = "2736c4e5c4f3301e8a9ee7cc64847033";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveVmFromAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveVmFromAffinityGroupAction action = RemoveVmFromAffinityGroupAction()
action.affinityGroupUuid = "6d1e8b61e30e38ceb8300ed722c6a85a"
action.uuid = "2736c4e5c4f3301e8a9ee7cc64847033"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveVmFromAffinityGroupAction.Result res = action.call()
```

---

#### 改变亲和组的使用状态(ChangeAffinityGroupState)



##### API请求

 URLs

```
PUT zstack/v1/affinity-groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAffinityGroupState": {
    "stateEvent": "enable"
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
-X PUT -d '{"changeAffinityGroupState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/affinity-groups/f32fd1a910d439d7ab93cd4660a02837/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.3 |
| stateEvent | String | body(包含在**changeAffinityGroupState**结构中) |  | enable disable | 2.3 |
| systemTags (可选) | List | body |  |  | 2.3 |
| userTags (可选) | List | body |  |  | 2.3 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "034e3ef3798f3374b85d414057313a3c",
    "name": "Test-AffinityGroup",
    "description": "Test-AffinityGroup",
    "version": "1.0",
    "type": "HOST",
    "appliance": "CUSTOMER",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.3 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 2.3 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| name | String | 资源名称 | 2.2 |
| description | String | 资源的详细描述 | 2.2 |
| policy | String |  | 2.2 |
| version | String |  | 2.2 |
| type | String |  | 2.2 |
| appliance | String |  | 2.2 |
| state | String |  | 2.3 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |
| usages | List | 详情参考[usages] | 2.2 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.2 |
| affinityGroupUuid | String |  | 2.2 |
| resourceUuid | String |  | 2.2 |
| resourceType | String |  | 2.2 |
| createDate | Timestamp | 创建时间 | 2.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.2 |



##### SDK示例

 Java SDK

```
ChangeAffinityGroupStateAction action = new ChangeAffinityGroupStateAction();
action.uuid = "f32fd1a910d439d7ab93cd4660a02837";
action.stateEvent = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAffinityGroupStateAction.Result res = action.call();
```

 Python SDK

```
ChangeAffinityGroupStateAction action = ChangeAffinityGroupStateAction()
action.uuid = "f32fd1a910d439d7ab93cd4660a02837"
action.stateEvent = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAffinityGroupStateAction.Result res = action.call()
```

---

#### 获取可绑定云主机的亲和组(GetCandidateAffinityGroupForAttachingVm)



##### API请求

 URLs

```
GET zstack/v1/affinityGroup/attachingVm
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/affinityGroup/attachingVm?vmUuid=2cbb6f64b4e03753b8fb63f497bb003a
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuid | String | query | 云主机UUID |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "06a212ca4cce3986ae05f3912fb3bd7d",
      "name": "affinity-group-test",
      "description": "affinity group for test",
      "policy": "ANTISOFT",
      "version": "1.0",
      "type": "HOST"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventories | List | 详情参考[inventories] | 4.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| policy | String |  | 4.0.0 |
| version | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| appliance | String |  | 4.0.0 |
| state | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usages | List | 详情参考[usages] | 4.0.0 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| affinityGroupUuid | String |  | 4.0.0 |
| resourceUuid | String |  | 4.0.0 |
| resourceType | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |



##### SDK示例

 Java SDK

```
GetCandidateAffinityGroupForAttachingVmAction action = new GetCandidateAffinityGroupForAttachingVmAction();
action.vmUuid = "2cbb6f64b4e03753b8fb63f497bb003a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateAffinityGroupForAttachingVmAction.Result res = action.call();
```

 Python SDK

```
GetCandidateAffinityGroupForAttachingVmAction action = GetCandidateAffinityGroupForAttachingVmAction()
action.vmUuid = "2cbb6f64b4e03753b8fb63f497bb003a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateAffinityGroupForAttachingVmAction.Result res = action.call()
```

---

#### 获取可绑定亲和组的云主机(GetCandidateVMForAttachingAffinityGroup)



##### API请求

 URLs

```
GET zstack/v1/VM/attachingGroup
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/VM/attachingGroup?affinityGroupUuid=a92158a6b1b333b296e93a4bd8d36e5e
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| affinityGroupUuid | String | query | 亲和组uuid |  | 4.0.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.0.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.0.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "ac1d56dec1d93a29a6cb43d7aff178a3",
      "name": "Test-VM",
      "description": "web server VM",
      "zoneUuid": "892fe4676f283785970b18b6c0f556f4",
      "clusterUuid": "440f315c2b0c3561850f610f7d200959",
      "imageUuid": "72da4314ad063029a40ebec8e1204c70",
      "hostUuid": "2cac9cfdc7d030bb8cfd80bb9d922e48",
      "lastHostUuid": "c60aa755fe2d30fb80d4029e9d337ee9",
      "instanceOfferingUuid": "3ce1eb11a41030499e3e74685a568dbb",
      "rootVolumeUuid": "e6cf673fb915361caa4ab93e03c6e3a6",
      "platform": "Linux",
      "defaultL3NetworkUuid": "aff87442d7d535a2a46914f6a312c285",
      "type": "UserVm",
      "hypervisorType": "KVM",
      "memorySize": 8.589934592E9,
      "cpuNum": 1.0,
      "allocatorStrategy": "LastHostPreferredAllocatorStrategy",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "state": "Stopped"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |
| inventories | List | 详情参考[inventories] | 4.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.0.0 |
| description | String | 错误的概要描述 | 4.0.0 |
| details | String | 错误的详细信息 | 4.0.0 |
| elaboration | String | 保留字段，默认为null | 4.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| zoneUuid | String | 区域UUID | 4.0.0 |
| clusterUuid | String | 集群UUID | 4.0.0 |
| imageUuid | String | 镜像UUID | 4.0.0 |
| hostUuid | String | 物理机UUID | 4.0.0 |
| lastHostUuid | String |  | 4.0.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.0.0 |
| platform | String |  | 4.0.0 |
| defaultL3NetworkUuid | String |  | 4.0.0 |
| type | String |  | 4.0.0 |
| hypervisorType | String |  | 4.0.0 |
| memorySize | Long |  | 4.0.0 |
| cpuNum | Integer |  | 4.0.0 |
| cpuSpeed | Long |  | 4.0.0 |
| allocatorStrategy | String |  | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| state | String |  | 4.0.0 |
| vmNics | List | 详情参考[vmNics] | 4.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.0.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| mac | String | MAC地址 | 4.0.0 |
| hypervisorType | String | 虚拟化类型 | 4.0.0 |
| netmask | String | 子网掩码 | 4.0.0 |
| gateway | String | 网关 | 4.0.0 |
| metaData | String |  | 4.0.0 |
| ipVersion | Integer | IP地址版本 | 4.0.0 |
| deviceId | Integer | 设备ID | 4.0.0 |
| type | String | 网卡类型 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| usedIps | List | 详情参考[usedIps] | 4.0.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| ipRangeUuid | String | IP段UUID | 4.0.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.0.0 |
| ipVersion | Integer | IP协议号 | 4.0.0 |
| ip | String | IP地址 | 4.0.0 |
| netmask | String | 网络掩码 | 4.0.0 |
| gateway | String | 网关地址 | 4.0.0 |
| usedFor | String |  | 4.0.0 |
| ipInLong | long |  | 4.0.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.0.0 |
| name | String | 资源名称 | 4.0.0 |
| description | String | 资源的详细描述 | 4.0.0 |
| primaryStorageUuid | String | 主存储UUID | 4.0.0 |
| vmInstanceUuid | String | 云主机UUID | 4.0.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.0.0 |
| rootImageUuid | String | 云盘根镜像UUID | 4.0.0 |
| installPath | String | 云盘在主存储上的路径 | 4.0.0 |
| type | String | 云盘类型，数据云盘/根云盘 | 4.0.0 |
| format | String | 云盘格式 | 4.0.0 |
| size | Long | 云盘大小 | 4.0.0 |
| actualSize | Long | 云盘真实大小 | 4.0.0 |
| deviceId | Integer |  | 4.0.0 |
| state | String | 云盘是否开启 | 4.0.0 |
| status | String | 云盘状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 4.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.0.0 |
| isShareable | Boolean | 是否共享云盘 | 4.0.0 |
| volumeQos | String | 云盘Qos，格式如total=1048576 | 4.0.0 |



##### SDK示例

 Java SDK

```
GetCandidateVMForAttachingAffinityGroupAction action = new GetCandidateVMForAttachingAffinityGroupAction();
action.affinityGroupUuid = "a92158a6b1b333b296e93a4bd8d36e5e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateVMForAttachingAffinityGroupAction.Result res = action.call();
```

 Python SDK

```
GetCandidateVMForAttachingAffinityGroupAction action = GetCandidateVMForAttachingAffinityGroupAction()
action.affinityGroupUuid = "a92158a6b1b333b296e93a4bd8d36e5e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateVMForAttachingAffinityGroupAction.Result res = action.call()
```

---

#### 创建云主机时获取可加入非亲和组(GetCandidateAffinityGroupForCreatingVm)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/candidate-affinityGroup
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/candidate-affinityGroup?zoneUuid=eb4be792076530faa865def5bb1f43d2&clusterUuid=05033aee073b3bb69941eac180992e74&hostUuid=7007ba51ded339fab41ec19f2d721135
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | query | 区域UUID |  | 4.1.0 |
| clusterUuid (可选) | String | query | 集群UUID |  | 4.1.0 |
| hostUuid (可选) | String | query | 物理机UUID |  | 4.1.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "7c5c014902fa309b91e0e01b2f5e6cfb",
      "name": "affinity-group",
      "description": "affinity group for test",
      "policy": "ANTISOFT",
      "version": "1.0",
      "type": "HOST"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventories | List | 详情参考[inventories] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| name | String | 资源名称 | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| policy | String |  | 4.1.0 |
| version | String |  | 4.1.0 |
| type | String |  | 4.1.0 |
| appliance | String |  | 4.1.0 |
| state | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |
| usages | List | 详情参考[usages] | 4.1.0 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| affinityGroupUuid | String |  | 4.1.0 |
| resourceUuid | String |  | 4.1.0 |
| resourceType | String |  | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
GetCandidateAffinityGroupForCreatingVmAction action = new GetCandidateAffinityGroupForCreatingVmAction();
action.zoneUuid = "eb4be792076530faa865def5bb1f43d2";
action.clusterUuid = "05033aee073b3bb69941eac180992e74";
action.hostUuid = "7007ba51ded339fab41ec19f2d721135";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCandidateAffinityGroupForCreatingVmAction.Result res = action.call();
```

 Python SDK

```
GetCandidateAffinityGroupForCreatingVmAction action = GetCandidateAffinityGroupForCreatingVmAction()
action.zoneUuid = "eb4be792076530faa865def5bb1f43d2"
action.clusterUuid = "05033aee073b3bb69941eac180992e74"
action.hostUuid = "7007ba51ded339fab41ec19f2d721135"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCandidateAffinityGroupForCreatingVmAction.Result res = action.call()
```

---

### 云主机调度策略相关接口

---

#### 创建物理机调度组(CreateHostSchedulingRuleGroup)



##### API请求

 URLs

```
POST zstack/v1/hostSchedulingRuleGroup
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "test",
    "description": "test desc",
    "zoneUuid": "4e083eaa197835778fa94d9bfcf012d6",
    "clusterUuid": "e7127ff00fbb3ed3a9755c37447b7bf8"
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
-X POST -d '{"params":{"name":"test","description":"test desc","zoneUuid":"4e083eaa197835778fa94d9bfcf012d6","clusterUuid":"e7127ff00fbb3ed3a9755c37447b7bf8"}}' http://localhost:8080/zstack/v1/hostSchedulingRuleGroup
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.6.0 |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 4.6.0 |
| clusterUuid | String | body(包含在**params**结构中) | 集群UUID |  | 4.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test",
    "description": "test desc",
    "zoneUuid": "1eca7fc3081a3750b55930b194d82991",
    "clusterUuid": "e73c4aa3e6a03ee3bb4f325ab3b395b1"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| clusterUuid | String | 集群UUID | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
CreateHostSchedulingRuleGroupAction action = new CreateHostSchedulingRuleGroupAction();
action.name = "test";
action.description = "test desc";
action.zoneUuid = "4e083eaa197835778fa94d9bfcf012d6";
action.clusterUuid = "e7127ff00fbb3ed3a9755c37447b7bf8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateHostSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
CreateHostSchedulingRuleGroupAction action = CreateHostSchedulingRuleGroupAction()
action.name = "test"
action.description = "test desc"
action.zoneUuid = "4e083eaa197835778fa94d9bfcf012d6"
action.clusterUuid = "e7127ff00fbb3ed3a9755c37447b7bf8"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateHostSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 删除物理机调度组(DeleteHostSchedulingRuleGroup)



##### API请求

 URLs

```
DELETE zstack/v1/hostSchedulingRuleGroup/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/hostSchedulingRuleGroup/8e02276953ab35e2b591505b0f3167c9
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteHostSchedulingRuleGroupAction action = new DeleteHostSchedulingRuleGroupAction();
action.uuid = "8e02276953ab35e2b591505b0f3167c9";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteHostSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteHostSchedulingRuleGroupAction action = DeleteHostSchedulingRuleGroupAction()
action.uuid = "8e02276953ab35e2b591505b0f3167c9"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteHostSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 更新物理机调度组(UpdateHostSchedulingRuleGroup)



##### API请求

 URLs

```
PUT zstack/v1/hostSchedulingRuleGroup/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateHostSchedulingRuleGroup": {
    "name": "test",
    "description": "desc"
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
-X PUT -d '{"updateHostSchedulingRuleGroup":{"name":"test","description":"desc"}}' http://localhost:8080/zstack/v1/hostSchedulingRuleGroup/7127bed5295f3a3c94d9b3dbc307450d
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| name (可选) | String | body(包含在**updateHostSchedulingRuleGroup**结构中) | 资源名称 |  | 4.6.0 |
| description (可选) | String | body(包含在**updateHostSchedulingRuleGroup**结构中) | 资源的详细描述 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b96c8635e48435eca42d3cbfca25704f",
    "name": "test",
    "description": "desc",
    "zoneUuid": "afcd30e31ebb38a8b0a2f013fce73f7a",
    "clusterUuid": "ae9b2f516fd43913b1d458ebe5f7222d"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| clusterUuid | String | 集群UUID | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
UpdateHostSchedulingRuleGroupAction action = new UpdateHostSchedulingRuleGroupAction();
action.uuid = "7127bed5295f3a3c94d9b3dbc307450d";
action.name = "test";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateHostSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateHostSchedulingRuleGroupAction action = UpdateHostSchedulingRuleGroupAction()
action.uuid = "7127bed5295f3a3c94d9b3dbc307450d"
action.name = "test"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateHostSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 添加物理机到物理机调度组(AddHostToHostSchedulingRuleGroup)



##### API请求

 URLs

```
POST zstack/v1/hostSchedulingRuleGroup/{hostGroupUuid}/host/{hostUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST http://localhost:8080/zstack/v1/hostSchedulingRuleGroup/801af67a7f1f3610a76e834e45aebf5b/host/602ca3d56dca40fcb04944dbaa9861ee
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostGroupUuid | String | url | 物理机调度组UUID |  | 4.6.0 |
| hostUuid | String | body | 物理机UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
AddHostTohostSchedulingRuleGroupAction action = new AddHostTohostSchedulingRuleGroupAction();
action.hostGroupUuid = "663fb7c5b74f3bc9bf629ca3523fb8cc";
action.hostUuid = "64d7de2d3eb431c99998292d1ed5411e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddHostTohostSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
AddHostTohostSchedulingRuleGroupAction action = AddHostTohostSchedulingRuleGroupAction()
action.hostGroupUuid = "663fb7c5b74f3bc9bf629ca3523fb8cc"
action.hostUuid = "64d7de2d3eb431c99998292d1ed5411e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddHostTohostSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 从物理机调度组解绑物理机(DetachHostFromHostSchedulingRuleGroup)



##### API请求

 URLs

```
DELETE zstack/v1/hostSchedulingRuleGroup/{hostGroupUuid}/host
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/hostSchedulingRuleGroup/801af67a7f1f3610a76e834e45aebf5b/host
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| hostGroupUuid | String | url | 物理机调度组UUID |  | 4.6.0 |
| hostUuid | String | body | 物理机UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DetachHostFromHostSchedulingRuleGroupAction action = new DetachHostFromHostSchedulingRuleGroupAction();
action.hostGroupUuid = "801af67a7f1f3610a76e834e45aebf5b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachHostFromHostSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
DetachHostFromHostSchedulingRuleGroupAction action = DetachHostFromHostSchedulingRuleGroupAction()
action.hostGroupUuid = "801af67a7f1f3610a76e834e45aebf5b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachHostFromHostSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 创建云主机调度组(CreateVmSchedulingRuleGroup)



##### API请求

 URLs

```
POST zstack/v1/vmSchedulingRuleGroup
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "zoneUuid": "eae13168e86b3698807837ca88c3b2ae",
    "name": "test",
    "description": "test desc"
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
-X POST -d '{"params":{"zoneUuid":"eae13168e86b3698807837ca88c3b2ae","name":"test","description":"test desc"}}' http://localhost:8080/zstack/v1/vmSchedulingRuleGroup
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| zoneUuid | String | body(包含在**params**结构中) | 区域UUID |  | 4.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e79dc7a0170c31d18429c7478772c5d7",
    "name": "test",
    "description": "test desc",
    "appliance": "CUSTOMER",
    "zoneUuid": "e6a7cd7917473bedbfd420797d93ed50"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| appliance | String |  | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
CreateVmSchedulingRuleGroupAction action = new CreateVmSchedulingRuleGroupAction();
action.zoneUuid = "eae13168e86b3698807837ca88c3b2ae";
action.name = "test";
action.description = "test desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
CreateVmSchedulingRuleGroupAction action = CreateVmSchedulingRuleGroupAction()
action.zoneUuid = "eae13168e86b3698807837ca88c3b2ae"
action.name = "test"
action.description = "test desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 删除云主机调度组(DeleteVmSchedulingRuleGroup)



##### API请求

 URLs

```
DELETE zstack/v1/vmSchedulingRuleGroup/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vmSchedulingRuleGroup/d150bf5dca4c32768464817ab2937ac4
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteVmSchedulingRuleGroupAction action = new DeleteVmSchedulingRuleGroupAction();
action.uuid = "d150bf5dca4c32768464817ab2937ac4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVmSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteVmSchedulingRuleGroupAction action = DeleteVmSchedulingRuleGroupAction()
action.uuid = "d150bf5dca4c32768464817ab2937ac4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVmSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 更新云主机调度组(UpdateVmSchedulingRuleGroup)



##### API请求

 URLs

```
PUT zstack/v1/vmSchedulingRuleGroup/{uuid}/update
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmSchedulingRuleGroup": {
    "name": "test",
    "description": "test desc"
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
-X PUT -d '{"updateVmSchedulingRuleGroup":{"name":"test","description":"test desc"}}' http://localhost:8080/zstack/v1/vmSchedulingRuleGroup/0e8a74e4ff8d3da9bff07f0cc7d58f91/update
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| name (可选) | String | body(包含在**updateVmSchedulingRuleGroup**结构中) | 资源名称 |  | 4.6.0 |
| description (可选) | String | body(包含在**updateVmSchedulingRuleGroup**结构中) | 资源的详细描述 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "75840459a5f83afebc36e605a3189289",
    "name": "test",
    "description": "test desc",
    "appliance": "CUSTOMER",
    "zoneUuid": "261246b65f253787b06a29c6c266543c"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| appliance | String |  | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
UpdateVmSchedulingRuleGroupAction action = new UpdateVmSchedulingRuleGroupAction();
action.uuid = "0e8a74e4ff8d3da9bff07f0cc7d58f91";
action.name = "test";
action.description = "test desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateVmSchedulingRuleGroupAction action = UpdateVmSchedulingRuleGroupAction()
action.uuid = "0e8a74e4ff8d3da9bff07f0cc7d58f91"
action.name = "test"
action.description = "test desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 添加云主机到云主机调度组(AddVmToVmSchedulingRuleGroup)



##### API请求

 URLs

```
POST zstack/v1/vmSchedulingRuleGroup/{vmGroupUuid}/vmInstance/{vmUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST http://localhost:8080/zstack/v1/vmSchedulingRuleGroup/663fb7c5b74f3bc9bf629ca3523fb8cc/vmInstance/64d7de2d3eb431c99998292d1ed5411e
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmGroupUuid | String | url | VM调度组UUID |  | 4.6.0 |
| vmUuid | String | url | VM UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
AddVmToVmSchedulingRuleGroupAction action = new AddVmToVmSchedulingRuleGroupAction();
action.vmGroupUuid = "663fb7c5b74f3bc9bf629ca3523fb8cc";
action.vmUuid = "64d7de2d3eb431c99998292d1ed5411e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddVmToVmSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
AddVmToVmSchedulingRuleGroupAction action = AddVmToVmSchedulingRuleGroupAction()
action.vmGroupUuid = "663fb7c5b74f3bc9bf629ca3523fb8cc"
action.vmUuid = "64d7de2d3eb431c99998292d1ed5411e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddVmToVmSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 从云主机调度组解绑云主机(DetachVmFromVmSchedulingRuleGroup)



##### API请求

 URLs

```
DELETE zstack/v1/vmSchedulingRuleGroup/{vmGroupUuid}/vmInstance/
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vmSchedulingRuleGroup/90c8c8b53cfc302684532e1c447e0a16/vmInstance/
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmGroupUuid | String | url | VM调度组UUID |  | 4.6.0 |
| vmUuid | String | body | VM UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
DetachVmFromVmSchedulingRuleGroupAction action = new DetachVmFromVmSchedulingRuleGroupAction();
action.vmGroupUuid = "90c8c8b53cfc302684532e1c447e0a16";
action.vmUuid = "560967aeab103cedb06a4a8d440c8d3d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachVmFromVmSchedulingRuleGroupAction.Result res = action.call();
```

 Python SDK

```
DetachVmFromVmSchedulingRuleGroupAction action = DetachVmFromVmSchedulingRuleGroupAction()
action.vmGroupUuid = "90c8c8b53cfc302684532e1c447e0a16"
action.vmUuid = "560967aeab103cedb06a4a8d440c8d3d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachVmFromVmSchedulingRuleGroupAction.Result res = action.call()
```

---

#### 获取云主机调度组执行状态(GetVmSchedulingRulesExecuteState)



##### API请求

 URLs

```
POST zstack/v1/get/vmSchedulingRules/conflict/state
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "uuids": [
      "c6bb1e89239235f8b49bb10bc5d484cc"
    ]
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
-X POST -d '{"params":{"uuids":["c6bb1e89239235f8b49bb10bc5d484cc"]}}' http://localhost:8080/zstack/v1/get/vmSchedulingRules/conflict/state
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuids | List | body(包含在**params**结构中) | VM调度组UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "ruleMapState": {
    "2951e237b86630ac84d8eeb382513260": "Normal"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| ruleMapState | Map | 详情参考[ruleMapState] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #ruleMapState

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Conflict | VmSchedulingRuleExecuteState | 冲突 | 4.6.0 |
| Normal | VmSchedulingRuleExecuteState | 正常 | 4.6.0 |
| Invalid | VmSchedulingRuleExecuteState | 无效 | 4.6.0 |



##### SDK示例

 Java SDK

```
GetVmSchedulingRulesExecuteStateAction action = new GetVmSchedulingRulesExecuteStateAction();
action.uuids = asList("c6bb1e89239235f8b49bb10bc5d484cc");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmSchedulingRulesExecuteStateAction.Result res = action.call();
```

 Python SDK

```
GetVmSchedulingRulesExecuteStateAction action = GetVmSchedulingRulesExecuteStateAction()
action.uuids = [c6bb1e89239235f8b49bb10bc5d484cc]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmSchedulingRulesExecuteStateAction.Result res = action.call()
```

---

#### 创建云主机调度策略(CreateVmSchedulingRule)



##### API请求

 URLs

```
POST zstack/v1/vmsSchedulingRule
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "rule": "AFFINITY",
    "mode": "SOFT",
    "vmGroupUuid": "814bca77193f3e7a871891b17f8e4122",
    "hostGroupUuid": "e4241841b9083aed84726be7cbb966bf",
    "name": "vm-scheduling-rule",
    "description": "desc"
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
-X POST -d '{"params":{"rule":"AFFINITY","mode":"SOFT","vmGroupUuid":"814bca77193f3e7a871891b17f8e4122","hostGroupUuid":"e4241841b9083aed84726be7cbb966bf","name":"vm-scheduling-rule","description":"desc"}}' http://localhost:8080/zstack/v1/vmsSchedulingRule
```

 参数列表
-
-

-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| rule | String | body(包含在**params**结构中) | 规则 | AFFINITY ANTIAFFINITY | 4.6.0 |
| mode | String | body(包含在**params**结构中) | 执行力度 | SOFT HARD | 4.6.0 |
| vmGroupUuid | String | body(包含在**params**结构中) | VM调度组UUID |  | 4.6.0 |
| hostGroupUuid (可选) | String | body(包含在**params**结构中) | 物理机调度组UUID |  | 4.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.6.0 |
| policy (可选) | String | body(包含在**params**结构中) |  | antiSoft antiHard | 4.6.0 |
| type (可选) | String | body(包含在**params**结构中) |  | host | 4.6.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 4.6.0 |
| subType (可选) | String | body(包含在**params**结构中) |  |  | 4.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d517b42f669b324288fe8977a7df2e4d",
    "name": "affinity-group-test",
    "description": "affinity group for test",
    "policy": "ANTISOFT",
    "version": "1.0",
    "type": "HOST"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| policy | String |  | 4.6.0 |
| version | String |  | 4.6.0 |
| type | String |  | 4.6.0 |
| appliance | String |  | 4.6.0 |
| state | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| usages | List | 详情参考[usages] | 4.6.0 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| affinityGroupUuid | String |  | 4.6.0 |
| resourceUuid | String |  | 4.6.0 |
| resourceType | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
CreateVmSchedulingRuleAction action = new CreateVmSchedulingRuleAction();
action.rule = "AFFINITY";
action.mode = "SOFT";
action.vmGroupUuid = "814bca77193f3e7a871891b17f8e4122";
action.hostGroupUuid = "e4241841b9083aed84726be7cbb966bf";
action.name = "vm-scheduling-rule";
action.description = "desc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmSchedulingRuleAction.Result res = action.call();
```

 Python SDK

```
CreateVmSchedulingRuleAction action = CreateVmSchedulingRuleAction()
action.rule = "AFFINITY"
action.mode = "SOFT"
action.vmGroupUuid = "814bca77193f3e7a871891b17f8e4122"
action.hostGroupUuid = "e4241841b9083aed84726be7cbb966bf"
action.name = "vm-scheduling-rule"
action.description = "desc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmSchedulingRuleAction.Result res = action.call()
```

---

#### 移除云主机调度策略(RemoveVmSchedulingRule)



##### API请求

 URLs

```
DELETE zstack/v1/vmSchedulingRule/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vmSchedulingRule/b247592a7e773a338a8965dc0d2cffad
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing Permissive | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
RemoveVmSchedulingRuleAction action = new RemoveVmSchedulingRuleAction();
action.uuid = "b247592a7e773a338a8965dc0d2cffad";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveVmSchedulingRuleAction.Result res = action.call();
```

 Python SDK

```
RemoveVmSchedulingRuleAction action = RemoveVmSchedulingRuleAction()
action.uuid = "b247592a7e773a338a8965dc0d2cffad"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveVmSchedulingRuleAction.Result res = action.call()
```

---

#### 变更云主机调度策略启用状态(ChangeVmSchedulingRuleState)



##### API请求

 URLs

```
PUT zstack/v1/vmSchedulingRule/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeVmSchedulingRuleState": {
    "state": "enable"
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
-X PUT -d '{"changeVmSchedulingRuleState":{"state":"enable"}}' http://localhost:8080/zstack/v1/vmSchedulingRule/907848e59a963a97a237c6dcb26d96ba/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| state | String | body(包含在`changeVmSchedulingRuleState`结构中) | 改变为的状态 | enable disable | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "rule": "AFFINITY",
    "mode": "SOFT",
    "uuid": "8ab474e792183589b6a58bbe473c635a",
    "name": "Test-AffinityGroup",
    "description": "Test-AffinityGroup",
    "version": "1.0",
    "type": "HOST",
    "appliance": "CUSTOMER",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| rule | String | 规则 | 4.6.0 |
| mode | String | 执行模式 | 4.6.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| policy | String |  | 4.6.0 |
| version | String |  | 4.6.0 |
| type | String |  | 4.6.0 |
| appliance | String |  | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| state | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| usages | List | 详情参考[usages] | 4.6.0 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云主机调度组与资源绑定关系的UUID | 4.6.0 |
| affinityGroupUuid | String | 亲和组UUID | 4.6.0 |
| resourceUuid | String | 资源UUID | 4.6.0 |
| resourceType | String | 资源类型 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
ChangeVmSchedulingRuleStateAction action = new ChangeVmSchedulingRuleStateAction();
action.uuid = "907848e59a963a97a237c6dcb26d96ba";
action.state = "enable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeVmSchedulingRuleStateAction.Result res = action.call();
```

 Python SDK

```
ChangeVmSchedulingRuleStateAction action = ChangeVmSchedulingRuleStateAction()
action.uuid = "907848e59a963a97a237c6dcb26d96ba"
action.state = "enable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeVmSchedulingRuleStateAction.Result res = action.call()
```

---

#### 更新云主机调度策略(UpdateVmSchedulingRule)



##### API请求

 URLs

```
PUT zstack/v1/vmSchedulingRule/{uuid}/update
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVmSchedulingRule": {
    "name": "new name",
    "description": "desc",
    "mode": "SOFT"
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
-X PUT -d '{"updateVmSchedulingRule":{"name":"new name","description":"desc","mode":"SOFT"}}' http://localhost:8080/zstack/v1/vmSchedulingRule/5c23ac3de87f33ff955430556e9d1104/update
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.6.0 |
| name (可选) | String | body(包含在**updateVmSchedulingRule**结构中) | 资源名称 |  | 4.6.0 |
| description (可选) | String | body(包含在**updateVmSchedulingRule**结构中) | 资源的详细描述 |  | 4.6.0 |
| mode (可选) | String | body(包含在**updateVmSchedulingRule**结构中) |  |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "rule": "AFFINITY",
    "mode": "SOFT",
    "uuid": "36f4174c0fcf3aefa24927f33aa2eba8",
    "name": "group",
    "description": "group for test",
    "policy": "ANTISOFT",
    "type": "HOST"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.6.0 |
| inventory | AffinityGroupInventory | 详情参考[inventory] | 4.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.6.0 |
| description | String | 错误的概要描述 | 4.6.0 |
| details | String | 错误的详细信息 | 4.6.0 |
| elaboration | String | 保留字段，默认为null | 4.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| rule | String | 规则 | 4.6.0 |
| mode | String | 执行模式 | 4.6.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.6.0 |
| name | String | 资源名称 | 4.6.0 |
| description | String | 资源的详细描述 | 4.6.0 |
| policy | String |  | 4.6.0 |
| version | String |  | 4.6.0 |
| type | String |  | 4.6.0 |
| appliance | String |  | 4.6.0 |
| zoneUuid | String | 区域UUID | 4.6.0 |
| state | String |  | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |
| usages | List | 详情参考[usages] | 4.6.0 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云主机调度组与资源绑定关系的UUID | 4.6.0 |
| affinityGroupUuid | String | 亲和组UUID | 4.6.0 |
| resourceUuid | String | 资源UUID | 4.6.0 |
| resourceType | String | 资源类型 | 4.6.0 |
| createDate | Timestamp | 创建时间 | 4.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.6.0 |



##### SDK示例

 Java SDK

```
UpdateVmSchedulingRuleAction action = new UpdateVmSchedulingRuleAction();
action.uuid = "5c23ac3de87f33ff955430556e9d1104";
action.name = "new name";
action.description = "desc";
action.mode = "SOFT";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVmSchedulingRuleAction.Result res = action.call();
```

 Python SDK

```
UpdateVmSchedulingRuleAction action = UpdateVmSchedulingRuleAction()
action.uuid = "5c23ac3de87f33ff955430556e9d1104"
action.name = "new name"
action.description = "desc"
action.mode = "SOFT"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVmSchedulingRuleAction.Result res = action.call()
```

---

#### 从云主机调度组校验调度策略(ValidateVmSchedulingRule)



##### API请求

 URLs

```
PUT zstack/v1/validate/vmSchedulingRule
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "validateVmSchedulingRule": {
    "vmGroupUuid": "2bce1a0af86a3ceebd70ef1aaa3633d1",
    "hostGroupUuid": "15b9f0a9a3c43708890eef7552959746",
    "rule": "AFFINITY",
    "mode": "HARD",
    "zoneUuid": "538bdbde4d9d3b919e2cc9ae44542f09"
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
-X PUT -d '{"validateVmSchedulingRule":{"vmGroupUuid":"2bce1a0af86a3ceebd70ef1aaa3633d1","hostGroupUuid":"15b9f0a9a3c43708890eef7552959746","rule":"AFFINITY","mode":"HARD","zoneUuid":"538bdbde4d9d3b919e2cc9ae44542f09"}}' http://localhost:8080/zstack/v1/validate/vmSchedulingRule
```

 参数列表
-
-

-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmGroupUuid | String | body(包含在**validateVmSchedulingRule**结构中) | VM调度组UUID |  | 4.6.0 |
| hostGroupUuid (可选) | String | body(包含在**validateVmSchedulingRule**结构中) | 物理机调度组UUID |  | 4.6.0 |
| rule | String | body(包含在**validateVmSchedulingRule**结构中) | 调度规则 | AFFINITY ANTIAFFINITY | 4.6.0 |
| mode | String | body(包含在**validateVmSchedulingRule**结构中) | 执行模式 | SOFT HARD | 4.6.0 |
| zoneUuid (可选) | String | body(包含在**validateVmSchedulingRule**结构中) | 区域UUID |  | 4.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.6.0 |



##### API返回

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



##### SDK示例

 Java SDK

```
ValidateVmSchedulingRuleAction action = new ValidateVmSchedulingRuleAction();
action.vmGroupUuid = "2bce1a0af86a3ceebd70ef1aaa3633d1";
action.hostGroupUuid = "15b9f0a9a3c43708890eef7552959746";
action.rule = "AFFINITY";
action.mode = "HARD";
action.zoneUuid = "538bdbde4d9d3b919e2cc9ae44542f09";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ValidateVmSchedulingRuleAction.Result res = action.call();
```

 Python SDK

```
ValidateVmSchedulingRuleAction action = ValidateVmSchedulingRuleAction()
action.vmGroupUuid = "2bce1a0af86a3ceebd70ef1aaa3633d1"
action.hostGroupUuid = "15b9f0a9a3c43708890eef7552959746"
action.rule = "AFFINITY"
action.mode = "HARD"
action.zoneUuid = "538bdbde4d9d3b919e2cc9ae44542f09"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ValidateVmSchedulingRuleAction.Result res = action.call()
```

---

### 计算规格相关接口

---

#### 创建云主机规格(CreateInstanceOffering)



##### API请求

 URLs

```
POST zstack/v1/instance-offerings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "instanceOffering",
"cpuNum": 2.0,
"memorySize": 2097152.0,
"sortKey": 0.0,
"type": "UserVm"
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
-X POST -d '{"params":{"name":"instanceOffering","cpuNum":2.0,"memorySize":2097152.0,"sortKey":0.0,"type":"UserVm"}}' \
http://localhost:8080/zstack/v1/instance-offerings
```

 参数列表
-
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| cpuNum | int | body(包含在params结构中) | CPU数目 |  | 0.6 |
| memorySize | long | body(包含在params结构中) | 内存大小, 单位Byte |  | 0.6 |
| allocatorStrategy (可选) | String | body(包含在params结构中) | 分配策略 | DefaultHostAllocatorStrategy LastHostPreferredAllocatorStrategy LeastVmPreferredHostAllocatorStrategy MinimumCPUUsageHostAllocatorStrategy MinimumMemoryUsageHostAllocatorStrategy MaxInstancePerHostHostAllocatorStrategy | 0.6 |
| sortKey (可选) | int | body(包含在params结构中) | 排序键 |  | 0.6 |
| type (可选) | String | body(包含在params结构中) | 类型 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`pciRomUuid::UUID`，UUID代表PCI设备固件UUID。
  - 例如：`pciRomUuid::5fd71606d5af451d981413f35367a8d6`
- 例如：`pciRomUuid::5fd71606d5af451d981413f35367a8d6`
  - 选项格式为：`                                     instanceOfferingUserConfig::xxx`，XXX要求JSON字符串。
- 选项格式为：`                                     instanceOfferingUserConfig::xxx`，XXX要求JSON字符串。


> **注意:** 说明:



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "d04e02a97d6c4ad0b0acee2a2f6c7084",
"name": "instanceOffering1",
"cpuNum": 2.0,
"cpuSpeed": 1.0,
"type": "UserVm",
"allocatorStrategy": "Mevoco",
"createDate": "Jun 7, 2017 9:20:40 PM",
"lastOpDate": "Jun 7, 2017 9:20:40 PM",
"state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
CreateInstanceOfferingAction action = new CreateInstanceOfferingAction();
action.name = "instanceOffering";
action.cpuNum = 2.0;
action.memorySize = 2097152.0;
action.sortKey = 0.0;
action.type = "UserVm";
action.sessionId = "1567ec4024724d2ea60eba29b957158c";
CreateInstanceOfferingAction.Result res = action.call();
```



Python SDK

```
CreateInstanceOfferingAction action = CreateInstanceOfferingAction()
action.name = "instanceOffering"
action.cpuNum = 2.0
action.memorySize = 2097152.0
action.sortKey = 0.0
action.type = "UserVm"
action.sessionId = "427dd2d091a54a0999e7e31eac07fc83"
CreateInstanceOfferingAction.Result res = action.call()
```

---

#### 删除云主机规格(DeleteInstanceOffering)



##### API请求

 URLs

```
DELETE zstack/v1/instance-offerings/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth cd94b78dc89842c19ea248ddb04816c0" \
-X DELETE http://localhost:8080/zstack/v1/instance-offerings/d4061032ef3940b990ba671acd1221fc?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



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



##### SDK示例

 Java SDK

```
DeleteInstanceOfferingAction action = new DeleteInstanceOfferingAction();
action.uuid = "07ce817b8d9d4f629c2bd65daae9b7bb";
action.deleteMode = "Permissive";
action.sessionId = "fd2aa30babca411780c7df97d3ae6f9f";
DeleteInstanceOfferingAction.Result res = action.call();
```

 Python SDK

```
DeleteInstanceOfferingAction action = DeleteInstanceOfferingAction()
action.uuid = "694e24b4a64d4b45936a9bbcf878078b"
action.deleteMode = "Permissive"
action.sessionId = "a13ac6edf7f546e48c4dbfea66429610"
DeleteInstanceOfferingAction.Result res = action.call()
```

---

#### 查询云主机规格(QueryInstanceOffering)



##### API请求

 URLs

```
GET zstack/v1/instance-offerings
GET zstack/v1/instance-offerings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth d4743a8bc4eb4dd7a827c58e20437e85" \
-X GET http://localhost:8080/zstack/v1/instance-offerings?q=uuid=3695f87b54594284b9ce542b2b653fb7
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e053145ce7d74cad8686d9b2a91e2754" \
-X GET http://localhost:8080/zstack/v1/instance-offerings/b1c967830a5f4b198b291d7f22cc8a2f
```



可查询字段

运行CLI命令行工具，输入`QueryInstanceOffering`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### **API返回**



返回示例

```
{
"inventories": [
    {
"uuid": "4f7e7eff5bb04f7cacc33a18006a0c72",
"name": "instanceOffering1",
"cpuNum": 2.0,
"cpuSpeed": 1.0,
"type": "UserVm",
"allocatorStrategy": "Mevoco",
"createDate": "Jun 7, 2017 9:20:13 PM",
"lastOpDate": "Jun 7, 2017 9:20:13 PM",
"state": "Enabled"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
QueryInstanceOfferingAction action = new QueryInstanceOfferingAction();
action.conditions = asList("uuid=8c77205cdc114a9090bc5d978b9d5285");
action.sessionId = "7d91852598ca41ca904539b34396c2ec";
QueryInstanceOfferingAction.Result res = action.call();
```

 Python SDK

```
QueryInstanceOfferingAction action = QueryInstanceOfferingAction()
action.conditions = ["uuid=6539c13e7a8843b7860ebc53c3f7e892"]
action.sessionId = "8700ab8ae22e48fb81a793b9a51e970a"
QueryInstanceOfferingAction.Result res = action.call()
```

---

#### 更改云主机规格(ChangeInstanceOffering)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeInstanceOffering": {
"instanceOfferingUuid": "818e8cad0af948baa9b8e7d8d7116abb"
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
-X PUT -d '{"changeInstanceOffering":{"instanceOfferingUuid":"7c46b8e59bf63b5f94fda63fce797581"}}' \
http://localhost:8080/zstack/v1/vm-instances/6b322ba8e03136e6bf200431e550d1a6/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 0.6 |
| instanceOfferingUuid | String | body(包含在**changeInstanceOffering**结构中) | 计算规格UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回



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



##### SDK示例

 Java SDK

```
ChangeInstanceOfferingAction action = new ChangeInstanceOfferingAction();
action.vmInstanceUuid = "c63937d254e24da1b06afc433b0e27ff";
action.instanceOfferingUuid = "3186c364b49f485ba14591f81387010a";
action.sessionId = "3d53ea4d8e914d56ae795e9592a63317";
ChangeInstanceOfferingAction.Result res = action.call();
```

 Python SDK

```
ChangeInstanceOfferingAction action = ChangeInstanceOfferingAction()
action.vmInstanceUuid = "5783bd4c68c04d9f9fe20783d92fa822"
action.instanceOfferingUuid = "8a9f3296030948b6bcda8c75a05458c9"
action.sessionId = "a19417648f9440c5b84b6ee4280dcefc"
ChangeInstanceOfferingAction.Result res = action.call()
```

---

#### 更新云主机规格(UpdateInstanceOffering)



##### API请求

 URLs

```
PUT zstack/v1/instance-offerings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateInstanceOffering": {
"name": "new name"
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
-X PUT -d '{"updateInstanceOffering":{"name":"new name"}}' \
http://localhost:8080/zstack/v1/instance-offerings/d071c5278471319291f6d1b44522a044/actions
```

 参数列表
-
-
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateInstanceOffering**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateInstanceOffering**结构中) | 资源的详细描述 |  | 0.6 |
| allocatorStrategy (可选) | String | body(包含在**updateInstanceOffering**结构中) |  | DefaultHostAllocatorStrategy LastHostPreferredAllocatorStrategy LeastVmPreferredHostAllocatorStrategy MinimumCPUUsageHostAllocatorStrategy MinimumMemoryUsageHostAllocatorStrategy MaxInstancePerHostHostAllocatorStrategy DesignatedHostAllocatorStrategy | 2.3.1 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "341367815c8e45209787b2361837109e",
"name": "instanceOffering1",
"cpuNum": 2.0,
"cpuSpeed": 1.0,
"type": "UserVm",
"allocatorStrategy": "Mevoco",
"createDate": "Jun 7, 2017 9:20:13 PM",
"lastOpDate": "Jun 7, 2017 9:20:13 PM",
"state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
UpdateInstanceOfferingAction action = new UpdateInstanceOfferingAction();
action.uuid = "0d71c980598b4c7b8a8eeef3148ced95";
action.name = "new name";
action.sessionId = "12bf1da37d444e2fbb6de5dc98f8d5f0";
UpdateInstanceOfferingAction.Result res = action.call();
```

 Python SDK

```
UpdateInstanceOfferingAction action = UpdateInstanceOfferingAction()
action.uuid = "bbe8cd1494d2413a8951623657a4f9c0"
action.name = "new name"
action.sessionId = "9251753d64fa477aa7cdd3956a94ff18"
UpdateInstanceOfferingAction.Result res = action.call()
```

---

#### 更改云主机规格的启用状态(ChangeInstanceOfferingState)



##### API请求

 URLs

```
PUT zstack/v1/instance-offerings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeInstanceOfferingState": {
"stateEvent": "enable"
  },
"systemTags": [],
"userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 318fe86dc2c2424c863623942dcf8e6f" \
-X PUT http://localhost:8080/zstack/v1/instance-offerings/049d4fa0268549c9b3e3e84f4c280d09/actions?
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeInstanceOfferingState**结构中) | 状态事件 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "372d111a940b46b39da8c32c5629ba66",
"name": "instanceOffering1",
"cpuNum": 2.0,
"cpuSpeed": 1.0,
"type": "UserVm",
"allocatorStrategy": "Mevoco",
"createDate": "Jun 7, 2017 9:20:36 PM",
"lastOpDate": "Jun 7, 2017 9:20:36 PM",
"state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | InstanceOfferingInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| cpuNum | Integer | CPU数量 | 0.6 |
| cpuSpeed | Integer | CPU速度 | 0.6 |
| memorySize | Long | 内存大小 | 0.6 |
| type | String | 类型 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |
| sortKey | Integer |  | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| state | String | 状态（启用，禁用） | 0.6 |



##### SDK示例

 Java SDK

```
ChangeInstanceOfferingStateAction action = new ChangeInstanceOfferingStateAction();
action.uuid = "ca7a911366f74e9b8e4222785cf963a1";
action.stateEvent = "enable";
action.sessionId = "86cf8ce78421434eb9458504f7449c64";
ChangeInstanceOfferingStateAction.Result res = action.call();
```

 Python SDK

```
ChangeInstanceOfferingStateAction action = ChangeInstanceOfferingStateAction()
action.uuid = "5cfc5009c0b74319855ccd197fa04a16"
action.stateEvent = "enable"
action.sessionId = "c593d4f452fd498cb60679a0956f1929"
ChangeInstanceOfferingStateAction.Result res = action.call()
```

---

### 云盘规格相关接口

---

#### 创建云盘规格(CreateDiskOffering)



##### API请求

 URLs

```
POST zstack/v1/disk-offerings
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "diskOffering1",
"diskSize": 100.0,
"sortKey": 0.0
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
-X POST -d '{"params":{"name":"diskOffering1","diskSize":100.0,"sortKey":0.0}}' \
http://localhost:8080/zstack/v1/disk-offerings
```

 参数列表
-
-
-
-
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| diskSize | long | body(包含在params结构中) | 云盘大小 |  | 0.6 |
| sortKey (可选) | int | body(包含在params结构中) | 排序key |  | 0.6 |
| allocationStrategy (可选) | String | body(包含在params结构中) | 分配策略 | DefaultHostAllocatorStrategy LastHostPreferredAllocatorStrategy LeastVmPreferredHostAllocatorStrategy MinimumCPUUsageHostAllocatorStrategy MinimumMemoryUsageHostAllocatorStrategy MaxInstancePerHostHostAllocatorStrategy LeastVolumePrimaryStorageAllocationStrategy MaximumAvailableCapacityAllocationStrategy CustomOrderPrimaryStorageAllocationStrategy | 4.6.21 |
| type (可选) | String | body(包含在params结构中) | 类型 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


> **注意:** 说明:

  - 选项格式为：`                                         diskOfferingUserConfig::xxx`，XXX要求JSON字符串。例如，为云盘规格指定多个主存储：diskOfferingUserConfig::
```
{
    "allocate": {
        "primaryStorages":[
            {
                "type":"输入主存储类型",
                "uuid":"输入主存储UUID"
            },
            {
                "type":"输入主存储类型",
                "uuid":"输入主存储UUID"
            },
            {
                "type":"输入主存储类型",
                "uuid":"输入主存储UUID"
            }
        ]
    }

}
```
 - 选项格式为：`                                         diskOfferingUserConfig::xxx`，XXX要求JSON字符串。例如，为云盘规格指定多个主存储：diskOfferingUserConfig::
```
{
    "allocate": {
        "primaryStorages":[
            {
                "type":"输入主存储类型",
                "uuid":"输入主存储UUID"
            },
            {
                "type":"输入主存储类型",
                "uuid":"输入主存储UUID"
            },
            {
                "type":"输入主存储类型",
                "uuid":"输入主存储UUID"
            }
        ]
    }

}
```


##### API返回

 返回示例

```
{
"inventory": {
"uuid": "e7a865815cd34dd29812d335dc1019bf",
"name": "diskOffering1",
"diskSize": 100.0,
"state": "Enabled",
"type": "DefaultDiskOfferingType",
"allocatorStrategy": "DefaultPrimaryStorageAllocationStrategy"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | DiskOfferingInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| diskSize | Long | 云盘大小 | 0.6 |
| sortKey | Integer |  | 0.6 |
| state | String | 状态（启动，禁用） | 0.6 |
| type | String | 类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |



##### SDK示例

 Java SDK

```
CreateDiskOfferingAction action = new CreateDiskOfferingAction();
action.name = "diskOffering1";
action.diskSize = 100.0;
action.sortKey = 0.0;
action.sessionId = "5c780b5178c0432b9f86a758c4c75ea1";
CreateDiskOfferingAction.Result res = action.call();
```

 Python SDK

```
CreateDiskOfferingAction action = CreateDiskOfferingAction()
action.name = "diskOffering1"
action.diskSize = 100.0
action.sortKey = 0.0
action.sessionId = "f930e0f78ce948778c8c3f1cbcd0c4ec"
CreateDiskOfferingAction.Result res = action.call()
```

---

#### 删除云盘规格(DeleteDiskOffering)



##### API请求

 URLs

```
DELETE/v1/disk-offerings/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth e12cbd12fbd54afd96c463c093ce1ed9" \
-X DELETE http://localhost:8080/zstack/v1/disk-offerings/6313fb03124a4aa6b7f77d8d153c0bcb?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteDiskOfferingAction action = new DeleteDiskOfferingAction();
action.uuid = "1d4e09f16c7c45abaab80be172b26cc1";
action.deleteMode = "Permissive";
action.sessionId = "1a31abeeef7e4ab5bc538168be6deb05";
DeleteDiskOfferingAction.Result res = action.call();
```

 Python SDK

```
DeleteDiskOfferingAction action = DeleteDiskOfferingAction()
action.uuid = "4f0d2dc3a8f34685ad8543834bf4cfd8"
action.deleteMode = "Permissive"
action.sessionId = "dce93830769b427ca6edf3bda25f65f6"
DeleteDiskOfferingAction.Result res = action.call()
```

---

#### 查询云盘规格(QueryDiskOffering)



##### API请求

 URLs

```
GET zstack/v1/disk-offerings
GET zstack/v1/disk-offerings/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth d6550daa638547498b8075f3ebd1e240" \
-X GET http://localhost:8080/zstack/v1/disk-offerings?q=uuid=85c065f24d024bf3920766692da392eb
```



```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3b32284bc5344692a8bc77a43610f460" \
-X GET http://localhost:8080/zstack/v1/disk-offerings/2f25294896e24c89b63edb7a209ebb85
```



可查询字段

运行CLI命令行工具，输入`QueryDiskOffering`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "7bd03741125a48d485255601b639318b",
"name": "diskOffering1",
"diskSize": 100.0,
"state": "Enabled",
"type": "DefaultDiskOfferingType",
"allocatorStrategy": "DefaultPrimaryStorageAllocationStrategy"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventories | List | 详情参考[inventories] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| diskSize | Long | 云盘大小 | 0.6 |
| sortKey | Integer |  | 0.6 |
| state | String | 状态（启动，禁用） | 0.6 |
| type | String | 类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |



#####  SDK示例

 Java SDK

```
QueryDiskOfferingAction action = new QueryDiskOfferingAction();
action.conditions = asList("uuid=e01b8a266d05425ba2d0c05308763db8");
action.sessionId = "d8a3f3b62d8c4affab7c5d491f95d4de";
QueryDiskOfferingAction.Result res = action.call();
```

 Python SDK

```
QueryDiskOfferingAction action = QueryDiskOfferingAction()
action.conditions = ["uuid=a1f7f68522e64783a37095a862f9bc28"]
action.sessionId = "593740538236497183e065e1251b6937"
QueryDiskOfferingAction.Result res = action.call()
```

---

#### 更改云盘规格的启用状态(ChangeDiskOfferingState)



##### API请求

 URLs

```
PUT zstack/v1/disk-offerings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"changeDiskOfferingState": {
"stateEvent": "enable"
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
-X PUT -d '{"changeDiskOfferingState":{"stateEvent":"enable"}}' \
http://localhost:8080/zstack/v1/disk-offerings/39c32ae614e23ce2a6877797a09037fd/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| stateEvent | String | body(包含在**changeDiskOfferingState**结构中) | 状态事件 | enable disable | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "5e84d8a44b2941eb96d9eec31e0524be",
"name": "diskOffering1",
"diskSize": 100.0,
"state": "Enabled",
"type": "DefaultDiskOfferingType",
"allocatorStrategy": "DefaultPrimaryStorageAllocationStrategy"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | DiskOfferingInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| diskSize | Long | 云盘大小 | 0.6 |
| sortKey | Integer |  | 0.6 |
| state | String | 状态（启动，禁用） | 0.6 |
| type | String | 类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |



##### SDK示例

 Java SDK

```
ChangeDiskOfferingStateAction action = new ChangeDiskOfferingStateAction();
action.uuid = "b99744228d4943959881b051cecb376d";
action.stateEvent = "enable";
action.sessionId = "8733eb947ada42bb8769ad170f889e98";
ChangeDiskOfferingStateAction.Result res = action.call();
```

 Python SDK

```
ChangeDiskOfferingStateAction action = ChangeDiskOfferingStateAction()
action.uuid = "521d538a214c42e39d16cef5a1e13cc9"
action.stateEvent = "enable"
action.sessionId = "7e7ba75914814242a268026ca77163e5"
ChangeDiskOfferingStateAction.Result res = action.call()
```

---

#### 更新云盘规格(UpdateDiskOffering)



##### API请求

 URLs

```
PUT zstack/v1/disk-offerings/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateDiskOffering": {
"name": "new name"
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
-X PUT -d '{"updateDiskOffering":{"name":"new name"}}' \
http://localhost:8080/zstack/v1/disk-offerings/1a2b9698ee163ad69374f765f6234f02/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateDiskOffering**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateDiskOffering**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



##### API返回

 返回示例

```
{
"inventory": {
"uuid": "a156bb54daa544628f2abff419c76977",
"name": "new name",
"diskSize": 100.0,
"state": "Enabled",
"type": "DefaultDiskOfferingType",
"allocatorStrategy": "DefaultPrimaryStorageAllocationStrategy"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | DiskOfferingInventory | 详情参考[inventory] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| diskSize | Long | 云盘大小 | 0.6 |
| sortKey | Integer |  | 0.6 |
| state | String | 状态（启动，禁用） | 0.6 |
| type | String | 类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| allocatorStrategy | String | 分配策略 | 0.6 |



##### SDK示例

 Java SDK

```
UpdateDiskOfferingAction action = new UpdateDiskOfferingAction();
action.uuid = "21226fe14a8042d2ad1d37640c8a8594";
action.name = "new name";
action.sessionId = "c8e71fd622614f15b3452a8fa451d037";
UpdateDiskOfferingAction.Result res = action.call();
```

 Python SDK

```
UpdateDiskOfferingAction action = UpdateDiskOfferingAction()
action.uuid = "30d4acc261f34c55a297a203fed852e2"
action.name = "new name"
action.sessionId = "0236ee9dd5d440de84f867e9d550172c"
UpdateDiskOfferingAction.Result res = action.call()
```

---

### 弹性伸缩组相关接口

---

#### 创建弹性伸缩组(CreateAutoScalingGroup)



##### API请求

 URLs

```
POST zstack/v1/autoscaling/groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "test-group",
    "description": "just for test",
    "scalingResourceType": "VmInstance",
    "minResourceSize": 2.0,
    "maxResourceSize": 10.0,
    "defaultCooldown": 60.0,
    "removalPolicy": "OldestInstance",
    "defaultEnable": false
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
-X POST -d '{"params":{"name":"test-group","description":"just for test","scalingResourceType":"VmInstance","minResourceSize":2.0,"maxResourceSize":10.0,"defaultCooldown":60.0,"removalPolicy":"OldestInstance","defaultEnable":false}}' http://localhost:8080/zstack/v1/autoscaling/groups
```

 参数列表
-

-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.1.0 |
| scalingResourceType | String | body(包含在**params**结构中) | 伸缩组伸缩资源类型，目前只支持云主机 | VmInstance | 3.1.0 |
| minResourceSize | Integer | body(包含在**params**结构中) | 伸缩组内云主机最少数量 |  | 3.1.0 |
| maxResourceSize | Integer | body(包含在**params**结构中) | 伸缩组内云主机最多数量 |  | 3.1.0 |
| defaultCooldown | Long | body(包含在**params**结构中) | 伸缩组规则默认冷却时间 |  | 3.1.0 |
| removalPolicy | String | body(包含在**params**结构中) | 删除云主机规则 | OldestInstance NewestInstance OldestScalingConfiguration MinimumCPUUsageInstance MinimumMemoryUsageInstance | 3.1.0 |
| defaultEnable (可选) | boolean | body(包含在**params**结构中) | 创建完成后，是否默认启用 |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-group",
    "uuid": "ff296e09f82e3a84af082257ff63d162",
    "description": "just for test",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingGroupInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingResourceType | String | 伸缩资源类型：云主机 | 3.1.0 |
| state | String | 伸缩组启用状态 | 3.1.0 |
| defaultCooldown | Long | 伸缩规则默认冷却时间 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| minResourceSize | Integer | 伸缩组里最少云主机数量 | 3.1.0 |
| maxResourceSize | Integer | 伸缩组里最多云主机数量 | 3.1.0 |
| removalPolicy | String | 删除云主机默认策略 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| attachedTemplates | List | 挂载的伸缩组云主机模板列表 | 3.1.0 |
| systemTags | List |  | 3.1.0 |



##### SDK示例

 Java SDK

```
CreateAutoScalingGroupAction action = new CreateAutoScalingGroupAction();
action.name = "test-group";
action.description = "just for test";
action.scalingResourceType = "VmInstance";
action.minResourceSize = 2.0;
action.maxResourceSize = 10.0;
action.defaultCooldown = 60.0;
action.removalPolicy = "OldestInstance";
action.defaultEnable = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAutoScalingGroupAction.Result res = action.call();
```

 Python SDK

```
CreateAutoScalingGroupAction action = CreateAutoScalingGroupAction()
action.name = "test-group"
action.description = "just for test"
action.scalingResourceType = "VmInstance"
action.minResourceSize = 2.0
action.maxResourceSize = 10.0
action.defaultCooldown = 60.0
action.removalPolicy = "OldestInstance"
action.defaultEnable = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAutoScalingGroupAction.Result res = action.call()
```

---

#### 删除弹性伸缩组(DeleteAutoScalingGroup)



##### API请求

 URLs

```
DELETE zstack/v1/autoscaling/groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/autoscaling/groups/09121b25fdf330538288d1ac81025563
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
DeleteAutoScalingGroupAction action = new DeleteAutoScalingGroupAction();
action.uuid = "09121b25fdf330538288d1ac81025563";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAutoScalingGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteAutoScalingGroupAction action = DeleteAutoScalingGroupAction()
action.uuid = "09121b25fdf330538288d1ac81025563"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAutoScalingGroupAction.Result res = action.call()
```

---

#### 修改弹性伸缩组(UpdateAutoScalingGroup)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAutoScalingGroup": {
    "name": "test-group2"
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
-X PUT -d '{"updateAutoScalingGroup":{"name":"test-group2"}}' http://localhost:8080/zstack/v1/autoscaling/groups/17a8d07735b631a688d6f95f3323fe91/actions
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| name (可选) | String | body(包含在**updateAutoScalingGroup**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**updateAutoScalingGroup**结构中) | 资源的详细描述 |  | 3.1.0 |
| minResourceSize (可选) | Integer | body(包含在**updateAutoScalingGroup**结构中) | 伸缩组内最少云主机数量 |  | 3.1.0 |
| maxResourceSize (可选) | Integer | body(包含在**updateAutoScalingGroup**结构中) | 伸缩组内最大云主机数量 |  | 3.1.0 |
| removalPolicy (可选) | String | body(包含在**updateAutoScalingGroup**结构中) | 删除云主机策略：创建时间最久的主机优先，新创建的云主机优先 | OldestInstance NewestInstance OldestScalingConfiguration MinimumCPUUsageInstance MinimumMemoryUsageInstance | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-load-balance-profile",
    "uuid": "95f4b920e6b63e318940a44c0f47788e",
    "description": "just for test",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingGroupInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingResourceType | String | 伸缩资源类型：云主机 | 3.1.0 |
| state | String | 伸缩组启用状态 | 3.1.0 |
| defaultCooldown | Long | 伸缩规则默认冷却时间 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| minResourceSize | Integer | 伸缩组里最少云主机数量 | 3.1.0 |
| maxResourceSize | Integer | 伸缩组里最多云主机数量 | 3.1.0 |
| removalPolicy | String | 删除云主机默认策略 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| attachedTemplates | List | 挂载的伸缩组云主机模板列表 | 3.1.0 |
| systemTags | List |  | 3.1.0 |



##### SDK示例

 Java SDK

```
UpdateAutoScalingGroupAction action = new UpdateAutoScalingGroupAction();
action.uuid = "17a8d07735b631a688d6f95f3323fe91";
action.name = "test-group2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAutoScalingGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateAutoScalingGroupAction action = UpdateAutoScalingGroupAction()
action.uuid = "17a8d07735b631a688d6f95f3323fe91"
action.name = "test-group2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAutoScalingGroupAction.Result res = action.call()
```

---

#### 查询弹性伸缩组(QueryAutoScalingGroup)



##### API请求

 URLs

```
GET /v1/autoscaling/groups
```


```
GET /v1/autoscaling/groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/88dbb881575e37c78e11e988c6db5f64
```



可查询字段

运行CLI命令行工具，输入QueryAutoScalingGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "test-group2",
      "uuid": "ed73d20804873d48bddee627a58ca71a",
      "description": "just for test",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingResourceType | String | 伸缩资源类型：云主机 | 3.1.0 |
| state | String | 伸缩组启用状态 | 3.1.0 |
| defaultCooldown | Long | 伸缩规则默认冷却时间 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| minResourceSize | Integer | 伸缩组里最少云主机数量 | 3.1.0 |
| maxResourceSize | Integer | 伸缩组里最多云主机数量 | 3.1.0 |
| removalPolicy | String | 删除云主机默认策略 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| attachedTemplates | List | 挂载的伸缩组云主机模板列表 | 3.1.0 |
| systemTags | List |  | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryAutoScalingGroupAction action = new QueryAutoScalingGroupAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAutoScalingGroupAction.Result res = action.call();
```

 Python SDK

```
QueryAutoScalingGroupAction action = QueryAutoScalingGroupAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAutoScalingGroupAction.Result res = action.call()
```

---

#### 查询弹性伸缩组活动列表(QueryAutoScalingGroupActivity)



##### API请求

 URLs

```
GET zstack/v1/autoscaling/groups/activities
```


```
GET zstack/v1/autoscaling/groups/activities/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/activities
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/activities/e075eb1434203006861a4bd00453f69f
```



可查询字段

运行CLI命令行工具，输入QueryAutoScalingGroupActivity并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "036f189a51633ec5bfa2f7e77ec1f5ac",
      "description": "just for test",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| scalingGroupUuid | String | 伸缩组UUID | 3.1.0 |
| activityAction | String | 伸缩活动类型 | 3.1.0 |
| scalingGroupRuleUuid | String | 伸缩规则UUID | 3.1.0 |
| cause | String | 触发伸缩活动的原因 | 3.1.0 |
| description | String | 活动详细描述 | 3.1.0 |
| status | String | 伸缩活动状态 | 3.1.0 |
| activityActionResultMessage | String | 伸缩活动执行结果 | 3.1.0 |
| endDate | Timestamp | 伸缩活动执行结束时间 | 3.1.0 |
| createDate | Timestamp | 伸缩活动创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryAutoScalingGroupActivityAction action = new QueryAutoScalingGroupActivityAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAutoScalingGroupActivityAction.Result res = action.call();
```

 Python SDK

```
QueryAutoScalingGroupActivityAction action = QueryAutoScalingGroupActivityAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAutoScalingGroupActivityAction.Result res = action.call()
```

---

#### 创建伸缩组云主机扩容规则(CreateAutoScalingGroupAddingNewInstanceRule)



##### API请求

 URLs

```
POST zstack/v1/autoscaling/rules/adding-new-instance
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "adjustmentType": "PercentChangeInCapacity",
    "adjustmentValue": 1.0,
    "name": "addingNewInstance",
    "description": "just for test",
    "autoScalingGroupUuid": "9e5900b0682d3eb8868637b455567cbd",
    "cooldown": 10.0
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
-X POST -d '{"params":{"adjustmentType":"PercentChangeInCapacity","adjustmentValue":1.0,"name":"addingNewInstance","description":"just for test","autoScalingGroupUuid":"9e5900b0682d3eb8868637b455567cbd","cooldown":10.0}}' http://localhost:8080/zstack/v1/autoscaling/rules/adding-new-instance
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| adjustmentType | String | body(包含在**params**结构中) | 扩容方式：增加指定数量云主机，按百分比增加云主机，增加云主机数量到指定值 | QuantityChangeInCapacity PercentChangeInCapacity TotalCapacity | 3.1.0 |
| adjustmentValue | Integer | body(包含在**params**结构中) | 增加大小 |  | 3.1.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.1.0 |
| autoScalingGroupUuid | String | body(包含在**params**结构中) | 伸缩组UUID |  | 3.1.0 |
| type (可选) | String | body(包含在**params**结构中) | 伸缩规则类型 |  | 3.1.0 |
| cooldown (可选) | Long | body(包含在**params**结构中) | 伸缩规则触发后的冷却时间 |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "type": "HealthProfile",
    "description": "just for test",
    "cooldown": 10.0,
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "name": "test-health-policy",
    "uuid": "f41b2b0ae44637a2af1985e362dc52d4"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingRuleInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| type | String | 伸缩组规则类型 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| cooldown | Long | 冷却时间 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingGroupUuid | String |  | 3.1.0 |
| state | AutoScalingRuleState | 详情参考[state] | 3.1.0 |
| status | AutoScalingRuleStatus | 详情参考[status] | 3.1.0 |
| ruleTriggers | List | 详情参考[ruleTriggers] | 3.1.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | AutoScalingRuleState | 启用状态 | 3.1.0 |
| Disabled | AutoScalingRuleState | 关闭状态 | 3.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | AutoScalingRuleStatus | 已创建 | 3.1.0 |
| WaitingForTrigger | AutoScalingRuleStatus | 等待触发 | 3.1.0 |
| Triggering | AutoScalingRuleStatus | 已触发 | 3.1.0 |
| Error | AutoScalingRuleStatus |  | 3.1.0 |

 #ruleTriggers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
CreateAutoScalingGroupAddingNewInstanceRuleAction action = new CreateAutoScalingGroupAddingNewInstanceRuleAction();
action.adjustmentType = "PercentChangeInCapacity";
action.adjustmentValue = 1.0;
action.name = "addingNewInstance";
action.description = "just for test";
action.autoScalingGroupUuid = "9e5900b0682d3eb8868637b455567cbd";
action.cooldown = 10.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAutoScalingGroupAddingNewInstanceRuleAction.Result res = action.call();
```

 Python SDK

```
CreateAutoScalingGroupAddingNewInstanceRuleAction action = CreateAutoScalingGroupAddingNewInstanceRuleAction()
action.adjustmentType = "PercentChangeInCapacity"
action.adjustmentValue = 1.0
action.name = "addingNewInstance"
action.description = "just for test"
action.autoScalingGroupUuid = "9e5900b0682d3eb8868637b455567cbd"
action.cooldown = 10.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAutoScalingGroupAddingNewInstanceRuleAction.Result res = action.call()
```

---

#### 创建伸缩组云主机缩容规则(CreateAutoScalingGroupRemovalInstanceRule)



##### API请求

 URLs

```
POST zstack/v1/autoscaling/rules/removal-instance
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "adjustmentType": "PercentChangeInCapacity",
    "adjustmentValue": 1.0,
    "removalPolicy": "MinimumMemoryUsageInstance",
    "name": "removalInstance",
    "description": "just for test",
    "autoScalingGroupUuid": "8a8070f9926733478acad7bf0ba60a63",
    "cooldown": 10.0
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
-X POST -d '{"params":{"adjustmentType":"PercentChangeInCapacity","adjustmentValue":1.0,"removalPolicy":"MinimumMemoryUsageInstance","name":"removalInstance","description":"just for test","autoScalingGroupUuid":"8a8070f9926733478acad7bf0ba60a63","cooldown":10.0}}' http://localhost:8080/zstack/v1/autoscaling/rules/removal-instance
```

 参数列表
-
-
-

-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| adjustmentType | String | body(包含在**params**结构中) | 缩容方式：减少指定数量云主机，按百分比减少云主机，减少云主机数量到指定值 | QuantityChangeInCapacity PercentChangeInCapacity TotalCapacity | 3.1.0 |
| adjustmentValue | Integer | body(包含在**params**结构中) | 减少数值 |  | 3.1.0 |
| removalPolicy | String | body(包含在**params**结构中) | 删除云主机策略 | OldestInstance NewestInstance OldestScalingConfiguration MinimumCPUUsageInstance MinimumMemoryUsageInstance | 3.1.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.1.0 |
| autoScalingGroupUuid | String | body(包含在**params**结构中) | 伸缩组UUID |  | 3.1.0 |
| type (可选) | String | body(包含在**params**结构中) | 伸缩规则类型 |  | 3.1.0 |
| cooldown (可选) | Long | body(包含在**params**结构中) | 伸缩规则触发后的冷却时间 |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "type": "HealthProfile",
    "description": "just for test",
    "cooldown": 10.0,
    "state": "Enabled",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "name": "test-health-policy",
    "uuid": "f41b2b0ae44637a2af1985e362dc52d4"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingRuleInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| type | String | 伸缩组规则类型 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| cooldown | Long | 冷却时间 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingGroupUuid | String |  | 3.1.0 |
| state | AutoScalingRuleState | 详情参考[state] | 3.1.0 |
| status | AutoScalingRuleStatus | 详情参考[status] | 3.1.0 |
| ruleTriggers | List | 详情参考[ruleTriggers] | 3.1.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | AutoScalingRuleState | 启用状态 | 3.1.0 |
| Disabled | AutoScalingRuleState | 关闭状态 | 3.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | AutoScalingRuleStatus | 已创建 | 3.1.0 |
| WaitingForTrigger | AutoScalingRuleStatus | 等待触发 | 3.1.0 |
| Triggering | AutoScalingRuleStatus | 已触发 | 3.1.0 |
| Error | AutoScalingRuleStatus |  | 3.1.0 |

 #ruleTriggers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
CreateAutoScalingGroupRemovalInstanceRuleAction action = new CreateAutoScalingGroupRemovalInstanceRuleAction();
action.adjustmentType = "PercentChangeInCapacity";
action.adjustmentValue = 1.0;
action.removalPolicy = "MinimumMemoryUsageInstance";
action.name = "removalInstance";
action.description = "just for test";
action.autoScalingGroupUuid = "8a8070f9926733478acad7bf0ba60a63";
action.cooldown = 10.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAutoScalingGroupRemovalInstanceRuleAction.Result res = action.call();
```

 Python SDK

```
CreateAutoScalingGroupRemovalInstanceRuleAction action = CreateAutoScalingGroupRemovalInstanceRuleAction()
action.adjustmentType = "PercentChangeInCapacity"
action.adjustmentValue = 1.0
action.removalPolicy = "MinimumMemoryUsageInstance"
action.name = "removalInstance"
action.description = "just for test"
action.autoScalingGroupUuid = "8a8070f9926733478acad7bf0ba60a63"
action.cooldown = 10.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAutoScalingGroupRemovalInstanceRuleAction.Result res = action.call()
```

---

#### 删除伸缩规则(DeleteAutoScalingRule)



##### API请求

 URLs

```
DELETE zstack/v1/autoscaling/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/autoscaling/rules/55774c4baaea33c4a47b16c772446077
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 伸缩规则UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
DeleteAutoScalingRuleAction action = new DeleteAutoScalingRuleAction();
action.uuid = "55774c4baaea33c4a47b16c772446077";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAutoScalingRuleAction.Result res = action.call();
```

 Python SDK

```
DeleteAutoScalingRuleAction action = DeleteAutoScalingRuleAction()
action.uuid = "55774c4baaea33c4a47b16c772446077"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAutoScalingRuleAction.Result res = action.call()
```

---

#### 修改弹性伸缩组规则(UpdateAutoScalingRule)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/rules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAutoScalingRule": {
    "name": "test name2"
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
-X PUT -d '{"updateAutoScalingRule":{"name":"test name2"}}' http://localhost:8080/zstack/v1/autoscaling/rules/4e8be98cd3a93176b9d38f3f934f1c2a/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| name (可选) | String | body(包含在**updateAutoScalingRule**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**updateAutoScalingRule**结构中) | 资源的详细描述 |  | 3.1.0 |
| cooldown (可选) | Long | body(包含在**updateAutoScalingRule**结构中) | 冷却时间 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "type": "HealthProfile",
    "description": "just for test",
    "cooldown": 10.0,
    "state": "Enabled",
    "status": "Created",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "name": "test name2",
    "uuid": "39009f21b4a035c08db6cbff4ebe276c"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingRuleInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| type | String | 伸缩组规则类型 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| cooldown | Long | 冷却时间 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingGroupUuid | String |  | 3.1.0 |
| state | AutoScalingRuleState | 详情参考[state] | 3.1.0 |
| status | AutoScalingRuleStatus | 详情参考[status] | 3.1.0 |
| ruleTriggers | List | 详情参考[ruleTriggers] | 3.1.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | AutoScalingRuleState | 启用状态 | 3.1.0 |
| Disabled | AutoScalingRuleState | 关闭状态 | 3.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | AutoScalingRuleStatus | 已创建 | 3.1.0 |
| WaitingForTrigger | AutoScalingRuleStatus | 等待触发 | 3.1.0 |
| Triggering | AutoScalingRuleStatus | 已触发 | 3.1.0 |
| Error | AutoScalingRuleStatus |  | 3.1.0 |

 #ruleTriggers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
UpdateAutoScalingRuleAction action = new UpdateAutoScalingRuleAction();
action.uuid = "4e8be98cd3a93176b9d38f3f934f1c2a";
action.name = "test name2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAutoScalingRuleAction.Result res = action.call();
```

 Python SDK

```
UpdateAutoScalingRuleAction action = UpdateAutoScalingRuleAction()
action.uuid = "4e8be98cd3a93176b9d38f3f934f1c2a"
action.name = "test name2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAutoScalingRuleAction.Result res = action.call()
```

---

#### 修改伸缩组扩容规则(UpdateAutoScalingGroupAddingNewInstanceRule)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/rules/adding-new-instance/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAutoScalingGroupAddingNewInstanceRule": {
    "name": "test name2"
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
-X PUT -d '{"updateAutoScalingGroupAddingNewInstanceRule":{"name":"test name2"}}' http://localhost:8080/zstack/v1/autoscaling/rules/adding-new-instance/e61646c51ac1396fb6d7d413dc5de3f8/actions
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| adjustmentType (可选) | String | body(包含在**updateAutoScalingGroupAddingNewInstanceRule**结构中) | 扩容方式：减少指定数量云主机，按百分比减少云主机，减少云主机数量到指定值 | QuantityChangeInCapacity PercentChangeInCapacity TotalCapacity | 3.1.0 |
| adjustmentValue (可选) | Integer | body(包含在**updateAutoScalingGroupAddingNewInstanceRule**结构中) | 扩容数值 |  | 3.1.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| name (可选) | String | body(包含在**updateAutoScalingGroupAddingNewInstanceRule**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**updateAutoScalingGroupAddingNewInstanceRule**结构中) | 资源的详细描述 |  | 3.1.0 |
| cooldown (可选) | Long | body(包含在**updateAutoScalingGroupAddingNewInstanceRule**结构中) | 冷却时间 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "type": "HealthProfile",
    "description": "just for test",
    "cooldown": 10.0,
    "state": "Enabled",
    "status": "Created",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "name": "test name2",
    "uuid": "39009f21b4a035c08db6cbff4ebe276c"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingRuleInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| type | String | 伸缩组规则类型 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| cooldown | Long | 冷却时间 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingGroupUuid | String |  | 3.1.0 |
| state | AutoScalingRuleState | 详情参考[state] | 3.1.0 |
| status | AutoScalingRuleStatus | 详情参考[status] | 3.1.0 |
| ruleTriggers | List | 详情参考[ruleTriggers] | 3.1.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | AutoScalingRuleState | 启用状态 | 3.1.0 |
| Disabled | AutoScalingRuleState | 关闭状态 | 3.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | AutoScalingRuleStatus | 已创建 | 3.1.0 |
| WaitingForTrigger | AutoScalingRuleStatus | 等待触发 | 3.1.0 |
| Triggering | AutoScalingRuleStatus | 已触发 | 3.1.0 |
| Error | AutoScalingRuleStatus |  | 3.1.0 |

 #ruleTriggers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
UpdateAutoScalingGroupAddingNewInstanceRuleAction action = new UpdateAutoScalingGroupAddingNewInstanceRuleAction();
action.uuid = "e61646c51ac1396fb6d7d413dc5de3f8";
action.name = "test name2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAutoScalingGroupAddingNewInstanceRuleAction.Result res = action.call();
```

 Python SDK

```
UpdateAutoScalingGroupAddingNewInstanceRuleAction action = UpdateAutoScalingGroupAddingNewInstanceRuleAction()
action.uuid = "e61646c51ac1396fb6d7d413dc5de3f8"
action.name = "test name2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAutoScalingGroupAddingNewInstanceRuleAction.Result res = action.call()
```

---

#### 修改伸缩组缩容规则(UpdateAutoScalingGroupRemovalInstanceRule)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/rules/removal-instance/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAutoScalingGroupRemovalInstanceRule": {
    "name": "test name2"
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
-X PUT -d '{"updateAutoScalingGroupRemovalInstanceRule":{"name":"test name2"}}' http://localhost:8080/zstack/v1/autoscaling/rules/removal-instance/66d7d0b81f1c399bb98063dfb0d3beaf/actions
```

 参数列表
-
-
-

-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| adjustmentType (可选) | String | body(包含在**updateAutoScalingGroupRemovalInstanceRule**结构中) | 缩容方式：减少指定数量云主机，按百分比减少云主机，减少云主机数量到指定值 | QuantityChangeInCapacity PercentChangeInCapacity TotalCapacity | 3.1.0 |
| adjustmentValue (可选) | Integer | body(包含在**updateAutoScalingGroupRemovalInstanceRule**结构中) | 缩容数值 |  | 3.1.0 |
| removalPolicy (可选) | String | body(包含在**updateAutoScalingGroupRemovalInstanceRule**结构中) | 删除云主机策略 | OldestInstance NewestInstance OldestScalingConfiguration MinimumCPUUsageInstance MinimumMemoryUsageInstance | 3.1.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| name (可选) | String | body(包含在**updateAutoScalingGroupRemovalInstanceRule**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**updateAutoScalingGroupRemovalInstanceRule**结构中) | 资源的详细描述 |  | 3.1.0 |
| cooldown (可选) | Long | body(包含在**updateAutoScalingGroupRemovalInstanceRule**结构中) | 冷却时间 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "type": "HealthProfile",
    "description": "just for test",
    "cooldown": 10.0,
    "state": "Enabled",
    "status": "Created",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "name": "test name2",
    "uuid": "39009f21b4a035c08db6cbff4ebe276c"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingRuleInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| type | String | 伸缩组规则类型 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| cooldown | Long | 冷却时间 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingGroupUuid | String |  | 3.1.0 |
| state | AutoScalingRuleState | 详情参考[state] | 3.1.0 |
| status | AutoScalingRuleStatus | 详情参考[status] | 3.1.0 |
| ruleTriggers | List | 详情参考[ruleTriggers] | 3.1.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | AutoScalingRuleState | 启用状态 | 3.1.0 |
| Disabled | AutoScalingRuleState | 关闭状态 | 3.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | AutoScalingRuleStatus | 已创建 | 3.1.0 |
| WaitingForTrigger | AutoScalingRuleStatus | 等待触发 | 3.1.0 |
| Triggering | AutoScalingRuleStatus | 已触发 | 3.1.0 |
| Error | AutoScalingRuleStatus |  | 3.1.0 |

 #ruleTriggers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
UpdateAutoScalingGroupRemovalInstanceRuleAction action = new UpdateAutoScalingGroupRemovalInstanceRuleAction();
action.uuid = "66d7d0b81f1c399bb98063dfb0d3beaf";
action.name = "test name2";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAutoScalingGroupRemovalInstanceRuleAction.Result res = action.call();
```

 Python SDK

```
UpdateAutoScalingGroupRemovalInstanceRuleAction action = UpdateAutoScalingGroupRemovalInstanceRuleAction()
action.uuid = "66d7d0b81f1c399bb98063dfb0d3beaf"
action.name = "test name2"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAutoScalingGroupRemovalInstanceRuleAction.Result res = action.call()
```

---

#### 查询伸缩规则(QueryAutoScalingRule)



##### API请求

 URLs

```
GET zstack/v1/autoscaling/groups/rules
```


```
GET zstack/v1/autoscaling/groups/rules/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/rules
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/rules/404fe677c3213e4bbb39d91a2efb3595
```



可查询字段

运行CLI命令行工具，输入QueryAutoScalingRule并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "type": "LoadBalanceProfile",
      "description": "just for test",
      "cooldown": 100.0,
      "state": "Enabled",
      "status": "Created",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "name": "test-load-balance-profile",
      "uuid": "a0d075cd82c13084b29f93325651fc65"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| type | String | 伸缩组规则类型 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| cooldown | Long | 冷却时间 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingGroupUuid | String |  | 3.1.0 |
| state | AutoScalingRuleState | 详情参考[state] | 3.1.0 |
| status | AutoScalingRuleStatus | 详情参考[status] | 3.1.0 |
| ruleTriggers | List | 详情参考[ruleTriggers] | 3.1.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | AutoScalingRuleState | 启用状态 | 3.1.0 |
| Disabled | AutoScalingRuleState | 关闭状态 | 3.1.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | AutoScalingRuleStatus | 已创建 | 3.1.0 |
| WaitingForTrigger | AutoScalingRuleStatus | 等待触发 | 3.1.0 |
| Triggering | AutoScalingRuleStatus | 已触发 | 3.1.0 |
| Error | AutoScalingRuleStatus |  | 3.1.0 |

 #ruleTriggers

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryAutoScalingRuleAction action = new QueryAutoScalingRuleAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAutoScalingRuleAction.Result res = action.call();
```

 Python SDK

```
QueryAutoScalingRuleAction action = QueryAutoScalingRuleAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAutoScalingRuleAction.Result res = action.call()
```

---

#### 创建伸缩规则报警触发器(CreateAutoScalingRuleAlarmTrigger)



##### API请求

 URLs

```
POST zstack/v1/zwatch/alarms/{alarmUuid}/autoscaling/rules/{ruleUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "createAlarmTrigger"
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
-X POST -d '{"params":{"name":"createAlarmTrigger"}}' http://localhost:8080/zstack/v1/zwatch/alarms/00f142f73b633bf0ab4a1e34aa84062b/autoscaling/rules/14b74127a20634c6b6d3566ef33b0600
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| alarmUuid | String | url | 报警UUID |  | 3.1.0 |
| triggerType (可选) | String | body(包含在**params**结构中) | 触发器类型 |  | 3.1.0 |
| name | String | body(包含在**params**结构中) | 触发器名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.1.0 |
| ruleUuid | String | url | 伸缩规则UUID |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-group",
    "uuid": "d09cd777bb863d6bbfe1267b590e947e",
    "description": "just for test",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingRuleTriggerInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
CreateAutoScalingRuleAlarmTriggerAction action = new CreateAutoScalingRuleAlarmTriggerAction();
action.alarmUuid = "00f142f73b633bf0ab4a1e34aa84062b";
action.name = "createAlarmTrigger";
action.ruleUuid = "14b74127a20634c6b6d3566ef33b0600";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAutoScalingRuleAlarmTriggerAction.Result res = action.call();
```

 Python SDK

```
CreateAutoScalingRuleAlarmTriggerAction action = CreateAutoScalingRuleAlarmTriggerAction()
action.alarmUuid = "00f142f73b633bf0ab4a1e34aa84062b"
action.name = "createAlarmTrigger"
action.ruleUuid = "14b74127a20634c6b6d3566ef33b0600"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAutoScalingRuleAlarmTriggerAction.Result res = action.call()
```

---

#### 创建伸缩规则定时任务触发器(CreateAutoScalingRuleSchedulerJobTrigger)



##### API请求

 URLs

```
POST zstack/v1/scheduler/jobs/{schedulerJobUuid}/autoscaling/rules/{ruleUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "createAlarmTrigger"
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
-X POST -d '{"params":{"name":"createAlarmTrigger"}}' http://localhost:8080/zstack/v1/scheduler/jobs/2f194775b8ab3e2b912f92a74501a7ea/autoscaling/rules/852f6e9199c439d0861eec939c5fbbe1
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobUuid | String | url | 定时任务Uuid |  | 4.1.0 |
| triggerType (可选) | String | body(包含在`params`结构中) | 触发器类型 |  | 4.1.0 |
| name | String | body(包含在`params`结构中) | 触发器名称 |  | 4.1.0 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 4.1.0 |
| ruleUuid | String | url | 伸缩规则UUID |  | 4.1.0 |
| resourceUuid (可选) | String | body(包含在`params`结构中) | 资源UUID |  | 4.1.0 |
| tagUuids (可选) | List | body(包含在`params`结构中) | 标签UUID列表 |  | 4.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-group",
    "uuid": "d09cd777bb863d6bbfe1267b590e947e",
    "description": "just for test",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.1.0 |
| inventory | AutoScalingRuleTriggerInventory | 详情参考[inventory] | 4.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.1.0 |
| description | String | 错误的概要描述 | 4.1.0 |
| details | String | 错误的详细信息 | 4.1.0 |
| elaboration | String | 保留字段，默认为null | 4.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 4.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.1.0 |
| type | String | 触发器类型 | 4.1.0 |
| ruleUuid | String | 伸缩规则UUID | 4.1.0 |
| description | String | 资源的详细描述 | 4.1.0 |
| state | String | 触发器状态 | 4.1.0 |
| createDate | Timestamp | 创建时间 | 4.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.1.0 |



##### SDK示例

 Java SDK

```
CreateAutoScalingRuleSchedulerJobTriggerAction action = new CreateAutoScalingRuleSchedulerJobTriggerAction();
action.schedulerJobUuid = "2f194775b8ab3e2b912f92a74501a7ea";
action.name = "createAlarmTrigger";
action.ruleUuid = "852f6e9199c439d0861eec939c5fbbe1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAutoScalingRuleSchedulerJobTriggerAction.Result res = action.call();
```

 Python SDK

```
CreateAutoScalingRuleSchedulerJobTriggerAction action = CreateAutoScalingRuleSchedulerJobTriggerAction()
action.schedulerJobUuid = "2f194775b8ab3e2b912f92a74501a7ea"
action.name = "createAlarmTrigger"
action.ruleUuid = "852f6e9199c439d0861eec939c5fbbe1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAutoScalingRuleSchedulerJobTriggerAction.Result res = action.call()
```

---

#### 删除伸缩规则触发器(DeleteAutoScalingRuleTrigger)



##### API请求

 URLs

```
DELETE zstack/v1/autoscaling/groups/rules/triggers/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/autoscaling/groups/rules/triggers/c81896a39caf320d988503625feb5a84
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
DeleteAutoScalingRuleTriggerAction action = new DeleteAutoScalingRuleTriggerAction();
action.uuid = "c81896a39caf320d988503625feb5a84";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAutoScalingRuleTriggerAction.Result res = action.call();
```

 Python SDK

```
DeleteAutoScalingRuleTriggerAction action = DeleteAutoScalingRuleTriggerAction()
action.uuid = "c81896a39caf320d988503625feb5a84"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAutoScalingRuleTriggerAction.Result res = action.call()
```

---

#### 查询伸缩规则触发器列表(QueryAutoScalingRuleTrigger)



##### API请求

 URLs

```
GET zstack/v1/autoscaling/groups/rules/trigger
```


```
GET zstack/v1/autoscaling/groups/rules/trigger/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/rules/trigger
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/rules/trigger/7af20bc1523536289223a7410ca04abd
```



可查询字段

运行CLI命令行工具，输入QueryAutoScalingRuleTrigger并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "test-load-balance-profile",
      "uuid": "cf762471646230209faee02b6423625c",
      "type": "Alarm",
      "description": "just for test",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| type | String | 触发器类型 | 3.1.0 |
| ruleUuid | String | 伸缩规则UUID | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| state | String | 触发器状态 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryAutoScalingRuleTriggerAction action = new QueryAutoScalingRuleTriggerAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAutoScalingRuleTriggerAction.Result res = action.call();
```

 Python SDK

```
QueryAutoScalingRuleTriggerAction action = QueryAutoScalingRuleTriggerAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAutoScalingRuleTriggerAction.Result res = action.call()
```

---

#### 创建伸缩组云主机模块(CreateAutoScalingVmTemplate)



##### API请求

 URLs

```
POST zstack/v1/autoscaling/vmtemplate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmInstanceName": "vm1",
    "vmInstanceDescription": "vm1 desc",
    "vmInstanceOfferingUuid": "07e435acb1c230d5b328f23e5a840da2",
    "imageUuid": "77407eb341e732b2a45ad5bad4a2c76e",
    "l3NetworkUuids": [
      "93edf15377e233a291fe1ab1c4190241"
    ],
    "vmInstanceType": "UserVm",
    "rootDiskOfferingUuid": "85f44fe072733d90becb4ddd8a9867de",
    "dataDiskOfferingUuids": [
      "22247b0705a43af7a47ed6428c537934"
    ],
    "vmInstanceZoneUuid": "04e22fb60516363a94c93e7f299a1eb3",
    "vmInstanceClusterUuid": "792ec8d3dac83f10b29f0924e0787cef",
    "hostUuid": "41782afc684036c092a803b58413420e",
    "primaryStorageUuidForRootVolume": "8e3de0904fd937bdaaf2d29ea510a434",
    "defaultL3NetworkUuid": "f7a50ab3ffb038ddb1f366e6f87db083",
    "strategy": "InstantStart",
    "name": "template1",
    "description": "for new vm"
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
-X POST -d '{"params":{"vmInstanceName":"vm1","vmInstanceDescription":"vm1 desc","vmInstanceOfferingUuid":"07e435acb1c230d5b328f23e5a840da2","imageUuid":"77407eb341e732b2a45ad5bad4a2c76e","l3NetworkUuids":["93edf15377e233a291fe1ab1c4190241"],"vmInstanceType":"UserVm","rootDiskOfferingUuid":"85f44fe072733d90becb4ddd8a9867de","dataDiskOfferingUuids":["22247b0705a43af7a47ed6428c537934"],"vmInstanceZoneUuid":"04e22fb60516363a94c93e7f299a1eb3","vmInstanceClusterUuid":"792ec8d3dac83f10b29f0924e0787cef","hostUuid":"41782afc684036c092a803b58413420e","primaryStorageUuidForRootVolume":"8e3de0904fd937bdaaf2d29ea510a434","defaultL3NetworkUuid":"f7a50ab3ffb038ddb1f366e6f87db083","strategy":"InstantStart","name":"template1","description":"for new vm"}}' http://localhost:8080/zstack/v1/autoscaling/vmtemplate
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceName | String | body(包含在**params**结构中) | 云主机名称 |  | 3.1.0 |
| vmInstanceDescription (可选) | String | body(包含在**params**结构中) | 云主机描述 |  | 3.1.0 |
| vmInstanceOfferingUuid | String | body(包含在**params**结构中) | 云主机实例规则 |  | 3.1.0 |
| imageUuid | String | body(包含在**params**结构中) | 云主机镜像UUID |  | 3.1.0 |
| l3NetworkUuids | List | body(包含在**`params`**结构中) | 云主机三层网络列表 |  | 3.1.0 |
| rootDiskOfferingUuid (可选) | String | body(包含在**params**结构中) | 云主机根云盘规格 |  | 3.1.0 |
| dataDiskOfferingUuids (可选) | List | body(包含在**params**结构中) | 数据盘规格列表 |  | 3.1.0 |
| vmInstanceZoneUuid (可选) | String | body(包含在**params**结构中) | 云主机所属地区 |  | 3.1.0 |
| vmInstanceClusterUuid (可选) | String | body(包含在**params**结构中) | 云主机所属集群 |  | 3.1.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 3.1.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根云盘主存储UUID |  | 3.1.0 |
| defaultL3NetworkUuid | String | body(包含在**params**结构中) | 云主机默认三层网络 |  | 3.1.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.1.0 |
| type (可选) | String | body(包含在**params**结构中) | 模板类型 |  | 3.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |


  - 选项格式为：`affinityGroupUuid::亲合组uuid`。
  - 例如：`affinityGroupUuid::ade3ccc31fc63ac2937b2210c21c39b1`
- 例如：`affinityGroupUuid::ade3ccc31fc63ac2937b2210c21c39b1`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "template",
    "description": "desc",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingTemplateInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| type | String | 模板类型 | 3.1.0 |
| state | String | 模板启用状态 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
CreateAutoScalingVmTemplateAction action = new CreateAutoScalingVmTemplateAction();
action.vmInstanceName = "vm1";
action.vmInstanceDescription = "vm1 desc";
action.vmInstanceOfferingUuid = "07e435acb1c230d5b328f23e5a840da2";
action.imageUuid = "77407eb341e732b2a45ad5bad4a2c76e";
action.l3NetworkUuids = asList("93edf15377e233a291fe1ab1c4190241");
action.vmInstanceType = "UserVm";
action.rootDiskOfferingUuid = "85f44fe072733d90becb4ddd8a9867de";
action.dataDiskOfferingUuids = asList("22247b0705a43af7a47ed6428c537934");
action.vmInstanceZoneUuid = "04e22fb60516363a94c93e7f299a1eb3";
action.vmInstanceClusterUuid = "792ec8d3dac83f10b29f0924e0787cef";
action.hostUuid = "41782afc684036c092a803b58413420e";
action.primaryStorageUuidForRootVolume = "8e3de0904fd937bdaaf2d29ea510a434";
action.defaultL3NetworkUuid = "f7a50ab3ffb038ddb1f366e6f87db083";
action.strategy = "InstantStart";
action.name = "template1";
action.description = "for new vm";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateAutoScalingVmTemplateAction.Result res = action.call();
```

 Python SDK

```
CreateAutoScalingVmTemplateAction action = CreateAutoScalingVmTemplateAction()
action.vmInstanceName = "vm1"
action.vmInstanceDescription = "vm1 desc"
action.vmInstanceOfferingUuid = "07e435acb1c230d5b328f23e5a840da2"
action.imageUuid = "77407eb341e732b2a45ad5bad4a2c76e"
action.l3NetworkUuids = [93edf15377e233a291fe1ab1c4190241]
action.vmInstanceType = "UserVm"
action.rootDiskOfferingUuid = "85f44fe072733d90becb4ddd8a9867de"
action.dataDiskOfferingUuids = [22247b0705a43af7a47ed6428c537934]
action.vmInstanceZoneUuid = "04e22fb60516363a94c93e7f299a1eb3"
action.vmInstanceClusterUuid = "792ec8d3dac83f10b29f0924e0787cef"
action.hostUuid = "41782afc684036c092a803b58413420e"
action.primaryStorageUuidForRootVolume = "8e3de0904fd937bdaaf2d29ea510a434"
action.defaultL3NetworkUuid = "f7a50ab3ffb038ddb1f366e6f87db083"
action.strategy = "InstantStart"
action.name = "template1"
action.description = "for new vm"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateAutoScalingVmTemplateAction.Result res = action.call()
```

---

#### 将云主机模块添加到弹性伸缩组(AttachAutoScalingTemplateToGroup)



##### API请求

 URLs

```
POST zstack/v1/autoscaling/template/{uuid}/groups/{groupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/autoscaling/template/a53e0f84df15313bba8560f6567da2d9/groups/284172349b50324a9c2b8a09a28b3294
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 模板UUID |  | 3.1.0 |
| groupUuid | String | url | 伸缩组UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-group",
    "uuid": "32d1739bb918364a840d0ff0130eda61",
    "description": "just for test",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "attachedTemplates": [
      "e54e8d9e51113de2b6742ace7bfee306"
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingGroupInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingResourceType | String | 伸缩资源类型：云主机 | 3.1.0 |
| state | String | 伸缩组启用状态 | 3.1.0 |
| defaultCooldown | Long | 伸缩规则默认冷却时间 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| minResourceSize | Integer | 伸缩组里最少云主机数量 | 3.1.0 |
| maxResourceSize | Integer | 伸缩组里最多云主机数量 | 3.1.0 |
| removalPolicy | String | 删除云主机默认策略 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| attachedTemplates | List | 挂载的伸缩组云主机模板列表 | 3.1.0 |
| systemTags | List |  | 3.1.0 |



##### SDK示例

 Java SDK

```
AttachAutoScalingTemplateToGroupAction action = new AttachAutoScalingTemplateToGroupAction();
action.uuid = "a53e0f84df15313bba8560f6567da2d9";
action.groupUuid = "284172349b50324a9c2b8a09a28b3294";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachAutoScalingTemplateToGroupAction.Result res = action.call();
```

 Python SDK

```
AttachAutoScalingTemplateToGroupAction action = AttachAutoScalingTemplateToGroupAction()
action.uuid = "a53e0f84df15313bba8560f6567da2d9"
action.groupUuid = "284172349b50324a9c2b8a09a28b3294"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachAutoScalingTemplateToGroupAction.Result res = action.call()
```

---

#### 删除伸缩组模板(DeleteAutoScalingTemplate)



##### API请求

 URLs

```
DELETE zstack/v1/autoscaling/template/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/autoscaling/template/5c9e41a7d5c9335f99d639e75c294392
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
DeleteAutoScalingTemplateAction action = new DeleteAutoScalingTemplateAction();
action.uuid = "5c9e41a7d5c9335f99d639e75c294392";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAutoScalingTemplateAction.Result res = action.call();
```

 Python SDK

```
DeleteAutoScalingTemplateAction action = DeleteAutoScalingTemplateAction()
action.uuid = "5c9e41a7d5c9335f99d639e75c294392"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAutoScalingTemplateAction.Result res = action.call()
```

---

#### 卸载伸缩组模板(DetachAutoScalingTemplateFromGroup)



##### API请求

 URLs

```
DELETE zstack/v1/autoscaling/template/{uuid}/groups/{groupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/autoscaling/template/801a456fff0a355f9159d74af32026b9/groups/bdbbb1d168023ec7b9331bddd1b55b88
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| templateUuid | String | body | 模板UUID |  | 3.1.0 |
| groupUuid | String | url | 伸缩组UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "test-group",
    "uuid": "33cebe4b8d0b3e34bf2f9c517234bac9",
    "description": "just for test",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventory | AutoScalingGroupInventory | 详情参考[inventory] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| scalingResourceType | String | 伸缩资源类型：云主机 | 3.1.0 |
| state | String | 伸缩组启用状态 | 3.1.0 |
| defaultCooldown | Long | 伸缩规则默认冷却时间 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| minResourceSize | Integer | 伸缩组里最少云主机数量 | 3.1.0 |
| maxResourceSize | Integer | 伸缩组里最多云主机数量 | 3.1.0 |
| removalPolicy | String | 删除云主机默认策略 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| attachedTemplates | List | 挂载的伸缩组云主机模板列表 | 3.1.0 |
| systemTags | List |  | 3.1.0 |



##### SDK示例

 Java SDK

```
DetachAutoScalingTemplateFromGroupAction action = new DetachAutoScalingTemplateFromGroupAction();
action.templateUuid = "801a456fff0a355f9159d74af32026b9";
action.groupUuid = "bdbbb1d168023ec7b9331bddd1b55b88";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachAutoScalingTemplateFromGroupAction.Result res = action.call();
```

 Python SDK

```
DetachAutoScalingTemplateFromGroupAction action = DetachAutoScalingTemplateFromGroupAction()
action.templateUuid = "801a456fff0a355f9159d74af32026b9"
action.groupUuid = "bdbbb1d168023ec7b9331bddd1b55b88"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachAutoScalingTemplateFromGroupAction.Result res = action.call()
```

---

#### 查询伸缩组云主机模板(QueryAutoScalingVmTemplate)



##### API请求

 URLs

```
GET zstack/v1/autoscaling/vmtemplate
```


```
GET zstack/v1/autoscaling/vmtemplate/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/vmtemplate
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/vmtemplate/8b6b502328bc3755a237f9a67980dd32
```



可查询字段

运行CLI命令行工具，输入QueryAutoScalingVmTemplate并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "l3NetworkUuids": [
        "9f56c162374d382f9ddb7c383bce6887",
        "8e07df171471330c83306d78063fba69"
      ],
      "rootDiskOfferingUuid": "57fb695d2d033c1e849dac6fb87cebb5",
      "dataDiskOfferingUuids": [
        "52bfe290f5363130a1452e2ca1c57783",
        "8022018c7f6834d4a7a62a02128672ed"
      ],
      "vmInstanceZoneUuid": "cefa21204105347a82148c099c09a0cb",
      "vmInstanceClusterUuid": "ad7fcc77266f34e8a64fd208a9b7ed38",
      "hostUuid": "975ceb93de173b22a2b073ee856166e3",
      "primaryStorageUuidForRootVolume": "87cf45bf5a37364d85ae9968af7d2bd1",
      "defaultL3NetworkUuid": "8e07df171471330c83306d78063fba69",
      "uuid": "785259bf48303b0d9a4a34ddc3774da5",
      "name": "test-template",
      "description": "just for test",
      "type": "VmInstance",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| vmInstanceName | String | 云主机名称 | 3.1.0 |
| vmInstanceType | String | 云主机类型 | 3.1.0 |
| vmInstanceDescription | String | 云主机描述 | 3.1.0 |
| vmInstanceOfferingUuid | String | 云主机实例规格 | 3.1.0 |
| imageUuid | String | 云主机镜像UUID | 3.1.0 |
| l3NetworkUuids | List | 云主机三层网络列表 | 3.1.0 |
| rootDiskOfferingUuid | String | 云主机根云盘规格 | 3.1.0 |
| dataDiskOfferingUuids | List | 云主机数据盘规格列表 | 3.1.0 |
| vmInstanceZoneUuid | String | 云主机所属区域 | 3.1.0 |
| vmInstanceClusterUuid | String | 云主机所属集群 | 3.1.0 |
| hostUuid | String | 云主机物理机UUID | 3.1.0 |
| primaryStorageUuidForRootVolume | String | 云主机根云盘所在主存储 | 3.1.0 |
| defaultL3NetworkUuid | String | 云主机默认三层网络 | 3.1.0 |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| name | String | 资源名称 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| type | String | 模板类型 | 3.1.0 |
| state | String | 模板启用状态 | 3.1.0 |
| systemTags | List |  | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |



##### SDK示例

 Java SDK

```
QueryAutoScalingVmTemplateAction action = new QueryAutoScalingVmTemplateAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAutoScalingVmTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryAutoScalingVmTemplateAction action = QueryAutoScalingVmTemplateAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAutoScalingVmTemplateAction.Result res = action.call()
```

---

#### 手动删除弹性伸缩组内云主机(DeleteAutoScalingGroupInstance)



##### API请求

 URLs

```
DELETE zstack/v1/autoscaling/groups/instances/{instanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/autoscaling/groups/instances/3f55b1b15c273122b6b815218282efe5
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| instanceUuid | String | url | 云主机UUID |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
DeleteAutoScalingGroupInstanceAction action = new DeleteAutoScalingGroupInstanceAction();
action.instanceUuid = "3f55b1b15c273122b6b815218282efe5";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteAutoScalingGroupInstanceAction.Result res = action.call();
```

 Python SDK

```
DeleteAutoScalingGroupInstanceAction action = DeleteAutoScalingGroupInstanceAction()
action.instanceUuid = "3f55b1b15c273122b6b815218282efe5"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteAutoScalingGroupInstanceAction.Result res = action.call()
```

---

#### 查询弹性伸缩组内云主机列表(QueryAutoScalingGroupInstance)



##### API请求

 URLs

```
GET zstack/v1/autoscaling/groups/instances
```


```
GET zstack/v1/autoscaling/groups/instances/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/instances
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/autoscaling/groups/instances/87d8ab674af337deabc1af2c24bc3733
```



可查询字段

运行CLI命令行工具，输入QueryAutoScalingGroupInstance并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "c23dc6fd3dd13436b5d65b0a4d328f2c",
      "instanceUuid": "1dcb05b79b2b3a61b74114ff3aa00266",
      "description": "just for test",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.1.0 |
| inventories | List | 详情参考[inventories] | 3.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.1.0 |
| description | String | 错误的概要描述 | 3.1.0 |
| details | String | 错误的详细信息 | 3.1.0 |
| elaboration | String | 保留字段，默认为null | 3.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.1.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.1.0 |
| instanceUuid | String | 云主机UUID | 3.1.0 |
| scalingGroupUuid | String | 伸缩组UUID | 3.1.0 |
| templateUuid | String | 伸缩组云主机模块UUID | 3.1.0 |
| scalingGroupActivityUuid | String | 伸缩活动UUID | 3.1.0 |
| status | String | 云主机在伸缩组里的状态 | 3.1.0 |
| healthStatus | String | 云主机在伸缩组里的健康状态 | 3.1.0 |
| description | String | 资源的详细描述 | 3.1.0 |
| createDate | Timestamp | 创建时间 | 3.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.1.0 |
| protectionStrategy | String | 实例保护策略 | 0.6 |



##### SDK示例

 Java SDK

```
QueryAutoScalingGroupInstanceAction action = new QueryAutoScalingGroupInstanceAction();
action.conditions = asList();
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAutoScalingGroupInstanceAction.Result res = action.call();
```

 Python SDK

```
QueryAutoScalingGroupInstanceAction action = QueryAutoScalingGroupInstanceAction()
action.conditions = []
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAutoScalingGroupInstanceAction.Result res = action.call()
```

---

#### 修改弹性伸缩组启用状态(ChangeAutoScalingGroupState)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/groups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAutoScalingGroupState": {
    "stateEvent": "disable"
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
-X PUT -d '{"changeAutoScalingGroupState":{"stateEvent":"disable"}}' http://localhost:8080/zstack/v1/autoscaling/groups/384ac055e3113366907f06e8aaefb12d/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.1.0 |
| stateEvent | String | body(包含在**changeAutoScalingGroupState**结构中) | 设置为开启或者关闭 | enable disable | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.1.0 |
| userTags (可选) | List | body |  |  | 3.1.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
ChangeAutoScalingGroupStateAction action = new ChangeAutoScalingGroupStateAction();
action.uuid = "384ac055e3113366907f06e8aaefb12d";
action.stateEvent = "disable";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAutoScalingGroupStateAction.Result res = action.call();
```

 Python SDK

```
ChangeAutoScalingGroupStateAction action = ChangeAutoScalingGroupStateAction()
action.uuid = "384ac055e3113366907f06e8aaefb12d"
action.stateEvent = "disable"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAutoScalingGroupStateAction.Result res = action.call()
```

---

#### 手动执行伸缩组规则(ExecuteAutoScalingRule)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/rules/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "executeAutoScalingRule": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"executeAutoScalingRule":{}}' http://localhost:8080/zstack/v1/autoscaling/rules/9311aaae28333775b3339b644961c990/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 伸缩组规则UUID |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "scalingActivityUuid": "20ba90ed9e1631768fd7b896569fae62"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| scalingActivityUuid | String | 伸缩活动UUID | 3.9.0 |
| success | boolean |  | 3.9.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| error | ErrorCode | 详情参考[error] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |



##### SDK示例

 Java SDK

```
ExecuteAutoScalingRuleAction action = new ExecuteAutoScalingRuleAction();
action.uuid = "9311aaae28333775b3339b644961c990";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExecuteAutoScalingRuleAction.Result res = action.call();
```

 Python SDK

```
ExecuteAutoScalingRuleAction action = ExecuteAutoScalingRuleAction()
action.uuid = "9311aaae28333775b3339b644961c990"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExecuteAutoScalingRuleAction.Result res = action.call()
```

---

#### 更新伸缩组实例信息(UpdateAutoScalingGroupInstance)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/groups/instances/{instanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAutoScalingGroupInstance": {
    "groupUuid": "a3b7616d6e6a3ed6bdf5dd5a640a4548",
    "protectionStrategy": "Protected"
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
-X PUT -d '{"updateAutoScalingGroupInstance":{"groupUuid":"a3b7616d6e6a3ed6bdf5dd5a640a4548","protectionStrategy":"Protected"}}' http://localhost:8080/zstack/v1/autoscaling/groups/instances/a6dcd12ee95e345787a34175327df816/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | body(包含在**updateAutoScalingGroupInstance**结构中) | 伸缩组UUID |  | 3.9.0 |
| instanceUuid | String | url | 伸缩组内实例UUID |  | 3.9.0 |
| protectionStrategy (可选) | String | body(包含在**updateAutoScalingGroupInstance**结构中) | 伸缩组内实例保护策略 | Protected Unprotected | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
	"error": {
		"code": "SYS.1001",
		"description": "A message or a operation timeout",
		"details": "Create VM on KVM timeout after 300s"
	}
}
```



##### SDK示例

 Java SDK

```
UpdateAutoScalingGroupInstanceAction action = new UpdateAutoScalingGroupInstanceAction();
action.groupUuid = "a3b7616d6e6a3ed6bdf5dd5a640a4548";
action.instanceUuid = "a6dcd12ee95e345787a34175327df816";
action.protectionStrategy = "Protected";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAutoScalingGroupInstanceAction.Result res = action.call();
```

 Python SDK

```
UpdateAutoScalingGroupInstanceAction action = UpdateAutoScalingGroupInstanceAction()
action.groupUuid = "a3b7616d6e6a3ed6bdf5dd5a640a4548"
action.instanceUuid = "a6dcd12ee95e345787a34175327df816"
action.protectionStrategy = "Protected"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAutoScalingGroupInstanceAction.Result res = action.call()
```

---

#### 更新伸缩组云主机模板(UpdateAutoScalingVmTemplate)



##### API请求

 URLs

```
PUT zstack/v1/autoscaling/vmtemplate/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAutoScalingVmTemplate": {
    "name": "template",
    "description": "for new vm",
    "vmInstanceName": "vm",
    "vmInstanceDescription": "vm desc",
    "vmInstanceOfferingUuid": "af0462e292513725aa228476d0f08ac3",
    "imageUuid": "9dc29a7b3e603a7cb26bc1d16eccc1f1"
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
-X PUT -d '{"updateAutoScalingVmTemplate":{"name":"template","description":"for new vm","vmInstanceName":"vm","vmInstanceDescription":"vm desc","vmInstanceOfferingUuid":"af0462e292513725aa228476d0f08ac3","imageUuid":"9dc29a7b3e603a7cb26bc1d16eccc1f1"}}' http://localhost:8080/zstack/v1/autoscaling/vmtemplate/dfb4e8245e32361db57b92c95c84c01b/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云主机模板UUID |  | 3.9.0 |
| name (可选) | String | body(包含在**updateAutoScalingVmTemplate**结构中) | 模板名称 |  | 3.9.0 |
| description (可选) | String | body(包含在**updateAutoScalingVmTemplate**结构中) | 详细描述 |  | 3.9.0 |
| vmInstanceName (可选) | String | body(包含在**updateAutoScalingVmTemplate**结构中) | 云主机名称 |  | 3.9.0 |
| vmInstanceDescription (可选) | String | body(包含在**updateAutoScalingVmTemplate**结构中) | 云主机描述 |  | 3.9.0 |
| vmInstanceOfferingUuid (可选) | String | body(包含在**updateAutoScalingVmTemplate**结构中) | 云主机实例规格UUID |  | 3.9.0 |
| imageUuid (可选) | String | body(包含在**updateAutoScalingVmTemplate**结构中) | 云主机镜像UUID |  | 3.9.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "template",
    "description": "desc",
    "state": "Enabled"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |
| inventory | AutoScalingTemplateInventory | 详情参考[inventory] | 3.9.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.9.0 |
| description | String | 错误的概要描述 | 3.9.0 |
| details | String | 错误的详细信息 | 3.9.0 |
| elaboration | String | 保留字段，默认为null | 3.9.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.9.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.9.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.9.0 |
| name | String | 资源名称 | 3.9.0 |
| description | String | 资源的详细描述 | 3.9.0 |
| type | String | 模板类型 | 3.9.0 |
| state | String | 模板启用状态 | 3.9.0 |
| systemTags | List |  | 3.9.0 |
| createDate | Timestamp | 创建时间 | 3.9.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.9.0 |



##### SDK示例

 Java SDK

```
UpdateAutoScalingVmTemplateAction action = new UpdateAutoScalingVmTemplateAction();
action.uuid = "dfb4e8245e32361db57b92c95c84c01b";
action.name = "template";
action.description = "for new vm";
action.vmInstanceName = "vm";
action.vmInstanceDescription = "vm desc";
action.vmInstanceOfferingUuid = "af0462e292513725aa228476d0f08ac3";
action.imageUuid = "9dc29a7b3e603a7cb26bc1d16eccc1f1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateAutoScalingVmTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateAutoScalingVmTemplateAction action = UpdateAutoScalingVmTemplateAction()
action.uuid = "dfb4e8245e32361db57b92c95c84c01b"
action.name = "template"
action.description = "for new vm"
action.vmInstanceName = "vm"
action.vmInstanceDescription = "vm desc"
action.vmInstanceOfferingUuid = "af0462e292513725aa228476d0f08ac3"
action.imageUuid = "9dc29a7b3e603a7cb26bc1d16eccc1f1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateAutoScalingVmTemplateAction.Result res = action.call()
```

---

### 快照组相关接口

---

#### 创建快照组(CreateVolumeSnapshotGroup)



##### API请求

 URLs

```
POST zstack/v1/volume-snapshots/group
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "rootVolumeUuid": "901cae4fd9f43a1ca20da4146ddaec50",
    "name": "test"
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
-X POST -d '{"params":{"rootVolumeUuid":"901cae4fd9f43a1ca20da4146ddaec50","name":"test"}}' http://localhost:8080/zstack/v1/volume-snapshots/group
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| rootVolumeUuid | String | body(包含在**params**结构中) | 根云盘UUID |  | 3.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.6.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "4b13e23059033e2dbfac63b5b16eba11",
    "snapshotCount": 1.0,
    "name": "group",
    "vmInstanceUuid": "9ff17180fded31c2b9e4e5751ebcb2ba",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "volumeSnapshotRefs": [
      {
        "volumeSnapshotUuid": "e83b2d306f0d353a889096ca0b44b444",
        "volumeSnapshotGroupUuid": "4b13e23059033e2dbfac63b5b16eba11",
        "deviceId": 0.0,
        "snapshotDeleted": false,
        "volumeUuid": "edc07fe8d8a335ec8aa00f23b88fc1c6",
        "volumeName": "ROOT-volume",
        "volumeType": "Root",
        "volumeSnapshotInstallPath": "/Cloud_ps/to/path/snap.qcow2",
        "volumeSnapshotName": "group-ROOT-volume",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VolumeSnapshotGroupInventory | 详情参考[inventory] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| snapshotCount | Integer | 组内快照数量 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| vmInstanceUuid | String | 云主机UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| volumeSnapshotRefs | List | 详情参考[volumeSnapshotRefs] | 3.6.0 |

 #volumeSnapshotRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 3.6.0 |
| volumeSnapshotGroupUuid | String | 快照组UUID | 3.6.0 |
| deviceId | int | 打快照时云盘的加载序号 | 3.6.0 |
| snapshotDeleted | boolean | 快照是否已经被删除 | 3.6.0 |
| volumeUuid | String | 云盘UUID | 3.6.0 |
| volumeName | String | 云盘的名字 | 3.6.0 |
| volumeType | String | 云盘的类型 | 3.6.0 |
| volumeSnapshotInstallPath | String | 快照的安装路径 | 3.6.0 |
| volumeSnapshotName | String | 快照的名字 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
CreateVolumeSnapshotGroupAction action = new CreateVolumeSnapshotGroupAction();
action.rootVolumeUuid = "901cae4fd9f43a1ca20da4146ddaec50";
action.name = "test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
CreateVolumeSnapshotGroupAction action = CreateVolumeSnapshotGroupAction()
action.rootVolumeUuid = "901cae4fd9f43a1ca20da4146ddaec50"
action.name = "test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 删除快照组(DeleteVolumeSnapshotGroup)



##### API请求

 URLs

```
DELETE zstack/v1/volume-snapshots/group/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/volume-snapshots/group/f7b2175eebba3161b029689cb32f9b14
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| direction (可选) | String | body | 数据合并方向。pull：向前合并；commit：向后合并；auto：自动选择最优合并方向 |  | 5.4.0 |
| scope (可选) | String | body | 数据合并方式。single：仅合并单个快照；chain：合并整个快照链；auto：自动判断最佳合并范围 |  | 5.4.0 |
| deleteMode (可选) | String | body |  |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "results": [
    {
      "success": false,
      "error": {
        "code": "SYS.1001",
        "description": "internal error"
      }
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| results | List | 详情参考[results] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| snapshotUuid | String | 快照UUID | 3.6.0 |
| volumeUuid | String | 云盘UUID | 3.6.0 |
| success | boolean |  | 3.6.0 |
| error | ErrorCode | 详情参考[error] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |



##### SDK示例

 Java SDK

```
DeleteVolumeSnapshotGroupAction action = new DeleteVolumeSnapshotGroupAction();
action.uuid = "f7b2175eebba3161b029689cb32f9b14";
action.direction = "auto";
action.scope = "chain";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteVolumeSnapshotGroupAction action = DeleteVolumeSnapshotGroupAction()
action.uuid = "f7b2175eebba3161b029689cb32f9b14"
action.direction = "auto"
action.scope = "chain"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 更新快照组信息(UpdateVolumeSnapshotGroup)



##### API请求

 URLs

```
PUT zstack/v1/volume-snapshots/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateVolumeSnapshotGroup": {
    "name": "new name"
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
-X PUT -d '{"updateVolumeSnapshotGroup":{"name":"new name"}}' http://localhost:8080/zstack/v1/volume-snapshots/group/c39089cddbd836628f346b14beafe2d3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name (可选) | String | body(包含在**updateVolumeSnapshotGroup**结构中) | 资源名称 |  | 3.6.0 |
| description (可选) | String | body(包含在**updateVolumeSnapshotGroup**结构中) | 资源的详细描述 |  | 3.6.0 |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a261086918fe3c04be683430f15920a2",
    "snapshotCount": 1.0,
    "name": "group",
    "vmInstanceUuid": "98ac921100b43981b493071b6430bb2b",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM",
    "volumeSnapshotRefs": [
      {
        "volumeSnapshotUuid": "7ac8675cd8a9389ca343a2a7d49c47d7",
        "volumeSnapshotGroupUuid": "a261086918fe3c04be683430f15920a2",
        "deviceId": 0.0,
        "snapshotDeleted": false,
        "volumeUuid": "6fb0e4a0c3d6315bbb5c08a1a33bc231",
        "volumeName": "ROOT-volume",
        "volumeType": "Root",
        "volumeSnapshotInstallPath": "/Cloud_ps/to/path/snap.qcow2",
        "volumeSnapshotName": "group-ROOT-volume",
        "createDate": "Nov 14, 2017 10:20:57 PM",
        "lastOpDate": "Nov 14, 2017 10:20:57 PM"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventory | VolumeSnapshotGroupInventory | 详情参考[inventory] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| snapshotCount | Integer | 组内快照数量 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| vmInstanceUuid | String | 云主机UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| volumeSnapshotRefs | List | 详情参考[volumeSnapshotRefs] | 3.6.0 |

 #volumeSnapshotRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 3.6.0 |
| volumeSnapshotGroupUuid | String | 快照组UUID | 3.6.0 |
| deviceId | int | 打快照时云盘的加载序号 | 3.6.0 |
| snapshotDeleted | boolean | 快照是否已经被删除 | 3.6.0 |
| volumeUuid | String | 云盘UUID | 3.6.0 |
| volumeName | String | 云盘的名字 | 3.6.0 |
| volumeType | String | 云盘的类型 | 3.6.0 |
| volumeSnapshotInstallPath | String | 快照的安装路径 | 3.6.0 |
| volumeSnapshotName | String | 快照的名字 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
UpdateVolumeSnapshotGroupAction action = new UpdateVolumeSnapshotGroupAction();
action.name = "new name";
action.uuid = "c39089cddbd836628f346b14beafe2d3";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateVolumeSnapshotGroupAction action = UpdateVolumeSnapshotGroupAction()
action.name = "new name"
action.uuid = "c39089cddbd836628f346b14beafe2d3"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 查询快照组(QueryVolumeSnapshotGroup)



##### API请求

 URLs

```
GET zstack/v1/volume-snapshots/group
```


```
GET zstack/v1/volume-snapshots/group/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots/group?q=uuid=9480c1736b9c3798b3030cd990f0db8f
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots/group/91c3de9ffbc73475a84b8038c8a2349c
```



可查询字段

运行CLI命令行工具，输入QueryVolumeSnapshotGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "2c95e5285a733df6a2b70e198282f594",
      "snapshotCount": 1.0,
      "name": "group",
      "vmInstanceUuid": "371076859fa9326fba89633429f0aa06",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "volumeSnapshotRefs": [
        {
          "volumeSnapshotUuid": "bb6bc37f1c483ac1b7703b6ba58a2081",
          "volumeSnapshotGroupUuid": "2c95e5285a733df6a2b70e198282f594",
          "deviceId": 0.0,
          "snapshotDeleted": false,
          "volumeUuid": "6ff4fae70b79328bb0233313adb1226b",
          "volumeName": "ROOT-volume",
          "volumeType": "Root",
          "volumeSnapshotInstallPath": "/Cloud_ps/to/path/snap.qcow2",
          "volumeSnapshotName": "group-ROOT-volume",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| inventories | List | 详情参考[inventories] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| snapshotCount | Integer | 组内快照数量 | 3.6.0 |
| name | String | 资源名称 | 3.6.0 |
| description | String | 资源的详细描述 | 3.6.0 |
| vmInstanceUuid | String | 云主机UUID | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |
| volumeSnapshotRefs | List | 详情参考[volumeSnapshotRefs] | 3.6.0 |

 #volumeSnapshotRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 3.6.0 |
| volumeSnapshotGroupUuid | String | 快照组UUID | 3.6.0 |
| deviceId | int | 打快照时云盘的加载序号 | 3.6.0 |
| snapshotDeleted | boolean | 快照是否已经被删除 | 3.6.0 |
| volumeUuid | String | 云盘UUID | 3.6.0 |
| volumeName | String | 云盘的名字 | 3.6.0 |
| volumeType | String | 云盘的类型 | 3.6.0 |
| volumeSnapshotInstallPath | String | 快照的安装路径 | 3.6.0 |
| volumeSnapshotName | String | 快照的名字 | 3.6.0 |
| createDate | Timestamp | 创建时间 | 3.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.6.0 |



##### SDK示例

 Java SDK

```
QueryVolumeSnapshotGroupAction action = new QueryVolumeSnapshotGroupAction();
action.conditions = asList("uuid=102cde8f217430aaaf5652460adb7d7e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
QueryVolumeSnapshotGroupAction action = QueryVolumeSnapshotGroupAction()
action.conditions = ["uuid=3ad89f9fbe823083b1918f872381a1f5"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 检查快照组可用性(CheckVolumeSnapshotGroupAvailability)



##### API请求

 URLs

```
GET zstack/v1/volume-snapshots/groups/availabilities
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volume-snapshots/groups/availabilities?uuids=cc389f9eb3223c698f565621d2abcf72
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuids | List | query | 快照组UUIDs |  | 3.6.0 |
| systemTags (可选) | List | query |  |  | 3.6.0 |
| userTags (可选) | List | query |  |  | 3.6.0 |



##### API返回

 返回示例

```
{
  "results": [
    {
      "uuid": "78dd38e3e58134cead860f270143a474",
      "available": true,
      "reason": ""
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.6.0 |
| results | List | 详情参考[results] | 3.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.6.0 |
| description | String | 错误的概要描述 | 3.6.0 |
| details | String | 错误的详细信息 | 3.6.0 |
| elaboration | String | 保留字段，默认为null | 3.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.6.0 |

 #results

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.6.0 |
| available | boolean | 是否可以恢复 | 3.6.0 |
| reason | String | 不可恢复的理由，如可恢复则为空 | 3.6.0 |



##### SDK示例

 Java SDK

```
CheckVolumeSnapshotGroupAvailabilityAction action = new CheckVolumeSnapshotGroupAvailabilityAction();
action.uuids = asList("cc389f9eb3223c698f565621d2abcf72");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckVolumeSnapshotGroupAvailabilityAction.Result res = action.call();
```

 Python SDK

```
CheckVolumeSnapshotGroupAvailabilityAction action = CheckVolumeSnapshotGroupAvailabilityAction()
action.uuids = [cc389f9eb3223c698f565621d2abcf72]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckVolumeSnapshotGroupAvailabilityAction.Result res = action.call()
```

---

#### 恢复快照组(RevertVmFromSnapshotGroup)



##### API请求

 URLs

```
PUT zstack/v1/volume-snapshots/group/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "revertVmFromSnapshotGroup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"revertVmFromSnapshotGroup":{}}' http://localhost:8080/zstack/v1/volume-snapshots/group/37050441a903313297e65e09ccbeb30f/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 快照组的UUID |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
RevertVmFromSnapshotGroupAction action = new RevertVmFromSnapshotGroupAction();
action.uuid = "37050441a903313297e65e09ccbeb30f";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RevertVmFromSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
RevertVmFromSnapshotGroupAction action = RevertVmFromSnapshotGroupAction()
action.uuid = "37050441a903313297e65e09ccbeb30f"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RevertVmFromSnapshotGroupAction.Result res = action.call()
```

---

#### 回滚最新创建的快照(UndoSnapshotCreation)



##### API请求

 URLs

```
PUT zstack/v1/volumes/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "undoSnapshotCreation": {
    "snapShotUuid": "7677380457d136629f44c93c99978acc"
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
-X PUT -d '{"undoSnapshotCreation":{"snapShotUuid":"7677380457d136629f44c93c99978acc"}}' http://localhost:8080/zstack/v1/volumes/7fc32ad187c939d8aca65977560c2714/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘的UUID，唯一标示该资源 |  | 4.8.0 |
| snapShotUuid | String | body(包含在**undoSnapshotCreation**结构中) |  |  | 4.8.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.8.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.8.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7c3af161f36e3c2ca8661e8f825a9a4d",
    "name": "test-volume",
    "primaryStorageUuid": "c5b8c1bc2db337ac83b5a867046e145d",
    "vmInstanceUuid": "d6d25288e0973da58921dc13cb58c653",
    "diskOfferingUuid": "5547f17f3df234278ce7f44bb8fdf131",
    "rootImageUuid": "a976ad9fc6493bd88ea7ef05e9028dc1",
    "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-7c3af161f36e3c2ca8661e8f825a9a4d/7c3af161f36e3c2ca8661e8f825a9a4d.qcow2",
    "type": "Root",
    "format": "qcow2",
    "size": 107374182400,
    "actualSize": 21474836480,
    "deviceId": 0,
    "state": "Enabled",
    "status": "Ready",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.8.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.8.0 |
| inventory | VolumeInventory | 详情参考[inventory] | 4.8.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.8.0 |
| description | String | 错误的概要描述 | 4.8.0 |
| details | String | 错误的详细信息 | 4.8.0 |
| elaboration | String | 保留字段，默认为null | 4.8.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.8.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.8.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.8.0 |
| name | String | 资源名称 | 4.8.0 |
| description | String | 资源的详细描述 | 4.8.0 |
| primaryStorageUuid | String | 主存储UUID | 4.8.0 |
| vmInstanceUuid | String | 云主机UUID | 4.8.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.8.0 |
| rootImageUuid | String |  | 4.8.0 |
| installPath | String |  | 4.8.0 |
| type | String |  | 4.8.0 |
| format | String |  | 4.8.0 |
| size | Long |  | 4.8.0 |
| actualSize | Long |  | 4.8.0 |
| deviceId | Integer |  | 4.8.0 |
| state | String |  | 4.8.0 |
| status | String |  | 4.8.0 |
| createDate | Timestamp | 创建时间 | 4.8.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.8.0 |
| isShareable | Boolean |  | 4.8.0 |
| volumeQos | String |  | 4.8.0 |
| lastDetachDate | Timestamp |  | 4.8.0 |
| lastVmInstanceUuid | String |  | 4.8.0 |



##### SDK示例

 Java SDK

```
UndoSnapshotCreationAction action = new UndoSnapshotCreationAction();
action.uuid = "7fc32ad187c939d8aca65977560c2714";
action.snapShotUuid = "7677380457d136629f44c93c99978acc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UndoSnapshotCreationAction.Result res = action.call();
```

 Python SDK

```
UndoSnapshotCreationAction action = UndoSnapshotCreationAction()
action.uuid = "7fc32ad187c939d8aca65977560c2714"
action.snapShotUuid = "7677380457d136629f44c93c99978acc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UndoSnapshotCreationAction.Result res = action.call()
```

---

#### 解绑快照组(UngroupVolumeSnapshotGroup)



##### API请求

 URLs

```
DELETE zstack/v1/volume-snapshots/ungroup/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/volume-snapshots/ungroup/8903cef5a11c3457881bfd7bd5f04757
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 快照组的UUID |  | 3.6.0 |
| systemTags (可选) | List | body |  |  | 3.6.0 |
| userTags (可选) | List | body |  |  | 3.6.0 |



##### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{
"error": {
    "code": "SYS.1001",
    "description": "A message or a operation timeout",
    "details": "Create VM on KVM timeout after 300s"
}
}
```



##### SDK示例

 Java SDK

```
UngroupVolumeSnapshotGroupAction action = new UngroupVolumeSnapshotGroupAction();
action.uuid = "8903cef5a11c3457881bfd7bd5f04757";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UngroupVolumeSnapshotGroupAction.Result res = action.call();
```

 Python SDK

```
UngroupVolumeSnapshotGroupAction action = UngroupVolumeSnapshotGroupAction()
action.uuid = "8903cef5a11c3457881bfd7bd5f04757"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UngroupVolumeSnapshotGroupAction.Result res = action.call()
```

---

#### 获取资源被引用的内存快照组(GetMemorySnapshotGroupReference)



##### API请求

 URLs

```
GET zstack/v1/memory-snapshots/group/reference
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/memory-snapshots/group/reference?resourceUuid=293e9dd057c831608cf59cd377ba0d03&resourceType=L3NetworkVO
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuid | String | query | 资源UUID |  | 4.4.24 |
| resourceType | String | query | 资源类型 |  | 4.4.24 |
| systemTags (可选) | List | query | 系统标签 |  | 4.4.24 |
| userTags (可选) | List | query | 用户标签 |  | 4.4.24 |



##### API返回



```
{
  "inventories": [
    {
      "uuid": "22f6a9534922339f95c15db177ac2c75",
      "snapshotCount": 1.0,
      "name": "group",
      "vmInstanceUuid": "e5c0251850be3ffe85db33e7ecf12b75",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM",
      "volumeSnapshotRefs": [
        {
          "volumeSnapshotUuid": "bfb9af2450753ac292c46c3afcadd7a6",
          "volumeSnapshotGroupUuid": "22f6a9534922339f95c15db177ac2c75",
          "deviceId": 0.0,
          "snapshotDeleted": false,
          "volumeUuid": "976ab88982753cc8951efd915b76573f",
          "volumeName": "ROOT-volume",
          "volumeType": "Root",
          "volumeSnapshotInstallPath": "/zstack_ps/to/path/snap.qcow2",
          "volumeSnapshotName": "group-ROOT-volume",
          "createDate": "Nov 14, 2017 10:20:57 PM",
          "lastOpDate": "Nov 14, 2017 10:20:57 PM"
        }
      ]
    }
  ],
  "resourceUuid": "c8a0949c175c380db27cc5c78e8d01f7"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourceUuid | String | 资源UUID | 4.4.24 |
| success | boolean |  | 4.4.24 |
| inventories | List | 详情参考[inventories] | 4.4.24 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.4.24 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.4.24 |
| snapshotCount | Integer | 组内快照数量 | 4.4.24 |
| name | String | 资源名称 | 4.4.24 |
| description | String | 资源的详细描述 | 4.4.24 |
| vmInstanceUuid | String | 云主机UUID | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |
| volumeSnapshotRefs | List | 详情参考[volumeSnapshotRefs] | 4.4.24 |

 #volumeSnapshotRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeSnapshotUuid | String | 云盘快照UUID | 4.4.24 |
| volumeSnapshotGroupUuid | String | 快照组UUID | 4.4.24 |
| deviceId | int | 打快照时云盘的加载序号 | 4.4.24 |
| snapshotDeleted | boolean | 快照是否已经被删除 | 4.4.24 |
| volumeUuid | String | 云盘UUID | 4.4.24 |
| volumeName | String | 云盘的名字 | 4.4.24 |
| volumeType | String | 云盘的类型 | 4.4.24 |
| volumeSnapshotInstallPath | String | 快照的安装路径 | 4.4.24 |
| volumeSnapshotName | String | 快照的名字 | 4.4.24 |
| createDate | Timestamp | 创建时间 | 4.4.24 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.4.24 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.4.24 |
| description | String | 错误的概要描述 | 4.4.24 |
| details | String | 错误的详细信息 | 4.4.24 |
| elaboration | String | 保留字段，默认为null | 4.4.24 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.4.24 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.4.24 |



##### SDK示例

 Java SDK

```
GetMemorySnapshotGroupReferenceAction action = new GetMemorySnapshotGroupReferenceAction();
action.resourceUuid = "293e9dd057c831608cf59cd377ba0d03";
action.resourceType = "L3NetworkVO";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetMemorySnapshotGroupReferenceAction.Result res = action.call();
```

 Python SDK

```
GetMemorySnapshotGroupReferenceAction action = GetMemorySnapshotGroupReferenceAction()
action.resourceUuid = "293e9dd057c831608cf59cd377ba0d03"
action.resourceType = "L3NetworkVO"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetMemorySnapshotGroupReferenceAction.Result res = action.call()
```

---

### SSH密钥相关接口

---

#### 生成SSH密钥（GenerateSshKeyPair）



##### API请求

 URLs

```
POST zstack/v1/ssh-key-pair/generate
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "ssh-key-pair",
    "description": "description"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{"name":"ssh-key-pair","description":"description"}}'
http://localhost:8080/zstack/v1/ssh-key-pair/generate
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.7.21 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "25d8c1517825305f9dbcfd5413197faf",
    "name": "ssh-key-pair",
    "publicKey": "ssh-public-key",
    "privateKey": "ssh-private-key"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| inventory | SshPrivateKeyPairInventory | 详情参考[inventory] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| publicKey | String |  | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |
| privateKey | String |  | 4.7.21 |



##### SDK示例

 Java SDK

```
GenerateSshKeyPairAction action = new GenerateSshKeyPairAction();
action.name = "ssh-key-pair";
action.description = "description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GenerateSshKeyPairAction.Result res = action.call();
```

 Python SDK

```
GenerateSshKeyPairAction action = GenerateSshKeyPairAction()
action.name = "ssh-key-pair"
action.description = "description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GenerateSshKeyPairAction.Result res = action.call()
```

---

#### 上传SSH密钥（CreateSshKeyPair）



##### API请求

 URLs

```
POST zstack/v1/ssh-key-pair
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "ssh-key-pair",
    "description": "description",
    "publicKey": ""
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{"name":"ssh-key-pair","description":"description","publicKey":""}}'
http://localhost:8080/zstack/v1/ssh-key-pair
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.7.21 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.7.21 |
| publicKey | String | body(包含在**params**结构中) |  |  | 4.7.21 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.7.21 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "87460bc213b534ecaceda5a510a13771",
    "name": "ssh-key-pair",
    "publicKey": ""
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| inventory | SshKeyPairInventory | 详情参考[inventory] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| publicKey | String |  | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
CreateSshKeyPairAction action = new CreateSshKeyPairAction();
action.name = "ssh-key-pair";
action.description = "description";
action.publicKey = "";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSshKeyPairAction.Result res = action.call();
```

 Python SDK

```
CreateSshKeyPairAction action = CreateSshKeyPairAction()
action.name = "ssh-key-pair"
action.description = "description"
action.publicKey = ""
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSshKeyPairAction.Result res = action.call()
```

---

#### 删除SSH密钥（DeleteSshKeyPair）



##### API请求

 URLs

```
DELETE zstack/v1/ssh-key-pair/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X DELETE http://localhost:8080/zstack/v1/ssh-key-pair/67560ca0fb1d35b7bd520d43e2cbacee?
http://localhost:8080/zstack/v1/ssh-key-pair/67560ca0fb1d35b7bd520d43e2cbacee?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

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



##### SDK示例

 Java SDK

```
DeleteSshKeyPairAction action = new DeleteSshKeyPairAction();
action.uuid = "67560ca0fb1d35b7bd520d43e2cbacee";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSshKeyPairAction.Result res = action.call();
```

 Python SDK

```
DeleteSshKeyPairAction action = DeleteSshKeyPairAction()
action.uuid = "67560ca0fb1d35b7bd520d43e2cbacee"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSshKeyPairAction.Result res = action.call()
```

---

#### 查询SSH密钥（QuerySshKeyPair）



##### API请求

 URLs

```
GET zstack/v1/ssh-key-pair
GET zstack/v1/ssh-key-pair/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/ssh-key-pair?q=uuid=1d1c2b759ab23353946035b266bd2ac1

```



```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X GET http://localhost:8080/zstack/v1/ssh-key-pair/085e223844b03474a590f5877b53e0c8
```



可查询字段

运行CLI命令行工具，输入`QuerySshKeyPair`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "f289105c96f230e9a8add069c3a1bd69",
      "name": "ssh-key-pair",
      "publicKey": ""
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |
| inventories | List | 详情参考[inventory] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| publicKey | String |  | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



#####  SDK示例

 Java SDK

```
QuerySshKeyPairAction action = new QuerySshKeyPairAction();
action.conditions = asList("uuid=a37de2994dcb3f21bc084b67f3608849");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySshKeyPairAction.Result res = action.call();
```

 Python SDK

```
QuerySshKeyPairAction action = QuerySshKeyPairAction()
action.conditions = ["uuid=de52ff419e82330f8c0d7415ed53469a"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySshKeyPairAction.Result res = action.call()
```

---

#### 更新SSH密钥（UpdateSshKeyPair）



##### API请求

 URLs

```
PUT zstack/v1/ssh-key-pair/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSshKeyPair": {
    "name": "ssh-key-pair",
    "description": "description"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X PUT -d '{"updateSshKeyPair":{"name":"ssh-key-pair","description":"description"}}'
http://localhost:8080/zstack/v1/ssh-key-pair/ec2724093b1a3da8bf040dff4c9c1adb/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.7.21 |
| name (可选) | String | body(包含在**updateSshKeyPair**结构中) | 资源名称 |  | 4.7.21 |
| description (可选) | String | body(包含在**updateSshKeyPair**结构中) | 资源的详细描述 |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "15565277de143faea29e6fcc571c4d1d",
    "name": "ssh-key-pair",
    "publicKey": ""
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| inventory | SshKeyPairInventory | 详情参考[inventory] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| publicKey | String |  | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
UpdateSshKeyPairAction action = new UpdateSshKeyPairAction();
action.uuid = "ec2724093b1a3da8bf040dff4c9c1adb";
action.name = "ssh-key-pair";
action.description = "description";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSshKeyPairAction.Result res = action.call();
```

 Python SDK

```
UpdateSshKeyPairAction action = UpdateSshKeyPairAction()
action.uuid = "ec2724093b1a3da8bf040dff4c9c1adb"
action.name = "ssh-key-pair"
action.description = "description"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSshKeyPairAction.Result res = action.call()
```

---

#### 云主机挂载密钥对（AttachSshKeyPairToVmInstance）



##### API请求

 URLs

```
POST zstack/ssh-key-pair/{sshKeyPairUuid}/vm-instance/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X POST -d '{"params":{}}'
http://localhost:8080/zstack/v1/ssh-key-pair/9d4fe97b6e0a3d65bca85b093e74d6c9/vm-instance/e76f9792afac3bca8aec7a5d4e768197
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.7.21 |
| sshKeyPairUuid | String | url |  |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "03da892de78c34d8b13e210d068caa8a",
    "name": "ssh-key-pair",
    "publicKey": ""
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.21 |
| inventory | SshKeyPairInventory | 详情参考[inventory] | 4.7.21 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.7.21 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.7.21 |
| description | String | 错误的概要描述 | 4.7.21 |
| details | String | 错误的详细信息 | 4.7.21 |
| elaboration | String | 保留字段，默认为null | 4.7.21 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.7.21 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.7.21 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.7.21 |
| name | String | 资源名称 | 4.7.21 |
| description | String | 资源的详细描述 | 4.7.21 |
| publicKey | String |  | 4.7.21 |
| createDate | Timestamp | 创建时间 | 4.7.21 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.7.21 |



##### SDK示例

 Java SDK

```
AttachSshKeyPairToVmInstanceAction action = new AttachSshKeyPairToVmInstanceAction();
action.vmInstanceUuid = "e76f9792afac3bca8aec7a5d4e768197";
action.sshKeyPairUuid = "9d4fe97b6e0a3d65bca85b093e74d6c9";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachSshKeyPairToVmInstanceAction.Result res = action.call();
```

 Python SDK

```
AttachSshKeyPairToVmInstanceAction action = AttachSshKeyPairToVmInstanceAction()
action.vmInstanceUuid = "e76f9792afac3bca8aec7a5d4e768197"
action.sshKeyPairUuid = "9d4fe97b6e0a3d65bca85b093e74d6c9"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachSshKeyPairToVmInstanceAction.Result res = action.call()
```

---

#### 云主机卸载密钥对（DetachSshKeyPairFromVmInstance）



##### API请求

 URLs

```
DELETE zstack/v1/ssh-key-pair/{sshKeyPairUuid}/vm-instance/{vmInstanceUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8"
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c"
-X DELETE
http://localhost:8080/zstack/v1/ssh-key-pair/9be9cb6b56b13746a99660a0d07a0770/vm-instance/dd734d0cd5c53bcca48cec9d2b4aa6d6?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.7.21 |
| sshKeyPairUuid | String | url |  |  | 4.7.21 |
| systemTags (可选) | List | body | 系统标签 |  | 4.7.21 |
| userTags (可选) | List | body | 用户标签 |  | 4.7.21 |



##### API返回

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



##### SDK示例

 Java SDK

```
DetachSshKeyPairFromVmInstanceAction action = new DetachSshKeyPairFromVmInstanceAction();
action.vmInstanceUuid = "dd734d0cd5c53bcca48cec9d2b4aa6d6";
action.sshKeyPairUuid = "9be9cb6b56b13746a99660a0d07a0770";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachSshKeyPairFromVmInstanceAction.Result res = action.call();
```

 Python SDK

```
DetachSshKeyPairFromVmInstanceAction action = DetachSshKeyPairFromVmInstanceAction()
action.vmInstanceUuid = "dd734d0cd5c53bcca48cec9d2b4aa6d6"
action.sshKeyPairUuid = "9be9cb6b56b13746a99660a0d07a0770"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachSshKeyPairFromVmInstanceAction.Result res = action.call()
```
