import{_ as n,o as a,c as p,ak as e}from"./chunks/framework.BQh-lcRV.js";const d=JSON.parse('{"title":"PHP-CS-FIXER 配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/php/cs_fixer.md","filePath":"guide/php/cs_fixer.md","lastUpdated":1597565635000}'),l={name:"guide/php/cs_fixer.md"};function t(i,s,c,r,o,g){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="php-cs-fixer-配置" tabindex="-1">PHP-CS-FIXER 配置 <a class="header-anchor" href="#php-cs-fixer-配置" aria-label="Permalink to “PHP-CS-FIXER 配置”">​</a></h1><blockquote><p>php-cs-fixer 使用说明</p></blockquote><p>基于 php-cs-fixer 插件，请先使用composer安装此插件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>1. Preferences -&gt; Tools -&gt; External Tools 添加工具</span></span>
<span class="line"><span>2. 添加 php-cs-fixer 工具，参如如下：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     Name: php-fixer</span></span>
<span class="line"><span>     Description: php-fixer</span></span>
<span class="line"><span>     Program: C:\\tools\\composer\\vendor\\bin\\php-cs-fixer.bat</span></span>
<span class="line"><span>     Arguments: --config=$ProjectFileDir$/.php_cs --verbose fix &quot;$FileDir$/$FileName$&quot;</span></span>
<span class="line"><span>     Working directory: $ProjectFileDir$</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>3. Keymap -&gt; External Tools -&gt; php-fixer 设置快捷键 Alt+f</span></span>
<span class="line"><span>4. 打开要格式化的文件，按 Alt+f 保存即可</span></span></code></pre></div><blockquote><p>.php_cs 文件内容:</p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>&lt;?php</span></span>
<span class="line"><span></span></span>
<span class="line"><span>$header = &lt;&lt;&lt;&#39;EOF&#39;</span></span>
<span class="line"><span>Multi-user mall</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@link     https://www.doubi.site</span></span>
<span class="line"><span>@document https://doc.doubi.site</span></span>
<span class="line"><span>@contact  8257796@qq.com</span></span>
<span class="line"><span>EOF;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return PhpCsFixer\\Config::create()</span></span>
<span class="line"><span>    -&gt;setRiskyAllowed(true)</span></span>
<span class="line"><span>    -&gt;setRules([</span></span>
<span class="line"><span>        &#39;@PSR2&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;@Symfony&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;@DoctrineAnnotation&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;@PhpCsFixer&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;header_comment&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;commentType&#39; =&gt; &#39;PHPDoc&#39;,</span></span>
<span class="line"><span>            &#39;header&#39; =&gt; $header,</span></span>
<span class="line"><span>            &#39;separate&#39; =&gt; &#39;none&#39;,</span></span>
<span class="line"><span>            &#39;location&#39; =&gt; &#39;after_declare_strict&#39;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;array_syntax&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;syntax&#39; =&gt; &#39;short&#39;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;list_syntax&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;syntax&#39; =&gt; &#39;short&#39;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;concat_space&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;spacing&#39; =&gt; &#39;one&#39;</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;blank_line_before_statement&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;statements&#39; =&gt; [</span></span>
<span class="line"><span>                &#39;declare&#39;,</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;general_phpdoc_annotation_remove&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;annotations&#39; =&gt; [</span></span>
<span class="line"><span>                &#39;author&#39;</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;ordered_imports&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;imports_order&#39; =&gt; [</span></span>
<span class="line"><span>                &#39;class&#39;, &#39;function&#39;, &#39;const&#39;,</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>            &#39;sort_algorithm&#39; =&gt; &#39;alpha&#39;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;single_line_comment_style&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;comment_types&#39; =&gt; [</span></span>
<span class="line"><span>            ],</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;yoda_style&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;always_move_variable&#39; =&gt; false,</span></span>
<span class="line"><span>            &#39;equal&#39; =&gt; false,</span></span>
<span class="line"><span>            &#39;identical&#39; =&gt; false,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;phpdoc_align&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;align&#39; =&gt; &#39;left&#39;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;multiline_whitespace_before_semicolons&#39; =&gt; [</span></span>
<span class="line"><span>            &#39;strategy&#39; =&gt; &#39;no_multi_line&#39;,</span></span>
<span class="line"><span>        ],</span></span>
<span class="line"><span>        &#39;class_attributes_separation&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;combine_consecutive_unsets&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;declare_strict_types&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;linebreak_after_opening_tag&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;lowercase_constants&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;lowercase_static_reference&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;no_useless_else&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;no_unused_imports&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;not_operator_with_successor_space&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;not_operator_with_space&#39; =&gt; false,</span></span>
<span class="line"><span>        &#39;ordered_class_elements&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;php_unit_strict&#39; =&gt; false,</span></span>
<span class="line"><span>        &#39;phpdoc_separation&#39; =&gt; false,</span></span>
<span class="line"><span>        &#39;single_quote&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;standardize_not_equals&#39; =&gt; true,</span></span>
<span class="line"><span>        &#39;multiline_comment_opening_closing&#39; =&gt; true,</span></span>
<span class="line"><span>    ])</span></span>
<span class="line"><span>    -&gt;setFinder(</span></span>
<span class="line"><span>        PhpCsFixer\\Finder::create()</span></span>
<span class="line"><span>            -&gt;exclude(&#39;public&#39;)</span></span>
<span class="line"><span>            -&gt;exclude(&#39;runtime&#39;)</span></span>
<span class="line"><span>            -&gt;exclude(&#39;vendor&#39;)</span></span>
<span class="line"><span>            -&gt;in(__DIR__)</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>    -&gt;setUsingCache(false);</span></span></code></pre></div>`,6)])])}const u=n(l,[["render",t]]);export{d as __pageData,u as default};
