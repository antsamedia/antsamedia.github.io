(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[68],{"1gSV":function(i,e,t){"use strict";t.d(e,"a",(function(){return E}));var I=t("zyhx"),l=t("76ZC"),n=t.n(l),a=t("q1tI"),g=t.n(a),c=t("dDsW"),r=t("vt1O"),o=t("t6yr"),s=t("kGgG"),d=t("uj2n"),u=t("6xi7"),b=t("mgPD"),m=t("wlkJ"),C=t("vOnD"),S=t("Es0H"),y=t("SAve");const j=Object(C.default)(I.Title4).withConfig({displayName:"ArticleItemstyle__StyledTitle",componentId:"dzyeil-0"})(["margin-bottom:1rem;margin-top:0;"," + &{margin-top:0.5rem;}"],u.b),A=Object(C.default)(r.b).withConfig({displayName:"ArticleItemstyle__StyledWrapper",componentId:"dzyeil-1"})(["position:relative;transition:background-color,0.5s;& + &{margin-top:2rem;","}","{margin-bottom:1.5rem;}:hover,:focus{","{filter:brightness(80%);}","{text-decoration:underline;}}"],I.mediaQuery.md`
      margin-top: 0;
    `,S.b,S.a,j),p=Object(C.default)(y.a).withConfig({displayName:"ArticleItemstyle__StyledLink",componentId:"dzyeil-2"})(["display:block;height:100%;overflow:hidden;left:0;position:absolute;text-indent:-9999px;top:0;width:100%;z-index:9;"]);var N=g.a.memo(({article:i})=>{var e;const{locale:t}=Object(c.a)();if(!i)return null;const{image:I,imageAlt:l,title:a}=i,r="ContentfulInspirationalArticle"===i.__typename?null===(e=i.pageSlug)||void 0===e?void 0:e.contentful_id:i.contentful_id,C="ContentfulInspirationalArticle"===i.__typename&&i.topics,S=r&&Object(m.a)(r,t);return g.a.createElement(A,{as:"article",md:4},g.a.createElement(s.a,{image:I,imageAlt:l}),C?g.a.createElement(d.a,{topics:C,limit:3}):"ContentfulNewsArticle"===i.__typename&&g.a.createElement(u.a,null,g.a.createElement(b.default,{id:o.b.FEATURED_ARTICLES_NEWS_CATEGORY})),g.a.createElement(j,{as:"h3",grey10:!0},a&&n()(a)),S&&g.a.createElement(p,{to:S},a&&n()(a)))});var E=g.a.memo(({title:i,articles:e,backgroundColor:t,hideOnLanguageVersions:l})=>{const{locale:a}=Object(c.a)();e.sort(i=>(null==i?void 0:i.pinned)?-1:1);const o=e.filter(i=>(null==i?void 0:i.node_locale)===a).slice(0,3);return"fi"!=a&&l?null:g.a.createElement("section",{style:{padding:"4.5rem 0",backgroundColor:null!=t?t:I.ColorEnum.white}},g.a.createElement(r.c,null,g.a.createElement(I.Title2,{grey10:!0,style:{marginBottom:"2rem"}},i&&n()(i)),g.a.createElement(r.d,null,o.map(i=>(null==i?void 0:i.contentful_id)?g.a.createElement(N,{key:i.contentful_id,article:i}):null))))})},"4ISH":function(i,e,t){"use strict";t.d(e,"d",(function(){return r})),t.d(e,"a",(function(){return o})),t.d(e,"c",(function(){return d})),t.d(e,"b",(function(){return u}));var I=t("Y+p1"),l=t.n(I),n=t("q1tI"),a=t("SVbq"),g=t.n(a),c=t("pjIm");const r=i=>{const e=Object(n.useRef)(i);return Object(n.useEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e},o=()=>{const{0:i,1:e}=Object(n.useState)(null);return[i,Object(n.useCallback)(i=>{null!==i&&e(i.getBoundingClientRect())},[])]},s=!Object(c.a)()&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,d=i=>{const{threshold:e,root:t,rootMargin:I}=i||{},l=Object(c.a)()?200:window.innerHeight/2,a={threshold:e||0,root:t||null,rootMargin:I||`${l}px 10000px ${l}px 10000px`},g=Object(n.useRef)(null),{0:r,1:o}=Object(n.useState)({inView:!1,triggered:!1,observer:void 0});let d=void 0;return s&&(d=new IntersectionObserver((i,e)=>{i[0].intersectionRatio>0&&(o({inView:!0,triggered:!0,observer:e}),g.current&&e.unobserve(g.current))},a)),Object(n.useEffect)(()=>(d&&g.current&&!r.triggered&&d.observe(g.current),()=>{var i;return null===(i=d)||void 0===i?void 0:i.disconnect()})),Object(c.a)()?[!1,g]:s?[r.inView,g]:[!0,g]},u=(i,e)=>{g()(i,e,l.a)}},"6xi7":function(i,e,t){"use strict";t.d(e,"b",(function(){return g})),t.d(e,"a",(function(){return c}));var I=t("zyhx"),l=t("q1tI"),n=t.n(l),a=t("vOnD");const g=a.default.div.withConfig({displayName:"ArticleTopicsstyle__StyledTopics",componentId:"gqu51e-0"})(["ul{list-style:none;padding-left:0;li{margin-right:1rem;padding-left:0;display:inline-block;}}"]),c=Object(a.default)(i=>n.a.createElement(I.Monospace16,Object.assign({bold:!0,as:"span"},i))).withConfig({displayName:"ArticleTopicsstyle__StyledTopic",componentId:"gqu51e-1"})(["color:",";display:inline-block;text-transform:uppercase;:hover,:focus{text-decoration:underline;}"],I.ColorEnum.blue10)},Es0H:function(i,e,t){"use strict";t.d(e,"b",(function(){return l})),t.d(e,"a",(function(){return n}));var I=t("vOnD");const l=I.default.div.withConfig({displayName:"ArticleImagestyle__StyledImageWrapper",componentId:"sc-1ymjdmp-0"})(["overflow:hidden;position:relative;width:100%;&::before{content:'';display:block;padding-bottom:calc(100% * 0.5625);width:100%;}img{height:100%;object-fit:cover;position:absolute;width:100%;}"]),n=I.default.figure.withConfig({displayName:"ArticleImagestyle__StyledImage",componentId:"sc-1ymjdmp-1"})(["height:100%;left:50%;margin:0;overflow:hidden;position:absolute;top:50%;transform:translate(-50%,-50%);transition:0.3s filter;z-index:0;width:100%;img{height:100%;object-fit:cover;position:absolute;width:100%;}",""],i=>i.isPlaceholder&&"\n      height: 200%;\n      left: 0;\n      width: 200%;\n  ")},Op2g:function(i,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return d}));var I=t("KQm4"),l=t("zyhx"),n=t("Wbzz"),a=t("wd/R"),g=t.n(a),c=t("q1tI"),r=t.n(c),o=t("1gSV");var s;!function(i){i.NewsArticles="NEWS_ARTICLES",i.InspirationalArticles="INSPIRATIONAL_ARTICLES"}(s||(s={}));var d=({title:i,category:e,backgroundColor:t,hideOnLanguageVersions:a})=>{if(!i||!e)return null;const c=Object(n.useStaticQuery)("690572719"),d=[],u=t?l.ColorEnum.grey40:l.ColorEnum.white,b=!!a;e.indexOf(s.NewsArticles)>-1&&d.push.apply(d,Object(I.a)(c.newsArticles.nodes)),e.indexOf(s.InspirationalArticles)>-1&&d.push.apply(d,Object(I.a)(c.inspirationalArticles.nodes));const m=d.sort((i,e)=>g()(e.publicationDate).valueOf()-g()(i.publicationDate).valueOf());return r.a.createElement(o.a,{title:i,articles:m,backgroundColor:u,hideOnLanguageVersions:b})}},R2zJ:function(i,e){i.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNjM0cHgiIGhlaWdodD0iMzI4cHgiIHZpZXdCb3g9IjAgMCA2MzQgMzI4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPHRpdGxlPnBsYWNlaG9sZGVyPC90aXRsZT4KICAgIDxkZWZzPgogICAgICAgIDxyZWN0IGlkPSJwYXRoLTEiIHg9IjAiIHk9IjAiIHdpZHRoPSI2MzQiIGhlaWdodD0iMzI4Ij48L3JlY3Q+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iSU1BR0UtVEVNUExBVEVTIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0icGxhY2Vob2xkZXIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iTWFzayI+PC9nPgogICAgICAgICAgICA8bGluZSB4MT0iMzAuNSIgeTE9Ii0zNiIgeDI9IjMwLjUiIHkyPSIzNjQiIGlkPSJMaW5lLUNvcHktNjAiIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIzIiBmaWxsPSIjRDhEOEQ4IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvbGluZT4KICAgICAgICAgICAgPGxpbmUgeDE9IjYzLjUiIHkxPSItMzYiIHgyPSI2My41IiB5Mj0iMzY0IiBpZD0iTGluZS1Db3B5LTYxIiBzdHJva2U9IiNEOEQ4RDgiIHN0cm9rZS13aWR0aD0iMyIgZmlsbD0iI0Q4RDhEOCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L2xpbmU+CiAgICAgICAgICAgIDxsaW5lIHgxPSI5Ni41IiB5MT0iLTM2IiB4Mj0iOTYuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02MiIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjQiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMTI5LjUiIHkxPSItMzYiIHgyPSIxMjkuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02MyIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMTYyLjUiIHkxPSItMzYiIHgyPSIxNjIuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02NCIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjYiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMTk1LjUiIHkxPSItMzYiIHgyPSIxOTUuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02NSIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjciIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMjI4LjUiIHkxPSItMzYiIHgyPSIyMjguNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02NiIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjgiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMjYxLjUiIHkxPSItMzYiIHgyPSIyNjEuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02NyIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjkiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMjk0LjUiIHkxPSItMzYiIHgyPSIyOTQuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS02OCIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjEwIiBmaWxsPSIjRDhEOEQ4IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvbGluZT4KICAgICAgICAgICAgPGxpbmUgeDE9IjMyNy41IiB5MT0iLTM2IiB4Mj0iMzI3LjUiIHkyPSIzNjQiIGlkPSJMaW5lLUNvcHktNjkiIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIxMSIgZmlsbD0iI0Q4RDhEOCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L2xpbmU+CiAgICAgICAgICAgIDxsaW5lIHgxPSIzNjAuNSIgeTE9Ii0zNiIgeDI9IjM2MC41IiB5Mj0iMzY0IiBpZD0iTGluZS1Db3B5LTcwIiBzdHJva2U9IiNEOEQ4RDgiIHN0cm9rZS13aWR0aD0iMTIiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iMzkzLjUiIHkxPSItMzYiIHgyPSIzOTMuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS03MSIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjEzIiBmaWxsPSIjRDhEOEQ4IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvbGluZT4KICAgICAgICAgICAgPGxpbmUgeDE9IjQyNi41IiB5MT0iLTM2IiB4Mj0iNDI2LjUiIHkyPSIzNjQiIGlkPSJMaW5lLUNvcHktNzIiIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIxNCIgZmlsbD0iI0Q4RDhEOCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L2xpbmU+CiAgICAgICAgICAgIDxsaW5lIHgxPSI0NTkuNSIgeTE9Ii0zNiIgeDI9IjQ1OS41IiB5Mj0iMzY0IiBpZD0iTGluZS1Db3B5LTczIiBzdHJva2U9IiNEOEQ4RDgiIHN0cm9rZS13aWR0aD0iMTUiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iNDkyLjUiIHkxPSItMzYiIHgyPSI0OTIuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS03NCIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjE2IiBmaWxsPSIjRDhEOEQ4IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvbGluZT4KICAgICAgICAgICAgPGxpbmUgeDE9IjUyNS41IiB5MT0iLTM2IiB4Mj0iNTI1LjUiIHkyPSIzNjQiIGlkPSJMaW5lLUNvcHktNzUiIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIxNyIgZmlsbD0iI0Q4RDhEOCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L2xpbmU+CiAgICAgICAgICAgIDxsaW5lIHgxPSI1NTguNSIgeTE9Ii0zNiIgeDI9IjU1OC41IiB5Mj0iMzY0IiBpZD0iTGluZS1Db3B5LTc2IiBzdHJva2U9IiNEOEQ4RDgiIHN0cm9rZS13aWR0aD0iMTgiIGZpbGw9IiNEOEQ4RDgiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIG1hc2s9InVybCgjbWFzay0yKSI+PC9saW5lPgogICAgICAgICAgICA8bGluZSB4MT0iNTkxLjUiIHkxPSItMzYiIHgyPSI1OTEuNSIgeTI9IjM2NCIgaWQ9IkxpbmUtQ29weS03NyIgc3Ryb2tlPSIjRDhEOEQ4IiBzdHJva2Utd2lkdGg9IjE5IiBmaWxsPSIjRDhEOEQ4IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvbGluZT4KICAgICAgICAgICAgPGxpbmUgeDE9IjYyNC41IiB5MT0iLTM2IiB4Mj0iNjI0LjUiIHkyPSIzNjQiIGlkPSJMaW5lLUNvcHktNzgiIHN0cm9rZT0iI0Q4RDhEOCIgc3Ryb2tlLXdpZHRoPSIyMCIgZmlsbD0iI0Q4RDhEOCIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgbWFzaz0idXJsKCNtYXNrLTIpIj48L2xpbmU+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},SVbq:function(i,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var I=t("q1tI");function l(i,e){var t=(0,I.useRef)(i);return e(i,t.current)||(t.current=i),t.current}var n=function(i,e,t){(0,I.useEffect)(i,[l(e,t)])};e.default=n},kGgG:function(i,e,t){"use strict";t.d(e,"a",(function(){return o}));var I=t("q1tI"),l=t.n(I),n=t("R2zJ"),a=t.n(n),g=t("XXEH"),c=t("4ISH"),r=t("Es0H");var o=({image:i,imageAlt:e})=>{var t,I;const[n,o]=Object(c.c)(),s=(null==i||null===(t=i.file)||void 0===t?void 0:t.url)&&Object(g.a)(i.file.url,{width:768,quality:50}),d=(null==i||null===(I=i.file)||void 0===I?void 0:I.url)&&Object(g.a)(i.file.url,{width:768,quality:50,format:"webp"});return l.a.createElement(r.b,{ref:o},l.a.createElement(r.a,{"aria-hidden":!s,isPlaceholder:!s},n&&l.a.createElement("picture",null,l.a.createElement("source",{srcSet:null!=d?d:a.a,type:"image/webp"}),l.a.createElement("source",{srcSet:null!=s?s:a.a,type:"image/jpeg"}),l.a.createElement("img",{src:null!=s?s:a.a,alt:e||""}))))}},uj2n:function(i,e,t){"use strict";t.d(e,"a",(function(){return c}));var I=t("q1tI"),l=t("dDsW"),n=t("SAve"),a=t("wlkJ"),g=t("6xi7");var c=({topics:i,renderLinks:e=!1,limit:t})=>{const{locale:c}=Object(l.a)(),r=t&&t<i.length?i.slice(0,t):i;return I.createElement(g.b,{as:e?"nav":"div"},I.createElement("ul",null,r.map(i=>{var t;if(!i.contentful_id)return null;const l=e&&(null===(t=i.pageSlug)||void 0===t?void 0:t.contentful_id)&&Object(a.a)(i.pageSlug.contentful_id,c),r=I.createElement(g.a,null,i.title);return I.createElement("li",{key:i.contentful_id},l?I.createElement(n.a,{to:l,children:r}):r)})))}}}]);
//# sourceMappingURL=components-content-ContentfulFeaturedArticles-93321b86ade1e2a00ef4.js.map