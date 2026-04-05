import{_ as s,o as n,c as e,ak as p}from"./chunks/framework.BQh-lcRV.js";const u=JSON.parse('{"title":"jira","description":"","frontmatter":{},"headers":[],"relativePath":"guide/linux/jira.md","filePath":"guide/linux/jira.md","lastUpdated":1574662185000}'),i={name:"guide/linux/jira.md"};function l(t,a,r,o,c,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="jira" tabindex="-1">jira <a class="header-anchor" href="#jira" aria-label="Permalink to “jira”">​</a></h1><p><a href="https://www.atlassian.com/software/jira/download" target="_blank" rel="noreferrer"><code>jira下载</code></a><a href="https://dev.mysql.com/downloads/connector/j/" target="_blank" rel="noreferrer"><code>mysql驱动下载</code></a><a href="https://www.cnblogs.com/kaola8023/p/6950481.html" target="_blank" rel="noreferrer"><code>帮助</code></a></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ chmod +x atlassian-jira-software-7.8.1-x64.bin</span></span>
<span class="line"><span>$ ./atlassian-jira-software-7.8.1-x64.bin</span></span>
<span class="line"><span>This will install JIRA Software 7.8.1 on your computer.</span></span>
<span class="line"><span>OK [o, Enter], Cancel [c]</span></span>
<span class="line"><span>o</span></span>
<span class="line"><span>Choose the appropriate installation or upgrade option.</span></span>
<span class="line"><span>Please choose one of the following:</span></span>
<span class="line"><span>Express Install (use default settings) [1], Custom Install (recommended for advanced users) [2, Enter], Upgrade an existing JIRA installation [3]</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Where should JIRA Software be installed?</span></span>
<span class="line"><span>[/opt/atlassian/jira]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Default location for JIRA Software data</span></span>
<span class="line"><span>[/var/atlassian/application-data/jira]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Configure which ports JIRA Software will use.</span></span>
<span class="line"><span>JIRA requires two TCP ports that are not being used by any other</span></span>
<span class="line"><span>applications on this machine. The HTTP port is where you will access JIRA</span></span>
<span class="line"><span>through your browser. The Control port is used to startup and shutdown JIRA.</span></span>
<span class="line"><span>Use default ports (HTTP: 8080, Control: 8005) - Recommended [1, Enter], Set custom value for HTTP and Control ports [2]</span></span>
<span class="line"><span>2</span></span>
<span class="line"><span>HTTP Port Number</span></span>
<span class="line"><span>[8080]</span></span>
<span class="line"><span>8291</span></span>
<span class="line"><span>Control Port Number</span></span>
<span class="line"><span>[8005]</span></span>
<span class="line"><span>8292</span></span>
<span class="line"><span>JIRA can be run in the background.</span></span>
<span class="line"><span>You may choose to run JIRA as a service, which means it will start</span></span>
<span class="line"><span>automatically whenever the computer restarts.</span></span>
<span class="line"><span>Install JIRA as Service?</span></span>
<span class="line"><span>Yes [y, Enter], No [n]</span></span>
<span class="line"><span>y</span></span>
<span class="line"><span>Details on where JIRA Software will be installed and the settings that will be used.</span></span>
<span class="line"><span>Installation Directory: /opt/atlassian/jira</span></span>
<span class="line"><span>Home Directory: /var/atlassian/application-data/jira</span></span>
<span class="line"><span>HTTP Port: 8291</span></span>
<span class="line"><span>RMI Port: 8292</span></span>
<span class="line"><span>Install as service: Yes</span></span>
<span class="line"><span>Install [i, Enter], Exit [e]</span></span>
<span class="line"><span>i</span></span></code></pre></div><h3 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to “配置”">​</a></h3><blockquote><p>mysql</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create database jira character set utf8;</span></span>
<span class="line"><span>grant all on jira.* to jira@&#39;%&#39; identified by &#39;jira&#39;;</span></span>
<span class="line"><span>grant all on jira.* to jira@&#39;localhost&#39; identified by &#39;jira&#39;;</span></span>
<span class="line"><span>flush privileges;</span></span></code></pre></div><blockquote><p>连接mysql</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>service jira stop</span></span>
<span class="line"><span>mv mysql-connector-java-5.1.44-bin.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/</span></span>
<span class="line"><span>service jira start</span></span></code></pre></div><blockquote><p>破解 (jira 7.3.8)</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>$ cp -r atlassian-extras-3.2.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/</span></span></code></pre></div>`,10)])])}const g=s(i,[["render",l]]);export{u as __pageData,g as default};
