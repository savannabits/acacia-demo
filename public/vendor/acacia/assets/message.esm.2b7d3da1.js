import{R as d}from"./ripple.esm.574b991d.js";import{O as f,o,v as r,w as u,M as c,N as g,j as n,q as h,s as v,K as y}from"./vendor.05df324e.js";var b={name:"Message",emits:["close"],props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:null}},timeout:null,data(){return{visible:!0}},mounted(){this.sticky||setTimeout(()=>{this.visible=!1},this.life)},methods:{close(s){this.visible=!1,this.$emit("close",s)}},computed:{containerClass(){return"p-message p-component p-message-"+this.severity},iconClass(){return["p-message-icon pi",this.icon?this.icon:{"pi-info-circle":this.severity==="info","pi-check":this.severity==="success","pi-exclamation-triangle":this.severity==="warn","pi-times-circle":this.severity==="error"}]}},directives:{ripple:d}};const x={class:"p-message-wrapper"},k={class:"p-message-text"},w=n("i",{class:"p-message-close-icon pi pi-times"},null,-1);function C(s,t,a,i,e,l){const p=f("ripple");return o(),r(y,{name:"p-message",appear:""},{default:u(()=>[c(n("div",{class:l.containerClass,role:"alert"},[n("div",x,[n("span",{class:l.iconClass},null,2),n("div",k,[h(s.$slots,"default")]),a.closable?c((o(),r("button",{key:0,class:"p-message-close p-link",onClick:t[1]||(t[1]=m=>l.close(m)),type:"button"},[w],512)),[[p]]):v("",!0)])],2),[[g,e.visible]])]),_:3})}function _(s,t){t===void 0&&(t={});var a=t.insertAt;if(!(!s||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",a==="top"&&i.firstChild?i.insertBefore(e,i.firstChild):i.appendChild(e),e.styleSheet?e.styleSheet.cssText=s:e.appendChild(document.createTextNode(s))}}var B=`
.p-message-wrapper {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-message-close {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-message-close.p-link {
    margin-left: auto;
    overflow: hidden;
    position: relative;
}
.p-message-enter-from {
    opacity: 0;
}
.p-message-enter-active {
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
}
.p-message.p-message-leave-from {
    max-height: 1000px;
}
.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0 !important;
}
.p-message-leave-active {
    overflow: hidden;
    -webkit-transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .15s;
    transition: max-height .3s cubic-bezier(0, 1, 0, 1), opacity .3s, margin .15s;
}
.p-message-leave-active .p-message-close {
    display: none;
}
`;_(B);b.render=C;export{b as s};
