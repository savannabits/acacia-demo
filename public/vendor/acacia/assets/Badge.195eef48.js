import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{i as r,q as l,x as n,o as i,y as d,z as o}from"./vendor.05df324e.js";const g={name:"Badge",props:{value:null,severity:null,size:null},computed:{containerClass(){return this.$slots.default?"p-overlay-badge":this.badgeClass},badgeClass(){return["p-badge p-component",{"p-badge-no-gutter":this.value&&String(this.value).length===1,"p-badge-dot":!this.value&&!this.$slots.default,"p-badge-lg":this.size==="large","p-badge-xl":this.size==="xlarge","p-badge-info":this.severity==="info","p-badge-success":this.severity==="success","p-badge-warning":this.severity==="warning","p-badge-danger":this.severity==="danger"}]}}};function p(e,u,s,c,h,a){return i(),r("span",{class:n(a.badgeClass)},[l(e.$slots,"default",{},()=>[d(o(s.value),1)])],2)}var f=t(g,[["render",p]]);export{f as default};
