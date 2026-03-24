# 灾备管理 - 平台运维

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/5.2.html*

---

## 灾备管理

---

## 灾备服务(Plus)



灾备服务以单独的功能模块形式提供，需提前购买灾备服务模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

## 灾备服务相关接口

---

## 创建云盘备份(CreateVolumeBackup)



### API请求

 URLs

```
POST zstack/v1/volumes/{volumeUuid}/volume-backups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "backupStorageUuid": "1c4b0a3a24533c4faa9b156a0ef98fdf",     "name": "backup-1",     "description": "a critical volume backup"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"backupStorageUuid":"1c4b0a3a24533c4faa9b156a0ef98fdf","name":"backup-1","description":"a critical volume backup"}}' http://localhost:8080/zstack/v1/volumes/ec7196ba2d993236aceddd9b31f5d19b/volume-backups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuid | String | url | 云盘UUID |  | 2.6.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 2.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 指定资源uuid |  | 2.6.0 |
| volumeReadBandwidth (可选) | Long | body(包含在**params**结构中) | 云盘读取带宽 |  | 3.1.0 |
| volumeWriteBandwidth (可选) | Long | body(包含在**params**结构中) | 云盘写入带宽 |  | 3.1.0 |
| networkReadBandwidth (可选) | Long | body(包含在**params**结构中) | 网络下行带宽 |  | 3.1.0 |
| networkWriteBandwidth (可选) | Long | body(包含在**params**结构中) | 网络上行带宽 |  | 3.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |


  - 选项格式为：`backup::network::cidr::CIDR`
  - 例如：`backup::network::cidr::10.0.0.0/8`
- 例如：`backup::network::cidr::10.0.0.0/8`
  - 选项格式为：`fsInfo::type::$TYPE::url::$URL::options::$OPTIONS`
  - 例如：`fsInfo::type::nfs::url::172.32.1.119:/nas/nfs2::options::nolock,vers=3,rsize=32768,wsize=32768`
- 例如：`fsInfo::type::nfs::url::172.32.1.119:/nas/nfs2::options::nolock,vers=3,rsize=32768,wsize=32768`
  - 选项格式为：`volumeLiveBackup::parallelismDegree::$NUMBER`
  - 例如：`volumeLiveBackup::parallelismDegree::1`
- 例如：`volumeLiveBackup::parallelismDegree::1`


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "uuid": "6bd6608ecda63747b2471a02b42704d6",     "volumeUuid": "1a0c6b2ca31a3b40b2c06a0f2ecb0849",     "name": "Backup-1",     "description": "volume backup",     "size": 1.073741824E9,     "createDate": "Nov 14, 2017 10:20:57 PM",     "lastOpDate": "Nov 14, 2017 10:20:57 PM"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | VolumeBackupInventory | 详情参考[inventory] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 2.6.0 |
| volumeUuid | String | 云盘UUID | 2.6.0 |
| name | String | 备份名称 | 2.6.0 |
| description | String | 备份的详细描述 | 2.6.0 |
| type | String | 云盘的类型 | 2.6.0 |
| state | String | 云盘备份的启用状态 | 2.6.0 |
| status | String | 云盘备份的状态 | 2.6.0 |
| size | Long | 当前云盘备份的大小 | 2.6.0 |
| metadata | String | 云盘备份相关元数据 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.6.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 2.6.0 |
| backupStorageUuid | String | 镜像存储UUID | 2.6.0 |
| installPath | String | 云盘备份的数据路径 | 2.6.0 |
| status | String | 云盘备份在镜像存储的状态 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



### SDK示例

 Java SDK

```
CreateVolumeBackupAction action = new CreateVolumeBackupAction(); action.volumeUuid = "ec7196ba2d993236aceddd9b31f5d19b"; action.backupStorageUuid = "1c4b0a3a24533c4faa9b156a0ef98fdf"; action.name = "backup-1"; action.description = "a critical volume backup"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; CreateVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
CreateVolumeBackupAction action = CreateVolumeBackupAction() action.volumeUuid = "ec7196ba2d993236aceddd9b31f5d19b" action.backupStorageUuid = "1c4b0a3a24533c4faa9b156a0ef98fdf" action.name = "backup-1" action.description = "a critical volume backup" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" CreateVolumeBackupAction.Result res = action.call()
```

---

#### 删除云盘备份(DeleteVolumeBackup)



##### API请求

 URLs

```
DELETE zstack/v1/volume-backups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/volume-backups/e95ef48f7cc6396f8e025fd5e38ebccb
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| backupStorageUuids (可选) | List | url | 镜像服务器uuid列表 |  | 2.6.0 |
| deleteMode (可选) | String | url | 删除模式 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |
| handleDependency (可选) | boolean | body | 数据库删除策略考虑依赖关系 |  | 4.7.11 |



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
DeleteVolumeBackupAction action = new DeleteVolumeBackupAction();
action.uuid = "e95ef48f7cc6396f8e025fd5e38ebccb";
action.backupStorageUuids = asList("6cfa909085e13160825db03bcd664ff2");
action.handleDependency = false;
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
DeleteVolumeBackupAction action = DeleteVolumeBackupAction()
action.uuid = "e95ef48f7cc6396f8e025fd5e38ebccb"
action.backupStorageUuids = [6cfa909085e13160825db03bcd664ff2]
action.handleDependency = false
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVolumeBackupAction.Result res = action.call()
```

---

#### 查询云盘备份记录(QueryVolumeBackup)



##### API请求

 URLs

```
GET zstack/v1/volume-backups
GET zstack/v1/volume-backups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volume-backups?q=uuid=12d9162338f637c2855f58b63a7f19d5
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/volume-backups/09de4206bb143d75aad644c88cdbb364
```



可查询字段

运行CLI命令行工具，输入QuerySharedBlock并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "aaf2564bbbed3eab97b7ecff370d8ff1",
      "volumeUuid": "92dcb8125f7b3187887e2abc8532b749",
      "name": "backup-2",
      "description": "my backup",
      "size": 1310720.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventories | List | 详情参考[inventories] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 2.6.0 |
| volumeUuid | String | 云盘UUID | 2.6.0 |
| name | String | 备份名称 | 2.6.0 |
| description | String | 备份的详细描述 | 2.6.0 |
| type | String | 云盘的类型 | 2.6.0 |
| state | String | 云盘备份的启用状态 | 2.6.0 |
| status | String | 云盘备份的状态 | 2.6.0 |
| size | Long | 当前云盘备份的大小 | 2.6.0 |
| metadata | String | 云盘备份相关元数据 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.6.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 2.6.0 |
| backupStorageUuid | String | 镜像存储UUID | 2.6.0 |
| installPath | String | 云盘备份的数据路径 | 2.6.0 |
| status | String | 云盘备份在镜像存储的状态 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
QueryVolumeBackupAction action = new QueryVolumeBackupAction();
action.conditions = asList("uuid=031d210f004e31529b7ae7beb73c8bb9");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
QueryVolumeBackupAction action = QueryVolumeBackupAction()
action.conditions = ["uuid=4ec7c280156635b1a8164d6c9e455b41"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryVolumeBackupAction.Result res = action.call()
```

---

#### 创建云盘镜像(CreateDataVolumeTemplateFromVolumeBackup)



从云盘备份创建数据云盘镜像。

##### API请求

 URLs

```
POST zstack/v1/images/data-volume-templates/from/volume-template/{backupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "backupStorageUuid": "030d573ce5f33ab1b53524f8bef1c2cd",
    "name": "template",
    "description": "data template from volume backup",
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
-X POST -d '{"params":{"backupStorageUuid":"030d573ce5f33ab1b53524f8bef1c2cd","name":"template","description":"data template from volume backup","system":false}}' http://localhost:8080/zstack/v1/images/data-volume-templates/from/volume-template/2832c8cc11303003ad248eac940ed06c
```

 参数列表
-
-
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupUuid | String | url | 云盘备份uuid |  | 2.6.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 2.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.6.0 |
| guestOsType (可选) | String | body(包含在**params**结构中) | 宿主机操作系统类型 |  | 2.6.0 |
| platform (可选) | String | body(包含在**params**结构中) | 宿主机平台类型 | Linux Windows Other Paravirtualization WindowsVirtio | 2.6.0 |
| system (可选) | boolean | body(包含在**params**结构中) | 是否系统镜像 |  | 2.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 指定资源uuid |  | 2.6.0 |
| architecture (可选) | String | body(包含在**params**结构中) |  |  | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "fb4415140ff4329f8b7b42f01f04cfdb",
    "name": "My Volume Template",
    "mediaType": "DataVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0.0,
        "imageUuid": "fb4415140ff4329f8b7b42f01f04cfdb",
        "backupStorageUuid": "ccc3d837be813722bfa59e0a259ada0e",
        "installPath": "zstore://mydata/0cd599ec159249489475112a058bb93a",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | ImageInventory | 详情参考[inventory] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
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
| format | String | 镜像的格式，比如：raw | 4.0.0 |
| system | Boolean | 标识是否为系统镜像 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.6.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 2.6.0 |
| backupStorageUuid | String | 镜像存储UUID | 2.6.0 |
| installPath | String | 在镜像服务器上的安装路径 | 4.0.0 |
| exportUrl | String | 导出镜像的url | 4.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 4.0.0 |
| status | String | 镜像就绪状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
CreateDataVolumeTemplateFromVolumeBackupAction action = new CreateDataVolumeTemplateFromVolumeBackupAction();
action.backupUuid = "0c809415d427345983de1123c5be1dfb";
action.backupStorageUuid = "e0911cc720ea3583b21ad79892632f1a";
action.name = "template";
action.description = "data template from volume backup";
action.system = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateDataVolumeTemplateFromVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
CreateDataVolumeTemplateFromVolumeBackupAction action = CreateDataVolumeTemplateFromVolumeBackupAction()
action.backupUuid = "0c809415d427345983de1123c5be1dfb"
action.backupStorageUuid = "e0911cc720ea3583b21ad79892632f1a"
action.name = "template"
action.description = "data template from volume backup"
action.system = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateDataVolumeTemplateFromVolumeBackupAction.Result res = action.call()
```

---

#### 创建根盘镜像(CreateRootVolumeTemplateFromVolumeBackup)



从云盘备份创建根云盘镜像。

##### API请求

 URLs

```
POST zstack/v1/images/root-volume-templates/from/volume-template/{backupUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "backupStorageUuid": "9681bf8631a133ccb84fc5cf6ff7aaa6",
    "name": "template",
    "description": "root template from volume backup",
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
-X POST -d '{"params":{"backupStorageUuid":"9681bf8631a133ccb84fc5cf6ff7aaa6","name":"template","description":"root template from volume backup","system":false}}' http://localhost:8080/zstack/v1/images/root-volume-templates/from/volume-template/84eccd458028338d8f5eb72efdc6f8a7
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
| backupUuid | String | url | 云盘备份uuid |  | 2.6.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 2.6.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.6.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.6.0 |
| guestOsType (可选) | String | body(包含在**params**结构中) | 宿主机操作系统类型 |  | 2.6.0 |
| platform (可选) | String | body(包含在**params**结构中) | 镜像平台类型 | Linux Windows Other Paravirtualization WindowsVirtio | 2.6.0 |
| system (可选) | boolean | body(包含在**params**结构中) | 是否系统镜像 |  | 2.6.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 指定资源uuid |  | 2.6.0 |
| architecture (可选) | String | body(包含在**params**结构中) |  | x86_64 aarch64 mips64el | 4.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e2b2695d55243c2997b5dc6165fffa83",
    "name": "My Volume Template",
    "mediaType": "RootVolumeTemplate",
    "platform": "Linux",
    "format": "qcow2",
    "backupStorageRefs": [
      {
        "id": 0.0,
        "imageUuid": "e2b2695d55243c2997b5dc6165fffa83",
        "backupStorageUuid": "4ed18086e5593b86932436d02f575213",
        "installPath": "zstore://centos/0cd599ec519249489475112a058bb93a",
        "status": "Ready"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | ImageInventory | 详情参考[inventory] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
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
| format | String | 镜像的格式，比如：raw | 4.0.0 |
| system | Boolean | 标识是否为系统镜像 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.6.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| imageUuid | String | 镜像UUID | 2.6.0 |
| backupStorageUuid | String | 镜像存储UUID | 2.6.0 |
| installPath | String | 在镜像服务器上的安装路径 | 4.0.0 |
| exportUrl | String | 导出镜像的url | 4.0.0 |
| exportMd5Sum | String | 导出镜像的md5值 | 4.0.0 |
| status | String | 镜像就绪状态 | 4.0.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
CreateRootVolumeTemplateFromVolumeBackupAction action = new CreateRootVolumeTemplateFromVolumeBackupAction();
action.backupUuid = "f9eaaa60b6023678afc792345fbd8262";
action.backupStorageUuid = "efc46240795f3889b0ead64643f51a9d";
action.name = "template";
action.description = "root template from volume backup";
action.system = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateRootVolumeTemplateFromVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
CreateRootVolumeTemplateFromVolumeBackupAction action = CreateRootVolumeTemplateFromVolumeBackupAction()
action.backupUuid = "f9eaaa60b6023678afc792345fbd8262"
action.backupStorageUuid = "efc46240795f3889b0ead64643f51a9d"
action.name = "template"
action.description = "root template from volume backup"
action.system = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateRootVolumeTemplateFromVolumeBackupAction.Result res = action.call()
```

---

#### 扫描云盘备份(SyncVolumeBackup)



##### API请求

 URLs

```
PUT zstack/v1/volume-backups/imageStore/{imageStoreUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncVolumeBackup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncVolumeBackup":{}}' http://localhost:8080/zstack/v1/volume-backups/imageStore/d84c15efe2e941e38d090299bb5b498c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageStoreUuid | String | url | 备份服务器UUID |  | 3.5.0 |
| systemTags (可选) | List | body |  |  | 3.5.0 |
| userTags (可选) | List | body |  |  | 3.5.0 |



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
SyncVolumeBackupAction action = new SyncVolumeBackupAction();
action.imageStoreUuid = "90658f04b39d40369593a7e56ab62e15";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
SyncVolumeBackupAction action = SyncVolumeBackupAction()
action.imageStoreUuid = "91570173248a40d7a02e3905e50c7ad6"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncVolumeBackupAction.Result res = action.call()
```

---

#### 从云盘备份恢复云盘(RevertVolumeFromVolumeBackup)



##### API请求

 URLs

```
PUT zstack/v1/volume-backups/{uuid}/actions?云盘备份uuid={云盘备份uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "revertVolumeFromVolumeBackup": {
    "backupStrogeUuid": "7031eaf192333f52a0cd889327d5a0de"
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
-X PUT -d '{"revertVolumeFromVolumeBackup":{"backupStrogeUuid":"7031eaf192333f52a0cd889327d5a0de"}}' http://localhost:8080/zstack/v1/volume-backups/b3f89ba2d4173bc5864d1b0d19e93f22/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| 云盘备份uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| backupStrogeUuid (可选) | String | body(包含在**revertVolumeFromVolumeBackup**结构中) | 镜像服务器uuid |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



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
RevertVolumeFromVolumeBackupAction action = new RevertVolumeFromVolumeBackupAction();
action.uuid = "b3f89ba2d4173bc5864d1b0d19e93f22";
action.backupStrogeUuid = "7031eaf192333f52a0cd889327d5a0de";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RevertVolumeFromVolumeBackupAction.Result res = action.call();
```

 Python SDK

```
RevertVolumeFromVolumeBackupAction action = RevertVolumeFromVolumeBackupAction()
action.uuid = "b3f89ba2d4173bc5864d1b0d19e93f22"
action.backupStrogeUuid = "7031eaf192333f52a0cd889327d5a0de"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RevertVolumeFromVolumeBackupAction.Result res = action.call()
```

---

#### 恢复云盘备份(RecoverBackupFromImageStoreBackupStorage)



从目标镜像服务器恢复云盘备份。

##### API请求

 URLs

```
PUT zstack/v1/volume-backups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverBackupFromImageStoreBackupStorage": {
    "srcBackupStorageUuid": "cdd6242179f037c3a2c4cd1d17678f36",
    "dstBackupStorageUuid": "eebba83336ac34938e5a6e6db30d5eb8"
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
-X PUT -d '{"recoverBackupFromImageStoreBackupStorage":{"srcBackupStorageUuid":"cdd6242179f037c3a2c4cd1d17678f36","dstBackupStorageUuid":"eebba83336ac34938e5a6e6db30d5eb8"}}' \
http://localhost:8080/zstack/v1/volume-backups/4c047b04165e3c8ca2b4859ddf41d882/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘备份的UUID，唯一标示该资源 |  | 2.6.0 |
| srcBackupStorageUuid | String | body(包含在**recoverBackupFromImageStoreBackupStorage**结构中) | 接收恢复云盘的镜像服务器uuid |  | 2.6.0 |
| dstBackupStorageUuid | String | body(包含在**recoverBackupFromImageStoreBackupStorage**结构中) | 恢复镜像服务器uuid |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 系统标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "db84847f4bd13c3399a45241a722ce80",
    "volumeUuid": "b91250390732348689211459223892f0",
    "name": "Backup-1",
    "description": "volume backup",
    "size": 1.073741824E9,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | VolumeBackupInventory | 详情参考[inventory] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 2.6.0 |
| volumeUuid | String | 云盘UUID | 2.6.0 |
| name | String | 备份名称 | 2.6.0 |
| description | String | 备份的详细描述 | 2.6.0 |
| type | String | 云盘的类型 | 2.6.0 |
| state | String | 云盘备份的启用状态 | 2.6.0 |
| status | String | 云盘备份的状态 | 2.6.0 |
| size | Long | 当前云盘备份的大小 | 2.6.0 |
| metadata | String | 云盘备份相关元数据 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.6.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 2.6.0 |
| backupStorageUuid | String | 镜像存储UUID | 2.6.0 |
| installPath | String | 云盘备份的数据路径 | 2.6.0 |
| status | String | 云盘备份在镜像存储的状态 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
RecoverBackupFromImageStoreBackupStorageAction action = new RecoverBackupFromImageStoreBackupStorageAction();
action.uuid = "4c047b04165e3c8ca2b4859ddf41d882";
action.srcBackupStorageUuid = "cdd6242179f037c3a2c4cd1d17678f36";
action.dstBackupStorageUuid = "eebba83336ac34938e5a6e6db30d5eb8";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RecoverBackupFromImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
RecoverBackupFromImageStoreBackupStorageAction action = RecoverBackupFromImageStoreBackupStorageAction()
action.uuid = "4c047b04165e3c8ca2b4859ddf41d882"
action.srcBackupStorageUuid = "cdd6242179f037c3a2c4cd1d17678f36"
action.dstBackupStorageUuid = "eebba83336ac34938e5a6e6db30d5eb8"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RecoverBackupFromImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 云盘备份同步(SyncBackupFromImageStoreBackupStorage)



将云盘备份同步至目标镜像服务器。

##### API请求

 URLs

```
PUT zstack/v1/volume-backups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncBackupFromImageStoreBackupStorage": {
    "srcBackupStorageUuid": "8d41621b44b43562bfe415b1f4eae44c",
    "dstBackupStorageUuid": "1cb923c4982d3ca397a2dca63aa0d121"
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
-X PUT -d '{"syncBackupFromImageStoreBackupStorage":{"srcBackupStorageUuid":"8d41621b44b43562bfe415b1f4eae44c","dstBackupStorageUuid":"1cb923c4982d3ca397a2dca63aa0d121"}}' http://localhost:8080/zstack/v1/volume-backups/d10c8a92398a387ba00952957aeeb99c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 云盘备份的UUID，唯一标示该资源 |  | 2.6.0 |
| srcBackupStorageUuid | String | body(包含在**syncBackupFromImageStoreBackupStorage**结构中) | 源镜像服务器 |  | 2.6.0 |
| dstBackupStorageUuid | String | body(包含在**syncBackupFromImageStoreBackupStorage**结构中) | 目标镜像服务器 |  | 2.6.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b27cfbaf301433a9b81aedcc47460343",
    "volumeUuid": "5058318082ae3e5abf1bd05608f8c6d2",
    "name": "Backup-1",
    "description": "volume backup",
    "size": 1.073741824E9,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | VolumeBackupInventory | 详情参考[inventory] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 2.6.0 |
| volumeUuid | String | 云盘UUID | 2.6.0 |
| name | String | 备份名称 | 2.6.0 |
| description | String | 备份的详细描述 | 2.6.0 |
| type | String | 云盘的类型 | 2.6.0 |
| state | String | 云盘备份的启用状态 | 2.6.0 |
| status | String | 云盘备份的状态 | 2.6.0 |
| size | Long | 当前云盘备份的大小 | 2.6.0 |
| metadata | String | 云盘备份相关元数据 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 2.6.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 2.6.0 |
| backupStorageUuid | String | 镜像存储UUID | 2.6.0 |
| installPath | String | 云盘备份的数据路径 | 2.6.0 |
| status | String | 云盘备份在镜像存储的状态 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



##### SDK示例

 Java SDK

```
SyncBackupFromImageStoreBackupStorageAction action = new SyncBackupFromImageStoreBackupStorageAction();
action.uuid = "d10c8a92398a387ba00952957aeeb99c";
action.srcBackupStorageUuid = "8d41621b44b43562bfe415b1f4eae44c";
action.dstBackupStorageUuid = "1cb923c4982d3ca397a2dca63aa0d121";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncBackupFromImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
SyncBackupFromImageStoreBackupStorageAction action = SyncBackupFromImageStoreBackupStorageAction()
action.uuid = "d10c8a92398a387ba00952957aeeb99c"
action.srcBackupStorageUuid = "8d41621b44b43562bfe415b1f4eae44c"
action.dstBackupStorageUuid = "1cb923c4982d3ca397a2dca63aa0d121"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncBackupFromImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 创建云主机备份(CreateVmBackup)



##### API请求

 URLs

```
POST zstack/v1/volumes/{rootVolumeUuid}/vm-backups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "backupStorageUuid": "fc50c1ece4753c1981e3e3f65a151e0e",
    "name": "backup-1",
    "description": "a critical volume backup"
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
-X POST -d '{"params":{"backupStorageUuid":"fc50c1ece4753c1981e3e3f65a151e0e","name":"backup-1","description":"a critical volume backup"}}' http://localhost:8080/zstack/v1/volumes/aa6fad9b71af3785a9fdec200bab3ee8/vm-backups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| rootVolumeUuid | String | url | 根云盘UUID |  | 3.0.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 3.0.0 |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| volumeReadBandwidth (可选) | Long | body(包含在**params**结构中) | 云盘读取带宽 |  | 3.1.0 |
| volumeWriteBandwidth (可选) | Long | body(包含在**params**结构中) | 云盘写入带宽 |  | 3.1.0 |
| networkReadBandwidth (可选) | Long | body(包含在**params**结构中) | 网络下行带宽 |  | 3.1.0 |
| networkWriteBandwidth (可选) | Long | body(包含在**params**结构中) | 网络上行带宽 |  | 3.1.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |


  - 选项格式为：`backup::network::cidr::CIDR`
  - 例如：`backup::network::cidr::10.0.0.0/8`
- 例如：`backup::network::cidr::10.0.0.0/8`
  - 选项格式为：`fsInfo::type::$TYPE::url::$URL::options::$OPTIONS`
  - 例如：`fsInfo::type::nfs::url::172.32.1.119:/nas/nfs2::options::nolock,vers=3,rsize=32768,wsize=32768`
- 例如：`fsInfo::type::nfs::url::172.32.1.119:/nas/nfs2::options::nolock,vers=3,rsize=32768,wsize=32768`
  - 选项格式为：`volumeLiveBackup::parallelismDegree::$NUMBER`
  - 例如：`volumeLiveBackup::parallelismDegree::1`
- 例如：`volumeLiveBackup::parallelismDegree::1`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "785edb93bb1b3a31857dac1e69cc8392",
      "volumeUuid": "2ae6b881bb1239cd907d48993e86a2e8",
      "name": "Root-Volume-Backup-1",
      "description": "volume backup",
      "size": 1.073741824E9,
      "groupUuid": "2f7c0a5bb86430e8a5ac48312172d70d",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "3084eea905f4311b9d484bfe97142bdf",
      "volumeUuid": "f6c7d5276c873eba8accddd4a09a1ee6",
      "name": "Data-Volume-Backup-1",
      "description": "volume backup",
      "size": 2.147483648E9,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventories | List | 详情参考[inventories] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 3.0.0 |
| volumeUuid | String | 云盘UUID | 3.0.0 |
| name | String | 备份名称 | 3.0.0 |
| description | String | 备份的详细描述 | 3.0.0 |
| type | String | 云盘的类型 | 3.0.0 |
| state | String | 云盘备份的启用状态 | 3.0.0 |
| status | String | 云盘备份的状态 | 3.0.0 |
| size | Long | 当前云盘备份的大小 | 3.0.0 |
| metadata | String | 云盘备份相关元数据 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 3.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 3.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 3.0.0 |
| installPath | String | 云盘备份的数据路径 | 3.0.0 |
| status | String | 云盘备份在镜像存储的状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
CreateVmBackupAction action = new CreateVmBackupAction();
action.rootVolumeUuid = "aa6fad9b71af3785a9fdec200bab3ee8";
action.backupStorageUuid = "fc50c1ece4753c1981e3e3f65a151e0e";
action.name = "backup-1";
action.description = "a critical volume backup";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmBackupAction.Result res = action.call();
```

 Python SDK

```
CreateVmBackupAction action = CreateVmBackupAction()
action.rootVolumeUuid = "aa6fad9b71af3785a9fdec200bab3ee8"
action.backupStorageUuid = "fc50c1ece4753c1981e3e3f65a151e0e"
action.name = "backup-1"
action.description = "a critical volume backup"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmBackupAction.Result res = action.call()
```

---

#### 删除云主机备份(DeleteVmBackup)



##### API请求

 URLs

```
DELETE zstack/v1/vm-backups/{groupUuid}?backupStorageUuids={backupStorageUuids}&deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/vm-backups/92046c016d7c3af7bdd4a5077fb91450?backupStorageUuids=255fc896605f3237a22940fa92d8670b&deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | url | 备份组uuid |  | 3.0.0 |
| backupStorageUuids (可选) | List | url | 镜像服务器uuid列表 |  | 3.0.0 |
| deleteMode (可选) | String | url |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
DeleteVmBackupAction action = new DeleteVmBackupAction();
action.groupUuid = "92046c016d7c3af7bdd4a5077fb91450";
action.backupStorageUuids = asList("255fc896605f3237a22940fa92d8670b");
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteVmBackupAction.Result res = action.call();
```

 Python SDK

```
DeleteVmBackupAction action = DeleteVmBackupAction()
action.groupUuid = "92046c016d7c3af7bdd4a5077fb91450"
action.backupStorageUuids = [255fc896605f3237a22940fa92d8670b]
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteVmBackupAction.Result res = action.call()
```

---

#### 扫描云主机备份(SyncVmBackup)



##### API请求

 URLs

```
PUT zstack/v1/vm-backups/imageStore/{imageStoreUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncVmBackup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncVmBackup":{}}' http://localhost:8080/zstack/v1/vm-backups/imageStore/087b41055fbc4875aef622142cbe5ac3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageStoreUuid | String | url | 备份服务器UUID |  | 3.5.0 |
| systemTags (可选) | List | body |  |  | 3.5.0 |
| userTags (可选) | List | body |  |  | 3.5.0 |



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
SyncVmBackupAction action = new SyncVmBackupAction();
action.imageStoreUuid = "7c3e52e35de449c9abc1343c83b93cd5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncVmBackupAction.Result res = action.call();
```

 Python SDK

```
SyncVmBackupAction action = SyncVmBackupAction()
action.imageStoreUuid = "07270eb0ae25428586b224c33e88e485"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncVmBackupAction.Result res = action.call()
```

---

#### 从云主机备份恢复云主机(RevertVmFromVmBackup)



##### API请求

 URLs

```
PUT zstack/v1/vm-backups/{groupUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "revertVmFromVmBackup": {
    "backupStorageUuid": "99afb6149155396c8ac1b6ab62badb9d"
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
-X PUT -d '{"revertVmFromVmBackup":{"backupStorageUuid":"99afb6149155396c8ac1b6ab62badb9d"}}' http://localhost:8080/zstack/v1/vm-backups/39f4e3c4b7553dbc98b8c0ce0e8f82a1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | url | 备份组uuid |  | 3.0.0 |
| backupStorageUuid (可选) | String | body(包含在**revertVmFromVmBackup**结构中) | 镜像存储UUID |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
RevertVmFromVmBackupAction action = new RevertVmFromVmBackupAction();
action.groupUuid = "39f4e3c4b7553dbc98b8c0ce0e8f82a1";
action.backupStorageUuid = "99afb6149155396c8ac1b6ab62badb9d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RevertVmFromVmBackupAction.Result res = action.call();
```

 Python SDK

```
RevertVmFromVmBackupAction action = RevertVmFromVmBackupAction()
action.groupUuid = "39f4e3c4b7553dbc98b8c0ce0e8f82a1"
action.backupStorageUuid = "99afb6149155396c8ac1b6ab62badb9d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RevertVmFromVmBackupAction.Result res = action.call()
```

---

#### 从云主机备份创建云主机(CreateVmFromVmBackup)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/from/vm-backups/{groupUuid}
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
    "instanceOfferingUuid": "7d608371542b3ab5960823c1b57bfa0c",
    "l3NetworkUuids": [
      "6ab4d28582d232708ed2912c1c3eb1ef"
    ],
    "clusterUuid": "84a216b8b0323b87bf9d2b32abc635a3",
    "description": "this is a vm",
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
-X POST -d '{"params":{"name":"vm1","instanceOfferingUuid":"7d608371542b3ab5960823c1b57bfa0c","l3NetworkUuids":["6ab4d28582d232708ed2912c1c3eb1ef"],"clusterUuid":"84a216b8b0323b87bf9d2b32abc635a3","description":"this is a vm","strategy":"InstantStart"}}' http://localhost:8080/zstack/v1/vm-instances/from/vm-backups/04ac2beae2b03def881dea125299498c
```

 参数列表
-
-

-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| groupUuid | String | url | 云主机备份组UUID |  | 3.0.0 |
| backupStorageUuid (可选) | String | body(包含在**params**结构中) | 镜像存储UUID |  | 0.6 |
| instanceOfferingUuid | String | body(包含在**params**结构中) | 计算规格UUID |  | 3.0.0 |
| l3NetworkUuids（可选） | List | body(包含在**params**结构中) | 一组三层网络的UUID |  | 3.0.0 |
| vmNicParams (可选) | String | body(包含在**params**结构中) | 网卡信息 |  | 4.7.0 |
| type (可选) | String | body(包含在**params**结构中) | 云主机类型 | UserVm ApplianceVm | 3.0.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 3.0.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 3.0.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 3.0.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根云盘主存储UUID |  | 3.0.0 |
| primaryStorageUuidForDataVolume (可选) | String | body(包含在**params**结构中) | 数据盘主存储UUID |  | 3.0.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.0 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 根云盘系统标签 |  | 3.0.0 |
| dataVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 数据盘系统标签 |  | 3.0.0 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认三层网络的UUID |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| strategy (可选) | String | body(包含在**params**结构中) | 云主机创建策略 | InstantStart JustCreate CreateStopped | 5.1.0 |


  - 选项格式为：`volumeProvisioningStrategy::ThinProvisioning,                                         volumeProvisioningStrategy::ThickProvisioning`
  - 例如：`volumeProvisioningStrategy::ThinProvisioning,                                         volumeProvisioningStrategy::ThickProvisioning`
- 例如：`volumeProvisioningStrategy::ThinProvisioning,                                         volumeProvisioningStrategy::ThickProvisioning`


> **注意:** 说明:



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "a1c07d683f693f6e9f2d7f9a499c7840",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "1e48b41ec4b63660b38a72d271c0164b",
    "clusterUuid": "f29498f04b1e3c319bdaeb6b3f8259f3",
    "imageUuid": "5c07704333c532e8b402b6b3ddb89315",
    "hostUuid": "e18cf66eedb3306686a1d4685bbb63af",
    "lastHostUuid": "4834161c409a34b6a84e40d71d85f714",
    "instanceOfferingUuid": "f53ad9f147203b499dfbd93ce41b7a8e",
    "rootVolumeUuid": "24b9fcb69f123ad6b3ddfffed96d2882",
    "platform": "Linux",
    "defaultL3NetworkUuid": "d50554f493153be78f6740e18e598046",
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
        "uuid": "9856d36e40783d669b9e4f1de41d1a17",
        "vmInstanceUuid": "a1c07d683f693f6e9f2d7f9a499c7840",
        "usedIpUuid": "be02105c2a223492a91fb09ba664ecb1",
        "l3NetworkUuid": "d50554f493153be78f6740e18e598046",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
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
        "uuid": "24b9fcb69f123ad6b3ddfffed96d2882",
        "name": "Root-Volume-For-VM-a1c07d683f693f6e9f2d7f9a499c7840",
        "primaryStorageUuid": "ae47a25fd7cf3a349035d01060a8a224",
        "vmInstanceUuid": "a1c07d683f693f6e9f2d7f9a499c7840",
        "rootImageUuid": "5c07704333c532e8b402b6b3ddb89315",
        "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-24b9fcb69f123ad6b3ddfffed96d2882/24b9fcb69f123ad6b3ddfffed96d2882.qcow2",
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
| success | boolean |  | 3.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| zoneUuid | String | 区域UUID | 3.0.0 |
| clusterUuid | String | 集群UUID | 3.0.0 |
| imageUuid | String | 镜像UUID | 3.0.0 |
| hostUuid | String | 物理机UUID | 3.0.0 |
| lastHostUuid | String |  | 3.0.0 |
| instanceOfferingUuid | String | 计算规格UUID | 3.0.0 |
| rootVolumeUuid | String | 根云盘UUID | 3.0.0 |
| platform | String |  | 3.0.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 3.0.0 |
| type | String |  | 3.0.0 |
| hypervisorType | String |  | 3.0.0 |
| memorySize | Long |  | 3.0.0 |
| cpuNum | Integer |  | 3.0.0 |
| cpuSpeed | Long |  | 3.0.0 |
| allocatorStrategy | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| state | String |  | 3.0.0 |
| guestOsType | String |  | 4.1.2 |
| vmNics | List | 详情参考[vmNics] | 3.0.0 |
| allVolumes | List | 详情参考[allVolumes] | 3.0.0 |
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
| type | String |  |  |
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| primaryStorageUuid | String | 主存储UUID | 3.0.0 |
| vmInstanceUuid | String | 云主机UUID | 3.0.0 |
| diskOfferingUuid | String | 云盘规格UUID | 3.0.0 |
| rootImageUuid | String |  | 3.0.0 |
| installPath | String |  | 3.0.0 |
| type | String |  | 3.0.0 |
| format | String |  | 3.0.0 |
| size | Long |  | 3.0.0 |
| actualSize | Long |  | 3.0.0 |
| deviceId | Integer |  | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| isShareable | Boolean |  | 3.0.0 |
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
CreateVmFromVmBackupAction action = new CreateVmFromVmBackupAction();
action.name = "vm1";
action.groupUuid = "04ac2beae2b03def881dea125299498c";
action.instanceOfferingUuid = "7d608371542b3ab5960823c1b57bfa0c";
action.l3NetworkUuids = asList("6ab4d28582d232708ed2912c1c3eb1ef");
action.clusterUuid = "84a216b8b0323b87bf9d2b32abc635a3";
action.description = "this is a vm";
action.strategy = "InstantStart";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmFromVmBackupAction.Result res = action.call();
```

 Python SDK

```
CreateVmFromVmBackupAction action = CreateVmFromVmBackupAction()
action.name = "vm1"
action.groupUuid = "04ac2beae2b03def881dea125299498c"
action.instanceOfferingUuid = "7d608371542b3ab5960823c1b57bfa0c"
action.l3NetworkUuids = [6ab4d28582d232708ed2912c1c3eb1ef]
action.clusterUuid = "84a216b8b0323b87bf9d2b32abc635a3"
action.description = "this is a vm"
action.strategy = "InstantStart"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmFromVmBackupAction.Result res = action.call()
```

---

#### 从云盘备份创建云主机(CreateVmFromVolumeBackup)



##### API请求

 URLs

```
POST zstack/v1/vm-instances/from/vm-backup/{backupUuid}
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
    "instanceOfferingUuid": "31d2057b670d3c32a6970e519b514f12",
    "l3NetworkUuids": [
      "87b522f02ef83627bcab5e427ba2d5e6"
    ],
    "clusterUuid": "255b14070a533fb5ad9a845d4c50508a",
    "description": "this is a vm",
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
-X POST -d '{"params":{"name":"vm1","instanceOfferingUuid":"31d2057b670d3c32a6970e519b514f12","l3NetworkUuids":["87b522f02ef83627bcab5e427ba2d5e6"],"clusterUuid":"255b14070a533fb5ad9a845d4c50508a","description":"this is a vm","strategy":"InstantStart"}}' http://localhost:8080/zstack/v1/vm-instances/from/vm-backup/b3ecd20a4b523ff0b5a954a8579a1aeb
```

 参数列表
-
-

-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.1.0 |
| backupUuid | String | url | 备份UUID |  | 5.1.0 |
| backupStorageUuid (可选) | String | body(包含在**params**结构中) | 镜像存储UUID |  | 5.1.0 |
| instanceOfferingUuid | String | body(包含在**params**结构中) | 计算规格UUID |  | 5.1.0 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认L3网络UUID |  | 5.1.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 一组三层网络的UUID |  | 5.1.0 |
| type (可选) | String | body(包含在**params**结构中) | 云主机类型 | UserVm ApplianceVm | 5.1.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 5.1.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 5.1.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 5.1.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根云盘主存储UUID |  | 5.1.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.1.0 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 根云盘系统标签 |  | 5.1.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 5.1.0 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.0 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.1.0 |
| strategy (可选) | String | body(包含在**params**结构中) | 云主机创建策略 | InstantStart JustCreate CreateStopped | 5.1.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0a2cbf2edacc399cb9a7e6b2fa14602d",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "1086a7491b8c3fb9ab12192dc0fab906",
    "clusterUuid": "3e368e7f98913ec6bb20d6cc969cf50a",
    "imageUuid": "2ceb7086482d3b42ab56b9daa6fb4d44",
    "hostUuid": "d81f8599fd033183ab2d4bcafce233cc",
    "lastHostUuid": "2d9fd9b480be3fdd9df46548d9d178d5",
    "instanceOfferingUuid": "feba03817e0e326d827ebdb436786bad",
    "rootVolumeUuid": "2f368d0d8b4734b7b58e1c5cb2ec27c6",
    "platform": "Linux",
    "defaultL3NetworkUuid": "ecebe1b81b18351dbdf304622e9ada80",
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
        "uuid": "da1e1002fa2b387bbe389ce3bf10ba92",
        "vmInstanceUuid": "0a2cbf2edacc399cb9a7e6b2fa14602d",
        "usedIpUuid": "e8c56c6711e83896acb7413183726c1c",
        "l3NetworkUuid": "ecebe1b81b18351dbdf304622e9ada80",
        "ip": "192.168.1.10",
        "mac": "00:0c:29:bd:99:fc",
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
        "uuid": "2f368d0d8b4734b7b58e1c5cb2ec27c6",
        "name": "Root-Volume-For-VM-0a2cbf2edacc399cb9a7e6b2fa14602d",
        "primaryStorageUuid": "890196bf1b5a308da1c75eb61ff441a3",
        "vmInstanceUuid": "0a2cbf2edacc399cb9a7e6b2fa14602d",
        "rootImageUuid": "2ceb7086482d3b42ab56b9daa6fb4d44",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-2f368d0d8b4734b7b58e1c5cb2ec27c6/2f368d0d8b4734b7b58e1c5cb2ec27c6.qcow2",
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
| success | boolean |  | 5.1.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 5.1.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.0 |
| description | String | 错误的概要描述 | 5.1.0 |
| details | String | 错误的详细信息 | 5.1.0 |
| elaboration | String | 保留字段，默认为null | 5.1.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| zoneUuid | String | 区域UUID | 5.1.0 |
| clusterUuid | String | 集群UUID | 5.1.0 |
| imageUuid | String | 镜像UUID | 5.1.0 |
| hostUuid | String | 物理机UUID | 5.1.0 |
| lastHostUuid | String |  | 5.1.0 |
| instanceOfferingUuid | String | 计算规格UUID | 5.1.0 |
| rootVolumeUuid | String | 根云盘UUID | 5.1.0 |
| platform | String |  | 5.1.0 |
| architecture | String |  | 5.1.0 |
| defaultL3NetworkUuid | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| memorySize | Long |  | 5.1.0 |
| cpuNum | Integer |  | 5.1.0 |
| cpuSpeed | Long |  | 5.1.0 |
| allocatorStrategy | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| state | String |  | 5.1.0 |
| guestOsType | String |  | 4.1.2 |
| vmNics | List | 详情参考[vmNics] | 5.1.0 |
| allVolumes | List | 详情参考[allVolumes] | 5.1.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 0.6 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| l3NetworkUuid | String | 三层网络UUID | 5.1.0 |
| ip | String |  | 5.1.0 |
| mac | String |  | 5.1.0 |
| hypervisorType | String |  | 5.1.0 |
| netmask | String |  | 5.1.0 |
| gateway | String |  | 5.1.0 |
| metaData | String |  | 5.1.0 |
| ipVersion | Integer |  | 5.1.0 |
| driverType | String |  | 5.1.0 |
| internalName | String |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| type | String |  | 5.1.0 |
| state | String | 网卡状态 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| usedIps | List | 详情参考[usedIps] | 5.1.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| primaryStorageUuid | String | 主存储UUID | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| diskOfferingUuid | String | 云盘规格UUID | 5.1.0 |
| rootImageUuid | String |  | 5.1.0 |
| installPath | String |  | 5.1.0 |
| type | String |  | 5.1.0 |
| format | String |  | 5.1.0 |
| size | Long |  | 5.1.0 |
| actualSize | Long |  | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| state | String |  | 5.1.0 |
| status | String |  | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |
| isShareable | Boolean |  | 5.1.0 |
| volumeQos | String |  | 5.1.0 |
| lastDetachDate | Timestamp |  | 5.1.0 |
| lastVmInstanceUuid | String |  | 5.1.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.1.0 |
| vmInstanceUuid | String | 云主机UUID | 5.1.0 |
| deviceId | Integer |  | 5.1.0 |
| isoUuid | String |  | 5.1.0 |
| isoInstallPath | String |  | 5.1.0 |
| name | String | 资源名称 | 5.1.0 |
| description | String | 资源的详细描述 | 5.1.0 |
| createDate | Timestamp | 创建时间 | 5.1.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.1.0 |



##### SDK示例

 Java SDK

```
CreateVmFromVolumeBackupAction action = new CreateVmFromVolumeBackupAction();
action.name = "vm1";
action.backupUuid = "b3ecd20a4b523ff0b5a954a8579a1aeb";
action.instanceOfferingUuid = "31d2057b670d3c32a6970e519b514f12";
action.l3NetworkUuids = asList("87b522f02ef83627bcab5e427ba2d5e6");
action.clusterUuid = "255b14070a533fb5ad9a845d4c50508a";
action.description = "this is a vm";
action.strategy = "InstantStart";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmFromVolumeBackupAction.Result res = action.call();

```

 Python SDK

```
CreateVmFromVolumeBackupAction action = CreateVmFromVolumeBackupAction()
action.name = "vm1"
action.backupUuid = "b3ecd20a4b523ff0b5a954a8579a1aeb"
action.instanceOfferingUuid = "31d2057b670d3c32a6970e519b514f12"
action.l3NetworkUuids = [87b522f02ef83627bcab5e427ba2d5e6]
action.clusterUuid = "255b14070a533fb5ad9a845d4c50508a"
action.description = "this is a vm"
action.strategy = "InstantStart"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmFromVolumeBackupAction.Result res = action.call()

```

---

#### 恢复云主机备份(RecoverVmBackupFromImageStoreBackupStorage)



##### API请求

 URLs

```
PUT zstack/v1/vm-backups/{groupUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverVmBackupFromImageStoreBackupStorage": {
    "srcBackupStorageUuid": "c63b10a638f6302caeabb7a806d087ad",
    "dstBackupStorageUuid": "7c7d653af1c531dfa04dabea3a085de5"
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
-X PUT -d '{"recoverVmBackupFromImageStoreBackupStorage":{"srcBackupStorageUuid":"c63b10a638f6302caeabb7a806d087ad","dstBackupStorageUuid":"7c7d653af1c531dfa04dabea3a085de5"}}' http://localhost:8080/zstack/v1/vm-backups/7913ce9f37973f4e8339aea4ff61584c/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | url | 虚拟机备份组uuid |  | 3.0.0 |
| srcBackupStorageUuid | String | body(包含在**recoverVmBackupFromImageStoreBackupStorage**结构中) | 本地镜像仓库 |  | 3.0.0 |
| dstBackupStorageUuid | String | body(包含在**recoverVmBackupFromImageStoreBackupStorage**结构中) | 备份镜像仓库 |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "5e28a0c27a8e352bbeedff94a0326f9e",
      "volumeUuid": "aa5fbdba3ffa352bbefaf913f56949f3",
      "name": "Root-Volume-Backup-1",
      "description": "volume backup",
      "size": 1.073741824E9,
      "groupUuid": "0150a8120f9334db8e9abc9d3f5eea08",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "5924c90ddbcb3784ae6e78b70ede90ce",
      "volumeUuid": "12d583f519f03a0593dff7514af65be4",
      "name": "Data-Volume-Backup-1",
      "description": "volume backup",
      "size": 2.147483648E9,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventories | List | 详情参考[inventories] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 3.0.0 |
| volumeUuid | String | 云盘UUID | 3.0.0 |
| name | String | 备份名称 | 3.0.0 |
| description | String | 备份的详细描述 | 3.0.0 |
| type | String | 云盘的类型 | 3.0.0 |
| state | String | 云盘备份的启用状态 | 3.0.0 |
| status | String | 云盘备份的状态 | 3.0.0 |
| size | Long | 当前云盘备份的大小 | 3.0.0 |
| metadata | String | 云盘备份相关元数据 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 3.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 3.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 3.0.0 |
| installPath | String | 云盘备份的数据路径 | 3.0.0 |
| status | String | 云盘备份在镜像存储的状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
RecoverVmBackupFromImageStoreBackupStorageAction action = new RecoverVmBackupFromImageStoreBackupStorageAction();
action.groupUuid = "7913ce9f37973f4e8339aea4ff61584c";
action.srcBackupStorageUuid = "c63b10a638f6302caeabb7a806d087ad";
action.dstBackupStorageUuid = "7c7d653af1c531dfa04dabea3a085de5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RecoverVmBackupFromImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
RecoverVmBackupFromImageStoreBackupStorageAction action = RecoverVmBackupFromImageStoreBackupStorageAction()
action.groupUuid = "7913ce9f37973f4e8339aea4ff61584c"
action.srcBackupStorageUuid = "c63b10a638f6302caeabb7a806d087ad"
action.dstBackupStorageUuid = "7c7d653af1c531dfa04dabea3a085de5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RecoverVmBackupFromImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 同步至备份服务器(SyncVmBackupFromImageStoreBackupStorage)



同步备份至备份镜像服务器。

##### API请求

 URLs

```
PUT zstack/v1/vm-backups/{groupUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncVmBackupFromImageStoreBackupStorage": {
    "srcBackupStorageUuid": "3428f7d03e493f89b32c57ef80a7e5af",
    "dstBackupStorageUuid": "6f8c528537a9347a86da7a96fb7418d4"
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
-X PUT -d '{"syncVmBackupFromImageStoreBackupStorage":{"srcBackupStorageUuid":"3428f7d03e493f89b32c57ef80a7e5af","dstBackupStorageUuid":"6f8c528537a9347a86da7a96fb7418d4"}}' http://localhost:8080/zstack/v1/vm-backups/14e53ad2aecd3e7ebe1f05cb4f5dd6a5/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| groupUuid | String | url | 备份组uuid |  | 3.0.0 |
| srcBackupStorageUuid | String | body(包含在**syncVmBackupFromImageStoreBackupStorage**结构中) | 本地镜像服务器 |  | 3.0.0 |
| dstBackupStorageUuid | String | body(包含在**syncVmBackupFromImageStoreBackupStorage**结构中) | 备份镜像服务器 |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "cf59b77253e134e483ceda7e21c6bf15",
      "volumeUuid": "6be74434a84e3c939830a3987488a499",
      "name": "Root-Volume-Backup-1",
      "description": "volume backup",
      "size": 1.073741824E9,
      "groupUuid": "09d5949ca5f233c2adcf4c278f537cef",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    },
    {
      "uuid": "c546170919a4300e9b3d3e29fc27de7f",
      "volumeUuid": "39656103b9e7391e89071517f9d21b91",
      "name": "Data-Volume-Backup-1",
      "description": "volume backup",
      "size": 2.147483648E9,
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventories | List | 详情参考[inventories] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 云盘备份的UUID，唯一标示该资源 | 3.0.0 |
| volumeUuid | String | 云盘UUID | 3.0.0 |
| name | String | 备份名称 | 3.0.0 |
| description | String | 备份的详细描述 | 3.0.0 |
| type | String | 云盘的类型 | 3.0.0 |
| state | String | 云盘备份的启用状态 | 3.0.0 |
| status | String | 云盘备份的状态 | 3.0.0 |
| size | Long | 当前云盘备份的大小 | 3.0.0 |
| metadata | String | 云盘备份相关元数据 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 3.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| volumeBackupUuid | String | 云盘备份的uuid | 3.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 3.0.0 |
| installPath | String | 云盘备份的数据路径 | 3.0.0 |
| status | String | 云盘备份在镜像存储的状态 | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
SyncVmBackupFromImageStoreBackupStorageAction action = new SyncVmBackupFromImageStoreBackupStorageAction();
action.groupUuid = "14e53ad2aecd3e7ebe1f05cb4f5dd6a5";
action.srcBackupStorageUuid = "3428f7d03e493f89b32c57ef80a7e5af";
action.dstBackupStorageUuid = "6f8c528537a9347a86da7a96fb7418d4";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncVmBackupFromImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
SyncVmBackupFromImageStoreBackupStorageAction action = SyncVmBackupFromImageStoreBackupStorageAction()
action.groupUuid = "14e53ad2aecd3e7ebe1f05cb4f5dd6a5"
action.srcBackupStorageUuid = "3428f7d03e493f89b32c57ef80a7e5af"
action.dstBackupStorageUuid = "6f8c528537a9347a86da7a96fb7418d4"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncVmBackupFromImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 创建数据库备份(CreateDatabaseBackup)



##### API请求

 URLs

```
POST zstack/v1/database-backups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "cloud-db",
    "backupStorageUuid": "676c5945223647698fcf4da2fa46d1dd"
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
-X POST -d '{"params":{"name":"cloud-db","backupStorageUuid":"0c0f5fc523d8420a97a9be367f112b4a"}}' http://localhost:8080/zstack/v1/database-backups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.0.0 |
| description | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.0.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 3.0.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7decf4a7cb7c41dabc57446df2784476",
    "name": "zsdb",
    "state": "Enabled",
    "size": 1000.0,
    "metadata": "{\"version\":\"3.0.0\"}",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | DatabaseBackupInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| size | Long |  | 3.0.0 |
| metadata | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 3.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| databaseBackupUuid | String |  | 3.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 3.0.0 |
| installPath | String |  | 3.0.0 |
| exportUrl | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
CreateDatabaseBackupAction action = new CreateDatabaseBackupAction();
action.name = "cloud-db";
action.backupStorageUuid = "35c0d1e417d84bf498be201091f39c49";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateDatabaseBackupAction.Result res = action.call();
```

 Python SDK

```
CreateDatabaseBackupAction action = CreateDatabaseBackupAction()
action.name = "cloud-db"
action.backupStorageUuid = "476870bf9c4241c8993340bd0703d0bf"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateDatabaseBackupAction.Result res = action.call()
```

---

#### 删除数据库备份(DeleteDatabaseBackup)



##### API请求

 URLs

```
DELETE zstack/v1/database-backups/{uuid}?backupStorageUuids={backupStorageUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/database-backups/9caf0430ce473651ae7033e1a16a0097?backupStorageUuids=0c54ad64cd8d3ca1ba9d98864bb83571
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| backupStorageUuids(可选) | List | url | 镜像服务器UUID列表 |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
DeleteDatabaseBackupAction action = new DeleteDatabaseBackupAction();
action.uuid = "9caf0430ce473651ae7033e1a16a0097";
action.backupStorageUuids = asList("0c54ad64cd8d3ca1ba9d98864bb83571");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteDatabaseBackupAction.Result res = action.call();
```

 Python SDK

```
DeleteDatabaseBackupAction action = DeleteDatabaseBackupAction()
action.uuid = "9caf0430ce473651ae7033e1a16a0097"
action.backupStorageUuids = [0c54ad64cd8d3ca1ba9d98864bb83571]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteDatabaseBackupAction.Result res = action.call()
```

---

#### 查询数据库备份(QueryDatabaseBackup)



##### API请求

 URLs

```
GET zstack/v1/database-backups
GET zstack/v1/database-backups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/database-backups?q=uuid=9f5010336a233d6ebbd82594a6d56e7c
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/database-backups/296a7da913333dd992d89bf30d9304ed
```



可查询字段

运行CLI命令行工具，输入QueryDatabaseBackup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "742a7c7d4a4f3a01b206632a40ac414f",
      "name": "db-backup",
      "description": "db-backup",
      "size": 13107.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventories | List | 详情参考[inventories] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| size | Long |  | 3.0.0 |
| metadata | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 3.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| databaseBackupUuid | String |  | 3.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 3.0.0 |
| installPath | String |  | 3.0.0 |
| exportUrl | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
QueryDatabaseBackupAction action = new QueryDatabaseBackupAction();
action.conditions = asList("uuid=74b420b3e877354e832a900915aab41a");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryDatabaseBackupAction.Result res = action.call();
```

 Python SDK

```
QueryDatabaseBackupAction action = QueryDatabaseBackupAction()
action.conditions = ["uuid=b11af605703231b4a898bed3fb7d94c0"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryDatabaseBackupAction.Result res = action.call()
```

---

#### 扫描数据库备份(SyncDatabaseBackup)



##### API请求

 URLs

```
PUT zstack/v1/database-backups/imageStore/{imageStoreUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncDatabaseBackup": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"syncDatabaseBackup":{}}' http://localhost:8080/zstack/v1/database-backups/imageStore/77e7125f5ecf4cbe9129b0e8483a00ae/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| imageStoreUuid | String | url | 备份服务器UUID |  | 3.2.0 |
| systemTags (可选) | List | body |  |  | 3.2.0 |
| userTags (可选) | List | body |  |  | 3.2.0 |



##### API返回

 返回示例

```
{
  "result": {
    "deletedBackupCount": 1.0,
    "newBackupCount": 3.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| result | SyncBackupResult | 详情参考[result] | 3.8.0 |

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
| deletedBackupCount | int | 已删除的备份数量 | 3.7.0 |
| newBackupCount | int | 新备份数量 | 3.7.0 |



##### SDK示例

 Java SDK

```
SyncDatabaseBackupAction action = new SyncDatabaseBackupAction();
action.imageStoreUuid = "e0803f92a12b42688d20f68beef19588";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncDatabaseBackupAction.Result res = action.call();
```

 Python SDK

```
SyncDatabaseBackupAction action = SyncDatabaseBackupAction()
action.imageStoreUuid = "0de54b0b3067493f9461fc74906dfc54"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncDatabaseBackupAction.Result res = action.call()
```

---

#### 恢复数据库备份(RecoverDatabaseFromBackup)



从备份库恢复数据库备份。

##### API请求

 URLs

```
PUT zstack/v1/database-backups/actions?uuid={uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "recoverDatabaseFromBackup": {
    "backupStorageUrl": "ssh://root:password@localhost:22/Cloud_bs",
    "backupInstallPath": "zstore://zsbak/0ed599ec519249489475112a058bb93a",
    "mysqlRootPassword": "password"
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
-X PUT -d '{"recoverDatabaseFromBackup":{"backupStorageUrl":"ssh://root:password@localhost:22/Cloud_bs","backupInstallPath":"zstore://zsbak/0ed599ec519249489475112a058bb93a","mysqlRootPassword":"password"}}' http://localhost:8080/zstack/v1/database-backups/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| backupStorageUrl (可选) | String | body(包含在**recoverDatabaseFromBackup**结构中) | 镜像服务器URL |  | 3.0.0 |
| backupInstallPath (可选) | String | body(包含在**recoverDatabaseFromBackup**结构中) | 数据库备份存储路径 |  | 3.0.0 |
| mysqlRootPassword | String | body(包含在**recoverDatabaseFromBackup**结构中) | MYSQL数据库ROOT密码 |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "logListenPort": 0.0
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| logListenPort | int | 浏览器可以通过此端口号实时打印日志 | 3.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |



##### SDK示例

 Java SDK

```
RecoverDatabaseFromBackupAction action = new RecoverDatabaseFromBackupAction();
action.backupStorageUrl = "ssh://root:password@localhost:22/Cloud_bs";
action.backupInstallPath = "zstore://zsbak/0ed599ec519249489475112a058bb93a";
action.mysqlRootPassword = "password";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RecoverDatabaseFromBackupAction.Result res = action.call();
```

 Python SDK

```
RecoverDatabaseFromBackupAction action = RecoverDatabaseFromBackupAction()
action.backupStorageUrl = "ssh://root:password@localhost:22/Cloud_bs"
action.backupInstallPath = "zstore://zsbak/0ed599ec519249489475112a058bb93a"
action.mysqlRootPassword = "password"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RecoverDatabaseFromBackupAction.Result res = action.call()
```

---

#### 导出数据库备份(ExportDatabaseBackupFromBackupStorage)



从备份服务器导出数据库备份。

##### API请求

 URLs

```
PUT zstack/v1/database-backups/{databaseBackupUuid}/backup-storage/{backupStorageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "exportDatabaseBackupFromBackupStorage": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"exportDatabaseBackupFromBackupStorage":{}}' http://localhost:8080/zstack/v1/database-backups/6dae84793fc53f5b82034dd9a44c554b/backup-storage/cc9127f6af0e32c888044f49048788a1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 3.0.0 |
| databaseBackupUuid | String | url | 数据库备份UUID |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "databaseBackupUrl": "http://127.0.0.1:8001/path/cloud-db-backup.gz"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| databaseBackupUrl | String | 被导出备份的访问地址 | 3.0.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |



##### SDK示例

 Java SDK

```
ExportDatabaseBackupFromBackupStorageAction action = new ExportDatabaseBackupFromBackupStorageAction();
action.backupStorageUuid = "cc9127f6af0e32c888044f49048788a1";
action.databaseBackupUuid = "6dae84793fc53f5b82034dd9a44c554b";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExportDatabaseBackupFromBackupStorageAction.Result res = action.call();
```

 Python SDK

```
ExportDatabaseBackupFromBackupStorageAction action = ExportDatabaseBackupFromBackupStorageAction()
action.backupStorageUuid = "cc9127f6af0e32c888044f49048788a1"
action.databaseBackupUuid = "6dae84793fc53f5b82034dd9a44c554b"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExportDatabaseBackupFromBackupStorageAction.Result res = action.call()
```

---

#### 获取数据库备份(GetDatabaseBackupFromImageStore)



从备份服务器获取导出的数据库备份。

##### API请求

 URLs

```
GET zstack/v1/database-backups/image-store
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/database-backups/image-store?url=ssh://root:password@localhost:22/Cloud_bs&registryPort=8000.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| url | String | query | 镜像服务器URL |  | 3.0.0 |
| registryPort (可选) | int | query | 镜像仓库访问端口 |  | 3.0.0 |
| systemTags (可选) | List | query |  |  | 3.0.0 |
| userTags (可选) | List | query |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "infos": [
    {
      "id": "270c67e3699f72ba",
      "created": "Nov 14, 2017 10:20:57 PM",
      "author": "cloud",
      "arch": "amd64",
      "size": 7995392.0,
      "virtualsize": 1.268224E7,
      "name": "78b6afbc9da73932a000fb9a75947962"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| infos | List | 详情参考[infos] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #infos

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | String | 镜像仓库中的id | 3.0.0 |
| parent | String | 父镜像名称 | 3.0.0 |
| blobsum | String | 镜像hash码 | 3.0.0 |
| created | Timestamp | 镜像提交时间 | 3.0.0 |
| author | String | 镜像制作者 | 3.0.0 |
| arch | String | 镜像的os结构 | 3.0.0 |
| desc | String | 镜像描述 | 3.0.0 |
| size | Long | 镜像的真实大小 | 3.0.0 |
| virtualsize | Long | 镜像的虚拟大小 | 3.0.0 |
| name | String | 镜像仓库中的镜像名称 | 3.0.0 |



##### SDK示例

 Java SDK

```
GetDatabaseBackupFromImageStoreAction action = new GetDatabaseBackupFromImageStoreAction();
action.url = "ssh://root:password@localhost:22/Cloud_bs";
action.registryPort = 8000.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetDatabaseBackupFromImageStoreAction.Result res = action.call();
```

 Python SDK

```
GetDatabaseBackupFromImageStoreAction action = GetDatabaseBackupFromImageStoreAction()
action.url = "ssh://root:password@localhost:22/Cloud_bs"
action.registryPort = 8000.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetDatabaseBackupFromImageStoreAction.Result res = action.call()
```

---

#### 删除数据库备份 (DeleteExportedDatabaseBackupFromBackupStorage)



删除导出的数据库备份。

##### API请求

 URLs

```
DELETE zstack/v1/exported-database-backup/{databaseBackupUuid}/backup-storage/{backupStorageUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/exported-database-backup/341a599af82f3ecbab5d680e8dfb0276/backup-storage/737f27cb664c31a594f71080d481dddf?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 3.0.0 |
| databaseBackupUuid | String | url |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



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
DeleteExportedDatabaseBackupFromBackupStorageAction action = new DeleteExportedDatabaseBackupFromBackupStorageAction();
action.backupStorageUuid = "737f27cb664c31a594f71080d481dddf";
action.databaseBackupUuid = "341a599af82f3ecbab5d680e8dfb0276";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteExportedDatabaseBackupFromBackupStorageAction.Result res = action.call();
```

 Python SDK

```
DeleteExportedDatabaseBackupFromBackupStorageAction action = DeleteExportedDatabaseBackupFromBackupStorageAction()
action.backupStorageUuid = "737f27cb664c31a594f71080d481dddf"
action.databaseBackupUuid = "341a599af82f3ecbab5d680e8dfb0276"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteExportedDatabaseBackupFromBackupStorageAction.Result res = action.call()
```

---

#### 同步至DS (SyncDatabaseBackupFromImageStoreBackupStorage)



同步备份至备份服务器。

##### API请求

 URLs

```
PUT zstack/v1/database-backups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "syncDatabaseBackupFromImageStoreBackupStorage": {
    "srcBackupStorageUuid": "72ad4c5419d63f5aaf37faf985c95a65",
    "dstBackupStorageUuid": "76b2c6b412a73ef8a4263e659c104fff"
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
-X PUT -d '{"syncDatabaseBackupFromImageStoreBackupStorage":{"srcBackupStorageUuid":"72ad4c5419d63f5aaf37faf985c95a65","dstBackupStorageUuid":"76b2c6b412a73ef8a4263e659c104fff"}}' http://localhost:8080/zstack/v1/database-backups/4594a949f00e3a55932f5b5e66ec9d67/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 3.0.0 |
| srcBackupStorageUuid | String | body(包含在**syncDatabaseBackupFromImageStoreBackupStorage**结构中) |  |  | 3.0.0 |
| dstBackupStorageUuid | String | body(包含在**syncDatabaseBackupFromImageStoreBackupStorage**结构中) |  |  | 3.0.0 |
| systemTags (可选) | List | body |  |  | 3.0.0 |
| userTags (可选) | List | body |  |  | 3.0.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c04683f1c53039d1bb0b0f0b601b5a5b",
    "name": "Backup-1",
    "description": "database backup",
    "size": 1048576.0,
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| inventory | DatabaseBackupInventory | 详情参考[inventory] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.0.0 |
| name | String | 资源名称 | 3.0.0 |
| description | String | 资源的详细描述 | 3.0.0 |
| state | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| size | Long |  | 3.0.0 |
| metadata | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |
| backupStorageRefs | List | 详情参考[backupStorageRefs] | 3.0.0 |

 #backupStorageRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| databaseBackupUuid | String |  | 3.0.0 |
| backupStorageUuid | String | 镜像存储UUID | 3.0.0 |
| installPath | String |  | 3.0.0 |
| exportUrl | String |  | 3.0.0 |
| status | String |  | 3.0.0 |
| createDate | Timestamp | 创建时间 | 3.0.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.0.0 |



##### SDK示例

 Java SDK

```
SyncDatabaseBackupFromImageStoreBackupStorageAction action = new SyncDatabaseBackupFromImageStoreBackupStorageAction();
action.uuid = "4594a949f00e3a55932f5b5e66ec9d67";
action.srcBackupStorageUuid = "72ad4c5419d63f5aaf37faf985c95a65";
action.dstBackupStorageUuid = "76b2c6b412a73ef8a4263e659c104fff";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
SyncDatabaseBackupFromImageStoreBackupStorageAction.Result res = action.call();
```

 Python SDK

```
SyncDatabaseBackupFromImageStoreBackupStorageAction action = SyncDatabaseBackupFromImageStoreBackupStorageAction()
action.uuid = "4594a949f00e3a55932f5b5e66ec9d67"
action.srcBackupStorageUuid = "72ad4c5419d63f5aaf37faf985c95a65"
action.dstBackupStorageUuid = "76b2c6b412a73ef8a4263e659c104fff"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
SyncDatabaseBackupFromImageStoreBackupStorageAction.Result res = action.call()
```

---

#### 定时任务组绑定触发器(AddSchedulerJobGroupToSchedulerTrigger)



##### API请求

 URLs

```
POST zstack/v1/scheduler/jobgroups/{schedulerJobGroupUuid}/scheduler/triggers/{schedulerTriggerUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "triggerNow": false
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
-X POST -d '{"params":{"triggerNow":false}}' http://localhost:8080/zstack/v1/scheduler/jobgroups/997c126bb3db39f6bbda1ffe90008f51/scheduler/triggers/78341d4e8f683a3291527f4944fa6831
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobGroupUuid | String | url | 定时任务组UUID |  | 3.4.0 |
| schedulerTriggerUuid | String | url | 触发器UUID |  | 3.4.0 |
| triggerNow (可选) | boolean | body(包含在**params**结构中) | 是否立即触发 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签列表 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签列表 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "schedulerJobGroupUuid": "ec8d2952f8f13747bbbf24f93585a63d",
    "schedulerTriggerUuid": "4b5bc56b58623324afe0a57951a96064"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | SchedulerJobGroupSchedulerTriggerRefInventory | 详情参考[inventory] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| schedulerJobGroupUuid | String | 定时任务组UUID | 3.4.0 |
| schedulerTriggerUuid | String | 触发器UUID | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |



##### SDK示例

 Java SDK

```
AddSchedulerJobGroupToSchedulerTriggerAction action = new AddSchedulerJobGroupToSchedulerTriggerAction();
action.schedulerJobGroupUuid = "997c126bb3db39f6bbda1ffe90008f51";
action.schedulerTriggerUuid = "78341d4e8f683a3291527f4944fa6831";
action.triggerNow = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSchedulerJobGroupToSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
AddSchedulerJobGroupToSchedulerTriggerAction action = AddSchedulerJobGroupToSchedulerTriggerAction()
action.schedulerJobGroupUuid = "997c126bb3db39f6bbda1ffe90008f51"
action.schedulerTriggerUuid = "78341d4e8f683a3291527f4944fa6831"
action.triggerNow = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSchedulerJobGroupToSchedulerTriggerAction.Result res = action.call()
```

---

#### 定时任务组解绑触发器(RemoveSchedulerJobGroupFromSchedulerTrigger)



##### API请求

 URLs

```
DELETE zstack/v1/scheduler/jobgroups/{schedulerJobGroupUuid}/scheduler/triggers/{schedulerTriggerUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/scheduler/jobgroups/769b8cc2ba343736a919f4a849663fdb/scheduler/triggers/e0f1e497653b39639ff6eac7f6cd2e48?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobGroupUuid | String | url | 定时任务组UUID |  | 3.4.0 |
| schedulerTriggerUuid | String | url | 触发器UUID |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签列表 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签列表 |  | 3.4.0 |



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
RemoveSchedulerJobGroupFromSchedulerTriggerAction action = new RemoveSchedulerJobGroupFromSchedulerTriggerAction();
action.schedulerJobGroupUuid = "769b8cc2ba343736a919f4a849663fdb";
action.schedulerTriggerUuid = "e0f1e497653b39639ff6eac7f6cd2e48";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveSchedulerJobGroupFromSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
RemoveSchedulerJobGroupFromSchedulerTriggerAction action = RemoveSchedulerJobGroupFromSchedulerTriggerAction()
action.schedulerJobGroupUuid = "769b8cc2ba343736a919f4a849663fdb"
action.schedulerTriggerUuid = "e0f1e497653b39639ff6eac7f6cd2e48"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveSchedulerJobGroupFromSchedulerTriggerAction.Result res = action.call()
```

---

#### 触发定时器(RunSchedulerTrigger)



##### API请求

 URLs

```
PUT zstack/v1/scheduler/triggers/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "runSchedulerTrigger": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"runSchedulerTrigger":{}}' http://localhost:8080/zstack/v1/scheduler/triggers/2a486c1cd0cd43f3ac40bd60c6dd6fc1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 定时器UUID |  | 3.5.0 |
| jobUuids (可选) | List | body(包含在**runSchedulerTrigger**结构中) | 可选触发的任务UUID |  | 3.5.0 |
| systemTags (可选) | List | body |  |  | 3.5.0 |
| userTags (可选) | List | body |  |  | 3.5.0 |



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
RunSchedulerTriggerAction action = new RunSchedulerTriggerAction();
action.uuid = "61b439ee76004c51bc262324d6eaa332";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RunSchedulerTriggerAction.Result res = action.call();
```

 Python SDK

```
RunSchedulerTriggerAction action = RunSchedulerTriggerAction()
action.uuid = "8a5ed7d3e0194c2a98d1ecb529b15875"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RunSchedulerTriggerAction.Result res = action.call()
```

---

#### 创建定时任务组(CreateSchedulerJobGroup)



##### API请求

 URLs

```
POST zstack/v1/scheduler/jobgroups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "job",
    "description": "description",
    "type": "startVm"
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
-X POST -d '{"params":{"name":"job","description":"description","type":"startVm"}}' http://localhost:8080/zstack/v1/scheduler/jobgroups
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


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 3.4.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 3.4.0 |
| type | String | body(包含在**params**结构中) | 定时任务的类型 | startVm stopVm rebootVm volumeSnapshot volumeBackup vmBackup databaseBackup runAutoScalingGroup addIAM2ProjectLoginExpired cancleIAM2ProjectLoginExpired | 4.3.0 |
| parameters (可选) | Map | body(包含在**params**结构中) | 定时任务参数 |  | 3.4.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 3.4.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签列表 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签列表 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0cd85a37bb88346c8c2d122913d812df",
    "targetResourceUuid": "c458e0fb141932d0a87af999b0d0ab81",
    "name": "SchedulerJob",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | SchedulerJobInventory | 详情参考[inventory] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| targetResourceUuid | String |  | 3.4.0 |
| name | String | 资源名称 | 3.4.0 |
| description | String | 资源的详细描述 | 3.4.0 |
| state | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| triggersUuid | List |  | 3.4.0 |



##### SDK示例

 Java SDK

```
CreateSchedulerJobGroupAction action = new CreateSchedulerJobGroupAction();
action.name = "job";
action.description = "description";
action.type = "startVm";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateSchedulerJobGroupAction.Result res = action.call();
```

 Python SDK

```
CreateSchedulerJobGroupAction action = CreateSchedulerJobGroupAction()
action.name = "job"
action.description = "description"
action.type = "startVm"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateSchedulerJobGroupAction.Result res = action.call()
```

---

#### 删除定时任务组(DeleteSchedulerJobGroup)



##### API请求

 URLs

```
DELETE zstack/v1/scheduler/jobgroups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/scheduler/jobgroups/8bf8b175d6ce337eb24cbe37d9fe9b82
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 定时任务组的UUID，唯一标示该资源 |  | 3.4.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签列表 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签列表 |  | 3.4.0 |



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
DeleteSchedulerJobGroupAction action = new DeleteSchedulerJobGroupAction();
action.uuid = "8bf8b175d6ce337eb24cbe37d9fe9b82";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteSchedulerJobGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteSchedulerJobGroupAction action = DeleteSchedulerJobGroupAction()
action.uuid = "8bf8b175d6ce337eb24cbe37d9fe9b82"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteSchedulerJobGroupAction.Result res = action.call()
```

---

#### 更新定时任务组(UpdateSchedulerJobGroup)



##### API请求

 URLs

```
PUT zstack/v1/scheduler/jobgroups/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateSchedulerJobGroup": {
    "name": "Test2",
    "description": "new test"
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
-X PUT -d '{"updateSchedulerJobGroup":{"name":"Test2","description":"new test"}}' http://localhost:8080/zstack/v1/scheduler/jobgroups/4dc1dbf847d733fc98ee2998b5e0eca2/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 定时任务组的UUID，唯一标示该资源 |  | 3.4.0 |
| name (可选) | String | body(包含在**updateSchedulerJobGroup**结构中) | 资源名称 |  | 3.4.0 |
| description (可选) | String | body(包含在**updateSchedulerJobGroup**结构中) | 资源的详细描述 |  | 3.4.0 |
| state (可选) | String | body(包含在**updateSchedulerJobGroup**结构中) | 状态 | enable disable | 3.4.0 |
| parameters (可选) | Map | body(包含在**updateSchedulerJobGroup**结构中) | 定时任务组参数 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签列表 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签列表 |  | 3.4.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e344fd75079735369cbffda253cc173c",
    "name": "Test",
    "description": "create volume snapshot job",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventory | SchedulerJobGroupInventory | 详情参考[inventory] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 定时任务组的UUID，唯一标示该资源 | 3.4.0 |
| name | String | 定时任务组名称 | 3.4.0 |
| description | String | 定时任务组的详细描述 | 3.4.0 |
| state | String | 定时任务组的状态 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| jobData | String | 任务参数 | 3.4.0 |
| triggersUuid | List | 触发器UUID | 3.4.0 |



##### SDK示例

 Java SDK

```
UpdateSchedulerJobGroupAction action = new UpdateSchedulerJobGroupAction();
action.uuid = "4dc1dbf847d733fc98ee2998b5e0eca2";
action.name = "Test2";
action.description = "new test";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateSchedulerJobGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateSchedulerJobGroupAction action = UpdateSchedulerJobGroupAction()
action.uuid = "4dc1dbf847d733fc98ee2998b5e0eca2"
action.name = "Test2"
action.description = "new test"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateSchedulerJobGroupAction.Result res = action.call()
```

---

#### 查询定时任务组(QuerySchedulerJobGroup)



##### API请求

 URLs

```
GET zstack/v1/scheduler/jobgroups
GET zstack/v1/scheduler/jobgroups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scheduler/jobgroups?q=name=TestJobGroup&q=state=Enabled
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scheduler/jobgroups/c5cb16296a1334d2ac3cd666e1deeca3
```



可查询字段

运行CLI命令行工具，输入QuerySchedulerJobGroup并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "03dd26d45bb43bb094f3fdec29d78829",
      "name": "test",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.4.0 |
| inventories | List | 详情参考[inventories] | 3.4.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.4.0 |
| description | String | 错误的概要描述 | 3.4.0 |
| details | String | 错误的详细信息 | 3.4.0 |
| elaboration | String | 保留字段，默认为null | 3.4.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.4.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.4.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 定时任务组的UUID，唯一标示该资源 | 3.4.0 |
| name | String | 定时任务组名称 | 3.4.0 |
| description | String | 定时任务组的详细描述 | 3.4.0 |
| state | String | 定时任务组的状态 | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| jobData | String | 任务参数 | 3.4.0 |
| triggersUuid | List | 触发器UUID | 3.4.0 |



##### SDK示例

 Java SDK

```
QuerySchedulerJobGroupAction action = new QuerySchedulerJobGroupAction();
action.conditions = asList("name=TestJobGroup","state=Enabled");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySchedulerJobGroupAction.Result res = action.call();
```

 Python SDK

```
QuerySchedulerJobGroupAction action = QuerySchedulerJobGroupAction()
action.conditions = ["name=TestJobGroup","state=Enabled"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySchedulerJobGroupAction.Result res = action.call()
```

---

#### 任务组添加任务(AddSchedulerJobsToSchedulerJobGroup)



##### API请求

 URLs

```
POST zstack/v1/scheduler/jobgroups/{schedulerJobGroupUuid}/job/{schedulerJobUuids}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/scheduler/jobgroups/280d3a22ab363006b61b4a6c0318056f/job/[ed43fba83eb63a1cacb38c113e2bd38a]
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobGroupUuid | String | url | 定时任务组UUID |  | 3.4.0 |
| schedulerJobUuids | List | url | 定时任务UUID列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.4.0 |



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
AddSchedulerJobsToSchedulerJobGroupAction action = new AddSchedulerJobsToSchedulerJobGroupAction();
action.schedulerJobGroupUuid = "280d3a22ab363006b61b4a6c0318056f";
action.schedulerJobUuids = asList("ed43fba83eb63a1cacb38c113e2bd38a");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddSchedulerJobsToSchedulerJobGroupAction.Result res = action.call();
```

 Python SDK

```
AddSchedulerJobsToSchedulerJobGroupAction action = AddSchedulerJobsToSchedulerJobGroupAction()
action.schedulerJobGroupUuid = "280d3a22ab363006b61b4a6c0318056f"
action.schedulerJobUuids = [ed43fba83eb63a1cacb38c113e2bd38a]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddSchedulerJobsToSchedulerJobGroupAction.Result res = action.call()
```

---

#### 定时任务组移除定时任务(RemoveSchedulerJobsFromSchedulerJobGroup)



##### API请求

 URLs

```
DELETE zstack/v1/scheduler/jobgroups/{schedulerJobGroupUuid}/job/{schedulerJobUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/scheduler/jobgroups/fa287a3654d330658db1863b8a41a660/job/[24634a04cc45397cb0298258a47ad650]
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| schedulerJobGroupUuid | String | url | 定时任务组UUID |  | 3.4.0 |
| schedulerJobUuids | List | url | 定时任务i列表 |  | 3.4.0 |
| systemTags (可选) | List | body | 系统标签列表 |  | 3.4.0 |
| userTags (可选) | List | body | 用户标签列表 |  | 3.4.0 |



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
RemoveSchedulerJobsFromSchedulerJobGroupAction action = new RemoveSchedulerJobsFromSchedulerJobGroupAction();
action.schedulerJobGroupUuid = "fa287a3654d330658db1863b8a41a660";
action.schedulerJobUuids = asList("24634a04cc45397cb0298258a47ad650");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RemoveSchedulerJobsFromSchedulerJobGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveSchedulerJobsFromSchedulerJobGroupAction action = RemoveSchedulerJobsFromSchedulerJobGroupAction()
action.schedulerJobGroupUuid = "fa287a3654d330658db1863b8a41a660"
action.schedulerJobUuids = [24634a04cc45397cb0298258a47ad650]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RemoveSchedulerJobsFromSchedulerJobGroupAction.Result res = action.call()
```

---

#### 查询定时任务记录(QuerySchedulerJobHistory)



##### API请求

 URLs

```
GET zstack/v1/scheduler/job/history
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scheduler/job/history?q=schedulerJobGroupUuid=7ae6456c0b01324dae6d4bef358a5772
```



可查询字段

运行CLI命令行工具，输入QuerySchedulerJobHistory并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "triggerUuid": "add8c5eea85f41999baff295e47567bc",
      "schedulerJobUuid": "d7696913343040d8b98de04d59727711",
      "startTime": "Nov 14, 2017 10:20:57 PM",
      "executeTime": 900.0,
      "targetResourceUuid": "7cd923fa779044fd8510e8ee97aa579e",
      "requestDump": "{\"bsUuid\":\"716078c20a0047a69102174c6097a690\"}",
      "resultDump": "{\"apiId\":\"f8cf5b6281164e519c0575a73b1b0d9c\",\"success\":true,\"headers\":{},\"id\":\"d70a61ab1b20407c8df94ba7d90be081\",\"createdTime\":1557305707668}",
      "success": true
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.5.0 |
| inventories | List | 详情参考[inventories] | 3.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.5.0 |
| description | String | 错误的概要描述 | 3.5.0 |
| details | String | 错误的详细信息 | 3.5.0 |
| elaboration | String | 保留字段，默认为null | 3.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long |  | 3.5.0 |
| triggerUuid | String | 定时器UUID | 3.5.0 |
| schedulerJobUuid | String | 定时任务UUID | 3.5.0 |
| schedulerJobGroupUuid | String | 定时任务组UUID | 3.5.0 |
| startTime | Timestamp | 开始时间 | 3.5.0 |
| executeTime | long | 执行时长 | 3.5.0 |
| targetResourceUuid | String | 目标资源UUID | 3.5.0 |
| requestDump | String | 任务请求 | 3.5.0 |
| resultDump | String | 任务结果 | 3.5.0 |
| success | boolean |  | 3.5.0 |



##### SDK示例

 Java SDK

```
QuerySchedulerJobHistoryAction action = new QuerySchedulerJobHistoryAction();
action.conditions = asList("schedulerJobGroupUuid=7ae6456c0b01324dae6d4bef358a5772");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QuerySchedulerJobHistoryAction.Result res = action.call();
```

 Python SDK

```
QuerySchedulerJobHistoryAction action = QuerySchedulerJobHistoryAction()
action.conditions = ["schedulerJobGroupUuid=7ae6456c0b01324dae6d4bef358a5772"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QuerySchedulerJobHistoryAction.Result res = action.call()
```

---

#### 获取定时任务执行报告(GetSchedulerExecutionReport)



##### API请求

 URLs

```
GET zstack/v1/scheduler/report
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/scheduler/report?startTime=1.5856704E12&intervalTimeUnit=Month&range=4.0&schedulerJobTypes=vmBackup
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| startTime | long | query | 报告开始时间 |  | 3.9.0 |
| intervalTimeUnit | String | query | 间隔时间单位 | Hour Month | 3.9.0 |
| range | int | query | 报告时间范围 |  | 3.9.0 |
| schedulerJobTypes | List | query | 定时任务类型 |  | 3.9.0 |
| systemTags (可选) | List | query |  |  | 3.9.0 |
| userTags (可选) | List | query |  |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "successRecords": [
    100.0,
    99.0,
    50.0,
    0.0
  ],
  "failureRecords": [
    0.0,
    1.0,
    34.0,
    0.0
  ],
  "partialSuccessRecords": [
    0.0,
    0.0,
    16.0,
    0.0
  ],
  "waitingRecords": [
    0.0,
    0.0,
    0.0,
    100.0
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| successRecords | List | 成功记录 | 3.9.0 |
| failureRecords | List | 失败记录 | 3.9.0 |
| partialSuccessRecords | List | 部分成功记录 | 3.9.0 |
| waitingRecords | List | 等待执行完成记录 | 3.9.0 |
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
GetSchedulerExecutionReportAction action = new GetSchedulerExecutionReportAction();
action.startTime = 1.5856704E12;
action.intervalTimeUnit = "Month";
action.range = 4.0;
action.schedulerJobTypes = asList("vmBackup");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetSchedulerExecutionReportAction.Result res = action.call();
```

 Python SDK

```
GetSchedulerExecutionReportAction action = GetSchedulerExecutionReportAction()
action.startTime = 1.5856704E12
action.intervalTimeUnit = "Month"
action.range = 4.0
action.schedulerJobTypes = [vmBackup]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetSchedulerExecutionReportAction.Result res = action.call()
```

---

### CBT相关接口

---

#### 创建CBT任务(CreateCbtTask)



##### API请求

 URLs

```
POST zstack/v1/cbt-task/create
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "My CDP Task",
    "vmInstanceUuid": "89878e17496030ba9c062cbb18924335"
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
-X POST -d '{"params":{"name":"My CDP Task","vmInstanceUuid":"89878e17496030ba9c062cbb18924335"}}' http://localhost:8080/zstack/v1/cbt-task/create
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 5.3.28 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 5.3.28 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 5.3.28 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "b70f4160919c38748f908f489ba306ce",
    "name": "My Task",
    "status": "Created"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventory | CbtTaskInventory | 详情参考[inventory] | 5.3.28 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.28 |
| description | String | 错误的概要描述 | 5.3.28 |
| details | String | 错误的详细信息 | 5.3.28 |
| elaboration | String | 保留字段，默认为null | 5.3.28 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.28 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.28 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| status | CbtTaskStatus | 详情参考[status] | 5.3.28 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CbtTaskStatus | 已创建 | 5.3.28 |
| Starting | CbtTaskStatus | 启动中 | 5.3.28 |
| Running | CbtTaskStatus | 运行中 | 5.3.28 |
| Stopped | CbtTaskStatus | 停止 | 5.3.28 |
| Failed | CbtTaskStatus | 失败 | 5.3.28 |



##### SDK示例

 Java SDK

```
CreateCbtTaskAction action = new CreateCbtTaskAction();
action.name = "My CDP Task";
action.vmInstanceUuid = "89878e17496030ba9c062cbb18924335";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateCbtTaskAction.Result res = action.call();
```

 Python SDK

```
CreateCbtTaskAction action = CreateCbtTaskAction()
action.name = "My CDP Task"
action.vmInstanceUuid = "89878e17496030ba9c062cbb18924335"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateCbtTaskAction.Result res = action.call()
```

---

#### 删除CBT任务(DeleteCbtTask)



##### API请求

 URLs

```
DELETE zstack/v1/cbt-task/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/cbt-task/7017b8d5bef63877a528a5f56517c829
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.28 |
| force (可选) | boolean | body |  |  | 5.3.28 |
| deleteMode (可选) | String | body | 删除模式(Permissive / Enforcing，Permissive) |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



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
DeleteCbtTaskAction action = new DeleteCbtTaskAction();
action.uuid = "7017b8d5bef63877a528a5f56517c829";
action.force = false;
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteCbtTaskAction.Result res = action.call();
```

 Python SDK

```
DeleteCbtTaskAction action = DeleteCbtTaskAction()
action.uuid = "7017b8d5bef63877a528a5f56517c829"
action.force = false
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteCbtTaskAction.Result res = action.call()
```

---

#### 查询CBT任务(QueryCbtTask)



##### API请求

 URLs

```
GET zstack/v1/cbt-task
```


```
GET zstack/v1/cbt-task/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cbt-task?q=uuid=d6c3daab1c9b3274b5fc4088bd3e51ad
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cbt-task/cf426711ed6538069d2d4d6d34d5e60a
```



可查询字段

运行**zstack-cli**命令行工具，输入**QueryCbtTask**并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "103f6f8dc6dc3f8b82c1e1923dc751e0",
      "name": "My Task",
      "status": "Running"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventories | List | 详情参考[inventories] | 5.3.28 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.28 |
| description | String | 错误的概要描述 | 5.3.28 |
| details | String | 错误的详细信息 | 5.3.28 |
| elaboration | String | 保留字段，默认为null | 5.3.28 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.28 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.28 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| status | CbtTaskStatus | 详情参考[status] | 5.3.28 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CbtTaskStatus | 已创建 | 5.3.28 |
| Starting | CbtTaskStatus | 启动中 | 5.3.28 |
| Running | CbtTaskStatus | 运行中 | 5.3.28 |
| Stopped | CbtTaskStatus | 停止 | 5.3.28 |
| Failed | CbtTaskStatus | 失败 | 5.3.28 |



##### SDK示例

 Java SDK

```
QueryCbtTaskAction action = new QueryCbtTaskAction();
action.conditions = asList("uuid=bd8fa811d9c234ceada09446fa085967");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryCbtTaskAction.Result res = action.call();
```

 Python SDK

```
QueryCbtTaskAction action = QueryCbtTaskAction()
action.conditions = ["uuid=0449908917ce338bba71c107848b7c5c"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryCbtTaskAction.Result res = action.call()
```

---

#### 启动CBT任务(EnableCbtTask)



##### API请求

 URLs

```
POST zstack/v1/cbt-task/enable/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "bitmapName": ""
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
-X POST -d '{"params":{"bitmapName":""}}' http://localhost:8080/zstack/v1/cbt-task/enable/adced083701e39869540ee2af82da0da
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.28 |
| bitmapName (可选) | String | body(包含在**params**结构中) |  |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



##### API返回

 返回示例

```
{
  "volumeCbtBackupInfos": [
    {}
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| inventory | CbtTaskInventory | 详情参考[inventory] | 5.3.28 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.28 |
| description | String | 错误的概要描述 | 5.3.28 |
| details | String | 错误的详细信息 | 5.3.28 |
| elaboration | String | 保留字段，默认为null | 5.3.28 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.28 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.28 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| status | CbtTaskStatus | 详情参考[status] | 5.3.28 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CbtTaskStatus | 已创建 | 5.3.28 |
| Starting | CbtTaskStatus | 启动中 | 5.3.28 |
| Running | CbtTaskStatus | 运行中 | 5.3.28 |
| Stopped | CbtTaskStatus | 停止 | 5.3.28 |
| Failed | CbtTaskStatus | 失败 | 5.3.28 |



##### SDK示例

 Java SDK

```
EnableCbtTaskAction action = new EnableCbtTaskAction();
action.uuid = "adced083701e39869540ee2af82da0da";
action.bitmapName = "";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
EnableCbtTaskAction.Result res = action.call();
```

 Python SDK

```
EnableCbtTaskAction action = EnableCbtTaskAction()
action.uuid = "adced083701e39869540ee2af82da0da"
action.bitmapName = ""
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
EnableCbtTaskAction.Result res = action.call()
```

---

#### 停止CBT任务(DisableCbtTask)



##### API请求

 URLs

```
POST zstack/v1/cbt-task/disable/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "force": false
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
-X POST -d '{"params":{"force":false}}' http://localhost:8080/zstack/v1/cbt-task/disable/5a86262807b4363e95f2e57d2970d189
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 5.3.28 |
| force (可选) | boolean | body(包含在**params**结构中) | 是否强制 |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5ca9c15a50c53f0dac359a64841d7b2b",
    "name": "My Task",
    "status": "Stopped"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 5.3.28 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.3.28 |
| CBT任务的详细信息 | CbtTaskInventory | 详情参考[CBT任务的详细信息] | 5.3.28 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.3.28 |
| description | String | 错误的概要描述 | 5.3.28 |
| details | String | 错误的详细信息 | 5.3.28 |
| elaboration | String | 保留字段，默认为null | 5.3.28 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.3.28 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.3.28 |

 #CBT任务的详细信息

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 5.3.28 |
| name | String | 资源名称 | 5.3.28 |
| description | String | 资源的详细描述 | 5.3.28 |
| createDate | Timestamp | 创建时间 | 5.3.28 |
| lastOpDate | Timestamp | 最后一次修改时间 | 5.3.28 |
| status | CbtTaskStatus | 详情参考[status] | 5.3.28 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CbtTaskStatus | 已创建 | 5.3.28 |
| Starting | CbtTaskStatus | 启动中 | 5.3.28 |
| Running | CbtTaskStatus | 运行中 | 5.3.28 |
| Stopped | CbtTaskStatus | 停止 | 5.3.28 |
| Failed | CbtTaskStatus | 失败 | 5.3.28 |



##### SDK示例

 Java SDK

```
DisableCbtTaskAction action = new DisableCbtTaskAction();
action.uuid = "5a86262807b4363e95f2e57d2970d189";
action.force = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DisableCbtTaskAction.Result res = action.call();
```

 Python SDK

```
DisableCbtTaskAction action = DisableCbtTaskAction()
action.uuid = "5a86262807b4363e95f2e57d2970d189"
action.force = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DisableCbtTaskAction.Result res = action.call()
```

---

#### 暴露云盘为NBD设备(ExportNbdVolumes)



##### API请求

 URLs

```
POST zstack/v1/cbt-task/exportvolume
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "volumeUuids": [
      "8d7de4e1c3b73fc49772b0fef78b0fc7"
    ],
    "vmInstanceUuid": "7d8c1dec326c3230be08d3c82fb7a476",
    "force": false
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
-X POST -d '{"params":{"volumeUuids":["8d7de4e1c3b73fc49772b0fef78b0fc7"],"vmInstanceUuid":"7d8c1dec326c3230be08d3c82fb7a476","force":false}}' http://localhost:8080/zstack/v1/cbt-task/exportvolume
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuids | List | body(包含在**params**结构中) | 云盘UUID列表 |  | 5.3.28 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |
| force (可选) | boolean | body(包含在**params**结构中) | 强制 |  | 5.3.28 |



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
ExportNbdVolumesAction action = new ExportNbdVolumesAction();
action.volumeUuids = asList("8d7de4e1c3b73fc49772b0fef78b0fc7");
action.vmInstanceUuid = "7d8c1dec326c3230be08d3c82fb7a476";
action.force = false;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ExportNbdVolumesAction.Result res = action.call();
```

 Python SDK

```
ExportNbdVolumesAction action = ExportNbdVolumesAction()
action.volumeUuids = [8d7de4e1c3b73fc49772b0fef78b0fc7]
action.vmInstanceUuid = "7d8c1dec326c3230be08d3c82fb7a476"
action.force = false
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ExportNbdVolumesAction.Result res = action.call()
```

---

#### 停止暴露云盘为NBD设备(UnexportNbdVolumes)



##### API请求

 URLs

```
POST zstack/v1/cbt-task/unexportvolume
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "volumeUuids": [
      "82eaf8972ece3e228b6f75f61f8749d9"
    ],
    "vmInstanceUuid": "6456713db34a3d7e96c7e132179c413d"
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
-X POST -d '{"params":{"volumeUuids":["82eaf8972ece3e228b6f75f61f8749d9"],"vmInstanceUuid":"6456713db34a3d7e96c7e132179c413d"}}' http://localhost:8080/zstack/v1/cbt-task/unexportvolume
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| volumeUuids | List | body(包含在**params**结构中) | 云盘UUID列表 |  | 5.3.28 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 5.3.28 |
| systemTags (可选) | List | body | 系统标签 |  | 5.3.28 |
| userTags (可选) | List | body | 用户标签 |  | 5.3.28 |



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
UnexportNbdVolumesAction action = new UnexportNbdVolumesAction();
action.volumeUuids = asList("82eaf8972ece3e228b6f75f61f8749d9");
action.vmInstanceUuid = "6456713db34a3d7e96c7e132179c413d";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UnexportNbdVolumesAction.Result res = action.call();
```

 Python SDK

```
UnexportNbdVolumesAction action = UnexportNbdVolumesAction()
action.volumeUuids = [82eaf8972ece3e228b6f75f61f8749d9]
action.vmInstanceUuid = "6456713db34a3d7e96c7e132179c413d"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UnexportNbdVolumesAction.Result res = action.call()
```

---

### 持续数据保护(CDP)



持续数据保护（CDP）服务以单独的功能模块形式提供，需提前购买持续数据保护（CDP）模块许可证，且需在购买云平台许可证基础上使用，不可单独使用。

---

#### 持续数据保护(CDP)相关接口

---

#### 创建CDP策略(CreateCdpPolicy)



##### API请求

 URLs

```
POST zstack/v1/cdp-backup-storage/policy
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "MyCdpPolicyName",
    "description": "MyCdpDescription",
    "hourlyRpSinceDay": 3.0,
    "dailyRpSinceDay": 7.0,
    "expireTimeInDay": 30.0,
    "fullBackupIntervalInDay": 2.0,
    "recoveryPointPerSecond": 5.0
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
-X POST -d '{"params":{"name":"MyCdpPolicyName","description":"MyCdpDescription","hourlyRpSinceDay":3.0,"dailyRpSinceDay":7.0,"expireTimeInDay":30.0,"fullBackupIntervalInDay":2.0,"recoveryPointPerSecond":5.0}}' http://localhost:8080/zstack/v1/cdp-backup-storage/policy
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| retentionTimePerDay | Integer | body(包含在**params**结构中) | 恢复点保留时间 |  | 4.5.0 |
| recoveryPointPerSecond | Integer | body(包含在**params**结构中) | 恢复点间隔时间 |  | 4.5.0 |
| hourlyRpSinceDay | Integer | body(包含在**params**结构中) | 从哪天开始保留每小时一个恢复点 |  | 4.5.0 |
| dailyRpSinceDay | Integer | body(包含在**params**结构中) | 从哪天开始保留每天一个恢复点 |  | 4.5.0 |
| expireTimeInDay | Integer | body(包含在**params**结构中) | 备份数据有效时间 |  | 4.5.0 |
| fullBackupIntervalInDay | Integer | body(包含在**params**结构中) | 全量备份时间间隔 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.5.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "MyCdpPolicyName",
    "description": "MyCdpDescription",
    "retentionTimePerDay": 7.0,
    "recoveryPointPerSecond": 5.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | CdpPolicyInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| retentionTimePerDay | Integer | 恢复点保留时间 | 4.5.0 |
| recoveryPointPerSecond | Integer | 恢复点间隔时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| state | CdpPolicyState | 详情参考[state] | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpPolicyState | 启用 | 4.5.0 |
| Disabled | CdpPolicyState | 停用 | 4.5.0 |



##### SDK示例

 Java SDK

```
CreateCdpPolicyAction action = new CreateCdpPolicyAction();
action.name = "MyCdpPolicyName";
action.description = "MyCdpDescription";
action.hourlyRpSinceDay = 3.0;
action.dailyRpSinceDay = 7.0;
action.expireTimeInDay = 30.0;
action.fullBackupIntervalInDay = 2.0;
action.recoveryPointPerSecond = 5.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateCdpPolicyAction.Result res = action.call();
```

 Python SDK

```
CreateCdpPolicyAction action = CreateCdpPolicyAction()
action.name = "MyCdpPolicyName"
action.description = "MyCdpDescription"
action.hourlyRpSinceDay = 3.0
action.dailyRpSinceDay = 7.0
action.expireTimeInDay = 30.0
action.fullBackupIntervalInDay = 2.0
action.recoveryPointPerSecond = 5.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateCdpPolicyAction.Result res = action.call()
```

---

#### 删除CDP策略(DeleteCdpPolicy)



##### API请求

 URLs

```
DELETE zstack/v1/cdp-backup-storage/policy/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/cdp-backup-storage/policy/6429f8a631993740b1c96e24bb64eca6
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing Permissive | 4.5.0 |
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
DeleteCdpPolicyAction action = new DeleteCdpPolicyAction();
action.uuid = "6429f8a631993740b1c96e24bb64eca6";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteCdpPolicyAction.Result res = action.call();
```

 Python SDK

```
DeleteCdpPolicyAction action = DeleteCdpPolicyAction()
action.uuid = "6429f8a631993740b1c96e24bb64eca6"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteCdpPolicyAction.Result res = action.call()
```

---

#### 查询CDP策略(QueryCdpPolicy)



##### API请求

 URLs

```
GET zstack/v1/cdp-backup-storage/policy
GET zstack/v1/cdp-backup-storage/policy/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cdp-backup-storage/policy?q=uuid=c58c597901553c81bc469ebdc0324340
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cdp-backup-storage/policy/3cb711db1fbc3d80954ff45590fe11fc
```



可查询字段

运行CLI命令行工具，输入QueryCdpPolicy并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "name": "MyCdpPolicyName",
      "description": "MyCdpDescription",
      "retentionTimePerDay": 7.0,
      "recoveryPointPerSecond": 5.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。详情参考[error] | 4.5.0 |
| inventories | List | 详情参考[inventories] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | CDP策略的UUID，唯一标示该CDP策略 | 4.5.0 |
| name | String | CDP策略名称 | 4.5.0 |
| description | String | CDP策略的详细描述 | 4.5.0 |
| retentionTimePerDay | Integer | 恢复点保留时间 | 4.5.0 |
| recoveryPointPerSecond | Integer | 恢复点间隔时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| state | CdpPolicyState | 详情参考[state] | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpPolicyState | 启用 | 4.5.0 |
| Disabled | CdpPolicyState | 停用 | 4.5.0 |



##### SDK示例

 Java SDK

```
QueryCdpPolicyAction action = new QueryCdpPolicyAction();
action.conditions = asList("uuid=1cd7a1588ee73b4bb4ced0524e397b5e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryCdpPolicyAction.Result res = action.call();
```

 Python SDK

```
QueryCdpPolicyAction action = QueryCdpPolicyAction()
action.conditions = ["uuid=e7b6b0ad3c903889b3de90408450120a"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryCdpPolicyAction.Result res = action.call()
```

---

#### 更新CDP策略(UpdateCdpPolicy)



##### API请求

 URLs

```
PUT zstack/v1/cdp-backup-storage/policy/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateCdpPolicy": {
    "name": "MyCdpPolicyName",
    "description": "MyCdpDescription",
    "retentionTimePerDay": 7.0,
    "hourlyRpSinceDay": 3.0,
    "dailyRpSinceDay": 7.0,
    "expireTimeInDay": 30.0,
    "fullBackupIntervalInDay": 2.0,
    "recoveryPointPerSecond": 5.0
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
-X PUT -d '{"updateCdpPolicy":{"name":"MyCdpPolicyName","description":"MyCdpDescription","retentionTimePerDay":7.0,"recoveryPointPerSecond":5.0}}' http://localhost:8080/zstack/v1/cdp-backup-storage/policy/e8e4ea26310e31fc9ee73329ebd5f180/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| retentionTimePerDay (可选) | Integer | body(包含在**params**结构中) | 恢复点保留时间 |  | 4.5.0 |
| recoveryPointPerSecond (可选) | Integer | body(包含在**params**结构中) | 恢复点间隔时间 |  | 4.5.0 |
| hourlyRpSinceDay | Integer | body(包含在**params**结构中) | 从哪天开始保留每小时一个恢复点 |  | 4.5.0 |
| dailyRpSinceDay | Integer | body(包含在**params**结构中) | 从哪天开始保留每天一个恢复点 |  | 4.5.0 |
| expireTimeInDay | Integer | body(包含在**params**结构中) | 备份数据有效时间 |  | 4.5.0 |
| fullBackupIntervalInDay | Integer | body(包含在**params**结构中) | 全量备份时间间隔 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.5.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "name": "MyCdpPolicyName",
    "description": "MyCdpDescription",
    "retentionTimePerDay": 7.0,
    "recoveryPointPerSecond": 5.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | CdpPolicyInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| retentionTimePerDay | Integer | 恢复点保留时间 | 4.5.0 |
| recoveryPointPerSecond | Integer | 恢复点间隔时间 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| backupStorageRefs | List | 详情参考[state] | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpPolicyState | 启用 | 4.5.0 |
| Disabled | CdpPolicyState | 停用 | 4.5.0 |



##### SDK示例

 Java SDK

```
UpdateCdpPolicyAction action = new UpdateCdpPolicyAction();
action.uuid = "e8e4ea26310e31fc9ee73329ebd5f180";
action.name = "MyCdpPolicyName";
action.description = "MyCdpDescription";
action.retentionTimePerDay = 7.0;
action.recoveryPointPerSecond = 5.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateCdpPolicyAction.Result res = action.call();
```

 Python SDK

```
UpdateCdpPolicyAction action = UpdateCdpPolicyAction()
action.uuid = "e8e4ea26310e31fc9ee73329ebd5f180"
action.name = "MyCdpPolicyName"
action.description = "MyCdpDescription"
action.retentionTimePerDay = 7.0
action.recoveryPointPerSecond = 5.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateCdpPolicyAction.Result res = action.call()
```

---

#### 创建CDP任务(CreateCdpTask)



##### API请求

 URLs

```
POST zstack/v1/cdp-backup-storage/task
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "My CDP Task",
    "taskType": "VM",
    "policyUuid": "0a96fd4b7556333f858842dc1c2a8172",
    "backupStorageUuid": "56e28fa35b7c381e8b62315b9de20bb4",
    "resourceUuids": [
      "672119ce84b137d58a70885c7e9f6218"
    ],
    "backupBandwidth": 1.048576E8,
    "maxCapacity": 1.073741824E11,
    "maxLatency": 1.073741824E11
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
-X POST -d '{"params":{"name":"My CDP Task","taskType":"VM","policyUuid":"0a96fd4b7556333f858842dc1c2a8172","backupStorageUuid":"56e28fa35b7c381e8b62315b9de20bb4","resourceUuids":["672119ce84b137d58a70885c7e9f6218"],"backupBandwidth":1.048576E8,"maxCapacity":1.073741824E11,"maxLatency":1.073741824E11}}' http://localhost:8080/zstack/v1/cdp-backup-storage/task
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| taskType | String | body(包含在**params**结构中) | CDP任务类型 |  | 4.5.0 |
| policyUuid | String | body(包含在**params**结构中) | 权限策略UUID |  | 4.5.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 4.5.0 |
| resourceUuids | List | body(包含在**params**结构中) | 备份资源列表 |  | 4.5.0 |
| backupBandwidth (可选) | long | body(包含在**params**结构中) | 单个云盘备份速率 |  | 4.5.0 |
| maxCapacity (可选) | long | body(包含在**params**结构中) | CDP任务规划容量 |  | 4.5.0 |
| maxLatency (可选) | long | body(包含在**params**结构中) | CDP任务RPO最大偏移量 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.5.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "613a2bba58f03c4ba98ec089674cefaa",
    "name": "My Task",
    "policyUuid": "ba5ccc11257b396089abd5f00e9bac50",
    "backupStorageUuid": "64a1daa72c9d3f578646517ba22e8988",
    "status": "Created",
    "state": "Enabled",
    "taskType": "VM",
    "backupBandwidth": 1.048576E8,
    "maxCapacity": 1.073741824E11,
    "usedCapacity": 0.0,
    "maxLatency": 1.048576E8,
    "currentLatency": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | CdpTaskInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| policyUuid | String | 权限策略UUID | 4.5.0 |
| backupStorageUuid | String | 镜像存储UUID | 4.5.0 |
| backupBandwidth | long | 单个云盘备份速率 | 4.5.0 |
| maxCapacity | long | CDP任务规划容量 | 4.5.0 |
| usedCapacity | long | CDP已用容量 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| status | CdpTaskStatus | 详情参考[status] | 4.5.0 |
| state | CdpTaskState | 详情参考[state] | 4.5.0 |
| taskType | CdpTaskType | 详情参考[taskType] | 4.5.0 |
| resourceRefs | List | 详情参考[resourceRefs] | 4.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CdpTaskStatus | 创建 | 4.5.0 |
| Starting | CdpTaskStatus | 启动中 | 4.5.0 |
| Running | CdpTaskStatus | 运作中 | 4.5.0 |
| Stopped | CdpTaskStatus | 停止 | 4.5.0 |
| Unknown | CdpTaskStatus | 未知 | 4.5.0 |
| Failed | CdpTaskStatus | 失败 | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpTaskState | 启用 | 4.5.0 |
| Disabled | CdpTaskState | 停止 | 4.5.0 |

 #taskType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| VM | CdpTaskType | 云主机 | 4.5.0 |

 #resourceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| taskUuid | String | CDP任务UUID | 4.5.0 |
| resourceUuid | String | 资源UUID | 4.5.0 |
| resourceType | String | 任务资源清单 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
CreateCdpTaskAction action = new CreateCdpTaskAction();
action.name = "My CDP Task";
action.taskType = "VM";
action.policyUuid = "0a96fd4b7556333f858842dc1c2a8172";
action.backupStorageUuid = "56e28fa35b7c381e8b62315b9de20bb4";
action.resourceUuids = asList("672119ce84b137d58a70885c7e9f6218");
action.backupBandwidth = 1.048576E8;
action.maxCapacity = 1.073741824E11;
action.maxLatency = 1.073741824E11;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateCdpTaskAction.Result res = action.call();
```

 Python SDK

```
CreateCdpTaskAction action = CreateCdpTaskAction()
action.name = "My CDP Task"
action.taskType = "VM"
action.policyUuid = "0a96fd4b7556333f858842dc1c2a8172"
action.backupStorageUuid = "56e28fa35b7c381e8b62315b9de20bb4"
action.resourceUuids = [672119ce84b137d58a70885c7e9f6218]
action.backupBandwidth = 1.048576E8
action.maxCapacity = 1.073741824E11
action.maxLatency = 1.073741824E11
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateCdpTaskAction.Result res = action.call()
```

---

#### 删除CDP任务(DeleteCdpTask)



##### API请求

 URLs

```
DELETE zstack/v1/cdp-task/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/cdp-task/1b6124362d023f0fb13f20923e2075d7
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| deleteMode (可选) | String | body | 删除模式 | Permissive Enforcing Permissive | 4.5.0 |
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
DeleteCdpTaskAction action = new DeleteCdpTaskAction();
action.uuid = "1b6124362d023f0fb13f20923e2075d7";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteCdpTaskAction.Result res = action.call();
```

 Python SDK

```
DeleteCdpTaskAction action = DeleteCdpTaskAction()
action.uuid = "1b6124362d023f0fb13f20923e2075d7"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteCdpTaskAction.Result res = action.call()
```

---

#### 查询CDP任务(QueryCdpTask)



##### API请求

 URLs

```
GET zstack/v1/cdp-task
GET zstack/v1/cdp-task/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cdp-task?q=uuid=ba57edb98e983115804b74bc47e968e1
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cdp-task/8249deb879fa303b841560bf3cbd5113
```



可查询字段

运行CLI命令行工具，输入QueryCdpTask并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "cfcb3c865b2e363f96ec43615c9862d6",
      "name": "My Task",
      "policyUuid": "aa3ff8d5586b39c18b330f2b118e6936",
      "backupStorageUuid": "2ff526012ceb362ebfa903ba69d7a53a",
      "status": "Running",
      "state": "Enabled",
      "taskType": "VM",
      "backupBandwidth": 1.048576E8,
      "maxCapacity": 1.073741824E11,
      "usedCapacity": 2.395916E7
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventories | List | 详情参考[inventories] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| policyUuid | String | 权限策略UUID | 4.5.0 |
| backupStorageUuid | String | 镜像存储UUID | 4.5.0 |
| backupBandwidth | long | 单个云盘备份速率 | 4.5.0 |
| maxCapacity | long | CDP任务规划容量 | 4.5.0 |
| usedCapacity | long | CDP已用容量 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 定时任务组的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 定时任务组名称 | 4.5.0 |
| description | String | 定时任务组的详细描述 | 4.5.0 |
| state | String | 定时任务组的状态 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| jobData | String | 任务参数 | 4.5.0 |
| triggersUuid | List | 触发器UUID | 4.5.0 |
| status | CdpTaskStatus | 详情参考[status] | 4.5.0 |
| state | CdpTaskState | 详情参考[state] | 4.5.0 |
| taskType | CdpTaskType | 详情参考[taskType] | 4.5.0 |
| resourceRefs | List | 详情参考[resourceRefs] | 4.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CdpTaskStatus | 创建 | 4.5.0 |
| Starting | CdpTaskStatus | 启动中 | 4.5.0 |
| Running | CdpTaskStatus | 运作中 | 4.5.0 |
| Stopped | CdpTaskStatus | 停止 | 4.5.0 |
| Unknown | CdpTaskStatus | 未知 | 4.5.0 |
| Failed | CdpTaskStatus | 失败 | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpTaskState | 启用 | 4.5.0 |
| Disabled | CdpTaskState | 停止 | 4.5.0 |

 #taskType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| VM | CdpTaskType | 云主机 | 4.5.0 |

 #resourceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| taskUuid | String | CDP任务UUID | 4.5.0 |
| resourceUuid | String | 资源UUID | 4.5.0 |
| resourceType | String | 任务资源清单 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
QueryCdpTaskAction action = new QueryCdpTaskAction();
action.conditions = asList("uuid=b3096918b9c63955a8511653e969b911");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryCdpTaskAction.Result res = action.call();
```

 Python SDK

```
QueryCdpTaskAction action = QueryCdpTaskAction()
action.conditions = ["uuid=6c898e4b47b93d85addd6856b0ccce67"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryCdpTaskAction.Result res = action.call()
```

---

#### 更新CDP任务(UpdateCdpTask)



##### API请求

 URLs

```
PUT zstack/v1/cdp-backup-storage/task/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateCdpTask": {
    "name": "My CDP Task",
    "backupBandwidth": 1.048576E8,
    "maxCapacity": 1.073741824E11,
    "maxLatency": 0.0
  },
  "systemTags": [],
  "userTags": []
}
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateCdpTask":{"name":"My CDP Task","backupBandwidth":1.048576E8,"maxCapacity":1.073741824E11,"maxLatency":0.0}}' http://localhost:8080/zstack/v1/cdp-backup-storage/task/aa0c3f89827f3317ac7e1a9b39c6278e/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.3.6 |
| name (可选) | String | body(包含在**params**结构中) | 资源名称 |  | 4.3.6 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.3.6 |
| backupBandwidth (可选) | long | body(包含在**params**结构中) | 单个云盘备份速率 |  | 4.3.6 |
| maxCapacity (可选) | long | body(包含在**params**结构中) | CDP任务规划容量 |  | 4.3.6 |
| maxLatency (可选) | long | body(包含在**params**结构中) | CDP任务RPO最大偏移量 |  | 4.4.24 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.3.6 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.3.6 |
| systemTags (可选) | List | body | 系统标签 |  | 4.3.6 |
| userTags (可选) | List | body | 用户标签 |  | 4.3.6 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "2680ec1b4d0c3b69bc4c7a1813a8b3d0",
    "name": "My Task",
    "policyUuid": "aef28d43ccec3118bb597c237aa243ae",
    "backupStorageUuid": "06f62c4b65b237ee854dbcdf01798188",
    "status": "Created",
    "state": "Enabled",
    "taskType": "VM",
    "backupBandwidth": 1.048576E8,
    "maxCapacity": 1.073741824E11,
    "usedCapacity": 0.0,
    "maxLatency": 0.0,
    "currentLatency": 0.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | CdpTaskInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| policyUuid | String | 权限策略UUID | 4.5.0 |
| backupStorageUuid | String | 镜像存储UUID | 4.5.0 |
| backupBandwidth | long | 单个云盘备份速率 | 4.5.0 |
| maxCapacity | long | CDP任务规划容量 | 4.5.0 |
| usedCapacity | long | CDP已用容量 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| status | CdpTaskStatus | 详情参考[status] | 4.5.0 |
| state | CdpTaskState | 详情参考[state] | 4.5.0 |
| taskType | CdpTaskType | 详情参考[taskType] | 4.5.0 |
| resourceRefs | List | 详情参考[resourceRefs] | 4.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CdpTaskStatus | 创建 | 4.5.0 |
| Starting | CdpTaskStatus | 启动中 | 4.5.0 |
| Running | CdpTaskStatus | 运作中 | 4.5.0 |
| Stopped | CdpTaskStatus | 停止 | 4.5.0 |
| Unknown | CdpTaskStatus | 未知 | 4.5.0 |
| Failed | CdpTaskStatus | 失败 | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpTaskState | 启用 | 4.5.0 |
| Disabled | CdpTaskState | 停止 | 4.5.0 |

 #taskType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| VM | CdpTaskType | 云主机 | 4.5.0 |

 #resourceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| taskUuid | String | CDP任务UUID | 4.5.0 |
| resourceUuid | String | 资源UUID | 4.5.0 |
| resourceType | String | 任务资源清单 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
UpdateCdpTaskAction action = new UpdateCdpTaskAction();
action.uuid = "aa0c3f89827f3317ac7e1a9b39c6278e";
action.name = "My CDP Task";
action.backupBandwidth = 1.048576E8;
action.maxCapacity = 1.073741824E11;
action.maxLatency = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateCdpTaskAction.Result res = action.call();
```

 Python SDK

```
UpdateCdpTaskAction action = UpdateCdpTaskAction()
action.uuid = "aa0c3f89827f3317ac7e1a9b39c6278e"
action.name = "My CDP Task"
action.backupBandwidth = 1.048576E8
action.maxCapacity = 1.073741824E11
action.maxLatency = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateCdpTaskAction.Result res = action.call()
```

---

#### 开启CDP任务(EnableCdpTask)



##### API请求

 URLs

```
POST zstack/v1/cdp-task/enable/{uuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/cdp-task/enable/579496f57aaf3450974972479474879e
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "0945746644d9379faddf2ac0b70147ba",
    "name": "My Task",
    "policyUuid": "1fdbac28c4f737db9d0579ae8859e57b",
    "backupStorageUuid": "cfb2e97be9ab320594ee46d3946c356e",
    "status": "Running",
    "state": "Enabled",
    "taskType": "VM",
    "backupBandwidth": 1.048576E8,
    "maxCapacity": 1.073741824E11,
    "usedCapacity": 2.395916E7
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | CdpTaskInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| policyUuid | String | 权限策略UUID | 4.5.0 |
| backupStorageUuid | String | 镜像存储UUID | 4.5.0 |
| backupBandwidth | long | 单个云盘备份速率 | 4.5.0 |
| maxCapacity | long | CDP任务规划容量 | 4.5.0 |
| usedCapacity | long | CDP已用容量 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| status | CdpTaskStatus | 详情参考[status] | 4.5.0 |
| state | CdpTaskState | 详情参考[state] | 4.5.0 |
| taskType | CdpTaskType | 详情参考[taskType] | 4.5.0 |
| resourceRefs | List | 详情参考[resourceRefs] | 4.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CdpTaskStatus | 创建 | 4.5.0 |
| Starting | CdpTaskStatus | 启动中 | 4.5.0 |
| Running | CdpTaskStatus | 运作中 | 4.5.0 |
| Stopped | CdpTaskStatus | 停止 | 4.5.0 |
| Unknown | CdpTaskStatus | 未知 | 4.5.0 |
| Failed | CdpTaskStatus | 失败 | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpTaskState | 启用 | 4.5.0 |
| Disabled | CdpTaskState | 停止 | 4.5.0 |

 #taskType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| VM | CdpTaskType | 云主机 | 4.5.0 |

 #resourceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| taskUuid | String | CDP任务UUID | 4.5.0 |
| resourceUuid | String | 资源UUID | 4.5.0 |
| resourceType | String | 任务资源清单 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
EnableCdpTaskAction action = new EnableCdpTaskAction();
action.uuid = "579496f57aaf3450974972479474879e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
EnableCdpTaskAction.Result res = action.call();
```

 Python SDK

```
EnableCdpTaskAction action = EnableCdpTaskAction()
action.uuid = "579496f57aaf3450974972479474879e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
EnableCdpTaskAction.Result res = action.call()
```

---

#### 停止CDP任务(DisableCdpTask)



##### API请求

 URLs

```
POST zstack/v1/cdp-task/disable/{uuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/cdp-task/disable/0f5f6a9280233fa0b5c910c27274da98
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "e43bfb102a783c01a19ce023adaaea19",
    "name": "My Task",
    "policyUuid": "6ebcb0afeca13b1b99267fa6235ad632",
    "backupStorageUuid": "19c774019dae3569a72b5502fddab153",
    "status": "Stopped",
    "state": "Disabled",
    "taskType": "VM",
    "backupBandwidth": 1.048576E8,
    "maxCapacity": 1.073741824E11,
    "usedCapacity": 2.3952346E8
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | CdpTaskInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| policyUuid | String | 权限策略UUID | 4.5.0 |
| backupStorageUuid | String | 镜像存储UUID | 4.5.0 |
| backupBandwidth | long | 单个云盘备份速率 | 4.5.0 |
| maxCapacity | long | CDP任务规划容量 | 4.5.0 |
| usedCapacity | long | CDP已用容量 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| status | CdpTaskStatus | 详情参考[status] | 4.5.0 |
| state | CdpTaskState | 详情参考[state] | 4.5.0 |
| taskType | CdpTaskType | 详情参考[taskType] | 4.5.0 |
| resourceRefs | List | 详情参考[resourceRefs] | 4.5.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Created | CdpTaskStatus | 创建 | 4.5.0 |
| Starting | CdpTaskStatus | 启动中 | 4.5.0 |
| Running | CdpTaskStatus | 运作中 | 4.5.0 |
| Stopped | CdpTaskStatus | 停止 | 4.5.0 |
| Unknown | CdpTaskStatus | 未知 | 4.5.0 |
| Failed | CdpTaskStatus | 失败 | 4.5.0 |

 #state

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| Enabled | CdpTaskState | 启用 | 4.5.0 |
| Disabled | CdpTaskState | 停止 | 4.5.0 |

 #taskType

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| VM | CdpTaskType | 云主机 | 4.5.0 |

 #resourceRefs

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| taskUuid | String | CDP任务UUID | 4.5.0 |
| resourceUuid | String | 资源UUID | 4.5.0 |
| resourceType | String | 任务资源清单 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
DisableCdpTaskAction action = new DisableCdpTaskAction();
action.uuid = "0f5f6a9280233fa0b5c910c27274da98";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DisableCdpTaskAction.Result res = action.call();
```

 Python SDK

```
DisableCdpTaskAction action = DisableCdpTaskAction()
action.uuid = "0f5f6a9280233fa0b5c910c27274da98"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DisableCdpTaskAction.Result res = action.call()
```

---

#### 保护云主机恢复点(ProtectVmInstanceRecoveryPoint)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/protect-recovery-point
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "protectVmInstanceRecoveryPoint": {
    "groupId": 1.0,
    "description": "My Awesome RP"
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
-X PUT -d '{"protectVmInstanceRecoveryPoint":{"groupId":1.0,"description":"My Awesome RP"}}' http://localhost:8080/zstack/v1/vm-instances/8242bb6842e73987a632354acfc239ec/protect-recovery-point
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.5.0 |
| groupId | long | body(包含在**params**结构中) | 恢复点唯一标识 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
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
ProtectVmInstanceRecoveryPointAction action = new ProtectVmInstanceRecoveryPointAction();
action.vmInstanceUuid = "8242bb6842e73987a632354acfc239ec";
action.groupId = 1.0;
action.description = "My Awesome RP";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ProtectVmInstanceRecoveryPointAction.Result res = action.call();
```

 Python SDK

```
ProtectVmInstanceRecoveryPointAction action = ProtectVmInstanceRecoveryPointAction()
action.vmInstanceUuid = "8242bb6842e73987a632354acfc239ec"
action.groupId = 1.0
action.description = "My Awesome RP"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ProtectVmInstanceRecoveryPointAction.Result res = action.call()
```

---

#### 查找CDP保护恢复点(GetVmInstanceProtectedRecoveryPoints)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/protected-recovery-points
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/f71a2ffeec113d8e840a6808d09d1ca8/protected-recovery-points?limit=1000.0&start=0.0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| limit (可选) | Integer | query | 查找返回的最大记录数 |  | 4.5.0 |
| start (可选) | Integer | query | 查找的起始位置 |  | 4.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "recoveryPoints": {
    "22d49432eaf23ef0996ac976e0b91185": [
      {
        "id": 1.0,
        "grpId": 1.0,
        "size": 851968.0,
        "volId": "22d49432eaf23ef0996ac976e0b91185",
        "ts": "2021-06-29T19:49:45+08:00"
      }
    ],
    "71423fb28eb135c994e566badfd8aece": [
      {
        "id": 2.0,
        "grpId": 0.0,
        "size": 196608.0,
        "volId": "71423fb28eb135c994e566badfd8aece",
        "ts": "2021-06-29T19:49:47+08:00"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| recoveryPoints | Map | CDP恢复点列表 | 4.5.0 |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



##### SDK示例

 Java SDK

```
GetVmInstanceProtectedRecoveryPointsAction action = new GetVmInstanceProtectedRecoveryPointsAction();
action.uuid = "f71a2ffeec113d8e840a6808d09d1ca8";
action.limit = 1000.0;
action.start = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmInstanceProtectedRecoveryPointsAction.Result res = action.call();
```

 Python SDK

```
GetVmInstanceProtectedRecoveryPointsAction action = GetVmInstanceProtectedRecoveryPointsAction()
action.uuid = "f71a2ffeec113d8e840a6808d09d1ca8"
action.limit = 1000.0
action.start = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmInstanceProtectedRecoveryPointsAction.Result res = action.call()
```

---

#### 解除保护云主机恢复点(UnprotectVmInstanceRecoveryPoint)



##### API请求

 URLs

```
PUT zstack/v1/vm-instances/{vmInstanceUuid}/unprotect-recovery-point
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "unprotectVmInstanceRecoveryPoint": {
    "groupId": 1.0
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
-X PUT -d '{"unprotectVmInstanceRecoveryPoint":{"groupId":1.0}}' http://localhost:8080/zstack/v1/vm-instances/05beea45590e3ea5ac08d81dba36f51f/unprotect-recovery-point
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.5.0 |
| groupId | long | body(包含在**params**结构中) | 恢复点唯一标识 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

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
UnprotectVmInstanceRecoveryPointAction action = new UnprotectVmInstanceRecoveryPointAction();
action.vmInstanceUuid = "05beea45590e3ea5ac08d81dba36f51f";
action.groupId = 1.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UnprotectVmInstanceRecoveryPointAction.Result res = action.call();
```

 Python SDK

```
UnprotectVmInstanceRecoveryPointAction action = UnprotectVmInstanceRecoveryPointAction()
action.vmInstanceUuid = "05beea45590e3ea5ac08d81dba36f51f"
action.groupId = 1.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UnprotectVmInstanceRecoveryPointAction.Result res = action.call()
```

---

#### 从CDP恢复点创建虚拟机(CreateVmFromCdpBackup)



##### API请求

 URLs

```
PUT zstack/v1/cdp-backups/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "createVmFromCdpBackup": {
    "name": "vm1",
    "groupId": 224.0,
    "cdpTaskUuid": "d2cb3e8626e1357aa022e05f86162987",
    "instanceOfferingUuid": "cc7000d5e89936d497c7ab12c653dae3",
    "l3NetworkUuids": [
      "e0961ef73a7336629a0710cf8a5c1c6b"
    ],
    "clusterUuid": "d57baa34a904394d86aa8336d8a6f9a9",
    "recoverBandwidth": 0.0,
    "description": "this is a vm"
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
-X PUT -d '{"createVmFromCdpBackup":{"name":"vm1","groupId":224.0,"cdpTaskUuid":"d2cb3e8626e1357aa022e05f86162987","instanceOfferingUuid":"cc7000d5e89936d497c7ab12c653dae3","l3NetworkUuids":["e0961ef73a7336629a0710cf8a5c1c6b"],"clusterUuid":"d57baa34a904394d86aa8336d8a6f9a9","recoverBandwidth":0.0,"description":"this is a vm"}}' http://localhost:8080/zstack/v1/cdp-backups/actions
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 4.5.0 |
| groupId | long | body(包含在**params**结构中) | 恢复点ID |  | 4.5.0 |
| cdpTaskUuid | String | body(包含在**params**结构中) | CDP任务UUID |  | 4.5.0 |
| instanceOfferingUuid | String | body(包含在**params**结构中) | 计算规格UUID |  | 4.5.0 |
| defaultL3NetworkUuid (可选) | String | body(包含在**params**结构中) | 默认的三层网络UUID |  | 4.5.0 |
| l3NetworkUuids | List | body(包含在**params**结构中) | 三层网络UUID列表 |  | 4.5.0 |
| type (可选) | String | body(包含在**params**结构中) | 虚拟机类型 | UserVm ApplianceVm | 4.5.0 |
| zoneUuid (可选) | String | body(包含在**params**结构中) | 区域UUID |  | 4.5.0 |
| clusterUuid (可选) | String | body(包含在**params**结构中) | 集群UUID |  | 4.5.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 4.5.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 根盘对应的主存储UUID |  | 4.5.0 |
| primaryStorageUuidForDataVolume (可选) | String | body(包含在**params**结构中) | 数据盘对应的主存储UUID |  | 4.5.0 |
| recoverBandwidth (可选) | long | body(包含在**params**结构中) | 恢复带宽 |  | 4.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 4.5.0 |
| rootVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 系统盘的系统标签 |  | 4.5.0 |
| dataVolumeSystemTags (可选) | List | body(包含在**params**结构中) | 数据盘的系统标签 |  | 4.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 4.5.0 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 4.5.0 |
| systemTags (可选) | List | body | 虚拟机系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 虚拟机用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "ecadf3712d373abebb48671015a49e2c",
    "name": "Test-VM",
    "description": "web server VM",
    "zoneUuid": "5274961ea09834f6bdc757ec9b1d205f",
    "clusterUuid": "6c00cd0c676e3b5397f9e635a1357336",
    "imageUuid": "e9316bbaf94a37dea9a41b8a42e30b3d",
    "hostUuid": "7f2a8fe14f863e43b95b4e204d2b6073",
    "lastHostUuid": "804827a4304e309a85efb214e32edd80",
    "instanceOfferingUuid": "7f8ece5779ef31bab691585ffc693b91",
    "rootVolumeUuid": "a2b37cf28a9834da826e14e5fd7a97c6",
    "platform": "Linux",
    "defaultL3NetworkUuid": "68bca6897c4f300881985f028e61ca92",
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
        "uuid": "645496bd84373644a52a1e62229cbb07",
        "vmInstanceUuid": "ecadf3712d373abebb48671015a49e2c",
        "usedIpUuid": "b89e21d52dbb3037a3ee585b253396f2",
        "l3NetworkUuid": "68bca6897c4f300881985f028e61ca92",
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
        "uuid": "a2b37cf28a9834da826e14e5fd7a97c6",
        "name": "Root-Volume-For-VM-ecadf3712d373abebb48671015a49e2c",
        "primaryStorageUuid": "3626202657933f2cb13df025773d9aa9",
        "vmInstanceUuid": "ecadf3712d373abebb48671015a49e2c",
        "rootImageUuid": "e9316bbaf94a37dea9a41b8a42e30b3d",
        "installPath": "/zstack_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-a2b37cf28a9834da826e14e5fd7a97c6/a2b37cf28a9834da826e14e5fd7a97c6.qcow2",
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
| success | boolean |  | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |
| inventory | VmInstanceInventory | 详情参考[inventory] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| zoneUuid | String | 区域UUID | 4.5.0 |
| clusterUuid | String | 集群UUID | 4.5.0 |
| imageUuid | String | 镜像UUID | 4.5.0 |
| hostUuid | String | 物理机UUID | 4.5.0 |
| lastHostUuid | String |  | 4.5.0 |
| instanceOfferingUuid | String | 计算规格UUID | 4.5.0 |
| rootVolumeUuid | String | 根云盘UUID | 4.5.0 |
| platform | String |  | 4.5.0 |
| architecture | String |  | 4.5.0 |
| defaultL3NetworkUuid | String |  | 4.5.0 |
| type | String |  | 4.5.0 |
| hypervisorType | String |  | 4.5.0 |
| memorySize | Long |  | 4.5.0 |
| cpuNum | Integer |  | 4.5.0 |
| cpuSpeed | Long |  | 4.5.0 |
| allocatorStrategy | String |  | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| state | String |  | 4.5.0 |
| guestOsType | String |  | 4.5.0 |
| vmNics | List | 详情参考[vmNics] | 4.5.0 |
| allVolumes | List | 详情参考[allVolumes] | 4.5.0 |
| vmCdRoms | List | 详情参考[vmCdRoms] | 4.5.0 |

 #vmNics

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| vmInstanceUuid | String | 云主机UUID | 4.5.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.0 |
| ip | String |  | 4.5.0 |
| mac | String |  | 4.5.0 |
| hypervisorType | String |  | 4.5.0 |
| netmask | String |  | 4.5.0 |
| gateway | String |  | 4.5.0 |
| metaData | String |  | 4.5.0 |
| ipVersion | Integer |  | 4.5.0 |
| driverType | String |  | 4.5.0 |
| internalName | String |  | 4.5.0 |
| deviceId | Integer |  | 4.5.0 |
| type | String |  | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| usedIps | List | 详情参考[usedIps] | 4.5.0 |

 #usedIps

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| ipRangeUuid | String | IP段UUID | 4.5.0 |
| l3NetworkUuid | String | 三层网络UUID | 4.5.0 |
| ipVersion | Integer |  | 4.5.0 |
| ip | String |  | 4.5.0 |
| netmask | String |  | 4.5.0 |
| gateway | String |  | 4.5.0 |
| usedFor | String |  | 4.5.0 |
| ipInLong | long |  | 4.5.0 |
| vmNicUuid | String | 云主机网卡UUID | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |

 #allVolumes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| primaryStorageUuid | String | 主存储UUID | 4.5.0 |
| vmInstanceUuid | String | 云主机UUID | 4.5.0 |
| diskOfferingUuid | String | 云盘规格UUID | 4.5.0 |
| rootImageUuid | String |  | 4.5.0 |
| installPath | String |  | 4.5.0 |
| type | String |  | 4.5.0 |
| format | String |  | 4.5.0 |
| size | Long |  | 4.5.0 |
| actualSize | Long |  | 4.5.0 |
| deviceId | Integer |  | 4.5.0 |
| state | String |  | 4.5.0 |
| status | String |  | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |
| isShareable | Boolean |  | 4.5.0 |
| volumeQos | String |  | 4.5.0 |
| lastDetachDate | Timestamp |  | 4.5.0 |
| lastVmInstanceUuid | String |  | 4.5.0 |

 #vmCdRoms

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 4.5.0 |
| vmInstanceUuid | String | 云主机UUID | 4.5.0 |
| deviceId | Integer |  | 4.5.0 |
| isoUuid | String |  | 4.5.0 |
| isoInstallPath | String |  | 4.5.0 |
| name | String | 资源名称 | 4.5.0 |
| description | String | 资源的详细描述 | 4.5.0 |
| createDate | Timestamp | 创建时间 | 4.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 4.5.0 |



##### SDK示例

 Java SDK

```
CreateVmFromCdpBackupAction action = new CreateVmFromCdpBackupAction();
action.name = "vm1";
action.groupId = 224.0;
action.cdpTaskUuid = "d2cb3e8626e1357aa022e05f86162987";
action.instanceOfferingUuid = "cc7000d5e89936d497c7ab12c653dae3";
action.l3NetworkUuids = asList("e0961ef73a7336629a0710cf8a5c1c6b");
action.clusterUuid = "d57baa34a904394d86aa8336d8a6f9a9";
action.recoverBandwidth = 0.0;
action.description = "this is a vm";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateVmFromCdpBackupAction.Result res = action.call();
```

 Python SDK

```
CreateVmFromCdpBackupAction action = CreateVmFromCdpBackupAction()
action.name = "vm1"
action.groupId = 224.0
action.cdpTaskUuid = "d2cb3e8626e1357aa022e05f86162987"
action.instanceOfferingUuid = "cc7000d5e89936d497c7ab12c653dae3"
action.l3NetworkUuids = [e0961ef73a7336629a0710cf8a5c1c6b]
action.clusterUuid = "d57baa34a904394d86aa8336d8a6f9a9"
action.recoverBandwidth = 0.0
action.description = "this is a vm"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateVmFromCdpBackupAction.Result res = action.call()
```

---

#### 恢复云主机(RevertVmFromCdpBackup)



##### API请求

 URLs

```
PUT zstack/v1/cdp-backups/{vmInstanceUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "revertVmFromCdpBackup": {
    "backupStorageUuid": "13680e129d053ee092513efebf1ce00a",
    "groupId": 1.0,
    "useExistingVolume": true,
    "recoverBandwidth": 0.0
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
-X PUT -d '{"revertVmFromCdpBackup":{"backupStorageUuid":"13680e129d053ee092513efebf1ce00a","groupId":1.0,"useExistingVolume":true,"recoverBandwidth":0.0}}' http://localhost:8080/zstack/v1/cdp-backups/faa5f80004b4393dbc59b91ab5a286b7/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmInstanceUuid | String | url | 云主机UUID |  | 4.5.0 |
| backupStorageUuid | String | body(包含在**params**结构中) | 镜像存储UUID |  | 4.5.0 |
| groupId | long | body(包含在**params**结构中) | 恢复点唯一标识 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |
| primaryStorageUuidForRootVolume (可选) | String | body(包含在**params**结构中) | 新建根盘的主存储UUID |  | 4.5.0 |
| primaryStorageUuidForDataVolume (可选) | String | body(包含在**params**结构中) | 新建数据盘的主存储UUID |  | 4.5.0 |
| hostUuid (可选) | String | body(包含在**params**结构中) | 物理机UUID |  | 4.5.0 |
| useExistingVolume (可选) | boolean | body(包含在**params**结构中) | 恢复数据是否覆盖原盘 |  | 4.5.0 |
| recoverBandwidth (可选) | long | body(包含在**params**结构中) | 恢复带宽 |  | 4.5.0 |



##### API返回

 返回示例

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
RevertVmFromCdpBackupAction action = new RevertVmFromCdpBackupAction();
action.vmInstanceUuid = "faa5f80004b4393dbc59b91ab5a286b7";
action.backupStorageUuid = "13680e129d053ee092513efebf1ce00a";
action.groupId = 1.0;
action.useExistingVolume = true;
action.recoverBandwidth = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RevertVmFromCdpBackupAction.Result res = action.call();
```

 Python SDK

```
RevertVmFromCdpBackupAction action = RevertVmFromCdpBackupAction()
action.vmInstanceUuid = "faa5f80004b4393dbc59b91ab5a286b7"
action.backupStorageUuid = "13680e129d053ee092513efebf1ce00a"
action.groupId = 1.0
action.useExistingVolume = true
action.recoverBandwidth = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RevertVmFromCdpBackupAction.Result res = action.call()
```

---

#### 删除CDP任务数据(DeleteCdpTaskData)



##### API请求

 URLs

```
POST zstack/v1/cdp-task/{uuid}/data
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/cdp-task/06a058ba3bb43e91afe212bc710c559e/data
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
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
DeleteCdpTaskDataAction action = new DeleteCdpTaskDataAction();
action.uuid = "06a058ba3bb43e91afe212bc710c559e";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteCdpTaskDataAction.Result res = action.call();
```

 Python SDK

```
DeleteCdpTaskDataAction action = DeleteCdpTaskDataAction()
action.uuid = "06a058ba3bb43e91afe212bc710c559e"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteCdpTaskDataAction.Result res = action.call()
```

---

#### 查找CDP恢复点(GetVmInstanceRecoveryPoints)



##### API请求

 URLs

```
GET zstack/v1/vm-instances/{uuid}/recovery-points
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/vm-instances/e2e9f8f2184135378b883036673d1780/recovery-points?startTime=2021-06-25T15:36:16%2b08:00&limit=1000.0&start=0.0
```

 参数列表
-
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 4.5.0 |
| startTime (可选) | String | query | 查找起始时间 |  | 4.5.0 |
| endTime (可选) | String | query | 查找结束时间 |  | 4.5.0 |
| scale (可选) | String | query | 查找恢复点的时间单位 | minute hour day | 4.5.0 |
| limit (可选) | Integer | query | 查找返回的最大记录数 |  | 4.5.0 |
| start (可选) | Integer | query | 查找的起始位置 |  | 4.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "recoveryPoints": {
    "db058d634c403ffd9b55d4af14090c4b": [
      {
        "id": 2.0,
        "grpId": 1.0,
        "size": 196608.0,
        "volId": "db058d634c403ffd9b55d4af14090c4b",
        "ts": "2021-06-29T19:49:47+08:00"
      }
    ],
    "9092ed3354fe39ea854f2e22e0346223": [
      {
        "id": 1.0,
        "grpId": 1.0,
        "size": 851968.0,
        "volId": "9092ed3354fe39ea854f2e22e0346223",
        "ts": "2021-06-29T19:49:45+08:00"
      }
    ]
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| recoveryPoints | Map | CDP恢复点列表 | 4.5.0 |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



##### SDK示例

 Java SDK

```
GetVmInstanceRecoveryPointsAction action = new GetVmInstanceRecoveryPointsAction();
action.uuid = "e2e9f8f2184135378b883036673d1780";
action.startTime = "2021-06-25T15:36:16+08:00";
action.limit = 1000.0;
action.start = 0.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetVmInstanceRecoveryPointsAction.Result res = action.call();
```

 Python SDK

```
GetVmInstanceRecoveryPointsAction action = GetVmInstanceRecoveryPointsAction()
action.uuid = "e2e9f8f2184135378b883036673d1780"
action.startTime = "2021-06-25T15:36:16+08:00"
action.limit = 1000.0
action.start = 0.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetVmInstanceRecoveryPointsAction.Result res = action.call()
```

---

#### 挂载CDP恢复点(MountVmInstanceRecoveryPoint)



##### API请求

 URLs

```
POST zstack/v1/cdp-backup-storage/mount-recovery-point
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmUuid": "b21d235bb4683fa88c9cd0ac660b1b45",
    "groupId": 1.0,
    "https": true
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
-X POST -d '{"params":{"vmUuid":"b21d235bb4683fa88c9cd0ac660b1b45","groupId":1.0,"https":true}}' http://localhost:8080/zstack/v1/cdp-backup-storage/mount-recovery-point
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 4.5.0 |
| groupId | long | body(包含在**params**结构中) | 恢复点唯一标识 |  | 4.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 4.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 4.5.0 |
| https (可选) | boolean | body(包含在**params**结构中) | 是否启用https |  | 4.5.0 |



##### API返回

 返回示例

```
{
  "resourcePath": "http://cdp-storage-server/some-path"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourcePath | String | 挂载恢复点成功的资源路径 | 4.5.0 |
| failedVolumes | Map | 挂载恢复点失败的云盘列表 | 4.5.0 |
| success | boolean | 成功 | 4.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 4.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 4.5.0 |
| description | String | 错误的概要描述 | 4.5.0 |
| details | String | 错误的详细信息 | 4.5.0 |
| elaboration | String | 保留字段，默认为null | 4.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 4.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 4.5.0 |



##### SDK示例

 Java SDK

```
MountVmInstanceRecoveryPointAction action = new MountVmInstanceRecoveryPointAction();
action.vmUuid = "b21d235bb4683fa88c9cd0ac660b1b45";
action.groupId = 1.0;
action.https = true;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
MountVmInstanceRecoveryPointAction.Result res = action.call();
```

 Python SDK

```
MountVmInstanceRecoveryPointAction action = MountVmInstanceRecoveryPointAction()
action.vmUuid = "b21d235bb4683fa88c9cd0ac660b1b45"
action.groupId = 1.0
action.https = true
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
MountVmInstanceRecoveryPointAction.Result res = action.call()
```

---

#### 卸载CDP恢复点(UnmountVmInstanceRecoveryPoint)



##### API请求

 URLs

```
POST zstack/v1/cdp-backup-storage/unmount-recovery-point
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "vmUuid": "1cd2fd6c1c6b39b3b7cb08a58cb448bc",
    "groupId": 1.0
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
-X POST -d '{"params":{"vmUuid":"1cd2fd6c1c6b39b3b7cb08a58cb448bc","groupId":1.0}}' http://localhost:8080/zstack/v1/cdp-backup-storage/unmount-recovery-point
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| vmUuid | String | body(包含在**params**结构中) | 云主机uuid |  | 4.5.0 |
| groupId | long | body(包含在**params**结构中) | 恢复点唯一标识 |  | 4.5.0 |
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
UnmountVmInstanceRecoveryPointAction action = new UnmountVmInstanceRecoveryPointAction();
action.vmUuid = "1cd2fd6c1c6b39b3b7cb08a58cb448bc";
action.groupId = 1.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UnmountVmInstanceRecoveryPointAction.Result res = action.call();
```

 Python SDK

```
UnmountVmInstanceRecoveryPointAction action = UnmountVmInstanceRecoveryPointAction()
action.vmUuid = "1cd2fd6c1c6b39b3b7cb08a58cb448bc"
action.groupId = 1.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UnmountVmInstanceRecoveryPointAction.Result res = action.call()
```

---

#### 获取备份服务器CDP运行条件(GetCdpBackupStorageRequirement)



##### API请求

 URLs

```
GET zstack/v1/cdp-backup-storage/{backupStorageUuid}/requirement
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cdp-backup-storage/ce44cb9ea12c354495fc6b4313fc90de/requirement?limit=1000&start=0
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 5.1.4 |
| limit (可选) | Integer | query |  |  | 5.1.4 |
| start (可选) | Integer | query |  |  | 5.1.4 |
| systemTags (可选) | List | query | 系统标签 |  | 5.1.4 |
| userTags (可选) | List | query | 用户标签 |  | 5.1.4 |



##### API返回



返回示例

```
{
  "nextStep": "None",
  "required": {
    "qemuVersion": "6.2.0"
  },
  "current": {
    "cdpVersion": "cdp"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| required | Map | 期望条件 | 5.1.4 |
| current | Map | 当前条件 | 5.1.4 |
| success | boolean | 是否成功 | 5.1.4 |
| nextStep | String | 下一步骤 | 5.1.4 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 5.1.4 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 5.1.4 |
| description | String | 错误的概要描述 | 5.1.4 |
| details | String | 错误的详细信息 | 5.1.4 |
| elaboration | String | 保留字段，默认为null | 5.1.4 |
| opaque | LinkedHashMap | 保留字段，默认为null | 5.1.4 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 5.1.4 |



##### SDK示例

 Java SDK

```
GetCdpBackupStorageRequirementAction action = new GetCdpBackupStorageRequirementAction();
action.backupStorageUuid = "ce44cb9ea12c354495fc6b4313fc90de";
action.limit = 1000;
action.start = 0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetCdpBackupStorageRequirementAction.Result res = action.call();
```

 Python SDK

```
GetCdpBackupStorageRequirementAction action = GetCdpBackupStorageRequirementAction()
action.backupStorageUuid = "ce44cb9ea12c354495fc6b4313fc90de"
action.limit = 1000
action.start = 0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetCdpBackupStorageRequirementAction.Result res = action.call()
```

---

#### 升级备份服务器上的CDP任务(UpgradeBackupStorageCdpTasks)



##### API请求

 URLs

```
PUT zstack/v1/cdp-task/upgrade/{backupStorageUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "upgradeBackupStorageCdpTasks": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"upgradeBackupStorageCdpTasks":{}}' http://localhost:8080/zstack/v1/cdp-task/upgrade/618da5c98de33bb0bc2434a80f0ab889/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| backupStorageUuid | String | url | 镜像存储UUID |  | 5.1.4 |
| systemTags (可选) | List | body | 系统标签 |  | 5.1.4 |
| userTags (可选) | List | body | 用户标签 |  | 5.1.4 |



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
UpgradeBackupStorageCdpTasksAction action = new UpgradeBackupStorageCdpTasksAction();
action.backupStorageUuid = "618da5c98de33bb0bc2434a80f0ab889";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpgradeBackupStorageCdpTasksAction.Result res = action.call();
```

 Python SDK

```
UpgradeBackupStorageCdpTasksAction action = UpgradeBackupStorageCdpTasksAction()
action.backupStorageUuid = "618da5c98de33bb0bc2434a80f0ab889"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpgradeBackupStorageCdpTasksAction.Result res = action.call()
```
