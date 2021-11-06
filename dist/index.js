var e=require("react");function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=t(e);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */const n="•";module.exports=t=>{var{onChange:u,value:c="",passwordSymbol:s=n}=t,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var u=0;for(n=Object.getOwnPropertySymbols(e);u<n.length;u++)t.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(r[n[u]]=e[n[u]])}return r}(t,["onChange","value","passwordSymbol"]);const l=e.useRef(null),a=e.useRef({}),i=e.useRef(),[d,p]=e.useState(s.repeat(c.length)),g=e.useRef(c);return e.useEffect((()=>{const e=()=>{var e,t,r,n;a.current={start:null!==(t=null===(e=l.current)||void 0===e?void 0:e.selectionStart)&&void 0!==t?t:0,end:null!==(n=null===(r=l.current)||void 0===r?void 0:r.selectionEnd)&&void 0!==n?n:0}};return document.addEventListener("selectionchange",e),()=>document.removeEventListener("selectionchange",e)}),[]),e.useEffect((()=>{const e=e=>{const t=e.clipboardData;if(!t)return;const{start:r,end:n}=a.current;r!==n&&(e.preventDefault(),t.setData("text/plain",g.current.substring(r,n)))};return document.addEventListener("copy",e),()=>document.removeEventListener("copy",e)}),[]),r.default.createElement("input",Object.assign({ref:l,onChange:e=>{const{start:t,end:r}=a.current,n=e.target.value,c=n.length,o=g.current.length;let d;if(i.current&&clearTimeout(i.current),t===r&&o>c){const e=t-1;g.current=g.current.substring(0,e)+g.current.substring(e+1,g.current.length),p(s.repeat(c)),d=e}else{const e=n.substring(t,r+c-o);e?(g.current=g.current.substring(0,t)+e+g.current.substring(r,g.current.length),p(1===e.length?s.repeat(t)+e+s.repeat(c-t-1):s.repeat(c)),d=t+e.length):(g.current=g.current.substring(0,t)+g.current.substring(r,g.current.length),p(s.repeat(c)),d=t)}Promise.resolve().then((()=>{l.current&&(l.current.selectionStart=l.current.selectionEnd=d,a.current={start:d,end:d})})),i.current=setTimeout((()=>{p(s.repeat(c)),l.current&&(l.current.selectionStart=a.current.start,l.current.selectionEnd=a.current.end)}),1e3),null==u||u(g.current)},value:d},o))};
