(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"./node_modules/codemirror/mode/crystal/crystal.js":function(e,t,n){!function(e){"use strict";e.defineMode("crystal",(function(e){function t(e,t){return new RegExp((t?"":"^")+"(?:"+e.join("|")+")"+(t?"$":"\\b"))}function n(e,t,n){return n.tokenize.push(e),e(t,n)}var r=/^(?:[-+/%|&^]|\*\*?|[<>]{2})/,a=/^(?:[=!]~|===|<=>|[<>=!]=?|[|&]{2}|~)/,u=/^(?:\[\][?=]?)/,i=/^(?:\.(?:\.{2})?|->|[?:])/,o=/^[a-z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,c=/^[A-Z_\u009F-\uFFFF][a-zA-Z0-9_\u009F-\uFFFF]*/,s=t(["abstract","alias","as","asm","begin","break","case","class","def","do","else","elsif","end","ensure","enum","extend","for","fun","if","include","instance_sizeof","lib","macro","module","next","of","out","pointerof","private","protected","rescue","return","require","select","sizeof","struct","super","then","type","typeof","uninitialized","union","unless","until","when","while","with","yield","__DIR__","__END_LINE__","__FILE__","__LINE__"]),l=t(["true","false","nil","self"]),f=t(["def","fun","macro","class","module","struct","lib","enum","union","do","for"]),m=t(["if","unless","case","while","until","begin","then"]),h=["end","else","elsif","rescue","ensure"],p=t(h),d=["\\)","\\}","\\]"],k=new RegExp("^(?:"+d.join("|")+")$"),z={def:g,fun:g,macro:function(e,t){if(e.eatSpace())return null;var n;if(n=e.match(o)){if("def"==n)return"keyword";e.eat(/[?!]/)}return t.tokenize.pop(),"def"},class:x,module:x,struct:x,lib:x,enum:x,union:x},F={"[":"]","{":"}","(":")","<":">"};function _(e,t){if(e.eatSpace())return null;if("\\"!=t.lastToken&&e.match("{%",!1))return n(w("%","%"),e,t);if("\\"!=t.lastToken&&e.match("{{",!1))return n(w("{","}"),e,t);if("#"==e.peek())return e.skipToEnd(),"comment";var h;if(e.match(o))return e.eat(/[?!]/),h=e.current(),e.eat(":")?"atom":"."==t.lastToken?"property":s.test(h)?(f.test(h)?"fun"==h&&t.blocks.indexOf("lib")>=0||"def"==h&&"abstract"==t.lastToken||(t.blocks.push(h),t.currentIndent+=1):"operator"!=t.lastStyle&&t.lastStyle||!m.test(h)?"end"==h&&(t.blocks.pop(),t.currentIndent-=1):(t.blocks.push(h),t.currentIndent+=1),z.hasOwnProperty(h)&&t.tokenize.push(z[h]),"keyword"):l.test(h)?"atom":"variable";if(e.eat("@"))return"["==e.peek()?n(b("[","]","meta"),e,t):(e.eat("@"),e.match(o)||e.match(c),"variable-2");if(e.match(c))return"tag";if(e.eat(":"))return e.eat('"')?n(y('"',"atom",!1),e,t):e.match(o)||e.match(c)||e.match(r)||e.match(a)||e.match(u)?"atom":(e.eat(":"),"operator");if(e.eat('"'))return n(y('"',"string",!0),e,t);if("%"==e.peek()){var p,d="string",k=!0;if(e.match("%r"))d="string-2",p=e.next();else if(e.match("%w"))k=!1,p=e.next();else if(e.match("%q"))k=!1,p=e.next();else{if(!(p=e.match(/^%([^\w\s=])/)))return e.match(/^%[a-zA-Z0-9_\u009F-\uFFFF]*/)?"meta":"operator";p=p[1]}return F.hasOwnProperty(p)&&(p=F[p]),n(y(p,d,k),e,t)}return(h=e.match(/^<<-('?)([A-Z]\w*)\1/))?n(function(e,t){return function(n,r){if(n.sol()&&(n.eatSpace(),n.match(e)))return r.tokenize.pop(),"string";for(var a=!1;n.peek();)if(a)n.next(),a=!1;else{if(n.match("{%",!1))return r.tokenize.push(w("%","%")),"string";if(n.match("{{",!1))return r.tokenize.push(w("{","}")),"string";if(t&&n.match("#{",!1))return r.tokenize.push(b("#{","}","meta")),"string";a=t&&"\\"==n.next()}return"string"}}(h[2],!h[1]),e,t):e.eat("'")?(e.match(/^(?:[^']|\\(?:[befnrtv0'"]|[0-7]{3}|u(?:[0-9a-fA-F]{4}|\{[0-9a-fA-F]{1,6}\})))/),e.eat("'"),"atom"):e.eat("0")?(e.eat("x")?e.match(/^[0-9a-fA-F]+/):e.eat("o")?e.match(/^[0-7]+/):e.eat("b")&&e.match(/^[01]+/),"number"):e.eat(/^\d/)?(e.match(/^\d*(?:\.\d+)?(?:[eE][+-]?\d+)?/),"number"):e.match(r)?(e.eat("="),"operator"):e.match(a)||e.match(i)?"operator":(h=e.match(/[({[]/,!1))?n(b(h=h[0],F[h],null),e,t):e.eat("\\")?(e.next(),"meta"):(e.next(),null)}function b(e,t,n,r){return function(a,u){if(!r&&a.match(e))return u.tokenize[u.tokenize.length-1]=b(e,t,n,!0),u.currentIndent+=1,n;var i=_(a,u);return a.current()===t&&(u.tokenize.pop(),u.currentIndent-=1,i=n),i}}function w(e,t,n){return function(r,a){return!n&&r.match("{"+e)?(a.currentIndent+=1,a.tokenize[a.tokenize.length-1]=w(e,t,!0),"meta"):r.match(t+"}")?(a.currentIndent-=1,a.tokenize.pop(),"meta"):_(r,a)}}function g(e,t){return e.eatSpace()?null:(e.match(o)?e.eat(/[!?]/):e.match(r)||e.match(a)||e.match(u),t.tokenize.pop(),"def")}function x(e,t){return e.eatSpace()?null:(e.match(c),t.tokenize.pop(),"def")}function y(e,t,n){return function(r,a){for(var u=!1;r.peek();)if(u)r.next(),u=!1;else{if(r.match("{%",!1))return a.tokenize.push(w("%","%")),t;if(r.match("{{",!1))return a.tokenize.push(w("{","}")),t;if(n&&r.match("#{",!1))return a.tokenize.push(b("#{","}","meta")),t;var i=r.next();if(i==e)return a.tokenize.pop(),t;u=n&&"\\"==i}return t}}return{startState:function(){return{tokenize:[_],currentIndent:0,lastToken:null,lastStyle:null,blocks:[]}},token:function(e,t){var n=t.tokenize[t.tokenize.length-1](e,t),r=e.current();return n&&"comment"!=n&&(t.lastToken=r,t.lastStyle=n),n},indent:function(t,n){return n=n.replace(/^\s*(?:\{%)?\s*|\s*(?:%\})?\s*$/g,""),p.test(n)||k.test(n)?e.indentUnit*(t.currentIndent-1):e.indentUnit*t.currentIndent},fold:"indent",electricInput:t(d.concat(h),!0),lineComment:"#"}})),e.defineMIME("text/x-crystal","crystal")}(n("./node_modules/codemirror/lib/codemirror.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL2NyeXN0YWwvY3J5c3RhbC5qcyJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsImNvbmZpZyIsIndvcmRSZWdFeHAiLCJ3b3JkcyIsImVuZCIsIlJlZ0V4cCIsImpvaW4iLCJjaGFpbiIsInRva2VuaXplIiwic3RyZWFtIiwic3RhdGUiLCJwdXNoIiwib3BlcmF0b3JzIiwiY29uZGl0aW9uYWxPcGVyYXRvcnMiLCJpbmRleGluZ09wZXJhdG9ycyIsImFub3RoZXJPcGVyYXRvcnMiLCJpZGVudHMiLCJ0eXBlcyIsImtleXdvcmRzIiwiYXRvbVdvcmRzIiwiaW5kZW50S2V5d29yZHMiLCJpbmRlbnRFeHByZXNzaW9uS2V5d29yZHMiLCJkZWRlbnRLZXl3b3Jkc0FycmF5IiwiZGVkZW50S2V5d29yZHMiLCJkZWRlbnRQdW5jdHVhbHNBcnJheSIsImRlZGVudFB1bmN0dWFscyIsIm5leHRUb2tlbml6ZXIiLCJ0b2tlbkZvbGxvd0lkZW50IiwiZWF0U3BhY2UiLCJtYXRjaGVkIiwibWF0Y2giLCJlYXQiLCJwb3AiLCJ0b2tlbkZvbGxvd1R5cGUiLCJtYXRjaGluZyIsInRva2VuQmFzZSIsImxhc3RUb2tlbiIsInRva2VuTWFjcm8iLCJwZWVrIiwic2tpcFRvRW5kIiwiY3VycmVudCIsInRlc3QiLCJibG9ja3MiLCJpbmRleE9mIiwiY3VycmVudEluZGVudCIsImxhc3RTdHlsZSIsImhhc093blByb3BlcnR5IiwidG9rZW5OZXN0IiwidG9rZW5RdW90ZSIsImRlbGltIiwic3R5bGUiLCJlbWJlZCIsIm5leHQiLCJwaHJhc2UiLCJzb2wiLCJlc2NhcGVkIiwidG9rZW5IZXJlRG9jIiwiYmVnaW4iLCJzdGFydGVkIiwibGVuZ3RoIiwibmV4dFN0eWxlIiwiY2giLCJzdGFydFN0YXRlIiwidG9rZW4iLCJpbmRlbnQiLCJ0ZXh0QWZ0ZXIiLCJyZXBsYWNlIiwiaW5kZW50VW5pdCIsImZvbGQiLCJlbGVjdHJpY0lucHV0IiwiY29uY2F0IiwibGluZUNvbW1lbnQiLCJkZWZpbmVNSU1FIiwibW9kIl0sIm1hcHBpbmdzIjoiK0hBVUcsU0FBU0EsR0FDVixhQUVBQSxFQUFXQyxXQUFXLFdBQVcsU0FBU0MsR0FDeEMsU0FBU0MsRUFBV0MsRUFBT0MsR0FDekIsT0FBTyxJQUFJQyxRQUFRRCxFQUFNLEdBQUssS0FBTyxNQUFRRCxFQUFNRyxLQUFLLEtBQU8sS0FBT0YsRUFBTSxJQUFNLFFBR3BGLFNBQVNHLEVBQU1DLEVBQVVDLEVBQVFDLEdBRS9CLE9BREFBLEVBQU1GLFNBQVNHLEtBQUtILEdBQ2JBLEVBQVNDLEVBQVFDLEdBRzFCLElBQUlFLEVBQVksK0JBQ1pDLEVBQXVCLHdDQUN2QkMsRUFBb0IsaUJBQ3BCQyxFQUFtQiw0QkFDbkJDLEVBQVMsaURBQ1RDLEVBQVEsaURBQ1JDLEVBQVdoQixFQUFXLENBQ3hCLFdBQVksUUFBUyxLQUFNLE1BQU8sUUFBUyxRQUFTLE9BQVEsUUFBUyxNQUFPLEtBQzVFLE9BQVEsUUFBUyxNQUFPLFNBQVUsT0FBUSxTQUFVLE1BQU8sTUFBTyxLQUNsRSxVQUFXLGtCQUFtQixNQUFPLFFBQVMsU0FBVSxPQUFRLEtBQU0sTUFBTyxZQUM3RSxVQUFXLFlBQWEsU0FBVSxTQUFVLFVBQVcsU0FBVSxTQUFVLFNBQzNFLFFBQVMsT0FBUSxPQUFRLFNBQVUsZ0JBQWlCLFFBQVMsU0FBVSxRQUFTLE9BQVEsUUFBUyxPQUNqRyxRQUFTLFVBQVcsZUFBZ0IsV0FBWSxhQUU5Q2lCLEVBQVlqQixFQUFXLENBQUMsT0FBUSxRQUFTLE1BQU8sU0FNaERrQixFQUFpQmxCLEVBTEssQ0FDeEIsTUFBTyxNQUFPLFFBQ2QsUUFBUyxTQUFVLFNBQVUsTUFBTyxPQUFRLFFBQzVDLEtBQU0sUUFJSm1CLEVBQTJCbkIsRUFESyxDQUFDLEtBQU0sU0FBVSxPQUFRLFFBQVMsUUFBUyxRQUFTLFNBRXBGb0IsRUFBc0IsQ0FBQyxNQUFPLE9BQVEsUUFBUyxTQUFVLFVBQ3pEQyxFQUFp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QUlTLEdBQU16RCxFQUVSLE9BREFNLEVBQU1GLFNBQVN3QixNQUNSa0IsRUFHVEssRUFBVUosR0FBZSxNQUFOVSxFQU92QixPQUFPWCxHQTJDWCxNQUFPLENBQ0xZLFdBQVksV0FDVixNQUFPLENBQ0x0RCxTQUFVLENBQUMyQixHQUNYUyxjQUFlLEVBQ2ZSLFVBQVcsS0FDWFMsVUFBVyxLQUNYSCxPQUFRLEtBSVpxQixNQUFPLFNBQVV0RCxFQUFRQyxHQUN2QixJQUFJd0MsRUFBUXhDLEVBQU1GLFNBQVNFLEVBQU1GLFNBQVNtRCxPQUFTLEdBQUdsRCxFQUFRQyxHQUMxRHFELEVBQVF0RCxFQUFPK0IsVUFPbkIsT0FMSVUsR0FBa0IsV0FBVEEsSUFDWHhDLEVBQU0wQixVQUFZMkIsRUFDbEJyRCxFQUFNbUMsVUFBWUssR0FHYkEsR0FHVGMsT0FBUSxTQUFVdEQsRUFBT3VELEdBR3ZCLE9BRkFBLEVBQVlBLEVBQVVDLFFBQVEsbUNBQW9DLElBRTlEM0MsRUFBZWtCLEtBQUt3QixJQUFjeEMsRUFBZ0JnQixLQUFLd0IsR0FDbERoRSxFQUFPa0UsWUFBY3pELEVBQU1rQyxjQUFnQixHQUc3QzNDLEVBQU9rRSxXQUFhekQsRUFBTWtDLGVBR25Dd0IsS0FBTSxTQUNOQyxjQUFlbkUsRUFBV3NCLEVBQXFCOEMsT0FBT2hELElBQXNCLEdBQzVFaUQsWUFBYSxRQUlqQnhFLEVBQVd5RSxXQUFXLGlCQUFrQixXQTFhdENDLENBQUksRUFBUSIsImZpbGUiOiIzMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICBDb2RlTWlycm9yLmRlZmluZU1vZGUoXCJjcnlzdGFsXCIsIGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIGZ1bmN0aW9uIHdvcmRSZWdFeHAod29yZHMsIGVuZCkge1xuICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoKGVuZCA/IFwiXCIgOiBcIl5cIikgKyBcIig/OlwiICsgd29yZHMuam9pbihcInxcIikgKyBcIilcIiArIChlbmQgPyBcIiRcIiA6IFwiXFxcXGJcIikpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNoYWluKHRva2VuaXplLCBzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBzdGF0ZS50b2tlbml6ZS5wdXNoKHRva2VuaXplKTtcbiAgICAgIHJldHVybiB0b2tlbml6ZShzdHJlYW0sIHN0YXRlKTtcbiAgICB9XG5cbiAgICB2YXIgb3BlcmF0b3JzID0gL14oPzpbLSsvJXwmXl18XFwqXFwqP3xbPD5dezJ9KS87XG4gICAgdmFyIGNvbmRpdGlvbmFsT3BlcmF0b3JzID0gL14oPzpbPSFdfnw9PT18PD0+fFs8Pj0hXT0/fFt8Jl17Mn18fikvO1xuICAgIHZhciBpbmRleGluZ09wZXJhdG9ycyA9IC9eKD86XFxbXFxdWz89XT8pLztcbiAgICB2YXIgYW5vdGhlck9wZXJhdG9ycyA9IC9eKD86XFwuKD86XFwuezJ9KT98LT58Wz86XSkvO1xuICAgIHZhciBpZGVudHMgPSAvXlthLXpfXFx1MDA5Ri1cXHVGRkZGXVthLXpBLVowLTlfXFx1MDA5Ri1cXHVGRkZGXSovO1xuICAgIHZhciB0eXBlcyA9IC9eW0EtWl9cXHUwMDlGLVxcdUZGRkZdW2EtekEtWjAtOV9cXHUwMDlGLVxcdUZGRkZdKi87XG4gICAgdmFyIGtleXdvcmRzID0gd29yZFJlZ0V4cChbXG4gICAgICBcImFic3RyYWN0XCIsIFwiYWxpYXNcIiwgXCJhc1wiLCBcImFzbVwiLCBcImJlZ2luXCIsIFwiYnJlYWtcIiwgXCJjYXNlXCIsIFwiY2xhc3NcIiwgXCJkZWZcIiwgXCJkb1wiLFxuICAgICAgXCJlbHNlXCIsIFwiZWxzaWZcIiwgXCJlbmRcIiwgXCJlbnN1cmVcIiwgXCJlbnVtXCIsIFwiZXh0ZW5kXCIsIFwiZm9yXCIsIFwiZnVuXCIsIFwiaWZcIixcbiAgICAgIFwiaW5jbHVkZVwiLCBcImluc3RhbmNlX3NpemVvZlwiLCBcImxpYlwiLCBcIm1hY3JvXCIsIFwibW9kdWxlXCIsIFwibmV4dFwiLCBcIm9mXCIsIFwib3V0XCIsIFwicG9pbnRlcm9mXCIsXG4gICAgICBcInByaXZhdGVcIiwgXCJwcm90ZWN0ZWRcIiwgXCJyZXNjdWVcIiwgXCJyZXR1cm5cIiwgXCJyZXF1aXJlXCIsIFwic2VsZWN0XCIsIFwic2l6ZW9mXCIsIFwic3RydWN0XCIsXG4gICAgICBcInN1cGVyXCIsIFwidGhlblwiLCBcInR5cGVcIiwgXCJ0eXBlb2ZcIiwgXCJ1bmluaXRpYWxpemVkXCIsIFwidW5pb25cIiwgXCJ1bmxlc3NcIiwgXCJ1bnRpbFwiLCBcIndoZW5cIiwgXCJ3aGlsZVwiLCBcIndpdGhcIixcbiAgICAgIFwieWllbGRcIiwgXCJfX0RJUl9fXCIsIFwiX19FTkRfTElORV9fXCIsIFwiX19GSUxFX19cIiwgXCJfX0xJTkVfX1wiXG4gICAgXSk7XG4gICAgdmFyIGF0b21Xb3JkcyA9IHdvcmRSZWdFeHAoW1widHJ1ZVwiLCBcImZhbHNlXCIsIFwibmlsXCIsIFwic2VsZlwiXSk7XG4gICAgdmFyIGluZGVudEtleXdvcmRzQXJyYXkgPSBbXG4gICAgICBcImRlZlwiLCBcImZ1blwiLCBcIm1hY3JvXCIsXG4gICAgICBcImNsYXNzXCIsIFwibW9kdWxlXCIsIFwic3RydWN0XCIsIFwibGliXCIsIFwiZW51bVwiLCBcInVuaW9uXCIsXG4gICAgICBcImRvXCIsIFwiZm9yXCJcbiAgICBdO1xuICAgIHZhciBpbmRlbnRLZXl3b3JkcyA9IHdvcmRSZWdFeHAoaW5kZW50S2V5d29yZHNBcnJheSk7XG4gICAgdmFyIGluZGVudEV4cHJlc3Npb25LZXl3b3Jkc0FycmF5ID0gW1wiaWZcIiwgXCJ1bmxlc3NcIiwgXCJjYXNlXCIsIFwid2hpbGVcIiwgXCJ1bnRpbFwiLCBcImJlZ2luXCIsIFwidGhlblwiXTtcbiAgICB2YXIgaW5kZW50RXhwcmVzc2lvbktleXdvcmRzID0gd29yZFJlZ0V4cChpbmRlbnRFeHByZXNzaW9uS2V5d29yZHNBcnJheSk7XG4gICAgdmFyIGRlZGVudEtleXdvcmRzQXJyYXkgPSBbXCJlbmRcIiwgXCJlbHNlXCIsIFwiZWxzaWZcIiwgXCJyZXNjdWVcIiwgXCJlbnN1cmVcIl07XG4gICAgdmFyIGRlZGVudEtleXdvcmRzID0gd29yZFJlZ0V4cChkZWRlbnRLZXl3b3Jkc0FycmF5KTtcbiAgICB2YXIgZGVkZW50UHVuY3R1YWxzQXJyYXkgPSBbXCJcXFxcKVwiLCBcIlxcXFx9XCIsIFwiXFxcXF1cIl07XG4gICAgdmFyIGRlZGVudFB1bmN0dWFscyA9IG5ldyBSZWdFeHAoXCJeKD86XCIgKyBkZWRlbnRQdW5jdHVhbHNBcnJheS5qb2luKFwifFwiKSArIFwiKSRcIik7XG4gICAgdmFyIG5leHRUb2tlbml6ZXIgPSB7XG4gICAgICBcImRlZlwiOiB0b2tlbkZvbGxvd0lkZW50LCBcImZ1blwiOiB0b2tlbkZvbGxvd0lkZW50LCBcIm1hY3JvXCI6IHRva2VuTWFjcm9EZWYsXG4gICAgICBcImNsYXNzXCI6IHRva2VuRm9sbG93VHlwZSwgXCJtb2R1bGVcIjogdG9rZW5Gb2xsb3dUeXBlLCBcInN0cnVjdFwiOiB0b2tlbkZvbGxvd1R5cGUsXG4gICAgICBcImxpYlwiOiB0b2tlbkZvbGxvd1R5cGUsIFwiZW51bVwiOiB0b2tlbkZvbGxvd1R5cGUsIFwidW5pb25cIjogdG9rZW5Gb2xsb3dUeXBlXG4gICAgfTtcbiAgICB2YXIgbWF0Y2hpbmcgPSB7XCJbXCI6IFwiXVwiLCBcIntcIjogXCJ9XCIsIFwiKFwiOiBcIilcIiwgXCI8XCI6IFwiPlwifTtcblxuICAgIGZ1bmN0aW9uIHRva2VuQmFzZShzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIC8vIE1hY3Jvc1xuICAgICAgaWYgKHN0YXRlLmxhc3RUb2tlbiAhPSBcIlxcXFxcIiAmJiBzdHJlYW0ubWF0Y2goXCJ7JVwiLCBmYWxzZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoYWluKHRva2VuTWFjcm8oXCIlXCIsIFwiJVwiKSwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZS5sYXN0VG9rZW4gIT0gXCJcXFxcXCIgJiYgc3RyZWFtLm1hdGNoKFwie3tcIiwgZmFsc2UpKSB7XG4gICAgICAgIHJldHVybiBjaGFpbih0b2tlbk1hY3JvKFwie1wiLCBcIn1cIiksIHN0cmVhbSwgc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICAvLyBDb21tZW50c1xuICAgICAgaWYgKHN0cmVhbS5wZWVrKCkgPT0gXCIjXCIpIHtcbiAgICAgICAgc3RyZWFtLnNraXBUb0VuZCgpO1xuICAgICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgICB9XG5cbiAgICAgIC8vIFZhcmlhYmxlcyBhbmQga2V5d29yZHNcbiAgICAgIHZhciBtYXRjaGVkO1xuICAgICAgaWYgKHN0cmVhbS5tYXRjaChpZGVudHMpKSB7XG4gICAgICAgIHN0cmVhbS5lYXQoL1s/IV0vKTtcblxuICAgICAgICBtYXRjaGVkID0gc3RyZWFtLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHN0cmVhbS5lYXQoXCI6XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiYXRvbVwiO1xuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLmxhc3RUb2tlbiA9PSBcIi5cIikge1xuICAgICAgICAgIHJldHVybiBcInByb3BlcnR5XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5d29yZHMudGVzdChtYXRjaGVkKSkge1xuICAgICAgICAgIGlmIChpbmRlbnRLZXl3b3Jkcy50ZXN0KG1hdGNoZWQpKSB7XG4gICAgICAgICAgICBpZiAoIShtYXRjaGVkID09IFwiZnVuXCIgJiYgc3RhdGUuYmxvY2tzLmluZGV4T2YoXCJsaWJcIikgPj0gMCkgJiYgIShtYXRjaGVkID09IFwiZGVmXCIgJiYgc3RhdGUubGFzdFRva2VuID09IFwiYWJzdHJhY3RcIikpIHtcbiAgICAgICAgICAgICAgc3RhdGUuYmxvY2tzLnB1c2gobWF0Y2hlZCk7XG4gICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRJbmRlbnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKChzdGF0ZS5sYXN0U3R5bGUgPT0gXCJvcGVyYXRvclwiIHx8ICFzdGF0ZS5sYXN0U3R5bGUpICYmIGluZGVudEV4cHJlc3Npb25LZXl3b3Jkcy50ZXN0KG1hdGNoZWQpKSB7XG4gICAgICAgICAgICBzdGF0ZS5ibG9ja3MucHVzaChtYXRjaGVkKTtcbiAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRJbmRlbnQgKz0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZWQgPT0gXCJlbmRcIikge1xuICAgICAgICAgICAgc3RhdGUuYmxvY2tzLnBvcCgpO1xuICAgICAgICAgICAgc3RhdGUuY3VycmVudEluZGVudCAtPSAxO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChuZXh0VG9rZW5pemVyLmhhc093blByb3BlcnR5KG1hdGNoZWQpKSB7XG4gICAgICAgICAgICBzdGF0ZS50b2tlbml6ZS5wdXNoKG5leHRUb2tlbml6ZXJbbWF0Y2hlZF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBcImtleXdvcmRcIjtcbiAgICAgICAgfSBlbHNlIGlmIChhdG9tV29yZHMudGVzdChtYXRjaGVkKSkge1xuICAgICAgICAgIHJldHVybiBcImF0b21cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcInZhcmlhYmxlXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIENsYXNzIHZhcmlhYmxlcyBhbmQgaW5zdGFuY2UgdmFyaWFibGVzXG4gICAgICAvLyBvciBhdHRyaWJ1dGVzXG4gICAgICBpZiAoc3RyZWFtLmVhdChcIkBcIikpIHtcbiAgICAgICAgaWYgKHN0cmVhbS5wZWVrKCkgPT0gXCJbXCIpIHtcbiAgICAgICAgICByZXR1cm4gY2hhaW4odG9rZW5OZXN0KFwiW1wiLCBcIl1cIiwgXCJtZXRhXCIpLCBzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cmVhbS5lYXQoXCJAXCIpO1xuICAgICAgICBzdHJlYW0ubWF0Y2goaWRlbnRzKSB8fCBzdHJlYW0ubWF0Y2godHlwZXMpO1xuICAgICAgICByZXR1cm4gXCJ2YXJpYWJsZS0yXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIENvbnN0YW50cyBhbmQgdHlwZXNcbiAgICAgIGlmIChzdHJlYW0ubWF0Y2godHlwZXMpKSB7XG4gICAgICAgIHJldHVybiBcInRhZ1wiO1xuICAgICAgfVxuXG4gICAgICAvLyBTeW1ib2xzIG9yICc6JyBvcGVyYXRvclxuICAgICAgaWYgKHN0cmVhbS5lYXQoXCI6XCIpKSB7XG4gICAgICAgIGlmIChzdHJlYW0uZWF0KFwiXFxcIlwiKSkge1xuICAgICAgICAgIHJldHVybiBjaGFpbih0b2tlblF1b3RlKFwiXFxcIlwiLCBcImF0b21cIiwgZmFsc2UpLCBzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0ubWF0Y2goaWRlbnRzKSB8fCBzdHJlYW0ubWF0Y2godHlwZXMpIHx8XG4gICAgICAgICAgICAgICAgICAgc3RyZWFtLm1hdGNoKG9wZXJhdG9ycykgfHwgc3RyZWFtLm1hdGNoKGNvbmRpdGlvbmFsT3BlcmF0b3JzKSB8fCBzdHJlYW0ubWF0Y2goaW5kZXhpbmdPcGVyYXRvcnMpKSB7XG4gICAgICAgICAgcmV0dXJuIFwiYXRvbVwiO1xuICAgICAgICB9XG4gICAgICAgIHN0cmVhbS5lYXQoXCI6XCIpO1xuICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgfVxuXG4gICAgICAvLyBTdHJpbmdzXG4gICAgICBpZiAoc3RyZWFtLmVhdChcIlxcXCJcIikpIHtcbiAgICAgICAgcmV0dXJuIGNoYWluKHRva2VuUXVvdGUoXCJcXFwiXCIsIFwic3RyaW5nXCIsIHRydWUpLCBzdHJlYW0sIHN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RyaW5ncyBvciByZWdleHBzIG9yIG1hY3JvIHZhcmlhYmxlcyBvciAnJScgb3BlcmF0b3JcbiAgICAgIGlmIChzdHJlYW0ucGVlaygpID09IFwiJVwiKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IFwic3RyaW5nXCI7XG4gICAgICAgIHZhciBlbWJlZCA9IHRydWU7XG4gICAgICAgIHZhciBkZWxpbTtcblxuICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKFwiJXJcIikpIHtcbiAgICAgICAgICAvLyBSZWdleHBzXG4gICAgICAgICAgc3R5bGUgPSBcInN0cmluZy0yXCI7XG4gICAgICAgICAgZGVsaW0gPSBzdHJlYW0ubmV4dCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5tYXRjaChcIiV3XCIpKSB7XG4gICAgICAgICAgZW1iZWQgPSBmYWxzZTtcbiAgICAgICAgICBkZWxpbSA9IHN0cmVhbS5uZXh0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZWFtLm1hdGNoKFwiJXFcIikpIHtcbiAgICAgICAgICBlbWJlZCA9IGZhbHNlO1xuICAgICAgICAgIGRlbGltID0gc3RyZWFtLm5leHQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZihkZWxpbSA9IHN0cmVhbS5tYXRjaCgvXiUoW15cXHdcXHM9XSkvKSkge1xuICAgICAgICAgICAgZGVsaW0gPSBkZWxpbVsxXTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHN0cmVhbS5tYXRjaCgvXiVbYS16QS1aMC05X1xcdTAwOUYtXFx1RkZGRl0qLykpIHtcbiAgICAgICAgICAgIC8vIE1hY3JvIHZhcmlhYmxlc1xuICAgICAgICAgICAgcmV0dXJuIFwibWV0YVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyAnJScgb3BlcmF0b3JcbiAgICAgICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1hdGNoaW5nLmhhc093blByb3BlcnR5KGRlbGltKSkge1xuICAgICAgICAgIGRlbGltID0gbWF0Y2hpbmdbZGVsaW1dO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFpbih0b2tlblF1b3RlKGRlbGltLCBzdHlsZSwgZW1iZWQpLCBzdHJlYW0sIHN0YXRlKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGVyZSBEb2NzXG4gICAgICBpZiAobWF0Y2hlZCA9IHN0cmVhbS5tYXRjaCgvXjw8LSgnPykoW0EtWl1cXHcqKVxcMS8pKSB7XG4gICAgICAgIHJldHVybiBjaGFpbih0b2tlbkhlcmVEb2MobWF0Y2hlZFsyXSwgIW1hdGNoZWRbMV0pLCBzdHJlYW0sIHN0YXRlKVxuICAgICAgfVxuXG4gICAgICAvLyBDaGFyYWN0ZXJzXG4gICAgICBpZiAoc3RyZWFtLmVhdChcIidcIikpIHtcbiAgICAgICAgc3RyZWFtLm1hdGNoKC9eKD86W14nXXxcXFxcKD86W2JlZm5ydHYwJ1wiXXxbMC03XXszfXx1KD86WzAtOWEtZkEtRl17NH18XFx7WzAtOWEtZkEtRl17MSw2fVxcfSkpKS8pO1xuICAgICAgICBzdHJlYW0uZWF0KFwiJ1wiKTtcbiAgICAgICAgcmV0dXJuIFwiYXRvbVwiO1xuICAgICAgfVxuXG4gICAgICAvLyBOdW1iZXJzXG4gICAgICBpZiAoc3RyZWFtLmVhdChcIjBcIikpIHtcbiAgICAgICAgaWYgKHN0cmVhbS5lYXQoXCJ4XCIpKSB7XG4gICAgICAgICAgc3RyZWFtLm1hdGNoKC9eWzAtOWEtZkEtRl0rLyk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyZWFtLmVhdChcIm9cIikpIHtcbiAgICAgICAgICBzdHJlYW0ubWF0Y2goL15bMC03XSsvKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHJlYW0uZWF0KFwiYlwiKSkge1xuICAgICAgICAgIHN0cmVhbS5tYXRjaCgvXlswMV0rLyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJlYW0uZWF0KC9eXFxkLykpIHtcbiAgICAgICAgc3RyZWFtLm1hdGNoKC9eXFxkKig/OlxcLlxcZCspPyg/OltlRV1bKy1dP1xcZCspPy8pO1xuICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgIH1cblxuICAgICAgLy8gT3BlcmF0b3JzXG4gICAgICBpZiAoc3RyZWFtLm1hdGNoKG9wZXJhdG9ycykpIHtcbiAgICAgICAgc3RyZWFtLmVhdChcIj1cIik7IC8vIE9wZXJhdG9ycyBjYW4gZm9sbG93IGFzc2lnbiBzeW1ib2wuXG4gICAgICAgIHJldHVybiBcIm9wZXJhdG9yXCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJlYW0ubWF0Y2goY29uZGl0aW9uYWxPcGVyYXRvcnMpIHx8IHN0cmVhbS5tYXRjaChhbm90aGVyT3BlcmF0b3JzKSkge1xuICAgICAgICByZXR1cm4gXCJvcGVyYXRvclwiO1xuICAgICAgfVxuXG4gICAgICAvLyBQYXJlbnMgYW5kIGJyYWNlc1xuICAgICAgaWYgKG1hdGNoZWQgPSBzdHJlYW0ubWF0Y2goL1soe1tdLywgZmFsc2UpKSB7XG4gICAgICAgIG1hdGNoZWQgPSBtYXRjaGVkWzBdO1xuICAgICAgICByZXR1cm4gY2hhaW4odG9rZW5OZXN0KG1hdGNoZWQsIG1hdGNoaW5nW21hdGNoZWRdLCBudWxsKSwgc3RyZWFtLCBzdGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVzY2FwZXNcbiAgICAgIGlmIChzdHJlYW0uZWF0KFwiXFxcXFwiKSkge1xuICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICByZXR1cm4gXCJtZXRhXCI7XG4gICAgICB9XG5cbiAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2tlbk5lc3QoYmVnaW4sIGVuZCwgc3R5bGUsIHN0YXJ0ZWQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgc3RyZWFtLm1hdGNoKGJlZ2luKSkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplW3N0YXRlLnRva2VuaXplLmxlbmd0aCAtIDFdID0gdG9rZW5OZXN0KGJlZ2luLCBlbmQsIHN0eWxlLCB0cnVlKTtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50SW5kZW50ICs9IDE7XG4gICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHRTdHlsZSA9IHRva2VuQmFzZShzdHJlYW0sIHN0YXRlKTtcbiAgICAgICAgaWYgKHN0cmVhbS5jdXJyZW50KCkgPT09IGVuZCkge1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplLnBvcCgpO1xuICAgICAgICAgIHN0YXRlLmN1cnJlbnRJbmRlbnQgLT0gMTtcbiAgICAgICAgICBuZXh0U3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXh0U3R5bGU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuTWFjcm8oYmVnaW4sIGVuZCwgc3RhcnRlZCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIGlmICghc3RhcnRlZCAmJiBzdHJlYW0ubWF0Y2goXCJ7XCIgKyBiZWdpbikpIHtcbiAgICAgICAgICBzdGF0ZS5jdXJyZW50SW5kZW50ICs9IDE7XG4gICAgICAgICAgc3RhdGUudG9rZW5pemVbc3RhdGUudG9rZW5pemUubGVuZ3RoIC0gMV0gPSB0b2tlbk1hY3JvKGJlZ2luLCBlbmQsIHRydWUpO1xuICAgICAgICAgIHJldHVybiBcIm1ldGFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdHJlYW0ubWF0Y2goZW5kICsgXCJ9XCIpKSB7XG4gICAgICAgICAgc3RhdGUuY3VycmVudEluZGVudCAtPSAxO1xuICAgICAgICAgIHN0YXRlLnRva2VuaXplLnBvcCgpO1xuICAgICAgICAgIHJldHVybiBcIm1ldGFcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b2tlbkJhc2Uoc3RyZWFtLCBzdGF0ZSk7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuTWFjcm9EZWYoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgaWYgKHN0cmVhbS5lYXRTcGFjZSgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgbWF0Y2hlZDtcbiAgICAgIGlmIChtYXRjaGVkID0gc3RyZWFtLm1hdGNoKGlkZW50cykpIHtcbiAgICAgICAgaWYgKG1hdGNoZWQgPT0gXCJkZWZcIikge1xuICAgICAgICAgIHJldHVybiBcImtleXdvcmRcIjtcbiAgICAgICAgfVxuICAgICAgICBzdHJlYW0uZWF0KC9bPyFdLyk7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnRva2VuaXplLnBvcCgpO1xuICAgICAgcmV0dXJuIFwiZGVmXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdG9rZW5Gb2xsb3dJZGVudChzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHJlYW0ubWF0Y2goaWRlbnRzKSkge1xuICAgICAgICBzdHJlYW0uZWF0KC9bIT9dLyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJlYW0ubWF0Y2gob3BlcmF0b3JzKSB8fCBzdHJlYW0ubWF0Y2goY29uZGl0aW9uYWxPcGVyYXRvcnMpIHx8IHN0cmVhbS5tYXRjaChpbmRleGluZ09wZXJhdG9ycyk7XG4gICAgICB9XG4gICAgICBzdGF0ZS50b2tlbml6ZS5wb3AoKTtcbiAgICAgIHJldHVybiBcImRlZlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuRm9sbG93VHlwZShzdHJlYW0sIHN0YXRlKSB7XG4gICAgICBpZiAoc3RyZWFtLmVhdFNwYWNlKCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHN0cmVhbS5tYXRjaCh0eXBlcyk7XG4gICAgICBzdGF0ZS50b2tlbml6ZS5wb3AoKTtcbiAgICAgIHJldHVybiBcImRlZlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRva2VuUXVvdGUoZW5kLCBzdHlsZSwgZW1iZWQpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xuXG4gICAgICAgIHdoaWxlIChzdHJlYW0ucGVlaygpKSB7XG4gICAgICAgICAgaWYgKCFlc2NhcGVkKSB7XG4gICAgICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKFwieyVcIiwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnRva2VuaXplLnB1c2godG9rZW5NYWNybyhcIiVcIiwgXCIlXCIpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKFwie3tcIiwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnRva2VuaXplLnB1c2godG9rZW5NYWNybyhcIntcIiwgXCJ9XCIpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZW1iZWQgJiYgc3RyZWFtLm1hdGNoKFwiI3tcIiwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnRva2VuaXplLnB1c2godG9rZW5OZXN0KFwiI3tcIiwgXCJ9XCIsIFwibWV0YVwiKSk7XG4gICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoID0gc3RyZWFtLm5leHQoKTtcblxuICAgICAgICAgICAgaWYgKGNoID09IGVuZCkge1xuICAgICAgICAgICAgICBzdGF0ZS50b2tlbml6ZS5wb3AoKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlc2NhcGVkID0gZW1iZWQgJiYgY2ggPT0gXCJcXFxcXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0cmVhbS5uZXh0KCk7XG4gICAgICAgICAgICBlc2NhcGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0b2tlbkhlcmVEb2MocGhyYXNlLCBlbWJlZCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzdHJlYW0sIHN0YXRlKSB7XG4gICAgICAgIGlmIChzdHJlYW0uc29sKCkpIHtcbiAgICAgICAgICBzdHJlYW0uZWF0U3BhY2UoKVxuICAgICAgICAgIGlmIChzdHJlYW0ubWF0Y2gocGhyYXNlKSkge1xuICAgICAgICAgICAgc3RhdGUudG9rZW5pemUucG9wKCk7XG4gICAgICAgICAgICByZXR1cm4gXCJzdHJpbmdcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoc3RyZWFtLnBlZWsoKSkge1xuICAgICAgICAgIGlmICghZXNjYXBlZCkge1xuICAgICAgICAgICAgaWYgKHN0cmVhbS5tYXRjaChcInslXCIsIGZhbHNlKSkge1xuICAgICAgICAgICAgICBzdGF0ZS50b2tlbml6ZS5wdXNoKHRva2VuTWFjcm8oXCIlXCIsIFwiJVwiKSk7XG4gICAgICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoc3RyZWFtLm1hdGNoKFwie3tcIiwgZmFsc2UpKSB7XG4gICAgICAgICAgICAgIHN0YXRlLnRva2VuaXplLnB1c2godG9rZW5NYWNybyhcIntcIiwgXCJ9XCIpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbWJlZCAmJiBzdHJlYW0ubWF0Y2goXCIje1wiLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgc3RhdGUudG9rZW5pemUucHVzaCh0b2tlbk5lc3QoXCIje1wiLCBcIn1cIiwgXCJtZXRhXCIpKTtcbiAgICAgICAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGVzY2FwZWQgPSBlbWJlZCAmJiBzdHJlYW0ubmV4dCgpID09IFwiXFxcXFwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdHJlYW0ubmV4dCgpO1xuICAgICAgICAgICAgZXNjYXBlZCA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydFN0YXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdG9rZW5pemU6IFt0b2tlbkJhc2VdLFxuICAgICAgICAgIGN1cnJlbnRJbmRlbnQ6IDAsXG4gICAgICAgICAgbGFzdFRva2VuOiBudWxsLFxuICAgICAgICAgIGxhc3RTdHlsZTogbnVsbCxcbiAgICAgICAgICBibG9ja3M6IFtdXG4gICAgICAgIH07XG4gICAgICB9LFxuXG4gICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgdmFyIHN0eWxlID0gc3RhdGUudG9rZW5pemVbc3RhdGUudG9rZW5pemUubGVuZ3RoIC0gMV0oc3RyZWFtLCBzdGF0ZSk7XG4gICAgICAgIHZhciB0b2tlbiA9IHN0cmVhbS5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHN0eWxlICYmIHN0eWxlICE9IFwiY29tbWVudFwiKSB7XG4gICAgICAgICAgc3RhdGUubGFzdFRva2VuID0gdG9rZW47XG4gICAgICAgICAgc3RhdGUubGFzdFN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9LFxuXG4gICAgICBpbmRlbnQ6IGZ1bmN0aW9uIChzdGF0ZSwgdGV4dEFmdGVyKSB7XG4gICAgICAgIHRleHRBZnRlciA9IHRleHRBZnRlci5yZXBsYWNlKC9eXFxzKig/OlxceyUpP1xccyp8XFxzKig/OiVcXH0pP1xccyokL2csIFwiXCIpO1xuXG4gICAgICAgIGlmIChkZWRlbnRLZXl3b3Jkcy50ZXN0KHRleHRBZnRlcikgfHwgZGVkZW50UHVuY3R1YWxzLnRlc3QodGV4dEFmdGVyKSkge1xuICAgICAgICAgIHJldHVybiBjb25maWcuaW5kZW50VW5pdCAqIChzdGF0ZS5jdXJyZW50SW5kZW50IC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uZmlnLmluZGVudFVuaXQgKiBzdGF0ZS5jdXJyZW50SW5kZW50O1xuICAgICAgfSxcblxuICAgICAgZm9sZDogXCJpbmRlbnRcIixcbiAgICAgIGVsZWN0cmljSW5wdXQ6IHdvcmRSZWdFeHAoZGVkZW50UHVuY3R1YWxzQXJyYXkuY29uY2F0KGRlZGVudEtleXdvcmRzQXJyYXkpLCB0cnVlKSxcbiAgICAgIGxpbmVDb21tZW50OiAnIydcbiAgICB9O1xuICB9KTtcblxuICBDb2RlTWlycm9yLmRlZmluZU1JTUUoXCJ0ZXh0L3gtY3J5c3RhbFwiLCBcImNyeXN0YWxcIik7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=