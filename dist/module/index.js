'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _profile = require('./profile.js');

Object.keys(_profile).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _profile[key];
    }
  });
});

var obj = _interopRequireWildcard(_profile);

var _exportDefault = require('./exportDefault.js');

var objde = _interopRequireWildcard(_exportDefault);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// import { name , year } from './profile.js';

// console.log(name);
// console.log(year);
console.log(_profile.name);
console.log(_profile.year);

//import会提升到头部，就像var 声明一样

console.log('obj');
console.log(obj);

//import 进来的值和export是动态对应的，是时时对应的
setTimeout(function () {
  console.log(_profile.name);
}, 3000);

console.log('-------------------------------');
//improt不用{}加载，会输入以default输出的变量，其他的不会输入

console.log(objde.default);
//下面的方式可以输入到所有的输入

console.log(objde);

console.log(objde.default);
console.log(_exportDefault.name);
//整体输出的
console.log(_exportDefault.others);

// export {name , year } from './profile.js';

//等同于
// import { name ,year } from './profile.js';
// export {name , year};
