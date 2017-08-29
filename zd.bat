@echo off
color 02 
echo babel转码开始
echo 请输入路径和文件名,例如：xxx/xx.js
set /p pn=
	
babel src/%pn% --watch --out-file dist/%pn%

echo 转码完成