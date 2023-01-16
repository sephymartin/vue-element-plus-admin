import{u as e,n,O as o,ad as t,v as a,T as s,i as l,Q as r,I as i,P as c}from"./useI18n-58b225c6.js";import{E as u}from"./el-button-b3603e9b.js";import{E as d}from"./el-input-51a54408.js";import{E as p,u as m,a as f,b as v}from"./el-overlay-48fb0b4c.js";import{E as g,a as y,T as h,c as b}from"./index-613eaa2d.js";import{E as C,u as E}from"./useDesign-153c2279.js";import{o as x}from"./aria-ecee1d93.js";import{j as w,e as B,n as k,g as M,r as T,a as I,k as j,o as S,aH as R,t as A,s as _,l as z,m as P,w as L,b as V,c as O,y as $,v as H,z as D,x as q,aX as K,ac as U,b5 as F,q as Q,ag as W,i as X,aA as Z,bm as G,d as J,C as N}from"./runtime-core.esm-bundler-9826e6ce.js";import{e as Y}from"./el-popper-ac7429d6.js";import{i as ee}from"./validator-787b8554.js";import{u as ne}from"./index-d58b826b.js";import{u as oe}from"./index-052519ae.js";const te="_trap-focus-children",ae=[],se=e=>{if(0===ae.length)return;const n=ae[ae.length-1][te];if(n.length>0&&e.code===C.tab){if(1===n.length)return e.preventDefault(),void(document.activeElement!==n[0]&&n[0].focus());const o=e.shiftKey,t=e.target===n[0],a=e.target===n[n.length-1];t&&o&&(e.preventDefault(),n[n.length-1].focus()),a&&!o&&(e.preventDefault(),n[0].focus())}},le=M({name:"ElMessageBox",directives:{TrapFocus:{beforeMount(e){e[te]=x(e),ae.push(e),ae.length<=1&&document.addEventListener("keydown",se)},updated(e){k((()=>{e[te]=x(e)}))},unmounted(){ae.shift(),0===ae.length&&document.removeEventListener("keydown",se)}}},components:{ElButton:u,ElFocusTrap:Y,ElInput:d,ElOverlay:p,ElIcon:g,...y},inheritAttrs:!1,props:{buttonSize:{type:String,validator:ee},modal:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},showClose:{type:Boolean,default:!0},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},closeOnHashChange:{type:Boolean,default:!0},center:Boolean,draggable:Boolean,roundButton:{default:!1,type:Boolean},container:{type:String,default:"body"},boxType:{type:String,default:""}},emits:["vanish","action"],setup(n,{emit:o}){const{t:t}=ne(),a=e("message-box"),s=T(!1),{nextZIndex:l}=E(),r=I({autofocus:!0,beforeClose:null,callback:null,cancelButtonText:"",cancelButtonClass:"",confirmButtonText:"",confirmButtonClass:"",customClass:"",customStyle:{},dangerouslyUseHTMLString:!1,distinguishCancelAndClose:!1,icon:"",inputPattern:null,inputPlaceholder:"",inputType:"text",inputValue:null,inputValidator:null,inputErrorMessage:"",message:null,modalFade:!0,modalClass:"",showCancelButton:!1,showConfirmButton:!0,type:"",title:void 0,showInput:!1,action:"",confirmButtonLoading:!1,cancelButtonLoading:!1,confirmButtonDisabled:!1,editorErrorMessage:"",validateError:!1,zIndex:l()}),i=j((()=>{const e=r.type;return{[a.bm("icon",e)]:e&&h[e]}})),c=oe(),u=oe(),d=b(j((()=>n.buttonSize)),{prop:!0,form:!0,formItem:!0}),p=j((()=>r.icon||h[r.type]||"")),g=j((()=>!!r.message)),y=T(),C=T(),x=T(),M=T(),_=T(),z=j((()=>r.confirmButtonClass));w((()=>r.inputValue),(async e=>{await k(),"prompt"===n.boxType&&null!==e&&H()}),{immediate:!0}),w((()=>s.value),(e=>{var o,t;e&&("prompt"!==n.boxType&&(r.autofocus?x.value=null!=(t=null==(o=_.value)?void 0:o.$el)?t:y.value:x.value=y.value),r.zIndex=l()),"prompt"===n.boxType&&(e?k().then((()=>{var e;M.value&&M.value.$el&&(r.autofocus?x.value=null!=(e=D())?e:y.value:x.value=y.value)})):(r.editorErrorMessage="",r.validateError=!1))}));const P=j((()=>n.draggable));function L(){s.value&&(s.value=!1,k((()=>{r.action&&o("action",r.action)})))}m(y,C,P),S((async()=>{await k(),n.closeOnHashChange&&window.addEventListener("hashchange",L)})),R((()=>{n.closeOnHashChange&&window.removeEventListener("hashchange",L)}));const V=()=>{n.closeOnClickModal&&$(r.distinguishCancelAndClose?"close":"cancel")},O=v(V),$=e=>{var o;("prompt"!==n.boxType||"confirm"!==e||H())&&(r.action=e,r.beforeClose?null==(o=r.beforeClose)||o.call(r,e,r,L):L())},H=()=>{if("prompt"===n.boxType){const e=r.inputPattern;if(e&&!e.test(r.inputValue||""))return r.editorErrorMessage=r.inputErrorMessage||t("el.messagebox.error"),r.validateError=!0,!1;const n=r.inputValidator;if("function"==typeof n){const e=n(r.inputValue);if(!1===e)return r.editorErrorMessage=r.inputErrorMessage||t("el.messagebox.error"),r.validateError=!0,!1;if("string"==typeof e)return r.editorErrorMessage=e,r.validateError=!0,!1}}return r.editorErrorMessage="",r.validateError=!1,!0},D=()=>{const e=M.value.$refs;return e.input||e.textarea},q=()=>{$("close")};return n.lockScroll&&f(s),((e,n)=>{let o;w((()=>e.value),(e=>{var t,a;e?(o=document.activeElement,B(n)&&(null==(a=(t=n.value).focus)||a.call(t))):o.focus()}))})(s),{...A(r),ns:a,overlayEvent:O,visible:s,hasMessage:g,typeClass:i,contentId:c,inputId:u,btnSize:d,iconComponent:p,confirmButtonClasses:z,rootRef:y,focusStartRef:x,headerRef:C,inputRef:M,confirmRef:_,doClose:L,handleClose:q,onCloseRequested:()=>{n.closeOnPressEscape&&q()},handleWrapperClick:V,handleInputEnter:e=>{if("textarea"!==r.inputType)return e.preventDefault(),$("confirm")},handleAction:$,t:t}}}),re=["aria-label","aria-describedby"],ie=["aria-label"],ce=["id"];var ue=n(le,[["render",function(e,n,l,r,i,c){const u=_("el-icon"),d=_("close"),p=_("el-input"),m=_("el-button"),f=_("el-focus-trap"),v=_("el-overlay");return z(),P(s,{name:"fade-in-linear",onAfterLeave:n[11]||(n[11]=n=>e.$emit("vanish")),persisted:""},{default:L((()=>[V(O(v,{"z-index":e.zIndex,"overlay-class":[e.ns.is("message-box"),e.modalClass],mask:e.modal},{default:L((()=>[$("div",{role:"dialog","aria-label":e.title,"aria-modal":"true","aria-describedby":e.showInput?void 0:e.contentId,class:H(`${e.ns.namespace.value}-overlay-message-box`),onClick:n[8]||(n[8]=(...n)=>e.overlayEvent.onClick&&e.overlayEvent.onClick(...n)),onMousedown:n[9]||(n[9]=(...n)=>e.overlayEvent.onMousedown&&e.overlayEvent.onMousedown(...n)),onMouseup:n[10]||(n[10]=(...n)=>e.overlayEvent.onMouseup&&e.overlayEvent.onMouseup(...n))},[O(f,{loop:"",trapped:e.visible,"focus-trap-el":e.rootRef,"focus-start-el":e.focusStartRef,onReleaseRequested:e.onCloseRequested},{default:L((()=>[$("div",{ref:"rootRef",class:H([e.ns.b(),e.customClass,e.ns.is("draggable",e.draggable),{[e.ns.m("center")]:e.center}]),style:D(e.customStyle),tabindex:"-1",onClick:n[7]||(n[7]=o((()=>{}),["stop"]))},[null!==e.title&&void 0!==e.title?(z(),q("div",{key:0,ref:"headerRef",class:H(e.ns.e("header"))},[$("div",{class:H(e.ns.e("title"))},[e.iconComponent&&e.center?(z(),P(u,{key:0,class:H([e.ns.e("status"),e.typeClass])},{default:L((()=>[(z(),P(K(e.iconComponent)))])),_:1},8,["class"])):U("v-if",!0),$("span",null,F(e.title),1)],2),e.showClose?(z(),q("button",{key:0,type:"button",class:H(e.ns.e("headerbtn")),"aria-label":e.t("el.messagebox.close"),onClick:n[0]||(n[0]=n=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),onKeydown:n[1]||(n[1]=t(o((n=>e.handleAction(e.distinguishCancelAndClose?"close":"cancel")),["prevent"]),["enter"]))},[O(u,{class:H(e.ns.e("close"))},{default:L((()=>[O(d)])),_:1},8,["class"])],42,ie)):U("v-if",!0)],2)):U("v-if",!0),$("div",{id:e.contentId,class:H(e.ns.e("content"))},[$("div",{class:H(e.ns.e("container"))},[e.iconComponent&&!e.center&&e.hasMessage?(z(),P(u,{key:0,class:H([e.ns.e("status"),e.typeClass])},{default:L((()=>[(z(),P(K(e.iconComponent)))])),_:1},8,["class"])):U("v-if",!0),e.hasMessage?(z(),q("div",{key:1,class:H(e.ns.e("message"))},[Q(e.$slots,"default",{},(()=>[e.dangerouslyUseHTMLString?(z(),P(K(e.showInput?"label":"p"),{key:1,for:e.showInput?e.inputId:void 0,innerHTML:e.message},null,8,["for","innerHTML"])):(z(),P(K(e.showInput?"label":"p"),{key:0,for:e.showInput?e.inputId:void 0},{default:L((()=>[W(F(e.dangerouslyUseHTMLString?"":e.message),1)])),_:1},8,["for"]))]))],2)):U("v-if",!0)],2),V($("div",{class:H(e.ns.e("input"))},[O(p,{id:e.inputId,ref:"inputRef",modelValue:e.inputValue,"onUpdate:modelValue":n[2]||(n[2]=n=>e.inputValue=n),type:e.inputType,placeholder:e.inputPlaceholder,"aria-invalid":e.validateError,class:H({invalid:e.validateError}),onKeydown:t(e.handleInputEnter,["enter"])},null,8,["id","modelValue","type","placeholder","aria-invalid","class","onKeydown"]),$("div",{class:H(e.ns.e("errormsg")),style:D({visibility:e.editorErrorMessage?"visible":"hidden"})},F(e.editorErrorMessage),7)],2),[[a,e.showInput]])],10,ce),$("div",{class:H(e.ns.e("btns"))},[e.showCancelButton?(z(),P(m,{key:0,loading:e.cancelButtonLoading,class:H([e.cancelButtonClass]),round:e.roundButton,size:e.btnSize,onClick:n[3]||(n[3]=n=>e.handleAction("cancel")),onKeydown:n[4]||(n[4]=t(o((n=>e.handleAction("cancel")),["prevent"]),["enter"]))},{default:L((()=>[W(F(e.cancelButtonText||e.t("el.messagebox.cancel")),1)])),_:1},8,["loading","class","round","size"])):U("v-if",!0),V(O(m,{ref:"confirmRef",type:"primary",loading:e.confirmButtonLoading,class:H([e.confirmButtonClasses]),round:e.roundButton,disabled:e.confirmButtonDisabled,size:e.btnSize,onClick:n[5]||(n[5]=n=>e.handleAction("confirm")),onKeydown:n[6]||(n[6]=t(o((n=>e.handleAction("confirm")),["prevent"]),["enter"]))},{default:L((()=>[W(F(e.confirmButtonText||e.t("el.messagebox.confirm")),1)])),_:1},8,["loading","class","round","disabled","size"]),[[a,e.showConfirmButton]])],2)],6)])),_:3},8,["trapped","focus-trap-el","focus-start-el","onReleaseRequested"])],42,re)])),_:3},8,["z-index","overlay-class","mask"]),[[a,e.visible]])])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/message-box/src/index.vue"]]);const de=new Map,pe=(e,n,o=null)=>{const t=O(ue,e,N(e.message)||Z(e.message)?{default:N(e.message)?e.message:()=>e.message}:null);return t.appContext=o,r(t,n),(e=>{let n=document.body;return e.appendTo&&(X(e.appendTo)&&(n=document.querySelector(e.appendTo)),c(e.appendTo)&&(n=e.appendTo),c(n)||(n=document.body)),n})(e).appendChild(n.firstElementChild),t.component},me=(e,n)=>{const o=document.createElement("div");e.onVanish=()=>{r(null,o),de.delete(a)},e.onAction=n=>{const o=de.get(a);let s;s=e.showInput?{value:a.inputValue,action:n}:n,e.callback?e.callback(s,t.proxy):"cancel"===n||"close"===n?e.distinguishCancelAndClose&&"cancel"!==n?o.reject("close"):o.reject("cancel"):o.resolve(s)};const t=pe(e,o,n),a=t.proxy;for(const s in e)G(e,s)&&!G(a.$props,s)&&(a[s]=e[s]);return a.visible=!0,a};function fe(e,n=null){if(!l)return Promise.reject();let o;return X(e)||Z(e)?e={message:e}:o=e.callback,new Promise(((t,a)=>{const s=me(e,null!=n?n:fe._context);de.set(s,{options:e,callback:o,resolve:t,reject:a})}))}const ve={alert:{closeOnPressEscape:!1,closeOnClickModal:!1},confirm:{showCancelButton:!0},prompt:{showCancelButton:!0,showInput:!0}};["alert","confirm","prompt"].forEach((e=>{fe[e]=function(e){return(n,o,t,a)=>{let s="";return J(o)?(t=o,s=""):s=i(o)?"":o,fe(Object.assign({title:s,message:n,type:"",...ve[e]},t,{boxType:e}),a)}}(e)})),fe.close=()=>{de.forEach(((e,n)=>{n.doClose()})),de.clear()},fe._context=null;const ge=fe;ge.install=e=>{ge._context=e._context,e.config.globalProperties.$msgbox=ge,e.config.globalProperties.$messageBox=ge,e.config.globalProperties.$alert=ge.alert,e.config.globalProperties.$confirm=ge.confirm,e.config.globalProperties.$prompt=ge.prompt};const ye=ge;export{ye as E};
