# Claude Code 帮助文档

Claude Code 是 Anthropic 官方的 AI 编程 CLI。本文记录配置、常用 MCP 和 Skill。

## 配置

配置文件按优先级合并：`~/.claude/settings.json`（用户级）→ `.claude/settings.json`（项目共享）→ `.claude/settings.local.json`（本地）。`/config` 可交互修改。

```jsonc
# ~/.claude/settings.json

{
  "env": {
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxx",
    "ANTHROPIC_MODEL": "glm-5.2",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-5.2",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-5.2",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-5.2",
    "CLAUDE_CODE_SUBAGENT_MODEL": "glm-5.2"
  },
  "permissions": {
    "allow": ["Bash(npm run docs:*)", "Read(./docs/**)", "Edit(./docs/**)"],
    "deny": ["Bash(rm -rf:*)", "Read(./**/.env*)"]
  }
}
```

## 插件安装

> [content7](https://context7.com/)

```
$ npx ctx7 setup --claude
```

> [karpathy-guidelines](https://github.com/multica-ai/andrej-karpathy-skills)

```
$ /plugin marketplace add forrestchang/andrej-karpathy-skills
```

> [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

```
$ /plugin marketplace add DietrichGebert/ponytail
```



