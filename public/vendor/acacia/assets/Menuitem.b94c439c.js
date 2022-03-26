import{R as _}from"./ripple.esm.574b991d.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";import{i as n,F as x,v as o,w as y,M as d,x as s,k as m,z as u,Q as g,an as p,s as B,r as D,O as j,o as a}from"./vendor.05df324e.js";const w={name:"Menuitem",inheritAttrs:!1,emits:["click"],props:{item:null,template:null,exact:null},methods:{onClick(l,i){this.$emit("click",{originalEvent:l,item:this.item,navigate:i})},linkClass(l,i){return["p-menuitem-link",{"p-disabled":this.disabled(l),"router-link-active":i&&i.isActive,"router-link-active-exact":this.exact&&i&&i.isExactActive}]},visible(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled(l){return typeof l.disabled=="function"?l.disabled():l.disabled},label(){return typeof this.item.label=="function"?this.item.label():this.item.label}},computed:{containerClass(){return["p-menuitem",this.item.class]}},directives:{ripple:_}},z=["href","onClick"],A={class:"p-menuitem-text"},E=["href","target","tabindex"],M={class:"p-menuitem-text"};function F(l,i,e,N,R,t){const k=D("router-link"),r=j("ripple");return t.visible()?(a(),n("li",{key:0,class:s(t.containerClass),role:"none",style:p(e.item.style)},[e.template?(a(),o(g(e.template),{key:1,item:e.item},null,8,["item"])):(a(),n(x,{key:0},[e.item.to&&!t.disabled(e.item)?(a(),o(k,{key:0,to:e.item.to,custom:""},{default:y(({navigate:c,href:h,isActive:b,isExactActive:f})=>[d((a(),n("a",{href:h,onClick:v=>t.onClick(v,c),class:s(t.linkClass(e.item,{isActive:b,isExactActive:f})),role:"menuitem"},[m("span",{class:s(["p-menuitem-icon",e.item.icon])},null,2),m("span",A,u(t.label()),1)],10,z)),[[r]])]),_:1},8,["to"])):d((a(),n("a",{key:1,href:e.item.url,class:s(t.linkClass(e.item)),onClick:i[0]||(i[0]=(...c)=>t.onClick&&t.onClick(...c)),target:e.item.target,role:"menuitem",tabindex:t.disabled(e.item)?null:"0"},[m("span",{class:s(["p-menuitem-icon",e.item.icon])},null,2),m("span",M,u(t.label()),1)],10,E)),[[r]])],64))],6)):B("",!0)}var Q=C(w,[["render",F]]);export{Q as default};