import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{c as l,f as e,t as s,e as n,w as c,r as a,o as d,q as r}from"./main.9e765f7d.js";const _={name:"ApplicationsCard02",props:["item"]},m={class:"col-span-full sm:col-span-6 xl:col-span-3 bg-white shadow-lg rounded-sm border border-gray-200 overflow-hidden"},h={class:"flex flex-col h-full"},f=["src","alt"],x={class:"grow flex flex-col p-5"},g={class:"grow"},u={class:"mb-2"},v={class:"text-lg text-gray-800 font-semibold mb-1"},p={class:"text-sm"},w={class:"flex items-center space-x-2 mb-4"},b={class:"inline-flex text-sm font-medium bg-green-100 text-green-600 rounded-full text-center px-2.5 py-0.5"},y={class:"inline-flex text-sm font-medium text-gray-500 line-through"},k=r("Buy Now");function B(C,N,t,V,A,q){const o=a("router-link");return d(),l("div",m,[e("div",h,[e("img",{class:"w-full",src:t.item.image,width:"286",height:"160",alt:t.item.name},null,8,f),e("div",x,[e("div",g,[e("header",u,[e("h3",v,s(t.item.title),1),e("div",p,s(t.item.content),1)]),e("div",w,[e("div",b,s(t.item.deal),1),e("div",y,s(t.item.price),1)])]),e("div",null,[n(o,{class:"btn-sm w-full bg-indigo-500 hover:bg-indigo-600 text-white",to:t.item.link},{default:c(()=>[k]),_:1},8,["to"])])])])])}var S=i(_,[["render",B]]);export{S as default};
