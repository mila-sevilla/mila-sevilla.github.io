parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"y+CD":[function(require,module,exports) {

},{"./assets/barcelona.svg":[["barcelona.5b51e50b.svg","Hzox"],"Hzox"],"./assets/logo.svg":[["logo.8454a3ae.svg","Rn34"],"Rn34"],"./assets/portfolio_pic_v2.png":[["portfolio_pic_v2.3869ca31.png","P8a8"],"P8a8"],"./assets/arrow_left.svg":[["arrow_left.cb2dfae0.svg","wf9H"],"wf9H"],"./assets/arrow_right.svg":[["arrow_right.030da445.svg","yTrm"],"yTrm"],"./assets/github.svg":[["github.f6f103b8.svg","IUhS"],"IUhS"],"./assets/mail.svg":[["mail.2ceb9c79.svg","s+jc"],"s+jc"],"./assets/linkedin.svg":[["linkedin.76493ff8.svg","K2dx"],"K2dx"],"./assets/portfolio_pic_medium.png":[["portfolio_pic_medium.169809fd.png","qffC"],"qffC"]}],"epB2":[function(require,module,exports) {
"use strict";require("./main.scss");var e=document.querySelectorAll(".slide"),t=document.querySelector("[data-action='slideLeft']"),r=document.querySelector("[data-action='slideRight']"),n=function(){var t=document.querySelector(".current");t.classList.remove("current"),t.nextElementSibling?t.nextElementSibling.classList.add("current"):e[0].classList.add("current"),setTimeout(function(){return t.classList.remove("current")})},c=function(){var t=document.querySelector(".current");t.classList.remove("current"),t.previousElementSibling?t.previousElementSibling.classList.add("current"):e[e.length-1].classList.add("current"),setTimeout(function(){return t.classList.remove("current")})};r.addEventListener("click",function(e){n()}),t.addEventListener("click",function(e){c()});
},{"./main.scss":"y+CD"}]},{},["epB2"], null)
//# sourceMappingURL=main.d84c1151.js.map