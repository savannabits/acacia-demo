import{s as B}from"./button.esm.cbb15c31.js";import{a5 as p,r as h,O as T,o as a,v as r,F as v,t as z,w as L,M as g,j as u,z as I,s as f,Q as A,Z as y,ad as Z,V as x,K as M,W as O,U as K,i as H,q as N,x as R,an as V}from"./vendor.05df324e.js";import{O as P}from"./overlayeventbus.esm.d529c5a8.js";import{R as j}from"./ripple.esm.574b991d.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";var _={name:"TieredMenuSub",emits:["leaf-click","keydown-item"],props:{model:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},parentActive:{type:Boolean,default:!1},template:{type:Function,default:null},exact:{type:Boolean,default:!0}},documentClickListener:null,watch:{parentActive(e){e||(this.activeItem=null)}},data(){return{activeItem:null}},updated(){this.root&&this.activeItem&&this.bindDocumentClickListener()},beforeUnmount(){this.unbindDocumentClickListener()},methods:{onItemMouseEnter(e,t){if(this.disabled(t)){e.preventDefault();return}this.root?(this.activeItem||this.popup)&&(this.activeItem=t):this.activeItem=t},onItemClick(e,t,l){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),t.items&&(this.activeItem&&t===this.activeItem?this.activeItem=null:this.activeItem=t),t.items||this.onLeafClick(),t.to&&l&&l(e)},onLeafClick(){this.activeItem=null,this.$emit("leaf-click")},onItemKeyDown(e,t){let l=e.currentTarget.parentElement;switch(e.which){case 40:var o=this.findNextItem(l);o&&o.children[0].focus(),e.preventDefault();break;case 38:var s=this.findPrevItem(l);s&&s.children[0].focus(),e.preventDefault();break;case 39:t.items&&(this.activeItem=t,setTimeout(()=>{l.children[1].children[0].children[0].focus()},50)),e.preventDefault();break}this.$emit("keydown-item",{originalEvent:e,element:l})},onChildItemKeyDown(e){e.originalEvent.which===37&&(this.activeItem=null,e.element.parentElement.previousElementSibling.focus())},findNextItem(e){let t=e.nextElementSibling;return t?p.hasClass(t,"p-disabled")||!p.hasClass(t,"p-menuitem")?this.findNextItem(t):t:null},findPrevItem(e){let t=e.previousElementSibling;return t?p.hasClass(t,"p-disabled")||!p.hasClass(t,"p-menuitem")?this.findPrevItem(t):t:null},getItemClass(e){return["p-menuitem",e.class,{"p-menuitem-active":this.activeItem===e}]},linkClass(e,t){return["p-menuitem-link",{"p-disabled":this.disabled(e),"router-link-active":t&&t.isActive,"router-link-active-exact":this.exact&&t&&t.isExactActive}]},bindDocumentClickListener(){this.documentClickListener||(this.documentClickListener=e=>{this.$el&&!this.$el.contains(e.target)&&(this.activeItem=null,this.unbindDocumentClickListener())},document.addEventListener("click",this.documentClickListener))},unbindDocumentClickListener(){this.documentClickListener&&(document.removeEventListener("click",this.documentClickListener),this.documentClickListener=null)},visible(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label(e){return typeof e.label=="function"?e.label():e.label}},computed:{containerClass(){return{"p-submenu-list":!this.root}}},directives:{ripple:j}};const F={class:"p-menuitem-text"},W={class:"p-menuitem-text"},q={key:0,class:"p-submenu-icon pi pi-angle-right"};function Q(e,t,l,o,s,n){const c=h("router-link"),m=h("TieredMenuSub",!0),k=T("ripple");return a(),r("ul",{ref:"element",class:n.containerClass,role:"'menubar' : 'menu'","aria-orientation":"horizontal"},[(a(!0),r(v,null,z(l.model,(i,C)=>(a(),r(v,{key:n.label(i)+C.toString()},[n.visible(i)&&!i.separator?(a(),r("li",{key:0,class:n.getItemClass(i),style:i.style,onMouseenter:d=>n.onItemMouseEnter(d,i),role:"none"},[l.template?(a(),r(A(l.template),{key:1,item:i},null,8,["item"])):(a(),r(v,{key:0},[i.to&&!n.disabled(i)?(a(),r(c,{key:0,to:i.to,custom:""},{default:L(({navigate:d,href:w,isActive:E,isExactActive:D})=>[g(u("a",{href:w,onClick:b=>n.onItemClick(b,i,d),class:n.linkClass(i,{isActive:E,isExactActive:D}),onKeydown:b=>n.onItemKeyDown(b,i),role:"menuitem"},[u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",F,I(n.label(i)),1)],42,["href","onClick","onKeydown"]),[[k]])]),_:2},1032,["to"])):g((a(),r("a",{key:1,href:i.url,class:n.linkClass(i),target:i.target,"aria-haspopup":i.items!=null,"aria-expanded":i===s.activeItem,onClick:d=>n.onItemClick(d,i),onKeydown:d=>n.onItemKeyDown(d,i),role:"menuitem",tabindex:n.disabled(i)?null:"0"},[u("span",{class:["p-menuitem-icon",i.icon]},null,2),u("span",W,I(n.label(i)),1),i.items?(a(),r("span",q)):f("",!0)],42,["href","target","aria-haspopup","aria-expanded","onClick","onKeydown","tabindex"])),[[k]])],64)),n.visible(i)&&i.items?(a(),r(m,{model:i.items,key:n.label(i)+"_sub_",template:l.template,onLeafClick:n.onLeafClick,onKeydownItem:n.onChildItemKeyDown,parentActive:i===s.activeItem,exact:l.exact},null,8,["model","template","onLeafClick","onKeydownItem","parentActive","exact"])):f("",!0)],46,["onMouseenter"])):f("",!0),n.visible(i)&&i.separator?(a(),r("li",{class:["p-menu-separator",i.class],style:i.style,key:"separator"+C.toString(),role:"separator"},null,6)):f("",!0)],64))),128))],2)}_.render=Q;var S={name:"TieredMenu",inheritAttrs:!1,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:String,default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},exact:{type:Boolean,default:!0}},target:null,container:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,data(){return{visible:!1}},beforeUnmount(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&y.clear(this.container),this.container=null},methods:{itemClick(e){const t=e.item;t.command&&(t.command(e),e.originalEvent.preventDefault()),this.hide()},toggle(e){this.visible?this.hide():this.show(e)},show(e){this.visible=!0,this.target=e.currentTarget},hide(){this.visible=!1},onEnter(e){this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&y.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onLeave(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener()},onAfterLeave(e){this.autoZIndex&&y.clear(e)},alignOverlay(){p.absolutePosition(this.container,this.target),this.container.style.minWidth=p.getOuterWidth(this.target)+"px"},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.visible&&this.container&&!this.container.contains(e.target)&&!this.isTargetClicked(e)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Z(this.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.visible&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isTargetClicked(){return this.target&&(this.target===event.target||this.target.contains(event.target))},onLeafClick(){this.popup&&this.hide()},containerRef(e){this.container=e},onOverlayClick(e){P.emit("overlay-click",{originalEvent:e,target:this.target})}},computed:{containerClass(){return["p-tieredmenu p-component",{"p-tieredmenu-overlay":this.popup,"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]}},components:{TieredMenuSub:_}};function G(e,t,l,o,s,n){const c=h("TieredMenuSub");return a(),r(O,{to:l.appendTo,disabled:!l.popup},[u(M,{name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},{default:L(()=>[(l.popup?s.visible:!0)?(a(),r("div",x({key:0,ref:n.containerRef,class:n.containerClass},e.$attrs,{onClick:t[1]||(t[1]=(...m)=>n.onOverlayClick&&n.onOverlayClick(...m))}),[u(c,{model:l.model,root:!0,popup:l.popup,onLeafClick:n.onLeafClick,template:e.$slots.item,exact:l.exact},null,8,["model","popup","onLeafClick","template","exact"])],16)):f("",!0)]),_:1},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"])}function J(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var o=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",l==="top"&&o.firstChild?o.insertBefore(s,o.firstChild):o.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var X=`
.p-tieredmenu-overlay {
    position: absolute;
    top: 0;
    left: 0;
}
.p-tieredmenu ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
.p-tieredmenu .p-submenu-list {
    position: absolute;
    min-width: 100%;
    z-index: 1;
    display: none;
}
.p-tieredmenu .p-menuitem-link {
    cursor: pointer;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
.p-tieredmenu .p-menuitem-text {
    line-height: 1;
}
.p-tieredmenu .p-menuitem {
    position: relative;
}
.p-tieredmenu .p-menuitem-link .p-submenu-icon {
    margin-left: auto;
}
.p-tieredmenu .p-menuitem-active > .p-submenu-list {
    display: block;
    left: 100%;
    top: 0;
}
`;J(X);S.render=G;const Y={name:"SplitButton",inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},model:{type:Array,default:null},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},appendTo:{type:String,default:"body"},class:null,style:null},methods:{onDropdownButtonClick(){this.$refs.menu.toggle({currentTarget:this.$el})},onDefaultButtonClick(){this.$refs.menu.hide()}},computed:{ariaId(){return K()},containerClass(){return["p-splitbutton p-component",this.class]}},components:{PVSButton:B,PVSMenu:S}};function $(e,t,l,o,s,n){const c=h("PVSButton"),m=h("PVSMenu");return a(),H("div",{class:R(n.containerClass),style:V(l.style)},[N(e.$slots,"default",{},()=>[u(c,x({type:"button",class:"p-splitbutton-defaultbutton"},e.$attrs,{icon:l.icon,label:l.label,onClick:n.onDefaultButtonClick}),null,16,["icon","label","onClick"])],!0),u(c,{type:"button",class:"p-splitbutton-menubutton",icon:"pi pi-chevron-down",onClick:n.onDropdownButtonClick,disabled:e.$attrs.disabled,"aria-haspopup":"true","aria-controls":n.ariaId+"_overlay"},null,8,["onClick","disabled","aria-controls"]),u(m,{id:n.ariaId+"_overlay",ref:"menu",model:l.model,popup:!0,autoZIndex:l.autoZIndex,baseZIndex:l.baseZIndex,appendTo:l.appendTo},null,8,["id","model","autoZIndex","baseZIndex","appendTo"])],6)}var se=U(Y,[["render",$],["__scopeId","data-v-232a40f7"]]);export{se as default};