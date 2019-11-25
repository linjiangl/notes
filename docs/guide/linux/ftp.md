# ftp服务

[vsftpd](https://blog.csdn.net/aiynmimi/article/details/77012507)

[pure-ftp](https://www.centos.bz/2018/01/centos-7-%E5%AE%89%E8%A3%85pure-ftp/)

* 给/www/html/www 赋apache 权限
```
chown -R apache:apache /www/html/www
```
* 安装pure-ftpd
```
yum -y install pure-ftpd
```
* 下载配好的 pure-ftpd.conf
```
wget -P /etc/pure-ftpd/ http://www.kglan.com/soft/pure-ftp/pure-ftpd.conf
```
* 创建 虚拟用户 生成用户数据 db
```
pure-pw useradd www_user_name -u apache -d /www/html/www
pure-pw mkdb /etc/pure-ftpd/pureftpd.pdb
```
* 开启服务 设置开机启动
```
systemctl start  pure-ftpd.service
systemctl enable pure-ftpd.service
```