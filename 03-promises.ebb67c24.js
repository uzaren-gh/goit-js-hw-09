!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},e.parcelRequire7bc7=t);var i,r,c,l=t("6JpON");l=t("6JpON");function a(e,o){var n=Math.random()>.3;return new Promise((function(t,i){setTimeout((function(){n?t({position:e,delay:o}):i({position:e,delay:o})}),o)}))}document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();var o=e.currentTarget,n=o.delay,t=o.step,u=o.amount;i=Number(n.value),r=Number(t.value),c=Number(u.value);for(var s=1;s<=c;s+=1)a(s,i).then((function(e){var o=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms")),l.Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(n,"ms"),{position:"center-center",closeButton:!1,clickToClose:!1,timeout:5e3})})).catch((function(e){var o=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(n,"ms")),l.Notify.failure("❌ Rejected promise ".concat(o," in ").concat(n,"ms"),{position:"center-center",closeButton:!1,clickToClose:!1,timeout:5e3})})),i+=r}))}();
//# sourceMappingURL=03-promises.ebb67c24.js.map