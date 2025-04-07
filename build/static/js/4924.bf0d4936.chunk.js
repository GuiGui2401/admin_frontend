"use strict";(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[4924],{27276:(e,t,s)=>{s.d(t,{v:()=>r});var l=s(9950),i=s(90777),n=s(90650),a=s(44414);const r=e=>{let{fetchOptions:t,refetch:s=!1,...r}=e;const[d,c]=(0,l.useState)(!1),[o,u]=(0,l.useState)([]);return(0,a.jsx)(i.A,{treeData:d?[]:o,treeLine:!0,treeDefaultExpandAll:!0,labelInValue:!0,onFocus:()=>{o.length&&!s||(c(!0),t().then((e=>{u(e),c(!1)})))},notFoundContent:d?(0,a.jsx)(n.A,{size:"small"}):"no results",...r})}},31281:(e,t,s)=>{function l(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"title";const l=e.filter((e=>t[`${s}[${e.locale}]`])).map((e=>({[e.locale]:t[`${s}[${e.locale}]`]})));return Object.assign({},...l)}s.d(t,{A:()=>l})},44924:(e,t,s)=>{s.r(t),s.d(t,{default:()=>$});var l=s(9950),i=s(28429),n=s(49348),a=s(87827),r=s(20567),d=s(87094),c=s(41988),o=s(55902),u=s(56952),m=s(48538),h=s(80737),p=s(90650),x=s(91854),j=s(74623),A=s(88210),g=s(67231),v=s(47992),y=s(18296),f=s(63620),b=s(70030),q=s(71999),N=s(31281),k=s(27276),w=s(54218),I=s(44070),_=s(8750),C=s(44414);function $(){var e;const{t:t}=(0,b.B)(),{activeMenu:s}=(0,x.d4)((e=>e.menu),x.bN),{defaultLang:$,languages:S}=(0,x.d4)((e=>e.formLang),x.bN),F=(0,x.wA)(),[O]=a.A.useForm(),L=(0,i.Zp)(),{id:E}=(0,i.g)(),[P,V]=(0,l.useState)((null===(e=s.data)||void 0===e?void 0:e.image)||null),[T,z]=(0,l.useState)(!1),[B,G]=(0,l.useState)(!1);(0,l.useEffect)((()=>()=>{const e=O.getFieldsValue(!0);F((0,j.Ok)({activeMenu:s,data:e}))}),[]);const H=e=>e?{uid:e,name:e,url:f.sE+e,className:""}:null;function M(e){if(null===e||void 0===e||!e.translations)return{};const{translations:t}=e,s=S.map((e=>{var s;return{[`title[${e.locale}]`]:null===(s=t.find((t=>t.locale===e.locale)))||void 0===s?void 0:s.title}}));return Object.assign({},...s)}async function D(e){const t={search:e,perPage:10};return g.A.selectProduct(t).then((e=>e.data.map((e=>{var t;return{label:null===(t=e.product.translation)||void 0===t?void 0:t.title,value:e.id}}))))}function K(e){return e.map((e=>{var t,s;return{label:null===(t=e.translation)||void 0===t?void 0:t.title,value:e.id,children:null!==(s=e.child)&&void 0!==s&&s.length?K(e.child):[],disabled:!e.parent_id}}))}return(0,l.useEffect)((()=>{var e;s.refetch&&(e=E,G(!0),y.A.getById(e).then((e=>{var t,s,l;let i=e.data;console.log("recipe",i),O.setFieldsValue({...i,...M(i),image:H(i.image),recipe_category:{label:null===(t=i.category.translation)||void 0===t?void 0:t.title,value:null===(s=i.category)||void 0===s?void 0:s.id},nutrition:i.nutritions.map((e=>({...e,...M(e)}))),instruction:i.instructions.map((e=>({...M(e)}))),products:null===(l=i.products)||void 0===l?void 0:l.map(((e,t)=>{var s;return{product:{label:null===(s=e.shopProduct.product.translation)||void 0===s?void 0:s.title,value:e.shopProduct.product.id},measurement:e.measurement}}))}),V(H(i.image))})).finally((()=>F(G(!1)))))}),[s.refetch]),(0,C.jsx)(r.A,{title:t("edit.recipe"),className:"h-100",extra:(0,C.jsx)(q.A,{}),children:B?(0,C.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,C.jsx)(p.A,{size:"large",className:"py-5"})}):(0,C.jsxs)(a.A,{name:"recipe-edit",layout:"vertical",onFinish:e=>{const l={recipe_category_id:e.recipe_category.value,active_time:e.active_time,total_time:e.total_time,calories:e.calories,image:null===P||void 0===P?void 0:P.name,title:(0,N.A)(S,e),nutrition:e.nutrition.map((e=>({weight:e.weight,percentage:e.percentage,title:(0,N.A)(S,e)}))),instruction:e.instruction.map((e=>({title:(0,N.A)(S,e)}))),products:e.products.map((e=>({measurement:e.measurement,product_id:e.product.value})))};z(!0);const i="seller/recipes";y.A.update(E,l).then((()=>{n.oR.success(t("successfully.updated")),F((0,j.EK)({...s,nextUrl:i})),L(`/${i}`),F((0,A.O)())})).finally((()=>z(!1)))},form:O,initialValues:s.data,children:[(0,C.jsxs)(d.A,{gutter:12,children:[(0,C.jsx)(c.A,{span:12,children:S.map((e=>(0,C.jsx)(a.A.Item,{label:t("title"),name:`title[${e.locale}]`,rules:[{required:e.locale===$,message:t("required")}],hidden:e.locale!==$,children:(0,C.jsx)(o.A,{})},"title"+e.id)))}),(0,C.jsx)(c.A,{span:12,children:(0,C.jsx)(a.A.Item,{label:t("recipe.category"),name:"recipe_category",rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(k.v,{fetchOptions:async function(){return y.A.getAllCategories({perPage:1e3}).then((e=>K(e.data)))},debounceTimeout:200})})}),(0,C.jsx)(c.A,{span:12,children:(0,C.jsx)(a.A.Item,{label:`${t("active.time")} (${t("minutes")})`,name:"active_time",rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(u.A,{min:0,className:"w-100"})})}),(0,C.jsx)(c.A,{span:12,children:(0,C.jsx)(a.A.Item,{label:`${t("total.time")} (${t("minutes")})`,name:"total_time",rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(u.A,{min:0,className:"w-100"})})}),(0,C.jsx)(c.A,{span:12,children:(0,C.jsx)(a.A.Item,{label:t("calories"),name:"calories",rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(u.A,{min:0,className:"w-100"})})}),(0,C.jsx)(c.A,{span:12,children:(0,C.jsx)(a.A.Item,{label:t("image"),name:"image",children:(0,C.jsx)(w.A,{type:"products",image:P,setImage:V,form:O})})}),(0,C.jsxs)(c.A,{span:24,children:[(0,C.jsx)("h4",{children:t("nutritions")}),(0,C.jsx)(a.A.List,{name:"nutrition",children:(e,s)=>{let{add:l,remove:i}=s;return(0,C.jsxs)("div",{className:"mb-5",children:[e.map(((e,s)=>(0,C.jsxs)(d.A,{gutter:12,children:[(0,C.jsx)(c.A,{children:(0,C.jsx)("h5",{className:"d-flex align-items-end mb-4",style:{lineHeight:"40px"},children:(0,C.jsxs)("span",{children:[s+1,"."]})})}),(0,C.jsx)(c.A,{span:10,children:S.map((e=>(0,C.jsx)(a.A.Item,{name:[s,`title[${e.locale}]`],rules:[{required:e.locale===$,message:t("required")}],hidden:e.locale!==$,children:(0,C.jsx)(o.A,{placeholder:t("title")})},"title"+e.id+s)))}),(0,C.jsx)(c.A,{span:6,children:(0,C.jsx)(a.A.Item,{name:[s,"weight"],rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(o.A,{placeholder:t("weight")})})}),(0,C.jsx)(c.A,{span:6,children:(0,C.jsx)(a.A.Item,{name:[s,"percentage"],rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(o.A,{placeholder:t("percentage")})})}),(0,C.jsx)(c.A,{children:e.key?(0,C.jsx)(m.A,{type:"primary",danger:!0,icon:(0,C.jsx)(I.A,{}),onClick:()=>i(e.name)}):""})]},e.key))),(0,C.jsx)(m.A,{type:"dashed",style:{width:"100%"},onClick:()=>l(),children:(0,C.jsxs)(h.A,{children:[(0,C.jsx)(_.A,{}),t("add.nutrition")]})})]})}})]}),(0,C.jsxs)(c.A,{span:24,children:[(0,C.jsx)("h4",{children:t("instructions")}),(0,C.jsx)(a.A.List,{name:"instruction",children:(e,s)=>{let{add:l,remove:i}=s;return(0,C.jsxs)("div",{className:"mb-5",children:[e.map(((e,s)=>(0,C.jsxs)(d.A,{gutter:12,children:[(0,C.jsx)(c.A,{children:(0,C.jsx)("h5",{className:"d-flex align-items-end mb-4",style:{lineHeight:"40px"},children:(0,C.jsxs)("span",{children:[s+1,"."]})})}),(0,C.jsx)(c.A,{span:22,children:S.map((e=>(0,C.jsx)(a.A.Item,{name:[s,`title[${e.locale}]`],rules:[{required:e.locale===$,message:t("required")}],hidden:e.locale!==$,children:(0,C.jsx)(o.A,{placeholder:t("title")})},"title"+e.id+s)))}),(0,C.jsx)(c.A,{children:e.key?(0,C.jsx)(m.A,{type:"primary",danger:!0,icon:(0,C.jsx)(I.A,{}),onClick:()=>i(e.name)}):""})]},e.key))),(0,C.jsx)(m.A,{type:"dashed",style:{width:"100%"},onClick:()=>l(),children:(0,C.jsxs)(h.A,{children:[(0,C.jsx)(_.A,{}),t("add.instruction")]})})]})}})]}),(0,C.jsxs)(c.A,{span:24,children:[(0,C.jsx)("h4",{children:t("products")}),(0,C.jsx)(a.A.List,{name:"products",children:(e,s)=>{let{add:l,remove:i}=s;return(0,C.jsxs)("div",{className:"mb-5",children:[e.map(((e,s)=>(0,C.jsxs)(d.A,{gutter:12,children:[(0,C.jsx)(c.A,{children:(0,C.jsx)("h5",{className:"d-flex align-items-end mb-4",style:{lineHeight:"40px"},children:(0,C.jsxs)("span",{children:[s+1,"."]})})}),(0,C.jsx)(c.A,{span:16,children:(0,C.jsx)(a.A.Item,{name:[s,"product"],rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(v.G,{placeholder:t("product"),fetchOptions:D,debounceTimeout:200})})}),(0,C.jsx)(c.A,{span:6,children:(0,C.jsx)(a.A.Item,{name:[s,"measurement"],rules:[{required:!0,message:t("required")}],children:(0,C.jsx)(u.A,{placeholder:t("measurement"),style:{width:"100%"},min:0})})}),(0,C.jsx)(c.A,{children:e.key?(0,C.jsx)(m.A,{type:"primary",danger:!0,icon:(0,C.jsx)(I.A,{}),onClick:()=>i(e.name)}):""})]},e.key))),(0,C.jsx)(m.A,{type:"dashed",style:{width:"100%"},onClick:()=>l(),children:(0,C.jsxs)(h.A,{children:[(0,C.jsx)(_.A,{}),t("add.product")]})})]})}})]})]}),(0,C.jsx)(m.A,{type:"primary",htmlType:"submit",loading:T,children:t("submit")})]})})}},47992:(e,t,s)=>{s.d(t,{G:()=>c});var l=s(9950),i=s(95491),n=s.n(i),a=s(99674),r=s(90650),d=s(44414);const c=e=>{let{fetchOptions:t,debounceTimeout:s=400,...i}=e;const[c,o]=(0,l.useState)(!1),[u,m]=(0,l.useState)([]),h=(0,l.useMemo)((()=>n()((e=>{m([]),o(!0),t(e).then((e=>{m(e),o(!1)}))}),s)),[t,s]);return(0,d.jsx)(a.A,{showSearch:!0,allowClear:!0,labelInValue:!0,filterOption:!1,onSearch:h,notFoundContent:c?(0,d.jsx)(r.A,{size:"small"}):"no results",...i,options:u,onFocus:()=>{u.length||h("")}})}},71999:(e,t,s)=>{s.d(t,{A:()=>c});var l=s(9950),i=s(17811),n=s(12437),a=s(91854),r=s(82406),d=s(44414);const c=()=>{const e=(0,a.wA)(),{languages:t,defaultLang:s}=(0,a.d4)((e=>e.formLang),a.bN);(0,l.useEffect)((()=>{t.length||n.A.getAllActive().then((t=>{let{data:s}=t;e((0,r.Nn)(s))}))}),[]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(i.Ay.Group,{value:s,onChange:t=>{let{target:{value:s}}=t;e((0,r.Qq)(s))},className:"float-right",buttonStyle:"solid",children:t.map((e=>(0,d.jsx)(i.Ay.Button,{value:e.locale,children:e.title},e.id)))})})}}}]);