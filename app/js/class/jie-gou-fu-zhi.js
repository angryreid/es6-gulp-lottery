class Test{
  constructor(){
    this.name = 'emma'
  }

  foo(){
    return [1,2,3,4,5];
  }
}

let test = new Test();
let a,b;
[a,,...b] = test.foo();
let metaData = {
  title: "test",
  data: [{
    title: "data title",
    desc: "description"
  }]
}
document.body.innerHTML = test.name;
console.log(a,b)
let {title,data: [data]} = metaData;
console.log(title,data)