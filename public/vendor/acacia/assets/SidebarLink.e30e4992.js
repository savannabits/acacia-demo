import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{e as l,i as t,j as d,w as u,x as o,r as c,o as a,k as n,q as s,s as p}from"./vendor.05df324e.js";const m=l({name:"SidebarLink",props:{submenu:Boolean,active:{},href:{},icon:{type:String,default:null},ajaxLoad:{default:!0,type:Boolean}}}),f={class:"flex items-center"},b={class:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"};function v(e,h,g,k,y,$){const i=c("router-link");return a(),t("li",{class:o(["px-3 py-2 rounded-sm mb-0.5 last:mb-0",{"pl-0":e.submenu,"bg-gray-900":e.active&&!e.submenu,"font-bold text-indigo-500":e.active&&e.submenu}])},[d(i,{class:o(["block text-gray-200 hover:text-white truncate transition duration-150",{"hover:text-indigo-300":e.active,"font-bold text-indigo-500":e.active&&e.submenu}]),href:e.href},{default:u(()=>[n("div",f,[s(e.$slots,"icon",{},()=>[e.icon?(a(),t("i",{key:0,class:o(`${e.icon} ${e.active&&"text-indigo-500"}`)},null,2)):p("",!0)]),n("span",b,[s(e.$slots,"default")])])]),_:3},8,["class","href"])],2)}var j=r(m,[["render",v]]);export{j as default};