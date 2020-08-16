# 常见问题

> IDE命令工具设置成git bash时, git log 乱码:

找到C:\Program Files\Git\etc\bash.bashrc文件, 打开在末尾加上:

```
# support chinese
export LANG="zh_CN.UTF-8"
export LC_ALL="zh_CN.UTF-8"
```