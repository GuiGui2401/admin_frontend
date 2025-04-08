"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8929],{8168:(e,t,n)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{A:()=>s})},28645:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(9950),a=n(30377),l=n(69216),i=n(80737),o=n(25933),r=n(57811),d=n(72906),c=n(70030),u=n(44414);const{Text:h}=a.A,v=e=>{let{columns:t=[],setColumns:n}=e;const{t:a}=(0,c.B)(),[v,p]=(0,s.useState)(!1),m=(0,u.jsx)(l.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,u.jsx)(l.A.Item,{children:(0,u.jsxs)(i.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(o.A,{defaultChecked:!0,onClick:()=>{!function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e)}})]})},s)))});return(0,u.jsx)(r.A,{overlay:m,trigger:["click"],onVisibleChange:e=>{p(e)},visible:v,children:(0,u.jsx)(d.A,{style:{fontSize:"26px"}})})}},47992:(e,t,n)=>{n.d(t,{G:()=>d});var s=n(9950),a=n(95491),l=n.n(a),i=n(99674),o=n(90650),r=n(44414);const d=e=>{let{fetchOptions:t,debounceTimeout:n=400,...a}=e;const[d,c]=(0,s.useState)(!1),[u,h]=(0,s.useState)([]),v=(0,s.useMemo)((()=>l()((e=>{h([]),c(!0),t(e).then((e=>{h(e),c(!1)}))}),n)),[t,n]);return(0,r.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:v,notFoundContent:d?(0,r.jsx)(o.A,{size:"small"}):"no results",...a,options:u,onFocus:()=>{u.length||v("")}})}},48929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>O});var s=n(9950),a=n(92555),l=n(80737),i=n(12916),o=n(48538),r=n(20567),d=n(3754),c=n(54021),u=n(91854),h=n(74623),v=n(70030),p=n(88986),m=n(8168),A=n(47992),x=n(53271),f=n(63242),j=n(27741),g=n(91524),y=n(81446),b=n(92270),I=n(53774),k=n(44414);function w(e){var t,n,a,l,r,d,c;let{id:u,handleCancel:h}=e;const[p,m]=(0,s.useState)({}),[A,x]=(0,s.useState)(!1),{t:f}=(0,v.B)();return(0,s.useEffect)((()=>{!function(e){x(!0),b.A.getById(e).then((e=>m(e.data))).finally((()=>x(!1)))}(u)}),[u]),console.log(p),(0,k.jsx)(j.A,{visible:!!u,title:f("transaction"),onCancel:h,footer:(0,k.jsx)(o.A,{type:"default",onClick:h,children:f("cancel")}),children:A?(0,k.jsx)(y.A,{}):(0,k.jsxs)(g.A,{bordered:!0,children:[(0,k.jsx)(g.A.Item,{span:3,label:f("transaction.id"),children:p.id}),(0,k.jsxs)(g.A.Item,{span:3,label:f("client"),children:[null===(t=p.user)||void 0===t?void 0:t.firstname," ",null===(n=p.user)||void 0===n?void 0:n.lastname]}),(0,k.jsx)(g.A.Item,{span:3,label:f("price"),children:(0,I.A)(p.price,null===(a=p.payable)||void 0===a||null===(l=a.order)||void 0===l||null===(r=l.currency)||void 0===r?void 0:r.symbol)}),(0,k.jsx)(g.A.Item,{span:3,label:f("payment.type"),children:f(null===(d=p.payment_system)||void 0===d||null===(c=d.payment)||void 0===c?void 0:c.tag)}),(0,k.jsx)(g.A.Item,{span:3,label:f("created.at"),children:p.created_at}),(0,k.jsx)(g.A.Item,{span:3,label:f("status"),children:"progress"===p.status?(0,k.jsx)(i.A,{color:"gold",children:f(p.status)}):"rejected"===p.status?(0,k.jsx)(i.A,{color:"error",children:f(p.status)}):(0,k.jsx)(i.A,{color:"cyan",children:f(p.status)})}),(0,k.jsx)(g.A.Item,{span:3,label:f("status.description"),children:p.status_description}),(0,k.jsx)(g.A.Item,{span:3,label:f("note"),children:p.note})]})})}var _=n(28645);const{TabPane:C}=a.A,S=["all","progress","paid","rejected"];function O(){const e=(0,u.wA)(),{t:t}=(0,v.B)(),[n,j]=(0,s.useState)(null),[g,y]=(0,s.useState)([{title:t("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:t("client"),is_show:!0,dataIndex:"user",key:"user",render:e=>(0,k.jsxs)(l.A,{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})},{title:t("amount"),is_show:!0,dataIndex:"price",key:"price",render:(e,t)=>{var n,s,a;return(0,I.A)(e,null===(n=t.payable)||void 0===n||null===(s=n.order)||void 0===s||null===(a=s.currency)||void 0===a?void 0:a.symbol)}},{title:t("status"),is_show:!0,dataIndex:"status",key:"status",render:e=>(0,k.jsx)("div",{children:"progress"===e?(0,k.jsx)(i.A,{color:"gold",children:t(e)}):"rejected"===e?(0,k.jsx)(i.A,{color:"error",children:t(e)}):(0,k.jsx)(i.A,{color:"cyan",children:t(e)})})},{title:t("status.note"),is_show:!0,dataIndex:"status_description",key:"status_description"},{title:t("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:t("options"),is_show:!0,key:"options",render:(e,t)=>(0,k.jsx)(o.A,{icon:(0,k.jsx)(c.A,{}),onClick:()=>(e=>{j(e.id)})(t)})}]),{activeMenu:b}=(0,u.d4)((e=>e.menu),u.bN),{transactions:O,meta:M,loading:z,params:N}=(0,u.d4)((e=>e.transaction),u.bN),P=b.data;(0,p.A)((()=>{const t={sort:null===P||void 0===P?void 0:P.sort,column:null===P||void 0===P?void 0:P.column,perPage:null===P||void 0===P?void 0:P.perPage,page:null===P||void 0===P?void 0:P.page,user_id:null===P||void 0===P?void 0:P.userId,status:null===P||void 0===P?void 0:P.status};e((0,f.mh)(t))}),[b.data]),(0,s.useEffect)((()=>{if(b.refetch){const t={status:null===P||void 0===P?void 0:P.status};e((0,f.mh)(t)),e((0,h.km)(b))}}),[b.refetch]);const B=(t,n)=>{e((0,h.Ok)({activeMenu:b,data:{...P,[n]:t}}))};return(0,k.jsxs)(r.A,{title:t("transactions"),extra:(0,k.jsxs)(l.A,{children:[(0,k.jsx)(A.G,{placeholder:t("select.client"),fetchOptions:async function(e){const t={search:e,perPage:10};return x.A.search(t).then((e=>{let{data:t}=e;return t.map((e=>({label:`${e.firstname} ${e.lastname}`,value:e.id})))}))},onSelect:e=>B(e.value,"userId"),onDeselect:()=>B(null,"userId"),style:{minWidth:200}}),(0,k.jsx)(_.A,{columns:g,setColumns:y})]}),children:[(0,k.jsx)(a.A,{onChange:t=>{e("all"===t?(0,h.Ok)({activeMenu:b,data:{status:null}}):(0,h.Ok)({activeMenu:b,data:{status:t}}))},type:"card",activeKey:(null===P||void 0===P?void 0:P.status)||"all",children:S.map((e=>(0,k.jsx)(C,{tab:t(e)},e)))}),(0,k.jsx)(d.A,{columns:null===g||void 0===g?void 0:g.filter((e=>e.is_show)),dataSource:O,loading:z,pagination:{pageSize:N.perPage,page:N.page,total:M.total,defaultCurrent:N.page},rowKey:e=>e.id,onChange:function(t,n,s){const{pageSize:a,current:l}=t,{field:i,order:o}=s,r=(0,m.A)(o);e((0,h.Ok)({activeMenu:b,data:{...P,perPage:a,page:l,column:i,sort:r}}))}}),n&&(0,k.jsx)(w,{id:n,handleCancel:()=>j(null)})]})}},53774:(e,t,n)=>{function s(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}n.d(t,{A:()=>s})},54021:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(89379),a=n(9950),l=n(2104),i=n(16233),o=function(e,t){return a.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:l.A}))};o.displayName="EyeOutlined";const r=a.forwardRef(o)},72906:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(89379),a=n(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var i=n(16233),o=function(e,t){return a.createElement(i.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:l}))};o.displayName="MoreOutlined";const r=a.forwardRef(o)}}]);