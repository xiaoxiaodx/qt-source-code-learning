(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"./node_modules/codemirror/mode/dart/dart.js":function(e,t,n){!function(e){"use strict";var t="this super static final const abstract class extends external factory implements mixin get native set typedef with enum throw rethrow assert break case continue default in return new deferred async await covariant try catch finally do else for if switch while import library export part of show hide is as".split(" "),n="try catch finally do else for if switch while".split(" "),r="true false null".split(" "),i="void bool num int double dynamic var String".split(" ");function o(e){for(var t={},n=0;n<e.length;++n)t[e[n]]=!0;return t}function a(e){(e.interpolationStack||(e.interpolationStack=[])).push(e.tokenize)}function c(e){return(e.interpolationStack||(e.interpolationStack=[])).pop()}function u(e,t,n,r){var i=!1;if(t.eat(e)){if(!t.eat(e))return"string";i=!0}function o(t,n){for(var o=!1;!t.eol();){if(!r&&!o&&"$"==t.peek())return a(n),n.tokenize=l,"string";var c=t.next();if(c==e&&!o&&(!i||t.match(e+e))){n.tokenize=null;break}o=!r&&!o&&"\\"==c}return"string"}return n.tokenize=o,o(t,n)}function l(e,t){return e.eat("$"),e.eat("{")?t.tokenize=null:t.tokenize=s,null}function s(e,t){return e.eatWhile(/[\w_]/),t.tokenize=c(t),"variable"}e.defineMIME("application/dart",{name:"clike",keywords:o(t),blockKeywords:o(n),builtin:o(i),atoms:o(r),hooks:{"@":function(e){return e.eatWhile(/[\w\$_\.]/),"meta"},"'":function(e,t){return u("'",e,t,!1)},'"':function(e,t){return u('"',e,t,!1)},r:function(e,t){var n=e.peek();return("'"==n||'"'==n)&&u(e.next(),e,t,!0)},"}":function(e,t){return function(e){return e.interpolationStack?e.interpolationStack.length:0}(t)>0&&(t.tokenize=c(t),null)},"/":function(e,t){return!!e.eat("*")&&(t.tokenize=function e(t){return function(n,r){for(var i;i=n.next();){if("*"==i&&n.eat("/")){if(1==t){r.tokenize=null;break}return r.tokenize=e(t-1),r.tokenize(n,r)}if("/"==i&&n.eat("*"))return r.tokenize=e(t+1),r.tokenize(n,r)}return"comment"}}(1),t.tokenize(e,t))},token:function(e,t,n){if("variable"==n&&RegExp("^[_$]*[A-Z][a-zA-Z0-9_$]*$","g").test(e.current()))return"variable-2"}}}),e.registerHelper("hintWords","application/dart",t.concat(r).concat(i)),e.defineMode("dart",(function(t){return e.getMode(t,"application/dart")}),"clike")}(n("./node_modules/codemirror/lib/codemirror.js"),n("./node_modules/codemirror/mode/clike/clike.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL2RhcnQvZGFydC5qcyJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwia2V5d29yZHMiLCJzcGxpdCIsImJsb2NrS2V5d29yZHMiLCJhdG9tcyIsImJ1aWx0aW5zIiwic2V0Iiwid29yZHMiLCJvYmoiLCJpIiwibGVuZ3RoIiwicHVzaEludGVycG9sYXRpb25TdGFjayIsInN0YXRlIiwiaW50ZXJwb2xhdGlvblN0YWNrIiwicHVzaCIsInRva2VuaXplIiwicG9wSW50ZXJwb2xhdGlvblN0YWNrIiwicG9wIiwidG9rZW5TdHJpbmciLCJxdW90ZSIsInN0cmVhbSIsInJhdyIsInRyaXBsZVF1b3RlZCIsImVhdCIsInRva2VuU3RyaW5nSGVscGVyIiwiZXNjYXBlZCIsImVvbCIsInBlZWsiLCJ0b2tlbkludGVycG9sYXRpb24iLCJuZXh0IiwibWF0Y2giLCJ0b2tlbkludGVycG9sYXRpb25JZGVudGlmaWVyIiwiZWF0V2hpbGUiLCJkZWZpbmVNSU1FIiwibmFtZSIsImJ1aWx0aW4iLCJob29rcyIsIlwiIiwiX3N0cmVhbSIsInNpemVJbnRlcnBvbGF0aW9uU3RhY2siLCJ0b2tlbk5lc3RlZENvbW1lbnQiLCJkZXB0aCIsImNoIiwidG9rZW4iLCJfIiwic3R5bGUiLCJSZWdFeHAiLCJ0ZXN0IiwiY3VycmVudCIsInJlZ2lzdGVySGVscGVyIiwiY29uY2F0IiwiZGVmaW5lTW9kZSIsImNvbmYiLCJnZXRNb2RlIiwibW9kIl0sIm1hcHBpbmdzIjoieUhBVUcsU0FBU0EsR0FDVixhQUVBLElBQUlDLEVBQVcsb1RBSWNDLE1BQU0sS0FDL0JDLEVBQWdCLGdEQUFnREQsTUFBTSxLQUN0RUUsRUFBUSxrQkFBa0JGLE1BQU0sS0FDaENHLEVBQVcsOENBQThDSCxNQUFNLEtBRW5FLFNBQVNJLEVBQUlDLEdBRVgsSUFEQSxJQUFJQyxFQUFNLEdBQ0RDLEVBQUksRUFBR0EsRUFBSUYsRUFBTUcsU0FBVUQsRUFBR0QsRUFBSUQsRUFBTUUsS0FBTSxFQUN2RCxPQUFPRCxFQUdULFNBQVNHLEVBQXVCQyxJQUM3QkEsRUFBTUMscUJBQXVCRCxFQUFNQyxtQkFBcUIsS0FBS0MsS0FBS0YsRUFBTUcsVUFHM0UsU0FBU0MsRUFBc0JKLEdBQzdCLE9BQVFBLEVBQU1DLHFCQUF1QkQsRUFBTUMsbUJBQXFCLEtBQUtJLE1BNER2RSxTQUFTQyxFQUFZQyxFQUFPQyxFQUFRUixFQUFPUyxHQUN6QyxJQUFJQyxHQUFlLEVBQ25CLEdBQUlGLEVBQU9HLElBQUlKLEdBQVEsQ0FDckIsSUFBSUMsRUFBT0csSUFBSUosR0FDVixNQUFPLFNBRFdHLEdBQWUsRUFHeEMsU0FBU0UsRUFBa0JKLEVBQVFSLEdBRWpDLElBREEsSUFBSWEsR0FBVSxHQUNOTCxFQUFPTSxPQUFPLENBQ3BCLElBQUtMLElBQVFJLEdBQTRCLEtBQWpCTCxFQUFPTyxPQUc3QixPQUZBaEIsRUFBdUJDLEdBQ3ZCQSxFQUFNRyxTQUFXYSxFQUNWLFNBRVQsSUFBSUMsRUFBT1QsRUFBT1MsT0FDbEIsR0FBSUEsR0FBUVYsSUFBVU0sS0FBYUgsR0FBZ0JGLEVBQU9VLE1BQU1YLEVBQVFBLElBQVMsQ0FDL0VQLEVBQU1HLFNBQVcsS0FDakIsTUFFRlUsR0FBV0osSUFBUUksR0FBbUIsTUFBUkksRUFFaEMsTUFBTyxTQUdULE9BREFqQixFQUFNRyxTQUFXUyxFQUNWQSxFQUFrQkosRUFBUVIsR0FHbkMsU0FBU2dCLEVBQW1CUixFQUFRUixHQVNsQyxPQVJBUSxFQUFPRyxJQUFJLEtBQ1BILEVBQU9HLElBQUksS0FHYlgsRUFBTUcsU0FBVyxLQUVqQkgsRUFBTUcsU0FBV2dCLEVBRVosS0FHVCxTQUFTQSxFQUE2QlgsRUFBUVIsR0FHNUMsT0FGQVEsRUFBT1ksU0FBUyxTQUNoQnBCLEVBQU1HLFNBQVdDLEVBQXNCSixHQUNoQyxXQS9GVFosRUFBV2lDLFdBQVcsbUJBQW9CLENBQ3hDQyxLQUFNLFFBQ05qQyxTQUFVSyxFQUFJTCxHQUNkRSxjQUFlRyxFQUFJSCxHQUNuQmdDLFFBQVM3QixFQUFJRCxHQUNiRCxNQUFPRSxFQUFJRixHQUNYZ0MsTUFBTyxDQUNMLElBQUssU0FBU2hCLEdBRVosT0FEQUEsRUFBT1ksU0FBUyxhQUNULFFBSVQsSUFBSyxTQUFTWixFQUFRUixHQUNwQixPQUFPTSxFQUFZLElBQUtFLEVBQVFSLEdBQU8sSUFFekN5QixJQUFNLFNBQVNqQixFQUFRUixHQUNyQixPQUFPTSxFQUFZLElBQU1FLEVBQVFSLEdBQU8sSUFFMUMsRUFBSyxTQUFTUSxFQUFRUixHQUNwQixJQUFJZSxFQUFPUCxFQUFPTyxPQUNsQixPQUFZLEtBQVJBLEdBQXVCLEtBQVJBLElBQ1ZULEVBQVlFLEVBQU9TLE9BQVFULEVBQVFSLEdBQU8sSUFLckQsSUFBSyxTQUFTMEIsRUFBUzFCLEdBRXJCLE9BakNOLFNBQWdDQSxHQUM5QixPQUFPQSxFQUFNQyxtQkFBcUJELEVBQU1DLG1CQUFtQkgsT0FBUyxFQWdDNUQ2QixDQUF1QjNCLEdBQVMsSUFDbENBLEVBQU1HLFNBQVdDLEVBQXNCSixHQUNoQyxPQUtYLElBQUssU0FBU1EsRUFBUVIsR0FDcEIsUUFBS1EsRUFBT0csSUFBSSxPQUNoQlgsRUFBTUcsU0E0RFosU0FBU3lCLEVBQW1CQyxHQUMxQixPQUFPLFNBQVVyQixFQUFRUixHQUV2QixJQURBLElBQUk4QixFQUNHQSxFQUFLdEIsRUFBT1MsUUFBUSxDQUN6QixHQUFVLEtBQU5hLEdBQWF0QixFQUFPRyxJQUFJLEtBQU0sQ0FDaEMsR0FBYSxHQUFUa0IsRUFBWSxDQUNkN0IsRUFBTUcsU0FBVyxLQUNqQixNQUdBLE9BREFILEVBQU1HLFNBQVd5QixFQUFtQkMsRUFBUSxHQUNyQzdCLEVBQU1HLFNBQVNLLEVBQVFSLEdBRTNCLEdBQVUsS0FBTjhCLEdBQWF0QixFQUFPRyxJQUFJLEtBRWpDLE9BREFYLEVBQU1HLFNBQVd5QixFQUFtQkMsRUFBUSxHQUNyQzdCLEVBQU1HLFNBQVNLLEVBQVFSLEdBR2xDLE1BQU8sV0E3RVk0QixDQUFtQixHQUM3QjVCLEVBQU1HLFNBQVNLLEVBQVFSLEtBRWhDK0IsTUFBTyxTQUFTdkIsRUFBUXdCLEVBQUdDLEdBQ3pCLEdBQWEsWUFBVEEsR0FFWUMsT0FBTyw2QkFBNkIsS0FDdENDLEtBQUszQixFQUFPNEIsV0FDdEIsTUFBTyxpQkF5RWpCaEQsRUFBV2lELGVBQWUsWUFBYSxtQkFBb0JoRCxFQUFTaUQsT0FBTzlDLEdBQU84QyxPQUFPN0MsSUFHekZMLEVBQVdtRCxXQUFXLFFBQVEsU0FBU0MsR0FDckMsT0FBT3BELEVBQVdxRCxRQUFRRCxFQUFNLHNCQUMvQixTQS9KREUsQ0FBSSxFQUFRLCtDQUF5QixFQUFRIiwiZmlsZSI6IjM1LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIiksIHJlcXVpcmUoXCIuLi9jbGlrZS9jbGlrZVwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiLCBcIi4uL2NsaWtlL2NsaWtlXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIga2V5d29yZHMgPSAoXCJ0aGlzIHN1cGVyIHN0YXRpYyBmaW5hbCBjb25zdCBhYnN0cmFjdCBjbGFzcyBleHRlbmRzIGV4dGVybmFsIGZhY3RvcnkgXCIgK1xuICAgIFwiaW1wbGVtZW50cyBtaXhpbiBnZXQgbmF0aXZlIHNldCB0eXBlZGVmIHdpdGggZW51bSB0aHJvdyByZXRocm93IFwiICtcbiAgICBcImFzc2VydCBicmVhayBjYXNlIGNvbnRpbnVlIGRlZmF1bHQgaW4gcmV0dXJuIG5ldyBkZWZlcnJlZCBhc3luYyBhd2FpdCBjb3ZhcmlhbnQgXCIgK1xuICAgIFwidHJ5IGNhdGNoIGZpbmFsbHkgZG8gZWxzZSBmb3IgaWYgc3dpdGNoIHdoaWxlIGltcG9ydCBsaWJyYXJ5IGV4cG9ydCBcIiArXG4gICAgXCJwYXJ0IG9mIHNob3cgaGlkZSBpcyBhc1wiKS5zcGxpdChcIiBcIik7XG4gIHZhciBibG9ja0tleXdvcmRzID0gXCJ0cnkgY2F0Y2ggZmluYWxseSBkbyBlbHNlIGZvciBpZiBzd2l0Y2ggd2hpbGVcIi5zcGxpdChcIiBcIik7XG4gIHZhciBhdG9tcyA9IFwidHJ1ZSBmYWxzZSBudWxsXCIuc3BsaXQoXCIgXCIpO1xuICB2YXIgYnVpbHRpbnMgPSBcInZvaWQgYm9vbCBudW0gaW50IGRvdWJsZSBkeW5hbWljIHZhciBTdHJpbmdcIi5zcGxpdChcIiBcIik7XG5cbiAgZnVuY3Rpb24gc2V0KHdvcmRzKSB7XG4gICAgdmFyIG9iaiA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyArK2kpIG9ialt3b3Jkc1tpXV0gPSB0cnVlO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoSW50ZXJwb2xhdGlvblN0YWNrKHN0YXRlKSB7XG4gICAgKHN0YXRlLmludGVycG9sYXRpb25TdGFjayB8fCAoc3RhdGUuaW50ZXJwb2xhdGlvblN0YWNrID0gW10pKS5wdXNoKHN0YXRlLnRva2VuaXplKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBvcEludGVycG9sYXRpb25TdGFjayhzdGF0ZSkge1xuICAgIHJldHVybiAoc3RhdGUuaW50ZXJwb2xhdGlvblN0YWNrIHx8IChzdGF0ZS5pbnRlcnBvbGF0aW9uU3RhY2sgPSBbXSkpLnBvcCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2l6ZUludGVycG9sYXRpb25TdGFjayhzdGF0ZSkge1xuICAgIHJldHVybiBzdGF0ZS5pbnRlcnBvbGF0aW9uU3RhY2sgPyBzdGF0ZS5pbnRlcnBvbGF0aW9uU3RhY2subGVuZ3RoIDogMDtcbiAgfVxuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcImFwcGxpY2F0aW9uL2RhcnRcIiwge1xuICAgIG5hbWU6IFwiY2xpa2VcIixcbiAgICBrZXl3b3Jkczogc2V0KGtleXdvcmRzKSxcbiAgICBibG9ja0tleXdvcmRzOiBzZXQoYmxvY2tLZXl3b3JkcyksXG4gICAgYnVpbHRpbjogc2V0KGJ1aWx0aW5zKSxcbiAgICBhdG9tczogc2V0KGF0b21zKSxcbiAgICBob29rczoge1xuICAgICAgXCJAXCI6IGZ1bmN0aW9uKHN0cmVhbSkge1xuICAgICAgICBzdHJlYW0uZWF0V2hpbGUoL1tcXHdcXCRfXFwuXS8pO1xuICAgICAgICByZXR1cm4gXCJtZXRhXCI7XG4gICAgICB9LFxuXG4gICAgICAvLyBjdXN0b20gc3RyaW5nIGhhbmRsaW5nIHRvIGRlYWwgd2l0aCB0cmlwbGUtcXVvdGVkIHN0cmluZ3MgYW5kIHN0cmluZyBpbnRlcnBvbGF0aW9uXG4gICAgICBcIidcIjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdG9rZW5TdHJpbmcoXCInXCIsIHN0cmVhbSwgc3RhdGUsIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBcIlxcXCJcIjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICByZXR1cm4gdG9rZW5TdHJpbmcoXCJcXFwiXCIsIHN0cmVhbSwgc3RhdGUsIGZhbHNlKTtcbiAgICAgIH0sXG4gICAgICBcInJcIjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICB2YXIgcGVlayA9IHN0cmVhbS5wZWVrKCk7XG4gICAgICAgIGlmIChwZWVrID09IFwiJ1wiIHx8IHBlZWsgPT0gXCJcXFwiXCIpIHtcbiAgICAgICAgICByZXR1cm4gdG9rZW5TdHJpbmcoc3RyZWFtLm5leHQoKSwgc3RyZWFtLCBzdGF0ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcblxuICAgICAgXCJ9XCI6IGZ1bmN0aW9uKF9zdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIC8vIFwifVwiIGlzIGVuZCBvZiBpbnRlcnBvbGF0aW9uLCBpZiBpbnRlcnBvbGF0aW9uIHN0YWNrIGlzIG5vbi1lbXB0eVxuICAgICAgICBpZiAoc2l6ZUludGVycG9sYXRpb25TdGFjayhzdGF0ZSkgPiAwKSB7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemUgPSBwb3BJbnRlcnBvbGF0aW9uU3RhY2soc3RhdGUpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG5cbiAgICAgIFwiL1wiOiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIGlmICghc3RyZWFtLmVhdChcIipcIikpIHJldHVybiBmYWxzZVxuICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IHRva2VuTmVzdGVkQ29tbWVudCgxKVxuICAgICAgICByZXR1cm4gc3RhdGUudG9rZW5pemUoc3RyZWFtLCBzdGF0ZSlcbiAgICAgIH0sXG4gICAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBfLCBzdHlsZSkge1xuICAgICAgICBpZiAoc3R5bGUgPT0gXCJ2YXJpYWJsZVwiKSB7XG4gICAgICAgICAgLy8gQXNzdW1lIHVwcGVyY2FzZSBzeW1ib2xzIGFyZSBjbGFzc2VzIHVzaW5nIHZhcmlhYmxlLTJcbiAgICAgICAgICB2YXIgaXNVcHBlciA9IFJlZ0V4cCgnXltfJF0qW0EtWl1bYS16QS1aMC05XyRdKiQnLCdnJyk7XG4gICAgICAgICAgaWYgKGlzVXBwZXIudGVzdChzdHJlYW0uY3VycmVudCgpKSkge1xuICAgICAgICAgICAgcmV0dXJuICd2YXJpYWJsZS0yJztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHRva2VuU3RyaW5nKHF1b3RlLCBzdHJlYW0sIHN0YXRlLCByYXcpIHtcbiAgICB2YXIgdHJpcGxlUXVvdGVkID0gZmFsc2U7XG4gICAgaWYgKHN0cmVhbS5lYXQocXVvdGUpKSB7XG4gICAgICBpZiAoc3RyZWFtLmVhdChxdW90ZSkpIHRyaXBsZVF1b3RlZCA9IHRydWU7XG4gICAgICBlbHNlIHJldHVybiBcInN0cmluZ1wiOyAvL2VtcHR5IHN0cmluZ1xuICAgIH1cbiAgICBmdW5jdGlvbiB0b2tlblN0cmluZ0hlbHBlcihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgd2hpbGUgKCFzdHJlYW0uZW9sKCkpIHtcbiAgICAgICAgaWYgKCFyYXcgJiYgIWVzY2FwZWQgJiYgc3RyZWFtLnBlZWsoKSA9PSBcIiRcIikge1xuICAgICAgICAgIHB1c2hJbnRlcnBvbGF0aW9uU3RhY2soc3RhdGUpO1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gdG9rZW5JbnRlcnBvbGF0aW9uO1xuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuZXh0ID0gc3RyZWFtLm5leHQoKTtcbiAgICAgICAgaWYgKG5leHQgPT0gcXVvdGUgJiYgIWVzY2FwZWQgJiYgKCF0cmlwbGVRdW90ZWQgfHwgc3RyZWFtLm1hdGNoKHF1b3RlICsgcXVvdGUpKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBlc2NhcGVkID0gIXJhdyAmJiAhZXNjYXBlZCAmJiBuZXh0ID09IFwiXFxcXFwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgfVxuICAgIHN0YXRlLnRva2VuaXplID0gdG9rZW5TdHJpbmdIZWxwZXI7XG4gICAgcmV0dXJuIHRva2VuU3RyaW5nSGVscGVyKHN0cmVhbSwgc3RhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5JbnRlcnBvbGF0aW9uKHN0cmVhbSwgc3RhdGUpIHtcbiAgICBzdHJlYW0uZWF0KFwiJFwiKTtcbiAgICBpZiAoc3RyZWFtLmVhdChcIntcIikpIHtcbiAgICAgIC8vIGxldCBjbGlrZSBoYW5kbGUgdGhlIGNvbnRlbnQgb2YgJHsuLi59LFxuICAgICAgLy8gd2UgdGFrZSBvdmVyIGFnYWluIHdoZW4gXCJ9XCIgYXBwZWFycyAoc2VlIGhvb2tzKS5cbiAgICAgIHN0YXRlLnRva2VuaXplID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUudG9rZW5pemUgPSB0b2tlbkludGVycG9sYXRpb25JZGVudGlmaWVyO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRva2VuSW50ZXJwb2xhdGlvbklkZW50aWZpZXIoc3RyZWFtLCBzdGF0ZSkge1xuICAgIHN0cmVhbS5lYXRXaGlsZSgvW1xcd19dLyk7XG4gICAgc3RhdGUudG9rZW5pemUgPSBwb3BJbnRlcnBvbGF0aW9uU3RhY2soc3RhdGUpO1xuICAgIHJldHVybiBcInZhcmlhYmxlXCI7XG4gIH1cblxuICBmdW5jdGlvbiB0b2tlbk5lc3RlZENvbW1lbnQoZGVwdGgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgIHZhciBjaFxuICAgICAgd2hpbGUgKGNoID0gc3RyZWFtLm5leHQoKSkge1xuICAgICAgICBpZiAoY2ggPT0gXCIqXCIgJiYgc3RyZWFtLmVhdChcIi9cIikpIHtcbiAgICAgICAgICBpZiAoZGVwdGggPT0gMSkge1xuICAgICAgICAgICAgc3RhdGUudG9rZW5pemUgPSBudWxsXG4gICAgICAgICAgICBicmVha1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IHRva2VuTmVzdGVkQ29tbWVudChkZXB0aCAtIDEpXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudG9rZW5pemUoc3RyZWFtLCBzdGF0ZSlcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY2ggPT0gXCIvXCIgJiYgc3RyZWFtLmVhdChcIipcIikpIHtcbiAgICAgICAgICBzdGF0ZS50b2tlbml6ZSA9IHRva2VuTmVzdGVkQ29tbWVudChkZXB0aCArIDEpXG4gICAgICAgICAgcmV0dXJuIHN0YXRlLnRva2VuaXplKHN0cmVhbSwgc3RhdGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBcImNvbW1lbnRcIlxuICAgIH1cbiAgfVxuXG4gIENvZGVNaXJyb3IucmVnaXN0ZXJIZWxwZXIoXCJoaW50V29yZHNcIiwgXCJhcHBsaWNhdGlvbi9kYXJ0XCIsIGtleXdvcmRzLmNvbmNhdChhdG9tcykuY29uY2F0KGJ1aWx0aW5zKSk7XG5cbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gbWFrZSBsb2FkaW5nIHRocm91Z2ggbWV0YS5qcyB3b3JrLlxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoXCJkYXJ0XCIsIGZ1bmN0aW9uKGNvbmYpIHtcbiAgICByZXR1cm4gQ29kZU1pcnJvci5nZXRNb2RlKGNvbmYsIFwiYXBwbGljYXRpb24vZGFydFwiKTtcbiAgfSwgXCJjbGlrZVwiKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==