"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7096],{6107:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var n=a(9950),l=(a(82450),a(49326)),i=a(45359),r=a(20567),s=a(90650),d=a(52770),o=a(57844),u=a(44832),c=a(71999),p=a(28429),h=a(47933),m=a(91854),v=a(74623),A=a(63620),g=a(70030),x=a(65820),j=a(44414);const{Step:f}=i.A,b=()=>{var e;const{t:t}=(0,g.B)(),{uuid:a}=(0,p.g)(),b=(0,x.s)(),{activeMenu:y}=(0,m.d4)((e=>e.menu),m.bN),{languages:q}=(0,m.d4)((e=>e.formLang),m.bN),k=(0,m.wA)(),S=Number((null===(e=b.values)||void 0===e?void 0:e.step)||0),[I,_]=(0,n.useState)(y.refetch),O=()=>{const e=S+1;b.set("step",e)},w=()=>{const e=S-1;b.set("step",e)},C=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id}:null;function M(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=q.map((e=>{var a,n;return{[`title[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.description}}));return Object.assign({},...a)}(0,n.useEffect)((()=>{y.refetch&&function(e){_(!0),h.A.getById(e).then((e=>{const t={...e.data,...M(e.data),shop:C(e.data.shop),category:C(e.data.category),brand:C(e.data.brand),unit:C(e.data.unit),images:(a=e.data.galleries,a.map((e=>({uid:e.id,name:e.path,url:A.sE+e.path})))),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};var a;k((0,v.Ok)({activeMenu:y,data:t}))})).finally((()=>{_(!1),k((0,v.km)(y))}))}(a)}),[y.refetch]);return(0,j.jsxs)(r.A,{title:t("edit.product"),extra:(0,j.jsx)(c.A,{}),children:[(0,j.jsx)(i.A,{current:S,onChange:e=>{k((0,v.Ok)({activeMenu:y,data:{...y.data,step:e}})),b.set("step",e)},children:l.C.map((e=>(0,j.jsx)(f,{title:t(e.title)},e.title)))}),I?(0,j.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,j.jsx)(s.A,{size:"large",className:"py-5"})}):(0,j.jsxs)("div",{className:"steps-content",children:["First-content"===l.C[S].content&&(0,j.jsx)(u.A,{next:O,action_type:"edit"}),(0,j.jsx)("div",{style:{display:"Second-content"===l.C[S].content?"block":"none"},children:(0,j.jsx)(d.A,{next:O,prev:w})}),"Third-content"===l.C[S].content&&(0,j.jsx)(o.A,{prev:w})]})]})}},27276:(e,t,a)=>{a.d(t,{v:()=>s});var n=a(9950),l=a(90777),i=a(90650),r=a(44414);const s=e=>{let{fetchOptions:t,refetch:a=!1,...s}=e;const[d,o]=(0,n.useState)(!1),[u,c]=(0,n.useState)([]);return(0,r.jsx)(l.A,{treeData:d?[]:u,treeLine:!0,treeDefaultExpandAll:!0,labelInValue:!0,onFocus:()=>{u.length&&!a||(o(!0),t().then((e=>{c(e),o(!1)})))},notFoundContent:d?(0,r.jsx)(i.A,{size:"small"}):"no results",...s})}},44832:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(9950),l=a(87827),i=a(87094),r=a(41988),s=a(55902),d=a(99674),o=a(48538),u=a(47992),c=a(98591),p=a(37963),h=a(62572),m=a(91854),v=(a(44864),a(47933)),A=a(74623),g=a(63010),x=a(28429),j=a(27276),f=a(70030),b=a(31281),y=a(2777),q=a(44414);const k=e=>{var t;let{next:a,action_type:k=""}=e;const{t:S}=(0,f.B)(),[I]=l.A.useForm(),_=(0,m.wA)(),{uuid:O}=(0,x.g)(),w=(0,x.Zp)(),[C,M]=(0,n.useState)(null),{activeMenu:$}=(0,m.d4)((e=>e.menu),m.bN),{defaultLang:F,languages:N}=(0,m.d4)((e=>e.formLang),m.bN),[L,E]=(0,n.useState)((null===(t=$.data)||void 0===t?void 0:t.images)||[]),[V,z]=(0,n.useState)(!1),[B,T]=(0,n.useState)([]);(0,n.useEffect)((()=>()=>{const e=I.getFieldsValue(!0);_((0,A.Ok)({activeMenu:$,data:{...$.data,...e}}))}),[]);return(0,n.useEffect)((()=>{g.A.getAll({perPage:100,page:1,active:1}).then((e=>{let{data:t}=e;return T(function(e){return e.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))}(t))}))}),[]),console.log(L),(0,q.jsxs)(l.A,{layout:"vertical",form:I,initialValues:{active:!0,...$.data},onFinish:e=>{z(!0);const t={category_id:e.category.value,brand_id:e.brand.value,unit_id:e.unit.value,title:(0,b.A)(N,e,"title"),description:(0,b.A)(N,e,"description"),keywords:e.keywords,qr_code:e.qr_code,images:[...L.flatMap((e=>e.name))]};"edit"===k?function(e,t){const n=$.data.id;v.A.update(n,t).then((t=>{let{data:n}=t;_((0,A.Ok)({activeMenu:$,data:e})),a()})).catch((e=>M(e.response.data.params))).finally((()=>z(!1)))}(e,t):function(e,t){v.A.create(t).then((t=>{let{data:a}=t;_((0,A.W6)({id:`product-${a.uuid}`,url:`product/${a.uuid}`,name:S("add.product"),data:{...e,id:a.id},refetch:!1}),(0,A.Ok)({activeMenu:$,data:{id:a.id}})),w(`/product/${a.uuid}?step=1`)})).catch((e=>M(e.response.data.params))).finally((()=>z(!1)))}(e,t)},children:[(0,q.jsxs)(i.A,{gutter:12,children:[(0,q.jsx)(r.A,{span:12,children:N.map((e=>(0,q.jsx)(l.A.Item,{label:S("name"),name:`title[${e.locale}]`,rules:[{required:e.locale===F,message:S("required")}],hidden:e.locale!==F,children:(0,q.jsx)(s.A,{})},"name"+e.id)))}),(0,q.jsx)(r.A,{span:12,children:N.map((e=>(0,q.jsx)(l.A.Item,{label:S("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===F,message:S("required")}],hidden:e.locale!==F,children:(0,q.jsx)(c.A,{rows:3})},"description"+e.id)))}),(0,q.jsx)(r.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:S("brand"),name:"brand",rules:[{required:!0,message:S("required")}],children:(0,q.jsx)(u.G,{fetchOptions:async function(e){return p.A.search(e).then((e=>e.data.map((e=>({label:e.title,value:e.id})))))}})})}),(0,q.jsx)(r.A,{span:12,children:(0,q.jsx)(l.A.Item,{label:S("category"),name:"category",rules:[{required:!0,message:S("required")}],children:(0,q.jsx)(j.v,{fetchOptions:async function(){return h.A.selectCategory({perPage:100}).then((e=>e.data.map((e=>{var t,a;return{title:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id,disabled:!0,children:null===(a=e.children)||void 0===a?void 0:a.map((e=>{var t,a;return{title:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id,disabled:!!e.children.length,children:null===(a=e.children)||void 0===a?void 0:a.map((e=>{var t;return{title:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id}}))}}))}}))))}})})}),(0,q.jsx)(r.A,{span:8,children:(0,q.jsx)(l.A.Item,{label:S("unit"),name:"unit",rules:[{required:!0,message:S("required")}],children:(0,q.jsx)(d.A,{labelInValue:!0,filterOption:!1,options:B})})}),(0,q.jsx)(r.A,{span:8,children:(0,q.jsx)(l.A.Item,{label:S("qr.code"),name:"qr_code",rules:[{required:!0,message:S("required"),error:"error"}],help:null!==C&&void 0!==C&&C.qr_code?C.qr_code[0]:null,validateStatus:null!==C&&void 0!==C&&C.qr_code?"error":"success",children:(0,q.jsx)(s.A,{})})}),(0,q.jsx)(r.A,{span:8,children:(0,q.jsx)(l.A.Item,{label:S("keywords"),name:"keywords",rules:[{required:!0,message:S("required")}],children:(0,q.jsx)(s.A,{})})}),(0,q.jsx)(r.A,{span:24,children:(0,q.jsx)(l.A.Item,{label:S("images"),name:"images",rules:[{required:!0,message:S("required")}],children:(0,q.jsx)(y.A,{type:"products",imageList:L,setImageList:E,form:I})})})]}),(0,q.jsx)(o.A,{type:"primary",htmlType:"submit",loading:V,children:S("next")})]})}},47992:(e,t,a)=>{a.d(t,{G:()=>o});var n=a(9950),l=a(95491),i=a.n(l),r=a(99674),s=a(90650),d=a(44414);const o=e=>{let{fetchOptions:t,debounceTimeout:a=400,...l}=e;const[o,u]=(0,n.useState)(!1),[c,p]=(0,n.useState)([]),h=(0,n.useMemo)((()=>i()((e=>{p([]),u(!0),t(e).then((e=>{p(e),u(!1)}))}),a)),[t,a]);return(0,d.jsx)(r.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:o?(0,d.jsx)(s.A,{size:"small"}):"no results",...l,options:c,onFocus:()=>{c.length||h("")}})}}}]);