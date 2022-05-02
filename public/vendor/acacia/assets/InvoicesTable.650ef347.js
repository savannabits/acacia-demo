import{j as d,z as m,c as r,f as e,C as v,a7 as h,F as f,m as _,q as b,r as x,o as c,n as y}from"./main.9e765f7d.js";import w from"./InvoicesTableItem.e265bd2a.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const g={name:"InvoicesTable",components:{Invoice:w},props:["selectedItems"],setup(p,{emit:s}){const o=d(!1),t=d([]),n=()=>{t.value=[],o.value||(t.value=i.value.map(l=>l.id))};m(t,()=>{o.value=i.value.length===t.value.length,s("change-selection",t.value)});const i=d([{id:"0",invoice:"#123567",total:"$129.00",status:"Overdue",customer:"Dominik Lamakani",issueddate:"22/07/2021",paiddate:"-",type:"Subscription"},{id:"1",invoice:"#779912",total:"$59.00",status:"Paid",customer:"Mark Cameron",issueddate:"19/07/2021",paiddate:"20/07/2021",type:"Subscription"},{id:"2",invoice:"#889924",total:"$89.00",status:"Paid",customer:"Sergio Gonnelli",issueddate:"17/07/2021",paiddate:"19/07/2021",type:"One-time"},{id:"3",invoice:"#897726",total:"$129.00",status:"Due",customer:"Manuel Garbaya",issueddate:"04/07/2021",paiddate:"-",type:"Subscription"},{id:"4",invoice:"#123567",total:"$129.00",status:"Due",customer:"Cool Robot",issueddate:"04/07/2021",paiddate:"-",type:"Subscription"},{id:"5",invoice:"#896644",total:"$129.00",status:"Paid",customer:"Mark Cameron",issueddate:"04/07/2021",paiddate:"09/07/2021",type:"One-time"},{id:"6",invoice:"#136988",total:"$69.00",status:"Paid",customer:"Glenn Thomas",issueddate:"01/07/2021",paiddate:"01/07/2021",type:"One-time"},{id:"7",invoice:"#442206",total:"$129.00",status:"Overdue",customer:"Dominik Lamakani",issueddate:"22/06/2021",paiddate:"-",type:"Subscription"},{id:"8",invoice:"#764321",total:"$89.00",status:"Paid",customer:"Brian Halligan",issueddate:"21/06/2021",paiddate:"29/06/2021",type:"One-time"},{id:"9",invoice:"#908764",total:"$129.00",status:"Due",customer:"Carolyn McNeail",issueddate:"17/06/2021",paiddate:"-",type:"Subscription"}]);return{selectAll:o,selected:t,checkAll:n,invoices:i}}},C={class:"bg-white shadow-lg rounded-sm border border-gray-200 relative"},I=e("header",{class:"px-5 py-4"},[e("h2",{class:"font-semibold text-gray-800"},[b("Invoices "),e("span",{class:"text-gray-400 font-medium"},"67")])],-1),S={class:"overflow-x-auto"},A={class:"table-auto w-full"},$={class:"text-xs font-semibold uppercase text-gray-500 bg-gray-50 border-t border-b border-gray-200"},D={class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px"},O={class:"flex items-center"},P={class:"inline-flex"},T=e("span",{class:"sr-only"},"Select all",-1),B=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Invoice")],-1),M=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Total")],-1),G=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Status")],-1),L=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Customer")],-1),N=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Issued on")],-1),V=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Paid on")],-1),F=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Type")],-1),U=e("th",{class:"px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap"},[e("div",{class:"font-semibold text-left"},"Actions")],-1),j={class:"text-sm divide-y divide-gray-200"};function q(p,s,o,t,n,i){const l=x("Invoice");return c(),r("div",C,[I,e("div",null,[e("div",S,[e("table",A,[e("thead",$,[e("tr",null,[e("th",D,[e("div",O,[e("label",P,[T,v(e("input",{class:"form-checkbox",type:"checkbox","onUpdate:modelValue":s[0]||(s[0]=a=>t.selectAll=a),onClick:s[1]||(s[1]=(...a)=>t.checkAll&&t.checkAll(...a))},null,512),[[h,t.selectAll]])])])]),B,M,G,L,N,V,F,U])]),e("tbody",j,[(c(!0),r(f,null,_(t.invoices,a=>(c(),y(l,{key:a.id,invoice:a,selected:t.selected,"onUpdate:selected":s[2]||(s[2]=u=>t.selected=u),value:a.id},null,8,["invoice","selected","value"]))),128))])])])])])}var R=k(g,[["render",q]]);export{R as default};