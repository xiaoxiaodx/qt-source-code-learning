(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"./node_modules/codemirror/mode/velocity/velocity.js":function(e,t,n){!function(e){"use strict";e.defineMode("velocity",(function(){function e(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}var t=e("#end #else #break #stop #[[ #]] #{end} #{else} #{break} #{stop}"),n=e("#if #elseif #foreach #set #include #parse #macro #define #evaluate #{if} #{elseif} #{foreach} #{set} #{include} #{parse} #{macro} #{define} #{evaluate}"),r=e("$foreach.count $foreach.hasNext $foreach.first $foreach.last $foreach.topmost $foreach.parent.count $foreach.parent.hasNext $foreach.parent.first $foreach.parent.last $foreach.parent $velocityCount $!bodyContent $bodyContent"),i=/[+\-*&%=<>!?:\/|]/;function a(e,t,n){return t.tokenize=n,n(e,t)}function o(e,o){var f=o.beforeParams;o.beforeParams=!1;var c=e.next();if("'"==c&&!o.inString&&o.inParams)return o.lastTokenWasBuiltin=!1,a(e,o,s(c));if('"'!=c){if(/[\[\]{}\(\),;\.]/.test(c))return"("==c&&f?o.inParams=!0:")"==c&&(o.inParams=!1,o.lastTokenWasBuiltin=!0),null;if(/\d/.test(c))return o.lastTokenWasBuiltin=!1,e.eatWhile(/[\w\.]/),"number";if("#"==c&&e.eat("*"))return o.lastTokenWasBuiltin=!1,a(e,o,l);if("#"==c&&e.match(/ *\[ *\[/))return o.lastTokenWasBuiltin=!1,a(e,o,u);if("#"==c&&e.eat("#"))return o.lastTokenWasBuiltin=!1,e.skipToEnd(),"comment";if("$"==c)return e.eatWhile(/[\w\d\$_\.{}-]/),r&&r.propertyIsEnumerable(e.current())?"keyword":(o.lastTokenWasBuiltin=!0,o.beforeParams=!0,"builtin");if(i.test(c))return o.lastTokenWasBuiltin=!1,e.eatWhile(i),"operator";e.eatWhile(/[\w\$_{}@]/);var k=e.current();return t&&t.propertyIsEnumerable(k)?"keyword":n&&n.propertyIsEnumerable(k)||e.current().match(/^#@?[a-z0-9_]+ *$/i)&&"("==e.peek()&&(!n||!n.propertyIsEnumerable(k.toLowerCase()))?(o.beforeParams=!0,o.lastTokenWasBuiltin=!1,"keyword"):o.inString?(o.lastTokenWasBuiltin=!1,"string"):e.pos>k.length&&"."==e.string.charAt(e.pos-k.length-1)&&o.lastTokenWasBuiltin?"builtin":(o.lastTokenWasBuiltin=!1,null)}return o.lastTokenWasBuiltin=!1,o.inString?(o.inString=!1,"string"):o.inParams?a(e,o,s(c)):void 0}function s(e){return function(t,n){for(var r,i=!1,a=!1;null!=(r=t.next());){if(r==e&&!i){a=!0;break}if('"'==e&&"$"==t.peek()&&!i){n.inString=!0,a=!0;break}i=!i&&"\\"==r}return a&&(n.tokenize=o),"string"}}function l(e,t){for(var n,r=!1;n=e.next();){if("#"==n&&r){t.tokenize=o;break}r="*"==n}return"comment"}function u(e,t){for(var n,r=0;n=e.next();){if("#"==n&&2==r){t.tokenize=o;break}"]"==n?r++:" "!=n&&(r=0)}return"meta"}return{startState:function(){return{tokenize:o,beforeParams:!1,inParams:!1,inString:!1,lastTokenWasBuiltin:!1}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},blockCommentStart:"#*",blockCommentEnd:"*#",lineComment:"##",fold:"velocity"}})),e.defineMIME("text/velocity","velocity")}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL3ZlbG9jaXR5L3ZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbIkNvZGVNaXJyb3IiLCJkZWZpbmVNb2RlIiwicGFyc2VXb3JkcyIsInN0ciIsIm9iaiIsIndvcmRzIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwia2V5d29yZHMiLCJmdW5jdGlvbnMiLCJzcGVjaWFscyIsImlzT3BlcmF0b3JDaGFyIiwiY2hhaW4iLCJzdHJlYW0iLCJzdGF0ZSIsImYiLCJ0b2tlbml6ZSIsInRva2VuQmFzZSIsImJlZm9yZVBhcmFtcyIsImNoIiwibmV4dCIsImluU3RyaW5nIiwiaW5QYXJhbXMiLCJsYXN0VG9rZW5XYXNCdWlsdGluIiwidG9rZW5TdHJpbmciLCJ0ZXN0IiwiZWF0V2hpbGUiLCJlYXQiLCJ0b2tlbkNvbW1lbnQiLCJtYXRjaCIsInRva2VuVW5wYXJzZWQiLCJza2lwVG9FbmQiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImN1cnJlbnQiLCJ3b3JkIiwicGVlayIsInRvTG93ZXJDYXNlIiwicG9zIiwic3RyaW5nIiwiY2hhckF0IiwicXVvdGUiLCJlc2NhcGVkIiwiZW5kIiwibWF5YmVFbmQiLCJzdGFydFN0YXRlIiwidG9rZW4iLCJlYXRTcGFjZSIsImJsb2NrQ29tbWVudFN0YXJ0IiwiYmxvY2tDb21tZW50RW5kIiwibGluZUNvbW1lbnQiLCJmb2xkIiwiZGVmaW5lTUlNRSIsIm1vZCJdLCJtYXBwaW5ncyI6ImtJQVVHLFNBQVNBLEdBQ1osYUFFQUEsRUFBV0MsV0FBVyxZQUFZLFdBQzlCLFNBQVNDLEVBQVdDLEdBRWhCLElBREEsSUFBSUMsRUFBTSxHQUFJQyxFQUFRRixFQUFJRyxNQUFNLEtBQ3ZCQyxFQUFJLEVBQUdBLEVBQUlGLEVBQU1HLFNBQVVELEVBQUdILEVBQUlDLEVBQU1FLEtBQU0sRUFDdkQsT0FBT0gsRUFHWCxJQUFJSyxFQUFXUCxFQUFXLG1FQUV0QlEsRUFBWVIsRUFBVywySkFFdkJTLEVBQVdULEVBQVcsb09BQ3RCVSxFQUFpQixvQkFFckIsU0FBU0MsRUFBTUMsRUFBUUMsRUFBT0MsR0FFMUIsT0FEQUQsRUFBTUUsU0FBV0QsRUFDVkEsRUFBRUYsRUFBUUMsR0FFckIsU0FBU0csRUFBVUosRUFBUUMsR0FDdkIsSUFBSUksRUFBZUosRUFBTUksYUFDekJKLEVBQU1JLGNBQWUsRUFDckIsSUFBSUMsRUFBS04sRUFBT08sT0FFaEIsR0FBVyxLQUFORCxJQUFlTCxFQUFNTyxVQUFZUCxFQUFNUSxTQUV4QyxPQURBUixFQUFNUyxxQkFBc0IsRUFDckJYLEVBQU1DLEVBQVFDLEVBQU9VLEVBQVlMLElBR3ZDLEdBQVcsS0FBTkEsRUFVTCxJQUFJLG1CQUFtQk0sS0FBS04sR0FPN0IsTUFOVSxLQUFOQSxHQUFhRCxFQUNiSixFQUFNUSxVQUFXLEVBQ04sS0FBTkgsSUFDTEwsRUFBTVEsVUFBVyxFQUNqQlIsRUFBTVMscUJBQXNCLEdBRXpCLEtBR04sR0FBSSxLQUFLRSxLQUFLTixHQUdmLE9BRkFMLEVBQU1TLHFCQUFzQixFQUM1QlYsRUFBT2EsU0FBUyxVQUNULFNBR04sR0FBVSxLQUFOUCxHQUFhTixFQUFPYyxJQUFJLEtBRTdCLE9BREFiLEVBQU1TLHFCQUFzQixFQUNyQlgsRUFBTUMsRUFBUUMsRUFBT2MsR0FHM0IsR0FBVSxLQUFOVCxHQUFhTixFQUFPZ0IsTUFBTSxZQUUvQixPQURBZixFQUFNUyxxQkFBc0IsRUFDckJYLEVBQU1DLEVBQVFDLEVBQU9nQixHQUczQixHQUFVLEtBQU5YLEdBQWFOLEVBQU9jLElBQUksS0FHN0IsT0FGQWIsRUFBTVMscUJBQXNCLEVBQzVCVixFQUFPa0IsWUFDQSxVQUdOLEdBQVUsS0FBTlosRUFHTCxPQUZBTixFQUFPYSxTQUFTLGtCQUVaaEIsR0FBWUEsRUFBU3NCLHFCQUFxQm5CLEVBQU9vQixXQUMxQyxXQUdQbkIsRUFBTVMscUJBQXNCLEVBQzVCVCxFQUFNSSxjQUFlLEVBQ2QsV0FJVixHQUFJUCxFQUFlYyxLQUFLTixHQUd6QixPQUZBTCxFQUFNUyxxQkFBc0IsRUFDNUJWLEVBQU9hLFNBQVNmLEdBQ1QsV0FJUEUsRUFBT2EsU0FBUyxjQUNoQixJQUFJUSxFQUFPckIsRUFBT29CLFVBRWxCLE9BQUl6QixHQUFZQSxFQUFTd0IscUJBQXFCRSxHQUNuQyxVQUVQekIsR0FBYUEsRUFBVXVCLHFCQUFxQkUsSUFDdkNyQixFQUFPb0IsVUFBVUosTUFBTSx1QkFBd0MsS0FBZmhCLEVBQU9zQixVQUNyRDFCLElBQWFBLEVBQVV1QixxQkFBcUJFLEVBQUtFLGlCQUN4RHRCLEVBQU1JLGNBQWUsRUFDckJKLEVBQU1TLHFCQUFzQixFQUNyQixXQUVQVCxFQUFNTyxVQUNOUCxFQUFNUyxxQkFBc0IsRUFDckIsVUFFUFYsRUFBT3dCLElBQU1ILEVBQUszQixRQUEwRCxLQUFoRE0sRUFBT3lCLE9BQU9DLE9BQU8xQixFQUFPd0IsSUFBSUgsRUFBSzNCLE9BQU8sSUFBV08sRUFBTVMsb0JBQ2xGLFdBRVhULEVBQU1TLHFCQUFzQixFQUNyQixNQWpGUCxPQURBVCxFQUFNUyxxQkFBc0IsRUFDeEJULEVBQU1PLFVBQ05QLEVBQU1PLFVBQVcsRUFDVixVQUVGUCxFQUFNUSxTQUNKVixFQUFNQyxFQUFRQyxFQUFPVSxFQUFZTCxTQUR2QyxFQWlGYixTQUFTSyxFQUFZZ0IsR0FDakIsT0FBTyxTQUFTM0IsRUFBUUMsR0FFcEIsSUFEQSxJQUFxQk0sRUFBakJxQixHQUFVLEVBQWFDLEdBQU0sRUFDQSxPQUF6QnRCLEVBQU9QLEVBQU9PLFNBQWlCLENBQ25DLEdBQUtBLEdBQVFvQixJQUFXQyxFQUFTLENBQzdCQyxHQUFNLEVBQ04sTUFFSixHQUFXLEtBQVBGLEdBQStCLEtBQWpCM0IsRUFBT3NCLFNBQWtCTSxFQUFTLENBQ2hEM0IsRUFBTU8sVUFBVyxFQUNqQnFCLEdBQU0sRUFDTixNQUVKRCxHQUFXQSxHQUFtQixNQUFSckIsRUFHMUIsT0FESXNCLElBQUs1QixFQUFNRSxTQUFXQyxHQUNuQixVQUlmLFNBQVNXLEVBQWFmLEVBQVFDLEdBRTFCLElBREEsSUFBc0JLLEVBQWxCd0IsR0FBVyxFQUNSeEIsRUFBS04sRUFBT08sUUFBUSxDQUN2QixHQUFVLEtBQU5ELEdBQWF3QixFQUFVLENBQ3ZCN0IsRUFBTUUsU0FBV0MsRUFDakIsTUFFSjBCLEVBQWtCLEtBQU54QixFQUVoQixNQUFPLFVBR1gsU0FBU1csRUFBY2pCLEVBQVFDLEdBRTNCLElBREEsSUFBa0JLLEVBQWR3QixFQUFXLEVBQ1J4QixFQUFLTixFQUFPTyxRQUFRLENBQ3ZCLEdBQVUsS0FBTkQsR0FBeUIsR0FBWndCLEVBQWUsQ0FDNUI3QixFQUFNRSxTQUFXQyxFQUNqQixNQUVNLEtBQU5FLEVBQ0F3QixJQUNXLEtBQU54QixJQUNMd0IsRUFBVyxHQUVuQixNQUFPLE9BSVgsTUFBTyxDQUNIQyxXQUFZLFdBQ1IsTUFBTyxDQUNINUIsU0FBVUMsRUFDVkMsY0FBYyxFQUNkSSxVQUFVLEVBQ1ZELFVBQVUsRUFDVkUscUJBQXFCLElBSTdCc0IsTUFBTyxTQUFTaEMsRUFBUUMsR0FDcEIsT0FBSUQsRUFBT2lDLFdBQW1CLEtBQ3ZCaEMsRUFBTUUsU0FBU0gsRUFBUUMsSUFFbENpQyxrQkFBbUIsS0FDbkJDLGdCQUFpQixLQUNqQkMsWUFBYSxLQUNiQyxLQUFNLGVBSWRuRCxFQUFXb0QsV0FBVyxnQkFBaUIsWUFqTW5DQyxDQUFJLEVBQVEiLCJmaWxlIjoiMTEwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuQ29kZU1pcnJvci5kZWZpbmVNb2RlKFwidmVsb2NpdHlcIiwgZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gcGFyc2VXb3JkcyhzdHIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHt9LCB3b3JkcyA9IHN0ci5zcGxpdChcIiBcIik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyArK2kpIG9ialt3b3Jkc1tpXV0gPSB0cnVlO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIHZhciBrZXl3b3JkcyA9IHBhcnNlV29yZHMoXCIjZW5kICNlbHNlICNicmVhayAjc3RvcCAjW1sgI11dIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiI3tlbmR9ICN7ZWxzZX0gI3ticmVha30gI3tzdG9wfVwiKTtcbiAgICB2YXIgZnVuY3Rpb25zID0gcGFyc2VXb3JkcyhcIiNpZiAjZWxzZWlmICNmb3JlYWNoICNzZXQgI2luY2x1ZGUgI3BhcnNlICNtYWNybyAjZGVmaW5lICNldmFsdWF0ZSBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIje2lmfSAje2Vsc2VpZn0gI3tmb3JlYWNofSAje3NldH0gI3tpbmNsdWRlfSAje3BhcnNlfSAje21hY3JvfSAje2RlZmluZX0gI3tldmFsdWF0ZX1cIik7XG4gICAgdmFyIHNwZWNpYWxzID0gcGFyc2VXb3JkcyhcIiRmb3JlYWNoLmNvdW50ICRmb3JlYWNoLmhhc05leHQgJGZvcmVhY2guZmlyc3QgJGZvcmVhY2gubGFzdCAkZm9yZWFjaC50b3Btb3N0ICRmb3JlYWNoLnBhcmVudC5jb3VudCAkZm9yZWFjaC5wYXJlbnQuaGFzTmV4dCAkZm9yZWFjaC5wYXJlbnQuZmlyc3QgJGZvcmVhY2gucGFyZW50Lmxhc3QgJGZvcmVhY2gucGFyZW50ICR2ZWxvY2l0eUNvdW50ICQhYm9keUNvbnRlbnQgJGJvZHlDb250ZW50XCIpO1xuICAgIHZhciBpc09wZXJhdG9yQ2hhciA9IC9bK1xcLSomJT08PiE/OlxcL3xdLztcblxuICAgIGZ1bmN0aW9uIGNoYWluKHN0cmVhbSwgc3RhdGUsIGYpIHtcbiAgICAgICAgc3RhdGUudG9rZW5pemUgPSBmO1xuICAgICAgICByZXR1cm4gZihzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9rZW5CYXNlKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgdmFyIGJlZm9yZVBhcmFtcyA9IHN0YXRlLmJlZm9yZVBhcmFtcztcbiAgICAgICAgc3RhdGUuYmVmb3JlUGFyYW1zID0gZmFsc2U7XG4gICAgICAgIHZhciBjaCA9IHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIC8vIHN0YXJ0IG9mIHVucGFyc2VkIHN0cmluZz9cbiAgICAgICAgaWYgKChjaCA9PSBcIidcIikgJiYgIXN0YXRlLmluU3RyaW5nICYmIHN0YXRlLmluUGFyYW1zKSB7XG4gICAgICAgICAgICBzdGF0ZS5sYXN0VG9rZW5XYXNCdWlsdGluID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gY2hhaW4oc3RyZWFtLCBzdGF0ZSwgdG9rZW5TdHJpbmcoY2gpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzdGFydCBvZiBwYXJzZWQgc3RyaW5nP1xuICAgICAgICBlbHNlIGlmICgoY2ggPT0gJ1wiJykpIHtcbiAgICAgICAgICAgIHN0YXRlLmxhc3RUb2tlbldhc0J1aWx0aW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5pblN0cmluZykge1xuICAgICAgICAgICAgICAgIHN0YXRlLmluU3RyaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChzdGF0ZS5pblBhcmFtcylcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hhaW4oc3RyZWFtLCBzdGF0ZSwgdG9rZW5TdHJpbmcoY2gpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpcyBpdCBvbmUgb2YgdGhlIHNwZWNpYWwgc2lnbnMgW117fSgpLiw7PyBTZXBlcmF0b3I/XG4gICAgICAgIGVsc2UgaWYgKC9bXFxbXFxde31cXChcXCksO1xcLl0vLnRlc3QoY2gpKSB7XG4gICAgICAgICAgICBpZiAoY2ggPT0gXCIoXCIgJiYgYmVmb3JlUGFyYW1zKVxuICAgICAgICAgICAgICAgIHN0YXRlLmluUGFyYW1zID0gdHJ1ZTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUuaW5QYXJhbXMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0VG9rZW5XYXNCdWlsdGluID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIHN0YXJ0IG9mIGEgbnVtYmVyIHZhbHVlP1xuICAgICAgICBlbHNlIGlmICgvXFxkLy50ZXN0KGNoKSkge1xuICAgICAgICAgICAgc3RhdGUubGFzdFRva2VuV2FzQnVpbHRpbiA9IGZhbHNlO1xuICAgICAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3XFwuXS8pO1xuICAgICAgICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbXVsdGkgbGluZSBjb21tZW50P1xuICAgICAgICBlbHNlIGlmIChjaCA9PSBcIiNcIiAmJiBzdHJlYW0uZWF0KFwiKlwiKSkge1xuICAgICAgICAgICAgc3RhdGUubGFzdFRva2VuV2FzQnVpbHRpbiA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGNoYWluKHN0cmVhbSwgc3RhdGUsIHRva2VuQ29tbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gdW5wYXJzZWQgY29udGVudD9cbiAgICAgICAgZWxzZSBpZiAoY2ggPT0gXCIjXCIgJiYgc3RyZWFtLm1hdGNoKC8gKlxcWyAqXFxbLykpIHtcbiAgICAgICAgICAgIHN0YXRlLmxhc3RUb2tlbldhc0J1aWx0aW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBjaGFpbihzdHJlYW0sIHN0YXRlLCB0b2tlblVucGFyc2VkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzaW5nbGUgbGluZSBjb21tZW50P1xuICAgICAgICBlbHNlIGlmIChjaCA9PSBcIiNcIiAmJiBzdHJlYW0uZWF0KFwiI1wiKSkge1xuICAgICAgICAgICAgc3RhdGUubGFzdFRva2VuV2FzQnVpbHRpbiA9IGZhbHNlO1xuICAgICAgICAgICAgc3RyZWFtLnNraXBUb0VuZCgpO1xuICAgICAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIHZhcmlhYmxlP1xuICAgICAgICBlbHNlIGlmIChjaCA9PSBcIiRcIikge1xuICAgICAgICAgICAgc3RyZWFtLmVhdFdoaWxlKC9bXFx3XFxkXFwkX1xcLnt9LV0vKTtcbiAgICAgICAgICAgIC8vIGlzIGl0IG9uZSBvZiB0aGUgc3BlY2lhbHM/XG4gICAgICAgICAgICBpZiAoc3BlY2lhbHMgJiYgc3BlY2lhbHMucHJvcGVydHlJc0VudW1lcmFibGUoc3RyZWFtLmN1cnJlbnQoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0VG9rZW5XYXNCdWlsdGluID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWZvcmVQYXJhbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBcImJ1aWx0aW5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpcyBpdCBhIG9wZXJhdG9yP1xuICAgICAgICBlbHNlIGlmIChpc09wZXJhdG9yQ2hhci50ZXN0KGNoKSkge1xuICAgICAgICAgICAgc3RhdGUubGFzdFRva2VuV2FzQnVpbHRpbiA9IGZhbHNlO1xuICAgICAgICAgICAgc3RyZWFtLmVhdFdoaWxlKGlzT3BlcmF0b3JDaGFyKTtcbiAgICAgICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBnZXQgdGhlIHdob2xlIHdvcmRcbiAgICAgICAgICAgIHN0cmVhbS5lYXRXaGlsZSgvW1xcd1xcJF97fUBdLyk7XG4gICAgICAgICAgICB2YXIgd29yZCA9IHN0cmVhbS5jdXJyZW50KCk7XG4gICAgICAgICAgICAvLyBpcyBpdCBvbmUgb2YgdGhlIGxpc3RlZCBrZXl3b3Jkcz9cbiAgICAgICAgICAgIGlmIChrZXl3b3JkcyAmJiBrZXl3b3Jkcy5wcm9wZXJ0eUlzRW51bWVyYWJsZSh3b3JkKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgICAgICAvLyBpcyBpdCBvbmUgb2YgdGhlIGxpc3RlZCBmdW5jdGlvbnM/XG4gICAgICAgICAgICBpZiAoZnVuY3Rpb25zICYmIGZ1bmN0aW9ucy5wcm9wZXJ0eUlzRW51bWVyYWJsZSh3b3JkKSB8fFxuICAgICAgICAgICAgICAgICAgICAoc3RyZWFtLmN1cnJlbnQoKS5tYXRjaCgvXiNAP1thLXowLTlfXSsgKiQvaSkgJiYgc3RyZWFtLnBlZWsoKT09XCIoXCIpICYmXG4gICAgICAgICAgICAgICAgICAgICAhKGZ1bmN0aW9ucyAmJiBmdW5jdGlvbnMucHJvcGVydHlJc0VudW1lcmFibGUod29yZC50b0xvd2VyQ2FzZSgpKSkpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5iZWZvcmVQYXJhbXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHN0YXRlLmxhc3RUb2tlbldhc0J1aWx0aW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhdGUuaW5TdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0VG9rZW5XYXNCdWlsdGluID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RyZWFtLnBvcyA+IHdvcmQubGVuZ3RoICYmIHN0cmVhbS5zdHJpbmcuY2hhckF0KHN0cmVhbS5wb3Mtd29yZC5sZW5ndGgtMSk9PVwiLlwiICYmIHN0YXRlLmxhc3RUb2tlbldhc0J1aWx0aW4pXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiYnVpbHRpblwiO1xuICAgICAgICAgICAgLy8gZGVmYXVsdDoganVzdCBhIFwid29yZFwiXG4gICAgICAgICAgICBzdGF0ZS5sYXN0VG9rZW5XYXNCdWlsdGluID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuU3RyaW5nKHF1b3RlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlLCBuZXh0LCBlbmQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICgobmV4dCA9IHN0cmVhbS5uZXh0KCkpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoKG5leHQgPT0gcXVvdGUpICYmICFlc2NhcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocXVvdGU9PSdcIicgJiYgc3RyZWFtLnBlZWsoKSA9PSAnJCcgJiYgIWVzY2FwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuaW5TdHJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXNjYXBlZCA9ICFlc2NhcGVkICYmIG5leHQgPT0gXCJcXFxcXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZW5kKSBzdGF0ZS50b2tlbml6ZSA9IHRva2VuQmFzZTtcbiAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuQ29tbWVudChzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIHZhciBtYXliZUVuZCA9IGZhbHNlLCBjaDtcbiAgICAgICAgd2hpbGUgKGNoID0gc3RyZWFtLm5leHQoKSkge1xuICAgICAgICAgICAgaWYgKGNoID09IFwiI1wiICYmIG1heWJlRW5kKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlbkJhc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtYXliZUVuZCA9IChjaCA9PSBcIipcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuVW5wYXJzZWQoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICB2YXIgbWF5YmVFbmQgPSAwLCBjaDtcbiAgICAgICAgd2hpbGUgKGNoID0gc3RyZWFtLm5leHQoKSkge1xuICAgICAgICAgICAgaWYgKGNoID09IFwiI1wiICYmIG1heWJlRW5kID09IDIpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IHRva2VuQmFzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjaCA9PSBcIl1cIilcbiAgICAgICAgICAgICAgICBtYXliZUVuZCsrO1xuICAgICAgICAgICAgZWxzZSBpZiAoY2ggIT0gXCIgXCIpXG4gICAgICAgICAgICAgICAgbWF5YmVFbmQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIm1ldGFcIjtcbiAgICB9XG4gICAgLy8gSW50ZXJmYWNlXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGFydFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9rZW5pemU6IHRva2VuQmFzZSxcbiAgICAgICAgICAgICAgICBiZWZvcmVQYXJhbXM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluUGFyYW1zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpblN0cmluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgbGFzdFRva2VuV2FzQnVpbHRpbjogZmFsc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgdG9rZW46IGZ1bmN0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgICAgIGlmIChzdHJlYW0uZWF0U3BhY2UoKSkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudG9rZW5pemUoc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGJsb2NrQ29tbWVudFN0YXJ0OiBcIiMqXCIsXG4gICAgICAgIGJsb2NrQ29tbWVudEVuZDogXCIqI1wiLFxuICAgICAgICBsaW5lQ29tbWVudDogXCIjI1wiLFxuICAgICAgICBmb2xkOiBcInZlbG9jaXR5XCJcbiAgICB9O1xufSk7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQvdmVsb2NpdHlcIiwgXCJ2ZWxvY2l0eVwiKTtcblxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9