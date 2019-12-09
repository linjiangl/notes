# 分支管理

## 查看

```bash
# 当前分支
$ git branch

# 所有分支,包括远程分支
$ git branch -a

```

## 创建+切换

```bash
# 创建分支
$ git branch <name>

# 切换分支
$ git checkout <name>
$ git switch <name>

# 创建+切换分支
$ git checkout -b <name>
$ git switch -c <name>

# 基于远程分支创建一个本地分支
$ git checkout -b <name> origin/<name>
```

## 拉取+推送

```bash
# 拉取
$ git pull

# 拉取指定分支
$ git pull origin master

# 推送
$ git push

# 本地分支关联上游分支
$ git push --set-upstream origin <name>
```


## 删除

```bash
# 本地分支
$ git branch -d <name>

# 远程分支
$ git push origin -d <name>
```

## 合并

```bash
# 合并某分支到当前分支
$ git merge <name>
```

注意: 
1. 合并分支之前, 先拉取两个分支
2. 先当前分支合并主分支
3. 再主分支合并当前分支

