import{s as r}from"./inputnumber.esm.2f528c5c.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{n as m,r as i,o as l}from"./main.9e765f7d.js";import"./inputtext.esm.dc0f2264.js";import"./button.esm.a5ac1061.js";import"./ripple.esm.1fe20658.js";const u={name:"JumpToPageInput",inheritAttrs:!1,emits:["page-change"],props:{page:Number,pageCount:Number,disabled:Boolean},methods:{onChange(e){this.$emit("page-change",e-1)}},components:{JTPInput:r}};function d(e,o,a,c,g,t){const n=i("JTPInput");return l(),m(n,{modelValue:a.page,"onUpdate:modelValue":o[0]||(o[0]=p=>t.onChange(p)),class:"p-paginator-page-input",disabled:a.disabled},null,8,["modelValue","disabled"])}var P=s(u,[["render",d]]);export{P as default};
