(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[267],{71212:function(U){U.exports={key:"key___HbxlB",mainStage:"mainStage___2kPY7",draw:"draw___1d3zf",pblock:"pblock___13HlD",progress:"progress___1iogf",rightSideBar:"rightSideBar___2SKvQ",finished:"finished___nNiaq"}},13931:function(U,I,r){"use strict";r.d(I,{Z:function(){return K}});var J=r(91220),j=r(11849),T=r(65031),m=r(85893);function h(n){var s=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return s?{r:parseInt(s[1],16),g:parseInt(s[2],16),b:parseInt(s[3],16)}:null}function g(n,s){if(!(!n||!s))return{color:n,points:s}}function R(n,s,E,y,_,c,u){if(!n||!n.lines||!n.lines[0])return[(0,m.jsx)(m.Fragment,{})];var o=n.lines[0].points,l=n.lines[0].color,d=h(l);if(!d)return[(0,m.jsx)(m.Fragment,{})];var D=(u==null?void 0:u.annotationId)==n.annotationId,v=D?.5:.1,O=void 0,A=[];return o.forEach(function(f,x){if(!O){O=f;return}A.push((0,m.jsx)(T.Cd,{onMouseDown:function(){_=="mover"&&c(n)},draggable:_=="mover",onDragMove:function(p){console.log("Circle onDrageMove");var Z=p.evt.offsetX/y,B=p.evt.offsetY/y;o[x-1]=Z,o[x]=B;var W=(0,j.Z)((0,j.Z)({},n),{},{lines:[{color:l,points:o}]});s(W)},onMouseOver:function(){console.log("Circle onMouseOver"),_=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){console.log("Circle onMouseOut"),document.body.style.cursor="default"},x:O,y:f,radius:5,fill:l})),O=void 0}),[(0,m.jsxs)(T.ZA,{children:[(0,m.jsx)(T.x1,{onMouseOver:function(){_=="mover"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){_=="mover"&&c(n)},stroke:l,strokeWidth:2,globalCompositeOperation:"source-over",lineCap:"round",points:o,tension:0,closed:!0,fill:"rgba(".concat(d.r,", ").concat(d.g,", ").concat(d.b,", ").concat(v,")")}),A]},n.annotationId)]}function M(n){var s=0,E=(0,J.Z)(n),y;try{for(E.s();!(y=E.n()).done;){var _=y.value;!_||_.annotationId>s&&(s=_.annotationId)}}catch(c){E.e(c)}finally{E.f()}return s}function K(n){var s=function(u,o){var l,d=u.evt.offsetX/o,D=u.evt.offsetY/o,v=g((l=n.currentLabel)===null||l===void 0?void 0:l.color,[d,D]);!v||n.onAnnotationAdd({tool:"polygon",annotationId:M(n.annotations)+1,label:n.currentLabel,lines:[v]})},E=function(u,o){var l,d;if(!!n.currentAnnotation){var D=u.evt.offsetX/o,v=u.evt.offsetY/o,O=n.currentAnnotation.lines||[],A=g((l=n.currentLabel)===null||l===void 0?void 0:l.color,(d=O[0])===null||d===void 0?void 0:d.points.concat([D,v]));if(!!A){var f={tool:"polygon",annotationId:n.currentAnnotation.annotationId,label:n.currentAnnotation.label,lines:[A]};n.onAnnotationModify(f)}}},y=function(u,o){n.currentTool=="polygon"&&(n.currentAnnotation?E(u,o):s(u,o))},_=function(){n.currentTool=="polygon"&&n.onMouseUp()};return{onMouseDown:y,onMouseMove:function(){},onMouseUp:_,createElementsFunc:R}}},82881:function(U,I,r){"use strict";r.r(I);var J=r(57663),j=r(71577),T=r(34669),m=r(54458),h=r(2824),g=r(67294),R=r(71212),M=r.n(R),K=r(8088),n=r(61541),s=r(44434),E=r(5041),y=r(57436),_=r(14836),c=r(29919),u=r(13931),o=r(85893),l=40,d=function(){var v,O=(0,g.useState)(void 0),A=(0,h.Z)(O,2),f=A[0],x=A[1],L=(0,g.useState)({color:"",name:""}),p=(0,h.Z)(L,2),Z=p[0],B=p[1],W=(0,g.useState)(),Y=(0,h.Z)(W,2),S=Y[0],k=Y[1],q=(0,g.useState)([]),X=(0,h.Z)(q,2),P=X[0],C=X[1],nn=(0,g.useState)(1),$=(0,h.Z)(nn,2),N=$[0],F=$[1],z=function(e){e||F(1),e<.1||e>3?F(1):F(e)},b=function(e){k(e),e!=null&&e.label&&B(e.label)};(0,g.useEffect)(function(){localStorage.removeItem("history"),w([])},[]);function w(i,e){var t=localStorage.getItem("history"),a=t?JSON.parse(t):{index:-1,items:[]},V={currentAnnotation:e,annotations:i};if(JSON.stringify(a.items[a.index])!=JSON.stringify(V)){var tn=a.index>l?a.index-l:0,rn=a.items.splice(tn,a.index==0?1:a.index+1);a.items=rn.concat([V]),a.index<=l?a.index++:a.index=l+1,localStorage.setItem("history",JSON.stringify(a))}}var on=function(){var e=localStorage.getItem("history");if(!!e){var t=JSON.parse(e);if(!!t&&!(t.index>=t.items.length-1)){t.index++,localStorage.setItem("history",JSON.stringify(t));var a=t.items[t.index];k(a.currentAnnotation),C(a.annotations)}}},en=function(){var e=localStorage.getItem("history");if(!!e){var t=JSON.parse(e);if(!(!t||!t.index)&&!(t.index<=0)){t.index--,localStorage.setItem("history",JSON.stringify(t));var a=t.items[t.index];k(a.currentAnnotation),C(a.annotations)}}},Q=function(e){for(var t=[],a=0;a<P.length;a++)P[a].annotationId==e.annotationId?t.push(e):t.push(P[a]);b(e),C(t)},G=(0,u.Z)({currentLabel:Z,currentTool:f,annotations:P,currentAnnotation:S,onAnnotationAdd:function(e){var t=P.concat([e]);C(t),S||b(e)},onAnnotationModify:Q,onMouseUp:function(){w(P,S)}}),H=G;return(0,o.jsxs)(K.Z,{className:M().key,children:[(0,o.jsxs)(s.Z,{children:[(0,o.jsx)(c.Z,{active:f=="polygon",onClick:function(){x("polygon"),b(void 0)},children:"Polygon"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/edit.png",children:"Edit"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){z(N+.1)},children:"Zoom in"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){z(N-.1)},children:"Zoom out"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){x("mover")},children:"Move"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){en()},children:"Undo"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){on()},children:"Redo"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,o.jsxs)("div",{id:"dr",className:M().mainStage,children:[(0,o.jsx)("div",{className:M().draw,children:(0,o.jsx)(y.Z,{width:(v=document.getElementById("dr"))===null||v===void 0?void 0:v.clientWidth,scale:N,annotations:P,currentTool:f,currentAnnotation:S,setCurrentAnnotation:b,onAnnotationModify:Q,onAnnotationModifyComplete:function(){w(P,S)},onMouseDown:H.onMouseDown,onMouseMove:H.onMouseMove,onMouseUp:H.onMouseUp,createPolygonFunc:G.createElementsFunc})}),(0,o.jsx)("div",{className:M().pblock,children:(0,o.jsx)("div",{className:M().progress,children:(0,o.jsx)(m.Z,{percent:50,status:"active"})})})]}),(0,o.jsxs)(s.Z,{disLoc:"right",children:[(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,o.jsx)(n.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"})]}),(0,o.jsxs)("div",{className:M().rightSideBar,children:[(0,o.jsx)("div",{className:M().finished,children:(0,o.jsx)(j.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){b(void 0)},children:"Determine Outline"})}),(0,o.jsx)(E.Z,{selectedLabel:Z,onLabelSelect:function(e){B(e),b(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,o.jsx)(_.Z,{selectedAnnotation:S,annotations:P,onAnnotationSelect:function(e){e!=null&&e.delete||b(e)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(e){C(P.filter(function(t){return t.annotationId!=e.annotationId})),b(void 0)}})]})]})};I.default=d}}]);
