// 1、数组的结构赋值--------------------------------------------
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
	console.log('fa',fa);
	console.log('fb',fb);

	//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
	//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
	//可以给定默认值，若严格等于undefined,默认值才有效，不然被覆盖
	let[fc=12,fd,fe=12]=[undefined,100,null];
	console.log('fc',fc);
	console.log('fd',fd);
	console.log('fe',fe);
})();//此处若不加分号，后面的会报错，因为()不自动识别加分号

//2、对象的解构赋值------------------------------------------------

(function(){
	let { obja,objb} = { objb:'b',obja:'a'};
	console.log('obja',obja);//a
	console.log('objb',objb);//b

	let {objfoo:ofoo,objbar:obar} = { objfoo:'foo',objbar:'bar'};
	//objfoo和objbar只是匹配模式，真正赋值的是后面的ofoo,obar
	//相当于去找两个对象的共同属性
	console.log('foo',ofoo);
	console.log('obar',obar);
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
	console.log('a',a);
	console.log('b',b);
	console.log('C',c);
	console.log('d',d);
	console.log('e',e);
	console.log('f',f);
	console.log('length',length);

	//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
	let {length:len} = 'hello';
	console.log(len);

	let {length:lena} = [1,2,3,4,5,6,7,8,9,0];
	console.log('数组的length',lena);
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

	function fun1([a,b]) {
		console.log('a',a);
		console.log('b',b);
	}

	fun1([1,2])
})();