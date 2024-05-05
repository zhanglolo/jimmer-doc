"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[611],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>N});var n=t(67294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var m=n.createContext({}),o=function(e){var a=n.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=o(e.components);return n.createElement(m.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),k=o(t),N=l,d=k["".concat(m,".").concat(N)]||k[N]||s[N]||r;return t?n.createElement(d,i(i({ref:a},u),{},{components:t})):n.createElement(d,i({ref:a},u))}));function N(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=k;var p={};for(var m in a)hasOwnProperty.call(a,m)&&(p[m]=a[m]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=t[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>i});var n=t(67294),l=t(34334);const r="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(83117),l=t(67294),r=t(34334),i=t(72389),p=t(67392),m=t(7094),o=t(12466);const u="tabList__CuJ",s="tabItem_LNqP";function k(e){var a;const{lazy:t,block:i,defaultValue:k,values:N,groupId:d,className:c}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=N??b.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,p.l)(g,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const C=null===k?k:k??(null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)??b[0].props.value;if(null!==C&&!g.some((e=>e.value===C)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${C}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:_}=(0,m.U)(),[v,h]=(0,l.useState)(C),S=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=d){const e=y[d];null!=e&&e!==v&&g.some((a=>a.value===e))&&h(e)}const E=e=>{const a=e.currentTarget,t=S.indexOf(a),n=g[t].value;n!==v&&(T(a),h(n),null!=d&&_(d,String(n)))},O=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=S.indexOf(e.currentTarget)+1;t=S[a]??S[0];break}case"ArrowLeft":{const a=S.indexOf(e.currentTarget)-1;t=S[a]??S[S.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},c)},g.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:v===a?0:-1,"aria-selected":v===a,key:a,ref:e=>S.push(e),onKeyDown:O,onFocus:E,onClick:E},i,{className:(0,r.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":v===a})}),t??a)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==v})))))}function N(e){const a=(0,i.Z)();return l.createElement(k,(0,n.Z)({key:String(a)},e))}},80536:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>m,default:()=>N,frontMatter:()=>p,metadata:()=>o,toc:()=>s});var n=t(83117),l=(t(67294),t(3905)),r=t(65488),i=t(85162);const p={sidebar_position:4,title:"\u547d\u540d\u7b56\u7565"},m=void 0,o={unversionedId:"mapping/base/naming-strategy",id:"mapping/base/naming-strategy",title:"\u547d\u540d\u7b56\u7565",description:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/naming-strategy.mdx",sourceDirName:"mapping/base",slug:"/mapping/base/naming-strategy",permalink:"/jimmer-doc/zh/docs/mapping/base/naming-strategy",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mapping/base/naming-strategy.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u547d\u540d\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u591a\u5bf9\u591a",permalink:"/jimmer-doc/zh/docs/mapping/base/association/many-to-many"},next:{title:"\u771f\u5047\u5916\u952e",permalink:"/jimmer-doc/zh/docs/mapping/base/foreignkey"}},u={},s=[{value:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",id:"\u547d\u540d\u7b56\u7565\u63a5\u53e3",level:2},{value:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565",id:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565",level:2},{value:"UPPER_CASE",id:"upper_case",level:3},{value:"LOWER_CASE",id:"lower_case",level:3},{value:"\u8986\u76d6\u7b56\u7565",id:"\u8986\u76d6\u7b56\u7565",level:2},{value:"\u4f7f\u7528SpringBoot\u65f6",id:"\u4f7f\u7528springboot\u65f6",level:3},{value:"\u4e0d\u4f7f\u7528SprinBoot\u65f6",id:"\u4e0d\u4f7f\u7528sprinboot\u65f6",level:3}],k={toc:s};function N(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u547d\u540d\u7b56\u7565\u63a5\u53e3"},"\u547d\u540d\u7b56\u7565\u63a5\u53e3"),(0,l.kt)("p",null,"\u524d\u9762\u7684\u7ae0\u8282\uff0c\u6211\u4eec\u5df2\u7ecf\u4ecb\u7ecd\u4e86\u7b80\u5355\u5b9e\u4f53\u6620\u5c04\u548c\u5173\u8054\u6620\u5c04 ",(0,l.kt)("em",{parentName:"p"},"\uff08\u4e00\u5bf9\u4e00\u3001\u591a\u5bf9\u4e00\u3001\u4e00\u5bf9\u591a\u3001\u591a\u5bf9\u591a\uff09"),"\u3002\u4ece\u8fd9\u4e9b\u5185\u5bb9\u4e2d\uff0c\u6211\u4eec\u4e86\u89e3\u5230"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'@Table(name = "...")'),"\u660e\u786e\u5730\u4e3a\u5b9e\u4f53\u6307\u5b9a\u8868\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'@GeneratedValue(..., sequenceName = "...")'),"\u660e\u786e\u5730\u6307\u5b9a\u751f\u6210id\u6240\u9700\u7684\u5e8f\u5217\u540d\u79f0 ",(0,l.kt)("em",{parentName:"p"},"\uff08\u524d\u63d0\u662f\u4f7f\u7528\u5e8f\u5217\u589e\u957f\u7b56\u7565\uff09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'@Column(name = "...")'),"\u660e\u786e\u5730\u4e3a\u666e\u901a\u5217\u6307\u5b9a\u5217\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'@JoinColumn(name = "...")'),"\u660e\u786e\u5730\u4e3a\u5916\u952e\u5217\u6307\u5b9a\u5217\u540d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},'@JoinTable(name = "...")'),"\u660e\u786e\u5730\u4e3a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\u6307\u5b9a\u4e2d\u95f4\u8868\u8868\u540d\u4ee5\u53ca\u5176\u6240\u6709\u5217\u540d\u3002"))),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u4e3a\u4e86\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\uff0c\u6211\u4eec\u4e0d\u53ef\u80fd\u8fc7\u591a\u5730\u4f7f\u7528\u8fd9\u4e9b\u6ce8\u89e3\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u9ed8\u8ba4\u7684\u540d\u5b57\u63a8\u5bfc\u884c\u4e3a\u5e94\u8be5\u53ef\u4ee5\u5de5\u4f5c\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\uff0c\u624d\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u8fd9\u4e9b\u6ce8\u89e3\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u67d0\u4e2a\u7c7b\u6216\u5c5e\u6027\uff0c\u5982\u679c\u7528\u6237",(0,l.kt)("strong",{parentName:"p"},"\u4e0d"),"\u7528\u8fd9\u7c7b\u6ce8\u89e3\uff0c\u5982\u4f55\u81ea\u52a8\u51b3\u5b9a\u6570\u636e\u5e93\u4e2d\u7684\u6807\u8bc6\u540d\uff0c\u88ab\u79f0\u4e3a\u547d\u540d\u7b56\u7565\uff0c\u662f\u4e00\u4e2a\u53ef\u5b9a\u5236\u7684Java\u63a5\u53e3"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"package org.babyfish.jimmer.sql.meta;\n\nimport org.babyfish.jimmer.meta.ImmutableProp;\nimport org.babyfish.jimmer.meta.ImmutableType;\n\npublic interface DatabaseNamingStrategy {\n\n    String tableName(ImmutableType type);\n\n    String sequenceName(ImmutableType type);\n\n    String columnName(ImmutableProp prop);\n\n    String foreignKeyColumnName(ImmutableProp prop);\n\n    String middleTableName(ImmutableProp prop);\n\n    String middleTableBackRefColumnName(ImmutableProp prop);\n\n    String middleTableTargetRefColumnName(ImmutableProp prop);\n}\n")),(0,l.kt)("p",null,"\u5176\u4e2d\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"ImmutableType"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"ImmutableProp"),"\u662fJimmer\u5143\u6570\u636e\u6240\u7528\u7c7b\u578b\uff0c\u53ef\u4ee5\u5f88\u76f4\u89c2\u5730\u7528JVM\u53cd\u5c04API\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Class"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"Field"),"\u6765\u505a\u7c7b\u6bd4\u7406\u89e3\u3002"),(0,l.kt)("p",null,"\u5404\u65b9\u6cd5\u7684\u4f5c\u7528\u5982\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"tableName: \u5df2\u77e5\u4e00\u4e2a\u5b9e\u4f53\u7c7b\u578b\uff0c\u5176\u8868\u540d\u662f\u4ec0\u4e48\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"sequenceName: \u5df2\u77e5\u4e00\u4e2aid\u589e\u957f\u7b56\u7565\u4e3a\u5e8f\u5217\u7684\u5b9e\u4f53\u7c7b\u578b\uff0c\u5176\u5e8f\u5217\u540d\u662f\u4ec0\u4e48\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"columName: \u5df2\u77e5\u4e00\u4e2a\u975e\u5173\u8054\u5c5e\u6027\uff0c\u5176\u5217\u540d\u662f\u4ec0\u4e48\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"foreignKeyColumnName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u5916\u952e\u7684\u5173\u8054\u5c5e\u6027\uff0c\u5176\u5217\u540d\u662f\u4ec0\u4e48\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff0c\u5176\u4e2d\u95f4\u8868\u8868\u540d\u662f\u4ec0\u4e48\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableBackRefColumnName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff0c\u4e2d\u95f4\u8868\u4e2d\u6307\u5411\u5f53\u524d\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d\u662f\u4ec0\u4e48\uff1f")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableTargetRefColumnName: \u5df2\u77e5\u4e00\u4e2a\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u5173\u8054\u5c5e\u6027\uff0c\u4e2d\u95f4\u8868\u4e2d\u6307\u5411\u5173\u8054\u5b9e\u4f53\u7684\u5916\u952e\u7684\u5217\u540d\u662f\u4ec0\u4e48\uff1f"))),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565"},"\u9ed8\u8ba4\u547d\u540d\u7b56\u7565"),(0,l.kt)("p",null,"\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u4eba\u5458\u90fd\u65e0\u9700\u76f4\u63a5\u5b9e\u73b0\u6b64\u63a5\u53e3\uff0cJimmer\u5185\u7f6e\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.runtime.DefaultDatabaseNamingStrategy"),"\u7c7b\u5df2\u7ecf\u5b9e\u73b0\u4e86\u6b64\u63a5\u53e3\u3002"),(0,l.kt)("p",null,"DefaultDatabaseNamingStrategy\u7c7b\u6709\u4e24\u4e2a\u9759\u6001\u5b57\u6bb5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"UPPER_CASE: "),(0,l.kt)("p",{parentName:"li"},"\u751f\u6210\u7684\u6570\u636e\u5e93\u6807\u8bc6\u540d\u5168\u90e8\u5927\u5199"),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u7528\u6237\u4e0d\u505a\u4efb\u4f55\u914d\u7f6e\uff0c\u8fd9\u5c31\u662fJimmer\u9ed8\u8ba4\u7684\u547d\u540d\u7b56\u7565\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"LOWER_CASE: "),(0,l.kt)("p",{parentName:"li"},"\u751f\u6210\u7684\u6570\u636e\u5e93\u6807\u8bc6\u540d\u5168\u90e8\u5c0f\u5199\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4e00\u4e9b\u6570\u636e\u5e93\uff0c\u6bd4\u5982MySQL\uff0c\u53ef\u4ee5\u914d\u7f6e\u662f\u5426\u5927\u5c0f\u5199\u654f\u611f\u3002\u6240\u4ee5\uff0c\u4f60\u5f88\u6709\u53ef\u80fd\u63a5\u624b\u4e00\u4e2aMySQL\u6570\u636e\u5e93\uff0c\u88ab\u8bbe\u7f6e\u4e3a\u5927\u5c0f\u654f\u611f\u6a21\u5f0f\u4e14\u5927\u90e8\u5206\u8868\u540d\u548c\u5217\u540d\u90fd\u662f\u5c0f\u5199\u7684\uff0c\u8fd9\u65f6\uff0c\u4f60\u9700\u8981\u7528\u6b64\u7b56\u7565\u8986\u76d6\u9ed8\u8ba4\u7b56\u7565\u3002"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5373\u4f7f",(0,l.kt)("inlineCode",{parentName:"p"},"UPPER_CASE"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"LOWER_CASE"),"\u90fd\u65e0\u6cd5\u6ee1\u8db3\u4f60\u7684\u8981\u6c42\uff0c\u4f60\u9700\u8981\u5b9e\u73b0\u81ea\u5df1\u7684\u7b56\u7565\uff0c\u4e5f\u53ef\u4ee5\u8003\u8651\u7ee7\u627f\u8fd9\u4e2a\u9ed8\u8ba4\u7b56\u7565\uff0c\u800c\u975e\u4ece\u5934\u5b9e\u73b0\u3002")),(0,l.kt)("p",null,"\u5728\u4ecb\u7ecd\u9ed8\u8ba4\u7b56\u7565\u7684\u884c\u4e3a\u4e4b\u524d\uff0c\u6211\u4eec\u5148\u5f15\u5165\u4e00\u4e2a\u5b57\u7b26\u53d8\u6362\u89c4\u5219\uff1asnake\u3002"),(0,l.kt)("p",null,"\u6240\u8c13snake\uff0c\u5373\u628a\u5927\u5c0f\u5199\u4ea4\u66ff\u7684\u6587\u672c\u8f6c\u5316\u4e3a\u4e0b\u5212\u7ebf\u62fc\u63a5\u7684\u6587\u672c\uff0c\u6bd4\u5982\u7c7b\u540d",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u7684snake\u53d8\u5f62\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),"\uff0c\u5c5e\u6027\u540d",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u7684snake\u53d8\u5f62\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"FIRST_NAME"),"\u3002"),(0,l.kt)("p",null,"\u8003\u8651\u5230\u5927\u5c0f\u5199\u95ee\u9898\uff0c\u6211\u4eec\u5b9a\u4e49\u4e24\u4e2a\u51fd\u6570, ",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake"),"\uff0c\u5176\u884c\u4e3a\u5982\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'u_snake("BookStore")'),' -> "BOOK_STORE"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'l_snake("BookStore")'),' -> "book_store"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'u_snake("firstName")'),' -> "FIRST_NAME"'),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'l_snake("firstName")'),' -> "first_name"')),(0,l.kt)("p",null,"\u6709\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake"),"\u7684\u89c4\u5b9a\u540e\uff0c\u6211\u4eec\u5f88\u5bb9\u6613\u9610\u8ff0",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultDatabaseNamingStrategy"),"\u7684\u884c\u4e3a"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0b\u6587\u4e2d\u7684ClassName\uff0c\u6307Java\u7c7b\u7684SimpleName\uff0c\u5e76\u975eQualifiedName\u3002")),(0,l.kt)("h3",{id:"upper_case"},"UPPER_CASE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"tableName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)")),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBookStore -> BOOK_STORE")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"sequenceName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)"),"_ID_SEQ"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBookStore -> BOOK_STORE_ID_SEQ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"columName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)")),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1afirstName -> FIRST_NAME")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"foreignKeyColumnName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(ClassName)"),"_ID"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aparentNode -> PARENT_NODE_ID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(SourceClassName)"),"_",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(TargetClassName)"),"_MAPPING"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBook::authors -> BOOK_AUTHOR_MAPPING")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableBackRefColumnName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(SourceClassName)"),"_ID"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBook::authors -> BOOK_ID")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableTargetRefColumnName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"u_snake(TargetClassName)"),"_ID"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBook::authors -> AUTHOR_ID"))),(0,l.kt)("h3",{id:"lower_case"},"LOWER_CASE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"tableName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)")),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBookStore -> book_store")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"sequenceName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)"),"_id_seq"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBookStore -> book_store_id_seq")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"columName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)")),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1afirstName -> first_name")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"foreignKeyColumnName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(ClassName)"),"_id"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aparentNode -> parent_node_id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(SourceClassName)"),"_",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(TargetClassName)"),"_mapping"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBook::authors -> book_author_mapping")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableBackRefColumnName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(SourceClassName)"),"_id"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBook::authors -> book_id")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"middleTableTargetRefColumnName"),(0,l.kt)("p",{parentName:"li"},"\u89c4\u5219\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"l_snake(TargetClassName)"),"_id"),(0,l.kt)("p",{parentName:"li"},"\u4f8b\u5b50\uff1aBook::authors -> author_id"))),(0,l.kt)("h2",{id:"\u8986\u76d6\u7b56\u7565"},"\u8986\u76d6\u7b56\u7565"),(0,l.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u6765\u6f14\u793a\u5982\u4f55\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultDatabaseNamingStrategy.LOWER_CASE"),"\u8986\u76d6\u9ed8\u8ba4\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"DefaultDatabaseNamingStrategy.UPPER_CASE"),"\u3002"),(0,l.kt)("h3",{id:"\u4f7f\u7528springboot\u65f6"},"\u4f7f\u7528SpringBoot\u65f6"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\npublic DatabaseNamingStrategy databaseNamingStrategy() {\n    // highlight-next-line\n    return DefaultDatabaseNamingStrategy.LOWER_CASE;\n}\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Bean\nfun databaseNamingStrategy(): DatabaseNamingStrategy =\n    // highlight-next-line\n    DefaultDatabaseNamingStrategy.LOWER_CASE\n")))),(0,l.kt)("h3",{id:"\u4e0d\u4f7f\u7528sprinboot\u65f6"},"\u4e0d\u4f7f\u7528SprinBoot\u65f6"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"JSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDatabaseNamingStrategy(\n        // highlight-next-line\n        DefaultDatabaseNamingStrategy.LOWER_CASE\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val sqlClient = newKSqlClient {\n    setDatabaseNamingStrategy(\n        // highlight-next-line\n        DefaultDatabaseNamingStrategy.LOWER_CASE\n    )\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))))}N.isMDXComponent=!0}}]);