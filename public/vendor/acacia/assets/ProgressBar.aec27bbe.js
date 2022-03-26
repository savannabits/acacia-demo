import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{i as r,an as o,q as i,s,x as d,o as t,y as u,z as m,k as c}from"./vendor.05df324e.js";const p={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}},_=["aria-valuenow"],v={key:0,class:"p-progressbar-label"},g={key:1,class:"p-progressbar-indeterminate-container"},h=c("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),y=[h];function f(n,b,e,x,B,a){return t(),r("div",{role:"progressbar",class:d(a.containerClass),"aria-valuemin":"0","aria-valuenow":e.value,"aria-valuemax":"100"},[a.determinate?(t(),r("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:o(a.progressStyle)},[e.value!=null&&e.value!==0&&e.showValue?(t(),r("div",v,[i(n.$slots,"default",{},()=>[u(m(e.value+"%"),1)])])):s("",!0)],4)):s("",!0),a.indeterminate?(t(),r("div",g,y)):s("",!0)],10,_)}var w=l(p,[["render",f]]);export{w as default};