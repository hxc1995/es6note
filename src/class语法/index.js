(function () {


	class Person {

		//内部的方法都定义在Person.prototype上面，
		/*
			constructor 相当于 es5构造器函数内部
			function a(){
	
			}
			let a1 = new a();
			constructor相当于 函数a
		*/
		constructor(name, discourse) {

			this.name = name;
			this.discourse = discourse;
		}

		say() {
			console.log(`${this.name} say ${this.discourse}`);
		}
	};


	let p1 = new Person("blob", "HEllo es6");
	let p2 = new Person("xxx", "Hi");
	console.log(p1);
	console.log(p2);
	console.log(Person.prototype === p1.__proto__);
	console.log(Person.prototype === p2.__proto__);
	p1.say();

})();
(function () {
	
	//class表达式

	const MyClass = class Me {
	  getClassName() {
	  	console.log(Me.name);
	    return Me.name;
	  }
	};

	let inst = new MyClass();
	inst.getClassName() // Me
	console.log(inst.getClassName);

	let person = new class {
	  constructor(name) {
	    this.name = name;
	  }

	  sayName() {
	    console.log(this.name);
	  }
	}('张三');

	person.sayName(); // "张三"

})();

(function(){
	//私有方法
	/*
		1 使用_名来表示私有方法；
		2 使用外部定义方法;
		3 使用Symbol值的唯一性；
	*/

	const bar = Symbol('bar');

	const snaf = Symbol('snaf');

	class Person {

		constructor(name) {
			this.name = name;
		}

		_privateFun1() {
			console.log("私有方法，_符合提升是私有的方法");
		}

		pF() {
			privateFun2.call(this)
			console.log("在外部定义,私有方法");
		}
		// 公有方法
		foo(baz) {
		  this[bar](baz);
		}

		// 私有方法
		[bar](baz) {
		   return this[snaf] = baz;
		}
	}

	function privateFun2() {
		console.log("在外部定义");
	}


})();

(function () {
	//Class 的取值函数（getter）和存值函数（setter）

	class Myclass {
		constructor() {
			
		}
		get prop() {
			console.log("监听到取值操作");
			console.log(arguments);
			return `取值操作成功`
		}
		set prop(value) {
			console.log("监听到存值操作");
			console.log(arguments);
			console.log(`setter:${ value }`);
		}
	}

	let inst = new Myclass();
	inst.prop = 1000;

	console.log(inst.prop);
	inst.prop = 2000;

	inst.aa=12;

})()






































