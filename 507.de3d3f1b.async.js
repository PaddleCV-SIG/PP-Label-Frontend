(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[507],{52822:function(u){u.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(u){u.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(u){u.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(u){u.exports={container:"container___G0FNe"}},80961:function(u){u.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(u){u.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},63097:function(u,b,e){"use strict";var H=e(20136),_=e(55241),v=e(2824),d=e(67294),s=e(52822),r=e.n(s),f=e(63144),l=e(85893),j=function(A){var z=(0,d.useState)(A.color||"#FFF"),n=(0,v.Z)(z,2),B=n[0],a=n[1];return(0,d.useEffect)(function(){a(A.color||"#FFF")},[A]),A.changeable?(0,l.jsx)(_.Z,{getPopupContainer:function(U){return U.parentElement||document.body},overlayClassName:r().popover,openClassName:r().popoverOpenClassName,placement:"bottom",content:(0,l.jsx)(f.xS,{disableAlpha:!0,color:B,onChange:function(U){a(U.hex)},onChangeComplete:A.onChange}),trigger:"click",children:(0,l.jsx)("div",{className:r().roundBall,style:{backgroundColor:B}})}):(0,l.jsx)("div",{className:r().roundBall,style:{backgroundColor:B}})};b.Z=j},5041:function(u,b,e){"use strict";e.d(b,{Z:function(){return Q}});var H=e(54421),_=e(38272),v=e(57663),d=e(71577),s=e(2824),r=e(67294),f=e(56131),l=e.n(f),j=e(49111),$=e(19650),A=e(11849),z=e(5882),n=e.n(z),B=e(63097),a=e(85893),S=function(o){var i=(0,A.Z)({},o.label),L=(0,r.useState)(i.invisible),C=(0,s.Z)(L,2),F=C[0],I=C[1],R=(0,r.useState)(0),g=(0,s.Z)(R,2),y=g[0],h=g[1],E=o.hideEye?" ":(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("a",{className:n().eye,style:{backgroundImage:F?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(T){T.stopPropagation(),I(!F),o.onLabelModify(i)}})," "]}),M=o.hideColorPicker?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(B.Z,{color:i.color,changeable:!0,onChange:function(T){i.color=T.hex,o.onLabelModify(i)}}),K=(0,a.jsxs)(_.ZP.Item,{className:"".concat(n().listItem," ").concat(o.active?n().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(i)},children:[(0,a.jsxs)($.Z,{align:"center",size:5,children:[E,i.name,M]}),(0,a.jsx)("a",{className:n().delete,onClick:function(T){T.stopPropagation();var N=new Date().getTime();N-y<300||(h(N),o.onLabelDelete(i))}})]});return K},U=S,oe=e(71194),t=e(50146),q=e(47673),J=e(24044),ee=e(9715),O=e(93766),Z=e(48971),P=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],ne=function(o){var i,L,C=(0,Z.YB)(),F=C.formatMessage({id:"component.PPAddLabelModal.selectColor"}),I=C.formatMessage({id:"component.PPAddLabelModal.addLabel"}),R=C.formatMessage({id:"component.PPAddLabelModal.labelName"}),g=C.formatMessage({id:"component.PPCreater.cancel"}),y=C.formatMessage({id:"component.PPSegMode.ok"}),h=(0,r.useState)(((i=o.defaultLabel)===null||i===void 0?void 0:i.color)||P[o.order||0]),E=(0,s.Z)(h,2),M=E[0],K=E[1];(0,r.useEffect)(function(){var x;K(((x=o.defaultLabel)===null||x===void 0?void 0:x.color)||P[o.order||0])},[o]);var W=o.hideColorPicker?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(O.Z.Item,{label:F,name:"color",children:(0,a.jsx)(B.Z,{color:M,changeable:!0,onChange:function(D){K(D.hex)}})}),T=O.Z.useForm(),N=(0,s.Z)(T,1),w=N[0];return(0,a.jsx)(t.Z,{title:I,visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,a.jsxs)(O.Z,{form:w,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(L=o.defaultLabel)===null||L===void 0?void 0:L.name},onFinish:function(D){var Y={name:D.labelname,color:M};o.onLabelAdd(Y),w.resetFields()},autoComplete:"off",children:[(0,a.jsx)(O.Z.Item,{label:R,name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,a.jsx)(J.Z,{})}),W,(0,a.jsx)(O.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,a.jsxs)($.Z,{children:[(0,a.jsx)(d.Z,{onClick:function(){var D;(D=o.onCancel)===null||D===void 0||D.call(0),w.resetFields()},children:g}),(0,a.jsx)(d.Z,{type:"primary",htmlType:"submit",children:y})]})})]})})},G=ne,V=function(o){var i,L=(0,Z.YB)(),C=L.formatMessage({id:"component.PPLabelList.addLabel"}),F=L.formatMessage({id:"component.PPLabelList.labelList"}),I=(0,r.useState)(!1),R=(0,s.Z)(I,2),g=R[0],y=R[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(_.ZP,{className:l().labelList,size:"large",header:(0,a.jsx)("div",{className:l().listHeader,children:F}),footer:(0,a.jsx)("div",{children:(0,a.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){y(!0)},block:!0,children:C})}),bordered:!0,dataSource:o.labels,renderItem:function(E){var M;return(0,a.jsx)(U,{hideColorPicker:o.hideColorPicker,hideEye:o.hideEye,onClick:o.onLabelSelect,label:E,active:(M=o.activeIds)===null||M===void 0?void 0:M.has(E.labelId),onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,a.jsx)(G,{hideColorPicker:o.hideColorPicker,order:(i=o.labels)===null||i===void 0?void 0:i.length,visible:g,onLabelAdd:function(E){o.onLabelAdd(E),y(!1)},onCancel:function(){y(!1)}})]})},Q=V},8088:function(u,b,e){"use strict";var H=e(67294),_=e(78677),v=e.n(_),d=e(85893),s=function(f){return(0,d.jsx)("div",{className:"".concat(v().container," ").concat(f.className),children:f.children})};b.Z=s},57436:function(u,b,e){"use strict";var H=e(91220),_=e(2824),v=e(67294),d=e(65031),s=e(84420),r=e.n(s),f=e(48971),l=e(85893),j="./pics/basketball.jpg";function $(z){switch(z){case"mover":return"move";case"rectangle":case"polygon":return"crosshair";default:return"default"}}var A=function(n){var B,a,S;console.log("stage redraw");var U=r()(n.imgSrc||"","anonymous"),oe=(0,_.Z)(U,1),t=oe[0],q=(t==null?void 0:t.width)||0,J=(t==null?void 0:t.height)||0,ee=n.transparency==null?0:n.transparency*.01,O=(0,f.tT)("InteractorData",function(c){return c.interactorData});console.log("interactorData",O);var Z=void 0;n.currentTool=="polygon"||n.currentTool=="rectangle"||n.currentTool=="editor"?Z=n.drawTool.polygon:n.currentTool=="brush"||n.currentTool=="rubber"?Z=n.drawTool.brush:n.currentTool=="interactor"&&(Z=n.drawTool.interactor);var P=Z,ne=(0,v.useState)(0),G=(0,_.Z)(ne,2),V=G[0],Q=G[1],k=(0,v.useState)(0),o=(0,_.Z)(k,2),i=o[0],L=o[1],C=(0,v.useState)({x:0,y:0}),F=(0,_.Z)(C,2),I=F[0],R=F[1],g=(0,v.useRef)(null),y=(0,v.useRef)(null),h=(0,v.useRef)(null);function E(){var c=document.getElementById("dr");c&&(Q(c.clientWidth),L(c.clientHeight))}(0,v.useEffect)(function(){window.removeEventListener("resize",E),window.addEventListener("resize",E);var c=document.getElementById("dr");c&&(Q(c.clientWidth),L(c.clientHeight))},[]),(0,v.useEffect)(function(){!g.current||(g.current.container().style.cursor=$(n.currentTool))},[n.currentTool]);var M=function(m){return{e:m,mouseX:(m.evt.offsetX-I.x-V/2)/n.scale+q/2,mouseY:(m.evt.offsetY-I.y-i/2)/n.scale+J/2,offsetX:-q/2,offsetY:-J/2,canvasRef:h,stageRef:g}},K=function(m){P==null||P.onMouseDown(M(m))},W=function(m){P==null||P.onMouseMove(M(m))},T=function(m){P==null||P.onMouseUp(M(m))},N=function(m){m.cancelBubble=!0,m.evt.preventDefault()},w=[],x={onDrag:n.onAnnotationModify,scale:n.scale,currentTool:n.currentTool,onSelect:n.setCurrentAnnotation,stageRef:g,currentAnnotation:n.currentAnnotation,transparency:ee,threshold:n.threshold,canvasRef:h,interactorData:O,label:n.currentLabel};if(n.annotations){var D;console.log("PPStage rendering annotations:",n.annotations);var Y=(D=h.current)===null||D===void 0?void 0:D.getContext("2d");Y&&Y.clearRect(0,0,Y.canvas.width,Y.canvas.height);var p=(0,H.Z)(n.annotations),le;try{for(p.s();!(le=p.n()).done;){var X=le.value;if(!!X){x.annotation=X;var te=void 0;if(X.type=="polygon"||X.type=="rectangle")te=n.drawTool.polygon.drawAnnotation(x);else if(X.type=="brush"||X.type=="rubber"){var ae;te=(ae=n.drawTool.brush)===null||ae===void 0?void 0:ae.drawAnnotation(x)}else continue;w.push(te)}}}catch(c){p.e(c)}finally{p.f()}}(B=n.drawTool)===null||B===void 0||(a=B.interactor)===null||a===void 0||a.drawAnnotation(x),(S=y.current)===null||S===void 0||S.batchDraw();var re=n.currentTool=="mover";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("canvas",{style:{display:"none"},id:"virtualCanvas",width:t==null?void 0:t.width,height:t==null?void 0:t.height}),(0,l.jsx)("canvas",{style:{display:"none"},id:"singleLineCanvas",width:t==null?void 0:t.width,height:t==null?void 0:t.height}),(0,l.jsx)("canvas",{style:{display:"none"},id:"canvasId",ref:h,width:t==null?void 0:t.width,height:t==null?void 0:t.height}),(0,l.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",zIndex:"-1"},children:(0,l.jsx)("defs",{children:(0,l.jsx)("filter",{id:"remove-alpha",x:"0",y:"0",width:"100%",height:"100%",children:(0,l.jsx)("feComponentTransfer",{children:(0,l.jsx)("feFuncA",{type:"discrete",tableValues:"0 1"})})})})}),(0,l.jsxs)(d.Hf,{width:V,height:i,offsetX:-V/2,offsetY:-i/2,className:"stage",ref:g,draggable:re,onDragMove:function(m){n.currentTool=="mover"},onDragEnd:function(m){n.currentTool=="mover"&&R({x:m.target.x(),y:m.target.y()})},children:[(0,l.jsx)(d.mh,{onMouseDown:K,onMouseMove:W,onMouseUp:T,onContextMenu:N,scaleX:n.scale,scaleY:n.scale,draggable:!1,children:(0,l.jsx)(d.Ee,{name:"baseImage",draggable:!1,image:t,x:-((t==null?void 0:t.width)||0)/2,y:-((t==null?void 0:t.height)||0)/2})}),(0,l.jsxs)(d.mh,{ref:y,name:"annotation",scaleX:n.scale,scaleY:n.scale,onMouseDown:K,onMouseMove:W,onMouseUp:T,onContextMenu:N,opacity:ee,children:[(0,l.jsx)(d.Ee,{x:-((t==null?void 0:t.width)||0)/2,y:-((t==null?void 0:t.height)||0)/2,image:h.current||void 0}),w]})]})]})};b.Z=A},44434:function(u,b,e){"use strict";var H=e(67294),_=e(80961),v=e.n(_),d=e(85893),s=function(f){var l=v().leftToolbar;return f.disLoc=="right"&&(l=v().rightToolbar),(0,d.jsx)("div",{className:l,children:f.children})};b.Z=s},61541:function(u,b,e){"use strict";var H=e(49111),_=e(19650),v=e(67294),d=e(82499),s=e.n(d),r=e(85893),f=function(j){return(0,r.jsx)("div",{unselectable:"on",className:"".concat(s().toolBarButtonContainerWrapper," ").concat(j.active&&s().toolBarButtonContainerWrapperActive),onClick:j.onClick,children:(0,r.jsx)(_.Z,{align:"center",className:s().toolBarButtonContainer,size:0,children:(0,r.jsxs)(_.Z,{align:"center",direction:"vertical",className:s().toolBarButton,size:0,children:[(0,r.jsx)("img",{src:j.imgSrc}),(0,r.jsx)("div",{className:s().buttonText,children:j.children})]})})})};b.Z=f}}]);