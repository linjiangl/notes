# 安装配置

### 安装mysql 8.0
[rpm](https://dev.mysql.com/downloads/repo/yum/)

```
// 下载源
$ wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm

// 设置源
$ rpm -ivh mysql80-community-release-el7-3.noarch.rpm

// 查看源
$ yum repolist all | grep mysql

// 编辑 mysql repo文件
$ vim /etc/yum.repos.d/mysql-community.repo 

// 安装
$ yum install mysql-community-server

// 启动
$ systemctl start mysqld.service

// 查看mysql的初始密码
$ cat /var/log/mysqld.log | grep password

// 重置mysql的密码
$ mysql -u root -p
$ ALTER USER 'root'@'localhost' IDENTIFIED BY '-A*&nmrZ#5CQ';

// 刷新
$ FLUSH PRIVILEGES;

// 开机启动
$ systemctl enable mysqld.service

```