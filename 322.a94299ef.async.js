(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[322],{64322:function(pe,x,$){"use strict";$.d(x,{gu:function(){return te},os:function(){return ue},Gd:function(){return q},$L:function(){return oe}});var ee=$(86582),N=$(91220),V=$(70830),I=$(3182),de=$(34792),y=$(48086),O=$(2824),re=$(94043),t=$.n(re),z=$(48971),S=$(37071),W=$(81139),G=localStorage.getItem("basePath"),H=new W.VK(G?{basePath:G}:void 0),R=new W.U(H),ae=new W.sD(H),ne=new W.W6(H),Q=new W.Cl(H),X=new W.vb(H),te=function(f){return JSON.parse(JSON.stringify(f))};function ue(M){return M&&(M.toLowerCase().replace(/([-_][a-z])/g,function(f){return f.toUpperCase().replace("-","").replace("_","")}),M)}var Y=function(f,b,m){if(!!m){for(var u=typeof f=="number"?f:f[m],w=0;w<b.length;w++)if(u==b[w][m])return w}},le=function(f){var b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[.1,20],m=f(1),u=(0,O.Z)(m,2),w=u[0],j=u[1];function k(p){var P=p;P<b[0]&&(P=b[0],y.default.error("Smallest scale is "+b[0])),P>b[1]&&(P=b[1],y.default.error("Largest scale is "+b[1])),j(P)}function d(p){k(w+p)}return{curr:w,change:d,setScale:k}},q=function(f){var b=f(),m=(0,O.Z)(b,2),u=m[0],w=m[1],j=f(),k=(0,O.Z)(j,2),d=k[0],p=k[1];function P(){return L.apply(this,arguments)}function L(){return L=(0,I.Z)(t().mark(function r(){var s;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getAll();case 3:return s=e.sent,w(s),e.abrupt("return",s);case 8:return e.prev=8,e.t0=e.catch(0),console.log("project getAll err",e.t0),S.Z.parseError(e.t0,y.default),e.abrupt("return");case 13:case"end":return e.stop()}},r,null,[[0,8]])})),L.apply(this,arguments)}function C(r){return T.apply(this,arguments)}function T(){return T=(0,I.Z)(t().mark(function r(s){var g;return t().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(s!=null){i.next=2;break}return i.abrupt("return",void 0);case 2:if(!(u&&u.length>1)){i.next=5;break}return y.default.error("Currently have multiple projects stored, use turnTo instead"),i.abrupt("return");case 5:return i.next=7,R.get(s);case 7:return g=i.sent,w([g]),p(0),i.abrupt("return",g);case 11:case"end":return i.stop()}},r)})),T.apply(this,arguments)}function _(r){return c.apply(this,arguments)}function c(){return c=(0,I.Z)(t().mark(function r(s){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(s),e.abrupt("return",u[s]);case 2:case"end":return e.stop()}},r)})),c.apply(this,arguments)}function n(r){return v.apply(this,arguments)}function v(){return v=(0,I.Z)(t().mark(function r(s){var g;return t().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return console.log("remove project",s),g=typeof s=="number"?s:s.projectId,i.next=4,R.remove(g);case 4:P();case 5:case"end":return i.stop()}},r)})),v.apply(this,arguments)}function l(r){return a.apply(this,arguments)}function a(){return a=(0,I.Z)(t().mark(function r(s){var g;return t().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,R.create(s);case 3:return g=i.sent,i.abrupt("return",g);case 7:return i.prev=7,i.t0=i.catch(0),console.log("project create err",i.t0),i.abrupt("return",S.Z.parseError(i.t0,y.default));case 11:case"end":return i.stop()}},r,null,[[0,7]])})),a.apply(this,arguments)}function o(r,s){return A.apply(this,arguments)}function A(){return A=(0,I.Z)(t().mark(function r(s,g){return t().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:R.update(s,g).then(function(K){console.log("project update res",K)}).catch(function(K){console.log("project update err ",K),S.Z.parseError(K,y.default)});case 1:case"end":return i.stop()}},r)})),A.apply(this,arguments)}return{all:u,getAll:P,getCurr:C,turnTo:_,remove:n,create:l,update:o,get curr(){if(!!u)return u[d]}}},se=function(f,b){var m=b.oneHot,u=m===void 0?!0:m,w=b.postSetCurr,j=f(),k=(0,O.Z)(j,2),d=k[0],p=k[1],P=f(),L=(0,O.Z)(P,2),C=L[0],T=L[1],_=f(new Set),c=(0,O.Z)(_,2),n=c[0],v=c[1],l=f(u),a=(0,O.Z)(l,2),o=a[0],A=a[1];function r(U){return s.apply(this,arguments)}function s(){return s=(0,I.Z)(t().mark(function U(E){var Z;return t().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.prev=0,h.next=3,R.getLabels(E);case 3:return Z=h.sent,p(Z),h.abrupt("return",Z);case 8:return h.prev=8,h.t0=h.catch(0),console.log("label getall err ",h.t0),h.abrupt("return",S.Z.parseError(h.t0,y.default));case 12:case"end":return h.stop()}},U,null,[[0,8]])})),s.apply(this,arguments)}function g(U){console.log("label setcurr",U);var E=Y(U,d,"labelId");if(E==null)throw Error("label.setCurr label not found");T(E);var Z=d[E].labelId;o?n.has(Z)?(new Set,(0,V.Z)("activeIds")):(new Set([Z]),(0,V.Z)("activeIds")):n.has(Z)?n.delete(Z):n.add(Z),v(new Set(n)),w&&w(d[E])}function e(U){n.clear();var E=(0,N.Z)(U),Z;try{for(E.s();!(Z=E.n()).done;){var B=Z.value;n.add(B.labelId)}}catch(h){E.e(h)}finally{E.f()}}var i=function(){var U=(0,I.Z)(t().mark(function E(Z){var B;return t().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.prev=0,D.next=3,X.create(Z);case 3:return B=D.sent,r(Z.projectId),D.abrupt("return",B);case 8:return D.prev=8,D.t0=D.catch(0),console.log("label create err",D.t0),D.abrupt("return",S.Z.parseError(D.t0,y.default));case 12:case"end":return D.stop()}},E,null,[[0,8]])}));return function(Z){return U.apply(this,arguments)}}(),K=function(){var U=(0,I.Z)(t().mark(function E(Z){return t().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return console.log("remove label",Z),h.prev=1,h.next=4,X.remove(Z.labelId);case 4:p(d.filter(function(D){return D.labelId!=Z.labelId})),h.next=11;break;case 7:h.prev=7,h.t0=h.catch(1),console.log("label remove err",h.t0),S.Z.parseError(h.t0,y.default);case 11:case"end":return h.stop()}},E,null,[[1,7]])}));return function(Z){return U.apply(this,arguments)}}();function F(U){return n.has(U.labelId)}var J=function(E){E!=null?A(E):A(!o)};return{all:d,getAll:r,activeIds:n,initActive:e,setCurr:g,isActive:F,create:i,remove:K,toggleOneHot:J,get curr(){if(d!=null)return d[C]}}},ie=function(f){var b=f(),m=(0,O.Z)(b,2),u=m[0],w=m[1],j=f(),k=(0,O.Z)(j,2),d=k[0],p=k[1],P=f(),L=(0,O.Z)(P,2),C=L[0],T=L[1],_=function(o){if(o<0){y.default.error("This is the first image. No previous image.");return}if(o==u.length){y.default.error("This is the final image. No next image.");return}p(o)},c=function(){var a=(0,I.Z)(t().mark(function o(A,r){var s;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getTasks(A);case 3:if(s=e.sent,w(s),r==null){e.next=9;break}return console.log("getall turnto"),_(r),e.abrupt("return",[s,s[r]]);case 9:return e.abrupt("return",s);case 12:return e.prev=12,e.t0=e.catch(0),console.log("task getall err ",e.t0),e.abrupt("return",S.Z.parseError(e.t0,y.default));case 16:case"end":return e.stop()}},o,null,[[0,12]])}));return function(A,r){return a.apply(this,arguments)}}(),n=function(){var a=(0,I.Z)(t().mark(function o(A){var r,s;return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.getProgress(A);case 3:if(r=e.sent,!(!r||r.finished==null||r.total==null)){e.next=6;break}throw Error("empty progress");case 6:return s=Math.ceil(r.finished/r.total*100),T(s),e.abrupt("return",s);case 11:return e.prev=11,e.t0=e.catch(0),console.log("get progress err",e.t0),S.Z.parseError(e.t0,y.default),e.abrupt("return",0);case 16:case"end":return e.stop()}},o,null,[[0,11]])}));return function(A){return a.apply(this,arguments)}}(),v=function(){var a=(0,I.Z)(t().mark(function o(){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:_(d+1),console.log("all tasks",u);case 2:case"end":return r.stop()}},o)}));return function(){return a.apply(this,arguments)}}(),l=function(){var a=(0,I.Z)(t().mark(function o(){return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:_(d-1);case 1:case"end":return r.stop()}},o)}));return function(){return a.apply(this,arguments)}}();return{currIdx:d,all:u,turnTo:_,getAll:c,getProgress:n,progress:C,nextTask:v,prevTask:l,get curr(){if(!(d==null||u==null))return u[d]},get finished(){return Math.floor((u==null?void 0:u.length)*C/100)}}},fe=function(f){var b=f(),m=(0,O.Z)(b,2),u=m[0],w=m[1],j=f(),k=(0,O.Z)(j,2),d=k[0],p=k[1],P=function(){var _=(0,I.Z)(t().mark(function c(n){var v,l,a,o;return t().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,ne.getAnnotations(n);case 3:v=r.sent,l=(0,N.Z)(v);try{for(l.s();!(a=l.n()).done;)o=a.value,o.active=!1}catch(s){l.e(s)}finally{l.f()}return w(v),r.abrupt("return",v);case 10:return r.prev=10,r.t0=r.catch(0),console.log("ann getAll err",r.t0),r.abrupt("return",S.Z.parseError(r.t0,y.default));case 14:case"end":return r.stop()}},c,null,[[0,10]])}));return function(n){return _.apply(this,arguments)}}(),L=function(){var _=(0,I.Z)(t().mark(function c(n){var v;return t().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return console.log("create",n),a.prev=1,a.next=4,Q.create(n);case 4:return v=a.sent,n.dataId&&P(n.dataId),a.abrupt("return",v);case 9:return a.prev=9,a.t0=a.catch(1),console.log("annotation create err",a.t0),a.abrupt("return",S.Z.parseError(a.t0,y.default));case 13:case"end":return a.stop()}},c,null,[[1,9]])}));return function(n){return _.apply(this,arguments)}}(),C=function(){var _=(0,I.Z)(t().mark(function c(n){var v;return t().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(console.log("typeof",typeof n),v=typeof n!="number"?n.annotationId:n,a.prev=2,!v){a.next=6;break}return a.next=6,Q.remove(v);case 6:w(u.filter(function(o){return o.annotationId!=v})),a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(2),console.log("annotation remove err",a.t0),a.abrupt("return",S.Z.parseError(a.t0,y.default));case 13:case"end":return a.stop()}},c,null,[[2,9]])}));return function(n){return _.apply(this,arguments)}}(),T=function(){var _=(0,I.Z)(t().mark(function c(n,v){var l,a,o,A,r;return t().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(n!=null){g.next=3;break}return p(void 0),g.abrupt("return");case 3:l=(0,N.Z)(u);try{for(l.s();!(a=l.n()).done;)o=a.value,o.active=!1}catch(e){l.e(e)}finally{l.f()}A=u.filter(function(e){return e.annotationId==n.annotationId})[0],A.active=!n.active,r=Y(A,u,"annotationId"),p(r),w((0,ee.Z)(u)),console.log("ann on select label",v),v.setCurr(n.labelId);case 12:case"end":return g.stop()}},c)}));return function(n,v){return _.apply(this,arguments)}}();return{all:u,getAll:P,create:L,remove:C,setCurr:T,get curr(){if(!(!u||!d))return u[d]}}},ce=function(f){var b=f(),m=(0,O.Z)(b,2),u=m[0],w=m[1],j=f([]),k=(0,O.Z)(j,2),d=k[0],p=k[1],P=function(){var C=(0,I.Z)(t().mark(function T(_){return t().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:w(_);case 1:case"end":return n.stop()}},T)}));return function(_){return C.apply(this,arguments)}}(),L=function(){var C=(0,I.Z)(t().mark(function T(_,c){var n;return t().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,ae.getDatas(_);case 3:if(n=l.sent,p(n),c==null){l.next=8;break}return P(c),l.abrupt("return",[n,n[c]]);case 8:return l.abrupt("return",n);case 11:return l.prev=11,l.t0=l.catch(0),console.log("data getall err ",l.t0),l.abrupt("return",S.Z.parseError(l.t0,y.default));case 15:case"end":return l.stop()}},T,null,[[0,11]])}));return function(_,c){return C.apply(this,arguments)}}();return{all:d,getAll:L,turnTo:P,get curr(){if(!(u==null||d==null))return d[u]},get imgSrc(){return d&&d[u]?"".concat(G,"/datas/").concat(d[u].dataId,"/image?sault=").concat(d[u].sault):""}}},oe=function(f,b,m){m.effectTrigger||(m.effectTrigger={});var u=f(!1),w=(0,O.Z)(u,2),j=w[0],k=w[1],d=le(f),p=ie(f),P=ce(f),L=q(f),C=se(f,m.label),T=fe(f);return b(function(){var _=S.Z.getQueryVariable("projectId");if(_==null){z.m8.push("/");return}var c=parseInt(_);L.getCurr(_).catch(function(n){S.Z.parseError(n,y.default),z.m8.push("/")}),C.getAll(c),p.getAll(c),p.getProgress(c)},[]),b(function(){p.all&&p.all.length!=0&&p.turnTo(0)},[p.all]),b(function(){if(p.currIdx!=null){var _=function(){var c=(0,I.Z)(t().mark(function n(){var v,l,a,o,A,r,s,g,e,i;return t().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if((v=p.curr)!==null&&v!==void 0&&v.projectId&&p.getProgress(p.curr.projectId),!((l=p.curr)!==null&&l!==void 0&&l.taskId)){F.next=13;break}return F.next=4,P.getAll(p.curr.taskId,0);case 4:return a=F.sent,o=(0,O.Z)(a,2),A=o[0],r=o[1],F.next=10,T.getAll(r.dataId);case 10:if(s=F.sent,C.all){g=(0,N.Z)(C.all);try{for(g.s();!(e=g.n()).done;)i=e.value,i.active=!1}catch(J){g.e(J)}finally{g.f()}}m.effectTrigger.postTaskChange&&m.effectTrigger.postTaskChange(C.all,s);case 13:k(!1);case 14:case"end":return F.stop()}},n)}));return function(){return c.apply(this,arguments)}}();_()}},[p.currIdx]),[j,k,d,T,p,P,L,C]}}}]);