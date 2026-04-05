import{_ as a,o as n,c as e,ak as i}from"./chunks/framework.BQh-lcRV.js";const g=JSON.parse('{"title":"安装配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/db/redis/index.md","filePath":"guide/db/redis/index.md","lastUpdated":1775392610000}'),l={name:"guide/db/redis/index.md"};function p(t,s,r,c,d,o){return n(),e("div",null,[...s[0]||(s[0]=[i(`<h1 id="安装配置" tabindex="-1">安装配置 <a class="header-anchor" href="#安装配置" aria-label="Permalink to “安装配置”">​</a></h1><h3 id="下载及安装" tabindex="-1">下载及安装 <a class="header-anchor" href="#下载及安装" aria-label="Permalink to “下载及安装”">​</a></h3><p><a href="https://redis.io/topics/quickstart" target="_blank" rel="noreferrer">开始</a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ tar zxvf redis-4.0.1.tar.gz</span></span>
<span class="line"><span>$ cd redis-4.0.1</span></span>
<span class="line"><span>$ make</span></span>
<span class="line"><span>$ make test</span></span>
<span class="line"><span>$ make PREFIX=/usr/local/redis install</span></span></code></pre></div><p>上面出现make错误</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ yum install tcl.x86_64</span></span></code></pre></div><h3 id="初始化及开机启动" tabindex="-1">初始化及开机启动 <a class="header-anchor" href="#初始化及开机启动" aria-label="Permalink to “初始化及开机启动”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ sh install_server.sh</span></span>
<span class="line"><span>Welcome to the redis service installer</span></span>
<span class="line"><span>This script will help you easily set up a running redis server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please select the redis port for this instance: [6379]</span></span>
<span class="line"><span>Selecting default: 6379</span></span>
<span class="line"><span>Please select the redis config file name [/etc/redis/6379.conf]</span></span>
<span class="line"><span>Selected default - /etc/redis/6379.conf</span></span>
<span class="line"><span>Please select the redis log file name [/var/log/redis_6379.log]</span></span>
<span class="line"><span>Selected default - /var/log/redis_6379.log</span></span>
<span class="line"><span>Please select the data directory for this instance [/var/lib/redis/6379]</span></span>
<span class="line"><span>Selected default - /var/lib/redis/6379</span></span>
<span class="line"><span>Please select the redis executable path [] /usr/local/redis/bin/redis-server</span></span>
<span class="line"><span>Selected config:</span></span>
<span class="line"><span>Port           : 6379</span></span>
<span class="line"><span>Config file    : /etc/redis/6379.conf</span></span>
<span class="line"><span>Log file       : /var/log/redis_6379.log</span></span>
<span class="line"><span>Data dir       : /var/lib/redis/6379</span></span>
<span class="line"><span>Executable     : /usr/local/redis/bin/redis-server</span></span>
<span class="line"><span>Cli Executable : /usr/local/redis/bin/redis-cli</span></span>
<span class="line"><span>Is this ok? Then press ENTER to go on or Ctrl-C to abort.</span></span>
<span class="line"><span>Copied /tmp/6379.conf =&gt; /etc/init.d/redis_6379</span></span>
<span class="line"><span>Installing service...</span></span>
<span class="line"><span>Successfully added to chkconfig!</span></span>
<span class="line"><span>Successfully added to runlevels 345!</span></span>
<span class="line"><span>Starting Redis server...</span></span>
<span class="line"><span>Installation successful!</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ systemctl start redis_6379</span></span></code></pre></div><h3 id="外部访问" tabindex="-1">外部访问 <a class="header-anchor" href="#外部访问" aria-label="Permalink to “外部访问”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim /etc/redis/6379.conf</span></span>
<span class="line"><span>#bind 127.0.0.1</span></span>
<span class="line"><span>bind 0.0.0.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$ systemctl stop redis_6379</span></span>
<span class="line"><span>$ systemctl start redis_6379</span></span></code></pre></div><h3 id="以进程形式运行" tabindex="-1">以进程形式运行 <a class="header-anchor" href="#以进程形式运行" aria-label="Permalink to “以进程形式运行”">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ vim /etc/redis/6379.conf</span></span>
<span class="line"><span>daemonize yes</span></span></code></pre></div>`,12)])])}const b=a(l,[["render",p]]);export{g as __pageData,b as default};
