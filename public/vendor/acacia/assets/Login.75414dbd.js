import w from"./Button.cd366101.js";import z from"./Checkbox.766944e0.js";import g from"./Guest.af2cb506.js";import v from"./Input.0cf43461.js";import y from"./Label.55e13604.js";import V from"./ValidationErrors.92df425c.js";import{am as L,L as j,i as c,j as s,z as C,s as u,k as r,v as E,w as p,x as F,B as I,F as N,r as a,o as m,y as f}from"./vendor.05df324e.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";import"./ApplicationLogo.7f51539d.js";const H={layout:g,components:{BreezeButton:w,BreezeCheckbox:z,BreezeInput:v,BreezeLabel:y,BreezeValidationErrors:V,Head:L,Link:j},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}},P={key:0,class:"mb-4 font-medium text-sm text-green-600"},R={class:"mt-4"},S={class:"block mt-4"},U={class:"flex items-center"},G=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),A={class:"flex items-center justify-end mt-4"},D=f(" Forgot your password? "),M=f(" Log in ");function T(_,e,n,J,o,l){const b=a("Head"),B=a("BreezeValidationErrors"),i=a("BreezeLabel"),d=a("BreezeInput"),h=a("BreezeCheckbox"),k=a("Link"),x=a("BreezeButton");return m(),c(N,null,[s(b,{title:"Log in"}),s(B,{class:"mb-4"}),n.status?(m(),c("div",P,C(n.status),1)):u("",!0),r("form",{onSubmit:e[3]||(e[3]=I((...t)=>l.submit&&l.submit(...t),["prevent"]))},[r("div",null,[s(i,{for:"email",value:"Email"}),s(d,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.email=t),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"])]),r("div",R,[s(i,{for:"password",value:"Password"}),s(d,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.password=t),required:"",autocomplete:"current-password"},null,8,["modelValue"])]),r("div",S,[r("label",U,[s(h,{name:"remember",checked:o.form.remember,"onUpdate:checked":e[2]||(e[2]=t=>o.form.remember=t)},null,8,["checked"]),G])]),r("div",A,[n.canResetPassword?(m(),E(k,{key:0,href:_.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:p(()=>[D]),_:1},8,["href"])):u("",!0),s(x,{class:F(["ml-4",{"opacity-25":o.form.processing}]),disabled:o.form.processing},{default:p(()=>[M]),_:1},8,["class","disabled"])])],32)],64)}var oe=q(H,[["render",T]]);export{oe as default};