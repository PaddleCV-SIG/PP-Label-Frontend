(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[507],{52822:function(c){c.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(c){c.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(c){c.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(c){c.exports={container:"container___G0FNe"}},80961:function(c){c.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(c){c.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28",toolBarButtonContainerWrapperDisabled:"toolBarButtonContainerWrapperDisabled___39n5R",toolBarButtonImgDisabled:"toolBarButtonImgDisabled___rRnhA"}},63097:function(c,M,e){"use strict";var H=e(20136),_=e(55241),v=e(2824),d=e(67294),r=e(52822),i=e.n(r),f=e(63144),l=e(85893),L=function(F){var z=(0,d.useState)(F.color||"#FFF"),n=(0,v.Z)(z,2),y=n[0],a=n[1];return(0,d.useEffect)(function(){a(F.color||"#FFF")},[F]),F.changeable?(0,l.jsx)(_.Z,{getPopupContainer:function(S){return S.parentElement||document.body},overlayClassName:i().popover,openClassName:i().popoverOpenClassName,placement:"bottom",content:(0,l.jsx)(f.xS,{disableAlpha:!0,color:y,onChange:function(S){a(S.hex)},onChangeComplete:F.onChange}),trigger:"click",children:(0,l.jsx)("div",{className:i().roundBall,style:{backgroundColor:y}})}):(0,l.jsx)("div",{className:i().roundBall,style:{backgroundColor:y}})};M.Z=L},5041:function(c,M,e){"use strict";e.d(M,{Z:function(){return Q}});var H=e(54421),_=e(38272),v=e(57663),d=e(71577),r=e(2824),i=e(67294),f=e(56131),l=e.n(f),L=e(49111),$=e(19650),F=e(11849),z=e(5882),n=e.n(z),y=e(63097),a=e(85893),W=function(o){var s=(0,F.Z)({},o.label),D=(0,i.useState)(s.invisible),P=(0,r.Z)(D,2),j=P[0],I=P[1],O=(0,i.useState)(0),g=(0,r.Z)(O,2),T=g[0],h=g[1],E=o.hideEye?" ":(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:n().eye,style:{backgroundImage:j?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(A){A.stopPropagation(),I(!j),o.onLabelModify(s)}})," "]}),b=o.hideColorPicker?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(y.Z,{color:s.color,changeable:!0,onChange:function(A){s.color=A.hex,o.onLabelModify(s)}}),K=(0,a.jsxs)(_.ZP.Item,{className:"".concat(n().listItem," ").concat(o.active?n().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(s)},children:[(0,a.jsxs)($.Z,{align:"center",size:5,children:[E,s.name,b]}),(0,a.jsx)("a",{className:n().delete,onClick:function(A){A.stopPropagation();var N=new Date().getTime();N-T<300||(h(N),o.onLabelDelete(s))}})]});return K},S=W,oe=e(71194),t=e(50146),q=e(47673),J=e(24044),ee=e(9715),U=e(93766),Z=e(48971),C=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],ne=function(o){var s,D,P=(0,Z.YB)(),j=P.formatMessage({id:"component.PPAddLabelModal.selectColor"}),I=P.formatMessage({id:"component.PPAddLabelModal.addLabel"}),O=P.formatMessage({id:"component.PPAddLabelModal.labelName"}),g=P.formatMessage({id:"component.PPCreater.cancel"}),T=P.formatMessage({id:"component.PPSegMode.ok"}),h=(0,i.useState)(((s=o.defaultLabel)===null||s===void 0?void 0:s.color)||C[o.order||0]),E=(0,r.Z)(h,2),b=E[0],K=E[1];(0,i.useEffect)(function(){var B;K(((B=o.defaultLabel)===null||B===void 0?void 0:B.color)||C[o.order||0])},[o]);var R=o.hideColorPicker?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(U.Z.Item,{label:j,name:"color",children:(0,a.jsx)(y.Z,{color:b,changeable:!0,onChange:function(x){K(x.hex)}})}),A=U.Z.useForm(),N=(0,r.Z)(A,1),w=N[0];return(0,a.jsx)(t.Z,{title:I,visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,a.jsxs)(U.Z,{form:w,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(D=o.defaultLabel)===null||D===void 0?void 0:D.name},onFinish:function(x){var Y={name:x.labelname,color:b};o.onLabelAdd(Y),w.resetFields()},autoComplete:"off",children:[(0,a.jsx)(U.Z.Item,{label:O,name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,a.jsx)(J.Z,{})}),R,(0,a.jsx)(U.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,a.jsxs)($.Z,{children:[(0,a.jsx)(d.Z,{onClick:function(){var x;(x=o.onCancel)===null||x===void 0||x.call(0),w.resetFields()},children:g}),(0,a.jsx)(d.Z,{type:"primary",htmlType:"submit",children:T})]})})]})})},G=ne,V=function(o){var s,D=(0,Z.YB)(),P=D.formatMessage({id:"component.PPLabelList.addLabel"}),j=D.formatMessage({id:"component.PPLabelList.labelList"}),I=(0,i.useState)(!1),O=(0,r.Z)(I,2),g=O[0],T=O[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_.ZP,{className:l().labelList,size:"large",header:(0,a.jsx)("div",{className:l().listHeader,children:j}),footer:(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){T(!0)},block:!0,children:P})}),bordered:!0,dataSource:o.labels,renderItem:function(E){var b;return(0,a.jsx)(S,{hideColorPicker:o.hideColorPicker,hideEye:o.hideEye,onClick:o.onLabelSelect,label:E,active:(b=o.activeIds)===null||b===void 0?void 0:b.has(E.labelId),onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,a.jsx)(G,{hideColorPicker:o.hideColorPicker,order:(s=o.labels)===null||s===void 0?void 0:s.length,visible:g,onLabelAdd:function(E){o.onLabelAdd(E),T(!1)},onCancel:function(){T(!1)}})]})},Q=V},8088:function(c,M,e){"use strict";var H=e(67294),_=e(78677),v=e.n(_),d=e(85893),r=function(f){return(0,d.jsx)("div",{className:"".concat(v().container," ").concat(f.className),children:f.children})};M.Z=r},57436:function(c,M,e){"use strict";var H=e(91220),_=e(2824),v=e(67294),d=e(65031),r=e(84420),i=e.n(r),f=e(48971),l=e(85893),L="./pics/basketball.jpg";function $(z){switch(z){case"mover":return"move";case"rectangle":case"polygon":return"crosshair";default:return"default"}}var F=function(n){var y,a,W;console.log("stage redraw");var S=i()(n.imgSrc||"","anonymous"),oe=(0,_.Z)(S,1),t=oe[0],q=(t==null?void 0:t.width)||0,J=(t==null?void 0:t.height)||0,ee=n.transparency==null?0:n.transparency*.01,U=(0,f.tT)("InteractorData",function(u){return u.interactorData}),Z=void 0;n.currentTool=="polygon"||n.currentTool=="rectangle"||n.currentTool=="editor"?Z=n.drawTool.polygon:n.currentTool=="brush"||n.currentTool=="rubber"?Z=n.drawTool.brush:n.currentTool=="interactor"&&(Z=n.drawTool.interactor);var C=Z,ne=(0,v.useState)(0),G=(0,_.Z)(ne,2),V=G[0],Q=G[1],k=(0,v.useState)(0),o=(0,_.Z)(k,2),s=o[0],D=o[1],P=(0,v.useState)({x:0,y:0}),j=(0,_.Z)(P,2),I=j[0],O=j[1],g=(0,v.useRef)(null),T=(0,v.useRef)(null),h=(0,v.useRef)(null);function E(){var u=document.getElementById("dr");u&&(Q(u.clientWidth),D(u.clientHeight))}(0,v.useEffect)(function(){window.removeEventListener("resize",E),window.addEventListener("resize",E);var u=document.getElementById("dr");u&&(Q(u.clientWidth),D(u.clientHeight))},[]),(0,v.useEffect)(function(){!g.current||(g.current.container().style.cursor=$(n.currentTool))},[n.currentTool]);var b=function(m){return{e:m,mouseX:(m.evt.offsetX-I.x-V/2)/n.scale+q/2,mouseY:(m.evt.offsetY-I.y-s/2)/n.scale+J/2,offsetX:-q/2,offsetY:-J/2,canvasRef:h,stageRef:g}},K=function(m){C==null||C.onMouseDown(b(m))},R=function(m){C==null||C.onMouseMove(b(m))},A=function(m){C==null||C.onMouseUp(b(m))},N=function(m){m.cancelBubble=!0,m.evt.preventDefault()},w=[],B={onDrag:n.onAnnotationModify,scale:n.scale,currentTool:n.currentTool,onSelect:n.setCurrentAnnotation,stageRef:g,currentAnnotation:n.currentAnnotation,transparency:ee,threshold:n.threshold,canvasRef:h,interactorData:U,label:n.currentLabel};if(n.annotations){var x;console.log("PPStage rendering annotations:",n.annotations);var Y=(x=h.current)===null||x===void 0?void 0:x.getContext("2d");Y&&Y.clearRect(0,0,Y.canvas.width,Y.canvas.height);var p=(0,H.Z)(n.annotations),le;try{for(p.s();!(le=p.n()).done;){var X=le.value;if(!!X){B.annotation=X;var te=void 0;if(X.type=="polygon"||X.type=="rectangle")te=n.drawTool.polygon.drawAnnotation(B);else if(X.type=="brush"||X.type=="rubber"){var ae;te=(ae=n.drawTool.brush)===null||ae===void 0?void 0:ae.drawAnnotation(B)}else continue;w.push(te)}}}catch(u){p.e(u)}finally{p.f()}}(y=n.drawTool)===null||y===void 0||(a=y.interactor)===null||a===void 0||a.drawAnnotation(B),(W=T.current)===null||W===void 0||W.batchDraw();var re=n.currentTool=="mover";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("canvas",{style:{display:"none"},id:"virtualCanvas",width:t==null?void 0:t.width,height:t==null?void 0:t.height}),(0,l.jsx)("canvas",{style:{display:"none"},id:"singleLineCanvas",width:t==null?void 0:t.width,height:t==null?void 0:t.height}),(0,l.jsx)("canvas",{style:{display:"none"},id:"canvasId",ref:h,width:t==null?void 0:t.width,height:t==null?void 0:t.height}),(0,l.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",zIndex:"-1"},children:(0,l.jsx)("defs",{children:(0,l.jsx)("filter",{id:"remove-alpha",x:"0",y:"0",width:"100%",height:"100%",children:(0,l.jsx)("feComponentTransfer",{children:(0,l.jsx)("feFuncA",{type:"discrete",tableValues:"0 1"})})})})}),(0,l.jsxs)(d.Hf,{width:V,height:s,offsetX:-V/2,offsetY:-s/2,className:"stage",ref:g,draggable:re,onDragMove:function(m){n.currentTool=="mover"},onDragEnd:function(m){n.currentTool=="mover"&&O({x:m.target.x(),y:m.target.y()})},children:[(0,l.jsx)(d.mh,{onMouseDown:K,onMouseMove:R,onMouseUp:A,onContextMenu:N,scaleX:n.scale,scaleY:n.scale,draggable:!1,children:(0,l.jsx)(d.Ee,{name:"baseImage",draggable:!1,image:t,x:-((t==null?void 0:t.width)||0)/2,y:-((t==null?void 0:t.height)||0)/2})}),(0,l.jsxs)(d.mh,{ref:T,name:"annotation",scaleX:n.scale,scaleY:n.scale,onMouseDown:K,onMouseMove:R,onMouseUp:A,onContextMenu:N,opacity:ee,children:[(0,l.jsx)(d.Ee,{x:-((t==null?void 0:t.width)||0)/2,y:-((t==null?void 0:t.height)||0)/2,image:h.current||void 0}),w]})]})]})};M.Z=F},44434:function(c,M,e){"use strict";var H=e(67294),_=e(80961),v=e.n(_),d=e(85893),r=function(f){var l=v().leftToolbar;return f.disLoc=="right"&&(l=v().rightToolbar),(0,d.jsx)("div",{className:l,children:f.children})};M.Z=r},61541:function(c,M,e){"use strict";var H=e(49111),_=e(19650),v=e(67294),d=e(82499),r=e.n(d),i=e(85893),f=function(L){return(0,i.jsx)("div",{unselectable:"on",className:"".concat(r().toolBarButtonContainerWrapper," ").concat(L.active&&r().toolBarButtonContainerWrapperActive," ").concat(L.disabled&&r().toolBarButtonContainerWrapperDisabled),onClick:!L.disabled&&L.onClick||void 0,children:(0,i.jsx)(_.Z,{align:"center",className:r().toolBarButtonContainer,size:0,children:(0,i.jsxs)(_.Z,{align:"center",direction:"vertical",className:r().toolBarButton,size:0,children:[(0,i.jsx)("img",{className:L.disabled?r().toolBarButtonImgDisabled:void 0,src:L.imgSrc}),(0,i.jsx)("div",{className:r().buttonText,children:L.children})]})})})};M.Z=f}}]);
