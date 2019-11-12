# 慢查询

### 查看
```
$ show variables like '%slow%'
```

### 开启日志
```
$ set global slow_query_log='ON'
```


### 设置时间
```
$ show variables like '%long_query_time%'
$ set global long_query_time=1
$ set session long_query_time=1
```


### 分析日志
`mysqldumpslow` 命令


### 显示当前慢查询
```
$ show processlist;
$ kill [ID]
```