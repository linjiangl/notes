# Lists

> 基本操作
```
# 插入值
lpush key value
lpop key

rpush key value
rpop key

# 计算链接表的元素个数
llen key

# 返回index索引上的值
lindex key index

#剪切key对应的链接,切[start,stop]一段,并把该段重新赋给key
ltrim key start stop
```

> 从key链表中删除 value值

* value > 0: 从头开始删除
* value < 0: 从未开始删除
* value = 0: 等于的都删除
```
lrem key count value
```

> 返回链表中[start ,stop]中的元素, 左数从0开始,右数从-1开始
```
lrange key start stop

127.0.0.1:6379[1]> lpush list 1
(integer) 1
127.0.0.1:6379[1]> lpush list 2
(integer) 2
127.0.0.1:6379[1]> lpush list 3
(integer) 3
127.0.0.1:6379[1]> lrange list 0 0
1) "3"
127.0.0.1:6379[1]> lrange list 0 1
1) "3"
2) "2"
```

> 在key链表中寻找’search’,并在search值之前|之后,插入value
```
linsert key after|before search value

redis> RPUSH mylist "Hello"
(integer) 1
redis> RPUSH mylist "World"
(integer) 2
redis> LINSERT mylist BEFORE "World" "There"
(integer) 3
redis> LRANGE mylist 0 -1
1) "Hello"
2) "There"
3) "World"
```

> 把source的尾部拿出,放在dest的头部

* 场景: task + bak 双链表完成安全队列

```
rpoplpush source dest

redis> RPUSH mylist "one"
(integer) 1
redis> RPUSH mylist "two"
(integer) 2
redis> RPUSH mylist "three"
(integer) 3
redis> RPOPLPUSH mylist myotherlist
"three"
redis> LRANGE mylist 0 -1
1) "one"
2) "two"
redis> LRANGE myotherlist 0 -1
1) "three"
```

> 等待弹出key的尾/头元素

* 场景: 长轮询Ajax,在线聊天时,能够用到
```
brpop key timeout
blpop key timeout
```