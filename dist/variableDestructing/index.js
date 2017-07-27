'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 1、数组的结构赋值--------------------------------------------
(function () {
	var a = 1,
	    b = 2,
	    c = 3;

	console.log('a', a);
	console.log('b', b);
	console.log('c', c);

	var foo = 1,
	    bar = 2,
	    baz = 3;
	var _ref = ["foo", "bar", "baz"],
	    third = _ref[2];
	// third // "baz"

	// let [x, , y] = [1, 2, 3];
	// x // 1
	// y // 3

	var head = 1,
	    tail = [2, 3, 4];

	console.log('head', head); // 1
	console.log('tail', tail); // [2, 3, 4]

	var _ref2 = ['a'],
	    x = _ref2[0],
	    y = _ref2[1],
	    z = _ref2.slice(2);

	console.log('x', x); // "a"
	console.log('y', y); // undefined
	console.log('z', z); // []
	//如果解构不成功，变量的值就等于undefined。

	//如果不完全解构，还是可以成功
	//let [x, y] = [1, 2, 3];
	//x // 1
	//y // 2

	//如果等号的右边不是数组,或者严格地说，不是可遍历的结构iterator,那么将会报错


	//对于 Set 结构，也可以使用数组的解构赋值。

	var _ref3 = new Set(['a', 'b', 'c']),
	    _ref4 = _slicedToArray(_ref3, 3),
	    sx = _ref4[0],
	    sy = _ref4[1],
	    sz = _ref4[2];

	console.log(sx);

	console.log('指定默认值---------------------');

	var _ = 100,
	    fa = _ === undefined ? 12 : _,
	    fb = 100;

	console.log('fa', fa);
	console.log('fb', fb);

	//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
	//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
	//可以给定默认值，若严格等于undefined,默认值才有效，不然被覆盖
	var _undefined = undefined,
	    fc = _undefined === undefined ? 12 : _undefined,
	    fd = 100,
	    _ref5 = null,
	    fe = _ref5 === undefined ? 12 : _ref5;

	console.log('fc', fc);
	console.log('fd', fd);
	console.log('fe', fe);
})(); //此处若不加分号，后面的会报错，因为()不自动识别加分号

//2、对象的解构赋值------------------------------------------------

(function () {
	var _objb$obja = { objb: 'b', obja: 'a' },
	    obja = _objb$obja.obja,
	    objb = _objb$obja.objb;

	console.log('obja', obja); //a
	console.log('objb', objb); //b

	var _objfoo$objbar = { objfoo: 'foo', objbar: 'bar' },
	    ofoo = _objfoo$objbar.objfoo,
	    obar = _objfoo$objbar.objbar;
	//objfoo和objbar只是匹配模式，真正赋值的是后面的ofoo,obar
	//相当于去找两个对象的共同属性

	console.log('foo', ofoo);
	console.log('obar', obar);
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

	var log = Math.log,
	    sin = Math.sin,
	    cos = Math.cos,
	    min = Math.min;
	//可以将Math对象的方法解构出来

	console.log('min', min(1, 10));

	//由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
	var numArr = [1, 2, 3, 4, 5];
	var first = numArr[0],
	    last = numArr[numArr.length - 1];

	console.log('first', first);
	console.log('last', last);
})();

//3字符串的解构赋值

(function () {
	var _hello = 'hello',
	    _hello2 = _slicedToArray(_hello, 6),
	    a = _hello2[0],
	    b = _hello2[1],
	    c = _hello2[2],
	    d = _hello2[3],
	    e = _hello2[4],
	    f = _hello2[5];

	console.log('a', a);
	console.log('b', b);
	console.log('C', c);
	console.log('d', d);
	console.log('e', e);
	console.log('f', f);
	console.log('length', length);

	//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值
	var _hello3 = 'hello',
	    len = _hello3.length;

	console.log(len);

	var lena = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].length;

	console.log('数组的length', lena);
})();

// 4、数值和布尔值的解构赋值
(function () {
	var _2 = 123,
	    s = _2.toString;

	s === Number.prototype.toString; // true

	var _true = true,
	    ss = _true.toString;

	ss === Boolean.prototype.toString; // true
	/*
 *上面代码中，数值和布尔值的包装对象都有toString属性，
 *因此变量s都能取到值。解构赋值的规则是，
 *只要等号右边的值不是对象或数组，
 *就先将其转为对象。由于undefined和null无法转为对象，
 *所以对它们进行解构赋值，都会报错。
 */
	var x = undefined.prop; // TypeError

	var _ref6 = null,
	    y = _ref6.prop; // TypeError
});

//5函数参数的解构赋值
(function () {

	console.log('函数参数的解构赋值-------------');

	function fun1(_ref7) {
		var _ref8 = _slicedToArray(_ref7, 2),
		    a = _ref8[0],
		    b = _ref8[1];

		console.log('a', a);
		console.log('b', b);
	}

	fun1([1, 2]);
})();
