import{s as a}from"./dropdown.esm.5bafa883.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{n as i,r as l,o as d}from"./main.9e765f7d.js";import"./overlayeventbus.esm.ef5cc0da.js";import"./ripple.esm.1fe20658.js";import"./virtualscroller.esm.76cd2139.js";const m={name:"RowsPerPageDropdown",inheritAttrs:!1,emits:["rows-change"],props:{options:Array,rows:Number,disabled:Boolean},methods:{onChange(e){this.$emit("rows-change",e)}},computed:{rowsOptions(){let e=[];if(this.options)for(let o=0;o<this.options.length;o++)e.push({label:String(this.options[o]),value:this.options[o]});return e}},components:{RPPDropdown:a}};function c(e,o,t,u,w,s){const n=l("RPPDropdown");return d(),i(n,{modelValue:t.rows,options:s.rowsOptions,optionLabel:"label",optionValue:"value","onUpdate:modelValue":o[0]||(o[0]=r=>s.onChange(r)),class:"p-paginator-rpp-options",disabled:t.disabled},null,8,["modelValue","options","disabled"])}var D=p(m,[["render",c]]);export{D as default};