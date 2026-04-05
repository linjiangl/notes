import{_ as a,o as n,c as i,ak as e}from"./chunks/framework.BQh-lcRV.js";const o=JSON.parse('{"title":"CentOS","description":"","frontmatter":{},"headers":[],"relativePath":"guide/linux/centos.md","filePath":"guide/linux/centos.md","lastUpdated":1640329569000}'),p={name:"guide/linux/centos.md"};function l(t,s,h,c,r,k){return n(),i("div",null,[...s[0]||(s[0]=[e(`<h1 id="centos" tabindex="-1">CentOS <a class="header-anchor" href="#centos" aria-label="Permalink to “CentOS”">​</a></h1><h2 id="查看系统信息" tabindex="-1">查看系统信息 <a class="header-anchor" href="#查看系统信息" aria-label="Permalink to “查看系统信息”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 1. 查看Linux内核版本命令</span></span>
<span class="line"><span>$ cat /proc/version</span></span>
<span class="line"><span>$ uname -a</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 查看Linux系统版本的命令</span></span>
<span class="line"><span>$ cat /etc/redhat-release</span></span>
<span class="line"><span>$ cat /etc/issue</span></span></code></pre></div><h2 id="网络配置" tabindex="-1">网络配置 <a class="header-anchor" href="#网络配置" aria-label="Permalink to “网络配置”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 1. 配置文件</span></span>
<span class="line"><span>$ vim /etc/sysconfig/network-scripts/ifcfg-eth0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DEVICE=eth0         #物理设备名</span></span>
<span class="line"><span>HWADDR=08:00:27:D4:A2:F4    #MAC地址</span></span>
<span class="line"><span>TYPE=Ethernet       #网卡类型</span></span>
<span class="line"><span>UUID=062616b1-599c-47bd-8def-a2fe7fc0a5d2</span></span>
<span class="line"><span>ONBOOT=yes  #[yes|no]（引导时是否激活设备）</span></span>
<span class="line"><span>NM_CONTROLLED=yes</span></span>
<span class="line"><span>BOOTPROTO=static    #[none|static|bootp|dhcp]（引导时不使用协议|静态分配|BOOTP协议|DHCP协议）</span></span>
<span class="line"><span>IPADDR=192.168.1.211    #IP地址</span></span>
<span class="line"><span>NETWORK=192.168.1.0     #网络地址</span></span>
<span class="line"><span>NETMASK=255.255.255.0   #掩码值</span></span>
<span class="line"><span>GATEWAY=192.168.1.1     #网关地址</span></span>
<span class="line"><span>DNS1=223.5.5.5  #DNS, 阿里公共DNS</span></span>
<span class="line"><span>DNS2=223.6.6.6</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 2. 网络 </span></span>
<span class="line"><span>$ service network restart #重启</span></span>
<span class="line"><span>$ service network start   #开始</span></span>
<span class="line"><span>$ service network stop    #停止</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 3. 网卡状态查询</span></span>
<span class="line"><span>$ service network status</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 4. 相关信息</span></span>
<span class="line"><span>$ ifconfig</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 5. 检查网络</span></span>
<span class="line"><span>$ ping baidu.com</span></span></code></pre></div><h2 id="防火墙配置" tabindex="-1">防火墙配置 <a class="header-anchor" href="#防火墙配置" aria-label="Permalink to “防火墙配置”">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁用 firewalld</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld.service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> disable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> firewalld.service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">firewall-cmd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --state</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用iptables</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables-services</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> enable</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> iptables.service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;user-select:none;-webkit-user-select:none;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/sysconfig/iptables</span></span></code></pre></div><h2 id="分区" tabindex="-1">分区 <a class="header-anchor" href="#分区" aria-label="Permalink to “分区”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>分区:</span></span>
<span class="line"><span>高扩展企业分区方案：</span></span>
<span class="line"><span>/boot       200MB #引导放到一个独立分区中更安全</span></span>
<span class="line"><span>/           50GB</span></span>
<span class="line"><span>/var        20GB</span></span>
<span class="line"><span>swap        2048MB #大于4G, 直接给4G</span></span>
<span class="line"><span>/usr        100GB /usr/local</span></span>
<span class="line"><span>/home       100GB</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/和swap最重要必须得存在</span></span></code></pre></div><h2 id="同步时间" tabindex="-1">同步时间 <a class="header-anchor" href="#同步时间" aria-label="Permalink to “同步时间”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ yum install ntpdate</span></span>
<span class="line"><span>$ ntpdate ntp.api.bz</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 中国国家授时中心：210.72.145.44</span></span>
<span class="line"><span># NTP服务器(上海) ：ntp.api.bz</span></span>
<span class="line"><span># 美国：time.nist.gov </span></span>
<span class="line"><span># 复旦：ntp.fudan.edu.cn </span></span>
<span class="line"><span># 微软公司授时主机(美国)：time.windows.com </span></span>
<span class="line"><span># 台警大授时中心(台湾)：asia.pool.ntp.org</span></span></code></pre></div>`,11)])])}const g=a(p,[["render",l]]);export{o as __pageData,g as default};
