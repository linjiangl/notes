# Charles + BlueStacks 5 + Adb 抓包

[Charles 下载地址](https://www.charlesproxy.com/download/)

[Charles 激活工具](https://www.zzzmode.com/mytools/charles/)

[BlueStacks 5](https://pan.baidu.com/s/1jFIsJ9L8VLwJhs1aYDxxgw?p=e6qh)

[ADB](https://adbdownload.com/)

### 安装及配置

> `Charles`权限配置

文件位置 `C:\ProgramData\BlueStacks_nxt\bluestacks.conf`

```
bst.feature.rooting="0" => bst.feature.rooting="1"
bst.instance.Nougat64.enable_root_access="0" => bst.instance.Nougat64.enable_root_access="1"
```

> `BlueStacks`安装证书

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
$ adb push D:\software\7e8692e6.0 /data/local/tmp
$ adb shell
$ su
$ mount -o rw,remount /system
$ cd /data/local/tmp
$ chown system:system 7e8692e6.0
$ chmod 664 7e8692e6.0
$ mv 7e8692e6.0 /system/etc/security/cacerts/

```

> `BlueStacks`使用`Charles`代理：

```bash
# 设置代理
$ adb root
$ adb shell
$ su
$ settings put global http_proxy 172.19.209.246:8888

# 取消代理
$ settings put global http_proxy :0
```


### 安卓手机

使用 Magisk 模块，安装下面扩展

[AlwaysTrustUserCerts](https://github.com/NVISOsecurity/AlwaysTrustUserCerts)

> 步骤 1：按照常规方式安装为“用户证书”

1. 打开手机 设置 (Settings)。
2. 进入 安全与隐私 (Security & privacy) -> 更多安全设置 (More security settings) -> 加密与凭据 (Encryption & credentials)。
3. 点击 安装证书 (Install a certificate) -> 选择 CA 证书 (CA certificate)。
4. 在弹出的安全警告框中，点击 仍然安装 (Install anyway)，输入锁屏密码。
5. 在文件选择器中选中你的 Charles 证书文件。
6. 系统提示“已安装 CA 证书”。

> 步骤 2：重启手机（关键步骤）

- 证书安装完成后，重启一次手机。
- 在开机过程中，AlwaysTrustUserCerts 模块会自动扫描用户证书目录

> 步骤 3：验证是否已成功提升为系统证书

重启完成后，进行以下检查：
1. 打开手机 设置 -> 安全与隐私 -> 更多安全设置 -> 加密与凭据 -> 查看受信任的凭据。
2. 切换到 系统 (System) 选项卡（注意：不是“用户”选项卡）。
3. 如果在 系统 列表中看到了 Charles 证书，说明已经大功告成！此时各大 App 都会将其识别为安全的系统出厂证书，HTTPS 明文抓包即可正常工作。
