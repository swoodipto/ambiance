/*!
 * 
 *             SimpleBar.js - v2.3.1
 *             Scrollbars, simpler.
 *             https://grsmto.github.io/simplebar/
 *             
 *             Made by Adrien Grsmto from a fork by Jonathan Nicol
 *             Under MIT License
 *         
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleBar=e():t.SimpleBar=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(32),o=r(i),s=n(29),c=r(s),a=n(30),u=r(a),l=n(33),f=r(l),h=n(34),d=r(h),p=n(72),v=r(p),b=n(70),y=r(b),m=n(71),g=r(m);n(69);var E=function(){function t(e,n){(0,f.default)(this,t),this.el=e,this.flashTimeout,this.contentEl,this.scrollContentEl,this.dragOffset={x:0,y:0},this.isVisible={x:!0,y:!0},this.scrollOffsetAttr={x:"scrollLeft",y:"scrollTop"},this.sizeAttr={x:"offsetWidth",y:"offsetHeight"},this.scrollSizeAttr={x:"scrollWidth",y:"scrollHeight"},this.offsetAttr={x:"left",y:"top"},this.globalObserver,this.mutationObserver,this.resizeObserver,this.currentAxis,this.options=(0,u.default)({},t.defaultOptions,n),this.classNames=this.options.classNames,this.scrollbarWidth=(0,v.default)(),this.offsetSize=20,this.enabled=0!==this.scrollbarWidth||this.options.forceEnabled,this.flashScrollbar=this.flashScrollbar.bind(this),this.onDragY=this.onDragY.bind(this),this.onDragX=this.onDragX.bind(this),this.onScrollY=this.onScrollY.bind(this),this.onScrollX=this.onScrollX.bind(this),this.drag=this.drag.bind(this),this.onEndDrag=this.onEndDrag.bind(this),this.onMouseEnter=this.onMouseEnter.bind(this),this.recalculate=(0,y.default)(this.recalculate,100,{leading:!0,trailing:!1}),this.init()}return(0,d.default)(t,[{key:"init",value:function(){this.el.SimpleBar=this,this.enabled&&(this.initDOM(),this.scrollContentEl=this.el.querySelector("."+this.classNames.scrollContent),this.contentEl=this.el.querySelector("."+this.classNames.content),this.trackX=this.el.querySelector("."+this.classNames.track+".horizontal"),this.trackY=this.el.querySelector("."+this.classNames.track+".vertical"),this.scrollbarX=this.trackX.querySelector("."+this.classNames.scrollbar),this.scrollbarY=this.trackY.querySelector("."+this.classNames.scrollbar),this.scrollContentEl.style.marginRight="-"+this.offsetSize+"px",this.scrollContentEl.style.paddingRight=this.offsetSize+"px",this.scrollContentEl.style.marginBottom="-"+this.offsetSize+"px",this.contentEl.style.paddingBottom=this.offsetSize+"px",this.enabled&&0!==this.scrollbarWidth&&(this.scrollContentEl.style.marginBottom="-"+2*this.scrollbarWidth+"px",this.contentEl.style.marginRight="-"+this.scrollbarWidth+"px"),this.recalculate(),this.initListeners())}},{key:"initDOM",value:function(){if(this.options.wrapContent){for(this.scrollContentEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.scrollContentEl.classList.add(this.classNames.scrollContent),this.contentEl.classList.add(this.classNames.content);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.scrollContentEl.appendChild(this.contentEl),this.el.appendChild(this.scrollContentEl)}var t=document.createElement("div"),e=document.createElement("div");t.classList.add(this.classNames.track),e.classList.add(this.classNames.scrollbar),t.appendChild(e),this.trackX=t.cloneNode(!0),this.trackX.classList.add("horizontal"),this.trackY=t.cloneNode(!0),this.trackY.classList.add("vertical"),this.el.insertBefore(this.trackX,this.el.firstChild),this.el.insertBefore(this.trackY,this.el.firstChild),this.el.setAttribute("data-simplebar","init")}},{key:"initListeners",value:function(){var t=this;this.options.autoHide&&this.el.addEventListener("mouseenter",this.onMouseEnter),this.scrollbarY.addEventListener("mousedown",this.onDragY),this.scrollbarX.addEventListener("mousedown",this.onDragX),this.scrollContentEl.addEventListener("scroll",this.onScrollY),this.contentEl.addEventListener("scroll",this.onScrollX),"undefined"!=typeof MutationObserver&&(this.mutationObserver=new MutationObserver(function(e){e.forEach(function(e){(t.isChildNode(e.target)||e.addedNodes.length)&&t.recalculate()})}),this.mutationObserver.observe(this.el,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.resizeObserver=new g.default(this.recalculate.bind(this)),this.resizeObserver.observe(this.el)}},{key:"removeListeners",value:function(){this.enabled&&(this.options.autoHide&&this.el.removeEventListener("mouseenter",this.onMouseEnter),this.scrollbarX.removeEventListener("mousedown",this.onDragX),this.scrollbarY.removeEventListener("mousedown",this.onDragY),this.scrollContentEl.removeEventListener("scroll",this.onScrollY),this.contentEl.removeEventListener("scroll",this.onScrollX),this.mutationObserver.disconnect(),this.resizeObserver.disconnect())}},{key:"onDragX",value:function(t){this.onDrag(t,"x")}},{key:"onDragY",value:function(t){this.onDrag(t,"y")}},{key:"onDrag",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"y";t.preventDefault();var n="y"===e?this.scrollbarY:this.scrollbarX,r="y"===e?t.pageY:t.pageX;this.dragOffset[e]=r-n.getBoundingClientRect()[this.offsetAttr[e]],this.currentAxis=e,document.addEventListener("mousemove",this.drag),document.addEventListener("mouseup",this.onEndDrag)}},{key:"drag",value:function(t){var e=void 0,n=void 0,r=void 0;t.preventDefault(),"y"===this.currentAxis?(e=t.pageY,n=this.trackY,r=this.scrollContentEl):(e=t.pageX,n=this.trackX,r=this.contentEl);var i=e-n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]]-this.dragOffset[this.currentAxis],o=i/n[this.sizeAttr[this.currentAxis]],s=o*this.contentEl[this.scrollSizeAttr[this.currentAxis]];r[this.scrollOffsetAttr[this.currentAxis]]=s}},{key:"onEndDrag",value:function(){document.removeEventListener("mousemove",this.drag),document.removeEventListener("mouseup",this.onEndDrag)}},{key:"resizeScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y",e=void 0,n=void 0,r=void 0,i=void 0;"x"===t?(e=this.trackX,n=this.scrollbarX,r=this.contentEl[this.scrollOffsetAttr[t]],i=this.contentEl[this.scrollSizeAttr[t]]):(e=this.trackY,n=this.scrollbarY,r=this.scrollContentEl[this.scrollOffsetAttr[t]],i=this.contentEl[this.scrollSizeAttr[t]]-15);var o=e[this.sizeAttr[t]],s=o/i,c=r/(i-o),a=Math.max(~~(s*(o-2))-2,this.options.scrollbarMinSize),u=~~((o-4-a)*c+2);this.isVisible[t]=o<i,this.isVisible[t]?(e.style.visibility="visible","x"===t?(n.style.left=u+"px",n.style.width=a+"px"):(n.style.top=u+"px",n.style.height=a+"px")):e.style.visibility="hidden"}},{key:"onScrollX",value:function(){this.flashScrollbar("x")}},{key:"onScrollY",value:function(){this.flashScrollbar("y")}},{key:"onMouseEnter",value:function(){this.flashScrollbar("x"),this.flashScrollbar("y")}},{key:"flashScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.resizeScrollbar(t),this.showScrollbar(t)}},{key:"showScrollbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"y";this.isVisible[t]&&("x"===t?this.scrollbarX.classList.add("visible"):this.scrollbarY.classList.add("visible"),this.options.autoHide&&("number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout),this.flashTimeout=window.setTimeout(this.hideScrollbar.bind(this),1e3)))}},{key:"hideScrollbar",value:function(){this.scrollbarX.classList.remove("visible"),this.scrollbarY.classList.remove("visible"),"number"==typeof this.flashTimeout&&window.clearTimeout(this.flashTimeout)}},{key:"recalculate",value:function(){this.enabled&&(this.resizeScrollbar("x"),this.resizeScrollbar("y"),this.options.autoHide||(this.showScrollbar("x"),this.showScrollbar("y")))}},{key:"getScrollElement",value:function(){return this.scrollContentEl}},{key:"getContentElement",value:function(){return this.contentEl}},{key:"unMount",value:function(){this.removeListeners(),this.el.SimpleBar=null}},{key:"isChildNode",value:function(t){return null!==t&&(t===this.el||this.isChildNode(t.parentNode))}}],[{key:"initHtmlApi",value:function(){this.initDOMLoadedElements=this.initDOMLoadedElements.bind(this),"undefined"!=typeof MutationObserver&&(this.globalObserver=new MutationObserver(function(e){e.forEach(function(e){(0,c.default)(e.addedNodes).forEach(function(e){1===e.nodeType&&(e.hasAttribute("data-simplebar")?!e.SimpleBar&&new t(e,t.getElOptions(e)):(0,c.default)(e.querySelectorAll("[data-simplebar]")).forEach(function(e){!e.SimpleBar&&new t(e,t.getElOptions(e))}))}),(0,c.default)(e.removedNodes).forEach(function(t){1===t.nodeType&&(t.hasAttribute("data-simplebar")?t.SimpleBar&&t.SimpleBar.unMount():(0,c.default)(t.querySelectorAll("[data-simplebar]")).forEach(function(t){t.SimpleBar&&t.SimpleBar.unMount()}))})})}),this.globalObserver.observe(document,{childList:!0,subtree:!0})),"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?window.setTimeout(this.initDOMLoadedElements.bind(this)):(document.addEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.addEventListener("load",this.initDOMLoadedElements))}},{key:"getElOptions",value:function(e){var n=(0,o.default)(t.htmlAttributes).reduce(function(n,r){var i=t.htmlAttributes[r];return e.hasAttribute(i)&&(n[r]=JSON.parse(e.getAttribute(i)||!0)),n},{});return n}},{key:"removeObserver",value:function(){this.globalObserver.disconnect()}},{key:"initDOMLoadedElements",value:function(){document.removeEventListener("DOMContentLoaded",this.initDOMLoadedElements),window.removeEventListener("load",this.initDOMLoadedElements),(0,c.default)(document.querySelectorAll("[data-simplebar]")).forEach(function(e){e.SimpleBar||new t(e,t.getElOptions(e))})}},{key:"defaultOptions",get:function(){return{wrapContent:!0,autoHide:!0,forceEnabled:!1,classNames:{content:"simplebar-content",scrollContent:"simplebar-scroll-content",scrollbar:"simplebar-scrollbar",track:"simplebar-track"},scrollbarMinSize:10}}},{key:"htmlAttributes",get:function(){return{autoHide:"data-simplebar-autohide",forceEnabled:"data-simplebar-force-enabled",scrollbarMinSize:"data-simplebar-scrollbar-min-size"}}}]),t}();e.default=E,E.initHtmlApi(),t.exports=e.default},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(25)("wks"),i=n(28),o=n(5).Symbol,s="function"==typeof o,c=t.exports=function(t){return r[t]||(r[t]=s&&o[t]||(s?o:i)("Symbol."+t))};c.store=r},function(t,e,n){t.exports=!n(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(5),i=n(1),o=n(20),s=n(10),c="prototype",a=function(t,e,n){var u,l,f,h=t&a.F,d=t&a.G,p=t&a.S,v=t&a.P,b=t&a.B,y=t&a.W,m=d?i:i[e]||(i[e]={}),g=m[c],E=d?r:p?r[e]:(r[e]||{})[c];d&&(n=e);for(u in n)l=!h&&E&&void 0!==E[u],l&&u in m||(f=l?E[u]:n[u],m[u]=d&&"function"!=typeof E[u]?n[u]:b&&l?o(f,r):y&&E[u]==f?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((m.virtual||(m.virtual={}))[u]=f,t&a.R&&g&&!g[u]&&s(g,u,f)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(7),i=n(44),o=n(62),s=Object.defineProperty;e.f=n(3)?Object.defineProperty:function(t,e,n){if(r(t),e=o(e,!0),r(n),i)try{return s(t,e,n)}catch(c){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(13);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(6),i=n(16);t.exports=n(3)?function(t,e,n){return r.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(12);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports={}},function(t,e,n){var r=n(56),i=n(22);t.exports=Object.keys||function(t){return r(t,i)}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(25)("keys"),i=n(28);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(39);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,i){return t.call(e,n,r,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(13),i=n(5).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var r=n(19);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(6).f,i=n(9),o=n(2)("toStringTag");t.exports=function(t,e,n){t&&!i(t=n?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},function(t,e,n){var r=n(5),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e,n){var r=n(23),i=n(12);t.exports=function(t){return r(i(t))}},function(t,e,n){var r=n(18),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e,n){t.exports={"default":n(35),__esModule:!0}},function(t,e,n){t.exports={"default":n(36),__esModule:!0}},function(t,e,n){t.exports={"default":n(37),__esModule:!0}},function(t,e,n){t.exports={"default":n(38),__esModule:!0}},function(t,e){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var i=n(31),o=r(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){n(68),n(64),t.exports=n(1).Array.from},function(t,e,n){n(65),t.exports=n(1).Object.assign},function(t,e,n){n(66);var r=n(1).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){n(67),t.exports=n(1).Object.keys},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(26),i=n(27),o=n(61);t.exports=function(t){return function(e,n,s){var c,a=r(e),u=i(a.length),l=o(s,u);if(t&&n!=n){for(;u>l;)if(c=a[l++],c!=c)return!0}else for(;u>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e,n){var r=n(19),i=n(2)("toStringTag"),o="Arguments"==r(function(){return arguments}()),s=function(t,e){try{return t[e]}catch(n){}};t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=s(e=Object(t),i))?n:o?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){"use strict";var r=n(6),i=n(16);t.exports=function(t,e,n){e in t?r.f(t,e,i(0,n)):t[e]=n}},function(t,e,n){t.exports=n(5).document&&document.documentElement},function(t,e,n){t.exports=!n(3)&&!n(8)(function(){return 7!=Object.defineProperty(n(21)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(14),i=n(2)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||o[i]===t)}},function(t,e,n){var r=n(7);t.exports=function(t,e,n,i){try{return i?e(r(n)[0],n[1]):e(n)}catch(o){var s=t.return;throw void 0!==s&&r(s.call(t)),o}}},function(t,e,n){"use strict";var r=n(52),i=n(16),o=n(24),s={};n(10)(s,n(2)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(s,{next:i(1,n)}),o(t,e+" Iterator")}},function(t,e,n){"use strict";var r=n(50),i=n(4),o=n(59),s=n(10),c=n(9),a=n(14),u=n(47),l=n(24),f=n(55),h=n(2)("iterator"),d=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",b="values",y=function(){return this};t.exports=function(t,e,n,m,g,E,_){u(n,e,m);var x,O,w,S=function(t){if(!d&&t in j)return j[t];switch(t){case v:return function(){return new n(this,t)};case b:return function(){return new n(this,t)}}return function(){return new n(this,t)}},M=e+" Iterator",A=g==b,k=!1,j=t.prototype,C=j[h]||j[p]||g&&j[g],L=C||S(g),T=g?A?S("entries"):L:void 0,D="Array"==e?j.entries||C:C;if(D&&(w=f(D.call(new t)),w!==Object.prototype&&(l(w,M,!0),r||c(w,h)||s(w,h,y))),A&&C&&C.name!==b&&(k=!0,L=function(){return C.call(this)}),r&&!_||!d&&!k&&j[h]||s(j,h,L),a[e]=L,a[M]=y,g)if(x={values:A?L:S(b),keys:E?L:S(v),entries:T},_)for(O in x)O in j||o(j,O,x[O]);else i(i.P+i.F*(d||k),e,x);return x}},function(t,e,n){var r=n(2)("iterator"),i=!1;try{var o=[7][r]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(s){}t.exports=function(t,e){if(!e&&!i)return!1;var n=!1;try{var o=[7],s=o[r]();s.next=function(){return{done:n=!0}},o[r]=function(){return s},t(o)}catch(c){}return n}},function(t,e){t.exports=!0},function(t,e,n){"use strict";var r=n(15),i=n(54),o=n(57),s=n(11),c=n(23),a=Object.assign;t.exports=!a||n(8)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=r})?function(t,e){for(var n=s(t),a=arguments.length,u=1,l=i.f,f=o.f;a>u;)for(var h,d=c(arguments[u++]),p=l?r(d).concat(l(d)):r(d),v=p.length,b=0;v>b;)f.call(d,h=p[b++])&&(n[h]=d[h]);return n}:a},function(t,e,n){var r=n(7),i=n(53),o=n(22),s=n(17)("IE_PROTO"),c=function(){},a="prototype",u=function(){var t,e=n(21)("iframe"),r=o.length,i="<",s=">";for(e.style.display="none",n(43).appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+s+"document.F=Object"+i+"/script"+s),t.close(),u=t.F;r--;)delete u[a][o[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[a]=r(t),n=new c,c[a]=null,n[s]=t):n=u(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(6),i=n(7),o=n(15);t.exports=n(3)?Object.defineProperties:function(t,e){i(t);for(var n,s=o(e),c=s.length,a=0;c>a;)r.f(t,n=s[a++],e[n]);return t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(9),i=n(11),o=n(17)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},function(t,e,n){var r=n(9),i=n(26),o=n(40)(!1),s=n(17)("IE_PROTO");t.exports=function(t,e){var n,c=i(t),a=0,u=[];for(n in c)n!=s&&r(c,n)&&u.push(n);for(;e.length>a;)r(c,n=e[a++])&&(~o(u,n)||u.push(n));return u}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){var r=n(4),i=n(1),o=n(8);t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],s={};s[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",s)}},function(t,e,n){t.exports=n(10)},function(t,e,n){var r=n(18),i=n(12);t.exports=function(t){return function(e,n){var o,s,c=String(i(e)),a=r(n),u=c.length;return a<0||a>=u?t?"":void 0:(o=c.charCodeAt(a),o<55296||o>56319||a+1===u||(s=c.charCodeAt(a+1))<56320||s>57343?t?c.charAt(a):o:t?c.slice(a,a+2):(o-55296<<10)+(s-56320)+65536)}}},function(t,e,n){var r=n(18),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},function(t,e,n){var r=n(13);t.exports=function(t,e){if(!r(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!r(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!r(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r=n(41),i=n(2)("iterator"),o=n(14);t.exports=n(1).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){"use strict";var r=n(20),i=n(4),o=n(11),s=n(46),c=n(45),a=n(27),u=n(42),l=n(63);i(i.S+i.F*!n(49)(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,i,f,h=o(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,b=void 0!==v,y=0,m=l(h);if(b&&(v=r(v,p>2?arguments[2]:void 0,2)),void 0==m||d==Array&&c(m))for(e=a(h.length),n=new d(e);e>y;y++)u(n,y,b?v(h[y],y):h[y]);else for(f=m.call(h),n=new d;!(i=f.next()).done;y++)u(n,y,b?s(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(51)})},function(t,e,n){var r=n(4);r(r.S+r.F*!n(3),"Object",{defineProperty:n(6).f})},function(t,e,n){var r=n(11),i=n(15);n(58)("keys",function(){return function(t){return i(r(t))}})},function(t,e,n){"use strict";var r=n(60)(!0);n(48)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e){},function(t,e){(function(e){function n(t,e,n){function i(e){var n=v,r=b;return v=b=void 0,w=e,m=t.apply(r,n)}function o(t){return w=t,g=setTimeout(l,e),S?i(t):m}function a(t){var n=t-O,r=t-w,i=e-n;return M?_(i,y-r):i}function u(t){var n=t-O,r=t-w;return void 0===O||n>=e||n<0||M&&r>=y}function l(){var t=x();return u(t)?f(t):void(g=setTimeout(l,a(t)))}function f(t){return g=void 0,A&&v?i(t):(v=b=void 0,m)}function h(){void 0!==g&&clearTimeout(g),w=0,v=O=b=g=void 0}function d(){return void 0===g?m:f(x())}function p(){var t=x(),n=u(t);if(v=arguments,b=this,O=t,n){if(void 0===g)return o(O);if(M)return g=setTimeout(l,e),i(O)}return void 0===g&&(g=setTimeout(l,e)),m}var v,b,y,m,g,O,w=0,S=!1,M=!1,A=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(S=!!n.leading,M="maxWait"in n,y=M?E(s(n.maxWait)||0,e):y,A="trailing"in n?!!n.trailing:A),p.cancel=h,p.flush=d,p}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function i(t){return!!t&&"object"==typeof t}function o(t){return"symbol"==typeof t||i(t)&&g.call(t)==u}function s(t){if("number"==typeof t)return t;if(o(t))return a;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):f.test(t)?a:+t}var c="Expected a function",a=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,b="object"==typeof self&&self&&self.Object===Object&&self,y=v||b||Function("return this")(),m=Object.prototype,g=m.toString,E=Math.max,_=Math.min,x=function(){return y.Date.now()};t.exports=n}).call(e,function(){return this}())},function(t,e,n){(function(e){!function(e,n){t.exports=n()}(this,function(){"use strict";function t(t){return parseFloat(t)||0}function n(e){var n=Array.prototype.slice.call(arguments,1);return n.reduce(function(n,r){var i=e["border-"+r+"-width"];return n+t(i)},0)}function r(e){for(var n=["top","right","bottom","left"],r={},i=0,o=n;i<o.length;i+=1){var s=o[i],c=e["padding-"+s];r[s]=t(c)}return r}function i(t){var e=t.getBBox();return u(0,0,e.width,e.height)}function o(e){var i=e.clientWidth,o=e.clientHeight;if(!i&&!o)return x;var c=getComputedStyle(e),a=r(c),l=a.left+a.right,f=a.top+a.bottom,h=t(c.width),d=t(c.height);if("border-box"===c.boxSizing&&(Math.round(h+l)!==i&&(h-=n(c,"left","right")+l),Math.round(d+f)!==o&&(d-=n(c,"top","bottom")+f)),!s(e)){var p=Math.round(h+l)-i,v=Math.round(d+f)-o;1!==Math.abs(p)&&(h-=p),1!==Math.abs(v)&&(d-=v)}return u(a.left,a.top,h,d)}function s(t){return t===document.documentElement}function c(t){return h?O(t)?i(t):o(t):x}function a(t){var e=t.x,n=t.y,r=t.width,i=t.height,o="function"==typeof DOMRectReadOnly?DOMRectReadOnly:Object,s=Object.create(o.prototype);return _(s,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),s}function u(t,e,n,r){return{x:t,y:e,width:n,height:r}}var l=function(){return"undefined"!=typeof e&&e.Math===Math?e:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")()}(),f=function(){function t(t,e){var n=-1;return t.some(function(t,r){return t[0]===e&&(n=r,!0)}),n}return"function"==typeof l.Map?l.Map:function(){function e(){this.__entries__=[]}var n={size:{}};return n.size.get=function(){return this.__entries__.length},e.prototype.get=function(e){var n=t(this.__entries__,e),r=this.__entries__[n];return r&&r[1]},e.prototype.set=function(e,n){var r=t(this.__entries__,e);~r?this.__entries__[r][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,r=t(n,e);~r&&n.splice(r,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){var n=this;void 0===e&&(e=null);for(var r=0,i=n.__entries__;r<i.length;r+=1){var o=i[r];t.call(e,o[1],o[0])}},Object.defineProperties(e.prototype,n),e}()}(),h=l.window===l&&"undefined"!=typeof document,d=function(){return"function"==typeof requestAnimationFrame?requestAnimationFrame:function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),p=2,v=function(){var t=Date;return"object"==typeof performance&&"function"==typeof performance.now&&(t=performance),function(){return t.now()}}(),b=function(t,e,n){function r(){s=!1,t(),c&&o()}function i(){n?d(r):r()}function o(){var t=v();if(s){if(t-a<p)return;c=!0}else s=!0,c=!1,setTimeout(i,e);a=t}void 0===n&&(n=!1);var s=!1,c=!1,a=0;return o},y=20,m=80,g="function"==typeof MutationObserver&&"object"==typeof navigator&&!("Netscape"===navigator.appName&&navigator.userAgent.match(/Trident\/.*rv:11/)),E=function(){this.isCycleContinuous_=!g,this.listenersEnabled_=!1,this.mutationsObserver_=null,this.observers_=[],this.refresh=b(this.refresh.bind(this),y,!0),this.continuousUpdateHandler_=b(this.refresh,m)};E.prototype.connect=function(t){this.isConnected(t)||this.observers_.push(t),this.listenersEnabled_||this.addListeners_()},E.prototype.disconnect=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.listenersEnabled_&&this.removeListeners_()},E.prototype.isConnected=function(t){return!!~this.observers_.indexOf(t)},E.prototype.refresh=function(){var t=this.updateObservers_();t?this.refresh():this.isCycleContinuous_&&this.listenersEnabled_&&this.continuousUpdateHandler_()},E.prototype.updateObservers_=function(){var t=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return t.forEach(function(t){return t.broadcastActive()}),t.length>0},E.prototype.addListeners_=function(){h&&!this.listenersEnabled_&&(window.addEventListener("resize",this.refresh),document.addEventListener("transitionend",this.refresh),g&&(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})),this.listenersEnabled_=!0,this.isCycleContinuous_&&this.refresh())},E.prototype.removeListeners_=function(){h&&this.listenersEnabled_&&(window.removeEventListener("resize",this.refresh),document.removeEventListener("transitionend",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationsObserver_=null,this.listenersEnabled_=!1)};var _=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n+=1){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerbale:!1,writable:!1,configurable:!0})}return t},x=u(0,0,0,0),O=function(){return"function"==typeof SVGGraphicsElement?function(t){return t instanceof SVGGraphicsElement}:function(t){return t instanceof SVGElement&&"function"==typeof t.getBBox}}(),w=function(t){this.target=t,this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=u(0,0,0,0)};w.prototype.isActive=function(){var t=c(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},w.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t};var S=function(t,e){var n=a(e);_(this,{target:t,contentRect:n})},M=function(t,e,n){if("function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.activeTargets_=[],this.observationTargets_=new f,this.callback_=t,this.controller_=e,this.callbackCtx_=n};M.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("Element"in l&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observationTargets_;e.has(t)||(e.set(t,new w(t)),this.controller_.isConnected(this)||this.controller_.connect(this),this.controller_.refresh())}},M.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("Element"in l&&Element instanceof Object){if(!(t instanceof Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observationTargets_;e.has(t)&&(e.delete(t),e.size||this.controller_.disconnect(this))}},M.prototype.disconnect=function(){this.clearActive(),this.observationTargets_.clear(),this.controller_.disconnect(this)},M.prototype.gatherActive=function(){this.clearActive();var t=this.activeTargets_;this.observationTargets_.forEach(function(e){e.isActive()&&t.push(e)})},M.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeTargets_.map(function(t){return new S(t.target,t.broadcastRect())});this.callback_.call(t,e,t),this.clearActive()}},M.prototype.clearActive=function(){this.activeTargets_.splice(0)},M.prototype.hasActive=function(){return this.activeTargets_.length>0};var A=new E,k="function"==typeof WeakMap?new WeakMap:new f,j=function(t){if(!(this instanceof j))throw new TypeError("Cannot call a class as a function");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var e=new M(t,A,this);k.set(this,e)};["observe","unobserve","disconnect"].forEach(function(t){j.prototype[t]=function(){var e;return(e=k.get(this))[t].apply(e,arguments)}});var C=function(){return"function"==typeof l.ResizeObserver?l.ResizeObserver:j}();return C})}).call(e,function(){return this}())},function(t,e,n){var r,i,o;/*! scrollbarWidth.js v0.1.0 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
!function(n,s){i=[],r=s,o="function"==typeof r?r.apply(e,i):r,!(void 0!==o&&(t.exports=o))}(this,function(){"use strict";function t(){var t,e=document.body,n=document.createElement("div"),r=n.style;return r.position="absolute",r.top=r.left="-9999px",r.width=r.height="100px",r.overflow="scroll",e.appendChild(n),t=n.offsetWidth-n.clientWidth,e.removeChild(n),t}return t})}])});

!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){b.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],2:[function(a,b,c){(function(c){"use strict";function colorcolor(b){var c=arguments.length<=1||void 0===arguments[1]?"rgba":arguments[1],i=!(arguments.length<=2||void 0===arguments[2])&&arguments[2];b=b.toLowerCase(),c=c.toLowerCase();var j,l,m,n,o=b,p=a("color-name"),q=4,r={rgb:{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],toRGBA:function(a){return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),1]}},rgba:{re:/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,example:["rgba(123, 234, 45, 1)","rgba(255,234,245, 0.5)"],toRGBA:function(a){return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10),parseFloat(a[4])]}},hex:{re:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["00ff00","336699"],toRGBA:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),1]}},hex3:{re:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["fb0","f0f"],toRGBA:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),1]}},hexa:{re:/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,example:["00ff00ff","336699a0"],toRGBA:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16),parseInt(a[4],16)/255]}},hex4a:{re:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,example:["fb0f","f0f8"],toRGBA:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16),parseInt(a[4]+a[4],16)/255]}},hsl:{re:/^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsl(120, 100%, 25%)","hsl(0, 100%, 50%)"],toRGBA:function(a){a[4]=1;var b=e(a);return[b.r,b.g,b.b,b.a]}},hsla:{re:/^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,example:["hsla(120, 100%, 25%, 1)","hsla(0, 100%, 50%, 0.5)"],toRGBA:function(a){var b=e(a);return[b.r,b.g,b.b,b.a]}},hsv:{re:/^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsv(120, 100%, 25%)","hsv(0, 100%, 50%)"],toRGBA:function(a){var b=g(a);return[b.r,b.g,b.b,1]}},hsb:{re:/^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,example:["hsb(120, 100%, 25%)","hsb(0, 100%, 50%)"],toRGBA:function(a){var b=g(a);return[b.r,b.g,b.b,1]}}};p.hasOwnProperty(b)&&(b=p[b],b.forEach(function(a,c){b[c]=("0"+a.toString(16)).slice(-2)}),b="#"+b.join(""));for(var s in r){var t=r[s].re,u=r[s].toRGBA,v=t.exec(b);if(v){var w=u(v);j=w[0],l=w[1],m=w[2],n=+(Math.round(w[3]+("e+"+q))+("e-"+q))}}switch(j=Math.round(j<0||isNaN(j)?0:j>255?255:j),l=Math.round(l<0||isNaN(l)?0:l>255?255:l),m=Math.round(m<0||isNaN(m)?0:m>255?255:m),n=n<0||isNaN(n)?0:n>1?1:n,c){case"hex":o="#"+("0"+j.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)+("0"+m.toString(16)).slice(-2);break;case"hexa":if(i){var x=d(j,l,m,n),y=k(x,4);j=y[0],l=y[1],m=y[2],n=y[3]}o="#"+("0"+j.toString(16)).slice(-2)+("0"+l.toString(16)).slice(-2)+("0"+m.toString(16)).slice(-2)+("0"+Math.round(255*n).toString(16)).slice(-2);break;case"hsl":var z=f({r:j,g:l,b:m});o="hsl("+z.h+","+z.s+"%,"+z.l+"%)";break;case"hsla":if(i){var A=d(j,l,m,n),B=k(A,4);j=B[0],l=B[1],m=B[2],n=B[3]}var C=f({r:j,g:l,b:m,a:n});o="hsla("+C.h+","+C.s+"%,"+C.l+"%,"+C.a+")";break;case"hsb":var D=h({r:j,g:l,b:m});o="hsb("+D.h+","+D.s+"%,"+D.v+"%)";break;case"hsv":var E=h({r:j,g:l,b:m});o="hsv("+E.h+","+E.s+"%,"+E.v+"%)";break;case"rgb":o="rgb("+j+","+l+","+m+")";break;case"rgba":default:if(i){var F=d(j,l,m,n),G=k(F,4);j=G[0],l=G[1],m=G[2],n=G[3]}o="rgba("+j+","+l+","+m+","+n+")"}return o}function d(a,b,c,d){var e=0;return d=(255-(e=Math.min(a,b,c)))/255,a=((a-e)/d).toFixed(0),b=((b-e)/d).toFixed(0),c=((c-e)/d).toFixed(0),d=parseFloat(d.toFixed(4)),[a,b,c,d]}function e(a){var b={},c={h:a[1]/360,s:a[2]/100,l:a[3]/100,a:parseFloat(a[4])};if(0===c.s){var d=255*c.l;b={r:d,g:d,b:d,a:c.a}}else{var e=c.l<.5?c.l*(1+c.s):c.l+c.s-c.l*c.s,f=2*c.l-e;b.r=255*i(f,e,c.h+1/3),b.g=255*i(f,e,c.h),b.b=255*i(f,e,c.h-1/3),b.a=c.a}return b}function f(a){a.r=a.r/255,a.g=a.g/255,a.b=a.b/255;var b,c=Math.max(a.r,a.g,a.b),d=Math.min(a.r,a.g,a.b),e=[];if(e.a=a.a,e.l=(c+d)/2,c===d)e.h=0,e.s=0;else{switch(b=c-d,e.s=e.l>=.5?b/(2-c-d):b/(c+d),c){case a.r:e.h=(a.g-a.b)/b+(a.g<a.b?6:0);break;case a.g:e.h=(a.b-a.r)/b+2;break;case a.b:e.h=(a.r-a.g)/b+4}e.h/=6}return e.h=parseInt((360*e.h).toFixed(0),10),e.s=parseInt((100*e.s).toFixed(0),10),e.l=parseInt((100*e.l).toFixed(0),10),e}function g(a){var b={},c={h:a[1]/360,s:a[2]/100,v:a[3]/100},d=Math.floor(6*c.h),e=6*c.h-d,f=c.v*(1-c.s),g=c.v*(1-e*c.s),h=c.v*(1-(1-e)*c.s);switch(d%6){case 0:b.r=c.v,b.g=h,b.b=f;break;case 1:b.r=g,b.g=c.v,b.b=f;break;case 2:b.r=f,b.g=c.v,b.b=h;break;case 3:b.r=f,b.g=g,b.b=c.v;break;case 4:b.r=h,b.g=f,b.b=c.v;break;case 5:b.r=c.v,b.g=f,b.b=g}return b.r=255*b.r,b.g=255*b.g,b.b=255*b.b,b}function h(a){a.r=j(parseInt(a.r,10)%256,256),a.g=j(parseInt(a.g,10)%256,256),a.b=j(parseInt(a.b,10)%256,256);var b=Math.max(a.r,a.g,a.b),c=Math.min(a.r,a.g,a.b),d=b-c,e={h:0,s:0===b?0:d/b,v:b};if(b!==c){switch(b){case a.r:e.h=(a.g-a.b)/d+(a.g<a.b?6:0);break;case a.g:e.h=(a.b-a.r)/d+2;break;case a.b:e.h=(a.r-a.g)/d+4}e.h/=6}return e.h=parseInt((360*e.h).toFixed(0),10),e.s=parseInt((100*e.s).toFixed(0),10),e.v=parseInt((100*e.v).toFixed(0),10),e}function i(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+6*(b-a)*c:c<.5?b:c<2/3?a+(b-a)*(6*(2/3-c)):a}function j(a,b){return a/b}var k=function(){function a(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(i){e=!0,f=i}finally{try{!d&&h["return"]&&h["return"]()}finally{if(e)throw f}}return c}return function(b,c){if(Array.isArray(b))return b;if(Symbol.iterator in Object(b))return a(b,c);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();b.exports=colorcolor,c.colorcolor=b.exports}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"color-name":1}]},{},[2]);
//# sourceMappingURL=colorcolor.min.js.map


/*!
 * clipboard.js v1.5.8
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[a]={exports:{}};e[a][0].call(l.exports,function(t){var n=e[a][1][t];return o(n?n:t)},l,l.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){var r=t("matches-selector");e.exports=function(t,e,n){for(var o=n?t:t.parentNode;o&&o!==document;){if(r(o,e))return o;o=o.parentNode}}},{"matches-selector":5}],2:[function(t,e,n){function r(t,e,n,r,i){var a=o.apply(this,arguments);return t.addEventListener(n,a,i),{destroy:function(){t.removeEventListener(n,a,i)}}}function o(t,e,n,r){return function(n){n.delegateTarget=i(n.target,e,!0),n.delegateTarget&&r.call(t,n)}}var i=t("closest");e.exports=r},{closest:1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},{}],4:[function(t,e,n){function r(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!s.string(e))throw new TypeError("Second argument must be a String");if(!s.fn(n))throw new TypeError("Third argument must be a Function");if(s.node(t))return o(t,e,n);if(s.nodeList(t))return i(t,e,n);if(s.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function o(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function i(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return c(document.body,t,e,n)}var s=t("./is"),c=t("delegate");e.exports=r},{"./is":3,delegate:2}],5:[function(t,e,n){function r(t,e){if(i)return i.call(t,e);for(var n=t.parentNode.querySelectorAll(e),r=0;r<n.length;++r)if(n[r]==t)return!0;return!1}var o=Element.prototype,i=o.matchesSelector||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector;e.exports=r},{}],6:[function(t,e,n){function r(t){var e;if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName)t.focus(),t.setSelectionRange(0,t.value.length),e=t.value;else{t.hasAttribute("contenteditable")&&t.focus();var n=window.getSelection(),r=document.createRange();r.selectNodeContents(t),n.removeAllRanges(),n.addRange(r),e=n.toString()}return e}e.exports=r},{}],7:[function(t,e,n){function r(){}r.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function r(){o.off(t,r),e.apply(n,arguments)}var o=this;return r._=e,this.on(t,r,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;o>r;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;a>i;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},e.exports=r},{}],8:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.__esModule=!0;var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=t("select"),s=r(a),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return t.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action=e.action,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""},t.prototype.initSelection=function t(){if(this.text&&this.target)throw new Error('Multiple attributes declared, use either "target" or "text"');if(this.text)this.selectFake();else{if(!this.target)throw new Error('Missing required attributes, use either "target" or "text"');this.selectTarget()}},t.prototype.selectFake=function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandler=document.body.addEventListener("click",function(){return e.removeFake()}),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,document.body.appendChild(this.fakeElem),this.selectedText=s.default(this.fakeElem),this.copyText()},t.prototype.removeFake=function t(){this.fakeHandler&&(document.body.removeEventListener("click"),this.fakeHandler=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)},t.prototype.selectTarget=function t(){this.selectedText=s.default(this.target),this.copyText()},t.prototype.copyText=function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(n){e=!1}this.handleResult(e)},t.prototype.handleResult=function t(e){e?this.emitter.emit("success",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)}):this.emitter.emit("error",{action:this.action,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})},t.prototype.clearSelection=function t(){this.target&&this.target.blur(),window.getSelection().removeAllRanges()},t.prototype.destroy=function t(){this.removeFake()},i(t,[{key:"action",set:function t(){var e=arguments.length<=0||void 0===arguments[0]?"copy":arguments[0];if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!=typeof e||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');this._target=e}},get:function t(){return this._target}}]),t}();n.default=c,e.exports=n.default},{select:6}],9:[function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}n.__esModule=!0;var s=t("./clipboard-action"),c=r(s),u=t("tiny-emitter"),l=r(u),f=t("good-listener"),d=r(f),h=function(t){function e(n,r){o(this,e),t.call(this),this.resolveOptions(r),this.listenClick(n)}return i(e,t),e.prototype.resolveOptions=function t(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText},e.prototype.listenClick=function t(e){var n=this;this.listener=d.default(e,"click",function(t){return n.onClick(t)})},e.prototype.onClick=function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new c.default({action:this.action(n),target:this.target(n),text:this.text(n),trigger:n,emitter:this})},e.prototype.defaultAction=function t(e){return a("action",e)},e.prototype.defaultTarget=function t(e){var n=a("target",e);return n?document.querySelector(n):void 0},e.prototype.defaultText=function t(e){return a("text",e)},e.prototype.destroy=function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)},e}(l.default);n.default=h,e.exports=n.default},{"./clipboard-action":8,"good-listener":4,"tiny-emitter":7}]},{},[9])(9)});


/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


var colors = new Array(
  [62, 35, 255],
  [60, 255, 60],
  [255, 35, 98],
  [45, 175, 230],
  [255, 0, 255],
  [255, 128, 0]
);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {
  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $(".whatisgolo, .intro-splash-golo > span")
    .css({
      background: "-webkit-linear-gradient(to right, "+color1+", "+color2+")",
    })
    .css({
      background: "linear-gradient(to right, "+color1+", "+color2+")"
    });

  $(".path")
    .css({
      stroke: color1
    });

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] =
      (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
    colorIndices[3] =
      (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) %
      colors.length;
  }
}
setInterval(updateGradient, 10);

var splashdowncolors = ["#5fd7ec", "#fbb56b", "#bad64e", "#fb7171", "#48d8b1"];
$(".intro-splash-down").css("background",splashdowncolors[Math.floor(Math.random()*splashdowncolors.length)]);

var fabrandomcolors = ["#fb7171", "#45c2c3", "#53b742", "#7a6bef", "#ec973c"];
$(".mobile-fab").css("background",fabrandomcolors[Math.floor(Math.random()*fabrandomcolors.length)]);

localStorage.removeItem("newChangelog-1");

//definitions
$(function() {
  var slickOpts = {
    useTransform: true,
    cssEase: 'none',
    infinite: false,
    adaptiveHeight:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          draggable: true,
          useTransform: false,
          cssEase: 'ease',
        }
      }
    ]
    };
  // Init the slick
  $('#tourppa').slick(slickOpts);
  var slickEnabled = true;
});

//Database
var idbSupported = false;
var db;

document.addEventListener("DOMContentLoaded", function(){
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

  if("indexedDB" in window) {
      idbSupported = true;
  }

  if(idbSupported) {
      var openRequest = indexedDB.open("palettesDB",1);

      openRequest.onupgradeneeded = function(e) {
          console.log("Initializing Palettes Database...");
          var thisDB = e.target.result;

          if(!thisDB.objectStoreNames.contains("palettes")) {
              var objectStore = thisDB.createObjectStore("palettes", { autoIncrement: true });
              objectStore.createIndex("paletteURL","paletteURL", {unique:true});
          }

      }

      openRequest.onsuccess = function(e) {
          console.log("Palettes Database Is Ready!");
          db = e.target.result;

          //read records
          readpalattes();
      }

      openRequest.onerror = function(e) {
          console.log("Palettes Database Cannot Be Created!");
          console.dir(e);
      }
  }
  else {
    console.log("Your browser is too old for this sh*t!");
  }
 
},false);


//read all palettes from the database
function readpalattes() {
  var openRequest = indexedDB.open("palettesDB");

  openRequest.onsuccess = function(e) {
      console.log("Loading Palettes From Database...");
      db = e.target.result;

      $('.emptyambox').css('display', 'block');

      //read records
      var transaction = db.transaction('palettes', IDBTransaction.READ_ONLY);
      var objectStore = transaction.objectStore('palettes');

      objectStore.openCursor(null, 'prev').onsuccess = function(event) {
        var cursor = event.target.result;
        if (cursor) {

          $('.emptyambox').css('display', 'none');

          $("#ambianceboxcolors").append("<div class=\"boxpalatte\" id=\"box-palatte-"+cursor.key+"\"><div class=\"boxpalattetitle\"><span class=\"boxtitlelink\"><a href=\""+cursor.value.paletteURL+"\" class=\"boxpalattetitlelink\" title=\""+cursor.value.palettename+"\" target=\"_blank\">"+cursor.value.palettename+"</a></span><span title=\"Remove From Ambiance Box\"><i class=\"material-icons nosel\" id=\"removefrombox-"+cursor.key+"\" onclick=\"removepalatte("+cursor.key+");\">remove_circle</i></span></div><div class=\"boxpalattecontainer\"><div class=\"boxpalattecolor boxpalattecolor-1\" id=\"boxpalattecolor-1\" style=\"background: "+cursor.value.hex.hex1+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex1+"');\" data-clipboard-text=\""+cursor.value.hex.hex1+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex1+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex1, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex1+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex1, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-2\" id=\"boxpalattecolor-2\" style=\"background: "+cursor.value.hex.hex2+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex2+"');\" data-clipboard-text=\""+cursor.value.hex.hex2+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex2+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex2, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex2+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex2, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-3\" id=\"boxpalattecolor-3\" style=\"background: "+cursor.value.hex.hex3+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex3+"');\" data-clipboard-text=\""+cursor.value.hex.hex3+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex3+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex3, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex3+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex3, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-4\" id=\"boxpalattecolor-4\" style=\"background: "+cursor.value.hex.hex4+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex4+"');\" data-clipboard-text=\""+cursor.value.hex.hex4+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex4+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex4, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex4+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex4, "hsl")+"\">HSL</span></div></div><div class=\"boxpalattecolor boxpalattecolor-5\" id=\"boxpalattecolor-5\" style=\"background: "+cursor.value.hex.hex5+"\"><div class=\"boxhexcopy nosel\"><i class=\"fa fa-clone amboxcopy\" aria-hidden=\"true\" title=\"Copy Hex\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex5+"');\" data-clipboard-text=\""+cursor.value.hex.hex5+"\"></i></div><div class=\"boxcolorformats nosel\"><span class=\"boxrgbcopy amboxcopy\" title=\"Copy RGB\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex5+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex5, "rgb")+"\">RGB</span><span class=\"boxhslcopy amboxcopy\" title=\"Copy HSL\" onclick=\"amboxnotifytrigger('"+cursor.value.hex.hex5+"');\" data-clipboard-text=\""+colorcolor(cursor.value.hex.hex5, "hsl")+"\">HSL</span></div></div></div></div>");
            cursor.continue();
        } else {
            console.log("All Palettes Loaded.");
        }
      }//cursor

  }

  openRequest.onerror = function(e) {
      console.log("Palettes Database Cannot Be Created!");
      console.dir(e);
  }
}//readpalattes()


function removepalatte(getpalid) {
    var palid = getpalid;

    var request = db.transaction(["palettes"], "readwrite").objectStore("palettes").delete(palid);

    request.onsuccess = function(event) {
      console.log("Palette Removed From Database.");
      $("#ambianceboxcolors").children('.boxpalatte').remove();
      readpalattes();
    }

}

//clipboard
var clipboard = new Clipboard('.copy-trigger, .amboxcopy');

clipboard.on('error', function(e) {
  console.log(e);
});

//disable scrolls
var keys = {
  33: 1,
  34: 1,
  35: 1,
  36: 1,
  37: 1,
  38: 1,
  39: 1,
  40: 1
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
    e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener) // older FF
    window.addEventListener('mousewheel DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;

  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];

  $(window).bind('scroll', function() {
    lockscrollbar(scrollPosition[0], scrollPosition[1]);
  });

}

function disablekeyScroll() {
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener('mousewheel DOMMouseScroll', preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;

  unlockscrollbar();
}

function disablegrabscroll() {
  var scrollPosition = [
    self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    self.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  ];

  $(window).bind('scroll', function() {
    lockscrollbar(scrollPosition[0], scrollPosition[1]);
  });
}

function enablegrabscroll() {
  unlockscrollbar();
}

function lockscrollbar(xposi, yposi) {
  window.scrollTo(xposi, yposi);
}

function unlockscrollbar() {
  $(window).unbind('scroll');
}


//open info window, info btn click
$('#aboutppa, #mobile-about').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-info').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});


//open ambiance box window, logo btn click
$('.goloppa').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-bucket').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});


//open share window, share btn click
$('#shareppa, #mobile-share').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-share').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});

//open changelog window, changelogtrigger btn click
$('#changelogtrigger').click(function() {
  localStorage.setItem("newChangelog-2","1");
  $('#appinfowindow, #mobile-about').addClass('hiddennew');
  $('.window-overlay').removeClass('hidethis');
  $('#app-info').addClass('hidethis');
  $('#app-changelog').removeClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});

$('#goback-changelog').click(function() {
  $('.window-overlay').removeClass('hidethis');
  $('#app-info').removeClass('hidethis');
  $('#app-changelog').addClass('hidethis');
  disablekeyScroll();
  disablegrabscroll();
});


//close windows
$('.close-window').click(function() {
  $('.window-overlay').addClass('hidethis');
  $('#app-info').addClass('hidethis');
  $('#app-bucket').addClass('hidethis');
  $('#app-share').addClass('hidethis');
  $('#app-changelog').addClass('hidethis');
  enableScroll();
  enablegrabscroll();
});

//refresh colors rotate
var rotation = 0;

jQuery.fn.rotate = function(degrees) {
  $(this).css({
    'transform': 'rotate(' + degrees + 'deg)'
  });
};


//refresh colors click
$("#refreshtrigger, #mobilerefreshfab").click(function() {
  load_data();

var contrastInterval = setInterval(contrast, 0);
var textcontrastInterval = setInterval(textcontrast, 0);
var boxcontrastInterval = setInterval(boxcontrast, 0);
var shadowgeneratorInterval = setInterval(shadowgenerator, 0);

$(document).ready(function(){
  setTimeout(function(){
    clearInterval(contrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(shadowgeneratorInterval);
   }, 1000);
});

  rotation += 360;
  $('#refreshicon').rotate(rotation);
  $('#mobilerefreshicon').rotate(rotation);

  setTimeout(function() {
    $("#palatte-1").addClass("cardpump");
  }, 200);

  setTimeout(function() {
    $("#palatte-2").addClass("cardpump");
  }, 300);

  setTimeout(function() {
    $("#palatte-3").addClass("cardpump");
  }, 350);

  setTimeout(function() {
    $("#palatte-4").addClass("cardpump");
  }, 375);

  setTimeout(function() {
    $("#palatte-5").addClass("cardpump");
  }, 387);

  setTimeout(function() {
    $("#palatte-5").removeClass("cardpump");
  }, 587);

  setTimeout(function() {
    $("#palatte-4").removeClass("cardpump");
  }, 487);

  setTimeout(function() {
    $("#palatte-3").removeClass("cardpump");
  }, 437);

  setTimeout(function() {
    $("#palatte-2").removeClass("cardpump");
  }, 412);

  setTimeout(function() {
    $("#palatte-1").removeClass("cardpump");
  }, 400);
});


//load colors initially
load_data();

//colorlovers API JSON
function load_data() {

  var url1 = "http://www.colourlovers.com/api/palettes/random?format=json&jsonCallback=loadColorDone";

  $.ajax({
    type: 'GET',
    url: url1,
    jsonpCallback: "loadColorDone",
    contentType: "application/json",
    dataType: "jsonp",
    success: function(json) {
      loadColorDone(json[0]);
    },
    error: function(e) {
      console.log(e.message);
    }
  });

  function loadColorDone(data) {

    $.each(data.colors, function(index, value) {
      $(".palatte-color" + (index + 1)).css("background", "#" + value);
      $(".color-rgb" + (index + 1)).css("color", "#" + value);
      $(".color-hsl" + (index + 1)).css("color", "#" + value);
      $(".color-value" + (index + 1)).html("#" + value);

      var rgb = colorcolor("#" + value, "rgb");
      $(".color-rgb" + (index + 1)).html("" + rgb);
      var hsl = colorcolor("#" + value, "hsl");
      $(".color-hsl" + (index + 1)).html("" + hsl);

      $(".copydata" + (index + 1)).attr("data-clipboard-text", "#" + value);
    });

    $(".palatte-title").html("<a class=\"bright\" href='" + data.url + "' target='_blank' id=\"palatteName\" title=\"" + data.title + "\">" + data.title + "</a>");
    $(".palatte-byline").html("<a class=\"faded\" href='http://www.colourlovers.com/lover/" + data.userName + "/' target='_blank' id=\"palatteByLine\" title=\"" + data.userName + "\">by <span>" + data.userName + "</span></a>");

  }
}

var contrastInterval = setInterval(contrast, 0);
var textcontrastInterval = setInterval(textcontrast, 0);
var boxcontrastInterval = setInterval(boxcontrast, 0);
var shadowgeneratorInterval = setInterval(shadowgenerator, 0);

$(document).ready(function(){
  setTimeout(function(){
    clearInterval(contrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(textcontrastInterval);
    clearInterval(shadowgeneratorInterval);
   }, 1000);
});

//color contrasts
function contrast() {
  $('.palatte-color').each(function() {
    var color = $(this).css('backgroundColor');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(color);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
    if (o > 125) {
      $(this).css('color', 'rgba(0,0,0,0.7)');
      $(this).find('.copy-trigger > i').css({
        'background': 'rgba(0,0,0,0.3)',
        'color': c
      });
    } else {
      $(this).css('color', 'rgba(255,255,255,0.9)');
      $(this).find('.copy-trigger > i').css({
        'background': 'rgba(255,255,255,0.4)',
        'color': c
      });
    }
  });
}

function textcontrast() {
  $('.color-title').each(function() {
    var textcolor = $(this).css('color');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(textcolor);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);

    if (o > 200) {
      $(this).css('color', 'rgba(0,0,0,0.4)');
    }
  });
}

//color contrasts
function boxcontrast() {
  $('.boxpalattecolor').each(function() {
    var color = $(this).css('backgroundColor');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(color);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
    if (o > 125) {
      $(this).find('.boxrgbcopy, .boxhslcopy').css({
        'background': 'rgba(0,0,0,1)',
        'color': c
      });
      $(this).find('.boxhexcopy > i').css({
        'background': 'rgba(0,0,0,0.3)',
        'color': c
      });
    } else {
      $(this).find('.boxrgbcopy, .boxhslcopy').css({
        'background': 'rgba(255,255,255,1)',
        'color': c
      });
      $(this).find('.boxhexcopy > i').css({
        'background': 'rgba(255,255,255,0.4)',
        'color': c
      });
    }
  });
}

function shadowgenerator() {
  $('.palatte').each(function() {
    var textcolor = $(this).find('.color-title').css('color');
    var regExp = /\(([^)]+)\)/;
    var matches = regExp.exec(textcolor);
    var rgb = matches[1].split(',');
    var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
    var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);

    $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.5)');

    if (o > 125) {
      $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',1)');
    }else if(rgb[0] == 0 && rgb[1] == 0 && rgb[2] == 0) {
      $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.22)');
    }else {
      $(this).css('box-shadow','0px 16px 60px -15px rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',0.5)');
    }

  });
}

//notification clicks
var activeanimation = false;
$('.copy-trigger, #save-palatte, #mobile-save-palette').click(function() {

  if (activeanimation) {
    return;
  }

  if ($(this).attr('whatisthis') == 'copycolor') {
    var copytextcolor = $(this).attr('data-clipboard-text');
    activeanimation = true;

    setTimeout(function(){
     }, 2800);

    $('#notify-copied').html('<i class="fa fa-clone"></i> <span>Noice! Copied To Clipboard.</span>');

    $('#notify-copied').css('background', copytextcolor);

    setTimeout(function() {
      $('#notify-copied').addClass("pull-notifcation notify-anim-active").delay(2000).queue(function() {

        $('#notify-copied').removeClass("pull-notifcation notify-anim-active").dequeue();

        setTimeout(function() {
          $('#notify-copied').removeClass('active-notification');
        }, 250);

        activeanimation = false;

      });
    }, 50);

    setTimeout(function() {
      $('meta[name=theme-color]').remove();
      $('head').append('<meta name="theme-color" content="'+copytextcolor+'">');
    }, 50);

    setTimeout(function() {
      $('meta[name=theme-color]').remove();
      $('head').append('<meta name="theme-color" content="#e3e3e3">');
    }, 2200);

    setTimeout(function() {
      $('#notify-copied').addClass('active-notification');
    }, 0);

    setTimeout(function() {
      $('#notify-copied > i').addClass("notify-anim-adjustments-active").delay(2000).queue(function() {
        $('#notify-copied > i').removeClass("notify-anim-adjustments-active").dequeue();
        activeanimation = false;
      });
    }, 50);

    $('#notify-copied').each(function() {
      var color = $(this).css('backgroundColor');
      var regExp = /\(([^)]+)\)/;
      var matches = regExp.exec(color);
      var rgb = matches[1].split(',');
      var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
      var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
      if (o > 125) {
        $(this).css('color', 'rgba(0,0,0,0.5)');
      } else {
        $(this).css('color', 'rgba(255,255,255,0.95)');
      }
    });
  } //copycolorelement



  if ($(this).attr('whatisthis') == 'savepalatte') {
    //saved notification
    activeanimation = true;

    //add Palette to DB
    var palettename = $("#palatteName").text();
    var paletteURL = $("#palatteName").attr("href");
    var hex1 = $(".color-value1").text();
    var hex2 = $(".color-value2").text();
    var hex3 = $(".color-value3").text();
    var hex4 = $(".color-value4").text();
    var hex5 = $(".color-value5").text();
 
    //Connect DB
    var transaction = db.transaction(["palettes"],"readwrite");
    var store = transaction.objectStore("palettes");
 
    //Define the Palette
    var paletteData = {
        palettename: palettename,
        hex: { hex1: hex1, hex2: hex2, hex3: hex3, hex4: hex4, hex5: hex5 },
        paletteURL: paletteURL
    }
 
    //Perform the add
    var request = store.add(paletteData);
 
    //Error Adding Palette
    request.onerror = function(e) {
        console.log("This is a really nice",e.target.error.name);

        if (e.target.error.name == "ConstraintError") {
          $('#notify-copied').html('<i class="material-icons">error</i> <span>Palette Already In The Box.</span>');

          $('#notify-copied').css({
            'background': '#e83149',
            'color': '#ffffff'
          });

          setTimeout(function() {
            $('meta[name=theme-color]').remove();
            $('head').append('<meta name="theme-color" content="#e83149">');
          }, 50);

          setTimeout(function() {
            $('meta[name=theme-color]').remove();
            $('head').append('<meta name="theme-color" content="#e3e3e3">');
          }, 2200);

        }

    }
 
    //Palette Added Successfully
    request.onsuccess = function(e) {
        $('#notify-copied').html('<i class="material-icons">inbox</i> <span>Saved To Ambiance Box.</span>');

        $('#notify-copied').css({
          'background': '#0ec198',
          'color': '#ffffff'
        });

        setTimeout(function() {
          $('meta[name=theme-color]').remove();
          $('head').append('<meta name="theme-color" content="#0ec198">');
        }, 50);

        setTimeout(function() {
          $('meta[name=theme-color]').remove();
          $('head').append('<meta name="theme-color" content="#e3e3e3">');
        }, 2200);

        $("#ambianceboxcolors").children('.boxpalatte').remove();
        readpalattes();
        
    }

    //Activate  Notification Animation
    setTimeout(function() {
      $('#notify-copied').addClass("pull-notifcation notify-anim-active").delay(2000).queue(function() {
        $('#notify-copied').removeClass("pull-notifcation notify-anim-active").dequeue();
        setTimeout(function() {
          $('#notify-copied').removeClass('active-notification');
        }, 250);
        activeanimation = false;

      });
    }, 50);

    setTimeout(function() {
      $('#notify-copied').addClass('active-notification');
    }, 0);

    setTimeout(function() {
      $('#notify-copied > i').addClass("notify-anim-adjustments-active").delay(2000).queue(function() {
        $('#notify-copied > i').removeClass("notify-anim-adjustments-active").dequeue();
        activeanimation = false;
      });
    }, 50);

  } //savepalatteelement

});//copy save click

disablekeyScroll();
disablegrabscroll();

var firstTime = localStorage.getItem("newUser");
var tourdone = localStorage.getItem("setTour");
var changelogchecknotify = localStorage.getItem("newChangelog-2");

if(firstTime) {
  $(".intro-splash-wrapper").remove();
  $(".ppashell").removeClass("hidethis");

  if (tourdone) {
    $('.tour-overlay').remove();
    enableScroll();
    enablegrabscroll();
  }
  else {
    $('.tour-overlay').removeClass('ghostthis');
  }
}

if(changelogchecknotify) {
  $('#appinfowindow, #mobile-about').addClass('hiddennew');
}

$('#yeahsure, #nothanks').click(function(){

    localStorage.setItem("newUser","1");
    var enableTour = $(this).attr("enableT");

    $(".loader").removeClass("hidethis");

    setTimeout(function(){
       $(".loader").fadeOut();
   }, 2000);

    setTimeout(function(){
       $(".ppashell").removeClass("hidethis");
   }, 100);

    setTimeout(function(){
       $(".intro-splash-up").addClass("splash-up-pull");
   }, 2500);

    setTimeout(function(){
       $(".intro-splash-down").addClass("splash-down-pull");
   }, 2800);

    setTimeout(function(){
       $(".intro-splash-wrapper").remove();
   }, 3600);

    if(enableTour == "yes") {
      setTimeout(function(){
          $('.tour-overlay').removeClass('ghostthis');
       }, 100);

      setTimeout(function(){
        $('meta[name=theme-color]').remove();
        $('head').append('<meta name="theme-color" content="#2e2e2e">');
       }, 2800);
    }

    if(enableTour == "no") {
      localStorage.setItem("setTour","1");
      $('.tour-overlay').remove();

      setTimeout(function(){
        enableScroll();
        enablegrabscroll();
     }, 3000);
    }

});

function tourbtnwidthfix() {
  if( $('#tour-ctrl-btn').css('position') == "fixed" )  { 
    var panelwidth = $('.tour-panel').width();
    $('#tour-ctrl-btn').css('width',panelwidth+"px");
  }
  else {
    $('#tour-ctrl-btn').css('width','auto');
  }
}
setInterval(tourbtnwidthfix, 0);

$('#the-tour-btn').click(function(){
  localStorage.setItem("setTour","1");
  $('.tour-overlay').remove();
  $('meta[name=theme-color]').remove();
  $('head').append('<meta name="theme-color" content="#e3e3e3">');
  enableScroll();
  enablegrabscroll();
});

$('#mobilemoretrigger').click(function(){
  $('.mobile-norefresh-menu-wrapper').toggleClass('mobile-extended-menu-pull');
  $('#mobilehorizicon').toggleClass('hidethis');
  $('#mobilecloseicon').toggleClass('hidethis');
});

//box notification
function amboxnotifytrigger(getcolorvalue) { 

  $('.amboxcopynotify').css('background',getcolorvalue);

  var color = $('.amboxcopynotify').css('backgroundColor');
  var regExp = /\(([^)]+)\)/;
  var matches = regExp.exec(color);
  var rgb = matches[1].split(',');
  var c = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
  var o = Math.round(((parseInt(rgb[0]) * 299) + (parseInt(rgb[1]) * 587) + (parseInt(rgb[2]) * 114)) / 1000);
  if (o > 125) {
    $('.amboxcopynotify').css('color', 'rgba(0,0,0,0.6)');
  } else {
    $('.amboxcopynotify').css('color', 'rgba(255,255,255,0.95)');
  }

  $('.amboxcopynotify').show().delay(800).fadeOut();

}