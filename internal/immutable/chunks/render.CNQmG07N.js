import{a9 as g,P as D,a6 as I,S as L,aa as m,w as h,v as R,o as O,z as V,ab as H,x as M,e as Y,p as C,X as P,h as w,M as $,i as u,a as j,Q as k,ac as z,ad as K,K as Q}from"./runtime.BTBKnETJ.js";import{h as v,b as W,r as b}from"./store.ipF9wsh-.js";import{r as X}from"./svelte-head.Bmj6TDf6.js";import{b as q}from"./template.Dl_9hdQR.js";const B=["touchstart","touchmove"];function F(t){return B.includes(t)}let N=!0;function ee(t,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=n,t.nodeValue=n==null?"":n+"")}function G(t,e){return S(t,e)}function te(t,e){g(),e.intro=e.intro??!1;const n=e.target,_=w,l=u;try{for(var a=D(n);a&&(a.nodeType!==8||a.data!==I);)a=L(a);if(!a)throw m;h(!0),R(a),O();const d=S(t,{...e,anchor:a});if(u===null||u.nodeType!==8||u.data!==k)throw z(),m;return h(!1),d}catch(d){if(d===m)return e.recover===!1&&K(),g(),Q(n),h(!1),G(t,e);throw d}finally{h(_),R(l),X()}}const i=new Map;function S(t,{target:e,anchor:n,props:_={},events:l,context:a,intro:d=!0}){g();var p=new Set,y=o=>{for(var r=0;r<o.length;r++){var s=o[r];if(!p.has(s)){p.add(s);var f=F(s);e.addEventListener(s,v,{passive:f});var T=i.get(s);T===void 0?(document.addEventListener(s,v,{passive:f}),i.set(s,1)):i.set(s,T+1)}}};y(V(W)),b.add(y);var c=void 0,A=H(()=>{var o=n??e.appendChild(M());return Y(()=>{if(a){C({});var r=P;r.c=a}l&&(_.$$events=l),w&&q(o,null),N=d,c=t(o,_)||{},N=!0,w&&($.nodes_end=u),a&&j()}),()=>{var f;for(var r of p){e.removeEventListener(r,v);var s=i.get(r);--s===0?(document.removeEventListener(r,v),i.delete(r)):i.set(r,s)}b.delete(y),E.delete(c),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return E.set(c,A),c}let E=new WeakMap;function ae(t){const e=E.get(t);e&&e()}export{N as a,te as h,G as m,ee as s,ae as u};