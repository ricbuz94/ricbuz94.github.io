import{S as J,i as O,s as M,k as y,a as j,q as A,l as E,m as w,h as m,c as q,r as H,n as g,p as ee,b as D,H as $,u as T,E as C,a2 as fe,D as te,y as R,z as F,A as G,g as V,v as K,f as Q,d as S,B as X,$ as ue,T as W,e as L,a3 as _e,a4 as he}from"../chunks/index.33d0ab84.js";import{I as pe,$ as de,c as me,a as ve}from"../chunks/Icon.b832f581.js";function le(i,e,s){const l=i.slice();return l[1]=e[s],l}function se(i){let e,s,l=i[1]+"",n,c;return{c(){e=y("p"),s=A("#"),n=A(l),this.h()},l(o){e=E(o,"P",{class:!0});var t=w(e);s=H(t,"#"),n=H(t,l),t.forEach(m),this.h()},h(){g(e,"class",c=te(`tag ${i[1]}`)+" svelte-1pf611a")},m(o,t){D(o,e,t),$(e,s),$(e,n)},p(o,t){t&1&&l!==(l=o[1]+"")&&T(n,l),t&1&&c!==(c=te(`tag ${o[1]}`)+" svelte-1pf611a")&&g(e,"class",c)},d(o){o&&m(e)}}}function ge(i){let e,s,l,n,c,o,t,a=i[0].title+"",r,k,b,f=i[0].description+"",P,z,I,u,v=i[0].tags,_=[];for(let d=0;d<v.length;d+=1)_[d]=se(le(i,v,d));return{c(){e=y("li"),s=y("a"),l=y("div"),n=y("div"),c=j(),o=y("div"),t=y("h4"),r=A(a),k=j(),b=y("p"),P=A(f),z=j(),I=y("div");for(let d=0;d<_.length;d+=1)_[d].c();this.h()},l(d){e=E(d,"LI",{class:!0});var h=w(e);s=E(h,"A",{rel:!0,href:!0,target:!0,class:!0});var p=w(s);l=E(p,"DIV",{class:!0});var N=w(l);n=E(N,"DIV",{class:!0,style:!0}),w(n).forEach(m),N.forEach(m),c=q(p),o=E(p,"DIV",{class:!0});var B=w(o);t=E(B,"H4",{class:!0});var Y=w(t);r=H(Y,a),Y.forEach(m),k=q(B),b=E(B,"P",{class:!0});var Z=w(b);P=H(Z,f),Z.forEach(m),z=q(B),I=E(B,"DIV",{class:!0});var x=w(I);for(let U=0;U<_.length;U+=1)_[U].l(x);x.forEach(m),B.forEach(m),p.forEach(m),h.forEach(m),this.h()},h(){g(n,"class","image svelte-1pf611a"),ee(n,"background-image","linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.1)),url('"+i[0].image+"')"),g(l,"class","image-container svelte-1pf611a"),g(t,"class","svelte-1pf611a"),g(b,"class","description svelte-1pf611a"),g(I,"class","row svelte-1pf611a"),g(o,"class","container svelte-1pf611a"),g(s,"rel","noreferrer"),g(s,"href",u=i[0].url),g(s,"target","_blank"),g(s,"class","svelte-1pf611a"),g(e,"class","svelte-1pf611a")},m(d,h){D(d,e,h),$(e,s),$(s,l),$(l,n),$(s,c),$(s,o),$(o,t),$(t,r),$(o,k),$(o,b),$(b,P),$(o,z),$(o,I);for(let p=0;p<_.length;p+=1)_[p]&&_[p].m(I,null)},p(d,[h]){if(h&1&&ee(n,"background-image","linear-gradient(rgba(0, 0, 0, 0.05),rgba(0, 0, 0, 0.1)),url('"+d[0].image+"')"),h&1&&a!==(a=d[0].title+"")&&T(r,a),h&1&&f!==(f=d[0].description+"")&&T(P,f),h&1){v=d[0].tags;let p;for(p=0;p<v.length;p+=1){const N=le(d,v,p);_[p]?_[p].p(N,h):(_[p]=se(N),_[p].c(),_[p].m(I,null))}for(;p<_.length;p+=1)_[p].d(1);_.length=v.length}h&1&&u!==(u=d[0].url)&&g(s,"href",u)},i:C,o:C,d(d){d&&m(e),fe(_,d)}}}function ke(i,e,s){let{post:l}=e;return i.$$set=n=>{"post"in n&&s(0,l=n.post)},[l]}class $e extends J{constructor(e){super(),O(this,e,ke,ge,M,{post:0})}}function ae(i,e,s){const l=i.slice();return l[1]=e[s],l}function re(i){let e,s;return e=new $e({props:{post:i[1]}}),{c(){R(e.$$.fragment)},l(l){F(e.$$.fragment,l)},m(l,n){G(e,l,n),s=!0},p(l,n){const c={};n&1&&(c.post=l[1]),e.$set(c)},i(l){s||(V(e.$$.fragment,l),s=!0)},o(l){S(e.$$.fragment,l),s=!1},d(l){X(e,l)}}}function be(i){var z,I;let e,s,l,n,c,o=((z=i[0])==null?void 0:z.title)+"",t,a,r,k;l=new pe({props:{name:"corner-down-right",width:3,size:16,isThemed:!0}});let b=(I=i[0])==null?void 0:I.posts,f=[];for(let u=0;u<b.length;u+=1)f[u]=re(ae(i,b,u));const P=u=>S(f[u],1,1,()=>{f[u]=null});return{c(){e=y("li"),s=y("div"),R(l.$$.fragment),n=j(),c=y("h5"),t=A(o),a=j(),r=y("ul");for(let u=0;u<f.length;u+=1)f[u].c();this.h()},l(u){e=E(u,"LI",{class:!0});var v=w(e);s=E(v,"DIV",{class:!0});var _=w(s);F(l.$$.fragment,_),n=q(_),c=E(_,"H5",{class:!0});var d=w(c);t=H(d,o),d.forEach(m),_.forEach(m),a=q(v),r=E(v,"UL",{class:!0});var h=w(r);for(let p=0;p<f.length;p+=1)f[p].l(h);h.forEach(m),v.forEach(m),this.h()},h(){g(c,"class","svelte-l8pb0c"),g(s,"class","svelte-l8pb0c"),g(r,"class","svelte-l8pb0c"),g(e,"class","svelte-l8pb0c")},m(u,v){D(u,e,v),$(e,s),G(l,s,null),$(s,n),$(s,c),$(c,t),$(e,a),$(e,r);for(let _=0;_<f.length;_+=1)f[_]&&f[_].m(r,null);k=!0},p(u,[v]){var _,d;if((!k||v&1)&&o!==(o=((_=u[0])==null?void 0:_.title)+"")&&T(t,o),v&1){b=(d=u[0])==null?void 0:d.posts;let h;for(h=0;h<b.length;h+=1){const p=ae(u,b,h);f[h]?(f[h].p(p,v),V(f[h],1)):(f[h]=re(p),f[h].c(),V(f[h],1),f[h].m(r,null))}for(K(),h=b.length;h<f.length;h+=1)P(h);Q()}},i(u){if(!k){V(l.$$.fragment,u);for(let v=0;v<b.length;v+=1)V(f[v]);k=!0}},o(u){S(l.$$.fragment,u),f=f.filter(Boolean);for(let v=0;v<f.length;v+=1)S(f[v]);k=!1},d(u){u&&m(e),X(l),fe(f,u)}}}function ye(i,e,s){let{section:l}=e;return i.$$set=n=>{"section"in n&&s(0,l=n.section)},[l]}class Ee extends J{constructor(e){super(),O(this,e,ye,be,M,{section:0})}}function ne(i,e,s){const l=i.slice();return l[6]=e[s],l[8]=s,l}function oe(i){let e,s,l="~",n,c;return{c(){e=y("div"),s=y("p"),n=A(l),c=j(),this.h()},l(o){e=E(o,"DIV",{id:!0,class:!0});var t=w(e);s=E(t,"P",{class:!0});var a=w(s);n=H(a,l),a.forEach(m),c=q(t),t.forEach(m),this.h()},h(){g(s,"class","svelte-1yq2j2y"),g(e,"id","marker"),g(e,"class","svelte-1yq2j2y")},m(o,t){D(o,e,t),$(e,s),$(s,n),$(e,c)},d(o){o&&m(e)}}}function ie(i,e){var a;let s,l,n,c,o;l=new Ee({props:{section:e[6]}});let t=e[8]!==((a=e[1])==null?void 0:a.length)-1&&oe();return{key:i,first:null,c(){s=L(),R(l.$$.fragment),n=j(),t&&t.c(),c=L(),this.h()},l(r){s=L(),F(l.$$.fragment,r),n=q(r),t&&t.l(r),c=L(),this.h()},h(){this.first=s},m(r,k){D(r,s,k),G(l,r,k),D(r,n,k),t&&t.m(r,k),D(r,c,k),o=!0},p(r,k){var f;e=r;const b={};k&2&&(b.section=e[6]),l.$set(b),e[8]!==((f=e[1])==null?void 0:f.length)-1?t||(t=oe(),t.c(),t.m(c.parentNode,c)):t&&(t.d(1),t=null)},i(r){o||(V(l.$$.fragment,r),o=!0)},o(r){S(l.$$.fragment,r),o=!1},d(r){r&&m(s),X(l,r),r&&m(n),t&&t.d(r),r&&m(c)}}}function ce(i){let e=[],s=new Map,l,n,c=i[1];const o=t=>{var a;return(a=t[6])==null?void 0:a.id};for(let t=0;t<c.length;t+=1){let a=ne(i,c,t),r=o(a);s.set(r,e[t]=ie(r,a))}return{c(){for(let t=0;t<e.length;t+=1)e[t].c();l=L()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);l=L()},m(t,a){for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,a);D(t,l,a),n=!0},p(t,a){a&2&&(c=t[1],K(),e=_e(e,a,o,1,t,c,s,l.parentNode,he,ie,l,ne),Q())},i(t){if(!n){for(let a=0;a<c.length;a+=1)V(e[a]);n=!0}},o(t){for(let a=0;a<e.length;a+=1)S(e[a]);n=!1},d(t){for(let a=0;a<e.length;a+=1)e[a].d(t);t&&m(l)}}}function we(i){let e,s,l,n,c=i[0],o;document.title=e=i[2]("layout.nav.works");let t=ce(i);return{c(){s=y("meta"),l=j(),n=y("ul"),t.c(),this.h()},l(a){const r=ue("svelte-st86id",document.head);s=E(r,"META",{name:!0,content:!0}),r.forEach(m),l=q(a),n=E(a,"UL",{id:!0,class:!0});var k=w(n);t.l(k),k.forEach(m),this.h()},h(){g(s,"name","description"),g(s,"content","Works page of Riccardo Buzzolo. Browse my old and current projects and works."),g(n,"id","sections"),g(n,"class","svelte-1yq2j2y")},m(a,r){$(document.head,s),D(a,l,r),D(a,n,r),t.m(n,null),o=!0},p(a,[r]){(!o||r&4)&&e!==(e=a[2]("layout.nav.works"))&&(document.title=e),r&1&&M(c,c=a[0])?(K(),S(t,1,1,C),Q(),t=ce(a),t.c(),V(t,1),t.m(n,null)):t.p(a,r)},i(a){o||(V(t),o=!0)},o(a){S(t),o=!1},d(a){m(s),a&&m(l),a&&m(n),t.d(a)}}}function Ie(i,e,s){let l,n,c,o,t;W(i,de,r=>s(0,c=r)),W(i,me,r=>s(5,o=r)),W(i,ve,r=>s(2,t=r));let{data:a}=e;return i.$$set=r=>{"data"in r&&s(3,a=r.data)},i.$$.update=()=>{i.$$.dirty&33&&s(4,l=o("works",c)),i.$$.dirty&24&&s(1,n=a==null?void 0:a.sections.map(({id:r,posts:k},b)=>({id:r,title:l[b].header,posts:k==null?void 0:k.map((f,P)=>({...f,title:l[b].list[P].title,description:l[b].list[P].description}))})))},[c,n,t,a,l,o]}class Ve extends J{constructor(e){super(),O(this,e,Ie,we,M,{data:3})}}export{Ve as component};