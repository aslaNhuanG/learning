/**
 * 该段函数关键在splice.apply应用上，可以循环将处理后的代码arr2插入进arr中
 * @type {Array}
 */
  var arr = [];
  var arr2 =  [];
  for(var i=0; arr[i]; i++){
    arr2 = doSomething(); // doSomething() return array to arr2
    arr.splice.apply(arr, [i+1, 0].concat(arr2));
  }
