import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{c as r,P as n,f as o,o as t}from"./main.9e765f7d.js";const a={name:"ProgressSpinner",props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},computed:{svgStyle(){return{"animation-duration":this.animationDuration}}}},l={class:"p-progress-spinner",role:"alert","aria-busy":"true"},c=["fill","stroke-width"];function p(_,d,e,u,f,s){return t(),r("div",l,[(t(),r("svg",{class:"p-progress-spinner-svg",viewBox:"25 25 50 50",style:n(s.svgStyle)},[o("circle",{class:"p-progress-spinner-circle",cx:"50",cy:"50",r:"20",fill:e.fill,"stroke-width":e.strokeWidth,strokeMiterlimit:"10"},null,8,c)],4))])}var y=i(a,[["render",p]]);export{y as default};