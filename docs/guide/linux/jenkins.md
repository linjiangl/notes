 # jenkins
 
 [帮助](http://www.cnblogs.com/miniren/category/792799.html)
 [Jenkins Gitlab持续集成打包平台搭建](http://skyseraph.com/2016/07/18/Tools/Jenkins%20Gitlab%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E6%89%93%E5%8C%85%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BA/)
 [构建/回滚](https://blog.csdn.net/leo15561050003/article/details/79818176)
 
 
 > 服务配置
 
 ```
 
 
 // Invoke Phing targets
 
 // Targets:
 tar
 
 // Properties:
 
 buildid=${BUILD_ID}
 buildnumber=${BUILD_NUMBER}
 
 // ssh-server
 
 // Source files
 
 dist/source-service.${BUILD_NUMBER}.${BUILD_ID}.tar.gz
 
 // Remove prefix
 
 dist/
 
 // Remote directory
 
 /home/jenkins/source-service
 
 // Exec command
 
 cd /home/jenkins/source-service
 tar -zxf source-service.${BUILD_NUMBER}.${BUILD_ID}.tar.gz -C /www/wwwroot/score/
 chown -R www:www /www/wwwroot/score
 cd /www/wwwroot/score/
 sh test.sh
 git fetch --all
 git reset --hard origin/dev
 find /home/jenkins/source-service/ -mtime +3 -name "*.tar.gz" -exec rm -rf {} \;
 ```