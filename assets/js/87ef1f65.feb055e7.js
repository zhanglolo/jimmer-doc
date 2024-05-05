"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6692],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25402:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(83117),i=(r(67294),r(3905));const o={sidebar_position:4,title:"3. Arbitrary Dynamic Query"},a=void 0,s={unversionedId:"quick-view/dsl/index",id:"quick-view/dsl/index",title:"3. Arbitrary Dynamic Query",description:"Jimmer supports strongly typed SQL DSL.",source:"@site/docs/quick-view/dsl/index.md",sourceDirName:"quick-view/dsl",slug:"/quick-view/dsl/",permalink:"/jimmer-doc/docs/quick-view/dsl/",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/quick-view/dsl/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"3. Arbitrary Dynamic Query"},sidebar:"tutorialSidebar",previous:{title:"Save Long Associations",permalink:"/jimmer-doc/docs/quick-view/save/export/long"},next:{title:"Feature Introduction",permalink:"/jimmer-doc/docs/quick-view/dsl/feature"}},c={},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Jimmer supports strongly typed SQL DSL.  "),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Note that unlike most frameworks that use strongly typed DSLs, Jimmer's strongly typed DSL is not only for compile-time safety assurance and IDE intelligent prompt experience of SQL statements, but also for solving the problem of table joins and subqueries in native SQL. They are too cumbersome so jimmer gives them higher abstractions.  "),(0,i.kt)("p",{parentName:"admonition"},"After giving table joins and subqueries higher abstractions, building arbitrary complex dynamic queries with Jimmer becomes very easy. From the beginning, Jimmer is designed for easy construction of arbitrary complex dynamic queries.  ")),(0,i.kt)("p",null,"In addition, for the powerful non-sql-standard features owned by specific database products, Jimmer's SQL DSL can embed Native SQL fragments without the abstraction of the strongly typed DSL affecting developers' full use of the special features of the data. ",(0,i.kt)("em",{parentName:"p"},"(This part of the function will not be introduced in the quick preview. Interested supervisors please check ",(0,i.kt)("a",{parentName:"em",href:"../../query/native-sql"},"Query/Native Expressions"),")")))}p.isMDXComponent=!0}}]);