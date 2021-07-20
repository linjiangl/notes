# 配置局域网访问

> 设置端口转发

`connectaddress：`为wsl内网地址

```shell
$ netsh interface portproxy add v4tov4 listenport=9000 listenaddress=* connectport=9000 connectaddress=172.17.77.126 protocol=tcp

$ netsh interface portproxy show all
```

> 删除端口转发

```shell
$ netsh interface portproxy delete v4tov4 listenport=9000 listenaddress=*
```

> 配置入站规则

设置–>搜索《防火墙和网络保护》–>高级设置—>入站规则–>新建规则–>端口–>TCP,特定本地端口–>允许连接