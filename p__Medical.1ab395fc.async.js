(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[454],{57560:function(y){y.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},26647:function(y){y.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",popoverLeft:"popoverLeft___15lGe"}},8982:function(y){y.exports={RSPop1:"RSPop1___ei_bv",RSPop2:"RSPop2___9d5gM"}},75721:function(y){y.exports={segment:"segment___1EX9A",mainStage:"mainStage___nDwOp",draw:"draw___1Aue1",pblock:"pblock___19sdD",progress:"progress___1595f",rightSideBar:"rightSideBar___1JzJc",determinOutline:"determinOutline___2vG7S"}},43801:function(y,L,n){"use strict";n.d(L,{Z:function(){return j}});var U=n(11849),T=n(2824),p=n(91220),I=n(67294),z=n(65031),O=n(85893);function x(t,c,u,_){if(!(!t||!c||!u||!_))return{width:t,color:c,points:u,tool:_}}function m(t){if(!t)return[(0,O.jsx)(O.Fragment,{})];var c=[],u=(0,p.Z)(t),_;try{for(u.s();!(_=u.n()).done;){var d=_.value;if(!(!d||!d.lines)){var g=(0,p.Z)(d.lines),f;try{for(g.s();!(f=g.n()).done;){var r=f.value;!r.width||!r.color||!r.points||!r.tool||c.push((0,O.jsx)(z.x1,{stroke:r.color,strokeWidth:r.width,globalCompositeOperation:r.tool==="brush"?"source-over":"destination-out",lineCap:"round",points:r.points,tension:.01}))}}catch(A){g.e(A)}finally{g.f()}}}}catch(A){u.e(A)}finally{u.f()}return c}function R(t,c){return t=="rubber"||c==2?"rubber":"brush"}function E(t){var c=0,u=(0,p.Z)(t),_;try{for(u.s();!(_=u.n()).done;){var d=_.value;!d||d.annotationId>c&&(c=d.annotationId)}}catch(g){u.e(g)}finally{u.f()}return c}function j(t){var c=(0,I.useState)(),u=(0,T.Z)(c,2),_=u[0],d=u[1],g=function(P,S){var C;if(console.log(t.currentTool),!(t.currentTool!="brush"&&t.currentTool!="rubber")){var M=P.evt.offsetX/S,h=P.evt.offsetY/S,s=R(t.currentTool,P.evt.button),a=x(t.brushSize||10,(C=t.currentLabel)===null||C===void 0?void 0:C.color,[M,h,M,h],s);if(!!a)if(d(s),t.currentAnnotation){var Z,W={annotationId:t.currentAnnotation.annotationId,label:t.currentAnnotation.label,lines:(Z=t.currentAnnotation.lines)===null||Z===void 0?void 0:Z.concat([a])};t.onAnnotationModify(W)}else{if(s=="rubber")return;t.onAnnotationAdd({annotationId:E(t.annotations)+1,label:t.currentLabel,lines:[a]})}}},f=function(P,S){var C;if(!(!_||!t.currentAnnotation)){var M=P.evt.offsetX/S,h=P.evt.offsetY/S,s=[M,h],a=[];(C=t.currentAnnotation)!==null&&C!==void 0&&C.lines&&(s=t.currentAnnotation.lines[t.currentAnnotation.lines.length-1].points.concat(s),a=t.currentAnnotation.lines);var Z=x(t.brushSize||10,t.currentLabel.color,s,_);!Z||(a.pop(),a.push(Z),t.onAnnotationModify((0,U.Z)((0,U.Z)({},t.currentAnnotation),{},{lines:a})))}},r=function(){t.currentTool!="brush"&&t.currentTool!="rubber"||d(void 0)};return{onMouseDown:g,onMouseMove:f,onMouseUp:r,createElementsFunc:m}}},58967:function(y,L,n){"use strict";var U=n(20136),T=n(55241),p=n(77883),I=n(70507),z=n(57663),O=n(71577),x=n(2824),m=n(67294),R=n(61541),E=n(57560),j=n.n(E),t=n(85893),c=1,u=50,_=10;function d(f){return f?f<=c?c:f>=u?u:f:_}var g=function(r){var A=(0,m.useState)(d(r.size)),P=(0,x.Z)(A,2),S=P[0],C=P[1],M=function(s){C(d(s))};return(0,m.useEffect)(function(){M(r.size)},[r.size]),(0,t.jsxs)(T.Z,{overlayClassName:j().popover,placement:"right",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.Z,{type:"text",onClick:function(){var s,a=d(S-1);M(a),(s=r.onChange)===null||s===void 0||s.call(0,a)},children:"-"}),(0,t.jsx)(I.Z,{min:c,max:u,value:S,onChange:function(s){var a;(a=r.onChange)===null||a===void 0||a.call(0,s)},controls:!1,style:{textAlign:"center"}}),(0,t.jsx)(O.Z,{type:"text",onClick:function(){var s,a=d(S+1);M(a),(s=r.onChange)===null||s===void 0||s.call(0,a)},children:"+"})]}),trigger:r.active?"hover":"click",children:[" ",(0,t.jsx)(R.Z,{active:r.active,imgSrc:r.imgSrc||"./pics/buttons/brush.png",onClick:r.onClick,children:r.children||"Brush"})]})};L.Z=g},27992:function(y,L,n){"use strict";var U=n(20136),T=n(55241),p=n(77883),I=n(70507),z=n(57663),O=n(71577),x=n(2824),m=n(67294),R=n(61541),E=n(26647),j=n.n(E),t=n(85893),c=1,u=100,_=10;function d(f){return f?f<=c?c:f>=u?u:f:_}var g=function(r){var A=(0,m.useState)(d(r.size)),P=(0,x.Z)(A,2),S=P[0],C=P[1],M=function(s){C(d(s))};return(0,m.useEffect)(function(){M(r.size)},[r.size]),(0,t.jsxs)(T.Z,{overlayClassName:"".concat(j().popover," ").concat(r.disLoc=="left"?j().popoverLeft:""),placement:r.disLoc||"right",content:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O.Z,{type:"text",onClick:function(){var s,a=d(S-1);M(a),(s=r.onChange)===null||s===void 0||s.call(0,a)},children:"-"}),(0,t.jsx)(I.Z,{min:c,max:u,value:S,onChange:function(s){var a;(a=r.onChange)===null||a===void 0||a.call(0,s)},controls:!1,style:{textAlign:"center"}}),(0,t.jsx)(O.Z,{type:"text",onClick:function(){var s,a=d(S+1);M(a),(s=r.onChange)===null||s===void 0||s.call(0,a)},children:"+"})]}),trigger:"hover",children:[" ",(0,t.jsx)(R.Z,{imgSrc:r.imgSrc,onClick:r.onClick,children:r.children})]})};L.Z=g},21028:function(y,L,n){"use strict";n.r(L),n.d(L,{default:function(){return fn}});var U=n(57663),T=n(71577),p=n(20136),I=n(55241),z=n(34669),O=n(54458),x=n(2824),m=n(67294),R=n(75721),E=n.n(R),j=n(8088),t=n(61541),c=n(44434),u=n(58967),_=n(27992),d=n(5041),g=n(57436),f=n(14836),r=n(29919),A=n(43801),P=n(13931),S=n(13062),C=n(71230),M=n(66126),h=n(75454),s=n(89032),a=n(15746),Z=n(8982),W=n.n(Z),o=n(85893),dn=function(N){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(C.Z,{children:[(0,o.jsx)(a.Z,{span:6,className:W().Pop1,children:(0,o.jsx)("span",{children:"Ww"})}),(0,o.jsx)(a.Z,{span:18,className:W().Pop2,children:(0,o.jsx)(h.Z,{min:1,max:N.wwValue||100,defaultValue:37})})]}),(0,o.jsxs)(C.Z,{children:[(0,o.jsx)(a.Z,{span:6,className:W().Pop1,children:(0,o.jsx)("span",{children:"Wl"})}),(0,o.jsx)(a.Z,{span:18,className:W().Pop2,children:(0,o.jsx)(h.Z,{min:1,max:N.wlValue||100,defaultValue:37})})]})]})},vn=dn,_n=function(){var N=(0,m.useState)(void 0),q=(0,x.Z)(N,2),b=q[0],X=q[1],hn=(0,m.useState)({color:"",name:""}),nn=(0,x.Z)(hn,2),V=nn[0],tn=nn[1],gn=(0,m.useState)(),en=(0,x.Z)(gn,2),K=en[0],$=en[1],Pn=(0,m.useState)([]),on=(0,x.Z)(Pn,2),B=on[0],Y=on[1],Sn=(0,m.useState)(10),rn=(0,x.Z)(Sn,2),F=rn[0],an=rn[1],Cn=(0,m.useState)(1),sn=(0,x.Z)(Cn,2),G=sn[0],Q=sn[1],ln=function(e){e||Q(1),e<.1||e>3?Q(1):Q(e)},D=function(e){$(e),e!=null&&e.label&&tn(e.label)},J=function(e){Y(e)};(0,m.useEffect)(function(){localStorage.removeItem("history")},[]);function k(l,e){var i=localStorage.getItem("history"),v=i?JSON.parse(i):{index:-1,items:[]};console.log("history before set: ");var yn=JSON.stringify(v);console.log(yn);var w={currentAnnotation:e,annotations:l};if(JSON.stringify(v.items[v.index])==JSON.stringify(w)){console.log("equal with latest, do not add to history");return}var cn=v.items.splice(0,v.index==0?1:v.index+1);console.log("itemsToKeep: ".concat(JSON.stringify(cn))),console.log("itemsToAdd: ".concat(JSON.stringify(w))),v.items=cn.concat([w]),v.index++,localStorage.setItem("history",JSON.stringify(v)),console.log("history after set: "),console.log(JSON.stringify(v))}var xn=function(){var e=localStorage.getItem("history");if(!e){console.log("no historyStr, skip.");return}var i=JSON.parse(e);if(!!i){if(i.index>=i.items.length-1){console.log("already latest, skip. history.index:".concat(i.index," history.items.length:").concat(i.items.length));return}i.index++,localStorage.setItem("history",JSON.stringify(i)),console.log("After forward. history:".concat(JSON.stringify(i)));var v=i.items[i.index];$(v.currentAnnotation),Y(v.annotations)}},En=function(){var e=localStorage.getItem("history");if(!!e){var i=JSON.parse(e);if(!(!i||!i.index)&&!(i.index<=0)){i.index--,localStorage.setItem("history",JSON.stringify(i));var v=i.items[i.index];console.log("after backward: ".concat(JSON.stringify(i))),$(v.currentAnnotation),Y(v.annotations)}}},un=function(e){for(var i=[],v=0;v<B.length;v++)B[v].annotationId==e.annotationId?i.push(e):i.push(B[v]);D(e),J(i),k(i,e)},Mn=(0,A.Z)({currentLabel:V,brushSize:F,currentTool:b,annotations:B,currentAnnotation:K,onAnnotationAdd:function(e){var i=B.concat([e]);J(i),K||D(e),k(i,e)},onAnnotationModify:un}),An=(0,P.Z)({currentLabel:V,brushSize:F,currentTool:b,annotations:B,currentAnnotation:K,onAnnotationAdd:function(e){var i=B.concat([e]);J(i),K||D(e),k(i,e)},onAnnotationModify:un}),H=b=="polygon"?An:Mn;return(0,o.jsxs)(j.Z,{className:E().segment,children:[(0,o.jsxs)(c.Z,{children:[(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,o.jsx)(r.Z,{active:b=="polygon",onClick:function(){X("polygon"),D(void 0)},children:"Polygon"}),(0,o.jsx)(u.Z,{size:F,active:b=="brush",onClick:function(){b!="rubber"&&b!="brush"&&D(void 0),X("brush")},onChange:function(e){an(e)},children:"Brush"}),(0,o.jsx)(u.Z,{size:F,active:b=="rubber",onClick:function(){b!="rubber"&&b!="brush"&&D(void 0),X("rubber")},onChange:function(e){an(e)},imgSrc:"./pics/buttons/rubber.png",children:"Rubber"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){ln(G+.1)},children:"Zoom in"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){ln(G-.1)},children:"Zoom out"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){En()},children:"Undo"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){xn()},children:"Redo"}),(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,o.jsxs)("div",{className:E().mainStage,children:[(0,o.jsx)("div",{className:E().draw,children:(0,o.jsx)(g.Z,{scale:G,annotations:B,onMouseDown:H.onMouseDown,onMouseMove:H.onMouseMove,onMouseUp:H.onMouseUp,createElementsFunc:H.createElementsFunc})}),(0,o.jsx)("div",{className:E().pblock,children:(0,o.jsx)("div",{className:E().progress,children:(0,o.jsx)(O.Z,{percent:50,status:"active"})})})]}),(0,o.jsxs)(c.Z,{disLoc:"right",children:[(0,o.jsx)(_.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:"Segment Threshold"}),(0,o.jsx)(_.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:"Diaphaneity"}),(0,o.jsx)(_.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:"Visual Radius"}),(0,o.jsxs)(I.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of medical",content:(0,o.jsx)(vn,{}),trigger:"hover",children:[" ",(0,o.jsx)(t.Z,{imgSrc:"./pics/buttons/medical_setting.png",children:"Medical Setting"})]})]}),(0,o.jsxs)("div",{className:E().rightSideBar,children:[(0,o.jsx)("div",{className:E().determinOutline,children:(0,o.jsx)(T.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){D(void 0)},children:"Determine Outline"})}),(0,o.jsx)(d.Z,{selectedLabel:V,onLabelSelect:function(e){tn(e),D(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,o.jsx)(f.Z,{selectedAnnotation:K,annotations:B,onAnnotationSelect:function(e){e!=null&&e.delete||D(e)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(e){J(B.filter(function(i){return i.annotationId!=e.annotationId})),D(void 0)}})]})]})},fn=_n}}]);
