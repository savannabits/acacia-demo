import l from"./DockSub.68893d12.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{i as a,j as c,x as p,an as i,r,o as m}from"./vendor.05df324e.js";import"./ripple.esm.574b991d.js";import"./tooltip.esm.48c73f0d.js";const d={name:"Dock",props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,exact:{type:Boolean,default:!0}},computed:{containerClass(){return["p-dock p-component",`p-dock-${this.position}`,this.class]}},components:{DockSub:l}};function u(e,_,o,f,k,t){const s=r("DockSub");return m(),a("div",{class:p(t.containerClass),style:i(o.style)},[c(s,{model:o.model,templates:e.$slots,exact:o.exact,tooltipOptions:o.tooltipOptions},null,8,["model","templates","exact","tooltipOptions"])],6)}var j=n(d,[["render",u]]);export{j as default};
