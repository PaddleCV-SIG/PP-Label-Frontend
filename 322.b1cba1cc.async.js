(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[322],{64322:function(pe,x,$){"use strict";$.d(x,{gu:function(){return te},os:function(){return ue},Gd:function(){return q},$L:function(){return fe}});var ee=$(86582),N=$(91220),V=$(70830),I=$(3182),de=$(34792),C=$(48086),O=$(2824),re=$(94043),u=$.n(re),z=$(48971),S=$(37071),W=$(81139),G=localStorage.getItem("basePath"),H=new W.VK(G?{basePath:G}:void 0),R=new W.U(H),ae=new W.sD(H),ne=new W.W6(H),Q=new W.Cl(H),X=new W.vb(H),te=function(c){return JSON.parse(JSON.stringify(c))};function ue(M){return M&&(M.toLowerCase().replace(/([-_][a-z])/g,function(c){return c.toUpperCase().replace("-","").replace("_","")}),M)}var Y=function(c,b,m){if(!!m){for(var t=typeof c=="number"?c:c[m],w=0;w<b.length;w++)if(t==b[w][m])return w}},le=function(c){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.1,20],m=c(1),t=(0,O.Z)(m,2),w=t[0],j=t[1];function k(f){var A=f;A<b[0]&&(A=b[0],C.default.error("Smallest scale is "+b[0])),A>b[1]&&(A=b[1],C.default.error("Largest scale is "+b[1])),j(A)}function o(f){k(w+f)}return{curr:w,change:o,setScale:k}},q=function(c){var b=c(),m=(0,O.Z)(b,2),t=m[0],w=m[1],j=c(),k=(0,O.Z)(j,2),o=k[0],f=k[1];function A(){return L.apply(this,arguments)}function L(){return L=(0,I.Z)(u().mark(function r(){var s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getAll();case 3:return s=e.sent,w(s),e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(0),console.log("project getAll err",e.t0),S.Z.parseError(e.t0,C.default),e.abrupt("return");case 13:case"end":return e.stop()}},r,null,[[0,8]])})),L.apply(this,arguments)}function y(r){return T.apply(this,arguments)}function T(){return T=(0,I.Z)(u().mark(function r(s){var g;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(s!=null){i.next=2;break}return i.abrupt("return",void 0);case 2:if(!(t&&t.length>1)){i.next=5;break}return C.default.error("Currently have multiple projects stored, use turnTo instead"),i.abrupt("return");case 5:return i.next=7,R.get(s);case 7:return g=i.sent,w([g]),f(0),i.abrupt("return",g);case 11:case"end":return i.stop()}},r)})),T.apply(this,arguments)}function _(r){return d.apply(this,arguments)}function d(){return d=(0,I.Z)(u().mark(function r(s){return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(s),e.abrupt("return",t[s]);case 2:case"end":return e.stop()}},r)})),d.apply(this,arguments)}function n(r){return v.apply(this,arguments)}function v(){return v=(0,I.Z)(u().mark(function r(s){var g;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("remove project",s),g=typeof s=="number"?s:s.projectId,i.next=4,R.remove(g);case 4:A();case 5:case"end":return i.stop()}},r)})),v.apply(this,arguments)}function l(r){return a.apply(this,arguments)}function a(){return a=(0,I.Z)(u().mark(function r(s){var g;return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,R.create(s);case 3:return g=i.sent,i.abrupt("return",g);case 7:return i.prev=7,i.t0=i.catch(0),console.log("project create err",i.t0),i.abrupt("return",S.Z.parseError(i.t0,C.default));case 11:case"end":return i.stop()}},r,null,[[0,7]])})),a.apply(this,arguments)}function p(r,s){return P.apply(this,arguments)}function P(){return P=(0,I.Z)(u().mark(function r(s,g){return u().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:R.update(s,g).then(function(K){console.log("project update res",K)}).catch(function(K){console.log("project update err ",K),S.Z.parseError(K,C.default)});case 1:case"end":return i.stop()}},r)})),P.apply(this,arguments)}return{all:t,getAll:A,getCurr:y,turnTo:_,remove:n,create:l,update:p,get curr(){if(!!t)return t[o]}}},se=function(c,b){var m=b.oneHot,t=m===void 0?!0:m,w=b.postSetCurr,j=c(),k=(0,O.Z)(j,2),o=k[0],f=k[1],A=c(),L=(0,O.Z)(A,2),y=L[0],T=L[1],_=c(new Set),d=(0,O.Z)(_,2),n=d[0],v=d[1],l=c(t),a=(0,O.Z)(l,2),p=a[0],P=a[1];function r(U){return s.apply(this,arguments)}function s(){return s=(0,I.Z)(u().mark(function U(E){var Z;return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,h.next=3,R.getLabels(E);case 3:return Z=h.sent,f(Z),h.abrupt("return",Z);case 8:return h.prev=8,h.t0=h.catch(0),console.log("label getall err ",h.t0),h.abrupt("return",S.Z.parseError(h.t0,C.default));case 12:case"end":return h.stop()}},U,null,[[0,8]])})),s.apply(this,arguments)}function g(U){console.log("label setcurr",U);var E=Y(U,o,"labelId");if(E==null)throw Error("label.setCurr label not found");T(E);var Z=o[E].labelId;p?n.has(Z)?(new Set,(0,V.Z)("activeIds")):(new Set([Z]),(0,V.Z)("activeIds")):n.has(Z)?n.delete(Z):n.add(Z),v(new Set(n)),w&&w(o[E])}function e(U){n.clear();var E=(0,N.Z)(U),Z;try{for(E.s();!(Z=E.n()).done;){var B=Z.value;n.add(B.labelId)}}catch(h){E.e(h)}finally{E.f()}}var i=function(){var U=(0,I.Z)(u().mark(function E(Z){var B;return u().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,X.create(Z);case 3:return B=D.sent,r(Z.projectId),D.abrupt("return",B);case 8:return D.prev=8,D.t0=D.catch(0),console.log("label create err",D.t0),D.abrupt("return",S.Z.parseError(D.t0,C.default));case 12:case"end":return D.stop()}},E,null,[[0,8]])}));return function(Z){return U.apply(this,arguments)}}(),K=function(){var U=(0,I.Z)(u().mark(function E(Z){return u().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("remove label",Z),h.prev=1,h.next=4,X.remove(Z.labelId);case 4:f(o.filter(function(D){return D.labelId!=Z.labelId})),h.next=11;break;case 7:h.prev=7,h.t0=h.catch(1),console.log("label remove err",h.t0),S.Z.parseError(h.t0,C.default);case 11:case"end":return h.stop()}},E,null,[[1,7]])}));return function(Z){return U.apply(this,arguments)}}();function F(U){return n.has(U.labelId)}var J=function(E){E!=null?P(E):P(!p)};return{all:o,getAll:r,activeIds:n,initActive:e,setCurr:g,isActive:F,create:i,remove:K,toggleOneHot:J,get curr(){if(o!=null)return o[y]}}},ie=function(c){var b=c(),m=(0,O.Z)(b,2),t=m[0],w=m[1],j=c(),k=(0,O.Z)(j,2),o=k[0],f=k[1],A=c(),L=(0,O.Z)(A,2),y=L[0],T=L[1],_=function(p){if(p<0){C.default.error("This is the first image. No previous image.");return}if(p==t.length){C.default.error("This is the final image. No next image.");return}console.log("turning to",p),f(p)},d=function(){var a=(0,I.Z)(u().mark(function p(P,r){var s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getTasks(P);case 3:if(s=e.sent,w(s),r==null){e.next=9;break}return console.log("getall turnto"),_(r),e.abrupt("return",[s,s[r]]);case 9:return e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(0),console.log("task getall err ",e.t0),e.abrupt("return",S.Z.parseError(e.t0,C.default));case 16:case"end":return e.stop()}},p,null,[[0,12]])}));return function(P,r){return a.apply(this,arguments)}}(),n=function(){var a=(0,I.Z)(u().mark(function p(P){var r,s;return u().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getProgress(P);case 3:if(r=e.sent,!(!r||r.finished==null||r.total==null)){e.next=6;break}throw Error("empty progress");case 6:return s=Math.ceil(r.finished/r.total*100),T(s),e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(0),console.log("get progress err",e.t0),S.Z.parseError(e.t0,C.default),e.abrupt("return",0);case 16:case"end":return e.stop()}},p,null,[[0,11]])}));return function(P){return a.apply(this,arguments)}}(),v=function(){var a=(0,I.Z)(u().mark(function p(){return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:_(o+1),console.log("all tasks",t);case 2:case"end":return r.stop()}},p)}));return function(){return a.apply(this,arguments)}}(),l=function(){var a=(0,I.Z)(u().mark(function p(){return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:_(o-1);case 1:case"end":return r.stop()}},p)}));return function(){return a.apply(this,arguments)}}();return{currIdx:o,all:t,turnTo:_,getAll:d,getProgress:n,progress:y,nextTask:v,prevTask:l,get curr(){if(!(o==null||t==null))return console.log("task.curr",t[o]),t[o]},get finished(){return Math.floor((t==null?void 0:t.length)*y/100)}}},ce=function(c){var b=c(),m=(0,O.Z)(b,2),t=m[0],w=m[1],j=c(),k=(0,O.Z)(j,2),o=k[0],f=k[1],A=function(){var _=(0,I.Z)(u().mark(function d(n){var v,l,a,p;return u().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,ne.getAnnotations(n);case 3:v=r.sent,l=(0,N.Z)(v);try{for(l.s();!(a=l.n()).done;)p=a.value,p.active=!1}catch(s){l.e(s)}finally{l.f()}return w(v),r.abrupt("return",v);case 10:return r.prev=10,r.t0=r.catch(0),console.log("ann getAll err",r.t0),r.abrupt("return",S.Z.parseError(r.t0,C.default));case 14:case"end":return r.stop()}},d,null,[[0,10]])}));return function(n){return _.apply(this,arguments)}}(),L=function(){var _=(0,I.Z)(u().mark(function d(n){var v;return u().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("create",n),a.prev=1,a.next=4,Q.create(n);case 4:return v=a.sent,n.dataId&&A(n.dataId),a.abrupt("return",v);case 9:return a.prev=9,a.t0=a.catch(1),console.log("annotation create err",a.t0),a.abrupt("return",S.Z.parseError(a.t0,C.default));case 13:case"end":return a.stop()}},d,null,[[1,9]])}));return function(n){return _.apply(this,arguments)}}(),y=function(){var _=(0,I.Z)(u().mark(function d(n){var v;return u().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("typeof",typeof n),v=typeof n!="number"?n.annotationId:n,a.prev=2,!v){a.next=6;break}return a.next=6,Q.remove(v);case 6:w(t.filter(function(p){return p.annotationId!=v})),a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(2),console.log("annotation remove err",a.t0),a.abrupt("return",S.Z.parseError(a.t0,C.default));case 13:case"end":return a.stop()}},d,null,[[2,9]])}));return function(n){return _.apply(this,arguments)}}(),T=function(){var _=(0,I.Z)(u().mark(function d(n,v){var l,a,p,P,r;return u().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(n!=null){g.next=3;break}return f(void 0),g.abrupt("return");case 3:l=(0,N.Z)(t);try{for(l.s();!(a=l.n()).done;)p=a.value,p.active=!1}catch(e){l.e(e)}finally{l.f()}P=t.filter(function(e){return e.annotationId==n.annotationId})[0],P.active=!n.active,r=Y(P,t,"annotationId"),f(r),w((0,ee.Z)(t)),console.log("ann on select label",v),v.setCurr(n.labelId);case 12:case"end":return g.stop()}},d)}));return function(n,v){return _.apply(this,arguments)}}();return{all:t,getAll:A,create:L,remove:y,setCurr:T,get curr(){if(!(!t||!o))return t[o]}}},oe=function(c){var b=c(),m=(0,O.Z)(b,2),t=m[0],w=m[1],j=c([]),k=(0,O.Z)(j,2),o=k[0],f=k[1],A=function(){var y=(0,I.Z)(u().mark(function T(_){return u().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:w(_);case 1:case"end":return n.stop()}},T)}));return function(_){return y.apply(this,arguments)}}(),L=function(){var y=(0,I.Z)(u().mark(function T(_,d){var n;return u().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,ae.getDatas(_);case 3:if(n=l.sent,f(n),d==null){l.next=8;break}return A(d),l.abrupt("return",[n,n[d]]);case 8:return l.abrupt("return",n);case 11:return l.prev=11,l.t0=l.catch(0),console.log("data getall err ",l.t0),l.abrupt("return",S.Z.parseError(l.t0,C.default));case 15:case"end":return l.stop()}},T,null,[[0,11]])}));return function(_,d){return y.apply(this,arguments)}}();return{all:o,getAll:L,turnTo:A,get curr(){if(!(t==null||o==null))return o[t]},get imgSrc(){return o&&o[t]?(console.log("imgsrc","".concat(G,"/datas/").concat(o[t].dataId,"/image?sault=").concat(o[t].sault)),"".concat(G,"/datas/").concat(o[t].dataId,"/image?sault=").concat(o[t].sault)):""}}},fe=function(c,b,m){m.effectTrigger||(m.effectTrigger={});var t=c(!1),w=(0,O.Z)(t,2),j=w[0],k=w[1],o=le(c),f=ie(c),A=oe(c),L=q(c),y=se(c,m.label),T=ce(c);return b(function(){var _=S.Z.getQueryVariable("projectId");if(_==null){z.m8.push("/");return}var d=parseInt(_);L.getCurr(_).catch(function(n){S.Z.parseError(n,C.default),z.m8.push("/")}),y.getAll(d),f.getAll(d),f.getProgress(d)},[]),b(function(){f.all&&f.all.length!=0&&f.turnTo(0)},[f.all]),b(function(){if(f.currIdx!=null){var _=function(){var d=(0,I.Z)(u().mark(function n(){var v,l,a,p,P,r,s,g,e,i;return u().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(console.log("onTaskChange",f.curr,y.all,f.progress),(v=f.curr)!==null&&v!==void 0&&v.projectId&&f.getProgress(f.curr.projectId),!((l=f.curr)!==null&&l!==void 0&&l.taskId)){F.next=15;break}return F.next=5,A.getAll(f.curr.taskId,0);case 5:return a=F.sent,p=(0,O.Z)(a,2),P=p[0],r=p[1],console.log(P),F.next=12,T.getAll(r.dataId);case 12:if(s=F.sent,y.all){g=(0,N.Z)(y.all);try{for(g.s();!(e=g.n()).done;)i=e.value,i.active=!1}catch(J){g.e(J)}finally{g.f()}}m.effectTrigger.postTaskChange&&m.effectTrigger.postTaskChange(y.all,s);case 15:k(!1);case 16:case"end":return F.stop()}},n)}));return function(){return d.apply(this,arguments)}}();_()}},[f.currIdx]),[j,k,o,T,f,A,L,y]}}}]);
