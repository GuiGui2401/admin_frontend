"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[5351],{4587:(e,t,r)=>{r.d(t,{A:()=>h});var s=r(9950),i=r(20567),a=r(39452),l=r(94116),n=r(53439),o=r(44414);const d={position:"absolute",zIndex:"1"},c={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:r,width:u,height:h,xAxis:x,customOptions:p,card:v,type:m,extra:g,direction:f,bodyClass:y}=e,A=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return n.V3;case"bar":return n.ck;case"area":return n.cZ}})(m)));const j=window.innerWidth<768,_=(0,s.useRef)(null),b=(0,s.useRef)(),w=()=>{if(b.current){var e;const t=b.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight=`${j?0:null===(e=_.current)||void 0===e?void 0:e.offsetWidth}px`,"rtl"===f&&(t.style.right="auto",t.style.left="0"),j&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,s.useEffect)((()=>{w()}),[]),A.xaxis.categories=x,p&&(A={...A,...p});const k=()=>(0,o.jsx)(l.Ay,{onResize:void setTimeout((()=>{w()}),600),children:(0,o.jsx)("div",{style:"rtl"===f?{direction:"ltr"}:{},className:"chartRef",ref:b,children:(0,o.jsx)(a.A,{options:A,type:m,series:r,width:u,height:h})})});return(0,o.jsx)(o.Fragment,{children:v?(0,o.jsx)(i.A,{children:(0,o.jsxs)("div",{className:`position-relative ${y}`,children:[(0,o.jsx)("div",{style:j?{}:d,children:t})&&(0,o.jsx)("h4",{className:"font-weight-bold",style:j?{}:d,children:t}),g&&(0,o.jsx)("div",{ref:_,style:j?{}:c,children:g}),k()]})}):k()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},27109:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(89379),i=r(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};var l=r(25085),n=function(e,t){return i.createElement(l.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:a}))};const o=i.forwardRef(n)},28645:(e,t,r)=>{r.d(t,{A:()=>x});var s=r(9950),i=r(66362),a=r(69216),l=r(80737),n=r(25933),o=r(57811),d=r(72906),c=r(70030),u=r(44414);const{Text:h}=i.A,x=e=>{let{columns:t=[],setColumns:r}=e;const{t:i}=(0,c.B)(),[x,p]=(0,s.useState)(!1),v=(0,u.jsx)(a.A,{children:null===t||void 0===t?void 0:t.map(((e,s)=>(0,u.jsx)(a.A.Item,{children:(0,u.jsxs)(l.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(n.A,{defaultChecked:!0,onClick:()=>{!function(e){const s=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));r(s)}(e)}})]})},s)))});return(0,u.jsx)(o.A,{overlay:v,trigger:["click"],onVisibleChange:e=>{p(e)},visible:x,children:(0,u.jsx)(d.A,{style:{fontSize:"26px"}})})}},31397:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(66362),i=r(87094),a=r(41988),l=r(20567),n=r(80737),o=r(99674),d=r(40895),c=r(9950),u=r(27109),h=r(31598),x=r(4587),p=r(53439),v=r(70030),m=r(71795),g=r(44414);const{Title:f}=s.A,y=e=>{let{reportData:t={}}=e;const{by_time:r,options:s,handleByTime:y,chart_type:A,setChartType:j}=(0,c.useContext)(m.M),{t:_}=(0,v.B)(),b=(0,c.useMemo)((()=>{var e;return null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>e.time))}),[null===t||void 0===t?void 0:t.chart]),w=(0,c.useMemo)((()=>{var e;return Boolean(t.charts)?t.charts.map((e=>{var t;return{name:e.translation.title,data:null===(t=e.stocks)||void 0===t?void 0:t.map((e=>e.total_order_quantity||e.avg_quantity||e.quantity||e.count||e.price||e.order_details_sum_quantity||0))}})):[{name:_("orders"),data:null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>parseInt(e.count||e.total_price||e.quantity||e.price||e.products_count||e.order_details_avg_quantity||e.order_details_avg_total_price||e.order_details_sum_quantity||e.avg_price||e.avg_quantity||0,10)))}]}),[null===t||void 0===t?void 0:t.chart]);return(0,g.jsx)(i.A,{gutter:24,children:(0,g.jsx)(a.A,{span:24,children:(0,g.jsxs)(l.A,{children:[(0,g.jsx)(i.A,{gutter:24,className:"w-100",children:(0,g.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[(0,g.jsx)(n.A,{size:"large",className:"d-flex",children:(0,g.jsx)(f,{level:3,className:"mb-0",children:_("item.sold")})}),(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)(o.A,{style:{width:100},onChange:y,options:s,defaultValue:r}),(0,g.jsx)(d.A,{type:"vertical",style:{height:"100%"}}),(0,g.jsxs)(n.A,{children:[(0,g.jsx)(u.A,{style:{fontSize:"22px",cursor:"pointer",color:"area"===A?"green":""},onClick:()=>j("area")}),(0,g.jsx)(h.A,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===A?"green":""},onClick:()=>j("bar")})]})]})]})}),(0,g.jsx)(d.A,{}),(0,g.jsx)(x.A,{type:A,card:!1,series:w,xAxis:b,height:280,customOptions:{colors:[p.lm[1],p.lm[2],p.lm[3],p.lm[4],p.lm[5],p.lm[6],p.lm[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}}})]})})})}},35351:(e,t,r)=>{r.r(t),r.d(t,{default:()=>S});var s=r(66362),i=r(33022),a=r(12916),l=r(57811),n=r(69216),o=r(90650),d=r(87094),c=r(41988),u=r(80737),h=r(20567),x=r(73092),p=r(9950),v=r(74623),m=r(91854),g=r(31397),f=r(59051),y=r.n(f),A=r(71795),j=r(28645),_=r(28429),b=r(70030),w=r(68653),k=r(88986),N=r(53774),C=r(44414);const{Text:I,Title:z}=s.A,{RangePicker:q}=i.A,S=()=>{const e=(0,m.wA)(),t=(0,_.Zp)(),{t:r}=(0,b.B)(),{date_from:s,date_to:i,by_time:f,chart:S,handleChart:M,handleDateRange:O}=(0,p.useContext)(A.M),{activeMenu:R}=(0,m.d4)((e=>e.menu),m.bN),{loading:$,chartData:F,productList:B}=(0,m.d4)((e=>e.orderReport),m.bN),{defaultCurrency:T}=(0,m.d4)((e=>e.currency),m.bN),[D,L]=(0,p.useState)([{title:"Order #",dataIndex:"id",key:"id",is_show:!0,render:(e,t)=>(0,C.jsxs)("a",{onClick:()=>V(t),children:["#",t.id]})},{title:"Status",dataIndex:"items_sold",key:"items_sold",is_show:!0,render:(e,t)=>(0,C.jsx)(a.A,{children:t.status})},{title:"Customer",dataIndex:"user_firstname",key:"user_firstname",is_show:!0,render:(e,t)=>(0,C.jsx)(C.Fragment,{children:`${t.firstname} ${t.lastname}`})},{title:"Customer type",key:"user_active",dataIndex:"user_active",is_show:!0,render:(e,t)=>{const r=Boolean(t.active);return(0,C.jsx)(a.A,{color:r?"green":"red",children:r?"Active":"Inactive"},t.id)}},{title:"Product(s)",key:"category",dataIndex:"category",is_show:!0,render:(e,t)=>{var r,s,i,o,d;return(null===(r=t.products)||void 0===r?void 0:r.length)>1?(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("p",{children:null===(s=t.products[0])||void 0===s?void 0:s.title}),(0,C.jsx)(l.A,{overlay:(0,C.jsx)(n.A,{children:null===(i=t.products)||void 0===i?void 0:i.slice(1,t.products.length).map(((e,t)=>(0,C.jsx)(n.A.Item,{children:e.title},t)))}),children:(0,C.jsx)(a.A,{style:{cursor:"pointer"},children:`+ ${(null===(o=t.products)||void 0===o?void 0:o.length)-1} more`})})]}):(0,C.jsx)(C.Fragment,{children:null===(d=t.products[0])||void 0===d?void 0:d.title})}},{title:"Item sold",key:"item_sold",dataIndex:"item_sold",sorter:(e,t)=>Number(e.quantity)-Number(t.quantity),is_show:!0,render:(e,t)=>Number(t.quantity)},{title:"Net sales",key:"price",dataIndex:"price",is_show:!0,sorter:(e,t)=>e.price-t.price,render:(e,t)=>(0,C.jsx)(C.Fragment,{children:(0,N.A)(t.price,T.symbol)})},{title:"deleted_at",key:"deleted_at",dataIndex:"deleted_at",is_show:!0,render:(e,t)=>(0,C.jsx)(C.Fragment,{children:e?y()(e).format("YYYY-MM-DD"):"-"})}]),P=[{label:"Item sold",value:"quantity",price:!1,qty:"quantity"},{label:"Net sales",value:"price",price:!0,qty:"price"},{label:"Avg Order price",value:"avg_price",price:!0,qty:"avg_price"},{label:"Orders",value:"count",price:!1,qty:"count"}],V=s=>{e((0,v.X4)({url:`order/details/${s.id}`,id:"order_details",name:r("order.details")})),t(`/order/details/${s.id}`)},Y=()=>{if(P.find((e=>e.value===S))){const t={date_from:s,date_to:i,type:f,chart:S};e((0,w.g5)(t))}},E=(t,r)=>{e((0,w.Ah)({date_from:s,date_to:i,by_time:f,chart:S,page:t,perPage:r}))};(0,p.useEffect)((()=>{M(P[0].value)}),[]),(0,p.useEffect)((()=>{R.refetch&&(E(),Y(),e((0,v.km)(R)))}),[R.refetch]),(0,k.A)((()=>{E()}),[i,f,S,s]),(0,k.A)((()=>{Y()}),[i,f,S,s]);return(0,C.jsxs)(o.A,{size:"large",spinning:$,children:[(0,C.jsx)(d.A,{gutter:24,className:"mb-3",children:(0,C.jsx)(c.A,{span:12,children:(0,C.jsx)(u.A,{size:"large",children:(0,C.jsx)(q,{defaultValue:[y()(s),y()(i)],onChange:O})})})}),(0,C.jsx)(d.A,{gutter:24,className:"report-products",children:null===P||void 0===P?void 0:P.map(((e,t)=>(0,C.jsx)(c.A,{span:6,onClick:()=>M(e.value),children:(0,C.jsxs)(h.A,{className:S===e.value&&"active",children:[(0,C.jsx)(d.A,{className:"mb-5",children:(0,C.jsx)(c.A,{children:(0,C.jsx)(I,{children:e.label})})}),(0,C.jsx)(d.A,{gutter:24,children:(0,C.jsx)(c.A,{span:18,children:(0,C.jsx)(z,{level:2,style:{whiteSpace:"nowrap"},children:e.price?(0,N.A)(F[e.qty],T.symbol):F[e.qty]})})})]})},e.label)))}),(0,C.jsx)(g.A,{reportData:F,chart_data:"price_avg"}),(0,C.jsx)(d.A,{gutter:24,children:(0,C.jsx)(c.A,{span:24,children:(0,C.jsxs)(h.A,{children:[(0,C.jsxs)(u.A,{className:"d-flex justify-content-between",children:[(0,C.jsx)(I,{level:3,children:"Orders"}),(0,C.jsx)(u.A,{className:"d-flex justify-content-end",children:(0,C.jsx)(j.A,{columns:D,setColumns:L})})]}),(0,C.jsx)(x.A,{columns:null===D||void 0===D?void 0:D.filter((e=>e.is_show)),dataSource:null===B||void 0===B?void 0:B.data,rowKey:e=>e.id,loading:$,pagination:{pageSize:null===B||void 0===B?void 0:B.per_page,page:(null===B||void 0===B?void 0:B.current_page)||1,total:null===B||void 0===B?void 0:B.total,defaultCurrent:1},onChange:e=>{const{pageSize:t,current:r}=e;E(r,t)},scroll:{x:1200}})]})})})]})}},53439:(e,t,r)=>{r.d(t,{V3:()=>i,cZ:()=>a,ck:()=>l,lm:()=>s});const s=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],i={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...s],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},a={...i},l={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...s],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}}}},53774:(e,t,r)=>{function s(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}r.d(t,{A:()=>s})},72906:(e,t,r)=>{r.d(t,{A:()=>o});var s=r(89379),i=r(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var l=r(25085),n=function(e,t){return i.createElement(l.A,(0,s.A)((0,s.A)({},e),{},{ref:t,icon:a}))};const o=i.forwardRef(n)}}]);