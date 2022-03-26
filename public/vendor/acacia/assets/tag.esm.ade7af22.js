import{o as r,v as o,s as l,q as c,j as d,z as p,V as u}from"./vendor.05df324e.js";var g={name:"Tag",props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}};const m={class:"p-tag-value"};function f(n,a,s,t,e,i){return r(),o("span",u({class:i.containerClass},n.$attrs),[s.icon?(r(),o("span",{key:0,class:i.iconClass},null,2)):l("",!0),c(n.$slots,"default",{},()=>[d("span",m,p(s.value),1)])],16)}function h(n,a){a===void 0&&(a={});var s=a.insertAt;if(!(!n||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",s==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}}var y=`
.p-tag {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-tag-icon,
.p-tag-value,
.p-tag-icon.pi {
    line-height: 1.5;
}
.p-tag.p-tag-rounded {
    border-radius: 10rem;
}
`;h(y);g.render=f;export{g as s};
