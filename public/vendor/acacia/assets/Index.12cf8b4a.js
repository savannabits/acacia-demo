var x=Object.defineProperty,w=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var s=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var n=(o,t,e)=>t in o?x(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,l=(o,t)=>{for(var e in t||(t={}))b.call(t,e)&&n(o,e,t[e]);if(s)for(var e of s(t))B.call(t,e)&&n(o,e,t[e]);return o},c=(o,t)=>w(o,C(t));import g from"./Index.0762b94e.js";import d from"./Backend.d947867c.js";import k from"./WelcomeBanner.76c639d8.js";import R from"./DashboardAvatars.8beba91a.js";import{d as _,ai as f,c as $,e as r,w as m,g as i,F as v,o as y,f as a}from"./main.9e765f7d.js";import{s as N}from"./column.esm.6c61d2a3.js";import{s as u,a as p}from"./tabpanel.esm.ff7e1051.js";import h from"./Create.44c7512f.js";import"./PrimeDatatables.0582f2ad.js";import"./inputtext.esm.dc0f2264.js";import"./datatable.esm.3689bee8.js";import"./paginator.esm.d428c35b.js";import"./ripple.esm.1fe20658.js";import"./dropdown.esm.5bafa883.js";import"./overlayeventbus.esm.ef5cc0da.js";import"./virtualscroller.esm.76cd2139.js";import"./inputnumber.esm.2f528c5c.js";import"./button.esm.a5ac1061.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./contextmenu.esm.bb623b07.js";import"./badge.esm.294925a2.js";import"./Sidebar.485bfd5b.js";import"./SidebarLinkGroup.cb8761b1.js";import"./Logo.bf84026c.js";import"./Header.61e29fbc.js";import"./ModalSearch.ed130d60.js";import"./DropdownNotifications.e398f91c.js";import"./DropdownHelp.9bd762b4.js";import"./DropdownProfile.a72bb30f.js";import"./user-avatar-32.07bf604b.js";import"./DropdownFilter.676b5b1f.js";import"./Datepicker.e4af13a9.js";import"./vue-flatpickr.min.9bcaefd2.js";import"./SidebarLink.20e5744c.js";import"./confirmdialog.esm.f379260d.js";import"./dialog.esm.20a296d3.js";import"./SidebarParentLink.898a9f6e.js";import"./inputswitch.esm.90fe6344.js";const P=a("title",null,"Code Generation Panel",-1),V=a("h4",{class:"font-black text-2xl px-1 md:px-4"},"Code Generation Panel",-1),z={class:"mx-auto flex max-w-4xl items-center justify-center mt-4"},F={class:"rounded w-full p-2 bg-white"},G=_({name:"Index",components:{DashboardAvatars:R,WelcomeBanner:k,Backend:d,Head:f,Column:N,SchematicsCreate:h,TabView:u,TabPanel:p},setup(){return{onRowReorder:t=>{console.log(t)}}}}),Ct=_(c(l({},G),{setup(o){return(t,e)=>(y(),$(v,null,[r(i(f),null,{default:m(()=>[P]),_:1}),r(d,null,{header:m(()=>[V]),default:m(()=>[a("div",z,[a("div",F,[r(i(u),{ref:"tabs"},{default:m(()=>[r(i(p),{lazy:!0,header:"Current Schematics"},{default:m(()=>[r(g)]),_:1}),r(i(p),{lazy:!0,header:"New Module"},{default:m(()=>[r(h)]),_:1})]),_:1},512)])])]),_:1})],64))}}));export{Ct as default};