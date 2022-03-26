var j=Object.defineProperty,S=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var V=(u,t,n)=>t in u?j(u,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):u[t]=n,h=(u,t)=>{for(var n in t||(t={}))C.call(t,n)&&V(u,n,t[n]);if(f)for(var n of f(t))M.call(t,n)&&V(u,n,t[n]);return u},y=(u,t)=>S(u,R(t));import{e as v,A as B,p as k,g as T,u as $,i as A,k as o,j as i,m as l,x as w,d as r,B as I,v as z,w as E,D as L,o as x,y as N}from"./vendor.05df324e.js";import{s as F}from"./button.esm.cbb15c31.js";import{s as K}from"./message.esm.2b7d3da1.js";import{s as m}from"./inputtext.esm.b08d2117.js";import{s as p}from"./inputswitch.esm.f0cf91c0.js";import{s as D}from"./textarea.esm.b60c054e.js";import U from"./AcaciaRichSelect.d07900f6.js";import"./ripple.esm.574b991d.js";import"./plugin-vue_export-helper.21dcd24c.js";const P=["onSubmit"],Y={class:""},q={class:"my-2"},G=o("label",null,"Type",-1),H={class:"my-2"},J=o("label",null,"Method",-1),O={class:"my-2"},Q=o("label",null,"Related Key",-1),W={class:"my-2"},X=o("label",null,"Related Table",-1),Z={class:"my-2"},ll=o("label",null,"Local Key",-1),el={class:"my-2"},sl=o("label",null,"Label Column",-1),ol={class:"my-2 flex items-center flex-wrap gap-x-2"},al=o("label",null,"Is Recursive",-1),tl={class:"my-2 flex items-center flex-wrap gap-x-2"},dl=o("label",null,"Is Morph",-1),il={class:"my-2"},nl=o("label",null,"Morph Type Column",-1),ul={class:"my-2"},ml=o("label",null,"Morph Id Column",-1),cl={class:"my-2"},rl=o("label",null,"Server Validation",-1),pl={class:"my-2 flex items-center flex-wrap gap-x-2"},_l=o("label",null,"In List",-1),bl={class:"my-2"},fl=o("label",null,"Related",-1),Vl={class:"my-2"},hl=o("label",null,"Schematic",-1),yl={class:"text-right min-w-[300px] pt-2 border-t-2"},vl=N("You are not authorized to perform this action"),kl=v({name:"RelationshipCreate"}),Tl=v(y(h({},kl),{emits:["created","error"],setup(u,{emit:t}){const n=B(()=>{var d,e;return(e=(d=L().props)==null?void 0:d.value)==null?void 0:e.flash});k([]),k(!1);const _=T(),a=$({type:null,method:null,related_key:null,related_table:null,local_key:null,label_column:null,is_recursive:!1,is_morph:!1,morph_type_column:null,morph_id_column:null,server_validation:null,in_list:!1,related:null,schematic:null}),g=async()=>{a.post(r("acacia.g-panel.acacia-relationships.store"),{onSuccess:d=>{var s;const e=d.props.flash;_.add({severity:"success",summary:"Success",detail:e==null?void 0:e.success,life:2e3});const c=(s=n.value)==null?void 0:s.payload;t("created",{payload:c})},onError:d=>{var s,b;let e=((s=n.value)==null?void 0:s.error)||(d==null?void 0:d.message)||(d==null?void 0:d.error)||d||"A server error occurred.";_.add({severity:"error",summary:"Error",detail:e,life:3e3});const c=(b=n.value)==null?void 0:b.payload;t("error",{payload:c,message:e})},onFinish:d=>{}})};return(d,e)=>{var c;return((c=d.$page.props.can)==null?void 0:c.create)?(x(),A("form",{key:0,onSubmit:I(g,["prevent"])},[o("div",Y,[o("div",q,[G,i(l(m),{class:"block w-full",modelValue:l(a).type,"onUpdate:modelValue":e[0]||(e[0]=s=>l(a).type=s)},null,8,["modelValue"])]),o("div",H,[J,i(l(m),{class:"block w-full",modelValue:l(a).method,"onUpdate:modelValue":e[1]||(e[1]=s=>l(a).method=s)},null,8,["modelValue"])]),o("div",O,[Q,i(l(m),{class:"block w-full",modelValue:l(a).related_key,"onUpdate:modelValue":e[2]||(e[2]=s=>l(a).related_key=s)},null,8,["modelValue"])]),o("div",W,[X,i(l(m),{class:"block w-full",modelValue:l(a).related_table,"onUpdate:modelValue":e[3]||(e[3]=s=>l(a).related_table=s)},null,8,["modelValue"])]),o("div",Z,[ll,i(l(m),{class:"block w-full",modelValue:l(a).local_key,"onUpdate:modelValue":e[4]||(e[4]=s=>l(a).local_key=s)},null,8,["modelValue"])]),o("div",el,[sl,i(l(m),{class:"block w-full",modelValue:l(a).label_column,"onUpdate:modelValue":e[5]||(e[5]=s=>l(a).label_column=s)},null,8,["modelValue"])]),o("div",ol,[al,i(l(p),{class:"block",modelValue:l(a).is_recursive,"onUpdate:modelValue":e[6]||(e[6]=s=>l(a).is_recursive=s)},null,8,["modelValue"])]),o("div",tl,[dl,i(l(p),{class:"block",modelValue:l(a).is_morph,"onUpdate:modelValue":e[7]||(e[7]=s=>l(a).is_morph=s)},null,8,["modelValue"])]),o("div",il,[nl,i(l(m),{class:"block w-full",modelValue:l(a).morph_type_column,"onUpdate:modelValue":e[8]||(e[8]=s=>l(a).morph_type_column=s)},null,8,["modelValue"])]),o("div",ul,[ml,i(l(m),{class:"block w-full",modelValue:l(a).morph_id_column,"onUpdate:modelValue":e[9]||(e[9]=s=>l(a).morph_id_column=s)},null,8,["modelValue"])]),o("div",cl,[rl,i(l(D),{modelValue:l(a).server_validation,"onUpdate:modelValue":e[10]||(e[10]=s=>l(a).server_validation=s),class:"block w-full",autoResize:!0,rows:"5",cols:"30"},null,8,["modelValue"])]),o("div",pl,[_l,i(l(p),{class:"block",modelValue:l(a).in_list,"onUpdate:modelValue":e[11]||(e[11]=s=>l(a).in_list=s)},null,8,["modelValue"])]),o("div",bl,[fl,i(U,{modelValue:l(a).related,"onUpdate:modelValue":e[12]||(e[12]=s=>l(a).related=s),class:w("block w-full"),"api-url":l(r)("api.v1.acacia-schematics.index"),label:"table_name"},null,8,["modelValue","api-url"])]),o("div",Vl,[hl,i(U,{modelValue:l(a).schematic,"onUpdate:modelValue":e[13]||(e[13]=s=>l(a).schematic=s),class:w("block w-full"),"api-url":l(r)("api.v1.acacia-schematics.index"),label:"table_name"},null,8,["modelValue","api-url"])])]),o("div",yl,[i(l(F),{type:"submit",icon:"pi pi-check",label:"Save"})])],40,P)):(x(),z(l(K),{key:1,severity:"error"},{default:E(()=>[vl]),_:1}))}}}));export{Tl as default};
