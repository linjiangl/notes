# CentOS

## 查看系统信息

```
# 1. 查看Linux内核版本命令
$ cat /proc/version
$ uname -a

# 2. 查看Linux系统版本的命令
$ cat /etc/redhat-release
$ cat /etc/issue
```

## 网络配置

```
# 1. 配置文件
$ vim /etc/sysconfig/network-scripts/ifcfg-eth0

DEVICE=eth0         #物理设备名
HWADDR=08:00:27:D4:A2:F4    #MAC地址
TYPE=Ethernet       #网卡类型
UUID=062616b1-599c-47bd-8def-a2fe7fc0a5d2
ONBOOT=yes  #[yes|no]（引导时是否激活设备）
NM_CONTROLLED=yes
BOOTPROTO=static    #[none|static|bootp|dhcp]（引导时不使用协议|静态分配|BOOTP协议|DHCP协议）
IPADDR=192.168.1.211    #IP地址
NETWORK=192.168.1.0     #网络地址
NETMASK=255.255.255.0   #掩码值
GATEWAY=192.168.1.1     #网关地址
DNS1=223.5.5.5  #DNS, 阿里公共DNS
DNS2=223.6.6.6

# 2. 网络 
$ service network restart #重启
$ service network start   #开始
$ service network stop    #停止

# 3. 网卡状态查询
$ service network status

# 4. 相关信息
$ ifconfig

# 5. 检查网络
$ ping baidu.com
```

## 防火墙配置

```bash
# 禁用 firewalld
$ systemctl stop firewalld.service 
$ systemctl disable firewalld.service 
$ firewall-cmd --state

# 启用iptables
$ yum install iptables-services -y
$ systemctl enable iptables.service
$ systemctl start iptables.service
$ vim /etc/sysconfig/iptables
```

## 分区

```
分区:
高扩展企业分区方案：
/boot       200MB #引导放到一个独立分区中更安全
/           50GB
/var        20GB
swap        2048MB #大于4G, 直接给4G
/usr        100GB /usr/local
/home       100GB

/和swap最重要必须得存在
```

## 同步时间

```
$ yum install ntpdate
$ ntpdate ntp.api.bz

# 中国国家授时中心：210.72.145.44
# NTP服务器(上海) ：ntp.api.bz
# 美国：time.nist.gov 
# 复旦：ntp.fudan.edu.cn 
# 微软公司授时主机(美国)：time.windows.com 
# 台警大授时中心(台湾)：asia.pool.ntp.org
```

