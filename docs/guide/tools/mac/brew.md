# 解决brew update慢

## 使用国内镜像

```bash
# 步骤一
$ cd "$(brew --repo)"
$ git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git
$ git pull origin master

# 步骤二
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git
$ git pull origin master

#步骤三
$ brew update -vvv
```

## 恢复默认镜像

```bash
$ cd "$(brew --repo)"
$ git remote set-url origin https://github.com/Homebrew/brew.git
$ git pull origin master
 
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://github.com/Homebrew/homebrew-core
$ git pull origin master
 
$ brew update -vvv
```