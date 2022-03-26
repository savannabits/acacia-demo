import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";import{i as n,k as u,F as f,t as c,V,x as p,an as g,o,q as y,z as k}from"./vendor.05df324e.js";const v={name:"Chips",inheritAttrs:!1,emits:["update:modelValue","add","remove"],props:{modelValue:{type:Array,default:null},max:{type:Number,default:null},separator:{type:String,default:null},addOnBlur:{type:Boolean,default:null},allowDuplicate:{type:Boolean,default:!0},class:null,style:null},data(){return{inputValue:null,focused:!1}},methods:{onWrapperClick(){this.$refs.input.focus()},onInput(t){this.inputValue=t.target.value},onFocus(){this.focused=!0},onBlur(t){this.focused=!1,this.addOnBlur&&this.addItem(t,t.target.value,!1)},onKeyDown(t){const e=t.target.value;switch(t.which){case 8:e.length===0&&this.modelValue&&this.modelValue.length>0&&this.removeItem(t,this.modelValue.length-1);break;case 13:e&&e.trim().length&&!this.maxedOut&&this.addItem(t,e,!0);break;default:this.separator&&this.separator===","&&t.which===188&&this.addItem(t,e,!0);break}},onPaste(t){if(this.separator){let e=(t.clipboardData||window.clipboardData).getData("Text");if(e){let l=this.modelValue||[],i=e.split(this.separator);i=i.filter(r=>this.allowDuplicate||l.indexOf(r)===-1),l=[...l,...i],this.updateModel(t,l,!0)}}},updateModel(t,e,l){this.$emit("update:modelValue",e),this.$emit("add",{originalEvent:t,value:e}),this.$refs.input.value="",this.inputValue="",l&&t.preventDefault()},addItem(t,e,l){if(e&&e.trim().length){let i=this.modelValue?[...this.modelValue]:[];(this.allowDuplicate||i.indexOf(e)===-1)&&(i.push(e),this.updateModel(t,i,l))}},removeItem(t,e){if(this.$attrs.disabled)return;let l=[...this.modelValue];const i=l.splice(e,1);this.$emit("update:modelValue",l),this.$emit("remove",{originalEvent:t,value:i})}},computed:{maxedOut(){return this.max&&this.modelValue&&this.max===this.modelValue.length},containerClass(){return["p-chips p-component p-inputwrapper",this.class,{"p-inputwrapper-filled":this.modelValue&&this.modelValue.length||this.inputValue&&this.inputValue.length,"p-inputwrapper-focus":this.focused}]}}},w={class:"p-chips-token-label"},b=["onClick"],x={class:"p-chips-input-token"},I=["disabled"];function C(t,e,l,i,r,s){return o(),n("div",{class:p(s.containerClass),style:g(l.style)},[u("ul",{class:p(["p-inputtext p-chips-multiple-container",{"p-disabled":t.$attrs.disabled,"p-focus":r.focused}]),onClick:e[5]||(e[5]=a=>s.onWrapperClick())},[(o(!0),n(f,null,c(l.modelValue,(a,d)=>(o(),n("li",{key:`${d}_${a}`,class:"p-chips-token"},[y(t.$slots,"chip",{value:a},()=>[u("span",w,k(a),1)]),u("span",{class:"p-chips-token-icon pi pi-times-circle",onClick:h=>s.removeItem(h,d)},null,8,b)]))),128)),u("li",x,[u("input",V({ref:"input",type:"text"},t.$attrs,{onFocus:e[0]||(e[0]=(...a)=>s.onFocus&&s.onFocus(...a)),onBlur:e[1]||(e[1]=a=>s.onBlur(a)),onInput:e[2]||(e[2]=(...a)=>s.onInput&&s.onInput(...a)),onKeydown:e[3]||(e[3]=a=>s.onKeyDown(a)),onPaste:e[4]||(e[4]=a=>s.onPaste(a)),disabled:t.$attrs.disabled||s.maxedOut}),null,16,I)])],2)],6)}var _=m(v,[["render",C]]);export{_ as default};