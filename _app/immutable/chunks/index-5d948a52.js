function v(){}const rt=t=>t;function st(t,e){for(const n in e)t[n]=e[n];return t}function J(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(J)}function K(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Dt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ot(t){return Object.keys(t).length===0}function lt(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Lt(t,e,n){t.$$.on_destroy.push(lt(e,n))}function zt(t,e,n,i){if(t){const r=Q(t,e,n,i);return t[0](r)}}function Q(t,e,n,i){return t[1]&&i?st(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let l=0;l<o;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function Ft(t,e,n,i,r,u){if(r){const o=Q(e,n,i,u);t.p(o,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function It(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Wt(t){return t==null?"":t}const U=typeof window!="undefined";let ct=U?()=>window.performance.now():()=>Date.now(),L=U?t=>requestAnimationFrame(t):v;const y=new Set;function V(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&L(V)}function ut(t){let e;return y.size===0&&L(V),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}let q=!1;function at(){q=!0}function ft(){q=!1}function _t(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function dt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const c=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:_t(1,r,_=>e[n[_]].claim_order,c))-1;i[s]=n[f]+1;const a=f+1;n[a]=s,r=Math.max(a,r)}const u=[],o=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(e[s-1]);l>=s;l--)o.push(e[l]);l--}for(;l>=0;l--)o.push(e[l]);u.reverse(),o.sort((s,c)=>s.claim_order-c.claim_order);for(let s=0,c=0;s<o.length;s++){for(;c<u.length&&o[s].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(o[s],f)}}function ht(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function mt(t){const e=Y("style");return pt(X(t),e),e.sheet}function pt(t,e){ht(t.head||t,e)}function yt(t,e){if(q){for(dt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){q&&!n?yt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function gt(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function Y(t){return document.createElement(t)}function xt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function z(t){return document.createTextNode(t)}function Kt(){return z(" ")}function Qt(){return z("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Vt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set?t[i]=e[i]:bt(t,i,e[i])}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,i,r=!1){wt(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const s=n(l);return s===void 0?t.splice(o,1):t[o]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function tt(t,e,n,i){return Z(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const l=r.attributes[o];n[l.name]||u.push(l.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Xt(t,e,n){return tt(t,e,n,Y)}function Yt(t,e,n){return tt(t,e,n,xt)}function vt(t,e){return Z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>z(e),!0)}function Zt(t){return vt(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ne(t,e,n){t.classList[n?"add":"remove"](e)}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ie(t,e=document.body){return Array.from(e.querySelectorAll(t))}const S=new Map;let O=0;function kt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:mt(e),rules:{}};return S.set(t,n),n}function Nt(t,e,n,i,r,u,o,l=0){const s=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=s){const k=e+(n-e)*u(m);c+=m*100+`%{${o(k,1-k)}}
`}const f=c+`100% {${o(n,1-n)}}
}`,a=`__svelte_${kt(f)}_${l}`,_=X(t),{stylesheet:h,rules:d}=S.get(_)||At(_,t);d[a]||(d[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${a} ${i}ms linear ${r}ms 1 both`,O+=1,a}function H(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),O-=r,O||jt())}function jt(){L(()=>{O||(S.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),S.clear())})}let w;function $(t){w=t}function M(){if(!w)throw new Error("Function called outside component initialization");return w}function re(t){M().$$.on_mount.push(t)}function se(t){M().$$.after_update.push(t)}function oe(t,e){return M().$$.context.set(t,e),e}function le(t){return M().$$.context.get(t)}const b=[],I=[],j=[],W=[],et=Promise.resolve();let D=!1;function nt(){D||(D=!0,et.then(it))}function ce(){return nt(),et}function T(t){j.push(t)}const R=new Set;let N=0;function it(){const t=w;do{for(;N<b.length;){const e=b[N];N++,$(e),Ct(e.$$)}for($(null),b.length=0,N=0;I.length;)I.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];R.has(n)||(R.add(n),n())}j.length=0}while(b.length);for(;W.length;)W.pop()();D=!1,R.clear(),$(t)}function Ct(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}let x;function St(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function G(t,e,n){t.dispatchEvent(Et(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function ue(){p={r:0,c:[],p}}function ae(){p.r||E(p.c),p=p.p}function Ot(t,e){t&&t.i&&(C.delete(t),t.i(e))}function fe(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const Tt={duration:0};function _e(t,e,n){let i=e(t,n),r=!1,u,o,l=0;function s(){u&&H(t,u)}function c(){const{delay:a=0,duration:_=300,easing:h=rt,tick:d=v,css:g}=i||Tt;g&&(u=Nt(t,0,1,_,a,h,g,l++)),d(0,1);const m=ct()+a,k=m+_;o&&o.abort(),r=!0,T(()=>G(t,!0,"start")),o=ut(P=>{if(r){if(P>=k)return d(1,0),G(t,!0,"end"),s(),r=!1;if(P>=m){const B=h((P-m)/_);d(B,1-B)}}return r})}let f=!1;return{start(){f||(f=!0,H(t),K(i)?(i=i(),St().then(c)):c())},invalidate(){f=!1},end(){r&&(s(),r=!1)}}}const de=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function he(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],l=e[u];if(l){for(const s in o)s in l||(i[s]=1);for(const s in l)r[s]||(n[s]=l[s],r[s]=1);t[u]=l}else for(const s in o)r[s]=1}for(const o in i)o in n||(n[o]=void 0);return n}function me(t){return typeof t=="object"&&t!==null?t:{}}function pe(t){t&&t.c()}function ye(t,e){t&&t.l(e)}function qt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:l}=t.$$;r&&r.m(e,n),i||T(()=>{const s=u.map(J).filter(K);o?o.push(...s):E(s),t.$$.on_mount=[]}),l.forEach(T)}function Mt(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(b.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ge(t,e,n,i,r,u,o,l=[-1]){const s=w;$(t);const c=t.$$={fragment:null,ctx:null,props:u,update:v,not_equal:r,bound:F(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:F(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...h)=>{const d=h.length?h[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=d)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](d),f&&Pt(t,a)),_}):[],c.update(),f=!0,E(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){at();const a=$t(e.target);c.fragment&&c.fragment.l(a),a.forEach(gt)}else c.fragment&&c.fragment.c();e.intro&&Ot(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),ft(),it()}$(s)}class xe{$destroy(){Mt(this,1),this.$destroy=v}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Dt as $,me as A,Mt as B,st as C,ce as D,v as E,lt as F,E as G,K as H,le as I,xt as J,Yt as K,yt as L,Ut as M,zt as N,Vt as O,ne as P,Ft as Q,Ht as R,xe as S,Bt as T,Lt as U,It as V,T as W,_e as X,Wt as Y,ie as Z,de as _,$t as a,Jt as a0,bt as b,Xt as c,gt as d,Y as e,ee as f,Gt as g,vt as h,ge as i,te as j,Kt as k,Qt as l,Zt as m,ue as n,fe as o,ae as p,Ot as q,oe as r,Rt as s,z as t,se as u,re as v,pe as w,ye as x,qt as y,he as z};