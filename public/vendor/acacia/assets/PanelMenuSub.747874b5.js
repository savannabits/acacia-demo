import{i,F as o,t as I,r as v,o as s,x as c,an as m,v as p,w as f,k as r,z as h,s as d,Q as S,j as A,M as K,N as w,K as B}from"./vendor.05df324e.js";import{_ as M}from"./plugin-vue_export-helper.21dcd24c.js";const N={name:"PanelMenuSub",emits:["item-toggle"],props:{model:{type:null,default:null},template:{type:Function,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(l,a,n){if(this.isActive(a)&&this.activeItem===null&&(this.activeItem=a),this.disabled(a)){l.preventDefault();return}a.command&&a.command({originalEvent:l,item:a}),this.activeItem&&this.activeItem===a?this.activeItem=null:this.activeItem=a,this.$emit("item-toggle",{item:a,expanded:this.activeItem!=null}),a.to&&n&&n(l)},getItemClass(l){return["p-menuitem",l.className]},linkClass(l,a){return["p-menuitem-link",{"p-disabled":this.disabled(l),"router-link-active":a&&a.isActive,"router-link-active-exact":this.exact&&a&&a.isExactActive}]},isActive(l){return this.expandedKeys?this.expandedKeys[l.key]:l===this.activeItem},getSubmenuIcon(l){const a=this.isActive(l);return["p-panelmenu-icon pi pi-fw",{"pi-angle-right":!a,"pi-angle-down":a}]},visible(l){return typeof l.visible=="function"?l.visible():l.visible!==!1},disabled(l){return typeof l.disabled=="function"?l.disabled():l.disabled},label(l){return typeof l.label=="function"?l.label():l.label}}},D={class:"p-submenu-list",role:"tree"},j=["href","onClick","aria-expanded"],z={class:"p-menuitem-text"},E=["href","target","onClick","aria-expanded","tabindex"],F={class:"p-menuitem-text"},V={class:"p-toggleable-content"};function T(l,a,n,L,P,t){const y=v("router-link"),k=v("PanelMenuSub",!0);return s(),i("ul",D,[(s(!0),i(o,null,I(n.model,(e,b)=>(s(),i(o,{key:t.label(e)+b.toString()},[t.visible(e)&&!e.separator?(s(),i("li",{key:0,role:"none",class:c(t.getItemClass(e)),style:m(e.style)},[n.template?(s(),p(S(n.template),{key:1,item:e},null,8,["item"])):(s(),i(o,{key:0},[e.to&&!t.disabled(e)?(s(),p(y,{key:0,to:e.to,custom:""},{default:f(({navigate:u,href:_,isActive:g,isExactActive:x})=>[r("a",{href:_,class:c(t.linkClass(e,{isRouterActive:g,isExactActive:x})),onClick:C=>t.onItemClick(C,e,u),role:"treeitem","aria-expanded":t.isActive(e)},[r("span",{class:c(["p-menuitem-icon",e.icon])},null,2),r("span",z,h(t.label(e)),1)],10,j)]),_:2},1032,["to"])):(s(),i("a",{key:1,href:e.url,class:c(t.linkClass(e)),target:e.target,onClick:u=>t.onItemClick(u,e),role:"treeitem","aria-expanded":t.isActive(e),tabindex:t.disabled(e)?null:"0"},[e.items?(s(),i("span",{key:0,class:c(t.getSubmenuIcon(e))},null,2)):d("",!0),r("span",{class:c(["p-menuitem-icon",e.icon])},null,2),r("span",F,h(t.label(e)),1)],10,E))],64)),A(B,{name:"p-toggleable-content"},{default:f(()=>[K(r("div",V,[t.visible(e)&&e.items?(s(),p(k,{model:e.items,key:t.label(e)+"_sub_",template:n.template,expandedKeys:n.expandedKeys,onItemToggle:a[0]||(a[0]=u=>l.$emit("item-toggle",u)),exact:n.exact},null,8,["model","template","expandedKeys","exact"])):d("",!0)],512),[[w,t.isActive(e)]])]),_:2},1024)],6)):d("",!0),t.visible(e)&&e.separator?(s(),i("li",{class:c(["p-menu-separator",e.class]),style:m(e.style),key:"separator"+b.toString()},null,6)):d("",!0)],64))),128))])}var G=M(N,[["render",T]]);export{G as default};