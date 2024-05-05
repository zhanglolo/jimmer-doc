"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9481],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>c});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=n.createContext({}),p=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=p(e.components);return n.createElement(m.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,k=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return t?n.createElement(k,r(r({ref:a},s),{},{components:t})):n.createElement(k,r({ref:a},s))}));function c(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var l=t.length,r=new Array(l);r[0]=d;var o={};for(var m in a)hasOwnProperty.call(a,m)&&(o[m]=a[m]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(67294),i=t(34334);const l="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>c});var n=t(83117),i=t(67294),l=t(34334),r=t(72389),o=t(67392),m=t(7094),p=t(12466);const s="tabList__CuJ",u="tabItem_LNqP";function d(e){var a;const{lazy:t,block:r,defaultValue:d,values:c,groupId:k,className:N}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),y=(0,o.l)(b,((e,a)=>e.value===a.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:v}=(0,m.U)(),[C,_]=(0,i.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=k){const e=h[k];null!=e&&e!==C&&b.some((a=>a.value===e))&&_(e)}const T=e=>{const a=e.currentTarget,t=S.indexOf(a),n=b[t].value;n!==C&&(E(a),_(n),null!=k&&v(k,String(n)))},w=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}null==(a=t)||a.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",s)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},N)},b.map((e=>{let{value:a,label:t,attributes:r}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:C===a?0:-1,"aria-selected":C===a,key:a,ref:e=>S.push(e),onKeyDown:w,onFocus:T,onClick:T},r,{className:(0,l.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===a})}),t??a)}))),t?(0,i.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==C})))))}function c(e){const a=(0,r.Z)();return i.createElement(d,(0,n.Z)({key:String(a)},e))}},13266:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>m,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=t(83117),i=(t(67294),t(3905)),l=t(65488),r=t(85162);const o={sidebar_position:4,title:"Naming Strategy"},m=void 0,p={unversionedId:"mapping/base/naming-strategy",id:"mapping/base/naming-strategy",title:"Naming Strategy",description:"Naming Strategy Interface",source:"@site/docs/mapping/base/naming-strategy.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/naming-strategy",permalink:"/jimmer-doc/docs/mapping/base/naming-strategy",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/naming-strategy.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Naming Strategy"},sidebar:"tutorialSidebar",previous:{title:"Many To Many",permalink:"/jimmer-doc/docs/mapping/base/association/many-to-many"},next:{title:"Real and Fake Foreign Keys",permalink:"/jimmer-doc/docs/mapping/base/foreignkey"}},s={},u=[{value:"Naming Strategy Interface",id:"naming-strategy-interface",level:2},{value:"Default Naming Strategy",id:"default-naming-strategy",level:2},{value:"UPPER_CASE",id:"upper_case",level:3},{value:"LOWER_CASE",id:"lower_case",level:3},{value:"Override Strategy",id:"override-strategy",level:2},{value:"When using SpringBoot",id:"when-using-springboot",level:3},{value:"When not using SpringBoot",id:"when-not-using-springboot",level:3}],d={toc:u};function c(e){let{components:a,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"naming-strategy-interface"},"Naming Strategy Interface"),(0,i.kt)("p",null,"In previous chapters, we have introduced simple entity mapping and association mapping ",(0,i.kt)("em",{parentName:"p"},"(one-to-one, many-to-one, one-to-many, many-to-many)"),". From these contents, we understand that"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'@Table(name = "...")')," can be used to explicitly specify the table name for an entity.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'@GeneratedValue(..., sequenceName = "...")')," can be used to explicitly specify the sequence name required to generate the id ",(0,i.kt)("em",{parentName:"p"},"(if using sequence generation strategy)"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'@Column(name = "...")')," can be used to explicitly specify the column name for ordinary columns.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'@JoinColumn(name = "...")')," can be used to explicitly specify the column name for foreign key columns.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},'@JoinTable(name = "...")')," can be used to explicitly specify the join table name and all its column names for association properties based on join tables."))),(0,i.kt)("p",null,"However, in order to improve development efficiency, it is impossible to use these annotations too much. In most cases, the default name deduction behavior should work, and these annotations should only be used in code in a few cases."),(0,i.kt)("p",null,"For a given class or property, how to automatically determine the identifier name in the database if the user ",(0,i.kt)("strong",{parentName:"p"},"does not")," use such annotations is called the naming strategy, which is a customizable Java interface:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.sql.meta;\n\nimport org.babyfish.jimmer.meta.ImmutableProp;\nimport org.babyfish.jimmer.meta.ImmutableType;\n\npublic interface DatabaseNamingStrategy {\n\n    String tableName(ImmutableType type);\n\n    String sequenceName(ImmutableType type);\n\n    String columnName(ImmutableProp prop);\n\n    String foreignKeyColumnName(ImmutableProp prop);\n\n    String middleTableName(ImmutableProp prop);\n\n    String middleTableBackRefColumnName(ImmutableProp prop);\n\n    String middleTableTargetRefColumnName(ImmutableProp prop);\n}\n")),(0,i.kt)("p",null,"Among them, ",(0,i.kt)("inlineCode",{parentName:"p"},"ImmutableType")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ImmutableProp")," are the types used by Jimmer metadata and can be intuitively understood by analogy with ",(0,i.kt)("inlineCode",{parentName:"p"},"Class")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Field")," in JVM reflection API."),(0,i.kt)("p",null,"The role of each method is:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tableName: Given an entity type, what is its table name?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sequenceName: Given an entity type whose ID growth strategy is sequence, what is its sequence name?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"columnName: Given a non-associative property, what is its column name?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"foreignKeyColumnName: Given an association property based on foreign key, what is its column name? ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableName: Given an association property based on join table, what is its join table name?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableBackRefColumnName: Given an association property based on join table, what is the column name of the foreign key pointing to the current entity in the join table?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableTargetRefColumnName: Given an association property based on join table, what is the column name of the foreign key pointing to the associated entity in the join table?"))),(0,i.kt)("h2",{id:"default-naming-strategy"},"Default Naming Strategy"),(0,i.kt)("p",null,"In most cases, developers do not need to implement this interface directly. Jimmer's built-in ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.runtime.DefaultDatabaseNamingStrategy")," class already implements this interface."),(0,i.kt)("p",null,"The DefaultDatabaseNamingStrategy class has two static fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"UPPER_CASE: "),(0,i.kt)("p",{parentName:"li"},"The generated database identifier names are all uppercase."),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If the user does not do any configuration, this is the default naming strategy for Jimmer."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LOWER_CASE:"),(0,i.kt)("p",{parentName:"li"},"The generated database identifier names are all lowercase."),(0,i.kt)("p",{parentName:"li"},"Some databases, such as MySQL, can be configured for case sensitivity. So it is very likely that you will be handling a MySQL database that is configured to be case sensitive with most table and column names in lowercase. In this case, you need to override the default strategy with this strategy."))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Even if neither ",(0,i.kt)("inlineCode",{parentName:"p"},"UPPER_CASE")," nor ",(0,i.kt)("inlineCode",{parentName:"p"},"LOWER_CASE")," meets your requirements and you need to implement your own strategy, you can also consider inheriting this default strategy instead of implementing from scratch. ")),(0,i.kt)("p",null,"Before introducing the behavior of the default strategy, let's first introduce a character transformation rule: snake case. "),(0,i.kt)("p",null,"The so-called snake case refers to converting alternating case text into underscore-concatenated text, e.g. the snake case of class name ",(0,i.kt)("inlineCode",{parentName:"p"},"BookStore")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),", and the snake case of property name ",(0,i.kt)("inlineCode",{parentName:"p"},"firstName")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"FIRST_NAME"),"."),(0,i.kt)("p",null,"Considering case issues, we define two functions ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake")," with the following behaviors:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'u_snake("BookStore")'),' -> "BOOK_STORE"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'l_snake("BookStore")'),' -> "book_store" '),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'u_snake("firstName")'),' -> "FIRST_NAME"'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'l_snake("firstName")'),' -> "first_name"')),(0,i.kt)("p",null,"With the conventions of ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake"),", it is easy to describe the behavior of ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultDatabaseNamingStrategy"),": "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"ClassName below refers to the SimpleName of the Java class, not the QualifiedName.")),(0,i.kt)("h3",{id:"upper_case"},"UPPER_CASE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tableName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)")),(0,i.kt)("p",{parentName:"li"},"Example: BookStore -> BOOK_STORE")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sequenceName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)"),"_ID_SEQ"),(0,i.kt)("p",{parentName:"li"},"Example: BookStore -> BOOK_STORE_ID_SEQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"columnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)")),(0,i.kt)("p",{parentName:"li"},"Example: firstName -> FIRST_NAME")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"foreignKeyColumnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)"),"_ID"),(0,i.kt)("p",{parentName:"li"},"Example: parentNode -> PARENT_NODE_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(SourceClassName)"),"_",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(TargetClassName)"),"_MAPPING"),(0,i.kt)("p",{parentName:"li"},"Example: Book::authors -> BOOK_AUTHOR_MAPPING")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableBackRefColumnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(SourceClassName)"),"_ID"),(0,i.kt)("p",{parentName:"li"},"Example: Book::authors -> BOOK_ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableTargetRefColumnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"u_snake(TargetClassName)"),"_ID"),(0,i.kt)("p",{parentName:"li"},"Example: Book::authors -> AUTHOR_ID"))),(0,i.kt)("h3",{id:"lower_case"},"LOWER_CASE"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"tableName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)")),(0,i.kt)("p",{parentName:"li"},"Example: BookStore -> book_store")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"sequenceName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)"),"_id_seq"),(0,i.kt)("p",{parentName:"li"},"Example: BookStore -> book_store_id_seq")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"columnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)")),(0,i.kt)("p",{parentName:"li"},"Example: firstName -> first_name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"foreignKeyColumnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)"),"_id"),(0,i.kt)("p",{parentName:"li"},"Example: parentNode -> parent_node_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(SourceClassName)"),"_",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(TargetClassName)"),"_mapping"),(0,i.kt)("p",{parentName:"li"},"Example: Book::authors -> book_author_mapping")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableBackRefColumnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(SourceClassName)"),"_id"),(0,i.kt)("p",{parentName:"li"},"Example: Book::authors -> book_id")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"middleTableTargetRefColumnName"),(0,i.kt)("p",{parentName:"li"},"Rule: ",(0,i.kt)("inlineCode",{parentName:"p"},"l_snake(TargetClassName)"),"_id"),(0,i.kt)("p",{parentName:"li"},"Example: Book::authors -> author_id"))),(0,i.kt)("h2",{id:"override-strategy"},"Override Strategy"),(0,i.kt)("p",null,"Now let's demonstrate how to override the default ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultDatabaseNamingStrategy.UPPER_CASE")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"DefaultDatabaseNamingStrategy.LOWER_CASE"),"."),(0,i.kt)("h3",{id:"when-using-springboot"},"When using SpringBoot"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic DatabaseNamingStrategy databaseNamingStrategy() {\n    // highlight-next-line  \n    return DefaultDatabaseNamingStrategy.LOWER_CASE; \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean  \nfun databaseNamingStrategy(): DatabaseNamingStrategy =\n    // highlight-next-line\n    DefaultDatabaseNamingStrategy.LOWER_CASE\n")))),(0,i.kt)("h3",{id:"when-not-using-springboot"},"When not using SpringBoot"),(0,i.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseNamingStrategy(\n        // highlight-next-line\n        DefaultDatabaseNamingStrategy.LOWER_CASE  \n    )\n    ...Omit other configurations...\n    .build();\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDatabaseNamingStrategy(\n        // highlight-next-line\n        DefaultDatabaseNamingStrategy.LOWER_CASE\n    )\n    ...Omit other configurations...\n}\n")))))}c.isMDXComponent=!0}}]);