import{_ as s,o as n,c as e,ak as i}from"./chunks/framework.BQh-lcRV.js";const g=JSON.parse('{"title":"常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"guide/db/mysql/general.md","filePath":"guide/db/mysql/general.md","lastUpdated":1573567146000}'),l={name:"guide/db/mysql/general.md"};function p(t,a,r,c,d,h){return n(),e("div",null,[...a[0]||(a[0]=[i(`<h1 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-label="Permalink to “常用命令”">​</a></h1><h2 id="用户授权" tabindex="-1">用户授权 <a class="header-anchor" href="#用户授权" aria-label="Permalink to “用户授权”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>create database jira character set utf8;</span></span>
<span class="line"><span>grant all on jira.* to jira@&#39;%&#39; identified by &#39;jira&#39;;</span></span>
<span class="line"><span>flush privileges;</span></span></code></pre></div><h2 id="访问限制" tabindex="-1">访问限制 <a class="header-anchor" href="#访问限制" aria-label="Permalink to “访问限制”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>UPDATE \`user\` SET Host=&#39;%&#39; WHERE User=&#39;root&#39;;</span></span>
<span class="line"><span>FLUSH PRIVILEGES;</span></span></code></pre></div><h2 id="批量插入" tabindex="-1">批量插入 <a class="header-anchor" href="#批量插入" aria-label="Permalink to “批量插入”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>把数据都保存到文件中, 通过load函数批量导入数据, 文件格式如下:</span></span>
<span class="line"><span>    &#39;1&#39;,&#39;2013-12-12&#39;</span></span>
<span class="line"><span>    &#39;2&#39;,&#39;2013-12-12&#39;</span></span>
<span class="line"><span>Mysql 语句如下:</span></span>
<span class="line"><span>   LOAD DATA INFILE &#39;D:/www/aa.txt&#39;</span></span>
<span class="line"><span>   INTO TABLE tableName CHARACTER SET UTF8 </span></span>
<span class="line"><span>   FIELDS TERMINATED BY &#39;,&#39; ENCLOSED BY &#39;\\&#39;&#39; </span></span>
<span class="line"><span>   LINES TERMINATED BY &#39;\\r\\n&#39;(id , addtime);</span></span></code></pre></div><h2 id="批量更新" tabindex="-1">批量更新 <a class="header-anchor" href="#批量更新" aria-label="Permalink to “批量更新”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>### 通过 case when then 函数进行, sql如下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>UPDATE tableName</span></span>
<span class="line"><span>SET</span></span>
<span class="line"><span>num = CASE id</span></span>
<span class="line"><span>	WHEN 1 THEN 3</span></span>
<span class="line"><span>	WHEN 2 THEN 4</span></span>
<span class="line"><span>	WHEN 3 THEN 5</span></span>
<span class="line"><span>END,</span></span>
<span class="line"><span>title = CASE id</span></span>
<span class="line"><span>	WHEN 1 THEN &#39;New Title 1&#39;</span></span>
<span class="line"><span>	WHEN 2 THEN &#39;New Title 2&#39;</span></span>
<span class="line"><span>	WHEN 3 THEN &#39;New Title 3&#39;</span></span>
<span class="line"><span>END</span></span>
<span class="line"><span>WHERE id IN (1,2,3)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###注意: where 条件一定要加, 不然修改的是整个表的列</span></span></code></pre></div>`,9)])])}const b=s(l,[["render",p]]);export{g as __pageData,b as default};
