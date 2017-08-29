'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: '小李',
  arg: 123,
  fun: function fun() {
    console.log('default输出');
  }
  //应为default默认以default变量名输出，所以上下两种方式一样
  // let add = {
  //   name:'小李',
  //   arg:123,
  //   fun:function () {
  //     console.log('default输出');
  //   }
  // }
  // export { add as default}

};
var others = exports.others = '其他单个输出';
var name = exports.name = '不是default里面的name';
