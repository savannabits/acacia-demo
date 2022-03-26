import{i as t,q as m,x as o,_ as u,s as n,o as s,z as d}from"./vendor.05df324e.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const v={name:"Chip",emits:["remove"],props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:"pi pi-times-circle"}},data(){return{visible:!0}},methods:{close(a){this.visible=!1,this.$emit("remove",a)}},computed:{containerClass(){return["p-chip p-component",{"p-chip-image":this.image!=null}]},iconClass(){return["p-chip-icon",this.icon]},removeIconClass(){return["p-chip-remove-icon",this.removeIcon]}}},_=["src"],f={key:2,class:"p-chip-text"};function h(a,i,l,y,c,e){return c.visible?(s(),t("div",{key:0,class:o(e.containerClass)},[m(a.$slots,"default",{},()=>[l.image?(s(),t("img",{key:0,src:l.image},null,8,_)):l.icon?(s(),t("span",{key:1,class:o(e.iconClass)},null,2)):n("",!0),l.label?(s(),t("div",f,d(l.label),1)):n("",!0)]),l.removable?(s(),t("span",{key:0,tabindex:"0",class:o(e.removeIconClass),onClick:i[0]||(i[0]=(...r)=>e.close&&e.close(...r)),onKeydown:i[1]||(i[1]=u((...r)=>e.close&&e.close(...r),["enter"]))},null,34)):n("",!0)],2)):n("",!0)}var b=p(v,[["render",h]]);export{b as default};
