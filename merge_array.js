function merge_array(a, b){
  let final_array = [];
  let array = a.concat(b);
  let len = array.length;
  let arr = {};
    while(len--){
      let item = array[len];
      if(!arr[item])
    {
    final_array.unshift(item);
    arr[item] = true;
  }
}
return final_array;
}
let a = [2, 3, 1];
let b = [2, 3, 1, 5, 9];

console.log(merge_array(a, b));
