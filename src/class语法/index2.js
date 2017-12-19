(function () {
	
	//Class的继承
	console.log("--------------------Class的继承---------------------");

	class Point {

		constructor(x, y) {
			this.x = x ;
			this.y = y ;
		}

		toString() {
			return "############"
		}

		static say() {
			console.log("父类的静态方法");
		}
	}

	class ColorPoint extends Point {
		/*
			子类的constructor中必须调用super，不然没有this
			子类的this是在父类的this上进行了加工
		*/
		//子类会继承父类的静态方法
		constructor(x, y, color) {
			super(x, y); //调用父类的constructor(x, y)
			this.color = color;

			//子类的super作为对象使用时候相当于 Point.prototype
			console.log(super.toString());
		}

		toString() {
			return this.color + '' + super.toString();
		}
	}

	let colorPoint = new ColorPoint(100, 200, "aaaaaaaaa");	

	console.log(colorPoint);

	ColorPoint.say()

})()