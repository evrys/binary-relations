import{S as ct,i as at,s as Ie,a as q,k as w,H as le,e as J,q as N,L as _t,h,c as B,l as E,m,I as ne,r as T,n as u,p as Ee,M as Pe,b as j,F as f,u as K,A as pe,J as Q,N as ut,K as Ce,O as dt,f as ht,t as ft,v as vt,w as gt,x as mt,y as pt}from"../../../chunks/index-37015614.js";import{a as bt,l as Te,_ as He}from"../../../chunks/index-e852a150.js";function me(s,e){const t=Object.keys(e),l=Object.keys(e[t[0]]);if(s==="functional")return t.every(n=>l.filter(r=>e[n][r]).length<=1);if(s==="injective")return l.every(n=>t.filter(r=>e[r][n]).length<=1);if(s==="total")return t.every(n=>l.some(r=>e[n][r]));if(s==="surjective")return l.every(n=>t.some(r=>e[r][n]));if(s==="bijective")return me("functional",e)&&me("injective",e)&&me("total",e)&&me("surjective",e);throw new Error(`Unknown check: ${s}`)}function kt(s){const e=s-1;return e*e*e+1}const Le=["#FFFF04","#EA4C89","#892AB8","#4AF2FD"];class yt{constructor(e,t){this.x=e,this.y=t,this.vx=(Math.random()-.5)*30,this.vy=-Math.random()*30,this.r=Math.random()*3+3,this.lifetime=Math.random()*500+300,this.birth=Date.now(),this.color=Le[Math.floor(Math.random()*Le.length)]}update(){this.x+=this.vx,this.y+=this.vy,this.vx*=.9,this.vy*=.9,this.vy+=.5}}class wt{constructor(e){this.canvas=e,this.running=!1,this.particles=[],this.ctx=e.getContext("2d")}loop(){const{canvas:e,ctx:t,particles:l}=this;t.clearRect(0,0,e.width,e.height);for(const n of l){n.update(),t.beginPath(),t.fillStyle=n.color;const r=bt.clamp((Date.now()-n.birth)/n.lifetime,0,1);t.globalAlpha=1-kt(r),t.arc(n.x,n.y,n.r,0,Math.PI*2),t.fill()}t.globalAlpha=1,this.particles=l.filter(n=>Date.now()-n.birth<=n.lifetime),this.particles.length?requestAnimationFrame(()=>this.loop()):(this.running=!1,t.clearRect(0,0,e.width,e.height))}spawnAt(e){const t=e.getBoundingClientRect();for(let l=0;l<50;l++)this.particles.push(new yt(t.left+t.width/2,t.top+t.height/2));this.running||(this.running=!0,this.loop())}}class Et{constructor(){this.canvas=document.createElement("canvas"),this.canvas.id="effectCanvas",document.body.appendChild(this.canvas),window.addEventListener("resize",this.resize.bind(this)),this.resize(),this.canvas.style.position="fixed",this.canvas.style.left="0px",this.canvas.style.top="0px",this.canvas.style.width="100vw",this.canvas.style.height="100vh",this.canvas.style.pointerEvents="none",this.canvas.style.zIndex="1",this.confetti=new wt(this.canvas)}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}}function Se(s,e,t){const l=s.slice();return l[25]=e[t].check,l[26]=e[t].applies,l[28]=t,l}function We(s,e,t){const l=s.slice();return l[29]=e[t],l}function Ue(s,e,t){const l=s.slice();return l[32]=e[t],l}function Xe(s,e,t){const l=s.slice();return l[35]=e[t],l}function Ye(s,e,t){const l=s.slice();return l[29]=e[t],l}function Je(s,e,t){const l=s.slice();return l[29]=e[t],l}function Ke(s,e,t){const l=s.slice();return l[42]=e[t],l}function Ze(s,e,t){const l=s.slice();return l[29]=e[t],l}function Ge(s){let e,t=s[29]+"",l;return{c(){e=w("td"),l=N(t),this.h()},l(n){e=E(n,"TD",{class:!0});var r=m(e);l=T(r,t),r.forEach(h),this.h()},h(){u(e,"class","svelte-w2fxjg")},m(n,r){j(n,e,r),f(e,l)},p(n,r){r[0]&8&&t!==(t=n[29]+"")&&K(l,t)},d(n){n&&h(e)}}}function jt(s){let e;return{c(){e=N("0")},l(t){e=T(t,"0")},m(t,l){j(t,e,l)},d(t){t&&h(e)}}}function xt(s){let e;return{c(){e=N("1")},l(t){e=T(t,"1")},m(t,l){j(t,e,l)},d(t){t&&h(e)}}}function Qe(s){let e;function t(r,o){return r[0][r[29]][r[42]]?xt:jt}let l=t(s),n=l(s);return{c(){e=w("td"),n.c(),this.h()},l(r){e=E(r,"TD",{class:!0});var o=m(e);n.l(o),o.forEach(h),this.h()},h(){u(e,"class","svelte-w2fxjg"),Ee(e,"font-weight","normal",!1)},m(r,o){j(r,e,o),n.m(e,null)},p(r,o){l!==(l=t(r))&&(n.d(1),n=l(r),n&&(n.c(),n.m(e,null)))},d(r){r&&h(e),n.d()}}}function $e(s){let e,t,l=s[29]+"",n,r,o,a=s[3],d=[];for(let g=0;g<a.length;g+=1)d[g]=Qe(Ke(s,a,g));return{c(){e=w("tr"),t=w("td"),n=N(l),r=q();for(let g=0;g<d.length;g+=1)d[g].c();o=q(),this.h()},l(g){e=E(g,"TR",{});var x=m(e);t=E(x,"TD",{class:!0});var _=m(t);n=T(_,l),_.forEach(h),r=B(x);for(let v=0;v<d.length;v+=1)d[v].l(x);o=B(x),x.forEach(h),this.h()},h(){u(t,"class","svelte-w2fxjg")},m(g,x){j(g,e,x),f(e,t),f(t,n),f(e,r);for(let _=0;_<d.length;_+=1)d[_].m(e,null);f(e,o)},p(g,x){if(x[0]&16&&l!==(l=g[29]+"")&&K(n,l),x[0]&25){a=g[3];let _;for(_=0;_<a.length;_+=1){const v=Ke(g,a,_);d[_]?d[_].p(v,x):(d[_]=Qe(v),d[_].c(),d[_].m(e,o))}for(;_<d.length;_+=1)d[_].d(1);d.length=a.length}},d(g){g&&h(e),Q(d,g)}}}function et(s){let e,t=s[29].label+"",l,n,r;return{c(){e=le("text"),l=N(t),this.h()},l(o){e=ne(o,"text",{x:!0,y:!0,"dominant-baseline":!0});var a=m(e);l=T(a,t),a.forEach(h),this.h()},h(){u(e,"x",n=s[29].x),u(e,"y",r=s[29].y),u(e,"dominant-baseline","hanging")},m(o,a){j(o,e,a),f(e,l)},p(o,a){a[0]&256&&t!==(t=o[29].label+"")&&K(l,t),a[0]&256&&n!==(n=o[29].x)&&u(e,"x",n),a[0]&256&&r!==(r=o[29].y)&&u(e,"y",r)},d(o){o&&h(e)}}}function tt(s){let e,t,l,n,r;return{c(){e=le("line"),this.h()},l(o){e=ne(o,"line",{x1:!0,y1:!0,x2:!0,y2:!0,"marker-end":!0,stroke:!0,"stroke-width":!0}),m(e).forEach(h),this.h()},h(){u(e,"x1",t=s[32].x+s[32].width+5),u(e,"y1",l=s[32].y+s[32].height/2),u(e,"x2",n=s[35].x-5),u(e,"y2",r=s[35].y+s[35].height/2),u(e,"marker-end","url(#head)"),u(e,"stroke","black"),u(e,"stroke-width","2")},m(o,a){j(o,e,a)},p(o,a){a[0]&256&&t!==(t=o[32].x+o[32].width+5)&&u(e,"x1",t),a[0]&256&&l!==(l=o[32].y+o[32].height/2)&&u(e,"y1",l),a[0]&128&&n!==(n=o[35].x-5)&&u(e,"x2",n),a[0]&128&&r!==(r=o[35].y+o[35].height/2)&&u(e,"y2",r)},d(o){o&&h(e)}}}function lt(s){let e,t=s[0][s[32].label][s[35].label]&&tt(s);return{c(){t&&t.c(),e=J()},l(l){t&&t.l(l),e=J()},m(l,n){t&&t.m(l,n),j(l,e,n)},p(l,n){l[0][l[32].label][l[35].label]?t?t.p(l,n):(t=tt(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){t&&t.d(l),l&&h(e)}}}function nt(s){let e,t=s[7],l=[];for(let n=0;n<t.length;n+=1)l[n]=lt(Xe(s,t,n));return{c(){for(let n=0;n<l.length;n+=1)l[n].c();e=J()},l(n){for(let r=0;r<l.length;r+=1)l[r].l(n);e=J()},m(n,r){for(let o=0;o<l.length;o+=1)l[o].m(n,r);j(n,e,r)},p(n,r){if(r[0]&385){t=n[7];let o;for(o=0;o<t.length;o+=1){const a=Xe(n,t,o);l[o]?l[o].p(a,r):(l[o]=lt(a),l[o].c(),l[o].m(e.parentNode,e))}for(;o<l.length;o+=1)l[o].d(1);l.length=t.length}},d(n){Q(l,n),n&&h(e)}}}function st(s){let e,t=s[29].label+"",l,n,r;return{c(){e=le("text"),l=N(t),this.h()},l(o){e=ne(o,"text",{x:!0,y:!0,"dominant-baseline":!0});var a=m(e);l=T(a,t),a.forEach(h),this.h()},h(){u(e,"x",n=s[29].x),u(e,"y",r=s[29].y),u(e,"dominant-baseline","hanging")},m(o,a){j(o,e,a),f(e,l)},p(o,a){a[0]&128&&t!==(t=o[29].label+"")&&K(l,t),a[0]&128&&n!==(n=o[29].x)&&u(e,"x",n),a[0]&128&&r!==(r=o[29].y)&&u(e,"y",r)},d(o){o&&h(e)}}}function Dt(s){let e,t;return{c(){e=N(s[13]),t=N("%")},l(l){e=T(l,s[13]),t=T(l,"%")},m(l,n){j(l,e,n),j(l,t,n)},p(l,n){n[0]&8192&&K(e,l[13])},d(l){l&&h(e),l&&h(t)}}}function At(s){let e;return{c(){e=N("TBD")},l(t){e=T(t,"TBD")},m(t,l){j(t,e,l)},p:pe,d(t){t&&h(e)}}}function it(s){let e;return{c(){e=N("not")},l(t){e=T(t,"not")},m(t,l){j(t,e,l)},d(t){t&&h(e)}}}function rt(s){let e,t,l=s[25]+"",n,r,o=!s[26]&&it();return{c(){e=w("li"),o&&o.c(),t=q(),n=N(l),r=q()},l(a){e=E(a,"LI",{});var d=m(e);o&&o.l(d),t=B(d),n=T(d,l),r=B(d),d.forEach(h)},m(a,d){j(a,e,d),o&&o.m(e,null),f(e,t),f(e,n),f(e,r)},p(a,d){a[26]?o&&(o.d(1),o=null):o||(o=it(),o.c(),o.m(e,t)),d[0]&4096&&l!==(l=a[25]+"")&&K(n,l)},d(a){a&&h(e),o&&o.d()}}}function Nt(s){let e=s[11].check,t,l=ot(s);return{c(){l.c(),t=J()},l(n){l.l(n),t=J()},m(n,r){l.m(n,r),j(n,t,r)},p(n,r){r[0]&2048&&Ie(e,e=n[11].check)?(l.d(1),l=ot(n),l.c(),l.m(t.parentNode,t)):l.p(n,r)},d(n){n&&h(t),l.d(n)}}}function Tt(s){let e,t,l,n;return{c(){e=w("button"),t=N("Next"),this.h()},l(r){e=E(r,"BUTTON",{class:!0});var o=m(e);t=T(o,"Next"),o.forEach(h),this.h()},h(){u(e,"class","btn btn-success svelte-w2fxjg")},m(r,o){j(r,e,o),f(e,t),l||(n=Ce(e,"click",s[14]),l=!0)},p:pe,d(r){r&&h(e),l=!1,n()}}}function ot(s){let e,t=s[11].check+"",l,n,r,o,a=s[11].check+"",d,g,x;return{c(){e=w("button"),l=N(t),n=q(),r=w("button"),o=N("not "),d=N(a),this.h()},l(_){e=E(_,"BUTTON",{class:!0});var v=m(e);l=T(v,t),v.forEach(h),n=B(_),r=E(_,"BUTTON",{class:!0});var D=m(r);o=T(D,"not "),d=T(D,a),D.forEach(h),this.h()},h(){u(e,"class","btn btn-success svelte-w2fxjg"),u(r,"class","btn btn-danger svelte-w2fxjg")},m(_,v){j(_,e,v),f(e,l),j(_,n,v),j(_,r,v),f(r,o),f(r,d),g||(x=[Ce(e,"click",s[18]),Ce(r,"click",s[19])],g=!0)},p(_,v){v[0]&2048&&t!==(t=_[11].check+"")&&K(l,t),v[0]&2048&&a!==(a=_[11].check+"")&&K(d,a)},d(_){_&&h(e),_&&h(n),_&&h(r),g=!1,dt(x)}}}function Ct(s){let e,t,l,n,r,o,a,d,g,x,_,v,D,A,P,Z,G,$,C,H,ee,se,ie,U,de,re,ve,p,L,F,te,je,oe,xe,X,ce=s[3],I=[];for(let c=0;c<ce.length;c+=1)I[c]=Ge(Ze(s,ce,c));let ae=s[4],M=[];for(let c=0;c<ae.length;c+=1)M[c]=$e(Je(s,ae,c));let he=s[8],z=[];for(let c=0;c<he.length;c+=1)z[c]=et(Ye(s,he,c));let fe=s[8],R=[];for(let c=0;c<fe.length;c+=1)R[c]=nt(Ue(s,fe,c));let _e=s[7],O=[];for(let c=0;c<_e.length;c+=1)O[c]=st(We(s,_e,c));function Me(c,b){return c[13]==="NaN"?At:Dt}let be=Me(s),S=be(s),ue=s[12],V=[];for(let c=0;c<ue.length;c+=1)V[c]=rt(Se(s,ue,c));function ze(c,b){return c[10]?Tt:Nt}let ke=ze(s),W=ke(s);return{c(){e=q(),t=w("div"),l=w("div"),n=w("div"),r=w("table"),o=w("tr"),a=w("td"),d=q();for(let c=0;c<I.length;c+=1)I[c].c();g=q();for(let c=0;c<M.length;c+=1)M[c].c();x=q(),_=w("div"),v=le("svg"),D=le("defs"),A=le("marker"),P=le("path");for(let c=0;c<z.length;c+=1)z[c].c();Z=J();for(let c=0;c<R.length;c+=1)R[c].c();G=J();for(let c=0;c<O.length;c+=1)O[c].c();$=q(),C=w("div"),H=w("div"),ee=N("Answered: "),se=N(s[1]),ie=q(),U=w("div"),de=N("Correct: "),re=N(s[2]),ve=q(),p=w("div"),L=N("Accuracy: "),S.c(),F=q(),te=w("hr"),je=q(),oe=w("ul");for(let c=0;c<V.length;c+=1)V[c].c();xe=q(),X=w("div"),W.c(),this.h()},l(c){_t('[data-svelte="svelte-iegv2u"]',document.head).forEach(h),e=B(c),t=E(c,"DIV",{class:!0});var i=m(t);l=E(i,"DIV",{class:!0});var k=m(l);n=E(k,"DIV",{class:!0});var Re=m(n);r=E(Re,"TABLE",{});var ye=m(r);o=E(ye,"TR",{});var we=m(o);a=E(we,"TD",{class:!0}),m(a).forEach(h),d=B(we);for(let y=0;y<I.length;y+=1)I[y].l(we);we.forEach(h),g=B(ye);for(let y=0;y<M.length;y+=1)M[y].l(ye);ye.forEach(h),Re.forEach(h),x=B(k),_=E(k,"DIV",{class:!0});var Oe=m(_);v=ne(Oe,"svg",{class:!0});var ge=m(v);D=ne(ge,"defs",{});var Ve=m(D);A=ne(Ve,"marker",{id:!0,orient:!0,markerWidth:!0,markerHeight:!0,refX:!0,refY:!0});var Fe=m(A);P=ne(Fe,"path",{d:!0,fill:!0}),m(P).forEach(h),Fe.forEach(h),Ve.forEach(h);for(let y=0;y<z.length;y+=1)z[y].l(ge);Z=J();for(let y=0;y<R.length;y+=1)R[y].l(ge);G=J();for(let y=0;y<O.length;y+=1)O[y].l(ge);ge.forEach(h),Oe.forEach(h),$=B(k),C=E(k,"DIV",{class:!0});var Y=m(C);H=E(Y,"DIV",{});var De=m(H);ee=T(De,"Answered: "),se=T(De,s[1]),De.forEach(h),ie=B(Y),U=E(Y,"DIV",{});var Ae=m(U);de=T(Ae,"Correct: "),re=T(Ae,s[2]),Ae.forEach(h),ve=B(Y),p=E(Y,"DIV",{});var Ne=m(p);L=T(Ne,"Accuracy: "),S.l(Ne),Ne.forEach(h),F=B(Y),te=E(Y,"HR",{}),je=B(Y),oe=E(Y,"UL",{});var qe=m(oe);for(let y=0;y<V.length;y+=1)V[y].l(qe);qe.forEach(h),Y.forEach(h),k.forEach(h),xe=B(i),X=E(i,"DIV",{class:!0});var Be=m(X);W.l(Be),Be.forEach(h),i.forEach(h),this.h()},h(){document.title="Practice binary relations",u(a,"class","svelte-w2fxjg"),u(n,"class","grid svelte-w2fxjg"),u(P,"d","M0,0 V4 L2,2 Z"),u(P,"fill","black"),u(A,"id","head"),u(A,"orient","auto"),u(A,"markerWidth","3"),u(A,"markerHeight","4"),u(A,"refX","1.5"),u(A,"refY","2"),u(v,"class","svelte-w2fxjg"),Ee(v,"width",It+"px",!1),Ee(v,"height",s[9]+"px",!1),u(_,"class","slopes svelte-w2fxjg"),u(C,"class","sidebar svelte-w2fxjg"),u(l,"class","visual svelte-w2fxjg"),u(X,"class","quiz svelte-w2fxjg"),Pe(X,"shake",s[5]),u(t,"class","Practice")},m(c,b){j(c,e,b),j(c,t,b),f(t,l),f(l,n),f(n,r),f(r,o),f(o,a),f(o,d);for(let i=0;i<I.length;i+=1)I[i].m(o,null);f(r,g);for(let i=0;i<M.length;i+=1)M[i].m(r,null);f(l,x),f(l,_),f(_,v),f(v,D),f(D,A),f(A,P);for(let i=0;i<z.length;i+=1)z[i].m(v,null);f(v,Z);for(let i=0;i<R.length;i+=1)R[i].m(v,null);f(v,G);for(let i=0;i<O.length;i+=1)O[i].m(v,null);f(l,$),f(l,C),f(C,H),f(H,ee),f(H,se),f(C,ie),f(C,U),f(U,de),f(U,re),f(C,ve),f(C,p),f(p,L),S.m(p,null),f(C,F),f(C,te),f(C,je),f(C,oe);for(let i=0;i<V.length;i+=1)V[i].m(oe,null);f(t,xe),f(t,X),W.m(X,null),s[20](X)},p(c,b){if(b[0]&8){ce=c[3];let i;for(i=0;i<ce.length;i+=1){const k=Ze(c,ce,i);I[i]?I[i].p(k,b):(I[i]=Ge(k),I[i].c(),I[i].m(o,null))}for(;i<I.length;i+=1)I[i].d(1);I.length=ce.length}if(b[0]&25){ae=c[4];let i;for(i=0;i<ae.length;i+=1){const k=Je(c,ae,i);M[i]?M[i].p(k,b):(M[i]=$e(k),M[i].c(),M[i].m(r,null))}for(;i<M.length;i+=1)M[i].d(1);M.length=ae.length}if(b[0]&256){he=c[8];let i;for(i=0;i<he.length;i+=1){const k=Ye(c,he,i);z[i]?z[i].p(k,b):(z[i]=et(k),z[i].c(),z[i].m(v,Z))}for(;i<z.length;i+=1)z[i].d(1);z.length=he.length}if(b[0]&385){fe=c[8];let i;for(i=0;i<fe.length;i+=1){const k=Ue(c,fe,i);R[i]?R[i].p(k,b):(R[i]=nt(k),R[i].c(),R[i].m(v,G))}for(;i<R.length;i+=1)R[i].d(1);R.length=fe.length}if(b[0]&128){_e=c[7];let i;for(i=0;i<_e.length;i+=1){const k=We(c,_e,i);O[i]?O[i].p(k,b):(O[i]=st(k),O[i].c(),O[i].m(v,null))}for(;i<O.length;i+=1)O[i].d(1);O.length=_e.length}if(b[0]&512&&Ee(v,"height",c[9]+"px",!1),b[0]&2&&K(se,c[1]),b[0]&4&&K(re,c[2]),be===(be=Me(c))&&S?S.p(c,b):(S.d(1),S=be(c),S&&(S.c(),S.m(p,null))),b[0]&4096){ue=c[12];let i;for(i=0;i<ue.length;i+=1){const k=Se(c,ue,i);V[i]?V[i].p(k,b):(V[i]=rt(k),V[i].c(),V[i].m(oe,null))}for(;i<V.length;i+=1)V[i].d(1);V.length=ue.length}ke===(ke=ze(c))&&W?W.p(c,b):(W.d(1),W=ke(c),W&&(W.c(),W.m(X,null))),b[0]&32&&Pe(X,"shake",c[5])},i:pe,o:pe,d(c){c&&h(e),c&&h(t),Q(I,c),Q(M,c),Q(z,c),Q(R,c),Q(O,c),S.d(),Q(V,c),W.d(),s[20](null)}}}const It=150;function Mt(s,e,t){let l,n,r,o,a,d,g,x,_;const v=new Et;let D={},A=[],P=0,Z=0,G=0,$=!1,C,H,ee=!1;const se=["functional","injective","total","surjective","bijective"];function ie(){t(0,D={});const p=Z===0?8:Math.floor(Math.random()*3)+2,L="ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let F=0;F<p;F++){t(0,D[L[F]]={},D);for(let te=0;te<p;te++)t(0,D[L[F]][L[te]]=Math.random()>.5,D)}t(16,A=se.map(F=>({check:F,applies:me(F,D),visible:!1}))),t(17,P=0),ee=!1}function U(p){t(1,Z+=1),p===r.applies?(t(11,r.visible=!0,r),t(16,A=Array.from(A)),t(17,P++,P),t(2,G+=1),P===A.length&&!ee&&v.confetti.spawnAt(H)):(ee=!0,t(5,$=!0),clearTimeout(C),C=setTimeout(()=>{t(5,$=!1)},300))}ie();const de=()=>U(!0),re=()=>U(!1);function ve(p){ut[p?"unshift":"push"](()=>{H=p,t(6,H)})}return s.$$.update=()=>{s.$$.dirty[0]&6&&t(13,l=(G/Z*100).toFixed(0)),s.$$.dirty[0]&65536&&t(12,n=A.filter(p=>p.visible)),s.$$.dirty[0]&196608&&t(11,r=A[P]),s.$$.dirty[0]&196608&&t(10,o=P===A.length),s.$$.dirty[0]&1&&t(4,a=Object.keys(D)),s.$$.dirty[0]&1&&t(3,d=Te.exports.uniq(Object.keys(D).flatMap(p=>Object.keys(D[p])))),s.$$.dirty[0]&16&&t(9,g=a.length*30),s.$$.dirty[0]&16&&t(8,x=Te.exports.uniq(a.map((p,L)=>{const F=He(p,{font:"Arial",fontSize:"18px",fontWeight:"bold"});return{x:0,y:5+L*30,width:F.width,height:12,label:p}}))),s.$$.dirty[0]&8&&t(7,_=Te.exports.uniq(d.map((p,L)=>{const F=He(p,{font:"Arial",fontSize:"18px",fontWeight:"bold"});return{x:130,y:5+L*30,width:F.width,height:12,label:p}})))},[D,Z,G,d,a,$,H,_,x,g,o,r,n,l,ie,U,A,P,de,re,ve]}class zt extends ct{constructor(e){super(),at(this,e,Mt,Ct,Ie,{},null,[-1,-1])}}function Rt(s){let e,t;return e=new zt({}),{c(){vt(e.$$.fragment)},l(l){gt(e.$$.fragment,l)},m(l,n){mt(e,l,n),t=!0},i(l){t||(ht(e.$$.fragment,l),t=!0)},o(l){ft(e.$$.fragment,l),t=!1},d(l){pt(e,l)}}}function Ot(s){let e,t,l=Rt();return{c(){e=w("main"),l&&l.c(),this.h()},l(n){e=E(n,"MAIN",{class:!0});var r=m(e);l&&l.l(r),r.forEach(h),this.h()},h(){u(e,"class","svelte-4v788m")},m(n,r){j(n,e,r),l&&l.m(e,null),t=!0},p:pe,i(n){t||(ht(l),t=!0)},o(n){ft(l),t=!1},d(n){n&&h(e),l&&l.d()}}}class qt extends ct{constructor(e){super(),at(this,e,null,Ot,Ie,{})}}export{qt as default};
