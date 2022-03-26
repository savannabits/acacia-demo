import A from"./Backend.5aa1bcce.js";import K from"./WelcomeBanner.e6597c05.js";import N from"./DashboardAvatars.03cd71bc.js";import{aa as f,a5 as k,U as C,r as v,O as S,o as r,v as c,j as a,q as y,s as I,S as z,w as m,F as $,t as O,M as w,z as x,N as H,K as P,e as U,am as M,p as R,i as q,k as o}from"./vendor.05df324e.js";import{s as F}from"./column.esm.cc8b8b77.js";import{s as G}from"./datatable.esm.6e02ebef.js";import{s as j}from"./button.esm.cbb15c31.js";import{R as D}from"./ripple.esm.574b991d.js";import{s as W,a as J}from"./divider.esm.2d8e81af.js";import{_ as Q}from"./plugin-vue_export-helper.21dcd24c.js";import"./Sidebar.eaa3bc39.js";import"./SidebarLinkGroup.631e5e48.js";import"./Header.f4796df8.js";import"./ModalSearch.0fe5a03a.js";import"./DropdownNotifications.8ff848f9.js";import"./DropdownHelp.ee3a80f5.js";import"./DropdownProfile.b6a2cd02.js";import"./user-avatar-32.07bf604b.js";import"./DropdownFilter.d3d0573f.js";import"./Datepicker.0a132f4e.js";import"./vue-flatpickr.min.87ca1928.js";import"./SidebarLink.e30e4992.js";import"./confirmdialog.esm.5be0612a.js";import"./dialog.esm.7f94084b.js";import"./SidebarParentLink.acf5cc4a.js";import"./paginator.esm.ff35b289.js";import"./dropdown.esm.573df5c1.js";import"./overlayeventbus.esm.d529c5a8.js";import"./virtualscroller.esm.adfef9da.js";import"./inputnumber.esm.f09ada2c.js";import"./inputtext.esm.b08d2117.js";var E={name:"OrderList",emits:["update:modelValue","reorder","update:selection","selection-change"],props:{modelValue:{type:Array,default:null},selection:{type:Array,default:null},dataKey:{type:String,default:null},listStyle:{type:null,default:null},metaKeySelection:{type:Boolean,default:!0},responsive:{type:Boolean,default:!0},breakpoint:{type:String,default:"960px"}},itemTouched:!1,reorderDirection:null,styleElement:null,data(){return{d_selection:this.selection}},beforeUnmount(){this.destroyStyle()},updated(){this.reorderDirection&&(this.updateListScroll(),this.reorderDirection=null)},mounted(){this.responsive&&this.createStyle()},methods:{getItemKey(e,t){return this.dataKey?f.resolveFieldData(e,this.dataKey):t},isSelected(e){return f.findIndexInList(e,this.d_selection)!=-1},moveUp(){if(this.d_selection){let e=[...this.modelValue];for(let t=0;t<this.d_selection.length;t++){let l=this.d_selection[t],i=f.findIndexInList(l,e);if(i!==0){let n=e[i],s=e[i-1];e[i-1]=n,e[i]=s}else break}this.reorderDirection="up",this.$emit("update:modelValue",e),this.$emit("reorder",{originalEvent:event,value:e,direction:this.reorderDirection})}},moveTop(){if(this.d_selection){let e=[...this.modelValue];for(let t=0;t<this.d_selection.length;t++){let l=this.d_selection[t],i=f.findIndexInList(l,e);if(i!==0){let n=e.splice(i,1)[0];e.unshift(n)}else break}this.reorderDirection="top",this.$emit("update:modelValue",e),this.$emit("reorder",{originalEvent:event,value:e,direction:this.reorderDirection})}},moveDown(){if(this.d_selection){let e=[...this.modelValue];for(let t=this.d_selection.length-1;t>=0;t--){let l=this.d_selection[t],i=f.findIndexInList(l,e);if(i!==e.length-1){let n=e[i],s=e[i+1];e[i+1]=n,e[i]=s}else break}this.reorderDirection="down",this.$emit("update:modelValue",e),this.$emit("reorder",{originalEvent:event,value:e,direction:this.reorderDirection})}},moveBottom(){if(this.d_selection){let e=[...this.modelValue];for(let t=this.d_selection.length-1;t>=0;t--){let l=this.d_selection[t],i=f.findIndexInList(l,e);if(i!==e.length-1){let n=e.splice(i,1)[0];e.push(n)}else break}this.reorderDirection="bottom",this.$emit("update:modelValue",e),this.$emit("reorder",{originalEvent:event,value:e,direction:this.reorderDirection})}},onItemClick(e,t,l){this.itemTouched=!1;let i=f.findIndexInList(t,this.d_selection),n=i!=-1;if(this.itemTouched?!1:this.metaKeySelection){let d=e.metaKey||e.ctrlKey;n&&d?this.d_selection=this.d_selection.filter((h,p)=>p!==i):(this.d_selection=d?this.d_selection?[...this.d_selection]:[]:[],f.insertIntoOrderedArray(t,l,this.d_selection,this.modelValue))}else n?this.d_selection=this.d_selection.filter((d,h)=>h!==i):(this.d_selection=this.d_selection?[...this.d_selection]:[],f.insertIntoOrderedArray(t,l,this.d_selection,this.modelValue));this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:e,value:this.d_selection})},onItemTouchEnd(){this.itemTouched=!0},onItemKeyDown(e,t,l){let i=e.currentTarget;switch(e.which){case 40:var n=this.findNextItem(i);n&&n.focus(),e.preventDefault();break;case 38:var s=this.findPrevItem(i);s&&s.focus(),e.preventDefault();break;case 13:this.onItemClick(e,t,l),e.preventDefault();break}},findNextItem(e){let t=e.nextElementSibling;return t?k.hasClass(t,"p-orderlist-item")?t:this.findNextItem(t):null},findPrevItem(e){let t=e.previousElementSibling;return t?k.hasClass(t,"p-orderlist-item")?t:this.findPrevItem(t):null},updateListScroll(){const e=k.find(this.$refs.list.$el,".p-orderlist-item.p-highlight");if(e&&e.length)switch(this.reorderDirection){case"up":k.scrollInView(this.$refs.list.$el,e[0]);break;case"top":this.$refs.list.$el.scrollTop=0;break;case"down":k.scrollInView(this.$refs.list.$el,e[e.length-1]);break;case"bottom":this.$refs.list.$el.scrollTop=this.$refs.list.$el.scrollHeight;break}},createStyle(){if(!this.styleElement){this.$el.setAttribute(this.attributeSelector,""),this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e=`
@media screen and (max-width: ${this.breakpoint}) {
    .p-orderlist[${this.attributeSelector}] {
        flex-direction: column;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-orderlist[${this.attributeSelector}] .p-orderlist-controls .p-button:last-child {
        margin-right: 0;
    }
}
`;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector(){return C()}},components:{OLButton:j},directives:{ripple:D}};const X={class:"p-orderlist p-component"},Y={class:"p-orderlist-controls"},Z={class:"p-orderlist-list-container"},ee={key:0,class:"p-orderlist-header"};function te(e,t,l,i,n,s){const d=v("OLButton"),h=S("ripple");return r(),c("div",X,[a("div",Y,[y(e.$slots,"controlsstart"),a(d,{type:"button",icon:"pi pi-angle-up",onClick:s.moveUp},null,8,["onClick"]),a(d,{type:"button",icon:"pi pi-angle-double-up",onClick:s.moveTop},null,8,["onClick"]),a(d,{type:"button",icon:"pi pi-angle-down",onClick:s.moveDown},null,8,["onClick"]),a(d,{type:"button",icon:"pi pi-angle-double-down",onClick:s.moveBottom},null,8,["onClick"]),y(e.$slots,"controlsend")]),a("div",Z,[e.$slots.header?(r(),c("div",ee,[y(e.$slots,"header")])):I("",!0),a(z,{ref:"list",name:"p-orderlist-flip",tag:"ul",class:"p-orderlist-list",style:l.listStyle,role:"listbox","aria-multiselectable":"multiple"},{default:m(()=>[(r(!0),c($,null,O(l.modelValue,(p,_)=>w((r(),c("li",{key:s.getItemKey(p,_),tabindex:"0",class:["p-orderlist-item",{"p-highlight":s.isSelected(p)}],onClick:b=>s.onItemClick(b,p,_),onKeydown:b=>s.onItemKeyDown(b,p,_),onTouchend:t[1]||(t[1]=(...b)=>s.onItemTouchEnd&&s.onItemTouchEnd(...b)),role:"option","aria-selected":s.isSelected(p)},[y(e.$slots,"item",{item:p,index:_})],42,["onClick","onKeydown","aria-selected"])),[[h]])),128))]),_:3},8,["style"])])])}function ie(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var ne=`
.p-orderlist {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-orderlist-controls {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-orderlist-list-container {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-orderlist-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: auto;
    min-height: 12rem;
    max-height: 24rem;
}
.p-orderlist-item {
    cursor: pointer;
    overflow: hidden;
    position: relative;
}
.p-orderlist.p-state-disabled .p-orderlist-item,
.p-orderlist.p-state-disabled .p-button {
    cursor: default;
}
.p-orderlist.p-state-disabled .p-orderlist-list {
    overflow: hidden;
}
`;ie(ne);E.render=te;var B={name:"Avatar",props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]},iconClass(){return["p-avatar-icon",this.icon]}}};const le={key:0,class:"p-avatar-text"};function se(e,t,l,i,n,s){return r(),c("div",{class:s.containerClass},[y(e.$slots,"default",{},()=>[l.label?(r(),c("span",le,x(l.label),1)):l.icon?(r(),c("span",{key:1,class:s.iconClass},null,2)):l.image?(r(),c("img",{key:2,src:l.image},null,8,["src"])):I("",!0)])],2)}function ae(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var re=`
.p-avatar {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
}
.p-avatar.p-avatar-image {
    background-color: transparent;
}
.p-avatar.p-avatar-circle {
    border-radius: 50%;
}
.p-avatar-circle img {
    border-radius: 50%;
}
.p-avatar .p-avatar-icon {
    font-size: 1rem;
}
.p-avatar img {
    width: 100%;
    height: 100%;
}
`;ae(re);B.render=se;var T={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})}},computed:{ariaId(){return C()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]}},directives:{ripple:D}};const oe={class:"p-panel-header"},de={class:"p-panel-icons"},ce={class:"p-panel-content"};function pe(e,t,l,i,n,s){const d=S("ripple");return r(),c("div",{class:s.containerClass},[a("div",oe,[y(e.$slots,"header",{},()=>[l.header?(r(),c("span",{key:0,class:"p-panel-title",id:s.ariaId+"_header"},x(l.header),9,["id"])):I("",!0)]),a("div",de,[y(e.$slots,"icons"),l.toggleable?w((r(),c("button",{key:0,class:"p-panel-header-icon p-panel-toggler p-link",onClick:t[1]||(t[1]=(...h)=>s.toggle&&s.toggle(...h)),type:"button",id:s.ariaId+"_header","aria-controls":s.ariaId+"_content","aria-expanded":!n.d_collapsed},[a("span",{class:{"pi pi-minus":!n.d_collapsed,"pi pi-plus":n.d_collapsed}},null,2)],8,["id","aria-controls","aria-expanded"])),[[d]]):I("",!0)])]),a(P,{name:"p-toggleable-content"},{default:m(()=>[w(a("div",{class:"p-toggleable-content",role:"region",id:s.ariaId+"_content","aria-labelledby":s.ariaId+"_header"},[a("div",ce,[y(e.$slots,"default")])],8,["id","aria-labelledby"]),[[H,!n.d_collapsed]])]),_:3})],2)}function me(e,t){t===void 0&&(t={});var l=t.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&i.firstChild?i.insertBefore(n,i.firstChild):i.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var ue=`
.p-panel-header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-panel-title {
    line-height: 1;
}
.p-panel-header-icon {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    cursor: pointer;
    text-decoration: none;
    overflow: hidden;
    position: relative;
}
`;me(ue);T.render=pe;const he=U({name:"Index",components:{DashboardAvatars:N,WelcomeBanner:K,Backend:A,Head:M,Card:W,OrderList:E,DataTable:G,Column:F,Button:j,Avatar:B,Divider:J,Panel:T},setup(){return{expandedRows:R([]),onRowReorder:l=>{console.log(l)}}}}),fe=o("title",null,"Manage Sidebar Menu",-1),be=o("h4",{class:"font-black text-2xl mx-2 px-3"},"Manage Sidebar Menu",-1),ge={class:"border-t p-2 px-3 mt-4 mx-2"},ve={class:"flex items-center justify-between w-full"},ye={class:"flex gap-x-2 items-center"},_e={class:"flex items-center justify-between w-full"},xe={class:"flex gap-x-2 items-center"};function ke(e,t,l,i,n,s){const d=v("Head"),h=v("Avatar"),p=v("Button"),_=v("Panel"),b=v("OrderList"),V=v("Card"),L=v("Backend");return r(),q($,null,[a(d,null,{default:m(()=>[fe]),_:1}),a(L,null,{header:m(()=>[be]),default:m(()=>[o("div",ge,[a(V,null,{content:m(()=>[a(b,{modelValue:e.$page.props.acacia.sidebar_menu,"onUpdate:modelValue":t[0]||(t[0]=u=>e.$page.props.acacia.sidebar_menu=u),dataKey:"id"},{item:m(({item:u})=>[a(_,{collapsed:!1,toggleable:u.has_children},{header:m(()=>[o("div",ve,[a(h,{icon:u.icon,class:"bg-green-500",size:"large",shape:"square"},null,8,["icon"]),o("div",null,[o("h4",null,x(u.title),1),o("small",null,x(u.href),1)]),o("div",ye,[a(p,{onClick:g=>e.$inertia.visit(e.route("acacia.backend.acacia-menu.edit",u.id)),label:"Edit",icon:"pi pi-pencil"},null,8,["onClick"])])])]),default:m(()=>[u.has_children?(r(),c(b,{key:0,modelValue:u.children,"onUpdate:modelValue":g=>u.children=g,dataKey:"id"},{item:m(g=>[a(_,{collapsed:!1,toggleable:g.item.has_children},{header:m(()=>[o("div",_e,[a(h,{icon:g.item.icon,class:"bg-green-500",size:"large",shape:"square"},null,8,["icon"]),o("div",null,[o("h4",null,x(g.item.title),1),o("small",null,x(g.item.href),1)]),o("div",xe,[a(p,{onClick:Ie=>e.$inertia.visit(e.route("acacia.backend.acacia-menu.edit",g.item.id)),label:"Edit",icon:"pi pi-pencil"},null,8,["onClick"])])])]),_:2},1032,["toggleable"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):I("",!0)]),_:2},1032,["toggleable"])]),_:1},8,["modelValue"])]),_:1})])]),_:1})],64)}var tt=Q(he,[["render",ke]]);export{tt as default};
