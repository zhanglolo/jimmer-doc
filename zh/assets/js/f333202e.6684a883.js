"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9373],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>p});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=t.createContext({}),c=function(e){var n=t.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return a?t.createElement(b,l(l({ref:n},u),{},{components:a})):t.createElement(b,l({ref:n},u))}));function p(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),r=a(34334);const o="tabItem_Ymn6";function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},n)}},65488:(e,n,a)=>{a.d(n,{Z:()=>p});var t=a(83117),r=a(67294),o=a(34334),l=a(72389),s=a(67392),i=a(7094),c=a(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var n;const{lazy:a,block:l,defaultValue:m,values:p,groupId:b,className:h}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??f.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),g=(0,s.l)(k,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,i.U)(),[N,E]=(0,r.useState)(v),L=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=b){const e=y[b];null!=e&&e!==N&&k.some((n=>n.value===e))&&E(e)}const T=e=>{const n=e.currentTarget,a=L.indexOf(n),t=k[a].value;t!==N&&(O(n),E(t),null!=b&&w(b,String(t)))},B=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=L.indexOf(e.currentTarget)+1;a=L[n]??L[0];break}case"ArrowLeft":{const n=L.indexOf(e.currentTarget)-1;a=L[n]??L[L.length-1];break}}null==(n=a)||n.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:N===n?0:-1,"aria-selected":N===n,key:n,ref:e=>L.push(e),onKeyDown:B,onFocus:T,onClick:T},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===n})}),a??n)}))),a?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==N})))))}function p(e){const n=(0,l.Z)();return r.createElement(m,(0,t.Z)({key:String(n)},e))}},93469:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var t=a(83117),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const s={sidebar_position:2,title:"2.2 \u66f4\u591a\u5173\u8054"},i=void 0,c={unversionedId:"showcase/fetch-association/more-association",id:"showcase/fetch-association/more-association",title:"2.2 \u66f4\u591a\u5173\u8054",description:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/more-association.mdx",sourceDirName:"showcase/fetch-association",slug:"/showcase/fetch-association/more-association",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/more-association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/showcase/fetch-association/more-association.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"2.2 \u66f4\u591a\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"2.1 \u5173\u8054\u5bf9\u8c61",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/associated-object"},next:{title:"2.4 \u5173\u8054Id",permalink:"/jimmer-doc/zh/docs/showcase/fetch-association/associated-id"}},u={},d=[{value:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53",level:2},{value:"\u67e5\u8be2\u9759\u6001DTO",id:"\u67e5\u8be2\u9759\u6001dto",level:2}],m={toc:d};function p(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"},"\u67e5\u8be2\u52a8\u6001\u5b9e\u4f53"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<Book> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(\n            BookFetcher.$\n                .allScalarFields()\n                .store( \u2776\n                    BookStoreFetcher.$\n                        .allScalarFields()\n                )\n                .authors( \u2777\n                    AuthorFetcher.$\n                        .allScalarFields()\n                )\n        )\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetchBy {\n                allScalarFields()\n                store { \u2776\n                    allScalarFields()\n                }\n                authors { \u2777\n                    allScalarFields()\n                }\n            }\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u5f97\u5230\u7684\u7ed3\u679c\u4e3a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id":3,\n        "name":"Learning GraphQL",\n        "edition":3,\n        "price":51,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":2,\n        "name":"Learning GraphQL",\n        "edition":2,\n        "price":55,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    },\n    {\n        "id":1,\n        "name":"Learning GraphQL",\n        "edition":1,\n        "price":50,\n        "store":{ \u2776\n            "id":1,\n            "name":"O\'REILLY",\n            "website":null\n        },\n        "authors":[ \u2777\n            {\n                "id":2,\n                "firstName":"Alex",\n                "lastName":"Banks",\n                "gender":"MALE"\n            },\n            {\n                "id":1,\n                "firstName":"Eve",\n                "lastName":"Procello",\n                "gender":"FEMALE"\n            }\n        ]\n    }\n]\n')),(0,r.kt)("h2",{id:"\u67e5\u8be2\u9759\u6001dto"},"\u67e5\u8be2\u9759\u6001DTO"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/dto"),"\u6587\u4ef6\u5939\u4e0b\u65b0\u5efa\u4efb\u4f55\u4e00\u4e2a\u6269\u5c55\u540d\u4e3adto\u7684\u6587\u4ef6\uff0c\u7f16\u8f91\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto\n\nBookView {\n    #allScalars(this)\n    store { \u2776\n        #allScalars(this)\n    }\n    authors { \u2777\n        #allScalars(this)\n    }\n}\n")),(0,r.kt)("p",null,"\u7f16\u8bd1\u9879\u76ee\uff0c\u751f\u6210Java/Kotlin\u7c7b\u578b",(0,r.kt)("inlineCode",{parentName:"p"},"BookView")),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookTable table = BookTable.$;\n\nList<BookView> books = sqlClient\n    .createQuery(table)\n    .where(table.name().eq("Learning GraphQL"))\n    .orderBy(table.edition().desc())\n    .select(\n        table.fetch(BookView.class)\n    )\n    .execute();\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val books = sqlClient\n    .createQuery(Book::class) {\n        where(table.name  eq "Learning GraphQL")\n        orderBy(table.edition.desc())\n        select(\n            table.fetch(BookView::class)\n        )\n    }\n    .execute()\n')))),(0,r.kt)("p",null,"\u5f97\u5230\u5982\u4e0b\u7ed3\u679c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"[\n    BookView(\n        id=1, \n        name=Learning GraphQL, \n        edition=1, \n        price=50.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=2, \n        name=Learning GraphQL, \n        edition=2, \n        price=55.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    ), \n    BookView(\n        id=3, \n        name=Learning GraphQL, \n        edition=3, \n        price=51.00, \n        store=BookView.TargetOf_store( \u2776\n            id=1, \n            name=O'REILLY, \n            website=null\n        ), \n        authors=[ \u2777\n            BookView.TargetOf_authors(\n                id=2, \n                firstName=Alex, \n                lastName=Banks, \n                gender=MALE\n            ), \n            BookView.TargetOf_authors(\n                id=1, \n                firstName=Eve, \n                lastName=Procello, \n                gender=FEMALE\n            )\n        ]\n    )\n]\n")))}p.isMDXComponent=!0}}]);