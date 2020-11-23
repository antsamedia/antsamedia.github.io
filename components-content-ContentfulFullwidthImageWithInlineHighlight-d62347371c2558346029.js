(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[74],{"4ISH":function(e,t,i){"use strict";i.d(t,"d",(function(){return m})),i.d(t,"a",(function(){return g})),i.d(t,"c",(function(){return c})),i.d(t,"b",(function(){return h}));var l=i("Y+p1"),n=i.n(l),r=i("q1tI"),a=i("SVbq"),o=i.n(a),d=i("pjIm");const m=e=>{const t=Object(r.useRef)(e);return Object(r.useEffect)(()=>(t.current=!0,()=>{t.current=!1}),[]),t},g=()=>{const{0:e,1:t}=Object(r.useState)(null);return[e,Object(r.useCallback)(e=>{null!==e&&t(e.getBoundingClientRect())},[])]},u=!Object(d.a)()&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,c=e=>{const{threshold:t,root:i,rootMargin:l}=e||{},n=Object(d.a)()?200:window.innerHeight/2,a={threshold:t||0,root:i||null,rootMargin:l||`${n}px 10000px ${n}px 10000px`},o=Object(r.useRef)(null),{0:m,1:g}=Object(r.useState)({inView:!1,triggered:!1,observer:void 0});let c=void 0;return u&&(c=new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(g({inView:!0,triggered:!0,observer:t}),o.current&&t.unobserve(o.current))},a)),Object(r.useEffect)(()=>(c&&o.current&&!m.triggered&&c.observe(o.current),()=>{var e;return null===(e=c)||void 0===e?void 0:e.disconnect()})),Object(d.a)()?[!1,o]:u?[m.inView,o]:[!0,o]},h=(e,t)=>{o()(e,t,n.a)}},SVbq:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i("q1tI");function n(e,t){var i=(0,l.useRef)(e);return t(e,i.current)||(i.current=e),i.current}var r=function(e,t,i){(0,l.useEffect)(e,[n(t,i)])};t.default=r},hRMu:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return B}));var l=i("zyhx"),n=i("76ZC"),r=i.n(n),a=i("q1tI"),o=i.n(a),d=i("AsT+"),m=i("3E9/"),g=i("vt1O"),u=i("jTSh"),c=i("wlkJ"),h=i("4ISH"),s=i("vOnD"),p=i("o13o"),f=i("SAve"),y=i("nZ5Q"),b=i("CGvN"),w=i("XXEH");const I=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledWrapper",componentId:"tlult8-0"})(["position:relative;background-color:",";"," ",""],l.ColorEnum.grey10,l.mediaQuery.lg`
    height: 35rem;
    display: flex;
    flex-direction: row;
    background-color: ${l.ColorEnum.black};
  `,l.mediaQuery.xl`
    height: 40rem;
  `),C=(e,t,i)=>e?`url('${Object(w.a)(t,i)}')`:"none",_=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledBackgroundImage",componentId:"tlult8-1"})(["background-size:cover;background-repeat:no-repeat;background-position:50% 50%;"," position:absolute;width:100%;height:30rem;background-image:",";"," "," ",""],e=>e.dimmed?"opacity: 0.5;":null,e=>C(e.inView,(e=>e.image.mobile.length?e.image.mobile:e.image.desktop)(e),{width:800,quality:80}),l.mediaQuery.md`
    background-image: ${e=>C(e.inView,e.image.desktop,{width:1600,quality:80})};
  `,l.mediaQuery.lg`
    height: 100%;
  `,l.mediaQuery.xl`
    background-image: ${e=>C(e.inView,e.image.desktop,{width:2e3,quality:80})};
  `),v=Object(s.default)(e=>o.a.createElement(l.Title1,Object.assign({white:!0,as:"h2"},e))).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledTitle",componentId:"tlult8-2"})(["order:2;font-size:2.625rem;line-height:3rem;",""],l.mediaQuery.xl`
    font-size: 3.375rem;
    line-height: 3.5rem;
  `),E=Object(s.default)(l.Title5).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledSubTitle",componentId:"tlult8-3"})(["order:1;margin-bottom:1rem;"]),S=Object(s.default)(e=>o.a.createElement(l.Paragraph16,Object.assign({semibold:!0,white:!0},e))).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledSubParagraph",componentId:"tlult8-4"})(["margin-top:0.5rem;order:3;"]),O=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledTextWrapper",componentId:"tlult8-5"})(["margin-bottom:2rem;display:flex;flex:1;flex-direction:column;"," "," ",""],l.mediaQuery.md`
    margin-bottom: 4.5rem;
  `,l.mediaQuery.lg`
    margin-bottom 5.5rem;
  `,l.mediaQuery.xl`
    margin-bottom: 6.5rem;
  `),x=Object(s.default)(g.d).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledRow",componentId:"tlult8-6"})(["height:100%;"]),j=Object(s.default)(g.b).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledTextCol",componentId:"tlult8-7"})(["align-items:flex-end;display:flex;height:30rem;",""],l.mediaQuery.lg`
    height: 100%;
  `),H=Object(s.default)(g.b).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledPriceCol",componentId:"tlult8-8"})(["order:2;padding:1.5rem 0;",""],l.mediaQuery.lg`
    order: unset;
    padding-left: 15px;
    padding-right: 15px;
  `),k=Object(s.default)(l.Monospace16).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledCircleTitle",componentId:"tlult8-9"})(["text-transform:uppercase;"," ",""],e=>e.iconMode?"align-self: center;":null,l.mediaQuery.lg`
    order: 1;
    text-align: center;
  `),F=Object(s.default)(l.Paragraph16).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledCircleText",componentId:"tlult8-10"})([""," "," ",""],e=>e.iconMode?"grid-row: 2;":null,e=>e.iconMode?Object(s.css)(["grid-column:1 / 3;margin-top:0.5rem;",""],l.mediaQuery.sm`
            grid-column: 2 / 3;
            margin-top: 0;
          `):null,l.mediaQuery.lg`
    order: 3;
    padding-bottom: 1rem;
  `),W=Object(s.default)(y.a).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledLinkButton",componentId:"tlult8-11"})(["margin-top:1rem;order:5;margin-right:auto;"]),Q=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledAppStoreWrapper",componentId:"tlult8-12"})(["display:flex;order:5;flex-direction:column;",""],l.mediaQuery.sm`
    flex-direction: row;
  `),M=Object(s.default)(f.a).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledAppStoreLink",componentId:"tlult8-13"})(["margin-top:1rem;margin-right:1rem;"]),N=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledPriceWrapper",componentId:"tlult8-14"})(["margin-right:1.5rem;align-items:center;grid-column:1;grid-row:1;"," & > div{display:inline-block;}",";"],l.mediaQuery.md`
    grid-column: 1;
    grid-row: 1 / ${e=>e.cols};
  `,l.mediaQuery.lg`
    margin-right: 0;
    order: 2;
  `),L=Object(s.css)(["font-size:2.625rem;line-height:2.25rem;color:",";"," ",""],l.ColorEnum.green10,l.mediaQuery.md`
    font-size: 3.375rem;
    line-height: 3.75rem;
  `,l.mediaQuery.lg`
    font-size: 3.75rem;
    line-height: 4.275rem;
  `),A=Object(s.default)(l.Title5).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledPrice",componentId:"tlult8-15"})(["",""],L),P=Object(s.default)(l.Monospace16).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledPricingChar",componentId:"tlult8-16"})(["",""],L),T=Object(s.default)(l.Paragraph16).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledCircleLinkText",componentId:"tlult8-17"})([""," ",""],e=>e.iconMode?"grid-row: 3;":null,e=>e.iconMode?Object(s.css)(["grid-column:1 / 3;",""],l.mediaQuery.sm`
      grid-column: 2 / 3;
    `):null),R=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledIconWrapper",componentId:"tlult8-18"})(["width:3.5rem;height:3.5rem;margin-right:1.5rem;grid-column:1;grid-row:1 / 4;svg{width:3.5rem;height:3.5rem;path + path{fill:",";}}"," "," ",""],l.ColorEnum.green10,l.mediaQuery.xs`
    grid-row: 1;
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.5rem;

    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  `,l.mediaQuery.md`
    grid-column: 1;
    grid-row: 1 / ${e=>e.cols};
    width: 5.1875rem;
    height: 5.1875rem;

    svg {
      width: 5.1875rem;
      height: 5.1875rem;
    }
  `,l.mediaQuery.lg`
    margin-right: 0;
    margin-bottom: 0.5rem;
    width: 5.625rem;
    height: 5.625rem;

    svg {
      width: 5.625rem;
      height: 5.625rem;
    }
  `),$=s.default.div.withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledHighlightCircle",componentId:"tlult8-19"})(["background-color:",";border:0px solid transparent;border-radius:0;padding-left:","rem;padding-right:2rem;display:grid;grid-template-columns:",";grid-auto-rows:minmax(1rem,auto);text-align:center;& > div{display:flex;text-align:left;","}& > p{"," ","}&:hover,&:focus{","{text-decoration:underline;}","{path + path{fill:",";","}}}"," "," ",""],l.ColorEnum.grey10,e=>e.iconMode?1:2.5,e=>e.iconMode?"auto 1fr":"1fr",l.mediaQuery.lg`
      text-align: center;
    `,l.mediaQuery.md`
      margin-top: 0.25rem;
    `,l.mediaQuery.lg`
      margin-top: 0.5rem;
      order: 4;
    `,T,R,l.ColorEnum.green20,Object(p.b)(["fill"]),l.mediaQuery.sm`
    ${e=>e.iconMode?null:"padding-left: 3.5rem;"}
  `,l.mediaQuery.md`
    padding-right: 4.75rem;
    ${e=>e.iconMode?null:"padding-left: 2.5rem;"}
  `,l.mediaQuery.lg`
    display: flex;
    flex-direction: column;
    ${e=>!e.iconMode&&"justify-content: center;"}
    margin-top: 6.3125rem;
    padding: 0; 
    align-items: center;
    justify-content: center;
    width: 16rem;
    height: 16rem;

    && {
      border-radius: 50%;
    }

    & > div {
      max-width: 11rem;
    }

    & > ${k} {
      margin-bottom: 0.25rem;
    }
  `),V=Object(s.default)(e=>o.a.createElement($,Object.assign({as:f.a},e))).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledHighlightCircleLink",componentId:"tlult8-20"})([":hover,:focus{background-color:",";color:"," !important;text-decoration:unset !important;}"],l.ColorEnum.grey10,l.ColorEnum.white),q=Object(s.default)(b.a).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledStripes",componentId:"tlult8-21"})(["position:absolute;top:1.5rem;bottom:1.5rem;height:unset;width:1.5rem;"," "," ",";"],l.mediaQuery.sm`
    width: 2rem;
  `,l.mediaQuery.md`
    left: -1rem;
  `,l.mediaQuery.lg`
    display: none;
  `),z=Object(s.default)(u.ChevronRightIcon).withConfig({displayName:"ContentfulFullwidthImageWithInlineHighlightstyle__StyledChevronRight",componentId:"tlult8-22"})(["position:absolute;width:2rem;height:2rem;right:0.5rem;top:50%;transform:translateY(-50%);cursor:pointer;path + path{fill:",";}"," ",""],l.ColorEnum.green10,l.mediaQuery.md`
    right: 1rem;
  `,l.mediaQuery.lg`
    display: none;
  `),D=o.a.memo(e=>{const{node_locale:t,backgroundImage:i,backgroundImageMobile:n,dimmedBackground:a,title:m,subTitle:s,subParagraph:p,buttonLabel:f,buttonReference:y,circleTitle:b,circleText:w,circleLinkText:C,circleReference:L,price:D,textOnRightSide:B,icon:G,mobileApplicationStoreLinks:K,intl:U}=e,[X,Y]=Object(h.c)(),Z=Object(c.c)(y,U.locale),J=L?Object(c.c)(L,U.locale):null,ee=n&&n.file&&n.file.url?n.file.url:"",te=i&&i.file&&i.file.url?i.file.url:"",ie=e=>e.map((e,i)=>{var l;return o.a.createElement(M,{key:i,to:null!==(l=null==e?void 0:e.url)&&void 0!==l?l:"","data-testid":"ContentfulFullwidthImageWithInlineHighlight__app-store-link"},(e=>{var i,l;return(null==e||null===(i=e.url)||void 0===i?void 0:i.includes("apple"))?"en"===t?o.a.createElement(u.AppStoreEnIcon,{width:7.5,height:2.5,accessibilityLabel:U.formatMessage({id:"frontpage.accessibility.AppStoreLink"})}):"sv"===t?o.a.createElement(u.AppStoreSvIcon,{width:7.5,height:2.5,accessibilityLabel:U.formatMessage({id:"frontpage.accessibility.AppStoreLink"})}):o.a.createElement(u.AppStoreFiIcon,{width:8.9375,height:2.5,accessibilityLabel:U.formatMessage({id:"frontpage.accessibility.AppStoreLink"})}):(null==e||null===(l=e.url)||void 0===l?void 0:l.includes("google"))?"en"===t?o.a.createElement(u.GooglePlayEnIcon,{width:8.4375,height:2.5,accessibilityLabel:U.formatMessage({id:"frontpage.accessibility.PlayStoreLink"})}):"sv"===t?o.a.createElement(u.GooglePlaySvIcon,{width:8.4375,height:2.5,accessibilityLabel:U.formatMessage({id:"frontpage.accessibility.PlayStoreLink"})}):o.a.createElement(u.GooglePlayFiIcon,{width:8.4375,height:2.5,accessibilityLabel:U.formatMessage({id:"frontpage.accessibility.PlayStoreLink"})}):null})(e))}),le=()=>o.a.createElement(j,{col:12,lg:8,ref:Y},o.a.createElement(O,null,o.a.createElement(v,{"data-testid":"ContentfulFullwidthImageWithInlineHighlight__title"},m&&r()(m)),s&&o.a.createElement(E,{semibold:!0,white:!0,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__sub-title"},s),p&&o.a.createElement(S,{"data-testid":"ContentfulFullwidthImageWithInlineHighlight__sub-paragraph"},p),f&&Z&&o.a.createElement(W,{blue10Inverted:!0,to:Z,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__button"},f),o.a.createElement(Q,null,K&&ie(K)))),ne=()=>{var e,t;if(!D&&!G||!b||!w)return null;const i=null!==(e=null==D?void 0:D.replace(/(%|â‚¬)/,"").trim())&&void 0!==e?e:null,n=null!==(t=null==D?void 0:D.match(/(%|â‚¬)/))&&void 0!==t?t:null,r=i&&n,a=()=>o.a.createElement(o.a.Fragment,null,o.a.createElement(k,{white:!0,bold:!0,as:"div",iconMode:!i,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__circle-title"},b),i&&o.a.createElement(N,{cols:C?4:3,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__circle-price"},o.a.createElement(A,{as:"div"},i),n&&o.a.createElement(P,{bold:!0,as:"div"},n[0])),!r&&(()=>{var e;if(!G)return null;const t=null!==(e=null==G?void 0:G.icon)&&void 0!==e?e:null;return o.a.createElement(R,{cols:C?4:3,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__circle-icon"},o.a.createElement(d.a,{icon:t}))})(),o.a.createElement(F,{white:!0,semibold:!0,center:!0,as:"div",iconMode:!r,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__circle-text"},w),(Z||J)&&C&&o.a.createElement(T,{semibold:!0,blue25:!0,iconMode:!r,"data-testid":"ContentfulFullwidthImageWithInlineHighlight__circle-link-text"},C));return o.a.createElement(H,{col:12,lg:4},r&&o.a.createElement(q,{stripeColor:l.ColorEnum.green10,thickness:.5}),(Z||J)&&o.a.createElement(z,null),Z||J?o.a.createElement(V,{to:J||Z,iconMode:!r},a()):o.a.createElement($,{iconMode:!r},a()))};return o.a.createElement(I,null,o.a.createElement(_,{image:{mobile:ee,desktop:te},dimmed:a||!1,inView:X}),o.a.createElement(g.c,null,o.a.createElement(x,null,!B&&o.a.createElement(o.a.Fragment,null,le(),ne()),B&&o.a.createElement(o.a.Fragment,null,ne(),le()))))});var B=Object(m.a)(D)}}]);
//# sourceMappingURL=components-content-ContentfulFullwidthImageWithInlineHighlight-d62347371c2558346029.js.map
