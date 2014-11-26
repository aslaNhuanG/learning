/**
 * 判断类型
 * @type {{}}
 */

var class2type = {};

["Boolean","Number","String","Function","Array","Date","RegExp","Object"].forEach(function(i, name) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
}

function type(obj){
  return obj == null ?
    String(obj):
    class2type[ "".toString.call(obj) ] || "object";
}