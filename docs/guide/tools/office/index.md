# Office KMS激活

> 1、下载官方部署工具

[Office Deployment Tool](https://www.microsoft.com/en-us/download/details.aspx?id=49117)

> 2、新建一个文件夹，如：`C:\office`

> 3、运行 Office Deployment Tool，目录选择 `C:\office`

> 4、制作配置文件

[配置](https://config.office.com/deploymentsettings)

> 5、安装office
```bash
$ cd C:\office

# 下载office
$ setup.exe /download config.xml

# 安装office
$ setup.exe /configure config.xml
```

> 6、激活office

[KMS](https://learn.microsoft.com/zh-cn/deployoffice/vlactivation/plan-volume-activation-of-office)
[KMS主机](https://www.coolhub.top/tech-articles/kms_list.html)

```bash
$ cd C:\Program Files\Microsoft Office\Office16

$ cscript ospp.vbs /sethst:kms.loli.best

---Processing--------------------------
---------------------------------------
Successfully applied setting.
---------------------------------------
---Exiting----------

$ cscript ospp.vbs /act

---Processing--------------------------
---------------------------------------
Installed product key detected - attempting to activate the following product:
SKU ID: 080a45c5-9f9f-49eb-b4b0-c3c610a5ebd3
LICENSE NAME: Office 21, Office21Standard2021VL_KMS_Client_AE edition
LICENSE DESCRIPTION: Office 21, VOLUME_KMSCLIENT channel
Last 5 characters of installed product key: 78VT3
<Product activation successful>
---------------------------------------
Installed product key detected - attempting to activate the following product:
SKU ID: fb61ac9a-1688-45d2-8f6b-0674dbffa33c
LICENSE NAME: Office 21, Office21VisioPro2021VL_KMS_Client_AE edition
LICENSE DESCRIPTION: Office 21, VOLUME_KMSCLIENT channel
Last 5 characters of installed product key: K2HT4
<Product activation successful>
---------------------------------------
---------------------------------------
---Exiting-----------------------------
```