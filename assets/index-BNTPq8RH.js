(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=t(s);fetch(s.href,n)}})();(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))t(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Vl(i){const e=Object.create(null);for(const t of i.split(","))e[t]=1;return t=>t in e}const ft={},hs=[],Ti=()=>{},bf=()=>!1,Ra=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Gl=i=>i.startsWith("onUpdate:"),Wt=Object.assign,Wl=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Ef=Object.prototype.hasOwnProperty,rt=(i,e)=>Ef.call(i,e),We=Array.isArray,rn=i=>Ca(i)==="[object Map]",Tf=i=>Ca(i)==="[object Set]",Xe=i=>typeof i=="function",At=i=>typeof i=="string",Wr=i=>typeof i=="symbol",Mt=i=>i!==null&&typeof i=="object",Lh=i=>(Mt(i)||Xe(i))&&Xe(i.then)&&Xe(i.catch),Af=Object.prototype.toString,Ca=i=>Af.call(i),wf=i=>Ca(i).slice(8,-1),Rf=i=>Ca(i)==="[object Object]",Xl=i=>At(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,sn=Vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Pa=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Cf=/-(\w)/g,gr=Pa(i=>i.replace(Cf,(e,t)=>t?t.toUpperCase():"")),Pf=/\B([A-Z])/g,Xr=Pa(i=>i.replace(Pf,"-$1").toLowerCase()),Ih=Pa(i=>i.charAt(0).toUpperCase()+i.slice(1)),ja=Pa(i=>i?`on${Ih(i)}`:""),fr=(i,e)=>!Object.is(i,e),qa=(i,...e)=>{for(let t=0;t<i.length;t++)i[t](...e)},Dh=(i,e,t,r=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Lf=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Nc;const La=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ns(i){if(We(i)){const e={};for(let t=0;t<i.length;t++){const r=i[t],s=At(r)?Nf(r):Ns(r);if(s)for(const n in s)e[n]=s[n]}return e}else if(At(i)||Mt(i))return i}const If=/;(?![^(]*\))/g,Df=/:([^]+)/,Uf=/\/\*[^]*?\*\//g;function Nf(i){const e={};return i.replace(Uf,"").split(If).forEach(t=>{if(t){const r=t.split(Df);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ia(i){let e="";if(At(i))e=i;else if(We(i))for(let t=0;t<i.length;t++){const r=Ia(i[t]);r&&(e+=r+" ")}else if(Mt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Of="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ff=Vl(Of);function Uh(i){return!!i||i===""}/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Bf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=$t;try{return $t=this,e()}finally{$t=t}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kf(){return $t}let dt;const Ya=new WeakSet;class Nh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Oc(this),Bh(this);const e=dt,t=_i;dt=this,_i=!0;try{return this.fn()}finally{kh(this),dt=e,_i=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Yl(e);this.deps=this.depsTail=void 0,Oc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zo(this)&&this.run()}get dirty(){return zo(this)}}let Oh=0,nn,an;function Fh(i,e=!1){if(i.flags|=8,e){i.next=an,an=i;return}i.next=nn,nn=i}function jl(){Oh++}function ql(){if(--Oh>0)return;if(an){let e=an;for(an=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let i;for(;nn;){let e=nn;for(nn=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){i||(i=r)}e=t}}if(i)throw i}function Bh(i){for(let e=i.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kh(i){let e,t=i.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Yl(r),zf(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}i.deps=e,i.depsTail=t}function zo(i){for(let e=i.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!i._dirty}function zh(i){if(i.flags&4&&!(i.flags&16)||(i.flags&=-17,i.globalVersion===fn))return;i.globalVersion=fn;const e=i.dep;if(i.flags|=2,e.version>0&&!i.isSSR&&i.deps&&!zo(i)){i.flags&=-3;return}const t=dt,r=_i;dt=i,_i=!0;try{Bh(i);const s=i.fn(i._value);(e.version===0||fr(s,i._value))&&(i._value=s,e.version++)}catch(s){throw e.version++,s}finally{dt=t,_i=r,kh(i),i.flags&=-3}}function Yl(i,e=!1){const{dep:t,prevSub:r,nextSub:s}=i;if(r&&(r.nextSub=s,i.prevSub=void 0),s&&(s.prevSub=r,i.nextSub=void 0),t.subs===i&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let n=t.computed.deps;n;n=n.nextDep)Yl(n,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function zf(i){const{prevDep:e,nextDep:t}=i;e&&(e.nextDep=t,i.prevDep=void 0),t&&(t.prevDep=e,i.nextDep=void 0)}let _i=!0;const Hh=[];function vr(){Hh.push(_i),_i=!1}function xr(){const i=Hh.pop();_i=i===void 0?!0:i}function Oc(i){const{cleanup:e}=i;if(i.cleanup=void 0,e){const t=dt;dt=void 0;try{e()}finally{dt=t}}}let fn=0;class Hf{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Kl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!dt||!_i||dt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==dt)t=this.activeLink=new Hf(dt,this),dt.deps?(t.prevDep=dt.depsTail,dt.depsTail.nextDep=t,dt.depsTail=t):dt.deps=dt.depsTail=t,Vh(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=dt.depsTail,t.nextDep=void 0,dt.depsTail.nextDep=t,dt.depsTail=t,dt.deps===t&&(dt.deps=r)}return t}trigger(e){this.version++,fn++,this.notify(e)}notify(e){jl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{ql()}}}function Vh(i){if(i.dep.sc++,i.sub.flags&4){const e=i.dep.computed;if(e&&!i.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Vh(r)}const t=i.dep.subs;t!==i&&(i.prevSub=t,t&&(t.nextSub=i)),i.dep.subs=i}}const Ho=new WeakMap,zr=Symbol(""),Vo=Symbol(""),pn=Symbol("");function It(i,e,t){if(_i&&dt){let r=Ho.get(i);r||Ho.set(i,r=new Map);let s=r.get(t);s||(r.set(t,s=new Kl),s.map=r,s.key=t),s.track()}}function Xi(i,e,t,r,s,n){const a=Ho.get(i);if(!a){fn++;return}const o=l=>{l&&l.trigger()};if(jl(),e==="clear")a.forEach(o);else{const l=We(i),c=l&&Xl(t);if(l&&t==="length"){const u=Number(r);a.forEach((h,d)=>{(d==="length"||d===pn||!Wr(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(pn)),e){case"add":l?c&&o(a.get("length")):(o(a.get(zr)),rn(i)&&o(a.get(Vo)));break;case"delete":l||(o(a.get(zr)),rn(i)&&o(a.get(Vo)));break;case"set":rn(i)&&o(a.get(zr));break}}ql()}function qr(i){const e=it(i);return e===i?e:(It(e,"iterate",pn),vi(i)?e:e.map(Bt))}function Zl(i){return It(i=it(i),"iterate",pn),i}const Vf={__proto__:null,[Symbol.iterator](){return Ka(this,Symbol.iterator,Bt)},concat(...i){return qr(this).concat(...i.map(e=>We(e)?qr(e):e))},entries(){return Ka(this,"entries",i=>(i[1]=Bt(i[1]),i))},every(i,e){return Ni(this,"every",i,e,void 0,arguments)},filter(i,e){return Ni(this,"filter",i,e,t=>t.map(Bt),arguments)},find(i,e){return Ni(this,"find",i,e,Bt,arguments)},findIndex(i,e){return Ni(this,"findIndex",i,e,void 0,arguments)},findLast(i,e){return Ni(this,"findLast",i,e,Bt,arguments)},findLastIndex(i,e){return Ni(this,"findLastIndex",i,e,void 0,arguments)},forEach(i,e){return Ni(this,"forEach",i,e,void 0,arguments)},includes(...i){return Za(this,"includes",i)},indexOf(...i){return Za(this,"indexOf",i)},join(i){return qr(this).join(i)},lastIndexOf(...i){return Za(this,"lastIndexOf",i)},map(i,e){return Ni(this,"map",i,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...i){return Vs(this,"push",i)},reduce(i,...e){return Fc(this,"reduce",i,e)},reduceRight(i,...e){return Fc(this,"reduceRight",i,e)},shift(){return Vs(this,"shift")},some(i,e){return Ni(this,"some",i,e,void 0,arguments)},splice(...i){return Vs(this,"splice",i)},toReversed(){return qr(this).toReversed()},toSorted(i){return qr(this).toSorted(i)},toSpliced(...i){return qr(this).toSpliced(...i)},unshift(...i){return Vs(this,"unshift",i)},values(){return Ka(this,"values",Bt)}};function Ka(i,e,t){const r=Zl(i),s=r[e]();return r!==i&&!vi(i)&&(s._next=s.next,s.next=()=>{const n=s._next();return n.value&&(n.value=t(n.value)),n}),s}const Gf=Array.prototype;function Ni(i,e,t,r,s,n){const a=Zl(i),o=a!==i&&!vi(i),l=a[e];if(l!==Gf[e]){const h=l.apply(i,n);return o?Bt(h):h}let c=t;a!==i&&(o?c=function(h,d){return t.call(this,Bt(h),d,i)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,i)}));const u=l.call(a,c,r);return o&&s?s(u):u}function Fc(i,e,t,r){const s=Zl(i);let n=t;return s!==i&&(vi(i)?t.length>3&&(n=function(a,o,l){return t.call(this,a,o,l,i)}):n=function(a,o,l){return t.call(this,a,Bt(o),l,i)}),s[e](n,...r)}function Za(i,e,t){const r=it(i);It(r,"iterate",pn);const s=r[e](...t);return(s===-1||s===!1)&&ec(t[0])?(t[0]=it(t[0]),r[e](...t)):s}function Vs(i,e,t=[]){vr(),jl();const r=it(i)[e].apply(i,t);return ql(),xr(),r}const Wf=Vl("__proto__,__v_isRef,__isVue"),Gh=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Wr));function Xf(i){Wr(i)||(i=String(i));const e=it(this);return It(e,"has",i),e.hasOwnProperty(i)}class Wh{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,n=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return n;if(t==="__v_raw")return r===(s?n?tp:Yh:n?qh:jh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=We(e);if(!s){let l;if(a&&(l=Vf[t]))return l;if(t==="hasOwnProperty")return Xf}const o=Reflect.get(e,t,Dt(e)?e:r);return(Wr(t)?Gh.has(t):Wf(t))||(s||It(e,"get",t),n)?o:Dt(o)?a&&Xl(t)?o:o.value:Mt(o)?s?Kh(o):$l(o):o}}class Xh extends Wh{constructor(e=!1){super(!1,e)}set(e,t,r,s){let n=e[t];if(!this._isShallow){const l=Hr(n);if(!vi(r)&&!Hr(r)&&(n=it(n),r=it(r)),!We(e)&&Dt(n)&&!Dt(r))return l?!1:(n.value=r,!0)}const a=We(e)&&Xl(t)?Number(t)<e.length:rt(e,t),o=Reflect.set(e,t,r,Dt(e)?e:s);return e===it(s)&&(a?fr(r,n)&&Xi(e,"set",t,r):Xi(e,"add",t,r)),o}deleteProperty(e,t){const r=rt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Xi(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Wr(t)||!Gh.has(t))&&It(e,"has",t),r}ownKeys(e){return It(e,"iterate",We(e)?"length":zr),Reflect.ownKeys(e)}}class jf extends Wh{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const qf=new Xh,Yf=new jf,Kf=new Xh(!0),Go=i=>i,Pn=i=>Reflect.getPrototypeOf(i);function Zf(i,e,t){return function(...r){const s=this.__v_raw,n=it(s),a=rn(n),o=i==="entries"||i===Symbol.iterator&&a,l=i==="keys"&&a,c=s[i](...r),u=t?Go:e?Wo:Bt;return!e&&It(n,"iterate",l?Vo:zr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Ln(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Jf(i,e){const t={get(r){const s=this.__v_raw,n=it(s),a=it(r);i||(fr(r,a)&&It(n,"get",r),It(n,"get",a));const{has:o}=Pn(n),l=e?Go:i?Wo:Bt;if(o.call(n,r))return l(s.get(r));if(o.call(n,a))return l(s.get(a));s!==n&&s.get(r)},get size(){const r=this.__v_raw;return!i&&It(it(r),"iterate",zr),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,n=it(s),a=it(r);return i||(fr(r,a)&&It(n,"has",r),It(n,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const n=this,a=n.__v_raw,o=it(a),l=e?Go:i?Wo:Bt;return!i&&It(o,"iterate",zr),a.forEach((c,u)=>r.call(s,l(c),l(u),n))}};return Wt(t,i?{add:Ln("add"),set:Ln("set"),delete:Ln("delete"),clear:Ln("clear")}:{add(r){!e&&!vi(r)&&!Hr(r)&&(r=it(r));const s=it(this);return Pn(s).has.call(s,r)||(s.add(r),Xi(s,"add",r,r)),this},set(r,s){!e&&!vi(s)&&!Hr(s)&&(s=it(s));const n=it(this),{has:a,get:o}=Pn(n);let l=a.call(n,r);l||(r=it(r),l=a.call(n,r));const c=o.call(n,r);return n.set(r,s),l?fr(s,c)&&Xi(n,"set",r,s):Xi(n,"add",r,s),this},delete(r){const s=it(this),{has:n,get:a}=Pn(s);let o=n.call(s,r);o||(r=it(r),o=n.call(s,r)),a&&a.call(s,r);const l=s.delete(r);return o&&Xi(s,"delete",r,void 0),l},clear(){const r=it(this),s=r.size!==0,n=r.clear();return s&&Xi(r,"clear",void 0,void 0),n}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Zf(r,i,e)}),t}function Jl(i,e){const t=Jf(i,e);return(r,s,n)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?r:Reflect.get(rt(t,s)&&s in r?t:r,s,n)}const $f={get:Jl(!1,!1)},Qf={get:Jl(!1,!0)},ep={get:Jl(!0,!1)},jh=new WeakMap,qh=new WeakMap,Yh=new WeakMap,tp=new WeakMap;function ip(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rp(i){return i.__v_skip||!Object.isExtensible(i)?0:ip(wf(i))}function $l(i){return Hr(i)?i:Ql(i,!1,qf,$f,jh)}function sp(i){return Ql(i,!1,Kf,Qf,qh)}function Kh(i){return Ql(i,!0,Yf,ep,Yh)}function Ql(i,e,t,r,s){if(!Mt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const n=s.get(i);if(n)return n;const a=rp(i);if(a===0)return i;const o=new Proxy(i,a===2?r:t);return s.set(i,o),o}function on(i){return Hr(i)?on(i.__v_raw):!!(i&&i.__v_isReactive)}function Hr(i){return!!(i&&i.__v_isReadonly)}function vi(i){return!!(i&&i.__v_isShallow)}function ec(i){return i?!!i.__v_raw:!1}function it(i){const e=i&&i.__v_raw;return e?it(e):i}function np(i){return!rt(i,"__v_skip")&&Object.isExtensible(i)&&Dh(i,"__v_skip",!0),i}const Bt=i=>Mt(i)?$l(i):i,Wo=i=>Mt(i)?Kh(i):i;function Dt(i){return i?i.__v_isRef===!0:!1}function ds(i){return ap(i,!1)}function ap(i,e){return Dt(i)?i:new op(i,e)}class op{constructor(e,t){this.dep=new Kl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:it(e),this._value=t?e:Bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||vi(e)||Hr(e);e=r?e:it(e),fr(e,t)&&(this._rawValue=e,this._value=r?e:Bt(e),this.dep.trigger())}}function lp(i){return Dt(i)?i.value:i}const cp={get:(i,e,t)=>e==="__v_raw"?i:lp(Reflect.get(i,e,t)),set:(i,e,t,r)=>{const s=i[e];return Dt(s)&&!Dt(t)?(s.value=t,!0):Reflect.set(i,e,t,r)}};function Zh(i){return on(i)?i:new Proxy(i,cp)}class up{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Kl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=fn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&dt!==this)return Fh(this,!0),!0}get value(){const e=this.dep.track();return zh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function hp(i,e,t=!1){let r,s;return Xe(i)?r=i:(r=i.get,s=i.set),new up(r,s,t)}const In={},_a=new WeakMap;let Dr;function dp(i,e=!1,t=Dr){if(t){let r=_a.get(t);r||_a.set(t,r=[]),r.push(i)}}function fp(i,e,t=ft){const{immediate:r,deep:s,once:n,scheduler:a,augmentJob:o,call:l}=t,c=M=>s?M:vi(M)||s===!1||s===0?lr(M,1):lr(M);let u,h,d,f,g=!1,v=!1;if(Dt(i)?(h=()=>i.value,g=vi(i)):on(i)?(h=()=>c(i),g=!0):We(i)?(v=!0,g=i.some(M=>on(M)||vi(M)),h=()=>i.map(M=>{if(Dt(M))return M.value;if(on(M))return c(M);if(Xe(M))return l?l(M,2):M()})):Xe(i)?e?h=l?()=>l(i,2):i:h=()=>{if(d){vr();try{d()}finally{xr()}}const M=Dr;Dr=u;try{return l?l(i,3,[f]):i(f)}finally{Dr=M}}:h=Ti,e&&s){const M=h,I=s===!0?1/0:s;h=()=>lr(M(),I)}const m=kf(),p=()=>{u.stop(),m&&m.active&&Wl(m.effects,u)};if(n&&e){const M=e;e=(...I)=>{M(...I),p()}}let A=v?new Array(i.length).fill(In):In;const T=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const I=u.run();if(s||g||(v?I.some((L,C)=>fr(L,A[C])):fr(I,A))){d&&d();const L=Dr;Dr=u;try{const C=[I,A===In?void 0:v&&A[0]===In?[]:A,f];l?l(e,3,C):e(...C),A=I}finally{Dr=L}}}else u.run()};return o&&o(T),u=new Nh(h),u.scheduler=a?()=>a(T,!1):T,f=M=>dp(M,!1,u),d=u.onStop=()=>{const M=_a.get(u);if(M){if(l)l(M,4);else for(const I of M)I();_a.delete(u)}},e?r?T(!0):A=u.run():a?a(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function lr(i,e=1/0,t){if(e<=0||!Mt(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,Dt(i))lr(i.value,e,t);else if(We(i))for(let r=0;r<i.length;r++)lr(i[r],e,t);else if(Tf(i)||rn(i))i.forEach(r=>{lr(r,e,t)});else if(Rf(i)){for(const r in i)lr(i[r],e,t);for(const r of Object.getOwnPropertySymbols(i))Object.prototype.propertyIsEnumerable.call(i,r)&&lr(i[r],e,t)}return i}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sn(i,e,t,r){try{return r?i(...r):i()}catch(s){Da(s,e,t)}}function wi(i,e,t,r){if(Xe(i)){const s=Sn(i,e,t,r);return s&&Lh(s)&&s.catch(n=>{Da(n,e,t)}),s}if(We(i)){const s=[];for(let n=0;n<i.length;n++)s.push(wi(i[n],e,t,r));return s}}function Da(i,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ft;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](i,l,c)===!1)return}o=o.parent}if(n){vr(),Sn(n,null,10,[i,l,c]),xr();return}}pp(i,t,s,r,a)}function pp(i,e,t,r=!0,s=!1){if(s)throw i;console.error(i)}const kt=[];let yi=-1;const fs=[];let ar=null,cs=0;const Jh=Promise.resolve();let va=null;function mp(i){const e=va||Jh;return i?e.then(this?i.bind(this):i):e}function gp(i){let e=yi+1,t=kt.length;for(;e<t;){const r=e+t>>>1,s=kt[r],n=mn(s);n<i||n===i&&s.flags&2?e=r+1:t=r}return e}function tc(i){if(!(i.flags&1)){const e=mn(i),t=kt[kt.length-1];!t||!(i.flags&2)&&e>=mn(t)?kt.push(i):kt.splice(gp(e),0,i),i.flags|=1,$h()}}function $h(){va||(va=Jh.then(ed))}function _p(i){We(i)?fs.push(...i):ar&&i.id===-1?ar.splice(cs+1,0,i):i.flags&1||(fs.push(i),i.flags|=1),$h()}function Bc(i,e,t=yi+1){for(;t<kt.length;t++){const r=kt[t];if(r&&r.flags&2){if(i&&r.id!==i.uid)continue;kt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Qh(i){if(fs.length){const e=[...new Set(fs)].sort((t,r)=>mn(t)-mn(r));if(fs.length=0,ar){ar.push(...e);return}for(ar=e,cs=0;cs<ar.length;cs++){const t=ar[cs];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ar=null,cs=0}}const mn=i=>i.id==null?i.flags&2?-1:1/0:i.id;function ed(i){try{for(yi=0;yi<kt.length;yi++){const e=kt[yi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Sn(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;yi<kt.length;yi++){const e=kt[yi];e&&(e.flags&=-2)}yi=-1,kt.length=0,Qh(),va=null,(kt.length||fs.length)&&ed()}}let jt=null,td=null;function xa(i){const e=jt;return jt=i,td=i&&i.type.__scopeId||null,e}function _t(i,e=jt,t){if(!e||i._n)return i;const r=(...s)=>{r._d&&qc(-1);const n=xa(e);let a;try{a=i(...s)}finally{xa(n),r._d&&qc(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Er(i,e,t,r){const s=i.dirs,n=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];n&&(o.oldValue=n[a].value);let l=o.dir[r];l&&(vr(),wi(l,t,8,[i.el,o,i,e]),xr())}}const vp=Symbol("_vte"),xp=i=>i.__isTeleport;function ic(i,e){i.shapeFlag&6&&i.component?(i.transition=e,ic(i.component.subTree,e)):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function id(i){i.ids=[i.ids[0]+i.ids[2]+++"-",0,0]}function Ma(i,e,t,r,s=!1){if(We(i)){i.forEach((g,v)=>Ma(g,e&&(We(e)?e[v]:e),t,r,s));return}if(ps(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ma(i,e,t,r.component.subTree);return}const n=r.shapeFlag&4?ac(r.component):r.el,a=s?null:n,{i:o,r:l}=i,c=e&&e.r,u=o.refs===ft?o.refs={}:o.refs,h=o.setupState,d=it(h),f=h===ft?()=>!1:g=>rt(d,g);if(c!=null&&c!==l&&(At(c)?(u[c]=null,f(c)&&(h[c]=null)):Dt(c)&&(c.value=null)),Xe(l))Sn(l,o,12,[a,u]);else{const g=At(l),v=Dt(l);if(g||v){const m=()=>{if(i.f){const p=g?f(l)?h[l]:u[l]:l.value;s?We(p)&&Wl(p,n):We(p)?p.includes(n)||p.push(n):g?(u[l]=[n],f(l)&&(h[l]=u[l])):(l.value=[n],i.k&&(u[i.k]=l.value))}else g?(u[l]=a,f(l)&&(h[l]=a)):v&&(l.value=a,i.k&&(u[i.k]=a))};a?(m.id=-1,Jt(m,t)):m()}}}La().requestIdleCallback;La().cancelIdleCallback;const ps=i=>!!i.type.__asyncLoader,rd=i=>i.type.__isKeepAlive;function Mp(i,e){sd(i,"a",e)}function yp(i,e){sd(i,"da",e)}function sd(i,e,t=Ht){const r=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(Ua(e,r,t),t){let s=t.parent;for(;s&&s.parent;)rd(s.parent.vnode)&&Sp(r,e,t,s),s=s.parent}}function Sp(i,e,t,r){const s=Ua(e,i,r,!0);nd(()=>{Wl(r[e],s)},t)}function Ua(i,e,t=Ht,r=!1){if(t){const s=t[i]||(t[i]=[]),n=e.__weh||(e.__weh=(...a)=>{vr();const o=En(t),l=wi(e,t,i,a);return o(),xr(),l});return r?s.unshift(n):s.push(n),n}}const $i=i=>(e,t=Ht)=>{(!_n||i==="sp")&&Ua(i,(...r)=>e(...r),t)},bp=$i("bm"),bn=$i("m"),Ep=$i("bu"),Tp=$i("u"),Na=$i("bum"),nd=$i("um"),Ap=$i("sp"),wp=$i("rtg"),Rp=$i("rtc");function Cp(i,e=Ht){Ua("ec",i,e)}const Pp=Symbol.for("v-ndc");function Lp(i,e,t={},r,s){if(jt.ce||jt.parent&&ps(jt.parent)&&jt.parent.ce)return Ss(),Yc(ai,null,[Qe("slot",t,r)],64);let n=i[e];n&&n._c&&(n._d=!1),Ss();const a=n&&ad(n(t)),o=t.key||a&&a.key,l=Yc(ai,{key:(o&&!Wr(o)?o:`_${e}`)+""},a||[],a&&i._===1?64:-2);return n&&n._c&&(n._d=!0),l}function ad(i){return i.some(e=>sc(e)?!(e.type===ys||e.type===ai&&!ad(e.children)):!0)?i:null}const Xo=i=>i?wd(i)?ac(i):Xo(i.parent):null,ln=Wt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Xo(i.parent),$root:i=>Xo(i.root),$host:i=>i.ce,$emit:i=>i.emit,$options:i=>ld(i),$forceUpdate:i=>i.f||(i.f=()=>{tc(i.update)}),$nextTick:i=>i.n||(i.n=mp.bind(i.proxy)),$watch:i=>Qp.bind(i)}),Ja=(i,e)=>i!==ft&&!i.__isScriptSetup&&rt(i,e),Ip={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:n,accessCache:a,type:o,appContext:l}=i;let c;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return n[e]}else{if(Ja(r,e))return a[e]=1,r[e];if(s!==ft&&rt(s,e))return a[e]=2,s[e];if((c=i.propsOptions[0])&&rt(c,e))return a[e]=3,n[e];if(t!==ft&&rt(t,e))return a[e]=4,t[e];jo&&(a[e]=0)}}const u=ln[e];let h,d;if(u)return e==="$attrs"&&It(i.attrs,"get",""),u(i);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==ft&&rt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,rt(d,e))return d[e]},set({_:i},e,t){const{data:r,setupState:s,ctx:n}=i;return Ja(s,e)?(s[e]=t,!0):r!==ft&&rt(r,e)?(r[e]=t,!0):rt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(n[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:n}},a){let o;return!!t[a]||i!==ft&&rt(i,a)||Ja(e,a)||(o=n[0])&&rt(o,a)||rt(r,a)||rt(ln,a)||rt(s.config.globalProperties,a)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:rt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function kc(i){return We(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let jo=!0;function Dp(i){const e=ld(i),t=i.proxy,r=i.ctx;jo=!1,e.beforeCreate&&zc(e.beforeCreate,i,"bc");const{data:s,computed:n,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:M,render:I,renderTracked:L,renderTriggered:C,errorCaptured:B,serverPrefetch:E,expose:S,inheritAttrs:D,components:$,directives:K,filters:Q}=e;if(c&&Up(c,r,null),a)for(const W in a){const ee=a[W];Xe(ee)&&(r[W]=ee.bind(t))}if(s){const W=s.call(t,t);Mt(W)&&(i.data=$l(W))}if(jo=!0,n)for(const W in n){const ee=n[W],X=Xe(ee)?ee.bind(t,t):Xe(ee.get)?ee.get.bind(t,t):Ti,he=!Xe(ee)&&Xe(ee.set)?ee.set.bind(t):Ti,Ee=gs({get:X,set:he});Object.defineProperty(r,W,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Le=>Ee.value=Le})}if(o)for(const W in o)od(o[W],r,t,W);if(l){const W=Xe(l)?l.call(t):l;Reflect.ownKeys(W).forEach(ee=>{zp(ee,W[ee])})}u&&zc(u,i,"c");function se(W,ee){We(ee)?ee.forEach(X=>W(X.bind(t))):ee&&W(ee.bind(t))}if(se(bp,h),se(bn,d),se(Ep,f),se(Tp,g),se(Mp,v),se(yp,m),se(Cp,B),se(Rp,L),se(wp,C),se(Na,A),se(nd,M),se(Ap,E),We(S))if(S.length){const W=i.exposed||(i.exposed={});S.forEach(ee=>{Object.defineProperty(W,ee,{get:()=>t[ee],set:X=>t[ee]=X})})}else i.exposed||(i.exposed={});I&&i.render===Ti&&(i.render=I),D!=null&&(i.inheritAttrs=D),$&&(i.components=$),K&&(i.directives=K),E&&id(i)}function Up(i,e,t=Ti){We(i)&&(i=qo(i));for(const r in i){const s=i[r];let n;Mt(s)?"default"in s?n=aa(s.from||r,s.default,!0):n=aa(s.from||r):n=aa(s),Dt(n)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>n.value,set:a=>n.value=a}):e[r]=n}}function zc(i,e,t){wi(We(i)?i.map(r=>r.bind(e.proxy)):i.bind(e.proxy),e,t)}function od(i,e,t,r){let s=r.includes(".")?Sd(t,r):()=>t[r];if(At(i)){const n=e[i];Xe(n)&&Qa(s,n)}else if(Xe(i))Qa(s,i.bind(t));else if(Mt(i))if(We(i))i.forEach(n=>od(n,e,t,r));else{const n=Xe(i.handler)?i.handler.bind(t):e[i.handler];Xe(n)&&Qa(s,n,i)}}function ld(i){const e=i.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:n,config:{optionMergeStrategies:a}}=i.appContext,o=n.get(e);let l;return o?l=o:!s.length&&!t&&!r?l=e:(l={},s.length&&s.forEach(c=>ya(l,c,a,!0)),ya(l,e,a)),Mt(e)&&n.set(e,l),l}function ya(i,e,t,r=!1){const{mixins:s,extends:n}=e;n&&ya(i,n,t,!0),s&&s.forEach(a=>ya(i,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const o=Np[a]||t&&t[a];i[a]=o?o(i[a],e[a]):e[a]}return i}const Np={data:Hc,props:Vc,emits:Vc,methods:Qs,computed:Qs,beforeCreate:Ot,created:Ot,beforeMount:Ot,mounted:Ot,beforeUpdate:Ot,updated:Ot,beforeDestroy:Ot,beforeUnmount:Ot,destroyed:Ot,unmounted:Ot,activated:Ot,deactivated:Ot,errorCaptured:Ot,serverPrefetch:Ot,components:Qs,directives:Qs,watch:Fp,provide:Hc,inject:Op};function Hc(i,e){return e?i?function(){return Wt(Xe(i)?i.call(this,this):i,Xe(e)?e.call(this,this):e)}:e:i}function Op(i,e){return Qs(qo(i),qo(e))}function qo(i){if(We(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Ot(i,e){return i?[...new Set([].concat(i,e))]:e}function Qs(i,e){return i?Wt(Object.create(null),i,e):e}function Vc(i,e){return i?We(i)&&We(e)?[...new Set([...i,...e])]:Wt(Object.create(null),kc(i),kc(e??{})):e}function Fp(i,e){if(!i)return e;if(!e)return i;const t=Wt(Object.create(null),i);for(const r in e)t[r]=Ot(i[r],e[r]);return t}function cd(){return{app:null,config:{isNativeTag:bf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Bp=0;function kp(i,e){return function(t,r=null){Xe(t)||(t=Wt({},t)),r!=null&&!Mt(r)&&(r=null);const s=cd(),n=new WeakSet,a=[];let o=!1;const l=s.app={_uid:Bp++,_component:t,_props:r,_container:null,_context:s,_instance:null,version:xm,get config(){return s.config},set config(c){},use(c,...u){return n.has(c)||(c&&Xe(c.install)?(n.add(c),c.install(l,...u)):Xe(c)&&(n.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const d=l._ceVNode||Qe(t,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),i(d,c,h),o=!0,l._container=c,c.__vue_app__=l,ac(d.component)}},onUnmount(c){a.push(c)},unmount(){o&&(wi(a,l._instance,16),i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=ms;ms=l;try{return c()}finally{ms=u}}};return l}}let ms=null;function zp(i,e){if(Ht){let t=Ht.provides;const r=Ht.parent&&Ht.parent.provides;r===t&&(t=Ht.provides=Object.create(r)),t[i]=e}}function aa(i,e,t=!1){const r=Ht||jt;if(r||ms){const s=ms?ms._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&i in s)return s[i];if(arguments.length>1)return t&&Xe(e)?e.call(r&&r.proxy):e}}const ud={},hd=()=>Object.create(ud),dd=i=>Object.getPrototypeOf(i)===ud;function Hp(i,e,t,r=!1){const s={},n=hd();i.propsDefaults=Object.create(null),fd(i,e,s,n);for(const a in i.propsOptions[0])a in s||(s[a]=void 0);t?i.props=r?s:sp(s):i.type.props?i.props=s:i.props=n,i.attrs=n}function Vp(i,e,t,r){const{props:s,attrs:n,vnode:{patchFlag:a}}=i,o=it(s),[l]=i.propsOptions;let c=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Oa(i.emitsOptions,d))continue;const f=e[d];if(l)if(rt(n,d))f!==n[d]&&(n[d]=f,c=!0);else{const g=gr(d);s[g]=Yo(l,o,g,f,i,!1)}else f!==n[d]&&(n[d]=f,c=!0)}}}else{fd(i,e,s,n)&&(c=!0);let u;for(const h in o)(!e||!rt(e,h)&&((u=Xr(h))===h||!rt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Yo(l,o,h,void 0,i,!0)):delete s[h]);if(n!==o)for(const h in n)(!e||!rt(e,h))&&(delete n[h],c=!0)}c&&Xi(i.attrs,"set","")}function fd(i,e,t,r){const[s,n]=i.propsOptions;let a=!1,o;if(e)for(let l in e){if(sn(l))continue;const c=e[l];let u;s&&rt(s,u=gr(l))?!n||!n.includes(u)?t[u]=c:(o||(o={}))[u]=c:Oa(i.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,a=!0)}if(n){const l=it(t),c=o||ft;for(let u=0;u<n.length;u++){const h=n[u];t[h]=Yo(s,l,h,c[h],i,!rt(c,h))}}return a}function Yo(i,e,t,r,s,n){const a=i[t];if(a!=null){const o=rt(a,"default");if(o&&r===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=s;if(t in c)r=c[t];else{const u=En(s);r=c[t]=l.call(null,e),u()}}else r=l;s.ce&&s.ce._setProp(t,r)}a[0]&&(n&&!o?r=!1:a[1]&&(r===""||r===Xr(t))&&(r=!0))}return r}const Gp=new WeakMap;function pd(i,e,t=!1){const r=t?Gp:e.propsCache,s=r.get(i);if(s)return s;const n=i.props,a={},o=[];let l=!1;if(!Xe(i)){const u=h=>{l=!0;const[d,f]=pd(h,e,!0);Wt(a,d),f&&o.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!n&&!l)return Mt(i)&&r.set(i,hs),hs;if(We(n))for(let u=0;u<n.length;u++){const h=gr(n[u]);Gc(h)&&(a[h]=ft)}else if(n)for(const u in n){const h=gr(u);if(Gc(h)){const d=n[u],f=a[h]=We(d)||Xe(d)?{type:d}:Wt({},d),g=f.type;let v=!1,m=!0;if(We(g))for(let p=0;p<g.length;++p){const A=g[p],T=Xe(A)&&A.name;if(T==="Boolean"){v=!0;break}else T==="String"&&(m=!1)}else v=Xe(g)&&g.name==="Boolean";f[0]=v,f[1]=m,(v||rt(f,"default"))&&o.push(h)}}const c=[a,o];return Mt(i)&&r.set(i,c),c}function Gc(i){return i[0]!=="$"&&!sn(i)}const md=i=>i[0]==="_"||i==="$stable",rc=i=>We(i)?i.map(Si):[Si(i)],Wp=(i,e,t)=>{if(e._n)return e;const r=_t((...s)=>rc(e(...s)),t);return r._c=!1,r},gd=(i,e,t)=>{const r=i._ctx;for(const s in i){if(md(s))continue;const n=i[s];if(Xe(n))e[s]=Wp(s,n,r);else if(n!=null){const a=rc(n);e[s]=()=>a}}},_d=(i,e)=>{const t=rc(e);i.slots.default=()=>t},vd=(i,e,t)=>{for(const r in e)(t||r!=="_")&&(i[r]=e[r])},Xp=(i,e,t)=>{const r=i.slots=hd();if(i.vnode.shapeFlag&32){const s=e._;s?(vd(r,e,t),t&&Dh(r,"_",s,!0)):gd(e,r)}else e&&_d(i,e)},jp=(i,e,t)=>{const{vnode:r,slots:s}=i;let n=!0,a=ft;if(r.shapeFlag&32){const o=e._;o?t&&o===1?n=!1:vd(s,e,t):(n=!e.$stable,gd(e,s)),a=e}else e&&(_d(i,e),a={default:1});if(n)for(const o in s)!md(o)&&a[o]==null&&delete s[o]},Jt=am;function qp(i){return Yp(i)}function Yp(i,e){const t=La();t.__VUE__=!0;const{insert:r,remove:s,patchProp:n,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ti,insertStaticContent:g}=i,v=(w,R,z,b=null,ie=null,J=null,re=void 0,q=null,ne=!!R.dynamicChildren)=>{if(w===R)return;w&&!Gs(w,R)&&(b=me(w),Ie(w,ie,J,!0),w=null),R.patchFlag===-2&&(ne=!1,R.dynamicChildren=null);const{type:H,ref:y,shapeFlag:_}=R;switch(H){case Fa:m(w,R,z,b);break;case ys:p(w,R,z,b);break;case eo:w==null&&A(R,z,b,re);break;case ai:$(w,R,z,b,ie,J,re,q,ne);break;default:_&1?I(w,R,z,b,ie,J,re,q,ne):_&6?K(w,R,z,b,ie,J,re,q,ne):(_&64||_&128)&&H.process(w,R,z,b,ie,J,re,q,ne,ke)}y!=null&&ie&&Ma(y,w&&w.ref,J,R||w,!R)},m=(w,R,z,b)=>{if(w==null)r(R.el=o(R.children),z,b);else{const ie=R.el=w.el;R.children!==w.children&&c(ie,R.children)}},p=(w,R,z,b)=>{w==null?r(R.el=l(R.children||""),z,b):R.el=w.el},A=(w,R,z,b)=>{[w.el,w.anchor]=g(w.children,R,z,b,w.el,w.anchor)},T=({el:w,anchor:R},z,b)=>{let ie;for(;w&&w!==R;)ie=d(w),r(w,z,b),w=ie;r(R,z,b)},M=({el:w,anchor:R})=>{let z;for(;w&&w!==R;)z=d(w),s(w),w=z;s(R)},I=(w,R,z,b,ie,J,re,q,ne)=>{R.type==="svg"?re="svg":R.type==="math"&&(re="mathml"),w==null?L(R,z,b,ie,J,re,q,ne):E(w,R,ie,J,re,q,ne)},L=(w,R,z,b,ie,J,re,q)=>{let ne,H;const{props:y,shapeFlag:_,transition:P,dirs:k}=w;if(ne=w.el=a(w.type,J,y&&y.is,y),_&8?u(ne,w.children):_&16&&B(w.children,ne,null,b,ie,$a(w,J),re,q),k&&Er(w,null,b,"created"),C(ne,w,w.scopeId,re,b),y){for(const j in y)j!=="value"&&!sn(j)&&n(ne,j,null,y[j],J,b);"value"in y&&n(ne,"value",null,y.value,J),(H=y.onVnodeBeforeMount)&&Mi(H,b,w)}k&&Er(w,null,b,"beforeMount");const Y=Kp(ie,P);Y&&P.beforeEnter(ne),r(ne,R,z),((H=y&&y.onVnodeMounted)||Y||k)&&Jt(()=>{H&&Mi(H,b,w),Y&&P.enter(ne),k&&Er(w,null,b,"mounted")},ie)},C=(w,R,z,b,ie)=>{if(z&&f(w,z),b)for(let J=0;J<b.length;J++)f(w,b[J]);if(ie){let J=ie.subTree;if(R===J||Ed(J.type)&&(J.ssContent===R||J.ssFallback===R)){const re=ie.vnode;C(w,re,re.scopeId,re.slotScopeIds,ie.parent)}}},B=(w,R,z,b,ie,J,re,q,ne=0)=>{for(let H=ne;H<w.length;H++){const y=w[H]=q?or(w[H]):Si(w[H]);v(null,y,R,z,b,ie,J,re,q)}},E=(w,R,z,b,ie,J,re)=>{const q=R.el=w.el;let{patchFlag:ne,dynamicChildren:H,dirs:y}=R;ne|=w.patchFlag&16;const _=w.props||ft,P=R.props||ft;let k;if(z&&Tr(z,!1),(k=P.onVnodeBeforeUpdate)&&Mi(k,z,R,w),y&&Er(R,w,z,"beforeUpdate"),z&&Tr(z,!0),(_.innerHTML&&P.innerHTML==null||_.textContent&&P.textContent==null)&&u(q,""),H?S(w.dynamicChildren,H,q,z,b,$a(R,ie),J):re||X(w,R,q,null,z,b,$a(R,ie),J,!1),ne>0){if(ne&16)D(q,_,P,z,ie);else if(ne&2&&_.class!==P.class&&n(q,"class",null,P.class,ie),ne&4&&n(q,"style",_.style,P.style,ie),ne&8){const Y=R.dynamicProps;for(let j=0;j<Y.length;j++){const ue=Y[j],fe=_[ue],pe=P[ue];(pe!==fe||ue==="value")&&n(q,ue,fe,pe,ie,z)}}ne&1&&w.children!==R.children&&u(q,R.children)}else!re&&H==null&&D(q,_,P,z,ie);((k=P.onVnodeUpdated)||y)&&Jt(()=>{k&&Mi(k,z,R,w),y&&Er(R,w,z,"updated")},b)},S=(w,R,z,b,ie,J,re)=>{for(let q=0;q<R.length;q++){const ne=w[q],H=R[q],y=ne.el&&(ne.type===ai||!Gs(ne,H)||ne.shapeFlag&70)?h(ne.el):z;v(ne,H,y,null,b,ie,J,re,!0)}},D=(w,R,z,b,ie)=>{if(R!==z){if(R!==ft)for(const J in R)!sn(J)&&!(J in z)&&n(w,J,R[J],null,ie,b);for(const J in z){if(sn(J))continue;const re=z[J],q=R[J];re!==q&&J!=="value"&&n(w,J,q,re,ie,b)}"value"in z&&n(w,"value",R.value,z.value,ie)}},$=(w,R,z,b,ie,J,re,q,ne)=>{const H=R.el=w?w.el:o(""),y=R.anchor=w?w.anchor:o("");let{patchFlag:_,dynamicChildren:P,slotScopeIds:k}=R;k&&(q=q?q.concat(k):k),w==null?(r(H,z,b),r(y,z,b),B(R.children||[],z,y,ie,J,re,q,ne)):_>0&&_&64&&P&&w.dynamicChildren?(S(w.dynamicChildren,P,z,ie,J,re,q),(R.key!=null||ie&&R===ie.subTree)&&xd(w,R,!0)):X(w,R,z,y,ie,J,re,q,ne)},K=(w,R,z,b,ie,J,re,q,ne)=>{R.slotScopeIds=q,w==null?R.shapeFlag&512?ie.ctx.activate(R,z,b,re,ne):Q(R,z,b,ie,J,re,ne):se(w,R,ne)},Q=(w,R,z,b,ie,J,re)=>{const q=w.component=fm(w,b,ie);if(rd(w)&&(q.ctx.renderer=ke),pm(q,!1,re),q.asyncDep){if(ie&&ie.registerDep(q,W,re),!w.el){const ne=q.subTree=Qe(ys);p(null,ne,R,z)}}else W(q,w,R,z,ie,J,re)},se=(w,R,z)=>{const b=R.component=w.component;if(sm(w,R,z))if(b.asyncDep&&!b.asyncResolved){ee(b,R,z);return}else b.next=R,b.update();else R.el=w.el,b.vnode=R},W=(w,R,z,b,ie,J,re)=>{const q=()=>{if(w.isMounted){let{next:_,bu:P,u:k,parent:Y,vnode:j}=w;{const oe=Md(w);if(oe){_&&(_.el=j.el,ee(w,_,re)),oe.asyncDep.then(()=>{w.isUnmounted||q()});return}}let ue=_,fe;Tr(w,!1),_?(_.el=j.el,ee(w,_,re)):_=j,P&&qa(P),(fe=_.props&&_.props.onVnodeBeforeUpdate)&&Mi(fe,Y,_,j),Tr(w,!0);const pe=Xc(w),Oe=w.subTree;w.subTree=pe,v(Oe,pe,h(Oe.el),me(Oe),w,ie,J),_.el=pe.el,ue===null&&nm(w,pe.el),k&&Jt(k,ie),(fe=_.props&&_.props.onVnodeUpdated)&&Jt(()=>Mi(fe,Y,_,j),ie)}else{let _;const{el:P,props:k}=R,{bm:Y,m:j,parent:ue,root:fe,type:pe}=w,Oe=ps(R);Tr(w,!1),Y&&qa(Y),!Oe&&(_=k&&k.onVnodeBeforeMount)&&Mi(_,ue,R),Tr(w,!0);{fe.ce&&fe.ce._injectChildStyle(pe);const oe=w.subTree=Xc(w);v(null,oe,z,b,w,ie,J),R.el=oe.el}if(j&&Jt(j,ie),!Oe&&(_=k&&k.onVnodeMounted)){const oe=R;Jt(()=>Mi(_,ue,oe),ie)}(R.shapeFlag&256||ue&&ps(ue.vnode)&&ue.vnode.shapeFlag&256)&&w.a&&Jt(w.a,ie),w.isMounted=!0,R=z=b=null}};w.scope.on();const ne=w.effect=new Nh(q);w.scope.off();const H=w.update=ne.run.bind(ne),y=w.job=ne.runIfDirty.bind(ne);y.i=w,y.id=w.uid,ne.scheduler=()=>tc(y),Tr(w,!0),H()},ee=(w,R,z)=>{R.component=w;const b=w.vnode.props;w.vnode=R,w.next=null,Vp(w,R.props,b,z),jp(w,R.children,z),vr(),Bc(w),xr()},X=(w,R,z,b,ie,J,re,q,ne=!1)=>{const H=w&&w.children,y=w?w.shapeFlag:0,_=R.children,{patchFlag:P,shapeFlag:k}=R;if(P>0){if(P&128){Ee(H,_,z,b,ie,J,re,q,ne);return}else if(P&256){he(H,_,z,b,ie,J,re,q,ne);return}}k&8?(y&16&&Te(H,ie,J),_!==H&&u(z,_)):y&16?k&16?Ee(H,_,z,b,ie,J,re,q,ne):Te(H,ie,J,!0):(y&8&&u(z,""),k&16&&B(_,z,b,ie,J,re,q,ne))},he=(w,R,z,b,ie,J,re,q,ne)=>{w=w||hs,R=R||hs;const H=w.length,y=R.length,_=Math.min(H,y);let P;for(P=0;P<_;P++){const k=R[P]=ne?or(R[P]):Si(R[P]);v(w[P],k,z,null,ie,J,re,q,ne)}H>y?Te(w,ie,J,!0,!1,_):B(R,z,b,ie,J,re,q,ne,_)},Ee=(w,R,z,b,ie,J,re,q,ne)=>{let H=0;const y=R.length;let _=w.length-1,P=y-1;for(;H<=_&&H<=P;){const k=w[H],Y=R[H]=ne?or(R[H]):Si(R[H]);if(Gs(k,Y))v(k,Y,z,null,ie,J,re,q,ne);else break;H++}for(;H<=_&&H<=P;){const k=w[_],Y=R[P]=ne?or(R[P]):Si(R[P]);if(Gs(k,Y))v(k,Y,z,null,ie,J,re,q,ne);else break;_--,P--}if(H>_){if(H<=P){const k=P+1,Y=k<y?R[k].el:b;for(;H<=P;)v(null,R[H]=ne?or(R[H]):Si(R[H]),z,Y,ie,J,re,q,ne),H++}}else if(H>P)for(;H<=_;)Ie(w[H],ie,J,!0),H++;else{const k=H,Y=H,j=new Map;for(H=Y;H<=P;H++){const Ae=R[H]=ne?or(R[H]):Si(R[H]);Ae.key!=null&&j.set(Ae.key,H)}let ue,fe=0;const pe=P-Y+1;let Oe=!1,oe=0;const Me=new Array(pe);for(H=0;H<pe;H++)Me[H]=0;for(H=k;H<=_;H++){const Ae=w[H];if(fe>=pe){Ie(Ae,ie,J,!0);continue}let ve;if(Ae.key!=null)ve=j.get(Ae.key);else for(ue=Y;ue<=P;ue++)if(Me[ue-Y]===0&&Gs(Ae,R[ue])){ve=ue;break}ve===void 0?Ie(Ae,ie,J,!0):(Me[ve-Y]=H+1,ve>=oe?oe=ve:Oe=!0,v(Ae,R[ve],z,null,ie,J,re,q,ne),fe++)}const Pe=Oe?Zp(Me):hs;for(ue=Pe.length-1,H=pe-1;H>=0;H--){const Ae=Y+H,ve=R[Ae],je=Ae+1<y?R[Ae+1].el:b;Me[H]===0?v(null,ve,z,je,ie,J,re,q,ne):Oe&&(ue<0||H!==Pe[ue]?Le(ve,z,je,2):ue--)}}},Le=(w,R,z,b,ie=null)=>{const{el:J,type:re,transition:q,children:ne,shapeFlag:H}=w;if(H&6){Le(w.component.subTree,R,z,b);return}if(H&128){w.suspense.move(R,z,b);return}if(H&64){re.move(w,R,z,ke);return}if(re===ai){r(J,R,z);for(let y=0;y<ne.length;y++)Le(ne[y],R,z,b);r(w.anchor,R,z);return}if(re===eo){T(w,R,z);return}if(b!==2&&H&1&&q)if(b===0)q.beforeEnter(J),r(J,R,z),Jt(()=>q.enter(J),ie);else{const{leave:y,delayLeave:_,afterLeave:P}=q,k=()=>r(J,R,z),Y=()=>{y(J,()=>{k(),P&&P()})};_?_(J,k,Y):Y()}else r(J,R,z)},Ie=(w,R,z,b=!1,ie=!1)=>{const{type:J,props:re,ref:q,children:ne,dynamicChildren:H,shapeFlag:y,patchFlag:_,dirs:P,cacheIndex:k}=w;if(_===-2&&(ie=!1),q!=null&&Ma(q,null,z,w,!0),k!=null&&(R.renderCache[k]=void 0),y&256){R.ctx.deactivate(w);return}const Y=y&1&&P,j=!ps(w);let ue;if(j&&(ue=re&&re.onVnodeBeforeUnmount)&&Mi(ue,R,w),y&6)de(w.component,z,b);else{if(y&128){w.suspense.unmount(z,b);return}Y&&Er(w,null,R,"beforeUnmount"),y&64?w.type.remove(w,R,z,ke,b):H&&!H.hasOnce&&(J!==ai||_>0&&_&64)?Te(H,R,z,!1,!0):(J===ai&&_&384||!ie&&y&16)&&Te(ne,R,z),b&&tt(w)}(j&&(ue=re&&re.onVnodeUnmounted)||Y)&&Jt(()=>{ue&&Mi(ue,R,w),Y&&Er(w,null,R,"unmounted")},z)},tt=w=>{const{type:R,el:z,anchor:b,transition:ie}=w;if(R===ai){te(z,b);return}if(R===eo){M(w);return}const J=()=>{s(z),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(w.shapeFlag&1&&ie&&!ie.persisted){const{leave:re,delayLeave:q}=ie,ne=()=>re(z,J);q?q(w.el,J,ne):ne()}else J()},te=(w,R)=>{let z;for(;w!==R;)z=d(w),s(w),w=z;s(R)},de=(w,R,z)=>{const{bum:b,scope:ie,job:J,subTree:re,um:q,m:ne,a:H}=w;Wc(ne),Wc(H),b&&qa(b),ie.stop(),J&&(J.flags|=8,Ie(re,w,R,z)),q&&Jt(q,R),Jt(()=>{w.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},Te=(w,R,z,b=!1,ie=!1,J=0)=>{for(let re=J;re<w.length;re++)Ie(w[re],R,z,b,ie)},me=w=>{if(w.shapeFlag&6)return me(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const R=d(w.anchor||w.el),z=R&&R[vp];return z?d(z):R};let Re=!1;const De=(w,R,z)=>{w==null?R._vnode&&Ie(R._vnode,null,null,!0):v(R._vnode||null,w,R,null,null,null,z),R._vnode=w,Re||(Re=!0,Bc(),Qh(),Re=!1)},ke={p:v,um:Ie,m:Le,r:tt,mt:Q,mc:B,pc:X,pbc:S,n:me,o:i};return{render:De,hydrate:void 0,createApp:kp(De)}}function $a({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Tr({effect:i,job:e},t){t?(i.flags|=32,e.flags|=4):(i.flags&=-33,e.flags&=-5)}function Kp(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function xd(i,e,t=!1){const r=i.children,s=e.children;if(We(r)&&We(s))for(let n=0;n<r.length;n++){const a=r[n];let o=s[n];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[n]=or(s[n]),o.el=a.el),!t&&o.patchFlag!==-2&&xd(a,o)),o.type===Fa&&(o.el=a.el)}}function Zp(i){const e=i.slice(),t=[0];let r,s,n,a,o;const l=i.length;for(r=0;r<l;r++){const c=i[r];if(c!==0){if(s=t[t.length-1],i[s]<c){e[r]=s,t.push(r);continue}for(n=0,a=t.length-1;n<a;)o=n+a>>1,i[t[o]]<c?n=o+1:a=o;c<i[t[n]]&&(n>0&&(e[r]=t[n-1]),t[n]=r)}}for(n=t.length,a=t[n-1];n-- >0;)t[n]=a,a=e[a];return t}function Md(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Md(e)}function Wc(i){if(i)for(let e=0;e<i.length;e++)i[e].flags|=8}const Jp=Symbol.for("v-scx"),$p=()=>aa(Jp);function Qa(i,e,t){return yd(i,e,t)}function yd(i,e,t=ft){const{immediate:r,deep:s,flush:n,once:a}=t,o=Wt({},t),l=e&&r||!e&&n!=="post";let c;if(_n){if(n==="sync"){const f=$p();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Ti,f.resume=Ti,f.pause=Ti,f}}const u=Ht;o.call=(f,g,v)=>wi(f,u,g,v);let h=!1;n==="post"?o.scheduler=f=>{Jt(f,u&&u.suspense)}:n!=="sync"&&(h=!0,o.scheduler=(f,g)=>{g?f():tc(f)}),o.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=fp(i,e,o);return _n&&(c?c.push(d):l&&d()),d}function Qp(i,e,t){const r=this.proxy,s=At(i)?i.includes(".")?Sd(r,i):()=>r[i]:i.bind(r,r);let n;Xe(e)?n=e:(n=e.handler,t=e);const a=En(this),o=yd(s,n.bind(r),t);return a(),o}function Sd(i,e){const t=e.split(".");return()=>{let r=i;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const em=(i,e)=>e==="modelValue"||e==="model-value"?i.modelModifiers:i[`${e}Modifiers`]||i[`${gr(e)}Modifiers`]||i[`${Xr(e)}Modifiers`];function tm(i,e,...t){if(i.isUnmounted)return;const r=i.vnode.props||ft;let s=t;const n=e.startsWith("update:"),a=n&&em(r,e.slice(7));a&&(a.trim&&(s=t.map(u=>At(u)?u.trim():u)),a.number&&(s=t.map(Lf)));let o,l=r[o=ja(e)]||r[o=ja(gr(e))];!l&&n&&(l=r[o=ja(Xr(e))]),l&&wi(l,i,6,s);const c=r[o+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[o])return;i.emitted[o]=!0,wi(c,i,6,s)}}function bd(i,e,t=!1){const r=e.emitsCache,s=r.get(i);if(s!==void 0)return s;const n=i.emits;let a={},o=!1;if(!Xe(i)){const l=c=>{const u=bd(c,e,!0);u&&(o=!0,Wt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!n&&!o?(Mt(i)&&r.set(i,null),null):(We(n)?n.forEach(l=>a[l]=null):Wt(a,n),Mt(i)&&r.set(i,a),a)}function Oa(i,e){return!i||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(i,e[0].toLowerCase()+e.slice(1))||rt(i,Xr(e))||rt(i,e))}function Xc(i){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[n],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=i,m=xa(i);let p,A;try{if(t.shapeFlag&4){const M=s||r,I=M;p=Si(c.call(I,M,u,h,f,d,g)),A=o}else{const M=e;p=Si(M.length>1?M(h,{attrs:o,slots:a,emit:l}):M(h,null)),A=e.props?o:im(o)}}catch(M){cn.length=0,Da(M,i,1),p=Qe(ys)}let T=p;if(A&&v!==!1){const M=Object.keys(A),{shapeFlag:I}=T;M.length&&I&7&&(n&&M.some(Gl)&&(A=rm(A,n)),T=bs(T,A,!1,!0))}return t.dirs&&(T=bs(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(t.dirs):t.dirs),t.transition&&ic(T,t.transition),p=T,xa(m),p}const im=i=>{let e;for(const t in i)(t==="class"||t==="style"||Ra(t))&&((e||(e={}))[t]=i[t]);return e},rm=(i,e)=>{const t={};for(const r in i)(!Gl(r)||!(r.slice(9)in e))&&(t[r]=i[r]);return t};function sm(i,e,t){const{props:r,children:s,component:n}=i,{props:a,children:o,patchFlag:l}=e,c=n.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?jc(r,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==r[d]&&!Oa(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?jc(r,a,c):!0:!!a;return!1}function jc(i,e,t){const r=Object.keys(e);if(r.length!==Object.keys(i).length)return!0;for(let s=0;s<r.length;s++){const n=r[s];if(e[n]!==i[n]&&!Oa(t,n))return!0}return!1}function nm({vnode:i,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===i&&(r.el=i.el),r===i)(i=e.vnode).el=t,e=e.parent;else break}}const Ed=i=>i.__isSuspense;function am(i,e){e&&e.pendingBranch?We(i)?e.effects.push(...i):e.effects.push(i):_p(i)}const ai=Symbol.for("v-fgt"),Fa=Symbol.for("v-txt"),ys=Symbol.for("v-cmt"),eo=Symbol.for("v-stc"),cn=[];let Qt=null;function Ss(i=!1){cn.push(Qt=i?null:[])}function om(){cn.pop(),Qt=cn[cn.length-1]||null}let gn=1;function qc(i,e=!1){gn+=i,i<0&&Qt&&e&&(Qt.hasOnce=!0)}function Td(i){return i.dynamicChildren=gn>0?Qt||hs:null,om(),gn>0&&Qt&&Qt.push(i),i}function Ba(i,e,t,r,s,n){return Td(ce(i,e,t,r,s,n,!0))}function Yc(i,e,t,r,s){return Td(Qe(i,e,t,r,s,!0))}function sc(i){return i?i.__v_isVNode===!0:!1}function Gs(i,e){return i.type===e.type&&i.key===e.key}const Ad=({key:i})=>i??null,oa=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?At(i)||Dt(i)||Xe(i)?{i:jt,r:i,k:e,f:!!t}:i:null);function ce(i,e=null,t=null,r=0,s=null,n=i===ai?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Ad(e),ref:e&&oa(e),scopeId:td,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:jt};return o?(nc(l,t),n&128&&i.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),gn>0&&!a&&Qt&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&Qt.push(l),l}const Qe=lm;function lm(i,e=null,t=null,r=0,s=null,n=!1){if((!i||i===Pp)&&(i=ys),sc(i)){const o=bs(i,e,!0);return t&&nc(o,t),gn>0&&!n&&Qt&&(o.shapeFlag&6?Qt[Qt.indexOf(i)]=o:Qt.push(o)),o.patchFlag=-2,o}if(vm(i)&&(i=i.__vccOpts),e){e=cm(e);let{class:o,style:l}=e;o&&!At(o)&&(e.class=Ia(o)),Mt(l)&&(ec(l)&&!We(l)&&(l=Wt({},l)),e.style=Ns(l))}const a=At(i)?1:Ed(i)?128:xp(i)?64:Mt(i)?4:Xe(i)?2:0;return ce(i,e,t,r,s,a,n,!0)}function cm(i){return i?ec(i)||dd(i)?Wt({},i):i:null}function bs(i,e,t=!1,r=!1){const{props:s,ref:n,patchFlag:a,children:o,transition:l}=i,c=e?um(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&Ad(c),ref:e&&e.ref?t&&n?We(n)?n.concat(oa(e)):[n,oa(e)]:oa(e):n,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetStart:i.targetStart,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==ai?a===-1?16:a|16:a,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&bs(i.ssContent),ssFallback:i.ssFallback&&bs(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&r&&ic(u,l.clone(u)),u}function la(i=" ",e=0){return Qe(Fa,null,i,e)}function Si(i){return i==null||typeof i=="boolean"?Qe(ys):We(i)?Qe(ai,null,i.slice()):sc(i)?or(i):Qe(Fa,null,String(i))}function or(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:bs(i)}function nc(i,e){let t=0;const{shapeFlag:r}=i;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),nc(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!dd(e)?e._ctx=jt:s===3&&jt&&(jt.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:jt},t=32):(e=String(e),r&64?(t=16,e=[la(e)]):t=8);i.children=e,i.shapeFlag|=t}function um(...i){const e={};for(let t=0;t<i.length;t++){const r=i[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ia([e.class,r.class]));else if(s==="style")e.style=Ns([e.style,r.style]);else if(Ra(s)){const n=e[s],a=r[s];a&&n!==a&&!(We(n)&&n.includes(a))&&(e[s]=n?[].concat(n,a):a)}else s!==""&&(e[s]=r[s])}return e}function Mi(i,e,t,r=null){wi(i,e,7,[t,r])}const hm=cd();let dm=0;function fm(i,e,t){const r=i.type,s=(e?e.appContext:i.appContext)||hm,n={uid:dm++,vnode:i,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pd(r,s),emitsOptions:bd(r,s),emit:null,emitted:null,propsDefaults:ft,inheritAttrs:r.inheritAttrs,ctx:ft,data:ft,props:ft,attrs:ft,slots:ft,refs:ft,setupState:ft,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=e?e.root:n,n.emit=tm.bind(null,n),i.ce&&i.ce(n),n}let Ht=null,Sa,Ko;{const i=La(),e=(t,r)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(r),n=>{s.length>1?s.forEach(a=>a(n)):s[0](n)}};Sa=e("__VUE_INSTANCE_SETTERS__",t=>Ht=t),Ko=e("__VUE_SSR_SETTERS__",t=>_n=t)}const En=i=>{const e=Ht;return Sa(i),i.scope.on(),()=>{i.scope.off(),Sa(e)}},Kc=()=>{Ht&&Ht.scope.off(),Sa(null)};function wd(i){return i.vnode.shapeFlag&4}let _n=!1;function pm(i,e=!1,t=!1){e&&Ko(e);const{props:r,children:s}=i.vnode,n=wd(i);Hp(i,r,n,e),Xp(i,s,t);const a=n?mm(i,e):void 0;return e&&Ko(!1),a}function mm(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,Ip);const{setup:r}=t;if(r){vr();const s=i.setupContext=r.length>1?_m(i):null,n=En(i),a=Sn(r,i,0,[i.props,s]),o=Lh(a);if(xr(),n(),(o||i.sp)&&!ps(i)&&id(i),o){if(a.then(Kc,Kc),e)return a.then(l=>{Zc(i,l)}).catch(l=>{Da(l,i,0)});i.asyncDep=a}else Zc(i,a)}else Rd(i)}function Zc(i,e,t){Xe(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Mt(e)&&(i.setupState=Zh(e)),Rd(i)}function Rd(i,e,t){const r=i.type;i.render||(i.render=r.render||Ti);{const s=En(i);vr();try{Dp(i)}finally{xr(),s()}}}const gm={get(i,e){return It(i,"get",""),i[e]}};function _m(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,gm),slots:i.slots,emit:i.emit,expose:e}}function ac(i){return i.exposed?i.exposeProxy||(i.exposeProxy=new Proxy(Zh(np(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ln)return ln[t](i)},has(e,t){return t in e||t in ln}})):i.proxy}function vm(i){return Xe(i)&&"__vccOpts"in i}const gs=(i,e)=>hp(i,e,_n),xm="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zo;const Jc=typeof window<"u"&&window.trustedTypes;if(Jc)try{Zo=Jc.createPolicy("vue",{createHTML:i=>i})}catch{}const Cd=Zo?i=>Zo.createHTML(i):i=>i,Mm="http://www.w3.org/2000/svg",ym="http://www.w3.org/1998/Math/MathML",Gi=typeof document<"u"?document:null,$c=Gi&&Gi.createElement("template"),Sm={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,r)=>{const s=e==="svg"?Gi.createElementNS(Mm,i):e==="mathml"?Gi.createElementNS(ym,i):t?Gi.createElement(i,{is:t}):Gi.createElement(i);return i==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:i=>Gi.createTextNode(i),createComment:i=>Gi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Gi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,r,s,n){const a=t?t.previousSibling:e.lastChild;if(s&&(s===n||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===n||!(s=s.nextSibling)););else{$c.innerHTML=Cd(r==="svg"?`<svg>${i}</svg>`:r==="mathml"?`<math>${i}</math>`:i);const o=$c.content;if(r==="svg"||r==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},bm=Symbol("_vtc");function Em(i,e,t){const r=i[bm];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const Qc=Symbol("_vod"),Tm=Symbol("_vsh"),Am=Symbol(""),wm=/(^|;)\s*display\s*:/;function Rm(i,e,t){const r=i.style,s=At(t);let n=!1;if(t&&!s){if(e)if(At(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&ca(r,o,"")}else for(const a in e)t[a]==null&&ca(r,a,"");for(const a in t)a==="display"&&(n=!0),ca(r,a,t[a])}else if(s){if(e!==t){const a=r[Am];a&&(t+=";"+a),r.cssText=t,n=wm.test(t)}}else e&&i.removeAttribute("style");Qc in i&&(i[Qc]=n?r.display:"",i[Tm]&&(r.display="none"))}const eu=/\s*!important$/;function ca(i,e,t){if(We(t))t.forEach(r=>ca(i,e,r));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const r=Cm(i,e);eu.test(t)?i.setProperty(Xr(r),t.replace(eu,""),"important"):i[r]=t}}const tu=["Webkit","Moz","ms"],to={};function Cm(i,e){const t=to[e];if(t)return t;let r=gr(e);if(r!=="filter"&&r in i)return to[e]=r;r=Ih(r);for(let s=0;s<tu.length;s++){const n=tu[s]+r;if(n in i)return to[e]=n}return e}const iu="http://www.w3.org/1999/xlink";function ru(i,e,t,r,s,n=Ff(e)){r&&e.startsWith("xlink:")?t==null?i.removeAttributeNS(iu,e.slice(6,e.length)):i.setAttributeNS(iu,e,t):t==null||n&&!Uh(t)?i.removeAttribute(e):i.setAttribute(e,n?"":Wr(t)?String(t):t)}function su(i,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(i[e]=e==="innerHTML"?Cd(t):t);return}const n=i.tagName;if(e==="value"&&n!=="PROGRESS"&&!n.includes("-")){const o=n==="OPTION"?i.getAttribute("value")||"":i.value,l=t==null?i.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in i))&&(i.value=l),t==null&&i.removeAttribute(e),i._value=t;return}let a=!1;if(t===""||t==null){const o=typeof i[e];o==="boolean"?t=Uh(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(s||e)}function Pm(i,e,t,r){i.addEventListener(e,t,r)}function Lm(i,e,t,r){i.removeEventListener(e,t,r)}const nu=Symbol("_vei");function Im(i,e,t,r,s=null){const n=i[nu]||(i[nu]={}),a=n[e];if(r&&a)a.value=r;else{const[o,l]=Dm(e);if(r){const c=n[e]=Om(r,s);Pm(i,o,c,l)}else a&&(Lm(i,o,a,l),n[e]=void 0)}}const au=/(?:Once|Passive|Capture)$/;function Dm(i){let e;if(au.test(i)){e={};let t;for(;t=i.match(au);)i=i.slice(0,i.length-t[0].length),e[t[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Xr(i.slice(2)),e]}let io=0;const Um=Promise.resolve(),Nm=()=>io||(Um.then(()=>io=0),io=Date.now());function Om(i,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;wi(Fm(r,t.value),e,5,[r])};return t.value=i,t.attached=Nm(),t}function Fm(i,e){if(We(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ou=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,Bm=(i,e,t,r,s,n)=>{const a=s==="svg";e==="class"?Em(i,r,a):e==="style"?Rm(i,t,r):Ra(e)?Gl(e)||Im(i,e,t,r,n):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):km(i,e,r,a))?(su(i,e,r),!i.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ru(i,e,r,a,n,e!=="value")):i._isVueCE&&(/[A-Z]/.test(e)||!At(r))?su(i,gr(e),r,n,e):(e==="true-value"?i._trueValue=r:e==="false-value"&&(i._falseValue=r),ru(i,e,r,a))};function km(i,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in i&&ou(e)&&Xe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ou(e)&&At(t)?!1:e in i}const zm=Wt({patchProp:Bm},Sm);let lu;function Hm(){return lu||(lu=qp(zm))}const Vm=(...i)=>{const e=Hm().createApp(...i),{mount:t}=e;return e.mount=r=>{const s=Wm(r);if(!s)return;const n=e._component;!Xe(n)&&!n.render&&!n.template&&(n.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Gm(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Gm(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function Wm(i){return At(i)?document.querySelector(i):i}const Xm=""+new URL("../blues_boot_blue.png",import.meta.url).href,jm=""+new URL("../blues_boot_white.png",import.meta.url).href;/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/const oc="174",qm=0,cu=1,Ym=2,Pd=1,Km=2,Vi=3,Zi=0,qt=1,Ei=2,pr=0,_s=1,uu=2,hu=3,du=4,Zm=5,Fr=100,Jm=101,$m=102,Qm=103,eg=104,tg=200,ig=201,rg=202,sg=203,Jo=204,$o=205,ng=206,ag=207,og=208,lg=209,cg=210,ug=211,hg=212,dg=213,fg=214,Qo=0,el=1,tl=2,Es=3,il=4,rl=5,sl=6,nl=7,Ld=0,pg=1,mg=2,mr=0,gg=1,_g=2,vg=3,xg=4,Mg=5,yg=6,Sg=7,fu="attached",bg="detached",Id=300,Ts=301,As=302,al=303,ol=304,ka=306,ws=1e3,ur=1001,ba=1002,Vt=1003,Dd=1004,en=1005,ei=1006,ua=1007,ji=1008,Ji=1009,Ud=1010,Nd=1011,vn=1012,lc=1013,Vr=1014,gi=1015,Tn=1016,cc=1017,uc=1018,Rs=1020,Od=35902,Fd=1021,Bd=1022,oi=1023,kd=1024,zd=1025,vs=1026,Cs=1027,hc=1028,dc=1029,Hd=1030,fc=1031,pc=1033,ha=33776,da=33777,fa=33778,pa=33779,ll=35840,cl=35841,ul=35842,hl=35843,dl=36196,fl=37492,pl=37496,ml=37808,gl=37809,_l=37810,vl=37811,xl=37812,Ml=37813,yl=37814,Sl=37815,bl=37816,El=37817,Tl=37818,Al=37819,wl=37820,Rl=37821,ma=36492,Cl=36494,Pl=36495,Vd=36283,Ll=36284,Il=36285,Dl=36286,xn=2300,Mn=2301,ro=2302,pu=2400,mu=2401,gu=2402,Eg=2500,Tg=0,Gd=1,Ul=2,Ag=3200,wg=3201,Wd=0,Rg=1,cr="",Rt="srgb",Xt="srgb-linear",Ea="linear",ct="srgb",Yr=7680,_u=519,Cg=512,Pg=513,Lg=514,Xd=515,Ig=516,Dg=517,Ug=518,Ng=519,Nl=35044,vu="300 es",qi=2e3,Ta=2001;class Os{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const s=r[e];if(s!==void 0){const n=s.indexOf(t);n!==-1&&s.splice(n,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const s=r.slice(0);for(let n=0,a=s.length;n<a;n++)s[n].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let xu=1234567;const un=Math.PI/180,Ps=180/Math.PI;function xi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[r&255]+Pt[r>>8&255]+Pt[r>>16&255]+Pt[r>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function mc(i,e){return(i%e+e)%e}function Og(i,e,t,r,s){return r+(i-e)*(s-r)/(t-e)}function Fg(i,e,t){return i!==e?(t-i)/(e-i):0}function hn(i,e,t){return(1-t)*i+t*e}function Bg(i,e,t,r){return hn(i,e,1-Math.exp(-t*r))}function kg(i,e=1){return e-Math.abs(mc(i,e*2)-e)}function zg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Hg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Vg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Gg(i,e){return i+Math.random()*(e-i)}function Wg(i){return i*(.5-Math.random())}function Xg(i){i!==void 0&&(xu=i);let e=xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(i){return i*un}function qg(i){return i*Ps}function Yg(i){return(i&i-1)===0&&i!==0}function Kg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Jg(i,e,t,r,s){const n=Math.cos,a=Math.sin,o=n(t/2),l=a(t/2),c=n((e+r)/2),u=a((e+r)/2),h=n((e-r)/2),d=a((e-r)/2),f=n((r-e)/2),g=a((r-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function pi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function nt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const $g={DEG2RAD:un,RAD2DEG:Ps,generateUUID:xi,clamp:qe,euclideanModulo:mc,mapLinear:Og,inverseLerp:Fg,lerp:hn,damp:Bg,pingpong:kg,smoothstep:zg,smootherstep:Hg,randInt:Vg,randFloat:Gg,randFloatSpread:Wg,seededRandom:Xg,degToRad:jg,radToDeg:qg,isPowerOfTwo:Yg,ceilPowerOfTwo:Kg,floorPowerOfTwo:Zg,setQuaternionFromProperEuler:Jg,normalize:nt,denormalize:pi};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,s=e.elements;return this.x=s[0]*t+s[3]*r+s[6],this.y=s[1]*t+s[4]*r+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),s=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*r-a*s+e.x,this.y=n*s+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,r,s,n,a,o,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,s,n,a,o,l,c)}set(e,t,r,s,n,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=n,u[5]=l,u[6]=r,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,n=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],u=r[4],h=r[7],d=r[2],f=r[5],g=r[8],v=s[0],m=s[3],p=s[6],A=s[1],T=s[4],M=s[7],I=s[2],L=s[5],C=s[8];return n[0]=a*v+o*A+l*I,n[3]=a*m+o*T+l*L,n[6]=a*p+o*M+l*C,n[1]=c*v+u*A+h*I,n[4]=c*m+u*T+h*L,n[7]=c*p+u*M+h*C,n[2]=d*v+f*A+g*I,n[5]=d*m+f*T+g*L,n[8]=d*p+f*M+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-r*n*u+r*o*l+s*n*c-s*a*l}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*n,f=c*n-a*l,g=t*h+r*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(s*c-u*r)*v,e[2]=(o*r-s*a)*v,e[3]=d*v,e[4]=(u*t-s*l)*v,e[5]=(s*n-o*t)*v,e[6]=f*v,e[7]=(r*l-c*t)*v,e[8]=(a*t-r*n)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,s,n,a,o){const l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(so.makeScale(e,t)),this}rotate(e){return this.premultiply(so.makeRotation(-e)),this}translate(e,t){return this.premultiply(so.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<9;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const so=new ze;function jd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yn(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qg(){const i=yn("canvas");return i.style.display="block",i}const Mu={};function Ur(i){i in Mu||(Mu[i]=!0,console.warn(i))}function e_(i,e,t){return new Promise(function(r,s){function n(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(n,t);break;default:r()}}setTimeout(n,t)})}function t_(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function i_(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yu=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Su=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const i={enabled:!0,workingColorSpace:Xt,spaces:{},convert:function(s,n,a){return this.enabled===!1||n===a||!n||!a||(this.spaces[n].transfer===ct&&(s.r=Yi(s.r),s.g=Yi(s.g),s.b=Yi(s.b)),this.spaces[n].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[n].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},fromWorkingColorSpace:function(s,n){return this.convert(s,this.workingColorSpace,n)},toWorkingColorSpace:function(s,n){return this.convert(s,n,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cr?Ea:this.spaces[s].transfer},getLuminanceCoefficients:function(s,n=this.workingColorSpace){return s.fromArray(this.spaces[n].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,n,a){return s.copy(this.spaces[n].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Xt]:{primaries:e,whitePoint:r,transfer:Ea,toXYZ:yu,fromXYZ:Su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:r,transfer:ct,toXYZ:yu,fromXYZ:Su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}const Ze=r_();function Yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Kr;class s_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Kr===void 0&&(Kr=yn("canvas")),Kr.width=e.width,Kr.height=e.height;const r=Kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Kr}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yn("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height),n=s.data;for(let a=0;a<n.length;a++)n[a]=Yi(n[a]/255)*255;return r.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Yi(t[r]/255)*255):t[r]=Yi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let n_=0;class gc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},s=this.data;if(s!==null){let n;if(Array.isArray(s)){n=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?n.push(no(s[a].image)):n.push(no(s[a]))}else n=no(s);r.url=n}return t||(e.images[this.uuid]=r),r}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?s_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let a_=0;class Tt extends Os{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,r=ur,s=ur,n=ei,a=ji,o=oi,l=Ji,c=Tt.DEFAULT_ANISOTROPY,u=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=xi(),this.name="",this.source=new gc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case ba:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case ba:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Id;Tt.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,r=0,s=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,s){return this.x=e,this.y=t,this.z=r,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*s+a[12]*n,this.y=a[1]*t+a[5]*r+a[9]*s+a[13]*n,this.z=a[2]*t+a[6]*r+a[10]*s+a[14]*n,this.w=a[3]*t+a[7]*r+a[11]*s+a[15]*n,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,s,n;const a=e.elements,o=a[0],l=a[4],c=a[8],u=a[1],h=a[5],d=a[9],f=a[2],g=a[6],v=a[10];if(Math.abs(l-u)<.01&&Math.abs(c-f)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(c+f)<.1&&Math.abs(d+g)<.1&&Math.abs(o+h+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const p=(o+1)/2,A=(h+1)/2,T=(v+1)/2,M=(l+u)/4,I=(c+f)/4,L=(d+g)/4;return p>A&&p>T?p<.01?(r=0,s=.707106781,n=.707106781):(r=Math.sqrt(p),s=M/r,n=I/r):A>T?A<.01?(r=.707106781,s=0,n=.707106781):(s=Math.sqrt(A),r=M/s,n=L/s):T<.01?(r=.707106781,s=.707106781,n=0):(n=Math.sqrt(T),r=I/n,s=L/n),this.set(r,s,n,t),this}let m=Math.sqrt((g-d)*(g-d)+(c-f)*(c-f)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(c-f)/m,this.z=(u-l)/m,this.w=Math.acos((o+h+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class o_ extends Os{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const s={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const n=new Tt(s,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);n.flipY=!1,n.generateMipmaps=r.generateMipmaps,n.internalFormat=r.internalFormat,this.textures=[];const a=r.count;for(let o=0;o<a;o++)this.textures[o]=n.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let s=0,n=this.textures.length;s<n;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gc(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gr extends o_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class qd extends Tt{constructor(e=null,t=1,r=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class l_ extends Tt{constructor(e=null,t=1,r=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:s},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mr{constructor(e=0,t=0,r=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=s}static slerpFlat(e,t,r,s,n,a,o){let l=r[s+0],c=r[s+1],u=r[s+2],h=r[s+3];const d=n[a+0],f=n[a+1],g=n[a+2],v=n[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==g){let m=1-o;const p=l*d+c*f+u*g+h*v,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const I=Math.sqrt(T),L=Math.atan2(I,p*A);m=Math.sin(m*L)/I,o=Math.sin(o*L)/I}const M=o*A;if(l=l*m+d*M,c=c*m+f*M,u=u*m+g*M,h=h*m+v*M,m===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=I,c*=I,u*=I,h*=I}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,s,n,a){const o=r[s],l=r[s+1],c=r[s+2],u=r[s+3],h=n[a],d=n[a+1],f=n[a+2],g=n[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,s){return this._x=e,this._y=t,this._z=r,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,s=e._y,n=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),u=o(s/2),h=o(n/2),d=l(r/2),f=l(s/2),g=l(n/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,s=Math.sin(r);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],s=t[4],n=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=r+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(n-c)*f,this._z=(a-s)*f}else if(r>o&&r>h){const f=2*Math.sqrt(1+r-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(n+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-r-h);this._w=(n-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-r-o);this._w=(a-s)/f,this._x=(n+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const s=Math.min(1,t/r);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,s=e._y,n=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=r*u+a*o+s*c-n*l,this._y=s*u+a*l+n*o-r*c,this._z=n*u+a*c+r*l-s*o,this._w=a*u-r*o-s*l-n*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,s=this._y,n=this._z,a=this._w;let o=a*e._w+r*e._x+s*e._y+n*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=r,this._y=s,this._z=n,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*r+t*this._x,this._y=f*s+t*this._y,this._z=f*n+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=r*h+this._x*d,this._y=s*h+this._y*d,this._z=n*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),s=Math.sqrt(1-r),n=Math.sqrt(r);return this.set(s*Math.sin(e),s*Math.cos(e),n*Math.sin(t),n*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,r=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6]*s,this.y=n[1]*t+n[4]*r+n[7]*s,this.z=n[2]*t+n[5]*r+n[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,s=this.z,n=e.elements,a=1/(n[3]*t+n[7]*r+n[11]*s+n[15]);return this.x=(n[0]*t+n[4]*r+n[8]*s+n[12])*a,this.y=(n[1]*t+n[5]*r+n[9]*s+n[13])*a,this.z=(n[2]*t+n[6]*r+n[10]*s+n[14])*a,this}applyQuaternion(e){const t=this.x,r=this.y,s=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*r),u=2*(o*t-n*s),h=2*(n*r-a*t);return this.x=t+l*c+a*h-o*u,this.y=r+l*u+o*c-n*h,this.z=s+l*h+n*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,s=this.z,n=e.elements;return this.x=n[0]*t+n[4]*r+n[8]*s,this.y=n[1]*t+n[5]*r+n[9]*s,this.z=n[2]*t+n[6]*r+n[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(qe(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,s=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-n*o,this.y=n*a-r*l,this.z=r*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(qe(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,s=this.z-e.z;return t*t+r*r+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const s=Math.sin(t)*e;return this.x=s*Math.sin(r),this.y=Math.cos(t)*e,this.z=s*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ao=new F,bu=new Mr;class Ci{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const n=r.getAttribute("position");if(t===!0&&n!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=n.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(n,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Dn.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Dn.copy(r.boundingBox)),Dn.applyMatrix4(e.matrixWorld),this.union(Dn)}const s=e.children;for(let n=0,a=s.length;n<a;n++)this.expandByObject(s[n],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ws),Un.subVectors(this.max,Ws),Zr.subVectors(e.a,Ws),Jr.subVectors(e.b,Ws),$r.subVectors(e.c,Ws),Qi.subVectors(Jr,Zr),er.subVectors($r,Jr),Ar.subVectors(Zr,$r);let t=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Ar.z,Ar.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Ar.z,0,-Ar.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Ar.y,Ar.x,0];return!oo(t,Zr,Jr,$r,Un)||(t=[1,0,0,0,1,0,0,0,1],!oo(t,Zr,Jr,$r,Un))?!1:(Nn.crossVectors(Qi,er),t=[Nn.x,Nn.y,Nn.z],oo(t,Zr,Jr,$r,Un))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new F,new F,new F,new F,new F,new F,new F,new F],hi=new F,Dn=new Ci,Zr=new F,Jr=new F,$r=new F,Qi=new F,er=new F,Ar=new F,Ws=new F,Un=new F,Nn=new F,wr=new F;function oo(i,e,t,r,s){for(let n=0,a=i.length-3;n<=a;n+=3){wr.fromArray(i,n);const o=s.x*Math.abs(wr.x)+s.y*Math.abs(wr.y)+s.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=r.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const c_=new Ci,Xs=new F,lo=new F;class Pi{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):c_.setFromPoints(e).getCenter(r);let s=0;for(let n=0,a=e.length;n<a;n++)s=Math.max(s,r.distanceToSquared(e[n]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xs.subVectors(e,this.center);const t=Xs.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),s=(r-this.radius)*.5;this.center.addScaledVector(Xs,s/r),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xs.copy(e.center).add(lo)),this.expandByPoint(Xs.copy(e.center).sub(lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new F,co=new F,On=new F,tr=new F,uo=new F,Fn=new F,ho=new F;class za{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,s){co.copy(e).add(t).multiplyScalar(.5),On.copy(t).sub(e).normalize(),tr.copy(this.origin).sub(co);const n=e.distanceTo(t)*.5,a=-this.direction.dot(On),o=tr.dot(this.direction),l=-tr.dot(On),c=tr.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=n*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=n,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-n,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*n+o)),d=h>0?-n:Math.min(Math.max(-n,-l),n),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-n,-l),n),f=d*(d+2*l)+c):(h=Math.max(0,-(a*n+o)),d=h>0?n:Math.min(Math.max(-n,-l),n),f=-h*h+d*(d+2*l)+c);else d=a>0?-n:n,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(co).addScaledVector(On,d),f}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),s=Fi.dot(Fi)-r*r,n=e.radius*e.radius;if(s>n)return null;const a=Math.sqrt(n-s),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,s,n,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(r=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(r=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(n=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(n=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),r>a||n>s||((n>r||isNaN(r))&&(r=n),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),r>l||o>s)||((o>r||r!==r)&&(r=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(r>=0?r:s,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,s,n){uo.subVectors(t,e),Fn.subVectors(r,e),ho.crossVectors(uo,Fn);let a=this.direction.dot(ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tr.subVectors(this.origin,e);const l=o*this.direction.dot(Fn.crossVectors(tr,Fn));if(l<0)return null;const c=o*this.direction.dot(uo.cross(tr));if(c<0||l+c>a)return null;const u=-o*tr.dot(ho);return u<0?null:this.at(u/a,n)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(e,t,r,s,n,a,o,l,c,u,h,d,f,g,v,m){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,s,n,a,o,l,c,u,h,d,f,g,v,m)}set(e,t,r,s,n,a,o,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=r,p[12]=s,p[1]=n,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,s=1/Qr.setFromMatrixColumn(e,0).length(),n=1/Qr.setFromMatrixColumn(e,1).length(),a=1/Qr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*s,t[1]=r[1]*s,t[2]=r[2]*s,t[3]=0,t[4]=r[4]*n,t[5]=r[5]*n,t[6]=r[6]*n,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,s=e.y,n=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(s),c=Math.sin(s),u=Math.cos(n),h=Math.sin(n);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d+v*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,h_)}lookAt(e,t,r){const s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ir.crossVectors(r,Kt),ir.lengthSq()===0&&(Math.abs(r.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ir.crossVectors(r,Kt)),ir.normalize(),Bn.crossVectors(Kt,ir),s[0]=ir.x,s[4]=Bn.x,s[8]=Kt.x,s[1]=ir.y,s[5]=Bn.y,s[9]=Kt.y,s[2]=ir.z,s[6]=Bn.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,s=t.elements,n=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],u=r[1],h=r[5],d=r[9],f=r[13],g=r[2],v=r[6],m=r[10],p=r[14],A=r[3],T=r[7],M=r[11],I=r[15],L=s[0],C=s[4],B=s[8],E=s[12],S=s[1],D=s[5],$=s[9],K=s[13],Q=s[2],se=s[6],W=s[10],ee=s[14],X=s[3],he=s[7],Ee=s[11],Le=s[15];return n[0]=a*L+o*S+l*Q+c*X,n[4]=a*C+o*D+l*se+c*he,n[8]=a*B+o*$+l*W+c*Ee,n[12]=a*E+o*K+l*ee+c*Le,n[1]=u*L+h*S+d*Q+f*X,n[5]=u*C+h*D+d*se+f*he,n[9]=u*B+h*$+d*W+f*Ee,n[13]=u*E+h*K+d*ee+f*Le,n[2]=g*L+v*S+m*Q+p*X,n[6]=g*C+v*D+m*se+p*he,n[10]=g*B+v*$+m*W+p*Ee,n[14]=g*E+v*K+m*ee+p*Le,n[3]=A*L+T*S+M*Q+I*X,n[7]=A*C+T*D+M*se+I*he,n[11]=A*B+T*$+M*W+I*Ee,n[15]=A*E+T*K+M*ee+I*Le,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],s=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+n*l*h-s*c*h-n*o*d+r*c*d+s*o*f-r*l*f)+v*(+t*l*f-t*c*d+n*a*d-s*a*f+s*c*u-n*l*u)+m*(+t*c*h-t*o*f-n*a*h+r*a*f+n*o*u-r*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-r*a*d+r*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],s=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],A=h*m*c-v*d*c+v*l*f-o*m*f-h*l*p+o*d*p,T=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,M=u*v*c-g*h*c+g*o*f-a*v*f-u*o*p+a*h*p,I=g*h*l-u*v*l-g*o*d+a*v*d+u*o*m-a*h*m,L=t*A+r*T+s*M+n*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return e[0]=A*C,e[1]=(v*d*n-h*m*n-v*s*f+r*m*f+h*s*p-r*d*p)*C,e[2]=(o*m*n-v*l*n+v*s*c-r*m*c-o*s*p+r*l*p)*C,e[3]=(h*l*n-o*d*n-h*s*c+r*d*c+o*s*f-r*l*f)*C,e[4]=T*C,e[5]=(u*m*n-g*d*n+g*s*f-t*m*f-u*s*p+t*d*p)*C,e[6]=(g*l*n-a*m*n-g*s*c+t*m*c+a*s*p-t*l*p)*C,e[7]=(a*d*n-u*l*n+u*s*c-t*d*c-a*s*f+t*l*f)*C,e[8]=M*C,e[9]=(g*h*n-u*v*n-g*r*f+t*v*f+u*r*p-t*h*p)*C,e[10]=(a*v*n-g*o*n+g*r*c-t*v*c-a*r*p+t*o*p)*C,e[11]=(u*o*n-a*h*n-u*r*c+t*h*c+a*r*f-t*o*f)*C,e[12]=I*C,e[13]=(u*v*s-g*h*s+g*r*d-t*v*d-u*r*m+t*h*m)*C,e[14]=(g*o*s-a*v*s-g*r*l+t*v*l+a*r*m-t*o*m)*C,e[15]=(a*h*s-u*o*s+u*r*l-t*h*l-a*r*d+t*o*d)*C,this}scale(e){const t=this.elements,r=e.x,s=e.y,n=e.z;return t[0]*=r,t[4]*=s,t[8]*=n,t[1]*=r,t[5]*=s,t[9]*=n,t[2]*=r,t[6]*=s,t[10]*=n,t[3]*=r,t[7]*=s,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,s))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),s=Math.sin(t),n=1-r,a=e.x,o=e.y,l=e.z,c=n*a,u=n*o;return this.set(c*a+r,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+r,u*l-s*a,0,c*l-s*o,u*l+s*a,n*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,s,n,a){return this.set(1,r,n,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,r){const s=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,u=a+a,h=o+o,d=n*c,f=n*u,g=n*h,v=a*u,m=a*h,p=o*h,A=l*c,T=l*u,M=l*h,I=r.x,L=r.y,C=r.z;return s[0]=(1-(v+p))*I,s[1]=(f+M)*I,s[2]=(g-T)*I,s[3]=0,s[4]=(f-M)*L,s[5]=(1-(d+p))*L,s[6]=(m+A)*L,s[7]=0,s[8]=(g+T)*C,s[9]=(m-A)*C,s[10]=(1-(d+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,r){const s=this.elements;let n=Qr.set(s[0],s[1],s[2]).length();const a=Qr.set(s[4],s[5],s[6]).length(),o=Qr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(n=-n),e.x=s[12],e.y=s[13],e.z=s[14],di.copy(this);const l=1/n,c=1/a,u=1/o;return di.elements[0]*=l,di.elements[1]*=l,di.elements[2]*=l,di.elements[4]*=c,di.elements[5]*=c,di.elements[6]*=c,di.elements[8]*=u,di.elements[9]*=u,di.elements[10]*=u,t.setFromRotationMatrix(di),r.x=n,r.y=a,r.z=o,this}makePerspective(e,t,r,s,n,a,o=qi){const l=this.elements,c=2*n/(t-e),u=2*n/(r-s),h=(t+e)/(t-e),d=(r+s)/(r-s);let f,g;if(o===qi)f=-(a+n)/(a-n),g=-2*a*n/(a-n);else if(o===Ta)f=-a/(a-n),g=-a*n/(a-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,s,n,a,o=qi){const l=this.elements,c=1/(t-e),u=1/(r-s),h=1/(a-n),d=(t+e)*c,f=(r+s)*u;let g,v;if(o===qi)g=(a+n)*h,v=-2*h;else if(o===Ta)g=n*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let s=0;s<16;s++)if(t[s]!==r[s])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Qr=new F,di=new He,u_=new F(0,0,0),h_=new F(1,1,1),ir=new F,Bn=new F,Kt=new F,Eu=new He,Tu=new Mr;class Ri{constructor(e=0,t=0,r=0,s=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,s=this._order){return this._x=e,this._y=t,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const s=e.elements,n=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,n),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Eu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eu,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tu.setFromEuler(this),this.setFromQuaternion(Tu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class Yd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let d_=0;const Au=new F,es=new Mr,Bi=new He,kn=new F,js=new F,f_=new F,p_=new Mr,wu=new F(1,0,0),Ru=new F(0,1,0),Cu=new F(0,0,1),Pu={type:"added"},m_={type:"removed"},ts={type:"childadded",child:null},fo={type:"childremoved",child:null};class mt extends Os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new F,t=new Ri,r=new Mr,s=new F(1,1,1);function n(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(n),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new ze}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(wu,e)}rotateY(e){return this.rotateOnAxis(Ru,e)}rotateZ(e){return this.rotateOnAxis(Cu,e)}translateOnAxis(e,t){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wu,e)}translateY(e){return this.translateOnAxis(Ru,e)}translateZ(e){return this.translateOnAxis(Cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?kn.copy(e):kn.set(e,t,r);const s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(js,kn,this.up):Bi.lookAt(kn,js,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Bi),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pu),ts.child=e,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m_),fo.child=e,this.dispatchEvent(fo),fo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pu),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,s=this.children.length;r<s;r++){const n=this.children[r].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,s=t.length;r<s;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let n=0,a=s.length;n<a;n++)s[n].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];n(e.shapes,h)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));s.material=o}else s.material=n(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),u.length>0&&(r.images=u),h.length>0&&(r.shapes=h),d.length>0&&(r.skeletons=d),f.length>0&&(r.animations=f),g.length>0&&(r.nodes=g)}return r.object=s,r;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const s=e.children[r];this.add(s.clone())}return this}}mt.DEFAULT_UP=new F(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new F,ki=new F,po=new F,zi=new F,is=new F,rs=new F,Lu=new F,mo=new F,go=new F,_o=new F,vo=new et,xo=new et,Mo=new et;class mi{constructor(e=new F,t=new F,r=new F){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,s){s.subVectors(r,t),fi.subVectors(e,t),s.cross(fi);const n=s.lengthSq();return n>0?s.multiplyScalar(1/Math.sqrt(n)):s.set(0,0,0)}static getBarycoord(e,t,r,s,n){fi.subVectors(s,t),ki.subVectors(r,t),po.subVectors(e,t);const a=fi.dot(fi),o=fi.dot(ki),l=fi.dot(po),c=ki.dot(ki),u=ki.dot(po),h=a*c-o*o;if(h===0)return n.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return n.set(1-f-g,g,f)}static containsPoint(e,t,r,s){return this.getBarycoord(e,t,r,s,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,r,s,n,a,o,l){return this.getBarycoord(e,t,r,s,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,r,s,n,a){return vo.setScalar(0),xo.setScalar(0),Mo.setScalar(0),vo.fromBufferAttribute(e,t),xo.fromBufferAttribute(e,r),Mo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vo,n.x),a.addScaledVector(xo,n.y),a.addScaledVector(Mo,n.z),a}static isFrontFacing(e,t,r,s){return fi.subVectors(r,t),ki.subVectors(e,t),fi.cross(ki).dot(s)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,s){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,r,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),fi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,s,n){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,s,n)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,s=this.b,n=this.c;let a,o;is.subVectors(s,r),rs.subVectors(n,r),mo.subVectors(e,r);const l=is.dot(mo),c=rs.dot(mo);if(l<=0&&c<=0)return t.copy(r);go.subVectors(e,s);const u=is.dot(go),h=rs.dot(go);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(r).addScaledVector(is,a);_o.subVectors(e,n);const f=is.dot(_o),g=rs.dot(_o);if(g>=0&&f<=g)return t.copy(n);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(rs,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Lu.subVectors(n,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Lu,o);const p=1/(m+v+d);return a=v*p,o=d*p,t.copy(r).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},zn={h:0,s:0,l:0};function yo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ne{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,r,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,r,s=Ze.workingColorSpace){if(e=mc(e,1),t=qe(t,0,1),r=qe(r,0,1),t===0)this.r=this.g=this.b=r;else{const n=r<=.5?r*(1+t):r+t-r*t,a=2*r-n;this.r=yo(a,n,e+1/3),this.g=yo(a,n,e),this.b=yo(a,n,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Rt){function r(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let n;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,t);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,t);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=s[1],a=n.length;if(a===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(n,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const r=Kd[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yi(e.r),this.g=Yi(e.g),this.b=Yi(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return Ze.fromWorkingColorSpace(Lt.copy(this),e),Math.round(qe(Lt.r*255,0,255))*65536+Math.round(qe(Lt.g*255,0,255))*256+Math.round(qe(Lt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Lt.copy(this),t);const r=Lt.r,s=Lt.g,n=Lt.b,a=Math.max(r,s,n),o=Math.min(r,s,n);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case r:l=(s-n)/h+(s<n?6:0);break;case s:l=(n-r)/h+2;break;case n:l=(r-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Rt){Ze.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,r=Lt.g,s=Lt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(s*255)})`}offsetHSL(e,t,r){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(zn);const r=hn(rr.h,zn.h,t),s=hn(rr.s,zn.s,t),n=hn(rr.l,zn.l,t);return this.setHSL(r,s,n),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,s=this.b,n=e.elements;return this.r=n[0]*t+n[3]*r+n[6]*s,this.g=n[1]*t+n[4]*r+n[7]*s,this.b=n[2]*t+n[5]*r+n[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Ne;Ne.NAMES=Kd;let g_=0;class Ai extends Os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=_s,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=$o,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(r):s&&s.isVector3&&r&&r.isVector3?s.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(r.blending=this.blending),this.side!==Zi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Jo&&(r.blendSrc=this.blendSrc),this.blendDst!==$o&&(r.blendDst=this.blendDst),this.blendEquation!==Fr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_u&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function s(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=s(e.textures),a=s(e.images);n.length>0&&(r.textures=n),a.length>0&&(r.images=a)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const s=t.length;r=new Array(s);for(let n=0;n!==s;++n)r[n]=t[n].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hr extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Ld,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,Hn=new Je;let __=0;class Gt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:__++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Nl,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let s=0,n=this.itemSize;s<n;s++)this.array[e+s]=t.array[r+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Hn.fromBufferAttribute(this,t),Hn.applyMatrix3(e),this.setXY(t,Hn.x,Hn.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=pi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=nt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pi(t,this.array)),t}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pi(t,this.array)),t}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pi(t,this.array)),t}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),r=nt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,s){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this}setXYZW(e,t,r,s,n){return e*=this.itemSize,this.normalized&&(t=nt(t,this.array),r=nt(r,this.array),s=nt(s,this.array),n=nt(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=s,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nl&&(e.usage=this.usage),e}}class Zd extends Gt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Jd extends Gt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ki extends Gt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let v_=0;const si=new He,So=new mt,ss=new F,Zt=new Ci,qs=new Ci,Et=new F;class Li extends Os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jd(e)?Jd:Zd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const n=new ze().getNormalMatrix(e);r.applyNormalMatrix(n),r.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,r){return si.makeTranslation(e,t,r),this.applyMatrix4(si),this}scale(e,t,r){return si.makeScale(e,t,r),this.applyMatrix4(si),this}lookAt(e){return So.lookAt(e),So.updateMatrix(),this.applyMatrix4(So.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let s=0,n=e.length;s<n;s++){const a=e[s];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ki(r,3))}else{const r=Math.min(e.length,t.count);for(let s=0;s<r;s++){const n=e[s];t.setXYZ(s,n.x,n.y,n.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ci);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const n=t[r];Zt.setFromBufferAttribute(n),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const r=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Zt.min,qs.min),Zt.expandByPoint(Et),Et.addVectors(Zt.max,qs.max),Zt.expandByPoint(Et)):(Zt.expandByPoint(qs.min),Zt.expandByPoint(qs.max))}Zt.getCenter(r);let s=0;for(let n=0,a=e.count;n<a;n++)Et.fromBufferAttribute(e,n),s=Math.max(s,r.distanceToSquared(Et));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),Et.add(ss)),s=Math.max(s,r.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,s=t.normal,n=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<r.count;B++)o[B]=new F,l[B]=new F;const c=new F,u=new F,h=new F,d=new Je,f=new Je,g=new Je,v=new F,m=new F;function p(B,E,S){c.fromBufferAttribute(r,B),u.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),d.fromBufferAttribute(n,B),f.fromBufferAttribute(n,E),g.fromBufferAttribute(n,S),u.sub(c),h.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(D),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(D),o[B].add(v),o[E].add(v),o[S].add(v),l[B].add(m),l[E].add(m),l[S].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,E=A.length;B<E;++B){const S=A[B],D=S.start,$=S.count;for(let K=D,Q=D+$;K<Q;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const T=new F,M=new F,I=new F,L=new F;function C(B){I.fromBufferAttribute(s,B),L.copy(I);const E=o[B];T.copy(E),T.sub(I.multiplyScalar(I.dot(E))).normalize(),M.crossVectors(L,E);const S=M.dot(l[B])<0?-1:1;a.setXYZW(B,T.x,T.y,T.z,S)}for(let B=0,E=A.length;B<E;++B){const S=A[B],D=S.start,$=S.count;for(let K=D,Q=D+$;K<Q;K+=3)C(e.getX(K+0)),C(e.getX(K+1)),C(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let d=0,f=r.count;d<f;d++)r.setXYZ(d,0,0,0);const s=new F,n=new F,a=new F,o=new F,l=new F,c=new F,u=new F,h=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),n.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,n),h.subVectors(s,n),u.cross(h),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),c.fromBufferAttribute(r,m),o.add(u),l.add(u),c.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,n),h.subVectors(s,n),u.cross(h),r.setXYZ(d+0,u.x,u.y,u.z),r.setXYZ(d+1,u.x,u.y,u.z),r.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Gt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Li,r=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,r);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,r);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const c=r[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,n=!0)}n&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const n=e.morphAttributes;for(const c in n){const u=[],h=n[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Iu=new He,Rr=new za,Vn=new Pi,Du=new F,Gn=new F,Wn=new F,Xn=new F,bo=new F,jn=new F,Uu=new F,qn=new F;class ti extends mt{constructor(e=new Li,t=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=r.length;s<n;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const r=this.geometry,s=r.attributes.position,n=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(n&&o){jn.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const u=o[l],h=n[l];u!==0&&(bo.fromBufferAttribute(h,e),a?jn.addScaledVector(bo,u):jn.addScaledVector(bo.sub(t),u))}t.add(jn)}return t}raycast(e,t){const r=this.geometry,s=this.material,n=this.matrixWorld;s!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Vn.copy(r.boundingSphere),Vn.applyMatrix4(n),Rr.copy(e.ray).recast(e.near),!(Vn.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(Vn,Du)===null||Rr.origin.distanceToSquared(Du)>(e.far-e.near)**2))&&(Iu.copy(n).invert(),Rr.copy(e.ray).applyMatrix4(Iu),!(r.boundingBox!==null&&Rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,r){let s;const n=this.geometry,a=this.material,o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv1,h=n.attributes.normal,d=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=A,I=T;M<I;M+=3){const L=o.getX(M),C=o.getX(M+1),B=o.getX(M+2);s=Yn(this,p,e,r,c,u,h,L,C,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const A=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);s=Yn(this,a,e,r,c,u,h,A,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],A=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=A,I=T;M<I;M+=3){const L=M,C=M+1,B=M+2;s=Yn(this,p,e,r,c,u,h,L,C,B),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const A=m,T=m+1,M=m+2;s=Yn(this,a,e,r,c,u,h,A,T,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function x_(i,e,t,r,s,n,a,o){let l;if(e.side===qt?l=r.intersectTriangle(a,n,s,!0,o):l=r.intersectTriangle(s,n,a,e.side===Zi,o),l===null)return null;qn.copy(o),qn.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(qn);return c<t.near||c>t.far?null:{distance:c,point:qn.clone(),object:i}}function Yn(i,e,t,r,s,n,a,o,l,c){i.getVertexPosition(o,Gn),i.getVertexPosition(l,Wn),i.getVertexPosition(c,Xn);const u=x_(i,e,t,r,Gn,Wn,Xn,Uu);if(u){const h=new F;mi.getBarycoord(Uu,Gn,Wn,Xn,h),s&&(u.uv=mi.getInterpolatedAttribute(s,o,l,c,h,new Je)),n&&(u.uv1=mi.getInterpolatedAttribute(n,o,l,c,h,new Je)),a&&(u.normal=mi.getInterpolatedAttribute(a,o,l,c,h,new F),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};mi.getNormal(Gn,Wn,Xn,d.normal),u.face=d,u.barycoord=h}return u}class An extends Li{constructor(e=1,t=1,r=1,s=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:s,heightSegments:n,depthSegments:a};const o=this;s=Math.floor(s),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,r,t,e,a,n,0),g("z","y","x",1,-1,r,t,-e,a,n,1),g("x","z","y",1,1,e,r,t,s,a,2),g("x","z","y",1,-1,e,r,-t,s,a,3),g("x","y","z",1,-1,e,t,r,s,n,4),g("x","y","z",-1,-1,e,t,-r,s,n,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(h,2));function g(v,m,p,A,T,M,I,L,C,B,E){const S=M/C,D=I/B,$=M/2,K=I/2,Q=L/2,se=C+1,W=B+1;let ee=0,X=0;const he=new F;for(let Ee=0;Ee<W;Ee++){const Le=Ee*D-K;for(let Ie=0;Ie<se;Ie++){const tt=Ie*S-$;he[v]=tt*A,he[m]=Le*T,he[p]=Q,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[p]=L>0?1:-1,u.push(he.x,he.y,he.z),h.push(Ie/C),h.push(1-Ee/B),ee+=1}}for(let Ee=0;Ee<B;Ee++)for(let Le=0;Le<C;Le++){const Ie=d+Le+se*Ee,tt=d+Le+se*(Ee+1),te=d+(Le+1)+se*(Ee+1),de=d+(Le+1)+se*Ee;l.push(Ie,tt,de),l.push(tt,te,de),X+=6}o.addGroup(f,X,E),f+=X,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new An(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ls(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const s=i[t][r];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=s.clone():Array.isArray(s)?e[t][r]=s.slice():e[t][r]=s}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const r=Ls(i[t]);for(const s in r)e[s]=r[s]}return e}function M_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $d(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const y_={clone:Ls,merge:Ft};var S_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,b_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _r extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=S_,this.fragmentShader=b_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=M_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const n=this.uniforms[s].value;n&&n.isTexture?t.uniforms[s]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[s]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[s]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[s]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[s]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[s]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[s]={type:"m4",value:n.toArray()}:t.uniforms[s]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const s in this.extensions)this.extensions[s]===!0&&(r[s]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Qd extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new F,Nu=new Je,Ou=new Je;class zt extends Qd{constructor(e=50,t=1,r=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(un*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(un*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,Nu,Ou),t.subVectors(Ou,Nu)}setViewOffset(e,t,r,s,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(un*.5*this.fov)/this.zoom,r=2*t,s=this.aspect*r,n=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*s/l,t-=a.offsetY*r/c,s*=a.width/l,r*=a.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+s,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ns=-90,as=1;class E_ extends mt{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(ns,as,e,t);s.layers=this.layers,this.add(s);const n=new zt(ns,as,e,t);n.layers=this.layers,this.add(n);const a=new zt(ns,as,e,t);a.layers=this.layers,this.add(a);const o=new zt(ns,as,e,t);o.layers=this.layers,this.add(o);const l=new zt(ns,as,e,t);l.layers=this.layers,this.add(l);const c=new zt(ns,as,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,s,n,a,o,l]=t;for(const c of t)this.remove(c);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ta)r.up.set(0,-1,0),r.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[n,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,s),e.render(t,n),e.setRenderTarget(r,1,s),e.render(t,a),e.setRenderTarget(r,2,s),e.render(t,o),e.setRenderTarget(r,3,s),e.render(t,l),e.setRenderTarget(r,4,s),e.render(t,c),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}}class ef extends Tt{constructor(e,t,r,s,n,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ts,super(e,t,r,s,n,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class T_ extends Gr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},s=[r,r,r,r,r,r];this.texture=new ef(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new An(5,5,5),n=new _r({name:"CubemapFromEquirect",uniforms:Ls(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qt,blending:pr});n.uniforms.tEquirect.value=t;const a=new ti(s,n),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=ei),new E_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,r,s){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,s);e.setRenderTarget(n)}}class kr extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let s=null,n=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,r),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,r),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,r),s===null&&n!==null&&(s=n),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new kr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class w_ extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class R_{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nl,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let s=0,n=this.stride;s<n;s++)this.array[e+s]=t.array[r+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new F;class _c{constructor(e,t,r,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=pi(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=nt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=nt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pi(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),r=nt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),r=nt(r,this.array),s=nt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this}setXYZW(e,t,r,s,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=nt(t,this.array),r=nt(r,this.array),s=nt(s,this.array),n=nt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=s,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _c(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const s=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[s+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Fu=new F,Bu=new et,ku=new et,C_=new F,zu=new He,Kn=new F,To=new Pi,Hu=new He,Ao=new za;class P_ extends ti{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fu,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ci),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Kn),this.boundingBox.expandByPoint(Kn)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let r=0;r<t.count;r++)this.getVertexPosition(r,Kn),this.boundingSphere.expandByPoint(Kn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const r=this.material,s=this.matrixWorld;r!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),To.copy(this.boundingSphere),To.applyMatrix4(s),e.ray.intersectsSphere(To)!==!1&&(Hu.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(Hu),!(this.boundingBox!==null&&Ao.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ao)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new et,t=this.geometry.attributes.skinWeight;for(let r=0,s=t.count;r<s;r++){e.fromBufferAttribute(t,r);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(r,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===fu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const r=this.skeleton,s=this.geometry;Bu.fromBufferAttribute(s.attributes.skinIndex,e),ku.fromBufferAttribute(s.attributes.skinWeight,e),Fu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const a=ku.getComponent(n);if(a!==0){const o=Bu.getComponent(n);zu.multiplyMatrices(r.bones[o].matrixWorld,r.boneInverses[o]),t.addScaledVector(C_.copy(Fu).applyMatrix4(zu),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tf extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rf extends Tt{constructor(e=null,t=1,r=1,s,n,a,o,l,c=Vt,u=Vt,h,d){super(null,a,o,l,c,u,s,n,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vu=new He,L_=new He;class vc{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,s=this.bones.length;r<s;r++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const r=new He;this.bones[e]&&r.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&r.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const r=this.bones[e];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){const e=this.bones,t=this.boneInverses,r=this.boneMatrices,s=this.boneTexture;for(let n=0,a=e.length;n<a;n++){const o=e[n]?e[n].matrixWorld:L_;Vu.multiplyMatrices(o,t[n]),Vu.toArray(r,n*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new vc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const r=new rf(t,e,e,oi,gi);return r.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=r,this}getBoneByName(e){for(let t=0,r=this.bones.length;t<r;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let r=0,s=e.bones.length;r<s;r++){const n=e.bones[r];let a=t[n];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),a=new tf),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[r]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,r=this.boneInverses;for(let s=0,n=t.length;s<n;s++){const a=t[s];e.bones.push(a.uuid);const o=r[s];e.boneInverses.push(o.toArray())}return e}}class Ol extends Gt{constructor(e,t,r,s=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const os=new He,Gu=new He,Zn=[],Wu=new Ci,I_=new He,Ys=new ti,Ks=new Pi;class D_ extends ti{constructor(e,t,r){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ol(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<r;s++)this.setMatrixAt(s,I_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ci),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,os),Wu.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Wu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<t;r++)this.getMatrixAt(r,os),Ks.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ks)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const r=t.morphTargetInfluences,s=this.morphTexture.source.data.data,n=r.length+1,a=e*n+1;for(let o=0;o<r.length;o++)r[o]=s[a+o]}raycast(e,t){const r=this.matrixWorld,s=this.count;if(Ys.geometry=this.geometry,Ys.material=this.material,Ys.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ks.copy(this.boundingSphere),Ks.applyMatrix4(r),e.ray.intersectsSphere(Ks)!==!1))for(let n=0;n<s;n++){this.getMatrixAt(n,os),Gu.multiplyMatrices(r,os),Ys.matrixWorld=Gu,Ys.raycast(e,Zn);for(let a=0,o=Zn.length;a<o;a++){const l=Zn[a];l.instanceId=n,l.object=this,t.push(l)}Zn.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ol(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const r=t.morphTargetInfluences,s=r.length+1;this.morphTexture===null&&(this.morphTexture=new rf(new Float32Array(s*this.count),s,this.count,hc,gi));const n=this.morphTexture.source.data.data;let a=0;for(let c=0;c<r.length;c++)a+=r[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;n[l]=o,n.set(r,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const wo=new F,U_=new F,N_=new ze;class Nr{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,s){return this.normal.set(e,t,r),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const s=wo.subVectors(r,t).cross(U_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(wo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/s;return n<0||n>1?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||N_.getNormalMatrix(e),s=this.coplanarPoint(wo).applyMatrix4(e),n=this.normal.applyMatrix3(r).normalize();return this.constant=-s.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new Pi,Jn=new F;class xc{constructor(e=new Nr,t=new Nr,r=new Nr,s=new Nr,n=new Nr,a=new Nr){this.planes=[e,t,r,s,n,a]}set(e,t,r,s,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(s),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi){const r=this.planes,s=e.elements,n=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],g=s[9],v=s[10],m=s[11],p=s[12],A=s[13],T=s[14],M=s[15];if(r[0].setComponents(l-n,d-c,m-f,M-p).normalize(),r[1].setComponents(l+n,d+c,m+f,M+p).normalize(),r[2].setComponents(l+a,d+u,m+g,M+A).normalize(),r[3].setComponents(l-a,d-u,m-g,M-A).normalize(),r[4].setComponents(l-o,d-h,m-v,M-T).normalize(),t===qi)r[5].setComponents(l+o,d+h,m+v,M+T).normalize();else if(t===Ta)r[5].setComponents(o,h,v,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,r=e.center,s=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(r)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const s=t[r];if(Jn.x=s.normal.x>0?e.max.x:e.min.x,Jn.y=s.normal.y>0?e.max.y:e.min.y,Jn.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sf extends Ai{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Aa=new F,wa=new F,Xu=new He,Zs=new za,$n=new Pi,Ro=new F,ju=new F;class Mc extends mt{constructor(e=new Li,t=new sf){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let s=1,n=t.count;s<n;s++)Aa.fromBufferAttribute(t,s-1),wa.fromBufferAttribute(t,s),r[s]=r[s-1],r[s]+=Aa.distanceTo(wa);e.setAttribute("lineDistance",new Ki(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,n=e.params.Line.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),$n.copy(r.boundingSphere),$n.applyMatrix4(s),$n.radius+=n,e.ray.intersectsSphere($n)===!1)return;Xu.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(Xu);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=r.index,h=r.attributes.position;if(u!==null){const d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f-1;g<v;g+=c){const m=u.getX(g),p=u.getX(g+1),A=Qn(this,e,Zs,l,m,p,g);A&&t.push(A)}if(this.isLineLoop){const g=u.getX(f-1),v=u.getX(d),m=Qn(this,e,Zs,l,g,v,f-1);m&&t.push(m)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,v=f-1;g<v;g+=c){const m=Qn(this,e,Zs,l,g,g+1,g);m&&t.push(m)}if(this.isLineLoop){const g=Qn(this,e,Zs,l,f-1,d,f-1);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=r.length;s<n;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Qn(i,e,t,r,s,n,a){const o=i.geometry.attributes.position;if(Aa.fromBufferAttribute(o,s),wa.fromBufferAttribute(o,n),t.distanceSqToSegment(Aa,wa,Ro,ju)>r)return;Ro.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Ro);if(!(l<e.near||l>e.far))return{distance:l,point:ju.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const qu=new F,Yu=new F;class O_ extends Mc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let s=0,n=t.count;s<n;s+=2)qu.fromBufferAttribute(t,s),Yu.fromBufferAttribute(t,s+1),r[s]=s===0?0:r[s-1],r[s+1]=r[s]+qu.distanceTo(Yu);e.setAttribute("lineDistance",new Ki(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class F_ extends Mc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nf extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ku=new He,Fl=new za,ea=new Pi,ta=new F;class B_ extends mt{constructor(e=new Li,t=new nf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,s=this.matrixWorld,n=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ea.copy(r.boundingSphere),ea.applyMatrix4(s),ea.radius+=n,e.ray.intersectsSphere(ea)===!1)return;Ku.copy(s).invert(),Fl.copy(e.ray).applyMatrix4(Ku);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,u=r.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let f=h,g=d;f<g;f++){const v=c.getX(f);ta.fromBufferAttribute(u,v),Zu(ta,v,l,s,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let f=h,g=d;f<g;f++)ta.fromBufferAttribute(u,f),Zu(ta,f,l,s,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const r=e[t[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,n=r.length;s<n;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zu(i,e,t,r,s,n,a){const o=Fl.distanceSqToPoint(i);if(o<t){const l=new F;Fl.closestPointToPoint(i,l),l.applyMatrix4(r);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class af extends Tt{constructor(e,t,r,s,n,a,o,l,c,u=vs){if(u!==vs&&u!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&u===vs&&(r=Vr),r===void 0&&u===Cs&&(r=Rs),super(null,s,n,a,o,l,u,r,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Vt,this.minFilter=l!==void 0?l:Vt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ha extends Li{constructor(e=1,t=1,r=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:s};const n=e/2,a=t/2,o=Math.floor(r),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let T=0;T<c;T++){const M=T*h-n;g.push(M,-A,0),v.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const T=A+c*p,M=A+c*(p+1),I=A+1+c*(p+1),L=A+1+c*p;f.push(T,M,L),f.push(M,I,L)}this.setIndex(f),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.widthSegments,e.heightSegments)}}class yc extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wd,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ii extends yc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class k_ extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ag,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z_ extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function ia(i,e,t){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function H_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function V_(i){function e(s,n){return i[s]-i[n]}const t=i.length,r=new Array(t);for(let s=0;s!==t;++s)r[s]=s;return r.sort(e),r}function Ju(i,e,t){const r=i.length,s=new i.constructor(r);for(let n=0,a=0;a!==r;++n){const o=t[n]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function of(i,e,t,r){let s=1,n=i[0];for(;n!==void 0&&n[r]===void 0;)n=i[s++];if(n===void 0)return;let a=n[r];if(a!==void 0)if(Array.isArray(a))do a=n[r],a!==void 0&&(e.push(n.time),t.push(...a)),n=i[s++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[r],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=i[s++];while(n!==void 0);else do a=n[r],a!==void 0&&(e.push(n.time),t.push(a)),n=i[s++];while(n!==void 0)}class wn{constructor(e,t,r,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let r=this._cachedIndex,s=t[r],n=t[r-1];i:{e:{let a;t:{r:if(!(e<s)){for(let o=r+2;;){if(s===void 0){if(e<n)break r;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(n=s,s=t[++r],e<s)break e}a=t.length;break t}if(!(e>=n)){const o=t[1];e<o&&(r=2,n=o);for(let l=r-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===l)break;if(s=n,n=t[--r-1],e>=n)break e}a=r,r=0;break t}break i}for(;r<a;){const o=r+a>>>1;e<t[o]?a=o:r=o+1}if(s=t[r],n=t[r-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,n,s)}return this.interpolate_(r,n,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,n=e*s;for(let a=0;a!==s;++a)t[a]=r[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class G_ extends wn{constructor(e,t,r,s){super(e,t,r,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pu,endingEnd:pu}}intervalChanged_(e,t,r){const s=this.parameterPositions;let n=e-2,a=e+1,o=s[n],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mu:n=e,o=2*t-r;break;case gu:n=s.length-2,o=t+s[n]-s[n+1];break;default:n=e,o=r}if(l===void 0)switch(this.getSettings_().endingEnd){case mu:a=e,l=2*r-t;break;case gu:a=1,l=r+s[1]-s[0];break;default:a=e-1,l=t}const c=(r-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-r),this._offsetPrev=n*u,this._offsetNext=a*u}interpolate_(e,t,r,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(r-t)/(s-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,A=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,T=(-1-f)*m+(1.5+f)*v+.5*g,M=f*m-f*v;for(let I=0;I!==o;++I)n[I]=p*a[u+I]+A*a[c+I]+T*a[l+I]+M*a[h+I];return n}}class W_ extends wn{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(r-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)n[d]=a[c+d]*h+a[l+d]*u;return n}}class X_ extends wn{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Di{constructor(e,t,r,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(r,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(r.interpolation=s)}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new X_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new W_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new G_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case xn:t=this.InterpolantFactoryMethodDiscrete;break;case Mn:t=this.InterpolantFactoryMethodLinear;break;case ro:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return console.warn("THREE.KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xn;case this.InterpolantFactoryMethodLinear:return Mn;case this.InterpolantFactoryMethodSmooth:return ro}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let r=0,s=t.length;r!==s;++r)t[r]*=e}return this}trim(e,t){const r=this.times,s=r.length;let n=0,a=s-1;for(;n!==s&&r[n]<e;)++n;for(;a!==-1&&r[a]>t;)--a;if(++a,n!==0||a!==s){n>=a&&(a=Math.max(a,1),n=a-1);const o=this.getValueSize();this.times=r.slice(n,a),this.values=this.values.slice(n*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const r=this.times,s=this.values,n=r.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==n;o++){const l=r[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&H_(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),s=this.getInterpolation()===ro,n=e.length-1;let a=1;for(let o=1;o<n;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*r,d=h-r,f=h+r;for(let g=0;g!==r;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*r,d=a*r;for(let f=0;f!==r;++f)t[d+f]=t[h+f]}++a}}if(n>0){e[a]=e[n];for(let o=n*r,l=a*r,c=0;c!==r;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),r=this.constructor,s=new r(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Di.prototype.TimeBufferType=Float32Array;Di.prototype.ValueBufferType=Float32Array;Di.prototype.DefaultInterpolation=Mn;class Fs extends Di{constructor(e,t,r){super(e,t,r)}}Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=xn;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;class lf extends Di{}lf.prototype.ValueTypeName="color";class Is extends Di{}Is.prototype.ValueTypeName="number";class j_ extends wn{constructor(e,t,r,s){super(e,t,r,s)}interpolate_(e,t,r,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(r-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Mr.slerpFlat(n,0,a,c-o,a,c,l);return n}}class Ds extends Di{InterpolantFactoryMethodLinear(e){return new j_(this.times,this.values,this.getValueSize(),e)}}Ds.prototype.ValueTypeName="quaternion";Ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Bs extends Di{constructor(e,t,r){super(e,t,r)}}Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=xn;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;class Us extends Di{}Us.prototype.ValueTypeName="vector";class q_{constructor(e="",t=-1,r=[],s=Eg){this.name=e,this.tracks=r,this.duration=t,this.blendMode=s,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],r=e.tracks,s=1/(e.fps||1);for(let a=0,o=r.length;a!==o;++a)t.push(K_(r[a]).scale(s));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],r=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,a=r.length;n!==a;++n)t.push(Di.toJSON(r[n]));return s}static CreateFromMorphTargetSequence(e,t,r,s){const n=t.length,a=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);const u=V_(l);l=Ju(l,1,u),c=Ju(c,1,u),!s&&l[0]===0&&(l.push(n),c.push(c[0])),a.push(new Is(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/r))}return new this(e,-1,a)}static findByName(e,t){let r=e;if(!Array.isArray(e)){const s=e;r=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<r.length;s++)if(r[s].name===t)return r[s];return null}static CreateClipsFromMorphTargetSequences(e,t,r){const s={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(n);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,r));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const r=function(u,h,d,f,g){if(d.length!==0){const v=[],m=[];of(d,v,m,f),v.length!==0&&g.push(new u(h,v,m))}},s=[],n=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let f;for(f=0;f<h.length;f++)if(h[f].morphTargets)for(let g=0;g<h[f].morphTargets.length;g++)d[h[f].morphTargets[g]]=-1;for(const g in d){const v=[],m=[];for(let p=0;p!==h[f].morphTargets.length;++p){const A=h[f];v.push(A.time),m.push(A.morphTarget===g?1:0)}s.push(new Is(".morphTargetInfluence["+g+"]",v,m))}l=d.length*a}else{const d=".bones["+t[u].name+"]";r(Us,d+".position",h,"pos",s),r(Ds,d+".quaternion",h,"rot",s),r(Us,d+".scale",h,"scl",s)}}return s.length===0?null:new this(n,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let r=0,s=e.length;r!==s;++r){const n=this.tracks[r];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Y_(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Is;case"vector":case"vector2":case"vector3":case"vector4":return Us;case"color":return lf;case"quaternion":return Ds;case"bool":case"boolean":return Fs;case"string":return Bs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function K_(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Y_(i.type);if(i.times===void 0){const t=[],r=[];of(i.keys,t,r,"value"),i.times=t,i.values=r}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const dr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Z_{constructor(e,t,r){const s=this;let n=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(u){o++,n===!1&&s.onStart!==void 0&&s.onStart(u,a,o),n=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(n=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null}}}const J_=new Z_;class ks{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(s,n){r.load(e,s,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ks.DEFAULT_MATERIAL_NAME="__DEFAULT";const Hi={};class $_ extends Error{constructor(e,t){super(e),this.response=t}}class cf extends ks{constructor(e){super(e)}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=dr.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Hi[e]!==void 0){Hi[e].push({onLoad:t,onProgress:r,onError:s});return}Hi[e]=[],Hi[e].push({onLoad:t,onProgress:r,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hi[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:T,value:M})=>{if(T)p.close();else{v+=M.byteLength;const I=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let L=0,C=u.length;L<C;L++){const B=u[L];B.onProgress&&B.onProgress(I)}p.enqueue(M),A()}},T=>{p.error(T)})}}});return new Response(m)}else throw new $_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(f=>d.decode(f))}}}).then(c=>{dr.add(e,c);const u=Hi[e];delete Hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=Hi[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hi[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Q_ extends ks{constructor(e){super(e)}load(e,t,r,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=dr.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const o=yn("img");function l(){u(),dr.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(h){u(),s&&s(h),n.manager.itemError(e),n.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class ev extends ks{constructor(e){super(e)}load(e,t,r,s){const n=new Tt,a=new Q_(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},r,s),n}}class Va extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Co=new He,$u=new F,Qu=new F;class Sc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xc,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;$u.setFromMatrixPosition(e.matrixWorld),t.position.copy($u),Qu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Qu),t.updateMatrixWorld(),Co.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Co),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Co)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class tv extends Sc{constructor(){super(new zt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,r=Ps*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(r!==t.fov||s!==t.aspect||n!==t.far)&&(t.fov=r,t.aspect=s,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class iv extends Va{constructor(e,t,r=0,s=Math.PI/3,n=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=r,this.angle=s,this.penumbra=n,this.decay=a,this.map=null,this.shadow=new tv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const eh=new He,Js=new F,Po=new F;class rv extends Sc{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,s=this.matrix,n=e.distance||r.far;n!==r.far&&(r.far=n,r.updateProjectionMatrix()),Js.setFromMatrixPosition(e.matrixWorld),r.position.copy(Js),Po.copy(r.position),Po.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Po),r.updateMatrixWorld(),s.makeTranslation(-Js.x,-Js.y,-Js.z),eh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eh)}}class Bl extends Va{constructor(e,t,r=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=s,this.shadow=new rv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class bc extends Qd{constructor(e=-1,t=1,r=1,s=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=s,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,s,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=s,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let n=r-e,a=r+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sv extends Sc{constructor(){super(new bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends Va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new sv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class av extends Va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class dn{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let r=0,s=e.length;r<s;r++)t+=String.fromCharCode(e[r]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ov extends ks{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,r,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=dr.get(e);if(a!==void 0){if(n.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),n.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(c){return dr.add(e,c),t&&t(c),n.manager.itemEnd(e),c}).catch(function(c){s&&s(c),dr.remove(e),n.manager.itemError(e),n.manager.itemEnd(e)});dr.add(e,l),n.manager.itemStart(e)}}class lv extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const Ec="\\[\\]\\.:\\/",cv=new RegExp("["+Ec+"]","g"),Tc="[^"+Ec+"]",uv="[^"+Ec.replace("\\.","")+"]",hv=/((?:WC+[\/:])*)/.source.replace("WC",Tc),dv=/(WCOD+)?/.source.replace("WCOD",uv),fv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Tc),pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Tc),mv=new RegExp("^"+hv+dv+fv+pv+"$"),gv=["material","materials","bones","map"];class _v{constructor(e,t,r){const s=r||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const r=this._targetGroup.nCachedObjects_,s=this._bindings[r];s!==void 0&&s.getValue(e,t)}setValue(e,t){const r=this._bindings;for(let s=this._targetGroup.nCachedObjects_,n=r.length;s!==n;++s)r[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}}class at{constructor(e,t,r){this.path=t,this.parsedPath=r||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,r):new at(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cv,"")}static parseTrackName(e){const t=mv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const n=r.nodeName.substring(s+1);gv.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){const r=function(n){for(let a=0;a<n.length;a++){const o=n[a];if(o.name===t||o.uuid===t)return o;const l=r(o.children);if(l)return l}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const r=this.resolvedProperty;for(let s=0,n=r.length;s!==n;++s)e[t++]=r[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const r=this.resolvedProperty;for(let s=0,n=r.length;s!==n;++s)r[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,n=r.length;s!==n;++s)r[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const r=this.resolvedProperty;for(let s=0,n=r.length;s!==n;++s)r[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,r=t.objectName,s=t.propertyName;let n=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=t.objectIndex;switch(r){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=_v;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function th(i,e,t,r){const s=vv(r);switch(t){case Fd:return i*e;case kd:return i*e;case zd:return i*e*2;case hc:return i*e/s.components*s.byteLength;case dc:return i*e/s.components*s.byteLength;case Hd:return i*e*2/s.components*s.byteLength;case fc:return i*e*2/s.components*s.byteLength;case Bd:return i*e*3/s.components*s.byteLength;case oi:return i*e*4/s.components*s.byteLength;case pc:return i*e*4/s.components*s.byteLength;case ha:case da:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ll:case ul:return Math.max(i,8)*Math.max(e,8)/2;case dl:case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ma:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vd:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Il:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vv(i){switch(i){case Ji:case Ud:return{byteLength:1,components:1};case vn:case Nd:case Tn:return{byteLength:2,components:1};case cc:case uc:return{byteLength:2,components:4};case Vr:case lc:case gi:return{byteLength:4,components:1};case Od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/function uf(){let i=null,e=!1,t=null,r=null;function s(n,a){t(n,a),r=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(r=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){i=n}}}function xv(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function r(o,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:s,remove:n,update:a}}var Mv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yv=`#ifdef USE_ALPHAHASH
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
#endif`,Sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Av=`#ifdef USE_AOMAP
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
#endif`,wv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rv=`#ifdef USE_BATCHING
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
#endif`,Cv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Iv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dv=`#ifdef USE_IRIDESCENCE
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
#endif`,Uv=`#ifdef USE_BUMPMAP
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
#endif`,Nv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ov=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gv=`#define PI 3.141592653589793
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
} // validated`,Wv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xv=`vec3 transformedNormal = objectNormal;
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
#endif`,jv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$v=`#ifdef USE_ENVMAP
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
#endif`,Qv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ex=`#ifdef USE_ENVMAP
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
#endif`,tx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ix=`#ifdef USE_ENVMAP
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
#endif`,rx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ax=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ox=`#ifdef USE_GRADIENTMAP
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
}`,lx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hx=`uniform bool receiveShadow;
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
#endif`,dx=`#ifdef USE_ENVMAP
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
#endif`,fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,px=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_x=`PhysicalMaterial material;
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
#endif`,vx=`struct PhysicalMaterial {
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
}`,xx=`
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
#endif`,Mx=`#if defined( RE_IndirectDiffuse )
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
#endif`,yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Sx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ex=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ax=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cx=`#if defined( USE_POINTS_UV )
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
#endif`,Px=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ux=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ox=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
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
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Kx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$x=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,r0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,s0=`float getShadowMask() {
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
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,l0=`#ifdef USE_SKINNING
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
#endif`,c0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#ifdef USE_TRANSMISSION
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,w0=`#define DISTANCE
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
}`,R0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#include <common>
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
}`,U0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,O0=`#define LAMBERT
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
}`,F0=`#define MATCAP
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
}`,B0=`#define MATCAP
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
}`,k0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,H0=`#define PHONG
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
}`,V0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,W0=`#define STANDARD
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
}`,X0=`#define TOON
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
}`,j0=`#define TOON
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
}`,q0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,K0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,J0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:Mv,alphahash_pars_fragment:yv,alphamap_fragment:Sv,alphamap_pars_fragment:bv,alphatest_fragment:Ev,alphatest_pars_fragment:Tv,aomap_fragment:Av,aomap_pars_fragment:wv,batching_pars_vertex:Rv,batching_vertex:Cv,begin_vertex:Pv,beginnormal_vertex:Lv,bsdfs:Iv,iridescence_fragment:Dv,bumpmap_pars_fragment:Uv,clipping_planes_fragment:Nv,clipping_planes_pars_fragment:Ov,clipping_planes_pars_vertex:Fv,clipping_planes_vertex:Bv,color_fragment:kv,color_pars_fragment:zv,color_pars_vertex:Hv,color_vertex:Vv,common:Gv,cube_uv_reflection_fragment:Wv,defaultnormal_vertex:Xv,displacementmap_pars_vertex:jv,displacementmap_vertex:qv,emissivemap_fragment:Yv,emissivemap_pars_fragment:Kv,colorspace_fragment:Zv,colorspace_pars_fragment:Jv,envmap_fragment:$v,envmap_common_pars_fragment:Qv,envmap_pars_fragment:ex,envmap_pars_vertex:tx,envmap_physical_pars_fragment:dx,envmap_vertex:ix,fog_vertex:rx,fog_pars_vertex:sx,fog_fragment:nx,fog_pars_fragment:ax,gradientmap_pars_fragment:ox,lightmap_pars_fragment:lx,lights_lambert_fragment:cx,lights_lambert_pars_fragment:ux,lights_pars_begin:hx,lights_toon_fragment:fx,lights_toon_pars_fragment:px,lights_phong_fragment:mx,lights_phong_pars_fragment:gx,lights_physical_fragment:_x,lights_physical_pars_fragment:vx,lights_fragment_begin:xx,lights_fragment_maps:Mx,lights_fragment_end:yx,logdepthbuf_fragment:Sx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:Ex,logdepthbuf_vertex:Tx,map_fragment:Ax,map_pars_fragment:wx,map_particle_fragment:Rx,map_particle_pars_fragment:Cx,metalnessmap_fragment:Px,metalnessmap_pars_fragment:Lx,morphinstance_vertex:Ix,morphcolor_vertex:Dx,morphnormal_vertex:Ux,morphtarget_pars_vertex:Nx,morphtarget_vertex:Ox,normal_fragment_begin:Fx,normal_fragment_maps:Bx,normal_pars_fragment:kx,normal_pars_vertex:zx,normal_vertex:Hx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Wx,clearcoat_pars_fragment:Xx,iridescence_pars_fragment:jx,opaque_fragment:qx,packing:Yx,premultiplied_alpha_fragment:Kx,project_vertex:Zx,dithering_fragment:Jx,dithering_pars_fragment:$x,roughnessmap_fragment:Qx,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:i0,shadowmap_vertex:r0,shadowmask_pars_fragment:s0,skinbase_vertex:n0,skinning_pars_vertex:a0,skinning_vertex:o0,skinnormal_vertex:l0,specularmap_fragment:c0,specularmap_pars_fragment:u0,tonemapping_fragment:h0,tonemapping_pars_fragment:d0,transmission_fragment:f0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,worldpos_vertex:v0,background_vert:x0,background_frag:M0,backgroundCube_vert:y0,backgroundCube_frag:S0,cube_vert:b0,cube_frag:E0,depth_vert:T0,depth_frag:A0,distanceRGBA_vert:w0,distanceRGBA_frag:R0,equirect_vert:C0,equirect_frag:P0,linedashed_vert:L0,linedashed_frag:I0,meshbasic_vert:D0,meshbasic_frag:U0,meshlambert_vert:N0,meshlambert_frag:O0,meshmatcap_vert:F0,meshmatcap_frag:B0,meshnormal_vert:k0,meshnormal_frag:z0,meshphong_vert:H0,meshphong_frag:V0,meshphysical_vert:G0,meshphysical_frag:W0,meshtoon_vert:X0,meshtoon_frag:j0,points_vert:q0,points_frag:Y0,shadow_vert:K0,shadow_frag:Z0,sprite_vert:J0,sprite_frag:$0},_e={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},bi={basic:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Ft([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Ft([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Ft([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Ft([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Ft([_e.points,_e.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Ft([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Ft([_e.common,_e.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Ft([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Ft([_e.sprite,_e.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Ft([_e.common,_e.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Ft([_e.lights,_e.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};bi.physical={uniforms:Ft([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ra={r:0,b:0,g:0},Pr=new Ri,Q0=new He;function eM(i,e,t,r,s,n,a){const o=new Ne(0);let l=n===!0?0:1,c,u,h=null,d=0,f=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function v(T){let M=!1;const I=g(T);I===null?p(o,l):I&&I.isColor&&(p(I,1),M=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,M){const I=g(M);I&&(I.isCubeTexture||I.mapping===ka)?(u===void 0&&(u=new ti(new An(1,1,1),new _r({name:"BackgroundCubeMaterial",uniforms:Ls(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Pr.copy(M.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Q0.makeRotationFromEuler(Pr)),u.material.toneMapped=Ze.getTransfer(I.colorSpace)!==ct,(h!==I||d!==I.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=I,d=I.version,f=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new ti(new Ha(2,2),new _r({name:"BackgroundMaterial",uniforms:Ls(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(I.colorSpace)!==ct,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||d!==I.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=I,d=I.version,f=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(ra,$d(i)),r.buffers.color.setClear(ra.r,ra.g,ra.b,M,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:v,addToRenderList:m,dispose:A}}function tM(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},s=d(null);let n=s,a=!1;function o(S,D,$,K,Q){let se=!1;const W=h(K,$,D);n!==W&&(n=W,c(n.object)),se=f(S,K,$,Q),se&&g(S,K,$,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(se||a)&&(a=!1,M(S,D,$,K),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function u(S){return i.deleteVertexArray(S)}function h(S,D,$){const K=$.wireframe===!0;let Q=r[S.id];Q===void 0&&(Q={},r[S.id]=Q);let se=Q[D.id];se===void 0&&(se={},Q[D.id]=se);let W=se[K];return W===void 0&&(W=d(l()),se[K]=W),W}function d(S){const D=[],$=[],K=[];for(let Q=0;Q<t;Q++)D[Q]=0,$[Q]=0,K[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:$,attributeDivisors:K,object:S,attributes:{},index:null}}function f(S,D,$,K){const Q=n.attributes,se=D.attributes;let W=0;const ee=$.getAttributes();for(const X in ee)if(ee[X].location>=0){const he=Q[X];let Ee=se[X];if(Ee===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(Ee=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(Ee=S.instanceColor)),he===void 0||he.attribute!==Ee||Ee&&he.data!==Ee.data)return!0;W++}return n.attributesNum!==W||n.index!==K}function g(S,D,$,K){const Q={},se=D.attributes;let W=0;const ee=$.getAttributes();for(const X in ee)if(ee[X].location>=0){let he=se[X];he===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(he=S.instanceColor));const Ee={};Ee.attribute=he,he&&he.data&&(Ee.data=he.data),Q[X]=Ee,W++}n.attributes=Q,n.attributesNum=W,n.index=K}function v(){const S=n.newAttributes;for(let D=0,$=S.length;D<$;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const $=n.newAttributes,K=n.enabledAttributes,Q=n.attributeDivisors;$[S]=1,K[S]===0&&(i.enableVertexAttribArray(S),K[S]=1),Q[S]!==D&&(i.vertexAttribDivisor(S,D),Q[S]=D)}function A(){const S=n.newAttributes,D=n.enabledAttributes;for(let $=0,K=D.length;$<K;$++)D[$]!==S[$]&&(i.disableVertexAttribArray($),D[$]=0)}function T(S,D,$,K,Q,se,W){W===!0?i.vertexAttribIPointer(S,D,$,Q,se):i.vertexAttribPointer(S,D,$,K,Q,se)}function M(S,D,$,K){v();const Q=K.attributes,se=$.getAttributes(),W=D.defaultAttributeValues;for(const ee in se){const X=se[ee];if(X.location>=0){let he=Q[ee];if(he===void 0&&(ee==="instanceMatrix"&&S.instanceMatrix&&(he=S.instanceMatrix),ee==="instanceColor"&&S.instanceColor&&(he=S.instanceColor)),he!==void 0){const Ee=he.normalized,Le=he.itemSize,Ie=e.get(he);if(Ie===void 0)continue;const tt=Ie.buffer,te=Ie.type,de=Ie.bytesPerElement,Te=te===i.INT||te===i.UNSIGNED_INT||he.gpuType===lc;if(he.isInterleavedBufferAttribute){const me=he.data,Re=me.stride,De=he.offset;if(me.isInstancedInterleavedBuffer){for(let ke=0;ke<X.locationSize;ke++)p(X.location+ke,me.meshPerAttribute);S.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let ke=0;ke<X.locationSize;ke++)m(X.location+ke);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ke=0;ke<X.locationSize;ke++)T(X.location+ke,Le/X.locationSize,te,Ee,Re*de,(De+Le/X.locationSize*ke)*de,Te)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)p(X.location+me,he.meshPerAttribute);S.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<X.locationSize;me++)m(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let me=0;me<X.locationSize;me++)T(X.location+me,Le/X.locationSize,te,Ee,Le*de,Le/X.locationSize*me*de,Te)}}else if(W!==void 0){const Ee=W[ee];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(X.location,Ee);break;case 3:i.vertexAttrib3fv(X.location,Ee);break;case 4:i.vertexAttrib4fv(X.location,Ee);break;default:i.vertexAttrib1fv(X.location,Ee)}}}}A()}function I(){B();for(const S in r){const D=r[S];for(const $ in D){const K=D[$];for(const Q in K)u(K[Q].object),delete K[Q];delete D[$]}delete r[S]}}function L(S){if(r[S.id]===void 0)return;const D=r[S.id];for(const $ in D){const K=D[$];for(const Q in K)u(K[Q].object),delete K[Q];delete D[$]}delete r[S.id]}function C(S){for(const D in r){const $=r[D];if($[S.id]===void 0)continue;const K=$[S.id];for(const Q in K)u(K[Q].object),delete K[Q];delete $[S.id]}}function B(){E(),a=!0,n!==s&&(n=s,c(n.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:A}}function iM(i,e,t){let r;function s(c){r=c}function n(c,u){i.drawArrays(r,c,u),t.update(u,r,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(r,c,u,h),t.update(u,r,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,c,0,u,0,h);let d=0;for(let f=0;f<h;f++)d+=u[f];t.update(d,r,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(r,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v]*d[v];t.update(g,r,1)}}this.setMode=s,this.render=n,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function rM(i,e,t,r){let s;function n(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==oi&&r.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const B=C===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ji&&r.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==gi&&!B)}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:M,vertexTextures:I,maxSamples:L}}function sM(i){const e=this;let t=null,r=0,s=!1,n=!1;const a=new Nr,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||r!==0||s;return s=d,r=h.length,f},this.beginShadows=function(){n=!0,u(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||n&&!m)n?u(null):c();else{const A=n?0:r,T=A*4;let M=p.clippingState||null;l.value=M,M=u(g,d,T,f);for(let I=0;I!==T;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==v;++T,M+=4)a.copy(h[T]).applyMatrix4(A,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nM(i){let e=new WeakMap;function t(a,o){return o===al?a.mapping=Ts:o===ol&&(a.mapping=As),a}function r(a){if(a&&a.isTexture){const o=a.mapping;if(o===al||o===ol)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new T_(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:r,dispose:n}}const us=4,ih=[.125,.215,.35,.446,.526,.582],Br=20,Lo=new bc,rh=new Ne;let Io=null,Do=0,Uo=0,No=!1;const Or=(1+Math.sqrt(5))/2,ls=1/Or,sh=[new F(-Or,ls,0),new F(Or,ls,0),new F(-ls,0,Or),new F(ls,0,Or),new F(0,Or,-ls),new F(0,Or,ls),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],aM=new F;class nh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,s=100,n={}){const{size:a=256,position:o=aM}=n;Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Io,Do,Uo),this._renderer.xr.enabled=No,e.scissorTest=!1,sa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===As?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Io=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Uo=this._renderer.getActiveMipmapLevel(),No=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Tn,format:oi,colorSpace:Xt,depthBuffer:!1},s=ah(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(e,t,r);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oM(n)),this._blurMaterial=lM(n,e,t)}return s}_compileMaterial(e){const t=new ti(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,r,s,n){const a=new zt(90,1,t,r),o=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,h=c.toneMapping;c.getClearColor(rh),c.toneMapping=mr,c.autoClear=!1;const d=new hr({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),f=new ti(new An,d);let g=!1;const v=e.background;v?v.isColor&&(d.color.copy(v),e.background=null,g=!0):(d.color.copy(rh),g=!0);for(let m=0;m<6;m++){const p=m%3;p===0?(a.up.set(0,o[m],0),a.position.set(n.x,n.y,n.z),a.lookAt(n.x+l[m],n.y,n.z)):p===1?(a.up.set(0,0,o[m]),a.position.set(n.x,n.y,n.z),a.lookAt(n.x,n.y+l[m],n.z)):(a.up.set(0,o[m],0),a.position.set(n.x,n.y,n.z),a.lookAt(n.x,n.y,n.z+l[m]));const A=this._cubeSize;sa(s,p*A,m>2?A:0,A,A),c.setRenderTarget(s),g&&c.render(f,a),c.render(e,a)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=h,c.autoClear=u,e.background=v}_textureToCubeUV(e,t){const r=this._renderer,s=e.mapping===Ts||e.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const n=s?this._cubemapMaterial:this._equirectMaterial,a=new ti(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;sa(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,Lo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let n=1;n<s;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=sh[(s-n-1)%sh.length];this._blur(e,n-1,n,a,o)}t.autoClear=r}_blur(e,t,r,s,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,r,s,"latitudinal",n),this._halfBlur(a,e,r,r,s,"longitudinal",n)}_halfBlur(e,t,r,s,n,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ti(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[r]-1,g=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*Br-1),v=n/g,m=isFinite(n)?1+Math.floor(u*v):Br;m>Br&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Br}`);const p=[];let A=0;for(let C=0;C<Br;++C){const B=C/v,E=Math.exp(-B*B/2);p.push(E),C===0?A+=E:C<m&&(A+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-r;const M=this._sizeLods[s],I=3*M*(s>T-us?s-T+us:0),L=4*(this._cubeSize-M);sa(t,I,L,3*M,2*M),l.setRenderTarget(t),l.render(h,Lo)}}function oM(i){const e=[],t=[],r=[];let s=i;const n=i-us+1+ih.length;for(let a=0;a<n;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-us?l=ih[a-i+us-1]:a===0&&(l=0),r.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,v=3,m=2,p=1,A=new Float32Array(v*g*f),T=new Float32Array(m*g*f),M=new Float32Array(p*g*f);for(let L=0;L<f;L++){const C=L%3*2/3-1,B=L>2?0:-1,E=[C,B,0,C+2/3,B,0,C+2/3,B+1,0,C,B,0,C+2/3,B+1,0,C,B+1,0];A.set(E,v*g*L),T.set(d,m*g*L);const S=[L,L,L,L,L,L];M.set(S,p*g*L)}const I=new Li;I.setAttribute("position",new Gt(A,v)),I.setAttribute("uv",new Gt(T,m)),I.setAttribute("faceIndex",new Gt(M,p)),e.push(I),s>us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ah(i,e,t){const r=new Gr(i,e,t);return r.texture.mapping=ka,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function sa(i,e,t,r,s){i.viewport.set(e,t,r,s),i.scissor.set(e,t,r,s)}function lM(i,e,t){const r=new Float32Array(Br),s=new F(0,1,0);return new _r({name:"SphericalGaussianBlur",defines:{n:Br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function oh(){return new _r({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function lh(){return new _r({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function cM(i){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,c=l===al||l===ol,u=l===Ts||l===As;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new nh(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new nh(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",n),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:a}}function uM(i){const e={};function t(r){if(e[r]!==void 0)return e[r];let s;switch(r){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(r)}return e[r]=s,s}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const s=t(r);return s===null&&Ur("THREE.WebGLRenderer: "+r+" extension not supported."),s}}}function hM(i,e,t,r){const s={},n=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];const f=n.get(d);f&&(e.remove(f),n.delete(d)),r.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,g=h.attributes.position;let v=0;if(f!==null){const A=f.array;v=f.version;for(let T=0,M=A.length;T<M;T+=3){const I=A[T+0],L=A[T+1],C=A[T+2];d.push(I,L,L,C,C,I)}}else if(g!==void 0){const A=g.array;v=g.version;for(let T=0,M=A.length/3-1;T<M;T+=3){const I=T+0,L=T+1,C=T+2;d.push(I,L,L,C,C,I)}}else return;const m=new(jd(d)?Jd:Zd)(d,1);m.version=v;const p=n.get(h);p&&e.remove(p),n.set(h,m)}function u(h){const d=n.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return n.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function dM(i,e,t){let r;function s(d){r=d}let n,a;function o(d){n=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(r,f,n,d*a),t.update(f,r,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(r,f,n,d*a,g),t.update(f,r,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,f,0,n,d,0,g);let v=0;for(let m=0;m<g;m++)v+=f[m];t.update(v,r,1)}function h(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(r,f,0,n,d,0,v,0,g);let p=0;for(let A=0;A<g;A++)p+=f[A]*v[A];t.update(p,r,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function fM(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(n/3);break;case i.LINES:t.lines+=o*(n/2);break;case i.LINE_STRIP:t.lines+=o*(n-1);break;case i.LINE_LOOP:t.lines+=o*n;break;case i.POINTS:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:r}}function pM(i,e,t){const r=new WeakMap,s=new et;function n(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=r.get(o);if(d===void 0||d.count!==h){let f=function(){B.dispose(),r.delete(o),o.removeEventListener("dispose",f)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),m===!0&&(M=3);let I=o.attributes.position.count*M,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*L*4*h),B=new qd(C,I,L,h);B.type=gi,B.needsUpdate=!0;const E=M*4;for(let S=0;S<h;S++){const D=p[S],$=A[S],K=T[S],Q=I*L*4*S;for(let se=0;se<D.count;se++){const W=se*E;g===!0&&(s.fromBufferAttribute(D,se),C[Q+W+0]=s.x,C[Q+W+1]=s.y,C[Q+W+2]=s.z,C[Q+W+3]=0),v===!0&&(s.fromBufferAttribute($,se),C[Q+W+4]=s.x,C[Q+W+5]=s.y,C[Q+W+6]=s.z,C[Q+W+7]=0),m===!0&&(s.fromBufferAttribute(K,se),C[Q+W+8]=s.x,C[Q+W+9]=s.y,C[Q+W+10]=s.z,C[Q+W+11]=K.itemSize===4?s.w:1)}}d={count:h,texture:B,size:new Je(I,L)},r.set(o,d),o.addEventListener("dispose",f)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:n}}function mM(i,e,t,r){let s=new WeakMap;function n(l){const c=r.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}const hf=new Tt,ch=new af(1,1),df=new qd,ff=new l_,pf=new ef,uh=[],hh=[],dh=new Float32Array(16),fh=new Float32Array(9),ph=new Float32Array(4);function zs(i,e,t){const r=i[0];if(r<=0||r>0)return i;const s=e*t;let n=uh[s];if(n===void 0&&(n=new Float32Array(s),uh[s]=n),e!==0){r.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(n,o)}return n}function St(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function bt(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Ga(i,e){let t=hh[e];t===void 0&&(t=new Int32Array(e),hh[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function gM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function _M(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2fv(this.addr,e),bt(t,e)}}function vM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;i.uniform3fv(this.addr,e),bt(t,e)}}function xM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4fv(this.addr,e),bt(t,e)}}function MM(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(St(t,r))return;ph.set(r),i.uniformMatrix2fv(this.addr,!1,ph),bt(t,r)}}function yM(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(St(t,r))return;fh.set(r),i.uniformMatrix3fv(this.addr,!1,fh),bt(t,r)}}function SM(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(St(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(St(t,r))return;dh.set(r),i.uniformMatrix4fv(this.addr,!1,dh),bt(t,r)}}function bM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function EM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2iv(this.addr,e),bt(t,e)}}function TM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3iv(this.addr,e),bt(t,e)}}function AM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4iv(this.addr,e),bt(t,e)}}function wM(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function RM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;i.uniform2uiv(this.addr,e),bt(t,e)}}function CM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;i.uniform3uiv(this.addr,e),bt(t,e)}}function PM(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;i.uniform4uiv(this.addr,e),bt(t,e)}}function LM(i,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(i.uniform1i(this.addr,s),r[0]=s);let n;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=Xd,n=ch):n=hf,t.setTexture2D(e||n,s)}function IM(i,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(i.uniform1i(this.addr,s),r[0]=s),t.setTexture3D(e||ff,s)}function DM(i,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(i.uniform1i(this.addr,s),r[0]=s),t.setTextureCube(e||pf,s)}function UM(i,e,t){const r=this.cache,s=t.allocateTextureUnit();r[0]!==s&&(i.uniform1i(this.addr,s),r[0]=s),t.setTexture2DArray(e||df,s)}function NM(i){switch(i){case 5126:return gM;case 35664:return _M;case 35665:return vM;case 35666:return xM;case 35674:return MM;case 35675:return yM;case 35676:return SM;case 5124:case 35670:return bM;case 35667:case 35671:return EM;case 35668:case 35672:return TM;case 35669:case 35673:return AM;case 5125:return wM;case 36294:return RM;case 36295:return CM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return IM;case 35680:case 36300:case 36308:case 36293:return DM;case 36289:case 36303:case 36311:case 36292:return UM}}function OM(i,e){i.uniform1fv(this.addr,e)}function FM(i,e){const t=zs(e,this.size,2);i.uniform2fv(this.addr,t)}function BM(i,e){const t=zs(e,this.size,3);i.uniform3fv(this.addr,t)}function kM(i,e){const t=zs(e,this.size,4);i.uniform4fv(this.addr,t)}function zM(i,e){const t=zs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function HM(i,e){const t=zs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function VM(i,e){const t=zs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function GM(i,e){i.uniform1iv(this.addr,e)}function WM(i,e){i.uniform2iv(this.addr,e)}function XM(i,e){i.uniform3iv(this.addr,e)}function jM(i,e){i.uniform4iv(this.addr,e)}function qM(i,e){i.uniform1uiv(this.addr,e)}function YM(i,e){i.uniform2uiv(this.addr,e)}function KM(i,e){i.uniform3uiv(this.addr,e)}function ZM(i,e){i.uniform4uiv(this.addr,e)}function JM(i,e,t){const r=this.cache,s=e.length,n=Ga(t,s);St(r,n)||(i.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||hf,n[a])}function $M(i,e,t){const r=this.cache,s=e.length,n=Ga(t,s);St(r,n)||(i.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ff,n[a])}function QM(i,e,t){const r=this.cache,s=e.length,n=Ga(t,s);St(r,n)||(i.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pf,n[a])}function ey(i,e,t){const r=this.cache,s=e.length,n=Ga(t,s);St(r,n)||(i.uniform1iv(this.addr,n),bt(r,n));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||df,n[a])}function ty(i){switch(i){case 5126:return OM;case 35664:return FM;case 35665:return BM;case 35666:return kM;case 35674:return zM;case 35675:return HM;case 35676:return VM;case 5124:case 35670:return GM;case 35667:case 35671:return WM;case 35668:case 35672:return XM;case 35669:case 35673:return jM;case 5125:return qM;case 36294:return YM;case 36295:return KM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return JM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return ey}}class iy{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class ry{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ty(t.type)}}class sy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const s=this.seq;for(let n=0,a=s.length;n!==a;++n){const o=s[n];o.setValue(e,t[o.id],r)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function mh(i,e){i.seq.push(e),i.map[e.id]=e}function ny(i,e,t){const r=i.name,s=r.length;for(Oo.lastIndex=0;;){const n=Oo.exec(r),a=Oo.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){mh(t,c===void 0?new iy(o,i,e):new ry(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new sy(o),mh(t,u)),t=u}}}class ga{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<r;++s){const n=e.getActiveUniform(t,s),a=e.getUniformLocation(t,n.name);ny(n,a,this)}}setValue(e,t,r,s){const n=this.map[t];n!==void 0&&n.setValue(e,r,s)}setOptional(e,t,r){const s=t[r];s!==void 0&&this.setValue(e,r,s)}static upload(e,t,r,s){for(let n=0,a=t.length;n!==a;++n){const o=t[n],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const r=[];for(let s=0,n=e.length;s!==n;++s){const a=e[s];a.id in t&&r.push(a)}return r}}function gh(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const ay=37297;let oy=0;function ly(i,e){const t=i.split(`
`),r=[],s=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=s;a<n;a++){const o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}const _h=new ze;function cy(i){Ze._getMatrix(_h,Ze.workingColorSpace,i);const e=`mat3( ${_h.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(i)){case Ea:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function vh(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(r&&s==="")return"";const n=/ERROR: 0:(\d+)/.exec(s);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+s+`

`+ly(i.getShaderSource(e),a)}else return s}function uy(i,e){const t=cy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function hy(i,e){let t;switch(e){case gg:t="Linear";break;case _g:t="Reinhard";break;case vg:t="Cineon";break;case xg:t="ACESFilmic";break;case yg:t="AgX";break;case Sg:t="Neutral";break;case Mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const na=new F;function dy(){Ze.getLuminanceCoefficients(na);const i=na.x.toFixed(4),e=na.y.toFixed(4),t=na.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tn).join(`
`)}function py(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function my(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<r;s++){const n=i.getActiveAttrib(e,s),a=n.name;let o=1;n.type===i.FLOAT_MAT2&&(o=2),n.type===i.FLOAT_MAT3&&(o=3),n.type===i.FLOAT_MAT4&&(o=4),t[a]={type:n.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function tn(i){return i!==""}function xh(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(gy,vy)}const _y=new Map;function vy(i,e){let t=Ge[e];if(t===void 0){const r=_y.get(e);if(r!==void 0)t=Ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return kl(t)}const xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(xy,My)}function My(i,e,t,r){let s="";for(let n=parseInt(e);n<parseInt(t);n++)s+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return s}function Sh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function yy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case As:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function by(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case As:e="ENVMAP_MODE_REFRACTION";break}return e}function Ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ld:e="ENVMAP_BLENDING_MULTIPLY";break;case pg:e="ENVMAP_BLENDING_MIX";break;case mg:e="ENVMAP_BLENDING_ADD";break}return e}function Ty(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Ay(i,e,t,r){const s=i.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yy(t),c=Sy(t),u=by(t),h=Ey(t),d=Ty(t),f=fy(t),g=py(n),v=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tn).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(tn).join(`
`),p.length>0&&(p+=`
`)):(m=[Sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tn).join(`
`),p=[Sh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?Ge.tonemapping_pars_fragment:"",t.toneMapping!==mr?hy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),dy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(tn).join(`
`)),a=kl(a),a=xh(a,t),a=Mh(a,t),o=kl(o),o=xh(o,t),o=Mh(o,t),a=yh(a),o=yh(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+a,M=A+p+o,I=gh(s,s.VERTEX_SHADER,T),L=gh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,I),s.attachShader(v,L),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(D){if(i.debug.checkShaderErrors){const $=s.getProgramInfoLog(v).trim(),K=s.getShaderInfoLog(I).trim(),Q=s.getShaderInfoLog(L).trim();let se=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(se=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,L);else{const ee=vh(s,I,"vertex"),X=vh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+ee+`
`+X)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(K===""||Q==="")&&(W=!1);W&&(D.diagnostics={runnable:se,programLog:$,vertexShader:{log:K,prefix:m},fragmentShader:{log:Q,prefix:p}})}s.deleteShader(I),s.deleteShader(L),B=new ga(s,v),E=my(s,v)}let B;this.getUniforms=function(){return B===void 0&&C(this),B};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,ay)),S},this.destroy=function(){r.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=oy++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=L,this}let wy=0;class Ry{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,s=this._getShaderStage(t),n=this._getShaderStage(r),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Cy(e),t.set(e,r)),r}}class Cy{constructor(e){this.id=wy++,this.code=e,this.usedTimes=0}}function Py(i,e,t,r,s,n,a){const o=new Yd,l=new Ry,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,S,D,$,K){const Q=$.fog,se=K.geometry,W=E.isMeshStandardMaterial?$.environment:null,ee=(E.isMeshStandardMaterial?t:e).get(E.envMap||W),X=ee&&ee.mapping===ka?ee.image.height:null,he=g[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Ee=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Le=Ee!==void 0?Ee.length:0;let Ie=0;se.morphAttributes.position!==void 0&&(Ie=1),se.morphAttributes.normal!==void 0&&(Ie=2),se.morphAttributes.color!==void 0&&(Ie=3);let tt,te,de,Te;if(he){const st=bi[he];tt=st.vertexShader,te=st.fragmentShader}else tt=E.vertexShader,te=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const me=i.getRenderTarget(),Re=i.state.buffers.depth.getReversed(),De=K.isInstancedMesh===!0,ke=K.isBatchedMesh===!0,w=!!E.map,R=!!E.matcap,z=!!ee,b=!!E.aoMap,ie=!!E.lightMap,J=!!E.bumpMap,re=!!E.normalMap,q=!!E.displacementMap,ne=!!E.emissiveMap,H=!!E.metalnessMap,y=!!E.roughnessMap,_=E.anisotropy>0,P=E.clearcoat>0,k=E.dispersion>0,Y=E.iridescence>0,j=E.sheen>0,ue=E.transmission>0,fe=_&&!!E.anisotropyMap,pe=P&&!!E.clearcoatMap,Oe=P&&!!E.clearcoatNormalMap,oe=P&&!!E.clearcoatRoughnessMap,Me=Y&&!!E.iridescenceMap,Pe=Y&&!!E.iridescenceThicknessMap,Ae=j&&!!E.sheenColorMap,ve=j&&!!E.sheenRoughnessMap,je=!!E.specularMap,Ve=!!E.specularColorMap,ut=!!E.specularIntensityMap,U=ue&&!!E.transmissionMap,xe=ue&&!!E.thicknessMap,Z=!!E.gradientMap,ae=!!E.alphaMap,ye=E.alphaTest>0,ge=!!E.alphaHash,Ke=!!E.extensions;let gt=mr;E.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(gt=i.toneMapping);const Ct={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:tt,fragmentShader:te,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:ke,batchingColor:ke&&K._colorsTexture!==null,instancing:De,instancingColor:De&&K.instanceColor!==null,instancingMorph:De&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:me===null?i.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Xt,alphaToCoverage:!!E.alphaToCoverage,map:w,matcap:R,envMap:z,envMapMode:z&&ee.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:ie,bumpMap:J,normalMap:re,displacementMap:d&&q,emissiveMap:ne,normalMapObjectSpace:re&&E.normalMapType===Rg,normalMapTangentSpace:re&&E.normalMapType===Wd,metalnessMap:H,roughnessMap:y,anisotropy:_,anisotropyMap:fe,clearcoat:P,clearcoatMap:pe,clearcoatNormalMap:Oe,clearcoatRoughnessMap:oe,dispersion:k,iridescence:Y,iridescenceMap:Me,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Ae,sheenRoughnessMap:ve,specularMap:je,specularColorMap:Ve,specularIntensityMap:ut,transmission:ue,transmissionMap:U,thicknessMap:xe,gradientMap:Z,opaque:E.transparent===!1&&E.blending===_s&&E.alphaToCoverage===!1,alphaMap:ae,alphaTest:ye,alphaHash:ge,combine:E.combine,mapUv:w&&v(E.map.channel),aoMapUv:b&&v(E.aoMap.channel),lightMapUv:ie&&v(E.lightMap.channel),bumpMapUv:J&&v(E.bumpMap.channel),normalMapUv:re&&v(E.normalMap.channel),displacementMapUv:q&&v(E.displacementMap.channel),emissiveMapUv:ne&&v(E.emissiveMap.channel),metalnessMapUv:H&&v(E.metalnessMap.channel),roughnessMapUv:y&&v(E.roughnessMap.channel),anisotropyMapUv:fe&&v(E.anisotropyMap.channel),clearcoatMapUv:pe&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Me&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&v(E.sheenRoughnessMap.channel),specularMapUv:je&&v(E.specularMap.channel),specularColorMapUv:Ve&&v(E.specularColorMap.channel),specularIntensityMapUv:ut&&v(E.specularIntensityMap.channel),transmissionMapUv:U&&v(E.transmissionMap.channel),thicknessMapUv:xe&&v(E.thicknessMap.channel),alphaMapUv:ae&&v(E.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(re||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!se.attributes.uv&&(w||ae),fog:!!Q,useFog:E.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:K.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:Ie,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:gt,decodeVideoTexture:w&&E.map.isVideoTexture===!0&&Ze.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:ne&&E.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ei,flipSided:E.side===qt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ke&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&E.extensions.multiDraw===!0||ke)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(E){const S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)S.push(D),S.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(A(S,E),T(S,E),S.push(i.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function A(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function T(E,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),E.push(o.mask)}function M(E){const S=g[E.type];let D;if(S){const $=bi[S];D=y_.clone($.uniforms)}else D=E.uniforms;return D}function I(E,S){let D;for(let $=0,K=u.length;$<K;$++){const Q=u[$];if(Q.cacheKey===S){D=Q,++D.usedTimes;break}}return D===void 0&&(D=new Ay(i,S,E,n),u.push(D)),D}function L(E){if(--E.usedTimes===0){const S=u.indexOf(E);u[S]=u[u.length-1],u.pop(),E.destroy()}}function C(E){l.remove(E)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:L,releaseShaderCache:C,programs:u,dispose:B}}function Ly(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function r(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function n(){i=new WeakMap}return{has:e,get:t,remove:r,update:s,dispose:n}}function Iy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eh(){const i=[];let e=0;const t=[],r=[],s=[];function n(){e=0,t.length=0,r.length=0,s.length=0}function a(h,d,f,g,v,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=v,p.group=m),e++,p}function o(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?r.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,v,m){const p=a(h,d,f,g,v,m);f.transmission>0?r.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Iy),r.length>1&&r.sort(d||bh),s.length>1&&s.sort(d||bh)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:r,transparent:s,init:n,push:o,unshift:l,finish:u,sort:c}}function Dy(){let i=new WeakMap;function e(r,s){const n=i.get(r);let a;return n===void 0?(a=new Eh,i.set(r,[a])):s>=n.length?(a=new Eh,n.push(a)):a=n[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Uy(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ne};break;case"SpotLight":t={position:new F,direction:new F,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function Ny(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Oy=0;function Fy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function By(i){const e=new Uy,t=Ny(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new F);const s=new F,n=new He,a=new He;function o(c){let u=0,h=0,d=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,A=0,T=0,M=0,I=0,L=0,C=0;c.sort(Fy);for(let E=0,S=c.length;E<S;E++){const D=c[E],$=D.color,K=D.intensity,Q=D.distance,se=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=$.r*K,h+=$.g*K,d+=$.b*K;else if(D.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(D.sh.coefficients[W],K);C++}else if(D.isDirectionalLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ee=D.shadow,X=t.get(D);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,r.directionalShadow[f]=X,r.directionalShadowMap[f]=se,r.directionalShadowMatrix[f]=D.shadow.matrix,A++}r.directional[f]=W,f++}else if(D.isSpotLight){const W=e.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy($).multiplyScalar(K),W.distance=Q,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,r.spot[v]=W;const ee=D.shadow;if(D.map&&(r.spotLightMap[I]=D.map,I++,ee.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[v]=ee.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,r.spotShadow[v]=X,r.spotShadowMap[v]=se,M++}v++}else if(D.isRectAreaLight){const W=e.get(D);W.color.copy($).multiplyScalar(K),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),r.rectArea[m]=W,m++}else if(D.isPointLight){const W=e.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const ee=D.shadow,X=t.get(D);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,r.pointShadow[g]=X,r.pointShadowMap[g]=se,r.pointShadowMatrix[g]=D.shadow.matrix,T++}r.point[g]=W,g++}else if(D.isHemisphereLight){const W=e.get(D);W.skyColor.copy(D.color).multiplyScalar(K),W.groundColor.copy(D.groundColor).multiplyScalar(K),r.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=_e.LTC_FLOAT_1,r.rectAreaLTC2=_e.LTC_FLOAT_2):(r.rectAreaLTC1=_e.LTC_HALF_1,r.rectAreaLTC2=_e.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=h,r.ambient[2]=d;const B=r.hash;(B.directionalLength!==f||B.pointLength!==g||B.spotLength!==v||B.rectAreaLength!==m||B.hemiLength!==p||B.numDirectionalShadows!==A||B.numPointShadows!==T||B.numSpotShadows!==M||B.numSpotMaps!==I||B.numLightProbes!==C)&&(r.directional.length=f,r.spot.length=v,r.rectArea.length=m,r.point.length=g,r.hemi.length=p,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=M+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=C,B.directionalLength=f,B.pointLength=g,B.spotLength=v,B.rectAreaLength=m,B.hemiLength=p,B.numDirectionalShadows=A,B.numPointShadows=T,B.numSpotShadows=M,B.numSpotMaps=I,B.numLightProbes=C,r.version=Oy++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(T.isSpotLight){const M=r.spot[f];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),n.copy(T.matrixWorld),n.premultiply(m),a.extractRotation(n),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=r.hemi[v];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:r}}function Th(i){const e=new By(i),t=[],r=[];function s(u){c.camera=u,t.length=0,r.length=0}function n(u){t.push(u)}function a(u){r.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:n,pushShadow:a}}function ky(i){let e=new WeakMap;function t(s,n=0){const a=e.get(s);let o;return a===void 0?(o=new Th(i),e.set(s,[o])):n>=a.length?(o=new Th(i),a.push(o)):o=a[n],o}function r(){e=new WeakMap}return{get:t,dispose:r}}const zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
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
}`;function Vy(i,e,t){let r=new xc;const s=new Je,n=new Je,a=new et,o=new k_({depthPacking:wg}),l=new z_,c={},u=t.maxTextureSize,h={[Zi]:qt,[qt]:Zi,[Ei]:Ei},d=new _r({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:zy,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Li;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ti(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pd;let p=this.type;this.render=function(L,C,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const E=i.getRenderTarget(),S=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),$=i.state;$.setBlending(pr),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=p!==Vi&&this.type===Vi,Q=p===Vi&&this.type!==Vi;for(let se=0,W=L.length;se<W;se++){const ee=L[se],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const he=X.getFrameExtents();if(s.multiply(he),n.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(n.x=Math.floor(u/he.x),s.x=n.x*he.x,X.mapSize.x=n.x),s.y>u&&(n.y=Math.floor(u/he.y),s.y=n.y*he.y,X.mapSize.y=n.y)),X.map===null||K===!0||Q===!0){const Le=this.type!==Vi?{minFilter:Vt,magFilter:Vt}:{};X.map!==null&&X.map.dispose(),X.map=new Gr(s.x,s.y,Le),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Ee=X.getViewportCount();for(let Le=0;Le<Ee;Le++){const Ie=X.getViewport(Le);a.set(n.x*Ie.x,n.y*Ie.y,n.x*Ie.z,n.y*Ie.w),$.viewport(a),X.updateMatrices(ee,Le),r=X.getFrustum(),M(C,B,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===Vi&&A(X,B),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,S,D)};function A(L,C){const B=e.update(v);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,f.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Gr(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(C,null,B,d,v,null),f.uniforms.shadow_pass.value=L.mapPass.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(C,null,B,f,v,null)}function T(L,C,B,E){let S=null;const D=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)S=D;else if(S=B.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const $=S.uuid,K=C.uuid;let Q=c[$];Q===void 0&&(Q={},c[$]=Q);let se=Q[K];se===void 0&&(se=S.clone(),Q[K]=se,C.addEventListener("dispose",I)),S=se}if(S.visible=C.visible,S.wireframe=C.wireframe,E===Vi?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:h[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,B.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const $=i.properties.get(S);$.light=B}return S}function M(L,C,B,E,S){if(L.visible===!1)return;if(L.layers.test(C.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&S===Vi)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const $=e.update(L),K=L.material;if(Array.isArray(K)){const Q=$.groups;for(let se=0,W=Q.length;se<W;se++){const ee=Q[se],X=K[ee.materialIndex];if(X&&X.visible){const he=T(L,X,E,S);L.onBeforeShadow(i,L,C,B,$,he,ee),i.renderBufferDirect(B,null,$,he,L,ee),L.onAfterShadow(i,L,C,B,$,he,ee)}}}else if(K.visible){const Q=T(L,K,E,S);L.onBeforeShadow(i,L,C,B,$,Q,null),i.renderBufferDirect(B,null,$,Q,L,null),L.onAfterShadow(i,L,C,B,$,Q,null)}}const D=L.children;for(let $=0,K=D.length;$<K;$++)M(D[$],C,B,E,S)}function I(L){L.target.removeEventListener("dispose",I);for(const C in c){const B=c[C],E=L.target.uuid;E in B&&(B[E].dispose(),delete B[E])}}}const Gy={[Qo]:el,[tl]:sl,[il]:nl,[Es]:rl,[el]:Qo,[sl]:tl,[nl]:il,[rl]:Es};function Wy(i,e){function t(){let U=!1;const xe=new et;let Z=null;const ae=new et(0,0,0,0);return{setMask:function(ye){Z!==ye&&!U&&(i.colorMask(ye,ye,ye,ye),Z=ye)},setLocked:function(ye){U=ye},setClear:function(ye,ge,Ke,gt,Ct){Ct===!0&&(ye*=gt,ge*=gt,Ke*=gt),xe.set(ye,ge,Ke,gt),ae.equals(xe)===!1&&(i.clearColor(ye,ge,Ke,gt),ae.copy(xe))},reset:function(){U=!1,Z=null,ae.set(-1,0,0,0)}}}function r(){let U=!1,xe=!1,Z=null,ae=null,ye=null;return{setReversed:function(ge){if(xe!==ge){const Ke=e.get("EXT_clip_control");xe?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT);const gt=ye;ye=null,this.setClear(gt)}xe=ge},getReversed:function(){return xe},setTest:function(ge){ge?me(i.DEPTH_TEST):Re(i.DEPTH_TEST)},setMask:function(ge){Z!==ge&&!U&&(i.depthMask(ge),Z=ge)},setFunc:function(ge){if(xe&&(ge=Gy[ge]),ae!==ge){switch(ge){case Qo:i.depthFunc(i.NEVER);break;case el:i.depthFunc(i.ALWAYS);break;case tl:i.depthFunc(i.LESS);break;case Es:i.depthFunc(i.LEQUAL);break;case il:i.depthFunc(i.EQUAL);break;case rl:i.depthFunc(i.GEQUAL);break;case sl:i.depthFunc(i.GREATER);break;case nl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ae=ge}},setLocked:function(ge){U=ge},setClear:function(ge){ye!==ge&&(xe&&(ge=1-ge),i.clearDepth(ge),ye=ge)},reset:function(){U=!1,Z=null,ae=null,ye=null,xe=!1}}}function s(){let U=!1,xe=null,Z=null,ae=null,ye=null,ge=null,Ke=null,gt=null,Ct=null;return{setTest:function(st){U||(st?me(i.STENCIL_TEST):Re(i.STENCIL_TEST))},setMask:function(st){xe!==st&&!U&&(i.stencilMask(st),xe=st)},setFunc:function(st,li,Ui){(Z!==st||ae!==li||ye!==Ui)&&(i.stencilFunc(st,li,Ui),Z=st,ae=li,ye=Ui)},setOp:function(st,li,Ui){(ge!==st||Ke!==li||gt!==Ui)&&(i.stencilOp(st,li,Ui),ge=st,Ke=li,gt=Ui)},setLocked:function(st){U=st},setClear:function(st){Ct!==st&&(i.clearStencil(st),Ct=st)},reset:function(){U=!1,xe=null,Z=null,ae=null,ye=null,ge=null,Ke=null,gt=null,Ct=null}}}const n=new t,a=new r,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,A=null,T=null,M=null,I=null,L=null,C=new Ne(0,0,0),B=0,E=!1,S=null,D=null,$=null,K=null,Q=null;const se=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ee>=2);let he=null,Ee={};const Le=i.getParameter(i.SCISSOR_BOX),Ie=i.getParameter(i.VIEWPORT),tt=new et().fromArray(Le),te=new et().fromArray(Ie);function de(U,xe,Z,ae){const ye=new Uint8Array(4),ge=i.createTexture();i.bindTexture(U,ge),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<Z;Ke++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,ae,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(xe+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return ge}const Te={};Te[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),Te[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Te[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Es),J(!1),re(cu),me(i.CULL_FACE),b(pr);function me(U){u[U]!==!0&&(i.enable(U),u[U]=!0)}function Re(U){u[U]!==!1&&(i.disable(U),u[U]=!1)}function De(U,xe){return h[U]!==xe?(i.bindFramebuffer(U,xe),h[U]=xe,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xe),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function ke(U,xe){let Z=f,ae=!1;if(U){Z=d.get(xe),Z===void 0&&(Z=[],d.set(xe,Z));const ye=U.textures;if(Z.length!==ye.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let ge=0,Ke=ye.length;ge<Ke;ge++)Z[ge]=i.COLOR_ATTACHMENT0+ge;Z.length=ye.length,ae=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ae=!0);ae&&i.drawBuffers(Z)}function w(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const R={[Fr]:i.FUNC_ADD,[Jm]:i.FUNC_SUBTRACT,[$m]:i.FUNC_REVERSE_SUBTRACT};R[Qm]=i.MIN,R[eg]=i.MAX;const z={[tg]:i.ZERO,[ig]:i.ONE,[rg]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[cg]:i.SRC_ALPHA_SATURATE,[og]:i.DST_COLOR,[ng]:i.DST_ALPHA,[sg]:i.ONE_MINUS_SRC_COLOR,[$o]:i.ONE_MINUS_SRC_ALPHA,[lg]:i.ONE_MINUS_DST_COLOR,[ag]:i.ONE_MINUS_DST_ALPHA,[ug]:i.CONSTANT_COLOR,[hg]:i.ONE_MINUS_CONSTANT_COLOR,[dg]:i.CONSTANT_ALPHA,[fg]:i.ONE_MINUS_CONSTANT_ALPHA};function b(U,xe,Z,ae,ye,ge,Ke,gt,Ct,st){if(U===pr){v===!0&&(Re(i.BLEND),v=!1);return}if(v===!1&&(me(i.BLEND),v=!0),U!==Zm){if(U!==m||st!==E){if((p!==Fr||M!==Fr)&&(i.blendEquation(i.FUNC_ADD),p=Fr,M=Fr),st)switch(U){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.ONE,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uu:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case hu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case du:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}A=null,T=null,I=null,L=null,C.set(0,0,0),B=0,m=U,E=st}return}ye=ye||xe,ge=ge||Z,Ke=Ke||ae,(xe!==p||ye!==M)&&(i.blendEquationSeparate(R[xe],R[ye]),p=xe,M=ye),(Z!==A||ae!==T||ge!==I||Ke!==L)&&(i.blendFuncSeparate(z[Z],z[ae],z[ge],z[Ke]),A=Z,T=ae,I=ge,L=Ke),(gt.equals(C)===!1||Ct!==B)&&(i.blendColor(gt.r,gt.g,gt.b,Ct),C.copy(gt),B=Ct),m=U,E=!1}function ie(U,xe){U.side===Ei?Re(i.CULL_FACE):me(i.CULL_FACE);let Z=U.side===qt;xe&&(Z=!Z),J(Z),U.blending===_s&&U.transparent===!1?b(pr):b(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),n.setMask(U.colorWrite);const ae=U.stencilWrite;o.setTest(ae),ae&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ne(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Re(i.SAMPLE_ALPHA_TO_COVERAGE)}function J(U){S!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),S=U)}function re(U){U!==qm?(me(i.CULL_FACE),U!==D&&(U===cu?i.cullFace(i.BACK):U===Ym?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Re(i.CULL_FACE),D=U}function q(U){U!==$&&(W&&i.lineWidth(U),$=U)}function ne(U,xe,Z){U?(me(i.POLYGON_OFFSET_FILL),(K!==xe||Q!==Z)&&(i.polygonOffset(xe,Z),K=xe,Q=Z)):Re(i.POLYGON_OFFSET_FILL)}function H(U){U?me(i.SCISSOR_TEST):Re(i.SCISSOR_TEST)}function y(U){U===void 0&&(U=i.TEXTURE0+se-1),he!==U&&(i.activeTexture(U),he=U)}function _(U,xe,Z){Z===void 0&&(he===null?Z=i.TEXTURE0+se-1:Z=he);let ae=Ee[Z];ae===void 0&&(ae={type:void 0,texture:void 0},Ee[Z]=ae),(ae.type!==U||ae.texture!==xe)&&(he!==Z&&(i.activeTexture(Z),he=Z),i.bindTexture(U,xe||Te[U]),ae.type=U,ae.texture=xe)}function P(){const U=Ee[he];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function k(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function j(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ue(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function oe(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(U){tt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),tt.copy(U))}function ve(U){te.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function je(U,xe){let Z=c.get(xe);Z===void 0&&(Z=new WeakMap,c.set(xe,Z));let ae=Z.get(U);ae===void 0&&(ae=i.getUniformBlockIndex(xe,U.name),Z.set(U,ae))}function Ve(U,xe){const Z=c.get(xe).get(U);l.get(xe)!==Z&&(i.uniformBlockBinding(xe,Z,U.__bindingPointIndex),l.set(xe,Z))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},he=null,Ee={},h={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,A=null,T=null,M=null,I=null,L=null,C=new Ne(0,0,0),B=0,E=!1,S=null,D=null,$=null,K=null,Q=null,tt.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),n.reset(),a.reset(),o.reset()}return{buffers:{color:n,depth:a,stencil:o},enable:me,disable:Re,bindFramebuffer:De,drawBuffers:ke,useProgram:w,setBlending:b,setMaterial:ie,setFlipSided:J,setCullFace:re,setLineWidth:q,setPolygonOffset:ne,setScissorTest:H,activeTexture:y,bindTexture:_,unbindTexture:P,compressedTexImage2D:k,compressedTexImage3D:Y,texImage2D:Me,texImage3D:Pe,updateUBOMapping:je,uniformBlockBinding:Ve,texStorage2D:Oe,texStorage3D:oe,texSubImage2D:j,texSubImage3D:ue,compressedTexSubImage2D:fe,compressedTexSubImage3D:pe,scissor:Ae,viewport:ve,reset:ut}}function Xy(i,e,t,r,s,n,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return f?new OffscreenCanvas(y,_):yn("canvas")}function v(y,_,P){let k=1;const Y=H(y);if((Y.width>P||Y.height>P)&&(k=P/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const j=Math.floor(k*Y.width),ue=Math.floor(k*Y.height);h===void 0&&(h=g(j,ue));const fe=_?g(j,ue):h;return fe.width=j,fe.height=ue,fe.getContext("2d").drawImage(y,0,0,j,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+j+"x"+ue+")."),fe}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){i.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?i.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(y,_,P,k,Y=!1){if(y!==null){if(i[y]!==void 0)return i[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let j=_;if(_===i.RED&&(P===i.FLOAT&&(j=i.R32F),P===i.HALF_FLOAT&&(j=i.R16F),P===i.UNSIGNED_BYTE&&(j=i.R8)),_===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(j=i.R8UI),P===i.UNSIGNED_SHORT&&(j=i.R16UI),P===i.UNSIGNED_INT&&(j=i.R32UI),P===i.BYTE&&(j=i.R8I),P===i.SHORT&&(j=i.R16I),P===i.INT&&(j=i.R32I)),_===i.RG&&(P===i.FLOAT&&(j=i.RG32F),P===i.HALF_FLOAT&&(j=i.RG16F),P===i.UNSIGNED_BYTE&&(j=i.RG8)),_===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(j=i.RG8UI),P===i.UNSIGNED_SHORT&&(j=i.RG16UI),P===i.UNSIGNED_INT&&(j=i.RG32UI),P===i.BYTE&&(j=i.RG8I),P===i.SHORT&&(j=i.RG16I),P===i.INT&&(j=i.RG32I)),_===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(j=i.RGB8UI),P===i.UNSIGNED_SHORT&&(j=i.RGB16UI),P===i.UNSIGNED_INT&&(j=i.RGB32UI),P===i.BYTE&&(j=i.RGB8I),P===i.SHORT&&(j=i.RGB16I),P===i.INT&&(j=i.RGB32I)),_===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),P===i.UNSIGNED_INT&&(j=i.RGBA32UI),P===i.BYTE&&(j=i.RGBA8I),P===i.SHORT&&(j=i.RGBA16I),P===i.INT&&(j=i.RGBA32I)),_===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),_===i.RGBA){const ue=Y?Ea:Ze.getTransfer(k);P===i.FLOAT&&(j=i.RGBA32F),P===i.HALF_FLOAT&&(j=i.RGBA16F),P===i.UNSIGNED_BYTE&&(j=ue===ct?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(y,_){let P;return y?_===null||_===Vr||_===Rs?P=i.DEPTH24_STENCIL8:_===gi?P=i.DEPTH32F_STENCIL8:_===vn&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Vr||_===Rs?P=i.DEPTH_COMPONENT24:_===gi?P=i.DEPTH_COMPONENT32F:_===vn&&(P=i.DEPTH_COMPONENT16),P}function I(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Vt&&y.minFilter!==ei?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function L(y){const _=y.target;_.removeEventListener("dispose",L),B(_),_.isVideoTexture&&u.delete(_)}function C(y){const _=y.target;_.removeEventListener("dispose",C),S(_)}function B(y){const _=r.get(y);if(_.__webglInit===void 0)return;const P=y.source,k=d.get(P);if(k){const Y=k[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&E(y),Object.keys(k).length===0&&d.delete(P)}r.remove(y)}function E(y){const _=r.get(y);i.deleteTexture(_.__webglTexture);const P=y.source,k=d.get(P);delete k[_.__cacheKey],a.memory.textures--}function S(y){const _=r.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),r.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Y=0;Y<_.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=y.textures;for(let k=0,Y=P.length;k<Y;k++){const j=r.get(P[k]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),r.remove(P[k])}r.remove(y)}let D=0;function $(){D=0}function K(){const y=D;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),D+=1,y}function Q(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function se(y,_){const P=r.get(y);if(y.isVideoTexture&&q(y),y.isRenderTargetTexture===!1&&y.version>0&&P.__version!==y.version){const k=y.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(P,y,_);return}}t.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+_)}function W(y,_){const P=r.get(y);if(y.version>0&&P.__version!==y.version){te(P,y,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+_)}function ee(y,_){const P=r.get(y);if(y.version>0&&P.__version!==y.version){te(P,y,_);return}t.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+_)}function X(y,_){const P=r.get(y);if(y.version>0&&P.__version!==y.version){de(P,y,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+_)}const he={[ws]:i.REPEAT,[ur]:i.CLAMP_TO_EDGE,[ba]:i.MIRRORED_REPEAT},Ee={[Vt]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[en]:i.NEAREST_MIPMAP_LINEAR,[ei]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[ji]:i.LINEAR_MIPMAP_LINEAR},Le={[Cg]:i.NEVER,[Ng]:i.ALWAYS,[Pg]:i.LESS,[Xd]:i.LEQUAL,[Lg]:i.EQUAL,[Ug]:i.GEQUAL,[Ig]:i.GREATER,[Dg]:i.NOTEQUAL};function Ie(y,_){if(_.type===gi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ei||_.magFilter===ua||_.magFilter===en||_.magFilter===ji||_.minFilter===ei||_.minFilter===ua||_.minFilter===en||_.minFilter===ji)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(y,i.TEXTURE_WRAP_S,he[_.wrapS]),i.texParameteri(y,i.TEXTURE_WRAP_T,he[_.wrapT]),(y===i.TEXTURE_3D||y===i.TEXTURE_2D_ARRAY)&&i.texParameteri(y,i.TEXTURE_WRAP_R,he[_.wrapR]),i.texParameteri(y,i.TEXTURE_MAG_FILTER,Ee[_.magFilter]),i.texParameteri(y,i.TEXTURE_MIN_FILTER,Ee[_.minFilter]),_.compareFunction&&(i.texParameteri(y,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(y,i.TEXTURE_COMPARE_FUNC,Le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==en&&_.minFilter!==ji||_.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");i.texParameterf(y,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function tt(y,_){let P=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",L));const k=_.source;let Y=d.get(k);Y===void 0&&(Y={},d.set(k,Y));const j=Q(_);if(j!==y.__cacheKey){Y[j]===void 0&&(Y[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,P=!0),Y[j].usedTimes++;const ue=Y[y.__cacheKey];ue!==void 0&&(Y[y.__cacheKey].usedTimes--,ue.usedTimes===0&&E(_)),y.__cacheKey=j,y.__webglTexture=Y[j].texture}return P}function te(y,_,P){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);const Y=tt(y,_),j=_.source;t.bindTexture(k,y.__webglTexture,i.TEXTURE0+P);const ue=r.get(j);if(j.version!==ue.__version||Y===!0){t.activeTexture(i.TEXTURE0+P);const fe=Ze.getPrimaries(Ze.workingColorSpace),pe=_.colorSpace===cr?null:Ze.getPrimaries(_.colorSpace),Oe=_.colorSpace===cr||fe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let oe=v(_.image,!1,s.maxTextureSize);oe=ne(_,oe);const Me=n.convert(_.format,_.colorSpace),Pe=n.convert(_.type);let Ae=T(_.internalFormat,Me,Pe,_.colorSpace,_.isVideoTexture);Ie(k,_);let ve;const je=_.mipmaps,Ve=_.isVideoTexture!==!0,ut=ue.__version===void 0||Y===!0,U=j.dataReady,xe=I(_,oe);if(_.isDepthTexture)Ae=M(_.format===Cs,_.type),ut&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,Ae,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ae,oe.width,oe.height,0,Me,Pe,null));else if(_.isDataTexture)if(je.length>0){Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,je[0].width,je[0].height);for(let Z=0,ae=je.length;Z<ae;Z++)ve=je[Z],Ve?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,Me,Pe,ve.data):t.texImage2D(i.TEXTURE_2D,Z,Ae,ve.width,ve.height,0,Me,Pe,ve.data);_.generateMipmaps=!1}else Ve?(ut&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,oe.width,oe.height),U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe.width,oe.height,Me,Pe,oe.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,oe.width,oe.height,0,Me,Pe,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ve&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,je[0].width,je[0].height,oe.depth);for(let Z=0,ae=je.length;Z<ae;Z++)if(ve=je[Z],_.format!==oi)if(Me!==null)if(Ve){if(U)if(_.layerUpdates.size>0){const ye=th(ve.width,ve.height,_.format,_.type);for(const ge of _.layerUpdates){const Ke=ve.data.subarray(ge*ye/ve.data.BYTES_PER_ELEMENT,(ge+1)*ye/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,ge,ve.width,ve.height,1,Me,Ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,Me,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,Ae,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?U&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ve.width,ve.height,oe.depth,Me,Pe,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,Ae,ve.width,ve.height,oe.depth,0,Me,Pe,ve.data)}else{Ve&&ut&&t.texStorage2D(i.TEXTURE_2D,xe,Ae,je[0].width,je[0].height);for(let Z=0,ae=je.length;Z<ae;Z++)ve=je[Z],_.format!==oi?Me!==null?Ve?U&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,Ae,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,ve.width,ve.height,Me,Pe,ve.data):t.texImage2D(i.TEXTURE_2D,Z,Ae,ve.width,ve.height,0,Me,Pe,ve.data)}else if(_.isDataArrayTexture)if(Ve){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,Ae,oe.width,oe.height,oe.depth),U)if(_.layerUpdates.size>0){const Z=th(oe.width,oe.height,_.format,_.type);for(const ae of _.layerUpdates){const ye=oe.data.subarray(ae*Z/oe.data.BYTES_PER_ELEMENT,(ae+1)*Z/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,oe.width,oe.height,1,Me,Pe,ye)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,Pe,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,oe.width,oe.height,oe.depth,0,Me,Pe,oe.data);else if(_.isData3DTexture)Ve?(ut&&t.texStorage3D(i.TEXTURE_3D,xe,Ae,oe.width,oe.height,oe.depth),U&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,Pe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,oe.width,oe.height,oe.depth,0,Me,Pe,oe.data);else if(_.isFramebufferTexture){if(ut)if(Ve)t.texStorage2D(i.TEXTURE_2D,xe,Ae,oe.width,oe.height);else{let Z=oe.width,ae=oe.height;for(let ye=0;ye<xe;ye++)t.texImage2D(i.TEXTURE_2D,ye,Ae,Z,ae,0,Me,Pe,null),Z>>=1,ae>>=1}}else if(je.length>0){if(Ve&&ut){const Z=H(je[0]);t.texStorage2D(i.TEXTURE_2D,xe,Ae,Z.width,Z.height)}for(let Z=0,ae=je.length;Z<ae;Z++)ve=je[Z],Ve?U&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Me,Pe,ve):t.texImage2D(i.TEXTURE_2D,Z,Ae,Me,Pe,ve);_.generateMipmaps=!1}else if(Ve){if(ut){const Z=H(oe);t.texStorage2D(i.TEXTURE_2D,xe,Ae,Z.width,Z.height)}U&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,Pe,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Me,Pe,oe);m(_)&&p(k),ue.__version=j.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function de(y,_,P){if(_.image.length!==6)return;const k=tt(y,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,y.__webglTexture,i.TEXTURE0+P);const j=r.get(Y);if(Y.version!==j.__version||k===!0){t.activeTexture(i.TEXTURE0+P);const ue=Ze.getPrimaries(Ze.workingColorSpace),fe=_.colorSpace===cr?null:Ze.getPrimaries(_.colorSpace),pe=_.colorSpace===cr||ue===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,Me=[];for(let ae=0;ae<6;ae++)!Oe&&!oe?Me[ae]=v(_.image[ae],!0,s.maxCubemapSize):Me[ae]=oe?_.image[ae].image:_.image[ae],Me[ae]=ne(_,Me[ae]);const Pe=Me[0],Ae=n.convert(_.format,_.colorSpace),ve=n.convert(_.type),je=T(_.internalFormat,Ae,ve,_.colorSpace),Ve=_.isVideoTexture!==!0,ut=j.__version===void 0||k===!0,U=Y.dataReady;let xe=I(_,Pe);Ie(i.TEXTURE_CUBE_MAP,_);let Z;if(Oe){Ve&&ut&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,Pe.width,Pe.height);for(let ae=0;ae<6;ae++){Z=Me[ae].mipmaps;for(let ye=0;ye<Z.length;ye++){const ge=Z[ye];_.format!==oi?Ae!==null?Ve?U&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,ge.width,ge.height,Ae,ge.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,je,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,0,0,ge.width,ge.height,Ae,ve,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye,je,ge.width,ge.height,0,Ae,ve,ge.data)}}}else{if(Z=_.mipmaps,Ve&&ut){Z.length>0&&xe++;const ae=H(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,je,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(oe){Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Me[ae].width,Me[ae].height,Ae,ve,Me[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Me[ae].width,Me[ae].height,0,Ae,ve,Me[ae].data);for(let ye=0;ye<Z.length;ye++){const ge=Z[ye].image[ae].image;Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,ge.width,ge.height,Ae,ve,ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,je,ge.width,ge.height,0,Ae,ve,ge.data)}}else{Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ae,ve,Me[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,je,Ae,ve,Me[ae]);for(let ye=0;ye<Z.length;ye++){const ge=Z[ye];Ve?U&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,0,0,Ae,ve,ge.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ye+1,je,Ae,ve,ge.image[ae])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),j.__version=Y.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Te(y,_,P,k,Y,j){const ue=n.convert(P.format,P.colorSpace),fe=n.convert(P.type),pe=T(P.internalFormat,ue,fe,P.colorSpace),Oe=r.get(_),oe=r.get(P);if(oe.__renderTarget=_,!Oe.__hasExternalTextures){const Me=Math.max(1,_.width>>j),Pe=Math.max(1,_.height>>j);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,j,pe,Me,Pe,_.depth,0,ue,fe,null):t.texImage2D(Y,j,pe,Me,Pe,0,ue,fe,null)}t.bindFramebuffer(i.FRAMEBUFFER,y),re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,oe.__webglTexture,0,J(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,oe.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function me(y,_,P){if(i.bindRenderbuffer(i.RENDERBUFFER,y),_.depthBuffer){const k=_.depthTexture,Y=k&&k.isDepthTexture?k.type:null,j=M(_.stencilBuffer,Y),ue=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=J(_);re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,j,_.width,_.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,y)}else{const k=_.textures;for(let Y=0;Y<k.length;Y++){const j=k[Y],ue=n.convert(j.format,j.colorSpace),fe=n.convert(j.type),pe=T(j.internalFormat,ue,fe,j.colorSpace),Oe=J(_);P&&re(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,pe,_.width,_.height):re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,pe,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,pe,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const P=r.get(_.depthTexture);P.__renderTarget=_,(!P.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),se(_.depthTexture,0);const k=P.__webglTexture,Y=J(_);if(_.depthTexture.format===vs)re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else if(_.depthTexture.format===Cs)re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0);else throw new Error("Unknown depthTexture format")}function De(y){const _=r.get(y),P=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const k=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=k}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");Re(_.__webglFramebuffer,y)}else if(P){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),me(_.__webglDepthbuffer[k],y,!1);else{const Y=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,j)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),me(_.__webglDepthbuffer,y,!1);else{const k=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,k,i.RENDERBUFFER,Y)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(y,_,P){const k=r.get(y);_!==void 0&&Te(k.__webglFramebuffer,y,y.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&De(y)}function w(y){const _=y.texture,P=r.get(y),k=r.get(_);y.addEventListener("dispose",C);const Y=y.textures,j=y.isWebGLCubeRenderTarget===!0,ue=Y.length>1;if(ue||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,a.memory.textures++),j){P.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[fe]=[];for(let pe=0;pe<_.mipmaps.length;pe++)P.__webglFramebuffer[fe][pe]=i.createFramebuffer()}else P.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let fe=0;fe<_.mipmaps.length;fe++)P.__webglFramebuffer[fe]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ue)for(let fe=0,pe=Y.length;fe<pe;fe++){const Oe=r.get(Y[fe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(y.samples>0&&re(y)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let fe=0;fe<Y.length;fe++){const pe=Y[fe];P.__webglColorRenderbuffer[fe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[fe]);const Oe=n.convert(pe.format,pe.colorSpace),oe=n.convert(pe.type),Me=T(pe.internalFormat,Oe,oe,pe.colorSpace,y.isXRRenderTarget===!0),Pe=J(y);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Me,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,P.__webglColorRenderbuffer[fe])}i.bindRenderbuffer(i.RENDERBUFFER,null),y.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),me(P.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,_);for(let fe=0;fe<6;fe++)if(_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)Te(P.__webglFramebuffer[fe][pe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,pe);else Te(P.__webglFramebuffer[fe],y,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let fe=0,pe=Y.length;fe<pe;fe++){const Oe=Y[fe],oe=r.get(Oe);t.bindTexture(i.TEXTURE_2D,oe.__webglTexture),Ie(i.TEXTURE_2D,Oe),Te(P.__webglFramebuffer,y,Oe,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,0),m(Oe)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(fe=y.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,k.__webglTexture),Ie(fe,_),_.mipmaps&&_.mipmaps.length>0)for(let pe=0;pe<_.mipmaps.length;pe++)Te(P.__webglFramebuffer[pe],y,_,i.COLOR_ATTACHMENT0,fe,pe);else Te(P.__webglFramebuffer,y,_,i.COLOR_ATTACHMENT0,fe,0);m(_)&&p(fe),t.unbindTexture()}y.depthBuffer&&De(y)}function R(y){const _=y.textures;for(let P=0,k=_.length;P<k;P++){const Y=_[P];if(m(Y)){const j=A(y),ue=r.get(Y).__webglTexture;t.bindTexture(j,ue),p(j),t.unbindTexture()}}}const z=[],b=[];function ie(y){if(y.samples>0){if(re(y)===!1){const _=y.textures,P=y.width,k=y.height;let Y=i.COLOR_BUFFER_BIT;const j=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=r.get(y),fe=_.length>1;if(fe)for(let pe=0;pe<_.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<_.length;pe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),fe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Oe=r.get(_[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Oe,0)}i.blitFramebuffer(0,0,P,k,0,0,P,k,Y,i.NEAREST),l===!0&&(z.length=0,b.length=0,z.push(i.COLOR_ATTACHMENT0+pe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(z.push(j),b.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,z))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),fe)for(let pe=0;pe<_.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);const Oe=r.get(_[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function J(y){return Math.min(s.maxSamples,y.samples)}function re(y){const _=r.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function q(y){const _=a.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function ne(y,_){const P=y.colorSpace,k=y.format,Y=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||P!==Xt&&P!==cr&&(Ze.getTransfer(P)===ct?(k!==oi||Y!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function H(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=ke,this.setupRenderTarget=w,this.updateRenderTargetMipmap=R,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=re}function jy(i,e){function t(r,s=cr){let n;const a=Ze.getTransfer(s);if(r===Ji)return i.UNSIGNED_BYTE;if(r===cc)return i.UNSIGNED_SHORT_4_4_4_4;if(r===uc)return i.UNSIGNED_SHORT_5_5_5_1;if(r===Od)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Ud)return i.BYTE;if(r===Nd)return i.SHORT;if(r===vn)return i.UNSIGNED_SHORT;if(r===lc)return i.INT;if(r===Vr)return i.UNSIGNED_INT;if(r===gi)return i.FLOAT;if(r===Tn)return i.HALF_FLOAT;if(r===Fd)return i.ALPHA;if(r===Bd)return i.RGB;if(r===oi)return i.RGBA;if(r===kd)return i.LUMINANCE;if(r===zd)return i.LUMINANCE_ALPHA;if(r===vs)return i.DEPTH_COMPONENT;if(r===Cs)return i.DEPTH_STENCIL;if(r===hc)return i.RED;if(r===dc)return i.RED_INTEGER;if(r===Hd)return i.RG;if(r===fc)return i.RG_INTEGER;if(r===pc)return i.RGBA_INTEGER;if(r===ha||r===da||r===fa||r===pa)if(a===ct)if(n=e.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===ha)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===da)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pa)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=e.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===ha)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===da)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fa)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pa)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ll||r===cl||r===ul||r===hl)if(n=e.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===ll)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===cl)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ul)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hl)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dl||r===fl||r===pl)if(n=e.get("WEBGL_compressed_texture_etc"),n!==null){if(r===dl||r===fl)return a===ct?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===pl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ml||r===gl||r===_l||r===vl||r===xl||r===Ml||r===yl||r===Sl||r===bl||r===El||r===Tl||r===Al||r===wl||r===Rl)if(n=e.get("WEBGL_compressed_texture_astc"),n!==null){if(r===ml)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===gl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===_l)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ml)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===El)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Tl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Al)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Rl)return a===ct?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ma||r===Cl||r===Pl)if(n=e.get("EXT_texture_compression_bptc"),n!==null){if(r===ma)return a===ct?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Cl)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Pl)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vd||r===Ll||r===Il||r===Dl)if(n=e.get("EXT_texture_compression_rgtc"),n!==null){if(r===ma)return n.COMPRESSED_RED_RGTC1_EXT;if(r===Ll)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Il)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Dl)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Rs?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yy=`
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

}`;class Ky{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const s=new Tt,n=e.properties.get(s);n.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new _r({vertexShader:qy,fragmentShader:Yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ti(new Ha(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Zy extends Os{constructor(e,t){super();const r=this;let s=null,n=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=new Ky,m=t.getContextAttributes();let p=null,A=null;const T=[],M=[],I=new Je;let L=null;const C=new zt;C.viewport=new et;const B=new zt;B.viewport=new et;const E=[C,B],S=new lv;let D=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=T[te];return de===void 0&&(de=new Eo,T[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=T[te];return de===void 0&&(de=new Eo,T[te]=de),de.getGripSpace()},this.getHand=function(te){let de=T[te];return de===void 0&&(de=new Eo,T[te]=de),de.getHandSpace()};function K(te){const de=M.indexOf(te.inputSource);if(de===-1)return;const Te=T[de];Te!==void 0&&(Te.update(te.inputSource,te.frame,c||a),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function Q(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",se);for(let te=0;te<T.length;te++){const de=M[te];de!==null&&(M[te]=null,T[te].disconnect(de))}D=null,$=null,v.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,A=null,tt.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){n=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",se),m.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Te=null,me=null;m.depth&&(me=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Cs:vs,Te=m.stencil?Rs:Vr);const Re={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:n};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(Re),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Gr(d.textureWidth,d.textureHeight,{format:oi,type:Ji,depthTexture:new af(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:n};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Gr(f.framebufferWidth,f.framebufferHeight,{format:oi,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function se(te){for(let de=0;de<te.removed.length;de++){const Te=te.removed[de],me=M.indexOf(Te);me>=0&&(M[me]=null,T[me].disconnect(Te))}for(let de=0;de<te.added.length;de++){const Te=te.added[de];let me=M.indexOf(Te);if(me===-1){for(let De=0;De<T.length;De++)if(De>=M.length){M.push(Te),me=De;break}else if(M[De]===null){M[De]=Te,me=De;break}if(me===-1)break}const Re=T[me];Re&&Re.connect(Te)}}const W=new F,ee=new F;function X(te,de,Te){W.setFromMatrixPosition(de.matrixWorld),ee.setFromMatrixPosition(Te.matrixWorld);const me=W.distanceTo(ee),Re=de.projectionMatrix.elements,De=Te.projectionMatrix.elements,ke=Re[14]/(Re[10]-1),w=Re[14]/(Re[10]+1),R=(Re[9]+1)/Re[5],z=(Re[9]-1)/Re[5],b=(Re[8]-1)/Re[0],ie=(De[8]+1)/De[0],J=ke*b,re=ke*ie,q=me/(-b+ie),ne=q*-b;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ne),te.translateZ(q),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const H=ke+q,y=w+q,_=J-ne,P=re+(me-ne),k=R*w/y*H,Y=z*w/y*H;te.projectionMatrix.makePerspective(_,P,k,Y,H,y),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function he(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let de=te.near,Te=te.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(Te=v.depthFar)),S.near=B.near=C.near=de,S.far=B.far=C.far=Te,(D!==S.near||$!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,$=S.far),C.layers.mask=te.layers.mask|2,B.layers.mask=te.layers.mask|4,S.layers.mask=C.layers.mask|B.layers.mask;const me=te.parent,Re=S.cameras;he(S,me);for(let De=0;De<Re.length;De++)he(Re[De],me);Re.length===2?X(S,C,B):S.projectionMatrix.copy(C.projectionMatrix),Ee(te,S,me)};function Ee(te,de,Te){Te===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ps*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=te)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let Le=null;function Ie(te,de){if(u=de.getViewerPose(c||a),g=de,u!==null){const Te=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let me=!1;Te.length!==S.cameras.length&&(S.cameras.length=0,me=!0);for(let De=0;De<Te.length;De++){const ke=Te[De];let w=null;if(f!==null)w=f.getViewport(ke);else{const z=h.getViewSubImage(d,ke);w=z.viewport,De===0&&(e.setRenderTargetTextures(A,z.colorTexture,d.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(A))}let R=E[De];R===void 0&&(R=new zt,R.layers.enable(De),R.viewport=new et,E[De]=R),R.matrix.fromArray(ke.transform.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale),R.projectionMatrix.fromArray(ke.projectionMatrix),R.projectionMatrixInverse.copy(R.projectionMatrix).invert(),R.viewport.set(w.x,w.y,w.width,w.height),De===0&&(S.matrix.copy(R.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),me===!0&&S.cameras.push(R)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const De=h.getDepthInformation(Te[0]);De&&De.isValid&&De.texture&&v.init(e,De,s.renderState)}}for(let Te=0;Te<T.length;Te++){const me=M[Te],Re=T[Te];me!==null&&Re!==void 0&&Re.update(me,de,c||a)}Le&&Le(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),g=null}const tt=new uf;tt.setAnimationLoop(Ie),this.setAnimationLoop=function(te){Le=te},this.dispose=function(){}}}const Lr=new Ri,Jy=new He;function $y(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function r(m,p){p.color.getRGB(m.fogColor.value,$d(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?n(m,p):p.isMeshToonMaterial?(n(m,p),h(m,p)):p.isMeshPhongMaterial?(n(m,p),u(m,p)):p.isMeshStandardMaterial?(n(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(n(m,p),g(m,p)):p.isMeshDepthMaterial?n(m,p):p.isMeshDistanceMaterial?(n(m,p),v(m,p)):p.isMeshNormalMaterial?n(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function n(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,M=A.envMapRotation;T&&(m.envMap.value=T,Lr.copy(M),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),m.envMapRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(Lr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:s}}function Qy(i,e,t,r){let s={},n={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const M=T.program;r.uniformBlockBinding(A,M)}function c(A,T){let M=s[A.id];M===void 0&&(g(A),M=u(A),s[A.id]=M,A.addEventListener("dispose",m));const I=T.program;r.updateUBOMapping(A,I);const L=e.render.frame;n[A.id]!==L&&(d(A),n[A.id]=L)}function u(A){const T=h();A.__bindingPointIndex=T;const M=i.createBuffer(),I=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,M),M}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=s[A.id],M=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let L=0,C=M.length;L<C;L++){const B=Array.isArray(M[L])?M[L]:[M[L]];for(let E=0,S=B.length;E<S;E++){const D=B[E];if(f(D,L,E,I)===!0){const $=D.__offset,K=Array.isArray(D.value)?D.value:[D.value];let Q=0;for(let se=0;se<K.length;se++){const W=K[se],ee=v(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,$+Q,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,Q),Q+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(A,T,M,I){const L=A.value,C=T+"_"+M;if(I[C]===void 0)return typeof L=="number"||typeof L=="boolean"?I[C]=L:I[C]=L.clone(),!0;{const B=I[C];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return I[C]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function g(A){const T=A.uniforms;let M=0;const I=16;for(let C=0,B=T.length;C<B;C++){const E=Array.isArray(T[C])?T[C]:[T[C]];for(let S=0,D=E.length;S<D;S++){const $=E[S],K=Array.isArray($.value)?$.value:[$.value];for(let Q=0,se=K.length;Q<se;Q++){const W=K[Q],ee=v(W),X=M%I,he=X%ee.boundary,Ee=X+he;M+=he,Ee!==0&&I-Ee<ee.storage&&(M+=I-Ee),$.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=M,M+=ee.storage}}}const L=M%I;return L>0&&(M+=I-L),A.__size=M,A.__cache={},this}function v(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete n[T.id]}function p(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},n={}}return{bind:l,update:c,dispose:p}}class eS{constructor(e={}){const{canvas:t=Qg(),context:r=null,depth:s=!0,stencil:n=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=r.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this.toneMapping=mr,this.toneMappingExposure=1;const M=this;let I=!1,L=0,C=0,B=null,E=-1,S=null;const D=new et,$=new et;let K=null;const Q=new Ne(0);let se=0,W=t.width,ee=t.height,X=1,he=null,Ee=null;const Le=new et(0,0,W,ee),Ie=new et(0,0,W,ee);let tt=!1;const te=new xc;let de=!1,Te=!1;this.transmissionResolutionScale=1;const me=new He,Re=new He,De=new F,ke=new et,w={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let R=!1;function z(){return B===null?X:1}let b=r;function ie(x,O){return t.getContext(x,O)}try{const x={alpha:!0,depth:s,stencil:n,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oc}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",ge,!1),b===null){const O="webgl2";if(b=ie(O,x),b===null)throw ie(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let J,re,q,ne,H,y,_,P,k,Y,j,ue,fe,pe,Oe,oe,Me,Pe,Ae,ve,je,Ve,ut,U;function xe(){J=new uM(b),J.init(),Ve=new jy(b,J),re=new rM(b,J,e,Ve),q=new Wy(b,J),re.reverseDepthBuffer&&d&&q.buffers.depth.setReversed(!0),ne=new fM(b),H=new Ly,y=new Xy(b,J,q,H,re,Ve,ne),_=new nM(M),P=new cM(M),k=new xv(b),ut=new tM(b,k),Y=new hM(b,k,ne,ut),j=new mM(b,Y,k,ne),Ae=new pM(b,re,y),oe=new sM(H),ue=new Py(M,_,P,J,re,ut,oe),fe=new $y(M,H),pe=new Dy,Oe=new ky(J),Pe=new eM(M,_,P,q,j,f,l),Me=new Vy(M,j,re),U=new Qy(b,ne,re,q),ve=new iM(b,J,ne),je=new dM(b,J,ne),ne.programs=ue.programs,M.capabilities=re,M.extensions=J,M.properties=H,M.renderLists=pe,M.shadowMap=Me,M.state=q,M.info=ne}xe();const Z=new Zy(M,b);this.xr=Z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const x=J.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=J.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(W,ee,!1))},this.getSize=function(x){return x.set(W,ee)},this.setSize=function(x,O,V=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=x,ee=O,t.width=Math.floor(x*X),t.height=Math.floor(O*X),V===!0&&(t.style.width=x+"px",t.style.height=O+"px"),this.setViewport(0,0,x,O)},this.getDrawingBufferSize=function(x){return x.set(W*X,ee*X).floor()},this.setDrawingBufferSize=function(x,O,V){W=x,ee=O,X=V,t.width=Math.floor(x*V),t.height=Math.floor(O*V),this.setViewport(0,0,x,O)},this.getCurrentViewport=function(x){return x.copy(D)},this.getViewport=function(x){return x.copy(Le)},this.setViewport=function(x,O,V,G){x.isVector4?Le.set(x.x,x.y,x.z,x.w):Le.set(x,O,V,G),q.viewport(D.copy(Le).multiplyScalar(X).round())},this.getScissor=function(x){return x.copy(Ie)},this.setScissor=function(x,O,V,G){x.isVector4?Ie.set(x.x,x.y,x.z,x.w):Ie.set(x,O,V,G),q.scissor($.copy(Ie).multiplyScalar(X).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(x){q.setScissorTest(tt=x)},this.setOpaqueSort=function(x){he=x},this.setTransparentSort=function(x){Ee=x},this.getClearColor=function(x){return x.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(x=!0,O=!0,V=!0){let G=0;if(x){let N=!1;if(B!==null){const le=B.texture.format;N=le===pc||le===fc||le===dc}if(N){const le=B.texture.type,Se=le===Ji||le===Vr||le===vn||le===Rs||le===cc||le===uc,be=Pe.getClearColor(),we=Pe.getClearAlpha(),Fe=be.r,Ue=be.g,Be=be.b;Se?(g[0]=Fe,g[1]=Ue,g[2]=Be,g[3]=we,b.clearBufferuiv(b.COLOR,0,g)):(v[0]=Fe,v[1]=Ue,v[2]=Be,v[3]=we,b.clearBufferiv(b.COLOR,0,v))}else G|=b.COLOR_BUFFER_BIT}O&&(G|=b.DEPTH_BUFFER_BIT),V&&(G|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),Pe.dispose(),pe.dispose(),Oe.dispose(),H.dispose(),_.dispose(),P.dispose(),j.dispose(),ut.dispose(),U.dispose(),ue.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Rc),Z.removeEventListener("sessionend",Cc),yr.stop()};function ae(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const x=ne.autoReset,O=Me.enabled,V=Me.autoUpdate,G=Me.needsUpdate,N=Me.type;xe(),ne.autoReset=x,Me.enabled=O,Me.autoUpdate=V,Me.needsUpdate=G,Me.type=N}function ge(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ke(x){const O=x.target;O.removeEventListener("dispose",Ke),gt(O)}function gt(x){Ct(x),H.remove(x)}function Ct(x){const O=H.get(x).programs;O!==void 0&&(O.forEach(function(V){ue.releaseProgram(V)}),x.isShaderMaterial&&ue.releaseShaderCache(x))}this.renderBufferDirect=function(x,O,V,G,N,le){O===null&&(O=w);const Se=N.isMesh&&N.matrixWorld.determinant()<0,be=_f(x,O,V,G,N);q.setMaterial(G,Se);let we=V.index,Fe=1;if(G.wireframe===!0){if(we=Y.getWireframeAttribute(V),we===void 0)return;Fe=2}const Ue=V.drawRange,Be=V.attributes.position;let $e=Ue.start*Fe,ot=(Ue.start+Ue.count)*Fe;le!==null&&($e=Math.max($e,le.start*Fe),ot=Math.min(ot,(le.start+le.count)*Fe)),we!==null?($e=Math.max($e,0),ot=Math.min(ot,we.count)):Be!=null&&($e=Math.max($e,0),ot=Math.min(ot,Be.count));const yt=ot-$e;if(yt<0||yt===1/0)return;ut.setup(N,G,be,V,we);let lt,ht=ve;if(we!==null&&(lt=k.get(we),ht=je,ht.setIndex(lt)),N.isMesh)G.wireframe===!0?(q.setLineWidth(G.wireframeLinewidth*z()),ht.setMode(b.LINES)):ht.setMode(b.TRIANGLES);else if(N.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),q.setLineWidth(Ce*z()),N.isLineSegments?ht.setMode(b.LINES):N.isLineLoop?ht.setMode(b.LINE_LOOP):ht.setMode(b.LINE_STRIP)}else N.isPoints?ht.setMode(b.POINTS):N.isSprite&&ht.setMode(b.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ur("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))ht.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ce=N._multiDrawStarts,Ut=N._multiDrawCounts,Sr=N._multiDrawCount,ci=we?k.get(we).bytesPerElement:1,jr=H.get(G).currentProgram.getUniforms();for(let Yt=0;Yt<Sr;Yt++)jr.setValue(b,"_gl_DrawID",Yt),ht.render(Ce[Yt]/ci,Ut[Yt])}else if(N.isInstancedMesh)ht.renderInstances($e,yt,N.count);else if(V.isInstancedBufferGeometry){const Ce=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Ut=Math.min(V.instanceCount,Ce);ht.renderInstances($e,yt,Ut)}else ht.render($e,yt)};function st(x,O,V){x.transparent===!0&&x.side===Ei&&x.forceSinglePass===!1?(x.side=qt,x.needsUpdate=!0,Cn(x,O,V),x.side=Zi,x.needsUpdate=!0,Cn(x,O,V),x.side=Ei):Cn(x,O,V)}this.compile=function(x,O,V=null){V===null&&(V=x),p=Oe.get(V),p.init(O),T.push(p),V.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),x!==V&&x.traverseVisible(function(N){N.isLight&&N.layers.test(O.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const G=new Set;return x.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const le=N.material;if(le)if(Array.isArray(le))for(let Se=0;Se<le.length;Se++){const be=le[Se];st(be,V,N),G.add(be)}else st(le,V,N),G.add(le)}),p=T.pop(),G},this.compileAsync=function(x,O,V=null){const G=this.compile(x,O,V);return new Promise(N=>{function le(){if(G.forEach(function(Se){H.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){N(x);return}setTimeout(le,10)}J.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let li=null;function Ui(x){li&&li(x)}function Rc(){yr.stop()}function Cc(){yr.start()}const yr=new uf;yr.setAnimationLoop(Ui),typeof self<"u"&&yr.setContext(self),this.setAnimationLoop=function(x){li=x,Z.setAnimationLoop(x),x===null?yr.stop():yr.start()},Z.addEventListener("sessionstart",Rc),Z.addEventListener("sessionend",Cc),this.render=function(x,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(O),O=Z.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,O,B),p=Oe.get(x,T.length),p.init(O),T.push(p),Re.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),te.setFromProjectionMatrix(Re),Te=this.localClippingEnabled,de=oe.init(this.clippingPlanes,Te),m=pe.get(x,A.length),m.init(),A.push(m),Z.enabled===!0&&Z.isPresenting===!0){const le=M.xr.getDepthSensingMesh();le!==null&&Wa(le,O,-1/0,M.sortObjects)}Wa(x,O,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(he,Ee),R=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,R&&Pe.addToRenderList(m,x),this.info.render.frame++,de===!0&&oe.beginShadows();const V=p.state.shadowsArray;Me.render(V,x,O),de===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,N=m.transmissive;if(p.setupLights(),O.isArrayCamera){const le=O.cameras;if(N.length>0)for(let Se=0,be=le.length;Se<be;Se++){const we=le[Se];Lc(G,N,x,we)}R&&Pe.render(x);for(let Se=0,be=le.length;Se<be;Se++){const we=le[Se];Pc(m,x,we,we.viewport)}}else N.length>0&&Lc(G,N,x,O),R&&Pe.render(x),Pc(m,x,O);B!==null&&C===0&&(y.updateMultisampleRenderTarget(B),y.updateRenderTargetMipmap(B)),x.isScene===!0&&x.onAfterRender(M,x,O),ut.resetDefaultState(),E=-1,S=null,T.pop(),T.length>0?(p=T[T.length-1],de===!0&&oe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Wa(x,O,V,G){if(x.visible===!1)return;if(x.layers.test(O.layers)){if(x.isGroup)V=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(O);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||te.intersectsSprite(x)){G&&ke.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Re);const le=j.update(x),Se=x.material;Se.visible&&m.push(x,le,Se,V,ke.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||te.intersectsObject(x))){const le=j.update(x),Se=x.material;if(G&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),ke.copy(x.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),ke.copy(le.boundingSphere.center)),ke.applyMatrix4(x.matrixWorld).applyMatrix4(Re)),Array.isArray(Se)){const be=le.groups;for(let we=0,Fe=be.length;we<Fe;we++){const Ue=be[we],Be=Se[Ue.materialIndex];Be&&Be.visible&&m.push(x,le,Be,V,ke.z,Ue)}}else Se.visible&&m.push(x,le,Se,V,ke.z,null)}}const N=x.children;for(let le=0,Se=N.length;le<Se;le++)Wa(N[le],O,V,G)}function Pc(x,O,V,G){const N=x.opaque,le=x.transmissive,Se=x.transparent;p.setupLightsView(V),de===!0&&oe.setGlobalState(M.clippingPlanes,V),G&&q.viewport(D.copy(G)),N.length>0&&Rn(N,O,V),le.length>0&&Rn(le,O,V),Se.length>0&&Rn(Se,O,V),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Lc(x,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Gr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Tn:Ji,minFilter:ji,samples:4,stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const N=p.state.transmissionRenderTarget[G.id],le=G.viewport||D;N.setSize(le.z*M.transmissionResolutionScale,le.w*M.transmissionResolutionScale);const Se=M.getRenderTarget();M.setRenderTarget(N),M.getClearColor(Q),se=M.getClearAlpha(),se<1&&M.setClearColor(16777215,.5),M.clear(),R&&Pe.render(V);const be=M.toneMapping;M.toneMapping=mr;const we=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),de===!0&&oe.setGlobalState(M.clippingPlanes,G),Rn(x,V,G),y.updateMultisampleRenderTarget(N),y.updateRenderTargetMipmap(N),J.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ue=0,Be=O.length;Ue<Be;Ue++){const $e=O[Ue],ot=$e.object,yt=$e.geometry,lt=$e.material,ht=$e.group;if(lt.side===Ei&&ot.layers.test(G.layers)){const Ce=lt.side;lt.side=qt,lt.needsUpdate=!0,Ic(ot,V,G,yt,lt,ht),lt.side=Ce,lt.needsUpdate=!0,Fe=!0}}Fe===!0&&(y.updateMultisampleRenderTarget(N),y.updateRenderTargetMipmap(N))}M.setRenderTarget(Se),M.setClearColor(Q,se),we!==void 0&&(G.viewport=we),M.toneMapping=be}function Rn(x,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let N=0,le=x.length;N<le;N++){const Se=x[N],be=Se.object,we=Se.geometry,Fe=G===null?Se.material:G,Ue=Se.group;be.layers.test(V.layers)&&Ic(be,O,V,we,Fe,Ue)}}function Ic(x,O,V,G,N,le){x.onBeforeRender(M,O,V,G,N,le),x.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),N.onBeforeRender(M,O,V,G,x,le),N.transparent===!0&&N.side===Ei&&N.forceSinglePass===!1?(N.side=qt,N.needsUpdate=!0,M.renderBufferDirect(V,O,G,N,x,le),N.side=Zi,N.needsUpdate=!0,M.renderBufferDirect(V,O,G,N,x,le),N.side=Ei):M.renderBufferDirect(V,O,G,N,x,le),x.onAfterRender(M,O,V,G,N,le)}function Cn(x,O,V){O.isScene!==!0&&(O=w);const G=H.get(x),N=p.state.lights,le=p.state.shadowsArray,Se=N.state.version,be=ue.getParameters(x,N.state,le,O,V),we=ue.getProgramCacheKey(be);let Fe=G.programs;G.environment=x.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(x.isMeshStandardMaterial?P:_).get(x.envMap||G.environment),G.envMapRotation=G.environment!==null&&x.envMap===null?O.environmentRotation:x.envMapRotation,Fe===void 0&&(x.addEventListener("dispose",Ke),Fe=new Map,G.programs=Fe);let Ue=Fe.get(we);if(Ue!==void 0){if(G.currentProgram===Ue&&G.lightsStateVersion===Se)return Uc(x,be),Ue}else be.uniforms=ue.getUniforms(x),x.onBeforeCompile(be,M),Ue=ue.acquireProgram(be,we),Fe.set(we,Ue),G.uniforms=be.uniforms;const Be=G.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Be.clippingPlanes=oe.uniform),Uc(x,be),G.needsLights=xf(x),G.lightsStateVersion=Se,G.needsLights&&(Be.ambientLightColor.value=N.state.ambient,Be.lightProbe.value=N.state.probe,Be.directionalLights.value=N.state.directional,Be.directionalLightShadows.value=N.state.directionalShadow,Be.spotLights.value=N.state.spot,Be.spotLightShadows.value=N.state.spotShadow,Be.rectAreaLights.value=N.state.rectArea,Be.ltc_1.value=N.state.rectAreaLTC1,Be.ltc_2.value=N.state.rectAreaLTC2,Be.pointLights.value=N.state.point,Be.pointLightShadows.value=N.state.pointShadow,Be.hemisphereLights.value=N.state.hemi,Be.directionalShadowMap.value=N.state.directionalShadowMap,Be.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Be.spotShadowMap.value=N.state.spotShadowMap,Be.spotLightMatrix.value=N.state.spotLightMatrix,Be.spotLightMap.value=N.state.spotLightMap,Be.pointShadowMap.value=N.state.pointShadowMap,Be.pointShadowMatrix.value=N.state.pointShadowMatrix),G.currentProgram=Ue,G.uniformsList=null,Ue}function Dc(x){if(x.uniformsList===null){const O=x.currentProgram.getUniforms();x.uniformsList=ga.seqWithValue(O.seq,x.uniforms)}return x.uniformsList}function Uc(x,O){const V=H.get(x);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.batchingColor=O.batchingColor,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.instancingMorph=O.instancingMorph,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function _f(x,O,V,G,N){O.isScene!==!0&&(O=w),y.resetTextureUnits();const le=O.fog,Se=G.isMeshStandardMaterial?O.environment:null,be=B===null?M.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Xt,we=(G.isMeshStandardMaterial?P:_).get(G.envMap||Se),Fe=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!V.morphAttributes.position,$e=!!V.morphAttributes.normal,ot=!!V.morphAttributes.color;let yt=mr;G.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(yt=M.toneMapping);const lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ht=lt!==void 0?lt.length:0,Ce=H.get(G),Ut=p.state.lights;if(de===!0&&(Te===!0||x!==S)){const wt=x===S&&G.id===E;oe.setState(G,x,wt)}let Sr=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Ut.state.version||Ce.outputColorSpace!==be||N.isBatchedMesh&&Ce.batching===!1||!N.isBatchedMesh&&Ce.batching===!0||N.isBatchedMesh&&Ce.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ce.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ce.instancing===!1||!N.isInstancedMesh&&Ce.instancing===!0||N.isSkinnedMesh&&Ce.skinning===!1||!N.isSkinnedMesh&&Ce.skinning===!0||N.isInstancedMesh&&Ce.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ce.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ce.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ce.instancingMorph===!1&&N.morphTexture!==null||Ce.envMap!==we||G.fog===!0&&Ce.fog!==le||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==oe.numPlanes||Ce.numIntersection!==oe.numIntersection)||Ce.vertexAlphas!==Fe||Ce.vertexTangents!==Ue||Ce.morphTargets!==Be||Ce.morphNormals!==$e||Ce.morphColors!==ot||Ce.toneMapping!==yt||Ce.morphTargetsCount!==ht)&&(Sr=!0):(Sr=!0,Ce.__version=G.version);let ci=Ce.currentProgram;Sr===!0&&(ci=Cn(G,O,N));let jr=!1,Yt=!1,Hs=!1;const pt=ci.getUniforms(),ii=Ce.uniforms;if(q.useProgram(ci.program)&&(jr=!0,Yt=!0,Hs=!0),G.id!==E&&(E=G.id,Yt=!0),jr||S!==x){q.buffers.depth.getReversed()?(me.copy(x.projectionMatrix),t_(me),i_(me),pt.setValue(b,"projectionMatrix",me)):pt.setValue(b,"projectionMatrix",x.projectionMatrix),pt.setValue(b,"viewMatrix",x.matrixWorldInverse);const wt=pt.map.cameraPosition;wt!==void 0&&wt.setValue(b,De.setFromMatrixPosition(x.matrixWorld)),re.logarithmicDepthBuffer&&pt.setValue(b,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&pt.setValue(b,"isOrthographic",x.isOrthographicCamera===!0),S!==x&&(S=x,Yt=!0,Hs=!0)}if(N.isSkinnedMesh){pt.setOptional(b,N,"bindMatrix"),pt.setOptional(b,N,"bindMatrixInverse");const wt=N.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),pt.setValue(b,"boneTexture",wt.boneTexture,y))}N.isBatchedMesh&&(pt.setOptional(b,N,"batchingTexture"),pt.setValue(b,"batchingTexture",N._matricesTexture,y),pt.setOptional(b,N,"batchingIdTexture"),pt.setValue(b,"batchingIdTexture",N._indirectTexture,y),pt.setOptional(b,N,"batchingColorTexture"),N._colorsTexture!==null&&pt.setValue(b,"batchingColorTexture",N._colorsTexture,y));const ri=V.morphAttributes;if((ri.position!==void 0||ri.normal!==void 0||ri.color!==void 0)&&Ae.update(N,V,ci),(Yt||Ce.receiveShadow!==N.receiveShadow)&&(Ce.receiveShadow=N.receiveShadow,pt.setValue(b,"receiveShadow",N.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ii.envMap.value=we,ii.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(ii.envMapIntensity.value=O.environmentIntensity),Yt&&(pt.setValue(b,"toneMappingExposure",M.toneMappingExposure),Ce.needsLights&&vf(ii,Hs),le&&G.fog===!0&&fe.refreshFogUniforms(ii,le),fe.refreshMaterialUniforms(ii,G,X,ee,p.state.transmissionRenderTarget[x.id]),ga.upload(b,Dc(Ce),ii,y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ga.upload(b,Dc(Ce),ii,y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&pt.setValue(b,"center",N.center),pt.setValue(b,"modelViewMatrix",N.modelViewMatrix),pt.setValue(b,"normalMatrix",N.normalMatrix),pt.setValue(b,"modelMatrix",N.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const wt=G.uniformsGroups;for(let ui=0,Xa=wt.length;ui<Xa;ui++){const br=wt[ui];U.update(br,ci),U.bind(br,ci)}}return ci}function vf(x,O){x.ambientLightColor.needsUpdate=O,x.lightProbe.needsUpdate=O,x.directionalLights.needsUpdate=O,x.directionalLightShadows.needsUpdate=O,x.pointLights.needsUpdate=O,x.pointLightShadows.needsUpdate=O,x.spotLights.needsUpdate=O,x.spotLightShadows.needsUpdate=O,x.rectAreaLights.needsUpdate=O,x.hemisphereLights.needsUpdate=O}function xf(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(x,O,V){H.get(x.texture).__webglTexture=O,H.get(x.depthTexture).__webglTexture=V;const G=H.get(x);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(x,O){const V=H.get(x);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0};const Mf=b.createFramebuffer();this.setRenderTarget=function(x,O=0,V=0){B=x,L=O,C=V;let G=!0,N=null,le=!1,Se=!1;if(x){const be=H.get(x);if(be.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(b.FRAMEBUFFER,null),G=!1;else if(be.__webglFramebuffer===void 0)y.setupRenderTarget(x);else if(be.__hasExternalTextures)y.rebindTextures(x,H.get(x.texture).__webglTexture,H.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ue=x.depthTexture;if(be.__boundDepthTexture!==Ue){if(Ue!==null&&H.has(Ue)&&(x.width!==Ue.image.width||x.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(x)}}const we=x.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Fe=H.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?N=Fe[O][V]:N=Fe[O],le=!0):x.samples>0&&y.useMultisampledRTT(x)===!1?N=H.get(x).__webglMultisampledFramebuffer:Array.isArray(Fe)?N=Fe[V]:N=Fe,D.copy(x.viewport),$.copy(x.scissor),K=x.scissorTest}else D.copy(Le).multiplyScalar(X).floor(),$.copy(Ie).multiplyScalar(X).floor(),K=tt;if(V!==0&&(N=Mf),q.bindFramebuffer(b.FRAMEBUFFER,N)&&G&&q.drawBuffers(x,N),q.viewport(D),q.scissor($),q.setScissorTest(K),le){const be=H.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,be.__webglTexture,V)}else if(Se){const be=H.get(x.texture),we=O;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,be.__webglTexture,V,we)}else if(x!==null&&V!==0){const be=H.get(x.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,be.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(x,O,V,G,N,le,Se){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){q.bindFramebuffer(b.FRAMEBUFFER,be);try{const we=x.texture,Fe=we.format,Ue=we.type;if(!re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=x.width-G&&V>=0&&V<=x.height-N&&b.readPixels(O,V,G,N,Ve.convert(Fe),Ve.convert(Ue),le)}finally{const we=B!==null?H.get(B).__webglFramebuffer:null;q.bindFramebuffer(b.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(x,O,V,G,N,le,Se){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=H.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Se!==void 0&&(be=be[Se]),be){const we=x.texture,Fe=we.format,Ue=we.type;if(!re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=x.width-G&&V>=0&&V<=x.height-N){q.bindFramebuffer(b.FRAMEBUFFER,be);const Be=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Be),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(O,V,G,N,Ve.convert(Fe),Ve.convert(Ue),0);const $e=B!==null?H.get(B).__webglFramebuffer:null;q.bindFramebuffer(b.FRAMEBUFFER,$e);const ot=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await e_(b,ot,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Be),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le),b.deleteBuffer(Be),b.deleteSync(ot),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(x,O=null,V=0){x.isTexture!==!0&&(Ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,x=arguments[1]);const G=Math.pow(2,-V),N=Math.floor(x.image.width*G),le=Math.floor(x.image.height*G),Se=O!==null?O.x:0,be=O!==null?O.y:0;y.setTexture2D(x,0),b.copyTexSubImage2D(b.TEXTURE_2D,V,0,0,Se,be,N,le),q.unbindTexture()};const yf=b.createFramebuffer(),Sf=b.createFramebuffer();this.copyTextureToTexture=function(x,O,V=null,G=null,N=0,le=null){x.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,x=arguments[1],O=arguments[2],le=arguments[3]||0,V=null),le===null&&(N!==0?(Ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=N,N=0):le=0);let Se,be,we,Fe,Ue,Be,$e,ot,yt;const lt=x.isCompressedTexture?x.mipmaps[le]:x.image;if(V!==null)Se=V.max.x-V.min.x,be=V.max.y-V.min.y,we=V.isBox3?V.max.z-V.min.z:1,Fe=V.min.x,Ue=V.min.y,Be=V.isBox3?V.min.z:0;else{const ri=Math.pow(2,-N);Se=Math.floor(lt.width*ri),be=Math.floor(lt.height*ri),x.isDataArrayTexture?we=lt.depth:x.isData3DTexture?we=Math.floor(lt.depth*ri):we=1,Fe=0,Ue=0,Be=0}G!==null?($e=G.x,ot=G.y,yt=G.z):($e=0,ot=0,yt=0);const ht=Ve.convert(O.format),Ce=Ve.convert(O.type);let Ut;O.isData3DTexture?(y.setTexture3D(O,0),Ut=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(y.setTexture2DArray(O,0),Ut=b.TEXTURE_2D_ARRAY):(y.setTexture2D(O,0),Ut=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const Sr=b.getParameter(b.UNPACK_ROW_LENGTH),ci=b.getParameter(b.UNPACK_IMAGE_HEIGHT),jr=b.getParameter(b.UNPACK_SKIP_PIXELS),Yt=b.getParameter(b.UNPACK_SKIP_ROWS),Hs=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,lt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,lt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fe),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ue),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Be);const pt=x.isDataArrayTexture||x.isData3DTexture,ii=O.isDataArrayTexture||O.isData3DTexture;if(x.isDepthTexture){const ri=H.get(x),wt=H.get(O),ui=H.get(ri.__renderTarget),Xa=H.get(wt.__renderTarget);q.bindFramebuffer(b.READ_FRAMEBUFFER,ui.__webglFramebuffer),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,Xa.__webglFramebuffer);for(let br=0;br<we;br++)pt&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,H.get(x).__webglTexture,N,Be+br),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,H.get(O).__webglTexture,le,yt+br)),b.blitFramebuffer(Fe,Ue,Se,be,$e,ot,Se,be,b.DEPTH_BUFFER_BIT,b.NEAREST);q.bindFramebuffer(b.READ_FRAMEBUFFER,null),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(N!==0||x.isRenderTargetTexture||H.has(x)){const ri=H.get(x),wt=H.get(O);q.bindFramebuffer(b.READ_FRAMEBUFFER,yf),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,Sf);for(let ui=0;ui<we;ui++)pt?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ri.__webglTexture,N,Be+ui):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ri.__webglTexture,N),ii?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,wt.__webglTexture,le,yt+ui):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,wt.__webglTexture,le),N!==0?b.blitFramebuffer(Fe,Ue,Se,be,$e,ot,Se,be,b.COLOR_BUFFER_BIT,b.NEAREST):ii?b.copyTexSubImage3D(Ut,le,$e,ot,yt+ui,Fe,Ue,Se,be):b.copyTexSubImage2D(Ut,le,$e,ot,Fe,Ue,Se,be);q.bindFramebuffer(b.READ_FRAMEBUFFER,null),q.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else ii?x.isDataTexture||x.isData3DTexture?b.texSubImage3D(Ut,le,$e,ot,yt,Se,be,we,ht,Ce,lt.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(Ut,le,$e,ot,yt,Se,be,we,ht,lt.data):b.texSubImage3D(Ut,le,$e,ot,yt,Se,be,we,ht,Ce,lt):x.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,le,$e,ot,Se,be,ht,Ce,lt.data):x.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,le,$e,ot,lt.width,lt.height,ht,lt.data):b.texSubImage2D(b.TEXTURE_2D,le,$e,ot,Se,be,ht,Ce,lt);b.pixelStorei(b.UNPACK_ROW_LENGTH,Sr),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ci),b.pixelStorei(b.UNPACK_SKIP_PIXELS,jr),b.pixelStorei(b.UNPACK_SKIP_ROWS,Yt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Hs),le===0&&O.generateMipmaps&&b.generateMipmap(Ut),q.unbindTexture()},this.copyTextureToTexture3D=function(x,O,V=null,G=null,N=0){return x.isTexture!==!0&&(Ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,G=arguments[1]||null,x=arguments[2],O=arguments[3],N=arguments[4]||0),Ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(x,O,V,G,N)},this.initRenderTarget=function(x){H.get(x).__webglFramebuffer===void 0&&y.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?y.setTextureCube(x,0):x.isData3DTexture?y.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?y.setTexture2DArray(x,0):y.setTexture2D(x,0),q.unbindTexture()},this.resetState=function(){L=0,C=0,B=null,q.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}}function Ah(i,e){if(e===Tg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ul||e===Gd){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const r=t.count-2,s=[];if(e===Ul)for(let a=1;a<=r;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<r;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=i.clone();return n.setIndex(s),n.clearGroups(),n}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class tS extends ks{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new aS(t)}),this.register(function(t){return new oS(t)}),this.register(function(t){return new gS(t)}),this.register(function(t){return new _S(t)}),this.register(function(t){return new vS(t)}),this.register(function(t){return new cS(t)}),this.register(function(t){return new uS(t)}),this.register(function(t){return new hS(t)}),this.register(function(t){return new dS(t)}),this.register(function(t){return new nS(t)}),this.register(function(t){return new fS(t)}),this.register(function(t){return new lS(t)}),this.register(function(t){return new mS(t)}),this.register(function(t){return new pS(t)}),this.register(function(t){return new rS(t)}),this.register(function(t){return new xS(t)}),this.register(function(t){return new MS(t)})}load(e,t,r,s){const n=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=dn.extractUrlBase(e);a=dn.resolveURL(c,this.path)}else a=dn.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),n.manager.itemError(e),n.manager.itemEnd(e)},l=new cf(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{n.parse(c,a,function(u){t(u),n.manager.itemEnd(e)},o)}catch(u){o(u)}},r,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,r,s){let n;const a={},o={},l=new TextDecoder;if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===mf){try{a[Ye.KHR_BINARY_GLTF]=new yS(e)}catch(u){s&&s(u);return}n=JSON.parse(a[Ye.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(e));else n=e;if(n.asset===void 0||n.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new US(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(n.extensionsUsed)for(let u=0;u<n.extensionsUsed.length;++u){const h=n.extensionsUsed[u],d=n.extensionsRequired||[];switch(h){case Ye.KHR_MATERIALS_UNLIT:a[h]=new sS;break;case Ye.KHR_DRACO_MESH_COMPRESSION:a[h]=new SS(n,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:a[h]=new bS;break;case Ye.KHR_MESH_QUANTIZATION:a[h]=new ES;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(r,s)}parseAsync(e,t){const r=this;return new Promise(function(s,n){r.parse(e,t,s,n)})}}function iS(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rS{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let r=0,s=t.length;r<s;r++){const n=t[r];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,r="light:"+e;let s=t.cache.get(r);if(s)return s;const n=t.json,a=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let o;const l=new Ne(16777215);a.color!==void 0&&l.setRGB(a.color[0],a.color[1],a.color[2],Xt);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new nv(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Bl(l),o.distance=c;break;case"spot":o=new iv(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),Wi(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),s=Promise.resolve(o),t.cache.add(r,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,r=this.parser,s=r.json.nodes[e],n=(s.extensions&&s.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(a){return r._getNodeRef(t.cache,n,a)})}}class sS{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return hr}extendParams(e,t,r){const s=[];e.color=new Ne(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const a=n.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Xt),e.opacity=a[3]}n.baseColorTexture!==void 0&&s.push(r.assignTexture(e,"map",n.baseColorTexture,Rt))}return Promise.all(s)}}class nS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class aS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&n.push(r.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&n.push(r.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(n.push(r.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(n)}}class oS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_DISPERSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class lS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&n.push(r.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&n.push(r.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(n)}}class cS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Ne(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Xt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&n.push(r.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Rt)),a.sheenRoughnessTexture!==void 0&&n.push(r.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(n)}}class uS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&n.push(r.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)}}class hS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&n.push(r.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ne().setRGB(o[0],o[1],o[2],Xt),Promise.all(n)}}class dS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class fS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&n.push(r.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ne().setRGB(o[0],o[1],o[2],Xt),a.specularColorTexture!==void 0&&n.push(r.assignTexture(t,"specularColorMap",a.specularColorTexture,Rt)),Promise.all(n)}}class pS{constructor(e){this.parser=e,this.name=Ye.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&n.push(r.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(n)}}class mS{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ii}extendMaterialParams(e,t){const r=this.parser,s=r.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const n=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&n.push(r.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(n)}}class gS{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,r=t.json,s=r.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const n=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,a)}}class _S{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,s=r.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],o=s.images[a.source];let l=r.textureLoader;if(o.uri){const c=r.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class vS{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,r=this.parser,s=r.json,n=s.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],o=s.images[a.source];let l=r.textureLoader;if(o.uri){const c=r.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return r.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return r.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class xS{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,r=t.bufferViews[e];if(r.extensions&&r.extensions[this.name]){const s=r.extensions[this.name],n=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class MS{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,r=t.nodes[e];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;const s=t.meshes[r.mesh];for(const l of s.primitives)if(l.mode!==ni.TRIANGLES&&l.mode!==ni.TRIANGLE_STRIP&&l.mode!==ni.TRIANGLE_FAN&&l.mode!==void 0)return null;const n=r.extensions[this.name].attributes,a=[],o={};for(const l in n)a.push(this.parser.getDependency("accessor",n[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),u=c.isGroup?c.children:[c],h=l[0].count,d=[];for(const f of u){const g=new He,v=new F,m=new Mr,p=new F(1,1,1),A=new D_(f.geometry,f.material,h);for(let T=0;T<h;T++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,T),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,T),o.SCALE&&p.fromBufferAttribute(o.SCALE,T),A.setMatrixAt(T,g.compose(v,m,p));for(const T in o)if(T==="_COLOR_0"){const M=o[T];A.instanceColor=new Ol(M.array,M.itemSize,M.normalized)}else T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&f.geometry.setAttribute(T,o[T]);mt.prototype.copy.call(A,f),this.parser.assignFinalMaterial(A),d.push(A)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const mf="glTF",$s=12,wh={JSON:1313821514,BIN:5130562};class yS{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$s),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==mf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-$s,n=new DataView(e,$s);let a=0;for(;a<s;){const o=n.getUint32(a,!0);a+=4;const l=n.getUint32(a,!0);if(a+=4,l===wh.JSON){const c=new Uint8Array(e,$s+a,o);this.content=r.decode(c)}else if(l===wh.BIN){const c=$s+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class SS{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const r=this.json,s=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=zl[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=zl[u]||u.toLowerCase();if(a[u]!==void 0){const d=r.accessors[e.attributes[u]],f=Ms[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",n).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const g in f.attributes){const v=f.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(f)},o,c,Xt,d)})})}}class bS{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class ES{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class gf extends wn{constructor(e,t,r,s){super(e,t,r,s)}copySampleValue_(e){const t=this.resultBuffer,r=this.sampleValues,s=this.valueSize,n=e*s*3+s;for(let a=0;a!==s;a++)t[a]=r[n+a];return t}interpolate_(e,t,r,s){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(r-t)/u,d=h*h,f=d*h,g=e*c,v=g-c,m=-2*f+3*d,p=f-d,A=1-m,T=p-d+h;for(let M=0;M!==o;M++){const I=a[v+M+o],L=a[v+M+l]*u,C=a[g+M+o],B=a[g+M]*u;n[M]=A*I+T*L+m*C+p*B}return n}}const TS=new Mr;class AS extends gf{interpolate_(e,t,r,s){const n=super.interpolate_(e,t,r,s);return TS.fromArray(n).normalize().toArray(n),n}}const ni={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ms={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Rh={9728:Vt,9729:ei,9984:Dd,9985:ua,9986:en,9987:ji},Ch={33071:ur,33648:ba,10497:ws},Fo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},nr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},wS={CUBICSPLINE:void 0,LINEAR:Mn,STEP:xn},Bo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function RS(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Zi})),i.DefaultMaterial}function Ir(i,e,t){for(const r in t.extensions)i[r]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[r]=t.extensions[r])}function Wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function CS(i,e,t){let r=!1,s=!1,n=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(r=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(n=!0),r&&s&&n)break}if(!r&&!s&&!n)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(r){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(n){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return r&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),n&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function PS(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,r=e.weights.length;t<r;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let r=0,s=t.length;r<s;r++)i.morphTargetDictionary[t[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function LS(i){let e;const t=i.extensions&&i.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ko(t.attributes):e=i.indices+":"+ko(i.attributes)+":"+i.mode,i.targets!==void 0)for(let r=0,s=i.targets.length;r<s;r++)e+=":"+ko(i.targets[r]);return e}function ko(i){let e="";const t=Object.keys(i).sort();for(let r=0,s=t.length;r<s;r++)e+=t[r]+":"+i[t[r]]+";";return e}function Hl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function IS(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const DS=new He;class US{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new iS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,s=-1,n=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=r&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,a=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||r&&s<17||n&&a<98?this.textureLoader=new ev(this.options.manager):this.textureLoader=new ov(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new cf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const r=this,s=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:r,userData:{}};return Ir(n,o,s),Wi(o,s),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],r=this.json.meshes||[];for(let s=0,n=t.length;s<n;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,n=e.length;s<n;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(r[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,r){if(e.refs[t]<=1)return r;const s=r.clone(),n=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())n(u,o.children[c])};return n(r,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let r=0;r<t.length;r++){const s=e(t[r]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const r=[];for(let s=0;s<t.length;s++){const n=e(t[s]);n&&r.push(n)}return r}getDependency(e,t){const r=e+":"+t;let s=this.cache.get(r);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":s=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(r,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const r=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(n,a){return r.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],r=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(n,a){r.load(dn.resolveURL(t.uri,s.path),n,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(r){const s=t.byteLength||0,n=t.byteOffset||0;return r.slice(n,n+s)})}loadAccessor(e){const t=this,r=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Fo[s.type],o=Ms[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Gt(c,a,l))}const n=[];return s.bufferView!==void 0?n.push(this.getDependency("bufferView",s.bufferView)):n.push(null),s.sparse!==void 0&&(n.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(n).then(function(a){const o=a[0],l=Fo[s.type],c=Ms[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?r.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let v,m;if(f&&f!==h){const p=Math.floor(d/f),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let T=t.cache.get(A);T||(v=new c(o,p*f,s.count*f/u),T=new R_(v,f/u),t.cache.add(A,T)),m=new _c(T,l,d%f/u,g)}else o===null?v=new c(s.count*l):v=new c(o,d,s.count*l),m=new Gt(v,l,g);if(s.sparse!==void 0){const p=Fo.SCALAR,A=Ms[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,I=new A(a[1],T,s.sparse.count*p),L=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,B=I.length;C<B;C++){const E=I[C];if(m.setX(E,L[C*l]),l>=2&&m.setY(E,L[C*l+1]),l>=3&&m.setZ(E,L[C*l+2]),l>=4&&m.setW(E,L[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,r=this.options,s=t.textures[e].source,n=t.images[s];let a=this.textureLoader;if(n.uri){const o=r.manager.getHandler(n.uri);o!==null&&(a=o)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,r){const s=this,n=this.json,a=n.textures[e],o=n.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,r).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(n.samplers||{})[a.sampler]||{};return u.magFilter=Rh[h.magFilter]||ei,u.minFilter=Rh[h.minFilter]||ji,u.wrapS=Ch[h.wrapS]||ws,u.wrapT=Ch[h.wrapT]||ws,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Vt&&u.minFilter!==ei,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const r=this,s=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=r.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new Tt(v);m.needsUpdate=!0,d(m)}),t.load(dn.resolveURL(h,n.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),Wi(h,a),h.userData.mimeType=a.mimeType||IS(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,r,s){const n=this;return this.getDependency("texture",r.index).then(function(a){if(!a)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(a=a.clone(),a.channel=r.texCoord),n.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const o=r.extensions!==void 0?r.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=n.associations.get(a);a=n.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),n.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let r=e.material;const s=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+r.uuid;let l=this.cache.get(o);l||(l=new nf,Ai.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(o,l)),r=l}else if(e.isLine){const o="LineBasicMaterial:"+r.uuid;let l=this.cache.get(o);l||(l=new sf,Ai.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(o,l)),r=l}if(s||n||a){let o="ClonedMaterial:"+r.uuid+":";s&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=r.clone(),n&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(r))),r=l}e.material=r}getMaterialType(){return yc}loadMaterial(e){const t=this,r=this.json,s=this.extensions,n=r.materials[e];let a;const o={},l=n.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const h=s[Ye.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,n,t))}else{const h=n.pbrMetallicRoughness||{};if(o.color=new Ne(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Xt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Rt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=Ei);const u=n.alphaMode||Bo.OPAQUE;if(u===Bo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Bo.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&a!==hr&&(c.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new Je(1,1),n.normalTexture.scale!==void 0)){const h=n.normalTexture.scale;o.normalScale.set(h,h)}if(n.occlusionTexture!==void 0&&a!==hr&&(c.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&a!==hr){const h=n.emissiveFactor;o.emissive=new Ne().setRGB(h[0],h[1],h[2],Xt)}return n.emissiveTexture!==void 0&&a!==hr&&c.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture,Rt)),Promise.all(c).then(function(){const h=new a(o);return n.name&&(h.name=n.name),Wi(h,n),t.associations.set(h,{materials:e}),n.extensions&&Ir(s,h,n),h})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,r=this.extensions,s=this.primitiveCache;function n(o){return r[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ph(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=LS(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=n(c):d=Ph(new Li,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,r=this.json,s=this.extensions,n=r.meshes[e],a=n.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?RS(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){const v=u[f],m=a[f];let p;const A=c[f];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)p=n.isSkinnedMesh===!0?new P_(v,A):new ti(v,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?p.geometry=Ah(p.geometry,Gd):m.mode===ni.TRIANGLE_FAN&&(p.geometry=Ah(p.geometry,Ul));else if(m.mode===ni.LINES)p=new O_(v,A);else if(m.mode===ni.LINE_STRIP)p=new Mc(v,A);else if(m.mode===ni.LINE_LOOP)p=new F_(v,A);else if(m.mode===ni.POINTS)p=new B_(v,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&PS(p,n),p.name=t.createUniqueName(n.name||"mesh_"+e),Wi(p,n),m.extensions&&Ir(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return n.extensions&&Ir(s,h[0],n),h[0];const d=new kr;n.extensions&&Ir(s,d,n),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t;const r=this.json.cameras[e],s=r[r.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?t=new zt($g.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):r.type==="orthographic"&&(t=new bc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),r.name&&(t.name=this.createUniqueName(r.name)),Wi(t,r),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],r=[];for(let s=0,n=t.joints.length;s<n;s++)r.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",t.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(s){const n=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new He;n!==null&&d.fromArray(n.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vc(o,l)})}loadAnimation(e){const t=this.json,r=this,s=t.animations[e],n=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,A=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],g=h[2],v=h[3],m=h[4],p=[];for(let A=0,T=d.length;A<T;A++){const M=d[A],I=f[A],L=g[A],C=v[A],B=m[A];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const E=r._createAnimationTracks(M,I,L,C,B);if(E)for(let S=0;S<E.length;S++)p.push(E[S])}return new q_(n,void 0,p)})}createNodeMesh(e){const t=this.json,r=this,s=t.nodes[e];return s.mesh===void 0?null:r.getDependency("mesh",s.mesh).then(function(n){const a=r._getNodeRef(r.meshCache,s.mesh,n);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,r=this,s=t.nodes[e],n=r._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(r.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):r.getDependency("skin",s.skin);return Promise.all([n,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,DS)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,r=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const n=t.nodes[e],a=n.name?s.createUniqueName(n.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),n.camera!==void 0&&o.push(s.getDependency("camera",n.camera).then(function(c){return s._getNodeRef(s.cameraCache,n.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(n.isBone===!0?u=new tf:c.length>1?u=new kr:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(n.name&&(u.userData.name=n.name,u.name=a),Wi(u,n),n.extensions&&Ir(r,u,n),n.matrix!==void 0){const h=new He;h.fromArray(n.matrix),u.applyMatrix4(h)}else n.translation!==void 0&&u.position.fromArray(n.translation),n.rotation!==void 0&&u.quaternion.fromArray(n.rotation),n.scale!==void 0&&u.scale.fromArray(n.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,r=this.json.scenes[e],s=this,n=new kr;r.name&&(n.name=s.createUniqueName(r.name)),Wi(n,r),r.extensions&&Ir(t,n,r);const a=r.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)n.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Ai||d instanceof Tt)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(n),n})}_createAnimationTracks(e,t,r,s,n){const a=[],o=e.name?e.name:e.uuid,l=[];nr[n.path]===nr.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(nr[n.path]){case nr.weights:c=Is;break;case nr.rotation:c=Ds;break;case nr.position:case nr.scale:c=Us;break;default:switch(r.itemSize){case 1:c=Is;break;case 2:case 3:default:c=Us;break}break}const u=s.interpolation!==void 0?wS[s.interpolation]:Mn,h=this._getArrayFromAccessor(r);for(let d=0,f=l.length;d<f;d++){const g=new c(l[d]+"."+nr[n.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const r=Hl(t.constructor),s=new Float32Array(t.length);for(let n=0,a=t.length;n<a;n++)s[n]=t[n]*r;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const r=this instanceof Ds?AS:gf;return new r(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NS(i,e,t){const r=e.attributes,s=new Ci;if(r.POSITION!==void 0){const o=t.json.accessors[r.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new F(l[0],l[1],l[2]),new F(c[0],c[1],c[2])),o.normalized){const u=Hl(Ms[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const o=new F,l=new F;for(let c=0,u=n.length;c<u;c++){const h=n[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const v=Hl(Ms[d.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new Pi;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Ph(i,e,t){const r=e.attributes,s=[];function n(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in r){const o=zl[a]||a.toLowerCase();o in i.attributes||s.push(n(r[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Ze.workingColorSpace!==Xt&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ze.workingColorSpace}" not supported.`),Wi(i,e),NS(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?CS(i,e.targets,t):i})}const wc=(i,e)=>{const t=i.__vccOpts||i;for(const[r,s]of e)t[r]=s;return t},OS={__name:"BackgroundEffect",setup(i){const e=ds(null);let t,r,s,n,a=null;function o(){t=new w_,t.background=new Ne(16777215),r=new zt(40,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=8,r.position.y=0,s=new eS({canvas:e.value,antialias:!0,alpha:!1});const f=e.value.parentElement,g=f.clientWidth,v=f.clientHeight,m=g/v;r.aspect=m,r.updateProjectionMatrix(),s.setSize(g,v),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.shadowMap.enabled=!1,l(),c(),window.addEventListener("resize",h),u()}function l(){const f=new av(16777215,1.2);t.add(f);const g=new Bl(16777215,1,30);g.position.set(0,0,8),t.add(g);const v=new Bl(16777215,1,30);v.position.set(5,3,5),t.add(v)}function c(){new tS().load("/models/logo.gltf",f=>{n=f.scene;const g=new Ci().setFromObject(n),v=g.getCenter(new F);n.position.x=-v.x,n.position.y=-v.y,n.position.z=-v.z;const m=g.getSize(new F),p=3/Math.max(m.x,m.y,m.z);n.scale.set(p,p,p),n.rotation.x=Math.PI*.05,n.rotation.y=Math.PI*.1,n.traverse(A=>{if(A.isMesh&&(A.castShadow=!1,A.receiveShadow=!1,A.material)){const T=new hr({color:new Ne(49150)});A.material=T}}),n.userData={initialY:n.position.y,initialRotationY:n.rotation.y},t.add(n)},f=>{console.log(f.loaded/f.total*100+"% loaded")},f=>{console.error("Error loading model:",f)})}function u(){a=requestAnimationFrame(u),n&&(n.position.y=n.userData.initialY+Math.sin(Date.now()*6e-4)*.15,n.rotation.y+=.003,n.rotation.x=Math.PI*.05+Math.sin(Date.now()*3e-4)*.03),s.render(t,r)}function h(){const f=e.value.parentElement;if(!f)return;const g=f.clientWidth,v=f.clientHeight;r.aspect=g/v,r.updateProjectionMatrix(),s.setSize(g,v)}function d(){a&&cancelAnimationFrame(a),window.removeEventListener("resize",h),t&&(t.traverse(f=>{f.geometry&&f.geometry.dispose(),f.material&&(Array.isArray(f.material)?f.material.forEach(g=>g.dispose()):f.material.dispose())}),s==null||s.dispose())}return bn(()=>{o()}),Na(()=>{d()}),(f,g)=>(Ss(),Ba("canvas",{ref_key:"canvasRef",ref:e,class:"background-canvas"},null,512))}},FS=wc(OS,[["__scopeId","data-v-c1aea8dd"]]),BS={__name:"AnimatedElement",props:{animation:{type:String,default:"fade"},delay:{type:Number,default:0},duration:{type:Number,default:800},triggerOnScroll:{type:Boolean,default:!0},threshold:{type:Number,default:.2},hover:{type:Boolean,default:!1},hoverEffect:{type:String,default:"lift"}},setup(i){const e=i,t=ds(null),r=ds(!e.triggerOnScroll),s=ds(!1),n=gs(()=>({"--animation-delay":`${e.delay}ms`,"--animation-duration":`${e.duration}ms`})),a=gs(()=>r.value?"":`initial-${e.animation}`),o=gs(()=>e.hover?`hover-${e.hoverEffect}`:"");bn(()=>{if(e.triggerOnScroll&&t.value){const u=new IntersectionObserver(h=>{h.forEach(d=>{d.isIntersecting&&(r.value=!0,u.unobserve(d.target))})},{threshold:e.threshold,rootMargin:"0px"});u.observe(t.value)}});const l=()=>{e.hover&&(s.value=!0)},c=()=>{e.hover&&(s.value=!1)};return(u,h)=>(Ss(),Ba("div",{ref_key:"element",ref:t,class:Ia(["animated-element",[r.value?"animate-in":"",i.animation,o.value,s.value?"hovering":"",a.value]]),style:Ns(n.value),onMouseenter:l,onMouseleave:c},[Lp(u.$slots,"default",{},void 0)],38))}},xt=wc(BS,[["__scopeId","data-v-8c65665a"]]),kS={__name:"ScrollToTop",setup(i){const e=ds(!1);let t=600;const r=()=>{e.value=window.scrollY>t},s=()=>{window.scrollTo({top:0,behavior:"smooth"})};bn(()=>{window.addEventListener("scroll",r),r()}),Na(()=>{window.removeEventListener("scroll",r)});const n=gs(()=>({opacity:e.value?"1":"0",transform:e.value?"translateY(0)":"translateY(20px)",pointerEvents:e.value?"auto":"none"}));return(a,o)=>(Ss(),Ba("button",{class:"scroll-to-top",style:Ns(n.value),onClick:s,"aria-label":"Scroll to top"},o[0]||(o[0]=[ce("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ce("path",{d:"M12 19V5M12 5L5 12M12 5L19 12",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1)]),4))}},zS=wc(kS,[["__scopeId","data-v-22cfbb22"]]),HS={class:"app"},VS={class:"container"},GS={class:"nav-container"},WS={class:"hero"},XS={class:"container"},jS={class:"hero-grid"},qS={class:"hero-text"},YS={class:"cta-container"},KS={class:"hero-model"},ZS={id:"features",class:"features"},JS={class:"container"},$S={class:"features-grid"},QS={id:"benefits",class:"benefits"},eb={class:"container"},tb={class:"benefits-content"},ib={class:"benefit-text"},rb={id:"subscribe",class:"subscribe"},sb={class:"container"},nb={class:"subscribe-content"},ab={class:"container"},ob={class:"footer-content"},lb={__name:"App",setup(i){const e=ds(0);let t=!1;const r=()=>{e.value=window.scrollY,t=!1},s=()=>{t||(window.requestAnimationFrame(r),t=!0)},n=(o,l)=>{o.preventDefault();const c=document.getElementById(l);if(c){const u=c.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:u-80,behavior:"smooth"})}};bn(()=>{window.addEventListener("scroll",s);const o={root:null,rootMargin:"0px",threshold:.1},l=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&(u.target.classList.add("fade-in"),l.unobserve(u.target))})},o);document.querySelectorAll(".animate").forEach(c=>{l.observe(c)})}),Na(()=>{window.removeEventListener("scroll",s)});const a=gs(()=>({backgroundColor:e.value>50?"rgba(255, 255, 255, 0.9)":"rgba(255, 255, 255, 0.7)",backdropFilter:`blur(${Math.min(8,e.value/10)}px)`,borderBottom:e.value>20?"1px solid var(--border-light)":"none",boxShadow:e.value>50?"0 4px 20px rgba(0, 0, 0, 0.05)":"none"}));return(o,l)=>(Ss(),Ba("div",HS,[Qe(zS),ce("header",{style:Ns(a.value)},[ce("div",VS,[ce("div",GS,[Qe(xt,{animation:"slide-right",delay:200,triggerOnScroll:!1},{default:_t(()=>l[4]||(l[4]=[ce("div",{class:"logo-container"},[ce("div",{class:"logo"},[ce("img",{src:Xm,alt:"Blues Boot"})]),ce("div",{class:"logo-text"},"Blues Boot")],-1)])),_:1}),Qe(xt,{animation:"slide-left",delay:400,triggerOnScroll:!1},{default:_t(()=>[ce("nav",null,[ce("a",{href:"#features",onClick:l[0]||(l[0]=c=>n(c,"features"))},"Features"),ce("a",{href:"#benefits",onClick:l[1]||(l[1]=c=>n(c,"benefits"))},"Benefits"),ce("a",{href:"#subscribe",onClick:l[2]||(l[2]=c=>n(c,"subscribe"))},"Subscribe")])]),_:1})])])],4),ce("main",null,[ce("section",WS,[ce("div",XS,[ce("div",jS,[ce("div",qS,[Qe(xt,{animation:"slide-right",delay:600},{default:_t(()=>l[5]||(l[5]=[ce("h1",null,[la("Inspiration to "),ce("span",{class:"accent"},"boot up"),la(" your blues")],-1)])),_:1}),Qe(xt,{animation:"slide-right",delay:800},{default:_t(()=>l[6]||(l[6]=[ce("p",{class:"subtitle"},"A curated weekly digest of tech news, hackathons, life stories, and career opportunities.",-1)])),_:1}),Qe(xt,{animation:"scale",delay:1e3},{default:_t(()=>[ce("div",YS,[ce("a",{href:"#subscribe",onClick:l[3]||(l[3]=c=>n(c,"subscribe")),class:"primary-button pulse-animation"},"Subscribe Now")])]),_:1})]),ce("div",KS,[Qe(FS)])])])]),ce("section",ZS,[ce("div",JS,[Qe(xt,{animation:"fade"},{default:_t(()=>l[7]||(l[7]=[ce("h2",{class:"section-title"},"What's included",-1)])),_:1}),ce("div",$S,[Qe(xt,{animation:"slide-up",delay:100,hover:"",hoverEffect:"lift"},{default:_t(()=>l[8]||(l[8]=[ce("div",{class:"feature-card"},[ce("div",{class:"icon"},[ce("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ce("path",{d:"M13 2L3 14H12L11 22L21 10H12L13 2Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),ce("h3",null,"Tech Updates"),ce("p",null,"Essential technology news and insights, curated for relevance and impact.")],-1)])),_:1}),Qe(xt,{animation:"slide-up",delay:300,hover:"",hoverEffect:"lift"},{default:_t(()=>l[9]||(l[9]=[ce("div",{class:"feature-card"},[ce("div",{class:"icon"},[ce("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ce("path",{d:"M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ce("path",{d:"M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),ce("h3",null,"Innovation Events"),ce("p",null,"Hackathons, meetups, and collaborative opportunities in the tech community.")],-1)])),_:1}),Qe(xt,{animation:"slide-up",delay:500,hover:"",hoverEffect:"lift"},{default:_t(()=>l[10]||(l[10]=[ce("div",{class:"feature-card"},[ce("div",{class:"icon"},[ce("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[ce("path",{d:"M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.65685 16.3431 8 18 8Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ce("path",{d:"M6 15C7.65685 15 9 13.6569 9 12C9 10.3431 7.65685 9 6 9C4.34315 9 3 10.3431 3 12C3 13.6569 4.34315 15 6 15Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ce("path",{d:"M18 22C19.6569 22 21 20.6569 21 19C21 17.3431 19.6569 16 18 16C16.3431 16 15 17.3431 15 19C15 20.6569 16.3431 22 18 22Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ce("path",{d:"M8.59 13.51L15.42 17.49",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),ce("path",{d:"M15.41 6.51L8.59 10.49",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})])]),ce("h3",null,"Career Insights"),ce("p",null,"Exclusive job opportunities and career development resources for tech professionals.")],-1)])),_:1})])])]),ce("section",QS,[ce("div",eb,[Qe(xt,{animation:"fade"},{default:_t(()=>l[11]||(l[11]=[ce("h2",{class:"section-title"},"Why subscribe",-1)])),_:1}),ce("div",tb,[ce("div",ib,[Qe(xt,{animation:"slide-right",delay:100},{default:_t(()=>l[12]||(l[12]=[ce("div",{class:"benefit-item"},[ce("span",{class:"benefit-number"},"01"),ce("div",null,[ce("h3",null,"Curated Content"),ce("p",null,"Carefully selected insights without the noise or clickbait.")])],-1)])),_:1}),Qe(xt,{animation:"slide-right",delay:300},{default:_t(()=>l[13]||(l[13]=[ce("div",{class:"benefit-item"},[ce("span",{class:"benefit-number"},"02"),ce("div",null,[ce("h3",null,"Time Efficiency"),ce("p",null,"All essential information delivered in one concise weekly digest.")])],-1)])),_:1}),Qe(xt,{animation:"slide-right",delay:500},{default:_t(()=>l[14]||(l[14]=[ce("div",{class:"benefit-item"},[ce("span",{class:"benefit-number"},"03"),ce("div",null,[ce("h3",null,"Growth Focused"),ce("p",null,"Content selected to inspire, educate, and advance your career.")])],-1)])),_:1})]),Qe(xt,{animation:"scale",hover:"",hoverEffect:"tilt"},{default:_t(()=>l[15]||(l[15]=[ce("div",{class:"benefit-quote"},[ce("blockquote",null,[la(' "Blues Boot delivers the perfect balance of tech insights and career opportunities each week." '),ce("cite",null,"— Sarah Chen, Senior Developer")])],-1)])),_:1})])])]),ce("section",rb,[ce("div",sb,[ce("div",nb,[Qe(xt,{animation:"fade"},{default:_t(()=>l[16]||(l[16]=[ce("h2",{class:"section-title"},"Stay in the loop",-1),ce("p",null,"Join our community of tech professionals and receive our weekly digest.",-1)])),_:1}),Qe(xt,{animation:"slide-up",delay:200,hover:"",hoverEffect:"glow"},{default:_t(()=>l[17]||(l[17]=[ce("form",{class:"subscribe-form"},[ce("div",{class:"form-input-container"},[ce("input",{type:"email",placeholder:"Your email address",required:""})]),ce("button",{type:"submit",class:"primary-button"},"Subscribe")],-1)])),_:1}),Qe(xt,{animation:"fade",delay:400},{default:_t(()=>l[18]||(l[18]=[ce("div",{class:"privacy-note"}," No spam. Unsubscribe anytime. ",-1)])),_:1})])])])]),ce("footer",null,[ce("div",ab,[ce("div",ob,[Qe(xt,{animation:"slide-up",delay:100},{default:_t(()=>l[19]||(l[19]=[ce("div",{class:"footer-logo"},[ce("img",{src:jm,alt:"Blues Boot"})],-1)])),_:1}),Qe(xt,{animation:"slide-up",delay:200},{default:_t(()=>l[20]||(l[20]=[ce("div",{class:"footer-links"},[ce("a",{href:"#"},"Privacy"),ce("a",{href:"#"},"Terms"),ce("a",{href:"#"},"Contact")],-1)])),_:1}),Qe(xt,{animation:"slide-up",delay:300},{default:_t(()=>l[21]||(l[21]=[ce("div",{class:"footer-copyright"}," © 2025 Blues Boot. All rights reserved. ",-1)])),_:1})])])])]))}},cb=Vm(lb);cb.mount("#app");
