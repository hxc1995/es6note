
//set数据结构,类似数组，但值唯一

(function () {
	let s = new Set();
	let arr = [1,1,2,2,2,3,1,2];
	//add方法添加成员
	[2, 3, 4, 5, 62, 3, 4, 5, 6,2, 3, 4, 5, 6 ].forEach( x => s.add(x))

    console.log(s.size);
    console.log('------------------');
	for( let i of s){
		console.log(i);
	}
	//Set可以接受数组或其他具有iterator结口的值

	console.log([...new Set(arr)]); //去掉重复的
	console.log(new Set(arr));
	let arrayLike = {
		'0': 'a',
		'1': 'b',
		'2': 'c',
		length: 3
	}


	const arrT = new Set([...arrayLike]);
	console.log([...arrT]);
	console.log(arrT.size);
})();

(function(){
	// let set = new Set(['red', 'green', 'blue']);
	let set = new Set([0, 1, 2]);

	console.log(set.keys());
	console.log(set.values());
	console.log(set.entries());
	for (let item of set.keys()) {
	  console.log(item);
	}

	for (let item of set.values()) {
	  console.log(item);
	}

	for (let item of set.entries()) {
	  console.log(item);
	}
})();

//map数据结果 啥都能做键的对象
(function () {

	let  obj = { a : 100 };
	let  m = new Map();

	var s = m.set(obj , "hello world"); //返回设置了对象后的map

	var g = s.get(obj)

	console.log(s);
	console.log(g);

	let arrMap = new Map([
		["name", "aaaa"],
		["title", "cccccc"]
	]);

	arrMap.set("age",100)
		.set("sex", "Boy");
	console.log(arrMap);
	console.log([...arrMap]);

	for(let key of arrMap.keys()){
		console.log(key);
	}

	for(let value of arrMap.values()){
		console.log(value);
	}

	for(let item of arrMap.entries()){
		console.log(item);
	}
	for(let [key, value]of arrMap.entries()){
		console.log(key,value);
	}

	let obja = {
		a:100
	}

	//forEach的第二个参数
	arrMap.forEach(function (value, key, map) {
		console.log(this.a);
		console.log(value);
		console.log(key);
		console.log(map);
	}, obja)
})();

(function () {

	function strMapToObj(strMap) {

		let obj = Object.create(null);
		// strMap.forEach(function (value, key) {
		// 	this[key] = value;
		// },obj)

		for(let [key, value] of strMap){
			obj[key] = value;
		}
		return obj;

	}
	function strMapToJson(strMap) {
	  return JSON.stringify(strMapToObj(strMap));
	}

	let myMap = new Map().set('yes', true).set('no', false);
	console.log(strMapToJson(myMap));

})()