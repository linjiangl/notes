# 配置

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
    // 搜索排除
    "search.exclude": {
        "**/.history": true,
        "**/public": true,
        "**/dist": true,
        "**/mock": true
    },
    // 保存时自动格式化
    "editor.formatOnSave": true,
    // 设置默认终端
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    // 追踪vue组件，需要安装 vetur，vue-helper 插件
    "vue-helper.alias": {
        "@": "src"
    },
    "vue-helper.componentPrefix": {
        "alias": "@",
        "path": "src"
    }
}
```
