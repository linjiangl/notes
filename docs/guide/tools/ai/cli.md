# cli 工具配置

## opencode cli 配置 

```jsonc
# opencode.json
{
  "$schema": "https://opencode.ai/config.json",
  "provider": {
    "openai-compatible": {
      "npm": "@ai-sdk/openai",
      "options": {
        "name": "new-api",
        "baseURL": "https://xxx.com/v1",
        "apiKey": "sk-xxx"
      },
      "models": {
        "gpt-5.3-codex": {
          "name": "gpt-5.3-codex"
        },
        "gpt-5.4": {
          "name": "gpt-5.4"
        }
      }
    }
  }
}
```

## codex cli 配置

```jsonc
# ~/.codex/auth.json

{
  "auth_mode": "apikey",
  "OPENAI_API_KEY": "sk-xxx"
}

# ~/.codex/config.toml

model = "gpt-5.4"
model_provider = "codex"
model_reasoning_effort = "high"

[model_providers.codex]
name = "codex"
base_url = "https://xx.com/v1"
wire_api = "responses"

[codex]
auto_confirm = false
language = "zh-cn"
max_snapshot_files = 2000

[projects."/work/github/paperclip"]
trust_level = "trusted"

[projects."/work/github/demo-vue-admin"]
trust_level = "trusted"

[projects."/work/github/notes"]
trust_level = "trusted"

[notice.model_migrations]
gpt-5.3-codex = "gpt-5.4"
```

## claude code cli 配置

```jsonc
# ~/.claude/settings.json

{
  "env-glm": {
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxx"
  },
  "env-kimi": {
    "ANTHROPIC_BASE_URL": "https://api.kimi.com/coding/",
    "ANTHROPIC_AUTH_TOKEN": "sk-kimi-xxx",
    "ANTHROPIC_MODEL": "kimi-for-coding",
    "ANTHROPIC_SMALL_FAST_MODEL": "kimi-for-coding"
  },
  "env-mi": {
    "ANTHROPIC_BASE_URL": "https://api.xiaomimimo.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "sk-xxx",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "mimo-v2-flash",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "mimo-v2-flash",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "mimo-v2-flash"
  }
}
```


