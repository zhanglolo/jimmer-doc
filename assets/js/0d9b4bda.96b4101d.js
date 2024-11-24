"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4158],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(34334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(83117),r=a(67294),o=a(34334),l=a(72389),i=a(67392),s=a(7094),u=a(12466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:h,className:k}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),g=(0,i.l)(f,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!f.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:N}=(0,s.U)(),[w,L]=(0,r.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=v[h];null!=e&&e!==w&&f.some((t=>t.value===e))&&L(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=f[a].value;n!==w&&(T(t),L(n),null!=h&&N(h,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},k)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:O,onFocus:x,onClick:x},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},32102:(e,t,a)=>{a.d(t,{s:()=>k});var n=a(83117),r=a(67294),o=a(42293),l=a(50657),i=a(6514),s=a(54776),u=a(10155),p=a(15861),c=a(93946),d=a(9137),m=a(61274),h=a(50594);const k=(0,r.memo)((e=>{let{open:t,fullScreen:a=!1,title:n,maxWidth:s="md",onClose:k,children:f}=e;const[g,y]=(0,r.useState)(a),v=(0,r.useCallback)((()=>{y((e=>!e))}),[]);return r.createElement(l.Z,{open:t,onClose:k,fullScreen:g,TransitionComponent:b,maxWidth:s},r.createElement(o.Z,{sx:{position:"relative"}},r.createElement(u.Z,null,r.createElement(p.Z,{sx:{ml:2,flex:1},variant:"h6",component:"div"},n),r.createElement(c.Z,{onClick:v,style:{color:"white"}},g?r.createElement(m.Z,null):r.createElement(d.Z,null)),r.createElement(c.Z,{"aria-label":"close",onClick:k,style:{color:"white"}},r.createElement(h.Z,null)))),r.createElement(i.Z,null,f))})),b=r.forwardRef((function(e,t){return r.createElement(s.Z,(0,n.Z)({direction:"up",ref:t},e))}))},39511:(e,t,a)=>{a.d(t,{b:()=>l});var n=a(67294),r=a(83321),o=a(32102);const l=(0,n.memo)((e=>{let{buttonText:t,fullScreen:a=!1,title:l=t,variant:i="outlined",large:s=!1,maxWidth:u,useOriginalText:p=!0,children:c}=e;const[d,m]=(0,n.useState)(!1),h=(0,n.useCallback)((e=>{m(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),k=(0,n.useCallback)((()=>{m(!1)}),[]),b=p?{textTransform:"none"}:{};return n.createElement(n.Fragment,null,n.createElement(r.Z,{"data-is-view-more-button":"true",onClick:h,variant:i,size:s?"large":"small",style:b},t),n.createElement(o.s,{open:d,onClose:k,title:l,maxWidth:u,fullScreen:a},c))}))},93351:(e,t,a)=>{a.d(t,{ZP:()=>s});var n=a(83117),r=(a(67294),a(3905)),o=a(65488),l=a(85162);const i={toc:[{value:"1. A few properties",id:"1-a-few-properties",level:2},{value:"2. More Properties",id:"2-more-properties",level:2},{value:"3. Include Association",id:"3-include-association",level:2},{value:"4. More Associations (Larger Breadth)",id:"4-more-associations-larger-breadth",level:2},{value:"5. Deeper Associations (Larger Depth)",id:"5-deeper-associations-larger-depth",level:3}]};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-a-few-properties"},"1. A few properties"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n});\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "Learning GraphQL"\n}\n')))),(0,r.kt)("p",null,"In this case, the JSON for the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," object would be like follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"name": "Learning GraphQL"}\n')),(0,r.kt)("h2",{id:"2-more-properties"},"2. More Properties"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n});\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n}\n')))),(0,r.kt)("p",null,"In this case, the JSON for the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," object would be like follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99\n}\n')),(0,r.kt)("h2",{id:"3-include-association"},"3. Include Association"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n    draft.applyStore(store -> {\n        store.setName("O\'REILLY");\n        store.setWebsite("https://www.oreilly.com/");\n    });\n});\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n    store {\n        name = "O\'REILLY"\n        website = "https://www.oreilly.com/"\n    }\n}\n')))),(0,r.kt)("p",null,"In this case, the JSON for the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," object would be like follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99,\n    "store": {\n        "name": "O\'REILLY",\n        "website": "https://www.oreilly.com/"\n    }\n}\n')),(0,r.kt)("h2",{id:"4-more-associations-larger-breadth"},"4. More Associations (Larger Breadth)"),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Book book = Immutables.createBook(draft -> {\n    draft.setName("Learning GraphQL");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("49.99"));\n    draft.applyStore(store -> {\n        store.setName("O\'REILLY");\n        store.setWebsite("https://www.oreilly.com/");\n    });\n    draft.addIntoAuthors(author -> { \n        author.setFirstName("Eve");\n        author.setLastName("Procello");\n        author.setGender(Gender.FEMALE);\n    });\n    draft.addIntoAuthors(author -> { \n        author.setFirstName("Alex");\n        author.setLastName("Banks");\n        author.setGender(Gender.MALE);\n    });\n});\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = Book {\n    name = "Learning GraphQL"\n    edition = 1\n    price = BigDecimal("49.99")\n    store {\n        name = "O\'REILLY"\n        website = "https://www.oreilly.com/"\n    }\n    authors().addBy {\n        firstName = "Eve"\n        setLastName = "Procello"\n        gender = Gender.FEMALE\n    }\n    authors().addBy {\n        firstName = "Alex"\n        lastName = "Banks"\n        gender = Gender.MALE\n    }\n}\n')))),(0,r.kt)("p",null,"In this case, the JSON for the ",(0,r.kt)("inlineCode",{parentName:"p"},"books")," object would be like follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "Learning GraphQL",\n    "edition": 1,\n    "price": 49.99,\n    "store": {\n        "name": "O\'REILLY",\n        "website": "https://www.oreilly.com/"\n    },\n    "authors": [\n        {\n            "firstName": "Eve",\n            "lastName": "Procello",\n            "gender:" "FEMALE"\n        },\n        {\n            "firstName": "Alex",\n            "lastName": "Banks",\n            "gender:" "MALE"\n        }\n    ]\n}\n')),(0,r.kt)("h3",{id:"5-deeper-associations-larger-depth"},"5. Deeper Associations (Larger Depth)"),(0,r.kt)("p",null,"Here is the translation to English:"),(0,r.kt)("p",null,"Unlike the previous examples, here we choose ",(0,r.kt)("inlineCode",{parentName:"p"},"BookStore")," as the aggregate root for the data structure, rather than ",(0,r.kt)("inlineCode",{parentName:"p"},"Book"),"."),(0,r.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'BookStore store = Immutables.createBookStore(draft -> {\n    draft.setName("O\'REILLY");\n    draft.setWebsite("https://www.oreilly.com/");\n    draft.addIntoBooks(book -> {\n        book.setName("Learning GraphQL");\n        book.setEdition(1);\n        book.setPrice(new BigDecimal("49.99"));\n        book.addIntoAuthors(author -> { \n            author.setFirstName("Eve");\n            author.setLastName("Procello");\n            author.setGender(Gender.FEMALE);\n        });\n        book.addIntoAuthors(author -> { \n            author.setFirstName("Alex");\n            author.setLastName("Banks");\n            author.setGender(Gender.MALE);\n        });\n    });\n});\n'))),(0,r.kt)(l.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val store = BookStore {\n    name = "O\'REILLY"\n    website = "https://www.oreilly.com/"\n    books().addBy {\n        name = "Learning GraphQL"\n        edition = 1\n        price = BigDecimal("49.99")\n        authors().addBy {\n            firstName = "Eve"\n            setLastName = "Procello"\n            gender = Gender.FEMALE\n        }\n        authors().addBy {\n            firstName = "Alex"\n            lastName = "Banks"\n            gender = Gender.MALE\n        }\n    }\n}\n')))),(0,r.kt)("p",null,"In this case, the JSON for the ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," object would be like follows"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "name": "O\'REILLY",\n    "website": "https://www.oreilly.com/",\n    "books": [\n        {\n            "name": "Learning GraphQL",\n            "edition": 1,\n            "price": 49.99,\n            "authors": [\n                {\n                    "firstName": "Eve",\n                    "lastName": "Procello",\n                    "gender:" "FEMALE"\n                },\n                {\n                    "firstName": "Alex",\n                    "lastName": "Banks",\n                    "gender:" "MALE"\n                }\n            ]\n        }\n    ]\n}\n')))}s.isMDXComponent=!0},3626:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var n=a(83117),r=(a(67294),a(3905)),o=a(39511),l=a(93351);const i={sidebar_position:2,title:"Key Features \u2726"},s=void 0,u={unversionedId:"overview/key-features",id:"overview/key-features",title:"Key Features \u2726",description:"To help readers better understand the key features, let's first introduce Jimmer's fundamental design philosophy",source:"@site/docs/overview/key-features.mdx",sourceDirName:"overview",slug:"/overview/key-features",permalink:"/jimmer-doc/docs/overview/key-features",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/overview/key-features.mdx",tags:[],version:"current",lastUpdatedAt:1730114683,formattedLastUpdatedAt:"Oct 28, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Key Features \u2726"},sidebar:"tutorialSidebar",previous:{title:"Before Reading",permalink:"/jimmer-doc/docs/overview/welcome"},next:{title:"Overview \u2726",permalink:"/jimmer-doc/docs/overview/introduction"}},p={},c=[{value:"Design Philosophy",id:"design-philosophy",level:2},{value:"Key features",id:"key-features",level:2},{value:"Notes",id:"notes",level:2}],d={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To help readers better understand the key features, let's first introduce Jimmer's fundamental design philosophy"),(0,r.kt)("h2",{id:"design-philosophy"},"Design Philosophy"),(0,r.kt)("p",null,"The core concept of Jimmer is to read and write data structures of arbitrary shapes as a whole, rather than simply processing entity objects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Jimmer entity objects ",(0,r.kt)("strong",{parentName:"p"},"are not POJOs"),", and can easily ",(0,r.kt)(o.b,{buttonText:"express data structures of arbitrary shapes",title:"Flexibility of Jimmer Entities",mdxType:"ViewMore"},(0,r.kt)(l.ZP,{mdxType:"DynamicShape"})),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data structures of any shape can be processed as a whole for:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reading: Jimmer creates this infinitely flexible data structure and passes it to you"),(0,r.kt)("li",{parentName:"ul"},"Writing: You create this infinitely flexible data structure and pass it to Jimmer")))),(0,r.kt)("p",null,"Since Jimmer's design philosophy is to read and write data structures of arbitrary shapes rather than processing simple objects, how does it differ from technologies with similar capabilities?"),(0,r.kt)("p",null,"Here is the English translation of the provided table:"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Comparison"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"2"},"GraphQL"),(0,r.kt)("td",null,"GraphQL only focuses on querying data structures of arbitrary shapes; Jimmer not only does this but also focuses on how to write data structures of arbitrary shapes")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"GraphQL does not support recursive queries based on self-referencing properties, Jimmer does")),(0,r.kt)("tr",null,(0,r.kt)("td",{rowspan:"5"},"JPA"),(0,r.kt)("td",null,"In JPA, to control the shape of the data structure being saved, properties must be configured with insertable, updatable, or cascade ",(0,r.kt)("i",null,"(for associated properties)"),". Regardless of the configuration, the saved data structure is fixed; Jimmer entities are not POJOs, their data structure shapes are ever-changing, no prior planning and design is needed, any business scenario can construct the data structure it needs and save it directly")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"For queries, JPA's ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraphQL")," is very complex; Jimmer provides two methods to achieve similar functionality:\ncontrolling the format of returned entity objects, or generating DTOs through a cost-effective way and querying directly. Either way is much simpler than ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraph")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"In JPA, if you need to use a DTO object to query only part of the properties, the DTO must be a simple object without any associations. That is, it loses the most valuable capability of ORM, degrading from ",(0,r.kt)("inlineCode",{parentName:"p"},"ORM")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"OM"),";\nJimmer's automatically generated DTOs support arbitrarily complex hierarchical relationships, ",(0,r.kt)("strong",{parentName:"p"},"Jimmer is currently the only ORM that supports nested projections based on DTO")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"In JPA, updating an object results in all updatable columns being modified. For simplicity, developers rarely use ",(0,r.kt)("inlineCode",{parentName:"p"},"update"),", instead choosing to first query the complete object, modify some properties, and finally save the entire object; Jimmer can construct and directly save incomplete objects"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",null,"JPA's ",(0,r.kt)("inlineCode",{parentName:"p"},"EntityGraphQL")," does not support recursive queries based on self-referencing properties, Jimmer does"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"MongoDB"),(0,r.kt)("td",null,"In MongoDB, each document structure is a data island. Although MongoDB's data structure is weakly typed, from a business perspective, which data islands exist and the internal hierarchical structure of each data island need to be designed and agreed upon in advance. Once the design and agreement are completed, the format of the entire data view is fixed and must be processed from a fixed perspective; In Jimmer, the shape of the data structure does not need to be designed in advance, any business scenario can freely plan a data structure format, and read and write the corresponding data structure as a whole.")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Based on this core concept, Jimmer will bring you convenience that was previously unattainable in any technology stack,\nfreeing you from dealing with tedious details and allowing you to focus on quickly implementing complex business logic.")),(0,r.kt)("h2",{id:"key-features"},"Key features"),(0,r.kt)("p",null,"Based on the aforementioned core concept, Jimmer provides the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Convenient query API, robust Java DSL, elegant Kotlin DSL",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dynamic querying is designed for multi-table queries"),(0,r.kt)("li",{parentName:"ul"},"DSL supports mixing native SQL expressions to use non-standard database-specific capabilities"),(0,r.kt)("li",{parentName:"ul"},"Extends SQL capabilities, easily supporting advanced features that are costly to implement with native SQL"),(0,r.kt)("li",{parentName:"ul"},"Advanced SQL optimization capabilities",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Automatic removal of unnecessary table joins"),(0,r.kt)("li",{parentName:"ul"},"Automatic merging of logically equivalent table joins"),(0,r.kt)("li",{parentName:"ul"},"Automatic merging of logically equivalent implicit subqueries"),(0,r.kt)("li",{parentName:"ul"},"Paginated query can automatically generate and optimize count query"))))),(0,r.kt)("li",{parentName:"ul"},"DTO language and corresponding compile-time code generator, making DTOs extremely cost-effective",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Output DTO, used as return for complex queries"),(0,r.kt)("li",{parentName:"ul"},"Input DTO, used as parameter for complex saves"),(0,r.kt)("li",{parentName:"ul"},"Specification DTO, used as parameter for complex queries"),(0,r.kt)("li",{parentName:"ul"},"The DTO supported by the ORM itself can be seamlessly integrated without introducing additional logic into business code"))),(0,r.kt)("li",{parentName:"ul"},"Query arbitrary graph structures",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'No "N + 1" problem'),(0,r.kt)("li",{parentName:"ul"},"Objects at any level can be incomplete"),(0,r.kt)("li",{parentName:"ul"},"Can recursively query self-referencing properties"),(0,r.kt)("li",{parentName:"ul"},"Can return either entities directly or output DTOs"))),(0,r.kt)("li",{parentName:"ul"},"Save arbitrary graph structures",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Merge data using the database's native upsert capabilities"),(0,r.kt)("li",{parentName:"ul"},"Multiple objects at each level are handled using batch DML operations"),(0,r.kt)("li",{parentName:"ul"},"Automatically translates constraint violation exceptions"),(0,r.kt)("li",{parentName:"ul"},"Saved objects at any level can be incomplete"),(0,r.kt)("li",{parentName:"ul"},"Can save either entities directly or input DTOs",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"  This section has undergone a major upgrade, and the documentation is actively being restructured. Please refer to the save-command examples in the accompanying examples."))))),(0,r.kt)("li",{parentName:"ul"},"Powerful caching",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Multi-layer caching, technology for each cache layer can be freely chosen"),(0,r.kt)("li",{parentName:"ul"},"Not just object caching ",(0,r.kt)("em",{parentName:"li"},"(associations, computed values, multiple views)")),(0,r.kt)("li",{parentName:"ul"},"Automatically maintains cache consistency"))),(0,r.kt)("li",{parentName:"ul"},"Rapid support for GraphQL"),(0,r.kt)("li",{parentName:"ul"},"Client contracts based on document comments ",(0,r.kt)("em",{parentName:"li"},"(OpenAPI, TypeScript)"))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("p",null,"When developing with Jimmer, there is a note of caution that needs attention. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"./apt-ksp#notes"},"here")))}m.isMDXComponent=!0}}]);