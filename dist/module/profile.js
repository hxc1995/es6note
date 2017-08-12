'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ex = ex;
var age = 122;
var firstname = '小明';
setTimeout(function () {
  exports.name = firstname = '小小明';
}, 2000);
exports.name = firstname;
exports.year = age;
function ex() {
  console.log('独立输出');
}
