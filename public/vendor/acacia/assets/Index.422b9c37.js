import N from"./Backend.d947867c.js";import z from"./WelcomeBanner.76c639d8.js";import O from"./DashboardAvatars.8beba91a.js";import{O as g,X as I,U as w,r as b,E as S,o as r,c as a,f as o,k as p,e as c,l as y,w as u,F as E,m as R,C,p as $,P as U,I as P,t as k,D as H,T as M,d as q,ai as F,j as G,n as W}from"./main.9e765f7d.js";import{s as X}from"./column.esm.6c61d2a3.js";import{s as J}from"./datatable.esm.3689bee8.js";import{s as T}from"./button.esm.a5ac1061.js";import{R as B}from"./ripple.esm.1fe20658.js";import{s as Q}from"./divider.esm.06764bbd.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import"./Sidebar.485bfd5b.js";import"./SidebarLinkGroup.cb8761b1.js";import"./Logo.bf84026c.js";import"./Header.61e29fbc.js";import"./ModalSearch.ed130d60.js";import"./DropdownNotifications.e398f91c.js";import"./DropdownHelp.9bd762b4.js";import"./DropdownProfile.a72bb30f.js";import"./user-avatar-32.07bf604b.js";import"./DropdownFilter.676b5b1f.js";import"./Datepicker.e4af13a9.js";import"./vue-flatpickr.min.9bcaefd2.js";import"./SidebarLink.20e5744c.js";import"./confirmdialog.esm.f379260d.js";import"./dialog.esm.20a296d3.js";import"./SidebarParentLink.898a9f6e.js";import"./paginator.esm.d428c35b.js";import"./dropdown.esm.5bafa883.js";import"./overlayeventbus.esm.ef5cc0da.js";import"./virtualscroller.esm.76cd2139.js";import"./inputnumber.esm.2f528c5c.js";import"./inputtext.esm.dc0f2264.js";var D={name:"OrderList",emits:["update:modelValue","reorder","update:selection","selection-change"],props:{modelValue:{type:Array,default:null},selection:{type:Array,default:null},dataKey:{type:String,default:null},listStyle:{type:null,default:null},metaKeySelection:{type:Boolean,default:!0},responsive:{type:Boolean,default:!0},breakpoint:{type:String,default:"960px"},stripedRows:{type:Boolean,default:!1}},itemTouched:!1,reorderDirection:null,styleElement:null,data(){return{d_selection:this.selection}},beforeUnmount(){this.destroyStyle()},updated(){this.reorderDirection&&(this.updateListScroll(),this.reorderDirection=null)},mounted(){this.responsive&&this.createStyle()},methods:{getItemKey(e,t){return this.dataKey?g.resolveFieldData(e,this.dataKey):t},isSelected(e){return g.findIndexInList(e,this.d_selection)!=-1},moveUp(e){if(this.d_selection){let t=[...this.modelValue];for(let n=0;n<this.d_selection.length;n++){let l=this.d_selection[n],i=g.findIndexInList(l,t);if(i!==0){let s=t[i],d=t[i-1];t[i-1]=s,t[i]=d}else break}this.reorderDirection="up",this.$emit("update:modelValue",t),this.$emit("reorder",{originalEvent:e,value:t,direction:this.reorderDirection})}},moveTop(e){if(this.d_selection){let t=[...this.modelValue];for(let n=0;n<this.d_selection.length;n++){let l=this.d_selection[n],i=g.findIndexInList(l,t);if(i!==0){let s=t.splice(i,1)[0];t.unshift(s)}else break}this.reorderDirection="top",this.$emit("update:modelValue",t),this.$emit("reorder",{originalEvent:e,value:t,direction:this.reorderDirection})}},moveDown(e){if(this.d_selection){let t=[...this.modelValue];for(let n=this.d_selection.length-1;n>=0;n--){let l=this.d_selection[n],i=g.findIndexInList(l,t);if(i!==t.length-1){let s=t[i],d=t[i+1];t[i+1]=s,t[i]=d}else break}this.reorderDirection="down",this.$emit("update:modelValue",t),this.$emit("reorder",{originalEvent:e,value:t,direction:this.reorderDirection})}},moveBottom(e){if(this.d_selection){let t=[...this.modelValue];for(let n=this.d_selection.length-1;n>=0;n--){let l=this.d_selection[n],i=g.findIndexInList(l,t);if(i!==t.length-1){let s=t.splice(i,1)[0];t.push(s)}else break}this.reorderDirection="bottom",this.$emit("update:modelValue",t),this.$emit("reorder",{originalEvent:e,value:t,direction:this.reorderDirection})}},onItemClick(e,t,n){this.itemTouched=!1;let l=g.findIndexInList(t,this.d_selection),i=l!=-1;if(this.itemTouched?!1:this.metaKeySelection){let d=e.metaKey||e.ctrlKey;i&&d?this.d_selection=this.d_selection.filter((f,m)=>m!==l):(this.d_selection=d?this.d_selection?[...this.d_selection]:[]:[],g.insertIntoOrderedArray(t,n,this.d_selection,this.modelValue))}else i?this.d_selection=this.d_selection.filter((d,f)=>f!==l):(this.d_selection=this.d_selection?[...this.d_selection]:[],g.insertIntoOrderedArray(t,n,this.d_selection,this.modelValue));this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:e,value:this.d_selection})},onItemTouchEnd(){this.itemTouched=!0},onItemKeyDown(e,t,n){let l=e.currentTarget;switch(e.which){case 40:var i=this.findNextItem(l);i&&i.focus(),e.preventDefault();break;case 38:var s=this.findPrevItem(l);s&&s.focus(),e.preventDefault();break;case 13:this.onItemClick(e,t,n),e.preventDefault();break}},findNextItem(e){let t=e.nextElementSibling;return t?I.hasClass(t,"p-orderlist-item")?t:this.findNextItem(t):null},findPrevItem(e){let t=e.previousElementSibling;return t?I.hasClass(t,"p-orderlist-item")?t:this.findPrevItem(t):null},updateListScroll(){const e=I.find(this.$refs.list.$el,".p-orderlist-item.p-highlight");if(e&&e.length)switch(this.reorderDirection){case"up":I.scrollInView(this.$refs.list.$el,e[0]);break;case"top":this.$refs.list.$el.scrollTop=0;break;case"down":I.scrollInView(this.$refs.list.$el,e[e.length-1]);break;case"bottom":this.$refs.list.$el.scrollTop=this.$refs.list.$el.scrollHeight;break}},createStyle(){if(!this.styleElement){this.$el.setAttribute(this.attributeSelector,""),this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let e=`
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
`;this.styleElement.innerHTML=e}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-orderlist p-component",{"p-orderlist-striped":this.stripedRows}]},attributeSelector(){return w()}},components:{OLButton:T},directives:{ripple:B}};const Z={class:"p-orderlist-controls"},ee={class:"p-orderlist-list-container"},te={key:0,class:"p-orderlist-header"},ie=["onClick","onKeydown","aria-selected"];function ne(e,t,n,l,i,s){const d=b("OLButton"),f=S("ripple");return r(),a("div",{class:$(s.containerClass)},[o("div",Z,[p(e.$slots,"controlsstart"),c(d,{type:"button",icon:"pi pi-angle-up",onClick:s.moveUp},null,8,["onClick"]),c(d,{type:"button",icon:"pi pi-angle-double-up",onClick:s.moveTop},null,8,["onClick"]),c(d,{type:"button",icon:"pi pi-angle-down",onClick:s.moveDown},null,8,["onClick"]),c(d,{type:"button",icon:"pi pi-angle-double-down",onClick:s.moveBottom},null,8,["onClick"]),p(e.$slots,"controlsend")]),o("div",ee,[e.$slots.header?(r(),a("div",te,[p(e.$slots,"header")])):y("",!0),c(P,{ref:"list",name:"p-orderlist-flip",tag:"ul",class:"p-orderlist-list",style:U(n.listStyle),role:"listbox","aria-multiselectable":"multiple"},{default:u(()=>[(r(!0),a(E,null,R(n.modelValue,(m,x)=>C((r(),a("li",{key:s.getItemKey(m,x),tabindex:"0",class:$(["p-orderlist-item",{"p-highlight":s.isSelected(m)}]),onClick:v=>s.onItemClick(v,m,x),onKeydown:v=>s.onItemKeyDown(v,m,x),onTouchend:t[0]||(t[0]=(...v)=>s.onItemTouchEnd&&s.onItemTouchEnd(...v)),role:"option","aria-selected":s.isSelected(m)},[p(e.$slots,"item",{item:m,index:x})],42,ie)),[[f]])),128))]),_:3},8,["style"])])],2)}function le(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var se=`
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
`;le(se);D.render=ne;var V={name:"Card"};const oe={class:"p-card p-component"},re={key:0,class:"p-card-header"},ae={class:"p-card-body"},de={key:0,class:"p-card-title"},ce={key:1,class:"p-card-subtitle"},pe={class:"p-card-content"},me={key:2,class:"p-card-footer"};function ue(e,t,n,l,i,s){return r(),a("div",oe,[e.$slots.header?(r(),a("div",re,[p(e.$slots,"header")])):y("",!0),o("div",ae,[e.$slots.title?(r(),a("div",de,[p(e.$slots,"title")])):y("",!0),e.$slots.subtitle?(r(),a("div",ce,[p(e.$slots,"subtitle")])):y("",!0),o("div",pe,[p(e.$slots,"content")]),e.$slots.footer?(r(),a("div",me,[p(e.$slots,"footer")])):y("",!0)])])}function he(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var fe=`
.p-card-header img {
    width: 100%;
}
`;he(fe);V.render=ue;var A={name:"Avatar",props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"}},computed:{containerClass(){return["p-avatar p-component",{"p-avatar-image":this.image!=null,"p-avatar-circle":this.shape==="circle","p-avatar-lg":this.size==="large","p-avatar-xl":this.size==="xlarge"}]},iconClass(){return["p-avatar-icon",this.icon]}}};const ge={key:0,class:"p-avatar-text"},ye=["src"];function ve(e,t,n,l,i,s){return r(),a("div",{class:$(s.containerClass)},[p(e.$slots,"default",{},()=>[n.label?(r(),a("span",ge,k(n.label),1)):n.icon?(r(),a("span",{key:1,class:$(s.iconClass)},null,2)):n.image?(r(),a("img",{key:2,src:n.image},null,8,ye)):y("",!0)])],2)}function _e(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var be=`
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
`;_e(be);A.render=ve;var L={name:"Panel",emits:["update:collapsed","toggle"],props:{header:String,toggleable:Boolean,collapsed:Boolean},data(){return{d_collapsed:this.collapsed}},watch:{collapsed(e){this.d_collapsed=e}},methods:{toggle(e){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:e,value:this.d_collapsed})}},computed:{ariaId(){return w()},containerClass(){return["p-panel p-component",{"p-panel-toggleable":this.toggleable}]}},directives:{ripple:B}};const xe={class:"p-panel-header"},ke=["id"],$e={class:"p-panel-icons"},Ie=["id","aria-controls","aria-expanded"],Ce=["id","aria-labelledby"],we={class:"p-panel-content"};function Se(e,t,n,l,i,s){const d=S("ripple");return r(),a("div",{class:$(s.containerClass)},[o("div",xe,[p(e.$slots,"header",{},()=>[n.header?(r(),a("span",{key:0,class:"p-panel-title",id:s.ariaId+"_header"},k(n.header),9,ke)):y("",!0)]),o("div",$e,[p(e.$slots,"icons"),n.toggleable?C((r(),a("button",{key:0,class:"p-panel-header-icon p-panel-toggler p-link",onClick:t[0]||(t[0]=(...f)=>s.toggle&&s.toggle(...f)),type:"button",id:s.ariaId+"_header","aria-controls":s.ariaId+"_content","aria-expanded":!i.d_collapsed},[o("span",{class:$({"pi pi-minus":!i.d_collapsed,"pi pi-plus":i.d_collapsed})},null,2)],8,Ie)),[[d]]):y("",!0)])]),c(M,{name:"p-toggleable-content"},{default:u(()=>[C(o("div",{class:"p-toggleable-content",role:"region",id:s.ariaId+"_content","aria-labelledby":s.ariaId+"_header"},[o("div",we,[p(e.$slots,"default")])],8,Ce),[[H,!i.d_collapsed]])]),_:3})],2)}function Ee(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n==="top"&&l.firstChild?l.insertBefore(i,l.firstChild):l.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}var Te=`
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
`;Ee(Te);L.render=Se;const Be=q({name:"Index",components:{DashboardAvatars:O,WelcomeBanner:z,Backend:N,Head:F,Card:V,OrderList:D,DataTable:J,Column:X,Button:T,Avatar:A,Divider:Q,Panel:L},setup(){return{expandedRows:G([]),onRowReorder:n=>{console.log(n)}}}}),De=o("title",null,"Manage Sidebar Menu",-1),Ve=o("h4",{class:"font-black text-2xl mx-2 px-3"},"Manage Sidebar Menu",-1),Ae={class:"border-t p-2 px-3 mt-4 mx-2"},Le={class:"flex items-center justify-between w-full"},Ke={class:"flex gap-x-2 items-center"},je={class:"flex items-center justify-between w-full"},Ne={class:"flex gap-x-2 items-center"};function ze(e,t,n,l,i,s){const d=b("Head"),f=b("Avatar"),m=b("Button"),x=b("Panel"),v=b("OrderList"),K=b("Card"),j=b("Backend");return r(),a(E,null,[c(d,null,{default:u(()=>[De]),_:1}),c(j,null,{header:u(()=>[Ve]),default:u(()=>[o("div",Ae,[c(K,null,{content:u(()=>[c(v,{modelValue:e.$page.props.acacia.sidebar_menu,"onUpdate:modelValue":t[0]||(t[0]=h=>e.$page.props.acacia.sidebar_menu=h),dataKey:"id"},{item:u(({item:h})=>[c(x,{collapsed:!1,toggleable:h.has_children},{header:u(()=>[o("div",Le,[c(f,{icon:h.icon,class:"bg-green-500",size:"large",shape:"square"},null,8,["icon"]),o("div",null,[o("h4",null,k(h.title),1),o("small",null,k(h.href),1)]),o("div",Ke,[c(m,{onClick:_=>e.$inertia.visit(e.route("acacia.backend.acacia-menu.edit",h.id)),label:"Edit",icon:"pi pi-pencil"},null,8,["onClick"])])])]),default:u(()=>[h.has_children?(r(),W(v,{key:0,modelValue:h.children,"onUpdate:modelValue":_=>h.children=_,dataKey:"id"},{item:u(_=>[c(x,{collapsed:!1,toggleable:_.item.has_children},{header:u(()=>[o("div",je,[c(f,{icon:_.item.icon,class:"bg-green-500",size:"large",shape:"square"},null,8,["icon"]),o("div",null,[o("h4",null,k(_.item.title),1),o("small",null,k(_.item.href),1)]),o("div",Ne,[c(m,{onClick:Oe=>e.$inertia.visit(e.route("acacia.backend.acacia-menu.edit",_.item.id)),label:"Edit",icon:"pi pi-pencil"},null,8,["onClick"])])])]),_:2},1032,["toggleable"])]),_:2},1032,["modelValue","onUpdate:modelValue"])):y("",!0)]),_:2},1032,["toggleable"])]),_:1},8,["modelValue"])]),_:1})])]),_:1})],64)}var vt=Y(Be,[["render",ze]]);export{vt as default};
