import{at as t,K as n,X as r}from"./useI18n-58b225c6.js";var i=/\s/;var e=/^\s+/;function u(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(e,""):t}var o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;function v(r){if("number"==typeof r)return r;if(t(r))return NaN;if(n(r)){var i="function"==typeof r.valueOf?r.valueOf():r;r=n(i)?i+"":i}if("string"!=typeof r)return 0===r?r:+r;r=u(r);var e=a.test(r);return e||f.test(r)?c(r.slice(2),e?2:8):o.test(r)?NaN:+r}const s=function(){return r.Date.now()};var l=Math.max,m=Math.min;function d(t,r,i){var e,u,o,a,f,c,d=0,p=!1,h=!1,T=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function x(n){var r=e,i=u;return e=u=void 0,d=n,a=t.apply(i,r)}function y(t){return d=t,f=setTimeout(N,r),p?x(t):a}function g(t){var n=t-c;return void 0===c||n>=r||n<0||h&&t-d>=o}function N(){var t=s();if(g(t))return w(t);f=setTimeout(N,function(t){var n=r-(t-c);return h?m(n,o-(t-d)):n}(t))}function w(t){return f=void 0,T&&e?x(t):(e=u=void 0,a)}function $(){var t=s(),n=g(t);if(e=arguments,u=this,c=t,n){if(void 0===f)return y(c);if(h)return clearTimeout(f),f=setTimeout(N,r),x(c)}return void 0===f&&(f=setTimeout(N,r)),a}return r=v(r)||0,n(i)&&(p=!!i.leading,o=(h="maxWait"in i)?l(v(i.maxWait)||0,r):o,T="trailing"in i?!!i.trailing:T),$.cancel=function(){void 0!==f&&clearTimeout(f),d=0,e=c=u=f=void 0},$.flush=function(){return void 0===f?a:w(s())},$}export{d};
