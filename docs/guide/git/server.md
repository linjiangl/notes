# 在服务器上搭建 Git

[学习](https://backlog.com/git-tutorial/cn/)

### 系统 centos 6.8

* 安装GIT
 
``` 
$ yum install git
```

* 创建一个git用户

``` 
# 创建一个git用户来运行git服务
$ adduser git

# 禁用shell登录
$ vim /etc/passwd
---
git:x:502:502::/home/git:/bin/bash
改成
git:x:502:502::/home/git:/usr/bin/git-shell
---

# 设置git用户的密码
$ passwd git
---------------
# 或者去除git密码
$ vim /etc/shadow
---
git:!!:17149:0:99999:7:::
改成
git::17149:0:99999:7:::
---

# 允许空密码登陆
$ vim /etc/ssh/sshd_config
---
#PermitEmptyPasswords no
改成
PermitEmptyPasswords yes
---

$ service sshd restart

```

* 初始化Git仓库

``` 
# 选择仓库目录, (/home/git)看上面
$ cd /home/git

# 创建一个空仓库
[root@localhost git]# sudo git init --bare test.git
[root@localhost git]# chown -R git:git test.git/


```

* 克隆
``` 
# 输入你的密码, 就是git设置的密码
# 没有设置密码, 看创建git用户部分
[root@localhost git]# git clone git@192.168.1.211:/home/git/test.git
Initialized empty Git repository in /usr/local/nginx/html/git/test/.git/
The authenticity of host '192.168.1.211 (192.168.1.211)' can't be established.
RSA key fingerprint is 5e:4f:65:d4:e3:3f:42:e5:30:a3:9f:57:d5:c9:ba:bc.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.1.211' (RSA) to the list of known hosts.
git@192.168.1.211's password:
remote: Counting objects: 3, done.
Receiving objects: 100% (3/3), 200 bytes, done.
remote: Total 3 (delta 0), reused 0 (delta 0)
[root@localhost git]# ll
总用量 8
drwxr-xr-x 6 nginx nginx 4096 12月 14 02:32 mdwiki
drwxr-xr-x 3 root  root  4096 12月 14 10:52 test

```

* 去除密码

``` 
# 每次操作都要密码, 所有要使用公钥
[root@localhost git]#  cd test
[root@localhost test]# ll
总用量 4
-rw-r--r-- 1 root root 2 12月 14 10:52 a.txt
[root@localhost test]# git pull
git@192.168.1.211's password:

# 把所有公钥导入到/home/git/.ssh/authorized_keys文件里
# 这里有坑, /home/git/ 为什么是这个目录
# 因为我仓库目录就是 /home/git, 如果不是改成你的仓库目录

[root@localhost .ssh]# cat /home/git/.ssh/authorized_keys
---
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDMWE5mI3HS7XGL9FHcFtwqp4llxbtmCvMgg1S/e9MgErwLNQNGhEpBmh6GZhLxqNkkYLD0i/C4BYGuXHZjIkOccVyD5p5XfhUTvNw/44AD9NDbKKpLJBfknuFjv7FZ3GmbVmhC5jStdUnTylz77cfxL0Da91aTcogWGce83r1v7Gm1ulQIJhizOQ2IBazCcbw8BMnTbAoQVkiNENt8hG9iIQnXxWjNaCwCertVPwxT279GQm8TtJJIKcyaBojek6IiCqZPpbcXcGpjdPXbv/TSAQJgqcXq1js6Y3ULfrjJyP8Ds3zvW1uOjnxTMD89rzxYISrfJ/3qNENBvRGMNXlZ jianglin@pp.cc
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAryqI7zMAvPTydr3ck6u4GiwolQi4GaU9dUXu8VsylaU9cmdVAYUzWchXymMvpgIzQSHrZHTgUS4CaOax6XiBEoIujeR8cqIhds2dtrhoMsNwxb/xxcy0aPpcBHggWT+InGXgLv1T/17zZg7xZQUOn6QTdk7dIh22N0e+lB4mnI/V7+NqiUH0LKIYKIvbBxTpfabI07ij5WE4VSQkKzOFowlAS1kXs3hWqq+4FHL+E6FtCHiNvKRycz0knozjqqznf/9eJNpjvXRb7Y2sbUhyE5Eyp+k1igxeBJRYtoXf4bEWT5QXMTf2yMOC9h7XGkl5yv+djok6Ssm+eicV3gNygw== 8257796@qq.com
---

#
```