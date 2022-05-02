import{o as r,c as l,p as o,l as c,k as d,f as p,t as u,J as g}from"./main.9e765f7d.js";var m={name:"Tag",props:{value:null,severity:null,rounded:Boolean,icon:String},computed:{containerClass(){return["p-tag p-component",{"p-tag-info":this.severity==="info","p-tag-success":this.severity==="success","p-tag-warning":this.severity==="warning","p-tag-danger":this.severity==="danger","p-tag-rounded":this.rounded}]},iconClass(){return["p-tag-icon",this.icon]}}};const f={class:"p-tag-value"};function h(n,a,s,t,e,i){return r(),l("span",g({class:i.containerClass},n.$attrs),[s.icon?(r(),l("span",{key:0,class:o(i.iconClass)},null,2)):c("",!0),d(n.$slots,"default",{},()=>[p("span",f,u(s.value),1)])],16)}function y(n,a){a===void 0&&(a={});var s=a.insertAt;if(!(!n||typeof document=="undefined")){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",s==="top"&&t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e),e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n))}}var v=`
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
`;y(v);m.render=h;export{m as s};
