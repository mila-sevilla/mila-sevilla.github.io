parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L/DU":[function(require,module,exports) {

},{"./../assets/barcelona.svg":[["barcelona.69e873af.svg","Hzox"],"Hzox"],"./../assets/logo.svg":[["logo.cd0a49b6.svg","Rn34"],"Rn34"],"./../assets/portfolio_pic_medium.webp":[["portfolio_pic_medium.fe52c3aa.webp","+C0p"],"+C0p"],"./../assets/arrow_left.svg":[["arrow_left.278052e0.svg","wf9H"],"wf9H"],"./../assets/arrow_right.svg":[["arrow_right.f03ce987.svg","yTrm"],"yTrm"],"./../assets/github.svg":[["github.a77f7ca7.svg","IUhS"],"IUhS"],"./../assets/react.svg":[["react.c8b2db89.svg","aOGc"],"aOGc"],"./../assets/css.svg":[["css.3af5b254.svg","rrdv"],"rrdv"],"./../assets/js.svg":[["js.84513789.svg","XsDT"],"XsDT"],"./../assets/figma.webp":[["figma.0ff685a6.webp","WRDv"],"WRDv"],"./../assets/csharp.svg":[["csharp.abf7566e.svg","Jg3z"],"Jg3z"],"./../assets/unity.svg":[["unity.156db48e.svg","xFyY"],"xFyY"],"./../assets/gamedesign.webp":[["gamedesign.20eec32b.webp","blYo"],"blYo"],"./../assets/interaction.webp":[["interaction.0a5523d8.webp","lZ/p"],"lZ/p"],"./../assets/project.webp":[["project.21d533e3.webp","Iei+"],"Iei+"],"./../assets/research.webp":[["research.0d66c776.webp","4v1Z"],"4v1Z"],"./../assets/mail.svg":[["mail.730c73a0.svg","s+jc"],"s+jc"],"./../assets/linkedin.svg":[["linkedin.1be18448.svg","K2dx"],"K2dx"],"./../assets/github_nofill.svg":[["github_nofill.d85205f5.svg","alpj"],"alpj"]}],"epB2":[function(require,module,exports) {
"use strict";require("./styles/main.scss");var t=Array.from(document.querySelectorAll(".slide")),e=document.querySelector("[data-action='slideLeft']"),r=document.querySelector("[data-action='slideRight']"),s=Array.from(document.querySelectorAll(".nav-dot")),c=0,n=function(){t[c].classList.remove("current"),s[c].classList.remove("currentDot"),c===t.length-1?c=0:c++,t[c].classList.add("current"),s[c].classList.add("currentDot")},a=function(){t[c].classList.remove("current"),s[c].classList.remove("currentDot"),0===c?c=t.length-1:c--,t[c].classList.add("current"),s[c].classList.add("currentDot")};r.addEventListener("click",n),e.addEventListener("click",a),s.forEach(function(e){e.addEventListener("click",function(){t[c].classList.remove("current"),s[c].classList.remove("currentDot");var e=s.indexOf(this);t[c=e].classList.add("current"),s[c].classList.add("currentDot")})});
},{"./styles/main.scss":"L/DU"}]},{},["epB2"], null)
//# sourceMappingURL=main.8d6a14e4.js.map