"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[6593],{2825:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var t=s(5893),o=s(1151);const a={},i="LUKSO",r={id:"user/staking/lukso/solo",title:"LUKSO",description:"LUKSO is the next-gen blockchain designed with creative industries in mind. Imagine a digital realm where the spirit of Ethereum meets the world of fashion, art, and design. That's LUKSO for you!",source:"@site/docs/user/staking/lukso/solo.md",sourceDirName:"user/staking/lukso",slug:"/user/staking/lukso/solo",permalink:"/docs/user/staking/lukso/solo",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/lukso/solo.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Gnosis Chain Incentive Program",permalink:"/docs/user/staking/gnosis-chain/incentive-program"},next:{title:"Ethereum Rollups: An Overview",permalink:"/docs/user/rollups/overview"}},l={},d=[{value:"What Makes LUKSO Special?",id:"what-makes-lukso-special",level:2},{value:"Joining LUKSO as a validator",id:"joining-lukso-as-a-validator",level:2},{value:"1. Install the necessary LUKSO packages on Dappnode.",id:"1-install-the-necessary-lukso-packages-on-dappnode",level:2},{value:"2. Creating validator keys for LUKSO",id:"2-creating-validator-keys-for-lukso",level:2},{value:"3: Deposit LYX into the LUKSO deposit contract",id:"3-deposit-lyx-into-the-lukso-deposit-contract",level:2},{value:"3. Adding a Withdrawal Address to your LUKSO validator",id:"3-adding-a-withdrawal-address-to-your-lukso-validator",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"lukso",children:"LUKSO"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LUKSO"})," is the next-gen blockchain designed with creative industries in mind. Imagine a digital realm where the spirit of Ethereum meets the world of fashion, art, and design. That's LUKSO for you!"]}),"\n",(0,t.jsx)(n.h2,{id:"what-makes-lukso-special",children:"What Makes LUKSO Special?"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Universal Profiles (UPs)"}),", supported by the ERC-725 standard, are LUKSO's magic trick. They act like digital passports in the LUKSO universe, ensuring that every creation and transaction carries the unique signature of its creator."]}),"\n",(0,t.jsx)(n.h2,{id:"joining-lukso-as-a-validator",children:"Joining LUKSO as a validator"}),"\n",(0,t.jsx)(n.p,{children:"LUKSO shares more than just roots with Ethereum. It uses the same trusted tools to run its network. Some of the main Ethereum clients are also compatible with LUKSO. For becoming a validator in LUKSO, you'll need to:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the necessary LUKSO packages on Dappnode."}),"\n",(0,t.jsx)(n.li,{children:"Create validator keys for LUKSO."}),"\n",(0,t.jsx)(n.li,{children:"Deposit LYX into the LUKSO Consensus Chain deposit contract."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-install-the-necessary-lukso-packages-on-dappnode",children:"1. Install the necessary LUKSO packages on Dappnode."}),"\n",(0,t.jsx)(n.p,{children:"Similar to Ethereum mainnet, Dappnode makes it very easy to set up your LUKSO validator. Here's what the Stakers UI looks like for LUKSO:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Stakers",src:s(5542).Z+"",width:"2846",height:"1512"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Execution Clients"})," (Choose one):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lukso Geth"}),"\n",(0,t.jsx)(n.li,{children:"Lukso Erigon (Coming soon to Dappnode)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consensus Clients"})," (Choose one):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Prysm Lukso"}),"\n",(0,t.jsx)(n.li,{children:"Teku Lukso\n-Web3Signer LUKSO"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Checkpoint Sync is your friend for syncing Consensus Clients",type:"tip",children:(0,t.jsx)(n.p,{children:'Execution clients take a long time to sync. Hence, once you start staking with one you will most likely stick with it. However, you can switch consensus clients at any time thanks to the magic of "checkpoint sync". Make sure to toggle the "use checksync" option when installing your consensus client, and you can change at any point from one to another with barely any downtime.'})}),"\n",(0,t.jsx)(n.p,{children:"After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs."}),"\n",(0,t.jsx)(n.h2,{id:"2-creating-validator-keys-for-lukso",children:"2. Creating validator keys for LUKSO"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This guide will use the ",(0,t.jsx)(n.a,{href:"https://github.com/lukso-network/tools-wagyu-key-gen/releases",children:"LUKSO Wagyu Keygen Tool"})," to generate your validator keys. This is a fork of the ",(0,t.jsx)(n.a,{href:"https://github.com/stake-house/wagyu-key-gen/releases",children:"Wagyu Keygen tool"})," for Ethereum mainnet."]})}),"\n",(0,t.jsxs)(n.admonition,{title:"What are all these keys?",type:"caution",children:[(0,t.jsxs)(n.p,{children:["\ud83d\udd12 ",(0,t.jsx)(n.strong,{children:"Validator keys"})," will be online (stored in your Dappnode) and signing the blocks of the LUKSO blockchain. You will create them from a ",(0,t.jsx)(n.strong,{children:"mnemonic phrase"}),", which is important to keep safe as it's the ",(0,t.jsx)(n.strong,{children:"only way"})," to regenerate these validator keys if you lose them."]}),(0,t.jsxs)(n.p,{children:["\ud83d\udee1\ufe0f The damage of getting your ",(0,t.jsx)(n.strong,{children:"mnemonic phrase"})," compromised has been reduced dramatically since withdrawals are already activated in LUKSO (Shapella upgrade), as you can create the keystores with a set withdrawal address and nobody can change that after, even if they get to your ",(0,t.jsx)(n.strong,{children:"mnemonic phrase"}),". Nevertheless, if you lose the keystore and the mnemonic, you will not be able to sign an exit message and you will be forced to validate forever."]}),(0,t.jsxs)(n.p,{children:["\ud83d\udd11 ",(0,t.jsx)(n.strong,{children:"Withdrawal address"})," this brings us to the withdrawal address, which is the address that will receive all the balance above 32 LYX while your validator is active, and all your balance above 32 LYX when you exit the validator set. You need to keep this address safe as it's where your LYX will go, and cannot be changed."]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the latest release of the LUKSO Wagyu Keygen Tool from ",(0,t.jsx)(n.a,{href:"https://github.com/lukso-network/tools-wagyu-key-gen/releases",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the LUKSO Wagyu Keygen Tool. You will be given 2 options, either create a new mnemonic or import an existing mnemonic. The GUI is very user friendly and explains all steps along the way."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Wagyu - 1st screen",src:s(6583).Z+"",width:"1896",height:"1606"})}),"\n",(0,t.jsx)(n.p,{children:"You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place."}),"\n",(0,t.jsx)(n.p,{children:"To ensure that you have copied it somewhere, it will ask you to type it again."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Wagyu - 2nd screen",src:s(9862).Z+"",width:"1896",height:"1606"})}),"\n",(0,t.jsx)(n.p,{children:"Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Wagyu - 3rd screen",src:s(1131).Z+"",width:"1888",height:"1430"})}),"\n",(0,t.jsx)(n.p,{children:"Select a folder where to save the keys."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Wagyu - 4th screen",src:s(5421).Z+"",width:"1886",height:"1424"})}),"\n",(0,t.jsx)(n.p,{children:"Wait for the keys to be generated."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Wagyu - 5th screen",src:s(8058).Z+"",width:"1888",height:"1426"})}),"\n",(0,t.jsx)(n.p,{children:"And you are done! You will find your keys in the folder you selected."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Wagyu - 6th screen",src:s(8613).Z+"",width:"1886",height:"1430"})}),"\n",(0,t.jsx)(n.p,{children:"You are now done with the key generation process, and your generated keys and deposit data are in the folder/directory chosen, and displayed at the top of the final page."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\ud83d\udca1 *",(0,t.jsx)(n.code,{children:"Want to learn more about Ethereum keys and key generation?"}),"*\ud83d\udca1",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/#two-types-of-keys",children:"Learn more"})]})}),"\n",(0,t.jsx)(n.p,{children:"Now that you\u2019ve generated your deposit data and keystores, go ahead and upload your keystores to Web3Signer LUKSO, the package that you installed during step 1."}),"\n",(0,t.jsxs)(n.p,{children:["Return to the Dappnode UI and navigate to the Stakers > LUKSO menu. Your Web3Signer will have a link saying ",(0,t.jsx)(n.code,{children:"Upload Keystores"})," . If it doesn\u2019t, make sure that you have waited enough time since step 1 for all the packages to be installed (around 5 minutes) and refresh the page."]}),"\n",(0,t.jsxs)(n.p,{children:["Then click on the ",(0,t.jsx)(n.code,{children:"Import Keystores"})," button on the lower part of the Web3Signer LUKSO UI."]}),"\n",(0,t.jsx)(n.p,{children:"Here browse for the keystore file(s) you generated in the previous step and enter them along with the password you chose to secure your keystores."}),"\n",(0,t.jsx)(n.p,{children:"You are now ready to fund these validator accounts and start validating in LUKSO!"}),"\n",(0,t.jsx)(n.h2,{id:"3-deposit-lyx-into-the-lukso-deposit-contract",children:"3: Deposit LYX into the LUKSO deposit contract"}),"\n",(0,t.jsx)(n.p,{children:"The final step is to fund your validator with the 32 LYX necessary to register as a validator and start receiving validation work!"}),"\n",(0,t.jsx)(n.p,{children:"To do this, you will need to send 32 LYX to the LUKSO deposit contract. We will be using the official LUKSO launchpad for this."}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to ",(0,t.jsx)(n.a,{href:"https://deposit.mainnet.lukso.network/en/",children:"the LUKSO launchpad"})]}),"\n",(0,t.jsx)(n.p,{children:"Read all the advisories... they contain important information that will help you understand the whole process!"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Launchpad 1",src:s(5773).Z+"",width:"2218",height:"1460"})}),"\n",(0,t.jsx)(n.p,{children:"Because we are using Dappnode and we take care of the infrastructure and the software installation, we can skip the next sections:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Launchpad 2",src:s(8846).Z+"",width:"2878",height:"1480"})}),"\n",(0,t.jsx)(n.p,{children:'We continue until the "Upload Deposit Data" section.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Launchpad 3",src:s(8257).Z+"",width:"2602",height:"1502"})}),"\n",(0,t.jsxs)(n.p,{children:["Here we will upload the deposit data that we generated in the previous step. You can find it in the folder you chose when generating the keys. It will be a file called ",(0,t.jsx)(n.code,{children:"deposit_data-*.json"})]}),"\n",(0,t.jsxs)(n.p,{children:["The moment to do the deposit is here! Connect your wallet with the 32 LYX and ",(0,t.jsx)(n.a,{href:"https://chainlist.org/chain/42",children:"make sure"})," you're in the LUKSO network."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Launchpad 4",src:s(6135).Z+"",width:"2602",height:"1502"})}),"\n",(0,t.jsx)(n.p,{children:"And follow the steps to send the 32 LYX to the deposit contract!"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please review your deposit address! MAKE SURE YOU ARE SENDING THE 32 LYX TO THE RIGHT DEPOSIT ADDRESS!"})}),"\n",(0,t.jsxs)(n.p,{children:["After the deposit is done, you will be able to check the progress of your deposit by searching for your validator key in the ",(0,t.jsx)(n.a,{href:"https://explorer.consensus.mainnet.lukso.network/",children:"LUKSO Consensus Explorer"}),". You can get a direct link to this by clicking on the ",(0,t.jsx)(n.code,{children:"View in Beaconcha.in"})," button in the upper, right corner of the Dappnode Web3signer LUKSO UI, where you uploaded the keystores"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"LUKSO Web3Signer",src:s(1952).Z+"",width:"2822",height:"1398"})}),"\n",(0,t.jsx)(n.h2,{id:"3-adding-a-withdrawal-address-to-your-lukso-validator",children:"3. Adding a Withdrawal Address to your LUKSO validator"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This step is only necessary if your validator doesn't have a withdrawal address configured. In the ",(0,t.jsx)(n.a,{href:"https://explorer.consensus.mainnet.lukso.network/",children:"consensus explorer"}),", it shows as an address that starts with a ",(0,t.jsx)(n.code,{children:"0x00"})," and needs to be upgraded to a ",(0,t.jsx)(n.code,{children:"0x01"}),". If your validator already shows a ",(0,t.jsx)(n.code,{children:"0x01"})," address, you DON'T need to follow these steps."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 1"}),": Open the ",(0,t.jsx)(n.a,{href:"https://github.com/lukso-network/tools-wagyu-key-gen/releases",children:"LUKSO Wagyu Keygen tool"}),' and click "Use existing recovery phrase", then you\'ll need to select "Generate your BLS to Execution change" option. Type in your seed phrase and follow the steps to generate a JSON file you\'ll need in step 3. Make sure you are offline during this step!']}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 2"}),": You'll have to locate your LUKSO consensus client's container IP. If you're using Prysm, you can find it ",(0,t.jsx)(n.a,{href:"http://my.dappnode/packages/my/prysm-lukso.dnp.dappnode.eth/network",children:"here"})," under the service box in the upper part, and if you're using Teku, you'll be able to find it ",(0,t.jsx)(n.a,{href:"http://my.dappnode/packages/my/teku-lukso.dnp.dappnode.eth/network",children:"here"})," in the same location."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 3"}),": Open a terminal window where you'll need to input:\n",(0,t.jsx)(n.code,{children:"curl -X 'POST' \\   '<node-url>/eth/v1/beacon/pool/bls_to_execution_changes' \\   -H 'accept: */*' \\   -H 'Content-Type: application/json' \\   -d '<post-request-content>'"}),"\nWhere ",(0,t.jsx)(n.code,{children:"<node-url>"})," is your LUKSO consensus client's container IP, and ",(0,t.jsx)(n.code,{children:"<post-request-content>"})," the JSON file you generated in step 1."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Step 4"}),": After successfully broadcasting the message, check your validator in the ",(0,t.jsx)(n.a,{href:"https://explorer.consensus.mainnet.lukso.network/",children:"LUKSO Consensus Explorer"}),", where you should now be able to see a ",(0,t.jsx)(n.code,{children:"0x01"})," withdrawal address."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Remember"}),": Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions."]})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5773:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-launchpad1-feee8e797237cfdda9065a0778c87e82.png"},8846:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-launchpad2-a06471841b30d5377c567417d618aa98.png"},8257:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-launchpad3-bca6aef08176b4d71d978494ad6c947e.png"},6135:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-launchpad4-fda4750d49c92053aff1fe0e3a0a02f2.png"},5542:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-staking-screenshot-605e7ed6329f5a73b11a6b8cc4015c9c.png"},6583:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-wagyu1-e38f326b1d87e8192b3cfe2193d5c8ed.png"},9862:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-wagyu2-118e3f6a51c4c39294effac0a4a6afe3.png"},1952:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/lukso-web3signer-31c35566a88612cb0658f7eade5b358a.png"},1131:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu4-0673a83463eb844993339ecfdcc59b41.png"},5421:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu5-644261c1588e13ba1177d70aef9ecf19.png"},8058:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu6-d5538d2bbd5a01f47d94c6c5b29b3abf.png"},8613:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu7-8c346a2c9519b98a530d1005a69247f2.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>i});var t=s(7294);const o={},a=t.createContext(o);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);