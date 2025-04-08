"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5278],{8168:(e,t,a)=>{function o(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{A:()=>o})},35116:(e,t,a)=>{a.d(t,{A:()=>l});a(9950);var o=a(48538),n=a(78433),i=a(49348),r=a(70030),s=a(13311),c=a(44414);function l(e){let{onClick:t,type:a="default",...l}=e;const{t:d}=(0,r.B)(),{isDemo:u}=(0,s.A)();return(0,c.jsx)(o.A,{icon:(0,c.jsx)(n.A,{}),onClick:()=>{console.log(u),u?i.oR.warning(d("cannot.work.demo")):t()},type:a,...l})}},35278:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var o=a(34517),n=a(12916),i=a(80737),r=a(48538),s=a(20567),c=a(3754),l=a(70030),d=a(91854),u=a(9950),h=a(74623),A=a(925),p=a(63620),v=a(75820),f=a(48648),g=a(54021),m=a(78433),w=a(35116),x=a(55386),y=a(28429),j=a(76083),k=a(43991),b=a(49348),C=a(8168),_=a(88986),E=a(44414);const I=function(){var e,t;const{t:a}=(0,l.B)(),{warehouse:I,loading:M,params:R,meta:z}=(0,d.d4)((e=>e.warehouse)),{activeMenu:S}=(0,d.d4)((e=>e.menu)),V=(0,d.wA)(),B=(0,y.Zp)(),[N,O]=(0,u.useState)(!1),{setIsModalVisible:P}=(0,u.useContext)(x.o),[H,D]=(0,u.useState)(!1),[X,$]=(0,u.useState)([{title:a("id"),is_show:!0,dataIndex:"id"},{title:a("image"),is_show:!0,dataIndex:"img",render:e=>(0,E.jsx)(o.A,{width:100,src:p.sE+e,placeholder:!0,style:{borderRadius:4}})},{title:a("product.name"),is_show:!0,dataIndex:"productName"},{title:a("type"),is_show:!0,dataIndex:"type",render:e=>"income"===e?(0,E.jsx)(n.A,{icon:(0,E.jsx)(v.A,{}),color:"cyan",children:e}):(0,E.jsx)(n.A,{icon:(0,E.jsx)(f.A,{}),color:"blue",children:e})},{title:a("user"),is_show:!0,dataIndex:"username"},{title:a("options"),is_show:!0,dataIndex:"options",render:(e,t)=>(0,E.jsxs)(i.A,{children:[(0,E.jsx)(r.A,{icon:(0,E.jsx)(g.A,{}),onClick:()=>K(t.id)}),(0,E.jsx)(w.A,{icon:(0,E.jsx)(m.A,{}),onClick:()=>{P(!0),O(t.id)}})]})}]),K=e=>{V((0,h.X4)({id:"warehouse.detail",url:`seller/warehouse/${e}`,name:a("edit.warehouse")})),B(`/seller/warehouse/${e}`)};return(0,_.A)((()=>{const e=S.data,t={sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};V((0,A.u)(t))}),[S.data]),(0,u.useEffect)((()=>{if(S.refetch){const e=S.data;console.log();const t={perPage:(null===e||void 0===e?void 0:e.perPage)||10,page:null===e||void 0===e?void 0:e.page};V((0,A.u)(t)),V((0,h.km)(S))}}),[S.refetch]),(0,E.jsxs)(s.A,{title:a("warehouse"),extra:(0,E.jsx)(r.A,{onClick:()=>{const e="/seller/warehouse/create";V((0,h.X4)({id:"warehouse.create",url:e,name:a("create.warehouse")})),B(e)},type:"primary",children:a("create")}),children:[(0,E.jsx)(c.A,{loading:M,columns:null===X||void 0===X?void 0:X.filter((e=>e.is_show)),dataSource:I,pagination:{pageSize:10,page:(null===(e=S.data)||void 0===e?void 0:e.page)||1,total:z.total,defaultCurrent:null===(t=S.data)||void 0===t?void 0:t.page},onChange:function(e,t){const{pageSize:a,current:o}=e,{field:n,order:i}=t,r=(0,C.A)(i);V((0,h.Ok)({activeMenu:S,data:{...S.data,perPage:a,page:o,column:n,sort:r}}))},rowKey:e=>e.id}),(0,E.jsx)(j.A,{click:async()=>{D(!0),k.A.delete(N).then((()=>{P(!1),b.oR.success(a("successfully.deleted")),V((0,A.u)(R))})).catch((e=>console.error(e))).finally((()=>D(!1)))},text:a("delete.warehouse"),loading:H})]})}},48648:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(89379),n=a(9950);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"};var r=a(16233),s=function(e,t){return n.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:i}))};s.displayName="VerticalAlignTopOutlined";const c=n.forwardRef(s)},54021:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(89379),n=a(9950),i=a(2104),r=a(16233),s=function(e,t){return n.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:i.A}))};s.displayName="EyeOutlined";const c=n.forwardRef(s)},75820:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(89379),n=a(9950);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM505.7 669a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8z"}}]},name:"vertical-align-bottom",theme:"outlined"};var r=a(16233),s=function(e,t){return n.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:i}))};s.displayName="VerticalAlignBottomOutlined";const c=n.forwardRef(s)},78433:(e,t,a)=>{a.d(t,{A:()=>c});var o=a(89379),n=a(9950),i=a(18042),r=a(16233),s=function(e,t){return n.createElement(r.A,(0,o.A)((0,o.A)({},e),{},{ref:t,icon:i.A}))};s.displayName="DeleteOutlined";const c=n.forwardRef(s)}}]);