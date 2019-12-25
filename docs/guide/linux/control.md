# 监控管理

## 流量监控

- [iftop](https://tool.lu/command/detail.html?name=iftop) 是一款实时流量监控工具，监控TCP/IP连接等，缺点就是无报表功能。必须以root身份才能运行。

```
$ iftop           # 默认是监控第一块网卡的流量
$ iftop -i eth1   # 监控eth1
$ iftop -n        # 直接显示IP, 不进行DNS反解析
$ iftop -N        # 直接显示连接埠编号, 不显示服务名称
$ iftop -F 192.168.1.0/24 or 192.168.1.0/255.255.255.0  # 显示某个网段进出封包流量
```

- [iptraf-ng](https://linux.die.net/man/8/iptraf-ng)


## 进程

- [htop](https://tool.lu/command/detail.html?name=htop) 一个互动的进程查看器，可以动态观察系统进程状况。
- [ps](https://tool.lu/command/detail.html?name=ps) 报告当前系统的进程状态
- [kill](https://tool.lu/command/detail.html?name=kill) 删除执行中的程序或工作 