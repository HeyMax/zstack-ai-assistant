# SDK使用规范

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/2.html*

---

# SDK使用规范



ZStack Cloud提供Java SDK和Python SDK支持。您可以通过SDK方式调用ZStack Cloud API，实现对应的功能。  使用SDK调用ZStack Cloud API需要注意以下问题：
 - Java SDK兼容版本是：Java 8
 - Python SDK兼容版本是：Python 2.7
 - `sdk dataformat`格式为：YY-MM-DD hh:mm:ss ，例如：2019-03-08 19:23:00

---

# 环境准备



使用Java SDK 或Python SDK前，需准备以下软件工具：

## Java


 - **Java开发工具（Intellij IDEA）**根据自己使用习惯，下载并安装合适的Java开发工具，并完成初始化工作。例如：Intellij IDEA、Eclipse等，本文以Intellij IDEA为例进行介绍。
 - **Java JDK工具**提前安装Java JDK工具，推荐使用Java 8版本Java JDK工具。
     - 软件名称：ZStack-Cloud-installer-5.5.6.bin
     - 下载地址：[点击这里]
   - 下载地址：[点击这里]
     - 文件名称：sdk-5.5.6.jar
     - 存放路径：**/usr/local/zstack/apache-tomcat/webapps/zstack/WEB-INF/lib/sdk-5.5.6.jar**
   - 存放路径：**/usr/local/zstack/apache-tomcat/webapps/zstack/WEB-INF/lib/sdk-5.5.6.jar**
 - 存放路径：**/usr/local/zstack/apache-tomcat/webapps/zstack/WEB-INF/lib/sdk-5.5.6.jar**
 - **SDK依赖的第三方jar**：依赖jar包内容详情如下：
```
<dependencies>     <dependency>         <groupId>org.zstack</groupId>         <artifactId>sdk</artifactId>         <version>3.4.0</version>     </dependency>     <dependency>         <groupId>com.squareup.okhttp3</groupId>         <artifactId>okhttp</artifactId>         <version>3.5.0</version>     </dependency>     <dependency>         <groupId>com.google.code.gson</groupId>         <artifactId>gson</artifactId>         <version>2.1</version>     </dependency>     <dependency>         <groupId>commons-beanutils</groupId>         <artifactId>commons-beanutils</artifactId>         <version>1.9.3</version>     </dependency>     <dependency>         <groupId>javax.servlet</groupId>         <artifactId>servlet-api</artifactId>         <version>2.5</version>         <scope>provided</scope>     </dependency>     <dependency>         <groupId>commons-codec</groupId>         <artifactId>commons-codec</artifactId>         <version>1.9</version>     </dependency> </dependencies>
```


## Python


       - 软件名称：ZStack-Cloud-installer-5.5.6.bin
       - 下载地址：[点击这里]
     - 下载地址：[点击这里]
   - 下载地址：[点击这里]
   - 使用本机新建一个虚拟临时环境目录，例如/var/lib/virtualenv，并执行以下命令拷贝已有ZStack Cloud环境目录 /var/lib/zstack/virtualenv/zstackcli 到本机新建的虚拟临时环境目录下：
```
scp -r /var/lib/zstack/virtualenv/zstackcli $LocalHostIP:$VirtualDirectory //LocalHostIP为本机IP地址，VirtualDirectory为虚拟临时环境目录
```
说明: 请确保本机与管理节点网络互通，且已安装Python2环境。
 1. 使用本机新建一个虚拟临时环境目录，例如/var/lib/virtualenv，并执行以下命令拷贝已有ZStack Cloud环境目录 /var/lib/zstack/virtualenv/zstackcli 到本机新建的虚拟临时环境目录下：
```
scp -r /var/lib/zstack/virtualenv/zstackcli $LocalHostIP:$VirtualDirectory //LocalHostIP为本机IP地址，VirtualDirectory为虚拟临时环境目录
```
说明: 请确保本机与管理节点网络互通，且已安装Python2环境。
   - 若使用管理节点，执行以下命令启用：
```
source /var/lib/zstack/virtualenv/zstackcli/bin/activate
```
   - 若使用本机，执行以下命令启用：
```
source $VirtualDirectory/zstackcli/bin/activate //VirtualDirectory为虚拟临时环境目录
```
 2. 若使用本机，执行以下命令启用：
```
source $VirtualDirectory/zstackcli/bin/activate //VirtualDirectory为虚拟临时环境目录
```
   - 若使用管理节点，执行以下命令指定：
```
export ZS_SERVER_IP=127.0.0.1
```
   - 若使用本机，执行以下命令指定：
```
export ZS_SERVER_IP=MN_IP //MN_IP为管理节点IP地址
```
 3. 若使用本机，执行以下命令指定：
```
export ZS_SERVER_IP=MN_IP //MN_IP为管理节点IP地址
```

---

# SDK使用



准备工作完成后，可参考以下步骤使用ZStack Cloud SDK：

## Java


 1. 在IDEA新建一个JAVA Maven项目，如[图 1]所示：图 1. JAVA Maven项目  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0574_2_1.png)
 2. 添加SDK jar包到项目Libraires，并把依赖的三方包声明加到项目pom.xml文件里，如[图 2]所示：图 2. 添加依赖包  ![](https://www.zstack.io/docs/5.5.6/html5/ZStack_Dev_Guide/image/ZStack_2.1_Dev_Guide_0574_2_2.png)
 3. 参考ZStack Cloud开发手册提供的SDK示例，实现调用API功能。


## Python


 - Python形式调用API无需上述依赖准备，可直接参考SDK示例调用即可。

---

## SDK使用示例



本文以查询云主机为例，介绍ZStack Cloud Java SDK和Python SDK的使用方法。

### 使用Java SDK查询云主机

 代码如下：

```
package org.zstack;

import org.zstack.sdk.*;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.io.UnsupportedEncodingException;

/**
 * 演示如何用Java SDK 查询VM列表
 */
public class CloudSDKDemo {
    public static void main(String[] args) {
        String cloudServerHostname = "请输入管理节点IP地址";
        String accountName = "请输入账号";
        String password = "请输入账号密码";

        ZSClient.configure(
                new ZSConfig.Builder()
                        .setHostname(cloudServerHostname)
                        .setPort(8080)
                        .setContextPath("zstack")
                        .build()
        );

        String sessionId = getSessionByLoginAccount(accountName, password);

        QueryVmInstanceAction action = new QueryVmInstanceAction();
        action.sessionId = sessionId;
        QueryVmInstanceAction.Result result = action.call();
        result.throwExceptionIfError();

        List<VmInstanceInventory> vmList = result.value.getInventories();
        System.out.println(String.format("查询云主机列表成功，查询到%s台云主机",
                vmList != null ? vmList.size() : 0));
    }

    private static String getSessionByLoginAccount(String accountName, String password) {
        LogInByAccountAction action = new LogInByAccountAction();
        action.accountName = accountName;
        action.password = encryptToSHA512(password);

        LogInByAccountAction.Result result = action.call();
        result.throwExceptionIfError();
        System.out.println("登录成功");
        return result.value.getInventory().getUuid();
    }

    private static String encryptToSHA512(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-512");
            md.reset();
            md.update(input.getBytes("utf8"));
            BigInteger bigInteger = new BigInteger(1, md.digest());
            return String.format("%0128x", bigInteger);
        } catch (NoSuchAlgorithmException | UnsupportedEncodingException e) {
            throw new RuntimeException(e);
        }
    }

}
```

 其中，需要注意以下几个方面：
 1. 代码中，以下部分需要在对应位置，填写正确的管理节点IP、账号和密码信息。
```
public static void main(String[] args) {
String cloudServerHostname = "请输入管理节点IP地址";
String accountName = "请输入账号";
String password = "请输入账号密码";
ZSClient.configure(
         new ZSConfig.Builder()
                 .setHostname(cloudServerHostname)
                 .setPort(8080)
                 .setContextPath("zstack")
                 .build()
);
```
 2. 代码中，以下部分为所调用API的SDK信息，调用不同API需要填写对应的SDK信息，可参考开发手册。
```
QueryVmInstanceAction action = new QueryVmInstanceAction();
 action.sessionId = sessionId;
 QueryVmInstanceAction.Result result = action.call();
 result.throwExceptionIfError();
```
 3. 代码编写完成后，编译、运行即可。


### 使用Python SDK查询云主机

 代码如下：

```
import time
import os
import sys
import traceback
import hashlib

import zstacklib.utils.log as log

# comment out next line to print detail zstack cli http command to screen.
log.configure_log('/var/log/zstack/zstack-sdk.log', log_to_console=False)

import apibinding.api_actions as api_actions
from apibinding import api
import xml.etree.cElementTree as etree
import apibinding.inventory as inventory

zstack_server_ip = os.environ['ZS_SERVER_IP']
# 请按需设置登录云平台的账户/用户名
user_name = 'admin'
# 请按需设置登录云平台的密码
user_password = 'password'
# 请指定云主机所在物理机的UUID
host_uuid = 'acb492ce8cd640c8bb73bae75ea00adf'


# Must keep.
def sync_call(apiCmd, session_uuid):
    api_instance = api.Api(host=zstack_server_ip, port='8080')
    if session_uuid:
        api_instance.set_session_to_api_message(apiCmd, session_uuid)
    (name, reply) = api_instance.sync_call(apiCmd, )
    if not reply.success: raise api.ApiError("Sync call at %s: [%s] meets error: %s." % (
        zstack_server_ip, apiCmd.__class__.__name__, api.error_code_to_string(reply.error)))
    # print("[Sync call at %s]: [%s] Success" % (zstack_server_ip, apiCmd.__class__.__name__))
    return reply


# Must keep.
def async_call(apiCmd, session_uuid):
    api_instance = api.Api(host=zstack_server_ip, port='8080')
    api_instance.set_session_to_api_message(apiCmd, session_uuid)
    (name, event) = api_instance.async_call_wait_for_complete(apiCmd)
    time.sleep(1)
    if not event.success: raise api.ApiError("Async call at %s: [%s] meets error: %s." % (
        zstack_server_ip, apiCmd.__class__.__name__, api.error_code_to_string(reply.error)))
    # print("[Async call at %s]: [%s] Success" % (zstack_server_ip, apiCmd.__class__.__name__))
    return event


# Must keep.
def login_as_admin():
    accountName = user_name
    password = user_password
    return login_by_account(accountName, password)


# Must keep.
#tag::login_by_account[]
def login_by_account(name, password, timeout=60000):
    login = api_actions.LogInByAccountAction()
    login.accountName = name
    # Login API will use encrypted password string.
    login.password = hashlib.sha512(password).hexdigest()
    login.timeout = timeout
    session_uuid = async_call(login, None).inventory.uuid
    return session_uuid
#end::login_by_account[]


# logout must be called after session isn't needed.
# Must keep.
#tag::logout[]
def logout(session_uuid):
    logout = api_actions.LogOutAction()
    logout.timeout = 60000
    logout.sessionUuid = session_uuid
    async_call(logout, session_uuid)
#end::logout[]


# Must keep.
def execute_action_with_session(action, session_uuid, async=True):
    if session_uuid:
        action.sessionUuid = session_uuid
        if async:
            evt = async_call(action, session_uuid)
        else:
            evt = sync_call(action, session_uuid)
    else:
        session_uuid = login_as_admin()
        try:
            action.sessionUuid = session_uuid
            if async:
                evt = async_call(action, session_uuid)
            else:
                evt = sync_call(action, session_uuid)
        except Exception as e:
            traceback.print_exc(file=sys.stdout)
            raise e
        finally:
            # New login must be logout. If the active login session
            # exceed the limit, no account login is allowed.
            # The default active logined session limit is  500.
            logout(session_uuid)

    return evt


# All Query API need conditions. This help to generate common conditions.
# The op including: =, >, <, in, not in, like etc.
def gen_query_conditions(name, op, value, conditions=[]):
    new_conditions = [{'name': name, 'op': op, 'value': value}]
    new_conditions.extend(conditions)
    return new_conditions


#tag::query_zone[]
def query_zone(conditions=[], session_uuid=None):
    action = api_actions.QueryZoneAction()
    action.timeout = 3000
    action.conditions = conditions
    evt = execute_action_with_session(action, session_uuid)
    print 'Zone infomation: %s ' % evt.inventories
    return evt.inventories
#end::query_zone[]


def query_vm_by_host(host_uuid, conditions=[], session_uuid=None):
    action = api_actions.QueryVmInstanceAction()
    action.conditions = gen_query_conditions('hostUuid', '=', host_uuid, conditions)
    evt = execute_action_with_session(action, session_uuid)
    return evt.inventories


if __name__ == '__main__':
    session_uuid = login_as_admin()
    vm_list = query_vm_by_host(host_uuid, session_uuid=session_uuid)
    for vm in vm_list:
        print '查询到的云主机[uuid:%s]\n' % vm.uuid
    logout(session_uuid)
```

 按照以下步骤运行代码示例文件：
 1. 在以上代码示例中，设置登录云平台的账户/用户名、密码、以及云主机所在物理机的UUID。
 2. 执行python $代码示例文件全路径命令查询云主机。
 其中，需要注意以下几个方面：
 - 在调用ZStack Cloud API之前，需要确保已获取一个登陆Session的UUID。Session使用完毕后 , 需调用对应的logout API退出Session。说明: 系统已预设登录Session的阈值，默认为500。若在短时间内大量调用登陆API且不退出登陆 , 达到阈值后会导致无法登陆新的Session。
 - 登录ZStack Cloud对应的API代码：
```
def login_by_account(name, password, timeout=60000):
    login = api_actions.LogInByAccountAction()
    login.accountName = name
    # Login API will use encrypted password string.
    login.password = hashlib.sha512(password).hexdigest()
    login.timeout = timeout
    session_uuid = async_call(login, None).inventory.uuid
    return session_uuid
```
说明: 登陆API使用的秘钥为经过sha512加密过的密文。
 - 登出ZStack Cloud对应的API代码：
```
def logout(session_uuid):
    logout = api_actions.LogOutAction()
    logout.timeout = 60000
    logout.sessionUuid = session_uuid
    async_call(logout, session_uuid)
```
 - 查询云主机对应的API代码：
```
def query_zone(conditions=[], session_uuid=None):
    action = api_actions.QueryZoneAction()
    action.timeout = 3000
    action.conditions = conditions
    evt = execute_action_with_session(action, session_uuid)
    print 'Zone infomation: %s ' % evt.inventories
    return evt.inventories
```
   - session_uuid 为可传入的参数 , 支持用户复用已登陆的 Session。
   - execute_action_with_session 函数是一个封装过的 API, 可以帮助执行所有ZStack Cloud的函数 , 若不传入 session_uuid , 该函数可确保执行 API 前后完成系统的登入和登出。因此建议用户使用该函数完成 API 调用。
   - 所有查询类API均需通过action.conditions参数设置数组结构的查询条件，例如`action.conditions                                     = ["name=TestZone","state=Enabled"]`。若希望获取全部资源信息 , 可将参数设置为空数组。详细可参考[查询 API]。
   - API的返回值表示API的执行结果，例如 查询类API返回值为evt.inventories，为数组类型。 用户可以使用count获取该数组的大小 , 并使用python数组的使用方式完成数据调用。对于大部分非查询类API，ZStack Cloud返回对象类型数据 , 例如创建云主机 (CreateVmInstanceAction), 返回值为evt.inventory。详细可参考[API使用规范]。
 - API的返回值表示API的执行结果，例如 查询类API返回值为evt.inventories，为数组类型。 用户可以使用count获取该数组的大小 , 并使用python数组的使用方式完成数据调用。对于大部分非查询类API，ZStack Cloud返回对象类型数据 , 例如创建云主机 (CreateVmInstanceAction), 返回值为evt.inventory。详细可参考[API使用规范]。
