# Charles + BlueStacks 5 + Adb 抓包

[Charles 下载地址](https://www.charlesproxy.com/download/)

[Charles 激活工具](https://www.zzzmode.com/mytools/charles/)

[BlueStacks 5](https://pan.baidu.com/s/1jFIsJ9L8VLwJhs1aYDxxgw?p=e6qh)

[ADB](https://adbdownload.com/)

### 安装及配置

> 默认以上工具已安装，并配置完成。

> 模拟器安装证书：

```shell
# 1. 准备证书
# Help->SLL Proxying->Save Charles Root Certificate... 保存证书名称为 charles.pem

# 2. 生成证书，执行如下命名：
$ openssl x509 -in charles.pem -subject_hash_old
7e8692e6
-----BEGIN CERTIFICATE-----
MIIFRjCCBC6gAwIBAgIGAY8S0xPnMA0GCSqGSIb3DQEBCwUAMIGnMTgwNgYDVQQD
.......
-----END CERTIFICATE-----

# 3. 重命名证书: charles.pem -> 7e8692e6.0, 7e8692e6是上面计算的哈希值

# 4. 导入证书，注意权限问题，再如下命令执行

$ adb connect 127.0.0.1:51328
$ adb root
$ adb push D:\software\7e8692e6.0 /data/loacl/tmp
$ adb shell
$ su
$ cd /data/loacl/tmp
$ chown system:system 7e8692e6.0
$ chmod 664 7e8692e6.0
$ mv 7e8692e6.0 /system/etc/security/cacerts/

```

> 模拟器使用`Charles`代理：

```bash
# 设置代理
$ adb root
$ adb shell
$ su
$ settings put global http_proxy 172.19.209.246:8888

# 取消代理
$ settings put global http_proxy :0
```