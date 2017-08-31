
// iterator 迭代器
(function () {

	let arr=[1,2,3,4,5];

	let iter = arr[Symbol.iterator]();
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	
	function makeIterator(array) {
	  var nextIndex = 0;
	  return {
	    next: function() {
	      return nextIndex < array.length ?
	        {value: array[nextIndex++]} :
	        {done: true};
	    }
	  };
	}

	let iterator1 = makeIterator([1, 2, 3]);
	 console.log(iterator1.next());
	 console.log(iterator1.next());
	 console.log(iterator1.next());
	 console.log(iterator1.next());
	 console.log(iterator1.next());

	 //ES6 规定，默认的 Iterator 接口部署在数据结构的Symbol.iterator属性
	let obj = {
	 	[Symbol.iterator](){
	 		return {
	 			next(){
	 				return {
	 					value:1,
	 					done:true
	 				}
	 			}
	 		}
	 	}
	 }

	 obj[Symbol.iterator]().next()
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
	
	let arr = [1, 2, 3, 4];
	let arrobj = [{a:1, b:2}, {a:21, b:22}, {a:11, b:12}]
	let iter = arr[Symbol.iterator]();
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());
	console.log(iter.next());

	for ( let {a, b} of arrobj) {
		// console.log(v);
		console.log(a);
		console.log(b);
	}

	//给类数组添加iterator接口
	let iterable = {
	  0: 'a',
	  1: 'b',
	  2: 'c',
	  length: 3,
	  [Symbol.iterator]: Array.prototype[Symbol.iterator]
	};
	for (let item of iterable) {
	  console.log(item); // 'a', 'b', 'c'
	}

})();
(function () {
	function Obj(value) {
	  this.value = value;
	  this.next = null;
	}

	Obj.prototype[Symbol.iterator] = function() {
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
	}

	var one = new Obj(1);
	var two = new Obj(2);
	var three = new Obj(3);

	one.next = two;
	two.next = three;
	console.log(one);
	for (var i of one){
	  console.log(i); // 1, 2, 3
	}
	console.log("-----------------------------------------------------------");
	//扩展运算符（...）也会调用默认的 Iterator 接口，只要有iterator结口的数据结构都能使用...扩展运算符
	let set = new Set().add('a').add('b').add('c');

	let [x,y] = set; //[a, b]
	console.log(x, y);
	var str = 'hello';
	console.log([...str]); //  ['h','e','l','l','o']

	
	let arr = ['b', 'c'];
	console.log(['a', ...arr, 'd']);

	console.log("-----------------------------------------------------------");
	var someString = "hi";
	console.log(typeof someString[Symbol.iterator]);       //function 
	console.log(typeof [][Symbol.iterator]);               //function
	//yield*后面跟的是一个可遍历的结构，它会调用该结构的遍历器接口。
	let generator = function* () {
	  yield 1;
	  yield* [2,3,4];
	  yield 5;
	};

	var iter = generator();

	console.log(iter.next()); // { value: 1, done: false }
	console.log(iter.next()); // { value: 2, done: false }
	console.log(iter.next()); // { value: 3, done: false }
	console.log(iter.next()); // { value: 4, done: false }
	console.log(iter.next()); // { value: 5, done: false }
	console.log(iter.next()); // { value: undefined, done: true }

})()