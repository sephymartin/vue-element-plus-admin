import{_ as e}from"./ContentWrap.vue_vue_type_script_setup_true_lang-2801a548.js";import{d as t}from"./useI18n-58b225c6.js";import{_ as l}from"./Table.vue_vue_type_script_lang-5d5ffeb5.js";import{g as a}from"./index-21c4e07f.js";import{E as o}from"./el-tag-78fc1d62.js";import{E as i}from"./el-button-b3603e9b.js";import{u as s}from"./useTable-eaa988d1.js";import{g as r,a as n,h as m,r as p,l as d,x as b,c,w as u,u as j,ag as g,b5 as f,y as D,I as _}from"./runtime-core.esm-bundler-9826e6ce.js";import"./el-card-dbdbf7f6.js";import"./el-popper-ac7429d6.js";import"./useDesign-153c2279.js";import"./index-052519ae.js";import"./tsxHelper-4d453bcf.js";import"./index-613eaa2d.js";import"./style-cacd911c.js";import"./event-5568c9d8.js";import"./index-a18f7570.js";import"./error-c58402b8.js";import"./_initCloneObject-940b5095.js";import"./_flatRest-0ed13584.js";import"./el-input-51a54408.js";import"./typescript-5028724d.js";import"./el-scrollbar-2642ea66.js";import"./index-d58b826b.js";import"./scroll-42c4a477.js";import"./isArrayLikeObject-a2703072.js";import"./debounce-1d93e3d0.js";import"./validator-787b8554.js";import"./is-c4ce1157.js";import"./isPlainObject-1982923d.js";import"./index-ee9e4366.js";import"./el-message-a1f84c0e.js";import"./el-message-box-5a27bfd0.js";import"./el-overlay-48fb0b4c.js";import"./vnode-b96dd110.js";import"./aria-ecee1d93.js";const v={class:"ml-30px"},x=r({__name:"UseTableDemo",setup(r){const{register:x,tableObject:y,methods:h,elTableRef:k}=s({getListApi:a,response:{list:"list",total:"total"}}),{getList:C}=h;C();const{t:w}=t(),P=n([{field:"index",label:w("tableDemo.index"),type:"index"},{field:"content",label:w("tableDemo.header"),children:[{field:"title",label:w("tableDemo.title")},{field:"author",label:w("tableDemo.author")},{field:"display_time",label:w("tableDemo.displayTime")},{field:"importance",label:w("tableDemo.importance"),formatter:(e,t,l)=>m(o,{type:1===l?"success":2===l?"warning":"danger"},(()=>w(1===l?"tableDemo.important":2===l?"tableDemo.good":"tableDemo.commonly")))},{field:"pageviews",label:w("tableDemo.pageviews")}]},{field:"action",label:w("tableDemo.action")}]),T=p(),S=e=>{T.value=e?{total:y.total}:void 0},R=e=>{const{setProps:t}=h;t({reserveIndex:e})},z=e=>{const{setProps:t}=h;t({selection:e})},I=p(1),O=()=>{const{setColumn:e}=h;e([{field:"title",path:"label",value:`${w("tableDemo.title")}${j(I)}`}]),I.value++},U=e=>{const{setProps:t}=h;t({expand:e})},A=()=>{var e;null==(e=j(k))||e.toggleAllSelection()};return(t,a)=>(d(),b(_,null,[c(j(e),{title:`UseTable ${j(w)("tableDemo.operate")}`},{default:u((()=>[c(j(i),{onClick:a[0]||(a[0]=e=>S(!0))},{default:u((()=>[g(f(j(w)("tableDemo.show"))+" "+f(j(w)("tableDemo.pagination")),1)])),_:1}),c(j(i),{onClick:a[1]||(a[1]=e=>S(!1))},{default:u((()=>[g(f(j(w)("tableDemo.hidden"))+" "+f(j(w)("tableDemo.pagination")),1)])),_:1}),c(j(i),{onClick:a[2]||(a[2]=e=>R(!0))},{default:u((()=>[g(f(j(w)("tableDemo.reserveIndex")),1)])),_:1}),c(j(i),{onClick:a[3]||(a[3]=e=>R(!1))},{default:u((()=>[g(f(j(w)("tableDemo.restoreIndex")),1)])),_:1}),c(j(i),{onClick:a[4]||(a[4]=e=>z(!0))},{default:u((()=>[g(f(j(w)("tableDemo.showSelections")),1)])),_:1}),c(j(i),{onClick:a[5]||(a[5]=e=>z(!1))},{default:u((()=>[g(f(j(w)("tableDemo.hiddenSelections")),1)])),_:1}),c(j(i),{onClick:O},{default:u((()=>[g(f(j(w)("tableDemo.changeTitle")),1)])),_:1}),c(j(i),{onClick:a[6]||(a[6]=e=>U(!0))},{default:u((()=>[g(f(j(w)("tableDemo.showExpandedRows")),1)])),_:1}),c(j(i),{onClick:a[7]||(a[7]=e=>U(!1))},{default:u((()=>[g(f(j(w)("tableDemo.hiddenExpandedRows")),1)])),_:1}),c(j(i),{onClick:A},{default:u((()=>[g(f(j(w)("tableDemo.selectAllNone")),1)])),_:1})])),_:1},8,["title"]),c(j(e),{title:`UseTable ${j(w)("tableDemo.example")}`},{default:u((()=>[c(j(l),{pageSize:j(y).pageSize,"onUpdate:pageSize":a[8]||(a[8]=e=>j(y).pageSize=e),currentPage:j(y).currentPage,"onUpdate:currentPage":a[9]||(a[9]=e=>j(y).currentPage=e),columns:P,data:j(y).tableList,loading:j(y).loading,pagination:T.value,onRegister:j(x)},{action:u((e=>[c(j(i),{type:"primary",onClick:e=>{}},{default:u((()=>[g(f(j(w)("tableDemo.action")),1)])),_:2},1032,["onClick"])])),expand:u((e=>[D("div",v,[D("div",null,f(j(w)("tableDemo.title"))+"："+f(e.row.title),1),D("div",null,f(j(w)("tableDemo.author"))+"："+f(e.row.author),1),D("div",null,f(j(w)("tableDemo.displayTime"))+"："+f(e.row.display_time),1)])])),_:1},8,["pageSize","currentPage","columns","data","loading","pagination","onRegister"])])),_:1},8,["title"])],64))}});export{x as default};
