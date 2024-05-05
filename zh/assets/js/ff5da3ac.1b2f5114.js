"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),p=n(67392),i=n(7094),u=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:d,groupId:k,className:N}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,p.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:g}=(0,i.U)(),[O,T]=(0,r.useState)(f),I=[],{blockElementScrollPositionUntilNextRender:C}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==O&&(C(t),T(a),null!=k&&g(k,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=I.indexOf(e.currentTarget)+1;n=I[t]??I[0];break}case"ArrowLeft":{const t=I.indexOf(e.currentTarget)-1;n=I[t]??I[I.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},N)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>I.push(e),onKeyDown:j,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(b.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},67039:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>p,metadata:()=>u,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const p={sidebar_position:1,title:"\u95ee\u9898"},i=void 0,u={unversionedId:"mutation/save-command/input-dto/problem",id:"mutation/save-command/input-dto/problem",title:"\u95ee\u9898",description:"\u672c\u6587\u6211\u4eec\u8ba8\u8bba\u4e09\u4e2a\u8bae\u9898",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/problem.mdx",sourceDirName:"mutation/save-command/input-dto",slug:"/mutation/save-command/input-dto/problem",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/problem",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/input-dto/problem.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u95ee\u9898"},sidebar:"tutorialSidebar",previous:{title:"Input DTO",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/"},next:{title:"\u5b64\u5355\u8868\u5355",permalink:"/jimmer-doc/zh/docs/mutation/save-command/input-dto/lonely"}},m={},s=[{value:"\u52a8\u6001\u5b9e\u4f53\u4f5c\u4e3a\u5165\u53c2\u7684\u95ee\u9898",id:"\u52a8\u6001\u5b9e\u4f53\u4f5c\u4e3a\u5165\u53c2\u7684\u95ee\u9898",level:2},{value:"\u5b89\u5168\u6027\u95ee\u9898",id:"\u5b89\u5168\u6027\u95ee\u9898",level:3},{value:"API\u6a21\u7cca\u6027\u95ee\u9898",id:"api\u6a21\u7cca\u6027\u95ee\u9898",level:3},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"\u548cGraphQLInput\u76f8\u6bd4\u8f83",id:"\u548cgraphqlinput\u76f8\u6bd4\u8f83",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u6211\u4eec\u8ba8\u8bba\u4e09\u4e2a\u8bae\u9898"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u52a8\u6001\u5b9e\u4f53\u4f5c\u4e3a\u5165\u53c2\u7684\u95ee\u9898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u89e3\u51b3\u65b9\u6848")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u548c",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/mutations-and-input-types/"},"GraphQLInput"),"\u76f8\u6bd4\u8f83"))),(0,r.kt)("h2",{id:"\u52a8\u6001\u5b9e\u4f53\u4f5c\u4e3a\u5165\u53c2\u7684\u95ee\u9898"},"\u52a8\u6001\u5b9e\u4f53\u4f5c\u4e3a\u5165\u53c2\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u622a\u6b62\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u6211\u4eec\u5df2\u7ecf\u7cfb\u7edf\u6027\u5730\u8bb2\u89e3\u4e86\u4fdd\u5b58\u6307\u4ee4\u7684\u6240\u6709\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u77e5\u9053\u4e86\uff0c\u65e0\u8bba\u8981\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7684\u5f62\u72b6\u662f\u4ec0\u4e48\uff0c\u6211\u4eec\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e00\u884c\u4ee3\u7801\u8c03\u7528\u4fdd\u5b58\u6307\u4ee4\u5c06\u4e4b\u5199\u5165\u6570\u636e\u5e93\uff0c\u6240\u6709\u7684\u5185\u90e8\u7ec6\u8282\u90fd\u88ab\u9690\u85cf\u8d77\u6765\u4e86\uff0c\u8fd9\u4e00\u4e2a\u975e\u5e38\u4fbf\u6377\u7684\u5e95\u5c42\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u4e1a\u52a1\u7cfb\u7edf\u4e0a\u5c42API\u8be5\u5982\u4f55\u8bbe\u8ba1\u5462\uff1f\u76f4\u63a5\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@RequestBody"),"\u63a5\u53d7\u52a8\u6001\u5bf9\u8c61\u5417\uff1f"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@PutMapping("/book")\npublic void saveBook(\n    // highlight-next-line\n    @RequestBody Book book\n) {\n    bookRepository.save(book);\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@PutMapping("/book")\nfun saveBook(\n    // highlight-next-line\n    @RequestBody book: Book\n) {\n    bookRepository.save(book)\n}\n')))),(0,r.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u7684\u786e\u53ef\u4ee5\u5de5\u4f5c\uff0c\u5141\u8bb8HTTP\u5ba2\u6237\u7aef\u4f20\u5165\u4efb\u610f\u5f62\u72b6\u7684\u7684\u5f62\u72b6\uff0c\u8fd9\u662f\u770b\u8d77\u6765\u4f3c\u4e4e\u662f\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u8be5\u65b9\u6cd5\u5b58\u5728\u4e24\u4e2a\u95ee\u9898\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b89\u5168\u6027\u95ee\u9898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API\u6a21\u7cca\u95ee\u9898"))),(0,r.kt)("h3",{id:"\u5b89\u5168\u6027\u95ee\u9898"},"\u5b89\u5168\u6027\u95ee\u9898"),(0,r.kt)("p",null,"\u5ba2\u670d\u7aef\u88ab\u8d4b\u4e88\u8fc7\u4e8e\u5f3a\u5927\u7684\u80fd\u529b\uff0c\u53ef\u4ee5\u63d0\u4ea4\u7684\u5f88\u6df1\u5f88\u5e7f\u7684\u6811\u5f62\u6570\u636e\u7ed3\u6784\uff0c\u8fdc\u8fdc\u8d85\u8fc7\u5f53\u524d\u5b89\u5168\u7b56\u7565\u5141\u8bb8\u5b83\u7684\u4fee\u6539\u7684\u6570\u636e\u8303\u56f4\u3002\u8fd9\u662f\u5de8\u5927\u7684\u5b89\u5168\u6f0f\u6d1e\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u5ba2\u6237\u7aef\u5b8c\u5168\u53ef\u4ee5\u63d0\u4ea4\u8fd9\u6837\u7684\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "SQL in Motion",\n    "edtion": 1,\n    "price": 41.99,\n    "store":{\n        "name": "MANNING",\n        "location": {\n            "city": "Vancouver",\n            "contry": "Canada",\n            ...\u7565...\n        }\n    },\n    "authors":[\n        {\n            "firstName": "Ben",\n            "lastName": "Brumm",\n            "job":{\n                "company": {\n                    "name": "IBM"\n                },\n                "title": "Senior HR Manager",\n                ...\u7565...\n            }\n            ...\u7565...\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"\u5047\u5982\u4f60\u63d0\u4f9b\u8fd9\u4e2aHTTPAPI\u7684\u672c\u610f\u662f\uff0c\u80fd\u591f\u88ab\u5f71\u54cd\u7684\u8868\u4ec5\u9650\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"AUTHOR"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"BOOK_AUTHOR_MAPPING"),"\u8fd9\u56db\u5f20\u8868\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u73b0\u5728\u5ba2\u6237\u7aef\u63d0\u4ea4\u7684\u6570\u636e\u7684\u6ce2\u53ca\u8303\u56f4\u592a\u5927\uff0c\u5177\u5907\u8fdc\u8d85\u4f60\u6240\u8bbe\u60f3\u7684\u7834\u574f\u80fd\u529b\u3002\u4e0a\u9762\u7684\u4f8b\u5b50\uff0c\u81f3\u5c11\u5b58\u57284\u4e2a\u610f\u5916\u7834\u574f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<root>.store.location.city"),"\u88ab\u4fee\u6539\uff0c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"New York"),"\u53d8\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Vancouver"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<root>.store.location.contry"),"\u88ab\u4fee\u6539\uff0c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"USA"),"\u53d8\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Canada"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<root>.authors[0].job.comany"),"\u88ab\u4fee\u6539\uff0c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"NAB"),"\u53d8\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"IBM"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<root>.authors[0].job.title"),"\u88ab\u4fee\u6539\uff0c\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Senior Business Analyst"),"\u53d8\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Senior HR Manager")))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u76f4\u63a5\u5728\u5bf9\u5916API\u4e2d\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@RequestBody"),"\u63a5\u53d7\u52a8\u6001\u5bf9\u8c61\u4f5c\u4e3aInput\u53c2\u6570\uff0c\u662f\u4e00\u4ef6\u975e\u5e38\u5371\u9669\u7684\u4e8b\uff0c\u4f1a\u5bfc\u81f4\u4e25\u91cd\u7684\u5b89\u5168\u6027\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u4fdd\u5b58\u6307\u4ee4\u5fc5\u987b\u4f5c\u4e3a\u5e95\u5c42\u529f\u80fd\u88ab\u5c01\u5370\u5728\u670d\u52a1\u5185\u90e8\uff0c\u7edd\u5bf9\u4e0d\u80fd\u901a\u8fc7HTTP API\u76f4\u63a5\u66b4\u9732\u5176\u539f\u59cb\u80fd\u529b\u3002")),(0,r.kt)("h3",{id:"api\u6a21\u7cca\u6027\u95ee\u9898"},"API\u6a21\u7cca\u6027\u95ee\u9898"),(0,r.kt)("p",null,"\u53c2\u6570\u662f\u52a8\u6001\u5bf9\u8c61\u4f1a\u5bfc\u81f4API\u51fa\u73b0\u6a21\u7cca\u884c\u95ee\u9898\u3002\u5ba2\u6237\u7aef\u5f00\u53d1\u4eba\u5458\u4e0d\u77e5\u9053\u54ea\u4e9b\u5b57\u6bb5\u662f\u4e1a\u52a1\u7cfb\u7edf\u81ea\u52a8\u51b3\u5b9a\uff0c\u54ea\u4e9b\u5b57\u6bb5\u5fc5\u987b\u7531\u81ea\u5df1\u6307\u5b9a\uff0c\u4ece\u800c\u4e0d\u77e5\u9053\u5e94\u8be5\u5982\u4f55\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u5bf9insert\u64cd\u4f5c\u5c24\u4e3a\u660e\u663e\u3002\u548cupdate\u64cd\u4f5c\u53ef\u4ee5\u53ea\u4fee\u6539\u5c11\u91cf\u5c5e\u6027\u4e0d\u540c\uff0cinsert\u64cd\u4f5c\u901a\u5e38\u9700\u8981\u6307\u5b9a\u5f88\u591a\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5f02\u5e38\uff0c\u5ba2\u6237\u7aef\u5f00\u53d1\u4eba\u5458\u5e76\u4e0d\u6e05\u695a\u5fc5\u987b\u6307\u5b9a\u54ea\u4e9b\u5c5e\u6027\u65b9\u53ef\u4e0d\u907f\u514d\u62a5\u9519\u3002"),(0,r.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("p",null,"\u4e3a\u89e3\u51b3\u6b64\u95ee\u9898\uff0cJimmer\u63d0\u4f9b\u4e86\u4e09\u79cd\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./lonely"},"\u5b64\u5355\u8868\u5355")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u964b\u7684\u65b9\u6848\uff0c\u4ec5\u4f9b\u5b66\u4e60\u6216\u975e\u5e38\u7b80\u5355\u7684\u9879\u76ee\u4f7f\u7528\u3002")),(0,r.kt)("p",{parentName:"li"},"\u8be5\u65b9\u6848\u53ea\u9488\u5bf9\u5355\u8868\u6570\u636e\u4fdd\u5b58\u64cd\u4f5c\uff0c\u4e14\u53ea\u89e3\u51b3\u5b89\u5168\u6027\u95ee\u9898\uff0c\u800c\u4e0d\u89e3\u51b3API\u6a21\u7cca\u6027\u95ee\u9898\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8be5\u65b9\u6848\u4e5f\u662f\u552f\u4e00\u4e2a\u4e0d\u9700\u8981\u5b9a\u4e49Input DTO\u7684\u65b9\u6848\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./dto-lang"},"\u57fa\u4e8eDTO\u8bed\u8a00\u7684\u81ea\u52a8Input DTO")),(0,r.kt)("p",{parentName:"li"},"\u6b64\u65b9\u6848\u7528\u5f88\u5c0f\u7684\u4ee3\u4ef7\u5feb\u901f\u81ea\u52a8\u751f\u6210Input DTO\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u662f\u4e00\u4e2a\u5b8c\u5907\u4e14\u6781\u5176\u4fbf\u6377\u7684\u65b9\u6848\uff0c\u6240\u4ee5\u662f\u63a8\u8350\u65b9\u6848\u3002\u5176\u5de8\u5927\u7684\u4fbf\u6377\u6027\u4f18\u52bf\u5c06\u4f1a\u5728\u540e\u6587\u4ecb\u7ecd\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6846\u67b6\u81ea\u5e26\u7684\u4f8b\u5b50\u5168\u90e8\u91c7\u7528\u6b64\u65b9\u6848"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"./mapstruct"},"\u57fa\u4e8eMapstruct\u7684\u624b\u52a8Input DTO")),(0,r.kt)("p",{parentName:"li"},"\u6b64\u65b9\u6848\u7531\u5f00\u53d1\u4eba\u5458\u624b\u52a8\u521b\u5efaInput DTO\u5e76\u8d1f\u8d23\u5c06\u5176\u8f6c\u5316\u4e3a\u52a8\u6001\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u662f\u4e00\u4e2a\u7edd\u5bf9\u7075\u6d3b\u7684\u65b9\u6848\uff0c\u4f46\u5f00\u53d1\u4eba\u5458\u7684\u5de5\u4f5c\u91cf\u5f88\u5927\u3002"))),(0,r.kt)("h2",{id:"\u548cgraphqlinput\u76f8\u6bd4\u8f83"},"\u548cGraphQLInput\u76f8\u6bd4\u8f83"),(0,r.kt)("p",null,"\u4e0a\u9762\u63d0\u4e09\u79cd\u89e3\u51b3\u65b9\u6848\u3002\u5176\u4e2d\uff0c\u540e\u4e24\u79cd\u65b9\u6848\u867d\u7136\u5dee\u5f02\u5f88\u5927\uff0c\u4f46\u662f\u6709\u4e00\u4e2a\u5171\u540c\u70b9\uff0c\u4f9d\u8d56\u4e8eInput DTO\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u628aJimmer\u7684Input DTO\u548c",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/mutations-and-input-types/"},"GraphQLInput"),"\u76f8\u6bd4\u8f83"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u76f8\u540c\u70b9"),(0,r.kt)("p",{parentName:"li"},"\u5728GraphQL\u4e2d\uff0c\u67e5\u8be2\u8fd4\u56de\u7684GraphQLObject\uff0c\u5373\u4efb\u610f\u5f62\u72b6\u7684\u52a8\u6001\u5bf9\u8c61\uff1b\u7136\u800c\uff0c\u5982\u679c\u4fee\u6539\u64cd\u4f5c\u63a5\u53d7\u5bf9\u8c61\u53c2\u6570\uff0c\u5fc5\u987b\u662fGraphQLInput\uff0c\u5373\u56fa\u5b9a\u5f62\u72b6\u7684\u9759\u6001\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"GraphQLInput\u548c\u8fd9\u91cc\u63d0\u5230\u7684InputDTO\u7406\u5ff5\u5b8c\u5168\u4e00\u6837\uff0c\u8fd9\u662f\u89e3\u51b3\u5b89\u5168\u6027\u95ee\u9898\u7684\u5fc5\u7136\u8bbe\u8ba1\uff0c\u6b8a\u9014\u540c\u5f52\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u540c\u70b9"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GraphQLInput\u53ea\u662f\u4e00\u4e2a\u534f\u8bae\uff0c\u4ec5\u4ec5\u7ea6\u675f\u5bf9\u8c61\u7c7b\u578b\u7684\u5165\u53c2\u5fc5\u987b\u662f\u5f62\u72b6\u56fa\u5b9a\u7684\u9759\u6001\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"li"},"\u867d\u7136\u597d\u5904\u662f\u4e0d\u5bf9\u5177\u4f53\u7684\u5b9e\u73b0\u6280\u672f\u505a\u4efb\u4f55\u9650\u5b9a\uff0c\u4f46\u574f\u5904\u662f\u6bcf\u4e00\u79cd\u7279\u5b9a\u5f62\u72b6\u7684GraphQLInput\u7684\u4fdd\u5b58\u4e1a\u52a1\u90fd\u9700\u8981\u5f00\u53d1\u4eba\u5458\u81ea\u5df1\u53bb\u5b9e\u73b0\u3002\u7e41\u7410\u5de5\u4f5c\u91cf\u4ecd\u7136\u5ba2\u89c2\u5b58\u5728\u7684\uff0c\u5f00\u53d1\u80fd\u771f\u771f\u5207\u5207\u611f\u53d7Input DTO\u7206\u70b8\u5e26\u6765\u7684\u75db\u82e6\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jimmer\u7684InputDTO\u53ea\u662f\u4e3a\u4e86\u5e94\u5bf9\u5b89\u5168\u6027\u95ee\u9898\u5c06\u52a8\u6001\u5b9e\u4f53\u6362\u4e86\u4e00\u4e2a\u8868\u8fbe\u65b9\u5f0f\u800c\u5df2\u3002\u4e00\u65e6\u7528\u6237\u5b8c\u6210\u4eceInput DTO\u5230\u52a8\u6001\u5b9e\u4f53\u7684\u8f6c\u5316\uff0c\u8fd8\u662f\u53ef\u4ee5\u4eab\u53d7\u4fdd\u5b58\u6307\u4ee4\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u7684\u5de8\u5927\u4fbf\u5229\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5f00\u53d1\u4eba\u5458\u91c7\u7528",(0,r.kt)("a",{parentName:"p",href:"./dto-lang"},"\u57fa\u4e8eDTO\u8bed\u8a00\u7684\u81ea\u52a8Input DTO"),"\u65b9\u6848\uff0cInput DTO\u7c7b\u4f1a\u88ab\u81ea\u52a8\u751f\u6210\uff0cInput DTO\u548c\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\u4e4b\u95f4\u7684\u8f6c\u5316\u903b\u8f91\u4e5f\u4f1a\u88ab\u81ea\u52a8\u751f\u6210\u3002\u8fd9\u6837\uff0cInput DTO\u7206\u70b8\u5e26\u6765\u7684\u75db\u82e6\u4e0d\u518d\u5b58\u5728\u3002\u6240\u4ee5\uff0c\u8fd9\u662f\u63a8\u8350\u65b9\u6848\u3002"))))))}d.isMDXComponent=!0}}]);