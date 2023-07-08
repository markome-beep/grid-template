import{s as J,n as L,r as K}from"../chunks/scheduler.e108d1fd.js";import{S as Q,i as W,g as m,s as k,h as p,j as U,y as E,c as B,f as T,k as _,a as D,x as c,z as N,A as G,m as X,n as Y,B as z,o as Z}from"../chunks/index.0278e11c.js";function A(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function S(e,t,o){const l=e.slice();return l[8]=t[o],l[10]=o,l}function P(e,t,o){const l=e.slice();return l[11]=t[o],l[13]=o,l}function j(e){let t,o=e[0][e[10]][e[13]].value+"",l,a,n;function v(){return e[7](e[10],e[13])}return{c(){t=m("button"),l=X(o),this.h()},l(s){t=p(s,"BUTTON",{class:!0});var u=U(t);l=Y(u,o),u.forEach(T),this.h()},h(){_(t,"class","elem svelte-zdd2qd"),z(t,"connected-left",e[13]>0&&e[0][e[10]][e[13]].value===e[0][e[10]][e[13]-1].value),z(t,"connected-right",e[13]<e[2]-1&&e[0][e[10]][e[13]].value===e[0][e[10]][e[13]+1].value),z(t,"connected-top",e[10]>0&&e[0][e[10]][e[13]].value===e[0][e[10]-1][e[13]].value),z(t,"connected-bottom",e[10]<e[1]-1&&e[0][e[10]][e[13]].value===e[0][e[10]+1][e[13]].value)},m(s,u){D(s,t,u),c(t,l),a||(n=N(t,"click",v),a=!0)},p(s,u){e=s,u&1&&o!==(o=e[0][e[10]][e[13]].value+"")&&Z(l,o),u&1&&z(t,"connected-left",e[13]>0&&e[0][e[10]][e[13]].value===e[0][e[10]][e[13]-1].value),u&5&&z(t,"connected-right",e[13]<e[2]-1&&e[0][e[10]][e[13]].value===e[0][e[10]][e[13]+1].value),u&1&&z(t,"connected-top",e[10]>0&&e[0][e[10]][e[13]].value===e[0][e[10]-1][e[13]].value),u&3&&z(t,"connected-bottom",e[10]<e[1]-1&&e[0][e[10]][e[13]].value===e[0][e[10]+1][e[13]].value)},d(s){s&&T(t),a=!1,n()}}}function F(e){let t,o,l=A(e[8]),a=[];for(let n=0;n<l.length;n+=1)a[n]=j(P(e,l,n));return{c(){t=m("div");for(let n=0;n<a.length;n+=1)a[n].c();o=k(),this.h()},l(n){t=p(n,"DIV",{class:!0});var v=U(t);for(let s=0;s<a.length;s+=1)a[s].l(v);o=B(v),v.forEach(T),this.h()},h(){_(t,"class","row svelte-zdd2qd")},m(n,v){D(n,t,v);for(let s=0;s<a.length;s+=1)a[s]&&a[s].m(t,null);c(t,o)},p(n,v){if(v&7){l=A(n[8]);let s;for(s=0;s<l.length;s+=1){const u=P(n,l,s);a[s]?a[s].p(u,v):(a[s]=j(u),a[s].c(),a[s].m(t,o))}for(;s<a.length;s+=1)a[s].d(1);a.length=l.length}},d(n){n&&T(t),G(a,n)}}}function $(e){let t,o,l='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="svelte-zdd2qd"><path d="M192 0c-41.8 0-77.4 26.7-90.5 64H64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H282.5C269.4 26.7 233.8 0 192 0zm0 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM112 192H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg>',a,n,v="-",s,u,O="+",H,r,g="+",V,b,I="-",M,C,y,R,q=A(e[0]),h=[];for(let i=0;i<q.length;i+=1)h[i]=F(S(e,q,i));return{c(){t=m("div"),o=m("button"),o.innerHTML=l,a=k(),n=m("button"),n.textContent=v,s=k(),u=m("button"),u.textContent=O,H=k(),r=m("button"),r.textContent=g,V=k(),b=m("button"),b.textContent=I,M=k(),C=m("div");for(let i=0;i<h.length;i+=1)h[i].c();this.h()},l(i){t=p(i,"DIV",{id:!0,class:!0});var f=U(t);o=p(f,"BUTTON",{id:!0,class:!0,["data-svelte-h"]:!0}),E(o)!=="svelte-uz3qcx"&&(o.innerHTML=l),a=B(f),n=p(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),E(n)!=="svelte-xszhah"&&(n.textContent=v),s=B(f),u=p(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),E(u)!=="svelte-1o5y6gb"&&(u.textContent=O),H=B(f),r=p(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),E(r)!=="svelte-f5k0rn"&&(r.textContent=g),V=B(f),b=p(f,"BUTTON",{class:!0,["data-svelte-h"]:!0}),E(b)!=="svelte-1vrm9d1"&&(b.textContent=I),M=B(f),C=p(f,"DIV",{id:!0,class:!0});var d=U(C);for(let w=0;w<h.length;w+=1)h[w].l(d);d.forEach(T),f.forEach(T),this.h()},h(){_(o,"id","copy"),_(o,"class","svelte-zdd2qd"),_(n,"class","row-btn subtract svelte-zdd2qd"),_(u,"class","row-btn add svelte-zdd2qd"),_(r,"class","col-btn add svelte-zdd2qd"),_(b,"class","col-btn subtract svelte-zdd2qd"),_(C,"id","grid"),_(C,"class","svelte-zdd2qd"),_(t,"id","interface"),_(t,"class","svelte-zdd2qd")},m(i,f){D(i,t,f),c(t,o),c(t,a),c(t,n),c(t,s),c(t,u),c(t,H),c(t,r),c(t,V),c(t,b),c(t,M),c(t,C);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(C,null);y||(R=[N(n,"click",e[4]),N(u,"click",e[3]),N(r,"click",e[5]),N(b,"click",e[6])],y=!0)},p(i,[f]){if(f&7){q=A(i[0]);let d;for(d=0;d<q.length;d+=1){const w=S(i,q,d);h[d]?h[d].p(w,f):(h[d]=F(w),h[d].c(),h[d].m(C,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=q.length}},i:L,o:L,d(i){i&&T(t),G(h,i),y=!1,K(R)}}}function x(e,t,o){let l=Array(4).fill(0).map(r=>Array(5).fill(0).map(g=>({value:0}))),a,n;function v(){o(0,l=[...l,Array(n).fill(0).map(r=>({value:0}))])}function s(){a<=1||o(0,l=[...l.slice(0,-1)])}function u(){l.forEach((r,g)=>o(0,l[g]=[...r,{value:0}],l))}function O(){n<=1||l.forEach((r,g)=>o(0,l[g]=[...r.slice(0,-1)],l))}const H=(r,g)=>o(0,l[r][g].value=o(0,++l[r][g].value,l)%4,l);return e.$$.update=()=>{e.$$.dirty&1&&o(1,a=l.length),e.$$.dirty&1&&o(2,n=l[0].length)},[l,a,n,v,s,u,O,H]}class le extends Q{constructor(t){super(),W(this,t,x,$,J,{})}}export{le as component};
