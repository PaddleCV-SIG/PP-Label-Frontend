(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[333],{85024:function(a){a.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(a){a.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},52822:function(a){a.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},5882:function(a){a.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",listItemActive:"listItemActive___3FRb7"}},56131:function(a){a.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(a){a.exports={container:"container___G0FNe"}},80961:function(a){a.exports={toolbar:"toolbar___3vxli"}},82499:function(a){a.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},72869:function(a){a.exports={map:"map___92VPN",customControlIcon:"customControlIcon___3Ki2y"}},20474:function(a){a.exports={RSPop1:"RSPop1___vz5Me",RSPop2:"RSPop2___34pQA"}},55252:function(a){a.exports={RSPop1:"RSPop1___17x8k",RSPop2:"RSPop2___27kK5"}},2661:function(a){a.exports={toolbar:"toolbar___1o3he"}},93889:function(a){a.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___UtH8a",toolBarButtonContainer:"toolBarButtonContainer___1gFsH",toolBarButton:"toolBarButton___1Wqc1",buttonText:"buttonText___2zcKO",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AXHi"}},75513:function(a){a.exports={segment:"segment___3WmPw",mainStage:"mainStage___2kT1s",rightSideBar:"rightSideBar___11FX3",determinOutline:"determinOutline___1g1YI"}},14836:function(a,B,n){"use strict";n.d(B,{Z:function(){return le}});var q=n(54421),v=n(38272),W=n(57663),f=n(71577),d=n(67294),s=n(56159),L=n.n(s),u=n(49111),P=n(19650),A=n(2824),N=n(11849),O=n(85024),p=n.n(O),r=n(63097),l=n(85893),k=function(x){var E=(0,N.Z)({},x.annotation),M=(0,d.useState)(E.invisible),g=(0,A.Z)(M,2),ee=g[0],H=g[1];(0,d.useEffect)(function(){H(x.annotation.invisible)},[x.annotation.invisible]);var ie=(0,l.jsxs)(v.ZP.Item,{className:"".concat(p().listItem," ").concat(x.active?p().listItemActive:""),unselectable:"on",onClick:function(){x.onClick(E)},children:[(0,l.jsxs)(P.Z,{align:"center",size:5,children:[(0,l.jsx)("a",{className:p().eye,style:{backgroundImage:ee?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){H(!ee),x.onAnnotationModify(E)}})," ",(0,l.jsx)("span",{className:p().annotationId,children:E.annotationId}),(0,l.jsx)("span",{className:p().labelName,children:E.label.name}),(0,l.jsx)(r.Z,{color:E.label.color})]}),(0,l.jsx)("a",{className:p().delete,onClick:function(){E.delete=!0,x.onAnnotationDelete(E)}})]});return ie},U=k,ae=function(x){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(v.ZP,{className:L().labelList,size:"large",header:(0,l.jsx)("div",{className:L().listHeader,children:"Annotation List"}),bordered:!0,dataSource:x.annotations,renderItem:function(M){var g;return(0,l.jsx)(U,{onClick:x.onAnnotationSelect,annotation:M,active:M.annotationId==((g=x.selectedAnnotation)===null||g===void 0?void 0:g.annotationId),onAnnotationDelete:x.onAnnotationDelete,onAnnotationModify:x.onAnnotationModify})},footer:(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){x.onAnnotationSelect(void 0)},block:!0,children:"Add Annotation"})})})})},le=ae},63097:function(a,B,n){"use strict";var q=n(20136),v=n(55241),W=n(2824),f=n(67294),d=n(52822),s=n.n(d),L=n(63144),u=n(85893),P=function(N){var O=(0,f.useState)(N.color||"#FFF"),p=(0,W.Z)(O,2),r=p[0],l=p[1];return(0,f.useEffect)(function(){l(N.color||"#FFF")},[N]),N.changeable?(0,u.jsx)(v.Z,{getPopupContainer:function(U){return U.parentElement||document.body},overlayClassName:s().popover,openClassName:s().popoverOpenClassName,placement:"bottom",content:(0,u.jsx)(L.xS,{disableAlpha:!0,color:r,onChange:function(U){l(U.hex)},onChangeComplete:N.onChange}),trigger:"click",children:(0,u.jsx)("div",{className:s().roundBall,style:{backgroundColor:r}})}):(0,u.jsx)("div",{className:s().roundBall,style:{backgroundColor:r}})};B.Z=P},5041:function(a,B,n){"use strict";n.d(B,{Z:function(){return xe}});var q=n(54421),v=n(38272),W=n(57663),f=n(71577),d=n(2824),s=n(67294),L=n(56131),u=n.n(L),P=n(49111),A=n(19650),N=n(11849),O=n(5882),p=n.n(O),r=n(63097),l=n(85893),k=function(c){var m=(0,N.Z)({},c.label),K=(0,s.useState)(m.invisible),i=(0,d.Z)(K,2),V=i[0],C=i[1],$=(0,l.jsx)(v.ZP.Item,{className:"".concat(p().listItem," ").concat(c.active?p().listItemActive:""),unselectable:"on",onClick:function(){c.onClick(m)},children:(0,l.jsxs)(A.Z,{align:"center",size:5,children:[(0,l.jsx)("a",{className:p().eye,style:{backgroundImage:V?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){C(!V),c.onLabelModify(m)}})," ",m.name,(0,l.jsx)(r.Z,{color:m.color,changeable:!0,onChange:function(b){m.color=b.hex,c.onLabelModify(m)}})]})});return $},U=k,ae=n(71194),le=n(50146),e=n(47673),x=n(24044),E=n(9715),M=n(93766),g=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],ee=function(c){var m,K,i=(0,s.useState)(((m=c.defaultLabel)===null||m===void 0?void 0:m.color)||g[c.order||0]),V=(0,d.Z)(i,2),C=V[0],$=V[1];(0,s.useEffect)(function(){var I;$(((I=c.defaultLabel)===null||I===void 0?void 0:I.color)||g[c.order||0])},[c]);var z=M.Z.useForm(),b=(0,d.Z)(z,1),S=b[0];return(0,l.jsx)(le.Z,{title:"Add Label",visible:c.visible,onCancel:c.onCancel,footer:null,children:(0,l.jsxs)(M.Z,{form:S,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(K=c.defaultLabel)===null||K===void 0?void 0:K.name},onFinish:function(h){var de={name:h.labelname,color:C};c.onLabelAdd(de),S.resetFields()},autoComplete:"off",children:[(0,l.jsx)(M.Z.Item,{label:"Label Name",name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,l.jsx)(x.Z,{})}),(0,l.jsx)(M.Z.Item,{label:"Select Color",name:"color",children:(0,l.jsx)(r.Z,{color:C,onChange:function(h){$(h.hex)}})}),(0,l.jsx)(M.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,l.jsxs)(A.Z,{children:[(0,l.jsx)(f.Z,{onClick:function(){var h;(h=c.onCancel)===null||h===void 0||h.call(0),S.resetFields()},children:"\u53D6\u6D88"}),(0,l.jsx)(f.Z,{type:"primary",htmlType:"submit",children:"\u786E\u5B9A"})]})})]})})},H=ee,ie=[{color:"#FF0000",name:"Label 1"},{color:"#008000",name:"Label 2"}],J=function(c){var m=(0,s.useState)(ie),K=(0,d.Z)(m,2),i=K[0],V=K[1],C=(0,s.useState)(!1),$=(0,d.Z)(C,2),z=$[0],b=$[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.ZP,{className:u().labelList,size:"large",header:(0,l.jsx)("div",{className:u().listHeader,children:"Label List"}),footer:(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){b(!0)},block:!0,children:"Add Label"})}),bordered:!0,dataSource:i,renderItem:function(I){var h;return(0,l.jsx)(U,{onClick:c.onLabelSelect,label:I,active:I.name==((h=c.selectedLabel)===null||h===void 0?void 0:h.name),onLabelDelete:c.onLabelDelete,onLabelModify:c.onLabelModify})}}),(0,l.jsx)(H,{order:i.length,visible:z,onLabelAdd:function(I){i.push(I),V(i),b(!1)},onCancel:function(){b(!1)}})]})},xe=J},8088:function(a,B,n){"use strict";var q=n(67294),v=n(78677),W=n.n(v),f=n(85893),d=function(L){return(0,f.jsx)("div",{className:"".concat(W().container," ").concat(L.className),children:L.children})};B.Z=d},44434:function(a,B,n){"use strict";var q=n(67294),v=n(80961),W=n.n(v),f=n(85893),d=function(L){return(0,f.jsx)("div",{className:W().toolbar,children:L.children})};B.Z=d},61541:function(a,B,n){"use strict";var q=n(49111),v=n(19650),W=n(67294),f=n(82499),d=n.n(f),s=n(85893),L=function(P){return(0,s.jsx)("div",{unselectable:"on",className:"".concat(d().toolBarButtonContainerWrapper," ").concat(P.active&&d().toolBarButtonContainerWrapperActive),onClick:P.onClick,children:(0,s.jsx)(v.Z,{align:"center",className:d().toolBarButtonContainer,size:0,children:(0,s.jsxs)(v.Z,{align:"center",direction:"vertical",className:d().toolBarButton,size:0,children:[(0,s.jsx)("img",{src:P.imgSrc}),(0,s.jsx)("div",{className:d().buttonText,children:P.children})]})})})};B.Z=L},15373:function(a,B,n){"use strict";n.r(B),n.d(B,{default:function(){return Ue}});var q=n(20136),v=n(55241),W=n(49111),f=n(19650),d=n(62350),s=n(75443),L=n(57663),u=n(71577),P=n(2824),A=n(67294),N=n(75513),O=n.n(N),p=n(8088),r=n(61541),l=n(44434),k=n(5041),U=n(14836),ae=n(2661),le=n.n(ae),e=n(85893),x=function(j){return(0,e.jsx)("div",{className:le().toolbar,children:j.children})},E=x,M=n(93889),g=n.n(M),ee=function(j){return(0,e.jsx)("div",{unselectable:"on",className:"".concat(g().toolBarButtonContainerWrapper," ").concat(j.active&&g().toolBarButtonContainerWrapperActive),onClick:j.onClick,children:(0,e.jsx)(f.Z,{align:"center",className:g().toolBarButtonContainer,size:0,children:(0,e.jsxs)(f.Z,{align:"center",direction:"vertical",className:g().toolBarButton,size:0,children:[(0,e.jsx)("img",{src:j.imgSrc}),(0,e.jsx)("div",{className:g().buttonText,children:j.children})]})})})},H=ee,ie=n(47673),J=n(24044),xe=n(13062),G=n(71230),c=n(59250),m=n(13013),K=n(89032),i=n(15746),V=n(30887),C=n(54689),$=n(34792),z=n(48086),b=n(89366),S=n(57254),I=n(20474),h=n.n(I);function de(T){z.default.info("Click on menu item."),console.log("click",T)}var Ze=(0,e.jsxs)(C.Z,{onClick:de,children:[(0,e.jsx)(C.Z.Item,{icon:(0,e.jsx)(b.Z,{}),children:"1st menu item"},"1"),(0,e.jsx)(C.Z.Item,{icon:(0,e.jsx)(b.Z,{}),children:"2nd menu item"},"2"),(0,e.jsx)(C.Z.Item,{icon:(0,e.jsx)(b.Z,{}),children:"3rd menu item"},"3")]}),ye=function(){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(i.Z,{span:12,className:h().RSPop1,children:(0,e.jsx)("span",{children:"PD parameter"})}),(0,e.jsx)(i.Z,{span:12,className:h().RSPop2,children:(0,e.jsx)(m.Z,{overlay:Ze,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Dropdown ",(0,e.jsx)(S.Z,{})]})})})]}),(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(i.Z,{span:12,className:h().RSPop1,children:(0,e.jsx)("span",{children:"Simplified distance"})}),(0,e.jsx)(i.Z,{span:12,className:h().RSPop2,children:(0,e.jsx)(J.Z,{placeholder:"Basic usage"})})]}),(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(i.Z,{span:12,className:h().RSPop1,children:(0,e.jsx)("span",{children:"Simplified angle"})}),(0,e.jsx)(i.Z,{span:12,className:h().RSPop2,children:(0,e.jsx)(J.Z,{placeholder:"Basic usage"})})]}),(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(i.Z,{span:12,className:h().RSPop1,children:(0,e.jsx)("span",{children:"Threshold of building simplification "})}),(0,e.jsx)(i.Z,{span:12,className:h().RSPop2,children:(0,e.jsx)(J.Z,{placeholder:"Basic usage"})})]})]})},Be=ye,sn=n(98858),Y=n(4914),Le=n(55252),R=n.n(Le);function be(T){z.default.info("Click on menu item."),console.log("click",T)}var ne=(0,e.jsxs)(C.Z,{onClick:be,children:[(0,e.jsx)(C.Z.Item,{icon:(0,e.jsx)(b.Z,{}),children:"band_1"},"1"),(0,e.jsx)(C.Z.Item,{icon:(0,e.jsx)(b.Z,{}),children:"band_2"},"2"),(0,e.jsx)(C.Z.Item,{icon:(0,e.jsx)(b.Z,{}),children:"band_3"},"3")]}),Ae=function(){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(i.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"R"})}),(0,e.jsx)(i.Z,{className:R().RSPop2,children:(0,e.jsx)(m.Z,{overlay:ne,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(S.Z,{})]})})}),(0,e.jsx)(i.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"G"})}),(0,e.jsx)(i.Z,{className:R().RSPop2,children:(0,e.jsx)(m.Z,{overlay:ne,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(S.Z,{})]})})}),(0,e.jsx)(i.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"B"})}),(0,e.jsx)(i.Z,{className:R().RSPop2,children:(0,e.jsx)(m.Z,{overlay:ne,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(S.Z,{})]})})})]}),(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(i.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"R"})}),(0,e.jsx)(i.Z,{className:R().RSPop2,children:(0,e.jsx)(m.Z,{overlay:ne,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(S.Z,{})]})})}),(0,e.jsx)(i.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"G"})}),(0,e.jsx)(i.Z,{className:R().RSPop2,children:(0,e.jsx)(m.Z,{overlay:ne,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(S.Z,{})]})})}),(0,e.jsx)(i.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"B"})}),(0,e.jsx)(i.Z,{className:R().RSPop2,children:(0,e.jsx)(m.Z,{overlay:ne,children:(0,e.jsxs)(u.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(S.Z,{})]})})})]}),(0,e.jsxs)(Y.Z,{title:"Data source information",column:1,bordered:!0,children:[(0,e.jsx)(Y.Z.Item,{label:"FileName",children:"A/XXX.tif B/XXX.tf"}),(0,e.jsx)(Y.Z.Item,{label:"Row",children:"1234"}),(0,e.jsx)(Y.Z.Item,{label:"Column",children:"897"}),(0,e.jsx)(Y.Z.Item,{label:"Bands",children:"7 7"}),(0,e.jsx)(Y.Z.Item,{label:"DataType",children:"UInt16"}),(0,e.jsx)(Y.Z.Item,{label:"EPSG",children:"7030"}),(0,e.jsx)(Y.Z.Item,{label:"Unit",children:"m"})]})]})},Ee=Ae,je=n(11849),Ie=n(93224),Me=n(41004),Re=n(72869),Pe=n.n(Re),rn=n(74607),De=function(j){var te=j.children,F=j.leafletMapRef,oe=(0,Ie.Z)(j,["children","leafletMapRef"]);return A.useEffect(function(){if(F.current){var Q=F.current.leafletElement;Q.pm.addControls({drawMarker:!1,drawCircle:!1,drawCircleMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!1,editMode:!1,dragMode:!1,cutPolygon:!0,rotateMode:!1,removalMode:!1}),Q.pm.setGlobalOptions({pmIgnore:!1}),Q.pm.Toolbar.createCustomControl({name:"StoreShapes",title:"Store all shapes",block:"custom",className:Pe().customControlIcon,toggle:!1,afterClick:function(){var ce=JSON.stringify(Q.pm.getGeomanDrawLayers(!0).toGeoJSON()),me="data.geojson",_=document.createElement("a");_.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(ce)),_.setAttribute("download",me),_.style.display="none",document.body.appendChild(_),_.click(),console.log(ce)}}),Q.on("pm:create",function(w){j.onShapeCreate(w)}),Q.on("pm:edit",function(w){j.onShapeEdit(w)})}},[]),(0,e.jsx)(Me.Z,(0,je.Z)((0,je.Z)({ref:F},oe),{},{children:te}))},Ne=De,se=n(88014),Oe=n(16072),re=n(18836),ue={lat:0,lng:0,zoom:2},Te=function(j){var te=[ue.lat,ue.lng];return(0,e.jsx)(Ne,{leafletMapRef:j.leafletMapRef,className:Pe().map,center:te,zoom:ue.zoom,onShapeCreate:j.onShapeCreate,onShapeEdit:j.onShapeEdit,children:(0,e.jsxs)(se.Z,{position:"topright",children:[(0,e.jsx)(se.Z.BaseLayer,{checked:!0,name:"TianDiTu.Vector",children:(0,e.jsxs)(Oe.Z,{attribution:'\xA9 <a href="https://www.tianditu.gov.cn/">TianDiTu</a> GS(2021)3715',children:[(0,e.jsx)(re.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"}),(0,e.jsx)(re.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"})]})}),(0,e.jsx)(se.Z.BaseLayer,{name:"OpenStreetMap.Mapnik",children:(0,e.jsx)(re.Z,{attribution:'\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"})}),(0,e.jsx)(se.Z.Overlay,{name:"Esri.WorldImagery",children:(0,e.jsx)(re.Z,{attribution:"Tiles \xA9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})})]})})},Fe=Te,We=function(){var j=(0,A.useState)(void 0),te=(0,P.Z)(j,2),F=te[0],oe=te[1],Q=(0,A.useState)(),w=(0,P.Z)(Q,2),ce=w[0],me=w[1],_=(0,A.useState)(),pe=(0,P.Z)(_,2),Ge=pe[0],Ke=pe[1],ze=(0,A.useState)(!1),ge=(0,P.Z)(ze,2),Xe=ge[0],X=ge[1],Z=A.useRef(null),D=function(){var t,y=(t=Z.current)===null||t===void 0?void 0:t.leafletElement.pm.globalDrawModeEnabled();console.log(y)};function He(o){if(X(!0),o){var t,y;(t=Z.current)===null||t===void 0||t.leafletElement.pm.enableDraw(o),(y=Z.current)===null||y===void 0||y.leafletElement.pm.setPathOptions({color:"orange",fillColor:"green",fillOpacity:.4}),D()}else{var fe;(fe=Z.current)===null||fe===void 0||fe.leafletElement.pm.disableDraw(o),X(!1),D()}}var Je=function(t){var y;(y=Z.current)===null||y===void 0||y.leafletElement.pm.disableDraw(t),X(!1),D()},ve=function(){var t;return(t=Z.current)===null||t===void 0?void 0:t.leafletElement.pm.Draw.getActiveShape()},Ve=function(){if(ve()=="Polygon"){var t;(t=Z.current)===null||t===void 0||t.leafletElement.pm.Draw.Polygon._removeLastVertex(),D()}else D(),X(!1)},$e=function(){var t;(t=Z.current)===null||t===void 0||t.leafletElement.pm.toggleGlobalDragMode(),D()},Ye=function(){if(ve()=="Polygon"){var t;(t=Z.current)===null||t===void 0||t.leafletElement.pm.Draw.Polygon._finishShape(),D(),X(!1)}else D(),X(!1)},Qe=function(){var t;(t=Z.current)===null||t===void 0||t.leafletElement.pm.enableGlobalRemovalMode(),D()},ke=function(){var t;(t=Z.current)===null||t===void 0||t.leafletElement.pm.toggleGlobalEditMode(),D(),X(!1)},we=function(){var t;console.log((t=Z.current)===null||t===void 0?void 0:t.leafletElement.pm.getGeomanDrawLayers(!0)),X(!1)},_e=A.useState([]),Ce=(0,P.Z)(_e,2),he=Ce[0],qe=Ce[1],en=function(t){Se(t.layer),t.layer.bindPopup("Label: "+t.layer._uid).openPopup(),X(!1),tn(t.layer)},nn=function(t){on(t.layer),console.log(t)};function Se(o){var t=prompt("Please enter a Unique Id");if(t)if(he[t]){alert("Id already used, add another one"),Se(o);return}else o._uid=t,he[t]=o,qe(he);else{alert("Nothing entered, layer deleted ..."),o.remove();return}}function tn(o){var t=o._uid,y=o.toGeoJSON();y.properties={LabelID:Number(t)},console.log("Store Layer on DB. Id:"+t,y),console.log(JSON.stringify(y))}function on(o){var t=o._uid,y=o.toGeoJSON();console.log("Update Layer on DB. Id:"+t,y)}var ln=function(){var t;(t=Z.current)===null||t===void 0||t.leafletElement.zoomIn(),D()},an=function(){var t;(t=Z.current)===null||t===void 0||t.leafletElement.zoomOut(),D()};return(0,e.jsxs)(p.Z,{className:O().segment,children:[(0,e.jsxs)(l.Z,{children:[(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,e.jsx)(v.Z,{placement:"rightTop",visible:Xe,content:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(f.Z,{children:[(0,e.jsx)(u.Z,{type:"primary",onClick:function(){Ye()},children:"Finish"}),(0,e.jsx)(u.Z,{type:"primary",onClick:function(){Ve()},children:"Remove Last Vertex"}),(0,e.jsx)(s.Z,{title:"Are you sure cancel this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(u.Z,{type:"primary",onClick:function(){Je(ve())},children:"Cancel"})})]})}),trigger:F=="Polygon"?"hover":"click",children:(0,e.jsx)(r.Z,{active:F=="Polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){oe("Polygon"),He("Polygon")},children:"Polygon"})}),(0,e.jsx)(r.Z,{onClick:function(){ke()},imgSrc:"./pics/buttons/brush.png",children:"Edit"}),(0,e.jsxs)(v.Z,{placement:"rightTop",title:"title",content:"content",trigger:F=="rubber"?"hover":"click",children:[" ",(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){Qe()},children:"Rubber"})]}),(0,e.jsx)(r.Z,{onClick:function(){ln()},imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,e.jsx)(r.Z,{onClick:function(){an()},imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,e.jsx)(r.Z,{onClick:function(){we()},imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){return $e()},children:"Move"}),(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,e.jsx)(r.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsx)("div",{className:O().mainStage,children:(0,e.jsx)(Fe,{leafletMapRef:Z,onShapeCreate:en,onShapeEdit:nn})}),(0,e.jsxs)(E,{children:[(0,e.jsxs)(v.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of boundary simplification",content:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Be,{})}),trigger:F=="boundry"?"click":"hover",children:[" ",(0,e.jsx)(H,{imgSrc:"./pics/buttons/border_simplify.png",onClick:function(){oe("boundry")},children:(0,e.jsx)("h2",{children:"Boundary"})})]}),(0,e.jsxs)(v.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of remote sensing",content:(0,e.jsx)(e.Fragment,{children:(0,e.jsx)(Ee,{})}),trigger:F=="colorgun"?"click":"hover",children:[" ",(0,e.jsx)(H,{imgSrc:"./pics/buttons/remote_sensing_setting.png",onClick:function(){oe("colorgun")},children:(0,e.jsx)("h2",{children:"Remote Sensing"})})]}),(0,e.jsxs)(v.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Switch grids",content:"content",trigger:F=="grid"?"click":"hover",children:[" ",(0,e.jsx)(H,{imgSrc:"./pics/buttons/switch_grid.png",onClick:function(){oe("grid")},children:(0,e.jsx)("h2",{children:"Grids"})})]})]}),(0,e.jsxs)("div",{className:O().rightSideBar,children:[(0,e.jsx)("div",{className:O().determinOutline,children:(0,e.jsx)(u.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,children:"Determine Outline"})}),(0,e.jsx)(k.Z,{selectedLabel:ce,onLabelSelect:function(t){me(t)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(U.Z,{selectedAnnotation:Ge,onAnnotationSelect:function(t){Ke(t)},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(){}})]})]})},Ue=We}}]);
