import{aA as l,ar as _,N as w,M as B,T as q,aB as x,y as C,aC as E,d as y,C as M,ai as N,Z as O}from"./runtime.BTBKnETJ.js";import{s as W}from"./utils.C2PEBHem.js";function A(r){var e=w,i=B;l(null),_(null);try{return r()}finally{l(e),_(i)}}const D=new Set,P=new Set;function Z(r,e,i,a){function n(t){if(a.capture||j.call(e,t),!t.cancelBubble)return A(()=>i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?q(()=>{e.addEventListener(r,n,a)}):e.addEventListener(r,n,a),n}function G(r,e,i,a,n){var t={capture:a,passive:n},s=Z(r,e,i,t);(e===document.body||e===window||e===document)&&E(()=>{e.removeEventListener(r,s,t)})}function H(r){for(var e=0;e<r.length;e++)D.add(r[e]);for(var i of P)i(r)}function j(r){var g;var e=this,i=e.ownerDocument,a=r.type,n=((g=r.composedPath)==null?void 0:g.call(r))||[],t=n[0]||r.target,s=0,p=r.__root;if(p){var d=n.indexOf(p);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var v=n.indexOf(e);if(v===-1)return;d<=v&&(s=d)}if(t=n[s]||r.target,t!==e){x(r,"currentTarget",{configurable:!0,get(){return t||i}});var L=w,S=B;l(null),_(null);try{for(var u,h=[];t!==null;){var b=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+a];if(o!==void 0&&!t.disabled)if(C(o)){var[T,...k]=o;T.apply(t,[r,...k])}else o.call(t,r)}catch(c){u?h.push(c):u=c}if(r.cancelBubble||b===e||b===null)break;t=b}if(u){for(let c of h)queueMicrotask(()=>{throw c});throw u}}finally{r.__root=e,delete r.currentTarget,l(L),_(S)}}}let f=!1;function I(r,e,i){const a=i[e]??(i[e]={store:null,source:M(void 0),unsubscribe:y});if(a.store!==r)if(a.unsubscribe(),a.store=r??null,r==null)a.source.v=void 0,a.unsubscribe=y;else{var n=!0;a.unsubscribe=W(r,t=>{n?a.source.v=t:N(a.source,t)}),n=!1}return O(a.source)}function J(r,e){return r.set(e),e}function K(){const r={};return E(()=>{for(var e in r)r[e].unsubscribe()}),r}function Q(r){var e=f;try{return f=!1,[r(),f]}finally{f=e}}export{I as a,D as b,Q as c,H as d,G as e,J as f,j as h,P as r,K as s};