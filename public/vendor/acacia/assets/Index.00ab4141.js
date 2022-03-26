import P from"./Backend.5aa1bcce.js";import{e as H,am as N,d as g,p as l,f as R,g as A,i as U,j as s,w as n,F as E,n as F,Y as D,a as L,r as i,o as v,k as _,z as B,v as S,x as O,y as I}from"./vendor.05df324e.js";import V from"./PrimeDatatables.06075155.js";import{s as z}from"./badge.esm.5ac8bf49.js";import{s as q}from"./column.esm.cc8b8b77.js";import{s as G}from"./contextmenu.esm.552fe433.js";import{s as W}from"./button.esm.cbb15c31.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./Sidebar.eaa3bc39.js";import"./SidebarLinkGroup.631e5e48.js";import"./Header.f4796df8.js";import"./ModalSearch.0fe5a03a.js";import"./DropdownNotifications.8ff848f9.js";import"./DropdownHelp.ee3a80f5.js";import"./DropdownProfile.b6a2cd02.js";import"./user-avatar-32.07bf604b.js";import"./WelcomeBanner.e6597c05.js";import"./DashboardAvatars.03cd71bc.js";import"./DropdownFilter.d3d0573f.js";import"./Datepicker.0a132f4e.js";import"./vue-flatpickr.min.87ca1928.js";import"./SidebarLink.e30e4992.js";import"./confirmdialog.esm.5be0612a.js";import"./ripple.esm.574b991d.js";import"./dialog.esm.7f94084b.js";import"./SidebarParentLink.acf5cc4a.js";import"./inputtext.esm.b08d2117.js";import"./datatable.esm.6e02ebef.js";import"./paginator.esm.ff35b289.js";import"./dropdown.esm.573df5c1.js";import"./overlayeventbus.esm.d529c5a8.js";import"./virtualscroller.esm.adfef9da.js";import"./inputnumber.esm.f09ada2c.js";const J=H({name:"Index",components:{PrimeDatatables:V,Backend:P,Head:N,Column:q,Badge:z,ContextMenu:G,Button:W},setup(){const e="SMS Templates",m=g("api.sms.templates.index"),k="sms-templates-dt",w=l(["id","name","message"]),y=l(null),C=l(),c=l(),o=l([]),d=R(),p=A(),u=l(null),f=a=>[{label:"Details",icon:"pi pi-eye",command:()=>F.Inertia.get(g("sms.templates.show",a)),visible:()=>!0},{label:"Delete",icon:"pi pi-trash",command:()=>{d.require({message:"Are you sure you want to delete this record?",header:"Confirm Deletion",accept:()=>T(a)})},visible:()=>!0}],b=()=>{u.value=new Date().toUTCString()},r=async(a,h)=>{o.value=f(h),await D(),c.value.show(a)},j=async a=>{o.value=f(a.data),await D(),c.value.show(a.originalEvent)},T=async function(a){var h,x,M;try{const t=await L.delete(g("api.sms.templates.destroy",a));p.add({severity:"success",detail:t.data.message}),b()}catch(t){const $=((x=(h=t==null?void 0:t.response)==null?void 0:h.data)==null?void 0:x.message)||((M=t==null?void 0:t.data)==null?void 0:M.message)||(t==null?void 0:t.message)||t||"Server error";p.add({severity:"error",detail:$,summary:"Server Error"})}};return{title:e,apiUrl:m,dtId:k,searchableColumns:w,optionsMenu:C,contextMenu:c,refreshTime:u,options:o,selectedRow:y,showContextMenu:j,refresh:b,toggleOptions:r}}}),K={class:"p-2 bg-indigo-500 text-indigo-50 border-b font-black text-2xl"},Q={class:"p-2 mt-2"},X=I("Active"),Z=I("Inactive");function ee(e,m,k,w,y,C){const c=i("Head"),o=i("Column"),d=i("Badge"),p=i("Button"),u=i("PrimeDatatables"),f=i("ContextMenu"),b=i("Backend");return v(),U(E,null,[s(c,null,{default:n(()=>[_("title",null,B(e.title),1)]),_:1}),s(b,null,{header:n(()=>[_("h4",K,B(e.title),1)]),default:n(()=>[_("div",Q,[s(u,{class:"p-datatable-sm",contextMenu:"",contextMenuSelection:e.selectedRow,"onUpdate:contextMenuSelection":m[0]||(m[0]=r=>e.selectedRow=r),onRowContextmenu:e.showContextMenu,"row-hover":!0,refresh:e.refreshTime,"default-sort-desc":!0,"default-sort-field":"id","state-key":e.dtId,"column-filters":{},"searchable-columns":e.searchableColumns,"api-url":e.apiUrl,title:e.title},{default:n(()=>[s(o,{field:"id",header:"ID",sortable:!0}),s(o,{field:"name",header:"Name",sortable:!0}),s(o,{field:"message",header:"Message",sortable:!0}),s(o,{field:"active",header:"Status",sortable:!0},{body:n(r=>[r.data.active?(v(),S(d,{key:0,severity:"success"},{default:n(()=>[X]),_:1})):(v(),S(d,{key:1,severity:"danger"},{default:n(()=>[Z]),_:1}))]),_:1}),s(o,null,{body:n(r=>[s(p,{class:O(["","p-button-text"]),onClick:j=>e.toggleOptions(j,r.data),"icon-pos":"right",icon:"pi pi-ellipsis-v",label:"Actions"},null,8,["onClick"])]),_:1})]),_:1},8,["contextMenuSelection","onRowContextmenu","refresh","state-key","searchable-columns","api-url","title"]),s(f,{ref:"contextMenu",model:e.options},null,8,["model"])])]),_:1})],64)}var He=Y(J,[["render",ee]]);export{He as default};
