import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{c as t,F as a,m as l,o as n,n as u,G as c,l as m}from"./main.9e765f7d.js";const i={name:"TableLoadingBody",props:{columns:{type:null,default:null},rows:{type:null,default:null}}},p={class:"p-datatable-tbody"};function y(_,f,r,k,b,g){return n(),t("tbody",p,[(n(!0),t(a,null,l(r.rows,s=>(n(),t("tr",{key:s},[(n(!0),t(a,null,l(r.columns,(e,o)=>(n(),t("td",{key:e.props.columnKey||e.props.field||o},[e.children&&e.children.loading?(n(),u(c(e.children.loading),{key:0,column:e,index:o},null,8,["column","index"])):m("",!0)]))),128))]))),128))])}var B=d(i,[["render",y]]);export{B as default};
