import{_ as s,o as n,c as t,ak as e}from"./chunks/framework.BQh-lcRV.js";const k=JSON.parse('{"title":"Transactions","description":"","frontmatter":{},"headers":[],"relativePath":"guide/db/redis/transaction.md","filePath":"guide/db/redis/transaction.md","lastUpdated":1573567146000}'),p={name:"guide/db/redis/transaction.md"};function i(l,a,d,c,r,o){return n(),t("div",null,[...a[0]||(a[0]=[e(`<h1 id="transactions" tabindex="-1">Transactions <a class="header-anchor" href="#transactions" aria-label="Permalink to “Transactions”">​</a></h1><h3 id="对比mysql" tabindex="-1">对比mysql <a class="header-anchor" href="#对比mysql" aria-label="Permalink to “对比mysql”">​</a></h3><table tabindex="0"><thead><tr><th>type</th><th>mysql</th><th>redis</th></tr></thead><tbody><tr><td>开启</td><td>start transaction</td><td>muitl</td></tr><tr><td>语句</td><td>普通sql</td><td>普通命令</td></tr><tr><td>失败</td><td>rollback</td><td>discard</td></tr><tr><td>提交</td><td>commit</td><td>exec</td></tr></tbody></table><blockquote><p>注: rollback与discard 的区别,如果已经成功执行了2条语句, 第3条语句出错.</p></blockquote><pre><code>Rollback后,前2条的语句影响消失.
Discard只是结束本次事务,前2条语句造成的影响仍然还在
</code></pre><blockquote><p>注:在mutil后面的语句中, 语句出错可能有2种情况</p></blockquote><pre><code>1: 语法就有问题, 
这种,exec时,报错, 所有语句得不到执行
2: 语法本身没错,但适用对象有问题. 比如 zadd 操作list对象
Exec之后,会执行正确的语句,并跳过有不适当的语句.
</code></pre><h3 id="乐观锁" tabindex="-1">乐观锁 <a class="header-anchor" href="#乐观锁" aria-label="Permalink to “乐观锁”">​</a></h3><blockquote><p>Redis的事务中,启用的是乐观锁,只负责监测key没有被改动</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>redis 127.0.0.1:6379&gt; watch ticket</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>redis 127.0.0.1:6379&gt; multi</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>redis 127.0.0.1:6379&gt; decr ticket</span></span>
<span class="line"><span>QUEUED</span></span>
<span class="line"><span>redis 127.0.0.1:6379&gt; decrby money 100</span></span>
<span class="line"><span>QUEUED</span></span>
<span class="line"><span>redis 127.0.0.1:6379&gt; exec</span></span>
<span class="line"><span>(nil)   // 返回nil,说明监视的ticket已经改变了,事务就取消了.</span></span>
<span class="line"><span>redis 127.0.0.1:6379&gt; get ticket</span></span>
<span class="line"><span>&quot;0&quot;</span></span>
<span class="line"><span>redis 127.0.0.1:6379&gt; get money</span></span>
<span class="line"><span>&quot;200&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>watch key1 key2  ... keyN</span></span>
<span class="line"><span>作用:监听key1 key2..keyN有没有变化,如果有变, 则事务取消</span></span>
<span class="line"><span></span></span>
<span class="line"><span>unwatch </span></span>
<span class="line"><span>作用: 取消所有watch监听</span></span></code></pre></div>`,10)])])}const b=s(p,[["render",i]]);export{k as __pageData,b as default};
