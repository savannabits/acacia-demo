import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{c as i,P as n,p as r,o as s}from"./main.9e765f7d.js";const a={name:"Skeleton",props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},computed:{containerClass(){return["p-skeleton p-component",{"p-skeleton-circle":this.shape==="circle","p-skeleton-none":this.animation==="none"}]},containerStyle(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}}}};function l(o,d,p,c,h,e){return s(),i("div",{style:n(e.containerStyle),class:r(e.containerClass)},null,6)}var f=t(a,[["render",l]]);export{f as default};