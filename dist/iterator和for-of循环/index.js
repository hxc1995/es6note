'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// iterator 迭代器
(function () {
	function makeIterator(array) {
		var nextIndex = 0;
		return {
			next: function next() {
				return nextIndex < array.length ? { value: array[nextIndex++] } : { done: true };
			}
		};
	}

	var iterator1 = makeIterator([1, 2, 3]);
	console.log(iterator1.next());
	console.log(iterator1.next());
	console.log(iterator1.next());
	console.log(iterator1.next());
	console.log(iterator1.next());

	//ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性
	var obj = _defineProperty({}, Symbol.iterator, function () {
		return {
			next: function next() {
				return {
					value: 1,
					done: true
				};
			}
		};
	});

	obj[Symbol.iterator]().next();
})();

//原生带有iterator接口的数据结构
/*
Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象
*/
(function () {

	var arr = [1, 2, 3, 4];
	var arrobj = [{ a: 1, b: 2 }, { a: 21, b: 22 }, { a: 11, b: 12 }];
	var iter = arr[Symbol.iterator]();
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = arrobj[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _step$value = _step.value,
			    a = _step$value.a,
			    b = _step$value.b;

			// console.log(v);
			console.log(a);
			console.log(b);
		}

		//给类数组添加iterator接口
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var iterable = _defineProperty({
		0: 'a',
		1: 'b',
		2: 'c',
		length: 3
	}, Symbol.iterator, Array.prototype[Symbol.iterator]);
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var item = _step2.value;

			console.log(item); // 'a', 'b', 'c'
		}
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2.return) {
				_iterator2.return();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}
})();
(function () {
	function Obj(value) {
		this.value = value;
		this.next = null;
	}

	Obj.prototype[Symbol.iterator] = function () {
		var iterator = { next: next };

		var current = this;

		function next() {
			if (current) {
				var value = current.value;
				current = current.next;
				return { done: false, value: value };
			} else {
				return { done: true };
			}
		}
		return iterator;
	};

	var one = new Obj(1);
	var two = new Obj(2);
	var three = new Obj(3);

	one.next = two;
	two.next = three;
	console.log(one);
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
		for (var _iterator3 = one[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
			var i = _step3.value;

			console.log(i); // 1, 2, 3
		}
	} catch (err) {
		_didIteratorError3 = true;
		_iteratorError3 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion3 && _iterator3.return) {
				_iterator3.return();
			}
		} finally {
			if (_didIteratorError3) {
				throw _iteratorError3;
			}
		}
	}

	console.log("-----------------------------------------------------------");
	//扩展运算符（...）也会调用默认的 Iterator 接口，只要有iterator结口的数据结构都能使用...扩展运算符
	var set = new Set().add('a').add('b').add('c');

	var _set = _slicedToArray(set, 2),
	    x = _set[0],
	    y = _set[1]; //[a, b]


	console.log(x, y);
	var str = 'hello';
	console.log([].concat(_toConsumableArray(str))); //  ['h','e','l','l','o']


	var arr = ['b', 'c'];
	console.log(['a'].concat(arr, ['d']));

	console.log("-----------------------------------------------------------");
	var someString = "hi";
	console.log(_typeof(someString[Symbol.iterator])); //function 
	console.log(_typeof([][Symbol.iterator])); //function
	//yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
	var generator = regeneratorRuntime.mark(function generator() {
		return regeneratorRuntime.wrap(function generator$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return 1;

					case 2:
						return _context.delegateYield([2, 3, 4], 't0', 3);

					case 3:
						_context.next = 5;
						return 5;

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, generator, this);
	});

	var iter = generator();

	console.log(iter.next()); // { value: 1, done: false }
	console.log(iter.next()); // { value: 2, done: false }
	console.log(iter.next()); // { value: 3, done: false }
	console.log(iter.next()); // { value: 4, done: false }
	console.log(iter.next()); // { value: 5, done: false }
	console.log(iter.next()); // { value: undefined, done: true }
})();
