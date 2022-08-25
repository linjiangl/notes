# WSL2 说明

## 安装

[官方文档](https://docs.microsoft.com/zh-cn/windows/wsl/)

## 常用配置

> 安装windows子系统, 设置默认root登录

```shell 
# cmd 进入Apps目录,列出目录,找到ubuntu子系统目录(CanonicalGroupLimited开头的目录)
$ cd %HOMEPATH%\AppData\Local\Microsoft\WindowsApps
$ dir

# 进入子系统目录, 设置默认root登录
$ cd CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc
$ ubuntu2004.exe config --default-user root
```

> 存储文件移出系统盘, PowerShell执行如下命令

```shell
# 关闭wsl
$ wsl --shutdown

# 查看是否已经关闭, 看(STATE) 列
$ wsl -l -v
  NAME                   STATE           VERSION
* Ubuntu-20.04           Stopped         2
  docker-desktop-data    Stopped         2
  docker-desktop         Stopped         2
  
# 导出子系统文件, wsl --export [子系统名称] [导出子系统tar包]
$ wsl --export Ubuntu-20.04 D:\Ubuntu-20.04.tar

# 注销原子系统
$ wsl --unregister Ubuntu-20.04

# 导入子系统, wsl --import [子系统名称] [导入的子系统位置] [导入子系统tar包(上面导出的tar包)]
$ wsl --import Ubuntu-20.04 D:\software\wsl2 D:\Ubuntu-20.04.tar

# 设置默认账号
$ ubuntu2004 config --default-user root
```

> Docker Desktop 移出系统盘

默认情况下，Docker Desktop for Window会创建如下两个发行版（distro）：
- docker-desktop：用于存放程序
- docker-desktop-data：用于存放镜像

访问`%LOCALAPPDATA%/Docker/wsl`目录，就可以看到两个文件夹：
- 'data/ext4.vhdx'被docker-desktop-data 发行版使用;
- 'distro/ext4.vhdx'被 docker-desktop 发行版使用;

```shell
# 删除所有容器和镜像
$ docker stop $(docker ps -q)
$ docker rm $(docker ps -aq)
$ docker rmi -f $(docker images -qa)

# 关闭所有发行版
$ wsl --shutdown

# 检查所有发行版是否已关闭
$ wsl -l -v
  NAME                   STATE           VERSION
* Ubuntu-20.04           Stopped         2
  docker-desktop-data    Stopped         2
  docker-desktop         Stopped         2
  
# 导出所有发行版
$ wsl --export docker-desktop D:\docker-desktop.tar
$ wsl --export docker-desktop-data D:\docker-desktop-data.tar

# 注销所有发行版
$ wsl --unregister docker-desktop
$ wsl --unregister docker-desktop-data

# 导入所有发行版
$ wsl --import docker-desktop D:\software\wsl2\docker\distro D:\docker-desktop.tar --version 2
$ wsl --import docker-desktop-data D:\software\wsl2\docker\data D:\docker-desktop-data.tar --version 2
```

> WSL无法启动

可是使用管理员模式运行Power Shell或CMD并输入: `netsh winsock reset` 执行后重启电脑解决。


## 局域网配置访问

> 设置端口转发

`connect*：`wsl参数，`listen*：`宿主机参数

```shell
# Ubuntu 终端
$ ip addr show eth0
5: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:cd:45:4a brd ff:ff:ff:ff:ff:ff
    inet 172.17.163.214/28 brd 172.17.163.223 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::215:5dff:fecd:454a/64 scope link
       valid_lft forever preferred_lft forever
       
# Powershell 
$ netsh interface portproxy add v4tov4 listenport=10081 listenaddress=* connectport=10081 connectaddress=172.17.163.214 protocol=tcp

$ netsh interface portproxy show all

侦听 ipv4:                 连接到 ipv4:

地址            端口        地址            端口
--------------- ----------  --------------- ----------
*               10081        172.17.17.232   10081
```

> 删除端口转发

```shell
# Powershell 
$ netsh interface portproxy delete v4tov4 listenport=10081 listenaddress=*
```

> 配置入站规则

设置–>搜索《防火墙和网络保护》–>高级设置—>入站规则–>新建规则–>端口–>TCP,特定本地端口–>允许连接
