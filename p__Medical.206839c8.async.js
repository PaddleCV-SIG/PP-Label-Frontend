(self.webpackChunkPaddleLabel_Frontend=self.webpackChunkPaddleLabel_Frontend||[]).push([[454],{85024:function(L){L.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(L){L.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},26647:function(L){L.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",slider:"slider___ALra-",popoverLeft:"popoverLeft___15lGe"}},8982:function(L){L.exports={RSPop1:"RSPop1___ei_bv",RSPop2:"RSPop2___9d5gM"}},75721:function(L){L.exports={segment:"segment___1EX9A",mainStage:"mainStage___nDwOp",draw:"draw___1Aue1",pblock:"pblock___19sdD",progress:"progress___1595f",rightSideBar:"rightSideBar___1JzJc",determinOutline:"determinOutline___2vG7S"}},8978:function(L,p,t){"use strict";t.d(p,{Z:function(){return U}});var V=t(11849),H=t(2824),G=t(91220),F=t(67294),N=t(85893);function J(n){if(!n||!n.width||!n.color||!n.points||n.points.length<2||n.frontendId==null)return"";var s=n.type=="rubber"?0:n.frontendId;return"".concat(n.width,",").concat(s,",").concat(n.points.join(","))}function Z(n){var s,r=n.canvasRef,c=n.annotation,o=c.result;if(!o)return(0,N.jsx)(N.Fragment,{});var m=(s=r.current)===null||s===void 0?void 0:s.getContext("2d");if(!m)return(0,N.jsx)(N.Fragment,{});for(var h=[],j=0,i=0;i<o.length;i++)o.at(i)==","?(h.push(parseFloat(o.slice(j,i))),j=i+1):o.at(i)=="|"?(h.push(parseFloat(o.slice(j,i))),P(h,m,c),h=[],j=i+1):i==o.length-1&&(h.push(parseFloat(o.slice(j,o.length))),P(h,m,c));return(0,N.jsx)(N.Fragment,{})}function P(n,s,r){var c;if(n.length<4){console.log("found incorrect points:",n);return}var o=n[0],m=n[1];if(o==0){var h;I(s,n.slice(2),(h=r.label)===null||h===void 0?void 0:h.color);return}if(m==0){Y(s,o,n.slice(2),void 0);return}Y(s,o,n.slice(2),(c=r.label)===null||c===void 0?void 0:c.color)}function Y(n,s,r,c){n.beginPath(),n.moveTo(r[0],r[1]);for(var o=0;o<=r.length/2-1;o++){var m=r[2*o],h=r[2*o+1];n.lineTo(m,h)}n.lineCap="round",n.lineJoin="round",n.lineWidth=s,c&&(n.strokeStyle=c),n.globalCompositeOperation=c?"source-over":"destination-out",n.stroke()}function I(n,s,r){console.log("renderPixel: ",s,r,n),n.globalCompositeOperation=r?"source-over":"destination-out",r&&(n.fillStyle=r);for(var c=0;c<=s.length/2-1;c++){var o=s[2*c],m=s[2*c+1];n.fillRect(o,m,1,1)}}function X(n){if(!n||n.length==0)return 0;var s=0,r=(0,G.Z)(n),c;try{for(r.s();!(c=r.n()).done;){var o=c.value;o.frontendId>s&&(s=o.frontendId)}}catch(m){r.e(m)}finally{r.f()}return s}function f(n,s){return n=="rubber"||s==2?"rubber":"brush"}function U(n){var s=(0,F.useState)(),r=(0,H.Z)(s,2),c=r[0],o=r[1],m=function(y){var B,l;if(!(n.currentTool!="brush"&&n.currentTool!="rubber"||!((B=n.currentLabel)!==null&&B!==void 0&&B.color)||!n.brushSize)){var g=y.mouseX,e=y.mouseY,D=f(n.currentTool,y.e.evt.button);console.log("frontendId: ",n.frontendIdOps.frontendId,"maxId:",X(n.annotations));var M=n.frontendIdOps.frontendId>0?n.frontendIdOps.frontendId:X(n.annotations)+1;M!=n.frontendIdOps.frontendId&&n.frontendIdOps.setFrontendId(M);var x=J({width:n.brushSize||10,color:(l=n.currentLabel)===null||l===void 0?void 0:l.color,points:[g,e,g,e],type:D,frontendId:M});if(!!x){o(D);var A={dataId:n.dataId,label:n.currentLabel,labelId:n.currentLabel.labelId,frontendId:M,result:x,type:"brush"};n.onAnnotationAdd(A)}}},h=function(y){var B;if(!(!c||!n.currentAnnotation||!n.currentAnnotation.result||n.currentAnnotation.result.length<2||!((B=n.currentLabel)!==null&&B!==void 0&&B.color))){var l=y.mouseX,g=y.mouseY,e=n.currentAnnotation.result+",".concat(l,",").concat(g);n.onAnnotationModify((0,V.Z)((0,V.Z)({},n.currentAnnotation),{},{result:e}))}},j=function(){n.currentTool!="brush"&&n.currentTool!="rubber"||(o(void 0),n.onMouseUp())};return{onMouseDown:m,onMouseMove:h,onMouseUp:j,drawAnnotation:Z}}},14836:function(L,p,t){"use strict";t.d(p,{Z:function(){return y}});var V=t(20228),H=t(11382),G=t(54421),F=t(38272),N=t(57663),J=t(71577),Z=t(91220),P=t(67294),Y=t(56159),I=t.n(Y),X=t(49111),f=t(19650),U=t(2824),n=t(11849),s=t(85024),r=t.n(s),c=t(63097),o=t(85893),m=function(l){var g=(0,n.Z)({},l.annotation),e=(0,P.useState)(g.invisible),D=(0,U.Z)(e,2),M=D[0],x=D[1],A=(0,P.useState)(0),b=(0,U.Z)(A,2),T=b[0],_=b[1];(0,P.useEffect)(function(){x(l.annotation.invisible)},[l.annotation.invisible]);var O=(0,o.jsxs)(F.ZP.Item,{className:"".concat(r().listItem," ").concat(l.active?r().listItemActive:""),unselectable:"on",onClick:function(){l.onClick(g)},children:[(0,o.jsxs)(f.Z,{align:"center",size:5,children:[(0,o.jsx)("a",{className:r().eye,style:{backgroundImage:M?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(K){K.stopPropagation(),x(!M),l.onAnnotationModify(g)}})," ",(0,o.jsx)("span",{className:r().annotationId,children:g.frontendId}),(0,o.jsx)("span",{className:r().labelName,children:g.label.name}),(0,o.jsx)(c.Z,{color:g.label.color})]}),(0,o.jsx)("a",{className:r().delete,onClick:function(K){K.stopPropagation();var C=new Date().getTime();C-T<300||(_(C),l.onAnnotationDelete(g))}})]});return O},h=m,j=t(48971),i=function(l){var g=(0,j.YB)(),e=g.formatMessage({id:"component.PPAnnotationList.annotationList"}),D=g.formatMessage({id:"component.PPAnnotationList.addAnnotation"}),M=new Set,x=[],A=(0,Z.Z)(l.annotations),b;try{for(A.s();!(b=A.n()).done;){var T=b.value;M.has(T.frontendId)||(x.push(T),M.add(T.frontendId))}}catch(_){A.e(_)}finally{A.f()}return(0,o.jsx)(H.Z,{spinning:l.disabled,indicator:(0,o.jsx)(o.Fragment,{}),children:(0,o.jsx)(F.ZP,{className:I().labelList,size:"large",header:(0,o.jsx)("div",{className:I().listHeader,children:e}),bordered:!0,dataSource:x,renderItem:function(O){var R;return(0,o.jsx)(h,{onClick:l.disabled?function(){}:l.onAnnotationSelect,annotation:O,active:l.disabled?!1:O.frontendId==((R=l.currAnnotation)===null||R===void 0?void 0:R.frontendId),onAnnotationDelete:l.onAnnotationDelete,onAnnotationModify:l.onAnnotationModify})},footer:function(){return l.onAnnotationAdd?(0,o.jsx)("div",{children:(0,o.jsx)(J.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){l.onAnnotationAdd()},block:!0,children:D})}):(0,o.jsx)("div",{})}})})},y=i},27992:function(L,p,t){"use strict";var V=t(20136),H=t(55241),G=t(13062),F=t(71230),N=t(77883),J=t(70507),Z=t(89032),P=t(15746),Y=t(66126),I=t(75454),X=t(2824),f=t(67294),U=t(61541),n=t(26647),s=t.n(n),r=t(85893),c=0,o=100,m=10,h=function(i){var y=(0,f.useState)(A(i.size)),B=(0,X.Z)(y,2),l=B[0],g=B[1];function e(b){g(A(b))}var D=i.step?i.step:10,M=i.minSize==null?c:i.minSize,x=i.maxSize==null?o:i.maxSize;function A(b){return b==null?m:b<=M?M:b>=x?x:b}return(0,f.useEffect)(function(){e(i.size)},[i.size]),(0,r.jsxs)(H.Z,{overlayClassName:"".concat(s().popover," ").concat(i.disLoc=="left"?s().popoverLeft:""),placement:i.disLoc||"right",content:(0,r.jsxs)(F.Z,{children:[(0,r.jsx)(P.Z,{span:16,children:(0,r.jsx)(I.Z,{className:s().slider,value:l,max:x,min:M,onChange:function(T){var _;(_=i.onChange)===null||_===void 0||_.call(0,T)},tooltipVisible:!1})}),(0,r.jsx)(P.Z,{span:8,children:(0,r.jsx)(J.Z,{min:M,max:x,value:l,onChange:function(T){var _;(_=i.onChange)===null||_===void 0||_.call(0,T)},step:D})})]}),trigger:"hover",visible:i.disabled?!1:void 0,children:[" ",(0,r.jsx)(U.Z,{imgSrc:i.imgSrc||"",onClick:!i.disabled&&i.onClick||void 0,active:i.active,disabled:i.disabled,children:i.children})]})};p.Z=h},21028:function(L,p,t){"use strict";t.r(p),t.d(p,{MOST_HISTORY_STEPS:function(){return A},default:function(){return T}});var V=t(57663),H=t(71577),G=t(20136),F=t(55241),N=t(34669),J=t(54458),Z=t(2824),P=t(67294),Y=t(75721),I=t.n(Y),X=t(8088),f=t(61541),U=t(44434),n=t(27992),s=t(5041),r=t(57436),c=t(14836),o=t(13062),m=t(71230),h=t(66126),j=t(75454),i=t(89032),y=t(15746),B=t(8982),l=t.n(B),g=t(48971),e=t(85893),D=function(O){var R=(0,g.YB)(),K=R.formatMessage({id:"component.PPMedical.windowWidth"}),C=R.formatMessage({id:"component.PPMedical.windowLevel"});return(0,e.jsxs)("div",{children:[(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(y.Z,{span:6,className:l().Pop1,children:(0,e.jsx)("span",{children:K})}),(0,e.jsx)(y.Z,{span:18,className:l().Pop2,children:(0,e.jsx)(j.Z,{min:1,max:O.wwValue||100,defaultValue:37})})]}),(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(y.Z,{span:6,className:l().Pop1,children:(0,e.jsx)("span",{children:C})}),(0,e.jsx)(y.Z,{span:18,className:l().Pop2,children:(0,e.jsx)(j.Z,{min:1,max:O.wlValue||100,defaultValue:37})})]})]})},M=D,x=t(8978),A=40,b=function(){var O,R=(0,P.useState)(void 0),K=(0,Z.Z)(R,2),C=K[0],Q=K[1],Sn=(0,P.useState)({color:"",name:""}),rn=(0,Z.Z)(Sn,2),q=rn[0],sn=rn[1],Pn=(0,P.useState)(),ln=(0,Z.Z)(Pn,2),W=ln[0],nn=ln[1],Mn=(0,P.useState)([]),dn=(0,Z.Z)(Mn,2),E=dn[0],An=dn[1],xn=(0,P.useState)(10),un=(0,Z.Z)(xn,2),w=un[0],cn=un[1],bn=(0,P.useState)(1),vn=(0,Z.Z)(bn,2),tn=vn[0],en=vn[1],fn=function(a){a||en(1),a<.1||a>3?en(1):en(a)},z=function(a){nn(a),a!=null&&a.label&&sn(a.label)},$=function(a){An(a)};(0,P.useEffect)(function(){localStorage.removeItem("history"),k([])},[]);function k(d,a){var u=localStorage.getItem("history"),v=u?JSON.parse(u):{index:-1,items:[]},hn={currentAnnotation:a,annotations:d};if(JSON.stringify(v.items[v.index])!=JSON.stringify(hn)){var Jn=v.index>A?v.index-A:0,Yn=v.items.splice(Jn,v.index==0?1:v.index+1);v.items=Yn.concat([hn]),v.index<=A?v.index++:v.index=A+1,localStorage.setItem("history",JSON.stringify(v))}}var Cn=function(){var a=localStorage.getItem("history");if(!!a){var u=JSON.parse(a);if(!!u&&!(u.index>=u.items.length-1)){u.index++,localStorage.setItem("history",JSON.stringify(u));var v=u.items[u.index];nn(v.currentAnnotation),$(v.annotations)}}},yn=function(){var a=localStorage.getItem("history");if(!!a){var u=JSON.parse(a);if(!(!u||!u.index)&&!(u.index<=0)){u.index--,localStorage.setItem("history",JSON.stringify(u));var v=u.items[u.index];nn(v.currentAnnotation),$(v.annotations)}}},on=function(a){for(var u=[],v=0;v<E.length;v++)E[v].annotationId==a.annotationId?u.push(a):u.push(E[v]);z(a),$(u)},mn=drawBrush({currentLabel:q,brushSize:w,currentTool:C,annotations:E,currentAnnotation:W,onAnnotationAdd:function(a){var u=E.concat([a]);$(u),W||z(a)},onAnnotationModify:on,onMouseUp:function(){k(E,W)}}),gn=drawPolygon({currentLabel:q,brushSize:w,currentTool:C,annotations:E,currentAnnotation:W,onAnnotationAdd:function(a){var u=E.concat([a]);$(u),W||z(a)},onAnnotationModify:on,onMouseUp:function(){k(E,W)}}),an=C=="polygon"?gn:mn,S=(0,g.YB)(),_n=S.formatMessage({id:"pages.toolBar.polygon"}),In=S.formatMessage({id:"pages.toolBar.brush"}),Bn=S.formatMessage({id:"pages.toolBar.rubber"}),Ln=S.formatMessage({id:"pages.toolBar.zoomIn"}),jn=S.formatMessage({id:"pages.toolBar.zoomOut"}),En=S.formatMessage({id:"pages.toolBar.move"}),On=S.formatMessage({id:"pages.toolBar.unDo"}),Zn=S.formatMessage({id:"pages.toolBar.reDo"}),Dn=S.formatMessage({id:"pages.toolBar.save"}),Tn=S.formatMessage({id:"pages.toolBar.edit"}),Rn=S.formatMessage({id:"pages.toolBar.clearMark"}),zn=S.formatMessage({id:"pages.toolBar.interactor"}),Nn=S.formatMessage({id:"pages.toolBar.segmentThreshold"}),Un=S.formatMessage({id:"pages.toolBar.transparency"}),Wn=S.formatMessage({id:"pages.toolBar.visualRadius"}),pn=S.formatMessage({id:"pages.toolBar.determineOutline"}),Fn=S.formatMessage({id:"pages.toolBar.medicalSetting"}),Kn=S.formatMessage({id:"pages.toolBar.divideData"}),Hn=S.formatMessage({id:"pages.toolBar.export"});return(0,e.jsxs)(X.Z,{className:I().segment,children:[(0,e.jsxs)(U.Z,{children:[(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/polygon.png",active:C=="polygon",onClick:function(){Q("polygon"),z(void 0)},children:_n}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/edit.png",children:Tn}),(0,e.jsx)(x.Z,{size:w,active:C=="brush",onClick:function(){C!="rubber"&&C!="brush"&&z(void 0),Q("brush")},onChange:function(a){cn(a)},children:In}),(0,e.jsx)(x.Z,{size:w,active:C=="rubber",onClick:function(){C!="rubber"&&C!="brush"&&z(void 0),Q("rubber")},onChange:function(a){cn(a)},imgSrc:"./pics/buttons/rubber.png",children:Bn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){fn(tn+.1)},children:Ln}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){fn(tn-.1)},children:jn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/save.png",children:Dn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){Q("mover")},children:En}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){yn()},children:On}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){Cn()},children:Zn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:Rn})]}),(0,e.jsxs)("div",{id:"dr",className:I().mainStage,children:[(0,e.jsx)("div",{className:I().draw,children:(0,e.jsx)(r.Z,{width:(O=document.getElementById("dr"))===null||O===void 0?void 0:O.clientWidth,scale:tn,annotations:E,currentTool:C,currentAnnotation:W,setCurrentAnnotation:z,onAnnotationModify:on,onAnnotationModifyComplete:function(){k(E,W)},onMouseDown:an.onMouseDown,onMouseMove:an.onMouseMove,onMouseUp:an.onMouseUp,createPolygonFunc:gn.createElementsFunc,createBrushFunc:mn.createElementsFunc})}),(0,e.jsx)("div",{className:I().pblock,children:(0,e.jsx)("div",{className:I().progress,children:(0,e.jsx)(J.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)(U.Z,{disLoc:"right",children:[(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:zn}),(0,e.jsx)(n.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:Nn}),(0,e.jsx)(n.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:Un}),(0,e.jsx)(n.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:Wn}),(0,e.jsxs)(F.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of medical",content:(0,e.jsx)(M,{}),trigger:"hover",children:[" ",(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/medical_setting.png",children:Fn})]}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/data_division.png",children:Kn}),(0,e.jsx)(f.Z,{imgSrc:"./pics/buttons/export.png",children:Hn})]}),(0,e.jsxs)("div",{className:I().rightSideBar,children:[(0,e.jsx)("div",{className:I().determinOutline,children:(0,e.jsx)(H.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){z(void 0)},children:pn})}),(0,e.jsx)(s.Z,{selectedLabel:q,onLabelSelect:function(a){sn(a),z(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(c.Z,{selectedAnnotation:W,annotations:E,onAnnotationSelect:function(a){a!=null&&a.delete||z(a)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(a){$(E.filter(function(u){return u.annotationId!=a.annotationId})),z(void 0)}})]})]})},T=b}}]);