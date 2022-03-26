import{ae as c,i as a,z as n,s as u,k as t,F as _,t as f,M as h,af as x,o as m}from"./vendor.05df324e.js";import{_ as v}from"./plugin-vue_export-helper.21dcd24c.js";var p=c();const y={name:"Terminal",props:{welcomeMessage:{type:String,default:null},prompt:{type:String,default:null}},data(){return{commandText:null,commands:[]}},mounted(){p.on("response",this.responseListener),this.$refs.input.focus()},updated(){this.$el.scrollTop=this.$el.scrollHeight},beforeUnmount(){p.off("response",this.responseListener)},methods:{onClick(){this.$refs.input.focus()},onKeydown(o){o.keyCode===13&&this.commandText&&(this.commands.push({text:this.commandText}),p.emit("command",this.commandText),this.commandText="")},responseListener(o){this.commands[this.commands.length-1].response=o}}},T={key:0},g={class:"p-terminal-content"},k={class:"p-terminal-prompt"},w={class:"p-terminal-command"},C={class:"p-terminal-response"},M={class:"p-terminal-prompt-container"},S={class:"p-terminal-prompt"};function K(o,s,r,L,l,i){return m(),a("div",{class:"p-terminal p-component",onClick:s[2]||(s[2]=(...e)=>i.onClick&&i.onClick(...e))},[r.welcomeMessage?(m(),a("div",T,n(r.welcomeMessage),1)):u("",!0),t("div",g,[(m(!0),a(_,null,f(l.commands,(e,d)=>(m(),a("div",{key:e.text+d.toString()},[t("span",k,n(r.prompt),1),t("span",w,n(e.text),1),t("div",C,n(e.response),1)]))),128))]),t("div",M,[t("span",S,n(r.prompt),1),h(t("input",{ref:"input",type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>l.commandText=e),class:"p-terminal-input",autocomplete:"off",onKeydown:s[1]||(s[1]=(...e)=>i.onKeydown&&i.onKeydown(...e))},null,544),[[x,l.commandText]])])])}var b=v(y,[["render",K]]);export{b as default};
