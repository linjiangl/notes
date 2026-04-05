import{_ as n,o as a,c as e,ak as p}from"./chunks/framework.BQh-lcRV.js";const k=JSON.parse('{"title":"jenkins","description":"","frontmatter":{},"headers":[],"relativePath":"guide/linux/jenkins.md","filePath":"guide/linux/jenkins.md","lastUpdated":1574662185000}'),l={name:"guide/linux/jenkins.md"};function i(r,s,t,c,o,d){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="jenkins" tabindex="-1">jenkins <a class="header-anchor" href="#jenkins" aria-label="Permalink to “jenkins”">​</a></h1><p><a href="http://www.cnblogs.com/miniren/category/792799.html" target="_blank" rel="noreferrer">帮助</a><a href="http://skyseraph.com/2016/07/18/Tools/Jenkins%20Gitlab%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E6%89%93%E5%8C%85%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BA/" target="_blank" rel="noreferrer">Jenkins Gitlab持续集成打包平台搭建</a><a href="https://blog.csdn.net/leo15561050003/article/details/79818176" target="_blank" rel="noreferrer">构建/回滚</a></p><blockquote><p>服务配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Invoke Phing targets</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Targets:</span></span>
<span class="line"><span>tar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Properties:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>buildid=\${BUILD_ID}</span></span>
<span class="line"><span>buildnumber=\${BUILD_NUMBER}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// ssh-server</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Source files</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dist/source-service.\${BUILD_NUMBER}.\${BUILD_ID}.tar.gz</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Remove prefix</span></span>
<span class="line"><span></span></span>
<span class="line"><span>dist/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Remote directory</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/home/jenkins/source-service</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Exec command</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /home/jenkins/source-service</span></span>
<span class="line"><span>tar -zxf source-service.\${BUILD_NUMBER}.\${BUILD_ID}.tar.gz -C /www/wwwroot/score/</span></span>
<span class="line"><span>chown -R www:www /www/wwwroot/score</span></span>
<span class="line"><span>cd /www/wwwroot/score/</span></span>
<span class="line"><span>sh test.sh</span></span>
<span class="line"><span>git fetch --all</span></span>
<span class="line"><span>git reset --hard origin/dev</span></span>
<span class="line"><span>find /home/jenkins/source-service/ -mtime +3 -name &quot;*.tar.gz&quot; -exec rm -rf {} \\;</span></span></code></pre></div>`,4)])])}const _=n(l,[["render",i]]);export{k as __pageData,_ as default};
