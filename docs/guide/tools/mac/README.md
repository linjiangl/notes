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

### [打开Mac OSX原生的NTFS功能](http://www.tianwaihome.com/2014/07/mac-osx-ntfs.html)

很多同学都会为如何在Mac下写入NTFS格式的磁盘而感到困惑，因为默认情况下，把一个NTFS格式的磁盘插入到Mac里，是只能读不能写的。用起来肯定很郁闷，很多同学也因此把移动硬盘分成了双分区，一个NTFS，一个HFS。其实在Mac下完全是可以写NTFS磁盘的

一种十分简单的方法是用第三方工具，Paragon NTFS for MAC。使用这种工具，虽然说是简单了，可是麻烦事也不少，一来是这个工具是要收费的，当然有破解版，不过破解版里有没有被植入什么，那就没有人知道了，二是这个工具本身就不怎么稳定，容易丢数据不说，每次OSX一更新，必须得等软件更新后才能用，总之，用起来不放心啊。

其实呢，大家并不需要困惑，OSX其实原生就支持NTFS，最早在OSX 10.5的时候，是可以直接写入NTFS的盘的，后来由于微软的限制，把这个功能给屏蔽了，我们可以通过命令行手动打开这个选项。

