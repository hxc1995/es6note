'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// 1、数组的解构赋值--------------------------------------------
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

	console.log('fa', fa); //100
	console.log('fb', fb); //100

	//ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
	//所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
	//可以给定默认值，若严格等于undefined,默认值才有效，不然被覆盖
	var _undefined = undefined,
	    fc = _undefined === undefined ? 12 : _undefined,
	    fd = 100,
	    _ref5 = null,
	    fe = _ref5 === undefined ? 12 : _ref5;

	console.log('fc', fc); //12
	console.log('fd', fd); //100
	console.log('fe', fe); //null
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

	console.log('foo', ofoo); //off
	console.log('obar', obar); //bar
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
		var _ref8 = _slicedToArray(_ref7, 4),
		    a = _ref8[0],
		    b = _ref8[1],
		    _ref8$ = _ref8[2],
		    c = _ref8$ === undefined ? 100 : _ref8$,
		    _ref8$2 = _ref8[3],
		    d = _ref8$2 === undefined ? 1000 : _ref8$2;

		console.log('a', a); //1
		console.log('b', b); //2
		console.log('c', c); //120
		console.log('d', d); //1000
	}

	fun1([1, 2, 120, undefined]);

	function fun2() {
		var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
		    _ref9$x = _ref9.x,
		    x = _ref9$x === undefined ? 0 : _ref9$x,
		    _ref9$y = _ref9.y,
		    y = _ref9$y === undefined ? 0 : _ref9$y;

		var b = arguments[1];

		return [x, y, b];
	}
	console.log(fun2({ x: 1, y: 2 }, 100));
	console.log(fun2({ x: 1 }));
	console.log(fun2({}));

	function move() {
		var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { x: 0, y: 0 },
		    x = _ref10.x,
		    y = _ref10.y;

		// 此时是让{x, y}默认等于{ x: 0, y: 0 }，若穿入了参数就
		//不等于{ x: 0, y: 0 }
		return [x, y];
	}

	console.log(move({ x: 3, y: 8 })); // [3, 8]
	console.log(move({ x: 3 })); // [3, undefined]
	console.log(move({})); // [undefined, undefined]
	console.log(move()); // [0, 0]

	function fun3() {
		var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;

		console.log(a);
	}
	fun3(3); //3
	fun3(); //2

	[1, undefined, 3].map(function () {
		var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'yes';
		return x;
	});
	//为undefined时默认值生效
	// [ 1, 'yes', 3 ]

})();

//6、用途
(function () {
	var x = 1;
	var y = 2;
	var _ref11 = [y, x];
	x = _ref11[0];
	y = _ref11[1];

	console.log('x', x, 'y', y);

	function bubblesort(arr) {
		var flag = false;
		for (var i = 0; i < arr.length - 1; i++) {

			flag = false;
			for (var j = 1; j < arr.length - i - 1; j++) {
				if (arr[j] > arr[j + 1]) {
					flag = true;
					var _ref12 = [arr[j + 1], arr[j]];
					arr[j] = _ref12[0];
					arr[j + 1] = _ref12[1];
				}
			}
			if (!flag) {
				break;
			}
		}
		console.log(arr);
	}

	function example() {
		return [1, 23, 4];
	}

	var _example = example(),
	    _example2 = _slicedToArray(_example, 3),
	    a = _example2[0],
	    b = _example2[1],
	    c = _example2[2];

	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	function objex() {
		return {
			foo: 100,
			bar: 200
		};
	}

	var _objex = objex(),
	    fo = _objex.foo,
	    ba = _objex.bar;

	console.log('fo', fo);
	console.log('ba', ba);

	//解构赋值可以方便地将一组参数与变量名对应起来。
	// 参数是一组有次序的值
	function f(_ref13) {
		var _ref14 = _slicedToArray(_ref13, 3),
		    x = _ref14[0],
		    y = _ref14[1],
		    z = _ref14[2];
	}
	f([1, 2, 3]);

	// 参数是一组无次序的值
	function f(_ref15) {
		var x = _ref15.x,
		    y = _ref15.y,
		    z = _ref15.z;
	}
	f({ z: 3, y: 2, x: 1 });

	//提取json数据

	var JSONdata = {
		id: 1,
		name: 'hhh'
	};

	var id = JSONdata.id,
	    name = JSONdata.name;

	console.log('id', id);
	console.log('name', name);

	//加载模块指定需要哪些方法
	// const { SourceMapConsumer, SourceNode } = require("source-map");
})();
