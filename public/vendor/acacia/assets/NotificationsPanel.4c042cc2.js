import{p as a,i as d,k as s,z as o,M as n,ag as l,H as m,o as b}from"./vendor.05df324e.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const f={name:"NotificationsPanel",setup(){const c=a("On"),t=a("On"),r=a("Off");return{comments:c,messages:t,mentions:r}}},v={class:"grow"},x={class:"p-6 space-y-6"},y=s("h2",{class:"text-2xl text-gray-800 font-bold mb-5"},"My Notifications",-1),g=s("h3",{class:"text-xl leading-snug text-gray-800 font-bold mb-1"},"General",-1),h={class:"flex justify-between items-center py-3 border-b border-gray-200"},p=s("div",null,[s("div",{class:"text-gray-800 font-semibold"},"Comments and replies"),s("div",{class:"text-sm"},"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.")],-1),_={class:"flex items-center ml-4"},w={class:"text-sm text-gray-400 italic mr-2"},E={class:"form-switch"},O=s("label",{class:"bg-gray-400",for:"comments"},[s("span",{class:"bg-white shadow-sm","aria-hidden":"true"}),s("span",{class:"sr-only"},"Enable smart sync")],-1),j={class:"flex justify-between items-center py-3 border-b border-gray-200"},k=s("div",null,[s("div",{class:"text-gray-800 font-semibold"},"Messages"),s("div",{class:"text-sm"},"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.")],-1),M={class:"flex items-center ml-4"},q={class:"text-sm text-gray-400 italic mr-2"},S={class:"form-switch"},N=s("label",{class:"bg-gray-400",for:"messages"},[s("span",{class:"bg-white shadow-sm","aria-hidden":"true"}),s("span",{class:"sr-only"},"Enable smart sync")],-1),V={class:"flex justify-between items-center py-3 border-b border-gray-200"},C=s("div",null,[s("div",{class:"text-gray-800 font-semibold"},"Mentions"),s("div",{class:"text-sm"},"Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.")],-1),B={class:"flex items-center ml-4"},D={class:"text-sm text-gray-400 italic mr-2"},U={class:"form-switch"},P=s("label",{class:"bg-gray-400",for:"mentions"},[s("span",{class:"bg-white shadow-sm","aria-hidden":"true"}),s("span",{class:"sr-only"},"Enable smart sync")],-1),z=m('<section><h3 class="text-xl leading-snug text-gray-800 font-bold mb-1">Shares</h3><ul><li class="flex justify-between items-center py-3 border-b border-gray-200"><div><div class="text-gray-800 font-semibold">Shares of my content</div><div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div></div><div class="flex items-center ml-4"><button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm">Manage</button></div></li><li class="flex justify-between items-center py-3 border-b border-gray-200"><div><div class="text-gray-800 font-semibold">Team invites</div><div class="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div></div><div class="flex items-center ml-4"><button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm">Manage</button></div></li><li class="flex justify-between items-center py-3 border-b border-gray-200"><div><div class="text-gray-800 font-semibold">Smart connection</div><div class="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div></div><div class="flex items-center ml-4"><div class="text-sm text-gray-400 italic mr-2 hidden md:block">Active</div><button class="btn-sm border-gray-200 hover:border-gray-300 shadow-sm text-red-500">Disable</button></div></li></ul></section>',1),A=s("footer",null,[s("div",{class:"flex flex-col px-6 py-5 border-t border-gray-200"},[s("div",{class:"flex self-end"},[s("button",{class:"btn border-gray-200 hover:border-gray-300 text-gray-600"},"Cancel"),s("button",{class:"btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3"},"Save Changes")])])],-1);function G(c,t,r,e,H,T){return b(),d("div",v,[s("div",x,[y,s("section",null,[g,s("ul",null,[s("li",h,[p,s("div",_,[s("div",w,o(e.comments),1),s("div",E,[n(s("input",{type:"checkbox",id:"comments",class:"sr-only","onUpdate:modelValue":t[0]||(t[0]=i=>e.comments=i),"true-value":"On","false-value":"Off"},null,512),[[l,e.comments]]),O])])]),s("li",j,[k,s("div",M,[s("div",q,o(e.messages),1),s("div",S,[n(s("input",{type:"checkbox",id:"messages",class:"sr-only","onUpdate:modelValue":t[1]||(t[1]=i=>e.messages=i),"true-value":"On","false-value":"Off"},null,512),[[l,e.messages]]),N])])]),s("li",V,[C,s("div",B,[s("div",D,o(e.mentions),1),s("div",U,[n(s("input",{type:"checkbox",id:"mentions",class:"sr-only","onUpdate:modelValue":t[2]||(t[2]=i=>e.mentions=i),"true-value":"On","false-value":"Off"},null,512),[[l,e.mentions]]),P])])])])]),z]),A])}var J=u(f,[["render",G]]);export{J as default};