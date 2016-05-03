::获得bat文件执行的路径
@pushd %~dp0

::请确保事先安装好nodeppt
@ nodeppt start -d ./ -p 8080
