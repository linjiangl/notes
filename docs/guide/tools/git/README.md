# 安装配置

[文档](https://git-scm.com/book/zh/v2)
[下载](https://git-scm.com/downloads)
[参考](https://segmentfault.com/a/1190000002645623)

### 1. 设置Git的user name和email：(如果是第一次的话)

```
$ git config --global user.name "linjiangl"
$ git config --global user.email "8257796@qq.com"

# 查看
$ git config --list
user.name=linjiangl
user.email=8257796@qq.com
core.repositoryformatversion=0
core.filemode=true
core.bare=false
core.logallrefupdates=true
```

### 2. 生成密钥

* 连续3个回车。如果不需要密码的话。
* 最后得到了两个文件：id_rsa和id_rsa.pub。

```
$ ssh-keygen -t rsa -C "8257796@qq.com"

Generating public/private rsa key pair.
Enter file in which to save the key (/root/.ssh/id_rsa):
Created directory '/root/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /root/.ssh/id_rsa.
Your public key has been saved in /root/.ssh/id_rsa.pub.
The key fingerprint is:
02:df:d9:83:e1:d9:84:05:2f:63:14:a2:9c:da:fc:8d 8257796@qq.com
The key's randomart image is:
+--[ RSA 2048]----+
|      . +o.      |
|   . o o +       |
|    =   * o      |
|   + o + @       |
|  . o o S +      |
|     . +   .     |
|      E .        |
|                 |
|                 |
+-----------------+

[root@localhost html]# ll /root/.ssh/
总用量 12
-rw------- 1 root root 1671 12月 14 00:43 id_rsa
-rw-r--r-- 1 root root  396 12月 14 00:43 id_rsa.pub
-rw-r--r-- 1 root root  407 12月 14 00:49 known_hosts
```


### 3. 添加密钥到ssh-agent

``` 
[root@localhost html]# eval "$(ssh-agent -s)"
Agent pid 1714
[root@localhost html]# ssh-add ~/.ssh/id_rsa
```

### 4. 设置GIT (SSH keys)

* 登陆->头像->Settings->SSH and GPG keys->SSH keys->new SSH key

* 设置title, key

``` 
# key值
$ cat /root/.ssh/id_rsa.pub
ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAxsXohe/2RSgDgoWlZi5NNH4QUSEPK8PkAqSz3FHvd+SXGeV0rqlwnzrb9QLJ1lZnuUdurT02/FzNZPeVoftH/Dd6ybvZ94tIxhuXDuPT5rT8K9eTp1Tq+2eCV73WYv8AdQ2haSRrMrV41Bxy5T/YDDu/oe41cxQ+lkXich39+vPn794e71FU20d+SlQOKbBK5gx7ZCgN0ziJV9O4tlSV85yV8XioUS0gn0YOuR2p8rSxrZzYsHjeNH/AyitTNQJ6ijQFJcNfccP3y3SIhOypUoqfwuaPzQz9lLGpHrF+ZPysV7yGFsk10JteRuMrOy4O4e5aNCxw/TY/QdyhEHmscw== 8257796@qq.com
```


### 5. 测试
``` 
# 看到提示输入yes, 显示你的用户名说明成功
$ ssh -T git@github.com
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
Hi linjiangl! You've successfully authenticated, but GitHub does not provide shell access.
```

### 6. clone慢, [ip查询](https://www.ipaddress.com/)
```
# hosts直接指向
192.30.253.112  github.com
151.101.113.194 github.global.ssl.fastly.net

# 刷新dns
sudo dscacheutil -flushcache
```