# 安装及配置

## 安装

Centos 7.x 下安装 PHP, [官网](https://www.php.net/downloads.php)

```
// 1. 下载二进制文件
$ wget https://www.php.net/distributions/php-7.3.11.tar.gz
$ tar -zxvf php-7.3.11.tar.gz
$ cd php-7.3.11
$ ./configure --prefix=/usr/local/php/php-7.3.11 --with-fpm-user=nginx --with-fpm-group=nginx --with-curl --with-freetype-dir --with-gd --with-gettext --with-iconv-dir --with-kerberos --with-libdir=lib64 --with-libxml-dir --with-mysqli --with-openssl --with-pcre-regex --with-pdo-mysql --with-pdo-sqlite --with-pear --with-png-dir --with-jpeg-dir --with-xmlrpc --with-xsl --with-zlib --with-bz2 --with-mhash --enable-fpm --enable-bcmath --enable-libxml --enable-inline-optimization --enable-mbregex --enable-mbstring --enable-opcache --enable-pcntl --enable-shmop --enable-soap --enable-sockets --enable-sysvsem --enable-sysvshm --enable-xml
$ make && make install

// 2. 配置文件
$ cp php.ini-production /usr/local/php/php-7.3.11/lib/php.ini
$ cp sapi/fpm/php-fpm.conf /usr/local/php/php-7.3.11/etc/php-fpm.conf
$ cp sapi/fpm/www.conf /usr/local/php/php-7.3.11/etc/php-fpm.d/www.conf
$ cp sapi/fpm/php-fpm.service /lib/systemd/system/php-fpm.service

// 3. 启动服务
$ systemctl start php-fpm
```

## PECL 安装扩展

> 编译

- 到[`pecl.php.net`](https://pecl.php.net/)搜索 redis
- 下载 stable 版扩展
- 解压文件, 并进入目录, 执行 `/usr/local/php/bin/phpize` (作用是检测 PHP 的内核版本,并为扩展生成相应的编译配置)
- 配置 `configure --with-php-config=/usr/local/php/bin/php-config`
- 安装 `make && make install`

> 引入编译出的 redis.so 插件

```
vim /usr/local/etc/php/7.2/conf.d/ext-redis.ini

[redis]
extension="/usr/local/opt/php72-redis/redis.so"

# 重启php
```

###
