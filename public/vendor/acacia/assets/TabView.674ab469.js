import{a5 as d,i,k as c,M as v,x as b,s as p,F as _,t as w,O as y,o as r,z as B,v as k,Q as x,N as m}from"./vendor.05df324e.js";import{R as I}from"./ripple.esm.574b991d.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";const D={name:"TabView",emits:["update:activeIndex","tab-change","tab-click"],props:{activeIndex:{type:Number,default:0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1}},data(){return{d_activeIndex:this.activeIndex,backwardIsDisabled:!0,forwardIsDisabled:!1}},watch:{activeIndex(e){this.d_activeIndex=e,this.updateScrollBar(e)}},updated(){this.updateInkBar()},mounted(){this.updateInkBar()},methods:{onTabClick(e,t){!this.isTabDisabled(this.tabs[t])&&t!==this.d_activeIndex&&(this.d_activeIndex=t,this.$emit("update:activeIndex",this.d_activeIndex),this.$emit("tab-change",{originalEvent:e,index:t}),this.updateScrollBar(t)),this.$emit("tab-click",{originalEvent:e,index:t})},onTabKeydown(e,t){e.which===13&&this.onTabClick(e,t)},updateInkBar(){let e=this.$refs.nav.children[this.d_activeIndex];this.$refs.inkbar.style.width=d.getWidth(e)+"px",this.$refs.inkbar.style.left=d.getOffset(e).left-d.getOffset(this.$refs.nav).left+"px"},updateScrollBar(e){this.$refs.nav.children[e].scrollIntoView({block:"nearest"})},updateButtonState(){const e=this.$refs.content,{scrollLeft:t,scrollWidth:s}=e,o=d.getWidth(e);this.backwardIsDisabled=t===0,this.forwardIsDisabled=t===s-o},getKey(e,t){return e.props&&e.props.header?e.props.header:t},isTabDisabled(e){return e.props&&e.props.disabled},isTabPanel(e){return e.type.name==="TabPanel"},onScroll(e){this.scrollable&&this.updateButtonState(),e.preventDefault()},getVisibleButtonWidths(){const{prevBtn:e,nextBtn:t}=this.$refs;return[e,t].reduce((s,o)=>o?s+d.getWidth(o):s,0)},navBackward(){const e=this.$refs.content,t=d.getWidth(e)-this.getVisibleButtonWidths(),s=e.scrollLeft-t;e.scrollLeft=s<=0?0:s},navForward(){const e=this.$refs.content,t=d.getWidth(e)-this.getVisibleButtonWidths(),s=e.scrollLeft+t,o=e.scrollWidth-t;e.scrollLeft=s>=o?o:s}},computed:{contentClasses(){return["p-tabview p-component",{"p-tabview-scrollable":this.scrollable}]},prevButtonClasses(){return["p-tabview-nav-prev p-tabview-nav-btn p-link"]},nextButtonClasses(){return["p-tabview-nav-next p-tabview-nav-btn p-link"]},tabs(){const e=[];return this.$slots.default().forEach(t=>{this.isTabPanel(t)?e.push(t):t.children&&t.children instanceof Array&&t.children.forEach(s=>{this.isTabPanel(s)&&e.push(s)})}),e}},directives:{ripple:I}},T={class:"p-tabview-nav-container"},C=c("span",{class:"pi pi-chevron-left"},null,-1),S=[C],W={ref:"nav",class:"p-tabview-nav",role:"tablist"},V=["onClick","onKeydown","tabindex","aria-selected"],K={key:0,class:"p-tabview-title"},L={ref:"inkbar",class:"p-tabview-ink-bar"},z=c("span",{class:"pi pi-chevron-right"},null,-1),E=[z],F={class:"p-tabview-panels"},P={key:0,class:"p-tabview-panel",role:"tabpanel"};function H(e,t,s,o,h,n){const u=y("ripple");return r(),i("div",{class:b(n.contentClasses)},[c("div",T,[s.scrollable&&!h.backwardIsDisabled?v((r(),i("button",{key:0,ref:"prevBtn",class:b(n.prevButtonClasses),onClick:t[0]||(t[0]=(...a)=>n.navBackward&&n.navBackward(...a)),type:"button"},S,2)),[[u]]):p("",!0),c("div",{ref:"content",class:"p-tabview-nav-content",onScroll:t[1]||(t[1]=(...a)=>n.onScroll&&n.onScroll(...a))},[c("ul",W,[(r(!0),i(_,null,w(n.tabs,(a,l)=>(r(),i("li",{role:"presentation",key:n.getKey(a,l),class:b([{"p-highlight":h.d_activeIndex===l,"p-disabled":n.isTabDisabled(a)}])},[v((r(),i("a",{role:"tab",class:"p-tabview-nav-link",onClick:f=>n.onTabClick(f,l),onKeydown:f=>n.onTabKeydown(f,l),tabindex:n.isTabDisabled(a)?null:"0","aria-selected":h.d_activeIndex===l},[a.props&&a.props.header?(r(),i("span",K,B(a.props.header),1)):p("",!0),a.children&&a.children.header?(r(),k(x(a.children.header),{key:1})):p("",!0)],40,V)),[[u]])],2))),128)),c("li",L,null,512)],512)],544),s.scrollable&&!h.forwardIsDisabled?v((r(),i("button",{key:1,ref:"nextBtn",class:b(n.nextButtonClasses),onClick:t[2]||(t[2]=(...a)=>n.navForward&&n.navForward(...a)),type:"button"},E,2)),[[u]]):p("",!0)]),c("div",F,[(r(!0),i(_,null,w(n.tabs,(a,l)=>(r(),i(_,{key:n.getKey(a,l)},[(s.lazy?h.d_activeIndex===l:!0)?v((r(),i("div",P,[(r(),k(x(a)))],512)),[[m,s.lazy?!0:h.d_activeIndex===l]]):p("",!0)],64))),128))])],2)}var R=g(D,[["render",H]]);export{R as default};