"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7791],{9494:(e,t,a)=>{a.d(t,{A:()=>d});var l=a(89379),o=a(9950),s=a(68681),n=a(16233),i=function(e,t){return o.createElement(n.A,(0,l.A)((0,l.A)({},e),{},{ref:t,icon:s.A}))};i.displayName="InfoCircleOutlined";const d=o.forwardRef(i)},67791:(e,t,a)=>{a.r(t),a.d(t,{default:()=>x});a(9950);var l=a(20567),o=a(48538),s=a(91854),n=a(70030),i=a(72540),d=a(9494),r=a(88349),c=a(49348),u=a(67231),p=a(74623),h=a(32801),m=a(63620),f=a(44414);function x(){const{t:e}=(0,n.B)(),t=(0,s.wA)(),{activeMenu:a}=(0,s.d4)((e=>e.menu),s.bN),x=e=>({uid:e.name,name:e.name,status:"done",url:e.name,created:!0});return(0,f.jsxs)(l.A,{title:e("import"),children:[(0,f.jsxs)("div",{className:"alert",role:"alert",children:[(0,f.jsxs)("div",{className:"alert-header",children:[(0,f.jsx)(d.A,{className:"alert-icon"}),(0,f.jsx)("p",{children:"Info"})]}),"1. Download the skeleton file and fill it with proper data.",(0,f.jsx)("br",{}),"2. You can download the example file to understand how the data must be filled.",(0,f.jsx)("br",{}),"3. Once you have downloaded and filled the skeleton file, upload it in the form below and submit.",(0,f.jsx)("br",{}),"4. After uploading products you need to edit them and set product's images and choices.",(0,f.jsx)("br",{})]}),(0,f.jsx)(o.A,{type:"primary",className:"mb-4",onClick:()=>{const e=m.bb+"import-example/shop_product_import.xlsx";window.location.href=e},children:e("download.csv")}),(0,f.jsxs)(i.A,{name:"file",multiple:!1,maxCount:1,customRequest:l=>{let{file:o,onSuccess:s}=l;const n=new FormData;n.append("file",o),u.A.import(n).then((()=>{c.oR.success(e("successfully.import")),t((0,p.Ok)({activeMenu:a,data:x(o)})),s("ok"),t((0,h.EN)())}))},defaultFileList:null!==a&&void 0!==a&&a.data?[null===a||void 0===a?void 0:a.data]:null,beforeUpload:e=>{if("xlsx"===e.type)return c.oR.error(`${e.name} is not valid file`),!1},children:[(0,f.jsx)("p",{className:"ant-upload-drag-icon",children:(0,f.jsx)(r.A,{})}),(0,f.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),(0,f.jsx)("p",{className:"ant-upload-hint",children:"Using this file, it is possible to create a database of new products. You need to click the button above to update"})]})]})}}}]);