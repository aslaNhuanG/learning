/**
 * 快速遍历数组的技巧
 * @param arr
 * @param callback
 */
function mapAnArray(arr, callback){
  var ret = [];

  // 过滤undefined,null，却不会过滤数字0和""
  for(var i= 0,elem;(elem = arr[i]) != null; i++){
    if(typeof elem === "number"){
      // 转为字符串有利于后面判断
      elem += "";
    }
    if(!elem){
      // elem被判断为false，则退出本次循环
      continue;
    }
    // 回调
    ret.push( callback.call(this, elem, i) );
  }

  return ret;
}