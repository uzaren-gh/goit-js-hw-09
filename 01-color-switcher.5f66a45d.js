!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=document.querySelector("body");var n=0;e.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,n=setInterval((function(){return a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(){clearInterval(n),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.5f66a45d.js.map