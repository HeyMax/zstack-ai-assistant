# 如何登录开启双因子验证的云平台 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.16.html*

---

## 如何登录开启双因子验证的云平台



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API登录开启双因子验证的云平台。本文主要以管理员身份（admin）登录管理节点系统，介绍如何登录开启双因子验证的云平台。您也可以使用云平台其他已授权账户/用户身份登录。 调用API登录云平台前，需确保：
 - 云平台已开启双因子认证，并已获取登录云平台所需的安全码（6位数）。本场景下，安全码为539709。


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
   - twofatoken选项表示使用账户身份登录时通过systemTags方式使用双因子登录验证，需填入验证所需的安全码
 返回结果为：

```
{"inventory":{"uuid":"0b83bcebf5de45ca83c47425725c273b","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Oct 17, 2022 10:30:15 PM","createDate":"Oct 17, 2022 8:30:15 PM","noSessionEvaluation":false}}{"uuid":"0b83bcebf5de45ca83c47425725c273b","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Oct 17, 2022 10:30:15 PM","createDate":"Oct 17, 2022 8:30:15 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID，表示登录成功
 - uuid字段即为获取的本次Session的ID，表示登录成功


至此，admin已成功登录开启双因子验证的云平台。
