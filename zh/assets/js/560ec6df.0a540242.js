"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[396],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(67294),a=t(34334);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(83117),a=t(67294),l=t(34334),o=t(72389),i=t(67392),s=t(7094),p=t(12466);const u="tabList__CuJ",c="tabItem_LNqP";function m(e){var n;const{lazy:t,block:o,defaultValue:m,values:d,groupId:f,className:b}=e,y=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??y.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,i.l)(k,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==v&&!k.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:g}=(0,s.U)(),[O,I]=(0,a.useState)(v),D=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=f){const e=N[f];null!=e&&e!==O&&k.some((n=>n.value===e))&&I(e)}const E=e=>{const n=e.currentTarget,t=D.indexOf(n),r=k[t].value;r!==O&&(j(n),I(r),null!=f&&g(f,String(r)))},w=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=D.indexOf(e.currentTarget)+1;t=D[n]??D[0];break}case"ArrowLeft":{const n=D.indexOf(e.currentTarget)-1;t=D[n]??D[D.length-1];break}}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},b)},k.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:e=>D.push(e),onKeyDown:w,onFocus:E,onClick:E},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":O===n})}),t??n)}))),t?(0,a.cloneElement)(y.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})))))}function d(e){const n=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(n)},e))}},37177:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(83117),a=(t(67294),t(3905));const l={toc:[{value:"\u573a\u666f-1",id:"\u573a\u666f-1",level:2},{value:"\u573a\u666f-2",id:"\u573a\u666f-2",level:2}]};function o(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76ee\u524d\u5176\u4ed6\u64cd\u4f5cSQL\u7684\u6280\u672f\u65b9\u6848\uff0c\u65e0\u8bbaORM\u8fd8\u662f\u975eORM\uff0c\u90fd\u6709\u5b58\u5728\u4e00\u4e2a\u7a7a\u767d\u9886\u57df\uff1a\u53ea\u8003\u8651\u5230\u4e86\u52a8\u6001",(0,a.kt)("inlineCode",{parentName:"p"},"where"),"\uff0c\u6ca1\u6709\u8003\u8651",(0,a.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001join"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001JOIN"),"\u5b9a\u4e49\uff1a\u5982\u679c\u67d0\u4e9b\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u9488\u5bf9\u5176\u4ed6\u8868\u800c\u975e\u5f53\u524d\u8868\u3002\u8fd9\u610f\u5473\u7740"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6761\u4ef6\u6ee1\u8db3\u65f6\uff1a\u5148\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5230\u5176\u4ed6\u8868\uff0c\u518d\u5bf9join\u5f97\u5230\u7684\u8868\u6dfb\u52a0\u52a8\u6001where\u6761\u4ef6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6761\u4ef6\u4e0d\u6ee1\u8db3\u65f6\uff1a\u4e0d\u80fd\u901a\u8fc7\u5173\u8054\u5c5e\u6027join\u5176\u4ed6\u8868"))),(0,a.kt)("h2",{id:"\u573a\u666f-1"},"\u573a\u666f-1"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u7b2c\u4e00\u4e2a\u573a\u666f\uff0c\u8fd9\u91cc\u7528\u9762\u5411\u539f\u751fSQL\u7684MyBatis\u4e3a\u4f8b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9a\u4e49MyBatis Mapper\u63a5\u53e3"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@Mapper\npublic interface BookMapper {\n\n    List<Book> findBooks(\n        @Nullable String name,\n        @Nullable String storeName,\n        @Nullable String storeWebsite\n    );\n}\n")),(0,a.kt)("p",{parentName:"li"},"\u8fd9\u91cc\uff0c\u6240\u6709\u67e5\u8be2\u53c2\u6570\u90fd\u53ef\u80fd\u4e3anull\uff0c\u5f88\u660e\u663e\uff0c\u8fd9\u662f\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u3002"),(0,a.kt)("p",{parentName:"li"},"\u540e\u9762\u4e24\u4e2a\u67e5\u8be2\u53c2\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"storeName"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"storeWebsite"),"\uff0c\u5176\u8fc7\u6ee4\u6761\u4ef6\u5e76\u4e0d\u65bd\u52a0\u5728\u5f53\u524d\u8868",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK"),"\u4e0a\uff0c\u800c\u662f\u65bd\u52a0\u5728\u7236\u8868",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK_STORE\u4e0a"),"\u3002\n\u5373\uff0c\u5f53\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\u975enull\u65f6\uff0c\u90fd\u4f1a\u751f\u6210\u5bf9",(0,a.kt)("inlineCode",{parentName:"p"},"BOOK_STORE"),"\u8868\u7684JOIN\uff0c\u8fd9\u79cd\u7531\u53c2\u6570\u503c\u52a8\u6001\u51b3\u5b9a\u662f\u5426\u6dfb\u52a0\u7684\u8868\u8fde\u63a5\uff0c\u5728\u672c\u6587\u4e2d\u88ab\u79f0\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"\u52a8\u6001JOIN"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5b9a\u4e49MyBatis\u7684SQL\u6620\u5c04XML"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.BookMapper">\n    <select id="findBooks" resultType="somepackage.Book">\n        select * from BOOK as book\n        \x3c!-- highlight-next-line --\x3e\n        <if test="storeName != null or storeWebsite != null"> \u2776\n            inner join BOOK_STORE as store\n                on book.STORE_ID = store.ID\n        </if>\n        <where>\n            <if test="name != null">\n                and book.NAME = #{name}\n            </if>\n            <if test="storeName != null"> \u2777\n                and store.NAME = #{storeName}\n            </if>\n            <if test="storeWebsite != null">\n                and store.WEBSITE = #{storeWebsite} \u2778\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,a.kt)("p",{parentName:"li"},"\u5176\u4e2d\uff0c\u2776\u5c31\u662f\u52a8\u6001JOIN\u3002\u7136\u800c\u5bf9\u5f00\u53d1\u4eba\u5458\u800c\u8a00\uff0c\u2777\u548c\u2778\u624d\u662f\u76ee\u7684\uff0c\u2776\u662f\u4e3a\u652f\u6301\u2777\u548c\u2778\u800c\u4e0d\u5f97\u4e0d\u505a\u7684\u5de5\u4f5c\uff0c\u5176\u5224\u65ad\u6761\u4ef6\u662f\u4e00\u79cd\u8d1f\u62c5\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4e5f\u8bb8\u4f60\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u2776\u7684\u5224\u65ad\u6761\u4ef6\u4f7f\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"or"),"\uff0c\u8fd9\u4e5f\u4e0d\u96be\u7406\u89e3\u3002"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7136\u800c\uff0c\u8fd9\u4ec5\u4ec5\u662f\u6700\u7b80\u5355\u7684\u4e24\u8868\u4e4b\u95f4\u52a8\u6001\u8fde\u63a5\uff0c\u5bf9\u4e8e\u66f4\u6df1\u7684\u591a\u8868\u8fde\u63a5\u64cd\u4f5c\u800c\u8a00\uff0c\u52a8\u6001\u8fde\u63a5\u7684\u590d\u6742\u5ea6\u4f1a\u6025\u5267\u4e0a\u5347\uff01")))),(0,a.kt)("h2",{id:"\u573a\u666f-2"},"\u573a\u666f-2"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u518d\u6765\u770b\u7b2c\u4e8c\u4e2a\u573a\u666f\uff0c\u6709\u4e86\u524d\u9762\u7684\u4f8b\u5b50\u4f5c\u4e3a\u57fa\u7840\uff0c\u8fd9\u4e2a\u4f8b\u5b50\u5c31\u4e0d\u540c\u4efb\u4f55\u4e1a\u52a1\u8026\u5408\u4e86\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8" ?>\n<!DOCTYPE mapper\n        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"\n        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">\n<mapper namespace="somepackage.AMapper">\n    <select id="findAObjects" resultType="somepackage.A">\n        select distinct A.id\n        from A\n        \x3c!-- highlight-start --\x3e\n        <if test="bId != null or cId != null or dId != null or eId != null">\n            inner join B on A.ID = B.A_ID\n        </if>\n        <if test="cId != null or dId != null or eId != null">\n            inner join C on B.ID = C.B_ID\n        </if>\n        <if test="dId != null or eId != null">\n            inner join D on C.ID = D.C_ID\n        </if>\n        <if test="eId != null">\n            inner join E on D.ID = E.D_ID\n        </if>\n        \x3c!-- highlight-end --\x3e\n        <where>\n            <if test="aId != null">\n                and A.ID = #{aId}\n            </if>\n            <if test="bId != null">\n                and B.ID = #{bId}\n            </if>\n            <if test="cId != null">\n                and C.ID = #{cId}\n            </if>\n            <if test="dId != null">\n                and D.ID = #{dId}\n            </if>\n            <if test="eId != null">\n                and E.ID = #{eId}\n            </if>\n        </where>\n    </select>\n</mapper>\n')),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u903b\u8f91\u5f88\u7b80\u5355\uff0cA\u3001B\u3001C\u3001D\u548cE\u8fd9\u4e94\u5f20\u8868\u5f62\u6210\u4e86\u4e00\u4e2aJOIN\u94fe\uff0c\u6bcf\u5f20\u8868\u90fd\u4e00\u4e2a\u52a8\u6001\u67e5\u8be2\u6761\u4ef6\u3002\u7136\u800c\uff0c\u6b63\u5982\u4f60\u6240\u89c1\uff0c\u52a8\u6001JOIN\u7684\u590d\u6742\u5ea6\u5df2\u7ecf\u53d8\u5f97\u4e0d\u53ef\u63a5\u53d7\u4e86\u3002"))}o.isMDXComponent=!0},57142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(83117),a=(t(67294),t(3905)),l=t(37177);t(65488),t(85162);const o={sidebar_position:1,title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898"},i=void 0,s={unversionedId:"query/dynamic-join/problem",id:"query/dynamic-join/problem",title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898",description:"\u5728\u4e0a\u4e00\u7bc7\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u52a8\u6001\u67e5\u8be2\u3002\u672c\u76ee\u5f55\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u52a8\u6001\u8868\u94fe\u63a5\u7684\u95ee\u9898",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/problem.mdx",sourceDirName:"query/dynamic-join",slug:"/query/dynamic-join/problem",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/problem",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/query/dynamic-join/problem.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5176\u4ed6\u89e3\u51b3\u65b9\u6848\u7684\u95ee\u9898"},sidebar:"tutorialSidebar",previous:{title:"\u52a8\u6001JOIN",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/"},next:{title:"\u94fe\u5f0f\u5173\u8054\u8def\u5f84",permalink:"/jimmer-doc/zh/docs/query/dynamic-join/chain-style"}},p={},u=[],c={toc:u};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728",(0,a.kt)("a",{parentName:"p",href:"../dynamic-where"},"\u4e0a\u4e00\u7bc7\u6587\u6863"),"\u4e2d\uff0c\u6211\u4eec\u8ba8\u8bba\u4e86\u52a8\u6001\u67e5\u8be2\u3002\u672c\u76ee\u5f55\u4e2d\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u52a8\u6001\u8868\u94fe\u63a5\u7684\u95ee\u9898"),(0,a.kt)(l.ZP,{mdxType:"DynamicJoinProblem"}))}m.isMDXComponent=!0}}]);