//1、字符串循环遍历
for(let w of 'hello'){
	console.log(w);
}

let str='hello';
console.log(str.repeat(3));
//2、模板字符串
let data={
	name:'小明',
	age:100
}
//传统写法:
//let domstr= '<h1>'+data.name+'</h1>'+'<p>'+data.age+'</p>';
//es6的模板字符串写法,用反引号标识是模板字符串`
let domstr = `<h1>${data.name}</h1><p>${data.age}</p>`;
document.getElementById('con').innerHTML=domstr;

// 普通字符串
let stra = `this is normal string`;

// 多行字符串,模板字符串的缩进换行都会被保留输出
let strb = `dasdasdasd
aaaaaaaaaaaa
`;

// 字符串中嵌入变量

let strc=`姓名 ${data.name}, 年龄 ${data.age}`;
console.log(stra);
console.log(strb);
console.log(strc);

function strs() {
	return {name:'函数返回的值'}
}
//大括号中可以放入任何javascript表达式,包括函数
console.log(`${strs().name}`);


//模板字符串的嵌套

const tmpl=[
{name:'小明',age:12},
{name:'小王',age:13},
{name:'小李',age:14}
]
let strtmpl = `
	<ul>
		${tmpl.map(function(v){
			return `
				<li>
					名字：${v.name};
					年龄:${v.age}
				</li>
			`
		}).join('')}
	</ul>
`
console.log('strtmpl:',strtmpl);

//标签模板，指的是传给函数的参数是模板字符串，
//实际传入的是先将模板字符串解析成数组参数再传入函数中
alert `aaa`;

let a = 5;
let b = 10;

tag`Hello ${ a + b } ${ a } world ${ a * b }`;
// 等同于
// tag(['Hello ', '',' world ', ''], 15, 5,50);

function tag(param){
	console.log('param',param);
	console.log('----------');
	console.log('arguments',arguments);
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
