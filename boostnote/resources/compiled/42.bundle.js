(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{"./node_modules/codemirror/mode/elm/elm.js":function(e,t,r){!function(e){"use strict";e.defineMode("elm",(function(){function e(e,t,r){return t(r),r(e,t)}var t=/[a-z_]/,r=/[A-Z]/,n=/[0-9]/,i=/[0-9A-Fa-f]/,a=/[0-7]/,u=/[a-z_A-Z0-9\']/,o=/[-!#$%&*+.\/<=>?@\\^|~:\u03BB\u2192]/,f=/[(),;[\]`{}]/,l=/[ \t\v\f]/;function s(){return function(c,m){if(c.eatWhile(l))return null;var d=c.next();if(f.test(d)){if("{"==d&&c.eat("-")){var p="comment";return c.eat("#")&&(p="meta"),e(c,m,function e(t,r){return 0==r?s():function(n,i){for(var a=r;!n.eol();){var u=n.next();if("{"==u&&n.eat("-"))++a;else if("-"==u&&n.eat("}")&&0==--a)return i(s()),t}return i(e(t,a)),t}}(p,1))}return null}if("'"==d)return c.eat("\\"),c.next(),c.eat("'")?"string":"error";if('"'==d)return e(c,m,stringLiteral);if(r.test(d))return c.eatWhile(u),c.eat(".")?"qualifier":"variable-2";if(t.test(d)){var h=1===c.pos;return c.eatWhile(u),h?"type":"variable"}if(n.test(d)){if("0"==d){if(c.eat(/[xX]/))return c.eatWhile(i),"integer";if(c.eat(/[oO]/))return c.eatWhile(a),"number"}return c.eatWhile(n),p="number",c.eat(".")&&(p="number",c.eatWhile(n)),c.eat(/[eE]/)&&(p="number",c.eat(/[-+]/),c.eatWhile(n)),p}return o.test(d)?"-"==d&&c.eat(/-/)&&(c.eatWhile(/-/),!c.eat(o))?(c.skipToEnd(),"comment"):(c.eatWhile(o),"builtin"):"error"}}function stringLiteral(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(s()),"string";if("\\"==r){if(e.eol()||e.eat(l))return t(c),"string";e.eat("&")||e.next()}}return t(s()),"error"}function c(t,r){return t.eat("\\")?e(t,r,stringLiteral):(t.next(),r(s()),"error")}var m=function(){for(var e={},t=["case","of","as","if","then","else","let","in","infix","infixl","infixr","type","alias","input","output","foreign","loopback","module","where","import","exposing","_","..","|",":","=","\\",'"',"->","<-"],r=t.length;r--;)e[t[r]]="keyword";return e}();return{startState:function(){return{f:s()}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return m.hasOwnProperty(n)?m[n]:r}}})),e.defineMIME("text/x-elm","elm")}(r("./node_modules/codemirror/lib/codemirror.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL2VsbS9lbG0uanMiXSwibmFtZXMiOlsiQ29kZU1pcnJvciIsImRlZmluZU1vZGUiLCJzd2l0Y2hTdGF0ZSIsInNvdXJjZSIsInNldFN0YXRlIiwiZiIsInNtYWxsUkUiLCJsYXJnZVJFIiwiZGlnaXRSRSIsImhleGl0UkUiLCJvY3RpdFJFIiwiaWRSRSIsInN5bWJvbFJFIiwic3BlY2lhbFJFIiwid2hpdGVDaGFyUkUiLCJub3JtYWwiLCJlYXRXaGlsZSIsImNoIiwibmV4dCIsInRlc3QiLCJlYXQiLCJ0IiwibmNvbW1lbnQiLCJ0eXBlIiwibmVzdCIsImN1cnJOZXN0IiwiZW9sIiwic3RyaW5nTGl0ZXJhbCIsImlzRGVmIiwicG9zIiwic2tpcFRvRW5kIiwic3RyaW5nR2FwIiwid2VsbEtub3duV29yZHMiLCJ3a3ciLCJrZXl3b3JkcyIsImkiLCJsZW5ndGgiLCJzdGFydFN0YXRlIiwiY29weVN0YXRlIiwicyIsInRva2VuIiwic3RyZWFtIiwic3RhdGUiLCJ3IiwiY3VycmVudCIsImhhc093blByb3BlcnR5IiwiZGVmaW5lTUlNRSIsIm1vZCJdLCJtYXBwaW5ncyI6InVIQVVHLFNBQVNBLEdBQ1YsYUFFQUEsRUFBV0MsV0FBVyxPQUFPLFdBRTNCLFNBQVNDLEVBQVlDLEVBQVFDLEVBQVVDLEdBRXJDLE9BREFELEVBQVNDLEdBQ0ZBLEVBQUVGLEVBQVFDLEdBSW5CLElBQUlFLEVBQVUsU0FDVkMsRUFBVSxRQUNWQyxFQUFVLFFBQ1ZDLEVBQVUsY0FDVkMsRUFBVSxRQUNWQyxFQUFPLGlCQUNQQyxFQUFXLHVDQUNYQyxFQUFZLGVBQ1pDLEVBQWMsWUFFbEIsU0FBU0MsSUFDUCxPQUFPLFNBQVVaLEVBQVFDLEdBQ3ZCLEdBQUlELEVBQU9hLFNBQVNGLEdBQ2xCLE9BQU8sS0FHVCxJQUFJRyxFQUFLZCxFQUFPZSxPQUNoQixHQUFJTCxFQUFVTSxLQUFLRixHQUFLLENBQ3RCLEdBQVUs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QixNQUFPLENBQ0xJLFdBQVksV0FBZSxNQUFPLENBQUVoQyxFQUFHVSxNQUN2Q3VCLFVBQVksU0FBVUMsR0FBSyxNQUFPLENBQUVsQyxFQUFHa0MsRUFBRWxDLElBRXpDbUMsTUFBTyxTQUFTQyxFQUFRQyxHQUN0QixJQUFJckIsRUFBSXFCLEVBQU1yQyxFQUFFb0MsR0FBUSxTQUFTRixHQUFLRyxFQUFNckMsRUFBSWtDLEtBQzVDSSxFQUFJRixFQUFPRyxVQUNmLE9BQVFaLEVBQWVhLGVBQWVGLEdBQU1YLEVBQWVXLEdBQUt0QixPQU10RXJCLEVBQVc4QyxXQUFXLGFBQWMsT0F0TWxDQyxDQUFJLEVBQVEiLCJmaWxlIjoiNDIuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwiZWxtXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgZnVuY3Rpb24gc3dpdGNoU3RhdGUoc291cmNlLCBzZXRTdGF0ZSwgZikge1xuICAgICAgc2V0U3RhdGUoZik7XG4gICAgICByZXR1cm4gZihzb3VyY2UsIHNldFN0YXRlKTtcbiAgICB9XG5cbiAgICAvLyBUaGVzZSBzaG91bGQgYWxsIGJlIFVuaWNvZGUgZXh0ZW5kZWQsIGFzIHBlciB0aGUgSGFza2VsbCAyMDEwIHJlcG9ydFxuICAgIHZhciBzbWFsbFJFID0gL1thLXpfXS87XG4gICAgdmFyIGxhcmdlUkUgPSAvW0EtWl0vO1xuICAgIHZhciBkaWdpdFJFID0gL1swLTldLztcbiAgICB2YXIgaGV4aXRSRSA9IC9bMC05QS1GYS1mXS87XG4gICAgdmFyIG9jdGl0UkUgPSAvWzAtN10vO1xuICAgIHZhciBpZFJFID0gL1thLXpfQS1aMC05XFwnXS87XG4gICAgdmFyIHN5bWJvbFJFID0gL1stISMkJSYqKy5cXC88PT4/QFxcXFxefH46XFx1MDNCQlxcdTIxOTJdLztcbiAgICB2YXIgc3BlY2lhbFJFID0gL1soKSw7W1xcXWB7fV0vO1xuICAgIHZhciB3aGl0ZUNoYXJSRSA9IC9bIFxcdFxcdlxcZl0vOyAvLyBuZXdsaW5lcyBhcmUgaGFuZGxlZCBpbiB0b2tlbml6ZXJcblxuICAgIGZ1bmN0aW9uIG5vcm1hbCgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlLCBzZXRTdGF0ZSkge1xuICAgICAgICBpZiAoc291cmNlLmVhdFdoaWxlKHdoaXRlQ2hhclJFKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoID0gc291cmNlLm5leHQoKTtcbiAgICAgICAgaWYgKHNwZWNpYWxSRS50ZXN0KGNoKSkge1xuICAgICAgICAgIGlmIChjaCA9PSAneycgJiYgc291cmNlLmVhdCgnLScpKSB7XG4gICAgICAgICAgICB2YXIgdCA9IFwiY29tbWVudFwiO1xuICAgICAgICAgICAgaWYgKHNvdXJjZS5lYXQoJyMnKSkgdCA9IFwibWV0YVwiO1xuICAgICAgICAgICAgcmV0dXJuIHN3aXRjaFN0YXRlKHNvdXJjZSwgc2V0U3RhdGUsIG5jb21tZW50KHQsIDEpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT0gJ1xcJycpIHtcbiAgICAgICAgICBpZiAoc291cmNlLmVhdCgnXFxcXCcpKVxuICAgICAgICAgICAgc291cmNlLm5leHQoKTsgIC8vIHNob3VsZCBoYW5kbGUgb3RoZXIgZXNjYXBlcyBoZXJlXG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgc291cmNlLm5leHQoKTtcblxuICAgICAgICAgIGlmIChzb3VyY2UuZWF0KCdcXCcnKSlcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICAgIHJldHVybiBcImVycm9yXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2ggPT0gJ1wiJykge1xuICAgICAgICAgIHJldHVybiBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBzdHJpbmdMaXRlcmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXJnZVJFLnRlc3QoY2gpKSB7XG4gICAgICAgICAgc291cmNlLmVhdFdoaWxlKGlkUkUpO1xuICAgICAgICAgIGlmIChzb3VyY2UuZWF0KCcuJykpXG4gICAgICAgICAgICByZXR1cm4gXCJxdWFsaWZpZXJcIjtcbiAgICAgICAgICByZXR1cm4gXCJ2YXJpYWJsZS0yXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc21hbGxSRS50ZXN0KGNoKSkge1xuICAgICAgICAgIHZhciBpc0RlZiA9IHNvdXJjZS5wb3MgPT09IDE7XG4gICAgICAgICAgc291cmNlLmVhdFdoaWxlKGlkUkUpO1xuICAgICAgICAgIHJldHVybiBpc0RlZiA/IFwidHlwZVwiIDogXCJ2YXJpYWJsZVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpZ2l0UkUudGVzdChjaCkpIHtcbiAgICAgICAgICBpZiAoY2ggPT0gJzAnKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmVhdCgvW3hYXS8pKSB7XG4gICAgICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShoZXhpdFJFKTsgLy8gc2hvdWxkIHJlcXVpcmUgYXQgbGVhc3QgMVxuICAgICAgICAgICAgICByZXR1cm4gXCJpbnRlZ2VyXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc291cmNlLmVhdCgvW29PXS8pKSB7XG4gICAgICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShvY3RpdFJFKTsgLy8gc2hvdWxkIHJlcXVpcmUgYXQgbGVhc3QgMVxuICAgICAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgc291cmNlLmVhdFdoaWxlKGRpZ2l0UkUpO1xuICAgICAgICAgIHZhciB0ID0gXCJudW1iZXJcIjtcbiAgICAgICAgICBpZiAoc291cmNlLmVhdCgnLicpKSB7XG4gICAgICAgICAgICB0ID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShkaWdpdFJFKTsgLy8gc2hvdWxkIHJlcXVpcmUgYXQgbGVhc3QgMVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc291cmNlLmVhdCgvW2VFXS8pKSB7XG4gICAgICAgICAgICB0ID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgIHNvdXJjZS5lYXQoL1stK10vKTtcbiAgICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShkaWdpdFJFKTsgLy8gc2hvdWxkIHJlcXVpcmUgYXQgbGVhc3QgMVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzeW1ib2xSRS50ZXN0KGNoKSkge1xuICAgICAgICAgIGlmIChjaCA9PSAnLScgJiYgc291cmNlLmVhdCgvLS8pKSB7XG4gICAgICAgICAgICBzb3VyY2UuZWF0V2hpbGUoLy0vKTtcbiAgICAgICAgICAgIGlmICghc291cmNlLmVhdChzeW1ib2xSRSkpIHtcbiAgICAgICAgICAgICAgc291cmNlLnNraXBUb0VuZCgpO1xuICAgICAgICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNvdXJjZS5lYXRXaGlsZShzeW1ib2xSRSk7XG4gICAgICAgICAgcmV0dXJuIFwiYnVpbHRpblwiO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFwiZXJyb3JcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBuY29tbWVudCh0eXBlLCBuZXN0KSB7XG4gICAgICBpZiAobmVzdCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBub3JtYWwoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmdW5jdGlvbihzb3VyY2UsIHNldFN0YXRlKSB7XG4gICAgICAgIHZhciBjdXJyTmVzdCA9IG5lc3Q7XG4gICAgICAgIHdoaWxlICghc291cmNlLmVvbCgpKSB7XG4gICAgICAgICAgdmFyIGNoID0gc291cmNlLm5leHQoKTtcbiAgICAgICAgICBpZiAoY2ggPT0gJ3snICYmIHNvdXJjZS5lYXQoJy0nKSkge1xuICAgICAgICAgICAgKytjdXJyTmVzdDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoID09ICctJyAmJiBzb3VyY2UuZWF0KCd9JykpIHtcbiAgICAgICAgICAgIC0tY3Vyck5lc3Q7XG4gICAgICAgICAgICBpZiAoY3Vyck5lc3QgPT0gMCkge1xuICAgICAgICAgICAgICBzZXRTdGF0ZShub3JtYWwoKSk7XG4gICAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzZXRTdGF0ZShuY29tbWVudCh0eXBlLCBjdXJyTmVzdCkpO1xuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdHJpbmdMaXRlcmFsKHNvdXJjZSwgc2V0U3RhdGUpIHtcbiAgICAgIHdoaWxlICghc291cmNlLmVvbCgpKSB7XG4gICAgICAgIHZhciBjaCA9IHNvdXJjZS5uZXh0KCk7XG4gICAgICAgIGlmIChjaCA9PSAnXCInKSB7XG4gICAgICAgICAgc2V0U3RhdGUobm9ybWFsKCkpO1xuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PSAnXFxcXCcpIHtcbiAgICAgICAgICBpZiAoc291cmNlLmVvbCgpIHx8IHNvdXJjZS5lYXQod2hpdGVDaGFyUkUpKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShzdHJpbmdHYXApO1xuICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghc291cmNlLmVhdCgnJicpKSBzb3VyY2UubmV4dCgpOyAvLyBzaG91bGQgaGFuZGxlIG90aGVyIGVzY2FwZXMgaGVyZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRTdGF0ZShub3JtYWwoKSk7XG4gICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0cmluZ0dhcChzb3VyY2UsIHNldFN0YXRlKSB7XG4gICAgICBpZiAoc291cmNlLmVhdCgnXFxcXCcpKSB7XG4gICAgICAgIHJldHVybiBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBzdHJpbmdMaXRlcmFsKTtcbiAgICAgIH1cbiAgICAgIHNvdXJjZS5uZXh0KCk7XG4gICAgICBzZXRTdGF0ZShub3JtYWwoKSk7XG4gICAgICByZXR1cm4gXCJlcnJvclwiO1xuICAgIH1cblxuXG4gICAgdmFyIHdlbGxLbm93bldvcmRzID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHdrdyA9IHt9O1xuXG4gICAgICB2YXIga2V5d29yZHMgPSBbXG4gICAgICAgIFwiY2FzZVwiLCBcIm9mXCIsIFwiYXNcIixcbiAgICAgICAgXCJpZlwiLCBcInRoZW5cIiwgXCJlbHNlXCIsXG4gICAgICAgIFwibGV0XCIsIFwiaW5cIixcbiAgICAgICAgXCJpbmZpeFwiLCBcImluZml4bFwiLCBcImluZml4clwiLFxuICAgICAgICBcInR5cGVcIiwgXCJhbGlhc1wiLFxuICAgICAgICBcImlucHV0XCIsIFwib3V0cHV0XCIsIFwiZm9yZWlnblwiLCBcImxvb3BiYWNrXCIsXG4gICAgICAgIFwibW9kdWxlXCIsIFwid2hlcmVcIiwgXCJpbXBvcnRcIiwgXCJleHBvc2luZ1wiLFxuICAgICAgICBcIl9cIiwgXCIuLlwiLCBcInxcIiwgXCI6XCIsIFwiPVwiLCBcIlxcXFxcIiwgXCJcXFwiXCIsIFwiLT5cIiwgXCI8LVwiXG4gICAgICBdO1xuXG4gICAgICBmb3IgKHZhciBpID0ga2V5d29yZHMubGVuZ3RoOyBpLS07KVxuICAgICAgICB3a3dba2V5d29yZHNbaV1dID0gXCJrZXl3b3JkXCI7XG5cbiAgICAgIHJldHVybiB3a3c7XG4gICAgfSkoKTtcblxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24gKCkgIHsgcmV0dXJuIHsgZjogbm9ybWFsKCkgfTsgfSxcbiAgICAgIGNvcHlTdGF0ZTogIGZ1bmN0aW9uIChzKSB7IHJldHVybiB7IGY6IHMuZiB9OyB9LFxuXG4gICAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICB2YXIgdCA9IHN0YXRlLmYoc3RyZWFtLCBmdW5jdGlvbihzKSB7IHN0YXRlLmYgPSBzOyB9KTtcbiAgICAgICAgdmFyIHcgPSBzdHJlYW0uY3VycmVudCgpO1xuICAgICAgICByZXR1cm4gKHdlbGxLbm93bldvcmRzLmhhc093blByb3BlcnR5KHcpKSA/IHdlbGxLbm93bldvcmRzW3ddIDogdDtcbiAgICAgIH1cbiAgICB9O1xuXG4gIH0pO1xuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1lbG1cIiwgXCJlbG1cIik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=