import{g as e}from"./style-cacd911c.js";import{i as t}from"./useI18n-58b225c6.js";const o=(o,r)=>{if(!t)return!1;const n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(r)],s=e(o,n);return["scroll","auto","overlay"].some((e=>s.includes(e)))},r=(e,r)=>{if(!t)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(o(n,r))return n;n=n.parentNode}return n};let n;const s=e=>{var o;if(!t)return 0;if(void 0!==n)return n;const r=document.createElement("div");r.className=`${e}-scrollbar__wrap`,r.style.visibility="hidden",r.style.width="100px",r.style.position="absolute",r.style.top="-9999px",document.body.appendChild(r);const s=r.offsetWidth;r.style.overflow="scroll";const l=document.createElement("div");l.style.width="100%",r.appendChild(l);const i=l.offsetWidth;return null==(o=r.parentNode)||o.removeChild(r),n=s-i,n};function l(e,o){if(!t)return;if(!o)return void(e.scrollTop=0);const r=[];let n=o.offsetParent;for(;null!==n&&e!==n&&e.contains(n);)r.push(n),n=n.offsetParent;const s=o.offsetTop+r.reduce(((e,t)=>e+t.offsetTop),0),l=s+o.offsetHeight,i=e.scrollTop,f=i+e.clientHeight;s<i?e.scrollTop=s:l>f&&(e.scrollTop=l-e.clientHeight)}export{r as a,s as g,l as s};
