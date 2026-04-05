import{_ as a,o as e,c as n,ak as p}from"./chunks/framework.BQh-lcRV.js";const m=JSON.parse('{"title":"流水线构建流程","description":"","frontmatter":{},"headers":[],"relativePath":"guide/jenkins/pipeline.md","filePath":"guide/jenkins/pipeline.md","lastUpdated":1602729295000}'),i={name:"guide/jenkins/pipeline.md"};function t(l,s,r,o,c,d){return e(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="流水线构建流程" tabindex="-1">流水线构建流程 <a class="header-anchor" href="#流水线构建流程" aria-label="Permalink to “流水线构建流程”">​</a></h1><h2 id="构建脚本" tabindex="-1">构建脚本 <a class="header-anchor" href="#构建脚本" aria-label="Permalink to “构建脚本”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>node {</span></span>
<span class="line"><span>    def remote = [:]</span></span>
<span class="line"><span>    remote.name = &#39;local&#39;</span></span>
<span class="line"><span>    remote.host = &#39;192.168.168.23&#39;</span></span>
<span class="line"><span>    remote.user = &#39;root&#39;</span></span>
<span class="line"><span>    remote.password = &#39;123456&#39;</span></span>
<span class="line"><span>    remote.allowAnyHosts = true</span></span>
<span class="line"><span>    stage(&#39;Remote SSH&#39;) {</span></span>
<span class="line"><span>        writeFile file: &#39;abc.sh&#39;, text: &#39;cd /home/w7/work/build &amp;&amp; ./shop/test_server.sh&#39;</span></span>
<span class="line"><span>        sshScript remote: remote, script: &quot;abc.sh&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,3)])])}const _=a(i,[["render",t]]);export{m as __pageData,_ as default};
