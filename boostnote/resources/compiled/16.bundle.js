(window.webpackJsonp=window.webpackJsonp||[]).push([[16,52],{"./node_modules/codemirror/mode/haskell-literate/haskell-literate.js":function(e,t,r){!function(e){"use strict";e.defineMode("haskell-literate",(function(t,r){var n=e.getMode(t,r&&r.base||"haskell");return{startState:function(){return{inCode:!1,baseState:e.startState(n)}},token:function(e,t){return e.sol()&&(t.inCode=e.eat(">"))?"meta":t.inCode?n.token(e,t.baseState):(e.skipToEnd(),"comment")},innerMode:function(e){return e.inCode?{state:e.baseState,mode:n}:null}}}),"haskell"),e.defineMIME("text/x-literate-haskell","haskell-literate")}(r("./node_modules/codemirror/lib/codemirror.js"),r("./node_modules/codemirror/mode/haskell/haskell.js"))},"./node_modules/codemirror/mode/haskell/haskell.js":function(e,t,r){!function(e){"use strict";e.defineMode("haskell",(function(e,t){function r(e,t,r){return t(r),r(e,t)}var n=/[a-z_]/,a=/[A-Z]/,i=/\d/,o=/[0-9A-Fa-f]/,l=/[0-7]/,s=/[a-z_A-Z0-9'\xa1-\uffff]/,u=/[-!#$%&*+.\/<=>?@\\^|~:]/,d=/[(),;[\]`{}]/,c=/[ \t\v\f]/;function f(e,t){if(e.eatWhile(c))return null;var m=e.next();if(d.test(m)){if("{"==m&&e.eat("-")){var h="comment";return e.eat("#")&&(h="meta"),r(e,t,function e(t,r){return 0==r?f:function(n,a){for(var i=r;!n.eol();){var o=n.next();if("{"==o&&n.eat("-"))++i;else if("-"==o&&n.eat("}")&&0==--i)return a(f),t}return a(e(t,i)),t}}(h,1))}return null}if("'"==m)return e.eat("\\"),e.next(),e.eat("'")?"string":"string error";if('"'==m)return r(e,t,stringLiteral);if(a.test(m))return e.eatWhile(s),e.eat(".")?"qualifier":"variable-2";if(n.test(m))return e.eatWhile(s),"variable";if(i.test(m)){if("0"==m){if(e.eat(/[xX]/))return e.eatWhile(o),"integer";if(e.eat(/[oO]/))return e.eatWhile(l),"number"}return e.eatWhile(i),h="number",e.match(/^\.\d+/)&&(h="number"),e.eat(/[eE]/)&&(h="number",e.eat(/[-+]/),e.eatWhile(i)),h}return"."==m&&e.eat(".")?"keyword":u.test(m)?"-"==m&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(u))?(e.skipToEnd(),"comment"):(h="variable",":"==m&&(h="variable-2"),e.eatWhile(u),h):"error"}function stringLiteral(e,t){for(;!e.eol();){var r=e.next();if('"'==r)return t(f),"string";if("\\"==r){if(e.eol()||e.eat(c))return t(m),"string";e.eat("&")||e.next()}}return t(f),"string error"}function m(e,t){return e.eat("\\")?r(e,t,stringLiteral):(e.next(),t(f),"error")}var h=function(){var e={};function r(t){return function(){for(var r=0;r<arguments.length;r++)e[arguments[r]]=t}}r("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),r("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),r("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),r("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),r("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3");var n=t.overrideKeywords;if(n)for(var a in n)n.hasOwnProperty(a)&&(e[a]=n[a]);return e}();return{startState:function(){return{f:f}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return h.hasOwnProperty(n)?h[n]:r},blockCommentStart:"{-",blockCommentEnd:"-}",lineComment:"--"}})),e.defineMIME("text/x-haskell","haskell")}(r("./node_modules/codemirror/lib/codemirror.js"))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL2hhc2tlbGwtbGl0ZXJhdGUvaGFza2VsbC1saXRlcmF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29kZW1pcnJvci9tb2RlL2hhc2tlbGwvaGFza2VsbC5qcyJdLCJuYW1lcyI6WyJDb2RlTWlycm9yIiwiZGVmaW5lTW9kZSIsImNvbmZpZyIsInBhcnNlckNvbmZpZyIsImJhc2VNb2RlIiwiZ2V0TW9kZSIsImJhc2UiLCJzdGFydFN0YXRlIiwiaW5Db2RlIiwiYmFzZVN0YXRlIiwidG9rZW4iLCJzdHJlYW0iLCJzdGF0ZSIsInNvbCIsImVhdCIsInNraXBUb0VuZCIsImlubmVyTW9kZSIsIm1vZGUiLCJkZWZpbmVNSU1FIiwibW9kIiwiX2NvbmZpZyIsIm1vZGVDb25maWciLCJzd2l0Y2hTdGF0ZSIsInNvdXJjZSIsInNldFN0YXRlIiwiZiIsInNtYWxsUkUiLCJsYXJnZVJFIiwiZGlnaXRSRSIsImhleGl0UkUiLCJvY3RpdFJFIiwiaWRSRSIsInN5bWJvbFJFIiwic3BlY2lhbFJFIiwid2hpdGVDaGFyUkUiLCJub3JtYWwiLCJlYXRXaGlsZSIsImNoIiwibmV4dCIsInRlc3QiLCJ0IiwibmNvbW1lbnQiLCJ0eXBlIiwibmVzdCIsImN1cnJOZXN0IiwiZW9sIiwic3RyaW5nTGl0ZXJhbCIsIm1hdGNoIiwic3RyaW5nR2FwIiwid2VsbEtub3duV29yZHMiLCJ3a3ciLCJzZXRUeXBlIiwiaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsIm92ZXJyaWRlIiwib3ZlcnJpZGVLZXl3b3JkcyIsIndvcmQiLCJoYXNPd25Qcm9wZXJ0eSIsImNvcHlTdGF0ZSIsInMiLCJ3IiwiY3VycmVudCIsImJsb2NrQ29tbWVudFN0YXJ0IiwiYmxvY2tDb21tZW50RW5kIiwibGluZUNvbW1lbnQiXSwibWFwcGluZ3MiOiJvSkFVRyxTQUFVQSxHQUNYLGFBRUFBLEVBQVdDLFdBQVcsb0JBQW9C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LFFBQVMsWUFDdEQsYUFBYyxRQUFTLE1BQU8sU0FBVSxZQUFhLFNBQVUsVUFDL0QsUUFBUyxhQUFjLFFBQVMsU0FBVSxRQUFTLFNBQVUsTUFDN0QsV0FBWSxZQUFhLE9BQVEsV0FBWSxXQUFZLFlBQ3pELGFBQWMsUUFBUyxZQUFhLGNBQWUsU0FBVSxNQUM3RCxPQUFRLE1BQU8sT0FBUSxVQUFXLE9BQVEsV0FBWSxPQUFRLE1BQzlELE9BQVEsT0FBUSxZQUFhLE1BQU8sT0FBUSxTQUFVLFlBQ3RELGFBQWMsV0FBWSxVQUFXLFlBQWEsVUFBVyxRQUM3RCxVQUFXLFFBQVMsU0FBVSxZQUFhLFFBQVMsWUFBYSxNQUNqRSxPQUFRLFVBQVcsWUFFckIsSUFBSUksRUFBV2xDLEVBQVdtQyxpQkFDMUIsR0FBSUQsRUFBVSxJQUFLLElBQUlFLEtBQVFGLEVBQWNBLEVBQVNHLGVBQWVELEtBQ25FUCxFQUFJTyxHQUFRRixFQUFTRSxJQUV2QixPQUFPUCxFQTlEWSxHQW1FckIsTUFBTyxDQUNMM0MsV0FBWSxXQUFlLE1BQU8sQ0FBRWtCLEVBQUdVLElBQ3ZDd0IsVUFBWSxTQUFVQyxHQUFLLE1BQU8sQ0FBRW5DLEVBQUdtQyxFQUFFbkMsSUFFekNmLE1BQU8sU0FBU0MsRUFBUUMsR0FDdEIsSUFBSTRCLEVBQUk1QixFQUFNYSxFQUFFZCxHQUFRLFNBQVNpRCxHQUFLaEQsRUFBTWEsRUFBSW1DLEtBQzVDQyxFQUFJbEQsRUFBT21ELFVBQ2YsT0FBT2IsRUFBZVMsZUFBZUcsR0FBS1osRUFBZVksR0FBS3JCLEdBR2hFdUIsa0JBQW1CLEtBQ25CQyxnQkFBaUIsS0FDakJDLFlBQWEsU0FLakJqRSxFQUFXa0IsV0FBVyxpQkFBa0IsV0FwUXBDQyxDQUFJLEVBQVEiLCJmaWxlIjoiMTYuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ29kZU1pcnJvciwgY29weXJpZ2h0IChjKSBieSBNYXJpam4gSGF2ZXJiZWtlIGFuZCBvdGhlcnNcbi8vIERpc3RyaWJ1dGVkIHVuZGVyIGFuIE1JVCBsaWNlbnNlOiBodHRwczovL2NvZGVtaXJyb3IubmV0L0xJQ0VOU0VcblxuKGZ1bmN0aW9uIChtb2QpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZSA9PSBcIm9iamVjdFwiKSAvLyBDb21tb25KU1xuICAgIG1vZChyZXF1aXJlKFwiLi4vLi4vbGliL2NvZGVtaXJyb3JcIiksIHJlcXVpcmUoXCIuLi9oYXNrZWxsL2hhc2tlbGxcIikpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIC8vIEFNRFxuICAgIGRlZmluZShbXCIuLi8uLi9saWIvY29kZW1pcnJvclwiLCBcIi4uL2hhc2tlbGwvaGFza2VsbFwiXSwgbW9kKVxuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpXG59KShmdW5jdGlvbiAoQ29kZU1pcnJvcikge1xuICBcInVzZSBzdHJpY3RcIlxuXG4gIENvZGVNaXJyb3IuZGVmaW5lTW9kZShcImhhc2tlbGwtbGl0ZXJhdGVcIiwgZnVuY3Rpb24gKGNvbmZpZywgcGFyc2VyQ29uZmlnKSB7XG4gICAgdmFyIGJhc2VNb2RlID0gQ29kZU1pcnJvci5nZXRNb2RlKGNvbmZpZywgKHBhcnNlckNvbmZpZyAmJiBwYXJzZXJDb25maWcuYmFzZSkgfHwgXCJoYXNrZWxsXCIpXG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGluQ29kZTogZmFsc2UsXG4gICAgICAgICAgYmFzZVN0YXRlOiBDb2RlTWlycm9yLnN0YXJ0U3RhdGUoYmFzZU1vZGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0b2tlbjogZnVuY3Rpb24gKHN0cmVhbSwgc3RhdGUpIHtcbiAgICAgICAgaWYgKHN0cmVhbS5zb2woKSkge1xuICAgICAgICAgIGlmIChzdGF0ZS5pbkNvZGUgPSBzdHJlYW0uZWF0KFwiPlwiKSlcbiAgICAgICAgICAgIHJldHVybiBcIm1ldGFcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZS5pbkNvZGUpIHtcbiAgICAgICAgICByZXR1cm4gYmFzZU1vZGUudG9rZW4oc3RyZWFtLCBzdGF0ZS5iYXNlU3RhdGUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyZWFtLnNraXBUb0VuZCgpXG4gICAgICAgICAgcmV0dXJuIFwiY29tbWVudFwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBpbm5lck1vZGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICByZXR1cm4gc3RhdGUuaW5Db2RlID8ge3N0YXRlOiBzdGF0ZS5iYXNlU3RhdGUsIG1vZGU6IGJhc2VNb2RlfSA6IG51bGxcbiAgICAgIH1cbiAgICB9XG4gIH0sIFwiaGFza2VsbFwiKVxuXG4gIENvZGVNaXJyb3IuZGVmaW5lTUlNRShcInRleHQveC1saXRlcmF0ZS1oYXNrZWxsXCIsIFwiaGFza2VsbC1saXRlcmF0ZVwiKVxufSk7XG4iLCIvLyBDb2RlTWlycm9yLCBjb3B5cmlnaHQgKGMpIGJ5IE1hcmlqbiBIYXZlcmJla2UgYW5kIG90aGVyc1xuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgYW4gTUlUIGxpY2Vuc2U6IGh0dHBzOi8vY29kZW1pcnJvci5uZXQvTElDRU5TRVxuXG4oZnVuY3Rpb24obW9kKSB7XG4gIGlmICh0eXBlb2YgZXhwb3J0cyA9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUgPT0gXCJvYmplY3RcIikgLy8gQ29tbW9uSlNcbiAgICBtb2QocmVxdWlyZShcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCIpKTtcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkgLy8gQU1EXG4gICAgZGVmaW5lKFtcIi4uLy4uL2xpYi9jb2RlbWlycm9yXCJdLCBtb2QpO1xuICBlbHNlIC8vIFBsYWluIGJyb3dzZXIgZW52XG4gICAgbW9kKENvZGVNaXJyb3IpO1xufSkoZnVuY3Rpb24oQ29kZU1pcnJvcikge1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbkNvZGVNaXJyb3IuZGVmaW5lTW9kZShcImhhc2tlbGxcIiwgZnVuY3Rpb24oX2NvbmZpZywgbW9kZUNvbmZpZykge1xuXG4gIGZ1bmN0aW9uIHN3aXRjaFN0YXRlKHNvdXJjZSwgc2V0U3RhdGUsIGYpIHtcbiAgICBzZXRTdGF0ZShmKTtcbiAgICByZXR1cm4gZihzb3VyY2UsIHNldFN0YXRlKTtcbiAgfVxuXG4gIC8vIFRoZXNlIHNob3VsZCBhbGwgYmUgVW5pY29kZSBleHRlbmRlZCwgYXMgcGVyIHRoZSBIYXNrZWxsIDIwMTAgcmVwb3J0XG4gIHZhciBzbWFsbFJFID0gL1thLXpfXS87XG4gIHZhciBsYXJnZVJFID0gL1tBLVpdLztcbiAgdmFyIGRpZ2l0UkUgPSAvXFxkLztcbiAgdmFyIGhleGl0UkUgPSAvWzAtOUEtRmEtZl0vO1xuICB2YXIgb2N0aXRSRSA9IC9bMC03XS87XG4gIHZhciBpZFJFID0gL1thLXpfQS1aMC05J1xceGExLVxcdWZmZmZdLztcbiAgdmFyIHN5bWJvbFJFID0gL1stISMkJSYqKy5cXC88PT4/QFxcXFxefH46XS87XG4gIHZhciBzcGVjaWFsUkUgPSAvWygpLDtbXFxdYHt9XS87XG4gIHZhciB3aGl0ZUNoYXJSRSA9IC9bIFxcdFxcdlxcZl0vOyAvLyBuZXdsaW5lcyBhcmUgaGFuZGxlZCBpbiB0b2tlbml6ZXJcblxuICBmdW5jdGlvbiBub3JtYWwoc291cmNlLCBzZXRTdGF0ZSkge1xuICAgIGlmIChzb3VyY2UuZWF0V2hpbGUod2hpdGVDaGFyUkUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgY2ggPSBzb3VyY2UubmV4dCgpO1xuICAgIGlmIChzcGVjaWFsUkUudGVzdChjaCkpIHtcbiAgICAgIGlmIChjaCA9PSAneycgJiYgc291cmNlLmVhdCgnLScpKSB7XG4gICAgICAgIHZhciB0ID0gXCJjb21tZW50XCI7XG4gICAgICAgIGlmIChzb3VyY2UuZWF0KCcjJykpIHtcbiAgICAgICAgICB0ID0gXCJtZXRhXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN3aXRjaFN0YXRlKHNvdXJjZSwgc2V0U3RhdGUsIG5jb21tZW50KHQsIDEpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChjaCA9PSAnXFwnJykge1xuICAgICAgaWYgKHNvdXJjZS5lYXQoJ1xcXFwnKSkge1xuICAgICAgICBzb3VyY2UubmV4dCgpOyAgLy8gc2hvdWxkIGhhbmRsZSBvdGhlciBlc2NhcGVzIGhlcmVcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBzb3VyY2UubmV4dCgpO1xuICAgICAgfVxuICAgICAgaWYgKHNvdXJjZS5lYXQoJ1xcJycpKSB7XG4gICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFwic3RyaW5nIGVycm9yXCI7XG4gICAgfVxuXG4gICAgaWYgKGNoID09ICdcIicpIHtcbiAgICAgIHJldHVybiBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBzdHJpbmdMaXRlcmFsKTtcbiAgICB9XG5cbiAgICBpZiAobGFyZ2VSRS50ZXN0KGNoKSkge1xuICAgICAgc291cmNlLmVhdFdoaWxlKGlkUkUpO1xuICAgICAgaWYgKHNvdXJjZS5lYXQoJy4nKSkge1xuICAgICAgICByZXR1cm4gXCJxdWFsaWZpZXJcIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBcInZhcmlhYmxlLTJcIjtcbiAgICB9XG5cbiAgICBpZiAoc21hbGxSRS50ZXN0KGNoKSkge1xuICAgICAgc291cmNlLmVhdFdoaWxlKGlkUkUpO1xuICAgICAgcmV0dXJuIFwidmFyaWFibGVcIjtcbiAgICB9XG5cbiAgICBpZiAoZGlnaXRSRS50ZXN0KGNoKSkge1xuICAgICAgaWYgKGNoID09ICcwJykge1xuICAgICAgICBpZiAoc291cmNlLmVhdCgvW3hYXS8pKSB7XG4gICAgICAgICAgc291cmNlLmVhdFdoaWxlKGhleGl0UkUpOyAvLyBzaG91bGQgcmVxdWlyZSBhdCBsZWFzdCAxXG4gICAgICAgICAgcmV0dXJuIFwiaW50ZWdlclwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UuZWF0KC9bb09dLykpIHtcbiAgICAgICAgICBzb3VyY2UuZWF0V2hpbGUob2N0aXRSRSk7IC8vIHNob3VsZCByZXF1aXJlIGF0IGxlYXN0IDFcbiAgICAgICAgICByZXR1cm4gXCJudW1iZXJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgc291cmNlLmVhdFdoaWxlKGRpZ2l0UkUpO1xuICAgICAgdmFyIHQgPSBcIm51bWJlclwiO1xuICAgICAgaWYgKHNvdXJjZS5tYXRjaCgvXlxcLlxcZCsvKSkge1xuICAgICAgICB0ID0gXCJudW1iZXJcIjtcbiAgICAgIH1cbiAgICAgIGlmIChzb3VyY2UuZWF0KC9bZUVdLykpIHtcbiAgICAgICAgdCA9IFwibnVtYmVyXCI7XG4gICAgICAgIHNvdXJjZS5lYXQoL1stK10vKTtcbiAgICAgICAgc291cmNlLmVhdFdoaWxlKGRpZ2l0UkUpOyAvLyBzaG91bGQgcmVxdWlyZSBhdCBsZWFzdCAxXG4gICAgICB9XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICBpZiAoY2ggPT0gXCIuXCIgJiYgc291cmNlLmVhdChcIi5cIikpXG4gICAgICByZXR1cm4gXCJrZXl3b3JkXCI7XG5cbiAgICBpZiAoc3ltYm9sUkUudGVzdChjaCkpIHtcbiAgICAgIGlmIChjaCA9PSAnLScgJiYgc291cmNlLmVhdCgvLS8pKSB7XG4gICAgICAgIHNvdXJjZS5lYXRXaGlsZSgvLS8pO1xuICAgICAgICBpZiAoIXNvdXJjZS5lYXQoc3ltYm9sUkUpKSB7XG4gICAgICAgICAgc291cmNlLnNraXBUb0VuZCgpO1xuICAgICAgICAgIHJldHVybiBcImNvbW1lbnRcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHQgPSBcInZhcmlhYmxlXCI7XG4gICAgICBpZiAoY2ggPT0gJzonKSB7XG4gICAgICAgIHQgPSBcInZhcmlhYmxlLTJcIjtcbiAgICAgIH1cbiAgICAgIHNvdXJjZS5lYXRXaGlsZShzeW1ib2xSRSk7XG4gICAgICByZXR1cm4gdDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJlcnJvclwiO1xuICB9XG5cbiAgZnVuY3Rpb24gbmNvbW1lbnQodHlwZSwgbmVzdCkge1xuICAgIGlmIChuZXN0ID09IDApIHtcbiAgICAgIHJldHVybiBub3JtYWw7XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbihzb3VyY2UsIHNldFN0YXRlKSB7XG4gICAgICB2YXIgY3Vyck5lc3QgPSBuZXN0O1xuICAgICAgd2hpbGUgKCFzb3VyY2UuZW9sKCkpIHtcbiAgICAgICAgdmFyIGNoID0gc291cmNlLm5leHQoKTtcbiAgICAgICAgaWYgKGNoID09ICd7JyAmJiBzb3VyY2UuZWF0KCctJykpIHtcbiAgICAgICAgICArK2N1cnJOZXN0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNoID09ICctJyAmJiBzb3VyY2UuZWF0KCd9JykpIHtcbiAgICAgICAgICAtLWN1cnJOZXN0O1xuICAgICAgICAgIGlmIChjdXJyTmVzdCA9PSAwKSB7XG4gICAgICAgICAgICBzZXRTdGF0ZShub3JtYWwpO1xuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXRTdGF0ZShuY29tbWVudCh0eXBlLCBjdXJyTmVzdCkpO1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZ0xpdGVyYWwoc291cmNlLCBzZXRTdGF0ZSkge1xuICAgIHdoaWxlICghc291cmNlLmVvbCgpKSB7XG4gICAgICB2YXIgY2ggPSBzb3VyY2UubmV4dCgpO1xuICAgICAgaWYgKGNoID09ICdcIicpIHtcbiAgICAgICAgc2V0U3RhdGUobm9ybWFsKTtcbiAgICAgICAgcmV0dXJuIFwic3RyaW5nXCI7XG4gICAgICB9XG4gICAgICBpZiAoY2ggPT0gJ1xcXFwnKSB7XG4gICAgICAgIGlmIChzb3VyY2UuZW9sKCkgfHwgc291cmNlLmVhdCh3aGl0ZUNoYXJSRSkpIHtcbiAgICAgICAgICBzZXRTdGF0ZShzdHJpbmdHYXApO1xuICAgICAgICAgIHJldHVybiBcInN0cmluZ1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UuZWF0KCcmJykpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzb3VyY2UubmV4dCgpOyAvLyBzaG91bGQgaGFuZGxlIG90aGVyIGVzY2FwZXMgaGVyZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHNldFN0YXRlKG5vcm1hbCk7XG4gICAgcmV0dXJuIFwic3RyaW5nIGVycm9yXCI7XG4gIH1cblxuICBmdW5jdGlvbiBzdHJpbmdHYXAoc291cmNlLCBzZXRTdGF0ZSkge1xuICAgIGlmIChzb3VyY2UuZWF0KCdcXFxcJykpIHtcbiAgICAgIHJldHVybiBzd2l0Y2hTdGF0ZShzb3VyY2UsIHNldFN0YXRlLCBzdHJpbmdMaXRlcmFsKTtcbiAgICB9XG4gICAgc291cmNlLm5leHQoKTtcbiAgICBzZXRTdGF0ZShub3JtYWwpO1xuICAgIHJldHVybiBcImVycm9yXCI7XG4gIH1cblxuXG4gIHZhciB3ZWxsS25vd25Xb3JkcyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgd2t3ID0ge307XG4gICAgZnVuY3Rpb24gc2V0VHlwZSh0KSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgICB3a3dbYXJndW1lbnRzW2ldXSA9IHQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHNldFR5cGUoXCJrZXl3b3JkXCIpKFxuICAgICAgXCJjYXNlXCIsIFwiY2xhc3NcIiwgXCJkYXRhXCIsIFwiZGVmYXVsdFwiLCBcImRlcml2aW5nXCIsIFwiZG9cIiwgXCJlbHNlXCIsIFwiZm9yZWlnblwiLFxuICAgICAgXCJpZlwiLCBcImltcG9ydFwiLCBcImluXCIsIFwiaW5maXhcIiwgXCJpbmZpeGxcIiwgXCJpbmZpeHJcIiwgXCJpbnN0YW5jZVwiLCBcImxldFwiLFxuICAgICAgXCJtb2R1bGVcIiwgXCJuZXd0eXBlXCIsIFwib2ZcIiwgXCJ0aGVuXCIsIFwidHlwZVwiLCBcIndoZXJlXCIsIFwiX1wiKTtcblxuICAgIHNldFR5cGUoXCJrZXl3b3JkXCIpKFxuICAgICAgXCJcXC5cXC5cIiwgXCI6XCIsIFwiOjpcIiwgXCI9XCIsIFwiXFxcXFwiLCBcIjwtXCIsIFwiLT5cIiwgXCJAXCIsIFwiflwiLCBcIj0+XCIpO1xuXG4gICAgc2V0VHlwZShcImJ1aWx0aW5cIikoXG4gICAgICBcIiEhXCIsIFwiJCFcIiwgXCIkXCIsIFwiJiZcIiwgXCIrXCIsIFwiKytcIiwgXCItXCIsIFwiLlwiLCBcIi9cIiwgXCIvPVwiLCBcIjxcIiwgXCI8KlwiLCBcIjw9XCIsXG4gICAgICBcIjwkPlwiLCBcIjwqPlwiLCBcIj08PFwiLCBcIj09XCIsIFwiPlwiLCBcIj49XCIsIFwiPj5cIiwgXCI+Pj1cIiwgXCJeXCIsIFwiXl5cIiwgXCJ8fFwiLCBcIipcIixcbiAgICAgIFwiKj5cIiwgXCIqKlwiKTtcblxuICAgIHNldFR5cGUoXCJidWlsdGluXCIpKFxuICAgICAgXCJBcHBsaWNhdGl2ZVwiLCBcIkJvb2xcIiwgXCJCb3VuZGVkXCIsIFwiQ2hhclwiLCBcIkRvdWJsZVwiLCBcIkVRXCIsIFwiRWl0aGVyXCIsIFwiRW51bVwiLFxuICAgICAgXCJFcVwiLCBcIkZhbHNlXCIsIFwiRmlsZVBhdGhcIiwgXCJGbG9hdFwiLCBcIkZsb2F0aW5nXCIsIFwiRnJhY3Rpb25hbFwiLCBcIkZ1bmN0b3JcIixcbiAgICAgIFwiR1RcIiwgXCJJT1wiLCBcIklPRXJyb3JcIiwgXCJJbnRcIiwgXCJJbnRlZ2VyXCIsIFwiSW50ZWdyYWxcIiwgXCJKdXN0XCIsIFwiTFRcIiwgXCJMZWZ0XCIsXG4gICAgICBcIk1heWJlXCIsIFwiTW9uYWRcIiwgXCJOb3RoaW5nXCIsIFwiTnVtXCIsIFwiT3JkXCIsIFwiT3JkZXJpbmdcIiwgXCJSYXRpb25hbFwiLCBcIlJlYWRcIixcbiAgICAgIFwiUmVhZFNcIiwgXCJSZWFsXCIsIFwiUmVhbEZsb2F0XCIsIFwiUmVhbEZyYWNcIiwgXCJSaWdodFwiLCBcIlNob3dcIiwgXCJTaG93U1wiLFxuICAgICAgXCJTdHJpbmdcIiwgXCJUcnVlXCIpO1xuXG4gICAgc2V0VHlwZShcImJ1aWx0aW5cIikoXG4gICAgICBcImFic1wiLCBcImFjb3NcIiwgXCJhY29zaFwiLCBcImFsbFwiLCBcImFuZFwiLCBcImFueVwiLCBcImFwcGVuZEZpbGVcIiwgXCJhc1R5cGVPZlwiLFxuICAgICAgXCJhc2luXCIsIFwiYXNpbmhcIiwgXCJhdGFuXCIsIFwiYXRhbjJcIiwgXCJhdGFuaFwiLCBcImJyZWFrXCIsIFwiY2F0Y2hcIiwgXCJjZWlsaW5nXCIsXG4gICAgICBcImNvbXBhcmVcIiwgXCJjb25jYXRcIiwgXCJjb25jYXRNYXBcIiwgXCJjb25zdFwiLCBcImNvc1wiLCBcImNvc2hcIiwgXCJjdXJyeVwiLFxuICAgICAgXCJjeWNsZVwiLCBcImRlY29kZUZsb2F0XCIsIFwiZGl2XCIsIFwiZGl2TW9kXCIsIFwiZHJvcFwiLCBcImRyb3BXaGlsZVwiLCBcImVpdGhlclwiLFxuICAgICAgXCJlbGVtXCIsIFwiZW5jb2RlRmxvYXRcIiwgXCJlbnVtRnJvbVwiLCBcImVudW1Gcm9tVGhlblwiLCBcImVudW1Gcm9tVGhlblRvXCIsXG4gICAgICBcImVudW1Gcm9tVG9cIiwgXCJlcnJvclwiLCBcImV2ZW5cIiwgXCJleHBcIiwgXCJleHBvbmVudFwiLCBcImZhaWxcIiwgXCJmaWx0ZXJcIixcbiAgICAgIFwiZmxpcFwiLCBcImZsb2F0RGlnaXRzXCIsIFwiZmxvYXRSYWRpeFwiLCBcImZsb2F0UmFuZ2VcIiwgXCJmbG9vclwiLCBcImZtYXBcIixcbiAgICAgIFwiZm9sZGxcIiwgXCJmb2xkbDFcIiwgXCJmb2xkclwiLCBcImZvbGRyMVwiLCBcImZyb21FbnVtXCIsIFwiZnJvbUludGVnZXJcIixcbiAgICAgIFwiZnJvbUludGVncmFsXCIsIFwiZnJvbVJhdGlvbmFsXCIsIFwiZnN0XCIsIFwiZ2NkXCIsIFwiZ2V0Q2hhclwiLCBcImdldENvbnRlbnRzXCIsXG4gICAgICBcImdldExpbmVcIiwgXCJoZWFkXCIsIFwiaWRcIiwgXCJpbml0XCIsIFwiaW50ZXJhY3RcIiwgXCJpb0Vycm9yXCIsIFwiaXNEZW5vcm1hbGl6ZWRcIixcbiAgICAgIFwiaXNJRUVFXCIsIFwiaXNJbmZpbml0ZVwiLCBcImlzTmFOXCIsIFwiaXNOZWdhdGl2ZVplcm9cIiwgXCJpdGVyYXRlXCIsIFwibGFzdFwiLFxuICAgICAgXCJsY21cIiwgXCJsZW5ndGhcIiwgXCJsZXhcIiwgXCJsaW5lc1wiLCBcImxvZ1wiLCBcImxvZ0Jhc2VcIiwgXCJsb29rdXBcIiwgXCJtYXBcIixcbiAgICAgIFwibWFwTVwiLCBcIm1hcE1fXCIsIFwibWF4XCIsIFwibWF4Qm91bmRcIiwgXCJtYXhpbXVtXCIsIFwibWF5YmVcIiwgXCJtaW5cIiwgXCJtaW5Cb3VuZFwiLFxuICAgICAgXCJtaW5pbXVtXCIsIFwibW9kXCIsIFwibmVnYXRlXCIsIFwibm90XCIsIFwibm90RWxlbVwiLCBcIm51bGxcIiwgXCJvZGRcIiwgXCJvclwiLFxuICAgICAgXCJvdGhlcndpc2VcIiwgXCJwaVwiLCBcInByZWRcIiwgXCJwcmludFwiLCBcInByb2R1Y3RcIiwgXCJwcm9wZXJGcmFjdGlvblwiLCBcInB1cmVcIixcbiAgICAgIFwicHV0Q2hhclwiLCBcInB1dFN0clwiLCBcInB1dFN0ckxuXCIsIFwicXVvdFwiLCBcInF1b3RSZW1cIiwgXCJyZWFkXCIsIFwicmVhZEZpbGVcIixcbiAgICAgIFwicmVhZElPXCIsIFwicmVhZExpc3RcIiwgXCJyZWFkTG5cIiwgXCJyZWFkUGFyZW5cIiwgXCJyZWFkc1wiLCBcInJlYWRzUHJlY1wiLFxuICAgICAgXCJyZWFsVG9GcmFjXCIsIFwicmVjaXBcIiwgXCJyZW1cIiwgXCJyZXBlYXRcIiwgXCJyZXBsaWNhdGVcIiwgXCJyZXR1cm5cIiwgXCJyZXZlcnNlXCIsXG4gICAgICBcInJvdW5kXCIsIFwic2NhbGVGbG9hdFwiLCBcInNjYW5sXCIsIFwic2NhbmwxXCIsIFwic2NhbnJcIiwgXCJzY2FucjFcIiwgXCJzZXFcIixcbiAgICAgIFwic2VxdWVuY2VcIiwgXCJzZXF1ZW5jZV9cIiwgXCJzaG93XCIsIFwic2hvd0NoYXJcIiwgXCJzaG93TGlzdFwiLCBcInNob3dQYXJlblwiLFxuICAgICAgXCJzaG93U3RyaW5nXCIsIFwic2hvd3NcIiwgXCJzaG93c1ByZWNcIiwgXCJzaWduaWZpY2FuZFwiLCBcInNpZ251bVwiLCBcInNpblwiLFxuICAgICAgXCJzaW5oXCIsIFwic25kXCIsIFwic3BhblwiLCBcInNwbGl0QXRcIiwgXCJzcXJ0XCIsIFwic3VidHJhY3RcIiwgXCJzdWNjXCIsIFwic3VtXCIsXG4gICAgICBcInRhaWxcIiwgXCJ0YWtlXCIsIFwidGFrZVdoaWxlXCIsIFwidGFuXCIsIFwidGFuaFwiLCBcInRvRW51bVwiLCBcInRvSW50ZWdlclwiLFxuICAgICAgXCJ0b1JhdGlvbmFsXCIsIFwidHJ1bmNhdGVcIiwgXCJ1bmN1cnJ5XCIsIFwidW5kZWZpbmVkXCIsIFwidW5saW5lc1wiLCBcInVudGlsXCIsXG4gICAgICBcInVud29yZHNcIiwgXCJ1bnppcFwiLCBcInVuemlwM1wiLCBcInVzZXJFcnJvclwiLCBcIndvcmRzXCIsIFwid3JpdGVGaWxlXCIsIFwiemlwXCIsXG4gICAgICBcInppcDNcIiwgXCJ6aXBXaXRoXCIsIFwiemlwV2l0aDNcIik7XG5cbiAgICB2YXIgb3ZlcnJpZGUgPSBtb2RlQ29uZmlnLm92ZXJyaWRlS2V5d29yZHM7XG4gICAgaWYgKG92ZXJyaWRlKSBmb3IgKHZhciB3b3JkIGluIG92ZXJyaWRlKSBpZiAob3ZlcnJpZGUuaGFzT3duUHJvcGVydHkod29yZCkpXG4gICAgICB3a3dbd29yZF0gPSBvdmVycmlkZVt3b3JkXTtcblxuICAgIHJldHVybiB3a3c7XG4gIH0pKCk7XG5cblxuXG4gIHJldHVybiB7XG4gICAgc3RhcnRTdGF0ZTogZnVuY3Rpb24gKCkgIHsgcmV0dXJuIHsgZjogbm9ybWFsIH07IH0sXG4gICAgY29weVN0YXRlOiAgZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHsgZjogcy5mIH07IH0sXG5cbiAgICB0b2tlbjogZnVuY3Rpb24oc3RyZWFtLCBzdGF0ZSkge1xuICAgICAgdmFyIHQgPSBzdGF0ZS5mKHN0cmVhbSwgZnVuY3Rpb24ocykgeyBzdGF0ZS5mID0gczsgfSk7XG4gICAgICB2YXIgdyA9IHN0cmVhbS5jdXJyZW50KCk7XG4gICAgICByZXR1cm4gd2VsbEtub3duV29yZHMuaGFzT3duUHJvcGVydHkodykgPyB3ZWxsS25vd25Xb3Jkc1t3XSA6IHQ7XG4gICAgfSxcblxuICAgIGJsb2NrQ29tbWVudFN0YXJ0OiBcInstXCIsXG4gICAgYmxvY2tDb21tZW50RW5kOiBcIi19XCIsXG4gICAgbGluZUNvbW1lbnQ6IFwiLS1cIlxuICB9O1xuXG59KTtcblxuQ29kZU1pcnJvci5kZWZpbmVNSU1FKFwidGV4dC94LWhhc2tlbGxcIiwgXCJoYXNrZWxsXCIpO1xuXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=