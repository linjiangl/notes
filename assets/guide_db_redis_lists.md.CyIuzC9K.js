import{_ as a,o as n,c as p,ak as e}from"./chunks/framework.BQh-lcRV.js";const h=JSON.parse('{"title":"Lists","description":"","frontmatter":{},"headers":[],"relativePath":"guide/db/redis/lists.md","filePath":"guide/db/redis/lists.md","lastUpdated":1573567146000}'),l={name:"guide/db/redis/lists.md"};function i(t,s,o,c,r,u){return n(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="lists" tabindex="-1">Lists <a class="header-anchor" href="#lists" aria-label="Permalink to “Lists”">​</a></h1><blockquote><p>基本操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 插入值</span></span>
<span class="line"><span>lpush key value</span></span>
<span class="line"><span>lpop key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rpush key value</span></span>
<span class="line"><span>rpop key</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 计算链接表的元素个数</span></span>
<span class="line"><span>llen key</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 返回index索引上的值</span></span>
<span class="line"><span>lindex key index</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#剪切key对应的链接,切[start,stop]一段,并把该段重新赋给key</span></span>
<span class="line"><span>ltrim key start stop</span></span></code></pre></div><blockquote><p>从key链表中删除 value值</p></blockquote><ul><li>value &gt; 0: 从头开始删除</li><li>value &lt; 0: 从未开始删除</li><li>value = 0: 等于的都删除</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lrem key count value</span></span></code></pre></div><blockquote><p>返回链表中[start ,stop]中的元素, 左数从0开始,右数从-1开始</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>lrange key start stop</span></span>
<span class="line"><span></span></span>
<span class="line"><span>127.0.0.1:6379[1]&gt; lpush list 1</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>127.0.0.1:6379[1]&gt; lpush list 2</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>127.0.0.1:6379[1]&gt; lpush list 3</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379[1]&gt; lrange list 0 0</span></span>
<span class="line"><span>1) &quot;3&quot;</span></span>
<span class="line"><span>127.0.0.1:6379[1]&gt; lrange list 0 1</span></span>
<span class="line"><span>1) &quot;3&quot;</span></span>
<span class="line"><span>2) &quot;2&quot;</span></span></code></pre></div><blockquote><p>在key链表中寻找’search’,并在search值之前|之后,插入value</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>linsert key after|before search value</span></span>
<span class="line"><span></span></span>
<span class="line"><span>redis&gt; RPUSH mylist &quot;Hello&quot;</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>redis&gt; RPUSH mylist &quot;World&quot;</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>redis&gt; LINSERT mylist BEFORE &quot;World&quot; &quot;There&quot;</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>redis&gt; LRANGE mylist 0 -1</span></span>
<span class="line"><span>1) &quot;Hello&quot;</span></span>
<span class="line"><span>2) &quot;There&quot;</span></span>
<span class="line"><span>3) &quot;World&quot;</span></span></code></pre></div><blockquote><p>把source的尾部拿出,放在dest的头部</p></blockquote><ul><li>场景: task + bak 双链表完成安全队列</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>rpoplpush source dest</span></span>
<span class="line"><span></span></span>
<span class="line"><span>redis&gt; RPUSH mylist &quot;one&quot;</span></span>
<span class="line"><span>(integer) 1</span></span>
<span class="line"><span>redis&gt; RPUSH mylist &quot;two&quot;</span></span>
<span class="line"><span>(integer) 2</span></span>
<span class="line"><span>redis&gt; RPUSH mylist &quot;three&quot;</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>redis&gt; RPOPLPUSH mylist myotherlist</span></span>
<span class="line"><span>&quot;three&quot;</span></span>
<span class="line"><span>redis&gt; LRANGE mylist 0 -1</span></span>
<span class="line"><span>1) &quot;one&quot;</span></span>
<span class="line"><span>2) &quot;two&quot;</span></span>
<span class="line"><span>redis&gt; LRANGE myotherlist 0 -1</span></span>
<span class="line"><span>1) &quot;three&quot;</span></span></code></pre></div><blockquote><p>等待弹出key的尾/头元素</p></blockquote><ul><li>场景: 长轮询Ajax,在线聊天时,能够用到</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>brpop key timeout</span></span>
<span class="line"><span>blpop key timeout</span></span></code></pre></div>`,16)])])}const g=a(l,[["render",i]]);export{h as __pageData,g as default};
