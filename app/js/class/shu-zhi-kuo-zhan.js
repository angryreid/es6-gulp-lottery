{
  console.log('B',0B10001011)
  console.log('o',0o1)
}

{
  console.log(Number.isInteger(10))
  console.log('NaN',Number.isFinite(NaN))
  console.log('1',Number.isFinite(1))
  console.log('0.3',0.1+0.2)
  console.log(Number.MAX_SAFE_INTEGER)
  console.log(Number.isSafeInteger(10.33)) // false
}

{
  // qu zheng
  console.log(Math.trunc(5.1));
  console.log(Math.trunc(5.9));
}

{
  // sign 正数 -1 0 1
  console.log('-5',Math.sign(-5));
  console.log('0',Math.sign(0));
  console.log('5',Math.sign(5));
}