"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6058],{86346:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"mapping/base/json-converter","title":"JSON Converter","description":"Although Jimmer entities are not POJOs, Jackson serialization can be supported by org.babyish.jimmer.jackson.ImmutableModule.","source":"@site/docs/mapping/base/json-converter.mdx","sourceDirName":"mapping/base","slug":"/mapping/base/json-converter","permalink":"/jimmer-doc/docs/mapping/base/json-converter","draft":false,"unlisted":false,"editUrl":"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/mapping/base/json-converter.mdx","tags":[],"version":"current","lastUpdatedAt":1731427770000,"sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"JSON Converter"},"sidebar":"tutorialSidebar","previous":{"title":"Real and Fake Foreign Keys","permalink":"/jimmer-doc/docs/mapping/base/foreignkey"},"next":{"title":"More Types","permalink":"/jimmer-doc/docs/mapping/base/more-type"}}');var a=t(74848),i=t(28453),o=t(11470),s=t(19365);const l={sidebar_position:6,title:"JSON Converter"},c=void 0,d={},u=[{value:"1. Snowflake ID",id:"1-snowflake-id",level:2},{value:"Usage",id:"usage",level:3},{value:"Automatically Applied to IdView Properties",id:"automatically-applied-to-idview-properties",level:3},{value:"Automatically Applied to DTO",id:"automatically-applied-to-dto",level:3},{value:"2. Data Masking",id:"2-data-masking",level:2},{value:"Usage",id:"usage-1",level:3},{value:"Support Input",id:"support-input",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Although Jimmer entities are not POJOs, Jackson serialization can be supported by ",(0,a.jsx)(n.code,{children:"org.babyish.jimmer.jackson.ImmutableModule"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If using the Jimmer Spring Boot Starter, this ",(0,a.jsx)(n.code,{children:"ImmutableModule"})," will be automatically registered without user intervention."]})}),"\n",(0,a.jsx)(n.p,{children:"However, sometimes we need to customize the Jackson serialization behavior of certain properties. We give two examples here."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Snowflake ID"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Data Masking"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"1-snowflake-id",children:"1. Snowflake ID"}),"\n",(0,a.jsx)(n.p,{children:"Snowflake IDs lead to very large int64 values that unfortunately cannot be represented by JavaScript's number type. Therefore, we have no choice but to serialize such id properties as strings."}),"\n",(0,a.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Entity\n@public interface Book {\n\n    @Id \n    @GeneratedValue(generatorType = SnowflakeIdGenerator.class)\n    // highlight-next-line\n    @JsonConverter(LongToStringConverter.class) \n    long id();\n\n    String name();\n\n    ...Omit other properties...\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Entity \n@public interface Book {\n\n    @Id\n    @GeneratedValue(generatorType = SnowflakeIdGenerator.class) \n    // highlight-next-line\n    @JsonConverter(LongToStringConverter.class)\n    long id();\n\n    String name();\n\n    ...Omit other properties... \n}\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Where ",(0,a.jsx)(n.code,{children:"SnowflakeIdGenerator"})," is a user-provided distributed snowflake ID generator implementation, which is not the focus of our discussion."]}),"\n",(0,a.jsx)(n.p,{children:"Here, we discuss the highlighted line:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"@org.babyfish.jimmer.jackson.JsonConverter"})," indicates custom Jackson serialization/deserialization behavior for the ",(0,a.jsx)(n.code,{children:"Book.id"})," property."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"org.babyfish.jimmer.jackson.LongToStringConverter"})," means serialize/deserialize the long value as a String."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"LongToStringConverter"})," is a built-in Converter in Jimmer. Here we show its source code to quickly understand how to customize ",(0,a.jsx)(n.code,{children:"Converter"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"package org.babyfish.jimmer.jackson;\n\npublic class LongToStringConverter implements Converter<Long, String> { \n\n    // How to serialize\n    @Override \n    public String output(Long value) {\n        return Long.toString(value);\n    }\n\n    // How to deserialize \n    @Override\n    public Long input(String jsonValue) {\n        return Long.parseLong(jsonValue);\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsx)(n.p,{children:"Note:"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Jimmer annotations rather than Jackson annotations are used here, because:  This is not only an adjustment of the serialization framework Jackson, but also a useful adjustment of"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"../../client",children:"Automatic client/server integration"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"../../object/view/dto-language",children:"DTO language"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"No need to consider null values \u200b\u200binside Converter, null values \u200b\u200bwill never be passed as an argument to any Converter method."}),"\n"]}),"\n"]})]}),"\n",(0,a.jsx)(n.p,{children:"Here, bypassing ORM, we demonstrate the effect by simulating data."}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setId(1546434604146774987L); \n    draft.setName("SQL in Action");  \n});\nSystem.out.println(book);\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {\n    id = 1546434604146774987L  \n    name = "SQL in Action" \n}\nprintln(book) \n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Since the ",(0,a.jsx)(n.code,{children:"toString"})," of Jimmer entities is Jackson serialization, we can print directly and observe the results of Jackson serialization:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    // highlight-next-line\n    "id": "1546434604146774987",\n    "name": "SQL in Action"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"We can see that the serialized id is a string rather than a number, thus avoiding the problem that JavaScript clients cannot parse large numbers."}),"\n",(0,a.jsx)(n.h3,{id:"automatically-applied-to-idview-properties",children:"Automatically Applied to IdView Properties"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../advanced/view/id-view",children:"@IdView properties"})," is advanced mapping content that will be explained later. Readers can skip this section for now and come back later."]})}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@Entity\npublic interface Author {\n\n    @ManyToMany(mappedBy = "authors") \n    List<Book> books();\n\n    @IdView("authors")\n    // highlight-next-line \n    List<Long> bookIds();\n\n    ...Omit other properties...  \n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@Entity  \ninterface Author {\n\n    @ManyToMany(mappedBy = "authors")\n    val books: List<Book>\n\n    @IdView("authors")\n    // highlight-next-line\n    val bookIds: List<Long> \n\n    ...Omit other properties...\n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Here, the ",(0,a.jsx)(n.code,{children:"bookIds"})," property is not an ordinary ",(0,a.jsx)(n.code,{children:"List <Long>"})," collection, but the collection of ids of all associated ",(0,a.jsx)(n.code,{children:"Book"})," objects."]}),"\n",(0,a.jsxs)(n.p,{children:["Because the ",(0,a.jsx)(n.code,{children:"Book.id"})," property has already been annotated with ",(0,a.jsx)(n.code,{children:"@JsonConverter"}),", there is no need to specify any annotations for the ",(0,a.jsx)(n.code,{children:"bookIds"})," property here to give it this capability."]}),"\n",(0,a.jsx)(n.p,{children:"Similarly, bypassing ORM, demonstrate the effect through simulated data."}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"Author author = Immutables.createAuthor(draft -> {\n    draft.setBookIds(\n        Arrays.asList(\n            1546434604146774987L,\n            1546434604146774988L\n        )\n    );  \n});\nSystem.out.println(book);\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"val book = Book {\n    bookIds = listOf(\n        1546434604146774987L,\n        1546434604146774988L\n    )\n    \n}  \nprintln(book)\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Since the toString of Jimmer entities is Jackson serialization, we can print directly and observe the results of Jackson serialization:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "bookIds": [\n        // highlight-next-line \n        "1546434604146774987",  \n        // highlight-next-line\n        "1546434604146774988"\n    ]\n}  \n'})}),"\n",(0,a.jsxs)(n.p,{children:["We can see that all elements of the serialized ",(0,a.jsx)(n.code,{children:"bookIds"})," property are strings rather than numbers, thus avoiding the problem that JavaScript clients cannot parse large numbers."]}),"\n",(0,a.jsx)(n.h3,{id:"automatically-applied-to-dto",children:"Automatically Applied to DTO"}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.mdxAdmonitionTitle,{}),(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"../../object/view/dto-language",children:"DTO"})," is advanced mapping content that will be explained later. Readers can skip this section for now and come back later."]})]}),"\n",(0,a.jsxs)(n.p,{children:["In the ",(0,a.jsx)(n.code,{children:"src/main/dto"})," directory, create any file with the extension ",(0,a.jsx)(n.code,{children:".dto"})," and edit its code as follows"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"export com.yourcompany.yourproject.model.Book\n    -> package com.yourcompany.yourproject.model.dto  \n\nBookView {\n    id  \n    name  \n}  \n"})}),"\n",(0,a.jsx)(n.p,{children:"After compiling the project, the generated Java/Kotlin type is:"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")\npublic class BookView {\n\n    // highlight-next-line  \n    private String id;\n\n    private String name;  \n\n    ...Omit other properties...  \n}\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'@GeneratedBy(file = "<yourproject>/src/main/dto/Book.dto")  \nclass BookView(\n    // highlight-next-line\n    val id: String, \n    val name: String\n) {\n    ...Omit other properties... \n}\n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"We can see that the type of the id property in the automatically generated DTO type is String instead of long."}),"\n",(0,a.jsx)(n.p,{children:"Finally, we verify the conversion from entity to DTO object as follows"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'Book book = Immutables.createBook(draft -> {\n    draft.setId(1546434604146774987L);    \n    draft.setName("SQL in Action");  \n}); \nSystem.out.println(new BookView(book));\n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'val book = Book {  \n    id = 1546434604146774987L  \n    name = "SQL in Action"\n}  \nprintln(BookView(book))  \n'})})})]}),"\n",(0,a.jsx)(n.p,{children:"The output is as follows"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'BookView(\n    // highlight-next-line\n    id = "1546434604146774987",\n    name = "SQL in Action" \n)\n'})}),"\n",(0,a.jsx)(n.h2,{id:"2-data-masking",children:"2. Data Masking"}),"\n",(0,a.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,a.jsxs)(n.p,{children:["Assume the ",(0,a.jsx)(n.code,{children:"User"})," entity has a ",(0,a.jsx)(n.code,{children:"phone"})," property representing the user's phone number. We now perform data masking on this property."]}),"\n",(0,a.jsxs)(n.p,{children:["For example, displaying the phone number as ",(0,a.jsx)(n.code,{children:"135****6792"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Data masking is not simply a page rendering feature. It must ensure that real data is not returned in the HTTP requests themselves."})}),"\n",(0,a.jsx)(n.p,{children:"There is no built-in Converter available for this requirement. We need to customize the Converter as follows:"}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:'public class UserPhoneConverter implements Converter<String, String> {\n\n    @Override\n    public String output(String value) {\n        return value.substring(0, 3) + "****" + value.substring(7);  \n    }    \n} \n'})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class UserPhoneConverter : Converter<String, String> {\n\n    override fun output(value: String): String =  \n        "${value.substring(0,3)}****${value.substring(7)}"  \n}\n'})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Then modify the ",(0,a.jsx)(n.code,{children:"User"})," entity simply"]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Entity \npublic interface User {\n\n    // highlight-next-line  \n    @JsonConverter(UserPhoneConverter.class)\n    String phone();\n}\n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"@Entity \ninterface User {\n\n    // highlight-next-line\n    @JsonConverter(UserPhoneConverter.class)\n    val phone: String  \n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"support-input",children:"Support Input"}),"\n",(0,a.jsxs)(n.p,{children:["In the above example, the ",(0,a.jsx)(n.code,{children:"UserPhoneConverter"})," only overrides the ",(0,a.jsx)(n.code,{children:"output"})," method without overriding the ",(0,a.jsx)(n.code,{children:"input"})," method."]}),"\n",(0,a.jsxs)(n.p,{children:["Because the default implementation of the ",(0,a.jsx)(n.code,{children:"input"})," method is to throw an ",(0,a.jsx)(n.code,{children:"UnsupportedOperationException"})," exception, deserialization is not supported."]}),"\n",(0,a.jsxs)(n.p,{children:["However, in actual projects, ",(0,a.jsx)(n.code,{children:"Input DTO"})," can be generated based on entity objects to complete data entry. In this case, the client should enter the exact phone number. Therefore, we can override the ",(0,a.jsx)(n.code,{children:"input"})," method as follows."]}),"\n",(0,a.jsxs)(o.A,{groupId:"language",children:[(0,a.jsx)(s.A,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"@Override  \npublic String input(String value) {\n    return value;  \n}  \n"})})}),(0,a.jsx)(s.A,{value:"kotlin",label:"Kotlin",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"override fun input(value: String): String =  \n    value  \n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>o});t(96540);var r=t(18215);const a={tabItem:"tabItem_Ymn6"};var i=t(74848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>k});var r=t(96540),a=t(18215),i=t(23104),o=t(56347),s=t(205),l=t(57485),c=t(31682),d=t(70679);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=g({queryString:t,groupId:a}),[m,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,d.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),x=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.A)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(74848);function b(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function f(e){let{lazy:n,children:t,selectedValue:i}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(b,{...n,...e}),(0,v.jsx)(f,{...n,...e})]})}function k(e){const n=(0,j.A)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(n))}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(96540);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);