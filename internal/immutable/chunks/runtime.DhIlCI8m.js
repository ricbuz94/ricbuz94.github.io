import{l as tt}from"./index.BFqC5wTN.js";const Rn=!0,ct=!1;var Sn=Array.isArray,On=Array.from,Nn=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,Ut=Object.getOwnPropertyDescriptors,gn=Object.prototype,Dn=Array.prototype,Gt=Object.getPrototypeOf;function xn(t){return typeof t=="function"}const kn=()=>{};function Cn(t){return t()}function Vt(t){for(var n=0;n<t.length;n++)t[n]()}const A=2,vt=4,M=8,nt=16,y=32,$=64,N=128,U=256,p=512,R=1024,H=2048,C=4096,Y=8192,Kt=16384,pt=32768,Pn=65536,$t=1<<18,ht=1<<19,ut=Symbol("$state"),bn=Symbol("legacy props"),Ln=Symbol("");function dt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Fn(t,n){return t!==n}function Et(t){return!Wt(t,this.v)}function Zt(t){throw new Error("effect_in_teardown")}function zt(){throw new Error("effect_in_unowned_derived")}function Jt(t){throw new Error("effect_orphan")}function Xt(){throw new Error("effect_update_depth_exceeded")}function qn(){throw new Error("hydration_failed")}function Mn(t){throw new Error("props_invalid_value")}function Hn(){throw new Error("state_descriptors_fixed")}function Yn(){throw new Error("state_prototype_fixed")}function Qt(){throw new Error("state_unsafe_local_read")}function tn(){throw new Error("state_unsafe_mutation")}function rt(t){return{f:0,v:t,reactions:null,equals:dt,version:0}}function jn(t){return nn(rt(t))}function Bn(t,n=!1){var e;const r=rt(t);return n||(r.equals=Et),tt&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function nn(t){return u!==null&&u.f&A&&(E===null?dn([t]):E.push(t)),t}function Un(t,n){return u!==null&&at()&&u.f&(A|nt)&&(E===null||!E.includes(t))&&tn(),rn(t,n)}function rn(t,n){return t.equals(n)||(t.v=n,t.version=qt(),yt(t,R),at()&&l!==null&&l.f&p&&!(l.f&y)&&(_!==null&&_.includes(t)?(T(l,R),Z(l)):I===null?En([t]):I.push(t))),n}function yt(t,n){var r=t.reactions;if(r!==null)for(var e=at(),s=r.length,a=0;a<s;a++){var o=r[a],i=o.f;i&R||!e&&o===l||(T(o,n),i&(p|N)&&(i&A?yt(o,H):Z(o)))}}const Gn=1,Vn=2,Kn=4,$n=8,Wn=16,Zn=1,zn=2,Jn=4,Xn=8,Qn=16,tr=1,nr=2,rr=4,er=1,sr=2,en="[",sn="[!",an="]",Tt={},ar=Symbol();function wt(t){console.warn("hydration_mismatch")}let O=!1;function or(t){O=t}let d;function L(t){if(t===null)throw wt(),Tt;return d=t}function lr(){return L(g(d))}function ur(t){if(O){if(g(d)!==null)throw wt(),Tt;d=t}}function ir(t=1){if(O){for(var n=t,r=d;n--;)r=g(r);d=r}}function fr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===an){if(t===0)return n;t-=1}else(r===en||r===sn)&&(t+=1)}var e=g(n);n.remove(),n=e}}var it,on,At,mt;function _r(){if(it===void 0){it=window,on=document;var t=Element.prototype,n=Node.prototype;At=lt(n,"firstChild").get,mt=lt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function z(t=""){return document.createTextNode(t)}function J(t){return At.call(t)}function g(t){return mt.call(t)}function cr(t,n){if(!O)return J(t);var r=J(d);if(r===null)r=d.appendChild(z());else if(n&&r.nodeType!==3){var e=z();return r==null||r.before(e),L(e),e}return L(r),r}function vr(t,n){if(!O){var r=J(t);return r instanceof Comment&&r.data===""?g(r):r}return d}function pr(t,n=1,r=!1){let e=O?d:t;for(;n--;)e=g(e);if(!O)return e;var s=e.nodeType;if(r&&s!==3){var a=z();return e==null||e.before(a),L(a),a}return L(e),e}function hr(t){t.textContent=""}function ln(t){var n=A|R;l===null?n|=N:l.f|=ht;const r={children:null,ctx:f,deps:null,equals:dt,f:n,fn:t,reactions:null,v:null,version:0,parent:l};if(u!==null&&u.f&A){var e=u;(e.children??(e.children=[])).push(r)}return r}function dr(t){const n=ln(t);return n.equals=Et,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&A?et(e):b(e)}}}function Rt(t){var n,r=l;K(t.parent);try{It(t),n=Mt(t)}finally{K(r)}return n}function St(t){var n=Rt(t),r=(D||t.f&N)&&t.deps!==null?H:p;T(t,r),t.equals(n)||(t.v=n,t.version=qt())}function et(t){It(t),q(t,0),T(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ot(t){l===null&&u===null&&Jt(),u!==null&&u.f&N&&zt(),st&&Zt()}function un(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function P(t,n,r,e=!0){var s=(t&$)!==0,a=l,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=x;try{ft(!0),W(o),o.f|=Kt}catch(c){throw b(o),c}finally{ft(i)}}else n!==null&&Z(o);var w=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ht)===0;if(!w&&!s&&e&&(a!==null&&un(o,a),u!==null&&u.f&A)){var m=u;(m.children??(m.children=[])).push(o)}return o}function Er(t){const n=P(M,null,!1);return T(n,p),n.teardown=t,n}function yr(t){Ot();var n=l!==null&&(l.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:l,reaction:u})}else{var e=Nt(t);return e}}function Tr(t){return Ot(),fn(t)}function wr(t){const n=P($,t,!0);return()=>{b(n)}}function Nt(t){return P(vt,t,!1)}function fn(t){return P(M,t,!0)}function Ar(t){return _n(t)}function _n(t,n=0){return P(M|nt|n,t,!0)}function mr(t,n=!0){return P(M|y,t,!0,n)}function gt(t){var n=t.teardown;if(n!==null){const r=st,e=u;_t(!0),V(null);try{n.call(null)}finally{_t(r),V(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)et(n[r])}}function xt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function cn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&$t)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:g(e);e.remove(),e=a}r=!0}xt(t,n&&!r),Dt(t),q(t,0),T(t,Y);var o=t.transitions;if(o!==null)for(const w of o)w.stop();gt(t);var i=t.parent;i!==null&&i.first!==null&&kt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function kt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Ir(t,n){var r=[];Ct(t,r,!0),vn(r,()=>{b(t),n&&n()})}function vn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ct(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&pt)!==0||(e.f&y)!==0;Ct(e,n,a?r:!1),e=s}}}function Rr(t){Pt(t,!0)}function Pt(t,n){if(t.f&C){j(t)&&W(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&pt)!==0||(r.f&y)!==0;Pt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let G=!1,X=[];function bt(){G=!1;const t=X.slice();X=[],Vt(t)}function Sr(t){G||(G=!0,queueMicrotask(bt)),X.push(t)}function pn(){G&&bt()}const Lt=0,hn=1;let B=Lt,F=!1,x=!1,st=!1;function ft(t){x=t}function _t(t){st=t}let S=[],k=0;let u=null;function V(t){u=t}let l=null;function K(t){l=t}let E=null;function dn(t){E=t}let _=null,h=0,I=null;function En(t){I=t}let Ft=0,D=!1,f=null;function qt(){return++Ft}function at(){return!tt||f!==null&&f.l===null}function j(t){var o,i;var n=t.f;if(n&R)return!0;if(n&H){var r=t.deps,e=(n&N)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&St(a),e&&l!==null&&!D&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||T(t,p)}return!1}function yn(t,n,r){throw t}function Mt(t){var ot;var n=_,r=h,e=I,s=u,a=D,o=E,i=f,w=t.f;_=null,h=0,I=null,u=w&(y|$)?null:t,D=!x&&(w&N)!==0,E=null,f=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(q(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((ot=c[v]).reactions??(ot.reactions=[])).push(t)}else c!==null&&h<c.length&&(q(t,h),c.length=h);return m}finally{_=n,h=r,I=e,u=s,D=a,E=o,f=i}}function Tn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&A&&(_===null||!_.includes(n))&&(T(n,H),n.f&(N|U)||(n.f^=U),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Tn(t,r[e])}function W(t){var n=t.f;if(!(n&Y)){T(t,p);var r=l;l=t;try{n&nt?cn(t):xt(t),Dt(t),gt(t);var e=Mt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){yn(s)}finally{l=r}}}function Ht(){k>1e3&&(k=0,Xt()),k++}function Yt(t){var n=t.length;if(n!==0){Ht();var r=x;x=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];jt(s,a),wn(a)}}finally{x=r}}}function wn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|C))&&j(e)&&(W(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kt(e):e.fn=null))}}function An(){if(F=!1,k>1001)return;const t=S;S=[],Yt(t),F||(k=0)}function Z(t){B===Lt&&(F||(F=!0,queueMicrotask(An)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&($|y)){if(!(r&p))return;n.f^=p}}S.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,o=a&&(s&p)!==0;if(!o&&!(s&C))if(s&M){a?r.f^=p:j(r)&&W(r);var i=r.first;if(i!==null){r=i;continue}}else s&vt&&e.push(r);var w=r.next;if(w===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=w}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Bt(t){var n=B,r=S;try{Ht();const s=[];B=hn,S=s,F=!1,Yt(r);var e=t==null?void 0:t();return pn(),(S.length>0||s.length>0)&&Bt(),k=0,e}finally{B=n,S=r}}async function Or(){await Promise.resolve(),Bt()}function Nr(t){var i;var n=t.f,r=(n&A)!==0;if(r&&n&Y){var e=Rt(t);return et(t),e}if(u!==null){E!==null&&E.includes(t)&&Qt();var s=u.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),I!==null&&l!==null&&l.f&p&&!(l.f&y)&&I.includes(t)&&(T(l,R),Z(l))}else if(r&&t.deps===null){var a=t,o=a.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(a))&&(o.deriveds??(o.deriveds=[])).push(a)}return r&&(a=t,j(a)&&St(a)),t.v}function gr(t){const n=u;try{return u=null,t()}finally{u=n}}const mn=~(R|H|p);function T(t,n){t.f=t.f&mn|n}function Dr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},tt&&!n&&(f.l={s:null,u:null,r1:[],r2:rt(!1)})}function xr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=l,e=u;n.e=null;try{for(var s=0;s<o.length;s++){var a=o[s];K(a.effect),V(a.reaction),Nt(a.fn)}}finally{K(r),V(e)}}f=n.p,n.m=!0}return{}}function kr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ut in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ut in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Gt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ut(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{yr as $,Gn as A,Wn as B,Bn as C,rt as D,pt as E,Vn as F,rn as G,sn as H,C as I,Ct as J,hr as K,vn as L,l as M,u as N,Kn as O,J as P,an as Q,$n as R,g as S,Sr as T,ar as U,Vt as V,gr as W,f as X,Tr as Y,Nr as Z,kr as _,xr as a,Cn as a0,ln as a1,Gt as a2,Ln as a3,Ut as a4,$t as a5,en as a6,on as a7,dr as a8,_r as a9,Nn as aA,Er as aB,Rn as aC,jn as aD,Nt as aE,fn as aF,Bt as aG,Or as aH,xn as aI,rr as aJ,nt as aK,Kt as aL,tr as aM,nr as aN,Tt as aa,wr as ab,wt as ac,qn as ad,ut as ae,gn as af,Dn as ag,Yn as ah,Un as ai,lt as aj,Hn as ak,bn as al,Xn as am,zn as an,Mn as ao,y as ap,$ as aq,K as ar,Zn as as,Pn as at,Qn as au,Jn as av,Et as aw,er as ax,sr as ay,V as az,_n as b,cr as c,kn as d,mr as e,vr as f,b as g,O as h,d as i,at as j,Fn as k,Wt as l,Ir as m,ir as n,lr as o,Dr as p,Rr as q,ur as r,pr as s,Ar as t,fr as u,L as v,or as w,z as x,Sn as y,On as z};