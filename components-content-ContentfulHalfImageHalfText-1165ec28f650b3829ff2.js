(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[75],{"0837":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n("zyhx"),i=n("q1tI"),r=n.n(i),l=n("dDsW"),o=n("vt1O"),d=n("nZ5Q"),c=n("wlkJ"),m=n("XXEH"),u=n("4ISH"),f=n("vOnD"),s=n("go7Z"),g=n("3Kvx");const p=f.default.div.withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledCircleContainer",componentId:"sc-1meo2ut-0"})(["align-items:flex-end;display:flex;height:100%;justify-content:flex-start;left:0;padding:15px;position:absolute;width:100%;top:0;"," "," ",""],a.mediaQuery.md`
    align-items: flex-start;
    justify-content: ${e=>e.imageLeft?"flex-end":"flex-start"};
    padding: 3.5rem 2.25rem;
  `,a.mediaQuery.lg`
    padding: 3.5rem;
  `,a.mediaQuery.xl`
    padding: 4.5rem;
  `),y=Object(f.default)(g.a).withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledCircle",componentId:"sc-1meo2ut-1"})(["background-color:",";min-width:8rem;padding:0.5rem;"],a.ColorEnum.white),h=Object(f.default)(e=>r.a.createElement(a.Paragraph14,Object.assign({left:!0,grey10:!0,as:"div"},e))).withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledContentParagraph",componentId:"sc-1meo2ut-2"})(["margin:1rem 0;"]),b=f.default.div.withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledImageContainer",componentId:"sc-1meo2ut-3"})(["height:16.1875rem;overflow:hidden;position:relative;width:100%;",""],a.mediaQuery.md`
    height: 100%;
    position: absolute;
    top: 0;
    left: ${e=>e.imageLeft?"0":"auto"};
    right: ${e=>e.imageLeft?"auto":"0"};
    width: 50%;
  `),w=f.default.div.withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledImage",componentId:"sc-1meo2ut-4"})(["width:100%;height:100%;img{object-fit:cover;width:100%;height:100%;}"]),v=f.default.div.withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledWrapper",componentId:"sc-1meo2ut-5"})(["background:",";display:flex;flex-flow:wrap-reverse;flex-direction:",";"," ",""],e=>e.whiteBackground?a.ColorEnum.white:"inherit",e=>e.imageLeft?"row-reverse":"row",s.e.light``,a.mediaQuery.md`
    flex-flow: row;
    position: relative;
  `),x=Object(f.default)(o.d).withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledRow",componentId:"sc-1meo2ut-6"})(["display:flex;"]),C=Object(f.default)(o.b).withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledColumn",componentId:"sc-1meo2ut-7"})(["display:flex;"," ",""],a.mediaQuery.md`
    min-height: 27rem;
    justify-content: ${e=>e.imageLeft?"flex-end":"flex-start"};
  `,a.mediaQuery.lg`
    min-height: 31.0625rem;
  `),O=f.default.div.withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledTextContentWrapper",componentId:"sc-1meo2ut-8"})(["display:flex;flex-direction:column;justify-content:center;margin-bottom:2.5rem;margin-top:2.5rem;"," ",""],a.mediaQuery.md`
    margin-bottom: 3.5rem;
    margin-top: 3.5rem;
    width: 50%;
  `,e=>e.imageLeft?Object(f.css)([""," "," ",""],a.mediaQuery.md`padding-left: 3.5rem;`,a.mediaQuery.lg`padding-left: 6rem;`,a.mediaQuery.xl`padding-left: 7rem;`):Object(f.css)([""," "," ",""],a.mediaQuery.md`padding-right: 3.5rem;`,a.mediaQuery.lg`padding-right: 6.6rem;`,a.mediaQuery.xl`padding-right: 7rem;`)),I=Object(f.default)(a.Title3).withConfig({displayName:"ContentfulHalfImageHalfTextstyle__StyledTitle3",componentId:"sc-1meo2ut-9"})(["margin-top:0rem;font-weight:bold;font-family:",";font-size:1.75rem;",""],a.FontEnum.Bold,a.mediaQuery.sm`
    font-size: 2rem;
  `);var _=r.a.memo(e=>{var t;const{locale:n}=Object(l.a)(),{buttonReference:i,Image:f,hideImageFromScreenReaders:s,altText:g}=e,[_,E]=Object(u.c)(),j=Object(c.c)(i,n),H=f&&f.file&&f.file.url?f.file.url:void 0,L=Object(m.a)(H,{width:1e3,quality:80}),S=Object(m.a)(H,{width:1e3,quality:80,format:"webp"});return r.a.createElement(v,{imageLeft:!!e.imageOnLeft,whiteBackground:!!e.whiteBackground,ref:E},r.a.createElement(o.c,null,r.a.createElement(x,null,r.a.createElement(C,{key:"text",col:12,imageLeft:!!e.imageOnLeft},r.a.createElement(O,{imageLeft:!!e.imageOnLeft},r.a.createElement(a.Title2,{grey10:!0},e.header),r.a.createElement(h,null,Object(c.e)(null===(t=e.RichTextContent)||void 0===t?void 0:t.json,n)),e.buttonLabel&&j&&r.a.createElement("div",{"data-testid":"halfImageHalfText_button"},r.a.createElement(d.a,{to:j},e.buttonLabel)))))),r.a.createElement(b,{imageLeft:!!e.imageOnLeft},r.a.createElement(w,null,_&&r.a.createElement("picture",null,r.a.createElement("source",{srcSet:S,type:"image/webp"}),r.a.createElement("source",{srcSet:L,type:"image/jpeg"}),r.a.createElement("img",{"aria-hidden":!!s,alt:g||"",src:L})),e.circleText&&r.a.createElement(p,{imageLeft:!!e.imageOnLeft},r.a.createElement(y,{"data-testid":"halfImageHalfText_priceCircle",imageLeft:e.imageOnLeft},r.a.createElement("div",null,e.priceCircleHelper&&r.a.createElement(a.Paragraph16,{center:!0,semibold:!0,grey10:!0},e.priceCircleHelper),r.a.createElement(I,{center:!0},e.circleText)))))))})},"3Kvx":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l}));var a=n("q1tI"),i=n.n(a),r=n("zyhx");const l=n("vOnD").default.div.withConfig({displayName:"HightlightCirclestyle__StyledCircle",componentId:"sc-1lesx4i-0"})(["display:inline-flex;align-items:center;justify-content:center;background-color:",";border-radius:50%;vertical-align:middle;::before{content:'';float:left;width:auto;padding-bottom:100%;}"],e=>e.dark?r.ColorEnum.grey10:r.ColorEnum.white);var o=i.a.memo(e=>{const{children:t,...n}=e;return i.a.createElement(l,n,t)})},"4ISH":function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f})),n.d(t,"b",(function(){return s}));var a=n("Y+p1"),i=n.n(a),r=n("q1tI"),l=n("SVbq"),o=n.n(l),d=n("pjIm");const c=e=>{const t=Object(r.useRef)(e);return Object(r.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),t},m=()=>{const{0:e,1:t}=Object(r.useState)(null);return[e,Object(r.useCallback)(e=>{null!==e&&t(e.getBoundingClientRect())},[])]},u=!Object(d.a)()&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,f=e=>{const{threshold:t,root:n,rootMargin:a}=e||{},i=Object(d.a)()?200:window.innerHeight/2,l={threshold:t||0,root:n||null,rootMargin:a||`${i}px 10000px ${i}px 10000px`},o=Object(r.useRef)(null),{0:c,1:m}=Object(r.useState)({inView:!1,triggered:!1,observer:void 0});let f=void 0;return u&&(f=new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(m({inView:!0,triggered:!0,observer:t}),o.current&&t.unobserve(o.current))},l)),Object(r.useEffect)(()=>(f&&o.current&&!c.triggered&&f.observe(o.current),()=>{var e;return null===(e=f)||void 0===e?void 0:e.disconnect()})),Object(d.a)()?[!1,o]:u?[c.inView,o]:[!0,o]},s=(e,t)=>{o()(e,t,i.a)}},SVbq:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("q1tI");function i(e,t){var n=(0,a.useRef)(e);return t(e,n.current)||(n.current=e),n.current}var r=function(e,t,n){(0,a.useEffect)(e,[i(t,n)])};t.default=r}}]);
//# sourceMappingURL=components-content-ContentfulHalfImageHalfText-1165ec28f650b3829ff2.js.map