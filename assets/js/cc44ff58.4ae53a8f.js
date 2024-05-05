"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4507],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),o=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:n,block:i,defaultValue:p,values:d,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,o.l)(k,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:_,setTabGroupChoices:N}=(0,s.U)(),[v,T]=(0,r.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=b){const e=_[b];null!=e&&e!==v&&k.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=O.indexOf(t),a=k[n].value;a!==v&&(E(t),T(a),null!=b&&N(b,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function d(e){const t=(0,i.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},38253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),i=n(85162);const o={sidebar_position:5,title:"Implicit Subquery"},s=void 0,u={unversionedId:"query/implicit-subquery",id:"query/implicit-subquery",title:"Implicit Subquery",description:"Collection (one-to-many or many-to-many) associations often lead to the frequent use of subqueries in queries, and implicit subqueries greatly simplify such subqueries.",source:"@site/docs/query/implicit-subquery.mdx",sourceDirName:"query",slug:"/query/implicit-subquery",permalink:"/jimmer-doc/docs/query/implicit-subquery",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/implicit-subquery.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Implicit Subquery"},sidebar:"tutorialSidebar",previous:{title:"Join Features Specific to Kotlin",permalink:"/jimmer-doc/docs/query/dynamic-join/kotlin-join"},next:{title:"Dynamic Ordering",permalink:"/jimmer-doc/docs/query/dynamic-order"}},c={},m=[{value:"DSL Code generated by Jimmer",id:"dsl-code-generated-by-jimmer",level:2},{value:"Demo",id:"demo",level:2},{value:"Automatic Merge",id:"automatic-merge",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Collection ",(0,r.kt)("em",{parentName:"p"},"(one-to-many or many-to-many)")," associations often lead to the frequent use of subqueries in queries, and implicit subqueries greatly simplify such subqueries. "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For complete normal subqueries, see ",(0,r.kt)("a",{parentName:"p",href:"./sub-query"},"Normal Subqueries"),".")),(0,r.kt)("h2",{id:"dsl-code-generated-by-jimmer"},"DSL Code generated by Jimmer"),(0,r.kt)("p",null,"Taking the many-to-many association ",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors")," as an example, after compilation, Jimmer will generate the following code:"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookTable.java"',title:'"BookTable.java"'},"@GeneratedBy(type = Book.class)\npublic class BookTable extends AbstractTypedTable<Book> implements BookProps {\n\n    @Override\n    // highlight-next-line  \n    public Predicate authors(Function<AuthorTableEx, Predicate> block) {\n        ...implementation logic omitted...  \n    }\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\nfun KProps<Book>.authors(\n    block: KNonNullTableEx<Author>.() -> KNonNullExpression<Boolean>?  \n): KNonNullExpression<Boolean>? = ...implementation logic omitted...\n")))),(0,r.kt)("p",null,"Users can build implicit subqueries based on this ",(0,r.kt)("inlineCode",{parentName:"p"},"authors")," method.  "),(0,r.kt)("p",null,"The parameter of this method is a lambda expression whose parameter is the table object of the associated object. Users can return an SQL condition to filter the associated object."),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;\n\npublic List<Book> findBooks(@Nullable String authorName) {\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n                authorName != null && !authorName.isEmpty(),\n                // highlight-next-line\n                table.authors(author -> {\n                    return Predicate.or(\n                            author.firstName().ilike(authorName),\n                            author.lastName().ilike(authorName)\n                    );\n                })\n        )\n        .select(table)\n        .execute();\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(authorName: String?): List<BookStore> =\n    sqlClient.createQuery(Book::class) {\n        authorName?.takeIf { it.isNotEmpty() }?.let {\n            // highlight-next-line\n            where += table.authors {\n                or(\n                    firstName ilike it,\n                    lastName ilike it\n                )\n            }\n        }\n    }.execute() \n")))),(0,r.kt)("p",null,"When calling the above method and specifying a non-null parameter, for example ",(0,r.kt)("inlineCode",{parentName:"p"},'findBooks("alex")'),", the generated SQL is:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID,\n    tb_1_.CREATED_TIME,  \n    tb_1_.MODIFIED_TIME,\n    tb_1_.TENANT,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_  \nwhere\n    exists( \u278a\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_\n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where\n                tb_3_.BOOK_ID = tb_1_.ID \u278b\n            and\n                (\n                    lower(tb_2_.FIRST_NAME) like ? /* %alex% */ \u278c\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %alex% */ \u278d\n                )\n    )  \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u278a Implicit subqueries always use ",(0,r.kt)("inlineCode",{parentName:"p"},"exists"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u278b The SQL condition auto-generated by Jimmer for associating parent-child queries  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u278c \u278d Conditions specified by users to filter associated objects  "))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The association condition between parent-child queries is auto-generated. Users only need to specify the filtering condition for the associated object. This is the fundamental difference between implicit subqueries and ",(0,r.kt)("a",{parentName:"p",href:"./sub-query"},"normal subqueries"),".")),(0,r.kt)("h2",{id:"automatic-merge"},"Automatic Merge"),(0,r.kt)("p",null,"Similar to the ",(0,r.kt)("a",{parentName:"p",href:"dynamic-join/merge"},"automatic merge of dynamic JOINs"),", multiple implicit subqueries for the same association can also be automatically merged.   "),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The merge rules for implicit subqueries are not as universal as dynamic JOINs. They are limited to within the same and, or, or not.  ")),(0,r.kt)("p",null,"For example:"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"BookTable table = Tables.BOOK_TABLE;  \n\npublic List<Book> findBooks(\n    @Nullable String authorName,\n    @Nullable Gender authorGender  \n) {\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            authorName != null && !authorName.isEmpty(),\n            // highlight-next-line\n            table.authors(author -> {\n                return Predicate.or(  \n                        author.firstName().ilike(authorName),\n                        author.lastName().ilike(authorName)\n                );\n            })  \n        )  \n        .whereIf(\n            authorGender != null,\n            // highlight-next-line\n            table.authors(author -> author.gender().eq(authorGender))\n        )  \n        .select(table)\n        .execute();  \n} \n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun findBooks(authorName: String?): List<BookStore> =  \n    sqlClient.createQuery(Book::class) {  \n        authorName?.takeIf { it.isNotEmpty() }?.let {  \n            // highlight-next-line\n            where += table.authors {  \n                or(  \n                    firstName ilike it,  \n                    lastName ilike it\n                )  \n            }  \n        }\n        authorGender?.let {  \n            // highlight-next-line\n            where += table.authors {\n                gender like it  \n            }\n        }  \n    }.execute()  \n")))),(0,r.kt)("p",null,"The above example uses two implicit subqueries.  "),(0,r.kt)("p",null,"However, when we specify both parameters as non-null, for example ",(0,r.kt)("inlineCode",{parentName:"p"},'findBooks("alex", Gender.MALE)'),", there will only be one subquery in the final SQL, as follows:  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select\n    tb_1_.ID, \n    tb_1_.CREATED_TIME,\n    tb_1_.MODIFIED_TIME,\n    tb_1_.TENANT,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID  \nfrom BOOK tb_1_  \nwhere\n    // Merge two implicit subqueries to one real sub query\n    // highlight-next-line  \n    exists(\n        select\n            1\n        from AUTHOR tb_2_\n        inner join BOOK_AUTHOR_MAPPING tb_3_  \n            on tb_2_.ID = tb_3_.AUTHOR_ID\n        where  \n                tb_3_.BOOK_ID = tb_1_.ID  \n            and  \n                (  \n                    lower(tb_2_.FIRST_NAME) like ? /* %alex% */\n                or\n                    lower(tb_2_.LAST_NAME) like ? /* %alex% */\n                )\n            and  \n                tb_2_.GENDER = ? /* M */  \n    )  \n")),(0,r.kt)("p",null,"This is because within the same and, or or not, multiple implicit subqueries for the same association are automatically merged."))}d.isMDXComponent=!0}}]);