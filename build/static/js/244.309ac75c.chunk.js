"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[244],{17456:(e,s,t)=>{t.d(s,{A:()=>a});t(9950);const a=t.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},40244:(e,s,t)=>{t.r(s),t.d(s,{default:()=>S});var a=t(9950),n=t(20567),l=t(87094),i=t(41988),c=t(74947),r=t(48538),d=t(90650),o=(t(85201),t(82371));const h={getAll:e=>o.A.get("dashboard/seller/subscriptions",{params:e}),attach:(e,s)=>o.A.post(`dashboard/seller/subscriptions/${e}/attach`,s),transactionCreate:(e,s)=>o.A.post(`payments/subscription/${e}/transactions`,s)};var p=t(91854),m=t(70030),u=t(27741),x=t(53496),y=t(81446),j=t(49348),v=t(73242),f=t(17456),b=t(54826),g=t(70283),A=t(44414);const N=["cash","wallet"];function w(e){let{modal:s,handleCancel:t}=e;const{t:c}=(0,m.B)(),d=(0,p.wA)(),{payments:o,loading:w}=(0,p.d4)((e=>e.payment),p.bN),{seller:k}=(0,p.d4)((e=>e.myShop.myShop),p.bN),[S,C]=(0,a.useState)(!1),[z,R]=(0,a.useState)({});(0,a.useEffect)((()=>{d((0,x.Np)())}),[]);const _=e=>{switch(e){case"paypal":return(0,A.jsx)(b.SnG,{size:30});case"stripe":return(0,A.jsx)(g.kDV,{size:30});case"cash":return(0,A.jsx)(b.Tsk,{size:30});case"wallet":return(0,A.jsx)(b.lcY,{size:30});case"razorpay":return(0,A.jsx)(g.NVb,{size:30});case"paystack":return(0,A.jsx)("img",{src:f.A,alt:"img",width:"30",height:"30"})}};return console.log("paymentType",z),console.log("modal",s),(0,A.jsx)(u.A,{visible:!!s,title:c("purchase.subscription"),onCancel:t,footer:[(0,A.jsx)(r.A,{type:"primary",onClick:()=>{var e;z.id?"wallet"===z.payment.tag&&(null===k||void 0===k||null===(e=k.wallet)||void 0===e?void 0:e.price)<s.price?j.oR.warning(c("insufficient.balance")):(C(!0),h.attach(s.id).then((e=>{let{data:s}=e;return function(e){const s={payment_sys_id:z.id};h.transactionCreate(e,s).then((()=>{t(),j.oR.success(c("successfully.purchased")),d((0,v.v)())})).finally((()=>C(!1)))}(s.id)})).finally((()=>C(!1)))):j.oR.warning(c("please.select.payment.type"))},loading:S,children:c("save")},"save-btn"),(0,A.jsx)(r.A,{type:"default",onClick:t,children:c("cancel")},"cancel-btn")],children:w?(0,A.jsx)(y.A,{}):(0,A.jsx)(l.A,{gutter:12,children:o.map((e=>{var s,t,a,l,r;return(0,A.jsx)(i.A,{span:8,children:(0,A.jsxs)(n.A,{className:"payment-card "+((null===z||void 0===z||null===(s=z.payment)||void 0===s?void 0:s.tag)===(null===e||void 0===e||null===(t=e.payment)||void 0===t?void 0:t.tag)?"active":""),onClick:()=>{return s=e,console.log("type",s.payment.tag),void(N.includes(s.payment.tag)?R(s):j.oR.warning(c("cannot.work.demo")));var s},children:[_(null===(a=e.payment)||void 0===a?void 0:a.tag),(0,A.jsx)("div",{className:"font-weight-bold mt-2",children:c(null===(l=e.payment)||void 0===l||null===(r=l.translation)||void 0===r?void 0:r.title)})]})})}))})})}const k=[];function S(){const{t:e}=(0,m.B)(),{defaultCurrency:s}=(0,p.d4)((e=>e.currency),p.bN),{myShop:t}=(0,p.d4)((e=>e.myShop),p.bN),[o,u]=(0,a.useState)(null),[x,y]=(0,a.useState)(!1),[j,v]=(0,a.useState)([]),f=j.length,b=()=>{y(!0),h.getAll().then((e=>{v(e.data)})).finally((()=>y(!1)))};return(0,a.useEffect)((()=>{b()}),[]),console.log("myShop",t),console.log("data =?",j),(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(n.A,{className:"h-100",children:x?(0,A.jsx)(i.A,{className:"ant-col-spin d-flex justify-content-center",children:(0,A.jsx)(d.A,{size:"large"})}):(0,A.jsxs)("div",{children:[(0,A.jsxs)("div",{className:"text-center mb-4",children:[(0,A.jsx)("h2",{className:"font-weight-semibold",children:"Pick a base plan"}),(0,A.jsx)(l.A,{type:"flex",justify:"center",children:(0,A.jsx)(i.A,{sm:24,md:12,lg:8,children:(0,A.jsx)("p",{children:"Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission."})})})]}),(0,A.jsx)(l.A,{children:j.map(((a,n)=>{var l;return(0,A.jsx)(i.A,{span:6,className:f===n+1?"":"border-right",children:(0,A.jsx)(c.A.Ribbon,{text:e("active"),color:"red",className:(null===(l=t.subscription)||void 0===l?void 0:l.subscription_id)===a.id?"":"d-none",children:(0,A.jsxs)("div",{className:"p-3",children:[(0,A.jsxs)("div",{className:"text-center",children:[(0,A.jsxs)("h1",{className:"display-4 mt-4",children:[(0,A.jsx)("span",{className:"font-size-md d-inline-block mr-1",style:{transform:"translate(0px, -17px)"},children:s.symbol}),(0,A.jsx)("span",{children:a.price})]}),(0,A.jsxs)("p",{className:"mb-0 text-lowercase",children:[a.month," ",e("month")]})]}),(0,A.jsx)("div",{className:"mt-4",children:(0,A.jsx)("h2",{className:"text-center font-weight-semibold",children:a.type})}),(0,A.jsx)("div",{className:"d-flex justify-content-center mt-3",children:(0,A.jsx)("div",{children:null===k||void 0===k?void 0:k.map(((e,s)=>(0,A.jsxs)("p",{children:[(0,A.jsx)(c.A,{color:"blue"}),(0,A.jsx)("span",{children:e})]},`pricing-feature-${s}`)))})}),(0,A.jsx)("div",{className:"mt-3 text-center",children:(0,A.jsx)(r.A,{type:"default",onClick:()=>u(a),children:e("purchase")})})]})})},`price-column-${n}`)}))})]})}),o&&(0,A.jsx)(w,{modal:o,handleCancel:()=>u(null),refetch:b})]})}},85201:()=>{}}]);