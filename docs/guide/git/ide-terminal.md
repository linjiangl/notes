# GIT 日志乱码问题

> 解决方法:

找到C:\Program Files\Git\etc\bash.bashrc文件, 打开在末尾加上:

```
# support chinese
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```