"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9322],{85587:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"mutation/associations","title":"Mutable Association Table","description":"Overview","source":"@site/docs/mutation/associations.mdx","sourceDirName":"mutation","slug":"/mutation/associations","permalink":"/jimmer-doc/docs/mutation/associations","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mutation/associations.mdx","tags":[],"version":"current","lastUpdatedAt":1729456376000,"sidebarPosition":5,"frontMatter":{"sidebar_position":5,"title":"Mutable Association Table"},"sidebar":"tutorialSidebar","previous":{"title":"Delete Command","permalink":"/jimmer-doc/docs/mutation/delete-command"},"next":{"title":"Interceptor before save","permalink":"/jimmer-doc/docs/mutation/draft-interceptor"}}');var a=t(74848),l=t(28453),o=t(11470),i=t(19365);const r={sidebar_position:5,title:"Mutable Association Table"},c=void 0,d={},h=[{value:"Overview",id:"overview",level:2},{value:"Insert Association",id:"insert-association",level:2},{value:"Reverse Conversion",id:"reverse-conversion",level:2},{value:"Bulk Insert",id:"bulk-insert",level:2},{value:"Check Existence",id:"check-existence",level:2},{value:"Delete Association",id:"delete-association",level:2},{value:"Bulk Delete",id:"bulk-delete",level:2},{value:"Notes",id:"notes",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.p,{children:["First, the association table is hidden by the object model, with no direct corresponding entity type. This problem has been explained in ",(0,a.jsx)(n.a,{href:"../query/associations",children:"Query Association Table"}),", so I won't repeat it here."]}),"\n",(0,a.jsxs)(n.p,{children:["In addition, in the ",(0,a.jsx)(n.a,{href:"./save-command",children:"Save Command"})," section, we introduced the save command. It can compare the existing data structure in the database with the new data structure the user wants to save. If a relation property based on the association table has changed, the association table will be modified."]}),"\n",(0,a.jsx)(n.p,{children:"Admittedly, the Save Command feature is very powerful, and modifying the association table is just a very small part of its capabilities. However, sometimes we just need a simple way to insert or delete data directly from the association table, we don't need the full capabilities of the Save Command."}),"\n",(0,a.jsx)(n.p,{children:"Jimmer allows developers to directly insert and delete data from the association table in a simpler way."}),"\n",(0,a.jsx)(n.h2,{id:"insert-association",children:"Insert Association"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .save(12L, 3L); \n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(Book::authors)\n    // highlight-next-line\n    .save(12L, 3L)\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into\n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        BOOK_ID, AUTHOR_ID  \n    )\n    values (?, ?)\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This example shows how to use the association property ",(0,a.jsx)(n.code,{children:"Book.authors"})," to operate the association table."]}),"\n",(0,a.jsxs)(n.p,{children:["Similarly, we can achieve the same goal through the association property ",(0,a.jsx)(n.code,{children:"Authors.books"}),":"]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(AuthorProps.BOOKS) \n    // highlight-next-line\n    .save(3L, 12L);\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(Author::books)\n    // highlight-next-line \n    .save(3L, 12L) \n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Note that compared to the previous example, the parameter order of the ",(0,a.jsx)(n.code,{children:"save"})," method is different due to the different association direction."]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into\n    BOOK_AUTHOR_MAPPING(\n        /* highlight-next-line */\n        AUTHOR_ID, BOOK_ID\n    ) \n    values (?, ?)\n"})}),"\n",(0,a.jsx)(n.p,{children:"It's easy to see that the order of the insert statement columns is also different."}),"\n",(0,a.jsx)(n.h2,{id:"reverse-conversion",children:"Reverse Conversion"}),"\n",(0,a.jsxs)(n.p,{children:["For bidirectional associations, ",(0,a.jsx)(n.code,{children:"reverse"})," can be used to switch between forward and reverse associations:"]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Associations bookToAuthor = sqlClient\n    .getAssociations(BookProps.AUTHORS);\nAssociations authorToBook = sqlClient\n    .getAssociations(AuthorProps.BOOKS);\nAssociations authorToBook2 =\n    // highlight-next-line\n    bookToAuthor.reverse(); \nAssociations bookToAuthor2 =\n    // highlight-next-line\n    authorToBook.reverse();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val bookToAuthor = \n    sqlClient.getAssociations(\n        Book::authors\n    )\nval authorToBook = \n    sqlClient.getAssociations(\n        Author::books  \n    )\nval authorToBook2 =\n    // highlight-next-line\n    bookToAuthor.reverse()\nval bookToAuthor2 =\n    // highlight-next-line \n    authorToBook.reverse()\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"In this code:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"bookToAuthor"})," and ",(0,a.jsx)(n.code,{children:"bookToAuthor2"})," are completely equivalent."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"authorToBook"})," and ",(0,a.jsx)(n.code,{children:"authorToBook2"})," are completely equivalent."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"bulk-insert",children:"Bulk Insert"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .saveAll(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L), \n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L)  \n        )\n    );\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors  \n    )\n    // highlight-next-line \n    .saveAll(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    ) \n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here there are 3 books, two authors, and 6 total combination ways. The ",(0,a.jsx)(n.code,{children:"saveAll"})," method inserts all 6 combinations into the association table, generating the following SQL:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID\n) values\n    /* highlight-start */\n    (?, ?),\n    (?, ?), \n    (?, ?),\n    (?, ?),\n    (?, ?),\n    (?, ?) \n    /* highlight-end */\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The above approach is very cumbersome. For ",(0,a.jsx)(n.code,{children:"3 * 2 = 6"})," it is still acceptable, but what about ",(0,a.jsx)(n.code,{children:"7 * 9 = 63"}),"? Should we really construct 63 tuples?"]}),"\n",(0,a.jsx)(n.p,{children:"Jimmer-sql provides a shorthand syntax:"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // Save cartesian product of two id sets  \n    // highlight-next-line\n    .saveAll(\n        Arrays.asList(\n            10L, 11L, 12L\n        ),\n        Arrays.asList(\n            1L, 3L\n        )\n    );\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // Save cartesian product of two id sets\n    // highlight-next-line \n    .saveAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L)\n    )\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["The above ",(0,a.jsx)(n.code,{children:"saveAll"})," method takes two collection parameters and inserts the cartesian product of the two collections into the association table, so its functionality is the same as the previous example."]}),"\n",(0,a.jsx)(n.h2,{id:"check-existence",children:"Check Existence"}),"\n",(0,a.jsx)(n.p,{children:"Inserting id tuples that already exist into the association table will cause errors, as it violates uniqueness constraints."}),"\n",(0,a.jsx)(n.p,{children:"To solve this problem, existence checks can be performed."}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    .saveAllCommand(\n        Arrays.asList(\n            10L, 11L, 12L\n        ), \n        Arrays.asList(\n            1L, 3L\n        )\n    )\n    // highlight-next-line\n    .checkExistence()\n    .execute();\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .saveAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L),\n        // highlight-next-line\n        checkExistence = true\n    )\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here ",(0,a.jsx)(n.code,{children:"checkExistence()"})," indicates that it will first check which data to be inserted already exists, and then only insert data that does not exist."]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL statements are:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Check which data to be inserted already exists:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"select\n    BOOK_ID, AUTHOR_ID\nfrom BOOK_AUTHOR_MAPPING\nwhere\n    (BOOK_ID, AUTHOR_ID) in(\n        (?, ?),\n        (?, ?), \n        (?, ?)\n    )\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Using the results of the previous query, the data that really needs to be inserted can be calculated. Skip this step if no data needs to be inserted; otherwise, execute this step."}),"\n",(0,a.jsx)(n.p,{children:"Here, assuming it is determined that only two rows of data really need to be inserted, the generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"insert into BOOK_AUTHOR_MAPPING(\n    BOOK_ID, AUTHOR_ID  \n) values\n    (?, ?),\n    (?, ?)\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Some databases support ",(0,a.jsx)(n.code,{children:"UPSERT"})," ",(0,a.jsxs)(n.em,{children:["(such as Postgres' ",(0,a.jsx)(n.code,{children:"insert into ... on conflict ..."}),")"]}),", which will be supported before Jimmer-1.0.0"]})}),"\n",(0,a.jsx)(n.h2,{id:"delete-association",children:"Delete Association"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .delete(12L, 3L);\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .delete(12L, 3L)\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"delete from BOOK_AUTHOR_MAPPING\nwhere\n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?) \n    )\n"})}),"\n",(0,a.jsx)(n.h2,{id:"bulk-delete",children:"Bulk Delete"}),"\n",(0,a.jsx)(n.p,{children:"Similar to bulk insert, there are two ways to bulk delete:"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(\n        BookTableEx.claBookProps.AUTHORS)\n    // highlight-next-line \n    .deleteAll(\n        Arrays.asList(\n            new Tuple2<>(10L, 1L),\n            new Tuple2<>(11L, 1L),\n            new Tuple2<>(12L, 1L),\n            new Tuple2<>(10L, 3L),\n            new Tuple2<>(11L, 3L),\n            new Tuple2<>(12L, 3L), \n        )\n    );\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .deleteAll(\n        listOf(\n            Tuple2(10L, 1L),\n            Tuple2(11L, 1L),\n            Tuple2(12L, 1L),\n            Tuple2(10L, 3L),\n            Tuple2(11L, 3L),\n            Tuple2(12L, 3L)\n        )\n    )\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Or:"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"sqlClient\n    .getAssociations(BookProps.AUTHORS)\n    // highlight-next-line\n    .deleteAll(\n        Arrays.asList(10L, 11L, 12L),\n        Arrays.asList(1L, 3L)\n    ); \n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"sqlClient\n    .getAssociations(\n        Book::authors\n    )\n    // highlight-next-line\n    .deleteAll(\n        listOf(10L, 11L, 12L),\n        listOf(1L, 3L) \n    )\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"The generated SQL is:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"delete from BOOK_AUTHOR_MAPPING  \nwhere\n    (BOOK_ID, AUTHOR_ID) in (\n        (?, ?),\n        (?, ?)\n    )\n"})}),"\n",(0,a.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Please do not abuse this feature. This feature is only suitable for simple insertion and deletion of association tables. It is recommended to only use it when facing the simplest incremental operations."})}),"\n",(0,a.jsx)(n.p,{children:"Let's look at an example. If comparison with existing data in the database is needed, this feature is obviously not the optimal choice, and the code will be very cumbersome, as follows:"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Inappropriate Usage Example" ',children:"public void setAuthors(long bookId, Collection<Long> authorIds) {\n\n    // Get old author ids\n    AssociationTable<Book, BookTableEx, Author, AuthorTableEx> table =\n                AssociationTable.of(BookTableEx.class, BookTableEx::authors);    \n    List<Long> oldAuthorIds = sqlClient\n            .createAssociationQuery(table)\n            .where(table.source().id().eq(bookId))\n            .select(table.target().id())\n            .execute();\n\n    // Delete `oldAuthorIds - authorIds`\n    List<Long> detachedAuthorIds = new ArrayList<>(oldAuthorIds);\n    detachedAuthorIds.removeAll(authorIds);\n    sqlClient.getAssociations(BookProps.AUTHORS).deleteAll(\n            Collections.singleton(bookId),\n            detachedAuthorIds\n    );\n\n    // Insert `authorIds - oldAuthorIds`\n    List<Long> attachedAuthorIds = new ArrayList<>(authorIds);\n    attachedAuthorIds.removeAll(oldAuthorIds);\n    sqlClient.getAssociations(BookProps.AUTHORS).saveAll(\n            Collections.singleton(bookId),\n            attachedAuthorIds\n    );\n}\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Inappropriate Usage Example"',children:"fun setAuthors(bookId: Long, authorIds: Collection<Long>) {\n    // Get old author ids\n    val oldAuthorIds = sqlClient.queries.forList(Book::authors) {\n        where(table.source.id eq bookId)\n        select(table.target.id)\n    }.execute().toSet()\n\n    // Delete `oldAuthorIds - authorIds`\n    sqlClient\n        .getAssociations(Book::authors)\n        .deleteAll(listOf(bookId), oldAuthorIds - authorIds)\n\n    // Insert `authorIds - oldAuthorIds` \n    sqlClient\n        .getAssociations(Book::authors)\n        .saveAll(listOf(bookId), authorIds - oldAuthorIds)\n}\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"It is obvious that dealing with it this way is very cumbersome."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["When the business scenario is no longer simple addition or deletion, ",(0,a.jsx)(n.a,{href:"./save-command",children:"Save Command"})," is a better choice, as follows:"]})}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(i.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",metastring:'title="Better Usage Example"',children:"public void setAuthors(long bookId, Collection<Long> authorIds) {\n    sqlClient.save(\n        Immutables.createBook(book -> {\n            book.setId(bookId);\n            book.setAuthorIds(authorIds);\n        })\n    );\n}\n"})})}),(0,a.jsx)(i.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",metastring:'title="Better Usage Example"  ',children:"fun setAuthors(bookId: Long, authorIds: Collection<Long>) {\n    sqlClient.save(\n        Book {\n            id = bookId\n            authorIds = authorIds\n        }\n    )\n}\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var s=t(18215);const a={tabItem:"tabItem_Ymn6"};var l=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var s=t(96540),a=t(18215),l=t(23104),o=t(56347),i=t(205),r=t(57485),c=t(31682),d=t(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,r.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=u(e),[o,r]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[c,h]=g({queryString:t,groupId:a}),[x,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Dv)(t);return[a,(0,s.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),v=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{v&&r(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);r(e),h(e),m(e)}),[h,m,l]),tabValues:l}}var m=t(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(74848);function j(e){let{className:n,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,t=r.indexOf(n),a=i[t].value;a!==s&&(c(n),o(a))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=r.indexOf(e.currentTarget)+1;n=r[t]??r[0];break}case"ArrowLeft":{const t=r.indexOf(e.currentTarget)-1;n=r[t]??r[r.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>r.push(e),onKeyDown:h,onClick:d,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function A(e){let{lazy:n,children:t,selectedValue:l}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===l));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==l})))})}function f(e){const n=x(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,b.jsx)(j,{...n,...e}),(0,b.jsx)(A,{...n,...e})]})}function k(e){const n=(0,m.A)();return(0,b.jsx)(f,{...e,children:h(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var s=t(96540);const a={},l=s.createContext(a);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);