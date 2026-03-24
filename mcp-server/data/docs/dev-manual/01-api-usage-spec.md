# API使用规范

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/1.html*

---

# API使用规范



 ZStack Cloud 5.5.6提供原生RESTful支持。您可以通过REST定义的架构设计原则和约束条件，并使用支持HTTP的编程语言进行开发。

---

# HTTP方法 (HTTP Verbs)

  当前API支持如下操作资源的方法：
-

-


| 方法名 | 描述 |
| --- | --- |
| GET | 获取资源信息。 所有的查询API以及读API均使用该方法。 |
| POST | 创建一个资源。 |
| PUT | 修改一个资源。 所有对资源的修改操作，以及类RPC调用的操作，例如启动虚拟机，均使用该方法。 |
| DELETE | 删除一个资源。 |

---

# 传参方式



URL、Query String、HTTP body三种方式均可用于传参。每种方式可以单独使用，也可以混合使用，具体使用哪种传参方式由具体API决定。

## URL传参



当对某具体资源进行操作时，资源的UUID通过编码到URL的方式进行传参。 例如启动一个UUID为 *f97143d60f1042c9badd9a1336d3c105*的虚拟机，URL格式为：

```
zstack/v1/vm-instances/f97143d60f1042c9badd9a1336d3c105/actions
```



这里UUID编码到URL路径当中。

## Query String传参



所有使用HTTP GET方法的API均使用Query String传参。 例如查询所有状态为Running的虚拟机， URL格式为：

```
zstack/v1/vm-instances?q=state=Running
```



## HTTP Body传参



当使用POST方法创建一个资源，或PUT方法修改一个资源时，除通过URL传参的部分外，剩余参数均通过HTTP Body传参。 例如在指定物理机上启动一个虚拟机：

```
PUT zstack/v1/vm-instances/f97143d60f1042c9badd9a1336d3c105/actions  {   "startVmInstance": {         "hostUuid": "8aef7e3a53b34eedaa05027a919156d9"    } }
```



这里虚拟机的UUID通过URL传参，参数hostUuid则通过HTTP Body传递。

---

# HTTP Headers



当前API使用如下自定义HTTP Headers：

## Authorization

 除了少数API外（例如登录API），使用ZStack Cloud API前都需要一个会话(session)，在调用API时通过Authorization HTTP Header传递会话UUID。该Header的格式为：

```
Authorization: OAuth 会话UUID
```

 举例：

```
Authorization: OAuth 34cbfddd470a47d8bdb0727cd2182618
```


> **注意:** 说明: OAuth和会话UUID之间用空格分隔。



## X-Job-UUID

 对于异步API，可以通过X-Job-UUID HTTP Header来指定该API Job的UUID，例如：

```
X-Job-UUID: d825b1a26f4e474b8c59306081920ff2
```



如果未指定该HTTP Header，ZStack Cloud会自动为API Job生成一个UUID。


> **注意:** 说明: X-Job-UUID必须为一个v4版本的UUID（即随机UUID）字符串去掉连接符**-**。ZStack Cloud会验证X-Job-UUID格式的合法性，并对非法的字符串返回一个400 Bad Request的错误。



## X-Web-Hook

 对于异步API，可以通过X-Web-Hook HTTP Header指定一个回调URL用于接收API 返回。通过使用回调URL的方法，调用者可以避免使用轮询去查询一个异步API的执行结果。举例：

```
X-Web-Hook: http://localhost:5000/api-callback
```



## X-Job-Success

 当使用了`X-Web-Hook`回调的方式获取异步API结果时，ZStack Cloud推送给回调URL的HTTP Post请求中会包含`X-Job-Success` HTTP Header指明该异步API的执行结果是成功还是失败。例如：

```
X-Job-Success: true
```



当值为*true*时执行成功，为*false*时执行失败。

---

## HTTP返回码 (HTTP Status Code)



ZStack Cloud使用如下返回码：

| 返回码 | 意义 |
| --- | --- |
| 200 | API执行成功。 |
| 202 | API请求已被ZStack Cloud接受，用户需要通过轮询或Web Hook的方式获取API结果。该返回码只在调用异步API时出现。 |
| 400 | API请求未包含必要的参数或包含了非法的参数。具体信息可以从HTTP Response Body获得。 |
| 404 | URL不存在，通常是指定了错误的API URL。如果访问的URL是异步API返回的轮询地址，表示该轮询地址已经过期。 |
| 405 | API调用使用了错误的HTTP方法，例如在创建一个资源的时候用了GET方法而不是POST方法。 |
| 500 | ZStack CloudRESTful终端遭遇了一个内部错误。 |
| 503 | API所执行的操作引发了一个错误，例如资源不足无法创建虚拟机。错误的具体信息可以从HTTP Response Body获取。 |

---

## API种类



ZStack Cloud的API分为同步API和异步API两种：

### 同步API



所有使用GET方法的API都是同步API，调用方收到的HTTP Response中直接包含了API的结果。例如：

```
GET zstack/v1/zones/f3fa7671894a40f6a73f5bfc7d90c126

{
    "inventory": {
        "uuid": "f3fa7671894a40f6a73f5bfc7d90c126",
        "name": "zone1",
        "description": "test",
        "state": "Enabled",
        "type": "zstack",
        "createDate": "Jan 6, 2017 3:51:16 AM",
        "lastOpDate": "Jan 6, 2017 3:51:16 AM"
    }
}
```



### 异步API

 除了登录相关的API外，所有不使用GET方法的API都为异步API。用户调用一个异步API成功后会收到202返回码以及 Body中包含的一个轮询地址和超时时间（location字段和apiTimeout字段），超时时间数值单位为毫秒,用户需要周期性的GET该轮询地址以获得API的执行结果。例如：

```
Status Code: 202

Body:

{
        "apiTimeout":43200000
	"location": "http://localhost:8989/v1/api-jobs/967a26b7431c49c0b1d50d709ef1aef3"
}
```

 通常情况下GET一个轮询地址可以得到四种返回：
 1. 202返回码表示该API仍在处理中，用户需要继续轮询。
 2. 200返回码表示API执行成功，Body中包含API结果。
 3. 503返回码表示API执行失败，Body中包含错误码。
 4. 404返回码，则表示轮询地址已经过期，产生这种结果的原因可能是用户访问了一个错误的轮询地址，或者太久没有访问该轮询地址（例如超过2天没有访问），该轮询地址已经被删除。


异步API也可以用Web Hook的方式获得结果，具体方法见后面章节。

---

## API操作



跟所有的RESTful API类似，绝大多数ZStack Cloud API执行的是CRUD（Create, Read, Update, Delete）操作，以及类RPC操作。

### 创建资源

 所有资源的创建都使用POST方法，参数通过HTTP Body传递，例如创建一个虚拟机：

```
POST zstack/v1/vm-instances

Authorization： OAuth 0c234e29a2ad4ff4b0d97d4f3b47c6cf

{
    "params": {
        "l3NetworkUuids": ["37a701c7fe4a40758da15593aedd8aff"],
        "defaultL3NetworkUuid": "37a701c7fe4a40758da15593aedd8aff",
        "dataDiskOfferingUuids": [],
        "name": "TestVm",
        "description": "Test",
        "systemTags": [],
        "instanceOfferingUuid": "dd53f94b58924510b0122e40799a4114",
        "type": "UserVm",
        "imageUuid": "cc7b56780879409f98c1f992b75a12b0"
    }
}
```



### 查询资源

 资源的查询使用GET方法，查询条件通过Query String传参，例如查询集群*cluster1*中名字**不等于** *web-vm*的虚拟机：

```
GET zstack/v1/vm-instances?condition=name!=web-vm&condition=cluster.name=cluster1

Authorization： OAuth 0c234e29a2ad4ff4b0d97d4f3b47c6cf
```

 如果已知资源的UUID，要直接获取该资源的信息，直接使用GET方法不加任何查询条件，例如：

```
GET zstack/v1/vm-instances/56f0fd314a2647ffb4f9565f6d05858e

Authorization： OAuth 0c234e29a2ad4ff4b0d97d4f3b47c6cf
```



返回UUID为*56f0fd314a2647ffb4f9565f6d05858e*虚拟机的信息。

### 删除资源

 删除资源使用DELETE方法，被删除资源的UUID编码在URL中，例如：

```
DELETE zstack/v1/vm-instances/56f0fd314a2647ffb4f9565f6d05858e

Authorization： OAuth 0c234e29a2ad4ff4b0d97d4f3b47c6cf
```



删除UUID为*56f0fd314a2647ffb4f9565f6d05858e*的虚拟机。

### 修改资源与类RPC操作



但由于IaaS本身业务的性质，一部分操作更类似于RPC（远程调用）而非CRUD操作，例如启动虚拟机。根据RESTful API的一些最佳实践，ZStack Cloud将这些操作都归为资源的actions子资源，例如启动虚拟机、 停止虚拟机都是对虚拟机的actions子资源进行操作。举个例子： 启动虚拟机：

```
PUT zstack/v1/vm-instances/d46841bd4ebd47f8bf0bed85c3bdf0db/actions

{
    "startVmInstance": {}
}
```

 停止虚拟机：

```
PUT zstack/v1/vm-instances/d46841bd4ebd47f8bf0bed85c3bdf0db/actions

{
    "stopVmInstance": {}
}
```



在上面的例子中，两个操作都访问的是相同的URL*/v1/vminstances/d46841bd4ebd47f8bf0bed85c3bdf0db/actions*， 具体的操作类型由包含在Body中的字段名表示，例如stopVmInstance，如果该API包含额外参数，则包含在操作字段名对应的map中。

资源操作的具体字段名和例子参考每个API的详细文档。

---

## 基本流程示例



在下例中，我们会创建一个Zone，以展示API使用的基本流程：

### 登录

 使用API的第一步是登录以获取一个Session UUID，以供后续API调用使用。

```
PUT zstack/v1/accounts/login

body:

{
    "logInByAccount": {
        "password": "b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86",
        "accountName": "admin"
    }
}
```



这里的密码是用sha512哈希后的结果。 API返回如下：

```
status code: 200

body:

 {
    "inventory": {
        "uuid": "00d038b699b74e76a01705918d48d939",
        "accountUuid": "36c27e8ff05c4780bf6d2fa65700f22e",
        "userUuid": "36c27e8ff05c4780bf6d2fa65700f22e",
        "expiredDate": "Jan 1, 2017 11:31:06 AM",
        "createDate": "Jan 1, 2017 9:31:06 AM"
    }
 }
```



返回内容中包含账户UUID等其他字段，我们需要的session UUID包含在字段uuid中：*00d038b699b74e76a01705918d48d939*。

### 创建Zone



```
POST zstack/v1/zones

headers:

Authorization: OAuth 00d038b699b74e76a01705918d48d939

body:

{
    "params": {
        "name": "Zone1",
        "description": "Test"
    }
}
```



由于创建Zone操作是一个异步API，API返回不是直接的结果，而是一个轮询地址和一个超时时间：

```
status code: 202

body:

{
    "apiTimeout":1800000
    "location": "http://localhost:8080/v1/api-jobs/d0345d3ddcae485f8170572b15a2b581"
}
```



用户需要周期性的轮询API结果：

```
GET http://localhost:8080/v1/api-jobs/d0345d3ddcae485f8170572b15a2b581

Authorization: OAuth 00d038b699b74e76a01705918d48d939
```

 如果API还未执行完成，上述GET操作得到的仍然是202返回码和上述轮询地址。当操作完成时，得到的结果如下：

```
status code: 200

body:

{
    "inventory": {
        "uuid": "f52fe55b64094ceb99b3893a238c4931",
        "name": "Zone1",
        "description": "Test",
        "state": "Enabled",
        "type": "zstack",
        "createDate": "Jan 1, 2017 9:31:07 AM",
        "lastOpDate": "Jan 1, 2017 9:31:07 AM"
    }
}
```



### 查询Zone

 要获取创建的Zone的信息，可以用GET查询：

```
GET zstack/v1/zones/f52fe55b64094ceb99b3893a238c4931

Authorization: OAuth 00d038b699b74e76a01705918d48d939
```

 返回：

```
status code: 200

body:

{
    "inventory": {
        "uuid": "f52fe55b64094ceb99b3893a238c4931",
        "name": "Zone1",
        "description": "Test",
        "state": "Enabled",
        "type": "zstack",
        "createDate": "Jan 1, 2017 9:31:07 AM",
        "lastOpDate": "Jan 1, 2017 9:31:07 AM"
    }
}
```



### 登出

 当所有API调用完毕，我们需要对已登录的session进行登出操作：

```
DELETE zstack/v1/accounts/sessions/00d038b699b74e76a01705918d48d939
```

 返回

```
status code: 200
```

---

## Webhook



对于异步API使用轮询的方式查询操作结果是一种低效的方式，为此ZStack Cloud提供Webhook的方式主动推送异步API结果给调用者。 要使用Webhook功能，调用者只需在HTTP Headers中指定X-Job-UUID和X-Web-Hook即可。以上面创建Zone为例，使用Webhook的API版本为：

```
POST zstack/v1/zones

headers:

Authorization: OAuth 00d038b699b74e76a01705918d48d939
X-Job-UUID: d0345d3ddcae485f8170572b15a2b581
X-Web-Hook: http://127.0.0.1:8989/rest-webhook

body:

{
    "params": {
        "name": "Zone1",
        "description": "Test"
    }
}
```

 API返回仍然是202返回码和一个轮询地址，但调用者无需再轮询。API执行成功后，结果会被推送到

```
http://127.0.0.1:8989/rest-webhook
```


```
POST http://127.0.0.1:8989/rest-webhook

headers:

X-Job-Success: true
X-Job-UUID: d0345d3ddcae485f8170572b15a2b581

body:

{
    "inventory": {
        "uuid": "f52fe55b64094ceb99b3893a238c4931",
        "name": "Zone1",
        "description": "Test",
        "state": "Enabled",
        "type": "zstack",
        "createDate": "Jan 1, 2017 9:31:07 AM",
        "lastOpDate": "Jan 1, 2017 9:31:07 AM"
    }
}
```



推送的结果之中，X-Job-Success指明了API执行成功与否，X-Job-UUID包含值跟API调用时的X-Job-UUID相同，调用者可以对应结果和API。

---

## 查询API



用户可以用GET方法对一个资源进行查询，并且可以像MySQL一样指定多个查询条件、排序方式、选择字段、以及进行跨表查询等等。

支持超过400万个单项查询条件，以及400万阶乘的组合查询条件。

### 单表查询

 例如：

```
GET zstack/v1/vm-instances?q=name=vm1
```



查询名字为*vm1*的虚拟机。

例如：

```
GET zstack/v1/vm-instances?q=name=vm1&q=state=Running
```



查询名字为*vm1*并且状态为*Running*的虚拟机。

这两个例子都是对虚拟机资源本身查询，反应到数据库层面还属于单表查询。

### 跨表查询



我们可以通过**.**进行跨表查询。

例如：

```
GET zstack/v1/vm-instances?q=vmNics.ip=192.168.10.100
```



查询IP地址为*192.168.10.100*的虚拟机，这里对虚拟机和网卡两张表进行了跨表查询。 例如：

```
GET zstack/v1/vm-instances?q=host.managementIp=10.10.20.3
```



查询IP为*10.10.20.3*上运行的所有虚拟机。这里对虚拟机和物理机两张表进行了跨表查询。

### 所有资源的查询API都支持下列参数


-
-


| 名字 | 类型 | 位置 | 描述 | 可选值 | 起始版本 |
| --- | --- | --- | --- | --- | --- |
| q (可选) | List | query | 见[查询条件]。省略该字段将返回所有记录，返回记录数的上限受限于limit字段 |  | 0.6 |
| limit (可选) | Integer | query | 最多返回的记录数，类似MySQL的limit，默认值1000 |  | 0.6 |
| start (可选) | Integer | query | 起始查询记录位置，类似MySQL的offset。跟limit配合使用可以实现分页 |  | 0.6 |
| count (可选) | Boolean | query | 计数查询，相当于MySQL中的count()函数。当设置成true时，API只返回的是满足查询条件的记录数 |  | 0.6 |
| groupBy (可选) | String | query | 以字段分组，相当于MySQL中的group by关键字。例如groupBy=type |  | 1.9 |
| replyWithCount (可选) | Boolean | query | 见[分页查询] |  | 0.6 |
| sort (可选) | String | query | 以字段排序，等同于MySQL中的sort by关键字。必须跟+或者-配合使用，+表示升序，-表示降序，后面跟排序字段名，例如： sort=+key，根据key进行升序排序 sort=-key，根据 key进行降序排序 | `+`字段名，`-`字段名 | 0.6 |
| fields (可选) | List | query | 指定返回的字段，等同于MySQL中的select字段功能。例如fields=name,uuid，则只返回满足条件记录的name和uuid字段 |  | 0.6 |



### 查询条件



查询API的查询条件类似于MySQL数据库。 例如：

```
uuid=bfa67f956afb430890aa49db14b85153
totalCapacity>2000
vmInstanceUuid not null
```


- **字段名、查询操作符、匹配值三者之间不能有任何空格**。
- 例如*uuid = 25506342d1384c07b7342373a57475b9*就是一个错误的查询条件，必须写为*uuid=25506342d1384c07b7342373a57475b9*。


> **注意:** 说明:

 **多个查询条件之间是**与**关系。总共支持10个查询操作符：**
 1. **=**: 等于，例如：
```
vmInstanceUuid=c4981689088b40f98d2ade2548c323da
```
 2. **!=**: 不等于，例如：
```
vmInstanceUuid!=c4981689088b40f98d2ade2548c323da
```
 3. **>**: 大于
 4. **<**: 小于
 5. **>=**: 大于等于
 6. **<=**: 小于等于
 7. **?=**: **in**操作符，测试字段值是否在一个集合。集合中的值以**,**分隔。例如测试*uuid*是否属于某个集合：
```
uuid?=25506342d1384c07b7342373a57475b9,bc58d68090ac42358c0cb0fe72e3287f
```
 8. **!?=**: **not in**操作符，测试字段值是否**不属于**一个集合。集合中的值以**,**分隔，例如测试*name*是否不等于VM1和VM2：
```
name!?=VM1,VM2
```
 9. **~=**: 字符串模糊匹配，相当于MySQL中的**like**操作。使用**%**匹配一个或多个字符，使用**_**匹配一个字符。 例如查询一个名字是以*IntelCore*开头的：
```
name~=IntelCore%
```
 10. 或者查询一个名字是以*IntelCore*开头，以*7*结尾，中间模糊匹配一个字符：
```
name~=IntelCore_7
```
这样名字是*IntelCoreI7*，*IntelCoreM7*的记录都会匹配上。
 11. **!~=**: 模糊匹配非操作。查询一个字段不能模糊匹配到某个字符串，匹配条件与**~=**相同。
 12. **is null**: 字段为null：
```
name=null
```
 13. **not null**: 字段不为null：
```
name!=null
```


### 分页查询

 **start**、**limit**、**replyWithCount**三个字段可以配合使用实现分页查询。
 - **start**指定起始查询位置。
 - **limit**指定查询返回的最大记录数。
 - **replyWithCount**被设置成true后，查询返回中会包含满足查询条件的记录总数，跟**start**值比较就可以得知还需几次分页。


例如： 总共有1000记录满足查询条件，使用如下组合：

```
start=0 limit=100 replyWithCount=true
```



则API返回将包含头100条记录，以及total字段等于1000，表示总共满足条件的记录为1000。

### 获取资源可查询字段



由于支持的查询条件数非常巨大，我们无法在文档中枚举所有的查询条件。

用户可以使用命令行工具CLI的自动补全功能来查看一个资源可查询的字段以及可跨表查询的字段。
 - 以查询虚拟机为例，在CLI里输入`QueryVmInstance`并按Tab键补全，可以看到提示页面：
```
- >>>QueryVmInstance
[Query Conditions:]
allVolumes.            cluster.               host.                  image.                 instanceOffering.      rootVolume.
vmNics.                zone.

__systemTag__=         __userTag__=           allocatorStrategy=     clusterUuid=           cpuNum=                cpuSpeed=
createDate=            defaultL3NetworkUuid=  description=           groupBy=               hostUuid=              hypervisorType=
imageUuid=             instanceOfferingUuid=  lastHostUuid=          lastOpDate=            memorySize=            name=
platform=              rootVolumeUuid=        state=                 type=
uuid=                  zoneUuid=

[Parameters:]
count=                 fields=                limit=                 replyWithCount=        sortBy=                sortDirection=
start=                 timeout=
```
 - 这里中间行：
```
__systemTag__=         __userTag__=           allocatorStrategy=     clusterUuid=           cpuNum=                cpuSpeed=
createDate=            defaultL3NetworkUuid=  description=           groupBy=               hostUuid=              hypervisorType=
imageUuid=             instanceOfferingUuid=  lastHostUuid=          lastOpDate=            memorySize=            name=
platform=              rootVolumeUuid=        state=                 type=
uuid=                  zoneUuid=
```
除**__systemTag__**和**__userTag__**两个特殊查询条件外，其余均为虚拟机表的原生字段，用户可以在API的查询条件里面指定它们，并且可以在fields参数中指定这些字段来过滤其它不希望API返回的字段。例如：
```
GET zstack/v1/vm-instances?q=cpuNum>5
```
返回CPU数量多于5的虚拟机。
```
GET zstack/v1/vm-instances?q=hypervisorType=KVM&fields=uuid&fields=name
```
 返回虚拟化类型为KVM的虚拟机，由于在fields指定了uuid和name两个字段，API返回中只会包含虚拟机的name和uuid。说明: 只有资源的原生字段可以被fields选取，**__userTag__**、**__systemTag__**以及下面讲到的跨表字段均不能出现在fields参数中。
   - 例如**vmNics.ip**表示网卡的原生字段**ip**：
```
GET zstack/v1/vm-instances?q=vmNics.ip=192.168.0.100
```
 进行了一个跨表查询，条件是网卡表的**ip**字段，返回的结果是**ip**为*192.168.0.100*的虚拟机。
   - 网卡资源同样可以跟其它资源进行跨表查询，例如**vmNics.eip**。 将网卡表和EIP表进行跨表：
```
GET zstack/v1/vm-instances?q=vmNics.eip.ip=192.168.0.100
```
 进行了跨3表查询，返回的是EIP为*192.168.0.100*的虚拟机。
 - 网卡资源同样可以跟其它资源进行跨表查询，例如**vmNics.eip**。 将网卡表和EIP表进行跨表：
```
GET zstack/v1/vm-instances?q=vmNics.eip.ip=192.168.0.100
```
 进行了跨3表查询，返回的是EIP为*192.168.0.100*的虚拟机。
   - 由于一个资源的逻辑关系存在环路，因此会存在环路路径。例如：以云主机为查询主体可以跟网卡进行跨表查询（例如：`QueryVmInstance                                         vmNics.`），同时以网卡为主体也可以跟云主机进行跨表查询（例如：`QueryVmNic                                         vmInstance.`），这样就会存在环路路径。
  - 使用中应该避免环路跨表查询。例如 `QueryVmInstance                                         vmNics.vmInstance.name=vm1`通过跨表查询了name=vm1的云主机，它的实际效果跟`QueryVmInstance                                         name=vm1`完全等同。这里的跨表是无意义的，只会生产复杂的SQL语句导致低效的数据库查询。
- 使用中应该避免环路跨表查询。例如 `QueryVmInstance                                         vmNics.vmInstance.name=vm1`通过跨表查询了name=vm1的云主机，它的实际效果跟`QueryVmInstance                                         name=vm1`完全等同。这里的跨表是无意义的，只会生产复杂的SQL语句导致低效的数据库查询。
 - **__systemTag__**和**__userTag__**是两个特殊的查询条件，允许用户通过tag查询资源。例如：
```
QueryVmInstance __systemTag__=staticIp:10.10.1.20
```
查询具有*staticIp:10.10.1.20*这个tag的虚拟机。

---

## ZQL语法



ZQL （ZStack Query Language）是ZStack Cloud提供用于查询云平台资源和服务的专属语言，提供类似SQL语言的查询语法，适用于较为复杂的查询需求场景。

### ZQL语句结构

 ZQL提供以**query**、**count**、和**sum**三个关键字起始的查询语句，每条语句由查询关键字、查询字段、与从句组成。三个关键字起始的查询语句所支持的从句略有差异，具体语句结构如下：
 - query关键字起始的查询语句结构：
```
query queryTargetWithFunction (WHERE condition+)? restrictBy? returnWith? groupBy? orderBy? limit? offset? filterBy? namedAs?
```
 - count关键字起始的查询语句结构：
```
count queryTargetWithFunction (WHERE condition+)? restrictBy? groupBy? orderBy? limit? offset? namedAs?
```
 - sum关键字起始的查询语句结构：
```
sum queryTarget by sumByValue (WHERE condition+)? orderBy? limit? offset? namedAs?
```
 - 说明: **?**表示对应从句为选填项。


### ZQL语法说明

 ZQL语句各组成部分功能和含义如下：
   - query：查询并返回资源的inventory，类似于SQL的`select                                     *`。例如，`query vminstance`类似`select                                     * from VmInstanceVO`。
   - count：查询并返回满足查询条件的资源数目， 类似SQL的`select                                     count(*)`。例如，`count                                     vminstance`类似`select count(*) from                                     VmInstanceVO`。
   - sum：查询并返回指定字段的和，类似于SQL的`select                                     sum(inv.cpuNum)`。例如，`sum                                     instanceoffering.cpuNum` 类似 `select sum(cpuNum)                                     from InstanceOfferingVO`。
 - sum：查询并返回指定字段的和，类似于SQL的`select                                     sum(inv.cpuNum)`。例如，`sum                                     instanceoffering.cpuNum` 类似 `select sum(cpuNum)                                     from InstanceOfferingVO`。
   - querytarget：查询的目标资源信息。资源命名方式为从资源名中去掉VO后缀，且需全小写。例如，若资源为VmInstanceVO，querytarget的资源名称为vminstance。querytarget只支持查询资源的某些字段。例如，`query                                     vminstance.uuid,name`为查询云主机UUID和名称。该语句类似SQL的`select                                     uuid,name from VmInstanceVO`。
   - function：处理资源字段的函数。querytarget 支持直接指定字段和使用函数处理后的字段。当前，query和count关键字支持函数处理，子查询暂不支持函数处理。 ZStack Cloud支持的函数为`distinct`。例如，`query                                     distinct(vminstance.name)`为查询并返回不同的云主机名称。该语句类似于`select                                     distinct name from VmInstanceVO`或者`select                                     distinct(name) from VmInstanceVO`。
 - function：处理资源字段的函数。querytarget 支持直接指定字段和使用函数处理后的字段。当前，query和count关键字支持函数处理，子查询暂不支持函数处理。 ZStack Cloud支持的函数为`distinct`。例如，`query                                     distinct(vminstance.name)`为查询并返回不同的云主机名称。该语句类似于`select                                     distinct name from VmInstanceVO`或者`select                                     distinct(name) from VmInstanceVO`。
       - `query vminstance where                                                 name='webvm'`中，name字段为vminstance本身的字段。
       - `query vminstance where                                                   vmNics.ip='192.168.0.100'`中，vmNics.ip为与VmNicVO表自动Join查询后的字段。
     - `query vminstance where                                                   vmNics.ip='192.168.0.100'`中，vmNics.ip为与VmNicVO表自动Join查询后的字段。
     - where从句支持AND/OR逻辑，并支持通过括号做逻辑嵌套。例如：
```
query vminstance where (name = 'webvm' or cpuNum > 10) and description is not null
```
   - where从句支持AND/OR逻辑，并支持通过括号做逻辑嵌套。例如：
```
query vminstance where (name = 'webvm' or cpuNum > 10) and description is not null
```
     - sub query从句中的querytarget只支持选择一个字段，例如`host.uuid`。若未选择字段或选择多个字段均会报错。sub query中的where从句与普通query语句中的where从句一样。
     - sub query不支持restrict by、return with从句，也不支持limit、order by、和 offset关键字。
   - sub query不支持restrict by、return with从句，也不支持limit、order by、和 offset关键字。
     - restrict by指定的条件名与querytarget中的带字段查询格式相同，均为**资源名.字段名**，例如**zone.uuid**。
     - restrict by从句中的条件只支持AND逻辑关系，例如：
```
restrict by (zone.uuid = '28818693f3924d92af2b19b2407317ff', zone.name like '%east-%')
```
   - restrict by从句中的条件只支持AND逻辑关系，例如：
```
restrict by (zone.uuid = '28818693f3924d92af2b19b2407317ff', zone.name like '%east-%')
```
     - `total`用于指定满足查询条件的数据数量。例如，对于`query                                             vminstance where cpuNum > 8 return with                                             (total)`语句，查询结果会返回`total`字段值。
       1. 先执行where子句中的数据库查询条件，获取符合查询条件数据。
       2. 将where子句中查询返回的数据作为输入条件注入zwatch查询。
 例如，在以下ZQL语句中，首先执行数据查询，找到满足`cpuNum >                                                 8`条件的VM，然后将VM的uuid合并成一个zwatch的label，注入到之后的zwatch查询条件中：

```
query vminstance where cpuNum > 8 return with (zwatch{metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100', functions=limit(limit=10), functions=top(num=2)})
```

zwatch子句以`zwatch`关键字打头，查询条件置于花括号中`{}`。查询条件即为GetMetricData API的各个字段。其中参数中无namespace字段，该字段由querytarget指定的资源确定，例如vminstance就代表ZStack/VM。

```
private String metricName;
    private Long startTime;
    private Long endTime;
    private Long offsetAheadOfCurrentTime;
    private Integer period;
    private List<String> labels;
    private List<String> functions;
```


       - zwatch子句一般以query后的对象的主键作为查询参数传递到后面的GetMetricData查询中。若要使用非主键的字段进行zwatch查询，可在对应的子句中增加feildIndex参数。fieldIndex=0表示用query后的第一个字段。例如：
```
query faulttolerancevmgroup.primaryVmInstanceUuid return with (zwatch{resultName='cpuAverageUsedUtilization',metricName='CPUAverageUsedUtilization',offsetAheadOfCurrentTime=0,period=10,fieldIndex=0})
```
       - 字符串型的参数需使用单引号标记。对于labels和functions两个list类型的参数，采用多个输入，在列表中的顺序按参数出现的先后顺序确定，参数之间用逗号(,)分隔。例如：
```
labels='CPUNum=10', labels='CPUNum=8'
```
       - zwatch子句查询返回的监控数据数目与满足where从句的数据库记录数据数目可能不一样。例如在以下ZQL语句中，满足cpuNum > 8的VM可能有100个，但zwatch子句用了top(num=2)函数，则返回的监控数据只有2个：
```
query vminstance.name where cpuNum > 8 return with (zwatch{metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100',functions=limit(limit=10), functions=top(num=2)})
```
       - 若只关注监控数据，ZQL的querytarget应该指定字段而不是指定资源本身。例如在以下ZQL语句中，返回的数据中只包含vm的名称和监控数据，这样可以大大减少API传输的数据量：
```
query vminstance.name where cpuNum > 8 return with (zwatch{metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100',functions=limit(limit=10), functions=top(num=2)})
```
 return with从句支持多个zwatch子句。在使用多子句时，需要通过resultName指定返回数据在ZQL返回对象中`reurnWith`对象中的名字。例如：

```
query vminstance.name where cpuNum > 8 return with (zwatch{resultName='zwatch1',metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100', functions=limit(limit=10), functions=top(num=2)}, zwatch{resultName='zwatch2',metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100', functions=limit(limit=10), functions=top(num=2)})
```

其中用两个子句分别指定了`resultName='zwatch1'`，`resultName='zwatch2'`，则对应的返回值以zwtach1和zwatch2命名：

```
"returnWith": {
		"zwatch1": [{
			"value": 105.0,
			"time": 7.0,
			"labels": {
				"VMUuid": "bdbc971d1de74a91b8f3f0c7c9f5babe"
			}
		}, {
			"value": 101.0,
			"time": 1.0,
			"labels": {
				"VMUuid": "bdbc971d1de74a91b8f3f0c7c9f5babe"
			}
		}],
		"zwatch2": [{
			"value": 105.0,
			"time": 7.0,
			"labels": {
				"VMUuid": "bdbc971d1de74a91b8f3f0c7c9f5babe"
			}
		}, {
			"value": 101.0,
			"time": 1.0,
			"labels": {
				"VMUuid": "bdbc971d1de74a91b8f3f0c7c9f5babe"
			}
		}]
	}
```

    - 若只关注监控数据，ZQL的querytarget应该指定字段而不是指定资源本身。例如在以下ZQL语句中，返回的数据中只包含vm的名称和监控数据，这样可以大大减少API传输的数据量：
```
query vminstance.name where cpuNum > 8 return with (zwatch{metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100',functions=limit(limit=10), functions=top(num=2)})
```
   - 若只关注监控数据，ZQL的querytarget应该指定字段而不是指定资源本身。例如在以下ZQL语句中，返回的数据中只包含vm的名称和监控数据，这样可以大大减少API传输的数据量：
```
query vminstance.name where cpuNum > 8 return with (zwatch{metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10',labels='CPUNum=100',functions=limit(limit=10), functions=top(num=2)})
```
     - `query vminstance group by name`类似于 SQL中的`select * from VmInstanceVO group by                                             name`。
     - `count vminstance where cpuNum > 8 group by                                             name,memorySize`类似于SQL中的`select count(*)                                             where cpuNum`。
 `query group by` 返回的结果形式和普通 query 相同，例如：`query vminstance.name return with (total)                                         group by                                             zoneUuid`语句的返回结果为：

```
{
    "results": [
        {
            "inventories": [
                {
                    "name": "win2016-new"
                }
            ],
            "total": 24
        }
    ],
    "success": true
}
```

``

> **注意:** 说明: total字段值与group                                             by 后的数量并不相同。

`count group                                         by` 的返回结果和普通 `count` 有所不同，例如`count vminstance group by imageUuid order by                                         groupCount                                         asc`语句的返回结果为：

```
{
    "results": [
        {
            "inventoryCounts": [
                [
                    {
                        "imageUuid": "20d8593c94934b4596af7109a1609811"
                    },
                    1
                ],
                [
                    {
                        "imageUuid": "4eabdabb64844f8eb2ae5d1aa2c44d7a"
                    },
                    2
                ]
            ],
            "total": 3
        }
    ],
    "success": true
}
```

其中`inventoryCounts` 是一个拥有复杂键（`group by` 指定字段的对象）的有序 map 类型，经 json 转化成这种 jsonArray 的形式。若执行`count vminstance group by                                         imageUuid offset                                         2`语句，返回结果为

```
{
    "results": [
        {
            "total": 3
        }
    ],
    "success": true
}
```

其中：
     - 由于offset条件下并无查询结果，inventoryCounts 字段为null 。
     - total字段仍然是分组前的total结果。
   - total字段仍然是分组前的total结果。
   - order by ：类似SQL的order by从句，可以用资源的字段对返回结果排序，例如：
```
query vminstance orderby cpuNum asc
```
或
```
query vminstance orderby cpuNum desc
```
支持对 count group by 后的结果进行排序，例如：
```
count vminstance groupby imageUuid orderby groupCount asc
```
同时支持对 sum 后的结果进行排序，例如：
```
sum VolumeSnapshot.size by volumeUuid orderby size asc
```
   - limit ：类似SQL的limit从句，限定返回数据数目，例如：
```
query vminstance limit 100
```
   - offset ：类似SQL的offset从句，跟limit从句一起使用实现翻页功能，例如：
```
query vminstance limit 100 offset 10
```
 - offset ：类似SQL的offset从句，跟limit从句一起使用实现翻页功能，例如：
```
query vminstance limit 100 offset 10
```
  若使用sum关键字进行求和查询，可实现类似SQL语句`select sum(xxx) ... group by                 yyy`的求和功能。例如以下查询语句对vminstance的cpuNum, memorySize两个字段分别进行求和，并通uuid字段对数据进行分组。

```
sum vminstance.cpuNum,memorySize by uuid where cpuNum >0
```

该语句等同于以下SQL语句：

```
select sum(vm.cpuNum),sum(vm.memorySize) from VmInstanceVO vm where vm.cpuNum > 0
```

返回结果为：

```
{
	"results": [{
		"inventories": [
			["7dba128454014abc8a69e739f1c4e2ad", 2, 536870912],
			["e889cbf61cf6434f875e80e3b1c5a92d", 4, 8589934592]
		]
	}]
}
```

返回结果的每个元素为一个数组：第一个元素总是 by 关键字指定的group by字段，通过该字段可以分辨后面求和值所对应的资源；第二个元素开始为求和的结果，其顺序跟sum关键字后的字段顺序相同。例如这里2对应vm.cpuNum，536870912对应vm.memorySize。 ZQL语句提供查询比较符**has**与**not has**，适用于级联资源的查询场景：
 - 由于级联资源一对多的特性，可以使用**has**查询同时拥有多种级联资源的结果。例如，查询**高可用暂停**的云主机：
```
query vminstance where __systemTag__ has ('ha', 'inhibitHA')
```
说明: **has**目前只支持确定的值，不支持子查询。
 - **not has**可用于查询不拥有某种级联资源的结果。 比如查询没有使用 ipv4 的云主机：
```
query vminstance where vmNics.ipVersion nothas ('4')
```
  ZQL支持在一个查询中指定多个ZQL语句以实现批量查询。多个ZQL语句通过分号（;）分隔。
   - ZQL语句的名称必须全局唯一，否则后面的ZQL语句会覆盖前面同名语句的结果。
   - named as从句可选，当省略时，返回的结果中不包含**name**字段，只能按照结果在数组中的顺序分辨其跟ZQL语句的对应关系。
 - named as从句可选，当省略时，返回的结果中不包含**name**字段，只能按照结果在数组中的顺序分辨其跟ZQL语句的对应关系。
 例如：

```
query host named as 'host';
query zone return with (total) named as 'zone'
```

返回结果格式如下：

```
{
	"results": [{
		"inventories": [{
			"username": "root",
			"password": "password",
			"sshPort": 22,
			"zoneUuid": "1a29060d81724b6083caaf530b4c6ab5",
			"name": "kvm",
			"uuid": "f1e112cf4f3c4bbd939fdf18f72ac5e8",
			"clusterUuid": "324fece70aa848ed917b9134ef7072c1",
			"managementIp": "localhost",
			"hypervisorType": "KVM",
			"state": "Enabled",
			"status": "Connected",
			"totalCpuCapacity": 320,
			"availableCpuCapacity": 314,
			"cpuSockets": 2,
			"totalMemoryCapacity": 34359738368,
			"availableMemoryCapacity": 25232932864,
			"cpuNum": 32,
			"createDate": "Jul 10, 2018 5:32:56 PM",
			"lastOpDate": "Jul 10, 2018 5:32:58 PM"
		}],
		"name": "host"
	}, {
		"inventories": [{
			"uuid": "1a29060d81724b6083caaf530b4c6ab5",
			"name": "zone",
			"description": "test",
			"state": "Enabled",
			"type": "zstack",
			"createDate": "Jul 10, 2018 5:32:54 PM",
			"lastOpDate": "Jul 10, 2018 5:32:54 PM"
		}],
		"total": 1,
		"name": "zone"
	}]
}
```

 ZStack Cloud支持将API的结果嵌入ZQL语句中。其中，API不局限于Get类API，也可以嵌入Query类API，但必须是同步返回的请求。以下给出不同条件或参数下的示例：
 - 条件为**in**：
```
query vminstance.hostUuid where hostUuid in getapi(api='GetVmStartingCandidateClustersHosts', output='hosts.uuid', uuid='${vm1.uuid}') limit 1
```
 - 条件为**=**：
```
query vminstance.hostUuid where hostUuid = getapi(api='GetVmStartingCandidateClustersHosts', output='hosts.uuid', uuid='${vm1.uuid}') limit 1
```
 - 参数为**boolean**：
```
query vminstance.hostUuid where hostUuid ingetapi(api='GetCandidateMiniHosts', output='hosts.hostname', local=true, configure=false) limit 1
```
 - 参数为**list**：
```
query vminstance.hostUuid where hostUuid ingetapi(api='GetPciDeviceCandidatesForNewCreateVm',output='inventories.uuid', clusterUuids=list('${cluster.uuid}','${vm1.uuid}')) limit 1
```


### 使用Curl调用ZQL查询示例

 Curl示例：

```
curl http://localhost:8080/zstack/v1/zql?zql=yourZQL -X GET -H 'Connection:close' -H 'Content-Type:application/json' -H 'Authorization:OAuth SesionID'
```

其中：
 - yourZQL：查询使用的ZQL语句，需通过URL进行编码
 - SessionID：调用ZQL语句所需的Sesion ID，例如376c223518e347bcbeca40d2c7c515b9
  ZQL语句示例：

```
query vminstance where name='webvm' and vmnics.ip='192.168.0.10' or (vmnics.eip = '172.20.100.100' and (cpuNum >= 8 or clusterUuid in ('fe13b725c80e45709f0414c266a80239','73ca1ca7603d454f8fa7f3bb57097f80')))
restrict by (zone.uuid != 'fec2889fef2d49b1967c7e39025f4eb4') return with (total, zwatch{metricName='CPUUsedUtilization',offsetAheadOfCurrentTime=3600,period=10,labels='CPUNum=10', functions=limit(limit=10), functions=top(num=2)}) order by cpuNum desc limit 100 offset 10
```

 ZQL语句返回结果：

```
{
    "results": [
        {
            "inventories": [
                {
                    "allVolumes": [
                        {
                            "actualSize": 10775166976,
                            "createDate": "Nov 11, 2021 2:03:47 PM",
                            "description": "Root volume for VM[uuid:0d62f2c34390464d9bfd166c270a261a]",
                            "deviceId": 0,
                            "format": "qcow2",
                            "installPath": "sharedblock://e2402ed34190477cb9b4ae3a2cc58db6/fa75061b0fee4bc99bfba51d5191fc88",
                            "isShareable": false,
                            "lastOpDate": "Nov 16, 2021 11:42:25 PM",
                            "name": "ROOT-for-22222-2",
                            "primaryStorageUuid": "e2402ed34190477cb9b4ae3a2cc58db6",
                            "rootImageUuid": "b5876869ad3d464f8915f8a3597b5688",
                            "size": 42949672960,
                            "state": "Enabled",
                            "status": "Ready",
                            "type": "Root",
                            "uuid": "fa75061b0fee4bc99bfba51d5191fc88",
                            "vmInstanceUuid": "0d62f2c34390464d9bfd166c270a261a"
                        }
                    ],
                    "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
                    "architecture": "x86_64",
                    "clusterUuid": "110fcbd2f0c344fd9c33604bc51b8316",
                    "cpuNum": 16,
                    "cpuSpeed": 0,
                    "createDate": "Nov 11, 2021 2:03:47 PM",
                    "defaultL3NetworkUuid": "776aa4f32c704acba90811ca071919ed",
                    "description": "",
                    "guestOsType": "Windows",
                    "hypervisorType": "KVM",
                    "imageUuid": "b5876869ad3d464f8915f8a3597b5688",
                    "instanceOfferingUuid": "05fe32439048403f9577eed860ca9644",
                    "lastHostUuid": "2926b5fce9384180a08d3cd46841e35c",
                    "lastOpDate": "Nov 16, 2021 11:42:25 PM",
                    "memorySize": 17179869184,
                    "name": "22222-2",
                    "platform": "Windows",
                    "rootVolumeUuid": "fa75061b0fee4bc99bfba51d5191fc88",
                    "state": "Stopped",
                    "type": "UserVm",
                    "uuid": "0d62f2c34390464d9bfd166c270a261a",
                    "vmCdRoms": [
                        {
                            "createDate": "Nov 11, 2021 2:03:47 PM",
                            "deviceId": 0,
                            "lastOpDate": "Nov 11, 2021 2:03:47 PM",
                            "name": "vm-0d62f2c34390464d9bfd166c270a261a-cdRom",
                            "uuid": "7bcf07ee5aba41399db62ef43ac9299c",
                            "vmInstanceUuid": "0d62f2c34390464d9bfd166c270a261a"
                        }
                    ],
                    "vmNics": [
                        {
                            "createDate": "Nov 11, 2021 2:03:47 PM",
                            "deviceId": 0,
                            "driverType": "e1000",
                            "gateway": "172.25.0.1",
                            "hypervisorType": "KVM",
                            "internalName": "vnic8001.0",
                            "ip": "172.25.201.6",
                            "l3NetworkUuid": "776aa4f32c704acba90811ca071919ed",
                            "lastOpDate": "Nov 11, 2021 2:03:47 PM",
                            "mac": "fa:a7:65:4a:5b:00",
                            "netmask": "255.255.0.0",
                            "type": "VNIC",
                            "usedIps": [
                                {
                                    "createDate": "Nov 11, 2021 2:03:47 PM",
                                    "gateway": "172.25.0.1",
                                    "ip": "172.25.201.6",
                                    "ipInLong": 2887371014,
                                    "ipRangeUuid": "9bc64be8aec24ab8bbc9b03b5db3eebc",
                                    "ipVersion": 4,
                                    "l3NetworkUuid": "776aa4f32c704acba90811ca071919ed",
                                    "lastOpDate": "Nov 11, 2021 2:03:47 PM",
                                    "netmask": "255.255.0.0",
                                    "uuid": "688307033adb3bf081e5d9a0736ae0d3",
                                    "vmNicUuid": "eab9d08437db4f03a800f3b01c198eab"
                                }
                            ],
                            "uuid": "eab9d08437db4f03a800f3b01c198eab",
                            "vmInstanceUuid": "0d62f2c34390464d9bfd166c270a261a"
                        }
                    ],
                    "zoneUuid": "5713bc952a904718be06f329222db7ce"
                },
                {
                    "allVolumes": [
                        {
                            "actualSize": 9680674816,
                            "createDate": "Oct 20, 2021 5:37:22 PM",
                            "description": "Root volume for VM[uuid:1e77e04fccea43f2b5ce9c27f672879f]",
                            "deviceId": 0,
                            "format": "qcow2",
                            "installPath": "/cloud_ps/rootVolumes/acct-36c27e8ff05c4780bf6d2fa65700f22e/vol-c6d41b9460ab497c989ed89b514202aa/c6d41b9460ab497c989ed89b514202aa.qcow2",
                            "isShareable": false,
                            "lastOpDate": "Oct 20, 2021 5:38:58 PM",
                            "name": "ROOT-for-vm$xzt3",
                            "primaryStorageUuid": "2116fa756e6f4e20a9f38ee5eabee186",
                            "rootImageUuid": "e21d04f8fb2e4389acfe9030e108b6a9",
                            "size": 10737418240,
                            "state": "Enabled",
                            "status": "Ready",
                            "type": "Root",
                            "uuid": "c6d41b9460ab497c989ed89b514202aa",
                            "vmInstanceUuid": "1e77e04fccea43f2b5ce9c27f672879f"
                        }
                    ],
                    "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
                    "architecture": "x86_64",
                    "clusterUuid": "110fcbd2f0c344fd9c33604bc51b8316",
                    "cpuNum": 16,
                    "cpuSpeed": 0,
                    "createDate": "Oct 20, 2021 5:37:22 PM",
                    "defaultL3NetworkUuid": "7dbaf58d89994042b0c1e3c6704cb3bd",
                    "description": "cloned from vm[uuid:59404046cf6247a3bc1f4516762ec437]",
                    "guestOsType": "Ubuntu 18",
                    "hypervisorType": "KVM",
                    "imageUuid": "e21d04f8fb2e4389acfe9030e108b6a9",
                    "instanceOfferingUuid": "05fe32439048403f9577eed860ca9644",
                    "lastHostUuid": "2926b5fce9384180a08d3cd46841e35c",
                    "lastOpDate": "Nov 11, 2021 10:45:30 AM",
                    "memorySize": 17179869184,
                    "name": "vm$xzt3",
                    "platform": "Linux",
                    "rootVolumeUuid": "c6d41b9460ab497c989ed89b514202aa",
                    "state": "Stopped",
                    "type": "UserVm",
                    "uuid": "1e77e04fccea43f2b5ce9c27f672879f",
                    "vmCdRoms": [
                        {
                            "createDate": "Oct 20, 2021 5:37:22 PM",
                            "deviceId": 0,
                            "lastOpDate": "Oct 20, 2021 5:37:22 PM",
                            "name": "vm-1e77e04fccea43f2b5ce9c27f672879f-cdRom",
                            "uuid": "5ace720b83d4439c80ceba532457945a",
                            "vmInstanceUuid": "1e77e04fccea43f2b5ce9c27f672879f"
                        }
                    ],
                    "vmNics": [
                        {
                            "createDate": "Oct 20, 2021 5:37:22 PM",
                            "deviceId": 0,
                            "driverType": "virtio",
                            "gateway": "192.168.81.1",
                            "hypervisorType": "KVM",
                            "internalName": "vnic7810.0",
                            "ip": "192.168.81.96",
                            "l3NetworkUuid": "7dbaf58d89994042b0c1e3c6704cb3bd",
                            "lastOpDate": "Oct 20, 2021 5:37:22 PM",
                            "mac": "fa:53:4a:f0:9d:00",
                            "netmask": "255.255.255.0",
                            "type": "VNIC",
                            "usedIps": [
                                {
                                    "createDate": "Oct 20, 2021 5:37:22 PM",
                                    "gateway": "192.168.81.1",
                                    "ip": "192.168.81.96",
                                    "ipInLong": 3232256352,
                                    "ipRangeUuid": "e538dab6e1e84019bd7d0a78a333d071",
                                    "ipVersion": 4,
                                    "l3NetworkUuid": "7dbaf58d89994042b0c1e3c6704cb3bd",
                                    "lastOpDate": "Oct 20, 2021 5:37:22 PM",
                                    "netmask": "255.255.255.0",
                                    "uuid": "9f4cdecfe309317eb07cf8ae95caf3a6",
                                    "vmNicUuid": "482753eb89df4fe58b27192b12173dcb"
                                }
                            ],
                            "uuid": "482753eb89df4fe58b27192b12173dcb",
                            "vmInstanceUuid": "1e77e04fccea43f2b5ce9c27f672879f"
                        }
                    ],
                    "zoneUuid": "5713bc952a904718be06f329222db7ce"
                },
                {
                    "allVolumes": [
                        {
                            "actualSize": 4394319872,
                            "createDate": "Sep 15, 2021 2:22:29 PM",
                            "description": "Root volume for VM[uuid:077973f897a0453c8f7e0760c73689d0]",
                            "deviceId": 0,
                            "format": "qcow2",
                            "installPath": "sharedblock://e2402ed34190477cb9b4ae3a2cc58db6/65338b21e7364387811c764140788f65",
                            "isShareable": false,
                            "lastOpDate": "Sep 15, 2021 2:24:25 PM",
                            "name": "ROOT-for-000000-3",
                            "primaryStorageUuid": "e2402ed34190477cb9b4ae3a2cc58db6",
                            "rootImageUuid": "b5876869ad3d464f8915f8a3597b5688",
                            "size": 42949672960,
                            "state": "Enabled",
                            "status": "Ready",
                            "type": "Root",
                            "uuid": "65338b21e7364387811c764140788f65",
                            "vmInstanceUuid": "077973f897a0453c8f7e0760c73689d0"
                        }
                    ],
                    "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
                    "architecture": "x86_64",
                    "clusterUuid": "110fcbd2f0c344fd9c33604bc51b8316",
                    "cpuNum": 16,
                    "cpuSpeed": 0,
                    "createDate": "Sep 15, 2021 2:22:29 PM",
                    "defaultL3NetworkUuid": "776aa4f32c704acba90811ca071919ed",
                    "description": "MSCS3",
                    "guestOsType": "WindowsServer 2016",
                    "hypervisorType": "KVM",
                    "imageUuid": "b5876869ad3d464f8915f8a3597b5688",
                    "instanceOfferingUuid": "05fe32439048403f9577eed860ca9644",
                    "lastHostUuid": "aa0ed44b22004d1a899007364ca0c7c8",
                    "lastOpDate": "Jan 12, 2022 2:38:09 PM",
                    "memorySize": 17179869184,
                    "name": "故障转移集群2",
                    "platform": "Windows",
                    "rootVolumeUuid": "65338b21e7364387811c764140788f65",
                    "state": "Stopped",
                    "type": "UserVm",
                    "uuid": "077973f897a0453c8f7e0760c73689d0",
                    "vmCdRoms": [
                        {
                            "createDate": "Sep 15, 2021 2:22:30 PM",
                            "deviceId": 0,
                            "lastOpDate": "Sep 15, 2021 2:22:30 PM",
                            "name": "vm-077973f897a0453c8f7e0760c73689d0-cdRom",
                            "uuid": "df81cd2b02814b88a78d60d11c5b08c3",
                            "vmInstanceUuid": "077973f897a0453c8f7e0760c73689d0"
                        }
                    ],
                    "vmNics": [
                        {
                            "createDate": "Sep 15, 2021 2:22:30 PM",
                            "deviceId": 0,
                            "driverType": "virtio",
                            "gateway": "172.25.0.1",
                            "hypervisorType": "KVM",
                            "internalName": "vnic6672.0",
                            "ip": "172.25.201.186",
                            "l3NetworkUuid": "776aa4f32c704acba90811ca071919ed",
                            "lastOpDate": "Nov 11, 2021 11:50:01 AM",
                            "mac": "fa:44:0b:42:24:00",
                            "netmask": "255.255.0.0",
                            "type": "VNIC",
                            "usedIps": [
                                {
                                    "createDate": "Sep 15, 2021 2:22:30 PM",
                                    "gateway": "172.25.0.1",
                                    "ip": "172.25.201.186",
                                    "ipInLong": 2887371194,
                                    "ipRangeUuid": "9bc64be8aec24ab8bbc9b03b5db3eebc",
                                    "ipVersion": 4,
                                    "l3NetworkUuid": "776aa4f32c704acba90811ca071919ed",
                                    "lastOpDate": "Sep 15, 2021 2:22:30 PM",
                                    "netmask": "255.255.0.0",
                                    "uuid": "bb634a32ed2731edbb71fd9a9a5469db",
                                    "vmNicUuid": "a62564e7600346bd9d42992403b2f416"
                                }
                            ],
                            "uuid": "a62564e7600346bd9d42992403b2f416",
                            "vmInstanceUuid": "077973f897a0453c8f7e0760c73689d0"
                        }
                    ],
                    "zoneUuid": "5713bc952a904718be06f329222db7ce"
                },
                {
                    "allVolumes": [
                        {
                            "actualSize": 15186984960,
                            "createDate": "Sep 24, 2021 10:42:26 PM",
                            "description": "Root volume for VM[uuid:1a9ccdc7f4854d93a3ad5e6e226c2a2c]",
                            "deviceId": 0,
                            "format": "qcow2",
                            "installPath": "sharedblock://cf1e9c4f3d674f159505c234c3e5356b/007154f1864a457b8658f81641c89485",
                            "isShareable": false,
                            "lastOpDate": "Sep 24, 2021 10:45:18 PM",
                            "name": "ROOT-for-111-3",
                            "primaryStorageUuid": "cf1e9c4f3d674f159505c234c3e5356b",
                            "rootImageUuid": "01ff0ca649604b1db590bf6ef641d957",
                            "size": 32212254720,
                            "state": "Enabled",
                            "status": "Ready",
                            "type": "Root",
                            "uuid": "007154f1864a457b8658f81641c89485",
                            "vmInstanceUuid": "1a9ccdc7f4854d93a3ad5e6e226c2a2c"
                        }
                    ],
                    "allocatorStrategy": "LeastVmPreferredHostAllocatorStrategy",
                    "architecture": "x86_64",
                    "clusterUuid": "110fcbd2f0c344fd9c33604bc51b8316",
                    "cpuNum": 16,
                    "cpuSpeed": 0,
                    "createDate": "Sep 24, 2021 10:42:26 PM",
                    "defaultL3NetworkUuid": "a61146e6f2fe4ed382c47c09d968cea0",
                    "description": "",
                    "guestOsType": "WindowsServer 2016",
                    "hypervisorType": "KVM",
                    "imageUuid": "01ff0ca649604b1db590bf6ef641d957",
                    "instanceOfferingUuid": "05fe32439048403f9577eed860ca9644",
                    "lastHostUuid": "f740664d2688439abf620255eb05e843",
                    "lastOpDate": "Oct 1, 2021 10:25:21 AM",
                    "memorySize": 17179869184,
                    "name": "111-3",
                    "platform": "Windows",
                    "rootVolumeUuid": "007154f1864a457b8658f81641c89485",
                    "state": "Stopped",
                    "type": "UserVm",
                    "uuid": "1a9ccdc7f4854d93a3ad5e6e226c2a2c",
                    "vmCdRoms": [
                        {
                            "createDate": "Sep 24, 2021 10:42:26 PM",
                            "deviceId": 0,
                            "lastOpDate": "Sep 24, 2021 10:42:26 PM",
                            "name": "vm-1a9ccdc7f4854d93a3ad5e6e226c2a2c-cdRom",
                            "uuid": "3af14b1eebf74b05bccead5455b21649",
                            "vmInstanceUuid": "1a9ccdc7f4854d93a3ad5e6e226c2a2c"
                        }
                    ],
                    "vmNics": [
                        {
                            "createDate": "Sep 25, 2021 11:38:22 PM",
                            "deviceId": 0,
                            "driverType": "e1000",
                            "gateway": "172.26.0.1",
                            "hypervisorType": "KVM",
                            "internalName": "vnic6711.0",
                            "ip": "172.26.201.214",
                            "l3NetworkUuid": "a61146e6f2fe4ed382c47c09d968cea0",
                            "lastOpDate": "Sep 25, 2021 11:38:22 PM",
                            "mac": "fa:a8:c6:4b:1e:00",
                            "netmask": "255.255.0.0",
                            "type": "VNIC",
                            "usedIps": [
                                {
                                    "createDate": "Sep 25, 2021 11:38:22 PM",
                                    "gateway": "172.26.0.1",
                                    "ip": "172.26.201.214",
                                    "ipInLong": 2887436758,
                                    "ipRangeUuid": "63708e07fa374fe5b9d735b6455e5651",
                                    "ipVersion": 4,
                                    "l3NetworkUuid": "a61146e6f2fe4ed382c47c09d968cea0",
                                    "lastOpDate": "Sep 25, 2021 11:38:22 PM",
                                    "netmask": "255.255.0.0",
                                    "uuid": "39c53c8847e7351c84c42b57ccb64c1e",
                                    "vmNicUuid": "6a156d11879647228cf9a1cbc8b14538"
                                }
                            ],
                            "uuid": "6a156d11879647228cf9a1cbc8b14538",
                            "vmInstanceUuid": "1a9ccdc7f4854d93a3ad5e6e226c2a2c"
                        }
                    ],
                    "zoneUuid": "5713bc952a904718be06f329222db7ce"
                }
            ],
            "returnWith": {
                "zwatch": [
                    {
                        "labels": {
                            "CPUNum": "10",
                            "VMUuid": "747d5c006d3a4654a84750772fdecf10"
                        },
                        "time": 1650601783,
                        "value": 0.18
                    },
                    {
                        "labels": {
                            "CPUNum": "10",
                            "VMUuid": "747d5c006d3a4654a84750772fdecf10"
                        },
                        "time": 1650601773,
                        "value": 0.16
                    }
                ],
                "zwatchTotal": 2
            },
            "total": 252
        }
    ],
    "success": true
}
```

---

## 修改API服务端口

  用户如需修改API服务端口，例如原API服务端口为8080，需修改为8989，可遵循以下步骤进行修改：
 1. 进入/usr/local/zstack/apache-tomcat/webapps/zstack/WEB-INF/classes/zstack.properties，在**zstack.properties**配置文件中设置如下参数：
```
CloudBus.httpPort = 8989
RESTFacade.port = 8989
```
 2. 进入/usr/local/zstack/apache-tomcat-8.5.35/conf/server.xml，将**tomcat**的**server.xml**配置文件中的8080端口改为8989端口。
 3. 执行以下命令，修改UI的管理节点端口为8989：
```
zstack-ctl config_ui --mn-port 8989
```
 4. 重启管理节点和UI：
```
zstack-ctl stop
zstack-ctl start
```
 5. 使用CLI命令时需指定端口为8989：
```
zstack-cli --port 8989
```



> **注意:** 说明: 设置的API服务端口需在有效范围内，且不要与ZStack Cloud已占用的服务端口冲突，关于ZStack Cloud已占用的服务端口，详情可查看《运维手册》端口占用章节。

---

## 批量API返回



批量返回消息分为非longjob和longjob两种类型，详情如下。

### 非longjob类型API



对于非longjob类型API的返回值，外层的`success`在出错时为`true`，而里层`success`则根据结果进行变化，若子任务成功则`success=true`，否则`success=false`。以下为`APIBatchDeleteVolumeSnapshotMsg`返回示例： 出错返回：

```
{
    "results": [
        {
            "error": {
                "code": "VOLUME_SNAPSHOT.1000",
                "description": "Snapshot is not in correct status for operation.",
                "details": "snapshot[uuid:e9c43724c6614aa488b63d6b33e30ebd, name:测试1]'s status[Ready] is not allowed for message[org.zstack.header.storage.snapshot.VolumeSnapshotDeletionMsg], allowed status[Ready, Creating, Deleting]"
            },
            "snapshotUuid": "e9c43724c6614aa488b63d6b33e30ebd",
            "success": false
        },
        {
            "error": {
                "code": "VOLUME_SNAPSHOT.1000",
                "description": "Snapshot is not in correct status for operation.",
                "details": "snapshot[uuid:e9c43724c6614aa488b63d6b33e30ebd, name:测试2]'s status[Ready] is not allowed for message[org.zstack.header.storage.snapshot.VolumeSnapshotDeletionMsg], allowed status[Ready, Creating, Deleting]"
            },
            "snapshotUuid": "63daa66726b24f9390216b8edf32190d",
            "success": false
        }
    ],
    "success": true
}
```

 成功返回：

```
{
    "results": [
        {
            "snapshotUuid": "1c8408e0f05d4fc39465d7db27d6bc32",
            "success": true
        },
        {
            "snapshotUuid": "e071e0ec42de4323bff23993a6a236d2",
            "success": true
        }
    ],
    "success": true
}
```



### Longjob类型API



对于longjob类型API的返回值，外层`success`在出错时也为`true`，而里层`success`则根据结果进行变化，若子任务成功则`success=true`，否则`success=false`。以下为`APIAddHostFromConfigFileMsg`返回示例： 出错返回：

```
{
    "results": [
        {
            "error": {
                "code": "SYS.1006",
                "cost": "5ms",
                "description": "An operation failed",
                "details": "the host[10.0.231.23] ssh port[22] not open after 300 seconds, connect timeout",
                "elaboration": "错误信息: 物理机[10.0.231.23]的ssh端口[22]在 300 秒内未开放，连接超时",
                "location": "HostManagerImpl.java: send-connect-host-message (location:2/4)"
            },
            "ip": "10.0.231.23",
            "success": false
        },
        {
            "error": {
                "code": "SYS.1007",
                "description": "One or more API argument is invalid",
                "details": "已经存在一个管理IP是[10.0.93.160]的物理机"
            },
            "ip": "10.0.93.160",
            "success": false
        }
    ],
    "success": true
}
```

 成功返回：

```
{
    "results": [
        {
            "ip": "10.0.231.231",
            "success": true
        },
        {
            "ip": "10.0.93.160",
            "success": true
        }
    ],
    "success": true
}
```



### 结果说明


 - 两种类型API外层的`success`的返回均为`true`。
 - 外层`success`代表REST请求的结果，当发起REST请求成功则`success`为`true`。
 - 里层`success`代表任务实际结果，成功则里层返回`succuess=true`，失败则返回`success=false`。
  ````

> **注意:** 说明: UI Server会改写后端API返回结果，例如增加successCount和failCount字段。
