import{o as d,v as r,q as o,s as l,j as p}from"./vendor.05df324e.js";var c={name:"Card"};const h={class:"p-card p-component"},v={key:0,class:"p-card-header"},f={class:"p-card-body"},y={key:0,class:"p-card-title"},u={key:1,class:"p-card-subtitle"},b={class:"p-card-content"},m={key:2,class:"p-card-footer"};function g(e,n,s,i,t,a){return d(),r("div",h,[e.$slots.header?(d(),r("div",v,[o(e.$slots,"header")])):l("",!0),p("div",f,[e.$slots.title?(d(),r("div",y,[o(e.$slots,"title")])):l("",!0),e.$slots.subtitle?(d(),r("div",u,[o(e.$slots,"subtitle")])):l("",!0),p("div",b,[o(e.$slots,"content")]),e.$slots.footer?(d(),r("div",m,[o(e.$slots,"footer")])):l("",!0)])])}function k(e,n){n===void 0&&(n={});var s=n.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var x=`
.p-card-header img {
    width: 100%;
}
`;k(x);c.render=g;var $={name:"Divider",props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},computed:{containerClass(){return["p-divider p-component","p-divider-"+this.layout,"p-divider-"+this.type,{"p-divider-left":this.layout==="horizontal"&&(!this.align||this.align==="left")},{"p-divider-center":this.layout==="horizontal"&&this.align==="center"},{"p-divider-right":this.layout==="horizontal"&&this.align==="right"},{"p-divider-top":this.layout==="vertical"&&this.align==="top"},{"p-divider-center":this.layout==="vertical"&&(!this.align||this.align==="center")},{"p-divider-bottom":this.layout==="vertical"&&this.align==="bottom"}]}}};const z={key:0,class:"p-divider-content"};function C(e,n,s,i,t,a){return d(),r("div",{class:a.containerClass,role:"separator"},[e.$slots.default?(d(),r("div",z,[o(e.$slots,"default")])):l("",!0)],2)}function w(e,n){n===void 0&&(n={});var s=n.insertAt;if(!(!e||typeof document=="undefined")){var i=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",s==="top"&&i.firstChild?i.insertBefore(t,i.firstChild):i.appendChild(t),t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e))}}var _=`
.p-divider-horizontal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    position: relative;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-divider-horizontal:before {
    position: absolute;
    display: block;
    top: 50%;
    left: 0;
    width: 100%;
    content: "";
}
.p-divider-horizontal.p-divider-left {
    -webkit-box-pack: start;
        -ms-flex-pack: start;
            justify-content: flex-start;
}
.p-divider-horizontal.p-divider-right {
    -webkit-box-pack: end;
        -ms-flex-pack: end;
            justify-content: flex-end;
}
.p-divider-horizontal.p-divider-center {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-divider-content {
    z-index: 1;
}
.p-divider-vertical {
    min-height: 100%;
    margin: 0 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    position: relative;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
}
.p-divider-vertical:before {
    position: absolute;
    display: block;
    top: 0;
    left: 50%;
    height: 100%;
    content: "";
}
.p-divider-vertical.p-divider-top {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
}
.p-divider-vertical.p-divider-center {
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
}
.p-divider-vertical.p-divider-bottom {
    -webkit-box-align: end;
        -ms-flex-align: end;
            align-items: flex-end;
}
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid;
}
.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid;
}
.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed;
}
.p-divider-dashed.p-divider-vertical:before {
    border-left-style: dashed;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-top-style: dotted;
}
.p-divider-dotted.p-divider-horizontal:before {
    border-left-style: dotted;
}
`;w(_);$.render=C;export{$ as a,c as s};
