"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8601],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),r=t(34334);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(83117),r=t(67294),l=t(34334),o=t(72389),i=t(67392),p=t(7094),u=t(12466);const s="tabList__CuJ",m="tabItem_LNqP";function d(e){var n;const{lazy:t,block:o,defaultValue:d,values:c,groupId:k,className:g}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=c??v.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),N=(0,i.l)(b,((e,n)=>e.value===n.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==h&&!b.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:f}=(0,p.U)(),[T,j]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:I}=(0,u.o5)();if(null!=k){const e=y[k];null!=e&&e!==T&&b.some((n=>n.value===e))&&j(e)}const S=e=>{const n=e.currentTarget,t=C.indexOf(n),a=b[t].value;a!==T&&(I(n),j(a),null!=k&&f(k,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=C.indexOf(e.currentTarget)+1;t=C[n]??C[0];break}case"ArrowLeft":{const n=C.indexOf(e.currentTarget)-1;t=C[n]??C[C.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},b.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:e=>C.push(e),onKeyDown:x,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":T===n})}),t??n)}))),t?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==T})))))}function c(e){const n=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(n)},e))}},1078:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var a=t(83117),r=(t(67294),t(3905)),l=t(65488),o=t(85162);const i={sidebar_position:6,title:"JSON Converter"},p=void 0,u={unversionedId:"mapping/base/json-converter",id:"mapping/base/json-converter",title:"JSON Converter",description:"Jimmer\u5b9e\u4f53\u5e76\u975ePOJO\uff0c\u4f46\u53ef\u4ee5\u9760org.babyish.jimmmer.jackson.ImmutableModule\u652f\u6301Jackson\u5e8f\u5217\u5316\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/json-converter.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/json-converter",permalink:"/jimmer-doc/zh/docs/mapping/base/json-converter",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/json-converter.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"JSON Converter"},sidebar:"tutorialSidebar",previous:{title:"\u771f\u5047\u5916\u952e",permalink:"/jimmer-doc/zh/docs/mapping/base/foreignkey"},next:{title:"\u66f4\u591a\u7c7b\u578b",permalink:"/jimmer-doc/zh/docs/mapping/base/more-type"}},s={},m=[{value:"1. \u96ea\u82b1ID",id:"1-\u96ea\u82b1id",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5",level:3},{value:"\u81ea\u52a8\u5e94\u7528\u4e8eIdView\u5c5e\u6027",id:"\u81ea\u52a8\u5e94\u7528\u4e8eidview\u5c5e\u6027",level:3},{value:"\u81ea\u52a8\u5e94\u7528\u4e8eDTO",id:"\u81ea\u52a8\u5e94\u7528\u4e8edto",level:3},{value:"2. \u8131\u654f",id:"2-\u8131\u654f",level:2},{value:"\u7528\u6cd5",id:"\u7528\u6cd5-1",level:3},{value:"\u517c\u987e\u8f93\u5165",id:"\u517c\u987e\u8f93\u5165",level:3}],d={toc:m};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Jimmer\u5b9e\u4f53\u5e76\u975ePOJO\uff0c\u4f46\u53ef\u4ee5\u9760",(0,r.kt)("inlineCode",{parentName:"p"},"org.babyish.jimmmer.jackson.ImmutableModule"),"\u652f\u6301Jackson\u5e8f\u5217\u5316\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f7f\u7528Jimmer\u7684Spring Boot Starter\uff0c\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"ImmutableModule"),"\u4f1a\u88ab\u81ea\u52a8\u6ce8\u518c\uff0c\u65e0\u9700\u7528\u6237\u5173\u6ce8\u3002")),(0,r.kt)("p",null,"\u7136\u800c\u6709\u7684\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u5bf9\u67d0\u4e9b\u5c5e\u6027\u7684Jackson\u5e8f\u5217\u5316\u884c\u4e3a\u8fdb\u884c\u5b9a\u5236\uff0c\u6211\u4eec\u4ee5\u4e24\u79cd\u60c5\u51b5\u6765\u4e3e\u4f8b\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u96ea\u82b1ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5b57\u6bb5\u654f\u611f"))),(0,r.kt)("h2",{id:"1-\u96ea\u82b1id"},"1. \u96ea\u82b1ID"),(0,r.kt)("p",null,"\u96ea\u82b1id\u4f1a\u5bfc\u81f4\u6570\u503c\u5f88\u5927\u7684int64\u7c7b\u578b\uff0c\u9057\u61be\u7684\u662f\uff0cJavaScript\u7684\u6570\u5b57\u7c7b\u578b\u65e0\u6cd5\u8868\u8fbe\u5176\u4ed6\u8bed\u8a00\u4e2d\u7684int64\u5927\u6570\u5b57\u3002\u56e0\u6b64\u6211\u4eec\u4e0d\u5f97\u4e0d\u8ba9\u8fd9\u7c7bid\u5c5e\u6027\u88ab\u5e8f\u5217\u5316\u4e3a\u5b57\u7b26\u4e32\u3002"),(0,r.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\n@public interface Book {\n\n    @Id\n    @GeneratedValue(generatorType = SnowflakeIdGenerator.class)\n    // highlight-next-line\n    @JsonConverter(LongToStringConverter.class)\n    long id();\n\n    String name();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\n@public interface Book {\n\n    @Id\n    @GeneratedValue(generatorType = SnowflakeIdGenerator.class)\n    // highlight-next-line\n    @JsonConverter(LongToStringConverter.class)\n    long id();\n\n    String name();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n")))),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"SnowflakIdGenerator"),"\u662f\u7528\u6237\u63d0\u4f9b\u7684\u5206\u5e03\u5f0f\u96ea\u82b1id\u751f\u6210\u5668\u5b9e\u73b0\uff0c\u4e0d\u662f\u6211\u4eec\u8ba8\u8bba\u7684\u91cd\u70b9\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u8ba8\u8bba\u88ab\u6807\u8bb0\u7684\u90a3\u884c\u4ee3\u7801\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.jackson.JsonConverter"),"\u8868\u793a\u81ea\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u5c5e\u6027\u7684Jackson\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u884c\u4e3a\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.jackson.LongToStringConverter"),"\u8868\u793a\u5c06long\u7c7b\u578b\u7684\u503c\u6309\u7167String\u6765\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"LongToStringConveter"),"\u662fJimmer\u5185\u7f6e\u7684Converter\uff0c\u8fd9\u91cc\u5c55\u793a\u4e00\u4e0b\u5176\u6e90\u4ee3\u7801\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u5feb\u719f\u4e86\u89e3\u5982\u4f55\u81ea\u5b9a\u4e49",(0,r.kt)("inlineCode",{parentName:"p"},"Converter"),"\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.jackson;\n\npublic class LongToStringConverter implements Converter<Long, String> {\n\n    // \u5982\u4f55\u5e8f\u5217\u5316\n    @Override\n    public String output(Long value) {\n        return Long.toString(value);\n    }\n\n    // \u5982\u4f55\u53cd\u5e8f\u5217\u5316\n    @Override\n    public Long input(String jsonValue) {\n        return Long.parseLong(jsonValue);\n    }\n}\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u8fd9\u91cc\u4f7f\u7528\u7684\u662fJimmer\u7684\u6ce8\u89e3\u800c\u975eJackson\u6ce8\u89e3\uff0c\u539f\u56e0\u5728\u4e8e\uff1a\u8fd9\u4e0d\u4ec5\u4ec5\u662f\u5e8f\u5217\u5316\u6846\u67b6Jackson\u7684\u884c\u4e3a\u8c03\u6574\u95ee\u9898\uff0c\u8fd8\u6709"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../client"},"\u524d\u540e\u7aef\u81ea\u52a8\u5bf9\u63a5"),"\u7684\u95ee\u9898")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO\u8bed\u8a00"),"\u7684\u95ee\u9898\u3002")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u9700\u5728Converter\u5185\u90e8\u8003\u8651null\u503c\uff0cnull\u503c\u6c38\u8fdc\u4e0d\u4f1a\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Converter"),"\u7684\u4efb\u4f55\u65b9\u6cd5\u7684\u53c2\u6570\u3002")))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c\u6211\u4eec\u7ed5\u8fc7ORM\uff0c\u901a\u8fc7\u6a21\u62df\u6570\u636e\u5c55\u793a\u6548\u679c\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Objects.createBook(draft -> {\n    draft.setId(1546434604146774987L);\n    draft.setName("SQL in Action");\n});\nSystem.out.println(book);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    id = 1546434604146774987L\n    name = "SQL in Action"\n}\nprintln(book)\n')))),(0,r.kt)("p",null,"\u7531\u4e8eJimmer\u5b9e\u4f53\u7684toString\u5c31\u662fJackson\u5e8f\u5217\u5316\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u6253\u5370\u5e76\u89c2\u5bdfJackson\u5e8f\u5217\u5316\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // highlight-next-line\n    "id": "1546434604146774987",\n    "name": "SQL in Action"\n}\n')),(0,r.kt)("p",null,"\u53ef\u89c1\uff0c\u5e8f\u5217\u5316\u540e\u7684id\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u975e\u6570\u5b57\uff0c\u8fd9\u6837\uff0c\u5c31\u907f\u5f00\u4e86JavaScript\u5ba2\u6237\u7aef\u65e0\u6cd5\u89e3\u6790\u5927\u6570\u5b57\u7684\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u5e94\u7528\u4e8eidview\u5c5e\u6027"},"\u81ea\u52a8\u5e94\u7528\u4e8eIdView\u5c5e\u6027"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../advanced/view/id-view"},"@IdView\u5c5e\u6027"),"\u662f\u8fdb\u9636\u6620\u5c04\u624d\u4f1a\u8bb2\u89e3\u7684\u5185\u5bb9\uff0c\u8bfb\u8005\u4e5f\u53ef\u4ee5\u5148\u8df3\u8fc7\u672c\u8282\uff0c\u4ee5\u540e\u518d\u56de\u6765\u770b\u3002")),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    @IdView("authors")\n    // highlight-next-line\n    List<Long> bookIds();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    @IdView("authors")\n    // highlight-next-line\n    val bookIds: List<Long>\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"bookIds"),"\u5c5e\u6027\u5e76\u975e\u666e\u901a\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"List<Long>"),"\u96c6\u5408\uff0c\u800c\u662f\u6240\u6709\u5173\u8054\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u7684id\u7684\u96c6\u5408\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Book.id"),"\u5c5e\u6027\u5df2\u7ecf\u88ab\u6ce8\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"@JsonConverter"),"\u4fee\u9970\uff0c\u6240\u4ee5\uff0c\u65e0\u9700\u4e3a\u8fd9\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bookIds"),"\u5c5e\u6027\u6307\u5b9a\u4efb\u4f55\u6ce8\u89e3\uff0c\u8be5\u5c5e\u6027\u4e5f\u6709\u8fd9\u79cd\u80fd\u529b\u3002"),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u7ed5\u8fc7ORM\uff0c\u901a\u8fc7\u6a21\u62df\u6570\u636e\u5c55\u793a\u6548\u679c\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"Author author = Objects.createAuthor(draft -> {\n    draft.setBookIds(\n        Arrays.asList(\n            1546434604146774987L,\n            1546434604146774988L\n        )\n    );\n});\nSystem.out.println(book);\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val book = new(Book::class).by {\n    bookIds = listOf(\n        1546434604146774987L,\n        1546434604146774988L\n    )\n    \n}\nprintln(book)\n")))),(0,r.kt)("p",null,"\u7531\u4e8eJimmer\u5b9e\u4f53\u7684toString\u5c31\u662fJackson\u5e8f\u5217\u5316\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u6253\u5370\u5e76\u89c2\u5bdfJackson\u5e8f\u5217\u5316\u7684\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "bookIds": [\n        // highlight-next-line\n        "1546434604146774987",\n        // highlight-next-line\n        "1546434604146774988"\n    ]\n}\n')),(0,r.kt)("p",null,"\u53ef\u89c1\uff0c\u5e8f\u5217\u5316\u540e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"bookIds"),"\u5c5e\u6027\u7684\u6240\u6709\u5143\u7d20\u90fd\u662f\u5b57\u7b26\u4e32\uff0c\u800c\u975e\u6570\u5b57\uff0c\u8fd9\u6837\uff0c\u5c31\u907f\u5f00\u4e86JavaScript\u5ba2\u6237\u7aef\u65e0\u6cd5\u89e3\u6790\u5927\u6570\u5b57\u7684\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"\u81ea\u52a8\u5e94\u7528\u4e8edto"},"\u81ea\u52a8\u5e94\u7528\u4e8eDTO"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"../../object/view/dto-language"},"DTO"),"\u662f\u8fdb\u9636\u6620\u5c04\u624d\u4f1a\u8bb2\u89e3\u7684\u5185\u5bb9\uff0c\u8bfb\u8005\u4e5f\u53ef\u4ee5\u5148\u8df3\u8fc7\u672c\u8282\uff0c\u4ee5\u540e\u518d\u56de\u6765\u770b\u3002")),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u76ee\u5f55\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"dto"),"\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u5176\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    id\n    name\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210\u7684Java/Kotlin\u7c7b\u578b\u5982\u4e0b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\npublic class BookView {\n\n    // highlight-next-line\n    private String id;\n\n    private String name;\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\nclass BookView(\n    // highlight-next-line\n    val id: String,\n    val name: String\n) {\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n')))),(0,r.kt)("p",null,"\u53ef\u89c1\uff0c\u7f16\u8bd1\u540e\u81ea\u52a8\u751f\u6210\u7684DTO\u7c7b\u578b\u4e2did\u5c5e\u6027\u7684\u7c7b\u578b\u4e3aString\uff0c\u800c\u975elong\u3002"),(0,r.kt)("p",null,"\u6700\u540e\uff0c\u6211\u4eec\u9a8c\u8bc1\u4e00\u4e0b\u5c06\u5b9e\u4f53\u8f6c\u5316\u4e3aDTO\u5bf9\u8c61\uff0c\u5982\u4e0b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Objects.createBook(draft -> {\n    draft.setId(1546434604146774987L);\n    draft.setName("SQL in Action");\n});\nSystem.out.println(new BookView(book));\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    id = 1546434604146774987L\n    name = "SQL in Action"\n}\nprintln(BookView(book))\n')))),(0,r.kt)("p",null,"\u8f93\u51fa\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'BookView(\n    // highlight-next-line\n    id = "1546434604146774987",\n    name = "SQL in Action"\n)\n')),(0,r.kt)("h2",{id:"2-\u8131\u654f"},"2. \u8131\u654f"),(0,r.kt)("h3",{id:"\u7528\u6cd5-1"},"\u7528\u6cd5"),(0,r.kt)("p",null,"\u5047\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"\u5b9e\u4f53\u5177\u5907",(0,r.kt)("inlineCode",{parentName:"p"},"phone"),"\u5c5e\u6027\uff0c\u8868\u793a\u7528\u6237\u7684\u7535\u8bdd\u53f7\u7801\uff0c\u6211\u4eec\u73b0\u5728\u4e3a\u8be5\u5c5e\u6027\u8fdb\u884c\u8131\u654f\u5904\u7406\u3002"),(0,r.kt)("p",null,"\u6bd4\u5982\uff0c\u624b\u673a\u53f7\u663e\u793a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"135****6792"),"\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8131\u654f\u5e76\u4e0d\u662f\u4e00\u4e2a\u5355\u7eaf\u9875\u9762\u6e32\u67d3\u95ee\u9898\uff0c\u5fc5\u987b\u4fdd\u8bc1HTTP\u8bf7\u6c42\u672c\u8eab\u4e0d\u8fd4\u56de\u654f\u611f\u7684\u6570\u636e")),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8fd9\u4e2a\u9700\u6c42\uff0c\u6ca1\u6709\u5185\u7f6e\u7684Converter\u53ef\u7528\uff0c\u6211\u4eec\u5fc5\u987b\u81ea\u5b9a\u4e49Converter\uff0c\u7f16\u5199",(0,r.kt)("inlineCode",{parentName:"p"},"UserPhoneConverter"),"\uff0c\u5982\u4e0b:"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class UserPhoneConverter implements Converter<String, String> {\n\n    @Override\n    public String output(String value) {\n        return value.substring(0, 3) + "****" + value.substring(7);\n    }    \n}\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'class UserPhoneConverter : Converter<String, String> {\n\n    override fun output(value: String): String =\n        "${value.substring(0,3)}****${value.substring(7)}"\n}\n')))),(0,r.kt)("p",null,"\u7136\u540e\uff0c\u7b80\u5355\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"User"),"\u5b9e\u4f53\u5373\u53ef"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface User {\n\n    // highlight-next-line\n    @JsonConverter(UserPhoneConverter.class)\n    String phone();\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface User {\n\n    // highlight-next-line\n    @JsonConverter(UserPhoneConverter.class)\n    val phone: String\n}\n")))),(0,r.kt)("h3",{id:"\u517c\u987e\u8f93\u5165"},"\u517c\u987e\u8f93\u5165"),(0,r.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4f8b\u5b50\u4e2d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"UserPhoneConverter"),"\u53ea\u8986\u76d6\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"output"),"\u65b9\u6cd5\uff0c\u6ca1\u6709\u8986\u76d6",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"\u65b9\u6cd5\u7684\u9ed8\u8ba4\u5b9e\u73b0\u662f\u629b\u51fa",(0,r.kt)("inlineCode",{parentName:"p"},"UnsupportedOperationException"),"\u5f02\u5e38\uff0c\u56e0\u6b64\uff0c\u65e0\u6cd5\u652f\u6301\u53cd\u5e8f\u5217\u5316\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u4f1a\u57fa\u4e8e\u5b9e\u4f53\u5bf9\u8c61\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"Input DTO"),"\u4ee5\u5b8c\u6210\u6570\u636e\u5f55\u5165\uff0c\u800c\u4e14\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5ba2\u6237\u7aef\u5e94\u8be5\u5f55\u5165\u7cbe\u786e\u7684\u624b\u673a\u53f7\uff0c\u56e0\u6b64\uff0c\u6211\u4eec\u53ef\u4ee5\u5982\u6b64\u8986\u76d6",(0,r.kt)("inlineCode",{parentName:"p"},"input"),"\u65b9\u6cd5\u3002"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic String input(String value) {\n    retur value;\n}\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"override fun input(value: String): String =\n    value\n")))))}c.isMDXComponent=!0}}]);