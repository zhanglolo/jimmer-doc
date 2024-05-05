"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=d(n),m=l,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),l=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(83117),l=n(67294),o=n(34334),i=n(72389),r=n(67392),s=n(7094),d=n(12466);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var t;const{lazy:n,block:i,defaultValue:u,values:m,groupId:k,className:h}=e,f=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,r.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const N=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==N&&!g.some((e=>e.value===N)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${N}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:v}=(0,s.U)(),[C,w]=(0,l.useState)(N),T=[],{blockElementScrollPositionUntilNextRender:A}=(0,d.o5)();if(null!=k){const e=b[k];null!=e&&e!==C&&g.some((t=>t.value===e))&&w(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=g[n].value;a!==C&&(A(t),w(a),null!=k&&v(k,String(a)))},B=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,o.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>T.push(e),onKeyDown:B,onFocus:O,onClick:O},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,l.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function m(e){const t=(0,i.Z)();return l.createElement(u,(0,a.Z)({key:String(t)},e))}},5455:(e,t,n)=>{n.d(t,{ZP:()=>i});var a=n(83117),l=(n(67294),n(3905));const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"There are 5 modes for dissociating child objects "),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,(0,l.kt)("p",null,"NONE\n",(0,l.kt)("em",{parentName:"p"},"(default)"))),(0,l.kt)("td",null,(0,l.kt)("p",null,"Depend on the global configuration ",(0,l.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking"),". "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If ",(0,l.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking")," is true ",(0,l.kt)("em",{parentName:"p"},"(default)")," or the foreign key underlying the current association is real ",(0,l.kt)("em",{parentName:"p"},"(there is a corresponding foreign key constraint in the database, please refer to ",(0,l.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"Real and Fake Foreign Keys"),")"),",\nit is treated as CHECK. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If ",(0,l.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking")," is false and the foreign key underlying the current association is fake ",(0,l.kt)("em",{parentName:"p"},"(there is no corresponding foreign key constraint in the database, please refer to ",(0,l.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"Real and Fake Foreign Keys"),")"),", "),(0,l.kt)("p",{parentName:"li"},"it is treated as LAX. "))))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"LAX"),(0,l.kt)("td",null,(0,l.kt)("p",null,"This option is only valid for pseudo foreign keys ",(0,l.kt)("em",{parentName:"p"},"(please refer to ",(0,l.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"Real and Fake Foreign Keys"),")"),",\notherwise it will be ignored, the same as CHECK. "),(0,l.kt)("p",null,"Dissociation operations are supported even if there are child objects.\nEven if the parent object is deleted ",(0,l.kt)("em",{parentName:"p"},"(dissociation mode is also adopted by delete commands)"),",\ndangling pseudo foreign keys of child objects are allowed\n",(0,l.kt)("em",{parentName:"p"},"(even if pseudo foreign keys are left dangling, the query system can still work normally)"),". "))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"CHECK"),(0,l.kt)("td",null,"If there are child objects, disassociation is not supported, the operation is prevented by throwing an exception.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"SET_NULL"),(0,l.kt)("td",null,"Set the foreign key of the disassociated child object to null. The prerequisite is that the many-to-one associated propety of the child object is nullable; otherwise, attempting this configuration will lead to an exception.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"DELETE"),(0,l.kt)("td",null,"Delete the disassociated child objects.")))))}i.isMDXComponent=!0},6549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(83117),l=(n(67294),n(3905)),o=n(65488),i=n(85162),r=n(5455);const s={sidebar_position:4,title:"Delete Command"},d=void 0,p={unversionedId:"mutation/delete-command",id:"mutation/delete-command",title:"Delete Command",description:"Basic Concepts",source:"@site/docs/mutation/delete-command.mdx",sourceDirName:"mutation",slug:"/mutation/delete-command",permalink:"/jimmer-doc/docs/mutation/delete-command",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/delete-command.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Delete Command"},sidebar:"tutorialSidebar",previous:{title:"Using MapStruct",permalink:"/jimmer-doc/docs/mutation/save-command/input-dto/mapstruct"},next:{title:"Mutable Association Table",permalink:"/jimmer-doc/docs/mutation/associations"}},c={},u=[{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Logical Delete",id:"logical-delete",level:2},{value:"Physical Delete",id:"physical-delete",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Dissociate Mode",id:"dissociate-mode",level:3},{value:"Dissociation Examples",id:"dissociation-examples",level:2}],m={toc:u};function k(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"basic-concepts"},"Basic Concepts"),(0,l.kt)("p",null,"The delete command deletes objects by id or id collection."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"API Category"),(0,l.kt)("th",null,"Language"),(0,l.kt)("th",null,"Delete by Id"),(0,l.kt)("th",null,"Delete by Id Collection"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Low Level API"),(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,"Full API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"JSqlClient.getEntities().delete"),(0,l.kt)("li",null,"JSqlClient.getEntities().deleteCommand")),"Shortcut API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"JSqlClient.deleteById"))),(0,l.kt)("td",null,"Full API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"JSqlClient.getEntities().deleteAll"),(0,l.kt)("li",null,"JSqlClient.getEntities().deleteAllCommand")),"Shortcut API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"JSqlClient.deleteByIds")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Kotlin"),(0,l.kt)("td",null,"Full API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"KSqlClient.entities.delete")),"Shortcut API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"KSqlClient.deleteById"))),(0,l.kt)("td",null,"Full API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"KSqlClient.entities.deleteAll")),"Shortcut API",(0,l.kt)("ul",null,(0,l.kt)("li",null,"KSqlClient.deleteByIds")))),(0,l.kt)("tr",null,(0,l.kt)("td",{rowspan:"2"},"Spring Data API"),(0,l.kt)("td",null,"Java"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"JRepository.deleteById"))),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"JRepository.deleteByIds"),(0,l.kt)("li",null,"JRepository.deleteAllById")))),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Kotlin"),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"KRepository.deleteById"))),(0,l.kt)("td",null,(0,l.kt)("ul",null,(0,l.kt)("li",null,"KRepository.deleteByIds"),(0,l.kt)("li",null,"KRepository.deleteAllById")))))),(0,l.kt)("p",null,"Necessary Explanations:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the Java low-level API there are two methods ending in ",(0,l.kt)("inlineCode",{parentName:"p"},"Command"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteCommand")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteAllCommand"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"These two methods create commands but do not execute them immediately. After the user does more configuration on the command, calling ",(0,l.kt)("inlineCode",{parentName:"p"},"execute")," executes it."),(0,l.kt)("p",{parentName:"li"},"Take ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteCommand")," as an example:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L) \u2776\n    .setDissociateAction(BookProps.STORE, DissociateAction.SET_NULL) \u2777\n    .execute(); \u2778\n")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 Create the command, but do not execute it.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 Configure the command, can be chained with multiple configurations ",(0,l.kt)("em",{parentName:"p"},"(here only one configuration is demoed)")," "))),(0,l.kt)("admonition",{parentName:"li",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"The effect of this configuration will be explained later, readers can ignore it for now.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u2778 Finally execute it.")),(0,l.kt)("p",{parentName:"li"},"Kotlin does not need such a design, because its delete method supports an optional Lambda parameter for configuration. Simply execute with the necessary configuration:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        setDissociateAction(Book::store, DissociateAction.SET_NULL)\n    }\n"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"In the Spring Data API we can find two methods with the same functionality but different names: ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteByIds")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteAllById"),"."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"deleteByIds"),": A method consistent in style with the Jimmer low-level shortcut API.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"deleteAllById"),": A required method when inheriting ",(0,l.kt)("inlineCode",{parentName:"p"},"org.springframework.data.repository.CrudRepository"),", can be understood as an alias of ",(0,l.kt)("inlineCode",{parentName:"p"},"deleteByIds"),".")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The delete command supports two types of operations:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Logical delete: Does not actually delete data, just marks the logical delete field of the object as "deleted".')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Physical delete: Actually deletes data."))),(0,l.kt)("p",{parentName:"li"},"All the above APIs support an optional parameter of type ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteMode")," through Java method overloading or Kotlin default parameters. This parameter type is an enum with three possible values:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"AUTO"),": Does not explicitly specify whether the current operation is logical delete or physical delete"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the deleted entity type has a ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted/entity"},"logical delete field"),", perform logical delete.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Otherwise, perform physical delete.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"LOGICAL"),": Explicitly specifies that the current operation is logical delete"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the deleted entity type has a ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted/entity"},"logical delete field"),", perform logical delete.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Otherwise, throw an exception indicating that the current entity does not support logical delete.")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"PHYSICAL"),": Explicitly specifies that the current operation is physical delete"),(0,l.kt)("p",{parentName:"li"},"Regardless of whether the deleted entity type has a ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted/entity"},"logical delete field"),", perform physical delete."))))),(0,l.kt)("h2",{id:"logical-delete"},"Logical Delete"),(0,l.kt)("p",null,"Assuming the entity has a ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted/entity"},"logical delete field"),", for example:"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line  \n    @LogicalDeleted("true")\n    boolean isDeleted();\n\n    ...other code omitted...\n}\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...other code omitted...\n}\n')))),(0,l.kt)("p",null,"Then the following three behaviors:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L, DeleteMode.AUTO)")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L, DeleteMode.LOGICAL)"))),(0,l.kt)("p",null,"have the same function, they all represent logical delete, and generate the following sql:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK  \nset DELETED = ? /* true */\nwhere ID in(?/* 1L*/)\n")),(0,l.kt)("h2",{id:"physical-delete"},"Physical Delete"),(0,l.kt)("p",null,"If the entity does not have a ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted/entity"},"logical delete field"),", or the delete mode is explicitly specified as ",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteMode.PHYSICAL"),", physical delete is performed. "),(0,l.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .deleteAll(Book.class, Arrays.asList(1L, 2L, 3L, 4L));\n\nSystem.out.println(\n    \n    "Affected row count: " +\n    result.getTotalAffectedRowCount() + \n\n    "\\nAffected row count of table \'BOOK\': " +\n    result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n    \n    "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n    result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val result = sqlClient\n    .entities\n    .deleteAll(Book::class, listOf(1L, 2L, 3L, 4L))\nprintln(\n    """Affected row count:\n        |${result.totalAffectedRowCount}\n        |Affected row count of table \'BOOK\':\n        |${result.affectedRowCount(Book::class)} \n        |Affected row count of middle table \'BOOK_AUTHOR_MAPPING\':\n        |${result.affectedRowCount(Book::authors)}\n    """.trimMargin()  \n)\n')))),(0,l.kt)("p",null,"The finally generated SQL is: "),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING\nwhere BOOK_ID in(?, ?, ?, ?) \n"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK\nwhere ID in(?, ?, ?, ?)\n")))),(0,l.kt)("h3",{id:"dissociate-mode"},"Dissociate Mode"),(0,l.kt)("p",null,"From the above discussion we can see that the delete command may cause data in many-to-many association middle tables to be deleted, which is a relatively simple case."),(0,l.kt)("p",null,"For one-to-one or one-to-many associations directly based on foreign keys, the situation to be handled is a little more complex."),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .delete(BookStore.class, 1L);\n\nSystem.out.println(\n\n    "Affected row count: " +\n            result.getTotalAffectedRowCount() +\n\n            "\\nAffected row count of table \'BOOK_STORE\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookStore.class)) +\n\n            "\\nAffected row count of table \'BOOK\': " + \n            result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n\n            "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L)\nprintln(  \n    \"\"\"Affected row count:\n        |${result.totalAffectedRowCount}\n        |Affected row count of table 'BOOK_STORE':\n        |${result.affectedRowCount(BookStore::class)}\n        |Affected row count of table 'BOOK':\n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table 'BOOK_AUTHOR_MAPPING':\n        |${result.affectedRowCount(Book::authors)} \n    \"\"\".trimMargin()\n)\n")))),(0,l.kt)("p",null,"This code deletes a ",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore")," object. "),(0,l.kt)("p",null,"Because the ",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore")," object has a one-to-many association ",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.books"),", if the object being deleted already has some associated objects in the database, Jimmer will discard those objects."),(0,l.kt)("p",null,"The one-to-many association ",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.books")," is not a mapping based on a middle table, but a mapping based on a foreign key. How will Jimmer discard those ",(0,l.kt)("inlineCode",{parentName:"p"},"Book")," objects?"),(0,l.kt)("p",null,"Unlike JPA, Jimmer does not allow direct use of ",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToMany")," for association mapping. ",(0,l.kt)("inlineCode",{parentName:"p"},"@OneToMany")," must use the ",(0,l.kt)("inlineCode",{parentName:"p"},"mappedBy")," property. See ",(0,l.kt)("a",{parentName:"p",href:"../mapping/base/association/one-to-many"},"@OneToMany")," to learn more.  "),(0,l.kt)("p",null,"This means that through the one-to-many association ",(0,l.kt)("inlineCode",{parentName:"p"},"BookStore.books")," we can certainly find the corresponding many-to-one association ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"."),(0,l.kt)("p",null,"Next, Jimmer will refer to the ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," annotation on the many-to-one association property ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"),"."),(0,l.kt)(r.ZP,{mdxType:"DissociateMode"}),(0,l.kt)("h2",{id:"dissociation-examples"},"Dissociation Examples"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If the foreign key corresponding to ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store")," is configured by the ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," annotation as ",(0,l.kt)("inlineCode",{parentName:"p"},"SET_NULL"),", the following SQL is executed:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set STORE_ID = null where STORE_ID in(?)\n")),(0,l.kt)("p",{parentName:"li"},"where the parameter is the id of the deleted object. Thus, the foreign keys of these discarded objects are set to null.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Otherwise, first execute:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"select ID from BOOK where STORE_ID in(?) \n")),(0,l.kt)("p",{parentName:"li"},"where the parameter is the id of the deleted object. Thus, the ids of these discarded objects are obtained."),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"If the query does not return any data, skip the subsequent steps.")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"If the foreign key corresponding to ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store")," is configured by ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," as ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),", use the new delete command to delete these discarded objects. This is actually the automatic recursive execution capability of the delete command.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Otherwise, throw an exception."))))),(0,l.kt)("p",null,"The above discussed situations all require the developer to use the ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," annotation on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store")," property. "),(0,l.kt)("p",null,"However, you can also choose not to use the ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," annotation, but dynamically specify the dissociateAction configuration for the delete command."),(0,l.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L)\n    .configure(it ->\n            it\n                // highlight-next-line \n                .setDissociateAction(\n                    BookProps.STORE,\n                    DissociateAction.SET_NULL\n                )\n    )\n    .execute();\n"))),(0,l.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        // highlight-next-line\n        setDissociateAction(\n            Book::store,\n            DissociateAction.SET_NULL  \n        )\n    }\n")))),(0,l.kt)("p",null,"Here, calling the command's ",(0,l.kt)("inlineCode",{parentName:"p"},"setDissociateAction")," method dynamically has the same effect as using the ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," annotation statically on the ",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store")," property and specifying cascade delete."),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ol",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If the last parameter of the ",(0,l.kt)("inlineCode",{parentName:"p"},"setDissociateAction")," method is ",(0,l.kt)("inlineCode",{parentName:"p"},"DissociateAction.SET_NULL"),", the associated property being set must be nullable, otherwise it will cause an exception.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"If dissociation rules are configured dynamically for the save command and also configured statically in the entity interface through the ",(0,l.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate")," annotation, the dynamic configuration takes precedence. ")))))}k.isMDXComponent=!0}}]);