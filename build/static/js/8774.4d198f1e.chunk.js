"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[8774],{4587:(e,t,a)=>{a.d(t,{A:()=>h});var r=a(9950),s=a(20567),l=a(39452),o=a(94116),n=a(53439),i=a(44414);const d={position:"absolute",zIndex:"1"},c={position:"absolute",zIndex:"1",right:"0",top:"-2px"},u=e=>{let{title:t,series:a,width:u,height:h,xAxis:p,customOptions:v,card:x,type:m,extra:g,direction:f,bodyClass:y}=e,A=JSON.parse(JSON.stringify((e=>{switch(e){case"line":default:return n.V3;case"bar":return n.ck;case"area":return n.cZ}})(m)));const j=window.innerWidth<768,_=(0,r.useRef)(null),b=(0,r.useRef)(),w=()=>{if(b.current){var e;const t=b.current.querySelectorAll("div.apexcharts-legend")[0];t.style.marginRight=`${j?0:null===(e=_.current)||void 0===e?void 0:e.offsetWidth}px`,"rtl"===f&&(t.style.right="auto",t.style.left="0"),j&&(t.style.position="relative",t.style.top=0,t.style.justifyContent="start",t.style.padding=0)}};(0,r.useEffect)((()=>{w()}),[]),A.xaxis.categories=p,v&&(A={...A,...v});const C=()=>(0,i.jsx)(o.Ay,{onResize:void setTimeout((()=>{w()}),600),children:(0,i.jsx)("div",{style:"rtl"===f?{direction:"ltr"}:{},className:"chartRef",ref:b,children:(0,i.jsx)(l.A,{options:A,type:m,series:a,width:u,height:h})})});return(0,i.jsx)(i.Fragment,{children:x?(0,i.jsx)(s.A,{children:(0,i.jsxs)("div",{className:`position-relative ${y}`,children:[(0,i.jsx)("div",{style:j?{}:d,children:t})&&(0,i.jsx)("h4",{className:"font-weight-bold",style:j?{}:d,children:t}),g&&(0,i.jsx)("div",{ref:_,style:j?{}:c,children:g}),C()]})}):C()})};u.defaultProps={series:[],height:300,width:"100%",card:!0,type:"line"};const h=u},8297:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(9950),s=a(93124),l=a(41397),o=a(52786),n=a(44414);function i(e){let{handleChange:t,defaultValue:a,resetSearch:i,...d}=e;const[c,u]=(0,r.useState)(a),h=(0,r.useMemo)((()=>(0,l.debounce)((e=>{t(e)}),800)),[]);return(0,r.useEffect)((()=>{u(a)}),[i]),(0,n.jsx)(s.A,{value:c,onChange:e=>{const{value:t}=e.target;u(t.replace(/\s/g,"")),h(t.replace(/\s/g,""))},prefix:(0,n.jsx)(o.A,{}),...d})}},27109:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(89379),s=a(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM305.8 637.7c3.1 3.1 8.1 3.1 11.3 0l138.3-137.6L583 628.5c3.1 3.1 8.2 3.1 11.3 0l275.4-275.3c3.1-3.1 3.1-8.2 0-11.3l-39.6-39.6a8.03 8.03 0 00-11.3 0l-230 229.9L461.4 404a8.03 8.03 0 00-11.3 0L266.3 586.7a8.03 8.03 0 000 11.3l39.5 39.7z"}}]},name:"line-chart",theme:"outlined"};var o=a(16233),n=function(e,t){return s.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:l}))};n.displayName="LineChartOutlined";const i=s.forwardRef(n)},28645:(e,t,a)=>{a.d(t,{A:()=>p});var r=a(9950),s=a(30377),l=a(69216),o=a(80737),n=a(25933),i=a(57811),d=a(72906),c=a(70030),u=a(44414);const{Text:h}=s.A,p=e=>{let{columns:t=[],setColumns:a}=e;const{t:s}=(0,c.B)(),[p,v]=(0,r.useState)(!1),x=(0,u.jsx)(l.A,{children:null===t||void 0===t?void 0:t.map(((e,r)=>(0,u.jsx)(l.A.Item,{children:(0,u.jsxs)(o.A,{className:"d-flex justify-content-between",children:[(0,u.jsx)(h,{children:e.title}),(0,u.jsx)(n.A,{defaultChecked:!0,onClick:()=>{!function(e){const r=null===t||void 0===t?void 0:t.map((t=>(t.dataIndex===e.dataIndex&&(t.is_show=!(null!==t&&void 0!==t&&t.is_show)),t)));a(r)}(e)}})]})},r)))});return(0,u.jsx)(i.A,{overlay:x,trigger:["click"],onVisibleChange:e=>{v(e)},visible:p,children:(0,u.jsx)(d.A,{style:{fontSize:"26px"}})})}},31397:(e,t,a)=>{a.d(t,{A:()=>y});var r=a(30377),s=a(87094),l=a(41988),o=a(20567),n=a(80737),i=a(99674),d=a(40895),c=a(9950),u=a(27109),h=a(31598),p=a(4587),v=a(53439),x=a(70030),m=a(71795),g=a(44414);const{Title:f}=r.A,y=e=>{let{reportData:t={}}=e;const{by_time:a,options:r,handleByTime:y,chart_type:A,setChartType:j}=(0,c.useContext)(m.M),{t:_}=(0,x.B)(),b=(0,c.useMemo)((()=>{var e;return null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>e.time))}),[null===t||void 0===t?void 0:t.chart]),w=(0,c.useMemo)((()=>{var e;return Boolean(t.charts)?t.charts.map((e=>{var t;return{name:e.translation.title,data:null===(t=e.stocks)||void 0===t?void 0:t.map((e=>e.total_order_quantity||e.avg_quantity||e.quantity||e.count||e.price||e.order_details_sum_quantity||0))}})):[{name:_("orders"),data:null===t||void 0===t||null===(e=t.chart)||void 0===e?void 0:e.map((e=>parseInt(e.count||e.total_price||e.quantity||e.price||e.products_count||e.order_details_avg_quantity||e.order_details_avg_total_price||e.order_details_sum_quantity||e.avg_price||e.avg_quantity||0,10)))}]}),[null===t||void 0===t?void 0:t.chart]);return(0,g.jsx)(s.A,{gutter:24,children:(0,g.jsx)(l.A,{span:24,children:(0,g.jsxs)(o.A,{children:[(0,g.jsx)(s.A,{gutter:24,className:"w-100",children:(0,g.jsxs)("div",{className:"d-flex justify-content-between w-100",children:[(0,g.jsx)(n.A,{size:"large",className:"d-flex",children:(0,g.jsx)(f,{level:3,className:"mb-0",children:_("item.sold")})}),(0,g.jsxs)("div",{className:"d-flex",children:[(0,g.jsx)(i.A,{style:{width:100},onChange:y,options:r,defaultValue:a}),(0,g.jsx)(d.A,{type:"vertical",style:{height:"100%"}}),(0,g.jsxs)(n.A,{children:[(0,g.jsx)(u.A,{style:{fontSize:"22px",cursor:"pointer",color:"area"===A?"green":""},onClick:()=>j("area")}),(0,g.jsx)(h.A,{style:{fontSize:"22px",cursor:"pointer",color:"bar"===A?"green":""},onClick:()=>j("bar")})]})]})]})}),(0,g.jsx)(d.A,{}),(0,g.jsx)(p.A,{type:A,card:!1,series:w,xAxis:b,height:280,customOptions:{colors:[v.lm[1],v.lm[2],v.lm[3],v.lm[4],v.lm[5],v.lm[6],v.lm[0]],legend:{show:!1},stroke:{width:2.5,curve:"smooth"}}})]})})})}},40841:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(89379),s=a(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M624 706.3h-74.1V464c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v242.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.7a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9z"}},{tag:"path",attrs:{d:"M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 01-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"}}]},name:"cloud-download",theme:"outlined"};var o=a(16233),n=function(e,t){return s.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:l}))};n.displayName="CloudDownloadOutlined";const i=s.forwardRef(n)},53439:(e,t,a)=>{a.d(t,{V3:()=>s,cZ:()=>l,ck:()=>o,lm:()=>r});const r=["#3e82f7","#04d182","#ff6b72","#ffc107","#a461d8","#fa8c16","#17bcff"],s={chart:{zoom:{enabled:!1},toolbar:{show:!1}},colors:[...r],dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth",lineCap:"round"},legend:{position:"top",horizontalAlign:"right",offsetY:-15,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!1}}}},l={...s},o={chart:{zoom:{enabled:!1},toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"25px",startingShapre:"rounded",endingShape:"rounded"}},colors:[...r],dataLabels:{enabled:!1},stroke:{show:!0,width:6,curve:"smooth",colors:["transparent"]},legend:{position:"top",horizontalAlign:"right",offsetY:-15,inverseOrder:!0,itemMargin:{vertical:20},tooltipHoverFormatter:function(e,t){return e+" - "+t.w.globals.series[t.seriesIndex][t.dataPointIndex]}},xaxis:{categories:[]},fill:{opacity:1},tooltip:{y:{formatter:e=>`${e}`}}}},53774:(e,t,a)=>{function r(e){if(!e)return"0";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"$")+" "+Number(e).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}a.d(t,{A:()=>r})},72906:(e,t,a)=>{a.d(t,{A:()=>i});var r=a(89379),s=a(9950);const l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var o=a(16233),n=function(e,t){return s.createElement(o.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:l}))};n.displayName="MoreOutlined";const i=s.forwardRef(n)},88774:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var r=a(30377),s=a(37437),l=a(90650),o=a(87094),n=a(41988),i=a(80737),d=a(20567),c=a(48538),u=a(3754),h=a(9950),p=a(8297),v=a(40841),x=a(19973),m=a(74623),g=a(91854),f=a(31397),y=a(59051),A=a.n(y),j=a(71795),_=a(28645),b=a(48341),w=a(88986),C=a(28429),k=a(42074),N=a(70030),q=a(53774),z=a(44414);const{Text:S,Title:I}=r.A,{RangePicker:M}=s.A,R=()=>{var e,t;const a=(0,g.wA)(),r=(0,C.Zp)(),{t:s}=(0,N.B)(),{date_from:y,date_to:R,by_time:O,chart:V,handleChart:B,handleDateRange:D}=(0,h.useContext)(j.M),{activeMenu:E}=(0,g.d4)((e=>e.menu),g.bN),{loading:L,chartData:T,productList:$}=(0,g.d4)((e=>e.categoryReport),g.bN),{defaultCurrency:H}=(0,g.d4)((e=>e.currency),g.bN),[Y,F]=(0,h.useState)([]),[P,W]=(0,h.useState)(),[Z,J]=(0,h.useState)(!1),[K,X]=(0,h.useState)([{title:s("category"),key:"category",dataIndex:"category",render:(e,t)=>{var a;const r=null===(a=t.title)||void 0===a?void 0:a.split("-");return null===r||void 0===r?void 0:r.map(((e,a)=>a===r.length-1?(0,z.jsx)(k.N_,{to:`/report/products?category_id=${t.id}`,children:e}):e))},sorter:(e,t)=>e.title.localeCompare(t.title),is_show:!0},{title:s("item.sold"),dataIndex:"quantity",key:"quantity",is_show:!0,sorter:(e,t)=>e.quantity-t.quantity},{title:s("price"),dataIndex:"price",key:"price",is_show:!0,sorter:(e,t)=>e.price-t.price,render:(e,t)=>(0,q.A)(t.price,H.symbol)},{title:s("products"),key:"products_count",dataIndex:"products_count",sorter:(e,t)=>e.products_count-t.products_count,render:(e,t)=>(0,z.jsx)("a",{onClick:()=>{return e=t,a((0,m.X4)({url:"report/products",id:"report.products",name:s("report.products")})),void r(`/report/products?category_id=${e.id}`);var e},children:t.products_count}),is_show:!0},{title:s("orders"),key:"count",dataIndex:"count",is_show:!0,sorter:(e,t)=>e.count-t.count},{title:"deleted_at",key:"deleted_at",dataIndex:"deleted_at",is_show:!0,render:(e,t)=>(0,z.jsx)(z.Fragment,{children:e?A()(e).format("YYYY-MM-DD"):"-"})}]),G=(0,h.useMemo)((()=>[{value:"quantity",label:"Item sold",qty:"total_quantity"},{value:"price",label:"Net Sales",qty:"total_price"},{value:"count",label:"Orders",qty:"total_count"},{value:"total_products_count",label:"Order products",qty:"total_products_count"}]),[]),Q=()=>{G.find((e=>e.value===V))&&a((0,b.gf)({date_from:y,date_to:R,type:O,chart:V,search:P}))};(0,h.useEffect)((()=>{G.every((e=>e.value!==V))&&B(G[0].value)}),[]),(0,h.useEffect)((()=>{E.refetch&&(Q(),a((0,m.km)(E)))}),[E.refetch]),(0,w.A)((()=>{Q()}),[R,O,V,P,y]);const U={selectedRowKeys:Y,onChange:e=>{F(e)}},ee=null===K||void 0===K?void 0:K.filter((e=>e.is_show));return(0,z.jsxs)(l.A,{size:"large",spinning:L,children:[(0,z.jsx)(o.A,{gutter:24,className:"mb-3",children:(0,z.jsx)(n.A,{span:12,children:(0,z.jsx)(i.A,{size:"large",children:(0,z.jsx)(M,{defaultValue:[A()(y),A()(R)],onChange:D})})})}),(0,z.jsx)(o.A,{gutter:24,className:"report-products",children:null===G||void 0===G?void 0:G.map((e=>(0,z.jsx)(n.A,{span:6,onClick:()=>B(e.value),children:(0,z.jsxs)(d.A,{className:V===e.value&&"active",children:[(0,z.jsx)(o.A,{className:"mb-5",children:(0,z.jsx)(n.A,{children:(0,z.jsx)(S,{children:e.label})})}),(0,z.jsx)(o.A,{gutter:24,children:(0,z.jsx)(n.A,{span:12,children:(0,z.jsx)(I,{level:2,style:{whiteSpace:"nowrap"},children:"total_price"===e.qty?(0,q.A)(T[e.qty]):T[e.qty]})})})]})},e.label)))}),(0,z.jsx)(f.A,{reportData:T,chart_data:"quantities_sum"}),(0,z.jsxs)(d.A,{children:[(0,z.jsxs)(i.A,{className:"align-items-center justify-content-between mb-4 w-100",children:[(0,z.jsx)(I,{level:2,className:"mb-0",children:s("categories")}),(0,z.jsxs)(i.A,{children:[(0,z.jsx)(p.A,{style:{width:"100%"},handleChange:e=>W(e),defaultValue:null===(e=E.data)||void 0===e?void 0:e.search}),(0,z.jsx)(c.A,{icon:(0,z.jsx)(v.A,{}),loading:Z,disabled:0===(null===$||void 0===$||null===(t=$.data)||void 0===t?void 0:t.length),onClick:()=>{J(!0),x.A.getCategoriesChart({date_from:y,date_to:R,type:O,export:"excel"}).then((e=>{const t=e.data.link;t&&(window.location.href=t)})).finally((()=>J(!1)))},children:s("download")}),(0,z.jsx)(_.A,{columns:K,setColumns:X})]})]}),(0,z.jsx)(u.A,{scroll:{x:1024},rowSelection:null!==ee&&void 0!==ee&&ee.length?U:null,columns:ee,dataSource:T.paginate||[],rowKey:e=>e.id,loading:L,pagination:{pageSize:null===$||void 0===$?void 0:$.per_page,page:(null===$||void 0===$?void 0:$.current_page)||1,total:null===$||void 0===$?void 0:$.total,defaultCurrent:1}})]})]})}}}]);