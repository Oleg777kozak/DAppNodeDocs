"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[5914],{6450:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=n(5893),t=n(1151);const i={},o="Understanding Dappnode Packages",r={id:"user/packages/understanding-dappnode-packages",title:"Understanding Dappnode Packages",description:"What are Dappnode packages and what features do they offer?",source:"@site/docs/user/packages/understanding-dappnode-packages.md",sourceDirName:"user/packages",slug:"/user/packages/understanding-dappnode-packages",permalink:"/docs/user/packages/understanding-dappnode-packages",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/packages/understanding-dappnode-packages.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Optimism Rollup",permalink:"/docs/user/rollups/optimism"},next:{title:"Packages' Signature",permalink:"/docs/user/packages/signature"}},d={},c=[{value:"What are Dappnode packages and what features do they offer?",id:"what-are-dappnode-packages-and-what-features-do-they-offer",level:2},{value:"<strong>Introduction</strong>",id:"introduction",level:3},{value:"Info",id:"info",level:4},{value:"Config",id:"config",level:4},{value:"Network",id:"network",level:4},{value:"Logs",id:"logs",level:4},{value:"Backup",id:"backup",level:4},{value:"File Manager",id:"file-manager",level:4}];function l(e){const a={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"understanding-dappnode-packages",children:"Understanding Dappnode Packages"}),"\n",(0,s.jsx)(a.h2,{id:"what-are-dappnode-packages-and-what-features-do-they-offer",children:"What are Dappnode packages and what features do they offer?"}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h3,{id:"introduction",children:(0,s.jsx)(a.strong,{children:"Introduction"})}),"\n",(0,s.jsx)(a.p,{children:"One of Dappnode's top features is to offer a user-friendly interface to interact with different packages that contain clients and other applications. This section will go over the basic features you'll find in any Dappnode package."}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"info",children:"Info"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Version"}),": You'll find both the package's version and its upstream version here."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Getting Started"}),": Some of the basic information needed to run the package."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"URLs"}),": These will offer a number of different options, starting with bundled package UI/Dashboards and related tools such as Launchpads or external documentation."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Package Status"}),": Will provide information about the package's status, for example if it's running fine or if it has crashed or in the process of restarting."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Pause/Restart Package"}),": Useful for troubleshooting or restarting a stopped package."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Remove Volumes"}),': Also known as the "gray trash bin", this option will wipe all of the package\'s data and start syncing from scratch in the case of clients.']}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Remove Package"}),': This would be the "red trash bin", and clicking it will give you the option to preserve or delete the associated database.']}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"dappnode_packages1",src:n(9561).Z+"",width:"1741",height:"1091"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"config",children:"Config"}),"\n",(0,s.jsx)(a.p,{children:"The package's settings will be available under this tab in both a simple and advanced mode. The advanced mode can be accessed by clicking the lower-right corner of the screen when available."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"dappnode_packages2",src:n(899).Z+"",width:"1741",height:"1091"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"network",children:"Network"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Service"}),": Some packages may have multiple services running as part of the same container. This option will allow you to adjust each of their network settings separately."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"Public port mapping"}),": Need to change your package's port mapping? You can change this setting in this field as well as its protocol between TCP and UDP."]}),"\n",(0,s.jsxs)(a.li,{children:[(0,s.jsx)(a.strong,{children:"HTTPs domain mapping"}),": Do you want to expose your package to the internet? You'll be able to add multiple public domains to your package here. This is a great way to share your node's RPC with friends and family!"]}),"\n"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"dappnode_packages3",src:n(8454).Z+"",width:"1741",height:"1091"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"logs",children:"Logs"}),"\n",(0,s.jsxs)(a.p,{children:['This is a great section for finding out something that is not working in your package or to look for both expected and unexpected behavior. Packages with multiple services will give you the option to switch logs in the top "Service" bar, something common for consensus clients for example, which usually run one service for the ',(0,s.jsx)(a.code,{children:"beacon-chain"})," and another one for ",(0,s.jsx)(a.code,{children:"validator"}),". Whenever you request for support in the Dappnode community, keep these handy!"]}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"dappnode_packages4",src:n(7908).Z+"",width:"1741",height:"1091"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"backup",children:"Backup"}),"\n",(0,s.jsx)(a.p,{children:'This option will be available in packages that generate any kind of local database that includes sensitive information such as validator keystores. You\'ll have two very self-explainatory options: "Backup Now" and "Restore Backup".'}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"dappnode_packages5",src:n(4418).Z+"",width:"1741",height:"1091"})}),"\n",(0,s.jsx)(a.hr,{}),"\n",(0,s.jsx)(a.h4,{id:"file-manager",children:"File Manager"}),"\n",(0,s.jsx)(a.p,{children:"Also handy whenever your package has a database you'll need to access or modify, but without going through a terminal. Download and upload files in an easy way with the File Manager."}),"\n",(0,s.jsx)(a.p,{children:(0,s.jsx)(a.img,{alt:"dappnode_packages6",src:n(6274).Z+"",width:"1741",height:"1091"})})]})}function p(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9561:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/dappnode_packages1-9986b39b271ef6adbc6d4a98e907f5c7.png"},899:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/dappnode_packages2-bfcef9f7947159b0341c2c914f93378e.png"},8454:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/dappnode_packages3-96bce25fad6818075d28d1f51529b442.png"},7908:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/dappnode_packages4-bb2f5a5218ea06c59a09858997773adf.png"},4418:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/dappnode_packages5-dd905b985e061e57968acfccca3cd1f1.png"},6274:(e,a,n)=>{n.d(a,{Z:()=>s});const s=n.p+"assets/images/dappnode_packages6-3da72f7cab4ec4f639799523d3274ff8.png"},1151:(e,a,n)=>{n.d(a,{Z:()=>r,a:()=>o});var s=n(7294);const t={},i=s.createContext(t);function o(e){const a=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:a},e.children)}}}]);