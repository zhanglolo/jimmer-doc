"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||s[d]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),o=n(34334),i=n(72389),l=n(67392),p=n(7094),u=n(12466);const m="tabList__CuJ",s="tabItem_LNqP";function c(e){var t;const{lazy:n,block:i,defaultValue:c,values:d,groupId:k,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,p.U)(),[I,T]=(0,r.useState)(f),B=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==I&&v.some((t=>t.value===e))&&T(e)}const j=e=>{const t=e.currentTarget,n=B.indexOf(t),a=v[n].value;a!==I&&(O(t),T(a),null!=k&&N(k,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=B.indexOf(e.currentTarget)+1;n=B[t]??B[0];break}case"ArrowLeft":{const t=B.indexOf(e.currentTarget)-1;n=B[t]??B[B.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>B.push(e),onKeyDown:S,onFocus:j,onClick:j},i,{className:(0,o.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":I===t})}),n??t)}))),n?(0,r.cloneElement)(h.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function d(e){const t=(0,i.Z)();return r.createElement(c,(0,a.Z)({key:String(t)},e))}},12589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var a=n(83117),r=(n(67294),n(3905)),o=n(65488),i=n(85162);const l={sidebar_position:3,title:"Mutation"},p=void 0,u={unversionedId:"graphql/mutation",id:"graphql/mutation",title:"Mutation",description:"GraphQL Input\u4ecb\u7ecd",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/graphql/mutation.mdx",sourceDirName:"graphql",slug:"/graphql/mutation",permalink:"/jimmer-doc/zh/docs/graphql/mutation",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/graphql/mutation.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Mutation"},sidebar:"tutorialSidebar",previous:{title:"Query",permalink:"/jimmer-doc/zh/docs/graphql/query"},next:{title:"\u5bf9\u8c61\u7bc7",permalink:"/jimmer-doc/zh/docs/object/"}},m={},s=[{value:"GraphQL Input\u4ecb\u7ecd",id:"graphql-input\u4ecb\u7ecd",level:2},{value:"\u5b9a\u4e49Jimmer Input DTO",id:"\u5b9a\u4e49jimmer-input-dto",level:2},{value:"\u5b9e\u73b0GraphQL mutation",id:"\u5b9e\u73b0graphql-mutation",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"graphql-input\u4ecb\u7ecd"},"GraphQL Input\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5728GraphQL\u4e2d\uff0c\u67e5\u8be2\u8fd4\u56de\u7684GraphQLObject\uff0c\u5373\u4efb\u610f\u5f62\u72b6\u7684\u52a8\u6001\u5bf9\u8c61\uff1b\u7136\u800c\uff0c\u5982\u679c\u4fee\u6539\u64cd\u4f5c\u63a5\u53d7\u5bf9\u8c61\u53c2\u6570\uff0c\u5fc5\u987b\u662fGraphQLInput\uff0c\u5373\u56fa\u5b9a\u5f62\u72b6\u7684\u9759\u6001\u5bf9\u8c61\u3002"),(0,r.kt)("p",null,"\u53ef\u53c2\u8003",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/mutations-and-input-types/"},"GraphQLInput"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"),(0,r.kt)("p",null,"\u4ee5\u9644\u5e26\u4f8b\u5b50\u4e2d\u7684GraphQL\u58f0\u660e\u6587\u4ef6\u4e3a\u4f8b",(0,r.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer-examples/blob/main/java/jimmer-sql-graphql/service/src/main/resources/graphql/schema.graphqls"},"schema.graphqls")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"type Book implements CommonEntity { \u2776\n    id: Long!\n    name: String!\n    edition: Int!\n    price: BigDecimal!\n    store: BookStore\n    authors: [Author!]!\n    createdTime: LocalDateTime!\n    modifiedTime: LocalDateTime!\n    tenant: String!\n}\n\ninput BookInput { \u2777\n    id: Long\n    name: String!\n    edition: Int\n    price: BigDecimal!\n    storeId: Long\n    authorIds: [Long!]!\n}\n\n...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 ",(0,r.kt)("inlineCode",{parentName:"p"},"type"),"\u5173\u952e\u5b57\u58f0\u660e\u7684\u7c7b\u578b\u662f\u8868\u8fbe\u4efb\u610f\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u52a8\u6001\u7c7b\u578b\uff0c\u7528\u4f5cGraphQL\u7684\u8f93\u51fa\u7c7b\u578b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 ",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"\u5173\u952e\u5b57\u58f0\u660e\u7684\u7c7b\u578b\u662f\u8868\u8fbe\u56fa\u5b9a\u5f62\u72b6\u6570\u636e\u7ed3\u6784\u7684\u9759\u6001\u7c7b\u578b\uff0c\u7528\u4f5cGraphQL\u7684\u8f93\u5165\u7c7b\u578b"))),(0,r.kt)("h2",{id:"\u5b9a\u4e49jimmer-input-dto"},"\u5b9a\u4e49Jimmer Input DTO"),(0,r.kt)("p",null,"Jimmer\u7684Input DTO\u5728",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command/input-dto"},"\u4fdd\u5b58\u6307\u4ee4/InputDTO"),"\u4e2d\u6709\u975e\u5e38\u8be6\u7ec6\u7684\u4ecb\u7ecd\uff0c\u672c\u6587\u4e0d\u505a\u8d58\u8ff0\u3002"),(0,r.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e24\u79cd\u5b9a\u4e49Input DTO\u7684\u65b9\u5f0f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../object/view/dto-language"},"\u5229\u7528DTO\u8bed\u8a00\u81ea\u52a8\u751f\u6210Input DTO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../object/view/mapstruct"},"\u57fa\u4e8eMapStruct\u624b\u52a8\u5b9a\u4e49Input DTO"))),(0,r.kt)("p",null,"\u91c7\u7528DTO\u8bed\u8a00\u53ef\u4ee5\u975e\u5e38\u9ad8\u6548\u5730\u8fbe\u5230\u6211\u4eec\u7684\u76ee\u6807\uff0c\u6240\u4ee5\u672c\u6587\u91c7\u7528\u8fd9\u79cd\u65b9\u5f0f\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u5728\u5b9e\u4f53\u5b9a\u4e49\u6240\u5728\u9879\u76ee\u4e2d"),"\uff0c\u5efa\u7acb\u76ee\u5f55",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u4e0b\uff0c\u6309\u5b9e\u4f53\u7c7b\u578b\u6240\u5904\u7684\u5305\u8def\u5f84\u5efa\u7acb\u5b50\u76ee\u5f55",(0,r.kt)("inlineCode",{parentName:"p"},"com/yourcompany/yourpoject/model"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u4e0a\u4e00\u6b65\u5efa\u7acb\u7684\u76ee\u5f55\u4e0b\uff0c\u5efa\u7acb\u6587\u4ef6",(0,r.kt)("inlineCode",{parentName:"p"},"Book.dto"),"\uff0c\u6587\u4ef6\u5fc5\u987b\u548c\u5b9e\u4f53\u7c7b\u540c\u540d\uff0c\u6269\u5c55\u540d\u5fc5\u987b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"dto"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7f16\u8f91\u6b64\u6587\u4ef6\uff0c\u5229\u7528DTO\u8bed\u8a00\uff0c\u5b9a\u4e49Book\u5b9e\u4f53\u7684\u5404\u79cdDTO\u5f62\u72b6"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"input BookInput {\n    \n    #allScalars(Book)\n\n    id(store)\n\n    id(authors) as authorIds\n}\n\n...\u7701\u7565\u5176\u4ed6DTO\u5b9a\u4e49...\n")))),(0,r.kt)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5c06\u4f1a\u81ea\u52a8\u751f\u6210\u5982\u4e0bInput DTO"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookInput.java"',title:'"BookInput.java"'},'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookInput implements Input<Book> { \u2776\n\n    @Nullable\n    private Long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    @Nullable\n    private Long storeId;\n\n    private List<Long> authorIds;\n\n    @Override\n    public Book toEntity() { \u2777\n        ...\u7565...\n    }\n\n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n'))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookInput.kt"',title:'"BookInput.kt"'},'@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookInput(\n    val id: Long? = null,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n    val storeId: Long? = null,\n    val authorIds: List<Long> = emptyList()\n): Input<Book> { \u2776\n\n    override fun toEntity(): Book = \u2777\n        ...\u7565...\n    \n    ...\u7701\u7565\u5176\u4ed6\u6210\u5458...\n}\n')))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 ",(0,r.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u5b9e\u73b0\u4e86\u63a5\u53e3",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.Input"),"\uff0c\u8be5\u63a5\u53e3\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"toEntity"),"\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5c06\u5f53\u524dInput DTO\u5bf9\u8c61\u8f6c\u5316\u4e3aJimmer\u52a8\u6001\u5b9e\u4f53\u5bf9\u8c61\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 \u5b9e\u73b0",(0,r.kt)("inlineCode",{parentName:"p"},"Input.toEntity"),"\u65b9\u6cd5"))),(0,r.kt)("h2",{id:"\u5b9e\u73b0graphql-mutation"},"\u5b9e\u73b0GraphQL mutation"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookStoreService.java"',title:'"BookStoreService.java"'},"package com.example.business;\n\nimport org.springframework.graphql.data.method.annotation.Argument;\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping;\nimport org.springframework.stereotype.Controller;\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\npublic class BookStoreService {\n\n    private final BookStoreRepsitory bookStoreRepsitory;\n\n    public BookStoreService(BookStoreRepsitory bookStoreRepsitory) {\n        this.bookStoreRepsitory = bookStoreRepsitory;\n    }\n\n    @MutationMapping \u2776\n    @Transactional\n    public Book saveBook(\n        @Argument BookInput input \u2777\n    ) {\n        // `save(input)`\u662f`save(input.toEntity())`\u7684\u7b80\u5199\u65b9\u5f0f\n        return bookRepository.save(input); \u2778\n    }\n}\n"))),(0,r.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookStoreService.kt"',title:'"BookStoreService.kt"'},"package com.example.business\n\nimport org.springframework.graphql.data.method.annotation.Argument\n// highlight-next-line\nimport org.springframework.graphql.data.method.annotation.MutationMapping\nimport org.springframework.stereotype.Controller\n\n...\u7701\u7565\u5176\u4ed6\u5bfc\u5165...\n\n@Controller\nclass BookStoreService(\n    private val bookStoreRepository: BookStoreRepsitory\n) {\n\n    @MutationMapping \u2776\n    @Transactional\n    fun saveBook(\n        @Argument input: BookInput \u2777\n    ): Book =\n        // `save(input)`\u662f`save(input.toEntity())`\u7684\u7b80\u5199\u65b9\u5f0f\n        bookRepository.save(input) \u2778\n}\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2776 \u4f7f\u7528\u6ce8\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"@org.springframework.graphql.data.method.annotation.MutationMapping"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2777 \u4f7f\u7528\u9759\u6001Input DTO\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"BookInput"),"\uff0c\u8ba9\u7528\u6237\u53ea\u80fd\u4f20\u9012\u89c4\u5b9a\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\uff0c\u4ee5\u7b26\u5408",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/graphql-js/mutations-and-input-types/"},"GraphQLInput"),"\u7684\u89c4\u8303")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u2778 ",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\uff0c\u4e00\u53e5\u8bdd\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bookRepository.save(input)"),"\uff0c\u5176\u5b9e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"bookRepository.save(input.toEntity())"),"\u7684\u7b80\u5199\u3002"),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u65e0\u8bba",(0,r.kt)("inlineCode",{parentName:"p"},"BookInput"),"\u7c7b\u578b\u6240\u5b9a\u4e49\u6570\u636e\u7ed3\u6784\u7b80\u5355\u8fd8\u662f\u76f8\u5bf9\u590d\u6742\uff0c\u90fd\u53ef\u4ee5\u4e00\u53e5\u8bdd\u4fdd\u5b58\u3002\u8fd9\u662f",(0,r.kt)("a",{parentName:"p",href:"../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u8fd9\u4e2a\u529f\u80fd\u7684\u6838\u5fc3\u4ef7\u503c\u3002")))))}d.isMDXComponent=!0}}]);