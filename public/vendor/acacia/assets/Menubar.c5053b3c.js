import b from"./MenubarSub.7efdfe40.js";import{Z as s,i,q as l,s as a,k as u,j as f,x as h,r as p,o as n}from"./vendor.05df324e.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";import"./ripple.esm.574b991d.js";const k={name:"Menubar",props:{model:{type:Array,default:null},exact:{type:Boolean,default:!0}},outsideClickListener:null,data(){return{mobileActive:!1}},beforeUnmount(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.$refs.rootmenu&&this.$refs.rootmenu.$el&&s.clear(this.$refs.rootmenu.$el)},methods:{toggle(e){this.mobileActive?(this.mobileActive=!1,s.clear(this.$refs.rootmenu.$el)):(this.mobileActive=!0,s.set("menu",this.$refs.rootmenu.$el,this.$primevue.config.zIndex.menu)),this.bindOutsideClickListener(),e.preventDefault()},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.mobileActive&&this.$refs.rootmenu.$el!==e.target&&!this.$refs.rootmenu.$el.contains(e.target)&&this.$refs.menubutton!==e.target&&!this.$refs.menubutton.contains(e.target)&&(this.mobileActive=!1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},onLeafClick(){this.mobileActive=!1}},computed:{containerClass(){return["p-menubar p-component",{"p-menubar-mobile-active":this.mobileActive}]}},components:{MenubarSub:b}},C={key:0,class:"p-menubar-start"},_=u("i",{class:"pi pi-bars"},null,-1),$=[_],L={key:1,class:"p-menubar-end"};function A(e,o,r,g,c,t){const m=p("MenubarSub");return n(),i("div",{class:h(t.containerClass)},[e.$slots.start?(n(),i("div",C,[l(e.$slots,"start")])):a("",!0),u("a",{ref:"menubutton",tabindex:"0",class:"p-menubar-button",onClick:o[0]||(o[0]=d=>t.toggle(d))},$,512),f(m,{ref:"rootmenu",model:r.model,root:!0,mobileActive:c.mobileActive,onLeafClick:t.onLeafClick,template:e.$slots.item,exact:r.exact},null,8,["model","mobileActive","onLeafClick","template","exact"]),e.$slots.end?(n(),i("div",L,[l(e.$slots,"end")])):a("",!0)],2)}var j=v(k,[["render",A]]);export{j as default};
