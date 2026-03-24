# 如何查看所有绑定项目管理员角色的用户 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.14.html*

---

## 如何查看所有绑定项目管理员角色的用户



ZStack Cloud支持通过API调用查看所有项目或指定项目下所有绑定项目管理员角色的用户。 若需查看所有项目下所有绑定项目管理员角色的用户，API调用流程如下：
 1. 登录云平台
 2. 查询所有项目中绑定项目管理员角色的用户
  若需查看指定项目下所有绑定项目管理员角色的用户，API调用流程如下：
 1. 登录云平台
 2. 查询指定项目中绑定项目管理员角色的用户


### 所有项目下的API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"155dbbe8193344a5913c412f2732c0d7","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 20, 2022 11:39:43 PM","createDate":"Apr 20, 2022 9:39:43 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstackv1/iam2/virtual-ids
   - virtual-ids：代表所需查询的用户
   - roles.uuid：指定所需查询角色的UUID
 返回结果：

```
"inventories":[{"uuid":"2f0dc45c59804b929636bd487439af87","name":"Rose","type":"ZStack","state":"Enabled","createDate":"Jul 22, 2022 2:33:11 PM","lastOpDate":"Jul 22, 2022 2:33:11 PM","attributes":[{"uuid":"1474de45c8e8460e97804e989400c6e1","name":"fullname","value":"Rose","type":"Customized"},{"uuid":"af29d3e0b5db41a1aedd283e4729fcf1","name":"__IAM2ProjectOperator__","value":"50b6a487e76a4e4688816de3955b2a34","type":"System"}]},{"uuid":"62a8c05ee13243ad9327c8e564b58b9c","name":"Tom","type":"ZStack","state":"Enabled","createDate":"Jul 22, 2022 2:33:50 PM","lastOpDate":"Jul 22, 2022 2:33:50 PM","attributes":[{"uuid":"ddd442c9596f4449a990f35475d26bd5","name":"fullname","value":"Tom","type":"Customized"},{"uuid":"dfb53da08b60495e9beb5010b506dda6","name":"__IAM2ProjectOperator__","value":"f413ca903404442980fc8857b490a57c","type":"System"}]},{"uuid":"e57af7c824bb471c953fb28fd5722944","name":"Jack","type":"ZStack","state":"Enabled","createDate":"Jul 22, 2022 2:32:51 PM","lastOpDate":"Jul 22, 2022 2:32:51 PM","attributes":[{"uuid":"bff9c40c669c4873ac09500d3aba1d5a","name":"__IAM2ProjectOperator__","value":"899955b06dba4e54a264f2091f717eec","type":"System"},{"uuid":"fad24c0749ab483cb9a9bbb2ae311ce3","name":"fullname","value":"Jack","type":"Customized"}]}]
```

其中：
   - inventories字段即为所有项目下所有绑定了项目管理员角色的用户信息，包括用户UUID、姓名、类型、状态等信息
 2. inventories字段即为所有项目下所有绑定了项目管理员角色的用户信息，包括用户UUID、姓名、类型、状态等信息


### 指定项目下的API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"155dbbe8193344a5913c412f2732c0d7","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 20, 2022 11:39:43 PM","createDate":"Apr 20, 2022 9:39:43 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstackv1/iam2/virtual-ids
   - roles.uuid：指定所需查询角色的UUID
   - projects.uuid：指定所需查询的用户所在的项目UUID
 返回结果：

```
"inventories":[{"uuid":"e57af7c824bb471c953fb28fd5722944","name":"Jack","type":"ZStack","state":"Enabled","createDate":"Jul 22, 2022 2:32:51 PM","lastOpDate":"Jul 22, 2022 2:32:51 PM","attributes":[{"uuid":"bff9c40c669c4873ac09500d3aba1d5a","name":"__IAM2ProjectOperator__","value":"899955b06dba4e54a264f2091f717eec","type":"System"},{"uuid":"fad24c0749ab483cb9a9bbb2ae311ce3","name":"fullname","value":"Jack","type":"Customized"}]}]
```

其中：
   - inventories字段即为指定项目下所有绑定了项目管理员角色的用户信息，包括用户UUID、姓名、类型、状态等信息
 2. inventories字段即为指定项目下所有绑定了项目管理员角色的用户信息，包括用户UUID、姓名、类型、状态等信息
