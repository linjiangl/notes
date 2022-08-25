# 开发环境搭建

## windows wsl 

[参考](https://www.jianshu.com/p/a20c2d58eaac)

> 安装windows子系统, 设置默认root登录

```shell script
# cmd 进入Apps目录,列出目录,找到ubuntu子系统目录(CanonicalGroupLimited开头的目录)
$ cd %HOMEPATH%\AppData\Local\Microsoft\WindowsApps
$ dir

# 进入子系统目录, 设置默认root登录
$ cd CanonicalGroupLimited.Ubuntu20.04onWindows_79rhkp1fndgsc
$ ubuntu2004.exe config --default-user root
```

> `ubuntu`安装`docker`环境

[Ubuntu镜像源](https://developer.aliyun.com/mirror/ubuntu?spm=a2c6h.13651102.0.0.3e221b11SqS4AM)

```shell script
# 更换Ubuntu 镜像
$ sudo sed -i 's/archive.ubuntu.com/mirrors.aliyun.com/g' /etc/apt/sources.list
$ sudo apt-get update
$ sudo apt-get upgrade -y

# 更新软件包索引，并且安装必要的依赖软件，来添加一个新的 HTTPS 软件源：
$ sudo apt-get -y install apt-transport-https ca-certificates curl gnupg-agent software-properties-common

```

> 安装PHP开发环境

[参考](https://github.com/linjiangl/docker-web-server)


> 卸载子系统

```shell script
$ wslconfig /l
$ wslconfig /u Ubuntu-20.04
```