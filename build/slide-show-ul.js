/* slide-show 
   1.1.6
   By Stephen Band
   Built 2022-05-19 13:25 */

var qe=Object.defineProperty;var Dt=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var Bt=(t,e)=>{var n={};for(var o in t)We.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(t!=null&&Dt)for(var o of Dt(t))e.indexOf(o)<0&&$e.call(t,o)&&(n[o]=t[o]);return n};var z=(t,e)=>{for(var n in e)qe(t,n,{get:e[n],enumerable:!0})};function N(t){var e=new Map;return function(o){if(e.has(o))return e.get(o);var r=t(o);return e.set(o,r),r}}var Ne=Array.prototype;function Xe(t,e){return typeof t=="function"?t.apply(null,e):t}function Gt(t,e,n){n=n||t.length;var o=n===1?e?t:N(t):N(function(r){return Gt(function(){var i=[r];return i.push.apply(i,arguments),t.apply(null,i)},e,n-1)});return function r(i){return arguments.length===0?r:arguments.length===1?o(i):arguments.length>=n?t.apply(null,arguments):Xe(o(i),Ne.slice.call(arguments,1))}}var v=Gt;function Ye(t,e){return 1-Math.pow(1-e,t)}var zt=v(Ye);function y(){}function pt(t,e){return e(t)}function S(t){return t}var Ke=Array.prototype;function ft(){let t=arguments;return t.length?e=>Ke.reduce.call(t,pt,e):S}function dt(t,e,n){return n*(e-t)+t}var Ze=window.performance,_t=window.requestAnimationFrame,Qe=window.cancelAnimationFrame;function mt(t,e,n){var o=Ze.now();function r(s){var a=(s-o)/(t*1e3);a<1?(a>0&&e(a),i=_t(r)):(e(1),n&&n())}var i=_t(r);return function(){Qe(i)}}function X(t,e,n,o,r,i){let s=o[n];return mt(t,ft(e,a=>dt(s,r,a),a=>o[n]=a),i)}function Je(){return{x:0,y:0,left:0,top:0,right:window.innerWidth,bottom:window.innerHeight,width:window.innerWidth,height:window.innerHeight}}function T(t){return t===window?Je():t.getClientRects()[0]||t.getBoundingClientRect()}var M={scrollDuration:.3,scrollDurationPerHeight:.125,scrollTransform:zt(3)},Rt=y;function tn(t,e){if(e.behavior==="smooth"){let n=t.style.getPropertyValue("scroll-snap-type"),o=()=>{let r=t.scrollLeft,i=t.scrollTop;t.style.setProperty("scroll-snap-type",n),t.scrollLeft=r,t.scrollTop=i};if(t.style.setProperty("scroll-snap-type","none"),e.left!==void 0){let r=t===document.body?window.innerWidth:T(t).width,i=M.scrollDuration+M.scrollDurationPerHeight*Math.abs(e.left-t.scrollLeft)/r;Rt=X(i,M.scrollTransform,"scrollLeft",t,e.left,o)}else{let r=t===document.body?window.innerHeight:T(t).height,i=M.scrollDuration+M.scrollDurationPerHeight*Math.abs(e.top-t.scrollTop)/r;Rt=X(i,M.scrollTransform,"scrollTop",t,e.top,o)}}else e.left!==void 0&&(t.scrollLeft=e.left),e.top!==void 0&&(t.scrollTop=e.top)}if(!("scrollBehavior"in document.documentElement.style)){window.console&&console.log("Polyfilling Element.scrollTo(options)");let t="scrollTo"in Element.prototype?Element:HTMLElement,e=t.scrollIntoView;t.prototype.scrollTo=function(n){typeof n=="object"?tn(this,n):e.apply(this,arguments)}}function b(t,e){return function(){let o=t.apply(this,arguments),r=e[o]||e.default;if(!r)throw new Error('overload() no handler for "'+o+'"');return r.apply(this,arguments)}}var en=b(S,{is:y,tag:y,html:function(t,e,n){e.innerHTML=n},text:function(t,e,n){e.textContent=n},children:function(t,e,n){e.innerHTML="",n.forEach(o=>{e.appendChild(o)})},points:D,cx:D,cy:D,r:D,preserveAspectRatio:D,viewBox:D,default:function(t,e,n){t in e?e[t]=n:e.setAttribute(t,n)}});function D(t,e,n){e.setAttribute(t,n)}function nn(t,e){for(var n=Object.keys(e),o=n.length;o--;)en(n[o],t,e[n[o]]);return t}var ht=v(nn,!0);var on="http://www.w3.org/2000/svg",Ut=document.createElement("div");var Vt=(t,e)=>e&&typeof e;function qt(t,e){let n=document.createRange();return n.selectNode(t),n.createContextualFragment(e)}function L(t,e){var n=document.createElementNS(on,t);return e&&(n.innerHTML=e),n}var rn=b(S,{comment:function(t,e){return document.createComment(e||"")},fragment:b(Vt,{string:function(t,e,n){if(n)return qt(n,e);let o=document.createDocumentFragment();Ut.innerHTML=e;let r=Ut.childNodes;for(;r[0];)o.appendChild(r[0]);return o},object:function(t,e,n){let o=n?qt(n):document.createDocumentFragment();return typeof e.length=="number"?o.append.apply(o,e):ht(o,e),o},default:()=>document.createDocumentFragment()}),text:function(t,e){return document.createTextNode(e||"")},circle:L,ellipse:L,g:L,glyph:L,image:L,line:L,rect:L,use:L,path:L,pattern:L,polygon:L,polyline:L,svg:L,default:b(Vt,{string:function(t,e){let n=document.createElement(t);return n.innerHTML=e,n},object:function(t,e){let n=document.createElement(t);return typeof e.length=="number"?n.append.apply(n,e):ht(n,e),n},default:t=>{if(typeof t!="string")throw new Error('create(tag, content) accepts only a string as tag "'+typeof t+'"');return document.createElement(t)}})}),x=rn;function gt(t,e,n){let o;typeof n!="string"&&n.input!==void 0&&n.index!==void 0&&(o=n,n=o.input.slice(n.index+n[0].length+(n.consumed||0)));let r=t.exec(n);if(!r)return;let i=e(r);return o&&(o.consumed=(o.consumed||0)+r.index+r[0].length+(r.consumed||0)),i}var fr=v(gt,!0);function sn(t,e,n){throw n.input!==void 0&&n.index!==void 0&&(n=n.input),new Error('Cannot parse string "'+n+'"')}function cn(t,e,n){let o=-1;for(;++o<n.length;)e=n[o]!==void 0&&t[o]?t[o](e,n):e;return t.done?t.done(e,n):t.close?t.close(e,n):e}function un(t,e,n,o){let r=gt(t,i=>cn(e,n,i),o);return r===void 0?e.catch?e.catch(n,o):sn(t,e,o):r}var Wt=v(un,!0);var wt=y;var k=Symbol("internals"),A=Symbol("shadow"),$t=Object.defineProperties,ln={a:HTMLAnchorElement,dl:HTMLDListElement,p:HTMLParagraphElement,br:HTMLBRElement,fieldset:HTMLFieldSetElement,hr:HTMLHRElement,img:HTMLImageElement,li:HTMLLIElement,ol:HTMLOListElement,optgroup:HTMLOptGroupElement,q:HTMLQuoteElement,textarea:HTMLTextAreaElement,td:HTMLTableCellElement,th:HTMLTableCellElement,tr:HTMLTableRowElement,tbody:HTMLTableSectionElement,thead:HTMLTableSectionElement,tfoot:HTMLTableSectionElement,ul:HTMLUListElement},an={name:{set:function(t){return this.setAttribute("name",t)},get:function(){return this.getAttribute("name")||""}},form:{get:function(){return this[k].form}},labels:{get:function(){return this[k].labels}},validity:{get:function(){return this[k].validity}},validationMessage:{get:function(){return this[k].validationMessage}},willValidate:{get:function(){return this[k].willValidate}},checkValidity:{value:function(){return this[k].checkValidity()}},reportValidity:{value:function(){return this[k].reportValidity()}}},pn={},Nt={once:!0},fn=0,Xt=!1;function dn(t){return ln[t]||window["HTML"+t[0].toUpperCase()+t.slice(1)+"Element"]||(()=>{throw new Error('Constructor not found for tag "'+t+'"')})()}var mn=Wt(/^\s*<?([a-z][\w]*-[\w]+)>?\s*$|^\s*<?([a-z][\w]*)\s+is=["']?([a-z][\w]*-[\w]+)["']?>?\s*$/,{1:(t,e)=>({name:e[1]}),2:(t,e)=>({name:e[3],tag:e[2]}),catch:function(t,e){throw new SyntaxError(`dom element() – name must be of the form 'element-name' or 'tag is="element-name"' (`+e+")")}},null);function hn(t,e){if(t.hasOwnProperty(e)){let n=t[e];delete t[e],t[e]=n}return t}function gn(t,e,n){t._initialLoad=!0;let o=t.attachShadow({mode:e.mode||"closed",delegatesFocus:e.focusable||!1});if(n){let r=x("link",{rel:"stylesheet",href:n});o.append(r)}return t[A]=o,o}function wn(t){var e;if(t.attachInternals){if(e=t.attachInternals(),e.setFormValue)return e}else e={shadowRoot:t.shadowRoot};return e.input=x("input",{type:"hidden",name:t.name}),t.appendChild(e.input),e.setFormValue=function(n){this.input.value=n},e}function vn(t){t._initialAttributes={},t._n=0}function yn(t,e,n){let o=t._initialAttributes;for(;t._n<e.length&&o[e[t._n]]!==void 0;)n[e[t._n]].call(t,o[e[t._n]]),++t._n}function Yt(t,e,n){if(!t._initialAttributes)return;let o=t._initialAttributes;for(;t._n<e.length;)o[e[t._n]]!==void 0&&n[e[t._n]]&&n[e[t._n]].call(t,o[e[t._n]]),++t._n;delete t._initialAttributes,delete t._n}function bn(t){return!!t.attribute}function xn(t){return t.set||t.get||t.hasOwnProperty("value")}function Kt(t,e){return bn(e[1])&&(t.attributes[e[0]]=e[1].attribute),xn(e[1])&&(t.properties[e[0]]=e[1]),t}function vt(t,e,n,o){let{name:r,tag:i}=mn(t),s=typeof i=="string"?dn(i):HTMLElement,{attributes:a,properties:f}=n?Object.entries(n).reduce(Kt,{attributes:{},properties:{}}):e.properties?Object.entries(e.properties).reduce(Kt,{attributes:{},properties:{}}):pn;function l(){let p=Reflect.construct(s,arguments,l),g=e.construct&&e.construct.length>fn?gn(p,e,o||e.stylesheet):void 0,u=l.formAssociated&&wn(p);return i&&(Xt=!0),e.construct&&e.construct.call(p,g,u),a&&(vn(p),Promise.resolve(1).then(function(){Yt(p,l.observedAttributes,a)})),f&&Object.keys(f).reduce(hn,p),p}return l.prototype=Object.create(s.prototype,f),f&&f.value&&(l.formAssociated=!0,$t(l.prototype,an),(e.enable||e.disable)&&(l.prototype.formDisabledCallback=function(p){return p?e.disable&&e.disable.call(this,this[A],this[k]):e.enable&&e.enable.call(this,this[A],this[k])}),e.reset&&(l.prototype.formResetCallback=function(){return e.reset.call(this,this[A],this[k])}),e.restore&&(l.prototype.formStateRestoreCallback=function(){return e.restore.call(this,this[A],this[k])})),a&&(l.observedAttributes=Object.keys(a),l.prototype.attributeChangedCallback=function(p,g,u){if(!this._initialAttributes)return a[p].call(this,u);this._initialAttributes[p]=u,yn(this,l.observedAttributes,a)}),l.prototype.connectedCallback=function(){let p=this,g=p[A],u=p[k];if(p._initialAttributes&&Yt(p,l.observedAttributes,a),p._initialLoad){let c=g.querySelectorAll('link[rel="stylesheet"]');if(c.length){let H=0,at=c.length,Mt=function(Ue){++H>=c.length&&(delete p._initialLoad,e.load&&(wt("element()","loaded",Array.from(c).map(Ve=>Ve.href).join(`
`)),e.load.call(p,g)))},_e=Mt;for(;at--;)c[at].addEventListener("load",Mt,Nt),c[at].addEventListener("error",_e,Nt);e.connect&&e.connect.call(this,g,u)}else e.connect&&e.connect.call(this,g,u),e.load&&e.load.call(this,g,u)}else e.connect&&e.connect.call(this,g,u)},e.disconnect&&(l.prototype.disconnectedCallback=function(){return e.disconnect.call(this,this[A],this[k])}),wt("element()","<"+(i?i+" is="+r:r)+">"),window.customElements.define(r,l,i&&{extends:i}),i&&!Xt&&document.querySelectorAll('[is="'+r+'"]').forEach(p=>{$t(p,f),e.construct&&e.construct.apply(p);let g;for(g in a){let u=p.attributes[g];u&&a[g].call(p,u.value)}e.connect&&e.connect.apply(p)}),l}function Zt(t,e){if(t===e)return!0;if(t===null||e===null||typeof t!="object"||typeof e!="object")return!1;let n=Object.keys(t),o=Object.keys(e),r=n.length;for(;r--;){if(t[n[r]]===void 0){if(e[n[r]]!==void 0)return!1}else if(!e.hasOwnProperty(n[r])||!Zt(t[n[r]],e[n[r]]))return!1;let i=o.indexOf(n[r]);i>-1&&o.splice(i,1)}for(r=o.length;r--;)if(e[o[r]]===void 0){if(t[o[r]]!==void 0)return!1}else return!1;return!0}var Qt=v(Zt,!0);function En(t,e){return e[t]}var B=v(En,!0);var Sn=Object.freeze;function Jt(){return this}var P=Sn({shift:y,push:y,forEach:y,join:function(){return""},map:Jt,filter:Jt,includes:function(){return!1},reduce:function(t,e){return e},length:0,each:y,pipe:S,start:y,stop:y,done:y,valueOf:function(){return null}});function yt(){return this}function bt(t){return t&&t[Symbol.iterator]}var Tn=Object.assign;function Ln(t){return t.stop?t.stop():t()}function kn(t){t.forEach(Ln),t.length=0}function G(){}Tn(G.prototype,{stop:function(){return this.stopables&&kn(this.stopables),this},done:function(e){return(this.stopables||(this.stopables=[])).push(e),this}});var Pn=Object.assign;function Y(t){G.prototype.stop.apply(t);let e=-1,n;for(;n=t[++e];)t[e]=void 0,Y(n)}function m(){}Pn(m.prototype,{pipe:function(t){return this[0]=t,t},stop:function(){return Y(this[0]),this}});var F=Object.assign,O=Object.create;function _(t,e){e!==void 0&&t[0].push(e)}function Fn(t,e){if(t[1]){let n=-1;for(;t[++n]&&t[n]!==e;);for(;t[n++];)t[n-1]=t[n];Y(e)}else t.stop()}function w(t){this.input=t}F(w.prototype,G.prototype,{push:function(t){_(this,t)},pipe:function(t){if(this[0])throw new Error("Stream: Attempt to .pipe() a unicast stream multiple times. Create a multicast stream with stream.broadcast().");return this[0]=t,this.input.pipe(this),t},map:function(t){return new te(this,t)},filter:function(t){return new ee(this,t)},chunk:function(t){return new oe(this,t)},flatMap:function(t){return new ne(this,t)},take:function(t){return new re(this,t)},each:function(t){return new ce(this,t)},reduce:function(t,e){return new ie(this,t,e)},scan:function(t,e){return new se(this,t,e)},stop:function(){return Fn(this.input,this),this}});function te(t,e){this.input=t,this.fn=e}te.prototype=F(O(w.prototype),{push:function(e){let n=this.fn;_(this,n(e))}});function ee(t,e){this.input=t,this.fn=e}ee.prototype=F(O(w.prototype),{push:function(e){this.fn(e)&&_(this,e)}});function ne(t,e){this.input=t,this.fn=e}ne.prototype=F(O(w.prototype),{push:function(e){let o=this.fn(e);if(o!==void 0)if(bt(o))for(let r of o)_(this,r);else throw new Error("Stream: Cannot .flatMap() non-iterable values")}});function oe(t,e){this.input=t,this.chunk=[],typeof e=="number"?this.n=e:typeof e=="function"&&(this.fn=e)}oe.prototype=F(O(w.prototype),{fn:function(t){return t.length===this.n},push:function(e){let n=this.chunk;n.push(e),this.fn(n)&&(_(this,n),this.chunk=[])}});function re(t,e){this.input=t,this.count=e}re.prototype=F(O(w.prototype),{push:function(e){this[0].push(e),--this.count||this.stop()}});function ie(t,e,n){return this.input=t,this.fn=e,this.value=n,this.i=0,t.pipe(this),n}ie.prototype=F(O(w.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t,this.i++,this)}});function se(t,e,n){this.input=t,this.fn=e,this.value=n}se.prototype=F(O(w.prototype),{push:function(t){let e=this.fn;this.value=e(this.value,t),this[0].push(this.value)}});function ce(t,e){this.input=t,this.push=e,t.pipe(this)}ce.prototype=F(O(w.prototype),{each:null,reduce:null,pipe:null});var On=Array.prototype,An=Object.assign,Cn=Object.create;function R(t){this.buffer=t||[]}R.prototype=An(Cn(w.prototype),m.prototype,{push:function(t){t!==void 0&&this.buffer.push(t)},pipe:function(t){for(this[0]=t;this.buffer.length;)this[0].push(On.shift.apply(this.buffer));return this.buffer=this[0],t}});var In=Object.assign,jn=Object.create;function U(t,e){this.input=t,this.memory=!!(e&&e.memory),e&&e.hot&&this.pipe(P)}U.prototype=In(jn(w.prototype),{push:function(t){if(t!==void 0){this.memory&&(this.value=t);let e=-1;for(;this[++e];)this[e].push(t)}},pipe:function(t){let e=-1;for(;this[++e];);return this[e]=t,this.value!==void 0&&t.push(this.value),e===0&&this.input.pipe(this),t}});var Hn=Object.assign;function K(t){this.promise=t}Hn(K.prototype,m.prototype,{pipe:function(t){let e=this.promise;this[0]=t,e.then(n=>this[0].push(n)).finally(n=>this.stop())},stop:function(){m.prototype.stop.apply(this,arguments),this[0]=P}});var le=Object.assign,ae=Object.keys;function ue(t,e,n){let o=t.values,r=t.names,i=t[0];o[e]=n,(t.active||(t.active=ae(o).length===r.length))&&i.push(le({},o))}function Z(t){this.inputs=t,this.active=!1}le(Z.prototype,m.prototype,{pipe:function(t){let e=this.inputs;this.values={},this.names=ae(e),this[0]=t;for(let n in e){let o=e[n];o.pipe?t.done(o.each(r=>ue(this,n,r))):o.then?o.then(r=>ue(this,n,r)):console.log("Todo: combine() raw values ?")}}});var Mn=Object.assign;function Q(t){this.inputs=t}Mn(Q.prototype,m.prototype,{pipe:function(t){let e=this.inputs;this[0]=t;let n=-1,o;for(;o=e[++n];)if(o.pipe)o.pipe(t);else if(o.then)o.then(r=>t.push(r));else{let r=-1;for(;++r<o.length;)t.push(o[r])}},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop&&n.stop();return m.prototype.stop.apply(this,arguments)}});var Et=Array.prototype,Dn=Object.assign;function Bn(t){return t.length>0}function Gn(t,e,n){return t[n]=e.shift(),t}function zn(t){return[]}function xt(t,e,n,o){n.push(o),e.every(Bn)&&t.push(e.reduce(Gn,{}))}function J(t){this.inputs=t,this.buffers=Et.map.call(t,zn)}Dn(J.prototype,m.prototype,{pipe:function(t){let e=this.inputs,n=this.buffers;this[0]=t,Et.forEach.call(e,(o,r)=>{let i=n[r];o.each?t.done(o.each(s=>xt(t,n,i,s))):o.then?o.then(s=>xt(t,n,i,s)):Et.forEach.call(o,s=>xt(t,n,i,s))})},stop:function(){let t=this.inputs,e=-1,n;for(;n=t[++e];)n.stop();return m.prototype.stop.apply(this,arguments)}});var _n=Array.prototype,pe=Object.assign;function Rn(t){throw new TypeError("Stream: invalid source object cannot be read into stream")}var h=pe(w,{of:function(){return new R(_n.slice.apply(arguments))},from:function(t){return t.pipe?new w(t):t.then?new w(new K(t)):typeof t.length=="number"?new R(t):Rn(t)},broadcast:function(e){return new U(P,e)},combine:function(e){return new w(new Z(e))},merge:function(){return new w(new Q(arguments))},zip:function(){return new w(new J(arguments))}});pe(w.prototype,{log:yt,broadcast:function(t){return new U(this,t)}});var Un=Object.assign,Vn=/\s+/,fe={fullscreenchange:"fullscreenElement"in document?"fullscreenchange":"webkitFullscreenElement"in document?"webkitfullscreenchange":"fullscreenchange"};function de(t){return t.which===1&&!t.ctrlKey&&!t.altKey&&!t.shiftKey}var me=0;window.addEventListener("click",t=>me=t.timeStamp);function qn(t,e){return t.node.addEventListener(fe[e]||e,t,t.options),t}function Wn(t,e){return t.node.removeEventListener(fe[e]||e,t),t}function he(t,e,n){this.types=t.split(Vn),this.options=e,this.node=n,this.select=e&&e.select}Un(he.prototype,m.prototype,{pipe:function(t){this[0]=t,this.types.reduce(qn,this)},handleEvent:function(t){if(!(t.type==="click"&&t.timeStamp<=me)){if(this.select){let e=t.target.closest(this.select);if(!e)return;t.selectedTarget=e}this[0].push(t)}},stop:function(){this.types.reduce(Wn,this),m.prototype.stop.apply(this,arguments)}});function E(t,e){let n;return typeof t=="object"&&(n=t,t=n.type),new h(new he(t,n,e))}function St(t){return typeof t}var $n=/^\s*([+-]?\d*\.?\d+)([^\s\d]*)\s*$/;function Nn(t,e){if(typeof e=="number")return e;var n=$n.exec(e);if(!n||!t[n[2]||""]){if(!t.catch)throw new Error('Cannot parse value "'+e+'" with provided units '+Object.keys(t).join(", "));return n?t.catch(parseFloat(n[1]),n[2]):t.catch(parseFloat(e))}return t[n[2]||""](parseFloat(n[1]))}var tt=v(Nn);var Xn=/px$/,ge={"transform:translateX":function(t){var e=V("transform",t);if(!e||e==="none")return 0;var n=et(e);return parseFloat(n[4])},"transform:translateY":function(t){var e=V("transform",t);if(!e||e==="none")return 0;var n=et(e);return parseFloat(n[5])},"transform:scale":function(t){var e=V("transform",t);if(!e||e==="none")return 0;var n=et(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.sqrt(o*o+r*r)},"transform:rotate":function(t){var e=V("transform",t);if(!e||e==="none")return 0;var n=et(e),o=parseFloat(n[0]),r=parseFloat(n[1]);return Math.atan2(r,o)}};function et(t){return t.split("(")[1].split(")")[0].split(/\s*,\s*/)}function V(t,e){return window.getComputedStyle?window.getComputedStyle(e,null).getPropertyValue(t):0}function nt(t,e){if(ge[t])return ge[t](e);var n=V(t,e);return typeof n=="string"&&Xn.test(n)?parseFloat(n):n}var ot,rt;function Yn(){if(!ot){let t=document.documentElement.style.fontSize;document.documentElement.style.fontSize="100%",ot=nt("font-size",document.documentElement),document.documentElement.style.fontSize=t||""}return ot}function Kn(){return rt||(rt=nt("font-size",document.documentElement)),rt}window.addEventListener("resize",()=>{ot=void 0,rt=void 0});var C=b(St,{number:S,string:tt({em:function(t){return Yn()*t},px:function(t){return t},rem:function(t){return Kn()*t},vw:function(t){return window.innerWidth*t/100},vh:function(t){return window.innerHeight*t/100},vmin:function(t){return window.innerWidth<window.innerHeight?window.innerWidth*t/100:window.innerHeight*t/100},vmax:function(t){return window.innerWidth<window.innerHeight?window.innerHeight*t/100:window.innerWidth*t/100}})}),we=C;var Tt=Object.assign,it={threshold:4,ignoreTags:{textarea:!0,input:!0,select:!0}};function Zn(t,e,n){var o=n.clientX-e.clientX,r=n.clientY-e.clientY;return!(o*o+r*r<t*t)}function ve(t,e,n){this.stream=t,this.events=e,this.options=n,this.pointerId=e[0].pointerId,this.threshold=we(n.threshold),document.addEventListener("pointermove",this),document.addEventListener("pointerup",this),document.addEventListener("pointercancel",this),this.threshold===0&&this.createGesture()}Tt(ve.prototype,{handleEvent:b(B("type"),{pointermove:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),!this.isGesture&&Zn(this.threshold,this.events[0],t)?this.createGesture():t.preventDefault()},default:function(t){if(this.pointerId!==t.pointerId){console.log("Not the same pointer");return}this.events.push(t),this.stop()}}),createGesture:function(){this.isGesture=!0,this.events=h.from(this.events),this.stream.push(this.events)},stop:function(){this.events.stop&&this.events.stop(),document.removeEventListener("pointermove",this),document.removeEventListener("pointerup",this),document.removeEventListener("pointercancel",this)}});function Qn(t){var e=t.target.tagName;return e&&(!!it.ignoreTags[e.toLowerCase()]||t.target.draggable)}function ye(t,e){this.node=t,this.options=e,this.node.addEventListener("pointerdown",this)}Tt(ye.prototype,m.prototype,{handleEvent:function(t){if(t.button===0&&!(this.options.device&&!this.options.device.includes(t.pointerType))&&!Qn(t)&&!(this.options.selector&&!t.target.closest(this.options.selector))){var e={type:t.type,target:t.target,currentTarget:t.currentTarget,clientX:t.clientX,clientY:t.clientY,timeStamp:t.timeStamp,pointerId:t.pointerId};new ve(this[0],[e],this.options)}},stop:function(){this.node.removeEventListener("pointerdown",this),m.prototype.stop.apply(this,arguments)}});function Lt(t,e){return t=e&&t?Tt({},it,t):it,e=e||t,new h(new ye(e,t))}var Jn=Object.assign,q={bubbles:!0,cancelable:!0};function kt(t,e){var l;let n=q,o,r,i,s,a,f;return typeof t=="object"?(l=t,{type:t,detail:r,bubbles:i,cancelable:s,composed:a}=l,o=Bt(l,["type","detail","bubbles","cancelable","composed"]),f=Jn(new CustomEvent(t,{detail:r,bubbles:i||q.bubbles,cancelable:s||q.cancelable,composed:a||q.composed}),o)):f=new CustomEvent(t,q),e.dispatchEvent(f)}var Ai=v(kt,!0);var d=Symbol("data"),W={minScrollInterval:.0375,maxScrollInterval:.18},be=W.maxScrollInterval;function xe(t){let e=t.length,n=0;for(;--e;){let o=t[e]-t[e-1];n=o>n?o:n}n=n<W.minScrollInterval?W.minScrollInterval:n,be=1.4*n>W.maxScrollInterval?W.maxScrollInterval:1.4*n}function st(){return be}function Ee(t){let e=T(t),n=window.getComputedStyle(t,null),o=C(n.getPropertyValue("padding-left")),r=C(n.getPropertyValue("padding-right"));return e.leftPadding=e.left+o,e.rightPadding=e.left+e.width-r,e.centrePadding=e.leftPadding+(e.width-o-r)/2,e}function Se(t){let e=window.getComputedStyle(t,null).getPropertyValue("scroll-snap-align");return e.endsWith("start")?"left":e.endsWith("end")?"right":"centre"}function Te(t,e,n){let o=Ee(t),r=T(e),i=Se(e);t.scrollTo({top:t.scrollTop,left:t.scrollLeft+(i==="left"?r.left-o.leftPadding:i==="right"?r.right-o.rightPadding:r.left+r.width/2-o.centrePadding),behavior:n})}function Le(t,e){return Te(t,e,"smooth"),e}function I(t,e){return t.style.setProperty("scroll-behavior","auto","important"),Te(t,e,"auto"),t.style.setProperty("scroll-behavior",""),e}function ke(t,e){let{leftPadding:n,rightPadding:o,centrePadding:r}=Ee(t),i=e.length,s;for(;s=e[--i];){let a=T(s);if(!a)continue;let f=Se(s),l=a.width/2+(f==="left"?n:f==="right"?o:r);if((f==="left"?a.left:f==="right"?a.right:a.left+a.width/2)<=l)break}return s}function Pe(t){return!!t.dataset.slideIndex}function Fe(t){let{scroller:e,elements:n,children:o}=t,r=ke(e,n);return Pe(r)?o[r.dataset.slideIndex]:r}function Oe(t){let{scroller:e,children:n,elements:o}=t,r=ke(e,o),i;!r||(Pe(r)?(i=n[r.dataset.slideIndex],I(e,i)):i=r,t.activations.push(i))}function to(t,e){t.style.setProperty("scroll-snap-type",""),e.stop()}var Ae=b((t,e)=>e.type,{pointerdown:function(t,e){return t.e0=e,t.x0=e.clientX,t.y0=e.clientY,t},pointermove:function(t,e){let n=e.clientX,o=e.clientY;if(!t.gesturing){if(Math.abs(n-t.x0)<Math.abs(o-t.y0)){t.pointers.stop(),t.pointers=void 0,t.e0=void 0,t.x0=void 0,t.y0=void 0;return}t.scrollLeft0=t.scroller.scrollLeft,t.scroller.style.setProperty("scroll-snap-type","none","important"),t.scroller.style.setProperty("scroll-behavior","auto","important"),t.gesturing=!0}let r=e.clientX-t.x0;return t.scroller.scrollLeft=t.scrollLeft0-r,t},default:function(t,e){let n=t.scroller;t.clickSuppressTime=e.timeStamp;let o=n.scrollLeft;n.style.setProperty("scroll-snap-type","");let r=n.scrollLeft;if(o===r)n.style.setProperty("scroll-behavior","");else{let i=Fe(t);t.activations.push(i),n.style.setProperty("scroll-snap-type","none","important"),n.scrollLeft=o,n.style.setProperty("scroll-behavior",""),n.scrollTo({top:n.scrollTop,left:r,behavior:"smooth"}),E({type:"scroll",passive:!0},n).reduce((s,a,f,l)=>(clearTimeout(s),setTimeout(to,st()*1e3,n,l)))}return t.gesturing=!1,t.e0=void 0,t.x0=void 0,t.y0=void 0,t.pointers=void 0,t.scrollLeft0=void 0,t}});var eo=Object.assign,no={capture:!0,passive:!0};function oo(t,e){t.timer=void 0,t.stream.push(e);let n=t.times;n.length>1&&xe(n),n.length=0}function Ce(t){this.element=t,this.times=[]}eo(Ce.prototype,m.prototype,{pipe:function(t){this.stream=t,this.element.addEventListener("scroll",this,no)},handleEvent:function(t){let e=t.timeStamp/1e3;this.times.push(e),this.timer&&clearTimeout(this.timer),this.timer=setTimeout(oo,st()*1e3,this,t)},stop:function(){this.element.removeEventListener("scroll",this),m.prototype.stop.apply(this,arguments)}});function Pt(t){return new h(new Ce(t))}function ro(t,e,n){let o=n.length,r=-1/0;for(;o--;){let l=T(n[o]),p=l.x+l.width;r=p>r?p:r}let i=T(e),s=getComputedStyle(t),a=C(s.paddingLeft||0),f=C(s.paddingRight||0);return a+f+r-i.x}function io(t,e,n){let o=ro(t,e,n);t.style.setProperty("--scroll-width",o+"px")}function so(t){return!t.dataset.slideIndex}var Ie={construct:function(t){let e=x("slot",{part:"slides"}),n=x("div",{class:"scroller",children:[e]}),o=x("nav",{part:"controls",children:[x("slot",{name:"controls"})]});t.append(n,o);let r=h.broadcast(),i=h.broadcast(),s=h.combine({host:i,elements:E("slotchange",e).map(c=>u.elements=e.assignedElements())}).broadcast({memory:!0}),a=s.map(c=>{let H=c.elements.filter(so);return Qt(u.children,H)?void 0:u.children=H}).broadcast({memory:!0,hot:!0}),f=h.of(),l=h.of(),p=l.map(c=>c.dataset.slideIndex?u.children[c.dataset.slideIndex]:c).filter(c=>u.active!==c&&kt("slide-active",c)).map(c=>u.active=c).broadcast({memory:!0,hot:!0}),g=E("click",t).filter(de).broadcast(),u=this[d]={clickSuppressTime:-1/0,connected:!1,host:this,style:window.getComputedStyle(this),elements:P,children:P,scroller:n,slides:e,controls:o,connects:r,load:i,views:f,activations:l,actives:p,slotchanges:s,mutations:a,clicks:g};h.merge(s,E("resize",window)).each(c=>io(n,e,u.elements)),h.combine({slotchanges:s,connects:r}).map(c=>u.elements.includes(u.active)?u.active:u.children[0]).map(c=>u.connected?I(n,c):c).pipe(l),h.combine({host:i,child:f}).map(c=>u.elements.includes(c.child)&&u.active!==c.child?c.child:void 0).map(c=>u.connected?u.active?Le(n,c):I(n,c):c).pipe(l),Pt(n).filter(c=>u.connected&&!u.gesturing).each(c=>Oe(u)),Lt({threshold:"0.25rem",device:"mouse"},t).filter(()=>u.children.length>1).each(c=>{u.pointers=c,c.reduce(Ae,u)}),g.each(c=>{c.timeStamp-u.clickSuppressTime<120&&(c.preventDefault(),c.stopPropagation())}),E("fullscreenchange",window).each(c=>{(c.target===this||c.target.contains(this))&&I(n,u.active)}),E("focusin",this).map(c=>u.children.indexOf(c.target)!==-1?c.target:u.children.find(H=>H.contains(c.target))).pipe(f),E("keydown",this).filter(()=>document.activeElement===this||this.contains(document.activeElement)).map(b(B("keyCode"),{37:c=>(c.preventDefault(),u.elements[u.elements.indexOf(u.active)-1]),39:c=>(c.preventDefault(),u.elements[u.elements.indexOf(u.active)+1]),default:y})).pipe(f)},load:function(t){this[d].load.push(this)},connect:function(t){let e=this[d];e.connected=!0,e.connects.push(!0)},disconnect:function(t){let e=this[d];e.connected=!1}};function ct(t,e){function n(o,r){if(t.getState(o)!==r)return t[r?"enable":"disable"](o)}return{attribute:function(o){return n(this,o!==null)},set:function(o){return n(this,!!o)},get:function(){return t.getState(this)}}}function Ft(t,e){t.remove&&t.remove(e);let n;for(;(n=t.indexOf(e))!==-1;)t.splice(n,1);return e}var as=v(Ft,!0);var co=Object.assign;function $(t,e){this.element=t,this.definitions=e,this.tokens=[]}co($.prototype,{contains:function(t){return this.tokens.includes(t)},add:function(){let t=arguments.length;for(;t--;){let e=arguments[t];!this.tokens.includes(e)&&this.definitions[e]&&(this.definitions[e].enable(this.element),this.tokens.push(e))}},remove:function(){let t=arguments.length;for(;t--;){let e=arguments[t];this.tokens.includes(e)&&(this.definitions[e].disable(this.element),Ft(this.tokens,e))}},supports:function(t){return!!this.definitions[t]}});var uo=Array.prototype;function lo(t,e){let n=t.tokens.slice(),o=uo.slice.apply(e),r=n.length;for(;r--;)o.includes(n[r])&&n.splice(r,1);t.remove.apply(t,n),t.add.apply(t,o)}function Ot(t){let e=Symbol("TokenList");function n(o,r){let i=o[e]||(o[e]=new $(o,t));lo(i,r.trim().split(/\s+/))}return{attribute:function(o){n(this,o||"")},set:function(o){n(this,o+"")},get:function(){return this[e]||(this[e]=new $(this,t))}}}var At={};z(At,{disable:()=>ho,enable:()=>mo,getState:()=>go});var ao=tt({s:S,ms:t=>t/1e3});function po(t){let{active:e,children:n,elements:o,host:r}=t,i=o.indexOf(e),s=o[i+1]||n[0];t.autoplay.timer=null,!!s&&(r.active=s)}function fo(t){let{active:e,style:n}=t,o=ao(window.getComputedStyle(e).getPropertyValue("--slide-duration")||n.getPropertyValue("--slide-duration"));clearTimeout(t.autoplay.timer),t.autoplay.timer=setTimeout(po,o*1e3,t)}function je(t){clearTimeout(t.autoplay.timer),t.autoplay.timer=null}function mo(t){let e=t[d],{actives:n}=e,o=e.autoplay={},r=h.merge([!1],E("pointerenter pointerleave",t).map(s=>s.type==="pointerenter")),i=h.merge([t.contains(document.activeElement)],E("focusin focusout",t).map(b(B("type"),{focusin:s=>!0,focusout:s=>t.contains(s.relatedTarget)}))).map((s=>a=>s===a?void 0:s=a)());o.updates=h.combine({active:n,hover:r,focus:i}).each(s=>s.hover||s.focus?je(e):fo(e))}function ho(t){let e=t[d];je(e),e.autoplay.updates.stop(),e.autoplay=void 0}function go(t){return!!t[d].autoplay}var Ct={};z(Ct,{disable:()=>yo,enable:()=>vo,getState:()=>bo});function He(t,e){let n=t.cloneNode(!0);return n.dataset.slideIndex=e,n.removeAttribute("id"),n.setAttribute("aria-hidden","true"),n.tabIndex="-1",n}function wo(t){let{active:e,children:n,host:o,scroller:r}=t;if(t.loop.prepends&&(t.loop.prepends.forEach(u=>u.remove()),t.loop.appends.forEach(u=>u.remove()),t.loop.prepends=void 0,t.loop.appends=void 0),n.length<2){t.elements=t.slides.assignedElements();return}let i=o.clientWidth,s=n.map(T),a=s[1].left,f=s[s.length-2].right,l=1;for(;s[++l]&&s[l].left<a+i;);let p=n.slice(0,l).map(He);for(l=s.length-2;s[--l]&&s[l].right>f-i;);let g=n.slice(++l).map((u,c)=>He(u,l+c));o.prepend.apply(o,g),o.append.apply(o,p),t.loop.prepends=g,t.loop.appends=p,t.elements=t.slides.assignedElements(),I(r,e||n[0])}function vo(t){let e=t[d],{mutations:n}=e,o=e.loop={};o.renders=n.each(r=>wo(e))}function yo(t){let e=t[d];e.loop&&(e.loop.prepends&&e.loop.prepends.forEach(n=>n.remove()),e.loop.appends&&e.loop.appends.forEach(n=>n.remove()),e.loop.renders.stop(),e.loop=void 0)}function bo(t){return!!t[d].loop}var It={};z(It,{disable:()=>Eo,enable:()=>xo,getState:()=>So});function j(t){if(typeof t!="object"||arguments.length>1)throw new Error("delegate() now takes an object of selector:fn pairs.");let e=Object.keys(t);return function(o){let r=o.target,i=-1;for(;e[++i];){let s=r.closest(e[i]);if(s)return t[e[i]](s,...arguments)}}}function Me(t,e,n,o){o===0?t.hidden=!0:t.hidden=!1,o===n.length-1?e.hidden=!0:e.hidden=!1}function xo(t){let e=t[d],{actives:n,clicks:o,slotchanges:r}=e,i=e.navigation={prev:x("button",{part:"prev-button",type:"button",name:"navigation",value:"-1",html:"Previous"}),next:x("button",{part:"next-button",type:"button",name:"navigation",value:"1",html:"Next"})};e.controls.prepend(i.prev,i.next),i.updates=h.combine({active:n,changes:r}).each(s=>Me(i.prev,i.next,s.changes.elements,s.changes.elements.indexOf(s.active))),i.clicks=o.each(j({'[name="navigation"]':function(s,a){let f=parseFloat(s.value),l=e.elements.indexOf(e.active)+f,p=e.elements[l];!p||(t.active=p,Me(i.prev,i.next,e.elements,l))}}))}function Eo(t){let e=t[d];e.navigation.prev.remove(),e.navigation.next.remove(),e.navigation.updates.stop(),e.navigation.clicks.stop(),e.navigation=void 0}function So(t){return!!t[d].navigation}var jt={};z(jt,{disable:()=>ko,enable:()=>Lo,getState:()=>Po});function De(t,e,n){let{active:o,buttons:r,index:i}=t;if(o===n)return;i>-1&&(t.activeSpan.remove(),r.children[i].part.remove("page-button-active"));let s=e.indexOf(n);s!==-1&&(r.children[s].part.add("page-button-active"),r.children[s].append(t.activeSpan),t.index=s,t.active=n)}function To(t,e,n,o){return e.buttons&&(e.buttons.remove(),e.buttons=void 0),o.length<2||(e.buttons=x("div",{part:"pagination",children:o.map((r,i)=>x("button",{part:"page-button",type:"button",name:"pagination",value:i}))}),t.append(e.buttons)),o.length}function Lo(t){let e=t[d],{shadow:n,actives:o,clicks:r,mutations:i}=e,s=e.pagination={activeSpan:x("span",{class:"invisible",text:"(Current slide)"})};s.mutations=i.each(()=>To(e.controls,s,n,e.children)),s.updates=h.combine({active:o,children:i}).filter(a=>a.children.length>1).each(a=>De(s,e.children,e.active)),s.clicks=r.each(j({'[name="pagination"]':function(a,f){let{host:l}=e,p=e.children,g=p[a.value];!g||(l.active=g,De(s,p,g))}}))}function ko(t){let e=t[d];e.pagination.buttons.remove(),e.pagination.mutations.stop(),e.pagination.updates.stop(),e.pagination.clicks.stop(),e.pagination=void 0}function Po(t){return!!t[d].pagination}var Ht={};z(Ht,{disable:()=>Oo,enable:()=>Fo,getState:()=>Ao});var Be=document.fullscreenEnabled||document.mozFullscreenEnabled||document.webkitFullscreenEnabled||document.msFullscreenEnabled;function ut(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement}function Ge(t){return t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.msRequestFullscreen?t.msRequestFullscreen():void 0}function lt(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen()}function Fo(t){let e=t[d];if(!Be)return;let n=e.fullscreen={button:x("button",{part:"fullscreen-button",type:"button",name:"fullscreen",html:"Open in fullscreen"})};e.controls.append(n.button),n.changes=E("fullscreenchange",t).filter(o=>ut()===t).each(o=>{n.button.part.add("fullscreen-button-active"),n.button.innerHTML="Close fullscreen",document.activeElement!==t&&(n.tabIndex=t.tabIndex,t.tabIndex<0&&(t.tabIndex=0),t.focus());let r=E("fullscreenchange",t).each(i=>{n.button.part.remove("fullscreen-button-active"),n.button.innerHTML="Open in fullscreen",t.tabIndex=n.tabIndex,n.tabIndex=void 0,r.stop()})}),n.clicks=e.clicks.each(j({'[name="fullscreen"]':(o,r)=>{let i=ut();if(i===t){lt();return}i&&lt(),Ge(t)}}))}function Oo(t){let e=t[d];ut()===t&&lt(),e.fullscreen.button.remove(),e.fullscreen.clicks.stop(),e.fullscreen.changes.stop(),e.fullscreen=void 0}function Ao(t){return!!t[d].fullscreen}var ze={active:{attribute:function(t){this.active=t},set:function(t){let e=this[d],n=typeof t=="object"?t:/^\d/.test(t+"")?this.querySelector("#\\3"+(t+"")[0]+" "+(t+"").slice(1)):/^\#/.test(t+"")?this.querySelector(t):this.querySelector("#"+t);e.views.push(n)},get:function(){return this[d].active}},autoplay:ct(At,"autoplay"),controls:Ot({navigation:It,pagination:jt,fullscreen:Ht}),loop:ct(Ct,"loop")};var Co=import.meta.url.replace(/\/[^\/]*\.js/,"/slide-show-shadow.css"),Js=vt('<ul is="slide-show-ul">',Ie,ze,Co);export{Js as default};
