(self.webpackChunkpp_labeling_frontend=self.webpackChunkpp_labeling_frontend||[]).push([[854],{91220:function(re,H,f){"use strict";f.d(H,{Z:function(){return S}});var P=f(64254);function S(t,Z){var O;if(typeof Symbol=="undefined"||t[Symbol.iterator]==null){if(Array.isArray(t)||(O=(0,P.Z)(t))||Z&&t&&typeof t.length=="number"){O&&(t=O);var M=0,U=function(){};return{s:U,n:function(){return M>=t.length?{done:!0}:{done:!1,value:t[M++]}},e:function(b){throw b},f:U}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var J=!0,F=!1,y;return{s:function(){O=t[Symbol.iterator]()},n:function(){var b=O.next();return J=b.done,b},e:function(b){F=!0,y=b},f:function(){try{!J&&O.return!=null&&O.return()}finally{if(F)throw y}}}}},62259:function(){},40308:function(re,H,f){"use strict";f.d(H,{Z:function(){return Ue}});var P=f(96156),S=f(22122),t=f(67294),Z=f(28991),O=f(6610),M=f(5991),U=f(10379),J=f(81907),F=f(94184),y=f.n(F),D=function(o){var h,i="".concat(o.rootPrefixCls,"-item"),e=y()(i,"".concat(i,"-").concat(o.page),(h={},(0,P.Z)(h,"".concat(i,"-active"),o.active),(0,P.Z)(h,"".concat(i,"-disabled"),!o.page),(0,P.Z)(h,o.className,!!o.className),h)),n=function(){o.onClick(o.page)},a=function(s){o.onKeyPress(s,o.onClick,o.page)};return t.createElement("li",{title:o.showTitle?o.page:null,className:e,onClick:n,onKeyPress:a,tabIndex:"0"},o.itemRender(o.page,"page",t.createElement("a",{rel:"nofollow"},o.page)))},b=D,V={ZERO:48,NINE:57,NUMPAD_ZERO:96,NUMPAD_NINE:105,BACKSPACE:8,DELETE:46,ENTER:13,ARROW_UP:38,ARROW_DOWN:40},ie=function(d){(0,U.Z)(h,d);var o=(0,J.Z)(h);function h(){var i;(0,O.Z)(this,h);for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return i=o.call.apply(o,[this].concat(n)),i.state={goInputText:""},i.buildOptionText=function(l){return"".concat(l," ").concat(i.props.locale.items_per_page)},i.changeSize=function(l){i.props.changeSize(Number(l))},i.handleChange=function(l){i.setState({goInputText:l.target.value})},i.handleBlur=function(l){var s=i.props,r=s.goButton,c=s.quickGo,u=s.rootPrefixCls,p=i.state.goInputText;r||p===""||(i.setState({goInputText:""}),!(l.relatedTarget&&(l.relatedTarget.className.indexOf("".concat(u,"-item-link"))>=0||l.relatedTarget.className.indexOf("".concat(u,"-item"))>=0))&&c(i.getValidValue()))},i.go=function(l){var s=i.state.goInputText;s!==""&&(l.keyCode===V.ENTER||l.type==="click")&&(i.setState({goInputText:""}),i.props.quickGo(i.getValidValue()))},i}return(0,M.Z)(h,[{key:"getValidValue",value:function(){var e=this.state.goInputText;return!e||isNaN(e)?void 0:Number(e)}},{key:"getPageSizeOptions",value:function(){var e=this.props,n=e.pageSize,a=e.pageSizeOptions;return a.some(function(l){return l.toString()===n.toString()})?a:a.concat([n.toString()]).sort(function(l,s){var r=isNaN(Number(l))?0:Number(l),c=isNaN(Number(s))?0:Number(s);return r-c})}},{key:"render",value:function(){var e=this,n=this.props,a=n.pageSize,l=n.locale,s=n.rootPrefixCls,r=n.changeSize,c=n.quickGo,u=n.goButton,p=n.selectComponentClass,N=n.buildOptionText,C=n.selectPrefixCls,v=n.disabled,L=this.state.goInputText,j="".concat(s,"-options"),x=p,k=null,I=null,z=null;if(!r&&!c)return null;var R=this.getPageSizeOptions();if(r&&x){var A=R.map(function(K,B){return t.createElement(x.Option,{key:B,value:K.toString()},(N||e.buildOptionText)(K))});k=t.createElement(x,{disabled:v,prefixCls:C,showSearch:!1,className:"".concat(j,"-size-changer"),optionLabelProp:"children",dropdownMatchSelectWidth:!1,value:(a||R[0]).toString(),onChange:this.changeSize,getPopupContainer:function(B){return B.parentNode},"aria-label":l.page_size,defaultOpen:!1},A)}return c&&(u&&(z=typeof u=="boolean"?t.createElement("button",{type:"button",onClick:this.go,onKeyUp:this.go,disabled:v,className:"".concat(j,"-quick-jumper-button")},l.jump_to_confirm):t.createElement("span",{onClick:this.go,onKeyUp:this.go},u)),I=t.createElement("div",{className:"".concat(j,"-quick-jumper")},l.jump_to,t.createElement("input",{disabled:v,type:"text",value:L,onChange:this.handleChange,onKeyUp:this.go,onBlur:this.handleBlur,"aria-label":l.page}),l.page,z)),t.createElement("li",{className:"".concat(j)},k,I)}}]),h}(t.Component);ie.defaultProps={pageSizeOptions:["10","20","50","100"]};var Ee=ie,ye=f(81626);function X(){}function le(d){var o=Number(d);return typeof o=="number"&&!isNaN(o)&&isFinite(o)&&Math.floor(o)===o}function be(d,o,h){return h}function w(d,o,h){var i=typeof d=="undefined"?o.pageSize:d;return Math.floor((h.total-1)/i)+1}var oe=function(d){(0,U.Z)(h,d);var o=(0,J.Z)(h);function h(i){var e;(0,O.Z)(this,h),e=o.call(this,i),e.getJumpPrevPage=function(){return Math.max(1,e.state.current-(e.props.showLessItems?3:5))},e.getJumpNextPage=function(){return Math.min(w(void 0,e.state,e.props),e.state.current+(e.props.showLessItems?3:5))},e.getItemIcon=function(r,c){var u=e.props.prefixCls,p=r||t.createElement("button",{type:"button","aria-label":c,className:"".concat(u,"-item-link")});return typeof r=="function"&&(p=t.createElement(r,(0,Z.Z)({},e.props))),p},e.savePaginationNode=function(r){e.paginationNode=r},e.isValid=function(r){var c=e.props.total;return le(r)&&r!==e.state.current&&le(c)&&c>0},e.shouldDisplayQuickJumper=function(){var r=e.props,c=r.showQuickJumper,u=r.total,p=e.state.pageSize;return u<=p?!1:c},e.handleKeyDown=function(r){(r.keyCode===V.ARROW_UP||r.keyCode===V.ARROW_DOWN)&&r.preventDefault()},e.handleKeyUp=function(r){var c=e.getValidValue(r),u=e.state.currentInputValue;c!==u&&e.setState({currentInputValue:c}),r.keyCode===V.ENTER?e.handleChange(c):r.keyCode===V.ARROW_UP?e.handleChange(c-1):r.keyCode===V.ARROW_DOWN&&e.handleChange(c+1)},e.handleBlur=function(r){var c=e.getValidValue(r);e.handleChange(c)},e.changePageSize=function(r){var c=e.state.current,u=w(r,e.state,e.props);c=c>u?u:c,u===0&&(c=e.state.current),typeof r=="number"&&("pageSize"in e.props||e.setState({pageSize:r}),"current"in e.props||e.setState({current:c,currentInputValue:c})),e.props.onShowSizeChange(c,r),"onChange"in e.props&&e.props.onChange&&e.props.onChange(c,r)},e.handleChange=function(r){var c=e.props.disabled,u=r;if(e.isValid(u)&&!c){var p=w(void 0,e.state,e.props);u>p?u=p:u<1&&(u=1),"current"in e.props||e.setState({current:u,currentInputValue:u});var N=e.state.pageSize;return e.props.onChange(u,N),u}return e.state.current},e.prev=function(){e.hasPrev()&&e.handleChange(e.state.current-1)},e.next=function(){e.hasNext()&&e.handleChange(e.state.current+1)},e.jumpPrev=function(){e.handleChange(e.getJumpPrevPage())},e.jumpNext=function(){e.handleChange(e.getJumpNextPage())},e.hasPrev=function(){return e.state.current>1},e.hasNext=function(){return e.state.current<w(void 0,e.state,e.props)},e.runIfEnter=function(r,c){if(r.key==="Enter"||r.charCode===13){for(var u=arguments.length,p=new Array(u>2?u-2:0),N=2;N<u;N++)p[N-2]=arguments[N];c.apply(void 0,p)}},e.runIfEnterPrev=function(r){e.runIfEnter(r,e.prev)},e.runIfEnterNext=function(r){e.runIfEnter(r,e.next)},e.runIfEnterJumpPrev=function(r){e.runIfEnter(r,e.jumpPrev)},e.runIfEnterJumpNext=function(r){e.runIfEnter(r,e.jumpNext)},e.handleGoTO=function(r){(r.keyCode===V.ENTER||r.type==="click")&&e.handleChange(e.state.currentInputValue)};var n=i.onChange!==X,a="current"in i;a&&!n&&console.warn("Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.");var l=i.defaultCurrent;"current"in i&&(l=i.current);var s=i.defaultPageSize;return"pageSize"in i&&(s=i.pageSize),l=Math.min(l,w(s,void 0,i)),e.state={current:l,currentInputValue:l,pageSize:s},e}return(0,M.Z)(h,[{key:"componentDidUpdate",value:function(e,n){var a=this.props.prefixCls;if(n.current!==this.state.current&&this.paginationNode){var l=this.paginationNode.querySelector(".".concat(a,"-item-").concat(n.current));l&&document.activeElement===l&&l.blur()}}},{key:"getValidValue",value:function(e){var n=e.target.value,a=w(void 0,this.state,this.props),l=this.state.currentInputValue,s;return n===""?s=n:isNaN(Number(n))?s=l:n>=a?s=a:s=Number(n),s}},{key:"getShowSizeChanger",value:function(){var e=this.props,n=e.showSizeChanger,a=e.total,l=e.totalBoundaryShowSizeChanger;return typeof n!="undefined"?n:a>l}},{key:"renderPrev",value:function(e){var n=this.props,a=n.prevIcon,l=n.itemRender,s=l(e,"prev",this.getItemIcon(a,"prev page")),r=!this.hasPrev();return(0,t.isValidElement)(s)?(0,t.cloneElement)(s,{disabled:r}):s}},{key:"renderNext",value:function(e){var n=this.props,a=n.nextIcon,l=n.itemRender,s=l(e,"next",this.getItemIcon(a,"next page")),r=!this.hasNext();return(0,t.isValidElement)(s)?(0,t.cloneElement)(s,{disabled:r}):s}},{key:"render",value:function(){var e=this,n=this.props,a=n.prefixCls,l=n.className,s=n.style,r=n.disabled,c=n.hideOnSinglePage,u=n.total,p=n.locale,N=n.showQuickJumper,C=n.showLessItems,v=n.showTitle,L=n.showTotal,j=n.simple,x=n.itemRender,k=n.showPrevNextJumpers,I=n.jumpPrevIcon,z=n.jumpNextIcon,R=n.selectComponentClass,A=n.selectPrefixCls,K=n.pageSizeOptions,B=this.state,m=B.current,_=B.pageSize,Je=B.currentInputValue;if(c===!0&&u<=_)return null;var g=w(void 0,this.state,this.props),E=[],he=null,fe=null,de=null,me=null,W=null,Y=N&&N.goButton,T=C?1:2,ve=m-1>0?m-1:0,ge=m+1<g?m+1:g,Ce=Object.keys(this.props).reduce(function(Ne,Q){return(Q.substr(0,5)==="data-"||Q.substr(0,5)==="aria-"||Q==="role")&&(Ne[Q]=e.props[Q]),Ne},{});if(j)return Y&&(typeof Y=="boolean"?W=t.createElement("button",{type:"button",onClick:this.handleGoTO,onKeyUp:this.handleGoTO},p.jump_to_confirm):W=t.createElement("span",{onClick:this.handleGoTO,onKeyUp:this.handleGoTO},Y),W=t.createElement("li",{title:v?"".concat(p.jump_to).concat(m,"/").concat(g):null,className:"".concat(a,"-simple-pager")},W)),t.createElement("ul",(0,S.Z)({className:y()(a,"".concat(a,"-simple"),(0,P.Z)({},"".concat(a,"-disabled"),r),l),style:s,ref:this.savePaginationNode},Ce),t.createElement("li",{title:v?p.prev_page:null,onClick:this.prev,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterPrev,className:y()("".concat(a,"-prev"),(0,P.Z)({},"".concat(a,"-disabled"),!this.hasPrev())),"aria-disabled":!this.hasPrev()},this.renderPrev(ve)),t.createElement("li",{title:v?"".concat(m,"/").concat(g):null,className:"".concat(a,"-simple-pager")},t.createElement("input",{type:"text",value:Je,disabled:r,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onChange:this.handleKeyUp,onBlur:this.handleBlur,size:"3"}),t.createElement("span",{className:"".concat(a,"-slash")},"/"),g),t.createElement("li",{title:v?p.next_page:null,onClick:this.next,tabIndex:this.hasPrev()?0:null,onKeyPress:this.runIfEnterNext,className:y()("".concat(a,"-next"),(0,P.Z)({},"".concat(a,"-disabled"),!this.hasNext())),"aria-disabled":!this.hasNext()},this.renderNext(ge)),W);if(g<=3+T*2){var Pe={locale:p,rootPrefixCls:a,onClick:this.handleChange,onKeyPress:this.runIfEnter,showTitle:v,itemRender:x};g||E.push(t.createElement(b,(0,S.Z)({},Pe,{key:"noPager",page:1,className:"".concat(a,"-item-disabled")})));for(var G=1;G<=g;G+=1){var _e=m===G;E.push(t.createElement(b,(0,S.Z)({},Pe,{key:G,page:G,active:_e})))}}else{var We=C?p.prev_3:p.prev_5,Ge=C?p.next_3:p.next_5;k&&(he=t.createElement("li",{title:v?We:null,key:"prev",onClick:this.jumpPrev,tabIndex:"0",onKeyPress:this.runIfEnterJumpPrev,className:y()("".concat(a,"-jump-prev"),(0,P.Z)({},"".concat(a,"-jump-prev-custom-icon"),!!I))},x(this.getJumpPrevPage(),"jump-prev",this.getItemIcon(I,"prev page"))),fe=t.createElement("li",{title:v?Ge:null,key:"next",tabIndex:"0",onClick:this.jumpNext,onKeyPress:this.runIfEnterJumpNext,className:y()("".concat(a,"-jump-next"),(0,P.Z)({},"".concat(a,"-jump-next-custom-icon"),!!z))},x(this.getJumpNextPage(),"jump-next",this.getItemIcon(z,"next page")))),me=t.createElement(b,{locale:p,last:!0,rootPrefixCls:a,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:g,page:g,active:!1,showTitle:v,itemRender:x}),de=t.createElement(b,{locale:p,rootPrefixCls:a,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:1,page:1,active:!1,showTitle:v,itemRender:x});var ee=Math.max(1,m-T),te=Math.min(m+T,g);m-1<=T&&(te=1+T*2),g-m<=T&&(ee=g-T*2);for(var $=ee;$<=te;$+=1){var $e=m===$;E.push(t.createElement(b,{locale:p,rootPrefixCls:a,onClick:this.handleChange,onKeyPress:this.runIfEnter,key:$,page:$,active:$e,showTitle:v,itemRender:x}))}m-1>=T*2&&m!==1+2&&(E[0]=(0,t.cloneElement)(E[0],{className:"".concat(a,"-item-after-jump-prev")}),E.unshift(he)),g-m>=T*2&&m!==g-2&&(E[E.length-1]=(0,t.cloneElement)(E[E.length-1],{className:"".concat(a,"-item-before-jump-next")}),E.push(fe)),ee!==1&&E.unshift(de),te!==g&&E.push(me)}var xe=null;L&&(xe=t.createElement("li",{className:"".concat(a,"-total-text")},L(u,[u===0?0:(m-1)*_+1,m*_>u?u:m*_])));var ne=!this.hasPrev()||!g,ae=!this.hasNext()||!g;return t.createElement("ul",(0,S.Z)({className:y()(a,l,(0,P.Z)({},"".concat(a,"-disabled"),r)),style:s,unselectable:"unselectable",ref:this.savePaginationNode},Ce),xe,t.createElement("li",{title:v?p.prev_page:null,onClick:this.prev,tabIndex:ne?null:0,onKeyPress:this.runIfEnterPrev,className:y()("".concat(a,"-prev"),(0,P.Z)({},"".concat(a,"-disabled"),ne)),"aria-disabled":ne},this.renderPrev(ve)),E,t.createElement("li",{title:v?p.next_page:null,onClick:this.next,tabIndex:ae?null:0,onKeyPress:this.runIfEnterNext,className:y()("".concat(a,"-next"),(0,P.Z)({},"".concat(a,"-disabled"),ae)),"aria-disabled":ae},this.renderNext(ge)),t.createElement(Ee,{disabled:r,locale:p,rootPrefixCls:a,selectComponentClass:R,selectPrefixCls:A,changeSize:this.getShowSizeChanger()?this.changePageSize:null,current:m,pageSize:_,pageSizeOptions:K,quickGo:this.shouldDisplayQuickJumper()?this.handleChange:null,goButton:Y}))}}],[{key:"getDerivedStateFromProps",value:function(e,n){var a={};if("current"in e&&(a.current=e.current,e.current!==n.current&&(a.currentInputValue=a.current)),"pageSize"in e&&e.pageSize!==n.pageSize){var l=n.current,s=w(e.pageSize,n,e);l=l>s?s:l,"current"in e||(a.current=l,a.currentInputValue=l),a.pageSize=e.pageSize}return a}}]),h}(t.Component);oe.defaultProps={defaultCurrent:1,total:0,defaultPageSize:10,onChange:X,className:"",selectPrefixCls:"rc-select",prefixCls:"rc-pagination",selectComponentClass:null,hideOnSinglePage:!1,showPrevNextJumpers:!0,showQuickJumper:!1,showLessItems:!1,showTitle:!0,onShowSizeChange:X,locale:ye.Z,style:{},itemRender:be,totalBoundaryShowSizeChanger:50};var Ie=oe,Se=f(62906),Oe=f(67724),ze=f(8812),ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"},Re=ke,se=f(27029),ue=function(o,h){return t.createElement(se.Z,(0,Z.Z)((0,Z.Z)({},o),{},{ref:h,icon:Re}))};ue.displayName="DoubleLeftOutlined";var Te=t.forwardRef(ue),Ze={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"},De=Ze,ce=function(o,h){return t.createElement(se.Z,(0,Z.Z)((0,Z.Z)({},o),{},{ref:h,icon:De}))};ce.displayName="DoubleRightOutlined";var we=t.forwardRef(ce),q=f(34041),pe=function(o){return t.createElement(q.Z,(0,S.Z)({size:"small"},o))};pe.Option=q.Z.Option;var je=pe,Ke=f(42051),Ve=f(65632),Be=f(25378),Le=function(d,o){var h={};for(var i in d)Object.prototype.hasOwnProperty.call(d,i)&&o.indexOf(i)<0&&(h[i]=d[i]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,i=Object.getOwnPropertySymbols(d);e<i.length;e++)o.indexOf(i[e])<0&&Object.prototype.propertyIsEnumerable.call(d,i[e])&&(h[i[e]]=d[i[e]]);return h},Ae=function(o){var h=o.prefixCls,i=o.selectPrefixCls,e=o.className,n=o.size,a=o.locale,l=o.selectComponentClass,s=Le(o,["prefixCls","selectPrefixCls","className","size","locale","selectComponentClass"]),r=(0,Be.Z)(),c=r.xs,u=t.useContext(Ve.E_),p=u.getPrefixCls,N=u.direction,C=p("pagination",h),v=function(){var x=t.createElement("span",{className:"".concat(C,"-item-ellipsis")},"\u2022\u2022\u2022"),k=t.createElement("button",{className:"".concat(C,"-item-link"),type:"button",tabIndex:-1},t.createElement(Oe.Z,null)),I=t.createElement("button",{className:"".concat(C,"-item-link"),type:"button",tabIndex:-1},t.createElement(ze.Z,null)),z=t.createElement("a",{className:"".concat(C,"-item-link")},t.createElement("div",{className:"".concat(C,"-item-container")},t.createElement(Te,{className:"".concat(C,"-item-link-icon")}),x)),R=t.createElement("a",{className:"".concat(C,"-item-link")},t.createElement("div",{className:"".concat(C,"-item-container")},t.createElement(we,{className:"".concat(C,"-item-link-icon")}),x));if(N==="rtl"){var A=[I,k];k=A[0],I=A[1];var K=[R,z];z=K[0],R=K[1]}return{prevIcon:k,nextIcon:I,jumpPrevIcon:z,jumpNextIcon:R}},L=function(x){var k=(0,S.Z)((0,S.Z)({},x),a),I=n==="small"||!!(c&&!n&&s.responsive),z=p("select",i),R=y()((0,P.Z)({mini:I},"".concat(C,"-rtl"),N==="rtl"),e);return t.createElement(Ie,(0,S.Z)({},v(),s,{prefixCls:C,selectPrefixCls:z,className:R,selectComponentClass:l||(I?je:q.Z),locale:k}))};return t.createElement(Ke.Z,{componentName:"Pagination",defaultLocale:Se.Z},L)},Me=Ae,Ue=Me},14781:function(re,H,f){"use strict";var P=f(38663),S=f.n(P),t=f(62259),Z=f.n(t),O=f(43358)}}]);