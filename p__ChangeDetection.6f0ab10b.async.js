(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[572,540],{32495:function(h){h.exports={listItem:"listItem___1MXXF",eye:"eye___3nddM",delete:"delete___y9u-D",roundBall:"roundBall___DMczd",popover:"popover___E0HLD",annotationId:"annotationId___1ks8N",labelName:"labelName___130ie",listItemActive:"listItemActive___1rNB-"}},38670:function(h){h.exports={labelList:"labelList___3uLRO",listHeader:"listHeader___1ZPcO",eye:"eye___2yUvw",roundBall:"roundBall___1xKCU"}},72869:function(h){h.exports={map:"map___92VPN",customControlIcon:"customControlIcon___3Ki2y"}},20474:function(h){h.exports={RSPop1:"RSPop1___vz5Me",RSPop2:"RSPop2___34pQA"}},73762:function(h){h.exports={RSPop1:"RSPop1___2Uh31",RSPop2:"RSPop2___2Q-T8"}},87610:function(h){h.exports={RSPop1:"RSPop1___1iBEf",RSPop2:"RSPop2___1W841",RSPop3:"RSPop3___1Whcp"}},35524:function(h){h.exports={segment:"segment___3c01P",mainStage:"mainStage___2jlIH",draw:"draw___3Ftm7",halfMap:"halfMap___1HRmv",interval:"interval___21ItQ",pblock:"pblock___10iZ8",progress:"progress___wlToW",rightSideBar:"rightSideBar___25YC7",determinOutline:"determinOutline___2lYb0"}},51327:function(h,I,n){"use strict";n.d(I,{Z:function(){return c}});var Y=n(54421),P=n(38272),F=n(57663),g=n(71577),Q=n(67294),Z=n(38670),b=n.n(Z),v=n(49111),z=n(19650),a=n(11849),j=n(32495),d=n.n(j),B=n(63097),l=n(85893),L=function(o){var u=(0,a.Z)({},o.annotation),W=!1,y=(0,l.jsxs)(P.ZP.Item,{className:"".concat(d().listItem," ").concat(o.active?d().listItemActive:""),unselectable:"on",onClick:function(){o.onClick(u)},children:[(0,l.jsxs)(z.Z,{align:"center",size:5,children:[(0,l.jsx)("a",{className:d().eye,style:{backgroundImage:W?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(){o.onAnnotationModify(u)}})," ",(0,l.jsx)("span",{className:d().annotationId,children:u.properties.annotationId}),(0,l.jsx)("span",{className:d().labelName,children:u.properties.labelName}),(0,l.jsx)(B.Z,{color:u.properties.stroke})]}),(0,l.jsx)("a",{className:d().delete,onClick:function(){o.onAnnotationDelete(u)}})]});return y},m=L,G=function(o){return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(P.ZP,{className:b().labelList,size:"large",header:(0,l.jsx)("div",{className:b().listHeader,children:"Annotation List"}),bordered:!0,dataSource:o.annotations.features,renderItem:function(W){return(0,l.jsx)(m,{onClick:o.onAnnotationSelect,annotation:W,active:!1,onAnnotationDelete:o.onAnnotationDelete,onAnnotationModify:o.onAnnotationModify})},footer:(0,l.jsx)("div",{children:(0,l.jsx)(g.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){o.onAnnotationSelect(void 0)},block:!0,children:"Add Annotation"})})})})},c=G},37233:function(h,I,n){"use strict";n.d(I,{Z:function(){return m}});var Y=n(67294),P=n(11849),F=n(93224),g=n(41004),Q=n(72869),Z=n.n(Q),b=n(74607),v=n(85893),z=function(c){var U=c.children,o=c.leafletMapRef,u=c.displayTools,W=(0,F.Z)(c,["children","leafletMapRef","displayTools"]);return Y.useEffect(function(){if(o.current){var y=o.current.leafletElement;y.pm.addControls({drawMarker:!1,drawCircle:!1,drawCircleMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!1,editMode:!1,dragMode:!1,cutPolygon:!0,rotateMode:!1,removalMode:!1}),y.pm.setGlobalOptions({pmIgnore:!1}),c.displayTools&&y.pm.Toolbar.createCustomControl({name:"StoreShapes",title:"Store all shapes",block:"custom",className:Z().customControlIcon,toggle:!1,afterClick:function(){var T=JSON.stringify(y.pm.getGeomanDrawLayers(!0).toGeoJSON()),ve="data.geojson",x=document.createElement("a");x.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(T)),x.setAttribute("download",ve),x.style.display="none",document.body.appendChild(x),x.click(),console.log(T)}}),y.on("pm:create",function(D){c.onShapeCreate(D)}),y.on("pm:edit",function(D){c.onShapeEdit(D)})}},[]),(0,v.jsx)(g.Z,(0,P.Z)((0,P.Z)({ref:o},W),{},{children:U}))},a=z,j=n(88014),d=n(16072),B=n(18836),l={lat:0,lng:0,zoom:2},L=function(c){var U=[l.lat,l.lng];return(0,v.jsx)(a,{leafletMapRef:c.leafletMapRef,displayTools:c.displayTools,className:Z().map,center:U,zoom:l.zoom,onShapeCreate:c.onShapeCreate,onShapeEdit:c.onShapeEdit,zoomControl:!1,children:(0,v.jsxs)(j.Z,{position:"topright",children:[(0,v.jsx)(j.Z.BaseLayer,{checked:!0,name:"TianDiTu.Vector",children:(0,v.jsxs)(d.Z,{attribution:'\xA9 <a href="https://www.tianditu.gov.cn/">TianDiTu</a> GS(2021)3715',children:[(0,v.jsx)(B.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"}),(0,v.jsx)(B.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"})]})}),(0,v.jsx)(j.Z.Overlay,{name:"Esri.WorldImagery",children:(0,v.jsx)(B.Z,{attribution:"Tiles \xA9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})})]})})},m=L},49813:function(h,I,n){"use strict";var Y=n(47673),P=n(24044),F=n(13062),g=n(71230),Q=n(59250),Z=n(13013),b=n(57663),v=n(71577),z=n(89032),a=n(15746),j=n(30887),d=n(54689),B=n(34792),l=n(48086),L=n(89366),m=n(57254),G=n(20474),c=n.n(G),U=n(67294),o=n(85893);function u(D){l.default.info("Click on menu item."),console.log("click",D)}var W=(0,o.jsxs)(d.Z,{onClick:u,children:[(0,o.jsx)(d.Z.Item,{icon:(0,o.jsx)(L.Z,{}),children:"1st menu item"},"1"),(0,o.jsx)(d.Z.Item,{icon:(0,o.jsx)(L.Z,{}),children:"2nd menu item"},"2"),(0,o.jsx)(d.Z.Item,{icon:(0,o.jsx)(L.Z,{}),children:"3rd menu item"},"3")]}),y=function(){return(0,o.jsxs)("div",{children:[(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(a.Z,{span:12,className:c().RSPop1,children:(0,o.jsx)("span",{children:"PD parameter"})}),(0,o.jsx)(a.Z,{span:12,className:c().RSPop2,children:(0,o.jsx)(Z.Z,{overlay:W,children:(0,o.jsxs)(v.Z,{style:{width:"100%"},children:["Dropdown ",(0,o.jsx)(m.Z,{})]})})})]}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(a.Z,{span:12,className:c().RSPop1,children:(0,o.jsx)("span",{children:"Simplified distance"})}),(0,o.jsx)(a.Z,{span:12,className:c().RSPop2,children:(0,o.jsx)(P.Z,{placeholder:"Basic usage"})})]}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(a.Z,{span:12,className:c().RSPop1,children:(0,o.jsx)("span",{children:"Simplified angle"})}),(0,o.jsx)(a.Z,{span:12,className:c().RSPop2,children:(0,o.jsx)(P.Z,{placeholder:"Basic usage"})})]}),(0,o.jsxs)(g.Z,{children:[(0,o.jsx)(a.Z,{span:12,className:c().RSPop1,children:(0,o.jsx)("span",{children:"Threshold of building simplification "})}),(0,o.jsx)(a.Z,{span:12,className:c().RSPop2,children:(0,o.jsx)(P.Z,{placeholder:"Basic usage"})})]})]})};I.Z=y},97927:function(h,I,n){"use strict";var Y=n(13062),P=n(71230),F=n(47673),g=n(24044),Q=n(89032),Z=n(15746),b=n(87610),v=n.n(b),z=n(67294),a=n(85893),j=function(){return(0,a.jsxs)("div",{children:[(0,a.jsxs)(P.Z,{children:[(0,a.jsx)(Z.Z,{span:12,className:v().RSPop1,children:(0,a.jsx)("span",{children:"Size of Grid"})}),(0,a.jsx)(Z.Z,{span:12,className:v().RSPop2,children:(0,a.jsx)(g.Z,{placeholder:"Basic usage"})})]}),(0,a.jsxs)(P.Z,{children:[(0,a.jsx)(Z.Z,{span:12,className:v().RSPop1,children:(0,a.jsx)("span",{children:"Overlap of Grid"})}),(0,a.jsx)(Z.Z,{span:12,className:v().RSPop2,children:(0,a.jsx)(g.Z,{placeholder:"Basic usage"})})]}),(0,a.jsx)(P.Z,{children:(0,a.jsx)("span",{className:v().RSPop3,children:"Current annotation completed 1 / 16"})})]})};I.Z=j},76233:function(h,I,n){"use strict";n.r(I),n.d(I,{default:function(){return Ee}});var Y=n(34669),P=n(54458),F=n(20136),g=n(55241),Q=n(49111),Z=n(19650),b=n(62350),v=n(75443),z=n(57663),a=n(71577),j=n(2824),d=n(67294),B=n(35524),l=n.n(B),L=n(8088),m=n(61541),G=n(44434),c=n(5041),U=n(49813),o=n(98858),u=n(4914),W=n(13062),y=n(71230),D=n(59250),T=n(13013),ve=n(89032),x=n(15746),Ie=n(30887),ee=n(54689),Le=n(34792),he=n(48086),oe=n(89366),H=n(57254),xe=n(73762),R=n.n(xe),e=n(85893);function Se(r){he.default.info("Click on menu item."),console.log("click",r)}var V=(0,e.jsxs)(ee.Z,{onClick:Se,children:[(0,e.jsx)(ee.Z.Item,{icon:(0,e.jsx)(oe.Z,{}),children:"band_1"},"1"),(0,e.jsx)(ee.Z.Item,{icon:(0,e.jsx)(oe.Z,{}),children:"band_2"},"2"),(0,e.jsx)(ee.Z.Item,{icon:(0,e.jsx)(oe.Z,{}),children:"band_3"},"3")]}),ge=function(){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(x.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"R"})}),(0,e.jsx)(x.Z,{className:R().RSPop2,children:(0,e.jsx)(T.Z,{overlay:V,children:(0,e.jsxs)(a.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(H.Z,{})]})})}),(0,e.jsx)(x.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"G"})}),(0,e.jsx)(x.Z,{className:R().RSPop2,children:(0,e.jsx)(T.Z,{overlay:V,children:(0,e.jsxs)(a.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(H.Z,{})]})})}),(0,e.jsx)(x.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"B"})}),(0,e.jsx)(x.Z,{className:R().RSPop2,children:(0,e.jsx)(T.Z,{overlay:V,children:(0,e.jsxs)(a.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(H.Z,{})]})})})]}),(0,e.jsxs)(y.Z,{children:[(0,e.jsx)(x.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"R"})}),(0,e.jsx)(x.Z,{className:R().RSPop2,children:(0,e.jsx)(T.Z,{overlay:V,children:(0,e.jsxs)(a.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(H.Z,{})]})})}),(0,e.jsx)(x.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"G"})}),(0,e.jsx)(x.Z,{className:R().RSPop2,children:(0,e.jsx)(T.Z,{overlay:V,children:(0,e.jsxs)(a.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(H.Z,{})]})})}),(0,e.jsx)(x.Z,{className:R().RSPop1,children:(0,e.jsx)("span",{children:"B"})}),(0,e.jsx)(x.Z,{className:R().RSPop2,children:(0,e.jsx)(T.Z,{overlay:V,children:(0,e.jsxs)(a.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(H.Z,{})]})})})]}),(0,e.jsxs)(u.Z,{title:"Data source information",column:1,bordered:!0,children:[(0,e.jsx)(u.Z.Item,{label:"FileName",children:"A/XXX.tif B/XXX.tf"}),(0,e.jsx)(u.Z.Item,{label:"Row",children:"1234"}),(0,e.jsx)(u.Z.Item,{label:"Column",children:"897"}),(0,e.jsx)(u.Z.Item,{label:"Bands",children:"7 7"}),(0,e.jsx)(u.Z.Item,{label:"DataType",children:"UInt16"}),(0,e.jsx)(u.Z.Item,{label:"EPSG",children:"7030"}),(0,e.jsx)(u.Z.Item,{label:"Unit",children:"m"})]})]})},pe=ge,Pe=n(97927),ue=n(37233),je=n(51327),ne=n(11849);function Ze(r){var le=(0,d.useState)(0),$=(0,j.Z)(le,2),A=$[0],X=$[1],se=(0,d.useState)(!1),k=(0,j.Z)(se,2),_=k[0],O=k[1],ie=(0,d.useState)(r.currentLabel),w=(0,j.Z)(ie,2),p=w[0],q=w[1];(0,d.useEffect)(function(){q(r.currentLabel)},[r.currentLabel]);var E=function(){var t,M=(t=r.leafletMapRef.current)===null||t===void 0?void 0:t.leafletElement.pm.globalDrawModeEnabled();console.log(M)},re=function(t){if(O(!0),p){var M,N;(M=r.leafletMapRef.current)===null||M===void 0||M.leafletElement.pm.enableDraw(t),(N=r.leafletMapRef.current)===null||N===void 0||N.leafletElement.pm.setPathOptions({color:p==null?void 0:p.color,fillColor:p==null?void 0:p.color,fillOpacity:.4})}else{var me;(me=r.leafletMapRef.current)===null||me===void 0||me.leafletElement.pm.disableDraw(t),O(!1)}},ce=function(t){var M;(M=r.leafletMapRef.current)===null||M===void 0||M.leafletElement.pm.disableDraw(t),O(!1),E()},K=function(){var t;return(t=r.leafletMapRef.current)===null||t===void 0?void 0:t.leafletElement.pm.Draw.getActiveShape()},S=function(){if(K()=="Polygon"){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.pm.Draw.Polygon._removeLastVertex(),E()}else E(),O(!1)},i=function(){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.pm.toggleGlobalDragMode(),E()},C=function(){if(K()=="Polygon"){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.pm.Draw.Polygon._finishShape(),E(),O(!1)}else E(),O(!1)},s=function(){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.pm.enableGlobalRemovalMode(),E()},J=function(){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.pm.toggleGlobalEditMode(),E(),O(!1)},de=function(){var t;console.log((t=r.leafletMapRef.current)===null||t===void 0?void 0:t.leafletElement.pm.getGeomanDrawLayers(!0)),O(!1)},fe=function(t){var M=t._uid,N=t.toGeoJSON();X(A+1),N.properties={labelName:p==null?void 0:p.name,stroke:p==null?void 0:p.color,annotationId:A+1},console.log("Store Layer on DB. Id:"+M,N),console.log(JSON.stringify(N)),r.setAnnotations((0,ne.Z)((0,ne.Z)({},r.annotations),{},{features:r.annotations.features.concat(N)})),console.log((0,ne.Z)((0,ne.Z)({},r.annotations),{},{features:r.annotations.features.concat(N)}))};function Ce(f){f.layer.bindPopup("Label: "+f.layer._uid).openPopup(),O(!1),fe(f.layer)}var Me=function(t){Re(t.layer)};function Re(f){var t=f._uid,M=f.toGeoJSON();console.log("Update Layer on DB. Id:"+t,M)}var De=function(){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.zoomIn(),E()},Oe=function(){var t;(t=r.leafletMapRef.current)===null||t===void 0||t.leafletElement.zoomOut(),E()};return{polyVisable:_,RSDraw:re,RSDrawDisable:ce,removeLastVertex:S,moveShape:i,finishShape:C,removeShape:s,editMode:J,saveGeoJson:de,storeOnDb:fe,onShapeCreate:Ce,onShapeEdit:Me,toolZoomIn:De,toolZoomOut:Oe,currentShape:K}}var ae=n(27992),te=n(86089),ye=function(){var le=(0,d.useState)(void 0),$=(0,j.Z)(le,2),A=$[0],X=$[1],se=(0,d.useState)(),k=(0,j.Z)(se,2),_=k[0],O=k[1],ie=(0,d.useState)({type:"FeatureCollection",features:[]}),w=(0,j.Z)(ie,2),p=w[0],q=w[1];(0,d.useEffect)(function(){localStorage.removeItem("history"),E({type:"FeatureCollection",features:[]})},[]);function E(i){var C=localStorage.getItem("history"),s=C?JSON.parse(C):{index:-1,items:[]};if(JSON.stringify(s.items[s.index])!=JSON.stringify(i)){var J=s.index>te.MOST_HISTORY_STEPS?s.index-te.MOST_HISTORY_STEPS:0,de=s.items.splice(J,s.index==0?1:s.index+1);s.items=de.concat([i]),s.index<=te.MOST_HISTORY_STEPS?s.index++:s.index=te.MOST_HISTORY_STEPS+1,localStorage.setItem("history",JSON.stringify(s))}}var re=function(){var C=localStorage.getItem("history");if(!!C){var s=JSON.parse(C);if(!!s&&!(s.index>=s.items.length-1)){s.index++,localStorage.setItem("history",JSON.stringify(s));var J=s.items[s.index];q(J)}}},ce=function(){var C=localStorage.getItem("history");if(!!C){var s=JSON.parse(C);if(!(!s||!s.index)&&!(s.index<=0)){s.index--,localStorage.setItem("history",JSON.stringify(s));var J=s.items[s.index];q(J)}}};console.log("rs is re-rendering! currentLabel: ".concat(JSON.stringify(_)));var K=d.useRef(null),S=Ze({leafletMapRef:K,currentLabel:_,setAnnotations:q,annotations:p,recordHistory:E});return(0,e.jsxs)(L.Z,{className:l().segment,children:[(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,e.jsx)(g.Z,{placement:"rightTop",visible:S.polyVisable,content:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(Z.Z,{children:[(0,e.jsx)(a.Z,{type:"primary",onClick:function(){S.finishShape()},children:"Finish"}),(0,e.jsx)(a.Z,{type:"primary",onClick:function(){S.removeLastVertex()},children:"Remove Last Vertex"}),(0,e.jsx)(v.Z,{title:"Are you sure cancel this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(a.Z,{type:"primary",onClick:function(){S.RSDrawDisable(S.currentShape())},children:"Cancel"})})]})}),trigger:A=="Polygon"?"hover":"click",children:(0,e.jsx)(m.Z,{active:A=="Polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){X("Polygon"),S.RSDraw("Polygon")},children:"Polygon"})}),(0,e.jsx)(m.Z,{onClick:function(){S.editMode()},imgSrc:"./pics/buttons/brush.png",children:"Edit"}),(0,e.jsxs)(g.Z,{placement:"rightTop",title:"title",content:"content",trigger:A=="rubber"?"hover":"click",children:[" ",(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){S.removeShape()},children:"Rubber"})]}),(0,e.jsx)(m.Z,{onClick:function(){S.toolZoomIn()},imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,e.jsx)(m.Z,{onClick:function(){S.toolZoomOut()},imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,e.jsx)(m.Z,{onClick:function(){S.saveGeoJson()},imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){return S.moveShape()},children:"Move"}),(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(m.Z,{onClick:function(){return ce()},imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,e.jsx)(m.Z,{onClick:function(){return re()},imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsxs)("div",{className:l().mainStage,children:[(0,e.jsxs)("div",{className:l().draw,children:[(0,e.jsx)("div",{className:l().halfMap,children:(0,e.jsx)(ue.Z,{leafletMapRef:K,onShapeCreate:S.onShapeCreate,onShapeEdit:S.onShapeEdit})}),(0,e.jsx)("div",{className:l().interval}),(0,e.jsx)("div",{className:l().halfMap,children:(0,e.jsx)(ue.Z,{leafletMapRef:K,displayTools:!1,onShapeCreate:S.onShapeCreate,onShapeEdit:S.onShapeEdit})})]}),(0,e.jsx)("div",{className:l().pblock,children:(0,e.jsx)("div",{className:l().progress,children:(0,e.jsx)(P.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)(G.Z,{disLoc:"right",children:[(0,e.jsx)(ae.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:"Segment Threshold"}),(0,e.jsx)(ae.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:"Diaphaneity"}),(0,e.jsx)(ae.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:"Visual Radius"}),(0,e.jsxs)(g.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of boundary simplification",content:(0,e.jsx)(U.Z,{}),trigger:A=="boundry"?"click":"hover",children:[" ",(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/border_simplify.png",onClick:function(){X("boundry")},children:"Boundary"})]}),(0,e.jsxs)(g.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of remote sensing",content:(0,e.jsx)(pe,{}),trigger:A=="colorgun"?"click":"hover",children:[" ",(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/remote_sensing_setting.png",onClick:function(){X("colorgun")},children:"Remote Sensing"})]}),(0,e.jsxs)(g.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Switch grids",content:(0,e.jsx)(Pe.Z,{}),trigger:A=="grid"?"click":"hover",children:[" ",(0,e.jsx)(m.Z,{imgSrc:"./pics/buttons/switch_grid.png",onClick:function(){X("grid")},children:"Grids"})]})]}),(0,e.jsxs)("div",{className:l().rightSideBar,children:[(0,e.jsx)("div",{className:l().determinOutline,children:(0,e.jsx)(a.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,children:"Determine Outline"})}),(0,e.jsx)(c.Z,{selectedLabel:_,onLabelSelect:function(C){O(C),console.log(C)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(je.Z,{annotations:p,onAnnotationSelect:function(){},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(){}})]})]})},Ee=ye}}]);