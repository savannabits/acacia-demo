import{M as n,N as c,i as e,k as t,q as r,o}from"./vendor.05df324e.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const a={name:"Notification",props:["type","open"]},_={class:"inline-flex flex-col max-w-lg px-4 py-2 rounded-sm text-sm bg-white shadow-lg border border-gray-200 text-gray-600"},h={class:"flex w-full justify-between items-start"},m={class:"flex"},x={key:0,class:"w-4 h-4 shrink-0 fill-current text-yellow-500 mt-[3px] mr-3",viewBox:"0 0 16 16"},v=t("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z"},null,-1),f=[v],p={key:1,class:"w-4 h-4 shrink-0 fill-current text-red-500 mt-[3px] mr-3",viewBox:"0 0 16 16"},u=t("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 10.1l-1.4 1.4L8 9.4l-2.1 2.1-1.4-1.4L6.6 8 4.5 5.9l1.4-1.4L8 6.6l2.1-2.1 1.4 1.4L9.4 8l2.1 2.1z"},null,-1),w=[u],g={key:2,class:"w-4 h-4 shrink-0 fill-current text-green-500 mt-[3px] mr-3",viewBox:"0 0 16 16"},y=t("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 11.4L3.6 8 5 6.6l2 2 4-4L12.4 6 7 11.4z"},null,-1),k=[y],z={key:3,class:"w-4 h-4 shrink-0 fill-current text-indigo-500 mt-[3px] mr-3",viewBox:"0 0 16 16"},L=t("path",{d:"M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z"},null,-1),M=[L],B=t("div",{class:"sr-only"},"Close",-1),C=t("svg",{class:"w-4 h-4 fill-current"},[t("path",{d:"M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z"})],-1),b=[B,C],N=t("div",{class:"text-right mt-1"},[t("a",{class:"font-medium text-indigo-500 hover:text-indigo-600",href:"#0"},"Action ->")],-1);function j(l,i,s,V,H,S){return n((o(),e("div",null,[t("div",_,[t("div",h,[t("div",m,[s.type==="warning"?(o(),e("svg",x,f)):s.type==="error"?(o(),e("svg",p,w)):s.type==="success"?(o(),e("svg",g,k)):(o(),e("svg",z,M)),t("div",null,[r(l.$slots,"default")])]),t("button",{class:"opacity-70 hover:opacity-80 ml-3 mt-[3px]",onClick:i[0]||(i[0]=q=>s.open=!1)},b)]),N])],512)),[[c,s.open]])}var E=d(a,[["render",j]]);export{E as default};