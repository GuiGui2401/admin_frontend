"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6284],{13435:()=>{},28645:(e,t,n)=>{n.d(t,{A:()=>x});var i=n(9950),s=n(66362),a=n(69216),d=n(80737),o=n(25933),c=n(57811),r=n(72906),l=n(70030),u=n(44414);const{Text:h}=s.A,x=e=>{let{columns:t=[],setColumns:n}=e;const{t:s}=(0,l.B)(),[x,f]=(0,i.useState)(!1),p=(0,u.jsx)(a.A,{children:null===t||void 0===t?void 0:t.map(((e,i)=>(0,u.jsx)(a.A.Item,{children:(0,u.jsxs)(d.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(o.A,{defaultChecked:!0,onClick:()=>{!function(e){const i=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(i)}(e)}})]})},i)))});return(0,u.jsx)(c.A,{overlay:p,trigger:["click"],onVisibleChange:e=>{f(e)},visible:x,children:(0,u.jsx)(r.A,{style:{fontSize:"26px"}})})}},53387:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(89379),s=n(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var d=n(25085),o=function(e,t){return s.createElement(d.A,(0,i.A)((0,i.A)({},e),{},{ref:t,icon:a}))};const c=s.forwardRef(o)},56284:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(9950),s=(n(13435),n(24513)),a=n(53387),d=n(25933),o=n(80737),c=n(48538),r=n(20567),l=n(73092),u=n(28429),h=n(49348),x=n(55386),f=n(76083),p=n(91854),v=n(74623),A=n(63010),m=n(60150),g=n(70030),j=n(28645),w=n(44414);function b(){const{t:e}=(0,g.B)(),t=(0,p.wA)(),n=(0,u.Zp)(),[b,C]=(0,i.useState)(!1),[k,y]=(0,i.useState)(!1),{setIsModalVisible:_}=(0,i.useContext)(x.o),[z,I]=(0,i.useState)([{title:e("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:e("name"),is_show:!0,dataIndex:"translation",render:e=>null===e||void 0===e?void 0:e.title},{title:e("position"),is_show:!0,dataIndex:"position"},{title:e("active"),is_show:!0,dataIndex:"active",render:(e,t)=>(0,w.jsx)(d.A,{onChange:()=>{_(!0),C(t.id)},checked:e})},{title:e("options"),is_show:!0,dataIndex:"options",render:(i,a)=>(0,w.jsx)(o.A,{children:(0,w.jsx)(c.A,{type:"primary",icon:(0,w.jsx)(s.A,{}),onClick:()=>(i=>{t((0,v.X4)({id:"unit-edit",url:`unit/${i.id}`,name:e("edit.unit")})),n(`/unit/${i.id}`)})(a)})})}]),{activeMenu:S}=(0,p.d4)((e=>e.menu),p.bN),{units:M,meta:B,loading:V,params:E}=(0,p.d4)((e=>e.unit),p.bN);(0,i.useEffect)((()=>{S.refetch&&(t((0,m.Q)()),t((0,v.km)(S)))}),[S.refetch]);return(0,w.jsxs)(r.A,{title:e("units"),extra:(0,w.jsxs)(o.A,{children:[(0,w.jsx)(c.A,{type:"primary",onClick:()=>{t((0,v.X4)({id:"unit-add",url:"unit/add",name:e("add.unit")})),n("/unit/add")},icon:(0,w.jsx)(a.A,{}),children:e("add.unit")}),(0,w.jsx)(j.A,{columns:z,setColumns:I})]}),children:[(0,w.jsx)(l.A,{loading:V,columns:null===z||void 0===z?void 0:z.filter((e=>e.is_show)),dataSource:M,pagination:{pageSize:E.perPage,page:E.page,total:B.total,defaultCurrent:E.page},onChange:function(e,n,i,s){const{pageSize:a,current:d}=e,{field:o,order:c}=i,r=function(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}(c);t((0,m.Q)({...E,perPage:a,page:d,column:o,sort:r}))},rowKey:e=>e.id}),(0,w.jsx)(f.A,{click:()=>{y(!0),A.A.setActive(b).then((()=>{_(!1),t((0,m.Q)(E)),h.oR.success(e("successfully.updated"))})).finally((()=>y(!1)))},text:e("set.active.unit"),loading:k})]})}},72906:(e,t,n)=>{n.d(t,{A:()=>c});var i=n(89379),s=n(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var d=n(25085),o=function(e,t){return s.createElement(d.A,(0,i.A)((0,i.A)({},e),{},{ref:t,icon:a}))};const c=s.forwardRef(o)}}]);