# 常用命令

## 初始化仓库

```bash
$ git init
$ git remote add origin git@gitee.com:linlingl/cms.git
$ git pull
$ git push --set-upstream origin master
```

## 查看两个版本差异的文件

```bash
$ git diff acbf2c464 233054820 --name-only
```

## 打包两个版本差异的文件

```bash
$ git diff acbf2c464 233054820 --name-only | xargs zip /tmp/diff.zip
```

## 忽略本地更改

```bash
$ git fetch --all
$ git reset --hard
$ git pull
```

## 忽略文件属性修改

```bash
# 全局:
$ git config --global core.fileMode false
# 当前:
$ git config core.fileMode false
```