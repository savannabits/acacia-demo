import{s as I}from"./button.esm.a5ac1061.js";import{o as a,c as r,P as v,k as x,q as F,t as p,l as d,p as f,f as o,X as m,C as w,N as k,n as h,F as g,m as b,r as y,E as _,w as L,e as z}from"./main.9e765f7d.js";import{s as M}from"./message.esm.a16f09f2.js";import{R as U}from"./ripple.esm.1fe20658.js";import{_ as T}from"./plugin-vue_export-helper.21dcd24c.js";var S={name:"ProgressBar",props:{value:{type:Number,default:null},mode:{type:String,default:"determinate"},showValue:{type:Boolean,default:!0}},computed:{containerClass(){return["p-progressbar p-component",{"p-progressbar-determinate":this.determinate,"p-progressbar-indeterminate":this.indeterminate}]},progressStyle(){return{width:this.value+"%",display:"flex"}},indeterminate(){return this.mode==="indeterminate"},determinate(){return this.mode==="determinate"}}};const N=["aria-valuenow"],P={key:0,class:"p-progressbar-label"},V={key:1,class:"p-progressbar-indeterminate-container"},O=o("div",{class:"p-progressbar-value p-progressbar-value-animate"},null,-1),R=[O];function j(e,i,l,u,n,t){return a(),r("div",{role:"progressbar",class:f(t.containerClass),"aria-valuemin":"0","aria-valuenow":l.value,"aria-valuemax":"100"},[t.determinate?(a(),r("div",{key:0,class:"p-progressbar-value p-progressbar-value-animate",style:v(t.progressStyle)},[l.value!=null&&l.value!==0&&l.showValue?(a(),r("div",P,[x(e.$slots,"default",{},()=>[F(p(l.value+"%"),1)])])):d("",!0)],4)):d("",!0),t.indeterminate?(a(),r("div",V,R)):d("",!0)],10,N)}function A(e,i){i===void 0&&(i={});var l=i.insertAt;if(!(!e||typeof document=="undefined")){var u=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",l==="top"&&u.firstChild?u.insertBefore(n,u.firstChild):u.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}var K=`
.p-progressbar {
    position: relative;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-value {
    height: 100%;
    width: 0%;
    position: absolute;
    display: none;
    border: 0 none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    overflow: hidden;
}
.p-progressbar-determinate .p-progressbar-label {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
}
.p-progressbar-determinate .p-progressbar-value-animate {
    -webkit-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;
}
.p-progressbar-indeterminate .p-progressbar-value::before {
      content: '';
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      bottom: 0;
      will-change: left, right;
      -webkit-animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
              animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
}
.p-progressbar-indeterminate .p-progressbar-value::after {
    content: '';
    position: absolute;
    background-color: inherit;
    top: 0;
    left: 0;
    bottom: 0;
    will-change: left, right;
    -webkit-animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
            animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
    -webkit-animation-delay: 1.15s;
            animation-delay: 1.15s;
}
@-webkit-keyframes p-progressbar-indeterminate-anim {
0% {
    left: -35%;
    right: 100%;
}
60% {
    left: 100%;
    right: -90%;
}
100% {
    left: 100%;
    right: -90%;
}
}
@keyframes p-progressbar-indeterminate-anim {
0% {
    left: -35%;
    right: 100%;
}
60% {
    left: 100%;
    right: -90%;
}
100% {
    left: 100%;
    right: -90%;
}
}
@-webkit-keyframes p-progressbar-indeterminate-anim-short {
0% {
    left: -200%;
    right: 100%;
}
60% {
    left: 107%;
    right: -8%;
}
100% {
    left: 107%;
    right: -8%;
}
}
@keyframes p-progressbar-indeterminate-anim-short {
0% {
    left: -200%;
    right: 100%;
}
60% {
    left: 107%;
    right: -8%;
}
100% {
    left: 107%;
    right: -8%;
}
}
`;A(K);S.render=j;const W={name:"FileUpload",emits:["select","uploader","before-upload","progress","upload","error","before-send","clear","remove"],props:{name:{type:String,default:null},url:{type:String,default:null},mode:{type:String,default:"advanced"},multiple:{type:Boolean,default:!1},accept:{type:String,default:null},disabled:{type:Boolean,default:!1},auto:{type:Boolean,default:!1},maxFileSize:{type:Number,default:null},invalidFileSizeMessage:{type:String,default:"{0}: Invalid file size, file size should be smaller than {1}."},invalidFileTypeMessage:{type:String,default:"{0}: Invalid file type, allowed file types: {1}."},fileLimit:{type:Number,default:null},invalidFileLimitMessage:{type:String,default:"Maximum number of files exceeded, limit is {0} at most."},withCredentials:{type:Boolean,default:!1},previewWidth:{type:Number,default:50},chooseLabel:{type:String,default:null},uploadLabel:{type:String,default:null},cancelLabel:{type:String,default:null},customUpload:{type:Boolean,default:!1},showUploadButton:{type:Boolean,default:!0},showCancelButton:{type:Boolean,default:!0},style:null,class:null},duplicateIEEvent:!1,data(){return{uploadedFileCount:0,files:[],messages:[],focused:!1,progress:null}},methods:{onFileSelect(e){if(e.type!=="drop"&&this.isIE11()&&this.duplicateIEEvent){this.duplicateIEEvent=!1;return}this.messages=[],this.files=this.files||[];let i=e.dataTransfer?e.dataTransfer.files:e.target.files;for(let l of i)this.isFileSelected(l)||this.validate(l)&&(this.isImage(l)&&(l.objectURL=window.URL.createObjectURL(l)),this.files.push(l));this.$emit("select",{originalEvent:e,files:this.files}),this.fileLimit&&this.checkFileLimit(),this.auto&&this.hasFiles&&!this.isFileLimitExceeded()&&this.upload(),e.type!=="drop"&&this.isIE11()?this.clearIEInput():this.clearInputElement()},choose(){this.$refs.fileInput.click()},upload(){if(this.customUpload)this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("uploader",{files:this.files}),this.clear();else{let e=new XMLHttpRequest,i=new FormData;this.$emit("before-upload",{xhr:e,formData:i});for(let l of this.files)i.append(this.name,l,l.name);e.upload.addEventListener("progress",l=>{l.lengthComputable&&(this.progress=Math.round(l.loaded*100/l.total)),this.$emit("progress",{originalEvent:l,progress:this.progress})}),e.onreadystatechange=()=>{e.readyState===4&&(this.progress=0,e.status>=200&&e.status<300?(this.fileLimit&&(this.uploadedFileCount+=this.files.length),this.$emit("upload",{xhr:e,files:this.files})):this.$emit("error",{xhr:e,files:this.files}),this.clear())},e.open("POST",this.url,!0),this.$emit("before-send",{xhr:e,formData:i}),e.withCredentials=this.withCredentials,e.send(i)}},clear(){this.files=[],this.messages=null,this.$emit("clear"),this.isAdvanced&&this.clearInputElement()},onFocus(){this.focused=!0},onBlur(){this.focused=!1},isFileSelected(e){if(this.files&&this.files.length){for(let i of this.files)if(i.name+i.type+i.size===e.name+e.type+e.size)return!0}return!1},isIE11(){return!!window.MSInputMethodContext&&!!document.documentMode},validate(e){return this.accept&&!this.isFileTypeValid(e)?(this.messages.push(this.invalidFileTypeMessage.replace("{0}",e.name).replace("{1}",this.accept)),!1):this.maxFileSize&&e.size>this.maxFileSize?(this.messages.push(this.invalidFileSizeMessage.replace("{0}",e.name).replace("{1}",this.formatSize(this.maxFileSize))),!1):!0},isFileTypeValid(e){let i=this.accept.split(",").map(l=>l.trim());for(let l of i)if(this.isWildcard(l)?this.getTypeClass(e.type)===this.getTypeClass(l):e.type==l||this.getFileExtension(e).toLowerCase()===l.toLowerCase())return!0;return!1},getTypeClass(e){return e.substring(0,e.indexOf("/"))},isWildcard(e){return e.indexOf("*")!==-1},getFileExtension(e){return"."+e.name.split(".").pop()},isImage(e){return/^image\//.test(e.type)},onDragEnter(e){this.disabled||(e.stopPropagation(),e.preventDefault())},onDragOver(e){this.disabled||(m.addClass(this.$refs.content,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault())},onDragLeave(){this.disabled||m.removeClass(this.$refs.content,"p-fileupload-highlight")},onDrop(e){if(!this.disabled){m.removeClass(this.$refs.content,"p-fileupload-highlight"),e.stopPropagation(),e.preventDefault();const i=e.dataTransfer?e.dataTransfer.files:e.target.files;(this.multiple||i&&i.length===1)&&this.onFileSelect(e)}},onBasicUploaderClick(){this.hasFiles?this.upload():this.$refs.fileInput.click()},remove(e){this.clearInputElement();let i=this.files.splice(e,1)[0];this.files=[...this.files],this.$emit("remove",{file:i,files:this.files})},clearInputElement(){this.$refs.fileInput.value=""},clearIEInput(){this.$refs.fileInput&&(this.duplicateIEEvent=!0,this.$refs.fileInput.value="")},formatSize(e){if(e===0)return"0 B";let i=1e3,l=3,u=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(i));return parseFloat((e/Math.pow(i,n)).toFixed(l))+" "+u[n]},isFileLimitExceeded(){return this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount&&this.focused&&(this.focused=!1),this.fileLimit&&this.fileLimit<this.files.length+this.uploadedFileCount},checkFileLimit(){this.isFileLimitExceeded()&&this.messages.push(this.invalidFileLimitMessage.replace("{0}",this.fileLimit.toString()))},onMessageClose(){this.messages=null}},computed:{isAdvanced(){return this.mode==="advanced"},isBasic(){return this.mode==="basic"},advancedChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonClass(){return["p-button p-component p-fileupload-choose",this.class,{"p-fileupload-choose-selected":this.hasFiles,"p-disabled":this.disabled,"p-focus":this.focused}]},basicChooseButtonIconClass(){return["p-button-icon p-button-icon-left pi",{"pi-plus":!this.hasFiles||this.auto,"pi-upload":this.hasFiles&&!this.auto}]},basicChooseButtonLabel(){return this.auto?this.chooseButtonLabel:this.hasFiles?this.files.map(e=>e.name).join(", "):this.chooseButtonLabel},hasFiles(){return this.files&&this.files.length>0},chooseDisabled(){return this.disabled||this.fileLimit&&this.fileLimit<=this.files.length+this.uploadedFileCount},uploadDisabled(){return this.disabled||!this.hasFiles||this.fileLimit&&this.fileLimit<this.files.length},cancelDisabled(){return this.disabled||!this.hasFiles},chooseButtonLabel(){return this.chooseLabel||this.$primevue.config.locale.choose},uploadButtonLabel(){return this.uploadLabel||this.$primevue.config.locale.upload},cancelButtonLabel(){return this.cancelLabel||this.$primevue.config.locale.cancel}},components:{FileUploadButton:I,FileUploadProgressBar:S,FileUploadMessage:M},directives:{ripple:U}},q={key:0,class:"p-fileupload p-fileupload-advanced p-component"},H={class:"p-fileupload-buttonbar"},X=["multiple","accept","disabled"],G=o("span",{class:"p-button-icon p-button-icon-left pi pi-fw pi-plus"},null,-1),Y={class:"p-button-label"},Z={key:1,class:"p-fileupload-files"},J=["alt","src","width"],Q={class:"p-fileupload-filename"},$={key:2,class:"p-fileupload-empty"},ee={key:1,class:"p-fileupload p-fileupload-basic p-component"},te={class:"p-button-label"},ie=["accept","disabled","multiple"];function se(e,i,l,u,n,t){const c=y("FileUploadButton"),D=y("FileUploadProgressBar"),B=y("FileUploadMessage"),C=_("ripple");return t.isAdvanced?(a(),r("div",q,[o("div",H,[w((a(),r("span",{class:f(t.advancedChooseButtonClass),style:v(l.style),onClick:i[1]||(i[1]=(...s)=>t.choose&&t.choose(...s)),onKeydown:i[2]||(i[2]=k((...s)=>t.choose&&t.choose(...s),["enter"])),onFocus:i[3]||(i[3]=(...s)=>t.onFocus&&t.onFocus(...s)),onBlur:i[4]||(i[4]=(...s)=>t.onBlur&&t.onBlur(...s)),tabindex:"0"},[o("input",{ref:"fileInput",type:"file",onChange:i[0]||(i[0]=(...s)=>t.onFileSelect&&t.onFileSelect(...s)),multiple:l.multiple,accept:l.accept,disabled:t.chooseDisabled},null,40,X),G,o("span",Y,p(t.chooseButtonLabel),1)],38)),[[C]]),l.showUploadButton?(a(),h(c,{key:0,label:t.uploadButtonLabel,icon:"pi pi-upload",onClick:t.upload,disabled:t.uploadDisabled},null,8,["label","onClick","disabled"])):d("",!0),l.showCancelButton?(a(),h(c,{key:1,label:t.cancelButtonLabel,icon:"pi pi-times",onClick:t.clear,disabled:t.cancelDisabled},null,8,["label","onClick","disabled"])):d("",!0)]),o("div",{ref:"content",class:"p-fileupload-content",onDragenter:i[5]||(i[5]=(...s)=>t.onDragEnter&&t.onDragEnter(...s)),onDragover:i[6]||(i[6]=(...s)=>t.onDragOver&&t.onDragOver(...s)),onDragleave:i[7]||(i[7]=(...s)=>t.onDragLeave&&t.onDragLeave(...s)),onDrop:i[8]||(i[8]=(...s)=>t.onDrop&&t.onDrop(...s))},[t.hasFiles?(a(),h(D,{key:0,value:n.progress},null,8,["value"])):d("",!0),(a(!0),r(g,null,b(n.messages,s=>(a(),h(B,{severity:"error",key:s,onClose:t.onMessageClose},{default:L(()=>[F(p(s),1)]),_:2},1032,["onClose"]))),128)),t.hasFiles?(a(),r("div",Z,[(a(!0),r(g,null,b(n.files,(s,E)=>(a(),r("div",{class:"p-fileupload-row",key:s.name+s.type+s.size},[o("div",null,[t.isImage(s)?(a(),r("img",{key:0,role:"presentation",alt:s.name,src:s.objectURL,width:l.previewWidth},null,8,J)):d("",!0)]),o("div",Q,p(s.name),1),o("div",null,p(t.formatSize(s.size)),1),o("div",null,[z(c,{type:"button",icon:"pi pi-times",onClick:le=>t.remove(E)},null,8,["onClick"])])]))),128))])):d("",!0),e.$slots.empty&&!t.hasFiles?(a(),r("div",$,[x(e.$slots,"empty")])):d("",!0)],544)])):t.isBasic?(a(),r("div",ee,[(a(!0),r(g,null,b(n.messages,s=>(a(),h(B,{severity:"error",key:s,onClose:t.onMessageClose},{default:L(()=>[F(p(s),1)]),_:2},1032,["onClose"]))),128)),w((a(),r("span",{class:f(t.basicChooseButtonClass),style:v(l.style),onMouseup:i[12]||(i[12]=(...s)=>t.onBasicUploaderClick&&t.onBasicUploaderClick(...s)),onKeydown:i[13]||(i[13]=k((...s)=>t.choose&&t.choose(...s),["enter"])),onFocus:i[14]||(i[14]=(...s)=>t.onFocus&&t.onFocus(...s)),onBlur:i[15]||(i[15]=(...s)=>t.onBlur&&t.onBlur(...s)),tabindex:"0"},[o("span",{class:f(t.basicChooseButtonIconClass)},null,2),o("span",te,p(t.basicChooseButtonLabel),1),t.hasFiles?d("",!0):(a(),r("input",{key:0,ref:"fileInput",type:"file",accept:l.accept,disabled:l.disabled,multiple:l.multiple,onChange:i[9]||(i[9]=(...s)=>t.onFileSelect&&t.onFileSelect(...s)),onFocus:i[10]||(i[10]=(...s)=>t.onFocus&&t.onFocus(...s)),onBlur:i[11]||(i[11]=(...s)=>t.onBlur&&t.onBlur(...s))},null,40,ie))],38)),[[C]])])):d("",!0)}var ue=T(W,[["render",se]]);export{ue as default};
