(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[442],{57719:function(){},41412:function(){},73577:function(Te,le,n){"use strict";n.d(le,{Z:function(){return s}});var D=n(67294);function s(){var t=D.useRef(!0);return D.useEffect(function(){return function(){t.current=!1}},[]),function(){return!t.current}}},38272:function(Te,le,n){"use strict";n.d(le,{ZM:function(){return ve},ZP:function(){return te}});var D=n(85061),s=n(22122),t=n(96156),fe=n(28481),xe=n(90484),l=n(67294),Se=n(94184),ce=n.n(Se),ye=n(11382),Ne=n(25378),Ee=n(24308),de=n(65632),De=n(40308),me=n(92820),Le=n(21584),Pe=n(96159),Me=function(i,d){var k={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&d.indexOf(c)<0&&(k[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,c=Object.getOwnPropertySymbols(i);E<c.length;E++)d.indexOf(c[E])<0&&Object.prototype.propertyIsEnumerable.call(i,c[E])&&(k[c[E]]=i[c[E]]);return k},Re=function(d){var k=d.prefixCls,c=d.className,E=d.avatar,L=d.title,X=d.description,Y=Me(d,["prefixCls","className","avatar","title","description"]),ie=l.useContext(de.E_),F=ie.getPrefixCls,$=F("list",k),w=ce()("".concat($,"-item-meta"),c),ne=l.createElement("div",{className:"".concat($,"-item-meta-content")},L&&l.createElement("h4",{className:"".concat($,"-item-meta-title")},L),X&&l.createElement("div",{className:"".concat($,"-item-meta-description")},X));return l.createElement("div",(0,s.Z)({},Y,{className:w}),E&&l.createElement("div",{className:"".concat($,"-item-meta-avatar")},E),(L||X)&&ne)},he=function(d){var k=d.prefixCls,c=d.children,E=d.actions,L=d.extra,X=d.className,Y=d.colStyle,ie=Me(d,["prefixCls","children","actions","extra","className","colStyle"]),F=l.useContext(ve),$=F.grid,w=F.itemLayout,ne=l.useContext(de.E_),T=ne.getPrefixCls,se=function(){var j;return l.Children.forEach(c,function(Ce){typeof Ce=="string"&&(j=!0)}),j&&l.Children.count(c)>1},q=function(){return w==="vertical"?!!L:!se()},z=T("list",k),ae=E&&E.length>0&&l.createElement("ul",{className:"".concat(z,"-item-action"),key:"actions"},E.map(function(V,j){return l.createElement("li",{key:"".concat(z,"-item-action-").concat(j)},V,j!==E.length-1&&l.createElement("em",{className:"".concat(z,"-item-action-split")}))})),re=$?"div":"li",ue=l.createElement(re,(0,s.Z)({},ie,{className:ce()("".concat(z,"-item"),(0,t.Z)({},"".concat(z,"-item-no-flex"),!q()),X)}),w==="vertical"&&L?[l.createElement("div",{className:"".concat(z,"-item-main"),key:"content"},c,ae),l.createElement("div",{className:"".concat(z,"-item-extra"),key:"extra"},L)]:[c,ae,(0,Pe.Tm)(L,{key:"extra"})]);return $?l.createElement(Le.Z,{flex:1,style:Y},ue):ue};he.Meta=Re;var Ie=he,Be=function(i,d){var k={};for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&d.indexOf(c)<0&&(k[c]=i[c]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var E=0,c=Object.getOwnPropertySymbols(i);E<c.length;E++)d.indexOf(c[E])<0&&Object.prototype.propertyIsEnumerable.call(i,c[E])&&(k[c[E]]=i[c[E]]);return k},ve=l.createContext({}),je=ve.Consumer;function Oe(i){var d,k=i.pagination,c=k===void 0?!1:k,E=i.prefixCls,L=i.bordered,X=L===void 0?!1:L,Y=i.split,ie=Y===void 0?!0:Y,F=i.className,$=i.children,w=i.itemLayout,ne=i.loadMore,T=i.grid,se=i.dataSource,q=se===void 0?[]:se,z=i.size,ae=i.header,re=i.footer,ue=i.loading,V=ue===void 0?!1:ue,j=i.rowKey,Ce=i.renderItem,be=i.locale,Fe=Be(i,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),Ze=c&&(0,xe.Z)(c)==="object"?c:{},$e=l.useState(Ze.defaultCurrent||1),ke=(0,fe.Z)($e,2),Ae=ke[0],K=ke[1],pe=l.useState(Ze.defaultPageSize||10),a=(0,fe.Z)(pe,2),e=a[0],o=a[1],r=l.useContext(de.E_),u=r.getPrefixCls,g=r.renderEmpty,S=r.direction,v={current:1,total:0},P={},O=function(I){return function(J,U){K(J),o(U),c&&c[I]&&c[I](J,U)}},h=O("onChange"),C=O("onShowSizeChange"),N=function(I,J){if(!Ce)return null;var U;return typeof j=="function"?U=j(I):j?U=I[j]:U=I.key,U||(U="list-item-".concat(J)),P[J]=U,Ce(I,J)},M=function(){return!!(ne||c||re)},B=function(I,J){return l.createElement("div",{className:"".concat(I,"-empty-text")},be&&be.emptyText||J("List"))},f=u("list",E),m=V;typeof m=="boolean"&&(m={spinning:m});var y=m&&m.spinning,Z="";switch(z){case"large":Z="lg";break;case"small":Z="sm";break;default:break}var R=ce()(f,(d={},(0,t.Z)(d,"".concat(f,"-vertical"),w==="vertical"),(0,t.Z)(d,"".concat(f,"-").concat(Z),Z),(0,t.Z)(d,"".concat(f,"-split"),ie),(0,t.Z)(d,"".concat(f,"-bordered"),X),(0,t.Z)(d,"".concat(f,"-loading"),y),(0,t.Z)(d,"".concat(f,"-grid"),!!T),(0,t.Z)(d,"".concat(f,"-something-after-last-item"),M()),(0,t.Z)(d,"".concat(f,"-rtl"),S==="rtl"),d),F),x=(0,s.Z)((0,s.Z)((0,s.Z)({},v),{total:q.length,current:Ae,pageSize:e}),c||{}),W=Math.ceil(x.total/x.pageSize);x.current>W&&(x.current=W);var H=c?l.createElement("div",{className:"".concat(f,"-pagination")},l.createElement(De.Z,(0,s.Z)({},x,{onChange:h,onShowSizeChange:C}))):null,Q=(0,D.Z)(q);c&&q.length>(x.current-1)*x.pageSize&&(Q=(0,D.Z)(q).splice((x.current-1)*x.pageSize,x.pageSize));var _=(0,Ne.Z)(),ee=l.useMemo(function(){for(var b=0;b<Ee.c4.length;b+=1){var I=Ee.c4[b];if(_[I])return I}},[_]),G=l.useMemo(function(){if(!!T){var b=ee&&T[ee]?T[ee]:T.column;if(b)return{width:"".concat(100/b,"%"),maxWidth:"".concat(100/b,"%")}}},[T==null?void 0:T.column,ee]),A=y&&l.createElement("div",{style:{minHeight:53}});if(Q.length>0){var ge=Q.map(function(b,I){return N(b,I)}),p=l.Children.map(ge,function(b,I){return l.createElement("div",{key:P[I],style:G},b)});A=T?l.createElement(me.Z,{gutter:T.gutter},p):l.createElement("ul",{className:"".concat(f,"-items")},ge)}else!$&&!y&&(A=B(f,g));var oe=x.position||"bottom",ze=l.useMemo(function(){return{grid:T,itemLayout:w}},[JSON.stringify(T),w]);return l.createElement(ve.Provider,{value:ze},l.createElement("div",(0,s.Z)({className:R},Fe),(oe==="top"||oe==="both")&&H,ae&&l.createElement("div",{className:"".concat(f,"-header")},ae),l.createElement(ye.Z,m,A,$),re&&l.createElement("div",{className:"".concat(f,"-footer")},re),ne||(oe==="bottom"||oe==="both")&&H))}Oe.Item=Ie;var te=Oe},54421:function(Te,le,n){"use strict";var D=n(38663),s=n.n(D),t=n(57719),fe=n.n(t),xe=n(13254),l=n(20228),Se=n(14781),ce=n(6999)},48889:function(Te,le,n){"use strict";n.d(le,{Z:function(){return pe}});var D=n(96156),s=n(22122),t=n(67294),fe=n(83230),xe=n(94184),l=n.n(xe),Se=n(54549),ce=n(83008),ye=n(71577),Ne=n(32413),Ee=n(42051),de=n(65632),De=n(31808),me=n(33603),Le=function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(a);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(a,r[u])&&(o[r[u]]=a[r[u]]);return o},Pe,Me=function(e){Pe={x:e.pageX,y:e.pageY},setTimeout(function(){Pe=null},100)};(0,De.jD)()&&document.documentElement.addEventListener("click",Me,!0);var Re=function(e){var o,r=t.useContext(de.E_),u=r.getPopupContainer,g=r.getPrefixCls,S=r.direction,v=function(G){var A=e.onCancel;A==null||A(G)},P=function(G){var A=e.onOk;A==null||A(G)},O=function(G){var A=e.okText,ge=e.okType,p=e.cancelText,oe=e.confirmLoading;return t.createElement(t.Fragment,null,t.createElement(ye.Z,(0,s.Z)({onClick:v},e.cancelButtonProps),p||G.cancelText),t.createElement(ye.Z,(0,s.Z)({},(0,Ne.n)(ge),{loading:oe,onClick:P},e.okButtonProps),A||G.okText))},h=e.prefixCls,C=e.footer,N=e.visible,M=e.wrapClassName,B=e.centered,f=e.getContainer,m=e.closeIcon,y=e.focusTriggerAfterClose,Z=y===void 0?!0:y,R=Le(e,["prefixCls","footer","visible","wrapClassName","centered","getContainer","closeIcon","focusTriggerAfterClose"]),x=g("modal",h),W=g(),H=t.createElement(Ee.Z,{componentName:"Modal",defaultLocale:(0,ce.A)()},O),Q=t.createElement("span",{className:"".concat(x,"-close-x")},m||t.createElement(Se.Z,{className:"".concat(x,"-close-icon")})),_=l()(M,(o={},(0,D.Z)(o,"".concat(x,"-centered"),!!B),(0,D.Z)(o,"".concat(x,"-wrap-rtl"),S==="rtl"),o));return t.createElement(fe.Z,(0,s.Z)({},R,{getContainer:f===void 0?u:f,prefixCls:x,wrapClassName:_,footer:C===void 0?H:C,visible:N,mousePosition:Pe,onClose:v,closeIcon:Q,focusTriggerAfterClose:Z,transitionName:(0,me.m)(W,"zoom",e.transitionName),maskTransitionName:(0,me.m)(W,"fade",e.maskTransitionName)}))};Re.defaultProps={width:520,confirmLoading:!1,visible:!1,okType:"primary"};var he=Re,Ie=n(73935),Be=n(68628),ve=n(15873),je=n(73218),Oe=n(57119),te=n(28481),i=n(73577);function d(a){return!!(a&&!!a.then)}var k=function(e){var o=t.useRef(!1),r=t.useRef(),u=(0,i.Z)(),g=t.useState(!1),S=(0,te.Z)(g,2),v=S[0],P=S[1];t.useEffect(function(){var f;if(e.autoFocus){var m=r.current;f=setTimeout(function(){return m.focus()})}return function(){f&&clearTimeout(f)}},[]);var O=function(m){var y=e.close;!d(m)||(P(!0),m.then(function(){u()||P(!1),y.apply(void 0,arguments),o.current=!1},function(Z){console.error(Z),u()||P(!1),o.current=!1}))},h=function(m){var y=e.actionFn,Z=e.close;if(!o.current){if(o.current=!0,!y){Z();return}var R;if(e.emitEvent){if(R=y(m),e.quitOnNullishReturnValue&&!d(R)){o.current=!1,Z(m);return}}else if(y.length)R=y(Z),o.current=!1;else if(R=y(),!R){Z();return}O(R)}},C=e.type,N=e.children,M=e.prefixCls,B=e.buttonProps;return t.createElement(ye.Z,(0,s.Z)({},(0,Ne.n)(C),{onClick:h,loading:v,prefixCls:M},B,{ref:r}),N)},c=k,E=n(21687),L=n(88182),X=function(e){var o=e.icon,r=e.onCancel,u=e.onOk,g=e.close,S=e.zIndex,v=e.afterClose,P=e.visible,O=e.keyboard,h=e.centered,C=e.getContainer,N=e.maskStyle,M=e.okText,B=e.okButtonProps,f=e.cancelText,m=e.cancelButtonProps,y=e.direction,Z=e.prefixCls,R=e.wrapClassName,x=e.rootPrefixCls,W=e.iconPrefixCls,H=e.bodyStyle,Q=e.closable,_=Q===void 0?!1:Q,ee=e.closeIcon,G=e.modalRender,A=e.focusTriggerAfterClose;(0,E.Z)(!(typeof o=="string"&&o.length>2),"Modal","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(o,"` at https://ant.design/components/icon"));var ge=e.okType||"primary",p="".concat(Z,"-confirm"),oe="okCancel"in e?e.okCancel:!0,ze=e.width||416,b=e.style||{},I=e.mask===void 0?!0:e.mask,J=e.maskClosable===void 0?!1:e.maskClosable,U=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",Ke=l()(p,"".concat(p,"-").concat(e.type),(0,D.Z)({},"".concat(p,"-rtl"),y==="rtl"),e.className),We=oe&&t.createElement(c,{actionFn:r,close:g,autoFocus:U==="cancel",buttonProps:m,prefixCls:"".concat(x,"-btn")},f);return t.createElement(L.ZP,{prefixCls:x,iconPrefixCls:W,direction:y},t.createElement(he,{prefixCls:Z,className:Ke,wrapClassName:l()((0,D.Z)({},"".concat(p,"-centered"),!!e.centered),R),onCancel:function(){return g({triggerCancel:!0})},visible:P,title:"",footer:"",transitionName:(0,me.m)(x,"zoom",e.transitionName),maskTransitionName:(0,me.m)(x,"fade",e.maskTransitionName),mask:I,maskClosable:J,maskStyle:N,style:b,bodyStyle:H,width:ze,zIndex:S,afterClose:v,keyboard:O,centered:h,getContainer:C,closable:_,closeIcon:ee,modalRender:G,focusTriggerAfterClose:A},t.createElement("div",{className:"".concat(p,"-body-wrapper")},t.createElement("div",{className:"".concat(p,"-body")},o,e.title===void 0?null:t.createElement("span",{className:"".concat(p,"-title")},e.title),t.createElement("div",{className:"".concat(p,"-content")},e.content)),t.createElement("div",{className:"".concat(p,"-btns")},We,t.createElement(c,{type:ge,actionFn:u,close:g,autoFocus:U==="ok",buttonProps:B,prefixCls:"".concat(x,"-btn")},M)))))},Y=X,ie=[],F=ie,$=function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(a);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(a,r[u])&&(o[r[u]]=a[r[u]]);return o},w="";function ne(){return w}function T(a){var e=document.createDocumentFragment(),o=(0,s.Z)((0,s.Z)({},a),{close:g,visible:!0});function r(){Ie.unmountComponentAtNode(e);for(var v=arguments.length,P=new Array(v),O=0;O<v;O++)P[O]=arguments[O];var h=P.some(function(M){return M&&M.triggerCancel});a.onCancel&&h&&a.onCancel.apply(a,P);for(var C=0;C<F.length;C++){var N=F[C];if(N===g){F.splice(C,1);break}}}function u(v){var P=v.okText,O=v.cancelText,h=v.prefixCls,C=$(v,["okText","cancelText","prefixCls"]);setTimeout(function(){var N=(0,ce.A)(),M=(0,L.w6)(),B=M.getPrefixCls,f=M.getIconPrefixCls,m=B(void 0,ne()),y=h||"".concat(m,"-modal"),Z=f();Ie.render(t.createElement(Y,(0,s.Z)({},C,{prefixCls:y,rootPrefixCls:m,iconPrefixCls:Z,okText:P||(C.okCancel?N.okText:N.justOkText),cancelText:O||N.cancelText})),e)})}function g(){for(var v=this,P=arguments.length,O=new Array(P),h=0;h<P;h++)O[h]=arguments[h];o=(0,s.Z)((0,s.Z)({},o),{visible:!1,afterClose:function(){typeof a.afterClose=="function"&&a.afterClose(),r.apply(v,O)}}),u(o)}function S(v){typeof v=="function"?o=v(o):o=(0,s.Z)((0,s.Z)({},o),v),u(o)}return u(o),F.push(g),{destroy:g,update:S}}function se(a){return(0,s.Z)((0,s.Z)({icon:t.createElement(Oe.Z,null),okCancel:!1},a),{type:"warning"})}function q(a){return(0,s.Z)((0,s.Z)({icon:t.createElement(Be.Z,null),okCancel:!1},a),{type:"info"})}function z(a){return(0,s.Z)((0,s.Z)({icon:t.createElement(ve.Z,null),okCancel:!1},a),{type:"success"})}function ae(a){return(0,s.Z)((0,s.Z)({icon:t.createElement(je.Z,null),okCancel:!1},a),{type:"error"})}function re(a){return(0,s.Z)((0,s.Z)({icon:t.createElement(Oe.Z,null),okCancel:!0},a),{type:"confirm"})}function ue(a){var e=a.rootPrefixCls;(0,E.Z)(!1,"Modal","Modal.config is deprecated. Please use ConfigProvider.config instead."),w=e}var V=n(85061);function j(){var a=t.useState([]),e=(0,te.Z)(a,2),o=e[0],r=e[1],u=t.useCallback(function(g){return r(function(S){return[].concat((0,V.Z)(S),[g])}),function(){r(function(S){return S.filter(function(v){return v!==g})})}},[]);return[o,u]}var Ce=n(85636),be=function(e,o){var r=e.afterClose,u=e.config,g=t.useState(!0),S=(0,te.Z)(g,2),v=S[0],P=S[1],O=t.useState(u),h=(0,te.Z)(O,2),C=h[0],N=h[1],M=t.useContext(de.E_),B=M.direction,f=M.getPrefixCls,m=f("modal"),y=f(),Z=function(){P(!1);for(var x=arguments.length,W=new Array(x),H=0;H<x;H++)W[H]=arguments[H];var Q=W.some(function(_){return _&&_.triggerCancel});C.onCancel&&Q&&C.onCancel()};return t.useImperativeHandle(o,function(){return{destroy:Z,update:function(x){N(function(W){return(0,s.Z)((0,s.Z)({},W),x)})}}}),t.createElement(Ee.Z,{componentName:"Modal",defaultLocale:Ce.Z.Modal},function(R){return t.createElement(Y,(0,s.Z)({prefixCls:m,rootPrefixCls:y},C,{close:Z,visible:v,afterClose:r,okText:C.okText||(C.okCancel?R.okText:R.justOkText),direction:B,cancelText:C.cancelText||R.cancelText}))})},Fe=t.forwardRef(be),Ze=0,$e=t.memo(t.forwardRef(function(a,e){var o=j(),r=(0,te.Z)(o,2),u=r[0],g=r[1];return t.useImperativeHandle(e,function(){return{patchElement:g}},[]),t.createElement(t.Fragment,null,u)}));function ke(){var a=t.useRef(null),e=t.useState([]),o=(0,te.Z)(e,2),r=o[0],u=o[1];t.useEffect(function(){if(r.length){var v=(0,V.Z)(r);v.forEach(function(P){P()}),u([])}},[r]);var g=t.useCallback(function(v){return function(O){var h;Ze+=1;var C=t.createRef(),N,M=t.createElement(Fe,{key:"modal-".concat(Ze),config:v(O),ref:C,afterClose:function(){N()}});return N=(h=a.current)===null||h===void 0?void 0:h.patchElement(M),{destroy:function(){function f(){var m;(m=C.current)===null||m===void 0||m.destroy()}C.current?f():u(function(m){return[].concat((0,V.Z)(m),[f])})},update:function(f){function m(){var y;(y=C.current)===null||y===void 0||y.update(f)}C.current?m():u(function(y){return[].concat((0,V.Z)(y),[m])})}}}},[]),S=t.useMemo(function(){return{info:g(q),success:g(z),error:g(ae),warning:g(se),confirm:g(re)}},[]);return[S,t.createElement($e,{ref:a})]}function Ae(a){return T(se(a))}var K=he;K.useModal=ke,K.info=function(e){return T(q(e))},K.success=function(e){return T(z(e))},K.error=function(e){return T(ae(e))},K.warning=Ae,K.warn=Ae,K.confirm=function(e){return T(re(e))},K.destroyAll=function(){for(;F.length;){var e=F.pop();e&&e()}},K.config=ue;var pe=K},71194:function(Te,le,n){"use strict";var D=n(38663),s=n.n(D),t=n(41412),fe=n.n(t),xe=n(57663)}}]);