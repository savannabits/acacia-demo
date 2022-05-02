import{c as t,k as m,p as o,N as u,l as i,o as s,t as d}from"./main.9e765f7d.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const v={name:"Chip",emits:["remove"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:"pi pi-times-circle"}},data(){return{visible:!0}},methods:{close(n){this.visible=!1,this.$emit("remove",n)}},computed:{containerClass(){return["p-chip p-component",{"p-chip-image":this.image!=null}]},iconClass(){return["p-chip-icon",this.icon]},removeIconClass(){return["p-chip-remove-icon",this.removeIcon]}}},f=["src"],y={key:2,class:"p-chip-text"};function _(n,a,l,h,c,e){return c.visible?(s(),t("div",{key:0,class:o(e.containerClass)},[m(n.$slots,"default",{},()=>[l.image?(s(),t("img",{key:0,src:l.image},null,8,f)):l.icon?(s(),t("span",{key:1,class:o(e.iconClass)},null,2)):i("",!0),l.label?(s(),t("div",y,d(l.label),1)):i("",!0)]),l.removable?(s(),t("span",{key:0,tabindex:"0",class:o(e.removeIconClass),onClick:a[0]||(a[0]=(...r)=>e.close&&e.close(...r)),onKeydown:a[1]||(a[1]=u((...r)=>e.close&&e.close(...r),["enter"]))},null,34)):i("",!0)],2)):i("",!0)}var b=p(v,[["render",_]]);export{b as default};