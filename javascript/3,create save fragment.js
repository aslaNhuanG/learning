/**
   创建安全文档片段
   所谓“安全”，是指不支持 HTML5 的浏览器也能够正确地解析和渲染未知的 HTML5
   标签，即能够正确地构建 DOM 树，并且可以为之设置样式。IE 9 以下的浏览器不支持
   HTML5，如果遇到未知标签（如 <article>），浏览器会向 DOM 树中插入一个没有子元素
   的空元素。针对这个问题有一个“莫名其妙”的解决方法，就是在使用未知标签之前调用
   document.createElement( ' 未知标签 ' ) 创建一个对应的 DOM 元素，这样就可以“教会”浏
   览器正确地解析和渲染这个未知标签。
 * @param document
 * @returns {DocumentFragment}
 */

function createSaveFragment(document){
  // 存放了所有的 HTML5 标签
  var nodeNames = "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|" +
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time";
  var list = nodeNames.split("|");
  var saveFrag = document.createDocumentFragment();

  if(saveFrag.createElement){
    while(list.length){
      saveFrag.createElement(list.pop());
    }
  }

  return saveFrag;
}