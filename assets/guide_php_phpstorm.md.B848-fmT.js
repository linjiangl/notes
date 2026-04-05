import{_ as a,o as n,c as e,ak as p,al as l,am as i}from"./chunks/framework.BQh-lcRV.js";const b=JSON.parse('{"title":"激活","description":"","frontmatter":{},"headers":[],"relativePath":"guide/php/phpstorm.md","filePath":"guide/php/phpstorm.md","lastUpdated":1775392610000}'),t={name:"guide/php/phpstorm.md"};function o(c,s,r,d,h,m){return n(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="激活" tabindex="-1">激活 <a class="header-anchor" href="#激活" aria-label="Permalink to “激活”">​</a></h1><p><a href="https://3.jetbra.in/" target="_blank" rel="noreferrer">jetbra</a></p><h3 id="_1、-下载-jetbra-zip" tabindex="-1">1、 下载 <code>jetbra.zip</code> <a class="header-anchor" href="#_1、-下载-jetbra-zip" aria-label="Permalink to “1、 下载 jetbra.zip”">​</a></h3><h3 id="_2、-配置-vmoptions" tabindex="-1">2、 配置 <code>vmoptions</code> <a class="header-anchor" href="#_2、-配置-vmoptions" aria-label="Permalink to “2、 配置 vmoptions”">​</a></h3><blockquote><p>windows</p></blockquote><p>在 <code>phpstorm64.exe.vmoptions</code> 文件中配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-Xms128m</span></span>
<span class="line"><span>-Xmx750m</span></span>
<span class="line"><span>-XX:ReservedCodeCacheSize=512m</span></span>
<span class="line"><span>-XX:+UseG1GC</span></span>
<span class="line"><span>-XX:SoftRefLRUPolicyMSPerMB=50</span></span>
<span class="line"><span>-XX:CICompilerCount=2</span></span>
<span class="line"><span>-XX:+HeapDumpOnOutOfMemoryError</span></span>
<span class="line"><span>-XX:-OmitStackTraceInFastThrow</span></span>
<span class="line"><span>-XX:+IgnoreUnrecognizedVMOptions</span></span>
<span class="line"><span>-XX:CompileCommand=exclude,com/intellij/openapi/vfs/impl/FilePartNodeRoot,trieDescend</span></span>
<span class="line"><span>-ea</span></span>
<span class="line"><span>-Dsun.io.useCanonCaches=false</span></span>
<span class="line"><span>-Dsun.java2d.metal=true</span></span>
<span class="line"><span>-Djbr.catch.SIGABRT=true</span></span>
<span class="line"><span>-Djdk.http.auth.tunneling.disabledSchemes=&quot;&quot;</span></span>
<span class="line"><span>-Djdk.attach.allowAttachSelf=true</span></span>
<span class="line"><span>-Djdk.module.illegalAccess.silent=true</span></span>
<span class="line"><span>-Dkotlinx.coroutines.debug=off</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-javaagent:D:\\jetbra\\ja-netfilter.jar=jetbrains</span></span></code></pre></div><p><strong><code>phpstorm64.exe.vmoptions</code> 文件位置：</strong></p><p>桌面-&gt;phpstrom 图标-&gt;右击-&gt;打开文件所在位置，对应目录下面找到 <code>phpstorm64.exe.vmoptions</code> 文件</p><blockquote><p>macOS or Linux</p></blockquote><p>在 <code>phpstorm64.exe.vmoptions</code> 文件中配置：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>-Xms128m</span></span>
<span class="line"><span>-Xmx750m</span></span>
<span class="line"><span>-XX:ReservedCodeCacheSize=512m</span></span>
<span class="line"><span>-XX:+UseG1GC</span></span>
<span class="line"><span>-XX:SoftRefLRUPolicyMSPerMB=50</span></span>
<span class="line"><span>-XX:CICompilerCount=2</span></span>
<span class="line"><span>-XX:+HeapDumpOnOutOfMemoryError</span></span>
<span class="line"><span>-XX:-OmitStackTraceInFastThrow</span></span>
<span class="line"><span>-XX:+IgnoreUnrecognizedVMOptions</span></span>
<span class="line"><span>-XX:CompileCommand=exclude,com/intellij/openapi/vfs/impl/FilePartNodeRoot,trieDescend</span></span>
<span class="line"><span>-ea</span></span>
<span class="line"><span>-Dsun.io.useCanonCaches=false</span></span>
<span class="line"><span>-Dsun.java2d.metal=true</span></span>
<span class="line"><span>-Djbr.catch.SIGABRT=true</span></span>
<span class="line"><span>-Djdk.http.auth.tunneling.disabledSchemes=&quot;&quot;</span></span>
<span class="line"><span>-Djdk.attach.allowAttachSelf=true</span></span>
<span class="line"><span>-Djdk.module.illegalAccess.silent=true</span></span>
<span class="line"><span>-Dkotlinx.coroutines.debug=off</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED</span></span>
<span class="line"><span>--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-javaagent:/home/jetbra/ja-netfilter.jar=jetbrains</span></span></code></pre></div><h2 id="_3-安装" tabindex="-1">3. 安装 <a class="header-anchor" href="#_3-安装" aria-label="Permalink to “3. 安装”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>macOS or Linux: execute &quot;scripts/install.sh&quot;</span></span>
<span class="line"><span>Windows: double click to execute &quot;scripts\\install-current-user.vbs&quot; (For current user)</span></span>
<span class="line"><span>                                 &quot;scripts\\install-all-users.vbs&quot; (For all users)</span></span></code></pre></div><h2 id="_4-激活" tabindex="-1">4. 激活 <a class="header-anchor" href="#_4-激活" aria-label="Permalink to “4. 激活”">​</a></h2><p>复制Key粘贴到 <code>Activation Code</code>, 点击 <code>Activate</code> 激活</p><p><img src="`+l+'" alt="jetbra"><img src="'+i+'" alt="jetbra"></p>',17)])])}const g=a(t,[["render",o]]);export{b as __pageData,g as default};
