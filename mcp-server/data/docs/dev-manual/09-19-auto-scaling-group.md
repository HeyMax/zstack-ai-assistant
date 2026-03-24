# 如何创建弹性伸缩组 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.19.html*

---

## 如何创建弹性伸缩组



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API创建弹性伸缩组。本文主要以管理员身份（admin）登录管理节点系统，介绍如何创建弹性伸缩组。您也可以使用云平台其他已授权账户/用户身份登录系统创建。 调用API创建弹性伸缩组前，需确保：
 - 云主机所需的物理机、主存储、镜像、计算规格、二层网络、三层网络等资源均已准备就绪。详细可参考[如何初始化云平台]。
   1. 登录云平台
   2. 创建弹性伸缩组
   3. 创建伸缩组云主机扩容规则
   4. 创建伸缩组云主机缩容规则
   5. 创建扩容告警器
   6. 创建伸缩规则报警触发器（扩容）
   7. 创建收缩告警器
   8. 创建伸缩规则报警触发器（缩容）
   9. 创建伸缩组云主机模块
   10. 将云主机模块添加到弹性伸缩组
   11. 修改弹性伸缩组启用状态
  - 修改弹性伸缩组启用状态


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"c1475b57580c41df99f3cfe7d17d4286","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Nov 4, 2022 3:13:56 PM","createDate":"Nov 4, 2022 1:13:56 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/groups
   - name：必填项，设置弹性伸缩组名称
   - scalingResourceType：必填项，伸缩组伸缩资源类型，目前只支持云主机
   - minResourceSize：必填项，设置伸缩组内云主机最少数量
   - maxResourceSize：必填项，设置伸缩组内云主机最多数量
   - defaultCooldown：必填项，设置伸缩组规则默认冷却时间
   - removalPolicy：删除云主机规则，可选值为：OldestInstance、NewestInstance、OldestScalingConfiguration、MinimumCPUUsageInstance、MinimumMemoryUsageInstance
 返回结果：

```
{"inventory":{"name":"test-group","uuid":"9621e83f31944a09b293de9c4d76efa6","scalingResourceType":"VmInstance","state":"Disabled","defaultCooldown":60,"description":"just for test","minResourceSize":2,"maxResourceSize":10,"removalPolicy":"OldestInstance","createDate":"Nov 4, 2022 1:20:01 PM","lastOpDate":"Nov 4, 2022 1:20:01 PM","attachedTemplates":[],"systemTags":[]}}
```

其中：
   - uuid字段即为所创建成功的弹性伸缩组的UUID
 2. uuid字段即为所创建成功的弹性伸缩组的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/rules/adding-new-instance
   - name：必填项，设置伸缩组云主机扩容规则名称
   - adjustmentType：必填项，设置扩容方式：增加指定数量云主机，按百分比增加云主机，增加云主机数量到指定值，可选值为：QuantityChangeInCapacity、PercentChangeInCapacity、TotalCapacity
   - adjustmentValue：必填项，设置要增加的大小值
   - autoScalingGroupUuid：必填项，指定伸缩组UUID
 返回结果：

```
{"inventory":{"adjustmentType":"PercentChangeInCapacity","adjustmentValue":1,"type":"AddingNewInstanceRule","description":"just for test","cooldown":10,"state":"Enabled","status":"Created","systemTags":[],"createDate":"Nov 4, 2022 3:13:02 PM","lastOpDate":"Nov 4, 2022 3:13:02 PM","name":"addingNewInstance","uuid":"d5f19827d6f448e69ae79d1c8e65d09c","scalingGroupUuid":"9621e83f31944a09b293de9c4d76efa6","ruleTriggers":[]}}
```

3. autoScalingGroupUuid：必填项，指定伸缩组UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/rules/removal-instance
   - adjustmentType：必填项，设置扩容方式：增加指定数量云主机，按百分比增加云主机，增加云主机数量到指定值，可选值为：QuantityChangeInCapacity、PercentChangeInCapacity、TotalCapacity
   - adjustmentValue：必填项，设置减少数值
   - removalPolicy：删除云主机规则，可选值为：OldestInstance、NewestInstance、OldestScalingConfiguration、MinimumCPUUsageInstance、MinimumMemoryUsageInstance
   - name：必填项，指定资源名称
 返回结果：

```
{"inventory":{"removalPolicy":"MinimumMemoryUsageInstance","adjustmentType":"PercentChangeInCapacity","adjustmentValue":1,"type":"RemovalInstanceRule","description":"just for test","cooldown":10,"state":"Enabled","status":"Created","systemTags":[],"createDate":"Nov 4, 2022 1:38:16 PM","lastOpDate":"Nov 4, 2022 1:38:16 PM","name":"removalInstance","uuid":"1bbf6119e90745f8808332ce1715627d","scalingGroupUuid":"9621e83f31944a09b293de9c4d76efa6","ruleTriggers":[]}}
```

4. name：必填项，指定资源名称
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/alarms
 返回结果：

```
{"inventory":{"uuid":"1c587aa959dc44faad8130b6e056ff7c","name":"test-Expansion-Strategy-Alarm","description":"","comparisonOperator":"GreaterThan","period":60,"namespace":"ZStack/VM","metricName":"MemoryUsedInPercent","threshold":70.0,"repeatInterval":60,"repeatCount":-1,"status":"OK","state":"Enabled","enableRecovery":false,"createDate":"Nov 4, 2022 3:15:48 PM","lastOpDate":"Nov 4, 2022 3:15:48 PM","labels":[{"uuid":"284828fdd2644c368590577787578298","key":"VMUuid","operator":"Regex","value":"none","alarmUuid":"1c587aa959dc44faad8130b6e056ff7c"}],"actions":[],"emergencyLevel":"Important"}}
```

5. HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/alarms
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/alarms/{alarmUuid}/autoscaling/rules/{ruleUuid}
   - name：必填项，触发器名称
   - ruleUuid：必填项，伸缩规则UUID
 返回结果：

```
{"inventory":{"alarmUuid":"1c587aa959dc44faad8130b6e056ff7c","name":"Expansion-Strategy-Alarm-Rule","uuid":"ecd46ef2a77b4511913d9914d5e043db","type":"Alarm","ruleUuid":"1bbf6119e90745f8808332ce1715627d","state":"Enabled","createDate":"Nov 4, 2022 3:18:40 PM","lastOpDate":"Nov 4, 2022 3:18:40 PM"}}
```

6. ruleUuid：必填项，伸缩规则UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/alarms
 返回结果：

```
{"inventory":{"uuid":"caf304f3660e4604808f362238e0099c","name":"Shrinkage-Strategy-Alarm","description":"","comparisonOperator":"LessThan","period":60,"namespace":"ZStack/VM","metricName":"MemoryUsedInPercent","threshold":70.0,"repeatInterval":60,"repeatCount":-1,"status":"OK","state":"Enabled","enableRecovery":false,"createDate":"Nov 4, 2022 2:22:54 PM","lastOpDate":"Nov 4, 2022 2:22:54 PM","labels":[{"uuid":"b9c2ca6bac0f45eba4e40b9faf6569b7","key":"VMUuid","operator":"Regex","value":"none","alarmUuid":"caf304f3660e4604808f362238e0099c"}],"actions":[],"emergencyLevel":"Important"}}
```

7. HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/alarms
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/alarms/{alarmUuid}/autoscaling/rules/{ruleUuid}
   - name：必填项，触发器名称
   - ruleUuid：必填项，伸缩规则UUID
 返回结果：

```
{"inventory":{"alarmUuid":"caf304f3660e4604808f362238e0099c","name":"test-Shrinkage-Strategy-Alarm-Rule","uuid":"0888ca83ee8748a184d43d4fec02eb2f","type":"Alarm","ruleUuid":"1bbf6119e90745f8808332ce1715627d","state":"Enabled","createDate":"Nov 4, 2022 2:37:39 PM","lastOpDate":"Nov 4, 2022 2:37:39 PM"}}
```

8. ruleUuid：必填项，伸缩规则UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/vmtemplate
   - vmInstanceName：必填项，云主机名称
   - vmInstanceOfferingUuid：必填项，云主机实例规格
   - imageUuid：必填项，云主机镜像UUID
   - l3NetworkUuids：必填项，云主机三层网络列表
   - defaultL3NetworkUuid：必填项，云主机默认三层网络
   - name：必填项，资源名称
 返回结果：

```
{"inventory":{"vmInstanceName":"slb","vmInstanceType":"UserVm","vmInstanceDescription":"","vmInstanceOfferingUuid":"20bd1274177b4e7fa312ff2ab147cef3","imageUuid":"d8495a014ef34d88aa28c239ccbdbfc3","l3NetworkUuids":["786ddcec73224307929ac2ee63be0955"],"dataDiskOfferingUuids":[],"defaultL3NetworkUuid":"786ddcec73224307929ac2ee63be0955","strategy":"InstantStart","uuid":"f8f324a60e7f429aa4cab3d54ac6a823","name":"test","description":"","type":"UserVm","state":"Enabled","createDate":"Nov 4, 2022 2:57:41 PM","lastOpDate":"Nov 4, 2022 2:57:41 PM"}}
```

9. name：必填项，资源名称
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/template/{uuid}/groups/{groupUuid}
   - uuid：必填项，模板UUID
   - groupUuid：必填项，伸缩组UUID
 返回结果：

```
{"inventory":{"name":"test-group","uuid":"9621e83f31944a09b293de9c4d76efa6","scalingResourceType":"VmInstance","state":"Disabled","defaultCooldown":60,"description":"just for test","minResourceSize":2,"maxResourceSize":10,"removalPolicy":"OldestInstance","createDate":"Nov 4, 2022 1:20:01 PM","lastOpDate":"Nov 4, 2022 1:20:01 PM","attachedTemplates":["f8f324a60e7f429aa4cab3d54ac6a823"],"systemTags":[]}}
```

10. groupUuid：必填项，伸缩组UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/groups/{uuid}/actions
   - uuid：必填项，弹性伸缩组UUID
   - stateEvent：设置为开启或者关闭，可选值为:enable、disable
 返回结果：

```
{"inventory":{"name":"test-group","uuid":"9621e83f31944a09b293de9c4d76efa6","scalingResourceType":"VmInstance","state":"Enabled","defaultCooldown":60,"description":"just for test","minResourceSize":2,"maxResourceSize":10,"removalPolicy":"OldestInstance","createDate":"Nov 4, 2022 1:20:01 PM","lastOpDate":"Nov 4, 2022 3:23:18 PM","attachedTemplates":["f8f324a60e7f429aa4cab3d54ac6a823"],"systemTags":[]}}
```

11. stateEvent：设置为开启或者关闭，可选值为:enable、disable
