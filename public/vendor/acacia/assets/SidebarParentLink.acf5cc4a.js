import _ from"./SidebarLinkGroup.631e5e48.js";import{v as h,w as m,Y as p,r as u,o as n,k as t,q as d,i as r,x as s,s as l,z as v,B as b}from"./vendor.05df324e.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"SidebarParentLink",components:{SidebarLinkGroup:_},emits:["expandSidebar"],props:{active:Boolean,header:String,icon:String,sidebarExpanded:Boolean},setup(a,{emit:c}){return{expandSidebar:o=>{c("expandSidebar"),p(()=>{o.expandSubmenu()})}}}},S=["onClick"],g={class:"flex items-center justify-between"},y={class:"flex items-center"},C={class:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"},B={key:0},w={class:"flex shrink-0 ml-2"},L=t("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"},null,-1),j=[L],G={class:"lg:hidden lg:sidebar-expanded:block 2xl:block"};function z(a,c,e,o,E,M){const x=u("SidebarLinkGroup");return n(),h(x,{activeCondition:e.active},{default:m(i=>[t("a",{class:s(["block py-1 text-gray-200 hover:text-white truncate transition duration-150",e.active&&"hover:text-gray-200"]),href:"#0",onClick:b(N=>e.sidebarExpanded?i.handleClick():o.expandSidebar(i),["prevent"])},[t("div",g,[t("div",y,[d(a.$slots,"icon",{},()=>[e.icon?(n(),r("i",{key:0,class:s(`${e.icon} ${e.active&&"text-indigo-500"}`)},null,2)):l("",!0)]),t("span",C,[d(a.$slots,"title",{},()=>[e.header?(n(),r("span",B,v(e.header),1)):l("",!0)])])]),t("div",w,[(n(),r("svg",{class:s(["w-3 h-3 shrink-0 ml-1 fill-current text-gray-400",i.expanded&&"transform rotate-180"]),viewBox:"0 0 12 12"},j,2))])])],10,S),t("div",G,[t("ul",{class:s(["pl-9 mt-1",!i.expanded&&"hidden"])},[d(a.$slots,"default")],2)])]),_:3},8,["activeCondition"])}var D=f(k,[["render",z]]);export{D as default};