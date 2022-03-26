import{a5 as n,aa as g,i as p,F as d,t as m,x as c,o as h,v as z,Q as S,an as f,s as v,k as P}from"./vendor.05df324e.js";import{_ as E}from"./plugin-vue_export-helper.21dcd24c.js";const x={name:"Splitter",emits:["resizeend"],props:{layout:{type:String,default:"horizontal"},gutterSize:{type:Number,default:4},stateKey:{type:String,default:null},stateStorage:{type:String,default:"session"}},dragging:!1,mouseMoveListener:null,mouseUpListener:null,size:null,gutterElement:null,startPos:null,prevPanelElement:null,nextPanelElement:null,nextPanelSize:null,prevPanelSize:null,panelSizes:null,prevPanelIndex:null,mounted(){if(this.panels&&this.panels.length){let e=!1;if(this.isStateful()&&(e=this.restoreState()),!e){let t=[...this.$el.children].filter(s=>n.hasClass(s,"p-splitter-panel")),i=[];this.panels.map((s,o)=>{let u=(s.props&&s.props.size?s.props.size:null)||100/this.panels.length;i[o]=u,t[o].style.flexBasis="calc("+u+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),this.panelSizes=i}}},beforeUnmount(){this.clear(),this.unbindMouseListeners()},methods:{isSplitterPanel(e){return e.type.name==="SplitterPanel"},onResizeStart(e,t){this.gutterElement=e.currentTarget,this.size=this.horizontal?n.getWidth(this.$el):n.getHeight(this.$el),this.dragging=!0,this.startPos=this.layout==="horizontal"?e.pageX:e.pageY,this.prevPanelElement=this.gutterElement.previousElementSibling,this.nextPanelElement=this.gutterElement.nextElementSibling,this.prevPanelSize=100*(this.horizontal?n.getOuterWidth(this.prevPanelElement,!0):n.getOuterHeight(this.prevPanelElement,!0))/this.size,this.nextPanelSize=100*(this.horizontal?n.getOuterWidth(this.nextPanelElement,!0):n.getOuterHeight(this.nextPanelElement,!0))/this.size,this.prevPanelIndex=t,n.addClass(this.gutterElement,"p-splitter-gutter-resizing"),n.addClass(this.$el,"p-splitter-resizing")},onResize(e){let t;this.horizontal?t=e.pageX*100/this.size-this.startPos*100/this.size:t=e.pageY*100/this.size-this.startPos*100/this.size;let i=this.prevPanelSize+t,s=this.nextPanelSize-t;this.validateResize(i,s)&&(this.prevPanelElement.style.flexBasis="calc("+i+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.nextPanelElement.style.flexBasis="calc("+s+"% - "+(this.panels.length-1)*this.gutterSize+"px)",this.panelSizes[this.prevPanelIndex]=i,this.panelSizes[this.prevPanelIndex+1]=s)},onResizeEnd(e){this.isStateful()&&this.saveState(),this.$emit("resizeend",{originalEvent:e,sizes:this.panelSizes}),n.removeClass(this.gutterElement,"p-splitter-gutter-resizing"),n.removeClass(this.$el,"p-splitter-resizing"),this.clear()},onGutterMouseDown(e,t){this.onResizeStart(e,t),this.bindMouseListeners()},onGutterTouchStart(e,t){this.onResizeStart(e,t),e.preventDefault()},onGutterTouchMove(e){this.onResize(e),e.preventDefault()},onGutterTouchEnd(e){this.onResizeEnd(e),e.preventDefault()},bindMouseListeners(){this.mouseMoveListener||(this.mouseMoveListener=e=>this.onResize(e),document.addEventListener("mousemove",this.mouseMoveListener)),this.mouseUpListener||(this.mouseUpListener=e=>{this.onResizeEnd(e),this.unbindMouseListeners()},document.addEventListener("mouseup",this.mouseUpListener))},validateResize(e,t){let i=g.getVNodeProp(this.panels[0],"minSize");if(this.panels[0].props&&i&&i>e)return!1;let s=g.getVNodeProp(this.panels[1],"minSize");return!(this.panels[1].props&&s&&s>t)},unbindMouseListeners(){this.mouseMoveListener&&(document.removeEventListener("mousemove",this.mouseMoveListener),this.mouseMoveListener=null),this.mouseUpListener&&(document.removeEventListener("mouseup",this.mouseUpListener),this.mouseUpListener=null)},clear(){this.dragging=!1,this.size=null,this.startPos=null,this.prevPanelElement=null,this.nextPanelElement=null,this.prevPanelSize=null,this.nextPanelSize=null,this.gutterElement=null,this.prevPanelIndex=null},isStateful(){return this.stateKey!=null},getStorage(){switch(this.stateStorage){case"local":return window.localStorage;case"session":return window.sessionStorage;default:throw new Error(this.stateStorage+' is not a valid value for the state storage, supported values are "local" and "session".')}},saveState(){this.getStorage().setItem(this.stateKey,JSON.stringify(this.panelSizes))},restoreState(){const t=this.getStorage().getItem(this.stateKey);return t?(this.panelSizes=JSON.parse(t),[...this.$el.children].filter(s=>n.hasClass(s,"p-splitter-panel")).forEach((s,o)=>{s.style.flexBasis="calc("+this.panelSizes[o]+"% - "+(this.panels.length-1)*this.gutterSize+"px)"}),!0):!1}},computed:{containerClass(){return["p-splitter p-component","p-splitter-"+this.layout]},panels(){const e=[];return this.$slots.default().forEach(t=>{this.isSplitterPanel(t)?e.push(t):t.children.length instanceof Array&&t.children.forEach(i=>{this.isSplitterPanel(i)&&e.push(i)})}),e},gutterStyle(){return this.horizontal?{width:this.gutterSize+"px"}:{height:this.gutterSize+"px"}},horizontal(){return this.layout==="horizontal"}}},y=["onMousedown","onTouchstart","onTouchmove","onTouchend"],L=P("div",{class:"p-splitter-gutter-handle"},null,-1),_=[L];function M(e,t,i,s,o,l){return h(),p("div",{class:c(l.containerClass)},[(h(!0),p(d,null,m(l.panels,(u,a)=>(h(),p(d,{key:a},[(h(),z(S(u))),a!==l.panels.length-1?(h(),p("div",{key:0,class:"p-splitter-gutter",style:f(l.gutterStyle),onMousedown:r=>l.onGutterMouseDown(r,a),onTouchstart:r=>l.onGutterTouchStart(r,a),onTouchmove:r=>l.onGutterTouchMove(r,a),onTouchend:r=>l.onGutterTouchEnd(r,a)},_,44,y)):v("",!0)],64))),128))],2)}var R=E(x,[["render",M]]);export{R as default};
