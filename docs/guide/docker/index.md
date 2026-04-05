# 安装配置

> docker

[官方文档](https://docs.docker.com/install/linux/docker-ce/centos/)

```bash

$ sudo yum install -y yum-utils device-mapper-persistent-data lvm2
$ sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
$ sudo yum makecache fast
$ sudo yum install docker-ce docker-ce-cli containerd.io
$ sudo systemctl start docker & sudo systemctl enable docker

# 查看
$ yum list docker-ce.x86_64 --showduplicates | sort -r

# 设置用户
$ sudo usermod -aG docker your-user
  
```


> docker-compose 

[帮助](https://github.com/docker/compose/releases)

```bash
$ curl -L https://github.com/docker/compose/releases/download/1.25.0-rc2/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
$ chmod +x /usr/local/bin/docker-compose
```