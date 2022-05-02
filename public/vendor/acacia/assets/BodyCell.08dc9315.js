import{X as a,O as y,c as d,n as s,G as h,P as C,p as f,t as E,l as c,F as g,C as m,f as w,q as D,r as k,E as R,o as n}from"./main.9e765f7d.js";import{O as v}from"./overlayeventbus.esm.ef5cc0da.js";import p from"./RowRadioButton.524679cb.js";import P from"./RowCheckbox.40bd9052.js";import{R as S}from"./ripple.esm.1fe20658.js";import{_ as I}from"./plugin-vue_export-helper.21dcd24c.js";const _={name:"BodyCell",emits:["cell-edit-init","cell-edit-complete","cell-edit-cancel","row-edit-init","row-edit-save","row-edit-cancel","row-toggle","radio-change","checkbox-change","editing-meta-change"],props:{rowData:{type:Object,default:null},column:{type:Object,default:null},frozenRow:{type:Boolean,default:!1},rowIndex:{type:Number,default:null},index:{type:Number,default:null},rowTogglerIcon:{type:Array,default:null},selected:{type:Boolean,default:!1},editing:{type:Boolean,default:!1},editingMeta:{type:Object,default:null},editMode:{type:String,default:null},responsiveLayout:{type:String,default:"stack"},virtualScrollerContentProps:{type:Object,default:null}},documentEditListener:null,selfClick:!1,overlayEventListener:null,data(){return{d_editing:this.editing,styleObject:{}}},watch:{editing(e){this.d_editing=e},"$data.d_editing":function(e){this.$emit("editing-meta-change",{data:this.rowData,field:this.field||`field_${this.index}`,index:this.rowIndex,editing:e})}},mounted(){this.columnProp("frozen")&&this.updateStickyPosition()},updated(){if(this.columnProp("frozen")&&this.updateStickyPosition(),this.d_editing&&(this.editMode==="cell"||this.editMode==="row"&&this.columnProp("rowEditor"))){const e=a.getFirstFocusableElement(this.$el);e&&e.focus()}},beforeUnmount(){this.overlayEventListener&&(v.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null)},methods:{columnProp(e){return y.getVNodeProp(this.column,e)},resolveFieldData(){return y.resolveFieldData(this.rowData,this.field)},toggleRow(e){this.$emit("row-toggle",{originalEvent:e,data:this.rowData})},toggleRowWithRadio(e,t){this.$emit("radio-change",{originalEvent:e.originalEvent,index:t,data:e.data})},toggleRowWithCheckbox(e,t){this.$emit("checkbox-change",{originalEvent:e.originalEvent,index:t,data:e.data})},isEditable(){return this.column.children&&this.column.children.editor!=null},bindDocumentEditListener(){this.documentEditListener||(this.documentEditListener=e=>{this.selfClick||this.completeEdit(e,"outside"),this.selfClick=!1},document.addEventListener("click",this.documentEditListener))},unbindDocumentEditListener(){this.documentEditListener&&(document.removeEventListener("click",this.documentEditListener),this.documentEditListener=null,this.selfClick=!1)},switchCellToViewMode(){this.d_editing=!1,this.unbindDocumentEditListener(),v.off("overlay-click",this.overlayEventListener),this.overlayEventListener=null},onClick(e){this.editMode==="cell"&&this.isEditable()&&(this.selfClick=!0,this.d_editing||(this.d_editing=!0,this.bindDocumentEditListener(),this.$emit("cell-edit-init",{originalEvent:e,data:this.rowData,field:this.field,index:this.rowIndex}),this.overlayEventListener=t=>{this.$el&&this.$el.contains(t.target)&&(this.selfClick=!0)},v.on("overlay-click",this.overlayEventListener)))},completeEdit(e,t){const i={originalEvent:e,data:this.rowData,newData:this.editingRowData,value:this.rowData[this.field],newValue:this.editingRowData[this.field],field:this.field,index:this.rowIndex,type:t,defaultPrevented:!1,preventDefault:function(){this.defaultPrevented=!0}};this.$emit("cell-edit-complete",i),i.defaultPrevented||this.switchCellToViewMode()},onKeyDown(e){if(this.editMode==="cell")switch(e.which){case 13:this.completeEdit(e,"enter");break;case 27:this.switchCellToViewMode(),this.$emit("cell-edit-cancel",{originalEvent:e,data:this.rowData,field:this.field,index:this.rowIndex});break;case 9:this.completeEdit(e,"tab"),e.shiftKey?this.moveToPreviousCell(e):this.moveToNextCell(e);break}},moveToPreviousCell(e){let t=this.findCell(e.target),i=this.findPreviousEditableColumn(t);i&&(a.invokeElementMethod(i,"click"),e.preventDefault())},moveToNextCell(e){let t=this.findCell(e.target),i=this.findNextEditableColumn(t);i&&(a.invokeElementMethod(i,"click"),e.preventDefault())},findCell(e){if(e){let t=e;for(;t&&!a.hasClass(t,"p-cell-editing");)t=t.parentElement;return t}else return null},findPreviousEditableColumn(e){let t=e.previousElementSibling;if(!t){let i=e.parentElement.previousElementSibling;i&&(t=i.lastElementChild)}return t?a.hasClass(t,"p-editable-column")?t:this.findPreviousEditableColumn(t):null},findNextEditableColumn(e){let t=e.nextElementSibling;if(!t){let i=e.parentElement.nextElementSibling;i&&(t=i.firstElementChild)}return t?a.hasClass(t,"p-editable-column")?t:this.findNextEditableColumn(t):null},isEditingCellValid(){return a.find(this.$el,".p-invalid").length===0},onRowEditInit(e){this.$emit("row-edit-init",{originalEvent:e,data:this.rowData,newData:this.editingRowData,field:this.field,index:this.rowIndex})},onRowEditSave(e){this.$emit("row-edit-save",{originalEvent:e,data:this.rowData,newData:this.editingRowData,field:this.field,index:this.rowIndex})},onRowEditCancel(e){this.$emit("row-edit-cancel",{originalEvent:e,data:this.rowData,newData:this.editingRowData,field:this.field,index:this.rowIndex})},editorInitCallback(e){this.$emit("row-edit-init",{originalEvent:e,data:this.rowData,newData:this.editingRowData,field:this.field,index:this.rowIndex})},editorSaveCallback(e){this.$emit("row-edit-save",{originalEvent:e,data:this.rowData,newData:this.editingRowData,field:this.field,index:this.rowIndex})},editorCancelCallback(e){this.$emit("row-edit-cancel",{originalEvent:e,data:this.rowData,newData:this.editingRowData,field:this.field,index:this.rowIndex})},updateStickyPosition(){if(this.columnProp("frozen"))if(this.columnProp("alignFrozen")==="right"){let t=0,i=this.$el.nextElementSibling;i&&(t=a.getOuterWidth(i)+parseFloat(i.style.right||0)),this.styleObject.right=t+"px"}else{let t=0,i=this.$el.previousElementSibling;i&&(t=a.getOuterWidth(i)+parseFloat(i.style.left||0)),this.styleObject.left=t+"px"}},getVirtualScrollerProp(e){return this.virtualScrollerContentProps?this.virtualScrollerContentProps[e]:null}},computed:{editingRowData(){return this.editingMeta[this.rowIndex]?this.editingMeta[this.rowIndex].data:this.rowData},field(){return this.columnProp("field")},containerClass(){return[this.columnProp("bodyClass"),this.columnProp("class"),{"p-selection-column":this.columnProp("selectionMode")!=null,"p-editable-column":this.isEditable(),"p-cell-editing":this.d_editing,"p-frozen-column":this.columnProp("frozen")}]},containerStyle(){let e=this.columnProp("bodyStyle"),t=this.columnProp("style");return this.columnProp("frozen")?[t,e,this.styleObject]:[t,e]},loading(){return this.getVirtualScrollerProp("loading")},loadingOptions(){const e=this.getVirtualScrollerProp("getLoaderOptions");return e&&e(this.rowIndex,{cellIndex:this.index,cellFirst:this.index===0,cellLast:this.index===this.getVirtualScrollerProp("columns").length-1,cellEven:this.index%2===0,cellOdd:this.index%2!==0,column:this.column,field:this.field})}},components:{DTRadioButton:p,DTCheckbox:P},directives:{ripple:S}},L={key:0,class:"p-column-title"},z=w("span",{class:"p-row-editor-init-icon pi pi-fw pi-pencil"},null,-1),O=[z],M=w("span",{class:"p-row-editor-save-icon pi pi-fw pi-check"},null,-1),T=[M],B=w("span",{class:"p-row-editor-cancel-icon pi pi-fw pi-times"},null,-1),V=[B];function F(e,t,i,N,r,l){const b=k("DTRadioButton"),x=k("DTCheckbox"),u=R("ripple");return l.loading?(n(),d("td",{key:0,style:C(l.containerStyle),class:f(l.containerClass)},[(n(),s(h(i.column.children.loading),{data:i.rowData,column:i.column,field:l.field,index:i.rowIndex,frozenRow:i.frozenRow,loadingOptions:l.loadingOptions},null,8,["data","column","field","index","frozenRow","loadingOptions"]))],6)):(n(),d("td",{key:1,style:C(l.containerStyle),class:f(l.containerClass),onClick:t[6]||(t[6]=(...o)=>l.onClick&&l.onClick(...o)),onKeydown:t[7]||(t[7]=(...o)=>l.onKeyDown&&l.onKeyDown(...o)),role:"cell"},[i.responsiveLayout==="stack"?(n(),d("span",L,E(l.columnProp("header")),1)):c("",!0),i.column.children&&i.column.children.body&&!r.d_editing?(n(),s(h(i.column.children.body),{key:1,data:i.rowData,column:i.column,field:l.field,index:i.rowIndex,frozenRow:i.frozenRow,editorInitCallback:l.editorInitCallback},null,8,["data","column","field","index","frozenRow","editorInitCallback"])):i.column.children&&i.column.children.editor&&r.d_editing?(n(),s(h(i.column.children.editor),{key:2,data:l.editingRowData,column:i.column,field:l.field,index:i.rowIndex,frozenRow:i.frozenRow,editorSaveCallback:l.editorSaveCallback,editorCancelCallback:l.editorCancelCallback},null,8,["data","column","field","index","frozenRow","editorSaveCallback","editorCancelCallback"])):i.column.children&&i.column.children.body&&!i.column.children.editor&&r.d_editing?(n(),s(h(i.column.children.body),{key:3,data:l.editingRowData,column:i.column,field:l.field,index:i.rowIndex,frozenRow:i.frozenRow},null,8,["data","column","field","index","frozenRow"])):l.columnProp("selectionMode")?(n(),d(g,{key:4},[l.columnProp("selectionMode")==="single"?(n(),s(b,{key:0,value:i.rowData,checked:i.selected,onChange:t[0]||(t[0]=o=>l.toggleRowWithRadio(o,i.rowIndex))},null,8,["value","checked"])):l.columnProp("selectionMode")==="multiple"?(n(),s(x,{key:1,value:i.rowData,checked:i.selected,onChange:t[1]||(t[1]=o=>l.toggleRowWithCheckbox(o,i.rowIndex))},null,8,["value","checked"])):c("",!0)],64)):l.columnProp("rowReorder")?(n(),d("i",{key:5,class:f(["p-datatable-reorderablerow-handle",l.columnProp("rowReorderIcon")||"pi pi-bars"])},null,2)):l.columnProp("expander")?m((n(),d("button",{key:6,class:"p-row-toggler p-link",onClick:t[2]||(t[2]=(...o)=>l.toggleRow&&l.toggleRow(...o)),type:"button"},[w("span",{class:f(i.rowTogglerIcon)},null,2)])),[[u]]):i.editMode==="row"&&l.columnProp("rowEditor")?(n(),d(g,{key:7},[r.d_editing?c("",!0):m((n(),d("button",{key:0,class:"p-row-editor-init p-link",onClick:t[3]||(t[3]=(...o)=>l.onRowEditInit&&l.onRowEditInit(...o)),type:"button"},O)),[[u]]),r.d_editing?m((n(),d("button",{key:1,class:"p-row-editor-save p-link",onClick:t[4]||(t[4]=(...o)=>l.onRowEditSave&&l.onRowEditSave(...o)),type:"button"},T)),[[u]]):c("",!0),r.d_editing?m((n(),d("button",{key:2,class:"p-row-editor-cancel p-link",onClick:t[5]||(t[5]=(...o)=>l.onRowEditCancel&&l.onRowEditCancel(...o)),type:"button"},V)),[[u]]):c("",!0)],64)):(n(),d(g,{key:8},[D(E(l.resolveFieldData()),1)],64))],38))}var G=I(_,[["render",F]]);export{G as default};