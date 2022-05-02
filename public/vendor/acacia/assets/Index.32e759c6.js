var J=Object.defineProperty,Q=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var O=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var z=(d,s,n)=>s in d?J(d,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[s]=n,B=(d,s)=>{for(var n in s||(s={}))X.call(s,n)&&z(d,n,s[n]);if(O)for(var n of O(s))Z.call(s,n)&&z(d,n,s[n]);return d},E=(d,s)=>Q(d,W(s));import{d as P,h as y,j as c,a as ee,b as te,c as ae,e as o,w as l,g as a,_ as ie,F as oe,o as f,f as p,n as x,l as w,t as R,p as le,$ as se,q as ne,M as j,a0 as A}from"./main.9e765f7d.js";import re from"./Backend.d947867c.js";import pe from"./PrimeDatatables.0582f2ad.js";import{s as u}from"./column.esm.6c61d2a3.js";import{s as v}from"./button.esm.a5ac1061.js";import{s as de}from"./contextmenu.esm.bb623b07.js";import{d as F}from"./dayjs.min.ae3816ac.js";import{s as U}from"./dialog.esm.20a296d3.js";import ce from"./CreateForm.02bb6225.js";import me from"./EditForm.bd77573a.js";import ue from"./ShowForm.1bab0a7f.js";import{s as ve}from"./message.esm.a16f09f2.js";import"./Sidebar.485bfd5b.js";import"./SidebarLinkGroup.cb8761b1.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.bf84026c.js";import"./Header.61e29fbc.js";import"./ModalSearch.ed130d60.js";import"./DropdownNotifications.e398f91c.js";import"./DropdownHelp.9bd762b4.js";import"./DropdownProfile.a72bb30f.js";import"./user-avatar-32.07bf604b.js";import"./WelcomeBanner.76c639d8.js";import"./DashboardAvatars.8beba91a.js";import"./DropdownFilter.676b5b1f.js";import"./Datepicker.e4af13a9.js";import"./vue-flatpickr.min.9bcaefd2.js";import"./SidebarLink.20e5744c.js";import"./confirmdialog.esm.f379260d.js";import"./ripple.esm.1fe20658.js";import"./SidebarParentLink.898a9f6e.js";import"./inputtext.esm.dc0f2264.js";import"./datatable.esm.3689bee8.js";import"./paginator.esm.d428c35b.js";import"./dropdown.esm.5bafa883.js";import"./overlayeventbus.esm.ef5cc0da.js";import"./virtualscroller.esm.76cd2139.js";import"./inputnumber.esm.2f528c5c.js";import"./inputswitch.esm.90fe6344.js";import"./textarea.esm.a52171b9.js";import"./AcaciaRichSelect.1af0e202.js";import"./vue-select.c5557806.js";import"./tag.esm.e2e26d3d.js";import"./AcaciaDd.0fbaa96e.js";const fe=p("title",null,"Relationships",-1),be=p("h4",{class:"font-black text-2xl px-1 md:px-4"},"Relationships",-1),he={class:"mx-auto flex container items-center justify-center mt-4"},ye={class:"rounded w-full p-2 bg-white"},xe={class:"flex flex-wrap items-center justify-end gap-2"},_e=ne("You are not authorized to access this content"),ke=p("h4",{class:"font-black text-xl"},"New Relationship",-1),we=p("h4",{class:"font-black text-xl"},"Relationship Details",-1),ge=p("h4",{class:"font-black text-xl"},"Edit Single Relationship",-1),Ce=P({name:"RelationshipsIndex"}),bt=P(E(B({},Ce),{setup(d){const s=y("api.v1.acacia-relationships.dt"),n="relationships-dt",V=c(["id","type","method","related_key","related_table","local_key","label_column","is_recursive","is_morph","morph_type_column","morph_id_column","in_list","created_at","updated_at"]),g=c(null),C=c(),M=c([]),q=ee(),S=te(),Y=c(null),b=c(!1),h=c(!1),_=c(!1),r=c(null),N=i=>[{label:"Details",icon:"pi pi-eye",command:async()=>{r.value=null,await T(i),_.value=!0},visible:()=>{var e;return(e=i==null?void 0:i.can)==null?void 0:e.view}},{separator:!0},{label:"Edit",icon:"pi pi-pencil",command:async()=>{r.value=null,await T(i),h.value=!0},visible:()=>{var e;return(e=i==null?void 0:i.can)==null?void 0:e.update}},{label:"Delete",icon:"pi pi-trash",command:()=>{q.require({message:"Are you sure you want to delete this record?",header:"Confirm Deletion",accept:()=>I(i)})},visible:()=>{var e;return(e=i==null?void 0:i.can)==null?void 0:e.delete}}],T=async i=>{A.get(y("api.v1.acacia-relationships.show",i)).then(e=>{var m;r.value=(m=e.data)==null?void 0:m.payload}).catch(e=>{console.error(e),r.value=null})},$=()=>{Y.value=new Date().toUTCString()},K=async(i,e)=>{M.value=N(e),await j(),C.value.show(i)},H=async i=>{M.value=N(i.data),await j(),C.value.show(i.originalEvent)},I=async function(i){var e,m,k;try{const t=await A.delete(y("api.v1.acacia-relationships.destroy",i));S.add({severity:"success",detail:t.data.message,life:3e3}),$()}catch(t){console.log(t);const D=((m=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:m.message)||((k=t==null?void 0:t.data)==null?void 0:k.message)||(t==null?void 0:t.message)||t||"Server error";S.add({severity:"error",detail:D,summary:"Server Error",life:1e4})}},L=i=>{b.value=!1,$()},G=i=>{h.value=!1,$()};return(i,e)=>(f(),ae(oe,null,[o(a(ie),null,{default:l(()=>[fe]),_:1}),o(re,null,{header:l(()=>[be]),default:l(()=>{var m,k;return[p("div",he,[p("div",ye,[p("div",xe,[(m=i.$page.props.can)!=null&&m.create?(f(),x(a(v),{key:0,onClick:e[0]||(e[0]=t=>b.value=!0),"aria-label":"New Comment",label:"New Relationship",icon:"pi pi-plus"})):w("",!0)]),(k=i.$page.props.can)!=null&&k.viewAny?(f(),x(pe,{key:0,apiUrl:a(s),columnFilters:{},searchableColumns:V.value,stateKey:n,defaultSortField:"id",contextMenu:"",contextMenuSelection:a(g),"onUpdate:contextMenuSelection":e[1]||(e[1]=t=>se(g)?g.value=t:null),onRowContextmenu:H,rowHover:!0,refresh:a(Y)},{default:l(()=>[o(a(u),{field:"schematic.model_class",header:"Model",sortable:!0}),o(a(u),{field:"method",header:"Method",sortable:!0},{body:l(({data:t})=>[p("code",null,"->"+R(t.method)+"()",1)]),_:1}),o(a(u),{field:"type",header:"Type",sortable:!0}),o(a(u),{field:"related_table",header:"Related Table",sortable:!0}),o(a(u),{field:"local_key",header:"Local Key",sortable:!0}),o(a(u),{field:"created_at",header:"Created At",sortable:!0},{body:l(({data:t})=>[p("span",null,R(t.created_at?a(F)(t.created_at).format("MMM DD, YYYY hh:mm a"):"-"),1)]),_:1}),o(a(u),{field:"updated_at",header:"Updated At",sortable:!0},{body:l(({data:t})=>[p("span",null,R(t.updated_at?a(F)(t.updated_at).format("MMM DD, YYYY hh:mm a"):"-"),1)]),_:1}),o(a(u),null,{body:l(t=>[o(a(v),{class:le(["","p-button-text"]),onClick:D=>K(D,t.data),"icon-pos":"right",icon:"pi pi-ellipsis-v",label:"Options"},null,8,["onClick"])]),_:1})]),_:1},8,["apiUrl","searchableColumns","contextMenuSelection","refresh"])):(f(),x(a(ve),{key:1,severity:"error"},{default:l(()=>[_e]),_:1}))])]),o(a(de),{ref_key:"contextMenu",ref:C,model:a(M)},null,8,["model"]),o(a(U),{position:"top",maximizable:!0,visible:b.value,"onUpdate:visible":e[4]||(e[4]=t=>b.value=t),modal:!0,breakpoints:{"1600px":"50vw","960px":"75vw","540px":"100vw"},style:{width:"35vw"}},{header:l(()=>[ke]),footer:l(()=>[o(a(v),{label:"Open in a Page",icon:"pi pi-window",onClick:e[2]||(e[2]=t=>i.$inertia.visit(a(y)("acacia.g-panel.acacia-relationships.create"))),class:"p-button-text"}),o(a(v),{label:"Close",icon:"pi pi-times",onClick:e[3]||(e[3]=t=>b.value=!1),class:"p-button-text"})]),default:l(()=>[b.value?(f(),x(ce,{key:0,onCreated:L})):w("",!0)]),_:1},8,["visible"]),o(a(U),{position:"top",maximizable:!0,visible:_.value,"onUpdate:visible":e[7]||(e[7]=t=>_.value=t),modal:!0,breakpoints:{"1600px":"50vw","960px":"75vw","540px":"100vw"},style:{width:"35vw"}},{header:l(()=>[we]),footer:l(()=>[o(a(v),{label:"Open in a Page",icon:"pi pi-window",onClick:e[5]||(e[5]=t=>i.$inertia.visit(a(y)("acacia.g-panel.acacia-relationships.show",a(r)))),class:"p-button-text"}),o(a(v),{label:"Close",icon:"pi pi-times",onClick:e[6]||(e[6]=t=>(_.value=!1,r.value=null)),class:"p-button-text"})]),default:l(()=>[_.value&&a(r)?(f(),x(ue,{key:0,model:a(r)},null,8,["model"])):w("",!0)]),_:1},8,["visible"]),o(a(U),{position:"top",maximizable:!0,visible:h.value,"onUpdate:visible":e[10]||(e[10]=t=>h.value=t),modal:!0,breakpoints:{"1600px":"50vw","960px":"75vw","540px":"100vw"},style:{width:"35vw"}},{header:l(()=>[ge]),footer:l(()=>[o(a(v),{label:"Open in a Page",icon:"pi pi-window",onClick:e[8]||(e[8]=t=>i.$inertia.visit(a(y)("acacia.g-panel.acacia-relationships.edit",a(r)))),class:"p-button-text"}),o(a(v),{label:"Close",icon:"pi pi-times",onClick:e[9]||(e[9]=t=>(h.value=!1,r.value=null)),class:"p-button-text"})]),default:l(()=>[h.value&&a(r)?(f(),x(me,{key:0,model:a(r),onUpdated:G},null,8,["model"])):w("",!0)]),_:1},8,["visible"])]}),_:1})],64))}}));export{bt as default};
