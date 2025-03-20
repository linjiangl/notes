(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{354:function(t,n,s){"use strict";s.r(n);var e=s(25),a=Object(e.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"在服务器上搭建-git"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#在服务器上搭建-git"}},[t._v("#")]),t._v(" 在服务器上搭建 Git")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://backlog.com/git-tutorial/cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("学习"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"系统-centos-6-8"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统-centos-6-8"}},[t._v("#")]),t._v(" 系统 centos 6.8")]),t._v(" "),n("ul",[n("li",[t._v("安装GIT")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ yum install git\n")])])]),n("ul",[n("li",[t._v("创建一个git用户")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 创建一个git用户来运行git服务\n$ adduser git\n\n# 禁用shell登录\n$ vim /etc/passwd\n---\ngit:x:502:502::/home/git:/bin/bash\n改成\ngit:x:502:502::/home/git:/usr/bin/git-shell\n---\n\n# 设置git用户的密码\n$ passwd git\n---------------\n# 或者去除git密码\n$ vim /etc/shadow\n---\ngit:!!:17149:0:99999:7:::\n改成\ngit::17149:0:99999:7:::\n---\n\n# 允许空密码登陆\n$ vim /etc/ssh/sshd_config\n---\n#PermitEmptyPasswords no\n改成\nPermitEmptyPasswords yes\n---\n\n$ service sshd restart\n\n")])])]),n("ul",[n("li",[t._v("初始化Git仓库")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 选择仓库目录, (/home/git)看上面\n$ cd /home/git\n\n# 创建一个空仓库\n[root@localhost git]# sudo git init --bare test.git\n[root@localhost git]# chown -R git:git test.git/\n\n\n")])])]),n("ul",[n("li",[t._v("克隆")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 输入你的密码, 就是git设置的密码\n# 没有设置密码, 看创建git用户部分\n[root@localhost git]# git clone git@192.168.1.211:/home/git/test.git\nInitialized empty Git repository in /usr/local/nginx/html/git/test/.git/\nThe authenticity of host '192.168.1.211 (192.168.1.211)' can't be established.\nRSA key fingerprint is 5e:4f:65:d4:e3:3f:42:e5:30:a3:9f:57:d5:c9:ba:bc.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '192.168.1.211' (RSA) to the list of known hosts.\ngit@192.168.1.211's password:\nremote: Counting objects: 3, done.\nReceiving objects: 100% (3/3), 200 bytes, done.\nremote: Total 3 (delta 0), reused 0 (delta 0)\n[root@localhost git]# ll\n总用量 8\ndrwxr-xr-x 6 nginx nginx 4096 12月 14 02:32 mdwiki\ndrwxr-xr-x 3 root  root  4096 12月 14 10:52 test\n\n")])])]),n("ul",[n("li",[t._v("去除密码")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("# 每次操作都要密码, 所有要使用公钥\n[root@localhost git]#  cd test\n[root@localhost test]# ll\n总用量 4\n-rw-r--r-- 1 root root 2 12月 14 10:52 a.txt\n[root@localhost test]# git pull\ngit@192.168.1.211's password:\n\n# 把所有公钥导入到/home/git/.ssh/authorized_keys文件里\n# 这里有坑, /home/git/ 为什么是这个目录\n# 因为我仓库目录就是 /home/git, 如果不是改成你的仓库目录\n\n[root@localhost .ssh]# cat /home/git/.ssh/authorized_keys\n---\nssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDMWE5mI3HS7XGL9FHcFtwqp4llxbtmCvMgg1S/e9MgErwLNQNGhEpBmh6GZhLxqNkkYLD0i/C4BYGuXHZjIkOccVyD5p5XfhUTvNw/44AD9NDbKKpLJBfknuFjv7FZ3GmbVmhC5jStdUnTylz77cfxL0Da91aTcogWGce83r1v7Gm1ulQIJhizOQ2IBazCcbw8BMnTbAoQVkiNENt8hG9iIQnXxWjNaCwCertVPwxT279GQm8TtJJIKcyaBojek6IiCqZPpbcXcGpjdPXbv/TSAQJgqcXq1js6Y3ULfrjJyP8Ds3zvW1uOjnxTMD89rzxYISrfJ/3qNENBvRGMNXlZ jianglin@pp.cc\nssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAryqI7zMAvPTydr3ck6u4GiwolQi4GaU9dUXu8VsylaU9cmdVAYUzWchXymMvpgIzQSHrZHTgUS4CaOax6XiBEoIujeR8cqIhds2dtrhoMsNwxb/xxcy0aPpcBHggWT+InGXgLv1T/17zZg7xZQUOn6QTdk7dIh22N0e+lB4mnI/V7+NqiUH0LKIYKIvbBxTpfabI07ij5WE4VSQkKzOFowlAS1kXs3hWqq+4FHL+E6FtCHiNvKRycz0knozjqqznf/9eJNpjvXRb7Y2sbUhyE5Eyp+k1igxeBJRYtoXf4bEWT5QXMTf2yMOC9h7XGkl5yv+djok6Ssm+eicV3gNygw== 8257796@qq.com\n---\n\n#\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);