# Strings

> 基本操作

```
# 设置
set key value [ex 秒数] / [px 毫秒数]  [nx] /[xx]

# 获取
get key

# 设置多个key
mset key1 key2 ...

# 获取多个key
mget key1 key2 ...
```

> 数值操作

```
# 加1
incr key
incrby key number 
incrbyfloat key floatnumber 
# 减1
decr key
decrby key number
```

> 修改指定偏移量的字符

```
setrange key offset value

# 存在的key
127.0.0.1:6379> get test1
"key"
127.0.0.1:6379> setrange test1 2 x
(integer) 3
127.0.0.1:6379> get test1
"kex"

# 不存在的key
127.0.0.1:6379> setrange test3 2 x
(integer) 3
127.0.0.1:6379> get test3
"\x00\x00x"
```

> 获取指定范围的字符

```
getrange key start end 

127.0.0.1:6379> set range 'hello word' ex 3600
OK
127.0.0.1:6379> getrange range 5 2
""
127.0.0.1:6379> getrange range 5 7
" wo"
127.0.0.1:6379> getrange range 5 100
" word"
127.0.0.1:6379> getrange range -3 -1
"ord"
127.0.0.1:6379> getrange range -3 100
"ord"
```

> 把value追加到可以的原值上

```
append key value
```

> 获取并返回旧值,设置新值

```
getset key newvalue
```

> 位运算

```
# 设置offset对应二进制位上的值
setbit key offset value

# 获取offset对应的值
getbit key offset

# 对key1,key2..keyN作operation,并将结果保存到 destkey 上
bitop operation destkey key [key ...]
```

