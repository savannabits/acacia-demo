var $=Object.defineProperty,E=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(e,t,i)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,w=(e,t)=>{for(var i in t||(t={}))N.call(t,i)&&b(e,i,t[i]);if(I)for(var i of I(t))F.call(t,i)&&b(e,i,t[i]);return e},D=(e,t)=>E(e,k(t));import{s as R}from"./inputtext.esm.b08d2117.js";import{s as M}from"./button.esm.cbb15c31.js";import{_ as L}from"./plugin-vue_export-helper.21dcd24c.js";import{i as S,j as y,V as m,a3 as g,s as C,v as B,x as P,an as T,r as V,o as x}from"./vendor.05df324e.js";import"./ripple.esm.574b991d.js";const U={name:"InputNumber",inheritAttrs:!1,emits:["update:modelValue","input"],props:{modelValue:{type:Number,default:null},format:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},buttonLayout:{type:String,default:"stacked"},incrementButtonClass:{type:String,default:null},decrementButtonClass:{type:String,default:null},incrementButtonIcon:{type:String,default:"pi pi-angle-up"},decrementButtonIcon:{type:String,default:"pi pi-angle-down"},locale:{type:String,default:void 0},localeMatcher:{type:String,default:void 0},mode:{type:String,default:"decimal"},prefix:{type:String,default:null},suffix:{type:String,default:null},currency:{type:String,default:void 0},currencyDisplay:{type:String,default:void 0},useGrouping:{type:Boolean,default:!0},minFractionDigits:{type:Number,default:void 0},maxFractionDigits:{type:Number,default:void 0},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:1},allowEmpty:{type:Boolean,default:!0},style:null,class:null,inputStyle:null,inputClass:null},numberFormat:null,_numeral:null,_decimal:null,_group:null,_minusSign:null,_currency:null,_suffix:null,_prefix:null,_index:null,groupChar:"",isSpecialChar:null,prefixChar:null,suffixChar:null,timer:null,data(){return{d_modelValue:this.modelValue,focused:!1}},watch:{modelValue(e){this.d_modelValue=e},locale(e,t){this.updateConstructParser(e,t)},localeMatcher(e,t){this.updateConstructParser(e,t)},mode(e,t){this.updateConstructParser(e,t)},currency(e,t){this.updateConstructParser(e,t)},currencyDisplay(e,t){this.updateConstructParser(e,t)},useGrouping(e,t){this.updateConstructParser(e,t)},minFractionDigits(e,t){this.updateConstructParser(e,t)},maxFractionDigits(e,t){this.updateConstructParser(e,t)},suffix(e,t){this.updateConstructParser(e,t)},prefix(e,t){this.updateConstructParser(e,t)}},created(){this.constructParser()},methods:{getOptions(){return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:this.minFractionDigits,maximumFractionDigits:this.maxFractionDigits}},constructParser(){this.numberFormat=new Intl.NumberFormat(this.locale,this.getOptions());const e=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),t=new Map(e.map((i,s)=>[i,s]));this._numeral=new RegExp(`[${e.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=i=>t.get(i)},updateConstructParser(e,t){e!==t&&this.constructParser()},escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},getDecimalExpression(){const e=new Intl.NumberFormat(this.locale,D(w({},this.getOptions()),{useGrouping:!1}));return new RegExp(`[${e.format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}]`,"g")},getGroupingExpression(){const e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")},getMinusSignExpression(){const e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")},getCurrencyExpression(){if(this.currency){const e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")},getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{const e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")},getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{const e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")},formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let i=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&(i=this.prefix+i),this.suffix&&(i=i+this.suffix),i}return e.toString()}return""},parseValue(e){let t=e.replace(this._suffix,"").replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(t){if(t==="-")return t;let i=+t;return isNaN(i)?null:i}return null},repeat(e,t,i){let s=t||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,i)},s),this.spin(e,i)},spin(e,t){if(this.$refs.input){let i=this.step*t,s=this.parseValue(this.$refs.input.$el.value)||0,n=this.validateValue(s+i);this.updateInput(n,null,"spin"),this.updateModel(e,n),this.handleOnInput(e,s,n)}},onUpButtonMouseDown(e){this.$attrs.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,1),e.preventDefault())},onUpButtonMouseUp(){this.$attrs.disabled||this.clearTimer()},onUpButtonMouseLeave(){this.$attrs.disabled||this.clearTimer()},onUpButtonKeyUp(){this.$attrs.disabled||this.clearTimer()},onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)},onDownButtonMouseDown(e){this.$attrs.disabled||(this.$refs.input.$el.focus(),this.repeat(e,null,-1),e.preventDefault())},onDownButtonMouseUp(){this.$attrs.disabled||this.clearTimer()},onDownButtonMouseLeave(){this.$attrs.disabled||this.clearTimer()},onDownButtonKeyUp(){this.$attrs.disabled||this.clearTimer()},onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)},onUserInput(){this.isSpecialChar&&(this.$refs.input.$el.value=this.lastValue),this.isSpecialChar=!1},onInputKeyDown(e){if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let t=e.target.selectionStart,i=e.target.selectionEnd,s=e.target.value,n=null;switch(e.altKey&&e.preventDefault(),e.which){case 38:this.spin(e,1),e.preventDefault();break;case 40:this.spin(e,-1),e.preventDefault();break;case 37:this.isNumeralChar(s.charAt(t-1))||e.preventDefault();break;case 39:this.isNumeralChar(s.charAt(t))||e.preventDefault();break;case 13:n=this.validateValue(this.parseValue(s)),this.$refs.input.$el.value=this.formatValue(n),this.$refs.input.$el.setAttribute("aria-valuenow",n),this.updateModel(e,n);break;case 8:{if(e.preventDefault(),t===i){const l=s.charAt(t-1),{decimalCharIndex:r,decimalCharIndexWithoutPrefix:u}=this.getDecimalCharIndexes(s);if(this.isNumeralChar(l)){const a=this.getDecimalLength(s);if(this._group.test(l))this._group.lastIndex=0,n=s.slice(0,t-2)+s.slice(t-1);else if(this._decimal.test(l))this._decimal.lastIndex=0,a?this.$refs.input.$el.setSelectionRange(t-1,t-1):n=s.slice(0,t-1)+s.slice(t);else if(r>0&&t>r){const h=this.isDecimalMode()&&(this.minFractionDigits||0)<a?"":"0";n=s.slice(0,t-1)+h+s.slice(t)}else u===1?(n=s.slice(0,t-1)+"0"+s.slice(t),n=this.parseValue(n)>0?n:""):n=s.slice(0,t-1)+s.slice(t)}this.updateValue(e,n,null,"delete-single")}else n=this.deleteRange(s,t,i),this.updateValue(e,n,null,"delete-range");break}case 46:if(e.preventDefault(),t===i){const l=s.charAt(t),{decimalCharIndex:r,decimalCharIndexWithoutPrefix:u}=this.getDecimalCharIndexes(s);if(this.isNumeralChar(l)){const a=this.getDecimalLength(s);if(this._group.test(l))this._group.lastIndex=0,n=s.slice(0,t)+s.slice(t+2);else if(this._decimal.test(l))this._decimal.lastIndex=0,a?this.$refs.input.$el.setSelectionRange(t+1,t+1):n=s.slice(0,t)+s.slice(t+1);else if(r>0&&t>r){const h=this.isDecimalMode()&&(this.minFractionDigits||0)<a?"":"0";n=s.slice(0,t)+h+s.slice(t+1)}else u===1?(n=s.slice(0,t)+"0"+s.slice(t+1),n=this.parseValue(n)>0?n:""):n=s.slice(0,t)+s.slice(t+1)}this.updateValue(e,n,null,"delete-back-single")}else n=this.deleteRange(s,t,i),this.updateValue(e,n,null,"delete-range");break}},onInputKeyPress(e){e.preventDefault();let t=e.which||e.keyCode,i=String.fromCharCode(t);const s=this.isDecimalSign(i),n=this.isMinusSign(i);(48<=t&&t<=57||n||s)&&this.insert(e,i,{isDecimalSign:s,isMinusSign:n})},onPaste(e){e.preventDefault();let t=(e.clipboardData||window.clipboardData).getData("Text");if(t){let i=this.parseValue(t);i!=null&&this.insert(e,i.toString())}},allowMinusSign(){return this.min===null||this.min<0},isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1},isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1},isDecimalMode(){return this.mode==="decimal"},getDecimalCharIndexes(e){let t=e.search(this._decimal);this._decimal.lastIndex=0;const s=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:t,decimalCharIndexWithoutPrefix:s}},getCharIndexes(e){const t=e.search(this._decimal);this._decimal.lastIndex=0;const i=e.search(this._minusSign);this._minusSign.lastIndex=0;const s=e.search(this._suffix);this._suffix.lastIndex=0;const n=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:t,minusCharIndex:i,suffixCharIndex:s,currencyCharIndex:n}},insert(e,t,i={isDecimalSign:!1,isMinusSign:!1}){const s=t.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&s!==-1)return;const n=this.$refs.input.$el.selectionStart,l=this.$refs.input.$el.selectionEnd;let r=this.$refs.input.$el.value.trim();const{decimalCharIndex:u,minusCharIndex:a,suffixCharIndex:h,currencyCharIndex:p}=this.getCharIndexes(r);let o;if(i.isMinusSign)n===0&&(o=r,(a===-1||l!==0)&&(o=this.insertText(r,t,0,l)),this.updateValue(e,o,t,"insert"));else if(i.isDecimalSign)u>0&&n===u?this.updateValue(e,r,t,"insert"):u>n&&u<l?(o=this.insertText(r,t,n,l),this.updateValue(e,o,t,"insert")):u===-1&&this.maxFractionDigits&&(o=this.insertText(r,t,n,l),this.updateValue(e,o,t,"insert"));else{const d=this.numberFormat.resolvedOptions().maximumFractionDigits,c=n!==l?"range-insert":"insert";if(u>0&&n>u){if(n+t.length-(u+1)<=d){const f=p>=n?p-1:h>=n?h:r.length;o=r.slice(0,n)+t+r.slice(n+t.length,f)+r.slice(f),this.updateValue(e,o,t,c)}}else o=this.insertText(r,t,n,l),this.updateValue(e,o,t,c)}},insertText(e,t,i,s){if((t==="."?t:t.split(".")).length===2){const l=e.slice(i,s).search(this._decimal);return this._decimal.lastIndex=0,l>0?e.slice(0,i)+this.formatValue(t)+e.slice(s):e||this.formatValue(t)}else return s-i===e.length?this.formatValue(t):i===0?t+e.slice(s):s===e.length?e.slice(0,i)+t:e.slice(0,i)+t+e.slice(s)},deleteRange(e,t,i){let s;return i-t===e.length?s="":t===0?s=e.slice(i):i===e.length?s=e.slice(0,t):s=e.slice(0,t)+e.slice(i),s},initCursor(){let e=this.$refs.input.$el.selectionStart,t=this.$refs.input.$el.value,i=t.length,s=null,n=(this.prefixChar||"").length;t=t.replace(this._prefix,""),e=e-n;let l=t.charAt(e);if(this.isNumeralChar(l))return e+n;let r=e-1;for(;r>=0;)if(l=t.charAt(r),this.isNumeralChar(l)){s=r+n;break}else r--;if(s!==null)this.$refs.input.$el.setSelectionRange(s+1,s+1);else{for(r=e;r<i;)if(l=t.charAt(r),this.isNumeralChar(l)){s=r+n;break}else r++;s!==null&&this.$refs.input.$el.setSelectionRange(s,s)}return s||0},onInputClick(){this.initCursor()},isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1},resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0},updateValue(e,t,i,s){let n=this.$refs.input.$el.value,l=null;t!=null&&(l=this.parseValue(t),l=!l&&!this.allowEmpty?0:l,this.updateInput(l,i,s,t),this.handleOnInput(e,n,l))},handleOnInput(e,t,i){this.isValueChanged(t,i)&&this.$emit("input",{originalEvent:e,value:i})},isValueChanged(e,t){if(t===null&&e!==null)return!0;if(t!=null){let i=typeof e=="string"?this.parseValue(e):e;return t!==i}return!1},validateValue(e){return e==="-"||e==null?null:this.min!=null&&e<this.min?this.min:this.max!=null&&e>this.max?this.max:e},updateInput(e,t,i,s){t=t||"";let n=this.$refs.input.$el.value,l=this.formatValue(e),r=n.length;if(l!==s&&(l=this.concatValues(l,s)),r===0){this.$refs.input.$el.value=l,this.$refs.input.$el.setSelectionRange(0,0);const a=this.initCursor()+t.length;this.$refs.input.$el.setSelectionRange(a,a)}else{let u=this.$refs.input.$el.selectionStart,a=this.$refs.input.$el.selectionEnd;this.$refs.input.$el.value=l;let h=l.length;if(i==="range-insert"){const p=this.parseValue((n||"").slice(0,u)),d=(p!==null?p.toString():"").split("").join(`(${this.groupChar})?`),c=new RegExp(d,"g");c.test(l);const f=t.split("").join(`(${this.groupChar})?`),_=new RegExp(f,"g");_.test(l.slice(c.lastIndex)),a=c.lastIndex+_.lastIndex,this.$refs.input.$el.setSelectionRange(a,a)}else if(h===r)i==="insert"||i==="delete-back-single"?this.$refs.input.$el.setSelectionRange(a+1,a+1):i==="delete-single"?this.$refs.input.$el.setSelectionRange(a-1,a-1):(i==="delete-range"||i==="spin")&&this.$refs.input.$el.setSelectionRange(a,a);else if(i==="delete-back-single"){let p=n.charAt(a-1),o=n.charAt(a),d=r-h,c=this._group.test(o);c&&d===1?a+=1:!c&&this.isNumeralChar(p)&&(a+=-1*d+1),this._group.lastIndex=0,this.$refs.input.$el.setSelectionRange(a,a)}else if(n==="-"&&i==="insert"){this.$refs.input.$el.setSelectionRange(0,0);const o=this.initCursor()+t.length+1;this.$refs.input.$el.setSelectionRange(o,o)}else a=a+(h-r),this.$refs.input.$el.setSelectionRange(a,a)}this.$refs.input.$el.setAttribute("aria-valuenow",e)},concatValues(e,t){if(e&&t){let i=t.search(this._decimal);return this._decimal.lastIndex=0,i!==-1?e.split(this._decimal)[0]+t.slice(i):e}return e},getDecimalLength(e){if(e){const t=e.split(this._decimal);if(t.length===2)return t[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0},updateModel(e,t){this.d_modelValue=t,this.$emit("update:modelValue",t)},onInputFocus(){this.focused=!0},onInputBlur(e){this.focused=!1;let t=e.target,i=this.validateValue(this.parseValue(t.value));t.value=this.formatValue(i),t.setAttribute("aria-valuenow",i),this.updateModel(e,i)},clearTimer(){this.timer&&clearInterval(this.timer)},maxBoundry(){return this.d_modelValue>=this.max},minBoundry(){return this.d_modelValue<=this.min}},computed:{containerClass(){return["p-inputnumber p-component p-inputwrapper",this.class,{"p-inputwrapper-filled":this.filled,"p-inputwrapper-focus":this.focused,"p-inputnumber-buttons-stacked":this.showButtons&&this.buttonLayout==="stacked","p-inputnumber-buttons-horizontal":this.showButtons&&this.buttonLayout==="horizontal","p-inputnumber-buttons-vertical":this.showButtons&&this.buttonLayout==="vertical"}]},upButtonClass(){return["p-inputnumber-button p-inputnumber-button-up",this.incrementButtonClass,{"p-disabled":this.showButtons&&this.max!==null&&this.maxBoundry()}]},downButtonClass(){return["p-inputnumber-button p-inputnumber-button-down",this.decrementButtonClass,{"p-disabled":this.showButtons&&this.min!==null&&this.minBoundry()}]},filled(){return this.modelValue!=null&&this.modelValue.toString().length>0},upButtonListeners(){return{mousedown:e=>this.onUpButtonMouseDown(e),mouseup:e=>this.onUpButtonMouseUp(e),mouseleave:e=>this.onUpButtonMouseLeave(e),keydown:e=>this.onUpButtonKeyDown(e),keyup:e=>this.onUpButtonKeyUp(e)}},downButtonListeners(){return{mousedown:e=>this.onDownButtonMouseDown(e),mouseup:e=>this.onDownButtonMouseUp(e),mouseleave:e=>this.onDownButtonMouseLeave(e),keydown:e=>this.onDownButtonKeyDown(e),keyup:e=>this.onDownButtonKeyUp(e)}},formattedValue(){const e=!this.modelValue&&!this.allowEmpty?0:this.modelValue;return this.formatValue(e)},getFormatter(){return this.numberFormat}},components:{INInputText:R,INButton:M}},K={key:0,class:"p-inputnumber-button-group"};function A(e,t,i,s,n,l){const r=V("INInputText"),u=V("INButton");return x(),S("span",{class:P(l.containerClass),style:T(i.style)},[y(r,m({ref:"input",class:["p-inputnumber-input",i.inputClass],style:i.inputStyle,value:l.formattedValue},e.$attrs,{"aria-valumin":i.min,"aria-valuemax":i.max,onInput:l.onUserInput,onKeydown:l.onInputKeyDown,onKeypress:l.onInputKeyPress,onPaste:l.onPaste,onClick:l.onInputClick,onFocus:l.onInputFocus,onBlur:l.onInputBlur}),null,16,["class","style","value","aria-valumin","aria-valuemax","onInput","onKeydown","onKeypress","onPaste","onClick","onFocus","onBlur"]),i.showButtons&&i.buttonLayout==="stacked"?(x(),S("span",K,[y(u,m({class:l.upButtonClass,icon:i.incrementButtonIcon},g(l.upButtonListeners),{disabled:e.$attrs.disabled}),null,16,["class","icon","disabled"]),y(u,m({class:l.downButtonClass,icon:i.decrementButtonIcon},g(l.downButtonListeners),{disabled:e.$attrs.disabled}),null,16,["class","icon","disabled"])])):C("",!0),i.showButtons&&i.buttonLayout!=="stacked"?(x(),B(u,m({key:1,class:l.upButtonClass,icon:i.incrementButtonIcon},g(l.upButtonListeners),{disabled:e.$attrs.disabled}),null,16,["class","icon","disabled"])):C("",!0),i.showButtons&&i.buttonLayout!=="stacked"?(x(),B(u,m({key:2,class:l.downButtonClass,icon:i.decrementButtonIcon},g(l.downButtonListeners),{disabled:e.$attrs.disabled}),null,16,["class","icon","disabled"])):C("",!0)],6)}var q=L(U,[["render",A]]);export{q as default};
