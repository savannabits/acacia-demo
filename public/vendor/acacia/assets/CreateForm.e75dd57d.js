var k=Object.defineProperty,w=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(t,e,a)=>e in t?k(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,f=(t,e)=>{for(var a in e||(e={}))N.call(e,a)&&_(t,a,e[a]);if(p)for(var a of p(e))S.call(e,a)&&_(t,a,e[a]);return t},h=(t,e)=>w(t,x(e));import{d as g,s as B,j as v,b as C,u as E,c as $,f as n,e as i,g as r,v as F,n as M,w as T,x as U,h as j,o as y,q}from"./main.9e765f7d.js";import{s as z}from"./button.esm.a5ac1061.js";import{s as A}from"./message.esm.a16f09f2.js";import{s as b}from"./inputtext.esm.dc0f2264.js";import"./ripple.esm.1fe20658.js";const G=["onSubmit"],P={class:""},R={class:"my-2"},Y=n("label",null,"Name",-1),D={class:"my-2"},H=n("label",null,"Guard Name",-1),I={class:"text-right min-w-[300px] pt-2 border-t-2"},J=q("You are not authorized to perform this action"),K=g({name:"RoleCreate"}),ee=g(h(f({},K),{emits:["created","error"],setup(t,{emit:e}){const a=B(()=>{var s,o;return(o=(s=U().props)==null?void 0:s.value)==null?void 0:o.flash});v([]),v(!1);const u=C(),d=E({name:null,guard_name:null}),V=async()=>{d.post(j("acacia.auth.roles.store"),{onSuccess:s=>{var l;const o=s.props.flash;u.add({severity:"success",summary:"Success",detail:o==null?void 0:o.success,life:2e3});const c=(l=a.value)==null?void 0:l.payload;e("created",{payload:c})},onError:s=>{var l,m;let o=((l=a.value)==null?void 0:l.error)||(s==null?void 0:s.message)||(s==null?void 0:s.error)||s||"A server error occurred.";u.add({severity:"error",summary:"Error",detail:o,life:3e3});const c=(m=a.value)==null?void 0:m.payload;e("error",{payload:c,message:o})},onFinish:s=>{}})};return(s,o)=>{var c;return(c=s.$page.props.can)!=null&&c.create?(y(),$("form",{key:0,onSubmit:F(V,["prevent"])},[n("div",P,[n("div",R,[Y,i(r(b),{class:"block w-full",modelValue:r(d).name,"onUpdate:modelValue":o[0]||(o[0]=l=>r(d).name=l)},null,8,["modelValue"])]),n("div",D,[H,i(r(b),{class:"block w-full",modelValue:r(d).guard_name,"onUpdate:modelValue":o[1]||(o[1]=l=>r(d).guard_name=l)},null,8,["modelValue"])])]),n("div",I,[i(r(z),{type:"submit",icon:"pi pi-check",label:"Save"})])],40,G)):(y(),M(r(A),{key:1,severity:"error"},{default:T(()=>[J]),_:1}))}}}));export{ee as default};
