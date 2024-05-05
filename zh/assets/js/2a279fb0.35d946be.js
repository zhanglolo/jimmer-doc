"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7247],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(t),d=r,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return t?a.createElement(b,o(o({ref:n},u),{},{components:t})):a.createElement(b,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(34334);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),r=t(67294),l=t(34334),o=t(72389),i=t(67392),s=t(7094),c=t(12466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var n;const{lazy:t,block:o,defaultValue:m,values:d,groupId:b,className:k}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,i.l)(v,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:N}=(0,s.U)(),[T,w]=(0,r.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,c.o5)();if(null!=b){const e=g[b];null!=e&&e!==T&&v.some((n=>n.value===e))&&w(e)}const O=e=>{const n=e.currentTarget,t=x.indexOf(n),a=v[t].value;a!==T&&(j(n),w(a),null!=b&&N(b,String(a)))},_=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=x.indexOf(e.currentTarget)+1;t=x[n]??x[0];break}case"ArrowLeft":{const n=x.indexOf(e.currentTarget)-1;t=x[n]??x[x.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},v.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>x.push(e),onKeyDown:_,onFocus:O,onClick:O},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function d(e){const n=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},88013:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=t(83117),r=(t(67294),t(3905)),l=t(65488),o=t(85162);const i={sidebar_position:1,title:"1. \u57fa\u672c\u67e5\u8be2"},s=void 0,c={unversionedId:"showcase/base",id:"showcase/base",title:"1. \u57fa\u672c\u67e5\u8be2",description:"Jimmer\u4e2d\u6709\u4e24\u4e2a\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/base.mdx",sourceDirName:"showcase",slug:"/showcase/base",permalink:"/jimmer-doc/zh/docs/showcase/base",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/base.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"1. \u57fa\u672c\u67e5\u8be2"},sidebar:"tutorialSidebar",previous:{title:"\u6848\u4f8b\u5c55\u793a \u2605",permalink:"/jimmer-doc/zh/docs/showcase/"},next:{title:"2. \u6293\u53d6\u5173\u8054",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/"}},u={},p=[{value:"\u67e5\u8be2\u591a\u5217",id:"\u67e5\u8be2\u591a\u5217",level:2},{value:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027",id:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027",level:2},{value:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005",id:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005",level:2}],m={toc:p};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer\u4e2d\u6709\u4e24\u4e2a\u6982\u5ff5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u591a\u5217"),(0,r.kt)("li",{parentName:"ul"},"\u67e5\u8be2\u4e00\u4e2a\u5bf9\u8c61\u5217\uff0c\u5e76\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027")),(0,r.kt)("p",null,"\u5b83\u4eec\u662f\u5b8c\u5168\u4e0d\u540c\u7684\u6982\u5ff5"),(0,r.kt)("h2",{id:"\u67e5\u8be2\u591a\u5217"},"\u67e5\u8be2\u591a\u5217"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Tuple3<Long, String, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.id(),\n        table.name(),\n        table.edition()\n    )\n    .execute();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.id,\n            table.name,\n            table.edtion\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u5728Jimmer\u4e2d\uff0c\u9664\u4e86\u53ea\u8fd4\u56de\u4e00\u5217\u7684\u67e5\u8be2\u5916\uff0c\u5176\u4ed6\u90fd\u662f\u591a\u5217\u67e5\u8be2\u3002\u8fd9\u4e2a\u4f8b\u5b50\u67e5\u8be2\u4e86\u4e09\u5217\uff0c\u6545\u8fd4\u56de\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Tuple3<T1, T2, T3>"),"\u3002"),(0,r.kt)("p",null,"\u7b49\u5230\u5982\u4e0b\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "_1" : 12,\n        "_2" : "GraphQL in Action",\n        "_3" : 3\n    }, {\n        "_1" : 11,\n        "_2" : "GraphQL in Action",\n        "_3" : 2\n    }, {\n        "_1" : 10,\n        "_2" : "GraphQL in Action",\n        "_3" : 1\n    }\n]\n')),(0,r.kt)("h2",{id:"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027"},"\u6307\u5b9a\u88ab\u67e5\u8be2\u5bf9\u8c61\u7684\u591a\u4e2a\u5c5e\u6027"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookTableFetcher.$\n                // `id()`\u662f\u9690\u542b\u7684\uff0c\u603b\u662f\u88ab\u67e5\u8be2\n                .name()\n                .edition()\n        )\n    )\n    .execute();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                // `id()`\u662f\u9690\u542b\u7684\uff0c\u603b\u662f\u88ab\u67e5\u8be2\n                name()\n                edition()\n            }\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u7b49\u5230\u5982\u4e0b\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id" : 12,\n        "name" : "GraphQL in Action",\n        "edition" : 3\n    }, \n    {\n        "id" : 11,\n        "name" : "GraphQL in Action",\n        "edition" : 2\n    }, \n    {\n        "id" : 10,\n        "name" : "GraphQL in Action",\n        "edition" : 1\n    } \n]\n')),(0,r.kt)("p",null,"\u4e0d\u96be\u770b\u51fa\uff0c\u867d\u7136\u8fd9\u4e2a\u67e5\u8be2\u53ea\u6709\u4e00\u5217\uff0c\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u7cbe\u786e\u5730\u63a7\u5236\u8fd9\u4e2a\u5bf9\u8c61\u7684\u683c\u5f0f\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5e76\u6ca1\u6709\u67e5\u8be2\u51faBook\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027 ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"price"),"\u548c\u591a\u5bf9\u4e00\u5173\u8054",(0,r.kt)("inlineCode",{parentName:"em"},"store"),"\u672a\u88ab\u67e5\u8be2)"),"\uff0c\u7531\u4e8eJimmer\u5b9e\u4f53\u5bf9\u8c61",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u6267\u884c\u52a8\u6001\u7279\u6027\uff0c\u5bf9\u8c61\u88ab\u67e5\u8be2\u5c5e\u6027\u7684\u591a\u6216\u5c11\u4e0d\u4f1a\u5f71\u54cd\u8fd4\u56de\u7c7b\u578b\uff0c\u4e00\u5f8b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u7c7b\u578b\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Jimmer\u5b9e\u4f53\u5bf9\u8c61\u5177\u5907\u52a8\u6001\u6027\uff0c\u53ef\u4ee5\u7528\u7edf\u4e00\u7684\u7c7b\u578b\u8868\u8fbe\u4efb\u610f\u683c\u5f0f\u7684\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0cJimmer\u4e0b\u4e0d\u9700\u8981\u4f7f\u7528\u591a\u5217\u67e5\u8be2\u6765\u63a7\u5236\u8fd4\u56de\u683c\u5f0f\uff0c\u6211\u4eec\u66f4\u5e94\u8be5\u4f7f\u7528\u5355\u5217\u67e5\u8be2\u8fd4\u56de\u4e00\u5217\u5bf9\u8c61\uff0c\u5e76\u7075\u6d3b\u63a7\u5236\u5bf9\u8c61\u683c\u5f0f\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4f1a\u5bfc\u81f4Jimmer\u5f88\u5c11\u4f7f\u7528\u57fa\u4e8e\u5143\u7ec4\u7684\u591a\u5217\u67e5\u8be2\uff0c\u66f4\u52a0\u9762\u5411\u5bf9\u8c61\u3002")),(0,r.kt)("h2",{id:"\u7efc\u5408\u5e94\u7528\u4e8c\u8005"},"\u7efc\u5408\u5e94\u7528\u4e8c\u8005"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Tuple2<Book, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("GraphQL in Action"))\n    .orderBy(table.edition().desc())\n    .select(\n            table.fetch(\n                    BookFetcher.$\n                            .allScalarFields()\n            ),\n            Expression.numeric().sql(\n                    Integer.class,\n                    "row_number() over(partition by %e order by %e desc)",\n                    new Expression<?>[] { table.storeId(), table.price() }\n            )\n    )\n    .execute();\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Book::class) {\n        where(table.name eq "GraphQL in Action")\n        orderBy(table.edition.desc())\n        .select(\n            table.fetchBy {\n                allScalarFields()\n            },\n            sql(Int::class, "row_number() over(partition by %e order by %e desc)") {\n                expression(table.storeId)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "_1":{\n            "id":12,\n            "name":"GraphQL in Action",\n            "edition":3,\n            "price":80\n        },\n        "_2":3\n    },\n    {\n        "_1":{\n            "id":11,\n            "name":"GraphQL in Action",\n            "edition":2,\n            "price":81\n        },\n        "_2":2\n    },\n    {\n        "_1":{\n            "id":10,\n            "name":"GraphQL in Action",\n            "edition":1,\n            "price":82\n        },\n        "_2":1\n    }\n]\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u67e5\u8be2\u7c7b\u4e24\u5217"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u5217\u4e3a\u5bf9\u8c61\u7c7b\u578b\uff0c\u5bf9\u8c61\u683c\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"allScalarFields"),(0,r.kt)("em",{parentName:"p"},"(\u5305\u542b\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u5217\u662f\u4e00\u4e2aNative SQL\u8868\u8fbe\u5f0f\uff0c\u8c03\u7528\u5e95\u5c42\u6570\u636e\u5e93\u7684\u5206\u6790\u51fd\u6570 ",(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("inlineCode",{parentName:"em"},"%e"),"\u8868\u793a\u7528\u4e3aNative SQL\u4ee3\u7801\u690d\u5165DSL\u8868\u8fbe\u5f0f)")))),(0,r.kt)("p",null,"\u5f88\u660e\u663e\u8fd9\u662f\u4e8c\u8005\u7684\u7efc\u5408\u8fd0\u7528\u3002"))}d.isMDXComponent=!0}}]);