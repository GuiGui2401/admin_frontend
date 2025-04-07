"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2633],{52633:(e,t,l)=>{l.r(t),l.d(t,{default:()=>I});var a=l(9950),i=l(87827),s=l(20567),r=l(87094),n=l(41988),d=l(55902),c=l(99674),o=l(25933),u=l(48538),m=l(90650),p=l(49348),h=l(28429),v=l(71999),g=l(98591),A=l(91854),j=l(74623),x=l(62572),y=l(63620),f=l(28264),b=l(70030),k=l(31281),w=l(72345),q=l(2777),_=l(44414);const I=()=>{var e;const{t:t}=(0,b.B)(),l=(0,h.Zp)(),I=(0,A.wA)(),{activeMenu:$}=(0,A.d4)((e=>e.menu),A.bN),[F,E]=(0,a.useState)(!1),[N,S]=(0,a.useState)([null===(e=$.data)||void 0===e?void 0:e.image]||0),[L]=i.A.useForm(),[O,V]=(0,a.useState)(!1),[B,C]=(0,a.useState)(null),{uuid:M}=(0,h.g)(),{defaultLang:P,languages:z}=(0,A.d4)((e=>e.formLang),A.bN);(0,a.useEffect)((()=>()=>{const e=L.getFieldsValue(!0);I((0,j.Ok)({activeMenu:$,data:e}))}),[]);const K=e=>({name:e,url:y.sE+e});function R(e){if(!e)return{};const{translations:t}=e,l=z.map((e=>{var l,a;return{[`title[${e.locale}]`]:null===(l=t.find((t=>t.locale===e.locale)))||void 0===l?void 0:l.title,[`description[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.description}}));return Object.assign({},...l)}return(0,a.useEffect)((()=>{var e;$.refetch&&(e=M,E(!0),x.A.getById(e).then((e=>{let t=e.data;const l={...t,...R(t),parent_id:{label:t.translation.title,value:t.parent_id,key:t.parent_id},images:K(t.img),keywords:t.keywords.split(",")};L.setFieldsValue(l),S([K(t.img)])})).finally((()=>{E(!1),I((0,j.km)($))})))}),[$.refetch]),(0,_.jsx)(s.A,{title:t("clone.category"),extra:(0,_.jsx)(v.A,{}),children:F?(0,_.jsx)("div",{className:"d-flex justify-content-center align-items-center py-5",children:(0,_.jsx)(m.A,{size:"large",className:"mt-5 pt-5"})}):(0,_.jsxs)(i.A,{name:"basic",layout:"vertical",onFinish:e=>{V(!0);const a={type:2,active:e.active?1:0,keywords:e.keywords.join(","),title:(0,k.A)(z,e,"title"),description:(0,k.A)(z,e,"description"),images:[N[0].name],parent_id:e.parent_id.value},i="catalog/categories";x.A.create(a).then((e=>{console.log("res",e),p.oR.success(t("successfully.updated")),I((0,j.EK)({...$,nextUrl:i})),I((0,f.jE)()),l(`/${i}`)})).catch((e=>C(e.response.data.params))).finally((()=>V(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},...$.data},form:L,onFinishFailed:e=>console.log(e),children:[(0,_.jsxs)(r.A,{gutter:12,children:[(0,_.jsx)(n.A,{span:12,children:z.map(((e,l)=>(0,_.jsx)(i.A.Item,{label:t("name"),name:`title[${e.locale}]`,help:B&&B[`title.${P}`]?B[`title.${P}`][0]:null,validateStatus:B?"error":"success",rules:[{required:e.locale===P,message:t("required")}],hidden:e.locale!==P,children:(0,_.jsx)(d.A,{})},e.title+l)))}),(0,_.jsx)(n.A,{span:12,children:z.map(((e,l)=>(0,_.jsx)(i.A.Item,{label:t("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===P,message:t("required")}],hidden:e.locale!==P,children:(0,_.jsx)(g.A,{rows:4})},e.locale+l)))}),(0,_.jsx)(n.A,{span:12,children:(0,_.jsx)(i.A.Item,{label:t("keywords"),name:"keywords",rules:[{required:!0,message:t("required")}],children:(0,_.jsx)(c.A,{mode:"tags",style:{width:"100%"}})})}),(0,_.jsx)(n.A,{span:12,children:(0,_.jsx)(i.A.Item,{label:t("parent.category"),name:"parent_id",rules:[{required:!0,message:t("required")}],children:(0,_.jsx)(w.v,{fetchOptions:async function(){return x.A.getAll({perPage:100}).then((e=>e.data.map((e=>{var t,l;return{title:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id,children:null===(l=e.children)||void 0===l?void 0:l.map((e=>{var t,l;return{title:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id,children:null===(l=e.children)||void 0===l?void 0:l.map((e=>{var t;return{title:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,key:e.id,disabled:!0}}))}}))}}))))}})})}),(0,_.jsx)(n.A,{span:4,children:(0,_.jsx)(i.A.Item,{label:t("image"),name:"images",rules:[{required:!0,message:t("required")}],children:(0,_.jsx)(q.A,{type:"categories",imageList:N||[],setImageList:S,form:L,multiple:!1})})}),(0,_.jsx)(n.A,{span:2,children:(0,_.jsx)(i.A.Item,{label:t("active"),name:"active",valuePropName:"checked",children:(0,_.jsx)(o.A,{})})})]}),(0,_.jsx)(u.A,{type:"primary",htmlType:"submit",loading:O,children:t("submit")})]})})}}}]);