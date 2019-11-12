# 常见问题

### 环境变量与别名
```
$ vim ~/.bash_profile

# 别名
alias ll="ls -al"
alias cdweb="cd /usr/local/var/www/htdocs"

# 环境变量
PATH=$PATH:/usr/local/php/bin

export PATH

$ source ~/.bash_profile
```

### ulimit -n xx 错误
> 错误描述 

`bash: ulimit: open files: cannot modify limit: Invalid argument`

> 解决

```
$ echo kern.maxfiles=65536 | sudo tee -a /etc/sysctl.conf
$ echo kern.maxfilesperproc=65536 | sudo tee -a /etc/sysctl.conf
$ sudo sysctl -w kern.maxfiles=65536
$ sudo sysctl -w kern.maxfilesperproc=65536
$ ulimit -n 65536 65536 
```


### 无法修改文件
- 重启 Mac，按住 Command+R 键直到 Apple logo 出现，进入 Recovery Mode


- 点击 Utilities > Terminal

- 在 Terminal 中输入 `csrutil disable`，之后回车
```
csrutil disable
```

- 重启 Mac


### Mac OS X文件系统的附加属性@如何彻底删除
[帮助](http://www.jianshu.com/p/3782d73cb3e8)
- 查看
```
xattr -l hello.txt
```
- 删除
```
xattr -c *.txt
```
