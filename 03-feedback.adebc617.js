!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(T,t),d?b(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function T(){var e=p();if(O(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-c);return s?g(n,u-(e-l)):n}(e))}function h(e){return f=void 0,v&&o?b(e):(o=i=void 0,a)}function w(){var e=p(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(T,t),b(c)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?a:h(p())},w}function y(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=a.test(e);return r||f.test(e)?c(e.slice(2),r?2:8):u.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var S,O,T=document.querySelector(".feedback-form"),h=document.querySelector(".feedback-form input"),w=document.querySelector(".feedback-form textarea"),x="feedback-form-state",N={};T.addEventListener("submit",(function(e){e.preventDefault(),console.log("відправка"),e.currentTarget.reset(),localStorage.removeItem(x)})),T.addEventListener("input",n((function(e){var t=e.target.name,n=e.target.value;N[t]=n,localStorage.setItem(x,JSON.stringify(N)),console.log(N)}),500)),S=localStorage.getItem(x),(O=JSON.parse(S))&&(console.log(S),console.log(O),h.value=O.email,w.value=O.message)}();
//# sourceMappingURL=03-feedback.adebc617.js.map
