# 相关配置

## xdebug

> php.ini XDebug 3 配置

```
[XDebug]
xdebug.mode=debug

; Set to host.docker.internal on Mac and Windows, otherwise, set to host real ip
xdebug.client_host = host.docker.internal
xdebug.client_port = 9000
xdebug.start_with_request = yes
xdebug.log=/dev/stdout
xdebug.log_level=0
```

> phpstorm 配置

- Languages & Frameworkes > PHP > Debug

```
Xdebug => Debug port: [9000] 注意：Docker容器的端口
```

- Languages & Frameworkes > PHP > Services, 新增服务

```
Name: 项目名称, 如：localhost
Host: 项目域名, 如：localhost, mall.com, api.mall.com
Port: 项目端口, 如：80
Use path mappings: 勾选
Absolute path on the Server: 项目路径 如：/www/localhost, /www/laravel
```

> chrome 插件

Google 商店搜索 `Xdebug helper`, 找到并安装


> [windows下换行符(LF)](https://blog.51cto.com/cafeim/2476379?source=dra)

``` 
# 第一步: GIT配置
$ git config --global core.autocrlf input
# 第二步: 克隆项目
$ git clone git@xx.com
```
