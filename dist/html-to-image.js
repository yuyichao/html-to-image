!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t="undefined"!=typeof globalThis?globalThis:t||self).htmlToImage={})}(this,(function(t){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var n=function(){return n=Object.assign||function(t){for(var n,e=1,r=arguments.length;e<r;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t},n.apply(this,arguments)};function e(t,n,e,r){return new(e||(e=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,c)}a((r=r.apply(t,n||[])).next())}))}function r(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(t){i=[6,t],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}var o="application/font-woff",i="image/jpeg",u={woff:o,woff2:o,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:i,jpeg:i,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"};function c(t){var n=function(t){var n=/\.([^./]*?)$/g.exec(t);return n?n[1]:""}(t).toLowerCase();return u[n]||""}function a(t){return-1!==t.search(/^(data:)/)}function f(t,n){return"data:"+n+";base64,"+t}var s,l=(s=0,function(){return s+=1,"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+s});function h(t){for(var n=[],e=0,r=t.length;e<r;e+=1)n.push(t[e]);return n}function d(t,n){var e=window.getComputedStyle(t).getPropertyValue(n);return parseFloat(e.replace("px",""))}function v(t,n){return void 0===n&&(n={}),t.toBlob?new Promise((function(e){return t.toBlob(e,n.type?n.type:"image/png",n.quality?n.quality:1)})):new Promise((function(e){for(var r=window.atob(t.toDataURL(n.type?n.type:void 0,n.quality?n.quality:void 0).split(",")[1]),o=r.length,i=new Uint8Array(o),u=0;u<o;u+=1)i[u]=r.charCodeAt(u);e(new Blob([i],{type:n.type?n.type:"image/png"}))}))}function p(t){return new Promise((function(n,e){var r=new Image;r.onload=function(){return n(r)},r.onerror=e,r.crossOrigin="anonymous",r.decoding="sync",r.src=t}))}function g(t,n){return void 0===n&&(n=!1),e(this,void 0,void 0,(function(){var e;return r(this,(function(r){return e=Promise.resolve().then((function(){return(new XMLSerializer).serializeToString(t)})),n?[2,e]:[2,e.then(encodeURIComponent).then((function(t){return"data:image/svg+xml;charset=utf-8,"+t}))]}))}))}var m={};function y(t,n){var e=function(t){var n=t.replace(/\?.*/,"");return/ttf|otf|eot|woff2?/i.test(n)&&(n=n.replace(/.*\//,"")),n}(t);if(null!=m[e])return m[e];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+(new Date).getTime());var r=window.fetch(t,n.fetchRequestInit).then((function(t){return t.blob().then((function(n){return{blob:n,contentType:t.headers.get("Content-Type")||""}}))})).then((function(t){var n=t.blob,e=t.contentType;return new Promise((function(t,r){var o=new FileReader;o.onloadend=function(){return t({contentType:e,blob:o.result})},o.onerror=r,o.readAsDataURL(n)}))})).then((function(t){var n,e=t.blob;return{contentType:t.contentType,blob:(n=e,n.split(/,/)[1])}})).catch((function(e){var r="";if(n.imagePlaceholder){var o=n.imagePlaceholder.split(/,/);o&&o[1]&&(r=o[1])}var i="Failed to fetch resource: "+t;return e&&(i="string"==typeof e?e:e.message),i&&console.error(i),{blob:r,contentType:""}}));return m[e]=r,r}function w(t,n,e){var r="."+t+":"+n,o=e.cssText?function(t){var n=t.getPropertyValue("content");return t.cssText+" content: '"+n.replace(/'|"/g,"")+"';"}(e):function(t){return h(t).map((function(n){return n+": "+t.getPropertyValue(n)+(t.getPropertyPriority(n)?" !important":"")+";"})).join(" ")}(e);return document.createTextNode(r+"{"+o+"}")}function b(t,n,e){var r=window.getComputedStyle(t,e),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var i=l();try{n.className=n.className+" "+i}catch(t){return}var u=document.createElement("style");u.appendChild(w(i,e,r)),n.appendChild(u)}}function P(t){return e(this,void 0,void 0,(function(){var n;return r(this,(function(e){return"data:,"===(n=t.toDataURL())?[2,Promise.resolve(t.cloneNode(!1))]:[2,p(n)]}))}))}function S(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,Promise.resolve(t.poster).then((function(t){return y(t,n)})).then((function(n){return f(n.blob,c(t.poster)||n.contentType)})).then((function(t){return p(t)}))]}))}))}function x(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return n instanceof Element?[2,Promise.resolve().then((function(){return function(t,n){var e=window.getComputedStyle(t),r=n.style;r&&(e.cssText?r.cssText=e.cssText:h(e).forEach((function(t){r.setProperty(t,e.getPropertyValue(t),e.getPropertyPriority(t))})))}(t,n)})).then((function(){return function(t,n){b(t,n,":before"),b(t,n,":after")}(t,n)})).then((function(){return function(t,n){t instanceof HTMLTextAreaElement&&(n.innerHTML=t.value),t instanceof HTMLInputElement&&n.setAttribute("value",t.value)}(t,n)})).then((function(){return n}))]:[2,Promise.resolve(n)]}))}))}function E(t,n,o){return e(this,void 0,void 0,(function(){return r(this,(function(i){return o||!n.filter||n.filter(t)?[2,Promise.resolve(t).then((function(t){return function(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return t instanceof HTMLCanvasElement?[2,P(t)]:t instanceof HTMLVideoElement&&t.poster?[2,S(t,n)]:[2,Promise.resolve(t.cloneNode(!1))]}))}))}(t,n)})).then((function(o){return function(t,n,o){var i;return e(this,void 0,void 0,(function(){var e;return r(this,(function(r){var u;return 0===(e=null!=(u=t).tagName&&"SLOT"===u.tagName.toUpperCase()&&t.assignedNodes?h(t.assignedNodes()):h((null!==(i=t.shadowRoot)&&void 0!==i?i:t).childNodes)).length||t instanceof HTMLVideoElement?[2,Promise.resolve(n)]:[2,e.reduce((function(t,e){return t.then((function(){return E(e,o)})).then((function(t){t&&n.appendChild(t)}))}),Promise.resolve()).then((function(){return n}))]}))}))}(t,o,n)})).then((function(n){return x(t,n)}))]:[2,Promise.resolve(null)]}))}))}var T=/url\((['"]?)([^'"]+?)\1\)/g,C=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,R=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function L(t){var n=[];return t.replace(T,(function(t,e,r){return n.push(r),t})),n.filter((function(t){return!a(t)}))}function I(t,n,e,r,o){var i=e?function(t,n){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;var e=document.implementation.createHTMLDocument(),r=e.createElement("base"),o=e.createElement("a");return e.head.appendChild(r),e.body.appendChild(o),n&&(r.href=n),o.href=t,o.href}(n,e):n;return Promise.resolve(i).then((function(t){return o?o(t):y(t,r)})).then((function(t){return"string"==typeof t?f(t,c(n)):f(t.blob,c(n)||t.contentType)})).then((function(e){return t.replace((r=n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1"),new RegExp("(url\\(['\"]?)("+r+")(['\"]?\\))","g")),"$1"+e+"$3");var r})).then((function(t){return t}),(function(){return i}))}function N(t){return-1!==t.search(T)}function k(t,n,o){return e(this,void 0,void 0,(function(){var e;return r(this,(function(r){return N(t)?(e=function(t,n){var e=n.preferredFontFormat;return e?t.replace(R,(function(t){for(;;){var n=C.exec(t)||[],r=n[0],o=n[2];if(!o)return"";if(o===e)return"src: "+r+";"}})):t}(t,o),[2,Promise.resolve(e).then(L).then((function(t){return t.reduce((function(t,e){return t.then((function(t){return I(t,e,n,o)}))}),Promise.resolve(e))}))]):[2,Promise.resolve(t)]}))}))}function A(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(o){return t instanceof Element?[2,Promise.resolve(t).then((function(t){return function(t,n){var o;return e(this,void 0,void 0,(function(){var e;return r(this,(function(r){return(e=null===(o=t.style)||void 0===o?void 0:o.getPropertyValue("background"))?[2,Promise.resolve(e).then((function(t){return k(t,null,n)})).then((function(n){return t.style.setProperty("background",n,t.style.getPropertyPriority("background")),t}))]:[2,Promise.resolve(t)]}))}))}(t,n)})).then((function(t){return function(t,n){return e(this,void 0,void 0,(function(){var e;return r(this,(function(r){return t instanceof HTMLImageElement&&!a(t.src)||t instanceof SVGImageElement&&!a(t.href.baseVal)?(e=t instanceof HTMLImageElement?t.src:t.href.baseVal,[2,Promise.resolve(e).then((function(t){return y(t,n)})).then((function(t){return f(t.blob,c(e)||t.contentType)})).then((function(n){return new Promise((function(e,r){t.onload=e,t.onerror=r,t instanceof HTMLImageElement?(t.srcset="",t.src=n):t.href.baseVal=n}))})).then((function(){return t}),(function(){return t}))]):[2,Promise.resolve(t)]}))}))}(t,n)})).then((function(t){return function(t,n){return e(this,void 0,void 0,(function(){var e,o;return r(this,(function(r){return e=h(t.childNodes),o=e.map((function(t){return A(t,n)})),[2,Promise.all(o).then((function(){return t}))]}))}))}(t,n)}))]:[2,Promise.resolve(t)]}))}))}var M={};function j(t){var n=M[t];if(null!=n)return n;var e=window.fetch(t).then((function(n){return{url:t,cssText:n.text()}}));return M[t]=e,e}function D(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,t.cssText.then((function(e){var r=e,o=/url\(["']?([^"')]+)["']?\)/g,i=(r.match(/url\([^)]+\)/g)||[]).map((function(e){var i=e.replace(o,"$1");return i.startsWith("https://")||(i=new URL(i,t.url).href),window.fetch(i,n.fetchRequestInit).then((function(t){return t.blob()})).then((function(t){return new Promise((function(n,o){var i=new FileReader;i.onloadend=function(){r=r.replace(e,"url("+i.result+")"),n([e,i.result])},i.onerror=o,i.readAsDataURL(t)}))}))}));return Promise.all(i).then((function(){return r}))}))]}))}))}function V(t){if(null==t)return[];for(var n=[],e=t.replace(/(\/\*[\s\S]*?\*\/)/gi,""),r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");;){if(null===(u=r.exec(e)))break;n.push(u[0])}e=e.replace(r,"");for(var o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");;){var u;if(null===(u=o.exec(e))){if(null===(u=i.exec(e)))break;o.lastIndex=i.lastIndex}else i.lastIndex=o.lastIndex;n.push(u[0])}return n}function H(t){return t.filter((function(t){return t.type===CSSRule.FONT_FACE_RULE})).filter((function(t){return N(t.style.getPropertyValue("src"))}))}function U(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(o){return[2,new Promise((function(n,e){null==t.ownerDocument&&e(new Error("Provided element is not within a Document")),n(h(t.ownerDocument.styleSheets))})).then((function(t){return function(t,n){return e(this,void 0,void 0,(function(){var e,o;return r(this,(function(r){return e=[],o=[],t.forEach((function(e){if("cssRules"in e)try{h(e.cssRules).forEach((function(t,r){if(t.type===CSSRule.IMPORT_RULE){var i=r+1,u=j(t.href).then((function(t){return t?D(t,n):""})).then((function(t){return V(t).forEach((function(t){try{e.insertRule(t,t.startsWith("@import")?i+=1:e.cssRules.length)}catch(n){console.error("Error inserting rule from remote css",{rule:t,error:n})}}))})).catch((function(t){console.error("Error loading remote css",t.toString())}));o.push(u)}}))}catch(i){var r=t.find((function(t){return null==t.href}))||document.styleSheets[0];null!=e.href?o.push(j(e.href).then((function(t){return t?D(t,n):""})).then((function(t){return V(t).forEach((function(t){r.insertRule(t,e.cssRules.length)}))})).catch((function(t){console.error("Error loading remote stylesheet",t.toString())}))):console.error("Error inlining remote css file",i.toString())}})),[2,Promise.all(o).then((function(){return t.forEach((function(t){if("cssRules"in t)try{h(t.cssRules).forEach((function(t){e.push(t)}))}catch(n){console.error("Error while reading CSS rules from "+t.href,n.toString())}})),e}))]}))}))}(t,n)})).then(H)]}))}))}function O(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,U(t,n).then((function(t){return Promise.all(t.map((function(t){var e=t.parentStyleSheet?t.parentStyleSheet.href:null;return k(t.cssText,e,n)})))})).then((function(t){return t.join("\n")}))]}))}))}function F(t,n){void 0===n&&(n={});var e=n.width||function(t){var n=d(t,"border-left-width"),e=d(t,"border-right-width");return t.clientWidth+n+e}(t),r=n.height||function(t){var n=d(t,"border-top-width"),e=d(t,"border-bottom-width");return t.clientHeight+n+e}(t);return{width:e,height:r}}function q(t,n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){var o,i,u;return r(this,(function(c){return o=F(t,n),i=o.width,u=o.height,[2,Promise.resolve(t).then((function(t){return E(t,n,!0)})).then((function(t){return function(t,n){return e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,(null!=n.fontEmbedCSS?Promise.resolve(n.fontEmbedCSS):O(t,n)).then((function(n){var e=document.createElement("style"),r=document.createTextNode(n);return e.appendChild(r),t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),t}))]}))}))}(t,n)})).then((function(t){return A(t,n)})).then((function(t){return function(t,n){var e=t.style;n.backgroundColor&&(e.backgroundColor=n.backgroundColor),n.width&&(e.width=n.width+"px"),n.height&&(e.height=n.height+"px");var r=n.style;return null!=r&&Object.keys(r).forEach((function(t){e[t]=r[t]})),t}(t,n)})).then((function(t){return function(t,n,o,i){return void 0===i&&(i={}),e(this,void 0,void 0,(function(){var e,u,c;return r(this,(function(r){return e="http://www.w3.org/2000/svg",u=document.createElementNS(e,"svg"),c=document.createElementNS(e,"foreignObject"),u.setAttribute("width",""+n),u.setAttribute("height",""+o),u.setAttribute("viewBox","0 0 "+n+" "+o),c.setAttribute("width","100%"),c.setAttribute("height","100%"),c.setAttribute("x","0"),c.setAttribute("y","0"),c.setAttribute("externalResourcesRequired","true"),u.appendChild(c),c.appendChild(t),[2,g(u,i.plainSvg)]}))}))}(t,i,u,n)}))]}))}))}var B=16384;function $(t,o){return void 0===o&&(o={}),e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,q(t,n(n({},o),{plainSvg:!1})).then(p).then((function(n){var e=document.createElement("canvas"),r=e.getContext("2d"),i=o.pixelRatio||function(){var t,n;try{n=process}catch(t){}var e=n&&n.env?n.env.devicePixelRatio:null;return e&&(t=parseInt(e,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}(),u=F(t,o),c=u.width,a=u.height,f=o.canvasWidth||c,s=o.canvasHeight||a;return e.width=f*i,e.height=s*i,o.skipAutoScale||function(t){(t.width>B||t.height>B)&&(t.width>B&&t.height>B?t.width>t.height?(t.height*=B/t.width,t.width=B):(t.width*=B/t.height,t.height=B):t.width>B?(t.height*=B/t.width,t.width=B):(t.width*=B/t.height,t.height=B))}(e),e.style.width=""+f,e.style.height=""+s,o.backgroundColor&&(r.fillStyle=o.backgroundColor,r.fillRect(0,0,e.width,e.height)),r.drawImage(n,0,0,e.width,e.height),e}))]}))}))}t.getFontEmbedCSS=function(t,n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,O(t,n)]}))}))},t.toBlob=function(t,n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,$(t,n).then(v)]}))}))},t.toCanvas=$,t.toJpeg=function(t,n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,$(t,n).then((function(t){return t.toDataURL("image/jpeg",n.quality||1)}))]}))}))},t.toPixelData=function(t,n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){var e,o,i;return r(this,(function(r){return e=F(t,n),o=e.width,i=e.height,[2,$(t,n).then((function(t){return t.getContext("2d").getImageData(0,0,o,i).data}))]}))}))},t.toPng=function(t,n){return void 0===n&&(n={}),e(this,void 0,void 0,(function(){return r(this,(function(e){return[2,$(t,n).then((function(t){return t.toDataURL()}))]}))}))},t.toSvg=q,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=html-to-image.js.map
