(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[408],{91220:function(h,m,i){"use strict";i.d(m,{Z:function(){return p}});var D=i(64254);function p(a,_){var l;if(typeof Symbol=="undefined"||a[Symbol.iterator]==null){if(Array.isArray(a)||(l=(0,D.Z)(a))||_&&a&&typeof a.length=="number"){l&&(a=l);var c=0,P=function(){};return{s:P,n:function(){return c>=a.length?{done:!0}:{done:!1,value:a[c++]}},e:function(u){throw u},f:P}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s=!0,v=!1,S;return{s:function(){l=a[Symbol.iterator]()},n:function(){var u=l.next();return s=u.done,u},e:function(u){v=!0,S=u},f:function(){try{!s&&l.return!=null&&l.return()}finally{if(v)throw S}}}}},32774:function(h){h.exports={det:"det___2iG9x",mainStage:"mainStage___Qp8In",draw:"draw___2IpRn",pblock:"pblock___wJLzi",progress:"progress___2SU43",rightSideBar:"rightSideBar___1NCKK"}},10063:function(h,m,i){"use strict";i.r(m);var D=i(34669),p=i(54458),a=i(2824),_=i(67294),l=i(32774),c=i.n(l),P=i(8088),s=i(61541),v=i(44434),S=i(5041),d=i(57436),u=i(14836),J=i(29919),w=i(13931),e=i(85893),k=function(){var H=(0,_.useState)(void 0),C=(0,a.Z)(H,2),I=C[0],F=C[1],G=(0,_.useState)({color:"",name:""}),T=(0,a.Z)(G,2),Z=T[0],j=T[1],Q=(0,_.useState)(),B=(0,a.Z)(Q,2),E=B[0],A=B[1],z=(0,_.useState)([]),N=(0,a.Z)(z,2),f=N[0],b=N[1],V=(0,_.useState)(1),R=(0,a.Z)(V,2),M=R[0],O=R[1],K=function(n){n||O(1),n<.1||n>3?O(1):O(n)},g=function(n){A(n),n!=null&&n.label&&j(n.label)},x=function(n){b(n)};(0,_.useEffect)(function(){localStorage.removeItem("history")},[]);function U(o,n){var t=localStorage.getItem("history"),r=t?JSON.parse(t):{index:-1,items:[]};console.log("history before set: ");var nn=JSON.stringify(r);console.log(nn);var L={currentAnnotation:n,annotations:o};if(JSON.stringify(r.items[r.index])==JSON.stringify(L)){console.log("equal with latest, do not add to history");return}var W=r.items.splice(0,r.index==0?1:r.index+1);console.log("itemsToKeep: ".concat(JSON.stringify(W))),console.log("itemsToAdd: ".concat(JSON.stringify(L))),r.items=W.concat([L]),r.index++,localStorage.setItem("history",JSON.stringify(r)),console.log("history after set: "),console.log(JSON.stringify(r))}var X=function(){var n=localStorage.getItem("history");if(!n){console.log("no historyStr, skip.");return}var t=JSON.parse(n);if(!!t){if(t.index>=t.items.length-1){console.log("already latest, skip. history.index:".concat(t.index," history.items.length:").concat(t.items.length));return}t.index++,localStorage.setItem("history",JSON.stringify(t)),console.log("After forward. history:".concat(JSON.stringify(t)));var r=t.items[t.index];A(r.currentAnnotation),b(r.annotations)}},Y=function(){var n=localStorage.getItem("history");if(!!n){var t=JSON.parse(n);if(!(!t||!t.index)&&!(t.index<=0)){t.index--,localStorage.setItem("history",JSON.stringify(t));var r=t.items[t.index];console.log("after backward: ".concat(JSON.stringify(t))),A(r.currentAnnotation),b(r.annotations)}}},$=function(n){for(var t=[],r=0;r<f.length;r++)f[r].annotationId==n.annotationId?t.push(n):t.push(f[r]);g(n),x(t),U(t,n)},q=(0,w.Z)({currentLabel:Z,currentTool:I,annotations:f,currentAnnotation:E,onAnnotationAdd:function(n){var t=f.concat([n]);x(t),E||g(n),U(t,n)},onAnnotationModify:$}),y=q;return(0,e.jsxs)(P.Z,{className:c().det,children:[(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(J.Z,{active:I=="polygon",onClick:function(){F("polygon"),g(void 0)},children:"Polygon"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){K(M+.1)},children:"Zoom in"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){K(M-.1)},children:"Zoom out"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){Y()},children:"Undo"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){X()},children:"Redo"}),(0,e.jsx)(s.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsxs)("div",{className:c().mainStage,children:[(0,e.jsx)("div",{className:c().draw,children:(0,e.jsx)(d.Z,{scale:M,annotations:f,onMouseDown:y.onMouseDown,onMouseMove:y.onMouseMove,onMouseUp:y.onMouseUp,createElementsFunc:y.createElementsFunc})}),(0,e.jsx)("div",{className:c().pblock,children:(0,e.jsx)("div",{className:c().progress,children:(0,e.jsx)(p.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)("div",{className:c().rightSideBar,children:[(0,e.jsx)(S.Z,{selectedLabel:Z,onLabelSelect:function(n){j(n),g(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(u.Z,{selectedAnnotation:E,annotations:f,onAnnotationSelect:function(n){n!=null&&n.delete||g(n)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(n){x(f.filter(function(t){return t.annotationId!=n.annotationId})),g(void 0)}})]})]})};m.default=k}}]);
