(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[540],{57560:function(a){a.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},52822:function(a){a.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},56131:function(a){a.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},56623:function(a){a.exports={listItem:"listItem___3P4zY",eye:"eye___13vRl",roundBall:"roundBall___3rXBh",popover:"popover___2bsOT"}},78677:function(a){a.exports={container:"container___G0FNe"}},83930:function(a){a.exports={stage:"stage___3H5QL"}},80961:function(a){a.exports={toolbar:"toolbar___3vxli"}},82499:function(a){a.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},54777:function(a){a.exports={segment:"segment___1YMcl",mainStage:"mainStage___2otee",rightSideBar:"rightSideBar___2X7jK"}},58967:function(a,x,e){"use strict";var U=e(20136),g=e(19181),h=e(77883),d=e(70507),s=e(57663),l=e(71577),_=e(2824),i=e(67294),S=e(61541),W=e(57560),K=e.n(W),m=e(85893),F=1,N=20,z=10;function A(M){return M?M<=F?F:M>=N?N:M:z}var n=function(t){var H=(0,i.useState)(A(t.size)),O=(0,_.Z)(H,2),I=O[0],T=O[1];return(0,m.jsxs)(g.Z,{overlayClassName:K().popover,placement:"right",content:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Z,{type:"text",onClick:function(){var C,r=A(I-1);T(r),(C=t.onChange)===null||C===void 0||C.call(0,r)},children:"-"}),(0,m.jsx)(d.Z,{min:1,max:20,value:I,onChange:t.onChange,controls:!1,style:{textAlign:"center"}}),(0,m.jsx)(l.Z,{type:"text",onClick:function(){var C,r=A(I+1);T(r),(C=t.onChange)===null||C===void 0||C.call(0,r)},children:"+"})]}),trigger:t.active?"hover":"click",children:[" ",(0,m.jsx)(S.Z,{active:t.active,imgSrc:"./pics/buttons/brush.png",onClick:t.onClick,children:"Brush"})]})};x.Z=n},35475:function(a,x,e){"use strict";e.d(x,{Z:function(){return q}});var U=e(54421),g=e(38272),h=e(57663),d=e(71577),s=e(2824),l=e(67294),_=e(56131),i=e.n(_),S=e(49111),W=e(19650),K=e(11849),m=e(56623),F=e.n(m),N=e(20136),z=e(19181),A=e(52822),n=e.n(A),M=e(63144),t=e(85893),H=function(o){var u=(0,l.useState)(o.color||"#FFF"),f=(0,s.Z)(u,2),v=f[0],B=f[1];return(0,l.useEffect)(function(){B(o.color||"#FFF")},[o]),(0,t.jsx)(z.Z,{getPopupContainer:function(P){return P.parentElement||document.body},overlayClassName:n().popover,openClassName:n().popoverOpenClassName,placement:"bottom",content:(0,t.jsx)(M.xS,{disableAlpha:!0,color:v,onChange:function(P){B(P.hex)},onChangeComplete:o.onChange}),trigger:"click",children:(0,t.jsx)("div",{className:n().roundBall,style:{backgroundColor:v}})})},O=H,I=function(o){var u=(0,K.Z)({},o.label),f=(0,l.useState)(u.invisible),v=(0,s.Z)(f,2),B=v[0],L=v[1],P=(0,t.jsx)(g.ZP.Item,{className:F().listItem,unselectable:"on",children:(0,t.jsxs)(W.Z,{align:"center",size:5,children:[(0,t.jsx)("a",{className:F().eye,style:{backgroundImage:B?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){L(!B),o.onLabelModify(u)}})," ",u.name,(0,t.jsx)(O,{color:u.color,onChange:function(j){u.color=j.hex,o.onLabelModify(u)}})]})});return P},T=I,R=e(71194),C=e(48889),r=e(47673),y=e(24044),E=e(9715),b=e(93766),$=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],w=function(o){var u,f,v=(0,l.useState)(((u=o.defaultLabel)===null||u===void 0?void 0:u.color)||$[o.order||0]),B=(0,s.Z)(v,2),L=B[0],P=B[1];(0,l.useEffect)(function(){var c;P(((c=o.defaultLabel)===null||c===void 0?void 0:c.color)||$[o.order||0])},[o]);var D=b.Z.useForm(),j=(0,s.Z)(D,1),Z=j[0];return(0,t.jsx)(C.Z,{title:"Add Label",visible:o.visible,onCancel:o.onCancel,footer:null,children:(0,t.jsxs)(b.Z,{form:Z,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(f=o.defaultLabel)===null||f===void 0?void 0:f.name},onFinish:function(p){var J={name:p.labelname,color:L};o.onLabelAdd(J),Z.resetFields()},autoComplete:"off",children:[(0,t.jsx)(b.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)(y.Z,{})}),(0,t.jsx)(b.Z.Item,{label:"Select Color",name:"color",children:(0,t.jsx)(O,{color:L,onChange:function(p){P(p.hex)}})}),(0,t.jsx)(b.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)(W.Z,{children:[(0,t.jsx)(d.Z,{onClick:function(){var p;(p=o.onCancel)===null||p===void 0||p.call(0),Z.resetFields()},children:"\u53D6\u6D88"}),(0,t.jsx)(d.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},V=w,G=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],Y=function(o){var u=(0,l.useState)(G),f=(0,s.Z)(u,2),v=f[0],B=f[1],L=(0,l.useState)(!1),P=(0,s.Z)(L,2),D=P[0],j=P[1],Z=(0,l.useState)(""),c=(0,s.Z)(Z,2),p=c[0],J=c[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.ZP,{className:i().labelList,size:"large",header:(0,t.jsx)("div",{className:i().listHeader,children:"Label List"}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(d.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){J(""),j(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:v,renderItem:function(k){return(0,t.jsx)(T,{label:k,onLabelDelete:o.onLabelDelete,onLabelModify:o.onLabelModify})}}),(0,t.jsx)(V,{order:v.length,visible:D,defaultLabelName:p,onLabelAdd:function(k){v.push(k),B(v),j(!1)},onCancel:function(){j(!1)}})]})},q=Y},8088:function(a,x,e){"use strict";var U=e(67294),g=e(78677),h=e.n(g),d=e(85893),s=function(_){return(0,d.jsx)("div",{className:"".concat(h().container," ").concat(_.className),children:_.children})};x.Z=s},44434:function(a,x,e){"use strict";var U=e(67294),g=e(80961),h=e.n(g),d=e(85893),s=function(_){return(0,d.jsx)("div",{className:h().toolbar,children:_.children})};x.Z=s},61541:function(a,x,e){"use strict";var U=e(49111),g=e(19650),h=e(67294),d=e(82499),s=e.n(d),l=e(85893),_=function(S){return(0,l.jsx)("div",{unselectable:"on",className:"".concat(s().toolBarButtonContainerWrapper," ").concat(S.active&&s().toolBarButtonContainerWrapperActive),onClick:S.onClick,children:(0,l.jsx)(g.Z,{align:"center",className:s().toolBarButtonContainer,size:0,children:(0,l.jsxs)(g.Z,{align:"center",direction:"vertical",className:s().toolBarButton,size:0,children:[(0,l.jsx)("img",{src:S.imgSrc}),(0,l.jsx)("div",{className:s().buttonText,children:S.children})]})})})};x.Z=_},37063:function(a,x,e){"use strict";e.r(x),e.d(x,{default:function(){return I}});var U=e(20136),g=e(19181),h=e(2824),d=e(67294),s=e(54777),l=e.n(s),_=e(8088),i=e(61541),S=e(44434),W=e(58967),K=e(35475),m=e(65031),F=e(84420),N=e.n(F),z=e(83930),A=e.n(z),n=e(85893),M="./pics/basketball.jpg",t=function(){var R=N()(M),C=(0,h.Z)(R,1),r=C[0],y=(r==null?void 0:r.width)||0,E=(r==null?void 0:r.height)||0,b=(0,d.useState)(Math.max(window.innerWidth,1024)-330),$=(0,h.Z)(b,2),w=$[0],V=$[1],G=(0,d.useState)(Math.max(window.innerHeight-60,708,E)),Y=(0,h.Z)(G,2),q=Y[0],X=Y[1];window.addEventListener("resize",function(){window.innerWidth>1024&&V(window.innerWidth-330),window.innerHeight>768&&window.innerHeight>E&&X(window.innerHeight-60)});var o=(0,d.useState)([]),u=(0,h.Z)(o,2),f=u[0],v=u[1],B=(0,d.useState)(!1),L=(0,h.Z)(B,2),P=L[0],D=L[1],j="brush";return(0,n.jsx)(m.Hf,{width:y,height:E,className:A().stage,children:(0,n.jsxs)(m.mh,{onMouseDown:function(c){D(!0),v([c.evt.offsetX,c.evt.offsetY,c.evt.offsetX,c.evt.offsetY])},onMouseMove:function(c){!P||v(f.concat([c.evt.offsetX,c.evt.offsetY]))},onMouseUp:function(){D(!1)},children:[(0,n.jsx)(m.Ee,{image:r}),(0,n.jsx)(m.x1,{stroke:"#df4b26",strokeWidth:10,globalCompositeOperation:j==="brush"?"source-over":"destination-out",lineCap:"round",points:f,tension:.01})]})})},H=t,O=function(){var R=(0,d.useState)(void 0),C=(0,h.Z)(R,2),r=C[0],y=C[1];return(0,n.jsxs)(_.Z,{className:l().segment,children:[(0,n.jsxs)(S.Z,{children:[(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,n.jsx)(i.Z,{active:r=="polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){y("polygon")},children:"Polygon"}),(0,n.jsx)(W.Z,{active:r=="brush",onClick:function(){y("brush")},onChange:function(b){console.log(b)}}),(0,n.jsxs)(g.Z,{placement:"rightTop",title:"title",content:"content",trigger:r=="rubber"?"hover":"click",children:[" ",(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){y("rubber")},children:"Rubber"})]}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/move.png",children:"Move"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,n.jsx)(i.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,n.jsx)("div",{className:l().mainStage,children:(0,n.jsx)(H,{})}),(0,n.jsx)("div",{className:l().rightSideBar,children:(0,n.jsx)(K.Z,{onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}})})]})},I=O}}]);