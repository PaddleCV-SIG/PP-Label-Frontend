(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[972],{91220:function(i,L,n){"use strict";n.d(L,{Z:function(){return P}});var O=n(64254);function P(u,f){var a;if(typeof Symbol=="undefined"||u[Symbol.iterator]==null){if(Array.isArray(u)||(a=(0,O.Z)(u))||f&&u&&typeof u.length=="number"){a&&(u=a);var r=0,v=function(){};return{s:v,n:function(){return r>=u.length?{done:!0}:{done:!1,value:u[r++]}},e:function(o){throw o},f:v}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var m=!0,b=!1,x;return{s:function(){a=u[Symbol.iterator]()},n:function(){var o=a.next();return m=o.done,o},e:function(o){b=!0,x=o},f:function(){try{!m&&a.return!=null&&a.return()}finally{if(b)throw x}}}}},85024:function(i){i.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(i){i.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},57560:function(i){i.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},52822:function(i){i.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(i){i.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(i){i.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(i){i.exports={container:"container___G0FNe"}},83930:function(i){i.exports={stage:"stage___3H5QL"}},80961:function(i){i.exports={toolbar:"toolbar___3vxli"}},82499:function(i){i.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},14836:function(i,L,n){"use strict";n.d(L,{Z:function(){return _}});var O=n(54421),P=n(38272),u=n(57663),f=n(71577),a=n(67294),r=n(56159),v=n.n(r),m=n(49111),b=n(19650),x=n(2824),t=n(11849),o=n(85024),l=n.n(o),d=n(63097),e=n(85893),A=function(s){var c=(0,t.Z)({},s.annotation),C=(0,a.useState)(c.invisible),M=(0,x.Z)(C,2),y=M[0],D=M[1];(0,a.useEffect)(function(){D(s.annotation.invisible)},[s.annotation.invisible]);var g=(0,e.jsxs)(P.ZP.Item,{className:"".concat(l().listItem," ").concat(s.active?l().listItemActive:""),unselectable:"on",onClick:function(){s.onClick(c)},children:[(0,e.jsxs)(b.Z,{align:"center",size:5,children:[(0,e.jsx)("a",{className:l().eye,style:{backgroundImage:y?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){D(!y),s.onAnnotationModify(c)}})," ",(0,e.jsx)("span",{className:l().annotationId,children:c.annotationId}),(0,e.jsx)("span",{className:l().labelName,children:c.label.name}),(0,e.jsx)(d.Z,{color:c.label.color})]}),(0,e.jsx)("a",{className:l().delete,onClick:function(){c.delete=!0,s.onAnnotationDelete(c)}})]});return g},I=A,B=function(s){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(P.ZP,{className:v().labelList,size:"large",header:(0,e.jsx)("div",{className:v().listHeader,children:"Annotation List"}),bordered:!0,dataSource:s.annotations,renderItem:function(C){var M;return(0,e.jsx)(I,{onClick:s.onAnnotationSelect,annotation:C,active:C.annotationId==((M=s.selectedAnnotation)===null||M===void 0?void 0:M.annotationId),onAnnotationDelete:s.onAnnotationDelete,onAnnotationModify:s.onAnnotationModify})},footer:(0,e.jsx)("div",{children:(0,e.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){s.onAnnotationSelect(void 0)},block:!0,children:"Add Annotation"})})})})},_=B},43801:function(i,L,n){"use strict";n.d(L,{Z:function(){return x}});var O=n(11849),P=n(2824),u=n(91220),f=n(67294),a=n(65031),r=n(85893);function v(t,o,l,d){if(!(!t||!o||!l||!d))return{width:t,color:o,points:l,tool:d,element:(0,r.jsx)(a.x1,{stroke:o,strokeWidth:t,globalCompositeOperation:d==="brush"?"source-over":"destination-out",lineCap:"round",points:l,tension:.01})}}function m(t,o){return t=="rubber"||o==2?"rubber":"brush"}function b(t){var o=0,l=(0,u.Z)(t),d;try{for(l.s();!(d=l.n()).done;){var e=d.value;!e||e.annotationId>o&&(o=e.annotationId)}}catch(A){l.e(A)}finally{l.f()}return o}function x(t){var o=(0,f.useState)(),l=(0,P.Z)(o,2),d=l[0],e=l[1],A=function(h){var s;if(console.log(t.currentTool),!(t.currentTool!="brush"&&t.currentTool!="rubber")){var c=m(t.currentTool,h.evt.button),C=v(t.brushSize||10,(s=t.currentLabel)===null||s===void 0?void 0:s.color,[h.evt.offsetX,h.evt.offsetY,h.evt.offsetX,h.evt.offsetY],c);if(!!C)if(e(c),t.currentAnnotation){var M,y={annotationId:t.currentAnnotation.annotationId,label:t.currentAnnotation.label,lines:(M=t.currentAnnotation.lines)===null||M===void 0?void 0:M.concat([C])};t.onAnnotationModify(y)}else{if(c=="rubber")return;t.onAnnotationAdd({annotationId:b(t.annotations)+1,label:t.currentLabel,lines:[C]})}}},I=function(h){var s;if(!(!d||!t.currentAnnotation)){var c=[h.evt.offsetX,h.evt.offsetY],C=[];(s=t.currentAnnotation)!==null&&s!==void 0&&s.lines&&(c=t.currentAnnotation.lines[t.currentAnnotation.lines.length-1].points.concat(c),C=t.currentAnnotation.lines);var M=v(t.brushSize||10,t.currentLabel.color,c,d);!M||(C.pop(),C.push(M),t.onAnnotationModify((0,O.Z)((0,O.Z)({},t.currentAnnotation),{},{lines:C})))}},B=function(){t.currentTool!="brush"&&t.currentTool!="rubber"||e(void 0)};return{onMouseDown:A,onMouseMove:I,onMouseUp:B}}},58967:function(i,L,n){"use strict";var O=n(20136),P=n(55241),u=n(77883),f=n(70507),a=n(57663),r=n(71577),v=n(2824),m=n(67294),b=n(61541),x=n(57560),t=n.n(x),o=n(85893),l=1,d=50,e=10;function A(B){return B?B<=l?l:B>=d?d:B:e}var I=function(_){var h=(0,m.useState)(A(_.size)),s=(0,v.Z)(h,2),c=s[0],C=s[1],M=function(D){C(A(D))};return(0,m.useEffect)(function(){M(_.size)},[_.size]),(0,o.jsxs)(P.Z,{overlayClassName:t().popover,placement:"right",content:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Z,{type:"text",onClick:function(){var D,g=A(c-1);M(g),(D=_.onChange)===null||D===void 0||D.call(0,g)},children:"-"}),(0,o.jsx)(f.Z,{min:l,max:d,value:c,onChange:function(D){var g;(g=_.onChange)===null||g===void 0||g.call(0,D)},controls:!1,style:{textAlign:"center"}}),(0,o.jsx)(r.Z,{type:"text",onClick:function(){var D,g=A(c+1);M(g),(D=_.onChange)===null||D===void 0||D.call(0,g)},children:"+"})]}),trigger:_.active?"hover":"click",children:[" ",(0,o.jsx)(b.Z,{active:_.active,imgSrc:_.imgSrc||"./pics/buttons/brush.png",onClick:_.onClick,children:_.children||"Brush"})]})};L.Z=I},63097:function(i,L,n){"use strict";var O=n(20136),P=n(55241),u=n(2824),f=n(67294),a=n(52822),r=n.n(a),v=n(63144),m=n(85893),b=function(t){var o=(0,f.useState)(t.color||"#FFF"),l=(0,u.Z)(o,2),d=l[0],e=l[1];return(0,f.useEffect)(function(){e(t.color||"#FFF")},[t]),t.changeable?(0,m.jsx)(P.Z,{getPopupContainer:function(I){return I.parentElement||document.body},overlayClassName:r().popover,openClassName:r().popoverOpenClassName,placement:"bottom",content:(0,m.jsx)(v.xS,{disableAlpha:!0,color:d,onChange:function(I){e(I.hex)},onChangeComplete:t.onChange}),trigger:"click",children:(0,m.jsx)("div",{className:r().roundBall,style:{backgroundColor:d}})}):(0,m.jsx)("div",{className:r().roundBall,style:{backgroundColor:d}})};L.Z=b},5041:function(i,L,n){"use strict";n.d(L,{Z:function(){return X}});var O=n(54421),P=n(38272),u=n(57663),f=n(71577),a=n(2824),r=n(67294),v=n(56131),m=n.n(v),b=n(49111),x=n(19650),t=n(11849),o=n(5882),l=n.n(o),d=n(63097),e=n(85893),A=function(E){var j=(0,t.Z)({},E.label),U=(0,r.useState)(j.invisible),W=(0,a.Z)(U,2),R=W[0],N=W[1],S=(0,e.jsx)(P.ZP.Item,{className:"".concat(l().listItem," ").concat(E.active?l().listItemActive:""),unselectable:"on",onClick:function(){E.onClick(j)},children:(0,e.jsxs)(x.Z,{align:"center",size:5,children:[(0,e.jsx)("a",{className:l().eye,style:{backgroundImage:R?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){N(!R),E.onLabelModify(j)}})," ",j.name,(0,e.jsx)(d.Z,{color:j.color,changeable:!0,onChange:function(Z){j.color=Z.hex,E.onLabelModify(j)}})]})});return S},I=A,B=n(71194),_=n(50146),h=n(47673),s=n(24044),c=n(9715),C=n(93766),M=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],y=function(E){var j,U,W=(0,r.useState)(((j=E.defaultLabel)===null||j===void 0?void 0:j.color)||M[E.order||0]),R=(0,a.Z)(W,2),N=R[0],S=R[1];(0,r.useEffect)(function(){var T;S(((T=E.defaultLabel)===null||T===void 0?void 0:T.color)||M[E.order||0])},[E]);var z=C.Z.useForm(),Z=(0,a.Z)(z,1),K=Z[0];return(0,e.jsx)(_.Z,{title:"Add Label",visible:E.visible,onCancel:E.onCancel,footer:null,children:(0,e.jsxs)(C.Z,{form:K,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(U=E.defaultLabel)===null||U===void 0?void 0:U.name},onFinish:function(F){var Y={name:F.labelname,color:N};E.onLabelAdd(Y),K.resetFields()},autoComplete:"off",children:[(0,e.jsx)(C.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,e.jsx)(s.Z,{})}),(0,e.jsx)(C.Z.Item,{label:"Select Color",name:"color",children:(0,e.jsx)(d.Z,{color:N,onChange:function(F){S(F.hex)}})}),(0,e.jsx)(C.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,e.jsxs)(x.Z,{children:[(0,e.jsx)(f.Z,{onClick:function(){var F;(F=E.onCancel)===null||F===void 0||F.call(0),K.resetFields()},children:"\u53D6\u6D88"}),(0,e.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},D=y,g=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],H=function(E){var j=(0,r.useState)(g),U=(0,a.Z)(j,2),W=U[0],R=U[1],N=(0,r.useState)(!1),S=(0,a.Z)(N,2),z=S[0],Z=S[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(P.ZP,{className:m().labelList,size:"large",header:(0,e.jsx)("div",{className:m().listHeader,children:"Label List"}),footer:(0,e.jsx)("div",{children:(0,e.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){Z(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:W,renderItem:function(T){var F;return(0,e.jsx)(I,{onClick:E.onLabelSelect,label:T,active:T.name==((F=E.selectedLabel)===null||F===void 0?void 0:F.name),onLabelDelete:E.onLabelDelete,onLabelModify:E.onLabelModify})}}),(0,e.jsx)(D,{order:W.length,visible:z,onLabelAdd:function(T){W.push(T),R(W),Z(!1)},onCancel:function(){Z(!1)}})]})},X=H},8088:function(i,L,n){"use strict";var O=n(67294),P=n(78677),u=n.n(P),f=n(85893),a=function(v){return(0,f.jsx)("div",{className:"".concat(u().container," ").concat(v.className),children:v.children})};L.Z=a},57436:function(i,L,n){"use strict";var O=n(2824),P=n(67294),u=n(65031),f=n(84420),a=n.n(f),r=n(83930),v=n.n(r),m=n(85893),b="./pics/basketball.jpg",x=function(o){var l=a()(b),d=(0,O.Z)(l,1),e=d[0],A=(e==null?void 0:e.width)||0,I=(e==null?void 0:e.height)||0;return(0,m.jsxs)(u.Hf,{width:A,height:I,className:v().stage,children:[(0,m.jsx)(u.mh,{children:(0,m.jsx)(u.Ee,{image:e})}),(0,m.jsxs)(u.mh,{onMouseDown:function(_){o.onMouseDown&&o.onMouseDown(_)},onMouseMove:function(_){o.onMouseMove&&o.onMouseMove(_)},onMouseUp:function(_){o.onMouseUp&&o.onMouseUp(_)},onContextMenu:function(_){_.evt.preventDefault()},children:[(0,m.jsx)(u.Ee,{image:e}),o.annotations.map(function(B,_){var h;return(h=B.lines)===null||h===void 0?void 0:h.map(function(s,c){return s.element})})]})]})};L.Z=x},44434:function(i,L,n){"use strict";var O=n(67294),P=n(80961),u=n.n(P),f=n(85893),a=function(v){return(0,f.jsx)("div",{className:u().toolbar,children:v.children})};L.Z=a},61541:function(i,L,n){"use strict";var O=n(49111),P=n(19650),u=n(67294),f=n(82499),a=n.n(f),r=n(85893),v=function(b){return(0,r.jsx)("div",{unselectable:"on",className:"".concat(a().toolBarButtonContainerWrapper," ").concat(b.active&&a().toolBarButtonContainerWrapperActive),onClick:b.onClick,children:(0,r.jsx)(P.Z,{align:"center",className:a().toolBarButtonContainer,size:0,children:(0,r.jsxs)(P.Z,{align:"center",direction:"vertical",className:a().toolBarButton,size:0,children:[(0,r.jsx)("img",{src:b.imgSrc}),(0,r.jsx)("div",{className:a().buttonText,children:b.children})]})})})};L.Z=v}}]);
