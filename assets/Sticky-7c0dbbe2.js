import{_ as t}from"./ContentWrap.vue_vue_type_script_setup_true_lang-2801a548.js";import{m as e,o,q as n,af as a,u as s,n as l,w as p,d as r}from"./useI18n-58b225c6.js";import{_ as i}from"./Sticky.vue_vue_type_script_setup_true_lang-9b41d44e.js";import{a as u,h as m,d as f}from"./useDesign-153c2279.js";import{C as g}from"./event-5568c9d8.js";import{b as x}from"./style-cacd911c.js";import{t as v}from"./error-c58402b8.js";import{a as d}from"./scroll-42c4a477.js";import{g as y,b1 as c,r as C,k as _,j as b,o as h,bg as k,l as j,x as w,y as S,q as $,v as T,u as q,z,m as I,w as A,c as E}from"./runtime-core.esm-bundler-9826e6ce.js";import"./el-card-dbdbf7f6.js";import"./el-popper-ac7429d6.js";import"./index-052519ae.js";const N=e({zIndex:{type:o([Number,String]),default:100},target:{type:String,default:""},offset:{type:Number,default:0},position:{type:String,values:["top","bottom"],default:"top"}}),D={scroll:({scrollTop:t,fixed:e})=>n(t)&&a(e),[g]:t=>a(t)},W="ElAffix",H=y({name:W});const R=p(l(y({...H,props:N,emits:D,setup(t,{expose:e,emit:o}){const n=t,a=s("affix"),l=c(),p=c(),r=c(),{height:i}=u(),{height:g,width:y,top:I,bottom:A,update:E}=m(p,{windowScroll:!1}),N=m(l),D=C(!1),H=C(0),R=C(0),Y=_((()=>({height:D.value?`${g.value}px`:"",width:D.value?`${y.value}px`:""}))),B=_((()=>{if(!D.value)return{};const t=n.offset?x(n.offset):0;return{height:`${g.value}px`,width:`${y.value}px`,top:"top"===n.position?t:"",bottom:"bottom"===n.position?t:"",transform:R.value?`translateY(${R.value}px)`:"",zIndex:n.zIndex}})),F=()=>{if(r.value)if(H.value=r.value instanceof Window?document.documentElement.scrollTop:r.value.scrollTop||0,"top"===n.position)if(n.target){const t=N.bottom.value-n.offset-g.value;D.value=n.offset>I.value&&N.bottom.value>0,R.value=t<0?t:0}else D.value=n.offset>I.value;else if(n.target){const t=i.value-N.top.value-n.offset-g.value;D.value=i.value-n.offset<A.value&&i.value>N.top.value,R.value=t<0?-t:0}else D.value=i.value-n.offset<A.value};return b(D,(t=>o("change",t))),h((()=>{var t;n.target?(l.value=null!=(t=document.querySelector(n.target))?t:void 0,l.value||v(W,`Target is not existed: ${n.target}`)):l.value=document.documentElement,r.value=d(p.value,!0),E()})),f(r,"scroll",(()=>{E(),o("scroll",{scrollTop:H.value,fixed:D.value})})),k(F),e({update:F,updateRoot:E}),(t,e)=>(j(),w("div",{ref_key:"root",ref:p,class:T(q(a).b()),style:z(q(Y))},[S("div",{class:T({[q(a).m("fixed")]:D.value}),style:z(q(B))},[$(t.$slots,"default")],6)],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/affix/src/affix.vue"]])),Y=S("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离顶部90px ",-1),B=S("p",{style:{margin:"80px"}},"Content",-1),F=S("p",{style:{margin:"80px"}},"Content",-1),G=S("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离顶部150px ",-1),J=S("p",{style:{margin:"80px"}},"Content",-1),K=S("p",{style:{margin:"80px"}},"Content",-1),L=S("p",{style:{margin:"80px"}},"Content",-1),M=S("p",{style:{margin:"80px"}},"Content",-1),O=S("p",{style:{margin:"80px"}},"Content",-1),P=S("p",{style:{margin:"80px"}},"Content",-1),Q=S("p",{style:{margin:"80px"}},"Content",-1),U=S("p",{style:{margin:"80px"}},"Content",-1),V=S("p",{style:{margin:"80px"}},"Content",-1),X=S("p",{style:{margin:"80px"}},"Content",-1),Z=S("p",{style:{margin:"80px"}},"Content",-1),tt=S("p",{style:{margin:"80px"}},"Content",-1),et=S("p",{style:{margin:"80px"}},"Content",-1),ot=S("p",{style:{margin:"80px"}},"Content",-1),nt=S("p",{style:{margin:"80px"}},"Content",-1),at=S("p",{style:{margin:"80px"}},"Content",-1),st=S("p",{style:{margin:"80px"}},"Content",-1),lt=S("p",{style:{margin:"80px"}},"Content",-1),pt=S("p",{style:{margin:"80px"}},"Content",-1),rt=S("p",{style:{margin:"80px"}},"Content",-1),it=S("p",{style:{margin:"80px"}},"Content",-1),ut=S("p",{style:{margin:"80px"}},"Content",-1),mt=S("p",{style:{margin:"80px"}},"Content",-1),ft=S("p",{style:{margin:"80px"}},"Content",-1),gt=S("p",{style:{margin:"80px"}},"Content",-1),xt=S("p",{style:{margin:"80px"}},"Content",-1),vt=S("div",{style:{padding:"10px","background-color":"lightblue"}},"Affix 距离底部150px ",-1),dt=S("p",{style:{margin:"80px"}},"Content",-1),yt=S("p",{style:{margin:"80px"}},"Content",-1),ct=S("div",{style:{padding:"10px","background-color":"lightblue"}}," Sticky 距离底部90px ",-1),Ct=S("p",{style:{margin:"80px"}},"Content",-1),_t=S("p",{style:{margin:"80px"}},"Content",-1),bt=y({__name:"Sticky",setup(e){const{t:o}=r();return(e,n)=>(j(),I(q(t),{title:q(o)("stickyDemo.sticky")},{default:A((()=>[E(q(i),{offset:90},{default:A((()=>[Y])),_:1}),B,F,E(q(R),{offset:150},{default:A((()=>[G])),_:1}),J,K,L,M,O,P,Q,U,V,X,Z,tt,et,ot,nt,at,st,lt,pt,rt,it,ut,mt,ft,gt,xt,E(q(R),{offset:150,position:"bottom"},{default:A((()=>[vt])),_:1}),dt,yt,E(q(i),{offset:90,position:"bottom"},{default:A((()=>[ct])),_:1}),Ct,_t])),_:1},8,["title"]))}});export{bt as default};
