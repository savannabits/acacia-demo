var m=Object.defineProperty;var u=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var f=(e,t,l)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,o=(e,t)=>{for(var l in t||(t={}))K.call(t,l)&&f(e,l,t[l]);if(u)for(var l of u(t))g.call(t,l)&&f(e,l,t[l]);return e};import _ from"./TreeNode.8661a4c5.js";import{O as x,c as h,f as c,p as y,l as p,C as S,ah as k,F as M,m as N,P as C,r as T,o as r,n as v}from"./main.9e765f7d.js";import{_ as F}from"./plugin-vue_export-helper.21dcd24c.js";import"./ripple.esm.1fe20658.js";const V={name:"Tree",emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect"],props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:"pi pi-spinner"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},scrollHeight:{type:String,default:null}},data(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys(e){this.d_expandedKeys=e}},methods:{onNodeToggle(e){const t=e.key;this.d_expandedKeys[t]?(delete this.d_expandedKeys[t],this.$emit("node-collapse",e)):(this.d_expandedKeys[t]=!0,this.$emit("node-expand",e)),this.d_expandedKeys=o({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick(e){if(this.selectionMode!=null&&e.node.selectable!==!1){const l=(e.nodeTouched?!1:this.metaKeySelection)?this.handleSelectionWithMetaKey(e):this.handleSelectionWithoutMetaKey(e);this.$emit("update:selectionKeys",l)}},onCheckboxChange(e){this.$emit("update:selectionKeys",e.selectionKeys),e.check?this.$emit("node-select",e.node):this.$emit("node-unselect",e.node)},handleSelectionWithMetaKey(e){const t=e.originalEvent,l=e.node,s=t.metaKey||t.ctrlKey,n=this.isNodeSelected(l);let i;return n&&s?(this.isSingleSelectionMode()?i={}:(i=o({},this.selectionKeys),delete i[l.key]),this.$emit("node-unselect",l)):(this.isSingleSelectionMode()?i={}:this.isMultipleSelectionMode()&&(i=s?this.selectionKeys?o({},this.selectionKeys):{}:{}),i[l.key]=!0,this.$emit("node-select",l)),i},handleSelectionWithoutMetaKey(e){const t=e.node,l=this.isNodeSelected(t);let s;return this.isSingleSelectionMode()?l?(s={},this.$emit("node-unselect",t)):(s={},s[t.key]=!0,this.$emit("node-select",t)):l?(s=o({},this.selectionKeys),delete s[t.key],this.$emit("node-unselect",t)):(s=this.selectionKeys?o({},this.selectionKeys):{},s[t.key]=!0,this.$emit("node-select",t)),s},isSingleSelectionMode(){return this.selectionMode==="single"},isMultipleSelectionMode(){return this.selectionMode==="multiple"},isNodeSelected(e){return this.selectionMode&&this.selectionKeys?this.selectionKeys[e.key]===!0:!1},isChecked(e){return this.selectionKeys?this.selectionKeys[e.key]&&this.selectionKeys[e.key].checked:!1},isNodeLeaf(e){return e.leaf===!1?!1:!(e.children&&e.children.length)},onFilterKeydown(e){e.which===13&&e.preventDefault()},findFilteredNodes(e,t){if(e){let l=!1;if(e.children){let s=[...e.children];e.children=[];for(let n of s){let i=o({},n);this.isFilterMatched(i,t)&&(l=!0,e.children.push(i))}}if(l)return!0}},isFilterMatched(e,{searchFields:t,filterText:l,strict:s}){let n=!1;for(let i of t)String(x.resolveFieldData(e,i)).toLocaleLowerCase(this.filterLocale).indexOf(l)>-1&&(n=!0);return(!n||s&&!this.isNodeLeaf(e))&&(n=this.findFilteredNodes(e,{searchFields:t,filterText:l,strict:s})||n),n}},computed:{containerClass(){return["p-tree p-component",{"p-tree-selectable":this.selectionMode!=null,"p-tree-loading":this.loading,"p-tree-flex-scrollable":this.scrollHeight==="flex"}]},loadingIconClass(){return["p-tree-loading-icon pi-spin",this.loadingIcon]},filteredValue(){let e=[];const t=this.filterBy.split(","),l=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),s=this.filterMode==="strict";for(let n of this.value){let i=o({},n),d={searchFields:t,filterText:l,strict:s};(s&&(this.findFilteredNodes(i,d)||this.isFilterMatched(i,d))||!s&&(this.isFilterMatched(i,d)||this.findFilteredNodes(i,d)))&&e.push(i)}return e},valueToRender(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:_}},w={key:0,class:"p-tree-loading-overlay p-component-overlay"},L={key:1,class:"p-tree-filter-container"},b=["placeholder"],B=c("span",{class:"p-tree-filter-icon pi pi-search"},null,-1),W={class:"p-tree-container",role:"tree"};function H(e,t,l,s,n,i){const d=T("TreeNode");return r(),h("div",{class:y(i.containerClass)},[l.loading?(r(),h("div",w,[c("i",{class:y(i.loadingIconClass)},null,2)])):p("",!0),l.filter?(r(),h("div",L,[S(c("input",{type:"text",autocomplete:"off",class:"p-tree-filter p-inputtext p-component",placeholder:l.filterPlaceholder,onKeydown:t[0]||(t[0]=(...a)=>i.onFilterKeydown&&i.onFilterKeydown(...a)),"onUpdate:modelValue":t[1]||(t[1]=a=>n.filterValue=a)},null,40,b),[[k,n.filterValue]]),B])):p("",!0),c("div",{class:"p-tree-wrapper",style:C({maxHeight:l.scrollHeight})},[c("ul",W,[(r(!0),h(M,null,N(i.valueToRender,a=>(r(),v(d,{key:a.key,node:a,templates:e.$slots,expandedKeys:n.d_expandedKeys,onNodeToggle:i.onNodeToggle,onNodeClick:i.onNodeClick,selectionMode:l.selectionMode,selectionKeys:l.selectionKeys,onCheckboxChange:i.onCheckboxChange},null,8,["node","templates","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange"]))),128))])],4)],2)}var z=F(V,[["render",H]]);export{z as default};