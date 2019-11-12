# Pub/Sub

[帮助](https://redis.io/topics/pubsub)

### 基本命令

> 订阅
    
    # 订阅某频道
    SUBSCRIBE channel [channel ...]
    
    # 订阅,支持通配符
    PUNSUBSCRIBE [pattern [pattern ...]]
    
    # 取消
    UNSUBSCRIBE [channel [channel ...]]
    

> 发布
    
    # 向某频道发送消息
    PUBLISH channel message
    
    # 支持通配符
    PSUBSCRIBE pattern [pattern ...]
    
