"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4674],{14691:(e,t,r)=>{r.d(t,{A:()=>v});var o=r(58168),n=r(89379),l=r(64467),s=r(5544),a=r(80045),i=r(48738),d=r.n(i),u=r(71207),c=r(9950),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const v=(0,c.forwardRef)((function(e,t){var r,i=e.prefixCls,v=void 0===i?"rc-checkbox":i,p=e.className,h=e.style,f=e.checked,j=e.disabled,x=e.defaultChecked,A=void 0!==x&&x,g=e.type,y=void 0===g?"checkbox":g,b=e.onChange,_=(0,a.A)(e,m),E=(0,c.useRef)(null),w=(0,u.A)(A,{value:f}),P=(0,s.A)(w,2),C=P[0],N=P[1];(0,c.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=E.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=E.current)||void 0===e||e.blur()},input:E.current}}));var k=d()(v,p,(r={},(0,l.A)(r,"".concat(v,"-checked"),C),(0,l.A)(r,"".concat(v,"-disabled"),j),r));return c.createElement("span",{className:k,style:h},c.createElement("input",(0,o.A)({},_,{className:"".concat(v,"-input"),ref:E,onChange:function(t){j||("checked"in e||N(t.target.checked),null===b||void 0===b||b({target:(0,n.A)((0,n.A)({},e),{},{type:y,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:j,checked:!!C,type:y})),c.createElement("span",{className:"".concat(v,"-inner")}))}))},17811:(e,t,r)=>{r.d(t,{Ay:()=>I});var o=r(58168),n=r(64467),l=r(5544),s=r(48738),a=r.n(s),i=r(71207),d=r(9950),u=r(5741),c=r(87126),m=r(27373),v=d.createContext(null),p=v.Provider;const h=v;var f=d.createContext(null),j=f.Provider,x=r(14691),A=r(41929),g=r(19389),y=r(77643),b=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},_=function(e,t){var r,l,s=d.useContext(h),i=d.useContext(f),c=d.useContext(u.QO),m=c.getPrefixCls,v=c.direction,p=d.useRef(),j=(0,A.K4)(t,p),_=(0,d.useContext)(y.$W).isFormItemInput,E=e.prefixCls,w=e.className,P=e.children,C=e.style,N=b(e,["prefixCls","className","children","style"]),k=m("radio",E),O="button"===((null===s||void 0===s?void 0:s.optionType)||i)?"".concat(k,"-button"):k,I=(0,o.A)({},N),S=d.useContext(g.A);s&&(I.name=s.name,I.onChange=function(t){var r,o;null===(r=e.onChange)||void 0===r||r.call(e,t),null===(o=null===s||void 0===s?void 0:s.onChange)||void 0===o||o.call(s,t)},I.checked=e.value===s.value,I.disabled=null!==(r=I.disabled)&&void 0!==r?r:s.disabled),I.disabled=null!==(l=I.disabled)&&void 0!==l?l:S;var q=a()("".concat(O,"-wrapper"),(0,n.A)((0,n.A)((0,n.A)((0,n.A)({},"".concat(O,"-wrapper-checked"),I.checked),"".concat(O,"-wrapper-disabled"),I.disabled),"".concat(O,"-wrapper-rtl"),"rtl"===v),"".concat(O,"-wrapper-in-form-item"),_),w);return d.createElement("label",{className:q,style:C,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},d.createElement(x.A,(0,o.A)({},I,{type:"radio",prefixCls:O,ref:j})),void 0!==P?d.createElement("span",null,P):null)};const E=d.forwardRef(_);var w=d.forwardRef((function(e,t){var r=d.useContext(u.QO),s=r.getPrefixCls,v=r.direction,h=d.useContext(c.A),f=(0,i.A)(e.defaultValue,{value:e.value}),j=(0,l.A)(f,2),x=j[0],A=j[1],g=e.prefixCls,y=e.className,b=void 0===y?"":y,_=e.options,w=e.buttonStyle,P=void 0===w?"outline":w,C=e.disabled,N=e.children,k=e.size,O=e.style,I=e.id,S=e.onMouseEnter,q=e.onMouseLeave,F=e.onFocus,M=e.onBlur,L=s("radio",g),T="".concat(L,"-group"),B=N;_&&_.length>0&&(B=_.map((function(e){return"string"===typeof e||"number"===typeof e?d.createElement(E,{key:e.toString(),prefixCls:L,disabled:C,value:e,checked:x===e},e):d.createElement(E,{key:"radio-group-value-options-".concat(e.value),prefixCls:L,disabled:e.disabled||C,value:e.value,checked:x===e.value,style:e.style},e.label)})));var H=k||h,R=a()(T,"".concat(T,"-").concat(P),(0,n.A)((0,n.A)({},"".concat(T,"-").concat(H),H),"".concat(T,"-rtl"),"rtl"===v),b);return d.createElement("div",(0,o.A)({},(0,m.A)(e),{className:R,style:O,onMouseEnter:S,onMouseLeave:q,onFocus:F,onBlur:M,id:I,ref:t}),d.createElement(p,{value:{onChange:function(t){var r=x,o=t.target.value;"value"in e||A(o);var n=e.onChange;n&&o!==r&&n(t)},value:x,disabled:e.disabled,name:e.name,optionType:e.optionType}},B))}));const P=d.memo(w);var C=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},N=function(e,t){var r=d.useContext(u.QO).getPrefixCls,n=e.prefixCls,l=C(e,["prefixCls"]),s=r("radio",n);return d.createElement(j,{value:"button"},d.createElement(E,(0,o.A)({prefixCls:s},l,{type:"radio",ref:t})))};const k=d.forwardRef(N);var O=E;O.Button=k,O.Group=P,O.__ANT_RADIO=!0;const I=O},27373:(e,t,r)=>{function o(e){return Object.keys(e).reduce((function(t,r){return!r.startsWith("data-")&&!r.startsWith("aria-")&&"role"!==r||r.startsWith("data-__")||(t[r]=e[r]),t}),{})}r.d(t,{A:()=>o})},44674:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var o=r(9950),n=r(45359),l=r(87827),s=r(20567),a=r(28429),i=r(91854),d=r(71999),u=r(70030),c=r(75482),m=r(73364),v=r(70364),p=r(82039),h=r(65820),f=r(74623),j=r(29597),x=r(59051),A=r.n(x),g=r(36537),y=r(33824),b=r(49348),_=r(62466),E=r(81446),w=r(44414);const{Step:P}=n.A;function C(){var e,t,r,x,C,N,k,O,I,S,q,F;const{t:M}=(0,u.B)(),[L]=l.A.useForm(),{id:T}=(0,a.g)(),B=(0,h.s)(),H=(0,i.wA)(),R=(0,a.Zp)(),{activeMenu:D}=(0,i.d4)((e=>e.menu),i.bN),{settings:Y}=(0,i.d4)((e=>e.globalSettings),i.bN),{defaultCurrency:V}=(0,i.d4)((e=>e.currency),i.bN),G=Number((null===(e=B.values)||void 0===e?void 0:e.step)||0),[Q,W]=(0,o.useState)(!1),[$,J]=(0,o.useState)(!1),[K,z]=(0,o.useState)((null===D||void 0===D||null===(t=D.data)||void 0===t?void 0:t.images)||[]),[U,Z]=(0,o.useState)(null!==D&&void 0!==D&&null!==(r=D.data)&&void 0!==r&&r.location_from?{lat:parseFloat(null===D||void 0===D||null===(x=D.data)||void 0===x||null===(C=x.location_from)||void 0===C?void 0:C.latitude),lng:parseFloat(null===D||void 0===D||null===(N=D.data)||void 0===N||null===(k=N.location_from)||void 0===k?void 0:k.longitude)}:(0,j.A)(Y)),[X,ee]=(0,o.useState)(null!==D&&void 0!==D&&null!==(O=D.data)&&void 0!==O&&O.location_to?{lat:parseFloat(null===D||void 0===D||null===(I=D.data)||void 0===I||null===(S=I.location_to)||void 0===S?void 0:S.latitude),lng:parseFloat(null===D||void 0===D||null===(q=D.data)||void 0===q||null===(F=q.location_to)||void 0===F?void 0:F.longitude)}:(0,j.A)(Y));(0,o.useEffect)((()=>()=>{const e=L.getFieldsValue(!0),t=JSON.stringify(e.delivery_date),r=JSON.stringify(e.delivery_time),o={...e,date:t,time:r};H((0,f.Ok)({activeMenu:D,data:o}))}),[]);const te=()=>{const e=G+1;B.set("step",e)},re=()=>{const e=G-1;B.set("step",e)};(0,o.useEffect)((()=>{D.refetch&&T&&(e=>{W(!0),g.A.getById(e).then((e=>{var t,r,o,n,l,s,a,i,d,u,c,m,v,p,h,j,x,g,y;let b=e.data;z([(0,_.A)(b.img)]),Z({lat:null===b||void 0===b||null===(t=b.address_from)||void 0===t?void 0:t.latitude,lng:null===b||void 0===b||null===(r=b.address_from)||void 0===r?void 0:r.longitude}),ee({lat:null===b||void 0===b||null===(o=b.address_to)||void 0===o?void 0:o.latitude,lng:null===b||void 0===b||null===(n=b.address_to)||void 0===n?void 0:n.longitude});const E={...b,image:[(0,_.A)(b.img)],delivery_time:A()(null===b||void 0===b?void 0:b.delivery_time,"HH:mm:ss"),delivery_date:A()(b.delivery_date,"YYYY-MM-DD"),address_from:null===b||void 0===b||null===(l=b.address_from)||void 0===l?void 0:l.address,address_to:null===b||void 0===b||null===(s=b.address_to)||void 0===s?void 0:s.address,house_from:null===b||void 0===b||null===(a=b.address_from)||void 0===a?void 0:a.house,house_to:null===b||void 0===b||null===(i=b.address_to)||void 0===i?void 0:i.house,stage_from:null===b||void 0===b||null===(d=b.address_from)||void 0===d?void 0:d.stage,stage_to:null===b||void 0===b||null===(u=b.address_to)||void 0===u?void 0:u.stage,room_from:null===b||void 0===b||null===(c=b.address_from)||void 0===c?void 0:c.room,room_to:null===b||void 0===b||null===(m=b.address_to)||void 0===m?void 0:m.room,user_from:{label:[null===(v=b.user)||void 0===v?void 0:v.firstname,null===(p=b.user)||void 0===p?void 0:p.lastname].join(" "),value:null===(h=b.user)||void 0===h?void 0:h.id},type:{label:null===(j=b.type)||void 0===j?void 0:j.type,value:null===(x=b.type)||void 0===x?void 0:x.id},payment_type:{label:M(null===b||void 0===b||null===(g=b.transaction)||void 0===g?void 0:g.payment_system.tag),value:null===b||void 0===b||null===(y=b.transaction)||void 0===y?void 0:y.payment_system.id}};L.setFieldsValue(E),H((0,f.Ok)({activeMenu:D,data:E}))})).finally((()=>{W(!1),H((0,f.km)(D))}))})(T)}),[D.refetch]);return(0,w.jsxs)(s.A,{title:M("add.parcel.order"),extra:(0,w.jsx)(d.A,{}),children:[(0,w.jsx)(n.A,{current:G,onChange:e=>{B.set("step",e)},children:c.C.map((e=>(0,w.jsx)(P,{title:M(e.title)},e.title)))}),(0,w.jsx)("div",{className:"steps-content",children:Q?(0,w.jsx)(E.A,{}):(0,w.jsxs)(l.A,{form:L,name:"parcel-create",layout:"vertical",onFinish:e=>{var t,r;console.log("values => ",e),J(!0);const o={user_id:null===(t=e.user_from)||void 0===t?void 0:t.value,currency_id:null===V||void 0===V?void 0:V.id,type_id:null===(r=e.type)||void 0===r?void 0:r.value,rate:null===V||void 0===V?void 0:V.rate,phone_from:e.phone_from.toString(),username_from:e.username_from,address_from:{longitude:null===U||void 0===U?void 0:U.lng,latitude:null===U||void 0===U?void 0:U.lat,address:e.address_from,house:e.house_from,stage:e.stage_from,room:e.room_from},phone_to:e.phone_to.toString(),username_to:e.username_to,address_to:{longitude:null===X||void 0===X?void 0:X.lng,latitude:null===X||void 0===X?void 0:X.lat,address:e.address_to,house:e.house_to,stage:e.stage_to,room:e.room_to},delivery_date:A()(e.delivery_date).format("YYYY-MM-DD"),delivery_time:A()(e.delivery_time,"HH:mm").format("HH:mm"),note:e.note,images:K.map((e=>e.name))},n="parcel-orders";g.A.update(T,o).then((()=>{H((0,y.xj)()),b.oR.success(M("successfully.created")),H((0,f.EK)({...D,nextUrl:n})),R(`/${n}`)})).finally((()=>J(!1)))},initialValues:{...D.data},onFinishFailed:e=>{const t=["","",""];e.errorFields.map((e=>e.name[0])).forEach((e=>{e.includes("_from")?t[0]="sender.details.invalid":e.includes("_to")?t[1]="receiver.details.invalid":t[2]="parcel.details.invalid"})),t.forEach((e=>{e&&b.oR.error(M(e))}))},children:[(0,w.jsx)("div",{className:"First-content"===c.C[G].content?"":"d-none",children:(0,w.jsx)(m.A,{form:L,next:te,location:U,setLocation:Z})}),(0,w.jsx)("div",{className:"Second-content"===c.C[G].content?"":"d-none",children:(0,w.jsx)(v.A,{form:L,next:te,prev:re,location:X,setLocation:ee})}),(0,w.jsx)("div",{className:"Third-content"===c.C[G].content?"":"d-none",children:(0,w.jsx)(p.A,{form:L,loading:$,prev:re,locationFrom:U,locationTo:X,image:K,setImage:z})})]})})]})}},53774:(e,t,r)=>{function o(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}r.d(t,{A:()=>o})},70364:(e,t,r)=>{r.d(t,{A:()=>p});var o=r(9950),n=r(87094),l=r(41988),s=r(87827),a=r(55902),i=r(56952),d=r(80737),u=r(48538),c=r(70030),m=(r(79406),r(78498)),v=(r(53271),r(44414));const p=e=>{let{form:t,next:r,prev:p,location:h,setLocation:f}=e;const{t:j}=(0,c.B)(),[x,A]=(0,o.useState)(null),[g,y]=(0,o.useState)([]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(n.A,{gutter:24,children:[(0,v.jsxs)(l.A,{span:12,children:[(0,v.jsx)(s.A.Item,{label:j("username"),name:"username_to",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(j("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(j("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(j("required")))}],children:(0,v.jsx)(a.A,{})}),(0,v.jsx)(s.A.Item,{label:j("phone"),name:"phone_to",rules:[{validator:(e,t)=>t?t&&t<0?Promise.reject(new Error(j("must.be.positive"))):t&&(null===t||void 0===t?void 0:t.toString().length)<7?Promise.reject(new Error(j("min.7.numbers"))):Promise.resolve():Promise.reject(new Error(j("required")))}],children:(0,v.jsx)(i.A,{className:"w-100"})}),(0,v.jsxs)(n.A,{gutter:12,children:[(0,v.jsx)(l.A,{span:8,children:(0,v.jsx)(s.A.Item,{label:j("house"),name:"house_to",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(j("no.empty.space"))):Promise.resolve():Promise.reject(new Error(j("required")))}],children:(0,v.jsx)(a.A,{})})}),(0,v.jsx)(l.A,{span:8,children:(0,v.jsx)(s.A.Item,{label:j("stage"),name:"stage_to",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(j("no.empty.space"))):Promise.resolve():Promise.reject(new Error(j("required")))}],children:(0,v.jsx)(a.A,{})})}),(0,v.jsx)(l.A,{span:8,children:(0,v.jsx)(s.A.Item,{label:j("room"),name:"room_to",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(j("no.empty.space"))):Promise.resolve():Promise.reject(new Error(j("required")))}],children:(0,v.jsx)(a.A,{})})})]})]}),(0,v.jsxs)(l.A,{span:12,children:[(0,v.jsx)(s.A.Item,{label:j("address"),name:"address_to",rules:[{required:!0,message:j("required")}],children:(0,v.jsx)(a.A,{})}),(0,v.jsx)(m.A,{location:h,setLocation:f,setAddress:e=>t.setFieldsValue({address_to:e})})]})]}),(0,v.jsxs)(d.A,{children:[(0,v.jsx)(u.A,{type:"default",htmlType:"button",onClick:p,children:j("prev")}),(0,v.jsx)(u.A,{type:"primary",htmlType:"button",onClick:r,children:j("next")})]})]})}},71999:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(9950),n=r(17811),l=r(12437),s=r(91854),a=r(82406),i=r(44414);const d=()=>{const e=(0,s.wA)(),{languages:t,defaultLang:r}=(0,s.d4)((e=>e.formLang),s.bN);(0,o.useEffect)((()=>{t.length||l.A.getAllActive().then((t=>{let{data:r}=t;e((0,a.Nn)(r))}))}),[]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Ay.Group,{value:r,onChange:t=>{let{target:{value:r}}=t;e((0,a.Qq)(r))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,i.jsx)(n.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}},73364:(e,t,r)=>{r.d(t,{A:()=>f});var o=r(9950),n=r(87094),l=r(41988),s=r(87827),a=r(55902),i=r(56952),d=r(80737),u=r(48538),c=r(70030),m=r(79406),v=r(78498),p=r(53271),h=r(44414);const f=e=>{let{form:t,next:r,location:f,setLocation:j}=e;const{t:x}=(0,c.B)(),[A,g]=(0,o.useState)(null),[y,b]=(0,o.useState)([]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(n.A,{gutter:24,children:[(0,h.jsxs)(l.A,{span:12,children:[(0,h.jsx)(s.A.Item,{label:x("user"),name:"user_from",rules:[{required:!0,message:x("required")}],children:(0,h.jsx)(m.a,{fetchOptions:async function(e){const t={search:e,roles:["user"],"empty-shop":1};return g(!1),p.A.search(t).then((e=>(b(e.data),e.data.map((e=>({label:[e.firstname,e.lastname].join(" "),value:e.id}))))))},refetch:A,onChange:e=>{const r=y.find((t=>t.id===e.value));t.setFieldsValue({username_from:[r.firstname,r.lastname].join(" "),phone_from:r.phone})}})}),(0,h.jsx)(s.A.Item,{label:x("username"),name:"username_from",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(x("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(x("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(a.A,{})}),(0,h.jsx)(s.A.Item,{label:x("phone"),name:"phone_from",rules:[{validator:(e,t)=>t?t&&t<0?Promise.reject(new Error(x("must.be.positive"))):t&&(null===t||void 0===t?void 0:t.toString().length)<7?Promise.reject(new Error(x("min.7.numbers"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(i.A,{className:"w-100"})}),(0,h.jsxs)(n.A,{gutter:12,children:[(0,h.jsx)(l.A,{span:8,children:(0,h.jsx)(s.A.Item,{label:x("house"),name:"house_from",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(x("no.empty.space"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(a.A,{})})}),(0,h.jsx)(l.A,{span:8,children:(0,h.jsx)(s.A.Item,{label:x("stage"),name:"stage_from",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(x("no.empty.space"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(a.A,{})})}),(0,h.jsx)(l.A,{span:8,children:(0,h.jsx)(s.A.Item,{label:x("room"),name:"room_from",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(x("no.empty.space"))):Promise.resolve():Promise.reject(new Error(x("required")))}],children:(0,h.jsx)(a.A,{})})})]})]}),(0,h.jsxs)(l.A,{span:12,children:[(0,h.jsx)(s.A.Item,{label:x("address"),name:"address_from",rules:[{required:!0,message:x("required")}],children:(0,h.jsx)(a.A,{})}),(0,h.jsx)(v.A,{location:f,setLocation:j,setAddress:e=>t.setFieldsValue({address_from:e})})]})]}),(0,h.jsx)(d.A,{children:(0,h.jsx)(u.A,{type:"primary",htmlType:"button",onClick:r,children:x("next")})})]})}},75482:(e,t,r)=>{r.d(t,{C:()=>o});const o=[{title:"sender.details",content:"First-content"},{title:"receiver.details",content:"Second-content"},{title:"parcel.details",content:"Third-content"}]},82039:(e,t,r)=>{r.d(t,{A:()=>_});var o=r(9950),n=r(87094),l=r(41988),s=r(87827),a=r(33022),i=r(57796),d=r(55902),u=r(80737),c=r(48538),m=r(70030),v=r(2777),p=r(47992),h=r(51201),f=r(36537),j=r(53774),x=r(91854),A=r(59051),g=r.n(A),y=r(34996),b=r(44414);function _(e){var t;let{form:r,loading:A,prev:_,locationFrom:E,locationTo:w,image:P,setImage:C}=e;const{t:N}=(0,m.B)(),{activeMenu:k}=(0,x.d4)((e=>e.menu),x.bN),{payments:O}=(0,x.d4)((e=>e.payment),x.bN),[I,S]=(0,o.useState)(null===k||void 0===k||null===(t=k.data)||void 0===t?void 0:t.type),[q,F]=(0,o.useState)(0);(0,o.useEffect)((()=>{if(I&&E&&w){const e={"address_from[latitude]":E.lat,"address_from[longitude]":E.lng,"address_to[latitude]":w.lat,"address_to[longitude]":w.lng,type_id:null===I||void 0===I?void 0:I.value};f.A.calculate(e).then((e=>{let{data:t}=e;F(t.price)})).catch((e=>console.error(e)))}}),[I,E,w]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(n.A,{gutter:24,children:[(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(s.A.Item,{label:N("type"),name:"type",rules:[{required:!0,message:N("required")}],children:(0,b.jsx)(p.G,{fetchOptions:async function(e){const t={search:e};return h.A.getAll(t).then((e=>e.data.map((e=>({label:e.type,value:e.id})))))},onChange:e=>{S(e)}})})}),(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(s.A.Item,{label:N("image"),name:"images",rules:[{validator:()=>0===(null===P||void 0===P?void 0:P.length)?Promise.reject(new Error(N("required"))):Promise.resolve()}],children:(0,b.jsx)(v.A,{type:"languages",imageList:P,setImageList:C,form:r,multiple:!1})})}),(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(s.A.Item,{label:N("payment.type"),name:"payment_type",rules:[{required:!0,message:N("missing.payment.type")}],children:(0,b.jsx)(p.G,{fetchOptions:async function(e){const t={search:e};return y.A.getAll(t).then((e=>{var t,r;return null===(t=e.data)||void 0===t||null===(r=t.filter((e=>"cash"===e.tag||"wallet"===e.tag)))||void 0===r?void 0:r.map((e=>({label:N(e.tag),value:e.id})))}))}})})}),(0,b.jsx)(l.A,{span:12}),(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(s.A.Item,{label:N("delivery.date"),name:"delivery_date",rules:[{required:!0,message:N("required")}],children:(0,b.jsx)(a.A,{className:"w-100",placeholder:"",disabledDate:e=>g()().add(-1,"days")>=e})})}),(0,b.jsx)(l.A,{span:12,children:(0,b.jsx)(s.A.Item,{label:N("delivery.time"),name:"delivery_time",rules:[{required:!0,message:N("required")}],children:(0,b.jsx)(i.A,{className:"w-100",format:"HH:mm",placeholder:""})})}),(0,b.jsx)(l.A,{span:24,children:(0,b.jsx)(s.A.Item,{label:N("note"),name:"note",rules:[{validator:(e,t)=>t?t&&""===(null===t||void 0===t?void 0:t.trim())?Promise.reject(new Error(N("no.empty.space"))):t&&(null===t||void 0===t?void 0:t.trim().length)<2?Promise.reject(new Error(N("must.be.at.least.2"))):Promise.resolve():Promise.reject(new Error(N("required")))}],children:(0,b.jsx)(d.A,{})})})]}),(0,b.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,b.jsxs)(u.A,{children:[(0,b.jsx)(c.A,{type:"default",htmlType:"button",onClick:_,children:N("prev")}),(0,b.jsx)(c.A,{type:"primary",htmlType:"submit",loading:A,disabled:!q,children:N("submit")})]}),(0,b.jsxs)(u.A,{children:[(0,b.jsxs)("span",{children:[N("total.price"),":"]}),(0,b.jsx)("span",{children:(0,j.A)(q)})]})]})]})}}}]);