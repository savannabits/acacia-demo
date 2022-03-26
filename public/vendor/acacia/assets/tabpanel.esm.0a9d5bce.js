import{a5 as p,O as y,o as r,v as o,j as c,M as v,s as b,F as f,t as w,z as k,Q as x,N as m,q as g}from"./vendor.05df324e.js";import{R as B}from"./ripple.esm.574b991d.js";var I={name:"TabView",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1}},data(){return{d_activeIndex:this.activeIndex,backwardIsDisabled:!0,forwardIsDisabled:!1}},watch:{activeIndex(e){this.d_activeIndex=e,this.updateScrollBar(e)}},updated(){this.updateInkBar()},mounted(){this.updateInkBar()},methods:{onTabClick(e,t){!this.isTabDisabled(this.tabs[t])&&t!==this.d_activeIndex&&(this.d_activeIndex=t,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit("tab-change",{originalEvent:e,index:t}),this.updateScrollBar(t)),this.$emit("tab-click",{originalEvent:e,index:t})},onTabKeydown(e,t){e.which===13&&this.onTabClick(e,t)},updateInkBar(){let e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=p.getWidth(e)+"px",this.$refs.inkbar.style.left=p.getOffset(e).left-p.getOffset(this.$refs.nav).left+"px"},updateScrollBar(e){this.$refs.nav.children[e].scrollIntoView({block:"nearest"})},updateButtonState(){const e=this.$refs.content,{scrollLeft:t,scrollWidth:n}=e,i=p.getWidth(e);this.backwardIsDisabled=t===0,this.forwardIsDisabled=t===n-i},getKey(e,t){return e.props&&e.props.header?e.props.header:t},isTabDisabled(e){return e.props&&e.props.disabled},isTabPanel(e){return e.type.name==="TabPanel"},onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},getVisibleButtonWidths(){const{prevBtn:e,nextBtn:t}=this.$refs;return[e,t].reduce((n,i)=>i?n+p.getWidth(i):n,0)},navBackward(){const e=this.$refs.content,t=p.getWidth(e)-this.getVisibleButtonWidths(),n=e.scrollLeft-t;e.scrollLeft=n<=0?0:n},navForward(){const e=this.$refs.content,t=p.getWidth(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+t,i=e.scrollWidth-t;e.scrollLeft=n>=i?i:n}},computed:{contentClasses(){return["p-tabview p-component",{"p-tabview-scrollable":this.scrollable}]},prevButtonClasses(){return["p-tabview-nav-prev p-tabview-nav-btn p-link"]},nextButtonClasses(){return["p-tabview-nav-next p-tabview-nav-btn p-link"]},tabs(){const e=[];return this.$slots.default().forEach(t=>{this.isTabPanel(t)?e.push(t):t.children&&t.children instanceof Array&&t.children.forEach(n=>{this.isTabPanel(n)&&e.push(n)})}),e}},directives:{ripple:B}};const _={class:"p-tabview-nav-container"},C=c("span",{class:"pi pi-chevron-left"},null,-1),T={ref:"nav",class:"p-tabview-nav",role:"tablist"},D={key:0,class:"p-tabview-title"},S={ref:"inkbar",class:"p-tabview-ink-bar"},W=c("span",{class:"pi pi-chevron-right"},null,-1),z={class:"p-tabview-panels"},K={key:0,class:"p-tabview-panel",role:"tabpanel"};function E(e,t,n,i,l,a){const h=y("ripple");return r(),o("div",{class:a.contentClasses},[c("div",_,[n.scrollable&&!l.backwardIsDisabled?v((r(),o("button",{key:0,ref:"prevBtn",class:a.prevButtonClasses,onClick:t[1]||(t[1]=(...s)=>a.navBackward&&a.navBackward(...s)),type:"button"},[C],2)),[[h]]):b("",!0),c("div",{ref:"content",class:"p-tabview-nav-content",onScroll:t[2]||(t[2]=(...s)=>a.onScroll&&a.onScroll(...s))},[c("ul",T,[(r(!0),o(f,null,w(a.tabs,(s,d)=>(r(),o("li",{role:"presentation",key:a.getKey(s,d),class:[{"p-highlight":l.d_activeIndex===d,"p-disabled":a.isTabDisabled(s)}]},[v(c("a",{role:"tab",class:"p-tabview-nav-link",onClick:u=>a.onTabClick(u,d),onKeydown:u=>a.onTabKeydown(u,d),tabindex:a.isTabDisabled(s)?null:"0","aria-selected":l.d_activeIndex===d},[s.props&&s.props.header?(r(),o("span",D,k(s.props.header),1)):b("",!0),s.children&&s.children.header?(r(),o(x(s.children.header),{key:1})):b("",!0)],40,["onClick","onKeydown","tabindex","aria-selected"]),[[h]])],2))),128)),c("li",S,null,512)],512)],544),n.scrollable&&!l.forwardIsDisabled?v((r(),o("button",{key:1,ref:"nextBtn",class:a.nextButtonClasses,onClick:t[3]||(t[3]=(...s)=>a.navForward&&a.navForward(...s)),type:"button"},[W],2)),[[h]]):b("",!0)]),c("div",z,[(r(!0),o(f,null,w(a.tabs,(s,d)=>(r(),o(f,{key:a.getKey(s,d)},[(n.lazy?l.d_activeIndex===d:!0)?v((r(),o("div",K,[(r(),o(x(s)))],512)),[[m,n.lazy?!0:l.d_activeIndex===d]]):b("",!0)],64))),128))])],2)}function L(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var N=`
.p-tabview-nav-container {
    position: relative;
}
.p-tabview-scrollable .p-tabview-nav-container {
    overflow: hidden;
}
.p-tabview-nav-content {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-scroll-chaining: contain auto;
        overscroll-behavior: contain auto;
}
.p-tabview-nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
}
.p-tabview-nav-link {
    cursor: pointer;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    position: relative;
    text-decoration: none;
    overflow: hidden;
}
.p-tabview-ink-bar {
    display: none;
    z-index: 1;
}
.p-tabview-nav-link:focus {
    z-index: 1;
}
.p-tabview-title {
    line-height: 1;
    white-space: nowrap;
}
.p-tabview-nav-btn {
    position: absolute;
    top: 0;
    z-index: 2;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-tabview-nav-prev {
    left: 0;
}
.p-tabview-nav-next {
    right: 0;
}
.p-tabview-nav-content::-webkit-scrollbar {
    display: none;
}
`;L(N);I.render=E;var P={name:"TabPanel",props:{header:null,disabled:Boolean}};function V(e,t,n,i,l,a){return g(e.$slots,"default")}P.render=V;export{P as a,I as s};
