"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6584],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>N});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=a.createContext({}),m=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=m(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=m(t),N=l,u=k["".concat(p,".").concat(N)]||k[N]||d[N]||r;return t?a.createElement(u,o(o({ref:n},s),{},{components:t})):a.createElement(u,o({ref:n},s))}));function N(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=k;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var m=2;m<r;m++)o[m]=t[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(67294),l=t(34334);const r="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(83117),l=t(67294),r=t(34334),o=t(72389),i=t(67392),p=t(7094),m=t(12466);const s="tabList__CuJ",d="tabItem_LNqP";function k(e){var n;const{lazy:t,block:o,defaultValue:k,values:N,groupId:u,className:c}=e,g=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),T=N??g.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),b=(0,i.l)(T,((e,n)=>e.value===n.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===k?k:k??(null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)??g[0].props.value;if(null!==h&&!T.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${T.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,p.U)(),[C,f]=(0,l.useState)(h),E=[],{blockElementScrollPositionUntilNextRender:O}=(0,m.o5)();if(null!=u){const e=v[u];null!=e&&e!==C&&T.some((n=>n.value===e))&&f(e)}const I=e=>{const n=e.currentTarget,t=E.indexOf(n),a=T[t].value;a!==C&&(O(n),f(a),null!=u&&y(u,String(a)))},_=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=E.indexOf(e.currentTarget)+1;t=E[n]??E[0];break}case"ArrowLeft":{const n=E.indexOf(e.currentTarget)-1;t=E[n]??E[E.length-1];break}}null==(n=t)||n.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},c)},T.map((e=>{let{value:n,label:t,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===n?0:-1,"aria-selected":C===n,key:n,ref:e=>E.push(e),onKeyDown:_,onFocus:I,onClick:I},o,{className:(0,r.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":C===n})}),t??n)}))),t?(0,l.cloneElement)(g.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},g.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==C})))))}function N(e){const n=(0,o.Z)();return l.createElement(k,(0,a.Z)({key:String(n)},e))}},55526:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>N,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=t(83117),l=(t(67294),t(3905)),r=t(65488),o=t(85162);const i={sidebar_position:2,title:"\u62e5\u6709\u65b9\u7279\u6709\u529f\u80fd"},p=void 0,m={unversionedId:"mutation/save-command/association/owner",id:"mutation/save-command/association/owner",title:"\u62e5\u6709\u65b9\u7279\u6709\u529f\u80fd",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/association/owner.mdx",sourceDirName:"mutation/save-command/association",slug:"/mutation/save-command/association/owner",permalink:"/jimmer-doc/zh/docs/mutation/save-command/association/owner",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/save-command/association/owner.mdx",tags:[],version:"current",lastUpdatedAt:1732491163,formattedLastUpdatedAt:"2024\u5e7411\u670824\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u62e5\u6709\u65b9\u7279\u6709\u529f\u80fd"},sidebar:"tutorialSidebar",previous:{title:"\u5173\u8054\u5206\u7c7b",permalink:"/jimmer-doc/zh/docs/mutation/save-command/association/classification"},next:{title:"\u5173\u8054\u5bf9\u8c61\u4fdd\u5b58\u6a21\u5f0f",permalink:"/jimmer-doc/zh/docs/mutation/save-command/associated-save-mode"}},s={},d=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"1. \u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054",id:"1-\u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054",level:2},{value:"2. \u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61",id:"2-\u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61",level:2},{value:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a",id:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4e0d\u52a0\u9650\u5236",id:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\u4e0d\u52a0\u9650\u5236",level:3}],k={toc:d};function N(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,l.kt)("p",null,"\u6240\u754f\u62e5\u6709\u65b9\uff0c\u53ea\u5177\u5907",(0,l.kt)("inlineCode",{parentName:"p"},"mappedBy"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToOne"),"\u5bf9\u8c61\u3002\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u4e3a\u4f8b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\npublic interface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = true)\n    List<Book> books();\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Entity\ninterface BookStore {\n\n    // highlight-next-line\n    @OneToMany(mappedBy = true)\n    val books: List<Book>\n}\n")))),(0,l.kt)("p",null,"\u8fd9\u79cd\u5173\u8054\u5177\u5907\u4e00\u4e2a\u7279\u6b8a\u529f\u80fd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61"))),(0,l.kt)("h2",{id:"1-\u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054"},"1. \u81ea\u52a8\u8bbe\u7f6e\u5b50\u5bf9\u8c61\u7684\u9006\u5173\u8054"),(0,l.kt)("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u5b9e\u4f53"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},'@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    @Nullable\n    TreeNode parent();\n\n    @OneToMany(mappedBy = "parent")\n    List<TreeNode> childNodes();\n}\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},'@Entity\ninterface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    @OneToMany(mappedBy = "parent")\n    val childNodes: List<TreeNode>\n}\n')))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\uff0c\u9664\u4e86\u660e\u786e\u6297\u53ef\u63a5\u53d7wild\u5bf9\u8c61\u7684\u4fdd\u6301\u6a21\u5f0f\u5916\uff0c\u88ab\u4fdd\u5b58\u5bf9\u8c61\u9700\u8981"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u4e48\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode.id"),"\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u4e48\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode.name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode.parent"),"\u5c5e\u6027"))),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u5982\u4e0b\u4ee3\u7801\u53ef\u4ee5\u6b63\u5e38\u8fd0\u884c"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode rootNode = Immutables.createTreeNode(root -> {\n    root.setName("Root");\n    root.setParent(null);\n    root.addIntoChildNodes(child -> {\n        child.setName("Child-1");\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    });\n    root.addIntoChildNodes(child -> {\n        child.setName("Child-2");\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    });\n});\nsqlClient\n    .saveCommand(rootNode)\n    .setTargetTransferModeAll(TargetTransferMode.ALLOWED)\n    .execute();\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val rootNode = TreeNode {\n    name = "Root"\n    parent = null\n    childNodes().addBy {\n        name = "Child-1"\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    }\n    childNodes().addBy {\n        name = "Child-2"\n        // \u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u65e0\u9700\u6307\u5b9a`parent`\u5c5e\u6027\n    }\n}\nsqlClient.save(rootNode) {\n    setTargetTransferModeAll(TargetTransferMode.ALLOWED)\n}\n')))),(0,l.kt)("p",null,"\u4ee3\u7801\u4e2d\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"setTargetTransferModeAll(TargetTransferMode.ALLOWED)"),"\u5e76\u975e\u8fd9\u91cc\u5173\u6ce8\u7684\u7126\u70b9\uff0c\u5e76\u8bfb\u8005\u5148\u884c\u5ffd\u7565\u4e4b\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\uff0c\u867d\u7136\u6839\u5bf9\u8c61 ",(0,l.kt)("em",{parentName:"p"},"(",(0,l.kt)("inlineCode",{parentName:"em"},"Root"),")")," \u7684",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u90fd\u88ab\u6307\u5b9a\u4e86\uff0c\n\u4f46\u662f\u5bf9\u4e8e\u975e\u6839\u5bf9\u8c61 ",(0,l.kt)("em",{parentName:"p"},"(",(0,l.kt)("inlineCode",{parentName:"em"},"Child-1"),", ",(0,l.kt)("inlineCode",{parentName:"em"},"Child-2"),")")," \u800c\u8a00\uff0c\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86\uff0c\u4f46",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u5e76\u672a\u88ab\u6307\u5b9a\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode.childNodes"),"\u5c5e\u6027\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode.parent"),"\u5c5e\u6027\u4e92\u4e3a\u9006\u5411\u5173\u8054\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e\u4e3b\u52a8\u7aef\u7684\u591a\u5bf9\u4e00 ",(0,l.kt)("em",{parentName:"p"},"(\u6216\u4e00\u5bf9\u4e00)")," \u5173\u8054 ",(0,l.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"TreeNode.parent"),")")," \u800c\u8a00\uff0c\n\u4e00\u65e6\u901a\u8fc7\u5176\u4ece\u52a8\u7aef\u7684\u4e00\u5bf9\u591a ",(0,l.kt)("em",{parentName:"p"},"(\u6216\u4e00\u5bf9\u4e00)")," \u5173\u8054 ",(0,l.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"TreeNode.childNodes"),")")," \u4e3a\u7236\u5bf9\u8c61\u6307\u5b9a\u4e86\u5b50\u5bf9\u8c61\u96c6\u5408\uff0c\n\u90a3\u4e48\u96c6\u5408\u4e2d\u7684\u6bcf\u4e00\u4e2a\u5b50\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61\u5f15\u7528\u90fd\u4f1a\u88ab\u81ea\u52a8\u8bbe\u7f6e\u3002")),(0,l.kt)("p",null,"\u5728\u672c\u4f8b\u5b50\u4e2d\uff0c\u7528\u6237\u539f\u672c\u671f\u671b\u4fdd\u5b58\u7684\u5bf9\u8c61\u6811\u4e3a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name":"Root",\n    "parent":null,\n    "childNodes":[\n        {"name":"Child-1"},\n        {"name":"Child-2"}\n    ]\n}\n')),(0,l.kt)("p",null,"\u5047\u8bbe\u6839\u5143\u7d20\u88ab\u63d2\u5165\u540e\u6570\u636e\u5e93\u4e3a\u6839\u5bf9\u8c61\u5206\u914d\u7684\u81ea\u52a8\u7f16\u53f7\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"100"),"\uff0cJimmer\u4f1a\u81ea\u52a8\u8c03\u6574\u8fd9\u9897\u6811"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 100,\n    "name":"Root",\n    "parent":null,\n    "childNodes":[\n        {\n            "name":"Child-1",\n            // highlight-next-line\n            "parent": {"id": 100}\n        },\n        {\n            "name":"Child-2",\n            // highlight-next-line\n            "parent": {"id": 100}\n        }\n    ]\n}\n')),(0,l.kt)("p",null,"\u53ef\u89c1\uff0c\u4e00\u65e6\u5b8c\u6210\u4e86\u5bf9\u7236\u5bf9\u8c61\u7684\u4fdd\u5b58\uff0c\u6240\u6709\u5b50\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode.parent"),"\u5c5e\u6027\u90fd\u4f1a\u88ab\u81ea\u52a8\u8bbe\u7f6e\u3002\u5373\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"id"),"\u5c5e\u6027\u672a\u88ab\u6307\u5b9a\u7684\u60c5\u51b5\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4eceJimmer\u7684\u89d2\u5ea6\u770b\uff0c\u6240\u6709",(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u90fd\u88ab\u6307\u5b9a\u4e86\uff0c\u5373",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027\u90fd\u88ab\u6307\u5b9a\u4e86")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4ece\u7528\u6237\u7684\u89d2\u5ea6\u770b\uff0c\u9664\u4e86\u6839\u5bf9\u8c61\u9700\u8981\u540c\u65f6\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u5916\uff0c\u5176\u4ed6\u6240\u6709\u5bf9\u8c61\u90fd\u53ea\u9700\u8981\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u5c5e\u6027"))),(0,l.kt)("p",null,"\u4e0a\u8bc9\u4f8b\u5b50\u4f1a\u751f\u6210\u4e09\u6761SQL"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6309",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u67e5\u8be2\u6839\u5bf9\u8c61\u662f\u5426\u5b58\u5728"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"Purpose: COMMAND(NULL_NOT_DISTINCT_REQUIRED)\nselect\n    tb_1_.NODE_ID,\n    tb_1_.NAME,\n    tb_1_.PARENT_ID\nfrom TREE_NODE tb_1_\nwhere\n        tb_1_.PARENT_ID is null\n    and\n        tb_1_.NAME = ? /* Root */\n")),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u91cc\uff0c\u5e76\u6ca1\u6709\u4f7f\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u80fd\u529b\uff0c\u800c\u662f\u901a\u8fc7\u800c\u5916\u67e5\u8be2\u6765\u51b3\u5b9a\u540e\u7eed\u64cd\u4f5c\u5e94\u8be5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u8fd8\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\u3002"),(0,l.kt)("p",{parentName:"li"},"\u8fd9\u662f\u56e0\u4e3a\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u80fd\u529b\u4f9d\u8d56\u4e8e\u552f\u4e00\u6027\u7ea6\u675f ",(0,l.kt)("em",{parentName:"p"},"(\u6216\u552f\u4e00\u7d22\u5f15)"),"\uff0c\u8fd9\u91cc\uff0c\u88ab\u4fdd\u5b58\u7684\u6839\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u4e3anull\uff0c\n\u5e76\u975e\u6240\u6709\u6570\u636e\u5e93\u90fd\u5177\u5907\u4e3a\u552f\u4e00\u7ea6\u675f\u5b9a\u4e49null\u7684\u884c\u4e3a\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",{parentName:"li"},"\u56e0\u6b64\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0b\uff0c\u5982\u679c\u88ab\u4fdd\u5b58\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"@Key"),"\u5c5e\u6027\u4e3anull\uff0cJimmer\u4f1a\u653e\u5f03\u4f7f\u7528\u6570\u636e\u672c\u8eab\u7684UPSERT\u80fd\u529b\uff0c\n\u6267\u884c\u989d\u5916\u7684\u67e5\u8be2\u6765\u5224\u65ad\u540e\u7eed\u64cd\u4f5c\u5e94\u8be5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\uff0c\u5e76\u5411\u5f00\u53d1\u4eba\u5458\u62a5\u544a",(0,l.kt)("inlineCode",{parentName:"p"},"QueryReason.NULL_NOT_DISTINCT_REQUIRED"),"\u3002"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u67d0\u4e9b\u6570\u636e\u5e93\uff0c\u4f8b\u5982Postgres\uff0c\u53ef\u4ee5\u4e3a\u552f\u4e00\u7ea6\u675f\u5b9a\u4e49null\u7684\u884c\u4e3a\u3002\n\u5982\u4f55\u5728\u8fd9\u7c7b\u6570\u636e\u5e93\u4e2d\u89e3\u51b3\u6b64\u95ee\u9898\u5e76\u975e\u672c\u6587\u5173\u6ce8\u70b9\uff0c\u8bf7\u67e5\u9605",(0,l.kt)("inlineCode",{parentName:"p"},"QueryReason.NULL_NOT_DISTINCT_REQUIRED"),"\u7684\u6587\u6863\u6ce8\u91ca\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5047\u8bbe\u4e0a\u8ff0\u67e5\u8be2\u5224\u65ad\u88ab\u4fdd\u5b58\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u4e0d\u5b58\u5728\uff0c\u76f4\u63a5\u63d2\u5165\u6839\u5bf9\u8c61\u5373\u53ef"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"insert into TREE_NODE(NAME, PARENT_ID) \nvalues(?, ?)\n/* batch-0: [Root, DbNull{type=long}] */\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u5b50\u5bf9\u8c61 ",(0,l.kt)("em",{parentName:"p"},"(\u5047\u8bbe\u4fdd\u5b58\u6839\u5bf9\u8c61\u540e\u5f97\u77e5\u5176id\u4e3a100)")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"merge into TREE_NODE(\n    NAME, PARENT_ID\n) key(\n    NAME, PARENT_ID\n) values(?, ?)\n/* batch-0: [Child-1, 100] */\n/* batch-1: [Child-2, 100] */\n")))),(0,l.kt)("h2",{id:"2-\u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61"},"2. \u914d\u7f6e\u662f\u5426\u5141\u8bb8\u4e0d\u540c\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61"),(0,l.kt)("h3",{id:"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a"},"\u4fdd\u5b88\u7684\u9ed8\u8ba4\u884c\u4e3a"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u4e00\u4e2a\u6848\u4f8b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'BookStore store = Immutables.createBookStore(draft -> {\n    draft.setName("MANNING");\n    draft.addIntoBooks(book -> {\n        book.setId(12L);\n    });\n    draft.addIntoBooks(book -> {\n        book.setId(1L);\n    });\n});\nsqlClient.save(store);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val store = BookStore {\n    name = "MANNING"\n    books().addBy {\n        id = 12L\n    }\n    books().addBy {\n        id = 1L\n    }\n}\nsqlClient.save(store)\n')))),(0,l.kt)("p",null,"\u6267\u884c\u8fd9\u6837\u7684\u4ee3\u7801\uff0c\u6267\u884c\u5982\u4e0bSQL\u5e76\u5bfc\u81f4\u5f02\u5e38"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u6839\u5bf9\u8c61",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"merge into BOOK_STORE(\n    NAME\n) key(NAME) values(?)\n/* batch-0: [MANNING] */\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u5b50\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"Book")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"// highlight-next-line\nPurpose: COMMAND(TARGET_NOT_TRANSFERABLE)\nselect\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION,\n    tb_1_.STORE_ID\nfrom BOOK tb_1_\nwhere\n    tb_1_.ID = any(? /* [12, 1] */)\n")),(0,l.kt)("p",{parentName:"li"},"\u5947\u602a\u7684\u662f\uff0c\u5c3d\u7ba1\u5b50\u5bf9\u8c61\u7684id\u5c5e\u6027\u88ab\u6307\u5b9a\u4e86 ",(0,l.kt)("em",{parentName:"p"},"(\u8fd9\u901a\u5e38\u610f\u5473\u7740Jimmer\u4f1a\u5229\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,l.kt)("inlineCode",{parentName:"em"},"UPSERT"),"\u80fd\u529b)"),"\uff0c\n\u4f46Jimmer\u4ecd\u7136\u5c1d\u8bd5\u901a\u8fc7\u67e5\u8be2\u6765\u5224\u65ad\u540e\u7eed\u64cd\u4f5c\u5e94\u8be5\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),"\u8fd8\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\uff0c\u800c\u975e\u5229\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT\u80fd\u529b"),"\u3002\n\u66f4\u91cd\u8981\u7684\u662f\uff0cJimmer\u62a5\u544a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"QueryReason.TARGET_NOT_TRANSFERABLE"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6700\u7ec8\uff0c\u4e0a\u8ff0\u4ee3\u7801\u8fd8\u4f1a\u5bfc\u81f4\u5982\u4e0b\u5f02\u5e38"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh"},'Save error caused by the path: "<root>.books": \nCan the move the child object whose type is "org.doc.j.model.Book" \nand id is "1" to another parent object because the property \n"org.doc.j.model.BookStore.books" \n// highlight-next-line\ndoes not support target transfer\n')))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u662f\u591a\u5bf9\u4e00\u5173\u8054\uff0c\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\uff0c\u53ea\u53ef\u80fd\u96b6\u5c5e\u4e8e\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\uff0c\u800c\u65e0\u6cd5\u540c\u65f6\u96b6\u5c5e\u4e8e\u591a\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u56e0\u6b64\uff0c\u901a\u8fc7\u9006\u5411\u7684\u4e00\u5bf9\u591a\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\uff0c\u5c31\u662f\u5efa\u7acb\u4ece\u5f53\u524d",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u7236\u5bf9\u8c61\u5230\u53e6\u5916\u4e00\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\uff0c\n\u5982\u679c",(0,l.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u5df2\u7ecf\u96b6\u5c5e\u4e8e\u53e6\u5916\u4e00\u4e2a\u7236\u5bf9\u8c61\uff0c\u4f1a\u5bfc\u81f4\u5f53\u524d\u7236\u5bf9\u8c61\u4ece\u5176\u4ed6\u7236\u5bf9\u8c61\u62a2\u593a\u5b50\u5bf9\u8c61\u3002\u6216\u8005\u8bf4\uff0c\u5b50\u5bf9\u8c61\u5728\u4e0d\u540c\u7236\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u4e86\u8fc1\u79fb\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u8fd9\u662f\u5f00\u53d1\u4eba\u5458\u9884\u6599\u4e4b\u4e2d\u7684\u884c\u4e3a\uff0c\u90a3\u81ea\u7136\u6ca1\u6709\u95ee\u9898\u3002\u4f46\u662f\uff0c\u5982\u679c\u8fd9\u5e76\u975e\u5f00\u53d1\u4eba\u5458\u9884\u6599\u4e2d\u7684\u884c\u4e3a\uff0c\u53ef\u80fd\u5bfc\u81f4\u65e0\u610f\u7684\u758f\u5ffd\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cJimmer\u91c7\u7528\u4fdd\u5b88\u7684\u7b56\u7565\uff0c\u7981\u6b62\u5b50\u5bf9\u8c61\u5728\u4e0d\u540c\u7236\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u4e86\u8fc1\u79fb\u3002"),(0,l.kt)("p",null,"\u5728\u6b64\u4f8b\u4e2d\uff0c\u4f01\u56fe\u8ba9",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore(MANNING)"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Book(12)"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Book(1)"),"\u5173\u8054\u8d77\u6765\uff0c\nJimmer\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"QueryReason.TARGET_NOT_TRANSFERABLE"),"\u4e3a\u7531\u6267\u884c\u989d\u5916\u7684\u67e5\u8be2\uff0c\u68c0\u67e5\u662f\u5426\u6709\u5b50\u5bf9\u8c61\u5728\u4e0d\u540c\u7236\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u4e86\u8fc1\u79fb\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book(12)"),"\u5df2\u7ecf\u96b6\u5c5e\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"BookStore(MANNING)"),"\uff0c\u672a\u53d1\u751f\u8fc1\u79fb\uff0c\u6ca1\u95ee\u9898"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Book(1)"),"\u5e76\u4e0d\u96b6\u5c5e\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"BookStore(MANNING)"),"\uff0c\u800c\u96b6\u5c5e\u4e8e",(0,l.kt)("inlineCode",{parentName:"li"},"BookStore(O'REILLY)"),"\uff0c\u53d1\u751f\u4e86\u8fc1\u79fb\uff0c\u56e0\u6b64\u6700\u7ec8\u629b\u51fa\u5f02\u5e38\u3002")),(0,l.kt)("p",null,"\u9ed8\u8ba4\u884c\u4e3a\u975e\u5e38\u4fdd\u5b88\uff0c\u867d\u7136\u907f\u514d\u4e86\u4e0d\u540c\u7236\u5bf9\u8c61\u5bf9\u5b50\u5bf9\u8c61\u7684\u62a2\u593a ",(0,l.kt)("em",{parentName:"p"},"(\u5982\u679c\u5f00\u53d1\u4eba\u5458\u8ba4\u4e3a\u8fd9\u79cd\u65e0\u610f\u62a2\u593a\u5bf9\u4e1a\u52a1\u662f\u6709\u5bb3\u7684)"),"\uff0c\n\u4f46\u5bfc\u81f4\u4e86\u989d\u5916\u7684\u67e5\u8be2\uff0c\u5e76\u672a\u5145\u5206\u53d1\u6325\u6570\u636e\u5e93\u672c\u8eab",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT"),"\u80fd\u529b\uff0c\u6027\u80fd\u4e0d\u4f73\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u8ba4\u4e3a\u66f4\u4f18\u7684\u6027\u80fd\u6bd4\u8fd9\u79cd\u4fdd\u5b88\u7684\u9632\u5fa1\u884c\u4e3a\u66f4\u91cd\u8981\uff0cJimmer\u63d0\u4f9b\u989d\u5916\u914d\u7f6e\uff0c\u6539\u53d8\u8fd9\u79cd\u884c\u4e3a\u3002"),(0,l.kt)("h3",{id:"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\u4e0d\u52a0\u9650\u5236"},"\u8986\u76d6\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4e0d\u52a0\u9650\u5236"),(0,l.kt)("p",null,"\u4e3a\u6027\u80fd\u4f18\u5148\uff0c\u8981\u53d6\u6d88\u8fd9\u79cd\u9650\u5236\uff0c\u6709\u4e24\u79cd\u65b9\u6cd5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u6307\u4ee4\u7ea7\u914d\u7f6e\uff0c\u53c8\u53ef\u5206\u4e3a\u4e24\u79cd"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u7cbe\u786e\u914d\u7f6e\uff0c\u5bf9\u67d0\u4e2a\u5173\u8054\u653e\u5f00\u9650\u5236"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookStore store = ...\u7565...;\nsqlClient\n    .saveCommand(store)\n    // highlight-next-line\n    .setTargetTransferMode(\n        BookStoreProps.BOOKS, \n        TargetTransferMode.ALLOWED\n    )\n    .execute();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val store = BookStore {...\u7565...}\nsqlClient.save(store) {\n    // highlight-next-line\n    setTargetTransferMode(\n        BookStore::books, \n        TargetTransferMode.ALLOWED\n    )\n}\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u76f2\u76ee\u914d\u7f6e\uff0c\u5bf9\u6240\u6709\u5173\u8054\u653e\u5f00\u9650\u5236"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"BookStore store = ...\u7565...;\nsqlClient\n    .saveCommand(store)\n    // highlight-next-line\n    .setTargetTransferModeAll(\n        TargetTransferMode.ALLOWED\n    )\n    .execute();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val store = BookStore {...\u7565...}\nsqlClient.save(store) {\n    // highlight-next-line\n    setTargetTransferModeAll(\n        TargetTransferMode.ALLOWED\n    )\n}\n")))))),(0,l.kt)("p",{parentName:"li"},"\u65e0\u8bba\u7cbe\u786e\u914d\u7f6e\uff0c\u8fd8\u662f\u76f2\u76ee\u914d\u7f6e\uff0c\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u90fd\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"TargetTransferMode"),"\u679a\u4e3e\uff0c\u5177\u6709\u4e00\u4e0b\u4e09\u4e2a\u53d6\u503c"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ALLOWD"),": \u5141\u8bb8\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u5e76\u5c3d\u53ef\u80fd\u91c7\u7528\u6570\u636e\u5e93\u672c\u8eab\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"UPSERT\u80fd\u529b"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"NOT_ALLOWED"),": \u4e0d\u5141\u8bb8\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"QueryReason.TARGET_NOT_TRANSFERABLE"),"\u4e3a\u7531\u53d1\u8d77\u800c\u5916\u67e5\u8be2\u52a0\u4ee5\u9a8c\u8bc1\u3002\n\u5982\u679c\u53d1\u751f\u4e86\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u629b\u51fa\u5f02\u5e38")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"AUTO"),"(\u9ed8\u8ba4)\uff1a\u5f53\u524d\u914d\u7f6e\u65e0\u6548\uff0c\u53c2\u8003\u4f18\u5148\u7ea7\u66f4\u4f4e\u7684\u914d\u7f6e"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u7cbe\u786e\u914d\u7f6e\u800c\u8a00\uff0c\u8f6c\u800c\u53c2\u8003\u76f2\u76ee\u914d\u7f6e")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u76f2\u76ee\u914d\u7f6e\u800c\u8a00\uff0c\u8f6c\u800c\u53c2\u8003\u5168\u5c40\u914d\u7f6e")))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5168\u5c40\u914d\u7f6e\uff0c\u53c8\u53ef\u5206\u4e3a\u4e24\u79cd"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8eJimmer Api\u7684\u5168\u5c40\u914d\u7f6e"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlCient = JSqlClient\n    .newBuilder()\n    // highlight-next-line\n    .setTargetTransferable(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = sqlClient {\n    // highlight-next-line\n    setTargetTransferable(true)\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n"))))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u91c7\u7528Jimmer\u63d0\u4f9b\u7684spring-boot-starter\uff0c\u57fa\u4e8eSpring Boot\u7684\u5168\u5c40\u914d\u7f6e"),(0,l.kt)("p",{parentName:"li"},"\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6587\u4ef6\u4e3a\u4f8b"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title = "application.yml"',title:!0,"":"",'"application.yml"':!0},"jimmer:\n    // highlight-next-line\n    target-transferable: true\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n")))))),(0,l.kt)("p",null,"\u4e00\u65e6\u901a\u8fc7\u4ee5\u4e0a\u4efb\u4f55\u914d\u7f6e\u624b\u6bb5\u8ba9Jimmer\u8ba4\u4e3a\u65e0\u9700\u5bf9",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u5173\u8054\u7981\u6b62\u5b50\u5bf9\u8c61\u8fc1\u79fb\uff0c\u4fee\u6539\u4ee3\u7801\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"public interface Book {\n\n    @ManyToOne\n    @Nullable\n    // \u4e8e\u672c\u6587\u8ba8\u8bba\u5185\u5bb9\u65e0\u5173\uff0c\u8bf7\u8bfb\u8005\u5148\u884c\u5ffd\u7565\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL)\n    BookStore store();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"public interface Book {\n\n    @ManyToOne\n    // \u4e8e\u672c\u6587\u8ba8\u8bba\u5185\u5bb9\u65e0\u5173\uff0c\u8bf7\u8bfb\u8005\u5148\u884c\u5ffd\u7565\n    // highlight-next-line\n    @OnDissociate(DissociateAction.SET_NULL)\n    val store: BookStore?\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n")))),(0,l.kt)("p",null,"\u91cd\u65b0\u6267\u884c\u4ee3\u7801\uff0c\u5c06\u4f1a\u751f\u6210\u5982\u4e0bSQL"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4fdd\u5b58\u6839\u5bf9\u8c61"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"merge into BOOK_STORE(\n    NAME\n) key(NAME) values(?)\n/* batch-0: [MANNING] */\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5efa\u7acb\u6839\u5bf9\u8c61\u548c\u5b50\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"merge into BOOK(\n    ID, STORE_ID\n) key(ID) values(?, ?)\n/* batch-0: [12, 2] */\n/* batch-1: [1, 2] */\n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u65ad\u5f00\u6839\u5bf9\u8c61\u548c\u4e0d\u518d\u9700\u8981\u7684\u5b50\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK\nset\n    STORE_ID = null\nwhere\n    STORE_ID = ?\n    and\n    not (\n        ID = any(?)\n    )\n/* batch-0: [2, [12, 1]] */\n")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u5411\u7528\u6237\u5c55\u793a\u6027\u80fd\u4f18\u5148\u7684\u573a\u666f\uff0c\u9644\u5e26\u4f8b\u5b50\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/java/save-command"},"jimmer-examples/java/save-command"),"\n\u548c\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer-examples/tree/main/kotlin/save-command-kt"},"jimmer-examples/kotlin/save-command-kt"),"\n\u5747\u5229\u7528\u5168\u5c40\u914d\u7f6e\u5141\u8bb8\u4e86\u5b50\u5bf9\u8c61\u8fc1\u79fb\u3002")))}N.isMDXComponent=!0}}]);