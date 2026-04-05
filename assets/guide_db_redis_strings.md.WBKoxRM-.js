import{_ as n,o as a,c as e,ak as p}from"./chunks/framework.BQh-lcRV.js";const d=JSON.parse('{"title":"Strings","description":"","frontmatter":{},"headers":[],"relativePath":"guide/db/redis/strings.md","filePath":"guide/db/redis/strings.md","lastUpdated":1573567146000}'),i={name:"guide/db/redis/strings.md"};function l(t,s,c,o,g,r){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="strings" tabindex="-1">Strings <a class="header-anchor" href="#strings" aria-label="Permalink to “Strings”">​</a></h1><blockquote><p>基本操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 设置</span></span>
<span class="line"><span>set key value [ex 秒数] / [px 毫秒数]  [nx] /[xx]</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取</span></span>
<span class="line"><span>get key</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置多个key</span></span>
<span class="line"><span>mset key1 key2 ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取多个key</span></span>
<span class="line"><span>mget key1 key2 ...</span></span></code></pre></div><blockquote><p>数值操作</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 加1</span></span>
<span class="line"><span>incr key</span></span>
<span class="line"><span>incrby key number </span></span>
<span class="line"><span>incrbyfloat key floatnumber </span></span>
<span class="line"><span># 减1</span></span>
<span class="line"><span>decr key</span></span>
<span class="line"><span>decrby key number</span></span></code></pre></div><blockquote><p>修改指定偏移量的字符</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>setrange key offset value</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 存在的key</span></span>
<span class="line"><span>127.0.0.1:6379&gt; get test1</span></span>
<span class="line"><span>&quot;key&quot;</span></span>
<span class="line"><span>127.0.0.1:6379&gt; setrange test1 2 x</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379&gt; get test1</span></span>
<span class="line"><span>&quot;kex&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 不存在的key</span></span>
<span class="line"><span>127.0.0.1:6379&gt; setrange test3 2 x</span></span>
<span class="line"><span>(integer) 3</span></span>
<span class="line"><span>127.0.0.1:6379&gt; get test3</span></span>
<span class="line"><span>&quot;\\x00\\x00x&quot;</span></span></code></pre></div><blockquote><p>获取指定范围的字符</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>getrange key start end </span></span>
<span class="line"><span></span></span>
<span class="line"><span>127.0.0.1:6379&gt; set range &#39;hello word&#39; ex 3600</span></span>
<span class="line"><span>OK</span></span>
<span class="line"><span>127.0.0.1:6379&gt; getrange range 5 2</span></span>
<span class="line"><span>&quot;&quot;</span></span>
<span class="line"><span>127.0.0.1:6379&gt; getrange range 5 7</span></span>
<span class="line"><span>&quot; wo&quot;</span></span>
<span class="line"><span>127.0.0.1:6379&gt; getrange range 5 100</span></span>
<span class="line"><span>&quot; word&quot;</span></span>
<span class="line"><span>127.0.0.1:6379&gt; getrange range -3 -1</span></span>
<span class="line"><span>&quot;ord&quot;</span></span>
<span class="line"><span>127.0.0.1:6379&gt; getrange range -3 100</span></span>
<span class="line"><span>&quot;ord&quot;</span></span></code></pre></div><blockquote><p>把value追加到可以的原值上</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>append key value</span></span></code></pre></div><blockquote><p>获取并返回旧值,设置新值</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>getset key newvalue</span></span></code></pre></div><blockquote><p>位运算</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span># 设置offset对应二进制位上的值</span></span>
<span class="line"><span>setbit key offset value</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 获取offset对应的值</span></span>
<span class="line"><span>getbit key offset</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 对key1,key2..keyN作operation,并将结果保存到 destkey 上</span></span>
<span class="line"><span>bitop operation destkey key [key ...]</span></span></code></pre></div>`,15)])])}const h=n(i,[["render",l]]);export{d as __pageData,h as default};
