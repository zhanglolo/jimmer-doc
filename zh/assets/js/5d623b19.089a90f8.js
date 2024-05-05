"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,b=m["".concat(s,".").concat(p)]||m[p]||d[p]||l;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(34334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(83117),r=n(67294),l=n(34334),o=n(72389),i=n(67392),s=n(7094),u=n(12466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:p,groupId:b,className:h}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==f&&!g.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[T,x]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==T&&g.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==T&&(j(t),x(a),null!=b&&w(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:N,onClick:N},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,r.cloneElement)(v.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function p(e){const t=(0,o.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},7177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var a=n(83117),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const i={sidebar_position:1,title:"4.1 \u57fa\u672c\u7528\u6cd5"},s=void 0,u={unversionedId:"showcase/where/usage",id:"showcase/where/usage",title:"4.1 \u57fa\u672c\u7528\u6cd5",description:"\u4ee5\u4e0b\u4e09\u79cd\u5199\u6cd5\u7b49\u4ef7",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/usage.mdx",sourceDirName:"showcase/where",slug:"/showcase/where/usage",permalink:"/jimmer-doc/zh/docs/showcase/where/usage",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/where/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"4.1 \u57fa\u672c\u7528\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"4. \u6761\u4ef6",permalink:"/jimmer-doc/zh/docs/showcase/where/"},next:{title:"4.2 \u52a8\u6001\u6761\u4ef6",permalink:"/jimmer-doc/zh/docs/showcase/where/dynamic-where"}},c={},d=[{value:"\u4f7f\u7528\u591a\u4e2awhere",id:"\u4f7f\u7528\u591a\u4e2awhere",level:2},{value:"where\u5e26\u591a\u4e2a\u53c2\u6570",id:"where\u5e26\u591a\u4e2a\u53c2\u6570",level:2},{value:"\u4f7f\u7528\u903b\u8f91\u4e0e",id:"\u4f7f\u7528\u903b\u8f91\u4e0e",level:2},{value:"\u5efa\u8bae",id:"\u5efa\u8bae",level:2}],m={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e09\u79cd\u5199\u6cd5\u7b49\u4ef7"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u591a\u4e2awhere"},"\u4f7f\u7528\u591a\u4e2awhere"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String name = ...\u7565...;\nint edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(table.name().ilike(name))\n    // highlight-next-line\n    .where(table.edition().eq(edition))\n    .select(table)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val name: String = ...\u7565...\nval edition: Int = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(table.name ilike name)\n        // highlight-next-line\n        where(table.edition eq edition)\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("h2",{id:"where\u5e26\u591a\u4e2a\u53c2\u6570"},"where\u5e26\u591a\u4e2a\u53c2\u6570"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String name = ...\u7565...;\nint edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    // highlight-next-line\n    .where(\n        table.name().ilike(name),\n        table.edition().eq(edition)\n    )\n    .select(table)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val name: String = ...\u7565...\nval edition: Int = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        // highlight-next-line\n        where(\n            table.name ilike name,\n            table.edition eq edition\n        )\n        select(table)\n    }\n    .execute();\n")))),(0,r.kt)("h2",{id:"\u4f7f\u7528\u903b\u8f91\u4e0e"},"\u4f7f\u7528\u903b\u8f91\u4e0e"),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"String name = ...\u7565...;\nint edition = ...\u7565...;\n\nBookTable table = BookTable.$;\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(\n        // highlight-next-line\n        Predicate.and(\n            table.name().ilike(name),\n            table.edition().eq(edition)\n        )\n    )\n    .select(table)\n    .execute();\n"))),(0,r.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"val name: String = ...\u7565...\nval edition: Int = ...\u7565...\n\nval books = sqlClient\n    .createQuery(Book::class) {\n        where(\n            // highlight-next-line\n            and(\n                table.name ilike name,\n                table.edition eq edition\n            )\n        )\n        select(table)\n    }\n    .execute()\n")))),(0,r.kt)("h2",{id:"\u5efa\u8bae"},"\u5efa\u8bae"),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4e09\u79cd\u5199\u6cd5\u5b8c\u5168\u7b49\u4ef7\u3002\u7136\u800c\uff0c\u6beb\u65e0\u7591\u95ee\uff0c\u7b2c\u4e00\u79cd\u662f\u6700\u7b80\u5355\u7684\uff0c\u6545\u800c\u63a8\u8350\u3002"))}p.isMDXComponent=!0}}]);