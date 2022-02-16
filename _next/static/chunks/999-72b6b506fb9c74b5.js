"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{9760:function(a,b,c){c.d(b,{UQ:function(){return _},KF:function(){return ea},XE:function(){return ga},Qd:function(){return da},Hk:function(){return fa}});var d=c(894),e=c(2846),f=c(5031),g=c(8554),h=c.n(g),i=c(4332),j=c(3319),k=c(7294);function l(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}function m(){return(m=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}var n={ease:[0.25,0.1,0.25,1],easeIn:[0.4,0,1,1],easeOut:[0,0,0.2,1],easeInOut:[0.4,0,0.2,1]},o={scale:{enter:{scale:1},exit:{scale:0.95}},fade:{enter:{opacity:1},exit:{opacity:0}},pushLeft:{enter:{x:"100%"},exit:{x:"-30%"}},pushRight:{enter:{x:"-100%"},exit:{x:"30%"}},pushUp:{enter:{y:"100%"},exit:{y:"-30%"}},pushDown:{enter:{y:"-100%"},exit:{y:"30%"}},slideLeft:{position:{left:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"-100%",y:0}},slideRight:{position:{right:0,top:0,bottom:0,width:"100%"},enter:{x:0,y:0},exit:{x:"100%",y:0}},slideUp:{position:{top:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"-100%"}},slideDown:{position:{bottom:0,left:0,right:0,maxWidth:"100vw"},enter:{x:0,y:0},exit:{x:0,y:"100%"}}};function p(a){var b,c=null!=(b=null==a?void 0:a.direction)?b:"right";switch(c){case"right":return o.slideRight;case"left":return o.slideLeft;case"bottom":return o.slideDown;case"top":return o.slideUp;default:return o.slideRight}}var q={enter:{duration:0.2,ease:n.easeOut},exit:{duration:0.1,ease:n.easeIn}},r={enter:function(a,b){return m({},a,{delay:(0,f.hj)(b)?b:null==b?void 0:b.enter})},exit:function(a,b){return m({},a,{delay:(0,f.hj)(b)?b:null==b?void 0:b.exit})}},s=["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","transition","transitionEnd"],t={exit:{height:{duration:0.2,ease:n.ease},opacity:{duration:0.3,ease:n.ease}},enter:{height:{duration:0.3,ease:n.ease},opacity:{duration:0.4,ease:n.ease}}},u={exit:function(a){var b,c,d=a.animateOpacity,e=a.startingHeight,f=a.transition,g=a.transitionEnd,h=a.delay;return m({},d&&{opacity:null!=(c=e)&&parseInt(c.toString(),10)>0?1:0},{overflow:"hidden",height:e,transitionEnd:null==g?void 0:g.exit,transition:null!=(b=null==f?void 0:f.exit)?b:r.exit(t.exit,h)})},enter:function(a){var b,c=a.animateOpacity,d=a.endingHeight,e=a.transition,f=a.transitionEnd,g=a.delay;return m({},c&&{opacity:1},{height:d,transitionEnd:null==f?void 0:f.enter,transition:null!=(b=null==e?void 0:e.enter)?b:r.enter(t.enter,g)})}},v=k.forwardRef(function(a,b){var c=a.in,d=a.unmountOnExit,e=a.animateOpacity,g=a.startingHeight,n=void 0===g?0:g,o=a.endingHeight,p=a.style,q=a.className,r=a.transition,t=a.transitionEnd,v=l(a,s),w=k.useState(!1),x=w[0],y=w[1];k.useEffect(function(){var a=setTimeout(function(){y(!0)});return function(){return clearTimeout(a)}},[]),(0,f.ZK)({condition:Boolean(n>0&&d),message:"startingHeight and unmountOnExit are mutually exclusive. You can't use them together"});var z=parseFloat(n.toString())>0,A={startingHeight:n,endingHeight:void 0===o?"auto":o,animateOpacity:void 0===e||e,transition:x?r:{enter:{duration:0}},transitionEnd:h()(t,{enter:{overflow:"initial"},exit:d?void 0:{display:z?"block":"none"}})};return k.createElement(i.M,{initial:!1,custom:A},(!d||c)&&k.createElement(j.E.div,m({ref:b},v,{className:(0,f.cx)("chakra-collapse",q),style:m({overflow:"hidden",display:"block"},p),custom:A,variants:u,initial:!!d&&"exit",animate:c||d?"enter":"exit",exit:"exit"})))});f.Ts&&(v.displayName="Collapse");var w=["unmountOnExit","in","className","transition","transitionEnd","delay"],x={initial:"exit",animate:"enter",exit:"exit",variants:{enter:function(a){var b,c=void 0===a?{}:a,d=c.transition,e=c.transitionEnd,f=c.delay;return{opacity:1,transition:null!=(b=null==d?void 0:d.enter)?b:r.enter(q.enter,f),transitionEnd:null==e?void 0:e.enter}},exit:function(a){var b,c=void 0===a?{}:a,d=c.transition,e=c.transitionEnd,f=c.delay;return{opacity:0,transition:null!=(b=null==d?void 0:d.exit)?b:r.exit(q.exit,f),transitionEnd:null==e?void 0:e.exit}}}},y=k.forwardRef(function(a,b){var c=a.unmountOnExit,d=a.in,e=a.className,g=a.transition,h=a.transitionEnd,n=a.delay,o=l(a,w),p={transition:g,transitionEnd:h,delay:n};return k.createElement(i.M,{custom:p},(!c||d&&c)&&k.createElement(j.E.div,m({ref:b,className:(0,f.cx)("chakra-fade",e),custom:p},x,{animate:d||c?"enter":"exit"},o)))});f.Ts&&(y.displayName="Fade");var z=["unmountOnExit","in","reverse","initialScale","className","transition","transitionEnd","delay"],A={initial:"exit",animate:"enter",exit:"exit",variants:{exit:function(a){var b,c=a.reverse,d=a.initialScale,e=a.transition,f=a.transitionEnd,g=a.delay;return m({opacity:0},c?{scale:d,transitionEnd:null==f?void 0:f.exit}:{transitionEnd:m({scale:d},null==f?void 0:f.exit)},{transition:null!=(b=null==e?void 0:e.exit)?b:r.exit(q.exit,g)})},enter:function(a){var b,c=a.transitionEnd,d=a.transition,e=a.delay;return{opacity:1,scale:1,transition:null!=(b=null==d?void 0:d.enter)?b:r.enter(q.enter,e),transitionEnd:null==c?void 0:c.enter}}}},B=k.forwardRef(function(a,b){var c=a.unmountOnExit,d=a.in,e=a.reverse,g=a.initialScale,h=a.className,n=a.transition,o=a.transitionEnd,p=a.delay,q=l(a,z),r={initialScale:void 0===g?0.95:g,reverse:void 0===e||e,transition:n,transitionEnd:o,delay:p};return k.createElement(i.M,{custom:r},(!c||d&&c)&&k.createElement(j.E.div,m({ref:b,className:(0,f.cx)("chakra-offset-slide",h)},A,{animate:d||c?"enter":"exit",custom:r},q)))});f.Ts&&(B.displayName="ScaleFade");var C=["direction","style","unmountOnExit","in","className","transition","transitionEnd","delay"],D={exit:{duration:0.15,ease:n.easeInOut},enter:{type:"spring",damping:25,stiffness:180}},E={exit:function(a){var b,c=a.direction,d=a.transition,e=a.transitionEnd,f=a.delay,g=p({direction:c}),h=g.exit;return m({},h,{transition:null!=(b=null==d?void 0:d.exit)?b:r.exit(D.exit,f),transitionEnd:null==e?void 0:e.exit})},enter:function(a){var b,c=a.direction,d=a.transitionEnd,e=a.transition,f=a.delay,g=p({direction:c}),h=g.enter;return m({},h,{transition:null!=(b=null==e?void 0:e.enter)?b:r.enter(D.enter,f),transitionEnd:null==d?void 0:d.enter})}},F=k.forwardRef(function(a,b){var c=a.direction,d=void 0===c?"right":c,e=a.style,g=a.unmountOnExit,h=a.in,n=a.className,o=a.transition,q=a.transitionEnd,r=a.delay,s=l(a,C),t=p({direction:d}),u=Object.assign({position:"fixed"},t.position,e),v={transitionEnd:q,transition:o,direction:d,delay:r};return k.createElement(i.M,{custom:v},(!g||h&&g)&&k.createElement(j.E.div,m({},s,{ref:b,initial:"exit",className:(0,f.cx)("chakra-slide",n),animate:h||g?"enter":"exit",exit:"exit",custom:v,variants:E,style:u})))});f.Ts&&(F.displayName="Slide");var G=["unmountOnExit","in","reverse","className","offsetX","offsetY","transition","transitionEnd","delay"],H={initial:"initial",animate:"enter",exit:"exit",variants:{initial:function(a){var b,c=a.offsetX,d=a.offsetY,e=a.transition,f=a.transitionEnd,g=a.delay;return{opacity:0,x:c,y:d,transition:null!=(b=null==e?void 0:e.exit)?b:r.exit(q.exit,g),transitionEnd:null==f?void 0:f.exit}},enter:function(a){var b,c=a.transition,d=a.transitionEnd,e=a.delay;return{opacity:1,x:0,y:0,transition:null!=(b=null==c?void 0:c.enter)?b:r.enter(q.enter,e),transitionEnd:null==d?void 0:d.enter}},exit:function(a){var b,c=a.offsetY,d=a.offsetX,e=a.transition,f=a.transitionEnd,g=a.reverse,h=a.delay,i={x:d,y:c};return m({opacity:0,transition:null!=(b=null==e?void 0:e.exit)?b:r.exit(q.exit,h)},g?m({},i,{transitionEnd:null==f?void 0:f.exit}):{transitionEnd:m({},i,null==f?void 0:f.exit)})}}},I=k.forwardRef(function(a,b){var c=a.unmountOnExit,d=a.in,e=a.reverse,g=a.className,h=a.offsetX,n=a.offsetY,o=a.transition,p=a.transitionEnd,q=a.delay,r=l(a,G),s={offsetX:void 0===h?0:h,offsetY:void 0===n?8:n,reverse:void 0===e||e,transition:o,transitionEnd:p,delay:q};return k.createElement(i.M,{custom:s},(!c||d&&c)&&k.createElement(j.E.div,m({ref:b,className:(0,f.cx)("chakra-offset-slide",g),custom:s},H,{animate:d||c?"enter":"exit"},r)))});f.Ts&&(I.displayName="SlideFade");var J=c(6450),K=c(242),L=c(7375);function M(){return(M=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function N(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var O=["onChange","defaultIndex","index","allowMultiple","allowToggle"],P=["isDisabled","isFocusable","id"],Q=(0,K.n)(),R=Q[0],S=Q[1],T=Q[2],U=Q[3],V=(0,J.kr)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"}),W=V[0],X=V[1],Y=["children","reduceMotion"],Z=["htmlProps","descendants"],$=["htmlProps"],_=(0,e.Gp)(function(a,b){var c,d,g,h,i,j,l,m,n,o,p,q,r,s,t,u,v,w,x=a.children,y=a.reduceMotion,z=N(a,Y),A=(0,e.jC)("Accordion",z),B=(0,e.Lr)(z),C=(j=(i=B).onChange,l=i.defaultIndex,m=i.index,n=i.allowMultiple,o=i.allowToggle,p=N(i,O),d=(c=i).index||c.defaultIndex,g=!(0,f.o8)(d)&&!(0,f.kJ)(d)&&c.allowMultiple,(0,f.ZK)({condition:!!g,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof d+","}),h=i,(0,f.ZK)({condition:!!(h.allowMultiple&&h.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"}),q=T(),r=(0,k.useState)(-1),s=r[0],t=r[1],(0,L.zq)(function(){t(-1)}),u=(0,L.Tx)({value:m,defaultValue:function(){return n?null!=l?l:[]:null!=l?l:-1},onChange:j}),v=u[0],w=u[1],{index:v,setIndex:w,htmlProps:p,getAccordionItemProps:function(a){var b=!1;return null!==a&&(b=(0,f.kJ)(v)?v.includes(a):v===a),{isOpen:b,onChange:function(b){null!==a&&(n&&(0,f.kJ)(v)?w(b?(0,f.jX)(v,a):(0,f.cl)(v,a)):b?w(a):o&&w(-1))}}},focusedIndex:s,setFocusedIndex:t,descendants:q}),D=C.htmlProps,E=C.descendants,F=N(C,Z),G=k.useMemo(function(){return M({},F,{reduceMotion:!!y})},[F,y]);return k.createElement(R,{value:E},k.createElement(W,{value:G},k.createElement(e.Fo,{value:A},k.createElement(e.m$.div,M({ref:b},D,{className:(0,f.cx)("chakra-accordion",z.className)}),x))))});f.Ts&&(_.displayName="Accordion");var aa=(0,J.kr)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),ba=aa[0],ca=aa[1],da=(0,e.Gp)(function(a,b){var c,d,g,h,i,j,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F=a.children,G=a.className,H=(h=(g=a).isDisabled,i=g.isFocusable,j=g.id,l=N(g,P),m=X(),n=m.getAccordionItemProps,o=m.setFocusedIndex,p=(0,k.useRef)(null),q=(0,L.ZS)(j,"accordion-button","accordion-panel"),r=q[0],s=q[1],c=g,(0,f.ZK)({condition:!!(c.isFocusable&&!c.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "}),t=U({disabled:h&&!i}),u=t.register,v=t.index,w=t.descendants,x=n(-1===v?null:v),y=x.isOpen,z=x.onChange,d={isOpen:y,isDisabled:h},(0,f.ZK)({condition:d.isOpen&&!!d.isDisabled,message:"Cannot open a disabled accordion item"}),A=(0,k.useCallback)(function(){null==z||z(!y),o(v)},[v,o,y,z]),B=(0,k.useCallback)(function(a){var b={ArrowDown:function(){var a=w.nextEnabled(v);a&&(0,f.T_)(a.node)},ArrowUp:function(){var a=w.prevEnabled(v);a&&(0,f.T_)(a.node)},Home:function(){var a=w.firstEnabled();a&&(0,f.T_)(a.node)},End:function(){var a=w.lastEnabled();a&&(0,f.T_)(a.node)}}[(0,f.uh)(a)];b&&(a.preventDefault(),b(a))},[w,v]),C=(0,k.useCallback)(function(){o(v)},[o,v]),D=(0,k.useCallback)(function(a,b){return void 0===a&&(a={}),void 0===b&&(b=null),M({},a,{type:"button",ref:(0,J.lq)(u,p,b),id:r,disabled:!!h,"aria-expanded":!!y,"aria-controls":s,onClick:(0,f.v0)(a.onClick,A),onFocus:(0,f.v0)(a.onFocus,C),onKeyDown:(0,f.v0)(a.onKeyDown,B)})},[r,h,y,A,C,B,s,u]),E=(0,k.useCallback)(function(a,b){return void 0===a&&(a={}),void 0===b&&(b=null),M({},a,{ref:b,role:"region",id:s,"aria-labelledby":r,hidden:!y})},[r,y,s]),{isOpen:y,isDisabled:h,isFocusable:i,onOpen:function(){null==z||z(!0)},onClose:function(){null==z||z(!1)},getButtonProps:D,getPanelProps:E,htmlProps:l}),I=H.htmlProps,K=N(H,$),O=(0,e.yK)(),Q=M({},O.container,{overflowAnchor:"none"}),R=k.useMemo(function(){return K},[K]);return k.createElement(ba,{value:R},k.createElement(e.m$.div,M({ref:b},I,{className:(0,f.cx)("chakra-accordion__item",G),__css:Q}),(0,f.Pu)(F,{isExpanded:!!K.isOpen,isDisabled:!!K.isDisabled})))});f.Ts&&(da.displayName="AccordionItem");var ea=(0,e.Gp)(function(a,b){var c=(0,ca().getButtonProps)(a,b),d=M({display:"flex",alignItems:"center",width:"100%",outline:0},(0,e.yK)().button);return k.createElement(e.m$.button,M({},c,{className:(0,f.cx)("chakra-accordion__button",a.className),__css:d}))});f.Ts&&(ea.displayName="AccordionButton");var fa=(0,e.Gp)(function(a,b){var c=X().reduceMotion,d=ca(),g=d.getPanelProps,h=d.isOpen,i=g(a,b),j=(0,f.cx)("chakra-accordion__panel",a.className),l=(0,e.yK)();c||delete i.hidden;var m=k.createElement(e.m$.div,M({},i,{__css:l.panel,className:j}));return c?m:k.createElement(v,{"in":h},m)});f.Ts&&(fa.displayName="AccordionPanel");var ga=function(a){var b=ca(),c=b.isOpen,g=b.isDisabled,h=X(),i=h.reduceMotion,j=(0,f.cx)("chakra-accordion__icon",a.className),l=(0,e.yK)(),m=M({opacity:g?0.4:1,transform:c?"rotate(-180deg)":void 0,transition:i?void 0:"transform 0.2s",transformOrigin:"center"},l.icon);return k.createElement(d.JO,M({viewBox:"0 0 24 24","aria-hidden":!0,className:j,__css:m},a),k.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};f.Ts&&(ga.displayName="AccordionIcon")},9042:function(a,b,c){c.d(b,{iA:function(){return m},p3:function(){return o},Td:function(){return r},Th:function(){return p},Tr:function(){return q}});var d=c(2846),e=c(5031),f=c(7294);function g(){return(g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function h(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}var i=["className"],j=["placement"],k=["isNumeric"],l=["isNumeric"],m=(0,d.Gp)(function(a,b){var c=(0,d.jC)("Table",a),j=(0,d.Lr)(a),k=j.className,l=h(j,i);return f.createElement(d.Fo,{value:c},f.createElement(d.m$.table,g({role:"table",ref:b,__css:c.table,className:(0,e.cx)("chakra-table",k)},l)))});e.Ts&&(m.displayName="Table");var n=(0,d.Gp)(function(a,b){var c=a.placement,e=h(a,j),i=(0,d.yK)();return f.createElement(d.m$.caption,g({},e,{ref:b,__css:g({},i.caption,{captionSide:void 0===c?"bottom":c})}))});e.Ts&&(n.displayName="TableCaption");var o=(0,d.Gp)(function(a,b){var c=(0,d.yK)();return f.createElement(d.m$.tbody,g({},a,{ref:b,__css:c.tbody}))}),p=(0,d.Gp)(function(a,b){var c=a.isNumeric,e=h(a,k),i=(0,d.yK)();return f.createElement(d.m$.th,g({},e,{ref:b,__css:i.th,"data-is-numeric":c}))}),q=(0,d.Gp)(function(a,b){var c=(0,d.yK)();return f.createElement(d.m$.tr,g({role:"row"},a,{ref:b,__css:c.tr}))}),r=(0,d.Gp)(function(a,b){var c=a.isNumeric,e=h(a,l),i=(0,d.yK)();return f.createElement(d.m$.td,g({role:"gridcell"},e,{ref:b,__css:i.td,"data-is-numeric":c}))})},8357:function(a,b,c){c.d(b,{w_:function(){return j}});var d=c(7294),e={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=d.createContext&&d.createContext(e),g=function(){return(g=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},h=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function i(a){return a&&a.map(function(a,b){return d.createElement(a.tag,g({key:b},a.attr),i(a.child))})}function j(a){return function(b){return d.createElement(k,g({attr:g({},a.attr)},b),i(a.child))}}function k(a){var b=function(b){var c,e=a.attr,f=a.size,i=a.title,j=h(a,["attr","size","title"]),k=f||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),d.createElement("svg",g({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,e,j,{className:c,style:g(g({color:a.color||b.color},b.style),a.style),height:k,width:k,xmlns:"http://www.w3.org/2000/svg"}),i&&d.createElement("title",null,i),a.children)};return void 0!==f?d.createElement(f.Consumer,null,function(a){return b(a)}):b(e)}}}])