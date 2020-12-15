# 常用命令


> 回滚版本

```shell script
# 回退到上个版本
$ git reset --hard HEAD^

# 回退到前3次提交之前，以此类推，回退到n次提交之前
$ git reset --hard HEAD~3

# 回退到指定版本
$ git reset --hard commit_id
```

> 忽略本地更改

```shell script
$ git fetch --all
$ git reset --hard
$ git pull
```

> 查看两个版本差异的文件

```shell script
$ git diff acbf2c464 233054820 --name-only
```

> 打包两个版本差异的文件

```shell script
$ git diff acbf2c464 233054820 --name-only | xargs zip /tmp/diff.zip
```

> 用于临时保存和回复修改 [`stash`](https://git-scm.com/docs/git-stash)

```shell script
# 暂时存储修改的文件
$ git stash

# 查看存储区
$ git stash list

# 恢复暂存文件
$ git stash pop
```

