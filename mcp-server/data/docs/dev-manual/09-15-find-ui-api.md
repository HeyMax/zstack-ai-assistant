# 如何快速查找界面调用的API - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.15.html*

---

## 如何快速查找界面调用的API



ZStack Cloud支持记录UI界面上增删改查操作所调用的API。开发和运维人员可通过参考UI界面上API调用记录快速掌握如何使用API对资源进行操作。 ZStack Cloud提供API Inspector和操作日志两种功能记录界面调用的API。
 - API Inspector：记录云平台上查询类和增删改操作类API的调用情况。
 - 操作日志：记录云平台上增删改操作类API的调用情况，包括API操作名称、操作资源、操作时间、操作结果、以及API入参和返参明细。详细可参考[操作日志]。


本文以创建云主机为例分别介绍如何通过API Inspector和操作日志快速查找界面调用的API。

---

## 通过API Inspector查找创建云主机时调用的API

  使用API Inspector查看API调用可参考以下四步：
 1. 启用API Inspector。
 2. 创建云主机。
 3. 筛选创建云主机操作所关联的API记录。
 4. 查看API详情。

 1. 启用API Inspector。进入管理节点系统，运行以下命令启用API Inspector：
```
#启用API Inspector zstack-ctl config_ui --api_inspector=true  # 重启管理节点UI服务 zstack-ctl stop_ui zstack-ctl start_ui
```
   - 名称：设置云主机的名称
   - 简介：可选项，可留空不填
   - 数量：设置云主机数量
   - 标签：可选项，可为云主机绑定一个或多个标签
   - 计算规格：选择云主机的计算规格
   - 镜像：选择创建云主机所需要的镜像
   - 根云盘规格：选择根云盘规格
   - 数据云盘：按需添加数据云盘
   - 网络配置：配置网络和网络服务。


点击 确定，创建云主机。2. 网络配置：配置网络和网络服务。
   - GET: 查询类API，查询资源时调用该类API
   - GET-ZQL: 查询类API， 通过ZQL语句查询资源时调用该类API
   - POST: 操作类API，创建资源时调用该类API
   - PUT: 操作类API， 修改资源时调用该类API
   - DELETE: 操作类API，删除资源时调用该类API
 如[图 1]所示：图 1. 筛选创建云主机的API记录
![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0679_1.png)
 3. DELETE: 操作类API，删除资源时调用该类API
 4. 查看API详情。点击对应API右侧查看详情按钮，进入详情页，可查看该API记录的详情信息，包括当前API的调用ID、请求方法、请求URL、请求头、请求体、Curl请求示例、响应结果、响应耗时等信息。其中，API调用ID可用于快速定位当前调用在管理节点前端和后端的日志记录，方便快速排查问题。如[图 2]所示：图 2. 查看API记录详情  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0679_2.png)

- 启用API Inspector后，涉及大量数据传输，使用完成后，建议及时关闭该功能，否则可能影响云平台UI服务正常运行。可进入管理节点系统运行以下命令关闭该功能：
```
#禁用API Inspector zstack-ctl config_ui --api_inspector=false    # 重启管理节点UI服务 zstack-ctl stop_ui zstack-ctl start_ui
```
- 建议不要在生产环境使用该功能。


> **注意:** 说明: 使用API Inspector需注意：

---

### 通过操作日志查找创建云主机时调用的API

  使用操作日志查看API调用可参考以下两步：
 1. 创建云主机。
 2. 查看创建云主机调用的API记录详情。

   - 名称：设置云主机的名称
   - 简介：可选项，可留空不填
   - 数量：设置云主机数量
   - 标签：可选项，可为云主机绑定一个或多个标签
   - 计算规格：选择云主机的计算规格
   - 镜像：选择创建云主机所需要的镜像
   - 根云盘规格：选择根云盘规格
   - 数据云盘：按需添加数据云盘
   - 网络配置：配置网络和网络服务。


点击 确定，创建云主机。1. 网络配置：配置网络和网络服务。
 2. 查看创建云主机调用的API记录详情点击界面右上角操作日志图标，弹出操作日志页面。点击操作历史页面，可查看创建云主机的操作日志。如[图 1]所示：图 1. 创建云主机操作日志  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0678_1.png)  点击创建云主机日志，弹出操作详情窗口，可查看创建云主机操作所涉及的操作资源、操作结果、操作相关时间、操作员、登录IP、以及API操作名称（CreateVmInstance）、API执行明细等相关信息。用户通过系统登录或第三方API工具（例如Postman）创建云主机时，可参考该API操作名称以及对应的请求参数和返回参数进行API调用。其中，API调用ID可用于快速定位当前调用在管理节点前端和后端的日志记录，方便快速排查问题。如[图 2]和[图 3]所示：图 2. 操作详情  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0678_2.png)  图 3. API请求参数和返回参数详情  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0678_3.png)
