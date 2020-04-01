# 相关配置

## xdebug

> xdebug.ini

```
xdebug.default_enable=1
xdebug.remote_enable=1
;xdebug.remote_autostart=1
xdebug.remote_host=192.168.1.130
xdebug.remote_port=19000
xdebug.idekey="PHPSTORM"
```

> phpstorm 配置

- Languages & Frameworkes > PHP > Debug

```
Xdebug => Debug port: [19000]
```

- Languages & Frameworkes > PHP > Services, 新增服务

```
Name: 项目名称
Host: 项目域名
Use path mappings: 勾选
Absolute path on the Server: 项目路径
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
