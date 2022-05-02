import{o,c as u,f as c,J as d,N as r,v as p,p as h,P as f}from"./main.9e765f7d.js";var m={name:"InputSwitch",inheritAttrs:!1,emits:["click","update:modelValue","change","input"],props:{modelValue:{type:null,default:!1},class:null,style:null,trueValue:{type:null,default:!0},falseValue:{type:null,default:!1}},data(){return{focused:!1}},methods:{onClick(t){if(!this.$attrs.disabled){const e=this.checked?this.falseValue:this.trueValue;this.$emit("click",t),this.$emit("update:modelValue",e),this.$emit("change",t),this.$emit("input",e),this.$refs.input.focus()}t.preventDefault()},onFocus(){this.focused=!0},onBlur(){this.focused=!1}},computed:{containerClass(){return["p-inputswitch p-component",this.class,{"p-inputswitch-checked":this.checked,"p-disabled":this.$attrs.disabled,"p-focus":this.focused}]},checked(){return this.modelValue===this.trueValue}}};const k={class:"p-hidden-accessible"},y=["checked","aria-checked"],w=c("span",{class:"p-inputswitch-slider"},null,-1);function C(t,e,a,l,s,i){return o(),u("div",{class:h(i.containerClass),onClick:e[3]||(e[3]=n=>i.onClick(n)),style:f(a.style)},[c("div",k,[c("input",d({ref:"input",type:"checkbox",checked:i.checked},t.$attrs,{onFocus:e[0]||(e[0]=n=>i.onFocus(n)),onBlur:e[1]||(e[1]=n=>i.onBlur(n)),onKeydown:e[2]||(e[2]=r(p(n=>i.onClick(n),["prevent"]),["enter"])),role:"switch","aria-checked":i.checked}),null,16,y)]),w],6)}function V(t,e){e===void 0&&(e={});var a=e.insertAt;if(!(!t||typeof document=="undefined")){var l=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",a==="top"&&l.firstChild?l.insertBefore(s,l.firstChild):l.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}var b=`
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
`;V(b);m.render=C;export{m as s};
