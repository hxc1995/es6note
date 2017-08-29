// 1、数组的解构赋值--------------------------------------------
// function aa({a:aa,b:bb}) {
// 	console.log(arguments);
// 	console.log('aaaaaaaaa');
// 	console.log(aa);
// 	console.log(bb);
// }

// aa({a:100,b:1000});

(function(){
	let [a,b,c]=[1,2,3];
	console.log('a',a);
	console.log('b',b);
	console.log('c',c);

	let [foo, [[bar], baz]] = [1, [[2], 3]];

	let [ , , third] = ["foo", "bar", "baz"];
	// third // "baz"

	// let [x, , y] = [1, 2, 3];
	// x // 1
	// y // 3

	let [head, ...tail] = [1, 2, 3, 4];
	console.log('head',head); // 1
	console.log('tail',tail); // [2, 3, 4]

	let [x, y, ...z] = ['a'];
	console.log('x',x); // "a"
	console.log('y',y); // undefined
	console.log('z',z); // []
	//如果解构不成功，变量的值就等于undefined。

	//如果不完全解构，还是可以成功
	//let [x, y] = [1, 2, 3];
	//x // 1
	//y // 2

	//如果等号的右边不是数组,或者严格地说，不是可遍历的结构iterator,那么将会报错


	//对于 Set 结构，也可以使用数组的解构赋值。
	let [sx, sy, sz] = new Set(['a', 'b', 'c']);
	console.log(sx);

	console.log('指定默认值---------------------');

	let[fa=12,fb]=[100,100];
	console.log('fa',fa);//100
	console.log('fb',fb);//100

	//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
	//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
	//可以给定默认值，若严格等于undefined,默认值才有效，不然被覆盖
	let[fc=12,fd,fe=12]=[undefined,100,null];
	console.log('fc',fc);//12
	console.log('fd',fd);//100
	console.log('fe',fe);//null
})();//此处若不加分号，后面的会报错，因为()不自动识别加分号

//2、对象的解构赋值------------------------------------------------

(function(){
	let { obja,objb} = { objb:'b',obja:'a'};
	console.log('obja',obja);//a
	console.log('objb',objb);//b

	let {objfoo:ofoo,objbar:obar} = { objfoo:'foo',objbar:'bar'};
	//objfoo和objbar只是匹配模式，真正赋值的是后面的ofoo,obar
	//相当于去找两个对象的共同属性
	console.log('foo',ofoo);//off
	console.log('obar',obar);//bar
	// console.log(objfoo);//not defined
	// console.log(objbar);//not defined
	//和数组一样严格等于undefined默认值才有效，也可以给定默认值，
	//结构失败变量值等于undefined

	// let {foo: {bar}} = {baz: 'baz'};
	// 报错,因为foo没匹配到所以后面的至为undefined,所以娶不到bar属性


	// 错误的写法，因为会将{}看成代码块
	// let x;
	// {x} = {x: 1};
	// ({x} = {x: 1};)//得用括号包住

	let { log, sin, cos , min} = Math;
	//可以将Math对象的方法解构出来
	console.log('min',min(1,10));


	//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
	let numArr=[1,2,3,4,5];
	let {0: first,[numArr.length-1]: last}=numArr;
	console.log('first',first);
	console.log('last',last);
})();


//3字符串的解构赋值

(function(){
	const [a,b,c,d,e,f]='hello';
	console.log('a',a);//h
	console.log('b',b);//e
	console.log('C',c);//l
	console.log('d',d);//l
	console.log('e',e);//o
	console.log('f',f);//undefined

	//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
	let {length:len} = 'hello';
	console.log(len);//5

	let {length:lena} = [1,2,3,4,5,6,7,8,9,0];
	console.log('数组的length',lena);//10
})();

// 4、数值和布尔值的解构赋值
(function(){
	let {toString: s} = 123;
	s === Number.prototype.toString // true

	let {toString: ss} = true;
	ss === Boolean.prototype.toString // true
	/*
	*上面代码中，数值和布尔值的包装对象都有toString属性，
	*因此变量s都能取到值。解构赋值的规则是，
	*只要等号右边的值不是对象或数组，
	*就先将其转为对象。由于undefined和null无法转为对象，
	*所以对它们进行解构赋值，都会报错。
	*/
	let { prop: x } = undefined; // TypeError
	let { prop: y } = null; // TypeError
});

//5函数参数的解构赋值
(function () {

	console.log('函数参数的解构赋值-------------');

	function fun1([a,b,c=100,d=1000]) {
		console.log('a',a);//1
		console.log('b',b);//2
		console.log('c',c);//120
		console.log('d',d);//1000
	}

	fun1([1,2,120,undefined])

	function fun2({x=0,y=0} = {},b) {
		return [x,y,b]
	}
	console.log(fun2({x:1,y:2},100));
	console.log(fun2({x:1}));
	console.log(fun2({}));

	function move({x, y} = { x: 0, y: 0 }) {
		// 此时是让{x, y}默认等于{ x: 0, y: 0 }，若穿入了参数就
		//不等于{ x: 0, y: 0 }
	  return [x, y];
	}

	console.log(move({x: 3, y: 8})); // [3, 8]
	console.log(move({x: 3})); // [3, undefined]
	console.log(move({})); // [undefined, undefined]
	console.log(move()); // [0, 0]

	function fun3(a=2) {
		console.log(a);
	}
	fun3(3);//3
	fun3();//2

	[1, undefined, 3].map((x = 'yes') => x);
	//为undefined时默认值生效
	// [ 1, 'yes', 3 ]

	
})();

//6、用途
(function () {
	let x=1;
	let y=2;
	[x,y] = [y,x];
	console.log('x',x,'y',y);


	function example(){
		return [1,23,4];
	}
	let [a,b,c]=example();
	console.log('a',a);
	console.log('b',b);
	console.log('c',c);
	function objex() {
		return {
			foo:100,
			bar:200
		}
	}

	let {foo:fo,bar:ba} = objex();
	console.log('fo',fo);
	console.log('ba',ba);


	//解构赋值可以方便地将一组参数与变量名对应起来。
	// 参数是一组有次序的值
	function f([x, y, z]) {}
	f([1, 2, 3]);

	// 参数是一组无次序的值
	function f({x, y, z}) {}
	f({z: 3, y: 2, x: 1});


	//提取json数据

	let JSONdata = {
		id:1,
		name:'hhh'
	}


	let { id , name } =JSONdata;
	console.log('id',id);
	console.log('name',name);

	//加载模块指定需要哪些方法
	// const { SourceMapConsumer, SourceNode } = require("source-map");
}())