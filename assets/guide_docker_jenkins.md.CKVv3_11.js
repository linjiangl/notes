import{_ as n,o as a,c as e,ak as p}from"./chunks/framework.BQh-lcRV.js";const _=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[],"relativePath":"guide/docker/jenkins.md","filePath":"guide/docker/jenkins.md","lastUpdated":1593307689000}'),i={name:"guide/docker/jenkins.md"};function l(t,s,c,o,r,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to “安装”">​</a></h1><blockquote><p>docker-compose.yml</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>version: &quot;3&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  jenkins:</span></span>
<span class="line"><span>    image: jenkins/jenkins:\${JENKINS_VERSION}</span></span>
<span class="line"><span>    container_name: jenkins</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - &#39;\${JENKINS_HOST_PORT}:8080&#39;</span></span>
<span class="line"><span>      - &#39;\${JENKINS_SLAVE_AGENT_PORT}:50000&#39;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - \${JENKINS_HOME}:/var/jenkins_home:rw</span></span>
<span class="line"><span>    networks:</span></span>
<span class="line"><span>      - default</span></span>
<span class="line"><span></span></span>
<span class="line"><span>networks:</span></span>
<span class="line"><span>  default:</span></span>
<span class="line"><span>    driver: bridge</span></span>
<span class="line"><span>    ipam:</span></span>
<span class="line"><span>      config:</span></span>
<span class="line"><span>        - subnet: 172.24.0.0/16</span></span></code></pre></div><blockquote><p>.env</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>#################### jenkins #####################</span></span>
<span class="line"><span>JENKINS_VERSION=latest</span></span>
<span class="line"><span>JENKINS_HOST_PORT=8000</span></span>
<span class="line"><span>JENKINS_SLAVE_AGENT_PORT=50000</span></span>
<span class="line"><span>JENKINS_HOME=./jenkins_home</span></span></code></pre></div>`,5)])])}const h=n(i,[["render",l]]);export{_ as __pageData,h as default};
