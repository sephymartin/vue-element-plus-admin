import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-2801a548.js";import{_ as t}from"./Search.vue_vue_type_script_setup_true_lang-551bd951.js";import{d as o}from"./useI18n-58b225c6.js";import{E as a}from"./el-button-b3603e9b.js";import{E as s}from"./el-tag-78fc1d62.js";import{_ as r}from"./Table.vue_vue_type_script_lang-5d5ffeb5.js";import{g as i,d as l}from"./index-21c4e07f.js";import{u as m}from"./useTable-eaa988d1.js";import{u as p}from"./useCrudSchemas-bfb92be2.js";import{a as n}from"./dict-cb8e8a52.js";import{a as c}from"./index-11543209.js";import{g as d,a as u,h as j,r as b,l as g,m as _,w as f,c as h,u as v,y,ag as w,b5 as x}from"./runtime-core.esm-bundler-9826e6ce.js";import"./el-card-dbdbf7f6.js";import"./el-popper-ac7429d6.js";import"./useDesign-153c2279.js";import"./index-052519ae.js";import"./Form-cb4d378d.js";import"./el-col-4c80b79a.js";import"./typescript-5028724d.js";import"./el-input-51a54408.js";import"./index-613eaa2d.js";import"./style-cacd911c.js";import"./event-5568c9d8.js";import"./index-a18f7570.js";import"./error-c58402b8.js";import"./tsxHelper-4d453bcf.js";import"./_initCloneObject-940b5095.js";import"./_flatRest-0ed13584.js";import"./el-scrollbar-2642ea66.js";import"./index-d58b826b.js";import"./scroll-42c4a477.js";import"./isArrayLikeObject-a2703072.js";import"./debounce-1d93e3d0.js";import"./validator-787b8554.js";import"./is-c4ce1157.js";import"./el-input-number-eccd303e.js";import"./el-switch-b25caa3d.js";import"./el-divider-53cf84d5.js";import"./InputPassword-e5f2e2d5.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./style.css_vue_type_style_index_0_src_true_lang-56c03272.js";import"./el-message-a1f84c0e.js";import"./aria-ecee1d93.js";import"./cloneDeep-7e4a742d.js";import"./_arrayIncludesWith-032ec3dd.js";import"./browser-22c4830b.js";import"./index-faf5036a.js";import"./Icon.vue_vue_type_script_setup_true_lang-984f254e.js";import"./useForm-5e5b70fc.js";import"./isPlainObject-1982923d.js";import"./index-ee9e4366.js";import"./el-message-box-5a27bfd0.js";import"./el-overlay-48fb0b4c.js";import"./vnode-b96dd110.js";import"./tree-b59d36bb.js";const D={class:"mb-10px"},S=d({__name:"useCrudSchemas",setup(d){const S=n(),{register:P,tableObject:C,methods:R}=m({getListApi:i,delListApi:l,response:{list:"list",total:"total"}}),{getList:k,setSearchParams:z}=R;k();const{t:L}=o(),O=u([{field:"index",label:L("tableDemo.index"),type:"index",form:{show:!1},detail:{show:!1}},{field:"title",label:L("tableDemo.title"),search:{show:!0},form:{colProps:{span:24}},detail:{span:24}},{field:"author",label:L("tableDemo.author")},{field:"display_time",label:L("tableDemo.displayTime"),form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:L("tableDemo.importance"),formatter:(e,t,o)=>j(s,{type:1===o?"success":2===o?"warning":"danger"},(()=>L(1===o?"tableDemo.important":2===o?"tableDemo.good":"tableDemo.commonly"))),search:{show:!0,component:"Select",componentProps:{options:S.getDictObj.importance}},form:{component:"Select",componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"importance2",label:`${L("tableDemo.importance")}2`,search:{show:!0,component:"Select",dictName:"importance"}},{field:"importance3",label:`${L("tableDemo.importance")}3`,search:{show:!0,component:"Select",api:async()=>(await c()).data}},{field:"pageviews",label:L("tableDemo.pageviews"),form:{component:"InputNumber",value:0}},{field:"content",label:L("exampleDemo.content"),table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:L("tableDemo.action"),form:{show:!1},detail:{show:!1}}]),{allSchemas:I}=p(O),H=b(!1),T=async(e,t)=>{var o;C.currentRow=e;const{delList:a,getSelections:s}=R,r=await s();H.value=!0,await a(t?r.map((e=>e.id)):[null==(o=C.currentRow)?void 0:o.id],t).finally((()=>{H.value=!1}))};return(o,s)=>(g(),_(v(e),null,{default:f((()=>[h(v(t),{schema:v(I).searchSchema,onSearch:v(z),onReset:v(z)},null,8,["schema","onSearch","onReset"]),y("div",D,[h(v(a),{loading:H.value,type:"danger",onClick:s[0]||(s[0]=e=>T(null,!0))},{default:f((()=>[w(x(v(L)("exampleDemo.del")),1)])),_:1},8,["loading"])]),h(v(r),{pageSize:v(C).pageSize,"onUpdate:pageSize":s[1]||(s[1]=e=>v(C).pageSize=e),currentPage:v(C).currentPage,"onUpdate:currentPage":s[2]||(s[2]=e=>v(C).currentPage=e),columns:v(I).tableColumns,data:v(C).tableList,loading:v(C).loading,pagination:{total:v(C).total},onRegister:v(P)},{action:f((({row:e})=>[h(v(a),{type:"danger",onClick:t=>T(e,!1)},{default:f((()=>[w(x(v(L)("exampleDemo.del")),1)])),_:2},1032,["onClick"])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1}))}});export{S as default};
