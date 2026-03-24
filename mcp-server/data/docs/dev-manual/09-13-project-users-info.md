# 如何查看项目内所有用户信息 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.13.html*

---

## 如何查看项目内所有用户信息



ZStack Cloud支持通过普通API调用以及ZQL语句两种方式查询指定项目内所有用户信息。

---

## 使用API查看项目内所有用户信息



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，查看指定项目内所有用户信息。本文主要以管理员身份（admin）登录管理节点系统查看指定项目下所有用户信息。您也可以使用云平台其他已授权账户/用户身份登录系统查看。 API调用流程概览：
 1. 登录云平台
 2. 查询项目内用户信息


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"b47bc0bbda034624bd2926275f0788f7","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 20, 2022 11:39:43 PM","createDate":"Apr 20, 2022 9:39:43 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstackv1/iam2/virtual-ids
   - projects.uuid：目标查询用户所属的项目UUID
 返回结果：

```
{"inventories":[{"uuid":"29778bab02044256b2ee87acf2408440","name":"Rose","type":"ZStack","state":"Enabled","createDate":"Apr 20, 2022 6:42:03 PM","lastOpDate":"Apr 20, 2022 6:42:03 PM","attributes":[{"uuid":"7ea682d0109a4f3da9c5da9e7e4608c8","name":"fullname","value":"Rose","type":"Customized"},{"uuid":"6d21fb90793a46efa98ab462cb9e4b3c","name":"__PlatformUserRelatedZone__","value":"ALL_ZONES","type":"System"},{"uuid":"016b9063e2bd474aab8bb202abcfa2b3","name":"__IAM2OrganizationOperation__","value":"349e8f22efc74f1aa56be1e803867e5a","type":"System"},{"uuid":"93e5d2a63a734e53b388105bddd8ade5","name":"__IAM2OrganizationOperation__","type":"System"}]},{"uuid":"615545dc577e4f3894e6d70f7a9b0263","name":"Jack","type":"ZStack","state":"Enabled","createDate":"Apr 20, 2022 6:41:41 PM","lastOpDate":"Apr 20, 2022 6:41:41 PM","attributes":[{"uuid":"d3a7d70d8d0e4cb0b604d6ec358bc6c1","name":"fullname","value":"Jack","type":"Customized"}]},{"uuid":"76dc79b5969a4e38959d7e2752d7920b","name":"Tom","type":"ZStack","state":"Enabled","createDate":"Apr 20, 2022 6:43:16 PM","lastOpDate":"Apr 20, 2022 6:43:16 PM","attributes":[{"uuid":"0e807565c00b4616b1ecc47a6a7ff7a0","name":"fullname","value":"Tom","type":"Customized"},{"uuid":"df736b7d82f54d22ae4c2a4297824f7e","name":"__IAM2ProjectAdmin__","value":"dc95629919d847648255036b8ffb561d","type":"System"}]}]}
```

其中：
   - inventories字段即为所需查询项目下的所有用户的信息，包括用户UUID、姓名、类型、状态、创建和更新日期等信息
 2. inventories字段即为所需查询项目下的所有用户的信息，包括用户UUID、姓名、类型、状态、创建和更新日期等信息

---

### 使用ZQL查看项目内所有用户信息



ZStack Cloud支持通过ZQL语句以HTTP方式查看指定项目内所有用户信息。本文主要通过以管理员身份（admin）登录管理节点系统查看指定项目下所有用户信息。您也可以使用云平台其他已授权账户/用户身份登录系统查看。

使用ZQL语句查看项目内用户信息前，需获取调用ZQL语句所需的Sesion ID。

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
query iam2virtualid where projects.uuid='c3e0ad72d7c74e5f8cdf335bec73cb1f'
```


 - 语义：查询指定项目下所有用户信息
 - query关键字、where从句可参考[ZQL语法]
   - iam2virtualid：必填项，目标查询返回的云主机UUID
   - projects.uuid：必填项，指定项目UUID
 - projects.uuid：必填项，指定项目UUID
  ZQL语句返回结果：

```
{
    "results": [
        {
            "inventories": [
                {
                    "attributes": [
                        {
                            "name": "fullname",
                            "type": "Customized",
                            "uuid": "c037dc4c9da74a7d8f4175c1c73cce0d",
                            "value": "zhangsan"
                        }
                    ],
                    "createDate": "Apr 19, 2022 4:43:41 PM",
                    "lastOpDate": "Apr 19, 2022 4:43:41 PM",
                    "name": "zhangsan",
                    "state": "Enabled",
                    "type": "ZStack",
                    "uuid": "0e24b211caac49ab87d35f302ec078f9"
                }
            ]
        }
    ],
    "success": true
}
```

其中：
 - inventories字段即为所需查询项目下的所有用户的信息，即存在一个姓名为张三的用户。
