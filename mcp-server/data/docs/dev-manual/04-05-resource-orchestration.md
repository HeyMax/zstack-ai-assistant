# 资源编排 - 资源中心

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/4.5.html*

---

## 资源编排

---

## 资源编排相关接口

---

## 添加资源栈模板(AddStackTemplate)



### API请求

 URLs

```
POST zstack/v1/cloudformation/template
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "stack",     "description": "description",     "type": "zstack",     "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"stack","description":"description","type":"zstack","templateContent":"{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"}}' \ http://localhost:8080/zstack/v1/cloudformation/template
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.5.0 |
| type (可选) | String | body(包含在**params**结构中) | 模板类型，默认为zstack | zstack | 2.5.0 |
| templateContent | String | body(包含在**params**结构中) | 模板内容，json字符串 |  | 2.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源UUID |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "9e3dd776d9ed3c048b74b930aadded5d",     "name": "stack",     "type": "zstack",     "version": "2018-06-18",     "state": true,     "content": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventory | StackTemplateInventory | 详情参考[inventory] | 2.5.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| type | String | 模板类型，默认zstack | 2.5.0 |
| version | String | 模板版本号 | 2.5.0 |
| state | Boolean | 模板是否启用 | 2.5.0 |
| content | String | 模板内容，json字符串 | 2.5.0 |
| md5sum | String | content字段内容的md5校验值 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



### SDK示例

 Java SDK

```
AddStackTemplateAction action = new AddStackTemplateAction(); action.name = "stack"; action.description = "description"; action.type = "zstack"; action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; AddStackTemplateAction.Result res = action.call();
```

 Python SDK

```
AddStackTemplateAction action = AddStackTemplateAction() action.name = "stack" action.description = "description" action.type = "zstack" action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" AddStackTemplateAction.Result res = action.call()
```

---

## 删除资源栈模板(DeleteStackTemplate)



### API请求

 URLs

```
DELETE zstack/v1/cloudformation/template/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X DELETE http://localhost:8080/zstack/v1/cloudformation/template/dbeed1e724c13eb49650b3bdf7993d7b
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.5.0 |
| deleteMode (可选) | String | body |  |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



### API返回

 该API成功时返回一个空的JSON结构`{}`，出错时返回的JSON结构包含一个error字段，例如：

```
{ "error": {     "code": "SYS.1001",     "description": "A message or a operation timeout",     "details": "Create VM on KVM timeout after 300s" } }
```



### SDK示例

 Java SDK

```
DeleteStackTemplateAction action = new DeleteStackTemplateAction(); action.uuid = "dbeed1e724c13eb49650b3bdf7993d7b"; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteStackTemplateAction.Result res = action.call();
```

 Python SDK

```
DeleteStackTemplateAction action = DeleteStackTemplateAction() action.uuid = "dbeed1e724c13eb49650b3bdf7993d7b" action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteStackTemplateAction.Result res = action.call()
```

---

#### 查询资源栈模板(QueryStackTemplate)



##### API请求

 URLs

```
GET zstack/v1/cloudformation/template
GET zstack/v1/cloudformation/template/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/template?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/template/285b46cc67623c6d92eebc1ecab8f139
```



可查询字段

运行CLI命令行工具，输入`QueryStackTemplate`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "5c1bb041907e3f29a27c7818e7fd07de",
      "name": "test",
      "description": "description",
      "type": "zstack",
      "version": "2018-06-18",
      "state": true,
      "content": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventories | List | 详情参考[inventories] | 2.5.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| type | String | 模板类型，默认zstack | 2.5.0 |
| version | String | 模板版本号 | 2.5.0 |
| state | Boolean | 模板是否启用 | 2.5.0 |
| content | String | 模板内容，json字符串 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
QueryStackTemplateAction action = new QueryStackTemplateAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryStackTemplateAction.Result res = action.call();
```

 Python SDK

```
QueryStackTemplateAction action = QueryStackTemplateAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryStackTemplateAction.Result res = action.call()
```

---

#### 修改资源栈模板(UpdateStackTemplate)



##### API请求

 URLs

```
PUT zstack/v1/cloudformation/template/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateStackTemplate": {
    "name": "stack",
    "description": "description",
    "state": false,
    "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"
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
-X PUT -d '{"updateStackTemplate":{"name":"stack","description":"description","state":false,"templateContent":"{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"}}' \
http://localhost:8080/zstack/v1/cloudformation/template/86cefd61876833eaa581d942f6d519ba/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 模板的UUID |  | 2.5.0 |
| name (可选) | String | body(包含在**updateStackTemplate**结构中) | 资源名称 |  | 2.5.0 |
| description (可选) | String | body(包含在**updateStackTemplate**结构中) | 资源的详细描述 |  | 2.5.0 |
| state (可选) | Boolean | body(包含在**updateStackTemplate**结构中) | 模板是否可用 |  | 2.5.0 |
| templateContent (可选) | String | body(包含在**updateStackTemplate**结构中) | 模板内容，json字符串 |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "600afd0b079b303385e5d04b4d560af1",
    "name": "stack",
    "type": "zstack",
    "version": "2018-06-18",
    "state": true,
    "content": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventory | StackTemplateInventory | 详情参考[inventory] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

  #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| type | String | 模板类型，默认zstack | 2.5.0 |
| version | String | 模板版本号 | 2.5.0 |
| state | Boolean | 模板是否启用 | 2.5.0 |
| content | String | 模板内容，json字符串 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
UpdateStackTemplateAction action = new UpdateStackTemplateAction();
action.uuid = "86cefd61876833eaa581d942f6d519ba";
action.name = "stack";
action.description = "description";
action.state = false;
action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateStackTemplateAction.Result res = action.call();
```

 Python SDK

```
UpdateStackTemplateAction action = UpdateStackTemplateAction()
action.uuid = "86cefd61876833eaa581d942f6d519ba"
action.name = "stack"
action.description = "description"
action.state = false
action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateStackTemplateAction.Result res = action.call()
```

---

#### 获取支持的资源列表(GetSupportedCloudFormationResources)



获取资源栈模板支持的资源清单列表。

##### API请求

 URLs

```
GET zstack/v1/cloudformation/resources
```

 Headers

```

Authorization: OAuth the-session-uuid
```

 Curl示例

```

curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/resources?type=zstack
```

 参数列表
-

-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| version (可选) | String | query | 版本号，如v1 | v1 | 2.6.0 |
| type (可选) | String | query | 类型，默认为zstack | zstack | 2.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | query | 用户标签 |  | 2.6.0 |



##### API返回

 返回示例

```

{
  "resources": [
    {
      "name": "VmInstance",
      "type": "Resource",
      "actionName": "CreateVmInstanceAction",
      "resources": [
        "InstanceOffering",
        "Image",
        "L3Network",
        "DiskOffering",
        "Zone",
        "Cluster",
        "Host",
        "PrimaryStorage"
      ]
    },
    {
      "name": "AttachDataVolumeToVm",
      "type": "Action",
      "actionName": "AttachDataVolumeToVmAction",
      "resources": [
        "VmInstance",
        "Volume"
      ]
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| resources | List | 详情参考[resources] | 2.6.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #resources

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 2.6.0 |
| type | String | 类型，可为Action或Resource | 2.6.0 |
| actionName | String | 执行的操作名称 | 2.6.0 |
| resources | List | 关联到的资源列表 | 2.6.0 |



##### SDK示例

 Java SDK

```

GetSupportedCloudFormationResourcesAction action = new GetSupportedCloudFormationResourcesAction();
action.type = "zstack";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetSupportedCloudFormationResourcesAction.Result res = action.call();
```

 Python SDK

```

GetSupportedCloudFormationResourcesAction action = GetSupportedCloudFormationResourcesAction()
action.type = "zstack"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetSupportedCloudFormationResourcesAction.Result res = action.call()
```

---

#### 创建资源栈(CreateResourceStack)



##### API请求

 URLs

```
POST zstack/v1/cloudformation/stack
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "stack",
    "description": "description",
    "type": "zstack",
    "rollback": true,
    "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}",
    "parameters": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"
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
-X POST -d '{"params":{"name":"stack","description":"description","type":"zstack","rollback":true,"templateContent":"{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}","parameters":"{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"}}' \
http://localhost:8080/zstack/v1/cloudformation/stack
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 资源名称 |  | 2.5.0 |
| description (可选) | String | body(包含在**params**结构中) | 资源的详细描述 |  | 2.5.0 |
| type (可选) | String | body(包含在**params**结构中) | 堆栈版本，默认为zstack | zstack | 2.5.0 |
| rollback (可选) | Boolean | body(包含在**params**结构中) | 堆栈创建失败是否回滚，默认回滚 |  | 2.5.0 |
| templateContent (可选) | String | body(包含在**params**结构中) | 堆栈内容，json字符串说明: 与参数**templateUuid**二选一 |  | 2.5.0 |
| templateUuid (可选) | String | body(包含在**params**结构中) | 模板UUID说明: 与参数**templateContent**二选一 |  | 2.5.0 |
| parameters | String | body(包含在**params**结构中) | 参数列表，json字符串 |  | 2.5.0 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 资源的唯一UUID |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d6ad19356c623599a29140e063c18d74",
    "name": "test",
    "description": "description",
    "version": "2018-06-18",
    "type": "zstack",
    "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}",
    "paramContent": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}",
    "status": "Created",
    "enableRollback": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventory | ResourceStackInventory | 详情参考[inventory] | 2.5.0 |

  #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

  #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| version | String | 堆栈版本 | 2.5.0 |
| type | String | 堆栈类型，默认为zstack | 2.5.0 |
| templateContent | String | 资堆栈内容，json字符串 | 2.5.0 |
| paramContent | String | 堆栈对应的参数列表，json字符串 | 2.5.0 |
| status | String | 堆栈状态 | 2.5.0 |
| reason | String | 堆栈创建失败的原因 | 2.5.0 |
| enableRollback | boolean | 堆栈创建失败时是否回滚 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
CreateResourceStackAction action = new CreateResourceStackAction();
action.name = "stack";
action.description = "description";
action.type = "zstack";
action.rollback = true;
action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}";
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreateResourceStackAction.Result res = action.call();
```

 Python SDK

```
CreateResourceStackAction action = CreateResourceStackAction()
action.name = "stack"
action.description = "description"
action.type = "zstack"
action.rollback = true
action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}"
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreateResourceStackAction.Result res = action.call()
```

---

#### 预览资源栈(PreviewResourceStack)



##### API请求

 URLs

```
POST zstack/v1/cloudformation/stack/preview
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "type": "zstack",
    "uuid": "c0c6caa3886d37709efe2c52aeeefa31",
    "parameters": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"
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
-X POST -d '{"params":{"type":"zstack","uuid":"c0c6caa3886d37709efe2c52aeeefa31","parameters":"{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"}}' http://localhost:8080/zstack/v1/cloudformation/stack/preview
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| type (可选) | String | body(包含在**params**结构中) |  | zstack | 2.5.0 |
| templateContent (可选) | String | body(包含在**params**结构中) | 模板内容 |  | 2.5.0 |
| uuid (可选) | String | body(包含在**params**结构中) | 模板的UUID |  | 2.5.0 |
| parameters (可选) | String | body(包含在**params**结构中) | 参数列表，json字符串 |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "preview": {
    "actions": [
      {
        "resourceName": "WebServer1",
        "actionName": "org.zstack.sdk.CreateVmInstanceAction",
        "round": 0.0,
        "inDegree": [],
        "actions": {
          "name": "vm",
          "instanceOfferingUuid": "f524c10459ce32f0b70a1c0878769b2d",
          "imageUuid": "66296cfc1c6d36fa8405788cb2fb85a0",
          "l3NetworkUuids": [
            "e99fce59e6463758aef45bdfc5579203"
          ],
          "strategy": "InstantStart",
          "timeout": -1.0,
          "pollingInterval": -1.0
        }
      }
    ],
    "conditions": {
      "WithDataVolume": false
    }
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| preview | PreviewResourceStruct | 详情参考[preview] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

  #preview

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| conditions | Map | 条件的执行结果 | 3.7.0 |
| actions | List | 详情参考[actions] | 2.5.0 |

 #actions

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourceName | String | 资源类型 | 2.5.0 |
| actionName | String | 行为名称 | 2.5.0 |
| round | int | 第几轮执行，从0开始计算 | 2.5.0 |
| inDegree | Set | 依赖的行为列表 | 2.5.0 |
| actions | Object | 执行操作的参数列表 | 2.5.0 |
| error | String | 本次执行的出现的错误 | 4.1.0 |



##### SDK示例

 Java SDK

```
PreviewResourceStackAction action = new PreviewResourceStackAction();
action.type = "zstack";
action.uuid = "c0c6caa3886d37709efe2c52aeeefa31";
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
PreviewResourceStackAction.Result res = action.call();
```

 Python SDK

```
PreviewResourceStackAction action = PreviewResourceStackAction()
action.type = "zstack"
action.uuid = "c0c6caa3886d37709efe2c52aeeefa31"
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
PreviewResourceStackAction.Result res = action.call()
```

---

#### 删除资源栈(DeleteResourceStack)



##### API请求

 URLs

```
DELETE zstack/v1/cloudformation/stack/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/cloudformation/stack/77e576c15ef33cfcac8478e8db28f0fa
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.5.0 |
| deleteMode (可选) | String | body |  |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



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
DeleteResourceStackAction action = new DeleteResourceStackAction();
action.uuid = "77e576c15ef33cfcac8478e8db28f0fa";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteResourceStackAction.Result res = action.call();
```

 Python SDK

```
DeleteResourceStackAction action = DeleteResourceStackAction()
action.uuid = "77e576c15ef33cfcac8478e8db28f0fa"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteResourceStackAction.Result res = action.call()
```

---

#### 修改资源栈(UpdateResourceStack)



##### API请求

 URLs

```
PUT zstack/v1/cloudformation/stack/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateResourceStack": {
    "name": "stack",
    "description": "description",
    "rollback": true,
    "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}",
    "parameters": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"
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
-X PUT -d '{"updateResourceStack":{"name":"stack","description":"description","rollback":true,"templateContent":"{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"DefaultValue\" : \"instanceoffering-123\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}","parameters":"{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"}}' \
http://localhost:8080/zstack/v1/cloudformation/stack/acbf4bd4eb7838e2a624095d4f02990d/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 堆栈的UUID |  | 2.5.0 |
| name (可选) | String | body(包含在**updateResourceStack**结构中) | 资源名称 |  | 2.5.0 |
| description (可选) | String | body(包含在**updateResourceStack**结构中) | 资源的详细描述 |  | 2.5.0 |
| rollback (可选) | Boolean | body(包含在**updateResourceStack**结构中) | 创建失败是否回滚 |  | 2.5.0 |
| templateContent (可选) | String | body(包含在**updateResourceStack**结构中) | 堆栈内容，json字符串 |  | 2.5.0 |
| parameters (可选) | String | body(包含在**updateResourceStack**结构中) | 堆栈参数列表，json字符串 |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "d72e80d8e9c235d0976e6c5a4e3f9137",
    "name": "test",
    "description": "description",
    "version": "2018-06-18",
    "type": "zstack",
    "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}",
    "paramContent": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}",
    "status": "Created",
    "enableRollback": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventory | ResourceStackInventory | 详情参考[inventory] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

  #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| version | String | 堆栈版本 | 2.5.0 |
| type | String | 堆栈类型，默认为zstack | 2.5.0 |
| templateContent | String | 资堆栈内容，json字符串 | 2.5.0 |
| paramContent | String | 堆栈对应的参数列表，json字符串 | 2.5.0 |
| status | String | 堆栈状态 | 2.5.0 |
| reason | String | 堆栈创建失败的原因 | 2.5.0 |
| enableRollback | boolean | 堆栈创建失败时是否回滚 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
UpdateResourceStackAction action = new UpdateResourceStackAction();
action.uuid = "acbf4bd4eb7838e2a624095d4f02990d";
action.name = "stack";
action.description = "description";
action.rollback = true;
action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}";
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdateResourceStackAction.Result res = action.call();
```

 Python SDK

```
UpdateResourceStackAction action = UpdateResourceStackAction()
action.uuid = "acbf4bd4eb7838e2a624095d4f02990d"
action.name = "stack"
action.description = "description"
action.rollback = true
action.templateContent = "{  "ZStackTemplateFormatVersion" : "2018-06-18",  "Description": "Example for create a group vm instance in zstack.",  "Parameters" : {    "imageUuid": {      "Type" : "String",      "Description": "Image Uuid, represents the image resource to startup one vm instance"    },    "instanceOfferingUuid": {      "Type": "String",      "DefaultValue" : "instanceoffering-123",      "Description": "The instance offering uuid"    },    "l3NetworkUuid": {      "Type": "String",      "Description": "The l3 network uuid"    },    "DiskOfferingUuid": {      "Type": "String",      "Description": "DiskOffering for empty disk"    },    "PrimaryStorageUuid": {      "Type": "String",      "Description": "primarystorage for initial disk"    },    "HostUuid": {      "Type": "String",      "Description": "host for initial disk"    }  },  "Resources" : {    "WebServer1": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DeletionPolicy": "Retain"    },    "WebServer2": {      "Type": "ZStack::Resource::VmInstance",      "Properties": {        "name" : "vm-2",        "imageUuid" : {"Ref": "imageUuid"},        "instanceOfferingUuid":  {"Ref": "instanceOfferingUuid"},        "l3NetworkUuids": [{"Ref": "l3NetworkUuid"}]      },      "DependsOn": [{"Ref": "WebServer1"}]    },    "EmptyVolume": {      "Type": "ZStack::Resource::DataVolume",      "Properties": {        "name" : "empty-volume",        "diskOfferingUuid": {"Ref": "DiskOfferingUuid"},        "primaryStorageUuid": {"Ref": "PrimaryStorageUuid"},        "systemTags": [{"Fn::Join": ["::", ["localStorage", "hostUuid", {"Ref": "HostUuid"}]]}]      },      "DependsOn": [{"Ref": "WebServer2"}]    },    "AttachDataVolumeToVm": {      "Type": "ZStack::Action::AttachDataVolumeToVm",      "Properties": {        "vmInstanceUuid": {"Fn::GetAtt" : ["WebServer1", "uuid"]},        "volumeUuid": {"Fn::GetAtt" : ["EmptyVolume", "uuid"]}      }    }  },  "Outputs": {    "VmInstance": {      "Description" : "print vm instance",      "Value" : {"Ref": "WebServer1"}    }  }}"
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdateResourceStackAction.Result res = action.call()
```

---

#### 查询资源栈(QueryResourceStack)



##### API请求

 URLs

```
GET zstack/v1/cloudformation/stack
GET zstack/v1/cloudformation/stack/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/stack?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/stack/071098a5d0b931758b2d96f3b947db06
```



可查询字段

运行CLI命令行工具，输入`QueryResourceStack`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "33c82809544f38e886ea0e9409772057",
      "name": "test",
      "description": "description",
      "version": "2018-06-18",
      "type": "zstack",
      "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}",
      "paramContent": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}",
      "status": "Created",
      "enableRollback": true
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventories | List | 详情参考[inventories] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

  #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| version | String | 堆栈版本 | 2.5.0 |
| type | String | 堆栈类型，默认为zstack | 2.5.0 |
| templateContent | String | 资堆栈内容，json字符串 | 2.5.0 |
| paramContent | String | 堆栈对应的参数列表，json字符串 | 2.5.0 |
| status | String | 堆栈状态 | 2.5.0 |
| reason | String | 堆栈创建失败的原因 | 2.5.0 |
| enableRollback | boolean | 堆栈创建失败时是否回滚 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
QueryResourceStackAction action = new QueryResourceStackAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryResourceStackAction.Result res = action.call();
```

 Python SDK

```
QueryResourceStackAction action = QueryResourceStackAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryResourceStackAction.Result res = action.call()
```

---

#### 获取资源栈内资源列表(GetResourceFromResourceStack)



##### API请求

 URLs

```
GET zstack/v1/cloudformation/stack/resources
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/stack/resources?uuid=37c961a530033ca1abd0650684c199db
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | query | 堆栈的UUID |  | 2.5.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | query | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "resources": [
    {
      "VmInstance": {
        "uuid": "70b885e0948b34a5831c75a457322b47",
        "name": "Test-VM",
        "description": "web server VM",
        "zoneUuid": "d35a2b4b992c3293ac1bc10096de6cb2",
        "clusterUuid": "8179e9b50398308aa0e2bf4eaf6f9712",
        "imageUuid": "b3aedde2f9ba32e7a4442a48860180c3",
        "hostUuid": "f2d9365120cf36ef961e8b522e0c319d",
        "lastHostUuid": "93b923aa43433196895dada30f9dc458",
        "instanceOfferingUuid": "61c0ba5753753a39b6c792ae6ef94915",
        "rootVolumeUuid": "7d45c0a312ce37ffacc75005da14dcae",
        "platform": "Linux",
        "defaultL3NetworkUuid": "e8604346d3d63ed790f0ba8d443af3d9",
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
            "uuid": "db23a9ba4d05362da2a58c51a9e50f65",
            "vmInstanceUuid": "70b885e0948b34a5831c75a457322b47",
            "usedIpUuid": "bf43c6c9ab453ed2be711573a1b959a0",
            "l3NetworkUuid": "e8604346d3d63ed790f0ba8d443af3d9",
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
            "uuid": "7d45c0a312ce37ffacc75005da14dcae",
            "name": "Root-Volume-For-VM-70b885e0948b34a5831c75a457322b47",
            "primaryStorageUuid": "657bf5b4fe7c31ae9a50dd703dbbf958",
            "vmInstanceUuid": "70b885e0948b34a5831c75a457322b47",
            "diskOfferingUuid": "1c10223d580b3b889d1e06e6ad94f398",
            "rootImageUuid": "b3aedde2f9ba32e7a4442a48860180c3",
            "installPath": "/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-7d45c0a312ce37ffacc75005da14dcae/7d45c0a312ce37ffacc75005da14dcae.qcow2",
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
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resources | List | 资源栈中的资源清单列表 | 2.5.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |



##### SDK示例

 Java SDK

```
GetResourceFromResourceStackAction action = new GetResourceFromResourceStackAction();
action.uuid = "37c961a530033ca1abd0650684c199db";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetResourceFromResourceStackAction.Result res = action.call();
```

 Python SDK

```
GetResourceFromResourceStackAction action = GetResourceFromResourceStackAction()
action.uuid = "37c961a530033ca1abd0650684c199db"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetResourceFromResourceStackAction.Result res = action.call()
```

---

#### 查询资源栈内事件列表(QueryEventFromResourceStack)



##### API请求

 URLs

```
GET zstack/v1/cloudformation/event
GET zstack/v1/cloudformation/event/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/event?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/event/e2e62c108bd0316ea404980ad56d4e6b
```



可查询字段

运行CLI命令行工具，输入`QueryEventFromResourceStack`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

##### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "description": "description",
      "action": "CreateVmInstanceAction",
      "content": "{\\n  \"l3NetworkUuids\": [\\n    \"1245de5c2d28454bb63e60575ec611cb\"\\n  ],\\n  \"name\": \"vm\",\\n  \"description\": \"test\\nenter\",\\n  \"systemTags\": [\\n    \"userdata::I2Nsb3VkLWNvbmZpZwp1c2VyczoKIC0gbmFtZTogcm9vdAogICBzaGVsbDogL2Jpbi9iYXNoCiAgIGdyb3Vwczogcm9vdAogICBzdWRvOiBbJ0FMTD0oQUxMKSBOT1BBU1NXRDpBTEwnXQogICBzc2gtYXV0aG9yaXplZC1rZXlzOgogICAgICAgLSBzc2gtcnNhIEFBQUFCM056YUMxeWMyRUFBQUFEQVFBQkFBQUJBUURmZ2dMQVRrM0prVW5uazczT1F6b1dOdzN4UFdtb1FNVjV6bUZWekEwYVFyWHZoT00xakk3bXJiLzdKVTJTK0t3Nm1xUFp5QVUvTWg3WEc5Smw4REh3NzJEZWlzOEVWYm8yanA5dkU1dHRmdXY0K3Rvb1o2Sm9STVNDOEdvcGlkd2RZYWw3Y3o2Vk9TYzgyWkFyR3VlVUxzMzFqWEUzclIxNk96V0tTRzFVL1RsbXA5V0Rlamxyd1dZMCtPZzA4WHBORWVjMnFkUnpvV3lHMHJ5WEpDbUQrdmxCSXErWnVMQVRMZWZQUk1uNGZOVlROM1JmZ0Q0aVEvR2Jaa3RJK1BwZ1ppRkdMVW0zVnJwMjNJckVzSTdjUkszV01lZ2RNSlVrQmFzR05STjB1d082OXNvM3lBbi9NZTZ0b1hmd2JOaC9MWEpPRkh2RFo5bmtscWwydnA0MyByb290QDEwLjAuMTIxLjE3NQp3cml0ZV9maWxlczoKIC0gcGF0aDogL3RtcC9aU3RhY2tfY29uZmlnCiAgIGNvbnRlbnQ6IHwKICAgICAgIEhlbGxvLHdvcmxkIQpob3N0bmFtZToga292ZW4tdGVzdApkaXNhYmxlX3Jvb3Q6IGZhbHNlCmNocGFzc3dkOgogIGxpc3Q6IHwKICAgICAgcm9vdDpwYXNzd29yZAogIGV4cGlyZTogRmFsc2UKcnVuY21kOgogLSBjdXJsIGh0dHA6Ly9zb2Z0LnZwc2VyLm5ldC9sbm1wL2xubXAxLjQudGFyLmd6IC1vIGxubXAxLjQudGFyLmd6ICYmIHRhciB6eGYgbG5tcDEuNC50YXIuZ3ogJiYgY2QgbG5tcDEuNCAmJiBlY2hvICIifC4vaW5zdGFsbC5zaCBsbm1w\"\\n  ],\\n  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",\\n  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\"\\n}",
      "resourceName": "WebServer1",
      "actionStatus": "Start",
      "stackUuid": "076e5c4edce23f09af5a842ffdfb0cb6"
    },
    {
      "id": 2.0,
      "description": "description",
      "action": "CreateVmInstanceAction",
      "content": "{\\n  \"inventory\": {\\n    \"uuid\": \"cebf83ef8ec04f7a9fbc80a54043b749\",\\n    \"name\": \"vm\",\\n    \"description\": \"test\\nenter\",\\n    \"zoneUuid\": \"78c2900f033344a485e953bc02bd0010\",\\n    \"clusterUuid\": \"a60243d5048c4a5c8cc6a35c0c1a3c97\",\\n    \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",\\n    \"hostUuid\": \"9b57690de23f449e99c8f0da311e568e\",\\n    \"lastHostUuid\": \"9b57690de23f449e99c8f0da311e568e\",\\n    \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",\\n    \"rootVolumeUuid\": \"17c96f79a28347128f1b147c3ef0d12b\",\\n    \"platform\": \"Linux\",\\n    \"defaultL3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",\\n    \"type\": \"UserVm\",\\n    \"hypervisorType\": \"KVM\",\\n    \"memorySize\": 1073741824,\\n    \"cpuNum\": 1,\\n    \"cpuSpeed\": 0,\\n    \"allocatorStrategy\": \"LeastVmPreferredHostAllocatorStrategy\",\\n    \"createDate\": \"Jun 21, 2018 11:31:46 AM\",\\n    \"lastOpDate\": \"Jun 21, 2018 11:31:47 AM\",\\n    \"state\": \"Running\",\\n    \"vmNics\": [\\n      {\\n        \"uuid\": \"a25592b3aced44dc889cede4f8368e52\",\\n        \"vmInstanceUuid\": \"cebf83ef8ec04f7a9fbc80a54043b749\",\\n        \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",\\n        \"ip\": \"10.75.0.98\",\\n        \"mac\": \"fa:91:99:e1:d1:00\",\\n        \"netmask\": \"255.0.0.0\",\\n        \"gateway\": \"10.0.0.1\",\\n        \"deviceId\": 0,\\n        \"createDate\": \"Jun 21, 2018 11:31:46 AM\",\\n        \"lastOpDate\": \"Jun 21, 2018 11:31:46 AM\"\\n      }\\n    ],\\n    \"allVolumes\": [\\n      {\\n        \"uuid\": \"17c96f79a28347128f1b147c3ef0d12b\",\\n        \"name\": \"ROOT-for-vm\",\\n        \"description\": \"Root volume for VM[uuid:cebf83ef8ec04f7a9fbc80a54043b749]\",\\n        \"primaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",\\n        \"vmInstanceUuid\": \"cebf83ef8ec04f7a9fbc80a54043b749\",\\n        \"rootImageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",\\n        \"installPath\": \"/Cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-17c96f79a28347128f1b147c3ef0d12b/17c96f79a28347128f1b147c3ef0d12b.qcow2\",\\n        \"type\": \"Root\",\\n        \"format\": \"qcow2\",\\n        \"size\": 1610612736,\\n        \"actualSize\": 1342308352,\\n        \"deviceId\": 0,\\n        \"state\": \"Enabled\",\\n        \"status\": \"Ready\",\\n        \"createDate\": \"Jun 21, 2018 11:31:46 AM\",\\n        \"lastOpDate\": \"Jun 21, 2018 11:31:46 AM\",\\n        \"isShareable\": false\\n      }\\n    ]\\n  }\\n}",
      "resourceName": "WebServer1",
      "actionStatus": "Finish",
      "stackUuid": "076e5c4edce23f09af5a842ffdfb0cb6"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventories | List | 详情参考[inventories] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

  #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| id | long | 事件id | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| action | String | 事件名称 | 2.5.0 |
| content | String | 事件参数列表 | 2.5.0 |
| resourceName | String | 资源名称 | 2.5.0 |
| actionStatus | String | 执行状态 | 2.5.0 |
| stackUuid | String | 堆栈UUID | 2.5.0 |
| duration | String | 事件持续时间 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
QueryEventFromResourceStackAction action = new QueryEventFromResourceStackAction();
action.conditions = asList("name=test");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryEventFromResourceStackAction.Result res = action.call();
```

 Python SDK

```
QueryEventFromResourceStackAction action = QueryEventFromResourceStackAction()
action.conditions = ["name=test"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryEventFromResourceStackAction.Result res = action.call()
```

---

#### 重启资源栈(RestartResourceStack)



##### API请求

 URLs

```
PUT zstack/v1/cloudformation/stack/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "restartResourceStack": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"restartResourceStack":{}}' http://localhost:8080/zstack/v1/cloudformation/stack/35b245eed7fd317d8c7f2b615d70ded1/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "88cf0d7fd9f8326081cbf268fe07566f",
    "name": "test",
    "description": "description",
    "version": "2018-06-18",
    "type": "zstack",
    "templateContent": "{  \"ZStackTemplateFormatVersion\" : \"2018-06-18\",  \"Description\": \"Example for create a group vm instance in zstack.\",  \"Parameters\" : {    \"imageUuid\": {      \"Type\" : \"String\",      \"Description\": \"Image Uuid, represents the image resource to startup one vm instance\"    },    \"instanceOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"The instance offering uuid\"    },    \"l3NetworkUuid\": {      \"Type\": \"String\",      \"Description\": \"The l3 network uuid\"    },    \"DiskOfferingUuid\": {      \"Type\": \"String\",      \"Description\": \"DiskOffering for empty disk\"    },    \"PrimaryStorageUuid\": {      \"Type\": \"String\",      \"Description\": \"primarystorage for initial disk\"    },    \"HostUuid\": {      \"Type\": \"String\",      \"Description\": \"host for initial disk\"    }  },  \"Resources\" : {    \"WebServer1\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DeletionPolicy\": \"Retain\"    },    \"WebServer2\": {      \"Type\": \"ZStack::Resource::VmInstance\",      \"Properties\": {        \"name\" : \"vm-2\",        \"imageUuid\" : {\"Ref\": \"imageUuid\"},        \"instanceOfferingUuid\":  {\"Ref\": \"instanceOfferingUuid\"},        \"l3NetworkUuids\": [{\"Ref\": \"l3NetworkUuid\"}]      },      \"DependsOn\": [{\"Ref\": \"WebServer1\"}]    },    \"EmptyVolume\": {      \"Type\": \"ZStack::Resource::DataVolume\",      \"Properties\": {        \"name\" : \"empty-volume\",        \"diskOfferingUuid\": {\"Ref\": \"DiskOfferingUuid\"},        \"primaryStorageUuid\": {\"Ref\": \"PrimaryStorageUuid\"},        \"systemTags\": [{\"Fn::Join\": [\"::\", [\"localStorage\", \"hostUuid\", {\"Ref\": \"HostUuid\"}]]}]      },      \"DependsOn\": [{\"Ref\": \"WebServer2\"}]    },    \"AttachDataVolumeToVm\": {      \"Type\": \"ZStack::Action::AttachDataVolumeToVm\",      \"Properties\": {        \"vmInstanceUuid\": {\"Fn::GetAtt\" : [\"WebServer1\", \"uuid\"]},        \"volumeUuid\": {\"Fn::GetAtt\" : [\"EmptyVolume\", \"uuid\"]}      }    }  },  \"Outputs\": {    \"VmInstance\": {      \"Description\" : \"print vm instance\",      \"Value\" : {\"Ref\": \"WebServer1\"}    }  }}",
    "paramContent": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}",
    "status": "Created",
    "enableRollback": true
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| inventory | ResourceStackInventory | 详情参考[inventory] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 2.5.0 |
| name | String | 资源名称 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| version | String | 资源栈版本 | 2.5.0 |
| type | String | 资源栈类型，默认为zstack | 2.5.0 |
| templateContent | String | 资源栈内容，json字符串 | 2.5.0 |
| paramContent | String | 资源栈对应的参数列表，json字符串 | 2.5.0 |
| status | String | 资源栈状态 | 2.5.0 |
| reason | String | 资源栈创建失败的原因 | 2.5.0 |
| enableRollback | Boolean | 资源栈创建失败时是否回滚 | 2.5.0 |
| createDate | Timestamp | 创建时间 | 2.5.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.5.0 |



##### SDK示例

 Java SDK

```
RestartResourceStackAction action = new RestartResourceStackAction();
action.uuid = "35b245eed7fd317d8c7f2b615d70ded1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RestartResourceStackAction.Result res = action.call();
```

 Python SDK

```
RestartResourceStackAction action = RestartResourceStackAction()
action.uuid = "35b245eed7fd317d8c7f2b615d70ded1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RestartResourceStackAction.Result res = action.call()
```

---

#### 检查资源栈模板参数(CheckStackTemplateParameters)



##### API请求

 URLs

```
POST zstack/v1/cloudformation/stack/check
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "type": "zstack",
    "uuid": "69c3bbde1b693995a5998361a7f017e7"
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
-X POST -d '{"params":{"type":"zstack","uuid":"69c3bbde1b693995a5998361a7f017e7"}}' http://localhost:8080/zstack/v1/cloudformation/stack/check
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| type (可选) | String | body(包含在**params**结构中) | 模板类型，默认为zstack | zstack | 2.5.0 |
| templateContent (可选) | String | body(包含在**params**结构中) | 模板内容，json字符串 |  | 2.5.0 |
| uuid | String | body(包含在**params**结构中) | 模板的UUID |  | 2.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 2.5.0 |
| userTags (可选) | List | body | 用户标签 |  | 2.5.0 |



##### API返回

 返回示例

```
{
  "parametes": [
    {
      "paramName": "imageUuid",
      "type": "String",
      "defaultValue": "ff1373b10ee93b15b347f7abfb4bb5b6",
      "description": "Image Uuid, represents the image resource to startup one vm instance",
      "resourceType": "Image"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.5.0 |
| parametes | List | 详情参考[parametes] | 2.5.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.5.0 |
| description | String | 错误的概要描述 | 2.5.0 |
| details | String | 错误的详细信息 | 2.5.0 |
| elaboration | String | 保留字段，默认为null | 2.5.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.5.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.5.0 |

 #parametes

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| paramName | String | 参数名称 | 2.5.0 |
| type | String | 参数类型 | 2.5.0 |
| defaultValue | String | 默认值 | 2.5.0 |
| description | String | 资源的详细描述 | 2.5.0 |
| noEcho | Boolean | 是否在输出中显示 | 2.5.0 |
| label | String | 前端显示名称 | 2.5.0 |
| constraintDescription | String | 若校验失败，返回内容 | 2.5.0 |
| resourceType | String | 若参数为ZStack Cloud资源，返回资源类型，否则返回null | 2.5.0 |



##### SDK示例

 Java SDK

```
CheckStackTemplateParametersAction action = new CheckStackTemplateParametersAction();
action.type = "zstack";
action.uuid = "69c3bbde1b693995a5998361a7f017e7";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CheckStackTemplateParametersAction.Result res = action.call();
```

Python SDK

```
CheckStackTemplateParametersAction action = CheckStackTemplateParametersAction()
action.type = "zstack"
action.uuid = "69c3bbde1b693995a5998361a7f017e7"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CheckStackTemplateParametersAction.Result res = action.call()
```

---

#### 从资源编排模板解析成资源关系图(DecodeStackTemplate)



##### API请求

 URLs

```
POST zstack/v1/cloudformation/stack/preview/resource
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "type": "zstack",
    "uuid": "7628ef91277e392ca996d6457537bb45",
    "parameters": "{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"
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
-X POST -d '{"params":{"type":"zstack","uuid":"7628ef91277e392ca996d6457537bb45","parameters":"{  \"imageUuid\": \"8fcfe758a7eb13118d7344a08ff790a5\",  \"instanceOfferingUuid\": \"751f662a32184933aff487f5c6e167a6\",  \"l3NetworkUuid\": \"1245de5c2d28454bb63e60575ec611cb\",  \"DiskOfferingUuid\": \"ad0b4ea4c747401c92a7c990f7375cf1\",  \"PrimaryStorageUuid\": \"06c35e7f42264a74abb5b828367169fe\",  \"HostUuid\": \"9b57690de23f449e99c8f0da311e568e\"}"}}' http://localhost:8080/zstack/v1/cloudformation/stack/preview/resource
```

 参数列表
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| type (可选) | String | body(包含在**params**结构中) | 类型 | zstack | 3.0.0 |
| templateContent (可选) | String | body(包含在**params**结构中) | 资源编排内容(Json) |  | 3.0.0 |
| uuid (可选) | String | body(包含在**params**结构中) | 资源编排模板的UUID，唯一标示该资源 |  | 3.0.0 |
| parameters (可选) | String | body(包含在**params**结构中) | 参数列表(Json) |  | 3.0.0 |
| systemTags (可选) | List | body | 系统标签 |  | 3.0.0 |
| userTags (可选) | List | body | 用户标签 |  | 3.0.0 |
| preparameters(可选) | String | body(包含在**params**结构中) | 预渲染参数列表(Json) |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "resources": [
    {
      "resourceName": "WebServer",
      "resourceType": "VmInstance",
      "deletePolicy": "Retain",
      "inDegree": [
        "l3",
        "instanceOfferingUuid",
        "addDns",
        "imageUuid"
      ],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Resource",
      "created": false,
      "mockFailed": false
    },
    {
      "resourceName": "l3",
      "resourceType": "L3Network",
      "inDegree": [
        "l2NetworkUuid"
      ],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Resource",
      "created": false,
      "mockFailed": false
    },
    {
      "resourceName": "addIpRange",
      "inDegree": [
        "l3"
      ],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Action",
      "created": false,
      "mockFailed": false
    },
    {
      "resourceName": "addDns",
      "inDegree": [
        "l3",
        "addIpRange"
      ],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Action",
      "created": false,
      "mockFailed": false
    },
    {
      "resourceName": "imageUuid",
      "resourceType": "Image",
      "inDegree": [],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Resource",
      "created": true,
      "mockFailed": false
    },
    {
      "resourceName": "instanceOfferingUuid",
      "resourceType": "InstanceOffering",
      "inDegree": [],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Resource",
      "created": true,
      "mockFailed": false
    },
    {
      "resourceName": "l2NetworkUuid",
      "resourceType": "L2Network",
      "inDegree": [],
      "properties": {
        "uuid": "d55161ef863942d8a53a4f8448074749"
      },
      "type": "Resource",
      "created": true,
      "mockFailed": false
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.0.0 |
| resources | List | 详情参考[resources] | 3.0.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.0.0 |
| description | String | 错误的概要描述 | 3.0.0 |
| details | String | 错误的详细信息 | 3.0.0 |
| elaboration | String | 保留字段，默认为null | 3.0.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.0.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.0.0 |

 #resources

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourceName | String | 资源编排模板中的资源名称 | 3.0.0 |
| resourceType | String | ZStack Cloud中的资源类型 | 3.0.0 |
| deletePolicy | String | 删除策略 | 3.0.0 |
| description | String | 资源编排模板中的资源描述 | 3.0.0 |
| inDegree | Set | 依赖的资源列表 | 3.0.0 |
| action | String | 后续的操作行为 | 3.0.0 |
| properties | Map | 操作参数 | 3.0.0 |
| results | Object | 操作完成后的结果，若还未执行操作，则为空 | 3.0.0 |
| created | boolean | 是否己创建 | 3.0.0 |
| mockFailed | boolean | 测试用于mock失败 | 3.0.0 |
| type | ResourceType | 详情参考[type] | 3.0.0 |

 #type

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源类型(Resource或者Action) | 3.0.0 |
| ordinal | int |  | 3.0.0 |



##### SDK示例

 Java SDK

```
DecodeStackTemplateAction action = new DecodeStackTemplateAction();
action.type = "zstack";
action.uuid = "7628ef91277e392ca996d6457537bb45";
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DecodeStackTemplateAction.Result res = action.call();
```

 Python SDK

```
DecodeStackTemplateAction action = DecodeStackTemplateAction()
action.type = "zstack"
action.uuid = "7628ef91277e392ca996d6457537bb45"
action.parameters = "{  "imageUuid": "8fcfe758a7eb13118d7344a08ff790a5",  "instanceOfferingUuid": "751f662a32184933aff487f5c6e167a6",  "l3NetworkUuid": "1245de5c2d28454bb63e60575ec611cb",  "DiskOfferingUuid": "ad0b4ea4c747401c92a7c990f7375cf1",  "PrimaryStorageUuid": "06c35e7f42264a74abb5b828367169fe",  "HostUuid": "9b57690de23f449e99c8f0da311e568e"}"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DecodeStackTemplateAction.Result res = action.call()
```

---

#### 获取资源对应的资源栈(GetResourceStackFromResource)



##### API请求

 URLs

```
GET zstack/v1/cloudformation/resources/stack
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/resources/stack?resourceUuid=fad8b8f55961311a82b82a61d8b67fc5
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuid | String | query | 资源UUID |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "stack": {
    "stackUuid": "4700be6752c037b69c74bd06eedf0308"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| stack | Map | 资源栈 | 3.9.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |

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
GetResourceStackFromResourceAction action = new GetResourceStackFromResourceAction();
action.resourceUuid = "fad8b8f55961311a82b82a61d8b67fc5";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetResourceStackFromResourceAction.Result res = action.call();
```

 Python SDK

```
GetResourceStackFromResourceAction action = GetResourceStackFromResourceAction()
action.resourceUuid = "fad8b8f55961311a82b82a61d8b67fc5"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetResourceStackFromResourceAction.Result res = action.call()
```

---

#### 获取资源栈中云主机端口监控状态(GetResourceStackVmStatus)



##### API请求

 URLs

```
GET zstack/v1/cloudformation/stack/monitor/vmstatus
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/cloudformation/stack/monitor/vmstatus?uuid=8f0e4af072913507a434a2c7a8bd1d0a
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | query | 资源的UUID，唯一标示该资源 |  | 3.9.0 |
| systemTags (可选) | List | query | 系统标签 |  | 3.9.0 |
| userTags (可选) | List | query | 用户标签 |  | 3.9.0 |



##### API返回

 返回示例

```
{
  "portStatus": {}
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| portStatus | Map | 端口监控状态(open / initialize / close) | 3.9.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.9.0 |

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
GetResourceStackVmStatusAction action = new GetResourceStackVmStatusAction();
action.uuid = "8f0e4af072913507a434a2c7a8bd1d0a";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetResourceStackVmStatusAction.Result res = action.call();
```

 Python SDK

```
GetResourceStackVmStatusAction action = GetResourceStackVmStatusAction()
action.uuid = "8f0e4af072913507a434a2c7a8bd1d0a"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetResourceStackVmStatusAction.Result res = action.call()
```

---

#### 添加资源栈中云主机端口监控(AddResourceStackVmPortMonitor)



##### API请求

 URLs

```
POST zstack/v1/cloudformation/stack/monitor/addvm
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "stackUuid": "26386ffc6d43365d87aef19fdd32c6a1",
    "vmInstanceUuid": "29ddc109dd983b7fb74a7988ebbed12d",
    "port": 22.0
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
-X POST -d '{"params":{"stackUuid":"26386ffc6d43365d87aef19fdd32c6a1","vmInstanceUuid":"29ddc109dd983b7fb74a7988ebbed12d","port":22.0}}' http://localhost:8080/zstack/v1/cloudformation/stack/monitor/addvm
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| stackUuid (可选) | String | body(包含在**params**结构中) | 资源栈UUID |  | 3.9.0 |
| vmInstanceUuid | String | body(包含在**params**结构中) | 云主机UUID |  | 3.9.0 |
| port | Integer | body(包含在**params**结构中) | 端口号 |  | 3.9.0 |
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
AddResourceStackVmPortMonitorAction action = new AddResourceStackVmPortMonitorAction();
action.stackUuid = "26386ffc6d43365d87aef19fdd32c6a1";
action.vmInstanceUuid = "29ddc109dd983b7fb74a7988ebbed12d";
action.port = 22.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AddResourceStackVmPortMonitorAction.Result res = action.call();
```

 Python SDK

```
AddResourceStackVmPortMonitorAction action = AddResourceStackVmPortMonitorAction()
action.stackUuid = "26386ffc6d43365d87aef19fdd32c6a1"
action.vmInstanceUuid = "29ddc109dd983b7fb74a7988ebbed12d"
action.port = 22.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AddResourceStackVmPortMonitorAction.Result res = action.call()
```

---

#### 删除资源栈中云主机端口监控(DeleteResourceStackVmPortMonitor)



##### API请求

 URLs

```
DELETE zstack/v1/cloudformation/stack/monitor/delvm
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/cloudformation/stack/monitor/delvm?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| stackUuid (可选) | String | body | 资源栈UUID |  | 3.9.0 |
| vmInstanceUuid | String | body | 云主机UUID |  | 3.9.0 |
| port (可选) | Integer | body | 端口号 |  | 3.9.0 |
| deleteMode (可选) | String | body | 删除模式 |  | 3.9.0 |
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
DeleteResourceStackVmPortMonitorAction action = new DeleteResourceStackVmPortMonitorAction();
action.stackUuid = "2683832bb7d53245acd3012da44e7fe6";
action.vmInstanceUuid = "ffa8ab9746de3edcb1bc1245eef8868d";
action.port = 22.0;
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeleteResourceStackVmPortMonitorAction.Result res = action.call();
```

 Python SDK

```
DeleteResourceStackVmPortMonitorAction action = DeleteResourceStackVmPortMonitorAction()
action.stackUuid = "2683832bb7d53245acd3012da44e7fe6"
action.vmInstanceUuid = "ffa8ab9746de3edcb1bc1245eef8868d"
action.port = 22.0
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeleteResourceStackVmPortMonitorAction.Result res = action.call()
```
