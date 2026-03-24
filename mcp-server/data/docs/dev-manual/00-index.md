# ZStack Cloud 开发手册 (v5.5.6)

*Extracted from: https://www.zstack.io/help/dev_manual/dev_guide/v5/*

## 目录

### 第1章 API使用规范
- [01-api-usage-spec.md](01-api-usage-spec.md) - API使用规范（HTTP方法、传参方式、Headers、返回码、API种类、API操作、基本流程示例、Webhook、查询API、ZQL语法、修改API服务端口、批量API返回）

### 第2章 SDK使用规范
- [02-sdk-usage-spec.md](02-sdk-usage-spec.md) - SDK使用规范（环境准备、SDK使用、SDK使用示例）

### 第3章 使用AK调用API
- [03-ak-api-calls.md](03-ak-api-calls.md) - 使用AccessKey调用API

### 第4章 资源中心
- [04-01-cloud-resource-pool.md](04-01-cloud-resource-pool.md) - 云资源池（云主机、云盘、镜像、计算规格、云盘规格、亲和组等）
- [04-02-hardware-facilities.md](04-02-hardware-facilities.md) - 硬件设施（区域、集群、物理机、主存储、镜像服务器等）
- [04-03-network-resources.md](04-03-network-resources.md) - 网络资源（二层网络、三层网络、VPC、弹性IP、安全组等）
- [04-04-network-services.md](04-04-network-services.md) - 网络服务（负载均衡、端口转发、VPN、防火墙等）
- [04-05-resource-orchestration.md](04-05-resource-orchestration.md) - 资源编排
- [04-06-bare-metal.md](04-06-bare-metal.md) - 裸金属管理 (Plus)
- [04-07-elastic-bare-metal.md](04-07-elastic-bare-metal.md) - 弹性裸金属管理 (Plus)
- [04-08-vmware-management.md](04-08-vmware-management.md) - VMware管理 (Plus)

### 第5章 平台运维
- [05-01-monitoring-api.md](05-01-monitoring-api.md) - 云平台监控相关接口
- [05-02-disaster-recovery.md](05-02-disaster-recovery.md) - 灾备管理
- [05-03-automation-ops.md](05-03-automation-ops.md) - 自动化运维
- [05-04-tag-management.md](05-04-tag-management.md) - 标签管理相关接口
- [05-05-migration-service.md](05-05-migration-service.md) - 迁移服务 (Plus)

### 第6章 运营管理
- [06-01-tenant-management.md](06-01-tenant-management.md) - 租户管理 (Plus)
- [06-02-billing-management.md](06-02-billing-management.md) - 计费管理相关接口
- [06-03-access-control.md](06-03-access-control.md) - 访问控制

### 第7章 设置
- [07-01-user-management.md](07-01-user-management.md) - 用户管理相关接口
- [07-02-log-server.md](07-02-log-server.md) - 日志服务器相关接口
- [07-03-advanced-monitoring.md](07-03-advanced-monitoring.md) - 高级监控服务器相关接口
- [07-04-ad-ldap-oauth.md](07-04-ad-ldap-oauth.md) - AD/LDAP/OAuth相关接口
- [07-05-snmp.md](07-05-snmp.md) - SNMP相关接口
- [07-06-global-settings.md](07-06-global-settings.md) - 全局设置相关接口
- [07-07-resource-advanced-settings.md](07-07-resource-advanced-settings.md) - 资源高级设置相关接口
- [07-08-scenario-encapsulation.md](07-08-scenario-encapsulation.md) - 场景封装相关接口
- [07-09-ha-policy.md](07-09-ha-policy.md) - 高可用策略相关接口
- [07-10-plugin-management.md](07-10-plugin-management.md) - 插件管理相关接口
- [07-11-time-management.md](07-11-time-management.md) - 时间管理相关接口

### 第8章 系统全局相关
- [08-01-progress-bar.md](08-01-progress-bar.md) - 进度条相关接口
- [08-02-available-resources.md](08-02-available-resources.md) - 查询可用资源相关接口
- [08-03-garbage-collection.md](08-03-garbage-collection.md) - 垃圾回收相关接口
- [08-04-license.md](08-04-license.md) - 许可证相关接口
- [08-05-long-running-tasks.md](08-05-long-running-tasks.md) - 长时任务相关接口
- [08-06-error-codes.md](08-06-error-codes.md) - 错误码相关接口
- [08-07-search.md](08-07-search.md) - 搜索相关接口

### 第9章 场景实践
- [09-01-init-cloud-platform.md](09-01-init-cloud-platform.md) - 如何初始化云平台
- [09-02-create-vm-with-data-disk.md](09-02-create-vm-with-data-disk.md) - 如何创建加载数据云盘的云主机
- [09-03-monitor-disk-usage.md](09-03-monitor-disk-usage.md) - 如何查看云主机内部监控磁盘已使用率
- [09-04-vm-console-access.md](09-04-vm-console-access.md) - 如何获取云主机控制台地址并打开云主机控制台
- [09-05-create-flat-network.md](09-05-create-flat-network.md) - 如何创建扁平网络并加载网络服务
- [09-06-flat-network-info.md](09-06-flat-network-info.md) - 如何查看云平台扁平网络资源信息
- [09-07-create-public-network.md](09-07-create-public-network.md) - 如何创建公有网络并加载网络服务
- [09-08-public-network-info.md](09-08-public-network-info.md) - 如何查看云平台公有网络资源信息
- [09-09-create-vpc-network.md](09-09-create-vpc-network.md) - 如何创建VPC网络并加载网络服务和VPC路由器
- [09-10-vpc-network-info.md](09-10-vpc-network-info.md) - 如何查看云平台VPC网络资源信息
- [09-11-vcenter-network-info.md](09-11-vcenter-network-info.md) - 如何查看vCenter三层网络资源信息
- [09-12-project-vm-info.md](09-12-project-vm-info.md) - 如何查看项目下云主机资源信息
- [09-13-project-users-info.md](09-13-project-users-info.md) - 如何查看项目内所有用户信息
- [09-14-project-admin-users.md](09-14-project-admin-users.md) - 如何查看所有绑定项目管理员角色的用户
- [09-15-find-ui-api.md](09-15-find-ui-api.md) - 如何快速查找界面调用的API
- [09-16-two-factor-login.md](09-16-two-factor-login.md) - 如何登录开启双因子验证的云平台
- [09-17-project-member-login.md](09-17-project-member-login.md) - 项目成员如何登录云平台
- [09-18-vm-delete-policy.md](09-18-vm-delete-policy.md) - 如何修改云主机删除策略
- [09-19-auto-scaling-group.md](09-19-auto-scaling-group.md) - 如何创建弹性伸缩组
- [09-20-create-load-balancer.md](09-20-create-load-balancer.md) - 如何创建性能共享型负载均衡

### 第10章 术语表
- [10-glossary.md](10-glossary.md) - 术语表
