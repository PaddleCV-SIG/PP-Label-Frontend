(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[806],{85024:function(K){K.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(K){K.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},26647:function(K){K.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",slider:"slider___ALra-",popoverLeft:"popoverLeft___15lGe"}},8978:function(K,U,t){"use strict";t.d(U,{Z:function(){return tn}});var k=t(8870),z=t(2824),b=t(91220),j=t(67294),d=t(85893);function l(n){if(!n||!n.width||!n.color||!n.points||n.points.length<2||n.frontendId==null)return"";var m=n.type=="rubber"?0:n.frontendId;return"".concat(n.width,",").concat(m,",").concat(n.points.join(","))}function s(n){var m,a=n.canvasRef,_=n.annotation,f=_.result;if(!f)return(0,d.jsx)(d.Fragment,{});var o=(m=a.current)===null||m===void 0?void 0:m.getContext("2d");if(!o)return(0,d.jsx)(d.Fragment,{});for(var y=[],H=0,v=0;v<f.length;v++)f.at(v)==","?(y.push(parseFloat(f.slice(H,v))),H=v+1):f.at(v)=="|"?(y.push(parseFloat(f.slice(H,v))),i(y,o,_),y=[],H=v+1):v==f.length-1&&(y.push(parseFloat(f.slice(H,f.length))),i(y,o,_));return(0,d.jsx)(d.Fragment,{})}function i(n,m,a){var _;if(n.length<4){console.log("found incorrect points:",n);return}var f=n[0],o=n[1];if(f==0){var y;D(m,n.slice(2),(y=a.label)===null||y===void 0?void 0:y.color);return}if(o==0){C(m,f,n.slice(2),void 0);return}C(m,f,n.slice(2),(_=a.label)===null||_===void 0?void 0:_.color)}function C(n,m,a,_){n.beginPath(),n.moveTo(a[0],a[1]);for(var f=0;f<=a.length/2-1;f++){var o=a[2*f],y=a[2*f+1];n.lineTo(o,y)}n.lineCap="round",n.lineJoin="round",n.lineWidth=m,_&&(n.strokeStyle=_),n.globalCompositeOperation=_?"source-over":"destination-out",n.stroke()}function D(n,m,a){n.globalCompositeOperation=a?"source-over":"destination-out",a&&(n.fillStyle=a);for(var _=0;_<=m.length/2-1;_++){var f=m[2*_],o=m[2*_+1];n.fillRect(f,o,1,1)}}function Q(n){if(!n||n.length==0)return 0;var m=0,a=(0,b.Z)(n),_;try{for(a.s();!(_=a.n()).done;){var f=_.value;f.frontendId>m&&(m=f.frontendId)}}catch(o){a.e(o)}finally{a.f()}return m}function G(n,m){return n=="rubber"||m==2?"rubber":"brush"}function tn(n){var m=(0,j.useState)(),a=(0,z.Z)(m,2),_=a[0],f=a[1],o=function(I){var M,N;if(!(n.currentTool!="brush"&&n.currentTool!="rubber"||!((M=n.currentLabel)!==null&&M!==void 0&&M.color)||!n.brushSize)){var F=I.mouseX,W=I.mouseY,Z=G(n.currentTool,I.e.evt.button),O=n.frontendIdOps.frontendId>0?n.frontendIdOps.frontendId:Q(n.annotations)+1;O!=n.frontendIdOps.frontendId&&n.frontendIdOps.setFrontendId(O);var e=l({width:n.brushSize||10,color:(N=n.currentLabel)===null||N===void 0?void 0:N.color,points:[F,W,F,W],type:Z,frontendId:O});if(!!e){f(Z);var u={dataId:n.dataId,label:n.currentLabel,frontendId:O,result:e,type:"brush"};n.onAnnotationAdd(u)}}},y=function(I){var M;if(!(!_||!n.currentAnnotation||!n.currentAnnotation.result||n.currentAnnotation.result.length<2||!((M=n.currentLabel)!==null&&M!==void 0&&M.color))){var N=I.mouseX,F=I.mouseY,W=n.currentAnnotation.result+",".concat(N,",").concat(F);n.onAnnotationModify((0,k.Z)((0,k.Z)({},n.currentAnnotation),{},{result:W}))}},H=function(){n.currentTool!="brush"&&n.currentTool!="rubber"||(f(void 0),n.onMouseUp())};return{onMouseDown:o,onMouseMove:y,onMouseUp:H,drawAnnotation:s}}},57406:function(K,U,t){"use strict";t.d(U,{oo:function(){return z}});function k(d){var l=0;if(!d)return l;var s=_createForOfIteratorHelper(d),i;try{for(s.s();!(i=s.n()).done;){var C=i.value;!C||!C.frontendId||C.frontendId>l&&(l=C.frontendId)}}catch(D){s.e(D)}finally{s.f()}return l}function z(d){var l=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(d);return l?{r:parseInt(l[1],16),g:parseInt(l[2],16),b:parseInt(l[3],16)}:null}function b(d){var l=d.toString(16);return l.length==1?"0"+l:l}function j(d,l,s){return"#"+b(d)+b(l)+b(s)}},14836:function(K,U,t){"use strict";t.d(U,{Z:function(){return H}});var k=t(54421),z=t(38272),b=t(57663),j=t(71577),d=t(91220),l=t(67294),s=t(56159),i=t.n(s),C=t(49111),D=t(19650),Q=t(2824),G=t(8870),tn=t(85024),n=t.n(tn),m=t(63097),a=t(85893),_=function(I){var M=(0,G.Z)({},I.annotation),N=(0,l.useState)(M.invisible),F=(0,Q.Z)(N,2),W=F[0],Z=F[1],O=(0,l.useState)(0),e=(0,Q.Z)(O,2),u=e[0],h=e[1];(0,l.useEffect)(function(){Z(I.annotation.invisible)},[I.annotation.invisible]);var g=(0,a.jsxs)(z.ZP.Item,{className:"".concat(n().listItem," ").concat(I.active?n().listItemActive:""),unselectable:"on",onClick:function(){I.onClick(M)},children:[(0,a.jsxs)(D.Z,{align:"center",size:5,children:[(0,a.jsx)("a",{className:n().eye,style:{backgroundImage:W?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(E){E.stopPropagation(),Z(!W),I.onAnnotationModify(M)}})," ",(0,a.jsx)("span",{className:n().annotationId,children:M.frontendId}),(0,a.jsx)("span",{className:n().labelName,children:M.label.name}),(0,a.jsx)(m.Z,{color:M.label.color})]}),(0,a.jsx)("a",{className:n().delete,onClick:function(E){E.stopPropagation();var x=new Date().getTime();x-u<300||(h(x),I.onAnnotationDelete(M))}})]});return g},f=_,o=t(48971),y=function(I){var M=(0,o.YB)(),N=M.formatMessage({id:"component.PPAnnotationList.annotationList"}),F=M.formatMessage({id:"component.PPAnnotationList.addAnnotation"}),W=new Set,Z=[],O=(0,d.Z)(I.annotations),e;try{for(O.s();!(e=O.n()).done;){var u=e.value;W.has(u.frontendId)||(Z.push(u),W.add(u.frontendId))}}catch(h){O.e(h)}finally{O.f()}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(z.ZP,{className:i().labelList,size:"large",header:(0,a.jsx)("div",{className:i().listHeader,children:N}),bordered:!0,dataSource:Z,renderItem:function(g){var P;return(0,a.jsx)(f,{onClick:I.onAnnotationSelect,annotation:g,active:g.frontendId==((P=I.currAnnotation)===null||P===void 0?void 0:P.frontendId),onAnnotationDelete:I.onAnnotationDelete,onAnnotationModify:I.onAnnotationModify})},footer:(0,a.jsx)("div",{children:(0,a.jsx)(j.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){I.onAnnotationAdd()},block:!0,children:F})})})})},H=y},27992:function(K,U,t){"use strict";var k=t(20136),z=t(55241),b=t(13062),j=t(71230),d=t(77883),l=t(70507),s=t(89032),i=t(15746),C=t(66126),D=t(75454),Q=t(2824),G=t(67294),tn=t(61541),n=t(26647),m=t.n(n),a=t(85893),_=0,f=100,o=10,y=function(v){var I=(0,G.useState)(e(v.size)),M=(0,Q.Z)(I,2),N=M[0],F=M[1];function W(u){F(e(u))}var Z=v.minSize==null?_:v.minSize,O=v.maxSize==null?f:v.maxSize;function e(u){return u==null?o:u<=Z?Z:u>=O?O:u}return(0,G.useEffect)(function(){W(v.size)},[v.size]),(0,a.jsxs)(z.Z,{overlayClassName:"".concat(m().popover," ").concat(v.disLoc=="left"?m().popoverLeft:""),placement:v.disLoc||"right",content:(0,a.jsxs)(j.Z,{children:[(0,a.jsx)(i.Z,{span:16,children:(0,a.jsx)(D.Z,{className:m().slider,value:N,max:O,min:Z,onChange:function(h){var g;(g=v.onChange)===null||g===void 0||g.call(0,h)},tooltipVisible:!1})}),(0,a.jsx)(i.Z,{span:8,children:(0,a.jsx)(l.Z,{min:Z,max:O,value:N,onChange:function(h){var g;(g=v.onChange)===null||g===void 0||g.call(0,h)},step:10})})]}),trigger:"hover",children:[" ",(0,a.jsx)(tn.Z,{imgSrc:v.imgSrc||"",onClick:v.onClick,active:v.active,children:v.children})]})};U.Z=y},10137:function(K,U,t){"use strict";var k=t(34669),z=t(54458),b=t(67294),j=t(85893),d=function(s){var i,C;return(0,j.jsxs)("div",{className:"progress",children:[(0,j.jsx)(z.Z,{className:"progressBar",percent:Math.ceil(s.project.finished/((i=s.task.all)===null||i===void 0?void 0:i.length)*100),status:"active",showInfo:!1})," ",(0,j.jsxs)("span",{className:"progressDesc",children:["Current labeling ",s.task.currIdx==null?1:s.task.currIdx+1," of"," ",(C=s.task.all)===null||C===void 0?void 0:C.length,". Already labeled ",s.project.finished||0,"."]})]})};U.Z=d},91861:function(K,U,t){"use strict";t.d(U,{Ad:function(){return z},k3:function(){return b},Vd:function(){return j},td:function(){return d}});var k=40;function z(){localStorage.removeItem("history"),b([])}function b(l){var s=localStorage.getItem("history"),i=s?JSON.parse(s):{index:-1,items:[]};if(JSON.stringify(i.items[i.index])!=JSON.stringify(l)){var C=i.index>k?i.index-k:0,D=i.items.splice(C,i.index==0?1:i.index+1);i.items=D.concat([l]),i.index<=k?i.index++:i.index=k+1,localStorage.setItem("history",JSON.stringify(i))}}function j(){var l=localStorage.getItem("history");if(!!l){var s=JSON.parse(l);if(!!s&&!(s.index>=s.items.length-1))return s.index++,localStorage.setItem("history",JSON.stringify(s)),s.items[s.index]}}function d(){var l=localStorage.getItem("history");if(!!l){var s=JSON.parse(l);if(!(!s||!s.index)&&!(s.index<=0))return s.index--,localStorage.setItem("history",JSON.stringify(s)),s.items[s.index]}}},38806:function(K,U,t){"use strict";t.r(U),t.d(U,{MOST_HISTORY_STEPS:function(){return F},default:function(){return O}});var k=t(57663),z=t(71577),b=t(2824),j=t(91220),d=t(67294),l=t(48971),s=t(8088),i=t(61541),C=t(44434),D=t(27992),Q=t(5041),G=t(57436),tn=t(14836),n=t(91861),m=t(8978),a=t(8870),_=t(65031),f=t(57406),o=t(85893);function y(e,u){if(!(!e||!u))return u.join(",")}function H(e){var u;if(!e.annotation||!e.annotation.result||e.annotation.result.length<2||!((u=e.annotation.label)!==null&&u!==void 0&&u.color))return(0,o.jsx)(o.Fragment,{});var h=e.annotation.result.split(",").map(Number),g=e.annotation.label.color,P=(0,f.oo)(g);if(!P)return(0,o.jsx)(o.Fragment,{});var E=.3,x=void 0,S=[];return h.forEach(function(A,J){if(!x){x=A;return}S.push((0,o.jsx)(_.Cd,{onMouseDown:function(){e.currentTool=="editor"&&e.onSelect(e.annotation)},draggable:e.currentTool=="editor",onDragMove:function(T){var en;T.cancelBubble=!0;var dn=(en=e.stageRef)===null||en===void 0?void 0:en.current,X=dn.findOne(".baseImage"),$=!1,q=T.target.x();q>X.width()/2&&(q=X.width()/2,$=!0),q<-X.width()/2&&(q=-X.width()/2,$=!0);var nn=T.target.y();nn>X.height()/2&&(nn=X.height()/2,$=!0),nn<-X.height()/2&&(nn=-X.height()/2,$=!0),$&&T.target.setPosition({x:q,y:nn}),h[J-1]=q,h[J]=nn;var an=(0,a.Z)((0,a.Z)({},e.annotation),{},{result:h.join(",")});e.onDrag(an)},onMouseOver:function(){var T;e.currentTool=="editor"&&(T=e.stageRef)!==null&&T!==void 0&&T.current&&(e.stageRef.current.container().style.cursor="cell")},onMouseOut:function(){var T;e.currentTool=="editor"&&(T=e.stageRef)!==null&&T!==void 0&&T.current&&(e.stageRef.current.container().style.cursor="default")},x,y:A,radius:5/e.scale,fill:g})),x=void 0}),(0,o.jsxs)(_.ZA,{children:[(0,o.jsx)(_.x1,{onMouseOver:function(){e.currentTool=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){e.currentTool=="editor"&&e.onSelect(e.annotation)},stroke:g,strokeWidth:2/e.scale,globalCompositeOperation:"source-over",lineCap:"round",points:h,tension:0,closed:!0,fill:"rgba(".concat(P.r,", ").concat(P.g,", ").concat(P.b,", ").concat(E,")")}),S]},e.annotation.frontendId)}function v(e){var u=0;if(!e)return u;var h=(0,j.Z)(e),g;try{for(h.s();!(g=h.n()).done;){var P=g.value;!P||!P.frontendId||P.frontendId>u&&(u=P.frontendId)}}catch(E){h.e(E)}finally{h.f()}return u}function I(e){var u=function(x,S){var A,J=y((A=e.currentLabel)===null||A===void 0?void 0:A.color,[x,S]);!J||(console.log(J),e.onAnnotationAdd({dataId:e.dataId,type:"polygon",frontendId:v(e.annotations)+1,label:e.currentLabel,result:J}))},h=function(x,S){var A;if(!(!e.currentAnnotation||!e.currentAnnotation.result||!((A=e.currentLabel)!==null&&A!==void 0&&A.color))){var J=e.currentAnnotation.result+",".concat(x,",").concat(S),w={dataId:e.dataId,type:"polygon",frontendId:e.currentAnnotation.frontendId,label:e.currentAnnotation.label,result:J};e.modifyAnnoByFrontendId(w)}},g=function(x){if(e.currentTool=="polygon"){var S=x.mouseX+x.offsetX,A=x.mouseY+x.offsetY;e.currentAnnotation?h(S,A):u(S,A)}},P=function(){e.currentTool=="polygon"&&e.onMouseUp()};return{onMouseDown:g,onMouseMove:function(){},onMouseUp:P,drawAnnotation:H}}var M=t(10137),N=t(19424),F=40;function W(e){var u=0;if(!e)return u;var h=(0,j.Z)(e),g;try{for(h.s();!(g=h.n()).done;){var P=g.value;!P.labelId||P.labelId>u&&(u=P.labelId)}}catch(E){h.e(E)}finally{h.f()}return u}var Z=function(){var u=(0,d.useState)([]),h=(0,b.Z)(u,2),g=h[0],P=h[1],E=(0,d.useState)(void 0),x=(0,b.Z)(E,2),S=x[0],A=x[1],J=(0,d.useState)(new Set),w=(0,b.Z)(J,2),T=w[0],en=w[1],dn=(0,d.useState)(),X=(0,b.Z)(dn,2),$=X[0],q=X[1],nn=(0,d.useState)([]),an=(0,b.Z)(nn,2),Y=an[0],p=an[1],yn=(0,d.useState)(0),hn=(0,b.Z)(yn,2),_n=hn[0],sn=hn[1],Cn=(0,d.useState)(10),In=(0,b.Z)(Cn,2),cn=In[0],Pn=In[1],xn=(0,d.useState)(60),Mn=(0,b.Z)(xn,2),An=Mn[0],On=Mn[1],fn=(0,N.$L)(d.useState,d.useEffect,{label:{oneHot:!0},tool:{defaultTool:"mover"}}),vn=fn.task,mn=fn.project,ln=fn.scale,un=function(r){var R=new Set;r!=null&&r.labelId&&R.add(r.labelId),en(R)},L=function(r){q(r),r!=null&&r.label&&un(r.label),sn(r?r.frontendId:0)};(0,d.useEffect)(function(){(0,n.Ad)()},[]);var Ln=function(r){!r||(Y.pop(),Y.push(r),L(r),p(Y))},Sn=function(r){var R=[],V=(0,j.Z)(Y),on;try{for(V.s();!(on=V.n()).done;){var rn=on.value;rn.frontendId==r.frontendId?R.push(r):R.push(rn)}}catch(gn){V.e(gn)}finally{V.f()}L(r),p(R)},bn={dataId:0,currentLabel:g.find(function(c){return c.labelId==T.values().next().value}),brushSize:cn,scale:ln.curr,currentTool:S,annotations:Y,currentAnnotation:$,onAnnotationAdd:function(r){var R=Y.concat([r]);p(R),L(r)},onAnnotationModify:Ln,modifyAnnoByFrontendId:Sn,onMouseUp:function(){(0,n.k3)({annos:Y,currAnno:$})},frontendIdOps:{frontendId:_n,setFrontendId:sn}},B=(0,l.YB)(),jn=(0,m.Z)(bn),En=I(bn),Tn={polygon:En,brush:jn};return(0,o.jsxs)(s.Z,{className:"segment",children:[(0,o.jsxs)(C.Z,{children:[(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/polygon.png",active:S=="polygon",onClick:function(){A("polygon"),L(void 0)},children:B.formatMessage({id:"pages.toolBar.polygon"})}),(0,o.jsx)(i.Z,{active:S=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){A("editor"),L(void 0)},children:B.formatMessage({id:"pages.toolBar.edit"})}),(0,o.jsx)(D.Z,{imgSrc:"./pics/buttons/brush.png",size:cn,active:S=="brush",onClick:function(){S!="rubber"&&S!="brush"&&L(void 0),A("brush")},onChange:function(r){Pn(r)},children:B.formatMessage({id:"pages.toolBar.brush"})}),(0,o.jsx)(D.Z,{size:cn,active:S=="rubber",onClick:function(){S!="rubber"&&S!="brush"&&L(void 0),A("rubber")},onChange:function(r){Pn(r)},imgSrc:"./pics/buttons/rubber.png",children:B.formatMessage({id:"pages.toolBar.rubber"})}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){ln.change(.1)},children:B.formatMessage({id:"pages.toolBar.zoomIn"})}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){ln.change(-.1)},children:B.formatMessage({id:"pages.toolBar.zoomOut"})}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/save.png",children:B.formatMessage({id:"pages.toolBar.save"})}),(0,o.jsx)(i.Z,{active:S=="mover",imgSrc:"./pics/buttons/move.png",onClick:function(){A("mover")},children:B.formatMessage({id:"pages.toolBar.move"})}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var r=(0,n.td)();r&&(p(r.annos),L(r.currAnno))},children:B.formatMessage({id:"pages.toolBar.unDo"})}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var r=(0,n.Vd)();r&&(p(r.annos),L(r.currAnno))},children:B.formatMessage({id:"pages.toolBar.reDo"})}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:B.formatMessage({id:"pages.toolBar.clearMark"})})]}),(0,o.jsxs)("div",{id:"dr",className:"mainStage",children:[(0,o.jsx)("div",{className:"draw",children:(0,o.jsx)(G.Z,{scale:ln.curr,annotations:Y,currentTool:S,currentAnnotation:$,setCurrentAnnotation:L,onAnnotationModify:Sn,onAnnotationModifyComplete:function(){(0,n.k3)({annos:Y,currAnno:$})},frontendIdOps:{frontendId:_n,setFrontendId:sn},imgSrc:void 0,transparency:An,onAnnotationAdd:function(r){var R=Y.concat([r]);p(R),$||L(r)},drawTool:Tn})}),(0,o.jsx)("div",{className:"pblock",children:(0,o.jsx)(M.Z,{task:vn,project:mn})}),(0,o.jsx)("div",{className:"prevTask",onClick:function(){!vn.prevTask()||(L(void 0),p([]))}}),(0,o.jsx)("div",{className:"nextTask",onClick:function(){!vn.nextTask()||(L(void 0),p([]))}})]}),(0,o.jsxs)(C.Z,{disLoc:"right",children:[(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:B.formatMessage({id:"pages.toolBar.interactor"})}),(0,o.jsx)(D.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:B.formatMessage({id:"pages.toolBar.segmentThreshold"})}),(0,o.jsx)(D.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",size:An,maxSize:100,minSize:0,onChange:function(r){On(r)},children:B.formatMessage({id:"pages.toolBar.transparency"})}),(0,o.jsx)(D.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:B.formatMessage({id:"pages.toolBar.visualRadius"})}),(0,o.jsxs)(C.Z,{disLoc:"right",children:[(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){l.m8.push("/project_overview?projectId=".concat(mn.curr.projectId))},children:"Project Overview"}),(0,o.jsx)(i.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){l.m8.push("/ml?projectId=".concat(mn.curr.projectId))},children:"ML Settings"})]})]}),(0,o.jsxs)("div",{className:"rightSideBar",children:[(0,o.jsx)("div",{className:"determinOutline",children:(0,o.jsx)(z.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){L(void 0)},children:B.formatMessage({id:"pages.toolBar.determineOutline"})})}),(0,o.jsx)(Q.Z,{labels:g,activeIds:T,onLabelSelect:function(r){un(r),L(void 0)},onLabelModify:function(){},onLabelDelete:function(r){var R=[],V=(0,j.Z)(g),on;try{for(V.s();!(on=V.n()).done;){var rn=on.value;rn.labelId!=r.labelId&&R.push(rn)}}catch(gn){V.e(gn)}finally{V.f()}P(R),r.labelId&&T.has(r.labelId)&&un(void 0)},onLabelAdd:function(r){r.labelId||(r.labelId=W(g)+1),g.push(r),P(g),un(r),L(void 0)}}),(0,o.jsx)(tn.Z,{currAnnotation:$,annotations:Y,onAnnotationSelect:function(r){r!=null&&r.delete||L(r)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(r){p(Y.filter(function(R){return R.frontendId!=r.frontendId})),L(void 0)}})]})]})},O=Z}}]);