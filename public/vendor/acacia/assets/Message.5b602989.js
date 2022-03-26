import{R as m}from"./ripple.esm.574b991d.js";import{v as u,w as d,K as v,O as _,o as a,M as l,N as f,k as e,x as r,q as h,i as y,s as g}from"./vendor.05df324e.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"Message",emits:["close"],props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:null}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||setTimeout(()=>{this.visible=!1},this.life)},methods:{close(s){this.visible=!1,this.$emit("close",s)}},computed:{containerClass(){return"p-message p-component p-message-"+this.severity},iconClass(){return["p-message-icon pi",this.icon?this.icon:{"pi-info-circle":this.severity==="info","pi-check":this.severity==="success","pi-exclamation-triangle":this.severity==="warn","pi-times-circle":this.severity==="error"}]}},directives:{ripple:m}},x={class:"p-message-wrapper"},C={class:"p-message-text"},w=e("i",{class:"p-message-close-icon pi pi-times"},null,-1),B=[w];function M(s,i,o,N,n,t){const c=_("ripple");return a(),u(v,{name:"p-message",appear:""},{default:d(()=>[l(e("div",{class:r(t.containerClass),role:"alert"},[e("div",x,[e("span",{class:r(t.iconClass)},null,2),e("div",C,[h(s.$slots,"default")]),o.closable?l((a(),y("button",{key:0,class:"p-message-close p-link",onClick:i[0]||(i[0]=p=>t.close(p)),type:"button"},B)),[[c]]):g("",!0)])],2),[[f,n.visible]])]),_:3})}var R=b(k,[["render",M]]);export{R as default};