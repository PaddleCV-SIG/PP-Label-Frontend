(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[333],{57560:function(l){l.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___147XP",toolBarButtonContainer:"toolBarButtonContainer___ZEvhK",toolBarButton:"toolBarButton___1s2Rh",buttonText:"buttonText___3NTCv",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___2Utx8",popover:"popover___3PRoi"}},52822:function(l){l.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},56131:function(l){l.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},56623:function(l){l.exports={listItem:"listItem___3P4zY",eye:"eye___13vRl",roundBall:"roundBall___3rXBh",popover:"popover___2bsOT"}},78677:function(l){l.exports={container:"container___G0FNe"}},80961:function(l){l.exports={toolbar:"toolbar___3vxli"}},82499:function(l){l.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},72869:function(l){l.exports={map:"map___92VPN",customControlIcon:"customControlIcon___3Ki2y"}},20474:function(l){l.exports={RSPop1:"RSPop1___vz5Me",RSPop2:"RSPop2___34pQA"}},2661:function(l){l.exports={toolbar:"toolbar___1o3he"}},93889:function(l){l.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___UtH8a",toolBarButtonContainer:"toolBarButtonContainer___1gFsH",toolBarButton:"toolBarButton___1Wqc1",buttonText:"buttonText___2zcKO",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AXHi"}},75513:function(l){l.exports={segment:"segment___3WmPw",mainStage:"mainStage___2kT1s",rightSideBar:"rightSideBar___11FX3"}},58967:function(l,P,e){"use strict";var q=e(20136),m=e(19181),I=e(77883),f=e(70507),d=e(57663),s=e(71577),B=e(2824),u=e(67294),F=e(61541),H=e(57560),ee=e.n(H),j=e(85893),K=1,n=20,ne=10;function z(Z){return Z?Z<=K?K:Z>=n?n:Z:ne}var J=function(t){var W=(0,u.useState)(z(t.size)),G=(0,B.Z)(W,2),N=G[0],te=G[1];return(0,j.jsxs)(m.Z,{overlayClassName:ee().popover,placement:"right",content:(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z,{type:"text",onClick:function(){var M,y=z(N-1);te(y),(M=t.onChange)===null||M===void 0||M.call(0,y)},children:"-"}),(0,j.jsx)(f.Z,{min:1,max:20,value:N,onChange:t.onChange,controls:!1,style:{textAlign:"center"}}),(0,j.jsx)(s.Z,{type:"text",onClick:function(){var M,y=z(N+1);te(y),(M=t.onChange)===null||M===void 0||M.call(0,y)},children:"+"})]}),trigger:t.active?"hover":"click",children:[" ",(0,j.jsx)(F.Z,{active:t.active,imgSrc:"./pics/buttons/brush.png",onClick:t.onClick,children:"Brush"})]})};P.Z=J},35475:function(l,P,e){"use strict";e.d(P,{Z:function(){return ge}});var q=e(54421),m=e(38272),I=e(57663),f=e(71577),d=e(2824),s=e(67294),B=e(56131),u=e.n(B),F=e(49111),H=e(19650),ee=e(11849),j=e(56623),K=e.n(j),n=e(20136),ne=e(19181),z=e(52822),J=e.n(z),Z=e(63144),t=e(85893),W=function(r){var h=(0,s.useState)(r.color||"#FFF"),x=(0,d.Z)(h,2),i=x[0],S=x[1];return(0,s.useEffect)(function(){S(r.color||"#FFF")},[r]),(0,t.jsx)(ne.Z,{getPopupContainer:function(C){return C.parentElement||document.body},overlayClassName:J().popover,openClassName:J().popoverOpenClassName,placement:"bottom",content:(0,t.jsx)(Z.xS,{disableAlpha:!0,color:i,onChange:function(C){S(C.hex)},onChangeComplete:r.onChange}),trigger:"click",children:(0,t.jsx)("div",{className:J().roundBall,style:{backgroundColor:i}})})},G=W,N=function(r){var h=(0,ee.Z)({},r.label),x=(0,s.useState)(h.invisible),i=(0,d.Z)(x,2),S=i[0],D=i[1],C=(0,t.jsx)(m.ZP.Item,{className:K().listItem,unselectable:"on",children:(0,t.jsxs)(H.Z,{align:"center",size:5,children:[(0,t.jsx)("a",{className:K().eye,style:{backgroundImage:S?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){D(!S),r.onLabelModify(h)}})," ",h.name,(0,t.jsx)(G,{color:h.color,onChange:function(R){h.color=R.hex,r.onLabelModify(h)}})]})});return C},te=N,X=e(71194),M=e(48889),y=e(47673),ve=e(24044),fe=e(9715),Y=e(93766),se=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],he=function(r){var h,x,i=(0,s.useState)(((h=r.defaultLabel)===null||h===void 0?void 0:h.color)||se[r.order||0]),S=(0,d.Z)(i,2),D=S[0],C=S[1];(0,s.useEffect)(function(){var E;C(((E=r.defaultLabel)===null||E===void 0?void 0:E.color)||se[r.order||0])},[r]);var _=Y.Z.useForm(),R=(0,d.Z)(_,1),$=R[0];return(0,t.jsx)(M.Z,{title:"Add Label",visible:r.visible,onCancel:r.onCancel,footer:null,children:(0,t.jsxs)(Y.Z,{form:$,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(x=r.defaultLabel)===null||x===void 0?void 0:x.name},onFinish:function(L){var k={name:L.labelname,color:D};r.onLabelAdd(k),$.resetFields()},autoComplete:"off",children:[(0,t.jsx)(Y.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,t.jsx)(ve.Z,{})}),(0,t.jsx)(Y.Z.Item,{label:"Select Color",name:"color",children:(0,t.jsx)(G,{color:D,onChange:function(L){C(L.hex)}})}),(0,t.jsx)(Y.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,t.jsxs)(H.Z,{children:[(0,t.jsx)(f.Z,{onClick:function(){var L;(L=r.onCancel)===null||L===void 0||L.call(0),$.resetFields()},children:"\u53D6\u6D88"}),(0,t.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},b=he,pe=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],Q=function(r){var h=(0,s.useState)(pe),x=(0,d.Z)(h,2),i=x[0],S=x[1],D=(0,s.useState)(!1),C=(0,d.Z)(D,2),_=C[0],R=C[1],$=(0,s.useState)(""),E=(0,d.Z)($,2),L=E[0],k=E[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.ZP,{className:u().labelList,size:"large",header:(0,t.jsx)("div",{className:u().listHeader,children:"Label List"}),footer:(0,t.jsx)("div",{children:(0,t.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){k(""),R(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:i,renderItem:function(le){return(0,t.jsx)(te,{label:le,onLabelDelete:r.onLabelDelete,onLabelModify:r.onLabelModify})}}),(0,t.jsx)(b,{order:i.length,visible:_,defaultLabelName:L,onLabelAdd:function(le){i.push(le),S(i),R(!1)},onCancel:function(){R(!1)}})]})},ge=Q},8088:function(l,P,e){"use strict";var q=e(67294),m=e(78677),I=e.n(m),f=e(85893),d=function(B){return(0,f.jsx)("div",{className:"".concat(I().container," ").concat(B.className),children:B.children})};P.Z=d},44434:function(l,P,e){"use strict";var q=e(67294),m=e(80961),I=e.n(m),f=e(85893),d=function(B){return(0,f.jsx)("div",{className:I().toolbar,children:B.children})};P.Z=d},61541:function(l,P,e){"use strict";var q=e(49111),m=e(19650),I=e(67294),f=e(82499),d=e.n(f),s=e(85893),B=function(F){return(0,s.jsx)("div",{unselectable:"on",className:"".concat(d().toolBarButtonContainerWrapper," ").concat(F.active&&d().toolBarButtonContainerWrapperActive),onClick:F.onClick,children:(0,s.jsx)(m.Z,{align:"center",className:d().toolBarButtonContainer,size:0,children:(0,s.jsxs)(m.Z,{align:"center",direction:"vertical",className:d().toolBarButton,size:0,children:[(0,s.jsx)("img",{src:F.imgSrc}),(0,s.jsx)("div",{className:d().buttonText,children:F.children})]})})})};P.Z=B},6779:function(l,P,e){"use strict";e.r(P),e.d(P,{default:function(){return Se}});var q=e(20136),m=e(19181),I=e(2824),f=e(67294),d=e(75513),s=e.n(d),B=e(8088),u=e(61541),F=e(44434),H=e(58967),ee=e(35475),j=e(2661),K=e.n(j),n=e(85893),ne=function(p){return(0,n.jsx)("div",{className:K().toolbar,children:p.children})},z=ne,J=e(49111),Z=e(19650),t=e(93889),W=e.n(t),G=function(p){return(0,n.jsx)("div",{unselectable:"on",className:"".concat(W().toolBarButtonContainerWrapper," ").concat(p.active&&W().toolBarButtonContainerWrapperActive),onClick:p.onClick,children:(0,n.jsx)(Z.Z,{align:"center",className:W().toolBarButtonContainer,size:0,children:(0,n.jsxs)(Z.Z,{align:"center",direction:"vertical",className:W().toolBarButton,size:0,children:[(0,n.jsx)("img",{src:p.imgSrc}),(0,n.jsx)("div",{className:W().buttonText,children:p.children})]})})})},N=G,te=e(47673),X=e(24044),M=e(13062),y=e(71230),ve=e(59250),fe=e(13013),Y=e(57663),se=e(71577),he=e(89032),b=e(15746),pe=e(30887),Q=e(54689),ge=e(34792),oe=e(48086),r=e(89366),h=e(57254),x=e(20474),i=e.n(x);function S(V){oe.default.info("Click on menu item."),console.log("click",V)}var D=(0,n.jsxs)(Q.Z,{onClick:S,children:[(0,n.jsx)(Q.Z.Item,{icon:(0,n.jsx)(r.Z,{}),children:"1st menu item"},"1"),(0,n.jsx)(Q.Z.Item,{icon:(0,n.jsx)(r.Z,{}),children:"2nd menu item"},"2"),(0,n.jsx)(Q.Z.Item,{icon:(0,n.jsx)(r.Z,{}),children:"3rd menu item"},"3")]}),C=function(){return(0,n.jsxs)("div",{children:[(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(b.Z,{span:12,className:i().RSPop1,children:(0,n.jsx)("span",{children:"PD parameter"})}),(0,n.jsx)(b.Z,{span:12,className:i().RSPop2,children:(0,n.jsx)(fe.Z,{overlay:D,children:(0,n.jsxs)(se.Z,{style:{width:"100%"},children:["Dropdown ",(0,n.jsx)(h.Z,{})]})})})]}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(b.Z,{span:12,className:i().RSPop1,children:(0,n.jsx)("span",{children:"Simplified distance"})}),(0,n.jsx)(b.Z,{span:12,className:i().RSPop2,children:(0,n.jsx)(X.Z,{placeholder:"Basic usage"})})]}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(b.Z,{span:12,className:i().RSPop1,children:(0,n.jsx)("span",{children:"Simplified angle"})}),(0,n.jsx)(b.Z,{span:12,className:i().RSPop2,children:(0,n.jsx)(X.Z,{placeholder:"Basic usage"})})]}),(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(b.Z,{span:12,className:i().RSPop1,children:(0,n.jsx)("span",{children:"Threshold of building simplification "})}),(0,n.jsx)(b.Z,{span:12,className:i().RSPop2,children:(0,n.jsx)(X.Z,{placeholder:"Basic usage"})})]})]})},_=C,R=e(11849),$=e(93224),E=e(41004),L=e(72869),k=e.n(L),ie=e(74607),le=function(p){var w=p.children,g=p.leafletMapRef,T=(0,$.Z)(p,["children","leafletMapRef"]);return f.useEffect(function(){if(g.current){var c=g.current.leafletElement;c.pm.addControls({drawMarker:!1,drawCircle:!1,drawCircleMarker:!1,drawPolyline:!0,drawRectangle:!0,drawPolygon:!0,editMode:!0,dragMode:!0,cutPolygon:!0,rotateMode:!1,removalMode:!0}),c.pm.setGlobalOptions({pmIgnore:!1}),c.pm.Toolbar.createCustomControl({name:"StoreShapes",title:"Store all shapes",block:"custom",className:k().customControlIcon,toggle:!1,afterClick:function(){var U=JSON.stringify(c.pm.getGeomanDrawLayers(!0).toGeoJSON()),re="data.geojson",O=document.createElement("a");O.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(U)),O.setAttribute("download",re),O.style.display="none",document.body.appendChild(O),O.click(),console.log(U)}}),c.on("pm:create",function(A){p.onShapeCreate(A)}),c.on("pm:edit",function(A){p.onShapeEdit(A)})}},[]),(0,n.jsx)(E.Z,(0,R.Z)((0,R.Z)({ref:g},T),{},{children:w}))},xe=le,ae=e(88014),ce=e(3263),de={lat:0,lng:0,zoom:2},Ce=function(p){var w=[de.lat,de.lng],g=f.useState([]),T=(0,I.Z)(g,2),c=T[0],A=T[1],U=function(o){O(o.layer),o.layer.bindPopup("Label: "+o.layer._uid).openPopup(),ue(o.layer)},re=function(o){me(o.layer),console.log(o)};function O(a){var o=prompt("Please enter a Unique Id");if(o)if(c[o]){alert("Id already used, add another one"),O(a);return}else a._uid=o,c[o]=a,A(c);else{alert("Nothing entered, layer deleted ..."),a.remove();return}}function ue(a){var o=a._uid,v=a.toGeoJSON();v.properties={LabelID:Number(o)},console.log("Store Layer on DB. Id:"+o,v),console.log(JSON.stringify(v))}function me(a){var o=a._uid,v=a.toGeoJSON();console.log("Update Layer on DB. Id:"+o,v)}return(0,n.jsx)(xe,{leafletMapRef:p.leafletMapRef,className:k().map,center:w,zoom:de.zoom,onShapeCreate:U,onShapeEdit:re,children:(0,n.jsxs)(ae.Z,{position:"topright",children:[(0,n.jsx)(ae.Z.BaseLayer,{checked:!0,name:"OpenStreetMap.Mapnik",children:(0,n.jsx)(ce.Z,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),(0,n.jsx)(ae.Z.BaseLayer,{name:"TianDiTu.Satellite",children:(0,n.jsx)(ce.Z,{attribution:"\xA9 TianDiTu",url:"https://t2.tianditu.gov.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a"})}),(0,n.jsx)(ae.Z.BaseLayer,{name:"Esri.WorldImagery",children:(0,n.jsx)(ce.Z,{attribution:"Tiles \xA9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})}),(0,n.jsx)(ae.Z.Overlay,{name:"Annotion.TianDiTu",children:(0,n.jsx)(ce.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}&tk=174705aebfe31b79b3587279e211cb9a"})})]})})},Pe=Ce,Be=function(){var p=(0,f.useState)(void 0),w=(0,I.Z)(p,2),g=w[0],T=w[1],c=f.useRef(null);if(g){var A,U;(A=c.current)===null||A===void 0||A.leafletElement.pm.enableDraw(g),console.log("drawTools: ",g),(U=c.current)===null||U===void 0||U.leafletElement.pm.setPathOptions({color:"orange",fillColor:"green",fillOpacity:.4})}var re=function(){var o,v;console.log((o=c.current)===null||o===void 0?void 0:o.leafletElement.pm.Draw),(v=c.current)===null||v===void 0||v.leafletElement.pm.Draw.Polygon._removeLastVertex()},O=function(){var o,v;console.log((o=c.current)===null||o===void 0?void 0:o.leafletElement.pm.Draw),(v=c.current)===null||v===void 0||v.leafletElement.pm.toggleGlobalDragMode()},ue=function(){var o,v;console.log((o=c.current)===null||o===void 0?void 0:o.leafletElement.pm.Draw),(v=c.current)===null||v===void 0||v.leafletElement.pm.Draw.Polygon._finishShape()},me=function(){var o;(o=c.current)===null||o===void 0||o.leafletElement.pm.enableGlobalRemovalMode()};return(0,n.jsxs)(B.Z,{className:s().segment,children:[(0,n.jsxs)(F.Z,{children:[(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,n.jsx)(m.Z,{placement:"rightTop",title:"Polygon Edit",defaultVisible:!0,content:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{onClick:function(){re()},children:"Remove Last Vertex"}),(0,n.jsx)("button",{onClick:function(){ue()},children:"Finish"})]}),trigger:g=="Polygon"?"hover":"click",children:(0,n.jsx)(u.Z,{active:g=="Polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){T("Polygon")},children:"Polygon"})}),(0,n.jsx)(H.Z,{active:g=="brush",onClick:function(){T("brush")},onChange:function(o){console.log(o)}}),(0,n.jsxs)(m.Z,{placement:"rightTop",title:"title",content:"content",trigger:g=="rubber"?"hover":"click",children:[" ",(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){me()},children:"Rubber"})]}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){return O()},children:"Move"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,n.jsx)(u.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,n.jsx)("div",{className:s().mainStage,children:(0,n.jsx)(Pe,{leafletMapRef:c})}),(0,n.jsxs)(z,{children:[(0,n.jsxs)(m.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of boundary simplification",content:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(_,{})}),trigger:g=="boundry"?"click":"hover",children:[" ",(0,n.jsx)(N,{imgSrc:"./pics/buttons/border_simplify.png",onClick:function(){T("boundry")},children:(0,n.jsx)("h2",{children:"Boundary"})})]}),(0,n.jsxs)(m.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of remote sensing",content:"content",trigger:g=="colorgun"?"click":"hover",children:[" ",(0,n.jsx)(N,{imgSrc:"./pics/buttons/remote_sensing_setting.png",onClick:function(){T("colorgun")},children:(0,n.jsx)("h2",{children:"Remote Sensing"})})]}),(0,n.jsxs)(m.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Switch grids",content:"content",trigger:g=="grid"?"click":"hover",children:[" ",(0,n.jsx)(N,{imgSrc:"./pics/buttons/switch_grid.png",onClick:function(){T("grid")},children:(0,n.jsx)("h2",{children:"Grids"})})]})]}),(0,n.jsx)("div",{className:s().rightSideBar,children:(0,n.jsx)(ee.Z,{onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}})})]})},Se=Be}}]);
