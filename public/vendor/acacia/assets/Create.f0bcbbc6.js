var l=Object.defineProperty,j=Object.defineProperties;var u=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var i=(t,e,s)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,n=(t,e)=>{for(var s in e||(e={}))_.call(e,s)&&i(t,s,e[s]);if(o)for(var s of o(e))b.call(e,s)&&i(t,s,e[s]);return t},c=(t,e)=>j(t,u(e));import{e as m,u as h,f as x,g as k,i as w,j as a,w as d,F as v,r as g,o as B,k as r,m as C,d as p,n as D}from"./vendor.05df324e.js";import F from"./Backend.6e087c50.js";import L from"./BackLink.b4c17133.js";import N from"./CreateForm.1c9a6699.js";import"./Sidebar.9fa42cf7.js";import"./SidebarLinkGroup.631e5e48.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Header.f4796df8.js";import"./ModalSearch.0fe5a03a.js";import"./DropdownNotifications.8ff848f9.js";import"./DropdownHelp.ee3a80f5.js";import"./DropdownProfile.b6a2cd02.js";import"./user-avatar-32.07bf604b.js";import"./WelcomeBanner.e6597c05.js";import"./DashboardAvatars.03cd71bc.js";import"./DropdownFilter.d3d0573f.js";import"./Datepicker.0a132f4e.js";import"./vue-flatpickr.min.87ca1928.js";import"./SidebarLink.e30e4992.js";import"./confirmdialog.esm.5be0612a.js";import"./ripple.esm.574b991d.js";import"./dialog.esm.7f94084b.js";import"./button.esm.cbb15c31.js";import"./SidebarParentLink.acf5cc4a.js";import"./message.esm.2b7d3da1.js";import"./inputtext.esm.b08d2117.js";import"./AcaciaDatepicker.a37d4862.js";const S={class:"flex items-center flex-wrap gap-x-2"},H=r("h4",{class:"font-bold text-xl"},"New User",-1),U={class:"mx-auto container max-w-4xl flex items-center justify-center mt-4"},A={class:"rounded w-full p-2 bg-white"},P=m({name:"CreateUser"}),de=m(c(n({},P),{setup(t){h({}),x(),k();const e=s=>{D.Inertia.visit(p("acacia.auth.users.index"))};return(s,V)=>{const f=g("Head");return B(),w(v,null,[a(f,{title:"New User"}),a(F,null,{header:d(()=>[r("div",S,[a(L,{href:C(p)("acacia.auth.users.index")},null,8,["href"]),H])]),default:d(()=>[r("div",U,[r("div",A,[a(N,{onCreated:e})])])]),_:1})],64)}}}));export{de as default};