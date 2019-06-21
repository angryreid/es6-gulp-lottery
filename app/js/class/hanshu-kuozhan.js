{
  let arr = Array.of(1, 2, 3, 4);
  console.log(arr);

  let empty = Array.of();
  console.log(empty);
}

{
  let p = document.querySelectorAll("p"); // 集合 --》 数组
  let pArr = Array.from(p);
  pArr.forEach(v => {
    console.log(v.textContent);
  });

  // map
  console.log(Array.from([1, 2, 3, 4], v => v * v));
}

{
  // fill 替换
  for (let index of [1, 2, 3].keys()) {
    console.log("index", index);
  }

  for (let value of [1, 2, 3].values()) {
    console.log("values", value);
  }
  for (let [index, value] of [1, 2, 3].entries()) {
    console.log("index,value", index, value);
  }
}
