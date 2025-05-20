var Bt=Object.defineProperty;var St=(t,e,n)=>e in t?Bt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>St(t,typeof e!="symbol"?e+"":e,n);import{r as a,R as X}from"./index-D4lIrffr.js";import{_ as Dt,c as x,a as ct,s as tt,g as jt,b as Lt}from"./createSimplePaletteValueFilter-DH3rn0WQ.js";import{j as v}from"./jsx-runtime-D_zvdyIk.js";import{u as pt}from"./DefaultPropsProvider-Dhaqy-wj.js";import{u as kt,k as et}from"./useEnhancedEffect-BZXq2JXC.js";function G(t){const e=a.useRef(t);return kt(()=>{e.current=t}),a.useRef((...n)=>(0,e.current)(...n)).current}function st(...t){const e=a.useRef(void 0),n=a.useCallback(o=>{const i=t.map(r=>{if(r==null)return null;if(typeof r=="function"){const s=r,c=s(o);return typeof c=="function"?c:()=>{s(null)}}return r.current=o,()=>{r.current=null}});return()=>{i.forEach(r=>r==null?void 0:r())}},t);return a.useMemo(()=>t.every(o=>o==null)?null:o=>{e.current&&(e.current(),e.current=void 0),o!=null&&(e.current=n(o))},t)}const ut={};function ft(t,e){const n=a.useRef(ut);return n.current===ut&&(n.current=t(e)),n}const vt=[];function Nt(t){a.useEffect(t,vt)}class nt{constructor(){_(this,"currentId",null);_(this,"clear",()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)});_(this,"disposeEffect",()=>this.clear)}static create(){return new nt}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}function Ot(){const t=ft(nt.create).current;return Nt(t.disposeEffect),t}function at(t){try{return t.matches(":focus-visible")}catch{}return!1}function $t(t,e){if(t==null)return{};var n={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(e.indexOf(o)!==-1)continue;n[o]=t[o]}return n}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,o){return n.__proto__=o,n},J(t,e)}function Ft(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,J(t,e)}const lt=X.createContext(null);function Ut(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function rt(t,e){var n=function(r){return e&&a.isValidElement(r)?e(r):r},o=Object.create(null);return t&&a.Children.map(t,function(i){return i}).forEach(function(i){o[i.key]=n(i)}),o}function zt(t,e){t=t||{},e=e||{};function n(d){return d in e?e[d]:t[d]}var o=Object.create(null),i=[];for(var r in t)r in e?i.length&&(o[r]=i,i=[]):i.push(r);var s,c={};for(var l in e){if(o[l])for(s=0;s<o[l].length;s++){var f=o[l][s];c[o[l][s]]=n(f)}c[l]=n(l)}for(s=0;s<i.length;s++)c[i[s]]=n(i[s]);return c}function k(t,e,n){return n[e]!=null?n[e]:t.props[e]}function At(t,e){return rt(t.children,function(n){return a.cloneElement(n,{onExited:e.bind(null,n),in:!0,appear:k(n,"appear",t),enter:k(n,"enter",t),exit:k(n,"exit",t)})})}function Yt(t,e,n){var o=rt(t.children),i=zt(e,o);return Object.keys(i).forEach(function(r){var s=i[r];if(a.isValidElement(s)){var c=r in e,l=r in o,f=e[r],d=a.isValidElement(f)&&!f.props.in;l&&(!c||d)?i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:!0,exit:k(s,"exit",t),enter:k(s,"enter",t)}):!l&&c&&!d?i[r]=a.cloneElement(s,{in:!1}):l&&c&&a.isValidElement(f)&&(i[r]=a.cloneElement(s,{onExited:n.bind(null,s),in:f.props.in,exit:k(s,"exit",t),enter:k(s,"enter",t)}))}}),i}var _t=Object.values||function(t){return Object.keys(t).map(function(e){return t[e]})},Xt={component:"div",childFactory:function(e){return e}},ot=function(t){Ft(e,t);function e(o,i){var r;r=t.call(this,o,i)||this;var s=r.handleExited.bind(Ut(r));return r.state={contextValue:{isMounting:!0},handleExited:s,firstRender:!0},r}var n=e.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},e.getDerivedStateFromProps=function(i,r){var s=r.children,c=r.handleExited,l=r.firstRender;return{children:l?At(i,c):Yt(i,s,c),firstRender:!1}},n.handleExited=function(i,r){var s=rt(this.props.children);i.key in s||(i.props.onExited&&i.props.onExited(r),this.mounted&&this.setState(function(c){var l=Dt({},c.children);return delete l[i.key],{children:l}}))},n.render=function(){var i=this.props,r=i.component,s=i.childFactory,c=$t(i,["component","childFactory"]),l=this.state.contextValue,f=_t(this.state.children).map(s);return delete c.appear,delete c.enter,delete c.exit,r===null?X.createElement(lt.Provider,{value:l},f):X.createElement(lt.Provider,{value:l},X.createElement(r,c,f))},e}(X.Component);ot.propTypes={};ot.defaultProps=Xt;class q{constructor(){_(this,"mountEffect",()=>{this.shouldMount&&!this.didMount&&this.ref.current!==null&&(this.didMount=!0,this.mounted.resolve())});this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}static create(){return new q}static use(){const e=ft(q.create).current,[n,o]=a.useState(!1);return e.shouldMount=n,e.setShouldMount=o,a.useEffect(e.mountEffect,[n]),e}mount(){return this.mounted||(this.mounted=Wt(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}start(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.start(...e)})}stop(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.stop(...e)})}pulsate(...e){this.mount().then(()=>{var n;return(n=this.ref.current)==null?void 0:n.pulsate(...e)})}}function Kt(){return q.use()}function Wt(){let t,e;const n=new Promise((o,i)=>{t=o,e=i});return n.resolve=t,n.reject=e,n}function Ht(t){const{className:e,classes:n,pulsate:o=!1,rippleX:i,rippleY:r,rippleSize:s,in:c,onExited:l,timeout:f}=t,[d,h]=a.useState(!1),M=x(e,n.ripple,n.rippleVisible,o&&n.ripplePulsate),V={width:s,height:s,top:-(s/2)+r,left:-(s/2)+i},b=x(n.child,d&&n.childLeaving,o&&n.childPulsate);return!c&&!d&&h(!0),a.useEffect(()=>{if(!c&&l!=null){const S=setTimeout(l,f);return()=>{clearTimeout(S)}}},[l,c,f]),v.jsx("span",{className:M,style:V,children:v.jsx("span",{className:b})})}const g=ct("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),Q=550,Gt=80,qt=et`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,Zt=et`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,Jt=et`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,Qt=tt("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),te=tt(Ht,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${g.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${qt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  &.${g.ripplePulsate} {
    animation-duration: ${({theme:t})=>t.transitions.duration.shorter}ms;
  }

  & .${g.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${g.childLeaving} {
    opacity: 0;
    animation-name: ${Zt};
    animation-duration: ${Q}ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
  }

  & .${g.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Jt};
    animation-duration: 2500ms;
    animation-timing-function: ${({theme:t})=>t.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,ee=a.forwardRef(function(e,n){const o=pt({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:r={},className:s,...c}=o,[l,f]=a.useState([]),d=a.useRef(0),h=a.useRef(null);a.useEffect(()=>{h.current&&(h.current(),h.current=null)},[l]);const M=a.useRef(!1),V=Ot(),b=a.useRef(null),S=a.useRef(null),C=a.useCallback(p=>{const{pulsate:y,rippleX:R,rippleY:$,rippleSize:D,cb:F}=p;f(E=>[...E,v.jsx(te,{classes:{ripple:x(r.ripple,g.ripple),rippleVisible:x(r.rippleVisible,g.rippleVisible),ripplePulsate:x(r.ripplePulsate,g.ripplePulsate),child:x(r.child,g.child),childLeaving:x(r.childLeaving,g.childLeaving),childPulsate:x(r.childPulsate,g.childPulsate)},timeout:Q,pulsate:y,rippleX:R,rippleY:$,rippleSize:D},d.current)]),d.current+=1,h.current=F},[r]),N=a.useCallback((p={},y={},R=()=>{})=>{const{pulsate:$=!1,center:D=i||y.pulsate,fakeElement:F=!1}=y;if((p==null?void 0:p.type)==="mousedown"&&M.current){M.current=!1;return}(p==null?void 0:p.type)==="touchstart"&&(M.current=!0);const E=F?null:S.current,I=E?E.getBoundingClientRect():{width:0,height:0,left:0,top:0};let w,T,B;if(D||p===void 0||p.clientX===0&&p.clientY===0||!p.clientX&&!p.touches)w=Math.round(I.width/2),T=Math.round(I.height/2);else{const{clientX:U,clientY:j}=p.touches&&p.touches.length>0?p.touches[0]:p;w=Math.round(U-I.left),T=Math.round(j-I.top)}if(D)B=Math.sqrt((2*I.width**2+I.height**2)/3),B%2===0&&(B+=1);else{const U=Math.max(Math.abs((E?E.clientWidth:0)-w),w)*2+2,j=Math.max(Math.abs((E?E.clientHeight:0)-T),T)*2+2;B=Math.sqrt(U**2+j**2)}p!=null&&p.touches?b.current===null&&(b.current=()=>{C({pulsate:$,rippleX:w,rippleY:T,rippleSize:B,cb:R})},V.start(Gt,()=>{b.current&&(b.current(),b.current=null)})):C({pulsate:$,rippleX:w,rippleY:T,rippleSize:B,cb:R})},[i,C,V]),K=a.useCallback(()=>{N({},{pulsate:!0})},[N]),O=a.useCallback((p,y)=>{if(V.clear(),(p==null?void 0:p.type)==="touchend"&&b.current){b.current(),b.current=null,V.start(0,()=>{O(p,y)});return}b.current=null,f(R=>R.length>0?R.slice(1):R),h.current=y},[V]);return a.useImperativeHandle(n,()=>({pulsate:K,start:N,stop:O}),[K,N,O]),v.jsx(Qt,{className:x(g.root,r.root,s),ref:S,...c,children:v.jsx(ot,{component:null,exit:!0,children:l})})});function ne(t){return jt("MuiButtonBase",t)}const re=ct("MuiButtonBase",["root","disabled","focusVisible"]),oe=t=>{const{disabled:e,focusVisible:n,focusVisibleClassName:o,classes:i}=t,s=Lt({root:["root",e&&"disabled",n&&"focusVisible"]},ne,i);return n&&o&&(s.root+=` ${o}`),s},ie=tt("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(t,e)=>e.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${re.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),fe=a.forwardRef(function(e,n){const o=pt({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:r=!1,children:s,className:c,component:l="button",disabled:f=!1,disableRipple:d=!1,disableTouchRipple:h=!1,focusRipple:M=!1,focusVisibleClassName:V,LinkComponent:b="a",onBlur:S,onClick:C,onContextMenu:N,onDragLeave:K,onFocus:O,onFocusVisible:p,onKeyDown:y,onKeyUp:R,onMouseDown:$,onMouseLeave:D,onMouseUp:F,onTouchEnd:E,onTouchMove:I,onTouchStart:w,tabIndex:T=0,TouchRippleProps:B,touchRippleRef:U,type:j,...z}=o,A=a.useRef(null),m=Kt(),dt=st(m.ref,U),[L,W]=a.useState(!1);f&&L&&W(!1),a.useImperativeHandle(i,()=>({focusVisible:()=>{W(!0),A.current.focus()}}),[]);const ht=m.shouldMount&&!d&&!f;a.useEffect(()=>{L&&M&&!d&&m.pulsate()},[d,M,L,m]);const mt=P(m,"start",$,h),bt=P(m,"stop",N,h),gt=P(m,"stop",K,h),Mt=P(m,"stop",F,h),Rt=P(m,"stop",u=>{L&&u.preventDefault(),D&&D(u)},h),yt=P(m,"start",w,h),Et=P(m,"stop",E,h),xt=P(m,"stop",I,h),Ct=P(m,"stop",u=>{at(u.target)||W(!1),S&&S(u)},!1),Tt=G(u=>{A.current||(A.current=u.currentTarget),at(u.target)&&(W(!0),p&&p(u)),O&&O(u)}),Z=()=>{const u=A.current;return l&&l!=="button"&&!(u.tagName==="A"&&u.href)},Pt=G(u=>{M&&!u.repeat&&L&&u.key===" "&&m.stop(u,()=>{m.start(u)}),u.target===u.currentTarget&&Z()&&u.key===" "&&u.preventDefault(),y&&y(u),u.target===u.currentTarget&&Z()&&u.key==="Enter"&&!f&&(u.preventDefault(),C&&C(u))}),Vt=G(u=>{M&&u.key===" "&&L&&!u.defaultPrevented&&m.stop(u,()=>{m.pulsate(u)}),R&&R(u),C&&u.target===u.currentTarget&&Z()&&u.key===" "&&!u.defaultPrevented&&C(u)});let H=l;H==="button"&&(z.href||z.to)&&(H=b);const Y={};H==="button"?(Y.type=j===void 0?"button":j,Y.disabled=f):(!z.href&&!z.to&&(Y.role="button"),f&&(Y["aria-disabled"]=f));const It=st(n,A),it={...o,centerRipple:r,component:l,disabled:f,disableRipple:d,disableTouchRipple:h,focusRipple:M,tabIndex:T,focusVisible:L},wt=oe(it);return v.jsxs(ie,{as:H,className:x(wt.root,c),ownerState:it,onBlur:Ct,onClick:C,onContextMenu:bt,onFocus:Tt,onKeyDown:Pt,onKeyUp:Vt,onMouseDown:mt,onMouseLeave:Rt,onMouseUp:Mt,onDragLeave:gt,onTouchEnd:Et,onTouchMove:xt,onTouchStart:yt,ref:It,tabIndex:f?-1:T,type:j,...Y,...z,children:[s,ht?v.jsx(ee,{ref:dt,center:r,...B}):null]})});function P(t,e,n,o=!1){return G(i=>(n&&n(i),o||t[e](i),!0))}export{fe as B,st as u};
