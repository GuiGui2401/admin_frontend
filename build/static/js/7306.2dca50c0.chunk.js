/*! For license information please see 7306.2dca50c0.chunk.js.LICENSE.txt */
(self.webpackChunkgithubit_dashboard=self.webpackChunkgithubit_dashboard||[]).push([[7306],{44269:(e,t,n)=>{"use strict";n.d(t,{c:()=>l});var r="https://js.stripe.com/v3",o=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,a="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",c=null,i=function(e){return null!==c||(c=new Promise((function(t,n){if("undefined"!==typeof window&&"undefined"!==typeof document)if(window.Stripe&&e&&console.warn(a),window.Stripe)t(window.Stripe);else try{var c=function(){for(var e=document.querySelectorAll('script[src^="'.concat(r,'"]')),t=0;t<e.length;t++){var n=e[t];if(o.test(n.src))return n}return null}();c&&e?console.warn(a):c||(c=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(r).concat(t);var o=document.head||document.body;if(!o)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return o.appendChild(n),n}(e)),c.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),c.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(i){return void n(i)}else t(null)}))),c},u=Promise.resolve().then((function(){return i(null)})),s=!1;u.catch((function(e){s||console.warn(e)}));var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];s=!0;var r=Date.now();return u.then((function(e){return function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.54.2",startTime:t})}(r,n),r}(e,t,r)}))}},53387:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(89379),o=n(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"plus-circle",theme:"outlined"};var c=n(25085),i=function(e,t){return o.createElement(c.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const u=o.forwardRef(i)},65604:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){return i(e)||u(e,t)||s(e,t)||f()}function i(e){if(Array.isArray(e))return e}function u(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(u){i=!0,o=u}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}function s(e,t){if(e){if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(e,t):void 0}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function f(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var p="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function m(){}function y(){}y.resetWarningCache=m;var v=function(){function e(e,t,n,r,o,a){if(a!==p){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:y,resetWarningCache:m};return n.PropTypes=n,n},h=d((function(e){e.exports=v()})),E=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},b=function(e){return null!==e&&"object"===o(e)},g=function(e){return b(e)&&"function"===typeof e.then},w=function(e){return b(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},S="[object Object]",C=function e(t,n){if(!b(t)||!b(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===S;if(o!==(Object.prototype.toString.call(n)===S))return!1;if(!o&&!r)return t===n;var a=Object.keys(t),c=Object.keys(n);if(a.length!==c.length)return!1;for(var i={},u=0;u<a.length;u+=1)i[a[u]]=!0;for(var s=0;s<c.length;s+=1)i[c[s]]=!0;var l=Object.keys(i);if(l.length!==a.length)return!1;var f=t,d=n,p=function(t){return e(f[t],d[t])};return l.every(p)},P=function(e,t,n){return b(e)?Object.keys(e).reduce((function(o,c){var i=!b(t)||!C(e[c],t[c]);return n.includes(c)?(i&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),o):i?r(r({},o||{}),{},a({},c,e[c])):o}),null):null},O="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",j=function(e){if(null===e||w(e))return e;throw new Error(O)},k=function(e){if(g(e))return{tag:"async",stripePromise:Promise.resolve(e).then(j)};var t=j(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},A=t.createContext(null);A.displayName="ElementsContext";var N=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},R=t.createContext(null);R.displayName="CartElementContext";var I=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},T=function(e){var n=e.stripe,r=e.options,o=e.children,a=t.useMemo((function(){return k(n)}),[n]),i=c(t.useState(null),2),u=i[0],s=i[1],l=c(t.useState(null),2),f=l[0],d=l[1],p=c(t.useState((function(){return{stripe:"sync"===a.tag?a.stripe:null,elements:"sync"===a.tag?a.stripe.elements(r):null}})),2),m=p[0],y=p[1];t.useEffect((function(){var e=!0,t=function(e){y((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==a.tag||m.stripe?"sync"!==a.tag||m.stripe||t(a.stripe):a.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[a,m,r]);var v=E(n);t.useEffect((function(){null!==v&&v!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[v,n]);var h=E(r);return t.useEffect((function(){if(m.elements){var e=P(r,h,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[r,h,m.elements]),t.useEffect((function(){var e=m.stripe;e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"1.16.5"}),e.registerAppInfo({name:"react-stripe-js",version:"1.16.5",url:"https://stripe.com/docs/stripe-js/react"}))}),[m.stripe]),t.createElement(A.Provider,{value:m},t.createElement(R.Provider,{value:{cart:u,setCart:s,cartState:f,setCartState:d}},o))};T.propTypes={stripe:h.any,options:h.object};var x=function(e){var n=t.useContext(A);return N(n,e)},_=function(e){var n=t.useContext(R);return I(n,e)},L=function(){return x("calls useElements()").elements},B=function(){return x("calls useStripe()").stripe},D=function(){return _("calls useCartElement()").cart},M=function(){return _("calls useCartElementState()").cartState},U=function(e){return(0,e.children)(x("mounts <ElementsConsumer>"))};U.propTypes={children:h.func.isRequired};var q=function(e,n,r){var o=!!r,a=t.useRef(r);t.useEffect((function(){a.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){a.current&&a.current.apply(a,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,a])},z=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},F=function(e,n){var r="".concat(z(e),"Element"),o=n?function(e){x("mounts <".concat(r,">")),_("mounts <".concat(r,">"));var n=e.id,o=e.className;return t.createElement("div",{id:n,className:o})}:function(n){var o,a=n.id,i=n.className,u=n.options,s=void 0===u?{}:u,l=n.onBlur,f=n.onFocus,d=n.onReady,p=n.onChange,m=n.onEscape,y=n.onClick,v=n.onLoadError,h=n.onLoaderStart,b=n.onNetworksChange,g=n.onCheckout,w=n.onLineItemClick,S=n.onConfirm,C=n.onCancel,O=n.onShippingAddressChange,j=n.onShippingRateChange,k=x("mounts <".concat(r,">")).elements,A=c(t.useState(null),2),N=A[0],R=A[1],I=t.useRef(null),T=t.useRef(null),L=_("mounts <".concat(r,">")),B=L.setCart,D=L.setCartState;q(N,"blur",l),q(N,"focus",f),q(N,"escape",m),q(N,"click",y),q(N,"loaderror",v),q(N,"loaderstart",h),q(N,"networkschange",b),q(N,"lineitemclick",w),q(N,"confirm",S),q(N,"cancel",C),q(N,"shippingaddresschange",O),q(N,"shippingratechange",j),"cart"===e?o=function(e){D(e),d&&d(e)}:d&&(o="payButton"===e?d:function(){d(N)}),q(N,"ready",o),q(N,"change","cart"===e?function(e){D(e),p&&p(e)}:p),q(N,"checkout","cart"===e?function(e){D(e),g&&g(e)}:g),t.useLayoutEffect((function(){if(null===I.current&&k&&null!==T.current){var t=k.create(e,s);"cart"===e&&B&&B(t),I.current=t,R(t),t.mount(T.current)}}),[k,s,B]);var M=E(s);return t.useEffect((function(){if(I.current){var e=P(s,M,["paymentRequest"]);e&&I.current.update(e)}}),[s,M]),t.useLayoutEffect((function(){return function(){I.current&&(I.current.destroy(),I.current=null)}}),[]),t.createElement("div",{id:a,className:i,ref:T})};return o.propTypes={id:h.string,className:h.string,onChange:h.func,onBlur:h.func,onFocus:h.func,onReady:h.func,onEscape:h.func,onClick:h.func,onLoadError:h.func,onLoaderStart:h.func,onNetworksChange:h.func,onCheckout:h.func,onLineItemClick:h.func,onConfirm:h.func,onCancel:h.func,onShippingAddressChange:h.func,onShippingRateChange:h.func,options:h.object},o.displayName=r,o.__elementType=e,o},G="undefined"===typeof window,V=F("auBankAccount",G),W=F("card",G),J=F("cardNumber",G),K=F("cardExpiry",G),Y=F("cardCvc",G),H=F("fpxBank",G),X=F("iban",G),$=F("idealBank",G),Q=F("p24Bank",G),Z=F("epsBank",G),ee=F("payment",G),te=F("payButton",G),ne=F("paymentRequestButton",G),re=F("linkAuthentication",G),oe=F("address",G),ae=F("shippingAddress",G),ce=F("cart",G),ie=F("paymentMethodMessaging",G),ue=F("affirmMessage",G),se=F("afterpayClearpayMessage",G);e.AddressElement=oe,e.AffirmMessageElement=ue,e.AfterpayClearpayMessageElement=se,e.AuBankAccountElement=V,e.CardCvcElement=Y,e.CardElement=W,e.CardExpiryElement=K,e.CardNumberElement=J,e.CartElement=ce,e.Elements=T,e.ElementsConsumer=U,e.EpsBankElement=Z,e.FpxBankElement=H,e.IbanElement=X,e.IdealBankElement=$,e.LinkAuthenticationElement=re,e.P24BankElement=Q,e.PayButtonElement=te,e.PaymentElement=ee,e.PaymentMethodMessagingElement=ie,e.PaymentRequestButtonElement=ne,e.ShippingAddressElement=ae,e.useCartElement=D,e.useCartElementState=M,e.useElements=L,e.useStripe=B,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(9950))},75520:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function c(e){try{u(r.next(e))}catch(t){a(t)}}function i(e){try{u(r.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}u((r=r.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const o=n(9950);class a{constructor(e){this.options=e,"undefined"!==typeof window&&(this.rzrpayInstannce=new window.Razorpay(this.options))}on(e,t){this.rzrpayInstannce.on(e,t)}open(){this.rzrpayInstannce.open()}}t.default=()=>{const e=(0,o.useMemo)((()=>"undefined"!==typeof window),[]),t=(0,o.useCallback)((()=>!(!e||!("Razorpay"in window))),[]),n=(0,o.useCallback)((t=>{if(e)return new Promise(((e,n)=>{const r=document.createElement("script");r.src=t,r.onload=t=>e(t),r.onerror=e=>n(e),document.body.appendChild(r)}))}),[]);return(0,o.useEffect)((()=>{t()||r(void 0,void 0,void 0,(function*(){try{yield n("https://checkout.razorpay.com/v1/checkout.js")}catch(e){throw new Error(e)}}))}),[]),a}},83712:(e,t,n)=>{"use strict";n.d(t,{JV:()=>P,ag:()=>L});var r,o,a,c=n(9950);!function(e){e.INITIAL="initial",e.PENDING="pending",e.REJECTED="rejected",e.RESOLVED="resolved"}(r||(r={})),function(e){e.LOADING_STATUS="setLoadingStatus",e.RESET_OPTIONS="resetOptions",e.SET_BRAINTREE_INSTANCE="braintreeInstance"}(o||(o={})),function(e){e.NUMBER="number",e.CVV="cvv",e.EXPIRATION_DATE="expirationDate",e.EXPIRATION_MONTH="expirationMonth",e.EXPIRATION_YEAR="expirationYear",e.POSTAL_CODE="postalCode"}(a||(a={}));var i="data-react-paypal-script-id",u="data-sdk-integration-source",s="react-paypal-js",l="data-namespace",f="Failed to load the PayPal JS SDK script.",d="3.84.0",p=("https://js.braintreegateway.com/web/".concat(d,"/js/client.min.js"),"https://js.braintreegateway.com/web/".concat(d,"/js/paypal-checkout.min.js"),"paypal"),m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},m.apply(this,arguments)};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function v(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function h(e){return void 0===e&&(e=p),window[e]}function E(e){var t=e.reactComponentName,n=e.sdkComponentKey,r=e.sdkRequestedComponents,o=void 0===r?"":r,a=e.sdkDataNamespace,c=void 0===a?p:a,i=n.charAt(0).toUpperCase().concat(n.substring(1)),u="Unable to render <".concat(t," /> because window.").concat(c,".").concat(i," is undefined.");if(!o.includes(n)){var s=[o,n].filter(Boolean).join();u+="\nTo fix the issue, add '".concat(n,"' to the list of components passed to the parent PayPalScriptProvider:")+"\n`<PayPalScriptProvider options={{ components: '".concat(s,"'}}>`.")}return u}function b(e){return"react-paypal-js-".concat(function(e){for(var t="",n=0;n<e.length;n++){var r=e[n].charCodeAt(0)*n;e[n+1]&&(r+=e[n+1].charCodeAt(0)*(n-1)),t+=String.fromCharCode(97+Math.abs(r)%26)}return t}(JSON.stringify(e)))}function g(e,t){var n;switch(t.type){case o.LOADING_STATUS:return m(m({},e),{loadingStatus:t.value});case o.RESET_OPTIONS:return function(e){var t=self.document.querySelector("script[".concat(i,'="').concat(e,'"]'));(null===t||void 0===t?void 0:t.parentNode)&&t.parentNode.removeChild(t)}(e.options[i]),delete t.value[i],m(m({},e),{loadingStatus:r.PENDING,options:m(m({},t.value),(n={},n[i]="".concat(b(t.value)),n[u]=s,n))});case o.SET_BRAINTREE_INSTANCE:return m(m({},e),{braintreePayPalCheckoutInstance:t.value});default:return e}}var w=(0,c.createContext)(null);function S(e){if("function"===typeof(null===e||void 0===e?void 0:e.dispatch)&&0!==e.dispatch.length)return e;throw new Error("usePayPalScriptReducer must be used within a PayPalScriptProvider")}function C(){var e=S((0,c.useContext)(w));return[m(m({},e),{isInitial:e.loadingStatus===r.INITIAL,isPending:e.loadingStatus===r.PENDING,isResolved:e.loadingStatus===r.RESOLVED,isRejected:e.loadingStatus===r.REJECTED}),e.dispatch]}(0,c.createContext)({});var P=function(e){var t=e.className,n=void 0===t?"":t,r=e.disabled,o=void 0!==r&&r,a=e.children,i=e.forceReRender,u=void 0===i?[]:i,s=y(e,["className","disabled","children","forceReRender"]),f=o?{opacity:.38}:{},d="".concat(n," ").concat(o?"paypal-buttons-disabled":"").trim(),p=(0,c.useRef)(null),b=(0,c.useRef)(null),g=C()[0],w=g.isResolved,S=g.options,O=(0,c.useState)(null),j=O[0],k=O[1],A=(0,c.useState)(!0),N=A[0],R=A[1],I=(0,c.useState)(null)[1];function T(){null!==b.current&&b.current.close().catch((function(){}))}return(0,c.useEffect)((function(){if(!1===w)return T;var e=h(S[l]);if(void 0===e||void 0===e.Buttons)return I((function(){throw new Error(E({reactComponentName:P.displayName,sdkComponentKey:"buttons",sdkRequestedComponents:S.components,sdkDataNamespace:S[l]}))})),T;try{b.current=e.Buttons(m(m({},s),{onInit:function(e,t){k(t),"function"===typeof s.onInit&&s.onInit(e,t)}}))}catch(t){return I((function(){throw new Error("Failed to render <PayPalButtons /> component. Failed to initialize:  ".concat(t))}))}return!1===b.current.isEligible()?(R(!1),T):p.current?(b.current.render(p.current).catch((function(e){null!==p.current&&0!==p.current.children.length&&I((function(){throw new Error("Failed to render <PayPalButtons /> component. ".concat(e))}))})),T):T}),v(v([w],u,!0),[s.fundingSource],!1)),(0,c.useEffect)((function(){null!==j&&(!0===o?j.disable().catch((function(){})):j.enable().catch((function(){})))}),[o,j]),c.createElement(c.Fragment,null,N?c.createElement("div",{ref:p,style:f,className:d}):a)};function O(e){var t="https://www.paypal.com/sdk/js";e.sdkBaseURL&&(t=e.sdkBaseURL,delete e.sdkBaseURL),function(e){var t=e["merchant-id"],n=e["data-merchant-id"],r="",o="";Array.isArray(t)?t.length>1?(r="*",o=t.toString()):r=t.toString():"string"===typeof t&&t.length>0?r=t:"string"===typeof n&&n.length>0&&(r="*",o=n);e["merchant-id"]=r,e["data-merchant-id"]=o}(e);var n=Object.keys(e).filter((function(t){return"undefined"!==typeof e[t]&&null!==e[t]&&""!==e[t]})).reduce((function(t,n){var r=e[n].toString();return"data-"===n.substring(0,5)?t.dataAttributes[n]=r:t.queryParams[n]=r,t}),{queryParams:{},dataAttributes:{}}),r=n.queryParams,o=n.dataAttributes;return{url:"".concat(t,"?").concat(j(r)),dataAttributes:o}}function j(e){var t="";return Object.keys(e).forEach((function(n){0!==t.length&&(t+="&"),t+=n+"="+e[n]})),t}function k(e,t){void 0===t&&(t={});var n=document.createElement("script");return n.src=e,Object.keys(t).forEach((function(e){n.setAttribute(e,t[e]),"data-csp-nonce"===e&&n.setAttribute("nonce",t["data-csp-nonce"])})),n}function A(e,t){if(void 0===t&&(t=R()),T(e,t),"undefined"===typeof document)return t.resolve(null);var n=O(e),r=n.url,o=n.dataAttributes,a=o["data-namespace"]||"paypal",c=I(a);return function(e,t){var n=document.querySelector('script[src="'.concat(e,'"]'));if(null===n)return null;var r=k(e,t),o=n.cloneNode();if(delete o.dataset.uidAuto,Object.keys(o.dataset).length!==Object.keys(r.dataset).length)return null;var a=!0;return Object.keys(o.dataset).forEach((function(e){o.dataset[e]!==r.dataset[e]&&(a=!1)})),a?n:null}(r,o)&&c?t.resolve(c):N({url:r,attributes:o},t).then((function(){var e=I(a);if(e)return e;throw new Error("The window.".concat(a," global variable is not available."))}))}function N(e,t){void 0===t&&(t=R()),T(e,t);var n=e.url,r=e.attributes;if("string"!==typeof n||0===n.length)throw new Error("Invalid url.");if("undefined"!==typeof r&&"object"!==typeof r)throw new Error("Expected attributes to be an object.");return new t((function(e,t){if("undefined"===typeof document)return e();!function(e){var t=e.url,n=e.attributes,r=e.onSuccess,o=e.onError,a=k(t,n);a.onerror=o,a.onload=r,document.head.insertBefore(a,document.head.firstElementChild)}({url:n,attributes:r,onSuccess:function(){return e()},onError:function(){var e=new Error('The script "'.concat(n,'" failed to load.'));return window.fetch?fetch(n).then((function(n){return 200===n.status&&t(e),n.text()})).then((function(e){var n=function(e){var t=e.split("/* Original Error:")[1];return t?t.replace(/\n/g,"").replace("*/","").trim():e}(e);t(new Error(n))})).catch((function(e){t(e)})):t(e)}})}))}function R(){if("undefined"===typeof Promise)throw new Error("Promise is undefined. To resolve the issue, use a Promise polyfill.");return Promise}function I(e){return window[e]}function T(e,t){if("object"!==typeof e||null===e)throw new Error("Expected an options object.");if("undefined"!==typeof t&&"function"!==typeof t)throw new Error("Expected PromisePonyfill to be a function.")}P.displayName="PayPalButtons";var x=function(e){var t=e.className,n=void 0===t?"":t,r=e.children,o=y(e,["className","children"]),a=C()[0],i=a.isResolved,u=a.options,s=(0,c.useRef)(null),f=(0,c.useState)(!0),d=f[0],p=f[1],v=(0,c.useState)(null)[1];return(0,c.useEffect)((function(){if(!1!==i){var e=h(u[l]);if(void 0===e||void 0===e.Marks)return v((function(){throw new Error(E({reactComponentName:x.displayName,sdkComponentKey:"marks",sdkRequestedComponents:u.components,sdkDataNamespace:u[l]}))}));!function(e){var t=s.current;if(!t||!e.isEligible())return p(!1);t.firstChild&&t.removeChild(t.firstChild),e.render(t).catch((function(e){null!==t&&0!==t.children.length&&v((function(){throw new Error("Failed to render <PayPalMarks /> component. ".concat(e))}))}))}(e.Marks(m({},o)))}}),[i,o.fundingSource]),c.createElement(c.Fragment,null,d?c.createElement("div",{ref:s,className:n}):r)};x.displayName="PayPalMarks";var _=function(e){var t=e.className,n=void 0===t?"":t,r=e.forceReRender,o=void 0===r?[]:r,a=y(e,["className","forceReRender"]),i=C()[0],u=i.isResolved,s=i.options,f=(0,c.useRef)(null),d=(0,c.useRef)(null),p=(0,c.useState)(null)[1];return(0,c.useEffect)((function(){if(!1!==u){var e=h(s[l]);if(void 0===e||void 0===e.Messages)return p((function(){throw new Error(E({reactComponentName:_.displayName,sdkComponentKey:"messages",sdkRequestedComponents:s.components,sdkDataNamespace:s[l]}))}));d.current=e.Messages(m({},a)),d.current.render(f.current).catch((function(e){null!==f.current&&0!==f.current.children.length&&p((function(){throw new Error("Failed to render <PayPalMessages /> component. ".concat(e))}))}))}}),v([u],o,!0)),c.createElement("div",{ref:f,className:n})};_.displayName="PayPalMessages";var L=function(e){var t,n=e.options,a=void 0===n?{"client-id":"test"}:n,l=e.children,d=e.deferLoading,p=void 0!==d&&d,y=(0,c.useReducer)(g,{options:m(m({},a),(t={},t[i]="".concat(b(a)),t[u]=s,t)),loadingStatus:p?r.INITIAL:r.PENDING}),v=y[0],h=y[1];return(0,c.useEffect)((function(){if(!1===p&&v.loadingStatus===r.INITIAL)return h({type:o.LOADING_STATUS,value:r.PENDING});if(v.loadingStatus===r.PENDING){var e=!0;return A(v.options).then((function(){e&&h({type:o.LOADING_STATUS,value:r.RESOLVED})})).catch((function(t){console.error("".concat(f," ").concat(t)),e&&h({type:o.LOADING_STATUS,value:r.REJECTED})})),function(){e=!1}}}),[v.options,p,v.loadingStatus]),c.createElement(w.Provider,{value:m(m({},v),{dispatch:h})},l)}},86245:(e,t)=>{"use strict";t.A=void 0;t.A=function(e){return null}},86552:(e,t,n)=>{"use strict";n.d(t,{V$:()=>f});var r=n(9950),o=[];function a(e){var t=function(){var e="https://js.paystack.co/v1/inline.js",t=(0,r.useState)({loaded:!1,error:!1}),n=t[0],a=t[1];return(0,r.useEffect)((function(){if(!o.includes(e)){o.push(e);var t=document.createElement("script");t.src=e,t.async=!0;var n=function(){a({loaded:!0,error:!1})},r=function(){var n=o.indexOf(e);n>=0&&o.splice(n,1),t.remove(),a({loaded:!0,error:!0})};return t.addEventListener("load",n),t.addEventListener("complete",n),t.addEventListener("error",r),document.body.appendChild(t),function(){t.removeEventListener("load",n),t.removeEventListener("error",r)}}a({loaded:!0,error:!1})}),[e]),[n.loaded,n.error]}(),n=t[0],a=t[1],c=e.publicKey,i=e.firstname,u=e.lastname,s=e.phone,l=e.email,f=e.amount,d=e.reference,p=e.metadata,m=void 0===p?{}:p,y=e.currency,v=void 0===y?"NGN":y,h=e.channels,E=e.label,b=void 0===E?"":E,g=e.plan,w=void 0===g?"":g,S=e.quantity,C=void 0===S?"":S,P=e.subaccount,O=void 0===P?"":P,j=e.transaction_charge,k=void 0===j?0:j,A=e.bearer,N=void 0===A?"account":A,R=e.split,I=e.split_code;return(0,r.useEffect)((function(){if(a)throw new Error("Unable to load paystack inline script")}),[a]),function(t,r){if(a)throw new Error("Unable to load paystack inline script");n&&function(e){var t=window.PaystackPop&&window.PaystackPop.setup(e);t&&t.openIframe()}({callback:t||function(){return null},onClose:r||function(){return null},key:c,ref:d,email:l,firstname:i,lastname:u,phone:s,amount:f,currency:v,plan:w,quantity:C,"data-custom-button":e["data-custom-button"]||"",channels:h,subaccount:O,transaction_charge:k,bearer:N,label:b,metadata:m,split:R,split_code:I})}}var c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};function i(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}var u=(0,r.createContext)({initializePayment:function(){return null},onSuccess:function(){return null},onClose:function(){return null}}),s=function(e){var t=e.children,n=e.onSuccess,o=e.onClose,c=a(i(e,["children","onSuccess","onClose"]));return r.createElement(u.Provider,{value:{initializePayment:c,onSuccess:n,onClose:o}},t)},l=function(e){var t=e.children,n=e.ref,o=(0,r.useContext)(u),a=o.initializePayment,c=o.onSuccess,i=o.onClose;return t({initializePayment:function(){return a(c,i)},ref:n})},f=(0,r.forwardRef)((function(e,t){var n=e.children,o=e.onSuccess,a=e.onClose,u=i(e,["children","onSuccess","onClose"]),f=o||function(){return null},d=a||function(){return null};return r.createElement(s,c({},u,{onSuccess:f,onClose:d}),r.createElement(l,{ref:t},n))}))},91348:(e,t,n)=>{"use strict";n.d(t,{A:()=>u});var r=n(89379),o=n(9950);const a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"minus",theme:"outlined"};var c=n(25085),i=function(e,t){return o.createElement(c.A,(0,r.A)((0,r.A)({},e),{},{ref:t,icon:a}))};const u=o.forwardRef(i)}}]);