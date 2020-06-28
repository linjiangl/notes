# 安装

> docker-compose.yml

```
version: "3"
services:
  jenkins:
    image: jenkins/jenkins:${JENKINS_VERSION}
    container_name: jenkins
    restart: always
    ports:
      - '${JENKINS_HOST_PORT}:8080'
      - '${JENKINS_SLAVE_AGENT_PORT}:50000'
    volumes:
      - ${JENKINS_HOME}:/var/jenkins_home:rw
    networks:
      - default

networks:
  default:
    driver: bridge
    ipam:
      config:
        - subnet: 172.24.0.0/16

```

> .env

``` 
#################### jenkins #####################
JENKINS_VERSION=latest
JENKINS_HOST_PORT=8000
JENKINS_SLAVE_AGENT_PORT=50000
JENKINS_HOME=./jenkins_home
```