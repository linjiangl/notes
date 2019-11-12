# 常见问题

## 字体跨域

网站采用二级域名访问 css 时,如果用到字体文件,会出现字体跨域问题

> Access to Font at 'http://bs.l.exp/fonts/vendor/bootstrap-sass/bootstrap/glyphicons-halflings-regular.woff2?448c34a56d699c29117adc64c43affeb' from origin 'http://bbs.l.exp' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://bbs.l.exp' is therefore not allowed access.

解决方法, server 里面配置:

```bash
location ~* \.(eof|ttf|ttc|otf|eof|woff|woff2|svg)$ {
    add_header Access-Control-Allow-Origin *;
}
```

## 禁止访问

```bash
location ~* \.(php|html|htm)$ {
 	deny all;
}
```

## 限制 ip 访问

新建`blocksip.conf`, 在 http{}下引入`include blocksip.conf;`

```bash
http {
    ......
    include blocksip.conf;
    include /etc/nginx/conf.d/*.conf;
}

# blocksip.conf
allow 60.174.207.48; # 允许访问
deny all;   # 禁止访问
```
