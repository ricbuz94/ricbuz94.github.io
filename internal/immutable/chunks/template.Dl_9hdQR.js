import{ax as p,P as f,ay as h,M as m,x as l,h as d,i as s,v as g,o as E}from"./runtime.BTBKnETJ.js";function v(r){var t=document.createElement("template");return t.innerHTML=r,t.content}function a(r,t){var e=m;e.nodes_start===null&&(e.nodes_start=r,e.nodes_end=t)}function x(r,t){var e=(t&p)!==0,_=(t&h)!==0,n,u=!r.startsWith("<!>");return()=>{if(d)return a(s,null),s;n===void 0&&(n=v(u?r:"<!>"+r),e||(n=f(n)));var o=_?document.importNode(n,!0):n.cloneNode(!0);if(e){var c=f(o),i=o.lastChild;a(c,i)}else a(o,o);return o}}function y(r,t,e="svg"){var _=!r.startsWith("<!>"),n=`<${e}>${_?r:"<!>"+r}</${e}>`,u;return()=>{if(d)return a(s,null),s;if(!u){var o=v(n),c=f(o);u=f(c)}var i=u.cloneNode(!0);return a(i,i),i}}function M(r=""){if(!d){var t=l(r+"");return a(t,t),t}var e=s;return e.nodeType!==3&&(e.before(e=l()),g(e)),a(e,e),e}function N(){if(d)return a(s,null),s;var r=document.createDocumentFragment(),t=document.createComment(""),e=l();return r.append(t,e),a(t,e),r}function P(r,t){if(d){m.nodes_end=s,E();return}r!==null&&r.before(t)}export{P as a,a as b,N as c,M as d,y as n,x as t};