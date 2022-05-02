import{X as c,E as m,o as r,c as o,f as p,C as h,p as v,l as b,F as w,m as x,t as g,n as k,G as y,D as _,k as B}from"./main.9e765f7d.js";import{R as I}from"./ripple.esm.1fe20658.js";var C={name:"TabView",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1}},data(){return{d_activeIndex:this.activeIndex,backwardIsDisabled:!0,forwardIsDisabled:!1}},watch:{activeIndex(e){this.d_activeIndex=e,this.updateScrollBar(e)}},updated(){this.updateInkBar()},mounted(){this.updateInkBar()},methods:{onTabClick(e,t){!this.isTabDisabled(this.tabs[t])&&t!==this.d_activeIndex&&(this.d_activeIndex=t,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit("tab-change",{originalEvent:e,index:t}),this.updateScrollBar(t)),this.$emit("tab-click",{originalEvent:e,index:t})},onTabKeydown(e,t){e.which===13&&this.onTabClick(e,t)},updateInkBar(){let e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=c.getWidth(e)+"px",this.$refs.inkbar.style.left=c.getOffset(e).left-c.getOffset(this.$refs.nav).left+"px"},updateScrollBar(e){this.$refs.nav.children[e].scrollIntoView({block:"nearest"})},updateButtonState(){const e=this.$refs.content,{scrollLeft:t,scrollWidth:n}=e,i=c.getWidth(e);this.backwardIsDisabled=t===0,this.forwardIsDisabled=parseInt(t)===n-i},getKey(e,t){return e.props&&e.props.header?e.props.header:t},isTabDisabled(e){return e.props&&e.props.disabled},isTabPanel(e){return e.type.name==="TabPanel"},onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},getVisibleButtonWidths(){const{prevBtn:e,nextBtn:t}=this.$refs;return[e,t].reduce((n,i)=>i?n+c.getWidth(i):n,0)},navBackward(){const e=this.$refs.content,t=c.getWidth(e)-this.getVisibleButtonWidths(),n=e.scrollLeft-t;e.scrollLeft=n<=0?0:n},navForward(){const e=this.$refs.content,t=c.getWidth(e)-this.getVisibleButtonWidths(),n=e.scrollLeft+t,i=e.scrollWidth-t;e.scrollLeft=n>=i?i:n}},computed:{contentClasses(){return["p-tabview p-component",{"p-tabview-scrollable":this.scrollable}]},prevButtonClasses(){return["p-tabview-nav-prev p-tabview-nav-btn p-link"]},nextButtonClasses(){return["p-tabview-nav-next p-tabview-nav-btn p-link"]},tabs(){const e=[];return this.$slots.default().forEach(t=>{this.isTabPanel(t)?e.push(t):t.children&&t.children instanceof Array&&t.children.forEach(n=>{this.isTabPanel(n)&&e.push(n)})}),e}},directives:{ripple:I}};const T={class:"p-tabview-nav-container"},D=p("span",{class:"pi pi-chevron-left"},null,-1),S=[D],W={ref:"nav",class:"p-tabview-nav",role:"tablist"},z=["onClick","onKeydown","tabindex","aria-selected"],E={key:0,class:"p-tabview-title"},K={ref:"inkbar",class:"p-tabview-ink-bar"},L=p("span",{class:"pi pi-chevron-right"},null,-1),P=[L],V={class:"p-tabview-panels"},F={key:0,class:"p-tabview-panel",role:"tabpanel"};function N(e,t,n,i,l,a){const u=m("ripple");return r(),o("div",{class:v(a.contentClasses)},[p("div",T,[n.scrollable&&!l.backwardIsDisabled?h((r(),o("button",{key:0,ref:"prevBtn",class:v(a.prevButtonClasses),onClick:t[0]||(t[0]=(...s)=>a.navBackward&&a.navBackward(...s)),type:"button"},S,2)),[[u]]):b("",!0),p("div",{ref:"content",class:"p-tabview-nav-content",onScroll:t[1]||(t[1]=(...s)=>a.onScroll&&a.onScroll(...s))},[p("ul",W,[(r(!0),o(w,null,x(a.tabs,(s,d)=>(r(),o("li",{role:"presentation",key:a.getKey(s,d),class:v([{"p-highlight":l.d_activeIndex===d,"p-disabled":a.isTabDisabled(s)}])},[h((r(),o("a",{role:"tab",class:"p-tabview-nav-link",onClick:f=>a.onTabClick(f,d),onKeydown:f=>a.onTabKeydown(f,d),tabindex:a.isTabDisabled(s)?null:"0","aria-selected":l.d_activeIndex===d},[s.props&&s.props.header?(r(),o("span",E,g(s.props.header),1)):b("",!0),s.children&&s.children.header?(r(),k(y(s.children.header),{key:1})):b("",!0)],40,z)),[[u]])],2))),128)),p("li",K,null,512)],512)],544),n.scrollable&&!l.forwardIsDisabled?h((r(),o("button",{key:1,ref:"nextBtn",class:v(a.nextButtonClasses),onClick:t[2]||(t[2]=(...s)=>a.navForward&&a.navForward(...s)),type:"button"},P,2)),[[u]]):b("",!0)]),p("div",V,[(r(!0),o(w,null,x(a.tabs,(s,d)=>(r(),o(w,{key:a.getKey(s,d)},[!n.lazy||l.d_activeIndex===d?h((r(),o("div",F,[(r(),k(y(s)))],512)),[[_,n.lazy?!0:l.d_activeIndex===d]]):b("",!0)],64))),128))])],2)}function H(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",n==="top"&&i.firstChild?i.insertBefore(l,i.firstChild):i.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}var A=`
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
`;H(A);C.render=N;var j={name:"TabPanel",props:{header:null,disabled:Boolean}};function O(e,t,n,i,l,a){return B(e.$slots,"default")}j.render=O;export{j as a,C as s};
