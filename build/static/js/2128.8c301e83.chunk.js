"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2128],{62128:(e,s,t)=>{t.r(s),t.d(s,{default:()=>v});var a=t(9950),l=t(87827),i=t(20567),r=t(87094),d=t(41988),n=t(55902),u=t(56952),c=t(99674),h=t(25933),m=t(48538),A=t(28429),o=t(49348),x=t(13567),f=t(91854),j=t(74623),p=t(94258),b=t(70030),g=t(44414);function v(){const{t:e}=(0,b.B)(),[s,t]=(0,a.useState)(!1),[v,y]=(0,a.useState)(!1),[k]=l.A.useForm(),q=(0,A.Zp)(),{id:I}=(0,A.g)(),F=(0,f.wA)(),{activeMenu:V}=(0,f.d4)((e=>e.menu));(0,a.useEffect)((()=>()=>{const e=k.getFieldsValue(!0);F((0,j.Ok)({activeMenu:V,data:e}))}),[]);return(0,a.useEffect)((()=>{V.refetch&&(e=>{t(!0),x.A.getById(e).then((e=>{let{data:s}=e;return k.setFieldsValue(s)})).finally((()=>{t(!1),F((0,j.km)(V))}))})(I)}),[V.refetch]),(0,g.jsx)(i.A,{title:e("edit.currency"),loading:s,children:(0,g.jsxs)(l.A,{name:"currency-edit",onFinish:s=>{y(!0);const t={...s,active:Number(s.active)},a="currencies";x.A.update(I,t).then((()=>{o.oR.success(e("successfully.updated")),F((0,j.EK)({...V,nextUrl:a})),q(`/${a}`),F((0,p.CW)({}))})).finally((()=>y(!1)))},form:k,layout:"vertical",initialValues:{...V.data},children:[(0,g.jsxs)(r.A,{gutter:12,children:[(0,g.jsx)(d.A,{span:12,children:(0,g.jsx)(l.A.Item,{label:e("title"),name:"title",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(n.A,{})})}),(0,g.jsx)(d.A,{span:12,children:(0,g.jsx)(l.A.Item,{label:e("symbol"),name:"symbol",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(n.A,{})})}),(0,g.jsx)(d.A,{span:8,children:(0,g.jsx)(l.A.Item,{label:e("rate"),name:"rate",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{style:{width:"100%"},disabled:k.getFieldsValue("default").default})})}),(0,g.jsx)(d.A,{span:8,children:(0,g.jsx)(l.A.Item,{label:e("position"),name:"position",rules:[{required:!0,message:e("required")}],children:(0,g.jsxs)(c.A,{children:[(0,g.jsx)(c.A.Option,{value:"after",children:e("after")}),(0,g.jsx)(c.A.Option,{value:"before",children:e("before")})]})})}),(0,g.jsx)(d.A,{span:4,children:(0,g.jsx)(l.A.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,g.jsx)(h.A,{disabled:k.getFieldsValue("default").default})})}),(0,g.jsx)(d.A,{span:12,children:(0,g.jsx)(l.A.Item,{label:e("default"),name:"default",valuePropName:"checked",hidden:!0,children:(0,g.jsx)(h.A,{})})})]}),(0,g.jsx)(m.A,{type:"primary",htmlType:"submit",loading:v,children:e("save")})]})})}}}]);