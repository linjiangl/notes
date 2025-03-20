(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{371:function(e,n,t){"use strict";t.r(n);var s=t(25),r=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"php-cs-fixer-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#php-cs-fixer-配置"}},[e._v("#")]),e._v(" PHP-CS-FIXER 配置")]),e._v(" "),n("blockquote",[n("p",[e._v("php-cs-fixer 使用说明")])]),e._v(" "),n("p",[e._v("基于 php-cs-fixer 插件，请先使用composer安装此插件")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('1. Preferences -> Tools -> External Tools 添加工具\n2. 添加 php-cs-fixer 工具，参如如下：\n\n     Name: php-fixer\n     Description: php-fixer\n     Program: C:\\tools\\composer\\vendor\\bin\\php-cs-fixer.bat\n     Arguments: --config=$ProjectFileDir$/.php_cs --verbose fix "$FileDir$/$FileName$"\n     Working directory: $ProjectFileDir$\n     \n3. Keymap -> External Tools -> php-fixer 设置快捷键 Alt+f\n4. 打开要格式化的文件，按 Alt+f 保存即可\n')])])]),n("blockquote",[n("p",[e._v(".php_cs 文件内容:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<?php\n\n$header = <<<'EOF'\nMulti-user mall\n\n@link     https://www.doubi.site\n@document https://doc.doubi.site\n@contact  8257796@qq.com\nEOF;\n\nreturn PhpCsFixer\\Config::create()\n    ->setRiskyAllowed(true)\n    ->setRules([\n        '@PSR2' => true,\n        '@Symfony' => true,\n        '@DoctrineAnnotation' => true,\n        '@PhpCsFixer' => true,\n        'header_comment' => [\n            'commentType' => 'PHPDoc',\n            'header' => $header,\n            'separate' => 'none',\n            'location' => 'after_declare_strict',\n        ],\n        'array_syntax' => [\n            'syntax' => 'short'\n        ],\n        'list_syntax' => [\n            'syntax' => 'short'\n        ],\n        'concat_space' => [\n            'spacing' => 'one'\n        ],\n        'blank_line_before_statement' => [\n            'statements' => [\n                'declare',\n            ],\n        ],\n        'general_phpdoc_annotation_remove' => [\n            'annotations' => [\n                'author'\n            ],\n        ],\n        'ordered_imports' => [\n            'imports_order' => [\n                'class', 'function', 'const',\n            ],\n            'sort_algorithm' => 'alpha',\n        ],\n        'single_line_comment_style' => [\n            'comment_types' => [\n            ],\n        ],\n        'yoda_style' => [\n            'always_move_variable' => false,\n            'equal' => false,\n            'identical' => false,\n        ],\n        'phpdoc_align' => [\n            'align' => 'left',\n        ],\n        'multiline_whitespace_before_semicolons' => [\n            'strategy' => 'no_multi_line',\n        ],\n        'class_attributes_separation' => true,\n        'combine_consecutive_unsets' => true,\n        'declare_strict_types' => true,\n        'linebreak_after_opening_tag' => true,\n        'lowercase_constants' => true,\n        'lowercase_static_reference' => true,\n        'no_useless_else' => true,\n        'no_unused_imports' => true,\n        'not_operator_with_successor_space' => true,\n        'not_operator_with_space' => false,\n        'ordered_class_elements' => true,\n        'php_unit_strict' => false,\n        'phpdoc_separation' => false,\n        'single_quote' => true,\n        'standardize_not_equals' => true,\n        'multiline_comment_opening_closing' => true,\n    ])\n    ->setFinder(\n        PhpCsFixer\\Finder::create()\n            ->exclude('public')\n            ->exclude('runtime')\n            ->exclude('vendor')\n            ->in(__DIR__)\n    )\n    ->setUsingCache(false);\n\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);