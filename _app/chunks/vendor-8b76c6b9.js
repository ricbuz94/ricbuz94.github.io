function h(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return t()}function T(){return Object.create(null)}function m(t){t.forEach(M)}function I(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let g;function ut(t,n){return g||(g=document.createElement("a")),g.href=n,t===g.href}function G(t){return Object.keys(t).length===0}function ft(t,n,e,i){if(t){const c=z(t,n,e,i);return t[0](c)}}function z(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function st(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const f=[],l=Math.max(n.dirty.length,c.length);for(let o=0;o<l;o+=1)f[o]=n.dirty[o]|c[o];return f}return n.dirty|c}return n.dirty}function at(t,n,e,i,c,f){if(c){const l=z(n,e,i,f);t.p(l,c)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function _t(t){return t==null?"":t}let b=!1;function J(){b=!0}function K(){b=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:Q(1,c,y=>n[e[y]].claim_order,u))-1;i[r]=e[a]+1;const s=a+1;e[s]=r,c=Math.max(s,c)}const f=[],l=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(f.push(n[r-1]);o>=r;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);f.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<f.length&&l[r].claim_order>=f[u].claim_order;)u++;const a=u<f.length?f[u]:null;t.insertBefore(l[r],a)}}function W(t,n){if(b){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ht(t,n,e){b&&!e?W(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function U(t){t.parentNode.removeChild(t)}function mt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function V(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function pt(){return S(" ")}function yt(){return S("")}function gt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Y(t){return Array.from(t.childNodes)}function Z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,c=!1){Z(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const r=e(o);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function L(t,n,e,i){return B(t,c=>c.nodeName===n,c=>{const f=[];for(let l=0;l<c.attributes.length;l++){const o=c.attributes[l];e[o.name]||f.push(o.name)}f.forEach(l=>c.removeAttribute(l))},()=>i(n))}function xt(t,n,e){return L(t,n,e,V)}function wt(t,n,e){return L(t,n,e,X)}function tt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function $t(t){return tt(t," ")}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n=document.body){return Array.from(n.querySelectorAll(t))}let x;function w(t){x=t}function k(){if(!x)throw new Error("Function called outside component initialization");return x}function kt(t){k().$$.on_mount.push(t)}function At(t){k().$$.after_update.push(t)}function Nt(t,n){k().$$.context.set(t,n)}const p=[],O=[],$=[],D=[],nt=Promise.resolve();let A=!1;function et(){A||(A=!0,nt.then(F))}function N(t){$.push(t)}let j=!1;const q=new Set;function F(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];w(n),it(n.$$)}for(w(null),p.length=0;O.length;)O.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];q.has(n)||(q.add(n),n())}$.length=0}while(p.length);for(;D.length;)D.pop()();A=!1,j=!1,q.clear()}}function it(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const E=new Set;let d;function jt(){d={r:0,c:[],p:d}}function qt(){d.r||m(d.c),d=d.p}function rt(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Ct(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),d.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}const vt=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function Mt(t,n){const e={},i={},c={$$scope:1};let f=t.length;for(;f--;){const l=t[f],o=n[f];if(o){for(const r in l)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[f]=o}else for(const r in l)c[r]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Tt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Bt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:c,on_mount:f,on_destroy:l,after_update:o}=t.$$;c&&c.m(n,e),i||N(()=>{const r=f.map(M).filter(I);l?l.push(...r):m(r),t.$$.on_mount=[]}),o.forEach(N)}function lt(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(p.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Lt(t,n,e,i,c,f,l,o=[-1]){const r=x;w(t);const u=t.$$={fragment:null,ctx:null,props:f,update:h,not_equal:c,bound:T(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:T(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};l&&l(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(s,y,...C)=>{const v=C.length?C[0]:y;return u.ctx&&c(u.ctx[s],u.ctx[s]=v)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](v),a&&ot(t,s)),y}):[],u.update(),a=!0,m(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const s=Y(n.target);u.fragment&&u.fragment.l(s),s.forEach(U)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),F()}w(r)}class Ot{$destroy(){lt(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!G(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Dt(t,n=h){let e;const i=new Set;function c(o){if(P(t,o)&&(t=o,e)){const r=!_.length;for(const u of i)u[1](),_.push(u,t);if(r){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function f(o){c(o(t))}function l(o,r=h){const u=[o,r];return i.add(u),i.size===1&&(e=n(c)||h),o(t),()=>{i.delete(u),i.size===0&&(e(),e=null)}}return{set:c,update:f,subscribe:l}}export{kt as A,H as B,Dt as C,ft as D,at as E,dt as F,st as G,W as H,h as I,X as J,wt as K,gt as L,I as M,_t as N,mt as O,St as P,ut as Q,vt as R,Ot as S,Y as a,bt as b,xt as c,U as d,V as e,ht as f,tt as g,Et as h,Lt as i,zt as j,pt as k,yt as l,Bt as m,$t as n,ct as o,Mt as p,Tt as q,jt as r,P as s,S as t,Ct as u,lt as v,qt as w,rt as x,Nt as y,At as z};