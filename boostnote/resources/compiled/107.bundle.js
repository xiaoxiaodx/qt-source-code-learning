(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{"./node_modules/codemirror/mode/turtle/turtle.js":function(t,e,n){!function(t){"use strict";t.defineMode("turtle",(function(t){var e,n=t.indentUnit;function o(t){return new RegExp("^(?:"+t.join("|")+")$","i")}o([]);var r=o(["@prefix","@base","a"]),i=/[*+\-<>=&|]/;function c(t,n){var o=t.next();if(e=null,"<"!=o||t.match(/^[\s\u00a0=]/,!1)){if('"'==o||"'"==o)return n.tokenize=function tokenLiteral(t){return function(e,n){for(var o,r=!1;null!=(o=e.next());){if(o==t&&!r){n.tokenize=c;break}r=!r&&"\\"==o}return"string"}}(o),n.tokenize(t,n);if(/[{}\(\),\.;\[\]]/.test(o))return e=o,null;if("#"==o)return t.skipToEnd(),"comment";if(i.test(o))return t.eatWhile(i),null;if(":"==o)return"operator";if(t.eatWhile(/[_\w\d]/),":"==t.peek())return"variable-3";var u=t.current();return r.test(u)?"meta":o>="A"&&o<="Z"?"comment":"keyword"}return t.match(/^[^\s\u00a0>]*>?/),"atom"}function u(t,e,n){t.context={prev:t.context,indent:t.indent,col:n,type:e}}function l(t){t.indent=t.context.indent,t.context=t.context.prev}return{startState:function(){return{tokenize:c,context:null,indent:0,col:0}},token:function(t,n){if(t.sol()&&(n.context&&null==n.context.align&&(n.context.align=!1),n.indent=t.indentation()),t.eatSpace())return null;var o=n.tokenize(t,n);if("comment"!=o&&n.context&&null==n.context.align&&"pattern"!=n.context.type&&(n.context.align=!0),"("==e)u(n,")",t.column());else if("["==e)u(n,"]",t.column());else if("{"==e)u(n,"}",t.column());else if(/[\]\}\)]/.test(e)){for(;n.context&&"pattern"==n.context.type;)l(n);n.context&&e==n.context.type&&l(n)}else"."==e&&n.context&&"pattern"==n.context.type?l(n):/atom|string|variable/.test(o)&&n.context&&(/[\}\]]/.test(n.context.type)?u(n,"pattern",t.column()):"pattern"!=n.context.type||n.context.align||(n.context.align=!0,n.context.col=t.column()));return o},indent:function(t,e){var o=e&&e.charAt(0),r=t.context;if(/[\]\}]/.test(o))for(;r&&"pattern"==r.type;)r=r.prev;var i=r&&o==r.type;return r?"pattern"==r.type?r.col:r.align?r.col+(i?0:1):r.indent+(i?0:n):0},lineComment:"#"}})),t.defineMIME("text/turtle","turtle")}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL3R1cnRsZS90dXJ0bGUuanMiXSwibmFtZXMiOlsiQ29kZU1pcnJvciIsImRlZmluZU1vZGUiLCJjb25maWciLCJjdXJQdW5jIiwiaW5kZW50VW5pdCIsIndvcmRSZWdleHAiLCJ3b3JkcyIsIlJlZ0V4cCIsImpvaW4iLCJrZXl3b3JkcyIsIm9wZXJhdG9yQ2hhcnMiLCJ0b2tlbkJhc2UiLCJzdHJlYW0iLCJzdGF0ZSIsImNoIiwibmV4dCIsIm1hdGNoIiwidG9rZW5pemUiLCJ0b2tlbkxpdGVyYWwiLCJxdW90ZSIsImVzY2FwZWQiLCJ0ZXN0Iiwic2tpcFRvRW5kIiwiZWF0V2hpbGUiLCJwZWVrIiwid29yZCIsImN1cnJlbnQiLCJwdXNoQ29udGV4dCIsInR5cGUiLCJjb2wiLCJjb250ZXh0IiwicHJldiIsImluZGVudCIsInBvcENvbnRleHQiLCJzdGFydFN0YXRlIiwidG9rZW4iLCJzb2wiLCJhbGlnbiIsImluZGVudGF0aW9uIiwiZWF0U3BhY2UiLCJzdHlsZSIsImNvbHVtbiIsInRleHRBZnRlciIsImZpcnN0Q2hhciIsImNoYXJBdCIsImNsb3NpbmciLCJsaW5lQ29tbWVudCIsImRlZmluZU1JTUUiLCJtb2QiXSwibWFwcGluZ3MiOiI4SEFVRyxTQUFTQSxHQUNaLGFBRUFBLEVBQVdDLFdBQVcsVUFBVSxTQUFTQyxHQUN2QyxJQUNJQyxFQURBQyxFQUFhRixFQUFPRSxXQUd4QixTQUFTQyxFQUFXQyxHQUNsQixPQUFPLElBQUlDLE9BQU8sT0FBU0QsRUFBTUUsS0FBSyxLQUFPLEtBQU0sS0FFM0NILEVBQVcsSUFBckIsSUFDSUksRUFBV0osRUFBVyxDQUFDLFVBQVcsUUFBUyxNQUMzQ0ssRUFBZ0IsY0FFcEIsU0FBU0MsRUFBVUMsRUFBUUMsR0FDekIsSUFBSUMsRUFBS0YsRUFBT0csT0FFaEIsR0FEQVosRUFBVSxLQUNBLEtBQU5XLEdBQWNGLEVBQU9JLE1BQU0sZ0JBQWdC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SUFBSUMsRUFBWUQsR0FBYUEsRUFBVUUsT0FBTyxHQUMxQ2QsRUFBVWpCLEVBQU1pQixRQUNwQixHQUFJLFNBQVNULEtBQUtzQixHQUNoQixLQUFPYixHQUEyQixXQUFoQkEsRUFBUUYsTUFBbUJFLEVBQVVBLEVBQVFDLEtBRWpFLElBQUljLEVBQVVmLEdBQVdhLEdBQWFiLEVBQVFGLEtBQzlDLE9BQUtFLEVBRW9CLFdBQWhCQSxFQUFRRixLQUNSRSxFQUFRRCxJQUNSQyxFQUFRTyxNQUNSUCxFQUFRRCxLQUFPZ0IsRUFBVSxFQUFJLEdBRTdCZixFQUFRRSxRQUFVYSxFQUFVLEVBQUl6QyxHQU5oQyxHQVNYMEMsWUFBYSxRQUlqQjlDLEVBQVcrQyxXQUFXLGNBQWUsVUExSmpDQyxDQUFJLEVBQVEiLCJmaWxlIjoiMTA3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwidHVydGxlXCIsIGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgaW5kZW50VW5pdCA9IGNvbmZpZy5pbmRlbnRVbml0O1xuICB2YXIgY3VyUHVuYztcblxuICBmdW5jdGlvbiB3b3JkUmVnZXhwKHdvcmRzKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB3b3Jkcy5qb2luKFwifFwiKSArIFwiKSRcIiwgXCJpXCIpO1xuICB9XG4gIHZhciBvcHMgPSB3b3JkUmVnZXhwKFtdKTtcbiAgdmFyIGtleXdvcmRzID0gd29yZFJlZ2V4cChbXCJAcHJlZml4XCIsIFwiQGJhc2VcIiwgXCJhXCJdKTtcbiAgdmFyIG9wZXJhdG9yQ2hhcnMgPSAvWyorXFwtPD49JnxdLztcblxuICBmdW5jdGlvbiB0b2tlbkJhc2Uoc3RyZWFtLCBzdGF0ZSkge1xuICAgIHZhciBjaCA9IHN0cmVhbS5uZXh0KCk7XG4gICAgY3VyUHVuYyA9IG51bGw7XG4gICAgaWYgKGNoID09IFwiPFwiICYmICFzdHJlYW0ubWF0Y2goL15bXFxzXFx1MDBhMD1dLywgZmFsc2UpKSB7XG4gICAgICBzdHJlYW0ubWF0Y2goL15bXlxcc1xcdTAwYTA+XSo+Py8pO1xuICAgICAgcmV0dXJuIFwiYXRvbVwiO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaCA9PSBcIlxcXCJcIiB8fCBjaCA9PSBcIidcIikge1xuICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlbkxpdGVyYWwoY2gpO1xuICAgICAgcmV0dXJuIHN0YXRlLnRva2VuaXplKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgICBlbHNlIGlmICgvW3t9XFwoXFwpLFxcLjtcXFtcXF1dLy50ZXN0KGNoKSkge1xuICAgICAgY3VyUHVuYyA9IGNoO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKGNoID09IFwiI1wiKSB7XG4gICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wZXJhdG9yQ2hhcnMudGVzdChjaCkpIHtcbiAgICAgIHN0cmVhbS5lYXRXaGlsZShvcGVyYXRvckNoYXJzKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmIChjaCA9PSBcIjpcIikge1xuICAgICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICBzdHJlYW0uZWF0V2hpbGUoL1tfXFx3XFxkXS8pO1xuICAgICAgaWYoc3RyZWFtLnBlZWsoKSA9PSBcIjpcIikge1xuICAgICAgICByZXR1cm4gXCJ2YXJpYWJsZS0zXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgIHZhciB3b3JkID0gc3RyZWFtLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgIGlmKGtleXdvcmRzLnRlc3Qod29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm1ldGFcIjtcbiAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICBpZihjaCA+PSBcIkFcIiAmJiBjaCA8PSBcIlpcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB3b3JkID0gc3RyZWFtLmN1cnJlbnQoKTtcbiAgICAgIGlmIChvcHMudGVzdCh3b3JkKSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICBlbHNlIGlmIChrZXl3b3Jkcy50ZXN0KHdvcmQpKVxuICAgICAgICByZXR1cm4gXCJtZXRhXCI7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBcInZhcmlhYmxlXCI7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5MaXRlcmFsKHF1b3RlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHZhciBlc2NhcGVkID0gZmFsc2UsIGNoO1xuICAgICAgd2hpbGUgKChjaCA9IHN0cmVhbS5uZXh0KCkpICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGNoID09IHF1b3RlICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlbkJhc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkICYmIGNoID09IFwiXFxcXFwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2hDb250ZXh0KHN0YXRlLCB0eXBlLCBjb2wpIHtcbiAgICBzdGF0ZS5jb250ZXh0ID0ge3ByZXY6IHN0YXRlLmNvbnRleHQsIGluZGVudDogc3RhdGUuaW5kZW50LCBjb2w6IGNvbCwgdHlwZTogdHlwZX07XG4gIH1cbiAgZnVuY3Rpb24gcG9wQ29udGV4dChzdGF0ZSkge1xuICAgIHN0YXRlLmluZGVudCA9IHN0YXRlLmNvbnRleHQuaW5kZW50O1xuICAgIHN0YXRlLmNvbnRleHQgPSBzdGF0ZS5jb250ZXh0LnByZXY7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXJ0U3RhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHt0b2tlbml6ZTogdG9rZW5CYXNlLFxuICAgICAgICAgICAgICBjb250ZXh0OiBudWxsLFxuICAgICAgICAgICAgICBpbmRlbnQ6IDAsXG4gICAgICAgICAgICAgIGNvbDogMH07XG4gICAgfSxcblxuICAgIHRva2VuOiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBpZiAoc3RyZWFtLnNvbCgpKSB7XG4gICAgICAgIGlmIChzdGF0ZS5jb250ZXh0ICYmIHN0YXRlLmNvbnRleHQuYWxpZ24gPT0gbnVsbCkgc3RhdGUuY29udGV4dC5hbGlnbiA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5pbmRlbnQgPSBzdHJlYW0uaW5kZW50YXRpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdHJlYW0uZWF0U3BhY2UoKSkgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgc3R5bGUgPSBzdGF0ZS50b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcblxuICAgICAgaWYgKHN0eWxlICE9IFwiY29tbWVudFwiICYmIHN0YXRlLmNvbnRleHQgJiYgc3RhdGUuY29udGV4dC5hbGlnbiA9PSBudWxsICYmIHN0YXRlLmNvbnRleHQudHlwZSAhPSBcInBhdHRlcm5cIikge1xuICAgICAgICBzdGF0ZS5jb250ZXh0LmFsaWduID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1clB1bmMgPT0gXCIoXCIpIHB1c2hDb250ZXh0KHN0YXRlLCBcIilcIiwgc3RyZWFtLmNvbHVtbigpKTtcbiAgICAgIGVsc2UgaWYgKGN1clB1bmMgPT0gXCJbXCIpIHB1c2hDb250ZXh0KHN0YXRlLCBcIl1cIiwgc3RyZWFtLmNvbHVtbigpKTtcbiAgICAgIGVsc2UgaWYgKGN1clB1bmMgPT0gXCJ7XCIpIHB1c2hDb250ZXh0KHN0YXRlLCBcIn1cIiwgc3RyZWFtLmNvbHVtbigpKTtcbiAgICAgIGVsc2UgaWYgKC9bXFxdXFx9XFwpXS8udGVzdChjdXJQdW5jKSkge1xuICAgICAgICB3aGlsZSAoc3RhdGUuY29udGV4dCAmJiBzdGF0ZS5jb250ZXh0LnR5cGUgPT0gXCJwYXR0ZXJuXCIpIHBvcENvbnRleHQoc3RhdGUpO1xuICAgICAgICBpZiAoc3RhdGUuY29udGV4dCAmJiBjdXJQdW5jID09IHN0YXRlLmNvbnRleHQudHlwZSkgcG9wQ29udGV4dChzdGF0ZSk7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjdXJQdW5jID09IFwiLlwiICYmIHN0YXRlLmNvbnRleHQgJiYgc3RhdGUuY29udGV4dC50eXBlID09IFwicGF0dGVyblwiKSBwb3BDb250ZXh0KHN0YXRlKTtcbiAgICAgIGVsc2UgaWYgKC9hdG9tfHN0cmluZ3x2YXJpYWJsZS8udGVzdChzdHlsZSkgJiYgc3RhdGUuY29udGV4dCkge1xuICAgICAgICBpZiAoL1tcXH1cXF1dLy50ZXN0KHN0YXRlLmNvbnRleHQudHlwZSkpXG4gICAgICAgICAgcHVzaENvbnRleHQoc3RhdGUsIFwicGF0dGVyblwiLCBzdHJlYW0uY29sdW1uKCkpO1xuICAgICAgICBlbHNlIGlmIChzdGF0ZS5jb250ZXh0LnR5cGUgPT0gXCJwYXR0ZXJuXCIgJiYgIXN0YXRlLmNvbnRleHQuYWxpZ24pIHtcbiAgICAgICAgICBzdGF0ZS5jb250ZXh0LmFsaWduID0gdHJ1ZTtcbiAgICAgICAgICBzdGF0ZS5jb250ZXh0LmNvbCA9IHN0cmVhbS5jb2x1bW4oKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcblxuICAgIGluZGVudDogZnVuY3Rpb24oc3RhdGUsIHRleHRBZnRlcikge1xuICAgICAgdmFyIGZpcnN0Q2hhciA9IHRleHRBZnRlciAmJiB0ZXh0QWZ0ZXIuY2hhckF0KDApO1xuICAgICAgdmFyIGNvbnRleHQgPSBzdGF0ZS5jb250ZXh0O1xuICAgICAgaWYgKC9bXFxdXFx9XS8udGVzdChmaXJzdENoYXIpKVxuICAgICAgICB3aGlsZSAoY29udGV4dCAmJiBjb250ZXh0LnR5cGUgPT0gXCJwYXR0ZXJuXCIpIGNvbnRleHQgPSBjb250ZXh0LnByZXY7XG5cbiAgICAgIHZhciBjbG9zaW5nID0gY29udGV4dCAmJiBmaXJzdENoYXIgPT0gY29udGV4dC50eXBlO1xuICAgICAgaWYgKCFjb250ZXh0KVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIGVsc2UgaWYgKGNvbnRleHQudHlwZSA9PSBcInBhdHRlcm5cIilcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY29sO1xuICAgICAgZWxzZSBpZiAoY29udGV4dC5hbGlnbilcbiAgICAgICAgcmV0dXJuIGNvbnRleHQuY29sICsgKGNsb3NpbmcgPyAwIDogMSk7XG4gICAgICBlbHNlXG4gICAgICAgIHJldHVybiBjb250ZXh0LmluZGVudCArIChjbG9zaW5nID8gMCA6IGluZGVudFVuaXQpO1xuICAgIH0sXG5cbiAgICBsaW5lQ29tbWVudDogXCIjXCJcbiAgfTtcbn0pO1xuXG5Db2RlTWlycm9yLmRlZmluZU1JTUUoXCJ0ZXh0L3R1cnRsZVwiLCBcInR1cnRsZVwiKTtcblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9