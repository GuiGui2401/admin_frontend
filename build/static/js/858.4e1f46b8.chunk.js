"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[858],{14691:(e,t,n)=>{n.d(t,{A:()=>m});var a=n(58168),l=n(89379),r=n(64467),o=n(5544),s=n(80045),i=n(48738),c=n.n(i),u=n(71207),d=n(9950),p=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const m=(0,d.forwardRef)((function(e,t){var n,i=e.prefixCls,m=void 0===i?"rc-checkbox":i,f=e.className,v=e.style,h=e.checked,b=e.disabled,x=e.defaultChecked,A=void 0!==x&&x,g=e.type,y=void 0===g?"checkbox":g,j=e.onChange,C=(0,s.A)(e,p),O=(0,d.useRef)(null),k=(0,u.A)(A,{value:h}),E=(0,o.A)(k,2),w=E[0],N=E[1];(0,d.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=O.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=O.current)||void 0===e||e.blur()},input:O.current}}));var I=c()(m,f,(n={},(0,r.A)(n,"".concat(m,"-checked"),w),(0,r.A)(n,"".concat(m,"-disabled"),b),n));return d.createElement("span",{className:I,style:v},d.createElement("input",(0,a.A)({},C,{className:"".concat(m,"-input"),ref:O,onChange:function(t){b||("checked"in e||N(t.target.checked),null===j||void 0===j||j({target:(0,l.A)((0,l.A)({},e),{},{type:y,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:b,checked:!!w,type:y})),d.createElement("span",{className:"".concat(m,"-inner")}))}))},17811:(e,t,n)=>{n.d(t,{Ay:()=>_});var a=n(58168),l=n(64467),r=n(5544),o=n(48738),s=n.n(o),i=n(71207),c=n(9950),u=n(5741),d=n(87126),p=n(27373),m=c.createContext(null),f=m.Provider;const v=m;var h=c.createContext(null),b=h.Provider,x=n(14691),A=n(41929),g=n(19389),y=n(77643),j=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},C=function(e,t){var n,r,o=c.useContext(v),i=c.useContext(h),d=c.useContext(u.QO),p=d.getPrefixCls,m=d.direction,f=c.useRef(),b=(0,A.K4)(t,f),C=(0,c.useContext)(y.$W).isFormItemInput,O=e.prefixCls,k=e.className,E=e.children,w=e.style,N=j(e,["prefixCls","className","children","style"]),I=p("radio",O),P="button"===((null===o||void 0===o?void 0:o.optionType)||i)?"".concat(I,"-button"):I,_=(0,a.A)({},N),q=c.useContext(g.A);o&&(_.name=o.name,_.onChange=function(t){var n,a;null===(n=e.onChange)||void 0===n||n.call(e,t),null===(a=null===o||void 0===o?void 0:o.onChange)||void 0===a||a.call(o,t)},_.checked=e.value===o.value,_.disabled=null!==(n=_.disabled)&&void 0!==n?n:o.disabled),_.disabled=null!==(r=_.disabled)&&void 0!==r?r:q;var S=s()("".concat(P,"-wrapper"),(0,l.A)((0,l.A)((0,l.A)((0,l.A)({},"".concat(P,"-wrapper-checked"),_.checked),"".concat(P,"-wrapper-disabled"),_.disabled),"".concat(P,"-wrapper-rtl"),"rtl"===m),"".concat(P,"-wrapper-in-form-item"),C),k);return c.createElement("label",{className:S,style:w,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},c.createElement(x.A,(0,a.A)({},_,{type:"radio",prefixCls:P,ref:b})),void 0!==E?c.createElement("span",null,E):null)};const O=c.forwardRef(C);var k=c.forwardRef((function(e,t){var n=c.useContext(u.QO),o=n.getPrefixCls,m=n.direction,v=c.useContext(d.A),h=(0,i.A)(e.defaultValue,{value:e.value}),b=(0,r.A)(h,2),x=b[0],A=b[1],g=e.prefixCls,y=e.className,j=void 0===y?"":y,C=e.options,k=e.buttonStyle,E=void 0===k?"outline":k,w=e.disabled,N=e.children,I=e.size,P=e.style,_=e.id,q=e.onMouseEnter,S=e.onMouseLeave,M=e.onFocus,F=e.onBlur,$=o("radio",g),L="".concat($,"-group"),R=N;C&&C.length>0&&(R=C.map((function(e){return"string"===typeof e||"number"===typeof e?c.createElement(O,{key:e.toString(),prefixCls:$,disabled:w,value:e,checked:x===e},e):c.createElement(O,{key:"radio-group-value-options-".concat(e.value),prefixCls:$,disabled:e.disabled||w,value:e.value,checked:x===e.value,style:e.style},e.label)})));var T=I||v,z=s()(L,"".concat(L,"-").concat(E),(0,l.A)((0,l.A)({},"".concat(L,"-").concat(T),T),"".concat(L,"-rtl"),"rtl"===m),j);return c.createElement("div",(0,a.A)({},(0,p.A)(e),{className:z,style:P,onMouseEnter:q,onMouseLeave:S,onFocus:M,onBlur:F,id:_,ref:t}),c.createElement(f,{value:{onChange:function(t){var n=x,a=t.target.value;"value"in e||A(a);var l=e.onChange;l&&a!==n&&l(t)},value:x,disabled:e.disabled,name:e.name,optionType:e.optionType}},R))}));const E=c.memo(k);var w=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n},N=function(e,t){var n=c.useContext(u.QO).getPrefixCls,l=e.prefixCls,r=w(e,["prefixCls"]),o=n("radio",l);return c.createElement(b,{value:"button"},c.createElement(O,(0,a.A)({prefixCls:o},r,{type:"radio",ref:t})))};const I=c.forwardRef(N);var P=O;P.Button=I,P.Group=E,P.__ANT_RADIO=!0;const _=P},27373:(e,t,n)=>{function a(e){return Object.keys(e).reduce((function(t,n){return!n.startsWith("data-")&&!n.startsWith("aria-")&&"role"!==n||n.startsWith("data-__")||(t[n]=e[n]),t}),{})}n.d(t,{A:()=>a})},31281:(e,t,n)=>{function a(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const a=e.filter((e=>t[`${n}[${e.locale}]`])).map((e=>({[e.locale]:t[`${n}[${e.locale}]`]})));return Object.assign({},...a)}n.d(t,{A:()=>a})},40858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var a=n(9950),l=n(28429),r=n(49348),o=n(87827),s=n(20567),i=n(87094),c=n(41988),u=n(55902),d=n(48538),p=n(91854),m=n(74623),f=n(54218),v=n(5386),h=n(47933),b=n(47992),x=n(5302),A=n(70030),g=n(31281),y=n(71999),j=n(44414);const C=()=>{var e;const{t:t}=(0,A.B)(),{activeMenu:n}=(0,p.d4)((e=>e.menu),p.bN),C=(0,p.wA)(),[O]=o.A.useForm(),k=(0,l.Zp)(),[E,w]=(0,a.useState)((null===(e=n.data)||void 0===e?void 0:e.image)||null),[N,I]=(0,a.useState)(!1),{languages:P,defaultLang:_}=(0,p.d4)((e=>e.formLang),p.bN);(0,a.useEffect)((()=>()=>{const e=O.getFieldsValue(!0);C((0,m.Ok)({activeMenu:n,data:e}))}),[]);return(0,j.jsx)(s.A,{title:t("add.banner"),className:"h-100",extra:(0,j.jsx)(y.A,{}),children:(0,j.jsxs)(o.A,{name:"banner-add",layout:"vertical",onFinish:e=>{const a={url:e.url,shop_id:e.shop_id,img:null===E||void 0===E?void 0:E.name,products:e.products.map((e=>e.value)),title:(0,g.A)(P,e,"title"),description:(0,g.A)(P,e,"description"),button_text:(0,g.A)(P,e,"button_text")};I(!0);const l="banners";x.A.create(a).then((()=>{r.oR.success(t("successfully.created")),C((0,m.EK)({...n,nextUrl:l})),k(`/${l}`),C((0,v.s2)())})).finally((()=>I(!1)))},form:O,initialValues:{active:!0,...n.data},className:"d-flex flex-column h-100",children:[(0,j.jsxs)(i.A,{gutter:12,children:[(0,j.jsx)(c.A,{span:12,children:P.map((e=>(0,j.jsx)(o.A.Item,{label:t("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===_,message:t("required")}],hidden:e.locale!==_,normalize:(e,t,n)=>e.trim(),children:(0,j.jsx)(u.A,{})},"title"+e.locale)))}),(0,j.jsx)(c.A,{span:12,children:P.map((e=>(0,j.jsx)(o.A.Item,{label:t("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===_,message:t("required")}],hidden:e.locale!==_,normalize:(e,t,n)=>e.trim(),children:(0,j.jsx)(u.A,{})},"description"+e.locale)))}),(0,j.jsx)(c.A,{span:12,children:P.map((e=>(0,j.jsx)(o.A.Item,{label:t("button_text"),name:`button_text[${e.locale}]`,rules:[{required:e.locale===_,message:t("required")}],hidden:e.locale!==_,normalize:(e,t,n)=>e.trim(),children:(0,j.jsx)(u.A,{})},"button_text"+e.locale)))}),(0,j.jsx)(c.A,{span:12,children:(0,j.jsx)(o.A.Item,{label:t("url"),name:"url",rules:[{required:!0,message:t("required")}],children:(0,j.jsx)(u.A,{})})}),(0,j.jsx)(c.A,{span:24,children:(0,j.jsx)(o.A.Item,{label:t("products"),name:"products",rules:[{required:!0,message:t("required")}],children:(0,j.jsx)(b.G,{mode:"multiple",fetchOptions:function(e){const t={search:e,perPage:10};return h.A.getAll(t).then((e=>e.data.map((e=>{var t;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id}}))))},debounceTimeout:200})})}),(0,j.jsx)(c.A,{span:12,children:(0,j.jsx)(o.A.Item,{label:t("image"),name:"image",rules:[{required:!0,message:t("required")}],children:(0,j.jsx)(f.A,{type:"banners",image:E,setImage:w,form:O})})})]}),(0,j.jsx)("div",{className:"flex-grow-1 d-flex flex-column justify-content-end",children:(0,j.jsx)("div",{className:"pb-5",children:(0,j.jsx)(d.A,{type:"primary",htmlType:"submit",loading:N,children:t("submit")})})})]})})}},47992:(e,t,n)=>{n.d(t,{G:()=>c});var a=n(9950),l=n(95491),r=n.n(l),o=n(99674),s=n(90650),i=n(44414);const c=e=>{let{fetchOptions:t,debounceTimeout:n=400,...l}=e;const[c,u]=(0,a.useState)(!1),[d,p]=(0,a.useState)([]),m=(0,a.useMemo)((()=>r()((e=>{p([]),u(!0),t(e).then((e=>{p(e),u(!1)}))}),n)),[t,n]);return(0,i.jsx)(o.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,notFoundContent:c?(0,i.jsx)(s.A,{size:"small"}):"no results",...l,options:d,onFocus:()=>{d.length||m("")}})}},71999:(e,t,n)=>{n.d(t,{A:()=>c});var a=n(9950),l=n(17811),r=n(12437),o=n(91854),s=n(82406),i=n(44414);const c=()=>{const e=(0,o.wA)(),{languages:t,defaultLang:n}=(0,o.d4)((e=>e.formLang),o.bN);(0,a.useEffect)((()=>{t.length||r.A.getAllActive().then((t=>{let{data:n}=t;e((0,s.Nn)(n))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(l.Ay.Group,{value:n,onChange:t=>{let{target:{value:n}}=t;e((0,s.Qq)(n))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,i.jsx)(l.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}}}]);