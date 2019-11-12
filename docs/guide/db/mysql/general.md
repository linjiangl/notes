# 常用命令

## 用户授权

```
create database jira character set utf8;
grant all on jira.* to jira@'%' identified by 'jira';
flush privileges;
```

## 访问限制

```
UPDATE `user` SET Host='%' WHERE User='root';
FLUSH PRIVILEGES;
```

## 批量插入

```
把数据都保存到文件中, 通过load函数批量导入数据, 文件格式如下:
    '1','2013-12-12'
    '2','2013-12-12'
Mysql 语句如下:
   LOAD DATA INFILE 'D:/www/aa.txt'
   INTO TABLE tableName CHARACTER SET UTF8 
   FIELDS TERMINATED BY ',' ENCLOSED BY '\'' 
   LINES TERMINATED BY '\r\n'(id , addtime);
```

## 批量更新

```
### 通过 case when then 函数进行, sql如下

UPDATE tableName
SET
num = CASE id
	WHEN 1 THEN 3
	WHEN 2 THEN 4
	WHEN 3 THEN 5
END,
title = CASE id
	WHEN 1 THEN 'New Title 1'
	WHEN 2 THEN 'New Title 2'
	WHEN 3 THEN 'New Title 3'
END
WHERE id IN (1,2,3)

###注意: where 条件一定要加, 不然修改的是整个表的列
```