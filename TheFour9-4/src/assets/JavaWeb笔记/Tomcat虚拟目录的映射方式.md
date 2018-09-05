# 在Tomcat中要实现虚拟目录的映射有三种

> 映射出来的是虚拟目录

## 1. 在`server.xml`文件的host元素中配置

> `server.xml`文件一般在`apache-tomcat-7.0.90\conf`目录下，如下在`Host`标签内添加了`Context`标签。其中`path`是映射后的目录，`docBase`是项目的真是目录

```xml
<Host name="localhost" appBase="webapps" unpackWARs="true" autoDeploy="true">
	<Context path="/JavaWebApp" docBase="D:\JavaWeb\JavaWebDemoProject" />
</Host>
```
访问方式：`http://localhost:9090/JavaWebApp/helloworld.jsp`

## 2. 让`Tomcat`服务器自动映射
> 直接将项目放到`apache-tomcat-7.0.90\webapps`目录下


直接访问如：`http://localhost:9090/JavaWebDemoProject/helloworld.jsp`

`localhost:9090`：为端口号

`JavaWebDemoProject`：项目名称

`helloworld.jsp`：项目中的文件名

## 3. 在`localhost`下添加`xml`文件

localhost目录：`apache-tomcat-7.0.90\conf\Catalina\localhost`

> 例如：添加一个`aa.xml`，里面写上内容（`<Context docBase="D:\JavaWeb\JavaWebDemoProject" />`）

访问：`http://localhost:9090/`aa`/helloworld.jsp`

`aa`便是xml的名称即：`aa.xml`


> ## 总结：在这三种方式中比较常见的是第二种方式，将项目直接放到Tomcat的`webapps`目录下