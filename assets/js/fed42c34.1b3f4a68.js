"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4380],{56778:(e,n,t)=>{t.d(n,{A:()=>a});t(96540);var l=t(18215);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,l.A)(s.tabItem,a),hidden:t,children:n})}},37244:(e,n,t)=>{t.d(n,{A:()=>v});var l=t(96540),s=t(18215),i=t(44319),a=t(56347),r=t(94280),o=t(73024),c=t(58417),d=t(44031);function u(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:l,default:s}}=e;return{value:n,label:t,attributes:l,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function b(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,l.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,o]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=t.find((e=>e.default))??t[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:i}))),[c,u]=p({queryString:t,groupId:s}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,l.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=c??m;return b({value:e,tabValues:i})?e:null})();(0,r.A)((()=>{x&&o(x)}),[x]);return{selectedValue:a,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(46916);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(74848);function g(e){let{className:n,block:t,selectedValue:l,selectValue:a,tabValues:r}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=r[t].value;s!==l&&(c(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":l===n}),children:t??n},n)}))})}function I(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,l.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,f.jsx)(g,{...n,...e}),(0,f.jsx)(I,{...n,...e})]})}function v(e){const n=(0,j.A)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},58226:(e,n,t)=>{t.d(n,{a:()=>m});var l=t(96540),s=t(72774),i=t(63051),a=t(28968),r=t(48875),o=t(44676),c=t(47859),d=t(4671),u=t(99343),h=t(7324),b=t(39781),p=t(74848);const m=(0,l.memo)((e=>{let{open:n,fullScreen:t=!1,title:r,maxWidth:m="md",onClose:x,children:f}=e;const[g,I]=(0,l.useState)(t),y=(0,l.useCallback)((()=>{I((e=>!e))}),[]);return(0,p.jsxs)(i.A,{open:n,onClose:x,fullScreen:g,TransitionComponent:j,maxWidth:m,children:[(0,p.jsx)(s.A,{sx:{position:"relative"},children:(0,p.jsxs)(o.A,{children:[(0,p.jsx)(c.A,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:r}),(0,p.jsx)(d.A,{onClick:y,style:{color:"white"},children:g?(0,p.jsx)(h.A,{}):(0,p.jsx)(u.A,{})}),(0,p.jsx)(d.A,{"aria-label":"close",onClick:x,style:{color:"white"},children:(0,p.jsx)(b.A,{})})]})}),(0,p.jsx)(a.A,{children:f})]})})),j=l.forwardRef((function(e,n){return(0,p.jsx)(r.A,{direction:"up",ref:n,...e})}))},47389:(e,n,t)=>{t.d(n,{l:()=>r});var l=t(96540),s=t(67512),i=t(58226),a=t(74848);const r=(0,l.memo)((e=>{let{buttonText:n,fullScreen:t=!1,title:r=n,variant:o="outlined",large:c=!1,maxWidth:d,useOriginalText:u=!0,children:h}=e;const[b,p]=(0,l.useState)(!1),m=(0,l.useCallback)((e=>{p(!0),e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}),[]),j=(0,l.useCallback)((()=>{p(!1)}),[]),x=u?{textTransform:"none"}:{};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.A,{"data-is-view-more-button":"true",onClick:m,variant:o,size:c?"large":"small",style:x,children:n}),(0,a.jsx)(i.a,{open:b,onClose:j,title:r,maxWidth:d,fullScreen:t,children:h})]})}))},53194:(e,n,t)=>{t.d(n,{Ay:()=>r,RM:()=>i});var l=t(74848),s=t(28453);const i=[{value:"Scene-1",id:"scene-1",level:2},{value:"Scene-2",id:"scene-2",level:2}];function a(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:["Currently, other technologies that operate on SQL, whether ORM or non-ORM, have a blank area: they only consider dynamic ",(0,l.jsx)(n.code,{children:"where"}),", and do not consider ",(0,l.jsx)(n.code,{children:"dynamic join"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Dynamic JOIN"})," is defined as: If some dynamic query conditions are for tables other than the current table. This means"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When the condition is met: First join to other tables through association properties, then add dynamic where conditions to the joined table"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"When the condition is not met: Cannot join other tables through association properties"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"scene-1",children:"Scene-1"}),"\n",(0,l.jsx)(n.p,{children:"Let's first look at the first scene, taking MyBatis oriented to native SQL as an example"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Define MyBatis Mapper interface"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-java",children:"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName, \n        @Nullable String storeWebsite\n    );\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"Here, all query parameters may be null, which is clearly a dynamic query."}),"\n",(0,l.jsxs)(n.p,{children:["The last two query parameters: ",(0,l.jsx)(n.code,{children:"storeName"})," and ",(0,l.jsx)(n.code,{children:"storeWebsite"}),", their filtering conditions are not applied on the current table ",(0,l.jsx)(n.code,{children:"BOOK"}),", but on the parent table ",(0,l.jsx)(n.code,{children:"BOOK_STORE"}),".\nThat is, when any of these two parameters is non-null, a JOIN to the ",(0,l.jsx)(n.code,{children:"BOOK_STORE"})," table will be generated. This table join dynamically determined by the parameter value is referred to as ",(0,l.jsx)(n.code,{children:"dynamic JOIN"})," in this article."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Define MyBatis SQL mapping XML"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n'})}),"\n",(0,l.jsx)(n.p,{children:"Here, \u2776 is the dynamic JOIN. However, for developers, \u2777 and \u2778 are the purpose, and \u2776 is the work that has to be done to support \u2777 and \u2778. Its judgment condition is a burden."}),"\n",(0,l.jsxs)(n.p,{children:["You may have noticed that \u2776 uses ",(0,l.jsx)(n.code,{children:"or"}),". This is easy to understand."]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"However, this is only the simplest dynamic connection between two tables. For deeper multi-table join operations, the complexity of dynamic table joins will increase dramatically!"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"scene-2",children:"Scene-2"}),"\n",(0,l.jsx)(n.p,{children:"Let's take a look at the second scene. With the previous example as the basis, this example is decoupled from any business."}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n    PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n    "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n  <select id="findAObjects" resultType="somepackage.A">\n    select distinct A.id\n    from A\n    \x3c!-- highlight-start --\x3e  \n    <if test="bId != null or cId != null or dId != null or eId != null">\n      inner join B on A.ID = B.A_ID \n    </if>\n    <if test="cId != null or dId != null or eId != null">\n      inner join C on B.ID = C.B_ID\n    </if>\n    <if test="dId != null or eId != null">\n      inner join D on C.ID = D.C_ID \n    </if>\n    <if test="eId != null">\n      inner join E on D.ID = E.D_ID\n    </if>\n    \x3c!-- highlight-end --\x3e\n    <where>\n      <if test="aId != null">\n        and A.ID = #{aId}  \n      </if>\n      <if test="bId != null">\n        and B.ID = #{bId}\n      </if>\n      <if test="cId != null">\n        and C.ID = #{cId}\n      </if>\n      <if test="dId != null">\n        and D.ID = #{dId}\n      </if>\n      <if test="eId != null">\n        and E.ID = #{eId}\n      </if>\n    </where>\n  </select>\n</mapper>\n'})}),"\n",(0,l.jsx)(n.p,{children:"The logic of this example is simple. The five tables A, B, C, D and E form a JOIN chain, and each table has a dynamic query condition. However, as you can see, the complexity of dynamic JOIN has become unacceptable."})]})}function r(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},14025:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>m,frontMatter:()=>d,metadata:()=>l,toc:()=>b});const l=JSON.parse('{"id":"query/dynamic-join/merge","title":"Merge Conflict Joins","description":"Usage","source":"@site/docs/query/dynamic-join/merge.mdx","sourceDirName":"query/dynamic-join","slug":"/query/dynamic-join/merge","permalink":"/jimmer-doc/docs/query/dynamic-join/merge","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/query/dynamic-join/merge.mdx","tags":[],"version":"current","lastUpdatedAt":1704100403000,"sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Merge Conflict Joins"},"sidebar":"tutorialSidebar","previous":{"title":"Association Path Chaining","permalink":"/jimmer-doc/docs/query/dynamic-join/chain-style"},"next":{"title":"Optimize Unnecessary Joins","permalink":"/jimmer-doc/docs/query/dynamic-join/optimization"}}');var s=t(74848),i=t(28453),a=t(53194),r=t(37244),o=t(56778),c=t(47389);const d={sidebar_position:3,title:"Merge Conflict Joins"},u=void 0,h={},b=[{value:"Usage",id:"usage",level:2},{value:"Merge Rules",id:"merge-rules",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(c.l,{buttonText:"Problems with current solutions",children:(0,s.jsx)(a.Ay,{})}),", we listed two scenarios. This article discusses how to resolve the problems in these two scenarios."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"There are two ways to solve this problem. This article demonstrates the first solution."})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Solve the problem in scenario 1:"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n) {\n    BookTable table = Tables.BOOK_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            name != null,\n            () -> book.name().like(name)\n        )\n        .whereIf(\n            storeName != null, \n            () -> table\n                .store() \u2776\n                .name()\n                .like(storeName)\n        )\n        .whereIf(\n            storeWebsite != null,\n            () -> table\n                .store() \u2777\n                .website()\n                .like(storeWebsite)\n        )\n        .select(book)\n        .execute();\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun findBooks(\n    name: String? = null,\n    storeName: String? = null, \n    storeWebsite: String? = null\n): List<Book> = \n    sqlClient\n        .createQuery(Book::class) {\n            name?.let {\n                where(table.name like it) \n            }\n            storeName?.let {\n                where(\n                    table\n                        .store \u2776\n                        .name like it\n                )\n            }\n            storeWebsite?.let {\n                where(\n                    table\n                        .store \u2777\n                        .website like it\n                )\n            }\n            select(table)\n        }\n        .execute()\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"This is a typical dynamic query where all three query parameters are nullable."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specify ",(0,s.jsx)(n.code,{children:"name"})," but ",(0,s.jsx)(n.code,{children:"storeName"})," and ",(0,s.jsx)(n.code,{children:"storeWebsite"})," are still null."]}),"\n",(0,s.jsx)(n.p,{children:"In this case, the code at \u2776 and \u2777 will not execute. The final generated SQL does not contain any joins."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select \n    tb_1_.ID, \n    tb_1_.NAME,  \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_ \n    where tb_1_.NAME = ?\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specify ",(0,s.jsx)(n.code,{children:"name"})," and ",(0,s.jsx)(n.code,{children:"storeName"}),", but ",(0,s.jsx)(n.code,{children:"storeWebsite"})," is still null."]}),"\n",(0,s.jsx)(n.p,{children:"In this case, the join at \u2776 takes effect but the code at \u2777 does not execute. The final generated SQL is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME, \n    tb_1_.EDITION,\n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_\n/* highlight-start */ \ninner join BOOK_STORE as tb_2_\n    on tb_1_.STORE_ID = tb_2_.ID \n/* highlight-end */\nwhere\n    tb_1_.NAME = ?\nand \n    tb_2_.NAME = ? \n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Specify all parameters, ",(0,s.jsx)(n.code,{children:"name"}),", ",(0,s.jsx)(n.code,{children:"storeName"})," and ",(0,s.jsx)(n.code,{children:"storeWebsite"})," are all non-null."]}),"\n",(0,s.jsx)(n.p,{children:"In this case, both joins at \u2776 and \u2777 take effect. This situation is called join conflict."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.p,{children:"This conflict does not cause any problems. Conflicting joins are merged into one join."}),(0,s.jsx)(n.p,{children:"So in the final generated SQL, there will be no duplicate join operations."})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select\n    tb_1_.ID,\n    tb_1_.NAME,\n    tb_1_.EDITION, \n    tb_1_.PRICE,\n    tb_1_.STORE_ID\nfrom BOOK as tb_1_\n    /* highlight-start */\n    inner join BOOK_STORE as tb_2_ on\n        tb_1_.STORE_ID = tb_2_.ID\n    /* highlight-end */\nwhere\n    tb_1_.NAME = ?\nand\n    tb_2_.NAME = ?\nand\n    tb_2_.WEBSITE = ? \n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Solve the problem in scenario 2:"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"List<Long> findDistinctIds(\n    @Nullable Long aId,\n    @Nullable Long bId,\n    @Nullable Long cId,\n    @Nullable Long dId,\n    @Nullable Long eId\n) {\n    ATable table = Tables.A_TABLE;\n\n    return sqlClient\n        .createQuery(table)\n        .whereIf(\n            aId != null,\n            () -> table.id().like(aId)\n        )\n        .whereIf(\n            bId != null,\n            () -> table.asTableEx().bs().id().like(bId)\n        )\n        .whereIf(\n            cId != null,\n            () -> table.asTableEx().bs().cs().id().like(cId)\n        )\n        .whereIf(\n            dId != null,\n            () -> table.asTableEx().bs().cs().ds().id().like(dId)\n        )\n        .whereIf(\n            eId != null,\n            () -> table.asTableEx().bs().cs().ds().es().id().like(eId)  \n        )\n        .select(book.id())\n        .distinct()\n        .execute();\n}\n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun findDistinctIds(\n    aId: Long? = null,\n    bId: Long? = null,\n    cId: Long? = null,\n    dId: Long? = null,\n    eId: Long? = null\n): List<Long> =\n    sqlClient\n        .createQuery(A::class) {\n            aId?.let {\n                where(table.id eq it)\n            }\n            bId?.let {\n                where(table.asTableEx().bs.id eq it)\n            }\n            cId?.let {\n                where(table.asTableEx().bs.cs.id eq it)\n            }\n            dId?.let {\n                where(table.asTableEx().bs.cs.ds.id eq it)\n            }\n            eId?.let {\n                where(table.asTableEx().bs.cs.ds.es.id eq it)\n            }\n            select(table.id)\n        }\n        .distinct()\n        .execute()\n"})})})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Given the basics above, no need to list the generated SQL for different parameter combinations here. Just understand that the final SQL will not contain duplicate joins."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"asTableEx"})," here is a concept to be introduced in later docs ",(0,s.jsx)(n.a,{href:"./table-ex",children:"Pagination Safety"}),". Please ignore it for now."]}),"\n"]}),"\n"]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"merge-rules",children:"Merge Rules"}),"\n",(0,s.jsx)(n.p,{children:"Assume there are three join paths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a -> b -> c -> d -> e -> f -> g"}),"\n",(0,s.jsx)(n.li,{children:"a -> b -> c -> h -> i -> j"}),"\n",(0,s.jsx)(n.li,{children:"a -> x -> y -> z -> a -> b -> c -> d"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To eliminate conflicts, Jimmer first merges these paths into a tree:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"-+-a\n |\n +----+-b\n |    |\n |    \\----+-c\n |         | \n |         +----+-d\n |         |    |\n |         |    \\----+-e\n |         |         |\n |         |         \\----+-f\n |         |              |\n |         |              \\------g\n |         | \n |         \\----+-h\n |              |\n |              \\----+-i\n |                   |\n |                   \\------j\n |\n \\----+-x\n      |\n      \\----+-y\n           |\n           \\----+-z\n                |\n                \\----+-a\n                     |\n                     \\----+-b\n                          |\n                          \\----+-c\n                               |\n                               \\------d\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then generate the join clause in the final SQL based on this tree."}),"\n",(0,s.jsx)(n.p,{children:"Another rule to note is join type. The method to create join objects takes a parameter to specify join type, e.g. left join:"}),"\n",(0,s.jsxs)(r.A,{groupId:"language",children:[(0,s.jsx)(o.A,{value:"java",label:"Java",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"book.store(JoinType.LEFT) \n"})})}),(0,s.jsx)(o.A,{value:"kotlin",label:"Kotlin",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"book.`store?`\n"})})})]}),"\n",(0,s.jsx)(n.p,{children:"The merge rules for join types:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If join types of all conflicting join nodes are the same, the merge preserves that join type."}),"\n",(0,s.jsx)(n.li,{children:"Otherwise, the merge result is always inner join."}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var l=t(96540);const s={},i=l.createContext(s);function a(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);