var W=Object.defineProperty,J=Object.defineProperties;var Q=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var F=(d,l,n)=>l in d?W(d,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):d[l]=n,P=(d,l)=>{for(var n in l||(l={}))X.call(l,n)&&F(d,n,l[n]);if(Y)for(var n of Y(l))Z.call(l,n)&&F(d,n,l[n]);return d},A=(d,l)=>J(d,Q(l));import{e as B,d as x,p as m,f as ee,g as te,i as ae,j as o,w as i,m as a,a6 as se,F as oe,o as f,k as p,v as j,s as w,z,x as ie,a7 as le,y as ne,Y as E,a as O}from"./vendor.05df324e.js";import re from"./Backend.5aa1bcce.js";import de from"./PrimeDatatables.06075155.js";import{s as h}from"./column.esm.cc8b8b77.js";import{s as u}from"./button.esm.cbb15c31.js";import{s as pe}from"./contextmenu.esm.552fe433.js";import{d as T}from"./dayjs.min.2d765ffc.js";import{s as $}from"./dialog.esm.7f94084b.js";import me from"./CreateForm.6a198f7b.js";import ce from"./EditForm.6f43923a.js";import ue from"./ShowForm.1d78c1b9.js";import{s as fe}from"./message.esm.2b7d3da1.js";import"./Sidebar.eaa3bc39.js";import"./SidebarLinkGroup.631e5e48.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Header.f4796df8.js";import"./ModalSearch.0fe5a03a.js";import"./DropdownNotifications.8ff848f9.js";import"./DropdownHelp.ee3a80f5.js";import"./DropdownProfile.b6a2cd02.js";import"./user-avatar-32.07bf604b.js";import"./WelcomeBanner.e6597c05.js";import"./DashboardAvatars.03cd71bc.js";import"./DropdownFilter.d3d0573f.js";import"./Datepicker.0a132f4e.js";import"./vue-flatpickr.min.87ca1928.js";import"./SidebarLink.e30e4992.js";import"./confirmdialog.esm.5be0612a.js";import"./ripple.esm.574b991d.js";import"./SidebarParentLink.acf5cc4a.js";import"./inputtext.esm.b08d2117.js";import"./datatable.esm.6e02ebef.js";import"./paginator.esm.ff35b289.js";import"./dropdown.esm.573df5c1.js";import"./overlayeventbus.esm.d529c5a8.js";import"./virtualscroller.esm.adfef9da.js";import"./inputnumber.esm.f09ada2c.js";import"./AssignPerms.84da0a05.js";import"./tabpanel.esm.0a9d5bce.js";import"./AcaciaDd.922ceb07.js";const ve=p("title",null,"Roles",-1),be=p("h4",{class:"font-black text-2xl px-1 md:px-4"},"Roles",-1),xe={class:"mx-auto flex container items-center justify-center mt-4"},je={class:"rounded w-full p-2 bg-white"},he={class:"flex flex-wrap items-center justify-end gap-2"},ye=ne("You are not authorized to access this content"),ke=p("h4",{class:"font-black text-xl"},"New Role",-1),we=p("h4",{class:"font-black text-xl"},"Role Details",-1),ge=p("h4",{class:"font-black text-xl"},"Edit Single Role",-1),_e=B({name:"RolesIndex"}),ct=B(A(P({},_e),{setup(d){const l=x("api.v1.roles.dt"),n="roles-dt",V=m(["id","name","guard_name","created_at","updated_at"]),g=m(null),_=m(),C=m([]),H=ee(),S=te(),N=m(null),v=m(!1),b=m(!1),y=m(!1),r=m(null),R=s=>[{label:"Details",icon:"pi pi-eye",command:async()=>{r.value=null,await U(s),y.value=!0},visible:()=>{var e;return(e=s==null?void 0:s.can)==null?void 0:e.view}},{separator:!0},{label:"Edit",icon:"pi pi-pencil",command:async()=>{r.value=null,await U(s),b.value=!0},visible:()=>{var e;return(e=s==null?void 0:s.can)==null?void 0:e.update}},{label:"Delete",icon:"pi pi-trash",command:()=>{H.require({message:"Are you sure you want to delete this record?",header:"Confirm Deletion",accept:()=>I(s)})},visible:()=>{var e;return(e=s==null?void 0:s.can)==null?void 0:e.delete}}],U=async s=>{O.get(x("api.v1.roles.show",s)).then(e=>{var c;r.value=(c=e.data)==null?void 0:c.payload}).catch(e=>{console.error(e),r.value=null})},M=()=>{N.value=new Date().toUTCString()},L=async(s,e)=>{C.value=R(e),await E(),_.value.show(s)},G=async s=>{C.value=R(s.data),await E(),_.value.show(s.originalEvent)},I=async function(s){var e,c,k;try{const t=await O.delete(x("api.v1.roles.destroy",s));S.add({severity:"success",detail:t.data.message,life:3e3}),M()}catch(t){console.log(t);const D=((c=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:c.message)||((k=t==null?void 0:t.data)==null?void 0:k.message)||(t==null?void 0:t.message)||t||"Server error";S.add({severity:"error",detail:D,summary:"Server Error",life:1e4})}},q=s=>{v.value=!1,M()},K=s=>{b.value=!1,M()};return(s,e)=>(f(),ae(oe,null,[o(a(se),null,{default:i(()=>[ve]),_:1}),o(re,null,{header:i(()=>[be]),default:i(()=>{var c,k;return[p("div",xe,[p("div",je,[p("div",he,[((c=s.$page.props.can)==null?void 0:c.create)?(f(),j(a(u),{key:0,onClick:e[0]||(e[0]=t=>v.value=!0),"aria-label":"New Comment",label:"New Role",icon:"pi pi-plus"})):w("",!0)]),((k=s.$page.props.can)==null?void 0:k.viewAny)?(f(),j(de,{key:0,apiUrl:a(l),columnFilters:{},searchableColumns:V.value,stateKey:n,defaultSortField:"id",contextMenu:"",contextMenuSelection:a(g),"onUpdate:contextMenuSelection":e[1]||(e[1]=t=>le(g)?g.value=t:null),onRowContextmenu:G,rowHover:!0,refresh:a(N)},{default:i(()=>[o(a(h),{field:"id",header:"Id",sortable:!0}),o(a(h),{field:"name",header:"Name",sortable:!0}),o(a(h),{field:"guard_name",header:"Guard Name",sortable:!0}),o(a(h),{field:"created_at",header:"Created At",sortable:!0},{body:i(({data:t})=>[p("span",null,z(t.created_at?a(T)(t.created_at).format("MMM DD, YYYY hh:mm a"):"-"),1)]),_:1}),o(a(h),{field:"updated_at",header:"Updated At",sortable:!0},{body:i(({data:t})=>[p("span",null,z(t.updated_at?a(T)(t.updated_at).format("MMM DD, YYYY hh:mm a"):"-"),1)]),_:1}),o(a(h),null,{body:i(t=>[o(a(u),{class:ie(["","p-button-text"]),onClick:D=>L(D,t.data),"icon-pos":"right",icon:"pi pi-ellipsis-v",label:"Options"},null,8,["onClick"])]),_:1})]),_:1},8,["apiUrl","searchableColumns","contextMenuSelection","refresh"])):(f(),j(a(fe),{key:1,severity:"error"},{default:i(()=>[ye]),_:1}))])]),o(a(pe),{ref_key:"contextMenu",ref:_,model:a(C)},null,8,["model"]),o(a($),{position:"top",maximizable:!0,visible:v.value,"onUpdate:visible":e[4]||(e[4]=t=>v.value=t),modal:!0,breakpoints:{"1600px":"50vw","960px":"75vw","540px":"100vw"},style:{width:"35vw"}},{header:i(()=>[ke]),footer:i(()=>[o(a(u),{label:"Open in a Page",icon:"pi pi-window",onClick:e[2]||(e[2]=t=>s.$inertia.visit(a(x)("acacia.auth.roles.create"))),class:"p-button-text"}),o(a(u),{label:"Close",icon:"pi pi-times",onClick:e[3]||(e[3]=t=>v.value=!1),class:"p-button-text"})]),default:i(()=>[v.value?(f(),j(me,{key:0,onCreated:q})):w("",!0)]),_:1},8,["visible"]),o(a($),{position:"top",maximizable:!0,visible:y.value,"onUpdate:visible":e[7]||(e[7]=t=>y.value=t),modal:!0,breakpoints:{"1600px":"50vw","960px":"75vw","540px":"100vw"},style:{width:"35vw"}},{header:i(()=>[we]),footer:i(()=>[o(a(u),{label:"Open in a Page",icon:"pi pi-window",onClick:e[5]||(e[5]=t=>s.$inertia.visit(a(x)("acacia.auth.roles.show",a(r)))),class:"p-button-text"}),o(a(u),{label:"Close",icon:"pi pi-times",onClick:e[6]||(e[6]=t=>(y.value=!1,r.value=null)),class:"p-button-text"})]),default:i(()=>[y.value&&a(r)?(f(),j(ue,{key:0,model:a(r)},null,8,["model"])):w("",!0)]),_:1},8,["visible"]),o(a($),{position:"top",maximizable:!0,visible:b.value,"onUpdate:visible":e[10]||(e[10]=t=>b.value=t),modal:!0,breakpoints:{"1600px":"50vw","960px":"75vw","540px":"100vw"},style:{width:"50vw"}},{header:i(()=>[ge]),footer:i(()=>[o(a(u),{label:"Open in a Page",icon:"pi pi-window",onClick:e[8]||(e[8]=t=>s.$inertia.visit(a(x)("acacia.auth.roles.edit",a(r)))),class:"p-button-text"}),o(a(u),{label:"Close",icon:"pi pi-times",onClick:e[9]||(e[9]=t=>(b.value=!1,r.value=null)),class:"p-button-text"})]),default:i(()=>[b.value&&a(r)?(f(),j(ce,{key:0,model:a(r),onUpdated:K},null,8,["model"])):w("",!0)]),_:1},8,["visible"])]}),_:1})],64))}}));export{ct as default};
