/*! Negishut v1.5.0 | (c) All rights reserved */
(()=>{var K=`/* Negishut page-affecting rules. Every feature is a class on <html>. !important throughout \u2014 must beat host CSS. */

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
`;var T=document.currentScript||document.querySelector('script[src*="negishut"]'),at=window.NGSH_CONFIG||{};function b(t){return at[t]!=null?String(at[t]):T&&T.dataset&&T.dataset[t]!=null?T.dataset[t]:""}var k={scriptSrc:T&&T.src||"",siteId:b("siteId"),org:b("org"),coordinatorName:b("coordinatorName"),coordinatorEmail:b("coordinatorEmail"),coordinatorPhone:b("coordinatorPhone"),statementUrl:b("statementUrl"),statementDate:b("statementDate"),position:["bottom-right","bottom-left","top-right","top-left","middle-right","middle-left"].indexOf(b("position"))>=0?b("position"):"bottom-right",size:["small","medium","large"].indexOf(b("size"))>=0?b("size"):"medium",lang:b("lang")};var Y="ngsh:settings:v1";function st(){try{return JSON.parse(localStorage.getItem(Y))||{}}catch{return{}}}function J(t){try{Object.keys(t).length?localStorage.setItem(Y,JSON.stringify(t)):localStorage.removeItem(Y)}catch{}}var lt=[0,1.1,1.2,1.3,1.4,1.5],dt={SCRIPT:1,STYLE:1,NOSCRIPT:1,IFRAME:1,TEMPLATE:1,VIDEO:1,AUDIO:1,CANVAS:1,SVG:1},X=new WeakMap,Z=new Set,Q=0,I=null,$=0;function ct(t){for(let e=t.firstChild;e;e=e.nextSibling)if(e.nodeType===3&&e.nodeValue.trim())return!0;return!1}function pt(t){let e=X.get(t);if(!e){let n=parseFloat(getComputedStyle(t).fontSize);if(!n)return;e={inline:t.style.fontSize,px:n},X.set(t,e)}t.style.setProperty("font-size",(e.px*Q).toFixed(2)+"px","important"),Z.add(t)}function mt(t){if(!t||t.nodeType!==1||dt[t.tagName]||t.id==="ngsh-root")return;ct(t)&&pt(t);let e=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode(o){return dt[o.tagName]||o.id==="ngsh-root"?NodeFilter.FILTER_REJECT:ct(o)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}}),n;for(;n=e.nextNode();)pt(n)}function ht(t){Q=lt[t]||lt[1],mt(document.body),I||(I=new MutationObserver(()=>{clearTimeout($),$=setTimeout(()=>mt(document.body),300)}),I.observe(document.body,{childList:!0,subtree:!0}))}function ut(){I&&(I.disconnect(),I=null),clearTimeout($),Z.forEach(t=>{let e=X.get(t);e&&(e.inline?t.style.fontSize=e.inline:t.style.removeProperty("font-size"))}),Z=new Set,Q=0}var v=null,V=0,ft=0;function gt(t){ft=t.clientY,!V&&(V=requestAnimationFrame(()=>{V=0,v&&(v.style.top=ft+14+"px")}))}function bt(){v||(v=document.createElement("div"),v.id="ngsh-guide",v.setAttribute("aria-hidden","true"),v.style.top="50%",document.body.appendChild(v),document.addEventListener("mousemove",gt,{passive:!0}))}function xt(){document.removeEventListener("mousemove",gt),V&&cancelAnimationFrame(V),V=0,v&&v.remove(),v=null}var i={widgetLabel:"\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",openMenu:"\u05E4\u05EA\u05D7 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",closeMenu:"\u05E1\u05D2\u05D5\u05E8 \u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",menuTitle:"\u05EA\u05E4\u05E8\u05D9\u05D8 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",reset:"\u05D0\u05D9\u05E4\u05D5\u05E1 \u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",statement:"\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",back:"\u05D7\u05D6\u05E8\u05D4 \u05DC\u05EA\u05E4\u05E8\u05D9\u05D8",print:"\u05D4\u05D3\u05E4\u05E1\u05EA \u05D4\u05D4\u05E6\u05D4\u05E8\u05D4",level:"\u05E8\u05DE\u05D4",expiredTooltip:"\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D5 \u05E4\u05E2\u05D9\u05DC",expiredTitle:"\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D0\u05D9\u05E0\u05D5 \u05E4\u05E2\u05D9\u05DC",expiredBody:"\u05E9\u05D9\u05E8\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D1\u05D0\u05EA\u05E8 \u05D6\u05D4 \u05D0\u05D9\u05E0\u05D5 \u05E4\u05E2\u05D9\u05DC \u05DB\u05E8\u05D2\u05E2. \u05D1\u05E2\u05DC \u05D4\u05D0\u05EA\u05E8 \u05DE\u05D5\u05D6\u05DE\u05DF \u05DC\u05D4\u05E4\u05E2\u05D9\u05DC \u05D0\u05D5 \u05DC\u05D7\u05D3\u05E9 \u05D0\u05EA \u05D4\u05DE\u05E0\u05D5\u05D9:",expiredLinkLabel:"negishoot.com",expiredLinkUrl:"https://negishoot.com",recheck:"\u05D1\u05D3\u05D9\u05E7\u05EA \u05DE\u05E0\u05D5\u05D9",rechecking:"\u05D1\u05D5\u05D3\u05E7 \u05D0\u05EA \u05E1\u05D8\u05D8\u05D5\u05E1 \u05D4\u05DE\u05E0\u05D5\u05D9...",recheckStillExpired:"\u05D4\u05DE\u05E0\u05D5\u05D9 \u05E2\u05D3\u05D9\u05D9\u05DF \u05D0\u05D9\u05E0\u05D5 \u05E4\u05E2\u05D9\u05DC. \u05D0\u05DD \u05E9\u05D9\u05DC\u05DE\u05EA\u05DD \u05D6\u05D4 \u05E2\u05EA\u05D4 \u2014 \u05D4\u05DE\u05EA\u05D9\u05E0\u05D5 \u05DB\u05D3\u05E7\u05D4 \u05D5\u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1.",recheckError:"\u05D4\u05D1\u05D3\u05D9\u05E7\u05D4 \u05E0\u05DB\u05E9\u05DC\u05D4. \u05D1\u05D3\u05E7\u05D5 \u05D0\u05EA \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8 \u05D5\u05E0\u05E1\u05D5 \u05E9\u05D5\u05D1.",activeBrand:"\u05E9\u05D9\u05E8\u05D5\u05EA \u05E4\u05E2\u05D9\u05DC",expiredBrand:"\u05D4\u05E9\u05D9\u05E8\u05D5\u05EA \u05DE\u05D5\u05E9\u05D4\u05D4",brandName:"\u05EA\u05D5\u05E1\u05E3 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05D0\u05EA\u05E8 Negishoot",brandUrl:"https://negishoot.com/",missingAlt:"\u05D7\u05E1\u05E8 \u05EA\u05D9\u05D0\u05D5\u05E8 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4",skipToContent:"\u05D3\u05DC\u05D2 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9",features:{fontSize:"\u05D4\u05D2\u05D3\u05DC\u05EA \u05D8\u05E7\u05E1\u05D8",zoom:"\u05D6\u05D5\u05DD \u05EA\u05E6\u05D5\u05D2\u05D4",contrastDark:"\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05DB\u05D4\u05D4",contrastLight:"\u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D1\u05D4\u05D9\u05E8\u05D4",invert:"\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD",gray:"\u05D2\u05D5\u05D5\u05E0\u05D9 \u05D0\u05E4\u05D5\u05E8",font:"\u05E4\u05D5\u05E0\u05D8 \u05E7\u05E8\u05D9\u05D0",links:"\u05D4\u05D3\u05D2\u05E9\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",spacing:"\u05E8\u05D9\u05D5\u05D5\u05D7 \u05D8\u05E7\u05E1\u05D8",cursor:"\u05E1\u05DE\u05DF \u05D2\u05D3\u05D5\u05DC",kbfocus:"\u05E0\u05D9\u05D5\u05D5\u05D8 \u05DE\u05E7\u05DC\u05D3\u05EA",noanim:"\u05E2\u05E6\u05D9\u05E8\u05EA \u05D4\u05D1\u05D4\u05D5\u05D1\u05D9\u05DD",guide:"\u05E1\u05E8\u05D2\u05DC \u05E7\u05E8\u05D9\u05D0\u05D4",alts:"\u05EA\u05D9\u05D0\u05D5\u05E8\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA"}};function Ct(t){let e=(t.org||"\u05D1\u05E2\u05DC\u05D9 \u05D4\u05D0\u05EA\u05E8").trim()||"\u05D1\u05E2\u05DC\u05D9 \u05D4\u05D0\u05EA\u05E8",n=[];n.push({ps:[e+" \u05E8\u05D5\u05D0\u05D9\u05DD \u05D7\u05E9\u05D9\u05D1\u05D5\u05EA \u05E8\u05D1\u05D4 \u05D1\u05DE\u05EA\u05DF \u05E9\u05D9\u05E8\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05D5\u05E0\u05D9, \u05DE\u05DB\u05D1\u05D3, \u05E0\u05D2\u05D9\u05E9 \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05DC\u05DB\u05DC\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05D5\u05D4\u05D2\u05D5\u05DC\u05E9\u05D9\u05DD, \u05D5\u05D1\u05DB\u05DC\u05DC \u05D6\u05D4 \u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA, \u05DE\u05EA\u05D5\u05DA \u05D0\u05DE\u05D5\u05E0\u05D4 \u05DB\u05D9 \u05DC\u05DB\u05DC \u05D0\u05D3\u05DD \u05DE\u05D2\u05D9\u05E2\u05D4 \u05D4\u05D6\u05DB\u05D5\u05EA \u05DC\u05D7\u05D9\u05D5\u05EA \u05D1\u05E9\u05D5\u05D5\u05D9\u05D5\u05DF, \u05D1\u05DB\u05D1\u05D5\u05D3, \u05D1\u05E0\u05D5\u05D7\u05D5\u05EA \u05D5\u05D1\u05E2\u05E6\u05DE\u05D0\u05D5\u05EA.",'\u05D4\u05E6\u05D4\u05E8\u05D4 \u05D6\u05D5 \u05E0\u05DB\u05EA\u05D1\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D7\u05D5\u05E7 \u05E9\u05D5\u05D5\u05D9\u05D5\u05DF \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA, \u05D4\u05EA\u05E9\u05E0"\u05D7-1998, \u05D5\u05DC\u05EA\u05E7\u05E0\u05D5\u05EA \u05E9\u05D5\u05D5\u05D9\u05D5\u05DF \u05D6\u05DB\u05D5\u05D9\u05D5\u05EA \u05DC\u05D0\u05E0\u05E9\u05D9\u05DD \u05E2\u05DD \u05DE\u05D5\u05D2\u05D1\u05DC\u05D5\u05EA (\u05D4\u05EA\u05D0\u05DE\u05D5\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05E9\u05D9\u05E8\u05D5\u05EA), \u05D4\u05EA\u05E9\u05E2"\u05D2-2013.']}),n.push({h:"\u05D4\u05E0\u05D2\u05E9\u05EA \u05D4\u05D0\u05EA\u05E8",ps:['\u05D0\u05E0\u05D5 \u05E4\u05D5\u05E2\u05DC\u05D9\u05DD \u05DC\u05D4\u05E0\u05D2\u05E9\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05EA\u05E7\u05DF \u05D4\u05D9\u05E9\u05E8\u05D0\u05DC\u05D9 \u05EA"\u05D9 5568 "\u05E7\u05D5\u05D5\u05D9\u05DD \u05DE\u05E0\u05D7\u05D9\u05DD \u05DC\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05EA\u05DB\u05E0\u05D9\u05DD \u05D1\u05D0\u05D9\u05E0\u05D8\u05E8\u05E0\u05D8" \u05D1\u05E8\u05DE\u05EA AA, \u05D4\u05DE\u05D1\u05D5\u05E1\u05E1 \u05E2\u05DC \u05D4\u05E0\u05D7\u05D9\u05D5\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA WCAG 2.0 \u05E9\u05DC \u05D0\u05E8\u05D2\u05D5\u05DF W3C \u05D4\u05D1\u05D9\u05E0\u05DC\u05D0\u05D5\u05DE\u05D9.',"\u05D1\u05D0\u05EA\u05E8 \u05DE\u05D5\u05D8\u05DE\u05E2 \u05E8\u05DB\u05D9\u05D1 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05DE\u05D0\u05E4\u05E9\u05E8, \u05D1\u05D9\u05DF \u05D4\u05D9\u05EA\u05E8: \u05D4\u05D2\u05D3\u05DC\u05EA \u05D8\u05E7\u05E1\u05D8 \u05D5\u05D6\u05D5\u05DD \u05EA\u05E6\u05D5\u05D2\u05D4, \u05D4\u05EA\u05D0\u05DE\u05EA \u05E0\u05D9\u05D2\u05D5\u05D3\u05D9\u05D5\u05EA \u05D5\u05D4\u05D9\u05E4\u05D5\u05DA \u05E6\u05D1\u05E2\u05D9\u05DD, \u05D2\u05D5\u05E4\u05DF \u05E7\u05E8\u05D9\u05D0, \u05D4\u05D3\u05D2\u05E9\u05EA \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD, \u05E8\u05D9\u05D5\u05D5\u05D7 \u05D8\u05E7\u05E1\u05D8, \u05E1\u05DE\u05DF \u05E2\u05DB\u05D1\u05E8 \u05DE\u05D5\u05D2\u05D3\u05DC, \u05D4\u05D1\u05DC\u05D8\u05EA \u05DE\u05D9\u05E7\u05D5\u05D3 \u05DE\u05E7\u05DC\u05D3\u05EA, \u05E2\u05E6\u05D9\u05E8\u05EA \u05D0\u05E0\u05D9\u05DE\u05E6\u05D9\u05D5\u05EA \u05D5\u05D4\u05D1\u05D4\u05D5\u05D1\u05D9\u05DD, \u05E1\u05E8\u05D2\u05DC \u05E7\u05E8\u05D9\u05D0\u05D4, \u05D4\u05E6\u05D2\u05EA \u05EA\u05D9\u05D0\u05D5\u05E8\u05D9 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA \u05D5\u05E7\u05D9\u05E9\u05D5\u05E8 \u05D3\u05D9\u05DC\u05D5\u05D2 \u05DC\u05EA\u05D5\u05DB\u05DF \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9. \u05D4\u05D4\u05D2\u05D3\u05E8\u05D5\u05EA \u05E0\u05E9\u05DE\u05E8\u05D5\u05EA \u05D1\u05D3\u05E4\u05D3\u05E4\u05DF \u05D4\u05D2\u05D5\u05DC\u05E9."]}),n.push({h:"\u05DE\u05D2\u05D1\u05DC\u05D5\u05EA \u05D9\u05D3\u05D5\u05E2\u05D5\u05EA",ps:["\u05D0\u05E0\u05D5 \u05E2\u05D5\u05E9\u05D9\u05DD \u05DB\u05DC \u05DE\u05D0\u05DE\u05E5 \u05DC\u05D4\u05E0\u05D2\u05D9\u05E9 \u05D0\u05EA \u05DB\u05DC\u05DC \u05D4\u05D3\u05E4\u05D9\u05DD \u05D5\u05D4\u05EA\u05DB\u05E0\u05D9\u05DD \u05D1\u05D0\u05EA\u05E8. \u05E2\u05DD \u05D6\u05D0\u05EA, \u05D9\u05D9\u05EA\u05DB\u05DF \u05E9\u05D9\u05D9\u05DE\u05E6\u05D0\u05D5 \u05D7\u05DC\u05E7\u05D9\u05DD \u05D0\u05D5 \u05EA\u05DB\u05E0\u05D9\u05DD \u05E9\u05D8\u05E8\u05DD \u05D4\u05D5\u05E0\u05D2\u05E9\u05D5 \u05D1\u05DE\u05DC\u05D5\u05D0\u05DD, \u05DC\u05E8\u05D1\u05D5\u05EA \u05EA\u05DB\u05E0\u05D9\u05DD \u05D4\u05DE\u05E1\u05D5\u05E4\u05E7\u05D9\u05DD \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E6\u05D3\u05D3\u05D9\u05DD \u05E9\u05DC\u05D9\u05E9\u05D9\u05D9\u05DD. \u05D0\u05DD \u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05D1\u05E2\u05D9\u05D9\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u2013 \u05E0\u05E9\u05DE\u05D7 \u05E9\u05EA\u05E2\u05D3\u05DB\u05E0\u05D5 \u05D0\u05D5\u05EA\u05E0\u05D5 \u05D5\u05E0\u05E4\u05E2\u05DC \u05DC\u05EA\u05D9\u05E7\u05D5\u05E0\u05D4 \u05D1\u05D4\u05E7\u05D3\u05DD \u05D4\u05D0\u05E4\u05E9\u05E8\u05D9."]});let o=[];t.coordinatorName&&o.push("\u05E9\u05DD: "+t.coordinatorName),t.coordinatorPhone&&o.push("\u05D8\u05DC\u05E4\u05D5\u05DF: "+t.coordinatorPhone),t.coordinatorEmail&&o.push('\u05D3\u05D5\u05D0"\u05DC: '+t.coordinatorEmail),o.length&&n.push({h:"\u05E8\u05DB\u05D6/\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",ps:["\u05DC\u05DB\u05DC \u05E9\u05D0\u05DC\u05D4, \u05D1\u05E7\u05E9\u05D4 \u05D0\u05D5 \u05D3\u05D9\u05D5\u05D5\u05D7 \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05E0\u05D9\u05EA\u05DF \u05DC\u05E4\u05E0\u05D5\u05EA \u05D0\u05DC \u05E8\u05DB\u05D6/\u05EA \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05E9\u05DC\u05E0\u05D5:"],list:o}),n.push({h:"\u05DE\u05E9\u05D5\u05D1 \u05D5\u05E4\u05E0\u05D9\u05D5\u05EA \u05D1\u05E0\u05D5\u05E9\u05D0 \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA",ps:["\u05D0\u05DD \u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05E7\u05D5\u05E9\u05D9 \u05D1\u05D2\u05DC\u05D9\u05E9\u05D4 \u05D1\u05D0\u05EA\u05E8 \u05D0\u05D5 \u05D1\u05E7\u05D1\u05DC\u05EA \u05E9\u05D9\u05E8\u05D5\u05EA, \u05E0\u05E9\u05DE\u05D7 \u05D0\u05DD \u05EA\u05E4\u05E0\u05D5 \u05D0\u05DC\u05D9\u05E0\u05D5"+(o.length?" \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E4\u05E8\u05D8\u05D9 \u05D4\u05E7\u05E9\u05E8 \u05E9\u05DC\u05E2\u05D9\u05DC":"")+". \u05D0\u05E0\u05D0 \u05E6\u05E8\u05E4\u05D5 \u05EA\u05D9\u05D0\u05D5\u05E8 \u05E9\u05DC \u05D4\u05D1\u05E2\u05D9\u05D4, \u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D3\u05E3 \u05E9\u05D1\u05D5 \u05E0\u05EA\u05E7\u05DC\u05EA\u05DD \u05D1\u05D4, \u05D5\u05E1\u05D5\u05D2 \u05D4\u05D3\u05E4\u05D3\u05E4\u05DF \u05D5\u05D4\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D4\u05DE\u05E1\u05D9\u05D9\u05E2\u05EA \u05E9\u05D1\u05D4\u05DD \u05D4\u05E9\u05EA\u05DE\u05E9\u05EA\u05DD \u2013 \u05DB\u05DA \u05E0\u05D5\u05DB\u05DC \u05DC\u05D8\u05E4\u05DC \u05D1\u05E4\u05E0\u05D9\u05D9\u05D4 \u05D1\u05D9\u05E2\u05D9\u05DC\u05D5\u05EA."]});let r=t.statementDate?"\u05D4\u05D4\u05E6\u05D4\u05E8\u05D4 \u05E2\u05D5\u05D3\u05DB\u05E0\u05D4 \u05DC\u05D0\u05D7\u05E8\u05D5\u05E0\u05D4 \u05D1\u05EA\u05D0\u05E8\u05D9\u05DA: "+t.statementDate:"",c=[];return r&&c.push(r),c.push("\u05D4\u05E6\u05D4\u05E8\u05D4 \u05D6\u05D5 \u05D4\u05D5\u05E4\u05E7\u05D4 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05EA\u05D5\u05E1\u05E3 \u05D4\u05E0\u05D2\u05D9\u05E9\u05D5\u05EA Negishoot (negishoot.com). \u05D4\u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05D4\u05DE\u05E9\u05E4\u05D8\u05D9\u05EA \u05E2\u05DC \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA \u05D4\u05D0\u05EA\u05E8 \u05D5\u05EA\u05DB\u05E0\u05D9\u05D5 \u05D7\u05DC\u05D4 \u05E2\u05DC \u05D1\u05E2\u05DC\u05D9 \u05D4\u05D0\u05EA\u05E8."),n.push({ps:c}),n}var tt=[],O=null;function yt(){tt.forEach(t=>t.remove()),tt=[]}function vt(){yt(),document.querySelectorAll("img").forEach(t=>{let e=t.getBoundingClientRect();if(e.width<40||e.height<40)return;let n=(t.getAttribute("alt")||"").trim(),o=document.createElement("div");o.className="ngsh-alt-badge"+(n?"":" ngsh-alt-missing"),o.setAttribute("aria-hidden","true"),o.textContent=n||i.missingAlt,o.style.top=e.top+window.scrollY+4+"px",o.style.left=e.left+window.scrollX+4+"px",document.body.appendChild(o),tt.push(o)})}function kt(){vt();let t=0;O=()=>{clearTimeout(t),t=setTimeout(vt,400)},window.addEventListener("resize",O)}function Et(){O&&window.removeEventListener("resize",O),O=null,yt()}function zt(){document.querySelectorAll("video, audio").forEach(t=>{try{t.paused||t.pause()}catch{}})}var B=document.documentElement;function L(t){return{apply:()=>B.classList.add("ngsh-"+t),remove:()=>B.classList.remove("ngsh-"+t)}}function Yt(t,e){let n=()=>{for(let o=1;o<=e;o++)B.classList.remove("ngsh-"+t+"-"+o)};return{apply:o=>{n(),o>0&&B.classList.add("ngsh-"+t+"-"+o)},remove:n}}var R=[{id:"fontSize",kind:"steps",max:5,icon:"fontSize",apply:ht,remove:ut},{id:"zoom",kind:"steps",max:3,icon:"zoom",...Yt("zoom",3)},{id:"contrastDark",kind:"toggle",group:"colors",icon:"moon",...L("contrast-dark")},{id:"contrastLight",kind:"toggle",group:"colors",icon:"sun",...L("contrast-light")},{id:"invert",kind:"toggle",group:"colors",icon:"invert",...L("invert")},{id:"gray",kind:"toggle",group:"colors",icon:"gray",...L("gray")},{id:"font",kind:"toggle",icon:"font",...L("font")},{id:"links",kind:"toggle",icon:"link",...L("links")},{id:"spacing",kind:"toggle",icon:"spacing",...L("spacing")},{id:"cursor",kind:"toggle",icon:"cursor",...L("cursor")},{id:"kbfocus",kind:"toggle",icon:"keyboard",...L("kbfocus")},{id:"noanim",kind:"toggle",icon:"pause",apply(){B.classList.add("ngsh-noanim"),zt()},remove(){B.classList.remove("ngsh-noanim")}},{id:"guide",kind:"toggle",icon:"ruler",apply:bt,remove:xt},{id:"alts",kind:"toggle",icon:"image",apply:kt,remove:Et}],u={};function Lt(){u=st(),R.forEach(t=>{let e=u[t.id];if(e)try{t.apply(e===!0?void 0:Number(e))}catch{delete u[t.id]}})}function wt(t){return u[t]||0}function St(t){if(t.kind==="steps"){let n=((Number(u[t.id])||0)+1)%(t.max+1);n===0?(t.remove(),delete u[t.id]):(t.apply(n),u[t.id]=n)}else u[t.id]?(t.remove(),delete u[t.id]):(t.group&&R.forEach(e=>{e!==t&&e.group===t.group&&u[e.id]&&(e.remove(),delete u[e.id])}),t.apply(),u[t.id]=!0);J(u)}function At(){R.forEach(t=>{u[t.id]&&t.remove()}),u={},J(u)}function Mt(){if(document.querySelector("a.ngsh-skip"))return;let t=document.querySelector('main, [role="main"]')||document.getElementById("main")||document.getElementById("content")||document.getElementById("primary")||document.querySelector("h1");if(!t)return;t.id||(t.id="ngsh-main"),t.hasAttribute("tabindex")||t.setAttribute("tabindex","-1");let e=document.createElement("a");e.className="ngsh-skip",e.href="#"+t.id,e.textContent=i.skipToContent,e.addEventListener("click",()=>{try{t.focus()}catch{}}),document.body.insertBefore(e,document.body.firstChild)}var et=`:host {
  all: initial;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Arial, "Segoe UI", Helvetica, sans-serif;
}
[hidden] {
  display: none !important;
}
.wrap {
  direction: rtl;
}
.btn {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  color: #1a56db;
  border: 2px solid #1a56db;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.15s ease;
}
.btn:hover {
  background: #eef3ff;
  transform: scale(1.06);
}
.btn:focus-visible {
  outline: 3px solid #ffbf00;
  outline-offset: 2px;
}
.wrap.expired .btn {
  background: #e5e7eb;
  border-color: #6b7280;
}
.wrap.expired .btn svg {
  filter: grayscale(1);
  opacity: 0.7;
}
.btn svg {
  width: 40px;
  height: 40px;
}
.size-small .btn {
  width: 44px;
  height: 44px;
}
.size-small .btn svg {
  width: 30px;
  height: 30px;
}
.size-large .btn {
  width: 72px;
  height: 72px;
}
.size-large .btn svg {
  width: 54px;
  height: 54px;
}

.panel {
  position: absolute;
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
.vpos-bottom .panel {
  bottom: calc(100% + 12px);
}
.vpos-top .panel {
  top: calc(100% + 12px);
}
.vpos-middle .panel {
  top: 50%;
  transform: translateY(-50%);
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
.brand a {
  color: #1a56db;
  font-weight: 700;
  text-decoration: none;
}
.brand a:hover {
  text-decoration: underline;
}
.brand a:focus-visible {
  outline: 2px solid #ffbf00;
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
`;var Nt=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2048 2048">\r
<path d="M 1300.56 342.488 C 1401.81 329.517 1481.31 344.153 1565.53 407.39 C 1640.18 463.445 1687.82 543.876 1700.06 636.508 C 1705.16 675.07 1702.28 740.596 1702.25 782.477 C 1702.83 869.964 1702.81 957.454 1702.17 1044.94 L 1702.69 1292.73 C 1702.59 1330.12 1704.32 1392.08 1698.23 1426.51 C 1688.22 1482.44 1664.56 1535.04 1629.36 1579.64 C 1577.44 1646.03 1493.51 1692.96 1409.9 1701.8 C 1377.42 1705.24 1338.59 1704.2 1305.34 1704.24 L 1152.46 1704.43 C 1029.25 1703.83 903.373 1706.1 780.323 1703.89 C 762.949 1704.59 744.08 1703.59 726.508 1704.13 C 698.394 1705.05 671.491 1705.36 643.479 1702.08 C 497.047 1684.89 376.343 1571.8 350.449 1426.72 C 341.694 1377.67 344.835 1328.57 344.877 1278.95 L 344.596 1078.99 L 344.733 794.689 C 344.762 740.426 342.114 669.749 348.403 617.255 C 361.183 554.175 385.787 501.005 429.449 453.209 C 473.77 403.935 531.656 368.847 595.843 352.346 C 640.416 341.069 675.788 342.878 721.158 342.928 L 814.739 342.901 L 1127.36 342.855 L 1236.06 342.901 C 1256.68 342.894 1280.13 343.408 1300.56 342.488 z" fill="rgb(253,253,253)" transform="translate(0,0)"></path>\r
<path d="M 348.403 617.255 C 361.183 554.175 385.787 501.005 429.449 453.209 C 473.77 403.935 531.656 368.847 595.843 352.346 C 640.416 341.069 675.788 342.878 721.158 342.928 L 814.739 342.901 L 1127.36 342.855 L 1236.06 342.901 C 1256.68 342.894 1280.13 343.408 1300.56 342.488 C 1308.4 345.877 1320.37 346.28 1329 347.764 C 1343.39 350.237 1357.8 352.609 1371.8 356.989 C 1467.84 389.319 1546.97 455.095 1589.96 547.615 C 1597.33 563.48 1610.55 601.391 1613.53 617.958 L 428.042 617.025 L 348.403 617.255 z" fill="rgb(20,39,128)" transform="translate(0,0)"></path>\r
<path d="M 1257.69 466.479 C 1276.35 462.609 1294.62 474.616 1298.46 493.285 C 1302.31 511.953 1290.28 530.202 1271.61 534.024 C 1252.97 537.84 1234.76 525.837 1230.92 507.201 C 1227.08 488.566 1239.06 470.342 1257.69 466.479 z" fill="rgb(253,253,253)" transform="translate(0,0)"></path>\r
<path d="M 1492.06 465.762 C 1511.04 463.231 1528.44 476.676 1530.79 495.686 C 1533.13 514.696 1519.52 531.967 1500.49 534.126 C 1481.72 536.255 1464.74 522.868 1462.42 504.12 C 1460.11 485.371 1473.33 468.258 1492.06 465.762 z" fill="rgb(253,253,253)" transform="translate(0,0)"></path>\r
<path d="M 1379.42 465.67 C 1398.34 464.882 1414.34 479.551 1415.19 498.475 C 1416.05 517.398 1401.43 533.446 1382.51 534.362 C 1363.5 535.283 1347.36 520.582 1346.5 501.568 C 1345.65 482.554 1360.4 466.462 1379.42 465.67 z" fill="rgb(253,253,253)" transform="translate(0,0)"></path>\r
<path d="M 1300.56 342.488 C 1401.81 329.517 1481.31 344.153 1565.53 407.39 C 1640.18 463.445 1687.82 543.876 1700.06 636.508 C 1705.16 675.07 1702.28 740.596 1702.25 782.477 C 1702.83 869.964 1702.81 957.454 1702.17 1044.94 L 1702.69 1292.73 C 1702.59 1330.12 1704.32 1392.08 1698.23 1426.51 C 1688.22 1482.44 1664.56 1535.04 1629.36 1579.64 C 1577.44 1646.03 1493.51 1692.96 1409.9 1701.8 C 1377.42 1705.24 1338.59 1704.2 1305.34 1704.24 L 1152.46 1704.43 C 1029.25 1703.83 903.373 1706.1 780.323 1703.89 C 729.313 1697 661.9 1659.01 634.709 1614.7 C 664.524 1618.68 711.366 1617.06 742.965 1617.02 L 920.612 1617.1 L 1213 1617.45 L 1320.23 1617.42 C 1355.7 1617.26 1394.89 1618.79 1429.24 1610.12 C 1532.79 1583.99 1614.37 1489.52 1620.24 1382.01 C 1621.77 1353.95 1620.83 1324.08 1620.79 1295.86 L 1620.04 1109.1 L 1620.13 802.041 L 1620.08 716.204 C 1620.05 680.453 1621.99 653.134 1613.53 617.958 C 1610.55 601.391 1597.33 563.48 1589.96 547.615 C 1546.97 455.095 1467.84 389.319 1371.8 356.989 C 1357.8 352.609 1343.39 350.237 1329 347.764 C 1320.37 346.28 1308.4 345.877 1300.56 342.488 z" fill="rgb(20,79,211)" transform="translate(0,0)"></path>\r
<path d="M 348.403 617.255 L 428.042 617.025 L 427.982 1173.31 L 428.303 1312.41 C 428.307 1348.26 426.509 1385.59 432.588 1420.62 C 447.881 1508.75 515.505 1581.19 600.39 1607.03 C 611.692 1610.48 623.131 1612.28 634.709 1614.7 C 661.9 1659.01 729.313 1697 780.323 1703.89 C 762.949 1704.59 744.08 1703.59 726.508 1704.13 C 698.394 1705.05 671.491 1705.36 643.479 1702.08 C 497.047 1684.89 376.343 1571.8 350.449 1426.72 C 341.694 1377.67 344.835 1328.57 344.877 1278.95 L 344.596 1078.99 L 344.733 794.689 C 344.762 740.426 342.114 669.749 348.403 617.255 z" fill="rgb(84,147,240)" transform="translate(0,0)"></path>\r
<path d="M 1409.07 1051.32 C 1425.86 1036.36 1442.38 1017.68 1459.08 1001.79 L 1459.27 1022.64 L 1459.09 1151.37 C 1459.11 1177.73 1460.06 1213.85 1458.21 1239.48 C 1454.09 1296.27 1422.46 1357.92 1382.26 1398.03 C 1347.22 1433.7 1302.72 1458.62 1253.99 1469.87 C 1212.78 1479.51 1177.06 1477.33 1135.35 1477.42 L 1030.47 1477.53 L 688.368 1477 L 911.454 1253.89 C 937.215 1228.24 964.098 1199.05 990.581 1174.58 C 1022.7 1176.05 1243.71 1172.92 1251.04 1176.25 C 1169.48 1259.54 1082.63 1340.48 1002.01 1424 L 1131.45 1424 C 1162.06 1424.04 1194.93 1425.49 1224.94 1420.83 C 1285.7 1411.41 1335.93 1378 1371.73 1328.26 C 1388.21 1304.92 1399.77 1278.46 1405.72 1250.51 C 1410.19 1229.64 1409.69 1204.78 1409.76 1183.23 L 1409.99 1116.41 C 1410.04 1102.47 1410.93 1062.66 1409.07 1051.32 z" fill="rgb(20,39,128)" transform="translate(0,0)"></path>\r
<path d="M 1210.11 955.264 C 1293.69 874.651 1376.66 793.408 1459.01 711.543 L 1458.83 955.183 L 1458.63 968.468 L 1317.34 1109.28 L 1271.51 1155.23 C 1266.62 1160.17 1255.33 1172.63 1251.04 1176.25 C 1243.71 1172.92 1022.7 1176.05 990.581 1174.58 C 1028.22 1135.95 1066.18 1097.63 1104.47 1059.64 C 1129.34 1034.27 1154.59 1009.27 1180.2 984.639 C 1189.97 975.132 1200.19 964.262 1210.11 955.264 z" fill="rgb(66,72,214)" transform="translate(0,0)"></path>\r
<path d="M 1210.11 955.264 C 1293.69 874.651 1376.66 793.408 1459.01 711.543 L 1458.83 955.183 C 1431.73 954.343 1397.78 955.395 1370.08 955.499 C 1316.76 955.765 1263.43 955.686 1210.11 955.264 z" fill="rgb(43,173,251)" transform="translate(0,0)"></path>\r
<path d="M 750.318 1096.24 C 754.723 1082.14 760.467 1068.61 765.22 1054.52 C 784.416 998.274 807.977 940.679 828.575 885.173 C 838.674 857.957 887.827 844.451 913.262 852.419 C 927.195 856.785 934.334 860.281 944.668 870.527 C 973.426 899.04 1007.07 924.657 1033.72 955.015 C 1081.25 954.832 1128.77 954.939 1176.3 955.336 C 1152.73 980.663 1125.38 1006.49 1100.58 1030.98 L 1049.21 1031.15 C 1039.69 1031.19 1025.25 1031.88 1016.29 1030.25 C 991.339 1025.71 966.322 998.434 947.953 982.169 C 942.571 993.253 937.577 1007.27 933.076 1018.91 C 924.932 1039.87 916.962 1060.9 909.166 1081.99 C 907.65 1087.04 905.662 1093.06 904.541 1098.12 C 887.241 1098.15 758.3 1099.97 751.343 1097.3 L 750.318 1096.24 z" fill="rgb(20,79,211)" transform="translate(0,0)"></path>\r
<path d="M 781.497 954.999 L 784.007 955.006 L 785.132 956.15 C 783.771 963.497 778.71 976.477 776.14 983.973 C 771.614 996.831 767.663 1009.89 764.298 1023.1 C 727.931 1041.24 703.936 1058.81 679.744 1092.81 C 647.491 1137.47 634.632 1193.25 644.083 1247.52 C 654.839 1310.24 691.743 1355.64 742.68 1391.63 C 733.791 1400.46 713.567 1422.2 704.83 1429.12 C 701.239 1429.11 701.834 1428.66 698.211 1426.23 C 653.545 1391 615.954 1342.1 599.199 1287.27 C 555.983 1145.86 641.393 997.276 781.497 954.999 z" fill="rgb(20,39,128)" transform="translate(0,0)"></path>\r
<path d="M 904.541 1098.12 C 905.662 1093.06 907.65 1087.04 909.166 1081.99 C 917.814 1083.36 944.965 1082.78 955.082 1082.78 L 1048.02 1082.82 C 1022.89 1111.56 992.045 1138.04 965.842 1166.02 C 961.066 1171.12 954.773 1177.42 949.536 1181.9 C 922.418 1181.25 895.292 1180.99 868.167 1181.13 C 846.156 1181.14 819.143 1182.64 797.838 1178.49 C 767.575 1172.59 738.687 1125.76 750.318 1096.24 L 751.343 1097.3 C 758.3 1099.97 887.241 1098.15 904.541 1098.12 z" fill="rgb(66,72,214)" transform="translate(0,0)"></path>\r
<path d="M 893.356 670.452 C 936.908 666.589 975.409 698.61 979.548 742.136 C 983.687 785.662 951.91 824.366 908.411 828.78 C 864.521 833.234 825.393 801.109 821.217 757.191 C 817.041 713.273 849.413 674.35 893.356 670.452 z" fill="rgb(43,173,251)" transform="translate(0,0)"></path>\r
<path d="M 717.963 1206.46 C 786.384 1205.29 857.417 1206.95 926.039 1206.83 C 908.857 1223.67 891.817 1240.64 874.921 1257.76 C 868.044 1264.62 860.326 1271.92 852.376 1277.45 C 832.518 1278.19 811.921 1277.31 791.913 1277.66 C 768.506 1277.61 745.245 1278.12 721.832 1277.53 C 703.589 1277.07 689.364 1267.72 687.013 1248.71 C 684.358 1227.23 695.265 1208.44 717.963 1206.46 z" fill="rgb(20,39,128)" transform="translate(0,0)"></path>\r
</svg>`;var Ht="http://www.w3.org/2000/svg",Tt={person:"M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z",close:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",back:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",doc:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",print:"M19 8H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3zm-3 11H8v-5h8v5zm3-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM18 3H6v4h12V3z",reset:"M17.65 6.35A7.95 7.95 0 0 0 12 4a8 8 0 1 0 8 8h-2a6 6 0 1 1-1.76-4.24L13 11h7V4l-2.35 2.35z",fontSize:"M9 4v3h5v12h3V7h5V4H9zM3 12h3v7h3v-7h3V9H3v3z",zoom:"M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z",moon:"M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.39 5.39 0 0 1-4.4 2.26 5.4 5.4 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z",sun:"M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0-5 2.39 3.61h-4.78L12 2zm0 20-2.39-3.61h4.78L12 22zM2 12l3.61-2.39v4.78L2 12zm20 0-3.61 2.39V9.61L22 12z",invert:"M17.66 7.93 12 2.27 6.34 7.93a8 8 0 1 0 11.32 0zM12 19.59c-1.6 0-3.11-.62-4.24-1.76A5.95 5.95 0 0 1 6 13.59c0-1.6.62-3.11 1.76-4.24L12 5.1v14.49z",gray:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18V4a8 8 0 0 1 0 16z",font:"M5 4v3h5.5v12h3V7H19V4H5z",link:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4a5 5 0 0 0 0-10z",spacing:"M6 7h2.5L5 3.5 1.5 7H4v10H1.5L5 20.5 8.5 17H6V7zm4-2v2h12V5H10zm0 14h12v-2H10v2zm0-6h12v-2H10v2z",cursor:"M6 2l13 11.5h-7.8L8.6 21z",keyboard:"M20 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zM8 9h2v2H8V9zm0 3h2v2H8v-2zM5 9h2v2H5V9zm0 3h2v2H5v-2zm11 5H8v-2h8v2zm3-3h-2v-2h2v2zm0-3h-2V9h2v2zm-5-2h2v2h-2V9zm0 3h2v2h-2v-2z",pause:"M6 19h4V5H6v14zm8-14v14h4V5h-4z",ruler:"M2 16h20v5H2v-5zm3 1v2h1v-2H5zm4 0v2h1v-2H9zm4 0v2h1v-2h-1zm4 0v2h1v-2h-1zM4 3h7v10H4z",image:"M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 13.5l2.5 3 3.5-4.5 4.5 6H5l3.5-4.5z"};function x(t,e){let n=document.createElementNS(Ht,"svg");n.setAttribute("viewBox","0 0 24 24"),n.setAttribute("width",e||24),n.setAttribute("height",e||24),n.setAttribute("fill","currentColor"),n.setAttribute("aria-hidden","true"),n.setAttribute("focusable","false");let o=document.createElementNS(Ht,"path");return o.setAttribute("d",Tt[t]||Tt.doc),n.appendChild(o),n}function It(t,e){let n=e.createDocumentFragment();return Ct(t).forEach(o=>{if(o.h){let r=e.createElement("h3");r.textContent=o.h,n.appendChild(r)}if((o.ps||[]).forEach(r=>{let c=e.createElement("p");c.textContent=r,n.appendChild(c)}),o.list){let r=e.createElement("ul");o.list.forEach(c=>{let p=e.createElement("li");p.textContent=c,r.appendChild(p)}),n.appendChild(r)}}),n}function Zt(t){let e=document.createElement("iframe");e.setAttribute("aria-hidden","true"),e.style.cssText="position:fixed;width:0;height:0;border:0;visibility:hidden;",document.body.appendChild(e);let n=e.contentDocument;n.open(),n.write('<!doctype html><html dir="rtl" lang="he"><head><meta charset="utf-8"><title>\u05D4\u05E6\u05D4\u05E8\u05EA \u05E0\u05D2\u05D9\u05E9\u05D5\u05EA</title></head><body></body></html>'),n.close();let o=n.createElement("style");o.textContent="body{font-family:Arial,sans-serif;line-height:1.7;padding:28px;color:#000}h1{font-size:22px;margin-bottom:12px}h3{font-size:16px;margin:16px 0 4px}p{margin:6px 0}ul{margin:6px 24px 6px 0}",n.head.appendChild(o);let r=n.createElement("h1");r.textContent=i.statement,n.body.appendChild(r),n.body.appendChild(It(t,n)),e.contentWindow.focus(),e.contentWindow.print(),setTimeout(()=>e.remove(),3e3)}function Vt(t){let e=document.createElement("div");e.className="statement",e.appendChild(It(t,document));let n=document.createElement("button");n.type="button",n.className="wide",n.appendChild(x("print",18));let o=document.createElement("span");return o.textContent=i.print,n.appendChild(o),n.addEventListener("click",()=>Zt(t)),e.appendChild(n),e}function Bt(t,e,n){let o=document.createElement("div");o.className="panel",o.setAttribute("role","dialog"),o.setAttribute("aria-modal","true"),o.setAttribute("aria-label",i.menuTitle),o.hidden=!0;let r=document.createElement("div");r.className="header";let c=document.createElement("h2");c.textContent=i.menuTitle;let p=document.createElement("div");p.className="hbtns";let s=document.createElement("button");s.type="button",s.className="iconbtn",s.setAttribute("aria-label",i.back),s.appendChild(x("back",20)),s.hidden=!0;let a=document.createElement("button");a.type="button",a.className="iconbtn",a.setAttribute("aria-label",i.closeMenu),a.appendChild(x("close",20)),a.addEventListener("click",e),p.appendChild(s),p.appendChild(a),r.appendChild(c),r.appendChild(p),o.appendChild(r);let m=document.createElement("div"),y=document.createElement("div");y.className="grid";let A=[];R.forEach(d=>{let g=document.createElement("button");g.type="button",g.className="tile",d.kind==="toggle"&&g.setAttribute("role","switch"),g.appendChild(x(d.icon,24));let it=document.createElement("span");it.textContent=i.features[d.id],g.appendChild(it);let H=null;if(d.kind==="steps"){H=document.createElement("span"),H.className="steps",H.setAttribute("aria-hidden","true");for(let w=0;w<d.max;w++)H.appendChild(document.createElement("span"));g.appendChild(H)}let rt=()=>{let w=wt(d.id);if(d.kind==="toggle")g.setAttribute("aria-checked",w?"true":"false"),g.classList.toggle("on",!!w);else{let G=Number(w)||0;g.classList.toggle("on",G>0),g.setAttribute("aria-label",i.features[d.id]+", "+i.level+" "+G+" \u05DE\u05EA\u05D5\u05DA "+d.max),Array.prototype.forEach.call(H.children,(_t,jt)=>_t.classList.toggle("f",jt<G))}};g.addEventListener("click",()=>{St(d),A.forEach(w=>w())}),A.push(rt),rt(),y.appendChild(g)}),m.appendChild(y);let M=document.createElement("div");M.className="footer";let f;t.statementUrl?(f=document.createElement("a"),f.href=t.statementUrl,f.target="_blank",f.rel="noopener"):(f=document.createElement("button"),f.type="button"),f.className="wide",f.appendChild(x("doc",18));let U=document.createElement("span");U.textContent=i.statement,f.appendChild(U),M.appendChild(f);let C=document.createElement("button");C.type="button",C.className="wide",C.appendChild(x("reset",18));let P=document.createElement("span");P.textContent=i.reset,C.appendChild(P),C.addEventListener("click",()=>{At(),A.forEach(d=>d())}),M.appendChild(C),m.appendChild(M),o.appendChild(m);let l=null,h=document.createElement("div");h.className="expired-box";let F=document.createElement("h3");F.textContent=i.expiredTitle;let D=document.createElement("p");D.textContent=i.expiredBody;let E=document.createElement("a");E.href=i.expiredLinkUrl,E.target="_blank",E.rel="noopener",E.textContent=i.expiredLinkLabel,h.appendChild(F),h.appendChild(D),h.appendChild(E);let z=document.createElement("button");z.type="button",z.className="wide",z.style.marginTop="14px",z.appendChild(x("reset",18));let ot=document.createElement("span");ot.textContent=i.recheck,z.appendChild(ot);let S=document.createElement("p");S.setAttribute("role","status"),S.style.cssText="font-size:12.5px;color:#6b7280;margin-top:8px;min-height:16px;",z.addEventListener("click",()=>{n&&(z.disabled=!0,S.textContent=i.rechecking,n().then(d=>{z.disabled=!1,d==="expired"?S.textContent=i.recheckStillExpired:d?S.textContent="":S.textContent=i.recheckError}))}),h.appendChild(z),h.appendChild(S),h.hidden=!0,o.appendChild(h);let _=document.createElement("div");_.className="brand";let N=document.createElement("a");N.href=i.brandUrl+"?utm_source=widget&utm_medium=badge&ref="+encodeURIComponent(t.siteId||location.hostname),N.target="_blank",N.rel="noopener",N.textContent=i.brandName,N.setAttribute("aria-label",i.brandName+" \u2014 "+i.activeBrand);let j=document.createElement("span");j.textContent=" \xB7 "+i.activeBrand,_.appendChild(N),_.appendChild(j),o.appendChild(_);let q=!1;function W(d){q&&(d="expired"),m.hidden=d!=="menu",l&&(l.hidden=d!=="statement"),h.hidden=d!=="expired",s.hidden=d!=="statement"}t.statementUrl||f.addEventListener("click",()=>{l||(l=Vt(t),l.hidden=!0,o.insertBefore(l,h)),W("statement"),s.focus()}),s.addEventListener("click",()=>{W("menu"),a.focus()});function Rt(d){q=d==="expired",q?(W("expired"),j.textContent=" \xB7 "+i.expiredBrand):(W("menu"),j.textContent=" \xB7 "+i.activeBrand,A.forEach(g=>g()))}function Ut(){a.focus()}return{el:o,refresh:Rt,focusFirst:Ut}}var Pt="https://negishut-api.solaitions.workers.dev/v1/check",nt="ngsh:lic:v1";function Ft(t){let e=location.hostname;return!e||e==="localhost"||e==="127.0.0.1"||location.protocol==="file:"?Promise.resolve("active"):fetch(Pt+"?site="+encodeURIComponent(e)+"&id="+encodeURIComponent(t.siteId||""),{mode:"cors",cache:"no-store"}).then(n=>n.ok?n.json():null).then(n=>{if(!n||!n.status)return null;let o=null;if(n.status==="active"?o="active":(n.status==="expired"||n.status==="unknown")&&(o="expired"),o)try{localStorage.setItem(nt,JSON.stringify({v:o,t:Date.now()}))}catch{}return o}).catch(()=>null)}function Dt(t,e){let n=null;try{n=JSON.parse(localStorage.getItem(nt))}catch{}let o=n&&(n.v==="active"||n.v==="expired")?n.v:"active";e(o);let r=location.hostname;if(!r||r==="localhost"||r==="127.0.0.1"||location.protocol==="file:")return;let c=n&&n.v==="active"?1296e6:864e5;if(n&&n.t&&Date.now()-n.t<c)return;let p=null,s=0;try{p=new AbortController,s=setTimeout(()=>p.abort(),3e3)}catch{}fetch(Pt+"?site="+encodeURIComponent(r)+"&id="+encodeURIComponent(t.siteId||""),{mode:"cors",signal:p&&p.signal}).then(a=>a.ok?a.json():null).then(a=>{if(clearTimeout(s),!a||!a.status)return;let m=null;if(a.status==="active"?m="active":(a.status==="expired"||a.status==="unknown")&&(m="expired"),!!m){try{localStorage.setItem(nt,JSON.stringify({v:m,t:Date.now()}))}catch{}m!==o&&e(m)}}).catch(()=>{clearTimeout(s)})}function $t(){try{let e=new DOMParser().parseFromString(Nt,"image/svg+xml").documentElement;return e.nodeName!=="svg"?x("person",32):(e.setAttribute("width","40"),e.setAttribute("height","40"),e.setAttribute("aria-hidden","true"),e.setAttribute("focusable","false"),document.importNode(e,!0))}catch{return x("person",32)}}function Ot(t){let e=document.createElement("div");e.id="ngsh-root";let n=t.position.indexOf("left")>=0?"left":"right",o=t.position.split("-")[0],r="position:fixed;z-index:2147483646;"+n+":16px;";o==="top"?r+="top:16px;":o==="middle"?r+="top:50%;transform:translateY(-50%);":r+="bottom:16px;",e.style.cssText=r;let c=e.attachShadow({mode:"open"});try{let l=new CSSStyleSheet;l.replaceSync(et),c.adoptedStyleSheets=[l]}catch{let h=document.createElement("style");h.textContent=et,c.appendChild(h)}let p=document.createElement("div");p.className="wrap pos-"+n+" vpos-"+o+" size-"+t.size,p.setAttribute("dir","rtl"),p.setAttribute("lang","he");let s=document.createElement("button");s.type="button",s.className="btn",s.title=i.widgetLabel,s.setAttribute("aria-label",i.openMenu),s.setAttribute("aria-haspopup","dialog"),s.setAttribute("aria-expanded","false"),s.appendChild($t()),p.appendChild(s),c.appendChild(p);let a=null,m=!1,y="active";function A(){return a.el.querySelectorAll("button:not([hidden]), a[href]")}function M(l){if(!m)return;if(l.key==="Escape"){l.stopPropagation(),C();return}if(l.key!=="Tab")return;let h=A();if(!h.length)return;let F=h[0],D=h[h.length-1],E=c.activeElement;l.shiftKey&&(E===F||!E)?(l.preventDefault(),D.focus()):!l.shiftKey&&E===D&&(l.preventDefault(),F.focus())}function f(l){m&&l.composedPath&&!l.composedPath().includes(e)&&C()}function U(){a||(a=Bt(t,C,()=>Ft(t).then(l=>(l&&P(l),l))),p.appendChild(a.el),a.el.addEventListener("keydown",M)),a.refresh(y),a.el.hidden=!1,m=!0,s.setAttribute("aria-expanded","true"),s.setAttribute("aria-label",i.closeMenu),a.focusFirst(),document.addEventListener("click",f,!0)}function C(){a&&(a.el.hidden=!0,m=!1,s.setAttribute("aria-expanded","false"),s.setAttribute("aria-label",i.openMenu),document.removeEventListener("click",f,!0),s.focus())}s.addEventListener("click",()=>m?C():U());function P(l){y=l==="expired"?"expired":"active",p.classList.toggle("expired",y==="expired"),s.title=y==="expired"?i.expiredTooltip:i.widgetLabel,m&&a.refresh(y)}return{host:e,setLicense:P}}(function(){if(window.__ngshLoaded)return;window.__ngshLoaded=!0;function t(){try{let o=new CSSStyleSheet;o.replaceSync(K),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o]}catch{let r=document.createElement("style");r.setAttribute("data-ngsh",""),r.textContent=K,(document.head||document.documentElement).appendChild(r)}}function e(){try{if(!k.siteId||!k.scriptSrc)return;let o=new URLSearchParams(location.search).get("ngsh-audit"),r="";try{r=sessionStorage.getItem("ngsh:audit")||""}catch{}if(o===k.siteId){r=o;try{sessionStorage.setItem("ngsh:audit",r)}catch{}}if(r!==k.siteId)return;let c=document.createElement("script");c.src=k.scriptSrc.replace(/negishut(\.min)?\.js([?#].*)?$/,"negishut-audit.js"),c.defer=!0,document.head.appendChild(c)}catch{}}function n(){t(),k.lang&&!document.documentElement.getAttribute("lang")&&document.documentElement.setAttribute("lang",k.lang),Mt(),Lt();let o=Ot(k);document.body.appendChild(o.host),Dt(k,o.setLicense),e()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})();})();
