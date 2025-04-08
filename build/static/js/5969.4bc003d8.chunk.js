"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5969],{14691:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(58168),l=n(89379),r=n(64467),o=n(5544),c=n(80045),s=n(48738),i=n.n(s),u=n(71207),d=n(9950),f=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const p=(0,d.forwardRef)((function(e,t){var n,s=e.prefixCls,p=void 0===s?"rc-checkbox":s,v=e.className,m=e.style,h=e.checked,b=e.disabled,y=e.defaultChecked,A=void 0!==y&&y,x=e.type,g=void 0===x?"checkbox":x,C=e.onChange,j=(0,c.A)(e,f),k=(0,d.useRef)(null),O=(0,u.A)(A,{value:h}),E=(0,o.A)(O,2),N=E[0],w=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=k.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=k.current)||void 0===e||e.blur()},input:k.current}}));var P=i()(p,v,(n={},(0,r.A)(n,"".concat(p,"-checked"),N),(0,r.A)(n,"".concat(p,"-disabled"),b),n));return d.createElement("span",{className:P,style:m},d.createElement("input",(0,a.A)({},j,{className:"".concat(p,"-input"),ref:k,onChange:function(t){b||("checked"in e||w(t.target.checked),null===C||void 0===C||C({target:(0,l.A)((0,l.A)({},e),{},{type:g,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!N,type:g})),d.createElement("span",{className:"".concat(p,"-inner")}))}))},17811:(e,t,n)=>{n.d(t,{Ay:()=>M});var a=n(58168),l=n(64467),r=n(5544),o=n(48738),c=n.n(o),s=n(71207),i=n(9950),u=n(5741),d=n(87126),f=n(27373),p=i.createContext(null),v=p.Provider;const m=p;var h=i.createContext(null),b=h.Provider,y=n(14691),A=n(41929),x=n(19389),g=n(77643),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},j=function(e,t){var n,r=i.useContext(m),o=i.useContext(h),s=i.useContext(u.QO),d=s.getPrefixCls,f=s.direction,p=i.useRef(),v=(0,A.K4)(t,p),b=(0,i.useContext)(g.$W).isFormItemInput,j=e.prefixCls,k=e.className,O=e.children,E=e.style,N=e.disabled,w=C(e,["prefixCls","className","children","style","disabled"]),P=d("radio",j),I="button"===((null===r||void 0===r?void 0:r.optionType)||o)?"".concat(P,"-button"):P,M=(0,a.A)({},w),S=i.useContext(x.A);M.disabled=N||S,r&&(M.name=r.name,M.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===r||void 0===r?void 0:r.onChange)||void 0===a||a.call(r,t)},M.checked=e.value===r.value,M.disabled=M.disabled||r.disabled);var F=c()("".concat(I,"-wrapper"),(n={},(0,l.A)(n,"".concat(I,"-wrapper-checked"),M.checked),(0,l.A)(n,"".concat(I,"-wrapper-disabled"),M.disabled),(0,l.A)(n,"".concat(I,"-wrapper-rtl"),"rtl"===f),(0,l.A)(n,"".concat(I,"-wrapper-in-form-item"),b),n),k);return i.createElement("label",{className:F,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(y.A,(0,a.A)({},M,{type:"radio",prefixCls:I,ref:v})),void 0!==O?i.createElement("span",null,O):null)};const k=i.forwardRef(j);var O=i.forwardRef((function(e,t){var n,o=i.useContext(u.QO),p=o.getPrefixCls,m=o.direction,h=i.useContext(d.A),b=(0,s.A)(e.defaultValue,{value:e.value}),y=(0,r.A)(b,2),A=y[0],x=y[1],g=e.prefixCls,C=e.className,j=void 0===C?"":C,O=e.options,E=e.buttonStyle,N=void 0===E?"outline":E,w=e.disabled,P=e.children,I=e.size,M=e.style,S=e.id,F=e.onMouseEnter,L=e.onMouseLeave,R=e.onFocus,_=e.onBlur,B=p("radio",g),q="".concat(B,"-group"),Q=P;O&&O.length>0&&(Q=O.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(k,{key:e.toString(),prefixCls:B,disabled:w,value:e,checked:A===e},e):i.createElement(k,{key:"radio-group-value-options-".concat(e.value),prefixCls:B,disabled:e.disabled||w,value:e.value,checked:A===e.value,style:e.style},e.label)})));var T=I||h,V=c()(q,"".concat(q,"-").concat(N),(n={},(0,l.A)(n,"".concat(q,"-").concat(T),T),(0,l.A)(n,"".concat(q,"-rtl"),"rtl"===m),n),j);return i.createElement("div",(0,a.A)({},(0,f.A)(e),{className:V,style:M,onMouseEnter:F,onMouseLeave:L,onFocus:R,onBlur:_,id:S,ref:t}),i.createElement(v,{value:{onChange:function(t){var n=A,a=t.target.value;"value"in e||x(a);var l=e.onChange;l&&a!==n&&l(t)},value:A,disabled:e.disabled,name:e.name,optionType:e.optionType}},Q))}));const E=i.memo(O);var N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},w=function(e,t){var n=i.useContext(u.QO).getPrefixCls,l=e.prefixCls,r=N(e,["prefixCls"]),o=n("radio",l);return i.createElement(b,{value:"button"},i.createElement(k,(0,a.A)({prefixCls:o},r,{type:"radio",ref:t})))};const P=i.forwardRef(w);var I=k;I.Button=P,I.Group=E,I.__ANT_RADIO=!0;const M=I},27373:(e,t,n)=>{function a(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>a})},55969:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(9950),l=n(28429),r=n(49348),o=n(25887),c=n(20567),s=n(87094),i=n(41988),u=n(93124),d=n(99674),f=n(25933),p=n(48538),v=n(90650),m=n(91854),h=n(74623),b=n(63010),y=n(60150),A=n(71999),x=n(70030),g=n(44414);function C(){const{t:e}=(0,x.B)(),{activeMenu:t}=(0,m.d4)((e=>e.menu),m.bN),{id:n}=(0,l.g)(),C=(0,m.wA)(),[j]=o.A.useForm(),k=(0,l.Zp)(),[O,E]=(0,a.useState)(!1),[N,w]=(0,a.useState)(!1),{defaultLang:P,languages:I}=(0,m.d4)((e=>e.formLang),m.bN);(0,a.useEffect)((()=>()=>{const e=j.getFieldsValue(!0);C((0,h.Ok)({activeMenu:t,data:e}))}),[]);const M=e=>{E(!0),b.A.getById(e).then((e=>{let{data:t}=e;const n=function(e){if(!e)return{};const{translations:t}=e,n=I.map((e=>{var n;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}(t);j.setFieldsValue({...t,...n})})).finally((()=>{E(!1),C((0,h.km)(t))}))};return(0,a.useEffect)((()=>{t.refetch&&M(n)}),[t.refetch]),(0,g.jsx)(c.A,{title:e("edit.unit"),extra:(0,g.jsx)(A.A,{}),children:O?(0,g.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,g.jsx)(v.A,{size:"large",className:"py-5"})}):(0,g.jsxs)(o.A,{name:"basic",layout:"vertical",onFinish:a=>{const l={...a,active:a.active?1:0};w(!0);const o="catalog/units";b.A.update(n,l).then((()=>{r.oR.success(e("successfully.updated")),C((0,h.EK)({...t,nextUrl:o})),k(`/${o}`),C((0,y.Q)())})).finally((()=>w(!1)))},form:j,initialValues:{...t.data},children:[(0,g.jsxs)(s.A,{gutter:12,children:[(0,g.jsx)(i.A,{span:12,children:I.map(((t,n)=>(0,g.jsx)(o.A.Item,{label:e("title"),name:`title[${t.locale}]`,rules:[{required:t.locale===P,message:e("required")}],hidden:t.locale!==P,normalize:(e,t,n)=>e.trim(),children:(0,g.jsx)(u.A,{})},"title"+n)))}),(0,g.jsx)(i.A,{span:12,children:(0,g.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,g.jsx)(o.A.Item,{label:e("position"),name:"position",rules:[{required:!0,message:e("required")}],children:(0,g.jsxs)(d.A,{children:[(0,g.jsx)(d.A.Option,{value:"after",children:e("after")}),(0,g.jsx)(d.A.Option,{value:"before",children:e("before")})]})})})}),(0,g.jsx)(i.A,{span:6,children:(0,g.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,g.jsx)(o.A.Item,{label:e("active"),name:"active",valuePropName:"checked",children:(0,g.jsx)(f.A,{})})})})]}),(0,g.jsx)(p.A,{type:"primary",htmlType:"submit",loading:N,children:e("submit")})]})})}},71999:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(9950),l=n(17811),r=n(12437),o=n(91854),c=n(82406),s=n(44414);const i=()=>{const e=(0,o.wA)(),{languages:t,defaultLang:n}=(0,o.d4)((e=>e.formLang),o.bN);(0,a.useEffect)((()=>{t.length||r.A.getAllActive().then((t=>{let{data:n}=t;e((0,c.Nn)(n))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Ay.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,c.Qq)(n))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,s.jsx)(l.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}}}]);