(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2885],{14691:(e,t,s)=>{"use strict";s.d(t,{A:()=>p});var n=s(58168),a=s(89379),l=s(64467),r=s(5544),i=s(80045),o=s(48738),d=s.n(o),c=s(71207),u=s(9950),m=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"];const p=(0,u.forwardRef)((function(e,t){var s,o=e.prefixCls,p=void 0===o?"rc-checkbox":o,h=e.className,g=e.style,v=e.checked,x=e.disabled,A=e.defaultChecked,f=void 0!==A&&A,j=e.type,y=void 0===j?"checkbox":j,b=e.onChange,k=(0,i.A)(e,m),C=(0,u.useRef)(null),w=(0,c.A)(f,{value:v}),N=(0,r.A)(w,2),S=N[0],_=N[1];(0,u.useImperativeHandle)(t,(function(){return{focus:function(){var e;null===(e=C.current)||void 0===e||e.focus()},blur:function(){var e;null===(e=C.current)||void 0===e||e.blur()},input:C.current}}));var O=d()(p,h,(s={},(0,l.A)(s,"".concat(p,"-checked"),S),(0,l.A)(s,"".concat(p,"-disabled"),x),s));return u.createElement("span",{className:O,style:g},u.createElement("input",(0,n.A)({},k,{className:"".concat(p,"-input"),ref:C,onChange:function(t){x||("checked"in e||_(t.target.checked),null===b||void 0===b||b({target:(0,a.A)((0,a.A)({},e),{},{type:y,checked:t.target.checked}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()},nativeEvent:t.nativeEvent}))},disabled:x,checked:!!S,type:y})),u.createElement("span",{className:"".concat(p,"-inner")}))}))},17811:(e,t,s)=>{"use strict";s.d(t,{Ay:()=>q});var n=s(58168),a=s(64467),l=s(5544),r=s(48738),i=s.n(r),o=s(71207),d=s(9950),c=s(5741),u=s(87126),m=s(27373),p=d.createContext(null),h=p.Provider;const g=p;var v=d.createContext(null),x=v.Provider,A=s(14691),f=s(41929),j=s(19389),y=s(77643),b=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]])}return s},k=function(e,t){var s,l,r=d.useContext(g),o=d.useContext(v),u=d.useContext(c.QO),m=u.getPrefixCls,p=u.direction,h=d.useRef(),x=(0,f.K4)(t,h),k=(0,d.useContext)(y.$W).isFormItemInput,C=e.prefixCls,w=e.className,N=e.children,S=e.style,_=b(e,["prefixCls","className","children","style"]),O=m("radio",C),I="button"===((null===r||void 0===r?void 0:r.optionType)||o)?"".concat(O,"-button"):O,q=(0,n.A)({},_),E=d.useContext(j.A);r&&(q.name=r.name,q.onChange=function(t){var s,n;null===(s=e.onChange)||void 0===s||s.call(e,t),null===(n=null===r||void 0===r?void 0:r.onChange)||void 0===n||n.call(r,t)},q.checked=e.value===r.value,q.disabled=null!==(s=q.disabled)&&void 0!==s?s:r.disabled),q.disabled=null!==(l=q.disabled)&&void 0!==l?l:E;var M=i()("".concat(I,"-wrapper"),(0,a.A)((0,a.A)((0,a.A)((0,a.A)({},"".concat(I,"-wrapper-checked"),q.checked),"".concat(I,"-wrapper-disabled"),q.disabled),"".concat(I,"-wrapper-rtl"),"rtl"===p),"".concat(I,"-wrapper-in-form-item"),k),w);return d.createElement("label",{className:M,style:S,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave},d.createElement(A.A,(0,n.A)({},q,{type:"radio",prefixCls:I,ref:x})),void 0!==N?d.createElement("span",null,N):null)};const C=d.forwardRef(k);var w=d.forwardRef((function(e,t){var s=d.useContext(c.QO),r=s.getPrefixCls,p=s.direction,g=d.useContext(u.A),v=(0,o.A)(e.defaultValue,{value:e.value}),x=(0,l.A)(v,2),A=x[0],f=x[1],j=e.prefixCls,y=e.className,b=void 0===y?"":y,k=e.options,w=e.buttonStyle,N=void 0===w?"outline":w,S=e.disabled,_=e.children,O=e.size,I=e.style,q=e.id,E=e.onMouseEnter,M=e.onMouseLeave,F=e.onFocus,B=e.onBlur,L=r("radio",j),P="".concat(L,"-group"),$=_;k&&k.length>0&&($=k.map((function(e){return"string"===typeof e||"number"===typeof e?d.createElement(C,{key:e.toString(),prefixCls:L,disabled:S,value:e,checked:A===e},e):d.createElement(C,{key:"radio-group-value-options-".concat(e.value),prefixCls:L,disabled:e.disabled||S,value:e.value,checked:A===e.value,style:e.style},e.label)})));var z=O||g,D=i()(P,"".concat(P,"-").concat(N),(0,a.A)((0,a.A)({},"".concat(P,"-").concat(z),z),"".concat(P,"-rtl"),"rtl"===p),b);return d.createElement("div",(0,n.A)({},(0,m.A)(e),{className:D,style:I,onMouseEnter:E,onMouseLeave:M,onFocus:F,onBlur:B,id:q,ref:t}),d.createElement(h,{value:{onChange:function(t){var s=A,n=t.target.value;"value"in e||f(n);var a=e.onChange;a&&n!==s&&a(t)},value:A,disabled:e.disabled,name:e.name,optionType:e.optionType}},$))}));const N=d.memo(w);var S=function(e,t){var s={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(s[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(s[n[a]]=e[n[a]])}return s},_=function(e,t){var s=d.useContext(c.QO).getPrefixCls,a=e.prefixCls,l=S(e,["prefixCls"]),r=s("radio",a);return d.createElement(x,{value:"button"},d.createElement(C,(0,n.A)({prefixCls:r},l,{type:"radio",ref:t})))};const O=d.forwardRef(_);var I=C;I.Button=O,I.Group=N,I.__ANT_RADIO=!0;const q=I},27373:(e,t,s)=>{"use strict";function n(e){return Object.keys(e).reduce((function(t,s){return!s.startsWith("data-")&&!s.startsWith("aria-")&&"role"!==s||s.startsWith("data-__")||(t[s]=e[s]),t}),{})}s.d(t,{A:()=>n})},29597:(e,t,s)=>{"use strict";function n(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const t=e.location.split(", ");return{lat:Number(t[0]),lng:Number(t[1])}}s.d(t,{A:()=>n})},34422:(e,t,s)=>{"use strict";s.d(t,{Q:()=>n});const n=[{title:"monday",disabled:!1},{title:"tuesday",disabled:!1},{title:"wednesday",disabled:!1},{title:"thursday",disabled:!1},{title:"friday",disabled:!1},{title:"saturday",disabled:!1},{title:"sunday",disabled:!1}]},42634:()=>{},51359:(e,t,s)=>{"use strict";e.exports=s.p+"static/media/map.f2e0b3013d676ba09c88.gif"},54735:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>se,steps:()=>te});var n=s(9950),a=s(45359),l=s(20567),r=s(91854),i=s(74623),o=s(71999),d=s(70030),c=s(65820),u=s(87827),m=s(87094),p=s(41988),h=s(80737),g=s(99674),v=s(25933),x=s(56952),A=s(55902),f=s(48538),j=s(28429),y=s(49348),b=s(93966),k=s(63620),C=s(59051),w=s.n(C),N=s(54218),S=s(15249),_=s(78498),O=s(29597),I=s(73242),q=s(85023),E=s(79406),M=s(53237),F=s(82371);const B={getAll:e=>F.A.get("dashboard/seller/shop-tags",{params:e}),getById:(e,t)=>F.A.get(`dashboard/seller/shop-tags/${e}`,{params:t}),create:e=>F.A.post("dashboard/seller/shop-tags",e,{}),update:(e,t)=>F.A.put(`dashboard/seller/shop-tags/${e}`,t,{}),delete:e=>F.A.delete("dashboard/seller/shop-tags/delete",{params:e}),dropAll:()=>F.A.get("dashboard/seller/shop-tags/drop/all"),restoreAll:()=>F.A.get("dashboard/seller/shop-tags/restore/all")};var L=s(4119),P=s(44414);function $(e){var t,s;let{next:a}=e;const{t:o}=(0,d.B)(),[c]=u.A.useForm(),C=(0,j.Zp)(),w=(0,r.wA)(),{activeMenu:I}=(0,r.d4)((e=>e.menu),r.bN),{languages:F,defaultLang:$}=(0,r.d4)((e=>e.formLang),r.bN),{settings:z}=(0,r.d4)((e=>e.globalSettings),r.bN),[D,T]=(0,n.useState)(!1),[Y,H]=(0,n.useState)((0,O.A)(z)),[R,Q]=(0,n.useState)(null),[Z,V]=(0,n.useState)(!1),[W,K]=(0,n.useState)((null===(t=I.data)||void 0===t?void 0:t.logo_img)||null),[U,G]=(0,n.useState)((null===(s=I.data)||void 0===s?void 0:s.background_img)||null);function J(e){if(!e)return{};const{translations:t}=e,s=F.map((e=>{var s,n,a;return{[`title[${e.locale}]`]:null===(s=t.find((t=>t.locale===e.locale)))||void 0===s?void 0:s.title,[`description[${e.locale}]`]:null===(n=t.find((t=>t.locale===e.locale)))||void 0===n?void 0:n.description,[`address[${e.locale}]`]:null===(a=t.find((t=>t.locale===e.locale)))||void 0===a?void 0:a.address}}));return Object.assign({},...s)}(0,n.useEffect)((()=>()=>{const e=c.getFieldsValue(!0);w((0,i.Ok)({activeMenu:I,data:e}))}),[]);const X=e=>({name:e,url:k.sE+e});(0,n.useEffect)((()=>{T(!0),b.A.get().then((e=>{var t,s,n,a,l,r,i,o,d;let{data:u}=e;console.log(u),c.setFieldsValue({...u,...J(u),logo_img:X(u.logo_img),background_img:X(u.background_img),delivery_time_type:null===(t=u.delivery_time)||void 0===t?void 0:t.type,delivery_time_from:null===(s=u.delivery_time)||void 0===s?void 0:s.from,delivery_time_to:null===(n=u.delivery_time)||void 0===n?void 0:n.to,tags:null===(a=u.tags)||void 0===a?void 0:a.map((e=>{var t;return{label:(null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:e.id}})),group_id:{label:(null===(l=u.group)||void 0===l||null===(r=l.translation)||void 0===r?void 0:r.title)||"no translation",value:null===(i=u.group)||void 0===i?void 0:i.id}}),G(X(u.background_img)),K(X(u.logo_img)),H({lat:Number(null===(o=u.location)||void 0===o?void 0:o.latitude),lng:Number(null===(d=u.location)||void 0===d?void 0:d.longitude)})})).finally((()=>{T(!1),w((0,i.km)(I))}))}),[]);return(0,P.jsx)(l.A,{loading:D,children:(0,P.jsxs)(u.A,{form:c,name:"basic",layout:"vertical",onFinish:e=>{V(!0);const t=e.tags,s={};if(t)for(let a=0;a<t.length;a++)s[`tags[${a}]`]=t[a].value;const n={...e,"images[0]":null===W||void 0===W?void 0:W.name,"images[1]":null===U||void 0===U?void 0:U.name,location:Y.lat+","+Y.lng,...s,group_id:e.group_id.value};delete n.tags,b.A.update(n).then((()=>{y.oR.success(o("successfully.updated")),a()})).finally((()=>V(!1)))},children:[(0,P.jsxs)(m.A,{gutter:36,children:[(0,P.jsxs)(p.A,{span:8,children:[(0,P.jsxs)(l.A,{children:[(0,P.jsxs)(h.A,{children:[(0,P.jsx)(u.A.Item,{label:o("logo.image"),children:(0,P.jsx)(N.A,{type:"shops/logo",image:W,setImage:K,form:c,name:"logo_img"})}),(0,P.jsx)(u.A.Item,{label:o("background.image"),children:(0,P.jsx)(N.A,{type:"shops/background",image:U,setImage:G,form:c,name:"background_img"})})]}),(0,P.jsx)(u.A.Item,{name:"status",label:o("status"),children:(0,P.jsxs)(g.A,{disabled:!0,children:[(0,P.jsx)(g.A.Option,{value:"new",children:o("new")}),(0,P.jsx)(g.A.Option,{value:"edited",children:o("edited")}),(0,P.jsx)(g.A.Option,{value:"approved",children:o("approved")}),(0,P.jsx)(g.A.Option,{value:"rejected",children:o("rejected")})]})}),(0,P.jsx)(u.A.Item,{label:o("open"),name:"open",valuePropName:"checked",hidden:!0,children:(0,P.jsx)(v.A,{disabled:!0})}),(0,P.jsx)(u.A.Item,{label:o("status.note"),name:"status_note",children:(0,P.jsx)(S.A,{rows:4})})]}),(0,P.jsxs)(l.A,{title:o("delivery"),children:[(0,P.jsx)(u.A.Item,{name:"price",label:o("min.price"),rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})}),(0,P.jsx)(u.A.Item,{name:"price_per_km",label:o("price.per.km"),rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})})]}),(0,P.jsxs)(l.A,{title:o("delivery.time"),children:[(0,P.jsx)(u.A.Item,{name:"delivery_time_type",label:o("delivery_time_type"),rules:[{required:!0,message:o("required")}],children:(0,P.jsxs)(g.A,{className:"w-100",children:[(0,P.jsx)(g.A.Option,{value:"minute",label:o("minutes")}),(0,P.jsx)(g.A.Option,{value:"hour",label:o("hour")})]})}),(0,P.jsx)(u.A.Item,{name:"delivery_time_from",label:o("delivery_time_from"),rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})}),(0,P.jsx)(u.A.Item,{name:"delivery_time_to",label:o("delivery_time_to"),rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})})]})]}),(0,P.jsxs)(p.A,{span:16,children:[(0,P.jsx)(l.A,{title:o("general"),children:(0,P.jsxs)(m.A,{children:[(0,P.jsx)(p.A,{span:24,children:F.map(((e,t)=>(0,P.jsx)(u.A.Item,{label:o("name"),name:`title[${e.locale}]`,rules:[{required:e.locale===$,message:o("required")}],hidden:e.locale!==$,children:(0,P.jsx)(A.A,{})},"title"+t)))}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(L.A,{label:o("phone"),name:"phone"})}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(u.A.Item,{label:o("group"),name:"group_id",rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(q.D,{fetchOptions:async function(){return M.A.getActive().then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:(null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:e.id}}))}))},className:"w-100"})})}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(u.A.Item,{label:o("shop.tags"),name:"tags",rules:[{required:!1,message:o("required")}],children:(0,P.jsx)(E.a,{mode:"multiple",fetchOptions:async function(e){Q(!1);const t={search:e};return B.getAll(t).then((e=>{let{data:t}=e;return t.map((e=>{var t;return{label:(null===(t=e.translation)||void 0===t?void 0:t.title)||"no name",value:e.id}}))}))},refetch:R})})}),(0,P.jsx)(p.A,{span:24,children:F.map(((e,t)=>(0,P.jsx)(u.A.Item,{label:o("description"),name:`description[${e.locale}]`,rules:[{required:e.locale===$,message:o("required")}],hidden:e.locale!==$,children:(0,P.jsx)(S.A,{rows:4})},"desc"+t)))})]})}),(0,P.jsx)(l.A,{title:o("order.info"),children:(0,P.jsxs)(m.A,{children:[(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(u.A.Item,{label:o("min.amount"),name:"min_amount",rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})})}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(u.A.Item,{label:o("tax"),name:"tax",rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})})}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(u.A.Item,{label:o("percentage"),name:"percentage",rules:[{required:!0,message:o("required")}],children:(0,P.jsx)(x.A,{min:0,className:"w-100"})})})]})})]}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(l.A,{title:o("address"),children:(0,P.jsxs)(m.A,{gutter:12,children:[(0,P.jsx)(p.A,{span:12,children:F.map(((e,t)=>(0,P.jsx)(u.A.Item,{label:o("address"),name:`address[${e.locale}]`,rules:[{required:e.locale===$,message:o("required")}],hidden:e.locale!==$,children:(0,P.jsx)(A.A,{})},"address"+t)))}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(_.A,{location:Y,setLocation:H,setAddress:e=>c.setFieldsValue({[`address[${$}]`]:e})})})]})})})]}),(0,P.jsxs)(h.A,{children:[(0,P.jsx)(f.A,{type:"primary",htmlType:"submit",loading:Z,children:o("save")}),(0,P.jsx)(f.A,{onClick:()=>{const e="my-shop";w((0,i.EK)({...I,nextUrl:e})),C(`/${e}`)},children:o("cancel")})]})]})})}var z=s(12916),D=s(33022),T=s(81446);const Y={getById:e=>F.A.get(`dashboard/seller/shop-working-days/${e}`),create:e=>F.A.post("dashboard/seller/shop-working-day",e,{}),update:(e,t)=>F.A.put(`dashboard/seller/shop-working-days/${e}`,t,{}),delete:e=>F.A.delete("dashboard/seller/shop-working-days",{params:e})},H={getById:e=>F.A.get(`dashboard/seller/shop-closed-dates/${e}`),create:e=>F.A.post("dashboard/seller/shop-closed-dates",e,{}),update:(e,t)=>F.A.put(`dashboard/seller/shop-closed-dates/${e}`,t,{}),delete:e=>F.A.delete("dashboard/seller/shop-closed-dates",{params:e})};var R=s(34422),Q=s(9213),Z=s(13239),V=s(94118),W=s(50384);const K=e=>{let{next:t,prev:s}=e;const[a]=u.A.useForm(),{t:o}=(0,d.B)(),[c,g]=(0,n.useState)([]),[x,A]=(0,n.useState)(new Array(7).fill(!1)),[y,b]=(0,n.useState)(!1),[k,C]=(0,n.useState)(!1),{myShop:N}=(0,r.d4)((e=>e.myShop),r.bN),S=(0,j.Zp)(),_=(0,r.wA)(),O=[{from:new Date(1900,4,18),to:new Date}],{activeMenu:q}=(0,r.d4)((e=>e.menu),r.bN),[E,M]=(0,n.useState)(!0);(0,n.useEffect)((()=>{a.setFieldsValue({working_days:R.Q}),N.uuid&&(C(!0),H.getById(N.uuid).then((e=>{g(e.data.closed_dates.filter((e=>e.day>w()(new Date).format("YYYY-MM-DD"))).map((e=>new Date(e.day))))})),Y.getById(N.uuid).then((e=>{A(0!==e.data.dates.length?e.data.dates.map((e=>e.disabled)):[]),0!==e.data.dates.length&&a.setFieldsValue({working_days:e.data.dates.map((e=>({title:e.day,from:w()(e.from,"HH:mm:ss"),to:w()(e.to,"HH:mm:ss"),disabled:Boolean(e.disabled)})))})})).finally((()=>C(!1))))}),[]);const F=c&&c.length>0?(0,P.jsxs)(m.A,{children:[(0,P.jsx)(z.A,{style:{fontSize:14,padding:"4px 10px",width:"100%",marginTop:"10px"},children:o("Your.existing.vacations")}),(0,P.jsxs)(p.A,{span:24,className:"mt-2",children:[c.slice(0,E?1:c.length).map(((e,t)=>(0,P.jsxs)(h.A,{className:"d-flex justify-content-between",style:{borderBottom:"1px solid #4D5B75"},children:[(0,P.jsx)(p.A,{span:24,style:{fontSize:14,marginTop:"8px"},children:w()(e).format("YYYY-MM-DD")}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(z.A,{color:"red",className:"cursor-pointer mt-3 mb-2",style:{fontSize:14},onClick:()=>{return t=e,g(c.filter((e=>e!==t)));var t},children:o("remove")})})]},t))),(0,P.jsx)(f.A,{className:"mt-3 w-100",onClick:()=>{M(!E)},children:E?(0,P.jsx)(W.U29,{}):(0,P.jsx)(W.ZXT,{})})]})]}):(0,P.jsx)(z.A,{style:{fontSize:14,padding:"4px 10px",width:"100%"},children:"Please pick one or more days."}),B=(e,t)=>{const s=[];for(let n=e;n<t;n++)s.push(n);return s},L=()=>({disabledHours:()=>B(0,1),disabledMinutes:()=>B(0,0),disabledSeconds:()=>B(0,60)});return(0,P.jsx)(P.Fragment,{children:k?(0,P.jsx)(T.A,{}):(0,P.jsx)(u.A,{form:a,layout:"vertical",onFinish:e=>{b(!0);const t={dates:c?c.map((e=>w()(e).format("YYYY-MM-DD"))):void 0},s={dates:e.working_days.map((e=>({day:e.title,from:w()(e.from?e.from:"00").format("HH-mm"),to:w()(e.to?e.to:"00").format("HH-mm"),disabled:e.disabled})))},n="my-shop";H.update(N.uuid,t).then((()=>{_((0,i.EK)({...q,nextUrl:n})),S(`/${n}`),_((0,I.v)())})).finally((()=>b(!1))),0!==e.working_days.length&&Y.update(N.uuid,s).then((()=>{_((0,i.EK)({...q,nextUrl:n})),S(`/${n}`),_((0,I.v)())})).finally((()=>b(!1)))},children:(0,P.jsxs)(m.A,{children:[(0,P.jsx)(p.A,{span:13,children:(0,P.jsx)(l.A,{title:o("restaurant.working.days"),children:(0,P.jsx)(m.A,{gutter:8,children:(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(u.A.List,{name:"working_days",children:e=>(0,P.jsx)("div",{children:e.map(((e,t)=>(0,P.jsxs)(m.A,{gutter:12,align:"center",children:[(0,P.jsx)(p.A,{span:7,children:(0,P.jsx)(u.A.Item,{name:[t,"day"],children:(0,P.jsx)("span",{children:o(R.Q[t].title)})})}),x[e.key]?(0,P.jsx)(p.A,{span:13,className:"mt-2",children:(0,P.jsx)("span",{children:o("shop.closed")})}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(p.A,{span:7,children:(0,P.jsx)(u.A.Item,{rules:[{required:!1===x[e.key]}],name:[t,"from"],children:(0,P.jsx)(D.A,{disabledTime:L,picker:"time",placeholder:o("start.time")})})}),(0,P.jsx)(p.A,{span:6,children:(0,P.jsx)(u.A.Item,{rules:[{required:!1===x[e.key]}],name:[t,"to"],children:(0,P.jsx)(D.A,{disabledTime:L,picker:"time",placeholder:o("end.time")})})})]}),(0,P.jsx)(p.A,{span:4,children:(0,P.jsx)(u.A.Item,{name:[t,"disabled"],valuePropName:"checked",children:(0,P.jsx)(v.A,{checkedChildren:(0,P.jsx)(Z.A,{}),unCheckedChildren:(0,P.jsx)(V.A,{}),checked:x[e.key],onChange:()=>(e=>{const t=[...x];t[e]=!x[e],A(t)})(e.key)})})})]},e.key)))})})})})})}),(0,P.jsx)(p.A,{span:11,children:(0,P.jsxs)(l.A,{title:o("restaurant.closed.days"),children:[(0,P.jsx)("p",{children:"If you can't answer the buyer's questions in time and want to share this information with your buyers, you can add the dates here."}),(0,P.jsx)(u.A.Item,{rules:[{required:!1,message:o("required")}],children:(0,P.jsx)(Q.hv,{className:"datepicker",mode:"multiple",disabled:O,min:1,selected:c,onSelect:g,footer:F,showOutsideDays:!0})})]})}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsxs)(h.A,{children:[(0,P.jsx)(f.A,{type:"primary",htmlType:"submit",loading:y,children:o("next")}),(0,P.jsx)(f.A,{htmlType:"submit",onClick:()=>s(),children:o("prev")})]})})]})})})};var U=s(62983),G=s(51359);const J={getById:e=>F.A.get(`rest/shop/delivery-zone/${e}`),create:e=>F.A.post("dashboard/seller/delivery-zones",e,{})},X=e=>{let{next:t,prev:s}=e;const{t:a}=(0,d.B)(),[i]=u.A.useForm(),[o,c]=(0,n.useState)([]),[g,v]=(0,n.useState)(!1),[x,A]=(0,n.useState)(!1),{activeMenu:j}=(0,r.d4)((e=>e.menu),r.bN),{myShop:b}=(0,r.d4)((e=>e.myShop),r.bN),[k,C]=(0,n.useState)(null);return(0,n.useEffect)((()=>{A(!0),J.getById(null===b||void 0===b?void 0:b.id).then((e=>{var t;return c(null===(t=e.data.address)||void 0===t?void 0:t.map((e=>({lat:e[0],lng:e[1]}))))})).finally((()=>A(!1)))}),[]),(0,P.jsx)(u.A,{form:i,name:"map",layout:"vertical",onFinish:e=>{if(o.length<3)return void y.oR.warning(a("place.selected.map"));if(!k)return void y.oR.warning(a("place.selected.map"));v(!0);const s={shop_id:j.data.id,address:o.map((e=>({0:e.lat,1:e.lng})))};J.create(s).then((()=>t())).finally((()=>v(!1)))},initialValues:{},children:x?(0,P.jsx)(T.A,{}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m.A,{children:(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(l.A,{title:a("delivery.zone"),children:(0,P.jsxs)(m.A,{gutter:12,children:[(0,P.jsx)(p.A,{span:24,className:"mb-3",children:(0,P.jsxs)(h.A,{children:[(0,P.jsx)(W.h6Q,{size:25}),(0,P.jsx)("p",{children:"Click this icon to start pin points in the map and connect them to draw a zone . Minimum 3 points required"})]})}),(0,P.jsx)(p.A,{span:12,children:(0,P.jsx)("img",{src:G,alt:"map gif",style:{object:"contain"}})}),(0,P.jsx)(p.A,{span:24,children:(0,P.jsx)(U.A,{triangleCoords:o,settriangleCoords:c,setMerge:C})})]})})})}),(0,P.jsxs)(h.A,{children:[(0,P.jsx)(f.A,{type:"primary",htmlType:"submit",loading:g,children:a("next")}),(0,P.jsx)(f.A,{htmlType:"submit",onClick:()=>s(),children:a("prev")})]})]})})},{Step:ee}=a.A,te=[{title:"shop",content:"First-content"},{title:"map",content:"Second-content"},{title:"delivery",content:"Third-content"}];function se(){var e;const{t:t}=(0,d.B)(),s=(0,r.wA)(),n=(0,c.s)(),u=Number((null===(e=n.values)||void 0===e?void 0:e.step)||0),{activeMenu:m}=(0,r.d4)((e=>e.menu),r.bN),p=()=>{const e=u+1;n.set("step",e)},h=()=>{const e=u-1;n.set("step",e)};return(0,P.jsxs)(l.A,{title:t("shop.edit"),extra:(0,P.jsx)(o.A,{}),children:[(0,P.jsx)(a.A,{current:u,onChange:e=>{s((0,i.Ok)({activeMenu:m,data:{...m.data,step:e}})),n.set("step",e)},children:te.map((e=>(0,P.jsx)(ee,{title:t(e.title)},e.title)))}),(0,P.jsxs)("div",{className:"steps-content",children:["First-content"===te[u].content&&(0,P.jsx)($,{next:p}),"Second-content"===te[u].content&&(0,P.jsx)(X,{prev:h,next:p}),"Third-content"===te[u].content&&(0,P.jsx)(K,{prev:h})]})]})}},62983:(e,t,s)=>{"use strict";s.d(t,{A:()=>o});var n=s(97239),a=s(9950),l=s(63620),r=s(39174),i=s(44414);const o=(0,n.GoogleApiWrapper)({apiKey:l.CJ,libraries:["places"]})((e=>{var t,s;const[l,o]=(0,a.useState)({lat:38.58799374569842,lng:-98.47949767583457}),[d,c]=(0,a.useState)([]),[u,m]=(0,a.useState)(!!e.triangleCoords),[p,h]=(0,a.useState)(null);e.setMerge(u);(0,a.useEffect)((()=>(h(!0),u&&c(e.triangleCoords),()=>{c([])})),[e.triangleCoords]);const g=e.triangleCoords.map((e=>({lat:Number(e.lat||"0"),lng:Number(e.lng||"0")})));for(var v=new e.google.maps.LatLngBounds,x=0;x<g.length;x++)v.extend(g[x]);return(0,i.jsxs)("div",{className:"map-container",style:{height:500,width:"100%"},children:[(0,i.jsx)("button",{className:"map-button",type:"button",onClick:()=>{navigator.geolocation.getCurrentPosition((function(e){o({lat:e.coords.latitude,lng:e.coords.longitude})}))},children:(0,i.jsx)(r.uFi,{})}),(0,i.jsxs)(n.Map,{options:{minZoom:15,maxZoom:15},cursor:"pointer",onClick:(t,s,n)=>{h(!1);const{latLng:a}=n,l=a.lat(),r=a.lng();u?(c([]),e.settriangleCoords([{lat:l,lng:r}]),o({lat:l,lng:r}),m(!1)):e.settriangleCoords((e=>[...e,{lat:l,lng:r}]))},maxZoom:16,minZoom:2,google:e.google,initialCenter:l,center:l,onReady:function(e,t){t.setOptions({draggableCursor:"crosshair",draggingCursor:"grab"})},bounds:p&&v,className:"clickable",children:[null===(t=e.triangleCoords)||void 0===t?void 0:t.map(((t,s)=>(0,i.jsx)(n.Marker,{onClick:t=>(t=>{var s,n;m(!!e.triangleCoords),(null===(s=e.triangleCoords[0])||void 0===s?void 0:s.lat)===(null===(n=t.position)||void 0===n?void 0:n.lat)&&e.triangleCoords.length>1&&(c(e.triangleCoords),e.setLocation(e.triangleCoords),m(!0),h(!0))})(t),position:t,icon:{url:"https://upload.wikimedia.org/wikipedia/commons/9/94/Circle-image.svg",scaledSize:new e.google.maps.Size(10,10)},className:"marker"},s))),null!==d&&void 0!==d&&d.length?(0,i.jsx)(n.Polygon,{path:e.triangleCoords,strokeColor:"black",strokeOpacity:.8,strokeWeight:3,fillColor:"black",fillOpacity:.35},null===d||void 0===d?void 0:d.length):(0,i.jsx)(n.Polyline,{path:e.triangleCoords,strokeColor:"black",strokeOpacity:.8,strokeWeight:3,fillColor:"black",fillOpacity:.35},null===(s=e.triangleCoords)||void 0===s?void 0:s.length)]})]})}))},65820:(e,t,s)=>{"use strict";s.d(t,{s:()=>r});var n=s(28429),a=s(21215),l=s.n(a);const r=()=>{const e=(0,n.Zp)(),t=(0,n.zy)(),s=l().parse(t.search,{ignoreQueryPrefix:!0});return{values:s,set:(t,n)=>e({search:l().stringify({...s,[t]:n})}),reset:t=>{const n={...s};n[t]&&delete n[t],e({search:l().stringify({...n})})},clear:()=>e({search:l().stringify({})}),merge:t=>e({search:l().stringify({...s,...t})})}}},71999:(e,t,s)=>{"use strict";s.d(t,{A:()=>d});var n=s(9950),a=s(17811),l=s(12437),r=s(91854),i=s(82406),o=s(44414);const d=()=>{const e=(0,r.wA)(),{languages:t,defaultLang:s}=(0,r.d4)((e=>e.formLang),r.bN);(0,n.useEffect)((()=>{t.length||l.A.getAllActive().then((t=>{let{data:s}=t;e((0,i.Nn)(s))}))}),[]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Ay.Group,{value:s,onChange:t=>{let{target:{value:s}}=t;e((0,i.Qq)(s))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,o.jsx)(a.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}},78498:(e,t,s)=>{"use strict";s.d(t,{A:()=>h});var n=s(9950),a=s(97239),l=s(63620);const r=s.p+"static/media/pin.0e41858db80c699cd8a2.png";var i=s(96011),o=s.n(i),d=s(46125);const{formLang:{defaultLang:c}}=d.M.getState();async function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AIzaSyDZQUsmwnkCmD3HMNFCABo8YSE54FCTFYo",s={language:c||"en",latlng:`${null===e||void 0===e?void 0:e.lat},${null===e||void 0===e?void 0:e.lng}`,key:t};return o().get("https://maps.googleapis.com/maps/api/geocode/json",{params:s}).then((e=>{var t;let{data:s}=e;return null===(t=s.results[0])||void 0===t?void 0:t.formatted_address})).catch((e=>(console.log(e),"not found")))}var m=s(39174),p=s(44414);const h=(0,a.GoogleApiWrapper)({apiKey:l.CJ})((function(e){const[t,s]=(0,n.useState)(),i=async()=>{await navigator.geolocation.getCurrentPosition((function(e){const t={lat:e.coords.latitude,lng:e.coords.longitude};s(t)}))};(0,n.useEffect)((()=>{i()}),[]);const o=[{lat:Number(e.location.lat)||0,lng:Number(e.location.lng)||0}];for(var d=new e.google.maps.LatLngBounds,c=0;c<o.length;c++)d.extend(o[c]);return(0,p.jsxs)("div",{className:"map-container",style:{height:400,width:"100%"},children:[(0,p.jsx)("button",{className:"map-button",type:"button",onClick:()=>{i(),(async t=>{const s={lat:null===t||void 0===t?void 0:t.lat,lng:null===t||void 0===t?void 0:t.lng};e.setLocation(s);const n=await u(s,l.CJ);e.setAddress(n)})(t)},children:(0,p.jsx)(m.uFi,{})}),(0,p.jsx)(a.Map,{cursor:"pointer",onClick:async(t,s,n)=>{const{latLng:a}=n,r={lat:a.lat(),lng:a.lng()};e.setLocation(r);const i=await u(r,l.CJ);e.setAddress(i)},google:e.google,defaultZoom:12,zoom:10,className:"clickable",initialCenter:e.location,center:e.location,children:(0,p.jsx)(a.Marker,{position:e.location,icon:{url:r,scaledSize:new e.google.maps.Size(32,32)},className:"marker"})})]})}))},79406:(e,t,s)=>{"use strict";s.d(t,{a:()=>d});var n=s(9950),a=s(95491),l=s.n(a),r=s(99674),i=s(90650),o=s(44414);const d=e=>{let{fetchOptions:t,debounceTimeout:s=400,refetch:a=!1,...d}=e;const[c,u]=(0,n.useState)(!1),[m,p]=(0,n.useState)([]),h=(0,n.useMemo)((()=>l()((e=>{p([]),u(!0),t(e).then((e=>{p(e),u(!1)}))}),s)),[t,s]);return(0,o.jsx)(r.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:c?(0,o.jsx)(i.A,{size:"small"}):"no results",...d,options:m,onFocus:()=>{m.length&&!a||h("")}})}},85023:(e,t,s)=>{"use strict";s.d(t,{D:()=>i});var n=s(9950),a=s(99674),l=s(90650),r=s(44414);const i=e=>{let{fetchOptions:t,refetch:s=!1,...i}=e;const[o,d]=(0,n.useState)(!1),[c,u]=(0,n.useState)([]);return(0,r.jsx)(a.A,{filterOption:!1,labelInValue:!0,notFoundContent:o?(0,r.jsx)(l.A,{size:"small"}):"no results",...i,options:o?[]:c,onFocus:()=>{c.length&&!s||(d(!0),t().then((e=>{u(e),d(!1)})))}})}}}]);