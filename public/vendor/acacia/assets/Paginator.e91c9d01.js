import v from"./CurrentPageReport.29837098.js";import R from"./FirstPageLink.74204b0e.js";import b from"./LastPageLink.dfc99290.js";import T from"./NextPageLink.0a044c22.js";import D from"./PageLinks.fa78e8fc.js";import F from"./PrevPageLink.d60032e0.js";import N from"./RowsPerPageDropdown.266f3607.js";import x from"./JumpToPageDropdown.82d82f1c.js";import J from"./JumpToPageInput.4e617c87.js";import{_ as S}from"./plugin-vue_export-helper.21dcd24c.js";import{c as u,k as d,l,F as m,m as I,r as i,o as n,n as p}from"./main.9e765f7d.js";import"./ripple.esm.1fe20658.js";import"./dropdown.esm.5bafa883.js";import"./overlayeventbus.esm.ef5cc0da.js";import"./virtualscroller.esm.76cd2139.js";import"./inputnumber.esm.2f528c5c.js";import"./inputtext.esm.dc0f2264.js";import"./button.esm.a5ac1061.js";const M={name:"Paginator",emits:["update:first","update:rows","page"],props:{totalRecords:{type:Number,default:0},rows:{type:Number,default:0},first:{type:Number,default:0},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},template:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},currentPageReportTemplate:{type:null,default:"({currentPage} of {totalPages})"},alwaysShow:{type:Boolean,default:!0}},data(){return{d_first:this.first,d_rows:this.rows}},watch:{first(e){this.d_first=e},rows(e){this.d_rows=e},totalRecords(e){this.page>0&&e&&this.d_first>=e&&this.changePage(this.pageCount-1)}},methods:{changePage(e){const a=this.pageCount;if(e>=0&&e<a){this.d_first=this.d_rows*e;const r={page:e,first:this.d_first,rows:this.d_rows,pageCount:a};this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",r)}},changePageToFirst(e){this.isFirstPage||this.changePage(0),e.preventDefault()},changePageToPrev(e){this.changePage(this.page-1),e.preventDefault()},changePageLink(e){this.changePage(e.value-1),e.originalEvent.preventDefault()},changePageToNext(e){this.changePage(this.page+1),e.preventDefault()},changePageToLast(e){this.isLastPage||this.changePage(this.pageCount-1),e.preventDefault()},onRowChange(e){this.d_rows=e,this.changePage(this.page)}},computed:{templateItems(){let e=[];return this.template.split(" ").map(a=>{e.push(a.trim())}),e},page(){return Math.floor(this.d_first/this.d_rows)},pageCount(){return Math.ceil(this.totalRecords/this.d_rows)},isFirstPage(){return this.page===0},isLastPage(){return this.page===this.pageCount-1},calculatePageLinkBoundaries(){const e=this.pageCount,a=Math.min(this.pageLinkSize,e);let r=Math.max(0,Math.ceil(this.page-a/2)),P=Math.min(e-1,r+a-1);const o=this.pageLinkSize-(P-r+1);return r=Math.max(0,r-o),[r,P]},pageLinks(){let e=[],a=this.calculatePageLinkBoundaries,r=a[0],P=a[1];for(var o=r;o<=P;o++)e.push(o+1);return e},currentState(){return{page:this.page,first:this.d_first,rows:this.d_rows}},empty(){return this.pageCount===0},currentPage(){return this.pageCount>0?this.page+1:0}},components:{CurrentPageReport:v,FirstPageLink:R,LastPageLink:b,NextPageLink:T,PageLinks:D,PrevPageLink:F,RowsPerPageDropdown:N,JumpToPageDropdown:x,JumpToPageInput:J}},B={key:0,class:"p-paginator p-component"},O={key:0,class:"p-paginator-left-content"},z={key:1,class:"p-paginator-right-content"};function E(e,a,r,P,o,t){const h=i("FirstPageLink"),k=i("PrevPageLink"),c=i("NextPageLink"),f=i("LastPageLink"),L=i("PageLinks"),w=i("CurrentPageReport"),_=i("RowsPerPageDropdown"),y=i("JumpToPageDropdown"),C=i("JumpToPageInput");return r.alwaysShow||t.pageLinks&&t.pageLinks.length>1?(n(),u("div",B,[e.$slots.start?(n(),u("div",O,[d(e.$slots,"start",{state:t.currentState})])):l("",!0),(n(!0),u(m,null,I(t.templateItems,g=>(n(),u(m,{key:g},[g==="FirstPageLink"?(n(),p(h,{key:0,onClick:a[0]||(a[0]=s=>t.changePageToFirst(s)),disabled:t.isFirstPage||t.empty},null,8,["disabled"])):g==="PrevPageLink"?(n(),p(k,{key:1,onClick:a[1]||(a[1]=s=>t.changePageToPrev(s)),disabled:t.isFirstPage||t.empty},null,8,["disabled"])):g==="NextPageLink"?(n(),p(c,{key:2,onClick:a[2]||(a[2]=s=>t.changePageToNext(s)),disabled:t.isLastPage||t.empty},null,8,["disabled"])):g==="LastPageLink"?(n(),p(f,{key:3,onClick:a[3]||(a[3]=s=>t.changePageToLast(s)),disabled:t.isLastPage||t.empty},null,8,["disabled"])):g==="PageLinks"?(n(),p(L,{key:4,value:t.pageLinks,page:t.page,onClick:a[4]||(a[4]=s=>t.changePageLink(s))},null,8,["value","page"])):g==="CurrentPageReport"?(n(),p(w,{key:5,template:r.currentPageReportTemplate,currentPage:t.currentPage,page:t.page,pageCount:t.pageCount,first:o.d_first,rows:o.d_rows,totalRecords:r.totalRecords},null,8,["template","currentPage","page","pageCount","first","rows","totalRecords"])):g==="RowsPerPageDropdown"&&r.rowsPerPageOptions?(n(),p(_,{key:6,rows:o.d_rows,options:r.rowsPerPageOptions,onRowsChange:a[5]||(a[5]=s=>t.onRowChange(s)),disabled:t.empty},null,8,["rows","options","disabled"])):g==="JumpToPageDropdown"?(n(),p(y,{key:7,page:t.page,pageCount:t.pageCount,onPageChange:a[6]||(a[6]=s=>t.changePage(s)),disabled:t.empty},null,8,["page","pageCount","disabled"])):g==="JumpToPageInput"?(n(),p(C,{key:8,page:t.currentPage,onPageChange:a[7]||(a[7]=s=>t.changePage(s)),disabled:t.empty},null,8,["page","disabled"])):l("",!0)],64))),128)),e.$slots.end?(n(),u("div",z,[d(e.$slots,"end",{state:t.currentState})])):l("",!0)])):l("",!0)}var se=S(M,[["render",E]]);export{se as default};