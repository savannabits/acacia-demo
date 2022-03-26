import{o as u,v as c,j as d,V as r,_ as o,B as p}from"./vendor.05df324e.js";var h={name:"InputSwitch",inheritAttrs:!1,emits:["click","update:modelValue","change","input"],props:{modelValue:{type:null,default:!1},class:null,style:null,trueValue:{type:null,default:!0},falseValue:{type:null,default:!1}},data(){return{focused:!1}},methods:{onClick(t){if(!this.$attrs.disabled){const e=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",e),this.$emit("change",t),this.$emit("input",e),this.$refs.input.focus()}t.preventDefault()},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{containerClass(){return["p-inputswitch p-component",this.class,{"p-inputswitch-checked":this.checked,"p-disabled":this.$attrs.disabled,"p-focus":this.focused}]},checked(){return this.modelValue===this.trueValue}}};const f={class:"p-hidden-accessible"},m=d("span",{class:"p-inputswitch-slider"},null,-1);function k(t,e,a,l,s,i){return u(),c("div",{class:i.containerClass,onClick:e[4]||(e[4]=n=>i.onClick(n)),style:a.style},[d("div",f,[d("input",r({ref:"input",type:"checkbox",checked:i.checked},t.$attrs,{onFocus:e[1]||(e[1]=n=>i.onFocus(n)),onBlur:e[2]||(e[2]=n=>i.onBlur(n)),onKeydown:e[3]||(e[3]=o(p(n=>i.onClick(n),["prevent"]),["enter"])),role:"switch","aria-checked":i.checked}),null,16,["checked","aria-checked"])]),m],6)}function y(t,e){e===void 0&&(e={});var a=e.insertAt;if(!(!t||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",a==="top"&&l.firstChild?l.insertBefore(s,l.firstChild):l.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var w=`
.p-inputswitch {
    position: relative;
    display: inline-block;
}
.p-inputswitch-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.p-inputswitch-slider:before {
    position: absolute;
    content: "";
    top: 50%;
}
`;y(w);h.render=k;export{h as s};
