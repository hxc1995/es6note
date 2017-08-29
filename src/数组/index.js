
//扩展运算符
(function () {
	
	console.log(...[1,2,3,4,5]);
	console.log([1,2,3,4,5]);

	let arr = [1, 2, 3, 4]

	console.log("普通：",Math.max(1, 2, 3, 4));
	console.log("用apply：",Math.max.apply(null, arr));
	//es6写法
	console.log("用es6的扩展运算符：",Math.max(...arr));
})();

//数组合并
(function () {
	let [arr, arr1, arr2] = [[1, 2, 3], ["a", "b"], "ddd"];

	console.log(arr.concat(arr1, arr2));

	//es6
	console.log([...arr, ...arr1, arr2]);

	let [a, b, ...arrs] = arr;
	console.log(a);
	console.log(b);
	console.log(arrs);


	//将类数组转化给数组
	let arrayLike = {
		'0': 'a',
		'1': 'b',
		'2': 'c',
		length: 3
	}

	console.log([].slice.call(arrayLike));
	console.log(Array.from(arrayLike));
	
	console.log([...arrayLike]);
})();
(function () {
	console.log("------------------------------------------------------------------");
	let arr = ['a', 'b', 'c', 'd', 'e'];

	console.log([...arr.keys()]);
	// console.log([...arr.values()]);//values()暂时没用
	console.log([...arr.entries()]);

})()