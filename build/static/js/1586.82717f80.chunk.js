"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1586],{11586:(e,s,r)=>{r.r(s),r.d(s,{default:()=>b});var a=r(9950),i=r(87827),n=r(20567),d=r(48538),l=r(87094),t=r(41988),u=r(55902),c=r(70030),o=r(52281),p=r(49348),A=r(91854),m=r(74623),h=r(9690),j=r(81446),x=r(13311),g=r(44414);function b(){const{t:e}=(0,c.B)(),[s]=i.A.useForm(),{activeMenu:r}=(0,A.d4)((e=>e.menu),A.bN),b=(0,A.wA)(),[f,_]=(0,a.useState)(!1),[v,q]=(0,a.useState)(!1),{isDemo:y}=(0,x.A)();(0,a.useEffect)((()=>()=>{const e=s.getFieldsValue(!0);b((0,m.Ok)({activeMenu:r,data:e}))}),[]);function k(){_(!0),o.A.get().then((e=>{const r=(e=>{const s=e.map((e=>({[e.key]:e.value})));return Object.assign({},...s)})(e.data);s.setFieldsValue(r)})).finally((()=>{_(!1),b((0,m.km)(r))}))}(0,a.useEffect)((()=>{r.refetch&&k()}),[r.refetch]);return(0,g.jsx)(i.A,{layout:"vertical",form:s,name:"global-settings",onFinish:s=>{var r;r=s,q(!0),o.A.update(r).then((()=>{p.oR.success(e("successfully.updated")),b((0,h.Uc)())})).finally((()=>q(!1)))},initialValues:{...r.data},children:f?(0,g.jsx)(j.A,{}):(0,g.jsx)(n.A,{title:e("social.settings"),extra:(0,g.jsx)(d.A,{type:"primary",onClick:()=>{y?p.oR.warning(e("cannot.work.demo")):s.submit()},loading:v,children:e("save")}),children:(0,g.jsxs)(l.A,{gutter:12,children:[(0,g.jsx)(t.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Vendor App IOS",name:"vendor_app_ios",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{})})}),(0,g.jsx)(t.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Vendor App Android",name:"vendor_app_android",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{})})}),(0,g.jsx)(t.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Delivery App IOS",name:"delivery_app_ios",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{})})}),(0,g.jsx)(t.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Delivery App Android",name:"delivery_app_android",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{})})}),(0,g.jsx)(t.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Customer App IOS",name:"customer_app_ios",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{})})}),(0,g.jsx)(t.A,{span:12,children:(0,g.jsx)(i.A.Item,{label:"Customer App Android",name:"customer_app_android",rules:[{required:!0,message:e("required")}],children:(0,g.jsx)(u.A,{})})})]})})})}}}]);