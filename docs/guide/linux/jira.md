# jira
[`jira下载`](https://www.atlassian.com/software/jira/download)
[`mysql驱动下载`](https://dev.mysql.com/downloads/connector/j/)
[`帮助`](https://www.cnblogs.com/kaola8023/p/6950481.html)

```
$ chmod +x atlassian-jira-software-7.8.1-x64.bin
$ ./atlassian-jira-software-7.8.1-x64.bin
This will install JIRA Software 7.8.1 on your computer.
OK [o, Enter], Cancel [c]
o
Choose the appropriate installation or upgrade option.
Please choose one of the following:
Express Install (use default settings) [1], Custom Install (recommended for advanced users) [2, Enter], Upgrade an existing JIRA installation [3]
2

Where should JIRA Software be installed?
[/opt/atlassian/jira]

Default location for JIRA Software data
[/var/atlassian/application-data/jira]

Configure which ports JIRA Software will use.
JIRA requires two TCP ports that are not being used by any other
applications on this machine. The HTTP port is where you will access JIRA
through your browser. The Control port is used to startup and shutdown JIRA.
Use default ports (HTTP: 8080, Control: 8005) - Recommended [1, Enter], Set custom value for HTTP and Control ports [2]
2
HTTP Port Number
[8080]
8291
Control Port Number
[8005]
8292
JIRA can be run in the background.
You may choose to run JIRA as a service, which means it will start
automatically whenever the computer restarts.
Install JIRA as Service?
Yes [y, Enter], No [n]
y
Details on where JIRA Software will be installed and the settings that will be used.
Installation Directory: /opt/atlassian/jira
Home Directory: /var/atlassian/application-data/jira
HTTP Port: 8291
RMI Port: 8292
Install as service: Yes
Install [i, Enter], Exit [e]
i
```

### 配置

> mysql
```
create database jira character set utf8;
grant all on jira.* to jira@'%' identified by 'jira';
grant all on jira.* to jira@'localhost' identified by 'jira';
flush privileges;
```

> 连接mysql
```
service jira stop
mv mysql-connector-java-5.1.44-bin.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
service jira start
```

> 破解 (jira 7.3.8)
```
$ cp -r atlassian-extras-3.2.jar /opt/atlassian/jira/atlassian-jira/WEB-INF/lib/
```