"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[955],{49:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(25887),l=n(20567),r=n(87094),o=n(41988),i=n(93124),c=n(48538),s=n(71999),u=(n(9950),n(70030)),d=n(91854),p=n(44414);function f(e){let{data:t,onFinish:n,isSubmitting:f}=e;const{t:v}=(0,u.B)(),{languages:h,defaultLang:m}=(0,d.d4)((e=>e.formLang),d.bN),[b]=a.A.useForm();return(0,p.jsx)(l.A,{title:v(t?"edit.option":"add.option"),extra:(0,p.jsx)(s.A,{}),children:(0,p.jsx)(a.A,{form:b,layout:"vertical",onFinish:n,initialValues:{...function(e){if(!e)return{};const{translations:t}=e,n=h.map((e=>{var n;return{[`title[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.title}}));return Object.assign({},...n)}(t)},children:(0,p.jsxs)(r.A,{gutter:12,children:[(0,p.jsx)(o.A,{span:24,children:h.map((e=>(0,p.jsx)(a.A.Item,{label:v("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===m,message:v("requried")}],hidden:e.locale!==m,children:(0,p.jsx)(i.A,{})},"title"+e.locale)))}),(0,p.jsx)(o.A,{span:4,children:(0,p.jsx)(c.A,{htmlType:"submit",type:"primary",loading:f,children:v("save")})})]})})})}},955:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(9950),l=n(49),r=n(28429),o=n(62335),i=n(81446),c=n(49348),s=n(70030),u=n(91854),d=n(31281),p=n(74623),f=n(44414);function v(){const{id:e}=(0,r.g)(),{languages:t}=(0,u.d4)((e=>e.formLang),u.bN),{t:n}=(0,s.B)(),[v,h]=(0,a.useState)(!1),[m,b]=(0,a.useState)(!1),[g,y]=(0,a.useState)(null),{activeMenu:A}=(0,u.d4)((e=>e.menu)),x=(0,u.wA)(),C=(0,r.Zp)();return(0,a.useEffect)((()=>{(async()=>{h(!0),o.A.getById(e).then((e=>{y(e.data)})).finally((()=>{h(!1)}))})()}),[]),v?(0,f.jsx)(i.A,{}):(0,f.jsx)(l.A,{data:g,onFinish:a=>{b(!0),o.A.update(e,{title:(0,d.A)(t,a,"title")}).then((()=>{C("/options"),c.oR.success(n("succesfully.updated"));x((0,p.EK)({...A,nextUrl:"options"}))})).finally((()=>{b(!1)}))},isSubmitting:m})}},14691:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(58168),l=n(89379),r=n(64467),o=n(5544),i=n(80045),c=n(48738),s=n.n(c),u=n(71207),d=n(9950),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const f=(0,d.forwardRef)((function(e,t){var n,c=e.prefixCls,f=void 0===c?"rc-checkbox":c,v=e.className,h=e.style,m=e.checked,b=e.disabled,g=e.defaultChecked,y=void 0!==g&&g,A=e.type,x=void 0===A?"checkbox":A,C=e.onChange,j=(0,i.A)(e,p),O=(0,d.useRef)(null),k=(0,u.A)(y,{value:m}),E=(0,o.A)(k,2),w=E[0],N=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=O.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current}}));var P=s()(f,v,(n={},(0,r.A)(n,"".concat(f,"-checked"),w),(0,r.A)(n,"".concat(f,"-disabled"),b),n));return d.createElement("span",{className:P,style:h},d.createElement("input",(0,a.A)({},j,{className:"".concat(f,"-input"),ref:O,onChange:function(t){b||("checked"in e||N(t.target.checked),null===C||void 0===C||C({target:(0,l.A)((0,l.A)({},e),{},{type:x,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!w,type:x})),d.createElement("span",{className:"".concat(f,"-inner")}))}))},17811:(e,t,n)=>{n.d(t,{Ay:()=>L});var a=n(58168),l=n(64467),r=n(5544),o=n(48738),i=n.n(o),c=n(71207),s=n(9950),u=n(5741),d=n(87126),p=n(27373),f=s.createContext(null),v=f.Provider;const h=f;var m=s.createContext(null),b=m.Provider,g=n(14691),y=n(41929),A=n(19389),x=n(77643),C=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},j=function(e,t){var n,r=s.useContext(h),o=s.useContext(m),c=s.useContext(u.QO),d=c.getPrefixCls,p=c.direction,f=s.useRef(),v=(0,y.K4)(t,f),b=(0,s.useContext)(x.$W).isFormItemInput,j=e.prefixCls,O=e.className,k=e.children,E=e.style,w=e.disabled,N=C(e,["prefixCls","className","children","style","disabled"]),P=d("radio",j),S="button"===((null===r||void 0===r?void 0:r.optionType)||o)?"".concat(P,"-button"):P,L=(0,a.A)({},N),M=s.useContext(A.A);L.disabled=w||M,r&&(L.name=r.name,L.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===r||void 0===r?void 0:r.onChange)||void 0===a||a.call(r,t)},L.checked=e.value===r.value,L.disabled=L.disabled||r.disabled);var F=i()("".concat(S,"-wrapper"),(n={},(0,l.A)(n,"".concat(S,"-wrapper-checked"),L.checked),(0,l.A)(n,"".concat(S,"-wrapper-disabled"),L.disabled),(0,l.A)(n,"".concat(S,"-wrapper-rtl"),"rtl"===p),(0,l.A)(n,"".concat(S,"-wrapper-in-form-item"),b),n),O);return s.createElement("label",{className:F,style:E,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},s.createElement(g.A,(0,a.A)({},L,{type:"radio",prefixCls:S,ref:v})),void 0!==k?s.createElement("span",null,k):null)};const O=s.forwardRef(j);var k=s.forwardRef((function(e,t){var n,o=s.useContext(u.QO),f=o.getPrefixCls,h=o.direction,m=s.useContext(d.A),b=(0,c.A)(e.defaultValue,{value:e.value}),g=(0,r.A)(b,2),y=g[0],A=g[1],x=e.prefixCls,C=e.className,j=void 0===C?"":C,k=e.options,E=e.buttonStyle,w=void 0===E?"outline":E,N=e.disabled,P=e.children,S=e.size,L=e.style,M=e.id,F=e.onMouseEnter,I=e.onMouseLeave,R=e.onFocus,B=e.onBlur,$=f("radio",x),_="".concat($,"-group"),T=P;k&&k.length>0&&(T=k.map((function(e){return"string"===typeof e||"number"===typeof e?s.createElement(O,{key:e.toString(),prefixCls:$,disabled:N,value:e,checked:y===e},e):s.createElement(O,{key:"radio-group-value-options-".concat(e.value),prefixCls:$,disabled:e.disabled||N,value:e.value,checked:y===e.value,style:e.style},e.label)})));var Q=S||m,W=i()(_,"".concat(_,"-").concat(w),(n={},(0,l.A)(n,"".concat(_,"-").concat(Q),Q),(0,l.A)(n,"".concat(_,"-rtl"),"rtl"===h),n),j);return s.createElement("div",(0,a.A)({},(0,p.A)(e),{className:W,style:L,onMouseEnter:F,onMouseLeave:I,onFocus:R,onBlur:B,id:M,ref:t}),s.createElement(v,{value:{onChange:function(t){var n=y,a=t.target.value;"value"in e||A(a);var l=e.onChange;l&&a!==n&&l(t)},value:y,disabled:e.disabled,name:e.name,optionType:e.optionType}},T))}));const E=s.memo(k);var w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},N=function(e,t){var n=s.useContext(u.QO).getPrefixCls,l=e.prefixCls,r=w(e,["prefixCls"]),o=n("radio",l);return s.createElement(b,{value:"button"},s.createElement(O,(0,a.A)({prefixCls:o},r,{type:"radio",ref:t})))};const P=s.forwardRef(N);var S=O;S.Button=P,S.Group=E,S.__ANT_RADIO=!0;const L=S},27373:(e,t,n)=>{function a(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>a})},31281:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.filter((e=>t[`${n}[${e.locale}]`])).map((e=>({[e.locale]:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{A:()=>a})},71999:(e,t,n)=>{n.d(t,{A:()=>s});var a=n(9950),l=n(17811),r=n(12437),o=n(91854),i=n(82406),c=n(44414);const s=()=>{const e=(0,o.wA)(),{languages:t,defaultLang:n}=(0,o.d4)((e=>e.formLang),o.bN);(0,a.useEffect)((()=>{t.length||r.A.getAllActive().then((t=>{let{data:n}=t;e((0,i.Nn)(n))}))}),[]);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l.Ay.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,i.Qq)(n))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,c.jsx)(l.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}}}]);