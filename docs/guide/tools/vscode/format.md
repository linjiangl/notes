# 代码格式化

> 插件

- [EditorConfig for VS Code](https://editorconfig.org/), 配置文件`.editorconfig`：

```editorconfig
# http://editorconfig.org
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false

[Makefile]
indent_style = tab
```

- [Prettier - Code formatter](https://prettier.io/docs/en/options.html), 配置文件`.prettierrc`：

```yaml
semi: true
useTabs: false
tabWidth: 2
printWidth: 120
endOfLine: "lf"
trailingComma: "none"
arrowParens: "avoid"
quoteProps: "as-needed"
singleQuote: false
jsxSingleQuote: false
singleAttributePerLine: true
vueIndentScriptAndStyle: true
bracketSameLine: false
jsxBracketSameLine: false
bracketSpacing: true
```

> 编辑器配置

```
{
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  // 格式化代码，插件Prettier - Code formatter
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  // 搜索排除
  "search.exclude": {
    "**/.history": true,
    "**/public": true,
    "**/dist": true,
    "**/mock": true
  },
  // 设置默认终端
  "terminal.integrated.defaultProfile.windows": "Git Bash"
}

