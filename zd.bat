@echo off
color 02 
echo babelת�뿪ʼ
echo ������·�����ļ���,���磺xxx/xx.js
set /p pn=
	
babel src/%pn% --watch --out-file dist/%pn%

echo ת�����