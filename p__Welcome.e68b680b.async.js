(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[185],{41180:function(s){s.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},9238:function(s){s.exports={button:"button___3gM4r"}},70362:function(s){s.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(s){s.exports={container:"container___2RXc3"}},38339:function(s){s.exports={createBtn:"createBtn___3Jn3_"}},17969:function(s){s.exports={col:"col___yKN-b"}},24141:function(s){s.exports={pagination:"pagination___1KJhU",pageSizeSelector:"pageSizeSelector___2XZ11"}},75534:function(s){s.exports={table:"table___BHQO2"}},31982:function(s,j,e){"use strict";var T=e(89032),r=e(15746),O=e(11849),d=e(13062),C=e(71230),o=e(11700),Z=e(67294),f=e(41180),m=e.n(f),l=e(85893),u=function(i){return(0,l.jsxs)("div",{className:m().ppcard,style:i.style,children:[(0,l.jsx)(C.Z,{className:m().titleRow,style:{display:i.title?void 0:"none"},children:(0,l.jsx)(o.Z,{className:m().title,children:i.title})}),(0,l.jsx)(C.Z,{style:{marginTop:26},children:(0,l.jsx)(r.Z,{span:24,style:(0,O.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},i.innerStyle),children:i.children})})]})};j.Z=u},40318:function(s,j,e){"use strict";var T=e(57663),r=e(71577),O=e(48971),d=e(67294),C=e(70362),o=e.n(C),Z=e(85893),f=function(l){return(0,Z.jsxs)("div",{className:o().card,style:{height:l.height,width:l.width},onClick:function(){return O.m8.push(l.href?l.href:"")},children:[(0,Z.jsx)("img",{className:o().thumbnail,alt:l.wording||o().thumbnail,src:l.imgSrc,style:{height:l.height,width:l.width}}),(0,Z.jsx)(r.Z,{className:o().button,style:{width:l.width},children:l.children})]})};j.Z=f},11428:function(s,j,e){"use strict";var T=e(67294),r=e(48627),O=e.n(r),d=e(85893),C=function(Z){return(0,d.jsx)("div",{className:"".concat(O().container),style:{backgroundImage:"url(./pics/background.png)"},children:Z.children})};j.Z=C},52940:function(s,j,e){"use strict";var T=e(11849),r=e(89032),O=e(15746),d=e(2824),C=e(67294),o=e(17969),Z=e.n(o),f=e(85893),m=function(u){var S=(0,C.useState)(!1),i=(0,d.Z)(S,2),N=i[0],W=i[1];return(0,f.jsx)(O.Z,(0,T.Z)((0,T.Z)({},u),{},{className:"".concat(Z().col," ").concat(u.className),style:{zIndex:N?11:10,width:"100%"},onMouseOver:function(){W(!0)},onMouseLeave:function(){W(!1)},children:u.children}))};j.Z=m},82685:function(s,j,e){"use strict";e.r(j),e.d(j,{default:function(){return ue}});var T=e(57663),r=e(71577),O=e(13062),d=e(71230),C=e(89032),o=e(15746),Z=e(49111),f=e(19650),m=e(67294),l=e(11428),u=e(40318),S=e(31982),i=e(11849),N=e(8963),W=e(34441),I=e(2824),Q=e(75534),V=e.n(Q),Pe=e(14781),$=e(40308),he=e(43358),H=e(34041),a=e(48971),w=e(24141),Y=e.n(w),t=e(85893),A=H.Z.Option;function k(D){var n=D.formatMessage({id:"component.PPTable.prev",defaultMessage:"Previous"}),P=D.formatMessage({id:"component.PPTable.next",defaultMessage:"Next"});return function(v,_,h){return _==="prev"?(0,t.jsx)(r.Z,{children:n}):_==="next"?(0,t.jsx)(r.Z,{children:P}):h}}var q=function(n){var P=n.totalNum,v=(0,m.useState)(n.pageSize||10),_=(0,I.Z)(v,2),h=_[0],x=_[1],E=(0,m.useState)(n.currentPage||1),y=(0,I.Z)(E,2),M=y[0],B=y[1];return(0,t.jsx)("div",{className:"".concat(Y().pagination),children:(0,t.jsxs)(f.Z,{align:"center",children:[(0,a.YB)().formatMessage({id:"component.PPTable.pageTotal"},{total:P,show:(0,t.jsxs)(H.Z,{value:h+"",className:Y().pageSizeSelector,onChange:function(c){x(parseInt(c)),n.onChange&&n.onChange(M,parseInt(c))},children:[(0,t.jsx)(A,{value:"10",children:"10"}),(0,t.jsx)(A,{value:"20",children:"20"}),(0,t.jsx)(A,{value:"30",children:"30"}),(0,t.jsx)(A,{value:"40",children:"40"}),(0,t.jsx)(A,{value:"50",children:"50"})]})}),(0,t.jsx)($.Z,{className:Y().pagination,current:M,pageSize:h,total:P,itemRender:k((0,a.YB)()),onChange:function(c,L){console.log("Pagination: ".concat(L,"/").concat(c)),B(c),n.onChange&&n.onChange(c,L)}})]})})},ee=q,te=function(n){var P,v=((P=n.dataSource)===null||P===void 0?void 0:P.length)||0,_=(0,m.useState)(10),h=(0,I.Z)(_,2),x=h[0],E=h[1],y=(0,m.useState)(1),M=(0,I.Z)(y,2),B=M[0],g=M[1],c=n.dataSource,L=[];if(n.dataSource){var b,F,R=x*(B-1),U=x;R+x>v&&(U=v-R+1),c=(b=n.dataSource)===null||b===void 0?void 0:b.slice(R,R+U/2),L=(F=n.dataSource)===null||F===void 0?void 0:F.slice(R+U/2,R+U)}return(0,t.jsxs)("div",{className:"".concat(V().table),children:[(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(o.Z,{span:12,style:{borderRight:"0.063rem solid rgba(151,151,151,0.27)"},children:(0,t.jsx)(W.Z,(0,i.Z)((0,i.Z)({},n),{},{dataSource:c,pagination:!1,rowSelection:void 0}))}),(0,t.jsx)(o.Z,{span:12,children:(0,t.jsx)(W.Z,(0,i.Z)((0,i.Z)({},n),{},{dataSource:L,pagination:!1,rowSelection:void 0}))})]}),(0,t.jsx)(d.Z,{style:{marginTop:"1.75rem"},children:(0,t.jsx)(o.Z,{span:24,children:(0,t.jsx)(f.Z,{align:"center",children:(0,t.jsx)(ee,{totalNum:v,pageSize:x,currentPage:B,onChange:function(z,X){E(X),(z-1)*X>v?g(1):g(z),n.onChange&&n.onChange(z,X)}})})})})]})},ne=te,ae=e(9238),se=e.n(ae),le=function(n){return(0,t.jsx)(r.Z,(0,i.Z)((0,i.Z)({},n),{},{style:{color:n.color,width:n.width,height:n.height,borderColor:n.color},className:"".concat(se().button),children:n.children}))},p=le,oe=e(49101),re=e(38339),ie=e.n(re),ce=function(n){return(0,t.jsx)(r.Z,{onClick:n.onClick,icon:(0,t.jsx)(oe.Z,{}),size:"large",id:"".concat(ie().createBtn),children:n.children})},G=ce,K=e(52940),J=e(50727),de=function(){var n,P=(0,a.YB)().formatMessage({id:"pages.welcome.edit"}),v=(0,a.YB)().formatMessage({id:"pages.welcome.label"}),_=(0,a.YB)().formatMessage({id:"pages.welcome.remove"}),h=(0,a.YB)().formatMessage({id:"pages.welcome.myProjects"}),x=(0,a.YB)().formatMessage({id:"pages.welcome.createProject"});console.log("render projects");var E=(0,J.Gd)(m.useState);(0,m.useEffect)(function(){E.getAll()},[]);var y=[{title:"ID",dataIndex:"projectId",key:"projectId",width:"4.5rem",align:"center",render:function(B){return(0,t.jsx)(t.Fragment,{children:B})}},{title:"Name",dataIndex:"name",key:"projectId"},{title:"Actions",key:"projectId",width:"15rem",align:"center",render:function(B,g){return(0,t.jsxs)(f.Z,{size:"middle",children:[(0,t.jsx)(p,{width:"4.375rem",height:"1.875rem",color:"rgba(241,162,0,1)",onClick:function(){a.m8.push("/project_detail?taskCategory=".concat(g.taskCategory.name,"&projectId=").concat(g.projectId))},children:P}),(0,t.jsx)(p,{width:"4.375rem",height:"1.875rem",color:"rgba(0,100,248,1)",onClick:function(){a.m8.push("/".concat(g.taskCategory.name,"?projectId=").concat(g.projectId))},children:v}),(0,t.jsx)(p,{width:"4.375rem",height:"1.875rem",color:"rgba(207,63,0,1)",onClick:function(){return E.remove(g)},children:_})]})}}];return(n=E.all)!==null&&n!==void 0&&n.length?(0,t.jsx)(d.Z,{style:{marginTop:20},children:(0,t.jsx)(o.Z,{span:24,children:(0,t.jsx)(S.Z,{title:h,children:(0,t.jsx)(ne,{columns:y,dataSource:(0,J.gu)(E.all),showHeader:!1})})})}):(0,t.jsx)(d.Z,{style:{marginTop:20},children:(0,t.jsx)(o.Z,{span:24,children:(0,t.jsx)(S.Z,{title:h,children:(0,t.jsx)(G,{onClick:function(){a.m8.push("/project_creation")},children:x})})})})},me=function(){var n=(0,a.YB)().formatMessage({id:"pages.welcome.createProject"}),P=(0,a.YB)().formatMessage({id:"pages.welcome.sampleProject"}),v=(0,a.YB)().formatMessage({id:"pages.welcome.imageClassification"}),_=(0,a.YB)().formatMessage({id:"pages.welcome.objectDetection"}),h=(0,a.YB)().formatMessage({id:"pages.welcome.instanceSegmentation"}),x=(0,a.YB)().formatMessage({id:"pages.welcome.semanticSegmentation"}),E=(0,a.YB)().formatMessage({id:"pages.welcome.keypointDetection"}),y=(0,a.YB)().formatMessage({id:"pages.welcome.trainingKnowledge"}),M=(0,a.YB)().formatMessage({id:"pages.welcome.paddleClas"}),B=(0,a.YB)().formatMessage({id:"pages.welcome.paddleDet"}),g=(0,a.YB)().formatMessage({id:"pages.welcome.paddleSeg"}),c=(0,a.YB)().formatMessage({id:"pages.welcome.paddleX"});return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(d.Z,{gutter:[20,20],children:(0,t.jsx)(o.Z,{span:24,children:(0,t.jsx)(G,{onClick:function(){a.m8.push("/project_creation")},children:n})})}),(0,t.jsxs)(d.Z,{gutter:[20,20],style:{marginTop:20},children:[(0,t.jsx)(o.Z,{span:17,children:(0,t.jsx)(S.Z,{title:P,style:{height:430},children:(0,t.jsxs)(d.Z,{children:[(0,t.jsx)(K.Z,{span:4,children:(0,t.jsx)(u.Z,{imgSrc:"./pics/classification.jpg",children:v})}),(0,t.jsx)(K.Z,{span:4,children:(0,t.jsx)(u.Z,{imgSrc:"./pics/object_detection.jpg",children:_})}),(0,t.jsx)(K.Z,{span:4,children:(0,t.jsx)(u.Z,{imgSrc:"./pics/instance_segmentation.jpg",children:h})}),(0,t.jsx)(K.Z,{span:4,children:(0,t.jsx)(u.Z,{imgSrc:"./pics/semantic_segmentation.jpg",children:x})}),(0,t.jsx)(K.Z,{span:4,children:(0,t.jsx)(u.Z,{imgSrc:"./pics/keypoint_detection.jpg",children:E})})]})})}),(0,t.jsx)(o.Z,{span:7,children:(0,t.jsx)(S.Z,{title:y,style:{height:430},children:(0,t.jsxs)(f.Z,{direction:"vertical",style:{width:"100%"},size:10,children:[(0,t.jsx)(r.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:M}),(0,t.jsx)(r.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:B}),(0,t.jsx)(r.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:g}),(0,t.jsx)(r.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:c})]})})})]}),de()]})},ue=me}}]);
