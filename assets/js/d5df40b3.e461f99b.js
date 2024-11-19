"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1621],{48174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"object/immutable/current-situation","title":"Current Situation","description":"Java has supported immutable record types since Java 14, and Kotlin\'s data classes can easily implement immutable classes, even supporting copy functions. However, they are designed for simple immutable objects, and have problems dealing with complex deep data structure.","source":"@site/docs/object/immutable/current-situation.mdx","sourceDirName":"object/immutable","slug":"/object/immutable/current-situation","permalink":"/jimmer-doc/docs/object/immutable/current-situation","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/object/immutable/current-situation.mdx","tags":[],"version":"current","lastUpdatedAt":1704015848000,"sidebarPosition":2,"frontMatter":{"sidebar_position":2,"title":"Current Situation"},"sidebar":"tutorialSidebar","previous":{"title":"Reason","permalink":"/jimmer-doc/docs/object/immutable/reason"},"next":{"title":"Solution","permalink":"/jimmer-doc/docs/object/immutable/solution"}}');var l=t(74848),r=t(28453),o=t(11470),i=t(19365);function s(e){const n={admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"First define an immutable tree node"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"  ',children:"record TreeNode(\n    String name,\n    List<TreeNode> childNodes\n) {}\n"})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",metastring:'title="TreeNode.java"',children:"data class TreeNode(\n    val name: String,\n    val childNodes: List<TreeNode>  \n)\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Prepare an old object"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"var oldTreeNode = ...blabla... \n"})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:"val oldTreeNode = ...blabla...\n"})})})]}),"\n",(0,l.jsx)(n.p,{children:"Let's implement three data change operations in order from simple to complex to create a brand new object"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Change the name property of the root node"}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = new TreeNode(\n    // highlight-next-line \n    "Hello", // Set root node name  \n    oldTreeNode.childNodes()\n);\n'})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = oldTreeNode.copy(\n    // highlight-next-line\n    name = "Hello" // Set root node name\n);\n'})})})]}),"\n",(0,l.jsx)(n.p,{children:"This case is very simple, and the problems of Java/Kotlin are not obvious yet."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Change the name property of the first level child node"}),"\n",(0,l.jsx)(n.p,{children:"Breadcrumb conditions:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Position of first level child node: pos1"}),"\n"]}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                // highlight-next-line\n                "Hello", // Set name of first level child node  \n                oldChild1.childNodes()\n            );\n        })\n        .toList()\n);\n'})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    // highlight-next-line\n                    name = "Hello" // Set name of first level child node   \n                )\n            } else {\n                child1\n            }\n        }\n)\n'})})})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Change the name property of the second level child node"}),"\n",(0,l.jsx)(n.p,{children:"Breadcrumb conditions:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Position of first level child node: pos1"}),"\n",(0,l.jsx)(n.li,{children:"Position of second level child node: pos2"}),"\n"]}),"\n",(0,l.jsxs)(o.A,{groupId:"language",children:[(0,l.jsx)(i.A,{value:"java",label:"Java",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:'TreeNode newTreeNode = new TreeNode(\n    oldTreeNode.name(),\n    IntStream\n        .range(0, oldTreeNode.childNodes().size())\n        .mapToObj(index1 -> {\n            TreeNode oldChild1 = oldTreeNode.childNodes().get(index1);\n            if (index1 != pos1) {\n                return oldChild1;\n            }\n            return new TreeNode(\n                oldChild1.name(),\n                IntStream\n                    .range(0, oldChild1.childNodes().size())\n                    .mapToObj(index2 -> {\n                        TreeNode oldChild2 = oldChild1.childNodes().get(index2);\n                        if (index2 != pos2) {\n                            return oldChild2;\n                        } else {\n                            return new TreeNode(\n                                // highlight-next-line\n                                "Hello", // Set name of second level child node\n                                oldChild2.childNodes()\n                            );\n                        }\n                    })\n                    .toList()\n            );\n        })\n        .toList()\n);\n'})})}),(0,l.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-kotlin",children:'val newTreeNode = oldTreeNode.copy(\n    childNodes = oldTreeNode\n        .childNodes\n        .mapIndexed { index1, child1 ->\n            if (index1 == pos1) {\n                child1.copy(\n                    childNodes = child1\n                        .childNodes\n                        .mapIndexed { index2, child2 ->\n                            if (index2 == pos2) {\n                                child2.copy(\n                                    // highlight-next-line\n                                    name = "Hello" // Set name of second level child node\n                                )\n                            } else {\n                                child2\n                            }\n                        }\n                )\n            } else {\n                child1\n            }\n        }\n)\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.admonition,{type:"info",children:(0,l.jsx)(n.p,{children:'It can be seen that as long as the object tree has some depth, creating a new immutable object based on another immutable object (i.e. secondary "modification") will be a nightmare.'})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(s,{...e})}):s(e)}const c={sidebar_position:2,title:"Current Situation"},u=void 0,h={},m=[];function p(e){const n={p:"p",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Java has supported immutable record types since Java 14, and Kotlin's data classes can easily implement immutable classes, even supporting copy functions. However, they are designed for simple immutable objects, and have problems dealing with complex deep data structure."}),"\n",(0,l.jsx)(n.p,{children:"The reason why deep, complex immutable objects are difficult to handle is not how to create a brand new data structure from scratch, which is very simple for any programming language. The real difficulty is wanting to make some local adjustments to an existing data structure and build a new data structure. This is very difficult for current Java and Kotlin, please see"}),"\n",(0,l.jsx)(d,{})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(p,{...e})}):p(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var a=t(18215);const l={tabItem:"tabItem_Ymn6"};var r=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(l.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>T});var a=t(96540),l=t(18215),r=t(23104),o=t(56347),i=t(205),s=t(57485),d=t(31682),c=t(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,d.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const l=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:l}=e,r=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[d,u]=p({queryString:t,groupId:l}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,c.Dv)(t);return[l,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:l}),x=(()=>{const e=d??b;return m({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{x&&s(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(74848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=s.indexOf(n),l=i[t].value;l!==a&&(d(n),o(l))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:u,onClick:c,...r,className:(0,l.A)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,l.A)("margin-top--md",e.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function N(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,l.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function T(e){const n=(0,f.A)();return(0,j.jsx)(N,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const l={},r=a.createContext(l);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);