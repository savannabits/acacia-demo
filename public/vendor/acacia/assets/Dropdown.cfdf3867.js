var H=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var x=(e,t,i)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,D=(e,t)=>{for(var i in t||(t={}))P.call(t,i)&&x(e,i,t[i]);if(k)for(var i of k(t))N.call(t,i)&&x(e,i,t[i]);return e};import{Z as C,O as c,X as b,a5 as _,a4 as F,c as o,f as p,l as g,p as f,k as u,n as U,e as G,w as S,T as A,K as W,r as q,E as j,o as a,q as v,t as y,J as Z,Q as J,P as K,F as m,m as w,C as M}from"./main.9e765f7d.js";import{O as Q}from"./overlayeventbus.esm.ef5cc0da.js";import{R as X}from"./ripple.esm.1fe20658.js";import{s as Y}from"./virtualscroller.esm.76cd2139.js";import{_ as $}from"./plugin-vue_export-helper.21dcd24c.js";const ee={name:"Dropdown",emits:["update:modelValue","before-show","before-hide","show","hide","change","filter","focus","blur"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,scrollHeight:{type:String,default:"200px"},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},editable:Boolean,placeholder:String,disabled:Boolean,dataKey:null,showClear:Boolean,inputId:String,tabindex:String,ariaLabelledBy:null,appendTo:{type:String,default:"body"},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},panelClass:null,loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner pi-spin"},virtualScrollerOptions:{type:Object,default:null}},data(){return{focused:!1,filterValue:null,overlayVisible:!1}},watch:{modelValue(){this.isModelValueChanged=!0}},outsideClickListener:null,scrollHandler:null,resizeListener:null,searchTimeout:null,currentSearchChar:null,previousSearchChar:null,searchValue:null,overlay:null,itemsWrapper:null,virtualScroller:null,isModelValueChanged:!1,updated(){this.overlayVisible&&this.isModelValueChanged&&this.scrollValueInView(),this.isModelValueChanged=!1},beforeUnmount(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.itemsWrapper=null,this.overlay&&(C.clear(this.overlay),this.overlay=null)},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?c.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?c.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?c.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.optionDisabled?c.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupRenderKey(e){return c.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return c.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return c.resolveFieldData(e,this.optionGroupChildren)},getSelectedOption(){let e=this.getSelectedOptionIndex();return e!==-1?this.optionGroupLabel?this.getOptionGroupChildren(this.visibleOptions[e.group])[e.option]:this.visibleOptions[e]:null},getSelectedOptionIndex(){if(this.modelValue!=null&&this.visibleOptions)if(this.optionGroupLabel)for(let e=0;e<this.visibleOptions.length;e++){let t=this.findOptionIndexInList(this.modelValue,this.getOptionGroupChildren(this.visibleOptions[e]));if(t!==-1)return{group:e,option:t}}else return this.findOptionIndexInList(this.modelValue,this.visibleOptions);return-1},findOptionIndexInList(e,t){for(let i=0;i<t.length;i++)if(c.equals(e,this.getOptionValue(t[i]),this.equalityKey))return i;return-1},isSelected(e){return c.equals(this.modelValue,this.getOptionValue(e),this.equalityKey)},show(){this.$emit("before-show"),this.overlayVisible=!0},hide(){this.$emit("before-hide"),this.overlayVisible=!1},onFocus(e){this.focused=!0,this.$emit("focus",e)},onBlur(e){this.focused=!1,this.$emit("blur",e)},onKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 32:this.overlayVisible||(this.show(),e.preventDefault());break;case 13:case 27:this.overlayVisible&&(this.hide(),e.preventDefault());break;case 9:this.hide();break;default:this.search(e);break}},onFilterKeyDown(e){switch(e.which){case 40:this.onDownKey(e);break;case 38:this.onUpKey(e);break;case 13:case 27:this.overlayVisible=!1,e.preventDefault();break}},onDownKey(e){if(this.visibleOptions)if(!this.overlayVisible&&e.altKey)this.show();else{let t=this.visibleOptions&&this.visibleOptions.length>0?this.findNextOption(this.getSelectedOptionIndex()):null;t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},onUpKey(e){if(this.visibleOptions){let t=this.findPrevOption(this.getSelectedOptionIndex());t&&this.updateModel(e,this.getOptionValue(t))}e.preventDefault()},findNextOption(e){if(this.optionGroupLabel){let t=e===-1?0:e.group,i=e===-1?-1:e.option,s=this.findNextOptionInList(this.getOptionGroupChildren(this.visibleOptions[t]),i);return s||(t+1!==this.visibleOptions.length?this.findNextOption({group:t+1,option:-1}):null)}else return this.findNextOptionInList(this.visibleOptions,e)},findNextOptionInList(e,t){let i=t+1;if(i===e.length)return null;let s=e[i];return this.isOptionDisabled(s)?this.findNextOptionInList(i):s},findPrevOption(e){if(e===-1)return null;if(this.optionGroupLabel){let t=e.group,i=e.option,s=this.findPrevOptionInList(this.getOptionGroupChildren(this.visibleOptions[t]),i);return s||(t>0?this.findPrevOption({group:t-1,option:this.getOptionGroupChildren(this.visibleOptions[t-1]).length}):null)}else return this.findPrevOptionInList(this.visibleOptions,e)},findPrevOptionInList(e,t){let i=t-1;if(i<0)return null;let s=e[i];return this.isOptionDisabled(s)?this.findPrevOption(i):s},onClearClick(e){this.updateModel(e,null)},onClick(e){this.disabled||this.loading||b.hasClass(e.target,"p-dropdown-clear-icon")||e.target.tagName==="INPUT"||(!this.overlay||!this.overlay.contains(e.target))&&(this.overlayVisible?this.hide():this.show(),this.$refs.focusInput.focus())},onOptionSelect(e,t){let i=this.getOptionValue(t);this.updateModel(e,i),this.$refs.focusInput.focus(),setTimeout(()=>{this.hide()},200)},onEditableInput(e){this.$emit("update:modelValue",e.target.value)},onOverlayEnter(e){if(C.set("overlay",e,this.$primevue.config.zIndex.overlay),this.alignOverlay(),this.scrollValueInView(),!this.virtualScrollerDisabled){const t=this.getSelectedOptionIndex();t!==-1&&setTimeout(()=>{this.virtualScroller&&this.virtualScroller.scrollToIndex(t)},0)}},onOverlayAfterEnter(){this.filter&&this.$refs.filterInput.focus(),this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.itemsWrapper=null,this.overlay=null},onOverlayAfterLeave(e){C.clear(e)},alignOverlay(){this.appendDisabled?b.relativePosition(this.overlay,this.$el):(this.overlay.style.minWidth=b.getOuterWidth(this.$el)+"px",b.absolutePosition(this.overlay,this.$el))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},bindOutsideClickListener(){this.outsideClickListener||(this.outsideClickListener=e=>{this.overlayVisible&&this.overlay&&!this.$el.contains(e.target)&&!this.overlay.contains(e.target)&&this.hide()},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener(){this.scrollHandler||(this.scrollHandler=new _(this.$refs.container,()=>{this.overlayVisible&&this.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener(){this.resizeListener||(this.resizeListener=()=>{this.overlayVisible&&!b.isTouchDevice()&&this.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},search(e){if(!this.visibleOptions)return;this.searchTimeout&&clearTimeout(this.searchTimeout);const t=e.key;if(this.previousSearchChar=this.currentSearchChar,this.currentSearchChar=t,this.previousSearchChar===this.currentSearchChar?this.searchValue=this.currentSearchChar:this.searchValue=this.searchValue?this.searchValue+t:t,this.searchValue){let i=this.getSelectedOptionIndex(),s=this.optionGroupLabel?this.searchOptionInGroup(i):this.searchOption(++i);s&&this.updateModel(e,this.getOptionValue(s))}this.searchTimeout=setTimeout(()=>{this.searchValue=null},250)},searchOption(e){let t;return this.searchValue&&(t=this.searchOptionInRange(e,this.visibleOptions.length),t||(t=this.searchOptionInRange(0,e))),t},searchOptionInRange(e,t){for(let i=e;i<t;i++){let s=this.visibleOptions[i];if(this.matchesSearchValue(s))return s}return null},searchOptionInGroup(e){let t=e===-1?{group:0,option:-1}:e;for(let i=t.group;i<this.visibleOptions.length;i++){let s=this.getOptionGroupChildren(this.visibleOptions[i]);for(let n=t.group===i?t.option+1:0;n<s.length;n++)if(this.matchesSearchValue(s[n]))return s[n]}for(let i=0;i<=t.group;i++){let s=this.getOptionGroupChildren(this.visibleOptions[i]);for(let n=0;n<(t.group===i?t.option:s.length);n++)if(this.matchesSearchValue(s[n]))return s[n]}return null},matchesSearchValue(e){return this.getOptionLabel(e).toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale))},onFilterChange(e){this.filterValue=e.target.value,this.$emit("filter",{originalEvent:e,value:e.target.value})},onFilterUpdated(){this.overlayVisible&&this.alignOverlay()},overlayRef(e){this.overlay=e},itemsWrapperRef(e){this.itemsWrapper=e},virtualScrollerRef(e){this.virtualScroller=e},scrollValueInView(){if(this.overlay){let e=b.findSingle(this.overlay,"li.p-highlight");e&&e.scrollIntoView({block:"nearest",inline:"start"})}},onOverlayClick(e){Q.emit("overlay-click",{originalEvent:e,target:this.$el})}},computed:{visibleOptions(){if(this.filterValue)if(this.optionGroupLabel){let e=[];for(let t of this.options){let i=F.filter(this.getOptionGroupChildren(t),this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);if(i&&i.length){let s=D({},t);s[this.optionGroupChildren]=i,e.push(s)}}return e}else return F.filter(this.options,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);else return this.options},containerClass(){return["p-dropdown p-component p-inputwrapper",{"p-disabled":this.disabled,"p-dropdown-clearable":this.showClear&&!this.disabled,"p-focus":this.focused,"p-inputwrapper-filled":this.modelValue,"p-inputwrapper-focus":this.focused||this.overlayVisible}]},labelClass(){return["p-dropdown-label p-inputtext",{"p-placeholder":this.label===this.placeholder,"p-dropdown-label-empty":!this.$slots.value&&(this.label==="p-emptylabel"||this.label.length===0)}]},panelStyleClass(){return["p-dropdown-panel p-component",this.panelClass,{"p-input-filled":this.$primevue.config.inputStyle==="filled","p-ripple-disabled":this.$primevue.config.ripple===!1}]},label(){let e=this.getSelectedOption();return e!==null?this.getOptionLabel(e):this.placeholder||"p-emptylabel"},editableInputValue(){let e=this.getSelectedOption();return e?this.getOptionLabel(e):this.modelValue},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptyFilterMessage},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},appendDisabled(){return this.appendTo==="self"},virtualScrollerDisabled(){return!this.virtualScrollerOptions},appendTarget(){return this.appendDisabled?null:this.appendTo},dropdownIconClass(){return["p-dropdown-trigger-icon",this.loading?this.loadingIcon:"pi pi-chevron-down"]}},directives:{ripple:X},components:{VirtualScroller:Y}},te={class:"p-hidden-accessible"},ie=["id","disabled","tabindex","aria-expanded","aria-labelledby"],le=["disabled","placeholder","value","aria-expanded"],se=["aria-expanded"],re={key:0,class:"p-dropdown-header"},ne={class:"p-dropdown-filter-container"},ae=["value","placeholder"],oe=p("span",{class:"p-dropdown-filter-icon pi pi-search"},null,-1),de=["onClick","aria-label","aria-selected"],he={class:"p-dropdown-item-group"},ue=["onClick","aria-label","aria-selected"],pe={key:2,class:"p-dropdown-empty-message"},ce={key:3,class:"p-dropdown-empty-message"};function fe(e,t,i,s,n,l){const T=q("VirtualScroller"),I=j("ripple");return a(),o("div",{ref:"container",class:f(l.containerClass),onClick:t[11]||(t[11]=r=>l.onClick(r))},[p("div",te,[p("input",{ref:"focusInput",type:"text",id:i.inputId,readonly:"",disabled:i.disabled,onFocus:t[0]||(t[0]=(...r)=>l.onFocus&&l.onFocus(...r)),onBlur:t[1]||(t[1]=(...r)=>l.onBlur&&l.onBlur(...r)),onKeydown:t[2]||(t[2]=(...r)=>l.onKeyDown&&l.onKeyDown(...r)),tabindex:i.tabindex,"aria-haspopup":"true","aria-expanded":n.overlayVisible,"aria-labelledby":i.ariaLabelledBy},null,40,ie)]),i.editable?(a(),o("input",{key:0,type:"text",class:"p-dropdown-label p-inputtext",disabled:i.disabled,onFocus:t[3]||(t[3]=(...r)=>l.onFocus&&l.onFocus(...r)),onBlur:t[4]||(t[4]=(...r)=>l.onBlur&&l.onBlur(...r)),placeholder:i.placeholder,value:l.editableInputValue,onInput:t[5]||(t[5]=(...r)=>l.onEditableInput&&l.onEditableInput(...r)),"aria-haspopup":"listbox","aria-expanded":n.overlayVisible},null,40,le)):g("",!0),i.editable?g("",!0):(a(),o("span",{key:1,class:f(l.labelClass)},[u(e.$slots,"value",{value:i.modelValue,placeholder:i.placeholder},()=>[v(y(l.label||"empty"),1)])],2)),i.showClear&&i.modelValue!=null?(a(),o("i",{key:2,class:"p-dropdown-clear-icon pi pi-times",onClick:t[6]||(t[6]=r=>l.onClearClick(r))})):g("",!0),p("div",{class:"p-dropdown-trigger",role:"button","aria-haspopup":"listbox","aria-expanded":n.overlayVisible},[u(e.$slots,"indicator",{},()=>[p("span",{class:f(l.dropdownIconClass)},null,2)])],8,se),(a(),U(W,{to:l.appendTarget,disabled:l.appendDisabled},[G(A,{name:"p-connected-overlay",onEnter:l.onOverlayEnter,onAfterEnter:l.onOverlayAfterEnter,onLeave:l.onOverlayLeave,onAfterLeave:l.onOverlayAfterLeave},{default:S(()=>[n.overlayVisible?(a(),o("div",{key:0,ref:l.overlayRef,class:f(l.panelStyleClass),onClick:t[10]||(t[10]=(...r)=>l.onOverlayClick&&l.onOverlayClick(...r))},[u(e.$slots,"header",{value:i.modelValue,options:l.visibleOptions}),i.filter?(a(),o("div",re,[p("div",ne,[p("input",{type:"text",ref:"filterInput",value:n.filterValue,onVnodeUpdated:t[7]||(t[7]=(...r)=>l.onFilterUpdated&&l.onFilterUpdated(...r)),autoComplete:"off",class:"p-dropdown-filter p-inputtext p-component",placeholder:i.filterPlaceholder,onKeydown:t[8]||(t[8]=(...r)=>l.onFilterKeyDown&&l.onFilterKeyDown(...r)),onInput:t[9]||(t[9]=(...r)=>l.onFilterChange&&l.onFilterChange(...r))},null,40,ae),oe])])):g("",!0),p("div",{ref:l.itemsWrapperRef,class:"p-dropdown-items-wrapper",style:K({"max-height":l.virtualScrollerDisabled?i.scrollHeight:""})},[G(T,Z({ref:l.virtualScrollerRef},i.virtualScrollerOptions,{items:l.visibleOptions,style:{height:i.scrollHeight},disabled:l.virtualScrollerDisabled}),J({content:S(({styleClass:r,contentRef:E,items:O,getItemOptions:L,contentStyle:R})=>[p("ul",{ref:E,class:f(["p-dropdown-items",r]),style:K(R),role:"listbox"},[i.optionGroupLabel?(a(!0),o(m,{key:1},w(O,(d,V)=>(a(),o(m,{key:l.getOptionGroupRenderKey(d)},[p("li",he,[u(e.$slots,"optiongroup",{option:d,index:l.getOptionIndex(V,L)},()=>[v(y(l.getOptionGroupLabel(d)),1)])]),(a(!0),o(m,null,w(l.getOptionGroupChildren(d),(h,B)=>M((a(),o("li",{class:f(["p-dropdown-item",{"p-highlight":l.isSelected(h),"p-disabled":l.isOptionDisabled(h)}]),key:l.getOptionRenderKey(h),onClick:z=>l.onOptionSelect(z,h),role:"option","aria-label":l.getOptionLabel(h),"aria-selected":l.isSelected(h)},[u(e.$slots,"option",{option:h,index:l.getOptionIndex(B,L)},()=>[v(y(l.getOptionLabel(h)),1)])],10,ue)),[[I]])),128))],64))),128)):(a(!0),o(m,{key:0},w(O,(d,V)=>M((a(),o("li",{class:f(["p-dropdown-item",{"p-highlight":l.isSelected(d),"p-disabled":l.isOptionDisabled(d)}]),key:l.getOptionRenderKey(d),onClick:h=>l.onOptionSelect(h,d),role:"option","aria-label":l.getOptionLabel(d),"aria-selected":l.isSelected(d)},[u(e.$slots,"option",{option:d,index:l.getOptionIndex(V,L)},()=>[v(y(l.getOptionLabel(d)),1)])],10,de)),[[I]])),128)),n.filterValue&&(!O||O&&O.length===0)?(a(),o("li",pe,[u(e.$slots,"emptyfilter",{},()=>[v(y(l.emptyFilterMessageText),1)])])):!i.options||i.options&&i.options.length===0?(a(),o("li",ce,[u(e.$slots,"empty",{},()=>[v(y(l.emptyMessageText),1)])])):g("",!0)],6)]),_:2},[e.$slots.loader?{name:"loader",fn:S(({options:r})=>[u(e.$slots,"loader",{options:r})])}:void 0]),1040,["items","style","disabled"])],4),u(e.$slots,"footer",{value:i.modelValue,options:l.visibleOptions})],2)):g("",!0)]),_:3},8,["onEnter","onAfterEnter","onLeave","onAfterLeave"])],8,["to","disabled"]))],2)}var Le=$(ee,[["render",fe]]);export{Le as default};