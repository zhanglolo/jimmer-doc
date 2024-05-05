"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3248],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>s});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=u(t),s=l,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||r;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function s(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(83117),l=t(67294),r=t(34334),i=t(72389),o=t(67392),p=t(7094),u=t(12466);const m="tabList__CuJ",d="tabItem_LNqP";function c(e){var n;const{lazy:t,block:i,defaultValue:c,values:s,groupId:k,className:g}=e,y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=s??y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),v=(0,o.l)(N,((e,n)=>e.value===n.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===c?c:c??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==h&&!N.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:T}=(0,p.U)(),[f,E]=(0,l.useState)(h),I=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=k){const e=b[k];null!=e&&e!==f&&N.some((n=>n.value===e))&&E(e)}const O=e=>{const n=e.currentTarget,t=I.indexOf(n),a=N[t].value;a!==f&&(x(n),E(a),null!=k&&T(k,String(a)))},D=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=I.indexOf(e.currentTarget)+1;t=I[n]??I[0];break}case"ArrowLeft":{const n=I.indexOf(e.currentTarget)-1;t=I[n]??I[I.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},N.map((e=>{let{value:n,label:t,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,key:n,ref:e=>I.push(e),onKeyDown:D,onFocus:O,onClick:O},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":f===n})}),t??n)}))),t?(0,l.cloneElement)(y.filter((e=>e.props.value===f))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==f})))))}function s(e){const n=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(n)},e))}},18880:(e,n,t)=>{t.d(n,{ZP:()=>p});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const o={toc:[]};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u6700\u521d\uff0c\u4eba\u4eec\u76f4\u63a5\u7528\u4e1a\u52a1\u5b57\u6bb5\u4f5c\u4e3a\u8868\u7684\u4e3b\u952e\u3002\u8fd9\u662f\u6700\u76f4\u63a5\u6700\u5bb9\u6613\u4f7f\u7528\u7684\u65b9\u5f0f\uff0c\u4f46\u5b58\u5728\u4ee5\u4e0b\u95ee\u9898\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e3b\u952e\u4e0d\u7a33\u5b9a"),(0,l.kt)("p",{parentName:"li"},"\u7531\u4e8e\u4e3b\u952e\u672c\u8eab\u662f\u4e1a\u52a1\u5b57\u6bb5\uff0c\u6240\u4ee5\u4f1a\u88ab\u4fee\u6539\uff0c\u8fd9\u5c31\u5bfc\u81f4\u4e3b\u952e\u4e0d\u7a33\u5b9a\u3002"),(0,l.kt)("p",{parentName:"li"},"\u867d\u7136\u6570\u636e\u5e93\u4e2d\u5f15\u7528\u5b83\u7684\u5916\u952e\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"on update cascade"),"\u6765\u4fdd\u6301\u4e00\u81f4\uff0c\n\u4f46\u662f\u5bf9\u4e8e\u6570\u636e\u5e93\u5916\u7684\u7cfb\u7edf\uff0c\u6bd4\u5982\u7f13\u5b58\uff0c\u4e3b\u952e\u4e0d\u7a33\u5b9a\u4f1a\u5bfc\u81f4\u5f88\u591a\u95ee\u9898\u3002"),(0,l.kt)("p",{parentName:"li"},"\u5373\u4f7f\u4ece\u6280\u672f\u5c42\u9762\u80fd\u62bd\u8c61\u51fa\u4e3b\u952e\u4e0d\u7a33\u5b9a\u95ee\u9898\u7684\u7edf\u4e00\u89e3\u51b3\u529e\u6cd5\uff0c\u4e5f\u4e0d\u63a8\u8350\uff0c\u56e0\u4e3a\u8fd9\u6837\u7cfb\u7edf\u96be\u4ee5\u7406\u89e3\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u591a\u8868\u8fde\u63a5\u6210\u672c\u9ad8"),(0,l.kt)("p",{parentName:"li"},"\u7531\u4e8e\u4e3b\u952e\u672c\u8eab\u662f\u4e1a\u52a1\u5b57\u6bb5\uff0c\u4e3b\u952e\u7684\u7c7b\u578b\u5f88\u53ef\u80fd\u4e0d\u662f\u6570\u5b57\u7c7b\u578b\uff0c\u800c\u662f\u76f8\u5bf9\u8f83\u957f\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\n\u800c\u4e14\u8fd8\u53ef\u80fd\u662f\u591a\u4e2a\u5217\u7ec4\u5408\u800c\u6210\u7684\u8054\u5408\u4e3b\u952e\uff0c\u8fd9\u4f1a\u5bfc\u81f4\u591a\u8868\u94fe\u63a5\u6210\u672c\u9ad8\u3002"))),(0,l.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\uff0c\u4eba\u4eec\u5b66\u4f1a\u4f7f\u7528\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\u7684\u6570\u636e\u4f5c\u4e3a\u4e3b\u952e\uff0c\u6bd4\u5982"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u81ea\u52a8\u7f16\u53f7"),(0,l.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u5e8f\u5217\u503c"),(0,l.kt)("li",{parentName:"ul"},"UUID"),(0,l.kt)("li",{parentName:"ul"},"\u96ea\u82b1ID")),(0,l.kt)("p",null,"\u4e3a\u4e86\u8ba9\u4fdd\u5b58\u6307\u4ee4\u652f\u6301\u5e42\u7b49\u6027\u4fdd\u5b58\uff0cJimmer\u5f15\u5165\u4e86\u4e24\u4e2a\u6982\u5ff5\uff1aId\u548cKey"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@Id: \u4e3b\u952e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"@Key: \u4e1a\u52a1\u6027\u4e3b\u952e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679cId\u672c\u8eab\u5c31\u662f\u4e1a\u52a1\u5c5e\u6027\uff08\u4e0d\u63a8\u8350\uff09\uff0c\u65e0\u9700\u6307\u5b9aKey\uff0c\u56e0\u4e3aId\u672c\u8eab\u5df2\u7ecf\u8868\u793a\u4e86\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u7ea6\u675f\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679cId\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\uff08\u63a8\u8350\uff09\uff0c\u90a3\u4e48Key\u8868\u793a\u4e1a\u52a1\u5c42\u9762\u7684\u552f\u4e00\u7ea6\u675f\u662f\u4ec0\u4e48\u3002"))))),(0,l.kt)("p",null,"\u8bf7\u770b\u4e0b\u7684\u4f8b\u5b50"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u5b9e\u4f53\u7684Id\u91c7\u7528\u81ea\u52a8\u7f16\u53f7\uff0c\u5e76\u6ca1\u6709\u4e1a\u52a1\u610f\u4e49\u3002\u6240\u4ee5\uff0c\u4e3a\u4e86\u66f4\u597d\u5730\u914d\u5408\u4fdd\u5b58\u6307\u4ee4\uff0c\n\u8fd9\u91cc\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"key"),"\uff0c\u7531\u4e24\u4e2a\u5c5e\u6027\u6784\u6210\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u3002"),(0,l.kt)("p",null,"\u5bf9\u5e94\u7684DDL\u662f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create table TREE_NODE(\n    ID bigint not null,\n    NAME varchar(20) not null,\n    PARENT_ID bigint\n);\n\nalter table TREE_NODE\n    add constraint PK_TREE_NODE\n        primary key(ID);\n\nalter table TREE_NODE\n    add constraint UQ_TREE_NODE\n        /* highlight-next-line */\n        unique(NAME, PARENT_ID);\n")),(0,l.kt)("p",null,"\u5b9e\u4f53\u7c7b\u578b\u7684\u5c5e\u6027",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u88ab@Key\u4fee\u9970\uff0c\u5bf9\u5e94\u4e8e\u6570\u636e\u5e93\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"NAME"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"PARENT_ID"),"\u5217\u7ec4\u6210\u7684UNIQUE\u7ea6\u675f ",(0,l.kt)("em",{parentName:"p"},"\uff08\u6216UNIQUE INDEX\uff09"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u552f\u4e00\u6027\u7ea6\u675f\u53ef\u4ee5\u7528\u8ba1\u7b97\u673a\u6587\u4ef6\u7cfb\u7edf\u505a\u4e3a\u7c7b\u6bd4\u3002\u6587\u4ef6\u7cfb\u7edf\u5141\u8bb8\u540c\u540d\u76ee\u5f55\u6216\u6587\u4ef6\uff0c\u4f46\u5982\u679c\u9650\u5b9a\u7236\u76ee\u5f55\uff0c\u5219\u4e0d\u5141\u8bb8\u540c\u540d\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u901a\u8fc7\u8fd9\u4e2a\u4f8b\u5b50\uff0c\u6211\u4eec\u770b\u5230"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Key\u53ef\u4ee5\u7531\u591a\u4e2a\u5c5e\u6027\u7ec4\u6210")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5916\u952e\u53ef\u4ee5\u4f5c\u4e3aKey\u7684\u4e00\u90e8\u5206")))),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u53e6\u5916\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u7ec4\u6210Key\u7684\u5c5e\u6027\u5168\u90e8\u662f\u57fa\u4e8e\u5916\u952e\u7684\u5c5e\u6027"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Order order();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    Product product();\n\n    int quantity();\n\n    // Snapshot of `product.price`\n    BigDecimal unitPrice();\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface OrderItem {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val order: Order\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val product: Product\n\n    val quantity: Int\n\n    // Snapshot of `product.price`\n    val unitPrice: BigDecimal\n}\n")))))}p.isMDXComponent=!0},26197:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>p,metadata:()=>m,toc:()=>c});var a=t(83117),l=(t(67294),t(3905)),r=t(18880),i=t(65488),o=t(85162);const p={sidebar_position:10,title:"Key"},u=void 0,m={unversionedId:"mapping/advanced/key",id:"mapping/advanced/key",title:"Key",description:"\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/key.mdx",sourceDirName:"mapping/advanced",slug:"/mapping/advanced/key",permalink:"/jimmer-doc/zh/docs/mapping/advanced/key",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/advanced/key.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Key"},sidebar:"tutorialSidebar",previous:{title:"\u4e2d\u95f4\u8868\u8fc7\u6ee4\u5668",permalink:"/jimmer-doc/zh/docs/mapping/advanced/join-table-filter"},next:{title:"\u8fdc\u7a0b\u5173\u8054",permalink:"/jimmer-doc/zh/docs/mapping/advanced/remote"}},d={},c=[{value:"\u6982\u5ff5",id:"\u6982\u5ff5",level:2},{value:"\u591a\u7248\u672c\u652f\u6301",id:"\u591a\u7248\u672c\u652f\u6301",level:2},{value:"\u52a8\u6001\u8986\u76d6",id:"\u52a8\u6001\u8986\u76d6",level:2}],s={toc:c};function k(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6982\u5ff5"},"\u6982\u5ff5"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"@",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.Key"),"\u7528\u4e8e\u548c",(0,l.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"\u4fee\u6539\u7bc7/\u4fdd\u5b58\u6307\u4ee4"),"\u914d\u5408")),(0,l.kt)(r.ZP,{mdxType:"Key"}),(0,l.kt)("p",null,"\u672c\u6587\u53ea\u4ecb\u7ecdKey\u7684\u914d\u7f6e\uff0c\u81f3\u4e8e\u5982\u4f55\u8fdb\u4e00\u6b65\u4f7f\u7528\uff0c\u8bf7\u53c2\u89c1",(0,l.kt)("a",{parentName:"p",href:"../../mutation/save-command"},"\u4fdd\u5b58\u6307\u4ee4"),"\u3002"),(0,l.kt)("h2",{id:"\u591a\u7248\u672c\u652f\u6301"},"\u591a\u7248\u672c\u652f\u6301"),(0,l.kt)("p",null,"Jimmer\u652f\u6301",(0,l.kt)("a",{parentName:"p",href:"./logical-deleted"},"\u903b\u8f91\u5220\u9664"),"\uff0c\u8be5\u529f\u80fd\u4f1a\u5bfc\u81f4\u88ab\u6570\u636e\u53ea\u4f1a\u88ab\u9690\u85cf\u8d77\u6765\uff0c\u800c\u975e\u88ab\u771f\u6b63\u5220\u9664\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u6240\u5b9a\u4e49\u7684\u552f\u4e00\u6027\u7ea6\u675f\u662f\u9488\u5bf9\u672a\u9690\u85cf\u6570\u636e\u7684\uff0c\u5e76\u975e\u9488\u5bf9\u8868\u4e2d\u6240\u6709\u6570\u636e\u7684\uff0c\u6240\u4ee5\u4e0d\u80fd\u7b80\u5355\u5730\u6309\u7167",(0,l.kt)("inlineCode",{parentName:"p"},"@key"),"\u6765\u5b9a\u4e49\u552f\u4e00\u6027\u7ea6\u675f\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u8f6f\u5220\u9664\u6807\u5fd7\u662f\u65e5\u671f\u7c7b\u578b\u65f6"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @LogicalDeleted("now")\n    @Nullable\n    LocalDateTime deletedTime();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @LogicalDeleted("now")\n    val deletedTime: LocalDateTime?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u65f6\uff0c\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u6240\u5bf9\u5e94\u7684\u5217 ",(0,l.kt)("em",{parentName:"p"},"(\u5bf9\u8fd9\u4e2a\u4f8b\u5b50\u800c\u8a00\uff0c\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"em"},"name"),")")," \u548c\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5217 ",(0,l.kt)("em",{parentName:"p"},"(\u5bf9\u8fd9\u4e2a\u4f8b\u5b50\u800c\u8a00\uff0c\u5c31\u662f",(0,l.kt)("inlineCode",{parentName:"em"},"deletedTime"),")")," \u5408\u5e76\u5230\u4e00\u8d77\u5b9a\u4e49\u552f\u4e00\u6027\u7ea6\u675f\u5373\u53ef\uff0c\u4f8b\u5982"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"alter table BOOK\n    add constraint UQ_BOOK\n        unique(NAME, DELETED_TIME);\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5f53\u8f6f\u5220\u9664\u6807\u5fd7\u662f\u5176\u4ed6\u7c7b\u578b\u65f6"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u8f6f\u5220\u9664\u6807\u5fd7\u4e0d\u662f\u65e5\u671f\u7c7b\u578b\uff0c\u4f8b\u5982"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    boolean deleted();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val deleted: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,l.kt)("p",{parentName:"li"},"\u6b64\u65f6\uff0c\u628a",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u6240\u5bf9\u5e94\u7684\u5217\u548c\u903b\u8f91\u5220\u9664\u6807\u5fd7\u5217\u5728\u4e00\u8d77\u5efa\u7acb\u552f\u4e00\u6027\u7ea6\u675f\u4e0d\u518d\u662f\u53ef\u884c\u7684\u65b9\u6cd5\uff0c\u4f7f\u7528\u552f\u4e00\u6027\u6761\u4ef6\u7d22\u5f15\u662f\u552f\u4e00\u7684\u529e\u6cd5\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0d\u5e78\u7684\u662f\uff0c\u5e76\u975e\u6240\u6709\u6570\u636e\u5e93\u90fd\u652f\u6301\u6761\u4ef6\u7d22\u5f15\uff0c\u4e0d\u540c\u7684\u6570\u636e\u5e93\u4e0b\u521b\u5efa\u6761\u4ef6\u7d22\u5f15\u7684\u8bed\u6cd5\u5b8c\u5168\u4e0d\u540c\u3002\u8fd9\u91cc\u4ec5\u4ee5Postgres\u4e3a\u4f8b")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"create unique index BOOK_KEY_INDEX \n    on BOOK(NAME)\n    // highlight-next-line\n    where DELETED = false;\n")))),(0,l.kt)("h2",{id:"\u52a8\u6001\u8986\u76d6"},"\u52a8\u6001\u8986\u76d6"),(0,l.kt)("p",null,"\u501f\u52a9\u4e8e\u5b9e\u4f53\u4e2d",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u6ce8\u89e3\u7684\u914d\u7f6e\uff0c\u53eb\u505a\u9759\u6001\u914d\u7f6e\u3002"),(0,l.kt)("p",null,"\u6709\u7684\u65f6\u5019\uff0c\u4e0d\u540c\u7684\u4e1a\u52a1\u53ef\u80fd\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"@key"),"\u6709\u4e0d\u540c\u7684\u8981\u6c42\u3002\u56e0\u6b64\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u914d\u7f6e\u53ef\u4ee5\u5728\u8fd0\u884c\u65f6\u88ab\u52a8\u6001\u8986\u76d6\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"sqlClient\n    .getEntities()\n    .saveCommand(book)\n    // highlight-next-line\n    .setKeyProps(BookProps.NAME, BookProps.EDITION)\n    .execute();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"sqlClient.save(book) {\n    // highlight-next-line\n    .setKeyProps(Book::name, Book::edition)\n}\n")))))}k.isMDXComponent=!0}}]);