const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let d=0;e.disabled=!0,t.addEventListener("click",(function a(){o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`,t.disabled=!0,e.disabled=!1,d=setTimeout(a,1e3),console.log("timeout:",d)})),e.addEventListener("click",(function(){clearTimeout(d),t.disabled=!1,e.disabled=!0}));
//# sourceMappingURL=01-color-switcher.68364b64.js.map
