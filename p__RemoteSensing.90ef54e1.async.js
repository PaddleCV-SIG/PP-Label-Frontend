(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[333],{41435:function(v,M,e){"use strict";e.d(M,{Z:function(){return a}});var A=e(94663),g=e(80112);function O(r){return Function.toString.call(r).indexOf("[native code]")!==-1}var f=e(18597);function p(r,o,R){return(0,f.Z)()?p=Reflect.construct:p=function(i,m,E){var d=[null];d.push.apply(d,m);var l=Function.bind.apply(i,d),P=new l;return E&&(0,g.Z)(P,E.prototype),P},p.apply(null,arguments)}function a(r){var o=typeof Map=="function"?new Map:void 0;return a=function(c){if(c===null||!O(c))return c;if(typeof c!="function")throw new TypeError("Super expression must either be null or a function");if(typeof o!="undefined"){if(o.has(c))return o.get(c);o.set(c,i)}function i(){return p(c,arguments,(0,A.Z)(this).constructor)}return i.prototype=Object.create(c.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),(0,g.Z)(i,c)},a(r)}},26647:function(v){v.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",popoverLeft:"popoverLeft___15lGe"}},52822:function(v){v.exports={roundBall:"roundBall___1pqu1",popover:"popover___1-PR6"}},32495:function(v){v.exports={listItem:"listItem___1MXXF",eye:"eye___3nddM",delete:"delete___y9u-D",roundBall:"roundBall___DMczd",popover:"popover___E0HLD",annotationId:"annotationId___1ks8N",labelName:"labelName___130ie",listItemActive:"listItemActive___1rNB-"}},38670:function(v){v.exports={labelList:"labelList___3uLRO",listHeader:"listHeader___1ZPcO",eye:"eye___2yUvw",roundBall:"roundBall___1xKCU"}},5882:function(v){v.exports={listItem:"listItem___vtDXn",eye:"eye___AsLBS",roundBall:"roundBall___1J_R3",popover:"popover___1x-2R",delete:"delete___WHPf2",listItemActive:"listItemActive___3FRb7"}},56131:function(v){v.exports={labelList:"labelList___jvD05",listHeader:"listHeader___UM5UF",eye:"eye___II3Po",roundBall:"roundBall___j752J"}},78677:function(v){v.exports={container:"container___G0FNe"}},80961:function(v){v.exports={leftToolbar:"leftToolbar___1xi4t",rightToolbar:"rightToolbar___3dNSB"}},82499:function(v){v.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1SHWL",toolBarButtonContainer:"toolBarButtonContainer___1jKUz",toolBarButton:"toolBarButton___3Ouq1",buttonText:"buttonText___10ls7",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3AA28"}},72869:function(v){v.exports={map:"map___92VPN",customControlIcon:"customControlIcon___3Ki2y"}},20474:function(v){v.exports={RSPop1:"RSPop1___vz5Me",RSPop2:"RSPop2___34pQA"}},87610:function(v){v.exports={RSPop1:"RSPop1___1iBEf",RSPop2:"RSPop2___1W841",RSPop3:"RSPop3___1Whcp"}},55252:function(v){v.exports={RSPop1:"RSPop1___17x8k",RSPop2:"RSPop2___27kK5"}},75513:function(v){v.exports={segment:"segment___3WmPw",mainStage:"mainStage___2kT1s",draw:"draw___Ff0QW",pblock:"pblock___3sGxC",progress:"progress___KQyBx",rightSideBar:"rightSideBar___11FX3",determinOutline:"determinOutline___1g1YI"}},27992:function(v,M,e){"use strict";var A=e(20136),g=e(55241),O=e(77883),f=e(70507),p=e(57663),a=e(71577),r=e(2824),o=e(67294),R=e(61541),c=e(26647),i=e.n(c),m=e(85893),E=1,d=100,l=10;function P(x){return x?x<=E?E:x>=d?d:x:l}var b=function(y){var F=(0,o.useState)(P(y.size)),n=(0,r.Z)(F,2),T=n[0],_=n[1],B=function(D){_(P(D))};return(0,o.useEffect)(function(){B(y.size)},[y.size]),(0,m.jsxs)(g.Z,{overlayClassName:"".concat(i().popover," ").concat(y.disLoc=="left"?i().popoverLeft:""),placement:y.disLoc||"right",content:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Z,{type:"text",onClick:function(){var D,S=P(T-1);B(S),(D=y.onChange)===null||D===void 0||D.call(0,S)},children:"-"}),(0,m.jsx)(f.Z,{min:E,max:d,value:T,onChange:function(D){var S;(S=y.onChange)===null||S===void 0||S.call(0,D)},controls:!1,style:{textAlign:"center"}}),(0,m.jsx)(a.Z,{type:"text",onClick:function(){var D,S=P(T+1);B(S),(D=y.onChange)===null||D===void 0||D.call(0,S)},children:"+"})]}),trigger:"hover",children:[" ",(0,m.jsx)(R.Z,{imgSrc:y.imgSrc,onClick:y.onClick,children:y.children})]})};M.Z=b},63097:function(v,M,e){"use strict";var A=e(20136),g=e(55241),O=e(2824),f=e(67294),p=e(52822),a=e.n(p),r=e(63144),o=e(85893),R=function(i){var m=(0,f.useState)(i.color||"#FFF"),E=(0,O.Z)(m,2),d=E[0],l=E[1];return(0,f.useEffect)(function(){l(i.color||"#FFF")},[i]),i.changeable?(0,o.jsx)(g.Z,{getPopupContainer:function(b){return b.parentElement||document.body},overlayClassName:a().popover,openClassName:a().popoverOpenClassName,placement:"bottom",content:(0,o.jsx)(r.xS,{disableAlpha:!0,color:d,onChange:function(b){l(b.hex)},onChangeComplete:i.onChange}),trigger:"click",children:(0,o.jsx)("div",{className:a().roundBall,style:{backgroundColor:d}})}):(0,o.jsx)("div",{className:a().roundBall,style:{backgroundColor:d}})};M.Z=R},51327:function(v,M,e){"use strict";e.d(M,{Z:function(){return y}});var A=e(54421),g=e(38272),O=e(57663),f=e(71577),p=e(67294),a=e(38670),r=e.n(a),o=e(49111),R=e(19650),c=e(11849),i=e(32495),m=e.n(i),E=e(63097),d=e(85893),l=function(n){var T=(0,c.Z)({},n.annotation),_=!1,B=(0,d.jsxs)(g.ZP.Item,{className:"".concat(m().listItem," ").concat(n.active?m().listItemActive:""),unselectable:"on",onClick:function(){console.log("click List.Item"),n.onClick(T)},children:[(0,d.jsxs)(R.Z,{align:"center",size:5,children:[(0,d.jsx)("a",{className:m().eye,style:{backgroundImage:_?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(D){D.stopPropagation(),n.onAnnotationModify(T)}})," ",(0,d.jsx)("span",{className:m().annotationId,children:T.properties.annotationId}),(0,d.jsx)("span",{className:m().labelName,children:T.properties.labelName}),(0,d.jsx)(E.Z,{color:T.properties.stroke})]}),(0,d.jsx)("a",{className:m().delete,onClick:function(D){console.log("click List.Item.delete"),D.stopPropagation(),n.onAnnotationDelete(T)}})]});return B},P=l,b=e(48971),x=function(n){var T=(0,b.YB)().formatMessage({id:"component.PPAnnotationList.annotationList"}),_=(0,b.YB)().formatMessage({id:"component.PPAnnotationList.addAnnotation"});return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(g.ZP,{className:r().labelList,size:"large",header:(0,d.jsx)("div",{className:r().listHeader,children:T}),bordered:!0,dataSource:n.annotations.features,renderItem:function(Z){return(0,d.jsx)(P,{onClick:n.onAnnotationSelect,annotation:Z,active:!1,onAnnotationDelete:n.onAnnotationDelete,onAnnotationModify:n.onAnnotationModify})},footer:(0,d.jsx)("div",{children:(0,d.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){n.onAnnotationSelect(void 0)},block:!0,children:_})})})})},y=x},5041:function(v,M,e){"use strict";e.d(M,{Z:function(){return ee}});var A=e(54421),g=e(38272),O=e(57663),f=e(71577),p=e(2824),a=e(67294),r=e(56131),o=e.n(r),R=e(49111),c=e(19650),i=e(11849),m=e(5882),E=e.n(m),d=e(63097),l=e(85893),P=function(h){var I=(0,i.Z)({},h.label),H=(0,a.useState)(I.invisible),te=(0,p.Z)(H,2),K=te[0],u=te[1],t=(0,a.useState)(0),Q=(0,p.Z)(t,2),X=Q[0],$=Q[1],k=h.hideEye?" ":(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("a",{className:E().eye,style:{backgroundImage:K?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(w){w.stopPropagation(),u(!K),h.onLabelModify(I)}})," "]}),se=h.hideColorPicker?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(d.Z,{color:I.color,changeable:!0,onChange:function(w){I.color=w.hex,h.onLabelModify(I)}}),ie=(0,l.jsxs)(g.ZP.Item,{className:"".concat(E().listItem," ").concat(h.active?E().listItemActive:""),unselectable:"on",onClick:function(){h.onClick(I)},children:[(0,l.jsxs)(c.Z,{align:"center",size:5,children:[k,I.name,se]}),(0,l.jsx)("a",{className:E().delete,onClick:function(w){w.stopPropagation();var ne=new Date().getTime();ne-X<300||($(ne),h.onLabelDelete(I))}})]});return ie},b=P,x=e(71194),y=e(50146),F=e(47673),n=e(24044),T=e(9715),_=e(93766),B=e(48971),Z=["#FF0000","#008000","#0000FF","#FFFF00","#FFA500","#00FFFF","#8B00FF","#FFC0CB","#7CFC00","#007FFF","#800080","#36BF36","#DAA520","#800000","#008B8B","#B22222","#E6D933","#000080","#FF00FF","#FFFF99","#87CEEB","#5C50E6","#CD5C5C","#20B2AA","#E680FF","#4D1F00","#006374","#B399FF","#8B4513","#BA55D3","#C0C0C0","#808080","#000000"],D=function(h){var I,H,te=(0,B.YB)().formatMessage({id:"component.PPAddLabelModal.selectColor"}),K=(0,B.YB)().formatMessage({id:"component.PPAddLabelModal.addLabel"}),u=(0,B.YB)().formatMessage({id:"component.PPAddLabelModal.labelName"}),t=(0,B.YB)().formatMessage({id:"component.PPCreater.cancel"}),Q=(0,B.YB)().formatMessage({id:"component.PPSegMode.ok"}),X=(0,a.useState)(((I=h.defaultLabel)===null||I===void 0?void 0:I.color)||Z[h.order||0]),$=(0,p.Z)(X,2),k=$[0],se=$[1];(0,a.useEffect)(function(){var q;se(((q=h.defaultLabel)===null||q===void 0?void 0:q.color)||Z[h.order||0])},[h]);var ie=h.hideColorPicker?(0,l.jsx)(l.Fragment,{}):(0,l.jsx)(_.Z.Item,{label:te,name:"color",children:(0,l.jsx)(d.Z,{color:k,onChange:function(z){se(z.hex)}})}),le=_.Z.useForm(),w=(0,p.Z)(le,1),ne=w[0];return(0,l.jsx)(y.Z,{title:K,visible:h.visible,onCancel:h.onCancel,footer:null,children:(0,l.jsxs)(_.Z,{form:ne,name:"basic",labelCol:{span:8},wrapperCol:{span:16},initialValues:{remember:!1,labelname:(H=h.defaultLabel)===null||H===void 0?void 0:H.name},onFinish:function(z){var Ee={name:z.labelname,color:k};h.onLabelAdd(Ee),ne.resetFields()},autoComplete:"off",children:[(0,l.jsx)(_.Z.Item,{label:u,name:"labelname",rules:[{required:!0,message:"Please input label name!"}],children:(0,l.jsx)(n.Z,{})}),ie,(0,l.jsx)(_.Z.Item,{wrapperCol:{offset:8,span:16},children:(0,l.jsxs)(c.Z,{children:[(0,l.jsx)(f.Z,{onClick:function(){var z;(z=h.onCancel)===null||z===void 0||z.call(0),ne.resetFields()},children:t}),(0,l.jsx)(f.Z,{type:"primary",htmlType:"submit",children:Q})]})})]})})},S=D,ue=function(h){var I,H=(0,B.YB)().formatMessage({id:"component.PPLabelList.addLabel"}),te=(0,B.YB)().formatMessage({id:"component.PPLabelList.labelList"}),K=(0,a.useState)(!1),u=(0,p.Z)(K,2),t=u[0],Q=u[1];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.ZP,{className:o().labelList,size:"large",header:(0,l.jsx)("div",{className:o().listHeader,children:te}),footer:(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){Q(!0)},block:!0,children:H})}),bordered:!0,dataSource:h.labels,renderItem:function($){var k;return(0,l.jsx)(b,{hideColorPicker:h.hideColorPicker,hideEye:h.hideEye,onClick:h.onLabelSelect,label:$,active:(k=h.activeIds)===null||k===void 0?void 0:k.has($.labelId),onLabelDelete:h.onLabelDelete,onLabelModify:h.onLabelModify})}}),(0,l.jsx)(S,{hideColorPicker:h.hideColorPicker,order:(I=h.labels)===null||I===void 0?void 0:I.length,visible:t,onLabelAdd:function($){h.onLabelAdd($),Q(!1)},onCancel:function(){Q(!1)}})]})},ee=ue},8088:function(v,M,e){"use strict";var A=e(67294),g=e(78677),O=e.n(g),f=e(85893),p=function(r){return(0,f.jsx)("div",{className:"".concat(O().container," ").concat(r.className),children:r.children})};M.Z=p},44434:function(v,M,e){"use strict";var A=e(67294),g=e(80961),O=e.n(g),f=e(85893),p=function(r){var o=O().leftToolbar;return r.disLoc=="right"&&(o=O().rightToolbar),(0,f.jsx)("div",{className:o,children:r.children})};M.Z=p},61541:function(v,M,e){"use strict";var A=e(49111),g=e(19650),O=e(67294),f=e(82499),p=e.n(f),a=e(85893),r=function(R){return(0,a.jsx)("div",{unselectable:"on",className:"".concat(p().toolBarButtonContainerWrapper," ").concat(R.active&&p().toolBarButtonContainerWrapperActive),onClick:R.onClick,children:(0,a.jsx)(g.Z,{align:"center",className:p().toolBarButtonContainer,size:0,children:(0,a.jsxs)(g.Z,{align:"center",direction:"vertical",className:p().toolBarButton,size:0,children:[(0,a.jsx)("img",{src:R.imgSrc}),(0,a.jsx)("div",{className:p().buttonText,children:R.children})]})})})};M.Z=r},37233:function(v,M,e){"use strict";e.d(M,{Z:function(){return P}});var A=e(67294),g=e(11849),O=e(93224),f=e(41004),p=e(72869),a=e.n(p),r=e(74607),o=e(85893),R=function(x){var y=x.children,F=x.leafletMapRef,n=x.displayTools,T=(0,O.Z)(x,["children","leafletMapRef","displayTools"]);return A.useEffect(function(){if(F.current){var _=F.current.leafletElement;_.pm.addControls({drawMarker:!1,drawCircle:!1,drawCircleMarker:!1,drawPolyline:!1,drawRectangle:!1,drawPolygon:!1,editMode:!1,dragMode:!1,cutPolygon:!0,rotateMode:!1,removalMode:!1}),_.pm.setGlobalOptions({pmIgnore:!1}),x.displayTools&&_.pm.Toolbar.createCustomControl({name:"StoreShapes",title:"Store all shapes",block:"custom",className:a().customControlIcon,toggle:!1,afterClick:function(){var Z=JSON.stringify(_.pm.getGeomanDrawLayers(!0).toGeoJSON()),D="data.geojson",S=document.createElement("a");S.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(Z)),S.setAttribute("download",D),S.style.display="none",document.body.appendChild(S),S.click(),console.log(Z)}}),_.on("pm:create",function(B){x.onShapeCreate(B)}),_.on("pm:edit",function(B){x.onShapeEdit(B)})}},[]),(0,o.jsx)(f.Z,(0,g.Z)((0,g.Z)({ref:F},T),{},{children:y}))},c=R,i=e(88014),m=e(16072),E=e(18836),d={lat:0,lng:0,zoom:2},l=function(x){var y=[d.lat,d.lng];return(0,o.jsx)(c,{leafletMapRef:x.leafletMapRef,displayTools:x.displayTools,className:a().map,center:y,zoom:d.zoom,onShapeCreate:x.onShapeCreate,onShapeEdit:x.onShapeEdit,zoomControl:!1,children:(0,o.jsxs)(i.Z,{position:"topright",children:[(0,o.jsx)(i.Z.BaseLayer,{checked:!0,name:"TianDiTu.Vector",children:(0,o.jsxs)(m.Z,{attribution:'\xA9 <a href="https://www.tianditu.gov.cn/">TianDiTu</a> GS(2021)3715',children:[(0,o.jsx)(E.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"}),(0,o.jsx)(E.Z,{url:"https://t2.tianditu.gov.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}&tk=8e879a4cad078fd3ce7456f2737fc4cc"})]})}),(0,o.jsx)(i.Z.Overlay,{name:"Esri.WorldImagery",children:(0,o.jsx)(E.Z,{attribution:"Tiles \xA9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"})})]})})},P=l},49813:function(v,M,e){"use strict";var A=e(47673),g=e(24044),O=e(13062),f=e(71230),p=e(59250),a=e(13013),r=e(57663),o=e(71577),R=e(89032),c=e(15746),i=e(30887),m=e(54689),E=e(34792),d=e(48086),l=e(89366),P=e(57254),b=e(20474),x=e.n(b),y=e(67294),F=e(48971),n=e(85893);function T(Z){d.default.info("Click on menu item."),console.log("click",Z)}var _=(0,n.jsxs)(m.Z,{onClick:T,children:[(0,n.jsx)(m.Z.Item,{icon:(0,n.jsx)(l.Z,{}),children:"1st menu item"},"1"),(0,n.jsx)(m.Z.Item,{icon:(0,n.jsx)(l.Z,{}),children:"2nd menu item"},"2"),(0,n.jsx)(m.Z.Item,{icon:(0,n.jsx)(l.Z,{}),children:"3rd menu item"},"3")]}),B=function(){var D=(0,F.YB)().formatMessage({id:"component.PPRS.pdParameter"}),S=(0,F.YB)().formatMessage({id:"component.PPRS.simplifiedDistance"}),ue=(0,F.YB)().formatMessage({id:"component.PPRS.simplifiedAngle"}),ee=(0,F.YB)().formatMessage({id:"component.PPRS.threshold"});return(0,n.jsxs)("div",{children:[(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(c.Z,{span:12,className:x().RSPop1,children:(0,n.jsx)("span",{children:D})}),(0,n.jsx)(c.Z,{span:12,className:x().RSPop2,children:(0,n.jsx)(a.Z,{overlay:_,children:(0,n.jsxs)(o.Z,{style:{width:"100%"},children:["Dropdown ",(0,n.jsx)(P.Z,{})]})})})]}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(c.Z,{span:12,className:x().RSPop1,children:(0,n.jsx)("span",{children:S})}),(0,n.jsx)(c.Z,{span:12,className:x().RSPop2,children:(0,n.jsx)(g.Z,{placeholder:"Basic usage"})})]}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(c.Z,{span:12,className:x().RSPop1,children:(0,n.jsx)("span",{children:ue})}),(0,n.jsx)(c.Z,{span:12,className:x().RSPop2,children:(0,n.jsx)(g.Z,{placeholder:"Basic usage"})})]}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(c.Z,{span:12,className:x().RSPop1,children:(0,n.jsx)("span",{children:ee})}),(0,n.jsx)(c.Z,{span:12,className:x().RSPop2,children:(0,n.jsx)(g.Z,{placeholder:"Basic usage"})})]})]})};M.Z=B},97927:function(v,M,e){"use strict";var A=e(13062),g=e(71230),O=e(47673),f=e(24044),p=e(89032),a=e(15746),r=e(87610),o=e.n(r),R=e(67294),c=e(48971),i=e(85893),m=function(){var d=(0,c.YB)().formatMessage({id:"component.PPRS.gridSize"}),l=(0,c.YB)().formatMessage({id:"component.PPRS.overlap"}),P=(0,c.YB)().formatMessage({id:"component.PPRS.completed"},{show:1,total:16});return(0,i.jsxs)("div",{children:[(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(a.Z,{span:12,className:o().RSPop1,children:(0,i.jsx)("span",{children:d})}),(0,i.jsx)(a.Z,{span:12,className:o().RSPop2,children:(0,i.jsx)(f.Z,{placeholder:"Basic usage"})})]}),(0,i.jsxs)(g.Z,{children:[(0,i.jsx)(a.Z,{span:12,className:o().RSPop1,children:(0,i.jsx)("span",{children:l})}),(0,i.jsx)(a.Z,{span:12,className:o().RSPop2,children:(0,i.jsx)(f.Z,{placeholder:"Basic usage"})})]}),(0,i.jsx)(g.Z,{children:(0,i.jsx)("span",{className:o().RSPop3,children:P})})]})};M.Z=m},91861:function(v,M,e){"use strict";e.d(M,{Ad:function(){return g},k3:function(){return O},Vd:function(){return f},td:function(){return p}});var A=40;function g(){localStorage.removeItem("history"),O([])}function O(a){var r=localStorage.getItem("history"),o=r?JSON.parse(r):{index:-1,items:[]};if(JSON.stringify(o.items[o.index])!=JSON.stringify(a)){var R=o.index>A?o.index-A:0,c=o.items.splice(R,o.index==0?1:o.index+1);o.items=c.concat([a]),o.index<=A?o.index++:o.index=A+1,localStorage.setItem("history",JSON.stringify(o))}}function f(){var a=localStorage.getItem("history");if(!!a){var r=JSON.parse(a);if(!!r&&!(r.index>=r.items.length-1))return r.index++,localStorage.setItem("history",JSON.stringify(r)),r.items[r.index]}}function p(){var a=localStorage.getItem("history");if(!!a){var r=JSON.parse(a);if(!(!r||!r.index)&&!(r.index<=0))return r.index--,localStorage.setItem("history",JSON.stringify(r)),r.items[r.index]}}},47712:function(v,M,e){"use strict";e.r(M),e.d(M,{default:function(){return Re}});var A=e(34669),g=e(54458),O=e(20136),f=e(55241),p=e(49111),a=e(19650),r=e(62350),o=e(75443),R=e(57663),c=e(71577),i=e(2824),m=e(67294),E=e(75513),d=e.n(E),l=e(8088),P=e(61541),b=e(44434),x=e(5041),y=e(49813),F=e(98858),n=e(4914),T=e(13062),_=e(71230),B=e(59250),Z=e(13013),D=e(89032),S=e(15746),ue=e(30887),ee=e(54689),Ce=e(34792),h=e(48086),I=e(89366),H=e(57254),te=e(55252),K=e.n(te),u=e(48971),t=e(85893);function Q(j){h.default.info("Click on menu item."),console.log("click",j)}var X=(0,t.jsxs)(ee.Z,{onClick:Q,children:[(0,t.jsx)(ee.Z.Item,{icon:(0,t.jsx)(I.Z,{}),children:"band_1"},"1"),(0,t.jsx)(ee.Z.Item,{icon:(0,t.jsx)(I.Z,{}),children:"band_2"},"2"),(0,t.jsx)(ee.Z.Item,{icon:(0,t.jsx)(I.Z,{}),children:"band_3"},"3")]}),$=function(){var de=(0,u.YB)().formatMessage({id:"component.PPRS.r"}),N=(0,u.YB)().formatMessage({id:"component.PPRS.g"}),U=(0,u.YB)().formatMessage({id:"component.PPRS.b"}),ve=(0,u.YB)().formatMessage({id:"component.PPRS.dataInformation"}),fe=(0,u.YB)().formatMessage({id:"component.PPRS.fileName"}),ce=(0,u.YB)().formatMessage({id:"component.PPRS.row"}),Pe=(0,u.YB)().formatMessage({id:"component.PPRS.column"}),G=(0,u.YB)().formatMessage({id:"component.PPRS.bands"}),Y=(0,u.YB)().formatMessage({id:"component.PPRS.dataType"}),oe=(0,u.YB)().formatMessage({id:"component.PPRS.EPSG"}),ge=(0,u.YB)().formatMessage({id:"component.PPRS.unit"});return(0,t.jsxs)("div",{children:[(0,t.jsxs)(_.Z,{children:[(0,t.jsx)(S.Z,{className:K().RSPop1,children:(0,t.jsx)("span",{children:de})}),(0,t.jsx)(S.Z,{className:K().RSPop2,children:(0,t.jsx)(Z.Z,{overlay:X,children:(0,t.jsxs)(c.Z,{style:{width:"100%"},children:["Band ",(0,t.jsx)(H.Z,{})]})})}),(0,t.jsx)(S.Z,{className:K().RSPop1,children:(0,t.jsx)("span",{children:N})}),(0,t.jsx)(S.Z,{className:K().RSPop2,children:(0,t.jsx)(Z.Z,{overlay:X,children:(0,t.jsxs)(c.Z,{style:{width:"100%"},children:["Band ",(0,t.jsx)(H.Z,{})]})})}),(0,t.jsx)(S.Z,{className:K().RSPop1,children:(0,t.jsx)("span",{children:U})}),(0,t.jsx)(S.Z,{className:K().RSPop2,children:(0,t.jsx)(Z.Z,{overlay:X,children:(0,t.jsxs)(c.Z,{style:{width:"100%"},children:["Band ",(0,t.jsx)(H.Z,{})]})})})]}),(0,t.jsxs)(n.Z,{title:ve,column:1,bordered:!0,children:[(0,t.jsx)(n.Z.Item,{label:fe,children:"A/XXX.tif"}),(0,t.jsx)(n.Z.Item,{label:ce,children:"1234"}),(0,t.jsx)(n.Z.Item,{label:Pe,children:"897"}),(0,t.jsx)(n.Z.Item,{label:G,children:"7"}),(0,t.jsx)(n.Z.Item,{label:Y,children:"UInt16"}),(0,t.jsx)(n.Z.Item,{label:oe,children:"7030"}),(0,t.jsx)(n.Z.Item,{label:ge,children:"m"})]})]})},k=$,se=e(97927),ie=e(37233),le=e(51327),w=e(11849);function ne(j){var de=(0,m.useState)(0),N=(0,i.Z)(de,2),U=N[0],ve=N[1],fe=(0,m.useState)(!1),ce=(0,i.Z)(fe,2),Pe=ce[0],G=ce[1];(0,m.useEffect)(function(){localStorage.setItem("currentLabel",JSON.stringify(j.currentLabel||{}))},[j.currentLabel]),(0,m.useEffect)(function(){localStorage.setItem("annotations",JSON.stringify(j.annotations||{}))},[j.annotations]);var Y=function(){var s,C=(s=j.leafletMapRef.current)===null||s===void 0?void 0:s.leafletElement.pm.globalDrawModeEnabled();console.log(C)},oe=function(s){var C=localStorage.getItem("currentLabel");if(C!="{}"){var J,ae;G(!0);var V=JSON.parse(C||"{}");(J=j.leafletMapRef.current)===null||J===void 0||J.leafletElement.pm.enableDraw(s),(ae=j.leafletMapRef.current)===null||ae===void 0||ae.leafletElement.pm.setPathOptions({color:V==null?void 0:V.color,fillColor:V==null?void 0:V.color,fillOpacity:.4})}else{var me;alert("Test"),(me=j.leafletMapRef.current)===null||me===void 0||me.leafletElement.pm.disableDraw(s),G(!1)}},ge=function(s){var C;(C=j.leafletMapRef.current)===null||C===void 0||C.leafletElement.pm.disableDraw(s),G(!1),Y()},he=function(){var s;return(s=j.leafletMapRef.current)===null||s===void 0?void 0:s.leafletElement.pm.Draw.getActiveShape()},Be=function(){if(he()=="Polygon"){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.Draw.Polygon._removeLastVertex(),Y()}else Y(),G(!1)},xe=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.toggleGlobalDragMode(),Y()},De=function(){if(he()=="Polygon"){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.Draw.Polygon._finishShape(),Y(),G(!1)}else Y(),G(!1)},Le=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.enableGlobalRemovalMode(),Y()},je=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.pm.toggleGlobalEditMode(),Y(),G(!1)},pe=function(){G(!1)},ye=function(s){var C=s.toGeoJSON(),J=JSON.parse(localStorage.getItem("currentLabel")||"{}");ve(U+1),C.properties={labelName:J==null?void 0:J.name,stroke:J==null?void 0:J.color,annotationId:U+1};var ae=JSON.parse(localStorage.getItem("annotations")||"{}"),V=(0,w.Z)((0,w.Z)({},ae),{},{features:ae.features.concat(C)});console.log(V),j.setAnnotations(V),j.recordHistory(V)};function Ze(W){G(!1),ye(W.layer)}var _e=function(s){console.log(s)},Me=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.zoomIn(),Y()},Se=function(){var s;(s=j.leafletMapRef.current)===null||s===void 0||s.leafletElement.zoomOut(),Y()};return{polyVisable:Pe,RSDraw:oe,RSDrawDisable:ge,removeLastVertex:Be,moveShape:xe,finishShape:De,removeShape:Le,editMode:je,saveGeoJson:pe,storeOnDb:ye,onShapeCreate:Ze,onShapeEdit:_e,toolZoomIn:Me,toolZoomOut:Se,currentShape:he}}var q=e(27992),z=e(91861),Ee=e(64322),Oe=function(){var de=(0,Ee.$L)(m.useState,m.useEffect,{label:{oneHot:!1},tool:{defaultTool:"mover"},effectTrigger:{}}),N=(0,i.Z)(de,10),U=N[0],ve=N[1],fe=N[2],ce=N[3],Pe=N[4],G=N[5],Y=N[6],oe=N[7],ge=N[8],he=N[9],Be=(0,m.useState)(!1),xe=(0,i.Z)(Be,2),De=xe[0],Le=xe[1],je=(0,m.useState)(!1),pe=(0,i.Z)(je,2),ye=pe[0],Ze=pe[1],_e=(0,m.useState)({type:"FeatureCollection",features:[]}),Me=(0,i.Z)(_e,2),Se=Me[0],W=Me[1];(0,m.useEffect)(function(){(0,z.Ad)()},[]),console.log("rs is re-rendering! label.curr: ".concat(JSON.stringify(oe.curr)));var s=m.useRef(null),C=ne({leafletMapRef:s,currentLabel:oe.curr,setAnnotations:W,annotations:Se,recordHistory:z.k3}),J=(0,u.YB)().formatMessage({id:"pages.Maps.finished"}),ae=(0,u.YB)().formatMessage({id:"pages.Maps.removeLastVertex"}),V=(0,u.YB)().formatMessage({id:"pages.Maps.cancel"}),me=(0,u.YB)().formatMessage({id:"pages.Maps.boundary"}),Ie=(0,u.YB)().formatMessage({id:"pages.Maps.remoteSensing"}),Ae=(0,u.YB)().formatMessage({id:"pages.Maps.grids"}),Te=(0,u.YB)().formatMessage({id:"pages.toolBar.polygon"}),be=(0,u.YB)().formatMessage({id:"pages.toolBar.rubber"}),We=(0,u.YB)().formatMessage({id:"pages.toolBar.zoomIn"}),Ne=(0,u.YB)().formatMessage({id:"pages.toolBar.zoomOut"}),Ue=(0,u.YB)().formatMessage({id:"pages.toolBar.move"}),Fe=(0,u.YB)().formatMessage({id:"pages.toolBar.unDo"}),Ke=(0,u.YB)().formatMessage({id:"pages.toolBar.reDo"}),Ye=(0,u.YB)().formatMessage({id:"pages.toolBar.save"}),ze=(0,u.YB)().formatMessage({id:"pages.toolBar.edit"}),Ge=(0,u.YB)().formatMessage({id:"pages.toolBar.clearMark"}),Je=(0,u.YB)().formatMessage({id:"pages.toolBar.interactor"}),Ve=(0,u.YB)().formatMessage({id:"pages.toolBar.segmentThreshold"}),He=(0,u.YB)().formatMessage({id:"pages.toolBar.diaphaneity"}),Xe=(0,u.YB)().formatMessage({id:"pages.toolBar.visualRadius"}),$e=(0,u.YB)().formatMessage({id:"pages.toolBar.determineOutline"}),Qe=(0,u.YB)().formatMessage({id:"pages.toolBar.divideData"}),ke=(0,u.YB)().formatMessage({id:"pages.toolBar.export"});return(0,t.jsxs)(l.Z,{className:d().segment,children:[(0,t.jsxs)(b.Z,{children:[(0,t.jsx)(f.Z,{placement:"rightTop",visible:C.polyVisable,content:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(c.Z,{type:"primary",onClick:function(){C.finishShape()},children:J}),(0,t.jsx)(c.Z,{type:"primary",onClick:function(){C.removeLastVertex()},children:ae}),(0,t.jsx)(o.Z,{title:"Are you sure cancel this task?",okText:"Yes",cancelText:"No",children:(0,t.jsx)(c.Z,{type:"primary",onClick:function(){C.RSDrawDisable(C.currentShape())},children:V})})]})}),trigger:U.curr=="Polygon"?"hover":"click",children:(0,t.jsx)(P.Z,{active:U.curr=="Polygon",imgSrc:"./pics/buttons/polygon.png",onClick:function(){U.setCurr("Polygon"),C.RSDraw("Polygon")},children:Te})}),(0,t.jsx)(P.Z,{onClick:function(){C.editMode()},imgSrc:"./pics/buttons/edit.png",children:ze}),(0,t.jsxs)(f.Z,{placement:"rightTop",title:"title",content:"content",trigger:U.curr=="rubber"?"hover":"click",children:[" ",(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/rubber.png",onClick:function(){C.removeShape()},children:be})]}),(0,t.jsx)(P.Z,{onClick:function(){C.toolZoomIn()},imgSrc:"./pics/buttons/zoom_in.png",children:We}),(0,t.jsx)(P.Z,{onClick:function(){C.toolZoomOut()},imgSrc:"./pics/buttons/zoom_out.png",children:Ne}),(0,t.jsx)(P.Z,{onClick:function(){C.saveGeoJson()},imgSrc:"./pics/buttons/save.png",children:Ye}),(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/move.png",onClick:function(){return C.moveShape()},children:Ue}),(0,t.jsx)(P.Z,{onClick:function(){var re=(0,z.td)()},imgSrc:"./pics/buttons/prev.png",children:Fe}),(0,t.jsx)(P.Z,{onClick:function(){var re=(0,z.Vd)()},imgSrc:"./pics/buttons/next.png",children:Ke}),(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/clear_mark.png",children:Ge})]}),(0,t.jsxs)("div",{className:d().mainStage,children:[(0,t.jsx)("div",{className:d().draw,children:(0,t.jsx)(ie.Z,{leafletMapRef:s,onShapeCreate:C.onShapeCreate,onShapeEdit:C.onShapeEdit})}),(0,t.jsx)("div",{className:d().pblock,children:(0,t.jsx)("div",{className:d().progress,children:(0,t.jsx)(g.Z,{percent:50,status:"active"})})})]}),(0,t.jsxs)(b.Z,{disLoc:"right",children:[(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/intelligent_interaction.png",children:Je}),(0,t.jsx)(q.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",children:Ve}),(0,t.jsx)(q.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",children:He}),(0,t.jsx)(q.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:Xe}),(0,t.jsxs)(f.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of boundary simplification",content:(0,t.jsx)(y.Z,{}),trigger:U.curr=="boundry"?"click":"hover",children:[" ",(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/border_simplify.png",onClick:function(){U.setCurr("boundry")},children:me})]}),(0,t.jsxs)(f.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Setting of remote sensing",content:(0,t.jsx)(k,{}),trigger:U.curr=="colorgun"?"click":"hover",children:[" ",(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/remote_sensing_setting.png",onClick:function(){U.setCurr("colorgun")},children:Ie})]}),(0,t.jsxs)(f.Z,{overlayInnerStyle:{borderRadius:"0.5rem"},placement:"leftTop",title:"Switch grids",content:(0,t.jsx)(se.Z,{}),trigger:U.curr=="grid"?"click":"hover",children:[" ",(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/switch_grid.png",onClick:function(){U.setCurr("grid")},children:Ae})]}),(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/data_division.png",children:Qe}),(0,t.jsx)(P.Z,{imgSrc:"./pics/buttons/export.png",children:ke})]}),(0,t.jsxs)("div",{className:d().rightSideBar,children:[(0,t.jsx)("div",{className:d().determinOutline,children:(0,t.jsx)(c.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,children:$e})}),(0,t.jsx)(x.Z,{selectedLabel:oe.curr,onLabelSelect:function(re){oe.setCurr(re),console.log(re)},onLabelModify:function(){},onLabelDelete:function(){},onLabelAdd:function(){}}),(0,t.jsx)(le.Z,{annotations:Se,onAnnotationSelect:function(){},onAnnotationAdd:function(){},onAnnotationModify:function(){},onAnnotationDelete:function(){}})]})]})},Re=Oe}}]);