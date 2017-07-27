// let命令声名变量，引入的块级作用域(var 声明没有{}局限)
let a=100;
{
	let a=200;
}
console.log(a);

var b=100;
{
	var b=200;
}
console.log(b);

//let声明不存在变量提升，必须先声明再使用(var会)
// console.log(num);//报错undefined
// let num=100;
let funArr = [];
for(let i=0;i<10;i++){
	funArr[i]=function () {
		console.log(i);
	}
}
funArr[7]();//打印7
//let不允许在相同作用域内，重复声明同一个变量。
// let parmA=100;
// let parmA=1000;
// console.log(parmA);

// IIFE 写法
(function () {
  var tmp = 99;
  
}());

// 块级作用域写法
{
  let tmp = 99;
  
}
//const声明一个只读的常量。一旦声明，常量的值就不能改变。
const constParam = 100;
// constParam=200;//报错
const constObj = {
	a:100,
	b:1000
}
constObj.a='const声明的对象可以改变属性';
console.log(constObj);

const constArr = [1,2,3,4,5];
constArr[0]='const声明的数组可以改变属性';
console.log(constArr);

/*
*顶层对象，在浏览器环境指的是window对象，
*在Node指的是global对象。ES5之中，
*顶层对象的属性与全局变量是等价的。
*ES6为了改变这一点，一方面规定，为了保持兼容性，
*var命令和function命令声明的全局变量，依旧是顶层对象的属性；
*另一方面规定，let命令、const命令、class命令声明的全局变量，
*不属于顶层对象的属性。也就是说，从ES6开始，
*全局变量将逐步与顶层对象的属性脱钩。
*/

var ga = 1;
console.log(window.ga);// 1

let gb = 11;
console.log(window.gb );// undefined转成es5并不会undefined