(self.webpackChunkPaddleLabel_Frontend=self.webpackChunkPaddleLabel_Frontend||[]).push([[507],{52822:function(c){c.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(c){c.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(c){c.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(c){c.exports={container:"container___G0FNe"}},80961:function(c){c.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(c){c.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28",toolBarButtonContainerWrapperDisabled:"toolBarButtonContainerWrapperDisabled___39n5R",toolBarButtonImgDisabled:"toolBarButtonImgDisabled___rRnhA"}},63097:function(c,b,e){"use strict";var H=e(20136),_=e(55241),v=e(2824),u=e(67294),r=e(52822),i=e.n(r),h=e(63144),l=e(85893),M=function(y){var z=(0,u.useState)(y.color||"#FFF"),n=(0,v.Z)(z,2),B=n[0],t=n[1];return(0,u.useEffect)(function(){t(y.color||"#FFF")},[y]),y.changeable?(0,l.jsx)(_.Z,{getPopupContainer:function(U){return U.parentElement||document.body},overlayClassName:i().popover,openClassName:i().popoverOpenClassName,placement:"bottom",content:(0,l.jsx)(h.xS,{disableAlpha:!0,color:B,onChange:function(U){t(U.hex)},onChangeComplete:y.onChange}),trigger:"click",children:(0,l.jsx)("div",{className:i().roundBall,style:{backgroundColor:B}})}):(0,l.jsx)("div",{className:i().roundBall,style:{backgroundColor:B}})};b.Z=M},5041:function(c,b,e){"use strict";e.d(b,{Z:function(){return V}});var H=e(54421),_=e(38272),v=e(57663),u=e(71577),r=e(2824),i=e(67294),h=e(56131),l=e.n(h),M=e(49111),$=e(19650),y=e(11849),z=e(5882),n=e.n(z),B=e(63097),t=e(85893),S=function(a){var d=(0,y.Z)({},a.label),g=(0,i.useState)(d.invisible),C=(0,r.Z)(g,2),I=C[0],O=C[1],F=(0,i.useState)(0),j=(0,r.Z)(F,2),P=j[0],x=j[1],f=a.hideEye?" ":(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{className:n().eye,style:{backgroundImage:I?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(T){T.stopPropagation(),O(!I),a.onLabelModify(d)}})," "]}),D=a.hideColorPicker?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(B.Z,{color:d.color,changeable:!1,onChange:function(T){d.color=T.hex,a.onLabelModify(d)}}),R=(0,t.jsxs)(_.ZP.Item,{className:"".concat(n().listItem," ").concat(a.active?n().listItemActive:""),unselectable:"on",onClick:function(){a.onClick(d)},children:[(0,t.jsxs)($.Z,{align:"center",size:5,children:[f,d.name,D]}),(0,t.jsx)("a",{className:n().delete,onClick:function(T){T.stopPropagation();var N=new Date().getTime();N-P<300||(x(N),a.onLabelDelete(d))}})]});return R},U=S,le=e(71194),o=e(50146),ee=e(47673),G=e(24044),ne=e(9715),Z=e(93766),Q=e(48971),K=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],L=function(a){var d,g,C=(0,Q.YB)(),I=C.formatMessage({id:"component.PPAddLabelModal.selectColor"}),O=C.formatMessage({id:"component.PPAddLabelModal.addLabel"}),F=C.formatMessage({id:"component.PPAddLabelModal.labelName"}),j=C.formatMessage({id:"component.PPCreater.cancel"}),P=C.formatMessage({id:"component.PPSegMode.ok"}),x=(0,i.useState)(((d=a.defaultLabel)===null||d===void 0?void 0:d.color)||K[a.order||0]),f=(0,r.Z)(x,2),D=f[0],R=f[1];(0,i.useEffect)(function(){var A;R(((A=a.defaultLabel)===null||A===void 0?void 0:A.color)||K[a.order||0])},[a]);var W=a.hideColorPicker?(0,t.jsx)(t.Fragment,{}):(0,t.jsx)(Z.Z.Item,{label:I,name:"color",children:(0,t.jsx)(B.Z,{color:D,changeable:!0,onChange:function(E){R(E.hex)}})}),T=Z.Z.useForm(),N=(0,r.Z)(T,1),Y=N[0];return(0,t.jsx)(o.Z,{title:O,visible:a.visible,onCancel:a.onCancel,footer:null,children:(0,t.jsxs)(Z.Z,{form:Y,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(g=a.defaultLabel)===null||g===void 0?void 0:g.name},onFinish:function(E){var J={name:E.labelname,color:D};a.onLabelAdd(J),Y.resetFields()},autoComplete:"off",children:[(0,t.jsx)(Z.Z.Item,{label:F,name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)(G.Z,{})}),W,(0,t.jsx)(Z.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)($.Z,{children:[(0,t.jsx)(u.Z,{onClick:function(){var E;(E=a.onCancel)===null||E===void 0||E.call(0),Y.resetFields()},children:j}),(0,t.jsx)(u.Z,{type:"primary",htmlType:"submit",children:P})]})})]})})},te=L,k=function(a){var d,g=(0,Q.YB)(),C=g.formatMessage({id:"component.PPLabelList.addLabel"}),I=g.formatMessage({id:"component.PPLabelList.labelList"}),O=(0,i.useState)(!1),F=(0,r.Z)(O,2),j=F[0],P=F[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(_.ZP,{className:l().labelList,size:"large",header:(0,t.jsx)("div",{className:l().listHeader,children:I}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(u.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){P(!0)},block:!0,children:C})}),bordered:!0,dataSource:a.labels,renderItem:function(f){var D;return(0,t.jsx)(U,{hideColorPicker:a.hideColorPicker,hideEye:a.hideEye,onClick:a.onLabelSelect,label:f,active:(D=a.activeIds)===null||D===void 0?void 0:D.has(f.labelId),onLabelDelete:a.onLabelDelete,onLabelModify:a.onLabelModify})}}),(0,t.jsx)(te,{hideColorPicker:a.hideColorPicker,order:(d=a.labels)===null||d===void 0?void 0:d.length,visible:j,onLabelAdd:function(f){a.onLabelAdd(f),P(!1)},onCancel:function(){P(!1)}})]})},V=k},8088:function(c,b,e){"use strict";var H=e(67294),_=e(78677),v=e.n(_),u=e(85893),r=function(h){return(0,u.jsx)("div",{className:"".concat(v().container," ").concat(h.className),children:h.children})};b.Z=r},57436:function(c,b,e){"use strict";var H=e(91220),_=e(2824),v=e(67294),u=e(65031),r=e(84420),i=e.n(r),h=e(48971),l=e(85893),M="./pics/basketball.jpg";function $(z){switch(z){case"mover":return"move";case"rectangle":case"polygon":return"crosshair";default:return"default"}}var y=function(n){var B,t,S;console.log("stage redraw");var U=i()(n.imgSrc||"","anonymous"),le=(0,_.Z)(U,1),o=le[0],ee=(o==null?void 0:o.width)||0,G=(o==null?void 0:o.height)||0,ne=n.transparency==null?0:n.transparency*.01,Z=(0,h.tT)("InteractorData",function(s){return s.interactorData}),Q=(0,h.tT)("VisualRadius",function(s){return s.radius}),K=void 0;n.currentTool=="polygon"||n.currentTool=="rectangle"||n.currentTool=="editor"?K=n.drawTool.polygon:n.currentTool=="brush"||n.currentTool=="rubber"?K=n.drawTool.brush:n.currentTool=="interactor"&&(K=n.drawTool.interactor);var L=K,te=(0,v.useState)(0),k=(0,_.Z)(te,2),V=k[0],w=k[1],a=(0,v.useState)(0),d=(0,_.Z)(a,2),g=d[0],C=d[1],I=(0,v.useState)({x:0,y:0}),O=(0,_.Z)(I,2),F=O[0],j=O[1],P=(0,v.useRef)(null),x=(0,v.useRef)(null),f=(0,v.useRef)(null);function D(){var s=document.getElementById("dr");s&&(w(s.clientWidth),C(s.clientHeight))}(0,v.useEffect)(function(){window.removeEventListener("resize",D),window.addEventListener("resize",D);var s=document.getElementById("dr");s&&(w(s.clientWidth),C(s.clientHeight))},[]),(0,v.useEffect)(function(){!P.current||(P.current.container().style.cursor=$(n.currentTool))},[n.currentTool]);var R=function(m){return{e:m,mouseX:(m.evt.offsetX-F.x-V/2)/n.scale+ee/2,mouseY:(m.evt.offsetY-F.y-g/2)/n.scale+G/2,offsetX:-ee/2,offsetY:-G/2,canvasRef:f,stageRef:P,img:o}},W=function(m){L==null||L.onMouseDown(R(m))},T=function(m){L==null||L.onMouseMove(R(m))},N=function(m){L==null||L.onMouseUp(R(m))},Y=function(m){m.cancelBubble=!0,m.evt.preventDefault()},A=[],E={onDrag:n.onAnnotationModify,scale:n.scale,currentTool:n.currentTool,onSelect:n.setCurrentAnnotation,stageRef:P,currentAnnotation:n.currentAnnotation,transparency:ne,threshold:n.threshold,canvasRef:f,interactorData:Z,label:n.currentLabel,radius:Q};if(n.annotations){var J;console.log("PPStage rendering annotations:",n.annotations);var p=(J=f.current)===null||J===void 0?void 0:J.getContext("2d");p&&p.clearRect(0,0,p.canvas.width,p.canvas.height);var q=(0,H.Z)(n.annotations),re;try{for(q.s();!(re=q.n()).done;){var X=re.value;if(!!X){E.annotation=X;var ae=void 0;if(X.type=="polygon"||X.type=="rectangle")ae=n.drawTool.polygon.drawAnnotation(E);else if(X.type=="brush"||X.type=="rubber"){var oe;ae=(oe=n.drawTool.brush)===null||oe===void 0?void 0:oe.drawAnnotation(E)}else continue;A.push(ae)}}}catch(s){q.e(s)}finally{q.f()}}(B=n.drawTool)===null||B===void 0||(t=B.interactor)===null||t===void 0||t.drawAnnotation(E),(S=x.current)===null||S===void 0||S.batchDraw();var ie=n.currentTool=="mover";return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("canvas",{style:{display:"none"},id:"canvasId",ref:f,width:o==null?void 0:o.width,height:o==null?void 0:o.height}),(0,l.jsx)("svg",{width:"0",height:"0",style:{position:"absolute",zIndex:"-1"},children:(0,l.jsx)("defs",{children:(0,l.jsx)("filter",{id:"remove-alpha",x:"0",y:"0",width:"100%",height:"100%",children:(0,l.jsx)("feComponentTransfer",{children:(0,l.jsx)("feFuncA",{type:"discrete",tableValues:"0 1"})})})})}),(0,l.jsxs)(u.Hf,{width:V,height:g,offsetX:-V/2,offsetY:-g/2,className:"stage",ref:P,draggable:ie,onDragMove:function(m){n.currentTool=="mover"},onDragEnd:function(m){n.currentTool=="mover"&&j({x:m.target.x(),y:m.target.y()})},children:[(0,l.jsx)(u.mh,{onMouseDown:W,onMouseMove:T,onMouseUp:N,onContextMenu:Y,scaleX:n.scale,scaleY:n.scale,draggable:!1,children:(0,l.jsx)(u.Ee,{name:"baseImage",draggable:!1,image:o,x:-((o==null?void 0:o.width)||0)/2,y:-((o==null?void 0:o.height)||0)/2})}),(0,l.jsxs)(u.mh,{ref:x,name:"annotation",scaleX:n.scale,scaleY:n.scale,onMouseDown:W,onMouseMove:T,onMouseUp:N,onContextMenu:Y,opacity:ne,children:[(0,l.jsx)(u.Ee,{x:-((o==null?void 0:o.width)||0)/2,y:-((o==null?void 0:o.height)||0)/2,image:f.current||void 0}),A]})]})]})};b.Z=y},44434:function(c,b,e){"use strict";var H=e(67294),_=e(80961),v=e.n(_),u=e(85893),r=function(h){var l=v().leftToolbar;return h.disLoc=="right"&&(l=v().rightToolbar),(0,u.jsx)("div",{className:l,children:h.children})};b.Z=r},61541:function(c,b,e){"use strict";var H=e(49111),_=e(19650),v=e(67294),u=e(82499),r=e.n(u),i=e(85893),h=function(M){return(0,i.jsx)("div",{unselectable:"on",className:"".concat(r().toolBarButtonContainerWrapper," ").concat(M.active&&r().toolBarButtonContainerWrapperActive," ").concat(M.disabled&&r().toolBarButtonContainerWrapperDisabled),onClick:!M.disabled&&M.onClick||void 0,children:(0,i.jsx)(_.Z,{align:"center",className:r().toolBarButtonContainer,size:0,children:(0,i.jsxs)(_.Z,{align:"center",direction:"vertical",className:r().toolBarButton,size:0,children:[(0,i.jsx)("img",{className:M.disabled?r().toolBarButtonImgDisabled:void 0,src:M.imgSrc}),(0,i.jsx)("div",{className:r().buttonText,children:M.children})]})})})};b.Z=h}}]);
