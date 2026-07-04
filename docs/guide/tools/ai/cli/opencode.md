# OpenCode 帮助文档

OpenCode 是开源的 AI 编程 CLI（opencode.ai），终端内运行，支持自定义模型 Provider。本文记录配置与常用设置。

## 配置

配置文件为 `opencode.json`（项目根目录或全局），Schema 见 `https://opencode.ai/config.json`。可直接编辑文件，或在 TUI 中修改。

```jsonc
# opencode.json

{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "sub2api-openai": {
      "npm": "@ai-sdk/openai",
      "options": {
        "name": "sub2api",
        "baseURL": "https://xx.com/v1",
        "apiKey": "sk-xxx"
      },
      "models": {
        "gpt-5.5": {
          "name": "gpt-5.5",
          "reasoning": true,
          "tool_call": true,
          "variants": {
            "low": { "reasoningEffort": "low" },
            "medium": { "reasoningEffort": "medium" },
            "high": { "reasoningEffort": "high" },
            "xhigh": { "reasoningEffort": "xhigh" }
          }
        }
      }
    },
    "sub2api-gemini": {
      "npm": "@ai-sdk/google",
      "options": {
        "baseURL": "https://xx.com/antigravity/v1beta",
        "apiKey": "sk-xxx"
      },
      "models": {
        "gemini-3.1-pro-low": { "name": "gemini-3.1-pro-low" },
        "gemini-3-flash": { "name": "gemini-3-flash" },
        "claude-sonnet-4-6": { "name": "claude-sonnet-4-6" },
        "claude-opus-4-7": { "name": "claude-opus-4-7" },
      }
    }
  }
}
```

## 常用配置

### Provider 结构说明

每个 Provider 通过 `npm` 指定底层 AI SDK 包，`options` 透传给 SDK：

- `npm`：底层 SDK 包，如 `@ai-sdk/openai`、`@ai-sdk/google`、`@ai-sdk/anthropic`
- `options.baseURL` / `options.apiKey`：自建网关或第三方代理的地址与密钥
- `models`：声明可用模型；`reasoning: true` 标记推理模型，`tool_call: true` 标记支持工具调用
- `variants`：为同一模型预设不同 `reasoningEffort`（low / medium / high / xhigh），在 TUI 中按需切换

### 插件安装

> [content7](https://context7.com/)

```
$ npx ctx7 setup --opencode
```

> [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

Add to `opencode.json`:

```
{ "plugin": ["@dietrichgebert/ponytail"] }
```


