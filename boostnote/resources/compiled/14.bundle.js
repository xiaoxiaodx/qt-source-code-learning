(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./node_modules/codemirror/addon/mode/simple.js":function(e,t,n){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e,r){(e.next||e.push)&&t(r,e.next||e.push),this.regex=n(e.regex),this.token=function(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}(e.token),this.data=e}function o(e,t){return function(n,r){if(r.pending){var o=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=o.text.length,o.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var a=r.local.endToken||null;return r.local=r.localState=null,a}var s;return a=r.local.mode.token(n,r.localState),r.local.endScan&&(s=r.local.endScan.exec(n.current()))&&(n.pos=n.start+s.index),a}for(var l=e[r.state],d=0;d<l.length;d++){var c=l[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){c.data.next?r.state=c.data.next:c.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=c.data.push):c.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),c.data.mode&&i(t,r,c.data.mode,c.token),c.data.indent&&r.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&r.indent.pop();var f=c.token;if(f&&f.apply&&(f=f(u)),u.length>2&&c.token&&"string"!=typeof c.token){r.pending=[];for(var p=2;p<u.length;p++)u[p]&&r.pending.push({text:u[p],token:c.token[p-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),f[0]}return f&&f.join?f[0]:f}}return n.next(),null}}function a(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!a(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function i(t,r,o,i){var s;if(o.persistent)for(var l=r.persistentStates;l&&!s;l=l.next)(o.spec?a(o.spec,l.spec):o.mode==l.mode)&&(s=l);var d=s?s.mode:o.mode||e.getMode(t,o.spec),c=s?s.state:e.startState(d);o.persistent&&!s&&(r.persistentStates={mode:d,spec:o.spec,state:c,next:r.persistentStates}),r.localState=c,r.local={mode:d,end:o.end&&n(o.end),endScan:o.end&&!1!==o.forceEnd&&n(o.end,!1),endToken:i&&i.join?i[i.length-1]:i}}function s(t,n){return function(r,o,a){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,o,a);if(null==r.indent||r.local||n.dontIndentStates&&function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}(r.state,n.dontIndentStates)>-1)return e.Pass;var i=r.indent.length-1,s=t[r.state];e:for(;;){for(var l=0;l<s.length;l++){var d=s[l];if(d.data.dedent&&!1!==d.data.dedentIfLineStart){var c=d.regex.exec(o);if(c&&c[0]){i--,(d.next||d.push)&&(s=t[d.next||d.push]),o=o.slice(c[0].length);continue e}}}break}return i<0?0:r.indent[i]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,a){t(a,"start");var i={},l=a.meta||{},d=!1;for(var c in a)if(c!=l&&a.hasOwnProperty(c))for(var u=i[c]=[],f=a[c],p=0;p<f.length;p++){var g=f[p];u.push(new r(g,a)),(g.indent||g.dedent)&&(d=!0)}var m={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:d?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:o(i,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:s(i,l)};if(l)for(var x in l)l.hasOwnProperty(x)&&(m[x]=l[x]);return m}}(n("./node_modules/codemirror/lib/codemirror.js"))},"./node_modules/codemirror/mode/rust/rust.js":function(e,t,n){!function(e){"use strict";e.defineSimpleMode("rust",{start:[{regex:/b?"/,token:"string",next:"string"},{regex:/b?r"/,token:"string",next:"string_raw"},{regex:/b?r#+"/,token:"string",next:"string_raw_hash"},{regex:/'(?:[^'\\]|\\(?:[nrt0'"]|x[\da-fA-F]{2}|u\{[\da-fA-F]{6}\}))'/,token:"string-2"},{regex:/b'(?:[^']|\\(?:['\\nrt0]|x[\da-fA-F]{2}))'/,token:"string-2"},{regex:/(?:(?:[0-9][0-9_]*)(?:(?:[Ee][+-]?[0-9_]+)|\.[0-9_]+(?:[Ee][+-]?[0-9_]+)?)(?:f32|f64)?)|(?:0(?:b[01_]+|(?:o[0-7_]+)|(?:x[0-9a-fA-F_]+))|(?:[0-9][0-9_]*))(?:u8|u16|u32|u64|i8|i16|i32|i64|isize|usize)?/,token:"number"},{regex:/(let(?:\s+mut)?|fn|enum|mod|struct|type)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,token:["keyword",null,"def"]},{regex:/(?:abstract|alignof|as|box|break|continue|const|crate|do|else|enum|extern|fn|for|final|if|impl|in|loop|macro|match|mod|move|offsetof|override|priv|proc|pub|pure|ref|return|self|sizeof|static|struct|super|trait|type|typeof|unsafe|unsized|use|virtual|where|while|yield)\b/,token:"keyword"},{regex:/\b(?:Self|isize|usize|char|bool|u8|u16|u32|u64|f16|f32|f64|i8|i16|i32|i64|str|Option)\b/,token:"atom"},{regex:/\b(?:true|false|Some|None|Ok|Err)\b/,token:"builtin"},{regex:/\b(fn)(\s+)([a-zA-Z_][a-zA-Z0-9_]*)/,token:["keyword",null,"def"]},{regex:/#!?\[.*\]/,token:"meta"},{regex:/\/\/.*/,token:"comment"},{regex:/\/\*/,token:"comment",next:"comment"},{regex:/[-+\/*=<>!]+/,token:"operator"},{regex:/[a-zA-Z_]\w*!/,token:"variable-3"},{regex:/[a-zA-Z_]\w*/,token:"variable"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0}],string:[{regex:/"/,token:"string",next:"start"},{regex:/(?:[^\\"]|\\(?:.|$))*/,token:"string"}],string_raw:[{regex:/"/,token:"string",next:"start"},{regex:/[^"]*/,token:"string"}],string_raw_hash:[{regex:/"#+/,token:"string",next:"start"},{regex:/(?:[^"]|"(?!#))*/,token:"string"}],comment:[{regex:/.*?\*\//,token:"comment",next:"start"},{regex:/.*/,token:"comment"}],meta:{dontIndentStates:["comment"],electricInput:/^\s*\}$/,blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),e.defineMIME("text/x-rustsrc","rust"),e.defineMIME("text/rust","rust")}(n("./node_modules/codemirror/lib/codemirror.js"),n("./node_modules/codemirror/addon/mode/simple.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9hZGRvbi9tb2RlL3NpbXBsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL3J1c3QvcnVzdC5qcyJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZW5zdXJlU3RhdGUiLCJzdGF0ZXMiLCJuYW1lIiwiaGFzT3duUHJvcGVydHkiLCJFcnJvciIsInRvUmVnZXgiLCJ2YWwiLCJjYXJldCIsImZsYWdzIiwiUmVnRXhwIiwiaWdub3JlQ2FzZSIsInNvdXJjZSIsIlN0cmluZyIsIlJ1bGUiLCJkYXRhIiwibmV4dCIsInB1c2giLCJ0aGlzIiwicmVnZXgiLCJ0b2tlbiIsImFwcGx5IiwicmVwbGFjZSIsInJlc3VsdCIsImkiLCJsZW5ndGgiLCJhc1Rva2VuIiwidG9rZW5GdW5jdGlvbiIsImNvbmZpZyIsInN0cmVhbSIsInN0YXRlIiwicGVuZGluZyIsInBlbmQiLCJzaGlmdCIsInBvcyIsInRleHQiLCJsb2NhbCIsImVuZCIsIm1hdGNoIiwidG9rIiwiZW5kVG9rZW4iLCJsb2NhbFN0YXRlIiwibSIsIm1vZGUiLCJlbmRTY2FuIiwiZXhlYyIsImN1cnJlbnQiLCJzdGFydCIsImluZGV4IiwiY3VyU3RhdGUiLCJydWxlIiwibWF0Y2hlcyIsInNvbCIsInN0YWNrIiwicG9wIiwiZW50ZXJMb2NhbE1vZGUiLCJpbmRlbnQiLCJpbmRlbnRhdGlvbiIsImluZGVudFVuaXQiLCJkZWRlbnQiLCJqIiwiYmFja1VwIiwiam9pbiIsImNtcCIsImEiLCJiIiwicHJvcHMiLCJwcm9wIiwic3BlYyIsInBlcnMiLCJwZXJzaXN0ZW50IiwicCIsInBlcnNpc3RlbnRTdGF0ZXMiLCJnZXRNb2RlIiwibFN0YXRlIiwic3RhcnRTdGF0ZSIsImZvcmNlRW5kIiwiaW5kZW50RnVuY3Rpb24iLCJtZXRhIiwidGV4dEFmdGVyIiwibGluZSIsImRvbnRJbmRlbnRTdGF0ZXMiLCJhcnIiLCJpbmRleE9mIiwiUGFzcyIsInJ1bGVzIiwic2NhbiIsImRlZGVudElmTGluZVN0YXJ0Iiwic2xpY2UiLCJkZWZpbmVTaW1wbGVNb2RlIiwiZGVmaW5lTW9kZSIsInNpbXBsZU1vZGUiLCJzdGF0ZXNfIiwiaGFzSW5kZW50YXRpb24iLCJsaXN0Iiwib3JpZyIsImNvcHlTdGF0ZSIsInMiLCJpbm5lck1vZGUiLCJtb2QiLCJzdHJpbmciLCJzdHJpbmdfcmF3Iiwic3RyaW5nX3Jhd19oYXNoIiwiY29tbWVudCIsImVsZWN0cmljSW5wdXQiLCJibG9ja0NvbW1lbnRTdGFydCIsImJsb2NrQ29tbWVudEVuZCIsImxpbmVDb21tZW50IiwiZm9sZCIsImRlZmluZU1JTUUiXSwibWFwcGluZ3MiOiI0SEFVRyxTQUFTQSxHQUNWLGFBaURBLFNBQVNDLEVBQVlDLEVBQVFDLEdBQzNCLElBQUtELEVBQU9FLGVBQWVELEdBQ3pCLE1BQU0sSUFBSUUsTUFBTSxtQkFBcUJGLEVBQU8sbUJBR2hELFNBQVNHLEVBQVFDLEVBQUtDLEdBQ3BCLElBQUtELEVBQUssTUFBTyxPQUNqQixJQUFJRSxFQUFRLEdBT1osT0FOSUYsYUFBZUcsUUFDYkgsRUFBSUksYUFBWUYsRUFBUSxLQUM1QkYsRUFBTUEsRUFBSUssUUFFVkwsRUFBTU0sT0FBT04sR0FFUixJQUFJRyxTQUFrQixJQUFWRixFQUFrQixHQUFLLEtBQU8sTUFBUUQsRUFBTSxJQUFLRSxHQWF0RSxTQUFTSyxFQUFLQyxFQUFNYixJQUNkYSxFQUFLQyxNQUFRRCxFQUFLRSxPQUFNaEIsRUFBWUMsRUFBUWEsRUFBS0MsTUFBUUQsRUFBS0UsTUFDbEVDLEtBQUtDLE1BQVFiLEVBQVFTLEVBQUtJLE9BQzFCRCxLQUFLRSxNQWJQLFNBQWlCYixHQUNmLElBQUtBLEVBQUssT0FBTyxLQUNqQixHQUFJQSxFQUFJYyxNQUFPLE9BQU9kLEVBQ3RCLEdBQWtCLGlCQUFQQSxFQUFpQixPQUFPQSxFQUFJZSxRQUFRLE1BQU8sS0FFdEQsSUFEQSxJQUFJQyxFQUFTLEdBQ0pDLEVBQUksRUFB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QU8sV0FDekIsQ0FBQ0QsTUFBTyxPQUFRQyxNQUFPLFVBQVdKLEtBQU0sV0FDeEMsQ0FBQ0csTUFBTyxlQUFnQkMsTUFBTyxZQUMvQixDQUFDRCxNQUFPLGdCQUFnQkMsTUFBTyxjQUMvQixDQUFDRCxNQUFPLGVBQWdCQyxNQUFPLFlBQy9CLENBQUNELE1BQU8sV0FBWXFDLFFBQVEsR0FDNUIsQ0FBQ3JDLE1BQU8sV0FBWXdDLFFBQVEsSUFFOUJ5QyxPQUFRLENBQ04sQ0FBQ2pGLE1BQU8sSUFBS0MsTUFBTyxTQUFVSixLQUFNLFNBQ3BDLENBQUNHLE1BQU8sd0JBQXlCQyxNQUFPLFdBRTFDaUYsV0FBWSxDQUNWLENBQUNsRixNQUFPLElBQUtDLE1BQU8sU0FBVUosS0FBTSxTQUNwQyxDQUFDRyxNQUFPLFFBQVNDLE1BQU8sV0FFMUJrRixnQkFBaUIsQ0FDZixDQUFDbkYsTUFBTyxNQUFPQyxNQUFPLFNBQVVKLEtBQU0sU0FDdEMsQ0FBQ0csTUFBTyxtQkFBb0JDLE1BQU8sV0FFckNtRixRQUFTLENBQ1AsQ0FBQ3BGLE1BQU8sVUFBV0MsTUFBTyxVQUFXSixLQUFNLFNBQzNDLENBQUNHLE1BQU8sS0FBTUMsTUFBTyxZQUV2QjBELEtBQU0sQ0FDSkcsaUJBQWtCLENBQUMsV0FDbkJ1QixjQUFlLFVBQ2ZDLGtCQUFtQixLQUNuQkMsZ0JBQWlCLEtBQ2pCQyxZQUFhLEtBQ2JDLEtBQU0sV0FLVjVHLEVBQVc2RyxXQUFXLGlCQUFrQixRQUN4QzdHLEVBQVc2RyxXQUFXLFlBQWEsUUFqRS9CVixDQUFJLEVBQVEsK0NBQXlCLEVBQVEiLCJmaWxlIjoiMTQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uKG1vZCkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlID09IFwib2JqZWN0XCIpIC8vIENvbW1vbkpTXG4gICAgbW9kKHJlcXVpcmUoXCIuLi8uLi9saWIvY29kZW1pcnJvclwiKSk7XG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgQ29kZU1pcnJvci5kZWZpbmVTaW1wbGVNb2RlID0gZnVuY3Rpb24obmFtZSwgc3RhdGVzKSB7XG4gICAgQ29kZU1pcnJvci5kZWZpbmVNb2RlKG5hbWUsIGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgcmV0dXJuIENvZGVNaXJyb3Iuc2ltcGxlTW9kZShjb25maWcsIHN0YXRlcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgQ29kZU1pcnJvci5zaW1wbGVNb2RlID0gZnVuY3Rpb24oY29uZmlnLCBzdGF0ZXMpIHtcbiAgICBlbnN1cmVTdGF0ZShzdGF0ZXMsIFwic3RhcnRcIik7XG4gICAgdmFyIHN0YXRlc18gPSB7fSwgbWV0YSA9IHN0YXRlcy5tZXRhIHx8IHt9LCBoYXNJbmRlbnRhdGlvbiA9IGZhbHNlO1xuICAgIGZvciAodmFyIHN0YXRlIGluIHN0YXRlcykgaWYgKHN0YXRlICE9IG1ldGEgJiYgc3RhdGVzLmhhc093blByb3BlcnR5KHN0YXRlKSkge1xuICAgICAgdmFyIGxpc3QgPSBzdGF0ZXNfW3N0YXRlXSA9IFtdLCBvcmlnID0gc3RhdGVzW3N0YXRlXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JpZy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGF0YSA9IG9yaWdbaV07XG4gICAgICAgIGxpc3QucHVzaChuZXcgUnVsZShkYXRhLCBzdGF0ZXMpKTtcbiAgICAgICAgaWYgKGRhdGEuaW5kZW50IHx8IGRhdGEuZGVkZW50KSBoYXNJbmRlbnRhdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBtb2RlID0ge1xuICAgICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7c3RhdGU6IFwic3RhcnRcIiwgcGVuZGluZzogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2NhbDogbnVsbCwgbG9jYWxTdGF0ZTogbnVsbCxcbiAgICAgICAgICAgICAgICBpbmRlbnQ6IGhhc0luZGVudGF0aW9uID8gW10gOiBudWxsfTtcbiAgICAgIH0sXG4gICAgICBjb3B5U3RhdGU6IGZ1bmN0aW9uKHN0YXRlKSB7XG4gICAgICAgIHZhciBzID0ge3N0YXRlOiBzdGF0ZS5zdGF0ZSwgcGVuZGluZzogc3RhdGUucGVuZGluZyxcbiAgICAgICAgICAgICAgICAgbG9jYWw6IHN0YXRlLmxvY2FsLCBsb2NhbFN0YXRlOiBudWxsLFxuICAgICAgICAgICAgICAgICBpbmRlbnQ6IHN0YXRlLmluZGVudCAmJiBzdGF0ZS5pbmRlbnQuc2xpY2UoMCl9O1xuICAgICAgICBpZiAoc3RhdGUubG9jYWxTdGF0ZSlcbiAgICAgICAgICBzLmxvY2FsU3RhdGUgPSBDb2RlTWlycm9yLmNvcHlTdGF0ZShzdGF0ZS5sb2NhbC5tb2RlLCBzdGF0ZS5sb2NhbFN0YXRlKTtcbiAgICAgICAgaWYgKHN0YXRlLnN0YWNrKVxuICAgICAgICAgIHMuc3RhY2sgPSBzdGF0ZS5zdGFjay5zbGljZSgwKTtcbiAgICAgICAgZm9yICh2YXIgcGVycyA9IHN0YXRlLnBlcnNpc3RlbnRTdGF0ZXM7IHBlcnM7IHBlcnMgPSBwZXJzLm5leHQpXG4gICAgICAgICAgcy5wZXJzaXN0ZW50U3RhdGVzID0ge21vZGU6IHBlcnMubW9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYzogcGVycy5zcGVjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogcGVycy5zdGF0ZSA9PSBzdGF0ZS5sb2NhbFN0YXRlID8gcy5sb2NhbFN0YXRlIDogQ29kZU1pcnJvci5jb3B5U3RhdGUocGVycy5tb2RlLCBwZXJzLnN0YXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dDogcy5wZXJzaXN0ZW50U3RhdGVzfTtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9LFxuICAgICAgdG9rZW46IHRva2VuRnVuY3Rpb24oc3RhdGVzXywgY29uZmlnKSxcbiAgICAgIGlubmVyTW9kZTogZnVuY3Rpb24oc3RhdGUpIHsgcmV0dXJuIHN0YXRlLmxvY2FsICYmIHttb2RlOiBzdGF0ZS5sb2NhbC5tb2RlLCBzdGF0ZTogc3RhdGUubG9jYWxTdGF0ZX07IH0sXG4gICAgICBpbmRlbnQ6IGluZGVudEZ1bmN0aW9uKHN0YXRlc18sIG1ldGEpXG4gICAgfTtcbiAgICBpZiAobWV0YSkgZm9yICh2YXIgcHJvcCBpbiBtZXRhKSBpZiAobWV0YS5oYXNPd25Qcm9wZXJ0eShwcm9wKSlcbiAgICAgIG1vZGVbcHJvcF0gPSBtZXRhW3Byb3BdO1xuICAgIHJldHVybiBtb2RlO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGVuc3VyZVN0YXRlKHN0YXRlcywgbmFtZSkge1xuICAgIGlmICghc3RhdGVzLmhhc093blByb3BlcnR5KG5hbWUpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5kZWZpbmVkIHN0YXRlIFwiICsgbmFtZSArIFwiIGluIHNpbXBsZSBtb2RlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9SZWdleCh2YWwsIGNhcmV0KSB7XG4gICAgaWYgKCF2YWwpIHJldHVybiAvKD86KS87XG4gICAgdmFyIGZsYWdzID0gXCJcIjtcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICBpZiAodmFsLmlnbm9yZUNhc2UpIGZsYWdzID0gXCJpXCI7XG4gICAgICB2YWwgPSB2YWwuc291cmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWwgPSBTdHJpbmcodmFsKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoKGNhcmV0ID09PSBmYWxzZSA/IFwiXCIgOiBcIl5cIikgKyBcIig/OlwiICsgdmFsICsgXCIpXCIsIGZsYWdzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFzVG9rZW4odmFsKSB7XG4gICAgaWYgKCF2YWwpIHJldHVybiBudWxsO1xuICAgIGlmICh2YWwuYXBwbHkpIHJldHVybiB2YWxcbiAgICBpZiAodHlwZW9mIHZhbCA9PSBcInN0cmluZ1wiKSByZXR1cm4gdmFsLnJlcGxhY2UoL1xcLi9nLCBcIiBcIik7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKVxuICAgICAgcmVzdWx0LnB1c2godmFsW2ldICYmIHZhbFtpXS5yZXBsYWNlKC9cXC4vZywgXCIgXCIpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gUnVsZShkYXRhLCBzdGF0ZXMpIHtcbiAgICBpZiAoZGF0YS5uZXh0IHx8IGRhdGEucHVzaCkgZW5zdXJlU3RhdGUoc3RhdGVzLCBkYXRhLm5leHQgfHwgZGF0YS5wdXNoKTtcbiAgICB0aGlzLnJlZ2V4ID0gdG9SZWdleChkYXRhLnJlZ2V4KTtcbiAgICB0aGlzLnRva2VuID0gYXNUb2tlbihkYXRhLnRva2VuKTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9rZW5GdW5jdGlvbihzdGF0ZXMsIGNvbmZpZykge1xuICAgIHJldHVybiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUucGVuZGluZykge1xuICAgICAgICB2YXIgcGVuZCA9IHN0YXRlLnBlbmRpbmcuc2hpZnQoKTtcbiAgICAgICAgaWYgKHN0YXRlLnBlbmRpbmcubGVuZ3RoID09IDApIHN0YXRlLnBlbmRpbmcgPSBudWxsO1xuICAgICAgICBzdHJlYW0ucG9zICs9IHBlbmQudGV4dC5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwZW5kLnRva2VuO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUubG9jYWwpIHtcbiAgICAgICAgaWYgKHN0YXRlLmxvY2FsLmVuZCAmJiBzdHJlYW0ubWF0Y2goc3RhdGUubG9jYWwuZW5kKSkge1xuICAgICAgICAgIHZhciB0b2sgPSBzdGF0ZS5sb2NhbC5lbmRUb2tlbiB8fCBudWxsO1xuICAgICAgICAgIHN0YXRlLmxvY2FsID0gc3RhdGUubG9jYWxTdGF0ZSA9IG51bGw7XG4gICAgICAgICAgcmV0dXJuIHRvaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdG9rID0gc3RhdGUubG9jYWwubW9kZS50b2tlbihzdHJlYW0sIHN0YXRlLmxvY2FsU3RhdGUpLCBtO1xuICAgICAgICAgIGlmIChzdGF0ZS5sb2NhbC5lbmRTY2FuICYmIChtID0gc3RhdGUubG9jYWwuZW5kU2Nhbi5leGVjKHN0cmVhbS5jdXJyZW50KCkpKSlcbiAgICAgICAgICAgIHN0cmVhbS5wb3MgPSBzdHJlYW0uc3RhcnQgKyBtLmluZGV4O1xuICAgICAgICAgIHJldHVybiB0b2s7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGN1clN0YXRlID0gc3RhdGVzW3N0YXRlLnN0YXRlXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3VyU3RhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHJ1bGUgPSBjdXJTdGF0ZVtpXTtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSAoIXJ1bGUuZGF0YS5zb2wgfHwgc3RyZWFtLnNvbCgpKSAmJiBzdHJlYW0ubWF0Y2gocnVsZS5yZWdleCk7XG4gICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgaWYgKHJ1bGUuZGF0YS5uZXh0KSB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0ZSA9IHJ1bGUuZGF0YS5uZXh0O1xuICAgICAgICAgIH0gZWxzZSBpZiAocnVsZS5kYXRhLnB1c2gpIHtcbiAgICAgICAgICAgIChzdGF0ZS5zdGFjayB8fCAoc3RhdGUuc3RhY2sgPSBbXSkpLnB1c2goc3RhdGUuc3RhdGUpO1xuICAgICAgICAgICAgc3RhdGUuc3RhdGUgPSBydWxlLmRhdGEucHVzaDtcbiAgICAgICAgICB9IGVsc2UgaWYgKHJ1bGUuZGF0YS5wb3AgJiYgc3RhdGUuc3RhY2sgJiYgc3RhdGUuc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICBzdGF0ZS5zdGF0ZSA9IHN0YXRlLnN0YWNrLnBvcCgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChydWxlLmRhdGEubW9kZSlcbiAgICAgICAgICAgIGVudGVyTG9jYWxNb2RlKGNvbmZpZywgc3RhdGUsIHJ1bGUuZGF0YS5tb2RlLCBydWxlLnRva2VuKTtcbiAgICAgICAgICBpZiAocnVsZS5kYXRhLmluZGVudClcbiAgICAgICAgICAgIHN0YXRlLmluZGVudC5wdXNoKHN0cmVhbS5pbmRlbnRhdGlvbigpICsgY29uZmlnLmluZGVudFVuaXQpO1xuICAgICAgICAgIGlmIChydWxlLmRhdGEuZGVkZW50KVxuICAgICAgICAgICAgc3RhdGUuaW5kZW50LnBvcCgpO1xuICAgICAgICAgIHZhciB0b2tlbiA9IHJ1bGUudG9rZW5cbiAgICAgICAgICBpZiAodG9rZW4gJiYgdG9rZW4uYXBwbHkpIHRva2VuID0gdG9rZW4obWF0Y2hlcylcbiAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAyICYmIHJ1bGUudG9rZW4gJiYgdHlwZW9mIHJ1bGUudG9rZW4gIT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgc3RhdGUucGVuZGluZyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDI7IGogPCBtYXRjaGVzLmxlbmd0aDsgaisrKVxuICAgICAgICAgICAgICBpZiAobWF0Y2hlc1tqXSlcbiAgICAgICAgICAgICAgICBzdGF0ZS5wZW5kaW5nLnB1c2goe3RleHQ6IG1hdGNoZXNbal0sIHRva2VuOiBydWxlLnRva2VuW2ogLSAxXX0pO1xuICAgICAgICAgICAgc3RyZWFtLmJhY2tVcChtYXRjaGVzWzBdLmxlbmd0aCAtIChtYXRjaGVzWzFdID8gbWF0Y2hlc1sxXS5sZW5ndGggOiAwKSk7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5bMF07XG4gICAgICAgICAgfSBlbHNlIGlmICh0b2tlbiAmJiB0b2tlbi5qb2luKSB7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW5bMF07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY21wKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG4gICAgaWYgKCFhIHx8IHR5cGVvZiBhICE9IFwib2JqZWN0XCIgfHwgIWIgfHwgdHlwZW9mIGIgIT0gXCJvYmplY3RcIikgcmV0dXJuIGZhbHNlO1xuICAgIHZhciBwcm9wcyA9IDA7XG4gICAgZm9yICh2YXIgcHJvcCBpbiBhKSBpZiAoYS5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgaWYgKCFiLmhhc093blByb3BlcnR5KHByb3ApIHx8ICFjbXAoYVtwcm9wXSwgYltwcm9wXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHByb3BzKys7XG4gICAgfVxuICAgIGZvciAodmFyIHByb3AgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocHJvcCkpIHByb3BzLS07XG4gICAgcmV0dXJuIHByb3BzID09IDA7XG4gIH1cblxuICBmdW5jdGlvbiBlbnRlckxvY2FsTW9kZShjb25maWcsIHN0YXRlLCBzcGVjLCB0b2tlbikge1xuICAgIHZhciBwZXJzO1xuICAgIGlmIChzcGVjLnBlcnNpc3RlbnQpIGZvciAodmFyIHAgPSBzdGF0ZS5wZXJzaXN0ZW50U3RhdGVzOyBwICYmICFwZXJzOyBwID0gcC5uZXh0KVxuICAgICAgaWYgKHNwZWMuc3BlYyA/IGNtcChzcGVjLnNwZWMsIHAuc3BlYykgOiBzcGVjLm1vZGUgPT0gcC5tb2RlKSBwZXJzID0gcDtcbiAgICB2YXIgbW9kZSA9IHBlcnMgPyBwZXJzLm1vZGUgOiBzcGVjLm1vZGUgfHwgQ29kZU1pcnJvci5nZXRNb2RlKGNvbmZpZywgc3BlYy5zcGVjKTtcbiAgICB2YXIgbFN0YXRlID0gcGVycyA/IHBlcnMuc3RhdGUgOiBDb2RlTWlycm9yLnN0YXJ0U3RhdGUobW9kZSk7XG4gICAgaWYgKHNwZWMucGVyc2lzdGVudCAmJiAhcGVycylcbiAgICAgIHN0YXRlLnBlcnNpc3RlbnRTdGF0ZXMgPSB7bW9kZTogbW9kZSwgc3BlYzogc3BlYy5zcGVjLCBzdGF0ZTogbFN0YXRlLCBuZXh0OiBzdGF0ZS5wZXJzaXN0ZW50U3RhdGVzfTtcblxuICAgIHN0YXRlLmxvY2FsU3RhdGUgPSBsU3RhdGU7XG4gICAgc3RhdGUubG9jYWwgPSB7bW9kZTogbW9kZSxcbiAgICAgICAgICAgICAgICAgICBlbmQ6IHNwZWMuZW5kICYmIHRvUmVnZXgoc3BlYy5lbmQpLFxuICAgICAgICAgICAgICAgICAgIGVuZFNjYW46IHNwZWMuZW5kICYmIHNwZWMuZm9yY2VFbmQgIT09IGZhbHNlICYmIHRvUmVnZXgoc3BlYy5lbmQsIGZhbHNlKSxcbiAgICAgICAgICAgICAgICAgICBlbmRUb2tlbjogdG9rZW4gJiYgdG9rZW4uam9pbiA/IHRva2VuW3Rva2VuLmxlbmd0aCAtIDFdIDogdG9rZW59O1xuICB9XG5cbiAgZnVuY3Rpb24gaW5kZXhPZih2YWwsIGFycikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBpZiAoYXJyW2ldID09PSB2YWwpIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5kZW50RnVuY3Rpb24oc3RhdGVzLCBtZXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXRlLCB0ZXh0QWZ0ZXIsIGxpbmUpIHtcbiAgICAgIGlmIChzdGF0ZS5sb2NhbCAmJiBzdGF0ZS5sb2NhbC5tb2RlLmluZGVudClcbiAgICAgICAgcmV0dXJuIHN0YXRlLmxvY2FsLm1vZGUuaW5kZW50KHN0YXRlLmxvY2FsU3RhdGUsIHRleHRBZnRlciwgbGluZSk7XG4gICAgICBpZiAoc3RhdGUuaW5kZW50ID09IG51bGwgfHwgc3RhdGUubG9jYWwgfHwgbWV0YS5kb250SW5kZW50U3RhdGVzICYmIGluZGV4T2Yoc3RhdGUuc3RhdGUsIG1ldGEuZG9udEluZGVudFN0YXRlcykgPiAtMSlcbiAgICAgICAgcmV0dXJuIENvZGVNaXJyb3IuUGFzcztcblxuICAgICAgdmFyIHBvcyA9IHN0YXRlLmluZGVudC5sZW5ndGggLSAxLCBydWxlcyA9IHN0YXRlc1tzdGF0ZS5zdGF0ZV07XG4gICAgICBzY2FuOiBmb3IgKDs7KSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcnVsZSA9IHJ1bGVzW2ldO1xuICAgICAgICAgIGlmIChydWxlLmRhdGEuZGVkZW50ICYmIHJ1bGUuZGF0YS5kZWRlbnRJZkxpbmVTdGFydCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHZhciBtID0gcnVsZS5yZWdleC5leGVjKHRleHRBZnRlcik7XG4gICAgICAgICAgICBpZiAobSAmJiBtWzBdKSB7XG4gICAgICAgICAgICAgIHBvcy0tO1xuICAgICAgICAgICAgICBpZiAocnVsZS5uZXh0IHx8IHJ1bGUucHVzaCkgcnVsZXMgPSBzdGF0ZXNbcnVsZS5uZXh0IHx8IHJ1bGUucHVzaF07XG4gICAgICAgICAgICAgIHRleHRBZnRlciA9IHRleHRBZnRlci5zbGljZShtWzBdLmxlbmd0aCk7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIHNjYW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBvcyA8IDAgPyAwIDogc3RhdGUuaW5kZW50W3Bvc107XG4gICAgfTtcbiAgfVxufSk7XG4iLCIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpLCByZXF1aXJlKFwiLi4vLi4vYWRkb24vbW9kZS9zaW1wbGVcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIiwgXCIuLi8uLi9hZGRvbi9tb2RlL3NpbXBsZVwiXSwgbW9kKTtcbiAgZWxzZSAvLyBQbGFpbiBicm93c2VyIGVudlxuICAgIG1vZChDb2RlTWlycm9yKTtcbn0pKGZ1bmN0aW9uKENvZGVNaXJyb3IpIHtcblwidXNlIHN0cmljdFwiO1xuXG5Db2RlTWlycm9yLmRlZmluZVNpbXBsZU1vZGUoXCJydXN0XCIse1xuICBzdGFydDogW1xuICAgIC8vIHN0cmluZyBhbmQgYnl0ZSBzdHJpbmdcbiAgICB7cmVnZXg6IC9iP1wiLywgdG9rZW46IFwic3RyaW5nXCIsIG5leHQ6IFwic3RyaW5nXCJ9LFxuICAgIC8vIHJhdyBzdHJpbmcgYW5kIHJhdyBieXRlIHN0cmluZ1xuICAgIHtyZWdleDogL2I/clwiLywgdG9rZW46IFwic3RyaW5nXCIsIG5leHQ6IFwic3RyaW5nX3Jhd1wifSxcbiAgICB7cmVnZXg6IC9iP3IjK1wiLywgdG9rZW46IFwic3RyaW5nXCIsIG5leHQ6IFwic3RyaW5nX3Jhd19oYXNoXCJ9LFxuICAgIC8vIGNoYXJhY3RlclxuICAgIHtyZWdleDogLycoPzpbXidcXFxcXXxcXFxcKD86W25ydDAnXCJdfHhbXFxkYS1mQS1GXXsyfXx1XFx7W1xcZGEtZkEtRl17Nn1cXH0pKScvLCB0b2tlbjogXCJzdHJpbmctMlwifSxcbiAgICAvLyBieXRlXG4gICAge3JlZ2V4OiAvYicoPzpbXiddfFxcXFwoPzpbJ1xcXFxucnQwXXx4W1xcZGEtZkEtRl17Mn0pKScvLCB0b2tlbjogXCJzdHJpbmctMlwifSxcblxuICAgIHtyZWdleDogLyg/Oig/OlswLTldWzAtOV9dKikoPzooPzpbRWVdWystXT9bMC05X10rKXxcXC5bMC05X10rKD86W0VlXVsrLV0/WzAtOV9dKyk/KSg/OmYzMnxmNjQpPyl8KD86MCg/OmJbMDFfXSt8KD86b1swLTdfXSspfCg/OnhbMC05YS1mQS1GX10rKSl8KD86WzAtOV1bMC05X10qKSkoPzp1OHx1MTZ8dTMyfHU2NHxpOHxpMTZ8aTMyfGk2NHxpc2l6ZXx1c2l6ZSk/LyxcbiAgICAgdG9rZW46IFwibnVtYmVyXCJ9LFxuICAgIHtyZWdleDogLyhsZXQoPzpcXHMrbXV0KT98Zm58ZW51bXxtb2R8c3RydWN0fHR5cGUpKFxccyspKFthLXpBLVpfXVthLXpBLVowLTlfXSopLywgdG9rZW46IFtcImtleXdvcmRcIiwgbnVsbCwgXCJkZWZcIl19LFxuICAgIHtyZWdleDogLyg/OmFic3RyYWN0fGFsaWdub2Z8YXN8Ym94fGJyZWFrfGNvbnRpbnVlfGNvbnN0fGNyYXRlfGRvfGVsc2V8ZW51bXxleHRlcm58Zm58Zm9yfGZpbmFsfGlmfGltcGx8aW58bG9vcHxtYWNyb3xtYXRjaHxtb2R8bW92ZXxvZmZzZXRvZnxvdmVycmlkZXxwcml2fHByb2N8cHVifHB1cmV8cmVmfHJldHVybnxzZWxmfHNpemVvZnxzdGF0aWN8c3RydWN0fHN1cGVyfHRyYWl0fHR5cGV8dHlwZW9mfHVuc2FmZXx1bnNpemVkfHVzZXx2aXJ0dWFsfHdoZXJlfHdoaWxlfHlpZWxkKVxcYi8sIHRva2VuOiBcImtleXdvcmRcIn0sXG4gICAge3JlZ2V4OiAvXFxiKD86U2VsZnxpc2l6ZXx1c2l6ZXxjaGFyfGJvb2x8dTh8dTE2fHUzMnx1NjR8ZjE2fGYzMnxmNjR8aTh8aTE2fGkzMnxpNjR8c3RyfE9wdGlvbilcXGIvLCB0b2tlbjogXCJhdG9tXCJ9LFxuICAgIHtyZWdleDogL1xcYig/OnRydWV8ZmFsc2V8U29tZXxOb25lfE9rfEVycilcXGIvLCB0b2tlbjogXCJidWlsdGluXCJ9LFxuICAgIHtyZWdleDogL1xcYihmbikoXFxzKykoW2EtekEtWl9dW2EtekEtWjAtOV9dKikvLFxuICAgICB0b2tlbjogW1wia2V5d29yZFwiLCBudWxsICxcImRlZlwiXX0sXG4gICAge3JlZ2V4OiAvIyE/XFxbLipcXF0vLCB0b2tlbjogXCJtZXRhXCJ9LFxuICAgIHtyZWdleDogL1xcL1xcLy4qLywgdG9rZW46IFwiY29tbWVudFwifSxcbiAgICB7cmVnZXg6IC9cXC9cXCovLCB0b2tlbjogXCJjb21tZW50XCIsIG5leHQ6IFwiY29tbWVudFwifSxcbiAgICB7cmVnZXg6IC9bLStcXC8qPTw+IV0rLywgdG9rZW46IFwib3BlcmF0b3JcIn0sXG4gICAge3JlZ2V4OiAvW2EtekEtWl9dXFx3KiEvLHRva2VuOiBcInZhcmlhYmxlLTNcIn0sXG4gICAge3JlZ2V4OiAvW2EtekEtWl9dXFx3Ki8sIHRva2VuOiBcInZhcmlhYmxlXCJ9LFxuICAgIHtyZWdleDogL1tcXHtcXFtcXChdLywgaW5kZW50OiB0cnVlfSxcbiAgICB7cmVnZXg6IC9bXFx9XFxdXFwpXS8sIGRlZGVudDogdHJ1ZX1cbiAgXSxcbiAgc3RyaW5nOiBbXG4gICAge3JlZ2V4OiAvXCIvLCB0b2tlbjogXCJzdHJpbmdcIiwgbmV4dDogXCJzdGFydFwifSxcbiAgICB7cmVnZXg6IC8oPzpbXlxcXFxcIl18XFxcXCg/Oi58JCkpKi8sIHRva2VuOiBcInN0cmluZ1wifVxuICBdLFxuICBzdHJpbmdfcmF3OiBbXG4gICAge3JlZ2V4OiAvXCIvLCB0b2tlbjogXCJzdHJpbmdcIiwgbmV4dDogXCJzdGFydFwifSxcbiAgICB7cmVnZXg6IC9bXlwiXSovLCB0b2tlbjogXCJzdHJpbmdcIn1cbiAgXSxcbiAgc3RyaW5nX3Jhd19oYXNoOiBbXG4gICAge3JlZ2V4OiAvXCIjKy8sIHRva2VuOiBcInN0cmluZ1wiLCBuZXh0OiBcInN0YXJ0XCJ9LFxuICAgIHtyZWdleDogLyg/OlteXCJdfFwiKD8hIykpKi8sIHRva2VuOiBcInN0cmluZ1wifVxuICBdLFxuICBjb21tZW50OiBbXG4gICAge3JlZ2V4OiAvLio/XFwqXFwvLywgdG9rZW46IFwiY29tbWVudFwiLCBuZXh0OiBcInN0YXJ0XCJ9LFxuICAgIHtyZWdleDogLy4qLywgdG9rZW46IFwiY29tbWVudFwifVxuICBdLFxuICBtZXRhOiB7XG4gICAgZG9udEluZGVudFN0YXRlczogW1wiY29tbWVudFwiXSxcbiAgICBlbGVjdHJpY0lucHV0OiAvXlxccypcXH0kLyxcbiAgICBibG9ja0NvbW1lbnRTdGFydDogXCIvKlwiLFxuICAgIGJsb2NrQ29tbWVudEVuZDogXCIqL1wiLFxuICAgIGxpbmVDb21tZW50OiBcIi8vXCIsXG4gICAgZm9sZDogXCJicmFjZVwiXG4gIH1cbn0pO1xuXG5cbkNvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1ydXN0c3JjXCIsIFwicnVzdFwiKTtcbkNvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQvcnVzdFwiLCBcInJ1c3RcIik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=