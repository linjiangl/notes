# WSL配置局域网访问

> 设置端口转发

`connect*：`wsl参数，`listen*：`宿主机参数

```shell
# Ubuntu 终端
$ ip addr show eth0
5: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:cd:45:4a brd ff:ff:ff:ff:ff:ff
    inet 172.17.163.214/28 brd 172.17.163.223 scope global eth0
       valid_lft forever preferred_lft forever
    inet6 fe80::215:5dff:fecd:454a/64 scope link
       valid_lft forever preferred_lft forever
       
# Powershell 
$ netsh interface portproxy add v4tov4 listenport=10081 listenaddress=* connectport=10081 connectaddress=172.17.163.214 protocol=tcp

$ netsh interface portproxy show all

侦听 ipv4:                 连接到 ipv4:

地址            端口        地址            端口
--------------- ----------  --------------- ----------
*               10081        172.17.17.232   10081
```

> 删除端口转发

```shell
# Powershell 
$ netsh interface portproxy delete v4tov4 listenport=10081 listenaddress=*
```

> 配置入站规则

设置–>搜索《防火墙和网络保护》–>高级设置—>入站规则–>新建规则–>端口–>TCP,特定本地端口–>允许连接