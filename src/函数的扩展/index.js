
//1，函数参数的默认值
(function () {
	// //旧写法
	// function log(x, y) {
	//   y = y || 'World';
	//   console.log(x, y);
	// }

	//es6写法
	function log(x,y="world") {
		console.log(x,y);
	}
	log('Hello') // Hello World
	log('Hello', 'China') // Hello China
	log('Hello', '') // Hello 	

	let x = 100 ;
	function foo(p = x+1 ) {
		//参数给默认值是惰性求值
		console.log(p);
	}

	function foo1(x) {
		console.log(x);//undefined
	}
	foo()
	foo1()

	function foo3({x, y = 5} = {}) {
	  console.log(x, y);
	}

	foo3()
})();


// rest参数

(function(){
	function print(a,...b) {
		console.log(a);
		console.log(b);
	}

	print(1,2,3,4,5,6)
})();
//箭头函数

(function () {
	console.log('obj');
	let a = str => str ;
	let add = (a, b) => a + b;
	let sort = arr => {
		return arr.sort(function(a, b){ return a - b })
	}
})();

//箭头函数
//注意点
/*
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
*/
var id = 21;
(function () {


	function foo() {
	  setTimeout(() => {
	  	console.log('args:', arguments);
	    console.log('id:', this.id);
	  }, 100);
	}

	function foo1() {
		setTimeout(function () {
			console.log('args:', arguments);
			console.log("id1:", this.id);
		})
	}

	function foo2() {
		setTimeout(function () {

			console.log("id2:", this.id);
		}.bind(this))
	}

	foo.call({ id: 42 }); //id:42
	foo1.call({ id: 42 }); //id:21,this指向window	
	foo2.call({ id: 42 }); //id:42	

	function foo3() {
	    console.log('args31:', arguments);
	  setTimeout(() => {
	    console.log('args3:', arguments);
	  }, 100);

	  let a = () => {
	    console.log('args32:', arguments);
	  }
	  a();
	}

	function foo4() {
	  	console.log('args41:', arguments);
	  setTimeout(function () {
	  	console.log('args4:', arguments);
	  })
	  let b = function() {
	    console.log('args42:', arguments);
	  }
	  b();
	}
	foo3(2, 4, 6, 8);
	foo4(2, 4, 6, 8);
	// function aa() {
	// 	add () => {
	// 		console.log(this.a + this.b);
	// 	}
	// }
})();

