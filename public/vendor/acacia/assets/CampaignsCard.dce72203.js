import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import{c as a,f as e,F as m,m as f,e as d,w as l,t as s,q as o,p as g,r as x,o as r,n as _}from"./main.9e765f7d.js";const y={name:"CampaignsCard",props:["item"],setup(){return{typeColor:t=>{switch(t){case"One-Time":return"bg-green-100 text-green-600";case"At Risk":return"bg-yellow-100 text-yellow-600";case"Off-Track":return"bg-red-100 text-red-600";default:return"bg-gray-100 text-gray-500"}},categoryIcon:t=>{switch(t){case"1":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-red-500">
              <svg class="w-9 h-9 fill-current text-red-50" viewBox="0 0 36 36">
                <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
              </svg>
            </div>`;case"2":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-green-500">
              <svg class="w-9 h-9 fill-current text-green-50" viewBox="0 0 36 36">
                <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
              </svg>
            </div>`;case"3":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-light-blue-500">
              <svg class="w-9 h-9 fill-current text-light-blue-50" viewBox="0 0 36 36">
                <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
              </svg>
            </div>`;case"4":return`<div class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-indigo-500">
              <svg class="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
              </svg>
            </div>`;default:return"<div></div>"}}}}},w={class:"col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-gray-200"},b={class:"flex flex-col h-full p-5"},k={class:"flex items-center justify-between"},p=["innerHTML"],C={class:"flex shrink-0 -space-x-3 -ml-px"},z=["src","alt"],M={class:"grow mt-2"},B={class:"text-xl leading-snug font-semibold"},j={class:"text-sm"},T={class:"mt-5"},V={class:"text-sm font-medium text-gray-500 mb-2"},H=e("span",{class:"text-gray-400"},"->",-1),L={class:"flex justify-between items-center"},I=o("View ->");function N(h,u,t,c,F,O){const i=x("router-link");return r(),a("div",w,[e("div",b,[e("header",null,[e("div",k,[e("div",{innerHTML:c.categoryIcon(t.item.category)},null,8,p),e("div",C,[(r(!0),a(m,null,f(t.item.members,n=>(r(),_(i,{key:n.name,class:"block",to:n.link},{default:l(()=>[e("img",{class:"rounded-full border-2 border-white box-content",src:n.image,width:"28",height:"28",alt:n.name},null,8,z)]),_:2},1032,["to"]))),128))])])]),e("div",M,[d(i,{class:"inline-flex text-gray-800 hover:text-gray-900 mb-1",to:t.item.link},{default:l(()=>[e("h2",B,s(t.item.title),1)]),_:1},8,["to"]),e("div",j,s(t.item.content),1)]),e("footer",T,[e("div",V,[o(s(t.item.dates.from)+" ",1),H,o(" "+s(t.item.dates.to),1)]),e("div",L,[e("div",null,[e("div",{class:g(["text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1",c.typeColor(t.item.type)])},s(t.item.type),3)]),e("div",null,[d(i,{class:"text-sm font-medium text-indigo-500 hover:text-indigo-600",to:t.item.link},{default:l(()=>[I]),_:1},8,["to"])])])])])])}var D=v(y,[["render",N]]);export{D as default};