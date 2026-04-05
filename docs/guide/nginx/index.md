# 安装配置

[官网](http://nginx.org/)

```bash
// 下载pcre
$ wget https://ftp.pcre.org/pub/pcre/pcre-8.43.tar.gz

// 下载zlib
$ wget http://zlib.net/zlib-1.2.11.tar.gz

// 下载nginx
$ wget http://nginx.org/download/nginx-1.16.0.tar.gz

// 安装nginx
$ tar zxvf pcre-8.43.tar.gz
$ tar -zxvf zlib-1.2.11.tar.gz
$ tar -zxvf nginx-1.16.0.tar.gz
$ cd nginx-1.16.0
$ ./configure --prefix=/usr/local/nginx --user=nginx --group=nginx --with-http_dav_module --with-http_stub_status_module --with-http_addition_module --with-http_sub_module --with-http_flv_module --with-http_mp4_module --with-http_ssl_module --with-pcre=/tmp/software/pcre-8.43 --with-zlib=/tmp/software/zlib-1.2.11
```

> [NGINX systemd service file](https://www.nginx.com/resources/wiki/start/topics/examples/systemd/)

```bash
$ cat > /lib/systemd/system/nginx.service <<EOF
[Unit]
Description=nginx - high performance web server
After=network.target remote-fs.target nss-lookup.target

[Service]
Type=forking
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop

[Install]
WantedBy=multi-user.target
EOF

```

> 服务启动/停止

```bash
$ systemctl start nginx.service
$ systemctl stop nginx.service
```
