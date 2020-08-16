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
$ ubuntu1804.exe config --default-user root
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

# 添加 GPG 密钥，并添加 Docker-ce 软件源
$ curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
$ sudo add-apt-repository "deb [arch=amd64] https://mirrors.aliyun.com/docker-ce/linux/ubuntu/ $(lsb_release -cs) stable"
$ sudo apt-get update

# 列出 Docker 软件源中所有可用的版本
$ apt-get list -a docker-ce

# 通过在软件包名后面添加版本=<VERSION>来安装指定版本
$ sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# 启动
$ sudo systemctl enable docker
$ sudo systemctl start docker

# 验证docker是否安装成功
$ sudo systemctl status docker

# 锁住版本
$ sudo apt-mark hold docker-ce

# 以非 Root 用户身份执行 Docker
$ sudo usermod -aG docker $USER

```

> 安装PHP开发环境

[参考](https://github.com/linjiangl/docker-web-server)


> 卸载子系统

```shell script
$ wslconfig /l
$ wslconfig /u Ubuntu-20.04

# 打开开始菜单，右键卸载掉
```