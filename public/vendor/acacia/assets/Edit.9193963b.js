var f=Object.defineProperty,x=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var a=(e,t,o)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,p=(e,t)=>{for(var o in t||(t={}))v.call(t,o)&&a(e,o,t[o]);if(m)for(var o of m(t))w.call(t,o)&&a(e,o,t[o]);return e},n=(e,t)=>x(e,h(t));import{d as u,s as g,a as k,b as B,c as C,e as i,w as c,F as E,x as U,r as b,o as F,f as s,g as d,h as l,i as H}from"./main.9e765f7d.js";import N from"./Backend.d947867c.js";import V from"./BackLink.2033ae08.js";import j from"./EditForm.bb9d0960.js";import"./Sidebar.485bfd5b.js";import"./SidebarLinkGroup.cb8761b1.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.bf84026c.js";import"./Header.61e29fbc.js";import"./ModalSearch.ed130d60.js";import"./DropdownNotifications.e398f91c.js";import"./DropdownHelp.9bd762b4.js";import"./DropdownProfile.a72bb30f.js";import"./user-avatar-32.07bf604b.js";import"./WelcomeBanner.76c639d8.js";import"./DashboardAvatars.8beba91a.js";import"./DropdownFilter.676b5b1f.js";import"./Datepicker.e4af13a9.js";import"./vue-flatpickr.min.9bcaefd2.js";import"./SidebarLink.20e5744c.js";import"./confirmdialog.esm.f379260d.js";import"./ripple.esm.1fe20658.js";import"./dialog.esm.20a296d3.js";import"./button.esm.a5ac1061.js";import"./SidebarParentLink.898a9f6e.js";import"./message.esm.a16f09f2.js";import"./tabpanel.esm.ff7e1051.js";import"./inputtext.esm.dc0f2264.js";import"./AcaciaDatepicker.3e912237.js";import"./password.esm.f13419fb.js";import"./overlayeventbus.esm.ef5cc0da.js";import"./checkbox.esm.12d385d5.js";import"./divider.esm.06764bbd.js";const y={class:"flex items-center flex-wrap gap-x-2"},I=s("h4",{class:"font-bold text-xl"},"Edit User",-1),L={class:"mx-auto container max-w-4xl flex items-center justify-center mt-4"},P={class:"rounded w-full p-2 bg-white"},T=u({name:"EditUser"}),vt=u(n(p({},T),{setup(e){const t=g(()=>{var r;return(r=U().props.value)==null?void 0:r.model});k(),B();const o=r=>{H.Inertia.visit(l("acacia.auth.users.index"))};return(r,$)=>{const _=b("Head");return F(),C(E,null,[i(_,{title:"Edit User"}),i(N,null,{header:c(()=>[s("div",y,[i(V,{href:d(l)("acacia.auth.users.index")},null,8,["href"]),I])]),default:c(()=>[s("div",L,[s("div",P,[i(j,{model:d(t),onUpdated:o},null,8,["model"])])])]),_:1})],64)}}}));export{vt as default};