"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[8540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),u=n(7094),s=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:f,className:b}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(k,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==g&&!k.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,u.U)(),[O,w]=(0,r.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:_}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==O&&k.some((t=>t.value===e))&&w(e)}const j=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==O&&(_(t),w(a),null!=f&&N(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":O===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function d(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},5865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:2,title:"\u5220\u9664\u8bed\u53e5"},u=void 0,s={unversionedId:"mutation/delete-statement",id:"mutation/delete-statement",title:"\u5220\u9664\u8bed\u53e5",description:"\u57fa\u672c\u7528\u6cd5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/delete-statement.mdx",sourceDirName:"mutation",slug:"/mutation/delete-statement",permalink:"/jimmer-doc/zh/docs/mutation/delete-statement",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/mutation/delete-statement.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u5220\u9664\u8bed\u53e5"},sidebar:"tutorialSidebar",previous:{title:"\u4fee\u6539\u8bed\u53e5",permalink:"/jimmer-doc/zh/docs/mutation/update-statement"},next:{title:"\u4fdd\u5b58\u6307\u4ee4",permalink:"/jimmer-doc/zh/docs/mutation/save-command/"}},c={},p=[{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2},{value:"\u4f7f\u7528JOIN",id:"\u4f7f\u7528join",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,r.kt)("p",null,"Delete\u8bed\u53e5\u7528\u6cd5\u5982\u4e0b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = Tables.BOOK_TABLE;\n\nint affectedRowCount = sqlClient\n    .createDelete(book)\n    .where(book.name().eq("Learning GraphQL"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createDelete(Book::class) {\n        where(table.name eq "Learning GraphQL")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,r.kt)("p",null,"\u751f\u6210\u7684SQL\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"delete \nfrom BOOK as tb_1_ \nwhere tb_1_.NAME = ?\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528join"},"\u4f7f\u7528JOIN"),(0,r.kt)("p",null,"Delete\u8bed\u53e5\u7528\u6cd5\u5982\u4e0b\u652f\u6301JOIN\u5b50\u53e5\uff0c\u5982\u4e0b"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable book = Tables.BOOK_TABLE;\n\nint affectedRowCount = sqlClient\n    .createDelete(book)\n    .where(book.store().name().eq("MANNING"))\n    .execute();\nSystem.out.println("Affected row count: " + affectedRowCount);\n'))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val affectedRowCount = sqlClient\n    .createDelete(Book::class) {\n        where(table.store.name eq "MANNING")\n    }\n    .execute()\nprintln("Affected row count: $affectedRowCount")\n')))),(0,r.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u4e863\u6761SQL:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"select \n    distinct tb_1_.ID \nfrom BOOK as tb_1_ \ninner join BOOK_STORE as tb_2_ \n    on tb_1_.STORE_ID = tb_2_.ID \nwhere \n    tb_2_.NAME = ?\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere BOOK_ID in(?, ?, ?)\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK \nwhere ID in(?, ?, ?)\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5728Delete\u8bed\u53e5\u4e2d\u4f7f\u7528join\uff0cJimmer\u4f1a\u5c06\u4e4b\u7ffb\u8bd1\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"select")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"delete"),"\u3002\u5148\u5229\u7528\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"join"),"\u5b50\u53e5\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"select"),"\u8bed\u53e5\u67e5\u8be2\u5230\u9700\u8981\u5220\u9664\u7684\u6570\u636eid\uff0c\u7136\u540e\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"./delete-command"},"Delete\u6307\u4ee4"),"\u5220\u9664\u6570\u636e\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u8fd9\u4e2a\u65b9\u6848\u5bf9\u4efb\u4f55\u6570\u636e\u5e93\u90fd\u6709\u6548\u3002")))}d.isMDXComponent=!0}}]);