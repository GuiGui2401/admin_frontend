"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5823],{25823:(e,a,i)=>{i.r(a),i.d(a,{default:()=>w});var l=i(9950),t=i(87827),s=i(20567),r=i(87094),n=i(41988),d=i(55902),c=i(99674),u=i(25933),o=i(48538),m=i(49348),h=i(28429),v=i(71999),p=i(98591),g=i(91854),A=i(74623),j=i(62572),x=i(28264),y=i(70030),b=i(31281),k=i(72345),f=i(2777),q=i(44414);const w=()=>{var e;const{t:a}=(0,y.B)(),i=(0,h.Zp)(),w=(0,g.wA)(),{activeMenu:I}=(0,g.d4)((e=>e.menu),g.bN),[_,F]=(0,l.useState)((null===(e=I.data)||void 0===e?void 0:e.image)||[]),[$]=t.A.useForm(),[L,S]=(0,l.useState)(!1),[E,N]=(0,l.useState)(null),{defaultLang:C,languages:M}=(0,g.d4)((e=>e.formLang),g.bN);(0,l.useEffect)((()=>()=>{const e=$.getFieldsValue(!0);w((0,A.Ok)({activeMenu:I,data:e}))}),[]);return(0,q.jsx)(s.A,{title:a("add.category"),extra:(0,q.jsx)(v.A,{}),children:(0,q.jsxs)(t.A,{name:"basic",layout:"vertical",onFinish:e=>{var l;S(!0);const t={type:1,active:e.active?1:0,keywords:e.keywords.join(","),title:(0,b.A)(M,e,"title"),description:(0,b.A)(M,e,"description"),parent_id:e.parent_id.value,images:[null===_||void 0===_||null===(l=_[0])||void 0===l?void 0:l.name]},s="catalog/categories";j.A.create(t).then((()=>{m.oR.success(a("successfully.created")),w((0,A.EK)({...I,nextUrl:s})),w((0,x.jE)()),i(`/${s}`)})).catch((e=>N(e.response.data.params))).finally((()=>S(!1)))},initialValues:{parent_id:{title:"---",value:0,key:0},active:!0,...I.data},form:$,onFinishFailed:e=>console.log(e),children:[(0,q.jsxs)(r.A,{gutter:12,children:[(0,q.jsx)(n.A,{span:12,children:M.map(((e,i)=>(0,q.jsx)(t.A.Item,{label:a("name"),name:`title[${e.locale}]`,help:E&&E[`title.${C}`]?E[`title.${C}`][0]:null,validateStatus:E?"error":"success",rules:[{required:e.locale===C,message:a("required")}],hidden:e.locale!==C,children:(0,q.jsx)(d.A,{})},e.title+i)))}),(0,q.jsx)(n.A,{span:12,children:M.map(((e,i)=>(0,q.jsx)(t.A.Item,{label:a("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===C,message:a("required")}],hidden:e.locale!==C,children:(0,q.jsx)(p.A,{rows:4})},e.locale+i)))}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(t.A.Item,{label:a("keywords"),name:"keywords",rules:[{required:!0,message:a("required")}],children:(0,q.jsx)(c.A,{mode:"tags",style:{width:"100%"}})})}),(0,q.jsx)(n.A,{span:12,children:(0,q.jsx)(t.A.Item,{label:a("parent.category"),name:"parent_id",rules:[{required:!1,message:a("required")}],children:(0,q.jsx)(k.v,{fetchOptions:async function(){return j.A.getAll({perPage:100}).then((e=>e.data.map((e=>{var a,i;return{title:null===(a=e.translation)||void 0===a?void 0:a.title,value:e.id,key:e.id,children:null===(i=e.children)||void 0===i?void 0:i.map((e=>{var a,i;return{title:null===(a=e.translation)||void 0===a?void 0:a.title,value:e.id,key:e.id,children:null===(i=e.children)||void 0===i?void 0:i.map((e=>{var a;return{title:null===(a=e.translation)||void 0===a?void 0:a.title,value:e.id,key:e.id,disabled:!0}}))}}))}}))))}})})}),(0,q.jsx)(n.A,{span:4,children:(0,q.jsx)(t.A.Item,{label:a("image"),name:"images",rules:[{required:!0,message:a("required")}],children:(0,q.jsx)(f.A,{type:"categories",imageList:_,setImageList:F,form:$,multiple:!1})})}),(0,q.jsx)(n.A,{span:2,children:(0,q.jsx)(t.A.Item,{label:a("active"),name:"active",valuePropName:"checked",children:(0,q.jsx)(u.A,{})})})]}),(0,q.jsx)(o.A,{type:"primary",htmlType:"submit",loading:L,children:a("submit")})]})})}}}]);