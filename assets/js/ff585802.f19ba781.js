"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9857],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(t),c=l,N=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return t?a.createElement(N,r(r({ref:n},p),{},{components:t})):a.createElement(N,r({ref:n},p))}));function c(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var m=2;m<i;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),l=t(34334);const i="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),l=t(67294),i=t(34334),r=t(72389),o=t(67392),s=t(7094),m=t(12466);const p="tabList__CuJ",u="tabItem_LNqP";function d(e){var n;const{lazy:t,block:r,defaultValue:d,values:c,groupId:N,className:T}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??k.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),_=(0,o.l)(b,((e,n)=>e.value===n.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===d?d:d??(null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)??k[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:y}=(0,s.U)(),[O,P]=(0,l.useState)(g),I=[],{blockElementScrollPositionUntilNextRender:C}=(0,m.o5)();if(null!=N){const e=h[N];null!=e&&e!==O&&b.some((n=>n.value===e))&&P(e)}const S=e=>{const n=e.currentTarget,t=I.indexOf(n),a=b[t].value;a!==O&&(C(n),P(a),null!=N&&y(N,String(a)))},v=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},T)},b.map((e=>{let{value:n,label:t,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>I.push(e),onKeyDown:v,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":O===n})}),t??n)}))),t?(0,l.cloneElement)(k.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function c(e){const n=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(n)},e))}},23643:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>u});var a=t(83117),l=(t(67294),t(3905)),i=t(65488),r=t(85162);const o={sidebar_position:9,title:"Join Table Filter"},s=void 0,m={unversionedId:"mapping/advanced/join-table-filter",id:"mapping/advanced/join-table-filter",title:"Join Table Filter",description:"Two Scenarios",source:"@site/docs/mapping/advanced/join-table-filter.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-table-filter",permalink:"/jimmer-doc/docs/mapping/advanced/join-table-filter",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/advanced/join-table-filter.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Join Table Filter"},sidebar:"tutorialSidebar",previous:{title:"Non-Structural Mapping",permalink:"/jimmer-doc/docs/mapping/advanced/join-sql"},next:{title:"Key",permalink:"/jimmer-doc/docs/mapping/advanced/key"}},p={},u=[{value:"Two Scenarios",id:"two-scenarios",level:2},{value:"1. Multiple associations between same entity types",id:"1-multiple-associations-between-same-entity-types",level:3},{value:"2. Multiple associations between different entity types",id:"2-multiple-associations-between-different-entity-types",level:3},{value:"Mixing One-to-Many and Many-to-Many",id:"mixing-one-to-many-and-many-to-many",level:2},{value:"Define Associations",id:"define-associations",level:3},{value:"Conditional Indexes",id:"conditional-indexes",level:3}],d={toc:u};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"two-scenarios"},"Two Scenarios"),(0,l.kt)("p",null,"Jimmer supports join table filters, with two usage scenarios:"),(0,l.kt)("h3",{id:"1-multiple-associations-between-same-entity-types"},"1. Multiple associations between same entity types"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Shop {\n\n    @Id\n    long id();\n\n    String name();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    List<Customer> customers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    List<Customer> vipCustomers();\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    List<Customer> ordinaryCustomers();\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Shop {\n\n    @Id\n    val id: Long\n\n    val name: String\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        readonly = true\n    )\n    val customers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "VIP"\n        )\n    )\n    val vipCustomers: List<Customer>\n\n    @ManyToMany\n    @JoinTable(\n        name = "SHOP_CUSTOMER_MAPPING",\n        joinColumnName = "SHOP_ID",\n        inverseJoinColumnName = "CUSTOMER_ID",\n        // highlight-next-line\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "ORDINARY"\n        )\n    )\n    val ordinaryCustomers: List<Customer>\n}\n')))),(0,l.kt)("p",null,"In this example, ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.vipCustomers"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.ordinaryCustomers")," share the same join table"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table SHOP_CUSTOMER_MAPPING(\n    SHOP_ID bigint not null,\n    CUSTOMER_ID bigint not null,\n    MAPPING_TYPE varchar(8) not null\n);\n\n// Whether the primary key of the join table contains \n// the filter column depends on the specific case.  \n// In this example, a mapping between a `Shop` and `Customer`\n// cannot be both \"VIP\" and \"ORDINARY\" at the same time.\n// So the primary key does not contain `MAPPING_TYPE`.\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SHOP_ID, CUSTOMER_ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__SHOP\n        foreign key(SHOP_ID)\n            references SHOP(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__CUSTOMER\n        foreign key(CUSTOMER_ID)\n            references CUSTOMER(ID);\n\nalter table SHOP_CUSTOMER_MAPPING\n    add constraint fk_SHOP_CUSTOMER_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('VIP', 'ORDINARY'));\n")),(0,l.kt)("p",null,"The table stores data like below:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SHOP_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"CUSTOMER_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"MAPPING_TYPE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"3176"),(0,l.kt)("td",{parentName:"tr",align:null},"VIP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"1087"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"21"),(0,l.kt)("td",{parentName:"tr",align:null},"9155"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"8347"),(0,l.kt)("td",{parentName:"tr",align:null},"VIP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"4365"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"3478"),(0,l.kt)("td",{parentName:"tr",align:null},"ORDINARY")))),(0,l.kt)("p",null,"Where ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.vipCustomers")," corresponds to two rows, ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.ordinaryCustomers")," to four rows, and ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers")," can see all rows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Shop.customers = Shop.vipCustomers + Shop.ordinaryCustomers \n")),(0,l.kt)("p",null,"We can see that ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers")," is not a base association, but the union of other associations. Let's call it a union association.  "),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Union associations cannot be directly modified, so ",(0,l.kt)("inlineCode",{parentName:"p"},"readonly = true")," must be declared.  ")),(0,l.kt)("p",null,"Actually, the union association ",(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers")," has an equivalent alternative syntax:"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@ManyToMany\n@JoinTable(\n    ...other params omitted..., \n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class, \n        // highlight-next-line\n        values = {"VIP", "ORDINARY"}\n    )\n)\nList<Customer> customers();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ManyToMany\n@JoinTable(\n    ...other params omitted...,\n    filter = @JoinTable.JoinTableFilter(\n        columnName = "MAPPING_TYPE",\n        type = String.class, \n        // highlight-next-line \n        values = {"VIP", "ORDINARY"}\n    )  \n)\nval customers: List<Customer>\n')))),(0,l.kt)("p",null,"Finally, let's look at the difference in JOIN behavior between these three associations:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Shop.customers"),"  "),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table) \n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .customers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct()\n    .execute();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(  \n            table\n                .asTableEx()\n                // highlight-next-line\n                .customers\n                .name eq "Smith"\n        )\n        select(table.id()) \n    }\n    .distinct()\n    .execute();\n')))),(0,l.kt)("p",{parentName:"li"},"The generated SQL is:  "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct tb_1_.ID, tb_1_.NAME \nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_\n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID \ninner join CUSTOMER tb_3_\n    on tb_2_.CUSTOMER_ID = tb_3_.ID \nwhere tb_3_.NAME = ? /* Smith */\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Shop.vipCustomers"),"  "),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient\n    .create(table)\n    .where(\n        table\n            .asTableEx() \n            // highlight-next-line\n            .vipCustomers()\n            .name().eq("Smith")\n    )\n    .select(table.id())\n    .distinct() \n    .execute();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()\n                // highlight-next-line  \n                .vipCustomers\n                .name eq "Smith"\n        )\n        select(table.id())\n    }\n    .distinct()\n    .execute();\n')))),(0,l.kt)("p",{parentName:"li"},"The generated SQL is:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_\n    /* highlight-next-line */  \n    on tb_1_.ID = tb_2_.SHOP_ID\n    /* highlight-next-line */\n    and tb_2_.MAPPING_TYPE = ? /* VIP */ \nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_\n    on tb_2_.CUSTOMER_ID = tb_3_.ID \nwhere tb_3_.NAME = ? /* Smith */\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Shop.ordinaryCustomers")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ShopTable table = Tables.SHOP_TABLE;\n\nList<Long> shopIds = sqlClient \n    .create(table)\n    .where(\n        table\n            .asTableEx()\n            // highlight-next-line\n            .ordinaryCustomers()\n            .name().eq("Smith")\n    ) \n    .select(table.id())\n    .distinct()\n    .execute();\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val shopIds = sqlClient\n    .create(Shop::class) {\n        where(\n            table\n                .asTableEx()  \n                // highlight-next-line\n                .ordinaryCustomers\n                .name eq "Smith"\n        )\n        select(table.id()) \n    }\n    .distinct()\n    .execute();\n')))),(0,l.kt)("p",{parentName:"li"},"The generated SQL is:  "),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select distinct tb_1_.ID, tb_1_.NAME\nfrom SHOP tb_1_\ninner join SHOP_CUSTOMER_MAPPING tb_2_\n    /* highlight-next-line */\n    on tb_1_.ID = tb_2_.SHOP_ID \n    /* highlight-next-line */  \n    and tb_2_.MAPPING_TYPE = ? /* ORDINARY */\nand\n    tb_2_.type = ?\ninner join CUSTOMER tb_3_\n    on tb_2_.CUSTOMER_ID = tb_3_.ID\nwhere tb_3_.NAME = ? /* Smith */\n")))),(0,l.kt)("h3",{id:"2-multiple-associations-between-different-entity-types"},"2. Multiple associations between different entity types"),(0,l.kt)("p",null,"A common case is when a project has many kinds of data, and each kind of data can be tagged with multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"Tag"),"s.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Tag")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Tag {\n\n    @Id  \n    long id();\n\n    String name();\n\n    ...other properties omitted...\n}\n"))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface Tag {\n\n    @Id\n    val id: Long  \n\n    val name: String\n\n    ...other properties omitted...\n}\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"BookStore")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING", \n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE", \n        )\n    )\n    List<Tag> tags();\n    \n    ...other properties omitted...\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity  \ninterface BookStore {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID", \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK_STORE",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...other properties omitted...\n}\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Book")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",  \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "BOOK",\n        )\n    ) \n    List<Tag> tags();\n    \n    ...other properties omitted...\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",\n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class, \n            values = "BOOK",\n        )\n    )\n    val tags: List<Tag>\n    \n    ...other properties omitted...\n}\n'))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Author")),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID",  \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR", \n        )\n    )\n    List<Tag> tags();\n    \n    ...other properties omitted...\n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Author {\n\n    @ManyToMany\n    @JoinTable(\n        name = "SOURCE_TAG_MAPPING",\n        joinColumns = @joinColumn(\n            name = "SOURCE_ID", \n            foreignKeyType = ForeignKeyType.FAKE\n        ),\n        inverseJoinColumnName = "TAG_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "SOURCE_TYPE",\n            type = String.class,\n            values = "AUTHOR",\n        ) \n    )\n    val tags: List<Tag>\n    \n    ...other properties omitted...\n}\n')))))),(0,l.kt)("p",null,"For the join table ",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_TAG_MAPPING"),", although the foreign key ",(0,l.kt)("inlineCode",{parentName:"p"},"TAG_ID")," references the ",(0,l.kt)("inlineCode",{parentName:"p"},"TAG")," table,\nthe other foreign key ",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_ID")," does not have a fixed target - it could reference ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"AUTHOR"),".  "),(0,l.kt)("p",null,"Therefore we cannot add a foreign key constraint on ",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_ID"),".  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table SOURCE_TAG_MAPPING(\n    SOURCE_ID bigint not null,\n    TAG_ID bigint not null,\n    SOURCE_TYPE varchar(10) not null  \n);\n\n// Whether the primary key contains the filter column \n// depends on the specific case.\n// In this example, `SOURCE_ID` of different types could be equal, \n// so the primary key constraint needs to contain `SOURCE_TYPE`.\nalter table SOURCE_TAG_MAPPING\n    add constraint pk_SHOP_CUSTOMER_MAPPING\n        primary key(SOURCE_ID, TAG_ID, SOURCE_TYPE);  \n\n// highlight-next-line\n// `SOURCE_ID` could reference `BOOK_STORE`, `BOOK` or `AUTHOR`,\n// highlight-next-line \n// so we cannot add a foreign key constraint\n\nalter table SOURCE_TAG_MAPPING\n    add constraint fk_SOURCE_TAG_MAPPING__TAG\n        primary key(TAG_ID)\n            references TAG(ID);\n\nalter table SOURCE_TAG_MAPPING\n    add constraint ck_SOURCE_TAG_MAPPING__SOURCE_TYPE\n        check(SOURCE_TYPE in ('BOOK_STORE', 'BOOK', 'AUTHOR')); \n")),(0,l.kt)("p",null,"Since ",(0,l.kt)("inlineCode",{parentName:"p"},"SOURCE_ID")," cannot have a foreign key constraint, it is a ",(0,l.kt)("a",{parentName:"p",href:"../base/foreignkey"},"fake foreign key"),".\nThat's why in the code above:  "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@JoinTable(\n    joinColumns = @joinColumn(\n        name = "SOURCE_ID",\n        // highlight-next-line  \n        foreignKeyType = ForeignKeyType.FAKE\n    ), \n    ...other params omitted...\n)\n')),(0,l.kt)("p",null,"Sample data could look like:  "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SOURCE_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"TARGET_ID"),(0,l.kt)("th",{parentName:"tr",align:null},"SOURCE_TYPE"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"2"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK_STORE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"9"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK_STORE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"86"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"86"),(0,l.kt)("td",{parentName:"tr",align:null},"4"),(0,l.kt)("td",{parentName:"tr",align:null},"BOOK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"781"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"AUTHOR")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"781"),(0,l.kt)("td",{parentName:"tr",align:null},"3"),(0,l.kt)("td",{parentName:"tr",align:null},"AUTHOR")))),(0,l.kt)("h2",{id:"mixing-one-to-many-and-many-to-many"},"Mixing One-to-Many and Many-to-Many"),(0,l.kt)("p",null,"Both one-to-many and many-to-many can use join tables, so we can merge their join tables into one table. But please note:  "),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"It is strongly recommended to only use this pattern when the database supports conditional indexes.  "),(0,l.kt)("p",{parentName:"admonition"},"That is, do not use this pattern on databases without conditional index support like MySQL.  ")),(0,l.kt)("h3",{id:"define-associations"},"Define Associations"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID", \n        readonly = true\n    )\n    List<Author> authors();\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING", \n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        )\n    )  \n    Author primaryAuthor();\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class, \n            values = "SECONDARY"\n        )\n    )\n    List<Author> secondaryAuthors();\n\n    ...other properties omitted...  \n}\n'))),(0,l.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity  \ninterface Book {\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        readonly = true\n    )\n    val authors: List<Author>\n\n    @Nullable\n    @ManyToOne\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "PRIMARY"\n        ) \n    )\n    val primaryAuthor: Author?\n\n    @ManyToMany\n    @JoinTable(\n        name = "BOOK_AUTHOR_MAPPING",\n        joinColumnName = "BOOK_ID",\n        inverseJoinColumnName = "AUTHOR_ID",\n        filter = @JoinTable.JoinTableFilter(\n            columnName = "MAPPING_TYPE",\n            type = String.class,\n            values = "SECONDARY"  \n        )\n    )\n    val secondaryAuthors: List<Author>\n\n    ...other properties omitted...\n}\n')))),(0,l.kt)("p",null,"Clearly:  "),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"authors")," ",(0,l.kt)("em",{parentName:"p"},"(many-to-many)")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"primaryAuthor")," ",(0,l.kt)("em",{parentName:"p"},"(many-to-one)")," + ",(0,l.kt)("inlineCode",{parentName:"p"},"secondaryAuthors")," ",(0,l.kt)("em",{parentName:"p"},"(many-to-many)")),(0,l.kt)("h3",{id:"conditional-indexes"},"Conditional Indexes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table BOOK_AUTHOR_MAPPING(\n    BOOK_ID bigint not null,\n    AUTHOR_ID bigint not null,\n    MAPPING_TYPE varchar(9) not null  \n);\n\n// Whether the primary key contains the filter column depends on the specific case.\n// In this example, a mapping between an `Author` and a `Book`  \n// cannot be both \"PRIMARY\" and \"SECONDARY\" at the same time.\n// So the primary key constraint does not contain `MAPPING_TYPE`.\nalter table BOOK_AUTHOR_MAPPING\n    add constraint pk_BOOK_AUTHOR_MAPPING\n        primary key(BOOK_ID, AUTHOR_ID);  \n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(BOOK_ID)\n            references BOOK(ID);\n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint fk_BOOK_AUTHOR_MAPPING__BOOK\n        foreign key(AUTHOR_ID)\n            references AUTHOR(ID); \n\nalter table BOOK_AUTHOR_MAPPING\n    add constraint ck_BOOK_AUTHOR_MAPPING__MAPPING_TYPE\n        check(MAPPING_TYPE in ('PRIMARY', 'SECONDARY'));  \n\n// highlight-start\n// Syntax for conditional indexes may differ slightly between databases,  \n// here is an example in Postgres\ncreate unique index BOOK_AUTHOR_MAPPING__PRIMARY_INDEX\n    on BOOK_AUTHOR_MAPPING(AUTHOR_ID) \n    when MAPPING_TYPE = 'PRIMARY'; \n// highlight-end\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"when")," clause is very important, indicating this is a conditional index.  "),(0,l.kt)("p",null,"Syntax for conditional indexes may differ slightly between databases, here is an example in Postgres. See ",(0,l.kt)("a",{parentName:"p",href:"https://www.postgresql.org/docs/current/indexes-partial.html"},"https://www.postgresql.org/docs/current/indexes-partial.html")," for more details.  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"When ",(0,l.kt)("inlineCode",{parentName:"p"},"MAPPING_TYPE"),' is "PRIMARY", a unique index is added on the ',(0,l.kt)("inlineCode",{parentName:"p"},"AUTHOR_ID")," foreign key to ensure each ",(0,l.kt)("inlineCode",{parentName:"p"},"Book")," has maximum one primary ",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),".",(0,l.kt)("br",{parentName:"p"}),"\n","That is, to ensure ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.primaryAuthor")," is a many-to-one association.   ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Otherwise, there is no uniqueness constraint, so each ",(0,l.kt)("inlineCode",{parentName:"p"},"Book")," can have any number of secondary ",(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"s.",(0,l.kt)("br",{parentName:"p"}),"\n","That is, ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.secondaryAuthors")," remains a many-to-many association."))))}c.isMDXComponent=!0}}]);