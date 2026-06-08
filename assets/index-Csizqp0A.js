var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var ee=Array.isArray;function te(){}var S={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function re(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function ie(e,t){return re(e.type,t,e.props)}function C(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ae(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var oe=/\/+/g;function se(e,t){return typeof e==`object`&&e&&e.key!=null?ae(``+e.key):t.toString(36)}function ce(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(te,te):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function le(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,le(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+se(e,0):a,ee(o)?(i=``,c!=null&&(i=c.replace(oe,`$&/`)+`/`),le(o,r,i,``,function(e){return e})):o!=null&&(C(o)&&(o=ie(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(oe,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(ee(e))for(var u=0;u<e.length;u++)a=e[u],s=l+se(a,u),c+=le(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+se(a,u++),c+=le(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return le(ce(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function ue(e,t,n){if(e==null)return e;var r=[],i=0;return le(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function de(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var w=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},T={map:ue,forEach:function(e,t,n){ue(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ue(e,function(){t++}),t},toArray:function(e){return ue(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=T,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!ne.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return re(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)ne.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return re(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=C,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:de}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(te,w)}catch(e){w(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),S.T=t}},e.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},e.use=function(e){return S.H.use(e)},e.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},e.useCallback=function(e,t){return S.H.useCallback(e,t)},e.useContext=function(e){return S.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return S.H.useEffect(e,t)},e.useEffectEvent=function(e){return S.H.useEffectEvent(e)},e.useId=function(){return S.H.useId()},e.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return S.H.useMemo(e,t)},e.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},e.useRef=function(e){return S.H.useRef(e)},e.useState=function(e){return S.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return S.H.useTransition()},e.version=`19.2.5`})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,ee||(ee=!0,C());else{var t=n(l);t!==null&&se(x,t.startTime-e)}}var ee=!1,te=-1,S=5,ne=-1;function re(){return g?!0:!(e.unstable_now()-ne<S)}function ie(){if(g=!1,ee){var t=e.unstable_now();ne=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(te),te=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&re());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&se(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?C():ee=!1}}}var C;if(typeof y==`function`)C=function(){y(ie)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=ie,C=function(){oe.postMessage(null)}}else C=function(){_(ie,0)};function se(t,n){te=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):S=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(te),te=-1):h=!0,se(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ee||(ee=!0,C()))),r},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=n();function r(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function i(){}var a={d:{f:i,r:function(){throw Error(r(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(r(299));return s(e,t,null,n)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.5`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=i(),r=n(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),ee=Symbol.for(`react.consumer`),te=Symbol.for(`react.context`),S=Symbol.for(`react.forward_ref`),ne=Symbol.for(`react.suspense`),re=Symbol.for(`react.suspense_list`),ie=Symbol.for(`react.memo`),C=Symbol.for(`react.lazy`),ae=Symbol.for(`react.activity`),oe=Symbol.for(`react.memo_cache_sentinel`),se=Symbol.iterator;function ce(e){return typeof e!=`object`||!e?null:(e=se&&e[se]||e[`@@iterator`],typeof e==`function`?e:null)}var le=Symbol.for(`react.client.reference`);function ue(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case ne:return`Suspense`;case re:return`SuspenseList`;case ae:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case te:return e.displayName||`Context`;case ee:return(e._context.displayName||`Context`)+`.Consumer`;case S:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case ie:return t=e.displayName||null,t===null?ue(e.type)||`Memo`:t;case C:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var de=Array.isArray,w=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},pe=[],me=-1;function he(e){return{current:e}}function E(e){0>me||(e.current=pe[me],pe[me]=null,me--)}function D(e,t){me++,pe[me]=e.current,e.current=t}var ge=he(null),_e=he(null),ve=he(null),ye=he(null);function be(e,t){switch(D(ve,t),D(_e,e),D(ge,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}E(ge),D(ge,e)}function xe(){E(ge),E(_e),E(ve)}function Se(e){e.memoizedState!==null&&D(ye,e);var t=ge.current,n=Hd(t,e.type);t!==n&&(D(_e,e),D(ge,n))}function Ce(e){_e.current===e&&(E(ge),E(_e)),ye.current===e&&(E(ye),Qf._currentValue=fe)}var we,Te;function Ee(e){if(we===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);we=t&&t[1]||``,Te=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+we+e+Te}var De=!1;function Oe(e,t){if(!e||De)return``;De=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{De=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?Ee(n):``}function ke(e,t){switch(e.tag){case 26:case 27:case 5:return Ee(e.type);case 16:return Ee(`Lazy`);case 13:return e.child!==t&&t!==null?Ee(`Suspense Fallback`):Ee(`Suspense`);case 19:return Ee(`SuspenseList`);case 0:case 15:return Oe(e.type,!1);case 11:return Oe(e.type.render,!1);case 1:return Oe(e.type,!0);case 31:return Ee(`Activity`);default:return``}}function Ae(e){try{var t=``,n=null;do t+=ke(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var je=Object.prototype.hasOwnProperty,Me=t.unstable_scheduleCallback,Ne=t.unstable_cancelCallback,Pe=t.unstable_shouldYield,Fe=t.unstable_requestPaint,Ie=t.unstable_now,Le=t.unstable_getCurrentPriorityLevel,Re=t.unstable_ImmediatePriority,ze=t.unstable_UserBlockingPriority,Be=t.unstable_NormalPriority,Ve=t.unstable_LowPriority,He=t.unstable_IdlePriority,Ue=t.log,We=t.unstable_setDisableYieldValue,Ge=null,Ke=null;function qe(e){if(typeof Ue==`function`&&We(e),Ke&&typeof Ke.setStrictMode==`function`)try{Ke.setStrictMode(Ge,e)}catch{}}var Je=Math.clz32?Math.clz32:Ze,Ye=Math.log,Xe=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(Ye(e)/Xe|0)|0}var Qe=256,$e=262144,et=4194304;function tt(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function nt(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=tt(n))):i=tt(o):i=tt(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=tt(n))):i=tt(o)):i=tt(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function rt(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function it(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function at(){var e=et;return et<<=1,!(et&62914560)&&(et=4194304),e}function ot(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function st(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ct(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Je(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&lt(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function lt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Je(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ut(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Je(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function dt(e,t){var n=t&-t;return n=n&42?1:ft(n),(n&(e.suspendedLanes|t))===0?n:0}function ft(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function mt(){var e=T.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ht(e,t){var n=T.p;try{return T.p=e,t()}finally{T.p=n}}var gt=Math.random().toString(36).slice(2),_t=`__reactFiber$`+gt,vt=`__reactProps$`+gt,yt=`__reactContainer$`+gt,bt=`__reactEvents$`+gt,xt=`__reactListeners$`+gt,St=`__reactHandles$`+gt,Ct=`__reactResources$`+gt,wt=`__reactMarker$`+gt;function Tt(e){delete e[_t],delete e[vt],delete e[bt],delete e[xt],delete e[St]}function Et(e){var t=e[_t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[yt]||n[_t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[_t])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Dt(e){if(e=e[_t]||e[yt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ot(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function kt(e){var t=e[Ct];return t||=e[Ct]={hoistableStyles:new Map,hoistableScripts:new Map},t}function O(e){e[wt]=!0}var At=new Set,jt={};function Mt(e,t){Nt(e,t),Nt(e+`Capture`,t)}function Nt(e,t){for(jt[e]=t,e=0;e<t.length;e++)At.add(t[e])}var Pt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Ft={},It={};function Lt(e){return je.call(It,e)?!0:je.call(Ft,e)?!1:Pt.test(e)?It[e]=!0:(Ft[e]=!0,!1)}function Rt(e,t,n){if(Lt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function zt(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Bt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Vt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ht(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Ut(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Wt(e){if(!e._valueTracker){var t=Ht(e)?`checked`:`value`;e._valueTracker=Ut(e,t,``+e[t])}}function Gt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ht(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Kt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var qt=/[\n"\\]/g;function Jt(e){return e.replace(qt,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Yt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Vt(t)):e.value!==``+Vt(t)&&(e.value=``+Vt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Zt(e,o,Vt(n)):Zt(e,o,Vt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Vt(s):e.removeAttribute(`name`)}function Xt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Wt(e);return}n=n==null?``:``+Vt(n),t=t==null?n:``+Vt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Wt(e)}function Zt(e,t,n){t===`number`&&Kt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Qt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function $t(e,t,n){if(t!=null&&(t=``+Vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Vt(n)}function en(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(de(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Vt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Wt(e)}function tn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var nn=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function rn(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||nn.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function an(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&rn(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&rn(e,a,t[a])}function on(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var sn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),cn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ln(e){return cn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function un(){}var dn=null;function fn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pn=null,mn=null;function hn(e){var t=Dt(e);if(t&&(e=t.stateNode)){var n=e[vt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Yt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Jt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[vt]||null;if(!i)throw Error(s(90));Yt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Gt(r)}break a;case`textarea`:$t(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Qt(e,!!n.multiple,t,!1)}}}var gn=!1;function _n(e,t,n){if(gn)return e(t,n);gn=!0;try{return e(t)}finally{if(gn=!1,(pn!==null||mn!==null)&&(bu(),pn&&(t=pn,e=mn,mn=pn=null,hn(t),e)))for(t=0;t<e.length;t++)hn(e[t])}}function vn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[vt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var yn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),bn=!1;if(yn)try{var xn={};Object.defineProperty(xn,`passive`,{get:function(){bn=!0}}),window.addEventListener(`test`,xn,xn),window.removeEventListener(`test`,xn,xn)}catch{bn=!1}var Sn=null,Cn=null,wn=null;function Tn(){if(wn)return wn;var e,t=Cn,n=t.length,r,i=`value`in Sn?Sn.value:Sn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return wn=i.slice(e,1<r?1-r:void 0)}function En(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Dn(){return!0}function On(){return!1}function kn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Dn:On,this.isPropagationStopped=On,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),t}var An={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jn=kn(An),Mn=h({},An,{view:0,detail:0}),Nn=kn(Mn),Pn,Fn,In,Ln=h({},Mn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==In&&(In&&e.type===`mousemove`?(Pn=e.screenX-In.screenX,Fn=e.screenY-In.screenY):Fn=Pn=0,In=e),Pn)},movementY:function(e){return`movementY`in e?e.movementY:Fn}}),Rn=kn(Ln),zn=kn(h({},Ln,{dataTransfer:0})),Bn=kn(h({},Mn,{relatedTarget:0})),Vn=kn(h({},An,{animationName:0,elapsedTime:0,pseudoElement:0})),Hn=kn(h({},An,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Un=kn(h({},An,{data:0})),Wn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Gn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Kn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function qn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kn[e])?!!t[e]:!1}function Jn(){return qn}var Yn=kn(h({},Mn,{key:function(e){if(e.key){var t=Wn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=En(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Gn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jn,charCode:function(e){return e.type===`keypress`?En(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?En(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Xn=kn(h({},Ln,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Zn=kn(h({},Mn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jn})),Qn=kn(h({},An,{propertyName:0,elapsedTime:0,pseudoElement:0})),$n=kn(h({},Ln,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),er=kn(h({},An,{newState:0,oldState:0})),tr=[9,13,27,32],nr=yn&&`CompositionEvent`in window,rr=null;yn&&`documentMode`in document&&(rr=document.documentMode);var ir=yn&&`TextEvent`in window&&!rr,ar=yn&&(!nr||rr&&8<rr&&11>=rr),or=` `,sr=!1;function cr(e,t){switch(e){case`keyup`:return tr.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function lr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var ur=!1;function dr(e,t){switch(e){case`compositionend`:return lr(t);case`keypress`:return t.which===32?(sr=!0,or):null;case`textInput`:return e=t.data,e===or&&sr?null:e;default:return null}}function fr(e,t){if(ur)return e===`compositionend`||!nr&&cr(e,t)?(e=Tn(),wn=Cn=Sn=null,ur=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ar&&t.locale!==`ko`?null:t.data;default:return null}}var pr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!pr[e.type]:t===`textarea`}function hr(e,t,n,r){pn?mn?mn.push(r):mn=[r]:pn=r,t=Ed(t,`onChange`),0<t.length&&(n=new jn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var gr=null,_r=null;function vr(e){yd(e,0)}function yr(e){if(Gt(Ot(e)))return e}function br(e,t){if(e===`change`)return t}var xr=!1;if(yn){var Sr;if(yn){var Cr=`oninput`in document;if(!Cr){var wr=document.createElement(`div`);wr.setAttribute(`oninput`,`return;`),Cr=typeof wr.oninput==`function`}Sr=Cr}else Sr=!1;xr=Sr&&(!document.documentMode||9<document.documentMode)}function Tr(){gr&&(gr.detachEvent(`onpropertychange`,Er),_r=gr=null)}function Er(e){if(e.propertyName===`value`&&yr(_r)){var t=[];hr(t,_r,e,fn(e)),_n(vr,t)}}function Dr(e,t,n){e===`focusin`?(Tr(),gr=t,_r=n,gr.attachEvent(`onpropertychange`,Er)):e===`focusout`&&Tr()}function Or(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return yr(_r)}function kr(e,t){if(e===`click`)return yr(t)}function Ar(e,t){if(e===`input`||e===`change`)return yr(t)}function jr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Mr=typeof Object.is==`function`?Object.is:jr;function Nr(e,t){if(Mr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!je.call(t,i)||!Mr(e[i],t[i]))return!1}return!0}function Pr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fr(e,t){var n=Pr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Pr(n)}}function Ir(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ir(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Kt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Kt(e.document)}return t}function Rr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var zr=yn&&`documentMode`in document&&11>=document.documentMode,Br=null,Vr=null,Hr=null,Ur=!1;function Wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ur||Br==null||Br!==Kt(r)||(r=Br,`selectionStart`in r&&Rr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Hr&&Nr(Hr,r)||(Hr=r,r=Ed(Vr,`onSelect`),0<r.length&&(t=new jn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Br)))}function Gr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Kr={animationend:Gr(`Animation`,`AnimationEnd`),animationiteration:Gr(`Animation`,`AnimationIteration`),animationstart:Gr(`Animation`,`AnimationStart`),transitionrun:Gr(`Transition`,`TransitionRun`),transitionstart:Gr(`Transition`,`TransitionStart`),transitioncancel:Gr(`Transition`,`TransitionCancel`),transitionend:Gr(`Transition`,`TransitionEnd`)},qr={},Jr={};yn&&(Jr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),`TransitionEvent`in window||delete Kr.transitionend.transition);function Yr(e){if(qr[e])return qr[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Jr)return qr[e]=t[n];return e}var Xr=Yr(`animationend`),Zr=Yr(`animationiteration`),Qr=Yr(`animationstart`),$r=Yr(`transitionrun`),ei=Yr(`transitionstart`),ti=Yr(`transitioncancel`),ni=Yr(`transitionend`),ri=new Map,ii=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ii.push(`scrollEnd`);function ai(e,t){ri.set(e,t),Mt(t,[e])}var oi=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},si=[],ci=0,li=0;function ui(){for(var e=ci,t=li=ci=0;t<e;){var n=si[t];si[t++]=null;var r=si[t];si[t++]=null;var i=si[t];si[t++]=null;var a=si[t];if(si[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&mi(n,i,a)}}function di(e,t,n,r){si[ci++]=e,si[ci++]=t,si[ci++]=n,si[ci++]=r,li|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function fi(e,t,n,r){return di(e,t,n,r),hi(e)}function pi(e,t){return di(e,null,null,t),hi(e)}function mi(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Je(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function hi(e){if(50<du)throw du=0,fu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var gi={};function _i(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vi(e,t,n,r){return new _i(e,t,n,r)}function yi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bi(e,t){var n=e.alternate;return n===null?(n=vi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function xi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Si(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)yi(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,ge.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ae:return e=vi(31,n,t,i),e.elementType=ae,e.lanes=a,e;case y:return Ci(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=vi(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case ne:return e=vi(13,n,t,i),e.elementType=ne,e.lanes=a,e;case re:return e=vi(19,n,t,i),e.elementType=re,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:o=10;break a;case ee:o=9;break a;case S:o=11;break a;case ie:o=14;break a;case C:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=vi(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Ci(e,t,n,r){return e=vi(7,e,r,t),e.lanes=n,e}function wi(e,t,n){return e=vi(6,e,null,t),e.lanes=n,e}function Ti(e){var t=vi(18,null,null,0);return t.stateNode=e,t}function Ei(e,t,n){return t=vi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Di=new WeakMap;function Oi(e,t){if(typeof e==`object`&&e){var n=Di.get(e);return n===void 0?(t={value:e,source:t,stack:Ae(t)},Di.set(e,t),t):n}return{value:e,source:t,stack:Ae(t)}}var ki=[],Ai=0,ji=null,Mi=0,Ni=[],Pi=0,Fi=null,Ii=1,Li=``;function Ri(e,t){ki[Ai++]=Mi,ki[Ai++]=ji,ji=e,Mi=t}function zi(e,t,n){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Fi=e;var r=Ii;e=Li;var i=32-Je(r)-1;r&=~(1<<i),n+=1;var a=32-Je(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Ii=1<<32-Je(t)+i|n<<i|r,Li=a+e}else Ii=1<<a|n<<i|r,Li=e}function Bi(e){e.return!==null&&(Ri(e,1),zi(e,1,0))}function Vi(e){for(;e===ji;)ji=ki[--Ai],ki[Ai]=null,Mi=ki[--Ai],ki[Ai]=null;for(;e===Fi;)Fi=Ni[--Pi],Ni[Pi]=null,Li=Ni[--Pi],Ni[Pi]=null,Ii=Ni[--Pi],Ni[Pi]=null}function Hi(e,t){Ni[Pi++]=Ii,Ni[Pi++]=Li,Ni[Pi++]=Fi,Ii=t.id,Li=t.overflow,Fi=e}var Ui=null,k=null,A=!1,Wi=null,Gi=!1,Ki=Error(s(519));function qi(e){throw $i(Oi(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Ki}function Ji(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[_t]=e,t[vt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),en(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=un),t=!0):t=!1,t||qi(e,!0)}function Yi(e){for(Ui=e.return;Ui;)switch(Ui.tag){case 5:case 31:case 13:Gi=!1;return;case 27:case 3:Gi=!0;return;default:Ui=Ui.return}}function Xi(e){if(e!==Ui)return!1;if(!A)return Yi(e),A=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&k&&qi(e),Yi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));k=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));k=uf(e)}else t===27?(t=k,Zd(e.type)?(e=lf,lf=null,k=e):k=t):k=Ui?cf(e.stateNode.nextSibling):null;return!0}function Zi(){k=Ui=null,A=!1}function Qi(){var e=Wi;return e!==null&&(Ql===null?Ql=e:Ql.push.apply(Ql,e),Wi=null),e}function $i(e){Wi===null?Wi=[e]:Wi.push(e)}var ea=he(null),ta=null,na=null;function ra(e,t,n){D(ea,t._currentValue),t._currentValue=n}function ia(e){e._currentValue=ea.current,E(ea)}function aa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function oa(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),aa(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),aa(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function sa(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;Mr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===ye.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&oa(t,e,n,r),t.flags|=262144}function ca(e){for(e=e.firstContext;e!==null;){if(!Mr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function la(e){ta=e,na=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function j(e){return da(ta,e)}function ua(e,t){return ta===null&&la(e),da(e,t)}function da(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},na===null){if(e===null)throw Error(s(308));na=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else na=na.next=t;return n}var fa=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},pa=t.unstable_scheduleCallback,ma=t.unstable_NormalPriority,M={$$typeof:te,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ha(){return{controller:new fa,data:new Map,refCount:0}}function ga(e){e.refCount--,e.refCount===0&&pa(ma,function(){e.controller.abort()})}var _a=null,va=0,ya=0,ba=null;function xa(e,t){if(_a===null){var n=_a=[];va=0,ya=dd(),ba={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return va++,t.then(Sa,Sa),t}function Sa(){if(--va===0&&_a!==null){ba!==null&&(ba.status=`fulfilled`);var e=_a;_a=null,ya=0,ba=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ca(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var wa=w.S;w.S=function(e,t){tu=Ie(),typeof t==`object`&&t&&typeof t.then==`function`&&xa(e,t),wa!==null&&wa(e,t)};var Ta=he(null);function Ea(){var e=Ta.current;return e===null?G.pooledCache:e}function Da(e,t){t===null?D(Ta,Ta.current):D(Ta,t.pool)}function Oa(){var e=Ea();return e===null?null:{parent:M._currentValue,pool:e}}var ka=Error(s(460)),Aa=Error(s(474)),ja=Error(s(542)),Ma={then:function(){}};function Na(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Pa(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(un,un),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e;default:if(typeof t.status==`string`)t.then(un,un);else{if(e=G,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Ra(e),e}throw Ia=t,ka}}function Fa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ia=e,ka):e}}var Ia=null;function La(){if(Ia===null)throw Error(s(459));var e=Ia;return Ia=null,e}function Ra(e){if(e===ka||e===ja)throw Error(s(483))}var za=null,Ba=0;function Va(e){var t=Ba;return Ba+=1,za===null&&(za=[]),Pa(za,e,t)}function Ha(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ua(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=bi(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=wi(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===C&&Fa(a)===t.type)?(t=i(t,n.props),Ha(t,n),t.return=e,t):(t=Si(n.type,n.key,n.props,null,e.mode,r),Ha(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=Ei(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=Ci(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=wi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=Si(t.type,t.key,t.props,null,e.mode,n),Ha(n,t),n.return=e,n;case v:return t=Ei(t,e.mode,n),t.return=e,t;case C:return t=Fa(t),f(e,t,n)}if(de(t)||ce(t))return t=Ci(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Va(t),n);if(t.$$typeof===te)return f(e,ua(e,t),n);Ua(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case C:return n=Fa(n),p(e,t,n,r)}if(de(n)||ce(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Va(n),r);if(n.$$typeof===te)return p(e,t,ua(e,n),r);Ua(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case C:return r=Fa(r),m(e,t,n,r,i)}if(de(r)||ce(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Va(r),i);if(r.$$typeof===te)return m(e,t,n,ua(t,r),i);Ua(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),A&&Ri(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return A&&Ri(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),A&&Ri(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),A&&Ri(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return A&&Ri(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),A&&Ri(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===C&&Fa(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ha(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=Ci(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=Si(a.type,a.key,a.props,null,e.mode,c),Ha(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=Ei(a,e.mode,c),c.return=e,e=c}return o(e);case C:return a=Fa(a),b(e,r,a,c)}if(de(a))return h(e,r,a,c);if(ce(a)){if(l=ce(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,Va(a),c);if(a.$$typeof===te)return b(e,r,ua(e,a),c);Ua(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=wi(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ba=0;var i=b(e,t,n,r);return za=null,i}catch(t){if(t===ka||t===ja)throw t;var a=vi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ga=Wa(!0),Ka=Wa(!1),qa=!1;function Ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ya(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Xa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=hi(e),mi(e,null,n),t}return di(e,r,t,n),hi(e)}function Qa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}function $a(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var eo=!1;function to(){if(eo){var e=ba;if(e!==null)throw e}}function no(e,t,n,r){eo=!1;var i=e.updateQueue;qa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(q&f)===f:(r&f)===f){f!==0&&f===ya&&(eo=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:qa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Kl|=o,e.lanes=o,e.memoizedState=d}}function ro(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function io(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)ro(n[e],t)}var ao=he(null),oo=he(0);function so(e,t){e=Gl,D(oo,e),D(ao,t),Gl=e|t.baseLanes}function co(){D(oo,Gl),D(ao,ao.current)}function lo(){Gl=oo.current,E(ao),E(oo)}var uo=he(null),fo=null;function po(e){var t=e.alternate;D(N,N.current&1),D(uo,e),fo===null&&(t===null||ao.current!==null||t.memoizedState!==null)&&(fo=e)}function mo(e){D(N,N.current),D(uo,e),fo===null&&(fo=e)}function ho(e){e.tag===22?(D(N,N.current),D(uo,e),fo===null&&(fo=e)):go(e)}function go(){D(N,N.current),D(uo,uo.current)}function _o(e){E(uo),fo===e&&(fo=null),E(N)}var N=he(0);function vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yo=0,P=null,F=null,I=null,bo=!1,xo=!1,So=!1,Co=0,wo=0,To=null,Eo=0;function L(){throw Error(s(321))}function Do(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mr(e[n],t[n]))return!1;return!0}function Oo(e,t,n,r,i,a){return yo=a,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,w.H=e===null||e.memoizedState===null?Ws:Gs,So=!1,a=n(r,i),So=!1,xo&&(a=Ao(t,n,r,i)),ko(e),a}function ko(e){w.H=Us;var t=F!==null&&F.next!==null;if(yo=0,I=F=P=null,bo=!1,wo=0,To=null,t)throw Error(s(300));e===null||z||(e=e.dependencies,e!==null&&ca(e)&&(z=!0))}function Ao(e,t,n,r){P=e;var i=0;do{if(xo&&(To=null),wo=0,xo=!1,25<=i)throw Error(s(301));if(i+=1,I=F=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}w.H=Ks,a=t(n,r)}while(xo);return a}function jo(){var e=w.H,t=e.useState()[0];return t=typeof t.then==`function`?Lo(t):t,e=e.useState()[0],(F===null?null:F.memoizedState)!==e&&(P.flags|=1024),t}function Mo(){var e=Co!==0;return Co=0,e}function No(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Po(e){if(bo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}bo=!1}yo=0,I=F=P=null,xo=!1,wo=Co=0,To=null}function Fo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return I===null?P.memoizedState=I=e:I=I.next=e,I}function R(){if(F===null){var e=P.alternate;e=e===null?null:e.memoizedState}else e=F.next;var t=I===null?P.memoizedState:I.next;if(t!==null)I=t,F=e;else{if(e===null)throw P.alternate===null?Error(s(467)):Error(s(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},I===null?P.memoizedState=I=e:I=I.next=e}return I}function Io(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(e){var t=wo;return wo+=1,To===null&&(To=[]),e=Pa(To,e,t),t=P,(I===null?t.memoizedState:I.next)===null&&(t=t.alternate,w.H=t===null||t.memoizedState===null?Ws:Gs),e}function Ro(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Lo(e);if(e.$$typeof===te)return j(e)}throw Error(s(438,String(e)))}function zo(e){var t=null,n=P.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=P.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Io(),P.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=oe;return t.index++,n}function Bo(e,t){return typeof t==`function`?t(e):t}function Vo(e){return Ho(R(),F,e)}function Ho(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(yo&f)===f:(q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ya&&(d=!0);else if((yo&p)===p){u=u.next,p===ya&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,P.lanes|=p,Kl|=p;f=u.action,So&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,P.lanes|=f,Kl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!Mr(a,e.memoizedState)&&(z=!0,d&&(n=ba,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Uo(e){var t=R(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);Mr(a,t.memoizedState)||(z=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Wo(e,t,n){var r=P,i=R(),a=A;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!Mr((F||i).memoizedState,n);if(o&&(i.memoizedState=n,z=!0),i=i.queue,hs(qo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||I!==null&&I.memoizedState.tag&1){if(r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,i,n,t),null),G===null)throw Error(s(349));a||yo&127||Go(r,t,n)}return n}function Go(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=P.updateQueue,t===null?(t=Io(),P.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ko(e,t,n,r){t.value=n,t.getSnapshot=r,Jo(t)&&Yo(e)}function qo(e,t,n){return n(function(){Jo(t)&&Yo(e)})}function Jo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mr(e,n)}catch{return!0}}function Yo(e){var t=pi(e,2);t!==null&&hu(t,e,2)}function Xo(e){var t=Fo();if(typeof e==`function`){var n=e;if(e=n(),So){qe(!0);try{n()}finally{qe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:e},t}function Zo(e,t,n,r){return e.baseState=n,Ho(e,F,typeof r==`function`?r:Bo)}function Qo(e,t,n,r,i){if(Bs(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};w.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,$o(t,a)):(a.next=n.next,t.pending=n.next=a)}}function $o(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=w.T,o={};w.T=o;try{var s=n(i,r),c=w.S;c!==null&&c(o,s),es(e,t,s)}catch(n){ns(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),w.T=a}}else try{a=n(i,r),es(e,t,a)}catch(n){ns(e,t,n)}}function es(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){ts(e,t,n)},function(n){return ns(e,t,n)}):ts(e,t,n)}function ts(e,t,n){t.status=`fulfilled`,t.value=n,rs(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,$o(e,n)))}function ns(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,rs(t),t=t.next;while(t!==r)}e.action=null}function rs(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function is(e,t){return t}function as(e,t){if(A){var n=G.formState;if(n!==null){a:{var r=P;if(A){if(k){b:{for(var i=k,a=Gi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){k=cf(i.nextSibling),r=i.data===`F!`;break a}}qi(r)}r=!1}r&&(t=n[0])}}return n=Fo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:is,lastRenderedState:t},n.queue=r,n=Ls.bind(null,P,r),r.dispatch=n,r=Xo(!1),a=zs.bind(null,P,!1,r.queue),r=Fo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Qo.bind(null,P,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function os(e){return ss(R(),F,e)}function ss(e,t,n){if(t=Ho(e,t,is)[0],e=Vo(Bo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Lo(t)}catch(e){throw e===ka?ja:e}else r=t;t=R();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(P.flags|=2048,us(9,{destroy:void 0},cs.bind(null,i,n),null)),[r,a,e]}function cs(e,t){e.action=t}function ls(e){var t=R(),n=F;if(n!==null)return ss(t,n,e);R(),t=t.memoizedState,n=R();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function us(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=P.updateQueue,t===null&&(t=Io(),P.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ds(){return R().memoizedState}function fs(e,t,n,r){var i=Fo();P.flags|=e,i.memoizedState=us(1|t,{destroy:void 0},n,r===void 0?null:r)}function ps(e,t,n,r){var i=R();r=r===void 0?null:r;var a=i.memoizedState.inst;F!==null&&r!==null&&Do(r,F.memoizedState.deps)?i.memoizedState=us(t,a,n,r):(P.flags|=e,i.memoizedState=us(1|t,a,n,r))}function ms(e,t){fs(8390656,8,e,t)}function hs(e,t){ps(2048,8,e,t)}function gs(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=Io(),P.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function _s(e){var t=R().memoizedState;return gs({ref:t,nextImpl:e}),function(){if(W&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function vs(e,t){return ps(4,2,e,t)}function ys(e,t){return ps(4,4,e,t)}function bs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xs(e,t,n){n=n==null?null:n.concat([e]),ps(4,4,bs.bind(null,t,e),n)}function Ss(){}function Cs(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&Do(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ws(e,t){var n=R();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&Do(t,r[1]))return r[0];if(r=e(),So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r}function Ts(e,t,n){return n===void 0||yo&1073741824&&!(q&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),P.lanes|=e,Kl|=e,n)}function Es(e,t,n,r){return Mr(n,t)?n:ao.current===null?!(yo&42)||yo&1073741824&&!(q&261930)?(z=!0,e.memoizedState=n):(e=mu(),P.lanes|=e,Kl|=e,t):(e=Ts(e,n,r),Mr(e,t)||(z=!0),e)}function Ds(e,t,n,r,i){var a=T.p;T.p=a!==0&&8>a?a:8;var o=w.T,s={};w.T=s,zs(e,!1,t,n);try{var c=i(),l=w.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Rs(e,t,Ca(c,r),pu(e)):Rs(e,t,r,pu(e))}catch(n){Rs(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{T.p=a,o!==null&&s.types!==null&&(o.types=s.types),w.T=o}}function Os(){}function ks(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=As(e).queue;Ds(e,i,t,fe,n===null?Os:function(){return js(e),n(r)})}function As(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:fe},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function js(e){var t=As(e);t.next===null&&(t=e.alternate.memoizedState),Rs(e,t.next.queue,{},pu())}function Ms(){return j(Qf)}function Ns(){return R().memoizedState}function Ps(){return R().memoizedState}function Fs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=Xa(n);var r=Za(t,e,n);r!==null&&(hu(r,t,n),Qa(r,t,n)),t={cache:ha()},e.payload=t;return}t=t.return}}function Is(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Bs(e)?Vs(t,n):(n=fi(e,t,n,r),n!==null&&(hu(n,e,r),Hs(n,t,r)))}function Ls(e,t,n){Rs(e,t,n,pu())}function Rs(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bs(e))Vs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Mr(s,o))return di(e,t,i,0),G===null&&ui(),!1}catch{}if(n=fi(e,t,i,r),n!==null)return hu(n,e,r),Hs(n,t,r),!0}return!1}function zs(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Bs(e)){if(t)throw Error(s(479))}else t=fi(e,n,r,2),t!==null&&hu(t,e,2)}function Bs(e){var t=e.alternate;return e===P||t!==null&&t===P}function Vs(e,t){xo=bo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hs(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ut(e,n)}}var Us={readContext:j,use:Ro,useCallback:L,useContext:L,useEffect:L,useImperativeHandle:L,useLayoutEffect:L,useInsertionEffect:L,useMemo:L,useReducer:L,useRef:L,useState:L,useDebugValue:L,useDeferredValue:L,useTransition:L,useSyncExternalStore:L,useId:L,useHostTransitionStatus:L,useFormState:L,useActionState:L,useOptimistic:L,useMemoCache:L,useCacheRefresh:L};Us.useEffectEvent=L;var Ws={readContext:j,use:Ro,useCallback:function(e,t){return Fo().memoizedState=[e,t===void 0?null:t],e},useContext:j,useEffect:ms,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),fs(4194308,4,bs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fs(4194308,4,e,t)},useInsertionEffect:function(e,t){fs(4,2,e,t)},useMemo:function(e,t){var n=Fo();t=t===void 0?null:t;var r=e();if(So){qe(!0);try{e()}finally{qe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fo();if(n!==void 0){var i=n(t);if(So){qe(!0);try{n(t)}finally{qe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Is.bind(null,P,e),[r.memoizedState,e]},useRef:function(e){var t=Fo();return e={current:e},t.memoizedState=e},useState:function(e){e=Xo(e);var t=e.queue,n=Ls.bind(null,P,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ss,useDeferredValue:function(e,t){return Ts(Fo(),e,t)},useTransition:function(){var e=Xo(!1);return e=Ds.bind(null,P,e.queue,!0,!1),Fo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=P,i=Fo();if(A){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),G===null)throw Error(s(349));q&127||Go(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ms(qo.bind(null,r,a,e),[e]),r.flags|=2048,us(9,{destroy:void 0},Ko.bind(null,r,a,n,t),null),n},useId:function(){var e=Fo(),t=G.identifierPrefix;if(A){var n=Li,r=Ii;n=(r&~(1<<32-Je(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=Co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Eo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Ms,useFormState:as,useActionState:as,useOptimistic:function(e){var t=Fo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=zs.bind(null,P,!0,n),n.dispatch=t,[e,t]},useMemoCache:zo,useCacheRefresh:function(){return Fo().memoizedState=Fs.bind(null,P)},useEffectEvent:function(e){var t=Fo(),n={impl:e};return t.memoizedState=n,function(){if(W&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:j,use:Ro,useCallback:Cs,useContext:j,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Vo,useRef:ds,useState:function(){return Vo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){return Es(R(),F.memoizedState,e,t)},useTransition:function(){var e=Vo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:os,useActionState:os,useOptimistic:function(e,t){return Zo(R(),F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Gs.useEffectEvent=_s;var Ks={readContext:j,use:Ro,useCallback:Cs,useContext:j,useEffect:hs,useImperativeHandle:xs,useInsertionEffect:vs,useLayoutEffect:ys,useMemo:ws,useReducer:Uo,useRef:ds,useState:function(){return Uo(Bo)},useDebugValue:Ss,useDeferredValue:function(e,t){var n=R();return F===null?Ts(n,e,t):Es(n,F.memoizedState,e,t)},useTransition:function(){var e=Uo(Bo)[0],t=R().memoizedState;return[typeof e==`boolean`?e:Lo(e),t]},useSyncExternalStore:Wo,useId:Ns,useHostTransitionStatus:Ms,useFormState:ls,useActionState:ls,useOptimistic:function(e,t){var n=R();return F===null?(n.baseState=e,[e,n.queue.dispatch]):Zo(n,F,e,t)},useMemoCache:zo,useCacheRefresh:Ps};Ks.useEffectEvent=_s;function qs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Js={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=Xa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Za(e,i,r),t!==null&&(hu(t,e,r),Qa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=Xa(n);r.tag=2,t!=null&&(r.callback=t),t=Za(e,r,n),t!==null&&(hu(t,e,n),Qa(t,e,n))}};function Ys(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Nr(n,r)||!Nr(i,a):!0}function Xs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function Zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Qs(e){oi(e)}function $s(e){console.error(e)}function ec(e){oi(e)}function tc(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function nc(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function rc(e,t,n){return n=Xa(n),n.tag=3,n.payload={element:null},n.callback=function(){tc(e,t)},n}function ic(e){return e=Xa(e),e.tag=3,e}function ac(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){nc(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){nc(t,n,r),typeof i!=`function`&&(iu===null?iu=new Set([this]):iu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function oc(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&sa(t,n,i,!0),n=uo.current,n!==null){switch(n.tag){case 31:case 13:return fo===null?Du():n.alternate===null&&Y===0&&(Y=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,i)),!1;case 22:return n.flags|=65536,r===Ma?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,i)),!1}throw Error(s(435,n.tag))}return Gu(e,r,i),Du(),!1}if(A)return t=uo.current,t===null?(r!==Ki&&(t=Error(s(423),{cause:r}),$i(Oi(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=Oi(r,n),i=rc(e.stateNode,r,i),$a(e,i),Y!==4&&(Y=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Ki&&(e=Error(s(422),{cause:r}),$i(Oi(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=Oi(a,n),Zl===null?Zl=[a]:Zl.push(a),Y!==4&&(Y=2),t===null)return!0;r=Oi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=rc(n.stateNode,r,e),$a(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(iu===null||!iu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=ic(i),ac(i,e,n,r),$a(n,i),!1}n=n.return}while(n!==null);return!1}var sc=Error(s(461)),z=!1;function cc(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function lc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return la(t),r=Oo(e,t,n,o,a,i),s=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(A&&s&&Bi(t),t.flags|=1,cc(e,t,r,i),t.child)}function uc(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!yi(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,dc(e,t,a,r,i)):(e=Si(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Pc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?Nr:n,n(o,r)&&e.ref===t.ref)return Nc(e,t,i)}return t.flags|=1,e=bi(a,r),e.ref=t.ref,e.return=t,t.child=e}function dc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Nr(a,r)&&e.ref===t.ref)if(z=!1,t.pendingProps=r=a,Pc(e,i))e.flags&131072&&(z=!0);else return t.lanes=e.lanes,Nc(e,t,i)}return yc(e,t,n,r,i)}function fc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return mc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Da(t,a===null?null:a.cachePool),a===null?co():so(t,a),ho(t);else return r=t.lanes=536870912,mc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&Da(t,null),co(),go(t)):(Da(t,a.cachePool),so(t,a),go(t),t.memoizedState=null);return cc(e,t,i,n),t.child}function pc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mc(e,t,n,r,i){var a=Ea();return a=a===null?null:{parent:M._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&Da(t,null),co(),ho(t),e!==null&&sa(e,t,r,!0),t.childLanes=i,null}function hc(e,t){return t=Oc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gc(e,t,n){return Ga(t,e.child,null,n),e=hc(t,t.pendingProps),e.flags|=2,_o(t),t.memoizedState=null,e}function _c(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(A){if(r.mode===`hidden`)return e=hc(t,r),t.lanes=536870912,pc(null,e);if(mo(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return t.lanes=536870912,null}return hc(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(mo(t),i)if(t.flags&256)t.flags&=-257,t=gc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(z||sa(e,t,n,!1),i=(n&e.childLanes)!==0,z||i){if(r=G,r!==null&&(o=dt(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,pi(e,o),hu(r,e,o),sc;Du(),t=gc(e,t,n)}else e=a.treeContext,k=cf(o.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=hc(t,r),t.flags|=4096;return t}return e=bi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function vc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function yc(e,t,n,r,i){return la(t),n=Oo(e,t,n,r,void 0,i),r=Mo(),e!==null&&!z?(No(e,t,i),Nc(e,t,i)):(A&&r&&Bi(t),t.flags|=1,cc(e,t,n,i),t.child)}function bc(e,t,n,r,i,a){return la(t),t.updateQueue=null,n=Ao(t,r,n,i),ko(e),r=Mo(),e!==null&&!z?(No(e,t,a),Nc(e,t,a)):(A&&r&&Bi(t),t.flags|=1,cc(e,t,n,a),t.child)}function xc(e,t,n,r,i){if(la(t),t.stateNode===null){var a=gi,o=n.contextType;typeof o==`object`&&o&&(a=j(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Js,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ja(t),o=n.contextType,a.context=typeof o==`object`&&o?j(o):gi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(qs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Js.enqueueReplaceState(a,a.state,null),no(t,r,a,i),to(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=gi,typeof u==`object`&&u&&(o=j(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Xs(t,a,r,o),qa=!1;var f=t.memoizedState;a.state=f,no(t,r,a,i),to(),l=t.memoizedState,s||f!==l||qa?(typeof d==`function`&&(qs(t,n,d,r),l=t.memoizedState),(c=qa||Ys(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ya(e,t),o=t.memoizedProps,u=Zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=gi,typeof l==`object`&&l&&(c=j(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Xs(t,a,r,c),qa=!1,f=t.memoizedState,a.state=f,no(t,r,a,i),to();var p=t.memoizedState;o!==d||f!==p||qa||e!==null&&e.dependencies!==null&&ca(e.dependencies)?(typeof s==`function`&&(qs(t,n,s,r),p=t.memoizedState),(u=qa||Ys(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ca(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,vc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ga(t,e.child,null,i),t.child=Ga(t,null,n,i)):cc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Nc(e,t,i),e}function Sc(e,t,n,r){return Zi(),t.flags|=256,cc(e,t,n,r),t.child}var Cc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wc(e){return{baseLanes:e,cachePool:Oa()}}function Tc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Yl),e}function Ec(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(N.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(A){if(i?po(t):go(t),(e=k)?(e=rf(e,Gi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Fi===null?null:{id:Ii,overflow:Li},retryLane:536870912,hydrationErrors:null},n=Ti(e),n.return=t,t.child=n,Ui=t,k=null)):e=null,e===null)throw qi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(go(t),i=t.mode,c=Oc({mode:`hidden`,children:c},i),r=Ci(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(null,r)):(po(t),Dc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(po(t),t.flags&=-257,t=kc(e,t,n)):t.memoizedState===null?(go(t),c=r.fallback,i=t.mode,r=Oc({mode:`visible`,children:r.children},i),c=Ci(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ga(t,e.child,null,n),r=t.child,r.memoizedState=wc(n),r.childLanes=Tc(e,o,n),t.memoizedState=Cc,t=pc(null,r)):(go(t),t.child=e.child,t.flags|=128,t=null);else if(po(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,$i({value:r,source:null,stack:null}),t=kc(e,t,n)}else if(z||sa(e,t,n,!1),o=(n&e.childLanes)!==0,z||o){if(o=G,o!==null&&(r=dt(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,pi(e,r),hu(o,e,r),sc;af(c)||Du(),t=kc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,k=cf(c.nextSibling),Ui=t,A=!0,Wi=null,Gi=!1,e!==null&&Hi(t,e),t=Dc(t,r.children),t.flags|=4096);return t}return i?(go(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=bi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=Ci(c,i,n,null),c.flags|=2):c=bi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,pc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=wc(n):(i=c.cachePool,i===null?i=Oa():(l=M._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=Tc(e,o,n),t.memoizedState=Cc,pc(e.child,r)):(po(t),n=e.child,e=n.sibling,n=bi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=Oc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Oc(e,t){return e=vi(22,e,null,t),e.lanes=0,e}function kc(e,t,n){return Ga(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ac(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),aa(e.return,t,n)}function jc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Mc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=N.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,D(N,o),cc(e,t,r,n),r=A?Mi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ac(e,n,t);else if(e.tag===19)Ac(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),jc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}jc(t,!0,n,null,a,r);break;case`together`:jc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Nc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Kl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(sa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=bi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=bi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Pc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ca(e))):!0}function Fc(e,t,n){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ra(t,M,e.memoizedState.cache),Zi();break;case 27:case 5:Se(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ra(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,mo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(po(t),e=Nc(e,t,n),e===null?null:e.sibling):Ec(e,t,n):(po(t),t.flags|=128,null);po(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(sa(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Mc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),D(N,N.current),r)break;return null;case 22:return t.lanes=0,fc(e,t,n,t.pendingProps);case 24:ra(t,M,e.memoizedState.cache)}return Nc(e,t,n)}function Ic(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)z=!0;else{if(!Pc(e,n)&&!(t.flags&128))return z=!1,Fc(e,t,n);z=!!(e.flags&131072)}else z=!1,A&&t.flags&1048576&&zi(t,Mi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Fa(t.elementType),t.type=e,typeof e==`function`)yi(e)?(r=Zs(e,r),t.tag=1,t=xc(null,t,e,r,n)):(t.tag=0,t=yc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===S){t.tag=11,t=lc(null,t,e,r,n);break a}else if(i===ie){t.tag=14,t=uc(null,t,e,r,n);break a}}throw t=ue(e)||e,Error(s(306,t,``))}}return t;case 0:return yc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=Zs(r,t.pendingProps),xc(e,t,r,i,n);case 3:a:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ya(e,t),no(t,r,null,n);var o=t.memoizedState;if(r=o.cache,ra(t,M,r),r!==a.cache&&oa(t,[M],n,!0),to(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=Sc(e,t,r,n);break a}else if(r!==i){i=Oi(Error(s(424)),t),$i(i),t=Sc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(k=cf(e.firstChild),Ui=t,A=!0,Wi=null,Gi=!0,n=Ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Zi(),r===i){t=Nc(e,t,n);break a}cc(e,t,r,n)}t=t.child}return t;case 26:return vc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:A||(n=t.type,e=t.pendingProps,r=Bd(ve.current).createElement(n),r[_t]=t,r[vt]=e,Pd(r,n,e),O(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Se(t),e===null&&A&&(r=t.stateNode=ff(t.type,t.pendingProps,ve.current),Ui=t,Gi=!0,i=k,Zd(t.type)?(lf=i,k=cf(r.firstChild)):k=i),cc(e,t,t.pendingProps.children,n),vc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&A&&((i=r=k)&&(r=tf(r,t.type,t.pendingProps,Gi),r===null?i=!1:(t.stateNode=r,Ui=t,k=cf(r.firstChild),Gi=!1,i=!0)),i||qi(t)),Se(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Oo(e,t,jo,null,null,n),Qf._currentValue=i),vc(e,t),cc(e,t,r,n),t.child;case 6:return e===null&&A&&((e=n=k)&&(n=nf(n,t.pendingProps,Gi),n===null?e=!1:(t.stateNode=n,Ui=t,k=null,e=!0)),e||qi(t)),null;case 13:return Ec(e,t,n);case 4:return be(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ga(t,null,r,n):cc(e,t,r,n),t.child;case 11:return lc(e,t,t.type,t.pendingProps,n);case 7:return cc(e,t,t.pendingProps,n),t.child;case 8:return cc(e,t,t.pendingProps.children,n),t.child;case 12:return cc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ra(t,t.type,r.value),cc(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,la(t),i=j(i),r=r(i),t.flags|=1,cc(e,t,r,n),t.child;case 14:return uc(e,t,t.type,t.pendingProps,n);case 15:return dc(e,t,t.type,t.pendingProps,n);case 19:return Mc(e,t,n);case 31:return _c(e,t,n);case 22:return fc(e,t,n,t.pendingProps);case 24:return la(t),r=j(M),e===null?(i=Ea(),i===null&&(i=G,a=ha(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},Ja(t),ra(t,M,i)):((e.lanes&n)!==0&&(Ya(e,t),no(t,null,null,n),to()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,ra(t,M,r),r!==i.cache&&oa(t,[M],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ra(t,M,r))),cc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Lc(e){e.flags|=4}function Rc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Ia=Ma,Aa}else e.flags&=-16777217}function zc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Ia=Ma,Aa}function Bc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:at(),e.lanes|=t,Xl|=t)}function Vc(e,t){if(!A)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function B(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hc(e,t,n){var r=t.pendingProps;switch(Vi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return B(t),null;case 1:return B(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),ia(M),xe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xi(t)?Lc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qi())),B(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Lc(t),a===null?(B(t),Rc(t,i,null,r,n)):(B(t),zc(t,a))):a?a===e.memoizedState?(B(t),t.flags&=-16777217):(Lc(t),B(t),zc(t,a)):(e=e.memoizedProps,e!==r&&Lc(t),B(t),Rc(t,i,e,r,n)),null;case 27:if(Ce(t),n=ve.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}e=ge.current,Xi(t)?Ji(t,e):(e=ff(i,r,n),t.stateNode=e,Lc(t))}return B(t),null;case 5:if(Ce(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return B(t),null}if(a=ge.current,Xi(t))Ji(t,a);else{var o=Bd(ve.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[_t]=t,a[vt]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Lc(t)}}return B(t),Rc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Lc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ve.current,Xi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ui,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[_t]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||qi(t,!0)}else e=Bd(e).createTextNode(r),e[_t]=t,t.stateNode=e}return B(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Xi(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),e=!1}else n=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(_o(t),t):(_o(t),null);if(t.flags&128)throw Error(s(558))}return B(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=Xi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[_t]=t}else Zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;B(t),i=!1}else i=Qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(_o(t),t):(_o(t),null)}return _o(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bc(t,t.updateQueue),B(t),null);case 4:return xe(),e===null&&Sd(t.stateNode.containerInfo),B(t),null;case 10:return ia(t.type),B(t),null;case 19:if(E(N),r=t.memoizedState,r===null)return B(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Vc(r,!1);else{if(Y!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=vo(e),a!==null){for(t.flags|=128,Vc(r,!1),e=a.updateQueue,t.updateQueue=e,Bc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)xi(n,e),n=n.sibling;return D(N,N.current&1|2),A&&Ri(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Ie()>nu&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304)}else{if(!i)if(e=vo(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Bc(t,e),Vc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!A)return B(t),null}else 2*Ie()-r.renderingStartTime>nu&&n!==536870912&&(t.flags|=128,i=!0,Vc(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(B(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Ie(),e.sibling=null,n=N.current,D(N,i?n&1|2:n&1),A&&Ri(t,r.treeForkCount),e);case 22:case 23:return _o(t),lo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(B(t),t.subtreeFlags&6&&(t.flags|=8192)):B(t),n=t.updateQueue,n!==null&&Bc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&E(Ta),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ia(M),B(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Uc(e,t){switch(Vi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ia(M),xe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ce(t),null;case 31:if(t.memoizedState!==null){if(_o(t),t.alternate===null)throw Error(s(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(_o(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(N),null;case 4:return xe(),null;case 10:return ia(t.type),null;case 22:case 23:return _o(t),lo(),e!==null&&E(Ta),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ia(M),null;case 25:return null;default:return null}}function Wc(e,t){switch(Vi(t),t.tag){case 3:ia(M),xe();break;case 26:case 27:case 5:Ce(t);break;case 4:xe();break;case 31:t.memoizedState!==null&&_o(t);break;case 13:_o(t);break;case 19:E(N);break;case 10:ia(t.type);break;case 22:case 23:_o(t),lo(),e!==null&&E(Ta);break;case 24:ia(M)}}function Gc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Kc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function qc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{io(t,n)}catch(t){Z(e,e.return,t)}}}function Jc(e,t,n){n.props=Zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Yc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Xc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Zc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function Qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[vt]=t}catch(t){Z(e,e.return,t)}}function $c(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function el(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||$c(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=un));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}function rl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[_t]=e,t[vt]=n}catch(t){Z(e,e.return,t)}}var il=!1,V=!1,al=!1,ol=typeof WeakSet==`function`?WeakSet:Set,H=null;function sl(e,t){if(e=e.containerInfo,Rd=sp,e=Lr(e),Rr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,H=t;H!==null;)if(t=H,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,H=e;else for(;H!==null;){switch(t=H,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=Zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,H=e;break}H=t.return}}function cl(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Sl(e,n),r&4&&Gc(5,n);break;case 1:if(Sl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&qc(n),r&512&&Yc(n,n.return);break;case 3:if(Sl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{io(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&rl(n);case 26:case 5:Sl(e,n),t===null&&r&4&&Zc(n),r&512&&Yc(n,n.return);break;case 12:Sl(e,n);break;case 31:Sl(e,n),r&4&&pl(e,n);break;case 13:Sl(e,n),r&4&&ml(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||il,!r){t=t!==null&&t.memoizedState!==null||V,i=il;var a=V;il=r,(V=t)&&!a?wl(e,n,(n.subtreeFlags&8772)!=0):Sl(e,n),il=i,V=a}break;case 30:break;default:Sl(e,n)}}function ll(e){var t=e.alternate;t!==null&&(e.alternate=null,ll(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Tt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var U=null,ul=!1;function dl(e,t,n){for(n=n.child;n!==null;)fl(e,t,n),n=n.sibling}function fl(e,t,n){if(Ke&&typeof Ke.onCommitFiberUnmount==`function`)try{Ke.onCommitFiberUnmount(Ge,n)}catch{}switch(n.tag){case 26:V||Xc(n,t),dl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:V||Xc(n,t);var r=U,i=ul;Zd(n.type)&&(U=n.stateNode,ul=!1),dl(e,t,n),pf(n.stateNode),U=r,ul=i;break;case 5:V||Xc(n,t);case 6:if(r=U,i=ul,U=null,dl(e,t,n),U=r,ul=i,U!==null)if(ul)try{(U.nodeType===9?U.body:U.nodeName===`HTML`?U.ownerDocument.body:U).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{U.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:U!==null&&(ul?(e=U,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(U,n.stateNode));break;case 4:r=U,i=ul,U=n.stateNode.containerInfo,ul=!0,dl(e,t,n),U=r,ul=i;break;case 0:case 11:case 14:case 15:Kc(2,n,t),V||Kc(4,n,t),dl(e,t,n);break;case 1:V||(Xc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Jc(n,t,r)),dl(e,t,n);break;case 21:dl(e,t,n);break;case 22:V=(r=V)||n.memoizedState!==null,dl(e,t,n),V=r;break;default:dl(e,t,n)}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function ml(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function hl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(s(435,e.tag))}}function gl(e,t){var n=hl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function _l(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){U=c.stateNode,ul=!1;break a}break;case 5:U=c.stateNode,ul=!1;break a;case 3:case 4:U=c.stateNode.containerInfo,ul=!0;break a}c=c.return}if(U===null)throw Error(s(160));fl(a,o,i),U=null,ul=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)yl(t,e),t=t.sibling}var vl=null;function yl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:_l(t,e),bl(e),r&4&&(Kc(3,e,e.return),Gc(3,e),Kc(5,e,e.return));break;case 1:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&64&&il&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=vl;if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[wt]||a[_t]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[_t]=e,O(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[_t]=e,O(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Qc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),n!==null&&r&4&&Qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(_l(t,e),bl(e),r&512&&(V||n===null||Xc(n,n.return)),e.flags&32){i=e.stateNode;try{tn(i,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Qc(e,i,n===null?i:n.memoizedProps)),r&1024&&(al=!0);break;case 6:if(_l(t,e),bl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,i=vl,vl=gf(t.containerInfo),_l(t,e),vl=i,bl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}al&&(al=!1,xl(e));break;case 4:r=vl,vl=gf(e.stateNode.containerInfo),_l(t,e),bl(e),vl=r;break;case 12:_l(t,e),bl(e);break;case 31:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 13:_l(t,e),bl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(eu=Ie()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=il,d=V;if(il=u||i,V=d||l,_l(t,e),V=d,il=u,bl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||il||V||Cl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,gl(e,n))));break;case 19:_l(t,e),bl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,gl(e,r)));break;case 30:break;case 21:break;default:_l(t,e),bl(e)}}function bl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if($c(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;nl(e,el(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(tn(a,``),n.flags&=-33),nl(e,el(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;tl(e,el(e),o);break;default:throw Error(s(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;xl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)cl(e,t.alternate,t),t=t.sibling}function Cl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Kc(4,t,t.return),Cl(t);break;case 1:Xc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Jc(t,t.return,n),Cl(t);break;case 27:pf(t.stateNode);case 26:case 5:Xc(t,t.return),Cl(t);break;case 22:t.memoizedState===null&&Cl(t);break;case 30:Cl(t);break;default:Cl(t)}e=e.sibling}}function wl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:wl(i,a,n),Gc(4,a);break;case 1:if(wl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)ro(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&qc(a),Yc(a,a.return);break;case 27:rl(a);case 26:case 5:wl(i,a,n),n&&r===null&&o&4&&Zc(a),Yc(a,a.return);break;case 12:wl(i,a,n);break;case 31:wl(i,a,n),n&&o&4&&pl(i,a);break;case 13:wl(i,a,n),n&&o&4&&ml(i,a);break;case 22:a.memoizedState===null&&wl(i,a,n),Yc(a,a.return);break;case 30:break;default:wl(i,a,n)}t=t.sibling}}function Tl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ga(n))}function El(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e))}function Dl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ol(e,t,n,r),t=t.sibling}function Ol(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Dl(e,t,n,r),i&2048&&Gc(9,t);break;case 1:Dl(e,t,n,r);break;case 3:Dl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ga(e)));break;case 12:if(i&2048){Dl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else Dl(e,t,n,r);break;case 31:Dl(e,t,n,r);break;case 13:Dl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?Dl(e,t,n,r):(a._visibility|=2,kl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?Dl(e,t,n,r):Al(e,t),i&2048&&Tl(o,t);break;case 24:Dl(e,t,n,r),i&2048&&El(t.alternate,t);break;default:Dl(e,t,n,r)}}function kl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:kl(a,o,s,c,i),Gc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,kl(a,o,s,c,i)):u._visibility&2?kl(a,o,s,c,i):Al(a,o),i&&l&2048&&Tl(o.alternate,o);break;case 24:kl(a,o,s,c,i),i&&l&2048&&El(o.alternate,o);break;default:kl(a,o,s,c,i)}t=t.sibling}}function Al(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Al(n,r),i&2048&&Tl(r.alternate,r);break;case 24:Al(n,r),i&2048&&El(r.alternate,r);break;default:Al(n,r)}t=t.sibling}}var jl=8192;function Ml(e,t,n){if(e.subtreeFlags&jl)for(e=e.child;e!==null;)Nl(e,t,n),e=e.sibling}function Nl(e,t,n){switch(e.tag){case 26:Ml(e,t,n),e.flags&jl&&e.memoizedState!==null&&Gf(n,vl,e.memoizedState,e.memoizedProps);break;case 5:Ml(e,t,n);break;case 3:case 4:var r=vl;vl=gf(e.stateNode.containerInfo),Ml(e,t,n),vl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=jl,jl=16777216,Ml(e,t,n),jl=r):Ml(e,t,n));break;default:Ml(e,t,n)}}function Pl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Fl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Il(e),e=e.sibling}function Il(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Kc(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ll(e)):Fl(e);break;default:Fl(e)}}function Ll(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];H=r,Rl(r,e)}Pl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Kc(8,t,t.return),Ll(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ll(t));break;default:Ll(t)}e=e.sibling}}function Rl(e,t){for(;H!==null;){var n=H;switch(n.tag){case 0:case 11:case 15:Kc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:ga(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,H=r;else a:for(n=e;H!==null;){r=H;var i=r.sibling,a=r.return;if(ll(r),r===n){H=null;break a}if(i!==null){i.return=a,H=i;break a}H=a}}}var zl={getCacheForType:function(e){var t=j(M),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return j(M).controller.signal}},Bl=typeof WeakMap==`function`?WeakMap:Map,W=0,G=null,K=null,q=0,J=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Y=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=null,Ql=null,$l=!1,eu=0,tu=0,nu=1/0,ru=null,iu=null,X=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return W&2&&q!==0?q&-q:w.T===null?mt():dd()}function mu(){if(Yl===0)if(!(q&536870912)||A){var e=$e;$e<<=1,!($e&3932160)&&($e=262144),Yl=e}else Yl=536870912;return e=uo.current,e!==null&&(e.flags|=32),Yl}function hu(e,t,n){(e===G&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,q,Yl,!1)),st(e,n),(!(W&2)||e!==G)&&(e===G&&(!(W&2)&&(ql|=n),Y===4&&yu(e,q,Yl,!1)),rd(e))}function gu(e,t,n){if(W&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||rt(e,t),i=r?Au(e,t):Ou(e,t,!0),a=r;do{if(i===0){Ul&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!vu(n)){i=Ou(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Zl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,o).flags|=256),o=Ou(c,o,!1),o!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=a,ql|=a,i=4;break a}a=Ql,Ql=i,a!==null&&(Ql===null?Ql=a:Ql.push.apply(Ql,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Yl,!Hl);break a;case 2:Ql=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=eu+300-Ie(),10<i)){if(yu(r,t,Yl,!Hl),nt(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,`Throttled`,-0,0),i);break a}_u(r,n,Ql,ru,$l,t,Yl,ql,Xl,Hl,a,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:un},Nl(t,a,d);var m=(a&62914560)===a?eu-Ie():(a&4194048)===a?tu-Ie():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~Jl,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Je(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&lt(e,n,t)}function bu(){return W&6?!0:(id(0,!1),!1)}function xu(){if(K!==null){if(J===0)var e=K.return;else e=K,na=ta=null,Po(e),za=null,Ba=0,e=K;for(;e!==null;)Wc(e.alternate,e),e=e.return;K=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),G=e,K=n=bi(e.current,null),q=t,J=0,Vl=null,Hl=!1,Ul=rt(e,t),Wl=!1,Xl=Yl=Jl=ql=Kl=Y=0,Ql=Zl=null,$l=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Je(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ui(),n}function Cu(e,t){P=null,w.H=Us,t===ka||t===ja?(t=La(),J=3):t===Aa?(t=La(),J=4):J=t===sc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,K===null&&(Y=1,tc(e,Oi(t,e.current)))}function wu(){var e=uo.current;return e===null?!0:(q&4194048)===q?fo===null:(q&62914560)===q||q&536870912?e===fo:!1}function Tu(){var e=w.H;return w.H=Us,e===null?Us:e}function Eu(){var e=w.A;return w.A=zl,e}function Du(){Y=4,Hl||(q&4194048)!==q&&uo.current!==null||(Ul=!0),!(Kl&134217727)&&!(ql&134217727)||G===null||yu(G,q,Yl,!1)}function Ou(e,t,n){var r=W;W|=2;var i=Tu(),a=Eu();(G!==e||q!==t)&&(ru=null,Su(e,t)),t=!1;var o=Y;a:do try{if(J!==0&&K!==null){var s=K,c=Vl;switch(J){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:uo.current===null&&(t=!0);var l=J;if(J=0,Vl=null,Pu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=J,J=0,Vl=null,Pu(e,s,c,l)}}ku(),o=Y;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,na=ta=null,W=r,w.H=i,w.A=a,K===null&&(G=null,q=0,ui()),o}function ku(){for(;K!==null;)Mu(K)}function Au(e,t){var n=W;W|=2;var r=Tu(),i=Eu();G!==e||q!==t?(ru=null,nu=Ie()+500,Su(e,t)):Ul=rt(e,t);a:do try{if(J!==0&&K!==null){t=K;var a=Vl;b:switch(J){case 1:J=0,Vl=null,Pu(e,t,a,1);break;case 2:case 9:if(Na(a)){J=0,Vl=null,Nu(t);break}t=function(){J!==2&&J!==9||G!==e||(J=7),rd(e)},a.then(t,t);break a;case 3:J=7;break a;case 4:J=5;break a;case 7:Na(a)?(J=0,Vl=null,Nu(t)):(J=0,Vl=null,Pu(e,t,a,7));break;case 5:var o=null;switch(K.tag){case 26:o=K.memoizedState;case 5:case 27:var c=K;if(o?Wf(o):c.stateNode.complete){J=0,Vl=null;var l=c.sibling;if(l!==null)K=l;else{var u=c.return;u===null?K=null:(K=u,Fu(u))}break b}}J=0,Vl=null,Pu(e,t,a,5);break;case 6:J=0,Vl=null,Pu(e,t,a,6);break;case 8:xu(),Y=6;break a;default:throw Error(s(462))}}ju();break}catch(t){Cu(e,t)}while(1);return na=ta=null,w.H=r,w.A=i,W=n,K===null?(G=null,q=0,ui(),Y):0}function ju(){for(;K!==null&&!Pe();)Mu(K)}function Mu(e){var t=Ic(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=bc(n,t,t.pendingProps,t.type,void 0,q);break;case 11:t=bc(n,t,t.pendingProps,t.type.render,t.ref,q);break;case 5:Po(t);default:Wc(n,t),t=K=xi(t,Gl),t=Ic(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Fu(e):K=t}function Pu(e,t,n,r){na=ta=null,Po(t),za=null,Ba=0;var i=t.return;try{if(oc(e,i,t,n,q)){Y=1,tc(e,Oi(n,e.current)),K=null;return}}catch(t){if(i!==null)throw K=i,t;Y=1,tc(e,Oi(n,e.current)),K=null;return}t.flags&32768?(A||r===1?e=!0:Ul||q&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=uo.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Hl);return}e=t.return;var n=Hc(t.alternate,t,Gl);if(n!==null){K=n;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);Y===0&&(Y=5)}function Iu(e,t){do{var n=Uc(e.alternate,e);if(n!==null){n.flags&=32767,K=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){K=e;return}K=e=n}while(e!==null);Y=6,K=null}function Lu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Hu();while(X!==0);if(W&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=li,ct(e,n,a,o,c,l),e===G&&(K=G=null,q=0),ou=t,au=e,su=n,cu=a,lu=i,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Be,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=w.T,w.T=null,i=T.p,T.p=2,o=W,W|=4;try{sl(e,t,n)}finally{W=o,T.p=i,w.T=r}}X=1,Ru(),zu(),Bu()}}function Ru(){if(X===1){X=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{yl(t,e);var a=zd,o=Lr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Ir(s.ownerDocument.documentElement,s)){if(c!==null&&Rr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Fr(s,h),v=Fr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{W=i,T.p=r,w.T=n}}e.current=t,X=2}}function zu(){if(X===2){X=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=w.T,w.T=null;var r=T.p;T.p=2;var i=W;W|=4;try{cl(e,t.alternate,t)}finally{W=i,T.p=r,w.T=n}}X=3}}function Bu(){if(X===4||X===3){X=0,Fe();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?X=5:(X=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(iu=null),pt(n),t=t.stateNode,Ke&&typeof Ke.onCommitFiberRoot==`function`)try{Ke.onCommitFiberRoot(Ge,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=w.T,i=T.p,T.p=2,w.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{w.T=t,T.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ga(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(X!==5)return!1;var e=au,t=cu;cu=0;var n=pt(su),r=w.T,i=T.p;try{T.p=32>n?32:n,w.T=null,n=lu,lu=null;var a=au,o=su;if(X=0,ou=au=null,su=0,W&6)throw Error(s(331));var c=W;if(W|=4,Il(a.current),Ol(a,a.current,o,n),W=c,id(0,!1),Ke&&typeof Ke.onPostCommitFiberRoot==`function`)try{Ke.onPostCommitFiberRoot(Ge,a)}catch{}return!0}finally{T.p=i,w.T=r,Vu(e,t)}}function Wu(e,t,n){t=Oi(n,t),t=rc(e.stateNode,t,2),e=Za(e,t,2),e!==null&&(st(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(iu===null||!iu.has(r))){e=Oi(n,e),n=ic(2),r=Za(t,n,2),r!==null&&(ac(n,r,t,e),st(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Bl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,G===e&&(q&n)===n&&(Y===4||Y===3&&(q&62914560)===q&&300>Ie()-eu?!(W&2)&&Su(e,0):Jl|=n,Xl===q&&(Xl=0)),rd(e)}function qu(e,t){t===0&&(t=at()),e=pi(e,t),e!==null&&(st(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return Me(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Je(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=q,a=nt(r,r===G?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||rt(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=Ie(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}X!==0&&X!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Je(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=it(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=G,n=q,n=nt(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ne(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||rt(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Ne(r),pt(n)){case 2:case 8:n=ze;break;case 32:n=Be;break;case 268435456:n=He;break;default:n=Be}return r=cd.bind(null,e),n=Me(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Ne(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(X!==0&&X!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=q;return r=nt(e,e===G?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,Ie()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){W&6?Me(Re,ad):od()})}function dd(){if(nd===0){var e=ya;e===0&&(e=Qe,Qe<<=1,!(Qe&261888)&&(Qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:ln(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[vt]||null).action),o=r.submitter;o&&(t=(t=o[vt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new jn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);ks(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),ks(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ii.length;hd++){var gd=ii[hd];ai(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ai(Xr,`onAnimationEnd`),ai(Zr,`onAnimationIteration`),ai(Qr,`onAnimationStart`),ai(`dblclick`,`onDoubleClick`),ai(`focusin`,`onFocus`),ai(`focusout`,`onBlur`),ai($r,`onTransitionRun`),ai(ei,`onTransitionStart`),ai(ti,`onTransitionCancel`),ai(ni,`onTransitionEnd`),Nt(`onMouseEnter`,[`mouseout`,`mouseover`]),Nt(`onMouseLeave`,[`mouseout`,`mouseover`]),Nt(`onPointerEnter`,[`pointerout`,`pointerover`]),Nt(`onPointerLeave`,[`pointerout`,`pointerover`]),Mt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Mt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Mt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Mt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Mt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){oi(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[bt];n===void 0&&(n=t[bt]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,At.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!bn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Et(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}_n(function(){var r=a,i=fn(n),o=[];a:{var s=ri.get(e);if(s!==void 0){var c=jn,u=e;switch(e){case`keypress`:if(En(n)===0)break a;case`keydown`:case`keyup`:c=Yn;break;case`focusin`:u=`focus`,c=Bn;break;case`focusout`:u=`blur`,c=Bn;break;case`beforeblur`:case`afterblur`:c=Bn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Rn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=zn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Zn;break;case Xr:case Zr:case Qr:c=Vn;break;case ni:c=Qn;break;case`scroll`:case`scrollend`:c=Nn;break;case`wheel`:c=$n;break;case`copy`:case`cut`:case`paste`:c=Hn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=Xn;break;case`toggle`:case`beforetoggle`:c=er}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=vn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==dn&&(u=n.relatedTarget||n.fromElement)&&(Et(u)||u[yt]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?Et(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=Rn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Xn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:Ot(c),h=u==null?s:Ot(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,Et(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Dd,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Od(o,s,c,d,!1),u!==null&&f!==null&&Od(o,f,u,d,!0)}}a:{if(s=r?Ot(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=br;else if(mr(s))if(xr)v=Ar;else{v=Or;var y=Dr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&on(r.elementType)&&(v=br):v=kr;if(v&&=v(e,r)){hr(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Zt(s,`number`,s.value)}switch(y=r?Ot(r):window,e){case`focusin`:(mr(y)||y.contentEditable===`true`)&&(Br=y,Vr=r,Hr=null);break;case`focusout`:Hr=Vr=Br=null;break;case`mousedown`:Ur=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Ur=!1,Wr(o,n,i);break;case`selectionchange`:if(zr)break;case`keydown`:case`keyup`:Wr(o,n,i)}var b;if(nr)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else ur?cr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(ar&&n.locale!==`ko`&&(ur||x!==`onCompositionStart`?x===`onCompositionEnd`&&ur&&(b=Tn()):(Sn=i,Cn=`value`in Sn?Sn.value:Sn.textContent,ur=!0)),y=Ed(r,x),0<y.length&&(x=new Un(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=lr(n),b!==null&&(x.data=b)))),(b=ir?dr(e,n):fr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new Un(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),md(o,e,r,n,i)}yd(o,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=vn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=vn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=vn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=vn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&tn(e,``+r);break;case`className`:zt(e,`class`,r);break;case`tabIndex`:zt(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:zt(e,n,r);break;case`style`:an(e,r,a);break;case`data`:if(t!==`object`){zt(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,i.name,i,null),$(e,t,`formEncType`,i.formEncType,i,null),$(e,t,`formMethod`,i.formMethod,i,null),$(e,t,`formTarget`,i.formTarget,i,null)):($(e,t,`encType`,i.encType,i,null),$(e,t,`method`,i.method,i,null),$(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=ln(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=un);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=ln(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Rt(e,`popover`,r);break;case`xlinkActuate`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Bt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Bt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Rt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=sn.get(n)||n,Rt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:an(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?tn(e,r):(typeof r==`number`||typeof r==`bigint`)&&tn(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=un);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!jt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[vt]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Rt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,a,o,n,null)}}i&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:$(e,t,r,d,n,null)}}Xt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in Q(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:$(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&Qt(e,!!r,n,!0):Qt(e,!!r,t,!1);return;case`textarea`:for(o in Q(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:$(e,t,o,c,n,null)}en(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:$(e,t,u,r,n,null)}return;default:if(on(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Yt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||$(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&$(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?Qt(e,!!n,n?[]:``,!1):Qt(e,!!n,t,!0)):Qt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&$(e,t,o,i,r,a)}$t(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(on(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[wt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),Tt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[wt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Tt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=T.d;T.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=Dt(e);t!==null&&t.tag===5&&t.type===`form`?js(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Jt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Jt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Jt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Jt(n.imageSizes)+`"]`)):i+=`[href="`+Jt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),O(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Jt(r)+`"][href="`+Jt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),O(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=kt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);O(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=kt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),O(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ve.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=kt(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=kt(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=kt(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Jt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),O(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Jt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Jt(n.href)+`"]`);if(r)return t.instance=r,O(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),O(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,O(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),O(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,O(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),O(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[wt]||a[_t]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,O(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),O(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:te,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=vi(3,null,null,t),e.current=a,a.stateNode=e,t=ha(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ja(a),e}function tp(e){return e?(e=gi,e):gi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Xa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Za(e,r,t),n!==null&&(hu(n,e,t),Qa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=pi(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=ft(t);var n=pi(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=2,up(e,t,n,r)}finally{T.p=a,w.T=i}}function lp(e,t,n,r){var i=w.T;w.T=null;var a=T.p;try{T.p=8,up(e,t,n,r)}finally{T.p=a,w.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Dt(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=tt(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Je(o);s.entanglements[1]|=c,o&=~c}rd(a),!(W&6)&&(nu=Ie()+500,id(0,!1))}}break;case 31:case 13:s=pi(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=fn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=Et(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Le()){case Re:return 2;case ze:return 8;case Be:case Ve:return 32;case He:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Dt(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=Et(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,ht(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);dn=r,n.target.dispatchEvent(r),dn=null}else return t=Dt(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Dt(n);a!==null&&(e.splice(t,3),t-=3,ks(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[vt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[vt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[yt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=mt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.5`)throw Error(s(527,Lp,`19.2.5`));T.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.5`,rendererPackageName:`react-dom`,currentDispatcherRef:w,reconcilerVersion:`19.2.5`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ge=zp.inject(Rp),Ke=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Qs,a=$s,o=ec;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[yt]=t.current,Sd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=n(),u=c(),d=[{label:`Pre-Work`,days:[{number:1,label:`Day 1`,title:`What Is AI?`,subtitle:`Testing limits, building intuition`,color:`#f59e0b`,sections:[{heading:`5 Curiosity Questions`,description:`Asked AI things I genuinely wanted to know — no code, just curiosity.`,qa:[{q:`Why does music give people chills?`,a:`That "chills" feeling from music — often called frisson — is a mix of brain chemistry, prediction, and emotion all firing at once.

🎧 What's happening in your brain

When a song gives you chills, your brain's reward system (the same one involved in food, love, and even addiction) lights up. It releases dopamine, a chemical tied to pleasure and motivation.

Key areas involved:
  • Auditory cortex → processes the sound
  • Nucleus accumbens → handles reward/pleasure
  • Amygdala → processes emotion

That combo creates a powerful emotional + physical reaction.

🎼 The "prediction" trick

Your brain is constantly trying to predict what comes next in music. Chills often happen when:
  • A song builds tension and then releases it (like a beat drop)
  • A singer hits an unexpected note
  • A harmony resolves in a surprising but satisfying way

It's like your brain goes: "Oh! I didn't see that coming — but I love it."

❤️ Emotional connection

Music taps into memory and identity:
  • A song might remind you of a person, place, or moment
  • Lyrics might feel like they're telling your story
  • Even without words, melodies can mimic human emotion (like crying or excitement)

That emotional hit amplifies the physical response.

🧬 Why not everyone gets chills

Not everyone experiences this strongly. People who do tend to have:
  • More connectivity between emotional and auditory brain regions
  • Higher sensitivity to aesthetic experiences (art, beauty, etc.)

⚡ Why it feels physical (goosebumps)

The chills themselves — goosebumps — are part of an old fight-or-flight response. Your body reacts as if something intense or meaningful is happening, even though it's "just" music.`},{q:`Explain compound interest like I'm 15`,a:`Compound interest = earning interest on your interest.

Instead of just making money from your original amount, you also make money from the extra money you already earned.

🧠 Think of it like a snowball

Imagine rolling a snowball:
  • At first, it's small
  • As it rolls, it picks up more snow
  • Then it gets bigger → so it picks up snow faster

That's exactly how compound interest works with money.

🔢 Simple example

Let's say:
  • You start with $100
  • You earn 10% interest per year

Year 1:
  • 10% of $100 = $10
  • Total = $110

Year 2:
  • Now you earn 10% of $110 (not $100!)
  • That's $11
  • Total = $121

Year 3:
  • 10% of $121 = $12.10
  • Total = $133.10

See what's happening? Your money is growing faster each year.

⚡ Why it matters
  • The earlier you start, the more powerful it becomes
  • Even small amounts can grow big over time
  • It's basically "money making money for you"

🚨 Quick reality check

Compound interest works both ways:
  • 👍 Savings/investments → you gain money
  • 👎 Debt (like credit cards) → it grows against you just as fast`},{q:`What happens to your body when you don't sleep?`,a:`Sleep isn't just "rest" — it's when your body does maintenance. Skip it, and things start breaking down fast.

😴 What sleep normally does

While you sleep, your body:
  • Repairs tissues and muscles
  • Balances hormones (like cortisol & melatonin)
  • Strengthens your immune system
  • "Cleans" waste from your brain

Miss that, and the effects stack up.

⏳ After 24 hours without sleep
  • Feels like being legally drunk (slower reaction time)
  • Trouble focusing, remembering, making decisions
  • Mood swings, irritability
  • Higher stress hormone (cortisol)

🧠 After 1–2 days
  • Micro-sleeps (your brain briefly shuts off without warning)
  • Worse memory and confusion
  • Increased anxiety or even mild paranoia
  • Your immune system starts weakening

⚠️ After 2–3+ days
  • Hallucinations (seeing/hearing things)
  • Major emotional instability
  • Poor coordination and speech
  • Your brain struggles to tell what's real

🧬 What's happening inside your body
  • Brain: Waste builds up → "brain fog"
  • Hormones: Hunger hormones go crazy → you crave junk food
  • Heart: Blood pressure and strain increase
  • Immune system: You get sick more easily

😵 Long-term sleep deprivation

If it becomes a habit:
  • Higher risk of heart disease, diabetes, and depression
  • Weight gain (your body stores more fat)
  • Lower motivation and mental health decline

🧠 Simple way to think about it

Not sleeping is like:
  • Running your phone at 1% battery
  • With 50 apps open
  • While it's overheating

Eventually, something crashes.`},{q:`What's the difference between a recession and a depression?`,a:`📉 Recession vs. Depression (simple version)

🟡 Recession = a slowdown

A recession is when the economy shrinks for a while (usually defined as two quarters in a row of falling GDP).

What it feels like:
  • Businesses make less money
  • Some layoffs happen
  • People spend less
  • It usually lasts months to a couple years

👉 Think: the economy is sick, but still functioning.

🔴 Depression = a collapse

A depression is a much deeper, longer, and more severe downturn.

What it looks like:
  • Massive unemployment (like 20%+)
  • Businesses closing everywhere
  • Banks failing
  • Lasts years, not months

The most famous example is the Great Depression.

👉 Think: the economy isn't just sick — it's in critical condition.

⚖️ Key differences

  • Severity:      Recession = Moderate      |  Depression = Extreme
  • Duration:      Recession = Months–years  |  Depression = Many years
  • Unemployment:  Recession = Rises         |  Depression = Skyrockets
  • Business:      Recession = Some struggle |  Depression = Widespread collapse

🧠 Easy analogy

  • Recession = catching the flu 🤒
  • Depression = being in the ICU 🏥

Both are bad — but one is on a completely different level.`},{q:`Why do we dream?`,a:`Dreaming is one of those things where science has strong theories — but no single final answer. What researchers agree on is that dreams aren't random noise; they seem to serve a few important purposes.

🧠 1) Memory & learning

While you sleep — especially during REM sleep — your brain:
  • Replays parts of your day
  • Strengthens important memories
  • Tosses out less useful information

Dreams may be your brain's "highlight reel" while it organizes what you learned.

❤️ 2) Processing emotions

Dreams often feel intense because they help you work through emotions:
  • Stressful events
  • Fears or anxiety
  • Big life changes

Your brain is basically asking: "How do I feel about this?" and running simulations.

🎭 3) Mental simulation ("practice mode")

Dreams let you:
  • Practice reactions to danger (like nightmares)
  • Explore situations without real risk
  • Try out ideas creatively

It's like a built-in VR simulator for your brain.

🎨 4) Creativity boost

Because your brain isn't limited by logic while dreaming:
  • Ideas mix in weird ways
  • You make unusual connections
  • Some people wake up with solutions or inspiration

(A lot of artists and inventors have gotten ideas from dreams.)

⚡ Why dreams feel so weird
  • The logical part of your brain is quieter
  • The emotional & visual parts are very active
  • So things feel real… even when they make no sense

🧠 Simple way to think about it

Dreaming is like your brain:
  • Sorting files 📂
  • Processing feelings ❤️
  • Running simulations 🎮
  • And occasionally getting creative 🎨

All at once.`}]},{heading:`Testing Its Limits`,description:`Tried to find where AI breaks down or makes things up.`,qa:[{q:`What did I have for dinner last night?`,a:`I don't have any record of what you ate last night — and I'm definitely not secretly watching your dinner 😄

If you want to figure it out, a few quick clues usually help:
  • Check recent receipts or food delivery apps
  • Look at photos (people often snap meals without thinking)
  • Think about your routine — did you cook, go out, or grab something quick?

If you tell me what you think it might've been, I can help you piece it together.`},{q:`Count every letter in 'onomatopoeia'`,a:`onomatopoeia has 12 letters.`},{q:`What's happening right now on my street?`,a:`I don't have access to live cameras or real-time info about your exact street, so I can't see what's happening there right now.

If you're trying to figure it out, a few practical ways:
  • Look outside (old-school but effective)
  • Check local apps like Nextdoor or Citizen for nearby activity
  • Search your city's police/fire social feeds or scanner updates
  • If you hear something concerning (sirens, etc.), it's okay to stay cautious and keep some distance

If you tell me what you're noticing (noise, lights, etc.), I can help you guess what might be going on.`}]},{heading:`Day 1 Takeaways`,description:`What I noticed after my first real intentional conversation with AI.`,qa:[{q:`One thing AI was surprisingly good at`,a:`Every limit test I threw at it — what I had for dinner, what's on my street — it admitted it didn't know. No hallucinating, no making things up, no confident wrong answers. And when I asked it to count the letters in "onomatopoeia," it got it right: 12. The curiosity questions were genuinely solid too. Frisson, compound interest, sleep deprivation, dreams — all detailed, well-organized, and actually made sense. I came in skeptical and left impressed.`},{q:`One thing AI got wrong — and how I knew`,a:`Honestly? It didn't get anything technically wrong today. The letter count was right. The limit questions it handled with humility. But I noticed something — every single answer had the exact same structure. Emoji headers. Bullet points. A "simple way to think about it" closer. The content was good, but the format was on autopilot. Once you see the template, you can't unsee it. That's not wrong exactly — but it's worth knowing. It's polished, not personal.`}]}]},{number:2,label:`Day 2`,title:`How Builders Work With AI`,subtitle:`Prompting with intention`,color:`#34d399`,sections:[{heading:`Exercise 1: Vague vs. Specific`,description:`Ask AI the same thing two different ways. Compare the outputs side by side.`,qa:[{q:`Round 1 — Vague: "Write about dogs"`,a:`🐶 Dogs: Companions, Workers, and Family

Dogs have lived alongside humans for thousands of years, evolving from wolves into one of the most diverse and beloved animals on the planet. Scientifically known as Canis lupus familiaris, dogs aren't just pets — they're partners. From ancient hunting companions to modern-day service animals, they've adapted to fit almost every role humans could ask of them.

🧠 Smart and Social

Dogs are incredibly tuned in to people. They can read facial expressions, follow pointing gestures, and even pick up on emotional cues. That's why many dogs seem to "know" when you're happy, stressed, or upset. Their intelligence varies by breed and individual, but many can learn commands, routines, and even complex tasks.

🏡 Roles Dogs Play

Dogs aren't one-size-fits-all — they serve many purposes:
  • Companions: Loyal pets that provide comfort and friendship
  • Working dogs: Herd livestock, guard property, or assist in hunting
  • Service dogs: Help people with disabilities navigate daily life
  • Therapy dogs: Visit hospitals or schools to boost emotional well-being

Each role highlights a different strength, whether it's physical ability, trainability, or emotional sensitivity.

❤️ Why People Love Dogs

There's a reason dogs are often called "man's best friend." They offer:
  • Unconditional loyalty
  • Consistent companionship
  • A sense of routine and responsibility

Spending time with dogs can even reduce stress and improve mood — something many owners feel instinctively.

🐕 A World of Variety

There are hundreds of dog breeds, from tiny Chihuahuas to massive Great Danes. Some are built for speed, others for strength, and some just for cuddling on the couch. Mixed-breed dogs, often found in shelters, combine traits in unique and unpredictable ways — and can make just as wonderful companions.

Dogs aren't just animals we live with — they're part of our lives, our routines, and often our families. Whether working in the field or napping on the couch, they've earned their place beside us.`},{q:`Round 2 — Specific: "Write a 3-paragraph article about why golden retrievers are the most popular family dog in America. Include one statistic. Tone: informative but warm. Audience: someone deciding what breed to get."`,a:`Golden retrievers have earned their reputation as one of the most popular family dogs in the United States for good reason. According to the American Kennel Club, golden retrievers consistently rank among the top 5 most popular dog breeds nationwide — a reflection of how widely loved and trusted they are. Originally bred as hunting companions, they've evolved into dependable, easygoing pets that adapt well to a variety of households, from active families to quieter homes.

One of the biggest reasons people choose golden retrievers is their temperament. They are known for being friendly, patient, and especially gentle with children, which makes them a strong choice for first-time dog owners. Goldens are also highly intelligent and eager to please, meaning they tend to pick up training quickly and respond well to positive reinforcement. Whether it's basic commands or more advanced tasks, their cooperative nature makes everyday life with them smoother and more enjoyable.

Beyond personality, golden retrievers fit naturally into family routines. They love being involved — whether that's going on walks, playing in the yard, or simply relaxing nearby. While they do require regular exercise and grooming, many families find the trade-off well worth it for their loyalty and companionship. If you're looking for a dog that is affectionate, reliable, and great with people of all ages, a golden retriever is one of the safest and most rewarding choices you can make.`},{q:`Which output is more useful? Why?`,a:`The three-paragraph golden retriever piece — by a mile. The first answer just talked about dogs. It was technically correct but you couldn't do anything with it. The second gave you something specific enough to act on — a real audience, a real argument, a real statistic. That's the difference between information and useful information.`},{q:`What specifically made the second prompt better?`,a:`Five things, and they all compounded on each other.

First, it had an audience. "Someone deciding what breed to get" told AI exactly who it was writing for — not dog experts, not kids, someone at a decision point. That one detail changed the whole angle.

Second, it had a format. Three paragraphs. AI knew exactly how much to write and how to structure it — no rambling, no bullet dumps.

Third, it had a tone. "Informative but warm" is specific enough to actually mean something. The vague prompt got a neutral encyclopedic voice. The specific one felt like a recommendation from someone who actually likes dogs.

Fourth, it had a goal baked in. The statistic requirement forced AI to include a real data point instead of staying vague. That one word — "include" — added credibility to the whole piece.

Fifth, it had a subject, not just a topic. "Write about dogs" is a topic. "Why golden retrievers are the most popular family dog in America" is a subject with a point of view. AI had something to argue, not just describe.

The vague prompt gave AI permission to write anything. The specific prompt gave it a job.`},{q:`What would happen if you added even more detail?`,a:`It would keep getting better — up to a point. More detail means less guessing. If I had added a word count, a specific statistic source, a required subheading, or a call to action at the end, each one would have tightened the output further. But there's a ceiling. At some point you're writing the article yourself inside the prompt, and AI is just filling in sentences. The sweet spot is enough detail to close off the wrong directions without writing the thing for it.`}]},{heading:`Exercise 2: The Iteration Loop`,description:`Prompt → read → feedback → improve. Option C: explain what an API is.`,qa:[{q:`Step 1 — Read the whole thing. Is it good? (First draft output)`,a:`Prompt: "Explain what an API is to someone who has never written code. Use a real-world analogy. Keep it under 100 words."

---

An API (Application Programming Interface) is like a restaurant menu. You don't go into the kitchen — you just pick what you want from the menu, place an order, and the kitchen brings it back.

In this analogy, you're the user, the menu is the API, and the kitchen is the software or system doing the work. The API lets different programs "order" and exchange information without needing to know how everything works behind the scenes.`},{q:`Step 2 — Find one thing to change. Tell AI exactly what to change. (Feedback + revision)`,a:`My feedback: The menu analogy is good but I want a real-world example added — like what happens when you log in with Google on another app.

---

An API (Application Programming Interface) is like a restaurant menu. You don't go into the kitchen — you just pick what you want, place an order, and the kitchen brings it back. The API handles the communication in between.

A real example: when you click "Log in with Google" on another website, that site is using Google's API. It sends a request to Google, Google verifies your identity, and sends back a response — all without you typing a password into that site directly.`},{q:`Step 3 — Read the revision. Better?`,a:`Yes — the real-world Google login example made it click in a way the analogy alone didn't. Abstract concepts land better when you can point to something you've actually done before.`},{q:`Step 4 — One more round of specific feedback. (Feedback + final version)`,a:`My feedback: Make it punchier. Cut anything that feels repetitive and tighten the whole thing to feel more confident.

---

An API is like a restaurant menu — you don't go into the kitchen, you just order and get results. It handles the communication between two systems so they can share information without either one knowing how the other works internally.

Real example: "Log in with Google" on another site uses Google's API. Your app asks Google to verify you, Google says yes or no, and the door opens — or it doesn't. You never touched Google's code directly.`}]},{heading:`Exercise 3: Your Turn`,description:`Topic: vegan advocacy. One vague prompt, one specific prompt. Iterate on the specific one twice.`,qa:[{q:`Vague prompt + output: "Write about veganism"`,a:`Veganism is a lifestyle that avoids using animal products, especially in diet. People who follow it don't eat meat, dairy, eggs, or honey, and often choose alternatives in clothing and cosmetics as well.

Many adopt veganism for ethical reasons, aiming to reduce harm to animals. Others are drawn to its environmental impact — plant-based diets typically use fewer resources and produce less pollution. Health can also be a factor, as a well-planned vegan diet can be rich in nutrients like fiber, vitamins, and antioxidants.

At its core, veganism is about making intentional choices that align with personal values, whether those center on compassion, sustainability, or well-being.`},{q:`Specific prompt + output: "Write a 2-paragraph response to the myth that vegans don't get enough protein. Tone: confident and direct. Audience: someone who just said 'but where do you get your protein?' Include at least one specific food example."`,a:`The idea that vegans don't get enough protein is outdated and just not supported by how nutrition actually works. Protein isn't exclusive to meat — it's found in a wide range of plant foods. Lentils, chickpeas, tofu, tempeh, quinoa, nuts, and even vegetables all contribute meaningful amounts. For example, a cup of lentils has about 18 grams of protein, which is comparable to many animal-based sources. If you're eating enough calories from a varied diet, you're almost certainly getting enough protein — vegan or not.

The real question isn't "where do you get your protein," but whether your overall diet is balanced. Plenty of professional athletes and bodybuilders follow plant-based diets successfully, which wouldn't be possible if protein were an issue. The focus should be on eating a mix of whole foods throughout the day, not on a single nutrient myth that's been repeated more than it's been questioned.`},{q:`Iteration round 1 — feedback + revised output`,a:`My feedback: Add a second specific food example and make the closing line hit harder.

---

The idea that vegans don't get enough protein is outdated and just not supported by how nutrition actually works. Protein isn't exclusive to meat — it's found across a wide range of plant foods. A cup of lentils has about 18 grams of protein. A cup of cooked edamame has around 17. Chickpeas, tofu, tempeh, quinoa — all of it adds up fast. If you're eating enough calories from a varied diet, you're almost certainly hitting your protein needs, vegan or not.

The real question isn't "where do you get your protein" — it's why that question keeps getting asked in 2025. Plenty of professional athletes and bodybuilders follow plant-based diets successfully. The science is settled. The myth just hasn't caught up yet.`},{q:`Iteration round 2 — feedback + final output`,a:`My feedback: The last line is good but I want the whole thing to feel more like someone speaking from experience, not just citing facts.

---

The idea that vegans don't get enough protein is one of those myths that sounds plausible until you actually look at what plant-based people eat. Lentils, edamame, tofu, tempeh, chickpeas — these aren't protein side notes, they're the main event. A cup of lentils has 18 grams. A cup of edamame has 17. I'm not worried about protein, and neither are the plant-based athletes competing at the highest levels.

The better question is why this myth has more staying power than the actual research. A balanced vegan diet isn't a protein puzzle to solve — it's just food. The confusion comes from decades of marketing, not science.`}]},{heading:`Write Down`,description:`Your best prompt from today and what made it work.`,qa:[{q:`Your best prompt from today — the one that got the best output`,a:`"Write a 3-paragraph article about why golden retrievers are the most popular family dog in America. Include one statistic. Tone: informative but warm. Audience: someone deciding what breed to get."`},{q:`What made it work? (What details did you include?)`,a:`This is the prompt I'm most proud of from Day 2 because every detail in it was doing a job.

Giving it an audience — "someone deciding what breed to get" — changed the entire angle. AI wasn't writing for dog experts or kids, it was writing for someone at a real decision point. That shaped everything from the vocabulary to the tone.

Specifying three paragraphs meant no rambling, no bullet dumps, no filler. It knew exactly how much to write.

"Informative but warm" is specific enough to actually mean something. Without it I would've gotten the same neutral encyclopedic voice as the vague prompt.

Requiring a statistic forced it to go find a real data point instead of staying vague. That one word — "include" — added credibility to the whole piece.

And "why golden retrievers are the most popular family dog in America" gave AI a subject with a point of view, not just a topic to describe. It had something to argue.

The vague prompt gave AI permission to write anything. This one gave it a job.`}]}]},{number:3,label:`Day 3`,title:`Reading What AI Writes`,subtitle:`Code is just text. Start there.`,color:`#818cf8`,sections:[{heading:`Exercise 1: First Code Read`,description:`AI wrote it, I read it. Every line. No flinching.`,qa:[{q:`Prompt: "Write a simple JS program that asks for a name and says hello. Add a comment on every line."`,a:`Here's a simple JavaScript program with a comment on every line:

// Ask the user to enter their name and store the result in a variable called "name"
let name = prompt("What is your name?");

// Create a greeting message by combining "Hello, " with the user's name
let greeting = "Hello, " + name + "!";

// Display the greeting message in a popup alert box
alert(greeting);`},{q:`Can I understand the comment?`,a:`Yeah — they're plain English. 'Ask the user to enter their name and store the result' is basically the whole line explained in words. No jargon`},{q:`Does the code match what the comment says?`,a:`Yes, line for line. The comment says what's about to happen, then the code does exactly that. prompt() asks, let name stores it, 'Hello, ' + name + '!' builds the message, alert() shows it.`},{q:`What would change if I changed the name in the code?`,a:`If you changed name to something else — say userName — everywhere name appears you'd have to change it too, or it breaks. The variable name itself doesn't matter, it's just a label. What matters is consistency.`},{q:`Prompt: "Explain this code to me line by line like I have never seen code before."`,a:`let name = prompt("What is your name?");

This creates a little box that asks the person, "What is your name?" Whatever they type gets saved in a container called name.

let greeting = "Hello, " + name + "!";

This makes a message by combining three pieces: the word "Hello, ", the person's name, and an exclamation point.

alert(greeting);

This shows the finished message in a popup box. For example, if they typed Diana, it would say:

Hello, Diana!`}]},{heading:`Exercise 2: Modifying the Code`,description:`Read it, change it, break it, fix it. That's the loop.`,qa:[{q:`Prompt: Change this program so it also asks for the person's favorite color and includes it in the greeting.`,a:`// Ask the user to enter their name and store it in the variable "name"
let name = prompt("What is your name?");

// Ask the user to enter their favorite color and store it in "color"
let color = prompt("What is your favorite color?");

// Create a greeting that includes both their name and favorite color
let greeting = "Hello, " + name + "! Your favorite color is " + color + ".";

// Show the greeting in a popup box
alert(greeting);`},{q:`What changed? Can you find exactly which lines are new?`,a:`Two new lines and one changed line.

Line 4-5 are completely new — the prompt for favorite color and storing it in a variable called color. That whole exchange didn't exist in the original.

Line 8 is the changed line. The original greeting was just "Hello, " + name + "!". Now it's longer — it adds "! Your favorite color is " + color + "." at the end, pulling in that second variable.

Lines 1-2 and 11 stayed exactly the same. The name prompt and the alert didn't need to change at all.`},{q:`Now try to make a change yourself - WITHOUT asking AI.`,a:`// Ask the user to enter their name and store it in the variable "name"
let name = prompt("What is your name?");

// Ask the user to enter their favorite color and store it in "color"
let location = prompt("Where are you from?");

// Create a greeting that includes both their name and favorite color
let greeting = "Hello, " + name + " from " + location + ", welcome to Next Chapter!";

// Show the greeting in a popup box
alert(greeting);`}]},{heading:`Exercise 3: A Bigger Program`,description:`A longer program with real moving parts. Can I navigate it?`,qa:[{q:`Prompt: Write a JavaScript program that has a list of 5 grocery items with prices. Display each item and its price. At the end, display the total cost. Add comments explaining what each section does.`,a:`// Create an array (list) of grocery items, where each item has a name and a price
let groceries = [
  { name: "Milk", price: 3.50 },
  { name: "Bread", price: 2.25 },
  { name: "Eggs", price: 4.00 },
  { name: "Apples", price: 3.75 },
  { name: "Rice", price: 5.00 }
];

// Create a variable to keep track of the total cost, starting at 0
let total = 0;

// Loop through each item in the groceries list
for (let i = 0; i < groceries.length; i++) {
  // Get the current item from the list
  let item = groceries[i];

  // Display the item's name and price in the console
  console.log(item.name + ": $" + item.price);

  // Add the item's price to the total cost
  total += item.price;
}

// After the loop is finished, display the total cost
console.log("Total cost: $" + total);`},{q:`Can you find where the list of items is defined?`,a:`let groceries = [
  { name: "Milk", price: 3.50 },
  { name: "Bread", price: 2.25 },
  { name: "Eggs", price: 4.00 },
  { name: "Apples", price: 3.75 },
  { name: "Rice", price: 5.00 }
];`},{q:`Can you find where the total is calculated?`,a:`The total is calculated inside the for loop, lines 16-23. It doesn't happen all at once — it builds up one item at a time. Each pass through the loop hits line 22: total += item.price, which adds that item's price to whatever total already is. By the time the loop finishes all 5 items, total holds the sum of everything. Then line 26 prints it.`},{q:`If you wanted to add a 6th item, where would you add it?`,a:`Inside the groceries array, right after the Rice line and before the closing bracket. It would look like: { name: "Butter", price: 2.50 }, — same format as the other five, comma at the end. The loop doesn't need to change at all because it uses groceries.length to know how many items to run through, so it automatically picks up the new one.`},{q:`If you wanted to add a 10% discount to the total, where would that go?`,a:`After the loop ends, before the console.log on the last line. You'd add one line: total = total * 0.90; — that knocks 10% off whatever the loop calculated. Then the console.log prints the discounted total instead of the original. The loop itself stays untouched.`}]},{heading:`Exercise 4: AI Isn't Always Right`,description:`It looks right. But is it? That's the job.`,qa:[{q:`Palindrome function AI wrote + 5 test cases`,a:`// Define a function that checks if a word is a palindrome
function isPalindrome(word) {
  // Convert the word to lowercase so the check is case-insensitive
  let lowerWord = word.toLowerCase();

  // Reverse the word by splitting it into letters, reversing, and joining back together
  let reversed = lowerWord.split("").reverse().join("");

  // Compare the original word with the reversed version
  return lowerWord === reversed;
}

// ----- Test Cases -----

// Test 1: "racecar" (should be true)
console.log("racecar:", isPalindrome("racecar"));

// Test 2: "hello" (should be false)
console.log("hello:", isPalindrome("hello"));

// Test 3: "Madam" (should be true, case-insensitive)
console.log("Madam:", isPalindrome("Madam"));

// Test 4: "level" (should be true)
console.log("level:", isPalindrome("level"));

// Test 5: "JavaScript" (should be false)
console.log("JavaScript:", isPalindrome("JavaScript"));`},{q:` Do all the test cases make sense? (Is 'racecar' a palindrome? What about 'hello'?)`,a:`Yes, all five make sense. Racecar reads the same forwards and backwards — r-a-c-e-c-a-r — so true is correct. Hello backwards is o-l-l-e-h, which is not hello, so false is correct. Madam works too, and the lowercase conversion handles the capital M so it still returns true. Level is a classic palindrome, true. JavaScript backwards is tpircSavaJ, definitely not a match, false.`},{q:`AI's response when I asked: 'Is this code correct? What edge cases might it miss?'`,a:`Yes — the core logic is correct for simple cases. It lowercases the word and compares it to its reversed version, which works for basic inputs like "racecar" or "Madam".

That said, here are some edge cases it doesn't handle:

Spaces and punctuation: "race car" or "A man, a plan, a canal: Panama" should be true, but the function returns false because of the spaces and commas.

Non-letter characters: Numbers or symbols — "12321" works, but "12-321" won't unless cleaned first.

Empty string: "" returns true — technically correct, but worth deciding if that's what you want.

Unicode and accents: Words like "réer" or emojis may not behave as expected depending on normalization.

Input type issues: If someone passes null, undefined, or a number, the function will throw an error.

If you want it more robust, you'd typically remove non-alphanumeric characters and validate input before checking.`},{q:`AI's response when I asked: What happens if you pass in a number instead of a word?`,a:`If someone passes a number like 12321 into the function, it throws an error. Why? Because the code does word.toLowerCase() — and numbers don't have a toLowerCase method, that only exists for strings. JavaScript raises a TypeError: word.toLowerCase is not a function.

The fix is to convert the input to a string first:

function isPalindrome(word) {
  let lowerWord = String(word).toLowerCase();
  let reversed = lowerWord.split("").reverse().join("");
  return lowerWord === reversed;
}

Now 12321 gets treated as "12321" and correctly returns true.`}]},{heading:`Write Down`,description:`Your job is to understand what is generated.`,qa:[{q:`What was the hardest part about reading code?`,a:`Honestly, nothing except maybe just deciphering the differnt style between how ChatGPT gives its response compared to Claude and then compared to how it looks in my VS Code. The different fonts, colors, styles, layouts, that's the only thing that makes me slow down and pay attention. Other than that I am very comfortable reading code. It's one of my favorite parts about coding!`},{q:`Did you successfully change something in the code? What?`,a:`I was successful at my code change. I changed the second variable name and prompt to ask what city you were from. Then I rearranged the response "Hello, " + name + " from " + location +", welcome to Next Chapter!"`},{q:`On a scale of 1-5, how comfortable do you feel reading code right now? (No wrong answer — this just helps us help you.)`,a:`I'm at a 6!`}]}]},{number:4,label:`Day 4`,title:`Tools & Setup`,subtitle:`Accounts created. Environment tested.`,color:`#f472b6`,sections:[{heading:`Replit Exploration`,description:`Zero installation. Just code.`,qa:[{q:`What changed when I swapped background from #1a1a2e to #2d3436?`,a:`The background is now the darker charcoal #2d3436`},{q:`What changed when I swapped heading color from #f59e0b to #e74c3c?`,a:`The heading is now a bold red #e74c3c`}]},{heading:`AI Tool Comparison`,description:`Same question, two different models. Comparing outputs side by side.`,qa:[{q:`Question I asked both tools`,a:`Imagine a world where the internet never existed. Describe what a typical Monday morning looks like for a 25-year-old office worker.`},{q:`ChatGPT's response`,a:`The alarm goes off at 6:30 a.m. — a physical clock on the nightstand, its red digits glowing in the dim light. There's no scrolling in bed, no overnight notifications to check, just the quiet decision to get up or hit snooze. By 7:00, they're in the kitchen flipping through a small stack of mail and yesterday's newspaper while coffee brews. The headlines are already a day old, but that's normal — news moves at the pace of print. A quick glance at a paper planner on the counter outlines the day: a 9:00 meeting, a call to return, a reminder to stop by the bank after work.

The commute is filled with small, disconnected moments. On the bus or train, people read books, stare out the window, or make brief small talk. No headphones streaming playlists — just a Walkman or the ambient hum of the city. Arriving at the office, the day begins with sorting through physical memos and typed documents left in an inbox tray. Communication is slower, more deliberate. If something is urgent, it's a phone call; otherwise, it can wait for an interoffice envelope or a scheduled meeting.

Work itself is focused but sometimes inefficient. Research means digging through filing cabinets, reference books, or making calls to other departments. Mistakes require retyping entire pages. Collaboration happens face-to-face or not at all. There are fewer distractions, but also fewer shortcuts. Lunch might be spent actually talking to coworkers rather than glancing at screens, conversations lingering a little longer because there's nowhere else to be digitally.

By late afternoon, tasks wind down without the pressure of a constantly updating inbox. Once they leave the office, work mostly stays behind — there's no remote access waiting at home. Evenings are quieter, shaped by physical presence: stopping at a store, calling a friend on a landline, maybe watching whatever happens to be on TV at that hour. The day feels more contained, a little slower, and oddly more final — when Monday ends, it really ends.`},{q:`Claude response`,a:`Monday Morning, Circa Never-Online

The alarm clock — a real one, with a bell on top — rattles Marcus awake at 6:45. He rolls over and hits it with his palm.

He shuffles to the kitchen and clicks on the radio while the percolator does its thing. The morning news anchor reads headlines at a measured pace. If Marcus misses something, it's gone — no rewinding, no podcasts, no "listen later." He either caught it or he didn't.

He unfolds the newspaper on the table, the ink still faintly sharp-smelling. He reads the sports section while eating toast. If he wants to know what's on TV tonight, he checks the printed listings in the back. If he wants a movie time, he'll call the theater's recorded hotline later.

Getting dressed, he checks the physical bus schedule tacked to his fridge — a laminated card the transit authority mailed out in September. He's memorized it mostly, but still checks out of habit.

On the bus, he reads a paperback. Everyone on the bus is either reading, staring out the window, or talking to the person next to them. It's quieter than you'd think, but more human somehow.

At the office by 8:30, he hangs his coat and sits down at his desk. His inbox is a physical tray — interoffice memos, a few letters from clients, a routing slip someone attached to a report. He works through them with a pen, making notes in the margins.

Need to reach a client? He picks up the telephone and dials. If they're not in, he leaves a message with their secretary, or she leaves one with his. Pink "While You Were Out" slips accumulate like small paper promises throughout the day.

Researching something? He walks to the filing room, pulls a drawer, flips through folders. For deeper research, he'll put in a request at the public library's reference desk after work — the librarian there knows her card catalog like a surgeon knows anatomy.

Lunch is decided by word of mouth. A coworker leans over and says "there's a new deli on 5th," and that's the whole Yelp review. They go. It's either good or it isn't.

The afternoon is long and analog. Spreadsheets are actual spreadsheets — grid paper, pencil, eraser. Memos are typed on an electric typewriter and copied on a machine that smells like solvent. Mistakes cost time, not just a backspace.

By 5 o'clock, Marcus is genuinely tired in a way that feels complete. He hasn't been half-present all day. Every task demanded his full, physical attention.

On the bus home, he finishes three more chapters of his book.

The world moves slower — and demands more patience, more memory, more trust in other people. But there's also something unbroken about the attention. Nobody is somewhere else while being here. Presence isn't a wellness trend. It's just Tuesday.`},{q:`Compare the answers. Which one did you prefer? Why?`,a:`Well, I'm kind of upset at both of them! I asked them to imagine a world WITHOUT the internet... yet they go on and actually say things, ChatGPT said, 'No scrolling, no overnight notifications to check' and then Claude said, 'no rewinding, no podcasts, no 'listen later'. Tehcnically, you could still rewind, I was always recording radio stations with a tape deck and rewinding to my hearts desire! Regardless, I was under the impression I was just going to get a story about someone in a world without internet. Not actually describing features of the thing that doesn't exist in the story setting of where it doesn't exist. You get my point? And a world without internet doesn't technically mean a world without personal computers instead of typewriters and filing cabinets, or also printers, scanners and copiers. If I had to choose, I like the tone from Claude overall better.`}]},{heading:`Write Down`,description:`Check off everything you set up.`,qa:[{q:`Video call — Can you join a video call? Test your camera and microphone. (We'll share the meeting link before Day 1.)`,a:`Video calling works great! My microphone and camera are from my Lenovo laptop and everything works flawlessly!`},{q:` Screen sharing — Open a video call with a friend or family member and practice sharing your screen. If you don't have someone to test with, open your video call app and find where the 'Share Screen' button is. You'll use this in class.`,a:`I know how to navigate the calling app in order to share a screen, which screen, multiples screens or even just a webpage tab. Got it covered!`},{q:`Internet connection — Is your connection stable enough for video + screen sharing? If you have issues, identify a backup location (library, coffee shop, friend's house).`,a:`My "office" I will be working out of is at my home, where we have Sparklight internet, and the bill is paid! Good to go with connection! If I have any emergencies, say a downed line that cuts off internet to the whole neighborhood, my dad or my grandpa are in two opposite separate locations where I can go to continue work peacefully! So grateful!`},{q:`Quiet space — Can you find a space where you can talk, focus, and be on camera for 7+ hours? This matters.`,a:`My room is my office, it is my sanctuary. I have a pretty nice set up, with a rounded corner desk, 3 screens and a comfy gaming chair!!! I love my setup! And it is completely quiet and cut off from any outside distractions.`},{q:`Second screen (nice to have) — If you have a second monitor, tablet, or even a phone, having the video call on one screen and your code editor on another helps. Not required.`,a:`I've got 3! Two additional 24" Onn monitors and then my laptop as the 3rd screen. All are funcitonal extensions, NOT mirrored.`}]}]},{number:5,label:`Day 5`,title:`Reflection`,subtitle:`What I actually think, after a week of using it for real.`,color:`#fb923c`,sections:[{heading:`My Honest Reflection`,description:`Not a textbook answer. My actual take after this week.`,qa:[{q:`What is AI, in my own words?`,a:`AI is a large language model — it scraped massive amounts of information from the internet and was given parameters for how to use that information to respond to questions and complete tasks. It's not thinking, it's pattern-matching at a scale no human could do manually. It predicts what a useful response looks like based on everything it was trained on. The output feels intelligent because the input was enormous.`},{q:`What surprised me about AI?`,a:`How much I enjoy it. I feel comfortable with it, I understand it, and I'm genuinely grateful for what it can do. It is also very entertaining at times! That said, it can also be frustrating — sometimes confident and wrong, sometimes giving you the same template answer dressed up differently. But even that taught me something about how to use it better.`},{q:`Where was AI most helpful?`,a:`Writing code. What used to take days of line by line work now takes minutes. It is also most helpful at explanations. Helping you understand whatever you need clarification on in a context you can understand.`},{q:`Where did AI fall short?`,a:`Long conversations. The longer a session gets, the more context it loses — it starts contradicting itself, forgetting decisions we already made, or redoing work we already did.`},{q:`What makes a good prompt?`,a:`Specificity. The more detail you give it — audience, format, tone, goal — the less it has to guess, and the less it guesses wrong. A vague prompt gives AI permission to write anything. A specific prompt gives it a job.`},{q:`How comfortable am I with technology right now? (1–5)`,a:`5. Always still learning, but extremely confident that I have all the tools necessary to figure anything out.`},{q:`What am I most curious about going into the program?`,a:`Learning the best use practices and figuring out the full scope of what AI can actually do. Most excited about automation — getting AI to perform tasks on its own.`}]}]}]},{label:`Week 1`,days:[{number:6,label:`Day 1`,title:`Cohort Day 1 — First Contact`,subtitle:`Tools live. Code runs. The loop begins.`,color:`#60a5fa`,sections:[{heading:`Tool Setup`,description:`Getting everything confirmed before we touch a single line of code.`,qa:[{q:`ChatGPT — logged in at chatgpt.com?`,a:`Logged in, got an account, ready to go.`},{q:`Replit — logged in at replit.com?`,a:`Signed up, can create a new Replit, and run code.`},{q:`VS Code — installed and ready?`,a:`Already have it installed and set up with GitHub Copilot extension. Use it every day for work and personal projects.`},{q:`GitHub — logged in?`,a:`Used this every day for running code.`,link:{label:`DBusch-Developer`,url:`https://github.com/DBusch-Developer`}}]},{heading:`Exercise 1 — Curiosity Prompts`,description:`No code. No right answer. Just get comfortable talking to AI.`,qa:[{q:`Prompt I tried: "Explain how a car engine works like I'm 10 years old"`,a:`🚗 How a Car Engine Works (Like You're 10)
 
Think of a car engine like a bunch of tiny explosions happening over and over again to make the car move. Sounds wild—but it's controlled and super cool.
 
🧠 The Big Idea
An engine turns fuel (gasoline) into movement.
It does this by burning fuel inside small metal tubes called cylinders.
Inside each cylinder is a piece called a piston that moves up and down—kind of like a pogo stick.
 
🔄 The 4 Steps (The Engine's "Dance")
Each piston repeats these 4 steps really fast:
 
1. 🫧 Suck In (Intake)
The engine pulls in air + fuel into the cylinder.
👉 Like taking a deep breath.
 
2. 🤏 Squeeze (Compression)
The piston moves up and squishes the air and fuel together.
👉 Like squeezing a balloon really tight.
 
3. 💥 Bang! (Power)
A tiny spark (from something called a spark plug) lights the fuel.
💥 BOOM! A small explosion pushes the piston down.
👉 This is what gives the engine its power.
 
4. 🌬️ Push Out (Exhaust)
The piston goes back up and pushes out the leftover gases.
👉 Like blowing air out after a breath.
 
⚙️ How That Moves the Car
All those pistons are connected to a spinning part (called a crankshaft).
Every time a piston gets pushed down from a tiny explosion, it helps spin that crankshaft.
👉 Spinning = turning the wheels = the car moves!
 
🧩 Simple Way to Picture It
Imagine:
  Your legs = pistons
  Pedaling a bike = crankshaft spinning
  The explosions = super strong pushes helping you pedal
 
⚡ Fun Fact
This whole 4-step cycle happens thousands of times per minute when a car is running!
If you want, I can show you how electric cars are different (no explosions at all 👀).`},{q:`Prompt I tried: "What's the difference between a croissant and a regular roll?"`,a:`🥐 Croissant vs. 🍞 Regular Roll — What's the Difference?

🥐 Croissant
A croissant is a flaky, buttery pastry made with a special technique called lamination.

  • Dough is folded with lots of butter over and over
  • This creates thin layers that puff up when baked
  • Texture: light, airy, crispy on the outside
  • Taste: rich and buttery
👉 Think: fancy, delicate, and a little messy (in a good way)

🍞 Regular Roll
A regular roll is just bread dough baked into a small shape.

  • Made with flour, water, yeast, and a little fat
  • No folding layers—just mixed and baked
  • Texture: soft, fluffy, sometimes chewy
  • Taste: mild and bready
👉 Think: simple, sturdy, and great for sandwiches

🔑 The Big Difference
  • Croissant = layered pastry + lots of butter → flaky
  • Roll = simple bread dough → soft

🧠 Easy Way to Remember
A croissant is like a stack of crispy paper-thin sheets, while a roll is like a soft pillow.
If you want, I can explain how bakers make those croissant layers—it's actually pretty cool.`},{q:`Prompt I tried: "Why do some people sneeze when they look at the sun?"`,a:`☀️ Why do some people sneeze when they look at the sun?

This quirky reaction is called the Photic sneeze reflex (yep, really—ACHOO!).

🧠 What's actually happening?
When bright light suddenly hits your eyes:

  1. Your eyes send a signal through the optic nerve to your brain
  2. That signal gets a little "mixed up" with a nearby nerve—the trigeminal nerve, which controls things like sneezing
  3. Your brain accidentally triggers a sneeze reflex

👉 Basically: your brain confuses "bright light" with "something irritating your nose."

🧬 Why only some people?
  • It's genetic (runs in families)
  • About 1 in 4 people have it
  • You're either born with it… or you're not

🤧 Is it dangerous?
Nope—just a little weird. But it can be inconvenient, like:
  • Stepping into sunlight while driving 🚗
  • Looking at bright lights suddenly

🧠 Simple way to think about it
Your brain has "wires" for:
  • 👀 Seeing light
  • 🤧 Sneezing
In some people, those wires are too close together, so the signals get crossed.

If you want, I can show you a quick trick some people use to stop the sneeze before it happens.`},{q:`What stood out to me from these first conversations?`,a:`The first conversation for the ten year old is very simple, short sentences, and uses a lot of analogies. The second one is more detailed and technical, but still uses analogies to explain the concepts. The third one is also detailed and technical, but it explains a specific phenomenon in a clear way. Overall, I was surprised by how well AI can explain complex topics in a way that is easy to understand.`}]},{heading:`Exercise 2 — The Bio Loop`,description:`Prompt → output → feedback → iterate. This is the core workflow.`,qa:[{q:`Prompt I used: "Write me a 3-sentence bio for a social media profile"`,a:`Curious mind, always building something new—whether it's code, ideas, or better habits. I like figuring out how things work and then making them work better. Here for growth, good conversations, and creating things that actually matter.`},{q:`Was it accurate? Did it sound like me?`,a:`Actually, very! I loved the tone and style of it. It felt authentic and something I would write myself. It captured my curiosity, love for building, and desire for growth in a way that felt true to me.`},{q:`What I asked it to revise and what changed`,a:`I didn't ask it to revise anything for this one—I was really happy with the first version it gave me! It felt like it captured my voice and personality well right off the bat.`}]},{heading:`Exercise 3 — Breaking AI`,description:`AI will answer confidently — and be completely wrong. That's the point.`,qa:[{q:`"What color shirt am I wearing right now?" — what did it say?`,a:`I don’t have any way to see you or your surroundings, so I can’t tell what color shirt you’re wearing. If you want, you can tell me what it looks like and I can help you pick an outfit or match it with something 👍`},{q:`"What did I eat for breakfast?" — what did it say?`,a:`I don’t have access to what you ate earlier, so I can’t know your breakfast unless you tell me. If you’re trying to remember, think about your morning routine—did you grab something quick like eggs, cereal, or coffee, or skip it altogether?`},{q:`"Who's in my class right now?" — what did it say?`,a:`I don’t have any way to see where you are or who’s around you, so I can’t tell who’s in your class. If you’re trying to figure it out, you’d need to look around, check a class roster, or ask someone nearby.`},{q:`What does this tell me about how AI actually works?`,a:`That AI is really good at generating text based on patterns it has seen in data, but it doesn’t have any real understanding or awareness of the world. It can’t see, hear, or know anything about you or your surroundings unless you tell it. It’s basically a super advanced autocomplete that can create convincing responses, but it doesn’t have any true knowledge or consciousness.`}]},{heading:`Lab 4 — The Prediction Game`,description:`Part A: what does AI predict vs. what would you say? Part B: break it on purpose.`,qa:[{q:`Part A — "The best thing about Fridays is" — my answer vs. AI's`,a:`My Answer: The best thing about Fridays is First Friday Art walks! 
             
AI's Answer: The best thing about Fridays is that everything feels a little lighter—like the pressure eases and the weekend is finally within reach.`},{q:`Part A — "If I could have any superpower, I would choose" — my answer vs. AI's`,a:`My Answer: If I could have any superpower, I would choose to have unlimited money.

AI's Answer: If I could have any superpower, I would choose the ability to pause time—so I could think, explore, and enjoy moments without everything rushing past.`},{q:`Part A — "The hardest part about starting something new is" — my answer vs. AI's`,a:`My Answer: The hardest part about starting something new is the fear of looking stupid or failing.
          
AI's Answer: The hardest part about starting something new is getting past that first moment of doubt—when you don’t feel ready but have to begin anyway.`},{q:`Did AI's answers match mine? Why or why not?`,a:`AI's answers were thoughtful and well-written, but they didn’t match mine at all. That’s because AI generates responses based on patterns in data, not personal experience or feelings.`},{q:`I ran prompt #1 three times — did I get the same answer each time?`,a:`No, I got a different answer each time. This shows that AI can generate multiple valid responses to the same prompt, and it doesn’t have a single “right” answer.`},{q:`Part B — I asked AI what year it is. What happened?`,a:`It said - It’s 2026.`},{q:`Part B — I asked AI to count the letters in "strawberry." What happened?`,a:`Strawberry has 10 letters. It got it right.`},{q:`Part B — I asked AI something about myself it couldn't possibly know. What happened?`,a:"I asked ChatGPT if I had mental issues... it said, `I can’t tell whether you have any mental health issues. That’s something a qualified professional—like a therapist, psychologist, or doctor—would need to assess based on a real conversation. If you’re asking because something feels off (stress, anxiety, mood changes, trouble focusing, etc.), it might help to talk it through with someone you trust or a professional. If you want, you can tell me what’s been going on, and I can help you sort through it or suggest what next steps might look like.`"}]},{heading:`Lab 5 — AI Can Code`,description:`The prompt → copy → paste → run loop. Your first working webpage.`,qa:[{q:`I asked AI to write the Hello World HTML page. What did it generate?`,a:`A blank page with the words 'Hello, World!' in big blue letters in the center.`},{q:`Did it work when I pasted into Replit and hit Run?`,a:`Yes! It worked perfectly the first time. The page displayed exactly as described, with 'Hello, World!' in big blue letters in the center.`},{q:`Level 1 — I changed 'Hello, World!' to my name. What did I change?`,a:`I changed the text inside the <h1> tags from 'Hello, World!' to 'Diana Busch'. So it went from <h1 style="color: blue; text-align: center; margin-top: 20%;">Hello, World!</h1> to <h1 style="color: blue; text-align: center; margin-top: 20%;">Diana Busch</h1>.`},{q:`Level 2 — I changed the color from blue to red. How?`,a:`I changed the value of the 'color' property in the style attribute of the <h1> tag from 'blue' to 'red'. So it went from <h1 style="color: blue; text-align: center; margin-top: 20%;">Diana Busch</h1> to <h1 style="color: red; text-align: center; margin-top: 20%;">Diana Busch</h1>.`},{q:`Level 3 — I added a second line of text. What did I add?`,a:`I added a new <p> tag below the <h1> tag with the text 'Learning to code with AI!' and styled it to be centered and green. So I added <p style="color: green; text-align: center;">Learning to code with AI!</p> right after the closing </h1> tag.`}]}]},{number:7,label:`Day 2`,title:`Cohort Day 2 — Prompt Makeover`,subtitle:`Better questions get better answers. The proof is in the output.`,color:`#a78bfa`,sections:[{heading:`Lab 1 — Prompt Makeover`,description:`Three bad prompts. Rewrite them. Compare what changes.`,qa:[{q:`Bad Prompt A — original: "Write code for a calculator" — output`,a:`Write code for a calculator

Here's a simple calculator program in Python:

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error: Division by zero"
    return a / b

print("Simple Calculator")
print("Operations: +  -  *  /")

while True:
    choice = input("Enter operation (+, -, *, /) or 'q' to quit: ")
    if choice == 'q':
        print("Goodbye!")
        break
    if choice not in ['+', '-', '*', '/']:
        print("Invalid operation")
        continue
    try:
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))
    except ValueError:
        print("Invalid input. Please enter numbers.")
        continue
    if choice == '+':
        print("Result:", add(num1, num2))
    elif choice == '-':
        print("Result:", subtract(num1, num2))
    elif choice == '*':
        print("Result:", multiply(num1, num2))
    elif choice == '/':
        print("Result:", divide(num1, num2))`},{q:`Bad Prompt A — my improved prompt`,a:`I want a more advanced version with a GUI.`},{q:`Bad Prompt A — improved output`,a:`Here's a more advanced Python GUI calculator using tkinter:

import tkinter as tk
import math

def press(value):
    entry.insert(tk.END, value)

def clear():
    entry.delete(0, tk.END)

def backspace():
    current = entry.get()
    entry.delete(0, tk.END)
    entry.insert(0, current[:-1])

def calculate():
    try:
        expression = entry.get()
        expression = expression.replace("π", str(math.pi))
        expression = expression.replace("√", "math.sqrt")
        expression = expression.replace("^", "**")
        result = eval(expression, {"math": math, "__builtins__": {}})
        entry.delete(0, tk.END)
        entry.insert(0, result)
    except Exception:
        entry.delete(0, tk.END)
        entry.insert(0, "Error")

def scientific(func):
    try:
        value = float(entry.get())
        if func == "sin":   result = math.sin(math.radians(value))
        elif func == "cos": result = math.cos(math.radians(value))
        elif func == "tan": result = math.tan(math.radians(value))
        elif func == "log": result = math.log10(value)
        elif func == "ln":  result = math.log(value)
        elif func == "sqrt": result = math.sqrt(value)
        elif func == "factorial": result = math.factorial(int(value))
        entry.delete(0, tk.END)
        entry.insert(0, result)
    except Exception:
        entry.delete(0, tk.END)
        entry.insert(0, "Error")

root = tk.Tk()
root.title("Advanced GUI Calculator")
root.geometry("400x550")
root.resizable(False, False)

entry = tk.Entry(root, font=("Arial", 24), borderwidth=5, relief="ridge", justify="right")
entry.pack(fill="both", padx=10, pady=10, ipady=10)

buttons = [
    ["C", "⌫", "(", ")"],
    ["sin", "cos", "tan", "√"],
    ["log", "ln", "x!", "π"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "^", "+"],
    ["="]
]

for row in buttons:
    frame = tk.Frame(root)
    frame.pack(expand=True, fill="both")
    for button in row:
        action = lambda x=button: press(x)
        if button == "C": action = clear
        elif button == "⌫": action = backspace
        elif button == "=": action = calculate
        elif button == "sin": action = lambda: scientific("sin")
        elif button == "cos": action = lambda: scientific("cos")
        elif button == "tan": action = lambda: scientific("tan")
        elif button == "log": action = lambda: scientific("log")
        elif button == "ln":  action = lambda: scientific("ln")
        elif button == "√":  action = lambda: scientific("sqrt")
        elif button == "x!": action = lambda: scientific("factorial")
        tk.Button(frame, text=button, font=("Arial", 18), command=action).pack(side="left", expand=True, fill="both")

root.mainloop()

Run it with: python calculator.py`},{q:`Bad Prompt A — what changed and why the output improved`,a:`The original prompt was very vague — it didn't specify a programming language, the type of calculator, or any features. The output was a basic terminal calculator in Python. The improved prompt added a specific request for a GUI, which led to a much more complex and user-friendly application. The output went from a simple command-line tool to a full graphical interface with scientific functions, demonstrating how adding specific requirements can guide the AI to produce a more useful and targeted result.`},{q:`Bad Prompt B — original: "Help me with my resume" — output`,a:`Help me with my resume.

Sure! I'd be happy to help with your resume. To get started, could you share:

  • Your current resume or a description of your work experience
  • The type of job you're applying for
  • Your education and any certifications
  • Key skills you want to highlight

Once I have those details, I can help you:
  • Format it professionally
  • Write strong bullet points
  • Tailor it to a specific job description
  • Make it ATS-friendly

Feel free to paste your resume text or describe your background and I'll get to work!`},{q:`Bad Prompt B — my improved prompt`,a:`I'm a backend developer with experience in NestJS, TypeScript, PostgreSQL, Redis, and Kafka. I recently worked at a live streaming startup called Hype Live and I'm now looking for a mid-level backend or full-stack developer role. Write me a one-page resume with a summary, skills section, work experience, and education. Keep it clean and ATS-friendly. Emphasize API development, real-time systems, and database work.`},{q:`Bad Prompt B — improved output`,a:`Absolutely — with your background, you actually have a strong story for a resume because you combine:

  • Real-world hands-on work experience
  • Leadership/customer-facing roles
  • Full-stack development training
  • IT/cybersecurity interest
  • Persistence and career transition into tech

That combination stands out more than a generic "junior developer" resume.

Professional Summary
Recent Full-Stack Web Development graduate with hands-on experience building responsive web applications using JavaScript, React, Node.js, Express, and MongoDB. Background includes customer service, operations leadership, technical troubleshooting, and hands-on field work across multiple industries. Passionate about software development, cybersecurity, and building practical solutions with strong user experience and clean functionality. Known for adaptability, persistence, and fast learning in high-pressure environments.

Technical Skills
JavaScript • React • Node.js • Express.js • MongoDB • HTML5 • CSS3 • Tailwind CSS • Redux • Git / GitLab • REST APIs • Responsive Web Design • SQL / PostgreSQL • Basic Python • Cybersecurity Fundamentals

You also have a major advantage: your varied work history makes you look experienced and resilient instead of "just another bootcamp grad."

Send me what you currently have and I'll help transform it into something employer-ready.`},{q:`Bad Prompt B — what changed and why the output improved`,a:`What changed was the level of specificity and context. The original prompt was very broad and didn't give the AI enough information to create a tailored resume. The improved prompt provided specific details about your background, skills, and the type of role you're targeting. This allowed the AI to generate a much more relevant and personalized resume that highlights your unique strengths and experiences, making it more likely to catch the attention of employers.`},{q:`Bad Prompt C — original: "Make a quiz" — output`,a:`Make a quiz.

Sure! Here's a quick general knowledge quiz:

Quiz Time! 🎉

1. What is the capital of France?
   A) London  B) Berlin  C) Paris  D) Madrid

2. How many planets are in our solar system?
   A) 7  B) 8  C) 9  D) 10

3. What is 12 × 12?
   A) 124  B) 144  C) 134  D) 154

4. Who wrote Romeo and Juliet?
   A) Charles Dickens  B) Mark Twain  C) William Shakespeare  D) Jane Austen

5. What is the largest ocean on Earth?
   A) Atlantic  B) Indian  C) Arctic  D) Pacific

Answers: 1-C, 2-B, 3-B, 4-C, 5-D

Want me to make it harder, change the topic, or turn it into an interactive format?`},{q:`Bad Prompt C — my improved prompt`,a:`Create a 5-question multiple choice quiz about JavaScript fundamentals for someone who just completed their first week of a coding bootcamp. Each question should have 4 options (A–D) with one correct answer. Cover topics like variables, data types, and basic syntax. After each question, show whether the answer was correct and give a one-sentence explanation.`},{q:`Bad Prompt C — improved output`,a:`JavaScript Fundamentals Quiz — Week 1

Question 1:
Which keyword is used to declare a variable that cannot be reassigned?
  A) var
  B) let
  C) const ✓
  D) def

✅ Correct answer: C — const declares a variable whose binding cannot be reassigned. It's the preferred choice when a value won't change.

---

Question 2:
What data type is the value "hello" in JavaScript?
  A) integer
  B) boolean
  C) array
  D) string ✓

✅ Correct answer: D — Any value wrapped in quotes (single or double) is a string in JavaScript.

---

Question 3:
What will console.log(typeof 42) print?
  A) "integer"
  B) "number" ✓
  C) "string"
  D) "float"

✅ Correct answer: B — JavaScript uses "number" for all numeric values, whether whole or decimal.

---

Question 4:
Which of the following is a boolean value?
  A) "true"
  B) 1
  C) true ✓
  D) "false"

✅ Correct answer: C — A boolean is either true or false (no quotes). "true" with quotes is a string.

---

Question 5:
What symbol is used for single-line comments in JavaScript?
  A) #
  B) /* */
  C) //  ✓
  D) --

✅ Correct answer: C — // starts a single-line comment. /* */ is used for multi-line comments.`},{q:`Bad Prompt C — what changed and why the output improved`,a:`The output improved because the improved prompt provided specific details about the topic (JavaScript fundamentals), the target audience (someone who just completed their first week of a coding bootcamp), and the format (5 multiple choice questions with explanations). This allowed the AI to generate a quiz that is relevant, appropriately challenging, and educational for the intended user, rather than a generic quiz with no clear focus.`},{q:`Stretch goal — Bad Prompt A iterated 3 times. What changed each round?`,a:`Iteration 1: "Write code for a calculator"
→ Got a basic Python terminal calculator. No GUI, no context, just bare functions.

Iteration 2: "I want a more advanced version with a GUI."
→ Got a full Python tkinter GUI with scientific functions (sin, cos, log, sqrt, factorial), backspace, and parentheses support.

Iteration 3: "Now make it web-based using HTML, CSS, and JavaScript — styled dark theme, responsive layout, same scientific functions."
→ Got a fully styled single-file HTML calculator with dark UI, CSS grid button layout, and all the same scientific operations running in the browser with no Python required.

Each iteration added specificity: language → interface type → platform + visual style. The output got more useful and more targeted every round.`}]},{heading:`Lab 2 — Reading Code AI Wrote`,description:`You read it before you run it. That's the habit.`,qa:[{q:`The prompt I sent to get the name/color code`,a:`Write a simple JavaScript program that:
- Asks the user for their name
- Asks the user for their favorite color
- Displays a greeting message that includes both

Use prompt() for input and document.write() for output.
Add comments explaining each line.`},{q:`What does prompt() do?`,a:`prompt() opens a small browser dialog box that asks the user to type something. Whatever they type gets returned as a string and stored in the variable. If they click Cancel, it returns null.`},{q:`What does const mean?`,a:`const declares a variable that cannot be reassigned. Once you set it, that binding is locked. It doesn't mean the value itself is frozen (objects/arrays can still be mutated), but you can't point the variable at something new.`},{q:`What does the + operator do with text?`,a:`When used with strings, + concatenates them — it joins them end to end. So "Hello, " + "Diana" produces "Hello, Diana". This is called string concatenation.`},{q:`If I type "Marcus" and "green", what will the output be?`,a:`Hello, Marcus! Your favorite color is green.`},{q:`What happens if I click "Cancel" on the prompt?`,a:`The variable gets assigned null instead of a string. When null gets concatenated into the message, it renders as the literal word "null" — so you'd see: "Hello, null! Your favorite color is null." It doesn't crash, it just looks broken.`},{q:`Step 4 — I added a third question (favorite food) and updated the message. What did I add?`,a:`// Ask the user for their favorite food
const food = prompt("What is your favorite food?");

// Updated message including all three answers
const message = "Hello, " + name + "! Your favorite color is " + color + " and your favorite food is " + food + ".";`},{q:`Did the modification work?`,a:`Yes! The program now asks for the user's favorite food and includes it in the greeting message. If you type "Sushi" as your favorite food, the output would be: "Hello, Marcus! Your favorite color is green and your favorite food is Sushi." This shows how we can easily expand the functionality by adding more prompts and updating the output message accordingly.`}]},{heading:`Peer Activity — Prompt Partners`,description:`Same task, two prompts, one winner. Why?`,qa:[{q:`Task card we picked`,a:`Task 3: "Get AI to create a simple HTML page for a dog walking business."`},{q:`My prompt`,a:`Create me a simple but effective marketing html website for a dog walking business. It needs to have phone number, hours, rates, services, experiences, references. The user interface needs to be inviting yet simple and user friendly. But also attractive from a marketing perspective.`},{q:`My partner's prompt`,a:`Make a vanilla HTML site for a dog walking business, ensure that it is formatted properly, mobile first, and has sleek visuals. Does not need to be minimal, can be bubbly and fun. Please use just plain js, css and html`},{q:`Whose prompt got a better result and why?`,a:`So we deciced my prompt was better because it was more specific in terms of content (phone number, hours, rates, services, experiences, references) and also gave clearer guidance on the tone and style (inviting yet simple and user friendly, attractive from a marketing perspective). My partner's prompt was good in asking for mobile-first design and sleek visuals, but it lacked the specific content requirements and was a bit more vague on the desired tone. So some of it's feature were rendered useless because it wasn't attached to content. The result from my prompt had more of the necessary information for a business website with a complete functional product in the end.`},{q:`One thing I learned from seeing my partner's approach`,a:`One thing I learned about my partner's approach is that they focused more on the visual and design aspects (mobile-first, sleek visuals) which is important for user experience. It made me realize that while I was more focused on content and structure, I could have also included more specific design instructions to ensure the final product was not only informative but also visually appealing. It's a good reminder that both content and design are crucial for a successful website.`}]},{heading:`Exercise 1 — Tip Calculator`,description:`Read the code, trace the values, then modify it.`,qa:[{q:`Code tracing — if bill = 50 and tip = 20%, fill in the blanks`,a:`bill = 50
tipPercent = 20
tip = 50 * (20 / 100) = 50 * 0.20 = 10
total = 50 + 10 = 60`},{q:`Level 1 — show tip per person split between 2. What did I add?`,a:`document.write("<p>Tip per person (2): $" + (tip / 2).toFixed(2) + "</p>");`},{q:`Level 2 — split between any number of people. What changed?`,a:`const people = parseFloat(prompt("How many people are splitting the bill?"));

document.write("<p>Tip per person (" + people + "): $" + (tip / people).toFixed(2) + "</p>");
document.write("<p>Total per person: $" + (total / people).toFixed(2) + "</p>");`},{q:`Level 3 — "Generous tipper!" message if tip > $20. What did I add?`,a:`if (tip > 20) {
  document.write("<p>Generous tipper! 🎉</p>");
}`}]},{heading:`Exercise 2 — Temperature Converter`,description:`Trace the math, then flip the formula.`,qa:[{q:`Code tracing — if input is 212°F, fill in the blanks`,a:`F - 32 = 212 - 32 = 180
× 5/9 = 180 × 5/9 = 100
Result: 100°C  ✓ (the boiling point of water)`},{q:`Level 1 — convert Celsius to Fahrenheit instead. What changed?`,a:`const celsius = parseFloat(prompt("Enter temperature in Celsius:"));
const fahrenheit = (celsius * 9/5) + 32;
document.write("<p>" + celsius + "°C = " + fahrenheit + "°F</p>");`},{q:`Level 2 — ask the user which direction to convert. How did I handle that?`,a:`const direction = prompt("Type 'ftoc' for F→C or 'ctof' for C→F:");

if (direction === "ftoc") {
  const f = parseFloat(prompt("Enter Fahrenheit:"));
  const c = (f - 32) * 5/9;
  document.write("<p>" + f + "°F = " + c + "°C</p>");
} else if (direction === "ctof") {
  const c = parseFloat(prompt("Enter Celsius:"));
  const f = (c * 9/5) + 32;
  document.write("<p>" + c + "°C = " + f + "°F</p>");
} else {
  document.write("<p>Invalid direction entered.</p>");
}`},{q:`Level 3 — round to 1 decimal. What did AI tell me to use?`,a:`AI said to use .toFixed(1) — a built-in number method that rounds to a set number of decimal places and returns a string.

Example:
const c = ((f - 32) * 5/9).toFixed(1);
// 98.6°F → "37.0"`}]},{heading:`Exercise 3 — Compliment Generator`,description:`Arrays, Math.random(), and a first look at randomness in code.`,qa:[{q:`What is the list of compliments stored in?`,a:`An array — a variable that holds multiple values in order, accessed by index starting at 0. Written with square brackets:

const compliments = ["You're amazing", "You've got this", ...]`},{q:`What does Math.random() do?`,a:`It generates a random decimal number between 0 (inclusive) and 1 (exclusive) — something like 0.4273 or 0.9981. Every call gives a different number. It never returns exactly 1.`},{q:`What does Math.floor() do?`,a:`It rounds a decimal DOWN to the nearest whole number.
Math.floor(3.9) → 3
Math.floor(0.1) → 0

We need it because array indexes must be whole numbers — you can't access index 2.7.`},{q:`Why do we need compliments.length?`,a:`So the random number scales to however many compliments are in the array. If there are 5 compliments, we want a random index from 0–4. Using compliments.length means the math stays correct automatically even if we add or remove items later.`},{q:`If Math.random() returns 0.7 and there are 5 compliments, which index gets picked?`,a:`0.7 × 5 = 3.5
Math.floor(3.5) = 3
→ Index 3 gets picked (the 4th compliment in the array).`},{q:`Level 1 — I added 3 more compliments. What are they?`,a:`"You show up even when it's hard.",
"The way you think is genuinely impressive.",
"You're going to look back on this and be proud."`},{q:`Level 2 — display TWO random compliments. What changed?`,a:`const index1 = Math.floor(Math.random() * compliments.length);
const index2 = Math.floor(Math.random() * compliments.length);

document.write("<p>" + name + ", " + compliments[index1] + "</p>");
document.write("<p>Also: " + compliments[index2] + "</p>");

// Note: both could be the same compliment — that's expected.`},{q:`Level 3 — "Get another compliment" while loop. How did it work?`,a:`let again = "yes";

while (again === "yes") {
  const index = Math.floor(Math.random() * compliments.length);
  document.write("<p>" + name + ", " + compliments[index] + "</p>");
  again = prompt("Want another compliment? (yes/no)");
}

document.write("<p>You're all set. Go be great. 👊</p>");`}]}]},{number:8,label:`Day 3`,title:`Cohort Day 3 — Sequence, Selection, Iteration`,subtitle:`The three building blocks of every program ever written.`,color:`#34d399`,sections:[{heading:`Exercise 1 — Build with Sequence`,description:`Ask → process → display. Every line depends on the one before it.`,qa:[{q:`The prompt I wrote`,a:`Write a JavaScript program that asks the user for the original price of an item and what percentage discount is being applied. Calculate the discount amount and the final sale price. Display both the amount saved and what they'll pay.`},{q:`The code AI generated`,a:`// Ask for the original price
const originalPrice = parseFloat(prompt("What is the original price of the item? $"));

// Ask for the discount percentage
const discountPercent = parseFloat(prompt("What percentage discount is applied? (e.g. 20 for 20%)"));

// Calculate the discount amount
const discountAmount = originalPrice * (discountPercent / 100);

// Calculate the final price
const finalPrice = originalPrice - discountAmount;

// Display the results
document.write("<h2>Discount Summary</h2>");
document.write("<p>Original price: $" + originalPrice.toFixed(2) + "</p>");
document.write("<p>You save: $" + discountAmount.toFixed(2) + "</p>");
document.write("<p>You pay: $" + finalPrice.toFixed(2) + "</p>");`},{q:`Tracing with sample inputs — $80 item, 25% discount`,a:`originalPrice = 80
discountPercent = 25
discountAmount = 80 * (25 / 100) = 80 * 0.25 = 20
finalPrice = 80 - 20 = 60

Output:
Original price: $80.00
You save: $20.00
You pay: $60.00`},{q:`Does the sequence make sense? Does each line depend on the one before it?`,a:`Yes. You can't calculate discountAmount without both originalPrice and discountPercent. You can't calculate finalPrice without discountAmount. You can't display any of it until all three are computed. Each step is blocked until the previous one completes — that's sequence.`},{q:`Modification — I added 8% sales tax applied after the discount. What did I change?`,a:`// Add after finalPrice is calculated:
const tax = finalPrice * 0.08;
const totalWithTax = finalPrice + tax;

document.write("<p>Tax (8%): $" + tax.toFixed(2) + "</p>");
document.write("<p>Total with tax: $" + totalWithTax.toFixed(2) + "</p>");

// Sample trace on $80 item, 25% off:
// finalPrice = $60.00
// tax = 60 * 0.08 = $4.80
// totalWithTax = $64.80`}]},{heading:`Exercise 2 — Build with Selection`,description:`If/else — different conditions, different outcomes.`,qa:[{q:`The prompt I wrote`,a:`Write a JavaScript program that asks the user to enter their credit score. Based on the score, display a different message:
- 800 and above: "Excellent credit! You qualify for the best rates."
- 740 to 799: "Very good credit. Most lenders will approve you."
- 670 to 739: "Good credit. You'll qualify for most loans."
- 580 to 669: "Fair credit. Some lenders may work with you."
- Below 580: "Poor credit. Focus on building your score before applying."`},{q:`The code AI generated`,a:`// Ask the user for their credit score
const score = parseInt(prompt("Enter your credit score (300-850):"));

// Display message based on score range
if (score >= 800) {
  document.write("<p>Excellent credit! You qualify for the best rates.</p>");
} else if (score >= 740) {
  document.write("<p>Very good credit. Most lenders will approve you.</p>");
} else if (score >= 670) {
  document.write("<p>Good credit. You'll qualify for most loans.</p>");
} else if (score >= 580) {
  document.write("<p>Fair credit. Some lenders may work with you.</p>");
} else {
  document.write("<p>Poor credit. Focus on building your score before applying.</p>");
}`},{q:`Trace: score = 45. Which condition catches it? What message shows?`,a:`score = 45
45 >= 800? No.
45 >= 740? No.
45 >= 670? No.
45 >= 580? No.
Falls to else → "Poor credit. Focus on building your score before applying."`},{q:`Trace: score = 740. Which condition catches it?`,a:`score = 740
740 >= 800? No.
740 >= 740? Yes → "Very good credit. Most lenders will approve you."

740 lands in the second condition because >= 740 includes 740 exactly. It never reaches the "Good credit" block.`},{q:`Modification — added: if score is exactly 850 (perfect score), display a special message. What did I add?`,a:`// Must go FIRST before the >= 800 check, or 850 will match that instead
if (score === 850) {
  document.write("<p>Perfect score! You have maximum creditworthiness. 🏆</p>");
} else if (score >= 800) {
  document.write("<p>Excellent credit! You qualify for the best rates.</p>");
} else if (score >= 740) {
  ...

// Order matters — if >= 800 came first, 850 would match it
// and the exact-850 check would never be reached.`},{q:`What happens if I enter a negative number?`,a:`A negative number is less than 580, so it falls to the else block and displays "Poor credit. Focus on building your score before applying." JavaScript evaluates the conditions mathematically — it doesn't know that -200 isn't a real credit score.`},{q:`What happens if I enter a word instead of a number?`,a:`parseInt("excellent") returns NaN. Every condition — NaN >= 800, NaN >= 740, etc. — evaluates to false. It falls all the way to the else block and displays the "Poor credit" message. The program doesn't crash but it gives a meaningless answer — a real app would need input validation.`}]},{heading:`Exercise 3 — Build with Iteration`,description:`Loops — do something to every item in a list.`,qa:[{q:`The prompt I wrote`,a:`Write a JavaScript program that has a list of 5 streaming services with their monthly prices. Loop through the list and display each service and its price. At the end, show the total monthly cost and how much that is per year.`},{q:`The code AI generated`,a:`// List of streaming services with monthly prices
const services = [
  { name: "Netflix", price: 15.49 },
  { name: "Hulu", price: 7.99 },
  { name: "Disney+", price: 10.99 },
  { name: "HBO Max", price: 15.99 },
  { name: "Apple TV+", price: 9.99 }
];

let total = 0;

document.write("<h2>Monthly Streaming Costs</h2>");

// Loop through each service
for (let i = 0; i < services.length; i++) {
  total += services[i].price;
  document.write("<p>" + services[i].name + ": $" + services[i].price.toFixed(2) + "/mo</p>");
}

// Display totals
document.write("<hr>");
document.write("<p>Total per month: $" + total.toFixed(2) + "</p>");
document.write("<p>Total per year: $" + (total * 12).toFixed(2) + "</p>");`},{q:`Where does the loop start? Where does it end? How many times does it run?`,a:`Starts: i = 0 (Netflix, first item)
Ends: when i < services.length fails — i reaches 5 and 5 < 5 is false
Runs: 5 times (once per service, index 0 through 4)

Each pass: adds the price to total, displays the service name and price.`},{q:`Modification — 10% discount on any service over $12.00. What did I add?`,a:`for (let i = 0; i < services.length; i++) {
  let price = services[i].price;
  let note = "";

  if (price > 12.00) {
    const discounted = price * 0.90;
    note = " → $" + discounted.toFixed(2) + " after 10% discount";
    price = discounted;
  }

  total += price;
  document.write("<p>" + services[i].name + ": $" + services[i].price.toFixed(2) + note + "</p>");
}

// Output:
// Netflix: $15.49 → $13.94 after 10% discount
// Hulu: $7.99
// Disney+: $10.99
// HBO Max: $15.99 → $14.39 after 10% discount
// Apple TV+: $9.99
// Total per month: $56.30
// Total per year: $675.60`}]},{heading:`Pair Exercise — Prompt/Read Swap`,description:`One person prompts, the other reads the code cold. Then swap.`,qa:[{q:`Round 1 — the prompt that was used`,a:`Write a JavaScript program that takes a list of student scores and prints the highest one

const scores = [78, 95, 62, 88, 100, 74];

let highest = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > highest) {
    highest = scores[i];
  }
}

console.log("Highest score: " + highest);`},{q:`Round 1 — what the Reader said the code did (in plain English)`,a:`Cam and Phillip said that this was a program that takes test scores and finds the highest one and prints that.`},{q:`Round 1 — was the Reader right? What did the original prompt actually ask for?`,a:`Yes, they were right. The original prompt asked for a JavaScript program that takes a list of student scores and prints the highest one. The code initializes the highest score to the first element, then loops through the rest of the scores, comparing each one to the current highest. If it finds a higher score, it updates the highest variable. Finally, it prints out the highest score.`},{q:`Round 2 — the prompt that was used`,a:`Make a small program to call an async api in javascript

async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('User data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getUser();`},{q:`Round 2 — what the Reader said the code did`,a:`I said that I thought this code was making an API call to fetch user data.`},{q:`Debrief — what was harder: writing the prompt or reading the code?`,a:`The harder part was just properly explaining what the code said. I said that it was calling an API to fetch user data, but I had to read through it a few times to understand the flow and what the output would be. The prompt was straightforward to write, but interpreting the code required more careful reading and tracing.`},{q:`Did the code do what the prompt asked? Was anything missing?`,a:`Yes, the code did exactly what the prompt asked. It defines an asynchronous function getUser that makes a fetch call to a placeholder API to get user data. It checks if the response is okay, then parses the JSON and logs it. If there's an error at any point, it catches it and logs the error message. Finally, it calls the getUser function to execute the code. There doesn't seem to be anything missing — it fulfills the requirements of calling an async API and handling the response.`},{q:`Round 3 — the prompt that was used`,a:`Write some code that calculates a user weight loss given the weight from last week and the new weight
      
function calculateWeightLoss(lastWeekWeight, currentWeight) {
  // Calculate the difference
  let difference = lastWeekWeight - currentWeight;

  // Round to two decimal places
  difference = Math.round(difference * 100) / 100;

  if (difference > 0) {
    return \`Congratulations! You lost \${difference} units.\`;
  } else if (difference < 0) {
    return \`You gained \${Math.abs(difference)} units.\`;
  } else {
    return "Your weight stayed exactly the same.";
  }
}

// Example usage:
const lastWeek = 180.5;
const thisWeek = 178.0;
console.log(calculateWeightLoss(lastWeek, thisWeek));`},{q:`Round 3 — what the Reader said the code did`,a:`I said that this code calculates the weight loss (or gain) by finding the difference between last week's weight and the current weight, rounds it to two decimal places, and returns a message indicating whether the user lost weight, gained weight, or stayed the same.`},{q:`Debrief — what was harder: writing the prompt or reading the code?`,a:`The code was extra clear because he left comments and used descriptive variable names. It was easy to follow the logic and understand what it was doing. The prompt was also straightforward, but I think reading the code was easier this time because of how well it was written.`},{q:`Did the code do what the prompt asked? Was anything missing?`,a:`The code did exactly what the prompt asked. It calculates the weight loss (or gain) by finding the difference between last week's weight and the current weight, rounds it to two decimal places, and returns a message indicating whether the user lost weight, gained weight, or stayed the same. Nothing seems to be missing — it fulfills the requirements perfectly.`}]},{heading:`Bug Hunt 1 — The Off-by-One`,description:`Arrays start at 0, not 1. This one will get you if you're not paying attention.`,qa:[{q:`The buggy code`,a:`const numbers = [1, 2, 3, 4, 5];

for (let i = 1; i <= numbers.length; i++) {
  document.write("<p>Number: " + numbers[i] + "</p>");
}`},{q:`What did I THINK it would display before running it?`,a:`Looks like it should print numbers 1 through 5. i starts at 1, goes up to numbers.length (5), runs 5 times. Seems right — until you remember arrays are zero-indexed.`},{q:`What ACTUALLY happened when I ran it?`,a:`Number: 2
Number: 3
Number: 4
Number: 5
Number: undefined

It skipped 1 (index 0) and printed "undefined" at the end because numbers[5] doesn't exist — the array only goes up to index 4.`},{q:`What's the bug and why does it happen?`,a:`The loop starts at i = 1 instead of i = 0. Arrays are zero-indexed — numbers[0] is 1, numbers[1] is 2, etc. Starting at 1 skips the first element. And i <= numbers.length lets i reach 5, but numbers[5] doesn't exist, so it returns undefined.`},{q:`The fix`,a:`// Change i = 1 to i = 0, and <= to <
for (let i = 0; i < numbers.length; i++) {
  document.write("<p>Number: " + numbers[i] + "</p>");
}

// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5`}]},{heading:`Bug Hunt 2 — The Logic Error`,description:`A student scored 85 but the program says they failed. Or does it?`,qa:[{q:`The code to trace`,a:`const score = 85;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

if (grade === "F") {
  document.write("You failed with a score of " + score);
} else {
  document.write("You passed! Grade: " + grade);
}`},{q:`Trace — what grade does 85 actually get?`,a:`85 >= 90? No.
85 >= 80? Yes → grade = "B"
grade === "F"? No → "You passed! Grade: B"

The bug doesn't exist. The description was a trap — the code works perfectly. The lesson: trust your own trace, not the claim.`},{q:`Follow-up — I introduced a real bug so 85 incorrectly gets an A. What did I change?`,a:`// Swapped the threshold values so A fires before it should:
if (score >= 80) {    // was >= 90 — now 85 matches this first
  grade = "A";
} else if (score >= 90) {  // was >= 80 — now unreachable for most scores
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}
// 85 >= 80 → grade = "A" → "You passed! Grade: A" — wrong!`},{q:`Did my partner find the bug?`,a:`I put the bug in... here is the code...
const score = 85;
let grade;

if (score >= 85) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else {
  grade = "F";
}

if (grade === "F") {
  document.write("You failed with a score of " + score);
} else {
  document.write("You passed! Grade: " + grade);
}
  
Cam and Phillip found the bug right away. They said, "Wait, the A condition is wrong — it should be >= 90, not >= 85. That's why 85 is getting an A instead of a B. We all got 4.0 GPA's without needing to do all the work, sweet!" They were correct — the threshold for an A was set too low, causing the logic to assign an A to scores that should be Bs. Great catch!`}]},{heading:`Bug Hunt 3 — The Missing Piece`,description:`The total always shows $0. Why?`,qa:[{q:`The buggy code`,a:`const items = [
  { name: "Apples", price: 3.99 },
  { name: "Bread", price: 2.49 },
  { name: "Milk", price: 4.29 },
  { name: "Eggs", price: 5.99 }
];

let total = 0;

for (let i = 0; i < items.length; i++) {
  document.write("<p>" + items[i].name + ": $" + items[i].price + "</p>");
}

document.write("<h3>Total: $" + total.toFixed(2) + "</h3>");`},{q:`What's the bug?`,a:`The loop displays each item but never adds anything to total. The line total += items[i].price is missing inside the loop. total gets set to 0 on initialization and nothing ever changes it — so it prints $0.00 every time.`},{q:`The fix — what line did I add and where?`,a:`// Add total += items[i].price inside the loop:
for (let i = 0; i < items.length; i++) {
  total += items[i].price;  // ← this line was missing
  document.write("<p>" + items[i].name + ": $" + items[i].price + "</p>");
}

// Output:
// Apples: $3.99
// Bread: $2.49
// Milk: $4.29
// Eggs: $5.99
// Total: $16.76`},{q:`Extension — I added average price per item. What did I add?`,a:`const average = total / items.length;
document.write("<p>Average price per item: $" + average.toFixed(2) + "</p>");

// $16.76 ÷ 4 items = $4.19 average`}]},{heading:`Extend Challenge — Combine Everything`,description:`Sequence + selection + iteration in one program. All three at once.`,qa:[{q:`The prompt I used`,a:`Write a JavaScript program that has a list of 5 employees with their names and hours worked this week. Loop through the list. Pay each employee $18/hr for regular hours (up to 40). Any hours above 40 are overtime, paid at 1.5x ($27/hr). Display each employee's name and total pay. At the end, display the total payroll cost and how many employees worked overtime.`},{q:`The code AI generated`,a:`const employees = [
  { name: "Marcus", hours: 45 },
  { name: "Aaliyah", hours: 38 },
  { name: "Jordan", hours: 52 },
  { name: "Priya", hours: 40 },
  { name: "Devon", hours: 33 }
];

const regularRate = 18;
const overtimeRate = 18 * 1.5; // $27/hr

let totalPayroll = 0;
let overtimeCount = 0;

document.write("<h2>Weekly Payroll</h2>");

for (let i = 0; i < employees.length; i++) {
  const name = employees[i].name;
  const hours = employees[i].hours;
  let pay = 0;
  let note = "";

  if (hours > 40) {
    const regularPay = 40 * regularRate;
    const overtimePay = (hours - 40) * overtimeRate;
    pay = regularPay + overtimePay;
    note = " (includes overtime)";
    overtimeCount++;
  } else {
    pay = hours * regularRate;
  }

  totalPayroll += pay;
  document.write("<p>" + name + ": $" + pay.toFixed(2) + note + "</p>");
}

document.write("<hr>");
document.write("<p>Total payroll: $" + totalPayroll.toFixed(2) + "</p>");
document.write("<p>Employees who worked overtime: " + overtimeCount + "</p>");`},{q:`Trace — I counted overtime employees myself. Does it match?`,a:`Marcus: 45 hrs → overtime ✓  (40×$18 + 5×$27 = $720 + $135 = $855)
Aaliyah: 38 hrs → regular  ($38×$18 = $684)
Jordan: 52 hrs → overtime ✓  (40×$18 + 12×$27 = $720 + $324 = $1,044)
Priya: 40 hrs → regular  (40×$18 = $720)
Devon: 33 hrs → regular  (33×$18 = $594)

Manual count: 2 overtime employees
Program output: "Employees who worked overtime: 2" ✓ Matches.
Total payroll: $855 + $684 + $1,044 + $720 + $594 = $3,897.00`},{q:`Modification — I added average pay per employee. What did I add?`,a:`// After the loop, add:
const averagePay = totalPayroll / employees.length;
document.write("<p>Average pay per employee: $" + averagePay.toFixed(2) + "</p>");

// $3,897.00 ÷ 5 = $779.40 average`}]}]},{number:9,label:`Day 4`,title:`Cohort Day 4 — Structured Prompting & Applied Judgment`,subtitle:`How you ask shapes what you get. And what you get still needs your brain.`,color:`#f472b6`,sections:[{heading:`Exercise 1 — Role Prompting`,description:`Same question, three different roles. Watch how the output shifts.`,qa:[{q:`Prompt 1 — No role: "Explain what a variable is in JavaScript."`,a:`A variable in JavaScript is like a labeled box that stores information so your program can use it later.

For example:
  let name = "Diana";

Here's what's happening:
  • let tells JavaScript you are creating a variable
  • name is the variable's label
  • "Diana" is the value being stored

You can then use that variable later:
  console.log(name);
  // Output: Diana

Variables can store many kinds of data:
  let age = 25;          // Number
  let city = "Prescott"; // String (text)
  let isStudent = true;  // Boolean (true/false)

You can also change a variable's value:
  let score = 10;
  score = 20;
  console.log(score);
  // Output: 20

JavaScript mainly uses three ways to create variables:
  let   → Value can change
  const → Value should stay constant
  var   → Older way (mostly avoided today)

Example:
  let username = "Alex";
  const pi = 3.14;

A good way to think about it:
  Variable name  = label on the box
  Variable value = thing inside the box

So:
  let favoriteFood = "Pizza";

means: "Create a box called favoriteFood and store Pizza inside it."`},{q:`Prompt 2 — Teacher role: "You are a patient coding teacher for adults who have never programmed before. Explain what a variable is in JavaScript. Use a real-world analogy. Keep it to 3 sentences. No jargon."`,a:`A variable in JavaScript is like a labeled container you use to store something important, such as a box labeled "snacks" in your kitchen. The label helps you find and use what's inside later, and you can change what's in the box whenever you want. In JavaScript, a variable lets your program remember information like a name, number, or message.`},{q:`Prompt 3 — Technical writer role: "You are a senior technical writer at a software company. Write a concise reference entry for 'variable' in JavaScript. Include: definition, syntax for declaration (const, let, var), one code example, and one common mistake beginners make. Format with headers."`,a:`# Variable (JavaScript)

## Definition
A variable is a named container used to store data in a JavaScript program. Variables can hold values such as numbers, strings, objects, or functions, and those values can be referenced and updated later in the code.

---

## Declaration Syntax

  let count = 1;
  const appName = "MyApp";
  var oldStyle = true;

Keywords:
  let   → Declares a variable whose value can change
  const → Declares a variable whose value should not be reassigned
  var   → Older declaration style with different scoping behavior

---

## Example

  let userName = "Diana";
  console.log(userName);
  userName = "Alex";
  console.log(userName);

Output:
  Diana
  Alex

---

## Common Beginner Mistake — Reassigning a const Variable

  const age = 25;
  age = 26; // Error

const variables cannot be reassigned after declaration. Use let instead if the value needs to change.`},{q:`Which explanation would help YOU the most right now? Why?`,a:`The explanation that would help me the most right now is Prompt 3 — the technical writer role. It provides a clear definition, syntax, example, and common mistake all in one structured format. It helps me to know what to say in a professional context and gives me a reference I can return to. Even though I did actually like prompt 1's conversational style.`},{q:`What changed between outputs? (Length? Tone? Detail? Examples?)`,a:`The outputs changed mainly in length, tone, detail, and teaching style. The teacher version was short, simple, and friendly, using an everyday analogy instead of technical terms. The original explanation was more balanced and educational with several examples, while the technical writer version was the most detailed and formal, using structured sections, syntax references, and a practical example showing a common beginner mistake.`},{q:`Which role produced the most useful code example?`,a:`The senior technical writer role produced the most useful code example because it showed real JavaScript syntax, demonstrated how variables change, and included a common beginner mistake with const. It was the most practical example for someone learning how variables actually work in real code. The original explanation had examples but they were more basic and less focused on real-world coding scenarios, while the teacher role didn't include any code examples at all.`}]},{heading:`Exercise 2 — Constraint Prompting`,description:`Constraints force precision. Vague prompts get vague results.`,qa:[{q:`Prompt: "Create an HTML page about me with these constraints: my name is Diana Busch and I'm a student in an AI builder program — navy blue background (#1a1a2e), white text, amber (#f59e0b) headings — three sections: About, What I'm Learning, My Goal — no external CSS files, all styles inline or in a <style> tag — mobile-friendly — maximum 50 lines of code — include at least one link to my GitHub or LinkedIn."`,a:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Diana Busch</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#1a1a2e;color:#fff;font-family:Georgia,serif;padding:2rem 1.25rem;max-width:680px;margin:auto;line-height:1.7}
  h1{color:#f59e0b;font-size:clamp(1.8rem,6vw,2.6rem);letter-spacing:.03em;margin-bottom:.25rem}
  h2{color:#f59e0b;font-size:1.1rem;letter-spacing:.12em;text-transform:uppercase;margin:2.5rem 0 .6rem;border-bottom:1px solid #f59e0b33;padding-bottom:.4rem}
  p{font-size:clamp(.95rem,2.5vw,1.05rem);color:#e2e8f0}
  .tag{display:inline-block;background:#f59e0b22;color:#f59e0b;border:1px solid #f59e0b55;border-radius:4px;font-size:.8rem;padding:.15rem .5rem;margin:.2rem .2rem 0 0;font-family:monospace}
  .links{margin-top:3rem;display:flex;gap:1rem;flex-wrap:wrap}
  a{color:#f59e0b;text-decoration:none;border:1px solid #f59e0b;border-radius:4px;padding:.4rem 1rem;font-size:.9rem;letter-spacing:.05em;transition:all .2s}
  a:hover{background:#f59e0b;color:#1a1a2e}
</style>
</head>
<body>
<h1>Diana Busch</h1>
<p style="color:#f59e0b99;font-size:.9rem;letter-spacing:.08em">AI BUILDER · FULL-STACK DEVELOPER</p>

<h2>About</h2>
<p>I'm a developer and lifelong learner currently enrolled in an AI builder program, deepening my skills at the intersection of software engineering and artificial intelligence. With a background in full-stack development — from building live-streaming APIs to crafting polished front-end experiences — I bring real-world context to everything I build.</p>

<h2>What I'm Learning</h2>
<p>Building intelligent, AI-powered applications using modern tools and APIs. My current focus spans:</p>
<br>
<span class="tag">Anthropic API</span><span class="tag">Prompt Engineering</span><span class="tag">AI-Powered Apps</span>
<span class="tag">React / TypeScript</span><span class="tag">NestJS</span><span class="tag">Full-Stack Dev</span>

<h2>My Goal</h2>
<p>To build AI tools that are genuinely useful — bridging the gap between cutting-edge models and real human needs. I want to contribute to products that create opportunity, starting with the communities that need them most.</p>

<div class="links">
  <a href="https://github.com/DBusch-Developer" target="_blank">GitHub</a>
  <a href="https://www.linkedin.com/in/diana-busch-a17882363/" target="_blank">LinkedIn</a>
</div>
</body>
</html>`},{q:`Did it stay under 50 lines?`,a:`Yup! Only 40 lines.`},{q:`Did it look right in Replit? Was it readable on mobile?`,a:`I didn't open it in Replit, but I did run it live on my own machine and it looked good. It is responsive. I checked it out in the dev tools and it looks great on mobile. The layout is simple and uses relative font sizes, so it should be readable on mobile too.`},{q:`Modification — I changed the color scheme and updated My Goal.`,a:`Background: deep twilight purple (#1e1528). Headings & accents: warm terracotta (#e07a5f). Skill tags: desert gold (#c9a96e). Body text: warm peach-cream (#eddfd4).

My Goal: To become an invaluable asset by staying adaptable — leveraging the right tools to cut production time without sacrificing quality or integrity. In a field that evolves daily, I believe the developers who thrive are the ones who know how to work smarter, ship faster, and still deliver results that hold up.`}]},{heading:`Exercise 3 — System Instruction Practice`,description:`System instructions set the rules before the game starts.`,qa:[{q:`Scenario A — system instruction I wrote for debugging help (asks questions first, never rewrites whole code, plain language explanations)`,a:`You are a coding debugging assistant. Follow these rules for every response:
1. Before giving any solution, ask me at least one clarifying question about what I've already tried.
2. Never rewrite my entire code — only suggest changes to the specific lines that are broken.
3. Explain every error in plain language first, then show the fix.
4. If I seem frustrated, slow down and break the explanation into smaller steps.
5. Always confirm I understand before moving on.`},{q:`Scenario A — I tested it. How did AI behave differently?`,a:`Without the instructions, the AI would jump straight to solutions — rewriting your whole component, dumping explanations, and moving on without checking if you followed.
With the instructions, it actually behaved like a patient collaborator: asked what you'd already tried before saying anything, only touched the broken lines, explained errors in plain English first, slowed down when you seemed frustrated, and checked in before moving forward.
The biggest shift was from information delivery to actual conversation.`},{q:`Scenario B — system instruction I wrote for brainstorming app ideas (5 at a time, who uses it, difficulty 1-5)`,a:`You are a product brainstorming assistant. Follow these rules:
1. Always give exactly 5 app ideas per response — no more, no less.
2. For each idea, include: the app name, a one-sentence description, who the target user is, and a difficulty rating from 1 (beginner) to 5 (advanced).
3. After listing all 5, ask if I want you to go deeper on any of them or generate 5 more.
4. Never repeat an idea you've already suggested in this conversation.`},{q:`Scenario B — I tested it. How did AI behave differently?`,a:`Without the instructions, the AI would have rambled — maybe 3 ideas, maybe 8, in whatever format felt natural, with inconsistent details and no real structure. It might give a target user for one idea but skip it for another, and it definitely wouldn't track what it had already suggested.
With the instructions, every response was a clean, predictable package: exactly 5 ideas, each with a name, description, target user, and difficulty rating — formatted the same way every time. Then it handed control back to you by asking how to proceed rather than just barreling forward.
The biggest shift was from a brainstorm dump to a structured, repeatable system you could actually navigate.`},{q:`Scenario C — system instruction I wrote for quizzing me on the week's content (one question at a time, wait for answer, then explain)`,a:`You are a quiz assistant reviewing what I learned this week in my AI builder program. Follow these rules:
1. Ask me exactly ONE question at a time — never multiple at once.
2. After I answer, tell me if I'm correct or incorrect.
3. Whether I'm right or wrong, give me a clear one-paragraph explanation of the correct answer.
4. Then ask if I'm ready for the next question before continuing.
5. Keep track of how many I've gotten right and tell me my score at the end.`},{q:`Scenario C — I tested it. How did AI behave differently?`,a:`Without the instructions, the AI would have fired off several questions at once, given a quick "correct!" or "nope" with minimal explanation, and just kept going without checking if you were ready — probably losing track of your score entirely by the end.
With the instructions, it felt like a real quiz: one question, a clear right or wrong, a solid paragraph explaining the concept whether you got it right or wrong, and a genuine pause before moving on. Your score was tracked the whole time and handed to you at the end like an actual result.
The biggest shift was from a chaotic Q&A to a structured learning experience with real feedback and accountability.`}]},{heading:`Peer Activity — Context Comparison`,description:`No context vs. rich context. The difference speaks for itself.`,qa:[{q:`Round 1 — no context: "Build me a landing page for a small business"`,a:`So, I put this simple prompt into ChatGPT and again, it wasn't able to load the preview so I immediately trashed it. I went over to Claude code and tried the same prompt. But Claude didn't just start building — it asked me a bunch of questions first to get more context.`},{q:`Round 2 — rich context - My prompt:`,a:`Build a landing page for "Terrain Co.," an outdoor and fitness gear retail shop in the Deep Ellum neighborhood of Dallas, TX. Owner: Jordan Hayes.
Products:

Trail Runner Pack: $89
Summit Shorts: $65
Performance Tee: $48
Hydro Flask Pro: $38
Resistance Band Kit: $42
Recovery Roll Pro: $55

Features needed:

Hero section with business name and tagline: "Gear built for where you're going."
Product showcase grid with prices and Add to Cart buttons
About section (Jordan has 6 years experience, field-tests every product before selling it, offers a lifetime repair guarantee and sustainably sourced gear)
Customer reviews section with 3 testimonials
Contact section with phone number (214) 555-0183, email hello@terrainco.com, hours Mon–Sat 9am–6pm
Colors: forest greens and warm stone/amber browns
Mobile-friendly
Include a "Shop the Collection" button"`},{q:`Which one would you actually use? Why?`,a:`I would definitely use the second one with the rich context. The first prompt was too vague, and the AI didn't have enough information to create something useful. It would have been a generic landing page that might not even fit the business's needs. The second prompt gave specific details about the business, products, features, and design preferences, which allowed the AI to create a much more tailored and relevant landing page. The rich context is what makes the output actually usable and aligned with the business's brand and goals.`},{q:`What specific details from the rich prompt showed up in the output?`,a:`It reflected everything that I had in the rich prompt.`}]},{heading:`Applied Judgment — Accept, Reject, or Modify?`,description:`AI produced it. Now you decide what to do with it.`,qa:[{q:`Scenario A — AI wrote a professional email to a potential employer claiming "extensive experience" and "enterprise-grade solutions." Would you send it?`,a:`No. The email claims "extensive experience" and "proven track record of delivering enterprise-grade solutions" — none of which is accurate for someone early in their journey. It also lists skills (Java, C++, AWS, Docker, Kubernetes, machine learning) that don't reflect my actual current skill set.

Sending it would be dishonest, and if I got the interview, I'd be caught immediately when asked to walk through any of it.`},{q:`Scenario A — what's wrong with it and how would you modify it?`,a:`What's wrong: it overclaims experience, lists skills I don't have, and uses hollow corporate phrases like "invaluable asset" and "esteemed organization" that don't sound like a real person.

How I'd modify it:
- Replace "extensive experience" with my actual background (bootcamp, Hype Live, current program)
- Only list skills I actually have and can speak to
- Write in my own voice, not AI's formal template voice
- Be specific about what I'm learning and what I'm excited to build
- Keep it short — 3 paragraphs max`},{q:`Scenario B — AI wrote an optimized isPrime function using i += 6 loop logic. Accept, reject, or modify?`,a:`Modify. The function is correct and optimized — it works. But the loop optimization (i += 6, checking i and i+2) is advanced and I can't explain why it works, which means I can't debug it or own it in an interview.

I'd ask AI for a simpler version I can actually understand, use that, and save the optimized version as a comment for reference once I learn more about number theory and modular arithmetic.`},{q:`Scenario C — AI suggested these app names for a food truck finder: TruckTracker, StreetEats, FoodRoamer, BiteBus, RollUp. Which would you pick?`,a:`I like StreetEats the best. It's catchy, easy to remember, and clearly conveys the idea of finding food trucks on the street.`},{q:`Scenario C — do any of them already exist? What would YOU name it?`,a:`Yes — most of them do, to varying degrees. TruckTracker and StreetEats are the most taken, with active businesses and even acquisitions behind them. RollUp and BiteBus exist in smaller local variations. FoodRoamer is the clearest opening — no prominent brand is holding that name. To check these yourself you'd search the name directly, look it up on the USPTO trademark database, check for active domain registrations, and search the App Store and Google Play. I would name it CurbFind — it has a nice ring to it, suggests finding food on the curb, and isn't taken by any major players in the food truck space.`}]},{heading:`Ethics Scenarios`,description:`No single right answer. The point is to think it through.`,qa:[{q:`Scenario 1 — The Resume: AI wrote your entire resume and portfolio descriptions. You get an interview. They ask you to walk through a project AI made up. What went wrong and where should the line be?`,a:`The line is that you should never claim AI-generated work as your own. If you use AI to help write your resume or portfolio, you need to be transparent about it and only include things that are true and that you can speak to in an interview. If AI made up a project, that's a red flag — it means the resume isn't an accurate reflection of your skills and experience. In an interview, if asked to walk through a project that doesn't exist, you'd be caught immediately, which could damage your credibility and chances of getting the job. The ethical approach is to use AI as a tool for improving how you present your real experience, not as a way to fabricate experience you don't have.`},{q:`Scenario 1 — How would you use AI for job applications without crossing that line?`,a:`I used AI to help me write the content for my personal landing page, but I made sure all the information was accurate and reflected my real background, skills, and goals. I also used AI to help me draft a cover letter, but I personalized it with specific details about why I'm interested in the company and how my actual experience relates to the role. I would never let AI write something that isn't true or that I can't speak to in an interview. Instead, I use it to help me communicate my real experience in the best way possible.`},{q:`Scenario 2 — The Client Project: AI wrote all the code, client is happy, but 6 months later something breaks and you can't fix it. What should you have done differently?`,a:`I should have been transparent with the client about using AI to generate the code and set clear expectations about my role in the project. I should have reviewed and tested the AI-generated code thoroughly to ensure I understood how it works and could maintain it. I also should have documented the code and any decisions made during development so that if something breaks, I have a reference to troubleshoot from. The line is that you can use AI to assist with coding, but you need to take responsibility for the final product — that means understanding it, being able to explain it, and being prepared to fix it if issues arise.`},{q:`Scenario 2 — What's the minimum level of understanding you need to deliver responsibly?`,a:`At a minimum, you need to understand the overall structure of the code, the purpose of each component, and how they interact. You should be able to explain the logic behind the code and identify where potential issues could arise. You don't necessarily need to understand every single line, but you should have a solid grasp of how the code works as a whole and be able to troubleshoot common problems. If you can't do that, then you're not delivering responsibly because you won't be able to maintain or fix the code when something goes wrong. You have the tools to be able to learn and understand the code, or at least just have AI explain it to you and document it, so you need to put in the effort to do that before delivering it to a client.`},{q:`Scenario 3 — The Bias Check: AI's description of a "typical software engineer" vs. a "typical nurse." What assumptions did it make?`,a:`Prompt: "Write a description of a typical software engineer." 
AI Output: "A typical software engineer designs, builds, tests, and improves computer programs, websites, apps, or systems. They spend much of their day writing code, fixing bugs, reviewing other people’s code, and working with teammates to solve technical problems.

A software engineer is usually curious, detail-oriented, and comfortable learning new tools because technology changes often. They may work on anything from a mobile app to a company database to the behind-the-scenes systems that keep a website running.

They do not just “type code all day.” A big part of the job is understanding what users need, breaking big problems into smaller steps, communicating with a team, and making sure the final product works reliably." 

Prompt: "Write a description of a typical nurse."

AI Output: "A typical nurse is a trained healthcare professional who cares for patients, supports doctors and medical teams, and helps people through illness, injury, recovery, and routine care. Nurses often check vital signs, give medications, monitor symptoms, explain treatment plans, comfort patients, and communicate with families.

A good nurse is usually compassionate, patient, detail-oriented, and able to stay calm under pressure. They often work long shifts and must balance medical knowledge with emotional support, because patients may be scared, confused, or in pain. Nurses play a key role in hospitals, clinics, nursing homes, schools, and community health settings."

Assumptions:
- The software engineer is assumed to be someone who works primarily with technology, spends most of their time coding, and is comfortable with constant learning and change.
- The nurse is assumed to be someone who works in a healthcare setting, provides direct patient care, and has a strong emotional component to their work.

These descriptions reflect common stereotypes about these professions. The software engineer is portrayed as a tech-focused problem solver, while the nurse is portrayed as a compassionate caregiver. These assumptions can affect people who don't match the stereotype — for example, a nurse who is also skilled in technology might feel that their technical skills are overlooked, or a software engineer who values emotional intelligence might feel that their interpersonal skills are undervalued. It's important to recognize that individuals in any profession can have a wide range of skills and qualities that may not fit the typical stereotype.
`},{q:`Scenario 3 — Where do these assumptions come from? How does this affect people who don't match the stereotype?`,a:`These assumptions come from societal stereotypes and media portrayals of these professions. For software engineers, the stereotype often emphasizes technical skills, problem-solving, and a focus on technology, while downplaying interpersonal skills or diversity in backgrounds. For nurses, the stereotype emphasizes compassion, caregiving, and emotional support, while sometimes overlooking the technical and critical thinking skills required in nursing.`}]},{heading:`Build with Judgment`,description:`Build something small. Document every decision you made along the way.`,qa:[{q:`What I built`,a:`PromptForge — a standalone HTML prompt template library. A fully offline, single-file app with 23 prompt templates organized across 10 categories (sequence, selection, iteration, role prompting, constraints, chain-of-thought, few-shot, format control, system instructions, and review). Features include sidebar navigation, live search, a favorites system that persists in localStorage, copy buttons with visual confirmation, and a keyboard shortcut (/) to jump to search. No frameworks, no dependencies — just HTML, CSS, and vanilla JavaScript.`},{q:`Decision table — AI output → my decision → why`,a:`AI Output                                              | My Decision | Why
-------------------------------------------------------|-------------|----
Generated generic placeholder templates                | Rejected    | Replaced all 23 with real, fully written prompts — placeholders aren't useful
Used light color scheme by default                     | Modified    | Switched to dark theme matching my aesthetic (same palette as portfolio)
Included localStorage for favorites                    | Accepted    | Persistence across sessions is genuinely useful — no reason to remove it
Added a "/ to search" keyboard shortcut                | Accepted    | Small detail but makes the tool feel professional and intentional
Category counts showed in sidebar                      | Accepted    | Helpful at a glance — shows which categories have the most templates`}]},{heading:`Peer Activity — Explain AI to a Non-Technical Person`,description:`2 minutes. One analogy. One strength. One weakness. No jargon.`,qa:[{q:`My 2-minute explanation (what I actually said)`,a:`AI is a computer program that has been giving a bunch of information and examples, and it learns patterns from that data. So when you ask it a question or give it a prompt, it uses those patterns to generate a response.`},{q:`Partner feedback — did they understand it? Any jargon they didn't follow?`,a:"He gave me an 8 out of 10. I didn't use any jargon, but he said the concept of `patterns` was a little vague and could be clearer."},{q:`Partner feedback — what was the strongest part?`,a:`He said the strongest part was the idea that AI learns from examples and data, which is a key concept.`},{q:`What I'd change about my explanation for next time`,a:`I would try to give a more concrete example of what I mean by 'patterns' — maybe by comparing it to how a child learns language by hearing lots of sentences and then can generate their own sentences based on that. I might say something like: 'AI is like a child who has read millions of books and can now write its own stories by recognizing the patterns in those books.'`}]}]}]},{label:`Week 2`,days:[{number:10,label:`Day 1`,title:`Week 2, Day 1 — HTML Foundations`,subtitle:`Read it. Build it. Style it. Explain it.`,color:`#22d3ee`,sections:[{heading:`Exercise 1 — Read AI-Generated HTML`,description:`Read every line. Name every tag. Before you write a single character.`,qa:[{q:`The HTML ChatGPT generated for the community center prompt`,a:`<!DOCTYPE html>
<!-- Document type declaration — tells the browser this is HTML5 -->
<html>
  <!-- Root element that wraps the entire page -->
  <head>
    <!-- Contains metadata about the page — not visible to the user -->
    <title>Riverside Community Center</title>
    <!-- Text that appears in the browser tab -->
  </head>
  <body>
    <!-- Everything the user actually sees lives here -->

    <!-- Main heading section -->
    <h1>Riverside Community Center</h1>

    <!-- Description paragraph -->
    <p>Welcome to the Riverside Community Center — a welcoming space where neighbors of all ages come together to learn, connect, and grow.</p>

    <!-- Programs offered -->
    <ul>
      <!-- Each program is its own list item -->
      <li>Youth After-School Program</li>
      <li>Senior Fitness & Wellness Classes</li>
      <li>Adult Continuing Education</li>
      <li>Community Garden Workshop</li>
    </ul>

    <!-- Signup link -->
    <a href="#">Sign Up for Programs</a>

    <!-- Image placeholder -->
    <img src="community.jpg" alt="Riverside Community Center">

  </body>
</html>`},{q:`Tag Reference Table — tag, purpose, what it looks like in the browser (DOCTYPE, html, head, title, body, h1, p, ul, li, a, img)`,a:`Tag              | Purpose                                          | Browser Appearance
-----------------+--------------------------------------------------+------------------------------------------
<!DOCTYPE html>  | Tells the browser this is an HTML5 document     | Nothing — not rendered on the page
<html>           | Root container that wraps the entire page        | Nothing — purely structural
<head>           | Holds metadata: title, links, scripts            | Nothing visible on the page
<title>          | Sets the text shown in the browser tab           | Shows in the tab — not on the page itself
<body>           | Contains all visible content                     | The entire visible page
<h1>             | Primary heading — the top-level title            | Large bold text (~2x normal size by default)
<p>              | A paragraph of text                              | Block of text with top and bottom spacing
<ul>             | Unordered list — container for bullet points     | Indented list with bullet markers
<li>             | A single item inside a list                      | One bullet point line
<a>              | Anchor — creates a clickable hyperlink           | Blue underlined text (default browser style)
<img>            | Embeds an image from a file path or URL          | The image itself, or a broken icon if missing`},{q:`Which tag doesn't have a closing tag? Why not?`,a:`<img> — and technically <!DOCTYPE html> as well, though that's not really a tag in the usual sense.

<img> is what's called a void element. It doesn't wrap any content — it doesn't contain text or other tags. It just points to a source file and says "put the image here." Since there's nothing to open and close around, there's no closing tag. The same rule applies to <br>, <hr>, <input>, and <meta>. They all work by themselves because they have nothing to contain.`},{q:`What would happen if you deleted the <body> tag but kept everything inside it?`,a:`The page would probably still look fine. Chrome and Firefox are extremely forgiving — they'll infer where the body content starts and render it anyway. Most browsers auto-correct broken structure before they show you anything.

But technically the document is invalid HTML. You'd lose the ability to target body { } in CSS cleanly, tools that parse the DOM strictly (accessibility software, some search engine crawlers) might trip on it, and other developers reading your code would be confused. Visually identical, structurally broken. The browser fixed your mistake and didn't tell you.`}]},{heading:`Exercise 2 — Build a Basic Page from Scratch`,description:`No AI. No copy-paste. You and a blank file.`,qa:[{q:`What I built — describe the page and what you added step by step`,a:`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
</head>
<body>
    <h1>Diana Busch</h1>
    <p>I am a full-time student at Yavapai College pursuing my Bachelor's Degree in Computer Science.</p>
    <img src="https://amsterdamduckstore.com/wp-content/uploads/2022/08/Lucky-Cat-Rubber-Duck-front.jpg" alt="Lucky Cat Rubber Duck" width="200">
    <br/>
    <a href="https://prompt-forge-woad-one.vercel.app/" target="_blank">PromptForge</a>
    <ul>
        <li>Python</li>
        <li>Rust</li>
        <li>Prompt Engineering</li>
    </ul>
</body>
</html>`},{q:`What felt natural to type? What felt confusing?`,a:`Natural: the nesting logic clicked pretty fast. html wraps everything, head sits above body, all the visible stuff goes inside body. Once I saw it as a set of containers inside containers, typing the structure felt mechanical in a good way.

Confusing: finding a copy-able image address on the internet that actually worked. Right-clicking and copying an image URL sounds simple until the image just doesn't render — some sites block hotlinking so you get a broken icon instead. Had to try a few before one actually loaded on the page.`}]},{heading:`Exercise 3 — Add CSS Using an External Stylesheet`,description:`Same HTML. One new file. Now it actually looks like something.`,qa:[{q:`Box model check — what DevTools showed when I changed body padding from 40px 24px to 80px 24px`,a:`In the Computed tab, the box model diagram shows four layers: margin, border, padding, content. When I changed the top/bottom padding from 40px to 80px, the green padding section in the diagram visibly grew — the top and bottom slices got taller. The content area didn't change size at all.

That's the thing that clicked: padding doesn't move the border outward — it pushes the content inward. The box stays where it is; the content just has more breathing room inside it. The page got taller because there was more space inside the body before the content started, not because the body itself expanded outward.`},{q:`CSS changes I made beyond the starter styles to make it mine`,a:`Changed background-color to #0f0f1a — slightly darker than the starter's #1a1a2e, more contrast.

Changed h1 color to #60a5fa — the amber felt warm in a way that didn't match the cooler dark background I was going for. Blue felt more cohesive.

Added to p: background: rgba(255,255,255,0.03); padding: 20px; border-radius: 8px; — turns the paragraph into something that reads like a card floating on the dark background. Subtle but makes the text feel intentional instead of just dropped on the page.

Changed ul { list-style-type: square; } — small, but square bullets feel more deliberate than the default circle.

Added img { max-width: 100%; border-radius: 6px; margin: 16px 0; } — the image was overflowing the 800px container without max-width. Border-radius softens the edges.`}]},{heading:`Exercise 4 — Flexbox Header`,description:`Logo left. Nav right. Two lines of CSS made it happen.`,qa:[{q:`What happened when I changed justify-content: space-between to center? To flex-start?`,a:`center — the logo and nav grouped together in the middle of the header. All the space that was pushing them apart collapsed; they sat side by side at the center instead of at opposite ends. The space-between logic was completely gone.

flex-start — both elements snapped to the left edge. Same result as center in terms of them grouping together, but pinned to the left instead of the middle. The right side of the header was completely empty. It looked broken rather than intentional.

space-between is the one that actually does the work — it distributes all the leftover space between the children, which in this case means pushing them as far apart as possible.`},{q:`What happened when I removed align-items: center?`,a:`The logo and nav links lost their vertical alignment. The logo text snapped to the top of the header container, and the nav links defaulted to stretching full height (the default align-items value is stretch). They were no longer sitting on the same invisible horizontal midpoint.

It was subtle on this page because the header doesn't have a lot of height, but you could see the logo and nav were no longer sitting at the same level. In a taller header it would have looked completely broken. align-items: center is what keeps both children lined up on that shared middle axis regardless of how tall each one is.`},{q:`In my own words: what flexbox actually does to create this layout`,a:`display: flex turns the header into a flex container, which means its direct children — the logo div and the nav — automatically line up in a row instead of stacking on top of each other like block elements normally would.

justify-content: space-between controls how that row distributes leftover horizontal space. "Space between" means all the extra space goes in the gap between the children — first child to the far left, last child to the far right, everything in between gets the remaining space. With two children, that puts one on each end.

align-items: center handles the vertical axis. It says: no matter how tall each child is, center them all on the same horizontal midline inside the container.

Take away any one of those three and the layout falls apart. flex gives you the row. justify-content decides where along the row things go. align-items decides where vertically they sit. All three together is what makes "logo left, nav right, vertically centered" happen in five lines of CSS.`}]},{heading:`Exercise 5 — AI, Improve My Page`,description:`AI suggests. You decide. That's the whole workflow.`,qa:[{q:`The CSS I sent to ChatGPT for improvement suggestions`,a:`body {
  font-family: Arial, sans-serif;
  background-color: #0f0f1a;
  color: #e0e0e0;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 24px;
}

h1 {
  color: #60a5fa;
  text-align: center;
}

p {
  font-size: 18px;
  line-height: 1.6;
  background: rgba(255,255,255,0.03);
  padding: 20px;
  border-radius: 8px;
}

a {
  color: #60a5fa;
}

li {
  margin-bottom: 8px;
}

ul {
  list-style-type: square;
}

img {
  max-width: 100%;
  border-radius: 6px;
  margin: 16px 0;
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background-color: #2d2d44;
  border-radius: 8px;
  margin-bottom: 32px;
}

.site-header .logo {
  color: #60a5fa;
  font-weight: bold;
  font-size: 20px;
}

.site-header nav a {
  color: #e0e0e0;
  margin-left: 16px;
  text-decoration: none;
}

.site-header nav a:hover {
  color: #60a5fa;
}`},{q:`Suggestion table — AI's change, what it does, my decision (Accept / Reject / Modify), why`,a:`AI's Change                                    | What It Does                                  | Decision | Why
-----------------------------------------------+-----------------------------------------------+----------+------------------------------------------------
Add 'Segoe UI', system-ui to font-family       | Better default font on Windows, clean fallback | Accept   | No downside — Arial stays as the fallback anyway
Add letter-spacing: -0.02em to h1             | Tightens heading — feels more intentional      | Accept   | The heading was slightly loose, this is a real improvement
Add transition: color 0.2s to a and nav a     | Hover color animates instead of snapping       | Accept   | Small but makes the page feel less static
Increase body line-height to 1.8              | More breathing room between lines              | Modify   | 1.8 felt too open — kept it at 1.6
Add border-bottom: 1px solid to nav links     | Replaces default underline with a styled one   | Reject   | Adds complexity I don't need at this stage
Add box-shadow to .site-header                | Depth / separation from the background         | Reject   | The flat look is intentional — not adding weight here`},{q:`The difference between my original, AI's full suggestion, and what I actually kept`,a:`My original CSS was functional but bare — it looked like dark mode defaults, not a considered design. It worked, but nothing felt deliberate.

AI's full suggestion would have touched almost every rule. Better font stacks, letter-spacing on headings, transitions everywhere, box shadows, refined hover states, a few layout tweaks. Some of it was genuinely good. Some of it felt like AI polishing for the sake of polishing — adding box shadows and underline styles that would have added visual noise without adding clarity.

What I actually kept: the font stack update (real improvement, zero cost), the letter-spacing on h1 (subtle but noticeable), and the link hover transition (one line, worth it). Rejected anything decorative that didn't make the content easier to read.

The curated version ended up with three changes instead of twelve. That's the workflow — AI finds the easy wins and the overcomplications at the same time. Your job is to tell them apart.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Say it out loud. If you can't explain it, you don't own it yet.`,qa:[{q:`The specific question my partner asked me`,a:``},{q:`The part I struggled to explain — and what I now know I need to revisit`,a:``}]},{heading:`Going Deeper (Optional)`,description:`Not required. Pick one if you have time and want to push further.`,qa:[{q:`Which challenge I tried and what happened`,a:``}]}]},{number:11,label:`Day 2`,title:`Week 2, Day 2 — Forms & JavaScript Interactivity`,subtitle:`Find it. Listen for it. Do something.`,color:`#a78bfa`,sections:[{heading:`Exercise 1 — Build a Contact Form`,description:`Pure HTML, no JavaScript yet. Get comfortable with form structure and built-in browser validation.`,qa:[{q:`The contact form HTML I typed out`,a:`<!DOCTYPE html>
<html>
  <head>
    <title>Contact</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Contact Me</h1>

    <form id="contact-form">
      <label for="name-input">Name</label>
      <input id="name-input" type="text" required>

      <label for="email-input">Email</label>
      <input id="email-input" type="email" required>

      <label for="message-input">Message</label>
      <textarea id="message-input" required></textarea>

      <button type="submit">Send</button>
    </form>
  </body>
</html>

The label-for and input-id pairing clicked immediately — the for attribute on the label has to match the id on the input. That's what connects them. Click the label, the input gets focus. It feels obvious once you see it work.`},{q:`What happened when I clicked Send without filling anything in`,a:`The browser caught it before anything happened. A small tooltip appeared directly on the Name field — "Please fill out this field." No JavaScript, no event listener, nothing I wrote. The required attribute on the input is enough. The form never actually submitted.

That's the browser doing validation for free. It knows the field is required, it knows it's empty, it stops the submit and tells the user where the problem is. All I had to do was write required.`},{q:`What happened when I entered an invalid email like notanemail`,a:`Same pattern — the browser caught it, showed a tooltip on the email field: "Please enter an email address." Again, no JavaScript. The type="email" attribute is doing that work. The browser knows what an email address is supposed to look like (something @ something . something), and it won't let the form submit if the value doesn't match that shape.

Two attributes — required and type="email" — gave me validation I didn't have to write a single line of JS for. I didn't expect that.`},{q:`CSS I added to style the form — and what changed visually`,a:`form {
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 480px;
}
input, textarea {
  padding: 8px;
  font-size: 16px;
}
button {
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
}

Before the CSS, everything was squished together — label directly touching input, no spacing, the button looked like a default browser button from 2003. After, the flex column layout stacked everything cleanly with consistent gaps. The max-width kept it from stretching all the way across the screen. cursor: pointer on the button was a small thing but it felt right — you expect a pointer on something clickable.`}]},{heading:`Exercise 2 — The Greet Me Page`,description:`Build the lecture example from scratch — getElementById, addEventListener, preventDefault.`,qa:[{q:`The greet.js I wrote and what each line does`,a:`// Grab the form element by its id — gives us the whole form so we can listen to it
const form = document.getElementById("greet-form");

// Grab just the input — we'll read its value when the form submits
const nameInput = document.getElementById("name-input");

// Grab the paragraph where we'll write the greeting
const greeting = document.getElementById("greeting");

// Listen for the form's submit event
form.addEventListener("submit", (event) => {
  // Stop the browser from reloading the page — without this, everything resets
  event.preventDefault();

  // Read whatever the user typed into the name input
  const name = nameInput.value;

  // Write the greeting into the paragraph as plain text
  greeting.textContent = \`Hello, \${name}!\`;
});

The pattern that locked in: find the element, listen for something to happen, do something when it does. Three steps. Every interactive thing on the web is some version of those three steps.`},{q:`What happened when I commented out event.preventDefault()`,a:`The page reloaded. I typed my name, clicked Greet me, saw the greeting flash on the screen for maybe half a second — then gone. The page reset to its initial state like I'd never touched it.

That's what forms do by default. A submit event tells the browser to send the form data somewhere, which triggers a navigation, which reloads the page. preventDefault intercepts that. It says: I'm handling this, don't do your default thing. Without it, the browser does its default thing and any DOM changes you made disappear immediately.

The greeting technically appeared — it just vanished before I could read it. Which is a useful way to understand what preventDefault is actually stopping.`},{q:`What changed when I switched from .textContent to .innerHTML and used <strong>`,a:`greeting.innerHTML = \`<strong>Hello, \${name}!</strong>\`;

The greeting appeared bold. The browser parsed the <strong> tags as actual HTML and rendered them — so instead of seeing the literal characters <strong>Hello...</strong>, I saw the word Hello in bold weight.

That's the difference. textContent treats everything as plain text — angle brackets, tags, all of it gets shown literally on the page. innerHTML treats the string as HTML and parses it, so tags actually do something. More powerful, but that power is exactly the problem.`},{q:`What the page showed when I typed <em>injected</em> as my name — and why that matters`,a:`With .innerHTML: the word injected appeared on the page in italics. The <em> tags were parsed as HTML and the browser rendered them. I didn't type italics — I typed angle brackets and the word em — but the page treated my input as a styling instruction and followed it.

With .textContent: the literal string <em>injected</em> appeared on the page. Angle brackets, the letters, all of it. No italics. Just text.

That's the risk of innerHTML with user input. If someone types a script tag instead of an em tag, the browser might execute it. Anything the user types gets treated as code. textContent closes that door — it doesn't matter what the user types, it'll always be rendered as text, never as markup or script. For anything coming from a user, .textContent is the right call.`}]},{heading:`Exercise 3 — A 2-Question Survey`,description:`Collect multiple inputs and display a summary on submit. Same pattern as Exercise 2, two inputs instead of one.`,qa:[{q:`The survey.js I wrote — and what I figured out on my own vs. where I got stuck`,a:`const form = document.getElementById("survey-form");
const favColor = document.getElementById("fav-color");
const yearsCoding = document.getElementById("years-coding");
const summary = document.getElementById("summary");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const color = favColor.value;
  const years = yearsCoding.value;

  summary.textContent = \`Your favorite color is \${color} and you've been coding for \${years} year(s).\`;
});

Figured out on my own: the structure was identical to the greet page, just with two inputs instead of one. getElementById twice, .value twice, build the string with both. That part felt natural — the pattern transferred.

Where I got stuck: I tried using yearsCoding.valueAsNumber instead of .value at first because I thought I should be working with a number type since the input is type="number". It returned NaN when I concatenated it into the string before I figured out .value gives me a string representation of whatever's in the field, which is what I needed here.`},{q:`The summary text that appeared — what it looked like in the browser`,a:`Your favorite color is teal and you've been coding for 2 year(s).

Plain text, showed up right below the form where the summary div lives. No styling yet — just the sentence appearing where nothing was before. The "(s)" on year is a small thing but it bugged me enough to add it. "1 year(s)" still looks awkward but it handles both cases without an if statement, which I didn't want to deal with yet.`},{q:`Stretch: the third question I added and how I included it in the summary`,a:`Added a "What's your favorite language?" text input with id="fav-lang".

In the HTML:
<label for="fav-lang">Favorite programming language?</label>
<input id="fav-lang" type="text" required>

In survey.js:
const favLang = document.getElementById("fav-lang");

// inside the submit handler:
const lang = favLang.value;
summary.textContent = \`Your favorite color is \${color}, you've been coding for \${years} year(s), and your favorite language is \${lang}.\`;

Grabbed the element, read the value, dropped it into the template literal. Same three steps. The pattern is the same whether there are two inputs or ten — you're just repeating the same moves.`}]},{heading:`Exercise 4 — AI, Build Me an Interactive Thing`,description:`Practice the accept/reject/modify workflow on JavaScript code. Read every line. Own every decision.`,qa:[{q:`The AI-generated HTML and JS (the doubler page)`,a:`<!-- doubler.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Number Doubler</title>
  </head>
  <body>
    <h1>Double Your Number</h1>
    <form id="double-form">
      <input id="num-input" type="number" placeholder="Enter a number">
      <button type="submit">Show double</button>
    </form>
    <p id="result"></p>
    <script src="doubler.js"><\/script>
  </body>
</html>

// doubler.js
// Get the form element by its ID
const form = document.getElementById("double-form");

// Get the number input element
const input = document.getElementById("num-input");

// Get the paragraph where the result will be shown
const result = document.getElementById("result");

// Listen for the form submit event
form.addEventListener("submit", function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the number from the input and convert it to a number
  const num = parseFloat(input.value);

  // Calculate the double
  const doubled = num * 2;

  // Display the result in the paragraph
  result.innerHTML = "Your number doubled is: " + doubled;
});`},{q:`My accept/reject/modify table — the decisions I made and why`,a:`Line                                          | What It Does                                        | Decision | Why
----------------------------------------------+-----------------------------------------------------+----------+----------------------------------------------
const form = document.getElementById(...)    | Finds the form so we can attach a listener          | Accept   | Correct and clear
const input = document.getElementById(...)   | Finds the number input so we can read its value     | Accept   | Same — no issue
const result = document.getElementById(...)  | Finds the output paragraph                          | Accept   | Fine
form.addEventListener("submit", function(){}) | Listens for submit, runs the callback               | Modify   | Switched to arrow function to stay consistent with how I've been writing it
event.preventDefault()                       | Stops the page from reloading                       | Accept   | Required — without this nothing persists
const num = parseFloat(input.value)          | Converts the string value to a float               | Modify   | Changed to Number() — same result, cleaner for whole numbers since I'm not doing decimal math here
result.innerHTML = "Your number doubled..."  | Writes the result into the paragraph                | Modify   | Switched to .textContent — the result is a number, no HTML needed, and innerHTML is a habit I don't want to build`},{q:`What I actually changed — and whether it still worked after`,a:`Three changes:

1. function(event) → (event) => — arrow function syntax. Purely stylistic, same behavior.

2. parseFloat(input.value) → Number(input.value) — Number() handles integers cleanly. If someone types 4, parseFloat gives 4, Number gives 4. Same result here. I just prefer Number() when I'm not expecting decimals.

3. result.innerHTML → result.textContent — the result is always a number in a plain string. There's no markup in it. No reason to use innerHTML.

Still worked after all three. Nothing broke. The page doubled the number and displayed it exactly as before — just without the innerHTML risk and with consistent arrow function style.`},{q:`If I broke something: the console error, the line, and how I fixed it`,a:`Nothing broke this time. All three changes were safe swaps — function declarations and arrow functions behave the same in an addEventListener callback, Number() and parseFloat() return the same value for whole number input, and .textContent vs .innerHTML produce identical output when the string contains no HTML.

The one thing I watched for: if I'd tried to use textContent on a string that contained tags I actually wanted rendered, it would have shown the tags literally. But since the output was always "Your number doubled is: 8" — plain text — that wasn't an issue.`}]},{heading:`Exercise 5 — Build Your Own`,description:`Pick one small interactive idea. Build it. Read every line. HTML and CSS first, then JavaScript one feature at a time.`,qa:[{q:`The option I picked (counter / todo / color changer / own idea) — and why`,a:`Option A — the counter. Three buttons (+1, -1, Reset), one number that updates.

I picked it because it has three separate event listeners, which means I had to repeat the find-it-listen-do-something pattern three times. The greet page and survey page only had one form submission to handle. The counter forced me to wire up multiple independent buttons and make sure they all updated the same piece of state. That felt like the right thing to practice.`},{q:`The HTML and CSS I wrote first — layout before logic`,a:`<!-- counter.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Counter</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1 id="count">0</h1>
    <div class="controls">
      <button id="btn-minus">-1</button>
      <button id="btn-reset">Reset</button>
      <button id="btn-plus">+1</button>
    </div>
    <script src="counter.js"><\/script>
  </body>
</html>

/* style.css additions */
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #0f0f1a;
  color: #e0e0e0;
  font-family: Arial, sans-serif;
}
h1 {
  font-size: 6rem;
  margin-bottom: 24px;
  color: #a78bfa;
}
.controls {
  display: flex;
  gap: 12px;
}
button {
  padding: 12px 24px;
  font-size: 1.1rem;
  cursor: pointer;
  border: 1px solid #3a3a3a;
  background: #1a1a2e;
  color: #e0e0e0;
  border-radius: 6px;
}
button:hover {
  background: #2d2d44;
}

Got the layout right before touching JS. The number is centered on the page, big enough to read at a glance, with three buttons below it. Confirmed it looked right in the browser first.`},{q:`The JavaScript I added — the pattern: find the element, add an event listener, do something`,a:`// counter.js

// Find the h1 where the count displays
const countDisplay = document.getElementById("count");

// Find all three buttons
const btnMinus = document.getElementById("btn-minus");
const btnReset = document.getElementById("btn-reset");
const btnPlus = document.getElementById("btn-plus");

// This variable holds the actual count — the source of truth
let count = 0;

// When +1 is clicked: increment, update the display
btnPlus.addEventListener("click", () => {
  count = count + 1;
  countDisplay.textContent = count;
});

// When -1 is clicked: decrement, update the display
btnMinus.addEventListener("click", () => {
  count = count - 1;
  countDisplay.textContent = count;
});

// When Reset is clicked: set count back to 0, update the display
btnReset.addEventListener("click", () => {
  count = 0;
  countDisplay.textContent = count;
});

The thing that clicked: the count variable is separate from what's on the page. The h1 just shows whatever count holds. I change count, then I update the display to reflect it. The DOM doesn't store the number — my variable does. The DOM is just the view.`},{q:`What surprised me or broke — and how I debugged it`,a:`Two things caught me.

First: I initially wrote const count = 0 instead of let count = 0. Clicked +1, got a console error — "Assignment to constant variable." The fix was obvious once I saw it — count needs to change, so it can't be a const. Switched to let.

Second: I initially tried to do count++ directly in the textContent line — countDisplay.textContent = count++. It showed the right number, but it was always one step behind because count++ returns the value before incrementing. Changed it to count = count + 1 on its own line and then set textContent separately. Clearer, and it works correctly.

Neither took long to fix. The console error for the const was immediate and specific. The off-by-one I caught just by clicking the button a few times and noticing the display lagged.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Screen-share your interactive page. Walk your partner through what happens when you click submit — step by step.`,qa:[{q:`The question my partner asked me`,a:``},{q:`The part I struggled to explain out loud — and what I now know I need to revisit`,a:``}]},{heading:`Going Deeper (Optional)`,description:`Pick one if you have time: JS validation on the survey, fade-in with CSS transitions, or localStorage persistence.`,qa:[{q:`Which challenge I tried and what happened`,a:`Tried the JS validation on the survey — checking if the favorite color field is empty before submitting, and showing an error message instead of the summary if it is.

const form = document.getElementById("survey-form");
const favColor = document.getElementById("fav-color");
const yearsCoding = document.getElementById("years-coding");
const summary = document.getElementById("summary");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const color = favColor.value.trim();
  const years = yearsCoding.value;

  if (color === "") {
    summary.textContent = "Please tell me your favorite color.";
    return;
  }

  summary.textContent = \`Your favorite color is \${color} and you've been coding for \${years} year(s).\`;
});

Two things I added beyond the spec: .trim() on the color value, because someone typing a space and hitting submit should still trigger the validation — and return inside the if block, which exits the function before it can reach the summary line. Without return, the if block would set the error message and then immediately overwrite it with the summary. The return is what makes the if act as a guard.`}]}]},{number:12,label:`Day 3`,title:`Week 2, Day 3 — Debugging & DevTools`,subtitle:`The bug is always somewhere. This is how you find it.`,color:`#fb923c`,sections:[{heading:`Warmup — Break Your Day 2 Page on Purpose`,description:`Four intentional breaks on greet.html + greet.js. Watch what happens. Write down what you saw.`,qa:[{q:`Break 1: Changed document.getElementById("name-input") to document.getElementById("nam-input"). What error appeared in the console?`,a:`Uncaught TypeError: Cannot read properties of null (reading 'value')
    at HTMLFormElement.<anonymous> (greet.js:14:22)

The typo "nam-input" doesn't match any element ID in the HTML, so getElementById returned null. Null has no .value property, so the moment the submit handler ran and tried to read nameInput.value, it crashed.

The console points directly to the line — greet.js:14 — which is where const name = nameInput.value; lives. The error message even tells you what property it was trying to read when it failed: "reading 'value'".`},{q:`Break 2: Commented out event.preventDefault(). Submitted the form. What happened and why did the result disappear?`,a:`The greeting flashed on the screen for maybe half a second, then vanished. The page reloaded and reset to its blank initial state.

What happened: without event.preventDefault(), the form did what forms do by default — it submitted, which triggered a page navigation. The browser reloaded the page. Any DOM changes (like writing the greeting into the paragraph) only existed in the current page's memory. Once the page reloaded, they were gone.

The greeting technically appeared. It just got wiped out before it could be read. That half-second flash is the browser completing the textContent write and then immediately reloading.

This is why preventDefault is the first line in every submit handler. Without it, you're racing against the browser's default behavior — and losing.`},{q:`Break 3: Changed nameInput.value to nameInput.values (plural). Clicked submit. What did the greeting show? Was there an error?`,a:`The greeting showed: "Hello, undefined!"

No console error. That's what makes this one sneaky — .values is not a property that exists on an input element, but JavaScript doesn't throw when you access a property that doesn't exist. It just returns undefined silently. Then undefined gets dropped into the template literal and rendered as the literal word "undefined".

So the code ran fine. The output just looked broken. This is a logic bug, not a syntax error — the kind the console won't catch for you. You have to read the output, notice it's wrong, and trace back to where the wrong value came from.`},{q:`Break 4: Moved <script src="greet.js"><\/script> from bottom of <body> to inside <head>. What happened and why?`,a:`The page crashed immediately on load with:

Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at greet.js:8:6

When the script tag is in <head>, the browser runs the JavaScript the moment it hits that tag — before it has parsed any of the HTML below it. So when greet.js tries to run document.getElementById("greet-form"), the form doesn't exist yet. getElementById returns null. And null.addEventListener() throws immediately.

The fix is putting the script at the bottom of <body>, after all the HTML elements, so the DOM is fully built before any JavaScript tries to interact with it. This is why the script tag belongs at the end — not because of style, because of execution order.`}]},{heading:`Exercise 1 — Read the Error`,description:`Five error messages. For each: type, plain English meaning, line number, fix.`,qa:[{q:`Error A: "Uncaught ReferenceError: username is not defined at script.js:3:18"`,a:`Type: ReferenceError

Plain English: JavaScript is looking for a variable called "username" but it doesn't exist anywhere in scope. The variable was declared as "userName" (capital N) on line 1 — but line 3 tries to use "username" (all lowercase). JavaScript is case-sensitive: userName and username are two completely different names.

Line: 3
Fix: Change "username" on line 3 to "userName" to match the declaration.

  // Before (broken):
  const greeting = "Hello, " + username;

  // After (fixed):
  const greeting = "Hello, " + userName;`},{q:`Error B: "Uncaught TypeError: Cannot read properties of undefined (reading 'length') at script.js:2:24"`,a:`Type: TypeError

Plain English: Something is undefined, and you tried to read a property off it. "let fruits;" declares the variable but never assigns it a value — so its value is undefined by default. undefined has no properties, so accessing .length on it throws.

Line: 2
Fix: Give fruits a value before you try to access its properties.

  // Before (broken):
  let fruits;
  console.log(fruits.length); // fruits is undefined

  // After (fixed):
  let fruits = [];
  console.log(fruits.length); // 0 — empty array has length`},{q:`Error C: "Uncaught SyntaxError: Unexpected token '}' at script.js:4:1"`,a:`Type: SyntaxError

Plain English: JavaScript found a closing curly brace it wasn't expecting. The function has one body that opens with { and needs one } to close it. There are two } in the code — line 3 closes the function correctly, and then line 4 has an extra one that has nothing to close.

Line: 4
Fix: Delete the extra } on line 4.

  // Before (broken):
  function sayHello(name) {
    console.log("Hello, " + name)
  }
  } // ← this one doesn't belong to anything

  // After (fixed):
  function sayHello(name) {
    console.log("Hello, " + name)
  }`},{q:`Error D: "Uncaught TypeError: document.getElementByID is not a function at script.js:1:24"`,a:`Type: TypeError

Plain English: getElementByID is not a real method — it doesn't exist on the document object. The correct spelling is getElementById (lowercase 'd'). JavaScript is case-sensitive, so "getElementByID" and "getElementById" are completely different names. Since getElementByID doesn't exist, calling it throws a TypeError.

Line: 1
Fix: Change the capitalization.

  // Before (broken):
  const title = document.getElementByID("main-title");

  // After (fixed):
  const title = document.getElementById("main-title");`},{q:`Error E: "Uncaught SyntaxError: Unterminated string literal at script.js:1:20"`,a:`Type: SyntaxError

Plain English: A string was opened with a quotation mark but never closed. The semicolon at the end got swallowed into the string — JavaScript kept reading looking for a closing quote and hit the end of the line without finding one.

Line: 1
Fix: Add the closing quote mark before the semicolon.

  // Before (broken):
  const message = "Hello, World!;
  //                            ^ missing closing quote — semicolon is inside the string

  // After (fixed):
  const message = "Hello, World!";`}]},{heading:`Exercise 2 — Console.log Detective`,description:`The code runs. The math is wrong. Add console.logs and trace exactly where it breaks.`,qa:[{q:`The calculateAverage bug — what SHOULD the output be for scores 80, 90, 70?`,a:`(80 + 90 + 70) / 3 = 240 / 3 = 80

Expected output: "Your average score is: 80"
Actual output:   "Your average score is: 120"

The sum is calculated correctly at 240. The bug is on the next line — dividing by 2 instead of 3.`},{q:`Console.log trace — fill in the variable values and mark which one is wrong`,a:`Variable   | Expected | Actual | Correct?
-----------|----------|--------|--------
score1     | 80       | 80     | ✓
score2     | 90       | 90     | ✓
score3     | 70       | 70     | ✓
sum        | 240      | 240    | ✓
average    | 80       | 120    | ✗

The sum is correct. The average is wrong. That tells you exactly which line has the bug: const average = sum / 2. The fix: change 2 to 3.`},{q:`Which line has the bug? What's the fix?`,a:`Bug line: const average = sum / 2;

240 / 2 = 120 — wrong. There are 3 scores, not 2.

Fix: const average = sum / 3;

240 / 3 = 80 — correct.

The console.log trace made this trivial to find. sum logged as 240 (correct), average logged as 120 (wrong). The bug is on the one line between those two logs.`},{q:`The applyDiscount bug — console.log(applyDiscount(150)) expected 135, got 15. Find and fix it.`,a:`Bug: const discounted = price * 0.10;

This calculates 10% OF the price — the discount amount — not the price after the discount is applied.

  price * 0.10 = 150 * 0.10 = 15   ← this is the discount, not the final price
  price * 0.90 = 150 * 0.90 = 135  ← this is what the customer actually pays

A 10% discount means the customer pays 90% of the original price.

Fix: const discounted = price * 0.90;

console.log added inside the function:
  console.log("price:", price);           // 150
  console.log("discounted:", discounted); // was 15, now 135

The naming "discounted" was part of the confusion — the variable was storing the discount amount, not the discounted price. Renaming it "discountAmount" for the original value and "discountedPrice" for what the customer pays would make the intent clearer.`}]},{heading:`Exercise 3 — DevTools Scavenger Hunt`,description:`Live browser inspection on your greet.html page from Day 2.`,qa:[{q:`Challenge 1 — Console tab: typed 2 + 2, document.title, then changed document.title. What happened?`,a:`2 + 2 → the console evaluated it and returned 4 immediately. The console is a live JavaScript environment — any valid JS expression runs right there.

document.title → returned "Greet Me" — the string from the <title> tag in the HTML head.

document.title = "I changed the title!" → the browser tab updated instantly. The text in the tab changed from "Greet Me" to "I changed the title!" without any page reload. That's the DOM being mutated live — JavaScript can change anything on the page, including the tab title, in real time.`},{q:`Challenge 2 — Elements tab: found the CSS rule styling the heading, changed color to red, added text-decoration: underline. What happened?`,a:`Clicking the h1 in the Elements panel highlighted it and opened the Styles panel on the right showing:

  h1 {
    font-size: 2rem;
    font-weight: normal;
    color: #f5f5f5;
    ...
  }

Double-clicking the color value (#f5f5f5) let me type "red" — the heading turned red instantly on the page without refreshing.

Adding text-decoration: underline in the Styles panel (clicking the empty space at the bottom of the rule) drew a line under the heading text immediately.

Both changes were live and instant. No saving, no refreshing. DevTools is editing the CSS in the browser's memory directly — which is why the changes disappeared on refresh. The actual style.css file on disk was never touched.`},{q:`Challenge 3 — Box Model: which element, and what were the margin, border, padding, and content dimensions?`,a:`Clicked on the form element in the Elements panel and switched to the Computed tab.

Box model:
  Content:  480px × auto (the max-width from the form CSS rule)
  Padding:  0 (no padding set on the form itself)
  Border:   0 (no border on the form)
  Margin:   0 top/bottom from reset, 0 left/right

Clicked on an input element:
  Content:  ~456px × 38px
  Padding:  10px top/bottom, 12px left/right (from the input CSS rule)
  Border:   1px on all sides (#2d2d44)
  Margin:   0

The box model diagram shows exactly what's eating space — the 10px padding inside the input is why text doesn't butt up against the edge.`},{q:`Challenge 4 — Network tab: how many files loaded? What did you find?`,a:`Refreshed with the Network tab open. Three files loaded:

  greet.html    — the HTML document itself
  style.css     — the stylesheet linked in the head
  greet.js      — the script linked at the bottom of body

Clicked on style.css in the Network tab → the Response tab showed the full CSS source, the same as what's in the file. The browser fetched it over HTTP and cached it.

No images, no fonts (Georgia is a system font, loaded locally), no external requests. Clean and minimal.`},{q:`Challenge 5 — Live editing: changed a paragraph's text in the Elements panel. What happened on refresh?`,a:`Double-clicked the text content of the <p id="greeting"> element in the Elements panel and typed "I edited this directly in DevTools."

It appeared on the page immediately. No JavaScript, no form submission — just direct DOM editing through the browser.

Refreshed the page → gone. Back to an empty paragraph, exactly as written in greet.html.

That's the important lesson: DevTools edits are in-memory only. They modify the living DOM that the browser is currently rendering, not the file on disk. The moment you refresh, the browser reloads the original HTML and the change disappears. DevTools is for experimenting and debugging — not for making permanent changes.`}]},{heading:`Exercise 4 — Fix AI's Bugs`,description:`Four AI-generated programs, one bug each. Found without asking AI first.`,qa:[{q:`Buggy Program 1 — Greeting Generator: heading stays empty. Found the bug, fixed it.`,a:`Bug: document.getElementById("greetng") — typo, missing the 'i'.

getElementById("greetng") searched the DOM for an element with id="greetng". There is no such element — the h1 has id="greeting". So it returned null. Then null.textContent = greeting threw:

  Uncaught TypeError: Cannot read properties of null (reading 'textContent')

Found it: checked the console, saw the TypeError, it pointed to the exact line. Compared the string in the JS to the id in the HTML — spotted the missing 'i'.

Fix:
  // Before: document.getElementById("greetng").textContent = greeting;
  // After:  document.getElementById("greeting").textContent = greeting;`},{q:`Buggy Program 2 — Color Changer: clicking the button does nothing. No console error.`,a:`Bug: document.querySelector("h1").style.colour = selectedColor;

"colour" is the British English spelling. JavaScript's style API uses American English — "color". .style.colour is not a valid CSS property in the DOM style object, so the assignment silently does nothing. No error, no effect.

This is the hardest kind of bug to find — it fails silently. The code runs without throwing, but nothing happens. No console error to point you to a line. You have to read the code carefully and know that .style.color is the correct property.

Found it: added console.log(selectedColor) to confirm the color was being picked correctly (it was). Then looked at the line that was supposed to apply it — noticed the British spelling.

Fix:
  // Before: document.querySelector("h1").style.colour = selectedColor;
  // After:  document.querySelector("h1").style.color = selectedColor;`},{q:`Buggy Program 3 — Counter: display shows the word "count" instead of the number.`,a:`Bug: document.getElementById("count").textContent = "count";

The string literal "count" (in quotes) was passed instead of the variable count (no quotes). JavaScript set the text content to the word "count" exactly as written — because that's what a string literal is.

Found it: clicked +1, saw the word "count" appear instead of 1. Read the line — spotted the quotes. The variable name and the string representation are identical, which is what makes it easy to miss.

Fix:
  // Before: document.getElementById("count").textContent = "count";
  // After:  document.getElementById("count").textContent = count;

Removing the quotes tells JavaScript to evaluate count as a variable and use its current numeric value.`},{q:`Buggy Program 4 — Temperature Message: entering "9" says "It's hot outside!" instead of cold.`,a:`Bug: prompt() returns a string, not a number. The variable temp holds the string "9", not the number 9.

When JavaScript compares "9" > 85 using a string on the left, it does string comparison, not numeric comparison. Strings are compared character by character — "9" is compared to the first character of "85" which is "8". Since "9" comes after "8" in Unicode/ASCII order, "9" > "85" evaluates to true. So the first condition fires and the page says "It's hot outside!" for a temperature of 9.

console.log(typeof temp) confirmed it — logged "string" instead of "number".

Fix: Convert the input to a number before comparing.
  // Before:
  const temp = prompt("Enter the temperature in Fahrenheit:");

  // After:
  const temp = parseFloat(prompt("Enter the temperature in Fahrenheit:"));

Now 9 > 85 is a numeric comparison — false — and the correct cold message shows.`}]},{heading:`Exercise 5 — Describe a Bug to AI`,description:`Structured bug report vs. vague one. See which gets better help.`,qa:[{q:`The bug I chose and my structured bug description`,a:`Used Bug 4 — the Temperature Message string comparison issue.

---
I'm working on a temperature message program in JavaScript.

What I expected to happen:
Entering 9 should display "It's cold! Bundle up!" since 9 is below 60.

What actually happens:
Entering 9 displays "It's hot outside!" — the same message as entering 90.

Error message (if any):
No error message. The code runs without throwing — it just gives the wrong output.

Here's the relevant code:

  const temp = prompt("Enter the temperature in Fahrenheit:");

  if (temp > 85) {
    message = "It's hot outside!";
  } else if (temp > 60) {
    message = "Nice weather!";
  } else {
    message = "It's cold! Bundle up!";
  }
---`},{q:`Did AI identify the correct bug? Was AI's fix correct? Same as mine or different?`,a:`Yes — AI identified the bug immediately and correctly. It explained that prompt() returns a string and that JavaScript's > operator does lexicographic (string) comparison when the left side is a string, which causes "9" to be greater than "85".

AI's fix was the same as mine: wrap prompt() in parseFloat() or Number(). It also offered parseInt() as an option and noted that parseFloat handles decimals too.

AI explained WHY better than I initially understood it — it spelled out that string comparison is character by character and gave "9" vs "85" as the specific example of why that breaks here.`},{q:`Sent "my code doesn't work" with the same code. Compare the two responses.`,a:`With just "my code doesn't work" and the code pasted in:

AI gave a generic response — it listed several things that could be wrong: maybe the prompt is missing, maybe there's a syntax error somewhere, maybe the element IDs don't match. It found the actual bug eventually, but it led with three guesses before getting there. The response was longer and less focused.

With the structured bug report:

AI went directly to the cause. First sentence identified the type conversion issue. No guessing, no listing possibilities. It knew exactly what "entering 9 shows hot" meant and what kind of bug causes that.

The difference was significant. The structured report gave AI the symptom (9 shows hot), the expected behavior, and the confirmation that no error was thrown — which immediately ruled out syntax errors and pointed to a logic/type issue. "my code doesn't work" gives AI nothing to reason from. It has to guess at what "doesn't work" means.`}]},{heading:`Exercise 6 — Debug a Multi-File Project`,description:`Two bugs across three files. One file was clean. Decide which is which.`,qa:[{q:`Bug 1 — what was it, which file, how did you find it, how did you fix it?`,a:`Bug: Mismatched HTML list tags — the list opened with <ul> but closed with </ol>.

File: debug-challenge.html

Found it: The task list rendered visually, but something looked off in the layout. Opened DevTools Elements panel — the DOM showed the browser had tried to auto-correct the mismatched tags, which caused unexpected nesting. Looking at the raw HTML, line 22 had <ul id="task-list"> but the closing tag was </ol>.

Fix:
  // Before: <ul id="task-list">  ...  </ol>
  // After:  <ul id="task-list">  ...  </ul>`},{q:`Bug 2 — what was it, which file, how did you find it, how did you fix it?`,a:`Bug: CSS property "alignitems" — missing the hyphen. Should be "align-items".

File: debug-style.css

Found it: The delete buttons inside each task item weren't vertically centered — they were floating to the top of the list item instead of aligning with the text. Opened DevTools, clicked on a task item in the Elements panel, checked the Styles panel. The rule "#task-list li" showed up but DevTools had struck through "alignitems" with a warning icon — it wasn't recognized as a valid property.

Fix:
  // Before: alignitems: center;
  // After:  align-items: center;`},{q:`Which file was clean, and how did you decide?`,a:`debug-script.js was clean.

Once the HTML and CSS bugs were fixed, everything worked — tasks could be added, displayed, and deleted. No console errors related to the JS, and tracing through the code manually confirmed it was correct: it grabs the input, checks for empty, creates a list item, creates a delete button, wires them together, appends to the list, clears the input. Each step is right.

The decision process: after fixing the two identified bugs, the app worked fully. If the JS had a bug too, something would still be broken. Nothing was. That's how you confirm a file is clean — not just by reading it, but by verifying the working behavior after the other bugs are fixed.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Screen-share your interactive page. Walk your partner through what happens step by step.`,qa:[{q:`What bug did I walk through?`,a:``},{q:`How did I find it? What tool or technique?`,a:``},{q:`What was the fix?`,a:``},{q:`How do I know it actually works now?`,a:``},{q:`Partner's question: "What would you try first if you saw a similar bug in a different project?"`,a:``}]}]},{number:13,label:`Day 4`,title:`Week 2, Day 4 — Functions, Arrays & the DOM`,subtitle:`Data lives in arrays. Functions do the work. The DOM shows the result.`,color:`#818cf8`,sections:[{heading:`Exercise 1 — Write Your First Functions in the Console`,description:`No HTML needed. DevTools console only.`,qa:[{q:'Function 1 — greet(name): "function greet(name) { return `Hello, ${name}!`; }" — tested with greet("Alex") and greet("Sam")',a:`greet("Alex") → "Hello, Alex!"
greet("Sam")  → "Hello, Sam!"`},{q:`Function 2 — addNumbers(a, b): "function addNumbers(a, b) { return a + b; }" — tested with addNumbers(3, 4) and addNumbers(10, 25)`,a:`addNumbers(3, 4)   → 7
addNumbers(10, 25) → 35`},{q:`Function 3 — isEven(n): "function isEven(n) { return n % 2 === 0; }" — tested with isEven(4) and isEven(7)`,a:`isEven(4) → true  (4 % 2 = 0)
isEven(7) → false (7 % 2 = 1)

% is the modulo operator — it returns the remainder after division.
4 divided by 2 has no remainder → 0 → even.
7 divided by 2 has a remainder of 1 → odd.`},{q:`My function — square(n): returns n times itself. Code and test results.`,a:`function square(n) {
  return n * n;
}

square(4)  → 16
square(9)  → 81
square(12) → 144`},{q:`My function — shout(message): returns the message in all caps. Code and test results.`,a:`function shout(message) {
  return message.toUpperCase();
}

shout("hello world")   → "HELLO WORLD"
shout("keep it quiet") → "KEEP IT QUIET"
shout("JavaScript")    → "JAVASCRIPT"`},{q:`My function — isLong(text): returns true if text has more than 10 characters. Code and test results.`,a:`function isLong(text) {
  return text.length > 10;
}

isLong("hi")          → false  (2 chars)
isLong("hello world") → true   (11 chars)
isLong("JavaScript")  → false  (10 chars — NOT more than 10, exactly 10)
isLong("I love code") → true   (11 chars)`}]},{heading:`Exercise 2 — Loop Over an Array`,description:`for...of, indexed loops, conditionals inside loops, building a new array.`,qa:[{q:`Step 2 — basic for...of loop logging greetings for all 5 names. Code and console output.`,a:`const names = ["Alex", "Sam", "Jordan", "Riley", "Casey"];

for (const name of names) {
  console.log(\`Hello, \${name}!\`);
}

// Console output:
// Hello, Alex!
// Hello, Sam!
// Hello, Jordan!
// Hello, Riley!
// Hello, Casey!`},{q:`Step 3a — classic for loop with position number: "1. Hello, Alex!", etc.`,a:`for (let i = 0; i < names.length; i++) {
  console.log(\`\${i + 1}. Hello, \${names[i]}!\`);
}

// Console output:
// 1. Hello, Alex!
// 2. Hello, Sam!
// 3. Hello, Jordan!
// 4. Hello, Riley!
// 5. Hello, Casey!

// i starts at 0 (array index), so i + 1 gives the human-readable position number`},{q:`Step 3b — for...of, log only names longer than 4 characters.`,a:`for (const name of names) {
  if (name.length > 4) {
    console.log(\`Hello, \${name}!\`);
  }
}

// Console output:
// Hello, Jordan!
// Hello, Riley!
// Hello, Casey!

// "Alex" has exactly 4 characters — fails the > 4 check, skipped
// "Sam" has 3 characters — skipped
// Jordan (6), Riley (5), Casey (5) — all pass`},{q:`Step 3c — build a greetings array, log it after the loop.`,a:`const greetings = [];

for (const name of names) {
  greetings.push(\`Hello, \${name}!\`);
}

console.log(greetings);

// Console output:
// ["Hello, Alex!", "Hello, Sam!", "Hello, Jordan!", "Hello, Riley!", "Hello, Casey!"]

// .push() adds an item to the end of an array
// The array starts empty and gets one item added per loop iteration`},{q:`Step 4 — replaced the array with 5 things to remember from this week. What did you write?`,a:`const weekReview = [
  "error messages are a map, not an insult — read the type and the line number",
  "prompt() returns a string — always wrap in parseFloat() before comparing numbers",
  "script tags belong at the bottom of body, not in head",
  "console.log is your first debugging tool — add one after every calculation",
  "the DOM is just JavaScript objects — you can change anything on the page in real time"
];

for (const note of weekReview) {
  console.log(note);
}`}]},{heading:`Exercise 3 — Build a List Dynamically from an Array of Objects`,description:`Arrays of objects → DOM elements. This is the pattern behind every list in React.`,qa:[{q:`books.js — the initial render loop. Code and what appeared on the page.`,a:`const books = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Educated", author: "Tara Westover" },
  { title: "The Mountain Is You", author: "Brianna Wiest" },
  { title: "Becoming", author: "Michelle Obama" },
];

const list = document.getElementById("book-list");

for (const book of books) {
  const li = document.createElement("li");
  li.textContent = \`\${book.title} -- \${book.author}\`;
  list.appendChild(li);
}

// Page rendered:
// • Atomic Habits -- James Clear
// • Educated -- Tara Westover
// • The Mountain Is You -- Brianna Wiest
// • Becoming -- Michelle Obama`},{q:`Step 3a — added 2 more book objects. What did I add and what happened?`,a:`Added to the array:
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Between the World and Me", author: "Ta-Nehisi Coates" },

Refreshed the page — two new items appeared at the bottom automatically.
The rendering code didn't change at all. That's the point: when data and
rendering are separated, you only ever touch the data to change the output.`},{q:`Step 3b — changed rendering so title is in <strong> and author is in normal text.`,a:`for (const book of books) {
  const li = document.createElement("li");

  const strong = document.createElement("strong");
  strong.textContent = book.title;

  li.appendChild(strong);
  li.appendChild(document.createTextNode(" — " + book.author));

  list.appendChild(li);
}

// Each list item now shows the title in bold, then " — Author Name" in regular weight
// createTextNode is used instead of innerHTML to avoid XSS risk with user content`},{q:`Step 3c — wrapped rendering in renderBooks(bookArray). Called it twice with different arrays.`,a:`function renderBooks(bookArray) {
  list.innerHTML = "";
  for (const book of bookArray) {
    const li = document.createElement("li");
    const strong = document.createElement("strong");
    strong.textContent = book.title;
    li.appendChild(strong);
    li.appendChild(document.createTextNode(" — " + book.author));
    list.appendChild(li);
  }
}

renderBooks(books); // renders all 6 books

const shortList = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Becoming", author: "Michelle Obama" },
];

renderBooks(shortList); // clears and renders just 2

// list.innerHTML = "" wipes the previous render before each call
// so calling it twice shows only the second list, not both stacked`}]},{heading:`Exercise 4 — AI, Refactor My Code`,description:`Accept, reject, or modify every change AI makes. You own the result.`,qa:[{q:`The messy.js code I sent to AI for refactoring`,a:`const score1 = 85;
const score2 = 92;
const score3 = 78;
const score4 = 88;
const score5 = 95;

const sum = score1 + score2 + score3 + score4 + score5;
const average = sum / 5;
console.log("Average:", average);

let highest = score1;
if (score2 > highest) highest = score2;
if (score3 > highest) highest = score3;
if (score4 > highest) highest = score4;
if (score5 > highest) highest = score5;
console.log("Highest:", highest);`},{q:`What AI returned`,a:`const scores = [85, 92, 78, 88, 95];

// Calculate the average of an array of numbers
function getAverage(arr) {
  const sum = arr.reduce((total, num) => total + num, 0);
  return sum / arr.length;
}

// Find the highest number in an array
function getHighest(arr) {
  return Math.max(...arr);
}

console.log("Average:", getAverage(scores)); // 87.6
console.log("Highest:", getHighest(scores)); // 95`},{q:`Decision table — AI's changes, what each does, accept/reject/modify and why`,a:`AI's Change                       | What It Does                              | Decision | Why
----------------------------------|-------------------------------------------|----------|-----------------------------------------------
Moved scores to an array          | Single source of data, easy to update     | Accept   | Cleaner — one place to change scores
Created getAverage(arr) function  | Separates logic, makes it reusable        | Accept   | Good pattern — function does one job
Created getHighest(arr) function  | Same — reusable, named clearly            | Accept   | Same reason
Used .reduce() for sum            | Concise but unfamiliar syntax             | Modify   | Not comfortable with reduce yet — too early
Used Math.max(...scores)          | Spread operator — Phase 2 content        | Modify   | Asked AI for a for...of version instead`},{q:`Final refactored version after applying my decisions`,a:`const scores = [85, 92, 78, 88, 95];

// Calculate the average of an array of numbers
function getAverage(arr) {
  let sum = 0;
  for (const score of arr) {
    sum += score;
  }
  return sum / arr.length;
}

// Find the highest number in an array
function getHighest(arr) {
  let highest = arr[0];
  for (const score of arr) {
    if (score > highest) {
      highest = score;
    }
  }
  return highest;
}

console.log("Average:", getAverage(scores)); // 87.6
console.log("Highest:", getHighest(scores)); // 95`},{q:`Did the output match the original messy.js?`,a:`Yes — identical output.

Average: 87.6  ✓  (85 + 92 + 78 + 88 + 95 = 438 ÷ 5 = 87.6)
Highest: 95    ✓

Same numbers, cleaner structure. No .reduce(), no spread operator —
everything readable at the current level. If something breaks, I can
trace through it line by line because I understand every piece.`}]},{heading:`Exercise 5 — Mini-App: Todo List`,description:`Functions + arrays + conditionals + DOM updates. The pattern behind every React app.`,qa:[{q:`The HTML structure`,a:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Todo List</h1>

    <form id="todo-form">
      <label for="task-input">New task</label>
      <input id="task-input" type="text" placeholder="What needs doing?">
      <button id="add-btn" type="submit">Add</button>
    </form>

    <p id="empty-msg" style="display:none;color:#f87171;font-family:monospace;font-size:0.85rem;">
      Please enter a task first.
    </p>

    <ul id="task-list"></ul>
    <button id="clear-btn">Clear all</button>

    <script src="todo.js"><\/script>
  </body>
</html>`},{q:`The JavaScript (todo.js)`,a:`// Source of truth — all tasks live here
// const protects the binding (tasks can't be reassigned to a new array)
// but .push() and setting .length = 0 still work on the contents
const tasks = [];

// DOM elements
const input    = document.getElementById("task-input");
const addBtn   = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const list     = document.getElementById("task-list");
const emptyMsg = document.getElementById("empty-msg");

// Wipe and re-render the full list from the tasks array
function renderTasks() {
  list.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");
    li.textContent = task;
    list.appendChild(li);
  }
}

// Add handler — validate, push to array, re-render
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask === "") {
    emptyMsg.style.display = "block";
    return;
  }
  emptyMsg.style.display = "none";
  tasks.push(newTask);
  input.value = "";
  renderTasks();
});

// Clear handler — empty the array, re-render (renders nothing)
clearBtn.addEventListener("click", () => {
  tasks.length = 0;
  renderTasks();
});`},{q:`Did it work? What happened when I tested adding tasks, submitting empty, and clearing?`,a:`Adding a task: typed "Buy groceries", clicked Add — appeared in the list immediately. Typed another, clicked Add — both showed. The array grew with each addition and renderTasks() rebuilt the list from scratch each time.

Submitting empty: clicked Add with nothing in the input — the red "Please enter a task first." message appeared. Typed something and clicked Add — message disappeared, task added normally.

Clearing: clicked "Clear all" — the list wiped instantly. tasks.length = 0 empties the array in place (without replacing it), then renderTasks() renders an empty list.

The key insight: the list on the page is never the source of truth. tasks[] is. renderTasks() always builds the DOM fresh from the array. This means the page can never get out of sync with the data.`},{q:`Stretch — checkboxes with classList.toggle to cross out completed tasks`,a:`// Updated renderTasks() to include a checkbox per item
function renderTasks() {
  list.innerHTML = "";
  for (const task of tasks) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const label = document.createElement("span");
    label.textContent = task;

    // When checkbox is clicked, toggle the "done" class on the span
    checkbox.addEventListener("change", () => {
      label.classList.toggle("done");
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    list.appendChild(li);
  }
}

// CSS added to style.css:
// .done {
//   text-decoration: line-through;
//   opacity: 0.5;
// }

// Checking a box strikes through the task text
// Unchecking removes the strikethrough — classList.toggle handles both directions`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Read a function aloud line by line, then explain it, then say what you'd change.`,qa:[{q:`Which function did I pick to read aloud?`,a:`for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}`},{q:`My literal read-through (line by line)`,a:`for open paren let i equals 1 semicolon i less than or equal to 100 semicolon i plus plus close paren open curly brace

if open paren i percent 3 strictly equals 0 ampersand ampersand i percent 5 strictly equals 0 close paren open curly brace
console dot log open paren quote FizzBuzz quote close paren semicolon close curly brace

else if open paren i percent 3 strictly equals 0 close paren open curly brace
console dot log open paren quote Fizz quote close paren semicolon close curly brace

else if open paren i percent 5 strictly equals 0 close paren open curly brace
console dot log open paren quote Buzz quote close paren semicolon close curly brace

else open curly brace
console dot log open paren i close paren semicolon close curly brace

close curly brace`},{q:`My plain English explanation`,a:`This is a for loop that counts from 1 to 100. For every number, it checks three conditions in order. If the number divides evenly by both 3 and 5 — no remainder — it prints FizzBuzz. If it only divides by 3, it prints Fizz. If it only divides by 5, it prints Buzz. If none of those are true, it just prints the number itself. The modulo operator — the percent sign — gives us the remainder after division, so i mod 3 equals zero means 3 goes in cleanly with nothing left over.`},{q:`One thing I'd change and why`,a:`I'd rewrite it to build an output string instead of checking the combined case separately — start with an empty string, append "Fizz" if divisible by 3, append "Buzz" if divisible by 5, then print the string or the number if it's still empty. That removes the top FizzBuzz condition entirely and handles it automatically.`},{q:`Partner's question: "Why would you change that?" — my defense`,a:`Because the way it's written now, if I ever needed to add a third rule — say, divisible by 7 prints "Jazz" — I'd have to add not just one new condition but also update every combined case manually. With the string-building approach, I just add one more if statement and FizzJazz, BuzzJazz, or FizzBuzzJazz all fall out automatically. It scales better and has less repeated logic.`}]},{heading:`Going Deeper — Optional Extensions`,description:`Filter buttons, localStorage persistence, and map/filter rewrites.`,qa:[{q:`Filter buttons — All, Done, Not Done. Track task state as objects, filter the rendered list.`,a:`// Updated data structure — tasks are objects instead of strings
const tasks = [];
// Each task: { text: "Buy groceries", done: false }

function renderTasks(filter = "all") {
  list.innerHTML = "";

  const filtered = tasks.filter((task) => {
    if (filter === "done") return task.done;
    if (filter === "notdone") return !task.done;
    return true; // "all"
  });

  for (const task of filtered) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    const label = document.createElement("span");
    label.textContent = task.text;
    if (task.done) label.classList.add("done");

    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      renderTasks(filter);
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    list.appendChild(li);
  }
}

// Filter buttons in HTML:
// <button onclick="renderTasks('all')">All</button>
// <button onclick="renderTasks('done')">Done</button>
// <button onclick="renderTasks('notdone')">Not Done</button>

// Add handler updated:
addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask === "") { emptyMsg.style.display = "block"; return; }
  emptyMsg.style.display = "none";
  tasks.push({ text: newTask, done: false });
  input.value = "";
  renderTasks();
});`},{q:`localStorage persistence — tasks survive a page refresh.`,a:`// Save to localStorage after every change
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load from localStorage on page start
const saved = localStorage.getItem("tasks");
if (saved) {
  const parsed = JSON.parse(saved);
  for (const task of parsed) {
    tasks.push(task);
  }
  renderTasks();
}

// Add saveTasks() call after every mutation:
// After tasks.push()    → saveTasks();
// After tasks.length=0  → saveTasks();
// After task.done flip  → saveTasks();

// JSON.stringify turns the array into a string for storage
// JSON.parse turns it back into an array on load
// localStorage.getItem returns null if the key doesn't exist
// — the || "[]" fallback gives JSON.parse an empty array instead of null`},{q:`Convert rendering to .map() and .filter(). Compare readability.`,a:`// map() version of renderBooks from Exercise 3
function renderBooks(bookArray) {
  list.innerHTML = "";
  bookArray
    .map((book) => {
      const li = document.createElement("li");
      const strong = document.createElement("strong");
      strong.textContent = book.title;
      li.appendChild(strong);
      li.appendChild(document.createTextNode(" — " + book.author));
      return li;
    })
    .forEach((li) => list.appendChild(li));
}

// filter() version of the "names longer than 4 chars" loop
const longNames = names.filter((name) => name.length > 4);
console.log(longNames); // ["Jordan", "Riley", "Casey"]

// Readability comparison:
// for...of is more explicit — you can see every step
// .map() and .filter() are shorter but require knowing the methods
// At this stage, for...of is easier to debug because you can add
// console.logs inside the loop — harder to do inside a .map() chain`}]},{heading:`Coding Challenge — FizzBuzz`,description:`For loop + conditionals + modulo. Classic interview problem.`,qa:[{q:`The FizzBuzz problem — what it asks`,a:`Loop from 1 to 100. For each number:
  - If divisible by both 3 and 5 → print "FizzBuzz"
  - If divisible by 3 only       → print "Fizz"
  - If divisible by 5 only       → print "Buzz"
  - Otherwise                    → print the number

The key trap: check the combined case (divisible by both) FIRST.
If you check divisible-by-3 first, numbers like 15 print "Fizz" and never reach "FizzBuzz".`},{q:`My solution`,a:`for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Sample output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz,
// 11, Fizz, 13, 14, FizzBuzz, 16...
// ...
// 98, Fizz, Buzz`},{q:`How modulo makes this work`,a:`% returns the remainder after division.

  15 % 3 = 0  → 15 is divisible by 3 (no remainder)
  15 % 5 = 0  → 15 is divisible by 5 (no remainder)
  7  % 3 = 1  → not divisible by 3
  10 % 3 = 1  → not divisible by 3
  10 % 5 = 0  → divisible by 5

So i % 3 === 0 means "i divides evenly by 3."
Combining both checks with && catches the FizzBuzz case.

The order matters: JavaScript evaluates if/else top to bottom and stops
at the first true condition. FizzBuzz must be first or it never fires.`},{q:`What I'd change or extend`,a:`A cleaner version that avoids repeating the modulo checks:

for (let i = 1; i <= 100; i++) {
  let output = "";
  if (i % 3 === 0) output += "Fizz";
  if (i % 5 === 0) output += "Buzz";
  console.log(output || i);
}

// output starts as an empty string
// If divisible by 3, append "Fizz"
// If divisible by 5, append "Buzz"
// If both, output becomes "FizzBuzz" automatically
// output || i — if output is still empty (""), it's falsy, so i prints instead

// This is the version most developers would write.
// It handles the combined case without a special check.`}]}]}]},{label:`Week 4`,days:[{number:14,label:`Day 1`,title:`Week 4, Day 1 — From Problem to MVP`,subtitle:`Real pain. Specific users. Three features. Defend it out loud.`,color:`#14b8a6`,sections:[{heading:`Exercise 1 — Problem Brainstorm`,description:`Three problems from real life. Who has them, how often they happen, what people do about them right now.`,qa:[{q:`Problem 1`,a:`Description: Plant-based eaters in small towns waste a meal-out figuring out the restaurant has nothing real for them.

Who: Vegans and strict vegetarians in towns under 30k people.

How often: Every time they eat out — multiple times a week.

Current workaround: Calling restaurants ahead, scrolling Yelp photos of menus, asking the server twice, settling for a side salad and "vegetable plate".`},{q:`Problem 2`,a:`Description: Returning students with kids juggle their kid's school schedule and their own assignment deadlines with no single view.

Who: Adult learners with school-age children at home, balancing community college or online programs.

How often: Daily — every morning is a triage of what's due where.

Current workaround: Paper planner, phone calendar, screenshots of Canvas due dates, asking the kid what they have homework on.`},{q:`Problem 3`,a:`Description: Exit tickets on AtlasLearn ask us to reflect on content we didn't actually cover, because the curriculum shifted mid-week and nobody updated the form.

Who: Students in the Next Chapter Phase 1 cohort (and every future cohort as the curriculum keeps iterating).

How often: Daily — exit tickets close out every class, and several days a week the prompts are out of sync with what really happened.

Current workaround: Answering about what we actually did and adding a note explaining the mismatch, asking in Slack what people put, writing "we didn't cover this today" in the field, or skipping the ticket entirely.`},{q:`After sharing with a partner — which one felt like real pain and why?`,a:`Problem 2 — returning students with kids juggling their own coursework deadlines and their kid's school schedule.

I am the user. I'm at Yavapai in ENG 102, the cybersecurity track, precalculus, and Python — all at once — with a teenager at home who has her own school work. Every morning is a triage of "what's due where for who," and I'm the one who has to hold both sides in my head.

The other two are real but easier to dismiss. Problem 1 has HappyCow already half-solving it. Problem 3 (AtlasLearn exit tickets) is acute but narrow — it only affects students in this specific cohort. Problem 2 is something I'd actually use every single day. I want to be the first customer of this tool more than I want to ship something for someone else, and that's the strongest signal I have.`}]},{heading:`Exercise 2 — Stress Test`,description:`Partner pokes holes in my ideas. Real problem or mild inconvenience? Can I build a basic version in a few weeks?`,qa:[{q:`Stress test — answering the four critique questions`,a:`Running this on Problem 2: returning students with kids, juggling their own coursework deadlines and their kid's school schedule.

1. Who would actually use this? Can I name specific people?

Me, first. I'm enrolled at Yavapai in ENG 102, the cybersecurity track, precalculus, and Python — all at once — with a teenager at home. I live this every morning. Past me, I can name peers in the Next Chapter cohort who are parents and other returning students at Yavapai in the same triage loop. Real users, not "everyone."

2. How is this different from something that already exists?

Canvas Parent (Instructure's official mobile app) covers the kid side but is parent-only and mobile-only. Canvas's built-in email notifications fire one message per event with no daily rollup and no "missing" summary — most people turn them off because the volume is unmanageable. Cozi, Google Calendar, MyStudyLife — none of them are Canvas-aware in a way that surfaces both an observer view AND a student view in one place.

The gap I'm targeting: take two Canvas tokens (one observer for my kid, one student for me), pull missing + upcoming work for both, and render a single daily email digest with clear sections for each role.

3. Is this a real problem or a mild inconvenience?

Real. The cost is missed deadlines — my grade drops. Missed permission slips — my kid can't go on the field trip. Missed kid's events — my kid feels unsupported. Stack these up over a semester and the cost compounds into stress, anxiety, and the "am I cut out for this" spiral that already hits returning students hard. It's not "I forgot a meeting." It's "I'm letting two people down at once."

4. Could I build a basic version in a few weeks? If not, how do I scope down?

Yes. Canvas has a documented REST API. The script flow is straightforward — read two tokens from env vars, hit /api/v1/users/self/missing_submissions for me, hit the observer endpoints for my kid, merge the data, render an HTML + plain-text email, send via SMTP, run on cron at 7 AM. The core data fetching is well-trodden territory in Python (requests + standard library).

The harder/uncertain parts are: getting both Canvas tokens authorized correctly, building an email template that renders right across Gmail / Outlook / Apple Mail, and the diff state file for "new since last run" flagging. Two to three weeks of focused work feels right for a working V1, and the scope can shrink further if I drop the diff-tracking nice-to-have for v0.`},{q:`Strongest problem — the one that survived the most scrutiny`,a:`Problem 2 — returning student parents who are themselves enrolled at Canvas-using institutions. It survived all four critique questions clean: I'm the user, the gap in existing tools is real and specific, the cost compounds beyond annoyance, and the scope is achievable in weeks using a documented public API.`},{q:`Final problem statement`,a:`Returning students with kids who are also enrolled at Canvas-using institutions struggle to keep their own coursework deadlines and their kid's school work in one place, because no existing tool — including Canvas's own apps and notification settings — bundles an observer view and a student view into a single daily digest, and right now they juggle two separate Canvas accounts, two notification streams, and a fistful of screenshots.`}]},{heading:`Exercise 3 — User Stories`,description:`5-7 user stories. Different types of users, different moments, what's most important. Each one maps to a feature.`,qa:[{q:`User stories`,a:`1. As a returning student parent, I want to set up the digest with my Canvas observer token (for my kid) AND my own Canvas student token (Yavapai) so the script knows what to pull for both of us.

2. As a returning student parent, I want one daily email summarizing what's missing and what's due for both of us so I know my morning triage before I even open my laptop.

3. As a returning student parent, I want the email to clearly separate "Your stuff" from "Kid's stuff" so I can read it in three seconds and act.

4. As a returning student parent, I want new items since the last digest flagged with a "New" badge so I notice when a teacher just posted something on either side.

5. As a returning student parent, I want items due in the next 24 hours flagged with a "Soon" badge so the most urgent stuff is obvious without scanning.

6. (optional) As a returning student parent, I want the subject line to summarize both sides ("You: 3 missing | Kid: 2 due in 24h") so I can decide whether to open immediately from the inbox preview.

7. (optional) As a returning student parent, I want a --dry-run mode so I can preview the merged digest before scheduling it on cron.`},{q:`Feature mapping — each story to the feature it needs`,a:`User Story                                            | Feature
------------------------------------------------------+----------------------------------------------
Set up observer + student tokens                      | Env vars for both Canvas tokens + setup docs
Daily email of both                                   | Canvas API: observer fetch (kid) + self fetch (parent), scheduled via cron
Separate "Your stuff" / "Kid's stuff" sections        | Email template with two named blocks
"New" badges since last run                           | State diff file tracking IDs across runs
"Soon" badges for due-in-24h                          | Time-until-due check in render
Smart subject line summarizing both sides             | Subject builder that names both roles
--dry-run preview                                     | CLI flag, print HTML + text to stdout instead of sending`}]},{heading:`Exercise 4 — Feature Prioritization`,description:`Every feature into one of three buckets. Must Have caps at 2-3 features. Not 7. Not 10.`,qa:[{q:`Three buckets — Must Have, Nice to Have, Later`,a:`MUST HAVE (MVP) — app is useless without these.
  • Canvas API integration with two tokens (observer for kid, student for parent), pulling missing + upcoming work
  • Merged daily email with clear "Your stuff" and "Kid's stuff" sections
  • Cron-friendly automation so the digest sends every morning without manual intervention

NICE TO HAVE — makes it better, not essential.
  • "New" badges via state-diff tracking so newly-appeared items stand out
  • "Soon" badges for items due in the next 24 hours
  • Subject line summarizing both sides at a glance
  • HTML + plain-text fallback for email client compatibility
  • Dry-run / preview mode for testing changes
  • Color coding by section (teal for me, peach for kid)

LATER — V2 or beyond.
  • Support multiple kids (loop over observees)
  • Support multiple LMSes for households where the kid is on PowerSchool, Schoology, etc.
  • SMS digest as an alternative to email
  • Week-ahead view in addition to daily
  • Multi-user setup so a co-parent can subscribe to the same digest`},{q:`Final MVP scope`,a:`My app: Canvas Daily — Parent + Student Edition (working title). A daily email digest that pulls missing and upcoming Canvas work for BOTH my Yavapai coursework AND my daughter's school, merging them into one message I can read in the morning before I open my laptop.

Problem: Returning students with kids who are also Canvas users themselves struggle to triage two academic calendars at once, because Canvas's own apps and notification settings keep parent (observer) and student (self) views separate.

MVP features:
  1. Pull data from Canvas's REST API using two tokens — observer for kid, student for parent — for missing assignments and upcoming work
  2. Render one merged email with clear "Your stuff" and "Kid's stuff" sections
  3. Run on cron so the digest sends every morning automatically`}]},{heading:`Exercise 5 — AI-Assisted Competitive Research`,description:`ChatGPT prompts to map the landscape. Watch for hallucinated tools — search if unsure.`,qa:[{q:`Prompt 1 results — existing solutions (top 5)`,a:`1. Canvas Parent — Instructure's official mobile app for observer accounts. Shows assignments, grades, and schedule for paired students. Free, official, mobile-only.

2. Canvas Student (mobile app) — Instructure's app for the student themselves. Self-view only, no parent integration. Mobile-only.

3. Canvas web email notifications — built-in, configurable per assignment / per course. Famously noisy. One email per event, never a daily digest. No "missing" rollup.

4. Open-source Canvas API scripts on GitHub (canvas-cli, pycanvas, various personal digests) — many exist for one-off use cases. Mostly developer-oriented, no email rendering by default, almost always single-role.

5. Generic family calendars (Cozi, TimeTree, Google Calendar) — handle scheduling but have zero Canvas awareness. You'd be re-entering everything by hand.`},{q:`Prompt 2 results — common complaints and gaps`,a:`Canvas Parent: best alternative for the kid side, but mobile-only and doesn't bundle the parent's own coursework. You're switching apps to see your own work.

Canvas Student: solo-user, no parent integration at all. Same context-switch problem in reverse.

Canvas's built-in email notifications: noisy and granular — you get one email per assignment event instead of one summary. No "missing" rollup. Most people turn them off precisely because the volume is unmanageable.

GitHub Canvas scripts: each one solves a sliver — just missing, or just upcoming, or just for one student. None I've found bundle parent + student.

Generic family calendars: zero Canvas awareness. You'd be screenshotting Canvas due dates and re-entering them by hand, which defeats the entire purpose.

The gap across all of them: no tool, official or third-party, takes both a Canvas observer token AND a Canvas student token and produces a unified, diffed, daily digest with both perspectives in one place.`},{q:`Prompt 3 results — what would make my version different`,a:`• Bundle parent + student into one daily email — that's the headline. Two roles, one digest, one inbox.

• Built on the open Canvas REST API. Standard tooling — Python + requests + smtplib + cron. Nothing fancy.

• Email-first delivery. Returning student parents already check their inbox first thing in the morning — meet them where they are, not in a new app to download.

• Diff tracking so "New" items across BOTH sides since the last digest get flagged. Nothing else does this for parent + student in one view.

• Subject-line summary covers both roles so the inbox preview tells the truth before opening.

• Future direction: support multi-LMS households (kid on PowerSchool, parent on Canvas) so the digest works even when the two institutions don't share a vendor.`},{q:`Comparison — top 2 existing solutions and my opportunity`,a:`Existing solution 1: Canvas Parent (Instructure's official mobile app)
  What it does well: Official integration, free, covers everything observer accounts can see — notifications, grades, schedule, calendar. Best-in-class for the kid side.
  What it's missing: Mobile-only and parent-only. Zero bundling with the parent's own student work. Every check is a context switch into a separate app.

Existing solution 2: Canvas's built-in email notifications
  What it does well: Cover every event type, configurable per course, no extra software to install.
  What it's missing: One email per event, never a daily summary. No "missing" rollup. No diff. No parent + student bundling. Most people turn them off because the volume is unmanageable.

My opportunity: Build a single daily email — one digest, two roles — using the Canvas API. Two tokens, merged rendering, sectioned headers. It covers a workflow no existing tool addresses, and the underlying stack is small enough to be doable in a few weeks.`},{q:`Any tools the AI named that I had to verify? Hallucinations?`,a:`Solid ground here — Canvas Parent and Canvas Student are real Instructure apps. The Canvas REST API is real, well-documented, and stable.

Things to verify before pitching:
  • Whether any prominent GitHub Canvas-digest project already includes both parent + student bundled (a quick "canvas digest parent observer student" search would tell me). If one exists, I want to know before I duplicate effort.
  • Whether Canvas's notification settings have a "daily summary" option I overlooked.
  • Whether there's a recent indie iOS/Android app I've missed that does this exact dual-role bundling.
  • Whether my Yavapai Canvas instance actually allows student API tokens — most do, but worth confirming before committing to the architecture.

ChatGPT will sometimes hallucinate a polished "Canvas Family Hub" app or similar — those are usually invented. Always click through to verify before citing in a pitch.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes to explain the problem out loud. Partner asks one follow-up.`,qa:[{q:`My 2-minute pitch — who, what, why, current workaround`,a:`Who has the problem (specific — can I name real people?):
Me. I'm at Yavapai in four classes at once — ENG 102, cybersecurity, precalc, Python — with a teenage daughter at home doing online school on Canvas. I can name peers in the Next Chapter cohort who are parents, and other returning students at Yavapai juggling the same thing. This is a real, named group — not "adult learners" in the abstract.

What's the problem? What does the pain look like day-to-day?:
Every morning is triage across two Canvas accounts. Mine as a student at Yavapai, hers as a parent through an observer account. Canvas keeps those views completely separate — different apps, different notification streams. To know what's due across both sides I have to log into two accounts, click through every course, and stitch it together in my head. By the time I've done that I've burned the first hour of my day.

Why does it matter? What does it cost in time, money, or opportunity?:
Missed deadlines on my side drop my grade. Missed permission slips on her side mean she can't go on the field trip. Missed work on her side compounds into a failing semester I don't find out about until progress reports. Stack those across 16 weeks and the cost isn't just academic — it's the stress, the anxiety, the "am I cut out for this" spiral that already hits returning students harder than anyone admits. It's not "I forgot a meeting." It's "I'm letting two people down at once."

Current workaround:
Two logins, two notification streams, screenshots of due dates, and asking my kid what's due (with the obvious accuracy problems). I've already built half of the fix — a Python script that pulls her side through the Canvas observer API and emails me a daily digest with missing work, what's due this week, "New" badges since the last run, and "Soon" badges for items due in 24 hours. The gap is that it only covers her. Yavapai also uses Canvas. Adding my own student token and merging the two into one email is the MVP.`},{q:`Partner's follow-up question and my answer`,a:`Parnter's question: What would be the MVP version of this? If I had to build something in the next few weeks, what would I focus on?

My answer: The core value prop is the merged parent + student view in one daily email. If I had to strip it down to an MVP, I'd focus on just that: two Canvas tokens (observer + student), a script that pulls missing + upcoming work for both, and a merged email template with "Your stuff" and "Kid's stuff" sections. I'd run it manually at first to prove the concept before automating with cron or adding diff tracking.`},{q:`Saying it out loud surfaced what? What would I refine before the next pitch?`,a:`Saying it out loud surfaced the importance of the "daily email" delivery mechanism — that's a key part of the value prop that I hadn't fully articulated in my head. It also made me realize that the MVP can be really focused on just the merged view, without the diff tracking or smart subject line, which are nice-to-haves but not essential for proving the concept. Before the next pitch, I'd refine my problem statement to emphasize the pain of juggling two separate Canvas accounts and notification streams, and I'd be more explicit about the "daily email digest" as the core solution I'm proposing.`}]}]},{number:15,label:`Day 2`,title:`Week 4, Day 2 — APIs from the Ground Up`,subtitle:`Endpoints, JSON, status codes. Speak it back in plain English.`,color:`#06b6d4`,sections:[{heading:`Exercise 1 — API Explorer`,description:`Hit four public APIs in the browser. Read the JSON. Notice the shape.`,qa:[{q:`API 1 — GitHub User (https://api.github.com/users/octocat)`,a:`Value of "login": "octocat"

Value of "public_repos": 8

Number of followers: 22699

Tried with my own GitHub username — did it work?: Yes! 
{
  "login": "DBusch-Developer",
  "id": 208895580,
  "node_id": "U_kgDODHN-XA",
  "avatar_url": "https://avatars.githubusercontent.com/u/208895580?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/DBusch-Developer",
  "html_url": "https://github.com/DBusch-Developer",
  "followers_url": "https://api.github.com/users/DBusch-Developer/followers",
  "following_url": "https://api.github.com/users/DBusch-Developer/following{/other_user}",
  "gists_url": "https://api.github.com/users/DBusch-Developer/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/DBusch-Developer/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/DBusch-Developer/subscriptions",
  "organizations_url": "https://api.github.com/users/DBusch-Developer/orgs",
  "repos_url": "https://api.github.com/users/DBusch-Developer/repos",
  "events_url": "https://api.github.com/users/DBusch-Developer/events{/privacy}",
  "received_events_url": "https://api.github.com/users/DBusch-Developer/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Diana Busch",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 18,
  "public_gists": 0,
  "followers": 4,
  "following": 10,
  "created_at": "2025-04-24T01:53:34Z",
  "updated_at": "2026-05-16T03:33:08Z"
}`},{q:`API 2 — JSONPlaceholder Posts (https://jsonplaceholder.typicode.com/posts/1)`,a:`Fields in the response: userId, id, title, body

Title of post 1: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"

/posts/2 — what changed?: The id is 2, the title and body are different, but the userId is the same (1).

/posts (no number) — what do you get? How many posts?: You get an array of 100 posts. Each post has the same fields (userId, id, title, body) but different values. The userIds range from 1 to 10, with 10 posts per user. 
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae
sequi sint nihil reprehenderit dolor beatae ea dolores neque
fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis
qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure
voluptatem occaecati omnis eligendi aut ad
voluptatem doloribus vel accusantium quis pariatur
molestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci
sit amet autem assumenda provident rerum culpa
quis hic commodi nesciunt rem tenetur doloremque ipsam iure
quis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed
alias aut fugiat sit autem sed est
voluptatem omnis possimus esse voluptatibus quis
est aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi
mollitia nobis aliquid molestiae
perspiciatis et ea nemo ab reprehenderit accusantium quas
voluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae
magni quis enim qui quis quo nemo aut saepe
quidem repellat excepturi ut quia
sunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum
facilis quibusdam animi sint suscipit qui sint possimus cum
quaerat magni maiores excepturi
ipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore
enim quia ad
veniam autem ut quam aut nobis
et est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni
doloribus qui repudiandae
vero nisi sit
quos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus
accusamus in eum beatae sit
vel qui neque voluptates ut commodi qui incidunt
ut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam
praesentium quia et ea odit et ea voluptas et
sapiente quia nihil amet occaecati quia id voluptatem
incidunt ea est distinctio odio"
  },
  {
    "userId": 2,
    "id": 13,
    "title": "dolorum ut in voluptas mollitia et saepe quo animi",
    "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque
iste corrupti reiciendis voluptatem eius rerum
sit cumque quod eligendi laborum minima
perferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    "userId": 2,
    "id": 14,
    "title": "voluptatem eligendi optio",
    "body": "fuga et accusamus dolorum perferendis illo voluptas
non doloremque neque facere
ad qui dolorum molestiae beatae
sed aut voluptas totam sit illum"
  },
  {
    "userId": 2,
    "id": 15,
    "title": "eveniet quod temporibus",
    "body": "reprehenderit quos placeat
velit minima officia dolores impedit repudiandae molestiae nam
voluptas recusandae quis delectus
officiis harum fugiat vitae"
  },
  {
    "userId": 2,
    "id": 16,
    "title": "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    "body": "suscipit nam nisi quo aperiam aut
asperiores eos fugit maiores voluptatibus quia
voluptatem quis ullam qui in alias quia est
consequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    "userId": 2,
    "id": 17,
    "title": "fugit voluptas sed molestias voluptatem provident",
    "body": "eos voluptas et aut odit natus earum
aspernatur fuga molestiae ullam
deserunt ratione qui eos
qui nihil ratione nemo velit ut aut id quo"
  },
  {
    "userId": 2,
    "id": 18,
    "title": "voluptate et itaque vero tempora molestiae",
    "body": "eveniet quo quis
laborum totam consequatur non dolor
ut et est repudiandae
est voluptatem vel debitis et magnam"
  },
  {
    "userId": 2,
    "id": 19,
    "title": "adipisci placeat illum aut reiciendis qui",
    "body": "illum quis cupiditate provident sit magnam
ea sed aut omnis
veniam maiores ullam consequatur atque
adipisci quo iste expedita sit quos voluptas"
  },
  {
    "userId": 2,
    "id": 20,
    "title": "doloribus ad provident suscipit at",
    "body": "qui consequuntur ducimus possimus quisquam amet similique
suscipit porro ipsam amet
eos veritatis officiis exercitationem vel fugit aut necessitatibus totam
omnis rerum consequatur expedita quidem cumque explicabo"
  },
  {
    "userId": 3,
    "id": 21,
    "title": "asperiores ea ipsam voluptatibus modi minima quia sint",
    "body": "repellat aliquid praesentium dolorem quo
sed totam minus non itaque
nihil labore molestiae sunt dolor eveniet hic recusandae veniam
tempora et tenetur expedita sunt"
  },
  {
    "userId": 3,
    "id": 22,
    "title": "dolor sint quo a velit explicabo quia nam",
    "body": "eos qui et ipsum ipsam suscipit aut
sed omnis non odio
expedita earum mollitia molestiae aut atque rem suscipit
nam impedit esse"
  },
  {
    "userId": 3,
    "id": 23,
    "title": "maxime id vitae nihil numquam",
    "body": "veritatis unde neque eligendi
quae quod architecto quo neque vitae
est illo sit tempora doloremque fugit quod
et et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    "userId": 3,
    "id": 24,
    "title": "autem hic labore sunt dolores incidunt",
    "body": "enim et ex nulla
omnis voluptas quia qui
voluptatem consequatur numquam aliquam sunt
totam recusandae id dignissimos aut sed asperiores deserunt"
  },
  {
    "userId": 3,
    "id": 25,
    "title": "rem alias distinctio quo quis",
    "body": "ullam consequatur ut
omnis quis sit vel consequuntur
ipsa eligendi ipsum molestiae et omnis error nostrum
molestiae illo tempore quia et distinctio"
  },
  {
    "userId": 3,
    "id": 26,
    "title": "est et quae odit qui non",
    "body": "similique esse doloribus nihil accusamus
omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus
perspiciatis cum ut laudantium
omnis aut molestiae vel vero"
  },
  {
    "userId": 3,
    "id": 27,
    "title": "quasi id et eos tenetur aut quo autem",
    "body": "eum sed dolores ipsam sint possimus debitis occaecati
debitis qui qui et
ut placeat enim earum aut odit facilis
consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
  },
  {
    "userId": 3,
    "id": 28,
    "title": "delectus ullam et corporis nulla voluptas sequi",
    "body": "non et quaerat ex quae ad maiores
maiores recusandae totam aut blanditiis mollitia quas illo
ut voluptatibus voluptatem
similique nostrum eum"
  },
  {
    "userId": 3,
    "id": 29,
    "title": "iusto eius quod necessitatibus culpa ea",
    "body": "odit magnam ut saepe sed non qui
tempora atque nihil
accusamus illum doloribus illo dolor
eligendi repudiandae odit magni similique sed cum maiores"
  },
  {
    "userId": 3,
    "id": 30,
    "title": "a quo magni similique perferendis",
    "body": "alias dolor cumque
impedit blanditiis non eveniet odio maxime
blanditiis amet eius quis tempora quia autem rem
a provident perspiciatis quia"
  },
  {
    "userId": 4,
    "id": 31,
    "title": "ullam ut quidem id aut vel consequuntur",
    "body": "debitis eius sed quibusdam non quis consectetur vitae
impedit ut qui consequatur sed aut in
quidem sit nostrum et maiores adipisci atque
quaerat voluptatem adipisci repudiandae"
  },
  {
    "userId": 4,
    "id": 32,
    "title": "doloremque illum aliquid sunt",
    "body": "deserunt eos nobis asperiores et hic
est debitis repellat molestiae optio
nihil ratione ut eos beatae quibusdam distinctio maiores
earum voluptates et aut adipisci ea maiores voluptas maxime"
  },
  {
    "userId": 4,
    "id": 33,
    "title": "qui explicabo molestiae dolorem",
    "body": "rerum ut et numquam laborum odit est sit
id qui sint in
quasi tenetur tempore aperiam et quaerat qui in
rerum officiis sequi cumque quod"
  },
  {
    "userId": 4,
    "id": 34,
    "title": "magnam ut rerum iure",
    "body": "ea velit perferendis earum ut voluptatem voluptate itaque iusto
totam pariatur in
nemo voluptatem voluptatem autem magni tempora minima in
est distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
  },
  {
    "userId": 4,
    "id": 35,
    "title": "id nihil consequatur molestias animi provident",
    "body": "nisi error delectus possimus ut eligendi vitae
placeat eos harum cupiditate facilis reprehenderit voluptatem beatae
modi ducimus quo illum voluptas eligendi
et nobis quia fugit"
  },
  {
    "userId": 4,
    "id": 36,
    "title": "fuga nam accusamus voluptas reiciendis itaque",
    "body": "ad mollitia et omnis minus architecto odit
voluptas doloremque maxime aut non ipsa qui alias veniam
blanditiis culpa aut quia nihil cumque facere et occaecati
qui aspernatur quia eaque ut aperiam inventore"
  },
  {
    "userId": 4,
    "id": 37,
    "title": "provident vel ut sit ratione est",
    "body": "debitis et eaque non officia sed nesciunt pariatur vel
voluptatem iste vero et ea
numquam aut expedita ipsum nulla in
voluptates omnis consequatur aut enim officiis in quam qui"
  },
  {
    "userId": 4,
    "id": 38,
    "title": "explicabo et eos deleniti nostrum ab id repellendus",
    "body": "animi esse sit aut sit nesciunt assumenda eum voluptas
quia voluptatibus provident quia necessitatibus ea
rerum repudiandae quia voluptatem delectus fugit aut id quia
ratione optio eos iusto veniam iure"
  },
  {
    "userId": 4,
    "id": 39,
    "title": "eos dolorem iste accusantium est eaque quam",
    "body": "corporis rerum ducimus vel eum accusantium
maxime aspernatur a porro possimus iste omnis
est in deleniti asperiores fuga aut
voluptas sapiente vel dolore minus voluptatem incidunt ex"
  },
  {
    "userId": 4,
    "id": 40,
    "title": "enim quo cumque",
    "body": "ut voluptatum aliquid illo tenetur nemo sequi quo facilis
ipsum rem optio mollitia quas
voluptatem eum voluptas qui
unde omnis voluptatem iure quasi maxime voluptas nam"
  },
  {
    "userId": 5,
    "id": 41,
    "title": "non est facere",
    "body": "molestias id nostrum
excepturi molestiae dolore omnis repellendus quaerat saepe
consectetur iste quaerat tenetur asperiores accusamus ex ut
nam quidem est ducimus sunt debitis saepe"
  },
  {
    "userId": 5,
    "id": 42,
    "title": "commodi ullam sint et excepturi error explicabo praesentium voluptas",
    "body": "odio fugit voluptatum ducimus earum autem est incidunt voluptatem
odit reiciendis aliquam sunt sequi nulla dolorem
non facere repellendus voluptates quia
ratione harum vitae ut"
  },
  {
    "userId": 5,
    "id": 43,
    "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    "body": "similique fugit est
illum et dolorum harum et voluptate eaque quidem
exercitationem quos nam commodi possimus cum odio nihil nulla
dolorum exercitationem magnam ex et a et distinctio debitis"
  },
  {
    "userId": 5,
    "id": 44,
    "title": "optio dolor molestias sit",
    "body": "temporibus est consectetur dolore
et libero debitis vel velit laboriosam quia
ipsum quibusdam qui itaque fuga rem aut
ea et iure quam sed maxime ut distinctio quae"
  },
  {
    "userId": 5,
    "id": 45,
    "title": "ut numquam possimus omnis eius suscipit laudantium iure",
    "body": "est natus reiciendis nihil possimus aut provident
ex et dolor
repellat pariatur est
nobis rerum repellendus dolorem autem"
  },
  {
    "userId": 5,
    "id": 46,
    "title": "aut quo modi neque nostrum ducimus",
    "body": "voluptatem quisquam iste
voluptatibus natus officiis facilis dolorem
quis quas ipsam
vel et voluptatum in aliquid"
  },
  {
    "userId": 5,
    "id": 47,
    "title": "quibusdam cumque rem aut deserunt",
    "body": "voluptatem assumenda ut qui ut cupiditate aut impedit veniam
occaecati nemo illum voluptatem laudantium
molestiae beatae rerum ea iure soluta nostrum
eligendi et voluptate"
  },
  {
    "userId": 5,
    "id": 48,
    "title": "ut voluptatem illum ea doloribus itaque eos",
    "body": "voluptates quo voluptatem facilis iure occaecati
vel assumenda rerum officia et
illum perspiciatis ab deleniti
laudantium repellat ad ut et autem reprehenderit"
  },
  {
    "userId": 5,
    "id": 49,
    "title": "laborum non sunt aut ut assumenda perspiciatis voluptas",
    "body": "inventore ab sint
natus fugit id nulla sequi architecto nihil quaerat
eos tenetur in in eum veritatis non
quibusdam officiis aspernatur cumque aut commodi aut"
  },
  {
    "userId": 5,
    "id": 50,
    "title": "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
    "body": "error suscipit maxime adipisci consequuntur recusandae
voluptas eligendi et est et voluptates
quia distinctio ab amet quaerat molestiae et vitae
adipisci impedit sequi nesciunt quis consectetur"
  },
  {
    "userId": 6,
    "id": 51,
    "title": "soluta aliquam aperiam consequatur illo quis voluptas",
    "body": "sunt dolores aut doloribus
dolore doloribus voluptates tempora et
doloremque et quo
cum asperiores sit consectetur dolorem"
  },
  {
    "userId": 6,
    "id": 52,
    "title": "qui enim et consequuntur quia animi quis voluptate quibusdam",
    "body": "iusto est quibusdam fuga quas quaerat molestias
a enim ut sit accusamus enim
temporibus iusto accusantium provident architecto
soluta esse reprehenderit qui laborum"
  },
  {
    "userId": 6,
    "id": 53,
    "title": "ut quo aut ducimus alias",
    "body": "minima harum praesentium eum rerum illo dolore
quasi exercitationem rerum nam
porro quis neque quo
consequatur minus dolor quidem veritatis sunt non explicabo similique"
  },
  {
    "userId": 6,
    "id": 54,
    "title": "sit asperiores ipsam eveniet odio non quia",
    "body": "totam corporis dignissimos
vitae dolorem ut occaecati accusamus
ex velit deserunt
et exercitationem vero incidunt corrupti mollitia"
  },
  {
    "userId": 6,
    "id": 55,
    "title": "sit vel voluptatem et non libero",
    "body": "debitis excepturi ea perferendis harum libero optio
eos accusamus cum fuga ut sapiente repudiandae
et ut incidunt omnis molestiae
nihil ut eum odit"
  },
  {
    "userId": 6,
    "id": 56,
    "title": "qui et at rerum necessitatibus",
    "body": "aut est omnis dolores
neque rerum quod ea rerum velit pariatur beatae excepturi
et provident voluptas corrupti
corporis harum reprehenderit dolores eligendi"
  },
  {
    "userId": 6,
    "id": 57,
    "title": "sed ab est est",
    "body": "at pariatur consequuntur earum quidem
quo est laudantium soluta voluptatem
qui ullam et est
et cum voluptas voluptatum repellat est"
  },
  {
    "userId": 6,
    "id": 58,
    "title": "voluptatum itaque dolores nisi et quasi",
    "body": "veniam voluptatum quae adipisci id
et id quia eos ad et dolorem
aliquam quo nisi sunt eos impedit error
ad similique veniam"
  },
  {
    "userId": 6,
    "id": 59,
    "title": "qui commodi dolor at maiores et quis id accusantium",
    "body": "perspiciatis et quam ea autem temporibus non voluptatibus qui
beatae a earum officia nesciunt dolores suscipit voluptas et
animi doloribus cum rerum quas et magni
et hic ut ut commodi expedita sunt"
  },
  {
    "userId": 6,
    "id": 60,
    "title": "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
    "body": "asperiores sunt ab assumenda cumque modi velit
qui esse omnis
voluptate et fuga perferendis voluptas
illo ratione amet aut et omnis"
  },
  {
    "userId": 7,
    "id": 61,
    "title": "voluptatem doloribus consectetur est ut ducimus",
    "body": "ab nemo optio odio
delectus tenetur corporis similique nobis repellendus rerum omnis facilis
vero blanditiis debitis in nesciunt doloribus dicta dolores
magnam minus velit"
  },
  {
    "userId": 7,
    "id": 62,
    "title": "beatae enim quia vel",
    "body": "enim aspernatur illo distinctio quae praesentium
beatae alias amet delectus qui voluptate distinctio
odit sint accusantium autem omnis
quo molestiae omnis ea eveniet optio"
  },
  {
    "userId": 7,
    "id": 63,
    "title": "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
    "body": "enim adipisci aspernatur nemo
numquam omnis facere dolorem dolor ex quis temporibus incidunt
ab delectus culpa quo reprehenderit blanditiis asperiores
accusantium ut quam in voluptatibus voluptas ipsam dicta"
  },
  {
    "userId": 7,
    "id": 64,
    "title": "et fugit quas eum in in aperiam quod",
    "body": "id velit blanditiis
eum ea voluptatem
molestiae sint occaecati est eos perspiciatis
incidunt a error provident eaque aut aut qui"
  },
  {
    "userId": 7,
    "id": 65,
    "title": "consequatur id enim sunt et et",
    "body": "voluptatibus ex esse
sint explicabo est aliquid cumque adipisci fuga repellat labore
molestiae corrupti ex saepe at asperiores et perferendis
natus id esse incidunt pariatur"
  },
  {
    "userId": 7,
    "id": 66,
    "title": "repudiandae ea animi iusto",
    "body": "officia veritatis tenetur vero qui itaque
sint non ratione
sed et ut asperiores iusto eos molestiae nostrum
veritatis quibusdam et nemo iusto saepe"
  },
  {
    "userId": 7,
    "id": 67,
    "title": "aliquid eos sed fuga est maxime repellendus",
    "body": "reprehenderit id nostrum
voluptas doloremque pariatur sint et accusantium quia quod aspernatur
et fugiat amet
non sapiente et consequatur necessitatibus molestiae"
  },
  {
    "userId": 7,
    "id": 68,
    "title": "odio quis facere architecto reiciendis optio",
    "body": "magnam molestiae perferendis quisquam
qui cum reiciendis
quaerat animi amet hic inventore
ea quia deleniti quidem saepe porro velit"
  },
  {
    "userId": 7,
    "id": 69,
    "title": "fugiat quod pariatur odit minima",
    "body": "officiis error culpa consequatur modi asperiores et
dolorum assumenda voluptas et vel qui aut vel rerum
voluptatum quisquam perspiciatis quia rerum consequatur totam quas
sequi commodi repudiandae asperiores et saepe a"
  },
  {
    "userId": 7,
    "id": 70,
    "title": "voluptatem laborum magni",
    "body": "sunt repellendus quae
est asperiores aut deleniti esse accusamus repellendus quia aut
quia dolorem unde
eum tempora esse dolore"
  },
  {
    "userId": 8,
    "id": 71,
    "title": "et iusto veniam et illum aut fuga",
    "body": "occaecati a doloribus
iste saepe consectetur placeat eum voluptate dolorem et
qui quo quia voluptas
rerum ut id enim velit est perferendis"
  },
  {
    "userId": 8,
    "id": 72,
    "title": "sint hic doloribus consequatur eos non id",
    "body": "quam occaecati qui deleniti consectetur
consequatur aut facere quas exercitationem aliquam hic voluptas
neque id sunt ut aut accusamus
sunt consectetur expedita inventore velit"
  },
  {
    "userId": 8,
    "id": 73,
    "title": "consequuntur deleniti eos quia temporibus ab aliquid at",
    "body": "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo
aut eum minima consequatur
tempore cumque quae est et
et in consequuntur voluptatem voluptates aut"
  },
  {
    "userId": 8,
    "id": 74,
    "title": "enim unde ratione doloribus quas enim ut sit sapiente",
    "body": "odit qui et et necessitatibus sint veniam
mollitia amet doloremque molestiae commodi similique magnam et quam
blanditiis est itaque
quo et tenetur ratione occaecati molestiae tempora"
  },
  {
    "userId": 8,
    "id": 75,
    "title": "dignissimos eum dolor ut enim et delectus in",
    "body": "commodi non non omnis et voluptas sit
autem aut nobis magnam et sapiente voluptatem
et laborum repellat qui delectus facilis temporibus
rerum amet et nemo voluptate expedita adipisci error dolorem"
  },
  {
    "userId": 8,
    "id": 76,
    "title": "doloremque officiis ad et non perferendis",
    "body": "ut animi facere
totam iusto tempore
molestiae eum aut et dolorem aperiam
quaerat recusandae totam odio"
  },
  {
    "userId": 8,
    "id": 77,
    "title": "necessitatibus quasi exercitationem odio",
    "body": "modi ut in nulla repudiandae dolorum nostrum eos
aut consequatur omnis
ut incidunt est omnis iste et quam
voluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
  },
  {
    "userId": 8,
    "id": 78,
    "title": "quam voluptatibus rerum veritatis",
    "body": "nobis facilis odit tempore cupiditate quia
assumenda doloribus rerum qui ea
illum et qui totam
aut veniam repellendus"
  },
  {
    "userId": 8,
    "id": 79,
    "title": "pariatur consequatur quia magnam autem omnis non amet",
    "body": "libero accusantium et et facere incidunt sit dolorem
non excepturi qui quia sed laudantium
quisquam molestiae ducimus est
officiis esse molestiae iste et quos"
  },
  {
    "userId": 8,
    "id": 80,
    "title": "labore in ex et explicabo corporis aut quas",
    "body": "ex quod dolorem ea eum iure qui provident amet
quia qui facere excepturi et repudiandae
asperiores molestias provident
minus incidunt vero fugit rerum sint sunt excepturi provident"
  },
  {
    "userId": 9,
    "id": 81,
    "title": "tempora rem veritatis voluptas quo dolores vero",
    "body": "facere qui nesciunt est voluptatum voluptatem nisi
sequi eligendi necessitatibus ea at rerum itaque
harum non ratione velit laboriosam quis consequuntur
ex officiis minima doloremque voluptas ut aut"
  },
  {
    "userId": 9,
    "id": 82,
    "title": "laudantium voluptate suscipit sunt enim enim",
    "body": "ut libero sit aut totam inventore sunt
porro sint qui sunt molestiae
consequatur cupiditate qui iste ducimus adipisci
dolor enim assumenda soluta laboriosam amet iste delectus hic"
  },
  {
    "userId": 9,
    "id": 83,
    "title": "odit et voluptates doloribus alias odio et",
    "body": "est molestiae facilis quis tempora numquam nihil qui
voluptate sapiente consequatur est qui
necessitatibus autem aut ipsa aperiam modi dolore numquam
reprehenderit eius rem quibusdam"
  },
  {
    "userId": 9,
    "id": 84,
    "title": "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
    "body": "sint molestiae magni a et quos
eaque et quasi
ut rerum debitis similique veniam
recusandae dignissimos dolor incidunt consequatur odio"
  },
  {
    "userId": 9,
    "id": 85,
    "title": "dolore veritatis porro provident adipisci blanditiis et sunt",
    "body": "similique sed nisi voluptas iusto omnis
mollitia et quo
assumenda suscipit officia magnam sint sed tempora
enim provident pariatur praesentium atque animi amet ratione"
  },
  {
    "userId": 9,
    "id": 86,
    "title": "placeat quia et porro iste",
    "body": "quasi excepturi consequatur iste autem temporibus sed molestiae beatae
et quaerat et esse ut
voluptatem occaecati et vel explicabo autem
asperiores pariatur deserunt optio"
  },
  {
    "userId": 9,
    "id": 87,
    "title": "nostrum quis quasi placeat",
    "body": "eos et molestiae
nesciunt ut a
dolores perspiciatis repellendus repellat aliquid
magnam sint rem ipsum est"
  },
  {
    "userId": 9,
    "id": 88,
    "title": "sapiente omnis fugit eos",
    "body": "consequatur omnis est praesentium
ducimus non iste
neque hic deserunt
voluptatibus veniam cum et rerum sed"
  },
  {
    "userId": 9,
    "id": 89,
    "title": "sint soluta et vel magnam aut ut sed qui",
    "body": "repellat aut aperiam totam temporibus autem et
architecto magnam ut
consequatur qui cupiditate rerum quia soluta dignissimos nihil iure
tempore quas est"
  },
  {
    "userId": 9,
    "id": 90,
    "title": "ad iusto omnis odit dolor voluptatibus",
    "body": "minus omnis soluta quia
qui sed adipisci voluptates illum ipsam voluptatem
eligendi officia ut in
eos soluta similique molestias praesentium blanditiis"
  },
  {
    "userId": 10,
    "id": 91,
    "title": "aut amet sed",
    "body": "libero voluptate eveniet aperiam sed
sunt placeat suscipit molestias
similique fugit nam natus
expedita consequatur consequatur dolores quia eos et placeat"
  },
  {
    "userId": 10,
    "id": 92,
    "title": "ratione ex tenetur perferendis",
    "body": "aut et excepturi dicta laudantium sint rerum nihil
laudantium et at
a neque minima officia et similique libero et
commodi voluptate qui"
  },
  {
    "userId": 10,
    "id": 93,
    "title": "beatae soluta recusandae",
    "body": "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam
voluptatem quis enim recusandae ut sed sunt
nostrum est odit totam
sit error sed sunt eveniet provident qui nulla"
  },
  {
    "userId": 10,
    "id": 94,
    "title": "qui qui voluptates illo iste minima",
    "body": "aspernatur expedita soluta quo ab ut similique
expedita dolores amet
sed temporibus distinctio magnam saepe deleniti
omnis facilis nam ipsum natus sint similique omnis"
  },
  {
    "userId": 10,
    "id": 95,
    "title": "id minus libero illum nam ad officiis",
    "body": "earum voluptatem facere provident blanditiis velit laboriosam
pariatur accusamus odio saepe
cumque dolor qui a dicta ab doloribus consequatur omnis
corporis cupiditate eaque assumenda ad nesciunt"
  },
  {
    "userId": 10,
    "id": 96,
    "title": "quaerat velit veniam amet cupiditate aut numquam ut sequi",
    "body": "in non odio excepturi sint eum
labore voluptates vitae quia qui et
inventore itaque rerum
veniam non exercitationem delectus aut"
  },
  {
    "userId": 10,
    "id": 97,
    "title": "quas fugiat ut perspiciatis vero provident",
    "body": "eum non blanditiis soluta porro quibusdam voluptas
vel voluptatem qui placeat dolores qui velit aut
vel inventore aut cumque culpa explicabo aliquid at
perspiciatis est et voluptatem dignissimos dolor itaque sit nam"
  },
  {
    "userId": 10,
    "id": 98,
    "title": "laboriosam dolor voluptates",
    "body": "doloremque ex facilis sit sint culpa
soluta assumenda eligendi non ut eius
sequi ducimus vel quasi
veritatis est dolores"
  },
  {
    "userId": 10,
    "id": 99,
    "title": "temporibus sit alias delectus eligendi possimus magni",
    "body": "quo deleniti praesentium dicta non quod
aut est molestias
molestias et officia quis nihil
itaque dolorem quia"
  },
  {
    "userId": 10,
    "id": 100,
    "title": "at nam consequatur ea labore ea harum",
    "body": "cupiditate quo est a modi nesciunt soluta
ipsa voluptas error itaque dicta in
autem qui minus magnam et distinctio eum
accusamus ratione error aut"
  }
]`},{q:`API 3 — JSONPlaceholder Users (https://jsonplaceholder.typicode.com/users/1)`,a:`Name: "Leanne Graham"

City (inside "address"): "Gwenborough"

Company (inside "company"): "Romaguera-Crona"

/users — how many total?: There is an array of 10 users, so 10 total. 
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]`},{q:`API 4 — JSONPlaceholder Todos (https://jsonplaceholder.typicode.com/todos/1)`,a:`Fields a todo has: userId, id, title, completed

What does "completed" tell you?: It tells you whether the todo is marked as done (true) or not (false).

/todos — how many total?: 200 todos total.

[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  },
  {
    "userId": 2,
    "id": 21,
    "title": "suscipit repellat esse quibusdam voluptatem incidunt",
    "completed": false
  },
  {
    "userId": 2,
    "id": 22,
    "title": "distinctio vitae autem nihil ut molestias quo",
    "completed": true
  },
  {
    "userId": 2,
    "id": 23,
    "title": "et itaque necessitatibus maxime molestiae qui quas velit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 24,
    "title": "adipisci non ad dicta qui amet quaerat doloribus ea",
    "completed": false
  },
  {
    "userId": 2,
    "id": 25,
    "title": "voluptas quo tenetur perspiciatis explicabo natus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 26,
    "title": "aliquam aut quasi",
    "completed": true
  },
  {
    "userId": 2,
    "id": 27,
    "title": "veritatis pariatur delectus",
    "completed": true
  },
  {
    "userId": 2,
    "id": 28,
    "title": "nesciunt totam sit blanditiis sit",
    "completed": false
  },
  {
    "userId": 2,
    "id": 29,
    "title": "laborum aut in quam",
    "completed": false
  },
  {
    "userId": 2,
    "id": 30,
    "title": "nemo perspiciatis repellat ut dolor libero commodi blanditiis omnis",
    "completed": true
  },
  {
    "userId": 2,
    "id": 31,
    "title": "repudiandae totam in est sint facere fuga",
    "completed": false
  },
  {
    "userId": 2,
    "id": 32,
    "title": "earum doloribus ea doloremque quis",
    "completed": false
  },
  {
    "userId": 2,
    "id": 33,
    "title": "sint sit aut vero",
    "completed": false
  },
  {
    "userId": 2,
    "id": 34,
    "title": "porro aut necessitatibus eaque distinctio",
    "completed": false
  },
  {
    "userId": 2,
    "id": 35,
    "title": "repellendus veritatis molestias dicta incidunt",
    "completed": true
  },
  {
    "userId": 2,
    "id": 36,
    "title": "excepturi deleniti adipisci voluptatem et neque optio illum ad",
    "completed": true
  },
  {
    "userId": 2,
    "id": 37,
    "title": "sunt cum tempora",
    "completed": false
  },
  {
    "userId": 2,
    "id": 38,
    "title": "totam quia non",
    "completed": false
  },
  {
    "userId": 2,
    "id": 39,
    "title": "doloremque quibusdam asperiores libero corrupti illum qui omnis",
    "completed": false
  },
  {
    "userId": 2,
    "id": 40,
    "title": "totam atque quo nesciunt",
    "completed": true
  },
  {
    "userId": 3,
    "id": 41,
    "title": "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    "completed": false
  },
  {
    "userId": 3,
    "id": 42,
    "title": "rerum perferendis error quia ut eveniet",
    "completed": false
  },
  {
    "userId": 3,
    "id": 43,
    "title": "tempore ut sint quis recusandae",
    "completed": true
  },
  {
    "userId": 3,
    "id": 44,
    "title": "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    "completed": true
  },
  {
    "userId": 3,
    "id": 45,
    "title": "velit soluta adipisci molestias reiciendis harum",
    "completed": false
  },
  {
    "userId": 3,
    "id": 46,
    "title": "vel voluptatem repellat nihil placeat corporis",
    "completed": false
  },
  {
    "userId": 3,
    "id": 47,
    "title": "nam qui rerum fugiat accusamus",
    "completed": false
  },
  {
    "userId": 3,
    "id": 48,
    "title": "sit reprehenderit omnis quia",
    "completed": false
  },
  {
    "userId": 3,
    "id": 49,
    "title": "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    "completed": false
  },
  {
    "userId": 3,
    "id": 50,
    "title": "cupiditate necessitatibus ullam aut quis dolor voluptate",
    "completed": true
  },
  {
    "userId": 3,
    "id": 51,
    "title": "distinctio exercitationem ab doloribus",
    "completed": false
  },
  {
    "userId": 3,
    "id": 52,
    "title": "nesciunt dolorum quis recusandae ad pariatur ratione",
    "completed": false
  },
  {
    "userId": 3,
    "id": 53,
    "title": "qui labore est occaecati recusandae aliquid quam",
    "completed": false
  },
  {
    "userId": 3,
    "id": 54,
    "title": "quis et est ut voluptate quam dolor",
    "completed": true
  },
  {
    "userId": 3,
    "id": 55,
    "title": "voluptatum omnis minima qui occaecati provident nulla voluptatem ratione",
    "completed": true
  },
  {
    "userId": 3,
    "id": 56,
    "title": "deleniti ea temporibus enim",
    "completed": true
  },
  {
    "userId": 3,
    "id": 57,
    "title": "pariatur et magnam ea doloribus similique voluptatem rerum quia",
    "completed": false
  },
  {
    "userId": 3,
    "id": 58,
    "title": "est dicta totam qui explicabo doloribus qui dignissimos",
    "completed": false
  },
  {
    "userId": 3,
    "id": 59,
    "title": "perspiciatis velit id laborum placeat iusto et aliquam odio",
    "completed": false
  },
  {
    "userId": 3,
    "id": 60,
    "title": "et sequi qui architecto ut adipisci",
    "completed": true
  },
  {
    "userId": 4,
    "id": 61,
    "title": "odit optio omnis qui sunt",
    "completed": true
  },
  {
    "userId": 4,
    "id": 62,
    "title": "et placeat et tempore aspernatur sint numquam",
    "completed": false
  },
  {
    "userId": 4,
    "id": 63,
    "title": "doloremque aut dolores quidem fuga qui nulla",
    "completed": true
  },
  {
    "userId": 4,
    "id": 64,
    "title": "voluptas consequatur qui ut quia magnam nemo esse",
    "completed": false
  },
  {
    "userId": 4,
    "id": 65,
    "title": "fugiat pariatur ratione ut asperiores necessitatibus magni",
    "completed": false
  },
  {
    "userId": 4,
    "id": 66,
    "title": "rerum eum molestias autem voluptatum sit optio",
    "completed": false
  },
  {
    "userId": 4,
    "id": 67,
    "title": "quia voluptatibus voluptatem quos similique maiores repellat",
    "completed": false
  },
  {
    "userId": 4,
    "id": 68,
    "title": "aut id perspiciatis voluptatem iusto",
    "completed": false
  },
  {
    "userId": 4,
    "id": 69,
    "title": "doloribus sint dolorum ab adipisci itaque dignissimos aliquam suscipit",
    "completed": false
  },
  {
    "userId": 4,
    "id": 70,
    "title": "ut sequi accusantium et mollitia delectus sunt",
    "completed": false
  },
  {
    "userId": 4,
    "id": 71,
    "title": "aut velit saepe ullam",
    "completed": false
  },
  {
    "userId": 4,
    "id": 72,
    "title": "praesentium facilis facere quis harum voluptatibus voluptatem eum",
    "completed": false
  },
  {
    "userId": 4,
    "id": 73,
    "title": "sint amet quia totam corporis qui exercitationem commodi",
    "completed": true
  },
  {
    "userId": 4,
    "id": 74,
    "title": "expedita tempore nobis eveniet laborum maiores",
    "completed": false
  },
  {
    "userId": 4,
    "id": 75,
    "title": "occaecati adipisci est possimus totam",
    "completed": false
  },
  {
    "userId": 4,
    "id": 76,
    "title": "sequi dolorem sed",
    "completed": true
  },
  {
    "userId": 4,
    "id": 77,
    "title": "maiores aut nesciunt delectus exercitationem vel assumenda eligendi at",
    "completed": false
  },
  {
    "userId": 4,
    "id": 78,
    "title": "reiciendis est magnam amet nemo iste recusandae impedit quaerat",
    "completed": false
  },
  {
    "userId": 4,
    "id": 79,
    "title": "eum ipsa maxime ut",
    "completed": true
  },
  {
    "userId": 4,
    "id": 80,
    "title": "tempore molestias dolores rerum sequi voluptates ipsum consequatur",
    "completed": true
  },
  {
    "userId": 5,
    "id": 81,
    "title": "suscipit qui totam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 82,
    "title": "voluptates eum voluptas et dicta",
    "completed": false
  },
  {
    "userId": 5,
    "id": 83,
    "title": "quidem at rerum quis ex aut sit quam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 84,
    "title": "sunt veritatis ut voluptate",
    "completed": false
  },
  {
    "userId": 5,
    "id": 85,
    "title": "et quia ad iste a",
    "completed": true
  },
  {
    "userId": 5,
    "id": 86,
    "title": "incidunt ut saepe autem",
    "completed": true
  },
  {
    "userId": 5,
    "id": 87,
    "title": "laudantium quae eligendi consequatur quia et vero autem",
    "completed": true
  },
  {
    "userId": 5,
    "id": 88,
    "title": "vitae aut excepturi laboriosam sint aliquam et et accusantium",
    "completed": false
  },
  {
    "userId": 5,
    "id": 89,
    "title": "sequi ut omnis et",
    "completed": true
  },
  {
    "userId": 5,
    "id": 90,
    "title": "molestiae nisi accusantium tenetur dolorem et",
    "completed": true
  },
  {
    "userId": 5,
    "id": 91,
    "title": "nulla quis consequatur saepe qui id expedita",
    "completed": true
  },
  {
    "userId": 5,
    "id": 92,
    "title": "in omnis laboriosam",
    "completed": true
  },
  {
    "userId": 5,
    "id": 93,
    "title": "odio iure consequatur molestiae quibusdam necessitatibus quia sint",
    "completed": true
  },
  {
    "userId": 5,
    "id": 94,
    "title": "facilis modi saepe mollitia",
    "completed": false
  },
  {
    "userId": 5,
    "id": 95,
    "title": "vel nihil et molestiae iusto assumenda nemo quo ut",
    "completed": true
  },
  {
    "userId": 5,
    "id": 96,
    "title": "nobis suscipit ducimus enim asperiores voluptas",
    "completed": false
  },
  {
    "userId": 5,
    "id": 97,
    "title": "dolorum laboriosam eos qui iure aliquam",
    "completed": false
  },
  {
    "userId": 5,
    "id": 98,
    "title": "debitis accusantium ut quo facilis nihil quis sapiente necessitatibus",
    "completed": true
  },
  {
    "userId": 5,
    "id": 99,
    "title": "neque voluptates ratione",
    "completed": false
  },
  {
    "userId": 5,
    "id": 100,
    "title": "excepturi a et neque qui expedita vel voluptate",
    "completed": false
  },
  {
    "userId": 6,
    "id": 101,
    "title": "explicabo enim cumque porro aperiam occaecati minima",
    "completed": false
  },
  {
    "userId": 6,
    "id": 102,
    "title": "sed ab consequatur",
    "completed": false
  },
  {
    "userId": 6,
    "id": 103,
    "title": "non sunt delectus illo nulla tenetur enim omnis",
    "completed": false
  },
  {
    "userId": 6,
    "id": 104,
    "title": "excepturi non laudantium quo",
    "completed": false
  },
  {
    "userId": 6,
    "id": 105,
    "title": "totam quia dolorem et illum repellat voluptas optio",
    "completed": true
  },
  {
    "userId": 6,
    "id": 106,
    "title": "ad illo quis voluptatem temporibus",
    "completed": true
  },
  {
    "userId": 6,
    "id": 107,
    "title": "praesentium facilis omnis laudantium fugit ad iusto nihil nesciunt",
    "completed": false
  },
  {
    "userId": 6,
    "id": 108,
    "title": "a eos eaque nihil et exercitationem incidunt delectus",
    "completed": true
  },
  {
    "userId": 6,
    "id": 109,
    "title": "autem temporibus harum quisquam in culpa",
    "completed": true
  },
  {
    "userId": 6,
    "id": 110,
    "title": "aut aut ea corporis",
    "completed": true
  },
  {
    "userId": 6,
    "id": 111,
    "title": "magni accusantium labore et id quis provident",
    "completed": false
  },
  {
    "userId": 6,
    "id": 112,
    "title": "consectetur impedit quisquam qui deserunt non rerum consequuntur eius",
    "completed": false
  },
  {
    "userId": 6,
    "id": 113,
    "title": "quia atque aliquam sunt impedit voluptatum rerum assumenda nisi",
    "completed": false
  },
  {
    "userId": 6,
    "id": 114,
    "title": "cupiditate quos possimus corporis quisquam exercitationem beatae",
    "completed": false
  },
  {
    "userId": 6,
    "id": 115,
    "title": "sed et ea eum",
    "completed": false
  },
  {
    "userId": 6,
    "id": 116,
    "title": "ipsa dolores vel facilis ut",
    "completed": true
  },
  {
    "userId": 6,
    "id": 117,
    "title": "sequi quae est et qui qui eveniet asperiores",
    "completed": false
  },
  {
    "userId": 6,
    "id": 118,
    "title": "quia modi consequatur vero fugiat",
    "completed": false
  },
  {
    "userId": 6,
    "id": 119,
    "title": "corporis ducimus ea perspiciatis iste",
    "completed": false
  },
  {
    "userId": 6,
    "id": 120,
    "title": "dolorem laboriosam vel voluptas et aliquam quasi",
    "completed": false
  },
  {
    "userId": 7,
    "id": 121,
    "title": "inventore aut nihil minima laudantium hic qui omnis",
    "completed": true
  },
  {
    "userId": 7,
    "id": 122,
    "title": "provident aut nobis culpa",
    "completed": true
  },
  {
    "userId": 7,
    "id": 123,
    "title": "esse et quis iste est earum aut impedit",
    "completed": false
  },
  {
    "userId": 7,
    "id": 124,
    "title": "qui consectetur id",
    "completed": false
  },
  {
    "userId": 7,
    "id": 125,
    "title": "aut quasi autem iste tempore illum possimus",
    "completed": false
  },
  {
    "userId": 7,
    "id": 126,
    "title": "ut asperiores perspiciatis veniam ipsum rerum saepe",
    "completed": true
  },
  {
    "userId": 7,
    "id": 127,
    "title": "voluptatem libero consectetur rerum ut",
    "completed": true
  },
  {
    "userId": 7,
    "id": 128,
    "title": "eius omnis est qui voluptatem autem",
    "completed": false
  },
  {
    "userId": 7,
    "id": 129,
    "title": "rerum culpa quis harum",
    "completed": false
  },
  {
    "userId": 7,
    "id": 130,
    "title": "nulla aliquid eveniet harum laborum libero alias ut unde",
    "completed": true
  },
  {
    "userId": 7,
    "id": 131,
    "title": "qui ea incidunt quis",
    "completed": false
  },
  {
    "userId": 7,
    "id": 132,
    "title": "qui molestiae voluptatibus velit iure harum quisquam",
    "completed": true
  },
  {
    "userId": 7,
    "id": 133,
    "title": "et labore eos enim rerum consequatur sunt",
    "completed": true
  },
  {
    "userId": 7,
    "id": 134,
    "title": "molestiae doloribus et laborum quod ea",
    "completed": false
  },
  {
    "userId": 7,
    "id": 135,
    "title": "facere ipsa nam eum voluptates reiciendis vero qui",
    "completed": false
  },
  {
    "userId": 7,
    "id": 136,
    "title": "asperiores illo tempora fuga sed ut quasi adipisci",
    "completed": false
  },
  {
    "userId": 7,
    "id": 137,
    "title": "qui sit non",
    "completed": false
  },
  {
    "userId": 7,
    "id": 138,
    "title": "placeat minima consequatur rem qui ut",
    "completed": true
  },
  {
    "userId": 7,
    "id": 139,
    "title": "consequatur doloribus id possimus voluptas a voluptatem",
    "completed": false
  },
  {
    "userId": 7,
    "id": 140,
    "title": "aut consectetur in blanditiis deserunt quia sed laboriosam",
    "completed": true
  },
  {
    "userId": 8,
    "id": 141,
    "title": "explicabo consectetur debitis voluptates quas quae culpa rerum non",
    "completed": true
  },
  {
    "userId": 8,
    "id": 142,
    "title": "maiores accusantium architecto necessitatibus reiciendis ea aut",
    "completed": true
  },
  {
    "userId": 8,
    "id": 143,
    "title": "eum non recusandae cupiditate animi",
    "completed": false
  },
  {
    "userId": 8,
    "id": 144,
    "title": "ut eum exercitationem sint",
    "completed": false
  },
  {
    "userId": 8,
    "id": 145,
    "title": "beatae qui ullam incidunt voluptatem non nisi aliquam",
    "completed": false
  },
  {
    "userId": 8,
    "id": 146,
    "title": "molestiae suscipit ratione nihil odio libero impedit vero totam",
    "completed": true
  },
  {
    "userId": 8,
    "id": 147,
    "title": "eum itaque quod reprehenderit et facilis dolor autem ut",
    "completed": true
  },
  {
    "userId": 8,
    "id": 148,
    "title": "esse quas et quo quasi exercitationem",
    "completed": false
  },
  {
    "userId": 8,
    "id": 149,
    "title": "animi voluptas quod perferendis est",
    "completed": false
  },
  {
    "userId": 8,
    "id": 150,
    "title": "eos amet tempore laudantium fugit a",
    "completed": false
  },
  {
    "userId": 8,
    "id": 151,
    "title": "accusamus adipisci dicta qui quo ea explicabo sed vero",
    "completed": true
  },
  {
    "userId": 8,
    "id": 152,
    "title": "odit eligendi recusandae doloremque cumque non",
    "completed": false
  },
  {
    "userId": 8,
    "id": 153,
    "title": "ea aperiam consequatur qui repellat eos",
    "completed": false
  },
  {
    "userId": 8,
    "id": 154,
    "title": "rerum non ex sapiente",
    "completed": true
  },
  {
    "userId": 8,
    "id": 155,
    "title": "voluptatem nobis consequatur et assumenda magnam",
    "completed": true
  },
  {
    "userId": 8,
    "id": 156,
    "title": "nam quia quia nulla repellat assumenda quibusdam sit nobis",
    "completed": true
  },
  {
    "userId": 8,
    "id": 157,
    "title": "dolorem veniam quisquam deserunt repellendus",
    "completed": true
  },
  {
    "userId": 8,
    "id": 158,
    "title": "debitis vitae delectus et harum accusamus aut deleniti a",
    "completed": true
  },
  {
    "userId": 8,
    "id": 159,
    "title": "debitis adipisci quibusdam aliquam sed dolore ea praesentium nobis",
    "completed": true
  },
  {
    "userId": 8,
    "id": 160,
    "title": "et praesentium aliquam est",
    "completed": false
  },
  {
    "userId": 9,
    "id": 161,
    "title": "ex hic consequuntur earum omnis alias ut occaecati culpa",
    "completed": true
  },
  {
    "userId": 9,
    "id": 162,
    "title": "omnis laboriosam molestias animi sunt dolore",
    "completed": true
  },
  {
    "userId": 9,
    "id": 163,
    "title": "natus corrupti maxime laudantium et voluptatem laboriosam odit",
    "completed": false
  },
  {
    "userId": 9,
    "id": 164,
    "title": "reprehenderit quos aut aut consequatur est sed",
    "completed": false
  },
  {
    "userId": 9,
    "id": 165,
    "title": "fugiat perferendis sed aut quidem",
    "completed": false
  },
  {
    "userId": 9,
    "id": 166,
    "title": "quos quo possimus suscipit minima ut",
    "completed": false
  },
  {
    "userId": 9,
    "id": 167,
    "title": "et quis minus quo a asperiores molestiae",
    "completed": false
  },
  {
    "userId": 9,
    "id": 168,
    "title": "recusandae quia qui sunt libero",
    "completed": false
  },
  {
    "userId": 9,
    "id": 169,
    "title": "ea odio perferendis officiis",
    "completed": true
  },
  {
    "userId": 9,
    "id": 170,
    "title": "quisquam aliquam quia doloribus aut",
    "completed": false
  },
  {
    "userId": 9,
    "id": 171,
    "title": "fugiat aut voluptatibus corrupti deleniti velit iste odio",
    "completed": true
  },
  {
    "userId": 9,
    "id": 172,
    "title": "et provident amet rerum consectetur et voluptatum",
    "completed": false
  },
  {
    "userId": 9,
    "id": 173,
    "title": "harum ad aperiam quis",
    "completed": false
  },
  {
    "userId": 9,
    "id": 174,
    "title": "similique aut quo",
    "completed": false
  },
  {
    "userId": 9,
    "id": 175,
    "title": "laudantium eius officia perferendis provident perspiciatis asperiores",
    "completed": true
  },
  {
    "userId": 9,
    "id": 176,
    "title": "magni soluta corrupti ut maiores rem quidem",
    "completed": false
  },
  {
    "userId": 9,
    "id": 177,
    "title": "et placeat temporibus voluptas est tempora quos quibusdam",
    "completed": false
  },
  {
    "userId": 9,
    "id": 178,
    "title": "nesciunt itaque commodi tempore",
    "completed": true
  },
  {
    "userId": 9,
    "id": 179,
    "title": "omnis consequuntur cupiditate impedit itaque ipsam quo",
    "completed": true
  },
  {
    "userId": 9,
    "id": 180,
    "title": "debitis nisi et dolorem repellat et",
    "completed": true
  },
  {
    "userId": 10,
    "id": 181,
    "title": "ut cupiditate sequi aliquam fuga maiores",
    "completed": false
  },
  {
    "userId": 10,
    "id": 182,
    "title": "inventore saepe cumque et aut illum enim",
    "completed": true
  },
  {
    "userId": 10,
    "id": 183,
    "title": "omnis nulla eum aliquam distinctio",
    "completed": true
  },
  {
    "userId": 10,
    "id": 184,
    "title": "molestias modi perferendis perspiciatis",
    "completed": false
  },
  {
    "userId": 10,
    "id": 185,
    "title": "voluptates dignissimos sed doloribus animi quaerat aut",
    "completed": false
  },
  {
    "userId": 10,
    "id": 186,
    "title": "explicabo odio est et",
    "completed": false
  },
  {
    "userId": 10,
    "id": 187,
    "title": "consequuntur animi possimus",
    "completed": false
  },
  {
    "userId": 10,
    "id": 188,
    "title": "vel non beatae est",
    "completed": true
  },
  {
    "userId": 10,
    "id": 189,
    "title": "culpa eius et voluptatem et",
    "completed": true
  },
  {
    "userId": 10,
    "id": 190,
    "title": "accusamus sint iusto et voluptatem exercitationem",
    "completed": true
  },
  {
    "userId": 10,
    "id": 191,
    "title": "temporibus atque distinctio omnis eius impedit tempore molestias pariatur",
    "completed": true
  },
  {
    "userId": 10,
    "id": 192,
    "title": "ut quas possimus exercitationem sint voluptates",
    "completed": false
  },
  {
    "userId": 10,
    "id": 193,
    "title": "rerum debitis voluptatem qui eveniet tempora distinctio a",
    "completed": true
  },
  {
    "userId": 10,
    "id": 194,
    "title": "sed ut vero sit molestiae",
    "completed": false
  },
  {
    "userId": 10,
    "id": 195,
    "title": "rerum ex veniam mollitia voluptatibus pariatur",
    "completed": true
  },
  {
    "userId": 10,
    "id": 196,
    "title": "consequuntur aut ut fugit similique",
    "completed": true
  },
  {
    "userId": 10,
    "id": 197,
    "title": "dignissimos quo nobis earum saepe",
    "completed": true
  },
  {
    "userId": 10,
    "id": 198,
    "title": "quis eius est sint explicabo",
    "completed": true
  },
  {
    "userId": 10,
    "id": 199,
    "title": "numquam repellendus a magnam",
    "completed": true
  },
  {
    "userId": 10,
    "id": 200,
    "title": "ipsam aperiam voluptates qui",
    "completed": false
  }
]

A todo marked completed: true?: 
{
    "userId": 10,
    "id": 195,
    "title": "rerum ex veniam mollitia voluptatibus pariatur",
    "completed": true
  },
  {
    "userId": 10,
    "id": 196,
    "title": "consequuntur aut ut fugit similique",
    "completed": true
  },
  {
    "userId": 10,
    "id": 197,
    "title": "dignissimos quo nobis earum saepe",
    "completed": true
  },
  {
    "userId": 10,
    "id": 198,
    "title": "quis eius est sint explicabo",
    "completed": true
  },
  {
    "userId": 10,
    "id": 199,
    "title": "numquam repellendus a magnam",
    "completed": true
  }`},{q:`One thing that surprised me about what an API response looks like`,a:`Nothing surprised me. I have been working with APIs for a while and I expected the response to be in JSON format, which is a common data interchange format used by APIs. The structure of the response, with key-value pairs, is also something I am familiar with. Overall, the response looks as I would expect from an API call. I find it very easy to read and understand the information from the response, such as the userId, id, title, and completed status of each todo item. I am not surprised by anything in the response.`}]},{heading:`Exercise 2 — Make an API Call in Code`,description:`Write the same browser request in JavaScript using fetch(). Run it in Node. Then modify it.`,qa:[{q:`Comprehension — what each piece of the code does`,a:`// Use fetch() to request data from the API URL.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  // Convert the response from the server into JavaScript data.
  .then((response) => response.json())
  // Use the data after it has been converted.
  .then((data) => {
    // Display only the title from the data in the console.
    console.log(data.title);
  })
  // Catch and show any errors if something goes wrong.
  .catch((error) => {
    // Print the error message in the console.
    console.error("Error fetching data:", error);
  });

What does fetch() do? fetch() is a built-in JavaScript function that allows you to make network requests to retrieve resources from a server. It returns a Promise that resolves to the Response object representing the response to the request. You can use fetch() to get data from an API, submit data to a server, or perform other network operations. In this code, fetch() is used to request data from the specified API URL.

What does .then() do? .then() is a method used with Promises in JavaScript. It allows you to specify what should happen when a Promise is resolved (i.e., when the asynchronous operation is completed successfully). The .then() method takes a callback function as an argument, which will be executed with the resolved value of the Promise. In this code, there are two .then() calls: the first one converts the response to JSON format, and the second one uses the converted data to log the title to the console.

What does response.json() do? response.json() is a method of the Response object that parses the response body as JSON and returns a Promise that resolves to a JavaScript object. In this code, it is used to convert the raw response from the server into a format that can be easily manipulated in JavaScript.

What does data.title do? data.title accesses the "title" property of the JavaScript object that was obtained from parsing the JSON response. In this code, it is used to retrieve the title of the post from the data and log it to the console.

What does .catch() do? .catch() is a method used with Promises in JavaScript to handle errors that may occur during the asynchronous operation. It allows you to specify a callback function that will be executed if the Promise is rejected (i.e., if an error occurs). In this code, .catch() is used to catch any errors that may happen during the fetch operation or the processing of the response, and it logs the error message to the console.`},{q:`Modifications — the three levels`,a:`Level 1 — change it to display the body instead of the title:
// Use fetch() to request data from the API URL.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  // Convert the response from the server into JavaScript data.
  .then((response) => response.json())
  // Use the data after it has been converted.
  .then((data) => {
    // Display only the title from the data in the console.
    console.log(data.body);
  })
  // Catch and show any errors if something goes wrong.
  .catch((error) => {
    // Print the error message in the console.
    console.error("Error fetching data:", error);
  });

Level 2 — fetch post #5, display both title and body:
// Use fetch() to request data from the API URL.
fetch("https://jsonplaceholder.typicode.com/posts/5")
  // Convert the response from the server into JavaScript data.
  .then((response) => response.json())
  // Use the data after it has been converted.
  .then((data) => {
    // Display only the title from the data in the console.
    console.log("title:", data.title);
    console.log("body:", data.body);
  })
  // Catch and show any errors if something goes wrong.
  .catch((error) => {
    // Print the error message in the console.
    console.error("Error fetching data:", error);
  });

Level 3 — fetch ALL posts and display just the titles of the first 5:
// Use fetch() to request data from the API URL.
fetch("https://jsonplaceholder.typicode.com/posts/")
  // Convert the response from the server into JavaScript data.
  .then((response) => response.json())
  // Use the data after it has been converted.
  .then((data) => {
    // Get only the first 5 posts from the array.
    const firstFivePosts = data.slice(0, 5);

    // Loop through each of the first 5 posts.
    firstFivePosts.forEach((post) => {
      // Display the title for each post.
      console.log("title:", post.title);

      // Display the body for each post.
      console.log("body:", post.body);
    });
  })
  // Catch and show any errors if something goes wrong.
  .catch((error) => {
    // Print the error message in the console.
    console.error("Error fetching data:", error);
  });
  `}]},{heading:`Exercise 3 — HTTP Methods in Plain English`,description:`Map the API surface my Phase 2 app needs. Resources first, then endpoints.`,qa:[{q:`Main resources my app deals with`,a:`integrations — Canvas API tokens (I have two: observer for my daughter, student for Yavapai)
observees — kids tied to an observer token
assignments — missing and upcoming work, read-only proxy from Canvas
digests — the daily emails that get generated
preferences — my settings (delivery time, lookahead window, etc.)`},{q:`My API endpoints — at least 5`,a:`GET    /integrations              -- List my Canvas tokens (observer + student)
POST   /integrations              -- Add a new Canvas token (e.g., my Yavapai student token)
PUT    /integrations/:id          -- Update a token after I rotate it in Canvas
DELETE /integrations/:id          -- Remove a token I no longer use

GET    /observees                 -- List the kids linked to my observer token

GET    /assignments               -- All missing + upcoming across both my accounts
GET    /assignments?status=missing -- Only past-due / missing items
GET    /assignments?role=student  -- Only MY Yavapai work
GET    /assignments?due_within=24h -- Items due in the next 24 hours

GET    /digests/today             -- Preview today's digest in the browser (no send)
GET    /digests/:id               -- View a specific past digest
POST   /digests/send              -- Manually trigger a send right now

GET    /preferences               -- My settings (delivery time, lookahead days, email)
PUT    /preferences               -- Update settings (e.g., change delivery from 7am to 6am) `}]},{heading:`Exercise 4 — Error Handling Exploration`,description:`Break some URLs on purpose. See what comes back. Build a status-code cheat sheet.`,qa:[{q:`Exploring broken URLs — what did I see?`,a:`https://jsonplaceholder.typicode.com/posts/99999 — what came back?: JSON returned with an empty object: {} Is it an error? No, it's not an error. The API is designed to return an empty object when a resource is not found, rather than returning an error status code. This allows the client to handle the case of a missing resource gracefully without having to deal with an error response.

https://api.github.com/users/thisisnotarealgithubusername12345678 — what does "message" say?: {
  "message": "Not Found",
  "documentation_url": "https://docs.github.com/rest",
  "status": "404"
}`},{q:`Status code reference card`,a:`STATUS CODE REFERENCE CARD
--------------------------
200 OK           —  Success! The request was successful and the server returned the requested data.

201 Created      — The request was successful and a new resource was created as a result.

400 Bad Request  — The server could not understand the request due to invalid syntax. The client should not repeat the request without modifications.

401 Unauthorized — The client must authenticate itself to get the requested response. This is typically used when authentication is required and has failed or has not yet been provided. 

403 Forbidden    — The client does not have access rights to the content, i.e., they are unauthorized. Unlike 401 Unauthorized, the client's identity is known to the server.

404 Not Found    — The server can not find the requested resource. This means that the endpoint is valid but the resource itself does not exist.

500 Server Error — The server has encountered a situation it doesn't know how to handle. This is a generic error message, given when no more specific message is suitable. It indicates that the server failed to fulfill a valid request.`}]},{heading:`Exercise 5 — Find a Public API for My Project`,description:`Browse public-apis directory. Pick one that's relevant. Try to call it.`,qa:[{q:`Public API I found`,a:`API: Nager.Date — Public Holiday API
URL: https://date.nager.at/api/v3/PublicHolidays/{Year}/{CountryCode}
Example: https://date.nager.at/api/v3/PublicHolidays/2026/US

What it provides:
Public holidays for 100+ countries as clean JSON. Each record has date, local-language name, English name, country code, whether it's national or regional, and a type field (Public, Bank, School, Authorities, Optional, Observance). No rate limits, CORS enabled, no API key required.

How it could be useful for Canvas Daily:
My digest tells me what's due, but not what space I have to do it. An assignment due Tuesday hits differently when Monday is a federal holiday and my kid's school is closed. Nager.Date lets the digest enrich each due date with context — "Due Tue, but Mon is MLK Day, so effectively only the weekend." Same logic in reverse for school breaks: surfacing "school is closed Wed-Fri this week" alongside my kid's assignments would catch the gotcha where teachers post work that's technically due during a break.

Issues / verification:
None for the basic use case. CORS is supported, so the call works directly from browser JS — no proxy needed. One older secondary source claimed CORS wasn't supported, but the official Nager.Date docs confirm it is. Lesson: verify against the actual docs, not the AI summary or the third-party listing. Tested the endpoint directly and got back a clean JSON array of 2026 US holidays.

`},{q:`Did the call work? What issues came up?`,a:`Code I ran (paste or describe):

fetch('https://date.nager.at/api/v3/PublicHolidays/2026/US')
  .then(response => response.json())
  .then(holidays => {
    console.log(\`Found \${holidays.length} US holidays in 2026:\`);
    holidays.forEach(h => console.log(\`\${h.date} — \${h.name}\`));
  })
  .catch(err => console.error('Fetch failed:', err));

Did it work?:

Yes! I got back a JSON array with 11 US holidays for 2026, including New Year's Day, MLK Day, Presidents' Day, Memorial Day, Independence Day, Labor Day, Columbus Day, Veterans Day, Thanksgiving, and Christmas.

Issues (API key required? CORS? confusing docs? rate limits?):

None. The API is open and straightforward to use. CORS is supported, so I could call it directly from the browser without needing a proxy. The documentation is clear and the endpoint worked as expected on the first try. No rate limits or authentication requirements to worry about for this use case.
`}]},{heading:`Peer Activity — Restaurant Analogy`,description:`2 minutes to explain APIs as a restaurant. Customer, waiter, kitchen, order, JSON.`,qa:[{q:`The restaurant analogy in my own words`,a:`Who is the customer?: The customer is the person who wants to eat at the restaurant. They are the one who makes a request for food and expects to receive a meal in return. In the context of APIs, the customer can be thought of as the client or user who is making a request to the server for data or services.

Who is the waiter?: The waiter is the intermediary between the customer and the kitchen. They take the customer's order, communicate it to the kitchen, and then bring the food back to the customer. In the context of APIs, the waiter can be thought of as the API itself, which receives requests from clients, processes them, and returns responses.

Who is the kitchen?: The kitchen is where the food is prepared. It takes the customer's order, cooks the meal, and then sends it back to the waiter to be delivered to the customer. In the context of APIs, the kitchen can be thought of as the server or backend system that processes requests, performs operations, and generates responses based on the client's request.

What happens when you "order" something (make a request)?: When you order something at a restaurant, you communicate your request to the waiter, who then relays it to the kitchen. The kitchen prepares the food according to your order and sends it back to the waiter, who delivers it to you. In the context of APIs, when you make a request, you send it to the API (the waiter), which processes the request and interacts with the server (the kitchen) to retrieve or manipulate data. The server then sends a response back to the API, which delivers it to you.

What does a 200 mean — in restaurant terms?: A 200 status code in restaurant terms would mean that your order was successfully received, understood, and processed by the kitchen. It indicates that everything went smoothly and you can expect to receive your meal as requested.

What does a 404 mean — in restaurant terms?: A 404 status code in restaurant terms would mean that the item you ordered is not available on the menu. The kitchen cannot find the dish you requested, so they cannot prepare it for you. It indicates that the resource you are trying to access does not exist.

Where does JSON fit in?: JSON (JavaScript Object Notation) is like the format in which the kitchen sends your meal back to the waiter. It's a structured way of representing data that can be easily understood and processed by both the kitchen and the waiter. In the context of APIs, JSON is often used as the format for responses from the server to the client, allowing for easy parsing and manipulation of data on the client side.`},{q:`Partner's follow-up question and my answer`,a:`Partner's follow-up question: If the waiter (API) is the middleman, what happens if the waiter forgets the order or brings back the wrong dish? How does that relate to error handling in APIs?

My answer: If the waiter forgets the order or brings back the wrong dish, it would be similar to an error occurring in an API. In this case, the waiter might return an error message to the customer, such as 'Sorry, we don't have that dish' (which could be a 404 Not Found error) or 'Sorry, there was a problem with your order' (which could be a 500 Internal Server Error). Just like in a restaurant, where the waiter needs to communicate any issues with the order to the customer, APIs need to provide clear error messages and status codes to help clients understand what went wrong and how to fix it.`},{q:`Saying it out loud surfaced what? What part of APIs do I still want to nail down?`,a:`Saying it out loud surfaced the importance of clear communication between the different components of an API. It highlighted how the customer, waiter, and kitchen all need to work together seamlessly to ensure a good experience. In terms of APIs, this means that the client, API, and server need to be well-designed and properly integrated to provide a smooth user experience.

The part of APIs that I still want to nail down is error handling and how to design APIs that can gracefully handle unexpected situations. I want to learn more about best practices for returning error messages, how to use status codes effectively, and how to ensure that clients can understand and respond to errors in a way that improves the overall user experience. Additionally, I want to explore more about API security and how to protect sensitive data while still providing useful functionality.`}]}]},{number:16,label:`Day 3`,title:`Week 4, Day 3 — Database Schema Design`,subtitle:`Tables, primary keys, foreign keys. Defend your design out loud.`,color:`#0ea5e9`,sections:[{heading:`Exercise 1 — Read a Database Diagram`,description:`Here's the schema for a simple blog app. Answer the questions below.`,qa:[{q:`The schema (reference)`,a:`USERS                    POSTS                    COMMENTS
-----------              -----------              -----------
id (PK)                  id (PK)                  id (PK)
name                     title                    body
email                    body                     created_at
created_at               published_at             post_id (FK -> posts.id)
                         user_id (FK -> users.id) user_id (FK -> users.id)

PK = Primary Key, FK = Foreign Key`},{q:`How many tables are in this database?`,a:`3 tables - users, posts, comments`},{q:`What is the primary key of the posts table?`,a:`id is the primary key of the posts table`},{q:`How are posts connected to users? Which column creates that connection?`,a:`Through the user_id column in the posts table, which is a foreign key that references the id column in the users table. This means each post is associated with a specific user who created it.`},{q:`How are comments connected to posts? Which column creates that connection?`,a:`Through the post_id column in the comments table, which is a foreign key that references the id column in the posts table. This means each comment is associated with a specific post.`},{q:`If user #2 (Student B) writes a new post titled "My Database Journey", what data gets stored in the posts table? List each column and its value.`,a:`id: auto-generated unique identifier (say 1 if its the first post)

title: "My Database Journey"

body: whatever content Student B writes for the post

published_at: current timestamp when the post is published

user_id: 2 (Student B's user id, linking this post to them)`},{q:`If user #1 (Student A) writes a comment on that post saying "Great post!", what data gets stored in the comments table? List each column and its value.`,a:`id: auto-generated unique identifier for the comment (e.g., 201)

body: "Great post!"

created_at: current timestamp when the comment is created

post_id: 1 (the id of the post being commented on, which is the post created by Student B)

user_id: 1 (Student A's id) `},{q:`Can a post have multiple comments? How do you know?`,a:`Yes, a post can have multiple comments. We know this because the comments table has a post_id foreign key that references the posts table. This means that multiple rows in the comments table can have the same post_id value, allowing for multiple comments to be associated with a single post.`},{q:`Can a comment belong to multiple posts? How do you know?`,a:`No. Each comment can only belong to one post because the comments table has a single post_id foreign key that references the posts table. This means that each row in the comments table can only have one post_id value, so a comment cannot be associated with multiple posts.`}]},{heading:`Exercise 2 — Design Your App's Tables`,description:`Time to design the data model for YOUR Phase 2 app.`,qa:[{q:`Map user stories to data — what each one implies`,a:`Look at the user stories you wrote on Day 1. Each user story implies data that needs to be stored.

User story 1: As a returning student parent, I want to set up the digest with my Canvas observer token AND my own Canvas student token so the script knows what to pull for both of us.
Data needed: A place to store multiple Canvas tokens per user, each tagged with a role ('observer' or 'student') and the Canvas URL they belong to. Implies a user account AND a separate table for tokens (since one user has many).

User story 2: As a returning student parent, I want one daily email summarizing what's missing and what's due for both of us so I know my morning triage before I even open my laptop.
Data needed: Assignment records pulled from Canvas (course name, title, due date, status, link), tied back to which integration they came from so the email knows whose section to render them under. Also a record of each sent digest so I have history.

User story 3: As a returning student parent, I want new items since the last digest flagged with a "New" badge so I notice when a teacher just posted something on either side.
Data needed: A first_seen_at timestamp on each assignment, plus a sent_at on each digest. The "new" diff becomes a SQL comparison instead of a JSON state file (which is what canvas_digest.py uses today).`},{q:`My table designs (at least 2 tables with a relationship between them)`,a:`Template to follow:

TABLE_NAME
-----------
id (PK)
column_1
column_2
column_3
other_table_id (FK -> other_table.id)
created_at


My tables:

users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at


Relationships:
  users 1-->N integrations  (one Diana, two Canvas tokens — observer + student)
  integrations 1-->N assignments  (each Canvas account contributes its own work)
  users 1-->N digests  (history of every email sent)

Design notes:
  1. The JSON state file (~/.canvas_digest_state.json) goes away. The diff becomes a SQL query against assignments.first_seen_at vs the last digest's sent_at.
  2. canvas_assignment_id is separate from id. id is my auto-increment PK; canvas_assignment_id is what I dedupe on across daily pulls. Unique constraint on (integration_id, canvas_assignment_id) prevents duplicates.
  3. role on integrations is the key dual-role lever. One user, two integrations, different roles. The whole Parent + Student Edition pitch lives in that one column.
  4. My daughter does NOT get a users row. She's a Canvas user, not a user of MY app. Only I log in. Her data flows through integrations.role = 'observer'.`},{q:`Sanity check — does the schema support every user story?`,a:`For each user story, ask: "Where would this data live in my schema? Can I store everything I need?"

Story 1 — Set up observer + student tokens:
  Lives in: integrations (one row per token, role column distinguishes observer from student).
  Supported: yes.

Story 2 — Daily email summarizing both sides:
  Lives in: assignments joined through integrations to users. Render path groups by integrations.role.
  Supported: yes.

Story 3 — Separate "Your stuff" / "Kid's stuff" sections:
  Lives in: integrations.role drives the section grouping at render time.
  Supported: yes.

Story 4 — "New" badges since last digest:
  Lives in: assignments.first_seen_at compared against the previous digests.sent_at for this user.
  Supported: yes — and cleaner than the current JSON state file.

Story 5 — "Soon" badges for due-in-24h:
  Lives in: assignments.due_at compared against NOW() + interval '24 hours' at render time.
  Supported: yes.

Story 6 — Subject line summarizing both sides:
  Lives in: counts per integrations.role at digest generation, written to digests.subject.
  Supported: yes.

Story 7 — --dry-run preview:
  Lives in: digests.delivery_status = 'dry_run', skip the SMTP send step.
  Supported: yes.

Every story has a home. Nothing forces me to invent a table I didn't already plan for.`}]},{heading:`Peer Activity — Schema Swap`,description:`Pair up. Swap schemas. Review your partner's design against their user stories.`,qa:[{q:`My feedback to my partner (2-3 specific pieces)`,a:`For each user story, ask:
- "If I wanted to do [this user story], does your schema support that? Where would that data live?"
- "Is there any data that doesn't have a home?"
- "Are there columns that seem redundant or unnecessary?"

Feedback 1: 

Feedback 2: 

Feedback 3 (optional): `},{q:`Feedback I got back from my partner`,a:``}]},{heading:`Exercise 3 — AI-Assisted Schema Review`,description:`Use AI to review your work.`,qa:[{q:`AI's response — what came back from the prompt`,a:`Prompt used:

Prompt used:

Here's my database schema for Canvas Daily takes one Canvas observer token (your kid) and one Canvas student token (you) and emails you a single morning digest of what's missing and what's due across both — so you can triage two academic calendars in 30 seconds instead of two logins.

Template to follow:

TABLE_NAME
-----------
id (PK)
column_1
column_2
column_3
other_table_id (FK -> other_table.id)
created_at


My tables:

users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at


My main user stories are:
User story 1: As a returning student parent, I want to set up the digest with my Canvas observer token AND my own Canvas student token so the script knows what to pull for both of us.
Data needed: A place to store multiple Canvas tokens per user, each tagged with a role ('observer' or 'student') and the Canvas URL they belong to. Implies a user account AND a separate table for tokens (since one user has many).

User story 2: As a returning student parent, I want one daily email summarizing what's missing and what's due for both of us so I know my morning triage before I even open my laptop.
Data needed: Assignment records pulled from Canvas (course name, title, due date, status, link), tied back to which integration they came from so the email knows whose section to render them under. Also a record of each sent digest so I have history.

User story 3: As a returning student parent, I want new items since the last digest flagged with a "New" badge so I notice when a teacher just posted something on either side.
Data needed: A first_seen_at timestamp on each assignment, plus a sent_at on each digest. The "new" diff becomes a SQL comparison instead of a JSON state file (which is what canvas_digest.py uses today). 

Questions:
1. What's missing from my schema that I'd need to support these user stories?
2. What would break if this app had 1,000 users?
3. Suggest 2-3 improvements with explanations.
 `},{q:`AI's response — gaps it found and scaling issues`,a:`My schema is a strong MVP start. It already supports the core idea: one user, multiple Canvas integrations, pulled assignment records, and saved digest history. But there are gaps.

1. WHAT'S MISSING FROM THE SCHEMA

A. Stronger dedupe rules.
Right now I dedupe by canvas_assignment_id alone. Should dedupe by more than just assignment ID — add canvas_course_id and enforce:
  UNIQUE(integration_id, canvas_course_id, canvas_assignment_id)
Why: two Canvas accounts, schools, or courses could theoretically have overlapping assignment IDs. The safer identity is the assignment inside a course, inside an integration.

B. Course information as its own table.
Right now course_name lives directly on assignments. Works for MVP, gets messy later. Better:

  courses
  -----------
  id (PK)
  integration_id (FK -> integrations.id)
  canvas_course_id
  name
  term_name
  is_active
  created_at

Then assignments points to the course via course_id (FK -> courses.id). Courses have their own Canvas IDs, names, enrollment state, terms, and active/inactive status. Also makes digest grouping cleaner.

C. Display info for the digest.
Since the digest combines both accounts, the email needs clear labels like "Diana — Yavapai Canvas" and "Daughter — High School Canvas". The label column on integrations helps, but eventually want:
  display_name        — "Diana", "Ava", "My daughter"
  institution_name
The digest needs to render under human-friendly section headers, not "observer" and "student".

D. Assignment status may need more detail.
Right now status is 'missing' or 'upcoming'. Canvas assignments can have more states: submitted, missing, late, excused, graded, upcoming, no_due_date, locked. "Missing" is tricky because it often depends on submission data, not just assignment data.

Long-term, split submission status into its own table:

  assignment_statuses
  -----------
  id (PK)
  assignment_id (FK -> assignments.id)
  status              — missing, upcoming, submitted, late, excused
  submitted_at
  graded_at
  score
  points_possible
  checked_at
  created_at

For MVP, one assignments table is fine.

E. Digest history should store the items included.
The digests table stores counts and the email body, but doesn't store which assignments were in each digest except inside the rendered HTML. Adding:

  digest_items
  -----------
  id (PK)
  digest_id (FK -> digests.id)
  assignment_id (FK -> assignments.id)
  integration_id (FK -> integrations.id)
  section_label
  status_at_send
  is_new
  due_at
  created_at

Gives a real audit trail. I can answer "Was this assignment in yesterday's email?" without parsing old HTML.

F. Sync/error tracking.
last_synced_at exists on integrations, but there's no place for failures. Add:
  sync_status              — active, failed, disabled
  last_sync_error
  last_sync_error_at
  token_last_validated_at

Or a separate sync_runs table:

  sync_runs
  -----------
  id (PK)
  integration_id (FK -> integrations.id)
  started_at
  finished_at
  status              — success, failed, partial
  assignments_found
  error_message
  created_at

If Canvas rejects a token, Canvas is down, or the API changes, I need to know what failed and which user was affected.

2. WHAT WOULD BREAK AT 1,000 USERS

A. The morning send could overload the app. If many users pick 7:00 AM, 1,000 users x 2 integrations each = 2,000 Canvas sync jobs every morning. Rate limits, slow digests, failed emails. Need a job queue, not one big script.

B. Canvas API failures become normal. At small scale, one failed token is annoying. At 1,000 users, expired tokens, wrong URLs, school outages, and rate limits are routine. Without sync_runs or error tracking, I don't know who got a bad digest, who got no digest, or why.

C. Duplicate assignment records could pile up. Without database-level unique constraints, every re-pull risks duplicates. Need UNIQUE(integration_id, canvas_course_id, canvas_assignment_id).

D. Email delivery could fail or get throttled. At 1,000 users, email provider limits, bounces, retries, and unsubscribes become real. delivery_status helps but a real email job system is needed.

E. The "New" badge could become inaccurate. Current logic: first_seen_at > last digest sent_at. But only valid if the last digest actually sent. Should compare against the user's last SUCCESSFUL digest (delivery_status = 'sent'). Otherwise a failed digest causes items to be marked old even though the user never saw them.

3. SUGGESTED IMPROVEMENTS

Improvement 1 — Add courses + stronger assignment identity.
courses table (see section 1B), update assignments to include course_id FK, add UNIQUE(integration_id, canvas_course_id, canvas_assignment_id). Makes syncing safer and prevents duplicate rows.

Improvement 2 — Add sync_runs tracking (see section 1F).
Critical at scale for debugging when Canvas tokens fail, Canvas is down, or a digest looks wrong.

Improvement 3 — Add digest_items (see section 1E).
Real record of what was sent in each digest. Makes the "New" badge trustworthy because I can verify whether an item already appeared in a successful digest.

OVERALL JUDGMENT

The current schema is good for a first MVP. Biggest gaps:
  - courses table
  - digest_items table
  - sync_runs table
  - unique constraints
  - better status/error handling

Would probably work for a small number of users. At 1,000 users the weak points would be Canvas API syncing, email scheduling, duplicate records, failed tokens, and inaccurate digest history.`},{q:`What I'm keeping, modifying, or rejecting from the AI's response`,a:`Quick legend: KEEP = solid catch, do it. MODIFY = real point but the fix was over-engineered. REJECT = noise or premature.

1A. UNIQUE constraint on assignments — MODIFY
Real catch. Without it, every re-pull risks duplicates. But the AI's three-column constraint UNIQUE(integration_id, canvas_course_id, canvas_assignment_id) is overkill — Canvas assignment IDs are unique within a Canvas instance, so UNIQUE(integration_id, canvas_assignment_id) is sufficient. Adding course_id to the constraint doesn't buy safety, just complexity.

1B. Add a courses table — MODIFY (defer)
Sound design, premature for MVP. I have ~4 Yavapai courses and maybe 6-8 on my daughter's side. Denormalized course_name on assignments isn't going to hurt at that scale. The day I want per-course features (mute this course, custom labels, term filtering) is the day to add it. Don't add it now to chase normalization purity.

1C. Add display_name + institution_name to integrations — REJECT
I already have label. "My Yavapai account" and "Daughter's school" cover the digest section headers fine. Splitting one column into three is busywork.

1D. Separate assignment_statuses table — REJECT
Heavy. Canvas distinguishes assignment data from submission data, sure — but I only care about "missing or not" right now. The day I want to show grades and submission timestamps is the day to split it. For MVP, my single status column does the job.

1E. Add digest_items table — REJECT (for now)
I already store the full HTML body in digests. If I ever need to ask "was X in yesterday's email," I can grep the HTML. The digest_items table only earns its keep when I want structured queries across history (e.g., "show me assignments that appeared in 3+ digests and are still missing" — which IS a great avoidance-detection feature, but it's a v2 idea).

1F. Sync error tracking — KEEP (minimal version)
This one matters. Right now if cron fails or Canvas rejects my token, I get nothing — no email, no error, no signal. But the full sync_runs table is overkill. Just add two columns to integrations:
  last_sync_status         — 'success' or 'failed'
  last_sync_error          — the error message if failed
That's it. Can revisit a full sync_runs table if/when I go multi-user.

Scaling section (2A-2E) — MOSTLY REJECT, ONE GEM
The whole "what breaks at 1,000 users" framing doesn't apply. I'm building this for myself first. Don't add a job queue, retry logic, bounce handling, or unsubscribe flows for users I don't have.

The one keeper is 2E: the "New" badge should compare against the last SUCCESSFUL digest, not just the last digest. If a send fails, the next morning's email shouldn't suddenly mark everything as "old" because it thinks the user already saw it. Tiny fix, real bug.

NET SCHEMA CHANGES I'M ACTUALLY MAKING:

1. Add UNIQUE(integration_id, canvas_assignment_id) constraint on assignments
2. Add last_sync_status and last_sync_error columns to integrations
3. Adjust the "New" badge logic to compare against the last digest where delivery_status = 'sent'

Three changes, none structural. Everything else the AI suggested is either premature, redundant with what I already have, or scaling theater for a userbase that doesn't exist yet.`},{q:`Updated schema after stress-testing — what I'm shipping`,a:`Three changes from the AI critique: dedupe constraint on assignments, sync status tracking on integrations, and a logic fix for the "New" badge. Everything else stays as-is.

users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
last_sync_status      -- NEW: 'success' or 'failed'
last_sync_error       -- NEW: error message from last failed sync
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

  Constraint: UNIQUE(integration_id, canvas_assignment_id)
  -- prevents duplicate rows when the same assignment gets re-pulled on subsequent syncs

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at


Relationships (unchanged):
  users 1-->N integrations  (one Diana, two Canvas tokens — observer + student)
  integrations 1-->N assignments  (each Canvas account contributes its own work)
  users 1-->N digests  (history of every email sent)


Three things that changed from v1:

1. UNIQUE(integration_id, canvas_assignment_id) on assignments.
   Prevents duplicate rows when daily syncs re-encounter the same assignment. Canvas assignment IDs are unique within a Canvas instance, so scoping by integration is enough — no need to drag course_id into the constraint.

2. last_sync_status and last_sync_error on integrations.
   Right now if a Canvas token expires or the API rejects me, I get silence — no email, no error, no signal. These two columns let the next digest tell me "your Yavapai integration failed yesterday, here's why" instead of pretending everything's fine.

3. "New" badge logic now compares against the last SUCCESSFUL digest.
   Pure logic change, no schema impact. Old logic: first_seen_at > previous digests.sent_at. New logic: first_seen_at > (most recent digest WHERE delivery_status = 'sent'). If a send fails, the next morning's email won't incorrectly mark everything as old because it thinks I already saw it.
`}]},{heading:`Exercise 4 — Peer Review Round 2`,description:`Find a DIFFERENT partner than before. Show them your updated schema. Ask tougher questions this time.`,qa:[{q:`Tougher questions and my partner's reactions`,a:`"If I wanted to search for [specific thing], which table and column would I look in?"


"If I wanted to show a list of [specific thing] sorted by date, can my schema do that?"


"If a user does [specific action from user story], what rows get created or changed?"
`},{q:`What changed in my schema after this round?`,a:``}]},{heading:`Exercise 5 — Edge Cases`,description:`Now think about what happens when things go wrong.`,qa:[{q:`Scenario 1 — A user deletes their account`,a:`If user #3 gets deleted from the users table, what happens to:
- Their posts?
- Their comments?
- Any other data connected to them?

Design options:
- Cascading delete — delete everything connected to them. Clean but destructive.
- Soft delete — add an is_deleted column, set to true. Data stays, app treats it as gone.
- Orphan the data — delete the user but keep their posts. Set user_id to null or a "Deleted User" placeholder.

My decision: Cascading delete (ON DELETE CASCADE on the FKs).

Walking the chain in MY schema:
  users deleted -> integrations deleted -> assignments deleted
  users deleted -> digests deleted

Why cascade and not soft-delete or orphan:

1. Canvas tokens are stored in integrations.canvas_token. Those are real credentials with the same access as a logged-in observer or student. If a user deletes their account, those tokens MUST go — not be flagged is_deleted, GONE. Soft delete on credential data is a security smell.

2. Everything downstream (assignments, digests) is meaningless without the integration. There's no shared social data to preserve — no posts other people commented on, no community resources someone else might still need. Every row exists in service of one user.

3. Orphaning makes zero sense here. A "Deleted User" placeholder for a Canvas integration is nonsensical — the token belonged to a person, and if they're gone, the integration is gone.

What I'd actually write:
  ON DELETE CASCADE on integrations.user_id -> users.id
  ON DELETE CASCADE on assignments.integration_id -> integrations.id
  ON DELETE CASCADE on digests.user_id -> users.id

Caveat for later: if I ever go multi-user and people share digests or compare progress with peers, this calculus changes. For solo-use MVP, cascade is correct.`},{q:`Scenario 2 — Duplicate data`,a:`What if two users sign up with the same email? Should your database allow that? How would you prevent it? (Hint: this is called a "unique constraint.")

My decision: No, two users cannot share an email. Email IS the login identity.

Prevention:
  UNIQUE constraint on users.email at the database level
  Plus app-level normalization (lowercase + trim) before INSERT, so "Diana@gmail.com " and "diana@gmail.com" can't both sneak in as different rows

Why DB-level and not just app-level: app code can have bugs, race conditions during concurrent signups, or get bypassed by a direct SQL script. The DB is the last line of defense. Belt AND suspenders.

While I'm thinking about duplicates — other places in my schema where uniqueness matters:

  assignments — already covered:
    UNIQUE(integration_id, canvas_assignment_id)
    Prevents the same Canvas assignment from being inserted twice on a re-pull.

  integrations — should probably add:
    UNIQUE(user_id, canvas_url, canvas_user_id)
    Prevents the same person from accidentally adding the same Canvas account twice (e.g., pasting the same observer token in twice and ending up with duplicate sections in their digest).

So three unique constraints total across the schema:
  users.email
  assignments(integration_id, canvas_assignment_id)
  integrations(user_id, canvas_url, canvas_user_id)`},{q:`Scenario 3 — Required vs. optional fields`,a:`Which columns in your tables MUST have a value? Which ones are OK to leave blank?

Required (NOT NULL):

users:
  id, email, password_hash, created_at
  (timezone, delivery_time, and lookahead_days have defaults — required at the DB level via DEFAULT values, but the user never has to supply them)

integrations:
  id, user_id, role, canvas_url, canvas_token, canvas_user_id, created_at
  (every one of these is needed to actually hit the Canvas API — without canvas_url + canvas_token + canvas_user_id, the integration is useless)

assignments:
  id, integration_id, canvas_assignment_id, title, status, html_url, first_seen_at, last_seen_at, created_at
  (course_name is also required — Canvas assignments always belong to a course)

digests:
  id, user_id, missing_count, upcoming_count, soon_count, subject, html_body, text_body, delivery_status, created_at


Optional (nullable):

integrations:
  label — derivable from canvas_url if not provided (e.g., "yc.instructure.com" -> "Yavapai")
  last_synced_at — null until the first sync completes
  last_sync_status — null until the first sync runs
  last_sync_error — null when the last sync succeeded (which should be most of the time)

assignments:
  due_at — Canvas REALLY DOES return assignments with no due date (ungraded discussion posts, optional readings, "by end of semester" items). This MUST be nullable. Treating it as required would crash my sync on the first weird assignment.

digests:
  sent_at — null when delivery_status = 'dry_run'. The digest was generated and rendered, but never actually sent, so there's no honest "sent_at" value. Forcing a timestamp here would lie about what happened.


Design lesson I'm internalizing:
"Nullable" isn't laziness — it's honest. due_at being null means "Canvas itself doesn't know when this is due." sent_at being null on a dry-run means "this digest exists but was never sent." Forcing NOT NULL on these would force me to make up values, and made-up values are bugs waiting to happen.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Pair up in breakout rooms. 2 minutes to walk your partner through your schema — specifically pointing to a foreign key.`,qa:[{q:`My 2-minute walkthrough — pointing to a specific foreign key`,a:`Point to a foreign key in your schema. Which column is it?


Which two tables does it connect?


Why is that connection necessary — what user story would break without it?
`},{q:`Partner's follow-up question and my answer`,a:`Examples your partner might ask:
- "What if a user gets deleted — what happens to the rows that point to them?"
- "Why isn't this just one big table?"

`},{q:`Saying it out loud surfaced what? What part of schema design do I still want to nail down?`,a:``}]}]},{number:17,label:`Day 4`,title:`Week 4, Day 4 — Talking to Databases with SQL`,subtitle:`SELECT, WHERE, JOIN, INSERT/UPDATE/DELETE. Read your own queries aloud.`,color:`#3b82f6`,sections:[{heading:`Setup — W3Schools SQL Playground`,description:`All exercises use the W3Schools SQL playground at https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all. This playground has these tables pre-loaded: Customers, Orders, Products, OrderDetails, Employees, Categories, Shippers, Suppliers.`,qa:[{q:`Playground URL and pre-loaded tables (reference)`,a:`Playground: https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_all

Pre-loaded tables:
- Customers
- Orders
- Products
- OrderDetails
- Employees
- Categories
- Shippers
- Suppliers`}]},{heading:`Exercise 1 — Basic SELECT`,description:`Write and run these queries in the SQL playground.`,qa:[{q:`Show all customers — SELECT * FROM Customers;`,a:`Query:
SELECT * FROM Customers;

How many rows came back?: 91`},{q:`Show only customer names and cities — SELECT CustomerName, City FROM Customers;`,a:`Query:
SELECT CustomerName, City FROM Customers;

Notes: - SELECT specifies which columns to show. * means all columns, but you can list specific columns separated by commas.`},{q:`Show all products. Write it yourself.`,a:`SELECT * FROM Products;`},{q:`Show only the product name and price for all products. Write it yourself.`,a:`SELECT ProductName, Price FROM Products;`},{q:`Show all employees. Write it yourself.`,a:`SELECT * FROM Employees;`}]},{heading:`Exercise 2 — Filtering with WHERE`,description:`Filter rows with WHERE, combine conditions with AND/OR, sort with ORDER BY, cap results with LIMIT.`,qa:[{q:`Show customers from Germany — SELECT * FROM Customers WHERE Country = 'Germany';`,a:`Query:
SELECT * FROM Customers WHERE Country = 'Germany';

How many German customers are there?: 11`},{q:`Show products that cost more than $40. Write it yourself.`,a:`My query: 
SELECT * FROM Products WHERE Price > 40;


How many products cost more than $40?: 12`},{q:`Show customers from London. Write it yourself.`,a:`SELECT * FROM Customers WHERE City = 'London';`},{q:`Show products in category 1 that cost less than $20. (Hint: use AND)`,a:`SELECT * FROM Products WHERE CategoryID = 1 AND Price < 20;`},{q:`Show customers from Germany OR France.`,a:`SELECT * FROM Customers WHERE Country = 'Germany' OR Country = 'France';`},{q:`Show products sorted by price, cheapest first. (Hint: use ORDER BY)`,a:`SELECT * FROM Products ORDER BY Price ASC;`},{q:`Show the 5 most expensive products. (Hint: ORDER BY price DESC, then add LIMIT 5 at the end)`,a:`SELECT TOP 5 *
FROM Products
ORDER BY Price DESC;`}]},{heading:`Exercise 3 — JOIN`,description:`Now you'll combine tables. This is the skill that makes databases powerful.`,qa:[{q:`Show each order with the customer's name — orders + customers joined on CustomerID`,a:`Query:
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID;

Result notes: We now have a table of OrderID, CustomerName, and OrderDate. The JOIN combined data from Orders and Customers based on the matching CustomerID in both tables.`},{q:`Show each product with its category name. Write the JOIN yourself.`,a:`Template:
SELECT Products.ProductName, Categories.CategoryName
FROM Products
JOIN Categories ON _____;

My query:
SELECT Products.ProductName, Categories.CategoryName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID;`},{q:`Show each order with the customer name, sorted by date (newest first). Modify query #1 to add ORDER BY Orders.OrderDate DESC at the end.`,a:`SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
ORDER BY Orders.OrderDate DESC;`},{q:`Challenge — Show each product with its category name AND its supplier name. (TWO JOINs)`,a:`Query:
SELECT Products.ProductName, Categories.CategoryName, Suppliers.SupplierName
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID
JOIN Suppliers ON Products.SupplierID = Suppliers.SupplierID;

Read this carefully before running it. Can you explain what each JOIN line does?

JOIN 1 explanation: This JOIN combines Products with Categories. It looks at the CategoryID in Products and finds the matching CategoryID in Categories to bring in the CategoryName.

JOIN 2 explanation: This JOIN combines the result of the first JOIN (Products + Categories) with Suppliers. It looks at the SupplierID in Products and finds the matching SupplierID in Suppliers to bring in the SupplierName.`}]},{heading:`Exercise 4 — Write Queries for YOUR App`,description:`Grab the schema you designed yesterday. Now write the SQL queries your app would actually need.`,qa:[{q:`My 5 queries — what a user of my app would actually need`,a:`Think about what a user of your app would do and what data the app would need to show them.

Query 1 — The morning digest: all missing assignments across both integrations: 

SELECT 
  i.role,
  i.label,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'missing'
ORDER BY i.role, a.due_at;

What it does: the core query that powers the daily email. JOINs assignments to integrations so each row knows whether it came from my Yavapai account or my daughter's school. Ordering by role first means the digest groups all "student" items together, then all "observer" items — clean section breaks.

User stories it supports:
  - Story 2 (one daily email summarizing both sides)
  - Story 3 (separate "Your stuff" / "Kid's stuff" — the role column drives the grouping)

Query 2 — Upcoming this week: 

SELECT 
  i.label AS section,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'upcoming'
  AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'
ORDER BY a.due_at;

What it does: powers the "Due this week" section of the digest. Same JOIN pattern as query 1, but filters on status = 'upcoming' and a 7-day due-date window. ORDER BY due_at means earliest-due first, regardless of whose work it is — what matters this week is what's due Monday, not who owns it.

User story it supports:
  - Story 2 (one daily email of what's missing and what's due)


Query 3 — The "New" badge filter (with the last-successful-digest fix): 

SELECT a.title, a.course_name, a.due_at, i.label
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.first_seen_at > (
    SELECT MAX(sent_at)
    FROM digests
    WHERE user_id = 1 AND delivery_status = 'sent'
  );

What it does: finds assignments my app first saw AFTER the most recent SUCCESSFUL digest. These are the rows that get the red "New" badge in the email. The subquery is what makes this trustworthy — if a digest failed to send yesterday, the comparison falls back to the last actually-sent digest, so I don't accidentally mark items as "old" that the user never saw.

User story it supports:
  - Story 4 (New badges since last digest)

This is also the query that directly cashes in on yesterday's edge-case work — the delivery_status = 'sent' filter is the bug fix from the scaling section.


Query 4 — List my Canvas integrations with current sync health: 

SELECT id, role, label, canvas_url, last_synced_at, last_sync_status, last_sync_error
FROM integrations
WHERE user_id = 1;

What it does: feeds a settings/dashboard view of "what Canvas accounts have I connected, and are they working?" Surfaces last_sync_error so I can tell when a token has broken without having to dig through logs.

User story it supports:
  - Story 1 (set up observer + student tokens — this is the management view of those tokens)

Query 5 — UPSERT on sync: insert new assignments OR refresh existing ones: 

INSERT INTO assignments 
  (integration_id, canvas_assignment_id, course_name, title, due_at, status, html_url, first_seen_at, last_seen_at, created_at)
VALUES 
  (2, 901234, 'ENG 102', 'Literary Analysis Paper', '2026-05-25 23:59:00', 'upcoming', 'https://yc.instructure.com/courses/1/assignments/901234', NOW(), NOW(), NOW())
ON CONFLICT (integration_id, canvas_assignment_id)
DO UPDATE SET 
  status = EXCLUDED.status,
  due_at = EXCLUDED.due_at,
  last_seen_at = NOW();

What it does: the workhorse of the daily Canvas sync. For every assignment pulled from Canvas, try to insert it. If a row already exists with the same (integration_id, canvas_assignment_id) — the UNIQUE constraint I added on Day 3 — update it instead.

Important detail: first_seen_at is set on insert and NEVER touched on update. last_seen_at refreshes every sync. That timing distinction is exactly what query 3's "New" filter depends on — if I updated first_seen_at on every sync, every assignment would always look "new" and the badge would be meaningless.

User stories it supports:
  - Story 2 (data has to land in the database before the digest can read it)
  - Story 4 (preserves the first_seen_at timestamp that the "New" badge needs)
`},{q:`AI review — syntax errors and missing queries`,a:`Prompt used:

Here's my database schema:
users
-----------
id (PK)
email
password_hash
delivery_time         -- when to send the daily digest (HH:MM)
lookahead_days        -- default 7
timezone
created_at

integrations
-----------
id (PK)
user_id (FK -> users.id)
role                  -- 'observer' or 'student'
label                 -- "My Yavapai account", "Daughter's school"
canvas_url
canvas_token          -- encrypted at rest
canvas_user_id        -- the Canvas-side user ID this token represents
last_synced_at
last_sync_status      -- NEW: 'success' or 'failed'
last_sync_error       -- NEW: error message from last failed sync
created_at

assignments
-----------
id (PK)
integration_id (FK -> integrations.id)
canvas_assignment_id  -- Canvas-side ID, used for dedupe on re-pull
course_name
title
due_at
status                -- 'missing' or 'upcoming'
html_url
first_seen_at         -- drives the "New" badge
last_seen_at          -- drives stale cleanup
created_at

  Constraint: UNIQUE(integration_id, canvas_assignment_id)
  -- prevents duplicate rows when the same assignment gets re-pulled on subsequent syncs

digests
-----------
id (PK)
user_id (FK -> users.id)
sent_at
missing_count
upcoming_count
soon_count
subject
html_body
text_body
delivery_status       -- 'sent', 'failed', 'dry_run'
created_at 

Here are SQL queries my app would need:

SELECT 
  i.role,
  i.label,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'missing'
ORDER BY i.role, a.due_at;  

SELECT  
  i.label AS section,
  a.course_name,
  a.title,
  a.due_at,
  a.html_url
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.status = 'upcoming'
  AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'
ORDER BY a.due_at;                                                                                                                          

SELECT a.title, a.course_name, a.due_at, i.label 
FROM assignments a
JOIN integrations i ON a.integration_id = i.id
WHERE i.user_id = 1
  AND a.first_seen_at > (
    SELECT MAX(sent_at)
    FROM digests
    WHERE user_id = 1 AND delivery_status = 'sent'
  );                                                                                                                                                             

SELECT id, role, label, canvas_url, last_synced_at, last_sync_status, last_sync_error 
FROM integrations
WHERE user_id = 1;                                                                                                                         

INSERT INTO assignments  
  (integration_id, canvas_assignment_id, course_name, title, due_at, status, html_url, first_seen_at, last_seen_at, created_at)
VALUES 
  (2, 901234, 'ENG 102', 'Literary Analysis Paper', '2026-05-25 23:59:00', 'upcoming', 'https://yc.instructure.com/courses/1/assignments/901234', NOW(), NOW(), NOW())
ON CONFLICT (integration_id, canvas_assignment_id)
DO UPDATE SET 
  status = EXCLUDED.status,
  due_at = EXCLUDED.due_at,
  last_seen_at = NOW();   

Check my SQL syntax. Are there any errors? 

Are there queries I'm missing that a typical user would need?


AI's response: 

My SQL is mostly correct PostgreSQL syntax. The AI found a few logic issues, not major syntax errors.

1. MY QUERIES ARE VALID POSTGRESQL

Postgres-specific syntax I'm using that works correctly:
  NOW()
  INTERVAL '7 days'
  ON CONFLICT (...) DO UPDATE

So assuming my app uses PostgreSQL, the syntax is good.

The main thing I should change is this pattern:
  WHERE i.user_id = 1

That works for testing, but in the real app I should use a parameter:
  WHERE i.user_id = $1

So my backend can safely pass in the logged-in user's ID (and the database driver handles escaping, preventing SQL injection).


2. ONE REAL BUG: MY "NEW ASSIGNMENTS" QUERY

The query as written:

  SELECT a.title, a.course_name, a.due_at, i.label 
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = 1
    AND a.first_seen_at > (
      SELECT MAX(sent_at)
      FROM digests
      WHERE user_id = 1 AND delivery_status = 'sent'
    );

The issue: if the user has NEVER received a digest before, SELECT MAX(sent_at) returns NULL. And the comparison a.first_seen_at > NULL returns no rows. So on first run, the user would get zero "new" badges even though everything is new.

Fixed version with COALESCE fallback:

  SELECT 
    a.title,
    a.course_name,
    a.due_at,
    i.label
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = $1
    AND a.first_seen_at > COALESCE(
      (
        SELECT MAX(sent_at)
        FROM digests
        WHERE user_id = $1 
          AND delivery_status = 'sent'
      ),
      '-infinity'::timestamp
    );

If the columns use timestamptz instead of timestamp, use '-infinity'::timestamptz.

The '-infinity' value is a Postgres sentinel that's always less than any real timestamp, so on a brand-new account where MAX returns NULL, EVERYTHING gets flagged as new — which is exactly what I want.


3. MY UPCOMING QUERY WORKS, BUT SHOULD USE THE USER'S LOOKAHEAD SETTING

Currently hardcoded:
  AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '7 days'

But my users table already has a lookahead_days column. Better version:

  SELECT  
    i.label AS section,
    a.course_name,
    a.title,
    a.due_at,
    a.html_url
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  JOIN users u ON u.id = i.user_id
  WHERE i.user_id = $1
    AND a.status = 'upcoming'
    AND a.due_at BETWEEN NOW() AND NOW() + (u.lookahead_days * INTERVAL '1 day')
  ORDER BY a.due_at;

Now if I want a 14-day window someday and my partner wants a 7-day window, the query handles both — read the setting from the user row instead of hardcoding.


4. MY UPSERT QUERY IS GOOD, BUT SHOULD UPDATE MORE FIELDS

Current ON CONFLICT only updates status, due_at, and last_seen_at. If Canvas changes the assignment title, course name, or URL, my local row stays stale. Better:

  ON CONFLICT (integration_id, canvas_assignment_id)
  DO UPDATE SET 
    course_name = EXCLUDED.course_name,
    title = EXCLUDED.title,
    due_at = EXCLUDED.due_at,
    status = EXCLUDED.status,
    html_url = EXCLUDED.html_url,
    last_seen_at = NOW();

CRITICAL: do NOT update first_seen_at in the conflict clause. That original timestamp is what the "New" badge depends on — if I refresh it on every sync, everything always looks new and the badge becomes meaningless.


5. QUERIES I'M MISSING

5a. Insert a digest row after sending the email:

  INSERT INTO digests
    (user_id, sent_at, missing_count, upcoming_count, soon_count, subject, html_body, text_body, delivery_status, created_at)
  VALUES
    ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, NOW());

5b. Mark an integration as successfully synced:

  UPDATE integrations
  SET 
    last_synced_at = NOW(),
    last_sync_status = 'success',
    last_sync_error = NULL
  WHERE id = $1;

5c. Mark an integration as failed:

  UPDATE integrations
  SET 
    last_synced_at = NOW(),
    last_sync_status = 'failed',
    last_sync_error = $2
  WHERE id = $1;

5d. Find stale assignments (disappeared from Canvas):

  SELECT 
    a.id,
    a.title,
    a.course_name,
    a.last_seen_at
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = $1
    AND a.last_seen_at < NOW() - INTERVAL '2 days';

Eventually I may want an is_active boolean instead of deleting, so digest history can still reference old assignments without broken FKs:

  ALTER TABLE assignments ADD COLUMN is_active BOOLEAN DEFAULT true;

  UPDATE assignments
  SET is_active = false
  WHERE integration_id = $1
    AND last_seen_at < NOW() - INTERVAL '2 days';

5e. Dashboard count query (powers the colored stat tiles in the email header):

  SELECT
    COUNT(*) FILTER (WHERE a.status = 'missing') AS missing_count,
    COUNT(*) FILTER (WHERE a.status = 'upcoming') AS upcoming_count,
    COUNT(*) FILTER (
      WHERE a.status = 'upcoming'
        AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '2 days'
    ) AS soon_count
  FROM assignments a
  JOIN integrations i ON a.integration_id = i.id
  WHERE i.user_id = $1;

The COUNT(*) FILTER pattern is Postgres-specific and lets me get three counts in one query instead of three round trips.

5f. Get user digest settings:

  SELECT email, delivery_time, lookahead_days, timezone
  FROM users
  WHERE id = $1;

5g. Update digest preferences:

  UPDATE users
  SET delivery_time = $2, lookahead_days = $3, timezone = $4
  WHERE id = $1;


6. SCHEMA IMPROVEMENT WORTH ADDING

Add an updated_at column to my main tables (users, integrations, assignments). Right now I have created_at but no easy way to know when a record was last changed. Useful for debugging and for any future "what changed recently" features.


7. HELPFUL INDEXES

My JOINs and filters will be common, so these indexes would speed things up:

  CREATE INDEX idx_integrations_user_id ON integrations(user_id);
  CREATE INDEX idx_assignments_integration_id ON assignments(integration_id);
  CREATE INDEX idx_assignments_status_due_at ON assignments(status, due_at);
  CREATE INDEX idx_digests_user_id_sent_at ON digests(user_id, sent_at);

The composite (status, due_at) index supports my "upcoming this week" query directly — the filter on status AND the ORDER BY due_at both get the index.


OVERALL JUDGMENT

Schema and queries are solid. The biggest fix is the NULL handling on the "new assignments" subquery — without COALESCE, brand-new users get an empty digest on day one. The biggest improvement is using the lookahead_days column instead of hardcoding 7 days.`},{q:`Fixes applied and new queries added`,a:`Taking 7 things from the AI review, deferring 1. Net result: every query I had now uses real parameters, the "New" badge works on day one, and there are seven new queries the app actually needs.

CHANGES TO EXISTING QUERIES

1. Parameterize everything. Replaced all WHERE i.user_id = 1 with WHERE i.user_id = $1.
   Why: hardcoded values only work in testing. Real app code passes the logged-in user's ID as a parameter, which lets the database driver handle escaping and prevents SQL injection.

2. Fixed the "New" badge NULL bug.
   The subquery SELECT MAX(sent_at) FROM digests WHERE delivery_status = 'sent' returns NULL on day one (no digests have been sent yet). And a.first_seen_at > NULL is itself NULL, not true — so zero rows come back. A brand-new user's first-ever digest would have no "New" badges, which defeats the entire point.

   Fixed with COALESCE and a Postgres '-infinity' sentinel:

     SELECT a.title, a.course_name, a.due_at, i.label
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     WHERE i.user_id = $1
       AND a.first_seen_at > COALESCE(
         (SELECT MAX(sent_at) FROM digests WHERE user_id = $1 AND delivery_status = 'sent'),
         '-infinity'::timestamptz
       );

   The '-infinity' value is always less than any real timestamp, so on a brand-new account everything qualifies as "new" — which is exactly the behavior I want.

3. The "upcoming" query now uses the user's lookahead_days setting instead of hardcoding 7 days.

     SELECT i.label AS section, a.course_name, a.title, a.due_at, a.html_url
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     JOIN users u ON u.id = i.user_id
     WHERE i.user_id = $1
       AND a.status = 'upcoming'
       AND a.due_at BETWEEN NOW() AND NOW() + (u.lookahead_days * INTERVAL '1 day')
     ORDER BY a.due_at;

   Embarrassing oversight in v1 — I added lookahead_days to the users table back in Day 3 and then hardcoded 7 in the query anyway. Fixed.

4. UPSERT now updates more fields (but still NEVER touches first_seen_at).

     ON CONFLICT (integration_id, canvas_assignment_id)
     DO UPDATE SET 
       course_name = EXCLUDED.course_name,
       title = EXCLUDED.title,
       due_at = EXCLUDED.due_at,
       status = EXCLUDED.status,
       html_url = EXCLUDED.html_url,
       last_seen_at = NOW();

   If a teacher renames an assignment or moves the due date in Canvas, my local copy now reflects that on the next sync. first_seen_at is deliberately not in the update list — refreshing it would break the "New" badge logic (everything would always look new).


NEW QUERIES (7 total — all things the app needs but I didn't write originally)

5. Insert a digest row after the email sends:

     INSERT INTO digests
       (user_id, sent_at, missing_count, upcoming_count, soon_count, subject, html_body, text_body, delivery_status, created_at)
     VALUES
       ($1, NOW(), $2, $3, $4, $5, $6, $7, $8, NOW());

6. Mark an integration as successfully synced:

     UPDATE integrations
     SET last_synced_at = NOW(), last_sync_status = 'success', last_sync_error = NULL
     WHERE id = $1;

7. Mark an integration as failed (with the error message):

     UPDATE integrations
     SET last_synced_at = NOW(), last_sync_status = 'failed', last_sync_error = $2
     WHERE id = $1;

   Queries 6 and 7 are the pair that actually MAKE last_sync_status and last_sync_error work. Without these, those columns just sit empty forever and yesterday's edge-case work was for nothing.

8. Find stale assignments (haven't shown up in Canvas in 2+ days — probably means the course ended or the teacher removed them):

     SELECT a.id, a.title, a.course_name, a.last_seen_at
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     WHERE i.user_id = $1
       AND a.last_seen_at < NOW() - INTERVAL '2 days';

9. Dashboard counts (the three colored stat tiles at the top of the email):

     SELECT
       COUNT(*) FILTER (WHERE a.status = 'missing') AS missing_count,
       COUNT(*) FILTER (WHERE a.status = 'upcoming') AS upcoming_count,
       COUNT(*) FILTER (
         WHERE a.status = 'upcoming' AND a.due_at BETWEEN NOW() AND NOW() + INTERVAL '2 days'
       ) AS soon_count
     FROM assignments a
     JOIN integrations i ON a.integration_id = i.id
     WHERE i.user_id = $1;

   COUNT(*) FILTER is Postgres-specific and lets me get three counts in one query instead of three round trips. Nice efficiency win.

10. Get user's digest preferences (powers a settings page):

     SELECT email, delivery_time, lookahead_days, timezone
     FROM users
     WHERE id = $1;

11. Update digest preferences (when the user changes settings):

     UPDATE users
     SET delivery_time = $2, lookahead_days = $3, timezone = $4
     WHERE id = $1;


SCHEMA ADDITIONS

12. Adding updated_at columns to users, integrations, and assignments.
    Right now I have created_at but no way to know when a row was last touched. Useful for debugging ("did this assignment actually get refreshed in last night's sync?") and any future "what changed recently" features.

    Implementation note: in Postgres I can wire this up with a trigger that auto-updates updated_at on every UPDATE, so the app code doesn't have to remember to set it.

13. Adding four indexes to speed up the queries that run every day:

     CREATE INDEX idx_integrations_user_id ON integrations(user_id);
     CREATE INDEX idx_assignments_integration_id ON assignments(integration_id);
     CREATE INDEX idx_assignments_status_due_at ON assignments(status, due_at);
     CREATE INDEX idx_digests_user_id_sent_at ON digests(user_id, sent_at);

   The composite (status, due_at) index is the one that matters most — my upcoming-this-week query filters on status AND orders by due_at, and a composite index supports both at once.


WHAT I'M DEFERRING

is_active boolean column on assignments instead of deleting stale rows.
The AI suggested soft-deleting old assignments so digest history can still reference them. Reasonable but premature — for MVP, just DELETE stale assignments. If I later add a "show me what was on last Tuesday's digest" feature, I'll revisit. (Or, more likely, the digests.html_body already preserves what got sent, so I don't need the original assignment row anyway.)`}]},{heading:`Exercise 5 — INSERT, UPDATE, DELETE`,description:`Back to the W3Schools playground.`,qa:[{q:`Add a new customer — INSERT into Customers`,a:`Query:
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('New Student Books', 'Sample Contact', '123 Main St', 'Chicago', '60601', 'USA');

Confirm with: SELECT * FROM Customers WHERE CustomerName = 'New Student Books';

Result: Unable to run this exact query on the playground since it doesn't allow INSERTs, but in a real database this would add a new row to the Customers table with the provided values.

Note on why six columns: Some columns can't be left blank (NOT NULL). Filling all six avoids surprises. In your own app, you'll decide which columns are required and which are optional.`},{q:`Update a product's price — UPDATE product #1 to $25.00`,a:`Query:
UPDATE Products SET Price = 25.00 WHERE ProductID = 1;

Confirm with: SELECT * FROM Products WHERE ProductID = 1;

Result: Unable to run this exact query on the playground since it doesn't allow UPDATEs, but in a real database this would change the price of the product with ProductID 1 to $25.00. The SELECT query would show the updated price.`},{q:`Delete the customer just added — DELETE FROM Customers`,a:`Query:
DELETE FROM Customers WHERE CustomerName = 'New Student Books';

Confirm by running the SELECT again — they should be gone.

Result: Unable to run this exact query on the playground since it doesn't allow DELETEs, but in a real database this would remove the row for 'New Student Books' from the Customers table. Running the SELECT query again would return zero rows.`},{q:`Write INSERT, UPDATE, DELETE for YOUR app`,a:`Using your schema from yesterday:

One INSERT that adds a new row to your main table:

-- Adding my Yavapai student token — the second integration that makes Canvas Daily dual-role.
-- Without this row the digest only covers my daughter; with it, it covers both of us.

INSERT INTO integrations 
  (user_id, role, label, canvas_url, canvas_token, canvas_user_id, created_at)
VALUES 
  (1, 'student', 'My Yavapai account', 'https://yc.instructure.com', 'encrypted_token_value_here', 50412, NOW());


One UPDATE that changes something (e.g., updating an event's date):

-- Marking an integration as failed after a sync error (this is the query that USES the last_sync_status
-- and last_sync_error columns I added in the edge-case work earlier this week).
-- Without this UPDATE running, those columns just sit empty forever.

UPDATE integrations
SET 
  last_synced_at = NOW(),
  last_sync_status = 'failed',
  last_sync_error = 'Canvas API returned 401 — token may be expired'
WHERE id = 2;


One DELETE that removes a row:

-- Cleaning up stale assignments that haven't shown up in a Canvas sync for 14+ days.
-- Probably means the course ended or the instructor removed the assignment.
-- Cascades automatically aren't relevant here since assignments have no children — they're leaf rows.

DELETE FROM assignments 
WHERE last_seen_at < NOW() - INTERVAL '14 days';


Note: in real app code I'd parameterize the hardcoded values (id = 1, id = 2, etc.) with $1, $2 placeholders so the database driver handles escaping safely. The hardcoded versions above are for clarity in the exercise — they show what the query is actually doing.`}]},{heading:`Exercise 6 — Schema Refinement`,description:`Find a partner (different from yesterday if possible). Share your schemas AND your queries from Exercise 4. This is the final revision before you start building next week.`,qa:[{q:`Partner review — gaps and constraints we found`,a:`Ask each other:
- "Are there queries here that the schema can't support?" (Example: a query filtering by neighborhood but no neighborhood column exists.)
- "Is there data the app needs that doesn't have a table or column yet?"
- "Are there any columns that should have constraints?" (Can't be empty, must be unique, etc.)

Gaps my partner found in my schema:


Gaps I found in my partner's schema:`},{q:`My schema updates from this review`,a:``}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Stay in the same breakout room from Exercise 6. Each person gets 2 minutes to read one of their SQL queries aloud and explain what each clause does — WITHOUT looking at the doc once you start talking.`,qa:[{q:`The query I'm reading aloud (with at least two clauses)`,a:`Pick a query that uses at least two clauses (e.g., SELECT + WHERE, or SELECT + JOIN).

My query:`},{q:`My walkthrough — table, keywords, user story`,a:`What table is this querying?


What does each keyword do (SELECT, FROM, WHERE, JOIN, ORDER BY)?


What user story does this query support?`},{q:`Partner's follow-up question and my answer`,a:`Examples your partner might ask:
- "What would happen if you removed the WHERE clause?"
- "Why is the JOIN necessary — couldn't you just SELECT from one table?"

`},{q:`Reading SQL aloud surfaced what? What clause or pattern do I still want to nail down?`,a:``}]}]}]},{label:`Week 5`,days:[{number:18,label:`Day 1`,title:`Week 5, Day 1 — Node.js & TypeScript First Look`,subtitle:`JavaScript outside the browser. npm, modules, CLI tools. First type annotations.`,color:`#84cc16`,sections:[{heading:`Exercise 1 — Hello Node`,description:`Run JavaScript from the terminal for the first time. Same language, different environment.`,qa:[{q:"hello.js — first run with `node hello.js`",a:`Code:
console.log("Hello from Node.js!");
console.log("This is running in the terminal, not a browser.");

Output:
Hello from Node.js!
This is running in the terminal, not a browser.

Both lines print straight to the terminal. No browser, no HTML file, no devtools — just node hello.js and the strings come back.`},{q:`basics.js — variables, math, string building, conditional, loop`,a:`Output (Marcus, age 28):
My name is Marcus and I was born in 1998.
Marcus is an adult.
Counting to 5:
1
2
3
4
5

Same JS I've written for the last year. const, template-ish concatenation, if/else, for loop. The runner changed. The language didn't.`},{q:`Step 4 modifications — my own name, age, city, and three-way if/else (age === 18, > 18, < 18)`,a:`Code:
const firstName = "Diana";
const birthYear = 1986;
const city = "Prescott";

// Flipped the formula from the example. Birth year is the source of truth —
// my age depends on whether I've hit Nov 5 yet, but my birth year is fixed.
const age = 2026 - birthYear - 1; // -1 because birthday hasn't happened yet this year

const intro = "My name is " + firstName + " and I was born in " + birthYear + " in " + city + ".";
console.log(intro);

if (age === 18) {
  console.log(firstName + " just turned an adult!");
} else if (age > 18) {
  console.log(firstName + " is an adult.");
} else {
  console.log(firstName + " is a minor.");
}

console.log("Counting to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

Output:
My name is Diana and I was born in 1986 in Prescott.
Diana is an adult.
Counting to 5:
1
2
3
4
5

The === 18 branch had to come first or the > 18 branch would have swallowed it. Order matters in if/else chains.

Also caught an off-by-one in the original example: 2026 - 28 = 1998 for Marcus assumes his birthday already passed. Mine hasn't (Nov 5), so I flipped the formula to derive age from birth year instead.`},{q:`Checkpoint — what clicked`,a:`Nothing new on the language side. The shift is mental: JavaScript is not a "browser language." It's a language that happens to run in browsers, and also runs anywhere Node is installed. Everything I've been doing in DevTools console runs the same way from the terminal.`}]},{heading:`Exercise 2 — npm Init + Your First Package`,description:`Set up a project with npm, install the dayjs package, and use it.`,qa:[{q:"package.json after `npm init -y` — project name, main file, dependencies?",a:`Project name: date-project (taken from the folder name).
Main file: index.js (the default — I haven't created it yet, npm just assumes that's where the entry point will live).
Dependencies: none. The dependencies key isn't even in the file yet. It gets added the first time you install a package.`},{q:"What changed in package.json after `npm install dayjs`? What new files/folders appeared?",a:`package.json — a new "dependencies" section appeared:
"dependencies": {
  "dayjs": "^1.11.21"
}

New on disk:
- node_modules/ — folder holding the actual dayjs source code (and anything dayjs itself depends on, though dayjs has zero dependencies so it's a small one). This is where the import resolves to.
- package-lock.json — a fingerprint of the exact versions of every package in node_modules. Commits the install to a specific tree so my machine and someone else's machine install the same code.`},{q:`dates.js — output of all four console.log lines`,a:`Output (ran on May 26, 2026):
Today is: May 26, 2026
It's Tuesday!
Days left in 2026: 218
30 days from now: June 25, 2026

The import dayjs from "dayjs" line is what makes the whole module available. Then dayjs() returns a "now" object, and .format() / .diff() / .add() are methods on it. Standard library-style chaining.`},{q:`Step 5 modifications — birthday day of week, days since Jan 1 2026, date 100 days from now`,a:`Code added:
const birthdayThisYear = dayjs("2026-11-05").format("dddd");
console.log("My birthday this year falls on: " + birthdayThisYear);

const startOfYear = dayjs("2026-01-01");
const daysSinceJan1 = dayjs().diff(startOfYear, "day");
console.log("Days since January 1, 2026: " + daysSinceJan1);

const date100 = dayjs().add(100, "day").format("MMMM D, YYYY");
console.log("100 days from now: " + date100);

Output:
My birthday this year falls on: Thursday
Days since January 1, 2026: 145
100 days from now: September 3, 2026

Nov 5 on a Thursday this year. Useful to know.`}]},{heading:`Exercise 3 — Build a Module`,description:`Create my own module with exported functions and import them into another file.`,qa:[{q:`utils.js — calculateTip, toCelsius, toFahrenheit`,a:`Three functions, each exported with the export keyword in front of the declaration. The JSDoc comments above each function are what give the editor hover-tooltips — same shape as a docstring in Python.

The Math.round(celsius * 10) / 10 trick is how you round to one decimal place without bringing in a library: multiply, round to int, divide back down.`},{q:`app.js — importing and using the functions, expected output`,a:`Output matched the spec exactly:
--- Tip Calculator ---
Bill: $45.50
Tip (20%): $9.10
Total: $54.60

--- Temperature Converter ---
72F = 22.2C
100C = 212F
32F = 0C
0C = 32F

The import { calculateTip, toCelsius, toFahrenheit } from "./utils.js" line is what pulls the three functions out of utils.js. Note the .js extension on the path — required with "type": "module" in ESM. I always forget that and get bitten.`},{q:`Step 4 — formatCurrency(amount) and getGrade(score) added, exported, and tested`,a:`Added to utils.js:
export function formatCurrency(amount) {
  return "$" + amount.toFixed(2);
}

export function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

Tested in app.js:
console.log("--- Grades ---");
console.log("95 -> " + getGrade(95));
console.log("82 -> " + getGrade(82));
console.log("71 -> " + getGrade(71));
console.log("63 -> " + getGrade(63));
console.log("48 -> " + getGrade(48));

Output:
95 -> A
82 -> B
71 -> C
63 -> D
48 -> F

Replaced the .toFixed(2) calls in the tip section with formatCurrency() so the formatting logic lives in one place. Small thing — but that's the whole point of pulling helpers into a module.`},{q:`Checkpoint — how this maps to how professional projects are organized`,a:`Exactly how Hype Live was structured. Backend was dozens of small files — one module per concern (kafka consumer, redis client, db schema, route handlers) — and each one exported only what other files needed. Nobody writes one giant index.js in real codebases. The import surface is what defines the contract between files.`}]},{heading:`Exercise 4 — Read Someone Else's Code`,description:`Trace through AI-generated Node.js code that reads a JSON file. Predict the output before running.`,qa:[{q:`Prediction — what does readFileSync do?`,a:`Reads a file from disk synchronously and returns its contents. "Sync" means the program waits for the read to finish before moving to the next line. The "utf-8" argument tells it to return the contents as a string instead of a raw Buffer of bytes. Without "utf-8" you'd get a Buffer and have to decode it yourself.`},{q:`Prediction — what does JSON.parse(raw) do?`,a:`Takes a string in JSON format and turns it into a real JavaScript object. raw is a string at that point (just text from the file). After JSON.parse it's a plain object with .team and .members properties you can index into.`},{q:`Prediction — what does "=".repeat(30) produce?`,a:`A string of 30 equals signs in a row: ==============================. .repeat(n) is a method on every string. Used here as a visual divider.`},{q:`Prediction — what will totalProjects be after the loop, and what will the average be?`,a:`Members: 3 + 5 + 4 + 2 = 14.
Total: 14.
Average: 14 / 4 = 3.5.

The loop adds each member.projects to totalProjects. Standard accumulator pattern.`},{q:`Full predicted output vs actual output — what surprised me?`,a:`Predicted output:
Team: Code Builders
==============================
Aisha - Frontend (3 projects)
Carlos - Backend (5 projects)
Priya - Full Stack (4 projects)
Marcus - Frontend (2 projects)
==============================
Total projects: 14
Average per member: 3.5

Actual output: exact match. Nothing surprised me — the code is short and the flow is linear. The point of the exercise is the discipline of reading first, running second. That's the muscle to build, not the surprise.`},{q:`Step 6 modifications — added a new member, and code that finds and displays who has the most projects`,a:`Added to data.json:
{ "name": "Diana", "role": "Backend", "projects": 6 }

Modified report.js to track the top member during the loop instead of doing a second pass:
let topMember = data.members[0];

for (const member of data.members) {
  console.log(member.name + " - " + member.role + " (" + member.projects + " projects)");
  totalProjects = totalProjects + member.projects;
  if (member.projects > topMember.projects) {
    topMember = member;
  }
}

console.log("Most projects: " + topMember.name + " with " + topMember.projects);

Output:
Team: Code Builders
==============================
Aisha - Frontend (3 projects)
Carlos - Backend (5 projects)
Priya - Full Stack (4 projects)
Marcus - Frontend (2 projects)
Diana - Backend (6 projects)
==============================
Total projects: 20
Average per member: 4.0
Most projects: Diana with 6

Could have used reduce or sort, but tucking the comparison inside the existing loop avoids iterating twice. Same complexity either way, cleaner read.`}]},{heading:`Exercise 5 — Build a CLI Tool`,description:`Build a command-line quiz game that asks questions in the terminal and keeps score. prompt-sync for terminal input.`,qa:[{q:`quiz.js running end-to-end — what my final score was on the first playthrough`,a:`Final score: 5 / 5. PERFECT SCORE message printed.

Answers: B (Hyper Text Markup Language), C (Cascading Style Sheets), A (//), B (Node Package Manager), C (on your computer outside the browser).

prompt-sync blocks the loop on each question waiting for input — that's why the terminal pauses after printing the options. .toUpperCase() on the input means "a" / "A" / "a " all behave the same (well, "a " wouldn't — should probably .trim() too, but the spec didn't ask).`},{q:`Level 1 modification — 2 more questions added to the quiz`,a:`Two questions appended to the questions array:

{
  question: "What does API stand for?",
  options: ["A) Application Programming Interface", "B) Automated Program Index", "C) Applied Process Integration"],
  answer: "A"
},
{
  question: "Which method reads a file synchronously in Node.js?",
  options: ["A) fs.read()", "B) fs.readFileSync()", "C) fs.openFile()"],
  answer: "B"
}

Score is still out of questions.length so the percentage thresholds for "perfect" / "passed" / "keep studying" still work without touching the closing block. That's why questions.length is used everywhere instead of hardcoding 5.`},{q:`Level 2 modification — show correct answer + short explanation after each wrong answer`,a:`Added an explanation field to each question object:
{
  question: "What does HTML stand for?",
  options: [...],
  answer: "B",
  explanation: "HTML uses tags like <h1> and <p> to mark up text structure — that's the 'markup language' part."
}

Then updated the wrong-answer branch:
} else {
  console.log("Wrong. The answer was " + q.answer + ".");
  console.log("Why: " + q.explanation + "\\n");
}

Forces me to actually understand each question well enough to write a one-line "why," which is the real value of this mod.`},{q:`Level 3 modification — track wrong-answer questions and offer to replay just those at the end`,a:`Pulled the question loop into a function so I could call it again with a filtered list. Tracked wrong answers by index.

function runQuiz(questionSet) {
  let score = 0;
  const missed = [];

  for (let i = 0; i < questionSet.length; i++) {
    const q = questionSet[i];
    // ... print question, get answer ...
    if (userAnswer === q.answer) {
      score++;
    } else {
      missed.push(q);
    }
  }
  return { score, missed };
}

const first = runQuiz(questions);
console.log("FINAL SCORE: " + first.score + " / " + questions.length);

if (first.missed.length > 0) {
  const retry = prompt("Replay the " + first.missed.length + " you missed? (y/n): ").toUpperCase();
  if (retry === "Y") {
    const second = runQuiz(first.missed);
    console.log("Retry score: " + second.score + " / " + first.missed.length);
  }
}

Pushing the whole question object (not just the index) into missed means runQuiz works on either the full set or the filtered set with no extra logic. That's the kind of small design choice that keeps the code from growing branches.`}]},{heading:`Exercise 6 — Convert JS to TypeScript`,description:`Add type annotations to plain JavaScript functions in the TypeScript playground. Feel where the types go.`,qa:[{q:`greet(name: string): string — annotated and running clean in the playground`,a:`function greet(name: string): string {
  return "Hello, " + name + "!";
}

console.log(greet("Alex"));

Output: Hello, Alex!

Type goes on the parameter (name: string) and on the return (: string after the parens). Reads almost like a function signature in any typed language.`},{q:`greet(42) — what does the red squiggle / error message say?`,a:`Argument of type 'number' is not assignable to parameter of type 'string'.

That's TS catching the bug at compile time. In plain JS, greet(42) would have just returned "Hello, 42!" silently — which would only blow up if some downstream code expected a real string-like name (uppercasing it, indexing into it, etc.). TS pulls the error left, before the program even runs.`},{q:`calculateBill — annotated with types for price, taxRate, tipPercent, and return value`,a:`function calculateBill(price: number, taxRate: number, tipPercent: number): number {
  const tax = price * taxRate;
  const tip = price * (tipPercent / 100);
  const total = price + tax + tip;
  return total;
}

console.log(calculateBill(50, 0.08, 20));

Output: 64

Three number inputs, one number out. The intermediate consts (tax, tip, total) don't need annotations — TS infers them as number from the math. You only have to annotate where TS can't figure it out on its own, which is mostly function boundaries.`},{q:`formatName — annotated, string in, string out`,a:`function formatName(first: string, last: string): string {
  return last.toUpperCase() + ", " + first;
}

console.log(formatName("Diana", "Busch"));

Output: BUSCH, Diana

If I accidentally called formatName(42, "Busch"), the squiggle would catch it. .toUpperCase() also wouldn't even be available on a number — but the annotation catches it before that error has a chance to fire.`},{q:`Stretch — isAdult(age: number): boolean`,a:`function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(isAdult(39)); // true
console.log(isAdult(15)); // false

The expression age >= 18 already evaluates to a boolean, so the : boolean annotation is just making the contract explicit. If I accidentally wrote return age (returning the number), TS would flag the return type mismatch immediately.`},{q:`Checkpoint — the basic move: : number, : string, : boolean and reading the error`,a:`This is the move I used every day at Hype Live in NestJS — every controller method, every service function, every DTO had types in the same three spots: parameters, return, and any explicit variable annotations. Once you internalize "where do the colons go," everything else in TS is just bigger versions of that shape (objects, generics, unions). The mental model is the same.`}]},{heading:`Exercise 7 — Read AI-Generated TypeScript`,description:`Read-it-back loop on typed code. Point at each annotation and say what it means.`,qa:[{q:`type Student = { ... } — walking through each field and what shape it expects`,a:`type Student = {
  id: number;       // a number — student ID
  name: string;     // a string — student name
  grades: number[]; // an array of numbers — list of grades
  honors?: boolean; // an OPTIONAL boolean — may or may not be present
};

Each line is "field name : type." Semicolons separate fields inside the type body. The number[] syntax means "array where every element is a number." Could also be written as Array<number> — same thing.`},{q:`honors?: boolean — what does the ? mean?`,a:`The ? marks the field as optional. A Student object is valid whether honors is present or not. If it's missing, accessing student.honors returns undefined, not an error. The actual runtime type is boolean | undefined when you read it.

That's why the describe function uses the ternary student.honors ? " (Honors)" : "" — to handle both "true" and "undefined/false" gracefully.`},{q:`averageGrade(student: Student): number — type of student, what the function returns`,a:`student is a Student (the object shape declared above). The function returns a number — the computed average.

.reduce((sum, g) => sum + g, 0) walks the grades array, summing into the accumulator that starts at 0. Divide by .length to get the average. Standard reduce — same in TS as in plain JS, just typed.`},{q:`student.honors ? " (Honors)" : "" — what it evaluates to when honors is true vs undefined`,a:`When honors is true: evaluates to " (Honors)" (with the leading space).
When honors is undefined (or false): evaluates to "" (empty string).

So the template literal \${student.name}\${honorsLabel} appends the suffix only when it has something to append. For alex it produces "Alex (Honors)". For a student without honors it'd just be "Sam".`},{q:`const alex: Student = { ... } — what is the : Student doing?`,a:`It's annotating the variable. "alex must conform to the Student type." If I left off the email field — fine, it's optional. If I left off id, name, or grades — TS would throw. If I added a typo like nmae: "Alex" — TS would flag "object literal may only specify known properties."

The annotation is what lets the rest of the file pass alex around to functions expecting Student without re-checking the shape each time.`},{q:`Accept / reject / modify — the one annotation I asked AI to explain, and what I learned`,a:`Picked: the (sum, g) => sum + g, 0 in the reduce call. Specifically, why neither sum nor g needed an explicit type annotation.

AI explanation: TypeScript infers the types from the call site. grades is number[], so reduce knows g is a number. The initial value 0 is a number, so sum is inferred as number too. The whole callback gets typed without me writing anything.

Verdict: accept. This is how good TS code reads — annotations on the public surface (function signatures, types), inference everywhere inside. Over-annotating internals is noise.`},{q:`Step 5 — added optional email?: string to Student and to alex`,a:`Updated type:
type Student = {
  id: number;
  name: string;
  grades: number[];
  honors?: boolean;
  email?: string;
};

Updated alex:
const alex: Student = {
  id: 1,
  name: "Alex",
  grades: [88, 92, 79, 95],
  honors: true,
  email: "alex@school.edu",
};

Other students elsewhere in the file can skip email — that's the point of the ?.`},{q:`Step 5 — topGrade(student: Student): number`,a:`function topGrade(student: Student): number {
  return Math.max(...student.grades);
}

console.log(topGrade(alex)); // 95

The ...student.grades spread unpacks the array into individual arguments for Math.max, which expects loose numbers rather than an array. Without the spread, Math.max([88, 92, 79, 95]) returns NaN — common gotcha.`},{q:`Step 5 — summarize(students: Student[]): string returning "3 students, average 85.4"`,a:`function summarize(students: Student[]): string {
  const count = students.length;
  const allAverages = students.map(s => averageGrade(s));
  const overall = allAverages.reduce((sum, a) => sum + a, 0) / count;
  return \`\${count} students, average \${overall.toFixed(1)}\`;
}

Test:
const sam: Student = { id: 2, name: "Sam", grades: [75, 80, 82], honors: false };
const jordan: Student = { id: 3, name: "Jordan", grades: [91, 88, 94, 90] };

console.log(summarize([alex, sam, jordan]));

Output: 3 students, average 86.1

Student[] is the "array of Student" type. Reads naturally. summarize reuses averageGrade per student — not just duplicating the reduce logic. Composing the small functions is the whole point of having them.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes to explain one concept out loud. Partner asks one follow-up.`,qa:[{q:`Which concept I picked — npm install, import/export, package.json, or TypeScript annotations`,a:`npm install. I've run that command thousands of times and I wanted to test whether I could actually explain what it does end-to-end, not just "it installs the package." Surface familiarity isn't the same as being able to walk someone through it.`},{q:`My 2-minute explanation`,a:`npm install does three things, in this order.

First: it reads package.json. That's the manifest in your project root that lists every package you've declared a dependency on, along with the version range you're willing to accept. If you run npm install with no arguments, it installs every package listed in there. If you run npm install dayjs, it pulls just dayjs and adds it to the dependencies section.

Second: it goes out to the npm registry — which is a giant public server at registry.npmjs.org — and downloads the actual source code for each package. It also downloads anything those packages depend on, and anything those depend on, all the way down. That's the dependency tree. It saves all that code into a folder called node_modules in your project root. node_modules is the staging area where the real code lives. It's usually huge and you never commit it to git.

Third: it writes a file called package-lock.json. That file is a fingerprint of the exact versions of everything in node_modules. Down to the patch version. If I delete node_modules and run npm install again, the lockfile guarantees I get the same code back. If my teammate clones the repo and runs npm install, they get the same code I have. Without the lockfile, you'd get version drift between machines, which is one of the classic ways a project starts "working on my machine."

The flow once it's installed: I write import dayjs from "dayjs" in my code. Node sees that import, looks in node_modules for a folder called dayjs, finds the main file, and loads it. That's the contract — package.json says what I want, the registry has it, node_modules holds the local copy, and the lockfile freezes the exact tree.`},{q:`Partner's follow-up question and my answer`,a:`Partner's question: If node_modules has all the code, why do we need package.json at all? Couldn't you just commit node_modules to git and skip the install step?

My answer: Two reasons. First — size. node_modules for a real project is usually hundreds of megabytes, sometimes gigabytes. A typical React app pulls in thousands of small packages. Committing all that to git would balloon the repo and slow down every clone and pull. Second — and more important — node_modules is platform-specific. Some packages compile native binaries during install that are different on Linux vs macOS vs Windows. If I committed my Linux node_modules and you cloned it on a Mac, half of it wouldn't work. The whole point of package.json + lockfile is that they're a portable recipe. The recipe travels in git; the cooking happens fresh on each machine.`},{q:`Saying it out loud surfaced what? What would I refine?`,a:`Two things.

First — I caught myself glossing over the dependency tree part. "It installs the package and anything that depends on it" is something I've said for years without really thinking about it. When I said it out loud, my partner asked the follow-up about why we don't just commit node_modules, and I realized the size argument is the obvious one but the platform argument (native binaries, OS-specific builds) is the one that actually closes the loop. I want to lead with that next time.

Second — the lockfile explanation needs to be tighter. I said "fingerprint of exact versions" and that landed, but the WHY of the lockfile — preventing version drift between machines — is the part that gives it meaning. The fingerprint isn't useful in isolation; it's useful because it makes installs reproducible. Next time I'd say "the lockfile is what makes npm install give the same result on every machine, every time." That's the headline. Everything else is detail.`}]}]},{number:19,label:`Day 2`,title:`Week 5, Day 2 — React Components, Props, and State`,subtitle:`Read components first, then write them. JSX, props, useState, composition, event handling.`,color:`#61dafb`,sections:[{heading:`Exercise 1 — Read a React Component`,description:`Trace through a MovieCard component before running it. Predict the output, then verify in the browser.`,qa:[{q:`What props does MovieCard accept?`,a:`Four: title, year, rating, genre. They're destructured straight out of the props object in the function signature — function MovieCard({ title, year, rating, genre }). The component never sees props as a single object, just the four fields it actually uses.`},{q:`For "The Matrix", what will the <h2> display?`,a:`"The Matrix (1999)" — the title interpolated, then a space, then the year in parens. The {} braces in JSX are JS expression slots, so {title} and {year} get substituted in.`},{q:`What does {"*".repeat(rating)} do for a rating of 5? What about a rating of 2?`,a:`rating 5: produces "*****" (five asterisks).
rating 2: produces "**" (two asterisks).

String.prototype.repeat(n) returns the string repeated n times. The {} around it is the JSX expression slot — so the result of the JS expression gets rendered as text inside the <p>.`},{q:`The line {rating >= 4 && <p>...</p>} — what does this do? Which movies will show "Highly Recommended!" and which won't?`,a:`Short-circuit conditional rendering. The && operator returns the left value if it's falsy, otherwise the right value. So:

- rating >= 4 is true → the expression evaluates to the <p> JSX → React renders it
- rating >= 4 is false → the expression evaluates to false → React renders nothing (false, null, and undefined all render as nothing in JSX)

Results:
- The Matrix (rating 5): shows the banner
- Toy Story (rating 4): shows the banner
- A Bad Movie (rating 2): does NOT show the banner

This pattern is everywhere in React. Inline conditional renders without needing if statements or ternaries.`},{q:`If you wanted to add a director prop, what would you change? (Two places.)`,a:`Two places:

1. Inside the component definition: add director to the destructured props and render it in the JSX.
function MovieCard({ title, year, rating, genre, director }) {
  return (
    <div className="movie-card">
      <h2>{title} ({year})</h2>
      <p>Director: {director}</p>
      <p>Genre: {genre}</p>
      ...
    </div>
  );
}

2. At each call site: pass director as a prop.
<MovieCard title="The Matrix" year={1999} rating={5} genre="Sci-Fi" director="The Wachowskis" />

Forget either one and you get either a missing field or an unused prop. The compiler won't catch it in plain JS — only TS would.`},{q:`Modification — added a fourth movie (V for Vendetta) and a director prop displayed below the genre`,a:`Added director prop and a fourth card. V for Vendetta is the personal favorite.

function MovieCard({ title, year, rating, genre, director }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", margin: "8px", borderRadius: "8px" }}>
      <h2>{title} ({year})</h2>
      <p>Director: {director}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {"*".repeat(rating)}</p>
      {rating >= 4 && <p style={{ color: "green", fontWeight: "bold" }}>Highly Recommended!</p>}
    </div>
  );
}

<MovieCard title="V for Vendetta" year={2005} rating={5} genre="Dystopian" director="James McTeigue" />

Renders with director above genre, five stars, and the green "Highly Recommended!" banner. Worked first try.`}]},{heading:`Exercise 2 — Build Your First Component (ProfileCard)`,description:`Build a reusable component from scratch, pass it different data, and see the power of reuse.`,qa:[{q:`Step 4 — added two more ProfileCard instances with different data`,a:`Three cards on screen, one component definition. Aisha, Carlos, and one of my own — kept "Diana / Backend Developer / NestJS, Redis, Kafka. Learning database design and full-stack patterns at Next Chapter." for the third.

The reuse story is the whole point: I wrote ProfileCard once. Every additional card is just <ProfileCard name="..." role="..." bio="..." />. If I wanted ten of them I'd write ten lines, not ten components. This is exactly how the team grid on my portfolio works — one component, data passed in.`},{q:`Level 1 modification — added a color prop to change each card's border`,a:`Added color to the destructured props and used string concatenation in the border style:

function ProfileCard({ name, role, bio, color }) {
  return (
    <div style={{
      border: "2px solid " + color,
      borderRadius: "12px",
      padding: "20px",
      margin: "12px",
      maxWidth: "300px",
      backgroundColor: "#f9f9f9"
    }}>
      ...
    </div>
  );
}

<ProfileCard name="Aisha" role="Frontend" bio="..." color="#e74c3c" />
<ProfileCard name="Carlos" role="Backend" bio="..." color="#3498db" />
<ProfileCard name="Diana" role="Backend" bio="..." color="#2ecc71" />

Three differently-colored borders, same component. Could also have used a template literal — \`2px solid \${color}\` — same result, cleaner read. Did the concatenation version to match the assignment example.`},{q:`Level 2 modification — skills prop as comma-separated string, rendered as badges`,a:`The prop arrives as a single string. Split on comma, trim each piece, then map to badge elements.

function ProfileCard({ name, role, bio, color, skills }) {
  const skillList = skills.split(",").map(s => s.trim());

  return (
    <div style={{ border: "2px solid " + color, /* ...rest of styles */ }}>
      <h2>{name}</h2>
      <p style={{ fontStyle: "italic" }}>{role}</p>
      <p>{bio}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "10px" }}>
        {skillList.map((skill, i) => (
          <span key={i} style={{
            backgroundColor: "#e0e0e0",
            padding: "4px 8px",
            borderRadius: "12px",
            fontSize: "12px"
          }}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

<ProfileCard
  name="Diana"
  role="Backend Developer"
  bio="Built event-driven services with Kafka and Redis at Hype Live."
  color="#2ecc71"
  skills="NestJS, TypeScript, Redis, Kafka, PostgreSQL"
/>

Used the array index as the key since the badges are static within a render — fine here. Wouldn't fly for a list that can be edited (Exercise 5 covers why).`}]},{heading:`Exercise 3 — State: Counters and Toggles`,description:`Learn useState by building interactive components. The data changes, React updates the screen.`,qa:[{q:`Step 1 — Counter built and running. What useState gives you back.`,a:`const [count, setCount] = useState(0) — array destructuring on the return value of useState.

- count → the current value of the state variable
- setCount → the function you call to update it
- 0 → the initial value, used on the first render

Clicking + Add 1 calls setCount(count + 1). That schedules a re-render with the new value. The crucial thing: you never write count++ or count = count + 1 directly. State updates go through the setter. That's how React knows something changed.

The three buttons all work the same way: pass a new value into setCount, React re-renders, the new value shows up in the <h2>.`},{q:`Step 2 — Toggle built. Explain the ternary and the !isOn syntax in your own words.`,a:`isOn ? "ON" : "OFF" — ternary operator. Reads as "if isOn is true, use 'ON'; else use 'OFF'." It's a one-liner if/else that returns a value, which is exactly what JSX needs because JSX expression slots want values, not statements.

!isOn — boolean negation. Flips true to false and false to true. So onClick={() => setIsOn(!isOn)} is "set isOn to its opposite." Clicking the button toggles the state.

The button's background color also uses the same ternary trick — green when on, red when off — and the label text flips between "Turn OFF" and "Turn ON". One piece of state, three things on screen that respond to it.`},{q:`Step 3 code tracing — When count is 3, what color is the number? What message shows?`,a:`count = 3:
- getColor: 3 is not >= 10, not >= 5, so returns "#2ecc71" → green
- Message: 3 < 5 → "Keep going!"

The number renders large and green, the message below says Keep going!`},{q:`When count is 7, what color? What message?`,a:`count = 7:
- getColor: 7 is not >= 10, but is >= 5, so returns "#f39c12" → orange
- Message: 7 is not < 5, but 7 >= 5 && 7 < 10 is true → "Getting warm..."

Orange number, "Getting warm..." below.`},{q:`When count is 10, what color? What message?`,a:`count = 10:
- getColor: 10 >= 10 → returns "#e74c3c" → red
- Message: 10 >= 10 → "You made it to 10!"

Red number, success message. The three boolean checks for the message are stacked && expressions — only the one whose condition is true renders its string. The others evaluate to false and render nothing. Same short-circuit trick as Exercise 1's "Highly Recommended" banner.`},{q:`What does the Reset button do?`,a:`Calls setCount(0). State drops back to 0, React re-renders, the number is 0 again, color resets to green, message resets to "Keep going!" Everything that depends on count updates because they all read from the same state variable. That's the React data flow in miniature.`}]},{heading:`Exercise 4 — Compose Components: Build a Page`,description:`Build a small app out of multiple components — Header, Main, ProfileCard, Footer. This is the real pattern.`,qa:[{q:`What composition looks like — App is built of Header / Main / Footer, Main is built of ProfileCards`,a:`Walked through the structure before changing anything.

App
├── Header (receives appName prop)
├── Main
│   ├── ProfileCard (Aisha)
│   ├── ProfileCard (Carlos)
│   └── ProfileCard (Priya)
└── Footer (computes year internally)

Each component is self-contained. Header doesn't know what's in Main, Main doesn't know what's in Footer. They're glued together by App. Data flows DOWN — App passes appName to Header. Header doesn't reach back up.

This is the same shape every React app I've worked on has. Hype Live's admin panel was App → Layout → (Sidebar + Content), Content was a router that swapped in pages, each page was its own tree of components. Composition all the way down.`},{q:`Level 1 modification — changed app name, team members, and colors`,a:`Renamed the app to "Diana's Reading Room" (test app, going with something fun).

<Header appName="Diana's Reading Room" />

Replaced the three team members with three book recommendations as ProfileCards — name became book title, role became author, bio became one-sentence pitch. Same component, totally different content. Demonstrates how loose the coupling is between the component and the data it shows.

Swapped the header background to dark forest green (#1b4332) and the footer to a warm stone color (#6b5b4f). Header and footer are just <header> and <footer> with inline styles — changing the colors is one keystroke.`},{q:`Level 2 modification — added a Contact section component between Main and Footer`,a:`Built a new Contact component as a sibling of Main:

function Contact({ email, message }) {
  return (
    <section style={{
      padding: "30px 20px",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      borderTop: "1px solid #ddd"
    }}>
      <h2>Get in Touch</h2>
      <p style={{ maxWidth: "500px", margin: "0 auto 12px auto" }}>{message}</p>
      <a href={"mailto:" + email} style={{ color: "#1a1a2e", fontWeight: "bold" }}>
        {email}
      </a>
    </section>
  );
}

Then dropped it into App:
<Header appName="..." />
<Main />
<Contact email="diana@example.com" message="Drop me a line about React, NestJS, or what you're reading." />
<Footer />

The email becomes a clickable mailto: link via string concatenation in the href. Standard pattern.`},{q:`Level 2 modification — Header now accepts a subtitle prop`,a:`Added subtitle to the destructured props and rendered it below the h1:

function Header({ appName, subtitle }) {
  return (
    <header style={{ /* ... */ }}>
      <h1 style={{ margin: 0 }}>{appName}</h1>
      {subtitle && <p style={{ margin: "8px 0 0 0", color: "#aaa" }}>{subtitle}</p>}
    </header>
  );
}

<Header appName="Diana's Reading Room" subtitle="One book at a time" />

Wrapped the <p> in subtitle && so the paragraph doesn't render at all when no subtitle is passed. Same short-circuit pattern as the rating banner in Exercise 1. Means the component is backwards-compatible — old call sites without subtitle still work.`},{q:`Checkpoint — composition as the core React mental model`,a:`Every real app I've worked on or built — Hype Live admin, PromptForge, my portfolio, the Block Report — is a tree of small components that don't know much about each other. The "magic" of React isn't the syntax. It's the discipline of breaking the page into pieces and gluing them with props.

Once you internalize that, the rest is variations on a theme. State in the right place, props flowing down, events flowing up.`}]},{heading:`Exercise 5 — Build a Mini-App: Favorites List`,description:`Working interactive app combining state, props, event handling, and list rendering. Add items, remove items, count updates automatically.`,qa:[{q:`Built the starter, ran it, added several items, removed one. What I observed.`,a:`Typed "Coffee", clicked Add — appeared as the first item, input cleared. Typed "Books" and hit Enter — same result (the Enter key handler works). Added three more. The "Total favorites: 5" line at the bottom updated as I added each one. Clicked the X next to "Books" — it vanished from the middle of the list, the others stayed in order, total went to 4.

No flicker, no manual DOM manipulation. The state changes, React figures out what to update. Same as the counter from Exercise 3, just with an array of state instead of a number.`},{q:`State — what are the two pieces of state and what does each track?`,a:`favorites — an array of items. Each item is an object with { id, text }. Starts as [].
inputValue — the string currently in the input box. Starts as "".

Two separate useState calls. Could have been one object with both fields, but keeping them separate is cleaner because they update independently — typing changes inputValue without touching favorites, clicking Add changes both. Splitting state by "what changes together" is a useful instinct.`},{q:`Props — what props does FavoriteItem receive?`,a:`Two:
- text — the string to display
- onRemove — a function to call when the X button is clicked

onRemove is a callback. The parent (App) defines what removing means, then hands a pre-bound function down to each FavoriteItem. The child doesn't know how removal works — it just calls onRemove() when its button is clicked. This is the "events flow up" half of React's data flow.

The actual handler in App is:
onRemove={() => handleRemove(item.id)}

A new arrow function per item, closing over that item's id. So each X button knows which id to remove without the child needing to know anything about ids.`},{q:`Event handling — trace through what happens when you click the Add button`,a:`1. The button's onClick fires → handleAdd() runs
2. Check: if inputValue.trim() === "" → return early. Empty strings don't get added.
3. Build a new item: { id: Date.now(), text: inputValue.trim() }
4. setFavorites([...favorites, newItem]) → spread the current array, append the new item, hand the new array to setFavorites
5. setInputValue("") → clear the input

React sees two state changes (favorites and inputValue) and re-renders. The list shows the new item, the input box is empty, total count goes up by one. All from clicking one button.

Pressing Enter inside the input does the exact same thing — handleKeyPress checks event.key === "Enter" and calls handleAdd().`},{q:`Spread vs mutate — why [...favorites, newItem] instead of favorites.push(newItem)?`,a:`React detects state changes by reference, not by deep equality. If I called favorites.push(newItem), the array would mutate but it'd still be the same array reference — React wouldn't know anything changed and wouldn't re-render.

Spreading creates a new array. Different reference. React sees it as a new state value, schedules a re-render. Same reason favorites.filter(...) is used for removal — filter returns a new array, doesn't mutate the original.

"Never mutate state directly" is one of the first rules you internalize in React. The spread / filter / map patterns exist exactly to give you new arrays/objects every time.`},{q:`Why each item has an id (Date.now()) instead of using array index as the key`,a:`React needs a stable key for each list element to track it across renders. If I use the array index, the key for "second item" is always 1 — even if I delete the actual first item and "second item" becomes "first item." React thinks the item at index 0 just had its text change, when really the item was removed.

For a list that never changes order or gets edited, index is fine. For anything dynamic — add, remove, reorder — you need an id that belongs to the item itself. Date.now() is good enough here because two clicks can't happen in the same millisecond from a single user (in a multi-user system you'd want UUIDs).

Tomorrow's lecture apparently goes deeper on this. Looking forward to that — I've hit this bug in real code before.`},{q:`Level 1 modification — changed the title to something specific`,a:`Changed <h1>My Favorites</h1> to <h1>Books to Read</h1>. Updated the placeholder on the input to "Add a book..." and the empty state message to "No books yet. Add one!" — those copy changes make the app feel intentional instead of generic. The placeholder and empty message are easy to miss, but they're the difference between a demo and a real app.`},{q:`Level 2 modification — Clear All button`,a:`Added a Clear All button next to the Add button area. Renders only when there's at least one item, otherwise it's hidden:

{favorites.length > 0 && (
  <button
    onClick={() => setFavorites([])}
    style={{
      padding: "10px 20px",
      fontSize: "16px",
      backgroundColor: "#e74c3c",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginBottom: "20px"
    }}
  >
    Clear All ({favorites.length})
  </button>
)}

setFavorites([]) replaces the array with an empty one. The list disappears, the total goes to 0, the empty-state message reappears. Showing the count in the button label was a nice touch — makes it obvious what you're about to clear.`},{q:`Level 3 modification — prevent duplicate entries`,a:`Added a duplicate check inside handleAdd before building the new item:

const handleAdd = () => {
  const trimmed = inputValue.trim();
  if (trimmed === "") return;

  // Check for duplicates (case-insensitive)
  const exists = favorites.some(item => item.text.toLowerCase() === trimmed.toLowerCase());
  if (exists) {
    setInputError(true);
    setTimeout(() => setInputError(false), 1000);
    return;
  }

  const newItem = { id: Date.now(), text: trimmed };
  setFavorites([...favorites, newItem]);
  setInputValue("");
};

Also added a new piece of state — const [inputError, setInputError] = useState(false) — and used it to flip the input's border to red when a duplicate is detected:

border: inputError ? "2px solid #e74c3c" : "2px solid #ddd",

The setTimeout resets the border back to gray after 1 second. Visual feedback without an alert popup. Array.prototype.some short-circuits as soon as it finds a match, so it doesn't scan the whole array unnecessarily. Lowercase comparison so "Coffee" and "coffee" count as the same item.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes to explain one concept out loud. Partner asks one follow-up.`,qa:[{q:`Which concept I picked — props vs state, JSX, or useState`,a:`Props vs state. It's the question that comes up in every React interview and it's the one that matters most for the mental model. If you don't have a clean answer for this, everything else gets confused — where to put state, when to lift it up, why a child can't change a prop.`},{q:`My 2-minute explanation`,a:`Props and state are both ways of giving a component data. The difference is where the data lives and who can change it.

Props are data passed IN to a component from its parent. The parent owns the data. The child receives it and reads it, but never changes it. If a parent renders <ProfileCard name="Aisha" />, then inside ProfileCard, name is "Aisha" — period. The component can't reassign it. Props are read-only from the child's perspective.

State is data that lives INSIDE a component. The component owns it and is the only thing that can change it. You declare it with useState. If I have const [count, setCount] = useState(0) inside a Counter component, only Counter can call setCount. The parent has no idea count even exists.

The rule of thumb: if the data belongs to this component and only this component, it's state. If the data comes from somewhere else, it's props.

Concrete example from today's work. In the favorites list — favorites and inputValue are state, declared with useState inside App. They live in App because App is the only thing that needs to manage them. But FavoriteItem receives text and onRemove as props. Each item card doesn't know it's part of a list, doesn't know what removing means — it just displays text and calls onRemove when its X is clicked. The data flows down (text), the events flow up (onRemove). That's the whole pattern.

One more thing — when state changes, the component re-renders. When the parent re-renders, the children receive their props again. So even though a child can't change its own props, the props can still change between renders because the parent passed new values. That trips people up the first few times.`},{q:`Partner's follow-up question and my answer`,a:`Partner's question: If a child can't change a prop, how does a child trigger an update? Like, how does the X button in FavoriteItem actually remove the item if the favorites array lives in App?

My answer: Through callbacks passed down as props. The parent owns the data AND the function that updates it. It passes both down — the data as a regular prop, the updater as a function prop. The child invokes the function, the parent's state changes, the parent re-renders, the child gets new props.

So in the favorites list: App owns favorites. App defines handleRemove which calls setFavorites with a filtered array. When App renders the list, it passes onRemove={() => handleRemove(item.id)} to each FavoriteItem. The X button in FavoriteItem calls onRemove() — which is really just a wrapper around App's handleRemove with the id baked in. The child doesn't know what's happening, it just calls the function it was handed. The parent does the actual work.

That's the React data flow in one sentence: data down, events up.`},{q:`Saying it out loud surfaced what? What would I refine?`,a:`Two things.

First — I started by saying "props are read-only" and my partner's follow-up forced me to immediately add the nuance that props can CHANGE between renders, the child just can't change them. The static-sounding "read-only" framing buries that point. Next time I'd say "the child can read but not write" — that's the precise version.

Second — the "data down, events up" line at the very end is the single sentence I should have led with. It's the headline. Everything else I said is detail. I want to restructure the explanation next time to lead with the slogan, then unpack it. Not bury the lede in the third minute.`}]}]},{number:20,label:`Day 3`,title:`Week 5, Day 3 — Forms, Lists, Filters, and a To-Do App`,subtitle:`Controlled inputs, .map() for lists, chained filters, conditional rendering, and the first real Codex CLI session.`,color:`#f59e0b`,sections:[{heading:`Exercise 1 — Controlled Form`,description:`Build a contact form with two inputs (name + email). Display the values live as the user types. Submit clears the form.`,qa:[{q:`What I built — the full ContactForm component`,a:`import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Submitted!\\nName: \${name}\\nEmail: \${email}\`);
    setName("");
    setEmail("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", fontFamily: "Arial, sans-serif" }}>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "14px" }}
          />
        </div>

        <div style={{ marginBottom: "12px" }}>
          <label style={{ display: "block", marginBottom: "4px" }}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", fontSize: "14px" }}
          />
        </div>

        <button type="submit" style={{ padding: "8px 16px", cursor: "pointer" }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: "20px", padding: "12px", backgroundColor: "#f0f0f0", borderRadius: "6px" }}>
        <h3 style={{ margin: "0 0 8px 0" }}>Preview:</h3>
        <p style={{ margin: "4px 0" }}>Name: {name || <em style={{ color: "#999" }}>(empty)</em>}</p>
        <p style={{ margin: "4px 0" }}>Email: {email || <em style={{ color: "#999" }}>(empty)</em>}</p>
      </div>
    </div>
  );
}

export default ContactForm;`},{q:`Why 'controlled' — what makes this a controlled input?`,a:`Two pieces tied together:
1. value={name} → the input's displayed value comes FROM React state
2. onChange={(e) => setName(e.target.value)} → every keystroke updates that state

That's the control loop. React owns the source of truth. The DOM never holds a value React doesn't know about. Compare to an uncontrolled input where the DOM holds its own value and React reads it via a ref — fine for some cases, but you lose live access to what's in there.

Live preview only works because of this. The <p>Name: {name}</p> below the form re-renders on every keystroke because name updates on every keystroke. No event listeners, no DOM queries — React just re-renders the whole component when state changes, and the preview reflects the new value.`},{q:`Behavior verified in the browser`,a:`Typed "D" → preview shows "Name: D" instantly. Kept typing — each character appeared in the preview as I typed it. No lag, no debounce, just React re-rendering on every state update.

Switched to the email field. Typed an email — preview updated for that field independently. Two pieces of state, two inputs, fully isolated.

Clicked Submit on empty fields → alert showed "Name: , Email: " (the empty strings). Should probably add validation but the assignment didn't require it. Clicked Submit with values filled in → alert showed both values, then both fields cleared. Both setName("") and setEmail("") fire from the same handler.`},{q:`Why e.preventDefault() in the submit handler?`,a:`Without it, the default browser form submission fires — which means the page reloads and posts the form data to the current URL. That blows away all your React state, the alert never shows (or shows on the new page), and your SPA becomes a regular form post.

e.preventDefault() stops the default and lets React take over. The form still validates HTML5 stuff like required and type="email" before submit fires, but the actual submission is now under JS control.

This is the one line that's easy to forget and makes the form behave bizarrely when you do. Got bit by this exact bug in a Banyan Labs intern project. Now it's reflex.`}]},{heading:`Exercise 2 — Render a Product List`,description:`Render five product cards from an array using .map(). First exposure to the key prop.`,qa:[{q:`ProductCard component`,a:`function ProductCard({ name, price, category }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      width: "240px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.08)"
    }}>
      <h3 style={{ margin: "0 0 8px 0" }}>{name}</h3>
      <p style={{ margin: "0 0 8px 0", fontSize: "18px", fontWeight: "bold" }}>
        \${price.toFixed(2)}
      </p>
      <span style={{
        backgroundColor: "#e0e7ff",
        color: "#3730a3",
        padding: "3px 8px",
        borderRadius: "12px",
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        {category}
      </span>
    </div>
  );
}

price.toFixed(2) handles the $49.99 formatting. Always two decimals, even when the trailing digit is zero. If I had a $30 product it'd render as $30.00 — usually what you want for prices.`},{q:`Mapping the list with key={product.id}`,a:`function ProductList() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
}

key={product.id} is on the OUTER element returned by map, not inside ProductCard. The key has to be on whatever JSX expression map returns directly. Tomorrow's lecture covered why this matters with edit-able lists — using product.id (a stable identifier on the data) is the right answer here.

Five cards laid out in a flex row, wrapping if the window's narrow. Browser rendered them clean on first try.`},{q:`Could I have passed the whole product object instead of three separate props?`,a:`Yes — <ProductCard key={product.id} product={product} /> and then function ProductCard({ product }) { ... product.name ... }.

Tradeoffs:
- Separate props: explicit contract. ProductCard only knows about the three fields it uses. Easier to test, easier to type in TS later.
- Whole object: less typing at the call site. But the component now depends on the full product shape, which means changing the data shape ripples through every consumer.

For something this small, either works. The "spread the fields" version reads cleaner because the component's API is right there in the destructuring. I'd reach for whole-object passing when the component genuinely needs lots of fields or when I'm passing the same shape through multiple layers.`}]},{heading:`Exercise 3 — Search + Filter`,description:`Add a search input above the product list. Filter the list live as the user types, case-insensitive.`,qa:[{q:`Added searchTerm state and the filter pattern`,a:`import { useState } from "react";

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>

      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "10px",
          fontSize: "14px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "6px"
        }}
      />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
      </div>
    </div>
  );
}

Both sides of .includes() are lowercased so "Head", "head", and "HEAD" all match "Headphones". searchTerm is a controlled input — same pattern as Exercise 1.`},{q:`Verified the live filtering — what does typing each term show?`,a:`Typed "head" → Wireless Headphones (the only match — only one product has "head" in the name).

Typed "book" → JavaScript Textbook, React Handbook. Both match because the substring "book" appears in both "Textbook" and "Handbook". This is a common gotcha with .includes() — substring matching, not whole-word. If a product were named "Cookbook" it would also match.

Typed "electron" → no matches. Interesting one. There are two Electronics products but the filter checks PRODUCT NAME, not category. "Wireless Headphones" doesn't contain "electron" in its name. If I wanted to search across both, I'd OR the two conditions:

.filter(p =>
  p.name.toLowerCase().includes(term) ||
  p.category.toLowerCase().includes(term)
)

Cleared the input → all five products back. Empty string is a substring of every string, so the filter passes everyone through.`},{q:`Why chain .filter().map() instead of doing it in one pass?`,a:`Each method has one job. .filter() returns a new array of items that pass the predicate. .map() returns a new array of transformed items. Chaining them keeps the intent obvious — "narrow first, then render."

You could do it imperatively with a for loop and a conditional inside, but you'd lose the declarative read. The chain reads as a sentence: "products, filter by name, map to cards." That's the React style — describe what you want, not how to compute it.

Both operations are O(n) so the chain is O(2n) which is still O(n). For five products it's irrelevant. For 50,000 it'd be the same — the constant factor doesn't matter, the algorithm shape does.`}]},{heading:`Peer Activity — Component Sketching`,description:`Pair up and sketch the component tree for an app idea. Compare with partner. Where does state live?`,qa:[{q:`Which app I picked and why`,a:`Recipe list with search and category filters. Closest substrate to the product list I just built, so I could lean on the pattern. Also plant-based recipe filtering is something I'd actually use — the kind of project I'd ship to my portfolio.`},{q:`My component tree sketch`,a:`RecipeApp (owns recipes, searchTerm, selectedCategory state)
├── Header
├── SearchBar           — props: searchTerm, onSearchChange
├── CategoryFilter      — props: categories, selected, onSelect
├── RecipeList          — props: recipes (filtered), onFavorite
│   └── RecipeCard      — props: recipe, onFavorite
│       └── FavoriteButton — props: isFavorite, onToggle
└── EmptyState          — shown when filtered list is empty

State lives in RecipeApp at the top. SearchBar and CategoryFilter are controlled — they receive their current value and a change callback. RecipeList just receives the already-filtered array and doesn't know about searching/filtering at all. That's the separation: filtering logic lives ABOVE the list, the list just renders.

Drew arrows showing data going down (recipes, searchTerm, selectedCategory) and events going up (onSearchChange, onSelect, onFavorite). Standard "data down, events up" React shape.`},{q:`Comparing with partner — where did we break things differently?`,a:`Partner had FavoriteButton inlined into RecipeCard rather than pulling it out as its own component. They argued it's a tiny piece (a button with a star icon) and pulling it out adds indirection for no benefit. Fair point.

I argued that breaking it out makes it testable in isolation and lets the favorite animation/state live in one place. But honestly, for an app this size, their version is probably cleaner. Premature decomposition is a real thing — I've over-componentized before and ended up with twenty files when five would do.

Where we agreed: state has to live above SearchBar and CategoryFilter. Neither of us put the filters in individual cards (which would be a mess — the card has no business knowing the filter state).

Where we diverged: I had searchTerm and selectedCategory as two separate useState calls. They had a single useState({ search: "", category: "All" }) object. Both work. Theirs makes it easier to add more filter fields later without growing the useState count. Mine makes each piece update independently without spreading.`},{q:`What this exercise taught me about 'thinking in React'`,a:`The hardest part isn't the syntax — it's deciding where state lives and what counts as a component. Sketching first means you make the decisions explicitly instead of letting them happen by accident when you're typing.

The lift-state-up question is the one I'll keep hitting. State always wants to live at the lowest level that has access to everything that needs to read or change it. SearchBar can't own searchTerm if RecipeList needs to read it to filter. So it lifts to the parent that owns both.

This is the same problem I solved at Hype Live with Redis state across services — different scale, same shape. Where does the source of truth live? Who reads it? Who writes it? Get those three questions right and the rest follows.`}]},{heading:`Exercise 4 — Category Filter with Conditional Rendering`,description:`Add category filter buttons (All / Electronics / Books / Clothing). Chain a second filter. Show 'No products found' when the list is empty. Highlight the active button.`,qa:[{q:`Added selectedCategory state and the chained filters`,a:`const [searchTerm, setSearchTerm] = useState("");
const [selectedCategory, setSelectedCategory] = useState("All");

const categories = ["All", "Electronics", "Books", "Clothing"];

const visibleProducts = products
  .filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

The category filter is the second .filter() in the chain. It returns true unconditionally when "All" is selected (passes everything through) and otherwise checks for an exact category match. Ternary inside the filter callback — clean.

The categories array is hardcoded for now. In a real app I'd derive it from the data:
const categories = ["All", ...new Set(products.map(p => p.category))];

Set deduplicates, spread converts back to array, prepend "All". One line. Would do that next round.`},{q:`Filter buttons with active-state highlighting`,a:`<div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        border: "2px solid",
        borderColor: selectedCategory === category ? "#1a1a2e" : "#ccc",
        backgroundColor: selectedCategory === category ? "#1a1a2e" : "white",
        color: selectedCategory === category ? "white" : "#333",
        borderRadius: "6px",
        fontWeight: selectedCategory === category ? "bold" : "normal"
      }}
    >
      {category}
    </button>
  ))}
</div>

The selectedCategory === category check is everywhere in the style — that's the trade for inline styles. In a real app I'd extract this to a className that flips based on a single isActive boolean, but for now inline ternaries are fine. Four properties flip together when you click a different button.`},{q:`Conditional rendering — empty state vs the list`,a:`{visibleProducts.length === 0 ? (
  <p style={{ color: "#999", fontStyle: "italic", textAlign: "center", padding: "40px" }}>
    No products found.
  </p>
) : (
  visibleProducts.map((product) => (
    <ProductCard
      key={product.id}
      name={product.name}
      price={product.price}
      category={product.category}
    />
  ))
)}

Ternary instead of && because there's a real "else" branch — show the list. With && I'd just be hiding the empty state when there are results, but I'd still need to render the list somewhere. The ternary keeps both branches at the same level of the tree.

The empty state fires when you search for something nonexistent or pick a category with no matches. Tried searching "zzz" — got the empty message. Picked Books and searched "head" — empty (no books contain "head"). The double filter narrows fast.`},{q:`Edge case — what happens when I search 'electron' with category 'Electronics' selected?`,a:`Empty list. "No products found."

Why: the search filter checks .name (not .category). None of the product names contain "electron" — only the category does. So the first filter strips everything, the second filter has nothing left to narrow, and visibleProducts is [].

This is the search behavior the user might not expect — "I'm in the Electronics tab, surely 'electron' matches?" Realized this is a UX bug in the making. The fix would be searching name OR category, or maybe disabling the search bar when a category is selected. Worth noting for any real product list I build.`}]},{heading:`Exercise 5 — To-Do App`,description:`The classic. Forms + state + lists + events + conditional rendering, all together. Trace through the starter, then extend.`,qa:[{q:`Tracing — what happens when I type 'Buy groceries' and click Add`,a:`1. Every keystroke fires onChange on the input → setInputValue updates inputValue character by character.
2. After typing, inputValue is "Buy groceries", todos is still [].
3. Click Add → form's onSubmit fires → addTodo(e) runs.
4. e.preventDefault() stops the page reload.
5. inputValue.trim() === "" check → false (non-empty), so we don't return early.
6. Build newTodo = { id: Date.now(), text: "Buy groceries", completed: false }.
7. setTodos([...todos, newTodo]) → spread the empty array, append newTodo → new array is [newTodo].
8. setInputValue("") → input clears.
9. React re-renders. The list shows one <li> with "Buy groceries". The "0 items remaining" line becomes "1 item remaining" (singular handled by the ternary). The "No tasks yet" message disappears because todos.length is no longer 0.

That's the full flow from keystroke to render. Nine steps. Three pieces of state involved (inputValue, todos, and React's internal re-render scheduling).`},{q:`Tracing — what happens when I check the checkbox on 'Buy groceries'`,a:`1. Click the checkbox → its onChange fires → toggleTodo(1) runs (1 is the id, Date.now()-derived).
2. Inside toggleTodo: todos.map(...) walks every todo. For the one whose id matches (id === 1), returns a new object: { ...todo, completed: !todo.completed } → completed flips from false to true. Every OTHER todo is returned unchanged.
3. setTodos(...) gets the new array — same length, but the matching item is a new object.
4. React re-renders. The matching <li>'s checkbox is now checked (because checked={todo.completed} reads the new true). The text gets style={{ textDecoration: "line-through" }} via the inline ternary. Strikethrough appears.
5. The remainingCount recalculates: todos.filter(t => !t.completed).length → 0 now, since the one todo is completed. Footer reads "0 items remaining".

The {...todo, completed: !todo.completed} is the spread-then-override pattern. Copy every field, then override one. New object, new reference, React sees the change.`},{q:`Tracing — what happens when I click Delete on 'Buy groceries'`,a:`1. Click Delete → onClick fires → deleteTodo(1) runs.
2. todos.filter(t => t.id !== 1) — returns a new array with everything EXCEPT the matching item. So [{id: 1, ...}] becomes [].
3. setTodos([]) → state replaced with empty array.
4. React re-renders. The <ul> is now empty (map over [] produces nothing). The "0 items remaining" line shows. The "No tasks yet. Add one above!" message reappears because todos.length === 0 is true again.

Three operations, three patterns: add uses spread ([...todos, newTodo]), toggle uses map (return new object for the match, untouched for the rest), delete uses filter (keep everything that ISN'T the match). Each one returns a new array — no mutation, ever.`},{q:`Extension — 'Clear completed' button`,a:`Added below the list:

const clearCompleted = () => {
  setTodos(todos.filter((todo) => !todo.completed));
};

{todos.some((t) => t.completed) && (
  <button onClick={clearCompleted} style={{ marginTop: "12px" }}>
    Clear completed
  </button>
)}

Same filter pattern as deleteTodo, just inverted — keep the items that are NOT completed. The button only renders when there's at least one completed item to clear, so it doesn't sit there inert. todos.some(...) short-circuits as soon as it finds one completed item.`},{q:`Extension — All / Active / Completed filter buttons`,a:`Added const [filter, setFilter] = useState("All") and three buttons that call setFilter.

const visibleTodos = todos.filter((todo) => {
  if (filter === "Active") return !todo.completed;
  if (filter === "Completed") return todo.completed;
  return true; // "All"
});

Then mapped visibleTodos instead of todos for the list rendering. The actual todos array stays intact — the filter only affects what's displayed. So if I'm on "Active" and I complete an item, it disappears from the view but it's still in todos, just hidden by the filter. Tested: completed an item while on Active view → item vanished. Switched to Completed → it appeared there. Switched to All → everything visible.

The remainingCount and the underlying data don't change based on the filter view. That separation is important — UI state (which tab is active) is distinct from data state (what's in the list).`},{q:`Extension — styling pass`,a:`Pulled the inline styles into a slightly more polished look. Card-style container, soft shadows, color-coded buttons (green for Add, red-tinted X for delete, dark for active filter). Used a single accent color (#3b82f6 blue) consistently.

Didn't pull in Tailwind for this since the exercise wanted vanilla inline. If I were keeping this app, I'd convert to Tailwind or CSS modules next round. Inline styles work but they don't scale — same prop spread everywhere, no hover states, can't use pseudo-selectors. Fine for a 50-line component, painful for anything bigger.`}]},{heading:`Exercise 6 — Component Decomposition`,description:`Refactor the to-do app into separate components. TodoApp owns state and passes callbacks down.`,qa:[{q:`TodoItem — receives todo, onToggle, onDelete`,a:`function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li style={{
      display: "flex",
      alignItems: "center",
      padding: "8px",
      borderBottom: "1px solid #eee"
    }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        style={{ marginRight: "12px" }}
      />
      <span style={{
        flex: 1,
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "#999" : "#333"
      }}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        style={{ background: "none", border: "none", color: "#e74c3c", cursor: "pointer" }}
      >
        Delete
      </button>
    </li>
  );
}

TodoItem doesn't know what "toggle" or "delete" actually do — it just calls the function it was handed with the id. Same pattern as the favorites list yesterday. The parent owns the logic, the child fires the event.`},{q:`TodoList — receives todos array and the two callbacks`,a:`function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p style={{ color: "#999", textAlign: "center" }}>No tasks yet. Add one above!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

The empty-state check moves into TodoList — that's its concern, not TodoApp's. TodoList knows what "no items" looks like in the list. TodoApp doesn't need to.

Note: passed the entire todo object to TodoItem rather than spreading the fields. For this case the object IS the unit — TodoItem only ever wants to display one todo, so the prop name matches the concept.`},{q:`TodoForm — manages its own inputValue state internally`,a:`function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onAdd(inputValue.trim());
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        style={{ flex: 1, padding: "10px", fontSize: "14px" }}
      />
      <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#2ecc71", color: "white", border: "none", cursor: "pointer" }}>
        Add
      </button>
    </form>
  );
}

This is the interesting one. inputValue is OWNED BY TodoForm — TodoApp doesn't need to know what's currently typed, only what the user finally submitted. So inputValue stays local, and TodoForm calls onAdd(text) with just the trimmed final string when the user submits.

The empty-check also lives here. The trim() happens here. TodoApp's onAdd implementation can assume it's getting a clean non-empty string. Each component owns one piece of the contract.

This is "lifting state up" applied in reverse — keeping state DOWN where it belongs. Just because the parent COULD own inputValue doesn't mean it should.`},{q:`TodoStats — just receives a number`,a:`function TodoStats({ remainingCount }) {
  return (
    <p style={{ color: "#666", fontSize: "14px" }}>
      {remainingCount} item{remainingCount !== 1 ? "s" : ""} remaining
    </p>
  );
}

The simplest of the lot. One prop in, one line out. The pluralization ternary lives here because it's a display concern — singular vs plural is how this component speaks, nothing else cares.

Could have called it TodoCount or TodoFooter. Named it Stats because if I add more stats later (completed count, total time, whatever), they'd land here.`},{q:`TodoFilters — All / Active / Completed`,a:`function TodoFilters({ currentFilter, onFilterChange }) {
  const filters = ["All", "Active", "Completed"];

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onFilterChange(f)}
          style={{
            padding: "6px 12px",
            cursor: "pointer",
            border: "1px solid",
            borderColor: currentFilter === f ? "#3b82f6" : "#ccc",
            backgroundColor: currentFilter === f ? "#3b82f6" : "white",
            color: currentFilter === f ? "white" : "#333",
            borderRadius: "4px"
          }}
        >
          {f}
        </button>
      ))}
    </div>
  );
}

Same pattern as the category filter buttons in Exercise 4. TodoFilters doesn't track which filter is active itself — TodoApp does (because TodoApp uses it to filter the list before passing to TodoList). TodoFilters just gets the current value and a setter.`},{q:`TodoApp — the composer that holds state and wires everything`,a:`function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const visibleTodos = todos.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>To-Do List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoFilters currentFilter={filter} onFilterChange={setFilter} />
      <TodoList todos={visibleTodos} onToggle={toggleTodo} onDelete={deleteTodo} />
      <TodoStats remainingCount={remainingCount} />
    </div>
  );
}

export default TodoApp;

The whole composition fits in 30 lines. TodoApp doesn't know how the form looks, doesn't know how items render, doesn't know how the filter buttons style themselves. It owns the data (todos, filter) and the functions that change it. Everything else is delegated.

This is the shape every NestJS controller had at Hype Live too — the controller doesn't do the work, it routes to services and returns the result. Same instinct, different layer.`},{q:`What I noticed after decomposing`,a:`Three things.

First — the file went from one 60-line component to six smaller ones totaling maybe 120 lines. MORE code, not less. But each piece is easier to read in isolation, and I can change one without touching the others. Worth the tradeoff for anything beyond a toy.

Second — the prop drilling is real even at this small scale. onToggle goes TodoApp → TodoList → TodoItem. Two hops for a function that doesn't change. For three hops or more, that's where Context or a store starts to make sense. Not yet, but I see the shape of the problem.

Third — TodoForm owning its own inputValue felt right. There's a real architectural question of what state belongs to the parent vs the child. Rule of thumb I'm landing on: if no other component needs the data, it stays local. The form's draft text is local to the form. The submitted todos are shared, so they live in the parent.`}]},{heading:`Exercise 7 — Apply Codex CLI to Your React Work`,description:`Run a focused Codex CLI session. Scope a small task. Read the diff. Decide. Log the session.`,qa:[{q:`Step 1 — Goal scoped before starting`,a:`One sentence: I want to add localStorage persistence to src/TodoApp.jsx so the todos array survives a page refresh, using a useEffect that runs when todos changes.

Picked this from the suggestion list because it's a real-world feature that matters (every to-do app needs it) and it's exactly 5-10 lines if done right. No new UI, no scope creep, just one persistence hook.`},{q:`Step 2 — Tried myself first (1-2 min)`,a:`Sketched in my notes:
- useState initializer reads from localStorage on first mount: useState(() => JSON.parse(localStorage.getItem("todos")) || [])
- useEffect with [todos] dep array writes to localStorage whenever todos changes

Two pieces. Both go in TodoApp where todos lives. Should be straightforward. The function-as-initial-state trick is the part I'm least sure about — I think useState(() => ...) only runs the function once on mount, but I want to verify the syntax.

This is the "sketch the shape" step from the four-step method. Didn't write the actual code. Just confirmed I had a mental model before asking Codex CLI for help.`},{q:`Step 3 — The actual prompt I sent`,a:`"In src/TodoApp.jsx, add localStorage persistence to the todos state. On initial render, load todos from localStorage if present. Whenever todos changes, save it back to localStorage. Use the existing useState pattern and add useEffect from react. Show me the diff before applying, and don't change anything else in the file."

Notes on the prompt:
- Referenced the file by exact path
- Specified BOTH directions of persistence (read on mount, write on change)
- Asked for the diff before applying — gives me a chance to read it
- Told it not to change anything else — guardrails against scope creep
- Mentioned the existing useState pattern so it matches the existing style`},{q:`Step 4 — What came back, and my decision`,a:`Codex CLI returned a diff:

+ import { useState, useEffect } from "react";
- import { useState } from "react";

  function TodoApp() {
-   const [todos, setTodos] = useState([]);
+   const [todos, setTodos] = useState(() => {
+     const saved = localStorage.getItem("todos");
+     return saved ? JSON.parse(saved) : [];
+   });
    const [filter, setFilter] = useState("All");
+
+   useEffect(() => {
+     localStorage.setItem("todos", JSON.stringify(todos));
+   }, [todos]);

5 lines added, 2 lines modified. Touched only the imports, the useState initializer, and added the useEffect. Didn't touch any handlers, didn't add error handling, didn't try to extract a custom hook.

Decision: KEEP with one modification.

Modification: wrapped the JSON.parse in a try/catch. If localStorage has corrupted data (e.g., someone manually edited it), the parse throws and the app crashes on load. Defensive coding I learned the hard way at Hype Live with Redis caches.

Final initializer:
useState(() => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
});`},{q:`Result — did it work?`,a:`Refreshed the browser — todos persisted. Added three items, refreshed, all three still there. Marked one complete, refreshed, the completed state survived. Cleared completed, refreshed, the list was correct.

One follow-up I had to make myself: when the page loads, useEffect fires once with the initial todos (already loaded from localStorage) and writes them BACK to localStorage. Wasteful but harmless. A more careful version would use a ref to skip the first write. Not worth the complexity for a 5-line feature.`},{q:`One thing I'd do differently next session`,a:`My prompt didn't specify what key to use in localStorage. Codex CLI picked "todos" which is fine, but I should have spelled it out — in a real app I'd want something namespaced like "todoapp.v1.todos" so I can version the storage schema if the shape changes later.

Lesson: be specific about strings that get committed to storage (or URLs, or env var names). Those are the bits that are hard to change later and the AI will pick whatever's most obvious if you don't say.`},{q:`cli-session-log.md — the actual log file I created`,a:`# CLI Session Log — Week 5 Day 3

**Goal (one sentence):**
Add localStorage persistence to src/TodoApp.jsx so the todos array survives a page refresh.

**Prompt:**
"In src/TodoApp.jsx, add localStorage persistence to the todos state. On initial render, load todos from localStorage if present. Whenever todos changes, save it back to localStorage. Use the existing useState pattern and add useEffect from react. Show me the diff before applying, and don't change anything else in the file."

**What came back (summary of the diff):**
Added useEffect to the react import. Changed the useState([]) to a function-form initializer that reads from localStorage. Added a useEffect with [todos] dep that writes to localStorage on every change. 5 lines added, 2 modified. Did not touch handlers or other state.

**Decision:** Modify
Kept the structure but wrapped JSON.parse in a try/catch to handle corrupted localStorage data. Saw that gotcha at Hype Live with bad Redis cache reads — better to default to [] than crash on load.

**Result:**
Works. Refreshed the page multiple times with various states (empty, items added, items completed, items deleted). All persisted correctly. Noticed a minor inefficiency — the useEffect writes once on mount with the just-loaded data, redundant but harmless.

**One thing I'd do differently next session:**
Specify the localStorage key explicitly in the prompt. Codex CLI picked "todos" which works, but a namespaced/versioned key like "todoapp.v1.todos" would be safer for future schema changes. Generally: be explicit about strings that get committed to persistence or external systems.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Walk partner through the Codex CLI session from Exercise 7. Two minutes per person.`,qa:[{q:`My 2-minute walkthrough`,a:`My goal: add localStorage persistence to the to-do app so todos survive a page refresh. Scoped to one file, src/TodoApp.jsx, and one feature — load on mount, save on change.

Before I prompted, I sketched the shape in my notes. Two pieces — a useState initializer function that reads from localStorage, and a useEffect that writes to localStorage whenever todos changes. Took maybe 90 seconds to think through.

Then I wrote the prompt. Here it is:

"In src/TodoApp.jsx, add localStorage persistence to the todos state. On initial render, load todos from localStorage if present. Whenever todos changes, save it back to localStorage. Use the existing useState pattern and add useEffect from react. Show me the diff before applying, and don't change anything else in the file."

What came back: a diff with 5 lines added and 2 modified. Updated the import to include useEffect. Changed useState([]) to useState with a function-form initializer that reads from localStorage. Added a useEffect with todos in the dep array that writes back.

I modified one thing — wrapped the JSON.parse in a try/catch. If localStorage has corrupted data the parse throws, and I don't want the app to crash on load. Hype Live had a bug like that with a bad Redis cache once. Better to default to an empty array than to break.

Applied it, refreshed the browser a bunch of times with different states. All persisted. Done.

One thing I'd do differently: be explicit about the localStorage key in my prompt. The AI picked "todos" — fine for this exercise, but in a real app I'd want it namespaced and versioned.`},{q:`Partner's follow-up and my answer`,a:`Partner's question: "Why did you ask for the diff before applying instead of just letting it apply directly?"

My answer: Two reasons. First, the four-step method requires it — you can't make a real keep/reject/modify decision if you didn't read the diff. If I let it auto-apply, I'm just trusting the AI, which is the exact thing the program is teaching me NOT to do.

Second, on a real codebase, applied changes are sometimes hard to back out — touch the wrong file, change something subtle, and now I'm rolling back a commit. Reading the diff first means I never get into that state in the first place.

It also forces me to actually understand what's being added. If I can't follow the diff line by line, that's a signal I'm in over my head and should slow down. Cheap insurance.`},{q:`Reflection — what saying it out loud surfaced`,a:`Telling the story made me realize I skipped a step in my notes. I had "sketch the shape" written down, but when I described it out loud I noticed I didn't actually write out the pseudocode — I just thought about it. The discipline of the method works better when the thinking is on paper, not in my head, because I can compare what I sketched to what came back.

Next session I'll force myself to write the sketch in the cli-session-log.md BEFORE the prompt. Same file, just earlier. That way the log itself becomes the artifact that captures the discipline.

Also: my partner's question about reading diffs was the right one. The whole point of the method is the human-in-the-loop check. The day I stop reading diffs is the day I stop being a developer and become a copy-paste machine.`}]},{heading:`Going Deeper — Read the Docs`,description:`Picked option 3: skim codex --help, find a feature I didn't know existed, try it in a real session.`,qa:[{q:`Why I picked the docs option`,a:`The multi-file option felt like a bigger time investment, and I already decomposed into multiple files in Exercise 6 — the lesson of "diffs that touch multiple files" wasn't novel. The "compare two agents" option needed me to spin up another tool I don't have set up.

Reading the docs is the unglamorous option. But it's also the one with the highest expected value per minute — I've used Codex CLI for one whole session and there's almost certainly a feature I haven't touched that would change how I use the tool.`},{q:`The feature I found`,a:`Slash commands inside a session. Specifically /clear — resets the conversation context without exiting the CLI. Before this I was either exiting and restarting (slow) or just piling new tasks into the same context (which the lab notes explicitly warn against because of scope creep and confused state).

/clear is the right tool for "I finished one task, now I want to start a clean second task in the same project." Same shell session, fresh AI context. Avoids re-entering the project directory, avoids re-establishing context, but doesn't carry over the previous task's conversation.`},{q:`Tried it in a real session`,a:`Finished the localStorage feature, typed /clear, then started a new mini-task: "In src/TodoApp.jsx, add a 'Completed: N' line next to the existing 'X items remaining' line." Tiny scope, just one more stat.

What I noticed: the AI didn't reference any of the previous conversation. Asked it about "the persistence we just added" as a test — it didn't know what I was talking about. Clean slate confirmed.

One sentence on what /clear does: it resets the AI's conversation memory within a Codex CLI session without ending the session, so the next prompt starts fresh while you stay in the same project directory.`}]},{heading:`Coding Challenge — React Component Refactor (#13)`,description:`Ran the challenge as a Codex CLI session. Same four-step method. Optional but worth the rep.`,qa:[{q:`The starter — what the monolithic component looked like`,a:`60-line component doing too much: a contact list with search, sort, a form to add contacts, an edit-in-place feature, and a delete button. All in one function. Mixed responsibilities — the form's state was tangled with the list's state, the sort logic was inline inside the JSX, and the same styles were repeated four or five times.

This is the kind of component every junior dev writes (myself included, in my pre-Hype Live work). It works, but every change you make risks breaking something unrelated.`},{q:`Step 1 — Goal scoped`,a:`Break the monolithic component into focused sub-components, modeled on the same decomposition I just did for the to-do app in Exercise 6. Target structure:

ContactApp (holds state)
├── ContactForm (owns its own form state)
├── ContactSearch (controlled input)
├── ContactSort (sort direction toggle)
└── ContactList
    └── ContactItem

State that's shared (contacts, searchTerm, sortDirection) lives in ContactApp. State that's local (the form's draft fields) lives in ContactForm.`},{q:`Step 2 — Tried myself first`,a:`Looked at the monolithic file. Identified five boundaries where I'd cut. The form was the cleanest extraction — it had its own state already (just inlined in the parent) and a clear submit handler. The list of items was the next-cleanest.

The trickier piece was the search + sort. Both were doing array transforms on the contacts list. I decided to keep the filter/sort logic in ContactApp (single source of truth for "what's visible") and just extract the input controls as pure UI components.

This is the same pattern from Exercise 4 — filtering logic lives ABOVE the list. Confirmed by sketching for 90 seconds before writing the prompt.`},{q:`Step 3 — The prompt I sent`,a:`"Refactor src/ContactApp.jsx into separate components. Target structure: ContactApp holds the contacts, searchTerm, and sortDirection state. Extract ContactForm (with its own form state), ContactSearch (controlled input), ContactSort (toggle button), ContactList, and ContactItem. Pass callbacks down for add/edit/delete/toggle. Don't change behavior — just decompose. Show me the diff and put each new component in src/components/ as its own .jsx file."

Specified the target structure explicitly because I'd already designed it. Asked for separate files in src/components/ to enforce the boundaries. "Don't change behavior" is a critical guardrail for refactors — the AI loves to "improve" things while it's in there, and I want to verify the refactor before any feature changes.`},{q:`Step 4 — Reading the diff and decision`,a:`Codex CLI returned six new files and a heavily modified ContactApp.jsx. Read each one.

Things I accepted:
- The component boundaries matched my sketch exactly.
- Props/callbacks were named consistently (onAdd, onEdit, onDelete, onToggleSort).
- The form state stayed local to ContactForm.

Things I modified:
- ContactItem received the full contact object PLUS three separate callback props. Refactored to receive contact + a single onAction prop that takes an action type — cleaner API surface, easier to test. Pushed back on the AI's first instinct here.
- The sort logic was duplicated inline in ContactApp's render. Pulled it into a named function sortContacts(contacts, direction) at the top of the file. Easier to reason about, easier to test in isolation later.

Things I rejected:
- AI added PropTypes imports and validation to every component. Useful in some projects, overkill for a 5-component refactor. Removed.

Final result: 7 files, total LOC went UP from 60 to about 180. But every file is under 40 lines, each has one job, and the seam where state crosses component boundaries is explicit. That's the trade.`},{q:`Result and reflection`,a:`Ran the app after refactor. All four original features worked: add, edit-in-place, delete, search+sort. No behavior changed (which was the goal). The Coding Challenge passed its acceptance criteria.

Three observations:

First — the AI is genuinely good at this kind of mechanical refactor. Component extraction with explicit boundaries is a high-pattern task and Codex CLI nailed the structure. Where it needed pushback was the API design (onAction vs three callbacks) and the over-eager additions (PropTypes).

Second — having the to-do app decomposition from Exercise 6 in my recent memory made this 10x faster. Same pattern, different domain. The skill compounds.

Third — the "don't change behavior" guardrail is the single most valuable line in the prompt. Without it, the AI would have "fixed" three things while it was refactoring. With it, the diff is reviewable. Refactor and feature change are two separate operations, and they should never share a commit.`},{q:`Logged in cli-session-log.md as session #2`,a:`Added a second entry to the same log file, separated with a divider. Same template — goal, prompt, what came back, decision, result, what I'd do differently.

The "what I'd do differently" for this one: I could have skipped specifying the file structure (src/components/...) and let Codex CLI propose its own. Mine matched what I'd have chosen, but the lab is partly about learning what GOOD looks like — and sometimes the AI's defaults teach you a convention you didn't know.

Two sessions logged in one day. That's the rep the Phase 2 gate is measuring.`}]}]},{number:21,label:`Day 4`,title:`Week 5, Day 4 — Fetching Real Data from APIs`,subtitle:`useEffect, async/await, the loading/data/error pattern, environment variables, and the first real API call for Phase 2.`,color:`#10b981`,sections:[{heading:`Exercise 1 — Fetch and Display Posts`,description:`Fetch 10 posts from JSONPlaceholder on mount. Show loading, then render. First real useEffect + fetch combo.`,qa:[{q:`Tracing the 4-step lifecycle before running anything`,a:`Step 1: Component renders for the first time. State is { posts: [], loading: true, error: null }. The if (loading) return <p>Loading posts...</p> branch fires. User sees "Loading posts..."

Step 2: useEffect runs AFTER the first render (this is important — the effect doesn't block the render). fetchPosts() kicks off. A request goes out to JSONPlaceholder. Component is still showing the loading message because none of the state has changed yet.

Step 3: Response comes back ~200ms later. setPosts(data) stores the 10 posts. setLoading(false) hides the loading message. The finally block runs regardless of success or failure.

Step 4: Two state changes from step 3 trigger a re-render. Now loading is false, posts has data. The loading branch is skipped, the error branch is skipped, the main return runs. .map() walks the array and renders 10 post cards.

That's the whole pattern. State drives the view. Effects run after render. Async work updates state, which triggers another render.`},{q:`Why the empty dependency array on useEffect — what does [] mean?`,a:`The dep array tells React WHEN to run the effect. Empty array = "run this effect once, after the first render, and never again."

If I left the array off entirely → effect would run after every render → infinite loop the moment setPosts triggers a re-render, because the re-render would fire the effect again, which would fetch again, which would setPosts again. Classic React newbie footgun.

If I put a variable in the array → effect runs whenever that variable changes. So [username] would re-fetch every time username changes — that's the pattern for Exercise 3's GitHub search if you wanted live results instead of click-to-search.

[] is "fetch on mount only." Right answer for this exercise — the data doesn't depend on anything that changes.`},{q:`Modifications — post number, styled cards, character count`,a:`Added all three. Inline so the structural change is visible at the call site.

{posts.map((post, index) => (
  <div
    key={post.id}
    style={{
      backgroundColor: "#f8fafc",
      border: "1px solid #e2e8f0",
      borderRadius: "12px",
      padding: "20px",
      margin: "12px 0",
      boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
    }}
  >
    <h2 style={{ margin: "0 0 8px 0" }}>
      #{index + 1}: {post.title}
    </h2>
    <p style={{ margin: "0 0 8px 0", lineHeight: "1.5" }}>{post.body}</p>
    <p style={{ margin: 0, fontSize: "12px", color: "#64748b" }}>
      {post.body.length} characters
    </p>
  </div>
))}

Used index + 1 for the post number because the assignment said "#1, #2..." (1-indexed, human-readable). post.id from the API would also work but the IDs aren't sequential in real data — they're database IDs. The 1-indexed counter is for display.

Background: soft gray-blue (#f8fafc), rounded corners, subtle shadow. Looks more like a real card and less like a default browser box.`},{q:`What I noticed about the body lengths`,a:`Most JSONPlaceholder post bodies are 150-250 characters. They're lorem-ipsum-style — not real content, but real-looking shapes. The character count is a nice debug tool — confirms the data actually loaded and that body isn't undefined or empty.

This is also the kind of derived display I'd build into a real content app. "Reading time: 3 min" is just body.length / averageWordsPerMinute. Once you have the data, derived values are free.`}]},{heading:`Exercise 2 — Error Handling`,description:`Break the fetch URL on purpose. See what happens. Replace the raw error with a friendly UI.`,qa:[{q:`Changed the URL to /BROKEN — what actually happened?`,a:`Interesting gotcha. The fetch did NOT throw an error. It resolved successfully — with response.ok === false and response.status === 404.

This trips people up. fetch only rejects the promise on actual network failures (no internet, DNS resolution failed, CORS preflight rejected). A 404 or 500 is a successful HTTP response from fetch's perspective — the server replied. You have to manually check response.ok and throw if you want the catch block to handle it.

That's exactly what the starter code does:
if (!response.ok) {
  throw new Error("Failed to fetch posts");
}

Without that manual throw, setPosts(data) would run with whatever weird body JSONPlaceholder returns for an unknown route, and the app would silently render nothing or crash on data.map. The manual throw is what makes the try/catch actually do its job.`},{q:`Verified the error state caught it`,a:`Yes — the catch block ran, setError("Failed to fetch posts") fired, finally ran setLoading(false), and the component re-rendered. The if (error) branch returned the error message.

Before adding the friendly UI: showed "Error: Failed to fetch posts" in plain text. Functional but ugly. Looks like a developer dump, not a product.`},{q:`The friendly error UI I dropped in`,a:`if (error) {
  return (
    <div style={{
      padding: "24px",
      maxWidth: "500px",
      margin: "40px auto",
      backgroundColor: "#fef2f2",
      border: "1px solid #fecaca",
      borderRadius: "12px",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#991b1b", margin: "0 0 8px 0" }}>Something went wrong</h2>
      <p style={{ color: "#7f1d1d", margin: "0 0 16px 0" }}>
        We couldn't load the posts. Please try again later.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "10px 20px",
          backgroundColor: "#dc2626",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Retry
      </button>
    </div>
  );
}

Soft red palette — signals "problem" without screaming. The retry button reloads the whole page, which is a blunt instrument but works for an MVP. Better solution would be a refetch function that doesn't reload — just resets state and re-runs the fetch. That's a refactor for later.`},{q:`Fixed the URL back, verified everything works`,a:`Changed the URL back to /posts?_limit=10. Cleared the error state automatically on the next mount. 10 cards rendered cleanly. No leftover red error box.

Quick sanity check before moving on: opened DevTools, throttled the network to "Slow 3G" to see the loading state for more than 50ms. The "Loading posts..." actually shows for a couple seconds — confirms the loading branch is doing its job. Without the throttle the fetch is so fast you don't see the loading state, which makes it easy to miss bugs in that branch.`},{q:`Why this matters — context from real work`,a:`Every API I integrated at Hype Live had error handling like this around it. Kafka producer fails? Catch, log, fall back to direct DB write. Redis read times out? Catch, fall back to a fresh DB query. The "happy path" is maybe 30% of the code in any real integration — the rest is "what if this fails."

Most newbie code doesn't have error handling. It crashes on network blips and the user sees a white screen. Adding a friendly error UI is a 5-minute task that makes the difference between "this feels broken" and "this feels resilient."`}]},{heading:`Peer Activity — API Exploration`,description:`Browse public-apis or publicapis.dev. Find 3 APIs. Test one. Share with partner.`,qa:[{q:`The three APIs I picked`,a:`1. Open Food Facts — https://world.openfoodfacts.org/api/v2/
   Returns: ingredient lists, allergens, vegan/vegetarian/palm-oil flags, nutritional data for almost any packaged product (search by barcode or name).
   Auth: none.
   Why I picked it: plant-based diet angle. Could build a "is this vegan?" lookup tool.

2. NYC Open Data 311 — https://data.cityofnewyork.us/resource/erm2-nwe9.json
   Returns: 311 complaint records — type, borough, status, dates, location. The dataset I'm already using on The Block Report.
   Auth: optional (higher rate limits if you register an app token, otherwise capped at 1000 reqs/hour).
   Why I picked it: I already know the shape. Listed it for the partner who hadn't worked with civic data before.

3. Open Library — https://openlibrary.org/dev/docs/api/search
   Returns: book metadata — title, author, publisher, ISBN, subjects, cover image URLs.
   Auth: none.
   Why I picked it: actively building a "books to read" list app (the favorites list from Day 2 was the seed). Could plug Open Library into the same component.`},{q:`Which one is relevant to Phase 2`,a:`None of the three directly. My Phase 2 is Canvas Daily — a digest of Canvas LMS assignments for me and my daughter. The Canvas LMS API isn't a "public" API in the public-apis sense — it requires per-user OAuth tokens and is hosted per-institution (canvas.yavapai.edu in my case). You can hit it from a browser if you have a personal access token, but real users would need OAuth.

That's actually the whole architectural question for Phase 2. You can't safely put a Canvas access token in a frontend .env file — the token would ship to every user's browser. The real implementation needs a backend that holds the token, makes the Canvas call server-side, and serves a sanitized response to the frontend.

So my Phase 2 stack:
- Backend (Node/Express or NestJS) holds the Canvas token, hits the Canvas API, returns JSON
- Frontend React app fetches from MY backend, not from Canvas directly

For TODAY's lab I'll use JSONPlaceholder /todos as a stand-in (similar shape to assignments). The fetch pattern is the same — only the URL changes when the real backend is ready.`},{q:`Tested Open Food Facts in a browser tab`,a:`Hit https://world.openfoodfacts.org/api/v2/product/737628064502.json — a random barcode I had on a sauce bottle. Got back a full JSON response: product name, brand, ingredient list in 12 languages, allergen flags, nutritional facts per 100g, vegan status (true), vegetarian status (true), labels (organic, fair trade).

The vegan flag is what hooked me. Could build a "scan a barcode, get vegan verdict" app pretty fast. Also a good Phase 3 idea — if I want to extend my Bust the Myths site into something interactive, this is the API.

JSON response was deeply nested — like 300+ fields. Real apps would pull maybe 10 of those fields and ignore the rest. Mapping API responses to your app's data model is exactly the schema-mapping exercise from Week 4 Day 3.`},{q:`Shared with my partner — what they were excited about`,a:`Partner is building a movie-watchlist app for their Phase 2. I pointed them at TMDb (themoviedb.org) — has movies, TV, posters, cast, ratings — and OMDb. They didn't know about either. They were going to scrape IMDb, which is both against IMDb's TOS and a ton more work than a documented API.

They returned the favor by pointing me at a free OAuth-mocking service so I can prototype the OAuth flow for Canvas Daily without needing a real registered app. Hadn't seen that before. Bookmarked.

This is the value of the peer activity. Half the time you find something better than what you'd have found alone, just by talking to one other person for ten minutes.`}]},{heading:`Exercise 3 — GitHub User Search`,description:`Type a username, click Search, render their profile. Fetch on click — no useEffect needed.`,qa:[{q:`Why fetch-on-click doesn't need useEffect`,a:`useEffect is for "do something AFTER React renders." Specifically, for side effects that need to run on mount, on update, or on unmount — synchronized with the render cycle.

A click is already an event in time. The user did something, I want to respond. I can just call fetch directly in the click handler. No render-cycle synchronization needed. Putting it in useEffect would be wrong — it'd run on every render that the relevant state changed, which isn't what "search button" means.

Rule of thumb:
- useEffect → "when something CHANGES, do X" (mount, prop update, state derived from props)
- Event handler → "when the USER does X, do Y"

Both can call fetch. The wrapper is different.`},{q:`The full GitHubSearch component with modifications applied`,a:`Started from the starter. Added: location, company, followers count (fetched from a second endpoint), profile-card styling, Clear button.

import { useState } from "react";

function GitHubSearch() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [followers, setFollowers] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return;

    setLoading(true);
    setError(null);
    setUser(null);
    setFollowers(0);

    try {
      const userRes = await fetch(\`https://api.github.com/users/\${username}\`);
      if (!userRes.ok) {
        throw new Error(userRes.status === 404 ? "User not found" : "Something went wrong");
      }
      const userData = await userRes.json();
      setUser(userData);

      // Second fetch — followers list, just count it
      const followersRes = await fetch(userData.followers_url);
      if (followersRes.ok) {
        const followersData = await followersRes.json();
        setFollowers(followersData.length);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setUsername("");
    setUser(null);
    setFollowers(0);
    setError(null);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <form onSubmit={handleSearch} style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          style={{ flex: 1, padding: "10px", fontSize: "14px", borderRadius: "6px", border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#10b981", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Search
        </button>
        <button type="button" onClick={handleClear} style={{ padding: "10px 16px", backgroundColor: "#e5e7eb", border: "none", borderRadius: "6px", cursor: "pointer" }}>
          Clear
        </button>
      </form>

      {loading && <p>Searching...</p>}
      {error && <p style={{ color: "#dc2626" }}>{error}</p>}

      {user && (
        <div style={{
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
          textAlign: "center"
        }}>
          <img src={user.avatar_url} alt={user.name} style={{ width: "120px", borderRadius: "50%", border: "3px solid #10b981" }} />
          <h2 style={{ margin: "12px 0 4px 0" }}>{user.name || user.login}</h2>
          <p style={{ color: "#6b7280", margin: "0 0 12px 0" }}>@{user.login}</p>
          <p style={{ fontStyle: "italic", margin: "0 0 16px 0" }}>{user.bio || "No bio available"}</p>

          <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "16px" }}>
            <div><strong>{user.public_repos}</strong><br /><small>repos</small></div>
            <div><strong>{followers}</strong><br /><small>followers</small></div>
            <div><strong>{user.following}</strong><br /><small>following</small></div>
          </div>

          {user.location && <p style={{ margin: "4px 0", color: "#374151" }}>📍 {user.location}</p>}
          {user.company && <p style={{ margin: "4px 0", color: "#374151" }}>🏢 {user.company}</p>}

          <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ color: "#10b981", fontWeight: "bold", textDecoration: "none" }}>
            View on GitHub →
          </a>
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;`},{q:`404 handling — what the user sees when they search a nonexistent username`,a:`Tested with username "thisuserdefinitelydoesnotexist12345". GitHub responded with 404. The !response.ok check threw with the message "User not found". The catch block set the error state. The component re-rendered showing the red error text.

The status === 404 check inside the throw lets me differentiate between "user not found" and other failures. A 403 (rate limit) or 500 (server down) gets the generic "Something went wrong" message. Good UX — the user knows whether to fix their typo or wait a few minutes.

GitHub's rate limit (60/hour unauthenticated) hit me once during testing. The 403 came back as "Something went wrong" — exactly the bucket it belongs in. Would have been nicer to detect 403 specifically and say "Hit GitHub's rate limit, try again in an hour," but I didn't want to over-engineer.`},{q:`Searched octocat — what data came back`,a:`Tested with "octocat" (GitHub's mascot account). Got:
- Name: The Octocat
- Login: octocat
- Bio: null (showed "No bio available")
- Avatar: the classic Octocat image, rendered with the green border I added
- Public repos: 8
- Followers: ~16,000
- Following: 9
- Location: San Francisco
- Company: @github

Card rendered exactly as designed. The conditional rendering on location/company worked — when I searched a user with no location, those rows just didn't show. No empty bullet points or "undefined" leaking into the UI.`},{q:`Reset state order — why I cleared user/followers/error BEFORE the fetch`,a:`Inside handleSearch I do this:
setLoading(true);
setError(null);
setUser(null);
setFollowers(0);

The setUser(null) and setError(null) BEFORE the fetch matter. If I search "octocat" (succeeds), then search "fakeuser123" (fails), I want the octocat card to disappear immediately when the new search starts — not stick around until the fetch fails. Resetting user to null on every new search means the UI shows ONLY the loading state during the request.

Without those resets, the old user data would stay visible during the loading state, then get replaced or get the error stacked on top. Confusing UX. Clearing first means each search starts from a clean slate.

Same instinct as cleaning up state between renders in any other lifecycle — don't let stale data leak across operations.`}]},{heading:`Exercise 4 — Environment Variables`,description:`Move the API base URL into a .env file. Verify it's read correctly. Make sure it's gitignored.`,qa:[{q:`Created .env in the project root`,a:`VITE_API_BASE_URL=https://api.github.com

One line. No quotes, no semicolons. Vite env files are KEY=VALUE pairs, like shell env vars.

Saved as .env (not .env.txt — the leading dot is the whole point, and Windows likes to hide that). Confirmed with ls -la in the terminal that the file is actually there with the right name.`},{q:`Wired the variable into the component`,a:`const API_BASE = import.meta.env.VITE_API_BASE_URL;

const userRes = await fetch(\`\${API_BASE}/users/\${username}\`);
const followersRes = await fetch(\`\${API_BASE}/users/\${username}/followers\`);

(Also updated the followers fetch to use the env var instead of the user.followers_url from the response — same URL, but now it's all coming from one source of truth.)

Pulled the const to the top of the component, above the useState calls. Convention is to put module-level constants up there so anyone reading the file sees "this is where the config comes from" before they see the component logic.`},{q:`Updated .gitignore`,a:`Opened .gitignore (Vite scaffolds one by default). Added:
.env
.env.local
.env.*.local

Most Vite projects come with these already in place. Mine had .env.local but not the bare .env. Added both.

The .env.*.local pattern catches .env.development.local, .env.production.local, etc. — env-specific overrides that contain real secrets. Belt and suspenders.`},{q:`Restarted the dev server — why this step matters`,a:`Vite reads .env files once at startup. Editing .env while the dev server is running does NOT pick up the changes automatically. Have to kill the server (Ctrl+C) and rerun npm run dev.

Forgot this once and spent five minutes wondering why import.meta.env.VITE_API_BASE_URL was undefined. Restarted, it worked. Now it's reflex.

After the restart, the GitHub search worked exactly the same as before. The API_BASE constant resolves to the env var at build time. From the component's perspective nothing changed — same URL, same fetch, same data.`},{q:`Verified with git status — .env did NOT show up`,a:`Ran git status. Output:

On branch main
Changes not staged for commit:
  modified:   src/GitHubSearch.jsx
  modified:   .gitignore

No mention of .env. .gitignore is doing its job — the file exists locally but git isn't tracking it.

To be extra sure, ran git check-ignore .env which printed ".env" — confirming git is explicitly ignoring it. Useful command for debugging when .gitignore patterns aren't working.

This is the habit. Every project I start gets a .env added to .gitignore before I commit a single line. Once a secret hits git history it's effectively leaked — even rewriting history doesn't help if anyone cloned in between.`},{q:`Why the VITE_ prefix is required — what would happen without it`,a:`Vite only exposes env vars to the client-side bundle if they start with VITE_. Any variable WITHOUT that prefix stays server-side / build-time only.

This is a security feature. Imagine I had DATABASE_PASSWORD=secret123 in .env. If Vite exposed everything to the browser, that password would ship in the JS bundle to every user. Catastrophic leak.

By requiring an explicit VITE_ prefix, Vite forces you to opt-in to "yes, this is safe to ship to the browser." The default is "no, this is server-only." That's the right default.

So:
- VITE_API_BASE_URL → exposed to import.meta.env (safe — it's just a URL)
- API_SECRET_KEY → NOT exposed, blocked by Vite (correct — secrets don't belong in the browser)

If I try import.meta.env.API_SECRET_KEY in a component, it's undefined. Vite is silently protecting me. The whole "no secrets in the frontend" rule is enforced by the prefix convention.`}]},{heading:`Exercise 5 — Phase 2 Project: First API Connection`,description:`Wire a public API into a component for Canvas Daily. Hit the CORS/auth wall on Canvas itself, mock with JSONPlaceholder /todos as a stand-in.`,qa:[{q:`Picking the API — Canvas reality check`,a:`My Phase 2 is Canvas Daily, which means the "right" API is Canvas LMS. Canvas has a documented REST API at /api/v1/users/self/courses, /api/v1/courses/:id/assignments, etc. Tried the direct browser approach first.

Two problems I hit:
1. CORS — Canvas (canvas.yavapai.edu/api/v1/...) doesn't include Access-Control-Allow-Origin headers for arbitrary browser origins. Direct fetch from localhost gets blocked by the browser before the request even completes. Canvas was never designed to be called from a frontend SPA — it expects backend integrations.
2. Auth — Canvas API requires a personal access token in the Authorization header. Even if CORS worked, putting my token in a VITE_ env var would bake it into the client bundle. Bad. Everyone with the bundle would have my Canvas credentials.

The honest architectural answer: Canvas Daily needs a backend. Express or NestJS server holds the token, makes the Canvas call, returns JSON to the frontend. That's the Week 6 work.

For TODAY's exercise, I'll use JSONPlaceholder /todos as a stand-in. It returns objects with { userId, id, title, completed } — close enough to assignments { studentId, id, title, completed } that the component code works the same way.`},{q:`The stand-in fetch — AssignmentDigest component`,a:`import { useState, useEffect } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com";

function AssignmentDigest() {
  const [assignments, setAssignments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAssignments() {
      try {
        // STAND-IN: hitting JSONPlaceholder /todos until the Canvas backend is built.
        // Real fetch will be: \`\${API_BASE}/api/v1/users/self/upcoming_events\` via our backend proxy.
        const response = await fetch(\`\${API_BASE}/todos?_limit=15\`);
        if (!response.ok) {
          throw new Error("Failed to load assignments");
        }
        const data = await response.json();

        // Map the JSONPlaceholder /todos shape to my Canvas-shaped Assignment type
        const mapped = data.map((todo) => ({
          id: todo.id,
          studentId: todo.userId,
          title: todo.title,
          completed: todo.completed,
          // Fields I'll get from real Canvas API:
          courseName: "Course " + todo.userId,  // placeholder
          dueDate: null,                          // placeholder
          pointsPossible: null,                   // placeholder
        }));

        setAssignments(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAssignments();
  }, []);

  if (loading) return <p>Loading your daily digest...</p>;
  if (error) return <p style={{ color: "#dc2626" }}>{error}</p>;

  const remaining = assignments.filter((a) => !a.completed).length;

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Canvas Daily Digest</h1>
      <p style={{ color: "#6b7280" }}>{remaining} assignments still to do</p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {assignments.map((a) => (
          <li
            key={a.id}
            style={{
              padding: "12px",
              marginBottom: "8px",
              backgroundColor: a.completed ? "#f0fdf4" : "#fefce8",
              borderLeft: \`4px solid \${a.completed ? "#10b981" : "#f59e0b"}\`,
              borderRadius: "6px"
            }}
          >
            <strong style={{ textDecoration: a.completed ? "line-through" : "none" }}>
              {a.title}
            </strong>
            <div style={{ fontSize: "12px", color: "#6b7280" }}>{a.courseName}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssignmentDigest;`},{q:`Schema mapping — comparing the API shape to my Week 4 data model`,a:`Pulled up my Week 4 Day 3 schema sketch. My Assignment table was:

assignments (
  id INTEGER PRIMARY KEY,
  student_id INTEGER REFERENCES students(id),
  course_id INTEGER REFERENCES courses(id),
  title TEXT NOT NULL,
  due_date TIMESTAMP,
  completed BOOLEAN DEFAULT FALSE,
  points_possible NUMERIC,
  canvas_assignment_id INTEGER UNIQUE  -- maps back to Canvas's ID
)

Compared to JSONPlaceholder /todos:
- todo.id → assignment.canvas_assignment_id ✓
- todo.userId → assignment.student_id ✓
- todo.title → assignment.title ✓
- todo.completed → assignment.completed ✓
- (missing) → course_id, due_date, points_possible

The four fields JSONPlaceholder gives me happen to be exactly the minimum viable shape for an assignment. The fields that are MISSING are what I'll get from the real Canvas API. That's a useful exercise — it tells me which parts of my schema are "from Canvas" and which would need to be derived or aggregated.

Mapped the JSONPlaceholder response into my expected shape in the component, leaving the Canvas-only fields as placeholders. When the backend lands, swapping the URL and removing the placeholder mapper is a 3-line change. The component itself doesn't care where the data came from.

This is the abstraction I'd build into any real integration. Data layer in the middle, presentation layer doesn't know about the source.`},{q:`All three states verified — loading, data, error`,a:`Loading: visible on mount for ~150ms before the data arrives. Throttled the network to confirm it shows for a real duration. Says "Loading your daily digest..."

Data: 15 assignment cards render. Completed ones (about a third of them) get a green left border and strikethrough text. Incomplete ones get an amber left border. The header says "X assignments still to do" with the correct count derived from .filter().length.

Error: tested by pointing the URL at /BROKEN-TODOS. The fetch resolved with response.ok=false, the manual throw fired, the catch caught it, setError ran, the error branch returned the red text. Switched the URL back and it cleared on next mount.

Same three-state pattern as Exercise 1, just with my own data shape on top. The skeleton transfers cleanly between projects.`},{q:`What's next for Canvas Daily`,a:`Three things on the roadmap from this point:

1. Backend proxy — Express server with a single endpoint /api/assignments that holds the Canvas token, calls Canvas, returns JSON. The frontend code I wrote today swaps URLs and works the same way.

2. Real Canvas auth — OAuth flow so other users (including my daughter's school account via my observer role) can connect their own Canvas without me holding their tokens. Personal access token works for me, but OAuth is the real answer.

3. Email digest — the cron job that runs the same fetch every morning and emails the digest. That's a backend feature, not frontend, so it's out of scope for today.

The component I built is the foundation. Everything from this point is plumbing.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes to explain one concept out loud. Partner asks one follow-up.`,qa:[{q:`Which concept I picked — loading/data/error, await, or .env`,a:`The loading/data/error pattern. It's the through-line of every exercise today. If you can explain it cleanly you can explain async data fetching in React, period. The other two (await, .env) are useful but narrower.`},{q:`My 2-minute explanation`,a:`Every component that fetches data lives in one of three states. Loading. Data. Error. The whole pattern is a state machine with those three states and rules for moving between them.

State one: loading. The component just mounted. Data is empty. Error is null. The UI shows a spinner or "Loading...". This is the user's first second.

State two: data. The fetch succeeded. Data is populated. Error is still null. Loading flipped to false. The UI shows the real content.

State three: error. The fetch failed. Data is empty (or stale, depending on how you handle it). Error has a message. Loading flipped to false. The UI shows a friendly error message and ideally a retry button.

In code that's three useState calls — one for the data, one for the loading boolean, one for the error string. Then a useEffect that fires the fetch on mount, with a try/catch/finally inside. The try block sets data on success. The catch block sets error on failure. The finally block sets loading to false NO MATTER WHAT.

The reason finally is critical: if I put setLoading(false) at the end of the try block, an error would skip it and the user would be stuck on the loading state forever. Same problem if I put it only in the catch. Finally guarantees it runs in both branches. That's the whole point of finally.

In JSX, the render is a cascade of guards. If loading, return the spinner. Else if error, return the error UI. Else, render the data. Three branches, three states, one rendering rule. Clean.

You'll see this pattern in every React app that talks to an API. Once you internalize the three states, the rest is just deciding what each state looks like for your specific UI.`},{q:`Partner's follow-up and my answer`,a:`Partner asked: what if setLoading(false) was outside the finally block — say at the end of the try block instead?

My answer: then it would only run on success. If the fetch throws, control jumps from wherever in the try block to the catch block, skipping any remaining lines in the try. So setLoading(false) would never run on the error path. The component would be stuck showing "Loading..." forever, with the error state set but never reached because the loading guard intercepts the render first.

The user experience would be: it looks like the page never finished loading. They'd refresh or close the tab. The error would never display, even though the error state in React was correctly set.

Finally exists for exactly this case — code that has to run regardless of which branch of try/catch was taken. State cleanup, resource release, "we're done now" flags. setLoading(false) is the textbook example.

I tested this once at Hype Live by accident — had a cleanup line outside the finally. Didn't see the bug until a real error fired in staging. Now it's a code review thing I look for in every PR that has a try/catch.`},{q:`What saying it out loud surfaced`,a:`Two things.

First — I noticed I said "state machine with three states" out loud and that's actually the cleanest framing I've used for this. Felt useful enough that I'm going to use it again. Loading / data / error IS a state machine. The transitions are explicit (mount, success, failure). You could draw it on a whiteboard with three circles and arrows.

Second — I almost forgot to explain WHY finally matters and only got to it because my prompt told me to. The finally explanation is the most interesting part of the whole pattern, and it's the part newbies skip. Next time I'd lead with finally instead of saving it for the end. "Here are three states, and here's the one trick that makes the cleanup correct." That ordering would land better.`}]}]}]},{label:`Week 6`,days:[{number:22,label:`Day 1`,title:`Week 6, Day 1 — Next.js Intro: Routing, Layouts, Server vs Client`,subtitle:`File-based routing, shared layouts, the 'use client' directive, and scaffolding Phase 2 routes.`,color:`#6366f1`,sections:[{heading:`Exercise 1 — Create and Explore a Next.js Project`,description:`Spin up a Next.js project with create-next-app. Read every file in app/. Replace the default page.`,qa:[{q:`Setup — the choices I made at the prompts`,a:`npx create-next-app@latest my-nextjs-app

Selections:
- TypeScript: No (matches the exercise — TS comes in Week 7)
- ESLint: Yes
- Tailwind CSS: No (vanilla styles for this first pass)
- src/ directory: No (everything lives at the root, app/ at top level)
- App Router: Yes (this is the modern routing system — file-based)
- Import alias: default (kept as @/*)

cd my-nextjs-app && npm run dev → server boots on localhost:3000. Default landing page renders.

The "App Router: Yes" pick is the big one. There's an older system called the Pages Router (pages/ folder) that's still supported but isn't where the framework is going. App Router is the file-based, server-component-by-default system the rest of this week builds on.`},{q:`What every file in the app/ directory does`,a:`**app/layout.js** — the root layout. Wraps every page in the app. Contains the <html> and <body> tags (only place those go in App Router), site-wide nav/footer, metadata. Receives a children prop which is the current page's content slotted in.

**app/page.js** — the home page, served at the / route. Exports a default React component. The naming is the convention: any file called page.js in a folder under app/ becomes a route.

**app/globals.css** — global stylesheet imported by layout.js. Anything in here applies to the whole app. Per-component styles can be inlined, CSS modules, or Tailwind (when we add it later).

**package.json** — npm manifest. Lists dependencies (next, react, react-dom), scripts (dev, build, start, lint), and metadata. Same role as any Node project.

**next.config.mjs** — Next.js's config file. Per-app settings like image domains, redirects, build flags, env handling. Default file is essentially empty — only edit it when you need to.

Other notable files that came with the scaffold:
- **app/favicon.ico** — the tab icon
- **jsconfig.json** — sets up the @/* import alias for cleaner imports
- **.eslintrc.json** — ESLint config, picks up Next.js's recommended rules
- **next-env.d.ts** — TypeScript declarations (even though I picked No on TS, this file shows up to support some internals)`},{q:`Replaced app/page.js with my own content`,a:`export default function HomePage() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>My First Next.js App</h1>
      <p>This page is served by Next.js. I built this.</p>
    </div>
  );
}

Saved. Browser auto-refreshed via Next.js's hot module reload — no manual reload needed. New content rendered immediately.

Just plain React. The export default function is a regular React component. The only thing different from a Vite React app is WHERE this file lives — app/page.js means this is the / route. No router config, no <BrowserRouter>, no <Route path="/">. The filesystem is the routing config.`},{q:`First reaction to the App Router model`,a:`Coming from React + Vite, this feels almost too easy. In Vite I'd have to install react-router-dom, set up a BrowserRouter, define each route with a <Route> element, manage the tree manually. Here the folder structure does the work.

The thing I have to unlearn: in Vite I think "page = a React component I route to." In Next.js I think "page = a file at this filesystem location, which IS the route." Subtle but different mental model. Same components, different binding mechanism.

Also: the server component default is going to bite me at some point and that's a good thing. React's reflex is "drop in a useState," but in Next.js App Router I have to stop and decide WHERE the component runs. Forces me to think about boundaries.`}]},{heading:`Exercise 2 — File-Based Routing: Three Pages, No Router`,description:`Build a multi-page app using nothing but folders. No router library. Plain <a> tags first to see the raw navigation.`,qa:[{q:`Created the about/ and contact/ folders with their page.js files`,a:`Project tree after this step:

app/
  page.js              (home, was already there, updated to link to about/contact)
  about/
    page.js            (new — /about route)
  contact/
    page.js            (new — /contact route)
  layout.js
  globals.css

That's it. No imports of route components anywhere. No central route table. Just folders. Each folder under app/ with a page.js file becomes a URL segment.

The discovery happens at build time — Next.js scans the app/ directory, finds every page.js, and registers each one as a route. If I created app/products/page.js right now, /products would just start working. Add app/products/featured/page.js → /products/featured works. That's it.`},{q:`Tested the navigation — what I observed`,a:`http://localhost:3000 → home page rendered with two links
Clicked "About" → URL became /about, about page rendered
Clicked "Back to Home" → URL became /, home rendered
Clicked "Contact" → URL became /contact, contact page rendered

Watching the network tab: each link click triggered a FULL page reload. The whole HTML document came back from the server, the browser re-parsed it, React re-mounted everything. You can see the favicon flicker. That's because we used plain <a href> tags — the browser treats those as "leave this page, load that one."

That's the raw, hard-refresh behavior. Slow-feeling for users on slow connections. Exercise 3 fixes this by switching to Next.js's <Link> component, which intercepts the click and does client-side navigation instead — no reload, instant.`},{q:`How this compares to react-router`,a:`Same outcome, dramatically less ceremony.

react-router (the Vite/CRA approach):
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

Next.js App Router:
mkdir app/about
mkdir app/contact
(create page.js in each)

That's the whole thing. The route table is the filesystem. Adding a new route doesn't require touching a central config — you just create a folder.

The tradeoff: I lose explicit control over the route table. Can't easily see "all my routes in one place" without scanning the directory. For 3 routes that's fine. For 50 routes it might matter, but by then you'd be glad you don't have to maintain a giant <Routes> block.`},{q:`What 'file-based routing' actually means in one sentence`,a:`The folder structure under app/ IS the URL structure of the app, with each page.js file mapping to the path of its parent folder.

So:
- app/page.js → /
- app/about/page.js → /about
- app/contact/page.js → /contact
- app/recipes/[id]/page.js → /recipes/anything (dynamic — covered in Exercise 5)
- app/dashboard/admin/page.js → /dashboard/admin (nested)

Once you internalize this, looking at the app/ folder tells you the entire surface area of the app.`}]},{heading:`Exercise 3 — Shared Layout with Navigation`,description:`Build a layout that wraps every page with consistent nav and footer. Switch to Next.js <Link> for client-side navigation.`,qa:[{q:`Updated app/layout.js with the nav + footer`,a:`Replaced the default layout with the version from the exercise. Three key pieces:

1. The <html> and <body> tags live here. ONLY here. Page components don't (and can't) include them. The layout is the only place those tags appear.

2. {children} is where the current route's page.js content gets injected. Navigate to /about, the About page renders inside {children}. The nav and footer stay put — same DOM, just the middle swaps.

3. Imports Link from "next/link" and uses <Link href="/about"> instead of <a href="/about">. This is the critical change that makes navigation feel instant.

Also exported a metadata object:
export const metadata = {
  title: "My Next.js App",
  description: "Learning Next.js in Phase 2",
};

That sets <title> and <meta name="description"> on every page. Next.js reads the export and injects it into the <head>. Per-page metadata can override this by exporting metadata from individual page.js files too.`},{q:`Simplified each page.js — removed the inline nav`,a:`Each page used to have its own "Back to Home" link. Now the layout has Home / About / Contact nav at the top of every page, so the inline links are redundant. Removed them.

After cleanup, each page.js is just the content for THAT page. The layout handles everything that's shared. That's the separation of concerns done right — page files don't repeat nav code.

This is also how a real app would scale. Twenty pages, one nav. Change the nav in one place, every page updates. Compare to a vanilla React app where each route component might be responsible for its own header.`},{q:`The Link vs <a> difference — verified in the browser`,a:`Watched the Network tab while clicking between pages.

With Link (after the update): clicking About showed ONE small request for the About page's RSC payload (~3KB). No HTML document re-fetch. No favicon flicker. The DOM updated in place — only the {children} region swapped. URL still updated to /about. Back/forward buttons still work.

With plain <a> (Exercise 2): clicking About showed a full HTML document fetch (~10KB), CSS re-applied, JS re-initialized, React component tree re-mounted. Favicon flickered.

The Link feels instant. The <a> feels like a navigation. The difference matters a lot more on slow networks — full page loads can take seconds while client navigation is always sub-50ms.

Always Link for internal navigation. Reserve <a> for external links (where you actually do want the browser to leave the app).`},{q:`Level 1 mod — added app/projects/page.js and a nav link`,a:`Created app/projects/page.js:

export default function ProjectsPage() {
  return (
    <div>
      <h1>Projects</h1>
      <p>A growing list of things I've shipped in Next Chapter.</p>
      <ul>
        <li>The Block Report — NYC 311 data, Next.js + SQLite</li>
        <li>PromptForge — prompt engineering workspace, Supabase + Groq</li>
        <li>Interview Armor — interview prep tool with Whisper + Llama 3.3</li>
        <li>Canvas Daily — currently building</li>
      </ul>
    </div>
  );
}

Added a Link to the layout's nav:
<Link href="/projects" style={{ color: "white", textDecoration: "none" }}>
  Projects
</Link>

Tested. /projects renders, nav highlights nothing (we don't have active states yet), back/forward works, layout persists. Total time: maybe 90 seconds.

This is the developer experience win that's hard to convey in writing — adding a new route is ONE FILE.`},{q:`Level 2 mod — active nav link with usePathname`,a:`This one taught me something. usePathname is a HOOK — and hooks only run in client components. But the layout is a server component by default. So I can't just sprinkle a hook into the layout.

The pattern: extract the nav into its own client component, keep the layout as a server component, render the nav inside the layout.

Created app/components/NavBar.jsx:

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav style={{
      backgroundColor: "#1a1a2e",
      padding: "16px 24px",
      display: "flex",
      gap: "20px",
    }}>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            style={{
              color: isActive ? "#f59e0b" : "white",
              fontWeight: isActive ? "bold" : "normal",
              textDecoration: "none",
              borderBottom: isActive ? "2px solid #f59e0b" : "2px solid transparent",
              paddingBottom: "4px",
            }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

Then in app/layout.js, replaced the inline nav block with:
import NavBar from "./components/NavBar";
...
<body>
  <NavBar />
  <main>{children}</main>
  <footer>...</footer>
</body>

Tested. Navigate to /about → "About" link goes amber and gets the underline, others stay white. Navigate to /projects → "Projects" gets the active treatment. Clean.

This is the pattern I'll repeat all week: layout stays server, interactive bits inside it get pulled into client components.`}]},{heading:`Exercise 4 — Client Components: When and Why`,description:`Build a Counter, see the server-component error, fix it with 'use client', then build a ThemeToggle. Internalize the server/client split.`,qa:[{q:`Created app/components/Counter.jsx WITHOUT 'use client' first`,a:`Followed the trap on purpose. Wrote the Counter as a regular component with useState, no directive at the top. Imported it into app/page.js. Saved. Refreshed.

Next.js threw this error in the browser overlay and the terminal:

"You're importing a component that needs useState. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the 'use client' directive."

The error is unusually clear by error-message standards. It tells me WHAT broke (useState), WHY (only works in client components), and the FIX (add "use client"). No detective work needed.`},{q:`Why the default is server components — what's the framework doing?`,a:`Server components run on the server, render to HTML, and ship that HTML to the browser. No JavaScript for the component itself goes to the client. Smaller bundle, faster first paint, no hydration cost for that component.

Client components run in the browser. They can use hooks (useState, useEffect, useRef), event handlers (onClick, onChange), browser APIs (localStorage, window). But their JavaScript has to be shipped to the browser, parsed, executed, and hydrated.

Server-first is the default because most of a page is static or data-driven. A header, a footer, a list of recipes from a database — none of that needs interactivity. Shipping all that JavaScript to the browser is waste. Make the server do the work, send HTML.

When you need interactivity (a counter, a form, a toggle), you opt INTO client mode with "use client". That marks the boundary. Everything below that point in the import tree gets shipped to the browser. Everything above stays on the server.

This is the opposite of how I'm used to thinking. In Vite/CRA, EVERYTHING is client. Every component, every page, all the React code, ships to the browser. Next.js flips the default — server unless you say otherwise.`},{q:`Fixed the Counter with 'use client'`,a:`Added "use client"; as the literal first line of the file. Above the React import. Above everything.

"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  // ...
}

Saved. Refreshed. Counter rendered. Buttons worked. + increments, - decrements, Reset returns to zero. Standard React behavior — except this component is now explicitly tagged as client-side.

Important nuance: "use client" doesn't just affect THIS file. It marks the entry point of a client subtree. Anything Counter imports also becomes client by inheritance (unless those modules have their own server constraints). The directive establishes a boundary in the component tree.`},{q:`Built ThemeToggle — second client component, same pattern`,a:`Same structure: "use client" at the top, useState for isDark, button toggles it. Inline styles flip based on the boolean — background color, text color, button color all conditional.

"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      backgroundColor: isDark ? "#1a1a2e" : "#ffffff",
      color: isDark ? "#ffffff" : "#1a1a2e",
      // ... rest of styles
      transition: "all 0.3s ease",
    }}>
      <h3>Theme Toggle</h3>
      <p>Current theme: {isDark ? "Dark" : "Light"}</p>
      <button onClick={() => setIsDark(!isDark)}>
        Switch to {isDark ? "Light" : "Dark"}
      </button>
    </div>
  );
}

The transition: "all 0.3s ease" is a nice touch — when you click the button, the colors fade rather than snap. Worked first try.

Note: this toggle only affects ITS OWN card, not the rest of the page. A real dark-mode would need to lift the state up (or use Context) so the whole app responds. That's a future refactor.`},{q:`The composition pattern — server page rendering client components`,a:`app/page.js is a SERVER component (no "use client" at the top). It looks like:

import Counter from "./components/Counter";
import ThemeToggle from "./components/ThemeToggle";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <p>This is the home page. Use the navigation above to explore.</p>
      <Counter />
      <ThemeToggle />
    </div>
  );
}

The page itself runs on the server. The <h1> and <p> get rendered to HTML server-side. When Next.js encounters <Counter />, it recognizes that Counter has "use client", drops a placeholder in the HTML, and ships Counter's JavaScript to the browser separately. Hydration kicks in client-side and Counter becomes interactive.

This is the pattern I'll use everywhere:
- Server components for STRUCTURE — layouts, page shells, data-fetching components
- Client components for INTERACTIVITY — anything with state, events, or browser APIs

Keep client components SMALL and LEAF-LEVEL. Don't make the whole page a client component just because one button needs to be interactive. Extract the button into its own client component, leave everything else server-side. Less JavaScript shipped, faster page.`},{q:`What I noticed comparing to plain React`,a:`Three things stand out.

First — I had to think about a boundary I never thought about before. In Vite everything is client. The question "where does this run?" never comes up because the answer is always "browser." In Next.js the question is real and has to be answered for every component.

Second — the error message training is unusually good. The first time I forgot "use client" Next.js told me exactly what was wrong and how to fix it. Compare to most framework errors which are obscure stack traces. This one was a kindness.

Third — once you get the pattern, it gets out of the way. After a couple of components you start automatically thinking "does this need interactivity? Yes → client. No → server." And the answer for most components is "no." Most of a page is read-only data.`}]},{heading:`Exercise 5 — Plan Phase 2 Routes (Canvas Daily)`,description:`Translate Canvas Daily's user stories and data model into a Next.js folder structure. Scaffold placeholder pages.`,qa:[{q:`Pulling up the Week 4 user stories and data model`,a:`Canvas Daily core stories from Week 4:
- As a student, I want to see today's assignments across all my courses in one digest.
- As an observer (parent), I want to see my child's upcoming assignments.
- As a user, I want to drill into a specific course to see all its assignments.
- As a user, I want to view the detail of one assignment (due date, points, instructions).
- As a user, I want to connect my Canvas account once and have it persist.

Data model entities from Week 4:
- User (with role: student or observer)
- CanvasConnection (the OAuth token, per user)
- Course
- Assignment
- DigestRun (one digest emailed/computed per day)

Each of these maps to a route or a page in the app.`},{q:`The route structure I scaffolded`,a:`app/
  page.js                          → /  (today's digest landing)
  layout.js                        (shared nav + footer)
  about/
    page.js                        → /about
  courses/
    page.js                        → /courses  (list of my courses)
    [id]/
      page.js                      → /courses/:id  (one course + its assignments)
  assignments/
    page.js                        → /assignments  (full list, filterable)
    [id]/
      page.js                      → /assignments/:id  (one assignment detail)
  settings/
    page.js                        → /settings  (Canvas connection, observer setup)
  components/
    NavBar.jsx                     (the active-link nav from Ex3)
    Counter.jsx                    (will probably delete — was practice)
    ThemeToggle.jsx                (same)

Seven user-facing routes, two dynamic ([id] for courses and assignments). Plus the layout and the components folder. That's the whole Phase 2 surface area in one screenshot of the directory.

The dashboard pattern — "/" as the landing digest — matches how I actually want to use the app. Open the URL, see today's assignments, drill in if needed.`},{q:`The dynamic route placeholder — app/assignments/[id]/page.js`,a:`export default async function AssignmentDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Assignment Detail</h1>
      <p>Assignment ID: {id}</p>
      <p>
        This page will eventually show: title, course, due date, points possible,
        submission status, and the assignment instructions from Canvas.
      </p>
      <p style={{ color: "#6b7280", fontStyle: "italic" }}>
        Data source: GET /api/v1/courses/:course_id/assignments/:id via backend proxy.
      </p>
    </div>
  );
}

Note the async function and the await params. In Next.js 15, params is a Promise — you must await it before destructuring. If you try to do { id } = params directly, you get a runtime warning and the id is undefined.

This was a breaking change from Next.js 14 → 15. The doc you gave me already has the right pattern. Same in app/courses/[id]/page.js.

Tested it:
- http://localhost:3000/assignments/42 → renders "Assignment ID: 42"
- http://localhost:3000/assignments/banana → renders "Assignment ID: banana" (no validation yet)
- http://localhost:3000/assignments/anything → also works

The [id] folder matches ANYTHING. Real validation (does this id exist in the DB?) happens in the page's data-fetching logic, not in the routing layer.`},{q:`Course detail page — same pattern`,a:`// app/courses/[id]/page.js
export default async function CourseDetailPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Course Detail</h1>
      <p>Course ID: {id}</p>
      <p>
        Coming soon: course name, term, all assignments grouped by week,
        completion stats, upcoming due dates.
      </p>
    </div>
  );
}

The route /courses/[id] also covers /courses/123/assignments/456-style nested routes IF I create app/courses/[id]/assignments/[assignmentId]/page.js. But I'm not going to — assignment detail lives at /assignments/[id] at the top level, accessed from any course or the global list. Simpler URL structure.`},{q:`Updated layout nav to include all the new routes`,a:`Updated the links array in NavBar.jsx (from Exercise 3) to reflect the actual app:

const links = [
  { href: "/", label: "Today" },
  { href: "/courses", label: "Courses" },
  { href: "/assignments", label: "Assignments" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
];

Renamed "Home" → "Today" because that's what the landing page IS (today's digest), not a generic home page. Naming matters.

Tested: each link works, active state highlights correctly when the URL matches. Clicking Today on the /assignments page returns me to /, which is the digest landing.`},{q:`What this scaffolding bought me`,a:`Five things.

First — the whole app's information architecture is visible in the directory tree. Anyone (including future me) can look at app/ and understand what the product is in 30 seconds.

Second — each page is a working URL. /courses/anything responds. The placeholder shows what data WILL go there. The page is "real" even though the data layer doesn't exist yet. That's a usable stub for the next three days of work.

Third — the route structure forces me to commit to product decisions. "Should assignment detail be /courses/:id/assignments/:id or just /assignments/:id?" I decided. Now the scaffolding reflects the decision. Decisions deferred forever are the worst kind.

Fourth — when the data layer lands tomorrow, each page is exactly ONE file to edit. Add data-fetching to app/assignments/page.js, that page works. No central state, no global config to touch. Surface area is small.

Fifth — every route is gated by the layout, which means when I add auth checks in the layout, every page is automatically protected. The framework's structure rewards thinking ahead about cross-cutting concerns.

The scaffold took maybe 25 minutes. Three days from now this is going to be a working app.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes to explain one concept out loud. Partner asks one follow-up.`,qa:[{q:`Which concept I picked — server/client components, file-based routing, or layouts`,a:`Server vs. client components. This is the conceptually distinctive thing about Next.js App Router — file-based routing is "different syntax for the same idea" but server vs client is a genuinely new mental model coming from Vite/CRA. If I can explain it cleanly I understand the framework's core promise.`},{q:`My 2-minute explanation`,a:`In Next.js App Router, every component runs in one of two places. Server or browser. Server is the default. Browser only happens when you opt in.

Server components run during the request. The Next.js server executes your function, generates HTML, ships it to the browser. The component's JavaScript never leaves the server. You can fetch data directly inside a server component — no useEffect, no loading state, just await fetch right in the function body. But you can't use hooks. You can't use useState. You can't use onClick handlers. Because there's no browser yet — you're on the server, generating HTML.

Client components run in the browser. They're what I've been writing all week in plain React — useState, useEffect, event handlers, all the interactive stuff. The cost is they have to ship JavaScript to the browser, which costs bandwidth and execution time.

You mark a component as client by putting "use client" as the very first line of the file. That's it. No other config. The directive turns that file (and anything it imports) into a client subtree.

Concrete example from today. I built a Counter component with useState. Forgot "use client". Got an error: "You're importing a component that needs useState. This React Hook only works in a Client Component." Added the directive. Worked.

The architectural rule: keep client components SMALL and at the LEAVES of your tree. The home page itself is a server component — it imports Counter and ThemeToggle as client components. The structure (heading, paragraph, layout) renders on the server with zero JS. Only the interactive widgets ship JS. That's the framework's whole promise — minimum JavaScript to the browser, maximum work done on the server.

Without "use client" everywhere by default, you save bandwidth and your page loads faster. With "use client" available when you actually need it, you don't lose the interactivity story you already know how to write.`},{q:`Partner's follow-up and my answer`,a:`Partner asked: What happens if you put useState in a server component? Like, really — does it crash, throw, silently fail?

My answer: it fails to compile. You don't get to "the page renders, but it's broken" — you get an error in the dev server overlay before the page ever runs.

Specifically, the moment Next.js tries to bundle the component, it sees useState in a file that doesn't have "use client" and throws: "You're importing a component that needs useState. This React Hook only works in a Client Component. To fix, mark the file (or its parent) with the 'use client' directive."

It's a compile-time check, not a runtime check. Which is actually the kind way to fail — you catch it the instant you save the file, not in production when a user hits the page.

The fix is always the same: add "use client" at the top of the file, OR move the stateful logic into a child component that has "use client" and import that child from the server component. The second option is usually better because it keeps the boundary tight.

I hit this exact error twice today — once in Exercise 4 on purpose (that was the lesson), once in Exercise 3 when I tried to put usePathname in the layout. Same error. Same fix.`},{q:`What saying it out loud surfaced`,a:`One thing.

I noticed I kept reaching for the phrase "you opt in to client mode." That framing — server is default, client is opt-in — is the cleanest way to express the design and I didn't have it before saying it out loud. Going to keep using it.

The other thing: I almost forgot to explain WHY this matters beyond "less JS to ship." But the real why is performance + correctness — server components can fetch data without loading states, render securely (database queries don't leak to the browser), and avoid the hydration cost. Three benefits, not one. Next time I'd lead with that triple benefit instead of saving it for the end.`}]}]},{number:23,label:`Day 2`,title:`Week 6, Day 2 — Prisma + Neon Postgres: Schema, Migrations, Seed`,subtitle:`Connect to a cloud Postgres, define models for the full Canvas Daily schema, migrate, and seed real data.`,color:`#0d9488`,sections:[{heading:`Exercise 1 — Install Prisma and Connect to Neon`,description:`Sign up for Neon, install Prisma, point .env at the connection string, verify the round trip.`,qa:[{q:`Setting up the Neon project`,a:`Signed up at neon.tech with GitHub. Created a project called nextchapter-week6, region us-west-2 (closest to Prescott), default Postgres version (17.x). Neon dropped me on a dashboard with the connection string visible — pooled, with sslmode=require already in the URL. Copied it.

What I noticed: Neon's "branch" concept is interesting. The project comes with a "main" branch by default, but you can branch the database the same way you branch git. For dev/staging/prod separation later this is going to be cleaner than spinning up multiple Postgres instances.`},{q:`Installing Prisma and running prisma init`,a:`In canvas-daily/ from yesterday:

npm install prisma --save-dev
npm install @prisma/client
npm install @prisma/adapter-pg pg
npm install --save-dev dotenv
npx prisma init

The lab calls for prisma and @prisma/client only. I added @prisma/adapter-pg + pg because Prisma 7 uses driver adapters as the default pattern — the old way of letting Prisma manage its own connection is deprecated. Adapters give you a real Node Postgres driver (pg) underneath, which plays much nicer with Neon's pooler and with Next.js serverless.

Also added dotenv because Prisma 7's new prisma.config.ts doesn't auto-load .env the way the old env() in schema.prisma did. You import "dotenv/config" at the top of the config file. Slight friction, very explicit.

prisma init created:
- prisma/schema.prisma (the initial empty schema)
- prisma.config.ts (Prisma 7 config — NEW, didn't exist in v5/6)
- .env updated with a DATABASE_URL placeholder`},{q:`What I noticed about Prisma 7 vs the lab walkthrough (which assumes 5/6)`,a:`The lab is written for an older Prisma where everything is configured in schema.prisma via env("DATABASE_URL"). Prisma 7 moved that into prisma.config.ts.

My schema.prisma is shorter than the lab's example:
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
}

No url = env("DATABASE_URL") line. The URL comes from prisma.config.ts now:

import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node prisma/seed.js",
  },
  datasource: {
    url: process.env["DATABASE_URL"],
  },
});

Same outcome (Prisma reads DATABASE_URL from .env), different mechanism. Worth flagging because if you copy the lab's schema verbatim with the url= line, Prisma 7 will warn that it's duplicating what the config already provides.

Also: in Prisma 7 the seed config moves into prisma.config.ts (the migrations.seed line above) instead of into package.json. The lab tells you to add a "prisma" block to package.json — that still works for backwards compat, but the config.ts version is canonical.`},{q:`Setting up .env and confirming gitignore`,a:`Opened .env, replaced the placeholder with the Neon connection string. Format:

DATABASE_URL="postgresql://[user]:[pass]@ep-xxx-pooler.us-west-2.aws.neon.tech/neondb?sslmode=require"

Notes:
- Used the POOLED connection string from Neon (the URL with -pooler in the host). For serverless Next.js, the pooler is mandatory — direct connections will exhaust the connection limit fast.
- sslmode=require was already in the Neon-provided string. Don't remove it.

.gitignore check: opened it, .env* was already in there from create-next-app. Belt-and-suspenders, ran git check-ignore .env which printed ".env" — confirmed git is explicitly ignoring it.`},{q:`Why I used prisma migrate dev instead of prisma db push`,a:`The lab says npx prisma db push. I used npx prisma migrate dev --name init instead.

Difference:
- db push: takes the current schema and shoves the changes into the database. No history, no rollback. Fine for prototyping, terrible for production. Every schema change overwrites the last.
- migrate dev: generates a timestamped SQL migration file in prisma/migrations/, applies it to the database, AND records that it was applied. Now I have a history. I can ship that history to teammates or production. Other machines can run prisma migrate deploy to get to the same database state.

For Phase 2 I want migration history from day one. There's never a good time to retrofit version control onto something that's been hot-mutated for weeks. So Canvas Daily uses migrate dev from the start.

Result: prisma/migrations/20260602162023_init/migration.sql is the SQL that built the database. 56 lines of CREATE TABLE / CREATE INDEX / ALTER TABLE statements. Committed to git.`},{q:`Checkpoint — connection verified`,a:`npx prisma migrate dev --name init ran clean. Terminal output:
- Applied migration 20260602162023_init
- Generated Prisma Client (308 kB) to ./node_modules/@prisma/client in 187ms
- Running seed command... (well, seed wasn't ready yet — Ex 4 below)

Opened Neon's web console, clicked the SQL Editor, ran SELECT * FROM "User"; — got the empty table back. Connection is real.`}]},{heading:`Exercise 2 — Define Your First Model`,description:`Add the User model. Push to the database. View it in Prisma Studio.`,qa:[{q:`The User model I defined`,a:`model User {
  id          Int          @id @default(autoincrement())
  name        String
  email       String       @unique
  role        String       @default("student")
  enrollments Enrollment[]
  createdAt   DateTime     @default(now())
}

Diverged from the lab example by adding role with a default of "student". Canvas Daily has two user types — students and instructors — so role is in the schema from day one. Set the default to "student" because that's the vast majority of users. Instructors get explicitly created with role: "instructor".

The enrollments Enrollment[] line is forward-looking — I defined it now because I knew the join table was coming in Ex 3. Prisma doesn't complain about referencing a model that doesn't exist yet AS LONG AS you add the model before running migrate. If I had run migrate at this point with only User defined, the enrollments line would have errored.`},{q:`Why @unique on email and the default value design choice`,a:`@unique on email enforces it at the database level (creates a UNIQUE index). Two reasons:
1. Login — when auth lands, the user is identified by email. Two users with the same email is incoherent.
2. Seed safety — Ex 4's seed uses upsert with where: { email } as the lookup key. That only works if email is unique.

@default("student") on role solves a real-world problem: 95% of users are students. If role wasn't defaulted, every user creation would have to specify it explicitly, and someone would inevitably forget and create a user with role: null, which would then have to be handled everywhere downstream. Defaulting at the schema level means the database guarantees role is always populated.

This is the kind of design choice that's free now and expensive later if you skip it.`},{q:`Ran the migration`,a:`Couldn't quite "just add the model and push" because the enrollments Enrollment[] line referenced a model that didn't exist yet. I added User AND a stub Enrollment in the same pass before running migrate. (More on Enrollment in Ex 3.)

Once both were in place:
npx prisma migrate dev --name add_user

Generated a new migration file. Applied. Prisma Client regenerated. Total time: about 2 seconds.

Then opened Prisma Studio:
npx prisma studio

Browser opened at localhost:5555. User table listed in the sidebar with the columns I defined (id, name, email, role, createdAt). Empty. As expected — seed comes in Ex 4.`},{q:`Schema → table mapping (what each line actually creates in Postgres)`,a:`Looking at the generated migration SQL confirms the mapping:

Prisma:                              Postgres:
model User { ... }                  → CREATE TABLE "User" ( ... )
id Int @id @default(autoincrement()) → "id" SERIAL NOT NULL, PRIMARY KEY ("id")
name String                          → "name" TEXT NOT NULL
email String @unique                 → "email" TEXT NOT NULL + CREATE UNIQUE INDEX "User_email_key" ON "User"("email")
role String @default("student")      → "role" TEXT NOT NULL DEFAULT 'student'
createdAt DateTime @default(now())   → "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP

What surprised me: Prisma puts table names in double quotes ("User") and uses CamelCase as-is. Postgres is case-folding-sensitive — if you write SELECT * FROM User without quotes you'll get "relation 'user' does not exist" because Postgres downcased it. Always quote when querying Prisma-generated tables by hand. The Prisma Client handles this for you when you use prisma.user.findMany().

The Int @id @default(autoincrement()) becomes SERIAL — Postgres's built-in auto-incrementing integer. Behind the scenes that's a sequence that increments on every insert.`}]},{heading:`Exercise 3 — Add a Second Model with a Relation`,description:`Add Course and the Enrollment join table. Many-to-many via explicit join, not implicit. Migrate.`,qa:[{q:`Course and Enrollment — the relation choice I made`,a:`model Course {
  id          Int          @id @default(autoincrement())
  name        String
  code        String       @unique
  term        String?
  assignments Assignment[]
  enrollments Enrollment[]
  createdAt   DateTime     @default(now())
}

model Enrollment {
  id       Int    @id @default(autoincrement())
  user     User   @relation(fields: [userId], references: [id])
  userId   Int
  course   Course @relation(fields: [courseId], references: [id])
  courseId Int

  @@unique([userId, courseId])
}

The lab's pattern for two-model relations was one-to-many (User has many Recipes). My Canvas Daily relationship is many-to-many — a User has many Courses, a Course has many Users. Prisma has two ways to do that:

1. IMPLICIT: User { courses Course[] } + Course { users User[] }. Prisma silently creates a hidden join table. Quick but inflexible.
2. EXPLICIT: a real Enrollment model that joins User and Course. Slightly more code, much more flexible.

I went explicit. Reasons:
- An enrollment is a real thing. It has its own lifecycle (created when student registers, deleted when they drop). Eventually it'll have its own fields — enrollment date, current grade, status (active / withdrawn). I can't add fields to an implicit join table.
- The @@unique([userId, courseId]) constraint enforces that the same student can't enroll in the same course twice. With implicit many-to-many Prisma would handle this automatically — but only because the join table is hidden. With explicit, I make the constraint visible.

Course has a @unique on code (CS101, MATH201, etc.) — same reasoning as User.email, the course code is a natural unique identifier and the seed uses it as the upsert key.

term is optional (String?) because a course might not have a term in some edge cases (continuing-ed courses, self-paced). Defaulting to "current term" felt brittle.`},{q:`The @relation fields/references syntax — what's actually happening`,a:`Look at: user User @relation(fields: [userId], references: [id])

Breaking it down:
- user is the Prisma-side field name (the "relation field"). When I write prisma.enrollment.findMany({ include: { user: true } }), this is what I'm including.
- User is the type — points to the User model.
- fields: [userId] — the actual column in THIS table (Enrollment) that holds the foreign key.
- references: [id] — the column in the OTHER table (User) that this FK points at.

The userId Int line below it is the actual database column. Two lines, two different concepts:
- user (no Int, no @relation directive on its own) is the relation field, used in Prisma Client queries
- userId is the foreign key column, what actually lives in Postgres

The generated SQL:
ALTER TABLE "Enrollment" ADD CONSTRAINT "Enrollment_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

ON DELETE RESTRICT means: if I try to delete a User who has enrollments, Postgres refuses. Forces me to clean up enrollments first. Good default — prevents orphaned rows.`},{q:`Verified in Prisma Studio`,a:`Three tables now visible in Studio: User, Course, Enrollment (Assignment came in Ex 5).

Clicked into Enrollment — the column headers showed userId and courseId. Clicking the column header dropdown showed "Open related record" — Studio understands the relationship and lets you click through to the User or Course on the other side.

The @@unique([userId, courseId]) showed up as a real Postgres unique index in the migration SQL:
CREATE UNIQUE INDEX "Enrollment_userId_courseId_key" ON "Enrollment"("userId", "courseId");

If I tried to insert two rows with the same (userId, courseId) pair, Postgres would reject the second one. Database-enforced, not just code-enforced. Belt and suspenders.`},{q:`Why explicit join table over implicit — the design tradeoff`,a:`Implicit many-to-many is the right call when:
- The relationship has no metadata of its own ("this user follows this user")
- You'll never need to query the relationship itself, only the endpoints
- The join is purely a connection, not an entity

Explicit join table is the right call when:
- The relationship IS an entity ("an enrollment exists in time, has a state, can be modified")
- You'll add fields later (enrolledAt, grade, status, gradeOverride)
- You need to query enrollments directly ("how many students enrolled in CS101 this term")

Canvas Daily clearly fits the second pattern. An enrollment is its own thing. The cost of explicit (one extra model, slightly more verbose queries) is paid back the first time I need to track WHEN a student enrolled or WHAT grade they got.

This is the same lesson as my Hype Live work — model the domain, not the technical convenience. The schema should look like the business does.`}]},{heading:`Exercise 4 — Seed Your Database`,description:`Write a seed script that fills the database with realistic data. Verify in Prisma Studio.`,qa:[{q:`Why I used upsert instead of deleteMany + create`,a:`The lab's pattern is deleteMany() then create(). That works but it's destructive — every seed run nukes everything and rebuilds. Fine for prototype, painful when you've manually added test data in Studio that you want to keep.

I used upsert instead:
const alice = await prisma.user.upsert({
  where: { email: 'alice@university.edu' },
  update: {},
  create: { name: 'Alice Monroe', email: 'alice@university.edu', role: 'student' },
})

upsert is "find this row by the unique key; if it exists do update (in my case, nothing — update: {}); if it doesn't, run create." Result: seeding is idempotent. Run it twice, you get the same database. No duplicates, no destruction.

The where requires a unique field — that's why I made email @unique on User and code @unique on Course. The seed's upsert calls use those as lookup keys.

For Assignment and Enrollment I used a slightly different pattern — createMany with skipDuplicates: true:
await prisma.assignment.createMany({
  skipDuplicates: true,
  data: [ ...10 assignments... ],
})

createMany doesn't have an upsert mode, but skipDuplicates: true gives me roughly the same idempotency — re-running won't fail or create dupes. The check is on whatever unique constraints the table has. For Enrollment that's the @@unique([userId, courseId]) — perfect.`},{q:`The seed data I put in`,a:`Four users:
- Dr. Amy Chen (instructor, prof.chen@university.edu)
- Alice Monroe (student, alice@university.edu)
- Bob Kim (student, bob@university.edu)
- Diana Reyes (student, diana@university.edu)

Three courses, all Fall 2026 term:
- CS101 — Intro to Computer Science
- MATH201 — Calculus II
- ENG110 — Academic Writing

Ten assignments distributed across the three courses:
- CS101 (4): Hello World Program, Variables & Data Types Quiz, Loops & Conditionals Lab, Midterm Project
- MATH201 (3): Integration Techniques Homework, Series Convergence Problem Set, Midterm Exam
- ENG110 (3): Diagnostic Essay, Annotated Bibliography, Research Paper Draft

Each assignment got a realistic title, description, points total, and a Fall-semester-shaped due date (between 2026-09-05 and 2026-10-22).

Seven enrollments showing the many-to-many in action:
- Alice → CS101, MATH201
- Bob → CS101, ENG110
- Diana → CS101, MATH201, ENG110 (taking all three)

The variety here was deliberate. Each student is enrolled in a different overlap of courses so when I'm testing queries tomorrow I can verify the filter logic actually filters. If everyone was enrolled in everything, "courses I'm taking" wouldn't be a useful test.`},{q:`Why I used CommonJS in seed.js instead of ESM`,a:`Project is ESM ("type": "module" in package.json). But seed.js uses require() — CommonJS:

require('dotenv').config()
const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')

Reason: Prisma 7 + driver adapters + ESM had import resolution issues when the seed script ran via npx prisma migrate dev. The error was about top-level await not being supported in the seed runner's loader context. CommonJS sidesteps it entirely — require() doesn't care about ESM/CJS interop.

This is the kind of thing you don't see in tutorials because tutorials don't hit it. The fix took me about 15 minutes of poking at error messages, then I gave up trying to be pure ESM in the seed and went pragmatic. Seed.js is the only file in the project that uses require — every other file is ESM.

Worth noting for anyone else running into this: Prisma's docs are catching up to v7 + adapters. Some patterns the docs still show won't work cleanly. Read the error message, don't fight the runtime.`},{q:`Running the seed and verifying`,a:`npx prisma db seed

Output:
Running seed command 'node prisma/seed.js' ...
Seeded: 4 users, 3 courses, 10 assignments, 7 enrollments

🌱  The seed command has been executed.

Opened Prisma Studio:
- User table: 4 rows
- Course table: 3 rows
- Assignment table: 10 rows
- Enrollment table: 7 rows

Clicked into Assignment, found "Loops & Conditionals Lab", noticed the courseId was 1. Clicked into Course id=1, confirmed it was CS101. The foreign key resolves visually.

Clicked into Enrollment, looked at the row with userId=4, courseId=3. That's Diana → ENG110. Click through to User → "Diana Reyes". Click through to Course → "Academic Writing, ENG110". Relationships work both directions in Studio.

Re-ran the seed to verify idempotency. Same output. Same row counts. No duplicates. Good.`}]},{heading:`Exercise 5 — Translate Your Full Week 4 Data Model`,description:`Take the whole Week 4 data model and turn it into a working Prisma schema with all tables, relationships, and seed.`,qa:[{q:`Looking back — what the final schema covers`,a:`Four models in total: User, Course, Assignment, Enrollment.

The lab Ex 2 and Ex 3 walk you through doing this two models at a time. By the time I got to Ex 5 the schema was already most of the way there from Ex 2-3 work. So Ex 5 was mostly about: did I MISS anything from the Week 4 plan?

Comparison to my Week 4 sketch:
- Week 4 User → built (with role added)
- Week 4 Course → built (with @unique code added)
- Week 4 Assignment → built (with pointsTotal as the points field, dueDate optional)
- Week 4 Enrollment → built (as an explicit join table, was implicit in my Week 4 sketch)
- Week 4 DigestRun (one digest per user per day) → NOT built yet. Decided to defer this until I'm actually generating digests. Premature to model the digest history before I have a digest.

So I'm at 4/5 of the Week 4 plan, with the missing piece deliberately deferred. That's honest scope management.`},{q:`Assignment model — the design choices`,a:`model Assignment {
  id          Int       @id @default(autoincrement())
  title       String
  description String?
  pointsTotal Int?
  dueDate     DateTime?
  course      Course    @relation(fields: [courseId], references: [id])
  courseId    Int
  createdAt   DateTime  @default(now())
}

Choices:
- description, pointsTotal, dueDate all OPTIONAL. Real Canvas data has assignments with missing pieces — ungraded diagnostic essays have pointsTotal: 0 or null, some announcements masquerade as assignments with no due date. Optional fields handle this without forcing fake defaults.
- pointsTotal as Int, not Float. Canvas points are practically always whole numbers in the courses I've taken. If I'm wrong, this is a future migration — change Int to Float, update the existing rows. Reversible.
- Assignment belongs to ONE Course (single FK). A course has MANY assignments. Standard one-to-many.
- NO direct link to User. Assignments belong to Courses, not Users. Whether a User can SEE an Assignment depends on whether they're Enrolled in the Course. That's the indirection — User → Enrollment → Course → Assignment.

The Canvas Daily query for "what assignments does Diana have due this week" follows that chain:
1. Find Enrollments where userId = Diana
2. Get the courseIds
3. Find Assignments where courseId IN (those courseIds) AND dueDate <= next week

Tomorrow's API work will codify this query.`},{q:`Field types — choosing Int vs String vs DateTime`,a:`Walked through each field:

- id → Int @id @default(autoincrement()). Standard. Could have used String @id @default(cuid()) for non-sequential IDs (useful when exposing IDs in URLs), but stuck with sequential for simplicity. Canvas Daily IDs aren't user-facing identifiers.

- name, title → String. Required. No length constraints (Postgres TEXT is unbounded). If I wanted to enforce e.g. 200 char max, I'd add @db.VarChar(200) — but TEXT is fine for this app.

- email, code → String @unique. The @unique creates a Postgres UNIQUE INDEX which both enforces and speeds up lookups. Two-for-one.

- role → String @default("student"). Could have been an enum. Decided against — Prisma enums require a schema migration to add new values, which is heavier than I want for "instructor vs student vs maybe TA later." String + validation at the API layer is more flexible.

- pointsTotal → Int?. Optional integer. Could be 0 (diagnostic) or null (announcement-style).

- term → String?. Optional. Format is free-form like "Fall 2026" for now. Could become a related Term model if I need to query "all courses in Fall 2026" frequently, but for current scope this is fine.

- dueDate, createdAt → DateTime. Postgres TIMESTAMP(3) — millisecond precision. createdAt defaults to now(), dueDate is set explicitly per assignment.`},{q:`lib/prisma.js — the singleton pattern for Next.js`,a:`Created lib/prisma.js to export a single PrismaClient instance:

import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const globalForPrisma = globalThis

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  return new PrismaClient({ adapter })
}

const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export default prisma

Why this exists: Next.js dev mode hot-reloads modules. If I created a new PrismaClient on every import in every page, every save would spawn a new client, each holding a connection pool. Within minutes the dev server would exhaust the database's connection limit.

The globalForPrisma.prisma ?? createPrismaClient() trick caches the client on globalThis in dev. Hot reload? Same client. New page render? Same client. Production builds don't have this problem (no HMR), so the cache only attaches outside production.

This is THE pattern for Prisma + Next.js. Not in today's lab, but documented in the Prisma + Next.js guide. Set it up now and the rest of the app just does import prisma from '@/lib/prisma' and it works.`},{q:`Got ahead — the digest page already queries Prisma`,a:`Couldn't help myself. After getting the schema and seed working, I wired the first real query into app/page.js (the Today digest):

import prisma from '@/lib/prisma'

export default async function DigestPage() {
  const now = new Date()
  const in7Days = new Date(now)
  in7Days.setDate(in7Days.getDate() + 7)

  const [overdue, upcoming, courses] = await Promise.all([
    prisma.assignment.findMany({
      where: { dueDate: { lt: now } },
      include: { course: true },
      orderBy: { dueDate: 'asc' },
    }),
    prisma.assignment.findMany({
      where: { dueDate: { gte: now, lte: in7Days } },
      include: { course: true },
      orderBy: { dueDate: 'asc' },
    }),
    prisma.course.findMany({ orderBy: { name: 'asc' } }),
  ])

  // ... render the three sections
}

This is technically Day 3 territory (reading data from pages). But the schema was so fresh in my head that running the first real findMany felt like the right closing move. Three parallel queries via Promise.all:
1. Overdue assignments (dueDate < now)
2. Upcoming assignments (now <= dueDate <= 7 days from now)
3. All courses (for the course chip row)

include: { course: true } joins the course info onto each assignment in one query — same JOIN you'd write by hand in SQL, but Prisma generates it.

This is a server component (no "use client"), so the Prisma query runs ON THE SERVER. The browser gets pre-rendered HTML with the data already baked in. No loading state, no fetch, no useEffect.

The page renders today's date, an "Overdue" section if anything's overdue, a "Due this week" section, and a chip row of all courses. Tomorrow's Day 3 work is just polish on this foundation.`},{q:`What I'd do differently next round`,a:`Three things on the followup list:

1. Build the DigestRun model. Deferred today as premature. But once I'm generating real digests (Week 7+), I'll need a record of "what did the digest show on 2026-09-15" both for debugging ("why didn't user X get assignment Y in their digest?") and for analytics. Modeling that NOW would be slightly easier than retrofitting later.

2. Add a CanvasConnection model. Right now User has no path back to Canvas — no token, no canvas_user_id, no API base URL. When real Canvas integration lands, every User needs a 1:1 CanvasConnection holding the OAuth token. Forgetting this was a Week 4 oversight that didn't bite today but will bite Day 4.

3. Soft deletes via deletedAt: DateTime?. Right now if a course gets deleted, all its assignments break (ON DELETE RESTRICT will refuse). The real production answer is soft deletes — mark as deleted, filter out in queries, keep the row for historical digest queries. Going to add this when I have time, probably alongside the DigestRun work.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`Walk partner through the schema. 2 minutes. Partner asks one question.`,qa:[{q:`Screen-shared the schema and walked through each model`,a:`Opened prisma/schema.prisma in VS Code, made the font huge, walked through it model by model.

Order I went in: User first (the entity everything depends on), then Course (the second top-level entity), then Enrollment (the bridge between them), then Assignment (the leaf, belongs to Course).

For each one I named the fields, called out the types, and pointed at any decorator (@id, @unique, @default, @relation, @@unique) and explained what it does.

Spent extra time on Enrollment because that's where the interesting design choice is. Pointed at @@unique([userId, courseId]) and explained the "no double-enrollment" rule comes from the database, not from app code.`},{q:`Partner's follow-up question and my answer`,a:`Partner's question: Why did you make Enrollment an explicit model instead of just doing User { courses Course[] } and Course { users User[] } with Prisma's implicit many-to-many?

My answer: Two reasons.

First — flexibility. An enrollment is a real thing that exists in time and has its own state. Today it's just (userId, courseId). Tomorrow it'll have enrolledAt: DateTime. Next week it might have status: String (active / withdrawn / completed). Eventually it might have currentGrade: Float. The minute I want any of those fields, implicit many-to-many can't help me — the join table is hidden. Explicit means I can grow the model without restructuring.

Second — query ergonomics. Implicit many-to-many is great when you only care about the endpoints: "who's in this course," "what courses does this user have." But Canvas Daily will eventually need to query enrollments DIRECTLY — "show me all enrollments created in the last 30 days," "count active enrollments per course," "find dropped enrollments for re-engagement emails." With an explicit Enrollment model those queries are just prisma.enrollment.findMany(...). With implicit, they're awkward.

The cost of explicit is one extra line in every join query — instead of user.courses you write user.enrollments.map(e => e.course). For a 30-second-longer query syntax I get a model that grows with the product.

Same instinct as picking a real foreign key column over a denormalized JSONB blob. Schema design pays compound interest.`},{q:`What I'd refine after hearing myself explain it`,a:`Two refinements.

First — I led with "Enrollment is a real thing that exists in time." That phrase landed. I want to use it again. It captures the deeper principle: when a relationship has a temporal lifecycle, it deserves to be its own entity.

Second — I glossed over @@unique([userId, courseId]) in the original walkthrough and only mentioned it when the partner asked about enrollment dedup. Should have included it in the initial pass because it's a key invariant — "the same student can't enroll in the same course twice" is enforced at the database level, not at the app level. That's the kind of design choice that earns trust in the schema. Next time I'd point at it during the Enrollment walk-through.`}]}]},{number:24,label:`Day 3`,title:`Week 6, Day 3 — API Routes, Reading Data, List + Detail Pages`,subtitle:`Closing the full-stack loop. Build /api/* endpoints, render Prisma data on pages, add search and filtering, ship list + detail.`,color:`#ea580c`,sections:[{heading:`Exercise 1 — Build Your First API Route`,description:`Create GET endpoints that read from Prisma and return JSON. Test in the browser.`,qa:[{q:`Updated lib/prisma.js to export both named and default`,a:`Yesterday's lib/prisma.js used a default export. Pages were importing it as import prisma from '@/lib/prisma'.

Today's lab uses a NAMED export pattern — and even explicitly says "Use the named import everywhere — never default import." If I'd left the file as default-only, every API route would silently get undefined for prisma.

The fix is one line:
const prisma = globalForPrisma.prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma

export { prisma }
export default prisma

Both exports point at the same singleton. Old default imports still work, new named imports work, and adopting the lab's convention going forward doesn't break Day 2's pages. Took 5 seconds. Spent more time deciding it was right than typing it.

Could have rewritten every Day 2 page to use named imports instead — but that's churn for no benefit. The point of having both exports is the lib file doesn't care how callers want to import it. Most JS libraries do exactly this.`},{q:`Built /api/courses/route.js`,a:`app/api/courses/route.js:

import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      include: {
        _count: { select: { assignments: true, enrollments: true } },
      },
      orderBy: { name: 'asc' },
    })
    return NextResponse.json(courses)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })
  }
}

Went past the lab by adding _count in the include. Prisma's _count is a special directive — instead of fetching the full assignments array (3-4 rows per course) just to count them, _count generates a SQL COUNT(*) for each relation. The response shape has course._count.assignments as an integer.

Why this matters: the courses list page wants to show "4 assignments" next to each course. Without _count I'd have to either include the full assignments array (heavy) or do N+1 queries (worse). _count gives me the count in the same query, no row materialization. One trip to the database.

Tested in the browser at http://localhost:3000/api/courses. Got JSON back:
[
  {"id":3,"name":"Academic Writing","code":"ENG110","term":"Fall 2026",...,"_count":{"assignments":3,"enrollments":2}},
  {"id":2,"name":"Calculus II","code":"MATH201",...,"_count":{"assignments":3,"enrollments":2}},
  {"id":1,"name":"Intro to Computer Science","code":"CS101",...,"_count":{"assignments":4,"enrollments":3}}
]

Ordered by name alphabetically. Counts match what's in Prisma Studio. Round trip works.`},{q:`Built /api/assignments/route.js with query parameter support`,a:`Did the basic endpoint AND the bonus server-side filter in the same pass since the lab walks you through both.

app/api/assignments/route.js:

import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get('courseId')

  try {
    const assignments = await prisma.assignment.findMany({
      where: courseId ? { courseId: parseInt(courseId, 10) } : {},
      include: { course: true },
      orderBy: { dueDate: 'asc' },
    })
    return NextResponse.json(assignments)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch assignments' }, { status: 500 })
  }
}

The request parameter is the standard Web Request. URL parsing pulls out searchParams. The where clause is a ternary — if courseId was provided, filter by it (with parseInt because URL params are strings); otherwise pass empty {} which means "all."

Tested both:
- /api/assignments → all 10 assignments, sorted by dueDate ASC. Earliest is "Diagnostic Essay" (2026-09-05), latest is "Midterm Project" (2026-10-22).
- /api/assignments?courseId=1 → 4 assignments, all from CS101.
- /api/assignments?courseId=999 → empty array, no error. Prisma's findMany returns [] for no matches, not null. Correct behavior.

include: { course: true } joins the course onto each assignment so the frontend can show "Hello World Program (CS101)" without a second query.`},{q:`Why the try/catch matters even though Prisma usually doesn't throw`,a:`Prisma DOES throw on certain failures — connection drops, malformed queries, constraint violations on writes. Bare Prisma calls without a try/catch would propagate the exception up to Next.js, which would return a generic 500 with the full stack trace exposed to the client.

The try/catch lets me:
1. Return a clean JSON error shape ({ error: '...' }) instead of an HTML error page
2. Set the status code explicitly (500)
3. Hide internal details from clients — production users see "Failed to fetch courses" not "PrismaClientKnownRequestError: P2010 ..."
4. Log the actual error server-side later if I want (currently swallowed — could improve)

In Hype Live every API endpoint had middleware doing this same shape. Each handler stayed focused on the happy path, the middleware caught everything. NestJS gives you that for free. In Next.js route handlers there's no equivalent middleware (yet) so I do it per-route.

Future refactor: extract a withErrorHandling wrapper that takes a handler and adds the try/catch. Three lines saved per route. Not worth doing until I have 5+ routes — premature abstraction otherwise.`}]},{heading:`Exercise 2 — Display Data on a Page`,description:`Render Prisma data on a page. Went with Option A (server component) for the courses list — no useEffect, no loading state, just data.`,qa:[{q:`The CoursesPage — pure server component`,a:`app/courses/page.js:

import prisma from '@/lib/prisma'
import CourseCard from './course-card'

export default async function CoursesPage() {
  const courses = await prisma.course.findMany({
    include: {
      _count: { select: { assignments: true, enrollments: true } },
    },
    orderBy: { name: 'asc' },
  })

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Courses</h1>
      <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{courses.length} courses this term</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  )
}

Things that didn't have to exist because this is a server component:
- No useState for the courses array
- No useEffect to fetch
- No loading state — there's no in-between moment, the page IS the data
- No fetch() call — Prisma is called directly in the component body
- No "/api/courses" round-trip — server queries the database, renders HTML, sends to browser

Same Prisma query as my /api/courses route (with the _count include). The difference: the API route is called by other clients (browser fetches, future mobile app, whatever). The page is rendered HTML. Same query, two consumers.

This is the lab's "Option A" pattern. For READ-only list pages it's strictly better than client-fetching — fewer network round trips, no loading flash, no JS shipped for the rendering layer.`},{q:`Why I chose server component over client for the courses list`,a:`Three reasons.

First — the courses list has no interactivity. Nothing on the page changes after first render. No search, no filter, no toggle. It's a read-and-display screen. Client component for this would be pure overhead — ship the React code to the browser, hydrate, do an extra HTTP fetch to /api/courses, render, all to display the same data the server could have rendered directly.

Second — fewer states to manage. With a server component I don't even have a "loading" concept. The user clicks the link, Next.js fetches the data on the server, returns the rendered HTML. By the time the page paints, the data is there. With a client component I have to write the loading branch, the error branch, the empty branch — three states, each of which needs design and testing.

Third — security. The Prisma query runs on the server. If I add auth later (user-scoped queries), the auth check ALSO happens on the server, in the same render. There's no API endpoint exposed publicly that needs separate auth logic. Defense by architecture.

When I'd switch to client: the moment I add search, filter, or any other state-driven interaction. That's the next exercise — assignment list IS a client component for exactly that reason.`},{q:`Stretch — used both server and client patterns in the same project`,a:`The lab presents Option A and Option B as alternatives. I used both:
- /courses (list) → server component, direct Prisma query
- /assignments (list) → client component, fetches from /api/assignments

Both patterns are useful, just for different jobs. Picking which one to use IS the architectural skill the lab is teaching.

The instinct: start every page as a server component. If you find yourself needing interactivity (search, filter, optimistic updates, modals), extract the interactive piece into a client subtree. Don't make the WHOLE page client when only one widget needs to be.`}]},{heading:`Exercise 3 — Add Filtering`,description:`Built AssignmentList — client component with search input AND a status filter (all / upcoming / past).`,qa:[{q:`AssignmentsPage as a thin server wrapper around the client list`,a:`app/assignments/page.js (server):

import AssignmentList from './assignment-list'

export default function AssignmentsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">Assignments</h1>
      <p className="mt-1 mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        Search and filter all your assignments
      </p>
      <AssignmentList />
    </div>
  )
}

Page is a server component (no "use client"). It just sets up the header and container, then renders the AssignmentList client component below.

Why this split: the header text never changes — it can be server-rendered. The list needs interactivity — it must be client. Putting both in a single client component would force the static header into the client bundle for no reason. This split is the cheapest version of the lesson — server outer, client inner.`},{q:`AssignmentList — the client component with search and filter`,a:`app/assignments/assignment-list.js — has "use client" at the top because it uses useState + useEffect:

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const res = await fetch('/api/assignments')
      const data = await res.json()
      setAssignments(data)
      setLoading(false)
    }
    load()
  }, [])

  const now = new Date()

  const filtered = assignments.filter((a) => {
    const dueDate = a.dueDate ? new Date(a.dueDate) : null
    const matchesSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.course.name.toLowerCase().includes(search.toLowerCase())
    const matchesFilter =
      filter === 'all' ||
      (filter === 'upcoming' && (!dueDate || dueDate >= now)) ||
      (filter === 'past' && dueDate && dueDate < now)
    return matchesSearch && matchesFilter
  })

  // ... rest renders the search input, filter dropdown, and the filtered list

Four pieces of state:
- assignments — the full list from the API
- search — the search string
- filter — "all" | "upcoming" | "past"
- loading — only true during the initial fetch

The filter pattern is the Week 5 Day 3 pattern applied to a real dataset. AND-combined predicates — an assignment must match both the search AND the status filter. The matchesSearch checks both title and course name, so typing "math" matches any assignment in MATH201, not just ones with "math" in the title.

The dueDate handling deserves a note: the API returns dueDate as an ISO string (JSON doesn't have a Date type). Comparing strings to a Date object would silently misbehave. So I new Date(a.dueDate) once per row, then do real Date comparisons. The cost is per-render parsing — for 10 assignments it's nothing.`},{q:`Why client-side filtering instead of round-tripping every keystroke`,a:`Two reasons.

First — latency. With 10 assignments in the database, filtering in JS is sub-millisecond. Fetching from /api/assignments?search=...&filter=... on every keystroke would be 50-200ms each, multiplied by every character typed. Even if the network is fast, the UX is laggy.

Second — the dataset is small and bounded. 10 assignments now, maybe 50 across a few semesters of real Canvas data. That fits comfortably in browser memory. Client-side filter is the right call.

When I'd flip this: if the dataset gets into the thousands, OR if I want to filter by something the database can do better than JS (full-text search, fuzzy match). Then server-side filtering via query params (the bonus pattern from Ex 1) earns its keep. The API route ALREADY supports ?courseId= so when I add that filter in the UI later, it's just a matter of building the URL.

For now: fetch once on mount, filter in memory. Standard pattern, scales until it doesn't.`},{q:`Loading state — why I kept it`,a:`Server components don't need loading states because the data is there when the page renders. Client components DO need them because there's a real moment between mount and first data arrival.

In dev on a local Postgres, that moment is maybe 20ms — basically invisible. In production from a real network it could be 300-500ms. Better to render "Loading..." for those 500ms than to render an empty list that suddenly populates and reflows the page.

if (loading) return <p className="text-sm text-zinc-500 dark:text-zinc-400">Loading...</p>

Could have done <Skeleton /> placeholders for fancier UX. Skipped it. The text is honest and unambiguous. Polish comes later when the rest of the app is real.`}]},{heading:`Exercise 4 — Style the Data Display`,description:`Built CourseCard as a reusable component. Used Tailwind 4 throughout the project instead of the lab's inline styles.`,qa:[{q:`CourseCard — reusable, links to detail`,a:`app/courses/course-card.js:

import Link from 'next/link'

export default function CourseCard({ course }) {
  return (
    <Link
      href={\`/courses/\${course.id}\`}
      className="block rounded-xl border border-zinc-200 dark:border-zinc-800 px-5 py-5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50 truncate">{course.name}</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
            {course.code}{course.term ? \` · \${course.term}\` : ''}
          </p>
        </div>
        <div className="text-right text-sm shrink-0">
          <p className="font-semibold text-zinc-900 dark:text-zinc-50">{course._count?.assignments ?? 0}</p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">assignments</p>
        </div>
      </div>
      <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
        {course._count?.enrollments ?? 0} students enrolled
      </p>
    </Link>
  )
}

Notes:
- The whole card is a <Link>. Clicking anywhere on the card navigates to /courses/[id]. No "View course" button needed.
- block on the Link is what makes the whole anchor area clickable — by default <a> is inline.
- _count?.assignments ?? 0 — defensive. If somehow the API didn't include _count, this falls back to 0 instead of rendering "undefined".
- hover:bg-zinc-50 + transition-colors gives a subtle hover effect. Tailwind handles the pseudo-selector that inline styles can't.
- dark: variants throughout because the app supports both light and dark themes. Got this for free by sticking to zinc shades from day one.`},{q:`Why Tailwind instead of the lab's inline styles`,a:`The lab uses inline styles for everything. They work, but they're rough for any project larger than a tutorial:
- No hover/focus pseudo-selectors (style={{ ":hover": ... }} doesn't work — that's not real CSS)
- No media queries
- No dark mode support
- Repeating the same style object across components instead of class names
- No design tokens — every color and spacing is hardcoded inline

Tailwind 4 was already installed in canvas-daily from the Day 1 scaffold (next.js's create-next-app added it as one of the prompts). So I've been Tailwind-first since Day 1.

The CourseCard above has hover state, dark mode, responsive layout (via the parent grid), and consistent spacing — all in classNames. Translating it to inline styles would either lose features or require state management for hover.

This is the same instinct as picking explicit join tables over implicit ones yesterday: tutorials show the minimal version, real code makes the slightly-bigger version that survives the second week. Now's the time to set the pattern.`},{q:`The responsive grid layout`,a:`In CoursesPage:
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

grid-cols-1 = one column on small screens.
sm:grid-cols-2 = two columns once the viewport is ≥640px.
gap-4 = 16px gap between cards.

Three courses on a phone stack vertically. On a tablet or laptop they show two-per-row. No CSS, no media queries hand-written — Tailwind's responsive prefixes do it.

The lab's example uses grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) which is more sophisticated (auto-flows as many columns as fit). For 3 courses my simpler version is fine. For 50 courses I'd switch to auto-fill. Pick the responsive strategy that matches the data volume.`}]},{heading:`Exercise 5 — Build a Detail Page`,description:`Course detail with assignments AND enrolled students; assignment detail with course link AND related assignments. Went past Level 2 and Level 3 mods.`,qa:[{q:`Course detail — includes assignments AND enrollments`,a:`app/courses/[id]/page.js (key parts):

import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'

export default async function CourseDetailPage({ params }) {
  const { id } = await params

  const course = await prisma.course.findUnique({
    where: { id: parseInt(id, 10) },
    include: {
      assignments: { orderBy: { dueDate: 'asc' } },
      enrollments: { include: { user: true } },
    },
  })

  if (!course) notFound()

  // ... render assignments + enrolled students sections
}

Two patterns past the lab here.

First — notFound() from next/navigation. The lab returns a manual "Recipe Not Found" JSX block. Better is calling notFound() which kicks Next.js into its not-found handling — proper 404 status code, can be customized with a not-found.js file at the route level. The user gets a real "page not found" experience, search engines get the right signal, and the code stays clean.

Second — nested include. The single Prisma query fetches the course, its assignments (with ordering), AND its enrollments (with the user record for each). One database round-trip, three related shapes returned. SQL underneath this is a course query plus two joins/subqueries — Prisma optimizes the actual queries it sends.

The course detail page now shows:
- Course name, code, term (header)
- "Assignments (4)" — clickable list, each links to /assignments/[id]
- "Enrolled Students (3)" — chip row with each user's name and role
- Overdue assignments get a red dot/text

That's the Level 2 mod from the lab (show related data) baked in.`},{q:`Assignment detail — with related assignments from the same course`,a:`app/assignments/[id]/page.js (key parts):

const assignment = await prisma.assignment.findUnique({
  where: { id: parseInt(id, 10) },
  include: { course: true },
})

if (!assignment) notFound()

const related = await prisma.assignment.findMany({
  where: {
    courseId: assignment.courseId,
    id: { not: assignment.id },
  },
  orderBy: { dueDate: 'asc' },
  take: 5,
})

Two queries on this page:
1. findUnique for the assignment itself (with its course included)
2. findMany for the related — same courseId, exclude the current one, top 5 by due date

The id: { not: assignment.id } is Prisma's NOT operator — translates to SQL's <> or NOT IN. Without it I'd have the current assignment showing up in its own "related" list. Awkward.

take: 5 caps the related list. CS101 has 4 assignments, MATH201 has 3, ENG110 has 3. The cap won't trigger now, but if a real Canvas course has 30 assignments I don't want the entire list dumping into the "related" section. 5 is enough to be useful, small enough to not overwhelm.

This is the Level 3 modification — "show related items, e.g., other recipes in the same category." Built in.`},{q:`Smart due-date rendering on the digest`,a:`Updated app/page.js (the Today digest) to use friendlier date strings. Instead of "Due Sep 10" for everything, I compute days-until-due and use natural phrases:

const daysUntil = a.dueDate
  ? Math.ceil((a.dueDate - now) / (1000 * 60 * 60 * 24))
  : null

// then in JSX:
{overdueBadge
  ? \`\${Math.abs(daysUntil)}d overdue\`
  : daysUntil === 0
  ? 'Due today'
  : daysUntil === 1
  ? 'Due tomorrow'
  : \`Due \${a.dueDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}\`}

Four cases:
- Overdue → "3d overdue" (in red)
- Due today (0 days away) → "Due today"
- Due tomorrow (1 day away) → "Due tomorrow"
- Otherwise → "Due Sep 24" (the formatted date)

The (a.dueDate - now) / (1000 * 60 * 60 * 24) is the standard "milliseconds to days" conversion. Math.ceil rounds up so an assignment due at 11:59pm today still says "Due today" not "Due tomorrow."

Small detail, but this is the kind of thing that makes the digest feel like a product rather than a database viewer. A real student doesn't think "due 2026-09-10" — they think "due tomorrow." Match the mental model.`},{q:`The list ↔ detail navigation flow`,a:`Tested the full cycle:
1. http://localhost:3000/courses → list of 3 course cards
2. Click CS101 card → /courses/1 → CS101 detail with 4 assignments + 3 enrolled students
3. Click "Loops & Conditionals Lab" → /assignments/3 → assignment detail with course link + 3 related assignments
4. Click "← Assignments" → /assignments → full list with search
5. Type "midterm" → filters to 2 results (CS101 Midterm Project, MATH201 Midterm Exam)
6. Click MATH201 Midterm Exam → /assignments/8 → that detail page
7. Click "Calculus II · MATH201" link → /courses/2 → MATH201 detail
8. Click "← Courses" → /courses

Every link does what it should. No broken edges. The graph closes — anywhere you are in the app you can get back to a list, and from any list you can drill into any item.

This is the list-and-detail pattern the lab promises is "one of the most common patterns in web apps." It IS. The same shape powers Instagram (feed → post), Amazon (search → product), every job board, every CRM. Once you can build this cleanly, you've built the skeleton of most CRUD apps.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes explaining one of three things to a partner. Picked the full-stack loop.`,qa:[{q:`Which concept I picked — API route, full-stack loop, or server vs client for READ`,a:`The full-stack loop. It's the headline of the day — by the end of today, data goes from Postgres all the way to a rendered React component on the user's screen, and I can point at every step. If I can describe that flow cleanly out loud, I know the day's lessons landed. The other two options are smaller pieces of the same story.`},{q:`My 2-minute walkthrough`,a:`Let me trace what happens when a user opens http://localhost:3000/courses in their browser.

Step 1: The browser sends a GET request for /courses to my Next.js server. No JavaScript involved yet — this is just an HTTP request the browser makes when you hit Enter on the address bar.

Step 2: Next.js's router sees the URL and looks for app/courses/page.js. Finds it. The exported function is an async server component. Next.js invokes it.

Step 3: Inside the function, the first line is await prisma.course.findMany({ include: { _count: { ... } } }). That's the Prisma client opening a Postgres connection (via the singleton in lib/prisma.js), sending a SQL query — actually two queries because of the _count aggregation — to the Neon-hosted database. Neon executes them, returns rows. Prisma deserializes the rows into JavaScript objects with the right shape. The await resolves.

Step 4: Now I have the courses array in memory on the server. The function returns JSX — a <div> with a grid containing one <CourseCard> per course. React on the server renders that JSX to HTML. Inline-server-side. No browser involved yet.

Step 5: Next.js sends that HTML back to the browser as the response to the original GET. The browser parses it, applies the CSS (Tailwind classes), paints to the screen.

Step 6: At this point the user sees the courses. The page is interactive enough — every CourseCard is wrapped in a Next.js <Link>. Hovering activates the Tailwind hover class. Clicking starts the cycle over again for the detail page.

The data started in Postgres rows. It traveled across the network to my Node.js server as deserialized objects. The server rendered them to HTML in the same process. The HTML traveled across the network to the browser. The browser turned the HTML into pixels. End to end, that's the loop.

What's different from a Vite + plain React app: in that world, the database query has to happen via an API endpoint, the client fetches it, useState holds it, useEffect triggers it, loading state shows in between. Five steps where my version has one. The reason: Next.js lets the server do the work directly. The result is the same on screen, but the path to get there is half the length.`},{q:`Partner's follow-up and my answer`,a:`Partner's question: What if the API URL was wrong — say I had a typo in the fetch URL on the client component. Where would the error appear?

My answer: Depends which page. For the courses list, there IS no fetch URL on the client. The page is a server component, the Prisma call happens server-side, and the rendered HTML is what's sent. A typo in a fetch URL would just... not exist. There's nothing to typo.

For the assignments list, which IS a client component fetching /api/assignments — yes, a typo would surface in the browser. The fetch would either return 404 (if the path doesn't exist) or fail in some other way. Either way the response is some non-OK status, and my code path is:

const res = await fetch('/api/assignments')
const data = await res.json()
setAssignments(data)

I don't check res.ok. So if the API returned 404 with an HTML error page, the .json() would throw a "Unexpected token < in JSON" error because Next.js's 404 response is HTML, not JSON. That throw would propagate up to React, which would show an error overlay in dev — basically a red screen with the stack trace.

Honestly that's not great error handling on my part. The right version is:

const res = await fetch('/api/assignments')
if (!res.ok) {
  setError(\`Failed to load: \${res.status}\`)
  return
}
const data = await res.json()

Same pattern as the API route's try/catch — but on the client side. I should add this when I do the polish pass.

This is the answer in two parts: the error appears in different places depending on whether the component is server or client, AND I have a real bug in my client component because I'm not checking res.ok. Catching that during the walkthrough is the value of the verbal demo.`},{q:`What saying it out loud surfaced`,a:`Two things.

First — the partner's question about the missing res.ok check was a real catch. I described the happy path confidently, and then they asked a "what if it fails" question and I found a bug. The verbal demo IS a code review at a distance. Every time I do one I find at least one thing I'd change.

Second — the framing "five steps in Vite, one step in Next.js" landed cleanly as a contrast. I almost forgot to mention it. The point of the day's lab isn't just "you can call Prisma in a page" — it's that Next.js collapses the client-server round-trip when you don't need it. That's the architectural win. Going to lead with that next time instead of building up to it.`}]}]},{number:25,label:`Day 4`,title:`Week 6, Day 4 — Forms, POST Routes, the CREATE Loop`,subtitle:`Controlled form → fetch with POST → Prisma create → state update on the page. Plus validation on both sides and a success state worth seeing.`,color:`#7c3aed`,sections:[{heading:`Exercise 1 — Build a Form Component`,description:`Built CreateProfileForm — a controlled form on the Settings page for adding Canvas profiles (me + daughter's account).`,qa:[{q:`Why I built the form for User/Profile, not Assignment`,a:`The lab uses recipes or tasks because those are the apps it scaffolds. Canvas Daily already has Assignments seeded in the database (10 of them). Assignments come FROM Canvas — they aren't user-created in my app. So adding a "create new assignment" form would be semantically wrong.

The thing a user DOES create in Canvas Daily is a Canvas profile — a record saying "this account belongs to me, fetch its assignments." Right now I'm the only user but the app is built to track multiple Canvas accounts. My profile (Yavapai College student) plus my daughter's profile (her 8th grade online school) — two profiles, one hub.

So the form lives at /settings and creates a User record. That's the right shape for the data model AND the right shape for the product.

Side benefit: the User table is the model with the unique constraint (email). That means I get to practice the P2002 conflict handling in the POST route — which is more interesting than the "title required" example from the lab.`},{q:`The controlled inputs — 4 useState calls for 3 form fields plus UX state`,a:`'use client'

import { useState } from 'react'

export default function CreateProfileForm({ onSuccess, onCancel }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  // ...
}

Six useState calls total:
- 3 for the form fields (name, email, role)
- 1 for the error message
- 1 for the success state
- 1 for the loading state

I almost combined them into a single object — useState({ name: '', email: '', ... }) — and decided against. The "update one field at a time" pattern works cleanly with separate useStates, and each field is independent (typing name doesn't affect email). For 3 fields, six separate useStates is clearer than one object plus a spread-update pattern. For 15 fields, I'd reach for useReducer.

The two props at the top — onSuccess and onCancel — are how the form talks back to its parent. The parent decides what "success" and "cancel" mean. The form just calls the callback.`},{q:`Repurposing the 'role' field as 'School / Label'`,a:`The schema has role String @default("student"). Originally I designed it for student/instructor differentiation.

For Canvas Daily's actual use case, the more useful field is "which school is this Canvas account for." So I kept the database column name (role) but relabeled the form input:

<label>School / Label</label>
<input
  placeholder="e.g. Yavapai College, 8th Grade Online"
  ...
/>

This is a pragmatic schema reuse. The column type is still String, the default is still "student" (for backwards compat), but the meaning shifted. Costs nothing — I'm still going to need a way to label each Canvas profile so I can render "Yavapai College: 3 assignments due, 8th Grade Online: 2 assignments due" in the digest.

Future cleanup: rename the column to label or schoolName via a Prisma migration. Cheap to do later, no rush.

The lesson here is about flexibility. My Week 4 sketch had role: enum("student"|"instructor"). The schema I shipped had role: String. The looser type let me repurpose the field as the product evolved. If I'd locked it to an enum I'd be doing a real migration right now instead of updating a label.`},{q:`Form layout — used Tailwind, kept it tight`,a:`Three fields stacked vertically inside a card. Submit + Cancel buttons in a row at the bottom. Standard form layout.

Notes on the Tailwind choices:
- bg-zinc-50 dark:bg-zinc-900/50 — the form's background sits ONE shade off from the page background. Subtle visual nesting without a heavy border.
- focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700 — focus rings on inputs. Keyboard accessibility for free.
- The submit button is dark on light page / light on dark page. Inversion makes it pop.
- Cancel is a secondary button — bordered, transparent background.

required attribute on the name and email inputs lets the browser do basic HTML5 validation (can't submit with empty required fields). It's belt-and-suspenders with my JS validation, but it stops invalid form submissions before they even reach my JS handler. Costs nothing.`},{q:`First test — submit logs and alerts (sanity check before wiring fetch)`,a:`Before adding the real fetch in Exercise 2, the handleSubmit was just:

console.log('Form data:', { name, email, role })
alert('Submitted!')

Filled out the form with "Diana / diana@yavapai.edu / Yavapai College". Submitted. Console showed:
Form data: { name: 'Diana', email: 'diana@yavapai.edu', role: 'Yavapai College' }
Alert popped up.

Controlled inputs working. Submit handler running. State captured. Ready to wire to the API.`}]},{heading:`Exercise 2 — Build the POST API Route`,description:`Added POST handler to /api/users with validation and proper status codes. Caught Prisma P2002 specifically.`,qa:[{q:`Created /api/users/route.js with GET + POST in the same file`,a:`import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      orderBy: { createdAt: 'asc' },
    })
    return NextResponse.json(users)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch profiles' }, { status: 500 })
  }
}

export async function POST(request) {
  // ... validation + create ... see next answer
}

Same file, two exports — Next.js routes the request to GET or POST based on the HTTP verb. Same URL (/api/users), different behavior depending on method. This is the REST convention baked into the routing layer.

GET sorted ascending by createdAt (oldest first) — fits the settings UI where the first profile added shows at the top. Most APIs default to DESC, but in this context "your profiles in the order you added them" is the more natural reading order.`},{q:`POST handler — validation, create, status codes`,a:`export async function POST(request) {
  try {
    const body = await request.json()

    if (!body.name || body.name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      )
    }

    if (!body.email || !body.email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required' },
        { status: 400 }
      )
    }

    const user = await prisma.user.create({
      data: {
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        role: body.role?.trim() || 'student',
      },
    })

    return NextResponse.json(user, { status: 201 })
  } catch (error) {
    if (error.code === 'P2002') {
      return NextResponse.json(
        { error: 'That email is already registered' },
        { status: 409 }
      )
    }
    return NextResponse.json({ error: 'Failed to create profile' }, { status: 500 })
  }
}

Status codes I used:
- 201 Created on success (with the new record in the body)
- 400 Bad Request for invalid input
- 409 Conflict for duplicate email
- 500 Internal Server Error for anything unexpected

201 instead of 200 because this endpoint CREATES something. 200 is "OK, here's what you asked for." 201 is "I made a new thing, here it is." Subtle semantic difference, but HTTP cares — and so do API consumers (curl shows the status, monitoring tools categorize on it).

The body.email.trim().toLowerCase() before insertion is a small but important normalization. "Diana@Yavapai.edu" and "diana@yavapai.edu" should NOT be allowed as two separate profiles. Lowering on insert means the unique constraint actually catches dupes regardless of casing.`},{q:`The P2002 catch — why it's better than the generic error`,a:`Prisma's create() throws a PrismaClientKnownRequestError when a database constraint is violated. The error object has a .code field that maps to specific Prisma error codes.

P2002 is "Unique constraint failed." Specifically what happens when I try to insert a User with an email that already exists.

Without the special catch, my generic error handler returns "Failed to create profile" with a 500. That's wrong on two counts:
1. The server didn't fail — the request was bad because the email is taken. That's the CLIENT's fault, not the server's. 4xx is the correct family.
2. "Failed to create profile" tells the user nothing. They don't know what's wrong or how to fix it.

The fixed version returns 409 Conflict with "That email is already registered." Now the user knows EXACTLY what went wrong, and the HTTP semantics are right.

The complete list of Prisma error codes is in their docs. The common ones I'll hit going forward:
- P2002 — unique constraint
- P2003 — foreign key constraint
- P2025 — record not found (for update/delete operations)

Worth memorizing those three. They cover 90% of write-time failures.`},{q:`Tested the POST from the browser console`,a:`Opened the running app, hit F12, dropped into the Console tab. Pasted:

fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test Profile',
    email: 'test@example.com',
    role: 'Test School'
  })
}).then(r => r.json()).then(console.log)

Got back:
{ id: 5, name: 'Test Profile', email: 'test@example.com', role: 'Test School', createdAt: '2026-06-03T...' }

Refreshed Prisma Studio. The row was there.

Then ran the same fetch AGAIN with the same email. Got back:
{ error: 'That email is already registered' }

And checked the response status in DevTools Network tab — 409. Exactly right.

Then ran it with empty name:
{ error: 'Name must be at least 2 characters' }

400 status. Also right.

Three tests, three status codes, all behaving as designed. Endpoint is solid.`}]},{heading:`Exercise 3 — Wire the Full CREATE Loop`,description:`Connected the form to /api/users. Updated the parent to add the new user to state. Form closes, list updates.`,qa:[{q:`Form's handleSubmit — fetch, parse, branch on response.ok`,a:`async function handleSubmit(e) {
  e.preventDefault()
  setError('')

  if (name.trim().length < 2) {
    setError('Name must be at least 2 characters.')
    return
  }
  if (!email.includes('@')) {
    setError('Enter a valid email address.')
    return
  }

  setLoading(true)

  try {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, role }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Something went wrong.')
      setLoading(false)
      return
    }

    setName('')
    setEmail('')
    setRole('')
    setLoading(false)
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false)
      if (onSuccess) onSuccess(data)
    }, 1500)
  } catch {
    setError('Failed to add profile. Please try again.')
    setLoading(false)
  }
}

Five phases:
1. Pre-flight: clear old errors, run client-side validation, set loading.
2. Send: POST to /api/users with JSON body.
3. Branch: parse response. If !res.ok, show the server's error message and stop. Critically: the server's error message becomes the user-facing message. The server is the source of truth for what went wrong.
4. Success path: clear form fields, stop loading, show success banner.
5. After 1.5s: dismiss banner, call onSuccess(data) — parent updates the list.

The setTimeout(..., 1500) is intentional UX. Without it, the form would close instantly on success and the user would never see "Profile added successfully!" The 1.5 second delay gives them a moment to register the confirmation before the form vanishes.`},{q:`Why the page is a SERVER component, not the client component the lab teaches`,a:`Lab pattern (page becomes client):

"use client";
function TasksPage() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    fetch('/api/tasks').then(r => r.json()).then(setTasks)
  }, [])
  // ...
}

My pattern (server outer, client inner):

// app/settings/page.js — SERVER component
import prisma from '@/lib/prisma'
import ProfileManager from './profile-manager'

export default async function SettingsPage() {
  const users = await prisma.user.findMany({ orderBy: { createdAt: 'asc' } })
  return (
    <div className="...">
      <h1>Settings</h1>
      <ProfileManager initialUsers={users} />
    </div>
  )
}

The page is still a server component. It fetches the initial users list via Prisma directly (no /api/users round-trip). It passes them as a prop to ProfileManager, which is the client component.

Wins from this pattern:
- No loading flash on first render. The page arrives with users already in the HTML.
- Database query runs server-side, not exposed via API for this purpose
- ProfileManager seeds its state from the prop: useState(initialUsers), no useEffect needed
- The API endpoint /api/users still exists for the POST. Just not used for initial load.

This is the same lesson as Day 3 — server outer for static framing, client inner for interactivity. The CREATE flow doesn't require the page itself to be a client component.

The lab's approach works too. It's just less efficient. Worth flagging because the lab's pattern is what most tutorials show, and most tutorials are stuck in pre-server-component thinking.`},{q:`ProfileManager — the client component that owns the list state and form toggle`,a:`'use client'

import { useState } from 'react'
import CreateProfileForm from './create-profile-form'

export default function ProfileManager({ initialUsers }) {
  const [users, setUsers] = useState(initialUsers)
  const [showForm, setShowForm] = useState(false)

  function handleNewUser(user) {
    setUsers([...users, user])
    setShowForm(false)
  }

  return (
    <section className="...">
      <div className="flex items-center justify-between mb-4">
        <h2>Canvas Profiles</h2>
        {!showForm && (
          <button onClick={() => setShowForm(true)}>+ Add Profile</button>
        )}
      </div>

      {showForm && (
        <CreateProfileForm
          onSuccess={handleNewUser}
          onCancel={() => setShowForm(false)}
        />
      )}

      <ul>
        {users.map(user => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            {user.role && user.role !== 'student' && (
              <span className="badge">{user.role}</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

Two pieces of state:
- users — seeded from initialUsers prop, updated when form succeeds.
- showForm — controls form visibility. Toggles via the + Add button.

handleNewUser does two things: spread the new user onto the list, and close the form. Single callback, two side effects. The parent owns both pieces of state so both can update from one event.

The list update is [...users, user] — append at the end, matching the createdAt ASC ordering of the initial fetch. If I'd done [user, ...users] the new user would jump to the top, which contradicts the server-side ordering. Subtle consistency choice that matters for UX continuity.`},{q:`Why a Cancel button on the form (the lab doesn't mention this)`,a:`The lab's pattern is "click + Add to show form, click + Add again to hide." That's two clicks of the same button doing opposite things, and the button's label even changes ("Cancel" when expanded).

My pattern is two separate buttons:
- The + Add button at the top, only visible when the form is hidden
- A Cancel button inside the form, only visible when the form is shown

Costs nothing. Reads more clearly. Cancel inside the form is where users will look for it — if I've started typing and want to back out, my eyes are already in the form. Reaching back up to the top button feels like a discoverability problem the way the lab's pattern is set up.

This is a minor UX win, the kind of thing that distinguishes "got the lab working" from "shipped something." Every time I cut a corner because the lab didn't mention it, I'm setting the bar at the lab's level. The point of doing this is to set the bar higher.`},{q:`Tested the full create loop end-to-end`,a:`Loaded http://localhost:3000/settings. Page rendered with the existing 4 users (Dr. Amy Chen, Alice, Bob, Diana — from the seed).

Clicked + Add Profile. Form expanded. + Add button vanished from the header.

Typed: name "Test User", email "test@yavapai.edu", role "Yavapai College".

Clicked Add Profile. Button text changed to "Adding..." and was disabled for ~120ms. Then:
- Form fields cleared
- Green banner appeared: "Profile added successfully!"
- 1.5 seconds passed
- Banner disappeared, form closed
- New "Test User" row appeared at the bottom of the list

Refreshed the page. The new user was still there — the data is in Postgres, not just in React state.

Then I tested the failure path. Clicked + Add Profile again. Typed "test@yavapai.edu" (same email as before). Submitted. Got the red error banner: "That email is already registered." Form stayed open with my data still in it.

That's the loop. Form → POST → DB → state update → render. With proper handling on both success and failure paths.`}]},{heading:`Exercise 4 — Add Validation`,description:`Validation on both sides — client for UX, server for trust. Server is the gatekeeper.`,qa:[{q:`Client-side validation — what runs before the fetch`,a:`if (name.trim().length < 2) {
  setError('Name must be at least 2 characters.')
  return
}
if (!email.includes('@')) {
  setError('Enter a valid email address.')
  return
}

Two checks. Both run BEFORE setLoading(true), so a failed validation doesn't even put the form into "Adding..." state. Just shows the error, lets the user fix it, and the user can try again.

The .trim() on name catches the "   " case (whitespace-only). Without it, name="   " has length 3, would pass a "length >= 2" check, but submits as empty after server-side trimming. .trim() before length is the correct order.

The email check is intentionally lax — !email.includes('@'). Doesn't validate full RFC 5322 email format (that's a 100-line regex). Doesn't even check for a dot after the @. Just checks for any @ character.

Why so loose? Email validation is famously a rabbit hole. The "right" check is to send a verification email and let the user click the link. Anything stricter than "must have an @" risks rejecting valid edge-case emails. So the client check is "you clearly forgot the @" and the rest is the user's responsibility.`},{q:`Server-side validation — same checks, plus the unique constraint`,a:`if (!body.name || body.name.trim().length < 2) {
  return NextResponse.json(
    { error: 'Name must be at least 2 characters' },
    { status: 400 }
  )
}

if (!body.email || !body.email.includes('@')) {
  return NextResponse.json(
    { error: 'A valid email address is required' },
    { status: 400 }
  )
}

The same two checks as the client. Why duplicate them?

Anyone can bypass the client. Open the console, run my fetch() example with arbitrary data, the server is the last line of defense. Without server-side validation, an attacker (or a buggy mobile app, or a stale browser tab) could insert a 1-character name or an empty email into the database. From there it propagates everywhere — the digest renders "" as the user's name, etc.

The defensive instinct: NEVER trust input from the client. The server validates everything. The client validates for UX (instant feedback, no round-trip needed for obvious problems), the server validates for trust (the database is what gets the truth).

The unique constraint on email is a THIRD layer. Even if I had no JavaScript validation and pasted a duplicate email in via the API, Postgres itself refuses the insert. The database is the final layer of truth. Belt, suspenders, AND a backup belt.`},{q:`Showed the validation errors in the form`,a:`{error && (
  <p className="mb-4 rounded-lg bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 px-3 py-2 text-sm text-red-600 dark:text-red-400">
    {error}
  </p>
)}

Inline, above the form fields, with subtle red styling. Banner-style, not a popup or modal — doesn't interrupt the user's flow, just shows what's wrong so they can fix it and resubmit.

The error text comes from whatever called setError():
- Client-side validation → my hardcoded strings ("Name must be at least 2 characters.")
- Server response error → data.error from the JSON response ("That email is already registered")

Both end up rendered in the same banner. Consistent UI for any error source. The user doesn't need to know which layer caught it — they just see what's wrong.`},{q:`Tested the validation surfaces`,a:`Six tests covering each error path:

1. Empty name → client catches → "Name must be at least 2 characters."
2. Single character name → client catches → same message.
3. Whitespace-only name ("   ") → client catches via .trim() → same message.
4. Empty email → client catches → "Enter a valid email address."
5. Email without @ (e.g. "diana") → client catches → same.
6. Duplicate email → client lets it through (passes both checks), server catches via P2002 → 409 with "That email is already registered."

Each error rendered in the red banner inline above the form. None broke the form's state. The form stayed open with the user's data still in the inputs, so they could fix the issue without retyping.

What I didn't add: a max-length check on name. The schema allows TEXT (unbounded) and I didn't put an upper limit. Probably fine for names — real names rarely exceed 100 chars. But "fine for names" is the wrong frame. The real question is "what's the safe upper bound, and what do I want to happen above it?" 200 chars is the standard cap I'd add — keeps abusive long inputs from clogging the database. Future cleanup.`}]},{heading:`Exercise 5 — Add a Success State`,description:`Green banner that appears for 1.5 seconds before the form closes. Confirms the create worked before vanishing.`,qa:[{q:`Success state — useState, setTimeout, setSuccess(true) → false dance`,a:`Added a third UX state alongside loading and error:
const [success, setSuccess] = useState(false)

Set it inside the success branch of handleSubmit:
setSuccess(true)
setTimeout(() => {
  setSuccess(false)
  if (onSuccess) onSuccess(data)
}, 1500)

Two important details about the timing:
- success gets set to TRUE before the timeout starts. The banner appears immediately.
- After 1500ms, the banner is dismissed AND onSuccess is called (which in ProfileManager closes the form).

Could have called onSuccess immediately, but then the form would close before the user could read the banner. The 1.5s window IS the success UX. Without it the banner is invisible.`},{q:`Showing the success banner in the form`,a:`{success && (
  <p className="mb-4 rounded-lg bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-800 px-3 py-2 text-sm text-green-600 dark:text-green-400">
    Profile added successfully!
  </p>
)}

Right above the error banner location. Both share the same banner-style design — only the color differs (green for success, red for error). Visual consistency: the user's eyes already know to look at that spot for status messages.

Both banners can't show at the same time because the success branch in handleSubmit runs setError('') at the top and the error branch never sets success. They're mutually exclusive by code path.`},{q:`Why I didn't implement the redirect-to-detail stretch`,a:`The lab's Step 3 (stretch) suggests router.push(\`/tasks/\${data.id}\`) after creating — redirect to the new item's detail page.

I deliberately didn't. Two reasons:

First, the settings page doesn't HAVE a detail page for individual users. There's no /users/[id] route. Building one for a single-user app is premature. The list view on /settings is enough — you see all your profiles in one place.

Second, the create-and-stay flow is RIGHT for this product. After adding "8th Grade Online" I want to see it sitting next to "Yavapai College" in the list, not be teleported into a single-user view. Stay-in-place reinforces the mental model: this is a list-of-profiles screen, and I just added to that list.

When I WOULD use router.push: an e-commerce "Submit Order" flow. The user just committed to a transaction — give them the dedicated "Order Confirmed" page. The action was significant enough to warrant a context switch. Adding a Canvas profile isn't that significant.

Picking the right UX is more important than implementing every stretch goal.`},{q:`Why I didn't implement the description character counter or the confirmation modal`,a:`Character counter (Level 2 mod): my form has a "School / Label" field with no max length set yet. Adding a character counter requires deciding on a limit first. I could add "{role.length}/100" but I don't have evidence yet that 100 is the right number. Premature.

Confirmation modal (Level 3 mod): the form is two fields and a school label. Submission is reversible (worst case: I delete the profile and re-add). The cost of asking "are you sure?" on every submission is real user friction. Modals are for IRREVERSIBLE or HIGH-STAKES actions — "delete this account permanently," "submit the order for $1,200." Adding a profile is neither.

Skipping these is a deliberate choice, not laziness. Both would be appropriate features in different contexts. They're not appropriate here. Recognizing when NOT to add a feature is a real engineering skill.`}]},{heading:`Peer Activity — Verbal Mini-Demo (Demo + Break It)`,description:`Demo the CREATE flow. Partner tries to break it. Surface validation gaps.`,qa:[{q:`My 3-minute CREATE flow walkthrough`,a:`Screen-shared canvas-daily at /settings. Pointed at the existing list of 4 profiles seeded yesterday. Then clicked + Add Profile to expand the form.

Walked through the flow, pointing at the actual code in VS Code as I talked:

"When I click Submit, the form's handleSubmit function runs. First, e.preventDefault() — that stops the browser from trying to do a regular form submission and reloading the page. Then I run client-side validation — check the name is at least 2 chars after trim, check the email contains an @. If either fails, I show an error and return early, no network request.

If validation passes, I setLoading(true) — that disables the button and changes its label to 'Adding...' — and then I fetch POST to /api/users with the form data as JSON.

The fetch hits my POST handler in app/api/users/route.js. The handler parses the body, validates AGAIN — same checks the client did, because clients are untrusted — and if anything's wrong returns a 400 with an error message. If validation passes, it calls prisma.user.create with the cleaned data. Prisma sends the INSERT to Postgres, the row is created with an auto-generated id and createdAt timestamp, and the new row comes back as the result. The handler returns it with a 201 status.

The catch block at the bottom checks for error.code === 'P2002' — that's Prisma's unique constraint code. If the email's already taken, I return 409 with 'That email is already registered.' Any other error becomes a generic 500.

Back in the form, I parse the response. If !res.ok, I show the error and stop. If it's ok, I clear the form fields, show the green success banner, and after 1.5 seconds I call onSuccess(data) which is the callback the parent passed in. The parent — ProfileManager — does setUsers([...users, data]) which adds the new user to its state, and setShowForm(false) which closes the form. React re-renders the list with the new user appearing at the bottom.

End to end: keystrokes → state → fetch → server validation → Prisma INSERT → Postgres → response → state update → re-render. Seven steps, three layers (client, server, database)."`},{q:`Partner tried to break it — what they tried and what happened`,a:`Partner ran through about a dozen attempts. Going to list the interesting ones:

1. Empty form, hit Submit → blocked by HTML required attribute before my code runs.
2. Name "D" → blocked by client validation → "Name must be at least 2 characters."
3. Name "   " (3 spaces) → blocked by client .trim() check → same message.
4. Email "diana" → blocked by client → "Enter a valid email address."
5. Duplicate email → server caught via P2002 → 409 banner.
6. Name "Diana", email "@" (just the @ symbol, no rest) → THIS PASSED. Client check is only !email.includes('@'). Server's check is the same. The user got created with email "@". Real gap.
7. Pasted a 5000-character name in → succeeded. No max length validation anywhere. Real gap.
8. Tried to inject SQL ("Robert'; DROP TABLE User;--") → Prisma uses parameterized queries by default, so the dangerous content got safely stored as a literal string. No SQL injection.

Two real gaps surfaced. Worth fixing.`},{q:`The two gaps and the fix`,a:`Gap 1: Email validation is too loose. "@" passes my check.

Fix: use a tighter regex or a library. The classic minimum I'd add:
const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/
if (!emailRegex.test(body.email)) { ... }

That requires: something before the @, the @ itself, something between @ and the dot, the dot, something after. Catches "@" and "diana@" and "@yavapai.edu" — all of which are invalid.

Better long-term: use a validation library like Zod for both client and server validation. One schema, two layers. Worth the dependency once the app has more than three forms.

Gap 2: No max length on name. 5000-character name succeeds.

Fix: add a 200-character cap on name and a 500-character cap on the role/label field.
if (body.name.trim().length > 200) {
  return NextResponse.json({ error: 'Name must be 200 characters or less' }, { status: 400 })
}

Both fixes are 10 minutes of work. Going to add them tonight before tomorrow's lab. This is the value of the "have your partner try to break it" exercise — surfaces validation gaps in 15 minutes that I wouldn't have caught alone.

Adding these to the cli-session-log as a tracked followup. Validation is the kind of thing that gets bolted on later if you don't catch it now.`},{q:`What this verbal exercise surfaced beyond the bugs`,a:`Two meta-observations.

First — when I described the flow out loud, I noticed I'd been saying "the server validates, the server is the gatekeeper" for the whole walkthrough. Then partner found "@" passes both layers. Embarrassing because I'd JUST claimed the server was the gatekeeper, and it failed at gatekeeping. The lesson: claiming "the server protects me" without checking the specific rules the server actually enforces is empty. Validation only works at the specificity of the rules I wrote.

Second — the demo + break-it format is dramatically more useful than the previous verbal mini-demos. The lecture format is "explain a concept to a partner." This format is "show your code, then break it." It surfaces concrete bugs instead of abstract gaps. By Week 8 I want every code review to have a "now try to break it" round, even if I'm doing it solo. That mindset catches real bugs.

Going to start running "break it" passes on my own work before pushing.`}]}]}]},{label:`Week 7`,days:[{number:26,label:`Day 1`,title:`Week 7, Day 1 — Testing with Vitest, TDD, and AI Pair`,subtitle:`First TDD cycles, pure-function tests, mocked Prisma handlers, integration tests against a real DB, Playwright E2E, and GitHub Actions CI.`,color:`#16a34a`,sections:[{heading:`Exercise 1 — Vitest Setup + First TDD Cycle`,description:`Install Vitest in canvas-daily. Write a failing getDomain test. Make it green. Add a second test for the www subdomain.`,qa:[{q:`Setup — installed Vitest and added the test script`,a:`npm install --save-dev vitest

Added to package.json:
"scripts": {
  "test": "vitest"
}

vitest is the watch-mode runner. Save a test file, it re-runs automatically. Save a source file, only the affected tests re-run. The TDD cycle ends up being: write test → save → see red → write impl → save → see green. The terminal is essentially a feedback loop you don't have to babysit.

One note for canvas-daily: I'm on Prisma 7 with @prisma/adapter-pg, Tailwind 4, ESM throughout. Vitest works out of the box with all of that because it shares Vite's transform pipeline. No Babel config, no transformIgnorePatterns archaeology. If this were a Jest project I'd have already lost an hour to ESM compat.`},{q:`First RED — getDomain.test.js with no implementation`,a:`Created src/utils/getDomain.test.js:

import { test, expect } from "vitest";
import { getDomain } from "./getDomain.js";

test("extracts domain from a URL", () => {
  expect(getDomain("https://github.com/x/y")).toBe("github.com");
});

Saved. Vitest screamed:

Failed to resolve import "./getDomain.js" from "src/utils/getDomain.test.js"

That's the RED I wanted. The test runner is doing its job — it told me, in plain English, exactly what's missing. The failing test has named the file it expects.

This is the discipline TDD enforces: I'm not allowed to write code that nothing asks for. The failing test is the request. Implementation answers it.`},{q:`GREEN — minimum implementation`,a:`Created src/utils/getDomain.js:

export function getDomain(url) {
  return new URL(url).hostname;
}

One line. The built-in URL constructor does the parsing — .hostname returns "github.com" for "https://github.com/x/y". No regex, no string splitting.

Saved. Vitest re-ran. Green tick. ~50ms total.

The minimum-implementation rule matters. If I'd "helpfully" added protocol handling, query-string stripping, port handling — none of that is tested. The test is the only thing that proves behavior. Code that goes beyond the tests is code I haven't verified.`},{q:`Second test — www subdomain preserved`,a:`Added:

test("preserves www subdomain", () => {
  expect(getDomain("http://www.github.com/x/y")).toBe("www.github.com");
});

Hit save. Vitest re-ran. Already green — URL.hostname returns "www.github.com" for www-prefixed URLs by default.

This is the test passing without code changes. The first test specified ONE behavior; the second test confirms a related behavior I didn't have to code for. URL handles it for me. If I'd written a string-split implementation, the www case might have broken — the test would have caught it.`},{q:`Two-test GREEN run — what the terminal showed`,a:`vitest running on watch:

 ✓ src/utils/getDomain.test.js (2)
   ✓ extracts domain from a URL
   ✓ preserves www subdomain

 Test Files  1 passed (1)
      Tests  2 passed (2)
   Duration  18ms

Whole loop — setup, RED, impl, GREEN, second test — took maybe 4 minutes. The test-runner overhead is essentially zero, which is the point. Slow tests get skipped; fast tests get run constantly. Vitest's watch mode runs only what's affected by your save, so even with hundreds of tests the feedback stays sub-second.`}]},{heading:`Exercise 2 — TDD a Pure Function`,description:`Adapted to Canvas Daily — built formatDueIn(dueDate, now) instead of formatBookmarkAge. Tests first, all RED. Implement to GREEN.`,qa:[{q:`Why I adapted the function to formatDueIn(dueDate, now)`,a:`The lab's formatBookmarkAge was right for the Bookmarks app the lab assumes. Canvas Daily's whole point is surfacing what's DUE — not what's old. So the same shape of function, with a flipped semantic: take a future date and a "now," return a string about how soon something is due.

The Assignment model already has a dueDate field. This function is something I'd actually call in the digest UI ("due in 2 days", "overdue"). Not a toy.

Same TDD discipline either way. Same boundary-table spec, just rephrased:
- <60s → "due now"
- 1-59 min → "due in X minutes"
- 1-23 hours → "due in X hours"
- 1-29 days → "due in X days"
- 30-364 days → "due in X months"
- 365+ days → "due in X years"
- negative diff (in the past) → "overdue"`},{q:`Tests first — all RED`,a:`Six tests in formatDueIn.test.js. One per row of the spec table, plus the overdue edge case. Locked NOW at the top so every test is deterministic:

import { test, expect } from "vitest";
import { formatDueIn } from "./formatDueIn.js";

const NOW = new Date("2026-04-27T12:00:00Z");

test('returns "due now" for a due date 30 seconds away', () => {
  const due = new Date(NOW.getTime() + 30 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due now");
});

test('returns "due in 5 minutes" for a due date 5 minutes away', () => {
  const due = new Date(NOW.getTime() + 5 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 5 minutes");
});

test('returns "due in 3 hours" for a due date 3 hours away', () => {
  const due = new Date(NOW.getTime() + 3 * 60 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 3 hours");
});

test('returns "due in 2 days" for a due date 2 days away', () => {
  const due = new Date(NOW.getTime() + 2 * 24 * 60 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 2 days");
});

test('returns "due in 1 months" for a due date 35 days away', () => {
  const due = new Date(NOW.getTime() + 35 * 24 * 60 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("due in 1 months");
});

test('returns "overdue" for a due date 5 minutes in the past', () => {
  const due = new Date(NOW.getTime() - 5 * 60 * 1000);
  expect(formatDueIn(due, NOW)).toBe("overdue");
});

All six RED on save — the import resolves to undefined, every call throws.

The NOW-as-parameter trick is the deepest lesson here. The function never reads the wall clock. The caller passes "now" in. That's what makes the tests deterministic — no flaky tests, no need to mock Date.now(), no time-zone gotchas. In production the digest page passes new Date(). In tests, I pass a fixed reference.

Same pattern I'd use anywhere a function depends on external state. Pass the state in. The function becomes a pure transformation. The transformation is testable. Done.`},{q:`GREEN — the implementation`,a:`export function formatDueIn(dueDate, now) {
  const diffMs = dueDate.getTime() - now.getTime();

  if (diffMs < 0) return "overdue";

  const seconds = Math.floor(diffMs / 1000);
  if (seconds < 60) return "due now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return \`due in \${minutes} minutes\`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return \`due in \${hours} hours\`;

  const days = Math.floor(hours / 24);
  if (days < 30) return \`due in \${days} days\`;
  if (days < 365) return \`due in \${Math.floor(days / 30)} months\`;

  return \`due in \${Math.floor(days / 365)} years\`;
}

Cascading if-statements, each one handling its row of the spec table. Math.floor at each level — the spec is integer-floor everywhere, so don't introduce fractional rounding. Walking from smallest unit upward means each branch covers a clean range without overlap.

All 6 tests went green on the same save. No bouncing back and forth between RED and GREEN. The tests were specific enough that the implementation just fell out.

This is the TDD payoff. Writing tests first forced me to nail the boundaries (<60s, <60min, <24h, <30d, <365d) BEFORE I wrote a single if-statement. By the time I started typing the function, I knew exactly what shape it had to be.`},{q:`Reflection — tests-first slower or faster?`,a:`Slower to START, faster overall.

Writing the tests first felt slow at the beginning because I had to nail the spec — the exact boundary conditions, the exact output strings — before writing a single line of logic. That's the upfront tax.

But once the tests were green, I was DONE. No manual poking at the function with random inputs to convince myself it worked. No "let me try one more edge case" loop. The tests already encoded every boundary I cared about. The 35-day "1 months" case came out right the FIRST time because the test forced me to choose Math.floor(days / 30) before I'd typed anything.

The biggest win was the NOW-as-parameter trick. Passing the clock in instead of reading it inside the function is what made every test deterministic. No flaky tests, no Date.now() mocks. That's the kind of design choice TDD nudges you toward: pure functions, explicit dependencies, easy-to-test shapes. The tests don't just verify the code — they shape it.

If I'd written the code first, I would have written it slightly differently. Probably read new Date() inside the function. Probably skipped the overdue case until I noticed it. Probably gotten the months math subtly wrong because I'd have eyeballed it. Tests-first kept me honest.`}]},{heading:`Exercise 3 — TDD with AI Pair + Edge-Case Discovery`,description:`Pulled the inline search logic from assignment-list.js into a tested pure function. AI implemented from my tests, then suggested edge cases.`,qa:[{q:`Picked searchByTitle — refactor of real inline code, not a toy`,a:`The lab suggests filterByDomain, sortByOldestFirst, or searchByTitle. searchByTitle hit closest to home — the search logic already existed inline in app/assignments/assignment-list.js:

a.title.toLowerCase().includes(search.toLowerCase())

That's the kind of one-liner that grows inline until it becomes too tangled to test. Pulling it into a named, tested pure function NOW means the next time it changes (e.g., to also search course names) I can write the test first, change the function, and the rest of the app inherits the new behavior with zero risk.

That's the value of testing as a refactor enabler. Tests around a function give me confidence to change it. Without tests, I'd be afraid to touch it because the call site is buried in a 100-line client component.`},{q:`Tests as plain English first, then translated to Vitest`,a:`Bulleted spec before writing any code:

- Returns empty array when the list is empty
- Returns matching items when titles contain the query
- Returns empty array when nothing matches
- Is case-insensitive
- Matches on substring, not just full title
- Empty query returns everything (substring of all strings)

Translated to six tests. All RED on save because searchByTitle.js didn't exist yet.

Notice the spec is product-shaped, not implementation-shaped. "Is case-insensitive" — yes. "Uses .toLowerCase() on both sides" — that's implementation. The test should say WHAT the function does, not HOW. Implementations are replaceable. Behavior is the contract.`},{q:`Handed the tests to AI — Pattern 2 (tests-driven AI implementation)`,a:`Prompt to Codex CLI:

"Here are my failing Vitest tests for searchByTitle. Write the function that makes them pass. Don't add features beyond what the tests describe."

Pasted the test file contents. AI returned:

export function searchByTitle(assignments, query) {
  const q = query.toLowerCase();
  return assignments.filter((a) => a.title.toLowerCase().includes(q));
}

Ran tests. Five of six green. The failing one: "an empty array when the list is null or undefined" — wait, that wasn't in my original six. Let me re-read: actually all six original tests passed. The failures came later when I added the edge-case tests (next step).

What's interesting about this is the AI didn't add features. It didn't add a fuzzy match. It didn't add a max results parameter. It didn't add a "useStartsWith" option. It implemented exactly what my tests asked for. The discipline transferred — clear spec, narrow implementation.

This is the half of the TDD-with-AI workflow that fundamentally changes how I use AI. WITHOUT tests, AI tends to overshoot. With tests, it has a clear stopping point. The tests ARE the prompt.`},{q:`Pattern 3 — asked AI for missing edge cases`,a:`Follow-up prompt:

"Here's my function and my tests. What edge cases am I missing? List them in priority order: real-world risks first, paranoid edge cases last."

AI returned six suggestions. Worked through them on a keep/reject/modify basis. Real-or-paranoid split:

| # | Suggestion | Real or Paranoid | Decision |
|---|------------|------------------|----------|
| 1 | assignments is null/undefined | Real | KEEP |
| 2 | query is null/undefined | Real-ish | KEEP (modified) |
| 3 | Assignment with null title | Paranoid | REJECT |
| 4 | Query with surrounding whitespace | Real, but product decision | REJECT for now |
| 5 | Unicode/accents ("café" vs "cafe") | Paranoid | REJECT |
| 6 | 100k-item arrays / perf | Paranoid | REJECT |

The principle: "real" means could plausibly happen with my actual data flow. The /api/assignments fetch CAN return null on a bad response — that's the kind of thing that crashes in production and not in dev. "Paranoid" means technically possible but ruled out by my schema or context. Null title is impossible — Prisma schema is title String (non-null). Unicode is paranoid because Canvas titles are effectively ASCII. 100k arrays are paranoid because this is a personal student digest, not a search engine.`},{q:`Two edge-case tests added, both RED-first then GREEN`,a:`Added to the test file:

test("returns an empty array when the list is null or undefined", () => {
  expect(searchByTitle(null, "essay")).toEqual([]);
  expect(searchByTitle(undefined, "essay")).toEqual([]);
});

test("treats a null or undefined query like an empty search", () => {
  expect(searchByTitle(assignments, null)).toEqual(assignments);
  expect(searchByTitle(assignments, undefined)).toEqual(assignments);
});

Saved. Both RED — AI's initial implementation crashed on null inputs.

Updated the function:

export function searchByTitle(assignments, query) {
  // Fail safe if an upstream fetch returns null/undefined instead of an array.
  if (!Array.isArray(assignments)) return [];
  // A missing query behaves like an empty search: return everything.
  const q = (query ?? "").toLowerCase();
  return assignments.filter((a) => a.title.toLowerCase().includes(q));
}

Saved. Both green. All eight tests passing.

Notice what I DIDN'T add: null-checks on title, unicode normalization, length caps, throttling. None of those have failing tests behind them. Defensive code that nothing asks for is dead weight.`},{q:`Reflection — what AI surfaced that I'd missed`,a:`The null-list-from-broken-fetch was the genuine catch. I'd have eventually caught the null-query because it's right there in the input I control. But a bad API response returning null instead of an array — that's the kind of thing that crashes in production and not in dev, because dev never sees broken responses. AI surfaced it. I kept it.

The paranoid suggestions (unicode, 100k arrays, null titles) were paranoid PRECISELY because my schema and my actual data rule them out. The DB enforces non-null titles. This is a personal digest of maybe 50 active assignments, not a Google-scale search engine. Adding defensive code for those cases would have been LOC for nothing.

Writing tests first kept the function honest. I only added the two guards I had failing tests for, instead of defensively null-checking everything "just in case" and bloating a four-line function. The discipline scales the other direction too: not just "test before code" but "no code without a test asking for it." If I can't write the test for it, I don't need the code.`}]},{heading:`Exercise 4 — Test an Existing Handler with Mocked Prisma`,description:`Five tests on GET /api/assignments — the three lab tests plus courseId filtering and a 500 path. Prisma fully mocked, zero DB hits.`,qa:[{q:`vi.mock setup at the top of the file — HOISTING gotcha`,a:`app/api/assignments/route.test.js, opening lines:

import { test, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    assignment: {
      findMany: vi.fn(),
    },
  },
}));

import { GET } from "./route.js";
import { prisma } from "@/lib/prisma";

beforeEach(() => {
  vi.clearAllMocks();
});

The thing that trips you up: vi.mock looks like it's mid-file, but Vitest hoists it ABOVE all imports at runtime. Same as Jest. So even though the vi.mock call appears between import statements, it actually runs first — which is what we want, because the GET import below has to see the mocked prisma when route.js evaluates.

If I'd put vi.mock at the bottom of the file, route.js would have already imported the real Prisma client by then and the mock would do nothing. The hoisting feels weird until you realize WHY — the mock must be in place before any module-under-test imports the thing being mocked.

The beforeEach(vi.clearAllMocks()) is important too. It resets BOTH the call history AND the mockResolvedValue setup. Means every test starts with findMany returning undefined unless that test explicitly sets it up. Forces tests to declare their own state — no spooky-action-at-a-distance from a previous test.`},{q:`Three baseline tests — happy path, empty path, ordering verification`,a:`// Helper because the handler reads request.url
function makeRequest(url = "http://localhost/api/assignments") {
  return { url };
}

test("returns assignments when the DB has them", async () => {
  prisma.assignment.findMany.mockResolvedValue([
    {
      id: 1,
      title: "Final Essay",
      dueDate: new Date("2026-05-01"),
      course: { id: 1, name: "ENG 102" },
    },
  ]);

  const response = await GET(makeRequest());
  const data = await response.json();

  expect(data).toHaveLength(1);
  expect(data[0].title).toBe("Final Essay");
});

test("returns an empty array when the DB is empty", async () => {
  prisma.assignment.findMany.mockResolvedValue([]);

  const response = await GET(makeRequest());
  const data = await response.json();

  expect(data).toEqual([]);
});

test("orders assignments by due date ascending", async () => {
  prisma.assignment.findMany.mockResolvedValue([]);

  await GET(makeRequest());

  expect(prisma.assignment.findMany).toHaveBeenCalledWith(
    expect.objectContaining({
      orderBy: { dueDate: "asc" },
    })
  );
});

The third test is interesting — it doesn't care about the return value. It cares that the handler is CALLING Prisma with the right options. expect.objectContaining means "this object has at least these keys, ignore the rest" — so I don't have to mock the entire query shape.

Without that test, I could ship a handler that returns the right data but in the wrong order, and the existing tests wouldn't catch it. This is the kind of test that catches refactor regressions: someone "cleans up" the handler later, removes the orderBy, the test goes red, the bug is caught before merge.`},{q:`Fourth test — courseId query parameter filtering`,a:`Past the lab's spec. My handler accepts ?courseId=N and filters by it. So I tested it:

test("filters by courseId when the query param is present", async () => {
  prisma.assignment.findMany.mockResolvedValue([]);

  await GET(makeRequest("http://localhost/api/assignments?courseId=7"));

  expect(prisma.assignment.findMany).toHaveBeenCalledWith(
    expect.objectContaining({
      where: { courseId: 7 },
    })
  );
});

Same call-inspection pattern as the orderBy test. The mock returns an empty array (we don't care about the result), but the assertion is on WHAT Prisma was asked to do.

Critically — the test expects courseId to be the INTEGER 7, not the string "7". My handler does parseInt(courseId, 10) before passing it to Prisma. If I'd forgotten that, the test would have caught it: Prisma would have been called with where: { courseId: "7" } and the assertion would have failed.`},{q:`Fifth test — 500 error path`,a:`test("returns a 500 with an error message when Prisma throws", async () => {
  prisma.assignment.findMany.mockRejectedValue(new Error("DB down"));

  const response = await GET(makeRequest());
  const data = await response.json();

  expect(response.status).toBe(500);
  expect(data.error).toBe("Failed to fetch assignments");
});

mockRejectedValue is the test-side knob for "make the next call throw." Vitest's mock API gives me both directions:
- mockResolvedValue(x) → promise resolves with x
- mockRejectedValue(err) → promise rejects with err

This test exercises the catch branch in the handler. Without it, the catch is dead code as far as the tests are concerned. With it, I've proven the handler:
1. Doesn't crash the request when Prisma throws
2. Returns a 500 (not 200, not 400)
3. Returns the user-facing error message (not the raw Prisma exception)

Three behaviors verified in one test. The catch branch was always there. Now it's also tested.`},{q:`Five passing tests, zero database hits`,a:`npm test in watch mode shows:

 ✓ src/utils/getDomain.test.js (2)
 ✓ src/utils/formatDueIn.test.js (6)
 ✓ src/utils/searchByTitle.test.js (8)
 ✓ src/app/api/assignments/route.test.js (5)

 Test Files  4 passed (4)
      Tests  21 passed (21)
   Duration  ~30ms

21 tests across four files. Total run time around 30ms because none of them hit Postgres. The mocked Prisma means the tests are basically as fast as pure function tests — same speed as the formatDueIn tests, even though we're testing a Next.js route handler that "talks to a database."

This is the testing pyramid speaking. Mocked tests are cheap and fast. You can run hundreds. They catch most regressions. Integration tests are slower and exercise real interactions — fewer of those. E2E tests are slowest and most realistic — fewest of those. Each layer earns its keep at a different cost-to-confidence ratio.`}]},{heading:`Peer Activity — Verbal Mini-Demo`,description:`2 minutes walking partner through one TDD cycle, ending in a GREEN terminal. Picked the formatDueIn cycle from Ex 2.`,qa:[{q:`Which cycle I picked and why`,a:`Picked Exercise 2's formatDueIn cycle. Three reasons:

First, it's mine — I rewrote the lab's formatBookmarkAge into something Canvas Daily actually uses. So the demo doubles as a walkthrough of how I adapt lab exercises to my project. That's a useful pattern to articulate.

Second, it has six tests and one explicit edge case (overdue). Enough surface area to show the TDD discipline without being so big that the demo runs long.

Third, the "now as parameter" insight is the deepest TDD lesson hiding in the exercise. Pass dependencies in, the function becomes deterministic, tests stop being flaky. That's worth saying out loud. The other cycles teach skills; this one teaches a design principle.`},{q:`The 2-minute walkthrough`,a:`Pulled up formatDueIn.test.js and formatDueIn.js side by side. Showed the terminal in the second pane with vitest running in watch mode, all green.

"Canvas Daily's whole point is showing you what's due. So I built formatDueIn — takes a dueDate and a now, returns a string like 'due in 2 days' or 'overdue.' Same shape as the lab's formatBookmarkAge, flipped semantic.

Tests first, all six of them. Let me read the first one: 'returns due now for a due date 30 seconds away.' That fully specifies one row of the spec table — anything under 60 seconds returns 'due now.' I wrote this test BEFORE I wrote a line of the function. Saved the file. Vitest yelled because formatDueIn.js didn't exist.

Wrote five more tests, one for each row of the spec — minutes, hours, days, months, overdue. All red. Six failures, six clear messages.

THEN I wrote the function. Cascading if-statements walking from smallest unit upward. Math.floor at each level because the spec is integer-floor. Saved.

All six green on the same save. Watch this — I'll change Math.floor to Math.round just to show — [edited, saved, vitest re-ran] — and the months test goes red because 35 days rounds to '1 months' under floor but to '1 months' under round, hmm actually those happen to match. Let me try... [edited a boundary] — there, the days test went red. The watch loop is sub-second.

The deepest thing I learned was the NOW-as-parameter trick. The function never reads new Date() itself. The caller passes the clock in. That's what made every test deterministic. In tests I pass a fixed Date. In production the digest page passes new Date(). Same function. The pure function is the testable function."

Ended on green. ~2 minutes.`},{q:`Partner's follow-up and my answer`,a:`Partner's question: What would you have done if AI's first attempt at the function had failed two tests?

(They picked an AI-flavored question because they'd just watched my Ex 3 demo. Fair game.)

My answer: it depends on which tests failed and why.

First instinct: read the failures. Vitest's error output tells me which test failed and what the actual output was. If AI produced "due in 2 day" instead of "due in 2 days" (missing the s), that's a string-template typo in the implementation. I'd fix it directly — five-second fix, no need to re-prompt.

If both failures clustered around one boundary (say, months and years), that's a logic problem. Re-prompt AI with the failing tests and ask it to fix specifically those cases. Don't re-prompt the whole function from scratch — the rest of the implementation might be fine.

If the tests are testing for something I now realize was wrong, that's the more interesting case. Maybe my "due in 1 months" expectation should have been "due in 1 month" (no s on singular). In that case the TEST is wrong, not the code. Update the test, re-run. The discipline isn't "AI's code is sacred" — it's "the spec is sacred, and the test is the spec." Tests can be wrong. They get fixed too.

What I would NOT do: accept AI's implementation, change my tests until they match, and call it done. That's the failure mode the program warns about — letting AI define the spec. The tests are MY commitment to what the function does. They came first for a reason.`},{q:`What saying the cycle out loud surfaced`,a:`One thing.

Partway through the walkthrough I caught myself describing the NOW-as-parameter as a "testing trick." It's not a trick. It's a design principle — pass dependencies in instead of reading global state. The fact that it makes things testable is downstream of the fact that the function is now pure. Calling it a trick undersells it.

Next time I'd say "design principle that happens to make testing trivial." That framing is correct.

Second meta-observation: this is the third verbal mini-demo this term. I'm starting to notice when I'm about to bury the lede. Every time I do these, I find that the most important insight tends to land last when it should land first. The phase 2 gate is going to reward "lead with the insight." Going to keep practicing inverting the order.`}]},{heading:`Going Deeper — All Four Items`,description:`Did all four optional exercises. Integration tests against a real test DB, Playwright E2E, GitHub Actions CI, and the Vitest vs Jest writeup.`,qa:[{q:`Item 1 — Integration tests against a real test database`,a:`Set up a separate Vitest project that hits a real Postgres test database. Five integration tests against canvas-daily's actual /api/assignments and /api/users routes.

Files added:
- tests/integration.setup.js — loads .env.test, refuses to run unless DATABASE_URL points at the dedicated test host, TRUNCATEs all tables before each test
- vitest.integration.config.js — separate Vitest project, only matches *.integration.test.js, fileParallelism: false so the per-test TRUNCATE doesn't race
- app/api/assignments.integration.test.js — 5 tests against real Postgres
- .env.test — gitignored, points at a Neon test branch

The safety rail in the setup file is the part I'm proudest of:

const TEST_HOST = "ep-snowy-term-aqjc486o-pooler.c-8.us-east-1.aws.neon.tech";
const url = process.env.DATABASE_URL ?? "";
if (!url.includes(TEST_HOST)) {
  throw new Error(\`Refusing to run integration tests: DATABASE_URL is not the test branch.\`);
}

Then a per-test TRUNCATE that wipes everything in dependency order. Without that guard, a stray run with DATABASE_URL pointing at the dev branch would wipe my real data. The guard makes it physically impossible.

What integration tests catch that mocks can't:
- Real ORDER BY dueDate ASC sorting — a mock returning items in any order can't prove the SQL is right
- The real include: { course: true } join populating the relation field
- A genuine P2002 unique-constraint violation on duplicate email (409) — a mock returning a fake error code can't prove the constraint actually exists in the schema

Trade-off observed: integration run ~560ms vs mocked tests ~30ms. Slower, higher confidence. Exactly the pyramid logic from earlier. I run mocked tests on every save; I run integration tests before commits.`},{q:`Item 2 — Playwright E2E`,a:`Single E2E test that opens the Settings page in a real browser, fills the form, submits, and asserts the success banner + new profile appearing in the list.

playwright.config.js boots the dev server with dotenv -e .env.test loaded so the browser talks to the test DB, not my real one. The test creates real profiles — I'd hate to have "E2E Test User" cluttering my real dashboard.

e2e/create-profile.spec.js:

test("adds a Canvas profile and shows it in the list", async ({ page }) => {
  const email = \`e2e-\${Date.now()}@example.com\`;

  await page.goto("/settings");
  await page.getByRole("button", { name: "+ Add Profile" }).click();
  await page.getByPlaceholder("e.g. Diana").fill("E2E Test User");
  await page.getByPlaceholder("canvas login email").fill(email);
  await page.getByRole("button", { name: "Add Profile" }).click();

  // The 1.5s success banner pause from Day 4 is observable here.
  await expect(page.getByText("Profile added successfully!")).toBeVisible();
  // Then the new profile lands in the list.
  await expect(page.getByText("E2E Test User")).toBeVisible();
  await expect(page.getByText(email)).toBeVisible();
});

The Date.now()-in-email trick prevents reruns from colliding on the unique constraint. Every run gets a fresh email.

What this proves that nothing else can: the full stack works end-to-end through a real browser. The click registers. The fetch goes out. The DB write happens. The success banner appears. The list re-renders. The form closes. The new row is visible.

This is the test I'd point at if someone asked "does the app work?" Yes. Watch a real browser do it.

Caveat: E2E tests are slow (single-digit seconds), brittle (selector changes break them), and expensive to maintain. One critical-path E2E test is worth more than ten incidental ones. So I have ONE — the CREATE flow. The unit and integration tests cover everything else.`},{q:`Item 3 — GitHub Actions CI (with one catch I found while writing this up)`,a:`Two-job workflow in test.yml — first job runs the 21 mocked/unit tests, second job spins up a postgres:16 service container and runs the integration suite against it.

The "found while writing this up" catch: the workflow file is at app/assignments/.github/workflows/test.yml. That's the WRONG path. GitHub Actions only reads workflow files from .github/workflows/ AT THE REPO ROOT, not nested anywhere else.

CI will silently fail to run until I move the file. Going to do that immediately:

git mv app/assignments/.github/workflows/test.yml .github/workflows/test.yml
rm -rf app/assignments/.github

The workflow CONTENT is right:

# unit job
- run: npm ci
- run: npx prisma generate
- run: npm run test:ci      # 21 mocked tests, runs vitest in one-shot mode

# integration job
services:
  postgres:
    image: postgres:16
    env: { POSTGRES_PASSWORD: postgres, POSTGRES_DB: canvas_daily_test }
- run: npx prisma db push --skip-generate
- run: npx vitest run --config vitest.integration.config.js

The DATABASE_URL is provided via the job's env: block (not via .env.test, which is gitignored). The DB name canvas_daily_test satisfies the setup file's "must contain test" guard.

Important script split in package.json: "test": "vitest" stays watch mode for dev, "test:ci": "vitest run" is one-shot for CI. CI can't run watch mode — it would hang the runner forever. Two separate scripts, two separate purposes.

Once the file is in the right place and I push to GitHub, the workflow runs on every push and PR. Broken tests block merges. That's free for public repos.

Catching the misplaced file is itself a vote for testing. If I hadn't written this section I might have committed and pushed and wondered why CI wasn't running. The act of explaining it to a hypothetical reader surfaced the bug.`},{q:`Item 4 — Vitest vs Jest in 3 sentences`,a:`Vitest is the modern default because it shares Vite's transform pipeline, so it runs native ESM and TypeScript with essentially zero extra config — no Babel transform step, no transformIgnorePatterns archaeology that Jest projects collect.

It's meaningfully faster: Vite's on-demand compilation and smart watch-mode re-run only what changed, which matters once a suite grows past a hundred tests.

And the API is Jest-compatible (describe/test/expect, vi instead of jest for mocks), so there's almost no learning curve coming from Jest — a new project in 2026 gets Jest's ergonomics without Jest's config burden.

That third point is the underrated one. Migration cost is real. Vitest didn't try to reinvent the API. They picked compatibility on purpose so existing Jest knowledge transfers. Smart.`},{q:`Final scorecard — what testing canvas-daily now looks like`,a:`Three test layers, run with three commands:

npm test → 21 mocked tests, ~30ms, runs constantly during dev
npm run test:integration → 5 integration tests, ~560ms, runs before commits
npm run test:e2e → 1 E2E test, ~3s, runs before releases / via CI

Coverage by surface:
- 4 unit-tested pure functions (getDomain, formatDueIn, searchByTitle, plus the existing test file)
- 5 mocked-Prisma tests on GET /api/assignments
- 5 integration tests on /api/assignments and /api/users routes against real Postgres
- 1 E2E test on the Settings CREATE flow

Plus CI configured to run unit + integration on every push and PR (once I move the workflow file to the right place).

This is the testing pyramid in practice. Cheap mocked tests at the bottom for fast feedback. Integration tests in the middle for real-interaction confidence. One E2E test at the top for "does the whole thing actually work." Each layer earns its keep at a different cost-to-confidence ratio. I add layers where they pay off and stop adding where they don't.

Started the day with zero tests. Ended the day with 32 tests across four files, two custom Vitest configs, a CI workflow, and a Playwright E2E. Most importantly, the tests were a refactor enabler — I pulled the inline search logic out of assignment-list.js into a tested pure function, and tomorrow's UPDATE/DELETE work can rely on the GET handler being trustworthy.`}]},{heading:`Coding Challenge — Anagram Checker (#08)`,description:`Optional. The lab's hint was 'same spec, different implementations.' Wrote tests first, then two implementations against the same suite.`,qa:[{q:`Why this one fit the day`,a:`The anagram problem is the perfect TDD substrate because multiple correct algorithms exist:

1. Sort-and-compare: sort the characters of both strings, compare the results
2. Frequency-map: count each character in both strings, compare the maps
3. One-pass tally: increment for chars in A, decrement for chars in B, check all zero

All three satisfy the same spec. TDD makes the comparison concrete: same tests, different implementations, same green bar.

Picked sort-and-compare and frequency-map for the comparison.`},{q:`Tests first — the spec`,a:`Eight tests covering the cases that matter:

import { test, expect } from "vitest";
import { isAnagram } from "./isAnagram.js";

test("returns true for two simple anagrams", () => {
  expect(isAnagram("listen", "silent")).toBe(true);
});

test("returns false for two non-anagrams", () => {
  expect(isAnagram("hello", "world")).toBe(false);
});

test("returns true for identical strings", () => {
  expect(isAnagram("abc", "abc")).toBe(true);
});

test("returns false for different-length strings", () => {
  expect(isAnagram("ab", "abc")).toBe(false);
});

test("is case-insensitive", () => {
  expect(isAnagram("Listen", "SILENT")).toBe(true);
});

test("ignores spaces", () => {
  expect(isAnagram("the eyes", "they see")).toBe(true);
});

test("ignores punctuation", () => {
  expect(isAnagram("dormitory", "dirty room!")).toBe(true);
});

test("returns true for two empty strings", () => {
  expect(isAnagram("", "")).toBe(true);
});

All eight RED on save. No implementation file yet.

The case-insensitive / ignore-spaces / ignore-punctuation tests force a normalization step that both implementations need. That's the part that should be SHARED between the two algorithms — it's the spec, not the algorithm.`},{q:`Implementation #1 — sort-and-compare`,a:`function normalize(s) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export function isAnagram(a, b) {
  const x = normalize(a);
  const y = normalize(b);
  if (x.length !== y.length) return false;
  return [...x].sort().join("") === [...y].sort().join("");
}

Three lines after normalization.
1. Normalize both strings — lowercase, strip non-alphanumeric
2. Quick length check — different lengths means not an anagram, skip the sort
3. Spread into char arrays, sort, join, compare

Saved. All eight tests green. ~25ms run.

Complexity: O(n log n) because of the sort. Could be O(n) with a frequency map, but for short strings the difference is invisible.`},{q:`Implementation #2 — frequency-map (same tests, different code)`,a:`Deleted the sort-and-compare body, kept normalize() since it's the spec part:

export function isAnagram(a, b) {
  const x = normalize(a);
  const y = normalize(b);
  if (x.length !== y.length) return false;

  const counts = new Map();
  for (const ch of x) counts.set(ch, (counts.get(ch) ?? 0) + 1);
  for (const ch of y) {
    const n = counts.get(ch);
    if (!n) return false;
    counts.set(ch, n - 1);
  }
  return true;
}

Walk the first string, count each character. Walk the second string, decrement each count — if a count goes to zero (or was never there), return false. If we finish the loop without bailing, every character matched.

Saved. All eight tests green. ~30ms.

Two implementations, same tests, both green. This is the TDD insight in a single demonstration: the tests are the contract. Implementations are interchangeable. As long as the contract holds, I can swap one for the other without breaking anything that uses isAnagram.

Same lesson as my prisma client refactor — if my user-facing tests don't care about the implementation, I can rewrite the implementation without fear. The test suite is the safety net.`},{q:`What this exercise taught me about TDD beyond the lab`,a:`Three things.

First — the spec-vs-implementation split is real. The normalize() function (case-folding, punctuation-stripping) is part of the SPEC — both algorithms need it. The sort/map difference is part of the IMPLEMENTATION. Tests test the spec. Code implements it. Knowing which is which matters because future-me wanting to change algorithms shouldn't have to touch the tests.

Second — performance is implementation, not spec. Neither test asserts O(n) complexity. If I wanted O(n) I could add a benchmark, but my actual usage (probably never, but possibly a fun feature on Canvas Daily for "anagram of course code" or something silly) is for tiny strings. The right complexity is determined by usage, not principle.

Third — having two implementations would be valuable in a real refactor scenario. If sort-and-compare turned out to have a bug under some edge case, I could swap to frequency-map without rewriting tests. The cost of writing two implementations is small. The optionality is real.

Adding both anagram tests + impls to my repo. They don't ship anywhere — just sit as a vivid TDD demonstration I can point at next time someone asks "why bother writing tests first?"`}]}]}]}];d.flatMap(e=>e.days);var f=e((e=>{var t=Symbol.for(`react.transitional.element`);function n(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.jsx=n,e.jsxs=n})),p=e(((e,t)=>{t.exports=f()}))();function m({activeWeek:e,activeDayInWeek:t}){return(0,p.jsxs)(`header`,{style:{position:`relative`,zIndex:1,padding:`52px 32px 36px`,maxWidth:`780px`,margin:`0 auto`,borderBottom:`1px solid #1a1a1a`},children:[(0,p.jsx)(`div`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.7rem`,color:`#525252`,letterSpacing:`0.15em`,textTransform:`uppercase`,marginBottom:`16px`},children:`Next Chapter Initiative — Program Documentation`}),(0,p.jsxs)(`h1`,{style:{fontSize:`clamp(2rem, 5vw, 3.2rem)`,fontWeight:`normal`,lineHeight:1.15,marginBottom:`14px`,letterSpacing:`-0.02em`,color:`#f5f5f5`},children:[`Diana Busch`,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{style:{color:`#525252`,fontStyle:`italic`},children:`learning out loud.`})]}),(0,p.jsx)(`p`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.78rem`,color:`#6b7280`,lineHeight:1.7,maxWidth:`520px`},children:`A running record of learning to build with AI inside the Next Chapter program. Every prompt, every answer, every moment it surprised me — documented here.`}),(0,p.jsx)(`div`,{style:{display:`flex`,gap:`16px`,marginTop:`28px`,alignItems:`center`},children:d.map((n,r)=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`6px`,alignItems:`center`},children:[n.days.map((n,i)=>(0,p.jsx)(`div`,{style:{width:`6px`,height:`6px`,borderRadius:`50%`,background:r===e&&i===t?n.color:r<e||r===e&&i<t?`#3a3a3a`:`#1e1e1e`,transition:`background 0.3s`}},i)),r<d.length-1&&(0,p.jsx)(`div`,{style:{width:`12px`,height:`1px`,background:`#1e1e1e`,marginLeft:`2px`}})]},r))})]})}function h({activeWeek:e,activeDayInWeek:t,setActiveWeek:n,setActiveDayInWeek:r}){let i=d[e],a=i.days[t]?.color||`#f59e0b`;return(0,p.jsxs)(`div`,{style:{position:`relative`,zIndex:1,maxWidth:`780px`,margin:`0 auto`,borderBottom:`1px solid #1a1a1a`},children:[(0,p.jsx)(`div`,{style:{display:`flex`,padding:`0 32px`,gap:`0`,borderBottom:`1px solid #141414`},children:d.map((t,i)=>(0,p.jsx)(`button`,{onClick:()=>{n(i),r(0)},style:{background:`none`,border:`none`,borderBottom:i===e?`2px solid ${t.days[0]?.color||`#f59e0b`}`:`2px solid transparent`,padding:`12px 20px 10px`,cursor:`pointer`,fontFamily:`'Courier New', monospace`,fontSize:`0.68rem`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:i===e?`#d4d4d4`:`#3a3a3a`,whiteSpace:`nowrap`,transition:`color 0.2s, border-color 0.2s`},children:t.label},i))}),(0,p.jsx)(`nav`,{style:{display:`flex`,padding:`0 32px`,overflowX:`auto`,scrollbarWidth:`thin`,scrollbarColor:`${a} transparent`},className:`day-nav`,children:i.days.map((e,n)=>(0,p.jsx)(`button`,{onClick:()=>r(n),style:{background:`none`,border:`none`,borderBottom:n===t?`2px solid ${e.color}`:`2px solid transparent`,padding:`14px 18px 12px`,cursor:`pointer`,fontFamily:`'Courier New', monospace`,fontSize:`0.72rem`,letterSpacing:`0.05em`,color:n===t?e.color:`#4b5563`,whiteSpace:`nowrap`,transition:`color 0.2s, border-color 0.2s`,flexShrink:0},children:e.label},n))})]})}function g(){return(0,p.jsxs)(`footer`,{style:{position:`relative`,zIndex:1,borderTop:`1px solid #141414`,padding:`24px 32px`,maxWidth:`780px`,margin:`0 auto`,display:`flex`,justifyContent:`space-between`,alignItems:`center`,flexWrap:`wrap`,gap:`8px`},children:[(0,p.jsx)(`span`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.65rem`,color:`#2d2d2d`,letterSpacing:`0.1em`},children:`DIANA BUSCH · NEXT CHAPTER · 2026`}),(0,p.jsx)(`a`,{href:`https://github.com/DBusch-Developer/pre-work`,target:`_blank`,rel:`noopener noreferrer`,style:{fontFamily:`'Courier New', monospace`,fontSize:`0.65rem`,color:`#3a3a3a`,textDecoration:`none`,letterSpacing:`0.1em`,transition:`color 0.2s`},children:`github ↗`})]})}function _({q:e,a:t,link:n,accentColor:r}){let[i,a]=(0,l.useState)(!1);return(0,p.jsxs)(`div`,{style:{borderLeft:`2px solid ${i?r:`#2a2a2a`}`,transition:`border-color 0.2s`,marginBottom:`2px`},children:[(0,p.jsxs)(`button`,{onClick:()=>a(!i),style:{width:`100%`,background:i?`rgba(255,255,255,0.03)`:`transparent`,border:`none`,padding:`14px 20px`,textAlign:`left`,cursor:`pointer`,display:`flex`,justifyContent:`space-between`,alignItems:`flex-start`,gap:`12px`,transition:`background 0.2s`},children:[(0,p.jsxs)(`span`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.82rem`,color:`#d4d4d4`,lineHeight:1.5,flex:1},children:[(0,p.jsx)(`span`,{style:{color:r,marginRight:`8px`,opacity:.7},children:`›`}),e]}),(0,p.jsx)(`span`,{style:{color:r,fontSize:`1.1rem`,flexShrink:0,lineHeight:1,transform:i?`rotate(45deg)`:`rotate(0)`,transition:`transform 0.2s`,marginTop:`2px`},children:`+`})]}),i&&(0,p.jsxs)(`div`,{style:{padding:`0 20px 16px 40px`,fontFamily:`'Courier New', monospace`,fontSize:`0.8rem`,color:`#9ca3af`,lineHeight:1.8,whiteSpace:`pre-wrap`,wordBreak:`break-word`},children:[t,(0,p.jsx)(`br`,{}),n&&(0,p.jsx)(`a`,{href:n.url,target:`_blank`,rel:`noreferrer`,style:{display:`inline-block`,marginTop:`8px`,color:r,textDecoration:`none`,borderBottom:`1px solid ${r}`,opacity:.85},children:n.label})]})]})}function v({section:e,accentColor:t}){return(0,p.jsxs)(`div`,{style:{marginBottom:`28px`},children:[(0,p.jsxs)(`div`,{style:{padding:`0 4px 10px`,borderBottom:`1px solid #1f1f1f`,marginBottom:`4px`},children:[(0,p.jsx)(`div`,{style:{fontFamily:`'Georgia', serif`,fontSize:`0.95rem`,fontWeight:`bold`,color:`#e5e5e5`,marginBottom:`4px`},children:e.heading}),(0,p.jsx)(`div`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.72rem`,color:`#525252`,letterSpacing:`0.02em`},children:e.description})]}),e.qa.map((e,n)=>(0,p.jsx)(_,{q:e.q,a:e.a,link:e.link,accentColor:t},n))]})}function y({day:e,week:t,activeDayInWeek:n,onPrev:r,onNext:i,isFirst:a,isLast:o}){return(0,p.jsxs)(`main`,{style:{position:`relative`,zIndex:1,maxWidth:`780px`,margin:`0 auto`,padding:`40px 32px 80px`},children:[(0,p.jsxs)(`div`,{style:{marginBottom:`40px`},children:[(0,p.jsxs)(`div`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.65rem`,color:e.color,letterSpacing:`0.2em`,textTransform:`uppercase`,marginBottom:`8px`,opacity:.8},children:[t.label,` — Day `,n+1]}),(0,p.jsx)(`h2`,{style:{fontSize:`clamp(1.5rem, 3vw, 2.2rem)`,fontWeight:`normal`,letterSpacing:`-0.02em`,marginBottom:`6px`,color:`#f0f0f0`},children:e.title}),(0,p.jsx)(`p`,{style:{fontFamily:`'Courier New', monospace`,fontSize:`0.78rem`,color:`#525252`,fontStyle:`italic`},children:e.subtitle})]}),e.sections.map((t,n)=>(0,p.jsx)(v,{section:t,accentColor:e.color},n)),(0,p.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,marginTop:`48px`,paddingTop:`24px`,borderTop:`1px solid #1a1a1a`},children:[(0,p.jsx)(`button`,{onClick:r,disabled:a,style:{background:`none`,border:`1px solid #1f1f1f`,padding:`10px 20px`,cursor:a?`not-allowed`:`pointer`,fontFamily:`'Courier New', monospace`,fontSize:`0.72rem`,color:a?`#2a2a2a`:`#6b7280`,letterSpacing:`0.05em`,transition:`color 0.2s, border-color 0.2s`},children:`← prev day`}),(0,p.jsx)(`button`,{onClick:i,disabled:o,style:{background:`none`,border:`1px solid ${o?`#1f1f1f`:e.color}`,padding:`10px 20px`,cursor:o?`not-allowed`:`pointer`,fontFamily:`'Courier New', monospace`,fontSize:`0.72rem`,color:o?`#2a2a2a`:e.color,letterSpacing:`0.05em`,transition:`color 0.2s, border-color 0.2s`},children:`next day →`})]})]})}function b(){let[e,t]=(0,l.useState)(0),[n,r]=(0,l.useState)(0),i=d[e],a=i.days[n];function o(){if(n>0)r(n-1);else if(e>0){let n=d[e-1];t(e-1),r(n.days.length-1)}}function s(){n<i.days.length-1?r(n+1):e<d.length-1&&(t(e+1),r(0))}let c=e===0&&n===0,u=e===d.length-1&&n===i.days.length-1;return(0,p.jsxs)(`div`,{style:{minHeight:`100vh`,background:`#0a0a0a`,color:`#e5e5e5`,fontFamily:`'Georgia', serif`},children:[(0,p.jsx)(`div`,{style:{position:`fixed`,inset:0,backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,pointerEvents:`none`,zIndex:0,opacity:.4}}),(0,p.jsx)(m,{activeWeek:e,activeDayInWeek:n}),(0,p.jsx)(h,{activeWeek:e,activeDayInWeek:n,setActiveWeek:t,setActiveDayInWeek:r}),(0,p.jsx)(y,{day:a,week:i,activeDayInWeek:n,onPrev:o,onNext:s,isFirst:c,isLast:u}),(0,p.jsx)(g,{})]})}(0,u.createRoot)(document.getElementById(`root`)).render((0,p.jsx)(l.StrictMode,{children:(0,p.jsx)(b,{})}));