var C=Object.defineProperty,N=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(r,l,_)=>l in r?C(r,l,{enumerable:!0,configurable:!0,writable:!0,value:_}):r[l]=_,Y=(r,l)=>{for(var _ in l||(l={}))x.call(l,_)&&g(r,_,l[_]);if(k)for(var _ of k(l))I.call(l,_)&&g(r,_,l[_]);return r},j=(r,l)=>N(r,w(l));import{e as M,A as R,p as b,g as T,m as a,i as B,j as d,w as s,v as p,D as S,o as n,y as t,z as i,k as D}from"./vendor.05df324e.js";import{d as A}from"./dayjs.min.2d765ffc.js";import{s as u}from"./tag.esm.ade7af22.js";import{s as V}from"./message.esm.2b7d3da1.js";import c from"./AcaciaDd.922ceb07.js";import"./ripple.esm.574b991d.js";import"./plugin-vue_export-helper.21dcd24c.js";const L={key:0,class:"gap-4"},z=t("Id"),K=t("Type"),E=t("Method"),F=t("Related Key"),P=t("Related Table"),U=t("Local Key"),$=t("Label Column"),q=t("Is Recursive"),G=t("Is Morph"),H=t("Morph Type Column"),J=t("Morph Id Column"),O=t("Server Validation"),Q=t("In List"),W=t("Created At"),X=t("Updated At"),Z=t("Related"),ee=t("Schematic"),se=t("You are not authorized to view this record"),te=M({name:"RelationshipShowForm"}),me=M(j(Y({},te),{props:{model:{}},emits:["updated","error"],setup(r,{emit:l}){const _=r;R(()=>{var h,y;return(y=(h=S().props)==null?void 0:h.value)==null?void 0:y.flash}),b([]),b(!1),T();const o=_.model;return(h,y)=>{var f,v;return((v=(f=a(o))==null?void 0:f.can)==null?void 0:v.view)?(n(),B("dl",L,[d(c,{class:"my-1"},{dt:s(()=>[z]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.id)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[K]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.type)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[E]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.method)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[F]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.related_key)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[P]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.related_table)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[U]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.local_key)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[$]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.label_column)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[q]),default:s(()=>{var e;return[((e=a(o))==null?void 0:e.is_recursive)?(n(),p(a(u),{key:0,icon:"pi pi-check",severity:"success",value:"Yes"})):(n(),p(a(u),{key:1,icon:"pi pi-times",severity:"danger",value:"No"}))]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[G]),default:s(()=>{var e;return[((e=a(o))==null?void 0:e.is_morph)?(n(),p(a(u),{key:0,icon:"pi pi-check",severity:"success",value:"Yes"})):(n(),p(a(u),{key:1,icon:"pi pi-times",severity:"danger",value:"No"}))]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[H]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.morph_type_column)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[J]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.morph_id_column)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[O]),default:s(()=>{var e;return[t(" "+i(((e=a(o))==null?void 0:e.server_validation)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[Q]),default:s(()=>{var e;return[((e=a(o))==null?void 0:e.in_list)?(n(),p(a(u),{key:0,icon:"pi pi-check",severity:"success",value:"Yes"})):(n(),p(a(u),{key:1,icon:"pi pi-times",severity:"danger",value:"No"}))]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[W]),default:s(()=>{var e,m;return[D("strong",null,i(((e=a(o))==null?void 0:e.created_at)?a(A)((m=a(o))==null?void 0:m.created_at).format("MMM DD, YYYY hh:mm A"):"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[X]),default:s(()=>{var e,m;return[D("strong",null,i(((e=a(o))==null?void 0:e.updated_at)?a(A)((m=a(o))==null?void 0:m.updated_at).format("MMM DD, YYYY hh:mm A"):"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[Z]),default:s(()=>{var e,m;return[t(" "+i(((m=(e=a(o))==null?void 0:e.related)==null?void 0:m.table_name)||"-"),1)]}),_:1}),d(c,{class:"my-1"},{dt:s(()=>[ee]),default:s(()=>{var e,m;return[t(" "+i(((m=(e=a(o))==null?void 0:e.schematic)==null?void 0:m.table_name)||"-"),1)]}),_:1})])):(n(),p(a(V),{key:1,severity:"error"},{default:s(()=>[se]),_:1}))}}}));export{me as default};