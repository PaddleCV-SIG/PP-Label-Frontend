(self.webpackChunkpp_label_frontend=self.webpackChunkpp_label_frontend||[]).push([[672],{41435:function(B,d,e){"use strict";e.d(d,{Z:function(){return _}});var f=e(94663),m=e(80112);function M(o){return Function.toString.call(o).indexOf("[native code]")!==-1}var P=e(18597);function l(o,s,u){return(0,P.Z)()?l=Reflect.construct:l=function(r,O,h){var p=[null];p.push.apply(p,O);var j=Function.bind.apply(r,p),C=new j;return h&&(0,m.Z)(C,h.prototype),C},l.apply(null,arguments)}function _(o){var s=typeof Map=="function"?new Map:void 0;return _=function(a){if(a===null||!M(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(typeof s!="undefined"){if(s.has(a))return s.get(a);s.set(a,r)}function r(){return l(a,arguments,(0,f.Z)(this).constructor)}return r.prototype=Object.create(a.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),(0,m.Z)(r,a)},_(o)}},73199:function(){},10137:function(B,d,e){"use strict";var f=e(34669),m=e(54458),M=e(67294),P=e(85893),l=function(o){var s,u;return(0,P.jsxs)("div",{className:"progress",children:[(0,P.jsx)(m.Z,{className:"progressBar",percent:Math.ceil(o.project.finished/((s=o.task.all)===null||s===void 0?void 0:s.length)*100),status:"active",showInfo:!1})," ",(0,P.jsxs)("span",{className:"progressDesc",children:["Current labeling ",o.task.currIdx==null?1:o.task.currIdx+1," of"," ",(u=o.task.all)===null||u===void 0?void 0:u.length,". Already labeled ",o.project.finished||0,"."]})]})};d.Z=l},29214:function(B,d,e){"use strict";e.r(d);var f=e(8870),m=e(20228),M=e(11382),P=e(34792),l=e(48086),_=e(67294),o=e(48971),s=e(73199),u=e.n(s),a=e(8088),r=e(61541),O=e(44434),h=e(5041),p=e(57436),j=e(10137),C=e(19424),t=e(85893),b=function(){var c=(0,C.$L)(_.useState,_.useEffect,{label:{oneHot:!1,postSetCurr:U},tool:{defaultTool:"mover"},effectTrigger:{postTaskChange:k,postProjectChanged:K}}),L=c.tool,T=c.loading,A=c.scale,D=c.annotation,I=c.task,x=c.data,g=c.project,i=c.label,E=(0,o.YB)(),y=E.formatMessage({id:"pages.toolBar.zoomIn"}),R=E.formatMessage({id:"pages.toolBar.zoomOut"}),S=E.formatMessage({id:"pages.toolBar.move"}),W=E.formatMessage({id:"pages.toolBar.save"}),Z=E.formatMessage({id:"pages.toolBar.autoSave"});function K(){var n;((n=g.curr)===null||n===void 0?void 0:n.labelFormat)=="single_class"&&i.setOneHot(!0)}function U(n){if(i.isActive(n))i.isOneHot&&D.clear(),D.create({taskId:I.curr.taskId,labelId:n.labelId,dataId:x.curr.dataId});else{var v=D.all.filter(function(N){return N.labelId==n.labelId})[0];D.remove(v.annotationId)}}function k(n,v){T.setCurr(!0),!(!n||!v)&&(i.initActive(v),T.setCurr(!1))}return(0,t.jsxs)(a.Z,{className:u().classes,children:[(0,t.jsxs)(O.Z,{children:[(0,t.jsx)(r.Z,{imgSrc:"./pics/buttons/zoom_in.png",onClick:function(){A.change(.1)},children:y}),(0,t.jsx)(r.Z,{imgSrc:"./pics/buttons/zoom_out.png",onClick:function(){A.change(-.1)},children:R}),(0,t.jsx)(r.Z,{imgSrc:"./pics/buttons/save.png",onClick:function(){l.default.success(Z)},children:W}),(0,t.jsx)(r.Z,{imgSrc:"./pics/buttons/move.png",active:L.curr=="mover",onClick:function(){L.setCurr("mover")},children:S})]}),(0,t.jsx)("div",{id:"dr",className:"mainStage",children:(0,t.jsxs)(M.Z,{tip:"loading",spinning:T.curr,children:[(0,t.jsx)("div",{className:"draw",children:(0,t.jsx)(p.Z,{scale:A.curr,currentTool:L.curr,setCurrentAnnotation:function(){},onAnnotationModify:function(){},onAnnotationModifyComplete:function(){},imgSrc:x.imgSrc})}),(0,t.jsx)("div",{className:"pblock",children:(0,t.jsx)(j.Z,{task:I,project:g})}),(0,t.jsx)("div",{className:"prevTask",onClick:I.prevTask}),(0,t.jsx)("div",{className:"nextTask",onClick:I.nextTask})]})}),(0,t.jsxs)(O.Z,{disLoc:"right",children:[(0,t.jsx)(r.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){o.m8.push("/project_overview?projectId=".concat(g.curr.projectId))},children:"Project Overview"}),(0,t.jsx)(r.Z,{imgSrc:"./pics/buttons/data_division.png",onClick:function(){o.m8.push("/ml?projectId=".concat(g.curr.projectId))},children:"ML Settings"})]}),(0,t.jsx)("div",{className:"rightSideBar",children:(0,t.jsx)(h.Z,{labels:i.all,activeIds:i.activeIds,onLabelSelect:i.onSelect,onLabelAdd:function(v){return i.create((0,f.Z)((0,f.Z)({},v),{},{projectId:g.curr.projectId}))},onLabelDelete:i.remove,onLabelModify:function(){},hideColorPicker:!0,hideEye:!0})})]})};d.default=b}}]);
