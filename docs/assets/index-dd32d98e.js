var At=Object.defineProperty;var Et=(t,e,s)=>e in t?At(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var je=(t,e,s)=>(Et(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const h of a)if(h.type==="childList")for(const r of h.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const h={};return a.integrity&&(h.integrity=a.integrity),a.referrerPolicy&&(h.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?h.credentials="include":a.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function n(a){if(a.ep)return;a.ep=!0;const h=s(a);fetch(a.href,h)}})();function he(){}function Ht(t){return t()}function Ct(){return Object.create(null)}function ue(t){t.forEach(Ht)}function xt(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Be;function Ot(t,e){return t===e?!0:(Be||(Be=document.createElement("a")),Be.href=e,t===Be.href)}function Dt(t){return Object.keys(t).length===0}function Tt(t){return t??""}function i(t,e){t.appendChild(e)}function v(t,e,s){t.insertBefore(e,s||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function o(t){return document.createElement(t)}function Nt(t){return document.createTextNode(t)}function u(){return Nt(" ")}function T(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Ft(t){return Array.from(t.childNodes)}function Gt(t,e,s,n){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}let de;function ce(t){de=t}function Ut(){if(!de)throw new Error("Function called outside component initialization");return de}function jt(t){Ut().$$.on_mount.push(t)}const se=[],Mt=[];let le=[];const $t=[],qt=Promise.resolve();let We=!1;function Wt(){We||(We=!0,qt.then(Bt))}function Ve(t){le.push(t)}const qe=new Set;let te=0;function Bt(){if(te!==0)return;const t=de;do{try{for(;te<se.length;){const e=se[te];te++,ce(e),Vt(e.$$)}}catch(e){throw se.length=0,te=0,e}for(ce(null),se.length=0,te=0;Mt.length;)Mt.pop()();for(let e=0;e<le.length;e+=1){const s=le[e];qe.has(s)||(qe.add(s),s())}le.length=0}while(se.length);for(;$t.length;)$t.pop()();We=!1,qe.clear(),ce(t)}function Vt(t){if(t.fragment!==null){t.update(),ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ve)}}function Rt(t){const e=[],s=[];le.forEach(n=>t.indexOf(n)===-1?e.push(n):s.push(n)),s.forEach(n=>n()),le=e}const Xt=new Set;function Zt(t,e){t&&t.i&&(Xt.delete(t),t.i(e))}function Kt(t,e,s){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,s),Ve(()=>{const h=t.$$.on_mount.map(Ht).filter(xt);t.$$.on_destroy?t.$$.on_destroy.push(...h):ue(h),t.$$.on_mount=[]}),a.forEach(Ve)}function zt(t,e){const s=t.$$;s.fragment!==null&&(Rt(s.after_update),ue(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(se.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,s,n,a,h,r,c=[-1]){const _=de;ce(t);const b=t.$$={fragment:null,ctx:[],props:h,update:he,not_equal:a,bound:Ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(_?_.$$.context:[])),callbacks:Ct(),dirty:c,skip_bound:!1,root:e.target||_.$$.root};r&&r(b.root);let x=!1;if(b.ctx=s?s(t,e.props||{},(m,B,...W)=>{const P=W.length?W[0]:B;return b.ctx&&a(b.ctx[m],b.ctx[m]=P)&&(!b.skip_bound&&b.bound[m]&&b.bound[m](P),x&&Jt(t,m)),B}):[],b.update(),x=!0,ue(b.before_update),b.fragment=n?n(b.ctx):!1,e.target){if(e.hydrate){const m=Ft(e.target);b.fragment&&b.fragment.l(m),m.forEach(f)}else b.fragment&&b.fragment.c();e.intro&&Zt(t.$$.fragment),Kt(t,e.target,e.anchor),Bt()}ce(_)}class Yt{constructor(){je(this,"$$");je(this,"$$set")}$destroy(){zt(this,1),this.$destroy=he}$on(e,s){if(!xt(s))return he;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const a=n.indexOf(s);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!Dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const es="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(es);function ts(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[9]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function ss(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[8]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function ls(t){let e;return{c(){e=o("span"),e.textContent="Available",l(e,"class","text-glow svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function ns(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function is(t){let e,s;return{c(){e=o("img"),Ot(e.src,s="windows_logo.svg")||l(e,"src",s),l(e,"width","24px"),l(e,"height","24px"),Gt(e,"margin-right","8px"),l(e,"alt",""),l(e,"class","svelte-1hhgby3")},m(n,a){v(n,e,a)},d(n){n&&f(e)}}}function os(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function as(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[11]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function rs(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[10]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function cs(t){let e;return{c(){e=o("span"),e.textContent="Available",l(e,"class","text-glow svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function hs(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function ds(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[13]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function us(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[12]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function bs(t){let e;return{c(){e=o("span"),e.textContent="Available",l(e,"class","text-glow svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function fs(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function vs(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[15]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function gs(t){let e,s,n,a,h;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-1hhgby3"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-1hhgby3")},m(r,c){v(r,e,c),i(e,s),a||(h=T(e,"click",t[14]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-1hhgby3")&&l(e,"class",n)},d(r){r&&f(e),a=!1,h()}}}function St(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-1hhgby3")},m(s,n){v(s,e,n)},d(s){s&&f(e)}}}function ps(t){let e,s,n,a,h,r,c,_,b,x,m,B,W,P,Pe,V,ne,Ae,A,Re,G,be,R,fe,Xe,X,ie,Ze,I,Ee,Ke,ve,ze,ge,E,pe,Je,Z,Qe,K,U,j,Ie,ye,Ye,O,Oe,et,g,oe,tt,De,st,_e,lt,z,q,nt,D,Ne,it,me,ot,Fe,at,ae,rt,J,w,re,ct,we,ht,ke,dt,Le,ut,N,Ge,bt,Ce,ft,Te,Ue,vt;function gt(d,p){return d[1]?ts:ss}let Me=gt(t),M=Me(t);function pt(d,p){if(d[0])return ns;if(d[1])return ls}let Q=pt(t),k=Q&&Q(t);function yt(d,p){return d[3]?os:is}let $e=yt(t),F=$e(t);function _t(d,p){return d[1]?as:rs}let Se=_t(t),$=Se(t);function mt(d,p){if(d[0])return hs;if(d[1])return cs}let Y=mt(t),L=Y&&Y(t);function wt(d,p){return d[1]?ds:us}let He=wt(t),S=He(t);function kt(d,p){if(d[0])return fs;if(d[1])return bs}let ee=kt(t),C=ee&&ee(t);function Lt(d,p){return d[1]?vs:gs}let xe=Lt(t),H=xe(t),y=t[0]&&St();return{c(){e=o("main"),s=o("div"),n=o("div"),a=o("div"),a.innerHTML=`<a href="/" class="absolute logo navbar svelte-1hhgby3"><img class=" svelte-1hhgby3" src="sir_bofi.svg" alt="Sir Bofi logo"/>
                    Sir Bofi</a>`,h=u(),r=o("div"),c=o("div"),_=o("a"),_.innerHTML='<button class="bones svelte-1hhgby3">Home</button>',b=u(),x=o("a"),x.innerHTML='<button class="bones svelte-1hhgby3">Demo</button>',m=u(),B=o("a"),B.innerHTML='<button class="bones svelte-1hhgby3">About</button>',W=u(),P=o("a"),P.innerHTML='<button class="bones svelte-1hhgby3">Tokenomics</button>',Pe=u(),V=o("a"),V.innerHTML='<button class="bones svelte-1hhgby3">Overview</button>',Ae=u(),A=o("div"),A.innerHTML='<img src="burger.svg" alt="" class="svelte-1hhgby3"/>',Re=u(),G=o("div"),be=o("div"),R=o("div"),fe=o("h1"),fe.innerHTML='Global crypto price differences in <span class="hl green svelte-1hhgby3">seconds</span>',Xe=u(),X=o("div"),ie=o("a"),ie.innerHTML='<button class="big-button transparent svelte-1hhgby3">What is this?</button>',Ze=u(),I=o("div"),M.c(),Ee=u(),k&&k.c(),Ke=u(),ve=o("div"),ve.innerHTML='<div class="ambient svelte-1hhgby3">@</div>',ze=u(),ge=o("div"),E=o("div"),pe=o("h1"),pe.textContent="Demonstration",Je=u(),Z=o("video"),Z.innerHTML='<source src="sir_bofi_demo.mp4" type="video/mp4" class="svelte-1hhgby3"/><track kind="captions" default="" src="" class="svelte-1hhgby3"/>',Qe=u(),K=o("div"),U=o("a"),j=o("button"),F.c(),Ie=u(),ye=o("span"),ye.textContent="Download free demo version",Ye=u(),O=o("div"),$.c(),Oe=u(),L&&L.c(),et=u(),g=o("div"),oe=o("div"),oe.innerHTML=`<h1 class="svelte-1hhgby3">Simple to use</h1> <div class="base-row main-points-row svelte-1hhgby3"><div class="base-col point-pad svelte-1hhgby3"><img src="wallet.svg" alt="" class="svelte-1hhgby3"/> <h3 class="svelte-1hhgby3">Purchase</h3> <p class="svelte-1hhgby3">Purchase private access,
                        receive software and credentials.</p></div> <div class="base-col point-pad svelte-1hhgby3"><img src="key.svg" alt="" class="svelte-1hhgby3"/> <h3 class="svelte-1hhgby3">Set up</h3> <p class="svelte-1hhgby3">Download the software,
                        log in with the credentials provided.</p></div> <div class="base-col point-pad svelte-1hhgby3"><img src="rocket.svg" alt="" class="svelte-1hhgby3"/> <h3 class="svelte-1hhgby3">Launch</h3> <p class="svelte-1hhgby3">Apply needed filters,
                        trigger the analysis,
                        find results in seconds.</p></div></div>`,tt=u(),De=o("hr"),st=u(),_e=o("div"),_e.innerHTML='<h2 class="xxl svelte-1hhgby3">Sir Bofi 101</h2> <div class="base-row main-points-row svelte-1hhgby3"><div class="base-col point-pad svelte-1hhgby3"><img src="lightning.svg" alt="" class="svelte-1hhgby3"/> <h3 class="svelte-1hhgby3">Prompt</h3> <p class="svelte-1hhgby3">Opportunities found in seconds between 9000+ currencies.</p></div> <div class="base-col point-pad svelte-1hhgby3"><img src="search.svg" alt="" class="svelte-1hhgby3"/> <h3 class="svelte-1hhgby3">Extensive</h3> <p class="svelte-1hhgby3">Trading pairs data from 600+ exchanges at your fingertips.</p></div> <div class="base-col point-pad svelte-1hhgby3"><img src="cog.svg" alt="" class="svelte-1hhgby3"/> <h3 class="svelte-1hhgby3">Seamless</h3> <p class="svelte-1hhgby3">Authenticate, filter and trigger the analysis with ease.</p></div></div>',lt=u(),z=o("div"),q=o("a"),q.innerHTML='<button class="big-button transparent svelte-1hhgby3"><img src="windows_logo.svg" width="24px" height="24px" style="margin-right: 8px" alt="" class="svelte-1hhgby3"/> <span class="svelte-1hhgby3">Download free demo version</span></button>',nt=u(),D=o("div"),S.c(),Ne=u(),C&&C.c(),it=u(),me=o("div"),me.innerHTML='-100€ coupon code: <span class="text-glow svelte-1hhgby3">IKnowWhatImDoing</span>',ot=u(),Fe=o("hr"),at=u(),ae=o("div"),ae.innerHTML='<h1 class="svelte-1hhgby3">$BOFI Tokenomics</h1> <div class="base-row tokenomics-row svelte-1hhgby3"><img src="tokenomics.svg" alt="" class="svelte-1hhgby3"/> <div class="base-col token-utilities-wrapper svelte-1hhgby3"><div class="tokenomics-text-container svelte-1hhgby3"><div class="utilities-title-wrapper svelte-1hhgby3"><h2 class="svelte-1hhgby3">Initial Utilities</h2> <svg class="arrow-svg svelte-1hhgby3" xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1687 0.903087C24.3682 -0.301029 26.3129 -0.301029 27.5124 0.903087L42.8695 16.3198C44.069 17.5239 44.069 19.4761 42.8695 20.6802L27.5124 36.0969C26.3129 37.301 24.3682 37.301 23.1687 36.0969C21.9692 34.8928 21.9692 32.9405 23.1687 31.7364L33.2826 21.5833H3.84053C2.14423 21.5833 0.769104 20.2029 0.769104 18.5C0.769104 16.7971 2.14423 15.4167 3.84053 15.4167H33.2826L23.1687 5.26358C21.9692 4.05946 21.9692 2.1072 23.1687 0.903087Z" fill="#02FF00" class="svelte-1hhgby3"></path></svg></div> <p class="tokenomics-text svelte-1hhgby3">Staking | Profit share | Buy Back</p></div> <div class="tokenomics-text-container svelte-1hhgby3"><div class="utilities-title-wrapper svelte-1hhgby3"><h2 class="svelte-1hhgby3">Planned Utilities</h2> <svg class="arrow-svg svelte-1hhgby3" xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1687 0.903087C24.3682 -0.301029 26.3129 -0.301029 27.5124 0.903087L42.8695 16.3198C44.069 17.5239 44.069 19.4761 42.8695 20.6802L27.5124 36.0969C26.3129 37.301 24.3682 37.301 23.1687 36.0969C21.9692 34.8928 21.9692 32.9405 23.1687 31.7364L33.2826 21.5833H3.84053C2.14423 21.5833 0.769104 20.2029 0.769104 18.5C0.769104 16.7971 2.14423 15.4167 3.84053 15.4167H33.2826L23.1687 5.26358C21.9692 4.05946 21.9692 2.1072 23.1687 0.903087Z" fill="#02FF00" class="svelte-1hhgby3"></path></svg></div> <p class="tokenomics-text svelte-1hhgby3">Platform token-gating</p></div></div></div>',rt=u(),J=o("div"),w=o("div"),re=o("div"),re.innerHTML=`<img class="logo as-title svelte-1hhgby3" src="sir_bofi.svg" alt=""/> <h2 class="svelte-1hhgby3">Introduction</h2> <p class="svelte-1hhgby3">This platform is advertised to hand-picked communities. The platform “Sir Bofi” finds price
                    differences (potential arbitrage trading opportunities) over 600+ exchanges and 9000+
                    cryptocurrencies in <span class="hl svelte-1hhgby3">matter of seconds!</span> It is a co-pilot for knowledgeable
                    crypto-dedicated individuals looking to advance their markets overview and lurk in the shadows for
                    opportunities (<a class="inline svelte-1hhgby3" target="_blank" href="https://rumvessel.gitbook.io/sir-bofi/">Documentation</a>).
                    I am willing to provide the native version of the software through one time fee thanks to releasing
                    the platform without using hosting, domain names or external recurring fee services.</p>`,ct=u(),we=o("div"),we.innerHTML=`<h2 class="svelte-1hhgby3">Confirmed safety</h2> <h3 class="svelte-1hhgby3">Microsoft EV Code signing certificate</h3> <p class="svelte-1hhgby3">We have successfully acquired the Microsoft Windows EV Code Signing Certificate and we have
                    signed the application with it. This proves that the application is from a <span class="hl svelte-1hhgby3">known
                    and trusted publisher!</span></p> <h3 class="svelte-1hhgby3">Availability</h3> <p class="svelte-1hhgby3">Windows portable executable version of the application is <span class="hl svelte-1hhgby3">signed and available for
                    download</span> - Demo version on this very webpage and the premium version after purchasing an
                    account. MacOS version is currently not available due to the inexistent collaboration from
                    Apple’s side on even successfully beginning the validation process of applying for the Code
                    Signing certificate for their operating systems.</p>`,ht=u(),ke=o("div"),ke.innerHTML=`<h2 class="svelte-1hhgby3"><span class="hl svelte-1hhgby3">Claiming process</span></h2> <p class="svelte-1hhgby3">In case there is a position available you can purchase it from the button “Purchase account”. After
                    that you&#39;ll receive an email with your personal account setup details and the download link to the
                    full version of Sir Bofi. Thats it - you have it :D.</p>`,dt=u(),Le=o("div"),Le.innerHTML=`<h2 class="svelte-1hhgby3">Inspiration</h2> <p class="svelte-1hhgby3">Sir Bofi was inspired from many cases of people like SBF
                    <span class="hl svelte-1hhgby3"><a class="inline svelte-1hhgby3" target="_blank" href="https://www.forbes.com/sites/stevenehrlich/2021/10/06/the-richest-under-30-in-the-world-all-thanks-to-crypto">getting rich from abnormal opportunities</a></span> of
                    trading price aribtrage. In most of those types of cases they discovered the opportunities
                    accidentally and thanks to working closely with markets daily. The name Sir Bofi comes from initial
                    name Cyrbofi which is a combination of letters from the phrase “[C]r[y]pto a[rb]itrage
                    [o]pportunity [fi]nder”.</p>`,ut=u(),N=o("div"),H.c(),Ge=u(),y&&y.c(),bt=u(),Ce=o("div"),Ce.innerHTML='<a href="#landing" class="back-up-button svelte-1hhgby3"><p style="margin-top: -4px;" class="svelte-1hhgby3">↑</p></a>',ft=u(),Te=o("div"),Te.innerHTML=`<a href="https://t.me/SirBofiportal" target="_blank" class="base-row strict link-and-icon svelte-1hhgby3"><img src="telegram.svg" alt="" class="svelte-1hhgby3"/>
            Telegram</a> <p class="xs-text svelte-1hhgby3">© 2023 RumVessel. All rights reserved.</p>`,l(a,"class","relative svelte-1hhgby3"),l(_,"href","#landing"),l(_,"class","svelte-1hhgby3"),l(x,"href","#demonstration"),l(x,"class","svelte-1hhgby3"),l(B,"href","#101"),l(B,"class","svelte-1hhgby3"),l(P,"href","#tokenomics"),l(P,"class","svelte-1hhgby3"),l(V,"href","#readme"),l(V,"class","svelte-1hhgby3"),l(c,"class",ne=Tt("nav-items"+(t[2]?" open":""))+" svelte-1hhgby3"),l(r,"class","nav svelte-1hhgby3"),l(A,"class","burger svelte-1hhgby3"),l(A,"role","button"),l(A,"tabindex","0"),l(n,"class","top-bar svelte-1hhgby3"),l(s,"class","overlay-items-container svelte-1hhgby3"),l(fe,"class","xxl svelte-1hhgby3"),l(ie,"href","#demonstration"),l(ie,"class","svelte-1hhgby3"),l(I,"class","spinner-with-button-wrapper svelte-1hhgby3"),l(X,"class","buttons-wrapper svelte-1hhgby3"),l(R,"class","landing-title-container svelte-1hhgby3"),l(be,"class","primary-container-content-wrapper svelte-1hhgby3"),l(ve,"class","ambient-wrapper svelte-1hhgby3"),l(G,"id","landing"),l(G,"class","primary-container svelte-1hhgby3"),l(pe,"class","svelte-1hhgby3"),Z.controls=!0,l(Z,"controlslist","nodownload"),l(Z,"class","svelte-1hhgby3"),l(ye,"class","svelte-1hhgby3"),l(j,"class","big-button transparent svelte-1hhgby3"),l(U,"href","Sir_Bofi0.6.0.exe"),l(U,"download",""),l(U,"class","svelte-1hhgby3"),l(O,"class","spinner-with-button-wrapper svelte-1hhgby3"),l(K,"class","buttons-wrapper svelte-1hhgby3"),l(E,"class","col center svelte-1hhgby3"),l(E,"id","demonstration"),l(ge,"class","secondary-container dark svelte-1hhgby3"),l(oe,"id","101"),l(oe,"class","section svelte-1hhgby3"),l(De,"class","big svelte-1hhgby3"),l(_e,"class","section svelte-1hhgby3"),l(q,"href","Sir_Bofi0.6.0.exe"),l(q,"download",""),l(q,"class","svelte-1hhgby3"),l(D,"class","spinner-with-button-wrapper svelte-1hhgby3"),l(z,"class","buttons-wrapper svelte-1hhgby3"),l(me,"class","svelte-1hhgby3"),l(Fe,"class","big svelte-1hhgby3"),l(ae,"id","tokenomics"),l(ae,"class","section tokenomics-section svelte-1hhgby3"),l(g,"class","secondary-container main-points-section svelte-1hhgby3"),l(re,"class","text-section svelte-1hhgby3"),l(re,"id","readme"),l(we,"class","text-section svelte-1hhgby3"),l(ke,"class","text-section svelte-1hhgby3"),l(Le,"class","text-section svelte-1hhgby3"),l(N,"class","spinner-with-button-wrapper svelte-1hhgby3"),l(w,"class","readme-text-container svelte-1hhgby3"),l(Ce,"class","back-up-button-wrapper svelte-1hhgby3"),l(J,"class","secondary-container relative svelte-1hhgby3"),l(Te,"class","base-row strict footer-container svelte-1hhgby3"),l(e,"class","svelte-1hhgby3")},m(d,p){v(d,e,p),i(e,s),i(s,n),i(n,a),i(n,h),i(n,r),i(r,c),i(c,_),i(c,b),i(c,x),i(c,m),i(c,B),i(c,W),i(c,P),i(c,Pe),i(c,V),i(n,Ae),i(n,A),i(e,Re),i(e,G),i(G,be),i(be,R),i(R,fe),i(R,Xe),i(R,X),i(X,ie),i(X,Ze),i(X,I),M.m(I,null),i(I,Ee),k&&k.m(I,null),i(G,Ke),i(G,ve),i(e,ze),i(e,ge),i(ge,E),i(E,pe),i(E,Je),i(E,Z),i(E,Qe),i(E,K),i(K,U),i(U,j),F.m(j,null),i(j,Ie),i(j,ye),i(K,Ye),i(K,O),$.m(O,null),i(O,Oe),L&&L.m(O,null),i(e,et),i(e,g),i(g,oe),i(g,tt),i(g,De),i(g,st),i(g,_e),i(g,lt),i(g,z),i(z,q),i(z,nt),i(z,D),S.m(D,null),i(D,Ne),C&&C.m(D,null),i(g,it),i(g,me),i(g,ot),i(g,Fe),i(g,at),i(g,ae),i(e,rt),i(e,J),i(J,w),i(w,re),i(w,ct),i(w,we),i(w,ht),i(w,ke),i(w,dt),i(w,Le),i(w,ut),i(w,N),H.m(N,null),i(N,Ge),y&&y.m(N,null),i(J,bt),i(J,Ce),i(e,ft),i(e,Te),Ue||(vt=[T(A,"click",t[6]),T(A,"keydown",ms),T(U,"click",t[7]),T(q,"click",t[7])],Ue=!0)},p(d,[p]){p&4&&ne!==(ne=Tt("nav-items"+(d[2]?" open":""))+" svelte-1hhgby3")&&l(c,"class",ne),Me===(Me=gt(d))&&M?M.p(d,p):(M.d(1),M=Me(d),M&&(M.c(),M.m(I,Ee))),Q!==(Q=pt(d))&&(k&&k.d(1),k=Q&&Q(d),k&&(k.c(),k.m(I,null))),$e!==($e=yt(d))&&(F.d(1),F=$e(d),F&&(F.c(),F.m(j,Ie))),Se===(Se=_t(d))&&$?$.p(d,p):($.d(1),$=Se(d),$&&($.c(),$.m(O,Oe))),Y!==(Y=mt(d))&&(L&&L.d(1),L=Y&&Y(d),L&&(L.c(),L.m(O,null))),He===(He=wt(d))&&S?S.p(d,p):(S.d(1),S=He(d),S&&(S.c(),S.m(D,Ne))),ee!==(ee=kt(d))&&(C&&C.d(1),C=ee&&ee(d),C&&(C.c(),C.m(D,null))),xe===(xe=Lt(d))&&H?H.p(d,p):(H.d(1),H=xe(d),H&&(H.c(),H.m(N,Ge))),d[0]?y||(y=St(),y.c(),y.m(N,null)):y&&(y.d(1),y=null)},i:he,o:he,d(d){d&&f(e),M.d(),k&&k.d(),F.d(),$.d(),L&&L.d(),S.d(),C&&C.d(),H.d(),y&&y.d(),Ue=!1,ue(vt)}}}let Pt="GTM-T38BF9D4";function ys(){let t=document.createElement("script");t.src=`https://www.googletagmanager.com/gtag/js?id=${Pt}`,document.head.append(t)}function _s(){window.dataLayer=window.dataLayer||[];function t(){window.dataLayer.push(arguments)}t("js",new Date),t("config",Pt)}const ms=()=>{};function ws(t,e,s){jt(()=>{ys(),_s()});let n=!1,a=!1;const h=function(A){return s(0,n=!0),new XMLHttpRequest,setTimeout(()=>{s(0,n=!1),s(1,a=!0)},Math.floor(Math.random()*2e3)+500),!1},r=function(){return window.open("https://buy.stripe.com/fZedSn9pX97DbXq6oo","_blank"),!0};let c=!1;const _=function(){s(2,c=!c)};let b=!1;return[n,a,c,b,h,r,_,function(){b||(s(3,b=!0),setTimeout(()=>{s(3,b=!1)},2e3))},()=>h(),()=>r(),()=>h(),()=>r(),()=>h(),()=>r(),()=>h(),()=>r()]}class ks extends Yt{constructor(e){super(),Qt(this,e,ws,ps,It,{})}}new ks({target:document.getElementById("app")});
