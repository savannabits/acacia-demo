import{p as m,E as v,J as f,i as p,j as l,w as r,K as d,F as y,o as _,M as c,N as u,k as e,z as h,B as g,q as w}from"./vendor.05df324e.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"ModalBasic",props:["id","modalOpen","title"],emits:["close-modal"],setup(a,{emit:s}){const t=m(null),n=({target:o})=>{!a.modalOpen||t.value.contains(o)||s("close-modal")},i=({keyCode:o})=>{!a.modalOpen||o!==27||s("close-modal")};return v(()=>{document.addEventListener("click",n),document.addEventListener("keydown",i)}),f(()=>{document.removeEventListener("click",n),document.removeEventListener("keydown",i)}),{modalContent:t}}},b={class:"fixed inset-0 bg-gray-900 bg-opacity-30 z-50 transition-opacity","aria-hidden":"true"},L=["id"],B={ref:"modalContent",class:"bg-white rounded shadow-lg overflow-auto max-w-lg w-full max-h-full"},E={class:"px-5 py-3 border-b border-gray-200"},M={class:"flex justify-between items-center"},j={class:"font-semibold text-gray-800"},C=e("div",{class:"sr-only"},"Close",-1),O=e("svg",{class:"w-4 h-4 fill-current"},[e("path",{d:"M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"})],-1),z=[C,O];function N(a,s,t,n,i,o){return _(),p(y,null,[l(d,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"transition ease-out duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:r(()=>[c(e("div",b,null,512),[[u,t.modalOpen]])]),_:1}),l(d,{"enter-active-class":"transition ease-in-out duration-200","enter-from-class":"opacity-0 translate-y-4","enter-to-class":"opacity-100 translate-y-0","leave-active-class":"transition ease-in-out duration-200","leave-from-class":"opacity-100 translate-y-0","leave-to-class":"opacity-0 translate-y-4"},{default:r(()=>[c(e("div",{id:t.id,class:"fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6",role:"dialog","aria-modal":"true"},[e("div",B,[e("div",E,[e("div",M,[e("div",j,h(t.title),1),e("button",{class:"text-gray-400 hover:text-gray-500",onClick:s[0]||(s[0]=g(S=>a.$emit("close-modal"),["stop"]))},z)])]),w(a.$slots,"default")],512)],8,L),[[u,t.modalOpen]])]),_:3})],64)}var F=x(k,[["render",N]]);export{F as default};
