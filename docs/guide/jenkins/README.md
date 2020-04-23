# 安装配置
[帮助](https://github.com/jenkinsci/docker)

## docker-compose.yml

```
jenkins:
    image: jenkins/jenkins:latest
    container_name: jenkins
    restart: always
    ports:
      - '8000:8080'
      - '50000:50000'
    volumes:
      - /var/jenkins_home:/var/jenkins_home:rw
    networks:
      - default
```

## 插件

> BlueOcean

> SSH Pipeline Steps
