(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[275],{88769:function(s){s.exports={createBtn:"createBtn___L_oKa"}},41180:function(s){s.exports={ppcard:"ppcard___27hGd",title:"title___22R8f"}},9238:function(s){s.exports={button:"button___3gM4r"}},70362:function(s){s.exports={card:"card___CFZWU",thumbnail:"thumbnail___1gIPM",button:"button___g0lkO"}},17969:function(s){s.exports={col:"col___yKN-b"}},24141:function(s){s.exports={pagination:"pagination___1KJhU",pageSizeSelector:"pageSizeSelector___2XZ11"}},75534:function(s){s.exports={table:"table___BHQO2"}},31982:function(s,x,t){"use strict";var T=t(89032),c=t(15746),M=t(11849),h=t(13062),Z=t(71230),r=t(11700),d=t(67294),y=t(41180),P=t.n(y),a=t(85893),v=function(g){return(0,a.jsxs)("div",{className:P().ppcard,style:g.style,children:[(0,a.jsx)(Z.Z,{className:P().titleRow,style:{display:g.title?void 0:"none"},children:(0,a.jsx)(r.Z,{className:P().title,children:g.title})}),(0,a.jsx)(Z.Z,{style:{marginTop:26},children:(0,a.jsx)(c.Z,{span:24,style:(0,M.Z)({paddingLeft:30,paddingRight:30,textAlign:"center"},g.innerStyle),children:g.children})})]})};x.Z=v},40318:function(s,x,t){"use strict";var T=t(57663),c=t(71577),M=t(48971),h=t(67294),Z=t(70362),r=t.n(Z),d=t(85893),y=function(a){return(0,d.jsxs)("div",{className:r().card,style:{height:a.height,width:a.width},onClick:function(){return M.m8.push(a.href?a.href:"")},children:[(0,d.jsx)("img",{className:r().thumbnail,alt:a.wording||r().thumbnail,src:a.imgSrc,style:{height:a.height,width:a.width}}),(0,d.jsx)(c.Z,{className:r().button,style:{width:a.width},children:a.children})]})};x.Z=y},52940:function(s,x,t){"use strict";var T=t(11849),c=t(89032),M=t(15746),h=t(2824),Z=t(67294),r=t(17969),d=t.n(r),y=t(85893),P=function(v){var j=(0,Z.useState)(!1),g=(0,h.Z)(j,2),E=g[0],C=g[1];return(0,y.jsx)(M.Z,(0,T.Z)((0,T.Z)({},v),{},{className:"".concat(d().col," ").concat(v.className),style:{zIndex:E?11:10,width:"100%"},onMouseOver:function(){C(!0)},onMouseLeave:function(){C(!1)},children:v.children}))};x.Z=P},3275:function(s,x,t){"use strict";t.r(x),t.d(x,{PROJECT_INFO_KEY:function(){return J},default:function(){return Et},refreshProject:function(){return gt}});var T=t(57663),c=t(71577),M=t(13062),h=t(71230),Z=t(89032),r=t(15746),d=t(2824),y=t(49111),P=t(19650),a=t(34792),v=t(48086),j=t(67294),g=t(11428),E=t(40318),C=t(31982),_=t(11849),_t=t(8963),Q=t(34441),k=t(75534),q=t.n(k),Zt=t(14781),tt=t(40308),Ct=t(43358),V=t(34041),O=t(48971),et=t(24141),N=t.n(et),e=t(85893),B=V.Z.Option;function nt(m){var n=m.formatMessage({id:"component.PPTable.prev",defaultMessage:"Previous"}),l=m.formatMessage({id:"component.PPTable.next",defaultMessage:"Next"});return function(i,u,o){return u==="prev"?(0,e.jsx)(c.Z,{children:n}):u==="next"?(0,e.jsx)(c.Z,{children:l}):o}}var at=function(n){var l=n.totalNum,i=(0,j.useState)(n.pageSize||10),u=(0,d.Z)(i,2),o=u[0],S=u[1],z=(0,j.useState)(n.currentPage||1),K=(0,d.Z)(z,2),L=K[0],A=K[1];return(0,e.jsx)("div",{className:"".concat(N().pagination),children:(0,e.jsxs)(P.Z,{align:"center",children:[(0,O.YB)().formatMessage({id:"component.PPTable.pageTotal"},{total:l,show:(0,e.jsxs)(V.Z,{value:o+"",className:N().pageSizeSelector,onChange:function(f){S(parseInt(f)),n.onChange&&n.onChange(L,parseInt(f))},children:[(0,e.jsx)(B,{value:"10",children:"10"}),(0,e.jsx)(B,{value:"20",children:"20"}),(0,e.jsx)(B,{value:"30",children:"30"}),(0,e.jsx)(B,{value:"40",children:"40"}),(0,e.jsx)(B,{value:"50",children:"50"})]})}),(0,e.jsx)(tt.Z,{className:N().pagination,current:L,pageSize:o,total:l,itemRender:nt((0,O.YB)()),onChange:function(f,R){console.log("Pagination: ".concat(R,"/").concat(f)),A(f),n.onChange&&n.onChange(f,R)}})]})})},lt=at,st=function(n){var l,i=((l=n.dataSource)===null||l===void 0?void 0:l.length)||0,u=(0,j.useState)(10),o=(0,d.Z)(u,2),S=o[0],z=o[1],K=(0,j.useState)(1),L=(0,d.Z)(K,2),A=L[0],W=L[1],f=n.dataSource,R=[];if(n.dataSource){var b,H,D=S*(A-1),U=S;D+S>i&&(U=i-D+1),f=(b=n.dataSource)===null||b===void 0?void 0:b.slice(D,D+U/2),R=(H=n.dataSource)===null||H===void 0?void 0:H.slice(D+U/2,D+U)}return(0,e.jsxs)("div",{className:"".concat(q().table),children:[(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(r.Z,{span:12,style:{borderRight:"0.063rem solid rgba(151,151,151,0.27)"},children:(0,e.jsx)(Q.Z,(0,_.Z)((0,_.Z)({},n),{},{dataSource:f,pagination:!1,rowSelection:void 0}))}),(0,e.jsx)(r.Z,{span:12,children:(0,e.jsx)(Q.Z,(0,_.Z)((0,_.Z)({},n),{},{dataSource:R,pagination:!1,rowSelection:void 0}))})]}),(0,e.jsx)(h.Z,{style:{marginTop:"1.75rem"},children:(0,e.jsx)(r.Z,{span:24,children:(0,e.jsx)(P.Z,{align:"center",children:(0,e.jsx)(lt,{totalNum:i,pageSize:S,currentPage:A,onChange:function(p,Y){z(Y),(p-1)*Y>i?W(1):W(p),n.onChange&&n.onChange(p,Y)}})})})})]})},rt=st,ot=t(9238),it=t.n(ot),ct=function(n){return(0,e.jsx)(c.Z,(0,_.Z)((0,_.Z)({},n),{},{style:{color:n.color,width:n.width,height:n.height,borderColor:n.color},className:"".concat(it().button),children:n.children}))},F=ct,dt=t(49101),ut=t(88769),ht=t.n(ut),Pt=function(n){return(0,e.jsx)(c.Z,{onClick:n.onClick,icon:(0,e.jsx)(dt.Z,{}),size:"large",id:"".concat(ht().createBtn),children:n.children})},X=Pt,I=t(52940),mt=t(63891),vt=t(67412),$=t(37071),J="projectInfo",G=localStorage.getItem("basePath"),w=new mt.U(new vt.VK(G?{basePath:G}:void 0)),gt=function(n,l){var i=l==null?$.Z.getQueryVariable("projectId"):l;i||(v.default.error("projectId isn't passed in nor present in url!"),O.m8.push("/"));var u=localStorage.getItem(J);if(u){n==null||n.call(0,JSON.parse(u));return}w.get(i).then(function(o){o||(v.default.error("Cannot find project: ".concat(i,"!")),O.m8.push("/")),localStorage.setItem(J,JSON.stringify(o)),n==null||n.call(0,o)}).catch(function(o){$.Z.parseError(o,v.default,"Cannot find project: ".concat(i))})},jt=[{title:"ID",dataIndex:"projectId",key:"projectId",width:"4.5rem",align:"center",render:function(n){return(0,e.jsx)(e.Fragment,{children:n})}},{title:"Name",dataIndex:"name",key:"projectId"},{title:"Actions",key:"projectId",width:"15rem",align:"center",render:function(n,l){return(0,e.jsxs)(P.Z,{size:"middle",children:[(0,e.jsx)(F,{width:"4.375rem",height:"1.875rem",color:"rgba(241,162,0,1)",children:"Modify"}),(0,e.jsx)(F,{width:"4.375rem",height:"1.875rem",color:"rgba(0,100,248,1)",onClick:function(){console.log("mark",l),O.m8.push("/".concat(l.taskCategory.name,"?projectId=").concat(l.projectId))},children:"Mark"}),(0,e.jsx)(F,{width:"4.375rem",height:"1.875rem",color:"rgba(207,63,0,1)",children:"Delete"})]})}}],ft=function(){var n=j.useState([]),l=(0,d.Z)(n,2),i=l[0],u=l[1];return j.useEffect(function(){w.getAll().then(function(o){u(JSON.parse(JSON.stringify(o))),console.log(JSON.parse(JSON.stringify(o)))})},[]),i.length==0?(0,e.jsx)(h.Z,{style:{marginTop:20},children:(0,e.jsx)(r.Z,{span:24,children:(0,e.jsx)(C.Z,{title:"My Projects",children:(0,e.jsx)(X,{onClick:function(){O.m8.push("/project_creation")},children:"Create Project"})})})}):(0,e.jsx)(h.Z,{style:{marginTop:20},children:(0,e.jsx)(r.Z,{span:24,children:(0,e.jsx)(C.Z,{title:"My Projects",children:(0,e.jsx)(rt,{columns:jt,dataSource:i,showHeader:!1})})})})},xt=function(){return(0,e.jsxs)(g.Z,{children:[(0,e.jsx)(h.Z,{gutter:[20,20],children:(0,e.jsx)(r.Z,{span:24,children:(0,e.jsx)(X,{onClick:function(){O.m8.push("/project_creation")},children:"Create Project"})})}),(0,e.jsxs)(h.Z,{gutter:[20,20],style:{marginTop:20},children:[(0,e.jsx)(r.Z,{span:17,children:(0,e.jsx)(C.Z,{title:"Sample Project",style:{height:430},children:(0,e.jsxs)(h.Z,{children:[(0,e.jsx)(I.Z,{span:4,children:(0,e.jsx)(E.Z,{imgSrc:"./pics/classification.jpg",children:"Image Classification"})}),(0,e.jsx)(I.Z,{span:4,children:(0,e.jsx)(E.Z,{imgSrc:"./pics/object_detection.jpg",children:"Object Detection"})}),(0,e.jsx)(I.Z,{span:4,children:(0,e.jsx)(E.Z,{imgSrc:"./pics/instance_segmentation.jpg",children:"Instance Segmentation"})}),(0,e.jsx)(I.Z,{span:4,children:(0,e.jsx)(E.Z,{imgSrc:"./pics/semantic_segmentation.jpg",children:"Semantic Segmentation"})}),(0,e.jsx)(I.Z,{span:4,children:(0,e.jsx)(E.Z,{imgSrc:"./pics/keypoint_detection.jpg",children:"Keypoint Detection"})})]})})}),(0,e.jsx)(r.Z,{span:7,children:(0,e.jsx)(C.Z,{title:"Model Training Knowledge",style:{height:430},children:(0,e.jsxs)(P.Z,{direction:"vertical",style:{width:"100%"},size:10,children:[(0,e.jsx)(c.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"How to tran using paddleclas"}),(0,e.jsx)(c.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"How to tran using paddledet"}),(0,e.jsx)(c.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"How to tran using paddleseg"}),(0,e.jsx)(c.Z,{type:"primary",style:{height:"3.125rem"},block:!0,children:"How to tran using paddlex"})]})})})]}),ft()]})},Et=xt}}]);