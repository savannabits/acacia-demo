import{o,v as r,V as d}from"./vendor.05df324e.js";var h={name:"Textarea",emits:["update:modelValue"],props:{modelValue:null,autoResize:Boolean},mounted(){this.$el.offsetParent&&this.autoResize&&this.resize()},updated(){this.$el.offsetParent&&this.autoResize&&this.resize()},methods:{resize(){const e=window.getComputedStyle(this.$el);this.$el.style.height="auto",this.$el.style.height=`calc(${e.borderTopWidth} + ${e.borderBottomWidth} + ${this.$el.scrollHeight}px)`,parseFloat(this.$el.style.height)>=parseFloat(this.$el.style.maxHeight)?(this.$el.style.overflowY="scroll",this.$el.style.height=this.$el.style.maxHeight):this.$el.style.overflow="hidden"},onInput(e){this.autoResize&&this.resize(),this.$emit("update:modelValue",e.target.value)}},computed:{filled(){return this.modelValue!=null&&this.modelValue.toString().length>0}}};function u(e,l,s,i,t,a){return o(),r("textarea",d({class:["p-inputtextarea p-inputtext p-component",{"p-filled":a.filled,"p-inputtextarea-resizable ":s.autoResize}]},e.$attrs,{value:s.modelValue,onInput:l[1]||(l[1]=(...n)=>a.onInput&&a.onInput(...n))}),null,16,["value"])}function p(e,l){l===void 0&&(l={});var s=l.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var m=`
.p-inputtextarea-resizable {
    overflow: hidden;
    resize: none;
}
.p-fluid .p-inputtextarea {
    width: 100%;
}
`;p(m);h.render=u;export{h as s};
