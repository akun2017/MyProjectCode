# 打包javaweb应用

> 在Java中，使用"jar"命令来对将JavaWeb应用打包成一个War包，jar命令的用法如下：

在命令行中打入`jar`

## 1. 将命令行的路径切换到需要打包的项目路径
> 切换到的路径是项目的那个层级的目录，不需要进入项目内部

## ２. 然后输入`jar -cvf JavaWebDemo1.war JavaWebDemo1`
> `JavaWebDemo1`项目的`文件夹`名

> `JavaWebDemo1.war`打包后的`文件`

项目打包完后直接将项目放置`apache-tomcat-7.0.90\webapps`路径中，然后运行Tomcat，Tomcat会自动解压`JavaWebDemo1.war`文件