"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3925],{28645:(e,t,i)=>{i.d(t,{A:()=>v});var n=i(9950),s=i(30377),r=i(69216),l=i(80737),a=i(25933),d=i(57811),o=i(72906),c=i(70030),u=i(44414);const{Text:h}=s.A,v=e=>{let{columns:t=[],setColumns:i}=e;const{t:s}=(0,c.B)(),[v,x]=(0,n.useState)(!1),m=(0,u.jsx)(r.A,{children:null===t||void 0===t?void 0:t.map(((e,n)=>(0,u.jsx)(r.A.Item,{children:(0,u.jsxs)(l.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(a.A,{defaultChecked:!0,onClick:()=>{!function(e){const n=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));i(n)}(e)}})]})},n)))});return(0,u.jsx)(d.A,{overlay:m,trigger:["click"],onVisibleChange:e=>{x(e)},visible:v,children:(0,u.jsx)(o.A,{style:{fontSize:"26px"}})})}},33925:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var n=i(9950),s=i(12916),r=i(20567),l=i(80737),a=i(3754),d=i(91854),o=i(74623),c=i(70030),u=i(35225),h=i(28645),v=i(44414);const x=()=>{const{t:e}=(0,c.B)(),t=(0,d.wA)(),[i,x]=(0,n.useState)([{title:e("id"),dataIndex:"id",key:"id",is_show:!0},{title:e("title"),dataIndex:"title",key:"title",is_show:!0,render:(e,t)=>{var i,n;return(0,v.jsx)("div",{children:(null===t||void 0===t||null===(i=t.user)||void 0===i?void 0:i.firstname)+" "+(null===t||void 0===t||null===(n=t.user)||void 0===n?void 0:n.lastname)})}},{title:e("email"),dataIndex:"email",key:"email",is_show:!0,render:(e,t)=>{var i;return(0,v.jsx)("div",{children:p(null===(i=t.user)||void 0===i?void 0:i.email)})}},{title:e("status"),dataIndex:"active",key:"active",is_show:!0,render:t=>(0,v.jsx)(s.A,{color:!0===t?"blue":"red",children:e(!0===t?"subscriber":"not.subscriber")})}]),{activeMenu:m}=(0,d.d4)((e=>e.menu),d.bN),{subscriber:b,meta:f,loading:g}=(0,d.d4)((e=>e.subscriber),d.bN);let p=function(e){return null===e||void 0===e?void 0:e.replace(/(.{3})(.*)(?=@)/,(function(e,t){for(let i=0;i<t.length;i++)e+="*";return e}))};(0,n.useEffect)((()=>{m.refetch&&(t((0,u.J)()),t((0,o.km)(m)))}),[m.refetch]);return(0,v.jsx)(r.A,{title:e("subscriber"),extra:(0,v.jsx)(l.A,{children:(0,v.jsx)(h.A,{columns:i,setColumns:x})}),children:(0,v.jsx)(a.A,{scroll:{x:1024},columns:null===i||void 0===i?void 0:i.filter((e=>e.is_show)),dataSource:b,pagination:{pageSize:f.per_page,page:f.current_page,total:f.total},rowKey:e=>e.id,loading:g,onChange:e=>{const{pageSize:i,current:n}=e;t((0,u.J)({perPage:i,page:n}))}})})}},72906:(e,t,i)=>{i.d(t,{A:()=>d});var n=i(89379),s=i(9950);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var l=i(16233),a=function(e,t){return s.createElement(l.A,(0,n.A)((0,n.A)({},e),{},{ref:t,icon:r}))};a.displayName="MoreOutlined";const d=s.forwardRef(a)}}]);