"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	var Person = function () {

		//内部的方法都定义在Person.prototype上面，
		/*
  	constructor 相当于 es5构造器函数内部
  	function a(){
  			}
  	let a1 = new a();
  	constructor相当于 函数a
  */
		function Person(name, discourse) {
			_classCallCheck(this, Person);

			this.name = name;
			this.discourse = discourse;
		}

		_createClass(Person, [{
			key: "say",
			value: function say() {
				console.log(this.name + " say " + this.discourse);
			}
		}]);

		return Person;
	}();

	;

	var p1 = new Person("blob", "HEllo es6");
	var p2 = new Person("xxx", "Hi");
	console.log(p1);
	console.log(p2);
	console.log(Person.prototype === p1.__proto__);
	console.log(Person.prototype === p2.__proto__);
	p1.say();
})();
(function () {

	//class表达式

	var MyClass = function () {
		function Me() {
			_classCallCheck(this, Me);
		}

		_createClass(Me, [{
			key: "getClassName",
			value: function getClassName() {
				console.log(Me.name);
				return Me.name;
			}
		}]);

		return Me;
	}();

	var inst = new MyClass();
	inst.getClassName(); // Me
	console.log(inst.getClassName);

	var person = new (function () {
		function _class(name) {
			_classCallCheck(this, _class);

			this.name = name;
		}

		_createClass(_class, [{
			key: "sayName",
			value: function sayName() {
				console.log(this.name);
			}
		}]);

		return _class;
	}())('张三');

	person.sayName(); // "张三"
})();

(function () {
	//私有方法
	/*
 	1 使用_名来表示私有方法；
 	2 使用外部定义方法;
 	3 使用Symbol值的唯一性；
 */

	var bar = Symbol('bar');

	var snaf = Symbol('snaf');

	var Person = function () {
		function Person(name) {
			_classCallCheck(this, Person);

			this.name = name;
		}

		_createClass(Person, [{
			key: "_privateFun1",
			value: function _privateFun1() {
				console.log("私有方法，_符合提升是私有的方法");
			}
		}, {
			key: "pF",
			value: function pF() {
				privateFun2.call(this);
				console.log("在外部定义,私有方法");
			}
			// 公有方法

		}, {
			key: "foo",
			value: function foo(baz) {
				this[bar](baz);
			}

			// 私有方法

		}, {
			key: bar,
			value: function value(baz) {
				return this[snaf] = baz;
			}
		}]);

		return Person;
	}();

	function privateFun2() {
		console.log("在外部定义");
	}
})();

(function () {
	//Class 的取值函数（getter）和存值函数（setter）

	var Myclass = function () {
		function Myclass() {
			_classCallCheck(this, Myclass);
		}

		_createClass(Myclass, [{
			key: "prop",
			get: function get() {
				console.log("监听到取值操作");
				console.log(arguments);
				return "\u53D6\u503C\u64CD\u4F5C\u6210\u529F";
			},
			set: function set(value) {
				console.log("监听到存值操作");
				console.log(arguments);
				console.log("setter:" + value);
			}
		}]);

		return Myclass;
	}();

	var inst = new Myclass();
	inst.prop = 1000;

	console.log(inst.prop);
	inst.prop = 2000;

	inst.aa = 12;
})();
