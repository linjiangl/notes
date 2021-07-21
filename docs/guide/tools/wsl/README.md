# WSL配置局域网访问

> wsl IP启动机器就会改变，手动指定的IP：

```shell
# Powershell 
$ wsl -l 
适用于 Linux 的 Windows 子系统分发版:
Ubuntu-20.04 (默认)
docker-desktop
docker-desktop-data

# -d 参数从上面获取
$ wsl -d Ubuntu-20.04 -u root ip addr add 172.17.17.232/28 broadcast 172.17.17.255 dev eth0 label eth0:1
```

```shell
# Powershell 终端
$ ip addr show eth0
5: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
    link/ether 00:15:5d:cd:45:4a brd ff:ff:ff:ff:ff:ff
    inet 172.17.163.214/28 brd 172.17.163.223 scope global eth0
       valid_lft forever preferred_lft forever
    inet 172.17.17.232/28 brd 172.17.17.255 scope global eth0:1
       valid_lft forever preferred_lft forever
    inet6 fe80::215:5dff:fecd:454a/64 scope link
       valid_lft forever preferred_lft forever
```

> 设置端口转发

`connect*：`wsl参数，`listen*：`宿主机参数

```shell
# Powershell 终端
$ netsh interface portproxy add v4tov4 listenport=9000 listenaddress=* connectport=9000 connectaddress=172.17.17.232 protocol=tcp

$ netsh interface portproxy show all

侦听 ipv4:                 连接到 ipv4:

地址            端口        地址            端口
--------------- ----------  --------------- ----------
*               9000        172.17.17.232   9000
```

> 删除端口转发

```shell
$ netsh interface portproxy delete v4tov4 listenport=9000 listenaddress=*
```

> 配置入站规则

设置–>搜索《防火墙和网络保护》–>高级设置—>入站规则–>新建规则–>端口–>TCP,特定本地端口–>允许连接