# Keys

> 清空db

```
flushdb
flushall
```

> 删除1个或多个键, 不存在的key忽略掉,返回真正删除的key的数量

```
del key1 key2 ... Keyn
```

> 给key赋一个新的key名, 如果newkey已存在,则newkey的原值被覆盖

```
rename key newkey
```

> 给key赋一个新的key名, 发生修改返回1,未发生修改返回0

```
renamenx key newkey
```

> 移动key到某个db下, db默认0-15个

```
move key db
```

> 查询相应的key, pattern类似正则, 通配符有*,?,[]

```
keys pattern
127.0.0.1:6379> keys *
1) "key2"
2) "key1"
3) "test2"
4) "test1"
127.0.0.1:6379> keys key?
1) "key2"
2) "key1"
127.0.0.1:6379> keys key[1234]
1) "key2"
2) "key1"
```

> 返回随机key

```
randomkey
```

> 判断key是否存在, 返回0/1

```
exists key
```

> key对应值的类型: string, list, set, zset and hash

```
type key
```

> 查询key的生命周期, 返回秒数, -1: 永久有效; -2:不存在

```
ttl key
```

> 设置key的有效期

```
expire key
```

> 设置key为永久有效

```
persist key
```