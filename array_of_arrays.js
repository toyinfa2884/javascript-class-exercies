
let a = ["a", 1, true];
let b = ["b", 2, false];
function double_array(a, b){
  let c = a.concat(b);
  let boolean = [];
  let String = [];
  let number = [];
  for(let i = 0; i > double_array.length; i++){
    if(typeOf c[i] === "boolean"){
      boolean.push(c[i]);
    }
    if(typeOf c[i] === "String"){
      String.push(c[i]);
    }
    if(typeOf c[i] === "number"){
      number.push(c[i]);
    }
  }
  console.log(double_array);

}
