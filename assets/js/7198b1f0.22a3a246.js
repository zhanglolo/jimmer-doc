"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=l,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),l=n(34334);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),l=n(67294),i=n(34334),r=n(72389),o=n(67392),s=n(7094),c=n(12466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:m,groupId:h,className:b}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,o.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,s.U)(),[T,O]=(0,l.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:x}=(0,c.o5)();if(null!=h){const e=y[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&O(e)}const j=e=>{const t=e.currentTarget,n=_.indexOf(t),a=g[n].value;a!==T&&(x(t),O(a),null!=h&&N(h,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>_.push(e),onKeyDown:E,onFocus:j,onClick:j},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,r.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},38162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(83117),l=(n(67294),n(3905)),i=n(65488),r=n(85162);const o={sidebar_position:2,title:"Ordinary Properties"},s=void 0,c={unversionedId:"query/object-fetcher/props",id:"query/object-fetcher/props",title:"Ordinary Properties",description:"Fetching Scalar Fields",source:"@site/docs/query/object-fetcher/props.mdx",sourceDirName:"query/object-fetcher",slug:"/query/object-fetcher/props",permalink:"/jimmer-doc/docs/query/object-fetcher/props",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/object-fetcher/props.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Ordinary Properties"},sidebar:"tutorialSidebar",previous:{title:"Basic Usage",permalink:"/jimmer-doc/docs/query/object-fetcher/usage"},next:{title:"Associations",permalink:"/jimmer-doc/docs/query/object-fetcher/association"}},p={},d=[{value:"Fetching Scalar Fields",id:"fetching-scalar-fields",level:2},{value:"Fetching Multiple Fields",id:"fetching-multiple-fields",level:2},{value:"Fetching All Scalar Fields",id:"fetching-all-scalar-fields",level:2},{value:"Negative Properties",id:"negative-properties",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"fetching-scalar-fields"},"Fetching Scalar Fields"),(0,l.kt)("p",null,"Scalar fields refer to all non-associative fields in a database table. Taking fetching the book name as an example:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"\nBookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            // highlight-next-line\n            Fetchers.BOOK_FETCHER.name()\n        )\n    )\n    .execute();\n\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy { \n                // highlight-next-line\n                name()\n            }\n        )\n    }\n    .execute()\n\n")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"For Java, the Annotation processor will automatically generate a Fetcher class for each entity interface, which is ",(0,l.kt)("inlineCode",{parentName:"p"},"BookFetcher")," in this example.")),(0,l.kt)("p",null,"The generated SQL is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    tb_1_.ID, \n    /* highlight-next-line */\n    tb_1_.NAME  \nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ?\n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"The Java code does not call the ",(0,l.kt)("inlineCode",{parentName:"p"},"id()")," method of BookFetcher, but we can see the SQL statement still queries the id property of the object."),(0,l.kt)("p",{parentName:"admonition"},"The id property is treated specially and will always be queried, not controlled by object fetchers. "),(0,l.kt)("p",{parentName:"admonition"},"In fact, the auto-generated BookFetcher class does not even have an ",(0,l.kt)("inlineCode",{parentName:"p"},"id()")," method, because it is not needed.")),(0,l.kt)("p",null,"The printed result is (original output is compact, formatted here for readability):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":3,\n        // highlight-next-line\n        "name":"Learning GraphQL"\n    },\n    ...Other objects omitted...  \n]\n')),(0,l.kt)("h2",{id:"fetching-multiple-fields"},"Fetching Multiple Fields"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n                // highlight-next-line\n                .name()\n                // highlight-next-line\n                .edition()\n        )\n    )\n    .execute();\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                // highlight-next-line\n                name()\n                // highlight-next-line\n                edition()\n            }\n        )\n    }\n    .execute()\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Object fetchers are immutable objects, each method call returns a new object fetcher. "),(0,l.kt)("p",{parentName:"admonition"},"In the ",(0,l.kt)("strong",{parentName:"p"},"Java")," code above:"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Fetchers.BOOK_FETCHER")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Fetchers.BOOK_FETCHER.name()"),"  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Fetchers.BOOK_FETCHER.name().edition()"))),(0,l.kt)("p",{parentName:"admonition"},"are three different object fetchers, each immutable."),(0,l.kt)("p",{parentName:"admonition"},"Object fetchers can be freely shared using static variables since they are immutable.")),(0,l.kt)("p",null,"The generated SQL is: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    /* highlight-next-line */  \n    tb_1_.NAME,\n    /* highlight-next-line */\n    tb_1_.EDITION   \nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ?\n")),(0,l.kt)("p",null,"The printed result is (original output is compact, formatted here for readability):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":3,\n        // highlight-next-line\n        "name":"Learning GraphQL",\n        // highlight-next-line\n        "edition":1\n    },\n    ...Other objects omitted...\n]\n')),(0,l.kt)("h2",{id:"fetching-all-scalar-fields"},"Fetching All Scalar Fields"),(0,l.kt)("p",null,"In some scenarios, fetching all non-associative fields is a very common operation, so ",(0,l.kt)("inlineCode",{parentName:"p"},"allScalarFields()")," is provided to load all non-associative fields."),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            // highlight-next-line\n            Fetchers.BOOK_FETCHER.allScalarFields()\n        )\n    )\n    .execute(); \n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                // highlight-next-line\n                allScalarFields()\n            }\n        )\n    }\n    .execute()\n")))),(0,l.kt)("p",null,"The generated SQL is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    // highlight-start \n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE \n    // highlight-end\nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ?\n")),(0,l.kt)("p",null,"The printed result is (original output is compact, formatted here for readability):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id":3,\n    // highlight-start\n    "name":"Learning GraphQL", \n    "edition":3,\n    "price":51.00\n    // highlight-end\n}\n// Other objects omitted\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"allScalarFields()")," only loads non-associative fields. In the example we can see it queries ",(0,l.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"edition"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"price"),", but does not query the association properties ",(0,l.kt)("inlineCode",{parentName:"p"},"store")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"authors"),". "),(0,l.kt)("p",{parentName:"admonition"},"Fetching association properties will be covered in ",(0,l.kt)("a",{parentName:"p",href:"./association"},"the next document"),".")),(0,l.kt)("h2",{id:"negative-properties"},"Negative Properties"),(0,l.kt)("p",null,"The previously discussed properties are positive properties that incrementally add fields to query. But in some cases, we only need to exclude some specific fields, while querying all other fields."),(0,l.kt)("p",null,"This is when negative properties can be used to exclude unneeded fields."),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookTable book = Tables.BOOK_TABLE;\n\nList<Book> books = sqlClient\n    .createQuery(book)\n    .select(\n        book.fetch(\n            Fetchers.BOOK_FETCHER\n            .allScalarFields()\n            // highlight-next-line\n            .edition(false)\n        )\n    )\n    .execute();\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.edition.eq(3))\n        select(\n            table.fetchBy {\n                allScalarFields()\n                // highlight-next-line\n                edition(false)\n            }\n        )\n    }\n    .execute()\n")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"edition(false)")," uses false as a parameter, making it a negative property."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The properties of ",(0,l.kt)("inlineCode",{parentName:"p"},"allScalarFields()")," are ",(0,l.kt)("inlineCode",{parentName:"p"},"id + name + edition + price"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"edition(false)")," means ",(0,l.kt)("inlineCode",{parentName:"p"},"-edition")))),(0,l.kt)("p",null,"So in combination, the finally fetched properties are ",(0,l.kt)("inlineCode",{parentName:"p"},"id + name + price")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"For positive properties, ",(0,l.kt)("inlineCode",{parentName:"li"},"edition()")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"edition(true)")," are equivalent"),(0,l.kt)("li",{parentName:"ul"},"When most properties need to be fetched and only a few excluded, using ",(0,l.kt)("inlineCode",{parentName:"li"},"allScalarFields")," with negative properties can be very useful"))),(0,l.kt)("p",null,"The generated SQL is:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.PRICE    \nfrom BOOK as tb_1_\nwhere tb_1_.EDITION = ? \n")),(0,l.kt)("p",null,"The printed result is (original output is compact, formatted here for readability):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "price":51.00\n        // `edition` is not here        \n    },\n    ...Other objects omitted...\n]\n')))}m.isMDXComponent=!0}}]);