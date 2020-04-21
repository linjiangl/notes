# Gitlab

[nginx配置](https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/doc/settings/nginx.md#setting-the-nginx-listen-port)

[安装](https://about.gitlab.com/installation/)

[汉化包1](https://gitlab.com/larryli/gitlab)
[汉化包2](https://gitlab.com/xhang/gitlab)

[gitlab-ci-yml](https://gitlab.com/gitlab-org/gitlab-ci-yml/tree/master)

> 安装
下载 `.rpm` 文件, `rz` 到你的服务器

```
$ yum -y install lrzsz
$ rpm -i gitlab-ee-9.5.2-ee.0.el6.x86_64.rpm 

$ sudo gitlab-ctl reconfigure

$ gitlab-ctl start|stop|status|restart
```

> [卸载](https://www.cnblogs.com/shansongxian/p/6678110.html)

```
sudo gitlab-ctl stop
sudo rpm -e gitlab-ee
find / -name gitlab|xargs rm -rf

# 在卸载gitlab然后再次安装执行sudo gitlab-ctl reconfigure的时候往往会出现：ruby_block[supervise_redis_sleep] action run
sudo systemctl restart gitlab-runsvdir
```

> 配置

```
$ vim /etc/gitlab/gitlab.rb

 external_url 'http://git.xx.com'

 nginx['listen_addresses'] = ['*', '[::]']
 
 nginx['listen_port'] = 8191
 
 unicorn['port'] = 8192
 
$ sudo gitlab-ctl reconfigure 

```
访问地址: `http://git.xx.com:8191`


> [手动导出汉化补丁包汉化](https://gitlab.com/xhang/gitlab)

请先使用官方包安装或升级完成，确认当前版本。

```bash
sudo cat /opt/gitlab/embedded/service/gitlab-rails/VERSION
```

假设当前版本为 `v9.0.0`，并确认汉化版本库是否包含该版本的汉化标签(`-zh`结尾)，也就是是否包含 `v9.0.0-zh`。

如果版本相同，首先在本地 `clone` 仓库。

```bash
# 克隆汉化版本库
git clone https://gitlab.com/xhang/gitlab.git
# 如果已经克隆过，则进行更新
git fetch
```

然后比较汉化标签和原标签，导出 patch 用的 diff 文件。

```bash
# 导出9.0.0 版本的汉化补丁
git diff v9.0.0 v9.0.0-zh > ../9.0.0-zh.diff
```

然后上传 `9.0.0-zh.diff` 文件到服务器。

```
# 停止 gitlab
sudo gitlab-ctl stop
sudo patch -d /opt/gitlab/embedded/service/gitlab-rails -p1 < 9.0.0-zh.diff
```

确定没有 `.rej` 文件，重启 GitLab 即可。

```bash
sudo gitlab-ctl start
```

执行重新配置命令

```bash
sudo gitlab-ctl reconfigure
```

如果汉化中出现问题，请重新安装 GitLab（注意备份数据）。