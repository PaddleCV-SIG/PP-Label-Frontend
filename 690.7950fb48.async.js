(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[690],{13237:function(Y){Y.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___26yoA",toolBarButtonContainer:"toolBarButtonContainer___3TAcy",toolBarButton:"toolBarButton___utzQD",buttonText:"buttonText___10yo3",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___UC85Z",popover:"popover___V2uUa",slider:"slider___293AL",popoverLeft:"popoverLeft___2uQ3J"}},85024:function(Y){Y.exports={listItem:"listItem___u4Q82",eye:"eye___BwaRm",delete:"delete___31JB_",roundBall:"roundBall___23A7l",popover:"popover___1BNET",annotationId:"annotationId___zAzX4",labelName:"labelName___2ohxn",listItemActive:"listItemActive___2QnA3"}},56159:function(Y){Y.exports={labelList:"labelList___v7C6K",listHeader:"listHeader___1aY8R",eye:"eye___2MKbp",roundBall:"roundBall___187XH"}},26647:function(Y){Y.exports={toolBarButtonContainerWrapper:"toolBarButtonContainerWrapper___1FTWb",toolBarButtonContainer:"toolBarButtonContainer___1Vahn",toolBarButton:"toolBarButton___3mR2H",buttonText:"buttonText___Y0WDm",toolBarButtonContainerWrapperActive:"toolBarButtonContainerWrapperActive___3lRZ8",popover:"popover___3zzu2",slider:"slider___ALra-",popoverLeft:"popoverLeft___15lGe"}},8978:function(Y,V,n){"use strict";n.d(V,{Z:function(){return U}});var r0=n(11849),j=n(2824),G=n(91220),L=n(67294),N=n(85893);function T(t){if(!t||!t.width||!t.color||!t.points||t.points.length<2||t.frontendId==null)return"";var C=t.type=="rubber"?0:t.frontendId;return"".concat(t.width,",").concat(C,",").concat(t.points.join(","))}function S(t){var C,s=t.canvasRef,x=t.annotation,i=x.result;if(!i)return(0,N.jsx)(N.Fragment,{});var D=(C=s.current)===null||C===void 0?void 0:C.getContext("2d");if(!D)return(0,N.jsx)(N.Fragment,{});for(var E=[],w=0,c=0;c<i.length;c++)i.at(c)==","?(E.push(parseFloat(i.slice(w,c))),w=c+1):i.at(c)=="|"?(E.push(parseFloat(i.slice(w,c))),A(E,D,x),E=[],w=c+1):c==i.length-1&&(E.push(parseFloat(i.slice(w,i.length))),A(E,D,x));return(0,N.jsx)(N.Fragment,{})}function A(t,C,s){var x;if(t.length<4){console.log("found incorrect points:",t);return}var i=t[0],D=t[1];if(i==0){var E;y(C,t.slice(2),(E=s.label)===null||E===void 0?void 0:E.color);return}if(D==0){v(C,i,t.slice(2),void 0);return}v(C,i,t.slice(2),(x=s.label)===null||x===void 0?void 0:x.color)}function v(t,C,s,x){t.beginPath(),t.moveTo(s[0],s[1]);for(var i=0;i<=s.length/2-1;i++){var D=s[2*i],E=s[2*i+1];t.lineTo(D,E)}t.lineCap="round",t.lineJoin="round",t.lineWidth=C,x&&(t.strokeStyle=x),t.globalCompositeOperation=x?"source-over":"destination-out",t.stroke()}function y(t,C,s){console.log("renderPixel: ",C,s,t),t.globalCompositeOperation=s?"source-over":"destination-out",s&&(t.fillStyle=s);for(var x=0;x<=C.length/2-1;x++){var i=C[2*x],D=C[2*x+1];t.fillRect(i,D,1,1)}}function o0(t){if(!t||t.length==0)return 0;var C=0,s=(0,G.Z)(t),x;try{for(s.s();!(x=s.n()).done;){var i=x.value;i.frontendId>C&&(C=i.frontendId)}}catch(D){s.e(D)}finally{s.f()}return C}function J(t,C){return t=="rubber"||C==2?"rubber":"brush"}function U(t){var C=(0,L.useState)(),s=(0,j.Z)(C,2),x=s[0],i=s[1],D=function(q){var W,_;if(!(t.currentTool!="brush"&&t.currentTool!="rubber"||!((W=t.currentLabel)!==null&&W!==void 0&&W.color)||!t.brushSize)){var r=q.mouseX,n0=q.mouseY,a0=J(t.currentTool,q.e.evt.button);console.log("frontendId: ",t.frontendIdOps.frontendId,"maxId:",o0(t.annotations));var R=t.frontendIdOps.frontendId>0?t.frontendIdOps.frontendId:o0(t.annotations)+1;R!=t.frontendIdOps.frontendId&&t.frontendIdOps.setFrontendId(R);var K=T({width:t.brushSize||10,color:(_=t.currentLabel)===null||_===void 0?void 0:_.color,points:[r,n0,r,n0],type:a0,frontendId:R});if(!!K){i(a0);var Q={dataId:t.dataId,label:t.currentLabel,labelId:t.currentLabel.labelId,frontendId:R,result:K,type:"brush"};t.onAnnotationAdd(Q)}}},E=function(q){var W;if(!(!x||!t.currentAnnotation||!t.currentAnnotation.result||t.currentAnnotation.result.length<2||!((W=t.currentLabel)!==null&&W!==void 0&&W.color))){var _=q.mouseX,r=q.mouseY,n0=t.currentAnnotation.result+",".concat(_,",").concat(r);t.onAnnotationModify((0,r0.Z)((0,r0.Z)({},t.currentAnnotation),{},{result:n0}))}},w=function(){t.currentTool!="brush"&&t.currentTool!="rubber"||(i(void 0),t.onMouseUp())};return{onMouseDown:D,onMouseMove:E,onMouseUp:w,drawAnnotation:S}}},57406:function(Y,V,n){"use strict";n.d(V,{pL:function(){return j},oo:function(){return G}});var r0=n(91220);function j(T){var S=0;if(!T)return S;var A=(0,r0.Z)(T),v;try{for(A.s();!(v=A.n()).done;){var y=v.value;!y||!y.frontendId||y.frontendId>S&&(S=y.frontendId)}}catch(o0){A.e(o0)}finally{A.f()}return S}function G(T){var S=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(T);return S?{r:parseInt(S[1],16),g:parseInt(S[2],16),b:parseInt(S[3],16)}:null}function L(T){var S=T.toString(16);return S.length==1?"0"+S:S}function N(T,S,A){return"#"+L(T)+L(S)+L(A)}},14836:function(Y,V,n){"use strict";n.d(V,{Z:function(){return q}});var r0=n(20228),j=n(11382),G=n(54421),L=n(38272),N=n(57663),T=n(71577),S=n(91220),A=n(67294),v=n(56159),y=n.n(v),o0=n(49111),J=n(19650),U=n(2824),t=n(11849),C=n(85024),s=n.n(C),x=n(63097),i=n(85893),D=function(_){var r=(0,t.Z)({},_.annotation),n0=(0,A.useState)(r.invisible),a0=(0,U.Z)(n0,2),R=a0[0],K=a0[1],Q=(0,A.useState)(0),p=(0,U.Z)(Q,2),u0=p[0],$=p[1];(0,A.useEffect)(function(){K(_.annotation.invisible)},[_.annotation.invisible]);var I0=(0,i.jsxs)(L.ZP.Item,{className:"".concat(s().listItem," ").concat(_.active?s().listItemActive:""),unselectable:"on",onClick:function(){_.onClick(r)},children:[(0,i.jsxs)(J.Z,{align:"center",size:5,children:[(0,i.jsx)("a",{className:s().eye,style:{backgroundImage:R?"url(./pics/hide.png)":"url(./pics/show.png)"},onClick:function(M0){M0.stopPropagation(),K(!R),_.onAnnotationModify(r)}})," ",(0,i.jsx)("span",{className:s().annotationId,children:r.frontendId}),(0,i.jsx)("span",{className:s().labelName,children:r.label.name}),(0,i.jsx)(x.Z,{color:r.label.color})]}),(0,i.jsx)("a",{className:s().delete,onClick:function(M0){M0.stopPropagation();var v0=new Date().getTime();v0-u0<300||($(v0),_.onAnnotationDelete(r))}})]});return I0},E=D,w=n(48971),c=function(_){var r=(0,w.YB)(),n0=r.formatMessage({id:"component.PPAnnotationList.annotationList"}),a0=r.formatMessage({id:"component.PPAnnotationList.addAnnotation"}),R=new Set,K=[],Q=(0,S.Z)(_.annotations),p;try{for(Q.s();!(p=Q.n()).done;){var u0=p.value;R.has(u0.frontendId)||(K.push(u0),R.add(u0.frontendId))}}catch($){Q.e($)}finally{Q.f()}return(0,i.jsx)(j.Z,{spinning:_.disabled,indicator:(0,i.jsx)(i.Fragment,{}),children:(0,i.jsx)(L.ZP,{className:y().labelList,size:"large",header:(0,i.jsx)("div",{className:y().listHeader,children:n0}),bordered:!0,dataSource:K,renderItem:function(I0){var d0;return(0,i.jsx)(E,{onClick:_.disabled?function(){}:_.onAnnotationSelect,annotation:I0,active:_.disabled?!1:I0.frontendId==((d0=_.currAnnotation)===null||d0===void 0?void 0:d0.frontendId),onAnnotationDelete:_.onAnnotationDelete,onAnnotationModify:_.onAnnotationModify})},footer:function(){return _.onAnnotationAdd?(0,i.jsx)("div",{children:(0,i.jsx)(T.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",onClick:function(){_.onAnnotationAdd()},block:!0,children:a0})}):(0,i.jsx)("div",{})}})})},q=c},27992:function(Y,V,n){"use strict";var r0=n(20136),j=n(55241),G=n(13062),L=n(71230),N=n(77883),T=n(70507),S=n(89032),A=n(15746),v=n(66126),y=n(75454),o0=n(2824),J=n(67294),U=n(61541),t=n(26647),C=n.n(t),s=n(85893),x=0,i=100,D=10,E=function(c){var q=(0,J.useState)(Q(c.size)),W=(0,o0.Z)(q,2),_=W[0],r=W[1];function n0(p){r(Q(p))}var a0=c.step?c.step:10,R=c.minSize==null?x:c.minSize,K=c.maxSize==null?i:c.maxSize;function Q(p){return p==null?D:p<=R?R:p>=K?K:p}return(0,J.useEffect)(function(){n0(c.size)},[c.size]),(0,s.jsxs)(j.Z,{overlayClassName:"".concat(C().popover," ").concat(c.disLoc=="left"?C().popoverLeft:""),placement:c.disLoc||"right",content:(0,s.jsxs)(L.Z,{children:[(0,s.jsx)(A.Z,{span:16,children:(0,s.jsx)(y.Z,{className:C().slider,value:_,max:K,min:R,onChange:function(u0){var $;($=c.onChange)===null||$===void 0||$.call(0,u0)},tooltipVisible:!1})}),(0,s.jsx)(A.Z,{span:8,children:(0,s.jsx)(T.Z,{min:R,max:K,value:_,onChange:function(u0){var $;($=c.onChange)===null||$===void 0||$.call(0,u0)},step:a0})})]}),trigger:"hover",visible:c.disabled?!1:void 0,children:[" ",(0,s.jsx)(U.Z,{imgSrc:c.imgSrc||"",onClick:!c.disabled&&c.onClick||void 0,active:c.active,disabled:c.disabled,children:c.children})]})};V.Z=E},10137:function(Y,V,n){"use strict";var r0=n(34669),j=n(54458),G=n(67294),L=n(85893),N=function(S){var A,v;return(0,L.jsxs)("div",{className:"progress",children:[(0,L.jsx)(j.Z,{className:"progressBar",percent:Math.ceil(S.project.finished/((A=S.task.all)===null||A===void 0?void 0:A.length)*100),status:"active",showInfo:!1})," ",(0,L.jsxs)("span",{className:"progressDesc",children:["Current labeling ",S.task.currIdx==null?1:S.task.currIdx+1," of"," ",(v=S.task.all)===null||v===void 0?void 0:v.length,". Already labeled ",S.project.finished||0,"."]})]})};V.Z=N},91861:function(Y,V,n){"use strict";n.d(V,{Ad:function(){return L},k3:function(){return N},Vd:function(){return T},td:function(){return S}});var r0=n(34792),j=n(48086),G=40;function L(){localStorage.removeItem("history"),N([])}function N(A){var v=localStorage.getItem("history"),y=v?JSON.parse(v):{index:-1,items:[]};if(JSON.stringify(y.items[y.index])!=JSON.stringify(A)){var o0=y.index>G?y.index-G:0,J=y.items.splice(o0,y.index==0?1:y.index+1);y.items=J.concat([A]),y.index<=G?y.index++:y.index=G+1,localStorage.setItem("history",JSON.stringify(y))}}function T(){var A=localStorage.getItem("history");if(!!A){var v=JSON.parse(A);if(!!v){if(v.index>=v.items.length-1){j.default.error("No next history!");return}return v.index++,localStorage.setItem("history",JSON.stringify(v)),v.items[v.index]}}}function S(){var A=localStorage.getItem("history");if(!!A){var v=JSON.parse(A);if(console.log("history",v),!v||!v.index||v.index<=1){j.default.error("No previous history!");return}return v.index--,localStorage.setItem("history",JSON.stringify(v)),v.items[v.index]}}},1690:function(Y,V,n){"use strict";n.r(V),n.d(V,{MOST_HISTORY_STEPS:function(){return k0},default:function(){return K0}});var r0=n(3182),j=n(11849),G=n(57663),L=n(71577),N=n(20228),T=n(11382),S=n(34792),A=n(48086),v=n(91220),y=n(2824),o0=n(94043),J=n.n(o0),U=n(67294),t=n(48971),C=n(8088),s=n(61541),x=n(44434),i=n(27992),D=n(5041),E=n(57436),w=n(14836),c=n(91861),q=n(8978),W=n(65031),_=n(57406),r=n(85893);function n0(e,a){if(!(!e||!a))return a.join(",")}function a0(e){var a,l=e.annotation;if(!l||!l.result||l.result.length<2||!((a=l.label)!==null&&a!==void 0&&a.color))return(0,r.jsx)(r.Fragment,{});var h=l.result.split(",").map(Number),m=l.label.color,u=(0,_.oo)(m);if(!u)return(0,r.jsx)(r.Fragment,{});var d=.3,B=void 0,I=[];return h.forEach(function(b,O){if(!B){B=b;return}I.push((0,r.jsx)(W.Cd,{onMouseDown:function(){e.currentTool=="editor"&&e.onSelect(l)},draggable:e.currentTool=="editor",onDragMove:function(M){var c0;M.cancelBubble=!0;var h0=(c0=e.stageRef)===null||c0===void 0?void 0:c0.current,X=h0.findOne(".baseImage"),i0=!1,e0=M.target.x();e0>X.width()/2&&(e0=X.width()/2,i0=!0),e0<-X.width()/2&&(e0=-X.width()/2,i0=!0);var f0=M.target.y();f0>X.height()/2&&(f0=X.height()/2,i0=!0),f0<-X.height()/2&&(f0=-X.height()/2,i0=!0),i0&&M.target.setPosition({x:e0,y:f0}),h[O-1]=e0,h[O]=f0;var F=(0,j.Z)((0,j.Z)({},l),{},{result:h.join(",")});e.onDrag(F)},onMouseOver:function(){var M;e.currentTool=="editor"&&(M=e.stageRef)!==null&&M!==void 0&&M.current&&(e.stageRef.current.container().style.cursor="cell")},onMouseOut:function(){var M;(M=e.stageRef)!==null&&M!==void 0&&M.current&&(e.stageRef.current.container().style.cursor="default")},x:B,y:b,radius:5/e.scale,fill:m})),B=void 0}),(0,r.jsxs)(W.ZA,{children:[(0,r.jsx)(W.x1,{onMouseOver:function(){e.currentTool=="editor"&&(document.body.style.cursor="pointer")},onMouseOut:function(){document.body.style.cursor="default"},onClick:function(){e.currentTool=="editor"&&e.onSelect(l)},stroke:m,strokeWidth:2/e.scale,globalCompositeOperation:"source-over",lineCap:"round",points:h,tension:0,closed:!0,fill:"rgba(".concat(u.r,", ").concat(u.g,", ").concat(u.b,", ").concat(d,")")}),I]},l.frontendId)}function R(e){var a=0;if(!e)return a;var l=(0,v.Z)(e),h;try{for(l.s();!(h=l.n()).done;){var m=h.value;!m||!m.frontendId||m.frontendId>a&&(a=m.frontendId)}}catch(u){l.e(u)}finally{l.f()}return a}function K(e){var a=function(d,B){var I,b,O=n0((I=e.currentLabel)===null||I===void 0?void 0:I.color,[d,B]);!O||(console.log(O),e.onAnnotationAdd({dataId:e.dataId,type:"polygon",frontendId:R(e.annotations)+1,label:e.currentLabel,labelId:(b=e.currentLabel)===null||b===void 0?void 0:b.labelId,result:O}))},l=function(d,B){var I;if(!(!e.currentAnnotation||!e.currentAnnotation.result||!((I=e.currentLabel)!==null&&I!==void 0&&I.color))){var b=e.currentAnnotation.result+",".concat(d,",").concat(B),O=(0,j.Z)((0,j.Z)({},e.currentAnnotation),{},{result:b});e.modifyAnnoByFrontendId(O)}},h=function(d){if(e.currentTool=="polygon"){var B=d.mouseX+d.offsetX,I=d.mouseY+d.offsetY;console.log("currentAnnotation:",e.currentAnnotation),e.currentAnnotation?l(B,I):a(B,I)}},m=function(){e.currentTool=="polygon"&&e.onMouseUp&&e.onMouseUp()};return{onMouseDown:h,onMouseMove:function(){},onMouseUp:m,drawAnnotation:a0}}var Q=n(10137),p=n(98731),u0=n(20136),$=n(55241),I0=n(47673),d0=n(24044),M0=n(9715),v0=n(93766),T0=n(13237),O0=n.n(T0),C0="http://127.0.0.1:1234/model",D0=function(a){var l=v0.Z.useForm(),h=(0,y.Z)(l,1),m=h[0],u=a.model,d=a.project;(0,U.useEffect)(function(){var I,b,O,z;if(!!d.curr){var M=d.curr.otherSettings?d.curr.otherSettings:{},c0={mlBackendUrl:M.mlBackendUrl,mlModelAbsPath:(I=M.models)===null||I===void 0||(b=I.EISeg)===null||b===void 0?void 0:b.mlModelAbsPath,mlWeightAbsPath:(O=M.models)===null||O===void 0||(z=O.EISeg)===null||z===void 0?void 0:z.mlWeightAbsPath};m.setFieldsValue(c0),M!=null&&M.mlBackendUrl?u.setMlBackendUrl(M.mlBackendUrl):u.setMlBackendUrl(C0),M.mlModelAbsPath&&M.mlWeightAbsPath&&u.load(M.mlModelAbsPath,M.mlWeightAbsPath)}},[d.curr]);function B(I){if(console.log("saveMlsettings",d.curr,I),!d.curr){A.default.error("Please select project first!");return}d.curr.otherSettings||(d.curr.otherSettings={}),d.curr.otherSettings.mlBackendUrl=m.getFieldValue("mlBackendUrl"),d.curr.otherSettings.models={},d.curr.otherSettings.models.EISeg={},d.curr.otherSettings.models.EISeg.mlModelAbsPath=m.getFieldValue("mlModelAbsPath"),d.curr.otherSettings.models.EISeg.mlWeightAbsPath=m.getFieldValue("mlWeightAbsPath"),d.curr.otherSettings.perviousModel=I.modelName,d.update(d.curr.projectId,{otherSettings:d.curr.otherSettings}),u.setMlBackendUrl(d.curr.otherSettings.mlBackendUrl),u.load(d.curr.otherSettings.models.EISeg.mlModelAbsPath,d.curr.otherSettings.models.EISeg.mlWeightAbsPath),A.default.info("Ml setting saved. Let's start trainig or inference!")}return(0,r.jsxs)($.Z,{overlayClassName:"".concat(O0().popover," ").concat(O0().popoverLeft),placement:"left",content:(0,r.jsxs)(v0.Z,{form:m,layout:"horizontal",size:"large",onFinish:function(b){console.log("form finish",b),B(b)},hidden:d.curr==null,children:[(0,r.jsx)(v0.Z.Item,{name:"mlBackendUrl",label:"ML Backend URL",labelCol:{span:6},wrapperCol:{span:18},initialValue:C0,style:{fontSize:"1.5rem"},children:(0,r.jsx)(d0.Z,{placeholder:C0})}),(0,r.jsx)(v0.Z.Item,{name:"mlModelAbsPath",label:"Model Path",labelCol:{span:6},wrapperCol:{span:18},style:{fontSize:"1.5rem"},children:(0,r.jsx)(d0.Z,{placeholder:"Absolute path"})}),(0,r.jsx)(v0.Z.Item,{name:"mlWeightAbsPath",label:"Weight Path",labelCol:{span:6},wrapperCol:{span:18},style:{fontSize:"1.5rem"},children:(0,r.jsx)(d0.Z,{placeholder:"Absolute path"})}),(0,r.jsx)(v0.Z.Item,{wrapperCol:{span:16,offset:6},children:(0,r.jsx)(L.Z,{htmlType:"submit",type:"primary",style:{height:"2.5rem",width:"48%"},block:!0,children:"Save"})})]}),trigger:"hover",children:[" ",(0,r.jsx)(s.Z,{imgSrc:a.imgSrc||"",onClick:a.onClick,active:a.active,children:a.children})]})},Z0=D0,Q0={result:[[.3779466152191162,.38711845874786377,.36106088757514954,.35420000553131104,.35632404685020447,.36673659086227417,.3709605634212494,.33228039741516113,.3710925579071045,.3494248390197754,.34312722086906433,.3462066650390625,.3746175765991211,.3791941702365875,.4216013550758362,.44569116830825806,.40616583824157715,.4613204002380371,.49154922366142273,.4584124684333801,.4600294828414917,.4803354740142822,.46287786960601807,.43543994426727295,.43747758865356445,.4064893126487732,.3941977620124817,.39790475368499756,.39159834384918213,.3925873935222626,.3789200186729431,.36321160197257996],[.3818621039390564,.3770502805709839,.36075377464294434,.3548894226551056,.3503073453903198,.335567444562912,.3341645896434784,.33101293444633484,.3728009760379791,.364932656288147,.37297818064689636,.37586647272109985,.3893028497695923,.39986884593963623,.41131657361984253,.4522101581096649,.4333687722682953,.5002316832542419,.4971569776535034,.473648339509964,.4820094704627991,.46783292293548584,.4617140591144562,.44852927327156067,.44560548663139343,.44700291752815247,.4248964786529541,.44343101978302,.41931068897247314,.43451547622680664,.4378070831298828,.3568068742752075],[.3652324676513672,.35223522782325745,.35097530484199524,.360146701335907,.36671239137649536,.3395833373069763,.35282737016677856,.33361345529556274,.377223938703537,.38735657930374146,.39466923475265503,.3888944387435913,.3632313311100006,.3888370096683502,.4123692810535431,.41089701652526855,.4431883990764618,.5125359296798706,.5071693658828735,.47963064908981323,.46734818816185,.4608532786369324,.4394238293170929,.40698742866516113,.42963457107543945,.4184359908103943,.39965513348579407,.4161875247955322,.4067150950431824,.45255592465400696,.44494757056236267,.34891369938850403],[.364960253238678,.3754047155380249,.3721790313720703,.37246841192245483,.3652416467666626,.32984012365341187,.3496708571910858,.3422262966632843,.3380891978740692,.3428453207015991,.36001724004745483,.36075884103775024,.36690282821655273,.375881552696228,.3909446597099304,.3976140320301056,.43047186732292175,.5223039984703064,.5174918174743652,.5091606974601746,.4703259766101837,.46562325954437256,.4584425091743469,.4025508463382721,.4088236391544342,.41495299339294434,.41274765133857727,.394614577293396,.3999204635620117,.43086522817611694,.443092942237854,.3433324098587036],[.34178581833839417,.3906759023666382,.3692866563796997,.361131876707077,.3499326705932617,.3162209391593933,.31167617440223694,.3333600163459778,.3163505494594574,.338070273399353,.35670241713523865,.3636510670185089,.35625404119491577,.35763710737228394,.38493406772613525,.39124634861946106,.4325636029243469,.5645959973335266,.5685874223709106,.5350329279899597,.4992934465408325,.4620708227157593,.45242631435394287,.41027894616127014,.4038461744785309,.3944956958293915,.39921683073043823,.3937588334083557,.38950315117836,.3928646147251129,.4300973415374756,.33759239315986633],[.34255340695381165,.384326696395874,.35354241728782654,.32820284366607666,.34075650572776794,.310611367225647,.3198155462741852,.3376222848892212,.3267553746700287,.33798253536224365,.3261478543281555,.3417035639286041,.34279346466064453,.3464927673339844,.3819480240345001,.3768705129623413,.43024203181266785,.5799015164375305,.5669912099838257,.5345537066459656,.5366686582565308,.5029425621032715,.4881816804409027,.4266446828842163,.3896041512489319,.38750505447387695,.3878398835659027,.401533305644989,.38611483573913574,.4102136492729187,.43251603841781616,.3381301164627075],[.34610551595687866,.37768492102622986,.3577062487602234,.321483314037323,.3238357901573181,.31036683917045593,.32922878861427307,.33748194575309753,.34403321146965027,.3489550054073334,.32951661944389343,.35581493377685547,.3549908995628357,.34664082527160645,.37512969970703125,.37657931447029114,.4325118064880371,.6002883911132812,.5718269348144531,.5072413086891174,.5073626041412354,.5133922100067139,.48958104848861694,.45026227831840515,.41855117678642273,.38928452134132385,.3869919180870056,.3884861171245575,.38088345527648926,.4067824184894562,.42561301589012146,.3727574646472931],[.36236464977264404,.38462936878204346,.33172523975372314,.2767360210418701,.28566184639930725,.29154667258262634,.32516488432884216,.3253626823425293,.30838415026664734,.3315502405166626,.3262888789176941,.3520568013191223,.35253870487213135,.3447986841201782,.3818697929382324,.3651794195175171,.4231885075569153,.5827294588088989,.5951063632965088,.6352673768997192,.5757752656936646,.48387131094932556,.46553540229797363,.4512472450733185,.44570550322532654,.4316057562828064,.41964590549468994,.3941313624382019,.37175554037094116,.3886064291000366,.40585458278656006,.3790917694568634],[.35083019733428955,.3677082061767578,.33382877707481384,.3098861575126648,.3019915223121643,.3109188377857208,.3330777883529663,.331575870513916,.31939375400543213,.34113019704818726,.34969979524612427,.3529251217842102,.36156511306762695,.35511070489883423,.37965914607048035,.37223300337791443,.4537010192871094,.5680437088012695,.6448143720626831,.7226863503456116,.729232907295227,.6868923902511597,.5698102116584778,.4619525372982025,.46818724274635315,.43513986468315125,.42044782638549805,.3994002342224121,.39396214485168457,.3904518187046051,.40890100598335266,.3930703103542328],[.3359583914279938,.3705343008041382,.35527661442756653,.3399384319782257,.34458956122398376,.3259856700897217,.347974956035614,.3495017886161804,.3527892231941223,.35826316475868225,.35742005705833435,.335483193397522,.34679195284843445,.36213573813438416,.38948914408683777,.3846794366836548,.4752236008644104,.5317398905754089,.6341782212257385,.7260967493057251,.7400858402252197,.7263891696929932,.6071794629096985,.49351879954338074,.4718652367591858,.4380945563316345,.44395726919174194,.42750805616378784,.4137647747993469,.41625750064849854,.42252638936042786,.4066489040851593],[.3289949595928192,.37435805797576904,.3653024733066559,.34567791223526,.37014514207839966,.36809563636779785,.36826398968696594,.32743436098098755,.3298226594924927,.34234797954559326,.34268611669540405,.3254646956920624,.3090794086456299,.3477054834365845,.37110430002212524,.3621593713760376,.4475082755088806,.487918496131897,.601881742477417,.6983312964439392,.7557751536369324,.7451871633529663,.5793305039405823,.4939006268978119,.47265419363975525,.42300844192504883,.43300366401672363,.41770070791244507,.414137601852417,.42620089650154114,.41289666295051575,.4050122797489166],[.2583468556404114,.3622201085090637,.3609732985496521,.35103529691696167,.3431868553161621,.36043819785118103,.3594401776790619,.33510416746139526,.31773367524147034,.32706841826438904,.33306169509887695,.329282283782959,.3103845715522766,.3467973470687866,.36439552903175354,.35807719826698303,.40837693214416504,.46938514709472656,.6127392053604126,.7233112454414368,.7669434547424316,.7611733675003052,.5953957438468933,.5389460921287537,.4672558009624481,.42192357778549194,.42329633235931396,.42473718523979187,.40417638421058655,.408004492521286,.4068392515182495,.45992550253868103],[.26873499155044556,.3717286288738251,.3643631339073181,.3532456159591675,.3495698571205139,.3619597554206848,.3786068260669708,.3432343006134033,.3145405650138855,.32395321130752563,.33640119433403015,.33749133348464966,.31600821018218994,.3369048535823822,.3504919409751892,.34988847374916077,.3846014440059662,.4548245966434479,.6552940011024475,.7398929595947266,.7898313999176025,.7753756642341614,.6361410617828369,.550889790058136,.4542275369167328,.41850578784942627,.4201924800872803,.4233487844467163,.4089168310165405,.40734779834747314,.4125276207923889,.45579835772514343],[.2889721095561981,.3404158651828766,.34746238589286804,.3323819637298584,.36239108443260193,.36021608114242554,.3564058542251587,.34031766653060913,.3106665015220642,.32129210233688354,.32644376158714294,.3231737017631531,.30393165349960327,.34000542759895325,.3698198199272156,.3764057457447052,.37690526247024536,.44695284962654114,.6244124174118042,.7085537910461426,.7864880561828613,.7922757267951965,.6478504538536072,.5585101842880249,.46907946467399597,.43042469024658203,.4196140766143799,.4143720269203186,.41768819093704224,.4123932123184204,.40979909896850586,.40944749116897583],[.33511802554130554,.3354792892932892,.3483961820602417,.3393648862838745,.36110979318618774,.37371599674224854,.3693099021911621,.3380741477012634,.31597936153411865,.3110752999782562,.3071911334991455,.29553914070129395,.28971895575523376,.3283897936344147,.3738657832145691,.359753280878067,.37170153856277466,.45006322860717773,.622103214263916,.7240833044052124,.8724844455718994,.8468523025512695,.6292383670806885,.5481832027435303,.47547808289527893,.4294469654560089,.4108424484729767,.4051211476325989,.4253206253051758,.42601343989372253,.4097977876663208,.3356857895851135],[.3555319011211395,.3408556282520294,.35363197326660156,.3417183756828308,.3509896397590637,.38215622305870056,.41220414638519287,.3597573935985565,.3141809105873108,.299405962228775,.2974483370780945,.2919771671295166,.2913997769355774,.32095572352409363,.373879075050354,.3556964099407196,.3629939556121826,.47226566076278687,.6256035566329956,.7390267252922058,.8593417406082153,.8262102603912354,.6343622803688049,.5576579570770264,.4742991030216217,.41313984990119934,.3864082098007202,.3817637264728546,.4082636833190918,.41419312357902527,.4119032323360443,.2635403275489807],[.3506373465061188,.32203149795532227,.34963458776474,.32425546646118164,.33225691318511963,.35579705238342285,.38111579418182373,.3564165532588959,.3126765489578247,.3007081151008606,.30092623829841614,.30085325241088867,.2974894046783447,.326341450214386,.36822161078453064,.35820019245147705,.3826185166835785,.4894598424434662,.6533626317977905,.70644211769104,.7451343536376953,.7429384589195251,.6669357419013977,.5394930243492126,.45886534452438354,.41244491934776306,.39533960819244385,.370727002620697,.386724591255188,.3909628987312317,.40651923418045044,.24896344542503357],[.3370128571987152,.30008041858673096,.3007066547870636,.2964634597301483,.31920456886291504,.3513490855693817,.3618793785572052,.3482736349105835,.3220705986022949,.3098466992378235,.306601345539093,.30917924642562866,.32083860039711,.33934545516967773,.3853139877319336,.3959599435329437,.42794349789619446,.5098592042922974,.6510905027389526,.7034169435501099,.7345707416534424,.7295455932617188,.6945785880088806,.5392878651618958,.46230608224868774,.4132283627986908,.40620577335357666,.39428097009658813,.39259806275367737,.38836321234703064,.3802737891674042,.2869125008583069],[.3107353448867798,.28716710209846497,.2810332477092743,.28914326429367065,.3127279281616211,.349570631980896,.35278424620628357,.3424120545387268,.3312514126300812,.3183543384075165,.31009000539779663,.3195717930793762,.31631040573120117,.32442909479141235,.3819769620895386,.39367008209228516,.41426554322242737,.48430579900741577,.6400377750396729,.682829737663269,.7346150875091553,.7265263199806213,.6635222434997559,.5312811732292175,.4713155925273895,.40454715490341187,.41512030363082886,.4182337820529938,.39747387170791626,.3760755658149719,.3628138303756714,.3463020622730255],[.30060598254203796,.3060090243816376,.3139290511608124,.3145269751548767,.30912041664123535,.35013264417648315,.35046622157096863,.33206114172935486,.322023868560791,.3207645118236542,.3205072283744812,.32279807329177856,.3099812865257263,.3307061493396759,.3545922636985779,.3684121072292328,.39094099402427673,.43648841977119446,.6046525239944458,.6440432071685791,.6817156672477722,.6866225600242615,.6455923318862915,.5251345634460449,.4481634497642517,.4150755703449249,.4251801371574402,.404987633228302,.37328672409057617,.36327677965164185,.3602195680141449,.3206213116645813],[.30405154824256897,.3178442716598511,.33336877822875977,.3373711109161377,.32321715354919434,.3630528748035431,.3537922501564026,.3336135447025299,.30300673842430115,.31718388199806213,.3529442846775055,.34015488624572754,.3124402165412903,.3555675745010376,.35390767455101013,.37345024943351746,.4144602119922638,.44640690088272095,.573625922203064,.6119270324707031,.6456900835037231,.6455104351043701,.5934235453605652,.484555721282959,.4161651134490967,.3811432719230652,.3861028552055359,.3659202456474304,.34390294551849365,.3247116208076477,.3456142544746399,.32664284110069275],[.2826228737831116,.2938840985298157,.30609411001205444,.29632243514060974,.2861210107803345,.30216431617736816,.28895461559295654,.2819651961326599,.2588002383708954,.30655887722969055,.34061241149902344,.32973647117614746,.3005189895629883,.29779112339019775,.2948862910270691,.3190575838088989,.3858416974544525,.4116919934749603,.5491650104522705,.5732342004776001,.5938672423362732,.5976152420043945,.5155865550041199,.45706799626350403,.3356960117816925,.31694191694259644,.3380652368068695,.3176265358924866,.315368115901947,.3020714521408081,.3154049515724182,.32578057050704956]]};function U0(e){var a,l,h=e.canvasRef;if(!e.interactorData||!((a=e.label)!==null&&a!==void 0&&a.color))return(0,r.jsx)(r.Fragment,{});var m=e.interactorData.predictData,u=(l=h.current)===null||l===void 0?void 0:l.getContext("2d");return u?(console.log("PPInteractor.drawAnnotation",e.interactorData),F0(E0(m,e.threshold),u,e.label.color),R0(e.interactorData.mousePoints,u),(0,r.jsx)(r.Fragment,{})):(0,r.jsx)(r.Fragment,{})}function R0(e,a){if(!!e){a.beginPath();var l=(0,v.Z)(e),h;try{for(l.s();!(h=l.n()).done;){var m=h.value,u=(0,y.Z)(m,3),d=u[0],B=u[1],I=u[2];I?a.fillStyle="#FF0000":a.fillStyle="#008000",a.arc(B,d,50,0,2*Math.PI),a.fill()}}catch(b){l.e(b)}finally{l.f()}}}function E0(e,a){var l=a?a*.01:.5,h=[],m=0,u=(0,v.Z)(e),d;try{for(u.s();!(d=u.n()).done;){var B=d.value,I=0,b=(0,v.Z)(B),O;try{for(b.s();!(O=b.n()).done;){var z=O.value;z>=l&&h.push(I,m),I++}}catch(M){b.e(M)}finally{b.f()}m++}}catch(M){u.e(M)}finally{u.f()}return h}function p0(e,a,l,h,m){if(!h||!m||!l)return null;var u=E0(l,e),d=0,B=y0(a),I="".concat(d,",").concat(B,",")+u.join(","),b={dataId:h,label:m,labelId:m.labelId,frontendId:B,result:I,type:"brush"};return b}function F0(e,a,l){if(e.length<4){console.log("found incorrect points:",e);return}W0(a,e.slice(2),l)}function W0(e,a,l){e.globalCompositeOperation=l?"source-over":"destination-out",l&&(e.fillStyle=l);for(var h=0;h<=a.length/2-1;h++){var m=a[2*h],u=a[2*h+1];e.fillRect(m,u,1,1)}}function y0(e){if(!e||e.length==0)return 0;var a=0,l=(0,v.Z)(e),h;try{for(l.s();!(h=l.n()).done;){var m=h.value;m.frontendId>a&&(a=m.frontendId)}}catch(u){l.e(u)}finally{l.f()}return a}function z0(e){var a=(0,t.tT)("InteractorData"),l=a.interactorData,h=a.setInteractorData,m=e.model,u=function(){var I=(0,r0.Z)(J().mark(function b(O){var z,M,c0,h0,X,i0,e0;return J().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:if(!(e.currentTool!="interactor"||!((z=e.currentLabel)!==null&&z!==void 0&&z.color))){F.next=2;break}return F.abrupt("return");case 2:if(M=Math.round(O.mouseX),c0=Math.round(O.mouseY),console.log("frontendId: ",e.frontendIdOps.frontendId,"maxId:",y0(e.annotations)),h0=e.frontendIdOps.frontendId>0?e.frontendIdOps.frontendId:y0(e.annotations)+1,h0!=e.frontendIdOps.frontendId&&e.frontendIdOps.setFrontendId(h0),l.mousePoints.push(new Array(M,c0,O.e.evt.button!=2)),!(!l.mousePoints.length||!O.stageRef.current||h0==null)){F.next=10;break}return F.abrupt("return");case 10:return X=O.stageRef.current,i0=X.findOne(".baseImage").toDataURL().slice(22),F.next=14,m.predict({format:"b64",img:i0,other:{clicks:l.mousePoints}});case 14:if(e0=F.sent,e0){F.next=17;break}return F.abrupt("return");case 17:h({mousePoints:l.mousePoints,predictData:e0.result});case 18:case"end":return F.stop()}},b)}));return function(O){return I.apply(this,arguments)}}(),d=function(){},B=function(){e.currentTool=="interactor"&&e.onMouseUp()};return{onMouseDown:u,onMouseMove:d,onMouseUp:B,drawAnnotation:U0}}var k0=40,N0=function(){var a,l=(0,U.useState)(0),h=(0,y.Z)(l,2),m=h[0],u=h[1],d=(0,U.useState)(10),B=(0,y.Z)(d,2),I=B[0],b=B[1],O=(0,U.useState)(50),z=(0,y.Z)(O,2),M=z[0],c0=z[1],h0=(0,U.useState)(60),X=(0,y.Z)(h0,2),i0=X[0],e0=X[1],f0=(0,t.tT)("InteractorData"),F=f0.interactorData,S0=f0.setInteractorData,j0=(0,p.RZ)(U.useState),m0=(0,p.$L)(U.useState,U.useEffect,{effectTrigger:{postTaskChange:function(){return(0,c.Ad)()}},label:{oneHot:!0,postSelect:function(){f.setCurr(void 0),u(0)},preUnsetCurr:Y0},tool:{defaultTool:"mover"},task:{push:!0}}),P=m0.tool,$0=m0.loading,A0=m0.scale,f=m0.annotation,_0=m0.task,l0=m0.data,b0=m0.project,s0=m0.label,H0=m0.refreshVar;function Y0(){f.setCurr(void 0),u(0),P.setCurr("mover")}var Z=function(o){f.setCurr(o),o!=null&&o.frontendId?u(o.frontendId):u(0)};(0,U.useEffect)(function(){(0,c.Ad)()},[]),(0,U.useEffect)(function(){var g=setInterval(function(){var o;console.log("triggered!",l0),f.pushToBackend((o=l0.curr)===null||o===void 0?void 0:o.dataId)},2e4);return function(){clearInterval(g)}},[f,l0,l0.curr]);var V0=function(o){!o||(f.all.pop(),f.all.push(o),Z(o),f.setAll(f.all))},L0=function(o){var H=[],t0=(0,v.Z)(f.all),g0;try{for(t0.s();!(g0=t0.n()).done;){var B0=g0.value;B0.frontendId==o.frontendId?H.push(o):H.push(B0)}}catch(P0){t0.e(P0)}finally{t0.f()}Z(o),f.setAll(H)},x0={dataId:(a=l0.curr)===null||a===void 0?void 0:a.dataId,currentLabel:s0.curr,brushSize:I,scale:A0.curr,currentTool:P.curr,annotations:f.all,currentAnnotation:f.curr,onAnnotationAdd:function(o){var H=f.all.concat([o]);f.setAll(H),Z(o)},onAnnotationModify:V0,modifyAnnoByFrontendId:L0,onMouseUp:function(){var o;P.curr!="interactor"&&((0,c.k3)({annos:f.all,currAnno:f.curr}),f.pushToBackend((o=l0.curr)===null||o===void 0?void 0:o.dataId,f.all))},frontendIdOps:{frontendId:m,setFrontendId:u},model:j0},k=(0,t.YB)(),X0={polygon:K(x0),brush:(0,q.Z)(x0),interactor:z0(x0)};return(0,r.jsxs)(C.Z,{className:"segment",children:[(0,r.jsxs)(x.Z,{children:[(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/polygon.png",active:P.curr=="polygon",disabled:P.curr=="interactor",onClick:function(){if(!s0.curr){A.default.error("Please select a label first");return}P.setCurr("polygon"),Z(void 0)},children:k.formatMessage({id:"pages.toolBar.polygon"})}),(0,r.jsx)(s.Z,{active:P.curr=="editor",disabled:P.curr=="interactor",imgSrc:"./pics/buttons/edit.png",onClick:function(){P.setCurr("editor"),Z(void 0)},children:k.formatMessage({id:"pages.toolBar.edit"})}),(0,r.jsx)(i.Z,{imgSrc:"./pics/buttons/brush.png",size:I,active:P.curr=="brush",disabled:P.curr=="interactor",onClick:function(){if(!s0.curr){A.default.error("Please select a label first");return}P.curr!="rubber"&&P.curr!="brush"&&Z(void 0),P.setCurr("brush")},onChange:function(o){b(o)},children:k.formatMessage({id:"pages.toolBar.brush"})}),(0,r.jsx)(i.Z,{size:I,active:P.curr=="rubber",disabled:P.curr=="interactor",onClick:function(){P.curr!="rubber"&&P.curr!="brush"&&Z(void 0),P.setCurr("rubber")},onChange:function(o){b(o)},imgSrc:"./pics/buttons/rubber.png",children:k.formatMessage({id:"pages.toolBar.rubber"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){A0.change(.1)},children:k.formatMessage({id:"pages.toolBar.zoomIn"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){A0.change(-.1)},children:k.formatMessage({id:"pages.toolBar.zoomOut"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){var o;f.pushToBackend((o=l0.curr)===null||o===void 0?void 0:o.dataId)},disabled:P.curr=="interactor",children:k.formatMessage({id:"pages.toolBar.save"})}),(0,r.jsx)(s.Z,{active:P.curr=="mover",imgSrc:"./pics/buttons/move.png",onClick:function(){P.setCurr("mover")},children:k.formatMessage({id:"pages.toolBar.move"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/prev.png",onClick:function(){var o=(0,c.td)();o&&(f.setAll(o.annos),Z(o.currAnno))},disabled:P.curr=="interactor",children:k.formatMessage({id:"pages.toolBar.unDo"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/next.png",onClick:function(){var o=(0,c.Vd)();o&&(f.setAll(o.annos),Z(o.currAnno))},disabled:P.curr=="interactor",children:k.formatMessage({id:"pages.toolBar.reDo"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/clear_mark.png",onClick:function(){f.setAll([]),f.setCurr(void 0)},disabled:P.curr=="interactor",children:k.formatMessage({id:"pages.toolBar.clearMark"})})]}),(0,r.jsxs)("div",{id:"dr",className:"mainStage",children:[(0,r.jsx)(T.Z,{tip:"loading",spinning:!!$0.curr,children:(0,r.jsx)("div",{className:"draw",children:(0,r.jsx)(E.Z,{scale:A0.curr,annotations:f.all,currentTool:P.curr,currentAnnotation:f.curr,currentLabel:s0.curr,setCurrentAnnotation:Z,onAnnotationModify:L0,onAnnotationModifyComplete:function(){P.curr!="interactor"&&(0,c.k3)({annos:f.all,currAnno:f.curr})},frontendIdOps:{frontendId:m,setFrontendId:u},imgSrc:l0.imgSrc,transparency:i0,threshold:M,onAnnotationAdd:function(o){var H=f.all.concat([o]);f.setAll(H),f.curr||Z(o)},drawTool:X0,refresh:H0})})}),(0,r.jsx)("div",{className:"pblock",children:(0,r.jsx)(Q.Z,{task:_0,project:b0})}),(0,r.jsx)("div",{style:{display:P.curr=="interactor"?"none":"block"},className:"prevTask",onClick:function(){!_0.prevTask()||(Z(void 0),S0({predictData:[],mousePoints:[]}))}}),(0,r.jsx)("div",{style:{display:P.curr=="interactor"?"none":"block"},className:"nextTask",onClick:function(){!_0.nextTask()||(Z(void 0),S0({predictData:[],mousePoints:[]}))}})]}),(0,r.jsxs)(x.Z,{disLoc:"right",children:[(0,r.jsx)(Z0,{imgSrc:"./pics/buttons/intelligent_interaction.png",active:P.curr=="interactor",onClick:function(){P.curr!="interactor"?P.setCurr("interactor"):P.setCurr(void 0)},model:j0,project:b0,children:k.formatMessage({id:"pages.toolBar.interactor"})}),(0,r.jsx)(i.Z,{imgSrc:"./pics/buttons/threshold.png",disLoc:"left",size:M,maxSize:100,minSize:10,step:10,onChange:function(o){c0(o)},children:k.formatMessage({id:"pages.toolBar.segmentThreshold"})}),(0,r.jsx)(i.Z,{imgSrc:"./pics/buttons/alpha.png",disLoc:"left",size:i0,maxSize:100,minSize:0,onChange:function(o){e0(o)},children:k.formatMessage({id:"pages.toolBar.transparency"})}),(0,r.jsx)(i.Z,{imgSrc:"./pics/buttons/radius.png",disLoc:"left",children:k.formatMessage({id:"pages.toolBar.visualRadius"})}),(0,r.jsx)(s.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){t.m8.push("/project_overview?projectId=".concat(b0.curr.projectId))},children:"Project Overview"})]}),(0,r.jsxs)("div",{className:"rightSideBar",children:[(0,r.jsx)("div",{className:"determinOutline",children:(0,r.jsx)(L.Z,{style:{height:40,fontSize:"0.75rem"},type:"primary",block:!0,onClick:function(){if(P.curr=="interactor"){var o;console.log(P.curr);var H=p0(M,f.all,F==null?void 0:F.predictData,(o=l0.curr)===null||o===void 0?void 0:o.dataId,s0.curr);if(H){var t0,g0=f.all.concat([H]);f.setAll(g0),Z(H),f.pushToBackend((t0=l0.curr)===null||t0===void 0?void 0:t0.dataId,g0)}}S0({predictData:[],mousePoints:[]}),Z(void 0)},children:k.formatMessage({id:"pages.toolBar.determineOutline"})})}),(0,r.jsx)(D.Z,{hideColorPicker:!1,labels:s0.all,activeIds:s0.activeIds,onLabelSelect:s0.onSelect,onLabelModify:function(){},onLabelDelete:s0.remove,onLabelAdd:function(o){s0.create((0,j.Z)((0,j.Z)({},o),{},{projectId:b0.curr.projectId})).then(function(H){Z(void 0),s0.setCurr(H)})}}),(0,r.jsx)(w.Z,{currAnnotation:f.curr,annotations:f.all,onAnnotationSelect:function(o){o!=null&&o.delete||Z(o)},onAnnotationAdd:function(){Z(void 0)},onAnnotationModify:function(){},onAnnotationDelete:function(){var g=(0,r0.Z)(J().mark(function o(H){var t0,g0;return J().wrap(function(P0){for(;;)switch(P0.prev=P0.next){case 0:return g0=f.all.filter(function(J0){return J0.frontendId!=H.frontendId}),f.setAll(g0),Z(void 0),P0.next=5,f.pushToBackend((t0=l0.curr)===null||t0===void 0?void 0:t0.dataId,g0);case 5:case"end":return P0.stop()}},o)}));return function(o){return g.apply(this,arguments)}}(),disabled:P.curr=="interactor"})]})]})},K0=N0}}]);
