var w=Object.defineProperty,x=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var g=(d,a,o)=>a in d?w(d,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):d[a]=o,j=(d,a)=>{for(var o in a||(a={}))B.call(a,o)&&g(d,o,a[o]);if(y)for(var o of y(a))C.call(a,o)&&g(d,o,a[o]);return d},Y=(d,a)=>x(d,N(a));import{e as A,A as V,p as D,g as z,m as s,v,w as t,D as I,o as M,j as m,k as u,y as r,z as _}from"./vendor.05df324e.js";import{d as b}from"./dayjs.min.2d765ffc.js";import{s as P}from"./message.esm.2b7d3da1.js";import l from"./AcaciaDd.922ceb07.js";import{s as R,a as k}from"./tabpanel.esm.0a9d5bce.js";import"./ripple.esm.574b991d.js";import"./plugin-vue_export-helper.21dcd24c.js";const S={class:"gap-4"},T=r("Id"),$=r("Name"),F=r("Guard Name"),G=r("Created At"),U=r("Updated At"),q=r(" Assigned Roles "),E=r("You are not authorized to view this record"),H=A({name:"RoleShowForm"}),ee=A(Y(j({},H),{props:{model:{}},emits:["updated","error"],setup(d,{emit:a}){const o=d;V(()=>{var n,p;return(p=(n=I().props)==null?void 0:n.value)==null?void 0:p.flash}),D([]),D(!1),z();const c=o.model;return(n,p)=>{var f,h;return((h=(f=s(c))==null?void 0:f.can)==null?void 0:h.view)?(M(),v(s(R),{key:0},{default:t(()=>[m(s(k),{header:"Basic Info"},{default:t(()=>[u("dl",S,[m(l,{class:"my-1"},{dt:t(()=>[T]),default:t(()=>{var e;return[r(" "+_(((e=s(c))==null?void 0:e.id)||"-"),1)]}),_:1}),m(l,{class:"my-1"},{dt:t(()=>[$]),default:t(()=>{var e;return[r(" "+_(((e=s(c))==null?void 0:e.name)||"-"),1)]}),_:1}),m(l,{class:"my-1"},{dt:t(()=>[F]),default:t(()=>{var e;return[r(" "+_(((e=s(c))==null?void 0:e.guard_name)||"-"),1)]}),_:1}),m(l,{class:"my-1"},{dt:t(()=>[G]),default:t(()=>{var e,i;return[u("strong",null,_(((e=s(c))==null?void 0:e.created_at)?s(b)((i=s(c))==null?void 0:i.created_at).format("MMM DD, YYYY hh:mm A"):"-"),1)]}),_:1}),m(l,{class:"my-1"},{dt:t(()=>[U]),default:t(()=>{var e,i;return[u("strong",null,_(((e=s(c))==null?void 0:e.updated_at)?s(b)((i=s(c))==null?void 0:i.updated_at).format("MMM DD, YYYY hh:mm A"):"-"),1)]}),_:1})])]),_:1}),m(s(k),{header:"Permissions"},{default:t(()=>[q]),_:1})]),_:1})):(M(),v(s(P),{key:1,severity:"error"},{default:t(()=>[E]),_:1}))}}}));export{ee as default};