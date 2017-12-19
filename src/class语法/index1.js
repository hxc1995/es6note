(function () {
	console.log("--------index1.js-----------");
	//class的静态方法
	/*
		类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
		如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
		而是直接通过类来调用，这就称为“静态方法”
	*/
	class Foo {

		constructor() {
			this.state={
				name:"bolb"
			};
			console.log("instance");
			console.log(this);

		}

		static classMethod () {
			console.log("类的静态方法");
			console.log(this);
		}


	}

	Foo.classMethod();

	var foo = new Foo();

})()