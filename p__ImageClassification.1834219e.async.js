(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[845],{52822:function(o){o.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(o){o.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(o){o.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(o){o.exports={container:"container___G0FNe"}},83930:function(o){o.exports={stage:"stage___3H5QL"}},80961:function(o){o.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(o){o.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},8881:function(o){o.exports={classes:"classes___GWIJ0",mainStage:"mainStage___3H7Up",draw:"draw___1WrWh",pblock:"pblock___sCh1w",progress:"progress___3lUqQ",rightSideBar:"rightSideBar___2sEdt"}},63097:function(o,E,e){"use strict";var F=e(20136),c=e(55241),L=e(2824),l=e(67294),s=e(52822),a=e.n(s),u=e(63144),i=e(85893),m=function(f){var _=(0,l.useState)(f.color||"#FFF"),n=(0,L.Z)(_,2),b=n[0],t=n[1];return(0,l.useEffect)(function(){t(f.color||"#FFF")},[f]),f.changeable?(0,i.jsx)(c.Z,{getPopupContainer:function(B){return B.parentElement||document.body},overlayClassName:a().popover,openClassName:a().popoverOpenClassName,placement:"bottom",content:(0,i.jsx)(u.xS,{disableAlpha:!0,color:b,onChange:function(B){t(B.hex)},onChangeComplete:f.onChange}),trigger:"click",children:(0,i.jsx)("div",{className:a().roundBall,style:{backgroundColor:b}})}):(0,i.jsx)("div",{className:a().roundBall,style:{backgroundColor:b}})};E.Z=m},5041:function(o,E,e){"use strict";e.d(E,{Z:function(){return J}});var F=e(54421),c=e(38272),L=e(57663),l=e(71577),s=e(2824),a=e(67294),u=e(56131),i=e.n(u),m=e(49111),I=e(19650),f=e(11849),_=e(5882),n=e.n(_),b=e(63097),t=e(85893),v=function(r){var C=(0,f.Z)({},r.label),j=(0,a.useState)(C.invisible),g=(0,s.Z)(j,2),T=g[0],R=g[1],W=(0,t.jsx)(c.ZP.Item,{className:"".concat(n().listItem," ").concat(r.active?n().listItemActive:""),unselectable:"on",onClick:function(){r.onClick(C)},children:(0,t.jsxs)(I.Z,{align:"center",size:5,children:[(0,t.jsx)("a",{className:n().eye,style:{backgroundImage:T?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){R(!T),r.onLabelModify(C)}})," ",C.name,(0,t.jsx)(b.Z,{color:C.color,changeable:!0,onChange:function(U){C.color=U.hex,r.onLabelModify(C)}})]})});return W},B=v,y=e(71194),Z=e(50146),x=e(47673),O=e(24044),A=e(9715),M=e(93766),P=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],d=function(r){var C,j,g=(0,a.useState)(((C=r.defaultLabel)===null||C===void 0?void 0:C.color)||P[r.order||0]),T=(0,s.Z)(g,2),R=T[0],W=T[1];(0,a.useEffect)(function(){var D;W(((D=r.defaultLabel)===null||D===void 0?void 0:D.color)||P[r.order||0])},[r]);var K=M.Z.useForm(),U=(0,s.Z)(K,1),S=U[0];return(0,t.jsx)(Z.Z,{title:"Add Label",visible:r.visible,onCancel:r.onCancel,footer:null,children:(0,t.jsxs)(M.Z,{form:S,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(j=r.defaultLabel)===null||j===void 0?void 0:j.name},onFinish:function(h){var V={name:h.labelname,color:R};r.onLabelAdd(V),S.resetFields()},autoComplete:"off",children:[(0,t.jsx)(M.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)(O.Z,{})}),(0,t.jsx)(M.Z.Item,{label:"Select Color",name:"color",children:(0,t.jsx)(b.Z,{color:R,onChange:function(h){W(h.hex)}})}),(0,t.jsx)(M.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)(I.Z,{children:[(0,t.jsx)(l.Z,{onClick:function(){var h;(h=r.onCancel)===null||h===void 0||h.call(0),S.resetFields()},children:"\u53D6\u6D88"}),(0,t.jsx)(l.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},H=d,$=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],z=function(r){var C=(0,a.useState)($),j=(0,s.Z)(C,2),g=j[0],T=j[1],R=(0,a.useState)(!1),W=(0,s.Z)(R,2),K=W[0],U=W[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.ZP,{className:i().labelList,size:"large",header:(0,t.jsx)("div",{className:i().listHeader,children:"Label List"}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(l.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){U(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:g,renderItem:function(D){var h;return(0,t.jsx)(B,{onClick:r.onLabelSelect,label:D,active:D.name==((h=r.selectedLabel)===null||h===void 0?void 0:h.name),onLabelDelete:r.onLabelDelete,onLabelModify:r.onLabelModify})}}),(0,t.jsx)(H,{order:g.length,visible:K,onLabelAdd:function(D){g.push(D),T(g),U(!1)},onCancel:function(){U(!1)}})]})},J=z},8088:function(o,E,e){"use strict";var F=e(67294),c=e(78677),L=e.n(c),l=e(85893),s=function(u){return(0,l.jsx)("div",{className:"".concat(L().container," ").concat(u.className),children:u.children})};E.Z=s},57436:function(o,E,e){"use strict";var F=e(91220),c=e(2824),L=e(67294),l=e(65031),s=e(84420),a=e.n(s),u=e(83930),i=e.n(u),m=e(85893),I="./pics/basketball.jpg",f=function(n){var b=a()(I),t=(0,c.Z)(b,1),v=t[0],B=(v==null?void 0:v.width)||0,y=(v==null?void 0:v.height)||0,Z=[];if(n.annotations){var x=(0,F.Z)(n.annotations),O;try{for(x.s();!(O=x.n()).done;){var A=O.value;if(!!A){var M=A.tool=="polygon"?n.createPolygonFunc:n.createBrushFunc;M&&Z.push(M(A,n.onAnnotationModify,n.onAnnotationModifyComplete,n.scale,n.currentTool,n.setCurrentAnnotation,n.currentAnnotation))}}}catch(P){x.e(P)}finally{x.f()}}return(0,m.jsxs)(l.Hf,{width:B*n.scale,height:y*n.scale,className:i().stage,children:[(0,m.jsx)(l.mh,{scaleX:n.scale,scaleY:n.scale,draggable:!1,children:(0,m.jsx)(l.Ee,{image:v,draggable:!1})}),(0,m.jsxs)(l.mh,{scaleX:n.scale,scaleY:n.scale,onMouseDown:function(d){n.onMouseDown&&n.onMouseDown(d,n.scale)},onMouseMove:function(d){n.onMouseMove&&n.onMouseMove(d,n.scale)},onMouseUp:function(d){n.onMouseUp&&n.onMouseUp(d,n.scale)},onContextMenu:function(d){d.evt.preventDefault()},draggable:!1,children:[(0,m.jsx)(l.Ee,{draggable:!1,image:v}),Z]})]})};E.Z=f},44434:function(o,E,e){"use strict";var F=e(67294),c=e(80961),L=e.n(c),l=e(85893),s=function(u){var i=L().leftToolbar;return u.disLoc=="right"&&(i=L().rightToolbar),(0,l.jsx)("div",{className:i,children:u.children})};E.Z=s},61541:function(o,E,e){"use strict";var F=e(49111),c=e(19650),L=e(67294),l=e(82499),s=e.n(l),a=e(85893),u=function(m){return(0,a.jsx)("div",{unselectable:"on",className:"".concat(s().toolBarButtonContainerWrapper," ").concat(m.active&&s().toolBarButtonContainerWrapperActive),onClick:m.onClick,children:(0,a.jsx)(c.Z,{align:"center",className:s().toolBarButtonContainer,size:0,children:(0,a.jsxs)(c.Z,{align:"center",direction:"vertical",className:s().toolBarButton,size:0,children:[(0,a.jsx)("img",{src:m.imgSrc}),(0,a.jsx)("div",{className:s().buttonText,children:m.children})]})})})};E.Z=u},27682:function(o,E,e){"use strict";e.r(E);var F=e(34669),c=e(54458),L=e(2824),l=e(67294),s=e(8881),a=e.n(s),u=e(8088),i=e(61541),m=e(44434),I=e(5041),f=e(57436),_=e(85893),n=function(){var t=(0,l.useState)({color:"",name:""}),v=(0,L.Z)(t,2),B=v[0],y=v[1],Z=(0,l.useState)(1),x=(0,L.Z)(Z,2),O=x[0],A=x[1],M=function(d){d||A(1),d<.1||d>3?A(1):A(d)};return(0,_.jsxs)(u.Z,{className:a().classes,children:[(0,_.jsxs)(m.Z,{children:[(0,_.jsx)(i.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){M(O+.1)},children:"Zoom in"}),(0,_.jsx)(i.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){M(O-.1)},children:"Zoom out"}),(0,_.jsx)(i.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,_.jsx)(i.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,_.jsx)(i.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,_.jsx)(i.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"})]}),(0,_.jsxs)("div",{className:a().mainStage,children:[(0,_.jsx)("div",{className:a().draw,children:(0,_.jsx)(f.Z,{scale:O,currentTool:void 0})}),(0,_.jsx)("div",{className:a().pblock,children:(0,_.jsx)("div",{className:a().progress,children:(0,_.jsx)(c.Z,{percent:50,status:"active"})})})]}),(0,_.jsx)("div",{className:a().rightSideBar,children:(0,_.jsx)(I.Z,{selectedLabel:B,onLabelSelect:function(d){y(d)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}})})]})};E.default=n}}]);