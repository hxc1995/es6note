'use strict';

var _templateObject = _taggedTemplateLiteral(['aaa'], ['aaa']),
    _templateObject2 = _taggedTemplateLiteral(['Hello ', ' ', ' world ', ''], ['Hello ', ' ', ' world ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//1、字符串循环遍历
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = 'hello'[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var w = _step.value;

		console.log(w);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var str = 'hello';
console.log(str.repeat(3));
//2、模板字符串
var data = {
	name: '小明',
	age: 100
	//传统写法:
	//let domstr= '<h1>'+data.name+'</h1>'+'<p>'+data.age+'</p>';
	//es6的模板字符串写法,用反引号标识是模板字符串`
};var domstr = '<h1>' + data.name + '</h1><p>' + data.age + '</p>';
document.getElementById('con').innerHTML = domstr;

// 普通字符串
var stra = 'this is normal string';

// 多行字符串,模板字符串的缩进换行都会被保留输出
var strb = 'dasdasdasd\naaaaaaaaaaaa\n';

// 字符串中嵌入变量

var strc = '\u59D3\u540D ' + data.name + ', \u5E74\u9F84 ' + data.age;
console.log(stra);
console.log(strb);
console.log(strc);

function strs() {
	return { name: '函数返回的值' };
}
//大括号中可以放入任何javascript表达式,包括函数
console.log('' + strs().name);

//模板字符串的嵌套

var tmpl = [{ name: '小明', age: 12 }, { name: '小王', age: 13 }, { name: '小李', age: 14 }];
var strtmpl = '\n\t<ul>\n\t\t' + tmpl.map(function (v) {
	return '\n\t\t\t\t<li>\n\t\t\t\t\t\u540D\u5B57\uFF1A' + v.name + ';\n\t\t\t\t\t\u5E74\u9F84:' + v.age + '\n\t\t\t\t</li>\n\t\t\t';
}).join('') + '\n\t</ul>\n';
console.log('strtmpl:', strtmpl);

//标签模板，指的是传给函数的参数是模板字符串，
//实际传入的是先将模板字符串解析成数组参数再传入函数中
alert(_templateObject);

var a = 5;
var b = 10;

tag(_templateObject2, a + b, a, a * b);
// 等同于
// tag(['Hello ', '',' world ', ''], 15, 5,50);

function tag(param) {
	console.log('param', param);
	console.log('----------');
	console.log('arguments', arguments);
	for (var i = 0; i < arguments.length; i++) {
		console.log(arguments[i]);
	}
}
