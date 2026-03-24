# 使用AK调用API

*Source: https://www.zstack.io/help/dev_manual/dev_guide/v5/3.html*

---

# 使用AK调用API

  创建AccessKey后，第三方平台可以使用AccessKey调用ZStack Cloud私有云API，方法如下：
   - Java SDK
```
CreateVmInstanceAction action = new CreateVmInstanceAction();
action.name = "vm1";
action.instanceOfferingUuid = "ae97ced44efc3314b8f7798972b4ba1a";
action.imageUuid = "da119f7906513eccabf271991c35a65e";
action.l3NetworkUuids = asList("cc0e4c5e77df3af68e59668e7f9e06c5");
action.dataDiskOfferingUuids = asList("19d22d051b063d379a2816daaf431838","905d94a6abb5398fa1995f6398e3f6fc");
action.clusterUuid = "a0468dc645223f67bd0f2ab95276bbae";
action.description = "this is a vm";
action.strategy = "InstantStart";
action.accessKeyId = "Fnxc7KIQAdGTvXfx8OjC";
action.accessKeySecret = "Do0AJUGVPrT9iJZlc1QOtk7kzEusYidyqJxSmKOb";
CreateVmInstanceAction.Result res = action.call();
```
   - Python SDK
```
CreateVmInstanceAction action = CreateVmInstanceAction()
action.name = "vm1"
action.instanceOfferingUuid = "ae97ced44efc3314b8f7798972b4ba1a"
action.imageUuid = "da119f7906513eccabf271991c35a65e"
action.l3NetworkUuids = [cc0e4c5e77df3af68e59668e7f9e06c5]
action.dataDiskOfferingUuids = [19d22d051b063d379a2816daaf431838, 905d94a6abb5398fa1995f6398e3f6fc]
action.clusterUuid = "a0468dc645223f67bd0f2ab95276bbae"
action.description = "this is a vm"
action.strategy = "InstantStart"
action.accessKeyId = "Fnxc7KIQAdGTvXfx8OjC"
action.accessKeySecret = "Do0AJUGVPrT9iJZlc1QOtk7kzEusYidyqJxSmKOb"
CreateVmInstanceAction.Result res = action.call()
```
 - Python SDK
```
CreateVmInstanceAction action = CreateVmInstanceAction()
action.name = "vm1"
action.instanceOfferingUuid = "ae97ced44efc3314b8f7798972b4ba1a"
action.imageUuid = "da119f7906513eccabf271991c35a65e"
action.l3NetworkUuids = [cc0e4c5e77df3af68e59668e7f9e06c5]
action.dataDiskOfferingUuids = [19d22d051b063d379a2816daaf431838, 905d94a6abb5398fa1995f6398e3f6fc]
action.clusterUuid = "a0468dc645223f67bd0f2ab95276bbae"
action.description = "this is a vm"
action.strategy = "InstantStart"
action.accessKeyId = "Fnxc7KIQAdGTvXfx8OjC"
action.accessKeySecret = "Do0AJUGVPrT9iJZlc1QOtk7kzEusYidyqJxSmKOb"
CreateVmInstanceAction.Result res = action.call()
```
   1. 创建AccessKey：
```
CreateAccessKey accountUuid=dff4fb9bbff14e97a67ab894c7b8c528 userUuid=dff4fb9bbff14e97a67ab894c7b8c528
{
    "inventory": {
        "AccessKeyID": "N3Tf05yXZUmSjCf6mYIB",
        "AccessKeySecret": "XAlrsYvswmnEV3X1KWNs1WfZHD6aBIIphmI0rX9S",
        "accountUuid": "dff4fb9bbff14e97a67ab894c7b8c528",
        "createDate": "Sep 6, 2018 1:50:06 PM",
        "lastOpDate": "Sep 6, 2018 1:50:06 PM",
        "userUuid": "dff4fb9bbff14e97a67ab894c7b8c528",
        "uuid": "ae353717ca7b4182bb87fb5d010235e8"
    },
    "success": true
}
```
   2. 生成date：
```
python get_time.py
Thu, 06 Sep 2018 13:54:10 PRC
```

```
import datetime
import time

date = time.time()
#EEE, dd MMM yyyy HH:mm:ss z
str = datetime.datetime.fromtimestamp(date).strftime('%a, %d %b %Y %H:%M:%S PRC')
print str
```
说明: 时间格式必须为**EEE, dd MMM yyyy HH:mm:ss zzz**。
   3. 生成digest：
```
python get_accesskey.py "vvSZpmj4cnB53qUDmm6E" "8heumeFTvIeZxkTGfEYvVi9qVVPd9ffQNDALSPPb" \
"GET" "Fri, 06 Aug 2021 17:58:34 PRC" "/v1/vm-instances"
# 以下为返回结果
args: Namespace(acesskey_id='vvSZpmj4cnB53qUDmm6E', acesskey_secret='8heumeFTvIeZxkTGfEYvVi9qVVPd9ffQNDALSPPb', \
date='Fri, 06 Aug 2021 17:58:34 PRC', method='GET', uri='/v1/vm-instances')
Signature: hPToRHeHdV49D4u20G8OlE0yJho=
Authoration ZStack vvSZpmj4cnB53qUDmm6E:hPToRHeHdV49D4u20G8OlE0yJho=
```

```
#/usr/bin/python
import base64
import hmac
import sha
import argparse
from hashlib import sha1

parser = argparse.ArgumentParser(description='calculate zstack access key digit.')
parser.add_argument('acesskey_id')
parser.add_argument('acesskey_secret')
parser.add_argument('method')
parser.add_argument('date')
parser.add_argument('uri')

args = parser.parse_args()

print "args: %s" % args
h = hmac.new(args.acesskey_secret, args.method + "\n"
                                    + args.date + "\n"
                                    + args.uri, sha1)
Signature = base64.b64encode(h.digest())
print "Signature: %s" % Signature
print "Authoration %s" % ("ZStack " + args.acesskey_id + ":" + Signature)
```
     - Authorization字段值应与第三步生成的[digest]中Authorization字段值保持一致，格式为："ZStack " + args.acesskey_id + ":" + Signature
    - Date字段值应与生成[digest]时的时间戳保持一致
  4. Date字段值应与生成[digest]时的时间戳保持一致
 - Date字段值应与生成[digest]时的时间戳保持一致
