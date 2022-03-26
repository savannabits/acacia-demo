var N=Object.defineProperty,$=Object.defineProperties;var L=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var P=(e,t,o)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,k=(e,t)=>{for(var o in t||(t={}))B.call(t,o)&&P(e,o,t[o]);if(F)for(var o of F(t))I.call(t,o)&&P(e,o,t[o]);return e},w=(e,t)=>$(e,L(t));import{e as O,E as R,a8 as r,G as V,p as u,a9 as z,a as K,v as M,w as m,r as y,o as v,k as d,j,q as C,z as U,i as h,s as J,F as _,y as q}from"./vendor.05df324e.js";import{s as A}from"./inputtext.esm.b08d2117.js";import{s as E}from"./datatable.esm.6e02ebef.js";import{s as G}from"./button.esm.cbb15c31.js";import{_ as H}from"./plugin-vue_export-helper.21dcd24c.js";import"./paginator.esm.ff35b289.js";import"./ripple.esm.574b991d.js";import"./dropdown.esm.573df5c1.js";import"./overlayeventbus.esm.d529c5a8.js";import"./virtualscroller.esm.adfef9da.js";import"./inputnumber.esm.f09ada2c.js";const Q=()=>{let e=null;return function(t,o=500){clearTimeout(e),e=setTimeout(()=>{t()},o)}},W=O({name:"PrimeDatatables",components:{DataTable:E,InputText:A,Button:G},props:{apiUrl:String,title:String,refresh:String,defaultSortField:String,defaultSortDesc:{type:Boolean,default:!0},searchableColumns:{type:Array,default:[]},columnFilters:{required:!0,type:Object,default:{}},stateKey:String},setup(e){R(async()=>{a.value=JSON.parse(sessionStorage.getItem(T.value)),a.value||(a.value={first:0,filters:n.value,rows:10}),a.value.page=Math.fround(parseInt(a.value.first)/parseInt(a.value.rows||10)),console.log(a.value),await i()});const t=r(e,"refresh");V(t,l=>{i()});const o=u(),S=Q(),p=u(!1),f=u(0),c=u(),g=r(e,"columnFilters"),n=u({});n.value=w(k({},g.value),{global:{value:"",matchMode:z.CONTAINS}});const s=r(e,"searchableColumns"),a=u({}),D=r(e,"apiUrl"),T=r(e,"stateKey"),i=async()=>{var l;p.value=!0,a.value.filters=n.value,a.value.sortField||(a.value.sortField=r(e,"defaultSortField").value),[-1,1].includes(a.value.sortOrder)||(a.value.sortOrder=r(e,"defaultSortDesc").value?-1:1);try{const b=await K.get(D.value,{params:{dt_params:JSON.stringify(a.value),searchable_columns:JSON.stringify(s.value)}});c.value=(l=b.data.data)!=null?l:[],f.value=b.data.total,p.value=!1}catch{c.value=[],f.value=0,p.value=!1}};return{dt:o,loading:p,totalRecords:f,records:c,filters:n,lazyParams:a,loadLazyData:i,onPage:l=>{a.value=l,i()},onSort:l=>{a.value=l,i()},onFilter:()=>{i()},debounce:S}}}),X=q(" Loading... "),Y={class:"flex flex-wrap gap-2 justify-between items-center"},Z={class:"flex items-center gap-2"},x={class:"font-semibold"},ee={class:"p-input-icon-left max-w-[360px]"},te={key:0,class:"pi pi-search"},ae=d("p",{class:"text-center"},"No records found.",-1);function oe(e,t,o,S,p,f){const c=y("Button"),g=y("InputText"),n=y("DataTable");return v(),M(n,{class:"p-datatable-sm",value:e.records,lazy:!0,"auto-layout":!0,paginator:!0,rows:10,filters:e.filters,"onUpdate:filters":t[3]||(t[3]=s=>e.filters=s),ref:"dt",loading:e.loading,"total-records":e.totalRecords,globalFilterFields:e.searchableColumns,onPage:e.onPage,onSort:e.onSort,onFilter:e.onFilter,"filter-display":"row","responsive-layout":"stack",breakpoint:"960px","state-key":e.stateKey,"state-storage":"session",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} records",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,15,25,50]},{loading:m(()=>[X]),header:m(()=>[d("div",Y,[d("div",null,[d("div",Z,[j(c,{onClick:e.loadLazyData,class:"p-button-text p-button-plain",icon:"pi pi-refresh"},null,8,["onClick"]),C(e.$slots,"header",{},()=>[d("h5",x,U(e.title),1)])])]),d("div",ee,[e.filters.global.value?(v(),h(_,{key:1},[e.filters.global.value?(v(),h("i",{key:0,class:"pi pi-times",onClick:t[0]||(t[0]=s=>{e.filters.global.value=null,e.onFilter()})})):J("",!0)],64)):(v(),h("i",te)),j(g,{modelValue:e.filters.global.value,"onUpdate:modelValue":t[1]||(t[1]=s=>e.filters.global.value=s),onInput:t[2]||(t[2]=s=>e.debounce(e.onFilter,500)),placeholder:"Keyword Search"},null,8,["modelValue"])])])]),empty:m(()=>[ae]),default:m(()=>[C(e.$slots,"default")]),_:3},8,["value","filters","loading","total-records","globalFilterFields","onPage","onSort","onFilter","state-key"])}var he=H(W,[["render",oe]]);export{he as default};
