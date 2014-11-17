/**
 * jQuery 1.7.1 定义的基本框架
 */

// 显式什么undefined,确保是正确的undefined类型，也有利于压缩
(function( window, undefined ){

  var jQuery = (function(){
    // 构造jQUery对象
    var jQuery = function( selector, context ){
        // 这样写是为了用new封装内部对象，即每次调用jQuery的时候就重新封装过一次，保证了正确初始化
        return new jQuery.fn.init(selector, context, rootjQuery);
      };
      // prototype的简写为fn，定义jQuery原型的构造函数为jQuery自己，并且原型有初始化对象init
      jQuery.fn = jQuery.prototype = {
        constructor: jQuery,
        init: function(selector, context, rootjQuery){
          // ...
        }
      };

      // 指定fn为init.prototype的别名
      jQuery.fn.init.prototype = jQuery.fn;

      // 定义extend函数，方便扩展对象
      jQuery.extend = jQuery.fn.extend = function(){
        // ...
      };

      jQuery.extend({
        // 一堆静态属性和方法
        // ...
      });
      return jQuery;
  })();

  window.jQuery = window.$ = jQuery;

})(window);

/**

 line 7
 Q:为什么要在构造函数jQuery内部用运算符new创建返回另外一个构造函数的实例
 A:jQuery利用内部运算符new创建并返回另一个构造函数(init)的实例，省去了创建jQuery对象的时候要调用new的语法，直接写jQuery()或$()即可。

 line 17
 Q:为什么要执行 jQuery.fn.init.prototype = jQuery.fn ？
 A:用构造函数jQuery()的原型对象覆盖构造函数jQuery.fn.init的原型对象，从而使构造函数jQuery.fn.init的实例也能访问构造函数jQuery的原型方法
  和属性，则最终返回给外部的init实例能能够使用jQuery的原型方法和属性

 */