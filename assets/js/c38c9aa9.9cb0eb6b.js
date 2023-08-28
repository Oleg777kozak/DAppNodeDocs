"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[8330],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),i=(n(7294),n(4137));const o={},a="Installation Overview",s={unversionedId:"user/install/overview",id:"user/install/overview",title:"Installation Overview",description:"Installing Dappnode can be achieved through two primary methods:",source:"@site/docs/user/install/overview.md",sourceDirName:"user/install",slug:"/user/install/overview",permalink:"/docs/user/install/overview",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/install/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"IPFS repository",permalink:"/docs/user/repository/ipfs"},next:{title:"ISO Installation",permalink:"/docs/user/install/iso"}},l={},p=[{value:"1. ISO Installation",id:"1-iso-installation",level:3},{value:"2. Script Installation over Debian-based Distribution",id:"2-script-installation-over-debian-based-distribution",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-overview"},"Installation Overview"),(0,i.kt)("p",null,"Installing Dappnode can be achieved through two primary methods:"),(0,i.kt)("h3",{id:"1-iso-installation"},"1. ",(0,i.kt)("a",{parentName:"h3",href:"/docs/user/install/iso"},"ISO Installation")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": This method involves downloading the Dappnode ISO file and using it to directly install Dappnode on your system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Best for"),": Most users as it provides a comprehensive setup designed specifically for Dappnode.")),(0,i.kt)("h3",{id:"2-script-installation-over-debian-based-distribution"},"2. ",(0,i.kt)("a",{parentName:"h3",href:"/docs/user/install/script"},"Script Installation")," over Debian-based Distribution"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Description"),": If you're already running a Debian-based distribution, you can utilize the Dappnode script to facilitate the installation process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Best for"),": Users who want to install Dappnode on a cloud server, ARM device (where it's the only option), or those who desire a specific Debian-based distro.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For ARM-based systems, only the script installation method is available.")),(0,i.kt)("p",null,"Choose the method that best fits your needs and system setup. Make sure to follow the respective installation instructions carefully for a smooth and successful Dappnode deployment."),(0,i.kt)("admonition",{title:"Continuous Uptime",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Dappnode is designed to run 24/7. Many features and functions within Dappnode, especially blockchain nodes, rely on continuous uptime to maintain their state, sync, and functionality. For instance:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Blockchain Nodes"),": If you have a synced blockchain node and you turn off Dappnode, the node will lose its sync. This means when you turn it back on, it'll take time to catch up to the latest state, which can be resource-intensive and time-consuming.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Validator Nodes"),": For users staking on certain blockchain networks, continuous uptime is crucial. Being offline might result in missed opportunities or even penalties."))),(0,i.kt)("p",{parentName:"admonition"},"Considering these aspects, it's recommended to ensure your Dappnode device remains powered on and running at all times.")))}d.isMDXComponent=!0}}]);