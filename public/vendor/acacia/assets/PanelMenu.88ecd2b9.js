var M=Object.defineProperty;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var y=(e,a,t)=>a in e?M(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,_=(e,a)=>{for(var t in a||(a={}))S.call(a,t)&&y(e,t,a[t]);if(h)for(var t of h(a))E.call(a,t)&&y(e,t,a[t]);return e};import w from"./PanelMenuSub.747874b5.js";import{U as B,i as d,F as p,t as H,r as v,o as s,x as c,an as m,k as i,v as b,w as f,s as u,z as k,Q as T,j as g,M as j,N as D,K as L}from"./vendor.05df324e.js";import{_ as N}from"./plugin-vue_export-helper.21dcd24c.js";const z={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,a,t){if(this.isActive(a)&&this.activeItem===null&&(this.activeItem=a),this.disabled(a)){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),this.activeItem&&this.activeItem===a?this.activeItem=null:this.activeItem=a,this.updateExpandedKeys({item:a,expanded:this.activeItem!=null}),a.to&&t&&t(e)},updateExpandedKeys(e){if(this.expandedKeys){let a=e.item,t=_({},this.expandedKeys);e.expanded?t[a.key]=!0:delete t[a.key],this.$emit("update:expandedKeys",t)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const a=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!a," pi-chevron-down":a}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,a){return["p-panelmenu-header-link",{"router-link-active":a&&a.isActive,"router-link-active-exact":this.exact&&a&&a.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:w},computed:{ariaId(){return B()}}},V={class:"p-panelmenu p-component"},F=["href","onClick"],U={class:"p-menuitem-text"},q=["href","onClick","tabindex","aria-expanded","id","aria-controls"],Q={class:"p-menuitem-text"},G=["id","aria-labelledby"],J={key:0,class:"p-panelmenu-content"};function O(e,a,t,R,W,n){const x=v("router-link"),I=v("PanelMenuSub");return s(),d("div",V,[(s(!0),d(p,null,H(t.model,(l,r)=>(s(),d(p,{key:n.label(l)+"_"+r},[n.visible(l)?(s(),d("div",{key:0,class:c(n.getPanelClass(l)),style:m(l.style)},[i("div",{class:c(n.getHeaderClass(l)),style:m(l.style)},[e.$slots.item?(s(),b(T(e.$slots.item),{key:1,item:l},null,8,["item"])):(s(),d(p,{key:0},[l.to&&!n.disabled(l)?(s(),b(x,{key:0,to:l.to,custom:""},{default:f(({navigate:o,href:C,isActive:K,isExactActive:P})=>[i("a",{href:C,class:c(n.getHeaderLinkClass(l,{isActive:K,isExactActive:P})),onClick:A=>n.onItemClick(A,l,o),role:"treeitem"},[l.icon?(s(),d("span",{key:0,class:c(n.getPanelIcon(l))},null,2)):u("",!0),i("span",U,k(n.label(l)),1)],10,F)]),_:2},1032,["to"])):(s(),d("a",{key:1,href:l.url,class:c(n.getHeaderLinkClass(l)),onClick:o=>n.onItemClick(o,l),tabindex:n.disabled(l)?null:"0","aria-expanded":n.isActive(l),id:n.ariaId+"_header_"+r,"aria-controls":n.ariaId+"_content_"+r},[l.items?(s(),d("span",{key:0,class:c(n.getPanelToggleIcon(l))},null,2)):u("",!0),l.icon?(s(),d("span",{key:1,class:c(n.getPanelIcon(l))},null,2)):u("",!0),i("span",Q,k(n.label(l)),1)],10,q))],64))],6),g(L,{name:"p-toggleable-content"},{default:f(()=>[j(i("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content_"+r,"aria-labelledby":n.ariaId+"_header_"+r},[l.items?(s(),d("div",J,[g(I,{model:l.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:t.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:t.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):u("",!0)],8,G),[[D,n.isActive(l)]])]),_:2},1024)],6)):u("",!0)],64))),128))])}var ee=N(z,[["render",O]]);export{ee as default};