import{a5 as t,Z as s,i as o,q as a,V as l,o as n}from"./vendor.05df324e.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={name:"BlockUI",emits:["block","unblock"],props:{blocked:{type:Boolean,default:!1},fullScreen:{type:Boolean,default:!1},baseZIndex:{type:Number,default:0},autoZIndex:{type:Boolean,default:!0}},mask:null,mounted(){this.blocked&&this.block()},watch:{blocked(e){e===!0?this.block():this.unblock()}},methods:{block(){let e="p-blockui p-component-overlay p-component-overlay-enter";this.fullScreen?(e+=" p-blockui-document",this.mask=document.createElement("div"),this.mask.setAttribute("class",e),document.body.appendChild(this.mask),t.addClass(document.body,"p-overflow-hidden"),document.activeElement.blur()):(this.mask=document.createElement("div"),this.mask.setAttribute("class",e),this.$refs.container.appendChild(this.mask)),this.autoZIndex&&s.set("modal",this.mask,this.baseZIndex+this.$primevue.config.zIndex.modal),this.$emit("block")},unblock(){t.addClass(this.mask,"p-component-overlay-leave"),this.mask.addEventListener("animationend",()=>{this.removeMask()})},removeMask(){s.clear(this.mask),this.fullScreen?(document.body.removeChild(this.mask),t.removeClass(document.body,"p-overflow-hidden")):this.$refs.container.removeChild(this.mask),this.$emit("unblock")}}};function r(e,c,m,u,h,p){return n(),o("div",l({ref:"container",class:"p-blockui-container"},e.$attrs),[a(e.$slots,"default")],16)}var b=i(d,[["render",r]]);export{b as default};
