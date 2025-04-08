"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7239],{2777:(A,e,t)=>{t.d(e,{A:()=>N});var n=t(9950),a=t(34517),l=t(27741),s=t(92555),r=t(23164),i=t(20567),c=t(87094),o=t(41988),d=t(43093),u=t(47017),m=t(70030),p=t(86377),f=t(15836),x=t(64924),g=t(69554),v=t(81446),h=t(49348),b=t(63620),j=t(44414);const y=A=>{let{type:e,setCurrentType:t,setImageList:l,imageList:s,setIsModalOpen:d,form:u,name:y}=A;const{t:E}=(0,m.B)(),[w,C]=(0,n.useState)([]),[O,N]=(0,n.useState)(!1),[B,M]=(0,n.useState)(10),[T,Y]=(0,n.useState)(1),[Q,D]=(0,n.useState)(0),[S,F]=(0,n.useState)(0);(0,n.useEffect)((()=>{(()=>{const A={type:e,length:B,skip:S};N(!0),x.A.getAll(A).then((A=>{C(A.data),D(A.meta.total)})).finally((()=>N(!1)))})()}),[T,B,S]);const L=A=>({uid:A,name:A,status:"done",url:b.sE+A,created:!0});return(0,j.jsx)("div",{className:"gallery-item ",children:(0,j.jsx)(i.A,{title:(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[(0,j.jsx)("span",{className:"mr-3",onClick:()=>t(null),children:(0,j.jsx)(f.A,{})}),(0,j.jsx)(r.NVk,{style:{fontSize:"25px"}}),(0,j.jsx)("span",{className:"ml-2",children:E("gallery")})]}),children:O?(0,j.jsx)(v.A,{}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(c.A,{gutter:[24,24],children:null===w||void 0===w?void 0:w.map(((A,e)=>(0,j.jsx)(o.A,{children:(0,j.jsx)(i.A,{className:`mb-0 ${A.isset?"card-noActive":"card-active"} card-image`,children:(0,j.jsx)(a.A,{preview:!1,src:(0,g.A)(A.file),className:"images",alt:"images",onClick:()=>{return e=A.file,void(s.includes(e)?h.oR.warn("This image is already uploaded"):(d(!1),l((A=>[...A,L(e)])),Boolean(y)?u.setFieldsValue({[y]:L(e)}):u.setFieldsValue({images:[...s,L(e)]})));var e}})})},e)))}),(0,j.jsx)("div",{className:"d-flex justify-content-end",children:(0,j.jsx)(p.A,{total:Q,pageSize:B,current:T,onChange:A=>{const{pageSize:e,current:t}=A,n=(t-1)*e;M(e),Y(t),F(n)}})})]})})})},E=A=>{let{setImageList:e,imageList:t,setIsModalOpen:a,form:l,name:s}=A;const{t:p}=(0,m.B)(),[f,x]=(0,n.useState)(null);return(0,j.jsx)(j.Fragment,{children:f?(0,j.jsx)(y,{type:f,setCurrentType:x,setImageList:e,imageList:t,setIsModalOpen:a,form:l,name:s}):(0,j.jsx)(i.A,{className:"media-upload-gallery-container",children:(0,j.jsx)(c.A,{gutter:[24,24],children:["languages","categories","shops","brands","products","users"].map((A=>(0,j.jsx)(o.A,{...u.g,children:(0,j.jsx)(i.A,{cover:(0,j.jsx)(r.WNP,{className:"icon-folder"}),title:p(A),className:"folder",onClick:()=>x(A),children:(0,j.jsx)(d.A,{})})})))})})})};var w=t(78433),C=t(59334),O=t(44864);const N=A=>{let{imageList:e,setImageList:t,form:r,type:i,multiple:c=!0,name:o,disabled:d=!1}=A;const[u,m]=(0,n.useState)(!1);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)("div",{className:"media-upload-wrapper",children:[null===e||void 0===e?void 0:e.map((A=>(0,j.jsxs)("div",{className:"image-wrapper",onClick:()=>{d||(A=>{const n=e.filter((e=>e!==A));r.setFieldsValue({images:n}),t(n)})(A)},children:[(0,j.jsx)(a.A,{preview:!1,src:(0,g.A)(null===A||void 0===A?void 0:A.name),className:"images",alt:"images"}),!d&&(0,j.jsx)(w.A,{})]},A))),(c||!e.length)&&!d&&(0,j.jsxs)("div",{className:"media-upload",onClick:()=>{m(!0)},children:[(0,j.jsx)(C.A,{})," ",(0,j.jsx)("span",{children:"Upload"})]})]}),(0,j.jsx)(l.A,{onCancel:()=>{m(!1)},maskClosable:!0,visible:u,footer:!1,width:"80%",children:(0,j.jsxs)(s.A,{children:[(0,j.jsx)(s.A.TabPane,{tab:"Media files",children:(0,j.jsx)(E,{form:r,setImageList:t,imageList:e,setIsModalOpen:m,name:o})},"item-1"),(0,j.jsx)(s.A.TabPane,{tab:"Upload media",className:"upload-media",children:(0,j.jsx)(O.A,{type:i,disabled:!1,form:r,setFileList:t,fileList:e,setIsModalOpen:m})},"item-2")]})})]})}},14691:(A,e,t)=>{t.d(e,{A:()=>m});var n=t(58168),a=t(89379),l=t(64467),s=t(5544),r=t(80045),i=t(48738),c=t.n(i),o=t(71207),d=t(9950),u=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const m=(0,d.forwardRef)((function(A,e){var t,i=A.prefixCls,m=void 0===i?"rc-checkbox":i,p=A.className,f=A.style,x=A.checked,g=A.disabled,v=A.defaultChecked,h=void 0!==v&&v,b=A.type,j=void 0===b?"checkbox":b,y=A.onChange,E=(0,r.A)(A,u),w=(0,d.useRef)(null),C=(0,o.A)(h,{value:x}),O=(0,s.A)(C,2),N=O[0],B=O[1];(0,d.useImperativeHandle)(e,(function(){return{focus:function(){var A;null===(A=w.current)||void 0===A||A.focus()},blur:function(){var A;null===(A=w.current)||void 0===A||A.blur()},input:w.current}}));var M=c()(m,p,(t={},(0,l.A)(t,"".concat(m,"-checked"),N),(0,l.A)(t,"".concat(m,"-disabled"),g),t));return d.createElement("span",{className:M,style:f},d.createElement("input",(0,n.A)({},E,{className:"".concat(m,"-input"),ref:w,onChange:function(e){g||("checked"in A||B(e.target.checked),null===y||void 0===y||y({target:(0,a.A)((0,a.A)({},A),{},{type:j,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},disabled:g,checked:!!N,type:j})),d.createElement("span",{className:"".concat(m,"-inner")}))}))},17811:(A,e,t)=>{t.d(e,{Ay:()=>Y});var n=t(58168),a=t(64467),l=t(5544),s=t(48738),r=t.n(s),i=t(71207),c=t(9950),o=t(5741),d=t(87126),u=t(27373),m=c.createContext(null),p=m.Provider;const f=m;var x=c.createContext(null),g=x.Provider,v=t(14691),h=t(41929),b=t(19389),j=t(77643),y=function(A,e){var t={};for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&e.indexOf(n)<0&&(t[n]=A[n]);if(null!=A&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(A);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(A,n[a])&&(t[n[a]]=A[n[a]])}return t},E=function(A,e){var t,l=c.useContext(f),s=c.useContext(x),i=c.useContext(o.QO),d=i.getPrefixCls,u=i.direction,m=c.useRef(),p=(0,h.K4)(e,m),g=(0,c.useContext)(j.$W).isFormItemInput,E=A.prefixCls,w=A.className,C=A.children,O=A.style,N=A.disabled,B=y(A,["prefixCls","className","children","style","disabled"]),M=d("radio",E),T="button"===((null===l||void 0===l?void 0:l.optionType)||s)?"".concat(M,"-button"):M,Y=(0,n.A)({},B),Q=c.useContext(b.A);Y.disabled=N||Q,l&&(Y.name=l.name,Y.onChange=function(e){var t,n;null===(t=A.onChange)||void 0===t||t.call(A,e),null===(n=null===l||void 0===l?void 0:l.onChange)||void 0===n||n.call(l,e)},Y.checked=A.value===l.value,Y.disabled=Y.disabled||l.disabled);var D=r()("".concat(T,"-wrapper"),(t={},(0,a.A)(t,"".concat(T,"-wrapper-checked"),Y.checked),(0,a.A)(t,"".concat(T,"-wrapper-disabled"),Y.disabled),(0,a.A)(t,"".concat(T,"-wrapper-rtl"),"rtl"===u),(0,a.A)(t,"".concat(T,"-wrapper-in-form-item"),g),t),w);return c.createElement("label",{className:D,style:O,onMouseEnter:A.onMouseEnter,onMouseLeave:A.onMouseLeave},c.createElement(v.A,(0,n.A)({},Y,{type:"radio",prefixCls:T,ref:p})),void 0!==C?c.createElement("span",null,C):null)};const w=c.forwardRef(E);var C=c.forwardRef((function(A,e){var t,s=c.useContext(o.QO),m=s.getPrefixCls,f=s.direction,x=c.useContext(d.A),g=(0,i.A)(A.defaultValue,{value:A.value}),v=(0,l.A)(g,2),h=v[0],b=v[1],j=A.prefixCls,y=A.className,E=void 0===y?"":y,C=A.options,O=A.buttonStyle,N=void 0===O?"outline":O,B=A.disabled,M=A.children,T=A.size,Y=A.style,Q=A.id,D=A.onMouseEnter,S=A.onMouseLeave,F=A.onFocus,L=A.onBlur,P=m("radio",j),k="".concat(P,"-group"),I=M;C&&C.length>0&&(I=C.map((function(A){return"string"===typeof A||"number"===typeof A?c.createElement(w,{key:A.toString(),prefixCls:P,disabled:B,value:A,checked:h===A},A):c.createElement(w,{key:"radio-group-value-options-".concat(A.value),prefixCls:P,disabled:A.disabled||B,value:A.value,checked:h===A.value,style:A.style},A.label)})));var R=T||x,U=r()(k,"".concat(k,"-").concat(N),(t={},(0,a.A)(t,"".concat(k,"-").concat(R),R),(0,a.A)(t,"".concat(k,"-rtl"),"rtl"===f),t),E);return c.createElement("div",(0,n.A)({},(0,u.A)(A),{className:U,style:Y,onMouseEnter:D,onMouseLeave:S,onFocus:F,onBlur:L,id:Q,ref:e}),c.createElement(p,{value:{onChange:function(e){var t=h,n=e.target.value;"value"in A||b(n);var a=A.onChange;a&&n!==t&&a(e)},value:h,disabled:A.disabled,name:A.name,optionType:A.optionType}},I))}));const O=c.memo(C);var N=function(A,e){var t={};for(var n in A)Object.prototype.hasOwnProperty.call(A,n)&&e.indexOf(n)<0&&(t[n]=A[n]);if(null!=A&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(A);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(A,n[a])&&(t[n[a]]=A[n[a]])}return t},B=function(A,e){var t=c.useContext(o.QO).getPrefixCls,a=A.prefixCls,l=N(A,["prefixCls"]),s=t("radio",a);return c.createElement(g,{value:"button"},c.createElement(w,(0,n.A)({prefixCls:s},l,{type:"radio",ref:e})))};const M=c.forwardRef(B);var T=w;T.Button=M,T.Group=O,T.__ANT_RADIO=!0;const Y=T},27373:(A,e,t)=>{function n(A){return Object.keys(A).reduce((function(e,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(e[t]=A[t]),e}),{})}t.d(e,{A:()=>n})},31281:(A,e,t)=>{function n(A,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const n=A.filter((A=>e[`${t}[${A.locale}]`])).map((A=>({[A.locale]:e[`${t}[${A.locale}]`]})));return Object.assign({},...n)}t.d(e,{A:()=>n})},43093:(A,e,t)=>{t.d(e,{A:()=>l});t(9950);var n=t(48538),a=t(44414);const l=()=>(0,a.jsx)("span",{className:"icon-center",children:(0,a.jsx)(n.A,{type:"primary",danger:!0,shape:"circle",size:"small"})})},44864:(A,e,t)=>{t.d(e,{A:()=>m});var n=t(9950),a=t(90650),l=t(92759),s=t(2327),r=t(27741),i=t(59334),c=t(64924),o=t(63620),d=t(70030),u=t(44414);const m=A=>{let{fileList:e,setFileList:t,type:m,form:p}=A;const{t:f}=(0,d.B)(),[x,g]=(0,n.useState)(!1),[v,h]=(0,n.useState)(""),[b,j]=(0,n.useState)(""),[y,E]=(0,n.useState)(!1),w=A=>({uid:A.title,name:A.title,status:"done",url:o.sE+A.title,created:!0}),C=y?(0,u.jsx)("div",{children:(0,u.jsx)(a.A,{})}):(0,u.jsxs)("div",{children:[(0,u.jsx)(i.A,{}),(0,u.jsx)("div",{style:{marginTop:8},children:f("upload")})]});return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.A,{listType:"picture-card",fileList:e,onPreview:async A=>{A.url||A.preview||(A.preview=await(A=>new Promise(((e,t)=>{const n=new FileReader;n.readAsDataURL(A),n.onload=()=>e(n.result),n.onerror=A=>t(A)})))(A.originFileObj)),h(A.url||A.preview),g(!0),j(A.name||A.url.substring(A.url.lastIndexOf("/")+1))},onChange:A=>{let{fileList:e}=A},customRequest:A=>{let{file:n,onSuccess:a}=A;E(!0);const l=new FormData;l.append("image",n),l.append("type",m),c.A.upload(l).then((A=>{let{data:n}=A;t((A=>[...A,w(n)])),p.setFieldsValue({images:[...e,w(n)]}),a("ok")})).finally((()=>E(!1)))},onRemove:A=>{t((e=>e.filter((e=>e.uid!==A.uid))))},beforeUpload:A=>{const e="image/jpeg"===A.type||"image/png"===A.type||"image/jpg"===A.type||"image/svg+xml"===A.type||"image/webp"===A.type;e||l.Ay.error("You can only upload JPG/PNG/SVG/WEBP file!");const t=A.size/1024/1024<2;return t||l.Ay.error("Image must smaller than 2MB!"),e&&t},accept:"image/*",children:e.length>=24?null:C}),(0,u.jsx)(r.A,{visible:x,title:b,footer:null,onCancel:()=>g(!1),children:(0,u.jsx)("img",{alt:"example",style:{width:"100%"},src:v})})]})}},47017:(A,e,t)=>{t.d(e,{g:()=>n});const n={xs:12,sm:12,md:8,lg:8,xxl:4,xl:6}},50078:(A,e,t)=>{t.r(e),t.d(e,{default:()=>j});var n=t(9950),a=t(28429),l=t(49348),s=t(25887),r=t(20567),i=t(87094),c=t(41988),o=t(93124),d=t(48538),u=t(91854),m=t(74623),p=t(70030),f=t(31281),x=t(71999),g=t(2777),v=t(58974),h=t(17498),b=t(44414);const j=()=>{const{t:A}=(0,p.B)(),{activeMenu:e}=(0,u.d4)((A=>A.menu),u.bN),t=(0,u.wA)(),[j]=s.A.useForm(),y=(0,a.Zp)(),[E,w]=(0,n.useState)([]),[C,O]=(0,n.useState)(!1),{languages:N,defaultLang:B}=(0,u.d4)((A=>A.formLang),u.bN);(0,n.useEffect)((()=>()=>{const A=j.getFieldsValue(!0);t((0,m.Ok)({activeMenu:e,data:A}))}),[]);return(0,b.jsx)(r.A,{title:A("add.shop.tag"),className:"h-100",extra:(0,b.jsx)(x.A,{}),children:(0,b.jsxs)(s.A,{name:"add.shop.tag",layout:"vertical",onFinish:n=>{const a={images:E.map((A=>A.name)),title:(0,f.A)(N,n,"title")};O(!0);const s="shop-tag";v.A.create(a).then((()=>{l.oR.success(A("successfully.created")),t((0,m.EK)({...e,nextUrl:s})),y(`/${s}`),t((0,h.H)())})).finally((()=>O(!1)))},form:j,initialValues:{clickable:!0,...e.data},className:"d-flex flex-column h-100",children:[(0,b.jsxs)(i.A,{gutter:12,children:[(0,b.jsx)(c.A,{span:12,children:N.map((e=>(0,b.jsx)(s.A.Item,{label:A("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===B,message:A("required")}],hidden:e.locale!==B,children:(0,b.jsx)(o.A,{})},"title"+e.locale)))}),(0,b.jsx)(c.A,{span:12,children:(0,b.jsx)(s.A.Item,{rules:[{required:!0,message:A("required")}],label:A("image"),name:"images",children:(0,b.jsx)(g.A,{type:"products",imageList:E,setImageList:w,form:j,length:"1",multiple:!0})})})]}),(0,b.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,b.jsx)("div",{className:"pb-5",children:(0,b.jsx)(d.A,{type:"primary",htmlType:"submit",loading:C,children:A("submit")})})})]})})}},69554:(A,e,t)=>{t.d(e,{A:()=>a});t(63620);const n="data:image/jpeg;base64,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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==";function a(A){return A||n}},71999:(A,e,t)=>{t.d(e,{A:()=>c});var n=t(9950),a=t(17811),l=t(12437),s=t(91854),r=t(82406),i=t(44414);const c=()=>{const A=(0,s.wA)(),{languages:e,defaultLang:t}=(0,s.d4)((A=>A.formLang),s.bN);(0,n.useEffect)((()=>{e.length||l.A.getAllActive().then((e=>{let{data:t}=e;A((0,r.Nn)(t))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.Ay.Group,{value:t,onChange:e=>{let{target:{value:t}}=e;A((0,r.Qq)(t))},className:"float-right",buttonStyle:"solid",children:e.map((A=>(0,i.jsx)(a.Ay.Button,{value:A.locale,children:A.title},A.id)))})})}},77108:(A,e,t)=>{t.d(e,{A3:()=>a,XV:()=>n});function n(){return{width:document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}}function a(A){var e=A.getBoundingClientRect(),t=document.documentElement;return{left:e.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:e.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}},78433:(A,e,t)=>{t.d(e,{A:()=>i});var n=t(89379),a=t(9950),l=t(18042),s=t(16233),r=function(A,e){return a.createElement(s.A,(0,n.A)((0,n.A)({},A),{},{ref:e,icon:l.A}))};r.displayName="DeleteOutlined";const i=a.forwardRef(r)}}]);