var A=Object.defineProperty,N=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(s,t,a)=>t in s?A(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,Y=(s,t)=>{for(var a in t||(t={}))B.call(t,a)&&y(s,a,t[a]);if(h)for(var a of h(t))C.call(t,a)&&y(s,a,t[a]);return s},g=(s,t)=>N(s,v(t));import{d as x,s as V,j as D,b as j,g as o,c as P,e as _,w as d,n as S,x as T,o as M,q as r,t as n,f as k}from"./main.9e765f7d.js";import{d as w}from"./dayjs.min.ae3816ac.js";import{s as b}from"./message.esm.a16f09f2.js";import i from"./AcaciaDd.0fbaa96e.js";import"./ripple.esm.1fe20658.js";import"./plugin-vue_export-helper.21dcd24c.js";const q={key:0,class:"gap-4"},z=r("Id"),E=r("Name"),F=r("Guard Name"),G=r("Created At"),I=r("Updated At"),U=r("You are not authorized to view this record"),H=x({name:"PermissionShowForm"}),X=x(g(Y({},H),{props:{model:{}},emits:["updated","error"],setup(s,{emit:t}){const a=s;V(()=>{var l,u;return(u=(l=T().props)==null?void 0:l.value)==null?void 0:u.flash}),D([]),D(!1),j();const c=a.model;return(l,u)=>{var p,f;return(f=(p=o(c))==null?void 0:p.can)!=null&&f.view?(M(),P("dl",q,[_(i,{class:"my-1"},{dt:d(()=>[z]),default:d(()=>{var e;return[r(" "+n(((e=o(c))==null?void 0:e.id)||"-"),1)]}),_:1}),_(i,{class:"my-1"},{dt:d(()=>[E]),default:d(()=>{var e;return[r(" "+n(((e=o(c))==null?void 0:e.name)||"-"),1)]}),_:1}),_(i,{class:"my-1"},{dt:d(()=>[F]),default:d(()=>{var e;return[r(" "+n(((e=o(c))==null?void 0:e.guard_name)||"-"),1)]}),_:1}),_(i,{class:"my-1"},{dt:d(()=>[G]),default:d(()=>{var e,m;return[k("strong",null,n((e=o(c))!=null&&e.created_at?o(w)((m=o(c))==null?void 0:m.created_at).format("MMM DD, YYYY hh:mm A"):"-"),1)]}),_:1}),_(i,{class:"my-1"},{dt:d(()=>[I]),default:d(()=>{var e,m;return[k("strong",null,n((e=o(c))!=null&&e.updated_at?o(w)((m=o(c))==null?void 0:m.updated_at).format("MMM DD, YYYY hh:mm A"):"-"),1)]}),_:1})])):(M(),S(o(b),{key:1,severity:"error"},{default:d(()=>[U]),_:1}))}}}));export{X as default};