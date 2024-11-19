"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9513],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(34334);const i="tabItem_Ymn6";function l(e){let{children:n,hidden:t,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var a=t(83117),r=t(67294),i=t(34334),l=t(72389),o=t(67392),p=t(7094),s=t(12466);const u="tabList__CuJ",m="tabItem_LNqP";function c(e){var n;const{lazy:t,block:l,defaultValue:c,values:d,groupId:k,className:h}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??b.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),f=(0,o.l)(g,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)??b[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,p.U)(),[j,C]=(0,r.useState)(v),T=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=k){const e=N[k];null!=e&&e!==j&&g.some((n=>n.value===e))&&C(e)}const _=e=>{const n=e.currentTarget,t=T.indexOf(n),a=g[t].value;a!==j&&(O(n),C(a),null!=k&&y(k,String(a)))},x=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},h)},g.map((e=>{let{value:n,label:t,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:j===n?0:-1,"aria-selected":j===n,key:n,ref:e=>T.push(e),onKeyDown:x,onFocus:_,onClick:_},l,{className:(0,i.Z)("tabs__item",m,null==l?void 0:l.className,{"tabs__item--active":j===n})}),t??n)}))),t?(0,r.cloneElement)(b.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==j})))))}function d(e){const n=(0,l.Z)();return r.createElement(c,(0,a.Z)({key:String(n)},e))}},33181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(83117),r=(t(67294),t(3905)),i=t(65488),l=t(85162);const o={sidebar_position:8,title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04"},p=void 0,s={unversionedId:"mapping/advanced/join-sql",id:"mapping/advanced/join-sql",title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04",description:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-sql.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/join-sql",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-sql",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/join-sql.mdx",tags:[],version:"current",lastUpdatedAt:1704015848,formattedLastUpdatedAt:"2023\u5e7412\u670831\u65e5",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04"},sidebar:"tutorialSidebar",previous:{title:"JSON\u6620\u5c04",permalink:"/jimmer-doc/zh/docs/mapping/advanced/json"},next:{title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-table-filter"}},u={},m=[{value:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",id:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b",level:2},{value:"\u975e\u7ed3\u6784\u5316\u5173\u8054",id:"\u975e\u7ed3\u6784\u5316\u5173\u8054",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],c={toc:m};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b"},"\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u6848\u4f8b"),(0,r.kt)("p",null,"\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"../base/association"},"\u5173\u8054\u6620\u5c04"),"\u76f8\u5173\u5185\u5bb9\uff0c\u4e0d\u96be\u53d1\u73b0\uff0c\u6240\u6709\u5173\u8054\u90fd\u662f\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinColumn"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinTable")," ",(0,r.kt)("em",{parentName:"p"},"\uff08\u53ef\u80fd\u88ab\u7701\u7565\uff09"),"\u3002"),(0,r.kt)("p",null,"\u867d\u7136Jimmer\u652f\u6301\u4f2a\u5916\u952e ",(0,r.kt)("em",{parentName:"p"},"(\u5728\u5f00\u53d1\u4eba\u5458\u610f\u8bc6\u4e2d\u662f\u5916\u952e\uff0c\u4f46\u662f\u6570\u636e\u5e93\u4e2d\u5e76\u6ca1\u6709\u5bf9\u5e94\u7684\u5916\u952e\u7ea6\u675f)"),"\uff0c\u4f46\u662f\u4e4b\u524d\u6211\u4eec\u8ba8\u8bba\u7684\u6240\u6709\u5173\u8054\u6620\u5c04\u90fd\u662f\u57fa\u4e8e\u5173\u7cfb\u578b\u6570\u636e\u5e93\u76843NF\u8bbe\u8ba1\u3002"),(0,r.kt)("p",null,"\u7136\u800c\uff0c\u4f60\u53ef\u80fd\u4f1a\u63a5\u624b\u4e00\u4e2a\u9057\u7559\u6570\u636e\u5e93\uff0c\u5305\u542b\u975e\u8303\u5f0f\u5316\u7684\u6570\u636e\u5e93\u8bbe\u8ba1\uff0c\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create table book(\n    id bigint unsigned not null auto_increment primary key,\n    // highlight-next-line\n    author_ids varchar(100),\n    ...\u7701\u7565\u5176\u4ed6\u5b57\u6bb5...\n) engine=innodb;\n")),(0,r.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"author_ids"),"\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u5217\uff0c\u5176\u6570\u636e\u4e3a\u5f53\u524d",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"\u6240\u5173\u8054\u7684\u6240\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"Author"),"\u5bf9\u8c61\u7684id\u7528\u201c\u9017\u53f7\u201d\u62fc\u63a5\u5728\u4e00\u8d77\uff0c\u6bd4\u5982",(0,r.kt)("inlineCode",{parentName:"p"},"1, 5, 100, 206"),"\u3002"),(0,r.kt)("p",null,"\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\uff0c\u4e0d\u6ee1\u8db3\u5173\u7cfb\u578b\u6570\u636e\u5e93\u76843NF\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u652f\u6301\u6570\u7ec4\u7c7b\u578b\u7684Postgres\u800c\u8a00\uff0c\u91c7\u7528\u6570\u7ec4\u662f\u66f4\u597d\u7684\u9009\u62e9\uff0c\u4f46\u662f\uff0c\u4e3a\u4e86\u8ba9\u793a\u8303\u6709\u66f4\u597d\u7684\u666e\u9002\u6027\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u4ecd\u7136\u91c7\u7528\u5b57\u7b26\u4e32\u62fc\u63a5\uff0c\u4e0d\u5229\u7528\u6570\u636e\u5e93\u4ea7\u54c1\u7684\u7279\u6709\u529f\u80fd\u3002")),(0,r.kt)("h2",{id:"\u975e\u7ed3\u6784\u5316\u5173\u8054"},"\u975e\u7ed3\u6784\u5316\u5173\u8054"),(0,r.kt)("p",null,"\u4e3a\u4e86\u652f\u6301\u8fd9\u79cd\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\uff0cJimmer\u63d0\u4f9b\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"@org.babyfish.jimmer.sql.JoinSql"),"\u6ce8\u89e3\u3002"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"@JoinSql"),"\u5fc5\u987b\u4e5f\u53ea\u80fd\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"@ManyToMany"),"\u914d\u5408\u4f7f\u7528")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u521b\u5efa\u4e00\u4e2aSQL\u51fd\u6570 ",(0,r.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u4ee5MySQL\u4e3a\u4f8b)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"create function concatenation_string_contains(\n    self varchar(100),\n    id bigint\n) returns boolean\nbegin\n    if self is null then\n        return false;\n    end if;\n    return self regexp concat('(^|\\\\,)\\\\s*', id, '\\\\s*(\\\\,|$)');\nend;\n")),(0,r.kt)("p",null,"\u8be5\u51fd\u6570\u5047\u8bbe\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"self"),"\u7684\u683c\u5f0f\u662f\u591a\u4e2a\u6570\u5b57\u7528\u9017\u53f7\u8fde\u63a5\u7684\u7ed3\u679c\uff0c\u5224\u65ad\u5176\u4e2d\u662f\u5426\u5305\u542b\u53c2\u6570",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"\u3002\u4f8b\u5982"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"concatenation_string_contains('100, 200, 300', 200)"),"\u8fd4\u56detrue")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"concatenation_string_contains('100, 200, 300', 201)"),"\u8fd4\u56defalse"))),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u6620\u5c04\u975e\u7ed3\u6784\u5316\u7684\u591a\u5bf9\u591a\u5173\u8054"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " +\n        "    %target_alias.id" +\n        ")"\n    )\n    List<Author> authors();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    @ManyToMany\n    // highlight-next-line\n    @JoinSql(\n        "concatenation_string_contains(" +\n        "    %alias.author_ids, " +\n        "    %target_alias.id" +\n        ")"\n    )\n    val authors: List<Author>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@JsonSql"),"\u4f7f\u7528\u7684SQL\u8868\u8fbe\u5f0f\u8868\u793a\u8fde\u63a5\u6761\u4ef6\uff0c\u5176\u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"concatenation_string_contains"),": \u6211\u4eec\u4e4b\u524d\u5b9a\u4e49\u7684SQL\u51fd\u6570")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"%alias"),": Jimmer\u7ea6\u5b9a\u7684\u7279\u6b8a\u7b26\u53f7\uff0c\u8868\u793a\u5f53\u524d\u8868 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a",(0,r.kt)("inlineCode",{parentName:"em"},"book"),"\u8868\uff09")," \u7684alias")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"%target_alias"),": Jimmer\u7ea6\u5b9a\u7684\u7279\u6b8a\u7b26\u53f7\uff0c\u8868\u793a\u76ee\u6807\u8868 ",(0,r.kt)("em",{parentName:"p"},"\uff08\u5728\u672c\u4f8b\u4e2d\u4e3a",(0,r.kt)("inlineCode",{parentName:"em"},"author"),"\u8868\uff09")," \u7684alias"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"ORM\u81ea\u52a8\u751f\u6210SQL ",(0,r.kt)("em",{parentName:"p"},"(\u8fd9\u5bf9\u52a8\u6001\u67e5\u8be2\u975e\u5e38\u91cd\u8981\uff0c\u5c24\u5176\u662fJimmer\u8fd9\u79cd\u9996\u6b21\u63d0\u51fa",(0,r.kt)("a",{parentName:"em",href:"../../query/dynamic-join"},"\u52a8\u6001\u8868\u8fde\u63a5"),"\u6982\u5ff5\u7684ORM)"),"\uff0c\u7528\u6237\u65e0\u6cd5\u5e72\u9884\u6700\u7ec8SQL\u4e2d\u5404\u8868\u7684alias\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u56e0\u6b64\uff0c\u5728\u6b64\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"%alias"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"%target_alias"),"\u662f\u552f\u4e00\u7684\u529e\u6cd5\u3002")),(0,r.kt)("p",null,"\u503c\u5f97\u4e00\u63d0\u7684\u662f\uff0c\u5982\u679c\u60f3\u5b9a\u4e49\u53cc\u5411\u591a\u5bf9\u591a\u5173\u8054\uff0c\u7531\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Book.authors"),"\u5df2\u7ecf\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinSql"),"\uff0c\u53e6\u5916\u4e00\u7aef\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Author.books"),"\u5c31\u6ca1\u5fc5\u8981\u518d\u6b21\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinSql"),"\u4e86\uff0c\u548c\u4ee5\u524d\u4e00\u6837\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy"),"\u8868\u793a\u81ea\u5df1\u662f\u4ece\u52a8\u7aef\u5c5e\u6027\u5373\u53ef"),(0,r.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Author.java"',title:'"Author.java"'},'@Entity\npublic interface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    List<Book> books();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Author.kt"',title:'"Author.kt"'},'@Entity\ninterface Author {\n\n    // highlight-next-line\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,r.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"\u9664\u975e\u5fc5\u987b\u8981\u517c\u5bb9\u5df2\u6709\u6570\u636e\u5e93\uff0c\u5426\u5219\u4e0d\u8981\u8fdb\u884c\u975e\u7ed3\u6784\u5316\u8bbe\u8ba1\u5e76\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@JoinSql"),"\u8fdb\u884c\u6620\u5c04\uff0c\u56e0\u4e3a\u975e\u7ed3\u6784\u5316\u591a\u5bf9\u591a\u5173\u8054\u5b58\u5728\u5f88\u591a\u9650\u5236\uff1a"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u4f5c\u4e3a",(0,r.kt)("a",{parentName:"p",href:"./remote"},"\u8fdc\u7a0b\u5173\u8054"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u88ab\u53c2\u4e0e",(0,r.kt)("a",{parentName:"p",href:"../../query/dynamic-join/optimization"},"\u534a\u8fde\u63a5\u4f18\u5316"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u65e0\u6cd5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"../../cache/cache-type/association"},"\u5173\u8054\u7f13\u5b58"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e0d\u80fd\u4f5c\u4e3a\u6570\u636e\u7ed3\u6784\u7684\u4e00\u90e8\u5206\u88ab",(0,r.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u4fdd\u5b58\u3002\u751a\u81f3\uff0c\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u5305\u542b\u975e\u7ed3\u6784\u5316\u5173\u8054\u4f1a\u5bfc\u81f4\u5f02\u5e38")))))}d.isMDXComponent=!0}}]);