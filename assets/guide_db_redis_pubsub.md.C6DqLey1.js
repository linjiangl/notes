import{_ as a,o as n,c as t,ak as r}from"./chunks/framework.BQh-lcRV.js";const i=JSON.parse('{"title":"Pub/Sub","description":"","frontmatter":{},"headers":[],"relativePath":"guide/db/redis/pubsub.md","filePath":"guide/db/redis/pubsub.md","lastUpdated":1573567146000}'),o={name:"guide/db/redis/pubsub.md"};function s(p,e,d,b,u,c){return n(),t("div",null,[...e[0]||(e[0]=[r(`<h1 id="pub-sub" tabindex="-1">Pub/Sub <a class="header-anchor" href="#pub-sub" aria-label="Permalink to “Pub/Sub”">​</a></h1><p><a href="https://redis.io/topics/pubsub" target="_blank" rel="noreferrer">帮助</a></p><h3 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-label="Permalink to “基本命令”">​</a></h3><blockquote><p>订阅</p></blockquote><pre><code># 订阅某频道
SUBSCRIBE channel [channel ...]

# 订阅,支持通配符
PUNSUBSCRIBE [pattern [pattern ...]]

# 取消
UNSUBSCRIBE [channel [channel ...]]
</code></pre><blockquote><p>发布</p></blockquote><pre><code># 向某频道发送消息
PUBLISH channel message

# 支持通配符
PSUBSCRIBE pattern [pattern ...]
</code></pre>`,7)])])}const _=a(o,[["render",s]]);export{i as __pageData,_ as default};
