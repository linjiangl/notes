> shadowsock

```bash
# 禁用防火墙
$ systemctl stop firewalld.service
$ systemctl disable firewalld.service

# 安装
$ yum install -y git
$ yum install -y python-setuptools && easy_install pip
$ pip install git+https://github.com/shadowsocks/shadowsocks.git@master
$ yum install -y vim

# 配置
$ cat > /etc/shadowsocks.json <<EOF
{
    "server":"0.0.0.0",
    "server_port":8388,
    "local_address": "127.0.0.1",
    "local_port":1080,
    "password":"password",
    "timeout":300,
    "method":"aes-256-cfb",
    "fast_open": true
}
EOF

$ ssserver -c /etc/shadowsocks.json -d start

# 加速, https://teddysun.com/489.html

$ wget --no-check-certificate https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
$ sysctl net.ipv4.tcp_congestion_control

```




> [V2Ray](https://www.v2ray.com)

使用一键安装脚本安装, [安装帮助](https://github.com/233boy/v2ray/wiki/V2Ray%E4%B8%80%E9%94%AE%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC)

```bash
# 安装
$ bash <(curl -s -L https://git.io/v2ray.sh)
```

[V2Ray客户端](https://233v2.com/post/4/): 

- [Windows](https://github.com/2dust/v2rayN/releases/latest)

- [Mac](https://github.com/yanue/V2rayU)

- [Android](https://github.com/2dust/v2rayNG/releases)

- [Ios]()
