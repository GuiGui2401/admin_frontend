"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[6912],{33507:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var i=a(9950),s=(a(82450),a(49326)),n=a(45359),r=a(20567),d=a(90650),l=a(52770),c=a(57844),o=a(71999),u=a(28429),p=a(47933),m=a(91854),h=a(74623),g=a(63620),v=a(70030),f=a(65820),x=a(92808),A=a(44414);const{Step:j}=n.A,y=()=>{var e;const{t:t}=(0,v.B)(),{uuid:a}=(0,u.g)(),y=(0,f.s)(),{activeMenu:b}=(0,m.d4)((e=>e.menu),m.bN),{languages:k}=(0,m.d4)((e=>e.formLang),m.bN),q=(0,m.wA)(),_=Number((null===(e=y.values)||void 0===e?void 0:e.step)||0),[w,C]=(0,i.useState)(b.refetch),$=()=>{const e=_+1;y.set("step",e)},I=()=>{const e=_-1;y.set("step",e)},M=e=>e?{label:e.translation?e.translation.title:e.title,value:e.id}:null;function N(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,a=k.map((e=>{var a,i;return{[`title[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.title,[`description[${e.locale}]`]:null===(i=t.find((t=>t.locale===e.locale)))||void 0===i?void 0:i.description}}));return Object.assign({},...a)}(0,i.useEffect)((()=>{b.refetch&&function(e){C(!0),p.A.getById(e).then((e=>{const t={...e.data,...N(e.data),shop:M(e.data.shop),category:M(e.data.category),brand:M(e.data.brand),unit:M(e.data.unit),images:(a=e.data.galleries,a.map((e=>({uid:e.id,name:e.path,url:g.sE+e.path})))),properties:e.data.properties.map(((e,t)=>({id:t,[`key[${e.locale}]`]:e.key,[`value[${e.locale}]`]:e.value}))),translation:void 0,translations:void 0};var a;q((0,h.Ok)({activeMenu:b,data:t}))})).finally((()=>{C(!1),q((0,h.km)(b))}))}(a)}),[b.refetch]);return(0,A.jsxs)(r.A,{title:t("edit.gift.card"),extra:(0,A.jsx)(o.A,{}),children:[(0,A.jsx)(n.A,{current:_,onChange:e=>{q((0,h.Ok)({activeMenu:b,data:{...b.data,step:e}})),y.set("step",e)},children:s.C.map((e=>(0,A.jsx)(j,{title:t(e.title)},e.title)))}),w?(0,A.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,A.jsx)(d.A,{size:"large",className:"py-5"})}):(0,A.jsxs)("div",{className:"steps-content",children:["First-content"===s.C[_].content&&(0,A.jsx)(x.A,{next:$,action_type:"edit"}),(0,A.jsx)("div",{style:{display:"Second-content"===s.C[_].content?"block":"none"},children:(0,A.jsx)(l.A,{next:$,prev:I})}),"Third-content"===s.C[_].content&&(0,A.jsx)(c.A,{prev:I,isGiftCard:!0})]})]})}},92808:(e,t,a)=>{a.d(t,{A:()=>x});var i=a(9950),s=a(87827),n=a(87094),r=a(41988),d=a(55902),l=a(48538),c=a(98591),o=a(91854),u=a(47933),p=a(74623),m=a(28429),h=a(70030),g=a(31281),v=a(2777),f=a(44414);const x=e=>{var t;let{next:a,action_type:x=""}=e;const{t:A}=(0,h.B)(),[j]=s.A.useForm(),y=(0,o.wA)(),b=(0,m.Zp)(),[k,q]=(0,i.useState)(null),{activeMenu:_}=(0,o.d4)((e=>e.menu),o.bN),{defaultLang:w,languages:C}=(0,o.d4)((e=>e.formLang),o.bN),[$,I]=(0,i.useState)((null===(t=_.data)||void 0===t?void 0:t.images)||[]),[M,N]=(0,i.useState)(!1);(0,i.useEffect)((()=>()=>{const e=j.getFieldsValue(!0);y((0,p.Ok)({activeMenu:_,data:{..._.data,...e}}))}),[]);return(0,f.jsxs)(s.A,{layout:"vertical",form:j,initialValues:{active:!0,..._.data},onFinish:e=>{N(!0);const t={title:(0,g.A)(C,e,"title"),description:(0,g.A)(C,e,"description"),keywords:e.keywords,qr_code:e.qr_code,images:[...$.flatMap((e=>e.name))],gift:1};"edit"===x?function(e,t){const i=_.data.id;u.A.update(i,t).then((t=>{let{data:i}=t;y((0,p.Ok)({activeMenu:_,data:e})),a()})).catch((e=>q(e.response.data.params))).finally((()=>N(!1)))}(e,t):function(e,t){u.A.create(t).then((t=>{let{data:a}=t;y((0,p.W6)({id:`gift-card-${a.uuid}`,url:`gift-card/${a.uuid}`,name:A("add.gift.card"),data:{...e,id:a.id},refetch:!1}),(0,p.Ok)({activeMenu:_,data:{id:a.id}})),b(`/gift-card/${a.uuid}?step=1`)})).catch((e=>q(e.response.data.params))).finally((()=>N(!1)))}(e,t)},children:[(0,f.jsxs)(n.A,{gutter:12,children:[(0,f.jsx)(r.A,{span:12,children:C.map((e=>(0,f.jsx)(s.A.Item,{label:A("name"),name:`title[${e.locale}]`,rules:[{required:e.locale===w,message:A("required")}],hidden:e.locale!==w,children:(0,f.jsx)(d.A,{})},"name"+e.id)))}),(0,f.jsx)(r.A,{span:12,children:C.map((e=>(0,f.jsx)(s.A.Item,{label:A("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===w,message:A("required")}],hidden:e.locale!==w,children:(0,f.jsx)(c.A,{rows:3})},"description"+e.id)))}),(0,f.jsx)(r.A,{span:12,children:(0,f.jsx)(s.A.Item,{label:A("qr.code"),name:"qr_code",rules:[{required:!0,message:A("required"),error:"error"}],help:null!==k&&void 0!==k&&k.qr_code?k.qr_code[0]:null,validateStatus:null!==k&&void 0!==k&&k.qr_code?"error":"success",children:(0,f.jsx)(d.A,{})})}),(0,f.jsx)(r.A,{span:12,children:(0,f.jsx)(s.A.Item,{label:A("keywords"),name:"keywords",rules:[{required:!0,message:A("required")}],children:(0,f.jsx)(d.A,{})})}),(0,f.jsx)(r.A,{span:24,children:(0,f.jsx)(s.A.Item,{label:A("images"),name:"images",rules:[{required:!0,message:A("required")}],children:(0,f.jsx)(v.A,{type:"products",GiftCardsIndex:!0,imageList:$,setImageList:I,form:j})})})]}),(0,f.jsx)(l.A,{type:"primary",htmlType:"submit",loading:M,children:A("next")})]})}}}]);