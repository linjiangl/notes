# 提交规范

推荐使用 Conventional Commits 风格编写提交信息。

基础格式如下：

```text
<type>(<scope>): <subject>
```

- `Header`：必填
- `Body`：可选
- `Footer`：可选

## Header

`Header` 只有一行，包含 `type`、`scope` 和 `subject` 三部分。

- `type`：必填
- `scope`：可选
- `subject`：必填

例如：

```text
feat(auth): add login by sms
fix(api): handle empty response
docs(git): update commit guide
```

### type

`type` 用于说明本次提交的类别，常用值如下：

- `feat`：新功能
- `fix`：修复 bug
- `docs`：文档变更
- `style`：代码格式调整，不影响运行结果
- `refactor`：重构，既不是新功能也不是修复 bug
- `test`：测试相关变更
- `chore`：构建、依赖、脚手架或辅助工具变更

一般来说，`feat` 和 `fix` 更适合进入 Change log；其他类型是否进入可按项目需要决定。

### scope

`scope` 用于说明影响范围，比如模块名、页面名或功能名。

建议：

- 尽量简短，能看出改动范围即可
- 优先使用模块名、目录名、页面名、功能名
- 如果这次提交影响范围很散，也可以省略

示例：

- `auth`
- `api`
- `git`
- `docs`

### subject

`subject` 是对本次提交目的的简短描述，建议控制在 50 个字符以内。

- 使用动词开头，直接描述本次提交做了什么
- 建议使用小写开头
- 结尾不要加句号
- 尽量写清“目的”，不要只写“修改代码”“更新内容”这类空话

示例：

```text
feat(user): add profile page
fix(order): prevent duplicate submit
docs(git): update commit guide
```

## Body

`Body` 用于补充说明提交背景、实现思路或影响范围。

- 说明为什么要改
- 说明主要改了什么
- 必要时补充兼容性或注意事项

如果 `Header` 已经足够清楚，`Body` 可以不写。

## Footer

`Footer` 通常用于补充额外信息，例如：

- 关联 issue：`Closes #12`
- 标记不兼容变更：`BREAKING CHANGE: ...`

## 完整示例

```text
feat(auth): add sms login

support login by verification code on mobile

Closes #12
```

## 建议

- 一次提交只表达一件事
- `subject` 优先写“为什么改”或“改完达到什么结果”
- 不要把过多实现细节都塞进 `subject`
- 如果团队已经接入 `commitlint`，以团队规则为准


## 参考资料

[文档](https://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)

[commitlint](https://commitlint.js.org/)
