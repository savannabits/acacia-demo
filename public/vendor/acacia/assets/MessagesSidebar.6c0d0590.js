import d from"./ChannelMenu.2f609f72.js";import m from"./DirectMessages.dc53a387.js";import p from"./Channels.72c3bfbc.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";import{c as h,f as e,e as r,p as g,A as u,r as o,o as f}from"./main.9e765f7d.js";import"./user-avatar-32.07bf604b.js";import"./channel-03.0f70e96a.js";import"./user-32-02.82851062.js";import"./user-32-03.1f1508d2.js";import"./user-32-04.c5c2e17f.js";const v={name:"MessagesSidebar",props:["msgSidebarOpen"],components:{ChannelMenu:d,DirectMessages:m,Channels:p}},_={class:"sticky top-16 bg-white overflow-x-hidden overflow-y-auto no-scrollbar shrink-0 border-r border-gray-200 md:w-72 xl:w-80 h-[calc(100vh-64px)]"},w={class:"sticky top-0 z-10"},x={class:"flex items-center bg-white border-b border-gray-200 px-5 h-16"},y={class:"w-full flex items-center justify-between"},M=e("button",{class:"p-1.5 shrink-0 rounded border border-gray-200 hover:border-gray-300 shadow-sm ml-2"},[e("svg",{class:"w-4 h-4 fill-current text-gray-500",viewBox:"0 0 16 16"},[e("path",{d:"M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z"})])],-1),S={class:"px-5 py-4"},C=u('<form class="relative"><label for="msg-search" class="sr-only">Search</label><input id="msg-search" class="form-input w-full pl-9 focus:border-gray-300" type="search" placeholder="Search\u2026"><button class="absolute inset-0 right-auto group" type="submit" aria-label="Search"><svg class="w-4 h-4 shrink-0 fill-current text-gray-400 group-hover:text-gray-500 ml-3 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z"></path><path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z"></path></svg></button></form>',1);function z(a,s,t,O,k,B){const n=o("ChannelMenu"),l=o("DirectMessages"),i=o("Channels");return f(),h("div",{id:"messages-sidebar",class:g(["absolute z-20 top-0 bottom-0 w-full md:w-auto md:static md:top-auto md:bottom-auto -mr-px md:translate-x-0 transform transition-transform duration-200 ease-in-out",t.msgSidebarOpen?"translate-x-0":"-translate-x-full"])},[e("div",_,[e("div",null,[e("div",w,[e("div",x,[e("div",y,[r(n),M])])]),e("div",S,[C,r(l,{msgSidebarOpen:t.msgSidebarOpen,onCloseMsgsidebar:s[0]||(s[0]=c=>a.$emit("close-msgsidebar"))},null,8,["msgSidebarOpen"]),r(i,{msgSidebarOpen:t.msgSidebarOpen,onCloseMsgsidebar:s[1]||(s[1]=c=>a.$emit("close-msgsidebar"))},null,8,["msgSidebarOpen"])])])])],2)}var F=b(v,[["render",z]]);export{F as default};