# 激活

[jetbra](https://3.jetbra.in/)

### 1、 下载 `jetbra.zip`

### 2、 配置 `vmoptions` 

> windows 

在 `phpstorm64.exe.vmoptions` 文件中配置：

``` 
-Xms128m
-Xmx750m
-XX:ReservedCodeCacheSize=512m
-XX:+UseG1GC
-XX:SoftRefLRUPolicyMSPerMB=50
-XX:CICompilerCount=2
-XX:+HeapDumpOnOutOfMemoryError
-XX:-OmitStackTraceInFastThrow
-XX:+IgnoreUnrecognizedVMOptions
-XX:CompileCommand=exclude,com/intellij/openapi/vfs/impl/FilePartNodeRoot,trieDescend
-ea
-Dsun.io.useCanonCaches=false
-Dsun.java2d.metal=true
-Djbr.catch.SIGABRT=true
-Djdk.http.auth.tunneling.disabledSchemes=""
-Djdk.attach.allowAttachSelf=true
-Djdk.module.illegalAccess.silent=true
-Dkotlinx.coroutines.debug=off


--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED

-javaagent:D:\jetbra\ja-netfilter.jar=jetbrains
```

**`phpstorm64.exe.vmoptions` 文件位置：**

桌面->phpstrom 图标->右击->打开文件所在位置，对应目录下面找到 `phpstorm64.exe.vmoptions` 文件

> macOS or Linux

在 `phpstorm64.exe.vmoptions` 文件中配置：

``` 
-Xms128m
-Xmx750m
-XX:ReservedCodeCacheSize=512m
-XX:+UseG1GC
-XX:SoftRefLRUPolicyMSPerMB=50
-XX:CICompilerCount=2
-XX:+HeapDumpOnOutOfMemoryError
-XX:-OmitStackTraceInFastThrow
-XX:+IgnoreUnrecognizedVMOptions
-XX:CompileCommand=exclude,com/intellij/openapi/vfs/impl/FilePartNodeRoot,trieDescend
-ea
-Dsun.io.useCanonCaches=false
-Dsun.java2d.metal=true
-Djbr.catch.SIGABRT=true
-Djdk.http.auth.tunneling.disabledSchemes=""
-Djdk.attach.allowAttachSelf=true
-Djdk.module.illegalAccess.silent=true
-Dkotlinx.coroutines.debug=off


--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED

-javaagent:/home/jetbra/ja-netfilter.jar=jetbrains
```

## 3. 执行安装命令

```
macOS or Linux: execute "scripts/install.sh"
Windows: double click to execute "scripts\install-current-user.vbs" (For current user)
                                 "scripts\install-all-users.vbs" (For all users)
```