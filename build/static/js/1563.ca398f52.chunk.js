(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[1563],{8168:(e,l,t)=>{"use strict";function n(e){switch(e){case"ascend":return"asc";case"descend":return"desc"}}t.d(l,{A:()=>n})},8297:(e,l,t)=>{"use strict";t.d(l,{A:()=>o});var n=t(9950),s=t(55902),d=t(41397),a=t(60767),i=t(44414);function o(e){let{handleChange:l,defaultValue:t,resetSearch:o,...r}=e;const[c,u]=(0,n.useState)(t),v=(0,n.useMemo)((()=>(0,d.debounce)((e=>{l(e)}),800)),[]);return(0,n.useEffect)((()=>{u(t)}),[o]),(0,i.jsx)(s.A,{value:c,onChange:e=>{const{value:l}=e.target;u(l.replace(/\s/g,"")),v(l.replace(/\s/g,""))},prefix:(0,i.jsx)(a.A,{}),...r})}},21777:(e,l,t)=>{"use strict";t.d(l,{A:()=>o});t(9950);var n=t(27741),s=t(32312),d=t(48538),a=t(70030),i=t(44414);const o=e=>{let{open:l,handleCancel:t,text:o,click:r,loading:c,subTitle:u}=e;const{t:v}=(0,a.B)();return(0,i.jsxs)(n.A,{closable:!1,visible:l,footer:null,centered:!0,children:[(0,i.jsx)(s.Ay,{status:"warning",title:o,subTitle:u}),(0,i.jsxs)("div",{className:"d-flex justify-content-end",children:[(0,i.jsx)(d.A,{type:"primary",className:"mr-2",onClick:r,loading:c,children:v("yes")}),(0,i.jsx)(d.A,{onClick:()=>t(),children:v("no")})]})]})}},28645:(e,l,t)=>{"use strict";t.d(l,{A:()=>h});var n=t(9950),s=t(66362),d=t(69216),a=t(80737),i=t(25933),o=t(57811),r=t(72906),c=t(70030),u=t(44414);const{Text:v}=s.A,h=e=>{let{columns:l=[],setColumns:t}=e;const{t:s}=(0,c.B)(),[h,m]=(0,n.useState)(!1),x=(0,u.jsx)(d.A,{children:null===l||void 0===l?void 0:l.map(((e,n)=>(0,u.jsx)(d.A.Item,{children:(0,u.jsxs)(a.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(v,{children:e.title}),(0,u.jsx)(i.A,{defaultChecked:!0,onClick:()=>{!function(e){const n=null===l||void 0===l?void 0:l.map((l=>(l.dataIndex===e.dataIndex&&(l.is_show=!(null!==l&&void 0!==l&&l.is_show)),l)));t(n)}(e)}})]})},n)))});return(0,u.jsx)(o.A,{overlay:x,trigger:["click"],onVisibleChange:e=>{m(e)},visible:h,children:(0,u.jsx)(r.A,{style:{fontSize:"26px"}})})}},29597:(e,l,t)=>{"use strict";function n(e){if(null===e||void 0===e||!e.location)return{lat:47.4143302506288,lng:8.532059477976883};const l=e.location.split(", ");return{lat:Number(l[0]),lng:Number(l[1])}}t.d(l,{A:()=>n})},35116:(e,l,t)=>{"use strict";t.d(l,{A:()=>r});t(9950);var n=t(48538),s=t(44070),d=t(49348),a=t(70030),i=t(13311),o=t(44414);function r(e){let{onClick:l,type:t="default",...r}=e;const{t:c}=(0,a.B)(),{isDemo:u}=(0,i.A)();return(0,o.jsx)(n.A,{icon:(0,o.jsx)(s.A,{}),onClick:()=>{console.log(u),u?d.oR.warning(c("cannot.work.demo")):l()},type:t,...r})}},41478:(e,l,t)=>{"use strict";e.exports=t.p+"static/media/user.fbe7078c52acde79652d.jpg"},42634:()=>{},47992:(e,l,t)=>{"use strict";t.d(l,{G:()=>r});var n=t(9950),s=t(95491),d=t.n(s),a=t(99674),i=t(90650),o=t(44414);const r=e=>{let{fetchOptions:l,debounceTimeout:t=400,...s}=e;const[r,c]=(0,n.useState)(!1),[u,v]=(0,n.useState)([]),h=(0,n.useMemo)((()=>d()((e=>{v([]),c(!0),l(e).then((e=>{v(e),c(!1)}))}),t)),[l,t]);return(0,o.jsx)(a.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:r?(0,o.jsx)(i.A,{size:"small"}):"no results",...s,options:u,onFocus:()=>{u.length||h("")}})}},52174:(e,l,t)=>{"use strict";t.r(l),t.d(l,{default:()=>we});var n=t(9950),s=t(62863),d=t(33022),a=t(12916),i=t(48538),o=t(80737),r=t(69216),c=t(20567),u=t(81541),v=t(57811),h=t(73092),m=t(28429),x=t(24513),p=t(12678),j=t(44070),A=t(53387),g=t(13700),y=t(91854),f=t(74623),b=t(70030),_=t(88986),w=t(53177),C=t(33824),k=t(8168),S=t(8297),I=t(51242),N=t(47992),M=t(53271),D=t(28645),Y=t(49348),B=t(35116),P=t(36537),$=t(55386),O=t(76083),F=t(59051),R=t.n(F),T=t(63620),V=t(39174),z=t(54826),E=t(38525),G=t(21777),L=t(65820),q=t(13311);function K(e){return e?R()(e).format("DD-MM-YYYY, HH:mm"):""}function U(e){return e?R()(e).format("DD-MM-YYYY"):""}var Z=t(87827),H=t(27741),W=t(87094),X=t(41988),Q=t(99674),J=t(44414);function ee(e){let{orderDetails:l,handleCancel:t,status:s}=e;const{activeMenu:d}=(0,y.d4)((e=>e.menu),y.bN),[a]=Z.A.useForm(),o=(0,y.wA)(),{t:r}=(0,b.B)(),[c,u]=(0,n.useState)(!1),[v,h]=(0,n.useState)(s);(0,n.useEffect)((()=>{const e=s.findIndex((e=>e.name===l.status));let t=[s[e],s[e+1],{name:"canceled",id:8,active:!0}];e<0&&(t=[s[e+1],"canceled"]),h(t)}),[l]);return(0,J.jsx)(H.A,{visible:!!l,title:l.title,onCancel:t,footer:[(0,J.jsx)(i.A,{type:"primary",onClick:()=>a.submit(),loading:c,children:r("save")},"save-form"),(0,J.jsx)(i.A,{type:"default",onClick:t,children:r("cancel")},"cansel-modal")],children:(0,J.jsx)(Z.A,{form:a,layout:"vertical",onFinish:e=>{u(!0);const n={...e};P.A.updateStatus(l.id,n).then((()=>{t(),o((0,f.Ms)(d))})).finally((()=>u(!1)))},initialValues:{status:l.status},children:(0,J.jsx)(W.A,{gutter:12,children:(0,J.jsx)(X.A,{span:24,children:(0,J.jsx)(Z.A.Item,{label:r("status"),name:"status",rules:[{required:!0,message:r("required")}],children:(0,J.jsx)(Q.A,{children:null===v||void 0===v?void 0:v.map((e=>(0,J.jsx)(Q.A.Option,{value:null===e||void 0===e?void 0:e.name,children:r(null===e||void 0===e?void 0:e.name)},null===e||void 0===e?void 0:e.name)))})})})})})})}const le=[{name:"new",id:"1",active:!0},{name:"accepted",id:"2",active:!0},{name:"ready",id:"3",active:!0},{name:"on_a_way",id:"4",active:!0},{name:"delivered",id:"5",active:!0},{name:"canceled",id:"6",active:!0}];var te=t(45359),ne=t(69286),se=t(81446),de=t(50384),ae=t(41478),ie=t(73631),oe=t(29597),re=t(47965),ce=t(92049),ue=t(6604),ve=t(68873);const{Step:he}=te.A,me=()=>(0,J.jsx)("img",{src:ae,width:"50",alt:"Pin"}),xe=()=>(0,J.jsx)("img",{src:ie,width:"50",alt:"Pin"}),pe=["blue","red","gold","volcano","cyan","lime"],je=e=>{var l,t,s,d,o,r;let{id:u,handleCancel:v}=e;const{t:h}=(0,b.B)(),[m,x]=(0,n.useState)(null),[p,j]=(0,n.useState)(null),[A,g]=(0,n.useState)(null),{settings:f}=(0,y.d4)((e=>e.globalSettings),y.bN),_=(0,oe.A)(f),[w,C]=(0,n.useState)(0),[k,S]=(0,n.useState)((0,oe.A)(f)),[I,N]=(0,n.useState)((0,oe.A)(f)),[M,D]=(0,n.useState)([{id:0,name:"new",icon:(0,J.jsx)(re.A,{})},{id:1,name:"accepted",icon:(0,J.jsx)(ce.A,{})},{id:3,name:"ready",icon:(0,J.jsx)(de.LW,{})},{id:4,name:"on_a_way",icon:(0,J.jsx)(de.vBC,{})},{id:5,name:"delivered",icon:(0,J.jsx)(ue.eDZ,{})}]);const{google_map_key:Y}=(0,y.d4)((e=>e.globalSettings.settings),y.bN);(0,n.useEffect)((()=>{x(!0),P.A.getById(u).then((e=>{var l;let{data:t}=e;D("canceled"===t.status?[{id:1,name:"new",icon:(0,J.jsx)(re.A,{})},{id:5,name:"canceled",icon:(0,J.jsx)(ve.XfH,{})}]:M),C("canceled"===t.status?1:null===(l=M.find((e=>e.name===t.status)))||void 0===l?void 0:l.id),g("canceled"===t.status?"error":"success"),j(t),N({lat:t.address_from.latitude,lng:t.address_from.longitude}),S({lat:t.address_to.latitude,lng:t.address_to.longitude})})).finally((()=>{x(!1)}))}),[]);return(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(H.A,{visible:!!u,title:h("show.locations"),onCancel:()=>v(),style:{minWidth:"80vw"},footer:[(0,J.jsx)(i.A,{type:"default",onClick:v,children:h("cancel")},"cancelBtn")],children:m?(0,J.jsx)(se.A,{}):(0,J.jsxs)(c.A,{children:[(0,J.jsx)(te.A,{current:w,status:A,className:"mb-5",children:null===M||void 0===M?void 0:M.map(((e,l)=>(0,J.jsx)(he,{title:h(e.name),icon:null===e||void 0===e?void 0:e.icon},e.id+l)))}),(0,J.jsxs)(W.A,{gutter:12,children:[(0,J.jsxs)(X.A,{span:12,children:[(0,J.jsxs)("h3",{children:[h("order.id")," #",null===p||void 0===p?void 0:p.id]}),(0,J.jsxs)("p",{children:[(0,J.jsx)(de.A5h,{})," ",K(null===p||void 0===p?void 0:p.created_at)]}),(0,J.jsxs)("p",{children:[h("schedulet.at")," ",U(null===p||void 0===p?void 0:p.delivery_date)]}),(0,J.jsxs)("span",{children:[(0,J.jsx)("strong",{children:null===p||void 0===p||null===(l=p.shop)||void 0===l||null===(t=l.translation)||void 0===t?void 0:t.title})," ",null===p||void 0===p||null===(s=p.details)||void 0===s?void 0:s.map(((e,l)=>{var t;return(0,J.jsx)(a.A,{color:pe[l],children:null===e||void 0===e||null===(t=e.stock)||void 0===t?void 0:t.product.translation.title})}))]})]}),(0,J.jsxs)(X.A,{span:12,children:[(0,J.jsxs)("p",{children:[h("status"),": ","new"===(null===p||void 0===p?void 0:p.status)?(0,J.jsx)(a.A,{color:"blue",children:h(null===p||void 0===p?void 0:p.status)}):"canceled"===(null===p||void 0===p?void 0:p.status)?(0,J.jsx)(a.A,{color:"error",children:h(null===p||void 0===p?void 0:p.status)}):(0,J.jsx)(a.A,{color:"cyan",children:h(null===p||void 0===p?void 0:p.status)})]}),(0,J.jsxs)("p",{children:[h("order.type"),": ",(0,J.jsx)("strong",{children:h("parcel")})]}),(0,J.jsxs)("p",{children:[h("payment.method"),": ",(0,J.jsx)("strong",{children:null===p||void 0===p||null===(d=p.transaction)||void 0===d||null===(o=d.payment_system)||void 0===o?void 0:o.tag})]}),(0,J.jsxs)("p",{children:[h("payment.status"),": ",(0,J.jsx)("strong",{children:null===p||void 0===p||null===(r=p.transaction)||void 0===r?void 0:r.status})]})]}),(0,J.jsxs)(X.A,{span:24,className:"mt-5",children:[(0,J.jsx)("h4",{children:h("map")}),(0,J.jsx)("div",{className:"map-container",style:{height:400,width:"100%"},children:(0,J.jsxs)(ne.Ay,{bootstrapURLKeys:{key:T.CJ||Y},defaultZoom:15,center:_,yesIWantToUseGoogleMapApiInternals:!0,options:{fullscreenControl:!1},onGoogleApiLoaded:e=>{let{map:l,maps:t}=e;const n=[k,I].map((e=>({lat:Number(e.lat||"0"),lng:Number(e.lng||"0")})));let s=new t.LatLngBounds;for(var d=0;d<n.length;d++)s.extend(n[d]);l.fitBounds(s)},children:[(0,J.jsx)(xe,{lat:null===k||void 0===k?void 0:k.lat,lng:null===k||void 0===k?void 0:k.lng}),(0,J.jsx)(me,{lat:null===I||void 0===I?void 0:I.lat,lng:null===I||void 0===I?void 0:I.lng})]})})]})]})]})})})};var Ae=t(91524),ge=t(53774);const ye=e=>{var l,t,s,d,a,o,r,c,u,v;let{id:h,handleCancel:m}=e;const{t:x}=(0,b.B)(),[p,j]=(0,n.useState)(null),[A,g]=(0,n.useState)(null);return(0,n.useEffect)((()=>{j(!0),P.A.getById(h).then((e=>{let{data:l}=e;g(l)})).finally((()=>{j(!1)}))}),[]),console.log("data => ",A),(0,J.jsx)(J.Fragment,{children:(0,J.jsx)(H.A,{visible:!!h,title:`${x("parcel.id")} #${h}`,onCancel:()=>m(),footer:[(0,J.jsx)(i.A,{type:"default",onClick:m,children:x("cancel")},"cancelBtn")],className:"large-modal",children:p?(0,J.jsx)(se.A,{}):(0,J.jsxs)(W.A,{gutter:24,children:[(0,J.jsx)(X.A,{span:12,children:(0,J.jsxs)(Ae.A,{title:x("sender.details"),bordered:!0,children:[(0,J.jsx)(Ae.A.Item,{label:x("username"),span:3,children:null===A||void 0===A?void 0:A.username_from}),(0,J.jsx)(Ae.A.Item,{label:x("phone"),span:3,children:null===A||void 0===A?void 0:A.phone_from}),(0,J.jsx)(Ae.A.Item,{label:x("address"),span:3,children:null===A||void 0===A||null===(l=A.address_from)||void 0===l?void 0:l.address}),(0,J.jsx)(Ae.A.Item,{label:x("house"),span:3,children:null===A||void 0===A||null===(t=A.address_from)||void 0===t?void 0:t.house}),(0,J.jsx)(Ae.A.Item,{label:x("stage"),span:3,children:null===A||void 0===A||null===(s=A.address_from)||void 0===s?void 0:s.stage}),(0,J.jsx)(Ae.A.Item,{label:x("room"),span:3,children:null===A||void 0===A||null===(d=A.address_from)||void 0===d?void 0:d.room})]})}),(0,J.jsx)(X.A,{span:12,children:(0,J.jsxs)(Ae.A,{title:x("receiver.details"),bordered:!0,children:[(0,J.jsx)(Ae.A.Item,{label:x("username"),span:3,children:null===A||void 0===A?void 0:A.username_to}),(0,J.jsx)(Ae.A.Item,{label:x("phone"),span:3,children:null===A||void 0===A?void 0:A.phone_to}),(0,J.jsx)(Ae.A.Item,{label:x("address"),span:3,children:null===A||void 0===A||null===(a=A.address_to)||void 0===a?void 0:a.address}),(0,J.jsx)(Ae.A.Item,{label:x("house"),span:3,children:null===A||void 0===A||null===(o=A.address_to)||void 0===o?void 0:o.house}),(0,J.jsx)(Ae.A.Item,{label:x("stage"),span:3,children:null===A||void 0===A||null===(r=A.address_to)||void 0===r?void 0:r.stage}),(0,J.jsx)(Ae.A.Item,{label:x("room"),span:3,children:null===A||void 0===A||null===(c=A.address_to)||void 0===c?void 0:c.room})]})}),(0,J.jsx)(X.A,{span:24,children:(0,J.jsxs)(Ae.A,{bordered:!0,className:"mt-4",children:[(0,J.jsxs)(Ae.A.Item,{label:x("client"),span:3,children:[null===A||void 0===A||null===(u=A.user)||void 0===u?void 0:u.firstname," ",null===A||void 0===A||null===(v=A.user)||void 0===v?void 0:v.lastname]}),(0,J.jsx)(Ae.A.Item,{label:x("delivery.date.&.time"),span:3,children:K(`${null===A||void 0===A?void 0:A.delivery_date} ${null===A||void 0===A?void 0:A.delivery_time}`)}),(0,J.jsx)(Ae.A.Item,{label:x("price"),span:3,children:(0,ge.A)(null===A||void 0===A?void 0:A.total_price)}),(0,J.jsx)(Ae.A.Item,{label:x("created.at"),span:3,children:K(null===A||void 0===A?void 0:A.createdAt)}),(0,J.jsx)(Ae.A.Item,{label:x("note"),span:3,children:null===A||void 0===A?void 0:A.note})]})})]})})})};function fe(e){var l,t,s;let{orderDetails:d,handleCancel:a}=e;const{t:o}=(0,b.B)(),{activeMenu:r}=(0,y.d4)((e=>e.menu),y.bN),[c]=Z.A.useForm(),u=(0,y.wA)(),[v,h]=(0,n.useState)(!1);return(0,J.jsx)(H.A,{visible:!!d,onCancel:a,footer:[(0,J.jsx)(i.A,{type:"primary",onClick:()=>c.submit(),loading:v,children:o("save")},"saveBtn"),(0,J.jsx)(i.A,{type:"default",onClick:a,children:o("cancel")},"cancelBtn")],children:(0,J.jsx)(Z.A,{form:c,layout:"vertical",onFinish:e=>{const l={deliveryman_id:e.deliveryman.value};h(!0),P.A.updateDelivery(d.id,l).then((()=>{a(),u((0,f.Ms)(r))})).finally((()=>h(!1)))},initialValues:{deliveryman:{label:d.deliveryman?(null===d||void 0===d||null===(l=d.deliveryman)||void 0===l?void 0:l.firstname)+" "+(null===d||void 0===d||null===(t=d.deliveryman)||void 0===t?void 0:t.lastname):null,value:d.deliveryman?null===d||void 0===d||null===(s=d.deliveryman)||void 0===s?void 0:s.id:null}},children:(0,J.jsx)(W.A,{gutter:12,children:(0,J.jsx)(X.A,{span:24,children:(0,J.jsx)(Z.A.Item,{label:o("deliveryman"),name:"deliveryman",rules:[{required:!0,message:o("required")}],children:(0,J.jsx)(N.G,{className:"w-100",debounceTimeout:500,placeholder:o("select.shop"),fetchOptions:async function(e){const l={search:e.length?e:void 0,page:1,perPage:10,role:"deliveryman",exist_token:1};return M.A.getAll(l).then((e=>{let{data:l}=e;return l.map((e=>({label:[e.firstname,e.lastname].join(" "),value:e.id})))}))},allowClear:!0})})})})})})}const{TabPane:be}=s.A,{RangePicker:_e}=d.A;function we(){var e,l,t,d,F,Z,H,W;const{type:X}=(0,m.g)(),Q=(0,y.wA)(),te=(0,m.Zp)(),{t:ne}=(0,b.B)(),{isDemo:se}=(0,q.A)(),[de,ae]=(0,n.useState)(null),[ie,oe]=(0,n.useState)(null),[re,ce]=(0,n.useState)(null),[ue,ve]=(0,n.useState)(null),he=[{name:"all",id:"7",active:!0},...le,{name:"deleted_at",id:"8",active:!0}],[me,xe]=(0,n.useState)(null),[pe,Ae]=(0,n.useState)([{title:ne("id"),is_show:!0,dataIndex:"id",key:"id",sorter:!0},{title:ne("client"),is_show:!0,dataIndex:"user",key:"user",render:e=>(0,J.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",(null===e||void 0===e?void 0:e.lastname)||""]})},{title:ne("status"),is_show:!0,dataIndex:"status",key:"status",render:(e,l)=>(0,J.jsxs)("div",{className:"cursor-pointer",children:["new"===e?(0,J.jsx)(a.A,{color:"blue",children:ne(e)}):"canceled"===e?(0,J.jsx)(a.A,{color:"error",children:ne(e)}):(0,J.jsx)(a.A,{color:"cyan",children:ne(e)}),"delivered"===e||"canceled"===e||l.deleted_at?"":(0,J.jsx)(x.A,{onClick:e=>{e.stopPropagation(),ae(l)},disabled:l.deleted_at})]})},{title:ne("deliveryman"),is_show:!0,dataIndex:"deliveryman",key:"deliveryman",render:(e,l)=>(0,J.jsx)("div",{children:"ready"===l.status&&"pickup"!==l.delivery_type?(0,J.jsx)(i.A,{disabled:l.deleted_at,type:"link",onClick:()=>ce(l),children:(0,J.jsxs)(o.A,{children:[e?`${e.firstname} ${e.lastname}`:ne("add.deliveryman"),(0,J.jsx)(x.A,{})]})}):(0,J.jsxs)("div",{children:[null===e||void 0===e?void 0:e.firstname," ",null===e||void 0===e?void 0:e.lastname]})})},{title:ne("payment.type"),is_show:!0,dataIndex:"transaction",key:"transaction",render:e=>{var l;return ne(null===e||void 0===e||null===(l=e.payment_system)||void 0===l?void 0:l.tag)||"-"}},{title:ne("created.at"),is_show:!0,dataIndex:"created_at",key:"created_at",render:e=>K(e)},{title:ne("delivery.date"),is_show:!0,dataIndex:"delivery_date",key:"delivery_date",render:e=>U(e)},{title:ne("options"),is_show:!0,key:"options",render:(e,l)=>(0,J.jsxs)(o.A,{children:[(0,J.jsx)(i.A,{disabled:l.deleted_at,icon:(0,J.jsx)(V.kMs,{}),onClick:e=>{e.stopPropagation(),oe(l.id)}}),(0,J.jsx)(i.A,{disabled:l.deleted_at,icon:(0,J.jsx)(p.A,{}),onClick:e=>{e.stopPropagation(),(e=>{ve(e.id)})(l)}}),(0,J.jsx)(i.A,{type:"primary",icon:(0,J.jsx)(x.A,{}),onClick:e=>{e.stopPropagation(),(e=>{Q((0,I.Uy)()),Q((0,f.X4)({url:`parcel-orders/${e.id}`,id:"edit_parcel_order",name:ne("edit.parcel.order")})),te(`/parcel-orders/${e.id}`)})(l)},disabled:"delivered"===l.status||"canceled"===l.status||l.deleted_at}),(0,J.jsx)(B.A,{disabled:l.deleted_at,icon:(0,J.jsx)(j.A,{}),onClick:e=>{e.stopPropagation(),Be([l.id]),ge(!0),$e(!0)}})]})}]),{setIsModalVisible:ge}=(0,n.useContext)($.o),[we,Ce]=(0,n.useState)(!1),{activeMenu:ke}=(0,y.d4)((e=>e.menu),y.bN),Se=(0,L.s)(),[Ie,Ne]=(0,n.useState)(Se.values.status||"all"),Me=(null===(e=ke.data)||void 0===e?void 0:e.role)||Ie,De=ke.data,[Ye,Be]=(0,n.useState)(null),[Pe,$e]=(0,n.useState)(null),[Oe,Fe]=(0,n.useState)(!1),[Re,Te]=(0,n.useState)(R()().subtract(1,"months"),R()()),{data:Ve,loading:ze,params:Ee,meta:Ge}=(0,y.d4)((e=>e.parcelOrders),y.bN),Le={search:null===De||void 0===De?void 0:De.search,sort:null===De||void 0===De?void 0:De.sort,column:null===De||void 0===De?void 0:De.column,perPage:null===De||void 0===De?void 0:De.perPage,page:null===De||void 0===De?void 0:De.page,user_id:null===De||void 0===De?void 0:De.user_id,status:"deleted_at"===Me||"all"===Me?void 0:Me,deleted_at:"deleted_at"===Me?"deleted_at":void 0,shop_id:null!==(null===(l=ke.data)||void 0===l?void 0:l.shop_id)?null===(t=ke.data)||void 0===t?void 0:t.shop_id:null,delivery_type:"scheduled"!==X?X:void 0,delivery_date_from:"scheduled"===X?R()().add(1,"day").format("YYYY-MM-DD"):void 0,date_from:Re?null===(d=Re[0])||void 0===d?void 0:d.format("YYYY-MM-DD"):null,date_to:Re?null===(F=Re[1])||void 0===F?void 0:F.format("YYYY-MM-DD"):null};(0,_.A)((()=>{Q((0,C.xj)(Le))}),[De,Re,X]);const qe=(e,l)=>{Q((0,f.Ok)({activeMenu:ke,data:{...De,[l]:e}}))};const Ke=()=>{ae(null),ce(null),oe(null),ve(null)};(0,n.useEffect)((()=>{null!==ke&&void 0!==ke&&ke.refetch&&(Q((0,C.xj)(Le)),Q((0,f.km)(ke)))}),[null===ke||void 0===ke?void 0:ke.refetch]);const Ue={selectedRowKeys:Ye,onChange:e=>{Be(e)}},Ze=(0,J.jsxs)(r.A,{children:[(0,J.jsx)(r.A.Item,{onClick:()=>{se?Y.oR.warning(ne("cannot.work.demo")):xe({delete:!0})},children:(0,J.jsxs)(o.A,{children:[(0,J.jsx)(j.A,{}),ne("delete.all")]})}),(0,J.jsx)(r.A.Item,{onClick:()=>{se?Y.oR.warning(ne("cannot.work.demo")):xe({restore:!0})},children:(0,J.jsxs)(o.A,{children:[(0,J.jsx)(z.DQ9,{}),ne("restore.all")]})})]});return(0,J.jsxs)(J.Fragment,{children:[(0,J.jsx)(o.A,{className:"justify-content-end w-100 mb-3",children:(0,J.jsx)(i.A,{type:"primary",icon:(0,J.jsx)(A.A,{}),onClick:()=>{Q((0,I.Uy)()),Q((0,f.X4)({id:"parcel-orders/add",url:"parcel-orders/add",name:"add.parcel.order"})),te("/parcel-orders/add")},style:{width:"100%"},children:ne("add.parcel.order")})}),(0,J.jsx)(c.A,{children:(0,J.jsxs)(o.A,{wrap:!0,className:"order-filter",children:[(0,J.jsx)(S.A,{defaultValue:null===De||void 0===De?void 0:De.search,resetSearch:!(null!==De&&void 0!==De&&De.search),placeholder:ne("search"),handleChange:e=>qe(e,"search")}),(0,J.jsx)(N.G,{placeholder:ne("select.client"),fetchOptions:async function(e){const l={search:e,perPage:10};return M.A.search(l).then((e=>{let{data:l}=e;return l.map((e=>({label:`${e.firstname} ${e.lastname}`,value:e.id})))}))},onSelect:e=>qe(e.value,"user_id"),onDeselect:()=>qe(null,"user_id"),style:{width:"100%"},value:null===De||void 0===De?void 0:De.user_id}),(0,J.jsx)(_e,{value:Re,onChange:e=>Te(e),disabledDate:e=>e&&e>R()().endOf("day"),style:{width:"100%"}}),"deleted_at"!==Ie&&(0,J.jsxs)(i.A,{onClick:()=>{Ce(!0);const e="all"!==Ie?{status:Ie}:null;P.A.export(e).then((e=>{const l=T.bb+e.data.file_name;window.location.href=l})).finally((()=>Ce(!1)))},loading:we,style:{width:"100%"},children:[(0,J.jsx)(E.$tV,{className:"mr-2"}),ne("export")]}),(0,J.jsx)(i.A,{onClick:()=>{(0,y.vA)((()=>{Q((0,w.gw)()),Q((0,f.Ok)({activeMenu:ke,data:null})),Q((0,C.xj)({status:void 0,page:null===De||void 0===De?void 0:De.page,perPage:20}))})),Te(void 0)},style:{width:"100%"},icon:(0,J.jsx)(g.A,{}),children:ne("clear")})]})}),(0,J.jsxs)(c.A,{children:[(0,J.jsxs)(o.A,{className:"justify-content-between align-items-start w-100",children:[(0,J.jsx)(s.A,{onChange:e=>{var l;const t=null===(l=he.find((l=>l.id===e)))||void 0===l?void 0:l.name;Q((0,f.Ok)({activeMenu:ke,data:{role:t,page:1}})),Ne(t),te(`?status=${t}`)},type:"card",activeKey:Me,children:he.map((e=>(0,J.jsx)(be,{tab:ne(e.name)},e.id)))}),(0,J.jsxs)(o.A,{children:[null!==Ye&&0!==Ye.length&&(0,J.jsx)(u.A,{title:ne("delete.selected"),children:(0,J.jsx)(B.A,{type:"primary",onClick:()=>{null===Ye||0===Ye.length?Y.oR.warning(ne("select.the.product")):(ge(!0),$e(!1))},danger:!0})}),(0,J.jsx)(D.A,{setColumns:Ae,columns:pe,iconOnly:!0}),(0,J.jsx)(v.A,{overlay:Ze,children:(0,J.jsx)(i.A,{children:ne("options")})})]})]}),(0,J.jsx)(h.A,{scroll:{x:!0},rowSelection:Ue,columns:null===pe||void 0===pe?void 0:pe.filter((e=>e.is_show)),dataSource:Ve,loading:ze,pagination:{pageSize:Ee.perPage,page:(null===(Z=ke.data)||void 0===Z?void 0:Z.page)||1,total:Ge.total,defaultCurrent:null===(H=ke.data)||void 0===H?void 0:H.page,current:null===(W=ke.data)||void 0===W?void 0:W.page},rowKey:e=>e.id,onChange:function(e,l,t){const{pageSize:n,current:s}=e,{field:d,order:a}=t,i=(0,k.A)(a);Q((0,f.Ok)({activeMenu:ke,data:{...De,perPage:n,page:s,column:d,sort:i}}))}})]}),de&&(0,J.jsx)(ee,{orderDetails:de,handleCancel:Ke,status:le}),re&&(0,J.jsx)(fe,{orderDetails:re,handleCancel:Ke}),ie&&(0,J.jsx)(je,{id:ie,handleCancel:Ke}),!!ue&&(0,J.jsx)(ye,{id:ue,handleCancel:Ke}),(0,J.jsx)(O.A,{click:()=>{Fe(!0);const e={...Object.assign({},...Ye.map(((e,l)=>({[`ids[${l}]`]:e}))))};P.A.delete(e).then((()=>{Y.oR.success(ne("successfully.deleted")),ge(!1),Q((0,C.xj)(Le)),$e(null)})).finally((()=>{Be(null),Fe(!1)}))},text:ne(Pe?"delete":"all.delete"),loading:Oe,setText:Be}),me&&(0,J.jsx)(G.A,{open:me,handleCancel:()=>xe(null),click:me.restore?()=>{Fe(!0),P.A.restoreAll().then((()=>{Y.oR.success(ne("it.will.take.some.time.to.return.the.files")),Q((0,C.xj)(Le)),xe(null)})).finally((()=>Fe(!1)))}:()=>{Fe(!0),P.A.dropAll().then((()=>{Y.oR.success(ne("successfully.deleted")),Q((0,C.xj)(Le)),xe(null)})).finally((()=>Fe(!1)))},text:me.restore?ne("restore.modal.text"):ne("read.carefully"),subTitle:me.restore?"":ne("confirm.deletion"),loading:Oe,setText:Be})]})}},53774:(e,l,t)=>{"use strict";function n(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}t.d(l,{A:()=>n})},65820:(e,l,t)=>{"use strict";t.d(l,{s:()=>a});var n=t(28429),s=t(21215),d=t.n(s);const a=()=>{const e=(0,n.Zp)(),l=(0,n.zy)(),t=d().parse(l.search,{ignoreQueryPrefix:!0});return{values:t,set:(l,n)=>e({search:d().stringify({...t,[l]:n})}),reset:l=>{const n={...t};n[l]&&delete n[l],e({search:d().stringify({...n})})},clear:()=>e({search:d().stringify({})}),merge:l=>e({search:d().stringify({...t,...l})})}}},73631:(e,l,t)=>{"use strict";e.exports=t.p+"static/media/shop.46d7a94ca800c711764a.png"}}]);