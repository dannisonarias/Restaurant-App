!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function c(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],s=n.base?a[0]+n.base:a[0],u=t[s]||0,l="".concat(s," ").concat(u);t[s]=u+1;var _=c(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==_?(i[_].references++,i[_].updater(d)):i.push({identifier:l,updater:h(d,n),references:1}),o.push(l)}return o}function u(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,_=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function d(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=_(n,r);else{var a=document.createTextNode(r),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function f(e,n,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,n){var t,o,r;if(n.singleton){var a=m++;t=p||(p=u(n)),o=d.bind(null,t,a,!1),r=d.bind(null,t,a,!0)}else t=u(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);i[r].references--}for(var a=s(e,n),u=0;u<t.length;u++){var l=c(t[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=a}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"#content{margin:0 auto;margin-top:50px;width:80%;height:50%;-webkit-box-shadow:0px 2px 8px 0px rgba(0,0,0,.75);-moz-box-shadow:0px 2px 8px 0px rgba(0,0,0,.75);box-shadow:0px 2px 8px 0px rgba(0,0,0,.75)}nav{background-color:#2f2f2f}h2{padding-right:30px}a{color:#fff;box-sizing:border-box}a:hover{color:#ea463d;background-color:#f5f5f5}",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(i=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(a).concat([r]).join("\n")}var i,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _style_scss__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),_style_scss__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__),_views_menu_menu__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5),_views_home_home__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6),_views_about_about__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(7),_views_navbar_navbar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(14);window.home=_views_home_home__WEBPACK_IMPORTED_MODULE_2__.a,window.menu=_views_menu_menu__WEBPACK_IMPORTED_MODULE_1__.a,window.about=_views_about_about__WEBPACK_IMPORTED_MODULE_3__.a;const display=(()=>{const main2=document.querySelector("#content2"),clearContent=()=>{main2.innerHTML=""},renderDom=()=>{clearContent();const element=event.target.innerHTML.toLowerCase();console.log(),main2.appendChild(eval(element))},renderHome=()=>{main2.appendChild(_views_home_home__WEBPACK_IMPORTED_MODULE_2__.a)},clickListeners=()=>{const e=document.getElementsByTagName("a");for(let n=0;n<e.length;n++)e[n].addEventListener("click",renderDom,!1)};clearContent(),renderHome(),clickListeners()})()},function(e,n,t){"use strict";t(10);const o=(()=>{const e=document.createElement("h1");e.className="text-center",e.innerHTML="Todays Menu";const n=document.createElement("section");return n.className="section-2",n.appendChild(e),n})();n.a=o},function(e,n,t){"use strict";t(12);const o=(()=>{const e=document.createElement("h1");e.className="text-center",e.innerHTML="Try Our Famous Burger!";const n=document.createElement("section");return n.className="section-1",n.appendChild(e),n})();n.a=o},function(e,n,t){"use strict";t(8);const o=(()=>{const e=document.createElement("h1");e.className="text-center",e.innerHTML="Our History";const n=document.createElement("p");n.innerHTML="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum";const t=document.createElement("section");return t.className="section-3",t.appendChild(e),t.appendChild(n),t})();n.a=o},function(e,n,t){var o=t(1),r=t(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){(n=t(3)(!1)).push([e.i,"p{color:#fff;font-family:Helvetica,sans-serif;margin:25px 100px}.section-3{background:no-repeat center/100% url(/src/images/about-us.jpg);height:70vh;width:100%}.section-3 h1{color:#fff;font-size:100px}",""]),e.exports=n},function(e,n,t){var o=t(1),r=t(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){(n=t(3)(!1)).push([e.i,".section-2{background-image:url(/src/images/menu2.png);background-repeat:no-repeat;background-position:contain;height:80vh;width:100%}.section-2 h1{color:#ea463d;font-size:80px}",""]),e.exports=n},function(e,n,t){var o=t(1),r=t(13);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var a={insert:"head",singleton:!1};o(r,a);e.exports=r.locals||{}},function(e,n,t){(n=t(3)(!1)).push([e.i,".section-1{background:no-repeat center/50% url(/src/images/homepage.jpg);background-repeat:no-repeat;background-position:cover;height:70vh;width:100%;background-size:auto auto}.section-1 h1{font-family:Helvetica,sans-serif;color:#fff;font-size:50px;font-weight:800;transform:translateY(80%)}",""]),e.exports=n},function(e,n,t){"use strict";(()=>{const e=document.querySelector("#content"),n=document.createElement("nav"),t=document.createElement("ul");t.className="nav justify-content-center";const o=document.createElement("li");o.innerHTML='<a class="nav-link a-home" href="#">Home</a>';const r=document.createElement("li");r.innerHTML='<a class="nav-link a-about" href="#">About</a>';const a=document.createElement("li");a.innerHTML='<a class="nav-link a-menu" href="#">Menu</a>',t.appendChild(o),t.appendChild(a),t.appendChild(r),n.appendChild(t),e.prepend(n)})()}]);