(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[454],{85024:function(B){B.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(B){B.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},26647:function(B){B.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",slider:"slider___ALra-",popoverLeft:"popoverLeft___15lGe"}},8982:function(B){B.exports={RSPop1:"RSPop1___ei_bv",RSPop2:"RSPop2___9d5gM"}},75721:function(B){B.exports={segment:"segment___1EX9A",mainStage:"mainStage___nDwOp",draw:"draw___1Aue1",pblock:"pblock___19sdD",progress:"progress___1595f",rightSideBar:"rightSideBar___1JzJc",determinOutline:"determinOutline___2vG7S"}},8978:function(B,N,t){"use strict";t.d(N,{Z:function(){return F}});var $=t(8870),U=t(2824),V=t(91220),H=t(67294),T=t(85893);function R(n){if(!n||!n.width||!n.color||!n.points||n.points.length<2||n.frontendId==null)return"";var r=n.type=="rubber"?0:n.frontendId;return"".concat(n.width,",").concat(r,",").concat(n.points.join(","))}function O(n){var r,o=n.canvasRef,c=n.annotation,i=c.result;if(!i)return(0,T.jsx)(T.Fragment,{});var h=(r=o.current)===null||r===void 0?void 0:r.getContext("2d");if(!h)return(0,T.jsx)(T.Fragment,{});for(var P=[],L=0,s=0;s<i.length;s++)i.at(s)==","?(P.push(parseFloat(i.slice(L,s))),L=s+1):i.at(s)=="|"?(P.push(parseFloat(i.slice(L,s))),_(P,h,c),P=[],L=s+1):s==i.length-1&&(P.push(parseFloat(i.slice(L,i.length))),_(P,h,c));return(0,T.jsx)(T.Fragment,{})}function _(n,r,o){var c;if(n.length<4){console.log("found incorrect points:",n);return}var i=n[0],h=n[1];if(i==0){var P;I(r,n.slice(2),(P=o.label)===null||P===void 0?void 0:P.color);return}if(h==0){Y(r,i,n.slice(2),void 0);return}Y(r,i,n.slice(2),(c=o.label)===null||c===void 0?void 0:c.color)}function Y(n,r,o,c){n.beginPath(),n.moveTo(o[0],o[1]);for(var i=0;i<=o.length/2-1;i++){var h=o[2*i],P=o[2*i+1];n.lineTo(h,P)}n.lineCap="round",n.lineJoin="round",n.lineWidth=r,c&&(n.strokeStyle=c),n.globalCompositeOperation=c?"source-over":"destination-out",n.stroke()}function I(n,r,o){n.globalCompositeOperation=o?"source-over":"destination-out",o&&(n.fillStyle=o);for(var c=0;c<=r.length/2-1;c++){var i=r[2*c],h=r[2*c+1];n.fillRect(i,h,1,1)}}function W(n){if(!n||n.length==0)return 0;var r=0,o=(0,V.Z)(n),c;try{for(o.s();!(c=o.n()).done;){var i=c.value;i.frontendId>r&&(r=i.frontendId)}}catch(h){o.e(h)}finally{o.f()}return r}function g(n,r){return n=="rubber"||r==2?"rubber":"brush"}function F(n){var r=(0,H.useState)(),o=(0,U.Z)(r,2),c=o[0],i=o[1],h=function(d){var v,A;if(!(n.currentTool!="brush"&&n.currentTool!="rubber"||!((v=n.currentLabel)!==null&&v!==void 0&&v.color)||!n.brushSize)){var y=d.mouseX,e=d.mouseY,x=g(n.currentTool,d.e.evt.button),M=n.frontendIdOps.frontendId>0?n.frontendIdOps.frontendId:W(n.annotations)+1;M!=n.frontendIdOps.frontendId&&n.frontendIdOps.setFrontendId(M);var C=R({width:n.brushSize||10,color:(A=n.currentLabel)===null||A===void 0?void 0:A.color,points:[y,e,y,e],type:x,frontendId:M});if(console.log(C),!!C){i(x);var m={dataId:n.dataId,label:n.currentLabel,frontendId:M,result:C};n.onAnnotationAdd(m)}}},P=function(d){var v;if(!(!c||!n.currentAnnotation||!n.currentAnnotation.result||n.currentAnnotation.result.length<2||!((v=n.currentLabel)!==null&&v!==void 0&&v.color))){var A=d.mouseX,y=d.mouseY,e=n.currentAnnotation.result+",".concat(A,",").concat(y);n.onAnnotationModify((0,$.Z)((0,$.Z)({},n.currentAnnotation),{},{result:e}))}},L=function(){n.currentTool!="brush"&&n.currentTool!="rubber"||(i(void 0),n.onMouseUp())};return{onMouseDown:h,onMouseMove:P,onMouseUp:L,drawAnnotation:O}}},14836:function(B,N,t){"use strict";t.d(N,{Z:function(){return L}});var $=t(54421),U=t(38272),V=t(57663),H=t(71577),T=t(91220),R=t(67294),O=t(56159),_=t.n(O),Y=t(49111),I=t(19650),W=t(2824),g=t(8870),F=t(85024),n=t.n(F),r=t(63097),o=t(85893),c=function(d){var v=(0,g.Z)({},d.annotation),A=(0,R.useState)(v.invisible),y=(0,W.Z)(A,2),e=y[0],x=y[1],M=(0,R.useState)(0),C=(0,W.Z)(M,2),m=C[0],Z=C[1];(0,R.useEffect)(function(){x(d.annotation.invisible)},[d.annotation.invisible]);var b=(0,o.jsxs)(U.ZP.Item,{className:"".concat(n().listItem," ").concat(d.active?n().listItemActive:""),unselectable:"on",onClick:function(){d.onClick(v)},children:[(0,o.jsxs)(I.Z,{align:"center",size:5,children:[(0,o.jsx)("a",{className:n().eye,style:{backgroundImage:e?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(p){p.stopPropagation(),x(!e),d.onAnnotationModify(v)}})," ",(0,o.jsx)("span",{className:n().annotationId,children:v.frontendId}),(0,o.jsx)("span",{className:n().labelName,children:v.label.name}),(0,o.jsx)(r.Z,{color:v.label.color})]}),(0,o.jsx)("a",{className:n().delete,onClick:function(p){p.stopPropagation();var J=new Date().getTime();J-m<300||(Z(J),d.onAnnotationDelete(v))}})]});return b},i=c,h=t(48971),P=function(d){var v=(0,h.YB)(),A=v.formatMessage({id:"component.PPAnnotationList.annotationList"}),y=v.formatMessage({id:"component.PPAnnotationList.addAnnotation"}),e=new Set,x=[],M=(0,T.Z)(d.annotations),C;try{for(M.s();!(C=M.n()).done;){var m=C.value;e.has(m.frontendId)||(x.push(m),e.add(m.frontendId))}}catch(Z){M.e(Z)}finally{M.f()}return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(U.ZP,{className:_().labelList,size:"large",header:(0,o.jsx)("div",{className:_().listHeader,children:A}),bordered:!0,dataSource:x,renderItem:function(b){var K;return(0,o.jsx)(i,{onClick:d.onAnnotationSelect,annotation:b,active:b.frontendId==((K=d.currAnnotation)===null||K===void 0?void 0:K.frontendId),onAnnotationDelete:d.onAnnotationDelete,onAnnotationModify:d.onAnnotationModify})},footer:(0,o.jsx)("div",{children:(0,o.jsx)(H.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){d.onAnnotationAdd()},block:!0,children:y})})})})},L=P},27992:function(B,N,t){"use strict";var $=t(20136),U=t(55241),V=t(13062),H=t(71230),T=t(77883),R=t(70507),O=t(89032),_=t(15746),Y=t(66126),I=t(75454),W=t(2824),g=t(67294),F=t(61541),n=t(26647),r=t.n(n),o=t(85893),c=0,i=100,h=10,P=function(s){var d=(0,g.useState)(C(s.size)),v=(0,W.Z)(d,2),A=v[0],y=v[1];function e(m){y(C(m))}var x=s.minSize==null?c:s.minSize,M=s.maxSize==null?i:s.maxSize;function C(m){return m==null?h:m<=x?x:m>=M?M:m}return(0,g.useEffect)(function(){e(s.size)},[s.size]),(0,o.jsxs)(U.Z,{overlayClassName:"".concat(r().popover," ").concat(s.disLoc=="left"?r().popoverLeft:""),placement:s.disLoc||"right",content:(0,o.jsxs)(H.Z,{children:[(0,o.jsx)(_.Z,{span:16,children:(0,o.jsx)(I.Z,{className:r().slider,value:A,max:M,min:x,onChange:function(Z){var b;(b=s.onChange)===null||b===void 0||b.call(0,Z)},tooltipVisible:!1})}),(0,o.jsx)(_.Z,{span:8,children:(0,o.jsx)(R.Z,{min:x,max:M,value:A,onChange:function(Z){var b;(b=s.onChange)===null||b===void 0||b.call(0,Z)},step:10})})]}),trigger:"hover",children:[" ",(0,o.jsx)(F.Z,{imgSrc:s.imgSrc||"",onClick:s.onClick,active:s.active,children:s.children})]})};N.Z=P},21028:function(B,N,t){"use strict";t.r(N),t.d(N,{MOST_HISTORY_STEPS:function(){return m},default:function(){return b}});var $=t(57663),U=t(71577),V=t(20136),H=t(55241),T=t(34669),R=t(54458),O=t(2824),_=t(67294),Y=t(75721),I=t.n(Y),W=t(8088),g=t(61541),F=t(44434),n=t(27992),r=t(5041),o=t(57436),c=t(14836),i=t(13062),h=t(71230),P=t(66126),L=t(75454),s=t(89032),d=t(15746),v=t(8982),A=t.n(v),y=t(48971),e=t(85893),x=function(p){var J=(0,y.YB)(),G=J.formatMessage({id:"component.PPMedical.windowWidth"}),j=J.formatMessage({id:"component.PPMedical.windowLevel"});return(0,e.jsxs)("div",{children:[(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(d.Z,{span:6,className:A().Pop1,children:(0,e.jsx)("span",{children:G})}),(0,e.jsx)(d.Z,{span:18,className:A().Pop2,children:(0,e.jsx)(L.Z,{min:1,max:p.wwValue||100,defaultValue:37})})]}),(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(d.Z,{span:6,className:A().Pop1,children:(0,e.jsx)("span",{children:j})}),(0,e.jsx)(d.Z,{span:18,className:A().Pop2,children:(0,e.jsx)(L.Z,{min:1,max:p.wlValue||100,defaultValue:37})})]})]})},M=x,C=t(8978),m=40,Z=function(){var p,J=(0,_.useState)(void 0),G=(0,O.Z)(J,2),j=G[0],Q=G[1],Pn=(0,_.useState)({color:"",name:""}),rn=(0,O.Z)(Pn,2),q=rn[0],sn=rn[1],Sn=(0,_.useState)(),ln=(0,O.Z)(Sn,2),z=ln[0],nn=ln[1],Mn=(0,_.useState)([]),dn=(0,O.Z)(Mn,2),E=dn[0],An=dn[1],_n=(0,_.useState)(10),un=(0,O.Z)(_n,2),w=un[0],cn=un[1],xn=(0,_.useState)(1),vn=(0,O.Z)(xn,2),tn=vn[0],en=vn[1],fn=function(a){a||en(1),a<.1||a>3?en(1):en(a)},D=function(a){nn(a),a!=null&&a.label&&sn(a.label)},X=function(a){An(a)};(0,_.useEffect)(function(){localStorage.removeItem("history"),k([])},[]);function k(l,a){var u=localStorage.getItem("history"),f=u?JSON.parse(u):{index:-1,items:[]},hn={currentAnnotation:a,annotations:l};if(JSON.stringify(f.items[f.index])!=JSON.stringify(hn)){var Jn=f.index>m?f.index-m:0,Yn=f.items.splice(Jn,f.index==0?1:f.index+1);f.items=Yn.concat([hn]),f.index<=m?f.index++:f.index=m+1,localStorage.setItem("history",JSON.stringify(f))}}var Cn=function(){var a=localStorage.getItem("history");if(!!a){var u=JSON.parse(a);if(!!u&&!(u.index>=u.items.length-1)){u.index++,localStorage.setItem("history",JSON.stringify(u));var f=u.items[u.index];nn(f.currentAnnotation),X(f.annotations)}}},yn=function(){var a=localStorage.getItem("history");if(!!a){var u=JSON.parse(a);if(!(!u||!u.index)&&!(u.index<=0)){u.index--,localStorage.setItem("history",JSON.stringify(u));var f=u.items[u.index];nn(f.currentAnnotation),X(f.annotations)}}},on=function(a){for(var u=[],f=0;f<E.length;f++)E[f].annotationId==a.annotationId?u.push(a):u.push(E[f]);D(a),X(u)},mn=drawBrush({currentLabel:q,brushSize:w,currentTool:j,annotations:E,currentAnnotation:z,onAnnotationAdd:function(a){var u=E.concat([a]);X(u),z||D(a)},onAnnotationModify:on,onMouseUp:function(){k(E,z)}}),gn=drawPolygon({currentLabel:q,brushSize:w,currentTool:j,annotations:E,currentAnnotation:z,onAnnotationAdd:function(a){var u=E.concat([a]);X(u),z||D(a)},onAnnotationModify:on,onMouseUp:function(){k(E,z)}}),an=j=="polygon"?gn:mn,S=(0,y.YB)(),bn=S.formatMessage({id:"pages.toolBar.polygon"}),Bn=S.formatMessage({id:"pages.toolBar.brush"}),In=S.formatMessage({id:"pages.toolBar.rubber"}),Ln=S.formatMessage({id:"pages.toolBar.zoomIn"}),jn=S.formatMessage({id:"pages.toolBar.zoomOut"}),En=S.formatMessage({id:"pages.toolBar.move"}),On=S.formatMessage({id:"pages.toolBar.unDo"}),Zn=S.formatMessage({id:"pages.toolBar.reDo"}),Dn=S.formatMessage({id:"pages.toolBar.save"}),Tn=S.formatMessage({id:"pages.toolBar.edit"}),pn=S.formatMessage({id:"pages.toolBar.clearMark"}),Rn=S.formatMessage({id:"pages.toolBar.interactor"}),zn=S.formatMessage({id:"pages.toolBar.segmentThreshold"}),Nn=S.formatMessage({id:"pages.toolBar.transparency"}),Un=S.formatMessage({id:"pages.toolBar.visualRadius"}),Wn=S.formatMessage({id:"pages.toolBar.determineOutline"}),Fn=S.formatMessage({id:"pages.toolBar.medicalSetting"}),Kn=S.formatMessage({id:"pages.toolBar.divideData"}),Hn=S.formatMessage({id:"pages.toolBar.export"});return(0,e.jsxs)(W.Z,{className:I().segment,children:[(0,e.jsxs)(F.Z,{children:[(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/polygon.png",active:j=="polygon",onClick:function(){Q("polygon"),D(void 0)},children:bn}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/edit.png",children:Tn}),(0,e.jsx)(C.Z,{size:w,active:j=="brush",onClick:function(){j!="rubber"&&j!="brush"&&D(void 0),Q("brush")},onChange:function(a){cn(a)},children:Bn}),(0,e.jsx)(C.Z,{size:w,active:j=="rubber",onClick:function(){j!="rubber"&&j!="brush"&&D(void 0),Q("rubber")},onChange:function(a){cn(a)},imgSrc:"./pics/buttons/rubber.png",children:In}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){fn(tn+.1)},children:Ln}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){fn(tn-.1)},children:jn}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/save.png",children:Dn}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){Q("mover")},children:En}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){yn()},children:On}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){Cn()},children:Zn}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:pn})]}),(0,e.jsxs)("div",{id:"dr",className:I().mainStage,children:[(0,e.jsx)("div",{className:I().draw,children:(0,e.jsx)(o.Z,{width:(p=document.getElementById("dr"))===null||p===void 0?void 0:p.clientWidth,scale:tn,annotations:E,currentTool:j,currentAnnotation:z,setCurrentAnnotation:D,onAnnotationModify:on,onAnnotationModifyComplete:function(){k(E,z)},onMouseDown:an.onMouseDown,onMouseMove:an.onMouseMove,onMouseUp:an.onMouseUp,createPolygonFunc:gn.createElementsFunc,createBrushFunc:mn.createElementsFunc})}),(0,e.jsx)("div",{className:I().pblock,children:(0,e.jsx)("div",{className:I().progress,children:(0,e.jsx)(R.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)(F.Z,{disLoc:"right",children:[(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:Rn}),(0,e.jsx)(n.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:zn}),(0,e.jsx)(n.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:Nn}),(0,e.jsx)(n.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:Un}),(0,e.jsxs)(H.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of medical",content:(0,e.jsx)(M,{}),trigger:"hover",children:[" ",(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/medical_setting.png",children:Fn})]}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/data_division.png",children:Kn}),(0,e.jsx)(g.Z,{imgSrc:"./pics/buttons/export.png",children:Hn})]}),(0,e.jsxs)("div",{className:I().rightSideBar,children:[(0,e.jsx)("div",{className:I().determinOutline,children:(0,e.jsx)(U.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){D(void 0)},children:Wn})}),(0,e.jsx)(r.Z,{selectedLabel:q,onLabelSelect:function(a){sn(a),D(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(c.Z,{selectedAnnotation:z,annotations:E,onAnnotationSelect:function(a){a!=null&&a.delete||D(a)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(a){X(E.filter(function(u){return u.annotationId!=a.annotationId})),D(void 0)}})]})]})},b=Z}}]);
