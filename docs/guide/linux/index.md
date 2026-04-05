# Linux

## 连接用户管理

```bash
# 查看连接服务的用户
$ w
 09:10:49 up 33 days, 15:06,  8 users,  load average: 0.00, 0.04, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    60.174.231.73    09:04    1.00s  0.02s  0.00s w
root     pts/1    127.0.0.1        13Nov19 27days  0.02s  0.02s -bash
root     pts/3    127.0.0.1        13Nov19 27days  0.02s  0.02s -bash
root     pts/4    127.0.0.1        13Nov19 27days  0.02s  0.02s -bash
root     pts/5    127.0.0.1        13Nov19 27days  0.02s  0.02s -bash
root     pts/7    127.0.0.1        13Nov19 27days  0.02s  0.02s -bash
root     pts/6    127.0.0.1        13Nov19 27days  0.02s  0.02s -bash
root     pts/8    127.0.0.1        13Nov19 11days  0.02s  0.02s -bash

# 踢掉终端用户
$ pkill -kill -t pts/1
```

