"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1031],{14691:(e,t,n)=>{n.d(t,{A:()=>p});var a=n(58168),l=n(89379),r=n(64467),o=n(5544),c=n(80045),s=n(48738),i=n.n(s),u=n(71207),d=n(9950),f=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const p=(0,d.forwardRef)((function(e,t){var n,s=e.prefixCls,p=void 0===s?"rc-checkbox":s,v=e.className,m=e.style,h=e.checked,b=e.disabled,g=e.defaultChecked,y=void 0!==g&&g,A=e.type,x=void 0===A?"checkbox":A,C=e.onChange,j=(0,c.A)(e,f),k=(0,d.useRef)(null),O=(0,u.A)(y,{value:h}),E=(0,o.A)(O,2),N=E[0],w=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=k.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=k.current)||void 0===e||e.blur()},input:k.current}}));var P=i()(p,v,(n={},(0,r.A)(n,"".concat(p,"-checked"),N),(0,r.A)(n,"".concat(p,"-disabled"),b),n));return d.createElement("span",{className:P,style:m},d.createElement("input",(0,a.A)({},j,{className:"".concat(p,"-input"),ref:k,onChange:function(t){b||("checked"in e||w(t.target.checked),null===C||void 0===C||C({target:(0,l.A)((0,l.A)({},e),{},{type:x,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!N,type:x})),d.createElement("span",{className:"".concat(p,"-inner")}))}))},17811:(e,t,n)=>{n.d(t,{Ay:()=>I});var a=n(58168),l=n(64467),r=n(5544),o=n(48738),c=n.n(o),s=n(71207),i=n(9950),u=n(5741),d=n(87126),f=n(27373),p=i.createContext(null),v=p.Provider;const m=p;var h=i.createContext(null),b=h.Provider,g=n(14691),y=n(41929),A=n(19389),x=n(77643),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},j=function(e,t){var n,r,o=i.useContext(m),s=i.useContext(h),d=i.useContext(u.QO),f=d.getPrefixCls,p=d.direction,v=i.useRef(),b=(0,y.K4)(t,v),j=(0,i.useContext)(x.$W).isFormItemInput,k=e.prefixCls,O=e.className,E=e.children,N=e.style,w=C(e,["prefixCls","className","children","style"]),P=f("radio",k),M="button"===((null===o||void 0===o?void 0:o.optionType)||s)?"".concat(P,"-button"):P,I=(0,a.A)({},w),S=i.useContext(A.A);o&&(I.name=o.name,I.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===o||void 0===o?void 0:o.onChange)||void 0===a||a.call(o,t)},I.checked=e.value===o.value,I.disabled=null!==(n=I.disabled)&&void 0!==n?n:o.disabled),I.disabled=null!==(r=I.disabled)&&void 0!==r?r:S;var F=c()("".concat(M,"-wrapper"),(0,l.A)((0,l.A)((0,l.A)((0,l.A)({},"".concat(M,"-wrapper-checked"),I.checked),"".concat(M,"-wrapper-disabled"),I.disabled),"".concat(M,"-wrapper-rtl"),"rtl"===p),"".concat(M,"-wrapper-in-form-item"),j),O);return i.createElement("label",{className:F,style:N,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},i.createElement(g.A,(0,a.A)({},I,{type:"radio",prefixCls:M,ref:b})),void 0!==E?i.createElement("span",null,E):null)};const k=i.forwardRef(j);var O=i.forwardRef((function(e,t){var n=i.useContext(u.QO),o=n.getPrefixCls,p=n.direction,m=i.useContext(d.A),h=(0,s.A)(e.defaultValue,{value:e.value}),b=(0,r.A)(h,2),g=b[0],y=b[1],A=e.prefixCls,x=e.className,C=void 0===x?"":x,j=e.options,O=e.buttonStyle,E=void 0===O?"outline":O,N=e.disabled,w=e.children,P=e.size,M=e.style,I=e.id,S=e.onMouseEnter,F=e.onMouseLeave,L=e.onFocus,R=e.onBlur,$=o("radio",A),_="".concat($,"-group"),B=w;j&&j.length>0&&(B=j.map((function(e){return"string"===typeof e||"number"===typeof e?i.createElement(k,{key:e.toString(),prefixCls:$,disabled:N,value:e,checked:g===e},e):i.createElement(k,{key:"radio-group-value-options-".concat(e.value),prefixCls:$,disabled:e.disabled||N,value:e.value,checked:g===e.value,style:e.style},e.label)})));var T=P||m,Q=c()(_,"".concat(_,"-").concat(E),(0,l.A)((0,l.A)({},"".concat(_,"-").concat(T),T),"".concat(_,"-rtl"),"rtl"===p),C);return i.createElement("div",(0,a.A)({},(0,f.A)(e),{className:Q,style:M,onMouseEnter:S,onMouseLeave:F,onFocus:L,onBlur:R,id:I,ref:t}),i.createElement(v,{value:{onChange:function(t){var n=g,a=t.target.value;"value"in e||y(a);var l=e.onChange;l&&a!==n&&l(t)},value:g,disabled:e.disabled,name:e.name,optionType:e.optionType}},B))}));const E=i.memo(O);var N=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},w=function(e,t){var n=i.useContext(u.QO).getPrefixCls,l=e.prefixCls,r=N(e,["prefixCls"]),o=n("radio",l);return i.createElement(b,{value:"button"},i.createElement(k,(0,a.A)({prefixCls:o},r,{type:"radio",ref:t})))};const P=i.forwardRef(w);var M=k;M.Button=P,M.Group=E,M.__ANT_RADIO=!0;const I=M},27373:(e,t,n)=>{function a(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>a})},31281:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.filter((e=>t[`${n}[${e.locale}]`])).map((e=>({[e.locale]:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{A:()=>a})},71999:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(9950),l=n(17811),r=n(12437),o=n(91854),c=n(82406),s=n(44414);const i=()=>{const e=(0,o.wA)(),{languages:t,defaultLang:n}=(0,o.d4)((e=>e.formLang),o.bN);(0,a.useEffect)((()=>{t.length||r.A.getAllActive().then((t=>{let{data:n}=t;e((0,c.Nn)(n))}))}),[]);return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(l.Ay.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,c.Qq)(n))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,s.jsx)(l.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}},91031:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(9950),l=n(28429),r=n(49348),o=n(87827),c=n(20567),s=n(87094),i=n(41988),u=n(55902),d=n(25933),f=n(48538),p=n(90650),v=n(91854),m=n(74623),h=n(70030),b=n(53237),g=n(31281),y=n(71999),A=n(2273),x=n(44414);const C=()=>{const{t:e}=(0,h.B)(),{activeMenu:t}=(0,v.d4)((e=>e.menu),v.bN),{id:n}=(0,l.g)(),C=(0,v.wA)(),[j]=o.A.useForm(),k=(0,l.Zp)(),[O,E]=(0,a.useState)(!1),[N,w]=(0,a.useState)(!1),{languages:P,defaultLang:M}=(0,v.d4)((e=>e.formLang),v.bN);function I(e){if(!e)return{};const{translations:t}=e,n=P.map((e=>{var n;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}(0,a.useEffect)((()=>()=>{const e=j.getFieldsValue(!0);C((0,m.Ok)({activeMenu:t,data:e}))}),[]);return(0,a.useEffect)((()=>{t.refetch&&(e=>{E(!0),b.A.getById(e).then((e=>{let t=e.data;j.setFieldsValue({...t,...I(t)})})).finally((()=>{E(!1),C((0,m.km)(t))}))})(n)}),[t.refetch]),(0,x.jsx)(c.A,{title:e("edit.group"),extra:(0,x.jsx)(y.A,{}),children:O?(0,x.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,x.jsx)(p.A,{size:"large",className:"py-5"})}):(0,x.jsxs)(o.A,{name:"basic",layout:"vertical",onFinish:a=>{const l={title:(0,g.A)(P,a),status:a.status};w(!0);const o="catalog/groups";b.A.update(n,l).then((()=>{r.oR.success(e("successfully.updated")),C((0,m.EK)({...t,nextUrl:o})),k(`/${o}`),C((0,A.p)({}))})).finally((()=>w(!1)))},form:j,initialValues:{...t.data,status:!0},children:[(0,x.jsxs)(s.A,{gutter:12,children:[(0,x.jsx)(i.A,{span:12,children:P.map((t=>(0,x.jsx)(o.A.Item,{label:e("title"),name:`title[${t.locale}]`,rules:[{required:t.locale===M,message:e("required")}],hidden:t.locale!==M,children:(0,x.jsx)(u.A,{})},"title"+t.locale)))}),(0,x.jsx)(i.A,{span:6,children:(0,x.jsx)("div",{className:"col-md-12 col-sm-6",children:(0,x.jsx)(o.A.Item,{label:e("active"),name:"status",valuePropName:"checked",children:(0,x.jsx)(d.A,{})})})})]}),(0,x.jsx)(f.A,{type:"primary",htmlType:"submit",loading:N,disabled:w,children:e("submit")})]})})}}}]);