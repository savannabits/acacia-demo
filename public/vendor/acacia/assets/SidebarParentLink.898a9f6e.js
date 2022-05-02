import _ from"./SidebarLinkGroup.cb8761b1.js";import{n as p,w as x,M as h,r as u,o as i,f as t,k as r,c as d,p as s,l,t as f,v as b}from"./main.9e765f7d.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"SidebarParentLink",components:{SidebarLinkGroup:_},emits:["expandSidebar"],props:{active:Boolean,header:String,icon:String,sidebarExpanded:Boolean},setup(a,{emit:c}){return{expandSidebar:o=>{c("expandSidebar"),h(()=>{o.expandSubmenu()})}}}},S=["onClick"],y={class:"flex items-center justify-between"},g={class:"flex items-center"},C={class:"text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200"},B={key:0},w={class:"flex shrink-0 ml-0"},L=t("path",{d:"M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"},null,-1),E=[L],G={class:"lg:hidden lg:sidebar-expanded:block 2xl:block"};function M(a,c,e,o,z,N){const m=u("SidebarLinkGroup");return i(),p(m,{activeCondition:e.active},{default:x(n=>[t("a",{class:s(["block py-1 text-gray-200 hover:text-primary truncate transition duration-150",e.active&&"hover:text-gray-200"]),href:"#0",onClick:b(P=>e.sidebarExpanded?n.handleClick():o.expandSidebar(n),["prevent"])},[t("div",y,[t("div",g,[r(a.$slots,"icon",{},()=>[e.icon?(i(),d("i",{key:0,class:s(`${e.icon} ${e.active&&"text-primary"}`)},null,2)):l("",!0)]),t("span",C,[r(a.$slots,"title",{},()=>[e.header?(i(),d("span",B,f(e.header),1)):l("",!0)])])]),t("div",w,[(i(),d("svg",{class:s(["w-3 h-3 shrink-0 ml-1 fill-current text-gray-400",n.expanded&&"transform rotate-180"]),viewBox:"0 0 12 12"},E,2))])])],10,S),t("div",G,[t("ul",{class:s(["pl-2 mt-1",!n.expanded&&"hidden"])},[r(a.$slots,"default")],2)])]),_:3},8,["activeCondition"])}var T=v(k,[["render",M]]);export{T as default};