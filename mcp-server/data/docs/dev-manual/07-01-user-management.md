# 用户管理相关接口 - 设置

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/7.1.html*

---

## 用户管理相关接口

---

## 创建账户(CreateAccount)



### API请求

 URLs

```
POST zstack/v1/accounts
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "name": "test",     "password": "password" # 需要对密码进行SHA-512算法加密   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \ -X POST -d '{"params":{"name":"test","password":"password"}}' \ http://localhost:8080/zstack/v1/accounts # 需要对密码进行SHA-512算法加密
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| password | String | body(包含在params结构中) | 密码 |  | 0.6 |
| type (可选) | String | body(包含在params结构中) | 账户类型 | SystemAdmin Normal | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



### API返回

 返回示例

```
{   "inventory": {     "uuid": "3f7b4eeaeba1491cb0493753dd6ce102",     "name": "test",     "type": "Normal"   } }
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | AccountInventory | 详情参考[inventory] | 0.6 |

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
| type | String | 账户类型（管理员，普通账户） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
CreateAccountAction action = new CreateAccountAction(); action.name = "test"; action.password = "password"; # 需要对密码进行SHA-512算法加密 action.sessionId = "b99c5c5c60864e339771c582ac7b64e7"; CreateAccountAction.Result res = action.call();
```

 Python SDK

```
CreateAccountAction action = CreateAccountAction() action.name = "test" action.password = "password" # 需要对密码进行SHA-512算法加密 action.sessionId = "8f5e798859344f93994fe0a58e000b27" CreateAccountAction.Result res = action.call()
```

---

## 删除账户(DeleteAccount)



### API请求

 URLs

```
DELETE zstack/v1/accounts/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{   "params": {     "deleteMode": "Permissive"   },   "systemTags": [],   "userTags": [] }
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth cd1c2bf992d340f8bcec91c61b0ca826" \ -X DELETE http://localhost:8080/zstack/v1/accounts/a58b85e7b9804a56b09fd538107a945f?deleteMode=Permissive
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
DeleteAccountAction action = new DeleteAccountAction(); action.uuid = "241212c7ec464e468e3a6814b256253f"; action.deleteMode = "Permissive"; action.sessionId = "23751519f2bc4723a80fec55425160d2"; DeleteAccountAction.Result res = action.call();
```

 Python SDK

```
DeleteAccountAction action = DeleteAccountAction() action.uuid = "8c848dc5f8ff4daab75d29f1eb41edc2" action.deleteMode = "Permissive" action.sessionId = "60312ff3c895453ebac617cf6f38af97" DeleteAccountAction.Result res = action.call()
```

---

## 查询账户(QueryAccount)



### API请求

 URLs

```
GET zstack/v1/accounts GET zstack/v1/accounts/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth c2184a4f89a344818de241e4af916fbf" \ -X GET http://localhost:8080/zstack/v1/accounts?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \ -H "Authorization: OAuth 7b85ed5d64a34ce6b87b923522739135" \ -X GET http://localhost:8080/zstack/v1/accounts/ac726222a7d047a481ef54cde4f519b5
```



可查询字段

运行CLI命令行工具，输入`QueryAccount`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

### API返回

 返回示例

```
{   "inventories": [     {       "uuid": "c5962adc77ff40d980bcfe68a39b6fc5",       "name": "test",       "type": "Normal"     }   ] }
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
| type | String | 账户类型（管理员，普通账户） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



### SDK示例

 Java SDK

```
QueryAccountAction action = new QueryAccountAction(); action.conditions = asList("name=test"); action.sessionId = "19d580ead5c74d768b0ca1fdafa476d4"; QueryAccountAction.Result res = action.call();
```



Python SDK

```
QueryAccountAction action = QueryAccountAction() action.conditions = ["name=test"] action.sessionId = "d29206d889c94715b331dac2ad12376a" QueryAccountAction.Result res = action.call()
```

---

### 更新账户(UpdateAccount)



#### API请求

 URLs

```
PUT zstack/v1/accounts/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "updateAccount": {
    "password": "updatepassword", # 需要对密码进行SHA-512算法加密
    "name": "updatename"
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
-X PUT -d '{"updateAccount":{"password":"updatepassword","name":"updatename"}}' \
http://localhost:8080/zstack/v1/accounts/99fcb2ad540c36f09e87c820ac6cb4cb
# 需要对密码进行SHA-512算法加密
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| password (可选) | String | body(包含在**updateAccount**结构中) | 密码 |  | 0.6 |
| name (可选) | String | body(包含在**updateAccount**结构中) | 账户名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateAccount**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "dda8acd917444887b267d1beb53332d6",
    "name": "test",
    "type": "Normal"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | AccountInventory | 详情参考[inventory] | 0.6 |

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
| type | String | 账户类型（管理员，普通账户） | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
UpdateAccountAction action = new UpdateAccountAction();
action.uuid = "a0895597ee22409099fa936047203424";
action.password = "updatepassword"; # 需要对密码进行SHA-512算法加密
action.name = "updatename";
action.sessionId = "1fafdbb72ee04075afcaa40ed3584016";
UpdateAccountAction.Result res = action.call();
```

 Python SDK

```
UpdateAccountAction action = UpdateAccountAction()
action.uuid = "8362ff8c83644c4d84148d57a6a129ae"
action.password = "updatepassword" # 需要对密码进行SHA-512算法加密
action.sessionId = "a654692862be4bf8b8226f809ed87eed"
UpdateAccountAction.Result res = action.call()
```

---

### 使用账户身份登录(LogInByAccount)



#### API请求

 URLs

```
PUT zstack/v1/accounts/login
```

 Body

```
{
  "logInByAccount": {
    "accountName": "test",
    "password": "password",
    "captchaUuid": "39bd748906ad301793c64f688dc197a9",
    "verifyCode": "test"
  },
  "systemTags": [],
  "userTags": []
}
```


> **注意:** 说明: 上述示例中**systemTags**、**userTags**字段可以省略。列出是为了表示body中可以包含这两个字段。

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"logInByAccount":{"accountName":"test","password":"password","captchaUuid":"39bd748906ad301793c64f688dc197a9","verifyCode":"test"}}' \
http://localhost:8080/zstack/v1/accounts/login
# 需要对密码进行SHA-512算法加密
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountName | String | body(包含在**logInByAccount**结构中) | 账户名称说明: 账户名称和账户UUID不能同时为空 |  | 0.6 |
| password | String | body(包含在**logInByAccount**结构中) | 密码 |  | 0.6 |
| captchaUuid (可选) | String | body(包含在**logInByAccount**结构中) | 验证码UUID |  | 2.6.0 |
| verifyCode (可选) | String | body(包含在**logInByAccount**结构中) | 验证码 |  | 2.6.0 |
| clientInfo (可选) | Map | body(包含在**logInByAccount**结构中) | 客户端信息 |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |


  - 选项格式为：`twofatoken::双因子验证6位安全码`
  - 例如：`twofatoken::123456`
- 例如：`twofatoken::123456`


> **注意:** 说明:



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "5d77893e242d39ec8b9856a7b8762eab",
    "accountUuid": "7ab57f322e4a396b8124ed4fda810966",
    "expiredDate": "Nov 14, 2017 10:20:57 PM",
    "noSessionEvaluation": false

  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SessionInventory | 详情参考[inventory] | 0.6 |

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
| accountUuid | String | 账户UUID | 0.6 |
| userUuid | String | 用户UUID说明: 账户名称和账户UUID不能同时为空 | 0.6 |
| expiredDate | Timestamp | 会话过期日期 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |



#### SDK示例

 Java SDK

```
LogInByAccountAction action = new LogInByAccountAction();
action.accountName = "test";
action.password = "password";# 需要对密码进行SHA-512算法加密
action.captchaUuid = "39bd748906ad301793c64f688dc197a9";
action.verifyCode = "test";
LogInByAccountAction.Result res = action.call();
```

 Python SDK

```
LogInByAccountAction action = LogInByAccountAction()
action.accountName = "test"
action.password = "password"# 需要对密码进行SHA-512算法加密
action.captchaUuid = "39bd748906ad301793c64f688dc197a9"
action.verifyCode = "test"
LogInByAccountAction.Result res = action.call()
```

---

### 获取登录验证码(GetLoginCaptcha)



#### API请求

 URLs

```
GET zstack/v1/login/control/captcha
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -X GET http://localhost:8080/zstack/v1/login/control/captcha?resourceName=admin&loginType=Test
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceName | String | query | 资源名称 |  | 2.6.0 |
| loginType | String | query | 登录类型 |  | 2.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | query | 用户标签 |  | 2.6.0 |



#### API返回

 返回示例

```
{
  "captchaUuid": "14165c6a76094c61bda76d2e11f8c610",
  "captcha": "test"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| captchaUuid | String | 验证码的唯一标识符 | 2.6.0 |
| captcha | String | 验证码图片的base64形式 | 2.6.0 |
| success | boolean |  | 2.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| error | ErrorCode | 详情参考[error] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |



#### SDK示例

 Java SDK

```
GetLoginCaptchaAction action = new GetLoginCaptchaAction();
action.resourceName = "admin";
action.loginType = "Test";
GetLoginCaptchaAction.Result res = action.call();
```

 Python SDK

```
GetLoginCaptchaAction action = GetLoginCaptchaAction()
action.resourceName = "admin"
action.loginType = "Test"
GetLoginCaptchaAction.Result res = action.call()
```

---

### 刷新验证码(RefreshCaptcha)



#### API请求

 URLs

```
GET zstack/v1/captcha/refresh
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -X GET http://localhost:8080/zstack/v1/captcha/refresh
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | query | 资源的UUID，唯一标示该资源 |  | 2.6.0 |
| systemTags (可选) | List | query |  |  | 2.6.0 |
| userTags (可选) | List | query |  |  | 2.6.0 |



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
RefreshCaptchaAction action = new RefreshCaptchaAction();
RefreshCaptchaAction.Result res = action.call();
```

 Python SDK

```
RefreshCaptchaAction action = RefreshCaptchaAction()
RefreshCaptchaAction.Result res = action.call()
```

---

### 获取双因子认证密钥(GetTwoFactorAuthenticationSecret)



#### API请求

 URLs

```
GET zstack/v1/twofactorauthentication/secret
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X GET http://localhost:8080/zstack/v1/twofactorauthentication/secret?name=user1&password=password&type=account
```

 参数列表
-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | query | 资源名称 |  | 2.6.0 |
| password | String | query |  |  | 2.6.0 |
| type | String | query |  | account iam2 | 2.6.0 |
| systemTags (可选) | List | query |  |  | 2.6.0 |
| userTags (可选) | List | query |  |  | 2.6.0 |
| captchaUuid (可选) | String | query |  |  | 2.6.0 |
| verifyCode (可选) | String | query |  |  | 2.6.0 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "7870dee14bdb328c9eb6635f4f494fdd",
    "secret": "ABCDEFGH12345678",
    "status": "NewCreated",
    "userType": "AccountVO"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventory | TwoFactorAuthenticationSecretInventory | 详情参考[inventory] | 2.6.0 |

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
| secret | String | 双因子认证密钥 | 2.6.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| userUuid | String | 用户UUID | 3.4.0 |
| userType | String |  | 3.4.0 |
| status | TwoFactorAuthenticationSecretStatus | 详情参考[status] | 3.4.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.4.0 |
| ordinal | int |  | 3.4.0 |



#### SDK示例

 Java SDK

```
GetTwoFactorAuthenticationSecretAction action = new GetTwoFactorAuthenticationSecretAction();
action.name = "user1";
action.password = "password";
action.type = "account";
GetTwoFactorAuthenticationSecretAction.Result res = action.call();
```

 Python SDK

```
GetTwoFactorAuthenticationSecretAction action = GetTwoFactorAuthenticationSecretAction()
action.name = "user1"
action.password = "password"
action.type = "account"
GetTwoFactorAuthenticationSecretAction.Result res = action.call()
```

---

### 查询双因子认证密钥(QueryTwoFactorAuthentication)



#### API请求

 URLs

```
GET zstack/v1/twofactorauthentication/secrets
```


```
GET zstack/v1/twofactorauthentication/secrets/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/twofactorauthentication/secrets?q=uuid=d65b4896eee23175b19e1267ee39ec60
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X GET http://localhost:8080/zstack/v1/twofactorauthentication/secrets/83358cec65073cbc876ddefe3d9b69fe
```



可查询字段

运行CLI命令行工具，输入并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "uuid": "16620c01d20b390891ae1a1bc072ac0b",
      "secret": "ABCDEFGH12345678",
      "userUuid": "264d446f00e43793a2b0dcd21c367aaf",
      "userType": "AccountVO",
      "status": "NewCreated"
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
| uuid | String | 资源的UUID，唯一标示该资源 | 3.4.0 |
| secret | String | 双因子认证密钥 | 3.4.0 |
| userUuid | String | 用户UUID | 3.4.0 |
| userType | String |  | 3.4.0 |
| createDate | Timestamp | 创建时间 | 3.4.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 3.4.0 |
| status | TwoFactorAuthenticationSecretStatus | 详情参考[status] | 3.4.0 |

 #status

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 3.4.0 |
| ordinal | int |  | 3.4.0 |



#### SDK示例

 Java SDK

```
QueryTwoFactorAuthenticationAction action = new QueryTwoFactorAuthenticationAction();
action.conditions = asList("uuid=4875201ba7443dddb51e336f9a23a20e");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
QueryTwoFactorAuthenticationAction.Result res = action.call();
```

 Python SDK

```
QueryTwoFactorAuthenticationAction action = QueryTwoFactorAuthenticationAction()
action.conditions = ["uuid=ccf0f6cdf5a73bf7b961869f9bd8ca25"]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
QueryTwoFactorAuthenticationAction.Result res = action.call()
```

---

### 获取双因子认证状态(GetTwoFactorAuthenticationState)



#### API请求

 URLs

```
GET zstack/v1/twofactorauthentication/state
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -X GET http://localhost:8080/zstack/v1/twofactorauthentication/state
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| systemTags (可选) | List | query |  |  | 2.6.0 |
| userTags (可选) | List | query |  |  | 2.6.0 |



#### API返回

 返回示例

```
{
  "state": "Disable"
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| state | String |  | 2.6.0 |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 2.6.0 |
| description | String | 错误的概要描述 | 2.6.0 |
| details | String | 错误的详细信息 | 2.6.0 |
| elaboration | String | 保留字段，默认为null | 2.6.0 |
| opaque | LinkedHashMap | 保留字段，默认为null | 2.6.0 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 2.6.0 |



#### SDK示例

 Java SDK

```
GetTwoFactorAuthenticationStateAction action = new GetTwoFactorAuthenticationStateAction();
GetTwoFactorAuthenticationStateAction.Result res = action.call();
```

 Python SDK

```
GetTwoFactorAuthenticationStateAction action = GetTwoFactorAuthenticationStateAction()
GetTwoFactorAuthenticationStateAction.Result res = action.call()
```

---

### 获取账户配额使用情况(GetAccountQuotaUsage)



#### API请求

 URLs

```
GET zstack/v1/accounts/quota/{uuid}/usages
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
-H "Authorization: OAuth f1ec41a9dad54fdcbeb096ba7d7ec347" \
-X GET http://localhost:8080/zstack/v1/accounts/quota/5d73926d39d84ddfbcecb28fb3e64198/usages
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "usages": [
    {
      "name": "testquota",
      "total": 20.0,
      "used": 10.0
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| usages | List | 详情参考[usages] | 0.6 |

 #error

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| code | String | 错误码号，错误的全局唯一标识，例如SYS.1000, HOST.1001 | 0.6 |
| description | String | 错误的概要描述 | 0.6 |
| details | String | 错误的详细信息 | 0.6 |
| elaboration | String | 保留字段，默认为null | 0.6 |
| opaque | LinkedHashMap | 保留字段，默认为null | 0.6 |
| cause | ErrorCode | 根错误，引发当前错误的源错误，若无原错误，该字段为null | 0.6 |

 #usages

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| total | Long | 配额总量 | 0.6 |
| used | Long | 配额已用量 | 0.6 |



#### SDK示例

 Java SDK

```
GetAccountQuotaUsageAction action = new GetAccountQuotaUsageAction();
action.uuid = "a4b28114528645989d70729385149220";
action.sessionId = "0e8ef3f8ed9145d3a6c81cc960d6e23d";
GetAccountQuotaUsageAction.Result res = action.call();
```

 Python SDK

```
GetAccountQuotaUsageAction action = GetAccountQuotaUsageAction()
action.uuid = "9059f618b9f94b62a55da7b0f21cc66e"
action.sessionId = "26a155d4bb6b4fbaaddc48406afbed2b"
GetAccountQuotaUsageAction.Result res = action.call()
```

---

### 查询账户资源引用(QueryAccountResourceRef)



#### API请求

 URLs

```
GET zstack/v1/accounts/resources/refs
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7ab81289ce1747e9b0087190338f19b5" \
-X GET http://localhost:8080/zstack/v1/accounts/resources/refs?q=acountUuid=36f13d04700e489ea4ef8887fe233136
```



可查询字段

运行CLI命令行工具，输入`QueryAccountResourceRef`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
  "inventories": [
    {
      "id": 1.0,
      "accountUuid": "a27e124c2a8441be8212a622848c28cd",
      "ownerAccountUuid": "b22d5d9b1c084589aa1abe30d2783bb8",
      "resourceUuid": "c2fa286ab4ac41f18ce5219cc4482641",
      "resourceType": "ImageVO",
      "permission": 1.0,
      "isShared": false
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
| accountUuid | String | 账户UUID | 0.6 |
| resourceUuid | String | 资源UUID | 0.6 |
| resourceType | String | 资源类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryAccountResourceRefAction action = new QueryAccountResourceRefAction();
action.conditions = asList("acountUuid=184ad43718eb4731b62d216745e0e097");
action.sessionId = "87bbd9779dbf4db0bfa73fbc9f073bec";
QueryAccountResourceRefAction.Result res = action.call();
```

 Python SDK

```
QueryAccountResourceRefAction action = QueryAccountResourceRefAction()
action.conditions = ["acountUuid=82d42d0824be43688f0769c11b0aab6e"]
action.sessionId = "69a28a3c4cce4dfca45905226a3ca1c8"
QueryAccountResourceRefAction.Result res = action.call()
```

---

### 共享资源给账户(ShareResource)



#### API请求

 URLs

```
PUT zstack/v1/accounts/resources/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "shareResource": {
    "resourceUuids": [
      "62113cf71892442daf57fe1a21606e7b",
      "e8d14f0a61d7497c83cf9451bdd392a3"
    ],
    "accountUuids": [
      "17c6a138e5f04df4ad8938fa8bd06340",
      "7063dc465e7c42739fdb5fd7d3e373f4"
    ],
    "toPublic": false
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
-X PUT -d '{"shareResource":{"resourceUuids":["05c5cdd1a5693e53ad3212a69b808883","49c6493b8eaf3765806aeb17071e779f"],"accountUuids":["62c084e3a2053b089b8b95fe452856e7","194f8c7d98963e628b9967b0df7eecae"],"toPublic":false}}' \
http://localhost:8080/zstack/v1/accounts/resources/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuids | List | body(包含在**shareResource**结构中) | 资源UUID列表 |  | 0.6 |
| accountUuids (可选) | List | body(包含在**shareResource**结构中) | 账户UUID列表 |  | 0.6 |
| toPublic (可选) | boolean | body(包含在**shareResource**结构中) | 全局共享说明: toPublic参数被设为false时，账户uuid不能为空 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
ShareResourceAction action = new ShareResourceAction();
action.resourceUuids = asList("91081232bea84a50af90c7da27d54442","91d6ee72dbd246a88f3004cbaac20998");
action.accountUuids = asList("b3dcbb40827441b5aef2fd3150baa3a9","3985fbda90044fcc8e45d1fbe002eec4");
action.toPublic = false;
action.sessionId = "43b022aa93aa4e63a7d11a993d1ba75d";
ShareResourceAction.Result res = action.call();
```

 Python SDK

```
ShareResourceAction action = ShareResourceAction()
action.resourceUuids = [b78e3c1026914c17916d0a3e37e3083a, 23c35149a4644fd0a230de71a52b2685]
action.accountUuids = [56f8a1c0eac94d2da0913ac5ced688dc, fc4fdf4a31b746b8b8e7a7ddbd086f11]
action.toPublic = false
action.sessionId = "6f9572ac77904dcda0bbad3a15675865"
ShareResourceAction.Result res = action.call()
```

---

### 查看资源所属账户(GetResourceAccount)



#### API请求

 URLs

```
GET zstack/v1/resources/accounts
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" -X GET http://localhost:8080/zstack/v1/resources/accounts?resourceUuids=59fc59531b6639b3b0bd6263b021df4c&resourceUuids=77115316d36839e9b1a4f832f38de8ba
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuids | List | query |  |  | 2.6.0 |
| systemTags (可选) | List | query | 系统标签 |  | 2.6.0 |
| userTags (可选) | List | query | 用户标签 |  | 2.6.0 |



#### API返回

 返回示例

```
{
  "inventories": {
    "db4e395223813bafa838ce4285a78757": {
      "uuid": "ef68adaf368335ab8d15a4c2195749a7",
      "name": "test",
      "type": "Normal"
    },
    "736ee9f80a2230658e999c17e5be1835": {
      "uuid": "ef68adaf368335ab8d15a4c2195749a7",
      "name": "test",
      "type": "Normal"
    }
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.6.0 |
| inventories | Map | 详情参考[inventories] | 2.6.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.6.0 |
| name | String | 资源名称 | 2.6.0 |
| description | String | 资源的详细描述 | 2.6.0 |
| type | String | 账户类型（管理员，普通账户） | 2.6.0 |
| createDate | Timestamp | 创建时间 | 2.6.0 |
| lastOpDate | Timestamp | 最后一次修改时间 | 2.6.0 |



#### SDK示例

 Java SDK

```
GetResourceAccountAction action = new GetResourceAccountAction();
action.resourceUuids = asList("59fc59531b6639b3b0bd6263b021df4c","77115316d36839e9b1a4f832f38de8ba");
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
GetResourceAccountAction.Result res = action.call();
```

 Python SDK

```
GetResourceAccountAction action = GetResourceAccountAction()
action.resourceUuids = [59fc59531b6639b3b0bd6263b021df4c, 77115316d36839e9b1a4f832f38de8ba]
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
GetResourceAccountAction.Result res = action.call()
```

---

### 创建用户组(CreateUserGroup)



#### API请求

 URLs

```
POST zstack/v1/accounts/groups
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "usergroup"
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
-X POST -d '{"params":{"name":"usergroup"}}' \
http://localhost:8080/zstack/v1/accounts/groups
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"uuid": "c6988be5a4ca47c994a08124993a8add",
"accountUuid": "f6da67a4c77a4807910e0374e0f0ed63",
"name": "usergroup"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | UserGroupInventory | 详情参考[inventory] | 0.6 |

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
| accountUuid | String | 账户UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
CreateUserGroupAction action = new CreateUserGroupAction();
action.name = "usergroup";
action.sessionId = "dbd9237abef344b0b0ddbb947e0c993d";
CreateUserGroupAction.Result res = action.call();
```

 Python SDK

```
CreateUserGroupAction action = CreateUserGroupAction()
action.name = "usergroup"
action.sessionId = "d6434e6bb8c84d719804383abedc74e0"
CreateUserGroupAction.Result res = action.call()
```

---

### 删除用户组(DeleteUserGroup)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/groups/{uuid}?deleteMode={deleteMode}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 644846d7b557441d91b3a64510cf7d4e" \
-X DELETE http://localhost:8080/zstack/v1/accounts/groups/bbaba82b92ac43c4b08d99acac63638f?deleteMode=Permissive?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeleteUserGroupAction action = new DeleteUserGroupAction();
action.uuid = "c58611a13aaa4a38ac7ca35883dff419";
action.deleteMode = "Permissive";
action.sessionId = "d0b45ce10eb14370a8dd67c407aa4815";
DeleteUserGroupAction.Result res = action.call();
```

 Python SDK

```
DeleteUserGroupAction action = DeleteUserGroupAction()
action.uuid = "ccf4eaf4caa9404c8b73a55b2ed7bcf6"
action.deleteMode = "Permissive"
action.sessionId = "d4ae98b8863c4af098e5fbe8d598a046"
DeleteUserGroupAction.Result res = action.call()
```

---

### 查询用户组(QueryUserGroup)



#### API请求

 URLs

```
GET zstack/v1/accounts/groups
GET zstack/v1/accounts/groups/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 11c890164eb54fc199e4d76fc7d0968b" \
-X GET http://localhost:8080/zstack/v1/accounts/groups?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 6d9e697aff1d4831abaf95e08652cb19" \
-X GET http://localhost:8080/zstack/v1/accounts/groups/c3662f079370466583d4eb080ac889af
```



可查询字段

运行CLI命令行工具，输入`QueryUserGroup`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "775eb58ab79a41c9803cc8ffc4996f80",
"accountUuid": "a3511b57fa06498b85c6c7150770120e",
"name": "usergroup"
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
| accountUuid | String | 账户UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryUserGroupAction action = new QueryUserGroupAction();
action.conditions = asList("name=test");
action.sessionId = "b920d6d5574e48eb917b3b92d2c9147d";
QueryUserGroupAction.Result res = action.call();
```

 Python SDK

```
QueryUserGroupAction action = QueryUserGroupAction()
action.conditions = ["name=test"]
action.sessionId = "dcf0980272b743ad97ac3bcc2964344d"
QueryUserGroupAction.Result res = action.call()
```

---

### 更新用户组(UpdateUserGroup)



#### API请求

 URLs

```
PUT zstack/v1/accounts/groups/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateUserGroup": {
"uuid": "41c1fb7a12f34ae9b81faed885019dfc",
"name": "newname"
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
-X PUT -d '{"updateUserGroup":{"uuid":"3bad0f7e529c389d8510a4f327db632a","name":"newname"}}' \
http://localhost:8080/zstack/v1/accounts/groups/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | body(包含在**updateUserGroup**结构中) | 资源的UUID，唯一标示该资源 |  | 0.6 |
| name (可选) | String | body(包含在**updateUserGroup**结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateUserGroup**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"uuid": "b050b1beb08744e890d9980acbfd1595",
"accountUuid": "b3a651d6cb6244c1bb25128520a89d25",
"name": "newname"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | UserGroupInventory | 详情参考[inventory] | 0.6 |

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
| accountUuid | String | 账户UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
UpdateUserGroupAction action = new UpdateUserGroupAction();
action.uuid = "12a5413d1d1b4858b57edb47043dd305";
action.name = "newname";
action.sessionId = "3c8fc80478ed4d0c9306b6aee3186d65";
UpdateUserGroupAction.Result res = action.call();
```

 Python SDK

```
UpdateUserGroupAction action = UpdateUserGroupAction()
action.uuid = "0f2e2be28f92496ab7e72ca890f4c01e"
action.name = "newname"
action.sessionId = "f35be8c41ba442369e2bd4db4a8eddc8"
UpdateUserGroupAction.Result res = action.call()
```

---

### 添加到用户组(AddUserToGroup)



#### API请求

 URLs

```
POST zstack/v1/accounts/groups/{groupUuid}/users
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"userUuid": "cbe08fd54e10427599928e1a19cd7093"
  },
"systemTags": [],
"userTags": []
}
```



上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"userUuid":"74b4004fa0e23b2abb8ea8a6b3e28e25"}}' \
http://localhost:8080/zstack/v1/accounts/groups/2bca6534b91234f680605578e194da06/users
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userUuid | String | body(包含在`params`结构中) | 用户UUID |  | 0.6 |
| groupUuid | String | url | 用户组UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### **API返回**

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
AddUserToGroupAction action = new AddUserToGroupAction();
action.userUuid = "a2663e0a471a43d2bd292e52ed864c3c";
action.groupUuid = "70370a84e82a48c1904b979993ce93e6";
action.sessionId = "27a0e742c07b4f61b3294d0b445412d6";
AddUserToGroupAction.Result res = action.call();
```

 Python SDK

```
AddUserToGroupAction action = AddUserToGroupAction()
action.userUuid = "f6a9851e3d674688bf3e4edbd12d0c4f"
action.groupUuid = "89839df4528c4742a6825a2086838394"
action.sessionId = "cefd7bb2ac4b4ff98ab78d484631678d"
AddUserToGroupAction.Result res = action.call()
```

---

### 绑定策略到用户组(AttachPolicyToUserGroup)



#### API请求

 URLs

```
POST zstack/v1/accounts/groups/{groupUuid}/policies
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"policyUuid": "8ee874eddba34ff28a519e213e6f86c2"
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"policyUuid":"ba7797e0c5753575a3873077f3490206"}}' \
http://localhost:8080/zstack/v1/accounts/groups/2bb2a8ab923639e3b3fb51e5f5e31d0c/policies
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| policyUuid | String | body(包含在`params`结构中) | 权限策略UUID |  | 0.6 |
| groupUuid | String | url | 用户组UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
AttachPolicyToUserGroupAction action = new AttachPolicyToUserGroupAction();
action.policyUuid = "88abe0bf6f594688968a41049a029ab1";
action.groupUuid = "bae62f7a52774a48abf0e2deacd6fd97";
action.sessionId = "e6c356a17cf24f4998b190da9f40fbb7";
AttachPolicyToUserGroupAction.Result res = action.call();
```

 Python SDK

```
AttachPolicyToUserGroupAction action = AttachPolicyToUserGroupAction()
action.policyUuid = "94f0a40a0cf44a7aa9d0882d57e1e3ed"
action.groupUuid = "ff8e9c24cf154761b3e020d3e8fd934e"
action.sessionId = "31c21d7dfe7b4128ae4af3e46125a8ff"
AttachPolicyToUserGroupAction.Result res = action.call()
```

---

### 将策略从用户组解绑(DetachPolicyFromUserGroup)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/groups/{groupUuid}/policies/{policyUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7cbe5df712b84b769016bdc8484f7266" \
-X DELETE http://localhost:8080/zstack/v1/accounts/groups/85f398f824c0406e97a1b8dac847c1b4\
/policies/904ff8584f7040dc9871b109210fe497?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| policyUuid | String | url | 权限策略UUID |  | 0.6 |
| userUuid | String | url | 用户UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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



#### **SDK示例**

 Java SDK

```
DetachPolicyFromUserGroupAction action = new DetachPolicyFromUserGroupAction();
action.policyUuid = "c0589bc7c00040b296316c0e12b51d59";
action.groupUuid = "75b38fea53fd420cadd9a3d627ffd5e4";
action.sessionId = "617424262377430bb08f77ab856f3d15";
DetachPolicyFromUserGroupAction.Result res = action.call();
```

 Python SDK

```
DetachPolicyFromUserGroupAction action = DetachPolicyFromUserGroupAction()
action.policyUuid = "ae4c808ce9dc4117b16ba7a7efc09cd0"
action.groupUuid = "0870a2177efe4175be538230874fda53"
action.sessionId = "9e8cb02459eb4cdda5dca116d74d13fa"
DetachPolicyFromUserGroupAction.Result res = action.call()
```

---

### 从用户组中移除用户(RemoveUserFromGroup)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/groups/{groupUuid}/users/{userUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl \
-H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c987f75c01f4474e94964d7176ce80d2" \
-X DELETE http://localhost:8080/zstack/v1/accounts/groups/5ca878437a064e7d9cabc46c5235e846/users\
/d343976dbd774d97b3989579bb3f8638?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userUuid | String | url | 用户UUID |  | 0.6 |
| groupUuid | String | url | 用户组UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
RemoveUserFromGroupAction action = new RemoveUserFromGroupAction();
action.userUuid = "0ee5933b7a17453f875743a0007d93a3";
action.groupUuid = "20096dc990074ef193f9588caf976074";
action.sessionId = "ad3401f277c64ab5804e3b85beb76b6f";
RemoveUserFromGroupAction.Result res = action.call();
```

 Python SDK

```
RemoveUserFromGroupAction action = RemoveUserFromGroupAction()
action.userUuid = "d2c58c22b6bb4f3e85756cf8c2fcc58e"
action.groupUuid = "779b3a172ab14c16a143792a623e73d2"
action.sessionId = "2d13b900e72342f78266c309f0ec5f92"
RemoveUserFromGroupAction.Result res = action.call()
```

---

### 创建用户(CreateUser)



#### API请求

 URLs

```
POST zstack/v1/accounts/users
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "testuser",
"password": "testpassword" # 需要对密码进行SHA-512算法加密
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"testuser","password":"testpassword"}}' \
http://localhost:8080/zstack/v1/accounts/users
# 需要对密码进行SHA-512算法加密
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在`params`结构中) | 用户名称 |  | 0.6 |
| password | String | body(包含在`params`结构中) | 密码 |  | 0.6 |
| description (可选) | String | body(包含在`params`结构中) | 资源的详细描述 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在`params`结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"uuid": "b30ad4ad36864c659a8ae06e803f8d25",
"accountUuid": "22614a98cbfe4eca9305d398b2f10ff2",
"name": "testuser"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考error | 0.6 |
| inventory | UserInventory | 详情参考inventory | 0.6 |



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
| accountUuid | String | 账户UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
CreateUserAction action = new CreateUserAction();
action.name = "testuser";
action.password = "testpassword"; # 需要对密码进行SHA-512算法加密
action.sessionId = "f0548be1ffec469fac0ce3e343be7ffe";
CreateUserAction.Result res = action.call();
```

 Python SDK

```
CreateUserAction action = CreateUserAction()
action.name = "testuser"
action.password = "testpassword" # 需要对密码进行SHA-512算法加密
action.sessionId = "f87ead16d2934a2096b55b8532175722"
CreateUserAction.Result res = action.call()
```

---

### 删除用户(DeleteUser)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/users/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 18ec08fb5cbe41ca905ba15807bb5c5a" \
-X DELETE http://localhost:8080/zstack/v1/accounts/users/8298cc2536ec4fce83993ba9d6f83ced?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeleteUserAction action = new DeleteUserAction();
action.uuid = "21e499f4359842db8f9d775411045679";
action.deleteMode = "Permissive";
action.sessionId = "46d07fa8aee244e4bb997f1b8b63d582";
DeleteUserAction.Result res = action.call();
```

 Python SDK

```
DeleteUserAction action = DeleteUserAction()
action.uuid = "80520c9850334934aa67b56c47923a7a"
action.deleteMode = "Permissive"
action.sessionId = "f7070ae8f9bc4bca8e272da70171fdeb"
DeleteUserAction.Result res = action.call()
```

---

### 查询用户(QueryUser)



#### API请求

 URLs

```
GET zstack/v1/accounts/users
GET zstack/v1/accounts/users/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 87ed43cda766436c94c3fd5afcbb21fc" \
-X GET http://localhost:8080/zstack/v1/accounts/users?q=name=test
```


```
curl \
-H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 15b9e66544f84e0495e232ec64596c90" \
-X GET http://localhost:8080/zstack/v1/accounts/users/cf0dde42f06e498eaf41fc4b1c2fe4fa
```



可查询字段

运行CLI命令行工具，输入`QueryUser`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "b369a13fbbf64812802612040590a682",
"accountUuid": "9cf0fc6c3d8146dab03a5727da5ebe2b",
"name": "testuser"
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
| accountUuid | String | 账户UUID | 0.6 |
| name | String | 资源名称 | 0.6 |
| description | String | 资源的详细描述 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryUserAction action = new QueryUserAction();
action.conditions = asList("name=test");
action.sessionId = "6dd33c53214d4673ae3805f618c1726b";
QueryUserAction.Result res = action.call();
```

 Python SDK

```
QueryUserAction action = QueryUserAction()
action.conditions = ["name=test"]
action.sessionId = "66e0b1c03d8b4ec68a54c37ba917548b"
QueryUserAction.Result res = action.call()
```

---

### 更新用户(UpdateUser)



#### API请求

 URLs

```
PUT zstack/v1/accounts/users/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateUser": {
"uuid": "849586db1ac341bf8d4670a62ed9b8ee",
"name": "new"
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateUser":{"uuid":"15c7ee4e52f23f36af2b64ef54b0e128","name":"new"}}' \
http://localhost:8080/zstack/v1/accounts/users/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid (可选) | String | body(包含在**updateUser**结构中) | 资源的UUID，唯一标示该资源 |  | 0.6 |
| password (可选) | String | body(包含在**updateUser**结构中) | 密码 |  | 0.6 |
| name (可选) | String | body(包含在**updateUser**结构中) | 用户名称 |  | 0.6 |
| description (可选) | String | body(包含在**updateUser**结构中) | 资源的详细描述 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
UpdateUserAction action = new UpdateUserAction();
action.uuid = "2faab564de0440c2bbd98606a63a5a3b";
action.name = "new";
action.sessionId = "4f6e13d3b9d94413bf22375065213c4a";
UpdateUserAction.Result res = action.call();
```

 Python SDK

```
UpdateUserAction action = UpdateUserAction()
action.uuid = "bb6e95360dce42749f3bfd938cd83fec"
action.name = "new"
action.sessionId = "f305112833c142bc8f5ee69f76c0c755"
UpdateUserAction.Result res = action.call()
```

---

### 使用用户身份登录(LogInByUser)



#### API请求

 URLs

```
PUT zstack/v1/accounts/users/login
```

 Body

```
{
"logInByUser": {
"accountName": "test",
"userName": "user",
"password": "password" # 需要对密码进行SHA-512算法加密
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X PUT -d '{"logInByUser":{"accountName":"test","userName":"user","password":"password"}}' \
http://localhost:8080/zstack/v1/accounts/users/login
# 需要对密码进行SHA-512算法加密
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid (可选) | String | body(包含在logInByUser结构中) | 账户UUID |  | 0.6 |
| accountName (可选) | String | body(包含在logInByUser结构中) | 账户名称 |  | 0.6 |
| userName | String | body(包含在logInByUser结构中) | 用户名称 |  | 0.6 |
| password | String | body(包含在logInByUser结构中) | 密码 |  | 0.6 |
| clientInfo (可选) | Map | body(包含在**logInByAccount**结构中) | 客户端信息 |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"uuid": "b5a610a81379429eb77545a016968a75",
"accountUuid": "21f081c4696b4e8492aa0afdef9d8e5b",
"expiredDate": "Jun 7, 2017 9:20:37 PM"
"noSessionEvaluation": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SessionInventory | 详情参考[inventory] | 0.6 |

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
| accountUuid | String | 账户UUID | 0.6 |
| userUuid | String | 用户UUID | 0.6 |
| expiredDate | Timestamp | 会话过期日期 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |



#### SDK示例

 Java SDK

```
LogInByUserAction action = new LogInByUserAction();
action.accountName = "test";
action.userName = "user";
action.password = "password"; # 需要对密码进行SHA-512算法加密
LogInByUserAction.Result res = action.call();
```

 Python SDK

```
LogInByUserAction action = LogInByUserAction()
action.accountName = "test"
action.userName = "user"
action.password = "password" # 需要对密码进行SHA-512算法加密
LogInByUserAction.Result res = action.call()
```

---

### 绑定一条策略到用户(AttachPolicyToUser)



#### API请求

 URLs

```
POST zstack/v1/accounts/users/{userUuid}/policies
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "params": {
    "policyUuid": "50c85ab387a93933bc3d03e62137af8f"
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
-X POST -d '{"params":{"policyUuid":"50c85ab387a93933bc3d03e62137af8f"}}' http://localhost:8080/zstack/v1/accounts/users/0967bf18e5e13219ae29e918924a2dcf/policies
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userUuid | String | url | 用户UUID |  | 0.6 |
| policyUuid | String | body (包含在**params**结构中) | 权限策略UUID |  | 4.7.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
AttachPolicyToUserAction action = new AttachPolicyToUserAction();
action.userUuid = "75e68a1812054f64acf656456b03baa4";
action.policyUuid = "d7d9402395b148cf8d78f280f5125f26";
action.sessionId = "51d7fd9a98194317b65daa550bade794";
AttachPolicyToUserAction.Result res = action.call();
```

 Python SDK

```
AttachPolicyToUserAction action = AttachPolicyToUserAction()
action.userUuid = "7c561e42ecd540c2a4e49b4c1f14098f"
action.policyUuid = "eb1ebb663e73491a973be09825ab064d"
action.sessionId = "d1cceff7e99d4310a5f15d5d822f3c26"
AttachPolicyToUserAction.Result res = action.call()
```

---

### 将一条策略从用户解绑(DetachPolicyFromUser)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/groups/{groupUuid}/policies/{policyUuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 7cbe5df712b84b769016bdc8484f7266" \
-X DELETE http://localhost:8080/zstack/v1/accounts/groups/85f398f824c0406e97a1b8dac847c1b4/policies\
/904ff8584f7040dc9871b109210fe497?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| policyUuid | String | url | 权限策略UUID |  | 0.6 |
| groupUuid | String | url | 用户组UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DetachPolicyFromUserGroupAction action = new DetachPolicyFromUserGroupAction();
action.policyUuid = "c0589bc7c00040b296316c0e12b51d59";
action.groupUuid = "75b38fea53fd420cadd9a3d627ffd5e4";
action.sessionId = "617424262377430bb08f77ab856f3d15";
DetachPolicyFromUserGroupAction.Result res = action.call();
```

 Python SDK

```
DetachPolicyFromUserGroupAction action = DetachPolicyFromUserGroupAction()
action.policyUuid = "ae4c808ce9dc4117b16ba7a7efc09cd0"
action.groupUuid = "0870a2177efe4175be538230874fda53"
action.sessionId = "9e8cb02459eb4cdda5dca116d74d13fa"
DetachPolicyFromUserGroupAction.Result res = action.call()
```

---

### 绑定多条策略到用户(AttachPoliciesToUser)



#### API请求

 URLs

```
POST zstack/v1/accounts/users/{userUuid}/policy-collection
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"policyUuids": [
"a511e7401e76451db1d1a0f308164d8a",
"d2653f82c54049179a091e6bc410a8ba"
    ]
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"policyUuids":["619ab16981e93fb28032402506ec52f7","ca7daca8b4a739f1a03d1fdccc988c42"]}}' \
http://localhost:8080/zstack/v1/accounts/users/cd7318ea58d036b1aab8481dfc47c4fe/policy-collection
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userUuid | String | url | 用户UUID |  | 0.6 |
| policyUuids | List | body(包含在params结构中) | 策略的UUID列表 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
AttachPoliciesToUserAction action = new AttachPoliciesToUserAction();
action.userUuid = "13aa76b1909b4536a89b124c62131deb";
action.policyUuids = asList("a7a2ae2b06a946838196d8d673d31b1c","9a7f6d7a54404d7793267a39669269da");
action.sessionId = "6ffafe6f021341ab8ada83c077bfc7a5";
AttachPoliciesToUserAction.Result res = action.call();
```

 Python SDK

```
AttachPoliciesToUserAction action = AttachPoliciesToUserAction()
action.userUuid = "b3d44e5b2b7f43aa815efb4c146b2a9f"
action.policyUuids = [a957c0dbe1794323a61c8268055f5140, 4b154d22a70e44de9ab2d1f818407a0e]
action.sessionId = "adbbb5aa92844bc5895f8d2bada71251"
AttachPoliciesToUserAction.Result res = action.call()
```

---

### 将多条策略从用户解绑(DetachPoliciesFromUser)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/users/{userUuid}/policies?policyUuids={policyUuids}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 32ab85539534426ea5e7495efdc7cd72" \
-X DELETE http://localhost:8080/zstack/v1/accounts/users/30300b8350714679aa490aa80bcb0d3f/policies?policyUuids=977747f623ed38aaae2f317ad35c8b0f&policyUuids=547c8d06f13d3db0b77bd54621cd65de
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| policyUuids | List | body | 策略UUID列表 |  | 0.6 |
| userUuid | String | url | 用户UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DetachPoliciesFromUserAction action = new DetachPoliciesFromUserAction();
action.policyUuids = asList("92ac3dbba2764bc0a0d740a8a80c7942","d11783b09ee14bffbdd16ca856c42b7f");
action.userUuid = "1577443fec9746b9a47656f9e7f1f81a";
action.sessionId = "3d80ce5358a140f89c9942760a83b40b";
DetachPoliciesFromUserAction.Result res = action.call();
```

 Python SDK

```
DetachPoliciesFromUserAction action = DetachPoliciesFromUserAction()
action.policyUuids = [e3b7ef2416bb4960b592e817a626b351, 1e61ce554f6647099f7545fe49fccea9]
action.userUuid = "11edbda7d9d5406f9beb1e9dc9ff2b3c"
action.sessionId = "d04ed26067504e77905b8651927034b1"
DetachPoliciesFromUserAction.Result res = action.call()
```

---

### 创建策略(CreatePolicy)



#### API请求

 URLs

```
POST zstack/v1/accounts/policies
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"name": "USER-RESET-PASSWORD",
"statements": [
      {
"name": "user-reset-password-5d0159c128e14758b2c66a319e6cb0b8",
"effect": "Allow",
"actions": [
"identity:APIUpdateUserMsg"
        ]
      }
    ]
  },
"systemTags": [],
"userTags": []
}
```



上述示例中systemTags、userTags字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"name":"USER-RESET-PASSWORD","statements":[{"name":"user-reset-password-f5f9e3b82e9e39448c1b09b10d0211c8","effect":"Allow","actions":["identity:APIUpdateUserMsg"]}]}}' \
http://localhost:8080/zstack/v1/accounts/policies
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| name | String | body(包含在params结构中) | 资源名称 |  | 0.6 |
| description (可选) | String | body(包含在params结构中) | 资源的详细描述 |  | 0.6 |
| statements | List | body(包含在params结构中) | 策略声明 |  | 0.6 |
| resourceUuid (可选) | String | body(包含在params结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"statements": [
      {
"name": "user-reset-password-e0a7a495b8384b3ca3922c31b133f318",
"effect": "Allow",
"actions": [
"identity:APIUpdateUserMsg"
        ]
      }
    ],
"name": "USER-RESET-PASSWORD",
"uuid": "e0a7a495b8384b3ca3922c31b133f318",
"accountUuid": "14cf676b762f4defb60a67e2ff212ce5"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | PolicyInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| accountUuid | String | 账户UUID | 0.6 |
| statements | List | 详情参考[statements] | 0.6 |

 #statements

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| principals | List |  | 0.6 |
| actions | List | 一个匹配API的字符串列表 | 0.6 |
| resources | List | 资源列表 | 0.6 |
| effect | StatementEffect | 详情参考[effect] | 0.6 |

 #effect

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int | 序号 | 0.6 |



#### SDK示例

 Java SDK

```
CreatePolicyAction action = new CreatePolicyAction();
action.name = "USER-RESET-PASSWORD";
action.statements = asList([name:user-reset-password-e3d9eaa96d194f3e8c5c1f68126433f8, effect:Allow, actions:[identity:APIUpdateUserMsg]]);
action.sessionId = "e6e07201e51f410f92f9f5cca362ae7c";
CreatePolicyAction.Result res = action.call();
```

 Python SDK

```
CreatePolicyAction action = CreatePolicyAction()
action.name = "USER-RESET-PASSWORD"
action.statements = [[name:user-reset-password-ee67ad94c9c845c7a84610489e9b6b38, effect:Allow, actions:[identity:APIUpdateUserMsg]]]
action.sessionId = "f66df3c4bcd041e1ba3427cc29a214bb"
CreatePolicyAction.Result res = action.call()
```

---

### 删除策略(DeletePolicy)



#### API请求

 URLs

```
DELETE zstack/v1/accounts/policies/{uuid}?deleteMode={deleteMode}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 93d4e3a2a9284ca39ce66dd16fe4969d" \
-X DELETE http://localhost:8080/zstack/v1/accounts/policies/cb26b0dc3e884b778340866f8874d0a7?deleteMode=Permissive
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuid | String | url | 资源的UUID，唯一标示该资源 |  | 0.6 |
| deleteMode (可选) | String | body | 删除模式 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
DeletePolicyAction action = new DeletePolicyAction();
action.uuid = "8016dfed1d21461282c0bb727caf64b0";
action.deleteMode = "Permissive";
action.sessionId = "5a07babcc136411ebbf2e44dd82ff120";
DeletePolicyAction.Result res = action.call();
```

 Python SDK

```
DeletePolicyAction action = DeletePolicyAction()
action.uuid = "ada726f1b3d24fa38d0989d9dd15dc92"
action.deleteMode = "Permissive"
action.sessionId = "5886ee75912e4fd8adc38004de563eca"
DeletePolicyAction.Result res = action.call()
```

---

### 查询策略(QueryPolicy)



#### API请求

 URLs

```
GET zstack/v1/accounts/policies
GET zstack/v1/accounts/policies/{uuid}
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 766a381351a44b6b8fc4c20effb62f65" \
-X GET http://localhost:8080/zstack/v1/accounts/policies?q=name=test
```


```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 8d17ab76304a4e50871d4a2f189e32de" \
-X GET http://localhost:8080/zstack/v1/accounts/policies/dd36dffd40d14081a94ff4a024ee54ce
```



可查询字段

运行CLI命令行工具，输入`QueryPolicy`并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
"inventories": [
    {
"statements": [
        {
"name": "user-reset-password-10e0d5dc0a4846c8b7e2e204aa014370",
"effect": "Allow",
"actions": [
"identity:APIUpdateUserMsg"
          ]
        }
      ],
"name": "USER-RESET-PASSWORD",
"uuid": "10e0d5dc0a4846c8b7e2e204aa014370",
"accountUuid": "2884beb74bff43569096365a90e696fb"
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
| name | String | 资源名称 | 0.6 |
| uuid | String | 资源的UUID，唯一标示该资源 | 0.6 |
| accountUuid | String | 账户UUID | 0.6 |
| statements | List | 详情参考[statements] | 0.6 |

 #statements

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| principals | List |  | 0.6 |
| actions | List | 一个匹配API的字符串列表 | 0.6 |
| resources | List | 资源列表 | 0.6 |
| effect | StatementEffect | 详情参考[effect] | 0.6 |

 #effect

| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| name | String | 资源名称 | 0.6 |
| ordinal | int | 序号 | 0.6 |



#### SDK示例

 Java SDK

```
QueryPolicyAction action = new QueryPolicyAction();
action.conditions = asList("name=test");
action.sessionId = "12d48774c4b94e35a62cd8d715a2f6a5";
QueryPolicyAction.Result res = action.call();
```

 Python SDK

```
QueryPolicyAction action = QueryPolicyAction()
action.conditions = ["name=test"]
action.sessionId = "a0233a244b7e41ca9aa1322294dfd4a6"
QueryPolicyAction.Result res = action.call()
```

---

### 查询配额(QueryQuota)



#### API请求

 URLs

```
GET zstack/v1/accounts/quotas
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth c8070838ec0249cabfe576fc519d54b4" \
-X GET http://localhost:8080/zstack/v1/accounts/quotas?q=name=test
```



可查询字段

运行CLI命令行工具，输入QueryQuota并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
"inventories": [
    {
"name": "quota",
"identityUuid": "bdb6f9724a0d40d69ffa47856a916f93",
"value": 20.0
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
| name | String | 资源名称 | 0.6 |
| identityUuid | String | 身份UUID（账户UUID，用户UUID） | 0.6 |
| identityType | String | 身份类型（账户，用户） | 0.6 |
| value | Long | 默认配额值 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |



#### SDK示例

 Java SDK

```
QueryQuotaAction action = new QueryQuotaAction();
action.conditions = asList("name=test");
action.sessionId = "c9097f025877470d92b5f07e1bdd47f4";
QueryQuotaAction.Result res = action.call();
```

 Python SDK

```
QueryQuotaAction action = QueryQuotaAction()
action.conditions = ["name=test"]
action.sessionId = "c72011b5cc94485dadac4d6be216bb86"
QueryQuotaAction.Result res = action.call()
```

---

### 更新配额(UpdateQuota)



#### API请求

 URLs

```
PUT zstack/v1/accounts/quotas/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"updateQuota": {
"identityUuid": "55dc6ddab7a749d5b7e38b684daf4489",
"name": "quotaname",
"value": 20.0
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"updateQuota":{"identityUuid":"4d45e6c7787733979415760d2077fca0","name":"quotaname","value":20.0}}' \
http://localhost:8080/zstack/v1/accounts/quotas/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| identityUuid | String | body(包含在**updateQuota**结构中) | 身份实体的UUID（账户的） |  | 0.6 |
| name | String | body(包含在**updateQuota**结构中) | 资源名称 |  | 0.6 |
| value | long | body(包含在**updateQuota**结构中) | 配额值 |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"name": "quota",
"identityUuid": "991e8d478a404416b2ac60ba19a5001f",
"value": 20.0
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | QuotaInventory | 详情参考[inventory] | 0.6 |

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
| name | String | 资源名称 | 0.6 |
| identityUuid | String | 身份UUID（账户UUID，用户UUID） | 0.6 |
| identityType | String | 身份类型（账户，用户） | 0.6 |
| value | Long | 默认配额值 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |



#### SDK示例

 Java SDK

```
UpdateQuotaAction action = new UpdateQuotaAction();
action.identityUuid = "38038cff62c74a638be4be37dd005aeb";
action.name = "quotaname";
action.value = 20.0;
action.sessionId = "00e4d2ccc6c44909886bddcd83c8362c";
UpdateQuotaAction.Result res = action.call();
```

 Python SDK

```
UpdateQuotaAction action = UpdateQuotaAction()
action.identityUuid = "bf4b6809cf58435b8c39764e38e291e4"
action.name = "quotaname"
action.value = 20.0
action.sessionId = "cf6c686607704665a5ced86bb8824994"
UpdateQuotaAction.Result res = action.call()
```

---

### 获取资源名称(GetResourceNames)



#### API请求

 URLs

```
GET zstack/v1/resources/names
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl  -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 00c30442f2dc4b8c8473c19c7e74e8d3" \
-X GET http://localhost:8080/zstack/v1/resources/names?uuids=e9bfb5dac23940faabfacffc78c08515&uuids=360b13b4c34c473bb025457853ed11e2
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| uuids | List | query | 资源的UUID列表 |  | 0.6 |
| systemTags (可选) | List | query |  |  | 0.6 |
| userTags (可选) | List | query |  |  | 0.6 |



#### API返回

 返回示例

```
{
"inventories": [
    {
"uuid": "924c3b8f2c6243009b344663fe058c8a",
"resourceName": "zone",
"resourceType": "ZoneVO"
    },
    {
"uuid": "94eb4667d8d444108410cc9d4a3a06df",
"resourceName": "vm",
"resourceType": "VmInstanceVO"
    }
  ]
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 2.0 |
| inventories | List | 详情参考[inventories] | 2.0 |

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
| uuid | String | 资源的UUID，唯一标示该资源 | 2.0 |
| resourceName | String | 资源名称 | 2.0 |
| resourceType | String | 资源类型，例如虚拟机为VmInstanceVO | 2.0 |



#### SDK示例

 Java SDK

```
GetResourceNamesAction action = new GetResourceNamesAction();
action.uuids = asList("070e5ad04d0642e49bcdecf4d823756f","b5abed013df445639a3a186457e2e5cf");
action.sessionId = "7504d193416f4ba8972b18171fd8b8a5";
GetResourceNamesAction.Result res = action.call();
```

 Python SDK

```
GetResourceNamesAction action = GetResourceNamesAction()
action.uuids = [312b7575044b4e839d537a57c19e08dd, 1f2630f284f7473b8dfcf9768dedea71]
action.sessionId = "0845cfcd381f494298408b55858027ec"
GetResourceNamesAction.Result res = action.call()
```

---

### 查询共享资源(QuerySharedResource)



#### API请求

 URLs

```
GET zstack/v1/accounts/resources
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth 3e4cb7624a3e4fb29a2cc4ff78886dee" \
-X GET http://localhost:8080/zstack/v1/accounts/resources?q=accountUuid=8d10cb2b1713476a9bea6dc858440f43
```



可查询字段

运行CLI命令行工具，输入QuerySharedResource并按Tab键查看所有可查询字段以及可跨表查询的资源名。

#### API返回

 返回示例

```
{
"inventories": [
    {
"ownerAccountUuid": "459f08b3915d4c06817e36587bd91fbb",
"receiverAccountUuid": "3de68725726544209999d5ec8172926e",
"toPublic": false,
"resourceType": "ImageVO",
"resourceUuid": "01f2f1309e9f4d67955a0648df6963a0"
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
| ownerAccountUuid | String | 所有者账户UUID | 0.6 |
| receiverAccountUuid | String | 接受者账户UUID | 0.6 |
| toPublic | Boolean | 是否全局共享 | 0.6 |
| resourceType | String | 资源类型 | 0.6 |
| resourceUuid | String | 资源UUID | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |



#### SDK示例

 Java SDK

```
QuerySharedResourceAction action = new QuerySharedResourceAction();
action.conditions = asList("accountUuid=f96b5eeb13664c279c7cf35b62926b0a");
action.sessionId = "3cd36c2836ab4997ae18ef5d5e834ae7";
QuerySharedResourceAction.Result res = action.call();
```

 Python SDK

```
QuerySharedResourceAction action = QuerySharedResourceAction()
action.conditions = ["accountUuid=58c6de28e4854df8b15849d9317aaeac"]
action.sessionId = "00609fd22d5a4eb4bfb2abcd5fcf2fef"
QuerySharedResourceAction.Result res = action.call()
```

---

### 解除资源共享(RevokeResourceSharing)



#### API请求

 URLs

```
PUT zstack/v1/accounts/resources/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"revokeResourceSharing": {
"resourceUuids": [
"dcaffbb395944eb28df4e63a2a1b9f8d",
"47fc53a8addf4daea866457f633eca49"
    ],
"toPublic": false,
"accountUuids": [
"06c6efc4c8b34488a7bc42a55df36ff8",
"6eea9ce615d341bfa7737e730088e9f3"
    ],
"all": false
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"revokeResourceSharing":{"resourceUuids":["6551ce5374243f14875351219cdb69ba","18501632374c331692e10ab976f56e28"],"toPublic":false,"accountUuids":["9a0c56a8bcbd31edbd384b28b8ffeffc","3627b63ad55939cf8df5fa4848abd6f2"],"all":false}}' \
http://localhost:8080/zstack/v1/accounts/resources/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| resourceUuids | List | body(包含在revokeResourceSharing结构中) | 资源UUID列表 |  | 0.6 |
| toPublic (可选) | boolean | body(包含在结构中) | 全局共享 |  | 0.6 |
| accountUuids (可选) | List | body(包含在revokeResourceSharing结构中)说明: all参数设为false时，账户UUID不能为空 | 账户UUID列表 |  | 0.6 |
| all (可选) | boolean | body(包含在revokeResourceSharing结构中) |  |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
RevokeResourceSharingAction action = new RevokeResourceSharingAction();
action.resourceUuids = asList("8c4c9fa690ff4e2696dbe2be4b020bb1","88fc827d508a41cf9d1384f0139c5c1d");
action.toPublic = false;
action.accountUuids = asList("5272e8a31e854ee38d136f772c4f6fa9","a8a552a327f44f09a76d96d45a655150");
action.all = false;
action.sessionId = "5a025e658940490c98609cdb5251b83d";
RevokeResourceSharingAction.Result res = action.call();
```

 Python SDK

```
RevokeResourceSharingAction action = RevokeResourceSharingAction()
action.resourceUuids = [0f849f45aaeb4c23b74821030825d785, cb9a412086fc49d5ae24782b40aedbe9]
action.toPublic = false
action.accountUuids = [bc7666d3e7fb4eaa9683bf62cdd2df1e, 5046a88fdc7c40fc90b29c47b96176d5]
action.all = false
action.sessionId = "b6b1787762424c2bb81ac6d8fbac84b4"
RevokeResourceSharingAction.Result res = action.call()
```

---

### 变更资源所有者(ChangeResourceOwner)



#### API请求

 URLs

```
POST zstack/v1/account/{accountUuid}/resources
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"params": {
"resourceUuid": "d2ed71c00bfb40128df81f493935b6e1"
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X POST -d '{"params":{"resourceUuid":"abfee8286ae43b19a02179cfe37b3294"}}' \
http://localhost:8080/zstack/v1/account/e9da3eb01abc31c78ac24dec8c8c36b5/resources
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| accountUuid | String | url | 账户UUID |  | 0.6 |
| resourceUuid | String | body(包含在`params`结构中) | 资源UUID |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"id": 1.0,
"accountUuid": "da02579d9641446db9a6d37a8c80091e",
"resourceUuid": "81bab520db724e5e9336513f9132e36e",
"resourceType": "ImageVO",
"isShared": false
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | AccountResourceRefInventory | 详情参考[inventory] | 0.6 |

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
| accountUuid | String | 账户UUID | 0.6 |
| resourceUuid | String | 资源UUID | 0.6 |
| resourceType | String | 资源类型 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |
| lastOpDate | Timestamp | 最后一次修改时间 | 0.6 |



#### SDK示例

 Java SDK

```
ChangeResourceOwnerAction action = new ChangeResourceOwnerAction();
action.accountUuid = "fc928d9a7aae4878bdc5c66c65047ece";
action.resourceUuid = "361e14e7b0164cfab336157439d01e0b";
action.sessionId = "41fbe11e8106405e9b80dc8c025f9375";
ChangeResourceOwnerAction.Result res = action.call();
```

 Python SDK

```
ChangeResourceOwnerAction action = ChangeResourceOwnerAction()
action.accountUuid = "d9830eb0fcc0421683821ee360519b3c"
action.resourceUuid = "e05f53fe5c524567a328f4c36a19f22a"
action.sessionId = "19a6e968033f45b4bcfbd22610bfbcd9"
ChangeResourceOwnerAction.Result res = action.call()
```

---

### 检查API权限(CheckApiPermission)



#### API请求

 URLs

```
PUT zstack/v1/accounts/permissions/actions
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
"checkApiPermission": {
"userUuid": "70168720d76e4e3890604027c9f755a9",
"apiNames": [
"APICheckApiPermissionMsg"
    ]
  },
"systemTags": [],
"userTags": []
}
```



上述示例中`systemTags`、`userTags`字段可以省略。列出是为了表示body中可以包含这两个字段。 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-H "Authorization: OAuth b86c9016b4f24953a9edefb53ca0678c" \
-X PUT -d '{"checkApiPermission":{"userUuid":"927a64d62f9d3dd099743952a297b8c0","apiNames":["APICheckApiPermissionMsg"]}}' \
http://localhost:8080/zstack/v1/accounts/permissions/actions
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| userUuid (可选) | String | body(包含在**checkApiPermission**结构中) | 用户UUID |  | 0.6 |
| apiNames | List | body(包含在**checkApiPermission**结构中) | API名称列表说明: 例如： |  | 0.6 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"inventory": {
"APICheckApiPermissionMsg": "Allow"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| inventory | Map | API权限清单 | 0.6 |
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



#### SDK示例

 Java SDK

```
CheckApiPermissionAction action = new CheckApiPermissionAction();
action.userUuid = "c12663e4e58a474dbd5ed36511876ccc";
action.apiNames = asList("APICheckApiPermissionMsg");
action.sessionId = "f855e33926484a679f19573e931c0894";
CheckApiPermissionAction.Result res = action.call();
```

 Python SDK

```
CheckApiPermissionAction action = CheckApiPermissionAction()
action.userUuid = "fa7addff47d84bf3bddd5f98defb8211"
action.apiNames = [APICheckApiPermissionMsg]
action.sessionId = "b9e0b4b8ee5a4051a1830fd247e9b896"
CheckApiPermissionAction.Result res = action.call()
```

---

### 验证会话的有效性(ValidateSession)



#### API请求

 URLs

```
GET zstack/v1/accounts/sessions/{sessionUuid}/valid
```

 Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X GET http://localhost:8080/zstack/v1/accounts/sessions/52a1bfa21ef94cc6b7f70096c8a32a0c/valid?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sessionUuid | String | url | 会话UUID |  | 0.6 |
| systemTags (可选) | List | query | 系统标签 |  | 0.6 |
| userTags (可选) | List | query | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
"validSession": true
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| valid | boolean | 会话是否有效 | 0.6 |
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



#### SDK示例

 Java SDK

```
ValidateSessionAction action = new ValidateSessionAction();
action.sessionId = "3f791329d8ed4f7bb4fb3eb2aa70527e";
ValidateSessionAction.Result res = action.call();
```

 Python SDK

```
ValidateSessionAction action = ValidateSessionAction()
action.sessionId = "763d6cb8d60d43a68de3a2b4e85cfc72"
ValidateSessionAction.Result res = action.call()
```

---

### 更新会话(RenewSession)



#### API请求

 URLs

```
PUT zstack/v1/accounts/sessions/{sessionUuid}/renew
```

 Headers

```
Authorization: OAuth the-session-uuid
```

 Body

```
{
  "renewSession": {
    "duration": 100.0
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
-X PUT -d '{"renewSession":{"duration":100.0}}' \
http://localhost:8080/zstack/v1/accounts/sessions/7b93b7648aea3c8d9109498a32288470/renew
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sessionUuid | String | url | 会话uuid |  | 0.6 |
| duration (可选) | Long | body(包含在**renewSession**结构中) |  |  | 2.3 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



#### API返回

 返回示例

```
{
  "inventory": {
    "uuid": "dce673d8c6d53988b188b4ac34e7304d",
    "accountUuid": "fa58814a623d3778a8c91d11b74c6d38",
    "expiredDate": "Nov 14, 2017 10:20:57 PM"
  }
}
```



| 名字 | 类型 | 描述 | 起始版本 |
| --- | --- | --- | --- |
| error | ErrorCode | 错误码，若不为null，则表示操作失败, 操作成功时该字段为null。 详情参考[error] | 0.6 |
| inventory | SessionInventory | 详情参考[inventory] | 0.6 |

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
| accountUuid | String | 账户UUID | 0.6 |
| userUuid | String | 用户UUID | 0.6 |
| expiredDate | Timestamp | 会话过期日期 | 0.6 |
| createDate | Timestamp | 创建时间 | 0.6 |



#### SDK示例

 Java SDK

```
RenewSessionAction action = new RenewSessionAction();
action.sessionUuid = "7b93b7648aea3c8d9109498a32288470";
action.duration = 100.0;
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c";
RenewSessionAction.Result res = action.call();
```

 Python SDK

```
RenewSessionAction action = RenewSessionAction()
action.sessionUuid = "7b93b7648aea3c8d9109498a32288470"
action.duration = 100.0
action.sessionId = "b86c9016b4f24953a9edefb53ca0678c"
RenewSessionAction.Result res = action.call()
```

---

### 退出当前登录状态(LogOut)



#### API请求



URLs

```
DELETE zstack/v1/accounts/sessions/{sessionUuid}
```

  Curl示例

```
curl -H "Content-Type: application/json;charset=UTF-8" \
-X DELETE http://localhost:8080/zstack/v1/accounts/sessions/2f1ebb34e54f4239bbd2080088804194?
```

 参数列表

| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| sessionUuid (可选) | String | url | 会话UUID |  | 0.6 |
| clientInfo (可选) | Map | body(包含在**logInByAccount**结构中) | 客户端信息 |  | 3.5.0 |
| systemTags (可选) | List | body | 系统标签 |  | 0.6 |
| userTags (可选) | List | body | 用户标签 |  | 0.6 |



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
LogOutAction action = new LogOutAction();
action.sessionId = "0c7e729fb59945938752cd4ec99c2a94";
LogOutAction.Result res = action.call();
```

 Python SDK

```
LogOutAction action = LogOutAction()
action.sessionId = "1cb84b3f5713432aaf42bc230c32aa20"
LogOutAction.Result res = action.call()
```
