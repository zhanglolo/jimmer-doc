"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[4061],{19992:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var n=i(74848),o=i(28453);const s={sidebar_position:3,title:"2. \u4fdd\u5b58\u4efb\u610f\u5f62\u72b6"},c=void 0,r={id:"quick-view/save/index",title:"2. \u4fdd\u5b58\u4efb\u610f\u5f62\u72b6",description:"\u4fdd\u5b58\u6307\u4ee4\u662fJimmer\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u80fd\u529b\uff0c\u53ea\u9700\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u5373\u53ef\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/save/index.md",sourceDirName:"quick-view/save",slug:"/quick-view/save/",permalink:"/jimmer-doc/zh/docs/quick-view/save/",draft:!1,unlisted:!1,editUrl:"https://github.com/babyfish-ct/jimmer-doc/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/quick-view/save/index.md",tags:[],version:"current",lastUpdatedAt:1709146645e3,sidebarPosition:3,frontMatter:{sidebar_position:3,title:"2. \u4fdd\u5b58\u4efb\u610f\u5f62\u72b6"},sidebar:"tutorialSidebar",previous:{title:"\u6bd4\u8f83",permalink:"/jimmer-doc/zh/docs/quick-view/fetch/export/comparison"},next:{title:"\u529f\u80fd\u4ecb\u7ecd",permalink:"/jimmer-doc/zh/docs/quick-view/save/feature"}},d={},u=[];function a(e){const t={admonition:"admonition",code:"code",em:"em",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"\u4fdd\u5b58\u6307\u4ee4\u662fJimmer\u4e00\u4e2a\u975e\u5e38\u5f3a\u5927\u7684\u80fd\u529b\uff0c\u53ea\u9700\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\uff0c\u5373\u53ef\u4fdd\u5b58\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,n.jsxs)(t.p,{children:["\u65e0\u8bba\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7b80\u5355\u4e5f\u7f62 ",(0,n.jsx)(t.em,{children:"(\u6bd4\u5982\uff0c\u5b64\u5355\u5bf9\u8c61\u751a\u81f3\u6b8b\u7f3a\u5bf9\u8c61)"}),"\uff0c\u590d\u6742\u4e5f\u7f62 ",(0,n.jsx)(t.em,{children:"(\u4e00\u4e2a\u805a\u5408\u6839\u5bf9\u8c61\u901a\u8fc7\u5173\u8054\u5173\u7cfb\u6301\u6709\u5f88\u591a\u5173\u8054\u5bf9\u8c61\uff0c\u6df1\u5ea6\u548c\u5e7f\u5ea6\u4e0d\u53d7\u9650\u5236)"}),"\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\u8c03\u7528\u5c06\u5b83\u5b58\u5165\u6570\u636e\u5e93\u3002"]}),"\n",(0,n.jsxs)(t.admonition,{type:"tip",children:[(0,n.jsx)(t.p,{children:"\u5355\u8868\u8bb0\u5f55\u7684\u4fdd\u5b58\u64cd\u4f5c\u4ece\u6765\u4e0d\u662f\u5e94\u7528\u5f00\u53d1\u7684\u96be\u70b9\uff0c\u5373\u4f7f\u4e0d\u4f7f\u7528\u4efb\u4f55ORM\u6846\u67b6\uff0c\u76f4\u63a5\u4f7f\u7528JDBC\u4e5f\u662f\u975e\u5e38\u5bb9\u6613\u5b9e\u73b0\u7684\u3002"}),(0,n.jsxs)(t.p,{children:["\u7136\u800c\uff0c\u4fdd\u5b58\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u5374\u5f88\u4e0d\u5bb9\u6613\uff0c\u5f00\u53d1\u4eba\u5458\u5c06\u4e0d\u5f97\u4e0d\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u73b0\u6709\u6570\u636e\u7ed3\u6784\uff0c\u548c\u5373\u5c06\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u5bf9\u6bd4\uff0c\u4ece\u800c\u53d1\u73b0\u6709\u53d8\u5316\u7684\u591a\u4e2a\u5c40\u90e8\uff0c\u5e76\u8f6c\u5316\u4e3a\u76f8\u5e94\u7684",(0,n.jsx)(t.code,{children:"INSERT"}),"\u3001",(0,n.jsx)(t.code,{children:"UPDATE"}),"\u548c",(0,n.jsx)(t.code,{children:"DELETE"}),"\u8bed\u53e5\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u975e\u5e38\u7e41\u7410\u4e14\u5bb9\u6613\u51fa\u9519\u3002"]}),(0,n.jsx)(t.p,{children:"\u56e0\u6b64\uff0c\u81ea\u4e00\u5f00\u59cb\uff0cJimmer\u5c31\u7740\u773c\u4e8e\u5982\u4f55\u4fdd\u5b58\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\uff0c\u800c\u975e\u5982\u4f55\u4fdd\u5b58\u4e00\u4e2a\u5b64\u5355\u7684\u5b9e\u4f53\u5bf9\u8c61\u3002"})]})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>c,x:()=>r});var n=i(96540);const o={},s=n.createContext(o);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);