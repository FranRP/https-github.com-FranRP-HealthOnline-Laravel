!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e){$(document).ready(function(){$(".btn-delete").click(function(t){if(t.preventDefault(),!confirm("¿Estas seguro de querer eliminar este registro?"))return!1;var e=$(this).parents("tr"),r=$(this).parents("form"),n=r.attr("action");$.post(n,r.serialize(),function(t){e.fadeOut()})})})}]);