var At=Object.defineProperty;var Et=(t,e,s)=>e in t?At(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var qe=(t,e,s)=>(Et(t,typeof e!="symbol"?e+"":e,s),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const v of a)if(v.type==="childList")for(const r of v.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const v={};return a.integrity&&(v.integrity=a.integrity),a.referrerPolicy&&(v.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?v.credentials="include":a.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function n(a){if(a.ep)return;a.ep=!0;const v=s(a);fetch(a.href,v)}})();function ve(){}function St(t){return t()}function Lt(){return Object.create(null)}function ue(t){t.forEach(St)}function Ht(t){return typeof t=="function"}function It(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Be;function Ot(t,e){return t===e?!0:(Be||(Be=document.createElement("a")),Be.href=e,t===Be.href)}function Dt(t){return Object.keys(t).length===0}function Ct(t){return t??""}function i(t,e){t.appendChild(e)}function p(t,e,s){t.insertBefore(e,s||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function o(t){return document.createElement(t)}function Ft(t){return document.createTextNode(t)}function u(){return Ft(" ")}function C(t,e,s,n){return t.addEventListener(e,s,n),()=>t.removeEventListener(e,s,n)}function l(t,e,s){s==null?t.removeAttribute(e):t.getAttribute(e)!==s&&t.setAttribute(e,s)}function Nt(t){return Array.from(t.childNodes)}function Ut(t,e,s,n){s==null?t.style.removeProperty(e):t.style.setProperty(e,s,n?"important":"")}let de;function ce(t){de=t}function jt(){if(!de)throw new Error("Function called outside component initialization");return de}function qt(t){jt().$$.on_mount.push(t)}const se=[],Tt=[];let le=[];const Mt=[],Gt=Promise.resolve();let We=!1;function Wt(){We||(We=!0,Gt.then(Bt))}function Ve(t){le.push(t)}const Ge=new Set;let te=0;function Bt(){if(te!==0)return;const t=de;do{try{for(;te<se.length;){const e=se[te];te++,ce(e),Vt(e.$$)}}catch(e){throw se.length=0,te=0,e}for(ce(null),se.length=0,te=0;Tt.length;)Tt.pop()();for(let e=0;e<le.length;e+=1){const s=le[e];Ge.has(s)||(Ge.add(s),s())}le.length=0}while(se.length);for(;Mt.length;)Mt.pop()();We=!1,Ge.clear(),ce(t)}function Vt(t){if(t.fragment!==null){t.update(),ue(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ve)}}function Rt(t){const e=[],s=[];le.forEach(n=>t.indexOf(n)===-1?e.push(n):s.push(n)),s.forEach(n=>n()),le=e}const Xt=new Set;function Zt(t,e){t&&t.i&&(Xt.delete(t),t.i(e))}function Kt(t,e,s){const{fragment:n,after_update:a}=t.$$;n&&n.m(e,s),Ve(()=>{const v=t.$$.on_mount.map(St).filter(Ht);t.$$.on_destroy?t.$$.on_destroy.push(...v):ue(v),t.$$.on_mount=[]}),a.forEach(Ve)}function zt(t,e){const s=t.$$;s.fragment!==null&&(Rt(s.after_update),ue(s.on_destroy),s.fragment&&s.fragment.d(e),s.on_destroy=s.fragment=null,s.ctx=[])}function Jt(t,e){t.$$.dirty[0]===-1&&(se.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Qt(t,e,s,n,a,v,r,c=[-1]){const g=de;ce(t);const h=t.$$={fragment:null,ctx:[],props:v,update:ve,not_equal:a,bound:Lt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(g?g.$$.context:[])),callbacks:Lt(),dirty:c,skip_bound:!1,root:e.target||g.$$.root};r&&r(h.root);let H=!1;if(h.ctx=s?s(t,e.props||{},(x,B,...W)=>{const P=W.length?W[0]:B;return h.ctx&&a(h.ctx[x],h.ctx[x]=P)&&(!h.skip_bound&&h.bound[x]&&h.bound[x](P),H&&Jt(t,x)),B}):[],h.update(),H=!0,ue(h.before_update),h.fragment=n?n(h.ctx):!1,e.target){if(e.hydrate){const x=Nt(e.target);h.fragment&&h.fragment.l(x),x.forEach(f)}else h.fragment&&h.fragment.c();e.intro&&Zt(t.$$.fragment),Kt(t,e.target,e.anchor),Bt()}ce(g)}class Yt{constructor(){qe(this,"$$");qe(this,"$$set")}$destroy(){zt(this,1),this.$destroy=ve}$on(e,s){if(!Ht(s))return ve;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(s),()=>{const a=n.indexOf(s);a!==-1&&n.splice(a,1)}}$set(e){this.$$set&&!Dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const es="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(es);function ts(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[9]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function ss(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[8]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function ls(t){let e;return{c(){e=o("span"),e.textContent="Available",l(e,"class","text-glow svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function ns(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function is(t){let e,s;return{c(){e=o("img"),Ot(e.src,s="windows_logo.svg")||l(e,"src",s),l(e,"width","24px"),l(e,"height","24px"),Ut(e,"margin-right","8px"),l(e,"alt",""),l(e,"class","svelte-7x0vh1")},m(n,a){p(n,e,a)},d(n){n&&f(e)}}}function os(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function as(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[11]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function rs(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[10]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function cs(t){let e;return{c(){e=o("span"),e.textContent="Available",l(e,"class","text-glow svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function vs(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function ds(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[13]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function us(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" colored big-button svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[12]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" colored big-button svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function hs(t){let e;return{c(){e=o("span"),e.textContent="Available",l(e,"class","text-glow svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function fs(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function ps(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Purchase account",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[15]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function bs(t){let e,s,n,a,v;return{c(){e=o("button"),s=o("span"),s.textContent="Give me access",l(s,"class","svelte-7x0vh1"),l(e,"class",n=(t[0]?"disabled":"")+" big-button colored svelte-7x0vh1")},m(r,c){p(r,e,c),i(e,s),a||(v=C(e,"click",t[14]),a=!0)},p(r,c){c&1&&n!==(n=(r[0]?"disabled":"")+" big-button colored svelte-7x0vh1")&&l(e,"class",n)},d(r){r&&f(e),a=!1,v()}}}function $t(t){let e;return{c(){e=o("span"),l(e,"class","spinner svelte-7x0vh1")},m(s,n){p(s,e,n)},d(s){s&&f(e)}}}function _s(t){let e,s,n,a,v,r,c,g,h,H,x,B,W,P,Pe,V,ne,Ae,A,Re,U,he,R,fe,Xe,X,ie,Ze,I,Ee,Ke,pe,ze,be,E,_e,Je,Z,Qe,K,j,q,Ie,me,Ye,O,Oe,et,b,oe,tt,De,st,ge,lt,z,G,nt,D,Fe,it,xe,ot,Ne,at,ae,rt,J,w,re,ct,we,vt,ke,dt,ye,ut,F,Ue,ht,Le,ft,Ce,je,pt;function bt(d,_){return d[1]?ts:ss}let Te=bt(t),T=Te(t);function _t(d,_){if(d[0])return ns;if(d[1])return ls}let Q=_t(t),k=Q&&Q(t);function mt(d,_){return d[3]?os:is}let Me=mt(t),N=Me(t);function gt(d,_){return d[1]?as:rs}let $e=gt(t),M=$e(t);function xt(d,_){if(d[0])return vs;if(d[1])return cs}let Y=xt(t),y=Y&&Y(t);function wt(d,_){return d[1]?ds:us}let Se=wt(t),$=Se(t);function kt(d,_){if(d[0])return fs;if(d[1])return hs}let ee=kt(t),L=ee&&ee(t);function yt(d,_){return d[1]?ps:bs}let He=yt(t),S=He(t),m=t[0]&&$t();return{c(){e=o("main"),s=o("div"),n=o("div"),a=o("div"),a.innerHTML=`<a href="/" class="absolute logo navbar svelte-7x0vh1"><img class=" svelte-7x0vh1" src="sir_bofi.svg" alt="Sir Bofi logo"/>
                    Sir Bofi</a>`,v=u(),r=o("div"),c=o("div"),g=o("a"),g.innerHTML='<button class="bones svelte-7x0vh1">Home</button>',h=u(),H=o("a"),H.innerHTML='<button class="bones svelte-7x0vh1">Demo</button>',x=u(),B=o("a"),B.innerHTML='<button class="bones svelte-7x0vh1">About</button>',W=u(),P=o("a"),P.innerHTML='<button class="bones svelte-7x0vh1">Tokenomics</button>',Pe=u(),V=o("a"),V.innerHTML='<button class="bones svelte-7x0vh1">Overview</button>',Ae=u(),A=o("div"),A.innerHTML='<img src="burger.svg" alt="" class="svelte-7x0vh1"/>',Re=u(),U=o("div"),he=o("div"),R=o("div"),fe=o("h1"),fe.innerHTML='Find crypto arbitrage possibilities in <span class="hl green svelte-7x0vh1">seconds</span>',Xe=u(),X=o("div"),ie=o("a"),ie.innerHTML='<button class="big-button transparent svelte-7x0vh1">What is it?</button>',Ze=u(),I=o("div"),T.c(),Ee=u(),k&&k.c(),Ke=u(),pe=o("div"),pe.innerHTML='<div class="ambient svelte-7x0vh1">@</div>',ze=u(),be=o("div"),E=o("div"),_e=o("h1"),_e.textContent="Demonstration",Je=u(),Z=o("video"),Z.innerHTML='<source src="sir_bofi_demo.mp4" type="video/mp4" class="svelte-7x0vh1"/><track kind="captions" default="" src="" class="svelte-7x0vh1"/>',Qe=u(),K=o("div"),j=o("a"),q=o("button"),N.c(),Ie=u(),me=o("span"),me.textContent="Download free demo version",Ye=u(),O=o("div"),M.c(),Oe=u(),y&&y.c(),et=u(),b=o("div"),oe=o("div"),oe.innerHTML=`<h1 class="svelte-7x0vh1">Simple to use</h1> <div class="base-row main-points-row svelte-7x0vh1"><div class="base-col point-pad svelte-7x0vh1"><img src="wallet.svg" alt="" class="svelte-7x0vh1"/> <h3 class="svelte-7x0vh1">Purchase</h3> <p class="svelte-7x0vh1">Purchase private access,
                        receive software and credentials.</p></div> <div class="base-col point-pad svelte-7x0vh1"><img src="key.svg" alt="" class="svelte-7x0vh1"/> <h3 class="svelte-7x0vh1">Set up</h3> <p class="svelte-7x0vh1">Download the software,
                        log in with the credentials provided.</p></div> <div class="base-col point-pad svelte-7x0vh1"><img src="rocket.svg" alt="" class="svelte-7x0vh1"/> <h3 class="svelte-7x0vh1">Launch</h3> <p class="svelte-7x0vh1">Apply needed filters,
                        trigger the analysis,
                        find results in seconds.</p></div></div>`,tt=u(),De=o("hr"),st=u(),ge=o("div"),ge.innerHTML='<h2 class="xxl svelte-7x0vh1">Sir Bofi 101</h2> <div class="base-row main-points-row svelte-7x0vh1"><div class="base-col point-pad svelte-7x0vh1"><img src="lightning.svg" alt="" class="svelte-7x0vh1"/> <h3 class="svelte-7x0vh1">Prompt</h3> <p class="svelte-7x0vh1">Opportunities found in seconds between 9000+ currencies.</p></div> <div class="base-col point-pad svelte-7x0vh1"><img src="search.svg" alt="" class="svelte-7x0vh1"/> <h3 class="svelte-7x0vh1">Extensive</h3> <p class="svelte-7x0vh1">Trading pairs data from 600+ exchanges at your fingertips.</p></div> <div class="base-col point-pad svelte-7x0vh1"><img src="cog.svg" alt="" class="svelte-7x0vh1"/> <h3 class="svelte-7x0vh1">Seamless</h3> <p class="svelte-7x0vh1">Authenticate, filter and trigger the analysis with ease.</p></div></div>',lt=u(),z=o("div"),G=o("a"),G.innerHTML='<button class="big-button transparent svelte-7x0vh1"><img src="windows_logo.svg" width="14px" height="14px" style="margin-right: 8px" alt="" class="svelte-7x0vh1"/> <span class="svelte-7x0vh1">Download free demo version</span></button>',nt=u(),D=o("div"),$.c(),Fe=u(),L&&L.c(),it=u(),xe=o("div"),xe.innerHTML='-100€ coupon code: <span class="text-glow svelte-7x0vh1">IKnowWhatImDoing</span>',ot=u(),Ne=o("hr"),at=u(),ae=o("div"),ae.innerHTML='<h1 class="svelte-7x0vh1">$BOFI Tokenomics</h1> <div class="base-row tokenomics-row svelte-7x0vh1"><img class="tokenomics-chart svelte-7x0vh1" src="tokenomics.svg" alt=""/> <div class="base-col token-utilities-wrapper svelte-7x0vh1"><div class="tokenomics-text-container svelte-7x0vh1"><div class="utilities-title-wrapper svelte-7x0vh1"><h2 class="svelte-7x0vh1">Initial Utilities</h2> <svg class="arrow-svg svelte-7x0vh1" xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1687 0.903087C24.3682 -0.301029 26.3129 -0.301029 27.5124 0.903087L42.8695 16.3198C44.069 17.5239 44.069 19.4761 42.8695 20.6802L27.5124 36.0969C26.3129 37.301 24.3682 37.301 23.1687 36.0969C21.9692 34.8928 21.9692 32.9405 23.1687 31.7364L33.2826 21.5833H3.84053C2.14423 21.5833 0.769104 20.2029 0.769104 18.5C0.769104 16.7971 2.14423 15.4167 3.84053 15.4167H33.2826L23.1687 5.26358C21.9692 4.05946 21.9692 2.1072 23.1687 0.903087Z" fill="#02FF00" class="svelte-7x0vh1"></path></svg></div> <p class="tokenomics-text svelte-7x0vh1">Staking | Profit share | Buy Back</p></div> <div class="tokenomics-text-container svelte-7x0vh1"><div class="utilities-title-wrapper svelte-7x0vh1"><h2 class="svelte-7x0vh1">Planned Utilities</h2> <svg class="arrow-svg svelte-7x0vh1" xmlns="http://www.w3.org/2000/svg" width="44" height="37" viewBox="0 0 44 37" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M23.1687 0.903087C24.3682 -0.301029 26.3129 -0.301029 27.5124 0.903087L42.8695 16.3198C44.069 17.5239 44.069 19.4761 42.8695 20.6802L27.5124 36.0969C26.3129 37.301 24.3682 37.301 23.1687 36.0969C21.9692 34.8928 21.9692 32.9405 23.1687 31.7364L33.2826 21.5833H3.84053C2.14423 21.5833 0.769104 20.2029 0.769104 18.5C0.769104 16.7971 2.14423 15.4167 3.84053 15.4167H33.2826L23.1687 5.26358C21.9692 4.05946 21.9692 2.1072 23.1687 0.903087Z" fill="#02FF00" class="svelte-7x0vh1"></path></svg></div> <p class="tokenomics-text svelte-7x0vh1">Platform token-gating</p></div></div></div>',rt=u(),J=o("div"),w=o("div"),re=o("div"),re.innerHTML=`<img class="logo as-title svelte-7x0vh1" src="sir_bofi.svg" alt=""/> <h2 class="svelte-7x0vh1">Introduction</h2> <p class="svelte-7x0vh1">This platform is advertised to hand-picked communities. The platform “Sir Bofi” finds price
                    differences (potential arbitrage trading opportunities) over 600+ exchanges and 9000+
                    cryptocurrencies in <span class="hl svelte-7x0vh1">matter of seconds!</span> It is a co-pilot for knowledgeable
                    crypto-dedicated individuals looking to advance their markets overview and lurk in the shadows for
                    opportunities (<a class="inline svelte-7x0vh1" target="_blank" href="https://rumvessel.gitbook.io/sir-bofi/">Documentation</a>).
                    I am willing to provide the native version of the software through one time fee thanks to releasing
                    the platform without using hosting, domain names or external recurring fee services.</p>`,ct=u(),we=o("div"),we.innerHTML=`<h2 class="svelte-7x0vh1">Confirmed safety</h2> <h3 class="svelte-7x0vh1">Microsoft EV Code signing certificate</h3> <p class="svelte-7x0vh1">We have successfully acquired the Microsoft Windows EV Code Signing Certificate and we have
                    signed the application with it. This proves that the application is from a <span class="hl svelte-7x0vh1">known
                    and trusted publisher!</span></p> <h3 class="svelte-7x0vh1">Availability</h3> <p class="svelte-7x0vh1">Windows portable executable version of the application is <span class="hl svelte-7x0vh1">signed and available for
                    download</span> - Demo version on this very webpage and the premium version after purchasing an
                    account. MacOS version is currently not available due to the inexistent collaboration from
                    Apple’s side on even successfully beginning the validation process of applying for the Code
                    Signing certificate for their operating systems.</p>`,vt=u(),ke=o("div"),ke.innerHTML=`<h2 class="svelte-7x0vh1"><span class="hl svelte-7x0vh1">Claiming process</span></h2> <p class="svelte-7x0vh1">In case there is a position available you can purchase it from the button “Purchase account”. After
                    that you&#39;ll receive an email with your personal account setup details and the download link to the
                    full version of Sir Bofi. Thats it - you have it :D.</p>`,dt=u(),ye=o("div"),ye.innerHTML=`<h2 class="svelte-7x0vh1">Inspiration</h2> <p class="svelte-7x0vh1">Sir Bofi was inspired from many cases of people like SBF
                    <span class="hl svelte-7x0vh1"><a class="inline svelte-7x0vh1" target="_blank" href="https://www.forbes.com/sites/stevenehrlich/2021/10/06/the-richest-under-30-in-the-world-all-thanks-to-crypto">getting rich from abnormal opportunities</a></span> of
                    trading price aribtrage. In most of those types of cases they discovered the opportunities
                    accidentally and thanks to working closely with markets daily. The name Sir Bofi comes from initial
                    name Cyrbofi which is a combination of letters from the phrase “[C]r[y]pto a[rb]itrage
                    [o]pportunity [fi]nder”.</p>`,ut=u(),F=o("div"),S.c(),Ue=u(),m&&m.c(),ht=u(),Le=o("div"),Le.innerHTML='<a href="#landing" class="back-up-button svelte-7x0vh1"><p style="margin-top: -4px;" class="svelte-7x0vh1">↑</p></a>',ft=u(),Ce=o("div"),Ce.innerHTML=`<a href="https://t.me/SirBofiportal" target="_blank" class="base-row strict link-and-icon svelte-7x0vh1"><img src="telegram.svg" alt="" class="svelte-7x0vh1"/>
            Telegram</a> <p class="xs-text svelte-7x0vh1">© 2023 RumVessel. All rights reserved.</p>`,l(a,"class","relative svelte-7x0vh1"),l(g,"href","#landing"),l(g,"class","svelte-7x0vh1"),l(H,"href","#demonstration"),l(H,"class","svelte-7x0vh1"),l(B,"href","#101"),l(B,"class","svelte-7x0vh1"),l(P,"href","#tokenomics"),l(P,"class","svelte-7x0vh1"),l(V,"href","#readme"),l(V,"class","svelte-7x0vh1"),l(c,"class",ne=Ct("nav-items"+(t[2]?" open":""))+" svelte-7x0vh1"),l(r,"class","nav svelte-7x0vh1"),l(A,"class","burger svelte-7x0vh1"),l(A,"role","button"),l(A,"tabindex","0"),l(n,"class","top-bar svelte-7x0vh1"),l(s,"class","overlay-items-container svelte-7x0vh1"),l(fe,"class","xxl svelte-7x0vh1"),l(ie,"href","#demonstration"),l(ie,"class","svelte-7x0vh1"),l(I,"class","spinner-with-button-wrapper svelte-7x0vh1"),l(X,"class","buttons-wrapper svelte-7x0vh1"),l(R,"class","landing-title-container svelte-7x0vh1"),l(he,"class","primary-container-content-wrapper svelte-7x0vh1"),l(pe,"class","ambient-wrapper svelte-7x0vh1"),l(U,"id","landing"),l(U,"class","primary-container svelte-7x0vh1"),l(_e,"class","svelte-7x0vh1"),Z.controls=!0,l(Z,"controlslist","nodownload"),l(Z,"class","svelte-7x0vh1"),l(me,"class","svelte-7x0vh1"),l(q,"class","big-button transparent svelte-7x0vh1"),l(j,"href","Sir_Bofi0.6.0.exe"),l(j,"download",""),l(j,"class","svelte-7x0vh1"),l(O,"class","spinner-with-button-wrapper svelte-7x0vh1"),l(K,"class","buttons-wrapper svelte-7x0vh1"),l(E,"class","col center svelte-7x0vh1"),l(E,"id","demonstration"),l(be,"class","secondary-container dark svelte-7x0vh1"),l(oe,"id","101"),l(oe,"class","section svelte-7x0vh1"),l(De,"class","big svelte-7x0vh1"),l(ge,"class","section svelte-7x0vh1"),l(G,"href","Sir_Bofi0.6.0.exe"),l(G,"download",""),l(G,"class","svelte-7x0vh1"),l(D,"class","spinner-with-button-wrapper svelte-7x0vh1"),l(z,"class","buttons-wrapper svelte-7x0vh1"),l(xe,"class","svelte-7x0vh1"),l(Ne,"class","big svelte-7x0vh1"),l(ae,"id","tokenomics"),l(ae,"class","section tokenomics-section svelte-7x0vh1"),l(b,"class","secondary-container main-points-section svelte-7x0vh1"),l(re,"class","text-section svelte-7x0vh1"),l(re,"id","readme"),l(we,"class","text-section svelte-7x0vh1"),l(ke,"class","text-section svelte-7x0vh1"),l(ye,"class","text-section svelte-7x0vh1"),l(F,"class","spinner-with-button-wrapper svelte-7x0vh1"),l(w,"class","readme-text-container svelte-7x0vh1"),l(Le,"class","back-up-button-wrapper svelte-7x0vh1"),l(J,"class","secondary-container relative svelte-7x0vh1"),l(Ce,"class","base-row strict footer-container svelte-7x0vh1"),l(e,"class","svelte-7x0vh1")},m(d,_){p(d,e,_),i(e,s),i(s,n),i(n,a),i(n,v),i(n,r),i(r,c),i(c,g),i(c,h),i(c,H),i(c,x),i(c,B),i(c,W),i(c,P),i(c,Pe),i(c,V),i(n,Ae),i(n,A),i(e,Re),i(e,U),i(U,he),i(he,R),i(R,fe),i(R,Xe),i(R,X),i(X,ie),i(X,Ze),i(X,I),T.m(I,null),i(I,Ee),k&&k.m(I,null),i(U,Ke),i(U,pe),i(e,ze),i(e,be),i(be,E),i(E,_e),i(E,Je),i(E,Z),i(E,Qe),i(E,K),i(K,j),i(j,q),N.m(q,null),i(q,Ie),i(q,me),i(K,Ye),i(K,O),M.m(O,null),i(O,Oe),y&&y.m(O,null),i(e,et),i(e,b),i(b,oe),i(b,tt),i(b,De),i(b,st),i(b,ge),i(b,lt),i(b,z),i(z,G),i(z,nt),i(z,D),$.m(D,null),i(D,Fe),L&&L.m(D,null),i(b,it),i(b,xe),i(b,ot),i(b,Ne),i(b,at),i(b,ae),i(e,rt),i(e,J),i(J,w),i(w,re),i(w,ct),i(w,we),i(w,vt),i(w,ke),i(w,dt),i(w,ye),i(w,ut),i(w,F),S.m(F,null),i(F,Ue),m&&m.m(F,null),i(J,ht),i(J,Le),i(e,ft),i(e,Ce),je||(pt=[C(A,"click",t[6]),C(A,"keydown",xs),C(j,"click",t[7]),C(G,"click",t[7])],je=!0)},p(d,[_]){_&4&&ne!==(ne=Ct("nav-items"+(d[2]?" open":""))+" svelte-7x0vh1")&&l(c,"class",ne),Te===(Te=bt(d))&&T?T.p(d,_):(T.d(1),T=Te(d),T&&(T.c(),T.m(I,Ee))),Q!==(Q=_t(d))&&(k&&k.d(1),k=Q&&Q(d),k&&(k.c(),k.m(I,null))),Me!==(Me=mt(d))&&(N.d(1),N=Me(d),N&&(N.c(),N.m(q,Ie))),$e===($e=gt(d))&&M?M.p(d,_):(M.d(1),M=$e(d),M&&(M.c(),M.m(O,Oe))),Y!==(Y=xt(d))&&(y&&y.d(1),y=Y&&Y(d),y&&(y.c(),y.m(O,null))),Se===(Se=wt(d))&&$?$.p(d,_):($.d(1),$=Se(d),$&&($.c(),$.m(D,Fe))),ee!==(ee=kt(d))&&(L&&L.d(1),L=ee&&ee(d),L&&(L.c(),L.m(D,null))),He===(He=yt(d))&&S?S.p(d,_):(S.d(1),S=He(d),S&&(S.c(),S.m(F,Ue))),d[0]?m||(m=$t(),m.c(),m.m(F,null)):m&&(m.d(1),m=null)},i:ve,o:ve,d(d){d&&f(e),T.d(),k&&k.d(),N.d(),M.d(),y&&y.d(),$.d(),L&&L.d(),S.d(),m&&m.d(),je=!1,ue(pt)}}}let Pt="GTM-T38BF9D4";function ms(){let t=document.createElement("script");t.src=`https://www.googletagmanager.com/gtag/js?id=${Pt}`,document.head.append(t)}function gs(){window.dataLayer=window.dataLayer||[];function t(){window.dataLayer.push(arguments)}t("js",new Date),t("config",Pt)}const xs=()=>{};function ws(t,e,s){qt(()=>{ms(),gs()});let n=!1,a=!1;const v=function(A){return s(0,n=!0),new XMLHttpRequest,setTimeout(()=>{s(0,n=!1),s(1,a=!0)},Math.floor(Math.random()*2e3)+500),!1},r=function(){return window.open("https://buy.stripe.com/fZedSn9pX97DbXq6oo","_blank"),!0};let c=!1;const g=function(){s(2,c=!c)};let h=!1;return[n,a,c,h,v,r,g,function(){h||(s(3,h=!0),setTimeout(()=>{s(3,h=!1)},2e3))},()=>v(),()=>r(),()=>v(),()=>r(),()=>v(),()=>r(),()=>v(),()=>r()]}class ks extends Yt{constructor(e){super(),Qt(this,e,ws,_s,It,{})}}new ks({target:document.getElementById("app")});
