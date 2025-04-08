"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8530],{8168:(e,t,n)=>{function s(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{A:()=>s})},28645:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(9950),a=n(30377),i=n(69216),l=n(80737),r=n(25933),d=n(57811),o=n(72906),c=n(70030),u=n(44414);const{Text:h}=a.A,m=e=>{let{columns:t=[],setColumns:n}=e;const{t:a}=(0,c.B)(),[m,v]=(0,s.useState)(!1),x=(0,u.jsx)(i.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,u.jsx)(i.A.Item,{children:(0,u.jsxs)(l.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(r.A,{defaultChecked:!0,onClick:()=>{!function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(s)}(e)}})]})},s)))});return(0,u.jsx)(d.A,{overlay:x,trigger:["click"],onVisibleChange:e=>{v(e)},visible:m,children:(0,u.jsx)(o.A,{style:{fontSize:"26px"}})})}},53387:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(89379),a=n(9950);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var l=n(16233),r=function(e,t){return a.createElement(l.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:i}))};r.displayName="PlusCircleOutlined";const d=a.forwardRef(r)},68530:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var s=n(9950),a=n(12916),i=n(80737),l=n(48538),r=n(3754),d=n(84509),o=n(89822),c=n(25887),u=n(27741),h=n(93124),m=n(17811),v=n(70030),x=n(91854),p=n(43453),A=n(44414);function f(e){let{inviteId:t,handleCancel:n}=e;const{t:a}=(0,v.B)(),[i]=c.A.useForm(),r=(0,x.wA)(),[d,f]=(0,s.useState)(!1);return(0,A.jsx)(u.A,{title:a("accept.invite"),visible:!!t,onCancel:n,footer:[(0,A.jsx)(l.A,{type:"primary",onClick:()=>i.submit(),loading:d,children:a("save")},"save-btn"),(0,A.jsx)(l.A,{type:"default",onClick:n,children:a("cancel")},"cancel-btn")],children:(0,A.jsxs)(c.A,{form:i,layout:"vertical",onFinish:e=>{const s={role:e.role};f(!0),o.A.statusUpdate(t.id,s).then((()=>{n(),r((0,p.P)())})).finally((()=>f(!1)))},children:[(0,A.jsx)(c.A.Item,{label:a("user"),children:(0,A.jsx)(h.A,{value:t.user.firstname+" "+t.user.lastname,disabled:!0})}),(0,A.jsx)(c.A.Item,{label:a("select.role"),name:"role",rules:[{required:!0,message:a("required")}],children:(0,A.jsxs)(m.Ay.Group,{optionType:"button",children:[(0,A.jsx)(m.Ay,{value:"moderator",children:a("moderator")}),(0,A.jsx)(m.Ay,{value:"deliveryman",children:a("deliveryman")})]})})]})})}var j=n(55386),g=n(76083),y=n(74623),b=n(8168),k=n(88986);function w(){const{t:e}=(0,v.B)(),t=(0,x.wA)(),{activeMenu:n}=(0,x.d4)((e=>e.menu),x.bN),{loading:c,invites:u,params:h,meta:m}=(0,x.d4)((e=>e.invite),x.bN),[w,C]=(0,s.useState)(null),{setIsModalVisible:I}=(0,s.useContext)(j.o),[_,S]=(0,s.useState)(null),[z,P]=(0,s.useState)(!1),[M,N]=(0,s.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:e("fullname"),is_show:!0,dataIndex:"user",key:"user",render:e=>(null===e||void 0===e?void 0:e.firstname)+" "+(null===e||void 0===e?void 0:e.lastname)},{title:e("role"),is_show:!0,dataIndex:"role",key:"role"},{title:e("status"),is_show:!0,dataIndex:"status",key:"status",render:t=>(0,A.jsx)(a.A,{color:"rejected"===t?"red":"new"===t?"blue":"cyan",children:e(t)})},{title:e("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at"},{title:e("options"),is_show:!0,key:"options",dataIndex:"options",render:(t,n)=>(0,A.jsxs)(i.A,{children:[(0,A.jsx)(l.A,{type:"primary",onClick:()=>C(n),disabled:"excepted"===n.status,children:e("accept")}),(0,A.jsx)(l.A,{type:"primary",danger:!0,onClick:()=>{I(!0),S(n.id)},disabled:"rejected"===n.status,children:e("reject")})]})}]);return(0,s.useEffect)((()=>{n.refetch&&(t((0,p.P)()),t((0,y.km)(n)))}),[n.refetch]),(0,k.A)((()=>{const e=n.data,s={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};t((0,p.P)(s))}),[n.data]),(0,A.jsxs)(d.A,{headerTitle:e("invites"),columns:M,setColumns:N,children:[(0,A.jsx)(r.A,{columns:null===M||void 0===M?void 0:M.filter((e=>e.is_show)),dataSource:u,pagination:{pageSize:h.perPage,page:h.page,total:m.total,defaultCurrent:h.page},rowKey:e=>e.id,onChange:function(e,s,a){const{pageSize:i,current:l}=e,{field:r,order:d}=a,o=(0,b.A)(d);t((0,y.Ok)({activeMenu:n,data:{perPage:i,page:l,column:r,sort:o}}))},loading:c}),!!w&&(0,A.jsx)(f,{inviteId:w,handleCancel:()=>C(null)}),(0,A.jsx)(g.A,{click:function(){P(!0),o.A.statusUpdate(_).then((()=>{I(!1),S(null),t((0,p.P)())})).finally((()=>P(!1)))},text:e("reject.invite"),loading:z})]})}},72906:(e,t,n)=>{n.d(t,{A:()=>d});var s=n(89379),a=n(9950);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var l=n(16233),r=function(e,t){return a.createElement(l.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:i}))};r.displayName="MoreOutlined";const d=a.forwardRef(r)},84509:(e,t,n)=>{n.d(t,{A:()=>h});n(9950);var s=n(28429),a=n(20567),i=n(80737),l=n(48538),r=n(91854),d=n(74623),o=n(53387),c=n(28645),u=n(44414);const h=e=>{let{children:t,containerName:n,headerTitle:h,navLInkTo:m,buttonTitle:v,setColumns:x,columns:p=[]}=e;const A=(0,r.wA)(),f=(0,s.Zp)();return(0,u.jsx)("div",{className:n,children:(0,u.jsx)(a.A,{title:h,extra:(0,u.jsxs)(i.A,{children:[v?(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(l.A,{type:"primary",style:{marginRight:"15px"},icon:(0,u.jsx)(o.A,{}),onClick:()=>{let e="";const t=m.split("");"/"===t[0]&&t.shift(),e=t.join("");const n={id:e,url:e,name:v};A((0,d.X4)(n)),f(m)},children:v})}):null,(0,u.jsx)(c.A,{setColumns:x,columns:p})]}),children:t})})}}}]);