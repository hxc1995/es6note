 // export 2;//报错，因为没有输出接口，而是输出了值

 let age = 122;
 let firstname = '小明';
 setTimeout(function () {
   firstname='小小明'
 },2000)
export { firstname as name , age as year}

export function ex(){
  console.log('独立输出');
}
