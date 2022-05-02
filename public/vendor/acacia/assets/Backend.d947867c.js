import E from"./Sidebar.485bfd5b.js";import L from"./Header.61e29fbc.js";import D from"./WelcomeBanner.76c639d8.js";import T from"./DashboardAvatars.8beba91a.js";import N from"./DropdownFilter.676b5b1f.js";import V from"./Datepicker.e4af13a9.js";import F from"./SidebarLink.20e5744c.js";import{s as H,a as j}from"./confirmdialog.esm.f379260d.js";import q from"./SidebarParentLink.898a9f6e.js";import{_ as z}from"./plugin-vue_export-helper.21dcd24c.js";import{d as A,j as W,c as t,e as l,w as i,f as u,k as h,l as m,r as n,o as e,F as s,m as v,n as c,p as G,q as _,t as S}from"./main.9e765f7d.js";import"./SidebarLinkGroup.cb8761b1.js";import"./Logo.bf84026c.js";import"./ModalSearch.ed130d60.js";import"./DropdownNotifications.e398f91c.js";import"./DropdownHelp.9bd762b4.js";import"./DropdownProfile.a72bb30f.js";import"./user-avatar-32.07bf604b.js";import"./vue-flatpickr.min.9bcaefd2.js";import"./ripple.esm.1fe20658.js";import"./dialog.esm.20a296d3.js";import"./button.esm.a5ac1061.js";const I=A({name:"Backend",components:{SidebarParentLink:q,SidebarLink:F,Sidebar:E,Header:L,WelcomeBanner:D,DashboardAvatars:T,FilterButton:N,Datepicker:V,Toast:H,ConfirmDialog:j},setup(){const r=W(!1);return{sidebarOpen:r,closeSidebar:x=>{console.log("closing sidebar"),r.value=!1}}}}),J={class:"flex h-screen overflow-hidden"},K={class:"bg-gray-100 relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden"},M={class:"py-1"},P={key:0,class:"font-bold p-2 text-xl border-b"};function Q(r,f,x,R,U,X){const b=n("SidebarLink"),k=n("SidebarParentLink"),y=n("Sidebar"),w=n("Header"),C=n("Toast"),$=n("ConfirmDialog");return e(),t("div",J,[l(y,{sidebarOpen:r.sidebarOpen,onCloseSidebar:r.closeSidebar},{default:i(d=>[(e(!0),t(s,null,v(r.$page.props.acacia.sidebar_menu,(a,O)=>(e(),t(s,{key:O},[!a.has_children&&a.shown?(e(),c(b,{key:0,href:a.href,active:a.active},{icon:i(()=>[u("i",{class:G(["menu.icon",[a.active&&"text-primary",a.icon]])},null,2)]),default:i(()=>[_(" "+S(a.title),1)]),_:2},1032,["href","active"])):a.shown?(e(),c(k,{key:1,"sidebar-expanded":d.sidebarExpanded,onExpandSidebar:d.expandSidebar,icon:a.icon,header:a.title,active:a.active},{default:i(()=>[(e(!0),t(s,null,v(a.children,(o,g)=>(e(),t(s,{key:g},[!o.has_children&&o.shown?(e(),c(b,{key:0,submenu:!0,href:o.href,icon:o.icon,active:o.active},{default:i(()=>[_(S(o.title),1)]),_:2},1032,["href","icon","active"])):o.shown?(e(),c(k,{key:1,submenu:!0,"sidebar-expanded":d.sidebarExpanded,onExpandSidebar:d.expandSidebar,icon:o.icon,header:o.title,active:o.active},{default:i(()=>[(e(!0),t(s,null,v(o.children,(p,B)=>(e(),t(s,{key:B},[p.shown?(e(),c(b,{key:0,submenu:!0,href:p.href,icon:p.icon,active:p.active},{default:i(()=>[_(S(p.title),1)]),_:2},1032,["href","icon","active"])):m("",!0)],64))),128))]),_:2},1032,["sidebar-expanded","onExpandSidebar","icon","header","active"])):m("",!0)],64))),128))]),_:2},1032,["sidebar-expanded","onExpandSidebar","icon","header","active"])):m("",!0)],64))),128))]),_:1},8,["sidebarOpen","onCloseSidebar"]),u("div",K,[l(w,{sidebarOpen:r.sidebarOpen,onToggleSidebar:f[0]||(f[0]=d=>r.sidebarOpen=!r.sidebarOpen)},null,8,["sidebarOpen"]),u("main",M,[l(C),l($),r.$slots.header?(e(),t("div",P,[h(r.$slots,"header")])):m("",!0),h(r.$slots,"default")])])])}var he=z(I,[["render",Q]]);export{he as default};
