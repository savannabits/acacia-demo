import{s as T}from"./button.esm.a5ac1061.js";import{O as m,X as g,U as w,c as p,f as v,k as h,e as d,l as b,w as y,P as I,I as L,p as k,r as D,E,o as f,F as _,m as V,C as S}from"./main.9e765f7d.js";import{R as $}from"./ripple.esm.1fe20658.js";import{_ as K}from"./plugin-vue_export-helper.21dcd24c.js";const x={name:"PickList",emits:["update:modelValue","reorder","update:selection","selection-change","move-to-target","move-to-source","move-all-to-target","move-all-to-source"],props:{modelValue:{type:Array,default:()=>[[],[]]},selection:{type:Array,default:()=>[[],[]]},dataKey:{type:String,default:null},listStyle:{type:null,default:null},metaKeySelection:{type:Boolean,default:!0},responsive:{type:Boolean,default:!0},breakpoint:{type:String,default:"960px"},stripedRows:{type:Boolean,default:!1}},itemTouched:!1,reorderDirection:null,styleElement:null,data(){return{d_selection:this.selection}},updated(){this.reorderDirection&&(this.updateListScroll(this.$refs.sourceList.$el),this.updateListScroll(this.$refs.targetList.$el),this.reorderDirection=null)},beforeUnmount(){this.destroyStyle()},mounted(){this.responsive&&this.createStyle()},watch:{selection(t){this.d_selection=t}},methods:{getItemKey(t,e){return this.dataKey?m.resolveFieldData(t,this.dataKey):e},isSelected(t,e){return m.findIndexInList(t,this.d_selection[e])!=-1},moveUp(t,e){if(this.d_selection&&this.d_selection[e]){let l=[...this.modelValue[e]],o=this.d_selection[e];for(let i=0;i<o.length;i++){let r=o[i],a=m.findIndexInList(r,l);if(a!==0){let s=l[a],u=l[a-1];l[a-1]=s,l[a]=u}else break}let n=[...this.modelValue];n[e]=l,this.reorderDirection="up",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection,listIndex:e})}},moveTop(t,e){if(this.d_selection){let l=[...this.modelValue[e]],o=this.d_selection[e];for(let i=0;i<o.length;i++){let r=o[i],a=m.findIndexInList(r,l);if(a!==0){let s=l.splice(a,1)[0];l.unshift(s)}else break}let n=[...this.modelValue];n[e]=l,this.reorderDirection="top",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection,listIndex:e})}},moveDown(t,e){if(this.d_selection){let l=[...this.modelValue[e]],o=this.d_selection[e];for(let i=o.length-1;i>=0;i--){let r=o[i],a=m.findIndexInList(r,l);if(a!==l.length-1){let s=l[a],u=l[a+1];l[a+1]=s,l[a]=u}else break}let n=[...this.modelValue];n[e]=l,this.reorderDirection="down",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection,listIndex:e})}},moveBottom(t,e){if(this.d_selection){let l=[...this.modelValue[e]],o=this.d_selection[e];for(let i=o.length-1;i>=0;i--){let r=o[i],a=m.findIndexInList(r,l);if(a!==l.length-1){let s=l.splice(a,1)[0];l.push(s)}else break}let n=[...this.modelValue];n[e]=l,this.reorderDirection="bottom",this.$emit("update:modelValue",n),this.$emit("reorder",{originalEvent:t,value:n,direction:this.reorderDirection,listIndex:e})}},moveToTarget(t){let e=this.d_selection&&this.d_selection[0]?this.d_selection[0]:null,l=[...this.modelValue[0]],o=[...this.modelValue[1]];if(e){for(let i=0;i<e.length;i++){let r=e[i];m.findIndexInList(r,o)==-1&&o.push(l.splice(m.findIndexInList(r,l),1)[0])}let n=[...this.modelValue];n[0]=l,n[1]=o,this.$emit("update:modelValue",n),this.$emit("move-to-target",{originalEvent:t,items:e}),this.d_selection[0]=[],this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})}},moveAllToTarget(t){if(this.modelValue[0]){let e=[...this.modelValue[0]],l=[...this.modelValue[1]];this.$emit("move-all-to-target",{originalEvent:t,items:e}),l=[...l,...e],e=[];let o=[...this.modelValue];o[0]=e,o[1]=l,this.$emit("update:modelValue",o),this.d_selection[0]=[],this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})}},moveToSource(t){let e=this.d_selection&&this.d_selection[1]?this.d_selection[1]:null,l=[...this.modelValue[0]],o=[...this.modelValue[1]];if(e){for(let i=0;i<e.length;i++){let r=e[i];m.findIndexInList(r,l)==-1&&l.push(o.splice(m.findIndexInList(r,o),1)[0])}let n=[...this.modelValue];n[0]=l,n[1]=o,this.$emit("update:modelValue",n),this.$emit("move-to-source",{originalEvent:t,items:e}),this.d_selection[1]=[],this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})}},moveAllToSource(t){if(this.modelValue[1]){let e=[...this.modelValue[0]],l=[...this.modelValue[1]];this.$emit("move-all-to-source",{originalEvent:t,items:l}),e=[...e,...l],l=[];let o=[...this.modelValue];o[0]=e,o[1]=l,this.$emit("update:modelValue",o),this.d_selection[1]=[],this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})}},onItemClick(t,e,l){this.itemTouched=!1;const o=this.d_selection[l],n=m.findIndexInList(e,o),i=n!=-1,r=this.itemTouched?!1:this.metaKeySelection;let a;if(r){let u=t.metaKey||t.ctrlKey;i&&u?a=o.filter((c,C)=>C!==n):(a=u?o?[...o]:[]:[],a.push(e))}else i?a=o.filter((u,c)=>c!==n):(a=o?[...o]:[],a.push(e));let s=[...this.d_selection];s[l]=a,this.d_selection=s,this.$emit("update:selection",this.d_selection),this.$emit("selection-change",{originalEvent:t,value:this.d_selection})},onItemDblClick(t,e,l){l===0?this.moveToTarget(t):l===1&&this.moveToSource(t)},onItemTouchEnd(){this.itemTouched=!0},onItemKeyDown(t,e,l){let o=t.currentTarget;switch(t.which){case 40:var n=this.findNextItem(o);n&&n.focus(),t.preventDefault();break;case 38:var i=this.findPrevItem(o);i&&i.focus(),t.preventDefault();break;case 13:this.onItemClick(t,e,l),t.preventDefault();break}},findNextItem(t){let e=t.nextElementSibling;return e?g.hasClass(e,"p-picklist-item")?e:this.findNextItem(e):null},findPrevItem(t){let e=t.previousElementSibling;return e?g.hasClass(e,"p-picklist-item")?e:this.findPrevItem(e):null},updateListScroll(t){const e=g.find(t,".p-picklist-item.p-highlight");if(e&&e.length)switch(this.reorderDirection){case"up":g.scrollInView(t,e[0]);break;case"top":t.scrollTop=0;break;case"down":g.scrollInView(t,e[e.length-1]);break;case"bottom":t.scrollTop=t.scrollHeight;break}},createStyle(){if(!this.styleElement){this.$el.setAttribute(this.attributeSelector,""),this.styleElement=document.createElement("style"),this.styleElement.type="text/css",document.head.appendChild(this.styleElement);let t=`
@media screen and (max-width: ${this.breakpoint}) {
    .p-picklist[${this.attributeSelector}] {
        flex-direction: column;
    }

    .p-picklist[${this.attributeSelector}] .p-picklist-buttons {
        padding: var(--content-padding);
        flex-direction: row;
    }

    .p-picklist[${this.attributeSelector}] .p-picklist-buttons .p-button {
        margin-right: var(--inline-spacing);
        margin-bottom: 0;
    }

    .p-picklist[${this.attributeSelector}] .p-picklist-buttons .p-button:last-child {
        margin-right: 0;
    }

    .p-picklist[${this.attributeSelector}] .pi-angle-right:before {
        content: "\\e930"
    }

    .p-picklist[${this.attributeSelector}] .pi-angle-double-right:before {
        content: "\\e92c"
    }

    .p-picklist[${this.attributeSelector}] .pi-angle-left:before {
        content: "\\e933"
    }

    .p-picklist[${this.attributeSelector}] .pi-angle-double-left:before {
        content: "\\e92f"
    }
}
`;this.styleElement.innerHTML=t}},destroyStyle(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{containerClass(){return["p-picklist p-component",{"p-picklist-striped":this.stripedRows}]},sourceList(){return this.modelValue&&this.modelValue[0]?this.modelValue[0]:null},targetList(){return this.modelValue&&this.modelValue[1]?this.modelValue[1]:null},attributeSelector(){return w()}},components:{PLButton:T},directives:{ripple:$}},B={class:"p-picklist-buttons p-picklist-source-controls"},P={class:"p-picklist-list-wrapper p-picklist-source-wrapper"},A={key:0,class:"p-picklist-header"},U=["onClick","onDblclick","onKeydown","aria-selected"],N={class:"p-picklist-buttons p-picklist-transfer-buttons"},H={class:"p-picklist-list-wrapper p-picklist-target-wrapper"},R={key:0,class:"p-picklist-header"},F=["onClick","onDblclick","onKeydown","aria-selected"],z={class:"p-picklist-buttons p-picklist-target-controls"};function M(t,e,l,o,n,i){const r=D("PLButton"),a=E("ripple");return f(),p("div",{class:k(i.containerClass)},[v("div",B,[h(t.$slots,"sourcecontrolsstart"),d(r,{type:"button",icon:"pi pi-angle-up",onClick:e[0]||(e[0]=s=>i.moveUp(s,0))}),d(r,{type:"button",icon:"pi pi-angle-double-up",onClick:e[1]||(e[1]=s=>i.moveTop(s,0))}),d(r,{type:"button",icon:"pi pi-angle-down",onClick:e[2]||(e[2]=s=>i.moveDown(s,0))}),d(r,{type:"button",icon:"pi pi-angle-double-down",onClick:e[3]||(e[3]=s=>i.moveBottom(s,0))}),h(t.$slots,"sourcecontrolsend")]),v("div",P,[t.$slots.sourceheader?(f(),p("div",A,[h(t.$slots,"sourceheader")])):b("",!0),d(L,{ref:"sourceList",name:"p-picklist-flip",tag:"ul",class:"p-picklist-list p-picklist-source",style:I(l.listStyle),role:"listbox","aria-multiselectable":"multiple"},{default:y(()=>[(f(!0),p(_,null,V(i.sourceList,(s,u)=>S((f(),p("li",{key:i.getItemKey(s,u),tabindex:"0",class:k(["p-picklist-item",{"p-highlight":i.isSelected(s,0)}]),onClick:c=>i.onItemClick(c,s,0),onDblclick:c=>i.onItemDblClick(c,s,0),onKeydown:c=>i.onItemKeyDown(c,s,0),onTouchend:e[4]||(e[4]=(...c)=>i.onItemTouchEnd&&i.onItemTouchEnd(...c)),role:"option","aria-selected":i.isSelected(s,0)},[h(t.$slots,"item",{item:s,index:u})],42,U)),[[a]])),128))]),_:3},8,["style"])]),v("div",N,[h(t.$slots,"movecontrolsstart"),d(r,{type:"button",icon:"pi pi-angle-right",onClick:i.moveToTarget},null,8,["onClick"]),d(r,{type:"button",icon:"pi pi-angle-double-right",onClick:i.moveAllToTarget},null,8,["onClick"]),d(r,{type:"button",icon:"pi pi-angle-left",onClick:i.moveToSource},null,8,["onClick"]),d(r,{type:"button",icon:"pi pi-angle-double-left",onClick:i.moveAllToSource},null,8,["onClick"]),h(t.$slots,"movecontrolsend")]),v("div",H,[t.$slots.targetheader?(f(),p("div",R,[h(t.$slots,"targetheader")])):b("",!0),d(L,{ref:"targetList",name:"p-picklist-flip",tag:"ul",class:"p-picklist-list p-picklist-target",style:I(l.listStyle),role:"listbox","aria-multiselectable":"multiple"},{default:y(()=>[(f(!0),p(_,null,V(i.targetList,(s,u)=>S((f(),p("li",{key:i.getItemKey(s,u),tabindex:"0",class:k(["p-picklist-item",{"p-highlight":i.isSelected(s,1)}]),onClick:c=>i.onItemClick(c,s,1),onDblclick:c=>i.onItemDblClick(c,s,1),onKeydown:c=>i.onItemKeyDown(c,s,1),onTouchend:e[5]||(e[5]=(...c)=>i.onItemTouchEnd&&i.onItemTouchEnd(...c)),role:"option","aria-selected":i.isSelected(s,1)},[h(t.$slots,"item",{item:s,index:u})],42,F)),[[a]])),128))]),_:3},8,["style"])]),v("div",z,[h(t.$slots,"targetcontrolsstart"),d(r,{type:"button",icon:"pi pi-angle-up",onClick:e[6]||(e[6]=s=>i.moveUp(s,1))}),d(r,{type:"button",icon:"pi pi-angle-double-up",onClick:e[7]||(e[7]=s=>i.moveTop(s,1))}),d(r,{type:"button",icon:"pi pi-angle-down",onClick:e[8]||(e[8]=s=>i.moveDown(s,1))}),d(r,{type:"button",icon:"pi pi-angle-double-down",onClick:e[9]||(e[9]=s=>i.moveBottom(s,1))}),h(t.$slots,"targetcontrolsend")])],2)}var X=K(x,[["render",M]]);export{X as default};
