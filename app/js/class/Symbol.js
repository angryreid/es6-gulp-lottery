{
  let a = Symbol();
  let b = Symbol();
  console.log(a);
  console.log(b);

  let b1 = Symbol.for('a');
  let b2 = Symbol.for('a');
  console.log(b1 === b2)
  
}

