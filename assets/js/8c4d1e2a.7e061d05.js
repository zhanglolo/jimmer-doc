"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3981],{44825:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>j,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"object/tool","title":"Tool Methods","description":"Jimmer provides a series of static tool methods for operating on dynamic objects or their Drafts.","source":"@site/docs/object/tool.mdx","sourceDirName":"object","slug":"/object/tool","permalink":"/jimmer-doc/docs/object/tool","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/tool.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":7,"frontMatter":{"sidebar_position":7,"title":"Tool Methods"},"sidebar":"tutorialSidebar","previous":{"title":"Visibility","permalink":"/jimmer-doc/docs/object/visibility"},"next":{"title":"Resources","permalink":"/jimmer-doc/docs/resource/"}}');var o=l(74848),s=l(28453),t=l(11470),r=l(19365);const i={sidebar_position:7,title:"Tool Methods"},d=void 0,c={},u=[{value:"Operating on Immutable Objects",id:"operating-on-immutable-objects",level:2},{value:"isLoaded",id:"isloaded",level:3},{value:"get",id:"get",level:3},{value:"isIdOnly",id:"isidonly",level:3},{value:"makeIdOnly",id:"makeidonly",level:3},{value:"isLonely",id:"islonely",level:3},{value:"toLonely",id:"tolonely",level:3},{value:"toIdOnly",id:"toidonly",level:3},{value:"fromString",id:"fromstring",level:3},{value:"Operating on Mutable Drafts",id:"operating-on-mutable-drafts",level:2},{value:"set",id:"set",level:3},{value:"unload",id:"unload",level:3},{value:"show",id:"show",level:3},{value:"hide",id:"hide",level:3}];function h(e){const n={admonition:"admonition",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Jimmer provides a series of static tool methods for operating on dynamic objects or their Drafts."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["For brevity, this article only lists the strongly typed usages.",(0,o.jsx)(n.br,{}),"\n","There are also weakly typed versions of these refactoring methods."]})}),"\n",(0,o.jsx)(n.h2,{id:"operating-on-immutable-objects",children:"Operating on Immutable Objects"}),"\n",(0,o.jsx)(n.h3,{id:"isloaded",children:"isLoaded"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Purpose: Determine if a property of a dynamic object is loaded"}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"if (ImmutableObjects.isLoaded(book, BookProps.AUTHORS)) {\n    ...\n}\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"if (isLoaded(book, Book::authors)) {\n    ...\n}\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"get",children:"get"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Purpose: Dynamically get a property of an object"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Exception: The property of the object is in an unloaded state"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"List<Author> authors =   \n    ImmutableObjects.get(book, BookProps.AUTHORS);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val authors = get(book, Book::authors) \n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"isidonly",children:"isIdOnly"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Purpose: Check if a dynamic object is only set with an id property"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Precondition: The object type is annotated with ",(0,o.jsx)(n.code,{children:"@Entity"})," and is an ORM entity with an id"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"if (ImmutableObjects.isIdOnly(book)) {\n    ...\n}\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"if (isIdOnly(book)) {\n    ...\n}\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"makeidonly",children:"makeIdOnly"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Purpose: Construct an object of the given type and set its id property"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Precondition: The object type is annotated with ",(0,o.jsx)(n.code,{children:"@Entity"})," and is an ORM entity with an id"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book book = ImmutableObjects.makeIdOnly(Book.class, 1L);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val book = makeIdOnly(Book::class, 1L)\n"})})})]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"For Kotlin, the id parameter must be non-null, and the return value is also non-null."}),"\n",(0,o.jsxs)(n.p,{children:["To accept a possibly null id and directly return null when id is null, call ",(0,o.jsx)(n.code,{children:"makeNullableIdOnly"})]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Java's ",(0,o.jsx)(n.code,{children:"makeIdOnly"})," is actually equivalent to Kotlin's ",(0,o.jsx)(n.code,{children:"makeNullableIdOnly"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,o.jsx)(n.h3,{id:"islonely",children:"isLonely"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Purpose: Check if an object is only set with an id property. I.e. no associated properties are set to non-null ",(0,o.jsx)(n.em,{children:"(including unset and set to null)"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"If the object is an ORM entity, it is an exception if a one-to-one or many-to-one property based directly on a foreign key is set to an associated object with only an id."})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"if (ImmutableObjects.isLonely(book)) {\n    ...\n} \n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"if (isLonely(book)) {\n    ...\n}\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"tolonely",children:"toLonely"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Purpose: Create a new object based on an existing object. The new object copies all non-associated properties from the old object, but all associated properties remain unset."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"For ORM entities, special handling is performed for one-to-one and many-to-one properties based directly on foreign keys. These are set to associated objects with only ids or null."})}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book lonelyBook = ImmutableObjects.toLonely(book);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val lonelyBook = toLonely(book) \n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"toidonly",children:"toIdOnly"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Purpose: Create a new object based on an existing object. The new object only copies the id property from the old object."}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Precondition: The object type is annotated with ",(0,o.jsx)(n.code,{children:"@Entity"})," and is an ORM entity with an id"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book lonelyBook = ImmutableObjects.toIdOnly(book); \n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val lonelyBook = toIdOnly(book)\n"})})})]}),"\n",(0,o.jsx)(n.p,{children:"Or"}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"List<Book> lonelyBooks = ImmutableObjects.toIdOnly(books);\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val lonelyBooks = toIdOnly(books)\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"fromstring",children:"fromString"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Purpose: Shortcut for JSON deserialization"}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:'Book book = ImmutableObjects.fromObject(\n    Book.class, \n    "{\\"id\\":1,\\"name\\":\\"Learning GraphQL\\",\\"authorIds\\":[2,1]}"   \n);\n'})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'val book = fromString(\n    Book::class,\n    """{"id":1,"name":"Learning GraphQL","authorIds":[2,1]}"""  \n)\n'})})})]}),"\n",(0,o.jsx)(n.h2,{id:"operating-on-mutable-drafts",children:"Operating on Mutable Drafts"}),"\n",(0,o.jsx)(n.h3,{id:"set",children:"set"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Purpose: Dynamically set Draft properties"}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book newBook = Immutables.createBook(book, draft -> {\n    DraftObjects.set(draft, BookProps.AUTHOR_IDS, Arrays.asList(1L, 3L)); \n});\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val newBook = Book(book) {\n    set(draft, Book::authorIds, listOf(1L, 3L))\n}\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"unload",children:"unload"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Purpose: Unload a Draft property, i.e. mark a property as unloaded"}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book newBook = Immutables.createBook(book, draft -> {\n    DraftObjects.unload(draft, BookProps.AUTHOR_IDS);  \n});\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val newBook = Book(book) {\n    unload(draft, Book::authorIds)\n}\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"show",children:"show"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Purpose: Show a property"}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book newBook = Immutables.createBook(book, draft -> {\n    DraftObjects.show(draft, BookProps.AUTHOR_IDS);\n});\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val newBook = Book(book) {\n    show(draft, Book::authorIds) \n}\n"})})})]}),"\n",(0,o.jsx)(n.h3,{id:"hide",children:"hide"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Purpose: Hide a property"}),"\n"]}),"\n",(0,o.jsxs)(t.A,{groupId:"language",children:[(0,o.jsx)(r.A,{value:"java",label:"Java",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-java",children:"Book newBook = Immutables.createBook(book, draft -> {\n    DraftObjects.hide(draft, BookProps.AUTHOR_IDS); \n});\n"})})}),(0,o.jsx)(r.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:"val newBook = Book(book) {\n    hide(draft, Book::authorIds)\n}\n"})})})]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{})})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},19365:(e,n,l)=>{l.d(n,{A:()=>t});l(96540);var a=l(18215);const o={tabItem:"tabItem_Ymn6"};var s=l(74848);function t(e){let{children:n,hidden:l,className:t}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,t),hidden:l,children:n})}},11470:(e,n,l)=>{l.d(n,{A:()=>y});var a=l(96540),o=l(18215),s=l(23104),t=l(56347),r=l(205),i=l(57485),d=l(31682),c=l(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:l,attributes:a,default:o}}=e;return{value:n,label:l,attributes:a,default:o}}))}(l);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function j(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:l}=e;const o=(0,t.W6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,i.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function b(e){const{defaultValue:n,queryString:l=!1,groupId:o}=e,s=h(e),[t,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[d,u]=p({queryString:l,groupId:o}),[b,x]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,c.Dv)(l);return[o,(0,a.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:o}),m=(()=>{const e=d??b;return j({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{m&&i(m)}),[m]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!j({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=l(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=l(74848);function g(e){let{className:n,block:l,selectedValue:a,selectValue:t,tabValues:r}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,l=i.indexOf(n),o=r[l].value;o!==a&&(d(n),t(o))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const l=i.indexOf(e.currentTarget)+1;n=i[l]??i[0];break}case"ArrowLeft":{const l=i.indexOf(e.currentTarget)-1;n=i[l]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":l},n),children:r.map((e=>{let{value:n,label:l,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:c,...s,className:(0,o.A)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===n}),children:l??n},n)}))})}function f(e){let{lazy:n,children:l,selectedValue:s}=e;const t=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",m.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(f,{...n,...e})]})}function y(e){const n=(0,x.A)();return(0,v.jsx)(k,{...e,children:u(e.children)},String(n))}},28453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>r});var a=l(96540);const o={},s=a.createContext(o);function t(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);