(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[454],{57560:function(E){E.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},26647:function(E){E.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2"}},8982:function(E){E.exports={RSPop1:"RSPop1___ei_bv",RSPop2:"RSPop2___9d5gM"}},75721:function(E){E.exports={segment:"segment___1EX9A",mainStage:"mainStage___nDwOp",rightSideBar:"rightSideBar___1JzJc",determinOutline:"determinOutline___2vG7S"}},43801:function(E,O,n){"use strict";n.d(O,{Z:function(){return _}});var R=n(11849),Z=n(2824),U=n(91220),j=n(67294),A=n(65031),h=n(85893);function L(e,r,s,d){if(!(!e||!r||!s||!d))return{width:e,color:r,points:s,tool:d,element:(0,h.jsx)(A.x1,{stroke:r,strokeWidth:e,globalCompositeOperation:d==="brush"?"source-over":"destination-out",lineCap:"round",points:s,tension:.01})}}function C(e,r){return e=="rubber"||r==2?"rubber":"brush"}function T(e){var r=0,s=(0,U.Z)(e),d;try{for(s.s();!(d=s.n()).done;){var M=d.value;!M||M.annotationId>r&&(r=M.annotationId)}}catch(m){s.e(m)}finally{s.f()}return r}function _(e){var r=(0,j.useState)(),s=(0,Z.Z)(r,2),d=s[0],M=s[1],m=function(S,P){var v;if(console.log(e.currentTool),!(e.currentTool!="brush"&&e.currentTool!="rubber")){var x=S.evt.offsetX/P,g=S.evt.offsetY/P,u=C(e.currentTool,S.evt.button),o=L(e.brushSize||10,(v=e.currentLabel)===null||v===void 0?void 0:v.color,[x,g,x,g],u);if(!!o)if(M(u),e.currentAnnotation){var a,t={annotationId:e.currentAnnotation.annotationId,label:e.currentAnnotation.label,lines:(a=e.currentAnnotation.lines)===null||a===void 0?void 0:a.concat([o])};e.onAnnotationModify(t)}else{if(u=="rubber")return;e.onAnnotationAdd({annotationId:T(e.annotations)+1,label:e.currentLabel,lines:[o]})}}},y=function(S,P){var v;if(!(!d||!e.currentAnnotation)){var x=S.evt.offsetX/P,g=S.evt.offsetY/P,u=[x,g],o=[];(v=e.currentAnnotation)!==null&&v!==void 0&&v.lines&&(u=e.currentAnnotation.lines[e.currentAnnotation.lines.length-1].points.concat(u),o=e.currentAnnotation.lines);var a=L(e.brushSize||10,e.currentLabel.color,u,d);!a||(o.pop(),o.push(a),e.onAnnotationModify((0,R.Z)((0,R.Z)({},e.currentAnnotation),{},{lines:o})))}},f=function(){e.currentTool!="brush"&&e.currentTool!="rubber"||M(void 0)};return{onMouseDown:m,onMouseMove:y,onMouseUp:f}}},58967:function(E,O,n){"use strict";var R=n(20136),Z=n(55241),U=n(77883),j=n(70507),A=n(57663),h=n(71577),L=n(2824),C=n(67294),T=n(61541),_=n(57560),e=n.n(_),r=n(85893),s=1,d=50,M=10;function m(f){return f?f<=s?s:f>=d?d:f:M}var y=function(l){var S=(0,C.useState)(m(l.size)),P=(0,L.Z)(S,2),v=P[0],x=P[1],g=function(o){x(m(o))};return(0,C.useEffect)(function(){g(l.size)},[l.size]),(0,r.jsxs)(Z.Z,{overlayClassName:e().popover,placement:"right",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{type:"text",onClick:function(){var o,a=m(v-1);g(a),(o=l.onChange)===null||o===void 0||o.call(0,a)},children:"-"}),(0,r.jsx)(j.Z,{min:s,max:d,value:v,onChange:function(o){var a;(a=l.onChange)===null||a===void 0||a.call(0,o)},controls:!1,style:{textAlign:"center"}}),(0,r.jsx)(h.Z,{type:"text",onClick:function(){var o,a=m(v+1);g(a),(o=l.onChange)===null||o===void 0||o.call(0,a)},children:"+"})]}),trigger:l.active?"hover":"click",children:[" ",(0,r.jsx)(T.Z,{active:l.active,imgSrc:l.imgSrc||"./pics/buttons/brush.png",onClick:l.onClick,children:l.children||"Brush"})]})};O.Z=y},27992:function(E,O,n){"use strict";var R=n(20136),Z=n(55241),U=n(77883),j=n(70507),A=n(57663),h=n(71577),L=n(2824),C=n(67294),T=n(61541),_=n(26647),e=n.n(_),r=n(85893),s=1,d=100,M=10;function m(f){return f?f<=s?s:f>=d?d:f:M}var y=function(l){var S=(0,C.useState)(m(l.size)),P=(0,L.Z)(S,2),v=P[0],x=P[1],g=function(o){x(m(o))};return(0,C.useEffect)(function(){g(l.size)},[l.size]),(0,r.jsxs)(Z.Z,{overlayClassName:e().popover,placement:l.disLoc||"right",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h.Z,{type:"text",onClick:function(){var o,a=m(v-1);g(a),(o=l.onChange)===null||o===void 0||o.call(0,a)},children:"-"}),(0,r.jsx)(j.Z,{min:s,max:d,value:v,onChange:function(o){var a;(a=l.onChange)===null||a===void 0||a.call(0,o)},controls:!1,style:{textAlign:"center"}}),(0,r.jsx)(h.Z,{type:"text",onClick:function(){var o,a=m(v+1);g(a),(o=l.onChange)===null||o===void 0||o.call(0,a)},children:"+"})]}),trigger:"hover",children:[" ",(0,r.jsx)(T.Z,{imgSrc:l.imgSrc,onClick:l.onClick,children:l.children})]})};O.Z=y},21028:function(E,O,n){"use strict";n.r(O),n.d(O,{default:function(){return rn}});var R=n(57663),Z=n(71577),U=n(20136),j=n(55241),A=n(2824),h=n(67294),L=n(75721),C=n.n(L),T=n(8088),_=n(61541),e=n(44434),r=n(58967),s=n(27992),d=n(5041),M=n(57436),m=n(14836),y=n(29919),f=n(43801),l=n(13931),S=n(13062),P=n(71230),v=n(66126),x=n(75454),g=n(89032),u=n(15746),o=n(8982),a=n.n(o),t=n(85893),en=function(z){return(0,t.jsxs)("div",{children:[(0,t.jsxs)(P.Z,{children:[(0,t.jsx)(u.Z,{span:6,className:a().Pop1,children:(0,t.jsx)("span",{children:"Ww"})}),(0,t.jsx)(u.Z,{span:18,className:a().Pop2,children:(0,t.jsx)(x.Z,{min:1,max:z.wwValue||100,defaultValue:37})})]}),(0,t.jsxs)(P.Z,{children:[(0,t.jsx)(u.Z,{span:6,className:a().Pop1,children:(0,t.jsx)("span",{children:"Wl"})}),(0,t.jsx)(u.Z,{span:18,className:a().Pop2,children:(0,t.jsx)(x.Z,{min:1,max:z.wlValue||100,defaultValue:37})})]})]})},on=en,an=function(){var z=(0,h.useState)(void 0),Y=(0,A.Z)(z,2),b=Y[0],N=Y[1],sn=(0,h.useState)({color:"",name:""}),H=(0,A.Z)(sn,2),X=H[0],J=H[1],un=(0,h.useState)(),G=(0,A.Z)(un,2),I=G[0],dn=G[1],cn=(0,h.useState)([]),Q=(0,A.Z)(cn,2),B=Q[0],K=Q[1],_n=(0,h.useState)(10),k=(0,A.Z)(_n,2),p=k[0],w=k[1],vn=(0,h.useState)(1),q=(0,A.Z)(vn,2),V=q[0],nn=q[1],D=function(i){dn(i),i!=null&&i.label&&J(i.label)},tn=function(i){for(var W=[],F=0;F<B.length;F++)B[F].annotationId==i.annotationId?W.push(i):W.push(B[F]);D(i),K(W)},mn=(0,f.Z)({currentLabel:X,brushSize:p,currentTool:b,annotations:B,currentAnnotation:I,onAnnotationAdd:function(i){K(B.concat([i])),I||D(i)},onAnnotationModify:tn}),fn=(0,l.Z)({currentLabel:X,brushSize:p,currentTool:b,annotations:B,currentAnnotation:I,onAnnotationAdd:function(i){K(B.concat([i])),I||D(i)},onAnnotationModify:tn}),$=b=="polygon"?fn:mn;return(0,t.jsxs)(T.Z,{className:C().segment,children:[(0,t.jsxs)(e.Z,{children:[(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,t.jsx)(y.Z,{active:b=="polygon",onClick:function(){N("polygon"),D(void 0)},children:"Polygon"}),(0,t.jsx)(r.Z,{size:p,active:b=="brush",onClick:function(){b!="rubber"&&b!="brush"&&D(void 0),N("brush")},onChange:function(i){w(i)},children:"Brush"}),(0,t.jsx)(r.Z,{size:p,active:b=="rubber",onClick:function(){b!="rubber"&&b!="brush"&&D(void 0),N("rubber")},onChange:function(i){w(i)},imgSrc:"./pics/buttons/rubber.png",children:"Rubber"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){nn(V+.1)},children:"Zoom in"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){nn(V-.1)},children:"Zoom out"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,t.jsx)("div",{className:C().mainStage,children:(0,t.jsx)(M.Z,{scale:V,annotations:B,onMouseDown:$.onMouseDown,onMouseMove:$.onMouseMove,onMouseUp:$.onMouseUp})}),(0,t.jsxs)(e.Z,{disLoc:"right",children:[(0,t.jsx)(s.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:"Segment Threshold"}),(0,t.jsx)(s.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:"Diaphaneity"}),(0,t.jsx)(s.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:"Visual Radius"}),(0,t.jsxs)(j.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of medical",content:(0,t.jsx)(on,{}),trigger:"hover",children:[" ",(0,t.jsx)(_.Z,{imgSrc:"./pics/buttons/medical_setting.png",children:"Medical Setting"})]})]}),(0,t.jsxs)("div",{className:C().rightSideBar,children:[(0,t.jsx)("div",{className:C().determinOutline,children:(0,t.jsx)(Z.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){D(void 0)},children:"Determine Outline"})}),(0,t.jsx)(d.Z,{selectedLabel:X,onLabelSelect:function(i){J(i),D(void 0)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,t.jsx)(m.Z,{selectedAnnotation:I,annotations:B,onAnnotationSelect:function(i){i!=null&&i.delete||D(i)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(i){K(B.filter(function(W){return W.annotationId!=i.annotationId})),D(void 0)}})]})]})},rn=an}}]);