"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//扩展运算符
(function () {
	var _console;

	(_console = console).log.apply(_console, [1, 2, 3, 4, 5]);
	console.log([1, 2, 3, 4, 5]);

	var arr = [1, 2, 3, 4];

	console.log("普通：", Math.max(1, 2, 3, 4));
	console.log("用apply：", Math.max.apply(null, arr));
	//es6写法
	console.log("用es6的扩展运算符：", Math.max.apply(Math, arr));
})();

//数组合并
(function () {
	var arr = [1, 2, 3],
	    arr1 = ["a", "b"],
	    arr2 = "ddd";


	console.log(arr.concat(arr1, arr2));

	//es6
	console.log([].concat(_toConsumableArray(arr), _toConsumableArray(arr1), [arr2]));

	var _arr = _toArray(arr),
	    a = _arr[0],
	    b = _arr[1],
	    arrs = _arr.slice(2);

	console.log(a);
	console.log(b);
	console.log(arrs);

	//将类数组转化给数组
	var arrayLike = {
		'0': 'a',
		'1': 'b',
		'2': 'c',
		length: 3
	};

	console.log([].slice.call(arrayLike));
	console.log(Array.from(arrayLike));

	console.log([].concat(_toConsumableArray(arrayLike)));
})();
(function () {
	console.log("------------------------------------------------------------------");
	var arr = ['a', 'b', 'c', 'd', 'e'];

	console.log([].concat(_toConsumableArray(arr.keys())));
	// console.log([...arr.values()]);//values()暂时没用
	console.log([].concat(_toConsumableArray(arr.entries())));
})();
