# 如何创建性能共享型负载均衡 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.20.html*

---

## 如何创建性能共享型负载均衡



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API创建性能共享型负载均衡。本文主要以管理员身份（admin）登录管理节点系统，介绍如何创建性能共享型负载均衡。您也可以使用云平台其他已授权账户/用户身份登录。 调用API登录云平台前，需确保：
 - 云主机所需的物理机、主存储、镜像、计算规格、二层网络、三层网络等资源均已准备就绪。详细可参考[如何初始化云平台]。说明: 建议一个二层网络对应创建一个三层网络
   - 若前端网络为VPC网络，后端网络可为挂载该VPC网络的VPC路由器下的所有VPC网络。
  - 若前端网络为公有网络，后端网络可为挂载该公有网络的VPC路由器下的所有VPC网络。
- 若前端网络为公有网络，后端网络可为挂载该公有网络的VPC路由器下的所有VPC网络。
  API调用流程概览：
 1. 登录云平台
 2. 创建虚拟IP
 3. 创建性能共享型负载均衡
 4. 添加IP地址范围
 5. 添加后端服务器组到负载均衡监听器
 6. 创建访问控制策略组
 7. 向访问控制策略组添加IP组
 8. 添加监听器的访问控制策略


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"1eb94c91eceb4aa4b071528159ecff24","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Nov 22, 2022 7:46:37 PM","createDate":"Nov 22, 2022 5:46:37 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/vips
   - l3NetworkUuid：必填项，使用虚拟IP网络服务的三层网络UUID
   - ipRangeUuid：可选，IP段UUID
   - requiredIp：可选，请求的IP
   - allocatorStrategy：可选，分配策略
 返回结果：

```
{"inventory":{"uuid":"ea5a46904e3e4f589e0e6a36366cca03","name":"vip1","ipRangeUuid":"91b9ad1e6f18429cab9a18026f0b48d8","l3NetworkUuid":"07965f453e2048d381fd0f30dca4b36b","ip":"172.20.17.252","state":"Enabled","gateway":"172.20.17.1","netmask":"255.255.255.0","prefixLen":24,"servicesRefs":[],"system":false,"usedIpUuid":"d6d4d93584d137a49ceb05794c5181a4","createDate":"Nov 22, 2022 10:21:31 AM","lastOpDate":"Nov 22, 2022 10:21:31 AM"}}
```

其中：
   - uuid字段即为所创建成功的虚拟IP的UUID
 2. uuid字段即为所创建成功的虚拟IP的UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/load-balancers
   - name：必填项，设置负载均衡名称
   - vipUuid：必填项，虚拟IP UUID
 返回结果：

```
{"inventory":{"name":"Test-Lb","uuid":"1b23dc6e757c487093ba5b22435df2ef","serverGroupUuid":"7a0a6db384e94f46aa11987f2d2de90b","state":"Enabled","type":"Shared","vipUuid":"ea5a46904e3e4f589e0e6a36366cca03","createDate":"Nov 22, 2022 10:23:16 AM","lastOpDate":"Nov 22, 2022 10:23:16 AM","listeners":[]}}
```

3. vipUuid：必填项，虚拟IP UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/autoscaling/rules/removal-instance
   - loadBalancerUuid：必填项，性能共享型负载均衡UUID
   - name：必填项，监听器的名称
   - instancePort：必填项，云主机端口
   - loadBalancerPort：必填项，性能共享型负载均衡端口
   - protocol：设置协议，可选值为：udp、tcp、http、https
   - healthCheckMethod：设置健康检查方法，可选值为GET、HEAD
   - healthCheckURI：设置健康检查的URI
   - healthCheckHttpCode：设置健康检查期望的返回码
   - aclStatus：切换访问控制策略状态，可选值为：enable、disable
   - aclUuids：必填项，指定访问控制策略组
   - aclType：必填项，设置访问控制策略类型。可选值为：white、black、redirect
 返回结果：

```
{"inventory":{"uuid":"b1f327cd2798462893a7c03e81cf5bef","name":"Test-Listener","loadBalancerUuid":"1b23dc6e757c487093ba5b22435df2ef","instancePort":80,"loadBalancerPort":80,"protocol":"http","createDate":"Nov 22, 2022 10:25:22 AM","lastOpDate":"Nov 22, 2022 10:25:22 AM","vmNicRefs":[],"aclRefs":[],"certificateRefs":[],"serverGroupRefs":[]}}
```

4. aclType：必填项，设置访问控制策略类型。可选值为：white、black、redirect
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/load-balancers/listeners/{listenerUuid}/servergroups
   - uuid ：必填项，资源的UUID唯一标示该资源
   - loadBalancerUuid：必填项，性能共享型负载均衡UUID
   - serverGroupUuid：必填项，后端服务器组UUID
 返回结果：

```
{"inventory":{"uuid":"b1f327cd2798462893a7c03e81cf5bef","name":"Test-Listener","loadBalancerUuid":"1b23dc6e757c487093ba5b22435df2ef","instancePort":80,"loadBalancerPort":80,"protocol":"http","createDate":"Nov 22, 2022 10:25:22 AM","lastOpDate":"Nov 22, 2022 10:25:22 AM","vmNicRefs":[],"aclRefs":[],"certificateRefs":[],"serverGroupRefs":[{"id":1,"listenerUuid":"b1f327cd2798462893a7c03e81cf5bef","serverGroupUuid":"7a0a6db384e94f46aa11987f2d2de90b","createDate":"Nov 22, 2022 11:37:11 AM","lastOpDate":"Nov 22, 2022 11:37:11 AM"}]}}
```

5. serverGroupUuid：必填项，后端服务器组UUID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/access-control-lists
   - name：必填项，访问控制策略组的名称
   - ipVersion：IP地址版本
 返回结果：

```
{"inventory":{"uuid":"fb1331b2371f4ebca0b654f48244b52a","name":"acl-group","ipVersion":4,"createDate":"Nov 22, 2022 11:42:41 AM","lastOpDate":"Nov 22, 2022 11:42:41 AM","entries":[]}}
```

6. ipVersion：IP地址版本
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/access-control-lists/{aclUuid}/redirectRules
   - aclUuid：必填项，访问控制策略组的唯一标识
   - domain：可选项，域名
   - url ：可选项，IP协议版本


> **注意:** 说明: 域名和URL必填一项

返回结果：

```
{"inventory":{"uuid":"1e3afaaaddda47afb624e5d19d7750b8","aclUuid":"fb1331b2371f4ebca0b654f48244b52a","type":"RedirectRule","domain":"*.example.com","url":"/","createDate":"Nov 22, 2022 11:45:28 AM","lastOpDate":"Nov 22, 2022 11:45:28 AM"}}
```

7. url ：可选项，IP协议版本
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/load-balancers/listeners/{listenerUuid}/access-control-lists
   - aclUuid：必填项，访问控制策略组的唯一标识
   - aclType：必填项，设置访问控制策略类型。可选值为：white、black、redirect
   - listenerUuid：必填项，监听器唯一标识
 返回结果：

```
{"inventory":{"uuid":"b1f327cd2798462893a7c03e81cf5bef","name":"Test-Listener","loadBalancerUuid":"1b23dc6e757c487093ba5b22435df2ef","instancePort":80,"loadBalancerPort":80,"protocol":"http","createDate":"Nov 22, 2022 10:25:22 AM","lastOpDate":"Nov 22, 2022 10:25:22 AM","vmNicRefs":[],"aclRefs":[{"id":1,"listenerUuid":"b1f327cd2798462893a7c03e81cf5bef","serverGroupUuid":"7a0a6db384e94f46aa11987f2d2de90b","aclUuid":"fb1331b2371f4ebca0b654f48244b52a","type":"redirect","createDate":"Nov 22, 2022 1:38:49 PM","lastOpDate":"Nov 22, 2022 1:38:49 PM"}],"certificateRefs":[],"serverGroupRefs":[{"id":1,"listenerUuid":"b1f327cd2798462893a7c03e81cf5bef","serverGroupUuid":"7a0a6db384e94f46aa11987f2d2de90b","createDate":"Nov 22, 2022 11:37:11 AM","lastOpDate":"Nov 22, 2022 11:37:11 AM"}]}}
```

8. listenerUuid：必填项，监听器唯一标识
