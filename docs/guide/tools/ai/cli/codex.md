# Codex CLI 帮助文档

Codex CLI 是 OpenAI 官方的 AI 编程 CLI，本地运行在终端中。本文记录配置与常用设置。

## 安装

```
$ npm install -g @openai/codex
```

## 配置

配置文件位于 `~/.codex/`：`auth.json` 存放认证信息，`config.toml` 存放模型、审批策略等设置。可直接编辑文件，或用 `codex` 交互修改。

```jsonc
# ~/.codex/auth.json

{
  "auth_mode": "apikey",
  "OPENAI_API_KEY": "sk-xxx"
}
```

```toml
# ~/.codex/config.toml

model = "gpt-5.4"
model_provider = "codex"
model_reasoning_effort = "high"

[model_providers.codex]
name = "codex"
base_url = "https://xiaohong.ccwu.cc"
wire_api = "responses"

approval_policy = "on-request"
sandbox_mode = "workspace-write"

[sandbox_workspace_write]
network_access = true

[projects."/work/github/notes"]
trust_level = "trusted"

[notice.model_migrations]
gpt-5.3-codex = "gpt-5.4"
```

## 常用配置

### 多 Profile 切换

通过 `[profiles.<name>]` 定义多套配置，用 `codex -p <name>` 切换，互不干扰：

```toml
[profiles.glm]
model = "glm-5.2"
model_provider = "glm"
model_reasoning_effort = "high"

[model_providers.glm]
name = "glm"
base_url = "https://open.bigmodel.cn/api/anthropic/v1"
wire_api = "responses"
```

```
$ codex -p glm
```

### 自定义 Provider（Bearer Token）

```jsonc
# ~/.codex/auth.json

{
  "auth_mode": "chatgpt",
  "OPENAI_API_KEY": null,
  "tokens": {},
  "last_refresh": "2026-06-30T12:23:26.718428400Z"
}
```
- `tokens` 授权的账号信息

通过 `experimental_bearer_token` 直接写入令牌，并设置 `requires_openai_auth = true` 强制走 OpenAI 认证流程：

```toml
[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://xx.com"
experimental_bearer_token = "sk-xxx"
wire_api = "responses"
requires_openai_auth = true
```

> 官方文档明确指出 `experimental_bearer_token` 出于安全考虑不推荐使用，建议改用 `env_key` 从环境变量读取密钥：

```toml
[model_providers.OpenAI]
name = "OpenAI"
base_url = "https://xx.com"
env_key = "OPENAI_API_KEY"
wire_api = "responses"
requires_openai_auth = true
```

### 审批与沙箱

- `approval_policy`：`untrusted`（默认，首次需确认）/ `on-request`（按需确认）/ `never`（全自动）/ `always`（每次确认）
- `sandbox_mode`：`workspace-write`（可写当前工作区）/ `workspace-read`（只读）/ `danger-full-access`（完全访问，慎用）
- `[sandbox_workspace_write]` 下设置 `network_access = true` 可在写沙箱中放行网络访问

### 插件安装

> [content7](https://context7.com/)

```
$ npx ctx7 setup --codex
```

> [karpathy-guidelines](https://github.com/multica-ai/andrej-karpathy-skills)

```
$ cd ~/.claude/plugins/cache/karpathy-skills/andrej-karpathy-skills/1.0.0/skills
$ cp -r karpathy-guidelines ~/.codex/skills
```

> [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

```
$ codex plugin marketplace add DietrichGebert/ponytail
```
