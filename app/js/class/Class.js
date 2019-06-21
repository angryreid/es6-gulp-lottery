class Parent{
  constructor(name = 'ekk'){
    this.name = name;
  }
}

class Child extends Parent{
  constructor(name = 'child'){
    // super() // 空的时候使用父类的传入参数
    super(name);
    // 在继承中，构造函数放置在第一行
    this.type = 'child'
  }

  // 定义setter
  set longName(v){
    this.name = v;
  }
  // 定义getter
  get longName(){
    return 'kk' + this.name;
  }

  // 静态方法
  static talk(){
    console.log('hello start function')
  }
}

// 静态属性
Child.hhh = 'kkk';
let child = new Child();
console.log(child.name,child.type);
console.log('getter',child.longName);
child.longName = 'ddeerl';
console.log(child.longName)
Child.talk()
console.log(Child.hhh);
