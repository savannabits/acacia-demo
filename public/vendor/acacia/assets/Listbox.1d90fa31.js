var E=Object.defineProperty,j=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var L=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var F=(e,t,l)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,C=(e,t)=>{for(var l in t||(t={}))N.call(t,l)&&F(e,l,t[l]);if(L)for(var l of L(t))P.call(t,l)&&F(e,l,t[l]);return e},M=(e,t)=>j(e,B(t));import{aa as o,a5 as O,ac as k,i as u,q as h,k as f,M as x,af as z,s as T,j as A,a2 as U,w,V as H,an as G,r as J,O as Q,o as d,x as D,F as v,t as K,y as b,z as g}from"./vendor.05df324e.js";import{R as W}from"./ripple.esm.574b991d.js";import{s as X}from"./virtualscroller.esm.adfef9da.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";const Z={name:"Listbox",emits:["update:modelValue","change","filter"],props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,listStyle:null,disabled:Boolean,dataKey:null,multiple:Boolean,metaKeySelection:Boolean,filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},virtualScrollerOptions:{type:Object,default:null}},optionTouched:!1,virtualScroller:null,data(){return{filterValue:null}},methods:{getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t(e).index},getOptionLabel(e){return this.optionLabel?o.resolveFieldData(e,this.optionLabel):e},getOptionValue(e){return this.optionValue?o.resolveFieldData(e,this.optionValue):e},getOptionRenderKey(e){return this.dataKey?o.resolveFieldData(e,this.dataKey):this.getOptionLabel(e)},isOptionDisabled(e){return this.optionDisabled?o.resolveFieldData(e,this.optionDisabled):!1},getOptionGroupRenderKey(e){return o.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupLabel(e){return o.resolveFieldData(e,this.optionGroupLabel)},getOptionGroupChildren(e){return o.resolveFieldData(e,this.optionGroupChildren)},onOptionSelect(e,t){this.disabled||this.isOptionDisabled(t)||(this.multiple?this.onOptionSelectMultiple(e,t):this.onOptionSelectSingle(e,t),this.optionTouched=!1)},onOptionTouchEnd(){this.disabled||(this.optionTouched=!0)},onOptionSelectSingle(e,t){let l=this.isSelected(t),a=!1,s=null;if(this.optionTouched?!1:this.metaKeySelection){let c=e.metaKey||e.ctrlKey;l?c&&(s=null,a=!0):(s=this.getOptionValue(t),a=!0)}else s=l?null:this.getOptionValue(t),a=!0;a&&this.updateModel(e,s)},onOptionSelectMultiple(e,t){let l=this.isSelected(t),a=!1,s=null;if(this.optionTouched?!1:this.metaKeySelection){let c=e.metaKey||e.ctrlKey;l?(c?s=this.removeOption(t):s=[this.getOptionValue(t)],a=!0):(s=c?this.modelValue||[]:[],s=[...s,this.getOptionValue(t)],a=!0)}else l?s=this.removeOption(t):s=[...this.modelValue||[],this.getOptionValue(t)],a=!0;a&&this.updateModel(e,s)},isSelected(e){let t=!1,l=this.getOptionValue(e);if(this.multiple){if(this.modelValue){for(let a of this.modelValue)if(o.equals(a,l,this.equalityKey)){t=!0;break}}}else t=o.equals(this.modelValue,l,this.equalityKey);return t},removeOption(e){return this.modelValue.filter(t=>!o.equals(t,this.getOptionValue(e),this.equalityKey))},updateModel(e,t){this.$emit("update:modelValue",t),this.$emit("change",{originalEvent:e,value:t})},onOptionKeyDown(e,t){let l=e.currentTarget;switch(e.which){case 40:var a=this.findNextItem(l);a&&a.focus(),e.preventDefault();break;case 38:var s=this.findPrevItem(l);s&&s.focus(),e.preventDefault();break;case 13:this.onOptionSelect(e,t),e.preventDefault();break}},findNextItem(e){let t=e.nextElementSibling;return t?O.hasClass(t,"p-disabled")||O.hasClass(t,"p-listbox-item-group")?this.findNextItem(t):t:null},findPrevItem(e){let t=e.previousElementSibling;return t?O.hasClass(t,"p-disabled")||O.hasClass(t,"p-listbox-item-group")?this.findPrevItem(t):t:null},onFilterChange(e){this.$emit("filter",{originalEvent:e,value:e.target.value})},virtualScrollerRef(e){this.virtualScroller=e}},computed:{visibleOptions(){if(this.filterValue)if(this.optionGroupLabel){let e=[];for(let t of this.options){let l=k.filter(this.getOptionGroupChildren(t),this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale);l&&l.length&&e.push(M(C({},t),{items:l}))}return e}else return k.filter(this.options,this.searchFields,this.filterValue,"contains",this.filterLocale);else return this.options},equalityKey(){return this.optionValue?null:this.dataKey},searchFields(){return this.filterFields||[this.optionLabel]},emptyFilterMessageText(){return this.emptyFilterMessage||this.$primevue.config.locale.emptyFilterMessage},emptyMessageText(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage},virtualScrollerDisabled(){return!this.virtualScrollerOptions}},directives:{ripple:W},components:{VirtualScroller:X}},$={class:"p-listbox p-component"},ee={key:0,class:"p-listbox-header"},te={class:"p-listbox-filter-container"},le=["placeholder"],ie=f("span",{class:"p-listbox-filter-icon pi pi-search"},null,-1),se=["tabindex","onClick","onKeydown","aria-label","aria-selected"],ae={class:"p-listbox-item-group"},re=["tabindex","onClick","onKeydown","aria-label","aria-selected"],ne={key:2,class:"p-listbox-empty-message"},oe={key:3,class:"p-listbox-empty-message"};function ue(e,t,l,a,s,i){const c=J("VirtualScroller"),_=Q("ripple");return d(),u("div",$,[h(e.$slots,"header",{value:l.modelValue,options:i.visibleOptions}),l.filter?(d(),u("div",ee,[f("div",te,[x(f("input",{type:"text",class:"p-listbox-filter p-inputtext p-component","onUpdate:modelValue":t[0]||(t[0]=p=>s.filterValue=p),placeholder:l.filterPlaceholder,onInput:t[1]||(t[1]=(...p)=>i.onFilterChange&&i.onFilterChange(...p))},null,40,le),[[z,s.filterValue]]),ie])])):T("",!0),f("div",{class:"p-listbox-list-wrapper",style:G(l.listStyle)},[A(c,H({ref:i.virtualScrollerRef},l.virtualScrollerOptions,{style:l.listStyle,items:i.visibleOptions,disabled:i.virtualScrollerDisabled}),U({content:w(({styleClass:p,contentRef:I,items:m,getItemOptions:S,contentStyle:R})=>[f("ul",{ref:I,class:D(["p-listbox-list",p]),style:G(R),role:"listbox","aria-multiselectable":"multiple"},[l.optionGroupLabel?(d(!0),u(v,{key:1},K(m,(r,V)=>(d(),u(v,{key:i.getOptionGroupRenderKey(r)},[f("li",ae,[h(e.$slots,"optiongroup",{option:r,index:i.getOptionIndex(V,S)},()=>[b(g(i.getOptionGroupLabel(r)),1)])]),(d(!0),u(v,null,K(i.getOptionGroupChildren(r),(n,q)=>x((d(),u("li",{tabindex:i.isOptionDisabled(n)?null:"0",class:D(["p-listbox-item",{"p-highlight":i.isSelected(n),"p-disabled":i.isOptionDisabled(n)}]),key:i.getOptionRenderKey(n),onClick:y=>i.onOptionSelect(y,n),onTouchend:t[3]||(t[3]=y=>i.onOptionTouchEnd()),onKeydown:y=>i.onOptionKeyDown(y,n),role:"option","aria-label":i.getOptionLabel(n),"aria-selected":i.isSelected(n)},[h(e.$slots,"option",{option:n,index:i.getOptionIndex(q,S)},()=>[b(g(i.getOptionLabel(n)),1)])],42,re)),[[_]])),128))],64))),128)):(d(!0),u(v,{key:0},K(m,(r,V)=>x((d(),u("li",{tabindex:i.isOptionDisabled(r)?null:"0",class:D(["p-listbox-item",{"p-highlight":i.isSelected(r),"p-disabled":i.isOptionDisabled(r)}]),key:i.getOptionRenderKey(r),onClick:n=>i.onOptionSelect(n,r),onTouchend:t[2]||(t[2]=n=>i.onOptionTouchEnd()),onKeydown:n=>i.onOptionKeyDown(n,r),role:"option","aria-label":i.getOptionLabel(r),"aria-selected":i.isSelected(r)},[h(e.$slots,"option",{option:r,index:i.getOptionIndex(V,S)},()=>[b(g(i.getOptionLabel(r)),1)])],42,se)),[[_]])),128)),s.filterValue&&(!m||m&&m.length===0)?(d(),u("li",ne,[h(e.$slots,"emptyfilter",{},()=>[b(g(i.emptyFilterMessageText),1)])])):!l.options||l.options&&l.options.length===0?(d(),u("li",oe,[h(e.$slots,"empty",{},()=>[b(g(i.emptyMessageText),1)])])):T("",!0)],6)]),_:2},[e.$slots.loader?{name:"loader",fn:w(({options:p})=>[h(e.$slots,"loader",{options:p})])}:void 0]),1040,["style","items","disabled"])],4),h(e.$slots,"footer",{value:l.modelValue,options:i.visibleOptions})])}var me=Y(Z,[["render",ue]]);export{me as default};
