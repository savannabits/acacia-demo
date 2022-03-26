import{R as n}from"./ripple.esm.574b991d.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{i,k as s,F as u,x as o,z as c,v as g,Q as h,M as d,s as v,O as _,o as a}from"./vendor.05df324e.js";const f={name:"ToastMessage",emits:["close"],props:{message:null,template:null},closeTimeout:null,mounted(){this.message.life&&(this.closeTimeout=setTimeout(()=>{this.close()},this.message.life))},beforeUnmount(){this.clearCloseTimeout()},methods:{close(){this.$emit("close",this.message)},onCloseClick(){this.clearCloseTimeout(),this.close()},clearCloseTimeout(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{containerClass(){return["p-toast-message",this.message.styleClass,{"p-toast-message-info":this.message.severity==="info","p-toast-message-warn":this.message.severity==="warn","p-toast-message-error":this.message.severity==="error","p-toast-message-success":this.message.severity==="success"}]},iconClass(){return["p-toast-message-icon pi",{"pi-info-circle":this.message.severity==="info","pi-exclamation-triangle":this.message.severity==="warn","pi-times":this.message.severity==="error","pi-check":this.message.severity==="success"}]}},directives:{ripple:n}},C={class:"p-toast-message-text"},y={class:"p-toast-summary"},k={class:"p-toast-detail"},T=s("span",{class:"p-toast-icon-close-icon pi pi-times"},null,-1),x=[T];function b(w,l,e,B,D,t){const r=_("ripple");return a(),i("div",{class:o(t.containerClass),role:"alert","aria-live":"assertive","aria-atomic":"true"},[s("div",{class:o(["p-toast-message-content",e.message.contentStyleClass])},[e.template?(a(),g(h(e.template),{key:1,message:e.message},null,8,["message"])):(a(),i(u,{key:0},[s("span",{class:o(t.iconClass)},null,2),s("div",C,[s("span",y,c(e.message.summary),1),s("div",k,c(e.message.detail),1)])],64)),e.message.closable!==!1?d((a(),i("button",{key:2,class:"p-toast-icon-close p-link",onClick:l[0]||(l[0]=(...m)=>t.onCloseClick&&t.onCloseClick(...m)),type:"button"},x)),[[r]]):v("",!0)],2)],2)}var F=p(f,[["render",b]]);export{F as default};
