import{p as e,i as t}from"./useI18n-58b225c6.js";import{a as o,d as n}from"./useDesign-153c2279.js";import{g as i,r as u,b1 as l,o as s,aF as a,l as r,x as d,y as v,q as f,v as c,z as p}from"./runtime-core.esm-bundler-9826e6ce.js";const m=v("div",null,"sticky",-1),g=i({__name:"Sticky",props:{offset:e.number.def(0),zIndex:e.number.def(999),className:e.string.def(""),position:{type:String,validator:function(e){return-1!==["top","bottom"].indexOf(e)},default:"top"}},setup(e){const i=e,g=u("auto"),x=u("auto"),y=u(!1),h=l(),w=l(),{height:b}=o();s((()=>{var e;x.value=(null==(e=h.value)?void 0:e.getBoundingClientRect().height)+"px",w.value=C(h.value,!0),n(w,"scroll",I),n("resize",B),I()})),a((()=>{I()}));const z=(e,o)=>{if(!t)return!1;const n=((e,o)=>{var n;if(!t||!e||!o)return"";o.replace(/-(\w)/g,((e,t)=>t?t.toUpperCase():""));try{const t=e.style[o];if(t)return t;const i=null==(n=document.defaultView)?void 0:n.getComputedStyle(e,"");return i?i[o]:""}catch{return e.style[o]}})(e,{undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)]);return["scroll","auto","overlay"].some((e=>n.includes(e)))},C=(e,o)=>{if(!t)return;let n=e;for(;n;){if([window,document,document.documentElement].includes(n))return window;if(z(n,o))return n;n=n.parentNode}return n},I=()=>{var e,t;if(g.value=h.value.getBoundingClientRect().width+"px","top"===i.position){const t=null==(e=h.value)?void 0:e.getBoundingClientRect().top;if(void 0!==t&&t<i.offset)return void R();S()}else{const e=null==(t=h.value)?void 0:t.getBoundingClientRect().bottom;if(void 0!==e&&e>b.value-i.offset)return void R();S()}},B=()=>{y.value&&h.value&&(g.value=h.value.getBoundingClientRect().width+"px")},R=()=>{y.value||(y.value=!0)},S=()=>{y.value&&(g.value="auto",y.value=!1)};return(t,o)=>(r(),d("div",{style:p({height:x.value,zIndex:e.zIndex}),ref_key:"refSticky",ref:h},[v("div",{class:c(e.className),style:p({top:"top"===e.position?e.offset+"px":"",bottom:"top"!==e.position?e.offset+"px":"",zIndex:e.zIndex,position:y.value?"fixed":"static",width:g.value,height:x.value})},[f(t.$slots,"default",{},(()=>[m]))],6)],4))}});export{g as _};
