(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{"./node_modules/codemirror/mode/webidl/webidl.js":function(e,t,r){!function(e){"use strict";function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var r=["Clamp","Constructor","EnforceRange","Exposed","ImplicitThis","Global","PrimaryGlobal","LegacyArrayClass","LegacyUnenumerableNamedProperties","LenientThis","NamedConstructor","NewObject","NoInterfaceObject","OverrideBuiltins","PutForwards","Replaceable","SameObject","TreatNonObjectAsNull","TreatNullAs","EmptyString","Unforgeable","Unscopeable"],n=t(r),a=["unsigned","short","long","unrestricted","float","double","boolean","byte","octet","Promise","ArrayBuffer","DataView","Int8Array","Int16Array","Int32Array","Uint8Array","Uint16Array","Uint32Array","Uint8ClampedArray","Float32Array","Float64Array","ByteString","DOMString","USVString","sequence","object","RegExp","Error","DOMException","FrozenArray","any","void"],i=t(a),o=["attribute","callback","const","deleter","dictionary","enum","getter","implements","inherit","interface","iterable","legacycaller","maplike","partial","required","serializer","setlike","setter","static","stringifier","typedef","optional","readonly","or"],c=t(o),l=["true","false","Infinity","NaN","null"],m=t(l);e.registerHelper("hintWords","webidl",r.concat(a).concat(o).concat(l));var s=t(["callback","dictionary","enum","interface"]),u=t(["typedef"]),d=/^[:<=>?]/,f=/^-?([1-9][0-9]*|0[Xx][0-9A-Fa-f]+|0[0-7]*)/,b=/^-?(([0-9]+\.[0-9]*|[0-9]*\.[0-9]+)([Ee][+-]?[0-9]+)?|[0-9]+[Ee][+-]?[0-9]+)/,p=/^_?[A-Za-z][0-9A-Z_a-z-]*/,y=/^_?[A-Za-z][0-9A-Z_a-z-]*(?=\s*;)/,h=/^"[^"]*"/,A=/^\/\*.*?\*\//,w=/^\/\*.*/,g=/^.*?\*\//;e.defineMode("webidl",(function(){return{startState:function(){return{inComment:!1,lastToken:"",startDef:!1,endDef:!1}},token:function(e,t){var r=function(e,t){if(e.eatSpace())return null;if(t.inComment)return e.match(g)?(t.inComment=!1,"comment"):(e.skipToEnd(),"comment");if(e.match("//"))return e.skipToEnd(),"comment";if(e.match(A))return"comment";if(e.match(w))return t.inComment=!0,"comment";if(e.match(/^-?[0-9\.]/,!1)&&(e.match(f)||e.match(b)))return"number";if(e.match(h))return"string";if(t.startDef&&e.match(p))return"def";if(t.endDef&&e.match(y))return t.endDef=!1,"def";if(e.match(c))return"keyword";if(e.match(i)){var r=t.lastToken,a=(e.match(/^\s*(.+?)\b/,!1)||[])[1];return":"===r||"implements"===r||"implements"===a||"="===a?"builtin":"variable-3"}return e.match(n)?"builtin":e.match(m)?"atom":e.match(p)?"variable":e.match(d)?"operator":(e.next(),null)}(e,t);if(r){var a=e.current();t.lastToken=a,"keyword"===r?(t.startDef=s.test(a),t.endDef=t.endDef||u.test(a)):t.startDef=!1}return r}}})),e.defineMIME("text/x-webidl","webidl")}(r("./node_modules/codemirror/lib/codemirror.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL3dlYmlkbC93ZWJpZGwuanMiXSwibmFtZXMiOlsiQ29kZU1pcnJvciIsIndvcmRSZWdleHAiLCJ3b3JkcyIsIlJlZ0V4cCIsImpvaW4iLCJidWlsdGluQXJyYXkiLCJidWlsdGlucyIsInR5cGVBcnJheSIsInR5cGVzIiwia2V5d29yZEFycmF5Iiwia2V5d29yZHMiLCJhdG9tQXJyYXkiLCJhdG9tcyIsInJlZ2lzdGVySGVscGVyIiwiY29uY2F0Iiwic3RhcnREZWZzIiwiZW5kRGVmcyIsInNpbmdsZU9wZXJhdG9ycyIsImludGVnZXJzIiwiZmxvYXRzIiwiaWRlbnRpZmllcnMiLCJpZGVudGlmaWVyc0VuZCIsInN0cmluZ3MiLCJtdWx0aWxpbmVDb21tZW50cyIsIm11bHRpbGluZUNvbW1lbnRzU3RhcnQiLCJtdWx0aWxpbmVDb21tZW50c0VuZCIsImRlZmluZU1vZGUiLCJzdGFydFN0YXRlIiwiaW5Db21tZW50IiwibGFzdFRva2VuIiwic3RhcnREZWYiLCJlbmREZWYiLCJ0b2tlbiIsInN0cmVhbSIsInN0YXRlIiwic3R5bGUiLCJlYXRTcGFjZSIsIm1hdGNoIiwic2tpcFRvRW5kIiwibmV4dFRva2VuIiwibmV4dCIsInJlYWRUb2tlbiIsImN1ciIsImN1cnJlbnQiLCJ0ZXN0IiwiZGVmaW5lTUlNRSIsIm1vZCJdLCJtYXBwaW5ncyI6IjhIQVVHLFNBQVNBLEdBQ1osYUFFQSxTQUFTQyxFQUFXQyxHQUNsQixPQUFPLElBQUlDLE9BQU8sTUFBUUQsRUFBTUUsS0FBSyxPQUFTLFNBR2hELElBQUlDLEVBQWUsQ0FDakIsUUFDQSxjQUNBLGVBQ0EsVUFDQSxlQUNBLFNBQVUsZ0JBQ1YsbUJBQ0Esb0NBQ0EsY0FDQSxtQkFDQSxZQUNBLG9CQUNBLG1CQUNBLGNBQ0EsY0FDQSxhQUNBLHVCQUNBLGNBQ0UsY0FDRixjQUNBLGVBRUVDLEVBQVdMLEVBQVdJLEdBRXRCRSxFQUFZLENBQ2Qs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TG5DQyxDQUFJLEVBQVEiLCJmaWxlIjoiMTEzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENvZGVNaXJyb3IsIGNvcHlyaWdodCAoYykgYnkgTWFyaWpuIEhhdmVyYmVrZSBhbmQgb3RoZXJzXG4vLyBEaXN0cmlidXRlZCB1bmRlciBhbiBNSVQgbGljZW5zZTogaHR0cHM6Ly9jb2RlbWlycm9yLm5ldC9MSUNFTlNFXG5cbihmdW5jdGlvbihtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIikpO1xuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSAvLyBBTURcbiAgICBkZWZpbmUoW1wiLi4vLi4vbGliL2NvZGVtaXJyb3JcIl0sIG1vZCk7XG4gIGVsc2UgLy8gUGxhaW4gYnJvd3NlciBlbnZcbiAgICBtb2QoQ29kZU1pcnJvcik7XG59KShmdW5jdGlvbihDb2RlTWlycm9yKSB7XG5cInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gd29yZFJlZ2V4cCh3b3Jkcykge1xuICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oKFwiICsgd29yZHMuam9pbihcIil8KFwiKSArIFwiKSlcXFxcYlwiKTtcbn07XG5cbnZhciBidWlsdGluQXJyYXkgPSBbXG4gIFwiQ2xhbXBcIixcbiAgXCJDb25zdHJ1Y3RvclwiLFxuICBcIkVuZm9yY2VSYW5nZVwiLFxuICBcIkV4cG9zZWRcIixcbiAgXCJJbXBsaWNpdFRoaXNcIixcbiAgXCJHbG9iYWxcIiwgXCJQcmltYXJ5R2xvYmFsXCIsXG4gIFwiTGVnYWN5QXJyYXlDbGFzc1wiLFxuICBcIkxlZ2FjeVVuZW51bWVyYWJsZU5hbWVkUHJvcGVydGllc1wiLFxuICBcIkxlbmllbnRUaGlzXCIsXG4gIFwiTmFtZWRDb25zdHJ1Y3RvclwiLFxuICBcIk5ld09iamVjdFwiLFxuICBcIk5vSW50ZXJmYWNlT2JqZWN0XCIsXG4gIFwiT3ZlcnJpZGVCdWlsdGluc1wiLFxuICBcIlB1dEZvcndhcmRzXCIsXG4gIFwiUmVwbGFjZWFibGVcIixcbiAgXCJTYW1lT2JqZWN0XCIsXG4gIFwiVHJlYXROb25PYmplY3RBc051bGxcIixcbiAgXCJUcmVhdE51bGxBc1wiLFxuICAgIFwiRW1wdHlTdHJpbmdcIixcbiAgXCJVbmZvcmdlYWJsZVwiLFxuICBcIlVuc2NvcGVhYmxlXCJcbl07XG52YXIgYnVpbHRpbnMgPSB3b3JkUmVnZXhwKGJ1aWx0aW5BcnJheSk7XG5cbnZhciB0eXBlQXJyYXkgPSBbXG4gIFwidW5zaWduZWRcIiwgXCJzaG9ydFwiLCBcImxvbmdcIiwgICAgICAgICAgICAgICAgICAvLyBVbnNpZ25lZEludGVnZXJUeXBlXG4gIFwidW5yZXN0cmljdGVkXCIsIFwiZmxvYXRcIiwgXCJkb3VibGVcIiwgICAgICAgICAgICAvLyBVbnJlc3RyaWN0ZWRGbG9hdFR5cGVcbiAgXCJib29sZWFuXCIsIFwiYnl0ZVwiLCBcIm9jdGV0XCIsICAgICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgUHJpbWl0aXZlVHlwZVxuICBcIlByb21pc2VcIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcm9taXNlVHlwZVxuICBcIkFycmF5QnVmZmVyXCIsIFwiRGF0YVZpZXdcIiwgXCJJbnQ4QXJyYXlcIiwgXCJJbnQxNkFycmF5XCIsIFwiSW50MzJBcnJheVwiLFxuICBcIlVpbnQ4QXJyYXlcIiwgXCJVaW50MTZBcnJheVwiLCBcIlVpbnQzMkFycmF5XCIsIFwiVWludDhDbGFtcGVkQXJyYXlcIixcbiAgXCJGbG9hdDMyQXJyYXlcIiwgXCJGbG9hdDY0QXJyYXlcIiwgICAgICAgICAgICAgICAvLyBCdWZmZXJSZWxhdGVkVHlwZVxuICBcIkJ5dGVTdHJpbmdcIiwgXCJET01TdHJpbmdcIiwgXCJVU1ZTdHJpbmdcIiwgXCJzZXF1ZW5jZVwiLCBcIm9iamVjdFwiLCBcIlJlZ0V4cFwiLFxuICBcIkVycm9yXCIsIFwiRE9NRXhjZXB0aW9uXCIsIFwiRnJvemVuQXJyYXlcIiwgICAgICAgLy8gUmVzdCBvZiBOb25BbnlUeXBlXG4gIFwiYW55XCIsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgU2luZ2xlVHlwZVxuICBcInZvaWRcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXN0IG9mIFJldHVyblR5cGVcbl07XG52YXIgdHlwZXMgPSB3b3JkUmVnZXhwKHR5cGVBcnJheSk7XG5cbnZhciBrZXl3b3JkQXJyYXkgPSBbXG4gIFwiYXR0cmlidXRlXCIsIFwiY2FsbGJhY2tcIiwgXCJjb25zdFwiLCBcImRlbGV0ZXJcIiwgXCJkaWN0aW9uYXJ5XCIsIFwiZW51bVwiLCBcImdldHRlclwiLFxuICBcImltcGxlbWVudHNcIiwgXCJpbmhlcml0XCIsIFwiaW50ZXJmYWNlXCIsIFwiaXRlcmFibGVcIiwgXCJsZWdhY3ljYWxsZXJcIiwgXCJtYXBsaWtlXCIsXG4gIFwicGFydGlhbFwiLCBcInJlcXVpcmVkXCIsIFwic2VyaWFsaXplclwiLCBcInNldGxpa2VcIiwgXCJzZXR0ZXJcIiwgXCJzdGF0aWNcIixcbiAgXCJzdHJpbmdpZmllclwiLCBcInR5cGVkZWZcIiwgICAgICAgICAgICAgICAgICAgICAvLyBBcmd1bWVudE5hbWVLZXl3b3JkIGV4Y2VwdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gXCJ1bnJlc3RyaWN0ZWRcIlxuICBcIm9wdGlvbmFsXCIsIFwicmVhZG9ubHlcIiwgXCJvclwiXG5dO1xudmFyIGtleXdvcmRzID0gd29yZFJlZ2V4cChrZXl3b3JkQXJyYXkpO1xuXG52YXIgYXRvbUFycmF5ID0gW1xuICBcInRydWVcIiwgXCJmYWxzZVwiLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJvb2xlYW5MaXRlcmFsXG4gIFwiSW5maW5pdHlcIiwgXCJOYU5cIiwgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmxvYXRMaXRlcmFsXG4gIFwibnVsbFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3Qgb2YgQ29uc3RWYWx1ZVxuXTtcbnZhciBhdG9tcyA9IHdvcmRSZWdleHAoYXRvbUFycmF5KTtcblxuQ29kZU1pcnJvci5yZWdpc3RlckhlbHBlcihcImhpbnRXb3Jkc1wiLCBcIndlYmlkbFwiLFxuICAgIGJ1aWx0aW5BcnJheS5jb25jYXQodHlwZUFycmF5KS5jb25jYXQoa2V5d29yZEFycmF5KS5jb25jYXQoYXRvbUFycmF5KSk7XG5cbnZhciBzdGFydERlZkFycmF5ID0gW1wiY2FsbGJhY2tcIiwgXCJkaWN0aW9uYXJ5XCIsIFwiZW51bVwiLCBcImludGVyZmFjZVwiXTtcbnZhciBzdGFydERlZnMgPSB3b3JkUmVnZXhwKHN0YXJ0RGVmQXJyYXkpO1xuXG52YXIgZW5kRGVmQXJyYXkgPSBbXCJ0eXBlZGVmXCJdO1xudmFyIGVuZERlZnMgPSB3b3JkUmVnZXhwKGVuZERlZkFycmF5KTtcblxudmFyIHNpbmdsZU9wZXJhdG9ycyA9IC9eWzo8PT4/XS87XG52YXIgaW50ZWdlcnMgPSAvXi0/KFsxLTldWzAtOV0qfDBbWHhdWzAtOUEtRmEtZl0rfDBbMC03XSopLztcbnZhciBmbG9hdHMgPSAvXi0/KChbMC05XStcXC5bMC05XSp8WzAtOV0qXFwuWzAtOV0rKShbRWVdWystXT9bMC05XSspP3xbMC05XStbRWVdWystXT9bMC05XSspLztcbnZhciBpZGVudGlmaWVycyA9IC9eXz9bQS1aYS16XVswLTlBLVpfYS16LV0qLztcbnZhciBpZGVudGlmaWVyc0VuZCA9IC9eXz9bQS1aYS16XVswLTlBLVpfYS16LV0qKD89XFxzKjspLztcbnZhciBzdHJpbmdzID0gL15cIlteXCJdKlwiLztcbnZhciBtdWx0aWxpbmVDb21tZW50cyA9IC9eXFwvXFwqLio/XFwqXFwvLztcbnZhciBtdWx0aWxpbmVDb21tZW50c1N0YXJ0ID0gL15cXC9cXCouKi87XG52YXIgbXVsdGlsaW5lQ29tbWVudHNFbmQgPSAvXi4qP1xcKlxcLy87XG5cbmZ1bmN0aW9uIHJlYWRUb2tlbihzdHJlYW0sIHN0YXRlKSB7XG4gIC8vIHdoaXRlc3BhY2VcbiAgaWYgKHN0cmVhbS5lYXRTcGFjZSgpKSByZXR1cm4gbnVsbDtcblxuICAvLyBjb21tZW50XG4gIGlmIChzdGF0ZS5pbkNvbW1lbnQpIHtcbiAgICBpZiAoc3RyZWFtLm1hdGNoKG11bHRpbGluZUNvbW1lbnRzRW5kKSkge1xuICAgICAgc3RhdGUuaW5Db21tZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gICAgfVxuICAgIHN0cmVhbS5za2lwVG9FbmQoKTtcbiAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gIH1cbiAgaWYgKHN0cmVhbS5tYXRjaChcIi8vXCIpKSB7XG4gICAgc3RyZWFtLnNraXBUb0VuZCgpO1xuICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgfVxuICBpZiAoc3RyZWFtLm1hdGNoKG11bHRpbGluZUNvbW1lbnRzKSkgcmV0dXJuIFwiY29tbWVudFwiO1xuICBpZiAoc3RyZWFtLm1hdGNoKG11bHRpbGluZUNvbW1lbnRzU3RhcnQpKSB7XG4gICAgc3RhdGUuaW5Db21tZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gXCJjb21tZW50XCI7XG4gIH1cblxuICAvLyBpbnRlZ2VyIGFuZCBmbG9hdFxuICBpZiAoc3RyZWFtLm1hdGNoKC9eLT9bMC05XFwuXS8sIGZhbHNlKSkge1xuICAgIGlmIChzdHJlYW0ubWF0Y2goaW50ZWdlcnMpIHx8IHN0cmVhbS5tYXRjaChmbG9hdHMpKSByZXR1cm4gXCJudW1iZXJcIjtcbiAgfVxuXG4gIC8vIHN0cmluZ1xuICBpZiAoc3RyZWFtLm1hdGNoKHN0cmluZ3MpKSByZXR1cm4gXCJzdHJpbmdcIjtcblxuICAvLyBpZGVudGlmaWVyXG4gIGlmIChzdGF0ZS5zdGFydERlZiAmJiBzdHJlYW0ubWF0Y2goaWRlbnRpZmllcnMpKSByZXR1cm4gXCJkZWZcIjtcblxuICBpZiAoc3RhdGUuZW5kRGVmICYmIHN0cmVhbS5tYXRjaChpZGVudGlmaWVyc0VuZCkpIHtcbiAgICBzdGF0ZS5lbmREZWYgPSBmYWxzZTtcbiAgICByZXR1cm4gXCJkZWZcIjtcbiAgfVxuXG4gIGlmIChzdHJlYW0ubWF0Y2goa2V5d29yZHMpKSByZXR1cm4gXCJrZXl3b3JkXCI7XG5cbiAgaWYgKHN0cmVhbS5tYXRjaCh0eXBlcykpIHtcbiAgICB2YXIgbGFzdFRva2VuID0gc3RhdGUubGFzdFRva2VuO1xuICAgIHZhciBuZXh0VG9rZW4gPSAoc3RyZWFtLm1hdGNoKC9eXFxzKiguKz8pXFxiLywgZmFsc2UpIHx8IFtdKVsxXTtcblxuICAgIGlmIChsYXN0VG9rZW4gPT09IFwiOlwiIHx8IGxhc3RUb2tlbiA9PT0gXCJpbXBsZW1lbnRzXCIgfHxcbiAgICAgICAgbmV4dFRva2VuID09PSBcImltcGxlbWVudHNcIiB8fCBuZXh0VG9rZW4gPT09IFwiPVwiKSB7XG4gICAgICAvLyBVc2VkIGFzIGlkZW50aWZpZXJcbiAgICAgIHJldHVybiBcImJ1aWx0aW5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlZCBhcyB0eXBlXG4gICAgICByZXR1cm4gXCJ2YXJpYWJsZS0zXCI7XG4gICAgfVxuICB9XG5cbiAgaWYgKHN0cmVhbS5tYXRjaChidWlsdGlucykpIHJldHVybiBcImJ1aWx0aW5cIjtcbiAgaWYgKHN0cmVhbS5tYXRjaChhdG9tcykpIHJldHVybiBcImF0b21cIjtcbiAgaWYgKHN0cmVhbS5tYXRjaChpZGVudGlmaWVycykpIHJldHVybiBcInZhcmlhYmxlXCI7XG5cbiAgLy8gb3RoZXJcbiAgaWYgKHN0cmVhbS5tYXRjaChzaW5nbGVPcGVyYXRvcnMpKSByZXR1cm4gXCJvcGVyYXRvclwiO1xuXG4gIC8vIHVucmVjb2duaXplZFxuICBzdHJlYW0ubmV4dCgpO1xuICByZXR1cm4gbnVsbDtcbn07XG5cbkNvZGVNaXJyb3IuZGVmaW5lTW9kZShcIndlYmlkbFwiLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICBzdGFydFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIElzIGluIG11bHRpbGluZSBjb21tZW50XG4gICAgICAgIGluQ29tbWVudDogZmFsc2UsXG4gICAgICAgIC8vIExhc3Qgbm9uLXdoaXRlc3BhY2UsIG1hdGNoZWQgdG9rZW5cbiAgICAgICAgbGFzdFRva2VuOiBcIlwiLFxuICAgICAgICAvLyBOZXh0IHRva2VuIGlzIGEgZGVmaW5pdGlvblxuICAgICAgICBzdGFydERlZjogZmFsc2UsXG4gICAgICAgIC8vIExhc3QgdG9rZW4gb2YgdGhlIHN0YXRlbWVudCBpcyBhIGRlZmluaXRpb25cbiAgICAgICAgZW5kRGVmOiBmYWxzZVxuICAgICAgfTtcbiAgICB9LFxuICAgIHRva2VuOiBmdW5jdGlvbihzdHJlYW0sIHN0YXRlKSB7XG4gICAgICB2YXIgc3R5bGUgPSByZWFkVG9rZW4oc3RyZWFtLCBzdGF0ZSk7XG5cbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICB2YXIgY3VyID0gc3RyZWFtLmN1cnJlbnQoKTtcbiAgICAgICAgc3RhdGUubGFzdFRva2VuID0gY3VyO1xuICAgICAgICBpZiAoc3R5bGUgPT09IFwia2V5d29yZFwiKSB7XG4gICAgICAgICAgc3RhdGUuc3RhcnREZWYgPSBzdGFydERlZnMudGVzdChjdXIpO1xuICAgICAgICAgIHN0YXRlLmVuZERlZiA9IHN0YXRlLmVuZERlZiB8fCBlbmREZWZzLnRlc3QoY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdGF0ZS5zdGFydERlZiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG4gIH07XG59KTtcblxuQ29kZU1pcnJvci5kZWZpbmVNSU1FKFwidGV4dC94LXdlYmlkbFwiLCBcIndlYmlkbFwiKTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==