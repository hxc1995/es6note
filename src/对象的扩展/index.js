
//对象的扩展

(function () {

	//直接存入变量和函数
	let name = "aa";
	let obj = { name }

	console.log(obj);

	function fun(x, y){
		return {x, y}
	}

	let obj2 =  fun(100, 200);
	console.log(obj2); //{x:100, y:200}

	let obj3={
		add(){
			return this.x + this.y
		},
		x: 100,
		y: 200
	}

	console.log(obj3.add());
		
})();

//属性名表达式
(function () {
	let obj = {};
	//方法一标识符做属性名
	obj.foo = true;

	// 方法二,表达式做属性名
	obj['a' + 'bc'] = 123;

	var lastWord = 'last word';

	var a = {
	  'first word': 'hello',
	  [lastWord]: 'world'
	};

	console.log(a);

	// Object.is(value1, value2) // 比较两个值是否相等
	console.log(+0 === -0); //true
	console.log(NaN === NaN); // false

	console.log(Object.is(+0, -0)); // false
	console.log(Object.is(NaN, NaN)); // true
})();

//Object.assign() 将其他对象的属性赋值到目标对象上， saaign是浅拷贝
(function () {
	var target = { a: 1 };

	var source1 = { b: {v:1} };
	var source2 = { c: 3 };

	//属性同名会覆盖掉前面的
	Object.assign(target, source1, source2);

	source1.b.v=1000;
	console.log(target); // {a:1, b: {v:1000}, c:3}
	
	// console.log(Object.assign(1));


	//若传入的是数值，和布尔值，就不会加入目标对象
	//字符串会以数组的形式加入目标对象
	var v1 = 'abc';
	var v2 = true;
	var v3 = 10;

	var obj = Object.assign({}, v1, v2, v3);
	console.log(obj); // { "0": "a", "1": "b", "2": "c" }

	// Object.assign可以用来处理数组，但是会把数组视为对象
	console.log(Object.assign([1, 2, 3], [4, 5])); //[4, 5, 3]
})();

//属性的可枚举和遍历
(function () {
	/*
（1）for...in
     for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
（2）Object.keys(obj)
     Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）。

（3）Object.getOwnPropertyNames(obj)
     Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，
     但是包括不可枚举属性）。

（4）Object.getOwnPropertySymbols(obj)
     Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性。

（5）Reflect.ownKeys(obj)
     Reflect.ownKeys返回一个数组，包含对象自身的所有属性，不管属性名是 Symbol 或字符串，
     也不管是否可枚举
	*/
	let obj = { foo: 123 };
	console.log(Object.getOwnPropertyDescriptor(obj, 'foo')); // 获取属性的描述对象

	let obj1 = {
		a: 100,
		b: 200,
		c: 300
	}

	for (var p in obj1) {
		console.log(p);
	}

	console.log(Object.getOwnPropertyNames(obj1));

	let {keys, values, entries} = Object;

	console.log(keys(obj1));
	console.log(values(obj1));
	console.log(entries(obj1));


})()