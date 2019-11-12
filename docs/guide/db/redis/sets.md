# Sets

```
# 往集合key中增加元素
sadd key value [value ...]

# 删除集合中集为value等的元素
# 返回值: 忽略不存在的元素后,真正删除掉的元素的个数
srem key value [value ...]

# 返回并删除集合中key中1个随机元素
spop key

# 返回集合key中,随机的1个元素
srandmember key

# 判断value是否在key集合中, 是返回1,否返回0
sismember key value

# 返回集中中所有的元素
smembers key

# 返回集合中元素的个数
scard key

# 把source中的value删除,并添加到dest集合中
smove source dest value

# 求出key1 key2 key3 三个集合中的交集,并返回
sinter key1 key2 key3

redis 127.0.0.1:6379> sadd s1 0 2 4 6
(integer) 4
redis 127.0.0.1:6379> sadd s2 1 2 3 4
(integer) 4
redis 127.0.0.1:6379> sadd s3 4 8 9 12
(integer) 4
redis 127.0.0.1:6379> sinter s1 s2 s3
1) "4"
redis 127.0.0.1:6379> sinter s3 s1 s2
"4"

# 求出key1 key2 key3 三个集合中的交集,并赋给dest
sinterstore dest key1 key2 key3


# 求出key1 key2 keyn的并集
sunion key1 key2.. Keyn

# 求出key1与key2 key3的差集
sdiff key1 key2 key3 

```



### 有序集合

> 添加元素

```
zadd key score1 value1 score2 value2 ..

redis 127.0.0.1:6379> zadd stu 18 lily 19 hmm 20 lilei 21 lilei
(integer) 3

```

> 删除集合中的元素

```
zrem key value1 value2 ..
```

> 返回元素个数

```
zcard key
```

> 返回[min,max] 区间内元素的数量
```
zcount key min max
```

> 按照socre来删除元素,删除score在[min,max]之间的

```
zremrangebyscore key min max

redis 127.0.0.1:6379> zremrangebyscore stu 4 10
(integer) 2
redis 127.0.0.1:6379> zrange stu 0 -1
1) "f"
```

>  按排名删除元素,删除名次在[start,end]之间的

```
zremrangebyrank key start end

redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREMRANGEBYRANK myzset 0 1
(integer) 2
redis> ZRANGE myzset 0 -1 WITHSCORES
1) "three"
2) "3"
```

> 查询member的排名(升续 0名开始)

```
zrank key member

redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANK myzset "three"
(integer) 2
redis> ZRANK myzset "four"
(nil)

```

>  查询 member的排名(降续 0名开始)

```
zrevrank key memeber

redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANK myzset "one"
(integer) 2
redis> ZREVRANK myzset "four"
(nil)

```


> 把集合排序后,返回名次[start,stop]的元素

```
ZRANGE key start stop [WITHSCORES]

redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZRANGE myzset 0 -1
1) "one"
2) "two"
3) "three"
redis> ZRANGE myzset 2 3
1) "three"
redis> ZRANGE myzset -2 -1
1) "two"
2) "three"
```

> 把集合降序排列,取名字[start,stop]之间的元素

```
zrevrange key start stop

redis> ZADD myzset 1 "one"
(integer) 1
redis> ZADD myzset 2 "two"
(integer) 1
redis> ZADD myzset 3 "three"
(integer) 1
redis> ZREVRANGE myzset 0 -1
1) "three"
2) "two"
3) "one"
redis> ZREVRANGE myzset 2 3
1) "one"
redis> ZREVRANGE myzset -2 -1
1) "two"
2) "one"
```

> 集合(升续)排序后,取score在[min,max]内的元素, 并跳过 offset个, 取出N个

```
zrangebyscore  key min max [withscores] limit offset N

redis 127.0.0.1:6379> zadd stu 1 a 3 b 4 c 9 e 12 f 15 g
(integer) 6
redis 127.0.0.1:6379> zrangebyscore stu 3 12 limit 1 2 withscores
1) "c"
2) "4"
3) "e"
4) "9"
```




> 求key1-keyn的交集

求key1,key2的交集,key1,key2的权重分别是 weight1,weight2
聚合方法用: sum |min|max
聚合的结果,保存在dest集合内

注意: weights ,aggregate如何理解?
答: 如果有交集, 交集元素又有socre,score怎么处理?
 Aggregate sum->score相加   , min 求最小score, max 最大score

另: 可以通过weigth设置不同key的权重, 交集时,socre * weights

```
zinterstore destination numkeys key1 [key2 ...] 
[WEIGHTS weight [weight ...]] 
[AGGREGATE SUM|MIN|MAX]

详见下例
redis 127.0.0.1:6379> zadd z1 2 a 3 b 4 c
(integer) 3
redis 127.0.0.1:6379> zadd z2 2.5 a 1 b 8 d
(integer) 3
redis 127.0.0.1:6379> zinterstore tmp 2 z1 z2
(integer) 2
redis 127.0.0.1:6379> zrange tmp 0 -1
1) "b"
2) "a"
redis 127.0.0.1:6379> zrange tmp 0 -1 withscores
1) "b"
2) "4"
3) "a"
4) "4.5"
redis 127.0.0.1:6379> zinterstore tmp 2 z1 z2 aggregate sum
(integer) 2
redis 127.0.0.1:6379> zrange tmp 0 -1 withscores
1) "b"
2) "4"
3) "a"
4) "4.5"
redis 127.0.0.1:6379> zinterstore tmp 2 z1 z2 aggregate min
(integer) 2
redis 127.0.0.1:6379> zrange tmp 0 -1 withscores
1) "b"
2) "1"
3) "a"
4) "2"
redis 127.0.0.1:6379> zinterstore tmp 2 z1 z2 weights 1 2
(integer) 2
redis 127.0.0.1:6379> zrange tmp 0 -1 withscores
1) "b"
2) "5"
3) "a"
4) "7"

```