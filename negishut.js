/*! Negishut v1.0.0 | https://negishut.example | (c) All rights reserved */
(()=>{var O=`/* Negishut page-affecting rules. Every feature is a class on <html>. !important throughout \u2014 must beat host CSS. */

/* ---- High contrast: dark ---- */
html.ngsh-contrast-dark body { background-color: #000 !important; color: #fff !important; }
html.ngsh-contrast-dark body :is(div, section, article, aside, main, header, footer, nav, form, table, thead, tbody, tr, td, th, ul, ol, li, dl, dt, dd, figure, figcaption, blockquote, details, summary, fieldset) {
  background-color: #000 !important;
  background-image: none !important;
  color: #fff !important;
  border-color: #fff !important;
}
html.ngsh-contrast-dark body :is(p, span, h1, h2, h3, h4, h5, h6, label, strong, em, b, i, u, small, legend, caption, time, address, code, pre) {
  color: #fff !important;
  background-color: transparent !important;
}
html.ngsh-contrast-dark body a { color: #ffff00 !important; background-color: transparent !important; text-decoration: underline !important; }
html.ngsh-contrast-dark body :is(input, textarea, select, button) {
  background-color: #000 !important;
  color: #fff !important;
  border: 1px solid #fff !important;
}

/* ---- High contrast: light ---- */
html.ngsh-contrast-light body { background-color: #fff !important; color: #000 !important; }
html.ngsh-contrast-light body :is(div, section, article, aside, main, header, footer, nav, form, table, thead, tbody, tr, td, th, ul, ol, li, dl, dt, dd, figure, figcaption, blockquote, details, summary, fieldset) {
  background-color: #fff !important;
  background-image: none !important;
  color: #000 !important;
  border-color: #000 !important;
}
html.ngsh-contrast-light body :is(p, span, h1, h2, h3, h4, h5, h6, label, strong, em, b, i, u, small, legend, caption, time, address, code, pre) {
  color: #000 !important;
  background-color: transparent !important;
}
html.ngsh-contrast-light body a { color: #0000e0 !important; background-color: transparent !important; text-decoration: underline !important; }
html.ngsh-contrast-light body :is(input, textarea, select, button) {
  background-color: #fff !important;
  color: #000 !important;
  border: 1px solid #000 !important;
}

/* ---- Invert colors (media re-inverted back; widget re-inverted so its logo stays true) ---- */
html.ngsh-invert { filter: invert(1) hue-rotate(180deg) !important; }
html.ngsh-invert body :is(img, picture, video, iframe, canvas, embed, object, svg) { filter: invert(1) hue-rotate(180deg) !important; }
html.ngsh-invert #ngsh-root { filter: invert(1) hue-rotate(180deg) !important; }

/* ---- Grayscale ---- */
html.ngsh-gray { filter: grayscale(1) !important; }

/* ---- Readable font (icon fonts protected by :not guards) ---- */
html.ngsh-font body *:not(i):not([class*="icon"]):not([class*="fa-"]):not([class*="fas"]):not([class*="fab"]):not([class*="glyphicon"]):not([class*="material"]) {
  font-family: Arial, Helvetica, "Segoe UI", sans-serif !important;
}

/* ---- Highlight links ---- */
html.ngsh-links body a {
  text-decoration: underline !important;
  background-color: #ffff00 !important;
  color: #000 !important;
  outline: 2px solid #000 !important;
}

/* ---- Text spacing (WCAG 1.4.12 values) ---- */
html.ngsh-spacing body * {
  line-height: 1.5 !important;
  letter-spacing: 0.12em !important;
  word-spacing: 0.16em !important;
}
html.ngsh-spacing body p { margin-bottom: 2em !important; }

/* ---- Zoom steps ---- */
html.ngsh-zoom-1 body { zoom: 1.1 !important; }
html.ngsh-zoom-2 body { zoom: 1.25 !important; }
html.ngsh-zoom-3 body { zoom: 1.5 !important; }

/* ---- Big cursor (inline SVG data URI, no network) ---- */
html.ngsh-cursor,
html.ngsh-cursor body * {
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24'><path d='M5 2l14 12.5h-8.6L7.6 22z' fill='%23000' stroke='%23fff' stroke-width='1.6'/></svg>") 5 2, auto !important;
}

/* ---- Keyboard focus highlight ---- */
html.ngsh-kbfocus body :focus {
  outline: 3px solid #ffbf00 !important;
  outline-offset: 2px !important;
  box-shadow: 0 0 0 6px rgba(0, 0, 0, 0.75) !important;
}

/* ---- Stop animations / flashing (WCAG 2.2.2) ---- */
html.ngsh-noanim body *,
html.ngsh-noanim body *::before,
html.ngsh-noanim body *::after {
  animation: none !important;
  transition: none !important;
  scroll-behavior: auto !important;
}

/* ---- Injected page elements ---- */

/* Skip-to-content link: visually hidden until keyboard-focused */
a.ngsh-skip {
  position: fixed !important;
  top: -100px !important;
  right: 8px !important;
  z-index: 2147483646 !important;
  background: #1a56db !important;
  color: #fff !important;
  padding: 10px 18px !important;
  border-radius: 0 0 8px 8px !important;
  font: 16px Arial, sans-serif !important;
  text-decoration: none !important;
  transition: none !important;
}
a.ngsh-skip:focus {
  top: 0 !important;
  outline: 3px solid #ffbf00 !important;
}

/* Reading guide bar */
#ngsh-guide {
  position: fixed !important;
  left: 0 !important;
  width: 100% !important;
  height: 9px !important;
  background: rgba(255, 191, 0, 0.85) !important;
  border-top: 1px solid #000 !important;
  border-bottom: 1px solid #000 !important;
  pointer-events: none !important;
  z-index: 2147483645 !important;
}

/* Image alt-text badges */
.ngsh-alt-badge {
  position: absolute !important;
  z-index: 2147483644 !important;
  background: #000 !important;
  color: #fff !important;
  font: 13px/1.4 Arial, sans-serif !important;
  padding: 4px 8px !important;
  border-radius: 4px !important;
  max-width: 260px !important;
  pointer-events: none !important;
  direction: rtl !important;
}
.ngsh-alt-badge.ngsh-alt-missing { background: #b91c1c !important; }
`;var D=document.currentScript||document.querySelector('script[src*="negishut"]'),Z=window.NGSH_CONFIG||{};function v(t){return Z[t]!=null?String(Z[t]):D&&D.dataset&&D.dataset[t]!=null?D.dataset[t]:""}var I={siteId:v("siteId"),org:v("org"),coordinatorName:v("coordinatorName"),coordinatorEmail:v("coordinatorEmail"),coordinatorPhone:v("coordinatorPhone"),statementUrl:v("statementUrl"),statementDate:v("statementDate"),position:v("position")==="bottom-left"?"bottom-left":"bottom-right",lang:v("lang")};var j="ngsh:settings:v1";function Q(){try{return JSON.parse(localStorage.getItem(j))||{}}catch{return{}}}function W(t){try{Object.keys(t).length?localStorage.setItem(j,JSON.stringify(t)):localStorage.removeItem(j)}catch{}}var $=[0,1.1,1.2,1.3,1.4,1.5],tt={SCRIPT:1,STYLE:1,NOSCRIPT:1,IFRAME:1,TEMPLATE:1,VIDEO:1,AUDIO:1,CANVAS:1,SVG:1},_=new WeakMap,q=new Set,U=0,L=null,G=0;function et(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType===3&&e.nodeValue.trim())return!0;return!1}function nt(t){let e=_.get(t);if(!e){let n=parseFloat(getComputedStyle(t).fontSize);if(!n)return;e={inline:t.style.fontSize,px:n},_.set(t,e)}t.style.setProperty("font-size",(e.px*U).toFixed(2)+"px","important"),q.add(t)}function ot(t){if(!t||t.nodeType!==1||tt[t.tagName]||t.id==="ngsh-root")return;et(t)&&nt(t);let e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode(o){return tt[o.tagName]||o.id==="ngsh-root"?NodeFilter.FILTER_REJECT:et(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}),n;for(;n=e.nextNode();)nt(n)}function it(t){U=$[t]||$[1],ot(document.body),L||(L=new MutationObserver(()=>{clearTimeout(G),G=setTimeout(()=>ot(document.body),300)}),L.observe(document.body,{childList:!0,subtree:!0}))}function rt(){L&&(L.disconnect(),L=null),clearTimeout(G),q.forEach(t=>{let e=_.get(t);e&&(e.inline?t.style.fontSize=e.inline:t.style.removeProperty("font-size"))}),q=new Set,U=0}var f=null,H=0,at=0;function st(t){at=t.clientY,!H&&(H=requestAnimationFrame(()=>{H=0,f&&(f.style.top=at+14+"px")}))}function dt(){f||(f=document.createElement("div"),f.id="ngsh-guide",f.setAttribute("aria-hidden","true"),f.style.top="50%",document.body.appendChild(f),document.addEventListener("mousemove",st,{passive:!0}))}function lt(){document.removeEventListener("mousemove",st),H&&cancelAnimationFrame(H),H=0,f&&f.remove(),f=null}var r={widgetLabel:"\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",openMenu:"\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",closeMenu:"\u05E1\u05D2\u05D5\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",menuTitle:"\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",reset:"\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",statement:"\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",back:"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8",print:"\u05D4\u05D3\u05E4\u05E1\u05EA \u05D4\u05D4\u05E6\u05D4\u05E8\u05D4",level:"\u05E8\u05DE\u05D4",expiredTooltip:"\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D5 \u05E4\u05E2\u05D9\u05DC",expiredTitle:"\u05D4\u05DE\u05E0\u05D5\u05D9 \u05D0\u05D9\u05E0\u05D5 \u05E4\u05E2\u05D9\u05DC",expiredBody:"\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05DE\u05D5\u05E9\u05D4\u05D4 \u05DB\u05E8\u05D2\u05E2. \u05D1\u05E2\u05DC \u05D4\u05D0\u05EA\u05E8 \u05DE\u05EA\u05D1\u05E7\u05E9 \u05DC\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05DE\u05E0\u05D5\u05D9 \u05DB\u05D3\u05D9 \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05DE\u05D7\u05D3\u05E9 \u05D0\u05EA \u05DB\u05DC\u05D9 \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA.",activeBrand:"Negishut \xB7 \u05DB\u05DC\u05D9 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC",expiredBrand:"Negishut \xB7 \u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D5\u05E9\u05D4\u05D4",missingAlt:"\u05D7\u05E1\u05E8 \u05EA\u05D9\u05D0\u05D5\u05E8 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4",skipToContent:"\u05D3\u05DC\u05D2 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9",features:{fontSize:"\u05D4\u05D2\u05D3\u05DC\u05EA \u05D8\u05E7\u05E1\u05D8",zoom:"\u05D6\u05D5\u05DD \u05EA\u05E6\u05D5\u05D2\u05D4",contrastDark:"\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05DB\u05D4\u05D4",contrastLight:"\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D1\u05D4\u05D9\u05E8\u05D4",invert:"\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD",gray:"\u05D2\u05D5\u05D5\u05E0\u05D9 \u05D0\u05E4\u05D5\u05E8",font:"\u05E4\u05D5\u05E0\u05D8 \u05E7\u05E8\u05D9\u05D0",links:"\u05D4\u05D3\u05D2\u05E9\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",spacing:"\u05E8\u05D9\u05D5\u05D5\u05D7 \u05D8\u05E7\u05E1\u05D8",cursor:"\u05E1\u05DE\u05DF \u05D2\u05D3\u05D5\u05DC",kbfocus:"\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05E7\u05DC\u05D3\u05EA",noanim:"\u05E2\u05E6\u05D9\u05E8\u05EA \u05D4\u05D1\u05D4\u05D5\u05D1\u05D9\u05DD",guide:"\u05E1\u05E8\u05D2\u05DC \u05E7\u05E8\u05D9\u05D0\u05D4",alts:"\u05EA\u05D9\u05D0\u05D5\u05E8\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA"}};function ct(t){let e=(t.org||"\u05D1\u05E2\u05DC\u05D9 \u05D4\u05D0\u05EA\u05E8").trim()||"\u05D1\u05E2\u05DC\u05D9 \u05D4\u05D0\u05EA\u05E8",n=[];n.push({ps:[e+" \u05E8\u05D5\u05D0\u05D9\u05DD \u05D7\u05E9\u05D9\u05D1\u05D5\u05EA \u05E8\u05D1\u05D4 \u05D1\u05DE\u05EA\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05D5\u05E0\u05D9, \u05DE\u05DB\u05D1\u05D3, \u05E0\u05D2\u05D9\u05E9 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05DC\u05DB\u05DC\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D5\u05D4\u05D2\u05D5\u05DC\u05E9\u05D9\u05DD, \u05D5\u05D1\u05DB\u05DC\u05DC \u05D6\u05D4 \u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA, \u05DE\u05EA\u05D5\u05DA \u05D0\u05DE\u05D5\u05E0\u05D4 \u05DB\u05D9 \u05DC\u05DB\u05DC \u05D0\u05D3\u05DD \u05DE\u05D2\u05D9\u05E2\u05D4 \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05D7\u05D9\u05D5\u05EA \u05D1\u05E9\u05D5\u05D5\u05D9\u05D5\u05DF, \u05D1\u05DB\u05D1\u05D5\u05D3, \u05D1\u05E0\u05D5\u05D7\u05D5\u05EA \u05D5\u05D1\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA.",'\u05D4\u05E6\u05D4\u05E8\u05D4 \u05D6\u05D5 \u05E0\u05DB\u05EA\u05D1\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D7\u05D5\u05E7 \u05E9\u05D5\u05D5\u05D9\u05D5\u05DF \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA, \u05D4\u05EA\u05E9\u05E0"\u05D7-1998, \u05D5\u05DC\u05EA\u05E7\u05E0\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05D5\u05DF \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA (\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA), \u05D4\u05EA\u05E9\u05E2"\u05D2-2013.']}),n.push({h:"\u05D4\u05E0\u05D2\u05E9\u05EA \u05D4\u05D0\u05EA\u05E8",ps:['\u05D0\u05E0\u05D5 \u05E4\u05D5\u05E2\u05DC\u05D9\u05DD \u05DC\u05D4\u05E0\u05D2\u05E9\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E7\u05DF \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05EA"\u05D9 5568 "\u05E7\u05D5\u05D5\u05D9\u05DD \u05DE\u05E0\u05D7\u05D9\u05DD \u05DC\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05EA\u05DB\u05E0\u05D9\u05DD \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8" \u05D1\u05E8\u05DE\u05EA AA, \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1 \u05E2\u05DC \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA WCAG 2.0 \u05E9\u05DC \u05D0\u05E8\u05D2\u05D5\u05DF W3C \u05D4\u05D1\u05D9\u05E0\u05DC\u05D0\u05D5\u05DE\u05D9.',"\u05D1\u05D0\u05EA\u05E8 \u05DE\u05D5\u05D8\u05DE\u05E2 \u05E8\u05DB\u05D9\u05D1 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8, \u05D1\u05D9\u05DF \u05D4\u05D9\u05EA\u05E8: \u05D4\u05D2\u05D3\u05DC\u05EA \u05D8\u05E7\u05E1\u05D8 \u05D5\u05D6\u05D5\u05DD \u05EA\u05E6\u05D5\u05D2\u05D4, \u05D4\u05EA\u05D0\u05DE\u05EA \u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D5\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD, \u05D2\u05D5\u05E4\u05DF \u05E7\u05E8\u05D9\u05D0, \u05D4\u05D3\u05D2\u05E9\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD, \u05E8\u05D9\u05D5\u05D5\u05D7 \u05D8\u05E7\u05E1\u05D8, \u05E1\u05DE\u05DF \u05E2\u05DB\u05D1\u05E8 \u05DE\u05D5\u05D2\u05D3\u05DC, \u05D4\u05D1\u05DC\u05D8\u05EA \u05DE\u05D9\u05E7\u05D5\u05D3 \u05DE\u05E7\u05DC\u05D3\u05EA, \u05E2\u05E6\u05D9\u05E8\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05D4\u05D1\u05D4\u05D5\u05D1\u05D9\u05DD, \u05E1\u05E8\u05D2\u05DC \u05E7\u05E8\u05D9\u05D0\u05D4, \u05D4\u05E6\u05D2\u05EA \u05EA\u05D9\u05D0\u05D5\u05E8\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D5\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D3\u05D9\u05DC\u05D5\u05D2 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9. \u05D4\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5\u05EA \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D2\u05D5\u05DC\u05E9."]}),n.push({h:"\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u05D9\u05D3\u05D5\u05E2\u05D5\u05EA",ps:["\u05D0\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD \u05DB\u05DC \u05DE\u05D0\u05DE\u05E5 \u05DC\u05D4\u05E0\u05D2\u05D9\u05E9 \u05D0\u05EA \u05DB\u05DC\u05DC \u05D4\u05D3\u05E4\u05D9\u05DD \u05D5\u05D4\u05EA\u05DB\u05E0\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8. \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05D9\u05D9\u05DE\u05E6\u05D0\u05D5 \u05D7\u05DC\u05E7\u05D9\u05DD \u05D0\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E9\u05D8\u05E8\u05DD \u05D4\u05D5\u05E0\u05D2\u05E9\u05D5 \u05D1\u05DE\u05DC\u05D5\u05D0\u05DD, \u05DC\u05E8\u05D1\u05D5\u05EA \u05EA\u05DB\u05E0\u05D9\u05DD \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E6\u05D3\u05D3\u05D9\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05DD. \u05D0\u05DD \u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05D1\u05E2\u05D9\u05D9\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u2013 \u05E0\u05E9\u05DE\u05D7 \u05E9\u05EA\u05E2\u05D3\u05DB\u05E0\u05D5 \u05D0\u05D5\u05EA\u05E0\u05D5 \u05D5\u05E0\u05E4\u05E2\u05DC \u05DC\u05EA\u05D9\u05E7\u05D5\u05E0\u05D4 \u05D1\u05D4\u05E7\u05D3\u05DD \u05D4\u05D0\u05E4\u05E9\u05E8\u05D9."]});let o=[];t.coordinatorName&&o.push("\u05E9\u05DD: "+t.coordinatorName),t.coordinatorPhone&&o.push("\u05D8\u05DC\u05E4\u05D5\u05DF: "+t.coordinatorPhone),t.coordinatorEmail&&o.push('\u05D3\u05D5\u05D0"\u05DC: '+t.coordinatorEmail),o.length&&n.push({h:"\u05E8\u05DB\u05D6/\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",ps:["\u05DC\u05DB\u05DC \u05E9\u05D0\u05DC\u05D4, \u05D1\u05E7\u05E9\u05D4 \u05D0\u05D5 \u05D3\u05D9\u05D5\u05D5\u05D7 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC \u05E8\u05DB\u05D6/\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5:"],list:o}),n.push({h:"\u05DE\u05E9\u05D5\u05D1 \u05D5\u05E4\u05E0\u05D9\u05D5\u05EA \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",ps:["\u05D0\u05DD \u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05D5 \u05D1\u05E7\u05D1\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA, \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05EA\u05E4\u05E0\u05D5 \u05D0\u05DC\u05D9\u05E0\u05D5"+(o.length?" \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC\u05E2\u05D9\u05DC":"")+". \u05D0\u05E0\u05D0 \u05E6\u05E8\u05E4\u05D5 \u05EA\u05D9\u05D0\u05D5\u05E8 \u05E9\u05DC \u05D4\u05D1\u05E2\u05D9\u05D4, \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D3\u05E3 \u05E9\u05D1\u05D5 \u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05D4, \u05D5\u05E1\u05D5\u05D2 \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D5\u05D4\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D4\u05DE\u05E1\u05D9\u05D9\u05E2\u05EA \u05E9\u05D1\u05D4\u05DD \u05D4\u05E9\u05EA\u05DE\u05E9\u05EA\u05DD \u2013 \u05DB\u05DA \u05E0\u05D5\u05DB\u05DC \u05DC\u05D8\u05E4\u05DC \u05D1\u05E4\u05E0\u05D9\u05D9\u05D4 \u05D1\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA."]});let a=t.statementDate?"\u05D4\u05D4\u05E6\u05D4\u05E8\u05D4 \u05E2\u05D5\u05D3\u05DB\u05E0\u05D4 \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA: "+t.statementDate:"",i=[];return a&&i.push(a),i.push("\u05D4\u05E6\u05D4\u05E8\u05D4 \u05D6\u05D5 \u05D4\u05D5\u05E4\u05E7\u05D4 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E8\u05DB\u05D9\u05D1 \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA Negishut. \u05D4\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8\u05D9\u05EA \u05E2\u05DC \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D5\u05EA\u05DB\u05E0\u05D9\u05D5 \u05D7\u05DC\u05D4 \u05E2\u05DC \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D0\u05EA\u05E8."),n.push({ps:i}),n}var K=[],F=null;function mt(){K.forEach(t=>t.remove()),K=[]}function pt(){mt(),document.querySelectorAll("img").forEach(t=>{let e=t.getBoundingClientRect();if(e.width<40||e.height<40)return;let n=(t.getAttribute("alt")||"").trim(),o=document.createElement("div");o.className="ngsh-alt-badge"+(n?"":" ngsh-alt-missing"),o.setAttribute("aria-hidden","true"),o.textContent=n||r.missingAlt,o.style.top=e.top+window.scrollY+4+"px",o.style.left=e.left+window.scrollX+4+"px",document.body.appendChild(o),K.push(o)})}function ut(){pt();let t=0;F=()=>{clearTimeout(t),t=setTimeout(pt,400)},window.addEventListener("resize",F)}function ht(){F&&window.removeEventListener("resize",F),F=null,mt()}function ft(){document.querySelectorAll("video, audio").forEach(t=>{try{t.paused||t.pause()}catch{}})}var N=document.documentElement;function y(t){return{apply:()=>N.classList.add("ngsh-"+t),remove:()=>N.classList.remove("ngsh-"+t)}}function Bt(t,e){let n=()=>{for(let o=1;o<=e;o++)N.classList.remove("ngsh-"+t+"-"+o)};return{apply:o=>{n(),o>0&&N.classList.add("ngsh-"+t+"-"+o)},remove:n}}var B=[{id:"fontSize",kind:"steps",max:5,icon:"fontSize",apply:it,remove:rt},{id:"zoom",kind:"steps",max:3,icon:"zoom",...Bt("zoom",3)},{id:"contrastDark",kind:"toggle",group:"colors",icon:"moon",...y("contrast-dark")},{id:"contrastLight",kind:"toggle",group:"colors",icon:"sun",...y("contrast-light")},{id:"invert",kind:"toggle",group:"colors",icon:"invert",...y("invert")},{id:"gray",kind:"toggle",group:"colors",icon:"gray",...y("gray")},{id:"font",kind:"toggle",icon:"font",...y("font")},{id:"links",kind:"toggle",icon:"link",...y("links")},{id:"spacing",kind:"toggle",icon:"spacing",...y("spacing")},{id:"cursor",kind:"toggle",icon:"cursor",...y("cursor")},{id:"kbfocus",kind:"toggle",icon:"keyboard",...y("kbfocus")},{id:"noanim",kind:"toggle",icon:"pause",apply(){N.classList.add("ngsh-noanim"),ft()},remove(){N.classList.remove("ngsh-noanim")}},{id:"guide",kind:"toggle",icon:"ruler",apply:dt,remove:lt},{id:"alts",kind:"toggle",icon:"image",apply:ut,remove:ht}],c={};function gt(){c=Q(),B.forEach(t=>{let e=c[t.id];if(e)try{t.apply(e===!0?void 0:Number(e))}catch{delete c[t.id]}})}function bt(t){return c[t]||0}function xt(t){if(t.kind==="steps"){let n=((Number(c[t.id])||0)+1)%(t.max+1);n===0?(t.remove(),delete c[t.id]):(t.apply(n),c[t.id]=n)}else c[t.id]?(t.remove(),delete c[t.id]):(t.group&&B.forEach(e=>{e!==t&&e.group===t.group&&c[e.id]&&(e.remove(),delete c[e.id])}),t.apply(),c[t.id]=!0);W(c)}function vt(){B.forEach(t=>{c[t.id]&&t.remove()}),c={},W(c)}function yt(){if(document.querySelector("a.ngsh-skip"))return;let t=document.querySelector('main, [role="main"]')||document.getElementById("main")||document.getElementById("content")||document.getElementById("primary")||document.querySelector("h1");if(!t)return;t.id||(t.id="ngsh-main"),t.hasAttribute("tabindex")||t.setAttribute("tabindex","-1");let e=document.createElement("a");e.className="ngsh-skip",e.href="#"+t.id,e.textContent=r.skipToContent,e.addEventListener("click",()=>{try{t.focus()}catch{}}),document.body.insertBefore(e,document.body.firstChild)}var Y=`:host {
  all: initial;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "Segoe UI", Helvetica, sans-serif;
}
.wrap {
  direction: rtl;
}
.btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1a56db;
  color: #fff;
  border: 2px solid #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.15s ease;
}
.btn:hover {
  background: #1544ad;
  transform: scale(1.06);
}
.btn:focus-visible {
  outline: 3px solid #ffbf00;
  outline-offset: 2px;
}
.wrap.expired .btn {
  background: #6b7280;
}
.wrap.expired .btn svg {
  opacity: 0.65;
}

.panel {
  position: absolute;
  bottom: 68px;
  width: 340px;
  max-width: calc(100vw - 24px);
  max-height: min(600px, calc(100vh - 110px));
  overflow-y: auto;
  background: #fff;
  color: #111;
  border-radius: 12px;
  border: 1px solid #d1d5db;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}
.pos-right .panel {
  right: 0;
}
.pos-left .panel {
  left: 0;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 12px 16px;
  background: #1a56db;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
}
.header h2 {
  font-size: 17px;
  font-weight: 700;
}
.hbtns {
  display: flex;
  gap: 4px;
}
.iconbtn {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 5px;
  min-width: 34px;
  min-height: 34px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.iconbtn:hover {
  background: rgba(255, 255, 255, 0.18);
}
.iconbtn:focus-visible {
  outline: 3px solid #ffbf00;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  padding: 12px;
}
.tile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 6px 10px;
  min-height: 84px;
  background: #f3f4f6;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13.5px;
  color: #111;
  text-align: center;
  line-height: 1.25;
}
.tile:hover {
  border-color: #1a56db;
}
.tile:focus-visible {
  outline: 3px solid #ffbf00;
  outline-offset: 1px;
}
.tile.on {
  background: #1a56db;
  border-color: #12388f;
  color: #fff;
}
.steps {
  display: flex;
  gap: 4px;
  height: 6px;
  margin-top: 2px;
}
.steps span {
  width: 12px;
  height: 6px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.15);
}
.steps span.f {
  background: #1a56db;
}
.tile.on .steps span {
  background: rgba(255, 255, 255, 0.35);
}
.tile.on .steps span.f {
  background: #fff;
}

.footer {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 4px 12px 10px;
}
.wide {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  background: #f9fafb;
  color: #111;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
}
.wide:hover {
  border-color: #1a56db;
}
.wide:focus-visible {
  outline: 3px solid #ffbf00;
}
.brand {
  text-align: center;
  font-size: 11px;
  color: #6b7280;
  padding: 2px 0 10px;
}
.wrap.expired .brand {
  color: #b91c1c;
  font-weight: 700;
}

.statement {
  padding: 16px;
  font-size: 14px;
  line-height: 1.65;
}
.statement h3 {
  font-size: 15px;
  margin: 14px 0 4px;
  color: #12388f;
}
.statement p {
  margin: 6px 0;
}
.statement ul {
  margin: 6px 18px 6px 0;
}
.statement .wide {
  margin-top: 14px;
}

.expired-box {
  padding: 22px 18px;
  font-size: 14px;
  line-height: 1.65;
}
.expired-box h3 {
  color: #b91c1c;
  font-size: 16px;
  margin-bottom: 8px;
}

@media (max-width: 400px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 6px;
  }
  .panel {
    width: calc(100vw - 24px);
  }
}
`;var kt="http://www.w3.org/2000/svg",Et={person:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",doc:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",print:"M19 8H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3zm-3 11H8v-5h8v5zm3-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM18 3H6v4h12V3z",reset:"M17.65 6.35A7.95 7.95 0 0 0 12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-1.76-4.24L13 11h7V4l-2.35 2.35z",fontSize:"M9 4v3h5v12h3V7h5V4H9zM3 12h3v7h3v-7h3V9H3v3z",zoom:"M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5 2.39 3.61h-4.78L12 2zm0 20-2.39-3.61h4.78L12 22zM2 12l3.61-2.39v4.78L2 12zm20 0-3.61 2.39V9.61L22 12z",invert:"M17.66 7.93 12 2.27 6.34 7.93a8 8 0 1 0 11.32 0zM12 19.59c-1.6 0-3.11-.62-4.24-1.76A5.95 5.95 0 0 1 6 13.59c0-1.6.62-3.11 1.76-4.24L12 5.1v14.49z",gray:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18V4a8 8 0 0 1 0 16z",font:"M5 4v3h5.5v12h3V7H19V4H5z",link:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 0-10z",spacing:"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z",cursor:"M6 2l13 11.5h-7.8L8.6 21z",keyboard:"M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM8 9h2v2H8V9zm0 3h2v2H8v-2zM5 9h2v2H5V9zm0 3h2v2H5v-2zm11 5H8v-2h8v2zm3-3h-2v-2h2v2zm0-3h-2V9h2v2zm-5-2h2v2h-2V9zm0 3h2v2h-2v-2z",pause:"M6 19h4V5H6v14zm8-14v14h4V5h-4z",ruler:"M2 16h20v5H2v-5zm3 1v2h1v-2H5zm4 0v2h1v-2H9zm4 0v2h1v-2h-1zm4 0v2h1v-2h-1zM4 3h7v10H4z",image:"M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"};function x(t,e){let n=document.createElementNS(kt,"svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("width",e||24),n.setAttribute("height",e||24),n.setAttribute("fill","currentColor"),n.setAttribute("aria-hidden","true"),n.setAttribute("focusable","false");let o=document.createElementNS(kt,"path");return o.setAttribute("d",Et[t]||Et.doc),n.appendChild(o),n}function zt(t,e){let n=e.createDocumentFragment();return ct(t).forEach(o=>{if(o.h){let a=e.createElement("h3");a.textContent=o.h,n.appendChild(a)}if((o.ps||[]).forEach(a=>{let i=e.createElement("p");i.textContent=a,n.appendChild(i)}),o.list){let a=e.createElement("ul");o.list.forEach(i=>{let s=e.createElement("li");s.textContent=i,a.appendChild(s)}),n.appendChild(a)}}),n}function Dt(t){let e=document.createElement("iframe");e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;width:0;height:0;border:0;visibility:hidden;",document.body.appendChild(e);let n=e.contentDocument;n.open(),n.write('<!doctype html><html dir="rtl" lang="he"><head><meta charset="utf-8"><title>\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA</title></head><body></body></html>'),n.close();let o=n.createElement("style");o.textContent="body{font-family:Arial,sans-serif;line-height:1.7;padding:28px;color:#000}h1{font-size:22px;margin-bottom:12px}h3{font-size:16px;margin:16px 0 4px}p{margin:6px 0}ul{margin:6px 24px 6px 0}",n.head.appendChild(o);let a=n.createElement("h1");a.textContent=r.statement,n.body.appendChild(a),n.body.appendChild(zt(t,n)),e.contentWindow.focus(),e.contentWindow.print(),setTimeout(()=>e.remove(),3e3)}function Ct(t){let e=document.createElement("div");e.className="statement",e.appendChild(zt(t,document));let n=document.createElement("button");n.type="button",n.className="wide",n.appendChild(x("print",18));let o=document.createElement("span");return o.textContent=r.print,n.appendChild(o),n.addEventListener("click",()=>Dt(t)),e.appendChild(n),e}function wt(t,e){let n=document.createElement("div");n.className="panel",n.setAttribute("role","dialog"),n.setAttribute("aria-modal","true"),n.setAttribute("aria-label",r.menuTitle),n.hidden=!0;let o=document.createElement("div");o.className="header";let a=document.createElement("h2");a.textContent=r.menuTitle;let i=document.createElement("div");i.className="hbtns";let s=document.createElement("button");s.type="button",s.className="iconbtn",s.setAttribute("aria-label",r.back),s.appendChild(x("back",20)),s.hidden=!0;let p=document.createElement("button");p.type="button",p.className="iconbtn",p.setAttribute("aria-label",r.closeMenu),p.appendChild(x("close",20)),p.addEventListener("click",e),i.appendChild(s),i.appendChild(p),o.appendChild(a),o.appendChild(i),n.appendChild(o);let g=document.createElement("div"),M=document.createElement("div");M.className="grid";let w=[];B.forEach(l=>{let u=document.createElement("button");u.type="button",u.className="tile",l.kind==="toggle"&&u.setAttribute("role","switch"),u.appendChild(x(l.icon,24));let J=document.createElement("span");J.textContent=r.features[l.id],u.appendChild(J);let A=null;if(l.kind==="steps"){A=document.createElement("span"),A.className="steps",A.setAttribute("aria-hidden","true");for(let E=0;E<l.max;E++)A.appendChild(document.createElement("span"));u.appendChild(A)}let X=()=>{let E=bt(l.id);if(l.kind==="toggle")u.setAttribute("aria-checked",E?"true":"false"),u.classList.toggle("on",!!E);else{let R=Number(E)||0;u.classList.toggle("on",R>0),u.setAttribute("aria-label",r.features[l.id]+", "+r.level+" "+R+" \u05DE\u05EA\u05D5\u05DA "+l.max),Array.prototype.forEach.call(A.children,(Nt,Mt)=>Nt.classList.toggle("f",Mt<R))}};u.addEventListener("click",()=>{xt(l),w.forEach(E=>E())}),w.push(X),X(),M.appendChild(u)}),g.appendChild(M);let z=document.createElement("div");z.className="footer";let h;t.statementUrl?(h=document.createElement("a"),h.href=t.statementUrl,h.target="_blank",h.rel="noopener"):(h=document.createElement("button"),h.type="button"),h.className="wide",h.appendChild(x("doc",18));let C=document.createElement("span");C.textContent=r.statement,h.appendChild(C),z.appendChild(h);let k=document.createElement("button");k.type="button",k.className="wide",k.appendChild(x("reset",18));let d=document.createElement("span");d.textContent=r.reset,k.appendChild(d),k.addEventListener("click",()=>{vt(),w.forEach(l=>l())}),z.appendChild(k),g.appendChild(z),n.appendChild(g);let m=null,b=document.createElement("div");b.className="expired-box";let T=document.createElement("h3");T.textContent=r.expiredTitle;let S=document.createElement("p");S.textContent=r.expiredBody,b.appendChild(T),b.appendChild(S),b.hidden=!0,n.appendChild(b);let V=document.createElement("div");V.className="brand",V.textContent=r.activeBrand,n.appendChild(V);function P(l){g.hidden=l!=="menu",m&&(m.hidden=l!=="statement"),b.hidden=l!=="expired",s.hidden=l!=="statement"}t.statementUrl||h.addEventListener("click",()=>{m||(m=Ct(t),m.hidden=!0,n.insertBefore(m,b)),P("statement"),s.focus()}),s.addEventListener("click",()=>{P("menu"),p.focus()});function Lt(l){l==="expired"?(P("expired"),V.textContent=r.expiredBrand):(P("menu"),V.textContent=r.activeBrand,w.forEach(u=>u()))}function Ht(){p.focus()}return{el:n,refresh:Lt,focusFirst:Ht}}function St(t){let e=document.createElement("div");e.id="ngsh-root";let n=t.position==="bottom-left"?"left":"right";e.style.cssText="position:fixed;bottom:16px;"+n+":16px;z-index:2147483646;";let o=e.attachShadow({mode:"open"});try{let d=new CSSStyleSheet;d.replaceSync(Y),o.adoptedStyleSheets=[d]}catch{let m=document.createElement("style");m.textContent=Y,o.appendChild(m)}let a=document.createElement("div");a.className="wrap pos-"+n,a.setAttribute("dir","rtl"),a.setAttribute("lang","he");let i=document.createElement("button");i.type="button",i.className="btn",i.title=r.widgetLabel,i.setAttribute("aria-label",r.openMenu),i.setAttribute("aria-haspopup","dialog"),i.setAttribute("aria-expanded","false"),i.appendChild(x("person",32)),a.appendChild(i),o.appendChild(a);let s=null,p=!1,g="active";function M(){return s.el.querySelectorAll("button:not([hidden]), a[href]")}function w(d){if(!p)return;if(d.key==="Escape"){d.stopPropagation(),C();return}if(d.key!=="Tab")return;let m=M();if(!m.length)return;let b=m[0],T=m[m.length-1],S=o.activeElement;d.shiftKey&&(S===b||!S)?(d.preventDefault(),T.focus()):!d.shiftKey&&S===T&&(d.preventDefault(),b.focus())}function z(d){p&&d.composedPath&&!d.composedPath().includes(e)&&C()}function h(){s||(s=wt(t,C),a.appendChild(s.el),s.el.addEventListener("keydown",w)),s.refresh(g),s.el.hidden=!1,p=!0,i.setAttribute("aria-expanded","true"),i.setAttribute("aria-label",r.closeMenu),s.focusFirst(),document.addEventListener("click",z,!0)}function C(){s&&(s.el.hidden=!0,p=!1,i.setAttribute("aria-expanded","false"),i.setAttribute("aria-label",r.openMenu),document.removeEventListener("click",z,!0),i.focus())}i.addEventListener("click",()=>p?C():h());function k(d){g=d==="expired"?"expired":"active",a.classList.toggle("expired",g==="expired"),i.title=g==="expired"?r.expiredTooltip:r.widgetLabel,p&&s.refresh(g)}return{host:e,setLicense:k}}function At(t,e){e("active")}(function(){if(window.__ngshLoaded)return;window.__ngshLoaded=!0;function t(){try{let n=new CSSStyleSheet;n.replaceSync(O),document.adoptedStyleSheets=[...document.adoptedStyleSheets,n]}catch{let o=document.createElement("style");o.setAttribute("data-ngsh",""),o.textContent=O,(document.head||document.documentElement).appendChild(o)}}function e(){t(),I.lang&&!document.documentElement.getAttribute("lang")&&document.documentElement.setAttribute("lang",I.lang),yt(),gt();let n=St(I);document.body.appendChild(n.host),At(I,n.setLicense)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",e):e()})();})();
