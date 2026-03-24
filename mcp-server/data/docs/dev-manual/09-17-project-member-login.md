# 项目成员如何登录云平台 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.17.html*

---

## 项目成员如何登录云平台



ZStack Cloud项目成员支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API登录云平台。本文主要介绍项目成员如何通过系统登录云平台。

### API调用流程

 API详细调用流程如下：
   - name字段为项目成员的用户名
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"84685216e38441a392375c4afd7132fa","accountUuid":"2dce5dc485554d21a3796500c1db007a","userUuid":"a07965e9d6f34924824fc5e9a6518fc3","expiredDate":"Oct 17, 2022 10:43:53 PM","createDate":"Oct 17, 2022 8:43:53 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID，表示登录成功
 1. uuid字段即为获取的本次Session的ID，表示登录成功
   - projectName字段为项目成员所需登录的项目
 返回结果为：

```
{"inventory":{"uuid":"f53268a27dd14b828602aa09206ac859","accountUuid":"61362a2e3ccd453282fed7ab5a3e48e4","userUuid":"a07965e9d6f34924824fc5e9a6518fc3","expiredDate":"Oct 17, 2022 10:50:58 PM","createDate":"Oct 17, 2022 8:50:58 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID，表示登录云平台成功。项目成员需使用该Session ID操作云平台资源
 2. uuid字段即为获取的本次Session的ID，表示登录云平台成功。项目成员需使用该Session ID操作云平台资源


至此，项目成员登录云平台成功。
