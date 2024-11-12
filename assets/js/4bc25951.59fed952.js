"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5774],{56778:(e,t,n)=>{n.d(t,{A:()=>s});n(96540);var a=n(18215);const o={tabItem:"tabItem_Ymn6"};var r=n(74848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:n,children:t})}},37244:(e,t,n)=>{n.d(t,{A:()=>w});var a=n(96540),o=n(18215),r=n(44319),s=n(56347),i=n(94280),l=n(73024),c=n(58417),u=n(44031);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=m(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[c,d]=h({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,u.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),x=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&l(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=n(46916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==a&&(c(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,o.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,o.A)("tabs-container",x.tabList),children:[(0,j.jsx)(v,{...t,...e}),(0,j.jsx)(g,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(t))}},93640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"mutation/save-command/incomplete","title":"Incomplete Object","description":"The parameter of a save command is a dynamic object. If some of the properties are not specified, then the object is an incomplete object.","source":"@site/docs/mutation/save-command/incomplete.mdx","sourceDirName":"mutation/save-command","slug":"/mutation/save-command/incomplete","permalink":"/jimmer-doc/docs/mutation/save-command/incomplete","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/save-command/incomplete.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Incomplete Object"},"sidebar":"tutorialSidebar","previous":{"title":"Save Mode of Associated Objects","permalink":"/jimmer-doc/docs/mutation/save-command/associated-save-mode"},"next":{"title":"Save Associations","permalink":"/jimmer-doc/docs/mutation/save-command/association"}}');var o=n(74848),r=n(28453),s=n(37244),i=n(56778);const l={sidebar_position:5,title:"Incomplete Object"},c=void 0,u={},d=[{value:"JPA Example",id:"jpa-example",level:2},{value:"Jimmer Example",id:"jimmer-example",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The parameter of a save command is a dynamic object. If some of the properties are not specified, then the object is an incomplete object."}),"\n",(0,o.jsxs)(t.p,{children:["To demonstrate the value of incomplete objects, let's look at a real example - changing the many-to-one association ",(0,o.jsx)(t.code,{children:"store"})," of the ",(0,o.jsx)(t.code,{children:"Book"})," with id ",(0,o.jsx)(t.code,{children:"8"})," to null."]}),"\n",(0,o.jsx)(t.p,{children:"It seems there are two ways to implement this functionality:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Execute an UPDATE statement via ",(0,o.jsx)(t.a,{href:"../update-statement",children:"update statements"})]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Query the ",(0,o.jsx)(t.code,{children:"Book"})," object, change its ",(0,o.jsx)(t.code,{children:"store"})," property to null, and save it"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Most developers prefer the second approach. So in this article, we will discuss the second approach."}),"\n",(0,o.jsx)(t.h2,{id:"jpa-example",children:"JPA Example"}),"\n",(0,o.jsx)(t.p,{children:"Before introducing Jimmer's support for saving incomplete objects, let's first see how to implement this with JPA:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",metastring:'title="JPA Example" ',children:"EntityManager entityManager = ...get JPA session from current transaction context, omitted...\nBook book = entityManager.find(Book.class, 8L);\n\nbook.setStore(null); // JPA entities are mutable, change association to null\n\n// Calling merge here just for clarity, can be omitted since JPA will update db on tx commit anyway\nentityManager.merge(book);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Apart from setting ",(0,o.jsx)(t.code,{children:"store"})," to null, we do not know the existing values of other properties. In JPA, constrained by the fixed shape of plain POJO entities, we have to query all properties of the object, modify the ",(0,o.jsx)(t.code,{children:"store"})," property ",(0,o.jsx)(t.em,{children:"(keeping others unchanged)"}),", and save the object again."]}),"\n",(0,o.jsx)(t.p,{children:"Even if the object has hundreds of properties, we have to do this, which is obviously wasteful."}),"\n",(0,o.jsx)(t.h2,{id:"jimmer-example",children:"Jimmer Example"}),"\n",(0,o.jsxs)(s.A,{groupId:"language",children:[(0,o.jsx)(i.A,{value:"java",label:"Java",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-java",children:"sqlClient.update(\n    Immutables.createBook(draft -> {\n        draft.setId(8L);\n        draft.setStore(null);\n    })\n);\n"})})}),(0,o.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-kotlin",children:"sqlClient.update(\n    Book {\n        id = 8L\n        store = null\n    }\n);\n"})})})]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:["Explicitly use ",(0,o.jsx)(t.code,{children:"update"})," ",(0,o.jsxs)(t.em,{children:["(or ",(0,o.jsx)(t.code,{children:"save(book, SaveMode.UPDATE_ONLY)"}),")"]})," to indicate this is an update operation, avoiding the probing query of the ",(0,o.jsx)(t.code,{children:"UPSERT"})," mode to simplify the discussion."]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Make up"})," a Book object out of thin air, only assigning its ",(0,o.jsx)(t.code,{children:"id"})," property and ",(0,o.jsx)(t.code,{children:"store"})," property, while all other properties are unknown."]}),"\n",(0,o.jsxs)(t.p,{children:["This incomplete object tells Jimmer to not modify any other properties except ",(0,o.jsx)(t.code,{children:"store"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Jimmer will directly generate the following SQL:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-sql",children:"update BOOK\nset\n    STORE_ID = ? /* <null: long> */  \nwhere\n    ID = ? /* 8 */\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.mdxAdmonitionTitle,{}),(0,o.jsx)(t.p,{children:"So forget about the old inefficient pattern: query -> modify -> save"})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(96540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);