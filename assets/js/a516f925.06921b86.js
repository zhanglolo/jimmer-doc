"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(34334);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(83117),i=n(67294),o=n(34334),r=n(72389),l=n(67392),s=n(7094),p=n(12466);const m="tabList__CuJ",u="tabItem_LNqP";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:c,groupId:h,className:k}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,l.l)(g,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==b&&!g.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[T,w]=(0,i.useState)(b),B=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=h){const e=v[h];null!=e&&e!==T&&g.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=B.indexOf(t),a=g[n].value;a!==T&&(x(t),w(a),null!=h&&N(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=B.indexOf(e.currentTarget)+1;n=B[t]??B[0];break}case"ArrowLeft":{const t=B.indexOf(e.currentTarget)-1;n=B[t]??B[B.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",m)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},k)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>B.push(e),onKeyDown:D,onFocus:O,onClick:O},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,i.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,r.Z)();return i.createElement(d,(0,a.Z)({key:String(t)},e))}},67315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(83117),i=(n(67294),n(3905)),o=n(65488),r=n(85162);const l={sidebar_position:4,title:"Query DTO"},s=void 0,p={unversionedId:"spring/repository/dto",id:"spring/repository/dto",title:"Query DTO",description:"Jimmer provides DTO language.",source:"@site/docs/spring/repository/dto.mdx",sourceDirName:"spring/repository",slug:"/spring/repository/dto",permalink:"/jimmer-doc/docs/spring/repository/dto",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/spring/repository/dto.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Query DTO"},sidebar:"tutorialSidebar",previous:{title:"Complex Queries",permalink:"/jimmer-doc/docs/spring/repository/default"},next:{title:"Remote Associations",permalink:"/jimmer-doc/docs/spring/spring-cloud"}},m={},u=[{value:"Define DTO shape",id:"define-dto-shape",level:2},{value:"Automatically generate DTO types",id:"automatically-generate-dto-types",level:2},{value:"Query DTO types",id:"query-dto-types",level:2},{value:"Use inherited methods from Repository",id:"use-inherited-methods-from-repository",level:3},{value:"Define abstract methods in custom Repository",id:"define-abstract-methods-in-custom-repository",level:3},{value:"Define default methods in custom Repository",id:"define-default-methods-in-custom-repository",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jimmer provides ",(0,i.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO language"),". "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Essentially, this language is another way to express object fetchers.")),(0,i.kt)("p",null,"Using this language, developers can quickly define multiple data structure shapes with an entity type as the aggregate root. The compiler will generate the corresponding Java/Kotlin DTO classes for each shape. Each DTO type contains the mutual conversion logic between itself and the original dynamic type, as well as an object fetcher that matches its own shape."),(0,i.kt)("p",null,"In some cases, after the server queries data of a certain shape, it is not used as the return of an HTTP request, but is used by itself to drive subsequent complex business logic. This is an ideal scenario for using this approach."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Note that if the data of a certain shape queried by the server is not for its own use, but to be directly returned as the HTTP request return value, it is more recommended to directly return the dynamic entity object and use the scheme in ",(0,i.kt)("a",{parentName:"p",href:"../../client"},"Generate Client Code")," to automatically generate client code with high development experience.")),(0,i.kt)("h2",{id:"define-dto-shape"},"Define DTO shape"),(0,i.kt)("p",null,"This article focuses on how to query static DTO types, not a systematic introduction to the DTO language. Please refer to ",(0,i.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"Object/DTO Conversion/DTO Language")," for a complete DTO language."),(0,i.kt)("p",null,"Assume the fully qualified name of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Book")," class is ",(0,i.kt)("inlineCode",{parentName:"p"},"com.yourcompany.yourpoject.model.Book"),", you can"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"In the project where the entity is defined"),", create a directory ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Under ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/dto"),", create subdirectories ",(0,i.kt)("inlineCode",{parentName:"p"},"com/yourcompany/yourpoject/model")," according to the package path where the entity is located")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the directory created in the previous step, create the file ",(0,i.kt)("inlineCode",{parentName:"p"},"Book.dto"),". The file name must be the same as the entity class name, and the extension must be ",(0,i.kt)("inlineCode",{parentName:"p"},"dto"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit this file and use the DTO language to define various DTO shapes of the Book entity"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Book.dto"',title:'"Book.dto"'},"# highlight-next-line\nBookDetailView {\n    \n    #allScalars\n    \n    store {\n        #allScalars\n    }\n\n    authors {\n        #allScalars\n    }\n}\n\nSimpleBookView { ...Omitted... }\n\n...Omit other DTO shape definitions...\n")))),(0,i.kt)("h2",{id:"automatically-generate-dto-types"},"Automatically generate DTO types"),(0,i.kt)("p",null,"Jimmer is responsible for compiling dto files and automatically generating DTO types that conform to these shapes."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If files other than dto files are modified in addition to dto files, directly clicking the run button in the IDE may cause the dto file to be recompiled."),(0,i.kt)("p",{parentName:"admonition"},"However, if no other Java/Kotlin files are modified except for the dto file, simply clicking the run button in the IDE will not cause the dto file to be recompiled unless explicitly rebuilding!"),(0,i.kt)("p",{parentName:"admonition"},"If you are using Gradle as your build tool, you can also use the third-party Gradle plugin provided by the community to solve this problem: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Enaium/jimmer-gradle"},"jimmer-gradle"))),(0,i.kt)("p",null,"Take ",(0,i.kt)("inlineCode",{parentName:"p"},"BookDetailView")," in the above code as an example. After this dto file is successfully compiled by Jimmer, the following DTO type will be automatically generated:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookDetailView.java"',title:'"BookDetailView.java"'},'package com.yourcompany.yourpoject.model.dto;\n\nimport com.yourcompany.yourpoject.model.Book;\nimport org.babyfish.jimmer.View;\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\npublic class BookDetailView implements Input<Book> {\n\n    private long id;\n\n    private String name;\n\n    private int edition;\n\n    private BigDecimal price;\n\n    // highlight-next-line\n    private TargetOf_store store;\n\n    // highlight-next-line\n    private List<TargetOf_authors> authors;\n\n    // highlight-next-line  \n    public static class TargetOf_store implements Input<BookStore> {\n\n        private long id;\n    \n        private String name;\n\n        @Nullable\n        private String website;\n\n        ...Omitted other members...\n    }\n\n    // highlight-next-line\n    public static class TargetOf_authors implements Input<Author> {\n\n        private long id;\n        \n        private String firstName;\n\n        private String lastName;\n\n        private Gender gender;\n\n        ...Omitted other members...\n    }\n\n    ...Omitted other members...\n}\n'))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookDetailView.kt"',title:'"BookDetailView.kt"'},'package com.yourcompany.yourpoject.model.dto\n\nimport com.yourcompany.yourpoject.model.Book \nimport org.babyfish.jimmer.View\n\n@GenertedBy(file = "<your_project>/src/main/dto/Book.dto")\ndata class BookDetailView(\n    val id: Long = 0,\n    val name: String = "",\n    val edition: Int = 0,\n    val price: BigDecimal,\n\n    // highlight-next-line\n    val store: TargetOf_store? = null,\n    // highlight-next-line\n    val authors: List<TargetOf_authors> = emptyList(),\n) : Input<Book> {\n\n    // highlight-next-line\n    data class TargetOf_store(\n        val id: Long = 0,\n        val name: String = "",\n        val website: String? = null,  \n    ) : Input<BookStore> {\n        ...Omitted other members...\n    }\n\n    // highlight-next-line\n    data class TargetOf_authors(\n        val id: Long = 0,\n        public val firstName: String = "",\n        public val lastName: String = "",\n        public val gender: Gender,\n    ) : Input<Author> {\n        ...Omitted other members...\n    }\n\n    ...Omitted other members...\n}\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The generated DTO classes are not in the package where the entity is located, but in its ",(0,i.kt)("inlineCode",{parentName:"p"},"dto")," subpackage.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"For Java, it is assumed that lombok has been used. ")))),(0,i.kt)("h2",{id:"query-dto-types"},"Query DTO types"),(0,i.kt)("p",null,"There are several ways to query DTO types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Use inherited methods from ",(0,i.kt)("inlineCode",{parentName:"p"},"JRepository/KRepostiory"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define abstract methods in custom Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Define default methods in custom Repository ",(0,i.kt)("em",{parentName:"p"},"(Which is actually the method of the underlying API to query DTO types)")))),(0,i.kt)("h3",{id:"use-inherited-methods-from-repository"},"Use inherited methods from Repository"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public static void main(String[] args) {\n    ApplicationContext ctx = SpringAppliction.run(MyApp.class, args);\n    BookRepository bookRepository = ctx.getBean(BookRepository.class);\n    Book view = bookRepository\n        // highlight-next-line\n        .viwer(BookDetailView.class)\n        .findNullable(1L);\n    System.out.println(view);\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun main(args: Array<String>) {\n    val ctx = runApplication<MyApp>(*args)\n    val bookRepository = ctx.getBean(BookRepository.class.java)\n    val view = bookRepository\n        // highlight-next-line\n        .viwer(BookDetailView.class)  \n        .findNullable(1L)\n    println(view)\n}  \n")))),(0,i.kt)("p",null,"Where ",(0,i.kt)("inlineCode",{parentName:"p"},"viewer(BookDetailView.class)")," indicates that the following methods are used to query DTO objects instead of dynamic entity objects."),(0,i.kt)("p",null,"The print result is as follows ",(0,i.kt)("em",{parentName:"p"},"(Formatted manually for readability)"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"# highlight-next-line \nBookDetailView(\n    id=1,\n    name=Learning GraphQL,\n    edition=1,\n    price=50.00,\n    # highlight-next-line\n    store=BookDetailView.TargetOf_store(\n        id=1,\n        name=O'REILLY,\n        website=null,\n        version=0\n    ),\n    authors=[\n        # highlight-next-line\n        BookDetailView.TargetOf_authors(\n            id=2,\n            firstName=Alex,\n            lastName=Banks,\n            gender=MALE  \n        ),\n        # highlight-next-line \n        BookDetailView.TargetOf_authors(\n            id=1, \n            firstName=Eve,\n            lastName=Procello,\n            gender=FEMALE\n        )\n    ]\n)\n")),(0,i.kt)("p",null,"It is not difficult to find that although the query no longer returns dynamic entity objects, the function is exactly the same as the object fetcher. Why is this?  "),(0,i.kt)("p",null,"In fact, an object fetcher is automatically generated inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"BookDetailView")," class. Jimmer uses it to query dynamic entity objects matching the shape from the database and automatically converts them to DTO objects."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Related details have been discussed in detail in ",(0,i.kt)("a",{parentName:"p",href:"../../query/object-fetcher/dto"},"Object Fetcher/DTO Query"),". This article will not repeat."),(0,i.kt)("p",{parentName:"admonition"},"This is why this article says at the beginning that the DTO language is essentially another way to express object fetchers.")),(0,i.kt)("h3",{id:"define-abstract-methods-in-custom-repository"},"Define abstract methods in custom Repository"),(0,i.kt)("p",null,"There are two implementation plans:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Intuitive but not recommended"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"// Intuitive but not recommended\npublic interface BookRepository extends JRepository<Book, Long> {\n\n    // highlight-next-line\n    List<BookDetailView> findByNameLikeIgnoreCase(\n        @Nullable String name\n    );    \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"// Intuitive but not recommended\ninterface BookRepository : KRepository<Book, Long> {\n\n    fun findByNameLikeIgnoreCase(\n        name: String? = null\n    // highlight-next-line\n    ) : List<BookDetailView>    \n}\n")))),(0,i.kt)("p",{parentName:"li"},"This approach is very simple, the abstract method no longer returns dynamic entities representing arbitrary data, just return the DTO type with fixed shape. Very easy to understand."),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"However, this approach still has drawbacks and is not recommended.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Recommended approach"),(0,i.kt)("p",{parentName:"li"},"The above code is simple and intuitive, but violates one of the important values \u200b\u200bthat Jimmer has been trying to pursue:  "),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Do not solidify the shape of the data structure to be queried in the data layer, but let the upper layer business decide.")),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    <V extends View<Book>> List<V> findByNameLikeIgnoreCase(\n        @Nullable String name,\n        // highlight-next-line\n        Class<V> viewType\n    );    \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun <V: View<Book>> findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: KClass<V>\n    ) : List<V>    \n}\n")))),(0,i.kt)("p",{parentName:"li"},"You can see:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"First, define a method-level generic parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),", which must extend ",(0,i.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.View<Book>")," ",(0,i.kt)("em",{parentName:"p"},"(this is very important, otherwise Jimmer will remind developers to do so via exceptions)"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Then, use ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," to declare the parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"viewType")," of type ",(0,i.kt)("inlineCode",{parentName:"p"},"Class<V>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"KClass<V>"),", and hand over the decision-making power of the data structure shape to the caller.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Finally, return results carrying the ",(0,i.kt)("inlineCode",{parentName:"p"},"V")," type, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"V"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"List<V>")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Page<V>"),"."))),(0,i.kt)("p",{parentName:"li"},"In this way, we can use it to query data structures of various shapes. Take Java as an example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"bookRepository.findByNameLikeIgnoreCase(null, BookDetailView.class)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"bookRepository.findByNameLikeIgnoreCase(null, SimpleBookView.class)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"bookRepository.findByNameLikeIgnoreCase(null, DefaultBookView.class)"))),(0,i.kt)("p",{parentName:"li"},"Let's recall how we used object fetchers directly to achieve the same functionality before introducing the DTO type:"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    List<Book> findByNameLikeIgnoreCase(\n        @Nullable String name,\n        // highlight-next-line\n        fetcher<Book> fetcher\n    );    \n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: Fetcher<Book>\n    ) : List<Book>    \n}\n")))),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Comparing the code using DTO with the code using object fetcher directly, it is not difficult to find that the two are doing the same thing in different ways."),(0,i.kt)("p",{parentName:"admonition"},"This confirms again what is said at the beginning of this article that the DTO language is essentially another way to express object fetchers.")))),(0,i.kt)("h3",{id:"define-default-methods-in-custom-repository"},"Define default methods in custom Repository"),(0,i.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="BookRepository.java"',title:'"BookRepository.java"'},"public interface BookRepository extends JRepository<Book, Long> {\n\n    BookTable table = Tables.BOOK_TABLE;\n\n    default <V extends View<Book>> List<V> find(\n        @Nullable String name, \n        @Nullable String storeName,\n        @Nullalbe String authorName,\n        // highlight-next-line  \n        Class<V> viewType\n    ) {\n        return sql()\n            .createQuery(table)\n            whereIf(\n                StringUtils.hasText(name),\n                table.name().ilike(name)\n            )\n            .whereIf(\n                StringUtils.hasText(storeName),\n                table.store().name().ilike(storeName)  \n            )\n            .whereIf(\n                StringUtils.hasText(authorName),\n                table.id().in(\n                    sql()\n                        .createSubQuery(author)\n                        .where(\n                            Predicate.or(\n                                author.firstName().ilike(authorName),\n                                author.lastName().ilike(authorName)\n                            )\n                        )\n                        .select(\n                            author.books().id()\n                        )    \n                )\n            )\n            .orderBy(table.name())\n            .orderBy(table.edition().desc())\n            // highlight-next-line\n            .select(table.fetch(viewType))\n            .execute();\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="BookRepository.kt"',title:'"BookRepository.kt"'},"interface BookRepository : KRepository<Book, Long> {\n\n    fun <V: View<Book>> findByNameLikeIgnoreCase(\n        name: String? = null\n        // highlight-next-line\n        viewType: KClass<V>\n    ) : List<V> =\n        sql\n            .createQuery(Book::class) {\n                name?.takeIf { it.isNotEmpty() }?.let {\n                    where(table.name ilike it)\n                }\n                storeName?.takeIf { it.isNotEmpty() }?.let {\n                    table.store.name ilike it\n                }\n                authorName?.takeIf { it.isNotEmpty() }?.let {\n                    where(\n                        table.id valueIn subQuery(Author::class) {\n                            where(\n                                or(\n                                    table.firstName ilike it,\n                                    table.lastName ilike it\n                                )\n                            )\n                            select(table.books.id)\n                        }\n                    )\n                }\n                orderBy(table.name)\n                orderBy(table.edition.desc())\n                // highlight-next-line\n                select(table.fetch(viewType))\n            }\n            .execute()    \n}\n")))),(0,i.kt)("p",null,"Here we see ",(0,i.kt)("inlineCode",{parentName:"p"},"table.fetch(fetcher)")," is replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"table.fetch(viewType)"),"."),(0,i.kt)("p",null,"In fact, ",(0,i.kt)("inlineCode",{parentName:"p"},"viewType")," can also replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher")," in other underlying query APIs. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlClient.findById(fetcher, 1L)")," can be replaced with ",(0,i.kt)("inlineCode",{parentName:"p"},"sqlClient.find(viewType, 1L)"),".  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"All underlying query APIs can replace ",(0,i.kt)("inlineCode",{parentName:"p"},"fetcher")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"viewType"),", which confirms again that the DTO language is essentially another way to express object fetchers, as stated at the beginning of this article.")))}c.isMDXComponent=!0}}]);