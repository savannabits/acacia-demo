import{a5 as i}from"./vendor.05df324e.js";function u(e){e.addEventListener("mousedown",a)}function p(e){e.removeEventListener("mousedown",a)}function m(e){let t=document.createElement("span");t.className="p-ink",e.appendChild(t),t.addEventListener("animationend",s)}function f(e){let t=l(e);t&&(p(e),t.removeEventListener("animationend",s),t.remove())}function a(e){let t=e.currentTarget,n=l(t);if(!n||getComputedStyle(n,null).display==="none")return;if(i.removeClass(n,"p-ink-active"),!i.getHeight(n)&&!i.getWidth(n)){let r=Math.max(i.getOuterWidth(t),i.getOuterHeight(t));n.style.height=r+"px",n.style.width=r+"px"}let o=i.getOffset(t),d=e.pageX-o.left+document.body.scrollTop-i.getWidth(n)/2,c=e.pageY-o.top+document.body.scrollLeft-i.getHeight(n)/2;n.style.top=c+"px",n.style.left=d+"px",i.addClass(n,"p-ink-active")}function s(e){i.removeClass(e.currentTarget,"p-ink-active")}function l(e){for(let t=0;t<e.children.length;t++)if(typeof e.children[t].className=="string"&&e.children[t].className.indexOf("p-ink")!==-1)return e.children[t];return null}const v={mounted(e,t){t.instance.$primevue&&t.instance.$primevue.config&&t.instance.$primevue.config.ripple&&(m(e),u(e))},unmounted(e){f(e)}};export{v as R};
