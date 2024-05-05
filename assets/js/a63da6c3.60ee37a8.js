"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[1730],{37638:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>I,contentTitle:()=>O,default:()=>T,frontMatter:()=>x,metadata:()=>P,toc:()=>j});var r=t(83117),n=t(67294),o=t(3905),i=t(63012),l=t(7906),m=t(295),u=t(53252),s=t(53184),d=t(53816),p=t(65488),c=t(85162),k=t(53457),f=t(50480),C=t(85071),v=t(67720);const h=e=>{let{type:a,locale:t}=e;const[r,o]=(0,n.useState)("OPS"!==a),i=(0,n.useCallback)(((e,a)=>{o(a)}),[]);return n.createElement(p.Z,{groupId:"chart-mode"},n.createElement(c.Z,{value:"chart",label:"zh"===t?"\u56fe\u8868":"Chart",default:!0},"OPS"===a&&n.createElement(n.Fragment,null,n.createElement(k.Z,null,n.createElement(f.Z,{control:n.createElement(C.Z,{value:r,onChange:i}),label:"zh"===t?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),n.createElement(v.Z,null)),"OPS"==a?n.createElement(w,{rows:y,scale:N,showJdbc:r}):n.createElement(w,{rows:D,scale:g,showJdbc:r})),n.createElement(c.Z,{value:"data",label:"zh"===t?"\u6570\u636e":"Data"},"OPS"===a?n.createElement(J,{rows:E,valueTitle:"Ops/s"}):n.createElement(J,{rows:S,valueTitle:"Time(\u03bcs)"})))},w=e=>{let{rows:a,scale:t,showJdbc:r,height:o=400}=e;return n.createElement(i.Chart,{filter:r?void 0:{framework:e=>!e.startsWith("JDBC")},height:o,padding:"auto",data:a,scale:t,autoFit:!0},n.createElement(i.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),n.createElement(i.Axis,{name:"value",title:!0}),n.createElement(i.Legend,{position:"left"}),n.createElement(i.Tooltip,{shared:!0}),n.createElement(i.Interaction,{type:"active-region"}))},J=e=>{let{rows:a,valueTitle:t}=e;return n.createElement(l.Z,null,n.createElement(s.Z,null,n.createElement(d.Z,null,n.createElement(u.Z,null,"Framework"),n.createElement(u.Z,null,"Data count"),n.createElement(u.Z,null,t))),n.createElement(m.Z,null,a.map((e=>n.createElement(d.Z,{key:`${e.framework}-${e.dataCount}`},n.createElement(u.Z,null,e.framework),n.createElement(u.Z,null,e.dataCount),n.createElement(u.Z,null,e.value))))))},N={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},g={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},b=[{framework:"JDBC(ColIndex)",dataCount:"10",value:662071},{framework:"JDBC(ColIndex)",dataCount:"20",value:453226},{framework:"JDBC(ColIndex)",dataCount:"50",value:259484},{framework:"JDBC(ColIndex)",dataCount:"100",value:130991},{framework:"JDBC(ColIndex)",dataCount:"200",value:77725},{framework:"JDBC(ColIndex)",dataCount:"500",value:32109},{framework:"JDBC(ColIndex)",dataCount:"1000",value:16188},{framework:"JDBC(ColName)",dataCount:"10",value:345169},{framework:"JDBC(ColName)",dataCount:"20",value:238107},{framework:"JDBC(ColName)",dataCount:"50",value:125589},{framework:"JDBC(ColName)",dataCount:"100",value:72424},{framework:"JDBC(ColName)",dataCount:"200",value:33068},{framework:"JDBC(ColName)",dataCount:"500",value:16234},{framework:"JDBC(ColName)",dataCount:"1000",value:8346},{framework:"Jimmer(Java)",dataCount:"10",value:315312},{framework:"Jimmer(Java)",dataCount:"20",value:224179},{framework:"Jimmer(Java)",dataCount:"50",value:132673},{framework:"Jimmer(Java)",dataCount:"100",value:77044},{framework:"Jimmer(Java)",dataCount:"200",value:41474},{framework:"Jimmer(Java)",dataCount:"500",value:16371},{framework:"Jimmer(Java)",dataCount:"1000",value:8831},{framework:"Jimmer(Kotlin)",dataCount:"10",value:309029},{framework:"Jimmer(Kotlin)",dataCount:"20",value:230622},{framework:"Jimmer(Kotlin)",dataCount:"50",value:128315},{framework:"Jimmer(Kotlin)",dataCount:"100",value:74499},{framework:"Jimmer(Kotlin)",dataCount:"200",value:36656},{framework:"Jimmer(Kotlin)",dataCount:"500",value:16870},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:7932},{framework:"EasyQuery",dataCount:"10",value:206634},{framework:"EasyQuery",dataCount:"20",value:135063},{framework:"EasyQuery",dataCount:"50",value:92230},{framework:"EasyQuery",dataCount:"100",value:45502},{framework:"EasyQuery",dataCount:"200",value:28085},{framework:"EasyQuery",dataCount:"500",value:11666},{framework:"EasyQuery",dataCount:"1000",value:4427},{framework:"MyBatis",dataCount:"10",value:68743},{framework:"MyBatis",dataCount:"20",value:43940},{framework:"MyBatis",dataCount:"50",value:20050},{framework:"MyBatis",dataCount:"100",value:10541},{framework:"MyBatis",dataCount:"200",value:5310},{framework:"MyBatis",dataCount:"500",value:2137},{framework:"MyBatis",dataCount:"1000",value:1048},{framework:"Exposed",dataCount:"10",value:92494},{framework:"Exposed",dataCount:"20",value:66934},{framework:"Exposed",dataCount:"50",value:26693},{framework:"Exposed",dataCount:"100",value:19483},{framework:"Exposed",dataCount:"200",value:10008},{framework:"Exposed",dataCount:"500",value:3894},{framework:"Exposed",dataCount:"1000",value:2082},{framework:"JPA(Hibernate)",dataCount:"10",value:90542},{framework:"JPA(Hibernate)",dataCount:"20",value:59926},{framework:"JPA(Hibernate)",dataCount:"50",value:25893},{framework:"JPA(Hibernate)",dataCount:"100",value:13096},{framework:"JPA(Hibernate)",dataCount:"200",value:6900},{framework:"JPA(Hibernate)",dataCount:"500",value:2491},{framework:"JPA(Hibernate)",dataCount:"1000",value:1207},{framework:"JPA(EclipseLink)",dataCount:"10",value:64230},{framework:"JPA(EclipseLink)",dataCount:"20",value:33421},{framework:"JPA(EclipseLink)",dataCount:"50",value:13634},{framework:"JPA(EclipseLink)",dataCount:"100",value:6802},{framework:"JPA(EclipseLink)",dataCount:"200",value:3238},{framework:"JPA(EclipseLink)",dataCount:"500",value:1361},{framework:"JPA(EclipseLink)",dataCount:"1000",value:650},{framework:"JOOQ",dataCount:"10",value:69408},{framework:"JOOQ",dataCount:"20",value:39737},{framework:"JOOQ",dataCount:"50",value:18373},{framework:"JOOQ",dataCount:"100",value:8145},{framework:"JOOQ",dataCount:"200",value:4186},{framework:"JOOQ",dataCount:"500",value:1707},{framework:"JOOQ",dataCount:"1000",value:832},{framework:"Nutz",dataCount:"10",value:76904},{framework:"Nutz",dataCount:"20",value:39501},{framework:"Nutz",dataCount:"50",value:16639},{framework:"Nutz",dataCount:"100",value:8903},{framework:"Nutz",dataCount:"200",value:4374},{framework:"Nutz",dataCount:"500",value:2040},{framework:"Nutz",dataCount:"1000",value:957},{framework:"ObjectiveSQL",dataCount:"10",value:56245},{framework:"ObjectiveSQL",dataCount:"20",value:29975},{framework:"ObjectiveSQL",dataCount:"50",value:12455},{framework:"ObjectiveSQL",dataCount:"100",value:6251},{framework:"ObjectiveSQL",dataCount:"200",value:3470},{framework:"ObjectiveSQL",dataCount:"500",value:1259},{framework:"ObjectiveSQL",dataCount:"1000",value:559},{framework:"Spring Data JDBC",dataCount:"10",value:20494},{framework:"Spring Data JDBC",dataCount:"20",value:10704},{framework:"Spring Data JDBC",dataCount:"50",value:4146},{framework:"Spring Data JDBC",dataCount:"100",value:2229},{framework:"Spring Data JDBC",dataCount:"200",value:1025},{framework:"Spring Data JDBC",dataCount:"500",value:447},{framework:"Spring Data JDBC",dataCount:"1000",value:197},{framework:"Ktorm",dataCount:"10",value:19152},{framework:"Ktorm",dataCount:"20",value:9520},{framework:"Ktorm",dataCount:"50",value:4385},{framework:"Ktorm",dataCount:"100",value:2091},{framework:"Ktorm",dataCount:"200",value:1063},{framework:"Ktorm",dataCount:"500",value:427},{framework:"Ktorm",dataCount:"1000",value:168}],y=b.map((e=>({...e,value:Math.round(e.value)}))),D=b.map((e=>({...e,value:Math.round(1e6/e.value)})));b.filter((e=>!e.framework.startsWith("JDBC(")));function B(e,a){return parseInt(e.dataCount)-parseInt(a.dataCount)}const E=y.sort(B),S=D.sort(B),x={sidebar_position:4,title:"Benchmark Report"},O=void 0,P={unversionedId:"overview/benchmark",id:"overview/benchmark",title:"Benchmark Report",description:"Not only can Jimmer bring you powerful features, but it can also bring you ultimate performance.",source:"@site/docs/overview/benchmark.mdx",sourceDirName:"overview",slug:"/overview/benchmark",permalink:"/jimmer-doc/docs/overview/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/overview/benchmark.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"Benchmark Report"},sidebar:"tutorialSidebar",previous:{title:"APT/KSP",permalink:"/jimmer-doc/docs/overview/apt-ksp"},next:{title:"Quick View \u2605",permalink:"/jimmer-doc/docs/quick-view/"}},I={},j=[{value:"Report",id:"report",level:2},{value:"Operations Per Second",id:"operations-per-second",level:3},{value:"Operation Time",id:"operation-time",level:3},{value:"Implementation Principles",id:"implementation-principles",level:2},{value:"Value",id:"value",level:2},{value:"Why so fast?",id:"why-so-fast",level:2}],Q={toc:j};function T(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},Q,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Not only can Jimmer bring you powerful features, but it can also bring you ultimate performance.")),(0,o.kt)("p",null,"The source code for benchmarking is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"here"),", using H2 in-memory database, no environment preparation needed to run directly."),(0,o.kt)("h2",{id:"report"},"Report"),(0,o.kt)("h3",{id:"operations-per-second"},"Operations Per Second"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The x-axis indicates the number of data objects queried from the database each time."),(0,o.kt)("li",{parentName:"ul"},"The y-axis indicates the number of operations per second.")),(0,o.kt)(h,{type:"OPS",locale:"en",mdxType:"Benchmark"}),(0,o.kt)("h3",{id:"operation-time"},"Operation Time"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The x-axis indicates the number of data objects queried from the database each time."),(0,o.kt)("li",{parentName:"ul"},"The y-axis indicates the operation time (microseconds) for each operation.")),(0,o.kt)(h,{type:"TIME",locale:"en",mdxType:"Benchmark"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since Spring removed support for OpenJPA, this benchmark test does not include ",(0,o.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)"),". ")),(0,o.kt)("h2",{id:"implementation-principles"},"Implementation Principles"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Disable cache for all frameworks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Turn off logs for all frameworks")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For all frameworks, open and close connections/sessions each time, no sharing; rely on connection pools to ensure performance.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use Spring's connection management mechanism. The implementation is slightly different due to the different APIs of different frameworks."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Some use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils"),"'s getConnection and releaseConnection"),(0,o.kt)("li",{parentName:"ul"},"Some use ",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,o.kt)("p",{parentName:"li"},"But the end result is the same")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Do not use transactions"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Exposed")," is special in that its API can only work with transactions, so there is a fake transaction implementation for it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use embedded H2 database to compress database overhead as much as possible, highlighting the performance of the ORM itself, i.e. the performance of mapping."))),(0,o.kt)("h2",{id:"value"},"Value"),(0,o.kt)("p",null,"A common view: the performance of the ORM itself is not important. In actual projects, the database is not an in-memory database, so the time consumed by the ORM itself is negligible compared to the time consumed by the database."),(0,o.kt)("p",null,"Rebuttal: After the release of Java 19, virtual threads are supported. The faster the ORM completes the mapping, the more virtual threads the JVM can schedule, which can increase system throughput."),(0,o.kt)("h2",{id:"why-so-fast"},"Why so fast?"),(0,o.kt)("p",null,"There are two programming styles in JDBC for reading values from ",(0,o.kt)("inlineCode",{parentName:"p"},"java.sql.ResultSet")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)"),", i.e. reading by column index, ",(0,o.kt)("inlineCode",{parentName:"p"},"rs.getString(1)")," ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),", reading by column name: ",(0,o.kt)("inlineCode",{parentName:"p"},'rs.getString("VALUE_1")')))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)")," is faster than ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),", so Jimmer itself also uses ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)")," as the underlying means of accessing ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultSet"),", providing the possibility of exceeding the performance metrics of ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),".  "),(0,o.kt)("p",null,"Now let's focus on discussing the two cases in the charts ",(0,o.kt)("em",{parentName:"p"},"(select native JDBC metrics)"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Querying 10 rows of data each time, the OPS of ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Jimmer(Java)")," are close."),(0,o.kt)("p",{parentName:"li"},"In this scenario, the performance of Jimmer and ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," is similar. The test code of ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," directly hardcodes the SQL, while Jimmer needs to dynamically construct the SQL using the DSL mechanism, from which perspective Jimmer should be slower. However, the process of Jimmer converting ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultSet")," to objects is faster than ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),", canceling each other out. So the performance is similar."),(0,o.kt)("p",{parentName:"li"},"Of course, the SQL statement used in Benchmark is not complex. If more complex SQL is used, the hardcoded SQL ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)")," will be faster, which is also an area Jimmer can optimize in subsequent versions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Querying 1000 rows of data each time, Jimmer's ops are significantly higher than ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),"'s OPS."),(0,o.kt)("p",{parentName:"li"},"In this case, the performance advantage of Jimmer converting ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultSet")," to objects is fully demonstrated. Even if Jimmer slowed down due to dynamically generating SQL using DSL, the overall result is still faster than ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColName)"),"."),(0,o.kt)("p",{parentName:"li"},"The main reasons why Jimmer converts ",(0,o.kt)("inlineCode",{parentName:"p"},"ResultSet")," to objects so fast are:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC(ColIndex)")," at the bottom layer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Do not use Java reflection to dynamically set properties for objects."),(0,o.kt)("p",{parentName:"li"},"At compile time, Jimmer generates a modifiable ",(0,o.kt)("inlineCode",{parentName:"p"},"DraftImpl")," class for each immutable entity type, which provides a generic ",(0,o.kt)("inlineCode",{parentName:"p"},"__set(PropId propId, Object value)")," method to achieve dynamic setting of object properties similar to Java reflection."),(0,o.kt)("p",{parentName:"li"},"At the same time, the compiler assigns each property an integer as id. The ",(0,o.kt)("inlineCode",{parentName:"p"},"__set")," method in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DraftImpl")," class uses a ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statement internally to identify the passed property id. For example, the generated Java code is:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic void __set(PropId prop, Object value) {\n    int __propIndex = prop.asIndex();\n    switch (__propIndex) {\n        case -1:\n            __set(prop.asName(), value);\n            return;\n        // highlight-next-line\n        case 0:  \n            setId((Long)value);\n            break;\n        // highlight-next-line\n        case 1:\n            setName((String)value);\n            break;\n        // highlight-next-line \n        case 2:\n            setEdition((Integer)value);\n            break;\n        ...Omitted...\n    }\n}\n")),(0,o.kt)("p",{parentName:"li"},"Modern compilers have sufficient optimization for such integer-based ",(0,o.kt)("inlineCode",{parentName:"p"},"switch")," statements, so it can be considered that Jimmer's dynamic assignment of entity objects is not much slower than the hardcoded JDBC test code."))))),(0,o.kt)("p",null,"These two reasons are the most important reasons why Jimmer's object mapping performance is so high."))}T.isMDXComponent=!0}}]);