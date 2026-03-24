# 计费管理相关接口 - 运营管理

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/6.2.html*

---

## 计费管理相关接口

---

## 创建资源价格(CreateResourcePrice)



### API请求

 URLs

```
POST zstack/v1/billings/prices
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "resourceName": "cpu",     "timeUnit": "s",     "price": 100.0,     "dateInLong": 0.0   },   "systemTags": [],   "userTags": [] }
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth cc882c434d65428091449452ab5eb2e3" \ -X POST -d '{"params":{"resourceName":"cpu","timeUnit":"s","price":100.0,"dateInLong":0.0}}' \ http://localhost:8080/zstack/v1/billings/prices
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
| resourceName | String | body(包含在**params**结构中) | 资源名称 | cpu memory rootvolume datavolume snapshot gpu pubIpVmNicBandwidthOut pubIpVmNicBandwidthIn pubIpVipBandwidthOut pubIpVipBandwidthIn | 0.6 |
| resourceUnit (可选) | String | body(包含在**params**结构中) | 资源计费单元 | 可选值根据resourceName而定 | 0.6 |
| timeUnit | String | body(包含在**params**结构中) | 计费时间单元 |  | 0.6 |
| price | double | body(包含在**params**结构中) | 单位价格 |  | 0.6 |
| accountUuid (可选) | String | body(包含在**params**结构中) | 账户UUID |  | 0.6 |
| dateInLong (可选) | Long | body(包含在**params**结构中) | 长整型时刻 |  | 0.6 |
| tableUuid (可选) | String | body(包含在**params**结构中) | 价目表UUID |  | 3.7.2 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`gpuOfferingUuid::UUID`
  - 例如：`gpuOfferingUuid::634b48a7bca139d9944a0f95b0c2dddf`
- 例如：`gpuOfferingUuid::634b48a7bca139d9944a0f95b0c2dddf`
  - 选项格式为：`priceUserConfig::xxx`，XXX要求JSON字符串。
- 选项格式为：`priceUserConfig::xxx`，XXX要求JSON字符串。


> **注意:** 说明:



### API返回

 返回示例

```
{   "inventory": {     "uuid": "437ade61b17e4c658844fdacfb0fc6de",     "resourceName": "Volume",     "resourceUnit": "1",     "timeUnit": "s",     "price": 2.0   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PriceInventory | 详情参考[inventory] | 0.6 |

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
| resourceName | String | 资源名称 | 0.6 |
| resourceUnit | String | 资源计费单元 | 0.6 |
| timeUnit | String | 计费时间单元 | 0.6 |
| price | Double | 价格 | 0.6 |
| dateInLong | Long | 以长整型记录的时刻 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| tableUuid | String | 价目表UUID | 3.7.1 |
| pciDeviceOfferings | List | 详情参考[pciDeviceOfferings] | 2.4 |

 #pciDeviceOfferings

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| priceUuid | String |  | 2.4 |
| pciDeviceOfferingUuid | String |  | 2.4 |
| createDate | Timestamp | 创建时间 | 2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4 |



### SDK示例

 Java SDK

```
CreateResourcePriceAction action = new CreateResourcePriceAction(); action.resourceName = "cpu"; action.timeUnit = "s"; action.price = 100.0; action.dateInLong = 0.0; action.sessionId = "1360cf066fd547b9ae2d8f32beba717f"; CreateResourcePriceAction.Result res = action.call();
```

 Python SDK

```
CreateResourcePriceAction action = CreateResourcePriceAction() action.resourceName = "cpu" action.timeUnit = "s" action.price = 100.0 action.dateInLong = 0.0 action.sessionId = "47ca95d22d8645ef8aef8dd0110cbd92" CreateResourcePriceAction.Result res = action.call()
```

---

## 删除资源价格(DeleteResourcePrice)



### API请求

 URLs

```
DELETE zstack/v1/billings/prices/{uuid}
```

 Headers

```
OAuth: the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "OAuth: 5332b02080a141cc961457ad3b090fe4" \ -X DELETE http://localhost:8080/zstack/v1/billings/prices/a5c5bd6198824d89894cdd10969843ff
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回

 该API成功时返回一个空的JSON结构**{}**，出错时返回的JSON结构包含一个error字段，例如：

```
{     "error": {         "code": "SYS.1001",         "description": "A message or a operation timeout",         "details": "Create VM on KVM timeout after 300s"     } }
```



### SDK示例

 Java SDK

```
DeleteResourcePriceAction action = new DeleteResourcePriceAction(); action.uuid = "d56a8d3e103a3ae997f6daa087fa3ea8"; action.cutoffPrice = false; action.deleteMode = "Permissive"; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; DeleteResourcePriceAction.Result res = action.call();
```

 Python SDK

```
DeleteResourcePriceAction action = DeleteResourcePriceAction() action.uuid = "d56a8d3e103a3ae997f6daa087fa3ea8" action.cutoffPrice = false action.deleteMode = "Permissive" action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" DeleteResourcePriceAction.Result res = action.call()
```

---

## 修改资源价格(UpdateResourcePrice)



### API请求

 URLs

```
PUT zstack/v1/billings/prices/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "updateResourcePrice": {     "setEndDateInLongBaseOnCurrentTime": false   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X PUT -d '{"updateResourcePrice":{"setEndDateInLongBaseOnCurrentTime":false}}' http://localhost:8080/zstack/v1/billings/prices/bed31eb3ba76325ba6a1cef1a64c97a3/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源价格UUID |  | 3.7.2 |
| endDateInLong (可选) | Long | body(包含在**updateResourcePrice**结构中) | 资源价格生效截止时间 |  | 3.7.2 |
| setEndDateInLongBaseOnCurrentTime (可选) | boolean | body(包含在**updateResourcePrice**结构中) | 设置资源价格生效截止时间为当前时间 |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "d7d2b639707c3e158f9f94cdfff8dc88",     "resourceName": "Volume",     "resourceUnit": "1",     "timeUnit": "s",     "price": 2.0,     "dateInLong": 1.510669257141E12,     "endDateInLong": 1.511029257141E12   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventory | PriceInventory | 详情参考[inventory] | 3.7.2 |

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
| resourceName | String | 资源名称 | 0.6 |
| resourceUnit | String | 资源计费单元 | 0.6 |
| timeUnit | String | 计费时间单元 | 0.6 |
| price | Double | 价格 | 0.6 |
| dateInLong | Long | 以长整型记录的时刻 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| tableUuid | String | 价目表UUID | 3.7.2 |
| pciDeviceOfferings | List | 详情参考[pciDeviceOfferings] | 2.4 |

 #pciDeviceOfferings

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| priceUuid | String |  | 2.4 |
| pciDeviceOfferingUuid | String |  | 2.4 |
| createDate | Timestamp | 创建时间 | 2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4 |



### SDK示例

 Java SDK

```
UpdateResourcePriceAction action = new UpdateResourcePriceAction(); action.uuid = "bed31eb3ba76325ba6a1cef1a64c97a3"; action.setEndDateInLongBaseOnCurrentTime = false; action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"; UpdateResourcePriceAction.Result res = action.call();
```

 Python SDK

```
UpdateResourcePriceAction action = UpdateResourcePriceAction() action.uuid = "bed31eb3ba76325ba6a1cef1a64c97a3" action.setEndDateInLongBaseOnCurrentTime = false action.sessionId = "b86c9016b4f24953a9edefb53ca0678c" UpdateResourcePriceAction.Result res = action.call()
```

---

### 查询资源价格(QueryResourcePrice)



#### API请求

 URLs

```
GET zstack/v1/billings/prices
GET zstack/v1/billing/prices/{uuid}
```

 Headers

```
OAuth: the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "OAuth: 0898d6895f274f83bc9d7fe85c629fc2" \
-X GET http://localhost:8080/zstack/v1/billings/prices?q=uuid=e7a8c15058f2450dbae8a52bc3a53163
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "OAuth: 1e19b0c2877343e8b5cc27ba801cea5b" \
-X GET http://localhost:8080/zstack/v1/billing/prices/9b1cb8fcb98a4a77b8d1b8f5c71f3ea0
```



可查询字段

运行CLI命令行工具，输入`QueryResourcePrice`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "127da3fe2612443187bdb5cc1c0a1b93",
      "resourceName": "Volume",
      "resourceUnit": "1",
      "timeUnit": "s",
      "price": 2.0
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
| resourceName | String | 资源名称 | 0.6 |
| resourceUnit | String | 资源计费单元 | 0.6 |
| timeUnit | String | 计费时间单元 | 0.6 |
| price | Double | 价格 | 0.6 |
| dateInLong | Long | 以长整型记录的时刻 | 0.6 |
| tableuuid | String | 价目表UUID | 3.7.2 |
| pciDeviceOfferings | List | 详情参考[pciDeviceOfferings] | 2.4 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |

  #pciDeviceOfferings

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| priceUuid | String |  | 2.4 |
| pciDeviceOfferingUuid | String |  | 2.4 |
| createDate | Timestamp | 创建时间 | 2.4 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.4 |



#### SDK示例

 Java SDK

```
QueryResourcePriceAction action = new QueryResourcePriceAction();
action.conditions = asList("uuid=9f754355ea3147fe9e132e9e387565fc");
action.sessionId = "487ff79fdb52498ba0ebaf0825d09277";
QueryResourcePriceAction.Result res = action.call();
```

 Python SDK

```
QueryResourcePriceAction action = QueryResourcePriceAction()
action.conditions = ["uuid=1c26229f970f4fe599c34d56bc78b578"]
action.sessionId = "30759bcfee93462eb88cf7fc88f3a364"
QueryResourcePriceAction.Result res = action.call()
```

---

### 计算账户花费(CalculateAccountSpending)



#### API请求

 URLs

```
PUT zstack/v1/billings/accounts/{accountUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "calculateAccountSpending": {
    "dateStart": 0.0,
    "dateEnd": 1.49448017929E12
  },
  "systemTags": [],
  "userTags": []
}
```



> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b0422700ba91425aa234b7ad4d70e8ce" \
-X PUT -d '{"calculateAccountSpending":{"dateStart":0.0,"dateEnd":1.510669257141E12}}' \
http://localhost:8080/zstack/v1/billings/accounts/64df7cc87c583f069400e5184175d025/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | body(包含在**calculateAccountSpending**结构中) | 账户UUID |  | 0.6 |
| dateStart (可选) | Long | body(包含在**calculateAccountSpending**结构中) | 起始日期 |  | 0.6 |
| dateEnd (可选) | Long | body(包含在**calculateAccountSpending**结构中) | 结束日期 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "total": 200.0,
  "spending": [
    {
      "spending": 0.0,
      "details": []
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| total | double | 总额 | 0.6 |
| success | boolean | 成功标志 | 0.6 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| spending | List | 详情参考[spending] | 0.6 |
| error | ErrorCode | 详情参考[error] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #spending

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| spendingType | String | 花费类型 | 0.6 |
| spending | double | 花费总额 | 0.6 |
| dateStart | Long | 计费起始日期 | 0.6 |
| dateEnd | Long | 计费结束日期 | 0.6 |
| details | List | 详情参考[details] | 0.6 |

 #details

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| resourceUuid | String | 资源UUID | 0.6 |
| resourceName | String | 资源名称 | 0.6 |
| spending | double | 花费 | 0.6 |
| type | String | 类型 | 0.6 |



#### SDK示例

 Java SDK

```
CalculateAccountSpendingAction action = new CalculateAccountSpendingAction();
action.accountUuid = "b9578ee43e1745aaaddf96b2286d8055";
action.dateStart = 0.0;
action.dateEnd = 1.494480179344E12;
action.sessionId = "21b88c2399054090b13ac0b9fe067f75";
CalculateAccountSpendingAction.Result res = action.call();
```

 Python SDK

```
CalculateAccountSpendingAction action = CalculateAccountSpendingAction()
action.accountUuid = "881b1c4a85bf43f39acc29d42a9c6cd6"
action.dateStart = 0.0
action.dateEnd = 1.494480179344E12
action.sessionId = "a5ae231847c14c26b62bed6e878d6c60"
CalculateAccountSpendingAction.Result res = action.call()
```

---

### 查询账户账单(QueryAccountBilling)



#### API请求

 URLs

```
GET zstack/v1/billing/billings
GET zstack/v1/billing/billings/{id}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/billing/billings?q=accountUuid=3897826bada53c65bab2298c3adf69ea
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/billing/billings/{id}?q=accountUuid=e0936c43a701362189fa71031084d9dd
```



可查询字段 运行CLI命令行工具，输入QueryAccountBilling并按Tab键查看所有可查询字段以及可跨表查询的资源名。

> **注意:** 说明: QueryAccountBilling默认查询所有账单，如需按时间查询账单，请使用CalculateAccountSpending。



#### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "billingType": "DataVolume",
      "accountUuid": "9d0795db99e93ed49f8bc433dd54cf0e",
      "resourceUuid": "5fd7d24b821139eeaec591fc351ffd51",
      "spending": 100.0,
      "startTime": 1.559017175886E12,
      "endTime": 1.559017375886E12,
      "hypervisorType": "kvm",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.0 |
| inventories | List | 详情参考[inventories] | 3.7.0 |

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
| id | long | 账单ID | 3.7.0 |
| billingType | String | 账单类型 | 3.7.0 |
| accountUuid | String | 账户UUID | 3.7.0 |
| resourceUuid | String | 资源UUID | 3.7.0 |
| resourceName | String | 资源名称 | 3.7.0 |
| spending | double | 费用 | 3.7.0 |
| startTime | long | 资源计费开始时间 | 3.7.0 |
| endTime | long | 资源计费结束时间 | 3.7.0 |
| hypervisorType | String | 资源虚拟化类型 | 3.7.0 |
| createDate | Timestamp | 创建时间 | 3.7.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.0 |



#### SDK示例

 Java SDK

```
QueryAccountBillingAction action = new QueryAccountBillingAction();
action.conditions = asList("accountUuid=e2ce4c1abea43ac68927e62c31039a81");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAccountBillingAction.Result res = action.call();
```

 Python SDK

```
QueryAccountBillingAction action = QueryAccountBillingAction()
action.conditions = ["accountUuid=9cbd77ea314a3308bfabed7f7b9c1d1c"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAccountBillingAction.Result res = action.call()
```

---

### 创建计费价目(CreatePriceTable)



#### API请求

 URLs

```
POST zstack/v1/billings/price-tables
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "name": "table_1",
    "prices": [
      {
        "resourceName": "cpu",
        "timeUnit": "s",
        "price": 10.0
      }
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
-X POST -d '{"params":{"name":"table_1","prices":[{"resourceName":"cpu","timeUnit":"s","price":10.0}]}}' http://localhost:8080/zstack/v1/billings/price-tables
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在**params**结构中) | 价目表名称 |  | 3.7.2 |
| description (可选) | String | body(包含在**params**结构中) | 价目表的详细描述 |  | 3.7.2 |
| prices | List | body(包含在**params**结构中) |  |  | 3.7.2 |
| resourceUuid (可选) | String | body(包含在**params**结构中) | 价目表UUID |  | 3.7.2 |
| tagUuids (可选) | List | body(包含在**params**结构中) | 标签UUID列表 |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5a30b2b4c9283fb5ab1971e883d1f315",
    "name": "price table",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventory | PriceTableInventory | 详情参考[inventory] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.2 |
| name | String | 价目表名称 | 3.7.2 |
| description | String | 价目表描述 | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |



#### SDK示例

 Java SDK

```
CreatePriceTableAction action = new CreatePriceTableAction();
action.name = "table_1";
action.prices = asList([resourceName:cpu, timeUnit:s, price:10.0]);
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
CreatePriceTableAction.Result res = action.call();
```

 Python SDK

```
CreatePriceTableAction action = CreatePriceTableAction()
action.name = "table_1"
action.prices = [[resourceName:cpu, timeUnit:s, price:10.0]]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
CreatePriceTableAction.Result res = action.call()
```

---

### 删除计费价目(DeletePriceTable)



#### API请求

 URLs

```
DELETE zstack/v1/billings/price-tables/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/billings/price-tables/81bd5aa16d203ca39bc5e79e2bbc6de2
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 价目表UUID |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

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



#### SDK示例

 Java SDK

```
DeletePriceTableAction action = new DeletePriceTableAction();
action.uuid = "81bd5aa16d203ca39bc5e79e2bbc6de2";
action.deleteMode = "Permissive";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DeletePriceTableAction.Result res = action.call();
```

 Python SDK

```
DeletePriceTableAction action = DeletePriceTableAction()
action.uuid = "81bd5aa16d203ca39bc5e79e2bbc6de2"
action.deleteMode = "Permissive"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DeletePriceTableAction.Result res = action.call()
```

---

### 修改计费价目(UpdatePriceTable)



#### API请求

 URLs

```
PUT zstack/v1/billings/price-tables/{uuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updatePriceTable": {
    "name": "table_1"
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
-X PUT -d '{"updatePriceTable":{"name":"table_1"}}' http://localhost:8080/zstack/v1/billings/price-tables/f1bb8cafaf1c34608582027ee823ea96/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 价目表UUID |  | 3.7.2 |
| name (可选) | String | body(包含在**updatePriceTable**结构中) | 价目表名称 |  | 3.7.2 |
| description (可选) | String | body(包含在**updatePriceTable**结构中) | 价目表描述 |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "c52a6ec9d6a033daa5305a19f13448ac",
    "name": "price table",
    "createDate": "Nov 14, 2017 10:20:57 PM",
    "lastOpDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventory | PriceTableInventory | 详情参考[inventory] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.2 |
| name | String | 价目表名称 | 3.7.2 |
| description | String | 价目表描述 | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |



#### SDK示例

 Java SDK

```
UpdatePriceTableAction action = new UpdatePriceTableAction();
action.uuid = "f1bb8cafaf1c34608582027ee823ea96";
action.name = "table_1";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
UpdatePriceTableAction.Result res = action.call();
```

 Python SDK

```
UpdatePriceTableAction action = UpdatePriceTableAction()
action.uuid = "f1bb8cafaf1c34608582027ee823ea96"
action.name = "table_1"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
UpdatePriceTableAction.Result res = action.call()
```

---

### 查询计费价目(QueryPriceTable)



#### API请求

 URLs

```
GET zstack/v1/billings/price-tables
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/billings/price-tables?q=uuid=2cc88ae55ad13572a5ab9022a204a7af
```



可查询字段

运行CLI命令行工具，输入QueryPriceTable并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "3e78d076698438a6a68aa2eabdde8adf",
      "name": "price table",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventories | List | 详情参考[inventories] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.2 |
| name | String | 价目表名称 | 3.7.2 |
| description | String | 价目表描述 | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |



#### SDK示例

 Java SDK

```
QueryPriceTableAction action = new QueryPriceTableAction();
action.conditions = asList("uuid=86b5cece6d0f3534a0a995ab8e60289f");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryPriceTableAction.Result res = action.call();
```

 Python SDK

```
QueryPriceTableAction action = QueryPriceTableAction()
action.conditions = ["uuid=ab7f7715bdeb3a04964790c3fdfac20d"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryPriceTableAction.Result res = action.call()
```

---

### 为账户/项目指定计费价目(AttachPriceTableToAccount)



#### API请求

 URLs

```
POST zstack/v1/billings/price-tables/{tableUuid}/accounts/{accountUuid}
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
-X POST -d '{"params":{}}' http://localhost:8080/zstack/v1/billings/price-tables/e32698fcb57d34d68bbf1c4963af95a0/accounts/f354e135276d3e77a46f47c5c0e47b1a
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | url | 账户UUID |  | 3.7.2 |
| tableUuid | String | url | 价目表UUID |  | 3.7.2 |
| tagUuids (可选) | List | body | 标签UUID列表 |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "8d73a258e3973399a8bcfa2164604705"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| success | boolean |  | 4.7.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventory | PriceTableInventory | 详情参考[inventory] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.2 |
| name | String | 价目表名称 | 3.7.2 |
| description | String | 价目表描述 | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |



#### SDK示例

 Java SDK

```
AttachPriceTableToAccountAction action = new AttachPriceTableToAccountAction();
action.accountUuid = "f354e135276d3e77a46f47c5c0e47b1a";
action.tableUuid = "e32698fcb57d34d68bbf1c4963af95a0";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
AttachPriceTableToAccountAction.Result res = action.call();
```

 Python SDK

```
AttachPriceTableToAccountAction action = AttachPriceTableToAccountAction()
action.accountUuid = "f354e135276d3e77a46f47c5c0e47b1a"
action.tableUuid = "e32698fcb57d34d68bbf1c4963af95a0"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
AttachPriceTableToAccountAction.Result res = action.call()
```

---

### 取消账户/项目关联的计费价目(DetachPriceTableFromAccount)



#### API请求

 URLs

```
DELETE zstack/v1/billings/price-tables/{tableUuid}/accounts/{accountUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X DELETE http://localhost:8080/zstack/v1/billings/price-tables/c27d5d1d46ce3b548ec0755d0b354084/accounts/5b81c2a13b2f319ea97a4568575b0266
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | url | 账户UUID |  | 3.7.2 |
| tableUuid | String | url | 价目表UUID |  | 3.7.2 |
| tagUuids (可选) | List | body | 标签UUID列表 |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "34cefcfb3c8e3b97ae94d71558361b25"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventory | PriceTableInventory | 详情参考[inventory] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.2 |
| name | String | 价目表名称 | 3.7.2 |
| description | String | 价目表描述 | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |



#### SDK示例

 Java SDK

```
DetachPriceTableFromAccountAction action = new DetachPriceTableFromAccountAction();
action.accountUuid = "5b81c2a13b2f319ea97a4568575b0266";
action.tableUuid = "c27d5d1d46ce3b548ec0755d0b354084";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
DetachPriceTableFromAccountAction.Result res = action.call();
```

 Python SDK

```
DetachPriceTableFromAccountAction action = DetachPriceTableFromAccountAction()
action.accountUuid = "5b81c2a13b2f319ea97a4568575b0266"
action.tableUuid = "c27d5d1d46ce3b548ec0755d0b354084"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
DetachPriceTableFromAccountAction.Result res = action.call()
```

---

### 修改账户/项目计费价目(ChangeAccountPriceTableBinding)



#### API请求

 URLs

```
PUT zstack/v1/billings/price-tables/{tableUuid}/accounts/{accountUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "changeAccountPriceTableBinding": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"changeAccountPriceTableBinding":{}}' http://localhost:8080/zstack/v1/billings/price-tables/ca0f8310310e351f8590e4d9f03106bc/accounts/082289755ebe363daa52eb2aa10cbb01
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | url | 账户UUID |  | 3.7.2 |
| tableUuid | String | url | 价目表UUID |  | 3.7.2 |
| resourceUuid (可选) | String | body(包含在**changeAccountPriceTableBinding**结构中) |  |  | 3.7.2 |
| tagUuids (可选) | List | body(包含在**changeAccountPriceTableBinding**结构中) | 标签UUID列表 |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5e642eb0820b312086f0b084d656c0cf"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventory | PriceTableInventory | 详情参考[inventory] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #inventory

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| uuid | String | 资源的UUID，唯一标示该资源 | 3.7.2 |
| name | String | 价目表名称 | 3.7.2 |
| description | String | 价目表描述 | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |



#### SDK示例

 Java SDK

```
ChangeAccountPriceTableBindingAction action = new ChangeAccountPriceTableBindingAction();
action.accountUuid = "082289755ebe363daa52eb2aa10cbb01";
action.tableUuid = "ca0f8310310e351f8590e4d9f03106bc";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
ChangeAccountPriceTableBindingAction.Result res = action.call();
```

 Python SDK

```
ChangeAccountPriceTableBindingAction action = ChangeAccountPriceTableBindingAction()
action.accountUuid = "082289755ebe363daa52eb2aa10cbb01"
action.tableUuid = "ca0f8310310e351f8590e4d9f03106bc"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
ChangeAccountPriceTableBindingAction.Result res = action.call()
```

---

### 获得项目/账户使用的计费价目(GetAccountPriceTableRef)



#### API请求

 URLs

```
GET zstack/v1/billings/price-tables/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/billings/price-tables/refs?tableUuid=691136f22ea733b8ae6e90dfe42bf38c
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| tableUuid (可选) | String | query | 价目表UUID |  | 3.7.2 |
| accountUuid (可选) | String | query | 账户UUID |  | 3.7.2 |
| systemTags (可选) | List | query |  |  | 3.7.2 |
| userTags (可选) | List | query |  |  | 3.7.2 |



#### API返回

 返回示例

```
{
  "accountUuids": [
    "67fcb4c5fa0c36adba411d7258d4557e",
    "7a9c5437f5393002a8c8c44bd218e41a",
    "b11fc0267dbf3c5486accb86c79aca01"
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| accountUuids | List | 账号UUID列表 | 3.7.2 |
| tableUuid | String | 价目表UUID | 3.7.2 |
| success | boolean |  | 3.7.2 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| error | ErrorCode | 详情参考[error] | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |



#### SDK示例

 Java SDK

```
GetAccountPriceTableRefAction action = new GetAccountPriceTableRefAction();
action.tableUuid = "691136f22ea733b8ae6e90dfe42bf38c";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetAccountPriceTableRefAction.Result res = action.call();
```

 Python SDK

```
GetAccountPriceTableRefAction action = GetAccountPriceTableRefAction()
action.tableUuid = "691136f22ea733b8ae6e90dfe42bf38c"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetAccountPriceTableRefAction.Result res = action.call()
```

---

### 查询账户/项目与计费价目的关联关系(QueryAccountPriceTableRef)



#### API请求

 URLs

```
GET zstack/v1/accounts/price-tables/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/accounts/price-tables/refs?q=uuid=491c8b047d073a42ab44213f726fddbf
```



可查询字段

运行CLI命令行工具，输入QueryAccountPriceTableRef并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

返回示例

```
{
  "inventories": [
    {
      "accountUuid": "3dd9565ef61137c2a8615c26da6ddd4c",
      "tableUuid": "b0c83f78e0323aea8969e5b879ffbe5f",
      "createDate": "Nov 14, 2017 10:20:57 PM",
      "lastOpDate": "Nov 14, 2017 10:20:57 PM"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 3.7.2 |
| inventories | List | 详情参考[inventories] | 3.7.2 |

#error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 3.7.2 |
| description | String | 错误的概要描述 | 3.7.2 |
| details | String | 错误的详细信息 | 3.7.2 |
| elaboration | String | 保留字段，默认为null | 3.7.2 |
| opaque | LinkedHashMap | 保留字段，默认为null | 3.7.2 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 3.7.2 |

#inventories

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| accountUuid | String | 账户UUID | 3.7.2 |
| tableUuid | String | 价目表UUID | 3.7.2 |
| createDate | Timestamp | 创建时间 | 3.7.2 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.7.2 |

**SDK示例**

#### SDK示例

 Java SDK

```
QueryAccountPriceTableRefAction action = new QueryAccountPriceTableRefAction();
action.conditions = asList("uuid=36ee3e78b96a32179ffeefc28f4c6cf0");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryAccountPriceTableRefAction.Result res = action.call();
```

 Python SDK

```
QueryAccountPriceTableRefAction action = QueryAccountPriceTableRefAction()
action.conditions = ["uuid=c5a7e0e081583016a4a316245ff6d525"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryAccountPriceTableRefAction.Result res = action.call()
```

---

### 生成账单(GenerateAccountBilling)



#### API请求

 URLs

```
PUT zstack/v1/billings/accounts/{accountUuid}/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "generateAccountBilling": {},
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"generateAccountBilling":{}}' http://localhost:8080/zstack/v1/billings/accounts/54caddf06e1e3b7c995df5e99d8ca9d9/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | url | 账户UUID |  | 3.7.2 |
| systemTags (可选) | List | body |  |  | 3.7.2 |
| userTags (可选) | List | body |  |  | 3.7.2 |



#### API返回

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



#### SDK示例

 Java SDK

```
GenerateAccountBillingAction action = new GenerateAccountBillingAction();
action.accountUuid = "54caddf06e1e3b7c995df5e99d8ca9d9";
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GenerateAccountBillingAction.Result res = action.call();
```

 Python SDK

```
GenerateAccountBillingAction action = GenerateAccountBillingAction()
action.accountUuid = "54caddf06e1e3b7c995df5e99d8ca9d9"
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GenerateAccountBillingAction.Result res = action.call()
```
