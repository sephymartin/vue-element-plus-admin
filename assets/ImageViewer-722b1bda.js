import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-2801a548.js";import{K as a,m as t,o as s,q as n,u as o,O as i,v as l,T as u,n as r,av as c,w as m,p as d,Q as f,d as p}from"./useI18n-58b225c6.js";import{u as v,d as g,E as b}from"./useDesign-153c2279.js";import{C as w,D as k,E as h,m as x,o as _,k as y,F as I,G as j,H as C,I as z}from"./index-613eaa2d.js";import{m as O}from"./typescript-5028724d.js";import{i as T}from"./browser-22c4830b.js";import{u as N}from"./index-d58b826b.js";import{d as D}from"./debounce-1d93e3d0.js";import{g as L,aB as A,r as E,ao as V,b1 as R,k as B,j as M,n as X,o as Y,l as F,m as $,c as S,w as W,y as H,v as q,u as G,z as P,ac as K,x as Q,I as Z,aX as J,aV as U,b as ee,q as ae,a7 as te,aD as se,ag as ne,b5 as oe}from"./runtime-core.esm-bundler-9826e6ce.js";import{f as ie}from"./is-c4ce1157.js";import{E as le}from"./el-button-b3603e9b.js";import"./el-card-dbdbf7f6.js";import"./el-popper-ac7429d6.js";import"./index-052519ae.js";import"./style-cacd911c.js";import"./index-a18f7570.js";function ue(e,t,s){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(s)&&(n="leading"in s?!!s.leading:n,o="trailing"in s?!!s.trailing:o),D(e,t,{leading:n,maxWait:t,trailing:o})}const re=t({urlList:{type:s(Array),default:()=>O([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0},zoomRate:{type:Number,default:1.2}}),ce={close:()=>!0,switch:e=>n(e)},me=["src"],de=L({name:"ElImageViewer"});const fe=m(r(L({...de,props:re,emits:ce,setup(e,{expose:a,emit:t}){const s=e,r={CONTAIN:{name:"contain",icon:A(w)},ORIGINAL:{name:"original",icon:A(k)}},m=T()?"DOMMouseScroll":"mousewheel",{t:d}=N(),f=o("image-viewer"),{nextZIndex:p}=v(),O=E(),D=E([]),L=V(),se=E(!0),ne=E(s.initialIndex),oe=R(r.CONTAIN),ie=E({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),le=B((()=>{const{urlList:e}=s;return e.length<=1})),re=B((()=>0===ne.value)),ce=B((()=>ne.value===s.urlList.length-1)),de=B((()=>s.urlList[ne.value])),fe=B((()=>{const{scale:e,deg:a,offsetX:t,offsetY:s,enableTransition:n}=ie.value;let o=t/e,i=s/e;switch(a%360){case 90:case-270:[o,i]=[i,-o];break;case 180:case-180:[o,i]=[-o,-i];break;case 270:case-90:[o,i]=[-i,o]}const l={transform:`scale(${e}) rotate(${a}deg) translate(${o}px, ${i}px)`,transition:n?"transform .3s":""};return oe.value.name===r.CONTAIN.name&&(l.maxWidth=l.maxHeight="100%"),l})),pe=B((()=>n(s.zIndex)?s.zIndex:p()));function ve(){L.stop(),t("close")}function ge(){se.value=!1}function be(e){se.value=!1,e.target.alt=d("el.image.error")}function we(e){if(se.value||0!==e.button||!O.value)return;ie.value.enableTransition=!1;const{offsetX:a,offsetY:t}=ie.value,s=e.pageX,n=e.pageY,o=ue((e=>{ie.value={...ie.value,offsetX:a+e.pageX-s,offsetY:t+e.pageY-n}})),i=g(document,"mousemove",o);g(document,"mouseup",(()=>{i()})),e.preventDefault()}function ke(){ie.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function he(){if(se.value)return;const e=c(r),a=Object.values(r),t=oe.value.name,s=(a.findIndex((e=>e.name===t))+1)%e.length;oe.value=r[e[s]],ke()}function xe(e){const a=s.urlList.length;ne.value=(e+a)%a}function _e(){re.value&&!s.infinite||xe(ne.value-1)}function ye(){ce.value&&!s.infinite||xe(ne.value+1)}function Ie(e,a={}){if(se.value)return;const{zoomRate:t,rotateDeg:n,enableTransition:o}={zoomRate:s.zoomRate,rotateDeg:90,enableTransition:!0,...a};switch(e){case"zoomOut":ie.value.scale>.2&&(ie.value.scale=Number.parseFloat((ie.value.scale/t).toFixed(3)));break;case"zoomIn":ie.value.scale<7&&(ie.value.scale=Number.parseFloat((ie.value.scale*t).toFixed(3)));break;case"clockwise":ie.value.deg+=n;break;case"anticlockwise":ie.value.deg-=n}ie.value.enableTransition=o}return M(de,(()=>{X((()=>{const e=D.value[0];(null==e?void 0:e.complete)||(se.value=!0)}))})),M(ne,(e=>{ke(),t("switch",e)})),Y((()=>{var e,a;!function(){const e=ue((e=>{switch(e.code){case b.esc:s.closeOnPressEscape&&ve();break;case b.space:he();break;case b.left:_e();break;case b.up:Ie("zoomIn");break;case b.right:ye();break;case b.down:Ie("zoomOut")}})),a=ue((e=>{Ie((e.wheelDelta?e.wheelDelta:-e.detail)>0?"zoomIn":"zoomOut",{zoomRate:s.zoomRate,enableTransition:!1})}));L.run((()=>{g(document,"keydown",e),g(document,m,a)}))}(),null==(a=null==(e=O.value)?void 0:e.focus)||a.call(e)})),a({setActiveItem:xe}),(e,a)=>(F(),$(te,{to:"body",disabled:!e.teleported},[S(u,{name:"viewer-fade",appear:""},{default:W((()=>[H("div",{ref_key:"wrapper",ref:O,tabindex:-1,class:q(G(f).e("wrapper")),style:P({zIndex:G(pe)})},[H("div",{class:q(G(f).e("mask")),onClick:a[0]||(a[0]=i((a=>e.hideOnClickModal&&ve()),["self"]))},null,2),K(" CLOSE "),H("span",{class:q([G(f).e("btn"),G(f).e("close")]),onClick:ve},[S(G(h),null,{default:W((()=>[S(G(x))])),_:1})],2),K(" ARROW "),G(le)?K("v-if",!0):(F(),Q(Z,{key:0},[H("span",{class:q([G(f).e("btn"),G(f).e("prev"),G(f).is("disabled",!e.infinite&&G(re))]),onClick:_e},[S(G(h),null,{default:W((()=>[S(G(_))])),_:1})],2),H("span",{class:q([G(f).e("btn"),G(f).e("next"),G(f).is("disabled",!e.infinite&&G(ce))]),onClick:ye},[S(G(h),null,{default:W((()=>[S(G(y))])),_:1})],2)],64)),K(" ACTIONS "),H("div",{class:q([G(f).e("btn"),G(f).e("actions")])},[H("div",{class:q(G(f).e("actions__inner"))},[S(G(h),{onClick:a[1]||(a[1]=e=>Ie("zoomOut"))},{default:W((()=>[S(G(I))])),_:1}),S(G(h),{onClick:a[2]||(a[2]=e=>Ie("zoomIn"))},{default:W((()=>[S(G(j))])),_:1}),H("i",{class:q(G(f).e("actions__divider"))},null,2),S(G(h),{onClick:he},{default:W((()=>[(F(),$(J(G(oe).icon)))])),_:1}),H("i",{class:q(G(f).e("actions__divider"))},null,2),S(G(h),{onClick:a[3]||(a[3]=e=>Ie("anticlockwise"))},{default:W((()=>[S(G(C))])),_:1}),S(G(h),{onClick:a[4]||(a[4]=e=>Ie("clockwise"))},{default:W((()=>[S(G(z))])),_:1})],2)],2),K(" CANVAS "),H("div",{class:q(G(f).e("canvas"))},[(F(!0),Q(Z,null,U(e.urlList,((e,a)=>ee((F(),Q("img",{ref_for:!0,ref:e=>D.value[a]=e,key:e,src:e,style:P(G(fe)),class:q(G(f).e("img")),onLoad:ge,onError:be,onMousedown:we},null,46,me)),[[l,a===ne.value]]))),128))],2),ae(e.$slots,"default")],6)])),_:3})],8,["disabled"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]])),pe=L({__name:"ImageViewer",props:{urlList:{type:Array,default:()=>[]},zIndex:d.number.def(200),initialIndex:d.number.def(0),infinite:d.bool.def(!0),hideOnClickModal:d.bool.def(!1),appendToBody:d.bool.def(!1),show:d.bool.def(!1)},setup(e){const a=e,t=B((()=>{const e={...a};return delete e.show,e})),s=E(a.show),n=()=>{s.value=!1};return(e,a)=>s.value?(F(),$(G(fe),se({key:0},G(t),{onClose:n}),null,16)):K("",!0)}});let ve=null;const ge=L({__name:"ImageViewer",setup(a){const{t:t}=p(),s=()=>{!function(e){if(!ie)return;const{urlList:a,initialIndex:t=0,infinite:s=!0,hideOnClickModal:n=!1,appendToBody:o=!1,zIndex:i=2e3,show:l=!0}=e,u={},r=document.createElement("div");u.urlList=a,u.initialIndex=t,u.infinite=s,u.hideOnClickModal=n,u.appendToBody=o,u.zIndex=i,u.show=l,document.body.appendChild(r),ve=S(pe,u),f(ve,r)}({urlList:["https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=3114228356,677481409&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=508846955,3814747122&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=3536647690,3616605490&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=4087287201,1148061266&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=3429163260,2974496379&fm=26&fmt=auto&gp=0.jpg"]})};return(a,n)=>(F(),$(G(e),{title:G(t)("imageViewerDemo.imageViewer"),message:G(t)("imageViewerDemo.imageViewerDes")},{default:W((()=>[S(G(le),{type:"primary",onClick:s},{default:W((()=>[ne(oe(G(t)("imageViewerDemo.open")),1)])),_:1})])),_:1},8,["title","message"]))}});export{ge as default};
