(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[690],{13237:function($){$.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___26yoA",toolBarButtonContainer:"toolBarButtonContainer___3TAcy",toolBarButton:"toolBarButton___utzQD",buttonText:"buttonText___10yo3",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___UC85Z",popover:"popover___V2uUa",slider:"slider___293AL",popoverLeft:"popoverLeft___2uQ3J"}},85024:function($){$.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function($){$.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},26647:function($){$.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",slider:"slider___ALra-",popoverLeft:"popoverLeft___15lGe"}},8978:function($,H,e){"use strict";e.d(H,{Z:function(){return m0}});var o0=e(11849),T=e(2824),q=e(91220),U=e(67294),F=e(85893);function B(n){if(!n||!n.width||!n.color||!n.points||n.points.length<2||n.frontendId==null)return"";var M=n.type=="rubber"?0:n.frontendId;return"".concat(n.width,",").concat(M,",").concat(n.points.join(","))}function g(n){var M,a=n.canvasRef,S=n.annotation,A=S.result;if(!A)return(0,F.jsx)(F.Fragment,{});var D=(M=a.current)===null||M===void 0?void 0:M.getContext("2d");if(!D)return(0,F.jsx)(F.Fragment,{});for(var x=[],n0=0,v=0;v<A.length;v++)A.at(v)==","?(x.push(parseFloat(A.slice(n0,v))),n0=v+1):A.at(v)=="|"?(x.push(parseFloat(A.slice(n0,v))),h(x,D,S),x=[],n0=v+1):v==A.length-1&&(x.push(parseFloat(A.slice(n0,A.length))),h(x,D,S));return(0,F.jsx)(F.Fragment,{})}function h(n,M,a){var S;if(n.length<4){console.log("found incorrect points:",n);return}var A=n[0],D=n[1];if(A==0){var x;b(M,n.slice(2),(x=a.label)===null||x===void 0?void 0:x.color);return}if(D==0){P(M,A,n.slice(2),void 0);return}P(M,A,n.slice(2),(S=a.label)===null||S===void 0?void 0:S.color)}function P(n,M,a,S){n.beginPath(),n.moveTo(a[0],a[1]);for(var A=0;A<=a.length/2-1;A++){var D=a[2*A],x=a[2*A+1];n.lineTo(D,x)}n.lineCap="round",n.lineJoin="round",n.lineWidth=M,S&&(n.strokeStyle=S),n.globalCompositeOperation=S?"source-over":"destination-out",n.stroke()}function b(n,M,a){console.log("renderPixel: ",M,a,n),n.globalCompositeOperation=a?"source-over":"destination-out",a&&(n.fillStyle=a);for(var S=0;S<=M.length/2-1;S++){var A=M[2*S],D=M[2*S+1];n.fillRect(A,D,1,1)}}function O(n){if(!n||n.length==0)return 0;var M=0,a=(0,q.Z)(n),S;try{for(a.s();!(S=a.n()).done;){var A=S.value;A.frontendId>M&&(M=A.frontendId)}}catch(D){a.e(D)}finally{a.f()}return M}function Q(n,M){return n=="rubber"||M==2?"rubber":"brush"}function m0(n){var M=(0,U.useState)(),a=(0,T.Z)(M,2),S=a[0],A=a[1],D=function(y){var r,Y;if(!(n.currentTool!="brush"&&n.currentTool!="rubber"||!((r=n.currentLabel)!==null&&r!==void 0&&r.color)||!n.brushSize)){var G=y.mouseX,V=y.mouseY,e0=Q(n.currentTool,y.e.evt.button);console.log("frontendId: ",n.frontendIdOps.frontendId,"maxId:",O(n.annotations));var R=n.frontendIdOps.frontendId>0?n.frontendIdOps.frontendId:O(n.annotations)+1;R!=n.frontendIdOps.frontendId&&n.frontendIdOps.setFrontendId(R);var W=B({width:n.brushSize||10,color:(Y=n.currentLabel)===null||Y===void 0?void 0:Y.color,points:[G,V,G,V],type:e0,frontendId:R});if(!!W){A(e0);var a0={dataId:n.dataId,label:n.currentLabel,labelId:n.currentLabel.labelId,frontendId:R,result:W,type:"brush"};n.onAnnotationAdd(a0)}}},x=function(y){var r;if(!(!S||!n.currentAnnotation||!n.currentAnnotation.result||n.currentAnnotation.result.length<2||!((r=n.currentLabel)!==null&&r!==void 0&&r.color))){var Y=y.mouseX,G=y.mouseY,V=n.currentAnnotation.result+",".concat(Y,",").concat(G);n.onAnnotationModify((0,o0.Z)((0,o0.Z)({},n.currentAnnotation),{},{result:V}))}},n0=function(){n.currentTool!="brush"&&n.currentTool!="rubber"||(A(void 0),n.onMouseUp())};return{onMouseDown:D,onMouseMove:x,onMouseUp:n0,drawAnnotation:g}}},57406:function($,H,e){"use strict";e.d(H,{pL:function(){return T},oo:function(){return q}});var o0=e(91220);function T(B){var g=0;if(!B)return g;var h=(0,o0.Z)(B),P;try{for(h.s();!(P=h.n()).done;){var b=P.value;!b||!b.frontendId||b.frontendId>g&&(g=b.frontendId)}}catch(O){h.e(O)}finally{h.f()}return g}function q(B){var g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(B);return g?{r:parseInt(g[1],16),g:parseInt(g[2],16),b:parseInt(g[3],16)}:null}function U(B){var g=B.toString(16);return g.length==1?"0"+g:g}function F(B,g,h){return"#"+U(B)+U(g)+U(h)}},14836:function($,H,e){"use strict";e.d(H,{Z:function(){return n0}});var o0=e(54421),T=e(38272),q=e(57663),U=e(71577),F=e(91220),B=e(67294),g=e(56159),h=e.n(g),P=e(49111),b=e(19650),O=e(2824),Q=e(11849),m0=e(85024),n=e.n(m0),M=e(63097),a=e(85893),S=function(y){var r=(0,Q.Z)({},y.annotation),Y=(0,B.useState)(r.invisible),G=(0,O.Z)(Y,2),V=G[0],e0=G[1],R=(0,B.useState)(0),W=(0,O.Z)(R,2),a0=W[0],z=W[1];(0,B.useEffect)(function(){e0(y.annotation.invisible)},[y.annotation.invisible]);var d0=(0,a.jsxs)(T.ZP.Item,{className:"".concat(n().listItem," ").concat(y.active?n().listItemActive:""),unselectable:"on",onClick:function(){y.onClick(r)},children:[(0,a.jsxs)(b.Z,{align:"center",size:5,children:[(0,a.jsx)("a",{className:n().eye,style:{backgroundImage:V?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(P0){P0.stopPropagation(),e0(!V),y.onAnnotationModify(r)}})," ",(0,a.jsx)("span",{className:n().annotationId,children:r.frontendId}),(0,a.jsx)("span",{className:n().labelName,children:r.label.name}),(0,a.jsx)(M.Z,{color:r.label.color})]}),(0,a.jsx)("a",{className:n().delete,onClick:function(P0){P0.stopPropagation();var c0=new Date().getTime();c0-a0<300||(z(c0),y.onAnnotationDelete(r))}})]});return d0},A=S,D=e(48971),x=function(y){var r=(0,D.YB)(),Y=r.formatMessage({id:"component.PPAnnotationList.annotationList"}),G=r.formatMessage({id:"component.PPAnnotationList.addAnnotation"}),V=new Set,e0=[],R=(0,F.Z)(y.annotations),W;try{for(R.s();!(W=R.n()).done;){var a0=W.value;V.has(a0.frontendId)||(e0.push(a0),V.add(a0.frontendId))}}catch(z){R.e(z)}finally{R.f()}return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(T.ZP,{className:h().labelList,size:"large",header:(0,a.jsx)("div",{className:h().listHeader,children:Y}),bordered:!0,dataSource:e0,renderItem:function(d0){var p;return(0,a.jsx)(A,{onClick:y.onAnnotationSelect,annotation:d0,active:d0.frontendId==((p=y.currAnnotation)===null||p===void 0?void 0:p.frontendId),onAnnotationDelete:y.onAnnotationDelete,onAnnotationModify:y.onAnnotationModify})},footer:function(){return y.onAnnotationAdd?(0,a.jsx)("div",{children:(0,a.jsx)(U.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){y.onAnnotationAdd()},block:!0,children:G})}):(0,a.jsx)("div",{})}})})},n0=x},27992:function($,H,e){"use strict";var o0=e(20136),T=e(55241),q=e(13062),U=e(71230),F=e(77883),B=e(70507),g=e(89032),h=e(15746),P=e(66126),b=e(75454),O=e(2824),Q=e(67294),m0=e(61541),n=e(26647),M=e.n(n),a=e(85893),S=0,A=100,D=10,x=function(v){var y=(0,Q.useState)(a0(v.size)),r=(0,O.Z)(y,2),Y=r[0],G=r[1];function V(z){G(a0(z))}var e0=v.step?v.step:10,R=v.minSize==null?S:v.minSize,W=v.maxSize==null?A:v.maxSize;function a0(z){return z==null?D:z<=R?R:z>=W?W:z}return(0,Q.useEffect)(function(){V(v.size)},[v.size]),(0,a.jsxs)(T.Z,{overlayClassName:"".concat(M().popover," ").concat(v.disLoc=="left"?M().popoverLeft:""),placement:v.disLoc||"right",content:(0,a.jsxs)(U.Z,{children:[(0,a.jsx)(h.Z,{span:16,children:(0,a.jsx)(b.Z,{className:M().slider,value:Y,max:W,min:R,onChange:function(d0){var p;(p=v.onChange)===null||p===void 0||p.call(0,d0)},tooltipVisible:!1})}),(0,a.jsx)(h.Z,{span:8,children:(0,a.jsx)(B.Z,{min:R,max:W,value:Y,onChange:function(d0){var p;(p=v.onChange)===null||p===void 0||p.call(0,d0)},step:e0})})]}),trigger:"hover",children:[" ",(0,a.jsx)(m0.Z,{imgSrc:v.imgSrc||"",onClick:v.onClick,active:v.active,children:v.children})]})};H.Z=x},10137:function($,H,e){"use strict";var o0=e(34669),T=e(54458),q=e(67294),U=e(85893),F=function(g){var h,P;return(0,U.jsxs)("div",{className:"progress",children:[(0,U.jsx)(T.Z,{className:"progressBar",percent:Math.ceil(g.project.finished/((h=g.task.all)===null||h===void 0?void 0:h.length)*100),status:"active",showInfo:!1})," ",(0,U.jsxs)("span",{className:"progressDesc",children:["Current labeling ",g.task.currIdx==null?1:g.task.currIdx+1," of"," ",(P=g.task.all)===null||P===void 0?void 0:P.length,". Already labeled ",g.project.finished||0,"."]})]})};H.Z=F},91861:function($,H,e){"use strict";e.d(H,{Ad:function(){return U},k3:function(){return F},Vd:function(){return B},td:function(){return g}});var o0=e(34792),T=e(48086),q=40;function U(){localStorage.removeItem("history"),F([])}function F(h){var P=localStorage.getItem("history"),b=P?JSON.parse(P):{index:-1,items:[]};if(JSON.stringify(b.items[b.index])!=JSON.stringify(h)){var O=b.index>q?b.index-q:0,Q=b.items.splice(O,b.index==0?1:b.index+1);b.items=Q.concat([h]),b.index<=q?b.index++:b.index=q+1,localStorage.setItem("history",JSON.stringify(b))}}function B(){var h=localStorage.getItem("history");if(!!h){var P=JSON.parse(h);if(!!P){if(P.index>=P.items.length-1){T.default.error("No next history!");return}return P.index++,localStorage.setItem("history",JSON.stringify(P)),P.items[P.index]}}}function g(){var h=localStorage.getItem("history");if(!!h){var P=JSON.parse(h);if(console.log("history",P),!P||!P.index||P.index<=1){T.default.error("No previous history!");return}return P.index--,localStorage.setItem("history",JSON.stringify(P)),P.items[P.index]}}},1690:function($,H,e){"use strict";e.r(H),e.d(H,{MOST_HISTORY_STEPS:function(){return F0},default:function(){return z0}});var o0=e(3182),T=e(11849),q=e(57663),U=e(71577),F=e(34792),B=e(48086),g=e(91220),h=e(2824),P=e(94043),b=e.n(P),O=e(67294),Q=e(48971),m0=e(8088),n=e(61541),M=e(44434),a=e(27992),S=e(5041),A=e(57436),D=e(14836),x=e(91861),n0=e(8978),v=e(65031),y=e(57406),r=e(85893);function Y(t,l){if(!(!t||!l))return l.join(",")}function G(t){var l,i=t.annotation;if(!i||!i.result||i.result.length<2||!((l=i.label)!==null&&l!==void 0&&l.color))return(0,r.jsx)(r.Fragment,{});var m=i.result.split(",").map(Number),I=i.label.color,u=(0,y.oo)(I);if(!u)return(0,r.jsx)(r.Fragment,{});var s=.3,E=void 0,_=[];return m.forEach(function(C,j){if(!E){E=C;return}_.push((0,r.jsx)(v.Cd,{onMouseDown:function(){t.currentTool=="editor"&&t.onSelect(i)},draggable:t.currentTool=="editor",onDragMove:function(c){var l0;c.cancelBubble=!0;var h0=(l0=t.stageRef)===null||l0===void 0?void 0:l0.current,X=h0.findOne(".baseImage"),w=!1,i0=c.target.x();i0>X.width()/2&&(i0=X.width()/2,w=!0),i0<-X.width()/2&&(i0=-X.width()/2,w=!0);var t0=c.target.y();t0>X.height()/2&&(t0=X.height()/2,w=!0),t0<-X.height()/2&&(t0=-X.height()/2,w=!0),w&&c.target.setPosition({x:i0,y:t0}),m[j-1]=i0,m[j]=t0;var g0=(0,T.Z)((0,T.Z)({},i),{},{result:m.join(",")});t.onDrag(g0)},onMouseOver:function(){var c;t.currentTool=="editor"&&(c=t.stageRef)!==null&&c!==void 0&&c.current&&(t.stageRef.current.container().style.cursor="cell")},onMouseOut:function(){var c;(c=t.stageRef)!==null&&c!==void 0&&c.current&&(t.stageRef.current.container().style.cursor="default")},x:E,y:C,radius:5/t.scale,fill:I})),E=void 0}),(0,r.jsxs)(v.ZA,{children:[(0,r.jsx)(v.x1,{onMouseOver:function(){t.currentTool=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){t.currentTool=="editor"&&t.onSelect(i)},stroke:I,strokeWidth:2/t.scale,globalCompositeOperation:"source-over",lineCap:"round",points:m,tension:0,closed:!0,fill:"rgba(".concat(u.r,", ").concat(u.g,", ").concat(u.b,", ").concat(s,")")}),_]},i.frontendId)}function V(t){var l=0;if(!t)return l;var i=(0,g.Z)(t),m;try{for(i.s();!(m=i.n()).done;){var I=m.value;!I||!I.frontendId||I.frontendId>l&&(l=I.frontendId)}}catch(u){i.e(u)}finally{i.f()}return l}function e0(t){var l=function(s,E){var _,C,j=Y((_=t.currentLabel)===null||_===void 0?void 0:_.color,[s,E]);!j||(console.log(j),t.onAnnotationAdd({dataId:t.dataId,type:"polygon",frontendId:V(t.annotations)+1,label:t.currentLabel,labelId:(C=t.currentLabel)===null||C===void 0?void 0:C.labelId,result:j}))},i=function(s,E){var _;if(!(!t.currentAnnotation||!t.currentAnnotation.result||!((_=t.currentLabel)!==null&&_!==void 0&&_.color))){var C=t.currentAnnotation.result+",".concat(s,",").concat(E),j=(0,T.Z)((0,T.Z)({},t.currentAnnotation),{},{result:C});t.modifyAnnoByFrontendId(j)}},m=function(s){if(t.currentTool=="polygon"){var E=s.mouseX+s.offsetX,_=s.mouseY+s.offsetY;console.log("currentAnnotation:",t.currentAnnotation),t.currentAnnotation?i(E,_):l(E,_)}},I=function(){t.currentTool=="polygon"&&t.onMouseUp&&t.onMouseUp()};return{onMouseDown:m,onMouseMove:function(){},onMouseUp:I,drawAnnotation:G}}var R=e(10137),W=e(98731),a0=e(20136),z=e(55241),d0=e(47673),p=e(24044),P0=e(9715),c0=e(93766),j0=e(13237),x0=e.n(j0),_0="http://127.0.0.1:1234/model",L0=function(l){var i=c0.Z.useForm(),m=(0,h.Z)(i,1),I=m[0],u=l.model,s=l.project;(0,O.useEffect)(function(){var _,C,j,N;if(!!s.curr){var c=s.curr.otherSettings?s.curr.otherSettings:{},l0={mlBackendUrl:c.mlBackendUrl,mlModelAbsPath:(_=c.models)===null||_===void 0||(C=_.EISeg)===null||C===void 0?void 0:C.mlModelAbsPath,mlWeightAbsPath:(j=c.models)===null||j===void 0||(N=j.EISeg)===null||N===void 0?void 0:N.mlWeightAbsPath};I.setFieldsValue(l0),c!=null&&c.mlBackendUrl?u.setMlBackendUrl(c.mlBackendUrl):u.setMlBackendUrl(_0),c.mlModelAbsPath&&c.mlWeightAbsPath&&u.load(c.mlModelAbsPath,c.mlWeightAbsPath)}},[s.curr]);function E(_){if(console.log("saveMlsettings",s.curr,_),!s.curr){B.default.error("Please select project first!");return}s.curr.otherSettings||(s.curr.otherSettings={}),s.curr.otherSettings.mlBackendUrl=I.getFieldValue("mlBackendUrl"),s.curr.otherSettings.models={},s.curr.otherSettings.models.EISeg={},s.curr.otherSettings.models.EISeg.mlModelAbsPath=I.getFieldValue("mlModelAbsPath"),s.curr.otherSettings.models.EISeg.mlWeightAbsPath=I.getFieldValue("mlWeightAbsPath"),s.curr.otherSettings.perviousModel=_.modelName,s.update(s.curr.projectId,{otherSettings:s.curr.otherSettings}),u.setMlBackendUrl(s.curr.otherSettings.mlBackendUrl),u.load(s.curr.otherSettings.models.EISeg.mlModelAbsPath,s.curr.otherSettings.models.EISeg.mlWeightAbsPath),B.default.info("Ml setting saved. Let's start trainig or inference!")}return(0,r.jsxs)(z.Z,{overlayClassName:"".concat(x0().popover," ").concat(x0().popoverLeft),placement:"left",content:(0,r.jsxs)(c0.Z,{form:I,layout:"horizontal",size:"large",onFinish:function(C){console.log("form finish",C),E(C)},hidden:s.curr==null,children:[(0,r.jsx)(c0.Z.Item,{name:"mlBackendUrl",label:"ML Backend URL",labelCol:{span:6},wrapperCol:{span:18},initialValue:_0,style:{fontSize:"1.5rem"},children:(0,r.jsx)(p.Z,{placeholder:_0})}),(0,r.jsx)(c0.Z.Item,{name:"mlModelAbsPath",label:"Model Path",labelCol:{span:6},wrapperCol:{span:18},style:{fontSize:"1.5rem"},children:(0,r.jsx)(p.Z,{placeholder:"Absolute path"})}),(0,r.jsx)(c0.Z.Item,{name:"mlWeightAbsPath",label:"Weight Path",labelCol:{span:6},wrapperCol:{span:18},style:{fontSize:"1.5rem"},children:(0,r.jsx)(p.Z,{placeholder:"Absolute path"})}),(0,r.jsx)(c0.Z.Item,{wrapperCol:{span:16,offset:6},children:(0,r.jsx)(U.Z,{htmlType:"submit",type:"primary",style:{height:"2.5rem",width:"48%"},block:!0,children:"Save"})})]}),trigger:"hover",children:[" ",(0,r.jsx)(n.Z,{imgSrc:l.imgSrc||"",onClick:l.onClick,active:l.active,children:l.children})]})},T0=L0,Y0={result:[[.3779466152191162,.38711845874786377,.36106088757514954,.35420000553131104,.35632404685020447,.36673659086227417,.3709605634212494,.33228039741516113,.3710925579071045,.3494248390197754,.34312722086906433,.3462066650390625,.3746175765991211,.3791941702365875,.4216013550758362,.44569116830825806,.40616583824157715,.4613204002380371,.49154922366142273,.4584124684333801,.4600294828414917,.4803354740142822,.46287786960601807,.43543994426727295,.43747758865356445,.4064893126487732,.3941977620124817,.39790475368499756,.39159834384918213,.3925873935222626,.3789200186729431,.36321160197257996],[.3818621039390564,.3770502805709839,.36075377464294434,.3548894226551056,.3503073453903198,.335567444562912,.3341645896434784,.33101293444633484,.3728009760379791,.364932656288147,.37297818064689636,.37586647272109985,.3893028497695923,.39986884593963623,.41131657361984253,.4522101581096649,.4333687722682953,.5002316832542419,.4971569776535034,.473648339509964,.4820094704627991,.46783292293548584,.4617140591144562,.44852927327156067,.44560548663139343,.44700291752815247,.4248964786529541,.44343101978302,.41931068897247314,.43451547622680664,.4378070831298828,.3568068742752075],[.3652324676513672,.35223522782325745,.35097530484199524,.360146701335907,.36671239137649536,.3395833373069763,.35282737016677856,.33361345529556274,.377223938703537,.38735657930374146,.39466923475265503,.3888944387435913,.3632313311100006,.3888370096683502,.4123692810535431,.41089701652526855,.4431883990764618,.5125359296798706,.5071693658828735,.47963064908981323,.46734818816185,.4608532786369324,.4394238293170929,.40698742866516113,.42963457107543945,.4184359908103943,.39965513348579407,.4161875247955322,.4067150950431824,.45255592465400696,.44494757056236267,.34891369938850403],[.364960253238678,.3754047155380249,.3721790313720703,.37246841192245483,.3652416467666626,.32984012365341187,.3496708571910858,.3422262966632843,.3380891978740692,.3428453207015991,.36001724004745483,.36075884103775024,.36690282821655273,.375881552696228,.3909446597099304,.3976140320301056,.43047186732292175,.5223039984703064,.5174918174743652,.5091606974601746,.4703259766101837,.46562325954437256,.4584425091743469,.4025508463382721,.4088236391544342,.41495299339294434,.41274765133857727,.394614577293396,.3999204635620117,.43086522817611694,.443092942237854,.3433324098587036],[.34178581833839417,.3906759023666382,.3692866563796997,.361131876707077,.3499326705932617,.3162209391593933,.31167617440223694,.3333600163459778,.3163505494594574,.338070273399353,.35670241713523865,.3636510670185089,.35625404119491577,.35763710737228394,.38493406772613525,.39124634861946106,.4325636029243469,.5645959973335266,.5685874223709106,.5350329279899597,.4992934465408325,.4620708227157593,.45242631435394287,.41027894616127014,.4038461744785309,.3944956958293915,.39921683073043823,.3937588334083557,.38950315117836,.3928646147251129,.4300973415374756,.33759239315986633],[.34255340695381165,.384326696395874,.35354241728782654,.32820284366607666,.34075650572776794,.310611367225647,.3198155462741852,.3376222848892212,.3267553746700287,.33798253536224365,.3261478543281555,.3417035639286041,.34279346466064453,.3464927673339844,.3819480240345001,.3768705129623413,.43024203181266785,.5799015164375305,.5669912099838257,.5345537066459656,.5366686582565308,.5029425621032715,.4881816804409027,.4266446828842163,.3896041512489319,.38750505447387695,.3878398835659027,.401533305644989,.38611483573913574,.4102136492729187,.43251603841781616,.3381301164627075],[.34610551595687866,.37768492102622986,.3577062487602234,.321483314037323,.3238357901573181,.31036683917045593,.32922878861427307,.33748194575309753,.34403321146965027,.3489550054073334,.32951661944389343,.35581493377685547,.3549908995628357,.34664082527160645,.37512969970703125,.37657931447029114,.4325118064880371,.6002883911132812,.5718269348144531,.5072413086891174,.5073626041412354,.5133922100067139,.48958104848861694,.45026227831840515,.41855117678642273,.38928452134132385,.3869919180870056,.3884861171245575,.38088345527648926,.4067824184894562,.42561301589012146,.3727574646472931],[.36236464977264404,.38462936878204346,.33172523975372314,.2767360210418701,.28566184639930725,.29154667258262634,.32516488432884216,.3253626823425293,.30838415026664734,.3315502405166626,.3262888789176941,.3520568013191223,.35253870487213135,.3447986841201782,.3818697929382324,.3651794195175171,.4231885075569153,.5827294588088989,.5951063632965088,.6352673768997192,.5757752656936646,.48387131094932556,.46553540229797363,.4512472450733185,.44570550322532654,.4316057562828064,.41964590549468994,.3941313624382019,.37175554037094116,.3886064291000366,.40585458278656006,.3790917694568634],[.35083019733428955,.3677082061767578,.33382877707481384,.3098861575126648,.3019915223121643,.3109188377857208,.3330777883529663,.331575870513916,.31939375400543213,.34113019704818726,.34969979524612427,.3529251217842102,.36156511306762695,.35511070489883423,.37965914607048035,.37223300337791443,.4537010192871094,.5680437088012695,.6448143720626831,.7226863503456116,.729232907295227,.6868923902511597,.5698102116584778,.4619525372982025,.46818724274635315,.43513986468315125,.42044782638549805,.3994002342224121,.39396214485168457,.3904518187046051,.40890100598335266,.3930703103542328],[.3359583914279938,.3705343008041382,.35527661442756653,.3399384319782257,.34458956122398376,.3259856700897217,.347974956035614,.3495017886161804,.3527892231941223,.35826316475868225,.35742005705833435,.335483193397522,.34679195284843445,.36213573813438416,.38948914408683777,.3846794366836548,.4752236008644104,.5317398905754089,.6341782212257385,.7260967493057251,.7400858402252197,.7263891696929932,.6071794629096985,.49351879954338074,.4718652367591858,.4380945563316345,.44395726919174194,.42750805616378784,.4137647747993469,.41625750064849854,.42252638936042786,.4066489040851593],[.3289949595928192,.37435805797576904,.3653024733066559,.34567791223526,.37014514207839966,.36809563636779785,.36826398968696594,.32743436098098755,.3298226594924927,.34234797954559326,.34268611669540405,.3254646956920624,.3090794086456299,.3477054834365845,.37110430002212524,.3621593713760376,.4475082755088806,.487918496131897,.601881742477417,.6983312964439392,.7557751536369324,.7451871633529663,.5793305039405823,.4939006268978119,.47265419363975525,.42300844192504883,.43300366401672363,.41770070791244507,.414137601852417,.42620089650154114,.41289666295051575,.4050122797489166],[.2583468556404114,.3622201085090637,.3609732985496521,.35103529691696167,.3431868553161621,.36043819785118103,.3594401776790619,.33510416746139526,.31773367524147034,.32706841826438904,.33306169509887695,.329282283782959,.3103845715522766,.3467973470687866,.36439552903175354,.35807719826698303,.40837693214416504,.46938514709472656,.6127392053604126,.7233112454414368,.7669434547424316,.7611733675003052,.5953957438468933,.5389460921287537,.4672558009624481,.42192357778549194,.42329633235931396,.42473718523979187,.40417638421058655,.408004492521286,.4068392515182495,.45992550253868103],[.26873499155044556,.3717286288738251,.3643631339073181,.3532456159591675,.3495698571205139,.3619597554206848,.3786068260669708,.3432343006134033,.3145405650138855,.32395321130752563,.33640119433403015,.33749133348464966,.31600821018218994,.3369048535823822,.3504919409751892,.34988847374916077,.3846014440059662,.4548245966434479,.6552940011024475,.7398929595947266,.7898313999176025,.7753756642341614,.6361410617828369,.550889790058136,.4542275369167328,.41850578784942627,.4201924800872803,.4233487844467163,.4089168310165405,.40734779834747314,.4125276207923889,.45579835772514343],[.2889721095561981,.3404158651828766,.34746238589286804,.3323819637298584,.36239108443260193,.36021608114242554,.3564058542251587,.34031766653060913,.3106665015220642,.32129210233688354,.32644376158714294,.3231737017631531,.30393165349960327,.34000542759895325,.3698198199272156,.3764057457447052,.37690526247024536,.44695284962654114,.6244124174118042,.7085537910461426,.7864880561828613,.7922757267951965,.6478504538536072,.5585101842880249,.46907946467399597,.43042469024658203,.4196140766143799,.4143720269203186,.41768819093704224,.4123932123184204,.40979909896850586,.40944749116897583],[.33511802554130554,.3354792892932892,.3483961820602417,.3393648862838745,.36110979318618774,.37371599674224854,.3693099021911621,.3380741477012634,.31597936153411865,.3110752999782562,.3071911334991455,.29553914070129395,.28971895575523376,.3283897936344147,.3738657832145691,.359753280878067,.37170153856277466,.45006322860717773,.622103214263916,.7240833044052124,.8724844455718994,.8468523025512695,.6292383670806885,.5481832027435303,.47547808289527893,.4294469654560089,.4108424484729767,.4051211476325989,.4253206253051758,.42601343989372253,.4097977876663208,.3356857895851135],[.3555319011211395,.3408556282520294,.35363197326660156,.3417183756828308,.3509896397590637,.38215622305870056,.41220414638519287,.3597573935985565,.3141809105873108,.299405962228775,.2974483370780945,.2919771671295166,.2913997769355774,.32095572352409363,.373879075050354,.3556964099407196,.3629939556121826,.47226566076278687,.6256035566329956,.7390267252922058,.8593417406082153,.8262102603912354,.6343622803688049,.5576579570770264,.4742991030216217,.41313984990119934,.3864082098007202,.3817637264728546,.4082636833190918,.41419312357902527,.4119032323360443,.2635403275489807],[.3506373465061188,.32203149795532227,.34963458776474,.32425546646118164,.33225691318511963,.35579705238342285,.38111579418182373,.3564165532588959,.3126765489578247,.3007081151008606,.30092623829841614,.30085325241088867,.2974894046783447,.326341450214386,.36822161078453064,.35820019245147705,.3826185166835785,.4894598424434662,.6533626317977905,.70644211769104,.7451343536376953,.7429384589195251,.6669357419013977,.5394930243492126,.45886534452438354,.41244491934776306,.39533960819244385,.370727002620697,.386724591255188,.3909628987312317,.40651923418045044,.24896344542503357],[.3370128571987152,.30008041858673096,.3007066547870636,.2964634597301483,.31920456886291504,.3513490855693817,.3618793785572052,.3482736349105835,.3220705986022949,.3098466992378235,.306601345539093,.30917924642562866,.32083860039711,.33934545516967773,.3853139877319336,.3959599435329437,.42794349789619446,.5098592042922974,.6510905027389526,.7034169435501099,.7345707416534424,.7295455932617188,.6945785880088806,.5392878651618958,.46230608224868774,.4132283627986908,.40620577335357666,.39428097009658813,.39259806275367737,.38836321234703064,.3802737891674042,.2869125008583069],[.3107353448867798,.28716710209846497,.2810332477092743,.28914326429367065,.3127279281616211,.349570631980896,.35278424620628357,.3424120545387268,.3312514126300812,.3183543384075165,.31009000539779663,.3195717930793762,.31631040573120117,.32442909479141235,.3819769620895386,.39367008209228516,.41426554322242737,.48430579900741577,.6400377750396729,.682829737663269,.7346150875091553,.7265263199806213,.6635222434997559,.5312811732292175,.4713155925273895,.40454715490341187,.41512030363082886,.4182337820529938,.39747387170791626,.3760755658149719,.3628138303756714,.3463020622730255],[.30060598254203796,.3060090243816376,.3139290511608124,.3145269751548767,.30912041664123535,.35013264417648315,.35046622157096863,.33206114172935486,.322023868560791,.3207645118236542,.3205072283744812,.32279807329177856,.3099812865257263,.3307061493396759,.3545922636985779,.3684121072292328,.39094099402427673,.43648841977119446,.6046525239944458,.6440432071685791,.6817156672477722,.6866225600242615,.6455923318862915,.5251345634460449,.4481634497642517,.4150755703449249,.4251801371574402,.404987633228302,.37328672409057617,.36327677965164185,.3602195680141449,.3206213116645813],[.30405154824256897,.3178442716598511,.33336877822875977,.3373711109161377,.32321715354919434,.3630528748035431,.3537922501564026,.3336135447025299,.30300673842430115,.31718388199806213,.3529442846775055,.34015488624572754,.3124402165412903,.3555675745010376,.35390767455101013,.37345024943351746,.4144602119922638,.44640690088272095,.573625922203064,.6119270324707031,.6456900835037231,.6455104351043701,.5934235453605652,.484555721282959,.4161651134490967,.3811432719230652,.3861028552055359,.3659202456474304,.34390294551849365,.3247116208076477,.3456142544746399,.32664284110069275],[.2826228737831116,.2938840985298157,.30609411001205444,.29632243514060974,.2861210107803345,.30216431617736816,.28895461559295654,.2819651961326599,.2588002383708954,.30655887722969055,.34061241149902344,.32973647117614746,.3005189895629883,.29779112339019775,.2948862910270691,.3190575838088989,.3858416974544525,.4116919934749603,.5491650104522705,.5732342004776001,.5938672423362732,.5976152420043945,.5155865550041199,.45706799626350403,.3356960117816925,.31694191694259644,.3380652368068695,.3176265358924866,.315368115901947,.3020714521408081,.3154049515724182,.32578057050704956]]};function D0(t){var l,i,m=t.canvasRef;if(!t.interactorData||!((l=t.label)!==null&&l!==void 0&&l.color))return(0,r.jsx)(r.Fragment,{});var I=t.interactorData,u=(i=m.current)===null||i===void 0?void 0:i.getContext("2d");return u?(U0(B0(I,t.threshold),u,t.label.color),(0,r.jsx)(r.Fragment,{})):(0,r.jsx)(r.Fragment,{})}function B0(t,l){var i=l?l*.01:.5,m=[],I=0,u=(0,g.Z)(t),s;try{for(u.s();!(s=u.n()).done;){var E=s.value,_=0,C=(0,g.Z)(E),j;try{for(C.s();!(j=C.n()).done;){var N=j.value;N>=i&&m.push(_,I),_++}}catch(c){C.e(c)}finally{C.f()}I++}}catch(c){u.e(c)}finally{u.f()}return m}function Z0(t,l,i,m,I){if(!m||!I||!t)return null;var u=B0(t,l),s=0,E=C0(i),_="".concat(s,",").concat(E,",")+u.join(","),C={dataId:m,label:I,labelId:I.labelId,frontendId:E,result:_,type:"brush"};return C}function U0(t,l,i){if(t.length<4){console.log("found incorrect points:",t);return}R0(l,t.slice(2),i)}function R0(t,l,i){t.globalCompositeOperation=i?"source-over":"destination-out",i&&(t.fillStyle=i);for(var m=0;m<=l.length/2-1;m++){var I=l[2*m],u=l[2*m+1];t.fillRect(I,u,1,1)}}function C0(t){if(!t||t.length==0)return 0;var l=0,i=(0,g.Z)(t),m;try{for(i.s();!(m=i.n()).done;){var I=m.value;I.frontendId>l&&(l=I.frontendId)}}catch(u){i.e(u)}finally{i.f()}return l}function p0(t){var l=(0,O.useState)([]),i=(0,h.Z)(l,2),m=i[0],I=i[1],u=(0,Q.tT)("InteractorData",function(j){return j.setInteractorData}),s=t.model,E=function(){var j=(0,o0.Z)(b().mark(function N(c){var l0,h0,X,w,i0,t0,g0;return b().wrap(function(J){for(;;)switch(J.prev=J.next){case 0:if(!(t.currentTool!="interactor"||!((l0=t.currentLabel)!==null&&l0!==void 0&&l0.color))){J.next=2;break}return J.abrupt("return");case 2:if(h0=Math.round(c.mouseX),X=Math.round(c.mouseY),console.log("frontendId: ",t.frontendIdOps.frontendId,"maxId:",C0(t.annotations)),w=t.frontendIdOps.frontendId>0?t.frontendIdOps.frontendId:C0(t.annotations)+1,w!=t.frontendIdOps.frontendId&&t.frontendIdOps.setFrontendId(w),m.push(new Array(h0,X,c.e.evt.button!=2)),I(m),!(!m.length||!c.stageRef.current||w==null)){J.next=11;break}return J.abrupt("return");case 11:return i0=c.stageRef.current,t0=i0.findOne(".baseImage").toDataURL().slice(22),J.next=15,s.predict({format:"b64",img:t0,other:{clicks:m}});case 15:if(g0=J.sent,g0){J.next=18;break}return J.abrupt("return");case 18:u(g0.result);case 19:case"end":return J.stop()}},N)}));return function(c){return j.apply(this,arguments)}}(),_=function(){},C=function(){t.currentTool=="interactor"&&t.onMouseUp()};return{onMouseDown:E,onMouseMove:_,onMouseUp:C,drawAnnotation:D0}}var F0=40,W0=function(){var l,i=(0,O.useState)(0),m=(0,h.Z)(i,2),I=m[0],u=m[1],s=(0,O.useState)(10),E=(0,h.Z)(s,2),_=E[0],C=E[1],j=(0,O.useState)(50),N=(0,h.Z)(j,2),c=N[0],l0=N[1],h0=(0,O.useState)(60),X=(0,h.Z)(h0,2),w=X[0],i0=X[1],t0=(0,Q.tT)("InteractorData"),g0=t0.interactorData,O0=t0.setInteractorData,J=(0,W.RZ)(O.useState),v0=(0,W.$L)(O.useState,O.useEffect,{effectTrigger:{postTaskChange:function(){return(0,x.Ad)()}},label:{oneHot:!0,postSelect:function(){d.setCurr(void 0),u(0)},preUnsetCurr:N0},tool:{defaultTool:"mover"},task:{push:!0}}),L=v0.tool,b0=v0.task,s0=v0.data,M0=v0.project,A0=v0.scale,u0=v0.label,d=v0.annotation,k0=v0.refreshVar;function N0(){d.setCurr(void 0),u(0),L.setCurr("mover")}var Z=function(o){d.setCurr(o),o!=null&&o.frontendId?u(o.frontendId):u(0)};(0,O.useEffect)(function(){(0,x.Ad)()},[]),(0,O.useEffect)(function(){var f=setInterval(function(){var o;console.log("triggered!",s0),d.pushToBackend((o=s0.curr)===null||o===void 0?void 0:o.dataId)},2e4);return function(){clearInterval(f)}},[d,s0,s0.curr]);var K0=function(o){!o||(d.all.pop(),d.all.push(o),Z(o),d.setAll(d.all))},E0=function(o){var K=[],r0=(0,g.Z)(d.all),f0;try{for(r0.s();!(f0=r0.n()).done;){var y0=f0.value;y0.frontendId==o.frontendId?K.push(o):K.push(y0)}}catch(I0){r0.e(I0)}finally{r0.f()}Z(o),d.setAll(K)},S0={dataId:(l=s0.curr)===null||l===void 0?void 0:l.dataId,currentLabel:u0.curr,brushSize:_,scale:A0.curr,currentTool:L.curr,annotations:d.all,currentAnnotation:d.curr,onAnnotationAdd:function(o){var K=d.all.concat([o]);d.setAll(K),Z(o)},onAnnotationModify:K0,modifyAnnoByFrontendId:E0,onMouseUp:function(){var o;L.curr!="interactor"&&((0,x.k3)({annos:d.all,currAnno:d.curr}),d.pushToBackend((o=s0.curr)===null||o===void 0?void 0:o.dataId,d.all))},frontendIdOps:{frontendId:I,setFrontendId:u},model:J},k=(0,Q.YB)(),$0={polygon:e0(S0),brush:(0,n0.Z)(S0),interactor:p0(S0)};return(0,r.jsxs)(m0.Z,{className:"segment",children:[(0,r.jsxs)(M.Z,{children:[(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/polygon.png",active:L.curr=="polygon",onClick:function(){if(!u0.curr){B.default.error("Please select a label first");return}L.setCurr("polygon"),Z(void 0)},children:k.formatMessage({id:"pages.toolBar.polygon"})}),(0,r.jsx)(n.Z,{active:L.curr=="editor",imgSrc:"./pics/buttons/edit.png",onClick:function(){L.setCurr("editor"),Z(void 0)},children:k.formatMessage({id:"pages.toolBar.edit"})}),(0,r.jsx)(a.Z,{imgSrc:"./pics/buttons/brush.png",size:_,active:L.curr=="brush",onClick:function(){if(!u0.curr){B.default.error("Please select a label first");return}L.curr!="rubber"&&L.curr!="brush"&&Z(void 0),L.setCurr("brush")},onChange:function(o){C(o)},children:k.formatMessage({id:"pages.toolBar.brush"})}),(0,r.jsx)(a.Z,{size:_,active:L.curr=="rubber",onClick:function(){L.curr!="rubber"&&L.curr!="brush"&&Z(void 0),L.setCurr("rubber")},onChange:function(o){C(o)},imgSrc:"./pics/buttons/rubber.png",children:k.formatMessage({id:"pages.toolBar.rubber"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){A0.change(.1)},children:k.formatMessage({id:"pages.toolBar.zoomIn"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){A0.change(-.1)},children:k.formatMessage({id:"pages.toolBar.zoomOut"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){var o;d.pushToBackend((o=s0.curr)===null||o===void 0?void 0:o.dataId)},children:k.formatMessage({id:"pages.toolBar.save"})}),(0,r.jsx)(n.Z,{active:L.curr=="mover",imgSrc:"./pics/buttons/move.png",onClick:function(){L.setCurr("mover")},children:k.formatMessage({id:"pages.toolBar.move"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var o=(0,x.td)();o&&(d.setAll(o.annos),Z(o.currAnno))},children:k.formatMessage({id:"pages.toolBar.unDo"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var o=(0,x.Vd)();o&&(d.setAll(o.annos),Z(o.currAnno))},children:k.formatMessage({id:"pages.toolBar.reDo"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/clear_mark.png",onClick:function(){d.setAll([]),d.setCurr(void 0)},children:k.formatMessage({id:"pages.toolBar.clearMark"})})]}),(0,r.jsxs)("div",{id:"dr",className:"mainStage",children:[(0,r.jsx)("div",{className:"draw",children:(0,r.jsx)(A.Z,{scale:A0.curr,annotations:d.all,currentTool:L.curr,currentAnnotation:d.curr,currentLabel:u0.curr,setCurrentAnnotation:Z,onAnnotationModify:E0,onAnnotationModifyComplete:function(){L.curr!="interactor"&&(0,x.k3)({annos:d.all,currAnno:d.curr})},frontendIdOps:{frontendId:I,setFrontendId:u},imgSrc:s0.imgSrc,transparency:w,threshold:c,onAnnotationAdd:function(o){var K=d.all.concat([o]);d.setAll(K),d.curr||Z(o)},drawTool:$0,refresh:k0})}),(0,r.jsx)("div",{className:"pblock",children:(0,r.jsx)(R.Z,{task:b0,project:M0})}),(0,r.jsx)("div",{className:"prevTask",onClick:function(){!b0.prevTask()||Z(void 0)}}),(0,r.jsx)("div",{className:"nextTask",onClick:function(){!b0.nextTask()||Z(void 0)}})]}),(0,r.jsxs)(M.Z,{disLoc:"right",children:[(0,r.jsx)(T0,{imgSrc:"./pics/buttons/intelligent_interaction.png",active:L.curr=="interactor",onClick:function(){L.setCurr("interactor")},model:J,project:M0,children:k.formatMessage({id:"pages.toolBar.interactor"})}),(0,r.jsx)(a.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",size:c,maxSize:100,minSize:10,step:10,onChange:function(o){l0(o)},children:k.formatMessage({id:"pages.toolBar.segmentThreshold"})}),(0,r.jsx)(a.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",size:w,maxSize:100,minSize:0,onChange:function(o){i0(o)},children:k.formatMessage({id:"pages.toolBar.transparency"})}),(0,r.jsx)(a.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:k.formatMessage({id:"pages.toolBar.visualRadius"})}),(0,r.jsx)(n.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){Q.m8.push("/project_overview?projectId=".concat(M0.curr.projectId))},children:"Project Overview"})]}),(0,r.jsxs)("div",{className:"rightSideBar",children:[(0,r.jsx)("div",{className:"determinOutline",children:(0,r.jsx)(U.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){if(L.curr=="interactor"){var o;console.log(L.curr);var K=Z0(g0,c,d.all,(o=s0.curr)===null||o===void 0?void 0:o.dataId,u0.curr);if(K){var r0,f0=d.all.concat([K]);d.setAll(f0),Z(K),d.pushToBackend((r0=s0.curr)===null||r0===void 0?void 0:r0.dataId,f0)}}O0([]),Z(void 0)},children:k.formatMessage({id:"pages.toolBar.determineOutline"})})}),(0,r.jsx)(S.Z,{hideColorPicker:!1,labels:u0.all,activeIds:u0.activeIds,onLabelSelect:u0.onSelect,onLabelModify:function(){},onLabelDelete:u0.remove,onLabelAdd:function(o){u0.create((0,T.Z)((0,T.Z)({},o),{},{projectId:M0.curr.projectId})).then(function(K){Z(void 0),u0.setCurr(K)})}}),(0,r.jsx)(D.Z,{currAnnotation:d.curr,annotations:d.all,onAnnotationSelect:function(o){o!=null&&o.delete||Z(o)},onAnnotationAdd:function(){Z(void 0)},onAnnotationModify:function(){},onAnnotationDelete:function(){var f=(0,o0.Z)(b().mark(function o(K){var r0,f0;return b().wrap(function(I0){for(;;)switch(I0.prev=I0.next){case 0:return f0=d.all.filter(function(H0){return H0.frontendId!=K.frontendId}),d.setAll(f0),Z(void 0),I0.next=5,d.pushToBackend((r0=s0.curr)===null||r0===void 0?void 0:r0.dataId,f0);case 5:case"end":return I0.stop()}},o)}));return function(o){return f.apply(this,arguments)}}()})]})]})},z0=W0}}]);