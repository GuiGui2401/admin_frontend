"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7418],{2777:(A,e,l)=>{l.d(e,{A:()=>k});var a=l(9950),s=l(34517),t=l(27741),r=l(92555),i=l(23164),n=l(20567),d=l(87094),c=l(41988),u=l(43093),o=l(47017),p=l(70030),m=l(86377),x=l(15836),j=l(64924),h=l(69554),v=l(81446),y=l(49348),g=l(63620),b=l(44414);const f=A=>{let{type:e,setCurrentType:l,setImageList:t,imageList:r,setIsModalOpen:u,form:o,name:f}=A;const{t:E}=(0,p.B)(),[q,w]=(0,a.useState)([]),[I,k]=(0,a.useState)(!1),[N,F]=(0,a.useState)(10),[z,B]=(0,a.useState)(1),[D,Y]=(0,a.useState)(0),[S,M]=(0,a.useState)(0);(0,a.useEffect)((()=>{(()=>{const A={type:e,length:N,skip:S};k(!0),j.A.getAll(A).then((A=>{w(A.data),Y(A.meta.total)})).finally((()=>k(!1)))})()}),[z,N,S]);const T=A=>({uid:A,name:A,status:"done",url:g.sE+A,created:!0});return(0,b.jsx)("div",{className:"gallery-item ",children:(0,b.jsx)(n.A,{title:(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[(0,b.jsx)("span",{className:"mr-3",onClick:()=>l(null),children:(0,b.jsx)(x.A,{})}),(0,b.jsx)(i.NVk,{style:{fontSize:"25px"}}),(0,b.jsx)("span",{className:"ml-2",children:E("gallery")})]}),children:I?(0,b.jsx)(v.A,{}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.A,{gutter:[24,24],children:null===q||void 0===q?void 0:q.map(((A,e)=>(0,b.jsx)(c.A,{children:(0,b.jsx)(n.A,{className:`mb-0 ${A.isset?"card-noActive":"card-active"} card-image`,children:(0,b.jsx)(s.A,{preview:!1,src:(0,h.A)(A.file),className:"images",alt:"images",onClick:()=>{return e=A.file,void(r.includes(e)?y.oR.warn("This image is already uploaded"):(u(!1),t((A=>[...A,T(e)])),Boolean(f)?o.setFieldsValue({[f]:T(e)}):o.setFieldsValue({images:[...r,T(e)]})));var e}})})},e)))}),(0,b.jsx)("div",{className:"d-flex justify-content-end",children:(0,b.jsx)(m.A,{total:D,pageSize:N,current:z,onChange:A=>{const{pageSize:e,current:l}=A,a=(l-1)*e;F(e),B(l),M(a)}})})]})})})},E=A=>{let{setImageList:e,imageList:l,setIsModalOpen:s,form:t,name:r}=A;const{t:m}=(0,p.B)(),[x,j]=(0,a.useState)(null);return(0,b.jsx)(b.Fragment,{children:x?(0,b.jsx)(f,{type:x,setCurrentType:j,setImageList:e,imageList:l,setIsModalOpen:s,form:t,name:r}):(0,b.jsx)(n.A,{className:"media-upload-gallery-container",children:(0,b.jsx)(d.A,{gutter:[24,24],children:["languages","categories","shops","brands","products","users"].map((A=>(0,b.jsx)(c.A,{...o.g,children:(0,b.jsx)(n.A,{cover:(0,b.jsx)(i.WNP,{className:"icon-folder"}),title:m(A),className:"folder",onClick:()=>j(A),children:(0,b.jsx)(u.A,{})})})))})})})};var q=l(78433),w=l(59334),I=l(44864);const k=A=>{let{imageList:e,setImageList:l,form:i,type:n,multiple:d=!0,name:c,disabled:u=!1}=A;const[o,p]=(0,a.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"media-upload-wrapper",children:[null===e||void 0===e?void 0:e.map((A=>(0,b.jsxs)("div",{className:"image-wrapper",onClick:()=>{u||(A=>{const a=e.filter((e=>e!==A));i.setFieldsValue({images:a}),l(a)})(A)},children:[(0,b.jsx)(s.A,{preview:!1,src:(0,h.A)(null===A||void 0===A?void 0:A.name),className:"images",alt:"images"}),!u&&(0,b.jsx)(q.A,{})]},A))),(d||!e.length)&&!u&&(0,b.jsxs)("div",{className:"media-upload",onClick:()=>{p(!0)},children:[(0,b.jsx)(w.A,{})," ",(0,b.jsx)("span",{children:"Upload"})]})]}),(0,b.jsx)(t.A,{onCancel:()=>{p(!1)},maskClosable:!0,visible:o,footer:!1,width:"80%",children:(0,b.jsxs)(r.A,{children:[(0,b.jsx)(r.A.TabPane,{tab:"Media files",children:(0,b.jsx)(E,{form:i,setImageList:l,imageList:e,setIsModalOpen:p,name:c})},"item-1"),(0,b.jsx)(r.A.TabPane,{tab:"Upload media",className:"upload-media",children:(0,b.jsx)(I.A,{type:n,disabled:!1,form:i,setFileList:l,fileList:e,setIsModalOpen:p})},"item-2")]})})]})}},17456:(A,e,l)=>{l.d(e,{A:()=>a});l(9950);const a=l.p+"static/media/paystack.6d6a77c8d6bfc75061ec651e5c2e74eb.svg"},43093:(A,e,l)=>{l.d(e,{A:()=>t});l(9950);var a=l(48538),s=l(44414);const t=()=>(0,s.jsx)("span",{className:"icon-center",children:(0,s.jsx)(a.A,{type:"primary",danger:!0,shape:"circle",size:"small"})})},44864:(A,e,l)=>{l.d(e,{A:()=>p});var a=l(9950),s=l(90650),t=l(92759),r=l(2327),i=l(27741),n=l(59334),d=l(64924),c=l(63620),u=l(70030),o=l(44414);const p=A=>{let{fileList:e,setFileList:l,type:p,form:m}=A;const{t:x}=(0,u.B)(),[j,h]=(0,a.useState)(!1),[v,y]=(0,a.useState)(""),[g,b]=(0,a.useState)(""),[f,E]=(0,a.useState)(!1),q=A=>({uid:A.title,name:A.title,status:"done",url:c.sE+A.title,created:!0}),w=f?(0,o.jsx)("div",{children:(0,o.jsx)(s.A,{})}):(0,o.jsxs)("div",{children:[(0,o.jsx)(n.A,{}),(0,o.jsx)("div",{style:{marginTop:8},children:x("upload")})]});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{listType:"picture-card",fileList:e,onPreview:async A=>{A.url||A.preview||(A.preview=await(A=>new Promise(((e,l)=>{const a=new FileReader;a.readAsDataURL(A),a.onload=()=>e(a.result),a.onerror=A=>l(A)})))(A.originFileObj)),y(A.url||A.preview),h(!0),b(A.name||A.url.substring(A.url.lastIndexOf("/")+1))},onChange:A=>{let{fileList:e}=A},customRequest:A=>{let{file:a,onSuccess:s}=A;E(!0);const t=new FormData;t.append("image",a),t.append("type",p),d.A.upload(t).then((A=>{let{data:a}=A;l((A=>[...A,q(a)])),m.setFieldsValue({images:[...e,q(a)]}),s("ok")})).finally((()=>E(!1)))},onRemove:A=>{l((e=>e.filter((e=>e.uid!==A.uid))))},beforeUpload:A=>{const e="image/jpeg"===A.type||"image/png"===A.type||"image/jpg"===A.type||"image/svg+xml"===A.type||"image/webp"===A.type;e||t.Ay.error("You can only upload JPG/PNG/SVG/WEBP file!");const l=A.size/1024/1024<2;return l||t.Ay.error("Image must smaller than 2MB!"),e&&l},accept:"image/*",children:e.length>=24?null:w}),(0,o.jsx)(i.A,{visible:j,title:g,footer:null,onCancel:()=>h(!1),children:(0,o.jsx)("img",{alt:"example",style:{width:"100%"},src:v})})]})}},47017:(A,e,l)=>{l.d(e,{g:()=>a});const a={xs:12,sm:12,md:8,lg:8,xxl:4,xl:6}},69554:(A,e,l)=>{l.d(e,{A:()=>s});l(63620);const a="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";function s(A){return A||a}},77108:(A,e,l)=>{l.d(e,{A3:()=>s,XV:()=>a});function a(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function s(A){var e=A.getBoundingClientRect(),l=document.documentElement;return{left:e.left+(window.pageXOffset||l.scrollLeft)-(l.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||l.scrollTop)-(l.clientTop||document.body.clientTop||0)}}},78433:(A,e,l)=>{l.d(e,{A:()=>n});var a=l(89379),s=l(9950),t=l(18042),r=l(16233),i=function(A,e){return s.createElement(r.A,(0,a.A)((0,a.A)({},A),{},{ref:e,icon:t.A}))};i.displayName="DeleteOutlined";const n=s.forwardRef(i)},85023:(A,e,l)=>{l.d(e,{D:()=>i});var a=l(9950),s=l(99674),t=l(90650),r=l(44414);const i=A=>{let{fetchOptions:e,refetch:l=!1,...i}=A;const[n,d]=(0,a.useState)(!1),[c,u]=(0,a.useState)([]);return(0,r.jsx)(s.A,{filterOption:!1,labelInValue:!0,notFoundContent:n?(0,r.jsx)(t.A,{size:"small"}):"no results",...i,options:n?[]:c,onFocus:()=>{c.length&&!l||(d(!0),e().then((A=>{u(A),d(!1)})))}})}},97163:(A,e,l)=>{l.r(e),l.d(e,{default:()=>N});var a=l(9950),s=l(25887),t=l(20567),r=l(87094),i=l(41988),n=l(99674),d=l(90650),c=l(93124),u=l(25933),o=l(48538),p=l(70030),m=l(74623),x=l(91854),j=l(49348),h=l(28429),v=l(17456),y=l(54826),g=l(70283),b=l(46984),f=l(77380),E=l(34996),q=l(85023),w=l(13567),I=l(87822),k=(l(2777),l(44414));function N(){var A;const{t:e}=(0,p.B)(),[l]=s.A.useForm(),[N,F]=(0,a.useState)(!1),[z,B]=(0,a.useState)(!1),[D,Y]=(0,a.useState)([]),[S,M]=(0,a.useState)(null),{languages:T}=(0,x.d4)((A=>A.formLang),x.bN),{activeMenu:O}=(0,x.d4)((A=>A.menu),x.bN),{defaultCurrency:C}=(0,x.d4)((A=>A.currency),x.bN),Q=(0,x.wA)(),P=(0,h.Zp)();(0,a.useEffect)((()=>{!async function(){B(!0),E.A.getAll().then((A=>{let{data:e}=A;const l=e.filter((A=>"wallet"!==A.tag)).filter((A=>"cash"!==A.tag)).map((A=>({label:A.tag[0].toUpperCase()+A.tag.substring(1),value:A.id,key:A.id})));Y(l)})).finally((()=>B(!1)))}()}),[]);return(0,k.jsx)(t.A,{title:e("add.payment.payloads"),className:"h-100",children:(0,k.jsxs)(s.A,{layout:"vertical",name:"user-address",form:l,onFinish:A=>{var l;delete A.payment_id,F(!0),f.C.create({payment_id:S.value,payload:{...A,paypal_currency:null===(l=A.paypal_currency)||void 0===l?void 0:l.label,paypal_validate_ssl:null!==A&&void 0!==A&&A.paypal_validate_ssl?Number(null===A||void 0===A?void 0:A.paypal_validate_ssl):void 0}}).then((()=>{const A="payment-payloads";j.oR.success(e("successfully.created")),Q((0,m.EK)({...O,nextUrl:A})),P(`/${A}`),Q((0,b.i)()),Q((0,m.Ms)(O))})).catch((A=>{j.oR.dismiss(A.response.status),j.oR.error(A.response.data.params.payment_id[0])})).finally((()=>F(!1)))},children:[(0,k.jsxs)(r.A,{gutter:12,children:[(0,k.jsx)(i.A,{span:"Cash"===(null===S||void 0===S?void 0:S.label)||"Wallet"===(null===S||void 0===S?void 0:S.label)?12:24,children:(0,k.jsx)(s.A.Item,{label:e("payment"),name:"payment_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(n.A,{notFoundContent:z?(0,k.jsx)(d.A,{size:"small"}):"no results",allowClear:!0,options:D,onSelect:A=>{const e=D.find((e=>e.value===A));switch(e.label){case"Paypal":l.setFieldsValue({paypal_validate_ssl:!0,paypal_locale:I.A.language,paypal_currency:{label:null===C||void 0===C?void 0:C.title,value:null===C||void 0===C?void 0:C.id}});break;case"Stripe":case"Razorpay":case"Paystack":case"FlutterWave":l.setFieldsValue({currency:null===C||void 0===C?void 0:C.title});break;default:l.resetFields()}M(e)}})})}),"Cash"===(null===S||void 0===S?void 0:S.label)||"Wallet"===(null===S||void 0===S?void 0:S.label)?"":(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.A,{span:24,children:(0,k.jsx)(k.Fragment,{children:(A=>{switch(A){case"Paypal":return(0,k.jsx)(y.SnG,{size:80});case"Stripe":return(0,k.jsx)(g.kDV,{size:80});case"Razorpay":return(0,k.jsx)(g.NVb,{size:80});case"Paystack":return(0,k.jsx)("img",{src:v.A,alt:"img",width:"80",height:"80"});default:return null}})(null===S||void 0===S?void 0:S.label)})}),"Paystack"===(null===S||void 0===S?void 0:S.label)?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paystack.pk"),name:"paystack_pk",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paystack.sk"),name:"paystack_sk",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})})," ",(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("currency"),name:"currency",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(q.D,{placeholder:e("select.currency"),valuePropName:"label",defaultValue:{value:C.id,label:C.title},fetchOptions:()=>w.A.getAll().then((A=>{let{data:e}=A;return e.filter((A=>A.active)).map((A=>({value:A.id,label:`${A.title}`,key:A.id})))}))})})})]}):"Paypal"===(null===S||void 0===S?void 0:S.label)?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.mode"),name:"paypal_mode",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(n.A,{options:[{value:"live",label:e("live")},{value:"sandbox",label:e("sandbox")}]})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.sandbox.client.id"),name:"paypal_sandbox_client_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.sandbox.client.secret"),name:"paypal_sandbox_client_secret",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.sandbox.app.id"),name:"paypal_sandbox_app_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.live.client.id"),name:"paypal_live_client_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.live.client.secret"),name:"paypal_live_client_secret",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.live.app.id"),name:"paypal_live_app_id",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.payment.action"),name:"paypal_payment_action",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(n.A,{options:[{value:"Sale",label:e("sale")},{value:"Order",label:e("order")},{value:"Authorization",label:e("authorization")}]})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.currency"),name:"paypal_currency",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(q.D,{placeholder:e("select.currency"),valuePropName:"label",defaultValue:{value:C.id,label:C.title},fetchOptions:()=>w.A.getAll().then((A=>{let{data:e}=A;return e.filter((A=>A.active)).map((A=>({value:A.id,label:`${A.title}`,key:A.id})))}))})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.locale"),name:"paypal_locale",rules:[{required:!0,message:e("required")}],valuePropName:"value",children:(0,k.jsx)(n.A,{placeholder:e("select.locale"),defaultValue:{label:null===(A=T.find((A=>A.locale===I.A.language)))||void 0===A?void 0:A.title,value:I.A.language},options:null===T||void 0===T?void 0:T.map((A=>({value:A.locale,label:A.locale})))})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("paypal.validate.ssl"),name:"paypal_validate_ssl",valuePropName:"checked",children:(0,k.jsx)(u.A,{defaultChecked:!0})})})]}):"Stripe"===(null===S||void 0===S?void 0:S.label)?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("stripe.pk"),name:"stripe_pk",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("stripe.sk"),name:"stripe_sk",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("currency"),name:"currency",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(q.D,{placeholder:e("select.currency"),valuePropName:"label",defaultValue:{value:C.id,label:C.title},fetchOptions:()=>w.A.getAll().then((A=>{let{data:e}=A;return e.filter((A=>A.active)).map((A=>({value:A.id,label:`${A.title}`,key:A.id})))}))})})})]}):"Razorpay"===(null===S||void 0===S?void 0:S.label)?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("razorpay.key"),name:"razorpay_key",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("razorpay.secret"),name:"razorpay_secret",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("currency"),name:"currency",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(q.D,{placeholder:e("select.currency"),valuePropName:"label",defaultValue:{value:C.id,label:C.title},fetchOptions:()=>w.A.getAll().then((A=>{let{data:e}=A;return e.filter((A=>A.active)).map((A=>({value:A.id,label:`${A.title}`,key:A.id})))}))})})})]}):"FlutterWave"===(null===S||void 0===S?void 0:S.label)?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("payload.title"),name:"title",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("payload.description"),name:"description",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("flw_pk"),name:"flw_pk",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("flw_sk"),name:"flw_sk",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("key"),name:"key",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(c.A,{})})}),(0,k.jsx)(i.A,{span:12,children:(0,k.jsx)(s.A.Item,{label:e("currency"),name:"currency",rules:[{required:!0,message:e("required")}],children:(0,k.jsx)(q.D,{placeholder:e("select.currency"),valuePropName:"label",defaultValue:{value:C.id,label:C.title},fetchOptions:()=>w.A.getAll().then((A=>{let{data:e}=A;return e.filter((A=>A.active)).map((A=>({value:A.id,label:`${A.title}`,key:A.id})))}))})})})]}):null]})]}),(0,k.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,k.jsx)("div",{className:"pb-5",children:(0,k.jsx)(o.A,{type:"primary",htmlType:"submit",loading:N,disabled:N,children:e("submit")})})})]})})}}}]);