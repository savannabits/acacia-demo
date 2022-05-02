import{O as u,c as h,f as a,J as d,p as i,P as r,o as n}from"./main.9e765f7d.js";import{_ as f}from"./plugin-vue_export-helper.21dcd24c.js";const k={name:"Checkbox",inheritAttrs:!1,emits:["click","update:modelValue","change","input"],props:{value:null,modelValue:null,binary:Boolean,class:null,style:null,trueValue:{type:null,default:!0},falseValue:{type:null,default:!1}},data(){return{focused:!1}},methods:{onClick(l){if(!this.$attrs.disabled){let e;this.binary?e=this.checked?this.falseValue:this.trueValue:this.checked?e=this.modelValue.filter(c=>!u.equals(c,this.value)):e=this.modelValue?[...this.modelValue,this.value]:[this.value],this.$emit("click",l),this.$emit("update:modelValue",e),this.$emit("change",l),this.$emit("input",e),this.$refs.input.focus()}},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{checked(){return this.binary?this.modelValue===this.trueValue:u.contains(this.value,this.modelValue)},containerClass(){return["p-checkbox p-component",this.class,{"p-checkbox-checked":this.checked,"p-checkbox-disabled":this.$attrs.disabled,"p-checkbox-focused":this.focused}]}}},m={class:"p-hidden-accessible"},p=["checked","value"],b=["aria-checked"];function V(l,e,c,x,o,s){return n(),h("div",{class:i(s.containerClass),onClick:e[2]||(e[2]=t=>s.onClick(t)),style:r(c.style)},[a("div",m,[a("input",d({ref:"input",type:"checkbox",checked:s.checked,value:c.value},l.$attrs,{onFocus:e[0]||(e[0]=(...t)=>s.onFocus&&s.onFocus(...t)),onBlur:e[1]||(e[1]=(...t)=>s.onBlur&&s.onBlur(...t))}),null,16,p)]),a("div",{ref:"box",class:i(["p-checkbox-box",{"p-highlight":s.checked,"p-disabled":l.$attrs.disabled,"p-focus":o.focused}]),role:"checkbox","aria-checked":s.checked},[a("span",{class:i(["p-checkbox-icon",{"pi pi-check":s.checked}])},null,2)],10,b)],6)}var B=f(k,[["render",V]]);export{B as default};