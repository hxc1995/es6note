// import { name , year } from './profile.js';

// console.log(name);
// console.log(year);
console.log(aliasName);
console.log(aliasYear);


//import会提升到头部，就像var 声明一样
import { name as aliasName , year as aliasYear} from './profile.js';

import * as obj from './profile.js';
console.log('obj');
console.log(obj);

//import 进来的值和export是动态对应的，是时时对应的
setTimeout(function () {
  console.log(aliasName);
},3000);

console.log('-------------------------------');
//improt不用{}加载，会输入以default输出的变量，其他的不会输入
import de from './exportDefault.js';
console.log(de);
//下面的方式可以输入到所有的输入
import * as objde from './exportDefault.js'
console.log(objde);
import d, { others , name } from './exportDefault.js'
console.log(d);
console.log(others);



// export {name , year } from './profile.js';

//等同于
 // import { name ,year } from './profile.js';
 // export {name , year};

export * from './profile.js';//整体输入输入的
