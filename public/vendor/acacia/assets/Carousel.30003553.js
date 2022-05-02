import{U as I,X as _,c as o,k as m,l as p,f as c,p as h,C as b,P as S,F as f,m as v,E as V,o as u}from"./main.9e765f7d.js";import{R as y}from"./ripple.esm.1fe20658.js";import{_ as C}from"./plugin-vue_export-helper.21dcd24c.js";const w={name:"Carousel",emits:["update:page"],props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0}},data(){return{id:I(),remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},isRemainingItemsAdded:!1,watch:{page(e){this.d_page=e},circular(e){this.d_circular=e},numVisible(e,t){this.d_numVisible=e,this.d_oldNumVisible=t},numScroll(e,t){this.d_oldNumScroll=t,this.d_numScroll=e},value(e){this.d_oldValue=e}},methods:{step(e,t){let i=this.totalShiftedItems;const l=this.isCircular();if(t!=null)i=this.d_numScroll*t*-1,l&&(i-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{i+=this.d_numScroll*e,this.isRemainingItemsAdded&&(i+=this.remainingItems-this.d_numScroll*e,this.isRemainingItemsAdded=!1);let n=l?i+this.d_numVisible:i;t=Math.abs(Math.floor(n/this.d_numScroll))}l&&this.d_page===this.totalIndicators-1&&e===-1?(i=-1*(this.value.length+this.d_numVisible),t=0):l&&this.d_page===0&&e===1?(i=0,t=this.totalIndicators-1):t===this.totalIndicators-1&&this.remainingItems>0&&(i+=this.remainingItems*-1-this.d_numScroll*e,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(_.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`,this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=i,this.$emit("update:page",t),this.d_page=t},calculatePosition(){if(this.$refs.itemsContainer&&this.responsiveOptions){let e=window.innerWidth,t={numVisible:this.numVisible,numScroll:this.numScroll};for(let i=0;i<this.responsiveOptions.length;i++){let l=this.responsiveOptions[i];parseInt(l.breakpoint,10)>=e&&(t=l)}if(this.d_numScroll!==t.numScroll){let i=this.d_page;i=parseInt(i*this.d_numScroll/t.numScroll),this.totalShiftedItems=t.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=t.numVisible),this.d_numScroll=t.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==t.numVisible&&(this.d_numVisible=t.numVisible)}},navBackward(e,t){(this.d_circular||this.d_page!==0)&&this.step(1,t),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},navForward(e,t){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,t),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},onIndicatorClick(e,t){let i=this.d_page;t>i?this.navForward(e,t):t<i&&this.navBackward(e,t)},onTransitionEnd(){this.$refs.itemsContainer&&(_.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?`translate3d(0, ${this.totalShiftedItems*(100/this.d_numVisible)}%, 0)`:`translate3d(${this.totalShiftedItems*(100/this.d_numVisible)}%, 0, 0)`))},onTouchStart(e){let t=e.changedTouches[0];this.startPos={x:t.pageX,y:t.pageY}},onTouchMove(e){e.cancelable&&e.preventDefault()},onTouchEnd(e){let t=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,t.pageY-this.startPos.y):this.changePageOnTouch(e,t.pageX-this.startPos.x)},changePageOnTouch(e,t){Math.abs(t)>this.swipeThreshold&&(t<0?this.navForward(e):this.navBackward(e))},bindDocumentListeners(){this.documentResizeListener||(this.documentResizeListener=e=>{this.calculatePosition(e)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay(){this.interval=setInterval(()=>{this.d_page===this.totalIndicators-1?this.step(-1,0):this.step(-1,this.d_page+1)},this.autoplayInterval)},stopAutoplay(){this.interval&&clearInterval(this.interval)},createStyle(){this.carouselStyle||(this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",document.body.appendChild(this.carouselStyle));let e=`
            #${this.id} .p-carousel-item {
                flex: 1 0 ${100/this.d_numVisible}%
            }
        `;if(this.responsiveOptions){let t=[...this.responsiveOptions];t.sort((i,l)=>{const n=i.breakpoint,s=l.breakpoint;let d=null;return n==null&&s!=null?d=-1:n!=null&&s==null?d=1:n==null&&s==null?d=0:typeof n=="string"&&typeof s=="string"?d=n.localeCompare(s,void 0,{numeric:!0}):d=n<s?-1:n>s?1:0,-1*d});for(let i=0;i<t.length;i++){let l=t[i];e+=`
                    @media screen and (max-width: ${l.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100/l.numVisible}%
                        }
                    }
                `}}this.carouselStyle.innerHTML=e},isVertical(){return this.orientation==="vertical"},isCircular(){return this.value&&this.d_circular&&this.value.length>=this.d_numVisible},isAutoplay(){return this.autoplayInterval&&this.allowAutoplay},firstIndex(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex(){return this.firstIndex()+this.d_numVisible-1}},mounted(){this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners()},updated(){const e=this.isCircular();let t=!1,i=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;let l=this.d_page;this.totalIndicators!==0&&l>=this.totalIndicators&&(l=this.totalIndicators-1,this.$emit("update:page",l),this.d_page=l,t=!0),i=l*this.d_numScroll*-1,e&&(i-=this.d_numVisible),l===this.totalIndicators-1&&this.remainingItems>0?(i+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,i!==this.totalShiftedItems&&(this.totalShiftedItems=i,t=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?`translate3d(0, ${i*(100/this.d_numVisible)}%, 0)`:`translate3d(${i*(100/this.d_numVisible)}%, 0, 0)`}e&&(this.d_page===0?i=-1*this.d_numVisible:i===0&&(i=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),i!==this.totalShiftedItems&&(this.totalShiftedItems=i,t=!0)),!t&&this.isAutoplay()&&this.startAutoplay()},beforeUnmount(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},computed:{totalIndicators(){return this.value?Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1:0},backwardIsDisabled(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},containerClasses(){return["p-carousel-container",this.containerClass]},contentClasses(){return["p-carousel-content ",this.contentClass]},indicatorsContentClasses(){return["p-carousel-indicators p-reset",this.indicatorsContentClass]}},directives:{ripple:y}},k=["id"],T={key:0,class:"p-carousel-header"},A=["disabled"],D=["disabled"],R=["onClick"],L={key:1,class:"p-carousel-footer"};function N(e,t,i,l,n,s){const d=V("ripple");return u(),o("div",{id:n.id,class:h(["p-carousel p-component",{"p-carousel-vertical":s.isVertical(),"p-carousel-horizontal":!s.isVertical()}])},[e.$slots.header?(u(),o("div",T,[m(e.$slots,"header")])):p("",!0),c("div",{class:h(s.contentClasses)},[c("div",{class:h(s.containerClasses)},[b((u(),o("button",{class:h(["p-carousel-prev p-link",{"p-disabled":s.backwardIsDisabled}]),disabled:s.backwardIsDisabled,onClick:t[0]||(t[0]=(...r)=>s.navBackward&&s.navBackward(...r)),type:"button"},[c("span",{class:h(["p-carousel-prev-icon pi",{"pi-chevron-left":!s.isVertical(),"pi-chevron-up":s.isVertical()}])},null,2)],10,A)),[[d]]),c("div",{class:"p-carousel-items-content",style:S([{height:s.isVertical()?i.verticalViewPortHeight:"auto"}]),onTouchend:t[2]||(t[2]=(...r)=>s.onTouchEnd&&s.onTouchEnd(...r)),onTouchstart:t[3]||(t[3]=(...r)=>s.onTouchStart&&s.onTouchStart(...r)),onTouchmove:t[4]||(t[4]=(...r)=>s.onTouchMove&&s.onTouchMove(...r))},[c("div",{ref:"itemsContainer",class:"p-carousel-items-container",onTransitionend:t[1]||(t[1]=(...r)=>s.onTransitionEnd&&s.onTransitionEnd(...r))},[s.isCircular()?(u(!0),o(f,{key:0},v(i.value.slice(-1*n.d_numVisible),(r,a)=>(u(),o("div",{key:a+"_scloned",class:h(["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":n.totalShiftedItems*-1===i.value.length+n.d_numVisible,"p-carousel-item-start":a===0,"p-carousel-item-end":i.value.slice(-1*n.d_numVisible).length-1===a}])},[m(e.$slots,"item",{data:r,index:a})],2))),128)):p("",!0),(u(!0),o(f,null,v(i.value,(r,a)=>(u(),o("div",{key:a,class:h(["p-carousel-item",{"p-carousel-item-active":s.firstIndex()<=a&&s.lastIndex()>=a,"p-carousel-item-start":s.firstIndex()===a,"p-carousel-item-end":s.lastIndex()===a}])},[m(e.$slots,"item",{data:r,index:a})],2))),128)),s.isCircular()?(u(!0),o(f,{key:1},v(i.value.slice(0,n.d_numVisible),(r,a)=>(u(),o("div",{key:a+"_fcloned",class:h(["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":n.totalShiftedItems===0,"p-carousel-item-start":a===0,"p-carousel-item-end":i.value.slice(0,n.d_numVisible).length-1===a}])},[m(e.$slots,"item",{data:r,index:a})],2))),128)):p("",!0)],544)],36),b((u(),o("button",{class:h(["p-carousel-next p-link",{"p-disabled":s.forwardIsDisabled}]),disabled:s.forwardIsDisabled,onClick:t[5]||(t[5]=(...r)=>s.navForward&&s.navForward(...r)),type:"button"},[c("span",{class:h(["p-carousel-prev-icon pi",{"pi-chevron-right":!s.isVertical(),"pi-chevron-down":s.isVertical()}])},null,2)],10,D)),[[d]])],2),s.totalIndicators>=0?(u(),o("ul",{key:0,class:h(s.indicatorsContentClasses)},[(u(!0),o(f,null,v(s.totalIndicators,(r,a)=>(u(),o("li",{key:"p-carousel-indicator-"+a.toString(),class:h(["p-carousel-indicator",{"p-highlight":n.d_page===a}])},[c("button",{class:"p-link",onClick:g=>s.onIndicatorClick(g,a),type:"button"},null,8,R)],2))),128))],2)):p("",!0)],2),e.$slots.footer?(u(),o("div",L,[m(e.$slots,"footer")])):p("",!0)],10,k)}var E=C(w,[["render",N]]);export{E as default};
