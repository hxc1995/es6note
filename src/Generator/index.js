(function () {
	function* hwgenerator(){
		console.log('1aaaa');
		yield 10;
		yield 11;
		console.log('objectaaa');
		
		yield 100 + 1;
		yield 1000;
		return "ending"
	}

	let hw = hwgenerator();
	
	console.log(hw.next());
	console.log(hw.next());
	console.log(hw.next());
	console.log(hw.next());
	console.log(hw.next());
	/*

	console.log([...hw]);
	for(let y of hw){
		console.log(y);
	}

	*/

	function* foo() {
		console.log('foo');
	}

	var foogenerator = foo();//console.log并不会执行
	foogenerator.next();

})();
(function () {
	console.log("-------------------------------------------");
	function* f() {
	  for(var i = 0; true; i++) {
	    var reset = yield i;//reset的值就是next传入的值
	    if(reset) { i = -1; }
	  }
	}

	var g = f();

	console.log(g.next()); // { value: 0, done: false }
	console.log(g.next()); // { value: 1, done: false }
	console.log(g.next(false)); // { value: 0, done: false }
	console.log(g.next(false)); 
	console.log(g.next(true)); 
	console.log(g.next(true)); 

	console.log("--------------------------------------------------------");
	function* foo(x) {
	  var y = 2 * (yield (x + 1));
	  var z = yield (y / 3);
	  return (x + y + z);
	}

	var a = foo(5);
	console.log(a.next()); // Object{value:6, done:false}
	console.log(a.next()); // Object{value:NaN, done:false}
	console.log(a.next()); // Object{value:NaN, done:true}

	var b = foo(5);
	console.log(b.next()); // { value:6, done:false }
	console.log(b.next(12)); // { value:8, done:false }
	console.log(b.next(13)); // { value:42, done:true }
	console.log('==========================================');
	function* gen(x) {
	  var y = yield x + 2;
	  
	  return y;
	}

	var g = gen(1);
	console.log(g.next()); // { value: 3, done: false }
	console.log(g.next()); // { value: undefined, done: true }
})()
