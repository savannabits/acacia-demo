import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{c as t,p as o,l as i,k as c,J as l,o as n,f as p,t as u}from"./main.9e765f7d.js";const d={name:"Tag",props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}},g={class:"p-tag-value"};function _(e,m,a,v,f,s){return n(),t("span",l({class:s.containerClass},e.$attrs),[a.icon?(n(),t("span",{key:0,class:o(s.iconClass)},null,2)):i("",!0),c(e.$slots,"default",{},()=>[p("span",g,u(a.value),1)])],16)}var C=r(d,[["render",_]]);export{C as default};