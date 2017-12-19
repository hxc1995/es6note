"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {

	//Class的继承
	console.log("--------------------Class的继承---------------------");

	var Point = function () {
		function Point(x, y) {
			_classCallCheck(this, Point);

			this.x = x;
			this.y = y;
		}

		_createClass(Point, [{
			key: "toString",
			value: function toString() {
				return "############";
			}
		}], [{
			key: "say",
			value: function say() {
				console.log("父类的静态方法");
			}
		}]);

		return Point;
	}();

	var ColorPoint = function (_Point) {
		_inherits(ColorPoint, _Point);

		/*
  	子类的constructor中必须调用super，不然没有this
  	子类的this是在父类的this上进行了加工
  */
		//子类会继承父类的静态方法
		function ColorPoint(x, y, color) {
			_classCallCheck(this, ColorPoint);

			//调用父类的constructor(x, y)
			var _this = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

			_this.color = color;

			//子类的super作为对象使用时候相当于 Point.prototype
			console.log(_get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), "toString", _this).call(_this));
			console.log(_get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), "y", _this));
			return _this;
		}

		_createClass(ColorPoint, [{
			key: "toString",
			value: function toString() {
				return this.color + '' + _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), "toString", this).call(this);
			}
		}]);

		return ColorPoint;
	}(Point);

	var colorPoint = new ColorPoint(100, 200, "aaaaaaaaa");

	console.log(colorPoint);

	ColorPoint.say();
})();
