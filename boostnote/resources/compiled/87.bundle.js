(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{"./node_modules/codemirror/mode/sass/sass.js":function(e,r,t){!function(e){"use strict";e.defineMode("sass",(function(r){var t,n=e.mimeModes["text/css"],o=n.propertyKeywords||{},i=n.colorKeywords||{},a=n.valueKeywords||{},s=n.fontProperties||{},u=new RegExp("^"+["true","false","null","auto"].join("|")),f=new RegExp("^"+["\\(","\\)","=",">","<","==",">=","<=","\\+","-","\\!=","/","\\*","%","and","or","not",";","\\{","\\}",":"].join("|")),c=/^::?[a-zA-Z_][\w\-]*/;function p(e){return!e.peek()||e.match(/\s+$/,!1)}function l(e,r){var t=e.peek();return")"===t?(e.next(),r.tokenizer=x,"operator"):"("===t?(e.next(),e.eatSpace(),"operator"):"'"===t||'"'===t?(r.tokenizer=h(e.next()),"string"):(r.tokenizer=h(")",!1),"string")}function m(e,r){return function(t,n){return t.sol()&&t.indentation()<=e?(n.tokenizer=x,x(t,n)):(r&&t.skipTo("*/")?(t.next(),t.next(),n.tokenizer=x):t.skipToEnd(),"comment")}}function h(e,r){return null==r&&(r=!0),function t(n,o){var i=n.next(),a=n.peek(),s=n.string.charAt(n.pos-2);return"\\"!==i&&a===e||i===e&&"\\"!==s?(i!==e&&r&&n.next(),p(n)&&(o.cursorHalf=0),o.tokenizer=x,"string"):"#"===i&&"{"===a?(o.tokenizer=d(t),n.next(),"operator"):"string"}}function d(e){return function(r,t){return"}"===r.peek()?(r.next(),t.tokenizer=e,"operator"):x(r,t)}}function w(e){if(0==e.indentCount){e.indentCount++;var t=e.scopes[0].offset+r.indentUnit;e.scopes.unshift({offset:t})}}function k(e){1!=e.scopes.length&&e.scopes.shift()}function x(e,r){var n=e.peek();if(e.match("/*"))return r.tokenizer=m(e.indentation(),!0),r.tokenizer(e,r);if(e.match("//"))return r.tokenizer=m(e.indentation(),!1),r.tokenizer(e,r);if(e.match("#{"))return r.tokenizer=d(x),"operator";if('"'===n||"'"===n)return e.next(),r.tokenizer=h(n),"string";if(r.cursorHalf){if("#"===n&&(e.next(),e.match(/[0-9a-fA-F]{6}|[0-9a-fA-F]{3}/)))return p(e)&&(r.cursorHalf=0),"number";if(e.match(/^-?[0-9\.]+/))return p(e)&&(r.cursorHalf=0),"number";if(e.match(/^(px|em|in)\b/))return p(e)&&(r.cursorHalf=0),"unit";if(e.match(u))return p(e)&&(r.cursorHalf=0),"keyword";if(e.match(/^url/)&&"("===e.peek())return r.tokenizer=l,p(e)&&(r.cursorHalf=0),"atom";if("$"===n)return e.next(),e.eatWhile(/[\w-]/),p(e)&&(r.cursorHalf=0),"variable-2";if("!"===n)return e.next(),r.cursorHalf=0,e.match(/^[\w]+/)?"keyword":"operator";if(e.match(f))return p(e)&&(r.cursorHalf=0),"operator";if(e.eatWhile(/[\w-]/))return p(e)&&(r.cursorHalf=0),t=e.current().toLowerCase(),a.hasOwnProperty(t)?"atom":i.hasOwnProperty(t)?"keyword":o.hasOwnProperty(t)?(r.prevProp=e.current().toLowerCase(),"property"):"tag";if(p(e))return r.cursorHalf=0,null}else{if("-"===n&&e.match(/^-\w+-/))return"meta";if("."===n){if(e.next(),e.match(/^[\w-]+/))return w(r),"qualifier";if("#"===e.peek())return w(r),"tag"}if("#"===n){if(e.next(),e.match(/^[\w-]+/))return w(r),"builtin";if("#"===e.peek())return w(r),"tag"}if("$"===n)return e.next(),e.eatWhile(/[\w-]/),"variable-2";if(e.match(/^-?[0-9\.]+/))return"number";if(e.match(/^(px|em|in)\b/))return"unit";if(e.match(u))return"keyword";if(e.match(/^url/)&&"("===e.peek())return r.tokenizer=l,"atom";if("="===n&&e.match(/^=[\w-]+/))return w(r),"meta";if("+"===n&&e.match(/^\+[\w-]+/))return"variable-3";if("@"===n&&e.match(/@extend/)&&(e.match(/\s*[\w]/)||k(r)),e.match(/^@(else if|if|media|else|for|each|while|mixin|function)/))return w(r),"def";if("@"===n)return e.next(),e.eatWhile(/[\w-]/),"def";if(e.eatWhile(/[\w-]/)){if(e.match(/ *: *[\w-\+\$#!\("']/,!1)){t=e.current().toLowerCase();var y=r.prevProp+"-"+t;return o.hasOwnProperty(y)?"property":o.hasOwnProperty(t)?(r.prevProp=t,"property"):s.hasOwnProperty(t)?"property":"tag"}return e.match(/ *:/,!1)?(w(r),r.cursorHalf=1,r.prevProp=e.current().toLowerCase(),"property"):e.match(/ *,/,!1)?"tag":(w(r),"tag")}if(":"===n)return e.match(c)?"variable-3":(e.next(),r.cursorHalf=1,"operator")}return e.match(f)?"operator":(e.next(),null)}return{startState:function(){return{tokenizer:x,scopes:[{offset:0,type:"sass"}],indentCount:0,cursorHalf:0,definedVars:[],definedMixins:[]}},token:function(e,t){var n=function(e,t){e.sol()&&(t.indentCount=0);var n=t.tokenizer(e,t),o=e.current();if("@return"!==o&&"}"!==o||k(t),null!==n){for(var i=e.pos-o.length+r.indentUnit*t.indentCount,a=[],s=0;s<t.scopes.length;s++){var u=t.scopes[s];u.offset<=i&&a.push(u)}t.scopes=a}return n}(e,t);return t.lastToken={style:n,content:e.current()},n},indent:function(e){return e.scopes[0].offset}}}),"css"),e.defineMIME("text/x-sass","sass")}(t("./node_modules/codemirror/lib/codemirror.js"),t("./node_modules/codemirror/mode/css/css.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL3Nhc3Mvc2Fzcy5qcyJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsImNvbmZpZyIsIndvcmQiLCJjc3NNb2RlIiwibWltZU1vZGVzIiwicHJvcGVydHlLZXl3b3JkcyIsImNvbG9yS2V5d29yZHMiLCJ2YWx1ZUtleXdvcmRzIiwiZm9udFByb3BlcnRpZXMiLCJrZXl3b3Jkc1JlZ2V4cCIsIlJlZ0V4cCIsImpvaW4iLCJvcFJlZ2V4cCIsInBzZXVkb0VsZW1lbnRzUmVnZXhwIiwiaXNFbmRMaW5lIiwic3RyZWFtIiwicGVlayIsIm1hdGNoIiwidXJsVG9rZW5zIiwic3RhdGUiLCJjaCIsIm5leHQiLCJ0b2tlbml6ZXIiLCJ0b2tlbkJhc2UiLCJlYXRTcGFjZSIsImJ1aWxkU3RyaW5nVG9rZW5pemVyIiwiY29tbWVudCIsImluZGVudGF0aW9uIiwibXVsdGlMaW5lIiwic29sIiwic2tpcFRvIiwic2tpcFRvRW5kIiwicXVvdGUiLCJncmVlZHkiLCJzdHJpbmdUb2tlbml6ZXIiLCJuZXh0Q2hhciIsInBlZWtDaGFyIiwicHJldmlvdXNDaGFyIiwic3RyaW5nIiwiY2hhckF0IiwicG9zIiwiY3Vyc29ySGFsZiIsImJ1aWxkSW50ZXJwb2xhdGlvblRva2VuaXplciIsImN1cnJlbnRUb2tlbml6ZXIiLCJpbmRlbnQiLCJpbmRlbnRDb3VudCIsImN1cnJlbnRPZmZzZXQiLCJzY29wZXMiLCJvZmZzZXQiLCJpbmRlbnRVbml0IiwidW5zaGlmdCIsImRlZGVudCIsImxlbmd0aCIsInNoaWZ0IiwiZWF0V2hpbGUiLCJjdXJyZW50IiwidG9Mb3dlckNhc2UiLCJoYXNPd25Qcm9wZXJ0eSIsInByZXZQcm9wIiwicHJvcCIsInN0YXJ0U3RhdGUiLCJ0eXBlIiwiZGVmaW5lZFZhcnMiLCJkZWZpbmVkTWl4aW5zIiwidG9rZW4iLCJzdHlsZSIsIndpdGhDdXJyZW50SW5kZW50IiwibmV3U2NvcGVzIiwiaSIsInNjb3BlIiwicHVzaCIsInRva2VuTGV4ZXIiLCJsYXN0VG9rZW4iLCJjb250ZW50IiwiZGVmaW5lTUlNRSIsIm1vZCJdLCJtYXBwaW5ncyI6InlIQVVHLFNBQVNBLEdBQ1osYUFFQUEsRUFBV0MsV0FBVyxRQUFRLFNBQVNDLEdBQ3JDLElBbUJJQyxFQW5CQUMsRUFBVUosRUFBV0ssVUFBVSxZQUMvQkMsRUFBbUJGLEVBQVFFLGtCQUFvQixHQUMvQ0MsRUFBZ0JILEVBQVFHLGVBQWlCLEdBQ3pDQyxFQUFnQkosRUFBUUksZUFBaUIsR0FDekNDLEVBQWlCTCxFQUFRSyxnQkFBa0IsR0FPM0NDLEVBQWlCLElBQUlDLE9BQU8sSUFEakIsQ0FBQyxPQUFRLFFBQVMsT0FBUSxRQUNNQyxLQUFLLE1BSWhEQyxFQVJLLElBQUlGLE9BQU8sSUFNSixDQUFDLE1BQU8sTUFBTyxJQUFLLElBQUssSUFBSyxLQUFNLEtBQU0sS0FBTSxNQUFPLElBQ3RELE9BQVEsSUFBSyxNQUFPLElBQUssTUFBTyxLQUFNLE1BQU8sSUFBSSxNQUFNLE1BQU0sS0FQOUNDLEtBQUssTUFVakNFLEVBQXVCLHVCQUkzQixTQUFTQyxFQUFVQyxHQUNqQixPQUFRQSxFQUFPQyxRQUFVRCxFQUFPRSxNQUFNLFFBQVEsR0FHaEQsU0FBU0MsRUFBVUgsRUFBUUksR0FDekIsSUFBSUMsRUFBS0wsRUFBT0MsT0FFaEIsTUFBVyxNQUFQSSxHQUNGTCxFQUFPTSxPQUNQRixFQUFNRyxVQUFZQyxFQUNYLFlBQ1MsTUFBUEgsR0FDVEwsRUFBT00sT0FDUE4sRUFBT1MsV0FFQSxZQUNTLE1BQVBKLEdBQXFCLE1BQVBBLEdBQ3ZCRCxFQUFNRyxVQUFZRyxFQUFxQlYsRUFBT00sUUFDdkMsV0FFUEYsRUFBTUcsVUFBWUcsRUFBcUIsS0FBSyxHQUNyQyxVQUdYLFNBQVNDLEVBQVFDLEVBQWFDLEdBQzVCLE9BQU8sU0FBU2IsRUFBUUksR0FDdEIsT0FBSUosRUFBT2MsT0FBU2QsRUFBT1ksZUFBaUJBLEdBQzFDUixFQUFNRyxVQUFZ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RUFBT2MsUUFBT1YsRUFBTTBCLFlBQWMsR0FDdEMsSUFBSW9CLEVBQVE5QyxFQUFNRyxVQUFVUCxFQUFRSSxHQUNoQ29DLEVBQVV4QyxFQUFPd0MsVUFNckIsR0FKZ0IsWUFBWkEsR0FBcUMsTUFBWkEsR0FDM0JKLEVBQU9oQyxHQUdLLE9BQVY4QyxFQUFnQixDQU9sQixJQU5BLElBRUlDLEVBRmVuRCxFQUFPeUIsSUFBTWUsRUFBUUgsT0FFQW5ELEVBQU9nRCxXQUFhOUIsRUFBTTBCLFlBRTlEc0IsRUFBWSxHQUVQQyxFQUFJLEVBQUdBLEVBQUlqRCxFQUFNNEIsT0FBT0ssT0FBUWdCLElBQUssQ0FDNUMsSUFBSUMsRUFBUWxELEVBQU00QixPQUFPcUIsR0FFckJDLEVBQU1yQixRQUFVa0IsR0FDbEJDLEVBQVVHLEtBQUtELEdBR25CbEQsRUFBTTRCLE9BQVNvQixFQUlqQixPQUFPRixFQWdCT00sQ0FBV3hELEVBQVFJLEdBSS9CLE9BRkFBLEVBQU1xRCxVQUFZLENBQUVQLE1BQU9BLEVBQU9RLFFBQVMxRCxFQUFPd0MsV0FFM0NVLEdBR1RyQixPQUFRLFNBQVN6QixHQUNmLE9BQU9BLEVBQU00QixPQUFPLEdBQUdDLFdBRzFCLE9BRUhqRCxFQUFXMkUsV0FBVyxjQUFlLFFBOWJqQ0MsQ0FBSSxFQUFRLCtDQUF5QixFQUFRIiwiZmlsZSI6Ijg3LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIiksIHJlcXVpcmUoXCIuLi9jc3MvY3NzXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIsIFwiLi4vY3NzL2Nzc1wiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblwidXNlIHN0cmljdFwiO1xuXG5Db2RlTWlycm9yLmRlZmluZU1vZGUoXCJzYXNzXCIsIGZ1bmN0aW9uKGNvbmZpZykge1xuICB2YXIgY3NzTW9kZSA9IENvZGVNaXJyb3IubWltZU1vZGVzW1widGV4dC9jc3NcIl07XG4gIHZhciBwcm9wZXJ0eUtleXdvcmRzID0gY3NzTW9kZS5wcm9wZXJ0eUtleXdvcmRzIHx8IHt9LFxuICAgICAgY29sb3JLZXl3b3JkcyA9IGNzc01vZGUuY29sb3JLZXl3b3JkcyB8fCB7fSxcbiAgICAgIHZhbHVlS2V5d29yZHMgPSBjc3NNb2RlLnZhbHVlS2V5d29yZHMgfHwge30sXG4gICAgICBmb250UHJvcGVydGllcyA9IGNzc01vZGUuZm9udFByb3BlcnRpZXMgfHwge307XG5cbiAgZnVuY3Rpb24gdG9rZW5SZWdleHAod29yZHMpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl5cIiArIHdvcmRzLmpvaW4oXCJ8XCIpKTtcbiAgfVxuXG4gIHZhciBrZXl3b3JkcyA9IFtcInRydWVcIiwgXCJmYWxzZVwiLCBcIm51bGxcIiwgXCJhdXRvXCJdO1xuICB2YXIga2V5d29yZHNSZWdleHAgPSBuZXcgUmVnRXhwKFwiXlwiICsga2V5d29yZHMuam9pbihcInxcIikpO1xuXG4gIHZhciBvcGVyYXRvcnMgPSBbXCJcXFxcKFwiLCBcIlxcXFwpXCIsIFwiPVwiLCBcIj5cIiwgXCI8XCIsIFwiPT1cIiwgXCI+PVwiLCBcIjw9XCIsIFwiXFxcXCtcIiwgXCItXCIsXG4gICAgICAgICAgICAgICAgICAgXCJcXFxcIT1cIiwgXCIvXCIsIFwiXFxcXCpcIiwgXCIlXCIsIFwiYW5kXCIsIFwib3JcIiwgXCJub3RcIiwgXCI7XCIsXCJcXFxce1wiLFwiXFxcXH1cIixcIjpcIl07XG4gIHZhciBvcFJlZ2V4cCA9IHRva2VuUmVnZXhwKG9wZXJhdG9ycyk7XG5cbiAgdmFyIHBzZXVkb0VsZW1lbnRzUmVnZXhwID0gL146Oj9bYS16QS1aX11bXFx3XFwtXSovO1xuXG4gIHZhciB3b3JkO1xuXG4gIGZ1bmN0aW9uIGlzRW5kTGluZShzdHJlYW0pIHtcbiAgICByZXR1cm4gIXN0cmVhbS5wZWVrKCkgfHwgc3RyZWFtLm1hdGNoKC9cXHMrJC8sIGZhbHNlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVybFRva2VucyhzdHJlYW0sIHN0YXRlKSB7XG4gICAgdmFyIGNoID0gc3RyZWFtLnBlZWsoKTtcblxuICAgIGlmIChjaCA9PT0gXCIpXCIpIHtcbiAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICBzdGF0ZS50b2tlbml6ZXIgPSB0b2tlbkJhc2U7XG4gICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgIH0gZWxzZSBpZiAoY2ggPT09IFwiKFwiKSB7XG4gICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgc3RyZWFtLmVhdFNwYWNlKCk7XG5cbiAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgfSBlbHNlIGlmIChjaCA9PT0gXCInXCIgfHwgY2ggPT09ICdcIicpIHtcbiAgICAgIHN0YXRlLnRva2VuaXplciA9IGJ1aWxkU3RyaW5nVG9rZW5pemVyKHN0cmVhbS5uZXh0KCkpO1xuICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXRlLnRva2VuaXplciA9IGJ1aWxkU3RyaW5nVG9rZW5pemVyKFwiKVwiLCBmYWxzZSk7XG4gICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gY29tbWVudChpbmRlbnRhdGlvbiwgbXVsdGlMaW5lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIGlmIChzdHJlYW0uc29sKCkgJiYgc3RyZWFtLmluZGVudGF0aW9uKCkgPD0gaW5kZW50YXRpb24pIHtcbiAgICAgICAgc3RhdGUudG9rZW5pemVyID0gdG9rZW5CYXNlO1xuICAgICAgICByZXR1cm4gdG9rZW5CYXNlKHN0cmVhbSwgc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAobXVsdGlMaW5lICYmIHN0cmVhbS5za2lwVG8oXCIqL1wiKSkge1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICBzdGF0ZS50b2tlbml6ZXIgPSB0b2tlbkJhc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJlYW0uc2tpcFRvRW5kKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYnVpbGRTdHJpbmdUb2tlbml6ZXIocXVvdGUsIGdyZWVkeSkge1xuICAgIGlmIChncmVlZHkgPT0gbnVsbCkgeyBncmVlZHkgPSB0cnVlOyB9XG5cbiAgICBmdW5jdGlvbiBzdHJpbmdUb2tlbml6ZXIoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgdmFyIG5leHRDaGFyID0gc3RyZWFtLm5leHQoKTtcbiAgICAgIHZhciBwZWVrQ2hhciA9IHN0cmVhbS5wZWVrKCk7XG4gICAgICB2YXIgcHJldmlvdXNDaGFyID0gc3RyZWFtLnN0cmluZy5jaGFyQXQoc3RyZWFtLnBvcy0yKTtcblxuICAgICAgdmFyIGVuZGluZ1N0cmluZyA9ICgobmV4dENoYXIgIT09IFwiXFxcXFwiICYmIHBlZWtDaGFyID09PSBxdW90ZSkgfHwgKG5leHRDaGFyID09PSBxdW90ZSAmJiBwcmV2aW91c0NoYXIgIT09IFwiXFxcXFwiKSk7XG5cbiAgICAgIGlmIChlbmRpbmdTdHJpbmcpIHtcbiAgICAgICAgaWYgKG5leHRDaGFyICE9PSBxdW90ZSAmJiBncmVlZHkpIHsgc3RyZWFtLm5leHQoKTsgfVxuICAgICAgICBpZiAoaXNFbmRMaW5lKHN0cmVhbSkpIHtcbiAgICAgICAgICBzdGF0ZS5jdXJzb3JIYWxmID0gMDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS50b2tlbml6ZXIgPSB0b2tlbkJhc2U7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgfSBlbHNlIGlmIChuZXh0Q2hhciA9PT0gXCIjXCIgJiYgcGVla0NoYXIgPT09IFwie1wiKSB7XG4gICAgICAgIHN0YXRlLnRva2VuaXplciA9IGJ1aWxkSW50ZXJwb2xhdGlvblRva2VuaXplcihzdHJpbmdUb2tlbml6ZXIpO1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ1Rva2VuaXplcjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1aWxkSW50ZXJwb2xhdGlvblRva2VuaXplcihjdXJyZW50VG9rZW5pemVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIGlmIChzdHJlYW0ucGVlaygpID09PSBcIn1cIikge1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICBzdGF0ZS50b2tlbml6ZXIgPSBjdXJyZW50VG9rZW5pemVyO1xuICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRva2VuQmFzZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gaW5kZW50KHN0YXRlKSB7XG4gICAgaWYgKHN0YXRlLmluZGVudENvdW50ID09IDApIHtcbiAgICAgIHN0YXRlLmluZGVudENvdW50Kys7XG4gICAgICB2YXIgbGFzdFNjb3BlT2Zmc2V0ID0gc3RhdGUuc2NvcGVzWzBdLm9mZnNldDtcbiAgICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gbGFzdFNjb3BlT2Zmc2V0ICsgY29uZmlnLmluZGVudFVuaXQ7XG4gICAgICBzdGF0ZS5zY29wZXMudW5zaGlmdCh7IG9mZnNldDpjdXJyZW50T2Zmc2V0IH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlZGVudChzdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5zY29wZXMubGVuZ3RoID09IDEpIHJldHVybjtcblxuICAgIHN0YXRlLnNjb3Blcy5zaGlmdCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5CYXNlKHN0cmVhbSwgc3RhdGUpIHtcbiAgICB2YXIgY2ggPSBzdHJlYW0ucGVlaygpO1xuXG4gICAgLy8gQ29tbWVudFxuICAgIGlmIChzdHJlYW0ubWF0Y2goXCIvKlwiKSkge1xuICAgICAgc3RhdGUudG9rZW5pemVyID0gY29tbWVudChzdHJlYW0uaW5kZW50YXRpb24oKSwgdHJ1ZSk7XG4gICAgICByZXR1cm4gc3RhdGUudG9rZW5pemVyKHN0cmVhbSwgc3RhdGUpO1xuICAgIH1cbiAgICBpZiAoc3RyZWFtLm1hdGNoKFwiLy9cIikpIHtcbiAgICAgIHN0YXRlLnRva2VuaXplciA9IGNvbW1lbnQoc3RyZWFtLmluZGVudGF0aW9uKCksIGZhbHNlKTtcbiAgICAgIHJldHVybiBzdGF0ZS50b2tlbml6ZXIoc3RyZWFtLCBzdGF0ZSk7XG4gICAgfVxuXG4gICAgLy8gSW50ZXJwb2xhdGlvblxuICAgIGlmIChzdHJlYW0ubWF0Y2goXCIje1wiKSkge1xuICAgICAgc3RhdGUudG9rZW5pemVyID0gYnVpbGRJbnRlcnBvbGF0aW9uVG9rZW5pemVyKHRva2VuQmFzZSk7XG4gICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgIH1cblxuICAgIC8vIFN0cmluZ3NcbiAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09IFwiJ1wiKSB7XG4gICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgc3RhdGUudG9rZW5pemVyID0gYnVpbGRTdHJpbmdUb2tlbml6ZXIoY2gpO1xuICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfVxuXG4gICAgaWYoIXN0YXRlLmN1cnNvckhhbGYpey8vIHN0YXRlLmN1cnNvckhhbGYgPT09IDBcbiAgICAvLyBmaXJzdCBoYWxmIGkuZS4gYmVmb3JlIDogZm9yIGtleS12YWx1ZSBwYWlyc1xuICAgIC8vIGluY2x1ZGluZyBzZWxlY3RvcnNcblxuICAgICAgaWYgKGNoID09PSBcIi1cIikge1xuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eLVxcdystLykpIHtcbiAgICAgICAgICByZXR1cm4gXCJtZXRhXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSBcIi5cIikge1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eW1xcdy1dKy8pKSB7XG4gICAgICAgICAgaW5kZW50KHN0YXRlKTtcbiAgICAgICAgICByZXR1cm4gXCJxdWFsaWZpZXJcIjtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0ucGVlaygpID09PSBcIiNcIikge1xuICAgICAgICAgIGluZGVudChzdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoID09PSBcIiNcIikge1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAvLyBJRCBzZWxlY3RvcnNcbiAgICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvXltcXHctXSsvKSkge1xuICAgICAgICAgIGluZGVudChzdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIFwiYnVpbHRpblwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHJlYW0ucGVlaygpID09PSBcIiNcIikge1xuICAgICAgICAgIGluZGVudChzdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVmFyaWFibGVzXG4gICAgICBpZiAoY2ggPT09IFwiJFwiKSB7XG4gICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvW1xcdy1dLyk7XG4gICAgICAgIHJldHVybiBcInZhcmlhYmxlLTJcIjtcbiAgICAgIH1cblxuICAgICAgLy8gTnVtYmVyc1xuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvXi0/WzAtOVxcLl0rLykpXG4gICAgICAgIHJldHVybiBcIm51bWJlclwiO1xuXG4gICAgICAvLyBVbml0c1xuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvXihweHxlbXxpbilcXGIvKSlcbiAgICAgICAgcmV0dXJuIFwidW5pdFwiO1xuXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKGtleXdvcmRzUmVnZXhwKSlcbiAgICAgICAgcmV0dXJuIFwia2V5d29yZFwiO1xuXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKC9edXJsLykgJiYgc3RyZWFtLnBlZWsoKSA9PT0gXCIoXCIpIHtcbiAgICAgICAgc3RhdGUudG9rZW5pemVyID0gdXJsVG9rZW5zO1xuICAgICAgICByZXR1cm4gXCJhdG9tXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaCA9PT0gXCI9XCIpIHtcbiAgICAgICAgLy8gTWF0Y2ggc2hvcnRjdXQgbWl4aW4gZGVmaW5pdGlvblxuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9ePVtcXHctXSsvKSkge1xuICAgICAgICAgIGluZGVudChzdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIFwibWV0YVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaCA9PT0gXCIrXCIpIHtcbiAgICAgICAgLy8gTWF0Y2ggc2hvcnRjdXQgbWl4aW4gZGVmaW5pdGlvblxuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eXFwrW1xcdy1dKy8pKXtcbiAgICAgICAgICByZXR1cm4gXCJ2YXJpYWJsZS0zXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoY2ggPT09IFwiQFwiKXtcbiAgICAgICAgaWYoc3RyZWFtLm1hdGNoKC9AZXh0ZW5kLykpe1xuICAgICAgICAgIGlmKCFzdHJlYW0ubWF0Y2goL1xccypbXFx3XS8pKVxuICAgICAgICAgICAgZGVkZW50KHN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC8vIEluZGVudCBEaXJlY3RpdmVzXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eQChlbHNlIGlmfGlmfG1lZGlhfGVsc2V8Zm9yfGVhY2h8d2hpbGV8bWl4aW58ZnVuY3Rpb24pLykpIHtcbiAgICAgICAgaW5kZW50KHN0YXRlKTtcbiAgICAgICAgcmV0dXJuIFwiZGVmXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyIERpcmVjdGl2ZXNcbiAgICAgIGlmIChjaCA9PT0gXCJAXCIpIHtcbiAgICAgICAgc3RyZWFtLm5leHQoKTtcbiAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3LV0vKTtcbiAgICAgICAgcmV0dXJuIFwiZGVmXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJlYW0uZWF0V2hpbGUoL1tcXHctXS8pKXtcbiAgICAgICAgaWYoc3RyZWFtLm1hdGNoKC8gKjogKltcXHctXFwrXFwkIyFcXChcIiddLyxmYWxzZSkpe1xuICAgICAgICAgIHdvcmQgPSBzdHJlYW0uY3VycmVudCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdmFyIHByb3AgPSBzdGF0ZS5wcmV2UHJvcCArIFwiLVwiICsgd29yZDtcbiAgICAgICAgICBpZiAocHJvcGVydHlLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwicHJvcGVydHlcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHByb3BlcnR5S2V5d29yZHMuaGFzT3duUHJvcGVydHkod29yZCkpIHtcbiAgICAgICAgICAgIHN0YXRlLnByZXZQcm9wID0gd29yZDtcbiAgICAgICAgICAgIHJldHVybiBcInByb3BlcnR5XCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChmb250UHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eSh3b3JkKSkge1xuICAgICAgICAgICAgcmV0dXJuIFwicHJvcGVydHlcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzdHJlYW0ubWF0Y2goLyAqOi8sZmFsc2UpKXtcbiAgICAgICAgICBpbmRlbnQoc3RhdGUpO1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAxO1xuICAgICAgICAgIHN0YXRlLnByZXZQcm9wID0gc3RyZWFtLmN1cnJlbnQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBcInByb3BlcnR5XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihzdHJlYW0ubWF0Y2goLyAqLC8sZmFsc2UpKXtcbiAgICAgICAgICByZXR1cm4gXCJ0YWdcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGluZGVudChzdGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYoY2ggPT09IFwiOlwiKXtcbiAgICAgICAgaWYgKHN0cmVhbS5tYXRjaChwc2V1ZG9FbGVtZW50c1JlZ2V4cCkpeyAvLyBjb3VsZCBiZSBhIHBzZXVkby1lbGVtZW50XG4gICAgICAgICAgcmV0dXJuIFwidmFyaWFibGUtM1wiO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIHN0YXRlLmN1cnNvckhhbGY9MTtcbiAgICAgICAgcmV0dXJuIFwib3BlcmF0b3JcIjtcbiAgICAgIH1cblxuICAgIH0gLy8gY3Vyc29ySGFsZj09PTAgZW5kcyBoZXJlXG4gICAgZWxzZXtcblxuICAgICAgaWYgKGNoID09PSBcIiNcIikge1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAvLyBIZXggbnVtYmVyc1xuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKC9bMC05YS1mQS1GXXs2fXxbMC05YS1mQS1GXXszfS8pKXtcbiAgICAgICAgICBpZiAoaXNFbmRMaW5lKHN0cmVhbSkpIHtcbiAgICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBOdW1iZXJzXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKC9eLT9bMC05XFwuXSsvKSl7XG4gICAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm51bWJlclwiO1xuICAgICAgfVxuXG4gICAgICAvLyBVbml0c1xuICAgICAgaWYgKHN0cmVhbS5tYXRjaCgvXihweHxlbXxpbilcXGIvKSl7XG4gICAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcInVuaXRcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0cmVhbS5tYXRjaChrZXl3b3Jkc1JlZ2V4cCkpe1xuICAgICAgICBpZiAoaXNFbmRMaW5lKHN0cmVhbSkpIHtcbiAgICAgICAgICBzdGF0ZS5jdXJzb3JIYWxmID0gMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJlYW0ubWF0Y2goL151cmwvKSAmJiBzdHJlYW0ucGVlaygpID09PSBcIihcIikge1xuICAgICAgICBzdGF0ZS50b2tlbml6ZXIgPSB1cmxUb2tlbnM7XG4gICAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcImF0b21cIjtcbiAgICAgIH1cblxuICAgICAgLy8gVmFyaWFibGVzXG4gICAgICBpZiAoY2ggPT09IFwiJFwiKSB7XG4gICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvW1xcdy1dLyk7XG4gICAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcInZhcmlhYmxlLTJcIjtcbiAgICAgIH1cblxuICAgICAgLy8gYmFuZyBjaGFyYWN0ZXIgZm9yICFpbXBvcnRhbnQsICFkZWZhdWx0LCBldGMuXG4gICAgICBpZiAoY2ggPT09IFwiIVwiKSB7XG4gICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICByZXR1cm4gc3RyZWFtLm1hdGNoKC9eW1xcd10rLykgPyBcImtleXdvcmRcIjogXCJvcGVyYXRvclwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKG9wUmVnZXhwKSl7XG4gICAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIGF0dHJpYnV0ZXNcbiAgICAgIGlmIChzdHJlYW0uZWF0V2hpbGUoL1tcXHctXS8pKSB7XG4gICAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICAgIHN0YXRlLmN1cnNvckhhbGYgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHdvcmQgPSBzdHJlYW0uY3VycmVudCgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh2YWx1ZUtleXdvcmRzLmhhc093blByb3BlcnR5KHdvcmQpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiYXRvbVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9yS2V5d29yZHMuaGFzT3duUHJvcGVydHkod29yZCkpIHtcbiAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvcGVydHlLZXl3b3Jkcy5oYXNPd25Qcm9wZXJ0eSh3b3JkKSkge1xuICAgICAgICAgIHN0YXRlLnByZXZQcm9wID0gc3RyZWFtLmN1cnJlbnQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIHJldHVybiBcInByb3BlcnR5XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFwidGFnXCI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9zdHJlYW0uZWF0U3BhY2UoKTtcbiAgICAgIGlmIChpc0VuZExpbmUoc3RyZWFtKSkge1xuICAgICAgICBzdGF0ZS5jdXJzb3JIYWxmID0gMDtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICB9IC8vIGVsc2UgZW5kcyBoZXJlXG5cbiAgICBpZiAoc3RyZWFtLm1hdGNoKG9wUmVnZXhwKSlcbiAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG5cbiAgICAvLyBJZiB3ZSBoYXZlbid0IHJldHVybmVkIGJ5IG5vdywgd2UgbW92ZSAxIGNoYXJhY3RlclxuICAgIC8vIGFuZCByZXR1cm4gYW4gZXJyb3JcbiAgICBzdHJlYW0ubmV4dCgpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5MZXhlcihzdHJlYW0sIHN0YXRlKSB7XG4gICAgaWYgKHN0cmVhbS5zb2woKSkgc3RhdGUuaW5kZW50Q291bnQgPSAwO1xuICAgIHZhciBzdHlsZSA9IHN0YXRlLnRva2VuaXplcihzdHJlYW0sIHN0YXRlKTtcbiAgICB2YXIgY3VycmVudCA9IHN0cmVhbS5jdXJyZW50KCk7XG5cbiAgICBpZiAoY3VycmVudCA9PT0gXCJAcmV0dXJuXCIgfHwgY3VycmVudCA9PT0gXCJ9XCIpe1xuICAgICAgZGVkZW50KHN0YXRlKTtcbiAgICB9XG5cbiAgICBpZiAoc3R5bGUgIT09IG51bGwpIHtcbiAgICAgIHZhciBzdGFydE9mVG9rZW4gPSBzdHJlYW0ucG9zIC0gY3VycmVudC5sZW5ndGg7XG5cbiAgICAgIHZhciB3aXRoQ3VycmVudEluZGVudCA9IHN0YXJ0T2ZUb2tlbiArIChjb25maWcuaW5kZW50VW5pdCAqIHN0YXRlLmluZGVudENvdW50KTtcblxuICAgICAgdmFyIG5ld1Njb3BlcyA9IFtdO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlLnNjb3Blcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc2NvcGUgPSBzdGF0ZS5zY29wZXNbaV07XG5cbiAgICAgICAgaWYgKHNjb3BlLm9mZnNldCA8PSB3aXRoQ3VycmVudEluZGVudClcbiAgICAgICAgICBuZXdTY29wZXMucHVzaChzY29wZSk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnNjb3BlcyA9IG5ld1Njb3BlcztcbiAgICB9XG5cblxuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0b2tlbml6ZXI6IHRva2VuQmFzZSxcbiAgICAgICAgc2NvcGVzOiBbe29mZnNldDogMCwgdHlwZTogXCJzYXNzXCJ9XSxcbiAgICAgICAgaW5kZW50Q291bnQ6IDAsXG4gICAgICAgIGN1cnNvckhhbGY6IDAsICAvLyBjdXJzb3IgaGFsZiB0ZWxscyB1cyBpZiBjdXJzb3IgbGllcyBhZnRlciAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIGJlZm9yZSAoMCkgY29sb24gKHdlbGwuLi4gbW9yZSBvciBsZXNzKVxuICAgICAgICBkZWZpbmVkVmFyczogW10sXG4gICAgICAgIGRlZmluZWRNaXhpbnM6IFtdXG4gICAgICB9O1xuICAgIH0sXG4gICAgdG9rZW46IGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHZhciBzdHlsZSA9IHRva2VuTGV4ZXIoc3RyZWFtLCBzdGF0ZSk7XG5cbiAgICAgIHN0YXRlLmxhc3RUb2tlbiA9IHsgc3R5bGU6IHN0eWxlLCBjb250ZW50OiBzdHJlYW0uY3VycmVudCgpIH07XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9LFxuXG4gICAgaW5kZW50OiBmdW5jdGlvbihzdGF0ZSkge1xuICAgICAgcmV0dXJuIHN0YXRlLnNjb3Blc1swXS5vZmZzZXQ7XG4gICAgfVxuICB9O1xufSwgXCJjc3NcIik7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1zYXNzXCIsIFwic2Fzc1wiKTtcblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9