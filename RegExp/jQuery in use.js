/**
 * 此文件集中解释下jQuery1.7.1里用到的复杂正则表达式
 * jQuery源文件里开头的r表示RegExp开头的r，为正则表达式类型
 */

// 匹配html开始标签或者#id,如:<a>, #myId(却并不匹配结束标签</a>）
quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,

// 匹配左右空白
  trimLeft = /^\s+/,
  trimRight = /\s+$/,



// Match a standalone tag
// 匹配一个标准的标签(但是不捕获标签里的属性,如<a href="#"></a>,则捕获`a`)
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,

// JSON RegExp
// 验证一个字符串是否只包含符号 ],:{}\s，（因为json只允许这些符号）
  rvalidchars = /^[\],:{}\s]*$/,
// 验证转义 (比如\u5aFe)
  rvalidescape = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
// 验证数字（包含小数和科学计数）
  rvalidtokens = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
// 验证括号？
  rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,

// Useragent RegExp (用户代理用到的表达式)
  //webkit
  rwebkit = /(webkit)[ \/]([\w.]+)/,
  // opera
  ropera = /(opera)(?:.*version)?[ \/]([\w.]+)/,
  // ie
  rmsie = /(msie) ([\w.]+)/,
  // mozilla
  rmozilla = /(mozilla)(?:.*? rv:([\w.]+))?/,

// Matches dashed string for camelizing
  // 规范化字符串
  rdashAlpha = /-([a-z]|[0-9])/ig,
  rmsPrefix = /^-ms-/,

  // 可以获取焦点元素
  rfocusable = /^(?:button|input|object|select|textarea)$/i,
  // 可点击
  rclickable = /^a(?:rea)?$/i,
  // 返回boolean值的属性
  rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,

  // form元素
  rformElems = /^(?:textarea|input|select)$/i,
  // 命名空间(不能以.号开始)，如: `a.b.name` 中的 `a.b`
  rtypenamespace = /^([^\.]*)?(?:\.(.+))?$/,
  // 为了修正hover的bug
  rhoverHack = /\bhover(\.\S+)?\b/,
  //
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|contextmenu)|click/,
  rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  // 匹配ID和Class，如"a#myA.classA"
  rquickIs = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,

  // 识别jQuery
  rinlinejQuery = / jQuery\d+="(?:\d+|null)"/g,
  // 空白引导
  rleadingWhitespace = /^\s+/,

  // html4标签
  // 1.简单的自关闭标签,eg:<div />
  // 2.带属性的子关闭,eg:<div id="myId" />
  // 3.多标签组合,eg: a<div />bcd<p id="p"/>ef
  // 精髓:(?!)为反向前声明，要求接下来的字符不与模式p匹配，即出现在(?!...)内的标签跳过不做处理
  // (([\w:]+)[^>]*)包含了标签和属性,eg:<a href="#"/>,中的 a href="#"
  // ([\w:]+)只包含了标签a
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,


  // 匹配标签名
  rtagName = /<([\w:]+)/,
  // 匹配tbody
  rtbody = /<tbody/i,
  // 匹配转义,eg: 双引号 " <-> &quot; <-> &#34;
  rhtml = /<|&#?\w+;/,
  // 匹配script|style
  rnoInnerhtml = /<(?:script|style)/i,
  // 这些类型标签不缓存
  rnocache = /<(?:script|object|embed|option|style)/i,
  //
  rnoshimcache = new RegExp("<(?:" + nodeNames + ")", "i"),
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  // 兼容js类型
  rscriptType = /\/(java|ecma)script/i,
  // 匹配就有的CDATA代码
  rcleanScript = /^\s*<!(?:\[CDATA\[|\-\-)/,

  // 取alpha值
  ralpha = /alpha\([^)]*\)/i,
  // 取opacity值
  ropacity = /opacity=([^)]*)/,
  // fixed for IE9, see #8346
  rupper = /([A-Z]|^ms)/g,
  rnumpx = /^-?\d+(?:px)?$/i,
  rnum = /^-?\d/,
  rrelNum = /^([\-+])=([\-+.\de]+)/,

  // 空格
  r20 = /%20/g,
  // [ ] 符号
  rbracket = /\[\]$/,
  // 换行
  rCRLF = /\r?\n/g,
  // hash
  rhash = /#.*$/,
  // headers
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
  // input type 类型值
  rinput = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  // 协议开头
  rprotocol = /^\/\//,
  rquery = /\?/,
  // 匹配script标签和scipt的属性和内容
  rscript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
  rselectTextarea = /^(?:select|textarea)/i,
  rspacesAjax = /\s+/,
  // 给 url 后附上参数,如： xxx.html?_=5236354987
  rts = /([?&])_=[^&]*/,
  // 匹配url， 如: https://xxx.com:8080
  rurl = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,

  // table | td | th
  rtable = /^t(?:able|d|h)$/i,
  // root element
  rroot = /^(?:body|html)$/i,

/**
 * jQuery 里最长最复杂的一个正则了
 * 看图'img/jQuery，正则表达式chunker解释.jpg'
 */
  chunker = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,

  end = 0;
