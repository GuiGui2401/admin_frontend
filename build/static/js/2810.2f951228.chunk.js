(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[2810],{8168:(e,t,n)=>{"use strict";function l(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}n.d(t,{A:()=>l})},8297:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(9950),s=n(93124),i=n(41397),a=n(52786),o=n(44414);function r(e){let{handleChange:t,defaultValue:n,resetSearch:r,...d}=e;const[c,u]=(0,l.useState)(n),v=(0,l.useMemo)((()=>(0,i.debounce)((e=>{t(e)}),800)),[]);return(0,l.useEffect)((()=>{u(n)}),[r]),(0,o.jsx)(s.A,{value:c,onChange:e=>{const{value:t}=e.target;u(t.replace(/\s/g,"")),v(t.replace(/\s/g,""))},prefix:(0,o.jsx)(a.A,{}),...d})}},23283:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var l=n(9950),s=n(25887),i=n(27741),a=n(48538),o=n(87094),r=n(41988),d=n(91854),c=n(23758),u=n(74623),v=n(70030),m=n(53271),h=n(47992),p=(n(56326),n(44414));function f(e){var t,n;let{orderDetails:f,handleCancel:A}=e;console.log("OrderDeliveryman",f);const{t:x}=(0,v.B)(),{activeMenu:y}=(0,d.d4)((e=>e.menu),d.bN),[g]=s.A.useForm(),j=(0,d.wA)(),[b,w]=(0,l.useState)(!1);return(0,p.jsx)(i.A,{visible:!!f,onCancel:A,footer:[(0,p.jsx)(a.A,{type:"primary",onClick:()=>g.submit(),loading:b,children:x("save")},"saveBtn"),(0,p.jsx)(a.A,{type:"default",onClick:A,children:x("cancel")},"cancelBtn")],children:(0,p.jsx)(s.A,{form:g,layout:"vertical",onFinish:e=>{const t={deliveryman:e.deliveryman.value};w(!0),c.A.updateDelivery(f.id,t).then((()=>{A(),j((0,u.Ms)(y))})).finally((()=>w(!1)))},initialValues:{deliveryman:null===(t=f.deliveryman)||void 0===t?void 0:t.id},children:(0,p.jsx)(o.A,{gutter:12,children:(0,p.jsx)(r.A,{span:24,children:(0,p.jsx)(s.A.Item,{label:x("deliveryman"),name:"deliveryman",rules:[{required:!0,message:x("required")}],children:(0,p.jsx)(h.G,{className:"w-100",debounceTimeout:500,placeholder:x("select.deliveryman"),fetchOptions:e=>{var t;const n={search:e,role:"deliveryman",shop_id:null===f||void 0===f||null===(t=f.shop)||void 0===t?void 0:t.id};return m.A.getAll(n).then((e=>e.data.map((e=>({label:e.firstname+" "+e.lastname,value:e.id})))))},allowClear:!0,value:null===(n=y.data)||void 0===n?void 0:n.deliveryman})})})})})})}},26714:(e,t,n)=>{"use strict";n.d(t,{A:()=>x});var l=n(9950),s=n(48946),i=n(39362),a=n.n(i),o=n(81446),r=n(20567),d=n(27741),c=n(48538),u=n(87094),v=n(41988),m=n(70030),h=n(50384),p=n(28429),f=n(44414);const A=r.A.Meta,x=e=>{let{id:t,handleCancel:n}=e;const[i,x]=(0,l.useState)(null),{t:y}=(0,m.B)();(0,p.Zp)();return(0,f.jsx)(f.Fragment,{children:i?(0,f.jsx)(o.A,{}):(0,f.jsx)(d.A,{visible:!!t,title:y("selected.download"),closable:!1,handleCancel:n,footer:[(0,f.jsx)(c.A,{type:"default",onClick:n,children:y("cancel")},"cancelBtn")],children:(0,f.jsx)(u.A,{gutter:24,children:(0,f.jsx)(v.A,{span:12,children:(0,f.jsx)(r.A,{title:y("download.pdf"),onClick:()=>function(e){x(!0),s.A.orderExport(e).then((t=>{a()(t,`invoice_${e}.pdf`,"application/pdf"),n()})).finally((()=>x(!1)))}(t),className:"text-center cursor-pointer",children:(0,f.jsx)(A,{className:"d-flex align-items-center justify-content-center",title:(0,f.jsx)(h.yos,{size:80})})})})})})})}},28645:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var l=n(9950),s=n(30377),i=n(69216),a=n(80737),o=n(25933),r=n(57811),d=n(72906),c=n(70030),u=n(44414);const{Text:v}=s.A,m=e=>{let{columns:t=[],setColumns:n}=e;const{t:s}=(0,c.B)(),[m,h]=(0,l.useState)(!1),p=(0,u.jsx)(i.A,{children:null===t||void 0===t?void 0:t.map(((e,l)=>(0,u.jsx)(i.A.Item,{children:(0,u.jsxs)(a.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(v,{children:e.title}),(0,u.jsx)(o.A,{defaultChecked:!0,onClick:()=>{!function(e){const l=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));n(l)}(e)}})]})},l)))});return(0,u.jsx)(r.A,{overlay:p,trigger:["click"],onVisibleChange:e=>{h(e)},visible:m,children:(0,u.jsx)(d.A,{style:{fontSize:"26px"}})})}},29597:(e,t,n)=>{"use strict";function l(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const t=e.location.split(", ");return{lat:Number(t[0]),lng:Number(t[1])}}n.d(t,{A:()=>l})},35116:(e,t,n)=>{"use strict";n.d(t,{A:()=>d});n(9950);var l=n(48538),s=n(78433),i=n(49348),a=n(70030),o=n(13311),r=n(44414);function d(e){let{onClick:t,type:n="default",...d}=e;const{t:c}=(0,a.B)(),{isDemo:u}=(0,o.A)();return(0,r.jsx)(l.A,{icon:(0,r.jsx)(s.A,{}),onClick:()=>{console.log(u),u?i.oR.warning(c("cannot.work.demo")):t()},type:n,...d})}},38635:(e,t,n)=>{"use strict";n.d(t,{A:()=>B});var l=n(69286),s=n(45359),i=n(27741),a=n(48538),o=n(87094),r=n(41988),d=n(12916),c=n(9950),u=n(70030),v=n(23758),m=n(81446),h=n(50384),p=n(91854),f=n(63620),A=n(41478),x=n(73631),y=n(29597),g=n(47965),j=n(31222),b=n(6604),w=n(68873),_=n(44414);const{Step:C}=s.A,N=()=>(0,_.jsx)("img",{src:A,width:"50",alt:"Pin"}),S=()=>(0,_.jsx)("img",{src:x,width:"50",alt:"Pin"}),k=["blue","red","gold","volcano","cyan","lime"],B=e=>{var t,n,A,x,B,R,E,M;let{id:O,handleCancel:I}=e;const{t:L}=(0,u.B)(),[T,U]=(0,c.useState)(null),[F,D]=(0,c.useState)(null),[$,z]=(0,c.useState)(null),{settings:G}=(0,p.d4)((e=>e.globalSettings),p.bN),V=(0,y.A)(G),[q,P]=(0,c.useState)(0),[W,H]=(0,c.useState)((0,y.A)(G)),[Z,K]=(0,c.useState)((0,y.A)(G)),[X,J]=(0,c.useState)([{id:0,name:"new",icon:(0,_.jsx)(g.A,{})},{id:1,name:"accepted",icon:(0,_.jsx)(h.LW,{})},{id:2,name:"ready",icon:(0,_.jsx)(j.NtI,{})},{id:3,name:"on_a_way",icon:(0,_.jsx)(b.o2P,{})},{id:4,name:"delivered",icon:(0,_.jsx)(b.eDZ,{})}]);const{google_map_key:Q}=(0,p.d4)((e=>e.globalSettings.settings),p.bN);(0,c.useEffect)((()=>{U(!0),v.A.getById(O).then((e=>{var t,n,l,s,i;let{data:a}=e;J("canceled"===a.status?[{id:1,name:"new",icon:(0,_.jsx)(g.A,{})},{id:5,name:"canceled",icon:(0,_.jsx)(w.XfH,{})}]:X),P("canceled"===a.status?1:null===(t=X.find((e=>e.name===a.status)))||void 0===t?void 0:t.id),z("canceled"===a.status?"error":"success"),D(a),K({lat:null===(n=a.delivery_address)||void 0===n||null===(l=n.location)||void 0===l?void 0:l.latitude,lng:null===(s=a.delivery_address)||void 0===s||null===(i=s.location)||void 0===i?void 0:i.longitude}),H({lat:a.shop.location.latitude,lng:a.shop.location.longitude})})).finally((()=>{U(!1)}))}),[]);return(0,_.jsx)(_.Fragment,{children:(0,_.jsx)(i.A,{visible:!!O,title:L("show.locations"),onCancel:()=>I(),style:{minWidth:"80vw"},footer:[(0,_.jsx)(a.A,{type:"default",onClick:I,children:L("cancel")},"cancelBtn")],children:T?(0,_.jsx)(m.A,{}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s.A,{current:q,status:$,className:"mb-5",children:null===X||void 0===X?void 0:X.map(((e,t)=>(0,_.jsx)(C,{title:L(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+t)))}),(0,_.jsxs)(o.A,{gutter:12,children:[(0,_.jsxs)(r.A,{span:12,children:[(0,_.jsxs)("h3",{children:[L("order.id")," #",null===F||void 0===F?void 0:F.id]}),(0,_.jsxs)("p",{children:[(0,_.jsx)(h.A5h,{})," ",null===F||void 0===F?void 0:F.created_at]}),(0,_.jsxs)("p",{children:[L("schedulet.at")," ",null===F||void 0===F?void 0:F.delivery_date]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("strong",{children:null===F||void 0===F||null===(t=F.shop)||void 0===t||null===(n=t.translation)||void 0===n?void 0:n.title})," ",null===F||void 0===F||null===(A=F.details)||void 0===A?void 0:A.map(((e,t)=>{var n;return(0,_.jsx)(d.A,{color:k[t],children:null===e||void 0===e||null===(n=e.stock)||void 0===n?void 0:n.product.translation.title})}))]})]}),(0,_.jsxs)(r.A,{span:12,children:[(0,_.jsxs)("p",{children:[L("status")," ","new"===(null===F||void 0===F?void 0:F.status)?(0,_.jsx)(d.A,{color:"blue",children:L(null===F||void 0===F?void 0:F.status)}):"canceled"===(null===F||void 0===F?void 0:F.status)?(0,_.jsx)(d.A,{color:"error",children:L(null===F||void 0===F?void 0:F.status)}):(0,_.jsx)(d.A,{color:"cyan",children:L(null===F||void 0===F?void 0:F.status)})]}),(0,_.jsxs)("p",{children:[L("payment.method")," ",(0,_.jsx)("strong",{children:null===F||void 0===F||null===(x=F.transaction)||void 0===x||null===(B=x.payment_system)||void 0===B?void 0:B.tag})]}),console.log(null===F||void 0===F?void 0:F.delivery_type),(0,_.jsxs)("p",{children:[L("order.type"),":",(0,_.jsx)("strong",{children:null===F||void 0===F||null===(R=F.delivery_type)||void 0===R||null===(E=R.translation)||void 0===E?void 0:E.title})]}),(0,_.jsxs)("p",{children:[L("payment.type")," ",(0,_.jsx)("strong",{children:null===F||void 0===F||null===(M=F.transaction)||void 0===M?void 0:M.status})]})]}),(0,_.jsxs)(r.A,{span:24,className:"mt-5",children:[(0,_.jsx)("h4",{children:L("map")}),(0,_.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,_.jsxs)(l.Ay,{bootstrapURLKeys:{key:f.CJ||Q},defaultZoom:15,center:V,yesIWantToUseGoogleMapApiInternals:!0,options:{fullscreenControl:!1},onGoogleApiLoaded:e=>{let{map:t,maps:n}=e;const l=[W,Z].map((e=>({lat:Number(e.lat||"0"),lng:Number(e.lng||"0")})));let s=new n.LatLngBounds;for(var i=0;i<l.length;i++)s.extend(l[i]);t.fitBounds(s)},children:[(0,_.jsx)(S,{lat:null===W||void 0===W?void 0:W.lat,lng:null===W||void 0===W?void 0:W.lng}),(0,_.jsx)(N,{lat:null===Z||void 0===Z?void 0:Z.lat,lng:null===Z||void 0===Z?void 0:Z.lng})]})})]})]})]})})})}},39362:function(e,t){var n,l,s;l=[],void 0===(s="function"===typeof(n=function(){return function e(t,n,l){var s,i,a=window,o="application/octet-stream",r=l||o,d=t,c=!n&&!l&&d,u=document.createElement("a"),v=function(e){return String(e)},m=a.Blob||a.MozBlob||a.WebKitBlob||v,h=n||"download";if(m=m.call?m.bind(a):Blob,"true"===String(this)&&(r=(d=[d,r])[0],d=d[1]),c&&c.length<2048&&(h=c.split("/").pop().split("?")[0],u.href=c,-1!==u.href.indexOf(c))){var p=new XMLHttpRequest;return p.open("GET",c,!0),p.responseType="blob",p.onload=function(t){e(t.target.response,h,o)},setTimeout((function(){p.send()}),0),p}if(/^data:([\w+-]+\/[\w+.-]+)?[,;]/.test(d)){if(!(d.length>2096103.424&&m!==v))return navigator.msSaveBlob?navigator.msSaveBlob(y(d),h):g(d);r=(d=y(d)).type||o}else if(/([\x80-\xff])/.test(d)){for(var f=0,A=new Uint8Array(d.length),x=A.length;f<x;++f)A[f]=d.charCodeAt(f);d=new m([A],{type:r})}function y(e){for(var t=e.split(/[:;,]/),n=t[1],l=("base64"==t[2]?atob:decodeURIComponent)(t.pop()),s=l.length,i=0,a=new Uint8Array(s);i<s;++i)a[i]=l.charCodeAt(i);return new m([a],{type:n})}function g(e,t){if("download"in u)return u.href=e,u.setAttribute("download",h),u.className="download-js-link",u.innerHTML="downloading...",u.style.display="none",document.body.appendChild(u),setTimeout((function(){u.click(),document.body.removeChild(u),!0===t&&setTimeout((function(){a.URL.revokeObjectURL(u.href)}),250)}),66),!0;if(/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent))return/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o)),window.open(e)||confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")&&(location.href=e),!0;var n=document.createElement("iframe");document.body.appendChild(n),!t&&/^data:/.test(e)&&(e="data:"+e.replace(/^data:([\w\/\-\+]+)/,o)),n.src=e,setTimeout((function(){document.body.removeChild(n)}),333)}if(s=d instanceof m?d:new m([d],{type:r}),navigator.msSaveBlob)return navigator.msSaveBlob(s,h);if(a.URL)g(a.URL.createObjectURL(s),!0);else{if("string"===typeof s||s.constructor===v)try{return g("data:"+r+";base64,"+a.btoa(s))}catch(j){return g("data:"+r+","+encodeURIComponent(s))}(i=new FileReader).onload=function(e){g(this.result)},i.readAsDataURL(s)}return!0}})?n.apply(t,l):n)||(e.exports=s)},41478:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/user.fbe7078c52acde79652d.jpg"},45470:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(89379),s=n(9950),i=n(76889),a=n(16233),o=function(e,t){return s.createElement(a.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:i.A}))};o.displayName="DownloadOutlined";const r=s.forwardRef(o)},47992:(e,t,n)=>{"use strict";n.d(t,{G:()=>d});var l=n(9950),s=n(95491),i=n.n(s),a=n(99674),o=n(90650),r=n(44414);const d=e=>{let{fetchOptions:t,debounceTimeout:n=400,...s}=e;const[d,c]=(0,l.useState)(!1),[u,v]=(0,l.useState)([]),m=(0,l.useMemo)((()=>i()((e=>{v([]),c(!0),t(e).then((e=>{v(e),c(!1)}))}),n)),[t,n]);return(0,r.jsx)(a.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,notFoundContent:d?(0,r.jsx)(o.A,{size:"small"}):"no results",...s,options:u,onFocus:()=>{u.length||m("")}})}},48946:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var l=n(82371);const s={orderExport:(e,t)=>l.A.get(`dashboard/user/export/order/${e}/pdf`,{params:t,responseType:"blob"})}},53774:(e,t,n)=>{"use strict";function l(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}n.d(t,{A:()=>l})},54021:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(89379),s=n(9950),i=n(2104),a=n(16233),o=function(e,t){return s.createElement(a.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:i.A}))};o.displayName="EyeOutlined";const r=s.forwardRef(o)},56592:(e,t,n)=>{"use strict";n.d(t,{A:()=>f});var l=n(9950),s=n(25887),i=n(27741),a=n(48538),o=n(87094),r=n(41988),d=n(99674),c=n(91854),u=n(70030),v=n(23758),m=n(74623),h=(n(53177),n(44414));const p=["new","accepted","ready","on_a_way","delivered"];function f(e){let{orderDetails:t,handleCancel:n}=e;const{activeMenu:f}=(0,c.d4)((e=>e.menu),c.bN),[A]=s.A.useForm(),x=(0,c.wA)(),{t:y}=(0,u.B)(),[g,j]=(0,l.useState)(!1),[b,w]=(0,l.useState)(p);null===f||void 0===f||f.data;(0,l.useEffect)((()=>{const e=p.findIndex((e=>e===t.status));let n=[p[e],p[e+1],"canceled"];e<0&&(n=[p[e+1],"canceled"]),w(n)}),[t]);return(0,h.jsx)(i.A,{visible:!!t,title:t.title,onCancel:n,footer:[(0,h.jsx)(a.A,{type:"primary",onClick:()=>A.submit(),loading:g,children:y("save")}),(0,h.jsx)(a.A,{type:"default",onClick:n,children:y("cancel")})],children:(0,h.jsx)(s.A,{form:A,layout:"vertical",onFinish:e=>{j(!0);const l={...e};v.A.updateStatus(t.id,l).then((()=>{n(),x((0,m.Ms)(f))})).finally((()=>j(!1)))},initialValues:{status:t.status},children:(0,h.jsx)(o.A,{gutter:12,children:(0,h.jsx)(r.A,{span:24,children:(0,h.jsx)(s.A.Item,{label:y("status"),name:"status",rules:[{required:!0,message:y("required")}],children:(0,h.jsx)(d.A,{children:b.map(((e,t)=>(0,h.jsx)(d.A.Option,{value:e,children:y(e)},e+t)))})})})})})})}},69091:(e,t,n)=>{"use strict";n.d(t,{A:()=>c});n(9950);var l=n(87094),s=n(41988),i=n(91854),a=n(70030),o=n(74704),r=n(89627),d=n(44414);const c=e=>{let{data:t,orders:n}=e;const{t:c}=(0,a.B)(),{defaultCurrency:u}=(0,i.d4)((e=>e.currency),i.bN),v=["accepted_orders_count","cancel_orders_count","delivered_orders_count","new_orders_count","on_a_way_orders_count","orders_count","progress_orders_count","ready_orders_count","today_count","total_delivered_price","total_price"];return(0,d.jsx)(l.A,{gutter:16,className:"mt-3",children:null===v||void 0===v?void 0:v.map((e=>(0,d.jsx)(s.A,{flex:"0 0 16.6%",children:e.includes("price")?(0,d.jsx)(o.A,{title:c(e),value:(0,r.r)(null===t||void 0===t?void 0:t[e],null===u||void 0===u?void 0:u.symbol)}):(0,d.jsx)(o.A,{title:c(e),value:null===t||void 0===t?void 0:t[e]})})))})}},72906:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(89379),s=n(9950);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var a=n(16233),o=function(e,t){return s.createElement(a.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:i}))};o.displayName="MoreOutlined";const r=s.forwardRef(o)},73631:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/shop.46d7a94ca800c711764a.png"},74704:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});n(9950);var l=n(20567),s=n(44414);function i(e){let{title:t="Orders",value:n=0,loading:i=!1}=e;return(0,s.jsx)(l.A,{className:"statistics-card",loading:i,children:(0,s.jsxs)("div",{className:"card-wrapper",children:[(0,s.jsx)("div",{className:"space"}),(0,s.jsx)("h1",{className:"mb-0 font-weight-bold number",children:n}),(0,s.jsx)("span",{className:"highlighter "+(n<10?"red":n<100?"grey":"green")}),t&&(0,s.jsx)("h4",{className:"title",children:t})]})})}},78433:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(89379),s=n(9950),i=n(18042),a=n(16233),o=function(e,t){return s.createElement(a.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:i.A}))};o.displayName="DeleteOutlined";const r=s.forwardRef(o)},89627:(e,t,n)=>{"use strict";function l(e,t){var n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(t){return e>=t.value}));return n?"$"+(e/n.value).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n.symbol:"0"}n.d(t,{r:()=>l})},90582:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var l=n(89379),s=n(9950),i=n(42701),a=n(16233),o=function(e,t){return s.createElement(a.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:i.A}))};o.displayName="EditOutlined";const r=s.forwardRef(o)}}]);