"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7484],{377:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=t(5893),a=t(1151);const o={},s="Guide to Installing Bee Node on Dappnode",r={id:"user/packages/swarm",title:"Guide to Installing Bee Node on Dappnode",description:"Introduction to Swarm",source:"@site/docs/user/packages/swarm.md",sourceDirName:"user/packages",slug:"/user/packages/swarm",permalink:"/docs/user/packages/swarm",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/edit/master/docs/user/packages/swarm.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Monero",permalink:"/docs/user/packages/monero"},next:{title:"Ethereum repository",permalink:"/docs/user/repository/ethereum"}},d={},l=[{value:"Introduction to Swarm",id:"introduction-to-swarm",level:2},{value:"Introduction to Dappnode",id:"introduction-to-dappnode",level:2},{value:"Gnosis Chain",id:"gnosis-chain",level:2},{value:"Installing a Bee node",id:"installing-a-bee-node",level:2},{value:"Engage in Storage Incentives by Staking Your BZZ",id:"engage-in-storage-incentives-by-staking-your-bzz",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"guide-to-installing-bee-node-on-dappnode",children:"Guide to Installing Bee Node on Dappnode"}),"\n",(0,i.jsx)(n.h2,{id:"introduction-to-swarm",children:"Introduction to Swarm"}),"\n",(0,i.jsx)(n.p,{children:"Swarm is a decentralized data storage and distribution technology. Ready to power the next generation of censorship-resistant, unstoppable, serverless dApps."}),"\n",(0,i.jsxs)(n.p,{children:["Node operators can ",(0,i.jsx)(n.a,{href:"https://docs.ethswarm.org/docs/bee/working-with-bee/staking/#stake-your-node-with-bee",children:"stake BZZ"})," to participate in the redistribution of funds, allowing Bee node operators to receive BZZ in return for providing storage and bandwidth."]}),"\n",(0,i.jsx)(n.p,{children:"Node operators are rewarded with BZZ tokens, the native ERC-20 token."}),"\n",(0,i.jsx)(n.p,{children:"Beyond earning rewards, the Bee node serves as your personalized gateway to the Swarm network, offering you interactive access to content and dApps hosted on Swarm. The app enables you to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Securely store (upload and download) files on Swarm's decentralized storage."}),"\n",(0,i.jsx)(n.li,{children:"Share files privately and securely with others."}),"\n",(0,i.jsx)(n.li,{children:"Host and manage HTML websites conveniently."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"introduction-to-dappnode",children:"Introduction to Dappnode"}),"\n",(0,i.jsx)(n.p,{children:"DappNode is a decentralized platform that serves as critical infrastructure for launching and managing decentralized applications (dApps) with an essence of providing users with self-sovereign data management and secure, uncensorable application interfaces."}),"\n",(0,i.jsx)(n.p,{children:"Node operators on DappNode can gain enhanced control over their participation in various blockchain networks and ensure that their activities, whether it be validating transactions, participating in consensus mechanisms, or supporting network security, are conducted in a seamless, autonomous manner."}),"\n",(0,i.jsx)(n.p,{children:"The unique DappNode ecosystem ensures:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Seamless deployment and management of decentralized applications and nodes."}),"\n",(0,i.jsx)(n.li,{children:"Enhanced user control over data and privacy."}),"\n",(0,i.jsx)(n.li,{children:"Autonomous and secure participation in various blockchain networks."}),"\n",(0,i.jsx)(n.li,{children:"Simplification of running blockchain nodes, reducing technical barriers for participants."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"gnosis-chain",children:"Gnosis Chain"}),"\n",(0,i.jsxs)(n.p,{children:["Swarm uses ",(0,i.jsx)(n.a,{href:"https://www.gnosis.io/",children:"Gnosis Chain"}),", formerly known as xDai, for managing its incentives."]}),"\n",(0,i.jsx)(n.p,{children:"Therefore, the Swarm Bee client necessitates a connection to the Gnosis Chain. As such, we recommend installing Nethermind (direct Dappnode install link) as your RPC endpoint."}),"\n",(0,i.jsx)(n.h2,{id:"installing-a-bee-node",children:"Installing a Bee node"}),"\n",(0,i.jsxs)(n.p,{children:["Step 1: Navigate to the package installer \u2014 ",(0,i.jsx)(n.a,{href:"http://my.dappnode/installer/public/swarm.public.dappnode.eth",children:"Install Swarm"}),"(direct Dappnode install link). Click Install to initiate the installation."]}),"\n",(0,i.jsx)(n.p,{children:"Step 2: Setup optional parameters:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Swap RPC Endpoint (Gnosis Chain)"})," \u2014 if you installed Nethermind and are running your own node, you can leave the default settings. Otherwise, if you use an external RPC endpoint, this is where you should set it."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"ENS resolver RPC (Ethereum Mainnet)"})," \u2014 As bee can resolve ENS (a special type of blockchain name), it requires an Ethereum mainnet RPC endpoint. Install links are available for a variety of clients, or you can use an Infura RPC endpoint, or alternatively leave it blank to disable the ENS resolver."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Initial chequebook deposit (xBZZ)"})," \u2014 is the amount of xBZZ the bee node must have deposited to its address in order to deploy the chequebook. You have the option to set this to 0 and deposit BZZ into the chequebook later via the UI."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Welcome message"})," \u2014 some graffiti that you can admire at Swarm Scan or if you happen to be peering through the logs"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Full node mode"})," \u2014 must be set to true or false, in order to stake and participate in storage incentives, and subsequently be rewarded, it should be set to true"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Storage data mountpoint"})," \u2014 for advanced users; recommended to leave at default."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"engage-in-storage-incentives-by-staking-your-bzz",children:"Engage in Storage Incentives by Staking Your BZZ"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Import your gift code into Metamask or another web3 wallet on Gnosis chain. Remember, the gift code is a private key that holds 12 BZZ and 0.12xDAI."}),"\n",(0,i.jsxs)(n.li,{children:["Transfer funds to your Node wallet address, which can be found in the logs or at Swarm UI/Account/",(0,i.jsx)(n.a,{href:"http://dashboard.swarm.public.dappnode/#/account/wallet",children:"Wallet"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Visit Account/",(0,i.jsx)(n.a,{href:"http://dashboard.swarm.public.dappnode/#/account/staking",children:"Staking"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Click on 'Stake', input an amount of 10 BZZ, and then press the 'Stake' button."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);