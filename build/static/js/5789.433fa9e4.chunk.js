"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5789],{8168:(e,t,n)=>{function a(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{A:()=>a})},8297:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(9950),o=n(93124),l=n(41397),d=n(52786),i=n(44414);function s(e){let{handleChange:t,defaultValue:n,resetSearch:s,...r}=e;const[c,u]=(0,a.useState)(n),v=(0,a.useMemo)((()=>(0,l.debounce)((e=>{t(e)}),800)),[]);return(0,a.useEffect)((()=>{u(n)}),[s]),(0,i.jsx)(o.A,{value:c,onChange:e=>{const{value:t}=e.target;u(t.replace(/\s/g,"")),v(t.replace(/\s/g,""))},prefix:(0,i.jsx)(d.A,{}),...r})}},13435:()=>{},15789:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var a=n(9950),o=(n(13435),n(90582)),l=n(78887),d=n(78433),i=n(34517),s=n(80737),r=n(48538),c=n(20567),u=n(87094),v=n(41988),p=n(3754),h=n(28429),A=n(49348),f=n(63620),m=n(55386),g=n(76083),x=n(91854),j=n(74623),y=n(47933),b=n(32801),C=n(88986),w=n(47992),k=n(37963),_=n(62572),S=n(8297),I=n(8168),O=n(70030),N=n(35116),R=n(28645),E=n(55660),M=n(44414);const z=()=>{var e,t,n,z,P;const{t:$}=(0,O.B)(),B=(0,x.wA)(),X=(0,h.Zp)(),[G,V]=(0,a.useState)([{title:$("id"),is_show:!0,dataIndex:"id",sorter:(e,t)=>e.id-t.id},{title:$("image"),dataIndex:"img",is_show:!0,render:e=>(0,M.jsx)(i.A,{width:100,src:f.sE+e,placeholder:!0,style:{borderRadius:4}})},{title:$("name"),dataIndex:"name",is_show:!0},{title:$("category"),dataIndex:"category_name",is_show:!0},{title:$("options"),dataIndex:"options",is_show:!0,render:(e,t)=>(0,M.jsxs)(s.A,{children:[(0,M.jsx)(r.A,{type:"primary",icon:(0,M.jsx)(o.A,{}),onClick:()=>W(t.uuid,!!t.gift)}),(0,M.jsx)(r.A,{type:"success",icon:(0,M.jsx)(l.A,{}),onClick:()=>D(t.uuid)}),(0,M.jsx)(N.A,{icon:(0,M.jsx)(d.A,{}),onClick:()=>{T(!0),K(t.uuid),q(!0)}})]})}]),W=(e,t)=>{t?(B((0,j.X4)({id:"gift-card-edit",url:`gift-card/${e}`,name:$("edit.gift.card")})),X(`/gift-card/${e}`)):(B((0,j.X4)({id:"product-edit",url:`product/${e}`,name:$("edit.product")})),X(`/product/${e}`))},D=e=>{B((0,j.X4)({id:"product-clone",url:`product-clone/${e}`,name:$("clone.product")})),X(`/product-clone/${e}`)},[F,K]=(0,a.useState)(!1),{setIsModalVisible:T}=(0,a.useContext)(m.o),[Z,q]=(0,a.useState)(!1),[H,J]=(0,a.useState)(!1),[L,Q]=(0,a.useState)(!1),{activeMenu:U}=(0,x.d4)((e=>e.menu),x.bN),[Y,ee]=(0,a.useState)([]),{products:te,meta:ne,loading:ae,params:oe}=(0,x.d4)((e=>e.product),x.bN);(0,C.A)((()=>{var e,t,n;const a=U.data,o={search:null===a||void 0===a?void 0:a.search,brand_id:null===a||void 0===a||null===(e=a.brand)||void 0===e?void 0:e.value,category_id:null===a||void 0===a||null===(t=a.category)||void 0===t?void 0:t.value,shop_id:null===a||void 0===a||null===(n=a.shop)||void 0===n?void 0:n.value,sort:null===a||void 0===a?void 0:a.sort,column:null===a||void 0===a?void 0:a.column,perPage:null===a||void 0===a?void 0:a.perPage,page:null===a||void 0===a?void 0:a.page};B((0,b.j0)(o))}),[U.data]),(0,a.useEffect)((()=>{var e,t,n;const a=U.data,o={search:null===a||void 0===a?void 0:a.search,brand_id:null===a||void 0===a||null===(e=a.brand)||void 0===e?void 0:e.value,category_id:null===a||void 0===a||null===(t=a.category)||void 0===t?void 0:t.value,shop_id:null===a||void 0===a||null===(n=a.shop)||void 0===n?void 0:n.value,sort:null===a||void 0===a?void 0:a.sort,column:null===a||void 0===a?void 0:a.column,perPage:null===a||void 0===a?void 0:a.perPage,page:null===a||void 0===a?void 0:a.page};U.refetch&&(B((0,b.j0)(o)),B((0,j.km)(U)))}),[U.refetch]);const le=(e,t)=>{B((0,j.Ok)({activeMenu:U,data:{...U.data,[t]:e}}))};const de={selectedRowKeys:Y,onChange:e=>{ee(e)}};return(0,M.jsxs)(c.A,{title:$("products"),extra:(0,M.jsxs)(s.A,{children:[(0,M.jsx)(w.G,{placeholder:$("select.shop"),fetchOptions:async function(e){const t={search:e};return E.A.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{minWidth:150},onChange:e=>le(e,"shop"),value:null===(e=U.data)||void 0===e?void 0:e.shop}),(0,M.jsx)(r.A,{onClick:()=>{var e,t;Q(!0),y.A.export({shop_id:(null===(e=U.data)||void 0===e||null===(t=e.shop)||void 0===t?void 0:t.value)||null}).then((e=>{const t=f.bb+e.data.file_name;window.location.href=t})).finally((()=>Q(!1)))},loading:L,children:$("export")}),(0,M.jsx)(r.A,{onClick:()=>{B((0,j.X4)({id:"product-import",url:"catalog/product/import",name:$("product.import")})),X("/catalog/product/import")},children:$("import")}),(0,M.jsx)(R.A,{columns:G,setColumns:V})]}),children:[(0,M.jsxs)(u.A,{gutter:24,className:"mb-2",children:[(0,M.jsx)(v.A,{span:12,children:(0,M.jsxs)(s.A,{children:[(0,M.jsx)(S.A,{placeholder:$("search"),handleChange:e=>le(e,"search")}),(0,M.jsx)(w.G,{placeholder:$("select.category"),fetchOptions:async function(e){const t={search:e};return _.A.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}))},style:{minWidth:150},onChange:e=>le(e,"category"),value:null===(t=U.data)||void 0===t?void 0:t.category}),(0,M.jsx)(w.G,{placeholder:$("select.brand"),fetchOptions:async function(e){return k.A.search(e).then((e=>{let{data:t}=e;return t.map((e=>({label:e.title,value:e.id})))}))},style:{minWidth:150},onChange:e=>le(e,"brand"),value:null===(n=U.data)||void 0===n?void 0:n.brand})]})}),(0,M.jsx)(v.A,{span:12,className:"d-flex justify-content-end",children:(0,M.jsxs)(s.A,{children:[(0,M.jsx)(r.A,{type:"primary",onClick:()=>{B((0,j.X4)({id:"product-add",url:"product/add",name:$("add.product")})),X("/product/add")},children:$("add.product")}),(0,M.jsx)(r.A,{className:"",type:"danger",onClick:()=>{J(!0),y.A.deleteAll({productIds:Y}).then((()=>{T(!1),A.oR.success($("successfully.deleted")),B((0,b.j0)(oe))})).finally((()=>J(!1)))},disabled:Boolean(!(null!==Y&&void 0!==Y&&Y.length)),children:$("delete.all")})]})})]}),(0,M.jsx)(p.A,{rowSelection:de,loading:ae,columns:null===G||void 0===G?void 0:G.filter((e=>e.is_show)),dataSource:te,pagination:{pageSize:oe.perPage,page:(null===(z=U.data)||void 0===z?void 0:z.page)||1,total:ne.total,defaultCurrent:null===(P=U.data)||void 0===P?void 0:P.page},onChange:function(e,t){const{pageSize:n,current:a}=e,{field:o,order:l}=t,d=(0,I.A)(l);B((0,j.Ok)({activeMenu:U,data:{...U.data,perPage:n,page:a,column:o,sort:d}}))},rowKey:e=>e.id}),(0,M.jsx)(g.A,{click:Z?()=>{J(!0),y.A.delete(F).then((()=>{T(!1),A.oR.success($("successfully.deleted")),B((0,b.j0)(oe))})).finally((()=>J(!1)))}:()=>{J(!0),y.A.setActive(F).then((()=>{T(!1),B((0,b.j0)(oe)),A.oR.success($("successfully.updated"))})).finally((()=>J(!1)))},text:$(Z?"delete.product":"set.active.product"),loading:H})]})}},28645:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(9950),o=n(30377),l=n(69216),d=n(80737),i=n(25933),s=n(57811),r=n(72906),c=n(70030),u=n(44414);const{Text:v}=o.A,p=e=>{let{columns:t=[],setColumns:n}=e;const{t:o}=(0,c.B)(),[p,h]=(0,a.useState)(!1),A=(0,u.jsx)(l.A,{children:null===t||void 0===t?void 0:t.map(((e,a)=>(0,u.jsx)(l.A.Item,{children:(0,u.jsxs)(d.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(v,{children:e.title}),(0,u.jsx)(i.A,{defaultChecked:!0,onClick:()=>{!function(e){const a=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(a)}(e)}})]})},a)))});return(0,u.jsx)(s.A,{overlay:A,trigger:["click"],onVisibleChange:e=>{h(e)},visible:p,children:(0,u.jsx)(r.A,{style:{fontSize:"26px"}})})}},35116:(e,t,n)=>{n.d(t,{A:()=>r});n(9950);var a=n(48538),o=n(78433),l=n(49348),d=n(70030),i=n(13311),s=n(44414);function r(e){let{onClick:t,type:n="default",...r}=e;const{t:c}=(0,d.B)(),{isDemo:u}=(0,i.A)();return(0,s.jsx)(a.A,{icon:(0,s.jsx)(o.A,{}),onClick:()=>{console.log(u),u?l.oR.warning(c("cannot.work.demo")):t()},type:n,...r})}},47992:(e,t,n)=>{n.d(t,{G:()=>r});var a=n(9950),o=n(95491),l=n.n(o),d=n(99674),i=n(90650),s=n(44414);const r=e=>{let{fetchOptions:t,debounceTimeout:n=400,...o}=e;const[r,c]=(0,a.useState)(!1),[u,v]=(0,a.useState)([]),p=(0,a.useMemo)((()=>l()((e=>{v([]),c(!0),t(e).then((e=>{v(e),c(!1)}))}),n)),[t,n]);return(0,s.jsx)(d.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:p,notFoundContent:r?(0,s.jsx)(i.A,{size:"small"}):"no results",...o,options:u,onFocus:()=>{u.length||p("")}})}},72906:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(89379),o=n(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var d=n(16233),i=function(e,t){return o.createElement(d.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:l}))};i.displayName="MoreOutlined";const s=o.forwardRef(i)},78433:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(89379),o=n(9950),l=n(18042),d=n(16233),i=function(e,t){return o.createElement(d.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:l.A}))};i.displayName="DeleteOutlined";const s=o.forwardRef(i)},78887:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(89379),o=n(9950),l=n(55712),d=n(16233),i=function(e,t){return o.createElement(d.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:l.A}))};i.displayName="CopyOutlined";const s=o.forwardRef(i)},90582:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(89379),o=n(9950),l=n(42701),d=n(16233),i=function(e,t){return o.createElement(d.A,(0,a.A)((0,a.A)({},e),{},{ref:t,icon:l.A}))};i.displayName="EditOutlined";const s=o.forwardRef(i)}}]);