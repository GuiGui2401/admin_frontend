"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[425],{13435:()=>{},28645:(e,t,n)=>{n.d(t,{A:()=>p});var s=n(9950),i=n(66362),o=n(69216),a=n(80737),l=n(25933),r=n(57811),c=n(72906),d=n(70030),u=n(44414);const{Text:h}=i.A,p=e=>{let{columns:t=[],setColumns:n}=e;const{t:i}=(0,d.B)(),[p,g]=(0,s.useState)(!1),x=(0,u.jsx)(o.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,u.jsx)(o.A.Item,{children:(0,u.jsxs)(a.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(l.A,{defaultChecked:!0,onClick:()=>{!function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e)}})]})},s)))});return(0,u.jsx)(r.A,{overlay:x,trigger:["click"],onVisibleChange:e=>{g(e)},visible:p,children:(0,u.jsx)(c.A,{style:{fontSize:"26px"}})})}},35116:(e,t,n)=>{n.d(t,{A:()=>c});n(9950);var s=n(48538),i=n(44070),o=n(49348),a=n(70030),l=n(13311),r=n(44414);function c(e){let{onClick:t,type:n="default",...c}=e;const{t:d}=(0,a.B)(),{isDemo:u}=(0,l.A)();return(0,r.jsx)(s.A,{icon:(0,r.jsx)(i.A,{}),onClick:()=>{console.log(u),u?o.oR.warning(d("cannot.work.demo")):t()},type:n,...c})}},53387:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(89379),i=n(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var a=n(25085),l=function(e,t){return i.createElement(a.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:o}))};const r=i.forwardRef(l)},60425:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var s=n(9950),i=(n(13435),n(24513)),o=n(44070),a=n(53387),l=n(12916),r=n(80737),c=n(48538),d=n(20567),u=n(87094),h=n(41988),p=n(73092),g=n(49348),x=(n(85306),n(76083)),A=n(55386),m=n(91854),j=n(28429),v=n(74623),f=n(70030),k=(n(84509),n(2273)),y=n(53237),w=n(35116),C=n(28645),b=n(44414);const _=()=>{const{t:e}=(0,f.B)(),t=(0,m.wA)(),n=(0,j.Zp)(),[_,I]=(0,s.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id"},{title:e("title"),is_show:!0,dataIndex:"title",key:"title",render:(e,t)=>{var n;return null===(n=t.translation)||void 0===n?void 0:n.title}},{title:e("active"),is_show:!0,dataIndex:"status",key:"status",render:t=>1===t?(0,b.jsx)(l.A,{color:"cyan",children:e("active")}):(0,b.jsx)(l.A,{color:"yellow",children:e("inactive")})},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(e,t)=>(0,b.jsxs)(r.A,{children:[(0,b.jsx)(c.A,{type:"primary",icon:(0,b.jsx)(i.A,{}),onClick:()=>S(t.id)}),(0,b.jsx)(c.A,{icon:(0,b.jsx)(o.A,{}),onClick:()=>{R([t.id]),z(!0)}})]})}]),S=s=>{t((0,v.X4)({id:"group-edit",url:`groups/${s}`,name:e("edit.group")})),n(`/group/${s}`)},{setIsModalVisible:z}=(0,s.useContext)(A.o),[N,B]=(0,s.useState)(!1),[M,R]=(0,s.useState)([]),{activeMenu:T}=(0,m.d4)((e=>e.menu),m.bN),{groups:V,meta:E,loading:X}=(0,m.d4)((e=>e.group),m.bN),H=()=>{B(!0),y.A.delete({ids:M}).then((()=>{g.oR.success(e("successfully.deleted")),t((0,k.p)({page:1,perPage:10})),z(!1)})).finally((()=>B(!1)))};(0,s.useEffect)((()=>{T.refetch&&(t((0,k.p)()),t((0,v.km)(T)))}),[T.refetch]);const L={onChange:(e,t)=>{R(e)}};return(0,b.jsxs)(d.A,{title:e("groups"),navLInkTo:"/groups/add",children:[(0,b.jsx)(u.A,{gutter:24,className:"mb-2",children:(0,b.jsx)(h.A,{span:24,className:"d-flex justify-content-end",children:(0,b.jsxs)(r.A,{children:[(0,b.jsx)(c.A,{type:"primary",icon:(0,b.jsx)(a.A,{}),onClick:()=>{t((0,v.X4)({id:"groups/add",url:"groups/add",name:e("add.groups")})),n("/groups/add")},children:e("add.group")}),(0,b.jsx)(w.A,{onClick:H,type:"danger",disabled:Boolean(!(null!==M&&void 0!==M&&M.length)),children:e("delete.all")}),(0,b.jsx)(C.A,{setColumns:I,columns:_})]})})}),(0,b.jsx)(p.A,{rowSelection:L,columns:null===_||void 0===_?void 0:_.filter((e=>e.is_show)),dataSource:V,pagination:{pageSize:E.per_page,page:E.current_page,total:E.total},rowKey:e=>e.id,onChange:e=>{const{pageSize:n,current:s}=e;t((0,k.p)({perPage:n,page:s}))},loading:X}),(0,b.jsx)(x.A,{click:H,text:e("delete.group"),loading:N})]})}},72906:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(89379),i=n(9950);const o={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var a=n(25085),l=function(e,t){return i.createElement(a.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:o}))};const r=i.forwardRef(l)},84509:(e,t,n)=>{n.d(t,{A:()=>h});n(9950);var s=n(28429),i=n(20567),o=n(80737),a=n(48538),l=n(91854),r=n(74623),c=n(53387),d=n(28645),u=n(44414);const h=e=>{let{children:t,containerName:n,headerTitle:h,navLInkTo:p,buttonTitle:g,setColumns:x,columns:A=[]}=e;const m=(0,l.wA)(),j=(0,s.Zp)();return(0,u.jsx)("div",{className:n,children:(0,u.jsx)(i.A,{title:h,extra:(0,u.jsxs)(o.A,{children:[g?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(a.A,{type:"primary",style:{marginRight:"15px"},icon:(0,u.jsx)(c.A,{}),onClick:()=>{let e="";const t=p.split("");"/"===t[0]&&t.shift(),e=t.join("");const n={id:e,url:e,name:g};m((0,r.X4)(n)),j(p)},children:g})}):null,(0,u.jsx)(d.A,{setColumns:x,columns:A})]}),children:t})})}},85306:()=>{}}]);