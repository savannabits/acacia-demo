import{Z as n,X as k,c as o,f as i,J as v,k as p,l as m,n as h,p as d,e as f,w as g,T as C,K as w,P as u,o as l}from"./main.9e765f7d.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const _={name:"Image",inheritAttrs:!1,props:{preview:{type:Boolean,default:!1},class:null,style:null,imageStyle:null,imageClass:null},mask:null,data(){return{maskVisible:!1,previewVisible:!1,rotate:0,scale:1}},beforeUnmount(){this.mask&&n.clear(this.container)},methods:{maskRef(a){this.mask=a},toolbarRef(a){this.toolbarRef=a},onImageClick(){this.preview&&(this.maskVisible=!0,setTimeout(()=>{this.previewVisible=!0},25))},onPreviewImageClick(){this.previewClick=!0},onMaskClick(){this.previewClick||(this.previewVisible=!1,this.rotate=0,this.scale=1),this.previewClick=!1},rotateRight(){this.rotate+=90,this.previewClick=!0},rotateLeft(){this.rotate-=90,this.previewClick=!0},zoomIn(){this.scale=this.scale+.1,this.previewClick=!0},zoomOut(){this.scale=this.scale-.1,this.previewClick=!0},onBeforeEnter(){n.set("modal",this.mask,this.$primevue.config.zIndex.modal)},onEnter(){this.$emit("show")},onBeforeLeave(){k.addClass(this.mask,"p-component-overlay-leave")},onLeave(){this.$emit("hide")},onAfterLeave(a){n.clear(a),this.maskVisible=!1}},computed:{containerClass(){return["p-image p-component",this.class,{"p-image-preview-container":this.preview}]},maskClass(){return["p-image-mask p-component-overlay p-component-overlay-enter"]},rotateClass(){return"p-image-preview-rotate-"+this.rotate},imagePreviewStyle(){return{transform:"rotate("+this.rotate+"deg) scale("+this.scale+")"}},zoomDisabled(){return this.scale<=.5||this.scale>=1.5}}},y=i("i",{class:"p-image-preview-icon pi pi-eye"},null,-1),L={class:"p-image-toolbar"},I=i("i",{class:"pi pi-refresh"},null,-1),B=[I],z=i("i",{class:"pi pi-undo"},null,-1),V=[z],E=["disabled"],P=i("i",{class:"pi pi-search-minus"},null,-1),R=[P],S=["disabled"],A=i("i",{class:"pi pi-search-plus"},null,-1),D=[A],T=i("i",{class:"pi pi-times"},null,-1),M=[T],N={key:0},O=["src"];function x(a,t,r,U,c,e){return l(),o("span",{class:d(e.containerClass),style:u(r.style)},[i("img",v(a.$attrs,{style:r.imageStyle,class:r.imageClass}),null,16),r.preview?(l(),o("div",{key:0,class:"p-image-preview-indicator",onClick:t[0]||(t[0]=(...s)=>e.onImageClick&&e.onImageClick(...s))},[p(a.$slots,"indicator",{},()=>[y])])):m("",!0),(l(),h(w,{to:"body"},[c.maskVisible?(l(),o("div",{key:0,ref:e.maskRef,class:d(e.maskClass),onClick:t[7]||(t[7]=(...s)=>e.onMaskClick&&e.onMaskClick(...s))},[i("div",L,[i("button",{class:"p-image-action p-link",onClick:t[1]||(t[1]=(...s)=>e.rotateRight&&e.rotateRight(...s)),type:"button"},B),i("button",{class:"p-image-action p-link",onClick:t[2]||(t[2]=(...s)=>e.rotateLeft&&e.rotateLeft(...s)),type:"button"},V),i("button",{class:"p-image-action p-link",onClick:t[3]||(t[3]=(...s)=>e.zoomOut&&e.zoomOut(...s)),type:"button",disabled:e.zoomDisabled},R,8,E),i("button",{class:"p-image-action p-link",onClick:t[4]||(t[4]=(...s)=>e.zoomIn&&e.zoomIn(...s)),type:"button",disabled:e.zoomDisabled},D,8,S),i("button",{class:"p-image-action p-link",type:"button",onClick:t[5]||(t[5]=(...s)=>a.hidePreview&&a.hidePreview(...s))},M)]),f(C,{name:"p-image-preview",onBeforeEnter:e.onBeforeEnter,onEnter:e.onEnter,onLeave:e.onLeave,onBeforeLeave:e.onBeforeLeave,onAfterLeave:e.onAfterLeave},{default:g(()=>[c.previewVisible?(l(),o("div",N,[i("img",{src:a.$attrs.src,class:"p-image-preview",style:u(e.imagePreviewStyle),onClick:t[6]||(t[6]=(...s)=>e.onPreviewImageClick&&e.onPreviewImageClick(...s))},null,12,O)])):m("",!0)]),_:1},8,["onBeforeEnter","onEnter","onLeave","onBeforeLeave","onAfterLeave"])],2)):m("",!0)]))],6)}var J=b(_,[["render",x]]);export{J as default};
