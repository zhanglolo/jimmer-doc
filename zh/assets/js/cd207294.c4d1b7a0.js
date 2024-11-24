"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6877],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>p});var i=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function I(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?I(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function r(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},I=Object.keys(e);for(i=0;i<I.length;i++)a=I[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(e);for(i=0;i<I.length;i++)a=I[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=i.createContext({}),d=function(e){var n=i.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},m=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,I=e.originalType,o=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=d(a),p=t,s=u["".concat(o,".").concat(p)]||u[p]||c[p]||I;return a?i.createElement(s,l(l({ref:n},m),{},{components:a})):i.createElement(s,l({ref:n},m))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var I=a.length,l=new Array(I);l[0]=u;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r.mdxType="string"==typeof e?e:t,l[1]=r;for(var d=2;d<I;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>l});var i=a(67294),t=a(34334);const I="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,t.Z)(I,l),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>p});var i=a(83117),t=a(67294),I=a(34334),l=a(72389),r=a(67392),o=a(7094),d=a(12466);const m="tabList__CuJ",c="tabItem_LNqP";function u(e){var n;const{lazy:a,block:l,defaultValue:u,values:p,groupId:s,className:Z}=e,b=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??b.map((e=>{let{props:{value:n,label:a,attributes:i}}=e;return{value:n,label:a,attributes:i}})),M=(0,r.l)(g,((e,n)=>e.value===n.value));if(M.length>0)throw new Error(`Docusaurus error: Duplicate values "${M.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===u?u:u??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:D,setTabGroupChoices:k}=(0,o.U)(),[v,j]=(0,t.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:G}=(0,d.o5)();if(null!=s){const e=D[s];null!=e&&e!==v&&g.some((n=>n.value===e))&&j(e)}const S=e=>{const n=e.currentTarget,a=T.indexOf(n),i=g[a].value;i!==v&&(G(n),j(i),null!=s&&k(s,String(i)))},y=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;a=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;a=T[n]??T[T.length-1];break}}null==(n=a)||n.focus()};return t.createElement("div",{className:(0,I.Z)("tabs-container",m)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,I.Z)("tabs",{"tabs--block":l},Z)},g.map((e=>{let{value:n,label:a,attributes:l}=e;return t.createElement("li",(0,i.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>T.push(e),onKeyDown:y,onFocus:S,onClick:S},l,{className:(0,I.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":v===n})}),a??n)}))),a?(0,t.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function p(e){const n=(0,l.Z)();return t.createElement(u,(0,i.Z)({key:String(n)},e))}},82073:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=a(83117),t=(a(67294),a(3905)),I=a(65488),l=a(85162);const r={sidebar_position:1,title:"\u524d\u63d0"},o=void 0,d={unversionedId:"quick-view/precondition",id:"quick-view/precondition",title:"\u524d\u63d0",description:"\u4e3a\u4e86\u5feb\u901f\u9884\u89c8Jimmer\u6700\u4e3b\u8981\u7684\u7279\u6027\uff0c\u8fd9\u91cc\u9700\u8981\u7ed9\u51fa\u51e0\u4e2a\u5b9e\u4f53\uff0c\u4f5c\u4e3a\u672c\u7ae0\u8282\u6240\u6709\u8ba8\u8bba\u7684\u57fa\u672c\u524d\u63d0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/precondition.mdx",sourceDirName:"quick-view",slug:"/quick-view/precondition",permalink:"/jimmer-doc/zh/docs/quick-view/precondition",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/precondition.mdx",tags:[],version:"current",lastUpdatedAt:1704307186,formattedLastUpdatedAt:"2024\u5e741\u67083\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u524d\u63d0"},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u9884\u89c8 \u2605",permalink:"/jimmer-doc/zh/docs/quick-view/"},next:{title:"1. \u67e5\u8be2\u4efb\u610f\u5f62\u72b6",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/"}},m={},c=[{value:"\u5b9e\u4f53\u7684\u5730\u4f4d",id:"\u5b9e\u4f53\u7684\u5730\u4f4d",level:2},{value:"\u5b9e\u4f53\u4e4b\u95f4\u7684UML\u5173\u7cfb",id:"\u5b9e\u4f53\u4e4b\u95f4\u7684uml\u5173\u7cfb",level:2},{value:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49",id:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"BookStore",id:"bookstore",level:3},{value:"Book",id:"book",level:3},{value:"Author",id:"author",level:3}],u={toc:c};function p(e){let{components:n,...r}=e;return(0,t.kt)("wrapper",(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u4e3a\u4e86\u5feb\u901f\u9884\u89c8Jimmer\u6700\u4e3b\u8981\u7684\u7279\u6027\uff0c\u8fd9\u91cc\u9700\u8981\u7ed9\u51fa\u51e0\u4e2a\u5b9e\u4f53\uff0c\u4f5c\u4e3a\u672c\u7ae0\u8282\u6240\u6709\u8ba8\u8bba\u7684\u57fa\u672c\u524d\u63d0\u3002"),(0,t.kt)("h2",{id:"\u5b9e\u4f53\u7684\u5730\u4f4d"},"\u5b9e\u4f53\u7684\u5730\u4f4d"),(0,t.kt)("admonition",{type:"tip"},(0,t.kt)("p",{parentName:"admonition"},(0,t.kt)("strong",{parentName:"p"},"\u5728Jimmer\u5e94\u7528\u4e2d\uff0c\u552f\u4e00\u91cd\u8981\u7684\u5c31\u662f\u5168\u5c40\u7edf\u4e00\u7684ORM\u5b9e\u4f53\u6a21\u578b\u3002")),(0,t.kt)("p",{parentName:"admonition"},"\u5168\u5c40\u5b9e\u4f53\u6a21\u578b\u968f\u7740\u6570\u636e\u5e93\u7684\u8bbe\u8ba1\u7684\u5b9a\u578b\u800c\u5b9a\u578b\uff0c\u548c\u5177\u4f53\u67e5\u8be2/\u4fee\u6539\u4e1a\u52a1\u5bf9\u4ea4\u4e92\u683c\u5f0f\u7684\u8bc9\u6c42\u65e0\u5173\uff0c\u76f8\u5bf9\u7a33\u5b9a\u3002"),(0,t.kt)("p",{parentName:"admonition"},"\u81f3\u4e8e\u6bcf\u4e2a\u67e5\u8be2/\u4fee\u6539\u4e1a\u52a1\u9700\u8981\u4ea4\u4e92\u4ec0\u4e48\u6837\u7684DTO\u7c7b\u578b\uff0c\u5b8c\u5168\u4e0d\u91cd\u8981\u3002"),(0,t.kt)("ul",{parentName:"admonition"},(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u8981\u4e48\u6839\u672c\u4e0d\u9700\u8981DTO, \u6bd4\u5982",(0,t.kt)("a",{parentName:"p",href:"./fetch/export/entity"},"\u5feb\u901f\u9884\u89c8/\u67e5\u8be2\u4efb\u610f\u5f62\u72b6/\u66b4\u9732\u529f\u80fd/\u76f4\u63a5\u8fd4\u56de\u5b9e\u4f53"),"\u3002")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"\u8981\u4e48\u901a\u8fc7",(0,t.kt)("a",{parentName:"p",href:"../object/view/dto-language"},"\u5bf9\u8c61\u7bc7/DTO\u8f6c\u6362/DTO\u8bed\u8a00"),"\u5feb\u901f\u751f\u6210DTO\u7c7b\u578b\uff0c\u8ba9DTO\u53d8\u5f97\u6781\u5176\u5ec9\u4ef7\u3002"))),(0,t.kt)("p",{parentName:"admonition"},"\u53ea\u6709\u76f8\u5bf9\u7a33\u5b9a\u7684\u5b9e\u4f53\u6a21\u578b\u624d\u662f\u91cd\u8981\u7684\u3002\u6240\u4ee5\uff0cJimmer\u975e\u5e38\u5584\u4e8e\u5904\u7406\u9700\u6c42\u7684\u53d8\u52a8\u3002")),(0,t.kt)("h2",{id:"\u5b9e\u4f53\u4e4b\u95f4\u7684uml\u5173\u7cfb"},"\u5b9e\u4f53\u4e4b\u95f4\u7684UML\u5173\u7cfb"),(0,t.kt)("p",null,"\u8fd9\u91cc\uff0c\u5217\u4e3e\u4e09\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"Book"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"Author"),"\u548c",(0,t.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\uff0c\u4f5c\u4e3a\u5f53\u524d\u7ae0\u8282\u6240\u6709\u8ba8\u8bba\u7684\u524d\u63d0\u5047\u8bbe\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"uml",src:a(64501).Z,width:"431",height:"202"})),(0,t.kt)("h2",{id:"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49"},"\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49"),(0,t.kt)("h3",{id:"bookstore"},"BookStore"),(0,t.kt)(I.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface BookStore {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    Long id();\n\n    String name();\n\n    @Nullable\n    String website();\n\n    @OneToMany(mappedBy = "store")\n    List<Book> books();\n}\n'))),(0,t.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface BookStore {\n\n    @Id\n    @@GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    val name: String\n\n    val website: String?\n\n    @OneToMany(mappedBy = "store")\n    val books: List<Book>\n}\n')))),(0,t.kt)("h3",{id:"book"},"Book"),(0,t.kt)(I.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    Long id();\n\n    @Key\n    String name();\n\n    @Key\n    int edition();\n\n    BigDecimal price();\n\n    @Nullable\n    @ManyToOne\n    BookStore store();\n\n    @ManyToMany\n    List<Author> authors();\n}\n"))),(0,t.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface Book {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    @Key\n    val name: String\n\n    @Key\n    val edition: Int\n\n    val price: BigDecimal\n\n    @ManyToOne\n    val store: BookStore?\n\n    @ManyToMany\n    val authors: List<Author>\n}\n")))),(0,t.kt)("h3",{id:"author"},"Author"),(0,t.kt)(I.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    UUID id();\n\n    @Key\n    String firstName();\n\n    @Key\n    String lastName();\n\n    Gender gender();\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n}\n'))),(0,t.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Author {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    @Key\n    val firstName String\n\n    @Key\n    val lastName: String\n\n    val gender: Gender\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n}\n')))),(0,t.kt)("p",null,"\u5176\u4e2d\uff0cGender\u662f\u4e00\u4e2a\u975e\u5e38\u7b80\u5355\u7684\u679a\u4e3e\u7c7b\u578b"),(0,t.kt)(I.Z,{groupId:"language",mdxType:"Tabs"},(0,t.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"public enum Gender { MALE, FEMALE }\n"))),(0,t.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-kotlin"},"enum class Gender { MALE, FEMALE }\n")))))}p.isMDXComponent=!0},64501:(e,n,a)=>{a.d(n,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDAxIiB3aWR0aD0iNDMxIiBoZWlnaHQ9IjIwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMDIiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAwOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAwOSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMTAiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDExIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxMiIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDEzIiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkJvb2tTdG9yZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAxNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTczLDI1KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMTUiIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MSAwUSA4NSAwIDg1IDRMIDg1IDI5USA4NSAzMyA4MSAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDE2Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAxNyIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjVweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMTgiIGR5PSIxNiIgeD0iNDIuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAxOSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5Cb29rPC90c3Bhbj48L3RzcGFuPjwvdGV4dD48L2c+PC9nPjxnIGlkPSJTdmdqc0cxMDIwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMjEsMjUpIj48cGF0aCBpZD0iU3ZnanNQYXRoMTAyMSIgZD0iTSAwIDRRIDAgMCA0IDBMIDgxIDBRIDg1IDAgODUgNEwgODUgMjlRIDg1IDMzIDgxIDMzTCA0IDMzUSAwIDMzIDAgMjlaIiBzdHJva2U9InJnYmEoMzMsNDEsNDgsMSkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbC1vcGFjaXR5PSIxIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PGcgaWQ9IlN2Z2pzRzEwMjIiPjx0ZXh0IGlkPSJTdmdqc1RleHQxMDIzIiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSI2NXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0ibWlkZGxlIiBsaW5lSGVpZ2h0PSIxMjUlIiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjUuODc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAyNCIgZHk9IjE2IiB4PSI0Mi41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDI1IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPkF1dGhvcjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAyNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUsMTQ0KSI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMjciIGQ9Ik0gMCA0USAwIDAgNCAwTCA4MyAwUSA4NyAwIDg3IDRMIDg3IDI5USA4NyAzMyA4MyAzM0wgNCAzM1EgMCAzMyAwIDI5WiIgc3Ryb2tlPSJyZ2JhKDMzLDQxLDQ4LDEpIiBzdHJva2Utd2lkdGg9IjIiIGZpbGwtb3BhY2l0eT0iMSIgZmlsbD0iI2ZmZmZmZiI+PC9wYXRoPjxnIGlkPSJTdmdqc0cxMDI4Ij48dGV4dCBpZD0iU3ZnanNUZXh0MTAyOSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iNjdweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249Im1pZGRsZSIgbGluZUhlaWdodD0iMTI1JSIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSI1Ljg3NSIgdHJhbnNmb3JtPSJyb3RhdGUoMCkiPjx0c3BhbiBpZD0iU3ZnanNUc3BhbjEwMzAiIGR5PSIxNiIgeD0iNDMuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTAzMSIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5UcmVlTm9kZTwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvZz48ZyBpZD0iU3ZnanNHMTAzMiI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwMzMiIGQ9Ik0xMTEgNDJMMTQxLjUgNDJMMTQxLjUgNDJMMTcyIDQyIiBzdHJva2U9IiM3ZjdmN2YiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxyZWN0IGlkPSJTdmdqc1JlY3QxMDM0IiB3aWR0aD0iMjEiIGhlaWdodD0iMTYiIHg9IjEzMSIgeT0iMzQiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48dGV4dCBpZD0iU3ZnanNUZXh0MTAzNSIgZm9udC1mYW1pbHk9IuW+rui9r+mbhem7kSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1zaXplPSIxM3B4IiB3aWR0aD0iMjFweCIgZmlsbD0iIzMyMzIzMiIgZm9udC13ZWlnaHQ9IjQwMCIgYWxpZ249InRvcCIgbGluZUhlaWdodD0iMTZweCIgYW5jaG9yPSJtaWRkbGUiIGZhbWlseT0i5b6u6L2v6ZuF6buRIiBzaXplPSIxM3B4IiB3ZWlnaHQ9IjQwMCIgZm9udC1zdHlsZT0iIiBvcGFjaXR5PSIxIiB5PSIzMS4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM2IiBkeT0iMTYiIHg9IjE0MS41Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDM3IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjxnIGlkPSJTdmdqc0cxMDM4Ij48cGF0aCBpZD0iU3ZnanNQYXRoMTAzOSIgZD0iTTI1OSA0MkwyODkuNSA0MkwyODkuNSA0MkwzMjAgNDIiIHN0cm9rZT0iIzdmOGI5OCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIj48L3BhdGg+PHJlY3QgaWQ9IlN2Z2pzUmVjdDEwNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSIxNiIgeD0iMjc3LjUiIHk9IjM0IiBmaWxsPSIjZmZmZmZmIj48L3JlY3Q+PHRleHQgaWQ9IlN2Z2pzVGV4dDEwNDEiIGZvbnQtZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTNweCIgd2lkdGg9IjI0cHgiIGZpbGw9IiMzMjMyMzIiIGZvbnQtd2VpZ2h0PSI0MDAiIGFsaWduPSJ0b3AiIGxpbmVIZWlnaHQ9IjE2cHgiIGFuY2hvcj0ibWlkZGxlIiBmYW1pbHk9IuW+rui9r+mbhem7kSIgc2l6ZT0iMTNweCIgd2VpZ2h0PSI0MDAiIGZvbnQtc3R5bGU9IiIgb3BhY2l0eT0iMSIgeT0iMzEuMzc1IiB0cmFuc2Zvcm09InJvdGF0ZSgwKSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MiIgZHk9IjE2IiB4PSIyODkuNSI+PHRzcGFuIGlkPSJTdmdqc1RzcGFuMTA0MyIgc3R5bGU9InRleHQtZGVjb3JhdGlvbjo7Ij5NOk48L3RzcGFuPjwvdHNwYW4+PC90ZXh0PjwvZz48ZyBpZD0iU3ZnanNHMTA0NCI+PHBhdGggaWQ9IlN2Z2pzUGF0aDEwNDUiIGQ9Ik02OC45ODMzMzU2NDc2NjYwMSAxNDMuMDAwMTM4ODU5OTYwNEw2OC41IDExNEwxNDIgMTE0TDE0MiAxNjFMMTEzIDE2MSIgc3Ryb2tlPSIjN2Y4Yjk4IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiPjwvcGF0aD48cmVjdCBpZD0iU3ZnanNSZWN0MTA0NiIgd2lkdGg9IjIxIiBoZWlnaHQ9IjE2IiB4PSIxMTguMjQ3OTE2ODExMzIyNTEiIHk9IjEwNiIgZmlsbD0iI2ZmZmZmZiI+PC9yZWN0Pjx0ZXh0IGlkPSJTdmdqc1RleHQxMDQ3IiBmb250LWZhbWlseT0i5b6u6L2v6ZuF6buRIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEzcHgiIHdpZHRoPSIyMXB4IiBmaWxsPSIjMzIzMjMyIiBmb250LXdlaWdodD0iNDAwIiBhbGlnbj0idG9wIiBsaW5lSGVpZ2h0PSIxNnB4IiBhbmNob3I9Im1pZGRsZSIgZmFtaWx5PSLlvq7ova/pm4Xpu5EiIHNpemU9IjEzcHgiIHdlaWdodD0iNDAwIiBmb250LXN0eWxlPSIiIG9wYWNpdHk9IjEiIHk9IjEwMy4zNzUiIHRyYW5zZm9ybT0icm90YXRlKDApIj48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ4IiBkeT0iMTYiIHg9IjEyOC43NDc5MTY4MTEzMjI1Ij48dHNwYW4gaWQ9IlN2Z2pzVHNwYW4xMDQ5IiBzdHlsZT0idGV4dC1kZWNvcmF0aW9uOjsiPjA6TjwvdHNwYW4+PC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPg=="}}]);