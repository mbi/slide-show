/* <slide-show> 
   1.0.0
   By Stephen Band
   Built 2022-04-30 21:04 */

var mt=Object.getOwnPropertySymbols;var _t=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var ht=(t,e)=>{var n={};for(var o in t)_t.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&mt)for(var o of mt(t))e.indexOf(o)<0&&Rt.call(t,o)&&(n[o]=t[o]);return n};function D(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Kt=Array.prototype;function Wt(t,e){return typeof t=="function"?t.apply(null,e):t}function dt(t,e,n){n=n||t.length;var o=n===1?e?t:D(t):D(function(r){return dt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Wt(o(i),Kt.slice.call(arguments,1))}}var a=dt;function R(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var Ze=a(R,!0);function K(t){return document.getElementById(t)||void 0}function E(t){return t.tagName&&t.tagName.toLowerCase()}function $t(t,e){return e.matches?e.matches(t):e.matchesSelector?e.matchesSelector(t):e.webkitMatchesSelector?e.webkitMatchesSelector(t):e.mozMatchesSelector?e.mozMatchesSelector(t):e.msMatchesSelector?e.msMatchesSelector(t):e.oMatchesSelector?e.oMatchesSelector(t):E(e)===t}var l=a($t,!0);function gt(t,e){var n=arguments[2];if(!(!e||e===document||e===n||e.nodeType===11))return e=e.correspondingUseElement||e,l(t,e)?e:gt(t,e.parentNode,n)}var yt=a(gt,!0);function W(t){var e=t.id;if(!e){do e=Math.ceil(Math.random()*1e5);while(document.getElementById(e));t.id=e}return e}function wt(t){return t.nodeType===1}function Zt(t){return(/^\//.test(t)?"":"/")+t}function S(t){var e=window.location;return(!t.hostname||e.hostname===t.hostname)&&e.pathname===Zt(t.pathname)}function $(t){return t}function p(){}var Vt=Object.freeze;function vt(){return this}var v=Vt({shift:p,push:p,forEach:p,join:function(){return""},map:vt,filter:vt,reduce:function(t,e){return e},length:0,each:p,pipe:$,start:p,stop:p,done:p,valueOf:function(){return null}});function Z(t){return t&&t[Symbol.iterator]}var Jt=Object.assign;function Qt(t){return t.stop?t.stop():t()}function Xt(t){t.forEach(Qt),t.length=0}function b(){}Jt(b.prototype,{stop:function(){return this.stopables&&Xt(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var Yt=Object.assign;function P(t){b.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,P(n)}function c(){}Yt(c.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return P(this[0]),this}});var m=Object.assign,g=Object.create;function O(t,e){e!==void 0&&t[0].push(e)}function te(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];P(e)}else t.stop()}function s(t){this.input=t}m(s.prototype,b.prototype,{push:function(t){O(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new bt(this,t)},filter:function(t){return new xt(this,t)},flatMap:function(t){return new Et(this,t)},take:function(t){return new St(this,t)},each:function(t){return new At(this,t)},reduce:function(t,e){return new kt(this,t,e)},scan:function(t,e){return new Ct(this,t,e)},stop:function(){return te(this.input,this),this}});function bt(t,e){this.input=t,this.fn=e}bt.prototype=m(g(s.prototype),{push:function(e){let n=this.fn;O(this,n(e))}});function xt(t,e){this.input=t,this.fn=e}xt.prototype=m(g(s.prototype),{push:function(e){this.fn(e)&&O(this,e)}});function Et(t,e){this.input=t,this.fn=e}Et.prototype=m(g(s.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(Z(o))for(let r of o)O(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function St(t,e){this.input=t,this.count=e}St.prototype=m(g(s.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function kt(t,e,n){return this.input=t,this.fn=e,this.value=n,t.pipe(this),n}kt.prototype=m(g(s.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t)}});function Ct(t,e,n){this.input=t,this.fn=e,this.value=n}Ct.prototype=m(g(s.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function At(t,e){this.input=t,this.push=e,t.pipe(this)}At.prototype=m(g(s.prototype),{each:null,reduce:null,pipe:null});var ee=Array.prototype,ne=Object.assign,oe=Object.create;function k(t){this.buffer=t||[]}k.prototype=ne(oe(s.prototype),c.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(ee.shift.apply(this.buffer));return this.buffer=this[0],t}});var re=Object.assign,ie=Object.create;function C(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(v)}C.prototype=re(ie(s.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var se=Object.assign;function T(t){this.promise=t}se(T.prototype,c.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){c.prototype.stop.apply(this,arguments),this[0]=v}});var Dt=Object.assign,Pt=Object.keys;function Bt(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=Pt(o).length===r.length))&&i.push(Dt({},o))}function j(t){this.sources=t}Dt(j.prototype,c.prototype,{pipe:function(t){let e=this.sources;this.values={},this.names=Pt(e),this.active=!1,this[0]=t;for(let n in e){let o=e[n];o.each?t.done(o.each(r=>Bt(this,n,r))):o.then?o.then(r=>Bt(this,n,r)):console.log("Todo: combine() raw values ?")}}});var ae=Object.assign;function L(t){this.inputs=t}ae(L.prototype,c.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.each)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}}});var J=Array.prototype,ce=Object.assign;function ue(t){return t.length>0}function fe(t,e,n){return t[n]=e.shift(),t}function pe(t){return[]}function V(t,e,n,o){n.push(o),e.every(ue)&&t.push(e.reduce(fe,{}))}function M(t){this.inputs=t,this.buffers=J.map.call(t,pe)}ce(M.prototype,c.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,J.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(u=>V(t,n,i,u))):o.then?o.then(u=>V(t,n,i,u)):J.forEach.call(o,u=>V(t,n,i,u))})}});var le=Array.prototype,Ot=Object.assign;function me(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var Tt=Ot(s,{of:function(){return new k(le.slice.apply(arguments))},from:function(t){return t.pipe?new s(t):t.then?new s(new T(t)):typeof t.length=="number"?new k(t):me(t)},broadcast:function(e){return new C(v,e)},combine:function(e){return new s(new j(e))},merge:function(){return new s(new L(arguments))},zip:function(){return new s(new M(arguments))}});Ot(s.prototype,{broadcast:function(t){return new C(this,t)}});var he=Object.assign,de=/\s+/;function N(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var jt=0;window.addEventListener("click",t=>jt=t.timeStamp);function ge(t,e){return t.node.addEventListener(e,t,t.options),t}function ye(t,e){return t.node.removeEventListener(e,t),t}function Lt(t,e,n){this.types=t.split(de),this.options=e,this.node=n,this.select=e&&e.select}he(Lt.prototype,c.prototype,{pipe:function(t){this[0]=t,this.types.reduce(ge,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=jt)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(ye,this),c.prototype.stop.apply(this,arguments)}});function f(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new Tt(new Lt(t,n,e))}function we(t,e){return e[t]}var h=a(we,!0);function Q(t){return!!t||t!=null&&!Number.isNaN(t)}function X(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var U=h("classList"),y=U;function ve(t,e){U(e).add(t)}function be(t,e){U(e).remove(t)}function xe(t,e){(function n(o){return t--?requestAnimationFrame(n):e(o)})()}function Ee(t,e){var n=U(e);n.add(t),xe(2,()=>n.remove(t))}var Yn=a(ve,!0),to=a(be,!0),eo=a(Ee,!0);function Y(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let u=r.closest(e[i]);if(u)return t[e[i]](u,...arguments)}}}var Se=Object.assign,A={bubbles:!0,cancelable:!0};function ke(t,e){var _;let n=A,o,r,i,u,H,z;return typeof t=="object"?(_=t,{type:t,detail:r,bubbles:i,cancelable:u,composed:H}=_,o=ht(_,["type","detail","bubbles","cancelable","composed"]),z=Se(new CustomEvent(t,{detail:r,bubbles:i||A.bubbles,cancelable:u||A.cancelable,composed:H||A.composed}),o)):z=new CustomEvent(t,A),e.dispatchEvent(z)}var F=a(ke,!0);function tt(t){if(t.toArray)return t.toArray();var e=[],n=t.length,o;if(typeof t.length!="number")return e;for(e.length=n,o=0;o<n;o++)e[o]=t[o];return e}function Ce(t,e){return tt(e.querySelectorAll(t))}var x=a(Ce,!0);var Ae=!1,et=Ae?function(e,...n){window.console&&window.console.log&&window.console.log("%cbolt %c"+e+"%c","color: #888888; font-weight: 400;","color: #3a8ab0; font-weight: 600;","color: inherit; font-weight: 400;",...n)}:p;var Be=Array.prototype,De=window.location,G=De.hash,Mt=new WeakMap,Nt=a(function(e,n){return n(e)}),d={activeClass:"active",onClass:"on",cache:!0},ot=[],Pe=[];function Gt(t){return x('[href$="#'+t+'"]',document.body).filter(X(E,{a:S,default:function(){return!0}})).concat(x('[data-href="#'+t+'"]',document))}function Oe(t){let e=Mt.get(t);return e||(e={},Mt.set(t,e)),e}function B(t){var e=Oe(t),n=t.id;return e.node||(e.node=t),e.buttons||(e.buttons=d.cache&&n&&Gt(n)),e}function It(t){return d.cache&&t.buttons||t.node.id&&Gt(t.node.id)}function Te(t){if(t.type==="mousedown"){let e=f("click",t.currentTarget).each(function(o){e.stop(),o.preventDefault()})}}function je(t){if(t.defaultPrevented||!N(t)||(t.type==="keydown"||t.type==="keyup")&&t.keyCode!==13)return!0}function Le(t){return(Q(t.hash)?t.hash:t.getAttribute("href")).substring(1)}function Me(t,e){return t+!!e}function Ut(t,e){if(!F({type:"dom-activate",relatedTarget:e},t))return;let o=B(t);o.active=!0,y(o.node).add(d.activeClass);let r=It(o);r&&r.forEach(function(u){y(u).add(d.onClass)});let i=t.querySelector(".active-focus");i&&requestAnimationFrame(()=>requestAnimationFrame(()=>i.focus()))}function rt(t,e){if(!F({type:"dom-deactivate",relatedTarget:e},t))return;let o=B(t);y(o.node).remove(d.activeClass);let r=It(o);r&&r.forEach(function(i){y(i).remove(d.onClass)}),o.active=!1}f("click",document).each(Y({"a[href]":function(t,e){if(!je(e)&&!(t.hostname&&!S(t))){var n=Le(t);if(!!n){var o=document.getElementById(n);if(!!o){if(o.classList.contains("active")){e.preventDefault();return}var r=Pe.map(Nt(o)).reduce(Me,0);if(r){e.preventDefault();return}if(!!ot.find(Nt(o))){var i=B(o);i.active||(e.preventDefault(),e.type==="mousedown"&&Te(e),Ut(o,t))}}}}},'[name="activate"]':function(t,e){let n=t.value,o=n.replace(/^#/,""),r=document.getElementById(o);if(!r)throw new Error('Button action name="activate" target "'+n+'" not found');var i=B(r);i.active||(e.preventDefault(),Ut(r,t))},'[name="deactivate"]':function(t,e){let n=t.value,o=n.replace(/^#/,""),r=document.getElementById(o);if(!r)throw new Error('Button action name="deactivate" target "'+n+'" not found');var i=B(r);!i.active||(e.preventDefault(),rt(r,t))}}));var nt=F("dom-activate"),qt=new WeakSet;function Ht(t){qt.add(t)}function Ft(t){return!qt.has(t)}function Ne(t,e){let n=(window.location.hash?window.location.hash+", ":"")+("."+d.activeClass),o=x(n,e).filter(Ft);return e.matches(n)&&Ft(e)&&o.push(e),o.length&&(t.push.apply(t,o),o.forEach(Ht)),t}function Ue(t,e){return Be.filter.call(e.addedNodes,wt).reduce(Ne,t)}f("DOMContentLoaded",document).each(function(){let t=x("."+d.activeClass,document);t.length&&(et("dom-activate",t.length+" elements – #"+t.map(h("id")).join(", #")),t.forEach(nt)),new MutationObserver((n,o)=>{if(n[0].type!=="childList")throw new Error("Not childList",n);let r=n.reduce(Ue,[]);r.length&&(et("dom-activate",r.length+" elements – #"+r.map(h("id")).join(", #")),r.forEach(nt),r.forEach(Ht))}).observe(document.body,{attributes:!1,childList:!0,subtree:!0})});f("load",window).each(function(){if(!(!G||!/^#\S+$/.test(G)))try{x(G,document).forEach(nt)}catch(t){console.warn("dom: Cannot activate "+G,t.message)}});var it=l("[data-toggleable]");ot.push(it);var st=[];function Fe(t){return(t.hash?t.hash:t.getAttribute("href")).substring(1)}f("click",document.documentElement).each(t=>{if(!t.defaultPrevented&&!!N(t)){var e=yt("a[href]",t.target);if(!!e&&!(e.hostname&&!S(e))){var n=Fe(e);!n||st.indexOf(n)!==-1&&(rt(K(n),e),t.preventDefault())}}});f("dom-activate",document).each(t=>{var e=t.target;!it(e)||st.push(W(e))});f("dom-deactivate",document).each(t=>{var e=t.target;!it(e)||R(st,e.id)});var w={simulatedEventDelay:.08,keyClass:"key-device",mouseClass:"mouse-device",touchClass:"touch-device",keyType:"key",mouseType:"mouse",touchType:"touch"},ct={type:"mouse"},zt=y(document.documentElement),at,I;function ut(t){at!==t&&(zt.remove(at),zt.add(t),at=t)}function Ge(t){t.timeStamp<I+w.simulatedEventDelay*1e3||(I=void 0,ut(w.mouseClass),ct.type=w.mouseType)}function Ie(t){["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Space","Escape","Tab"].indexOf(t.code)!==-1&&(ut(w.keyClass),ct.type=w.keyType,I=t.timeStamp)}function qe(t){I=t.timeStamp,ut(w.touchClass),ct.type=w.touchType}document.addEventListener("mousedown",Ge);document.addEventListener("keydown",Ie);document.addEventListener("touchend",qe);function ft(t){return function(n,...o){var r=t[n]||t.default;return r&&r.apply(this,o)}}function pt(t){if(typeof t.length=="number")return t[t.length-1]}function q(t){return t===void 0?void 0:parseInt(t,10)}function lt(t){return t.replace(/-(\w)?/g,function(e,n){return n?n.toUpperCase():""})}function He(t){return t.offsetParent!==null}f("dom-activate",document.body).map(h("target")).filter(l(".toggle-block")).each(function(t){if(!He(t)||l(".loading .toggle-block")){t.style.maxHeight="";return}let e=t.getBoundingClientRect(),n=getComputedStyle(t),o=pt(t.children),r=o&&o.getBoundingClientRect().bottom,i=q(n.paddingBottom)+q(n.borderBottomWidth)+r-e.top;t.style.maxHeight=i+"px";let u=f("transitionend",t).each(function(H){u.stop(),t.style.maxHeight=""})});var ze=ft({maxHeight:t=>t.clientHeight+"px",default:(t,e,n)=>e[n]});f("dom-deactivate",document.body).map(h("target")).filter(l(".toggle-block")).each(function(t){let e=t.getAttribute("style"),n=getComputedStyle(t),o=n["transition-property"].split(/\s*,\s*/).map(lt);t.style.transition="none",o.forEach(r=>t.style[r]=ze(r,t,n,r)),requestAnimationFrame(function(){e?t.setAttribute("style",e):t.removeAttribute("style")})});
