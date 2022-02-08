"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[78838],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=r,x=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?i.createElement(x,a(a({ref:n},p),{},{components:t})):i.createElement(x,a({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},77151:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var i=t(83117),r=t(80102),o=(t(67294),t(3905)),a=["components"],s={title:"\u6269\u5c55\uff08Extension\uff09",sidebar_label:"\u6269\u5c55"},l=void 0,c={unversionedId:"guides/extension",id:"guides/extension",title:"\u6269\u5c55\uff08Extension\uff09",description:"\u6269\u5c55\uff08Extension\uff09 \u4f5c\u4e3a Molecule \u6700\u91cd\u8981\u7684\u6838\u5fc3\u6a21\u5757\u4e4b\u4e00\uff0c\u4e3b\u8981\u662f\u63d0\u4f9b\u4e86\u4e00\u5957\u6269\u5c55 IDE Workbench \u7684\u673a\u5236\u3002\u901a\u8fc7\u8fd9\u79cd\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u7684\u5b9e\u73b0\u81ea\u5b9a\u4e49\uff0c\u5e76\u4e14\u53ef\u4ee5\u7ba1\u7406\u8fd9\u4e9b\u6269\u5c55\u5e94\u7528\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/extension.md",sourceDirName:"guides",slug:"/guides/extension",permalink:"/molecule/zh-CN/docs/next/guides/extension",editUrl:"https://github.com/DTStack/molecule/edit/main/website/i18n/zh-CN/docusaurus-plugin-content-docs/current/guides/extension.md",tags:[],version:"current",frontMatter:{title:"\u6269\u5c55\uff08Extension\uff09",sidebar_label:"\u6269\u5c55"},sidebar:"docs",previous:{title:"\u7f16\u5199\u7b2c\u4e00\u4e2a\u6269\u5c55",permalink:"/molecule/zh-CN/docs/next/the-first-extension"},next:{title:"\u5de5\u4f5c\u53f0",permalink:"/molecule/zh-CN/docs/next/guides/extend-workbench"}},p=[{value:"\u6269\u5c55\u63a5\u53e3\uff08IExtension)",id:"\u6269\u5c55\u63a5\u53e3iextension",children:[{value:"\u81ea\u9762\u91cf\u5bf9\u8c61",id:"\u81ea\u9762\u91cf\u5bf9\u8c61",children:[],level:3},{value:"class \u5bf9\u8c61",id:"class-\u5bf9\u8c61",children:[],level:3}],level:2},{value:"\u6269\u5c55\u670d\u52a1\uff08ExtensionService)",id:"\u6269\u5c55\u670d\u52a1extensionservice",children:[],level:2},{value:"\u7981\u7528\u6269\u5c55",id:"\u7981\u7528\u6269\u5c55",children:[],level:2}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExtension"},"\u6269\u5c55\uff08Extension\uff09")," \u4f5c\u4e3a Molecule \u6700\u91cd\u8981\u7684",(0,o.kt)("strong",{parentName:"p"},"\u6838\u5fc3"),"\u6a21\u5757\u4e4b\u4e00\uff0c\u4e3b\u8981\u662f\u63d0\u4f9b\u4e86\u4e00\u5957\u6269\u5c55 IDE Workbench \u7684\u673a\u5236\u3002\u901a\u8fc7\u8fd9\u79cd\u673a\u5236\uff0c\u6211\u4eec\u53ef\u4ee5\u8f7b\u677e\u7684\u5b9e\u73b0\u81ea\u5b9a\u4e49\uff0c\u5e76\u4e14\u53ef\u4ee5\u7ba1\u7406\u8fd9\u4e9b\u6269\u5c55\u5e94\u7528\u3002"),(0,o.kt)("h2",{id:"\u6269\u5c55\u63a5\u53e3iextension"},"\u6269\u5c55\u63a5\u53e3\uff08IExtension)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.model.IExtension"},"\u6269\u5c55\uff08Extension\uff09")," \u662f\u4e00\u4e2a\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"p"},"id"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"name"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"activate"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"dispose")," \u7b49",(0,o.kt)("strong",{parentName:"p"},"\u5c5e\u6027"),"\u548c",(0,o.kt)("strong",{parentName:"p"},"\u65b9\u6cd5"),"\u7684\u63a5\u53e3\uff0c\u901a\u8fc7\u8be5",(0,o.kt)("strong",{parentName:"p"},"\u63a5\u53e3\u7c7b\u578b"),"\uff0c\u53ef\u4ee5\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u5feb\u7684\u521b\u5efa\u6269\u5c55\u7a0b\u5e8f\u3002"),(0,o.kt)("p",null,"Molecule \u652f\u6301\u4f60\u4f7f\u7528",(0,o.kt)("strong",{parentName:"p"},"\u5b57\u9762\u91cf"),"\u6216\u8005 ",(0,o.kt)("strong",{parentName:"p"},"class")," \u5173\u952e\u5b57\u7684\u65b9\u5f0f\u6765\u5b9a\u4e49\u6269\u5c55\u5bf9\u8c61\uff0c\u5177\u4f53\u770b\u5f00\u53d1\u8005\u81ea\u5df1\u7684\u504f\u597d\u3002"),(0,o.kt)("h3",{id:"\u81ea\u9762\u91cf\u5bf9\u8c61"},"\u81ea\u9762\u91cf\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { IContributeType, IExtension } from '@dtinsight/molecule/esm/model';\nimport { IExtensionService } from '@dtinsight/molecule/esm/services';\n\nexport const ExampleExt: IExtension = {\n    id: 'ExampleExt',\n    name: 'Example Extension',\n    contributes: {},\n    activate(extensionCtx: IExtensionService) {},\n    dispose(extensionCtx: IExtensionService) {},\n};\n")),(0,o.kt)("h3",{id:"class-\u5bf9\u8c61"},"class \u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import molecule from '@dtinsight/molecule';\nimport { IExtension } from '@dtinsight/molecule/esm/model/extension';\nimport { IExtensionService } from '@dtinsight/molecule/esm/services';\n\nexport class ExampleExt implements IExtension {\n    id: string = 'ExampleExt';\n    name: string = 'Example Extension';\n\n    activate(extensionCtx: IExtensionService): void {\n        // Do something\n    }\n\n    dispose(extensionCtx: IExtensionService): void {\n        // Do something\n    }\n}\n")),(0,o.kt)("h2",{id:"\u6269\u5c55\u670d\u52a1extensionservice"},"\u6269\u5c55\u670d\u52a1\uff08ExtensionService)"),(0,o.kt)("p",null,"\u5728 Molecule \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExtensionService"},"ExtensionService")," \u670d\u52a1\u5bf9\u8c61\u6765\u7ba1\u7406",(0,o.kt)("strong",{parentName:"p"},"\u6269\u5c55\u7a0b\u5e8f"),"\u3002\u4f8b\u5982",(0,o.kt)("strong",{parentName:"p"},"\u6dfb\u52a0\u3001\u67e5\u8be2\u3001\u5220\u9664"),"\u7b49\u64cd\u4f5c, \u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// Add Extension, but no activated\nmolecule.extension.add(extensions);\n// Dispose the Extension\nmolecule.extension.dispose(extensionId);\n// Get an Extension\nmolecule.extension.getExtension(extensionId);\n")),(0,o.kt)("h2",{id:"\u7981\u7528\u6269\u5c55"},"\u7981\u7528\u6269\u5c55"),(0,o.kt)("p",null,"\u5728\u6709\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5f00\u53d1\u8005\u53ef\u80fd\u4f1a\u60f3\u8981",(0,o.kt)("strong",{parentName:"p"},"\u7981\u7528"),"\u4e00\u4e9b Molecule \u4e2d\u5185\u7f6e\u7684\u6269\u5c55\u7a0b\u5e8f\uff0c\u8fd9\u91cc\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/molecule.ExtensionService"},"ExtensionService")," \u4e2d\u7684 ",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IExtensionService#inactive"},(0,o.kt)("inlineCode",{parentName:"a"},"inactive"))," \u65b9\u6cd5\uff0c\u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport molecule from '@dtinsight/molecule';\nimport { MoleculeProvider, Workbench } from '@dtinsight/molecule';\nimport '@dtinsight/molecule/esm/style/mo.css';\n\n// All Extension instances\nimport extensions from './extensions';\n\nmolecule.extension.inactive((extension: IExtension) => {\n    // Inactive the Extension which id is ExampleExt\n    if (extension.id === 'ExampleExt') {\n        return true;\n    }\n});\n\nfunction App() {\n    return (\n        <MoleculeProvider extensions={extensions}>\n            <Workbench />\n        </MoleculeProvider>\n    );\n}\n\nexport default App;\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u9700\u8981\u6ce8\u610f\u5230\u662f\uff0c",(0,o.kt)("a",{parentName:"p",href:"../api/interfaces/molecule.IExtensionService#inactive"},"inactive")," \u65b9\u6cd5\uff0c\u9700\u8981\u5728 ",(0,o.kt)("a",{parentName:"p",href:"../api/classes/MoleculeProvider"},"MoleculeProvider")," \u4e4b\u524d\u58f0\u660e"))))}u.isMDXComponent=!0}}]);