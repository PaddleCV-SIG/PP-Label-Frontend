(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[18],{41435:function(Y,E,e){"use strict";e.d(E,{Z:function(){return w}});var I=e(94663),$=e(80112);function X(L){return Function.toString.call(L).indexOf("[native code]")!==-1}var Q=e(18597);function P(L,N,z){return(0,Q.Z)()?P=Reflect.construct:P=function(g,W,x){var R=[null];R.push.apply(R,W);var v=Function.bind.apply(g,R),T=new v;return x&&(0,$.Z)(T,x.prototype),T},P.apply(null,arguments)}function w(L){var N=typeof Map=="function"?new Map:void 0;return w=function(f){if(f===null||!X(f))return f;if(typeof f!="function")throw new TypeError("Super expression must either be null or a function");if(typeof N!="undefined"){if(N.has(f))return N.get(f);N.set(f,g)}function g(){return P(f,arguments,(0,I.Z)(this).constructor)}return g.prototype=Object.create(f.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}}),(0,$.Z)(g,f)},w(L)}},72285:function(Y){Y.exports={det:"det___3GOn8",mainStage:"mainStage___36l4G",draw:"draw___1EIyT",pblock:"pblock___107zJ",progress:"progress___vIcpV",rightSideBar:"rightSideBar___3n2bi",determinOutline:"determinOutline___1p2xS"}},80212:function(Y,E,e){"use strict";e.r(E),e.d(E,{default:function(){return pn}});var I=e(11849),$=e(57663),X=e(71577),Q=e(20228),P=e(11382),w=e(34669),L=e(54458),N=e(34792),z=e(48086),f=e(2824),g=e(67294),W=e(72285),x=e.n(W),R=e(8088),v=e(61541),T=e(44434),on=e(5041),rn=e(57436),an=e(14836),n=e(85893),sn=function(r){return(0,n.jsx)(v.Z,{active:r.active,imgSrc:r.imgSrc||"./pics/buttons/rectangle.png",onClick:r.onClick,children:r.children})},cn=sn,ln=e(91220),G=e(65031);function un(t){var r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return r?{r:parseInt(r[1],16),g:parseInt(r[2],16),b:parseInt(r[3],16)}:null}function q(t,r){if(!(!t||!r))return{color:t,points:r}}function dn(t,r,y,M,l,h,m){if(!t||!t.lines||!t.lines[0])return[(0,n.jsx)(n.Fragment,{})];var o=t.lines[0].points,u=t.lines[0].color,d=un(u);if(!d)return[(0,n.jsx)(n.Fragment,{})];var C=(m==null?void 0:m.annotationId)==t.annotationId,A=C?.5:.1,p=void 0,Z=[];return o.forEach(function(S,b){if(!p){p=S;return}Z.push((0,n.jsx)(G.Cd,{onMouseDown:function(){l=="mover"&&h(t)},draggable:l=="mover",onDragMove:function(F){console.log("Circle onDrageMove");var J=F.evt.offsetX/M,O=F.evt.offsetY/M;o[b-1]=J,o[b]=O;var k=(0,I.Z)((0,I.Z)({},t),{},{lines:[{color:u,points:o}]});r(k)},onMouseOver:function(){console.log("Circle onMouseOver"),l=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){console.log("Circle onMouseOut"),document.body.style.cursor="default"},x:p,y:S,radius:5,fill:u})),console.log(b,o),o.length>4&&o.splice(b+1,2),p=void 0}),[(0,n.jsxs)(G.ZA,{children:[(0,n.jsx)(G.UL,{onMouseOver:function(){l=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){l=="mover"&&h(t)},stroke:u,strokeWidth:2,globalCompositeOperation:"source-over",lineCap:"round",x:o[0],y:o[1],width:o[2]-o[0],height:o[3]-o[1],closed:!0,fill:"rgba(".concat(d.r,", ").concat(d.g,", ").concat(d.b,", ").concat(A,")")}),Z]},t.annotationId)]}function fn(t){var r=0,y=(0,ln.Z)(t),M;try{for(y.s();!(M=y.n()).done;){var l=M.value;!l||l.annotationId>r&&(r=l.annotationId)}}catch(h){y.e(h)}finally{y.f()}return r}function vn(t){var r=function(m,o){var u,d=m.evt.offsetX/o,C=m.evt.offsetY/o,A=q((u=t.currentLabel)===null||u===void 0?void 0:u.color,[d,C]);!A||t.onAnnotationAdd({tool:"polygon",annotationId:fn(t.annotations)+1,label:t.currentLabel,lines:[A]})},y=function(m,o){var u,d;if(!!t.currentAnnotation){var C=m.evt.offsetX/o,A=m.evt.offsetY/o,p=t.currentAnnotation.lines||[],Z=q((u=t.currentLabel)===null||u===void 0?void 0:u.color,(d=p[0])===null||d===void 0?void 0:d.points.concat([C,A]));if(!!Z){var S={tool:"polygon",annotationId:t.currentAnnotation.annotationId,label:t.currentAnnotation.label,lines:[Z]};t.onAnnotationModify(S)}}},M=function(m,o){t.currentTool=="polygon"&&(t.currentAnnotation?y(m,o):r(m,o))},l=function(){t.currentTool=="polygon"&&t.onMouseUp()};return{onMouseDown:M,onMouseMove:function(){},onMouseUp:l,createElementsFunc:dn}}var gn=e(64322),U=40,mn=function(){var r,y,M=(0,gn.$L)(g.useState,g.useEffect,{label:{oneHot:!0},effectTrigger:{}}),l=(0,f.Z)(M,8),h=l[0],m=l[1],o=l[2],u=l[3],d=l[4],C=l[5],A=l[6],p=l[7],Z=(0,g.useState)(void 0),S=(0,f.Z)(Z,2),b=S[0],D=S[1],F=(0,g.useState)(),J=(0,f.Z)(F,2),O=J[0],k=J[1],yn=(0,g.useState)([]),_=(0,f.Z)(yn,2),j=_[0],B=_[1],H=function(i){k(i),i!=null&&i.label&&p.setCurr(i.label)};(0,g.useEffect)(function(){localStorage.removeItem("history"),K([])},[]);function K(c,i){var a=localStorage.getItem("history"),s=a?JSON.parse(a):{index:-1,items:[]},en={currentAnnotation:i,annotations:c};if(JSON.stringify(s.items[s.index])!=JSON.stringify(en)){var Sn=s.index>U?s.index-U:0,Mn=s.items.splice(Sn,s.index==0?1:s.index+1);s.items=Mn.concat([en]),s.index<=U?s.index++:s.index=U+1,localStorage.setItem("history",JSON.stringify(s))}}var hn=function(){var i=localStorage.getItem("history");if(!!i){var a=JSON.parse(i);if(!!a&&!(a.index>=a.items.length-1)){a.index++,localStorage.setItem("history",JSON.stringify(a));var s=a.items[a.index];k(s.currentAnnotation),B(s.annotations)}}},xn=function(){var i=localStorage.getItem("history");if(!!i){var a=JSON.parse(i);if(!(!a||!a.index)&&!(a.index<=0)){a.index--,localStorage.setItem("history",JSON.stringify(a));var s=a.items[a.index];k(s.currentAnnotation),B(s.annotations)}}},nn=function(i){for(var a=[],s=0;s<j.length;s++)j[s].annotationId==i.annotationId?a.push(i):a.push(j[s]);H(i),B(a)},tn=vn({currentLabel:p.curr,currentTool:b,annotations:j,currentAnnotation:O,onAnnotationAdd:function(i){var a=j.concat([i]);B(a),O||H(i)},onAnnotationModify:nn,onMouseUp:function(){K(j,O)}}),V=tn;return(0,n.jsxs)(R.Z,{className:x().det,children:[(0,n.jsxs)(T.Z,{children:[(0,n.jsx)(cn,{active:b=="polygon",onClick:function(){D("polygon"),H(void 0)},children:"Rectangle"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/edit.png",children:"Edit"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){o.change(.1)},children:"Zoom in"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){o.change(-.1)},children:"Zoom out"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){z.default.info("Annotations are saved automatically. You don't need to click save.")},children:"Save"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){D("mover")},children:"Move"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){xn()},children:"Undo"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){hn()},children:"Redo"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,n.jsx)("div",{id:"dr",className:x().mainStage,children:(0,n.jsxs)(P.Z,{tip:"loading",spinning:h,children:[(0,n.jsx)("div",{className:x().draw,children:(0,n.jsx)(rn.Z,{width:(r=document.getElementById("dr"))===null||r===void 0?void 0:r.clientWidth,scale:o.curr,annotations:j,currentTool:b,currentAnnotation:O,setCurrentAnnotation:H,onAnnotationModify:nn,onAnnotationModifyComplete:function(){K(j,O)},onMouseDown:V.onMouseDown,onMouseMove:V.onMouseMove,onMouseUp:V.onMouseUp,createPolygonFunc:tn.createElementsFunc,imgSrc:C.imgSrc})}),(0,n.jsx)("div",{className:x().pblock,children:(0,n.jsxs)("div",{className:x().progress,children:[(0,n.jsx)(L.Z,{percent:d.progress,status:"active"}),d.currIdx," ",(y=d.all)===null||y===void 0?void 0:y.length," ",d.finished]})})]})}),(0,n.jsxs)(T.Z,{disLoc:"right",children:[(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/next.png",onClick:d.nextTask,children:"Next"}),(0,n.jsx)(v.Z,{imgSrc:"./pics/buttons/prev.png",onClick:d.prevTask,children:"Prev"})]}),(0,n.jsxs)("div",{className:x().rightSideBar,children:[(0,n.jsx)("div",{className:x().determinOutline,children:(0,n.jsx)(X.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){u.setCurr(void 0)},children:"Determine Outline"})}),(0,n.jsx)(on.Z,{labels:p.all,onLabelSelect:function(i){p.setCurr(i),u.setCurr(void 0)},onLabelModify:function(){},onLabelDelete:p.remove,onLabelAdd:function(i){return p.create((0,I.Z)((0,I.Z)({},i),{},{projectId:A.curr.projectId}))}}),(0,n.jsx)(an.Z,{annotations:u.all,onAnnotationSelect:u.setCurr,onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:u.remove})]})]})},pn=mn}}]);