var V=Object.defineProperty,j=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(o,e,a)=>e in o?V(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a,f=(o,e)=>{for(var a in e||(e={}))x.call(e,a)&&_(o,a,e[a]);if(p)for(var a of p(e))B.call(e,a)&&_(o,a,e[a]);return o},h=(o,e)=>j(o,w(e));import{e as v,A as N,p as y,g as S,u as C,i as E,k as c,j as i,m as r,B as $,v as A,w as F,D as M,d as P,o as b,y as T}from"./vendor.05df324e.js";import{s as U}from"./button.esm.cbb15c31.js";import{s as z}from"./message.esm.2b7d3da1.js";import{s as g}from"./inputtext.esm.b08d2117.js";import"./ripple.esm.574b991d.js";const D=["onSubmit"],G={class:""},Y={class:"my-2"},q=c("label",null,"Name",-1),H={class:"my-2"},I=c("label",null,"Guard Name",-1),J={class:"text-right min-w-[300px] pt-2 border-t-2"},K=T("You are not authorized to perform this action"),L=v({name:"PermissionCreate"}),ee=v(h(f({},L),{emits:["created","error"],setup(o,{emit:e}){const a=N(()=>{var s,t;return(t=(s=M().props)==null?void 0:s.value)==null?void 0:t.flash});y([]),y(!1);const m=S(),d=C({name:null,guard_name:null}),k=async()=>{d.post(P("acacia.auth.permissions.store"),{onSuccess:s=>{var l;const t=s.props.flash;m.add({severity:"success",summary:"Success",detail:t==null?void 0:t.success,life:2e3});const n=(l=a.value)==null?void 0:l.payload;e("created",{payload:n})},onError:s=>{var l,u;let t=((l=a.value)==null?void 0:l.error)||(s==null?void 0:s.message)||(s==null?void 0:s.error)||s||"A server error occurred.";m.add({severity:"error",summary:"Error",detail:t,life:3e3});const n=(u=a.value)==null?void 0:u.payload;e("error",{payload:n,message:t})},onFinish:s=>{}})};return(s,t)=>{var n;return((n=s.$page.props.can)==null?void 0:n.create)?(b(),E("form",{key:0,onSubmit:$(k,["prevent"])},[c("div",G,[c("div",Y,[q,i(r(g),{class:"block w-full",modelValue:r(d).name,"onUpdate:modelValue":t[0]||(t[0]=l=>r(d).name=l)},null,8,["modelValue"])]),c("div",H,[I,i(r(g),{class:"block w-full",modelValue:r(d).guard_name,"onUpdate:modelValue":t[1]||(t[1]=l=>r(d).guard_name=l)},null,8,["modelValue"])])]),c("div",J,[i(r(U),{type:"submit",icon:"pi pi-check",label:"Save"})])],40,D)):(b(),A(r(z),{key:1,severity:"error"},{default:F(()=>[K]),_:1}))}}}));export{ee as default};