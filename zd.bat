@echo off
color 02 
echo babelת�뿪ʼ
echo ������·�����ļ���,���磺xxx/xx.js
set /p pn=
	
babel src/%pn% -o dist/%pn%

echo ת�����