"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
	console.log("--------index1.js-----------");
	//class的静态方法
	/*
 	类相当于实例的原型，所有在类中定义的方法，都会被实例继承。
 	如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，
 	而是直接通过类来调用，这就称为“静态方法”
 */

	var Foo = function () {
		function Foo() {
			_classCallCheck(this, Foo);

			this.state = {
				name: "bolb"
			};
			console.log("instance");
			console.log(this);
			console.log(new.target);
		}

		_createClass(Foo, null, [{
			key: "classMethod",
			value: function classMethod() {
				console.log("类的静态方法");
				console.log(this);
			}
		}]);

		return Foo;
	}();

	Foo.classMethod();

	var foo = new Foo();
})();
