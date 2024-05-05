"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[6421],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,v=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(v,c(c({ref:t},s),{},{components:r})):a.createElement(v,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},85162:(e,t,r)=>{r.d(t,{Z:()=>c});var a=r(67294),n=r(34334);const o="tabItem_Ymn6";function c(e){let{children:t,hidden:r,className:c}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,c),hidden:r},t)}},65488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(83117),n=r(67294),o=r(34334),c=r(72389),l=r(67392),i=r(7094),u=r(12466);const s="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:r,block:c,defaultValue:p,values:m,groupId:v,className:b}=e,f=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,l.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!h.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:O}=(0,i.U)(),[E,j]=(0,n.useState)(g),k=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=v){const e=w[v];null!=e&&e!==E&&h.some((t=>t.value===e))&&j(e)}const x=e=>{const t=e.currentTarget,r=k.indexOf(t),a=h[r].value;a!==E&&(T(t),j(a),null!=v&&O(v,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=k.indexOf(e.currentTarget)+1;r=k[t]??k[0];break}case"ArrowLeft":{const t=k.indexOf(e.currentTarget)-1;r=k[t]??k[k.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},b)},h.map((e=>{let{value:t,label:r,attributes:c}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>k.push(e),onKeyDown:P,onFocus:x,onClick:x},c,{className:(0,o.Z)("tabs__item",d,null==c?void 0:c.className,{"tabs__item--active":E===t})}),r??t)}))),r?(0,n.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,c.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},81184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(83117),n=(r(67294),r(3905));r(65488),r(85162);const o={sidebar_position:3,title:"Advanced usage"},c=void 0,l={unversionedId:"cache/multiview-cache/advanced",id:"cache/multiview-cache/advanced",title:"Advanced usage",description:"",source:"@site/docs/cache/multiview-cache/advanced.mdx",sourceDirName:"cache/multiview-cache",slug:"/cache/multiview-cache/advanced",permalink:"/jimmer-doc/docs/cache/multiview-cache/advanced",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/docs/cache/multiview-cache/advanced.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Advanced usage"},sidebar:"tutorialSidebar",previous:{title:"User Defined Cacheable Filters",permalink:"/jimmer-doc/docs/cache/multiview-cache/user-filter"},next:{title:"Cache Abandoned Reason",permalink:"/jimmer-doc/docs/cache/multiview-cache/abandoned-callback"}},i={},u=[],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}))}d.isMDXComponent=!0}}]);