"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[3313],{27276:(e,t,s)=>{s.d(t,{v:()=>a});var l=s(9950),n=s(90777),i=s(90650),r=s(44414);const a=e=>{let{fetchOptions:t,refetch:s=!1,...a}=e;const[d,c]=(0,l.useState)(!1),[u,o]=(0,l.useState)([]);return(0,r.jsx)(n.A,{treeData:d?[]:u,treeLine:!0,treeDefaultExpandAll:!0,labelInValue:!0,onFocus:()=>{u.length&&!s||(c(!0),t().then((e=>{o(e),c(!1)})))},notFoundContent:d?(0,r.jsx)(i.A,{size:"small"}):"no results",...a})}},31281:(e,t,s)=>{function l(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const l=e.filter((e=>t[`${s}[${e.locale}]`])).map((e=>({[e.locale]:t[`${s}[${e.locale}]`]})));return Object.assign({},...l)}s.d(t,{A:()=>l})},47992:(e,t,s)=>{s.d(t,{G:()=>c});var l=s(9950),n=s(95491),i=s.n(n),r=s(99674),a=s(90650),d=s(44414);const c=e=>{let{fetchOptions:t,debounceTimeout:s=400,...n}=e;const[c,u]=(0,l.useState)(!1),[o,h]=(0,l.useState)([]),m=(0,l.useMemo)((()=>i()((e=>{h([]),u(!0),t(e).then((e=>{h(e),u(!1)}))}),s)),[t,s]);return(0,d.jsx)(r.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:m,notFoundContent:c?(0,d.jsx)(a.A,{size:"small"}):"no results",...n,options:o,onFocus:()=>{o.length||m("")}})}},63313:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var l=s(9950),n=s(28429),i=s(49348),r=s(87827),a=s(20567),d=s(87094),c=s(41988),u=s(55902),o=s(56952),h=s(48538),m=s(80737),x=s(91854),j=s(70030),p=s(74623),A=s(88210),g=s(67231),v=s(47992),y=s(18296),b=s(71999),f=s(31281),q=s(54218),k=s(44070),w=s(8750),I=s(27276),N=s(44414);function _(){var e;const{t:t}=(0,j.B)(),{activeMenu:s}=(0,x.d4)((e=>e.menu),x.bN),{defaultLang:_,languages:C}=(0,x.d4)((e=>e.formLang),x.bN),$=(0,x.wA)(),[S]=r.A.useForm(),F=(0,n.Zp)(),[L,O]=(0,l.useState)((null===(e=s.data)||void 0===e?void 0:e.image)||null),[E,T]=(0,l.useState)(!1);(0,l.useEffect)((()=>()=>{const e=S.getFieldsValue(!0);$((0,p.Ok)({activeMenu:s,data:e}))}),[]);async function V(e){const t={search:e,perPage:10};return g.A.selectProduct(t).then((e=>e.data.map((e=>{var t;return{label:null===(t=e.product.translation)||void 0===t?void 0:t.title,value:e.id}}))))}function G(e){return e.map((e=>{var t,s;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,children:null!==(s=e.child)&&void 0!==s&&s.length?G(e.child):[],disabled:!e.parent_id}}))}return(0,N.jsx)(a.A,{title:t("add.recipe"),extra:(0,N.jsx)(b.A,{}),children:(0,N.jsxs)(r.A,{name:"recipe-add",layout:"vertical",onFinish:e=>{const l={recipe_category_id:e.recipe_category.value,active_time:e.active_time,total_time:e.total_time,calories:e.calories,image:null===L||void 0===L?void 0:L.name,title:(0,f.A)(C,e),nutrition:e.nutrition.map((e=>({weight:e.weight,percentage:e.percentage,title:(0,f.A)(C,e)}))),instruction:e.instruction.map((e=>({title:(0,f.A)(C,e)}))),products:e.products.map((e=>({measurement:e.measurement,product_id:e.product.value})))};console.log("body => ",l),T(!0);const n="seller/recipes";y.A.create(l).then((()=>{i.oR.success(t("successfully.created")),$((0,p.EK)({...s,nextUrl:n})),F(`/${n}`),$((0,A.O)())})).finally((()=>T(!1)))},form:S,initialValues:{nutrition:[""],instruction:[""],products:[""],...s.data},children:[(0,N.jsxs)(d.A,{gutter:12,children:[(0,N.jsx)(c.A,{span:12,children:C.map((e=>(0,N.jsx)(r.A.Item,{label:t("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===_,message:t("required")}],hidden:e.locale!==_,children:(0,N.jsx)(u.A,{})},"title"+e.id)))}),(0,N.jsx)(c.A,{span:12,children:(0,N.jsx)(r.A.Item,{label:t("recipe.category"),name:"recipe_category",rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(I.v,{fetchOptions:async function(){return y.A.getAllCategories({perPage:1e3}).then((e=>G(e.data)))},debounceTimeout:200})})}),(0,N.jsx)(c.A,{span:12,children:(0,N.jsx)(r.A.Item,{label:`${t("active.time")} (${t("minutes")})`,name:"active_time",rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(o.A,{min:0,className:"w-100"})})}),(0,N.jsx)(c.A,{span:12,children:(0,N.jsx)(r.A.Item,{label:`${t("total.time")} (${t("minutes")})`,name:"total_time",rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(o.A,{min:0,className:"w-100"})})}),(0,N.jsx)(c.A,{span:12,children:(0,N.jsx)(r.A.Item,{label:t("calories"),name:"calories",rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(o.A,{min:0,className:"w-100"})})}),(0,N.jsx)(c.A,{span:12,children:(0,N.jsx)(r.A.Item,{label:t("image"),name:"image",children:(0,N.jsx)(q.A,{type:"products",image:L,setImage:O,form:S})})}),(0,N.jsxs)(c.A,{span:24,children:[(0,N.jsx)("h4",{children:t("nutritions")}),(0,N.jsx)(r.A.List,{name:"nutrition",children:(e,s)=>{let{add:l,remove:n}=s;return(0,N.jsxs)("div",{className:"mb-5",children:[e.map(((e,s)=>(0,N.jsxs)(d.A,{gutter:12,children:[(0,N.jsx)(c.A,{children:(0,N.jsx)("h5",{className:"d-flex align-items-end mb-4",style:{lineHeight:"40px"},children:(0,N.jsxs)("span",{children:[s+1,"."]})})}),(0,N.jsx)(c.A,{span:10,children:C.map((e=>(0,N.jsx)(r.A.Item,{name:[s,`title[${e.locale}]`],rules:[{required:e.locale===_,message:t("required")}],hidden:e.locale!==_,children:(0,N.jsx)(u.A,{placeholder:t("title")})},"title"+e.id+s)))}),(0,N.jsx)(c.A,{span:6,children:(0,N.jsx)(r.A.Item,{name:[s,"weight"],rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(u.A,{placeholder:t("weight")})})}),(0,N.jsx)(c.A,{span:6,children:(0,N.jsx)(r.A.Item,{name:[s,"percentage"],rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(u.A,{placeholder:t("percentage")})})}),(0,N.jsx)(c.A,{children:e.key?(0,N.jsx)(h.A,{type:"primary",danger:!0,icon:(0,N.jsx)(k.A,{}),onClick:()=>n(e.name)}):""})]},e.key))),(0,N.jsx)(h.A,{type:"dashed",style:{width:"100%"},onClick:()=>l(),children:(0,N.jsxs)(m.A,{children:[(0,N.jsx)(w.A,{}),t("add.nutrition")]})})]})}})]}),(0,N.jsxs)(c.A,{span:24,children:[(0,N.jsx)("h4",{children:t("instructions")}),(0,N.jsx)(r.A.List,{name:"instruction",children:(e,s)=>{let{add:l,remove:n}=s;return(0,N.jsxs)("div",{className:"mb-5",children:[e.map(((e,s)=>(0,N.jsxs)(d.A,{gutter:12,children:[(0,N.jsx)(c.A,{children:(0,N.jsx)("h5",{className:"d-flex align-items-end mb-4",style:{lineHeight:"40px"},children:(0,N.jsxs)("span",{children:[s+1,"."]})})}),(0,N.jsx)(c.A,{span:22,children:C.map((e=>(0,N.jsx)(r.A.Item,{name:[s,`title[${e.locale}]`],rules:[{required:e.locale===_,message:t("required")}],hidden:e.locale!==_,children:(0,N.jsx)(u.A,{placeholder:t("title")})},"title"+e.id+s)))}),(0,N.jsx)(c.A,{children:e.key?(0,N.jsx)(h.A,{type:"primary",danger:!0,icon:(0,N.jsx)(k.A,{}),onClick:()=>n(e.name)}):""})]},e.key))),(0,N.jsx)(h.A,{type:"dashed",style:{width:"100%"},onClick:()=>l(),children:(0,N.jsxs)(m.A,{children:[(0,N.jsx)(w.A,{}),t("add.instruction")]})})]})}})]}),(0,N.jsxs)(c.A,{span:24,children:[(0,N.jsx)("h4",{children:t("products")}),(0,N.jsx)(r.A.List,{name:"products",children:(e,s)=>{let{add:l,remove:n}=s;return(0,N.jsxs)("div",{className:"mb-5",children:[e.map(((e,s)=>(0,N.jsxs)(d.A,{gutter:12,children:[(0,N.jsx)(c.A,{children:(0,N.jsx)("h5",{className:"d-flex align-items-end mb-4",style:{lineHeight:"40px"},children:(0,N.jsxs)("span",{children:[s+1,"."]})})}),(0,N.jsx)(c.A,{span:16,children:(0,N.jsx)(r.A.Item,{name:[s,"product"],rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(v.G,{placeholder:t("product"),fetchOptions:V,debounceTimeout:200})})}),(0,N.jsx)(c.A,{span:6,children:(0,N.jsx)(r.A.Item,{name:[s,"measurement"],rules:[{required:!0,message:t("required")}],children:(0,N.jsx)(o.A,{placeholder:t("measurement"),style:{width:"100%"},min:0})})}),(0,N.jsx)(c.A,{children:e.key?(0,N.jsx)(h.A,{type:"primary",danger:!0,icon:(0,N.jsx)(k.A,{}),onClick:()=>n(e.name)}):""})]},e.key))),(0,N.jsx)(h.A,{type:"dashed",style:{width:"100%"},onClick:()=>l(),children:(0,N.jsxs)(m.A,{children:[(0,N.jsx)(w.A,{}),t("add.product")]})})]})}})]})]}),(0,N.jsx)(h.A,{type:"primary",htmlType:"submit",loading:E,children:t("submit")})]})})}},71999:(e,t,s)=>{s.d(t,{A:()=>c});var l=s(9950),n=s(17811),i=s(12437),r=s(91854),a=s(82406),d=s(44414);const c=()=>{const e=(0,r.wA)(),{languages:t,defaultLang:s}=(0,r.d4)((e=>e.formLang),r.bN);(0,l.useEffect)((()=>{t.length||i.A.getAllActive().then((t=>{let{data:s}=t;e((0,a.Nn)(s))}))}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(n.Ay.Group,{value:s,onChange:t=>{let{target:{value:s}}=t;e((0,a.Qq)(s))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,d.jsx)(n.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}}}]);