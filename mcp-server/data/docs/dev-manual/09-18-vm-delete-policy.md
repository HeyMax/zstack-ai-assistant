# 如何修改云主机删除策略 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.18.html*

---

## 如何修改云主机删除策略



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API修改云主机删除策略。本文主要以管理员身份（admin）登录管理节点系统，介绍如何修改云主机删除策略。

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
   - Direct：从数据库彻底删除云主机并删除对应根云盘
   - Delay：从数据库变更云主机状态为已删除，到达预设置延迟时间节点，彻底删除云主机并删除对应根云盘
   - Never：从数据库彻底删除云主机并保留对应根云盘
 返回结果为：

```
{"apiTimeout":1800000,"location":"http://172.20.14.227:8080/zstack/v1/api-jobs/e88336d52b9a4ea7aef950e29d2cb24f"}
```

其中：
   - location字段为请求修改目标云主机删除策略API操作返回的轮询地址
 2. location字段为请求修改目标云主机删除策略API操作返回的轮询地址
   - value字段即为所修改目标云主机删除策略，当前生效值：Direct
 3. value字段即为所修改目标云主机删除策略，当前生效值：Direct


至此，完成云主机删除策略修改设置。
