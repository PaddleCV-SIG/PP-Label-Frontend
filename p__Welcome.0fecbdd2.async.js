(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[185],{41180:function(a){a.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},9238:function(a){a.exports={button:"button___3gM4r"}},70362:function(a){a.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},48627:function(a){a.exports={container:"container___2RXc3"}},17969:function(a){a.exports={col:"col___yKN-b"}},24141:function(a){a.exports={pagination:"pagination___1KJhU",pageSizeSelector:"pageSizeSelector___2XZ11"}},81013:function(a){a.exports={createBtn:"createBtn___UiGiR"}},75534:function(a){a.exports={table:"table___BHQO2"}},31982:function(a,j,e){"use strict";var R=e(89032),O=e(15746),Z=e(11849),i=e(13062),s=e(71230),E=e(11700),r=e(67294),W=e(41180),d=e.n(W),l=e(85893),x=function(o){return(0,l.jsxs)("div",{className:d().ppcard,style:o.style,hidden:o.hidden,children:[(0,l.jsx)(s.Z,{className:d().titleRow,style:{display:o.title?void 0:"none"},children:(0,l.jsx)(E.Z,{className:d().title,children:o.title})}),(0,l.jsx)(s.Z,{style:{marginTop:26},children:(0,l.jsx)(O.Z,{span:24,style:(0,Z.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},o.innerStyle),children:o.children})})]})};j.Z=x},40318:function(a,j,e){"use strict";var R=e(57663),O=e(71577),Z=e(48971),i=e(67294),s=e(70362),E=e.n(s),r=e(85893),W=function(l){return(0,r.jsxs)("div",{className:E().card,style:{height:l.height,width:l.width},onClick:l.onClick?l.onClick:function(){return Z.m8.push(l.href?l.href:"")},children:[(0,r.jsx)("img",{className:E().thumbnail,alt:l.wording||E().thumbnail,src:l.imgSrc,style:{height:l.height,width:l.width}}),(0,r.jsx)(O.Z,{className:E().button,style:{width:l.width},children:l.children})]})};j.Z=W},11428:function(a,j,e){"use strict";var R=e(67294),O=e(48627),Z=e.n(O),i=e(85893),s=function(r){return(0,i.jsx)("div",{className:"".concat(Z().container),style:{backgroundImage:"url(./pics/background.png)"},children:r.children})};j.Z=s},52940:function(a,j,e){"use strict";var R=e(11849),O=e(89032),Z=e(15746),i=e(2824),s=e(67294),E=e(17969),r=e.n(E),W=e(85893),d=function(x){var M=(0,s.useState)(!1),o=(0,i.Z)(M,2),z=o[0],X=o[1];return(0,W.jsx)(Z.Z,(0,R.Z)((0,R.Z)({},x),{},{className:"".concat(r().col," ").concat(x.className),style:{zIndex:z?11:10,width:"100%"},onMouseOver:function(){X(!0)},onMouseLeave:function(){X(!1)},children:x.children}))};j.Z=d},5011:function(a,j,e){"use strict";e.r(j),e.d(j,{default:function(){return me}});var R=e(20228),O=e(11382),Z=e(57663),i=e(71577),s=e(2824),E=e(13062),r=e(71230),W=e(89032),d=e(15746),l=e(49111),x=e(19650),M=e(67294),o=e(48971),z=e(11428),X=e(40318),N=e(31982),A=e(11849),ve=e(8963),J=e(34441),V=e(75534),$=e.n(V),he=e(14781),p=e(40308),ge=e(43358),Q=e(34041),w=e(24141),Y=e.n(w),t=e(85893),F=Q.Z.Option;function k(y){var n=y.formatMessage({id:"component.PPTable.prev",defaultMessage:"Previous"}),c=y.formatMessage({id:"component.PPTable.next",defaultMessage:"Next"});return function(u,g,_){return g==="prev"?(0,t.jsx)(i.Z,{children:n}):g==="next"?(0,t.jsx)(i.Z,{children:c}):_}}var q=function(n){var c=n.totalNum,u=(0,M.useState)(n.pageSize||10),g=(0,s.Z)(u,2),_=g[0],C=g[1],f=(0,M.useState)(n.currentPage||1),B=(0,s.Z)(f,2),v=B[0],h=B[1];return(0,t.jsx)("div",{className:"".concat(Y().pagination),children:(0,t.jsxs)(x.Z,{align:"center",children:[(0,o.YB)().formatMessage({id:"component.PPTable.pageTotal"},{total:c,show:(0,t.jsxs)(Q.Z,{value:_+"",className:Y().pageSizeSelector,onChange:function(m){C(parseInt(m)),n.onChange&&n.onChange(v,parseInt(m))},children:[(0,t.jsx)(F,{value:"10",children:"10"}),(0,t.jsx)(F,{value:"20",children:"20"}),(0,t.jsx)(F,{value:"30",children:"30"}),(0,t.jsx)(F,{value:"40",children:"40"}),(0,t.jsx)(F,{value:"50",children:"50"})]})}),(0,t.jsx)(p.Z,{className:Y().pagination,current:v,pageSize:_,total:c,itemRender:k((0,o.YB)()),onChange:function(m,T){console.log("Pagination: ".concat(T,"/").concat(m)),h(m),n.onChange&&n.onChange(m,T)}})]})})},ee=q,te=function(n){var c,u=((c=n.dataSource)===null||c===void 0?void 0:c.length)||0,g=(0,M.useState)(10),_=(0,s.Z)(g,2),C=_[0],f=_[1],B=(0,M.useState)(1),v=(0,s.Z)(B,2),h=v[0],P=v[1],m=n.dataSource,T=[];if(n.dataSource){var I,L,D=C*(h-1),K=C;D+C>u&&(K=u-D+1),m=(I=n.dataSource)===null||I===void 0?void 0:I.slice(D,D+K/2),T=(L=n.dataSource)===null||L===void 0?void 0:L.slice(D+K/2,D+K)}return(0,t.jsxs)("div",{className:"".concat($().table),children:[(0,t.jsxs)(r.Z,{children:[(0,t.jsx)(d.Z,{span:12,style:{borderRight:"0.063rem solid rgba(151,151,151,0.27)"},children:(0,t.jsx)(J.Z,(0,A.Z)((0,A.Z)({},n),{},{dataSource:m,pagination:!1,rowSelection:void 0}))}),(0,t.jsx)(d.Z,{span:12,children:(0,t.jsx)(J.Z,(0,A.Z)((0,A.Z)({},n),{},{dataSource:T,pagination:!1,rowSelection:void 0}))})]}),(0,t.jsx)(r.Z,{style:{marginTop:"1.75rem"},children:(0,t.jsx)(d.Z,{span:24,children:(0,t.jsx)(x.Z,{align:"center",children:(0,t.jsx)(ee,{totalNum:u,pageSize:C,currentPage:h,onChange:function(b,U){f(U),(b-1)*U>u?P(1):P(b),n.onChange&&n.onChange(b,U)}})})})})]})},ne=te,ae=e(9238),le=e.n(ae),oe=function(n){return(0,t.jsx)(i.Z,(0,A.Z)((0,A.Z)({},n),{},{style:{color:n.color,width:n.width,height:n.height,borderColor:n.color},className:"".concat(le().button),children:n.children}))},G=oe,se=e(81013),re=e.n(se),ie=function(n){return(0,t.jsx)(i.Z,{onClick:n.onClick,size:"large",id:"".concat(re().createBtn),children:n.children})},de=ie,ce=e(52940),S=e(98731),ue=function(n){var c,u=(0,o.YB)(),g=u.formatMessage({id:"pages.welcome.label"}),_=u.formatMessage({id:"pages.welcome.remove"}),C=u.formatMessage({id:"pages.welcome.myProjects"});console.log("render projects");var f=(0,S.Gd)(M.useState);(0,M.useEffect)(function(){(0,S.bo)().then(function(v){v!=!1&&f.getAll()})},[]);var B=[{title:"ID",dataIndex:"projectId",key:"projectId",width:"4.5rem",align:"center",render:function(h){return(0,t.jsx)(t.Fragment,{children:h})}},{title:"Name",dataIndex:"name",key:"projectId"},{title:"Project Category",key:"projectId",render:function(h){console.log("pj",h);var P=(0,S.os)(h.taskCategory.name);return console.log("categoryName",P),S.ux[P].name}},{title:"Actions",key:"projectId",width:"15rem",align:"center",render:function(h,P){return(0,t.jsxs)(x.Z,{size:"middle",children:[(0,t.jsx)(G,{width:"4.375rem",height:"1.875rem",color:"rgba(241,162,0,1)",onClick:function(){o.m8.push("/project_overview?projectId=".concat(P.projectId))},children:"Overview"}),(0,t.jsx)(G,{width:"4.375rem",height:"1.875rem",color:"rgba(0,100,248,1)",onClick:function(){o.m8.push("/".concat(P.taskCategory.name,"?projectId=").concat(P.projectId))},children:g}),(0,t.jsx)(G,{width:"4.375rem",height:"1.875rem",color:"rgba(207,63,0,1)",onClick:function(){n.setDeleting(!0),f.remove(P).then(function(){return n.setDeleting(!1)})},children:_})]})}}];return(c=f.all)!==null&&c!==void 0&&c.length?(console.log("all pjs",(0,S.gu)(f.all)),(0,t.jsx)(r.Z,{style:{marginTop:20},children:(0,t.jsx)(d.Z,{span:24,children:(0,t.jsx)(N.Z,{title:C,children:(0,t.jsx)(ne,{columns:B,dataSource:(0,S.gu)(f.all),showHeader:!1})})})})):""},Pe=function(){var n=(0,o.YB)(),c=(0,M.useState)(!1),u=(0,s.Z)(c,2),g=u[0],_=u[1],C=n.formatMessage({id:"pages.welcome.createProject"}),f=n.formatMessage({id:"pages.welcome.sampleProject"}),B=n.formatMessage({id:"pages.welcome.trainingKnowledge"}),v=n.formatMessage({id:"pages.welcome.paddleClas"}),h=n.formatMessage({id:"pages.welcome.paddleDet"}),P=n.formatMessage({id:"pages.welcome.paddleSeg"}),m=n.formatMessage({id:"pages.welcome.paddleX"});function T(){for(var I=[],L=0,D=Object.entries(S.ux);L<D.length;L++){var K=D[L],H=(0,s.Z)(K,2),b=H[0],U=H[1];I.push((0,t.jsx)(ce.Z,{span:4,children:(0,t.jsx)(X.Z,{imgSrc:U.avatar,href:"/project_detail?taskCategory="+b,children:U.name})}))}return I}return(0,t.jsxs)(z.Z,{children:[(0,t.jsx)(r.Z,{gutter:[20,20],children:(0,t.jsx)(d.Z,{span:24,children:(0,t.jsx)(de,{onClick:function(){o.m8.push("/sample_project")},children:f})})}),(0,t.jsxs)(r.Z,{gutter:[20,20],style:{marginTop:20},children:[(0,t.jsx)(d.Z,{span:17,children:(0,t.jsx)(N.Z,{title:C,style:{height:430},children:(0,t.jsx)(r.Z,{children:T()})})}),(0,t.jsx)(d.Z,{span:7,children:(0,t.jsx)(N.Z,{title:B,style:{height:430},children:(0,t.jsxs)(x.Z,{direction:"vertical",style:{width:"100%"},size:10,children:[(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:v}),(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:h}),(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:P}),(0,t.jsx)(i.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:m})]})})})]}),(0,t.jsx)(O.Z,{tip:"Deleting",spinning:g,children:ue({setDeleting:_})})]})},me=Pe}}]);