(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[112],{91220:function(R,O,e){"use strict";e.d(O,{Z:function(){return f}});var i=e(64254);function f(d,g){var l;if(typeof Symbol=="undefined"||d[Symbol.iterator]==null){if(Array.isArray(d)||(l=(0,i.Z)(d))||g&&d&&typeof d.length=="number"){l&&(d=l);var h=0,v=function(){};return{s:v,n:function(){return h>=d.length?{done:!0}:{done:!1,value:d[h++]}},e:function(E){throw E},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var D=!0,A=!1,s;return{s:function(){l=d[Symbol.iterator]()},n:function(){var E=l.next();return D=E.done,E},e:function(E){A=!0,s=E},f:function(){try{!D&&l.return!=null&&l.return()}finally{if(A)throw s}}}}},41435:function(R,O,e){"use strict";e.d(O,{Z:function(){return h}});var i=e(94663),f=e(80112);function d(v){return Function.toString.call(v).indexOf("[native code]")!==-1}var g=e(18597);function l(v,D,A){return(0,g.Z)()?l=Reflect.construct:l=function(u,E,r){var y=[null];y.push.apply(y,E);var M=Function.bind.apply(u,y),P=new M;return r&&(0,f.Z)(P,r.prototype),P},l.apply(null,arguments)}function h(v){var D=typeof Map=="function"?new Map:void 0;return h=function(s){if(s===null||!d(s))return s;if(typeof s!="function")throw new TypeError("Super expression must either be null or a function");if(typeof D!="undefined"){if(D.has(s))return D.get(s);D.set(s,u)}function u(){return l(s,arguments,(0,i.Z)(this).constructor)}return u.prototype=Object.create(s.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),(0,f.Z)(u,s)},h(v)}},41180:function(R){R.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},70362:function(R){R.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(R){R.exports={container:"container___2RXc3"}},17969:function(R){R.exports={col:"col___yKN-b"}},80638:function(){},31982:function(R,O,e){"use strict";var i=e(89032),f=e(15746),d=e(11849),g=e(13062),l=e(71230),h=e(11700),v=e(67294),D=e(41180),A=e.n(D),s=e(85893),u=function(r){return(0,s.jsxs)("div",{className:A().ppcard,style:r.style,children:[(0,s.jsx)(l.Z,{className:A().titleRow,style:{display:r.title?void 0:"none"},children:(0,s.jsx)(h.Z,{className:A().title,children:r.title})}),(0,s.jsx)(l.Z,{style:{marginTop:26},children:(0,s.jsx)(f.Z,{span:24,style:(0,d.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},r.innerStyle),children:r.children})})]})};O.Z=u},40318:function(R,O,e){"use strict";var i=e(57663),f=e(71577),d=e(48971),g=e(67294),l=e(70362),h=e.n(l),v=e(85893),D=function(s){return(0,v.jsxs)("div",{className:h().card,style:{height:s.height,width:s.width},onClick:function(){return d.m8.push(s.href?s.href:"")},children:[(0,v.jsx)("img",{className:h().thumbnail,alt:s.wording||h().thumbnail,src:s.imgSrc,style:{height:s.height,width:s.width}}),(0,v.jsx)(f.Z,{className:h().button,style:{width:s.width},children:s.children})]})};O.Z=D},11428:function(R,O,e){"use strict";var i=e(67294),f=e(48627),d=e.n(f),g=e(85893),l=function(v){return(0,g.jsx)("div",{className:"".concat(d().container),style:{backgroundImage:"url(./pics/background.png)"},children:v.children})};O.Z=l},52940:function(R,O,e){"use strict";var i=e(11849),f=e(89032),d=e(15746),g=e(2824),l=e(67294),h=e(17969),v=e.n(h),D=e(85893),A=function(u){var E=(0,l.useState)(!1),r=(0,g.Z)(E,2),y=r[0],M=r[1];return(0,D.jsx)(d.Z,(0,i.Z)((0,i.Z)({},u),{},{className:"".concat(v().col," ").concat(u.className),style:{zIndex:y?11:10,width:"100%"},onMouseOver:function(){M(!0)},onMouseLeave:function(){M(!1)},children:u.children}))};O.Z=A},12405:function(R,O,e){"use strict";e.r(O);var i=e(89032),f=e(15746),d=e(13062),g=e(71230),l=e(2824),h=e(67294),v=e(40318),D=e(31982),A=e(11428),s=e(52940),u=e(91156),E=e(85893),r=function(){function M(){for(var P=[],c=0,W=Object.entries(u.ux);c<W.length;c++){var C=W[c],m=(0,l.Z)(C,2),U=m[0],K=m[1];P.push((0,E.jsx)(s.Z,{span:4,children:(0,E.jsx)(v.Z,{height:360,width:310,imgSrc:K.avatar,href:"/project_detail?taskCategory="+U,children:K.name})}))}return P}return(0,E.jsx)(A.Z,{children:(0,E.jsx)(g.Z,{style:{marginTop:20},children:(0,E.jsx)(f.Z,{span:24,children:(0,E.jsx)(D.Z,{style:{height:500},children:(0,E.jsx)(g.Z,{children:M()})})})})})};O.default=r},91156:function(R,O,e){"use strict";e.d(O,{F$:function(){return y},LV:function(){return U},os:function(){return K},ux:function(){return $}});var i=e(34792),f=e(94043),d=e.n(f),g=e(37071),l=e(81139),h=e(63891),v=e(13868),D=e(70676),A=e(54919),s=e(6276),u=e(59124),E=localStorage.getItem("basePath"),r=new l.VK(E?{basePath:E}:void 0),y=new h.U(r),M=new v.v(r),P=new A.W(r),c=new s.s(r),W=new u.C(r);function C(t){return JSON.parse(JSON.stringify(t))}var m=function(n,a,_){if(!_)return-1;for(var o=0;o<a.length;o++)if(n[_]==a[o][_])return o;return-1};function U(t){return t&&t.replace(/[A-Z]/g,function(n){return"_".concat(n.toLowerCase())})}function K(t){return t&&(t.toLowerCase().replace(/([-_][a-z])/g,function(n){return n.toUpperCase().replace("-","").replace("_","")}),t)}var $={classification:{name:"Image Classification",avatar:"./pics/classification.jpg",id:1},detection:{name:"Detection",avatar:"./pics/object_detection.jpg",id:2},semanticSegmentation:{name:"Semantic Segmentation",avatar:"./pics/semantic_segmentation.jpg",id:3},instanceSegmentation:{name:"Instance Segmentation",avatar:"./pics/instance_segmentation.jpg",id:4},keypointDetection:{name:"Keypoint Detection",avatar:"./pics/keypoint_detection.jpg",id:5}},H=function(n,a){var _=_toConsumableArray(n);for(var o in n)_[o].active=!1;for(var p in n)m(n[p],a,"labelId")!=-1&&(_[p].active=!0);return console.log("activa labs",_),_};function F(t){return x.apply(this,arguments)}function x(){return x=_asyncToGenerator(_regeneratorRuntime.mark(function t(n){return _regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:y.getAll().then(function(o){console.log("get all projects",C(o)),n(C(o))}).catch(function(o){serviceUtils.parseError(o,_message)});case 1:case"end":return _.stop()}},t)})),x.apply(this,arguments)}function Z(t){return b.apply(this,arguments)}function b(){return b=_asyncToGenerator(_regeneratorRuntime.mark(function t(n){var a,_=arguments;return _regeneratorRuntime.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:a=_.length>1&&_[1]!==void 0?_[1]:null,console.log("get project id ",n),y.get(n).then(function(B){return console.log("getProject res",B),a&&a(B),B}).catch(function(B){console.log("getProject err",B),serviceUtils.parseError(B,_message)});case 3:case"end":return p.stop()}},t)})),b.apply(this,arguments)}function Y(t,n){return j.apply(this,arguments)}function j(){return j=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,a){return _regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:console.log("delete pj, pjid",n),y.remove(n).then(function(p){console.log("delete project",p),F(a)}).catch(function(p){console.log(p),serviceUtils.parseError(p,_message)});case 2:case"end":return o.stop()}},t)})),j.apply(this,arguments)}function J(t){return S.apply(this,arguments)}function S(){return S=_asyncToGenerator(_regeneratorRuntime.mark(function t(n){return _regeneratorRuntime.wrap(function(_){for(;;)switch(_.prev=_.next){case 0:c.getAll().then(function(o){console.log("got tasks",o),n&&n(o)}).catch(function(o){console.log("get tasks err",o),serviceUtils.parseError(o,_message)});case 1:case"end":return _.stop()}},t)})),S.apply(this,arguments)}function z(t,n){return L.apply(this,arguments)}function L(){return L=_asyncToGenerator(_regeneratorRuntime.mark(function t(n,a){return _regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:console.log("get task id",n),c.get(n).then(function(p){console.log("got task ",p),a&&a(p)});case 2:case"end":return o.stop()}},t)})),L.apply(this,arguments)}function G(t){return N.apply(this,arguments)}function N(){return N=_asyncToGenerator(_regeneratorRuntime.mark(function t(n){var a,_,o,p,B;return _regeneratorRuntime.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:if(n){T.next=2;break}return T.abrupt("return",0);case 2:return T.prev=2,T.next=5,y.getTasks(n);case 5:a=T.sent,_=0,o=_createForOfIteratorHelper(a);try{for(o.s();!(p=o.n()).done;)B=p.value,B.annotations.length!=0&&_++}catch(k){o.e(k)}finally{o.f()}return console.log("progress",Math.ceil(_/a.length*100)),T.abrupt("return",Math.ceil(_/a.length*100));case 13:return T.prev=13,T.t0=T.catch(2),console.log("get progress err",T.t0),serviceUtils.parseError(T.t0,_message),T.abrupt("return",0);case 18:case"end":return T.stop()}},t,null,[[2,13]])})),N.apply(this,arguments)}function I(t,n){console.log("getLabels projectid",t),!!t&&y.getLabels(t).then(function(a){console.log("got labels ",a),n(C(a))}).catch(function(a){serviceUtils.parseError(a,_message)})}function V(t,n,a){var _=LabelFromJSON(n);_.projectId=t,M.create(_).then(function(){I(t,a)}).catch(function(o){serviceUtils.parseError(o,_message)})}function X(t,n){console.log("delete label",t),M.remove(t.labelId).then(function(){_message.error("Label "+t.name+" is deleted!"),I(t.projectId,n)}).catch(function(a){serviceUtils.parseError(a,_message)})}},99134:function(R,O,e){"use strict";var i=e(67294),f=(0,i.createContext)({});O.Z=f},21584:function(R,O,e){"use strict";var i=e(96156),f=e(22122),d=e(90484),g=e(67294),l=e(94184),h=e.n(l),v=e(99134),D=e(65632),A=function(r,y){var M={};for(var P in r)Object.prototype.hasOwnProperty.call(r,P)&&y.indexOf(P)<0&&(M[P]=r[P]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,P=Object.getOwnPropertySymbols(r);c<P.length;c++)y.indexOf(P[c])<0&&Object.prototype.propertyIsEnumerable.call(r,P[c])&&(M[P[c]]=r[P[c]]);return M};function s(r){return typeof r=="number"?"".concat(r," ").concat(r," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(r)?"0 0 ".concat(r):r}var u=["xs","sm","md","lg","xl","xxl"],E=g.forwardRef(function(r,y){var M,P=g.useContext(D.E_),c=P.getPrefixCls,W=P.direction,C=g.useContext(v.Z),m=C.gutter,U=C.wrap,K=C.supportFlexGap,$=r.prefixCls,H=r.span,F=r.order,x=r.offset,Z=r.push,b=r.pull,Y=r.className,j=r.children,J=r.flex,S=r.style,z=A(r,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),L=c("col",$),G={};u.forEach(function(t){var n,a={},_=r[t];typeof _=="number"?a.span=_:(0,d.Z)(_)==="object"&&(a=_||{}),delete z[t],G=(0,f.Z)((0,f.Z)({},G),(n={},(0,i.Z)(n,"".concat(L,"-").concat(t,"-").concat(a.span),a.span!==void 0),(0,i.Z)(n,"".concat(L,"-").concat(t,"-order-").concat(a.order),a.order||a.order===0),(0,i.Z)(n,"".concat(L,"-").concat(t,"-offset-").concat(a.offset),a.offset||a.offset===0),(0,i.Z)(n,"".concat(L,"-").concat(t,"-push-").concat(a.push),a.push||a.push===0),(0,i.Z)(n,"".concat(L,"-").concat(t,"-pull-").concat(a.pull),a.pull||a.pull===0),(0,i.Z)(n,"".concat(L,"-rtl"),W==="rtl"),n))});var N=h()(L,(M={},(0,i.Z)(M,"".concat(L,"-").concat(H),H!==void 0),(0,i.Z)(M,"".concat(L,"-order-").concat(F),F),(0,i.Z)(M,"".concat(L,"-offset-").concat(x),x),(0,i.Z)(M,"".concat(L,"-push-").concat(Z),Z),(0,i.Z)(M,"".concat(L,"-pull-").concat(b),b),M),Y,G),I={};if(m&&m[0]>0){var V=m[0]/2;I.paddingLeft=V,I.paddingRight=V}if(m&&m[1]>0&&!K){var X=m[1]/2;I.paddingTop=X,I.paddingBottom=X}return J&&(I.flex=s(J),U===!1&&!I.minWidth&&(I.minWidth=0)),g.createElement("div",(0,f.Z)({},z,{style:(0,f.Z)((0,f.Z)({},I),S),className:N,ref:y}),j)});E.displayName="Col",O.Z=E},92820:function(R,O,e){"use strict";var i=e(22122),f=e(96156),d=e(90484),g=e(28481),l=e(67294),h=e(94184),v=e.n(h),D=e(65632),A=e(99134),s=e(93355),u=e(24308),E=e(98082),r=function(c,W){var C={};for(var m in c)Object.prototype.hasOwnProperty.call(c,m)&&W.indexOf(m)<0&&(C[m]=c[m]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var U=0,m=Object.getOwnPropertySymbols(c);U<m.length;U++)W.indexOf(m[U])<0&&Object.prototype.propertyIsEnumerable.call(c,m[U])&&(C[m[U]]=c[m[U]]);return C},y=(0,s.b)("top","middle","bottom","stretch"),M=(0,s.b)("start","end","center","space-around","space-between"),P=l.forwardRef(function(c,W){var C,m=c.prefixCls,U=c.justify,K=c.align,$=c.className,H=c.style,F=c.children,x=c.gutter,Z=x===void 0?0:x,b=c.wrap,Y=r(c,["prefixCls","justify","align","className","style","children","gutter","wrap"]),j=l.useContext(D.E_),J=j.getPrefixCls,S=j.direction,z=l.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),L=(0,g.Z)(z,2),G=L[0],N=L[1],I=(0,E.Z)(),V=l.useRef(Z);l.useEffect(function(){var re=u.ZP.subscribe(function(Q){var w=V.current||0;(!Array.isArray(w)&&(0,d.Z)(w)==="object"||Array.isArray(w)&&((0,d.Z)(w[0])==="object"||(0,d.Z)(w[1])==="object"))&&N(Q)});return function(){return u.ZP.unsubscribe(re)}},[]);var X=function(){var Q=[0,0],w=Array.isArray(Z)?Z:[Z,0];return w.forEach(function(q,ae){if((0,d.Z)(q)==="object")for(var te=0;te<u.c4.length;te++){var ne=u.c4[te];if(G[ne]&&q[ne]!==void 0){Q[ae]=q[ne];break}}else Q[ae]=q||0}),Q},t=J("row",m),n=X(),a=v()(t,(C={},(0,f.Z)(C,"".concat(t,"-no-wrap"),b===!1),(0,f.Z)(C,"".concat(t,"-").concat(U),U),(0,f.Z)(C,"".concat(t,"-").concat(K),K),(0,f.Z)(C,"".concat(t,"-rtl"),S==="rtl"),C),$),_={},o=n[0]>0?n[0]/-2:void 0,p=n[1]>0?n[1]/-2:void 0;if(o&&(_.marginLeft=o,_.marginRight=o),I){var B=(0,g.Z)(n,2);_.rowGap=B[1]}else p&&(_.marginTop=p,_.marginBottom=p);var ee=(0,g.Z)(n,2),T=ee[0],k=ee[1],_e=l.useMemo(function(){return{gutter:[T,k],wrap:b,supportFlexGap:I}},[T,k,b,I]);return l.createElement(A.Z.Provider,{value:_e},l.createElement("div",(0,i.Z)({},Y,{className:a,style:(0,i.Z)((0,i.Z)({},_),H),ref:W}),F))});P.displayName="Row",O.Z=P},6999:function(R,O,e){"use strict";var i=e(38663),f=e.n(i),d=e(80638),g=e.n(d)}}]);