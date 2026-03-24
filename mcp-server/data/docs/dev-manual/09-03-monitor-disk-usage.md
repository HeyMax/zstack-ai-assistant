# 如何查看云主机内部监控磁盘已使用率 - 场景实践

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/9.3.html*

---

## 如何查看云主机内部监控磁盘已使用率



ZStack Cloud支持通过普通API调用以及ZQL语句两种方式查询云主机内部监控磁盘已使用率。

---

## 使用API查看云主机内部监控磁盘已使用率



ZStack Cloud支持通过系统登录或第三方API工具（例如Postman）使用HTTP方式调用API，查看指定云主机内部监控的磁盘已使用率。本文主要以管理员身份（admin）登录管理节点系统查看该监控项数据。您也可以使用云平台其他已通过授权账户/用户身份登录系统查看。 调用API查看云主机内部监控数据前，需确保：
 - 云主机三层网络已开启DHCP服务。若未开启DHCP服务，可参考[挂载网络服务到三层网络(AttachNetworkServiceToL3Network)]。
   - 若云主机系统为Linux，运行`/bin/bash -c "$(curl -s -S                                 http://169.254.169.254/vm-tools.sh)"`进行安装。
   - 若云主机系统FreeBSD，运行`curl http://169.254.169.254/vm-tools.sh -o                                 vm-tools.sh && bash -x ./vm-tools.sh`进行安装。
 - 若云主机系统FreeBSD，运行`curl http://169.254.169.254/vm-tools.sh -o                                 vm-tools.sh && bash -x ./vm-tools.sh`进行安装。
  API调用流程概览：
 1. 登录云平台
 2. 查询监控项云主机内部监控磁盘已使用率


### API调用流程

 API详细调用流程如下：
   - password字段需填入经过SHA-512算法加密的密码
 返回结果为：

```
{"inventory":{"uuid":"5f11c78a34e944abb25248a6cd7ca9f7","accountUuid":"36c27e8ff05c4780bf6d2fa65700f22e","userUuid":"36c27e8ff05c4780bf6d2fa65700f22e","expiredDate":"Apr 19, 2022 8:06:42 PM","createDate":"Apr 19, 2022 6:06:42 PM","noSessionEvaluation":false}}
```

其中：
   - uuid字段即为获取的本次Session的ID
 1. uuid字段即为获取的本次Session的ID
   - Authorization字段需填入登录云平台时获取的Session ID
   - HTTP请求URL为：http://localhost:8080/zstack/v1/zwatch/metrics
   - namespace字段为查询的目标监控项所在命名空间，metricName字段为监控项名称，可参考[所有Metric元数据]获取目标监控项的命名空间、名称、描述和其他信息
   - startTime和endTime字段为可配项，指定目标监控项的查询时间范围，单位毫秒
   - VMUuid字段为可配项，指定云主机的UUID
 返回结果：

```
{"data":[{"labels":{"DiskDeviceLetter":"/dev/sdb3","FSType":"xfs","VMUuid":"b6aa19e5b502441d9cb68f1e0fe69fea","MountPoint":"/"},"time":1650334713,"value":2.9061761516545475}]}
```

其中：
   - value字段即为所查询目标云主机内部监控磁盘已使用率，单位为%
 2. value字段即为所查询目标云主机内部监控磁盘已使用率，单位为%

---

### 使用ZQL查看云主机内部监控磁盘已使用率



ZStack Cloud支持通过ZQL语句以HTTP方式查看指定云主机内部监控的磁盘已使用率。本文主要以管理员身份（admin）登录管理节点系统查看该监控项数据。您也可以使用云平台其他已通过授权账户/用户身份登录系统查看。 使用ZQL语句查看云主机内部监控数据前，需确保：
 - 云主机三层网络已开启DHCP服务。若未开启DHCP服务，可参考[挂载网络服务到三层网络(AttachNetworkServiceToL3Network)]。
   - 若云主机系统为Linux，运行`/bin/bash -c "$(curl -s                                                   -S                                                   http://169.254.169.254/vm-tools.sh)"`进行安装。
   - 若云主机系统FreeBSD，运行`curl                                                   http://169.254.169.254/vm-tools.sh -o vm-tools.sh                                                   && bash -x                                                   ./vm-tools.sh`进行安装。
 - 若云主机系统FreeBSD，运行`curl                                                   http://169.254.169.254/vm-tools.sh -o vm-tools.sh                                                   && bash -x                                                   ./vm-tools.sh`进行安装。
 - 已获取调用ZQL语句所需的Sesion ID。


#### 使用Curl调用ZQL查询示例

 Curl示例：

```
curl http://localhost:8080/zstack/v1/zql?zql=yourZQL -X GET -H 'Connection:close' -H 'Content-Type:application/json' -H 'Authorization:OAuth SesionID'
```

其中：
 - yourZQL：查询使用的ZQL语句，需通过URL进行编码
 - SessionID：调用ZQL语句所需的Sesion ID，例如376c223518e347bcbeca40d2c7c515b9
  ZQL语句：

```
query vminstance.name,uuid where uuid='11487b7132f642cdbb01dbf9dde1e51f' return with(zwatch{resultName='customerDefine',metricName='DiskAllUsedCapacityInPercent',offsetAheadOfCurrentTime=60})
```


 - 语义：查询指定云主机的名称和UUID，附带返回最近60秒的磁盘使用率
 - query关键字、where从句、return with 从句、与zwatch子句可参考[ZQL语法]
   - vminstance.name,uuid：必填项，目标查询返回的云主机名称和UUID
   - uuid：指定云主机的UUID
   - resultName：可填项，自定义返回结果的名称
   - metricName：指定查询的云主机监控项，详细可参考[所有Metric元数据]
   - offsetAheadOfCurrentTime：可填项，指定查询最近时间段的数据，单位为秒
 - offsetAheadOfCurrentTime：可填项，指定查询最近时间段的数据，单位为秒
  ZQL语句返回结果：

```
{
    "results": [
        {
            "inventories": [
                {
                    "name": "ds-os7",
                    "uuid": "11487b7132f642cdbb01dbf9dde1e51f"
                }
            ],
            "returnWith": {
                "'customerDefine'": [
                    {
                        "labels": {
                            "VMUuid": "11487b7132f642cdbb01dbf9dde1e51f"
                        },
                        "time": 1650335799,
                        "value": 34.0610486880064
                    },
                    {
                        "labels": {
                            "VMUuid": "11487b7132f642cdbb01dbf9dde1e51f"
                        },
                        "time": 1650335819,
                        "value": 34.06114945169439
                    },
                    {
                        "labels": {
                            "VMUuid": "11487b7132f642cdbb01dbf9dde1e51f"
                        },
                        "time": 1650335839,
                        "value": 34.06114945169439
                    },
                    {
                        "labels": {
                            "VMUuid": "11487b7132f642cdbb01dbf9dde1e51f"
                        },
                        "time": 1650335859,
                        "value": 34.06125021538238
                    }
                ],
                "diskUsedPercentTotal": 4
            }
        }
    ],
    "success": true
}
```

 ZQL语句共返回指定60秒内的四组云主机内部监控磁盘使用率数据，其中，labels字段内：
 - VMUuid：标识数据所属云主机的UUID
 - time：数据采样时间点，为Unix时间
 - value：内部监控磁盘使用率，单位：%
  例如，以下数据表示：UUID 为 11487b7132f642cdbb01dbf9dde1e51f 的云主机，在Unix时间 1650335839（换算后为 2022-04-19 10:37:19）的磁盘使用率为 34.06%。

```
{
                        "labels": {
                            "VMUuid": "11487b7132f642cdbb01dbf9dde1e51f"
                        },
                        "time": 1650335839,
                        "value": 34.06114945169439
                    },
```
