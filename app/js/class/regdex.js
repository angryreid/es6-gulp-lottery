{
  let reg = new RegExp('xyz','i');
  let reg2 = new RegExp(/xyz/i);

  console.log(reg.test('xyz12'),reg2.test('xyz890'));

  // 后面的修饰符会覆盖掉前面的修饰符
  let reg3 = new RegExp(/xyz/ig,'i');
  console.log(reg3.flags)
  console.log(reg3.test('xyz456'))

  // y 修饰符，从上次匹配下一个位置开始匹配
  let s = 'bbb_bb_b';
  let r1 = /b+/g;
  let r2 = /b+/y;

  // 使用sticky属性判断正则是否开启了y匹配模式
  console.log(r1.sticky,r2.sticky)
  console.log('first match',r1.exec(s),r2.exec(s))
  console.log('second match',r1.exec(s),r2.exec(s))

  // u -- unicode 修饰符，识别unicode编码
  console.log(/\u{61}/.test('a')) // false
  console.log(/\u{61}/u.test('a')) // true 
  //  . 匹配小于两个字节的编码， 超过使用 u 修饰符匹配

  {
    var arr = [1,2,4,4,5,8,5,2,3,2];
    var newArr = arr.filter((v,i,arr)=>{
      if(arr.indexOf(v) === i){
        console.log(v,arr.indexOf(v),i,arr);
      }
      return arr.indexOf(v) === i})
  }

}