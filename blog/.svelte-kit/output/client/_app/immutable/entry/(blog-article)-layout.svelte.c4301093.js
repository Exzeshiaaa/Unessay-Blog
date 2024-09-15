import{S as ye,i as ve,s as he,y as B,z as O,A as J,g as w,d as C,B as G,k as I,l as H,m as z,h as m,n as _,b as h,v as q,f as K,H as pe,C as ge,e as Q,a as P,I as $e,c as F,G as W,D as Te,E as De,F as Me,q as L,r as Y,u as X}from"../chunks/index.b2354961.js";import{H as be,F as Ne}from"../chunks/Footer.7f3b4a2e.js";import{C as we,B as ke,T as Ie,I as He}from"../chunks/ContentSection.f13b5c51.js";import{t as R,s as j,k as Ee}from"../chunks/meta.52cdbd14.js";var Ae=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,Se=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,Ce=/[^-+\dA-Z]/g;function x(i,t,l,n){if(arguments.length===1&&typeof i=="string"&&!/\d/.test(i)&&(t=i,i=void 0),i=i||i===0?i:new Date,i instanceof Date||(i=new Date(i)),isNaN(i))throw TypeError("Invalid date");t=String(te[t]||t||te.default);var e=t.slice(0,4);(e==="UTC:"||e==="GMT:")&&(t=t.slice(4),l=!0,e==="GMT:"&&(n=!0));var o=function(){return l?"getUTC":"get"},a=function(){return i[o()+"Date"]()},f=function(){return i[o()+"Day"]()},s=function(){return i[o()+"Month"]()},T=function(){return i[o()+"FullYear"]()},p=function(){return i[o()+"Hours"]()},b=function(){return i[o()+"Minutes"]()},A=function(){return i[o()+"Seconds"]()},k=function(){return i[o()+"Milliseconds"]()},y=function(){return l?0:i.getTimezoneOffset()},g=function(){return Pe(i)},c=function(){return Fe(i)},$={d:function(){return a()},dd:function(){return Z(a())},ddd:function(){return U.dayNames[f()]},DDD:function(){return ne({y:T(),m:s(),d:a(),_:o(),dayName:U.dayNames[f()],short:!0})},dddd:function(){return U.dayNames[f()+7]},DDDD:function(){return ne({y:T(),m:s(),d:a(),_:o(),dayName:U.dayNames[f()+7]})},m:function(){return s()+1},mm:function(){return Z(s()+1)},mmm:function(){return U.monthNames[s()]},mmmm:function(){return U.monthNames[s()+12]},yy:function(){return String(T()).slice(2)},yyyy:function(){return Z(T(),4)},h:function(){return p()%12||12},hh:function(){return Z(p()%12||12)},H:function(){return p()},HH:function(){return Z(p())},M:function(){return b()},MM:function(){return Z(b())},s:function(){return A()},ss:function(){return Z(A())},l:function(){return Z(k(),3)},L:function(){return Z(Math.floor(k()/10))},t:function(){return p()<12?U.timeNames[0]:U.timeNames[1]},tt:function(){return p()<12?U.timeNames[2]:U.timeNames[3]},T:function(){return p()<12?U.timeNames[4]:U.timeNames[5]},TT:function(){return p()<12?U.timeNames[6]:U.timeNames[7]},Z:function(){return n?"GMT":l?"UTC":We(i)},o:function(){return(y()>0?"-":"+")+Z(Math.floor(Math.abs(y())/60)*100+Math.abs(y())%60,4)},p:function(){return(y()>0?"-":"+")+Z(Math.floor(Math.abs(y())/60),2)+":"+Z(Math.floor(Math.abs(y())%60),2)},S:function(){return["th","st","nd","rd"][a()%10>3?0:(a()%100-a()%10!=10)*a()%10]},W:function(){return g()},WW:function(){return Z(g())},N:function(){return c()}};return t.replace(Ae,function(r){return r in $?$[r]():r.slice(1,r.length-1)})}var te={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},U={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},Z=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2;return String(t).padStart(l,"0")},ne=function(t){var l=t.y,n=t.m,e=t.d,o=t._,a=t.dayName,f=t.short,s=f===void 0?!1:f,T=new Date,p=new Date;p.setDate(p[o+"Date"]()-1);var b=new Date;b.setDate(b[o+"Date"]()+1);var A=function(){return T[o+"Date"]()},k=function(){return T[o+"Month"]()},y=function(){return T[o+"FullYear"]()},g=function(){return p[o+"Date"]()},c=function(){return p[o+"Month"]()},$=function(){return p[o+"FullYear"]()},r=function(){return b[o+"Date"]()},D=function(){return b[o+"Month"]()},N=function(){return b[o+"FullYear"]()};return y()===l&&k()===n&&A()===e?s?"Tdy":"Today":$()===l&&c()===n&&g()===e?s?"Ysd":"Yesterday":N()===l&&D()===n&&r()===e?s?"Tmw":"Tomorrow":a},Pe=function(t){var l=new Date(t.getFullYear(),t.getMonth(),t.getDate());l.setDate(l.getDate()-(l.getDay()+6)%7+3);var n=new Date(l.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var e=l.getTimezoneOffset()-n.getTimezoneOffset();l.setHours(l.getHours()-e);var o=(l-n)/(864e5*7);return 1+Math.floor(o)},Fe=function(t){var l=t.getDay();return l===0&&(l=7),l},We=function(t){return(String(t).match(Se)||[""]).pop().replace(Ce,"").replace(/GMT\+0000/g,"UTC")};function re(i,t,l){const n=i.slice();return n[1]=t[l],n}function le(i){let t,l;return t=new ke({props:{slug:i[1].slug,title:i[1].title,excerpt:i[1].excerpt,tags:i[1].tags,readingTime:i[1].readingTime,showImage:!1}}),{c(){B(t.$$.fragment)},l(n){O(t.$$.fragment,n)},m(n,e){J(t,n,e),l=!0},p(n,e){const o={};e&1&&(o.slug=n[1].slug),e&1&&(o.title=n[1].title),e&1&&(o.excerpt=n[1].excerpt),e&1&&(o.tags=n[1].tags),e&1&&(o.readingTime=n[1].readingTime),t.$set(o)},i(n){l||(w(t.$$.fragment,n),l=!0)},o(n){C(t.$$.fragment,n),l=!1},d(n){G(t,n)}}}function Ue(i){let t,l,n=i[0],e=[];for(let a=0;a<n.length;a+=1)e[a]=le(re(i,n,a));const o=a=>C(e[a],1,1,()=>{e[a]=null});return{c(){t=I("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=H(a,"DIV",{class:!0});var f=z(t);for(let s=0;s<e.length;s+=1)e[s].l(f);f.forEach(m),this.h()},h(){_(t,"class","simple-grid svelte-ypk0wh")},m(a,f){h(a,t,f);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null);l=!0},p(a,f){if(f&1){n=a[0];let s;for(s=0;s<n.length;s+=1){const T=re(a,n,s);e[s]?(e[s].p(T,f),w(e[s],1)):(e[s]=le(T),e[s].c(),w(e[s],1),e[s].m(t,null))}for(q(),s=n.length;s<e.length;s+=1)o(s);K()}},i(a){if(!l){for(let f=0;f<n.length;f+=1)w(e[f]);l=!0}},o(a){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)C(e[f]);l=!1},d(a){a&&m(t),pe(e,a)}}}function Ve(i){let t,l;return t=new we({props:{id:"related-posts",title:"Related Posts",$$slots:{default:[Ue]},$$scope:{ctx:i}}}),{c(){B(t.$$.fragment)},l(n){O(t.$$.fragment,n)},m(n,e){J(t,n,e),l=!0},p(n,[e]){const o={};e&17&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i(n){l||(w(t.$$.fragment,n),l=!0)},o(n){C(t.$$.fragment,n),l=!1},d(n){G(t,n)}}}function Ze(i,t,l){let{posts:n}=t;return i.$$set=e=>{"posts"in e&&l(0,n=e.posts)},[n]}class ze extends ye{constructor(t){super(),ve(this,t,Ze,Ve,he,{posts:0})}}function ae(i,t,l){const n=i.slice();return n[5]=t[l],n}function ie(i){let t,l,n,e,o,a,f,s,T,p,b,A,k,y,g,c,$,r,D,N,v,d,S,V;document.title=c=i[1].title+" - "+R;let E=i[1].coverImage&&oe(i);return{c(){t=I("meta"),n=P(),e=I("meta"),a=P(),f=I("meta"),T=P(),p=I("meta"),A=P(),k=I("link"),g=P(),$=P(),r=I("meta"),N=P(),v=I("meta"),S=P(),E&&E.c(),V=Q(),this.h()},l(u){t=H(u,"META",{name:!0,content:!0}),n=F(u),e=H(u,"META",{name:!0,content:!0}),a=F(u),f=H(u,"META",{property:!0,content:!0}),T=F(u),p=H(u,"META",{name:!0,content:!0}),A=F(u),k=H(u,"LINK",{rel:!0,href:!0}),g=F(u),$=F(u),r=H(u,"META",{property:!0,content:!0}),N=F(u),v=H(u,"META",{name:!0,content:!0}),S=F(u),E&&E.l(u),V=Q(),this.h()},h(){_(t,"name","keywords"),_(t,"content",l=i[0].join(", ")),_(e,"name","description"),_(e,"content",o=i[1].excerpt),_(f,"property","og:description"),_(f,"content",s=i[1].excerpt),_(p,"name","twitter:description"),_(p,"content",b=i[1].excerpt),_(k,"rel","canonical"),_(k,"href",y=j+"/"+i[1].slug),_(r,"property","og:title"),_(r,"content",D=i[1].title+" - "+R),_(v,"name","twitter:title"),_(v,"content",d=i[1].title+" - "+R)},m(u,M){h(u,t,M),h(u,n,M),h(u,e,M),h(u,a,M),h(u,f,M),h(u,T,M),h(u,p,M),h(u,A,M),h(u,k,M),h(u,g,M),h(u,$,M),h(u,r,M),h(u,N,M),h(u,v,M),h(u,S,M),E&&E.m(u,M),h(u,V,M)},p(u,M){M&1&&l!==(l=u[0].join(", "))&&_(t,"content",l),M&2&&o!==(o=u[1].excerpt)&&_(e,"content",o),M&2&&s!==(s=u[1].excerpt)&&_(f,"content",s),M&2&&b!==(b=u[1].excerpt)&&_(p,"content",b),M&2&&y!==(y=j+"/"+u[1].slug)&&_(k,"href",y),M&2&&c!==(c=u[1].title+" - "+R)&&(document.title=c),M&2&&D!==(D=u[1].title+" - "+R)&&_(r,"content",D),M&2&&d!==(d=u[1].title+" - "+R)&&_(v,"content",d),u[1].coverImage?E?E.p(u,M):(E=oe(u),E.c(),E.m(V.parentNode,V)):E&&(E.d(1),E=null)},d(u){u&&m(t),u&&m(n),u&&m(e),u&&m(a),u&&m(f),u&&m(T),u&&m(p),u&&m(A),u&&m(k),u&&m(g),u&&m($),u&&m(r),u&&m(N),u&&m(v),u&&m(S),E&&E.d(u),u&&m(V)}}}function oe(i){let t,l,n,e,o;return{c(){t=I("meta"),n=P(),e=I("meta"),this.h()},l(a){t=H(a,"META",{property:!0,content:!0}),n=F(a),e=H(a,"META",{name:!0,content:!0}),this.h()},h(){_(t,"property","og:image"),_(t,"content",l=""+(j+i[1].coverImage)),_(e,"name","twitter:image"),_(e,"content",o=""+(j+i[1].coverImage))},m(a,f){h(a,t,f),h(a,n,f),h(a,e,f)},p(a,f){f&2&&l!==(l=""+(j+a[1].coverImage))&&_(t,"content",l),f&2&&o!==(o=""+(j+a[1].coverImage))&&_(e,"content",o)},d(a){a&&m(t),a&&m(n),a&&m(e)}}}function se(i){var $;let t,l=i[1].title+"",n,e,o,a,f=x(i[1].date,"UTC:dd mmmm yyyy")+"",s,T,p,b,A,k,y=i[1].updated&&fe(i),g=i[1].readingTime&&ue(i),c=(($=i[1].tags)==null?void 0:$.length)&&me(i);return{c(){t=I("h1"),n=L(l),e=P(),o=I("div"),a=L("Published on "),s=L(f),T=P(),y&&y.c(),p=P(),g&&g.c(),b=P(),c&&c.c(),A=Q(),this.h()},l(r){t=H(r,"H1",{});var D=z(t);n=Y(D,l),D.forEach(m),e=F(r),o=H(r,"DIV",{class:!0});var N=z(o);a=Y(N,"Published on "),s=Y(N,f),N.forEach(m),T=F(r),y&&y.l(r),p=F(r),g&&g.l(r),b=F(r),c&&c.l(r),A=Q(),this.h()},h(){_(o,"class","note svelte-1hgysft")},m(r,D){h(r,t,D),W(t,n),h(r,e,D),h(r,o,D),W(o,a),W(o,s),h(r,T,D),y&&y.m(r,D),h(r,p,D),g&&g.m(r,D),h(r,b,D),c&&c.m(r,D),h(r,A,D),k=!0},p(r,D){var N;(!k||D&2)&&l!==(l=r[1].title+"")&&X(n,l),(!k||D&2)&&f!==(f=x(r[1].date,"UTC:dd mmmm yyyy")+"")&&X(s,f),r[1].updated?y?y.p(r,D):(y=fe(r),y.c(),y.m(p.parentNode,p)):y&&(y.d(1),y=null),r[1].readingTime?g?g.p(r,D):(g=ue(r),g.c(),g.m(b.parentNode,b)):g&&(g.d(1),g=null),(N=r[1].tags)!=null&&N.length?c?(c.p(r,D),D&2&&w(c,1)):(c=me(r),c.c(),w(c,1),c.m(A.parentNode,A)):c&&(q(),C(c,1,1,()=>{c=null}),K())},i(r){k||(w(c),k=!0)},o(r){C(c),k=!1},d(r){r&&m(t),r&&m(e),r&&m(o),r&&m(T),y&&y.d(r),r&&m(p),g&&g.d(r),r&&m(b),c&&c.d(r),r&&m(A)}}}function fe(i){let t,l,n=x(i[1].updated,"UTC:dd mmmm yyyy")+"",e;return{c(){t=I("div"),l=L("Updated on "),e=L(n),this.h()},l(o){t=H(o,"DIV",{class:!0});var a=z(t);l=Y(a,"Updated on "),e=Y(a,n),a.forEach(m),this.h()},h(){_(t,"class","note svelte-1hgysft")},m(o,a){h(o,t,a),W(t,l),W(t,e)},p(o,a){a&2&&n!==(n=x(o[1].updated,"UTC:dd mmmm yyyy")+"")&&X(e,n)},d(o){o&&m(t)}}}function ue(i){let t,l=i[1].readingTime+"",n;return{c(){t=I("div"),n=L(l),this.h()},l(e){t=H(e,"DIV",{class:!0});var o=z(t);n=Y(o,l),o.forEach(m),this.h()},h(){_(t,"class","note svelte-1hgysft")},m(e,o){h(e,t,o),W(t,n)},p(e,o){o&2&&l!==(l=e[1].readingTime+"")&&X(n,l)},d(e){e&&m(t)}}}function me(i){let t,l,n=i[1].tags,e=[];for(let a=0;a<n.length;a+=1)e[a]=ce(ae(i,n,a));const o=a=>C(e[a],1,1,()=>{e[a]=null});return{c(){t=I("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=H(a,"DIV",{class:!0});var f=z(t);for(let s=0;s<e.length;s+=1)e[s].l(f);f.forEach(m),this.h()},h(){_(t,"class","tags svelte-1hgysft")},m(a,f){h(a,t,f);for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(t,null);l=!0},p(a,f){if(f&2){n=a[1].tags;let s;for(s=0;s<n.length;s+=1){const T=ae(a,n,s);e[s]?(e[s].p(T,f),w(e[s],1)):(e[s]=ce(T),e[s].c(),w(e[s],1),e[s].m(t,null))}for(q(),s=n.length;s<e.length;s+=1)o(s);K()}},i(a){if(!l){for(let f=0;f<n.length;f+=1)w(e[f]);l=!0}},o(a){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)C(e[f]);l=!1},d(a){a&&m(t),pe(e,a)}}}function Le(i){let t=i[5]+"",l;return{c(){l=L(t)},l(n){l=Y(n,t)},m(n,e){h(n,l,e)},p(n,e){e&2&&t!==(t=n[5]+"")&&X(l,t)},d(n){n&&m(l)}}}function ce(i){let t,l;return t=new Ie({props:{$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){B(t.$$.fragment)},l(n){O(t.$$.fragment,n)},m(n,e){J(t,n,e),l=!0},p(n,e){const o={};e&18&&(o.$$scope={dirty:e,ctx:n}),t.$set(o)},i(n){l||(w(t.$$.fragment,n),l=!0)},o(n){C(t.$$.fragment,n),l=!1},d(n){G(t,n)}}}function de(i){let t,l,n;return l=new He({props:{src:i[1].coverImage,alt:i[1].title}}),{c(){t=I("div"),B(l.$$.fragment),this.h()},l(e){t=H(e,"DIV",{class:!0});var o=z(t);O(l.$$.fragment,o),o.forEach(m),this.h()},h(){_(t,"class","cover-image svelte-1hgysft")},m(e,o){h(e,t,o),J(l,t,null),n=!0},p(e,o){const a={};o&2&&(a.src=e[1].coverImage),o&2&&(a.alt=e[1].title),l.$set(a)},i(e){n||(w(l.$$.fragment,e),n=!0)},o(e){C(l.$$.fragment,e),n=!1},d(e){e&&m(t),G(l)}}}function _e(i){let t,l,n;return l=new ze({props:{posts:i[1].relatedPosts}}),{c(){t=I("div"),B(l.$$.fragment),this.h()},l(e){t=H(e,"DIV",{class:!0});var o=z(t);O(l.$$.fragment,o),o.forEach(m),this.h()},h(){_(t,"class","container")},m(e,o){h(e,t,o),J(l,t,null),n=!0},p(e,o){const a={};o&2&&(a.posts=e[1].relatedPosts),l.$set(a)},i(e){n||(w(l.$$.fragment,e),n=!0)},o(e){C(l.$$.fragment,e),n=!1},d(e){e&&m(t),G(l)}}}function Ye(i){let t,l,n,e,o,a,f,s,T,p,b,A,k,y,g,c=i[1]&&ie(i);e=new be({props:{showBackground:!0}});let $=i[1]&&se(i),r=i[1]&&i[1].coverImage&&de(i);const D=i[3].default,N=ge(D,i,i[4],null);let v=i[1].relatedPosts&&i[1].relatedPosts.length>0&&_e(i);return y=new Ne({}),{c(){c&&c.c(),t=Q(),l=P(),n=I("div"),B(e.$$.fragment),o=P(),a=I("main"),f=I("article"),s=I("div"),$&&$.c(),T=P(),r&&r.c(),p=P(),b=I("div"),N&&N.c(),A=P(),v&&v.c(),k=P(),B(y.$$.fragment),this.h()},l(d){const S=$e("svelte-1ylu8nc",document.head);c&&c.l(S),t=Q(),S.forEach(m),l=F(d),n=H(d,"DIV",{class:!0});var V=z(n);O(e.$$.fragment,V),o=F(V),a=H(V,"MAIN",{});var E=z(a);f=H(E,"ARTICLE",{id:!0,class:!0});var u=z(f);s=H(u,"DIV",{class:!0});var M=z(s);$&&$.l(M),M.forEach(m),T=F(u),r&&r.l(u),p=F(u),b=H(u,"DIV",{class:!0});var ee=z(b);N&&N.l(ee),ee.forEach(m),u.forEach(m),A=F(E),v&&v.l(E),E.forEach(m),k=F(V),O(y.$$.fragment,V),V.forEach(m),this.h()},h(){_(s,"class","header svelte-1hgysft"),_(b,"class","content svelte-1hgysft"),_(f,"id","article-content"),_(f,"class","svelte-1hgysft"),_(n,"class","article-layout svelte-1hgysft")},m(d,S){c&&c.m(document.head,null),W(document.head,t),h(d,l,S),h(d,n,S),J(e,n,null),W(n,o),W(n,a),W(a,f),W(f,s),$&&$.m(s,null),W(f,T),r&&r.m(f,null),W(f,p),W(f,b),N&&N.m(b,null),W(a,A),v&&v.m(a,null),W(n,k),J(y,n,null),g=!0},p(d,[S]){d[1]?c?c.p(d,S):(c=ie(d),c.c(),c.m(t.parentNode,t)):c&&(c.d(1),c=null),d[1]?$?($.p(d,S),S&2&&w($,1)):($=se(d),$.c(),w($,1),$.m(s,null)):$&&(q(),C($,1,1,()=>{$=null}),K()),d[1]&&d[1].coverImage?r?(r.p(d,S),S&2&&w(r,1)):(r=de(d),r.c(),w(r,1),r.m(f,p)):r&&(q(),C(r,1,1,()=>{r=null}),K()),N&&N.p&&(!g||S&16)&&Te(N,D,d,d[4],g?Me(D,d[4],S,null):De(d[4]),null),d[1].relatedPosts&&d[1].relatedPosts.length>0?v?(v.p(d,S),S&2&&w(v,1)):(v=_e(d),v.c(),w(v,1),v.m(a,null)):v&&(q(),C(v,1,1,()=>{v=null}),K())},i(d){g||(w(e.$$.fragment,d),w($),w(r),w(N,d),w(v),w(y.$$.fragment,d),g=!0)},o(d){C(e.$$.fragment,d),C($),C(r),C(N,d),C(v),C(y.$$.fragment,d),g=!1},d(d){c&&c.d(d),m(t),d&&m(l),d&&m(n),G(e),$&&$.d(),r&&r.d(),N&&N.d(d),v&&v.d(),G(y)}}}function Be(i,t,l){let n,{$$slots:e={},$$scope:o}=t,{data:a}=t,f=Ee;return i.$$set=s=>{"data"in s&&l(2,a=s.data),"$$scope"in s&&l(4,o=s.$$scope)},i.$$.update=()=>{var s,T;i.$$.dirty&4&&l(1,{post:n}=a,n),i.$$.dirty&3&&((s=n==null?void 0:n.tags)!=null&&s.length&&l(0,f=n.tags.concat(f)),(T=n==null?void 0:n.keywords)!=null&&T.length&&l(0,f=n.keywords.concat(f)))},[f,n,a,e,o]}class je extends ye{constructor(t){super(),ve(this,t,Be,Ye,he,{data:2})}}export{je as default};
