import{R as I}from"./ripple.esm.574b991d.js";import{i as l,k as o,M as p,x as c,s as n,v as h,Q as u,F as w,t as _,O as y,o as i,_ as k}from"./vendor.05df324e.js";import{_ as x}from"./plugin-vue_export-helper.21dcd24c.js";const f={name:"GalleriaItem",emits:["start-slideshow","stop-slideshow","update:activeIndex"],props:{circular:{type:Boolean,default:!1},activeIndex:{type:Number,default:0},value:{type:Array,default:null},showItemNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},slideShowActive:{type:Boolean,default:!0},changeItemOnIndicatorHover:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!1},templates:{type:null,default:null}},mounted(){this.autoPlay&&this.$emit("start-slideshow")},methods:{next(){let e=this.activeIndex+1,s=this.circular&&this.value.length-1===this.activeIndex?0:e;this.$emit("update:activeIndex",s)},prev(){let e=this.activeIndex!==0?this.activeIndex-1:0,s=this.circular&&this.activeIndex===0?this.value.length-1:e;this.$emit("update:activeIndex",s)},stopSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.$emit("stop-slideshow")},navBackward(e){this.stopSlideShow(),this.prev(),e&&e.cancelable&&e.preventDefault()},navForward(e){this.stopSlideShow(),this.next(),e&&e.cancelable&&e.preventDefault()},onIndicatorClick(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},onIndicatorMouseEnter(e){this.changeItemOnIndicatorHover&&(this.stopSlideShow(),this.$emit("update:activeIndex",e))},onIndicatorKeyDown(e){this.stopSlideShow(),this.$emit("update:activeIndex",e)},isIndicatorItemActive(e){return this.activeIndex===e},isNavBackwardDisabled(){return!this.circular&&this.activeIndex===0},isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}},computed:{activeItem(){return this.value[this.activeIndex]},navBackwardClass(){return["p-galleria-item-prev p-galleria-item-nav p-link",{"p-disabled":this.isNavBackwardDisabled()}]},navForwardClass(){return["p-galleria-item-next p-galleria-item-nav p-link",{"p-disabled":this.isNavForwardDisabled()}]}},directives:{ripple:I}},g={class:"p-galleria-item-wrapper"},b={class:"p-galleria-item-container"},B=["disabled"],S=o("span",{class:"p-galleria-item-prev-icon pi pi-chevron-left"},null,-1),C=[S],D={class:"p-galleria-item"},N=["disabled"],F=o("span",{class:"p-galleria-item-next-icon pi pi-chevron-right"},null,-1),A=[F],K={key:2,class:"p-galleria-caption"},M={key:0,class:"p-galleria-indicators p-reset"},j=["onClick","onMouseenter","onKeydown"],E={key:0,type:"button",tabindex:"-1",class:"p-link"};function O(e,s,t,G,H,a){const v=y("ripple");return i(),l("div",g,[o("div",b,[t.showItemNavigators?p((i(),l("button",{key:0,type:"button",class:c(a.navBackwardClass),onClick:s[0]||(s[0]=d=>a.navBackward(d)),disabled:a.isNavBackwardDisabled()},C,10,B)),[[v]]):n("",!0),o("div",D,[t.templates.item?(i(),h(u(t.templates.item),{key:0,item:a.activeItem},null,8,["item"])):n("",!0)]),t.showItemNavigators?p((i(),l("button",{key:1,type:"button",class:c(a.navForwardClass),onClick:s[1]||(s[1]=d=>a.navForward(d)),disabled:a.isNavForwardDisabled()},A,10,N)),[[v]]):n("",!0),t.templates.caption?(i(),l("div",K,[t.templates.caption?(i(),h(u(t.templates.caption),{key:0,item:a.activeItem},null,8,["item"])):n("",!0)])):n("",!0)]),t.showIndicators?(i(),l("ul",M,[(i(!0),l(w,null,_(t.value,(d,r)=>(i(),l("li",{key:`p-galleria-indicator-${r}`,tabindex:"0",onClick:m=>a.onIndicatorClick(r),onMouseenter:m=>a.onIndicatorMouseEnter(r),onKeydown:k(m=>a.onIndicatorKeyDown(r),["enter"]),class:c(["p-galleria-indicator",{"p-highlight":a.isIndicatorItemActive(r)}])},[t.templates.indicator?n("",!0):(i(),l("button",E)),t.templates.indicator?(i(),h(u(t.templates.indicator),{key:1,index:r},null,8,["index"])):n("",!0)],42,j))),128))])):n("",!0)])}var z=x(f,[["render",O]]);export{z as default};
