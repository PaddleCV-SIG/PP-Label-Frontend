(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[333],{55252:function(D){D.exports={RSPop1:"RSPop1___17x8k",RSPop2:"RSPop2___27kK5"}},75513:function(D){D.exports={segment:"segment___3WmPw",mainStage:"mainStage___2kT1s",draw:"draw___Ff0QW",pblock:"pblock___3sGxC",progress:"progress___KQyBx",rightSideBar:"rightSideBar___11FX3",determinOutline:"determinOutline___1g1YI"}},47712:function(D,F,t){"use strict";t.r(F),t.d(F,{default:function(){return se}});var Ze=t(34669),X=t(54458),je=t(20136),b=t(55241),ye=t(49111),K=t(19650),be=t(62350),Q=t(75443),Pe=t(57663),h=t(71577),x=t(2824),f=t(67294),W=t(75513),S=t.n(W),Y=t(8088),i=t(61541),z=t(44434),H=t(5041),$=t(49813),Re=t(98858),g=t(4914),Ce=t(13062),w=t(71230),Le=t(59250),E=t(13013),De=t(89032),p=t(15746),Me=t(30887),M=t(54689),Ie=t(34792),q=t(48086),O=t(89366),B=t(57254),_=t(55252),Z=t.n(_),e=t(85893);function ee(o){q.default.info("Click on menu item."),console.log("click",o)}var A=(0,e.jsxs)(M.Z,{onClick:ee,children:[(0,e.jsx)(M.Z.Item,{icon:(0,e.jsx)(O.Z,{}),children:"band_1"},"1"),(0,e.jsx)(M.Z.Item,{icon:(0,e.jsx)(O.Z,{}),children:"band_2"},"2"),(0,e.jsx)(M.Z.Item,{icon:(0,e.jsx)(O.Z,{}),children:"band_3"},"3")]}),ne=function(){return(0,e.jsxs)("div",{children:[(0,e.jsxs)(w.Z,{children:[(0,e.jsx)(p.Z,{className:Z().RSPop1,children:(0,e.jsx)("span",{children:"R"})}),(0,e.jsx)(p.Z,{className:Z().RSPop2,children:(0,e.jsx)(E.Z,{overlay:A,children:(0,e.jsxs)(h.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(B.Z,{})]})})}),(0,e.jsx)(p.Z,{className:Z().RSPop1,children:(0,e.jsx)("span",{children:"G"})}),(0,e.jsx)(p.Z,{className:Z().RSPop2,children:(0,e.jsx)(E.Z,{overlay:A,children:(0,e.jsxs)(h.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(B.Z,{})]})})}),(0,e.jsx)(p.Z,{className:Z().RSPop1,children:(0,e.jsx)("span",{children:"B"})}),(0,e.jsx)(p.Z,{className:Z().RSPop2,children:(0,e.jsx)(E.Z,{overlay:A,children:(0,e.jsxs)(h.Z,{style:{width:"100%"},children:["Band ",(0,e.jsx)(B.Z,{})]})})})]}),(0,e.jsxs)(g.Z,{title:"Data source information",column:1,bordered:!0,children:[(0,e.jsx)(g.Z.Item,{label:"FileName",children:"A/XXX.tif"}),(0,e.jsx)(g.Z.Item,{label:"Row",children:"1234"}),(0,e.jsx)(g.Z.Item,{label:"Column",children:"897"}),(0,e.jsx)(g.Z.Item,{label:"Bands",children:"7"}),(0,e.jsx)(g.Z.Item,{label:"DataType",children:"UInt16"}),(0,e.jsx)(g.Z.Item,{label:"EPSG",children:"7030"}),(0,e.jsx)(g.Z.Item,{label:"Unit",children:"m"})]})]})},te=ne,oe=t(97927),le=t(37233),ae=t(51327),I=t(11849);function ie(o){var N=(0,f.useState)(0),P=(0,x.Z)(N,2),v=P[0],j=P[1],T=(0,f.useState)(!1),R=(0,x.Z)(T,2),C=R[0],u=R[1],V=(0,f.useState)(o.currentLabel),L=(0,x.Z)(V,2),r=L[0],k=L[1];(0,f.useEffect)(function(){k(o.currentLabel)},[o.currentLabel]);var s=function(){var n,d=(n=o.leafletMapRef.current)===null||n===void 0?void 0:n.leafletElement.pm.globalDrawModeEnabled();console.log(d)},c=function(n){if(u(!0),n){var d,m;(d=o.leafletMapRef.current)===null||d===void 0||d.leafletElement.pm.enableDraw(n),(m=o.leafletMapRef.current)===null||m===void 0||m.leafletElement.pm.setPathOptions({color:r==null?void 0:r.color,fillColor:r==null?void 0:r.color,fillOpacity:.4}),s()}else{var J;(J=o.leafletMapRef.current)===null||J===void 0||J.leafletElement.pm.disableDraw(n),u(!1),s()}},l=function(n){var d;(d=o.leafletMapRef.current)===null||d===void 0||d.leafletElement.pm.disableDraw(n),u(!1),s()},y=function(){var n;return(n=o.leafletMapRef.current)===null||n===void 0?void 0:n.leafletElement.pm.Draw.getActiveShape()},ce=function(){if(y()=="Polygon"){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.pm.Draw.Polygon._removeLastVertex(),s()}else s(),u(!1)},de=function(){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.pm.toggleGlobalDragMode(),s()},ue=function(){if(y()=="Polygon"){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.pm.Draw.Polygon._finishShape(),s(),u(!1)}else s(),u(!1)},ve=function(){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.pm.enableGlobalRemovalMode(),s()},me=function(){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.pm.toggleGlobalEditMode(),s(),u(!1)},fe=function(){var n;console.log((n=o.leafletMapRef.current)===null||n===void 0?void 0:n.leafletElement.pm.getGeomanDrawLayers(!0)),u(!1)};console.log("operation re-rendering. currentLabel:".concat(o.currentLabel));var U=function(n){var d=n._uid,m=n.toGeoJSON();j(v+1),console.log("storeOnDb. currentLabel:".concat(o.currentLabel)),m.properties={labelName:r==null?void 0:r.name,stroke:r==null?void 0:r.color,annotationId:v+1},console.log("Store Layer on DB. Id:"+d,m),console.log(JSON.stringify(m)),o.setAnnotations((0,I.Z)((0,I.Z)({},o.annotations),{},{features:o.annotations.features.concat(m)})),console.log((0,I.Z)((0,I.Z)({},o.annotations),{},{features:o.annotations.features.concat(m)}))};function ge(a){console.log(o.currentLabel),a.layer.bindPopup("Label: "+a.layer._uid).openPopup(),u(!1),U(a.layer)}var he=function(n){Se(n.layer),console.log(n)};function Se(a){console.log(o.currentLabel);var n=a._uid,d=a.toGeoJSON();console.log("Update Layer on DB. Id:"+n,d)}var xe=function(){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.zoomIn(),s()},pe=function(){var n;(n=o.leafletMapRef.current)===null||n===void 0||n.leafletElement.zoomOut(),s()};return{polyVisable:C,RSDraw:c,RSDrawDisable:l,removeLastVertex:ce,moveShape:de,finishShape:ue,removeShape:ve,editMode:me,saveGeoJson:fe,storeOnDb:U,onShapeCreate:ge,onShapeEdit:he,toolZoomIn:xe,toolZoomOut:pe,currentShape:y}}var G=t(27992),re=function(){var N=(0,f.useState)(void 0),P=(0,x.Z)(N,2),v=P[0],j=P[1],T=(0,f.useState)(),R=(0,x.Z)(T,2),C=R[0],u=R[1],V=(0,f.useState)({type:"FeatureCollection",features:[]}),L=(0,x.Z)(V,2),r=L[0],k=L[1];console.log("rs is re-rendering! currentLabel: ".concat(JSON.stringify(C)));var s=f.useRef(null),c=ie({leafletMapRef:s,currentLabel:C,setAnnotations:k,annotations:r});return(0,e.jsxs)(Y.Z,{className:S().segment,children:[(0,e.jsxs)(z.Z,{children:[(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:"Intelligent Interaction"}),(0,e.jsx)(b.Z,{placement:"rightTop",visible:c.polyVisable,content:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(K.Z,{children:[(0,e.jsx)(h.Z,{type:"primary",onClick:function(){c.finishShape()},children:"Finish"}),(0,e.jsx)(h.Z,{type:"primary",onClick:function(){c.removeLastVertex()},children:"Remove Last Vertex"}),(0,e.jsx)(Q.Z,{title:"Are you sure cancel this task?",okText:"Yes",cancelText:"No",children:(0,e.jsx)(h.Z,{type:"primary",onClick:function(){c.RSDrawDisable(c.currentShape())},children:"Cancel"})})]})}),trigger:v=="Polygon"?"hover":"click",children:(0,e.jsx)(i.Z,{active:v=="Polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){j("Polygon"),c.RSDraw("Polygon")},children:"Polygon"})}),(0,e.jsx)(i.Z,{onClick:function(){c.editMode()},imgSrc:"./pics/buttons/brush.png",children:"Edit"}),(0,e.jsxs)(b.Z,{placement:"rightTop",title:"title",content:"content",trigger:v=="rubber"?"hover":"click",children:[" ",(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){c.removeShape()},children:"Rubber"})]}),(0,e.jsx)(i.Z,{onClick:function(){c.toolZoomIn()},imgSrc:"./pics/buttons/zoom_in.png",children:"Zoom in"}),(0,e.jsx)(i.Z,{onClick:function(){c.toolZoomOut()},imgSrc:"./pics/buttons/zoom_out.png",children:"Zoom out"}),(0,e.jsx)(i.Z,{onClick:function(){c.saveGeoJson()},imgSrc:"./pics/buttons/save.png",children:"Save"}),(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){return moveShape()},children:"Move"}),(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/export.png",children:"Export"}),(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/data_division.png",children:"Divide Data"}),(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/prev.png",children:"Undo"}),(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/next.png",children:"Redo"}),(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:"Clear Mark"})]}),(0,e.jsxs)("div",{className:S().mainStage,children:[(0,e.jsx)("div",{className:S().draw,children:(0,e.jsx)(le.Z,{leafletMapRef:s,onShapeCreate:c.onShapeCreate,onShapeEdit:c.onShapeEdit})}),(0,e.jsx)("div",{className:S().pblock,children:(0,e.jsx)("div",{className:S().progress,children:(0,e.jsx)(X.Z,{percent:50,status:"active"})})})]}),(0,e.jsxs)(z.Z,{disLoc:"right",children:[(0,e.jsx)(G.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:"Segment Threshold"}),(0,e.jsx)(G.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:"Diaphaneity"}),(0,e.jsx)(G.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:"Visual Radius"}),(0,e.jsxs)(b.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of boundary simplification",content:(0,e.jsx)($.Z,{}),trigger:v=="boundry"?"click":"hover",children:[" ",(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/border_simplify.png",onClick:function(){j("boundry")},children:"Boundary"})]}),(0,e.jsxs)(b.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of remote sensing",content:(0,e.jsx)(te,{}),trigger:v=="colorgun"?"click":"hover",children:[" ",(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/remote_sensing_setting.png",onClick:function(){j("colorgun")},children:"Remote Sensing"})]}),(0,e.jsxs)(b.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Switch grids",content:(0,e.jsx)(oe.Z,{}),trigger:v=="grid"?"click":"hover",children:[" ",(0,e.jsx)(i.Z,{imgSrc:"./pics/buttons/switch_grid.png",onClick:function(){j("grid")},children:"Grids"})]})]}),(0,e.jsxs)("div",{className:S().rightSideBar,children:[(0,e.jsx)("div",{className:S().determinOutline,children:(0,e.jsx)(h.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,children:"Determine Outline"})}),(0,e.jsx)(H.Z,{selectedLabel:C,onLabelSelect:function(y){u(y),console.log(y)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,e.jsx)(ae.Z,{annotations:r,onAnnotationSelect:function(){},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(){}})]})]})},se=re}}]);
