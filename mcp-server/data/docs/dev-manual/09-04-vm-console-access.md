# 如何获取云主机控制台地址并打开云主机控制台 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.4.html*

---

## 如何获取云主机控制台地址并打开云主机控制台



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API获取云主机控制台地址。本文主要以管理员身份（admin）登录管理节点系统，获取云主机控制台地址，并展示如何打开云主机控制台。您也可以使用云平台其他已授权账户/用户身份登录系统进行获取。

### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"cbc32f54862f4a5296b97a1302975fb9","accountUuid":"a07965e9d6f34924824fc5e9a6518fc3","userUuid":"a07965e9d6f34924824fc5e9a6518fc3","expiredDate":"Oct 17, 2022 10:43:53 PM","createDate":"Oct 17, 2022 8:43:53 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID，表示登录成功
 1. uuid字段即为获取的本次Session的ID，表示登录成功
   - vmInstanceUuid字段为目标云主机的UUID
 返回结果为：

```
{"apiTimeout":1800000,"location":"http://172.20.14.227:8080/zstack/v1/api-jobs/c41ec46dd7f546a48c31d9d0ca2c89d8"}
```

其中：
   - location字段为请求云主机控制台访问地址异步API操作返回的轮询地址
 2. location字段为请求云主机控制台访问地址异步API操作返回的轮询地址
   - scheme字段为访问云主机控制台的应用协议
   - targetScheme字段为云主机控制台协议
   - hostname字段为云主机所在物理机的主机名
   - port字段为云主机控制台访问端口
   - token字段为云主机控制台访问密钥
 3. token字段为云主机控制台访问密钥
 4. 打开云主机控制台：将以上字段拼接，即可获取云主机控制台地址为：[http://172.20.19.60:5000/novnc?host=172.20.16.95&port=4900&token=cbc32f54862f4a5296b97a1302975fb9_f601842905994688a3cf7100e8d54b23_1666013527.59]。用户可将该地址输入至Chrome或Firefox浏览器，即可打开云主机控制台。如[图 1]所示：图 1. 打开云主机控制台  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0684_1.png)


至此，云主机控制台地址已成功获取并打开。
