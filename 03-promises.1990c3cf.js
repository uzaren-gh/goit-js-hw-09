var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var i=n("7Y9D8");i=n("7Y9D8");function r(e,o){const t=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t?n({position:e,delay:o}):i({position:e,delay:o})}),o)}))}let l,s,u;document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();const{delay:o,step:t,amount:n}=e.currentTarget;l=Number(o.value),s=Number(t.value),u=Number(n.value);for(let e=1;e<=u;e+=1)r(e,l).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`),i.Notify.success(`✅ Fulfilled promise ${e} in ${o}ms`,{position:"center-center",closeButton:!1,clickToClose:!1,timeout:5e3})})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`),i.Notify.failure(`❌ Rejected promise ${e} in ${o}ms`,{position:"center-center",closeButton:!1,clickToClose:!1,timeout:5e3})})),l+=s}));
//# sourceMappingURL=03-promises.1990c3cf.js.map
