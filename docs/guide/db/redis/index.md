# 安装配置

### 下载及安装
[开始](https://redis.io/topics/quickstart)

```
$ tar zxvf redis-4.0.1.tar.gz
$ cd redis-4.0.1
$ make
$ make test
$ make PREFIX=/usr/local/redis install
```

上面出现make错误
```
$ yum install tcl.x86_64
```

### 初始化及开机启动
```
$ sh install_server.sh
Welcome to the redis service installer
This script will help you easily set up a running redis server

Please select the redis port for this instance: [6379]
Selecting default: 6379
Please select the redis config file name [/etc/redis/6379.conf]
Selected default - /etc/redis/6379.conf
Please select the redis log file name [/var/log/redis_6379.log]
Selected default - /var/log/redis_6379.log
Please select the data directory for this instance [/var/lib/redis/6379]
Selected default - /var/lib/redis/6379
Please select the redis executable path [] /usr/local/redis/bin/redis-server
Selected config:
Port           : 6379
Config file    : /etc/redis/6379.conf
Log file       : /var/log/redis_6379.log
Data dir       : /var/lib/redis/6379
Executable     : /usr/local/redis/bin/redis-server
Cli Executable : /usr/local/redis/bin/redis-cli
Is this ok? Then press ENTER to go on or Ctrl-C to abort.
Copied /tmp/6379.conf => /etc/init.d/redis_6379
Installing service...
Successfully added to chkconfig!
Successfully added to runlevels 345!
Starting Redis server...
Installation successful!



$ systemctl start redis_6379
```

### 外部访问
```
$ vim /etc/redis/6379.conf
#bind 127.0.0.1
bind 0.0.0.0

$ systemctl stop redis_6379
$ systemctl start redis_6379
```

### 以进程形式运行
```
$ vim /etc/redis/6379.conf
daemonize yes
```


