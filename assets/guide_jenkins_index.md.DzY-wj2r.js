import{_ as s,o as n,c as e,ak as i}from"./chunks/framework.BQh-lcRV.js";const h=JSON.parse('{"title":"安装配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/jenkins/index.md","filePath":"guide/jenkins/index.md","lastUpdated":1775392610000}'),p={name:"guide/jenkins/index.md"};function l(t,a,r,o,c,d){return n(),e("div",null,[...a[0]||(a[0]=[i(`<h1 id="安装配置" tabindex="-1">安装配置 <a class="header-anchor" href="#安装配置" aria-label="Permalink to “安装配置”">​</a></h1><p><a href="https://github.com/jenkinsci/docker" target="_blank" rel="noreferrer">帮助</a></p><h2 id="docker-compose-yml" tabindex="-1">docker-compose.yml <a class="header-anchor" href="#docker-compose-yml" aria-label="Permalink to “docker-compose.yml”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>jenkins:</span></span>
<span class="line"><span>    image: jenkins/jenkins:latest</span></span>
<span class="line"><span>    container_name: jenkins</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &#39;8000:8080&#39;</span></span>
<span class="line"><span>      - &#39;50000:50000&#39;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /var/jenkins_home:/var/jenkins_home:rw</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - default</span></span></code></pre></div><h2 id="插件" tabindex="-1">插件 <a class="header-anchor" href="#插件" aria-label="Permalink to “插件”">​</a></h2><blockquote><p>BlueOcean</p></blockquote><blockquote><p>SSH Pipeline Steps</p></blockquote>`,7)])])}const m=s(p,[["render",l]]);export{h as __pageData,m as default};
