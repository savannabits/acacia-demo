var X=Object.defineProperty,Y=Object.defineProperties;var $=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable;var G=(t,e,i)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,K=(t,e)=>{for(var i in e||(e={}))ee.call(e,i)&&G(t,i,e[i]);if(N)for(var i of N(e))te.call(e,i)&&G(t,i,e[i]);return t},A=(t,e)=>Y(t,$(e));import{Z as B,O as g,X as c,a5 as le,U as ie,r as M,E as se,o,c as d,J as F,l as k,p as O,F as v,m as I,k as y,f as p,t as S,n as P,e as f,w as L,P as H,Q as ne,C as U,q as z,T as ae,K as oe,d as j,u as re,s as ue,j as q,b as de,g as m,x as pe,v as ce,M as he,a0 as me,h as R,i as fe}from"./main.9e765f7d.js";import{s as w}from"./button.esm.a5ac1061.js";import{s as W}from"./dialog.esm.20a296d3.js";import{O as ge}from"./overlayeventbus.esm.ef5cc0da.js";import{R as ye}from"./ripple.esm.1fe20658.js";import{s as ve}from"./virtualscroller.esm.76cd2139.js";import{s as Z}from"./inputswitch.esm.90fe6344.js";var _={name:"AutoComplete",inheritAttrs:!1,emits:["update:modelValue","item-select","item-unselect","dropdown-click","clear","complete"],props:{modelValue:null,suggestions:{type:Array,default:null},field:{type:[String,Function],default:null},optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},dropdown:{type:Boolean,default:!1},dropdownMode:{type:String,default:"blank"},autoHighlight:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},minLength:{type:Number,default:1},delay:{type:Number,default:300},appendTo:{type:String,default:"body"},forceSelection:{type:Boolean,default:!1},completeOnFocus:{type:Boolean,default:!1},inputClass:null,inputStyle:null,class:null,style:null,panelClass:null,virtualScrollerOptions:{type:Object,default:null}},timeout:null,outsideClickListener:null,resizeListener:null,scrollHandler:null,overlay:null,virtualScroller:null,data(){return{searching:!1,focused:!1,overlayVisible:!1,inputTextValue:null,highlightItem:null}},watch:{suggestions(){this.searching&&(this.suggestions&&this.suggestions.length?this.showOverlay():this.hideOverlay(),this.searching=!1)}},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(B.clear(this.overlay),this.overlay=null)},updated(){this.overlayVisible&&this.alignOverlay()},methods:{getOptionIndex(t,e){return this.virtualScrollerDisabled?t:e&&e(t).index},getOptionRenderKey(t){return this.getItemContent(t)},getOptionGroupRenderKey(t){return g.resolveFieldData(t,this.optionGroupLabel)},getOptionGroupLabel(t){return g.resolveFieldData(t,this.optionGroupLabel)},getOptionGroupChildren(t){return g.resolveFieldData(t,this.optionGroupChildren)},onOverlayEnter(t){B.set("overlay",t,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.autoHighlight&&this.suggestions&&this.suggestions.length&&c.addClass(this.list.firstElementChild,"p-highlight")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null},onOverlayAfterLeave(t){B.clear(t)},alignOverlay(){let t=this.multiple?this.$refs.multiContainer:this.$refs.input;this.appendDisabled?c.relativePosition(this.overlay,t):(this.overlay.style.minWidth=c.getOuterWidth(t)+"px",c.absolutePosition(this.overlay,t))},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=t=>{this.overlayVisible&&this.overlay&&this.isOutsideClicked(t)&&this.hideOverlay()},document.addEventListener("click",this.outsideClickListener))},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new le(this.$refs.container,()=>{this.overlayVisible&&this.hideOverlay()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&this.hideOverlay()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},isOutsideClicked(t){return!this.overlay.contains(t.target)&&!this.isInputClicked(t)&&!this.isDropdownClicked(t)},isInputClicked(t){return this.multiple?t.target===this.$refs.multiContainer||this.$refs.multiContainer.contains(t.target):t.target===this.$refs.input},isDropdownClicked(t){return this.$refs.dropdownButton?t.target===this.$refs.dropdownButton||this.$refs.dropdownButton.$el.contains(t.target):!1},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},selectItem(t,e){if(this.multiple){if(this.$refs.input.value="",this.inputTextValue="",!this.isSelected(e)){let i=this.modelValue?[...this.modelValue,e]:[e];this.$emit("update:modelValue",i)}}else this.$emit("update:modelValue",e);this.$emit("item-select",{originalEvent:t,value:e}),this.focus(),this.hideOverlay()},onMultiContainerClick(t){this.focus(),this.completeOnFocus&&this.search(t,"","click")},removeItem(t,e){let i=this.modelValue[e],r=this.modelValue.filter((a,l)=>e!==l);this.$emit("update:modelValue",r),this.$emit("item-unselect",{originalEvent:t,value:i})},onDropdownClick(t){this.focus();const e=this.$refs.input.value;this.dropdownMode==="blank"?this.search(t,"","dropdown"):this.dropdownMode==="current"&&this.search(t,e,"dropdown"),this.$emit("dropdown-click",{originalEvent:t,query:e})},getItemContent(t){return this.field?g.resolveFieldData(t,this.field):t},showOverlay(){this.overlayVisible=!0},hideOverlay(){this.overlayVisible=!1},focus(){this.$refs.input.focus()},search(t,e,i){e!=null&&(i==="input"&&e.trim().length===0||(this.searching=!0,this.$emit("complete",{originalEvent:t,query:e})))},onInputClicked(t){this.completeOnFocus&&this.search(t,"","click")},onInput(t){this.inputTextValue=t.target.value,this.timeout&&clearTimeout(this.timeout);let e=t.target.value;this.multiple||this.$emit("update:modelValue",e),e.length===0?(this.hideOverlay(),this.$emit("clear")):e.length>=this.minLength?this.timeout=setTimeout(()=>{this.search(t,e,"input")},this.delay):this.hideOverlay()},onFocus(){this.focused=!0},onBlur(){this.focused=!1},onKeyDown(t){if(this.overlayVisible){let e=c.findSingle(this.list,"li.p-highlight");switch(t.which){case 40:if(e){let i=this.findNextItem(e);i&&(c.addClass(i,"p-highlight"),c.removeClass(e,"p-highlight"),i.scrollIntoView({block:"nearest",inline:"start"}))}else e=this.list.firstElementChild,c.hasClass(e,"p-autocomplete-item-group")&&(e=this.findNextItem(e)),e&&c.addClass(e,"p-highlight");t.preventDefault();break;case 38:if(e){let i=this.findPrevItem(e);i&&(c.addClass(i,"p-highlight"),c.removeClass(e,"p-highlight"),i.scrollIntoView({block:"nearest",inline:"start"}))}t.preventDefault();break;case 13:e&&(this.selectHighlightItem(t,e),this.hideOverlay()),t.preventDefault();break;case 27:this.hideOverlay(),t.preventDefault();break;case 9:e&&this.selectHighlightItem(t,e),this.hideOverlay();break}}if(this.multiple)switch(t.which){case 8:if(this.modelValue&&this.modelValue.length&&!this.$refs.input.value){let e=this.modelValue[this.modelValue.length-1],i=this.modelValue.slice(0,-1);this.$emit("update:modelValue",i),this.$emit("item-unselect",{originalEvent:t,value:e})}break}},selectHighlightItem(t,e){if(this.optionGroupLabel){let i=this.suggestions[e.dataset.group];this.selectItem(t,this.getOptionGroupChildren(i)[e.dataset.index])}else this.selectItem(t,this.suggestions[e.dataset.index])},findNextItem(t){let e=t.nextElementSibling;return e?c.hasClass(e,"p-autocomplete-item-group")?this.findNextItem(e):e:null},findPrevItem(t){let e=t.previousElementSibling;return e?c.hasClass(e,"p-autocomplete-item-group")?this.findPrevItem(e):e:null},onChange(t){if(this.forceSelection){let e=!1,i=t.target.value.trim();if(this.suggestions)for(let r of this.suggestions){let a=this.field?g.resolveFieldData(r,this.field):r;if(a&&i===a.trim()){e=!0,this.selectItem(t,r);break}}e||(this.$refs.input.value="",this.inputTextValue="",this.$emit("clear"),this.multiple||this.$emit("update:modelValue",null))}},isSelected(t){let e=!1;if(this.modelValue&&this.modelValue.length){for(let i=0;i<this.modelValue.length;i++)if(g.equals(this.modelValue[i],t)){e=!0;break}}return e},overlayRef(t){this.overlay=t},listRef(t,e){this.list=t,e&&e(t)},virtualScrollerRef(t){this.virtualScroller=t},onOverlayClick(t){ge.emit("overlay-click",{originalEvent:t,target:this.$el})}},computed:{containerClass(){return["p-autocomplete p-component p-inputwrapper",this.class,{"p-autocomplete-dd":this.dropdown,"p-autocomplete-multiple":this.multiple,"p-inputwrapper-filled":this.modelValue||this.inputTextValue&&this.inputTextValue.length,"p-inputwrapper-focus":this.focused}]},inputFieldClass(){return["p-autocomplete-input p-inputtext p-component",this.inputClass,{"p-autocomplete-dd-input":this.dropdown,"p-disabled":this.$attrs.disabled}]},multiContainerClass(){return["p-autocomplete-multiple-container p-component p-inputtext",{"p-disabled":this.$attrs.disabled,"p-focus":this.focused}]},panelStyleClass(){return["p-autocomplete-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},inputValue(){if(this.modelValue)if(this.field&&typeof this.modelValue=="object"){const t=g.resolveFieldData(this.modelValue,this.field);return t!=null?t:this.modelValue}else return this.modelValue;else return""},listId(){return ie()+"_list"},appendDisabled(){return this.appendTo==="self"},appendTarget(){return this.appendDisabled?null:this.appendTo},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},components:{Button:w,VirtualScroller:ve},directives:{ripple:ye}};const be=["aria-owns","aria-expanded"],Ce=["value","aria-controls"],xe={class:"p-autocomplete-token-label"},ke=["onClick"],we={class:"p-autocomplete-input-token"},Ve=["aria-controls"],Oe={key:2,class:"p-autocomplete-loader pi pi-spinner pi-spin"},Ie=["id"],Se=["onClick","data-index"],Le={class:"p-autocomplete-item-group"},De=["onClick","data-group","data-index"];function Ee(t,e,i,r,a,l){const D=M("Button"),E=M("VirtualScroller"),V=se("ripple");return o(),d("span",{ref:"container",class:O(l.containerClass),"aria-haspopup":"listbox","aria-owns":l.listId,"aria-expanded":a.overlayVisible,style:H(i.style)},[i.multiple?k("",!0):(o(),d("input",F({key:0,ref:"input",class:l.inputFieldClass,style:i.inputStyle},t.$attrs,{value:l.inputValue,onClick:e[0]||(e[0]=(...s)=>l.onInputClicked&&l.onInputClicked(...s)),onInput:e[1]||(e[1]=(...s)=>l.onInput&&l.onInput(...s)),onFocus:e[2]||(e[2]=(...s)=>l.onFocus&&l.onFocus(...s)),onBlur:e[3]||(e[3]=(...s)=>l.onBlur&&l.onBlur(...s)),onKeydown:e[4]||(e[4]=(...s)=>l.onKeyDown&&l.onKeyDown(...s)),onChange:e[5]||(e[5]=(...s)=>l.onChange&&l.onChange(...s)),type:"text",autoComplete:"off",role:"searchbox","aria-autocomplete":"list","aria-controls":l.listId}),null,16,Ce)),i.multiple?(o(),d("ul",{key:1,ref:"multiContainer",class:O(l.multiContainerClass),onClick:e[11]||(e[11]=(...s)=>l.onMultiContainerClick&&l.onMultiContainerClick(...s))},[(o(!0),d(v,null,I(i.modelValue,(s,n)=>(o(),d("li",{key:n,class:"p-autocomplete-token"},[y(t.$slots,"chip",{value:s},()=>[p("span",xe,S(l.getItemContent(s)),1)]),p("span",{class:"p-autocomplete-token-icon pi pi-times-circle",onClick:u=>l.removeItem(u,n)},null,8,ke)]))),128)),p("li",we,[p("input",F({ref:"input",type:"text",autoComplete:"off"},t.$attrs,{onInput:e[6]||(e[6]=(...s)=>l.onInput&&l.onInput(...s)),onFocus:e[7]||(e[7]=(...s)=>l.onFocus&&l.onFocus(...s)),onBlur:e[8]||(e[8]=(...s)=>l.onBlur&&l.onBlur(...s)),onKeydown:e[9]||(e[9]=(...s)=>l.onKeyDown&&l.onKeyDown(...s)),onChange:e[10]||(e[10]=(...s)=>l.onChange&&l.onChange(...s)),role:"searchbox","aria-autocomplete":"list","aria-controls":l.listId}),null,16,Ve)])],2)):k("",!0),a.searching?(o(),d("i",Oe)):k("",!0),i.dropdown?(o(),P(D,{key:3,ref:"dropdownButton",type:"button",icon:"pi pi-chevron-down",class:"p-autocomplete-dropdown",disabled:t.$attrs.disabled,onClick:l.onDropdownClick},null,8,["disabled","onClick"])):k("",!0),(o(),P(oe,{to:l.appendTarget,disabled:l.appendDisabled},[f(ae,{name:"p-connected-overlay",onEnter:l.onOverlayEnter,onLeave:l.onOverlayLeave,onAfterLeave:l.onOverlayAfterLeave},{default:L(()=>[a.overlayVisible?(o(),d("div",{key:0,ref:l.overlayRef,class:O(l.panelStyleClass),style:H({"max-height":l.virtualScrollerDisabled?i.scrollHeight:""}),onClick:e[12]||(e[12]=(...s)=>l.onOverlayClick&&l.onOverlayClick(...s))},[y(t.$slots,"header",{value:i.modelValue,suggestions:i.suggestions}),f(E,F({ref:l.virtualScrollerRef},i.virtualScrollerOptions,{style:{height:i.scrollHeight},items:i.suggestions,disabled:l.virtualScrollerDisabled}),ne({content:L(({styleClass:s,contentRef:n,items:u,getItemOptions:b,contentStyle:J})=>[p("ul",{id:l.listId,ref:h=>l.listRef(h,n),class:O(["p-autocomplete-items",s]),style:H(J),role:"listbox"},[i.optionGroupLabel?(o(!0),d(v,{key:1},I(u,(h,C)=>(o(),d(v,{key:l.getOptionGroupRenderKey(h)},[p("li",Le,[y(t.$slots,"optiongroup",{item:h,index:l.getOptionIndex(C,b)},()=>[z(S(l.getOptionGroupLabel(h)),1)])]),(o(!0),d(v,null,I(l.getOptionGroupChildren(h),(x,T)=>U((o(),d("li",{class:"p-autocomplete-item",key:T,onClick:Q=>l.selectItem(Q,x),role:"option","data-group":C,"data-index":l.getOptionIndex(T,b)},[y(t.$slots,"item",{item:x,index:l.getOptionIndex(T,b)},()=>[z(S(l.getItemContent(x)),1)])],8,De)),[[V]])),128))],64))),128)):(o(!0),d(v,{key:0},I(u,(h,C)=>U((o(),d("li",{class:"p-autocomplete-item",key:l.getOptionRenderKey(h),onClick:x=>l.selectItem(x,h),role:"option","data-index":l.getOptionIndex(C,b)},[y(t.$slots,"item",{item:h,index:l.getOptionIndex(C,b)},()=>[z(S(l.getItemContent(h)),1)])],8,Se)),[[V]])),128))],14,Ie)]),_:2},[t.$slots.loader?{name:"loader",fn:L(({options:s})=>[y(t.$slots,"loader",{options:s})])}:void 0]),1040,["style","items","disabled"]),y(t.$slots,"footer",{value:i.modelValue,suggestions:i.suggestions})],6)):k("",!0)]),_:3},8,["onEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],14,be)}function Te(t,e){e===void 0&&(e={});var i=e.insertAt;if(!(!t||typeof document=="undefined")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",i==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=t:a.appendChild(document.createTextNode(t))}}var Be=`
.p-autocomplete {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    position: relative;
}
.p-autocomplete-loader {
    position: absolute;
    top: 50%;
    margin-top: -.5rem;
}
.p-autocomplete-dd .p-autocomplete-input {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    width: 1%;
}
.p-autocomplete-dd .p-autocomplete-input,
.p-autocomplete-dd .p-autocomplete-multiple-container {
     border-top-right-radius: 0;
     border-bottom-right-radius: 0;
}
.p-autocomplete-dd .p-autocomplete-dropdown {
     border-top-left-radius: 0;
     border-bottom-left-radius: 0px;
}
.p-autocomplete .p-autocomplete-panel {
    min-width: 100%;
}
.p-autocomplete-panel {
    position: absolute;
    overflow: auto;
    top: 0;
    left: 0;
}
.p-autocomplete-items {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
.p-autocomplete-item {
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
}
.p-autocomplete-multiple-container {
    margin: 0;
    padding: 0;
    list-style-type: none;
    cursor: text;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
}
.p-autocomplete-token {
    cursor: default;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-flex: 0;
        -ms-flex: 0 0 auto;
            flex: 0 0 auto;
}
.p-autocomplete-token-icon {
    cursor: pointer;
}
.p-autocomplete-input-token {
    -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
            flex: 1 1 auto;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-autocomplete-input-token input {
    border: 0 none;
    outline: 0 none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    -webkit-box-shadow: none;
            box-shadow: none;
    border-radius: 0;
    width: 100%;
}
.p-fluid .p-autocomplete {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
.p-fluid .p-autocomplete-dd .p-autocomplete-input {
    width: 1%;
}
`;Te(Be);_.render=Ee;const Fe={class:"gap-x-2 flex flex-wrap"},He=["onSubmit"],ze={class:"p-dialog-content"},Re={class:"my-2"},_e=p("label",null,"Select Table",-1),Ne={class:"my-2 flex items-center flex-wrap gap-x-2"},Ge=p("label",null,"Recreate if Exists",-1),Ke={class:"p-dialog-footer border-t-2"},Ae=j({name:"SchematicsCreate",components:{Button:w,Dialog:W,AutoComplete:_,InputSwitch:Z}}),Qe=j(A(K({},Ae),{setup(t){const e=re({existingTable:!1,table:null,recreate:!1}),i=ue(()=>{var s,n;return(n=(s=pe().props)==null?void 0:s.value)==null?void 0:n.flash}),r=q([]),a=q(!1),l=de(),D=async()=>{e.existingTable=!0,await he(),a.value=!a.value},E=async s=>{me.get(R("api.acacia.g-panel.tables.search",{q:s.query.trim()})).then(n=>{r.value=n.data})},V=async()=>{e.post(R("acacia.g-panel.acacia-schematics.store"),{onSuccess:s=>{var n;l.add({severity:"success",summary:"Success",detail:(n=s.props.flash)==null?void 0:n.success,life:3e3}),a.value=!1},onError:s=>{l.add({severity:"error",summary:"Error",detail:s==null?void 0:s.message,life:3e3})},onFinish:s=>{var u;const n=(u=i.value)==null?void 0:u.payload;n&&setTimeout(()=>{fe.Inertia.visit(R("acacia.g-panel.acacia-schematics.edit",n.id))},500)}})};return(s,n)=>(o(),d(v,null,[p("div",Fe,[f(m(w),{icon:"pi pi-plus",onClick:D,label:"From Existing Table"}),f(m(w),{icon:"pi pi-plus",label:"From Scratch",disabled:!0})]),f(m(W),{modal:!0,visible:a.value,"onUpdate:visible":n[3]||(n[3]=u=>a.value=u),header:"Create Module",class:"w-full max-w-[600px]"},{default:L(()=>[p("form",{onSubmit:ce(V,["prevent"])},[p("div",ze,[p("div",Re,[_e,f(m(_),{class:"block w-full",autoHighlight:!0,modelValue:m(e).table,"onUpdate:modelValue":n[0]||(n[0]=u=>m(e).table=u),suggestions:r.value,onComplete:n[1]||(n[1]=u=>E(u)),dropdown:!0,field:"name",forceSelection:""},null,8,["modelValue","suggestions"])]),p("div",Ne,[Ge,f(m(Z),{class:"block",modelValue:m(e).recreate,"onUpdate:modelValue":n[2]||(n[2]=u=>m(e).recreate=u)},null,8,["modelValue"])])]),p("div",Ke,[f(m(w),{type:"submit",icon:"pi pi-plus",label:"Next"})])],40,He)]),_:1},8,["visible"])],64))}}));export{Qe as default};
