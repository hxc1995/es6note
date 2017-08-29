//promise的catch
console.log("[{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]");
let [p1, p2, p3] = [
	new Promise(function (resolve, reject) {
		resolve("成功1")
	}),
	new Promise(function (resolve, reject) {
		reject("报错2")
	}),
	new Promise(function (resolve, reject) {
		resolve("成功3")
	})
]


p1
.then(function (res) {
	return p2
}, function(err) {
	console.log(err);
})
.then(function (res) { 
	return p3
}, function (err) {
	console.log(err);
})

//最后一个放catch会捕获前面所有的error，并且在发生error的地方停止
p1
.then(function(){return p2})
.then(function(){return p3})
.catch(function(err){console.log(err);})

let p4 = new Promise(function (resolve, reject) {
	resolve("处理成功");
	setTimeout(function () { throw new Error('test') }, 1000)
})

p4.
then(function(res){console.log(res);})
.catch(function (err) {
	// console.log(err);//捕获不到后面的错误
})