var A=Object.defineProperty;var h=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(e,a,t)=>a in e?A(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,_=(e,a)=>{for(var t in a||(a={}))M.call(a,t)&&y(e,t,a[t]);if(h)for(var t of h(a))S.call(a,t)&&y(e,t,a[t]);return e};import E from"./PanelMenuSub.0bbdfb1b.js";import{U as T,c as d,F as p,m as B,r as m,o as s,p as c,P as v,f as o,n as b,w as f,l as u,t as k,G as D,e as g,C as H,D as L,T as N}from"./main.9e765f7d.js";import{_ as V}from"./plugin-vue_export-helper.21dcd24c.js";const z={name:"PanelMenu",emits:["update:expandedKeys"],props:{model:{type:Array,default:null},expandedKeys:{type:null,default:null},exact:{type:Boolean,default:!0}},data(){return{activeItem:null}},methods:{onItemClick(e,a,t){if(this.isActive(a)&&this.activeItem===null&&(this.activeItem=a),this.disabled(a)){e.preventDefault();return}a.command&&a.command({originalEvent:e,item:a}),this.activeItem&&this.activeItem===a?this.activeItem=null:this.activeItem=a,this.updateExpandedKeys({item:a,expanded:this.activeItem!=null}),a.to&&t&&t(e)},onItemKeydown(e,a){e.which===13&&this.onItemClick(e,a)},updateExpandedKeys(e){if(this.expandedKeys){let a=e.item,t=_({},this.expandedKeys);e.expanded?t[a.key]=!0:delete t[a.key],this.$emit("update:expandedKeys",t)}},getPanelClass(e){return["p-panelmenu-panel",e.class]},getPanelToggleIcon(e){const a=this.isActive(e);return["p-panelmenu-icon pi",{"pi-chevron-right":!a," pi-chevron-down":a}]},getPanelIcon(e){return["p-menuitem-icon",e.icon]},getHeaderLinkClass(e,a){return["p-panelmenu-header-link",{"router-link-active":a&&a.isActive,"router-link-active-exact":this.exact&&a&&a.isExactActive}]},isActive(e){return this.expandedKeys?this.expandedKeys[e.key]:e===this.activeItem},getHeaderClass(e){return["p-component p-panelmenu-header",{"p-highlight":this.isActive(e),"p-disabled":this.disabled(e)}]},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},components:{PanelMenuSub:E},computed:{ariaId(){return T()}}},F={class:"p-panelmenu p-component"},U=["href","onClick"],q={class:"p-menuitem-text"},G=["href","onClick","onKeydown","tabindex","aria-expanded","id","aria-controls"],j={class:"p-menuitem-text"},J=["id","aria-labelledby"],O={key:0,class:"p-panelmenu-content"};function Q(e,a,t,R,W,n){const I=m("router-link"),x=m("PanelMenuSub");return s(),d("div",F,[(s(!0),d(p,null,B(t.model,(l,i)=>(s(),d(p,{key:n.label(l)+"_"+i},[n.visible(l)?(s(),d("div",{key:0,class:c(n.getPanelClass(l)),style:v(l.style)},[o("div",{class:c(n.getHeaderClass(l)),style:v(l.style)},[e.$slots.item?(s(),b(D(e.$slots.item),{key:1,item:l},null,8,["item"])):(s(),d(p,{key:0},[l.to&&!n.disabled(l)?(s(),b(I,{key:0,to:l.to,custom:""},{default:f(({navigate:r,href:C,isActive:K,isExactActive:P})=>[o("a",{href:C,class:c(n.getHeaderLinkClass(l,{isActive:K,isExactActive:P})),onClick:w=>n.onItemClick(w,l,r),role:"treeitem"},[l.icon?(s(),d("span",{key:0,class:c(n.getPanelIcon(l))},null,2)):u("",!0),o("span",q,k(n.label(l)),1)],10,U)]),_:2},1032,["to"])):(s(),d("a",{key:1,href:l.url,class:c(n.getHeaderLinkClass(l)),onClick:r=>n.onItemClick(r,l),onKeydown:r=>n.onItemKeydown(r,l),tabindex:n.disabled(l)?null:"0","aria-expanded":n.isActive(l),id:n.ariaId+"_header_"+i,"aria-controls":n.ariaId+"_content_"+i},[l.items?(s(),d("span",{key:0,class:c(n.getPanelToggleIcon(l))},null,2)):u("",!0),l.icon?(s(),d("span",{key:1,class:c(n.getPanelIcon(l))},null,2)):u("",!0),o("span",j,k(n.label(l)),1)],42,G))],64))],6),g(N,{name:"p-toggleable-content"},{default:f(()=>[H(o("div",{class:"p-toggleable-content",role:"region",id:n.ariaId+"_content_"+i,"aria-labelledby":n.ariaId+"_header_"+i},[l.items?(s(),d("div",O,[g(x,{model:l.items,class:"p-panelmenu-root-submenu",template:e.$slots.item,expandedKeys:t.expandedKeys,onItemToggle:n.updateExpandedKeys,exact:t.exact},null,8,["model","template","expandedKeys","onItemToggle","exact"])])):u("",!0)],8,J),[[L,n.isActive(l)]])]),_:2},1024)],6)):u("",!0)],64))),128))])}var ee=V(z,[["render",Q]]);export{ee as default};