import e,{useRef as t,useState as r,useEffect as n}from"react";
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
***************************************************************************** */const c="•",u=u=>{var{onChange:o,value:s="",passwordSymbol:l=c}=u,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(r[n[c]]=e[n[c]])}return r}(u,["onChange","value","passwordSymbol"]);const i=t(null),d=t({}),p=t(),[g,v]=r(l.repeat(s.length)),b=t(s);return n((()=>{const e=()=>{var e,t,r,n;d.current={start:null!==(t=null===(e=i.current)||void 0===e?void 0:e.selectionStart)&&void 0!==t?t:0,end:null!==(n=null===(r=i.current)||void 0===r?void 0:r.selectionEnd)&&void 0!==n?n:0}};return document.addEventListener("selectionchange",e),()=>document.removeEventListener("selectionchange",e)}),[]),n((()=>{const e=e=>{const t=e.clipboardData;if(!t)return;const{start:r,end:n}=d.current;r!==n&&(e.preventDefault(),t.setData("text/plain",b.current.substring(r,n)))};return document.addEventListener("copy",e),()=>document.removeEventListener("copy",e)}),[]),e.createElement("input",Object.assign({ref:i,onChange:e=>{const{start:t,end:r}=d.current,n=e.target.value,c=n.length,u=b.current.length;let s;if(p.current&&clearTimeout(p.current),t===r&&u>c){const e=t-1;b.current=b.current.substring(0,e)+b.current.substring(e+1,b.current.length),v(l.repeat(c)),s=e}else{const e=n.substring(t,r+c-u);e?(b.current=b.current.substring(0,t)+e+b.current.substring(r,b.current.length),v(1===e.length?l.repeat(t)+e+l.repeat(c-t-1):l.repeat(c)),s=t+e.length):(b.current=b.current.substring(0,t)+b.current.substring(r,b.current.length),v(l.repeat(c)),s=t)}Promise.resolve().then((()=>{i.current&&(i.current.selectionStart=i.current.selectionEnd=s,d.current={start:s,end:s})})),p.current=setTimeout((()=>{v(l.repeat(c)),i.current&&(i.current.selectionStart=d.current.start,i.current.selectionEnd=d.current.end)}),1e3),null==o||o(b.current)},value:g},a))};export{u as default};
