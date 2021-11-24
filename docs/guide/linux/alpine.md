### alpine 问题记录

#### 常见问题

```shell
# whereis,which not found
$ apk add --update util-linux

# apk update Permission denied
$ sed -i 's/https/http/' /etc/apk/repositories

# 设置阿里云源
$ sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories
```

#### PHP 依赖

```shell
# pecl 安装
$ curl -o go-pear.php http://pear.php.net/go-pear.phar
$ php go-pear.php

```

#### yasd 安装

```shell
# 安装依赖
$ apk add $PHPIZE_DEPS php8-dev boost boost-dev

# 下载项目
$  wget https://github.com/swoole/yasd/archive/refs/tags/v0.3.9.tar.gz

# 编译安装
$ tar -zxvf v0.3.9.tar.gz
$ cd yasd-0.3.9/
$ phpize8
$ ./configure --with-php-config=/usr/bin/php-config8
$ make && make install
```