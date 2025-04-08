"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7248],{8168:(e,t,a)=>{function d(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}a.d(t,{A:()=>d})},8297:(e,t,a)=>{a.d(t,{A:()=>o});var d=a(9950),n=a(93124),r=a(41397),i=a(52786),l=a(44414);function o(e){let{handleChange:t,defaultValue:a,resetSearch:o,...s}=e;const[c,u]=(0,d.useState)(a),p=(0,d.useMemo)((()=>(0,r.debounce)((e=>{t(e)}),800)),[]);return(0,d.useEffect)((()=>{u(a)}),[o]),(0,l.jsx)(n.A,{value:c,onChange:e=>{const{value:t}=e.target;u(t.replace(/\s/g,"")),p(t.replace(/\s/g,""))},prefix:(0,l.jsx)(i.A,{}),...s})}},23222:(e,t,a)=>{a.d(t,{A:()=>g});var d=a(9950),n=a(25887),r=a(27741),i=a(48538),l=a(70030),o=a(47992),s=a(28429),c=a(67231),u=a(74623),p=a(91854),h=a(49348),f=a(44414);function g(e){let{isModalOpen:t,handleCancel:a,isGiftCard:g}=e;const{t:v}=(0,l.B)(),[A]=n.A.useForm(),m=(0,s.Zp)(),x=(0,p.wA)(),[j,w]=(0,d.useState)(!1),y=e=>{g?(x((0,u.X4)({url:`/seller/gift-card/add/${e}`,id:"seller-gift-card-add",name:v("seller.gift.card.add")})),m(`/seller/gift-card/add/${e}`)):(x((0,u.X4)({url:`/seller/product/add/${e}`,id:"seller-product-add",name:v("seller.product.add")})),m(`/seller/product/add/${e}`))};return(0,f.jsx)(r.A,{visible:t,title:v(g?"add.gift.card":"add.product"),onCancel:a,footer:[g?(0,f.jsx)(i.A,{type:"primary",onClick:()=>(()=>{const e="/seller/gift-card/add";x((0,u.X4)({url:e,id:"seller-new-gift-card-add",name:v("add.new.gift.card")})),m(e)})(),children:v("add.new.gift.card")},"newSaveBtn"):(0,f.jsx)(i.A,{type:"primary",onClick:()=>(()=>{const e="seller/product/add";x((0,u.X4)({url:`/${e}`,id:"seller-new-product-add",name:v("add.new.product")})),m(`/${e}`)})(),children:v("add.new.product")},"newSaveBtn"),(0,f.jsx)(i.A,{type:"primary",onClick:()=>A.submit(),children:v("create")},"saveBtn"),(0,f.jsx)(i.A,{type:"default",onClick:a,children:v("cancel")},"cancelBtn")],children:(0,f.jsxs)(n.A,{layout:"vertical",name:"add-product",form:A,onFinish:e=>{if(e.title)y(e.title.value);else{if(!e.qr_code)return h.oR.error(v("please.select.one.option"));y(e.qr_code.value)}a()},children:[(0,f.jsx)(n.A.Item,{name:"title",label:v(g?"search.gift.card.title":"search.product.title"),children:(0,f.jsx)(o.G,{fetchOptions:async function(e){w(!0);const t={search:e,perPage:10,gift:g?1:void 0};return c.A.search(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:null===e||void 0===e?void 0:e.uuid}}))})).catch((e=>console.error(e))).finally((()=>w(!1)))},style:{minWidth:150},loading:j})}),(0,f.jsx)(n.A.Item,{name:"qr_code",label:v(g?"search.gift.card.qr_code":"search.product.qr_code"),children:(0,f.jsx)(o.G,{fetchOptions:async function(e){const t={qr_code:e,perPage:10,gift:g?1:void 0};return c.A.search(t).then((e=>{let{data:t}=e;return t.map((e=>({label:e.qr_code,value:null===e||void 0===e?void 0:e.uuid})))})).catch((e=>console.error(e))).finally((()=>w(!1)))},style:{minWidth:150},loading:j})})]})})}},35116:(e,t,a)=>{a.d(t,{A:()=>s});a(9950);var d=a(48538),n=a(78433),r=a(49348),i=a(70030),l=a(13311),o=a(44414);function s(e){let{onClick:t,type:a="default",...s}=e;const{t:c}=(0,i.B)(),{isDemo:u}=(0,l.A)();return(0,o.jsx)(d.A,{icon:(0,o.jsx)(n.A,{}),onClick:()=>{console.log(u),u?r.oR.warning(c("cannot.work.demo")):t()},type:a,...s})}},37248:(e,t,a)=>{a.r(t),a.d(t,{default:()=>O});var d=a(34517),n=a(25933),r=a(80737),i=a(48538),l=a(20567),o=a(3754),s=a(70030),c=a(8297),u=a(9950),p=a(91854),h=a(74623),f=a(10312),g=a(8168),v=a(63620),A=a(90582),m=a(78433),x=a(35116),j=a(55386),w=a(88986),y=(a(32801),a(28429)),C=a(76083),b=a(23222),k=a(67231),S=a(49348),_=a(44414);const O=function(){var e,t;const{t:a}=(0,s.B)(),{giftCards:O,meta:I,loading:M,params:P}=(0,p.d4)((e=>e.giftCard),p.bN),{activeMenu:R}=(0,p.d4)((e=>e.menu),p.bN),$=(0,p.wA)(),[q,B]=(0,u.useState)(!1),{setIsModalVisible:E}=(0,u.useContext)(j.o),G=(0,y.Zp)(),[T,X]=(0,u.useState)(!1),[F,N]=(0,u.useState)(!1),[z,V]=(0,u.useState)(!1),[D,K]=(0,u.useState)([]),[W,Z]=(0,u.useState)([{title:a("id"),is_show:!0,dataIndex:"id",sorter:!0},{title:a("image"),is_show:!0,dataIndex:"img",render:e=>(0,_.jsx)(d.A,{width:100,src:v.sE+e,placeholder:!0,style:{borderRadius:4}})},{title:a("name"),is_show:!0,dataIndex:"name"},{title:a("active"),is_show:!0,dataIndex:"active",render:(e,t)=>(0,_.jsx)(n.A,{onChange:()=>{E(!0),B(t.uuid),N(!1)},checked:e})},{title:a("options"),is_show:!0,dataIndex:"options",render:(e,t)=>(0,_.jsxs)(r.A,{children:[(0,_.jsx)(i.A,{type:"primary",icon:(0,_.jsx)(A.A,{}),onClick:()=>J(t.id)}),(0,_.jsx)(x.A,{icon:(0,_.jsx)(m.A,{}),onClick:()=>{E(!0),B(t.id),N(!0)}})]})}]),H={selectedRowKeys:D,onChange:e=>{K(e)}},J=e=>{$((0,h.X4)({id:"gift-card-edit",url:`seller/gift-card/edit/${e}`,name:a("edit.gift.card")})),G(`/seller/gift-card/edit/${e}`)};return(0,u.useEffect)((()=>{if(R.refetch){const e=R.data,t={perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};$((0,f.vT)(t)),$((0,h.km)(R))}}),[R.refetch]),(0,w.A)((()=>{const e=R.data,t={search:null===e||void 0===e?void 0:e.search,sort:null===e||void 0===e?void 0:e.sort,column:null===e||void 0===e?void 0:e.column,perPage:null===e||void 0===e?void 0:e.perPage,page:null===e||void 0===e?void 0:e.page};$((0,f.vT)(t))}),[R.data]),(0,_.jsxs)(l.A,{title:a("gift.cards"),extra:(0,_.jsxs)(r.A,{children:[(0,_.jsx)(c.A,{placeholder:a("search"),handleChange:e=>{return t=e,a="search",void $((0,h.Ok)({activeMenu:R,data:{...R.data,[a]:t}}));var t,a}})," ",(0,_.jsx)(i.A,{type:"primary",onClick:()=>X(!0),children:a("add.gift.card")})]}),children:[(0,_.jsx)(o.A,{rowSelection:H,loading:M,columns:null===W||void 0===W?void 0:W.filter((e=>e.is_show)),dataSource:O,pagination:{pageSize:P.perPage,page:(null===(e=R.data)||void 0===e?void 0:e.page)||1,total:I.total,defaultCurrent:null===(t=R.data)||void 0===t?void 0:t.page},onChange:function(e,t){const{pageSize:a,current:d}=e,{field:n,order:r}=t,i=(0,g.A)(r);$((0,h.Ok)({activeMenu:R,data:{...R.data,perPage:a,page:d,column:n,sort:i}}))},rowKey:e=>e.id}),(0,_.jsx)(C.A,{click:F?()=>{V(!0),k.A.delete({ids:[q]}).then((()=>{E(!1),S.oR.success(a("successfully.deleted")),$((0,f.vT)(P))})).finally((()=>V(!1)))}:()=>{V(!0),k.A.setActive(q).then((()=>{E(!1),$((0,f.vT)(P)),S.oR.success(a("successfully.updated"))})).finally((()=>V(!1)))},text:a(F?"delete.product":"set.active.product"),loading:z}),(0,_.jsx)(b.A,{isGiftCard:!0,isModalOpen:T,handleCancel:()=>X(!1)})]})}},47992:(e,t,a)=>{a.d(t,{G:()=>s});var d=a(9950),n=a(95491),r=a.n(n),i=a(99674),l=a(90650),o=a(44414);const s=e=>{let{fetchOptions:t,debounceTimeout:a=400,...n}=e;const[s,c]=(0,d.useState)(!1),[u,p]=(0,d.useState)([]),h=(0,d.useMemo)((()=>r()((e=>{p([]),c(!0),t(e).then((e=>{p(e),c(!1)}))}),a)),[t,a]);return(0,o.jsx)(i.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:s?(0,o.jsx)(l.A,{size:"small"}):"no results",...n,options:u,onFocus:()=>{u.length||h("")}})}},78433:(e,t,a)=>{a.d(t,{A:()=>o});var d=a(89379),n=a(9950),r=a(18042),i=a(16233),l=function(e,t){return n.createElement(i.A,(0,d.A)((0,d.A)({},e),{},{ref:t,icon:r.A}))};l.displayName="DeleteOutlined";const o=n.forwardRef(l)},90582:(e,t,a)=>{a.d(t,{A:()=>o});var d=a(89379),n=a(9950),r=a(42701),i=a(16233),l=function(e,t){return n.createElement(i.A,(0,d.A)((0,d.A)({},e),{},{ref:t,icon:r.A}))};l.displayName="EditOutlined";const o=n.forwardRef(l)}}]);