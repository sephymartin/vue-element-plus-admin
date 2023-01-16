import{F as e}from"./Form-cb4d378d.js";import{d as l}from"./useI18n-58b225c6.js";import{u as o}from"./useIcon-1e40486d.js";import{_ as t}from"./ContentWrap.vue_vue_type_script_setup_true_lang-2801a548.js";import{a}from"./app-9f5217c9.js";import{g as i,k as n,r,o as p,a as m,s,l as d,m as c,w as f,c as u,ag as b,y as v,b5 as D,x as h,ac as g,v as P,u as y}from"./runtime-core.esm-bundler-9826e6ce.js";import{_ as k}from"./_plugin-vue_export-helper-1b428a4d.js";import"./el-col-4c80b79a.js";import"./typescript-5028724d.js";import"./el-popper-ac7429d6.js";import"./useDesign-153c2279.js";import"./index-052519ae.js";import"./el-input-51a54408.js";import"./index-613eaa2d.js";import"./style-cacd911c.js";import"./event-5568c9d8.js";import"./index-a18f7570.js";import"./error-c58402b8.js";import"./el-tag-78fc1d62.js";import"./tsxHelper-4d453bcf.js";import"./_initCloneObject-940b5095.js";import"./_flatRest-0ed13584.js";import"./el-scrollbar-2642ea66.js";import"./index-d58b826b.js";import"./el-button-b3603e9b.js";import"./scroll-42c4a477.js";import"./isArrayLikeObject-a2703072.js";import"./debounce-1d93e3d0.js";import"./validator-787b8554.js";import"./is-c4ce1157.js";import"./el-input-number-eccd303e.js";import"./el-switch-b25caa3d.js";import"./el-divider-53cf84d5.js";import"./InputPassword-e5f2e2d5.js";import"./style.css_vue_type_style_index_0_src_true_lang-56c03272.js";import"./el-message-a1f84c0e.js";import"./aria-ecee1d93.js";import"./cloneDeep-7e4a742d.js";import"./_arrayIncludesWith-032ec3dd.js";import"./browser-22c4830b.js";import"./index-faf5036a.js";import"./Icon.vue_vue_type_script_setup_true_lang-984f254e.js";import"./el-card-dbdbf7f6.js";const j={class:"value"},x={class:"link"},_={style:{float:"left"}},w={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},T={style:{float:"left"}},C={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},S={style:{float:"left"}},I={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},$={style:{float:"left"}},Y={style:{float:"right","font-size":"13px",color:"var(--el-text-color-secondary)"}},F={key:0},N={class:"text"},M={key:0,class:"holiday"},A=k(i({__name:"DefaultForm",setup(i){const k=a(),{t:A}=l(),E=n((()=>k.getMobile)),B=r([]),G=(e,l)=>{l(e?B.value.filter(O(e)):B.value)},O=e=>l=>0===l.value.toLowerCase().indexOf(e.toLowerCase()),R=e=>{};p((()=>{B.value=[{value:"vue",link:"https://github.com/vuejs/vue"},{value:"element",link:"https://github.com/ElemeFE/element"},{value:"cooking",link:"https://github.com/ElemeFE/cooking"},{value:"mint-ui",link:"https://github.com/ElemeFE/mint-ui"},{value:"vuex",link:"https://github.com/vuejs/vuex"},{value:"vue-router",link:"https://github.com/vuejs/vue-router"},{value:"babel",link:"https://github.com/babel/babel"}]}));const L=["a","b","c","d","e","f","g","h","i","j"],z=r(Array.from({length:1e3}).map(((e,l)=>({value:`Option ${l+1}`,label:`${L[l%10]}${l}`})))),V=r(Array.from({length:10}).map(((e,l)=>{const o=l+1;return{value:`Group ${o}`,label:`Group ${o}`,options:Array.from({length:10}).map(((e,l)=>({value:`Option ${l+1+10*o}`,label:`${L[l%10]}${l+1+10*o}`})))}}))),W=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]}],H=()=>{const e=[];for(let l=1;l<=15;l++)e.push({value:l,desc:`Option ${l}`,disabled:l%4==0});return e},q=["2021-10-01","2021-10-02","2021-10-03","2021-10-04","2021-10-05","2021-10-06","2021-10-07"],U=({dayjs:e})=>q.includes(e.format("YYYY-MM-DD")),J=m([{field:"field1",label:A("formDemo.input"),component:"Divider"},{field:"field2",label:A("formDemo.default"),component:"Input"},{field:"field3",label:`${A("formDemo.icon")}1`,component:"Input",componentProps:{suffixIcon:o({icon:"ep:calendar"}),prefixIcon:o({icon:"ep:calendar"})}},{field:"field4",label:`${A("formDemo.icon")}2`,component:"Input",componentProps:{slots:{suffix:!0,prefix:!0}}},{field:"field5",label:A("formDemo.mixed"),component:"Input",componentProps:{slots:{prepend:!0,append:!0}}},{field:"field6",label:A("formDemo.textarea"),component:"Input",componentProps:{type:"textarea",rows:1}},{field:"field7",label:A("formDemo.autocomplete"),component:"Divider"},{field:"field8",label:A("formDemo.default"),component:"Autocomplete",componentProps:{fetchSuggestions:G,onSelect:R}},{field:"field9",label:A("formDemo.slot"),component:"Autocomplete",componentProps:{fetchSuggestions:G,onSelect:R,slots:{default:!0}}},{field:"field10",component:"Divider",label:A("formDemo.inputNumber")},{field:"field11",label:A("formDemo.default"),component:"InputNumber",value:0},{field:"field12",label:A("formDemo.position"),component:"InputNumber",componentProps:{controlsPosition:"right"},value:0},{field:"field13",label:A("formDemo.select"),component:"Divider"},{field:"field14",label:A("formDemo.default"),component:"Select",componentProps:{options:[{disabled:!0,label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field15",label:A("formDemo.slot"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}],optionsSlot:!0}},{field:"field16",label:A("formDemo.selectGroup"),component:"Select",componentProps:{options:[{label:"option1",options:[{disabled:!0,label:"option1-1",value:"1-1"},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}]}},{field:"field17",label:`${A("formDemo.selectGroup")}${A("formDemo.slot")}`,component:"Select",componentProps:{options:[{label:"option1",options:[{label:"option1-1",value:"1-1",disabled:!0},{label:"option1-2",value:"1-2"}]},{label:"option2",options:[{label:"option2-1",value:"2-1"},{label:"option2-2",value:"2-2"}]}],optionsSlot:!0}},{field:"field18",label:`${A("formDemo.selectV2")}`,component:"Divider"},{field:"field19",label:A("formDemo.default"),component:"SelectV2",componentProps:{options:z.value}},{field:"field20",label:A("formDemo.slot"),component:"SelectV2",componentProps:{options:z.value,slots:{default:!0}}},{field:"field21",label:A("formDemo.selectGroup"),component:"SelectV2",componentProps:{options:V.value}},{field:"field22",label:`${A("formDemo.selectGroup")}${A("formDemo.slot")}`,component:"SelectV2",componentProps:{options:V.value,slots:{default:!0}}},{field:"field23",label:A("formDemo.cascader"),component:"Divider"},{field:"field24",label:A("formDemo.default"),component:"Cascader",componentProps:{options:W}},{field:"field25",label:A("formDemo.slot"),component:"Cascader",componentProps:{options:W,slots:{default:!0}}},{field:"field26",label:A("formDemo.switch"),component:"Divider"},{field:"field27",label:A("formDemo.default"),component:"Switch",value:!1},{field:"field28",label:A("formDemo.icon"),component:"Switch",value:!1,componentProps:{activeIcon:o({icon:"ep:check"}),inactiveIcon:o({icon:"ep:close"})}},{field:"field29",label:A("formDemo.rate"),component:"Divider"},{field:"field30",label:A("formDemo.default"),component:"Rate",value:null},{field:"field31",label:A("formDemo.icon"),component:"Rate",value:null,componentProps:{voidIcon:o({icon:"ep:chat-round"}),icons:[o({icon:"ep:chat-round"}),o({icon:"ep:chat-line-round"}),o({icon:"ep:chat-dot-round"})]}},{field:"field32",label:A("formDemo.colorPicker"),component:"Divider"},{field:"field33",label:A("formDemo.default"),component:"ColorPicker"},{field:"field34",label:A("formDemo.transfer"),component:"Divider"},{field:"field35",label:A("formDemo.default"),component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},data:H()},value:[],colProps:{span:24}},{field:"field36",label:A("formDemo.slot"),component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:H(),slots:{default:!0}},value:[1],colProps:{span:24}},{field:"field37",label:`${A("formDemo.render")}`,component:"Transfer",componentProps:{props:{key:"value",label:"desc",disabled:"disabled"},leftDefaultChecked:[2,3],rightDefaultChecked:[1],data:H(),renderContent:(e,l)=>e("span",null,`${l.value} - ${l.desc}`)},value:[1],colProps:{span:24}},{field:"field38",label:A("formDemo.radio"),component:"Divider"},{field:"field39",label:A("formDemo.default"),component:"Radio",componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field40",label:A("formDemo.button"),component:"RadioButton",componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field41",label:A("formDemo.checkbox"),component:"Divider"},{field:"field42",label:A("formDemo.default"),component:"Checkbox",value:[],componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field43",label:A("formDemo.button"),component:"CheckboxButton",value:[],componentProps:{options:[{disabled:!0,label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"23"}]}},{field:"field44",component:"Divider",label:A("formDemo.slider")},{field:"field45",component:"Slider",label:A("formDemo.default"),value:0},{field:"field46",component:"Divider",label:A("formDemo.datePicker")},{field:"field47",component:"DatePicker",label:A("formDemo.default"),componentProps:{type:"date"}},{field:"field48",component:"DatePicker",label:A("formDemo.shortcuts"),componentProps:{type:"date",disabledDate:e=>e.getTime()>Date.now(),shortcuts:[{text:A("formDemo.today"),value:new Date},{text:A("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:A("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field49",component:"DatePicker",label:A("formDemo.week"),componentProps:{type:"week",format:`[${A("formDemo.week")}] ww`}},{field:"field50",component:"DatePicker",label:A("formDemo.year"),componentProps:{type:"year"}},{field:"field51",component:"DatePicker",label:A("formDemo.month"),componentProps:{type:"month"}},{field:"field52",component:"DatePicker",label:A("formDemo.dates"),componentProps:{type:"dates"}},{field:"field53",component:"DatePicker",label:A("formDemo.daterange"),componentProps:{type:"daterange"}},{field:"field54",component:"DatePicker",label:A("formDemo.monthrange"),componentProps:{type:"monthrange"}},{field:"field55",component:"DatePicker",label:A("formDemo.slot"),componentProps:{type:"date",format:"YYYY/MM/DD",valueFormat:"YYYY-MM-DD",slots:{default:!0}}},{field:"field56",component:"Divider",label:A("formDemo.dateTimePicker")},{field:"field57",component:"DatePicker",label:A("formDemo.default"),componentProps:{type:"datetime"}},{field:"field58",component:"DatePicker",label:A("formDemo.shortcuts"),componentProps:{type:"datetime",shortcuts:[{text:A("formDemo.today"),value:new Date},{text:A("formDemo.yesterday"),value:()=>{const e=new Date;return e.setTime(e.getTime()-864e5),e}},{text:A("formDemo.aWeekAgo"),value:()=>{const e=new Date;return e.setTime(e.getTime()-6048e5),e}}]}},{field:"field59",component:"DatePicker",label:A("formDemo.dateTimerange"),componentProps:{type:"datetimerange"}},{field:"field60",component:"Divider",label:A("formDemo.timePicker")},{field:"field61",component:"TimePicker",label:A("formDemo.default")},{field:"field62",component:"Divider",label:A("formDemo.timeSelect")},{field:"field63",component:"TimeSelect",label:A("formDemo.default")}]);return(l,o)=>{const a=s("Icon");return d(),c(y(t),{title:y(A)("formDemo.defaultForm"),message:y(A)("formDemo.formDes")},{default:f((()=>[u(y(e),{schema:J,"label-width":"auto","label-position":y(E)?"top":"right"},{"field4-prefix":f((()=>[u(a,{icon:"ep:calendar",class:"el-input__icon"})])),"field4-suffix":f((()=>[u(a,{icon:"ep:calendar",class:"el-input__icon"})])),"field5-prepend":f((()=>[b(" Http:// ")])),"field5-append":f((()=>[b(" .com ")])),"field9-default":f((({item:e})=>[v("div",j,D(e.value),1),v("span",x,D(e.link),1)])),"field15-option":f((({item:e})=>[v("span",_,D(e.label),1),v("span",w,D(e.value),1)])),"field17-option":f((({item:e})=>[v("span",T,D(e.label),1),v("span",C,D(e.value),1)])),"field20-default":f((({item:e})=>[v("span",S,D(e.label),1),v("span",I,D(e.value),1)])),"field22-default":f((({item:e})=>[v("span",$,D(e.label),1),v("span",Y,D(e.value),1)])),"field25-default":f((({node:e,data:l})=>[v("span",null,D(l.label),1),e.isLeaf?g("",!0):(d(),h("span",F," ("+D(l.children.length)+") ",1))])),"field36-default":f((({option:e})=>[v("span",null,D(e.value)+" - "+D(e.desc),1)])),"field55-default":f((e=>[v("div",{class:P(["cell",{current:e.isCurrent}])},[v("span",N,D(e.text),1),U(e)?(d(),h("span",M)):g("",!0)],2)])),_:1},8,["schema","label-position"])])),_:1},8,["title","message"])}}}),[["__scopeId","data-v-fb49868a"]]);export{A as default};
