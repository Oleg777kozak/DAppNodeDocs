"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[2217],{4137:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function p(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=d(o),m=r,y=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return o?n.createElement(y,i(i({ref:t},l),{},{components:o})):n.createElement(y,i({ref:t},l))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4843:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=o(7462),r=(o(7294),o(4137));const a={},i="IPFS repository",p={unversionedId:"user/repository/ipfs",id:"user/repository/ipfs",title:"IPFS repository",description:"Dappnode leverages IPFS for distributing packages available in the Dappstore. To download these packages, your Dappnode requires a connection to an IPFS node. When it comes to connecting to the IPFS network, you have two primary choices:",source:"@site/docs/user/repository/ipfs.md",sourceDirName:"user/repository",slug:"/user/repository/ipfs",permalink:"/docs/user/repository/ipfs",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/repository/ipfs.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Ethereum repository",permalink:"/docs/user/repository/ethereum"},next:{title:"Installation Overview",permalink:"/docs/user/install/overview"}},s={},d=[{value:"Run your own IPFS node",id:"run-your-own-ipfs-node",level:2},{value:"Use a remote IPFS node",id:"use-a-remote-ipfs-node",level:2},{value:"Troubleshooting",id:"troubleshooting",level:3}],l={toc:d},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ipfs-repository"},"IPFS repository"),(0,r.kt)("p",null,"Dappnode leverages IPFS for distributing packages available in the Dappstore. To download these packages, your Dappnode requires a connection to an IPFS node. When it comes to connecting to the IPFS network, you have two primary choices:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Run Your Own IPFS Node"),": By opting for this, you maintain full control, ensuring that you directly access the distributed packages without intermediaries. However, it might require some disk space."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Use a Remote Node"),": This is a convenient option, but it comes with the caveat of needing to trust the remote node operator. It is really useful in case your own IPFS node becomes unreliable or unavailable.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To configure your dappnode IPFS repository go to ",(0,r.kt)("a",{parentName:"p",href:"http://my.dappnode/repository/ipfs"},"http://my.dappnode/repository/ipfs"))),(0,r.kt)("h2",{id:"run-your-own-ipfs-node"},"Run your own IPFS node"),(0,r.kt)("p",null,"You can run your own IPFS node to connect to the IPFS network. This is the recommended option for those users who want to have full control over their dappnode. Dappnode comes with an IPFS node preinstalled and configured. You can access the ",(0,r.kt)("a",{parentName:"p",href:"http://ipfs.dappnode:5001/webui"},"IPFS Web UI")," while connected to your Dappnode."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ipfs-remote-local",src:o(9796).Z,width:"2562",height:"1068"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Running your own IPFS node may affect your internet connection. If you don't want to run your own IPFS node, you can use a remote IPFS node. Consider stopping your IPFS node if you are not using it at ",(0,r.kt)("a",{parentName:"p",href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info"},"IPFS Package"))),(0,r.kt)("h2",{id:"use-a-remote-ipfs-node"},"Use a remote IPFS node"),(0,r.kt)("p",null,"You can use a remote IPFS node gateway to connect to the IPFS network. You will need to trust the node operator. Dappnode provides an ",(0,r.kt)("a",{parentName:"p",href:"https://gateway.ipfs.dappnode.io"},"Official IPFS gateway")," by default, but you can choose any other IPFS gateway."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ipfs-remote-node",src:o(8493).Z,width:"2562",height:"1068"})),(0,r.kt)("admonition",{title:"IPFS gateways and security",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Connecting to IPFS remote gateways could entail security risks. For example, the gateway could attempt to serve malicious content to the user. We mitigate this risk by verifying the content downladed with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.ipfs.io/concepts/content-addressing/"},"CID technology"),"."),(0,r.kt)("p",{parentName:"admonition"},"If the Dappnode IPFS gateway is not available (we make no uptime guarantees and we offer it on a best-effort basis) the user can set another IPFS gateway in the input field as last resort. Check out all the ",(0,r.kt)("a",{parentName:"p",href:"https://ipfs.github.io/public-gateway-checker/"},"IPFS gateways available"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"I'm running local IPFS and I'm having issues, what can I do?")),"This may be due to different reasons:",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Poor internet connection"),": in this case you can try switching your IPFS node mode to lowpower mode at ",(0,r.kt)("a",{parentName:"li",href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/config"},"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/config")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Your local IPFS node space is full"),': remode your IPFS node volume data by clicking on "Remove volumes" here ',(0,r.kt)("a",{parentName:"li",href:"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info"},"http://my.dappnode/packages/system/ipfs.dnp.dappnode.eth/info")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Dappnode Official Gateway has not been added as peer to your local IPFS"),". Add it by clicking ",(0,r.kt)("a",{parentName:"li",href:"http://my.dappnode/system/add-ipfs-peer/%2Fdns4%2Fipfs.dappnode.io%2Ftcp%2F4001%2Fipfs%2FQmfB6dT5zxUq1BXiXisgcZKYkvjywdDYBK5keRaqDKH633"},"here"))),(0,r.kt)("p",null,"If none of this works you can always ",(0,r.kt)("strong",{parentName:"p"},"switch to remote IPFS mode")," at ",(0,r.kt)("a",{parentName:"p",href:"http://my.dappnode/repository/ipfs"},"http://my.dappnode/repository/ipfs"))))}u.isMDXComponent=!0},9796:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/repository-ipfs-local-da32632842c89e3f1c4448b01ad12284.png"},8493:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/repository-ipfs-remote-7292c798454f1b0a934e647dacb1b055.png"}}]);