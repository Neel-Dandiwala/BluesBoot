(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ln(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ye={},Pr=[],$t=()=>{},Co=()=>!1,nr=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),qf=n=>n.startsWith("onUpdate:"),Ze=Object.assign,Kf=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},bv=Object.prototype.hasOwnProperty,rt=(n,e)=>bv.call(n,e),xe=Array.isArray,Ir=n=>ao(n)==="[object Map]",ir=n=>ao(n)==="[object Set]",fd=n=>ao(n)==="[object Date]",Av=n=>ao(n)==="[object RegExp]",De=n=>typeof n=="function",ze=n=>typeof n=="string",En=n=>typeof n=="symbol",mt=n=>n!==null&&typeof n=="object",$f=n=>(mt(n)||De(n))&&De(n.then)&&De(n.catch),Bm=Object.prototype.toString,ao=n=>Bm.call(n),wv=n=>ao(n).slice(8,-1),Ql=n=>ao(n)==="[object Object]",jf=n=>ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,us=Ln(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Rv=Ln("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),ec=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Cv=/-(\w)/g,yt=ec(n=>n.replace(Cv,(e,t)=>t?t.toUpperCase():"")),Pv=/\B([A-Z])/g,yn=ec(n=>n.replace(Pv,"-$1").toLowerCase()),sr=ec(n=>n.charAt(0).toUpperCase()+n.slice(1)),Lr=ec(n=>n?`on${sr(n)}`:""),un=(n,e)=>!Object.is(n,e),Nr=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},km=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},El=n=>{const e=parseFloat(n);return isNaN(e)?n:e},Tl=n=>{const e=ze(n)?Number(n):NaN;return isNaN(e)?n:e};let hd;const tc=()=>hd||(hd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Iv(n,e){return n+JSON.stringify(e,(t,i)=>typeof i=="function"?i.toString():i)}const Lv="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol",Nv=Ln(Lv);function Ss(n){if(xe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=ze(i)?Hm(i):Ss(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(ze(n)||mt(n))return n}const Dv=/;(?![^(]*\))/g,Uv=/:([^]+)/,Ov=/\/\*[^]*?\*\//g;function Hm(n){const e={};return n.replace(Ov,"").split(Dv).forEach(t=>{if(t){const i=t.split(Uv);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function lo(n){let e="";if(ze(n))e=n;else if(xe(n))for(let t=0;t<n.length;t++){const i=lo(n[t]);i&&(e+=i+" ")}else if(mt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}function Fv(n){if(!n)return null;let{class:e,style:t}=n;return e&&!ze(e)&&(n.class=lo(e)),t&&(n.style=Ss(t)),n}const Bv="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",kv="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",Hv="annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics",Vv="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",zv=Ln(Bv),Gv=Ln(kv),Wv=Ln(Hv),Xv=Ln(Vv),qv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kv=Ln(qv);function Vm(n){return!!n||n===""}function $v(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=_s(n[i],e[i]);return t}function _s(n,e){if(n===e)return!0;let t=fd(n),i=fd(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=En(n),i=En(e),t||i)return n===e;if(t=xe(n),i=xe(e),t||i)return t&&i?$v(n,e):!1;if(t=mt(n),i=mt(e),t||i){if(!t||!i)return!1;const s=Object.keys(n).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in n){const a=n.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!_s(n[o],e[o]))return!1}}return String(n)===String(e)}function nc(n,e){return n.findIndex(t=>_s(t,e))}const zm=n=>!!(n&&n.__v_isRef===!0),Gm=n=>ze(n)?n:n==null?"":xe(n)||mt(n)&&(n.toString===Bm||!De(n.toString))?zm(n)?Gm(n.value):JSON.stringify(n,Wm,2):String(n),Wm=(n,e)=>zm(e)?Wm(n,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Pc(i,r)+" =>"]=s,t),{})}:ir(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Pc(t))}:En(e)?Pc(e):mt(e)&&!xe(e)&&!Ql(e)?String(e):e,Pc=(n,e="")=>{var t;return En(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cn;class Yf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=cn,!e&&cn&&(this.index=(cn.scopes||(cn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=cn;try{return cn=this,e()}finally{cn=t}}}on(){cn=this}off(){cn=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jv(n){return new Yf(n)}function Xm(){return cn}function Yv(n,e=!1){cn&&cn.cleanups.push(n)}let vt;const Ic=new WeakSet;class Xo{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,cn&&cn.active&&cn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Km(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dd(this),$m(this);const e=vt,t=ei;vt=this,ei=!0;try{return this.fn()}finally{jm(this),vt=e,ei=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Qf(e);this.deps=this.depsTail=void 0,dd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Au(this)&&this.run()}get dirty(){return Au(this)}}let qm=0,Do,Uo;function Km(n,e=!1){if(n.flags|=8,e){n.next=Uo,Uo=n;return}n.next=Do,Do=n}function Zf(){qm++}function Jf(){if(--qm>0)return;if(Uo){let e=Uo;for(Uo=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Do;){let e=Do;for(Do=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function $m(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function jm(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),Qf(i),Zv(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function Au(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ym(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ym(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qo))return;n.globalVersion=qo;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Au(n)){n.flags&=-3;return}const t=vt,i=ei;vt=n,ei=!0;try{$m(n);const s=n.fn(n._value);(e.version===0||un(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{vt=t,ei=i,jm(n),n.flags&=-3}}function Qf(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)Qf(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zv(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}function Jv(n,e){n.effect instanceof Xo&&(n=n.effect.fn);const t=new Xo(n);e&&Ze(t,e);try{t.run()}catch(s){throw t.stop(),s}const i=t.run.bind(t);return i.effect=t,i}function Qv(n){n.effect.stop()}let ei=!0;const Zm=[];function Ms(){Zm.push(ei),ei=!1}function Es(){const n=Zm.pop();ei=n===void 0?!0:n}function dd(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=vt;vt=void 0;try{e()}finally{vt=t}}}let qo=0;class ex{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ic{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!vt||!ei||vt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==vt)t=this.activeLink=new ex(vt,this),vt.deps?(t.prevDep=vt.depsTail,vt.depsTail.nextDep=t,vt.depsTail=t):vt.deps=vt.depsTail=t,Jm(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=vt.depsTail,t.nextDep=void 0,vt.depsTail.nextDep=t,vt.depsTail=t,vt.deps===t&&(vt.deps=i)}return t}trigger(e){this.version++,qo++,this.notify(e)}notify(e){Zf();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jf()}}}function Jm(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Jm(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const bl=new WeakMap,Xs=Symbol(""),wu=Symbol(""),Ko=Symbol("");function en(n,e,t){if(ei&&vt){let i=bl.get(n);i||bl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new ic),s.map=i,s.key=t),s.track()}}function Pi(n,e,t,i,s,r){const o=bl.get(n);if(!o){qo++;return}const a=l=>{l&&l.trigger()};if(Zf(),e==="clear")o.forEach(a);else{const l=xe(n),c=l&&jf(t);if(l&&t==="length"){const u=Number(i);o.forEach((f,h)=>{(h==="length"||h===Ko||!En(h)&&h>=u)&&a(f)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Ko)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Xs)),Ir(n)&&a(o.get(wu)));break;case"delete":l||(a(o.get(Xs)),Ir(n)&&a(o.get(wu)));break;case"set":Ir(n)&&a(o.get(Xs));break}}Jf()}function tx(n,e){const t=bl.get(n);return t&&t.get(e)}function lr(n){const e=et(n);return e===n?e:(en(e,"iterate",Ko),In(n)?e:e.map(tn))}function sc(n){return en(n=et(n),"iterate",Ko),n}const nx={__proto__:null,[Symbol.iterator](){return Lc(this,Symbol.iterator,tn)},concat(...n){return lr(this).concat(...n.map(e=>xe(e)?lr(e):e))},entries(){return Lc(this,"entries",n=>(n[1]=tn(n[1]),n))},every(n,e){return vi(this,"every",n,e,void 0,arguments)},filter(n,e){return vi(this,"filter",n,e,t=>t.map(tn),arguments)},find(n,e){return vi(this,"find",n,e,tn,arguments)},findIndex(n,e){return vi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return vi(this,"findLast",n,e,tn,arguments)},findLastIndex(n,e){return vi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return vi(this,"forEach",n,e,void 0,arguments)},includes(...n){return Nc(this,"includes",n)},indexOf(...n){return Nc(this,"indexOf",n)},join(n){return lr(this).join(n)},lastIndexOf(...n){return Nc(this,"lastIndexOf",n)},map(n,e){return vi(this,"map",n,e,void 0,arguments)},pop(){return _o(this,"pop")},push(...n){return _o(this,"push",n)},reduce(n,...e){return pd(this,"reduce",n,e)},reduceRight(n,...e){return pd(this,"reduceRight",n,e)},shift(){return _o(this,"shift")},some(n,e){return vi(this,"some",n,e,void 0,arguments)},splice(...n){return _o(this,"splice",n)},toReversed(){return lr(this).toReversed()},toSorted(n){return lr(this).toSorted(n)},toSpliced(...n){return lr(this).toSpliced(...n)},unshift(...n){return _o(this,"unshift",n)},values(){return Lc(this,"values",tn)}};function Lc(n,e,t){const i=sc(n),s=i[e]();return i!==n&&!In(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const ix=Array.prototype;function vi(n,e,t,i,s,r){const o=sc(n),a=o!==n&&!In(n),l=o[e];if(l!==ix[e]){const f=l.apply(n,r);return a?tn(f):f}let c=t;o!==n&&(a?c=function(f,h){return t.call(this,tn(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function pd(n,e,t,i){const s=sc(n);let r=t;return s!==n&&(In(n)?t.length>3&&(r=function(o,a,l){return t.call(this,o,a,l,n)}):r=function(o,a,l){return t.call(this,o,tn(a),l,n)}),s[e](r,...i)}function Nc(n,e,t){const i=et(n);en(i,"iterate",Ko);const s=i[e](...t);return(s===-1||s===!1)&&lc(t[0])?(t[0]=et(t[0]),i[e](...t)):s}function _o(n,e,t=[]){Ms(),Zf();const i=et(n)[e].apply(n,t);return Jf(),Es(),i}const sx=Ln("__proto__,__v_isRef,__isVue"),Qm=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(En));function rx(n){En(n)||(n=String(n));const e=et(this);return en(e,"has",n),e.hasOwnProperty(n)}class eg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?og:rg:r?sg:ig).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=xe(e);if(!s){let l;if(o&&(l=nx[t]))return l;if(t==="hasOwnProperty")return rx}const a=Reflect.get(e,t,kt(e)?e:i);return(En(t)?Qm.has(t):sx(t))||(s||en(e,"get",t),r)?a:kt(a)?o&&jf(t)?a:a.value:mt(a)?s?eh(a):oc(a):a}}class tg extends eg{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=vs(r);if(!In(i)&&!vs(i)&&(r=et(r),i=et(i)),!xe(e)&&kt(r)&&!kt(i))return l?!1:(r.value=i,!0)}const o=xe(e)&&jf(t)?Number(t)<e.length:rt(e,t),a=Reflect.set(e,t,i,kt(e)?e:s);return e===et(s)&&(o?un(i,r)&&Pi(e,"set",t,i):Pi(e,"add",t,i)),a}deleteProperty(e,t){const i=rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&Pi(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!En(t)||!Qm.has(t))&&en(e,"has",t),i}ownKeys(e){return en(e,"iterate",xe(e)?"length":Xs),Reflect.ownKeys(e)}}class ng extends eg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const ox=new tg,ax=new ng,lx=new tg(!0),cx=new ng(!0),Ru=n=>n,Ma=n=>Reflect.getPrototypeOf(n);function ux(n,e,t){return function(...i){const s=this.__v_raw,r=et(s),o=Ir(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?Ru:e?Cu:tn;return!e&&en(r,"iterate",l?wu:Xs),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:a?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Ea(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function fx(n,e){const t={get(s){const r=this.__v_raw,o=et(r),a=et(s);n||(un(s,a)&&en(o,"get",s),en(o,"get",a));const{has:l}=Ma(o),c=e?Ru:n?Cu:tn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&en(et(s),"iterate",Xs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,o=et(r),a=et(s);return n||(un(s,a)&&en(o,"has",s),en(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=et(a),c=e?Ru:n?Cu:tn;return!n&&en(l,"iterate",Xs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return Ze(t,n?{add:Ea("add"),set:Ea("set"),delete:Ea("delete"),clear:Ea("clear")}:{add(s){!e&&!In(s)&&!vs(s)&&(s=et(s));const r=et(this);return Ma(r).has.call(r,s)||(r.add(s),Pi(r,"add",s,s)),this},set(s,r){!e&&!In(r)&&!vs(r)&&(r=et(r));const o=et(this),{has:a,get:l}=Ma(o);let c=a.call(o,s);c||(s=et(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?un(r,u)&&Pi(o,"set",s,r):Pi(o,"add",s,r),this},delete(s){const r=et(this),{has:o,get:a}=Ma(r);let l=o.call(r,s);l||(s=et(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Pi(r,"delete",s,void 0),c},clear(){const s=et(this),r=s.size!==0,o=s.clear();return r&&Pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=ux(s,n,e)}),t}function rc(n,e){const t=fx(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(rt(t,s)&&s in i?t:i,s,r)}const hx={get:rc(!1,!1)},dx={get:rc(!1,!0)},px={get:rc(!0,!1)},mx={get:rc(!0,!0)},ig=new WeakMap,sg=new WeakMap,rg=new WeakMap,og=new WeakMap;function gx(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _x(n){return n.__v_skip||!Object.isExtensible(n)?0:gx(wv(n))}function oc(n){return vs(n)?n:ac(n,!1,ox,hx,ig)}function ag(n){return ac(n,!1,lx,dx,sg)}function eh(n){return ac(n,!0,ax,px,rg)}function vx(n){return ac(n,!0,cx,mx,og)}function ac(n,e,t,i,s){if(!mt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const o=_x(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function fs(n){return vs(n)?fs(n.__v_raw):!!(n&&n.__v_isReactive)}function vs(n){return!!(n&&n.__v_isReadonly)}function In(n){return!!(n&&n.__v_isShallow)}function lc(n){return n?!!n.__v_raw:!1}function et(n){const e=n&&n.__v_raw;return e?et(e):n}function lg(n){return!rt(n,"__v_skip")&&Object.isExtensible(n)&&km(n,"__v_skip",!0),n}const tn=n=>mt(n)?oc(n):n,Cu=n=>mt(n)?eh(n):n;function kt(n){return n?n.__v_isRef===!0:!1}function ti(n){return ug(n,!1)}function cg(n){return ug(n,!0)}function ug(n,e){return kt(n)?n:new xx(n,e)}class xx{constructor(e,t){this.dep=new ic,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:et(e),this._value=t?e:tn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||In(e)||vs(e);e=i?e:et(e),un(e,t)&&(this._rawValue=e,this._value=i?e:tn(e),this.dep.trigger())}}function yx(n){n.dep&&n.dep.trigger()}function cc(n){return kt(n)?n.value:n}function Sx(n){return De(n)?n():cc(n)}const Mx={get:(n,e,t)=>e==="__v_raw"?n:cc(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return kt(s)&&!kt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function th(n){return fs(n)?n:new Proxy(n,Mx)}class Ex{constructor(e){this.__v_isRef=!0,this._value=void 0;const t=this.dep=new ic,{get:i,set:s}=e(t.track.bind(t),t.trigger.bind(t));this._get=i,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function fg(n){return new Ex(n)}function Tx(n){const e=xe(n)?new Array(n.length):{};for(const t in n)e[t]=hg(n,t);return e}class bx{constructor(e,t,i){this._object=e,this._key=t,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return tx(et(this._object),this._key)}}class Ax{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function wx(n,e,t){return kt(n)?n:De(n)?new Ax(n):mt(n)&&arguments.length>1?hg(n,e,t):ti(n)}function hg(n,e,t){const i=n[e];return kt(i)?i:new bx(n,e,t)}class Rx{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ic(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return Km(this,!0),!0}get value(){const e=this.dep.track();return Ym(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cx(n,e,t=!1){let i,s;return De(n)?i=n:(i=n.get,s=n.set),new Rx(i,s,t)}const Px={GET:"get",HAS:"has",ITERATE:"iterate"},Ix={SET:"set",ADD:"add",DELETE:"delete",CLEAR:"clear"},Ta={},Al=new WeakMap;let ts;function Lx(){return ts}function dg(n,e=!1,t=ts){if(t){let i=Al.get(t);i||Al.set(t,i=[]),i.push(n)}}function Nx(n,e,t=Ye){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=v=>s?v:In(v)||s===!1||s===0?Ii(v,1):Ii(v);let u,f,h,d,m=!1,_=!1;if(kt(n)?(f=()=>n.value,m=In(n)):fs(n)?(f=()=>c(n),m=!0):xe(n)?(_=!0,m=n.some(v=>fs(v)||In(v)),f=()=>n.map(v=>{if(kt(v))return v.value;if(fs(v))return c(v);if(De(v))return l?l(v,2):v()})):De(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Ms();try{h()}finally{Es()}}const v=ts;ts=u;try{return l?l(n,3,[d]):n(d)}finally{ts=v}}:f=$t,e&&s){const v=f,w=s===!0?1/0:s;f=()=>Ii(v(),w)}const g=Xm(),p=()=>{u.stop(),g&&g.active&&Kf(g.effects,u)};if(r&&e){const v=e;e=(...w)=>{v(...w),p()}}let T=_?new Array(n.length).fill(Ta):Ta;const x=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const w=u.run();if(s||m||(_?w.some((R,C)=>un(R,T[C])):un(w,T))){h&&h();const R=ts;ts=u;try{const C=[w,T===Ta?void 0:_&&T[0]===Ta?[]:T,d];l?l(e,3,C):e(...C),T=w}finally{ts=R}}}else u.run()};return a&&a(x),u=new Xo(f),u.scheduler=o?()=>o(x,!1):x,d=v=>dg(v,!1,u),h=u.onStop=()=>{const v=Al.get(u);if(v){if(l)l(v,4);else for(const w of v)w();Al.delete(u)}},e?i?x(!0):T=u.run():o?o(x.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function Ii(n,e=1/0,t){if(e<=0||!mt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,kt(n))Ii(n.value,e,t);else if(xe(n))for(let i=0;i<n.length;i++)Ii(n[i],e,t);else if(ir(n)||Ir(n))n.forEach(i=>{Ii(i,e,t)});else if(Ql(n)){for(const i in n)Ii(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Ii(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pg=[];function Dx(n){pg.push(n)}function Ux(){pg.pop()}function Ox(n,e){}const Fx={SETUP_FUNCTION:0,0:"SETUP_FUNCTION",RENDER_FUNCTION:1,1:"RENDER_FUNCTION",NATIVE_EVENT_HANDLER:5,5:"NATIVE_EVENT_HANDLER",COMPONENT_EVENT_HANDLER:6,6:"COMPONENT_EVENT_HANDLER",VNODE_HOOK:7,7:"VNODE_HOOK",DIRECTIVE_HOOK:8,8:"DIRECTIVE_HOOK",TRANSITION_HOOK:9,9:"TRANSITION_HOOK",APP_ERROR_HANDLER:10,10:"APP_ERROR_HANDLER",APP_WARN_HANDLER:11,11:"APP_WARN_HANDLER",FUNCTION_REF:12,12:"FUNCTION_REF",ASYNC_COMPONENT_LOADER:13,13:"ASYNC_COMPONENT_LOADER",SCHEDULER:14,14:"SCHEDULER",COMPONENT_UPDATE:15,15:"COMPONENT_UPDATE",APP_UNMOUNT_CLEANUP:16,16:"APP_UNMOUNT_CLEANUP"},Bx={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",0:"setup function",1:"render function",2:"watcher getter",3:"watcher callback",4:"watcher cleanup function",5:"native event handler",6:"component event handler",7:"vnode hook",8:"directive hook",9:"transition hook",10:"app errorHandler",11:"app warnHandler",12:"ref function",13:"async component loader",14:"scheduler flush",15:"component update",16:"app unmount cleanup function"};function co(n,e,t,i){try{return i?n(...i):n()}catch(s){rr(s,e,t)}}function Gn(n,e,t,i){if(De(n)){const s=co(n,e,t,i);return s&&$f(s)&&s.catch(r=>{rr(r,e,t)}),s}if(xe(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Gn(n[r],e,t,i));return s}}function rr(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ye;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}a=a.parent}if(r){Ms(),co(r,null,10,[n,l,c]),Es();return}}kx(n,t,s,i,o)}function kx(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const fn=[];let ri=-1;const Dr=[];let ns=null,Ar=0;const mg=Promise.resolve();let wl=null;function uc(n){const e=wl||mg;return n?e.then(this?n.bind(this):n):e}function Hx(n){let e=ri+1,t=fn.length;for(;e<t;){const i=e+t>>>1,s=fn[i],r=jo(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function nh(n){if(!(n.flags&1)){const e=jo(n),t=fn[fn.length-1];!t||!(n.flags&2)&&e>=jo(t)?fn.push(n):fn.splice(Hx(e),0,n),n.flags|=1,gg()}}function gg(){wl||(wl=mg.then(_g))}function $o(n){xe(n)?Dr.push(...n):ns&&n.id===-1?ns.splice(Ar+1,0,n):n.flags&1||(Dr.push(n),n.flags|=1),gg()}function md(n,e,t=ri+1){for(;t<fn.length;t++){const i=fn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;fn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Rl(n){if(Dr.length){const e=[...new Set(Dr)].sort((t,i)=>jo(t)-jo(i));if(Dr.length=0,ns){ns.push(...e);return}for(ns=e,Ar=0;Ar<ns.length;Ar++){const t=ns[Ar];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ns=null,Ar=0}}const jo=n=>n.id==null?n.flags&2?-1:1/0:n.id;function _g(n){try{for(ri=0;ri<fn.length;ri++){const e=fn[ri];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),co(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ri<fn.length;ri++){const e=fn[ri];e&&(e.flags&=-2)}ri=-1,fn.length=0,Rl(),wl=null,(fn.length||Dr.length)&&_g()}}let wr,ba=[];function vg(n,e){var t,i;wr=n,wr?(wr.enabled=!0,ba.forEach(({event:s,args:r})=>wr.emit(s,...r)),ba=[]):typeof window<"u"&&window.HTMLElement&&!((i=(t=window.navigator)==null?void 0:t.userAgent)!=null&&i.includes("jsdom"))?((e.__VUE_DEVTOOLS_HOOK_REPLAY__=e.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{vg(r,e)}),setTimeout(()=>{wr||(e.__VUE_DEVTOOLS_HOOK_REPLAY__=null,ba=[])},3e3)):ba=[]}let Bt=null,fc=null;function Yo(n){const e=Bt;return Bt=n,fc=n&&n.type.__scopeId||null,e}function Vx(n){fc=n}function zx(){fc=null}const Gx=n=>Tt;function Tt(n,e=Bt,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&Fu(-1);const r=Yo(e);let o;try{o=n(...s)}finally{Yo(r),i._d&&Fu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Wx(n,e){if(Bt===null)return n;const t=da(Bt),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Ye]=e[s];r&&(De(r)&&(r={mounted:r,updated:r}),r.deep&&Ii(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function oi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Ms(),Gn(l,t,8,[n.el,a,n,e]),Es())}}const xg=Symbol("_vte"),yg=n=>n.__isTeleport,Oo=n=>n&&(n.disabled||n.disabled===""),gd=n=>n&&(n.defer||n.defer===""),_d=n=>typeof SVGElement<"u"&&n instanceof SVGElement,vd=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Pu=(n,e)=>{const t=n&&n.to;return ze(t)?e?e(t):null:t},Sg={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:f,pbc:h,o:{insert:d,querySelector:m,createText:_,createComment:g}}=c,p=Oo(e.props);let{shapeFlag:T,children:x,dynamicChildren:v}=e;if(n==null){const w=e.el=_(""),R=e.anchor=_("");d(w,t,i),d(R,t,i);const C=(M,S)=>{T&16&&(s&&s.isCE&&(s.ce._teleportTarget=M),u(x,M,S,s,r,o,a,l))},L=()=>{const M=e.target=Pu(e.props,m),S=Mg(M,e,_,d);M&&(o!=="svg"&&_d(M)?o="svg":o!=="mathml"&&vd(M)&&(o="mathml"),p||(C(M,S),ll(e,!1)))};p&&(C(t,R),ll(e,!0)),gd(e.props)?Ut(()=>{L(),e.el.__isMounted=!0},r):L()}else{if(gd(e.props)&&!n.el.__isMounted){Ut(()=>{Sg.process(n,e,t,i,s,r,o,a,l,c),delete n.el.__isMounted},r);return}e.el=n.el,e.targetStart=n.targetStart;const w=e.anchor=n.anchor,R=e.target=n.target,C=e.targetAnchor=n.targetAnchor,L=Oo(n.props),M=L?t:R,S=L?w:C;if(o==="svg"||_d(R)?o="svg":(o==="mathml"||vd(R))&&(o="mathml"),v?(h(n.dynamicChildren,v,M,s,r,o,a),dh(n,e,!0)):l||f(n,e,M,S,s,r,o,a,!1),p)L?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):Aa(e,t,w,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const P=e.target=Pu(e.props,m);P&&Aa(e,P,null,c,0)}else L&&Aa(e,R,C,c,1);ll(e,p)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:h}=n;if(f&&(s(c),s(u)),r&&s(l),o&16){const d=r||!Oo(h);for(let m=0;m<a.length;m++){const _=a[m];i(_,e,t,d,!!_.dynamicChildren)}}},move:Aa,hydrate:Xx};function Aa(n,e,t,{o:{insert:i},m:s},r=2){r===0&&i(n.targetAnchor,e,t);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,f=r===2;if(f&&i(o,e,t),(!f||Oo(u))&&l&16)for(let h=0;h<c.length;h++)s(c[h],e,t,2);f&&i(a,e,t)}function Xx(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){const h=e.target=Pu(e.props,l);if(h){const d=Oo(e.props),m=h._lpa||h.firstChild;if(e.shapeFlag&16)if(d)e.anchor=f(o(n),e,a(n),t,i,s,r),e.targetStart=m,e.targetAnchor=m&&o(m);else{e.anchor=o(n);let _=m;for(;_;){if(_&&_.nodeType===8){if(_.data==="teleport start anchor")e.targetStart=_;else if(_.data==="teleport anchor"){e.targetAnchor=_,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}_=o(_)}e.targetAnchor||Mg(h,e,u,c),f(m&&o(m),e,h,t,i,s,r)}ll(e,d)}return e.anchor&&o(e.anchor)}const qx=Sg;function ll(n,e){const t=n.ctx;if(t&&t.ut){let i,s;for(e?(i=n.el,s=n.anchor):(i=n.targetStart,s=n.targetAnchor);i&&i!==s;)i.nodeType===1&&i.setAttribute("data-v-owner",t.uid),i=i.nextSibling;t.ut()}}function Mg(n,e,t,i){const s=e.targetStart=t(""),r=e.targetAnchor=t("");return s[xg]=r,n&&(i(s,n),i(r,n)),r}const is=Symbol("_leaveCb"),wa=Symbol("_enterCb");function ih(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wi(()=>{n.isMounted=!0}),or(()=>{n.isUnmounting=!0}),n}const On=[Function,Array],sh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:On,onEnter:On,onAfterEnter:On,onEnterCancelled:On,onBeforeLeave:On,onLeave:On,onAfterLeave:On,onLeaveCancelled:On,onBeforeAppear:On,onAppear:On,onAfterAppear:On,onAppearCancelled:On},Eg=n=>{const e=n.subTree;return e.component?Eg(e.component):e},Kx={name:"BaseTransition",props:sh,setup(n,{slots:e}){const t=Wn(),i=ih();return()=>{const s=e.default&&hc(e.default(),!0);if(!s||!s.length)return;const r=Tg(s),o=et(n),{mode:a}=o;if(i.isLeaving)return Dc(r);const l=xd(r);if(!l)return Dc(r);let c=zr(l,o,i,t,f=>c=f);l.type!==Dt&&Bi(l,c);let u=t.subTree&&xd(t.subTree);if(u&&u.type!==Dt&&!Yn(l,u)&&Eg(t).type!==Dt){let f=zr(u,o,i,t);if(Bi(u,f),a==="out-in"&&l.type!==Dt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Dc(r);a==="in-out"&&l.type!==Dt?f.delayLeave=(h,d,m)=>{const _=Ag(i,u);_[String(u.key)]=u,h[is]=()=>{d(),h[is]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{m(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Tg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Dt){e=t;break}}return e}const bg=Kx;function Ag(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function zr(n,e,t,i,s){const{appear:r,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:d,onAfterLeave:m,onLeaveCancelled:_,onBeforeAppear:g,onAppear:p,onAfterAppear:T,onAppearCancelled:x}=e,v=String(n.key),w=Ag(t,n),R=(M,S)=>{M&&Gn(M,i,9,S)},C=(M,S)=>{const P=S[1];R(M,S),xe(M)?M.every(N=>N.length<=1)&&P():M.length<=1&&P()},L={mode:o,persisted:a,beforeEnter(M){let S=l;if(!t.isMounted)if(r)S=g||l;else return;M[is]&&M[is](!0);const P=w[v];P&&Yn(n,P)&&P.el[is]&&P.el[is](),R(S,[M])},enter(M){let S=c,P=u,N=f;if(!t.isMounted)if(r)S=p||c,P=T||u,N=x||f;else return;let D=!1;const G=M[wa]=$=>{D||(D=!0,$?R(N,[M]):R(P,[M]),L.delayedLeave&&L.delayedLeave(),M[wa]=void 0)};S?C(S,[M,G]):G()},leave(M,S){const P=String(n.key);if(M[wa]&&M[wa](!0),t.isUnmounting)return S();R(h,[M]);let N=!1;const D=M[is]=G=>{N||(N=!0,S(),G?R(_,[M]):R(m,[M]),M[is]=void 0,w[P]===n&&delete w[P])};w[P]=n,d?C(d,[M,D]):D()},clone(M){const S=zr(M,e,t,i,s);return s&&s(S),S}};return L}function Dc(n){if(ua(n))return n=ui(n),n.children=null,n}function xd(n){if(!ua(n))return yg(n.type)&&n.children?Tg(n.children):n;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&De(t.default))return t.default()}}function Bi(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Bi(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function hc(n,e=!1,t){let i=[],s=0;for(let r=0;r<n.length;r++){let o=n[r];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:r);o.type===Gt?(o.patchFlag&128&&s++,i=i.concat(hc(o.children,e,a))):(e||o.type!==Dt)&&i.push(a!=null?ui(o,{key:a}):o)}if(s>1)for(let r=0;r<i.length;r++)i[r].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function rh(n,e){return De(n)?Ze({name:n.name},e,{setup:n}):n}function $x(){const n=Wn();return n?(n.appContext.config.idPrefix||"v")+"-"+n.ids[0]+n.ids[1]++:""}function oh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function jx(n){const e=Wn(),t=cg(null);if(e){const s=e.refs===Ye?e.refs={}:e.refs;Object.defineProperty(s,n,{enumerable:!0,get:()=>t.value,set:r=>t.value=r})}return t}function Zo(n,e,t,i,s=!1){if(xe(n)){n.forEach((m,_)=>Zo(m,e&&(xe(e)?e[_]:e),t,i,s));return}if(hs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Zo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===Ye?a.refs={}:a.refs,f=a.setupState,h=et(f),d=f===Ye?()=>!1:m=>rt(h,m);if(c!=null&&c!==l&&(ze(c)?(u[c]=null,d(c)&&(f[c]=null)):kt(c)&&(c.value=null)),De(l))co(l,a,12,[o,u]);else{const m=ze(l),_=kt(l);if(m||_){const g=()=>{if(n.f){const p=m?d(l)?f[l]:u[l]:l.value;s?xe(p)&&Kf(p,r):xe(p)?p.includes(r)||p.push(r):m?(u[l]=[r],d(l)&&(f[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else m?(u[l]=o,d(l)&&(f[l]=o)):_&&(l.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,Ut(g,t)):g()}}}let yd=!1;const cr=()=>{yd||(console.error("Hydration completed but contains mismatches."),yd=!0)},Yx=n=>n.namespaceURI.includes("svg")&&n.tagName!=="foreignObject",Zx=n=>n.namespaceURI.includes("MathML"),Ra=n=>{if(n.nodeType===1){if(Yx(n))return"svg";if(Zx(n))return"mathml"}},Rr=n=>n.nodeType===8;function Jx(n){const{mt:e,p:t,o:{patchProp:i,createText:s,nextSibling:r,parentNode:o,remove:a,insert:l,createComment:c}}=n,u=(x,v)=>{if(!v.hasChildNodes()){t(null,x,v),Rl(),v._vnode=x;return}f(v.firstChild,x,null,null,null),Rl(),v._vnode=x},f=(x,v,w,R,C,L=!1)=>{L=L||!!v.dynamicChildren;const M=Rr(x)&&x.data==="[",S=()=>_(x,v,w,R,C,M),{type:P,ref:N,shapeFlag:D,patchFlag:G}=v;let $=x.nodeType;v.el=x,G===-2&&(L=!1,v.dynamicChildren=null);let F=null;switch(P){case ds:$!==3?v.children===""?(l(v.el=s(""),o(x),x),F=x):F=S():(x.data!==v.children&&(cr(),x.data=v.children),F=r(x));break;case Dt:T(x)?(F=r(x),p(v.el=x.content.firstChild,x,w)):$!==8||M?F=S():F=r(x);break;case Ks:if(M&&(x=r(x),$=x.nodeType),$===1||$===3){F=x;const Q=!v.children.length;for(let O=0;O<v.staticCount;O++)Q&&(v.children+=F.nodeType===1?F.outerHTML:F.data),O===v.staticCount-1&&(v.anchor=F),F=r(F);return M?r(F):F}else S();break;case Gt:M?F=m(x,v,w,R,C,L):F=S();break;default:if(D&1)($!==1||v.type.toLowerCase()!==x.tagName.toLowerCase())&&!T(x)?F=S():F=h(x,v,w,R,C,L);else if(D&6){v.slotScopeIds=C;const Q=o(x);if(M?F=g(x):Rr(x)&&x.data==="teleport start"?F=g(x,x.data,"teleport end"):F=r(x),e(v,Q,null,w,R,Ra(Q),L),hs(v)&&!v.type.__asyncResolved){let O;M?(O=Be(Gt),O.anchor=F?F.previousSibling:Q.lastChild):O=x.nodeType===3?Fr(""):Be("div"),O.el=x,v.component.subTree=O}}else D&64?$!==8?F=S():F=v.type.hydrate(x,v,w,R,C,L,n,d):D&128&&(F=v.type.hydrate(x,v,w,R,Ra(o(x)),C,L,n,f))}return N!=null&&Zo(N,null,R,v),F},h=(x,v,w,R,C,L)=>{L=L||!!v.dynamicChildren;const{type:M,props:S,patchFlag:P,shapeFlag:N,dirs:D,transition:G}=v,$=M==="input"||M==="option";if($||P!==-1){D&&oi(v,null,w,"created");let F=!1;if(T(x)){F=Qg(null,G)&&w&&w.vnode.props&&w.vnode.props.appear;const O=x.content.firstChild;F&&G.beforeEnter(O),p(O,x,w),v.el=x=O}if(N&16&&!(S&&(S.innerHTML||S.textContent))){let O=d(x.firstChild,v,x,w,R,C,L);for(;O;){Ca(x,1)||cr();const ce=O;O=O.nextSibling,a(ce)}}else if(N&8){let O=v.children;O[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(O=O.slice(1)),x.textContent!==O&&(Ca(x,0)||cr(),x.textContent=v.children)}if(S){if($||!L||P&48){const O=x.tagName.includes("-");for(const ce in S)($&&(ce.endsWith("value")||ce==="indeterminate")||nr(ce)&&!us(ce)||ce[0]==="."||O)&&i(x,ce,null,S[ce],void 0,w)}else if(S.onClick)i(x,"onClick",null,S.onClick,void 0,w);else if(P&4&&fs(S.style))for(const O in S.style)S.style[O]}let Q;(Q=S&&S.onVnodeBeforeMount)&&vn(Q,w,v),D&&oi(v,null,w,"beforeMount"),((Q=S&&S.onVnodeMounted)||D||F)&&l_(()=>{Q&&vn(Q,w,v),F&&G.enter(x),D&&oi(v,null,w,"mounted")},R)}return x.nextSibling},d=(x,v,w,R,C,L,M)=>{M=M||!!v.dynamicChildren;const S=v.children,P=S.length;for(let N=0;N<P;N++){const D=M?S[N]:S[N]=xn(S[N]),G=D.type===ds;x?(G&&!M&&N+1<P&&xn(S[N+1]).type===ds&&(l(s(x.data.slice(D.children.length)),w,r(x)),x.data=D.children),x=f(x,D,R,C,L,M)):G&&!D.children?l(D.el=s(""),w):(Ca(w,1)||cr(),t(null,D,w,null,R,C,Ra(w),L))}return x},m=(x,v,w,R,C,L)=>{const{slotScopeIds:M}=v;M&&(C=C?C.concat(M):M);const S=o(x),P=d(r(x),v,S,w,R,C,L);return P&&Rr(P)&&P.data==="]"?r(v.anchor=P):(cr(),l(v.anchor=c("]"),S,P),P)},_=(x,v,w,R,C,L)=>{if(Ca(x.parentElement,1)||cr(),v.el=null,L){const P=g(x);for(;;){const N=r(x);if(N&&N!==P)a(N);else break}}const M=r(x),S=o(x);return a(x),t(null,v,S,M,w,R,Ra(S),C),w&&(w.vnode.el=v.el,_c(w,v.el)),M},g=(x,v="[",w="]")=>{let R=0;for(;x;)if(x=r(x),x&&Rr(x)&&(x.data===v&&R++,x.data===w)){if(R===0)return r(x);R--}return x},p=(x,v,w)=>{const R=v.parentNode;R&&R.replaceChild(x,v);let C=w;for(;C;)C.vnode.el===v&&(C.vnode.el=C.subTree.el=x),C=C.parent},T=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[u,f]}const Sd="data-allow-mismatch",Qx={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Ca(n,e){if(e===0||e===1)for(;n&&!n.hasAttribute(Sd);)n=n.parentElement;const t=n&&n.getAttribute(Sd);if(t==null)return!1;if(t==="")return!0;{const i=t.split(",");return e===0&&i.includes("children")?!0:t.split(",").includes(Qx[e])}}const ey=tc().requestIdleCallback||(n=>setTimeout(n,1)),ty=tc().cancelIdleCallback||(n=>clearTimeout(n)),ny=(n=1e4)=>e=>{const t=ey(e,{timeout:n});return()=>ty(t)};function iy(n){const{top:e,left:t,bottom:i,right:s}=n.getBoundingClientRect(),{innerHeight:r,innerWidth:o}=window;return(e>0&&e<r||i>0&&i<r)&&(t>0&&t<o||s>0&&s<o)}const sy=n=>(e,t)=>{const i=new IntersectionObserver(s=>{for(const r of s)if(r.isIntersecting){i.disconnect(),e();break}},n);return t(s=>{if(s instanceof Element){if(iy(s))return e(),i.disconnect(),!1;i.observe(s)}}),()=>i.disconnect()},ry=n=>e=>{if(n){const t=matchMedia(n);if(t.matches)e();else return t.addEventListener("change",e,{once:!0}),()=>t.removeEventListener("change",e)}},oy=(n=[])=>(e,t)=>{ze(n)&&(n=[n]);let i=!1;const s=o=>{i||(i=!0,r(),e(),o.target.dispatchEvent(new o.constructor(o.type,o)))},r=()=>{t(o=>{for(const a of n)o.removeEventListener(a,s)})};return t(o=>{for(const a of n)o.addEventListener(a,s,{once:!0})}),r};function ay(n,e){if(Rr(n)&&n.data==="["){let t=1,i=n.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Rr(i))if(i.data==="]"){if(--t===0)break}else i.data==="["&&t++;i=i.nextSibling}}else e(n)}const hs=n=>!!n.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function ly(n){De(n)&&(n={loader:n});const{loader:e,loadingComponent:t,errorComponent:i,delay:s=200,hydrate:r,timeout:o,suspensible:a=!0,onError:l}=n;let c=null,u,f=0;const h=()=>(f++,c=null,d()),d=()=>{let m;return c||(m=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,p)=>{l(_,()=>g(h()),()=>p(_),f+1)});throw _}).then(_=>m!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return rh({name:"AsyncComponentWrapper",__asyncLoader:d,__asyncHydrate(m,_,g){const p=r?()=>{const T=r(g,x=>ay(m,x));T&&(_.bum||(_.bum=[])).push(T)}:g;u?p():d().then(()=>!_.isUnmounted&&p())},get __asyncResolved(){return u},setup(){const m=Ft;if(oh(m),u)return()=>Uc(u,m);const _=x=>{c=null,rr(x,m,13,!i)};if(a&&m.suspense||Gr)return d().then(x=>()=>Uc(x,m)).catch(x=>(_(x),()=>i?Be(i,{error:x}):null));const g=ti(!1),p=ti(),T=ti(!!s);return s&&setTimeout(()=>{T.value=!1},s),o!=null&&setTimeout(()=>{if(!g.value&&!p.value){const x=new Error(`Async component timed out after ${o}ms.`);_(x),p.value=x}},o),d().then(()=>{g.value=!0,m.parent&&ua(m.parent.vnode)&&m.parent.update()}).catch(x=>{_(x),p.value=x}),()=>{if(g.value&&u)return Uc(u,m);if(p.value&&i)return Be(i,{error:p.value});if(t&&!T.value)return Be(t)}}})}function Uc(n,e){const{ref:t,props:i,children:s,ce:r}=e.vnode,o=Be(n,i,s);return o.ref=t,o.ce=r,delete e.vnode.ce,o}const ua=n=>n.type.__isKeepAlive,cy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:e}){const t=Wn(),i=t.ctx;if(!i.renderer)return()=>{const T=e.default&&e.default();return T&&T.length===1?T[0]:T};const s=new Map,r=new Set;let o=null;const a=t.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,h=f("div");i.activate=(T,x,v,w,R)=>{const C=T.component;c(T,x,v,0,a),l(C.vnode,T,x,v,C,a,w,T.slotScopeIds,R),Ut(()=>{C.isDeactivated=!1,C.a&&Nr(C.a);const L=T.props&&T.props.onVnodeMounted;L&&vn(L,C.parent,T)},a)},i.deactivate=T=>{const x=T.component;Pl(x.m),Pl(x.a),c(T,h,null,1,a),Ut(()=>{x.da&&Nr(x.da);const v=T.props&&T.props.onVnodeUnmounted;v&&vn(v,x.parent,T),x.isDeactivated=!0},a)};function d(T){Oc(T),u(T,t,a,!0)}function m(T){s.forEach((x,v)=>{const w=zu(x.type);w&&!T(w)&&_(v)})}function _(T){const x=s.get(T);x&&(!o||!Yn(x,o))?d(x):o&&Oc(o),s.delete(T),r.delete(T)}Ur(()=>[n.include,n.exclude],([T,x])=>{T&&m(v=>Po(T,v)),x&&m(v=>!Po(x,v))},{flush:"post",deep:!0});let g=null;const p=()=>{g!=null&&(Il(t.subTree.type)?Ut(()=>{s.set(g,Pa(t.subTree))},t.subTree.suspense):s.set(g,Pa(t.subTree)))};return Wi(p),pc(p),or(()=>{s.forEach(T=>{const{subTree:x,suspense:v}=t,w=Pa(x);if(T.type===w.type&&T.key===w.key){Oc(w);const R=w.component.da;R&&Ut(R,v);return}d(T)})}),()=>{if(g=null,!e.default)return o=null;const T=e.default(),x=T[0];if(T.length>1)return o=null,T;if(!Hi(x)||!(x.shapeFlag&4)&&!(x.shapeFlag&128))return o=null,x;let v=Pa(x);if(v.type===Dt)return o=null,v;const w=v.type,R=zu(hs(v)?v.type.__asyncResolved||{}:w),{include:C,exclude:L,max:M}=n;if(C&&(!R||!Po(C,R))||L&&R&&Po(L,R))return v.shapeFlag&=-257,o=v,x;const S=v.key==null?w:v.key,P=s.get(S);return v.el&&(v=ui(v),x.shapeFlag&128&&(x.ssContent=v)),g=S,P?(v.el=P.el,v.component=P.component,v.transition&&Bi(v,v.transition),v.shapeFlag|=512,r.delete(S),r.add(S)):(r.add(S),M&&r.size>parseInt(M,10)&&_(r.values().next().value)),v.shapeFlag|=256,o=v,Il(x.type)?x:v}}},uy=cy;function Po(n,e){return xe(n)?n.some(t=>Po(t,e)):ze(n)?n.split(",").includes(e):Av(n)?(n.lastIndex=0,n.test(e)):!1}function wg(n,e){Cg(n,"a",e)}function Rg(n,e){Cg(n,"da",e)}function Cg(n,e,t=Ft){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(dc(e,i,t),t){let s=t.parent;for(;s&&s.parent;)ua(s.parent.vnode)&&fy(i,e,t,s),s=s.parent}}function fy(n,e,t,i){const s=dc(e,n,i,!0);mc(()=>{Kf(i[e],s)},t)}function Oc(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function Pa(n){return n.shapeFlag&128?n.ssContent:n}function dc(n,e,t=Ft,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Ms();const a=Js(t),l=Gn(e,t,n,o);return a(),Es(),l});return i?s.unshift(r):s.push(r),r}}const Gi=n=>(e,t=Ft)=>{(!Gr||n==="sp")&&dc(n,(...i)=>e(...i),t)},Pg=Gi("bm"),Wi=Gi("m"),ah=Gi("bu"),pc=Gi("u"),or=Gi("bum"),mc=Gi("um"),Ig=Gi("sp"),Lg=Gi("rtg"),Ng=Gi("rtc");function Dg(n,e=Ft){dc("ec",n,e)}const lh="components",hy="directives";function dy(n,e){return ch(lh,n,!0,e)||n}const Ug=Symbol.for("v-ndc");function py(n){return ze(n)?ch(lh,n,!1)||n:n||Ug}function my(n){return ch(hy,n)}function ch(n,e,t=!0,i=!1){const s=Bt||Ft;if(s){const r=s.type;if(n===lh){const a=zu(r,!1);if(a&&(a===e||a===yt(e)||a===sr(yt(e))))return r}const o=Md(s[n]||r[n],e)||Md(s.appContext[n],e);return!o&&i?r:o}}function Md(n,e){return n&&(n[e]||n[yt(e)]||n[sr(yt(e))])}function gy(n,e,t,i){let s;const r=t&&t[i],o=xe(n);if(o||ze(n)){const a=o&&fs(n);let l=!1;a&&(l=!In(n),n=sc(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?tn(n[c]):n[c],c,void 0,r&&r[c])}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r&&r[a])}else if(mt(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r&&r[l]));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r&&r[l])}}else s=[];return t&&(t[i]=s),s}function _y(n,e){for(let t=0;t<e.length;t++){const i=e[t];if(xe(i))for(let s=0;s<i.length;s++)n[i[s].name]=i[s].fn;else i&&(n[i.name]=i.key?(...s)=>{const r=i.fn(...s);return r&&(r.key=i.key),r}:i.fn)}return n}function Og(n,e,t={},i,s){if(Bt.ce||Bt.parent&&hs(Bt.parent)&&Bt.parent.ce)return e!=="default"&&(t.name=e),ki(),Ll(Gt,null,[Be("slot",t,i&&i())],64);let r=n[e];r&&r._c&&(r._d=!1),ki();const o=r&&uh(r(t)),a=t.key||o&&o.key,l=Ll(Gt,{key:(a&&!En(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||(i?i():[]),o&&n._===1?64:-2);return!s&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function uh(n){return n.some(e=>Hi(e)?!(e.type===Dt||e.type===Gt&&!uh(e.children)):!0)?n:null}function vy(n,e){const t={};for(const i in n)t[e&&/[A-Z]/.test(i)?`on:${i}`:Lr(i)]=n[i];return t}const Iu=n=>n?m_(n)?da(n):Iu(n.parent):null,Fo=Ze(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Iu(n.parent),$root:n=>Iu(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>fh(n),$forceUpdate:n=>n.f||(n.f=()=>{nh(n.update)}),$nextTick:n=>n.n||(n.n=uc.bind(n.proxy)),$watch:n=>Yy.bind(n)}),Fc=(n,e)=>n!==Ye&&!n.__isScriptSetup&&rt(n,e),Lu={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Fc(i,e))return o[e]=1,i[e];if(s!==Ye&&rt(s,e))return o[e]=2,s[e];if((c=n.propsOptions[0])&&rt(c,e))return o[e]=3,r[e];if(t!==Ye&&rt(t,e))return o[e]=4,t[e];Nu&&(o[e]=0)}}const u=Fo[e];let f,h;if(u)return e==="$attrs"&&en(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ye&&rt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,rt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Fc(s,e)?(s[e]=t,!0):i!==Ye&&rt(i,e)?(i[e]=t,!0):rt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},o){let a;return!!t[o]||n!==Ye&&rt(n,o)||Fc(e,o)||(a=r[0])&&rt(a,o)||rt(i,o)||rt(Fo,o)||rt(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:rt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}},xy=Ze({},Lu,{get(n,e){if(e!==Symbol.unscopables)return Lu.get(n,e,n)},has(n,e){return e[0]!=="_"&&!Nv(e)}});function yy(){return null}function Sy(){return null}function My(n){}function Ey(n){}function Ty(){return null}function by(){}function Ay(n,e){return null}function wy(){return Fg().slots}function Ry(){return Fg().attrs}function Fg(){const n=Wn();return n.setupContext||(n.setupContext=x_(n))}function Jo(n){return xe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}function Cy(n,e){const t=Jo(n);for(const i in e){if(i.startsWith("__skip"))continue;let s=t[i];s?xe(s)||De(s)?s=t[i]={type:s,default:e[i]}:s.default=e[i]:s===null&&(s=t[i]={default:e[i]}),s&&e[`__skip_${i}`]&&(s.skipFactory=!0)}return t}function Py(n,e){return!n||!e?n||e:xe(n)&&xe(e)?n.concat(e):Ze({},Jo(n),Jo(e))}function Iy(n,e){const t={};for(const i in n)e.includes(i)||Object.defineProperty(t,i,{enumerable:!0,get:()=>n[i]});return t}function Ly(n){const e=Wn();let t=n();return ku(),$f(t)&&(t=t.catch(i=>{throw Js(e),i})),[t,()=>Js(e)]}let Nu=!0;function Ny(n){const e=fh(n),t=n.proxy,i=n.ctx;Nu=!1,e.beforeCreate&&Ed(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:m,activated:_,deactivated:g,beforeDestroy:p,beforeUnmount:T,destroyed:x,unmounted:v,render:w,renderTracked:R,renderTriggered:C,errorCaptured:L,serverPrefetch:M,expose:S,inheritAttrs:P,components:N,directives:D,filters:G}=e;if(c&&Dy(c,i,null),o)for(const Q in o){const O=o[Q];De(O)&&(i[Q]=O.bind(t))}if(s){const Q=s.call(t,t);mt(Q)&&(n.data=oc(Q))}if(Nu=!0,r)for(const Q in r){const O=r[Q],ce=De(O)?O.bind(t,t):De(O.get)?O.get.bind(t,t):$t,pe=!De(O)&&De(O.set)?O.set.bind(t):$t,Ee=$s({get:ce,set:pe});Object.defineProperty(i,Q,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ue=>Ee.value=Ue})}if(a)for(const Q in a)Bg(a[Q],i,t,Q);if(l){const Q=De(l)?l.call(t):l;Reflect.ownKeys(Q).forEach(O=>{Hg(O,Q[O])})}u&&Ed(u,n,"c");function F(Q,O){xe(O)?O.forEach(ce=>Q(ce.bind(t))):O&&Q(O.bind(t))}if(F(Pg,f),F(Wi,h),F(ah,d),F(pc,m),F(wg,_),F(Rg,g),F(Dg,L),F(Ng,R),F(Lg,C),F(or,T),F(mc,v),F(Ig,M),xe(S))if(S.length){const Q=n.exposed||(n.exposed={});S.forEach(O=>{Object.defineProperty(Q,O,{get:()=>t[O],set:ce=>t[O]=ce})})}else n.exposed||(n.exposed={});w&&n.render===$t&&(n.render=w),P!=null&&(n.inheritAttrs=P),N&&(n.components=N),D&&(n.directives=D),M&&oh(n)}function Dy(n,e,t=$t){xe(n)&&(n=Du(n));for(const i in n){const s=n[i];let r;mt(s)?"default"in s?r=Bo(s.from||i,s.default,!0):r=Bo(s.from||i):r=Bo(s),kt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function Ed(n,e,t){Gn(xe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Bg(n,e,t,i){let s=i.includes(".")?s_(t,i):()=>t[i];if(ze(n)){const r=e[n];De(r)&&Ur(s,r)}else if(De(n))Ur(s,n.bind(t));else if(mt(n))if(xe(n))n.forEach(r=>Bg(r,e,t,i));else{const r=De(n.handler)?n.handler.bind(t):e[n.handler];De(r)&&Ur(s,r,n)}}function fh(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>Cl(l,c,o,!0)),Cl(l,e,o)),mt(e)&&r.set(e,l),l}function Cl(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&Cl(n,r,t,!0),s&&s.forEach(o=>Cl(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Uy[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Uy={data:Td,props:bd,emits:bd,methods:Io,computed:Io,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Io,directives:Io,watch:Fy,provide:Td,inject:Oy};function Td(n,e){return e?n?function(){return Ze(De(n)?n.call(this,this):n,De(e)?e.call(this,this):e)}:e:n}function Oy(n,e){return Io(Du(n),Du(e))}function Du(n){if(xe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Io(n,e){return n?Ze(Object.create(null),n,e):e}function bd(n,e){return n?xe(n)&&xe(e)?[...new Set([...n,...e])]:Ze(Object.create(null),Jo(n),Jo(e??{})):e}function Fy(n,e){if(!n)return e;if(!e)return n;const t=Ze(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function kg(){return{app:null,config:{isNativeTag:Co,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let By=0;function ky(n,e){return function(i,s=null){De(i)||(i=Ze({},i)),s!=null&&!mt(s)&&(s=null);const r=kg(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:By++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:M_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&De(u.install)?(o.add(u),u.install(c,...f)):De(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||Be(i,s);return d.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,da(d.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Gn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=qs;qs=c;try{return u()}finally{qs=f}}};return c}}let qs=null;function Hg(n,e){if(Ft){let t=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===t&&(t=Ft.provides=Object.create(i)),t[n]=e}}function Bo(n,e,t=!1){const i=Ft||Bt;if(i||qs){const s=qs?qs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&De(e)?e.call(i&&i.proxy):e}}function Hy(){return!!(Ft||Bt||qs)}const Vg={},zg=()=>Object.create(Vg),Gg=n=>Object.getPrototypeOf(n)===Vg;function Vy(n,e,t,i=!1){const s={},r=zg();n.propsDefaults=Object.create(null),Wg(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:ag(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function zy(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=et(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(gc(n.emitsOptions,h))continue;const d=e[h];if(l)if(rt(r,h))d!==r[h]&&(r[h]=d,c=!0);else{const m=yt(h);s[m]=Uu(l,a,m,d,n,!1)}else d!==r[h]&&(r[h]=d,c=!0)}}}else{Wg(n,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!rt(e,f)&&((u=yn(f))===f||!rt(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(s[f]=Uu(l,a,f,void 0,n,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!rt(e,f))&&(delete r[f],c=!0)}c&&Pi(n.attrs,"set","")}function Wg(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(us(l))continue;const c=e[l];let u;s&&rt(s,u=yt(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:gc(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=et(t),c=a||Ye;for(let u=0;u<r.length;u++){const f=r[u];t[f]=Uu(s,l,f,c[f],n,!rt(c,f))}}return o}function Uu(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=rt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&De(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=Js(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===yn(t))&&(i=!0))}return i}const Gy=new WeakMap;function Xg(n,e,t=!1){const i=t?Gy:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!De(n)){const u=f=>{l=!0;const[h,d]=Xg(f,e,!0);Ze(o,h),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return mt(n)&&i.set(n,Pr),Pr;if(xe(r))for(let u=0;u<r.length;u++){const f=yt(r[u]);Ad(f)&&(o[f]=Ye)}else if(r)for(const u in r){const f=yt(u);if(Ad(f)){const h=r[u],d=o[f]=xe(h)||De(h)?{type:h}:Ze({},h),m=d.type;let _=!1,g=!0;if(xe(m))for(let p=0;p<m.length;++p){const T=m[p],x=De(T)&&T.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(g=!1)}else _=De(m)&&m.name==="Boolean";d[0]=_,d[1]=g,(_||rt(d,"default"))&&a.push(f)}}const c=[o,a];return mt(n)&&i.set(n,c),c}function Ad(n){return n[0]!=="$"&&!us(n)}const qg=n=>n[0]==="_"||n==="$stable",hh=n=>xe(n)?n.map(xn):[xn(n)],Wy=(n,e,t)=>{if(e._n)return e;const i=Tt((...s)=>hh(e(...s)),t);return i._c=!1,i},Kg=(n,e,t)=>{const i=n._ctx;for(const s in n){if(qg(s))continue;const r=n[s];if(De(r))e[s]=Wy(s,r,i);else if(r!=null){const o=hh(r);e[s]=()=>o}}},$g=(n,e)=>{const t=hh(e);n.slots.default=()=>t},jg=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Xy=(n,e,t)=>{const i=n.slots=zg();if(n.vnode.shapeFlag&32){const s=e._;s?(jg(i,e,t),t&&km(i,"_",s,!0)):Kg(e,i)}else e&&$g(n,e)},qy=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=Ye;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:jg(s,e,t):(r=!e.$stable,Kg(e,s)),o=e}else e&&($g(n,e),o={default:1});if(r)for(const a in s)!qg(a)&&o[a]==null&&delete s[a]},Ut=l_;function Yg(n){return Jg(n)}function Zg(n){return Jg(n,Jx)}function Jg(n,e){const t=tc();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=$t,insertStaticContent:m}=n,_=(I,E,Y,ee=null,Z=null,q=null,re=void 0,J=null,b=!!E.dynamicChildren)=>{if(I===E)return;I&&!Yn(I,E)&&(ee=de(I),Ue(I,Z,q,!0),I=null),E.patchFlag===-2&&(b=!1,E.dynamicChildren=null);const{type:y,ref:U,shapeFlag:H}=E;switch(y){case ds:g(I,E,Y,ee);break;case Dt:p(I,E,Y,ee);break;case Ks:I==null&&T(E,Y,ee,re);break;case Gt:N(I,E,Y,ee,Z,q,re,J,b);break;default:H&1?w(I,E,Y,ee,Z,q,re,J,b):H&6?D(I,E,Y,ee,Z,q,re,J,b):(H&64||H&128)&&y.process(I,E,Y,ee,Z,q,re,J,b,Re)}U!=null&&Z&&Zo(U,I&&I.ref,q,E||I,!E)},g=(I,E,Y,ee)=>{if(I==null)i(E.el=a(E.children),Y,ee);else{const Z=E.el=I.el;E.children!==I.children&&c(Z,E.children)}},p=(I,E,Y,ee)=>{I==null?i(E.el=l(E.children||""),Y,ee):E.el=I.el},T=(I,E,Y,ee)=>{[I.el,I.anchor]=m(I.children,E,Y,ee,I.el,I.anchor)},x=({el:I,anchor:E},Y,ee)=>{let Z;for(;I&&I!==E;)Z=h(I),i(I,Y,ee),I=Z;i(E,Y,ee)},v=({el:I,anchor:E})=>{let Y;for(;I&&I!==E;)Y=h(I),s(I),I=Y;s(E)},w=(I,E,Y,ee,Z,q,re,J,b)=>{E.type==="svg"?re="svg":E.type==="math"&&(re="mathml"),I==null?R(E,Y,ee,Z,q,re,J,b):M(I,E,Z,q,re,J,b)},R=(I,E,Y,ee,Z,q,re,J)=>{let b,y;const{props:U,shapeFlag:H,transition:X,dirs:W}=I;if(b=I.el=o(I.type,q,U&&U.is,U),H&8?u(b,I.children):H&16&&L(I.children,b,null,ee,Z,Bc(I,q),re,J),W&&oi(I,null,ee,"created"),C(b,I,I.scopeId,re,ee),U){for(const oe in U)oe!=="value"&&!us(oe)&&r(b,oe,null,U[oe],q,ee);"value"in U&&r(b,"value",null,U.value,q),(y=U.onVnodeBeforeMount)&&vn(y,ee,I)}W&&oi(I,null,ee,"beforeMount");const ue=Qg(Z,X);ue&&X.beforeEnter(b),i(b,E,Y),((y=U&&U.onVnodeMounted)||ue||W)&&Ut(()=>{y&&vn(y,ee,I),ue&&X.enter(b),W&&oi(I,null,ee,"mounted")},Z)},C=(I,E,Y,ee,Z)=>{if(Y&&d(I,Y),ee)for(let q=0;q<ee.length;q++)d(I,ee[q]);if(Z){let q=Z.subTree;if(E===q||Il(q.type)&&(q.ssContent===E||q.ssFallback===E)){const re=Z.vnode;C(I,re,re.scopeId,re.slotScopeIds,Z.parent)}}},L=(I,E,Y,ee,Z,q,re,J,b=0)=>{for(let y=b;y<I.length;y++){const U=I[y]=J?ss(I[y]):xn(I[y]);_(null,U,E,Y,ee,Z,q,re,J)}},M=(I,E,Y,ee,Z,q,re)=>{const J=E.el=I.el;let{patchFlag:b,dynamicChildren:y,dirs:U}=E;b|=I.patchFlag&16;const H=I.props||Ye,X=E.props||Ye;let W;if(Y&&ws(Y,!1),(W=X.onVnodeBeforeUpdate)&&vn(W,Y,E,I),U&&oi(E,I,Y,"beforeUpdate"),Y&&ws(Y,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&u(J,""),y?S(I.dynamicChildren,y,J,Y,ee,Bc(E,Z),q):re||O(I,E,J,null,Y,ee,Bc(E,Z),q,!1),b>0){if(b&16)P(J,H,X,Y,Z);else if(b&2&&H.class!==X.class&&r(J,"class",null,X.class,Z),b&4&&r(J,"style",H.style,X.style,Z),b&8){const ue=E.dynamicProps;for(let oe=0;oe<ue.length;oe++){const le=ue[oe],Fe=H[le],se=X[le];(se!==Fe||le==="value")&&r(J,le,Fe,se,Z,Y)}}b&1&&I.children!==E.children&&u(J,E.children)}else!re&&y==null&&P(J,H,X,Y,Z);((W=X.onVnodeUpdated)||U)&&Ut(()=>{W&&vn(W,Y,E,I),U&&oi(E,I,Y,"updated")},ee)},S=(I,E,Y,ee,Z,q,re)=>{for(let J=0;J<E.length;J++){const b=I[J],y=E[J],U=b.el&&(b.type===Gt||!Yn(b,y)||b.shapeFlag&70)?f(b.el):Y;_(b,y,U,null,ee,Z,q,re,!0)}},P=(I,E,Y,ee,Z)=>{if(E!==Y){if(E!==Ye)for(const q in E)!us(q)&&!(q in Y)&&r(I,q,E[q],null,Z,ee);for(const q in Y){if(us(q))continue;const re=Y[q],J=E[q];re!==J&&q!=="value"&&r(I,q,J,re,Z,ee)}"value"in Y&&r(I,"value",E.value,Y.value,Z)}},N=(I,E,Y,ee,Z,q,re,J,b)=>{const y=E.el=I?I.el:a(""),U=E.anchor=I?I.anchor:a("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:W}=E;W&&(J=J?J.concat(W):W),I==null?(i(y,Y,ee),i(U,Y,ee),L(E.children||[],Y,U,Z,q,re,J,b)):H>0&&H&64&&X&&I.dynamicChildren?(S(I.dynamicChildren,X,Y,Z,q,re,J),(E.key!=null||Z&&E===Z.subTree)&&dh(I,E,!0)):O(I,E,Y,U,Z,q,re,J,b)},D=(I,E,Y,ee,Z,q,re,J,b)=>{E.slotScopeIds=J,I==null?E.shapeFlag&512?Z.ctx.activate(E,Y,ee,re,b):G(E,Y,ee,Z,q,re,b):$(I,E,b)},G=(I,E,Y,ee,Z,q,re)=>{const J=I.component=p_(I,ee,Z);if(ua(I)&&(J.ctx.renderer=Re),g_(J,!1,re),J.asyncDep){if(Z&&Z.registerDep(J,F,re),!I.el){const b=J.subTree=Be(Dt);p(null,b,E,Y)}}else F(J,I,E,Y,Z,q,re)},$=(I,E,Y)=>{const ee=E.component=I.component;if(nS(I,E,Y))if(ee.asyncDep&&!ee.asyncResolved){Q(ee,E,Y);return}else ee.next=E,ee.update();else E.el=I.el,ee.vnode=E},F=(I,E,Y,ee,Z,q,re)=>{const J=()=>{if(I.isMounted){let{next:H,bu:X,u:W,parent:ue,vnode:oe}=I;{const we=e_(I);if(we){H&&(H.el=oe.el,Q(I,H,re)),we.asyncDep.then(()=>{I.isUnmounted||J()});return}}let le=H,Fe;ws(I,!1),H?(H.el=oe.el,Q(I,H,re)):H=oe,X&&Nr(X),(Fe=H.props&&H.props.onVnodeBeforeUpdate)&&vn(Fe,ue,H,oe),ws(I,!0);const se=cl(I),me=I.subTree;I.subTree=se,_(me,se,f(me.el),de(me),I,Z,q),H.el=se.el,le===null&&_c(I,se.el),W&&Ut(W,Z),(Fe=H.props&&H.props.onVnodeUpdated)&&Ut(()=>vn(Fe,ue,H,oe),Z)}else{let H;const{el:X,props:W}=E,{bm:ue,m:oe,parent:le,root:Fe,type:se}=I,me=hs(E);if(ws(I,!1),ue&&Nr(ue),!me&&(H=W&&W.onVnodeBeforeMount)&&vn(H,le,E),ws(I,!0),X&&_t){const we=()=>{I.subTree=cl(I),_t(X,I.subTree,I,Z,null)};me&&se.__asyncHydrate?se.__asyncHydrate(X,I,we):we()}else{Fe.ce&&Fe.ce._injectChildStyle(se);const we=I.subTree=cl(I);_(null,we,Y,ee,I,Z,q),E.el=we.el}if(oe&&Ut(oe,Z),!me&&(H=W&&W.onVnodeMounted)){const we=E;Ut(()=>vn(H,le,we),Z)}(E.shapeFlag&256||le&&hs(le.vnode)&&le.vnode.shapeFlag&256)&&I.a&&Ut(I.a,Z),I.isMounted=!0,E=Y=ee=null}};I.scope.on();const b=I.effect=new Xo(J);I.scope.off();const y=I.update=b.run.bind(b),U=I.job=b.runIfDirty.bind(b);U.i=I,U.id=I.uid,b.scheduler=()=>nh(U),ws(I,!0),y()},Q=(I,E,Y)=>{E.component=I;const ee=I.vnode.props;I.vnode=E,I.next=null,zy(I,E.props,ee,Y),qy(I,E.children,Y),Ms(),md(I),Es()},O=(I,E,Y,ee,Z,q,re,J,b=!1)=>{const y=I&&I.children,U=I?I.shapeFlag:0,H=E.children,{patchFlag:X,shapeFlag:W}=E;if(X>0){if(X&128){pe(y,H,Y,ee,Z,q,re,J,b);return}else if(X&256){ce(y,H,Y,ee,Z,q,re,J,b);return}}W&8?(U&16&&Te(y,Z,q),H!==y&&u(Y,H)):U&16?W&16?pe(y,H,Y,ee,Z,q,re,J,b):Te(y,Z,q,!0):(U&8&&u(Y,""),W&16&&L(H,Y,ee,Z,q,re,J,b))},ce=(I,E,Y,ee,Z,q,re,J,b)=>{I=I||Pr,E=E||Pr;const y=I.length,U=E.length,H=Math.min(y,U);let X;for(X=0;X<H;X++){const W=E[X]=b?ss(E[X]):xn(E[X]);_(I[X],W,Y,null,Z,q,re,J,b)}y>U?Te(I,Z,q,!0,!1,H):L(E,Y,ee,Z,q,re,J,b,H)},pe=(I,E,Y,ee,Z,q,re,J,b)=>{let y=0;const U=E.length;let H=I.length-1,X=U-1;for(;y<=H&&y<=X;){const W=I[y],ue=E[y]=b?ss(E[y]):xn(E[y]);if(Yn(W,ue))_(W,ue,Y,null,Z,q,re,J,b);else break;y++}for(;y<=H&&y<=X;){const W=I[H],ue=E[X]=b?ss(E[X]):xn(E[X]);if(Yn(W,ue))_(W,ue,Y,null,Z,q,re,J,b);else break;H--,X--}if(y>H){if(y<=X){const W=X+1,ue=W<U?E[W].el:ee;for(;y<=X;)_(null,E[y]=b?ss(E[y]):xn(E[y]),Y,ue,Z,q,re,J,b),y++}}else if(y>X)for(;y<=H;)Ue(I[y],Z,q,!0),y++;else{const W=y,ue=y,oe=new Map;for(y=ue;y<=X;y++){const Oe=E[y]=b?ss(E[y]):xn(E[y]);Oe.key!=null&&oe.set(Oe.key,y)}let le,Fe=0;const se=X-ue+1;let me=!1,we=0;const Ie=new Array(se);for(y=0;y<se;y++)Ie[y]=0;for(y=W;y<=H;y++){const Oe=I[y];if(Fe>=se){Ue(Oe,Z,q,!0);continue}let Le;if(Oe.key!=null)Le=oe.get(Oe.key);else for(le=ue;le<=X;le++)if(Ie[le-ue]===0&&Yn(Oe,E[le])){Le=le;break}Le===void 0?Ue(Oe,Z,q,!0):(Ie[Le-ue]=y+1,Le>=we?we=Le:me=!0,_(Oe,E[Le],Y,null,Z,q,re,J,b),Fe++)}const Me=me?Ky(Ie):Pr;for(le=Me.length-1,y=se-1;y>=0;y--){const Oe=ue+y,Le=E[Oe],ft=Oe+1<U?E[Oe+1].el:ee;Ie[y]===0?_(null,Le,Y,ft,Z,q,re,J,b):me&&(le<0||y!==Me[le]?Ee(Le,Y,ft,2):le--)}}},Ee=(I,E,Y,ee,Z=null)=>{const{el:q,type:re,transition:J,children:b,shapeFlag:y}=I;if(y&6){Ee(I.component.subTree,E,Y,ee);return}if(y&128){I.suspense.move(E,Y,ee);return}if(y&64){re.move(I,E,Y,Re);return}if(re===Gt){i(q,E,Y);for(let H=0;H<b.length;H++)Ee(b[H],E,Y,ee);i(I.anchor,E,Y);return}if(re===Ks){x(I,E,Y);return}if(ee!==2&&y&1&&J)if(ee===0)J.beforeEnter(q),i(q,E,Y),Ut(()=>J.enter(q),Z);else{const{leave:H,delayLeave:X,afterLeave:W}=J,ue=()=>i(q,E,Y),oe=()=>{H(q,()=>{ue(),W&&W()})};X?X(q,ue,oe):oe()}else i(q,E,Y)},Ue=(I,E,Y,ee=!1,Z=!1)=>{const{type:q,props:re,ref:J,children:b,dynamicChildren:y,shapeFlag:U,patchFlag:H,dirs:X,cacheIndex:W}=I;if(H===-2&&(Z=!1),J!=null&&Zo(J,null,Y,I,!0),W!=null&&(E.renderCache[W]=void 0),U&256){E.ctx.deactivate(I);return}const ue=U&1&&X,oe=!hs(I);let le;if(oe&&(le=re&&re.onVnodeBeforeUnmount)&&vn(le,E,I),U&6)he(I.component,Y,ee);else{if(U&128){I.suspense.unmount(Y,ee);return}ue&&oi(I,null,E,"beforeUnmount"),U&64?I.type.remove(I,E,Y,Re,ee):y&&!y.hasOnce&&(q!==Gt||H>0&&H&64)?Te(y,E,Y,!1,!0):(q===Gt&&H&384||!Z&&U&16)&&Te(b,E,Y),ee&&lt(I)}(oe&&(le=re&&re.onVnodeUnmounted)||ue)&&Ut(()=>{le&&vn(le,E,I),ue&&oi(I,null,E,"unmounted")},Y)},lt=I=>{const{type:E,el:Y,anchor:ee,transition:Z}=I;if(E===Gt){ne(Y,ee);return}if(E===Ks){v(I);return}const q=()=>{s(Y),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(I.shapeFlag&1&&Z&&!Z.persisted){const{leave:re,delayLeave:J}=Z,b=()=>re(Y,q);J?J(I.el,q,b):b()}else q()},ne=(I,E)=>{let Y;for(;I!==E;)Y=h(I),s(I),I=Y;s(E)},he=(I,E,Y)=>{const{bum:ee,scope:Z,job:q,subTree:re,um:J,m:b,a:y}=I;Pl(b),Pl(y),ee&&Nr(ee),Z.stop(),q&&(q.flags|=8,Ue(re,I,E,Y)),J&&Ut(J,E),Ut(()=>{I.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&I.asyncDep&&!I.asyncResolved&&I.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},Te=(I,E,Y,ee=!1,Z=!1,q=0)=>{for(let re=q;re<I.length;re++)Ue(I[re],E,Y,ee,Z)},de=I=>{if(I.shapeFlag&6)return de(I.component.subTree);if(I.shapeFlag&128)return I.suspense.next();const E=h(I.anchor||I.el),Y=E&&E[xg];return Y?h(Y):E};let Ce=!1;const Je=(I,E,Y)=>{I==null?E._vnode&&Ue(E._vnode,null,null,!0):_(E._vnode||null,I,E,null,null,null,Y),E._vnode=I,Ce||(Ce=!0,md(),Rl(),Ce=!1)},Re={p:_,um:Ue,m:Ee,r:lt,mt:G,mc:L,pc:O,pbc:S,n:de,o:n};let xt,_t;return e&&([xt,_t]=e(Re)),{render:Je,hydrate:xt,createApp:ky(Je,xt)}}function Bc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ws({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Qg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function dh(n,e,t=!1){const i=n.children,s=e.children;if(xe(i)&&xe(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=ss(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&dh(o,a)),a.type===ds&&(a.el=o.el)}}function Ky(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function e_(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:e_(e)}function Pl(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const t_=Symbol.for("v-scx"),n_=()=>Bo(t_);function $y(n,e){return fa(n,null,e)}function jy(n,e){return fa(n,null,{flush:"post"})}function i_(n,e){return fa(n,null,{flush:"sync"})}function Ur(n,e,t){return fa(n,e,t)}function fa(n,e,t=Ye){const{immediate:i,deep:s,flush:r,once:o}=t,a=Ze({},t),l=e&&i||!e&&r!=="post";let c;if(Gr){if(r==="sync"){const d=n_();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=$t,d.resume=$t,d.pause=$t,d}}const u=Ft;a.call=(d,m,_)=>Gn(d,u,m,_);let f=!1;r==="post"?a.scheduler=d=>{Ut(d,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(d,m)=>{m?d():nh(d)}),a.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=Nx(n,e,a);return Gr&&(c?c.push(h):l&&h()),h}function Yy(n,e,t){const i=this.proxy,s=ze(n)?n.includes(".")?s_(i,n):()=>i[n]:n.bind(i,i);let r;De(e)?r=e:(r=e.handler,t=e);const o=Js(this),a=fa(s,r.bind(i),t);return o(),a}function s_(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}function Zy(n,e,t=Ye){const i=Wn(),s=yt(e),r=yn(e),o=r_(n,s),a=fg((l,c)=>{let u,f=Ye,h;return i_(()=>{const d=n[s];un(u,d)&&(u=d,c())}),{get(){return l(),t.get?t.get(u):u},set(d){const m=t.set?t.set(d):d;if(!un(m,u)&&!(f!==Ye&&un(d,f)))return;const _=i.vnode.props;_&&(e in _||s in _||r in _)&&(`onUpdate:${e}`in _||`onUpdate:${s}`in _||`onUpdate:${r}`in _)||(u=d,c()),i.emit(`update:${e}`,m),un(d,m)&&un(d,f)&&!un(m,h)&&c(),f=d,h=m}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Ye:a,done:!1}:{done:!0}}}},a}const r_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${yt(e)}Modifiers`]||n[`${yn(e)}Modifiers`];function Jy(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ye;let s=t;const r=e.startsWith("update:"),o=r&&r_(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>ze(u)?u.trim():u)),o.number&&(s=t.map(El)));let a,l=i[a=Lr(e)]||i[a=Lr(yt(e))];!l&&r&&(l=i[a=Lr(yn(e))]),l&&Gn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Gn(c,n,6,s)}}function o_(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!De(n)){const l=c=>{const u=o_(c,e,!0);u&&(a=!0,Ze(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(mt(n)&&i.set(n,null),null):(xe(r)?r.forEach(l=>o[l]=null):Ze(o,r),mt(n)&&i.set(n,o),o)}function gc(n,e){return!n||!nr(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(n,e[0].toLowerCase()+e.slice(1))||rt(n,yn(e))||rt(n,e))}function cl(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:m,inheritAttrs:_}=n,g=Yo(n);let p,T;try{if(t.shapeFlag&4){const v=s||i,w=v;p=xn(c.call(w,v,u,f,d,h,m)),T=a}else{const v=e;p=xn(v.length>1?v(f,{attrs:a,slots:o,emit:l}):v(f,null)),T=e.props?a:eS(a)}}catch(v){ko.length=0,rr(v,n,1),p=Be(Dt)}let x=p;if(T&&_!==!1){const v=Object.keys(T),{shapeFlag:w}=x;v.length&&w&7&&(r&&v.some(qf)&&(T=tS(T,r)),x=ui(x,T,!1,!0))}return t.dirs&&(x=ui(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&Bi(x,t.transition),p=x,Yo(g),p}function Qy(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(Hi(s)){if(s.type!==Dt||s.children==="v-if"){if(t)return;t=s}}else return}return t}const eS=n=>{let e;for(const t in n)(t==="class"||t==="style"||nr(t))&&((e||(e={}))[t]=n[t]);return e},tS=(n,e)=>{const t={};for(const i in n)(!qf(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function nS(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?wd(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(o[h]!==i[h]&&!gc(c,h))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wd(i,o,c):!0:!!o;return!1}function wd(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!gc(t,r))return!0}return!1}function _c({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Il=n=>n.__isSuspense;let Ou=0;const iS={name:"Suspense",__isSuspense:!0,process(n,e,t,i,s,r,o,a,l,c){if(n==null)rS(e,t,i,s,r,o,a,l,c);else{if(r&&r.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}oS(n,e,t,i,s,o,a,l,c)}},hydrate:aS,normalize:lS},sS=iS;function Qo(n,e){const t=n.props&&n.props[e];De(t)&&t()}function rS(n,e,t,i,s,r,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),h=n.suspense=a_(n,s,i,e,f,t,r,o,a,l);c(null,h.pendingBranch=n.ssContent,f,null,i,h,r,o),h.deps>0?(Qo(n,"onPending"),Qo(n,"onFallback"),c(null,n.ssFallback,e,t,i,null,r,o),Or(h,n.ssFallback)):h.resolve(!1,!0)}function oS(n,e,t,i,s,r,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=n.suspense;f.vnode=e,e.el=n.el;const h=e.ssContent,d=e.ssFallback,{activeBranch:m,pendingBranch:_,isInFallback:g,isHydrating:p}=f;if(_)f.pendingBranch=h,Yn(h,_)?(l(_,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():g&&(p||(l(m,d,t,i,s,null,r,o,a),Or(f,d)))):(f.pendingId=Ou++,p?(f.isHydrating=!1,f.activeBranch=_):c(_,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),g?(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0?f.resolve():(l(m,d,t,i,s,null,r,o,a),Or(f,d))):m&&Yn(h,m)?(l(m,h,t,i,s,f,r,o,a),f.resolve(!0)):(l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0&&f.resolve()));else if(m&&Yn(h,m))l(m,h,t,i,s,f,r,o,a),Or(f,h);else if(Qo(e,"onPending"),f.pendingBranch=h,h.shapeFlag&512?f.pendingId=h.component.suspenseId:f.pendingId=Ou++,l(null,h,f.hiddenContainer,null,s,f,r,o,a),f.deps<=0)f.resolve();else{const{timeout:T,pendingId:x}=f;T>0?setTimeout(()=>{f.pendingId===x&&f.fallback(d)},T):T===0&&f.fallback(d)}}function a_(n,e,t,i,s,r,o,a,l,c,u=!1){const{p:f,m:h,um:d,n:m,o:{parentNode:_,remove:g}}=c;let p;const T=cS(n);T&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const x=n.props?Tl(n.props.timeout):void 0,v=r,w={vnode:n,parent:e,parentComponent:t,namespace:o,container:i,hiddenContainer:s,deps:0,pendingId:Ou++,timeout:typeof x=="number"?x:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(R=!1,C=!1){const{vnode:L,activeBranch:M,pendingBranch:S,pendingId:P,effects:N,parentComponent:D,container:G}=w;let $=!1;w.isHydrating?w.isHydrating=!1:R||($=M&&S.transition&&S.transition.mode==="out-in",$&&(M.transition.afterLeave=()=>{P===w.pendingId&&(h(S,G,r===v?m(M):r,0),$o(N))}),M&&(_(M.el)===G&&(r=m(M)),d(M,D,w,!0)),$||h(S,G,r,0)),Or(w,S),w.pendingBranch=null,w.isInFallback=!1;let F=w.parent,Q=!1;for(;F;){if(F.pendingBranch){F.effects.push(...N),Q=!0;break}F=F.parent}!Q&&!$&&$o(N),w.effects=[],T&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Qo(L,"onResolve")},fallback(R){if(!w.pendingBranch)return;const{vnode:C,activeBranch:L,parentComponent:M,container:S,namespace:P}=w;Qo(C,"onFallback");const N=m(L),D=()=>{w.isInFallback&&(f(null,R,S,N,M,null,P,a,l),Or(w,R))},G=R.transition&&R.transition.mode==="out-in";G&&(L.transition.afterLeave=D),w.isInFallback=!0,d(L,M,null,!0),G||D()},move(R,C,L){w.activeBranch&&h(w.activeBranch,R,C,L),w.container=R},next(){return w.activeBranch&&m(w.activeBranch)},registerDep(R,C,L){const M=!!w.pendingBranch;M&&w.deps++;const S=R.vnode.el;R.asyncDep.catch(P=>{rr(P,R,0)}).then(P=>{if(R.isUnmounted||w.isUnmounted||w.pendingId!==R.suspenseId)return;R.asyncResolved=!0;const{vnode:N}=R;Hu(R,P,!1),S&&(N.el=S);const D=!S&&R.subTree.el;C(R,N,_(S||R.subTree.el),S?null:m(R.subTree),w,o,L),D&&g(D),_c(R,N.el),M&&--w.deps===0&&w.resolve()})},unmount(R,C){w.isUnmounted=!0,w.activeBranch&&d(w.activeBranch,t,R,C),w.pendingBranch&&d(w.pendingBranch,t,R,C)}};return w}function aS(n,e,t,i,s,r,o,a,l){const c=e.suspense=a_(e,i,t,n.parentNode,document.createElement("div"),null,s,r,o,a,!0),u=l(n,c.pendingBranch=e.ssContent,t,c,r,o);return c.deps===0&&c.resolve(!1,!0),u}function lS(n){const{shapeFlag:e,children:t}=n,i=e&32;n.ssContent=Rd(i?t.default:t),n.ssFallback=i?Rd(t.fallback):Be(Dt)}function Rd(n){let e;if(De(n)){const t=Zs&&n._c;t&&(n._d=!1,ki()),n=n(),t&&(n._d=!0,e=nn,c_())}return xe(n)&&(n=Qy(n)),n=xn(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function l_(n,e){e&&e.pendingBranch?xe(n)?e.effects.push(...n):e.effects.push(n):$o(n)}function Or(n,e){n.activeBranch=e;const{vnode:t,parentComponent:i}=n;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;t.el=s,i&&i.subTree===t&&(i.vnode.el=s,_c(i,s))}function cS(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const Gt=Symbol.for("v-fgt"),ds=Symbol.for("v-txt"),Dt=Symbol.for("v-cmt"),Ks=Symbol.for("v-stc"),ko=[];let nn=null;function ki(n=!1){ko.push(nn=n?null:[])}function c_(){ko.pop(),nn=ko[ko.length-1]||null}let Zs=1;function Fu(n,e=!1){Zs+=n,n<0&&nn&&e&&(nn.hasOnce=!0)}function u_(n){return n.dynamicChildren=Zs>0?nn||Pr:null,c_(),Zs>0&&nn&&nn.push(n),n}function ha(n,e,t,i,s,r){return u_(ae(n,e,t,i,s,r,!0))}function Ll(n,e,t,i,s){return u_(Be(n,e,t,i,s,!0))}function Hi(n){return n?n.__v_isVNode===!0:!1}function Yn(n,e){return n.type===e.type&&n.key===e.key}function uS(n){}const f_=({key:n})=>n??null,ul=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ze(n)||kt(n)||De(n)?{i:Bt,r:n,k:e,f:!!t}:n:null);function ae(n,e=null,t=null,i=0,s=null,r=n===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&f_(e),ref:e&&ul(e),scopeId:fc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return a?(ph(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=ze(t)?8:16),Zs>0&&!o&&nn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&nn.push(l),l}const Be=fS;function fS(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Ug)&&(n=Dt),Hi(n)){const a=ui(n,e,!0);return t&&ph(a,t),Zs>0&&!r&&nn&&(a.shapeFlag&6?nn[nn.indexOf(n)]=a:nn.push(a)),a.patchFlag=-2,a}if(xS(n)&&(n=n.__vccOpts),e){e=h_(e);let{class:a,style:l}=e;a&&!ze(a)&&(e.class=lo(a)),mt(l)&&(lc(l)&&!xe(l)&&(l=Ze({},l)),e.style=Ss(l))}const o=ze(n)?1:Il(n)?128:yg(n)?64:mt(n)?4:De(n)?2:0;return ae(n,e,t,i,s,o,r,!0)}function h_(n){return n?lc(n)||Gg(n)?Ze({},n):n:null}function ui(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?d_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&f_(c),ref:e&&e.ref?t&&r?xe(r)?r.concat(ul(e)):[r,ul(e)]:ul(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Gt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ui(n.ssContent),ssFallback:n.ssFallback&&ui(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Bi(u,l.clone(u)),u}function Fr(n=" ",e=0){return Be(ds,null,n,e)}function hS(n,e){const t=Be(Ks,null,n);return t.staticCount=e,t}function dS(n="",e=!1){return e?(ki(),Ll(Dt,null,n)):Be(Dt,null,n)}function xn(n){return n==null||typeof n=="boolean"?Be(Dt):xe(n)?Be(Gt,null,n.slice()):Hi(n)?ss(n):Be(ds,null,String(n))}function ss(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ui(n)}function ph(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(xe(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),ph(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Gg(e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else De(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),i&64?(t=16,e=[Fr(e)]):t=8);n.children=e,n.shapeFlag|=t}function d_(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=lo([e.class,i.class]));else if(s==="style")e.style=Ss([e.style,i.style]);else if(nr(s)){const r=e[s],o=i[s];o&&r!==o&&!(xe(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=i[s])}return e}function vn(n,e,t,i=null){Gn(n,e,7,[t,i])}const pS=kg();let mS=0;function p_(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||pS,r={uid:mS++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Xg(i,s),emitsOptions:o_(i,s),emit:null,emitted:null,propsDefaults:Ye,inheritAttrs:i.inheritAttrs,ctx:Ye,data:Ye,props:Ye,attrs:Ye,slots:Ye,refs:Ye,setupState:Ye,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Jy.bind(null,r),n.ce&&n.ce(r),r}let Ft=null;const Wn=()=>Ft||Bt;let Nl,Bu;{const n=tc(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Nl=e("__VUE_INSTANCE_SETTERS__",t=>Ft=t),Bu=e("__VUE_SSR_SETTERS__",t=>Gr=t)}const Js=n=>{const e=Ft;return Nl(n),n.scope.on(),()=>{n.scope.off(),Nl(e)}},ku=()=>{Ft&&Ft.scope.off(),Nl(null)};function m_(n){return n.vnode.shapeFlag&4}let Gr=!1;function g_(n,e=!1,t=!1){e&&Bu(e);const{props:i,children:s}=n.vnode,r=m_(n);Vy(n,i,r,e),Xy(n,s,t);const o=r?gS(n,e):void 0;return e&&Bu(!1),o}function gS(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Lu);const{setup:i}=t;if(i){Ms();const s=n.setupContext=i.length>1?x_(n):null,r=Js(n),o=co(i,n,0,[n.props,s]),a=$f(o);if(Es(),r(),(a||n.sp)&&!hs(n)&&oh(n),a){if(o.then(ku,ku),e)return o.then(l=>{Hu(n,l,e)}).catch(l=>{rr(l,n,0)});n.asyncDep=o}else Hu(n,o,e)}else v_(n,e)}function Hu(n,e,t){De(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mt(e)&&(n.setupState=th(e)),v_(n,t)}let Dl,Vu;function __(n){Dl=n,Vu=e=>{e.render._rc&&(e.withProxy=new Proxy(e.ctx,xy))}}const _S=()=>!Dl;function v_(n,e,t){const i=n.type;if(!n.render){if(!e&&Dl&&!i.render){const s=i.template||fh(n).template;if(s){const{isCustomElement:r,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:l}=i,c=Ze(Ze({isCustomElement:r,delimiters:a},o),l);i.render=Dl(s,c)}}n.render=i.render||$t,Vu&&Vu(n)}{const s=Js(n);Ms();try{Ny(n)}finally{Es(),s()}}}const vS={get(n,e){return en(n,"get",""),n[e]}};function x_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,vS),slots:n.slots,emit:n.emit,expose:e}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(th(lg(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fo)return Fo[t](n)},has(e,t){return t in e||t in Fo}})):n.proxy}function zu(n,e=!0){return De(n)?n.displayName||n.name:n.name||e&&n.__name}function xS(n){return De(n)&&"__vccOpts"in n}const $s=(n,e)=>Cx(n,e,Gr);function y_(n,e,t){const i=arguments.length;return i===2?mt(e)&&!xe(e)?Hi(e)?Be(n,null,[e]):Be(n,e):Be(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Hi(t)&&(t=[t]),Be(n,e,t))}function yS(){}function SS(n,e,t,i){const s=t[i];if(s&&S_(s,n))return s;const r=e();return r.memo=n.slice(),r.cacheIndex=i,t[i]=r}function S_(n,e){const t=n.memo;if(t.length!=e.length)return!1;for(let i=0;i<t.length;i++)if(un(t[i],e[i]))return!1;return Zs>0&&nn&&nn.push(n),!0}const M_="3.5.13",MS=$t,ES=Bx,TS=wr,bS=vg,AS={createComponentInstance:p_,setupComponent:g_,renderComponentRoot:cl,setCurrentRenderingInstance:Yo,isVNode:Hi,normalizeVNode:xn,getComponentPublicInstance:da,ensureValidVNode:uh,pushWarningContext:Dx,popWarningContext:Ux},wS=AS,RS=null,CS=null,PS=null;/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gu;const Cd=typeof window<"u"&&window.trustedTypes;if(Cd)try{Gu=Cd.createPolicy("vue",{createHTML:n=>n})}catch{}const E_=Gu?n=>Gu.createHTML(n):n=>n,IS="http://www.w3.org/2000/svg",LS="http://www.w3.org/1998/Math/MathML",Ri=typeof document<"u"?document:null,Pd=Ri&&Ri.createElement("template"),NS={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?Ri.createElementNS(IS,n):e==="mathml"?Ri.createElementNS(LS,n):t?Ri.createElement(n,{is:t}):Ri.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Ri.createTextNode(n),createComment:n=>Ri.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ri.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{Pd.innerHTML=E_(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Pd.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Xi="transition",vo="animation",Wr=Symbol("_vtc"),T_={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},b_=Ze({},sh,T_),DS=n=>(n.displayName="Transition",n.props=b_,n),US=DS((n,{slots:e})=>y_(bg,A_(n),e)),Rs=(n,e=[])=>{xe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Id=n=>n?xe(n)?n.some(e=>e.length>1):n.length>1:!1;function A_(n){const e={};for(const N in n)N in T_||(e[N]=n[N]);if(n.css===!1)return e;const{name:t="v",type:i,duration:s,enterFromClass:r=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:d=`${t}-leave-to`}=n,m=OS(s),_=m&&m[0],g=m&&m[1],{onBeforeEnter:p,onEnter:T,onEnterCancelled:x,onLeave:v,onLeaveCancelled:w,onBeforeAppear:R=p,onAppear:C=T,onAppearCancelled:L=x}=e,M=(N,D,G,$)=>{N._enterCancelled=$,es(N,D?u:a),es(N,D?c:o),G&&G()},S=(N,D)=>{N._isLeaving=!1,es(N,f),es(N,d),es(N,h),D&&D()},P=N=>(D,G)=>{const $=N?C:T,F=()=>M(D,N,G);Rs($,[D,F]),Ld(()=>{es(D,N?l:r),si(D,N?u:a),Id($)||Nd(D,i,_,F)})};return Ze(e,{onBeforeEnter(N){Rs(p,[N]),si(N,r),si(N,o)},onBeforeAppear(N){Rs(R,[N]),si(N,l),si(N,c)},onEnter:P(!1),onAppear:P(!0),onLeave(N,D){N._isLeaving=!0;const G=()=>S(N,D);si(N,f),N._enterCancelled?(si(N,h),Wu()):(Wu(),si(N,h)),Ld(()=>{N._isLeaving&&(es(N,f),si(N,d),Id(v)||Nd(N,i,g,G))}),Rs(v,[N,G])},onEnterCancelled(N){M(N,!1,void 0,!0),Rs(x,[N])},onAppearCancelled(N){M(N,!0,void 0,!0),Rs(L,[N])},onLeaveCancelled(N){S(N),Rs(w,[N])}})}function OS(n){if(n==null)return null;if(mt(n))return[kc(n.enter),kc(n.leave)];{const e=kc(n);return[e,e]}}function kc(n){return Tl(n)}function si(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Wr]||(n[Wr]=new Set)).add(e)}function es(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[Wr];t&&(t.delete(e),t.size||(n[Wr]=void 0))}function Ld(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let FS=0;function Nd(n,e,t,i){const s=n._endId=++FS,r=()=>{s===n._endId&&i()};if(t!=null)return setTimeout(r,t);const{type:o,timeout:a,propCount:l}=w_(n,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{n.removeEventListener(c,h),r()},h=d=>{d.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),n.addEventListener(c,h)}function w_(n,e){const t=window.getComputedStyle(n),i=m=>(t[m]||"").split(", "),s=i(`${Xi}Delay`),r=i(`${Xi}Duration`),o=Dd(s,r),a=i(`${vo}Delay`),l=i(`${vo}Duration`),c=Dd(a,l);let u=null,f=0,h=0;e===Xi?o>0&&(u=Xi,f=o,h=r.length):e===vo?c>0&&(u=vo,f=c,h=l.length):(f=Math.max(o,c),u=f>0?o>c?Xi:vo:null,h=u?u===Xi?r.length:l.length:0);const d=u===Xi&&/\b(transform|all)(,|$)/.test(i(`${Xi}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:d}}function Dd(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Ud(t)+Ud(n[i])))}function Ud(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Wu(){return document.body.offsetHeight}function BS(n,e,t){const i=n[Wr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ul=Symbol("_vod"),R_=Symbol("_vsh"),C_={beforeMount(n,{value:e},{transition:t}){n[Ul]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):xo(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),xo(n,!0),i.enter(n)):i.leave(n,()=>{xo(n,!1)}):xo(n,e))},beforeUnmount(n,{value:e}){xo(n,e)}};function xo(n,e){n.style.display=e?n[Ul]:"none",n[R_]=!e}function kS(){C_.getSSRProps=({value:n})=>{if(!n)return{style:{display:"none"}}}}const P_=Symbol("");function HS(n){const e=Wn();if(!e)return;const t=e.ut=(s=n(e.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r=>Ol(r,s))},i=()=>{const s=n(e.proxy);e.ce?Ol(e.ce,s):Xu(e.subTree,s),t(s)};ah(()=>{$o(i)}),Wi(()=>{Ur(i,$t,{flush:"post"});const s=new MutationObserver(i);s.observe(e.subTree.el.parentNode,{childList:!0}),mc(()=>s.disconnect())})}function Xu(n,e){if(n.shapeFlag&128){const t=n.suspense;n=t.activeBranch,t.pendingBranch&&!t.isHydrating&&t.effects.push(()=>{Xu(t.activeBranch,e)})}for(;n.component;)n=n.component.subTree;if(n.shapeFlag&1&&n.el)Ol(n.el,e);else if(n.type===Gt)n.children.forEach(t=>Xu(t,e));else if(n.type===Ks){let{el:t,anchor:i}=n;for(;t&&(Ol(t,e),t!==i);)t=t.nextSibling}}function Ol(n,e){if(n.nodeType===1){const t=n.style;let i="";for(const s in e)t.setProperty(`--${s}`,e[s]),i+=`--${s}: ${e[s]};`;t[P_]=i}}const VS=/(^|;)\s*display\s*:/;function zS(n,e,t){const i=n.style,s=ze(t);let r=!1;if(t&&!s){if(e)if(ze(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&fl(i,a,"")}else for(const o in e)t[o]==null&&fl(i,o,"");for(const o in t)o==="display"&&(r=!0),fl(i,o,t[o])}else if(s){if(e!==t){const o=i[P_];o&&(t+=";"+o),i.cssText=t,r=VS.test(t)}}else e&&n.removeAttribute("style");Ul in n&&(n[Ul]=r?i.display:"",n[R_]&&(i.display="none"))}const Od=/\s*!important$/;function fl(n,e,t){if(xe(t))t.forEach(i=>fl(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=GS(n,e);Od.test(t)?n.setProperty(yn(i),t.replace(Od,""),"important"):n[i]=t}}const Fd=["Webkit","Moz","ms"],Hc={};function GS(n,e){const t=Hc[e];if(t)return t;let i=yt(e);if(i!=="filter"&&i in n)return Hc[e]=i;i=sr(i);for(let s=0;s<Fd.length;s++){const r=Fd[s]+i;if(r in n)return Hc[e]=r}return e}const Bd="http://www.w3.org/1999/xlink";function kd(n,e,t,i,s,r=Kv(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Bd,e.slice(6,e.length)):n.setAttributeNS(Bd,e,t):t==null||r&&!Vm(t)?n.removeAttribute(e):n.setAttribute(e,r?"":En(t)?String(t):t)}function Hd(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?E_(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=Vm(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Li(n,e,t,i){n.addEventListener(e,t,i)}function WS(n,e,t,i){n.removeEventListener(e,t,i)}const Vd=Symbol("_vei");function XS(n,e,t,i,s=null){const r=n[Vd]||(n[Vd]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=qS(e);if(i){const c=r[e]=jS(i,s);Li(n,a,c,l)}else o&&(WS(n,a,o,l),r[e]=void 0)}}const zd=/(?:Once|Passive|Capture)$/;function qS(n){let e;if(zd.test(n)){e={};let i;for(;i=n.match(zd);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):yn(n.slice(2)),e]}let Vc=0;const KS=Promise.resolve(),$S=()=>Vc||(KS.then(()=>Vc=0),Vc=Date.now());function jS(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Gn(YS(i,t.value),e,5,[i])};return t.value=n,t.attached=$S(),t}function YS(n,e){if(xe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const Gd=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,ZS=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?BS(n,i,o):e==="style"?zS(n,t,i):nr(e)?qf(e)||XS(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):JS(n,e,i,o))?(Hd(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&kd(n,e,i,o,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ze(i))?Hd(n,yt(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),kd(n,e,i,o))};function JS(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Gd(e)&&De(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Gd(e)&&ze(t)?!1:e in n}const Wd={};/*! #__NO_SIDE_EFFECTS__ */function I_(n,e,t){const i=rh(n,e);Ql(i)&&Ze(i,e);class s extends vc{constructor(o){super(i,o,t)}}return s.def=i,s}/*! #__NO_SIDE_EFFECTS__ */const QS=(n,e)=>I_(n,e,G_),eM=typeof HTMLElement<"u"?HTMLElement:class{};class vc extends eM{constructor(e,t={},i=kl){super(),this._def=e,this._props=t,this._createApp=i,this._isVueCE=!0,this._instance=null,this._app=null,this._nonce=this._def.nonce,this._connected=!1,this._resolved=!1,this._numberProps=null,this._styleChildren=new WeakSet,this._ob=null,this.shadowRoot&&i!==kl?this._root=this.shadowRoot:e.shadowRoot!==!1?(this.attachShadow({mode:"open"}),this._root=this.shadowRoot):this._root=this,this._def.__asyncLoader||this._resolveProps(this._def)}connectedCallback(){if(!this.isConnected)return;this.shadowRoot||this._parseSlots(),this._connected=!0;let e=this;for(;e=e&&(e.parentNode||e.host);)if(e instanceof vc){this._parent=e;break}this._instance||(this._resolved?(this._setParent(),this._update()):e&&e._pendingResolve?this._pendingResolve=e._pendingResolve.then(()=>{this._pendingResolve=void 0,this._resolveDef()}):this._resolveDef())}_setParent(e=this._parent){e&&(this._instance.parent=e._instance,this._instance.provides=e._instance.provides)}disconnectedCallback(){this._connected=!1,uc(()=>{this._connected||(this._ob&&(this._ob.disconnect(),this._ob=null),this._app&&this._app.unmount(),this._instance&&(this._instance.ce=void 0),this._app=this._instance=null)})}_resolveDef(){if(this._pendingResolve)return;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const s of i)this._setAttr(s.attributeName)}),this._ob.observe(this,{attributes:!0});const e=(i,s=!1)=>{this._resolved=!0,this._pendingResolve=void 0;const{props:r,styles:o}=i;let a;if(r&&!xe(r))for(const l in r){const c=r[l];(c===Number||c&&c.type===Number)&&(l in this._props&&(this._props[l]=Tl(this._props[l])),(a||(a=Object.create(null)))[yt(l)]=!0)}this._numberProps=a,s&&this._resolveProps(i),this.shadowRoot&&this._applyStyles(o),this._mount(i)},t=this._def.__asyncLoader;t?this._pendingResolve=t().then(i=>e(this._def=i,!0)):e(this._def)}_mount(e){this._app=this._createApp(e),e.configureApp&&e.configureApp(this._app),this._app._ceVNode=this._createVNode(),this._app.mount(this._root);const t=this._instance&&this._instance.exposed;if(t)for(const i in t)rt(this,i)||Object.defineProperty(this,i,{get:()=>cc(t[i])})}_resolveProps(e){const{props:t}=e,i=xe(t)?t:Object.keys(t||{});for(const s of Object.keys(this))s[0]!=="_"&&i.includes(s)&&this._setProp(s,this[s]);for(const s of i.map(yt))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(r){this._setProp(s,r,!0,!0)}})}_setAttr(e){if(e.startsWith("data-v-"))return;const t=this.hasAttribute(e);let i=t?this.getAttribute(e):Wd;const s=yt(e);t&&this._numberProps&&this._numberProps[s]&&(i=Tl(i)),this._setProp(s,i,!1,!0)}_getProp(e){return this._props[e]}_setProp(e,t,i=!0,s=!1){if(t!==this._props[e]&&(t===Wd?delete this._props[e]:(this._props[e]=t,e==="key"&&this._app&&(this._app._ceVNode.key=t)),s&&this._instance&&this._update(),i)){const r=this._ob;r&&r.disconnect(),t===!0?this.setAttribute(yn(e),""):typeof t=="string"||typeof t=="number"?this.setAttribute(yn(e),t+""):t||this.removeAttribute(yn(e)),r&&r.observe(this,{attributes:!0})}}_update(){z_(this._createVNode(),this._root)}_createVNode(){const e={};this.shadowRoot||(e.onVnodeMounted=e.onVnodeUpdated=this._renderSlots.bind(this));const t=Be(this._def,Ze(e,this._props));return this._instance||(t.ce=i=>{this._instance=i,i.ce=this,i.isCE=!0;const s=(r,o)=>{this.dispatchEvent(new CustomEvent(r,Ql(o[0])?Ze({detail:o},o[0]):{detail:o}))};i.emit=(r,...o)=>{s(r,o),yn(r)!==r&&s(yn(r),o)},this._setParent()}),t}_applyStyles(e,t){if(!e)return;if(t){if(t===this._def||this._styleChildren.has(t))return;this._styleChildren.add(t)}const i=this._nonce;for(let s=e.length-1;s>=0;s--){const r=document.createElement("style");i&&r.setAttribute("nonce",i),r.textContent=e[s],this.shadowRoot.prepend(r)}}_parseSlots(){const e=this._slots={};let t;for(;t=this.firstChild;){const i=t.nodeType===1&&t.getAttribute("slot")||"default";(e[i]||(e[i]=[])).push(t),this.removeChild(t)}}_renderSlots(){const e=(this._teleportTarget||this).querySelectorAll("slot"),t=this._instance.type.__scopeId;for(let i=0;i<e.length;i++){const s=e[i],r=s.getAttribute("name")||"default",o=this._slots[r],a=s.parentNode;if(o)for(const l of o){if(t&&l.nodeType===1){const c=t+"-s",u=document.createTreeWalker(l,1);l.setAttribute(c,"");let f;for(;f=u.nextNode();)f.setAttribute(c,"")}a.insertBefore(l,s)}else for(;s.firstChild;)a.insertBefore(s.firstChild,s);a.removeChild(s)}}_injectChildStyle(e){this._applyStyles(e.styles,e)}_removeChildStyle(e){}}function L_(n){const e=Wn(),t=e&&e.ce;return t||null}function tM(){const n=L_();return n&&n.shadowRoot}function nM(n="$style"){{const e=Wn();if(!e)return Ye;const t=e.type.__cssModules;if(!t)return Ye;const i=t[n];return i||Ye}}const N_=new WeakMap,D_=new WeakMap,Fl=Symbol("_moveCb"),Xd=Symbol("_enterCb"),iM=n=>(delete n.props.mode,n),sM=iM({name:"TransitionGroup",props:Ze({},b_,{tag:String,moveClass:String}),setup(n,{slots:e}){const t=Wn(),i=ih();let s,r;return pc(()=>{if(!s.length)return;const o=n.moveClass||`${n.name||"v"}-move`;if(!cM(s[0].el,t.vnode.el,o))return;s.forEach(oM),s.forEach(aM);const a=s.filter(lM);Wu(),a.forEach(l=>{const c=l.el,u=c.style;si(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[Fl]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",f),c[Fl]=null,es(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=et(n),a=A_(o);let l=o.tag||Gt;if(s=[],r)for(let c=0;c<r.length;c++){const u=r[c];u.el&&u.el instanceof Element&&(s.push(u),Bi(u,zr(u,a,i,t)),N_.set(u,u.el.getBoundingClientRect()))}r=e.default?hc(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&Bi(u,zr(u,a,i,t))}return Be(l,null,r)}}}),rM=sM;function oM(n){const e=n.el;e[Fl]&&e[Fl](),e[Xd]&&e[Xd]()}function aM(n){D_.set(n,n.el.getBoundingClientRect())}function lM(n){const e=N_.get(n),t=D_.get(n),i=e.left-t.left,s=e.top-t.top;if(i||s){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${i}px,${s}px)`,r.transitionDuration="0s",n}}function cM(n,e,t){const i=n.cloneNode(),s=n[Wr];s&&s.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),t.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(i);const{hasTransform:o}=w_(i);return r.removeChild(i),o}const xs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return xe(e)?t=>Nr(e,t):e};function uM(n){n.target.composing=!0}function qd(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const zn=Symbol("_assign"),Bl={created(n,{modifiers:{lazy:e,trim:t,number:i}},s){n[zn]=xs(s);const r=i||s.props&&s.props.type==="number";Li(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),r&&(a=El(a)),n[zn](a)}),t&&Li(n,"change",()=>{n.value=n.value.trim()}),e||(Li(n,"compositionstart",uM),Li(n,"compositionend",qd),Li(n,"change",qd))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:s,number:r}},o){if(n[zn]=xs(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?El(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||s&&n.value.trim()===l)||(n.value=l))}},mh={deep:!0,created(n,e,t){n[zn]=xs(t),Li(n,"change",()=>{const i=n._modelValue,s=Xr(n),r=n.checked,o=n[zn];if(xe(i)){const a=nc(i,s),l=a!==-1;if(r&&!l)o(i.concat(s));else if(!r&&l){const c=[...i];c.splice(a,1),o(c)}}else if(ir(i)){const a=new Set(i);r?a.add(s):a.delete(s),o(a)}else o(O_(n,r))})},mounted:Kd,beforeUpdate(n,e,t){n[zn]=xs(t),Kd(n,e,t)}};function Kd(n,{value:e,oldValue:t},i){n._modelValue=e;let s;if(xe(e))s=nc(e,i.props.value)>-1;else if(ir(e))s=e.has(i.props.value);else{if(e===t)return;s=_s(e,O_(n,!0))}n.checked!==s&&(n.checked=s)}const gh={created(n,{value:e},t){n.checked=_s(e,t.props.value),n[zn]=xs(t),Li(n,"change",()=>{n[zn](Xr(n))})},beforeUpdate(n,{value:e,oldValue:t},i){n[zn]=xs(i),e!==t&&(n.checked=_s(e,i.props.value))}},U_={deep:!0,created(n,{value:e,modifiers:{number:t}},i){const s=ir(e);Li(n,"change",()=>{const r=Array.prototype.filter.call(n.options,o=>o.selected).map(o=>t?El(Xr(o)):Xr(o));n[zn](n.multiple?s?new Set(r):r:r[0]),n._assigning=!0,uc(()=>{n._assigning=!1})}),n[zn]=xs(i)},mounted(n,{value:e}){$d(n,e)},beforeUpdate(n,e,t){n[zn]=xs(t)},updated(n,{value:e}){n._assigning||$d(n,e)}};function $d(n,e){const t=n.multiple,i=xe(e);if(!(t&&!i&&!ir(e))){for(let s=0,r=n.options.length;s<r;s++){const o=n.options[s],a=Xr(o);if(t)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=nc(e,a)>-1}else o.selected=e.has(a);else if(_s(Xr(o),e)){n.selectedIndex!==s&&(n.selectedIndex=s);return}}!t&&n.selectedIndex!==-1&&(n.selectedIndex=-1)}}function Xr(n){return"_value"in n?n._value:n.value}function O_(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const F_={created(n,e,t){Ia(n,e,t,null,"created")},mounted(n,e,t){Ia(n,e,t,null,"mounted")},beforeUpdate(n,e,t,i){Ia(n,e,t,i,"beforeUpdate")},updated(n,e,t,i){Ia(n,e,t,i,"updated")}};function B_(n,e){switch(n){case"SELECT":return U_;case"TEXTAREA":return Bl;default:switch(e){case"checkbox":return mh;case"radio":return gh;default:return Bl}}}function Ia(n,e,t,i,s){const o=B_(n.tagName,t.props&&t.props.type)[s];o&&o(n,e,t,i)}function fM(){Bl.getSSRProps=({value:n})=>({value:n}),gh.getSSRProps=({value:n},e)=>{if(e.props&&_s(e.props.value,n))return{checked:!0}},mh.getSSRProps=({value:n},e)=>{if(xe(n)){if(e.props&&nc(n,e.props.value)>-1)return{checked:!0}}else if(ir(n)){if(e.props&&n.has(e.props.value))return{checked:!0}}else if(n)return{checked:!0}},F_.getSSRProps=(n,e)=>{if(typeof e.type!="string")return;const t=B_(e.type.toUpperCase(),e.props&&e.props.type);if(t.getSSRProps)return t.getSSRProps(n,e)}}const hM=["ctrl","shift","alt","meta"],dM={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>hM.some(t=>n[`${t}Key`]&&!e.includes(t))},pM=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=dM[e[o]];if(a&&a(s,e))return}return n(s,...r)})},mM={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gM=(n,e)=>{const t=n._withKeys||(n._withKeys={}),i=e.join(".");return t[i]||(t[i]=s=>{if(!("key"in s))return;const r=yn(s.key);if(e.some(o=>o===r||mM[o]===r))return n(s)})},k_=Ze({patchProp:ZS},NS);let Ho,jd=!1;function H_(){return Ho||(Ho=Yg(k_))}function V_(){return Ho=jd?Ho:Zg(k_),jd=!0,Ho}const z_=(...n)=>{H_().render(...n)},_M=(...n)=>{V_().hydrate(...n)},kl=(...n)=>{const e=H_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=X_(i);if(!s)return;const r=e._component;!De(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,W_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},G_=(...n)=>{const e=V_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=X_(i);if(s)return t(s,!0,W_(s))},e};function W_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function X_(n){return ze(n)?document.querySelector(n):n}let Yd=!1;const vM=()=>{Yd||(Yd=!0,fM(),kS())},xM=Object.freeze(Object.defineProperty({__proto__:null,BaseTransition:bg,BaseTransitionPropsValidators:sh,Comment:Dt,DeprecationTypes:PS,EffectScope:Yf,ErrorCodes:Fx,ErrorTypeStrings:ES,Fragment:Gt,KeepAlive:uy,ReactiveEffect:Xo,Static:Ks,Suspense:sS,Teleport:qx,Text:ds,TrackOpTypes:Px,Transition:US,TransitionGroup:rM,TriggerOpTypes:Ix,VueElement:vc,assertNumber:Ox,callWithAsyncErrorHandling:Gn,callWithErrorHandling:co,camelize:yt,capitalize:sr,cloneVNode:ui,compatUtils:CS,computed:$s,createApp:kl,createBlock:Ll,createCommentVNode:dS,createElementBlock:ha,createElementVNode:ae,createHydrationRenderer:Zg,createPropsRestProxy:Iy,createRenderer:Yg,createSSRApp:G_,createSlots:_y,createStaticVNode:hS,createTextVNode:Fr,createVNode:Be,customRef:fg,defineAsyncComponent:ly,defineComponent:rh,defineCustomElement:I_,defineEmits:Sy,defineExpose:My,defineModel:by,defineOptions:Ey,defineProps:yy,defineSSRCustomElement:QS,defineSlots:Ty,devtools:TS,effect:Jv,effectScope:jv,getCurrentInstance:Wn,getCurrentScope:Xm,getCurrentWatcher:Lx,getTransitionRawChildren:hc,guardReactiveProps:h_,h:y_,handleError:rr,hasInjectionContext:Hy,hydrate:_M,hydrateOnIdle:ny,hydrateOnInteraction:oy,hydrateOnMediaQuery:ry,hydrateOnVisible:sy,initCustomFormatter:yS,initDirectivesForSSR:vM,inject:Bo,isMemoSame:S_,isProxy:lc,isReactive:fs,isReadonly:vs,isRef:kt,isRuntimeOnly:_S,isShallow:In,isVNode:Hi,markRaw:lg,mergeDefaults:Cy,mergeModels:Py,mergeProps:d_,nextTick:uc,normalizeClass:lo,normalizeProps:Fv,normalizeStyle:Ss,onActivated:wg,onBeforeMount:Pg,onBeforeUnmount:or,onBeforeUpdate:ah,onDeactivated:Rg,onErrorCaptured:Dg,onMounted:Wi,onRenderTracked:Ng,onRenderTriggered:Lg,onScopeDispose:Yv,onServerPrefetch:Ig,onUnmounted:mc,onUpdated:pc,onWatcherCleanup:dg,openBlock:ki,popScopeId:zx,provide:Hg,proxyRefs:th,pushScopeId:Vx,queuePostFlushCb:$o,reactive:oc,readonly:eh,ref:ti,registerRuntimeCompiler:__,render:z_,renderList:gy,renderSlot:Og,resolveComponent:dy,resolveDirective:my,resolveDynamicComponent:py,resolveFilter:RS,resolveTransitionHooks:zr,setBlockTracking:Fu,setDevtoolsHook:bS,setTransitionHooks:Bi,shallowReactive:ag,shallowReadonly:vx,shallowRef:cg,ssrContextKey:t_,ssrUtils:wS,stop:Qv,toDisplayString:Gm,toHandlerKey:Lr,toHandlers:vy,toRaw:et,toRef:wx,toRefs:Tx,toValue:Sx,transformVNodeArgs:uS,triggerRef:yx,unref:cc,useAttrs:Ry,useCssModule:nM,useCssVars:HS,useHost:L_,useId:$x,useModel:Zy,useSSRContext:n_,useShadowRoot:tM,useSlots:wy,useTemplateRef:jx,useTransitionState:ih,vModelCheckbox:mh,vModelDynamic:F_,vModelRadio:gh,vModelSelect:U_,vModelText:Bl,vShow:C_,version:M_,warn:MS,watch:Ur,watchEffect:$y,watchPostEffect:jy,watchSyncEffect:i_,withAsyncContext:Ly,withCtx:Tt,withDefaults:Ay,withDirectives:Wx,withKeys:gM,withMemo:SS,withModifiers:pM,withScopeId:Gx},Symbol.toStringTag,{value:"Module"}));/**
* @vue/compiler-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ea=Symbol(""),Vo=Symbol(""),_h=Symbol(""),Hl=Symbol(""),q_=Symbol(""),Qs=Symbol(""),K_=Symbol(""),$_=Symbol(""),vh=Symbol(""),xh=Symbol(""),pa=Symbol(""),yh=Symbol(""),j_=Symbol(""),Sh=Symbol(""),Mh=Symbol(""),Eh=Symbol(""),Th=Symbol(""),bh=Symbol(""),Ah=Symbol(""),Y_=Symbol(""),Z_=Symbol(""),xc=Symbol(""),Vl=Symbol(""),wh=Symbol(""),Rh=Symbol(""),ta=Symbol(""),ma=Symbol(""),Ch=Symbol(""),qu=Symbol(""),yM=Symbol(""),Ku=Symbol(""),zl=Symbol(""),SM=Symbol(""),MM=Symbol(""),Ph=Symbol(""),EM=Symbol(""),TM=Symbol(""),Ih=Symbol(""),J_=Symbol(""),qr={[ea]:"Fragment",[Vo]:"Teleport",[_h]:"Suspense",[Hl]:"KeepAlive",[q_]:"BaseTransition",[Qs]:"openBlock",[K_]:"createBlock",[$_]:"createElementBlock",[vh]:"createVNode",[xh]:"createElementVNode",[pa]:"createCommentVNode",[yh]:"createTextVNode",[j_]:"createStaticVNode",[Sh]:"resolveComponent",[Mh]:"resolveDynamicComponent",[Eh]:"resolveDirective",[Th]:"resolveFilter",[bh]:"withDirectives",[Ah]:"renderList",[Y_]:"renderSlot",[Z_]:"createSlots",[xc]:"toDisplayString",[Vl]:"mergeProps",[wh]:"normalizeClass",[Rh]:"normalizeStyle",[ta]:"normalizeProps",[ma]:"guardReactiveProps",[Ch]:"toHandlers",[qu]:"camelize",[yM]:"capitalize",[Ku]:"toHandlerKey",[zl]:"setBlockTracking",[SM]:"pushScopeId",[MM]:"popScopeId",[Ph]:"withCtx",[EM]:"unref",[TM]:"isRef",[Ih]:"withMemo",[J_]:"isMemoSame"};function bM(n){Object.getOwnPropertySymbols(n).forEach(e=>{qr[e]=n[e]})}const Nn={start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0},source:""};function AM(n,e=""){return{type:0,source:e,children:n,helpers:new Set,components:[],directives:[],hoists:[],imports:[],cached:[],temps:0,codegenNode:void 0,loc:Nn}}function na(n,e,t,i,s,r,o,a=!1,l=!1,c=!1,u=Nn){return n&&(a?(n.helper(Qs),n.helper(jr(n.inSSR,c))):n.helper($r(n.inSSR,c)),o&&n.helper(bh)),{type:13,tag:e,props:t,children:i,patchFlag:s,dynamicProps:r,directives:o,isBlock:a,disableTracking:l,isComponent:c,loc:u}}function js(n,e=Nn){return{type:17,loc:e,elements:n}}function Hn(n,e=Nn){return{type:15,loc:e,properties:n}}function Pt(n,e){return{type:16,loc:Nn,key:ze(n)?Ge(n,!0):n,value:e}}function Ge(n,e=!1,t=Nn,i=0){return{type:4,loc:t,content:n,isStatic:e,constType:e?3:i}}function ni(n,e=Nn){return{type:8,loc:e,children:n}}function Ot(n,e=[],t=Nn){return{type:14,loc:t,callee:n,arguments:e}}function Kr(n,e=void 0,t=!1,i=!1,s=Nn){return{type:18,params:n,returns:e,newline:t,isSlot:i,loc:s}}function $u(n,e,t,i=!0){return{type:19,test:n,consequent:e,alternate:t,newline:i,loc:Nn}}function wM(n,e,t=!1,i=!1){return{type:20,index:n,value:e,needPauseTracking:t,inVOnce:i,needArraySpread:!1,loc:Nn}}function RM(n){return{type:21,body:n,loc:Nn}}function $r(n,e){return n||e?vh:xh}function jr(n,e){return n||e?K_:$_}function Lh(n,{helper:e,removeHelper:t,inSSR:i}){n.isBlock||(n.isBlock=!0,t($r(i,n.isComponent)),e(Qs),e(jr(i,n.isComponent)))}const Zd=new Uint8Array([123,123]),Jd=new Uint8Array([125,125]);function Qd(n){return n>=97&&n<=122||n>=65&&n<=90}function wn(n){return n===32||n===10||n===9||n===12||n===13}function qi(n){return n===47||n===62||wn(n)}function Gl(n){const e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}const Yt={Cdata:new Uint8Array([67,68,65,84,65,91]),CdataEnd:new Uint8Array([93,93,62]),CommentEnd:new Uint8Array([45,45,62]),ScriptEnd:new Uint8Array([60,47,115,99,114,105,112,116]),StyleEnd:new Uint8Array([60,47,115,116,121,108,101]),TitleEnd:new Uint8Array([60,47,116,105,116,108,101]),TextareaEnd:new Uint8Array([60,47,116,101,120,116,97,114,101,97])};class CM{constructor(e,t){this.stack=e,this.cbs=t,this.state=1,this.buffer="",this.sectionStart=0,this.index=0,this.entityStart=0,this.baseState=1,this.inRCDATA=!1,this.inXML=!1,this.inVPre=!1,this.newlines=[],this.mode=0,this.delimiterOpen=Zd,this.delimiterClose=Jd,this.delimiterIndex=-1,this.currentSequence=void 0,this.sequenceIndex=0}get inSFCRoot(){return this.mode===2&&this.stack.length===0}reset(){this.state=1,this.mode=0,this.buffer="",this.sectionStart=0,this.index=0,this.baseState=1,this.inRCDATA=!1,this.currentSequence=void 0,this.newlines.length=0,this.delimiterOpen=Zd,this.delimiterClose=Jd}getPos(e){let t=1,i=e+1;for(let s=this.newlines.length-1;s>=0;s--){const r=this.newlines[s];if(e>r){t=s+2,i=e-r;break}}return{column:i,line:t,offset:e}}peek(){return this.buffer.charCodeAt(this.index+1)}stateText(e){e===60?(this.index>this.sectionStart&&this.cbs.ontext(this.sectionStart,this.index),this.state=5,this.sectionStart=this.index):!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e))}stateInterpolationOpen(e){if(e===this.delimiterOpen[this.delimiterIndex])if(this.delimiterIndex===this.delimiterOpen.length-1){const t=this.index+1-this.delimiterOpen.length;t>this.sectionStart&&this.cbs.ontext(this.sectionStart,t),this.state=3,this.sectionStart=t}else this.delimiterIndex++;else this.inRCDATA?(this.state=32,this.stateInRCDATA(e)):(this.state=1,this.stateText(e))}stateInterpolation(e){e===this.delimiterClose[0]&&(this.state=4,this.delimiterIndex=0,this.stateInterpolationClose(e))}stateInterpolationClose(e){e===this.delimiterClose[this.delimiterIndex]?this.delimiterIndex===this.delimiterClose.length-1?(this.cbs.oninterpolation(this.sectionStart,this.index+1),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):this.delimiterIndex++:(this.state=3,this.stateInterpolation(e))}stateSpecialStartSequence(e){const t=this.sequenceIndex===this.currentSequence.length;if(!(t?qi(e):(e|32)===this.currentSequence[this.sequenceIndex]))this.inRCDATA=!1;else if(!t){this.sequenceIndex++;return}this.sequenceIndex=0,this.state=6,this.stateInTagName(e)}stateInRCDATA(e){if(this.sequenceIndex===this.currentSequence.length){if(e===62||wn(e)){const t=this.index-this.currentSequence.length;if(this.sectionStart<t){const i=this.index;this.index=t,this.cbs.ontext(this.sectionStart,t),this.index=i}this.sectionStart=t+2,this.stateInClosingTagName(e),this.inRCDATA=!1;return}this.sequenceIndex=0}(e|32)===this.currentSequence[this.sequenceIndex]?this.sequenceIndex+=1:this.sequenceIndex===0?this.currentSequence===Yt.TitleEnd||this.currentSequence===Yt.TextareaEnd&&!this.inSFCRoot?!this.inVPre&&e===this.delimiterOpen[0]&&(this.state=2,this.delimiterIndex=0,this.stateInterpolationOpen(e)):this.fastForwardTo(60)&&(this.sequenceIndex=1):this.sequenceIndex=+(e===60)}stateCDATASequence(e){e===Yt.Cdata[this.sequenceIndex]?++this.sequenceIndex===Yt.Cdata.length&&(this.state=28,this.currentSequence=Yt.CdataEnd,this.sequenceIndex=0,this.sectionStart=this.index+1):(this.sequenceIndex=0,this.state=23,this.stateInDeclaration(e))}fastForwardTo(e){for(;++this.index<this.buffer.length;){const t=this.buffer.charCodeAt(this.index);if(t===10&&this.newlines.push(this.index),t===e)return!0}return this.index=this.buffer.length-1,!1}stateInCommentLike(e){e===this.currentSequence[this.sequenceIndex]?++this.sequenceIndex===this.currentSequence.length&&(this.currentSequence===Yt.CdataEnd?this.cbs.oncdata(this.sectionStart,this.index-2):this.cbs.oncomment(this.sectionStart,this.index-2),this.sequenceIndex=0,this.sectionStart=this.index+1,this.state=1):this.sequenceIndex===0?this.fastForwardTo(this.currentSequence[0])&&(this.sequenceIndex=1):e!==this.currentSequence[this.sequenceIndex-1]&&(this.sequenceIndex=0)}startSpecial(e,t){this.enterRCDATA(e,t),this.state=31}enterRCDATA(e,t){this.inRCDATA=!0,this.currentSequence=e,this.sequenceIndex=t}stateBeforeTagName(e){e===33?(this.state=22,this.sectionStart=this.index+1):e===63?(this.state=24,this.sectionStart=this.index+1):Qd(e)?(this.sectionStart=this.index,this.mode===0?this.state=6:this.inSFCRoot?this.state=34:this.inXML?this.state=6:e===116?this.state=30:this.state=e===115?29:6):e===47?this.state=8:(this.state=1,this.stateText(e))}stateInTagName(e){qi(e)&&this.handleTagName(e)}stateInSFCRootTagName(e){if(qi(e)){const t=this.buffer.slice(this.sectionStart,this.index);t!=="template"&&this.enterRCDATA(Gl("</"+t),0),this.handleTagName(e)}}handleTagName(e){this.cbs.onopentagname(this.sectionStart,this.index),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)}stateBeforeClosingTagName(e){wn(e)||(e===62?(this.state=1,this.sectionStart=this.index+1):(this.state=Qd(e)?9:27,this.sectionStart=this.index))}stateInClosingTagName(e){(e===62||wn(e))&&(this.cbs.onclosetag(this.sectionStart,this.index),this.sectionStart=-1,this.state=10,this.stateAfterClosingTagName(e))}stateAfterClosingTagName(e){e===62&&(this.state=1,this.sectionStart=this.index+1)}stateBeforeAttrName(e){e===62?(this.cbs.onopentagend(this.index),this.inRCDATA?this.state=32:this.state=1,this.sectionStart=this.index+1):e===47?this.state=7:e===60&&this.peek()===47?(this.cbs.onopentagend(this.index),this.state=5,this.sectionStart=this.index):wn(e)||this.handleAttrStart(e)}handleAttrStart(e){e===118&&this.peek()===45?(this.state=13,this.sectionStart=this.index):e===46||e===58||e===64||e===35?(this.cbs.ondirname(this.index,this.index+1),this.state=14,this.sectionStart=this.index+1):(this.state=12,this.sectionStart=this.index)}stateInSelfClosingTag(e){e===62?(this.cbs.onselfclosingtag(this.index),this.state=1,this.sectionStart=this.index+1,this.inRCDATA=!1):wn(e)||(this.state=11,this.stateBeforeAttrName(e))}stateInAttrName(e){(e===61||qi(e))&&(this.cbs.onattribname(this.sectionStart,this.index),this.handleAttrNameEnd(e))}stateInDirName(e){e===61||qi(e)?(this.cbs.ondirname(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===58?(this.cbs.ondirname(this.sectionStart,this.index),this.state=14,this.sectionStart=this.index+1):e===46&&(this.cbs.ondirname(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDirArg(e){e===61||qi(e)?(this.cbs.ondirarg(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===91?this.state=15:e===46&&(this.cbs.ondirarg(this.sectionStart,this.index),this.state=16,this.sectionStart=this.index+1)}stateInDynamicDirArg(e){e===93?this.state=14:(e===61||qi(e))&&(this.cbs.ondirarg(this.sectionStart,this.index+1),this.handleAttrNameEnd(e))}stateInDirModifier(e){e===61||qi(e)?(this.cbs.ondirmodifier(this.sectionStart,this.index),this.handleAttrNameEnd(e)):e===46&&(this.cbs.ondirmodifier(this.sectionStart,this.index),this.sectionStart=this.index+1)}handleAttrNameEnd(e){this.sectionStart=this.index,this.state=17,this.cbs.onattribnameend(this.index),this.stateAfterAttrName(e)}stateAfterAttrName(e){e===61?this.state=18:e===47||e===62?(this.cbs.onattribend(0,this.sectionStart),this.sectionStart=-1,this.state=11,this.stateBeforeAttrName(e)):wn(e)||(this.cbs.onattribend(0,this.sectionStart),this.handleAttrStart(e))}stateBeforeAttrValue(e){e===34?(this.state=19,this.sectionStart=this.index+1):e===39?(this.state=20,this.sectionStart=this.index+1):wn(e)||(this.sectionStart=this.index,this.state=21,this.stateInAttrValueNoQuotes(e))}handleInAttrValue(e,t){(e===t||this.fastForwardTo(t))&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(t===34?3:2,this.index+1),this.state=11)}stateInAttrValueDoubleQuotes(e){this.handleInAttrValue(e,34)}stateInAttrValueSingleQuotes(e){this.handleInAttrValue(e,39)}stateInAttrValueNoQuotes(e){wn(e)||e===62?(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=-1,this.cbs.onattribend(1,this.index),this.state=11,this.stateBeforeAttrName(e)):(e===39||e===60||e===61||e===96)&&this.cbs.onerr(18,this.index)}stateBeforeDeclaration(e){e===91?(this.state=26,this.sequenceIndex=0):this.state=e===45?25:23}stateInDeclaration(e){(e===62||this.fastForwardTo(62))&&(this.state=1,this.sectionStart=this.index+1)}stateInProcessingInstruction(e){(e===62||this.fastForwardTo(62))&&(this.cbs.onprocessinginstruction(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeComment(e){e===45?(this.state=28,this.currentSequence=Yt.CommentEnd,this.sequenceIndex=2,this.sectionStart=this.index+1):this.state=23}stateInSpecialComment(e){(e===62||this.fastForwardTo(62))&&(this.cbs.oncomment(this.sectionStart,this.index),this.state=1,this.sectionStart=this.index+1)}stateBeforeSpecialS(e){e===Yt.ScriptEnd[3]?this.startSpecial(Yt.ScriptEnd,4):e===Yt.StyleEnd[3]?this.startSpecial(Yt.StyleEnd,4):(this.state=6,this.stateInTagName(e))}stateBeforeSpecialT(e){e===Yt.TitleEnd[3]?this.startSpecial(Yt.TitleEnd,4):e===Yt.TextareaEnd[3]?this.startSpecial(Yt.TextareaEnd,4):(this.state=6,this.stateInTagName(e))}startEntity(){}stateInEntity(){}parse(e){for(this.buffer=e;this.index<this.buffer.length;){const t=this.buffer.charCodeAt(this.index);switch(t===10&&this.newlines.push(this.index),this.state){case 1:{this.stateText(t);break}case 2:{this.stateInterpolationOpen(t);break}case 3:{this.stateInterpolation(t);break}case 4:{this.stateInterpolationClose(t);break}case 31:{this.stateSpecialStartSequence(t);break}case 32:{this.stateInRCDATA(t);break}case 26:{this.stateCDATASequence(t);break}case 19:{this.stateInAttrValueDoubleQuotes(t);break}case 12:{this.stateInAttrName(t);break}case 13:{this.stateInDirName(t);break}case 14:{this.stateInDirArg(t);break}case 15:{this.stateInDynamicDirArg(t);break}case 16:{this.stateInDirModifier(t);break}case 28:{this.stateInCommentLike(t);break}case 27:{this.stateInSpecialComment(t);break}case 11:{this.stateBeforeAttrName(t);break}case 6:{this.stateInTagName(t);break}case 34:{this.stateInSFCRootTagName(t);break}case 9:{this.stateInClosingTagName(t);break}case 5:{this.stateBeforeTagName(t);break}case 17:{this.stateAfterAttrName(t);break}case 20:{this.stateInAttrValueSingleQuotes(t);break}case 18:{this.stateBeforeAttrValue(t);break}case 8:{this.stateBeforeClosingTagName(t);break}case 10:{this.stateAfterClosingTagName(t);break}case 29:{this.stateBeforeSpecialS(t);break}case 30:{this.stateBeforeSpecialT(t);break}case 21:{this.stateInAttrValueNoQuotes(t);break}case 7:{this.stateInSelfClosingTag(t);break}case 23:{this.stateInDeclaration(t);break}case 22:{this.stateBeforeDeclaration(t);break}case 25:{this.stateBeforeComment(t);break}case 24:{this.stateInProcessingInstruction(t);break}case 33:{this.stateInEntity();break}}this.index++}this.cleanup(),this.finish()}cleanup(){this.sectionStart!==this.index&&(this.state===1||this.state===32&&this.sequenceIndex===0?(this.cbs.ontext(this.sectionStart,this.index),this.sectionStart=this.index):(this.state===19||this.state===20||this.state===21)&&(this.cbs.onattribdata(this.sectionStart,this.index),this.sectionStart=this.index))}finish(){this.handleTrailingData(),this.cbs.onend()}handleTrailingData(){const e=this.buffer.length;this.sectionStart>=e||(this.state===28?this.currentSequence===Yt.CdataEnd?this.cbs.oncdata(this.sectionStart,e):this.cbs.oncomment(this.sectionStart,e):this.state===6||this.state===11||this.state===18||this.state===17||this.state===12||this.state===13||this.state===14||this.state===15||this.state===16||this.state===20||this.state===19||this.state===21||this.state===9||this.cbs.ontext(this.sectionStart,e))}emitCodePoint(e,t){}}function ep(n,{compatConfig:e}){const t=e&&e[n];return n==="MODE"?t||3:t}function Ys(n,e){const t=ep("MODE",e),i=ep(n,e);return t===3?i===!0:i!==!1}function ia(n,e,t,...i){return Ys(n,e)}function Nh(n){throw n}function Q_(n){}function Et(n,e,t,i){const s=`https://vuejs.org/error-reference/#compiler-${n}`,r=new SyntaxError(String(s));return r.code=n,r.loc=e,r}const Sn=n=>n.type===4&&n.isStatic;function e0(n){switch(n){case"Teleport":case"teleport":return Vo;case"Suspense":case"suspense":return _h;case"KeepAlive":case"keep-alive":return Hl;case"BaseTransition":case"base-transition":return q_}}const PM=/^\d|[^\$\w\xA0-\uFFFF]/,Dh=n=>!PM.test(n),IM=/[A-Za-z_$\xA0-\uFFFF]/,LM=/[\.\?\w$\xA0-\uFFFF]/,NM=/\s+[.[]\s*|\s*[.[]\s+/g,t0=n=>n.type===4?n.content:n.loc.source,DM=n=>{const e=t0(n).trim().replace(NM,a=>a.trim());let t=0,i=[],s=0,r=0,o=null;for(let a=0;a<e.length;a++){const l=e.charAt(a);switch(t){case 0:if(l==="[")i.push(t),t=1,s++;else if(l==="(")i.push(t),t=2,r++;else if(!(a===0?IM:LM).test(l))return!1;break;case 1:l==="'"||l==='"'||l==="`"?(i.push(t),t=3,o=l):l==="["?s++:l==="]"&&(--s||(t=i.pop()));break;case 2:if(l==="'"||l==='"'||l==="`")i.push(t),t=3,o=l;else if(l==="(")r++;else if(l===")"){if(a===e.length-1)return!1;--r||(t=i.pop())}break;case 3:l===o&&(t=i.pop(),o=null);break}}return!s&&!r},n0=DM,UM=/^\s*(async\s*)?(\([^)]*?\)|[\w$_]+)\s*(:[^=]+)?=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,OM=n=>UM.test(t0(n)),FM=OM;function kn(n,e,t=!1){for(let i=0;i<n.props.length;i++){const s=n.props[i];if(s.type===7&&(t||s.exp)&&(ze(e)?s.name===e:e.test(s.name)))return s}}function yc(n,e,t=!1,i=!1){for(let s=0;s<n.props.length;s++){const r=n.props[s];if(r.type===6){if(t)continue;if(r.name===e&&(r.value||i))return r}else if(r.name==="bind"&&(r.exp||i)&&zs(r.arg,e))return r}}function zs(n,e){return!!(n&&Sn(n)&&n.content===e)}function BM(n){return n.props.some(e=>e.type===7&&e.name==="bind"&&(!e.arg||e.arg.type!==4||!e.arg.isStatic))}function zc(n){return n.type===5||n.type===2}function kM(n){return n.type===7&&n.name==="slot"}function Wl(n){return n.type===1&&n.tagType===3}function Xl(n){return n.type===1&&n.tagType===2}const HM=new Set([ta,ma]);function i0(n,e=[]){if(n&&!ze(n)&&n.type===14){const t=n.callee;if(!ze(t)&&HM.has(t))return i0(n.arguments[0],e.concat(n))}return[n,e]}function ql(n,e,t){let i,s=n.type===13?n.props:n.arguments[2],r=[],o;if(s&&!ze(s)&&s.type===14){const a=i0(s);s=a[0],r=a[1],o=r[r.length-1]}if(s==null||ze(s))i=Hn([e]);else if(s.type===14){const a=s.arguments[0];!ze(a)&&a.type===15?tp(e,a)||a.properties.unshift(e):s.callee===Ch?i=Ot(t.helper(Vl),[Hn([e]),s]):s.arguments.unshift(Hn([e])),!i&&(i=s)}else s.type===15?(tp(e,s)||s.properties.unshift(e),i=s):(i=Ot(t.helper(Vl),[Hn([e]),s]),o&&o.callee===ma&&(o=r[r.length-2]));n.type===13?o?o.arguments[0]=i:n.props=i:o?o.arguments[0]=i:n.arguments[2]=i}function tp(n,e){let t=!1;if(n.key.type===4){const i=n.key.content;t=e.properties.some(s=>s.key.type===4&&s.key.content===i)}return t}function sa(n,e){return`_${e}_${n.replace(/[^\w]/g,(t,i)=>t==="-"?"_":n.charCodeAt(i).toString())}`}function VM(n){return n.type===14&&n.callee===Ih?n.arguments[1].returns:n}const zM=/([\s\S]*?)\s+(?:in|of)\s+(\S[\s\S]*)/,s0={parseMode:"base",ns:0,delimiters:["{{","}}"],getNamespace:()=>0,isVoidTag:Co,isPreTag:Co,isIgnoreNewlineTag:Co,isCustomElement:Co,onError:Nh,onWarn:Q_,comments:!1,prefixIdentifiers:!1};let ot=s0,ra=null,Ui="",Qt=null,Qe=null,_n="",Ai=-1,Os=-1,Uh=0,rs=!1,ju=null;const Mt=[],Rt=new CM(Mt,{onerr:xi,ontext(n,e){La(qt(n,e),n,e)},ontextentity(n,e,t){La(n,e,t)},oninterpolation(n,e){if(rs)return La(qt(n,e),n,e);let t=n+Rt.delimiterOpen.length,i=e-Rt.delimiterClose.length;for(;wn(Ui.charCodeAt(t));)t++;for(;wn(Ui.charCodeAt(i-1));)i--;let s=qt(t,i);s.includes("&")&&(s=ot.decodeEntities(s,!1)),Yu({type:5,content:dl(s,!1,Ct(t,i)),loc:Ct(n,e)})},onopentagname(n,e){const t=qt(n,e);Qt={type:1,tag:t,ns:ot.getNamespace(t,Mt[0],ot.ns),tagType:0,props:[],children:[],loc:Ct(n-1,e),codegenNode:void 0}},onopentagend(n){ip(n)},onclosetag(n,e){const t=qt(n,e);if(!ot.isVoidTag(t)){let i=!1;for(let s=0;s<Mt.length;s++)if(Mt[s].tag.toLowerCase()===t.toLowerCase()){i=!0,s>0&&xi(24,Mt[0].loc.start.offset);for(let o=0;o<=s;o++){const a=Mt.shift();hl(a,e,o<s)}break}i||xi(23,r0(n,60))}},onselfclosingtag(n){const e=Qt.tag;Qt.isSelfClosing=!0,ip(n),Mt[0]&&Mt[0].tag===e&&hl(Mt.shift(),n)},onattribname(n,e){Qe={type:6,name:qt(n,e),nameLoc:Ct(n,e),value:void 0,loc:Ct(n)}},ondirname(n,e){const t=qt(n,e),i=t==="."||t===":"?"bind":t==="@"?"on":t==="#"?"slot":t.slice(2);if(!rs&&i===""&&xi(26,n),rs||i==="")Qe={type:6,name:t,nameLoc:Ct(n,e),value:void 0,loc:Ct(n)};else if(Qe={type:7,name:i,rawName:t,exp:void 0,arg:void 0,modifiers:t==="."?[Ge("prop")]:[],loc:Ct(n)},i==="pre"){rs=Rt.inVPre=!0,ju=Qt;const s=Qt.props;for(let r=0;r<s.length;r++)s[r].type===7&&(s[r]=QM(s[r]))}},ondirarg(n,e){if(n===e)return;const t=qt(n,e);if(rs)Qe.name+=t,Gs(Qe.nameLoc,e);else{const i=t[0]!=="[";Qe.arg=dl(i?t:t.slice(1,-1),i,Ct(n,e),i?3:0)}},ondirmodifier(n,e){const t=qt(n,e);if(rs)Qe.name+="."+t,Gs(Qe.nameLoc,e);else if(Qe.name==="slot"){const i=Qe.arg;i&&(i.content+="."+t,Gs(i.loc,e))}else{const i=Ge(t,!0,Ct(n,e));Qe.modifiers.push(i)}},onattribdata(n,e){_n+=qt(n,e),Ai<0&&(Ai=n),Os=e},onattribentity(n,e,t){_n+=n,Ai<0&&(Ai=e),Os=t},onattribnameend(n){const e=Qe.loc.start.offset,t=qt(e,n);Qe.type===7&&(Qe.rawName=t),Qt.props.some(i=>(i.type===7?i.rawName:i.name)===t)&&xi(2,e)},onattribend(n,e){if(Qt&&Qe){if(Gs(Qe.loc,e),n!==0)if(_n.includes("&")&&(_n=ot.decodeEntities(_n,!0)),Qe.type===6)Qe.name==="class"&&(_n=a0(_n).trim()),n===1&&!_n&&xi(13,e),Qe.value={type:2,content:_n,loc:n===1?Ct(Ai,Os):Ct(Ai-1,Os+1)},Rt.inSFCRoot&&Qt.tag==="template"&&Qe.name==="lang"&&_n&&_n!=="html"&&Rt.enterRCDATA(Gl("</template"),0);else{let t=0;Qe.exp=dl(_n,!1,Ct(Ai,Os),0,t),Qe.name==="for"&&(Qe.forParseResult=WM(Qe.exp));let i=-1;Qe.name==="bind"&&(i=Qe.modifiers.findIndex(s=>s.content==="sync"))>-1&&ia("COMPILER_V_BIND_SYNC",ot,Qe.loc,Qe.rawName)&&(Qe.name="model",Qe.modifiers.splice(i,1))}(Qe.type!==7||Qe.name!=="pre")&&Qt.props.push(Qe)}_n="",Ai=Os=-1},oncomment(n,e){ot.comments&&Yu({type:3,content:qt(n,e),loc:Ct(n-4,e+3)})},onend(){const n=Ui.length;for(let e=0;e<Mt.length;e++)hl(Mt[e],n-1),xi(24,Mt[e].loc.start.offset)},oncdata(n,e){Mt[0].ns!==0?La(qt(n,e),n,e):xi(1,n-9)},onprocessinginstruction(n){(Mt[0]?Mt[0].ns:ot.ns)===0&&xi(21,n-1)}}),np=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,GM=/^\(|\)$/g;function WM(n){const e=n.loc,t=n.content,i=t.match(zM);if(!i)return;const[,s,r]=i,o=(f,h,d=!1)=>{const m=e.start.offset+h,_=m+f.length;return dl(f,!1,Ct(m,_),0,d?1:0)},a={source:o(r.trim(),t.indexOf(r,s.length)),value:void 0,key:void 0,index:void 0,finalized:!1};let l=s.trim().replace(GM,"").trim();const c=s.indexOf(l),u=l.match(np);if(u){l=l.replace(np,"").trim();const f=u[1].trim();let h;if(f&&(h=t.indexOf(f,c+l.length),a.key=o(f,h,!0)),u[2]){const d=u[2].trim();d&&(a.index=o(d,t.indexOf(d,a.key?h+f.length:c+l.length),!0))}}return l&&(a.value=o(l,c,!0)),a}function qt(n,e){return Ui.slice(n,e)}function ip(n){Rt.inSFCRoot&&(Qt.innerLoc=Ct(n+1,n+1)),Yu(Qt);const{tag:e,ns:t}=Qt;t===0&&ot.isPreTag(e)&&Uh++,ot.isVoidTag(e)?hl(Qt,n):(Mt.unshift(Qt),(t===1||t===2)&&(Rt.inXML=!0)),Qt=null}function La(n,e,t){{const r=Mt[0]&&Mt[0].tag;r!=="script"&&r!=="style"&&n.includes("&")&&(n=ot.decodeEntities(n,!1))}const i=Mt[0]||ra,s=i.children[i.children.length-1];s&&s.type===2?(s.content+=n,Gs(s.loc,t)):i.children.push({type:2,content:n,loc:Ct(e,t)})}function hl(n,e,t=!1){t?Gs(n.loc,r0(e,60)):Gs(n.loc,XM(e,62)+1),Rt.inSFCRoot&&(n.children.length?n.innerLoc.end=Ze({},n.children[n.children.length-1].loc.end):n.innerLoc.end=Ze({},n.innerLoc.start),n.innerLoc.source=qt(n.innerLoc.start.offset,n.innerLoc.end.offset));const{tag:i,ns:s,children:r}=n;if(rs||(i==="slot"?n.tagType=2:sp(n)?n.tagType=3:KM(n)&&(n.tagType=1)),Rt.inRCDATA||(n.children=o0(r)),s===0&&ot.isIgnoreNewlineTag(i)){const o=r[0];o&&o.type===2&&(o.content=o.content.replace(/^\r?\n/,""))}s===0&&ot.isPreTag(i)&&Uh--,ju===n&&(rs=Rt.inVPre=!1,ju=null),Rt.inXML&&(Mt[0]?Mt[0].ns:ot.ns)===0&&(Rt.inXML=!1);{const o=n.props;if(!Rt.inSFCRoot&&Ys("COMPILER_NATIVE_TEMPLATE",ot)&&n.tag==="template"&&!sp(n)){const l=Mt[0]||ra,c=l.children.indexOf(n);l.children.splice(c,1,...n.children)}const a=o.find(l=>l.type===6&&l.name==="inline-template");a&&ia("COMPILER_INLINE_TEMPLATE",ot,a.loc)&&n.children.length&&(a.value={type:2,content:qt(n.children[0].loc.start.offset,n.children[n.children.length-1].loc.end.offset),loc:a.loc})}}function XM(n,e){let t=n;for(;Ui.charCodeAt(t)!==e&&t<Ui.length-1;)t++;return t}function r0(n,e){let t=n;for(;Ui.charCodeAt(t)!==e&&t>=0;)t--;return t}const qM=new Set(["if","else","else-if","for","slot"]);function sp({tag:n,props:e}){if(n==="template"){for(let t=0;t<e.length;t++)if(e[t].type===7&&qM.has(e[t].name))return!0}return!1}function KM({tag:n,props:e}){if(ot.isCustomElement(n))return!1;if(n==="component"||$M(n.charCodeAt(0))||e0(n)||ot.isBuiltInComponent&&ot.isBuiltInComponent(n)||ot.isNativeTag&&!ot.isNativeTag(n))return!0;for(let t=0;t<e.length;t++){const i=e[t];if(i.type===6){if(i.name==="is"&&i.value){if(i.value.content.startsWith("vue:"))return!0;if(ia("COMPILER_IS_ON_ELEMENT",ot,i.loc))return!0}}else if(i.name==="bind"&&zs(i.arg,"is")&&ia("COMPILER_IS_ON_ELEMENT",ot,i.loc))return!0}return!1}function $M(n){return n>64&&n<91}const jM=/\r\n/g;function o0(n,e){const t=ot.whitespace!=="preserve";let i=!1;for(let s=0;s<n.length;s++){const r=n[s];if(r.type===2)if(Uh)r.content=r.content.replace(jM,`
`);else if(YM(r.content)){const o=n[s-1]&&n[s-1].type,a=n[s+1]&&n[s+1].type;!o||!a||t&&(o===3&&(a===3||a===1)||o===1&&(a===3||a===1&&ZM(r.content)))?(i=!0,n[s]=null):r.content=" "}else t&&(r.content=a0(r.content))}return i?n.filter(Boolean):n}function YM(n){for(let e=0;e<n.length;e++)if(!wn(n.charCodeAt(e)))return!1;return!0}function ZM(n){for(let e=0;e<n.length;e++){const t=n.charCodeAt(e);if(t===10||t===13)return!0}return!1}function a0(n){let e="",t=!1;for(let i=0;i<n.length;i++)wn(n.charCodeAt(i))?t||(e+=" ",t=!0):(e+=n[i],t=!1);return e}function Yu(n){(Mt[0]||ra).children.push(n)}function Ct(n,e){return{start:Rt.getPos(n),end:e==null?e:Rt.getPos(e),source:e==null?e:qt(n,e)}}function JM(n){return Ct(n.start.offset,n.end.offset)}function Gs(n,e){n.end=Rt.getPos(e),n.source=qt(n.start.offset,e)}function QM(n){const e={type:6,name:n.rawName,nameLoc:Ct(n.loc.start.offset,n.loc.start.offset+n.rawName.length),value:void 0,loc:n.loc};if(n.exp){const t=n.exp.loc;t.end.offset<n.loc.end.offset&&(t.start.offset--,t.start.column--,t.end.offset++,t.end.column++),e.value={type:2,content:n.exp.content,loc:t}}return e}function dl(n,e=!1,t,i=0,s=0){return Ge(n,e,t,i)}function xi(n,e,t){ot.onError(Et(n,Ct(e,e)))}function eE(){Rt.reset(),Qt=null,Qe=null,_n="",Ai=-1,Os=-1,Mt.length=0}function tE(n,e){if(eE(),Ui=n,ot=Ze({},s0),e){let s;for(s in e)e[s]!=null&&(ot[s]=e[s])}Rt.mode=ot.parseMode==="html"?1:ot.parseMode==="sfc"?2:0,Rt.inXML=ot.ns===1||ot.ns===2;const t=e&&e.delimiters;t&&(Rt.delimiterOpen=Gl(t[0]),Rt.delimiterClose=Gl(t[1]));const i=ra=AM([],n);return Rt.parse(Ui),i.loc=Ct(0,n.length),i.children=o0(i.children),ra=null,i}function nE(n,e){pl(n,void 0,e,l0(n,n.children[0]))}function l0(n,e){const{children:t}=n;return t.length===1&&e.type===1&&!Xl(e)}function pl(n,e,t,i=!1,s=!1){const{children:r}=n,o=[];for(let u=0;u<r.length;u++){const f=r[u];if(f.type===1&&f.tagType===0){const h=i?0:Rn(f,t);if(h>0){if(h>=2){f.codegenNode.patchFlag=-1,o.push(f);continue}}else{const d=f.codegenNode;if(d.type===13){const m=d.patchFlag;if((m===void 0||m===512||m===1)&&u0(f,t)>=2){const _=f0(f);_&&(d.props=t.hoist(_))}d.dynamicProps&&(d.dynamicProps=t.hoist(d.dynamicProps))}}}else if(f.type===12&&(i?0:Rn(f,t))>=2){o.push(f);continue}if(f.type===1){const h=f.tagType===1;h&&t.scopes.vSlot++,pl(f,n,t,!1,s),h&&t.scopes.vSlot--}else if(f.type===11)pl(f,n,t,f.children.length===1,!0);else if(f.type===9)for(let h=0;h<f.branches.length;h++)pl(f.branches[h],n,t,f.branches[h].children.length===1,s)}let a=!1;if(o.length===r.length&&n.type===1){if(n.tagType===0&&n.codegenNode&&n.codegenNode.type===13&&xe(n.codegenNode.children))n.codegenNode.children=l(js(n.codegenNode.children)),a=!0;else if(n.tagType===1&&n.codegenNode&&n.codegenNode.type===13&&n.codegenNode.children&&!xe(n.codegenNode.children)&&n.codegenNode.children.type===15){const u=c(n.codegenNode,"default");u&&(u.returns=l(js(u.returns)),a=!0)}else if(n.tagType===3&&e&&e.type===1&&e.tagType===1&&e.codegenNode&&e.codegenNode.type===13&&e.codegenNode.children&&!xe(e.codegenNode.children)&&e.codegenNode.children.type===15){const u=kn(n,"slot",!0),f=u&&u.arg&&c(e.codegenNode,u.arg);f&&(f.returns=l(js(f.returns)),a=!0)}}if(!a)for(const u of o)u.codegenNode=t.cache(u.codegenNode);function l(u){const f=t.cache(u);return s&&t.hmr&&(f.needArraySpread=!0),f}function c(u,f){if(u.children&&!xe(u.children)&&u.children.type===15){const h=u.children.properties.find(d=>d.key===f||d.key.content===f);return h&&h.value}}o.length&&t.transformHoist&&t.transformHoist(r,t,n)}function Rn(n,e){const{constantCache:t}=e;switch(n.type){case 1:if(n.tagType!==0)return 0;const i=t.get(n);if(i!==void 0)return i;const s=n.codegenNode;if(s.type!==13||s.isBlock&&n.tag!=="svg"&&n.tag!=="foreignObject"&&n.tag!=="math")return 0;if(s.patchFlag===void 0){let o=3;const a=u0(n,e);if(a===0)return t.set(n,0),0;a<o&&(o=a);for(let l=0;l<n.children.length;l++){const c=Rn(n.children[l],e);if(c===0)return t.set(n,0),0;c<o&&(o=c)}if(o>1)for(let l=0;l<n.props.length;l++){const c=n.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const u=Rn(c.exp,e);if(u===0)return t.set(n,0),0;u<o&&(o=u)}}if(s.isBlock){for(let l=0;l<n.props.length;l++)if(n.props[l].type===7)return t.set(n,0),0;e.removeHelper(Qs),e.removeHelper(jr(e.inSSR,s.isComponent)),s.isBlock=!1,e.helper($r(e.inSSR,s.isComponent))}return t.set(n,o),o}else return t.set(n,0),0;case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return Rn(n.content,e);case 4:return n.constType;case 8:let r=3;for(let o=0;o<n.children.length;o++){const a=n.children[o];if(ze(a)||En(a))continue;const l=Rn(a,e);if(l===0)return 0;l<r&&(r=l)}return r;case 20:return 2;default:return 0}}const iE=new Set([wh,Rh,ta,ma]);function c0(n,e){if(n.type===14&&!ze(n.callee)&&iE.has(n.callee)){const t=n.arguments[0];if(t.type===4)return Rn(t,e);if(t.type===14)return c0(t,e)}return 0}function u0(n,e){let t=3;const i=f0(n);if(i&&i.type===15){const{properties:s}=i;for(let r=0;r<s.length;r++){const{key:o,value:a}=s[r],l=Rn(o,e);if(l===0)return l;l<t&&(t=l);let c;if(a.type===4?c=Rn(a,e):a.type===14?c=c0(a,e):c=0,c===0)return c;c<t&&(t=c)}}return t}function f0(n){const e=n.codegenNode;if(e.type===13)return e.props}function sE(n,{filename:e="",prefixIdentifiers:t=!1,hoistStatic:i=!1,hmr:s=!1,cacheHandlers:r=!1,nodeTransforms:o=[],directiveTransforms:a={},transformHoist:l=null,isBuiltInComponent:c=$t,isCustomElement:u=$t,expressionPlugins:f=[],scopeId:h=null,slotted:d=!0,ssr:m=!1,inSSR:_=!1,ssrCssVars:g="",bindingMetadata:p=Ye,inline:T=!1,isTS:x=!1,onError:v=Nh,onWarn:w=Q_,compatConfig:R}){const C=e.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={filename:e,selfName:C&&sr(yt(C[1])),prefixIdentifiers:t,hoistStatic:i,hmr:s,cacheHandlers:r,nodeTransforms:o,directiveTransforms:a,transformHoist:l,isBuiltInComponent:c,isCustomElement:u,expressionPlugins:f,scopeId:h,slotted:d,ssr:m,inSSR:_,ssrCssVars:g,bindingMetadata:p,inline:T,isTS:x,onError:v,onWarn:w,compatConfig:R,root:n,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],cached:[],constantCache:new WeakMap,temps:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,grandParent:null,currentNode:n,childIndex:0,inVOnce:!1,helper(M){const S=L.helpers.get(M)||0;return L.helpers.set(M,S+1),M},removeHelper(M){const S=L.helpers.get(M);if(S){const P=S-1;P?L.helpers.set(M,P):L.helpers.delete(M)}},helperString(M){return`_${qr[L.helper(M)]}`},replaceNode(M){L.parent.children[L.childIndex]=L.currentNode=M},removeNode(M){const S=L.parent.children,P=M?S.indexOf(M):L.currentNode?L.childIndex:-1;!M||M===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>P&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(P,1)},onNodeRemoved:$t,addIdentifiers(M){},removeIdentifiers(M){},hoist(M){ze(M)&&(M=Ge(M)),L.hoists.push(M);const S=Ge(`_hoisted_${L.hoists.length}`,!1,M.loc,2);return S.hoisted=M,S},cache(M,S=!1,P=!1){const N=wM(L.cached.length,M,S,P);return L.cached.push(N),N}};return L.filters=new Set,L}function rE(n,e){const t=sE(n,e);Sc(n,t),e.hoistStatic&&nE(n,t),e.ssr||oE(n,t),n.helpers=new Set([...t.helpers.keys()]),n.components=[...t.components],n.directives=[...t.directives],n.imports=t.imports,n.hoists=t.hoists,n.temps=t.temps,n.cached=t.cached,n.transformed=!0,n.filters=[...t.filters]}function oE(n,e){const{helper:t}=e,{children:i}=n;if(i.length===1){const s=i[0];if(l0(n,s)&&s.codegenNode){const r=s.codegenNode;r.type===13&&Lh(r,e),n.codegenNode=r}else n.codegenNode=s}else if(i.length>1){let s=64;n.codegenNode=na(e,t(ea),void 0,n.children,s,void 0,void 0,!0,void 0,!1)}}function aE(n,e){let t=0;const i=()=>{t--};for(;t<n.children.length;t++){const s=n.children[t];ze(s)||(e.grandParent=e.parent,e.parent=n,e.childIndex=t,e.onNodeRemoved=i,Sc(s,e))}}function Sc(n,e){e.currentNode=n;const{nodeTransforms:t}=e,i=[];for(let r=0;r<t.length;r++){const o=t[r](n,e);if(o&&(xe(o)?i.push(...o):i.push(o)),e.currentNode)n=e.currentNode;else return}switch(n.type){case 3:e.ssr||e.helper(pa);break;case 5:e.ssr||e.helper(xc);break;case 9:for(let r=0;r<n.branches.length;r++)Sc(n.branches[r],e);break;case 10:case 11:case 1:case 0:aE(n,e);break}e.currentNode=n;let s=i.length;for(;s--;)i[s]()}function h0(n,e){const t=ze(n)?i=>i===n:i=>n.test(i);return(i,s)=>{if(i.type===1){const{props:r}=i;if(i.tagType===3&&r.some(kM))return;const o=[];for(let a=0;a<r.length;a++){const l=r[a];if(l.type===7&&t(l.name)){r.splice(a,1),a--;const c=e(i,l,s);c&&o.push(c)}}return o}}}const Mc="/*@__PURE__*/",d0=n=>`${qr[n]}: _${qr[n]}`;function lE(n,{mode:e="function",prefixIdentifiers:t=e==="module",sourceMap:i=!1,filename:s="template.vue.html",scopeId:r=null,optimizeImports:o=!1,runtimeGlobalName:a="Vue",runtimeModuleName:l="vue",ssrRuntimeModuleName:c="vue/server-renderer",ssr:u=!1,isTS:f=!1,inSSR:h=!1}){const d={mode:e,prefixIdentifiers:t,sourceMap:i,filename:s,scopeId:r,optimizeImports:o,runtimeGlobalName:a,runtimeModuleName:l,ssrRuntimeModuleName:c,ssr:u,isTS:f,inSSR:h,source:n.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(_){return`_${qr[_]}`},push(_,g=-2,p){d.code+=_},indent(){m(++d.indentLevel)},deindent(_=!1){_?--d.indentLevel:m(--d.indentLevel)},newline(){m(d.indentLevel)}};function m(_){d.push(`
`+"  ".repeat(_),0)}return d}function cE(n,e={}){const t=lE(n,e);e.onContextCreated&&e.onContextCreated(t);const{mode:i,push:s,prefixIdentifiers:r,indent:o,deindent:a,newline:l,scopeId:c,ssr:u}=t,f=Array.from(n.helpers),h=f.length>0,d=!r&&i!=="module";uE(n,t);const _=u?"ssrRender":"render",p=(u?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(s(`function ${_}(${p}) {`),o(),d&&(s("with (_ctx) {"),o(),h&&(s(`const { ${f.map(d0).join(", ")} } = _Vue
`,-1),l())),n.components.length&&(Gc(n.components,"component",t),(n.directives.length||n.temps>0)&&l()),n.directives.length&&(Gc(n.directives,"directive",t),n.temps>0&&l()),n.filters&&n.filters.length&&(l(),Gc(n.filters,"filter",t),l()),n.temps>0){s("let ");for(let T=0;T<n.temps;T++)s(`${T>0?", ":""}_temp${T}`)}return(n.components.length||n.directives.length||n.temps)&&(s(`
`,0),l()),u||s("return "),n.codegenNode?sn(n.codegenNode,t):s("null"),d&&(a(),s("}")),a(),s("}"),{ast:n,code:t.code,preamble:"",map:t.map?t.map.toJSON():void 0}}function uE(n,e){const{ssr:t,prefixIdentifiers:i,push:s,newline:r,runtimeModuleName:o,runtimeGlobalName:a,ssrRuntimeModuleName:l}=e,c=a,u=Array.from(n.helpers);if(u.length>0&&(s(`const _Vue = ${c}
`,-1),n.hoists.length)){const f=[vh,xh,pa,yh,j_].filter(h=>u.includes(h)).map(d0).join(", ");s(`const { ${f} } = _Vue
`,-1)}fE(n.hoists,e),r(),s("return ")}function Gc(n,e,{helper:t,push:i,newline:s,isTS:r}){const o=t(e==="filter"?Th:e==="component"?Sh:Eh);for(let a=0;a<n.length;a++){let l=n[a];const c=l.endsWith("__self");c&&(l=l.slice(0,-6)),i(`const ${sa(l,e)} = ${o}(${JSON.stringify(l)}${c?", true":""})${r?"!":""}`),a<n.length-1&&s()}}function fE(n,e){if(!n.length)return;e.pure=!0;const{push:t,newline:i}=e;i();for(let s=0;s<n.length;s++){const r=n[s];r&&(t(`const _hoisted_${s+1} = `),sn(r,e),i())}e.pure=!1}function Oh(n,e){const t=n.length>3||!1;e.push("["),t&&e.indent(),ga(n,e,t),t&&e.deindent(),e.push("]")}function ga(n,e,t=!1,i=!0){const{push:s,newline:r}=e;for(let o=0;o<n.length;o++){const a=n[o];ze(a)?s(a,-3):xe(a)?Oh(a,e):sn(a,e),o<n.length-1&&(t?(i&&s(","),r()):i&&s(", "))}}function sn(n,e){if(ze(n)){e.push(n,-3);return}if(En(n)){e.push(e.helper(n));return}switch(n.type){case 1:case 9:case 11:sn(n.codegenNode,e);break;case 2:hE(n,e);break;case 4:p0(n,e);break;case 5:dE(n,e);break;case 12:sn(n.codegenNode,e);break;case 8:m0(n,e);break;case 3:mE(n,e);break;case 13:gE(n,e);break;case 14:vE(n,e);break;case 15:xE(n,e);break;case 17:yE(n,e);break;case 18:SE(n,e);break;case 19:ME(n,e);break;case 20:EE(n,e);break;case 21:ga(n.body,e,!0,!1);break}}function hE(n,e){e.push(JSON.stringify(n.content),-3,n)}function p0(n,e){const{content:t,isStatic:i}=n;e.push(i?JSON.stringify(t):t,-3,n)}function dE(n,e){const{push:t,helper:i,pure:s}=e;s&&t(Mc),t(`${i(xc)}(`),sn(n.content,e),t(")")}function m0(n,e){for(let t=0;t<n.children.length;t++){const i=n.children[t];ze(i)?e.push(i,-3):sn(i,e)}}function pE(n,e){const{push:t}=e;if(n.type===8)t("["),m0(n,e),t("]");else if(n.isStatic){const i=Dh(n.content)?n.content:JSON.stringify(n.content);t(i,-2,n)}else t(`[${n.content}]`,-3,n)}function mE(n,e){const{push:t,helper:i,pure:s}=e;s&&t(Mc),t(`${i(pa)}(${JSON.stringify(n.content)})`,-3,n)}function gE(n,e){const{push:t,helper:i,pure:s}=e,{tag:r,props:o,children:a,patchFlag:l,dynamicProps:c,directives:u,isBlock:f,disableTracking:h,isComponent:d}=n;let m;l&&(m=String(l)),u&&t(i(bh)+"("),f&&t(`(${i(Qs)}(${h?"true":""}), `),s&&t(Mc);const _=f?jr(e.inSSR,d):$r(e.inSSR,d);t(i(_)+"(",-2,n),ga(_E([r,o,a,m,c]),e),t(")"),f&&t(")"),u&&(t(", "),sn(u,e),t(")"))}function _E(n){let e=n.length;for(;e--&&n[e]==null;);return n.slice(0,e+1).map(t=>t||"null")}function vE(n,e){const{push:t,helper:i,pure:s}=e,r=ze(n.callee)?n.callee:i(n.callee);s&&t(Mc),t(r+"(",-2,n),ga(n.arguments,e),t(")")}function xE(n,e){const{push:t,indent:i,deindent:s,newline:r}=e,{properties:o}=n;if(!o.length){t("{}",-2,n);return}const a=o.length>1||!1;t(a?"{":"{ "),a&&i();for(let l=0;l<o.length;l++){const{key:c,value:u}=o[l];pE(c,e),t(": "),sn(u,e),l<o.length-1&&(t(","),r())}a&&s(),t(a?"}":" }")}function yE(n,e){Oh(n.elements,e)}function SE(n,e){const{push:t,indent:i,deindent:s}=e,{params:r,returns:o,body:a,newline:l,isSlot:c}=n;c&&t(`_${qr[Ph]}(`),t("(",-2,n),xe(r)?ga(r,e):r&&sn(r,e),t(") => "),(l||a)&&(t("{"),i()),o?(l&&t("return "),xe(o)?Oh(o,e):sn(o,e)):a&&sn(a,e),(l||a)&&(s(),t("}")),c&&(n.isNonScopedSlot&&t(", undefined, true"),t(")"))}function ME(n,e){const{test:t,consequent:i,alternate:s,newline:r}=n,{push:o,indent:a,deindent:l,newline:c}=e;if(t.type===4){const f=!Dh(t.content);f&&o("("),p0(t,e),f&&o(")")}else o("("),sn(t,e),o(")");r&&a(),e.indentLevel++,r||o(" "),o("? "),sn(i,e),e.indentLevel--,r&&c(),r||o(" "),o(": ");const u=s.type===19;u||e.indentLevel++,sn(s,e),u||e.indentLevel--,r&&l(!0)}function EE(n,e){const{push:t,helper:i,indent:s,deindent:r,newline:o}=e,{needPauseTracking:a,needArraySpread:l}=n;l&&t("[...("),t(`_cache[${n.index}] || (`),a&&(s(),t(`${i(zl)}(-1`),n.inVOnce&&t(", true"),t("),"),o(),t("(")),t(`_cache[${n.index}] = `),sn(n.value,e),a&&(t(`).cacheIndex = ${n.index},`),o(),t(`${i(zl)}(1),`),o(),t(`_cache[${n.index}]`),r()),t(")"),l&&t(")]")}new RegExp("\\b"+"arguments,await,break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,let,new,return,super,switch,throw,try,var,void,while,with,yield".split(",").join("\\b|\\b")+"\\b");const TE=h0(/^(if|else|else-if)$/,(n,e,t)=>bE(n,e,t,(i,s,r)=>{const o=t.parent.children;let a=o.indexOf(i),l=0;for(;a-->=0;){const c=o[a];c&&c.type===9&&(l+=c.branches.length)}return()=>{if(r)i.codegenNode=op(s,l,t);else{const c=AE(i.codegenNode);c.alternate=op(s,l+i.branches.length-1,t)}}}));function bE(n,e,t,i){if(e.name!=="else"&&(!e.exp||!e.exp.content.trim())){const s=e.exp?e.exp.loc:n.loc;t.onError(Et(28,e.loc)),e.exp=Ge("true",!1,s)}if(e.name==="if"){const s=rp(n,e),r={type:9,loc:JM(n.loc),branches:[s]};if(t.replaceNode(r),i)return i(r,s,!0)}else{const s=t.parent.children;let r=s.indexOf(n);for(;r-->=-1;){const o=s[r];if(o&&o.type===3){t.removeNode(o);continue}if(o&&o.type===2&&!o.content.trim().length){t.removeNode(o);continue}if(o&&o.type===9){e.name==="else-if"&&o.branches[o.branches.length-1].condition===void 0&&t.onError(Et(30,n.loc)),t.removeNode();const a=rp(n,e);o.branches.push(a);const l=i&&i(o,a,!1);Sc(a,t),l&&l(),t.currentNode=null}else t.onError(Et(30,n.loc));break}}}function rp(n,e){const t=n.tagType===3;return{type:10,loc:n.loc,condition:e.name==="else"?void 0:e.exp,children:t&&!kn(n,"for")?n.children:[n],userKey:yc(n,"key"),isTemplateIf:t}}function op(n,e,t){return n.condition?$u(n.condition,ap(n,e,t),Ot(t.helper(pa),['""',"true"])):ap(n,e,t)}function ap(n,e,t){const{helper:i}=t,s=Pt("key",Ge(`${e}`,!1,Nn,2)),{children:r}=n,o=r[0];if(r.length!==1||o.type!==1)if(r.length===1&&o.type===11){const l=o.codegenNode;return ql(l,s,t),l}else return na(t,i(ea),Hn([s]),r,64,void 0,void 0,!0,!1,!1,n.loc);else{const l=o.codegenNode,c=VM(l);return c.type===13&&Lh(c,t),ql(c,s,t),l}}function AE(n){for(;;)if(n.type===19)if(n.alternate.type===19)n=n.alternate;else return n;else n.type===20&&(n=n.value)}const wE=(n,e,t)=>{const{modifiers:i,loc:s}=n,r=n.arg;let{exp:o}=n;if(o&&o.type===4&&!o.content.trim()&&(o=void 0),!o){if(r.type!==4||!r.isStatic)return t.onError(Et(52,r.loc)),{props:[Pt(r,Ge("",!0,s))]};g0(n),o=n.exp}return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.some(a=>a.content==="camel")&&(r.type===4?r.isStatic?r.content=yt(r.content):r.content=`${t.helperString(qu)}(${r.content})`:(r.children.unshift(`${t.helperString(qu)}(`),r.children.push(")"))),t.inSSR||(i.some(a=>a.content==="prop")&&lp(r,"."),i.some(a=>a.content==="attr")&&lp(r,"^")),{props:[Pt(r,o)]}},g0=(n,e)=>{const t=n.arg,i=yt(t.content);n.exp=Ge(i,!1,t.loc)},lp=(n,e)=>{n.type===4?n.isStatic?n.content=e+n.content:n.content=`\`${e}\${${n.content}}\``:(n.children.unshift(`'${e}' + (`),n.children.push(")"))},RE=h0("for",(n,e,t)=>{const{helper:i,removeHelper:s}=t;return CE(n,e,t,r=>{const o=Ot(i(Ah),[r.source]),a=Wl(n),l=kn(n,"memo"),c=yc(n,"key",!1,!0);c&&c.type===7&&!c.exp&&g0(c);let f=c&&(c.type===6?c.value?Ge(c.value.content,!0):void 0:c.exp);const h=c&&f?Pt("key",f):null,d=r.source.type===4&&r.source.constType>0,m=d?64:c?128:256;return r.codegenNode=na(t,i(ea),void 0,o,m,void 0,void 0,!0,!d,!1,n.loc),()=>{let _;const{children:g}=r,p=g.length!==1||g[0].type!==1,T=Xl(n)?n:a&&n.children.length===1&&Xl(n.children[0])?n.children[0]:null;if(T?(_=T.codegenNode,a&&h&&ql(_,h,t)):p?_=na(t,i(ea),h?Hn([h]):void 0,n.children,64,void 0,void 0,!0,void 0,!1):(_=g[0].codegenNode,a&&h&&ql(_,h,t),_.isBlock!==!d&&(_.isBlock?(s(Qs),s(jr(t.inSSR,_.isComponent))):s($r(t.inSSR,_.isComponent))),_.isBlock=!d,_.isBlock?(i(Qs),i(jr(t.inSSR,_.isComponent))):i($r(t.inSSR,_.isComponent))),l){const x=Kr(Zu(r.parseResult,[Ge("_cached")]));x.body=RM([ni(["const _memo = (",l.exp,")"]),ni(["if (_cached",...f?[" && _cached.key === ",f]:[],` && ${t.helperString(J_)}(_cached, _memo)) return _cached`]),ni(["const _item = ",_]),Ge("_item.memo = _memo"),Ge("return _item")]),o.arguments.push(x,Ge("_cache"),Ge(String(t.cached.length))),t.cached.push(null)}else o.arguments.push(Kr(Zu(r.parseResult),_,!0))}})});function CE(n,e,t,i){if(!e.exp){t.onError(Et(31,e.loc));return}const s=e.forParseResult;if(!s){t.onError(Et(32,e.loc));return}_0(s);const{addIdentifiers:r,removeIdentifiers:o,scopes:a}=t,{source:l,value:c,key:u,index:f}=s,h={type:11,loc:e.loc,source:l,valueAlias:c,keyAlias:u,objectIndexAlias:f,parseResult:s,children:Wl(n)?n.children:[n]};t.replaceNode(h),a.vFor++;const d=i&&i(h);return()=>{a.vFor--,d&&d()}}function _0(n,e){n.finalized||(n.finalized=!0)}function Zu({value:n,key:e,index:t},i=[]){return PE([n,e,t,...i])}function PE(n){let e=n.length;for(;e--&&!n[e];);return n.slice(0,e+1).map((t,i)=>t||Ge("_".repeat(i+1),!1))}const cp=Ge("undefined",!1),IE=(n,e)=>{if(n.type===1&&(n.tagType===1||n.tagType===3)){const t=kn(n,"slot");if(t)return t.exp,e.scopes.vSlot++,()=>{e.scopes.vSlot--}}},LE=(n,e,t,i)=>Kr(n,t,!1,!0,t.length?t[0].loc:i);function NE(n,e,t=LE){e.helper(Ph);const{children:i,loc:s}=n,r=[],o=[];let a=e.scopes.vSlot>0||e.scopes.vFor>0;const l=kn(n,"slot",!0);if(l){const{arg:g,exp:p}=l;g&&!Sn(g)&&(a=!0),r.push(Pt(g||Ge("default",!0),t(p,void 0,i,s)))}let c=!1,u=!1;const f=[],h=new Set;let d=0;for(let g=0;g<i.length;g++){const p=i[g];let T;if(!Wl(p)||!(T=kn(p,"slot",!0))){p.type!==3&&f.push(p);continue}if(l){e.onError(Et(37,T.loc));break}c=!0;const{children:x,loc:v}=p,{arg:w=Ge("default",!0),exp:R,loc:C}=T;let L;Sn(w)?L=w?w.content:"default":a=!0;const M=kn(p,"for"),S=t(R,M,x,v);let P,N;if(P=kn(p,"if"))a=!0,o.push($u(P.exp,Na(w,S,d++),cp));else if(N=kn(p,/^else(-if)?$/,!0)){let D=g,G;for(;D--&&(G=i[D],G.type===3););if(G&&Wl(G)&&kn(G,/^(else-)?if$/)){let $=o[o.length-1];for(;$.alternate.type===19;)$=$.alternate;$.alternate=N.exp?$u(N.exp,Na(w,S,d++),cp):Na(w,S,d++)}else e.onError(Et(30,N.loc))}else if(M){a=!0;const D=M.forParseResult;D?(_0(D),o.push(Ot(e.helper(Ah),[D.source,Kr(Zu(D),Na(w,S),!0)]))):e.onError(Et(32,M.loc))}else{if(L){if(h.has(L)){e.onError(Et(38,C));continue}h.add(L),L==="default"&&(u=!0)}r.push(Pt(w,S))}}if(!l){const g=(p,T)=>{const x=t(p,void 0,T,s);return e.compatConfig&&(x.isNonScopedSlot=!0),Pt("default",x)};c?f.length&&f.some(p=>v0(p))&&(u?e.onError(Et(39,f[0].loc)):r.push(g(void 0,f))):r.push(g(void 0,i))}const m=a?2:ml(n.children)?3:1;let _=Hn(r.concat(Pt("_",Ge(m+"",!1))),s);return o.length&&(_=Ot(e.helper(Z_),[_,js(o)])),{slots:_,hasDynamicSlots:a}}function Na(n,e,t){const i=[Pt("name",n),Pt("fn",e)];return t!=null&&i.push(Pt("key",Ge(String(t),!0))),Hn(i)}function ml(n){for(let e=0;e<n.length;e++){const t=n[e];switch(t.type){case 1:if(t.tagType===2||ml(t.children))return!0;break;case 9:if(ml(t.branches))return!0;break;case 10:case 11:if(ml(t.children))return!0;break}}return!1}function v0(n){return n.type!==2&&n.type!==12?!0:n.type===2?!!n.content.trim():v0(n.content)}const x0=new WeakMap,DE=(n,e)=>function(){if(n=e.currentNode,!(n.type===1&&(n.tagType===0||n.tagType===1)))return;const{tag:i,props:s}=n,r=n.tagType===1;let o=r?UE(n,e):`"${i}"`;const a=mt(o)&&o.callee===Mh;let l,c,u=0,f,h,d,m=a||o===Vo||o===_h||!r&&(i==="svg"||i==="foreignObject"||i==="math");if(s.length>0){const _=y0(n,e,void 0,r,a);l=_.props,u=_.patchFlag,h=_.dynamicPropNames;const g=_.directives;d=g&&g.length?js(g.map(p=>FE(p,e))):void 0,_.shouldUseBlock&&(m=!0)}if(n.children.length>0)if(o===Hl&&(m=!0,u|=1024),r&&o!==Vo&&o!==Hl){const{slots:g,hasDynamicSlots:p}=NE(n,e);c=g,p&&(u|=1024)}else if(n.children.length===1&&o!==Vo){const g=n.children[0],p=g.type,T=p===5||p===8;T&&Rn(g,e)===0&&(u|=1),T||p===2?c=g:c=n.children}else c=n.children;h&&h.length&&(f=BE(h)),n.codegenNode=na(e,o,l,c,u===0?void 0:u,f,d,!!m,!1,r,n.loc)};function UE(n,e,t=!1){let{tag:i}=n;const s=Ju(i),r=yc(n,"is",!1,!0);if(r)if(s||Ys("COMPILER_IS_ON_ELEMENT",e)){let a;if(r.type===6?a=r.value&&Ge(r.value.content,!0):(a=r.exp,a||(a=Ge("is",!1,r.arg.loc))),a)return Ot(e.helper(Mh),[a])}else r.type===6&&r.value.content.startsWith("vue:")&&(i=r.value.content.slice(4));const o=e0(i)||e.isBuiltInComponent(i);return o?(t||e.helper(o),o):(e.helper(Sh),e.components.add(i),sa(i,"component"))}function y0(n,e,t=n.props,i,s,r=!1){const{tag:o,loc:a,children:l}=n;let c=[];const u=[],f=[],h=l.length>0;let d=!1,m=0,_=!1,g=!1,p=!1,T=!1,x=!1,v=!1;const w=[],R=S=>{c.length&&(u.push(Hn(up(c),a)),c=[]),S&&u.push(S)},C=()=>{e.scopes.vFor>0&&c.push(Pt(Ge("ref_for",!0),Ge("true")))},L=({key:S,value:P})=>{if(Sn(S)){const N=S.content,D=nr(N);if(D&&(!i||s)&&N.toLowerCase()!=="onclick"&&N!=="onUpdate:modelValue"&&!us(N)&&(T=!0),D&&us(N)&&(v=!0),D&&P.type===14&&(P=P.arguments[0]),P.type===20||(P.type===4||P.type===8)&&Rn(P,e)>0)return;N==="ref"?_=!0:N==="class"?g=!0:N==="style"?p=!0:N!=="key"&&!w.includes(N)&&w.push(N),i&&(N==="class"||N==="style")&&!w.includes(N)&&w.push(N)}else x=!0};for(let S=0;S<t.length;S++){const P=t[S];if(P.type===6){const{loc:N,name:D,nameLoc:G,value:$}=P;let F=!0;if(D==="ref"&&(_=!0,C()),D==="is"&&(Ju(o)||$&&$.content.startsWith("vue:")||Ys("COMPILER_IS_ON_ELEMENT",e)))continue;c.push(Pt(Ge(D,!0,G),Ge($?$.content:"",F,$?$.loc:N)))}else{const{name:N,arg:D,exp:G,loc:$,modifiers:F}=P,Q=N==="bind",O=N==="on";if(N==="slot"){i||e.onError(Et(40,$));continue}if(N==="once"||N==="memo"||N==="is"||Q&&zs(D,"is")&&(Ju(o)||Ys("COMPILER_IS_ON_ELEMENT",e))||O&&r)continue;if((Q&&zs(D,"key")||O&&h&&zs(D,"vue:before-update"))&&(d=!0),Q&&zs(D,"ref")&&C(),!D&&(Q||O)){if(x=!0,G)if(Q){if(C(),R(),Ys("COMPILER_V_BIND_OBJECT_ORDER",e)){u.unshift(G);continue}u.push(G)}else R({type:14,loc:$,callee:e.helper(Ch),arguments:i?[G]:[G,"true"]});else e.onError(Et(Q?34:35,$));continue}Q&&F.some(pe=>pe.content==="prop")&&(m|=32);const ce=e.directiveTransforms[N];if(ce){const{props:pe,needRuntime:Ee}=ce(P,n,e);!r&&pe.forEach(L),O&&D&&!Sn(D)?R(Hn(pe,a)):c.push(...pe),Ee&&(f.push(P),En(Ee)&&x0.set(P,Ee))}else Rv(N)||(f.push(P),h&&(d=!0))}}let M;if(u.length?(R(),u.length>1?M=Ot(e.helper(Vl),u,a):M=u[0]):c.length&&(M=Hn(up(c),a)),x?m|=16:(g&&!i&&(m|=2),p&&!i&&(m|=4),w.length&&(m|=8),T&&(m|=32)),!d&&(m===0||m===32)&&(_||v||f.length>0)&&(m|=512),!e.inSSR&&M)switch(M.type){case 15:let S=-1,P=-1,N=!1;for(let $=0;$<M.properties.length;$++){const F=M.properties[$].key;Sn(F)?F.content==="class"?S=$:F.content==="style"&&(P=$):F.isHandlerKey||(N=!0)}const D=M.properties[S],G=M.properties[P];N?M=Ot(e.helper(ta),[M]):(D&&!Sn(D.value)&&(D.value=Ot(e.helper(wh),[D.value])),G&&(p||G.value.type===4&&G.value.content.trim()[0]==="["||G.value.type===17)&&(G.value=Ot(e.helper(Rh),[G.value])));break;case 14:break;default:M=Ot(e.helper(ta),[Ot(e.helper(ma),[M])]);break}return{props:M,directives:f,patchFlag:m,dynamicPropNames:w,shouldUseBlock:d}}function up(n){const e=new Map,t=[];for(let i=0;i<n.length;i++){const s=n[i];if(s.key.type===8||!s.key.isStatic){t.push(s);continue}const r=s.key.content,o=e.get(r);o?(r==="style"||r==="class"||nr(r))&&OE(o,s):(e.set(r,s),t.push(s))}return t}function OE(n,e){n.value.type===17?n.value.elements.push(e.value):n.value=js([n.value,e.value],n.loc)}function FE(n,e){const t=[],i=x0.get(n);i?t.push(e.helperString(i)):(e.helper(Eh),e.directives.add(n.name),t.push(sa(n.name,"directive")));const{loc:s}=n;if(n.exp&&t.push(n.exp),n.arg&&(n.exp||t.push("void 0"),t.push(n.arg)),Object.keys(n.modifiers).length){n.arg||(n.exp||t.push("void 0"),t.push("void 0"));const r=Ge("true",!1,s);t.push(Hn(n.modifiers.map(o=>Pt(o,r)),s))}return js(t,n.loc)}function BE(n){let e="[";for(let t=0,i=n.length;t<i;t++)e+=JSON.stringify(n[t]),t<i-1&&(e+=", ");return e+"]"}function Ju(n){return n==="component"||n==="Component"}const kE=(n,e)=>{if(Xl(n)){const{children:t,loc:i}=n,{slotName:s,slotProps:r}=HE(n,e),o=[e.prefixIdentifiers?"_ctx.$slots":"$slots",s,"{}","undefined","true"];let a=2;r&&(o[2]=r,a=3),t.length&&(o[3]=Kr([],t,!1,!1,i),a=4),e.scopeId&&!e.slotted&&(a=5),o.splice(a),n.codegenNode=Ot(e.helper(Y_),o,i)}};function HE(n,e){let t='"default"',i;const s=[];for(let r=0;r<n.props.length;r++){const o=n.props[r];if(o.type===6)o.value&&(o.name==="name"?t=JSON.stringify(o.value.content):(o.name=yt(o.name),s.push(o)));else if(o.name==="bind"&&zs(o.arg,"name")){if(o.exp)t=o.exp;else if(o.arg&&o.arg.type===4){const a=yt(o.arg.content);t=o.exp=Ge(a,!1,o.arg.loc)}}else o.name==="bind"&&o.arg&&Sn(o.arg)&&(o.arg.content=yt(o.arg.content)),s.push(o)}if(s.length>0){const{props:r,directives:o}=y0(n,e,s,!1,!1);i=r,o.length&&e.onError(Et(36,o[0].loc))}return{slotName:t,slotProps:i}}const S0=(n,e,t,i)=>{const{loc:s,modifiers:r,arg:o}=n;!n.exp&&!r.length&&t.onError(Et(35,s));let a;if(o.type===4)if(o.isStatic){let f=o.content;f.startsWith("vue:")&&(f=`vnode-${f.slice(4)}`);const h=e.tagType!==0||f.startsWith("vnode")||!/[A-Z]/.test(f)?Lr(yt(f)):`on:${f}`;a=Ge(h,!0,o.loc)}else a=ni([`${t.helperString(Ku)}(`,o,")"]);else a=o,a.children.unshift(`${t.helperString(Ku)}(`),a.children.push(")");let l=n.exp;l&&!l.content.trim()&&(l=void 0);let c=t.cacheHandlers&&!l&&!t.inVOnce;if(l){const f=n0(l),h=!(f||FM(l)),d=l.content.includes(";");(h||c&&f)&&(l=ni([`${h?"$event":"(...args)"} => ${d?"{":"("}`,l,d?"}":")"]))}let u={props:[Pt(a,l||Ge("() => {}",!1,s))]};return i&&(u=i(u)),c&&(u.props[0].value=t.cache(u.props[0].value)),u.props.forEach(f=>f.key.isHandlerKey=!0),u},VE=(n,e)=>{if(n.type===0||n.type===1||n.type===11||n.type===10)return()=>{const t=n.children;let i,s=!1;for(let r=0;r<t.length;r++){const o=t[r];if(zc(o)){s=!0;for(let a=r+1;a<t.length;a++){const l=t[a];if(zc(l))i||(i=t[r]=ni([o],o.loc)),i.children.push(" + ",l),t.splice(a,1),a--;else{i=void 0;break}}}}if(!(!s||t.length===1&&(n.type===0||n.type===1&&n.tagType===0&&!n.props.find(r=>r.type===7&&!e.directiveTransforms[r.name])&&n.tag!=="template")))for(let r=0;r<t.length;r++){const o=t[r];if(zc(o)||o.type===8){const a=[];(o.type!==2||o.content!==" ")&&a.push(o),!e.ssr&&Rn(o,e)===0&&a.push("1"),t[r]={type:12,content:o,loc:o.loc,codegenNode:Ot(e.helper(yh),a)}}}}},fp=new WeakSet,zE=(n,e)=>{if(n.type===1&&kn(n,"once",!0))return fp.has(n)||e.inVOnce||e.inSSR?void 0:(fp.add(n),e.inVOnce=!0,e.helper(zl),()=>{e.inVOnce=!1;const t=e.currentNode;t.codegenNode&&(t.codegenNode=e.cache(t.codegenNode,!0,!0))})},M0=(n,e,t)=>{const{exp:i,arg:s}=n;if(!i)return t.onError(Et(41,n.loc)),Da();const r=i.loc.source.trim(),o=i.type===4?i.content:r,a=t.bindingMetadata[r];if(a==="props"||a==="props-aliased")return t.onError(Et(44,i.loc)),Da();if(!o.trim()||!n0(i))return t.onError(Et(42,i.loc)),Da();const l=s||Ge("modelValue",!0),c=s?Sn(s)?`onUpdate:${yt(s.content)}`:ni(['"onUpdate:" + ',s]):"onUpdate:modelValue";let u;const f=t.isTS?"($event: any)":"$event";u=ni([`${f} => ((`,i,") = $event)"]);const h=[Pt(l,n.exp),Pt(c,u)];if(n.modifiers.length&&e.tagType===1){const d=n.modifiers.map(_=>_.content).map(_=>(Dh(_)?_:JSON.stringify(_))+": true").join(", "),m=s?Sn(s)?`${s.content}Modifiers`:ni([s,' + "Modifiers"']):"modelModifiers";h.push(Pt(m,Ge(`{ ${d} }`,!1,n.loc,2)))}return Da(h)};function Da(n=[]){return{props:n}}const GE=/[\w).+\-_$\]]/,WE=(n,e)=>{Ys("COMPILER_FILTERS",e)&&(n.type===5?Kl(n.content,e):n.type===1&&n.props.forEach(t=>{t.type===7&&t.name!=="for"&&t.exp&&Kl(t.exp,e)}))};function Kl(n,e){if(n.type===4)hp(n,e);else for(let t=0;t<n.children.length;t++){const i=n.children[t];typeof i=="object"&&(i.type===4?hp(i,e):i.type===8?Kl(n,e):i.type===5&&Kl(i.content,e))}}function hp(n,e){const t=n.content;let i=!1,s=!1,r=!1,o=!1,a=0,l=0,c=0,u=0,f,h,d,m,_=[];for(d=0;d<t.length;d++)if(h=f,f=t.charCodeAt(d),i)f===39&&h!==92&&(i=!1);else if(s)f===34&&h!==92&&(s=!1);else if(r)f===96&&h!==92&&(r=!1);else if(o)f===47&&h!==92&&(o=!1);else if(f===124&&t.charCodeAt(d+1)!==124&&t.charCodeAt(d-1)!==124&&!a&&!l&&!c)m===void 0?(u=d+1,m=t.slice(0,d).trim()):g();else{switch(f){case 34:s=!0;break;case 39:i=!0;break;case 96:r=!0;break;case 40:c++;break;case 41:c--;break;case 91:l++;break;case 93:l--;break;case 123:a++;break;case 125:a--;break}if(f===47){let p=d-1,T;for(;p>=0&&(T=t.charAt(p),T===" ");p--);(!T||!GE.test(T))&&(o=!0)}}m===void 0?m=t.slice(0,d).trim():u!==0&&g();function g(){_.push(t.slice(u,d).trim()),u=d+1}if(_.length){for(d=0;d<_.length;d++)m=XE(m,_[d],e);n.content=m,n.ast=void 0}}function XE(n,e,t){t.helper(Th);const i=e.indexOf("(");if(i<0)return t.filters.add(e),`${sa(e,"filter")}(${n})`;{const s=e.slice(0,i),r=e.slice(i+1);return t.filters.add(s),`${sa(s,"filter")}(${n}${r!==")"?","+r:r}`}}const dp=new WeakSet,qE=(n,e)=>{if(n.type===1){const t=kn(n,"memo");return!t||dp.has(n)?void 0:(dp.add(n),()=>{const i=n.codegenNode||e.currentNode.codegenNode;i&&i.type===13&&(n.tagType!==1&&Lh(i,e),n.codegenNode=Ot(e.helper(Ih),[t.exp,Kr(void 0,i),"_cache",String(e.cached.length)]),e.cached.push(null))})}};function KE(n){return[[zE,TE,qE,RE,WE,kE,DE,IE,VE],{on:S0,bind:wE,model:M0}]}function $E(n,e={}){const t=e.onError||Nh,i=e.mode==="module";e.prefixIdentifiers===!0?t(Et(47)):i&&t(Et(48));const s=!1;e.cacheHandlers&&t(Et(49)),e.scopeId&&!i&&t(Et(50));const r=Ze({},e,{prefixIdentifiers:s}),o=ze(n)?tE(n,r):n,[a,l]=KE();return rE(o,Ze({},r,{nodeTransforms:[...a,...e.nodeTransforms||[]],directiveTransforms:Ze({},l,e.directiveTransforms||{})})),cE(o,r)}const jE=()=>({props:[]});/**
* @vue/compiler-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const E0=Symbol(""),T0=Symbol(""),b0=Symbol(""),A0=Symbol(""),Qu=Symbol(""),w0=Symbol(""),R0=Symbol(""),C0=Symbol(""),P0=Symbol(""),I0=Symbol("");bM({[E0]:"vModelRadio",[T0]:"vModelCheckbox",[b0]:"vModelText",[A0]:"vModelSelect",[Qu]:"vModelDynamic",[w0]:"withModifiers",[R0]:"withKeys",[C0]:"vShow",[P0]:"Transition",[I0]:"TransitionGroup"});let ur;function YE(n,e=!1){return ur||(ur=document.createElement("div")),e?(ur.innerHTML=`<div foo="${n.replace(/"/g,"&quot;")}">`,ur.children[0].getAttribute("foo")):(ur.innerHTML=n,ur.textContent)}const ZE={parseMode:"html",isVoidTag:Xv,isNativeTag:n=>zv(n)||Gv(n)||Wv(n),isPreTag:n=>n==="pre",isIgnoreNewlineTag:n=>n==="pre"||n==="textarea",decodeEntities:YE,isBuiltInComponent:n=>{if(n==="Transition"||n==="transition")return P0;if(n==="TransitionGroup"||n==="transition-group")return I0},getNamespace(n,e,t){let i=e?e.ns:t;if(e&&i===2)if(e.tag==="annotation-xml"){if(n==="svg")return 1;e.props.some(s=>s.type===6&&s.name==="encoding"&&s.value!=null&&(s.value.content==="text/html"||s.value.content==="application/xhtml+xml"))&&(i=0)}else/^m(?:[ions]|text)$/.test(e.tag)&&n!=="mglyph"&&n!=="malignmark"&&(i=0);else e&&i===1&&(e.tag==="foreignObject"||e.tag==="desc"||e.tag==="title")&&(i=0);if(i===0){if(n==="svg")return 1;if(n==="math")return 2}return i}},JE=n=>{n.type===1&&n.props.forEach((e,t)=>{e.type===6&&e.name==="style"&&e.value&&(n.props[t]={type:7,name:"bind",arg:Ge("style",!0,e.loc),exp:QE(e.value.content,e.loc),modifiers:[],loc:e.loc})})},QE=(n,e)=>{const t=Hm(n);return Ge(JSON.stringify(t),!1,e,3)};function ps(n,e){return Et(n,e)}const eT=(n,e,t)=>{const{exp:i,loc:s}=n;return i||t.onError(ps(53,s)),e.children.length&&(t.onError(ps(54,s)),e.children.length=0),{props:[Pt(Ge("innerHTML",!0,s),i||Ge("",!0))]}},tT=(n,e,t)=>{const{exp:i,loc:s}=n;return i||t.onError(ps(55,s)),e.children.length&&(t.onError(ps(56,s)),e.children.length=0),{props:[Pt(Ge("textContent",!0),i?Rn(i,t)>0?i:Ot(t.helperString(xc),[i],s):Ge("",!0))]}},nT=(n,e,t)=>{const i=M0(n,e,t);if(!i.props.length||e.tagType===1)return i;n.arg&&t.onError(ps(58,n.arg.loc));const{tag:s}=e,r=t.isCustomElement(s);if(s==="input"||s==="textarea"||s==="select"||r){let o=b0,a=!1;if(s==="input"||r){const l=yc(e,"type");if(l){if(l.type===7)o=Qu;else if(l.value)switch(l.value.content){case"radio":o=E0;break;case"checkbox":o=T0;break;case"file":a=!0,t.onError(ps(59,n.loc));break}}else BM(e)&&(o=Qu)}else s==="select"&&(o=A0);a||(i.needRuntime=t.helper(o))}else t.onError(ps(57,n.loc));return i.props=i.props.filter(o=>!(o.key.type===4&&o.key.content==="modelValue")),i},iT=Ln("passive,once,capture"),sT=Ln("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),rT=Ln("left,right"),L0=Ln("onkeyup,onkeydown,onkeypress"),oT=(n,e,t,i)=>{const s=[],r=[],o=[];for(let a=0;a<e.length;a++){const l=e[a].content;l==="native"&&ia("COMPILER_V_ON_NATIVE",t)||iT(l)?o.push(l):rT(l)?Sn(n)?L0(n.content.toLowerCase())?s.push(l):r.push(l):(s.push(l),r.push(l)):sT(l)?r.push(l):s.push(l)}return{keyModifiers:s,nonKeyModifiers:r,eventOptionModifiers:o}},pp=(n,e)=>Sn(n)&&n.content.toLowerCase()==="onclick"?Ge(e,!0):n.type!==4?ni(["(",n,`) === "onClick" ? "${e}" : (`,n,")"]):n,aT=(n,e,t)=>S0(n,e,t,i=>{const{modifiers:s}=n;if(!s.length)return i;let{key:r,value:o}=i.props[0];const{keyModifiers:a,nonKeyModifiers:l,eventOptionModifiers:c}=oT(r,s,t,n.loc);if(l.includes("right")&&(r=pp(r,"onContextmenu")),l.includes("middle")&&(r=pp(r,"onMouseup")),l.length&&(o=Ot(t.helper(w0),[o,JSON.stringify(l)])),a.length&&(!Sn(r)||L0(r.content.toLowerCase()))&&(o=Ot(t.helper(R0),[o,JSON.stringify(a)])),c.length){const u=c.map(sr).join("");r=Sn(r)?Ge(`${r.content}${u}`,!0):ni(["(",r,`) + "${u}"`])}return{props:[Pt(r,o)]}}),lT=(n,e,t)=>{const{exp:i,loc:s}=n;return i||t.onError(ps(61,s)),{props:[],needRuntime:t.helper(C0)}},cT=(n,e)=>{n.type===1&&n.tagType===0&&(n.tag==="script"||n.tag==="style")&&e.removeNode()},uT=[JE],fT={cloak:jE,html:eT,text:tT,model:nT,on:aT,show:lT};function hT(n,e={}){return $E(n,Ze({},ZE,e,{nodeTransforms:[cT,...uT,...e.nodeTransforms||[]],directiveTransforms:Ze({},fT,e.directiveTransforms||{}),transformHoist:null}))}/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const mp=Object.create(null);function dT(n,e){if(!ze(n))if(n.nodeType)n=n.innerHTML;else return $t;const t=Iv(n,e),i=mp[t];if(i)return i;if(n[0]==="#"){const a=document.querySelector(n);n=a?a.innerHTML:""}const s=Ze({hoistStatic:!0,onError:void 0,onWarn:$t},e);!s.isCustomElement&&typeof customElements<"u"&&(s.isCustomElement=a=>!!customElements.get(a));const{code:r}=hT(n,s),o=new Function("Vue",r)(xM);return o._rc=!0,mp[t]=o}__(dT);const pT=""+new URL("../blues_boot_blue.png",import.meta.url).href,mT=""+new URL("../blues_boot_white.png",import.meta.url).href;/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="174",gT=0,gp=1,_T=2,N0=1,vT=2,wi=3,Vi=0,Mn=1,li=2,ms=0,Br=1,_p=2,vp=3,xp=4,xT=5,Hs=100,yT=101,ST=102,MT=103,ET=104,TT=200,bT=201,AT=202,wT=203,ef=204,tf=205,RT=206,CT=207,PT=208,IT=209,LT=210,NT=211,DT=212,UT=213,OT=214,nf=0,sf=1,rf=2,Yr=3,of=4,af=5,lf=6,cf=7,D0=0,FT=1,BT=2,gs=0,kT=1,HT=2,VT=3,zT=4,GT=5,WT=6,XT=7,yp="attached",qT="detached",U0=300,Zr=301,Jr=302,uf=303,ff=304,Ec=306,Qr=1e3,as=1001,$l=1002,dn=1003,O0=1004,Lo=1005,Cn=1006,gl=1007,Ni=1008,zi=1009,F0=1010,B0=1011,oa=1012,Bh=1013,er=1014,Qn=1015,_a=1016,kh=1017,Hh=1018,eo=1020,k0=35902,H0=1021,V0=1022,Vn=1023,z0=1024,G0=1025,kr=1026,to=1027,Vh=1028,zh=1029,W0=1030,Gh=1031,Wh=1033,_l=33776,vl=33777,xl=33778,yl=33779,hf=35840,df=35841,pf=35842,mf=35843,gf=36196,_f=37492,vf=37496,xf=37808,yf=37809,Sf=37810,Mf=37811,Ef=37812,Tf=37813,bf=37814,Af=37815,wf=37816,Rf=37817,Cf=37818,Pf=37819,If=37820,Lf=37821,Sl=36492,Nf=36494,Df=36495,X0=36283,Uf=36284,Of=36285,Ff=36286,aa=2300,la=2301,Wc=2302,Sp=2400,Mp=2401,Ep=2402,KT=2500,$T=0,q0=1,Bf=2,jT=3200,YT=3201,K0=0,ZT=1,os="",Kt="srgb",mn="srgb-linear",jl="linear",gt="srgb",fr=7680,Tp=519,JT=512,QT=513,eb=514,$0=515,tb=516,nb=517,ib=518,sb=519,kf=35044,bp="300 es",Di=2e3,Yl=2001;class uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ap=1234567;const zo=Math.PI/180,no=180/Math.PI;function ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function Xh(n,e){return(n%e+e)%e}function rb(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function ob(n,e,t){return n!==e?(t-n)/(e-n):0}function Go(n,e,t){return(1-t)*n+t*e}function ab(n,e,t,i){return Go(n,e,1-Math.exp(-t*i))}function lb(n,e=1){return e-Math.abs(Xh(n,e*2)-e)}function cb(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function ub(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function fb(n,e){return n+Math.floor(Math.random()*(e-n+1))}function hb(n,e){return n+Math.random()*(e-n)}function db(n){return n*(.5-Math.random())}function pb(n){n!==void 0&&(Ap=n);let e=Ap+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mb(n){return n*zo}function gb(n){return n*no}function _b(n){return(n&n-1)===0&&n!==0}function vb(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function xb(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function yb(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),h=o((e-i)/2),d=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*f,l*h,a*c);break;case"YZY":n.set(l*h,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*h,a*u,a*c);break;case"XZX":n.set(a*u,l*m,l*d,a*c);break;case"YXY":n.set(l*d,a*u,l*m,a*c);break;case"ZYZ":n.set(l*m,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Sb={DEG2RAD:zo,RAD2DEG:no,generateUUID:ii,clamp:$e,euclideanModulo:Xh,mapLinear:rb,inverseLerp:ob,lerp:Go,damp:ab,pingpong:lb,smoothstep:cb,smootherstep:ub,randInt:fb,randFloat:hb,randFloatSpread:db,seededRandom:pb,degToRad:mb,radToDeg:gb,isPowerOfTwo:_b,ceilPowerOfTwo:vb,floorPowerOfTwo:xb,setQuaternionFromProperEuler:yb,normalize:dt,denormalize:Zn};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,s,r,o,a,l,c){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],m=i[8],_=s[0],g=s[3],p=s[6],T=s[1],x=s[4],v=s[7],w=s[2],R=s[5],C=s[8];return r[0]=o*_+a*T+l*w,r[3]=o*g+a*x+l*R,r[6]=o*p+a*v+l*C,r[1]=c*_+u*T+f*w,r[4]=c*g+u*x+f*R,r[7]=c*p+u*v+f*C,r[2]=h*_+d*T+m*w,r[5]=h*g+d*x+m*R,r[8]=h*p+d*v+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,m=t*f+i*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=h*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new Xe;function j0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ca(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mb(){const n=ca("canvas");return n.style.display="block",n}const wp={};function Fs(n){n in wp||(wp[n]=!0,console.warn(n))}function Eb(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Tb(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function bb(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Rp=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cp=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ab(){const n={enabled:!0,workingColorSpace:mn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===gt&&(s.r=Oi(s.r),s.g=Oi(s.g),s.b=Oi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===gt&&(s.r=Hr(s.r),s.g=Hr(s.g),s.b=Hr(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===os?jl:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[mn]:{primaries:e,whitePoint:i,transfer:jl,toXYZ:Rp,fromXYZ:Cp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Rp,fromXYZ:Cp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}const tt=Ab();function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Hr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hr;class wb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hr===void 0&&(hr=ca("canvas")),hr.width=e.width,hr.height=e.height;const i=hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=hr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ca("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Oi(t[i]/255)*255):t[i]=Oi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rb=0;class qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rb++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(qc(s[o].image)):r.push(qc(s[o]))}else r=qc(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function qc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?wb.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cb=0;class Wt extends uo{constructor(e=Wt.DEFAULT_IMAGE,t=Wt.DEFAULT_MAPPING,i=as,s=as,r=Cn,o=Ni,a=Vn,l=zi,c=Wt.DEFAULT_ANISOTROPY,u=os){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ii(),this.name="",this.source=new qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qr:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qr:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=U0;Wt.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,i=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,v=(d+1)/2,w=(p+1)/2,R=(u+h)/4,C=(f+_)/4,L=(m+g)/4;return x>v&&x>w?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=R/i,r=C/i):v>w?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=R/s,r=L/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=L/r),this.set(i,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends uo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Wt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new qh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Pb{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Y0 extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ib extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=dn,this.minFilter=dn,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ts{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3];const h=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==m){let g=1-a;const p=l*h+c*d+u*m+f*_,T=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){const w=Math.sqrt(x),R=Math.atan2(w,p*T);g=Math.sin(g*R)/w,a=Math.sin(a*R)/w}const v=a*T;if(l=l*g+h*v,c=c*g+d*v,u=u*g+m*v,f=f*g+_*v,g===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+u*f+l*d-c*h,e[t+1]=l*m+u*h+c*f-a*d,e[t+2]=c*m+u*d+a*h-l*f,e[t+3]=u*m-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),h=l(i/2),d=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f+h*d*m;break;case"YZX":this._x=h*u*f+c*d*m,this._y=c*d*f+h*u*m,this._z=c*u*m-h*d*f,this._w=c*u*f-h*d*m;break;case"XZY":this._x=h*u*f-c*d*m,this._y=c*d*f-h*u*m,this._z=c*u*m+h*d*f,this._w=c*u*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(i>a&&i>f){const d=2*Math.sqrt(1+i-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-i-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*i+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),f=2*(r*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Kc.copy(this).projectOnVector(e),this.sub(Kc)}reflect(e){return this.sub(Kc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kc=new V,Pp=new Ts;class hi{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(r,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ua.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ua.copy(i.boundingBox)),Ua.applyMatrix4(e.matrixWorld),this.union(Ua)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Oa.subVectors(this.max,yo),dr.subVectors(e.a,yo),pr.subVectors(e.b,yo),mr.subVectors(e.c,yo),Ki.subVectors(pr,dr),$i.subVectors(mr,pr),Cs.subVectors(dr,mr);let t=[0,-Ki.z,Ki.y,0,-$i.z,$i.y,0,-Cs.z,Cs.y,Ki.z,0,-Ki.x,$i.z,0,-$i.x,Cs.z,0,-Cs.x,-Ki.y,Ki.x,0,-$i.y,$i.x,0,-Cs.y,Cs.x,0];return!$c(t,dr,pr,mr,Oa)||(t=[1,0,0,0,1,0,0,0,1],!$c(t,dr,pr,mr,Oa))?!1:(Fa.crossVectors(Ki,$i),t=[Fa.x,Fa.y,Fa.z],$c(t,dr,pr,mr,Oa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new V,new V,new V,new V,new V,new V,new V,new V],Kn=new V,Ua=new hi,dr=new V,pr=new V,mr=new V,Ki=new V,$i=new V,Cs=new V,yo=new V,Oa=new V,Fa=new V,Ps=new V;function $c(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Ps.fromArray(n,r);const a=s.x*Math.abs(Ps.x)+s.y*Math.abs(Ps.y)+s.z*Math.abs(Ps.z),l=e.dot(Ps),c=t.dot(Ps),u=i.dot(Ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Lb=new hi,So=new V,jc=new V;class di{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Lb.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;So.subVectors(e,this.center);const t=So.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(So,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(So.copy(e.center).add(jc)),this.expandByPoint(So.copy(e.center).sub(jc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Si=new V,Yc=new V,Ba=new V,ji=new V,Zc=new V,ka=new V,Jc=new V;class Tc{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Yc.copy(e).add(t).multiplyScalar(.5),Ba.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Yc);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ba),a=ji.dot(this.direction),l=-ji.dot(Ba),c=ji.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*l-a,h=o*a-l,m=r*u,f>=0)if(h>=-m)if(h<=m){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=m?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Yc).addScaledVector(Ba,h),d}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),s=Si.dot(Si)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,i,s,r){Zc.subVectors(t,e),ka.subVectors(i,e),Jc.crossVectors(Zc,ka);let o=this.direction.dot(Jc),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ji.subVectors(this.origin,e);const l=a*this.direction.dot(ka.crossVectors(ji,ka));if(l<0)return null;const c=a*this.direction.dot(Zc.cross(ji));if(c<0||l+c>o)return null;const u=-a*ji.dot(Jc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,s,r,o,a,l,c,u,f,h,d,m,_,g){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,f,h,d,m,_,g)}set(e,t,i,s,r,o,a,l,c,u,f,h,d,m,_,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gr.setFromMatrixColumn(e,0).length(),r=1/gr.setFromMatrixColumn(e,1).length(),o=1/gr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=o*u,d=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+m*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,m=c*u,_=c*f;t[0]=h+_*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,m=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,m=a*u,_=a*f;t[0]=l*u,t[4]=m*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+m,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,m=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nb,e,Db)}lookAt(e,t,i){const s=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Yi.crossVectors(i,bn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Yi.crossVectors(i,bn)),Yi.normalize(),Ha.crossVectors(bn,Yi),s[0]=Yi.x,s[4]=Ha.x,s[8]=bn.x,s[1]=Yi.y,s[5]=Ha.y,s[9]=bn.y,s[2]=Yi.z,s[6]=Ha.z,s[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],m=i[2],_=i[6],g=i[10],p=i[14],T=i[3],x=i[7],v=i[11],w=i[15],R=s[0],C=s[4],L=s[8],M=s[12],S=s[1],P=s[5],N=s[9],D=s[13],G=s[2],$=s[6],F=s[10],Q=s[14],O=s[3],ce=s[7],pe=s[11],Ee=s[15];return r[0]=o*R+a*S+l*G+c*O,r[4]=o*C+a*P+l*$+c*ce,r[8]=o*L+a*N+l*F+c*pe,r[12]=o*M+a*D+l*Q+c*Ee,r[1]=u*R+f*S+h*G+d*O,r[5]=u*C+f*P+h*$+d*ce,r[9]=u*L+f*N+h*F+d*pe,r[13]=u*M+f*D+h*Q+d*Ee,r[2]=m*R+_*S+g*G+p*O,r[6]=m*C+_*P+g*$+p*ce,r[10]=m*L+_*N+g*F+p*pe,r[14]=m*M+_*D+g*Q+p*Ee,r[3]=T*R+x*S+v*G+w*O,r[7]=T*C+x*P+v*$+w*ce,r[11]=T*L+x*N+v*F+w*pe,r[15]=T*M+x*D+v*Q+w*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*f-s*c*f-r*a*h+i*c*h+s*a*d-i*l*d)+_*(+t*l*d-t*c*h+r*o*h-s*o*d+s*c*u-r*l*u)+g*(+t*c*f-t*a*d-r*o*f+i*o*d+r*a*u-i*c*u)+p*(-s*a*u-t*l*f+t*a*h+s*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],_=e[13],g=e[14],p=e[15],T=f*g*c-_*h*c+_*l*d-a*g*d-f*l*p+a*h*p,x=m*h*c-u*g*c-m*l*d+o*g*d+u*l*p-o*h*p,v=u*_*c-m*f*c+m*a*d-o*_*d-u*a*p+o*f*p,w=m*f*l-u*_*l-m*a*h+o*_*h+u*a*g-o*f*g,R=t*T+i*x+s*v+r*w;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(_*h*r-f*g*r-_*s*d+i*g*d+f*s*p-i*h*p)*C,e[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*C,e[3]=(f*l*r-a*h*r-f*s*c+i*h*c+a*s*d-i*l*d)*C,e[4]=x*C,e[5]=(u*g*r-m*h*r+m*s*d-t*g*d-u*s*p+t*h*p)*C,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*C,e[7]=(o*h*r-u*l*r+u*s*c-t*h*c-o*s*d+t*l*d)*C,e[8]=v*C,e[9]=(m*f*r-u*_*r-m*i*d+t*_*d+u*i*p-t*f*p)*C,e[10]=(o*_*r-m*a*r+m*i*c-t*_*c-o*i*p+t*a*p)*C,e[11]=(u*a*r-o*f*r-u*i*c+t*f*c+o*i*d-t*a*d)*C,e[12]=w*C,e[13]=(u*_*s-m*f*s+m*i*h-t*_*h-u*i*g+t*f*g)*C,e[14]=(m*a*s-o*_*s-m*i*l+t*_*l+o*i*g-t*a*g)*C,e[15]=(o*f*s-u*a*s+u*i*l-t*f*l-o*i*h+t*a*h)*C,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,m=r*f,_=o*u,g=o*f,p=a*f,T=l*c,x=l*u,v=l*f,w=i.x,R=i.y,C=i.z;return s[0]=(1-(_+p))*w,s[1]=(d+v)*w,s[2]=(m-x)*w,s[3]=0,s[4]=(d-v)*R,s[5]=(1-(h+p))*R,s[6]=(g+T)*R,s[7]=0,s[8]=(m+x)*C,s[9]=(g-T)*C,s[10]=(1-(h+_))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gr.set(s[0],s[1],s[2]).length();const o=gr.set(s[4],s[5],s[6]).length(),a=gr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);const c=1/r,u=1/o,f=1/a;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=u,$n.elements[5]*=u,$n.elements[6]*=u,$n.elements[8]*=f,$n.elements[9]*=f,$n.elements[10]*=f,t.setFromRotationMatrix($n),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=Di){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),f=(t+e)/(t-e),h=(i+s)/(i-s);let d,m;if(a===Di)d=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Yl)d=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=Di){const l=this.elements,c=1/(t-e),u=1/(i-s),f=1/(o-r),h=(t+e)*c,d=(i+s)*u;let m,_;if(a===Di)m=(o+r)*f,_=-2*f;else if(a===Yl)m=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gr=new V,$n=new qe,Nb=new V(0,0,0),Db=new V(1,1,1),Yi=new V,Ha=new V,bn=new V,Ip=new qe,Lp=new Ts;class fi{constructor(e=0,t=0,i=0,s=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ub=0;const Np=new V,_r=new Ts,Mi=new qe,Va=new V,Mo=new V,Ob=new V,Fb=new Ts,Dp=new V(1,0,0),Up=new V(0,1,0),Op=new V(0,0,1),Fp={type:"added"},Bb={type:"removed"},vr={type:"childadded",child:null},Qc={type:"childremoved",child:null};class bt extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ub++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new V,t=new fi,i=new Ts,s=new V(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Xe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,t){return _r.setFromAxisAngle(e,t),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Up,e)}rotateZ(e){return this.rotateOnAxis(Op,e)}translateOnAxis(e,t){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Up,e)}translateZ(e){return this.translateOnAxis(Op,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Va.copy(e):Va.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Mo,Va,this.up):Mi.lookAt(Va,Mo,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),_r.setFromRotationMatrix(Mi),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),vr.child=e,this.dispatchEvent(vr),vr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bb),Qc.child=e,this.dispatchEvent(Qc),Qc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),vr.child=e,this.dispatchEvent(vr),vr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,Ob),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,Fb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}bt.DEFAULT_UP=new V(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jn=new V,Ei=new V,eu=new V,Ti=new V,xr=new V,yr=new V,Bp=new V,tu=new V,nu=new V,iu=new V,su=new at,ru=new at,ou=new at;class Jn{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),jn.subVectors(e,t),s.cross(jn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){jn.subVectors(s,t),Ei.subVectors(i,t),eu.subVectors(e,t);const o=jn.dot(jn),a=jn.dot(Ei),l=jn.dot(eu),c=Ei.dot(Ei),u=Ei.dot(eu),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,m=(o*u-a*l)*h;return r.set(1-d-m,m,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return su.setScalar(0),ru.setScalar(0),ou.setScalar(0),su.fromBufferAttribute(e,t),ru.fromBufferAttribute(e,i),ou.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(su,r.x),o.addScaledVector(ru,r.y),o.addScaledVector(ou,r.z),o}static isFrontFacing(e,t,i,s){return jn.subVectors(i,t),Ei.subVectors(e,t),jn.cross(Ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),jn.cross(Ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return Jn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return Jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xr.subVectors(s,i),yr.subVectors(r,i),tu.subVectors(e,i);const l=xr.dot(tu),c=yr.dot(tu);if(l<=0&&c<=0)return t.copy(i);nu.subVectors(e,s);const u=xr.dot(nu),f=yr.dot(nu);if(u>=0&&f<=u)return t.copy(s);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xr,o);iu.subVectors(e,r);const d=xr.dot(iu),m=yr.dot(iu);if(m>=0&&d<=m)return t.copy(r);const _=d*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(yr,a);const g=u*m-d*f;if(g<=0&&f-u>=0&&d-m>=0)return Bp.subVectors(r,s),a=(f-u)/(f-u+(d-m)),t.copy(s).addScaledVector(Bp,a);const p=1/(g+_+h);return o=_*p,a=h*p,t.copy(i).addScaledVector(xr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},za={h:0,s:0,l:0};function au(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=Xh(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=au(o,r,e+1/3),this.g=au(o,r,e),this.b=au(o,r,e-1/3)}return tt.toWorkingColorSpace(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const i=J0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return tt.fromWorkingColorSpace(Jt.copy(this),e),Math.round($e(Jt.r*255,0,255))*65536+Math.round($e(Jt.g*255,0,255))*256+Math.round($e(Jt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Jt.copy(this),t);const i=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Kt){tt.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,i=Jt.g,s=Jt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(za);const i=Go(Zi.h,za.h,t),s=Go(Zi.s,za.s,t),r=Go(Zi.l,za.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new He;He.NAMES=J0;let kb=0;class ci extends uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kb++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Br,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=Hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fr,this.stencilZFail=fr,this.stencilZPass=fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ef&&(i.blendSrc=this.blendSrc),this.blendDst!==tf&&(i.blendDst=this.blendDst),this.blendEquation!==Hs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ls extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=D0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new V,Ga=new nt;let Hb=0;class pn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Hb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=kf,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ga.fromBufferAttribute(this,t),Ga.applyMatrix3(e),this.setXY(t,Ga.x,Ga.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==kf&&(e.usage=this.usage),e}}class Q0 extends pn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ev extends pn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Fi extends pn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vb=0;const Fn=new qe,lu=new bt,Sr=new V,An=new hi,Eo=new hi,zt=new V;class pi extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?ev:Q0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return lu.lookAt(e),lu.updateMatrix(),this.applyMatrix4(lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sr).negate(),this.translate(Sr.x,Sr.y,Sr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];An.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Eo.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(An.min,Eo.min),An.expandByPoint(zt),zt.addVectors(An.max,Eo.max),An.expandByPoint(zt)):(An.expandByPoint(Eo.min),An.expandByPoint(Eo.max))}An.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(Sr.fromBufferAttribute(e,c),zt.add(Sr)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new V,l[L]=new V;const c=new V,u=new V,f=new V,h=new nt,d=new nt,m=new nt,_=new V,g=new V;function p(L,M,S){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(r,L),d.fromBufferAttribute(r,M),m.fromBufferAttribute(r,S),u.sub(c),f.sub(c),d.sub(h),m.sub(h);const P=1/(d.x*m.y-m.x*d.y);isFinite(P)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(P),g.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(P),a[L].add(_),a[M].add(_),a[S].add(_),l[L].add(g),l[M].add(g),l[S].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,M=T.length;L<M;++L){const S=T[L],P=S.start,N=S.count;for(let D=P,G=P+N;D<G;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new V,v=new V,w=new V,R=new V;function C(L){w.fromBufferAttribute(s,L),R.copy(w);const M=a[L];x.copy(M),x.sub(w.multiplyScalar(w.dot(M))).normalize(),v.crossVectors(R,M);const P=v.dot(l[L])<0?-1:1;o.setXYZW(L,x.x,x.y,x.z,P)}for(let L=0,M=T.length;L<M;++L){const S=T[L],P=S.start,N=S.count;for(let D=P,G=P+N;D<G;D+=3)C(e.getX(D+0)),C(e.getX(D+1)),C(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,u=new V,f=new V;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(u),l.add(u),c.add(u),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let p=0;p<u;p++)h[m++]=c[d++]}return new pn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new qe,Is=new Tc,Wa=new di,Hp=new V,Xa=new V,qa=new V,Ka=new V,cu=new V,$a=new V,Vp=new V,ja=new V;class Pn extends bt{constructor(e=new pi,t=new ls){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){$a.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(cu.fromBufferAttribute(f,e),o?$a.addScaledVector(cu,u):$a.addScaledVector(cu.sub(t),u))}t.add($a)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Is.copy(e.ray).recast(e.near),!(Wa.containsPoint(Is.origin)===!1&&(Is.intersectSphere(Wa,Hp)===null||Is.origin.distanceToSquared(Hp)>(e.far-e.near)**2))&&(kp.copy(r).invert(),Is.copy(e.ray).applyMatrix4(kp),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],T=Math.max(g.start,d.start),x=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let v=T,w=x;v<w;v+=3){const R=a.getX(v),C=a.getX(v+1),L=a.getX(v+2);s=Ya(this,p,e,i,c,u,f,R,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const T=a.getX(g),x=a.getX(g+1),v=a.getX(g+2);s=Ya(this,o,e,i,c,u,f,T,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){const g=h[m],p=o[g.materialIndex],T=Math.max(g.start,d.start),x=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=T,w=x;v<w;v+=3){const R=v,C=v+1,L=v+2;s=Ya(this,p,e,i,c,u,f,R,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let g=m,p=_;g<p;g+=3){const T=g,x=g+1,v=g+2;s=Ya(this,o,e,i,c,u,f,T,x,v),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function zb(n,e,t,i,s,r,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;ja.copy(a),ja.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ja);return c<t.near||c>t.far?null:{distance:c,point:ja.clone(),object:n}}function Ya(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Xa),n.getVertexPosition(l,qa),n.getVertexPosition(c,Ka);const u=zb(n,e,t,i,Xa,qa,Ka,Vp);if(u){const f=new V;Jn.getBarycoord(Vp,Xa,qa,Ka,f),s&&(u.uv=Jn.getInterpolatedAttribute(s,a,l,c,f,new nt)),r&&(u.uv1=Jn.getInterpolatedAttribute(r,a,l,c,f,new nt)),o&&(u.normal=Jn.getInterpolatedAttribute(o,a,l,c,f,new V),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new V,materialIndex:0};Jn.getNormal(Xa,qa,Ka,h.normal),u.face=h,u.barycoord=f}return u}class va extends pi{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Fi(c,3)),this.setAttribute("normal",new Fi(u,3)),this.setAttribute("uv",new Fi(f,2));function m(_,g,p,T,x,v,w,R,C,L,M){const S=v/C,P=w/L,N=v/2,D=w/2,G=R/2,$=C+1,F=L+1;let Q=0,O=0;const ce=new V;for(let pe=0;pe<F;pe++){const Ee=pe*P-D;for(let Ue=0;Ue<$;Ue++){const lt=Ue*S-N;ce[_]=lt*T,ce[g]=Ee*x,ce[p]=G,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[g]=0,ce[p]=R>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Ue/C),f.push(1-pe/L),Q+=1}}for(let pe=0;pe<L;pe++)for(let Ee=0;Ee<C;Ee++){const Ue=h+Ee+$*pe,lt=h+Ee+$*(pe+1),ne=h+(Ee+1)+$*(pe+1),he=h+(Ee+1)+$*pe;l.push(Ue,lt,he),l.push(lt,ne,he),O+=6}a.addGroup(d,O,M),d+=O,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=io(n[t]);for(const s in i)e[s]=i[s]}return e}function Gb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function tv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Wb={clone:io,merge:ln};var Xb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=Gb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nv extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new V,zp=new nt,Gp=new nt;class hn extends nv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,zp,Gp),t.subVectors(Gp,zp)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mr=-90,Er=1;class Kb extends bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new hn(Mr,Er,e,t);s.layers=this.layers,this.add(s);const r=new hn(Mr,Er,e,t);r.layers=this.layers,this.add(r);const o=new hn(Mr,Er,e,t);o.layers=this.layers,this.add(o);const a=new hn(Mr,Er,e,t);a.layers=this.layers,this.add(a);const l=new hn(Mr,Er,e,t);l.layers=this.layers,this.add(l);const c=new hn(Mr,Er,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Di)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class iv extends Wt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $b extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new iv(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new va(5,5,5),r=new ys({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:ms});r.uniforms.tEquirect.value=t;const o=new Pn(s,r),a=t.minFilter;return t.minFilter===Ni&&(t.minFilter=Cn),new Kb(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}class Ws extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jb={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;c.inputState.pinching&&h>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Yb extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=kf,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const on=new V;class Kh{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Zn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Kh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wp=new V,Xp=new at,qp=new at,Jb=new V,Kp=new qe,Za=new V,fu=new di,$p=new qe,hu=new Tc;class Qb extends Pn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=yp,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new hi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Za),this.boundingBox.expandByPoint(Za)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new di),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Za),this.boundingSphere.expandByPoint(Za)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fu.copy(this.boundingSphere),fu.applyMatrix4(s),e.ray.intersectsSphere(fu)!==!1&&($p.copy(s).invert(),hu.copy(e.ray).applyMatrix4($p),!(this.boundingBox!==null&&hu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,hu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new at,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===yp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===qT?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Xp.fromBufferAttribute(s.attributes.skinIndex,e),qp.fromBufferAttribute(s.attributes.skinWeight,e),Wp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=qp.getComponent(r);if(o!==0){const a=Xp.getComponent(r);Kp.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(Jb.copy(Wp).applyMatrix4(Kp),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class sv extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rv extends Wt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=dn,u=dn,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jp=new qe,eA=new qe;class $h{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:eA;jp.multiplyMatrices(a,t[r]),jp.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new $h(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new rv(t,e,e,Vn,Qn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new sv),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class Hf extends pn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tr=new qe,Yp=new qe,Ja=[],Zp=new hi,tA=new qe,To=new Pn,bo=new di;class nA extends Pn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,tA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new hi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Tr),Zp.copy(e.boundingBox).applyMatrix4(Tr),this.boundingBox.union(Zp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new di),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Tr),bo.copy(e.boundingSphere).applyMatrix4(Tr),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),e.ray.intersectsSphere(bo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Tr),Yp.multiplyMatrices(i,Tr),To.matrixWorld=Yp,To.raycast(e,Ja);for(let o=0,a=Ja.length;o<a;o++){const l=Ja[o];l.instanceId=r,l.object=this,t.push(l)}Ja.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new rv(new Float32Array(s*this.count),s,this.count,Vh,Qn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const du=new V,iA=new V,sA=new Xe;class Bs{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=du.subVectors(i,t).cross(iA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(du),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sA.getNormalMatrix(e),s=this.coplanarPoint(du).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new di,Qa=new V;class jh{constructor(e=new Bs,t=new Bs,i=new Bs,s=new Bs,r=new Bs,o=new Bs){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Di){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],f=s[6],h=s[7],d=s[8],m=s[9],_=s[10],g=s[11],p=s[12],T=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,h-c,g-d,v-p).normalize(),i[1].setComponents(l+r,h+c,g+d,v+p).normalize(),i[2].setComponents(l+o,h+u,g+m,v+T).normalize(),i[3].setComponents(l-o,h-u,g-m,v-T).normalize(),i[4].setComponents(l-a,h-f,g-_,v-x).normalize(),t===Di)i[5].setComponents(l+a,h+f,g+_,v+x).normalize();else if(t===Yl)i[5].setComponents(a,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Qa.x=s.normal.x>0?e.max.x:e.min.x,Qa.y=s.normal.y>0?e.max.y:e.min.y,Qa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ov extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new V,Jl=new V,Jp=new qe,Ao=new Tc,el=new di,pu=new V,Qp=new V;class Yh extends bt{constructor(e=new pi,t=new ov){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Zl.fromBufferAttribute(t,s-1),Jl.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new Fi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(s),el.radius+=r,e.ray.intersectsSphere(el)===!1)return;Jp.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Jp);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=u.getX(_),T=u.getX(_+1),x=tl(this,e,Ao,l,p,T,_);x&&t.push(x)}if(this.isLineLoop){const _=u.getX(m-1),g=u.getX(d),p=tl(this,e,Ao,l,_,g,m-1);p&&t.push(p)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=d,g=m-1;_<g;_+=c){const p=tl(this,e,Ao,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=tl(this,e,Ao,l,m-1,d,m-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function tl(n,e,t,i,s,r,o){const a=n.geometry.attributes.position;if(Zl.fromBufferAttribute(a,s),Jl.fromBufferAttribute(a,r),t.distanceSqToSegment(Zl,Jl,pu,Qp)>i)return;pu.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(pu);if(!(c<e.near||c>e.far))return{distance:c,point:Qp.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const em=new V,tm=new V;class rA extends Yh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)em.fromBufferAttribute(t,s),tm.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+em.distanceTo(tm);e.setAttribute("lineDistance",new Fi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oA extends Yh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class av extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nm=new qe,Vf=new Tc,nl=new di,il=new V;class aA extends bt{constructor(e=new pi,t=new av){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;nm.copy(s).invert(),Vf.copy(e.ray).applyMatrix4(nm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=h,_=d;m<_;m++){const g=c.getX(m);il.fromBufferAttribute(f,g),im(il,g,l,s,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,_=d;m<_;m++)il.fromBufferAttribute(f,m),im(il,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function im(n,e,t,i,s,r,o){const a=Vf.distanceSqToPoint(n);if(a<t){const l=new V;Vf.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class lv extends Wt{constructor(e,t,i,s,r,o,a,l,c,u=kr){if(u!==kr&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===kr&&(i=er),i===void 0&&u===to&&(i=eo),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class bc extends pi{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,h=t/l,d=[],m=[],_=[],g=[];for(let p=0;p<u;p++){const T=p*h-o;for(let x=0;x<c;x++){const v=x*f-r;m.push(v,-T,0),_.push(0,0,1),g.push(x/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const x=T+c*p,v=T+c*(p+1),w=T+1+c*(p+1),R=T+1+c*p;d.push(x,v,R),d.push(v,w,R)}this.setIndex(d),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(_,3)),this.setAttribute("uv",new Fi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Zh extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mi extends Zh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new nt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class lA extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cA extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function sl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uA(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fA(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function sm(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function cv(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push(...o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class xa{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hA extends xa{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sp,endingEnd:Sp}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mp:r=e,a=2*t-i;break;case Ep:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Mp:o=e,l=2*i-t;break;case Ep:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,p=-h*g+2*h*_-h*m,T=(1+h)*g+(-1.5-2*h)*_+(-.5+h)*m+1,x=(-1-d)*g+(1.5+d)*_+.5*m,v=d*g-d*_;for(let w=0;w!==a;++w)r[w]=p*o[u+w]+T*o[c+w]+x*o[l+w]+v*o[f+w];return r}}class dA extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}}class pA extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sl(t,this.TimeBufferType),this.values=sl(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:sl(e.times,Array),values:sl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new dA(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hA(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case aa:t=this.InterpolantFactoryMethodDiscrete;break;case la:t=this.InterpolantFactoryMethodLinear;break;case Wc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return aa;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Wc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&uA(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wc,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const f=a*i,h=f-i,d=f+i;for(let m=0;m!==i;++m){const _=t[f+m];if(_!==t[h+m]||_!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,h=o*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=la;class fo extends gi{constructor(e,t,i){super(e,t,i)}}fo.prototype.ValueTypeName="bool";fo.prototype.ValueBufferType=Array;fo.prototype.DefaultInterpolation=aa;fo.prototype.InterpolantFactoryMethodLinear=void 0;fo.prototype.InterpolantFactoryMethodSmooth=void 0;class uv extends gi{}uv.prototype.ValueTypeName="color";class so extends gi{}so.prototype.ValueTypeName="number";class mA extends xa{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)Ts.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ro extends gi{InterpolantFactoryMethodLinear(e){return new mA(this.times,this.values,this.getValueSize(),e)}}ro.prototype.ValueTypeName="quaternion";ro.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends gi{constructor(e,t,i){super(e,t,i)}}ho.prototype.ValueTypeName="string";ho.prototype.ValueBufferType=Array;ho.prototype.DefaultInterpolation=aa;ho.prototype.InterpolantFactoryMethodLinear=void 0;ho.prototype.InterpolantFactoryMethodSmooth=void 0;class oo extends gi{}oo.prototype.ValueTypeName="vector";class gA{constructor(e="",t=-1,i=[],s=KT){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=ii(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(vA(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(gi.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=fA(l);l=sm(l,1,u),c=sm(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new so(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const f=u[1];let h=s[f];h||(s[f]=h=[]),h.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,h,d,m,_){if(d.length!==0){const g=[],p=[];cv(d,g,p,m),g.length!==0&&_.push(new f(h,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const h=c[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let _=0;_<h[m].morphTargets.length;_++)d[h[m].morphTargets[_]]=-1;for(const _ in d){const g=[],p=[];for(let T=0;T!==h[m].morphTargets.length;++T){const x=h[m];g.push(x.time),p.push(x.morphTarget===_?1:0)}s.push(new so(".morphTargetInfluence["+_+"]",g,p))}l=d.length*o}else{const d=".bones["+t[f].name+"]";i(oo,d+".position",h,"pos",s),i(ro,d+".quaternion",h,"rot",s),i(oo,d+".scale",h,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function _A(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return so;case"vector":case"vector2":case"vector3":case"vector4":return oo;case"color":return uv;case"quaternion":return ro;case"bool":case"boolean":return fo;case"string":return ho}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function vA(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=_A(n.type);if(n.times===void 0){const t=[],i=[];cv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const cs={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class xA{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],m=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const yA=new xA;class po{constructor(e){this.manager=e!==void 0?e:yA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}po.DEFAULT_MATERIAL_NAME="__DEFAULT";const bi={};class SA extends Error{constructor(e,t){super(e),this.response=t}}class fv extends po{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=cs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(bi[e]!==void 0){bi[e].push({onLoad:t,onProgress:i,onError:s});return}bi[e]=[],bi[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=bi[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let _=0;const g=new ReadableStream({start(p){T();function T(){f.read().then(({done:x,value:v})=>{if(x)p.close();else{_+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let R=0,C=u.length;R<C;R++){const L=u[R];L.onProgress&&L.onProgress(w)}p.enqueue(v),T()}},x=>{p.error(x)})}}});return new Response(g)}else throw new SA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(m=>d.decode(m))}}}).then(c=>{cs.add(e,c);const u=bi[e];delete bi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=bi[e];if(u===void 0)throw this.manager.itemError(e),c;delete bi[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class MA extends po{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=cs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=ca("img");function l(){u(),cs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(f){u(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class EA extends po{constructor(e){super(e)}load(e,t,i,s){const r=new Wt,o=new MA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Ac extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const mu=new qe,rm=new V,om=new V;class Jh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jh,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rm.setFromMatrixPosition(e.matrixWorld),t.position.copy(rm),om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(om),t.updateMatrixWorld(),mu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class TA extends Jh{constructor(){super(new hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=no*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bA extends Ac{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new TA}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const am=new qe,wo=new V,gu=new V;class AA extends Jh{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new V(1,0,0),new V(-1,0,0),new V(0,0,1),new V(0,0,-1),new V(0,1,0),new V(0,-1,0)],this._cubeUps=[new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,1,0),new V(0,0,1),new V(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(wo),gu.copy(i.position),gu.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(gu),i.updateMatrixWorld(),s.makeTranslation(-wo.x,-wo.y,-wo.z),am.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(am)}}class zf extends Ac{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new AA}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Qh extends nv{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wA extends Jh{constructor(){super(new Qh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RA extends Ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new wA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CA extends Ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wo{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PA extends po{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=cs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return cs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),cs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});cs.add(e,l),r.manager.itemStart(e)}}class IA extends hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const ed="\\[\\]\\.:\\/",LA=new RegExp("["+ed+"]","g"),td="[^"+ed+"]",NA="[^"+ed.replace("\\.","")+"]",DA=/((?:WC+[\/:])*)/.source.replace("WC",td),UA=/(WCOD+)?/.source.replace("WCOD",NA),OA=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",td),FA=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",td),BA=new RegExp("^"+DA+UA+OA+FA+"$"),kA=["material","materials","bones","map"];class HA{constructor(e,t,i){const s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class pt{constructor(e,t,i){this.path=t,this.parsedPath=i||pt.parseTrackName(t),this.node=pt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new pt.Composite(e,t,i):new pt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LA,"")}static parseTrackName(e){const t=BA.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);kA.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=pt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}pt.Composite=HA;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function lm(n,e,t,i){const s=VA(i);switch(t){case H0:return n*e;case z0:return n*e;case G0:return n*e*2;case Vh:return n*e/s.components*s.byteLength;case zh:return n*e/s.components*s.byteLength;case W0:return n*e*2/s.components*s.byteLength;case Gh:return n*e*2/s.components*s.byteLength;case V0:return n*e*3/s.components*s.byteLength;case Vn:return n*e*4/s.components*s.byteLength;case Wh:return n*e*4/s.components*s.byteLength;case _l:case vl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xl:case yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case df:case mf:return Math.max(n,16)*Math.max(e,8)/4;case hf:case pf:return Math.max(n,8)*Math.max(e,8)/2;case gf:case _f:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case bf:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Af:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case wf:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Rf:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cf:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Nf:case Df:return Math.ceil(n/4)*Math.ceil(e/4)*16;case X0:case Uf:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Of:case Ff:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function VA(n){switch(n){case zi:case F0:return{byteLength:1,components:1};case oa:case B0:case _a:return{byteLength:2,components:1};case kh:case Hh:return{byteLength:2,components:4};case er:case Bh:case Qn:return{byteLength:4,components:1};case k0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hv(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function zA(n){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){const m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){const _=f[d];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var GA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,XA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$A=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,JA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ew=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xw="gl_FragColor = linearToOutputTexel( gl_FragColor );",yw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ew=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Vw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$w=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,a1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,N1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,O1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,V1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,G1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Z1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,aR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_R=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:GA,alphahash_pars_fragment:WA,alphamap_fragment:XA,alphamap_pars_fragment:qA,alphatest_fragment:KA,alphatest_pars_fragment:$A,aomap_fragment:jA,aomap_pars_fragment:YA,batching_pars_vertex:ZA,batching_vertex:JA,begin_vertex:QA,beginnormal_vertex:ew,bsdfs:tw,iridescence_fragment:nw,bumpmap_pars_fragment:iw,clipping_planes_fragment:sw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:ow,clipping_planes_vertex:aw,color_fragment:lw,color_pars_fragment:cw,color_pars_vertex:uw,color_vertex:fw,common:hw,cube_uv_reflection_fragment:dw,defaultnormal_vertex:pw,displacementmap_pars_vertex:mw,displacementmap_vertex:gw,emissivemap_fragment:_w,emissivemap_pars_fragment:vw,colorspace_fragment:xw,colorspace_pars_fragment:yw,envmap_fragment:Sw,envmap_common_pars_fragment:Mw,envmap_pars_fragment:Ew,envmap_pars_vertex:Tw,envmap_physical_pars_fragment:Uw,envmap_vertex:bw,fog_vertex:Aw,fog_pars_vertex:ww,fog_fragment:Rw,fog_pars_fragment:Cw,gradientmap_pars_fragment:Pw,lightmap_pars_fragment:Iw,lights_lambert_fragment:Lw,lights_lambert_pars_fragment:Nw,lights_pars_begin:Dw,lights_toon_fragment:Ow,lights_toon_pars_fragment:Fw,lights_phong_fragment:Bw,lights_phong_pars_fragment:kw,lights_physical_fragment:Hw,lights_physical_pars_fragment:Vw,lights_fragment_begin:zw,lights_fragment_maps:Gw,lights_fragment_end:Ww,logdepthbuf_fragment:Xw,logdepthbuf_pars_fragment:qw,logdepthbuf_pars_vertex:Kw,logdepthbuf_vertex:$w,map_fragment:jw,map_pars_fragment:Yw,map_particle_fragment:Zw,map_particle_pars_fragment:Jw,metalnessmap_fragment:Qw,metalnessmap_pars_fragment:e1,morphinstance_vertex:t1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:s1,morphtarget_vertex:r1,normal_fragment_begin:o1,normal_fragment_maps:a1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:u1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:d1,clearcoat_pars_fragment:p1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:_1,premultiplied_alpha_fragment:v1,project_vertex:x1,dithering_fragment:y1,dithering_pars_fragment:S1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:E1,shadowmap_pars_fragment:T1,shadowmap_pars_vertex:b1,shadowmap_vertex:A1,shadowmask_pars_fragment:w1,skinbase_vertex:R1,skinning_pars_vertex:C1,skinning_vertex:P1,skinnormal_vertex:I1,specularmap_fragment:L1,specularmap_pars_fragment:N1,tonemapping_fragment:D1,tonemapping_pars_fragment:U1,transmission_fragment:O1,transmission_pars_fragment:F1,uv_pars_fragment:B1,uv_pars_vertex:k1,uv_vertex:H1,worldpos_vertex:V1,background_vert:z1,background_frag:G1,backgroundCube_vert:W1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:K1,depth_vert:$1,depth_frag:j1,distanceRGBA_vert:Y1,distanceRGBA_frag:Z1,equirect_vert:J1,equirect_frag:Q1,linedashed_vert:eR,linedashed_frag:tR,meshbasic_vert:nR,meshbasic_frag:iR,meshlambert_vert:sR,meshlambert_frag:rR,meshmatcap_vert:oR,meshmatcap_frag:aR,meshnormal_vert:lR,meshnormal_frag:cR,meshphong_vert:uR,meshphong_frag:fR,meshphysical_vert:hR,meshphysical_frag:dR,meshtoon_vert:pR,meshtoon_frag:mR,points_vert:gR,points_frag:_R,shadow_vert:vR,shadow_frag:xR,sprite_vert:yR,sprite_frag:SR},ge={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ai={basic:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new He(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([ge.points,ge.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([ge.common,ge.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([ge.sprite,ge.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:ln([ge.common,ge.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:ln([ge.lights,ge.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ai.physical={uniforms:ln([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const rl={r:0,b:0,g:0},Ns=new fi,MR=new qe;function ER(n,e,t,i,s,r,o){const a=new He(0);let l=r===!0?0:1,c,u,f=null,h=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function _(x){let v=!1;const w=m(x);w===null?p(a,l):w&&w.isColor&&(p(w,1),v=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(x,v){const w=m(v);w&&(w.isCubeTexture||w.mapping===Ec)?(u===void 0&&(u=new Pn(new va(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:io(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ns.copy(v.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(MR.makeRotationFromEuler(Ns)),u.material.toneMapped=tt.getTransfer(w.colorSpace)!==gt,(f!==w||h!==w.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Pn(new bc(2,2),new ys({name:"BackgroundMaterial",uniforms:io(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(w.colorSpace)!==gt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=w,h=w.version,d=n.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,v){x.getRGB(rl,tv(n)),i.buffers.color.setClear(rl.r,rl.g,rl.b,v,o)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:_,addToRenderList:g,dispose:T}}function TR(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,o=!1;function a(S,P,N,D,G){let $=!1;const F=f(D,N,P);r!==F&&(r=F,c(r.object)),$=d(S,D,N,G),$&&m(S,D,N,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(S,P,N,D),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,P,N){const D=N.wireframe===!0;let G=i[S.id];G===void 0&&(G={},i[S.id]=G);let $=G[P.id];$===void 0&&($={},G[P.id]=$);let F=$[D];return F===void 0&&(F=h(l()),$[D]=F),F}function h(S){const P=[],N=[],D=[];for(let G=0;G<t;G++)P[G]=0,N[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:D,object:S,attributes:{},index:null}}function d(S,P,N,D){const G=r.attributes,$=P.attributes;let F=0;const Q=N.getAttributes();for(const O in Q)if(Q[O].location>=0){const pe=G[O];let Ee=$[O];if(Ee===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),pe===void 0||pe.attribute!==Ee||Ee&&pe.data!==Ee.data)return!0;F++}return r.attributesNum!==F||r.index!==D}function m(S,P,N,D){const G={},$=P.attributes;let F=0;const Q=N.getAttributes();for(const O in Q)if(Q[O].location>=0){let pe=$[O];pe===void 0&&(O==="instanceMatrix"&&S.instanceMatrix&&(pe=S.instanceMatrix),O==="instanceColor"&&S.instanceColor&&(pe=S.instanceColor));const Ee={};Ee.attribute=pe,pe&&pe.data&&(Ee.data=pe.data),G[O]=Ee,F++}r.attributes=G,r.attributesNum=F,r.index=D}function _(){const S=r.newAttributes;for(let P=0,N=S.length;P<N;P++)S[P]=0}function g(S){p(S,0)}function p(S,P){const N=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;N[S]=1,D[S]===0&&(n.enableVertexAttribArray(S),D[S]=1),G[S]!==P&&(n.vertexAttribDivisor(S,P),G[S]=P)}function T(){const S=r.newAttributes,P=r.enabledAttributes;for(let N=0,D=P.length;N<D;N++)P[N]!==S[N]&&(n.disableVertexAttribArray(N),P[N]=0)}function x(S,P,N,D,G,$,F){F===!0?n.vertexAttribIPointer(S,P,N,G,$):n.vertexAttribPointer(S,P,N,D,G,$)}function v(S,P,N,D){_();const G=D.attributes,$=N.getAttributes(),F=P.defaultAttributeValues;for(const Q in $){const O=$[Q];if(O.location>=0){let ce=G[Q];if(ce===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(ce=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(ce=S.instanceColor)),ce!==void 0){const pe=ce.normalized,Ee=ce.itemSize,Ue=e.get(ce);if(Ue===void 0)continue;const lt=Ue.buffer,ne=Ue.type,he=Ue.bytesPerElement,Te=ne===n.INT||ne===n.UNSIGNED_INT||ce.gpuType===Bh;if(ce.isInterleavedBufferAttribute){const de=ce.data,Ce=de.stride,Je=ce.offset;if(de.isInstancedInterleavedBuffer){for(let Re=0;Re<O.locationSize;Re++)p(O.location+Re,de.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Re=0;Re<O.locationSize;Re++)g(O.location+Re);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let Re=0;Re<O.locationSize;Re++)x(O.location+Re,Ee/O.locationSize,ne,pe,Ce*he,(Je+Ee/O.locationSize*Re)*he,Te)}else{if(ce.isInstancedBufferAttribute){for(let de=0;de<O.locationSize;de++)p(O.location+de,ce.meshPerAttribute);S.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let de=0;de<O.locationSize;de++)g(O.location+de);n.bindBuffer(n.ARRAY_BUFFER,lt);for(let de=0;de<O.locationSize;de++)x(O.location+de,Ee/O.locationSize,ne,pe,Ee*he,Ee/O.locationSize*de*he,Te)}}else if(F!==void 0){const pe=F[Q];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(O.location,pe);break;case 3:n.vertexAttrib3fv(O.location,pe);break;case 4:n.vertexAttrib4fv(O.location,pe);break;default:n.vertexAttrib1fv(O.location,pe)}}}}T()}function w(){L();for(const S in i){const P=i[S];for(const N in P){const D=P[N];for(const G in D)u(D[G].object),delete D[G];delete P[N]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const N in P){const D=P[N];for(const G in D)u(D[G].object),delete D[G];delete P[N]}delete i[S.id]}function C(S){for(const P in i){const N=i[P];if(N[S.id]===void 0)continue;const D=N[S.id];for(const G in D)u(D[G].object),delete D[G];delete N[S.id]}}function L(){M(),o=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:M,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function bR(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let d=0;for(let m=0;m<f;m++)d+=u[m];t.update(d,i,1)}function l(c,u,f,h){if(f===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],h[m]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let m=0;for(let _=0;_<f;_++)m+=u[_]*h[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function AR(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const L=C===_a&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==zi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Qn&&!L)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:w,maxSamples:R}}function wR(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Bs,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=n.get(f);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{const T=r?0:i,x=T*4;let v=p.clippingState||null;l.value=v,v=u(m,h,x,d);for(let w=0;w!==x;++w)v[w]=t[w];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,m){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,m!==!0||g===null){const p=d+_*4,T=h.matrixWorldInverse;a.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let x=0,v=d;x!==_;++x,v+=4)o.copy(f[x]).applyMatrix4(T,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function RR(n){let e=new WeakMap;function t(o,a){return a===uf?o.mapping=Zr:a===ff&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uf||a===ff)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new $b(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Cr=4,cm=[.125,.215,.35,.446,.526,.582],Vs=20,_u=new Qh,um=new He;let vu=null,xu=0,yu=0,Su=!1;const ks=(1+Math.sqrt(5))/2,br=1/ks,fm=[new V(-ks,br,0),new V(ks,br,0),new V(-br,0,ks),new V(br,0,ks),new V(0,ks,-br),new V(0,ks,br),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],CR=new V;class hm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){const{size:o=256,position:a=CR}=r;vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,xu,yu),this._renderer.xr.enabled=Su,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),xu=this._renderer.getActiveCubeFace(),yu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:_a,format:Vn,colorSpace:mn,depthBuffer:!1},s=dm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PR(r)),this._blurMaterial=IR(r,e,t)}return s}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,_u)}_sceneToCubeUV(e,t,i,s,r){const l=new hn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(um),f.toneMapping=gs,f.autoClear=!1;const m=new ls({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Pn(new va,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(um),g=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):x===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));const v=this._cubeSize;ol(s,x*v,T>2?v:0,v,v),f.setRenderTarget(s),g&&f.render(_,l),f.render(e,l)}_.geometry.dispose(),_.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Zr||e.mapping===Jr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Pn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ol(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,_u)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=fm[(s-r-1)%fm.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Pn(this._lodPlanes[s],c),h=c.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Vs-1),_=r/m,g=isFinite(r)?1+Math.floor(u*_):Vs;g>Vs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Vs}`);const p=[];let T=0;for(let C=0;C<Vs;++C){const L=C/_,M=Math.exp(-L*L/2);p.push(M),C===0?T+=M:C<g&&(T+=2*M)}for(let C=0;C<p.length;C++)p[C]=p[C]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=p,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-i;const v=this._sizeLods[s],w=3*v*(s>x-Cr?s-x+Cr:0),R=4*(this._cubeSize-v);ol(t,w,R,3*v,2*v),l.setRenderTarget(t),l.render(f,_u)}}function PR(n){const e=[],t=[],i=[];let s=n;const r=n-Cr+1+cm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Cr?l=cm[o-n+Cr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,_=3,g=2,p=1,T=new Float32Array(_*m*d),x=new Float32Array(g*m*d),v=new Float32Array(p*m*d);for(let R=0;R<d;R++){const C=R%3*2/3-1,L=R>2?0:-1,M=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];T.set(M,_*m*R),x.set(h,g*m*R);const S=[R,R,R,R,R,R];v.set(S,p*m*R)}const w=new pi;w.setAttribute("position",new pn(T,_)),w.setAttribute("uv",new pn(x,g)),w.setAttribute("faceIndex",new pn(v,p)),e.push(w),s>Cr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function dm(n,e,t){const i=new tr(n,e,t);return i.texture.mapping=Ec,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ol(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function IR(n,e,t){const i=new Float32Array(Vs),s=new V(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:Vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function pm(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function mm(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ms,depthTest:!1,depthWrite:!1})}function nd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function LR(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uf||l===ff,u=l===Zr||l===Jr;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new hm(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const d=a.image;return c&&d&&d.height>0||u&&d&&s(d)?(t===null&&(t=new hm(n)),f=c?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Fs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function DR(n,e,t,i){const s={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];const d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,m=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let x=0,v=T.length;x<v;x+=3){const w=T[x+0],R=T[x+1],C=T[x+2];h.push(w,R,R,C,C,w)}}else if(m!==void 0){const T=m.array;_=m.version;for(let x=0,v=T.length/3-1;x<v;x+=3){const w=x+0,R=x+1,C=x+2;h.push(w,R,R,C,C,w)}}else return;const g=new(j0(h)?ev:Q0)(h,1);g.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,g)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function UR(n,e,t){let i;function s(h){i=h}let r,o;function a(h){r=h.type,o=h.bytesPerElement}function l(h,d){n.drawElements(i,d,r,h*o),t.update(d,i,1)}function c(h,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,h*o,m),t.update(d,i,m))}function u(h,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,h,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];t.update(g,i,1)}function f(h,d,m,_){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<h.length;p++)c(h[p]/o,d[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,h,0,_,0,m);let p=0;for(let T=0;T<m;T++)p+=d[T]*_[T];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function OR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function FR(n,e,t){const i=new WeakMap,s=new at;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let M=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let x=0;d===!0&&(x=1),m===!0&&(x=2),_===!0&&(x=3);let v=a.attributes.position.count*x,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const R=new Float32Array(v*w*4*f),C=new Y0(R,v,w,f);C.type=Qn,C.needsUpdate=!0;const L=x*4;for(let S=0;S<f;S++){const P=g[S],N=p[S],D=T[S],G=v*w*4*S;for(let $=0;$<P.count;$++){const F=$*L;d===!0&&(s.fromBufferAttribute(P,$),R[G+F+0]=s.x,R[G+F+1]=s.y,R[G+F+2]=s.z,R[G+F+3]=0),m===!0&&(s.fromBufferAttribute(N,$),R[G+F+4]=s.x,R[G+F+5]=s.y,R[G+F+6]=s.z,R[G+F+7]=0),_===!0&&(s.fromBufferAttribute(D,$),R[G+F+8]=s.x,R[G+F+9]=s.y,R[G+F+10]=s.z,R[G+F+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new nt(v,w)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];const m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function BR(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const dv=new Wt,gm=new lv(1,1),pv=new Y0,mv=new Ib,gv=new iv,_m=[],vm=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function mo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=_m[s];if(r===void 0&&(r=new Float32Array(s),_m[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function wc(n,e){let t=vm[e];t===void 0&&(t=new Int32Array(e),vm[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function kR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function HR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function VR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function zR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function GR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Sm.set(i),n.uniformMatrix2fv(this.addr,!1,Sm),Vt(t,i)}}function WR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;ym.set(i),n.uniformMatrix3fv(this.addr,!1,ym),Vt(t,i)}}function XR(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;xm.set(i),n.uniformMatrix4fv(this.addr,!1,xm),Vt(t,i)}}function qR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function KR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function $R(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function jR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function YR(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function JR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function QR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function eC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gm.compareFunction=$0,r=gm):r=dv,t.setTexture2D(e||r,s)}function tC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||mv,s)}function nC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||gv,s)}function iC(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||pv,s)}function sC(n){switch(n){case 5126:return kR;case 35664:return HR;case 35665:return VR;case 35666:return zR;case 35674:return GR;case 35675:return WR;case 35676:return XR;case 5124:case 35670:return qR;case 35667:case 35671:return KR;case 35668:case 35672:return $R;case 35669:case 35673:return jR;case 5125:return YR;case 36294:return ZR;case 36295:return JR;case 36296:return QR;case 35678:case 36198:case 36298:case 36306:case 35682:return eC;case 35679:case 36299:case 36307:return tC;case 35680:case 36300:case 36308:case 36293:return nC;case 36289:case 36303:case 36311:case 36292:return iC}}function rC(n,e){n.uniform1fv(this.addr,e)}function oC(n,e){const t=mo(e,this.size,2);n.uniform2fv(this.addr,t)}function aC(n,e){const t=mo(e,this.size,3);n.uniform3fv(this.addr,t)}function lC(n,e){const t=mo(e,this.size,4);n.uniform4fv(this.addr,t)}function cC(n,e){const t=mo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function uC(n,e){const t=mo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fC(n,e){const t=mo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function hC(n,e){n.uniform1iv(this.addr,e)}function dC(n,e){n.uniform2iv(this.addr,e)}function pC(n,e){n.uniform3iv(this.addr,e)}function mC(n,e){n.uniform4iv(this.addr,e)}function gC(n,e){n.uniform1uiv(this.addr,e)}function _C(n,e){n.uniform2uiv(this.addr,e)}function vC(n,e){n.uniform3uiv(this.addr,e)}function xC(n,e){n.uniform4uiv(this.addr,e)}function yC(n,e,t){const i=this.cache,s=e.length,r=wc(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||dv,r[o])}function SC(n,e,t){const i=this.cache,s=e.length,r=wc(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mv,r[o])}function MC(n,e,t){const i=this.cache,s=e.length,r=wc(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||gv,r[o])}function EC(n,e,t){const i=this.cache,s=e.length,r=wc(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pv,r[o])}function TC(n){switch(n){case 5126:return rC;case 35664:return oC;case 35665:return aC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return fC;case 5124:case 35670:return hC;case 35667:case 35671:return dC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return _C;case 36295:return vC;case 36296:return xC;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return MC;case 36289:case 36303:case 36311:case 36292:return EC}}class bC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sC(t.type)}}class AC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=TC(t.type)}}class wC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const Mu=/(\w+)(\])?(\[|\.)?/g;function Mm(n,e){n.seq.push(e),n.map[e.id]=e}function RC(n,e,t){const i=n.name,s=i.length;for(Mu.lastIndex=0;;){const r=Mu.exec(i),o=Mu.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Mm(t,c===void 0?new bC(a,n,e):new AC(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new wC(a),Mm(t,f)),t=f}}}class Ml{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);RC(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Em(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const CC=37297;let PC=0;function IC(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Tm=new Xe;function LC(n){tt._getMatrix(Tm,tt.workingColorSpace,n);const e=`mat3( ${Tm.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case jl:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function bm(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+IC(n.getShaderSource(e),o)}else return s}function NC(n,e){const t=LC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function DC(n,e){let t;switch(e){case kT:t="Linear";break;case HT:t="Reinhard";break;case VT:t="Cineon";break;case zT:t="ACESFilmic";break;case WT:t="AgX";break;case XT:t="Neutral";break;case GT:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const al=new V;function UC(){tt.getLuminanceCoefficients(al);const n=al.x.toFixed(4),e=al.y.toFixed(4),t=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function OC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function FC(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BC(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function No(n){return n!==""}function Am(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wm(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(n){return n.replace(kC,VC)}const HC=new Map;function VC(n,e){let t=Ke[e];if(t===void 0){const i=HC.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Gf(t)}const zC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(n){return n.replace(zC,GC)}function GC(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cm(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function WC(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===N0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===vT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wi&&(e="SHADOWMAP_TYPE_VSM"),e}function XC(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qC(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function KC(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case D0:e="ENVMAP_BLENDING_MULTIPLY";break;case FT:e="ENVMAP_BLENDING_MIX";break;case BT:e="ENVMAP_BLENDING_ADD";break}return e}function $C(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jC(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=WC(t),c=XC(t),u=qC(t),f=KC(t),h=$C(t),d=OC(t),m=FC(r),_=s.createProgram();let g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(No).join(`
`),p.length>0&&(p+=`
`)):(g=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),p=[Cm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?Ke.tonemapping_pars_fragment:"",t.toneMapping!==gs?DC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,NC("linearToOutputTexel",t.outputColorSpace),UC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),o=Gf(o),o=Am(o,t),o=wm(o,t),a=Gf(a),a=Am(a,t),a=wm(a,t),o=Rm(o),a=Rm(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=T+g+o,v=T+p+a,w=Em(s,s.VERTEX_SHADER,x),R=Em(s,s.FRAGMENT_SHADER,v);s.attachShader(_,w),s.attachShader(_,R),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_).trim(),D=s.getShaderInfoLog(w).trim(),G=s.getShaderInfoLog(R).trim();let $=!0,F=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,R);else{const Q=bm(s,w,"vertex"),O=bm(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Q+`
`+O)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||G==="")&&(F=!1);F&&(P.diagnostics={runnable:$,programLog:N,vertexShader:{log:D,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(w),s.deleteShader(R),L=new Ml(s,_),M=BC(s,_)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,CC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=PC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=R,this}let YC=0;class ZC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new JC(e),t.set(e,i)),i}}class JC{constructor(e){this.id=YC++,this.code=e,this.usedTimes=0}}function QC(n,e,t,i,s,r,o){const a=new Z0,l=new ZC,c=new Set,u=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,P,N,D){const G=N.fog,$=D.geometry,F=M.isMeshStandardMaterial?N.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||F),O=Q&&Q.mapping===Ec?Q.image.height:null,ce=m[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const pe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ee=pe!==void 0?pe.length:0;let Ue=0;$.morphAttributes.position!==void 0&&(Ue=1),$.morphAttributes.normal!==void 0&&(Ue=2),$.morphAttributes.color!==void 0&&(Ue=3);let lt,ne,he,Te;if(ce){const ht=ai[ce];lt=ht.vertexShader,ne=ht.fragmentShader}else lt=M.vertexShader,ne=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Te=l.getFragmentShaderID(M);const de=n.getRenderTarget(),Ce=n.state.buffers.depth.getReversed(),Je=D.isInstancedMesh===!0,Re=D.isBatchedMesh===!0,xt=!!M.map,_t=!!M.matcap,I=!!Q,E=!!M.aoMap,Y=!!M.lightMap,ee=!!M.bumpMap,Z=!!M.normalMap,q=!!M.displacementMap,re=!!M.emissiveMap,J=!!M.metalnessMap,b=!!M.roughnessMap,y=M.anisotropy>0,U=M.clearcoat>0,H=M.dispersion>0,X=M.iridescence>0,W=M.sheen>0,ue=M.transmission>0,oe=y&&!!M.anisotropyMap,le=U&&!!M.clearcoatMap,Fe=U&&!!M.clearcoatNormalMap,se=U&&!!M.clearcoatRoughnessMap,me=X&&!!M.iridescenceMap,we=X&&!!M.iridescenceThicknessMap,Ie=W&&!!M.sheenColorMap,Me=W&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,Le=!!M.specularColorMap,ft=!!M.specularIntensityMap,B=ue&&!!M.transmissionMap,_e=ue&&!!M.thicknessMap,te=!!M.gradientMap,ie=!!M.alphaMap,Se=M.alphaTest>0,ye=!!M.alphaHash,We=!!M.extensions;let At=gs;M.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(At=n.toneMapping);const jt={shaderID:ce,shaderType:M.type,shaderName:M.name,vertexShader:lt,fragmentShader:ne,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Te,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Re,batchingColor:Re&&D._colorsTexture!==null,instancing:Je,instancingColor:Je&&D.instanceColor!==null,instancingMorph:Je&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:mn,alphaToCoverage:!!M.alphaToCoverage,map:xt,matcap:_t,envMap:I,envMapMode:I&&Q.mapping,envMapCubeUVHeight:O,aoMap:E,lightMap:Y,bumpMap:ee,normalMap:Z,displacementMap:h&&q,emissiveMap:re,normalMapObjectSpace:Z&&M.normalMapType===ZT,normalMapTangentSpace:Z&&M.normalMapType===K0,metalnessMap:J,roughnessMap:b,anisotropy:y,anisotropyMap:oe,clearcoat:U,clearcoatMap:le,clearcoatNormalMap:Fe,clearcoatRoughnessMap:se,dispersion:H,iridescence:X,iridescenceMap:me,iridescenceThicknessMap:we,sheen:W,sheenColorMap:Ie,sheenRoughnessMap:Me,specularMap:Oe,specularColorMap:Le,specularIntensityMap:ft,transmission:ue,transmissionMap:B,thicknessMap:_e,gradientMap:te,opaque:M.transparent===!1&&M.blending===Br&&M.alphaToCoverage===!1,alphaMap:ie,alphaTest:Se,alphaHash:ye,combine:M.combine,mapUv:xt&&_(M.map.channel),aoMapUv:E&&_(M.aoMap.channel),lightMapUv:Y&&_(M.lightMap.channel),bumpMapUv:ee&&_(M.bumpMap.channel),normalMapUv:Z&&_(M.normalMap.channel),displacementMapUv:q&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:J&&_(M.metalnessMap.channel),roughnessMapUv:b&&_(M.roughnessMap.channel),anisotropyMapUv:oe&&_(M.anisotropyMap.channel),clearcoatMapUv:le&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Fe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:we&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(M.sheenRoughnessMap.channel),specularMapUv:Oe&&_(M.specularMap.channel),specularColorMapUv:Le&&_(M.specularColorMap.channel),specularIntensityMapUv:ft&&_(M.specularIntensityMap.channel),transmissionMapUv:B&&_(M.transmissionMap.channel),thicknessMapUv:_e&&_(M.thicknessMap.channel),alphaMapUv:ie&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Z||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!$.attributes.uv&&(xt||ie),fog:!!G,useFog:M.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ce,skinning:D.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:At,decodeVideoTexture:xt&&M.map.isVideoTexture===!0&&tt.getTransfer(M.map.colorSpace)===gt,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&tt.getTransfer(M.emissiveMap.colorSpace)===gt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===li,flipSided:M.side===Mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:We&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&M.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return jt.vertexUv1s=c.has(1),jt.vertexUv2s=c.has(2),jt.vertexUv3s=c.has(3),c.clear(),jt}function p(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(T(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=m[M.type];let P;if(S){const N=ai[S];P=Wb.clone(N.uniforms)}else P=M.uniforms;return P}function w(M,S){let P;for(let N=0,D=u.length;N<D;N++){const G=u[N];if(G.cacheKey===S){P=G,++P.usedTimes;break}}return P===void 0&&(P=new jC(n,S,M,r),u.push(P)),P}function R(M){if(--M.usedTimes===0){const S=u.indexOf(M);u[S]=u[u.length-1],u.pop(),M.destroy()}}function C(M){l.remove(M)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:w,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:L}}function eP(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function tP(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Pm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Im(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(f,h,d,m,_,g){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:_,group:g},n[e]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=m,p.renderOrder=f.renderOrder,p.z=_,p.group=g),e++,p}function a(f,h,d,m,_,g){const p=o(f,h,d,m,_,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(f,h,d,m,_,g){const p=o(f,h,d,m,_,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(f,h){t.length>1&&t.sort(f||tP),i.length>1&&i.sort(h||Pm),s.length>1&&s.sort(h||Pm)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function nP(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Im,n.set(i,[o])):s>=r.length?(o=new Im,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function iP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new He};break;case"SpotLight":t={position:new V,direction:new V,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function sP(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let rP=0;function oP(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function aP(n){const e=new iP,t=sP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new qe,o=new qe;function a(c){let u=0,f=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,m=0,_=0,g=0,p=0,T=0,x=0,v=0,w=0,R=0,C=0;c.sort(oP);for(let M=0,S=c.length;M<S;M++){const P=c[M],N=P.color,D=P.intensity,G=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=N.r*D,f+=N.g*D,h+=N.b*D;else if(P.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(P.sh.coefficients[F],D);C++}else if(P.isDirectionalLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,O=t.get(P);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,i.directionalShadow[d]=O,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=P.shadow.matrix,T++}i.directional[d]=F,d++}else if(P.isSpotLight){const F=e.get(P);F.position.setFromMatrixPosition(P.matrixWorld),F.color.copy(N).multiplyScalar(D),F.distance=G,F.coneCos=Math.cos(P.angle),F.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),F.decay=P.decay,i.spot[_]=F;const Q=P.shadow;if(P.map&&(i.spotLightMap[w]=P.map,w++,Q.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[_]=Q.matrix,P.castShadow){const O=t.get(P);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,i.spotShadow[_]=O,i.spotShadowMap[_]=$,v++}_++}else if(P.isRectAreaLight){const F=e.get(P);F.color.copy(N).multiplyScalar(D),F.halfWidth.set(P.width*.5,0,0),F.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=F,g++}else if(P.isPointLight){const F=e.get(P);if(F.color.copy(P.color).multiplyScalar(P.intensity),F.distance=P.distance,F.decay=P.decay,P.castShadow){const Q=P.shadow,O=t.get(P);O.shadowIntensity=Q.intensity,O.shadowBias=Q.bias,O.shadowNormalBias=Q.normalBias,O.shadowRadius=Q.radius,O.shadowMapSize=Q.mapSize,O.shadowCameraNear=Q.camera.near,O.shadowCameraFar=Q.camera.far,i.pointShadow[m]=O,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=P.shadow.matrix,x++}i.point[m]=F,m++}else if(P.isHemisphereLight){const F=e.get(P);F.skyColor.copy(P.color).multiplyScalar(D),F.groundColor.copy(P.groundColor).multiplyScalar(D),i.hemi[p]=F,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==g||L.hemiLength!==p||L.numDirectionalShadows!==T||L.numPointShadows!==x||L.numSpotShadows!==v||L.numSpotMaps!==w||L.numLightProbes!==C)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+w-R,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=g,L.hemiLength=p,L.numDirectionalShadows=T,L.numPointShadows=x,L.numSpotShadows=v,L.numSpotMaps=w,L.numLightProbes=C,i.version=rP++)}function l(c,u){let f=0,h=0,d=0,m=0,_=0;const g=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const x=c[p];if(x.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(x.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const v=i.hemi[_];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Lm(n){const e=new aP(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function lP(n){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Lm(n),e.set(s,[a])):r>=o.length?(a=new Lm(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const cP=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fP(n,e,t){let i=new jh;const s=new nt,r=new nt,o=new at,a=new lA({depthPacking:YT}),l=new cA,c={},u=t.maxTextureSize,f={[Vi]:Mn,[Mn]:Vi,[li]:li},h=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:cP,fragmentShader:uP}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new pi;m.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pn(m,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N0;let p=this.type;this.render=function(R,C,L){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(ms),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=p!==wi&&this.type===wi,G=p===wi&&this.type!==wi;for(let $=0,F=R.length;$<F;$++){const Q=R[$],O=Q.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const ce=O.getFrameExtents();if(s.multiply(ce),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ce.x),s.x=r.x*ce.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ce.y),s.y=r.y*ce.y,O.mapSize.y=r.y)),O.map===null||D===!0||G===!0){const Ee=this.type!==wi?{minFilter:dn,magFilter:dn}:{};O.map!==null&&O.map.dispose(),O.map=new tr(s.x,s.y,Ee),O.map.texture.name=Q.name+".shadowMap",O.camera.updateProjectionMatrix()}n.setRenderTarget(O.map),n.clear();const pe=O.getViewportCount();for(let Ee=0;Ee<pe;Ee++){const Ue=O.getViewport(Ee);o.set(r.x*Ue.x,r.y*Ue.y,r.x*Ue.z,r.y*Ue.w),N.viewport(o),O.updateMatrices(Q,Ee),i=O.getFrustum(),v(C,L,O.camera,Q,this.type)}O.isPointLightShadow!==!0&&this.type===wi&&T(O,L),O.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(M,S,P)};function T(R,C){const L=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,d.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new tr(s.x,s.y)),h.uniforms.shadow_pass.value=R.map.texture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,L,h,_,null),d.uniforms.shadow_pass.value=R.mapPass.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,L,d,_,null)}function x(R,C,L,M){let S=null;const P=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)S=P;else if(S=L.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const N=S.uuid,D=C.uuid;let G=c[N];G===void 0&&(G={},c[N]=G);let $=G[D];$===void 0&&($=S.clone(),G[D]=$,C.addEventListener("dispose",w)),S=$}if(S.visible=C.visible,S.wireframe=C.wireframe,M===wi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=n.properties.get(S);N.light=L}return S}function v(R,C,L,M,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===wi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const D=e.update(R),G=R.material;if(Array.isArray(G)){const $=D.groups;for(let F=0,Q=$.length;F<Q;F++){const O=$[F],ce=G[O.materialIndex];if(ce&&ce.visible){const pe=x(R,ce,M,S);R.onBeforeShadow(n,R,C,L,D,pe,O),n.renderBufferDirect(L,null,D,pe,R,O),R.onAfterShadow(n,R,C,L,D,pe,O)}}}else if(G.visible){const $=x(R,G,M,S);R.onBeforeShadow(n,R,C,L,D,$,null),n.renderBufferDirect(L,null,D,$,R,null),R.onAfterShadow(n,R,C,L,D,$,null)}}const N=R.children;for(let D=0,G=N.length;D<G;D++)v(N[D],C,L,M,S)}function w(R){R.target.removeEventListener("dispose",w);for(const L in c){const M=c[L],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const hP={[nf]:sf,[rf]:lf,[of]:cf,[Yr]:af,[sf]:nf,[lf]:rf,[cf]:of,[af]:Yr};function dP(n,e){function t(){let B=!1;const _e=new at;let te=null;const ie=new at(0,0,0,0);return{setMask:function(Se){te!==Se&&!B&&(n.colorMask(Se,Se,Se,Se),te=Se)},setLocked:function(Se){B=Se},setClear:function(Se,ye,We,At,jt){jt===!0&&(Se*=At,ye*=At,We*=At),_e.set(Se,ye,We,At),ie.equals(_e)===!1&&(n.clearColor(Se,ye,We,At),ie.copy(_e))},reset:function(){B=!1,te=null,ie.set(-1,0,0,0)}}}function i(){let B=!1,_e=!1,te=null,ie=null,Se=null;return{setReversed:function(ye){if(_e!==ye){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);const At=Se;Se=null,this.setClear(At)}_e=ye},getReversed:function(){return _e},setTest:function(ye){ye?de(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(ye){te!==ye&&!B&&(n.depthMask(ye),te=ye)},setFunc:function(ye){if(_e&&(ye=hP[ye]),ie!==ye){switch(ye){case nf:n.depthFunc(n.NEVER);break;case sf:n.depthFunc(n.ALWAYS);break;case rf:n.depthFunc(n.LESS);break;case Yr:n.depthFunc(n.LEQUAL);break;case of:n.depthFunc(n.EQUAL);break;case af:n.depthFunc(n.GEQUAL);break;case lf:n.depthFunc(n.GREATER);break;case cf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ie=ye}},setLocked:function(ye){B=ye},setClear:function(ye){Se!==ye&&(_e&&(ye=1-ye),n.clearDepth(ye),Se=ye)},reset:function(){B=!1,te=null,ie=null,Se=null,_e=!1}}}function s(){let B=!1,_e=null,te=null,ie=null,Se=null,ye=null,We=null,At=null,jt=null;return{setTest:function(ht){B||(ht?de(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(ht){_e!==ht&&!B&&(n.stencilMask(ht),_e=ht)},setFunc:function(ht,Xn,_i){(te!==ht||ie!==Xn||Se!==_i)&&(n.stencilFunc(ht,Xn,_i),te=ht,ie=Xn,Se=_i)},setOp:function(ht,Xn,_i){(ye!==ht||We!==Xn||At!==_i)&&(n.stencilOp(ht,Xn,_i),ye=ht,We=Xn,At=_i)},setLocked:function(ht){B=ht},setClear:function(ht){jt!==ht&&(n.clearStencil(ht),jt=ht)},reset:function(){B=!1,_e=null,te=null,ie=null,Se=null,ye=null,We=null,At=null,jt=null}}}const r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,T=null,x=null,v=null,w=null,R=null,C=new He(0,0,0),L=0,M=!1,S=null,P=null,N=null,D=null,G=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=Q>=1):O.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=Q>=2);let ce=null,pe={};const Ee=n.getParameter(n.SCISSOR_BOX),Ue=n.getParameter(n.VIEWPORT),lt=new at().fromArray(Ee),ne=new at().fromArray(Ue);function he(B,_e,te,ie){const Se=new Uint8Array(4),ye=n.createTexture();n.bindTexture(B,ye),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<te;We++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(_e,0,n.RGBA,1,1,ie,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(_e+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return ye}const Te={};Te[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(Yr),ee(!1),Z(gp),de(n.CULL_FACE),E(ms);function de(B){u[B]!==!0&&(n.enable(B),u[B]=!0)}function Ce(B){u[B]!==!1&&(n.disable(B),u[B]=!1)}function Je(B,_e){return f[B]!==_e?(n.bindFramebuffer(B,_e),f[B]=_e,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=_e),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=_e),!0):!1}function Re(B,_e){let te=d,ie=!1;if(B){te=h.get(_e),te===void 0&&(te=[],h.set(_e,te));const Se=B.textures;if(te.length!==Se.length||te[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,We=Se.length;ye<We;ye++)te[ye]=n.COLOR_ATTACHMENT0+ye;te.length=Se.length,ie=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,ie=!0);ie&&n.drawBuffers(te)}function xt(B){return m!==B?(n.useProgram(B),m=B,!0):!1}const _t={[Hs]:n.FUNC_ADD,[yT]:n.FUNC_SUBTRACT,[ST]:n.FUNC_REVERSE_SUBTRACT};_t[MT]=n.MIN,_t[ET]=n.MAX;const I={[TT]:n.ZERO,[bT]:n.ONE,[AT]:n.SRC_COLOR,[ef]:n.SRC_ALPHA,[LT]:n.SRC_ALPHA_SATURATE,[PT]:n.DST_COLOR,[RT]:n.DST_ALPHA,[wT]:n.ONE_MINUS_SRC_COLOR,[tf]:n.ONE_MINUS_SRC_ALPHA,[IT]:n.ONE_MINUS_DST_COLOR,[CT]:n.ONE_MINUS_DST_ALPHA,[NT]:n.CONSTANT_COLOR,[DT]:n.ONE_MINUS_CONSTANT_COLOR,[UT]:n.CONSTANT_ALPHA,[OT]:n.ONE_MINUS_CONSTANT_ALPHA};function E(B,_e,te,ie,Se,ye,We,At,jt,ht){if(B===ms){_===!0&&(Ce(n.BLEND),_=!1);return}if(_===!1&&(de(n.BLEND),_=!0),B!==xT){if(B!==g||ht!==M){if((p!==Hs||v!==Hs)&&(n.blendEquation(n.FUNC_ADD),p=Hs,v=Hs),ht)switch(B){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _p:n.blendFunc(n.ONE,n.ONE);break;case vp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xp:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case _p:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case vp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case xp:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}T=null,x=null,w=null,R=null,C.set(0,0,0),L=0,g=B,M=ht}return}Se=Se||_e,ye=ye||te,We=We||ie,(_e!==p||Se!==v)&&(n.blendEquationSeparate(_t[_e],_t[Se]),p=_e,v=Se),(te!==T||ie!==x||ye!==w||We!==R)&&(n.blendFuncSeparate(I[te],I[ie],I[ye],I[We]),T=te,x=ie,w=ye,R=We),(At.equals(C)===!1||jt!==L)&&(n.blendColor(At.r,At.g,At.b,jt),C.copy(At),L=jt),g=B,M=!1}function Y(B,_e){B.side===li?Ce(n.CULL_FACE):de(n.CULL_FACE);let te=B.side===Mn;_e&&(te=!te),ee(te),B.blending===Br&&B.transparent===!1?E(ms):E(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);const ie=B.stencilWrite;a.setTest(ie),ie&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),re(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function ee(B){S!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),S=B)}function Z(B){B!==gT?(de(n.CULL_FACE),B!==P&&(B===gp?n.cullFace(n.BACK):B===_T?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),P=B}function q(B){B!==N&&(F&&n.lineWidth(B),N=B)}function re(B,_e,te){B?(de(n.POLYGON_OFFSET_FILL),(D!==_e||G!==te)&&(n.polygonOffset(_e,te),D=_e,G=te)):Ce(n.POLYGON_OFFSET_FILL)}function J(B){B?de(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function b(B){B===void 0&&(B=n.TEXTURE0+$-1),ce!==B&&(n.activeTexture(B),ce=B)}function y(B,_e,te){te===void 0&&(ce===null?te=n.TEXTURE0+$-1:te=ce);let ie=pe[te];ie===void 0&&(ie={type:void 0,texture:void 0},pe[te]=ie),(ie.type!==B||ie.texture!==_e)&&(ce!==te&&(n.activeTexture(te),ce=te),n.bindTexture(B,_e||Te[B]),ie.type=B,ie.texture=_e)}function U(){const B=pe[ce];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function H(){try{n.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{n.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{n.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ue(){try{n.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{n.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{n.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{n.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{n.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ie(B){lt.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),lt.copy(B))}function Me(B){ne.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function Oe(B,_e){let te=c.get(_e);te===void 0&&(te=new WeakMap,c.set(_e,te));let ie=te.get(B);ie===void 0&&(ie=n.getUniformBlockIndex(_e,B.name),te.set(B,ie))}function Le(B,_e){const ie=c.get(_e).get(B);l.get(_e)!==ie&&(n.uniformBlockBinding(_e,ie,B.__bindingPointIndex),l.set(_e,ie))}function ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ce=null,pe={},f={},h=new WeakMap,d=[],m=null,_=!1,g=null,p=null,T=null,x=null,v=null,w=null,R=null,C=new He(0,0,0),L=0,M=!1,S=null,P=null,N=null,D=null,G=null,lt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:de,disable:Ce,bindFramebuffer:Je,drawBuffers:Re,useProgram:xt,setBlending:E,setMaterial:Y,setFlipSided:ee,setCullFace:Z,setLineWidth:q,setPolygonOffset:re,setScissorTest:J,activeTexture:b,bindTexture:y,unbindTexture:U,compressedTexImage2D:H,compressedTexImage3D:X,texImage2D:me,texImage3D:we,updateUBOMapping:Oe,uniformBlockBinding:Le,texStorage2D:Fe,texStorage3D:se,texSubImage2D:W,texSubImage3D:ue,compressedTexSubImage2D:oe,compressedTexSubImage3D:le,scissor:Ie,viewport:Me,reset:ft}}function pP(n,e,t,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,y){return d?new OffscreenCanvas(b,y):ca("canvas")}function _(b,y,U){let H=1;const X=J(b);if((X.width>U||X.height>U)&&(H=U/Math.max(X.width,X.height)),H<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const W=Math.floor(H*X.width),ue=Math.floor(H*X.height);f===void 0&&(f=m(W,ue));const oe=y?m(W,ue):f;return oe.width=W,oe.height=ue,oe.getContext("2d").drawImage(b,0,0,W,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+ue+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){n.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(b,y,U,H,X=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let W=y;if(y===n.RED&&(U===n.FLOAT&&(W=n.R32F),U===n.HALF_FLOAT&&(W=n.R16F),U===n.UNSIGNED_BYTE&&(W=n.R8)),y===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.R8UI),U===n.UNSIGNED_SHORT&&(W=n.R16UI),U===n.UNSIGNED_INT&&(W=n.R32UI),U===n.BYTE&&(W=n.R8I),U===n.SHORT&&(W=n.R16I),U===n.INT&&(W=n.R32I)),y===n.RG&&(U===n.FLOAT&&(W=n.RG32F),U===n.HALF_FLOAT&&(W=n.RG16F),U===n.UNSIGNED_BYTE&&(W=n.RG8)),y===n.RG_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RG8UI),U===n.UNSIGNED_SHORT&&(W=n.RG16UI),U===n.UNSIGNED_INT&&(W=n.RG32UI),U===n.BYTE&&(W=n.RG8I),U===n.SHORT&&(W=n.RG16I),U===n.INT&&(W=n.RG32I)),y===n.RGB_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RGB8UI),U===n.UNSIGNED_SHORT&&(W=n.RGB16UI),U===n.UNSIGNED_INT&&(W=n.RGB32UI),U===n.BYTE&&(W=n.RGB8I),U===n.SHORT&&(W=n.RGB16I),U===n.INT&&(W=n.RGB32I)),y===n.RGBA_INTEGER&&(U===n.UNSIGNED_BYTE&&(W=n.RGBA8UI),U===n.UNSIGNED_SHORT&&(W=n.RGBA16UI),U===n.UNSIGNED_INT&&(W=n.RGBA32UI),U===n.BYTE&&(W=n.RGBA8I),U===n.SHORT&&(W=n.RGBA16I),U===n.INT&&(W=n.RGBA32I)),y===n.RGB&&U===n.UNSIGNED_INT_5_9_9_9_REV&&(W=n.RGB9_E5),y===n.RGBA){const ue=X?jl:tt.getTransfer(H);U===n.FLOAT&&(W=n.RGBA32F),U===n.HALF_FLOAT&&(W=n.RGBA16F),U===n.UNSIGNED_BYTE&&(W=ue===gt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(W=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(W=n.RGB5_A1)}return(W===n.R16F||W===n.R32F||W===n.RG16F||W===n.RG32F||W===n.RGBA16F||W===n.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function v(b,y){let U;return b?y===null||y===er||y===eo?U=n.DEPTH24_STENCIL8:y===Qn?U=n.DEPTH32F_STENCIL8:y===oa&&(U=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===er||y===eo?U=n.DEPTH_COMPONENT24:y===Qn?U=n.DEPTH_COMPONENT32F:y===oa&&(U=n.DEPTH_COMPONENT16),U}function w(b,y){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==dn&&b.minFilter!==Cn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function R(b){const y=b.target;y.removeEventListener("dispose",R),L(y),y.isVideoTexture&&u.delete(y)}function C(b){const y=b.target;y.removeEventListener("dispose",C),S(y)}function L(b){const y=i.get(b);if(y.__webglInit===void 0)return;const U=b.source,H=h.get(U);if(H){const X=H[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(b),Object.keys(H).length===0&&h.delete(U)}i.remove(b)}function M(b){const y=i.get(b);n.deleteTexture(y.__webglTexture);const U=b.source,H=h.get(U);delete H[y.__cacheKey],o.memory.textures--}function S(b){const y=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(y.__webglFramebuffer[H]))for(let X=0;X<y.__webglFramebuffer[H].length;X++)n.deleteFramebuffer(y.__webglFramebuffer[H][X]);else n.deleteFramebuffer(y.__webglFramebuffer[H]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[H])}else{if(Array.isArray(y.__webglFramebuffer))for(let H=0;H<y.__webglFramebuffer.length;H++)n.deleteFramebuffer(y.__webglFramebuffer[H]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let H=0;H<y.__webglColorRenderbuffer.length;H++)y.__webglColorRenderbuffer[H]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[H]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=b.textures;for(let H=0,X=U.length;H<X;H++){const W=i.get(U[H]);W.__webglTexture&&(n.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(U[H])}i.remove(b)}let P=0;function N(){P=0}function D(){const b=P;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),P+=1,b}function G(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function $(b,y){const U=i.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(U,b,y);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+y)}function F(b,y){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ne(U,b,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+y)}function Q(b,y){const U=i.get(b);if(b.version>0&&U.__version!==b.version){ne(U,b,y);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+y)}function O(b,y){const U=i.get(b);if(b.version>0&&U.__version!==b.version){he(U,b,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+y)}const ce={[Qr]:n.REPEAT,[as]:n.CLAMP_TO_EDGE,[$l]:n.MIRRORED_REPEAT},pe={[dn]:n.NEAREST,[O0]:n.NEAREST_MIPMAP_NEAREST,[Lo]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[gl]:n.LINEAR_MIPMAP_NEAREST,[Ni]:n.LINEAR_MIPMAP_LINEAR},Ee={[JT]:n.NEVER,[sb]:n.ALWAYS,[QT]:n.LESS,[$0]:n.LEQUAL,[eb]:n.EQUAL,[ib]:n.GEQUAL,[tb]:n.GREATER,[nb]:n.NOTEQUAL};function Ue(b,y){if(y.type===Qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Cn||y.magFilter===gl||y.magFilter===Lo||y.magFilter===Ni||y.minFilter===Cn||y.minFilter===gl||y.minFilter===Lo||y.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,ce[y.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ce[y.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ce[y.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[y.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[y.minFilter]),y.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ee[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==Lo&&y.minFilter!==Ni||y.type===Qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(b,y){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",R));const H=y.source;let X=h.get(H);X===void 0&&(X={},h.set(H,X));const W=G(y);if(W!==b.__cacheKey){X[W]===void 0&&(X[W]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),X[W].usedTimes++;const ue=X[b.__cacheKey];ue!==void 0&&(X[b.__cacheKey].usedTimes--,ue.usedTimes===0&&M(y)),b.__cacheKey=W,b.__webglTexture=X[W].texture}return U}function ne(b,y,U){let H=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=n.TEXTURE_3D);const X=lt(b,y),W=y.source;t.bindTexture(H,b.__webglTexture,n.TEXTURE0+U);const ue=i.get(W);if(W.version!==ue.__version||X===!0){t.activeTexture(n.TEXTURE0+U);const oe=tt.getPrimaries(tt.workingColorSpace),le=y.colorSpace===os?null:tt.getPrimaries(y.colorSpace),Fe=y.colorSpace===os||oe===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=_(y.image,!1,s.maxTextureSize);se=re(y,se);const me=r.convert(y.format,y.colorSpace),we=r.convert(y.type);let Ie=x(y.internalFormat,me,we,y.colorSpace,y.isVideoTexture);Ue(H,y);let Me;const Oe=y.mipmaps,Le=y.isVideoTexture!==!0,ft=ue.__version===void 0||X===!0,B=W.dataReady,_e=w(y,se);if(y.isDepthTexture)Ie=v(y.format===to,y.type),ft&&(Le?t.texStorage2D(n.TEXTURE_2D,1,Ie,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,me,we,null));else if(y.isDataTexture)if(Oe.length>0){Le&&ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ie,Oe[0].width,Oe[0].height);for(let te=0,ie=Oe.length;te<ie;te++)Me=Oe[te],Le?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,me,we,Me.data):t.texImage2D(n.TEXTURE_2D,te,Ie,Me.width,Me.height,0,me,we,Me.data);y.generateMipmaps=!1}else Le?(ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ie,se.width,se.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,me,we,se.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,se.width,se.height,0,me,we,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Le&&ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ie,Oe[0].width,Oe[0].height,se.depth);for(let te=0,ie=Oe.length;te<ie;te++)if(Me=Oe[te],y.format!==Vn)if(me!==null)if(Le){if(B)if(y.layerUpdates.size>0){const Se=lm(Me.width,Me.height,y.format,y.type);for(const ye of y.layerUpdates){const We=Me.data.subarray(ye*Se/Me.data.BYTES_PER_ELEMENT,(ye+1)*Se/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,ye,Me.width,Me.height,1,me,We)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,se.depth,me,Me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Ie,Me.width,Me.height,se.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Me.width,Me.height,se.depth,me,we,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Ie,Me.width,Me.height,se.depth,0,me,we,Me.data)}else{Le&&ft&&t.texStorage2D(n.TEXTURE_2D,_e,Ie,Oe[0].width,Oe[0].height);for(let te=0,ie=Oe.length;te<ie;te++)Me=Oe[te],y.format!==Vn?me!==null?Le?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,me,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Ie,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Me.width,Me.height,me,we,Me.data):t.texImage2D(n.TEXTURE_2D,te,Ie,Me.width,Me.height,0,me,we,Me.data)}else if(y.isDataArrayTexture)if(Le){if(ft&&t.texStorage3D(n.TEXTURE_2D_ARRAY,_e,Ie,se.width,se.height,se.depth),B)if(y.layerUpdates.size>0){const te=lm(se.width,se.height,y.format,y.type);for(const ie of y.layerUpdates){const Se=se.data.subarray(ie*te/se.data.BYTES_PER_ELEMENT,(ie+1)*te/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ie,se.width,se.height,1,me,we,Se)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,me,we,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,se.width,se.height,se.depth,0,me,we,se.data);else if(y.isData3DTexture)Le?(ft&&t.texStorage3D(n.TEXTURE_3D,_e,Ie,se.width,se.height,se.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,me,we,se.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,se.width,se.height,se.depth,0,me,we,se.data);else if(y.isFramebufferTexture){if(ft)if(Le)t.texStorage2D(n.TEXTURE_2D,_e,Ie,se.width,se.height);else{let te=se.width,ie=se.height;for(let Se=0;Se<_e;Se++)t.texImage2D(n.TEXTURE_2D,Se,Ie,te,ie,0,me,we,null),te>>=1,ie>>=1}}else if(Oe.length>0){if(Le&&ft){const te=J(Oe[0]);t.texStorage2D(n.TEXTURE_2D,_e,Ie,te.width,te.height)}for(let te=0,ie=Oe.length;te<ie;te++)Me=Oe[te],Le?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me,we,Me):t.texImage2D(n.TEXTURE_2D,te,Ie,me,we,Me);y.generateMipmaps=!1}else if(Le){if(ft){const te=J(se);t.texStorage2D(n.TEXTURE_2D,_e,Ie,te.width,te.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,me,we,se)}else t.texImage2D(n.TEXTURE_2D,0,Ie,me,we,se);g(y)&&p(H),ue.__version=W.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function he(b,y,U){if(y.image.length!==6)return;const H=lt(b,y),X=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+U);const W=i.get(X);if(X.version!==W.__version||H===!0){t.activeTexture(n.TEXTURE0+U);const ue=tt.getPrimaries(tt.workingColorSpace),oe=y.colorSpace===os?null:tt.getPrimaries(y.colorSpace),le=y.colorSpace===os||ue===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Fe=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,me=[];for(let ie=0;ie<6;ie++)!Fe&&!se?me[ie]=_(y.image[ie],!0,s.maxCubemapSize):me[ie]=se?y.image[ie].image:y.image[ie],me[ie]=re(y,me[ie]);const we=me[0],Ie=r.convert(y.format,y.colorSpace),Me=r.convert(y.type),Oe=x(y.internalFormat,Ie,Me,y.colorSpace),Le=y.isVideoTexture!==!0,ft=W.__version===void 0||H===!0,B=X.dataReady;let _e=w(y,we);Ue(n.TEXTURE_CUBE_MAP,y);let te;if(Fe){Le&&ft&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Oe,we.width,we.height);for(let ie=0;ie<6;ie++){te=me[ie].mipmaps;for(let Se=0;Se<te.length;Se++){const ye=te[Se];y.format!==Vn?Ie!==null?Le?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,ye.width,ye.height,Ie,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,Oe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,0,0,ye.width,ye.height,Ie,Me,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se,Oe,ye.width,ye.height,0,Ie,Me,ye.data)}}}else{if(te=y.mipmaps,Le&&ft){te.length>0&&_e++;const ie=J(me[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,_e,Oe,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(se){Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,me[ie].width,me[ie].height,Ie,Me,me[ie].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,me[ie].width,me[ie].height,0,Ie,Me,me[ie].data);for(let Se=0;Se<te.length;Se++){const We=te[Se].image[ie].image;Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,We.width,We.height,Ie,Me,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,Oe,We.width,We.height,0,Ie,Me,We.data)}}else{Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ie,Me,me[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Oe,Ie,Me,me[ie]);for(let Se=0;Se<te.length;Se++){const ye=te[Se];Le?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,0,0,Ie,Me,ye.image[ie]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Se+1,Oe,Ie,Me,ye.image[ie])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),W.__version=X.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Te(b,y,U,H,X,W){const ue=r.convert(U.format,U.colorSpace),oe=r.convert(U.type),le=x(U.internalFormat,ue,oe,U.colorSpace),Fe=i.get(y),se=i.get(U);if(se.__renderTarget=y,!Fe.__hasExternalTextures){const me=Math.max(1,y.width>>W),we=Math.max(1,y.height>>W);X===n.TEXTURE_3D||X===n.TEXTURE_2D_ARRAY?t.texImage3D(X,W,le,me,we,y.depth,0,ue,oe,null):t.texImage2D(X,W,le,me,we,0,ue,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,H,X,se.__webglTexture,0,ee(y)):(X===n.TEXTURE_2D||X>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,H,X,se.__webglTexture,W),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(b,y,U){if(n.bindRenderbuffer(n.RENDERBUFFER,b),y.depthBuffer){const H=y.depthTexture,X=H&&H.isDepthTexture?H.type:null,W=v(y.stencilBuffer,X),ue=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=ee(y);Z(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,W,y.width,y.height):U?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,W,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,W,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ue,n.RENDERBUFFER,b)}else{const H=y.textures;for(let X=0;X<H.length;X++){const W=H[X],ue=r.convert(W.format,W.colorSpace),oe=r.convert(W.type),le=x(W.internalFormat,ue,oe,W.colorSpace),Fe=ee(y);U&&Z(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,le,y.width,y.height):Z(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Fe,le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const H=i.get(y.depthTexture);H.__renderTarget=y,(!H.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const X=H.__webglTexture,W=ee(y);if(y.depthTexture.format===kr)Z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,X,0);else if(y.depthTexture.format===to)Z(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0,W):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Je(b){const y=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const H=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",X)};H.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=H}if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Ce(y.__webglFramebuffer,b)}else if(U){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=n.createRenderbuffer(),de(y.__webglDepthbuffer[H],b,!1);else{const X=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[H];n.bindRenderbuffer(n.RENDERBUFFER,W),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,W)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),de(y.__webglDepthbuffer,b,!1);else{const H=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,H,n.RENDERBUFFER,X)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Re(b,y,U){const H=i.get(b);y!==void 0&&Te(H.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Je(b)}function xt(b){const y=b.texture,U=i.get(b),H=i.get(y);b.addEventListener("dispose",C);const X=b.textures,W=b.isWebGLCubeRenderTarget===!0,ue=X.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=y.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[oe]=[];for(let le=0;le<y.mipmaps.length;le++)U.__webglFramebuffer[oe][le]=n.createFramebuffer()}else U.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)U.__webglFramebuffer[oe]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(ue)for(let oe=0,le=X.length;oe<le;oe++){const Fe=i.get(X[oe]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&Z(b)===!1){U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let oe=0;oe<X.length;oe++){const le=X[oe];U.__webglColorRenderbuffer[oe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[oe]);const Fe=r.convert(le.format,le.colorSpace),se=r.convert(le.type),me=x(le.internalFormat,Fe,se,le.colorSpace,b.isXRRenderTarget===!0),we=ee(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,me,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+oe,n.RENDERBUFFER,U.__webglColorRenderbuffer[oe])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),de(U.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(W){t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,y);for(let oe=0;oe<6;oe++)if(y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)Te(U.__webglFramebuffer[oe][le],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,le);else Te(U.__webglFramebuffer[oe],b,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);g(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let oe=0,le=X.length;oe<le;oe++){const Fe=X[oe],se=i.get(Fe);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),Ue(n.TEXTURE_2D,Fe),Te(U.__webglFramebuffer,b,Fe,n.COLOR_ATTACHMENT0+oe,n.TEXTURE_2D,0),g(Fe)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,H.__webglTexture),Ue(oe,y),y.mipmaps&&y.mipmaps.length>0)for(let le=0;le<y.mipmaps.length;le++)Te(U.__webglFramebuffer[le],b,y,n.COLOR_ATTACHMENT0,oe,le);else Te(U.__webglFramebuffer,b,y,n.COLOR_ATTACHMENT0,oe,0);g(y)&&p(oe),t.unbindTexture()}b.depthBuffer&&Je(b)}function _t(b){const y=b.textures;for(let U=0,H=y.length;U<H;U++){const X=y[U];if(g(X)){const W=T(b),ue=i.get(X).__webglTexture;t.bindTexture(W,ue),p(W),t.unbindTexture()}}}const I=[],E=[];function Y(b){if(b.samples>0){if(Z(b)===!1){const y=b.textures,U=b.width,H=b.height;let X=n.COLOR_BUFFER_BIT;const W=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(b),oe=y.length>1;if(oe)for(let le=0;le<y.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let le=0;le<y.length;le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(X|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(X|=n.STENCIL_BUFFER_BIT)),oe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const Fe=i.get(y[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Fe,0)}n.blitFramebuffer(0,0,U,H,0,0,U,H,X,n.NEAREST),l===!0&&(I.length=0,E.length=0,I.push(n.COLOR_ATTACHMENT0+le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(I.push(W),E.push(W),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,E)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,I))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),oe)for(let le=0;le<y.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ue.__webglColorRenderbuffer[le]);const Fe=i.get(y[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Fe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ee(b){return Math.min(s.maxSamples,b.samples)}function Z(b){const y=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(b){const y=o.render.frame;u.get(b)!==y&&(u.set(b,y),b.update())}function re(b,y){const U=b.colorSpace,H=b.format,X=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==mn&&U!==os&&(tt.getTransfer(U)===gt?(H!==Vn||X!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function J(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=Re,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=Je,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Z}function mP(n,e){function t(i,s=os){let r;const o=tt.getTransfer(s);if(i===zi)return n.UNSIGNED_BYTE;if(i===kh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===k0)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===F0)return n.BYTE;if(i===B0)return n.SHORT;if(i===oa)return n.UNSIGNED_SHORT;if(i===Bh)return n.INT;if(i===er)return n.UNSIGNED_INT;if(i===Qn)return n.FLOAT;if(i===_a)return n.HALF_FLOAT;if(i===H0)return n.ALPHA;if(i===V0)return n.RGB;if(i===Vn)return n.RGBA;if(i===z0)return n.LUMINANCE;if(i===G0)return n.LUMINANCE_ALPHA;if(i===kr)return n.DEPTH_COMPONENT;if(i===to)return n.DEPTH_STENCIL;if(i===Vh)return n.RED;if(i===zh)return n.RED_INTEGER;if(i===W0)return n.RG;if(i===Gh)return n.RG_INTEGER;if(i===Wh)return n.RGBA_INTEGER;if(i===_l||i===vl||i===xl||i===yl)if(o===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_l)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===xl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_l)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===xl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hf||i===df||i===pf||i===mf)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===hf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===df)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gf||i===_f||i===vf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gf||i===_f)return o===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===vf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===Tf||i===bf||i===Af||i===wf||i===Rf||i===Cf||i===Pf||i===If||i===Lf)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===xf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===yf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ef)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Tf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Af)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Rf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Pf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lf)return o===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===Nf||i===Df)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sl)return o===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Df)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===X0||i===Uf||i===Of||i===Ff)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Sl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Of)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ff)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const gP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_P=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class vP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new Wt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ys({vertexShader:gP,fragmentShader:_P,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new bc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xP extends uo{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,m=null;const _=new vP,g=t.getContextAttributes();let p=null,T=null;const x=[],v=[],w=new nt;let R=null;const C=new hn;C.viewport=new at;const L=new hn;L.viewport=new at;const M=[C,L],S=new IA;let P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=x[ne];return he===void 0&&(he=new uu,x[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=x[ne];return he===void 0&&(he=new uu,x[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=x[ne];return he===void 0&&(he=new uu,x[ne]=he),he.getHandSpace()};function D(ne){const he=v.indexOf(ne.inputSource);if(he===-1)return;const Te=x[he];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,c||o),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let ne=0;ne<x.length;ne++){const he=v[ne];he!==null&&(v[ne]=null,x[ne].disconnect(he))}P=null,N=null,_.reset(),e.setRenderTarget(p),d=null,h=null,f=null,s=null,T=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(w),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,de=null,Ce=null;g.depth&&(Ce=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=g.stencil?to:kr,de=g.stencil?eo:er);const Je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Je),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new tr(h.textureWidth,h.textureHeight,{format:Vn,type:zi,depthTexture:new lv(h.textureWidth,h.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Te={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new tr(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:zi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ne){for(let he=0;he<ne.removed.length;he++){const Te=ne.removed[he],de=v.indexOf(Te);de>=0&&(v[de]=null,x[de].disconnect(Te))}for(let he=0;he<ne.added.length;he++){const Te=ne.added[he];let de=v.indexOf(Te);if(de===-1){for(let Je=0;Je<x.length;Je++)if(Je>=v.length){v.push(Te),de=Je;break}else if(v[Je]===null){v[Je]=Te,de=Je;break}if(de===-1)break}const Ce=x[de];Ce&&Ce.connect(Te)}}const F=new V,Q=new V;function O(ne,he,Te){F.setFromMatrixPosition(he.matrixWorld),Q.setFromMatrixPosition(Te.matrixWorld);const de=F.distanceTo(Q),Ce=he.projectionMatrix.elements,Je=Te.projectionMatrix.elements,Re=Ce[14]/(Ce[10]-1),xt=Ce[14]/(Ce[10]+1),_t=(Ce[9]+1)/Ce[5],I=(Ce[9]-1)/Ce[5],E=(Ce[8]-1)/Ce[0],Y=(Je[8]+1)/Je[0],ee=Re*E,Z=Re*Y,q=de/(-E+Y),re=q*-E;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(q),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const J=Re+q,b=xt+q,y=ee-re,U=Z+(de-re),H=_t*xt/b*J,X=I*xt/b*J;ne.projectionMatrix.makePerspective(y,U,H,X,J,b),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ce(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let he=ne.near,Te=ne.far;_.texture!==null&&(_.depthNear>0&&(he=_.depthNear),_.depthFar>0&&(Te=_.depthFar)),S.near=L.near=C.near=he,S.far=L.far=C.far=Te,(P!==S.near||N!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,N=S.far),C.layers.mask=ne.layers.mask|2,L.layers.mask=ne.layers.mask|4,S.layers.mask=C.layers.mask|L.layers.mask;const de=ne.parent,Ce=S.cameras;ce(S,de);for(let Je=0;Je<Ce.length;Je++)ce(Ce[Je],de);Ce.length===2?O(S,C,L):S.projectionMatrix.copy(C.projectionMatrix),pe(ne,S,de)};function pe(ne,he,Te){Te===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=no*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(ne){l=ne,h!==null&&(h.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let Ee=null;function Ue(ne,he){if(u=he.getViewerPose(c||o),m=he,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let de=!1;Te.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Re=0;Re<Te.length;Re++){const xt=Te[Re];let _t=null;if(d!==null)_t=d.getViewport(xt);else{const E=f.getViewSubImage(h,xt);_t=E.viewport,Re===0&&(e.setRenderTargetTextures(T,E.colorTexture,h.ignoreDepthValues?void 0:E.depthStencilTexture),e.setRenderTarget(T))}let I=M[Re];I===void 0&&(I=new hn,I.layers.enable(Re),I.viewport=new at,M[Re]=I),I.matrix.fromArray(xt.transform.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale),I.projectionMatrix.fromArray(xt.projectionMatrix),I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),I.viewport.set(_t.x,_t.y,_t.width,_t.height),Re===0&&(S.matrix.copy(I.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(I)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&f){const Re=f.getDepthInformation(Te[0]);Re&&Re.isValid&&Re.texture&&_.init(e,Re,s.renderState)}}for(let Te=0;Te<x.length;Te++){const de=v[Te],Ce=x[Te];de!==null&&Ce!==void 0&&Ce.update(de,he,c||o)}Ee&&Ee(ne,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),m=null}const lt=new hv;lt.setAnimationLoop(Ue),this.setAnimationLoop=function(ne){Ee=ne},this.dispose=function(){}}}const Ds=new fi,yP=new qe;function SP(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,tv(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,x,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),h(g,p),p.isMeshPhysicalMaterial&&d(g,p,v)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,T,x):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Mn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Mn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const T=e.get(p),x=T.envMap,v=T.envMapRotation;x&&(g.envMap.value=x,Ds.copy(v),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),g.envMapRotation.value.setFromMatrix4(yP.makeRotationFromEuler(Ds)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,T,x){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=x*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function h(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function MP(n,e,t,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const v=x.program;i.uniformBlockBinding(T,v)}function c(T,x){let v=s[T.id];v===void 0&&(m(T),v=u(T),s[T.id]=v,T.addEventListener("dispose",g));const w=x.program;i.updateUBOMapping(T,w);const R=e.render.frame;r[T.id]!==R&&(h(T),r[T.id]=R)}function u(T){const x=f();T.__bindingPointIndex=x;const v=n.createBuffer(),w=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,w,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,v),v}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const x=s[T.id],v=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let R=0,C=v.length;R<C;R++){const L=Array.isArray(v[R])?v[R]:[v[R]];for(let M=0,S=L.length;M<S;M++){const P=L[M];if(d(P,R,M,w)===!0){const N=P.__offset,D=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let $=0;$<D.length;$++){const F=D[$],Q=_(F);typeof F=="number"||typeof F=="boolean"?(P.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,N+G,P.__data)):F.isMatrix3?(P.__data[0]=F.elements[0],P.__data[1]=F.elements[1],P.__data[2]=F.elements[2],P.__data[3]=0,P.__data[4]=F.elements[3],P.__data[5]=F.elements[4],P.__data[6]=F.elements[5],P.__data[7]=0,P.__data[8]=F.elements[6],P.__data[9]=F.elements[7],P.__data[10]=F.elements[8],P.__data[11]=0):(F.toArray(P.__data,G),G+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(T,x,v,w){const R=T.value,C=x+"_"+v;if(w[C]===void 0)return typeof R=="number"||typeof R=="boolean"?w[C]=R:w[C]=R.clone(),!0;{const L=w[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return w[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function m(T){const x=T.uniforms;let v=0;const w=16;for(let C=0,L=x.length;C<L;C++){const M=Array.isArray(x[C])?x[C]:[x[C]];for(let S=0,P=M.length;S<P;S++){const N=M[S],D=Array.isArray(N.value)?N.value:[N.value];for(let G=0,$=D.length;G<$;G++){const F=D[G],Q=_(F),O=v%w,ce=O%Q.boundary,pe=O+ce;v+=ce,pe!==0&&w-pe<Q.storage&&(v+=w-pe),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Q.storage}}}const R=v%w;return R>0&&(v+=w-R),T.__size=v,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function g(T){const x=T.target;x.removeEventListener("dispose",g);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function p(){for(const T in s)n.deleteBuffer(s[T]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class EP{constructor(e={}){const{canvas:t=Mb(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const T=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=gs,this.toneMappingExposure=1;const v=this;let w=!1,R=0,C=0,L=null,M=-1,S=null;const P=new at,N=new at;let D=null;const G=new He(0);let $=0,F=t.width,Q=t.height,O=1,ce=null,pe=null;const Ee=new at(0,0,F,Q),Ue=new at(0,0,F,Q);let lt=!1;const ne=new jh;let he=!1,Te=!1;this.transmissionResolutionScale=1;const de=new qe,Ce=new qe,Je=new V,Re=new at,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function I(){return L===null?O:1}let E=i;function Y(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fh}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",ye,!1),E===null){const k="webgl2";if(E=Y(k,A),E===null)throw Y(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ee,Z,q,re,J,b,y,U,H,X,W,ue,oe,le,Fe,se,me,we,Ie,Me,Oe,Le,ft,B;function _e(){ee=new NR(E),ee.init(),Le=new mP(E,ee),Z=new AR(E,ee,e,Le),q=new dP(E,ee),Z.reverseDepthBuffer&&h&&q.buffers.depth.setReversed(!0),re=new OR(E),J=new eP,b=new pP(E,ee,q,J,Z,Le,re),y=new RR(v),U=new LR(v),H=new zA(E),ft=new TR(E,H),X=new DR(E,H,re,ft),W=new BR(E,X,H,re),Ie=new FR(E,Z,b),se=new wR(J),ue=new QC(v,y,U,ee,Z,ft,se),oe=new SP(v,J),le=new nP,Fe=new lP(ee),we=new ER(v,y,U,q,W,d,l),me=new fP(v,W,Z),B=new MP(E,re,Z,q),Me=new bR(E,ee,re),Oe=new UR(E,ee,re),re.programs=ue.programs,v.capabilities=Z,v.extensions=ee,v.properties=J,v.renderLists=le,v.shadowMap=me,v.state=q,v.info=re}_e();const te=new xP(v,E);this.xr=te,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){const A=ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(F,Q,!1))},this.getSize=function(A){return A.set(F,Q)},this.setSize=function(A,k,K=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,Q=k,t.width=Math.floor(A*O),t.height=Math.floor(k*O),K===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(F*O,Q*O).floor()},this.setDrawingBufferSize=function(A,k,K){F=A,Q=k,O=K,t.width=Math.floor(A*K),t.height=Math.floor(k*K),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,k,K,j){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,k,K,j),q.viewport(P.copy(Ee).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(Ue)},this.setScissor=function(A,k,K,j){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,k,K,j),q.scissor(N.copy(Ue).multiplyScalar(O).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(A){q.setScissorTest(lt=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,K=!0){let j=0;if(A){let z=!1;if(L!==null){const fe=L.texture.format;z=fe===Wh||fe===Gh||fe===zh}if(z){const fe=L.texture.type,ve=fe===zi||fe===er||fe===oa||fe===eo||fe===kh||fe===Hh,be=we.getClearColor(),Ae=we.getClearAlpha(),ke=be.r,Ve=be.g,Pe=be.b;ve?(m[0]=ke,m[1]=Ve,m[2]=Pe,m[3]=Ae,E.clearBufferuiv(E.COLOR,0,m)):(_[0]=ke,_[1]=Ve,_[2]=Pe,_[3]=Ae,E.clearBufferiv(E.COLOR,0,_))}else j|=E.COLOR_BUFFER_BIT}k&&(j|=E.DEPTH_BUFFER_BIT),K&&(j|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),we.dispose(),le.dispose(),Fe.dispose(),J.dispose(),y.dispose(),U.dispose(),W.dispose(),ft.dispose(),B.dispose(),ue.dispose(),te.dispose(),te.removeEventListener("sessionstart",sd),te.removeEventListener("sessionend",rd),bs.stop()};function ie(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const A=re.autoReset,k=me.enabled,K=me.autoUpdate,j=me.needsUpdate,z=me.type;_e(),re.autoReset=A,me.enabled=k,me.autoUpdate=K,me.needsUpdate=j,me.type=z}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function We(A){const k=A.target;k.removeEventListener("dispose",We),At(k)}function At(A){jt(A),J.remove(A)}function jt(A){const k=J.get(A).programs;k!==void 0&&(k.forEach(function(K){ue.releaseProgram(K)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,K,j,z,fe){k===null&&(k=xt);const ve=z.isMesh&&z.matrixWorld.determinant()<0,be=xv(A,k,K,j,z);q.setMaterial(j,ve);let Ae=K.index,ke=1;if(j.wireframe===!0){if(Ae=X.getWireframeAttribute(K),Ae===void 0)return;ke=2}const Ve=K.drawRange,Pe=K.attributes.position;let it=Ve.start*ke,ct=(Ve.start+Ve.count)*ke;fe!==null&&(it=Math.max(it,fe.start*ke),ct=Math.min(ct,(fe.start+fe.count)*ke)),Ae!==null?(it=Math.max(it,0),ct=Math.min(ct,Ae.count)):Pe!=null&&(it=Math.max(it,0),ct=Math.min(ct,Pe.count));const It=ct-it;if(It<0||It===1/0)return;ft.setup(z,j,be,K,Ae);let wt,st=Me;if(Ae!==null&&(wt=H.get(Ae),st=Oe,st.setIndex(wt)),z.isMesh)j.wireframe===!0?(q.setLineWidth(j.wireframeLinewidth*I()),st.setMode(E.LINES)):st.setMode(E.TRIANGLES);else if(z.isLine){let Ne=j.linewidth;Ne===void 0&&(Ne=1),q.setLineWidth(Ne*I()),z.isLineSegments?st.setMode(E.LINES):z.isLineLoop?st.setMode(E.LINE_LOOP):st.setMode(E.LINE_STRIP)}else z.isPoints?st.setMode(E.POINTS):z.isSprite&&st.setMode(E.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ne=z._multiDrawStarts,Xt=z._multiDrawCounts,ut=z._multiDrawCount,qn=Ae?H.get(Ae).bytesPerElement:1,ar=J.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<ut;Tn++)ar.setValue(E,"_gl_DrawID",Tn),st.render(Ne[Tn]/qn,Xt[Tn])}else if(z.isInstancedMesh)st.renderInstances(it,It,z.count);else if(K.isInstancedBufferGeometry){const Ne=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Xt=Math.min(K.instanceCount,Ne);st.renderInstances(it,It,Xt)}else st.render(it,It)};function ht(A,k,K){A.transparent===!0&&A.side===li&&A.forceSinglePass===!1?(A.side=Mn,A.needsUpdate=!0,Sa(A,k,K),A.side=Vi,A.needsUpdate=!0,Sa(A,k,K),A.side=li):Sa(A,k,K)}this.compile=function(A,k,K=null){K===null&&(K=A),p=Fe.get(K),p.init(k),x.push(p),K.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==K&&A.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const j=new Set;return A.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const fe=z.material;if(fe)if(Array.isArray(fe))for(let ve=0;ve<fe.length;ve++){const be=fe[ve];ht(be,K,z),j.add(be)}else ht(fe,K,z),j.add(fe)}),p=x.pop(),j},this.compileAsync=function(A,k,K=null){const j=this.compile(A,k,K);return new Promise(z=>{function fe(){if(j.forEach(function(ve){J.get(ve).currentProgram.isReady()&&j.delete(ve)}),j.size===0){z(A);return}setTimeout(fe,10)}ee.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Xn=null;function _i(A){Xn&&Xn(A)}function sd(){bs.stop()}function rd(){bs.start()}const bs=new hv;bs.setAnimationLoop(_i),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(A){Xn=A,te.setAnimationLoop(A),A===null?bs.stop():bs.start()},te.addEventListener("sessionstart",sd),te.addEventListener("sessionend",rd),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,L),p=Fe.get(A,x.length),p.init(k),x.push(p),Ce.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ne.setFromProjectionMatrix(Ce),Te=this.localClippingEnabled,he=se.init(this.clippingPlanes,Te),g=le.get(A,T.length),g.init(),T.push(g),te.enabled===!0&&te.isPresenting===!0){const fe=v.xr.getDepthSensingMesh();fe!==null&&Rc(fe,k,-1/0,v.sortObjects)}Rc(A,k,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(ce,pe),_t=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,_t&&we.addToRenderList(g,A),this.info.render.frame++,he===!0&&se.beginShadows();const K=p.state.shadowsArray;me.render(K,A,k),he===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,z=g.transmissive;if(p.setupLights(),k.isArrayCamera){const fe=k.cameras;if(z.length>0)for(let ve=0,be=fe.length;ve<be;ve++){const Ae=fe[ve];ad(j,z,A,Ae)}_t&&we.render(A);for(let ve=0,be=fe.length;ve<be;ve++){const Ae=fe[ve];od(g,A,Ae,Ae.viewport)}}else z.length>0&&ad(j,z,A,k),_t&&we.render(A),od(g,A,k);L!==null&&C===0&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),A.isScene===!0&&A.onAfterRender(v,A,k),ft.resetDefaultState(),M=-1,S=null,x.pop(),x.length>0?(p=x[x.length-1],he===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?g=T[T.length-1]:g=null};function Rc(A,k,K,j){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)K=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ne.intersectsSprite(A)){j&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ce);const ve=W.update(A),be=A.material;be.visible&&g.push(A,ve,be,K,Re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ne.intersectsObject(A))){const ve=W.update(A),be=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Re.copy(ve.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(Ce)),Array.isArray(be)){const Ae=ve.groups;for(let ke=0,Ve=Ae.length;ke<Ve;ke++){const Pe=Ae[ke],it=be[Pe.materialIndex];it&&it.visible&&g.push(A,ve,it,K,Re.z,Pe)}}else be.visible&&g.push(A,ve,be,K,Re.z,null)}}const fe=A.children;for(let ve=0,be=fe.length;ve<be;ve++)Rc(fe[ve],k,K,j)}function od(A,k,K,j){const z=A.opaque,fe=A.transmissive,ve=A.transparent;p.setupLightsView(K),he===!0&&se.setGlobalState(v.clippingPlanes,K),j&&q.viewport(P.copy(j)),z.length>0&&ya(z,k,K),fe.length>0&&ya(fe,k,K),ve.length>0&&ya(ve,k,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function ad(A,k,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new tr(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?_a:zi,minFilter:Ni,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const fe=p.state.transmissionRenderTarget[j.id],ve=j.viewport||P;fe.setSize(ve.z*v.transmissionResolutionScale,ve.w*v.transmissionResolutionScale);const be=v.getRenderTarget();v.setRenderTarget(fe),v.getClearColor(G),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),_t&&we.render(K);const Ae=v.toneMapping;v.toneMapping=gs;const ke=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),he===!0&&se.setGlobalState(v.clippingPlanes,j),ya(A,K,j),b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Pe=0,it=k.length;Pe<it;Pe++){const ct=k[Pe],It=ct.object,wt=ct.geometry,st=ct.material,Ne=ct.group;if(st.side===li&&It.layers.test(j.layers)){const Xt=st.side;st.side=Mn,st.needsUpdate=!0,ld(It,K,j,wt,st,Ne),st.side=Xt,st.needsUpdate=!0,Ve=!0}}Ve===!0&&(b.updateMultisampleRenderTarget(fe),b.updateRenderTargetMipmap(fe))}v.setRenderTarget(be),v.setClearColor(G,$),ke!==void 0&&(j.viewport=ke),v.toneMapping=Ae}function ya(A,k,K){const j=k.isScene===!0?k.overrideMaterial:null;for(let z=0,fe=A.length;z<fe;z++){const ve=A[z],be=ve.object,Ae=ve.geometry,ke=j===null?ve.material:j,Ve=ve.group;be.layers.test(K.layers)&&ld(be,k,K,Ae,ke,Ve)}}function ld(A,k,K,j,z,fe){A.onBeforeRender(v,k,K,j,z,fe),A.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(v,k,K,j,A,fe),z.transparent===!0&&z.side===li&&z.forceSinglePass===!1?(z.side=Mn,z.needsUpdate=!0,v.renderBufferDirect(K,k,j,z,A,fe),z.side=Vi,z.needsUpdate=!0,v.renderBufferDirect(K,k,j,z,A,fe),z.side=li):v.renderBufferDirect(K,k,j,z,A,fe),A.onAfterRender(v,k,K,j,z,fe)}function Sa(A,k,K){k.isScene!==!0&&(k=xt);const j=J.get(A),z=p.state.lights,fe=p.state.shadowsArray,ve=z.state.version,be=ue.getParameters(A,z.state,fe,k,K),Ae=ue.getProgramCacheKey(be);let ke=j.programs;j.environment=A.isMeshStandardMaterial?k.environment:null,j.fog=k.fog,j.envMap=(A.isMeshStandardMaterial?U:y).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ke===void 0&&(A.addEventListener("dispose",We),ke=new Map,j.programs=ke);let Ve=ke.get(Ae);if(Ve!==void 0){if(j.currentProgram===Ve&&j.lightsStateVersion===ve)return ud(A,be),Ve}else be.uniforms=ue.getUniforms(A),A.onBeforeCompile(be,v),Ve=ue.acquireProgram(be,Ae),ke.set(Ae,Ve),j.uniforms=be.uniforms;const Pe=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Pe.clippingPlanes=se.uniform),ud(A,be),j.needsLights=Sv(A),j.lightsStateVersion=ve,j.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),j.currentProgram=Ve,j.uniformsList=null,Ve}function cd(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Ml.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function ud(A,k){const K=J.get(A);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function xv(A,k,K,j,z){k.isScene!==!0&&(k=xt),b.resetTextureUnits();const fe=k.fog,ve=j.isMeshStandardMaterial?k.environment:null,be=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:mn,Ae=(j.isMeshStandardMaterial?U:y).get(j.envMap||ve),ke=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Pe=!!K.morphAttributes.position,it=!!K.morphAttributes.normal,ct=!!K.morphAttributes.color;let It=gs;j.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(It=v.toneMapping);const wt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,st=wt!==void 0?wt.length:0,Ne=J.get(j),Xt=p.state.lights;if(he===!0&&(Te===!0||A!==S)){const rn=A===S&&j.id===M;se.setState(j,A,rn)}let ut=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Xt.state.version||Ne.outputColorSpace!==be||z.isBatchedMesh&&Ne.batching===!1||!z.isBatchedMesh&&Ne.batching===!0||z.isBatchedMesh&&Ne.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ne.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ne.instancing===!1||!z.isInstancedMesh&&Ne.instancing===!0||z.isSkinnedMesh&&Ne.skinning===!1||!z.isSkinnedMesh&&Ne.skinning===!0||z.isInstancedMesh&&Ne.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ne.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ne.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ne.instancingMorph===!1&&z.morphTexture!==null||Ne.envMap!==Ae||j.fog===!0&&Ne.fog!==fe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==se.numPlanes||Ne.numIntersection!==se.numIntersection)||Ne.vertexAlphas!==ke||Ne.vertexTangents!==Ve||Ne.morphTargets!==Pe||Ne.morphNormals!==it||Ne.morphColors!==ct||Ne.toneMapping!==It||Ne.morphTargetsCount!==st)&&(ut=!0):(ut=!0,Ne.__version=j.version);let qn=Ne.currentProgram;ut===!0&&(qn=Sa(j,k,z));let ar=!1,Tn=!1,go=!1;const St=qn.getUniforms(),Dn=Ne.uniforms;if(q.useProgram(qn.program)&&(ar=!0,Tn=!0,go=!0),j.id!==M&&(M=j.id,Tn=!0),ar||S!==A){q.buffers.depth.getReversed()?(de.copy(A.projectionMatrix),Tb(de),bb(de),St.setValue(E,"projectionMatrix",de)):St.setValue(E,"projectionMatrix",A.projectionMatrix),St.setValue(E,"viewMatrix",A.matrixWorldInverse);const gn=St.map.cameraPosition;gn!==void 0&&gn.setValue(E,Je.setFromMatrixPosition(A.matrixWorld)),Z.logarithmicDepthBuffer&&St.setValue(E,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&St.setValue(E,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Tn=!0,go=!0)}if(z.isSkinnedMesh){St.setOptional(E,z,"bindMatrix"),St.setOptional(E,z,"bindMatrixInverse");const rn=z.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),St.setValue(E,"boneTexture",rn.boneTexture,b))}z.isBatchedMesh&&(St.setOptional(E,z,"batchingTexture"),St.setValue(E,"batchingTexture",z._matricesTexture,b),St.setOptional(E,z,"batchingIdTexture"),St.setValue(E,"batchingIdTexture",z._indirectTexture,b),St.setOptional(E,z,"batchingColorTexture"),z._colorsTexture!==null&&St.setValue(E,"batchingColorTexture",z._colorsTexture,b));const Un=K.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ie.update(z,K,qn),(Tn||Ne.receiveShadow!==z.receiveShadow)&&(Ne.receiveShadow=z.receiveShadow,St.setValue(E,"receiveShadow",z.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Dn.envMap.value=Ae,Dn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&k.environment!==null&&(Dn.envMapIntensity.value=k.environmentIntensity),Tn&&(St.setValue(E,"toneMappingExposure",v.toneMappingExposure),Ne.needsLights&&yv(Dn,go),fe&&j.fog===!0&&oe.refreshFogUniforms(Dn,fe),oe.refreshMaterialUniforms(Dn,j,O,Q,p.state.transmissionRenderTarget[A.id]),Ml.upload(E,cd(Ne),Dn,b)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ml.upload(E,cd(Ne),Dn,b),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&St.setValue(E,"center",z.center),St.setValue(E,"modelViewMatrix",z.modelViewMatrix),St.setValue(E,"normalMatrix",z.normalMatrix),St.setValue(E,"modelMatrix",z.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const rn=j.uniformsGroups;for(let gn=0,Cc=rn.length;gn<Cc;gn++){const As=rn[gn];B.update(As,qn),B.bind(As,qn)}}return qn}function yv(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Sv(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(A,k,K){J.get(A.texture).__webglTexture=k,J.get(A.depthTexture).__webglTexture=K;const j=J.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const K=J.get(A);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0};const Mv=E.createFramebuffer();this.setRenderTarget=function(A,k=0,K=0){L=A,R=k,C=K;let j=!0,z=null,fe=!1,ve=!1;if(A){const Ae=J.get(A);if(Ae.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(E.FRAMEBUFFER,null),j=!1;else if(Ae.__webglFramebuffer===void 0)b.setupRenderTarget(A);else if(Ae.__hasExternalTextures)b.rebindTextures(A,J.get(A.texture).__webglTexture,J.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Pe=A.depthTexture;if(Ae.__boundDepthTexture!==Pe){if(Pe!==null&&J.has(Pe)&&(A.width!==Pe.image.width||A.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ve=!0);const Ve=J.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?z=Ve[k][K]:z=Ve[k],fe=!0):A.samples>0&&b.useMultisampledRTT(A)===!1?z=J.get(A).__webglMultisampledFramebuffer:Array.isArray(Ve)?z=Ve[K]:z=Ve,P.copy(A.viewport),N.copy(A.scissor),D=A.scissorTest}else P.copy(Ee).multiplyScalar(O).floor(),N.copy(Ue).multiplyScalar(O).floor(),D=lt;if(K!==0&&(z=Mv),q.bindFramebuffer(E.FRAMEBUFFER,z)&&j&&q.drawBuffers(A,z),q.viewport(P),q.scissor(N),q.setScissorTest(D),fe){const Ae=J.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,K)}else if(ve){const Ae=J.get(A.texture),ke=k;E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ae.__webglTexture,K,ke)}else if(A!==null&&K!==0){const Ae=J.get(A.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ae.__webglTexture,K)}M=-1},this.readRenderTargetPixels=function(A,k,K,j,z,fe,ve){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){q.bindFramebuffer(E.FRAMEBUFFER,be);try{const Ae=A.texture,ke=Ae.format,Ve=Ae.type;if(!Z.textureFormatReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-j&&K>=0&&K<=A.height-z&&E.readPixels(k,K,j,z,Le.convert(ke),Le.convert(Ve),fe)}finally{const Ae=L!==null?J.get(L).__webglFramebuffer:null;q.bindFramebuffer(E.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,k,K,j,z,fe,ve){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=J.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){const Ae=A.texture,ke=Ae.format,Ve=Ae.type;if(!Z.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-j&&K>=0&&K<=A.height-z){q.bindFramebuffer(E.FRAMEBUFFER,be);const Pe=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,Pe),E.bufferData(E.PIXEL_PACK_BUFFER,fe.byteLength,E.STREAM_READ),E.readPixels(k,K,j,z,Le.convert(ke),Le.convert(Ve),0);const it=L!==null?J.get(L).__webglFramebuffer:null;q.bindFramebuffer(E.FRAMEBUFFER,it);const ct=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Eb(E,ct,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,Pe),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,fe),E.deleteBuffer(Pe),E.deleteSync(ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,K=0){A.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-K),z=Math.floor(A.image.width*j),fe=Math.floor(A.image.height*j),ve=k!==null?k.x:0,be=k!==null?k.y:0;b.setTexture2D(A,0),E.copyTexSubImage2D(E.TEXTURE_2D,K,0,0,ve,be,z,fe),q.unbindTexture()};const Ev=E.createFramebuffer(),Tv=E.createFramebuffer();this.copyTextureToTexture=function(A,k,K=null,j=null,z=0,fe=null){A.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],k=arguments[2],fe=arguments[3]||0,K=null),fe===null&&(z!==0?(Fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=z,z=0):fe=0);let ve,be,Ae,ke,Ve,Pe,it,ct,It;const wt=A.isCompressedTexture?A.mipmaps[fe]:A.image;if(K!==null)ve=K.max.x-K.min.x,be=K.max.y-K.min.y,Ae=K.isBox3?K.max.z-K.min.z:1,ke=K.min.x,Ve=K.min.y,Pe=K.isBox3?K.min.z:0;else{const Un=Math.pow(2,-z);ve=Math.floor(wt.width*Un),be=Math.floor(wt.height*Un),A.isDataArrayTexture?Ae=wt.depth:A.isData3DTexture?Ae=Math.floor(wt.depth*Un):Ae=1,ke=0,Ve=0,Pe=0}j!==null?(it=j.x,ct=j.y,It=j.z):(it=0,ct=0,It=0);const st=Le.convert(k.format),Ne=Le.convert(k.type);let Xt;k.isData3DTexture?(b.setTexture3D(k,0),Xt=E.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(b.setTexture2DArray(k,0),Xt=E.TEXTURE_2D_ARRAY):(b.setTexture2D(k,0),Xt=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,k.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,k.unpackAlignment);const ut=E.getParameter(E.UNPACK_ROW_LENGTH),qn=E.getParameter(E.UNPACK_IMAGE_HEIGHT),ar=E.getParameter(E.UNPACK_SKIP_PIXELS),Tn=E.getParameter(E.UNPACK_SKIP_ROWS),go=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,wt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,wt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ke),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ve),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Pe);const St=A.isDataArrayTexture||A.isData3DTexture,Dn=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const Un=J.get(A),rn=J.get(k),gn=J.get(Un.__renderTarget),Cc=J.get(rn.__renderTarget);q.bindFramebuffer(E.READ_FRAMEBUFFER,gn.__webglFramebuffer),q.bindFramebuffer(E.DRAW_FRAMEBUFFER,Cc.__webglFramebuffer);for(let As=0;As<Ae;As++)St&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,J.get(A).__webglTexture,z,Pe+As),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,J.get(k).__webglTexture,fe,It+As)),E.blitFramebuffer(ke,Ve,ve,be,it,ct,ve,be,E.DEPTH_BUFFER_BIT,E.NEAREST);q.bindFramebuffer(E.READ_FRAMEBUFFER,null),q.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(z!==0||A.isRenderTargetTexture||J.has(A)){const Un=J.get(A),rn=J.get(k);q.bindFramebuffer(E.READ_FRAMEBUFFER,Ev),q.bindFramebuffer(E.DRAW_FRAMEBUFFER,Tv);for(let gn=0;gn<Ae;gn++)St?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Un.__webglTexture,z,Pe+gn):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Un.__webglTexture,z),Dn?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,rn.__webglTexture,fe,It+gn):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,rn.__webglTexture,fe),z!==0?E.blitFramebuffer(ke,Ve,ve,be,it,ct,ve,be,E.COLOR_BUFFER_BIT,E.NEAREST):Dn?E.copyTexSubImage3D(Xt,fe,it,ct,It+gn,ke,Ve,ve,be):E.copyTexSubImage2D(Xt,fe,it,ct,ke,Ve,ve,be);q.bindFramebuffer(E.READ_FRAMEBUFFER,null),q.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else Dn?A.isDataTexture||A.isData3DTexture?E.texSubImage3D(Xt,fe,it,ct,It,ve,be,Ae,st,Ne,wt.data):k.isCompressedArrayTexture?E.compressedTexSubImage3D(Xt,fe,it,ct,It,ve,be,Ae,st,wt.data):E.texSubImage3D(Xt,fe,it,ct,It,ve,be,Ae,st,Ne,wt):A.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,fe,it,ct,ve,be,st,Ne,wt.data):A.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,fe,it,ct,wt.width,wt.height,st,wt.data):E.texSubImage2D(E.TEXTURE_2D,fe,it,ct,ve,be,st,Ne,wt);E.pixelStorei(E.UNPACK_ROW_LENGTH,ut),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,qn),E.pixelStorei(E.UNPACK_SKIP_PIXELS,ar),E.pixelStorei(E.UNPACK_SKIP_ROWS,Tn),E.pixelStorei(E.UNPACK_SKIP_IMAGES,go),fe===0&&k.generateMipmaps&&E.generateMipmap(Xt),q.unbindTexture()},this.copyTextureToTexture3D=function(A,k,K=null,j=null,z=0){return A.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,A=arguments[2],k=arguments[3],z=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,K,j,z)},this.initRenderTarget=function(A){J.get(A).__webglFramebuffer===void 0&&b.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?b.setTextureCube(A,0):A.isData3DTexture?b.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?b.setTexture2DArray(A,0):b.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){R=0,C=0,L=null,q.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}function Nm(n,e){if(e===$T)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Bf||e===q0){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Bf)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class TP extends po{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new CP(t)}),this.register(function(t){return new PP(t)}),this.register(function(t){return new kP(t)}),this.register(function(t){return new HP(t)}),this.register(function(t){return new VP(t)}),this.register(function(t){return new LP(t)}),this.register(function(t){return new NP(t)}),this.register(function(t){return new DP(t)}),this.register(function(t){return new UP(t)}),this.register(function(t){return new RP(t)}),this.register(function(t){return new OP(t)}),this.register(function(t){return new IP(t)}),this.register(function(t){return new BP(t)}),this.register(function(t){return new FP(t)}),this.register(function(t){return new AP(t)}),this.register(function(t){return new zP(t)}),this.register(function(t){return new GP(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Wo.extractUrlBase(e);o=Wo.resolveURL(c,this.path)}else o=Wo.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new fv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===_v){try{o[je.KHR_BINARY_GLTF]=new WP(e)}catch(f){s&&s(f);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new iI(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const f=r.extensionsUsed[u],h=r.extensionsRequired||[];switch(f){case je.KHR_MATERIALS_UNLIT:o[f]=new wP;break;case je.KHR_DRACO_MESH_COMPRESSION:o[f]=new XP(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[f]=new qP;break;case je.KHR_MESH_QUANTIZATION:o[f]=new KP;break;default:h.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function bP(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AP{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new He(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],mn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new RA(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new zf(u),c.distance=f;break;case"spot":c=new bA(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ci(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class wP{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return ls}extendParams(e,t,i){const s=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(s)}}class RP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class CP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new nt(a,a)}return Promise.all(r)}}class PP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class IP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class LP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Kt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class NP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class DP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],mn),Promise.all(r)}}class UP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class OP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],mn),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,Kt)),Promise.all(r)}}class FP{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class BP{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:mi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class kP{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class HP{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class VP{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class zP{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,f=s.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,s.mode,s.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,s.mode,s.filter),d})})}else return null}}class GP{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==Bn.TRIANGLES&&c.mode!==Bn.TRIANGLE_STRIP&&c.mode!==Bn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const m of f){const _=new qe,g=new V,p=new Ts,T=new V(1,1,1),x=new nA(m.geometry,m.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),x.setMatrixAt(v,_.compose(g,p,T));for(const v in l)if(v==="_COLOR_0"){const w=l[v];x.instanceColor=new Hf(w.array,w.itemSize,w.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,l[v]);bt.prototype.copy.call(x,m),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const _v="glTF",Ro=12,Dm={JSON:1313821514,BIN:5130562};class WP{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ro),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_v)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Ro,r=new DataView(e,Ro);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Dm.JSON){const c=new Uint8Array(e,Ro+o,a);this.content=i.decode(c)}else if(l===Dm.BIN){const c=Ro+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XP{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Wf[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Wf[u]||u.toLowerCase();if(o[u]!==void 0){const h=i.accessors[e.attributes[u]],d=Vr[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(f,h){s.decodeDracoFile(u,function(d){for(const m in d.attributes){const _=d.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}f(d)},a,c,mn,h)})})}}class qP{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class KP{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class vv extends xa{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,f=(i-t)/u,h=f*f,d=h*f,m=e*c,_=m-c,g=-2*d+3*h,p=d-h,T=1-g,x=p-h+f;for(let v=0;v!==a;v++){const w=o[_+v+a],R=o[_+v+l]*u,C=o[m+v+a],L=o[m+v]*u;r[v]=T*w+x*R+g*C+p*L}return r}}const $P=new Ts;class jP extends vv{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return $P.fromArray(r).normalize().toArray(r),r}}const Bn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Vr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Um={9728:dn,9729:Cn,9984:O0,9985:gl,9986:Lo,9987:Ni},Om={33071:as,33648:$l,10497:Qr},Eu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Wf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},YP={CUBICSPLINE:void 0,LINEAR:la,STEP:aa},Tu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ZP(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Zh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Vi})),n.DefaultMaterial}function Us(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ci(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function JP(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(h)}if(s){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(h)}if(r){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=f),r&&(n.morphAttributes.color=h),n.morphTargetsRelative=!0,n})}function QP(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eI(n){let e;const t=n.extensions&&n.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+bu(t.attributes):e=n.indices+":"+bu(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+bu(n.targets[i]);return e}function bu(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Xf(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tI(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const nI=new qe;class iI{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new bP,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&o<98?this.textureLoader=new EA(this.options.manager):this.textureLoader=new PA(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new fv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return Us(r,a,s),Ci(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Wo.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Eu[s.type],a=Vr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new pn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Eu[s.type],c=Vr[s.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=s.byteOffset||0,d=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let _,g;if(d&&d!==f){const p=Math.floor(h/d),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let x=t.cache.get(T);x||(_=new c(a,p*d,s.count*d/u),x=new Zb(_,d/u),t.cache.add(T,x)),g=new Kh(x,l,h%d/u,m)}else a===null?_=new c(s.count*l):_=new c(a,h,s.count*l),g=new pn(_,l,m);if(s.sparse!==void 0){const p=Eu.SCALAR,T=Vr[s.sparse.indices.componentType],x=s.sparse.indices.byteOffset||0,v=s.sparse.values.byteOffset||0,w=new T(o[1],x,s.sparse.count*p),R=new c(o[2],v,s.sparse.count*l);a!==null&&(g=new pn(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let C=0,L=w.length;C<L;C++){const M=w[C];if(g.setX(M,R[C*l]),l>=2&&g.setY(M,R[C*l+1]),l>=3&&g.setZ(M,R[C*l+2]),l>=4&&g.setW(M,R[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const h=(r.samplers||{})[o.sampler]||{};return u.magFilter=Um[h.magFilter]||Cn,u.minFilter=Um[h.minFilter]||Ni,u.wrapS=Om[h.wrapS]||Qr,u.wrapT=Om[h.wrapT]||Qr,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==dn&&u.minFilter!==Cn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(_){const g=new Wt(_);g.needsUpdate=!0,h(g)}),t.load(Wo.resolveURL(f,r.path),m,void 0,d)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),Ci(f,o),f.userData.mimeType=o.mimeType||tI(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new av,ci.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ov,ci.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zh}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const f=s[je.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,r,t))}else{const f=r.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.setRGB(h[0],h[1],h[2],mn),a.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,Kt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=li);const u=r.alphaMode||Tu.OPAQUE;if(u===Tu.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Tu.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==ls&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new nt(1,1),r.normalTexture.scale!==void 0)){const f=r.normalTexture.scale;a.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&o!==ls&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==ls){const f=r.emissiveFactor;a.emissive=new He().setRGB(f[0],f[1],f[2],mn)}return r.emissiveTexture!==void 0&&o!==ls&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(c).then(function(){const f=new o(a);return r.name&&(f.name=r.name),Ci(f,r),t.associations.set(f,{materials:e}),r.extensions&&Us(s,f,r),f})}createUniqueName(e){const t=pt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Fm(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=eI(c),f=s[u];if(f)o.push(f.promise);else{let h;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?h=r(c):h=Fm(new pi,c,t),s[u]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?ZP(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,m=u.length;d<m;d++){const _=u[d],g=o[d];let p;const T=c[d];if(g.mode===Bn.TRIANGLES||g.mode===Bn.TRIANGLE_STRIP||g.mode===Bn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new Qb(_,T):new Pn(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Bn.TRIANGLE_STRIP?p.geometry=Nm(p.geometry,q0):g.mode===Bn.TRIANGLE_FAN&&(p.geometry=Nm(p.geometry,Bf));else if(g.mode===Bn.LINES)p=new rA(_,T);else if(g.mode===Bn.LINE_STRIP)p=new Yh(_,T);else if(g.mode===Bn.LINE_LOOP)p=new oA(_,T);else if(g.mode===Bn.POINTS)p=new aA(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&QP(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ci(p,r),g.extensions&&Us(s,p,g),t.assignFinalMaterial(p),f.push(p)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return r.extensions&&Us(s,f[0],r),f[0];const h=new Ws;r.extensions&&Us(s,h,r),t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new hn(Sb.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Qh(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ci(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const h=new qe;r!==null&&h.fromArray(r.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new $h(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,h=s.channels.length;f<h;f++){const d=s.channels[f],m=s.samplers[d.sampler],_=d.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,T=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(m),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],m=f[2],_=f[3],g=f[4],p=[];for(let T=0,x=h.length;T<x;T++){const v=h[T],w=d[T],R=m[T],C=_[T],L=g[T];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const M=i._createAnimationTracks(v,w,R,C,L);if(M)for(let S=0;S<M.length;S++)p.push(M[S])}return new gA(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,nI)});for(let d=0,m=f.length;d<m;d++)u.add(f[d]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new sv:c.length>1?u=new Ws:c.length===1?u=c[0]:u=new bt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(r.name&&(u.userData.name=r.name,u.name=o),Ci(u,r),r.extensions&&Us(i,u,r),r.matrix!==void 0){const f=new qe;f.fromArray(r.matrix),u.applyMatrix4(f)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new Ws;i.name&&(r.name=s.createUniqueName(i.name)),Ci(r,i),i.extensions&&Us(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)r.add(l[u]);const c=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof ci||h instanceof Wt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];Qi[r.path]===Qi.weights?e.traverse(function(h){h.morphTargetInfluences&&l.push(h.name?h.name:h.uuid)}):l.push(a);let c;switch(Qi[r.path]){case Qi.weights:c=so;break;case Qi.rotation:c=ro;break;case Qi.position:case Qi.scale:c=oo;break;default:switch(i.itemSize){case 1:c=so;break;case 2:case 3:default:c=oo;break}break}const u=s.interpolation!==void 0?YP[s.interpolation]:la,f=this._getArrayFromAccessor(i);for(let h=0,d=l.length;h<d;h++){const m=new c(l[h]+"."+Qi[r.path],t.array,f,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Xf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ro?jP:vv;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sI(n,e,t){const i=e.attributes,s=new hi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new V(l[0],l[1],l[2]),new V(c[0],c[1],c[2])),a.normalized){const u=Xf(Vr[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new V,l=new V;for(let c=0,u=r.length;c<u;c++){const f=r[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const _=Xf(Vr[h.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new di;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Fm(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Wf[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return tt.workingColorSpace!==mn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${tt.workingColorSpace}" not supported.`),Ci(n,e),sI(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?JP(n,e.targets,t):n})}const id=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},rI={__name:"BackgroundEffect",setup(n){const e=ti(null);let t,i,s,r,o=null;function a(){t=new Yb,t.background=new He(16777215),i=new hn(40,window.innerWidth/window.innerHeight,.1,1e3),i.position.z=8,i.position.y=0,s=new EP({canvas:e.value,antialias:!0,alpha:!1});const d=e.value.parentElement,m=d.clientWidth,_=d.clientHeight,g=m/_;i.aspect=g,i.updateProjectionMatrix(),s.setSize(m,_),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!1,l(),c(),window.addEventListener("resize",f),u()}function l(){const d=new CA(16777215,1.2);t.add(d);const m=new zf(16777215,1,30);m.position.set(0,0,8),t.add(m);const _=new zf(16777215,1,30);_.position.set(5,3,5),t.add(_)}function c(){new TP().load("/models/logo.gltf",m=>{r=m.scene;const _=new hi().setFromObject(r),g=_.getCenter(new V);r.position.x=-g.x,r.position.y=-g.y,r.position.z=-g.z;const p=_.getSize(new V),x=3/Math.max(p.x,p.y,p.z);r.scale.set(x,x,x),r.rotation.x=Math.PI*.05,r.rotation.y=Math.PI*.1,r.traverse(v=>{if(v.isMesh&&(v.castShadow=!1,v.receiveShadow=!1,v.material)){const w=new ls({color:new He(49150)});v.material=w}}),r.userData={initialY:r.position.y,initialRotationY:r.rotation.y},t.add(r)},m=>{console.log(m.loaded/m.total*100+"% loaded")},m=>{console.error("Error loading model:",m)})}function u(){o=requestAnimationFrame(u),r&&(r.position.y=r.userData.initialY+Math.sin(Date.now()*6e-4)*.15,r.rotation.y+=.003,r.rotation.x=Math.PI*.05+Math.sin(Date.now()*3e-4)*.03),s.render(t,i)}function f(){const d=e.value.parentElement;if(!d)return;const m=d.clientWidth,_=d.clientHeight;i.aspect=m/_,i.updateProjectionMatrix(),s.setSize(m,_)}function h(){o&&cancelAnimationFrame(o),window.removeEventListener("resize",f),t&&(t.traverse(d=>{d.geometry&&d.geometry.dispose(),d.material&&(Array.isArray(d.material)?d.material.forEach(m=>m.dispose()):d.material.dispose())}),s==null||s.dispose())}return Wi(()=>{a()}),or(()=>{h()}),(d,m)=>(ki(),ha("canvas",{ref_key:"canvasRef",ref:e,class:"background-canvas"},null,512))}},oI=id(rI,[["__scopeId","data-v-c1aea8dd"]]),aI={__name:"AnimatedElement",props:{animation:{type:String,default:"fade"},delay:{type:Number,default:0},duration:{type:Number,default:800},triggerOnScroll:{type:Boolean,default:!0},threshold:{type:Number,default:.2},hover:{type:Boolean,default:!1},hoverEffect:{type:String,default:"lift"}},setup(n){const e=n,t=ti(null),i=ti(!e.triggerOnScroll),s=ti(!1),r=$s(()=>({"--animation-delay":`${e.delay}ms`,"--animation-duration":`${e.duration}ms`})),o=$s(()=>i.value?"":`initial-${e.animation}`),a=$s(()=>e.hover?`hover-${e.hoverEffect}`:"");Wi(()=>{if(e.triggerOnScroll&&t.value){const u=new IntersectionObserver(f=>{f.forEach(h=>{h.isIntersecting&&(i.value=!0,u.unobserve(h.target))})},{threshold:e.threshold,rootMargin:"0px"});u.observe(t.value)}});const l=()=>{e.hover&&(s.value=!0)},c=()=>{e.hover&&(s.value=!1)};return(u,f)=>(ki(),ha("div",{ref_key:"element",ref:t,class:lo(["animated-element",[i.value?"animate-in":"",n.animation,a.value,s.value?"hovering":"",o.value]]),style:Ss(r.value),onMouseenter:l,onMouseleave:c},[Og(u.$slots,"default",{},void 0,!0)],38))}},Nt=id(aI,[["__scopeId","data-v-8c65665a"]]),lI={__name:"ScrollToTop",setup(n){const e=ti(!1);let t=600;const i=()=>{e.value=window.scrollY>t},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};Wi(()=>{window.addEventListener("scroll",i),i()}),or(()=>{window.removeEventListener("scroll",i)});const r=$s(()=>({opacity:e.value?"1":"0",transform:e.value?"translateY(0)":"translateY(20px)",pointerEvents:e.value?"auto":"none"}));return(o,a)=>(ki(),ha("button",{class:"scroll-to-top",style:Ss(r.value),onClick:s,"aria-label":"Scroll to top"},a[0]||(a[0]=[ae("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ae("path",{d:"M12 19V5M12 5L5 12M12 5L19 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),4))}},cI=id(lI,[["__scopeId","data-v-22cfbb22"]]),uI={class:"app"},fI={class:"container"},hI={class:"nav-container"},dI={class:"hero"},pI={class:"container"},mI={class:"hero-grid"},gI={class:"hero-text"},_I={class:"cta-container"},vI={class:"hero-model"},xI={id:"features",class:"features"},yI={class:"container"},SI={class:"features-grid"},MI={id:"benefits",class:"benefits"},EI={class:"container"},TI={class:"benefits-content"},bI={class:"benefit-text"},AI={id:"subscribe",class:"subscribe"},wI={class:"container"},RI={class:"subscribe-content"},CI={class:"container"},PI={class:"footer-content"},II={__name:"App",setup(n){const e=ti(0);let t=!1;const i=()=>{e.value=window.scrollY,t=!1},s=()=>{t||(window.requestAnimationFrame(i),t=!0)},r=(a,l)=>{a.preventDefault();const c=document.getElementById(l);if(c){const u=c.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:u-80,behavior:"smooth"})}};Wi(()=>{window.addEventListener("scroll",s);const a={root:null,rootMargin:"0px",threshold:.1},l=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&(u.target.classList.add("fade-in"),l.unobserve(u.target))})},a);document.querySelectorAll(".animate").forEach(c=>{l.observe(c)})}),or(()=>{window.removeEventListener("scroll",s)});const o=$s(()=>({backgroundColor:e.value>50?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.7)",backdropFilter:`blur(${Math.min(8,e.value/10)}px)`,borderBottom:e.value>20?"1px solid var(--border-light)":"none",boxShadow:e.value>50?"0 4px 20px rgba(0, 0, 0, 0.05)":"none"}));return(a,l)=>(ki(),ha("div",uI,[Be(cI),ae("header",{style:Ss(o.value)},[ae("div",fI,[ae("div",hI,[Be(Nt,{animation:"slide-right",delay:200,triggerOnScroll:!1},{default:Tt(()=>l[4]||(l[4]=[ae("div",{class:"logo-container"},[ae("div",{class:"logo"},[ae("img",{src:pT,alt:"Blues Boot"})]),ae("div",{class:"logo-text"},"Blues Boot")],-1)])),_:1}),Be(Nt,{animation:"slide-left",delay:400,triggerOnScroll:!1},{default:Tt(()=>[ae("nav",null,[ae("a",{href:"#features",onClick:l[0]||(l[0]=c=>r(c,"features"))},"Features"),ae("a",{href:"#benefits",onClick:l[1]||(l[1]=c=>r(c,"benefits"))},"Benefits"),ae("a",{href:"#subscribe",onClick:l[2]||(l[2]=c=>r(c,"subscribe"))},"Subscribe")])]),_:1})])])],4),ae("main",null,[ae("section",dI,[ae("div",pI,[ae("div",mI,[ae("div",gI,[Be(Nt,{animation:"slide-right",delay:600},{default:Tt(()=>l[5]||(l[5]=[ae("h1",null,[Fr("Inspiration to "),ae("span",{class:"accent"},"boot up"),Fr(" your blues")],-1)])),_:1}),Be(Nt,{animation:"slide-right",delay:800},{default:Tt(()=>l[6]||(l[6]=[ae("p",{class:"subtitle"},"A curated weekly digest of tech news, hackathons, life stories, and career opportunities.",-1)])),_:1}),Be(Nt,{animation:"scale",delay:1e3},{default:Tt(()=>[ae("div",_I,[ae("a",{href:"#subscribe",onClick:l[3]||(l[3]=c=>r(c,"subscribe")),class:"primary-button pulse-animation"},"Subscribe Now")])]),_:1})]),ae("div",vI,[Be(oI)])])])]),ae("section",xI,[ae("div",yI,[Be(Nt,{animation:"fade"},{default:Tt(()=>l[7]||(l[7]=[ae("h2",{class:"section-title"},"What's included",-1)])),_:1}),ae("div",SI,[Be(Nt,{animation:"slide-up",delay:100,hover:"",hoverEffect:"lift"},{default:Tt(()=>l[8]||(l[8]=[ae("div",{class:"feature-card"},[ae("div",{class:"icon"},[ae("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ae("path",{d:"M13 2L3 14H12L11 22L21 10H12L13 2Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),ae("h3",null,"Tech Updates"),ae("p",null,"Essential technology news and insights, curated for relevance and impact.")],-1)])),_:1}),Be(Nt,{animation:"slide-up",delay:300,hover:"",hoverEffect:"lift"},{default:Tt(()=>l[9]||(l[9]=[ae("div",{class:"feature-card"},[ae("div",{class:"icon"},[ae("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ae("path",{d:"M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ae("path",{d:"M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),ae("h3",null,"Innovation Events"),ae("p",null,"Hackathons, meetups, and collaborative opportunities in the tech community.")],-1)])),_:1}),Be(Nt,{animation:"slide-up",delay:500,hover:"",hoverEffect:"lift"},{default:Tt(()=>l[10]||(l[10]=[ae("div",{class:"feature-card"},[ae("div",{class:"icon"},[ae("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ae("path",{d:"M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ae("path",{d:"M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ae("path",{d:"M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ae("path",{d:"M8.59 13.51L15.42 17.49",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ae("path",{d:"M15.41 6.51L8.59 10.49",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),ae("h3",null,"Career Insights"),ae("p",null,"Exclusive job opportunities and career development resources for tech professionals.")],-1)])),_:1})])])]),ae("section",MI,[ae("div",EI,[Be(Nt,{animation:"fade"},{default:Tt(()=>l[11]||(l[11]=[ae("h2",{class:"section-title"},"Why subscribe",-1)])),_:1}),ae("div",TI,[ae("div",bI,[Be(Nt,{animation:"slide-right",delay:100},{default:Tt(()=>l[12]||(l[12]=[ae("div",{class:"benefit-item"},[ae("span",{class:"benefit-number"},"01"),ae("div",null,[ae("h3",null,"Curated Content"),ae("p",null,"Carefully selected insights without the noise or clickbait.")])],-1)])),_:1}),Be(Nt,{animation:"slide-right",delay:300},{default:Tt(()=>l[13]||(l[13]=[ae("div",{class:"benefit-item"},[ae("span",{class:"benefit-number"},"02"),ae("div",null,[ae("h3",null,"Time Efficiency"),ae("p",null,"All essential information delivered in one concise weekly digest.")])],-1)])),_:1}),Be(Nt,{animation:"slide-right",delay:500},{default:Tt(()=>l[14]||(l[14]=[ae("div",{class:"benefit-item"},[ae("span",{class:"benefit-number"},"03"),ae("div",null,[ae("h3",null,"Growth Focused"),ae("p",null,"Content selected to inspire, educate, and advance your career.")])],-1)])),_:1})]),Be(Nt,{animation:"scale",hover:"",hoverEffect:"tilt"},{default:Tt(()=>l[15]||(l[15]=[ae("div",{class:"benefit-quote"},[ae("blockquote",null,[Fr(' "Blues Boot delivers the perfect balance of tech insights and career opportunities each week." '),ae("cite",null,"— Sarah Chen, Senior Developer")])],-1)])),_:1})])])]),ae("section",AI,[ae("div",wI,[ae("div",RI,[Be(Nt,{animation:"fade"},{default:Tt(()=>l[16]||(l[16]=[ae("h2",{class:"section-title"},"Stay in the loop",-1),ae("p",null,"Join our community of tech professionals and receive our weekly digest.",-1)])),_:1}),Be(Nt,{animation:"slide-up",delay:200,hover:"",hoverEffect:"glow"},{default:Tt(()=>l[17]||(l[17]=[ae("form",{class:"subscribe-form"},[ae("div",{class:"form-input-container"},[ae("input",{type:"email",placeholder:"Your email address",required:""})]),ae("button",{type:"submit",class:"primary-button"},"Subscribe")],-1)])),_:1}),Be(Nt,{animation:"fade",delay:400},{default:Tt(()=>l[18]||(l[18]=[ae("div",{class:"privacy-note"}," No spam. Unsubscribe anytime. ",-1)])),_:1})])])])]),ae("footer",null,[ae("div",CI,[ae("div",PI,[Be(Nt,{animation:"slide-up",delay:100},{default:Tt(()=>l[19]||(l[19]=[ae("div",{class:"footer-logo"},[ae("img",{src:mT,alt:"Blues Boot"})],-1)])),_:1}),Be(Nt,{animation:"slide-up",delay:200},{default:Tt(()=>l[20]||(l[20]=[ae("div",{class:"footer-links"},[ae("a",{href:"#"},"Privacy"),ae("a",{href:"#"},"Terms"),ae("a",{href:"#"},"Contact")],-1)])),_:1}),Be(Nt,{animation:"slide-up",delay:300},{default:Tt(()=>l[21]||(l[21]=[ae("div",{class:"footer-copyright"}," © 2025 Blues Boot. All rights reserved. ",-1)])),_:1})])])])]))}};kl(II).mount("#app");
