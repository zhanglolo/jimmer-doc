"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,b=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(b,i(i({ref:t},p),{},{components:n})):a.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:d,groupId:b,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,o.l)(k,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:x}=(0,s.U)(),[N,E]=(0,r.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&k.some((t=>t.value===e))&&E(e)}const q=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==N&&(_(t),E(a),null!=b&&x(b,String(a)))},w=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:w,onFocus:q,onClick:q},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},7031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:10,title:"Native SQL Expressions"},s=void 0,u={unversionedId:"query/native-sql",id:"query/native-sql",title:"Native SQL Expressions",description:"Native SQL expressions are an important feature to leverage database-specific capabilities, as database products always have proprietary features.",source:"@site/docs/query/native-sql.mdx",sourceDirName:"query",slug:"/query/native-sql",permalink:"/jimmer-doc/docs/query/native-sql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/native-sql.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Native SQL Expressions"},sidebar:"tutorialSidebar",previous:{title:"DSL Expressions",permalink:"/jimmer-doc/docs/query/expression"},next:{title:"Subqueries",permalink:"/jimmer-doc/docs/query/sub-query"}},p={},c=[{value:"Example 1: Regular Expression Matching",id:"example-1-regular-expression-matching",level:2},{value:"Example 2: Analytic Functions",id:"example-2-analytic-functions",level:2}],m={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Native SQL expressions are an important feature to leverage database-specific capabilities, as database products always have proprietary features."),(0,r.kt)("h2",{id:"example-1-regular-expression-matching"},"Example 1: Regular Expression Matching"),(0,r.kt)("p",null,"This example shows how to use regular expression matching in Oracle and HSQLDB:"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AuthorTable table = Tables.AUTHOR_TABLE;\n\nList<Author> authors = sqlClient\n    .createQuery(table)\n    .where(\n        Predicate.sql(\n            "regexp_like(%e, %v)", \n            it -> it\n                .expression(table.firstName())\n                .value("^Ste(v|ph)en$")\n        )\n    )\n    .select(table)\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val authors = sqlClient\n    .createQuery(Author::class) {\n        where(\n            // highlight-next-line\n            sql(Boolean::class, "regexp_like(%e, %v)") {\n                expression(table.firstName)\n                value("^Ste(v|ph)en$")\n            }\n        )\n        select(table)\n    }\n    .execute() \n')))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In the Java code, ",(0,r.kt)("inlineCode",{parentName:"p"},"Predicate.sql")," is called to create a query condition based on native SQL. In fact, other expression types also support native SQL expressions. There are 5 ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," functions:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Predicate.sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.string().sql(...) "),(0,r.kt)("li",{parentName:"ol"},"Expression.numeric().sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.comparable().sql(...)"),(0,r.kt)("li",{parentName:"ol"},"Expression.any().sql(...)")),(0,r.kt)("p",{parentName:"admonition"},"Kotlin does not have this issue, its API is unified.")),(0,r.kt)("p",null,"The first parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"sql(...)")," is the SQL template string, which can contain special symbols ",(0,r.kt)("inlineCode",{parentName:"p"},"%e")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"%v"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%e"),": Expression, to embed an expression"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%v"),": Value, to embed a value")),(0,r.kt)("p",null,"The second parameter of ",(0,r.kt)("inlineCode",{parentName:"p"},"sql(...)")," is optional, a lambda expression whose parameter is an object supporting two methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"expression(Expression<?>)"),": Embed an expression, corresponding to ",(0,r.kt)("inlineCode",{parentName:"li"},"%e")," in SQL template."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value(Object)"),": Embed a value, corresponding to ",(0,r.kt)("inlineCode",{parentName:"li"},"%v")," in SQL template.")),(0,r.kt)("p",null,"The final generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.FIRST_NAME,\n    tb_1_.LAST_NAME, \n    tb_1_.GENDER\nfrom AUTHOR as tb_1_  \nwhere\n    /* highlight-next-line */\n    regexp_like(tb_1_.FIRST_NAME, ?) \n")),(0,r.kt)("h2",{id:"example-2-analytic-functions"},"Example 2: Analytic Functions"),(0,r.kt)("p",null,"Let's look at another example using analytic functions:"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<Tuple3<Book, Integer, Integer>> tuples = sqlClient\n    .createQuery(table)\n    .select(\n        table,\n        Expression.numeric().sql(\n            Integer.class,\n            // highlight-next-line\n            "rank() over(order by %e desc)",\n            table.price()\n        ),\n        Expression.numeric().sql(\n            Integer.class,\n            // highlight-next-line\n            "rank() over(partition by %e order by %e desc)",\n            new Expression[] { table.storeId(), table.price() }\n        )\n    )\n    .execute();\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val tuples = sqlClient\n    .createQuery(Author::class) {\n        select(\n            table,\n            // highlight-next-line\n            sql(Int::class, "rank() over(order by %e desc)") {\n                expression(table.price)\n            },\n            // highlight-next-line\n            sql("rank() over(partition by %e order by %e desc)") {\n                expression(table.store.id)\n                expression(table.price)\n            }\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"Three columns are queried here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First column: Book object"),(0,r.kt)("li",{parentName:"ul"},"Second column: The rank of the book price among all books"),(0,r.kt)("li",{parentName:"ul"},"Third column: The rank of the book price within its store")),(0,r.kt)("p",null,"The generated SQL is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID,\n    /* highlight-next-line */\n    rank() over(\n        order by tb_1_.PRICE desc\n    ),\n    /* highlight-next-line */ \n    rank() over(\n        partition by tb_1_.STORE_ID\n        order by tb_1_.PRICE desc \n    )\nfrom BOOK tb_1_\n")))}d.isMDXComponent=!0}}]);