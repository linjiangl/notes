# 流水线构建流程

## 构建脚本

```
node {
    def remote = [:]
    remote.name = 'local'
    remote.host = '192.168.168.23'
    remote.user = 'root'
    remote.password = '123456'
    remote.allowAnyHosts = true
    stage('Remote SSH') {
        writeFile file: 'abc.sh', text: 'cd /home/w7/work/build && ./shop/test_server.sh'
        sshScript remote: remote, script: "abc.sh"
    }
}
```