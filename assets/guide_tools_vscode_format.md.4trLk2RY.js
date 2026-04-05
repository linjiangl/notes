import{_ as a,o as i,c as n,ak as t}from"./chunks/framework.BQh-lcRV.js";const c=JSON.parse('{"title":"代码格式化","description":"","frontmatter":{},"headers":[],"relativePath":"guide/tools/vscode/format.md","filePath":"guide/tools/vscode/format.md","lastUpdated":1775392610000}'),p={name:"guide/tools/vscode/format.md"};function e(l,s,h,k,r,o){return i(),n("div",null,[...s[0]||(s[0]=[t(`<h1 id="代码格式化" tabindex="-1">代码格式化 <a class="header-anchor" href="#代码格式化" aria-label="Permalink to “代码格式化”">​</a></h1><blockquote><p>插件</p></blockquote><ul><li><a href="https://editorconfig.org/" target="_blank" rel="noreferrer">EditorConfig for VS Code</a>, 配置文件<code>.editorconfig</code>：</li></ul><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http://editorconfig.org</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">root</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[*]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">indent_style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = space</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">indent_size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = 2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">end_of_line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = lf</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = utf-8</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">trim_trailing_whitespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">insert_final_newline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[*.md]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">trim_trailing_whitespace</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Makefile]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">indent_style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> = tab</span></span></code></pre></div><ul><li><a href="https://prettier.io/docs/en/options.html" target="_blank" rel="noreferrer">Prettier - Code formatter</a>, 配置文件<code>.prettierrc</code>：</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">semi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">useTabs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">tabWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">printWidth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">120</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">endOfLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lf&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">trailingComma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;none&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">arrowParens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;avoid&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">quoteProps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;as-needed&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">singleQuote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jsxSingleQuote</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">singleAttributePerLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">vueIndentScriptAndStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bracketSameLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jsxBracketSameLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">bracketSpacing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span></code></pre></div><blockquote><p>编辑器配置</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;files.associations&quot;: {</span></span>
<span class="line"><span>    &quot;*.cjson&quot;: &quot;jsonc&quot;,</span></span>
<span class="line"><span>    &quot;*.wxss&quot;: &quot;css&quot;,</span></span>
<span class="line"><span>    &quot;*.wxs&quot;: &quot;javascript&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;emmet.includeLanguages&quot;: {</span></span>
<span class="line"><span>    &quot;wxml&quot;: &quot;html&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;minapp-vscode.disableAutoConfig&quot;: true,</span></span>
<span class="line"><span>  // 格式化代码，插件Prettier - Code formatter</span></span>
<span class="line"><span>  &quot;editor.formatOnSave&quot;: true,</span></span>
<span class="line"><span>  &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;,</span></span>
<span class="line"><span>  &quot;[json]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[javascript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[typescript]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;[typescriptreact]&quot;: {</span></span>
<span class="line"><span>    &quot;editor.defaultFormatter&quot;: &quot;esbenp.prettier-vscode&quot;</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 搜索排除</span></span>
<span class="line"><span>  &quot;search.exclude&quot;: {</span></span>
<span class="line"><span>    &quot;**/.history&quot;: true,</span></span>
<span class="line"><span>    &quot;**/public&quot;: true,</span></span>
<span class="line"><span>    &quot;**/dist&quot;: true,</span></span>
<span class="line"><span>    &quot;**/mock&quot;: true</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  // 设置默认终端</span></span>
<span class="line"><span>  &quot;terminal.integrated.defaultProfile.windows&quot;: &quot;Git Bash&quot;</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,8)])])}const u=a(p,[["render",e]]);export{c as __pageData,u as default};
