"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7365],{2477:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(5893),i=s(1151);const o={},a="Gnosis Chain",r={id:"user/staking/gnosis-chain/solo",title:"Gnosis Chain",description:"Gnosis Chain stands as a sentinel, functioning as a canary chain for Ethereum. It's operated and nurtured by the GnosisDAO community. With over 10% of its validators being home stakers via Dappnode, it's a testament to its popularity and accessibility.",source:"@site/docs/user/staking/gnosis-chain/solo.md",sourceDirName:"user/staking/gnosis-chain",slug:"/user/staking/gnosis-chain/solo",permalink:"/docs/user/staking/gnosis-chain/solo",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/user/staking/gnosis-chain/solo.md",tags:[],version:"current",frontMatter:{},sidebar:"userSidebar",previous:{title:"Diva package for Dappnode",permalink:"/docs/user/staking/ethereum/dvt-technologies/diva"},next:{title:"LUKSO",permalink:"/docs/user/staking/lukso/solo"}},h={},d=[{value:"Joining the Gnosis Chain as a Validator",id:"joining-the-gnosis-chain-as-a-validator",level:2},{value:"1. Install the necessary packages on Dappnode",id:"1-install-the-necessary-packages-on-dappnode",level:2},{value:"2. Creating validator keys for Gnosis Chain",id:"2-creating-validator-keys-for-gnosis-chain",level:2},{value:"3: Deposit GNO into the Gnosis Chain deposit contract",id:"3-deposit-gno-into-the-gnosis-chain-deposit-contract",level:2},{value:"Withdrawing my GNO",id:"withdrawing-my-gno",level:2},{value:"1. Exit the validator from the Dappnode UI",id:"1-exit-the-validator-from-the-dappnode-ui",level:3},{value:"2. Claim your GNO from the deposit contract",id:"2-claim-your-gno-from-the-deposit-contract",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"gnosis-chain",children:"Gnosis Chain"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Gnosis Chain"})," stands as a sentinel, functioning as a canary chain for Ethereum. It's operated and nurtured by the ",(0,t.jsx)(n.strong,{children:"GnosisDAO community"}),". With over 10% of its validators being home stakers via Dappnode, it's a testament to its popularity and accessibility."]}),"\n",(0,t.jsx)(n.h2,{id:"joining-the-gnosis-chain-as-a-validator",children:"Joining the Gnosis Chain as a Validator"}),"\n",(0,t.jsxs)(n.p,{children:["Staking on the Gnosis Chain is both easy and economical. All it takes is ",(0,t.jsx)(n.strong,{children:"1 GNO"})," to kickstart your journey as a Gnosis Chain validator. This low barrier to entry ensures that anyone, regardless of their financial position, can participate actively in the network as a block proposer. You will need to do 3 main tasks, broken down below:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Install the necessary packages on Dappnode"}),"\n",(0,t.jsx)(n.li,{children:"Create validator keys for Gnosis Chain"}),"\n",(0,t.jsx)(n.li,{children:"Deposit GNO into the Gnosis Beacon Chain deposit contract"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"1-install-the-necessary-packages-on-dappnode",children:"1. Install the necessary packages on Dappnode"}),"\n",(0,t.jsx)(n.p,{children:"Similar to Ethereum mainnet, Dappnode makes it very easy to set up you Gnosis Chain validator. Here's what the Stakers UI looks like for Gnosis Chain:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Stakers",src:s(1342).Z+"",width:"2852",height:"1516"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Execution Client"})," (Choose one):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Nethermind Xdai (Available now)"}),"\n",(0,t.jsx)(n.li,{children:"Gnosis Erigon (Coming soon!)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Consensus Client"})," (Choose one):","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lighthouse Gnosis"}),"\n",(0,t.jsx)(n.li,{children:"Teku Gnosis"}),"\n",(0,t.jsx)(n.li,{children:"Lodestar Gnosis"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Web3Signer Gnosis"})}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Checkpoint Sync is your friend for syncing Consensus Clients",type:"tip",children:(0,t.jsx)(n.p,{children:'Execution clients take a long time to sync. Hence, once you start staking with one you will most likely stick with it. However, you can switch consensus clients at any time thanks to the magic of "checkpoint sync". Make sure to toggle the "use checksync" option when installing your consensus client, and you can change at any point from one to another with barely any downtime.'})}),"\n",(0,t.jsx)(n.p,{children:"After syncing your consensus client, the execution client starts its synchronization process. This can take a few hours, so patience is essential. For clarity or troubleshooting, consult your execution client's logs."}),"\n",(0,t.jsx)(n.h2,{id:"2-creating-validator-keys-for-gnosis-chain",children:"2. Creating validator keys for Gnosis Chain"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["This guide will use the ",(0,t.jsx)(n.a,{href:"https://github.com/alexpeterson91/Gnosis-Wagyu-Key-Gen/releases",children:"Gnosis Wagyu keygen tool"})," to generate your validator keys. This is a fork of the ",(0,t.jsx)(n.a,{href:"https://github.com/stake-house/wagyu-key-gen/releases",children:"Wagyu Keygen tool"})," for Ethereum mainnet."]})}),"\n",(0,t.jsxs)(n.admonition,{title:"What are all these keys?",type:"caution",children:[(0,t.jsxs)(n.p,{children:["\ud83d\udd12 ",(0,t.jsx)(n.strong,{children:"Validator keys"})," will be online (stored in your Dappnode) and signing the blocks of the Gnosis Chain. You will create them from a ",(0,t.jsx)(n.strong,{children:"mnemonic phrase"}),", which is important to keep safe as it's the ",(0,t.jsx)(n.strong,{children:"only way"})," to regenerate these validator keys if you lose them."]}),(0,t.jsxs)(n.p,{children:["\ud83d\udee1\ufe0f The damage of getting your ",(0,t.jsx)(n.strong,{children:"mnemonic phrase"})," compromised has been reduced dramatically since withdrawals have been activated, as you can create the keystores with a set withdrawal address and nobody can change that after, even if they get to your ",(0,t.jsx)(n.strong,{children:"mnemonic phrase"}),". Nevertheless, if you lose the keystore and the mnemonic, you will not be able to sign an exit message and you will be forced to validate forever."]}),(0,t.jsxs)(n.p,{children:["\ud83d\udd11 ",(0,t.jsx)(n.strong,{children:"Withdrawal address"})," this brings us to the withdrawal address, which is the address that will receive all the balance above 1 GNO while your validator is active, and all your balance above 0 GNO when you exit the validator set. You need to keep this address safe as it's where your GNO will go, and cannot be changed."]})]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the latest release of the Gnosis Wagyu Key Gen from ",(0,t.jsx)(n.a,{href:"https://github.com/alexpeterson91/Gnosis-Wagyu-Key-Gen/releases",children:"here"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Disconnect from the internet, so it will be harder to have any leaks on the information you use, and open the Gnosis Wagyu keygen tool. You will be given 2 options, either create a new mnemonic or import an existing mnemonic. The GUI is very user friendly and explains all steps along the way."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Wagyu - 1st screen",src:s(3591).Z+"",width:"1865",height:"1441"})}),"\n",(0,t.jsx)(n.p,{children:"You will be shown your Mnemonic Phrase. Keep it safe, as it is used to recreate the validator keys! We recommend copying it in an encrypted volume or in paper stored in a safe place."}),"\n",(0,t.jsx)(n.p,{children:"To ensure that you have copied it somewhere, it will ask you to type it again."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Wagyu - 2nd screen",src:s(7642).Z+"",width:"1898",height:"1438"})}),"\n",(0,t.jsx)(n.p,{children:"Choose 1) How many keys you want to create, 2) the password to protect the keys and 3) the Withdrawal Address where your Consensus Layer profits will be sent."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Wagyu - 3rd screen",src:s(1131).Z+"",width:"1888",height:"1430"})}),"\n",(0,t.jsx)(n.p,{children:"Select a folder where to save the keys."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Wagyu - 4th screen",src:s(5421).Z+"",width:"1886",height:"1424"})}),"\n",(0,t.jsx)(n.p,{children:"Wait for the keys to be generated."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Wagyu - 5th screen",src:s(8058).Z+"",width:"1888",height:"1426"})}),"\n",(0,t.jsx)(n.p,{children:"And you are done! You will find your keys in the folder you selected."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Wagyu - 6th screen",src:s(8613).Z+"",width:"1886",height:"1430"})}),"\n",(0,t.jsx)(n.p,{children:"You are now done with the key generation process, and your generated keys and deposit data are in the folder/directory chosen, and displayed at the top of the final page."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["\ud83d\udca1 *",(0,t.jsx)(n.code,{children:"Want to learn more about Ethereum keys and key generation?"}),"*\ud83d\udca1",(0,t.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/keys/#two-types-of-keys",children:"Learn more"})]})}),"\n",(0,t.jsx)(n.p,{children:"Now that you\u2019ve generated your deposit data and keystores, go ahead and upload your keystores to Web3Signer Gnosis, the package that you installed during step 1."}),"\n",(0,t.jsxs)(n.p,{children:["Return to the Dappnode UI and navigate to the Stakers > Gnosis Chain menu. Your Web3Signer will have a link saying ",(0,t.jsx)(n.code,{children:"Upload Keystores"})," . If it doesn\u2019t, make sure that you have waited enough time since step 1 for all the packages to be installed (around 5 minutes) and refresh the page."]}),"\n",(0,t.jsxs)(n.p,{children:["Then click on the ",(0,t.jsx)(n.code,{children:"Import Keystores"})," button on the lower part of the Web3Signer Gnosis UI."]}),"\n",(0,t.jsx)(n.p,{children:"Here browse for the keystore file(s) you generated in the previous step and enter them along with the password you chose to secure your keystores."}),"\n",(0,t.jsx)(n.p,{children:"You are now ready to fund these validator accounts and start validating!"}),"\n",(0,t.jsx)(n.h2,{id:"3-deposit-gno-into-the-gnosis-chain-deposit-contract",children:"3: Deposit GNO into the Gnosis Chain deposit contract"}),"\n",(0,t.jsx)(n.p,{children:"The final step is to fund your validator with 1 GNO necessary to register as a validator and start receiving validation work!"}),"\n",(0,t.jsx)(n.p,{children:"To do this, you will need to send 1 GNO to the Gnosis Chain deposit contract."}),"\n",(0,t.jsxs)(n.p,{children:["Follow the official instructions in the ",(0,t.jsx)(n.a,{href:"https://docs.gnosischain.com/node/manual/validator/deposit",children:"Gnosis Chain documentation"})," to deposit your GNO into the deposit contract."]}),"\n",(0,t.jsxs)(n.p,{children:["After the deposit is gone, you will be able to check the progress of your deposit by searching for your validator key in the ",(0,t.jsx)(n.a,{href:"https://gnosischa.in/",children:"Gnosis Beacon Chain Explorer"}),", which is a fork of the ",(0,t.jsx)(n.a,{href:"https://beaconcha.in/",children:"Ethereum Beaconcha.in"})," explorer. You can get a direct link to this by clicking on the ",(0,t.jsx)(n.code,{children:"View in Beaconcha.in"})," button in the upper, right corner of the Dappnode Web3signer Gnosis UI, where you uploaded the keystores."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Remember"}),": Embarking on the staking journey requires diligence. Always keep abreast of developments and make informed decisions."]}),"\n",(0,t.jsx)(n.h2,{id:"withdrawing-my-gno",children:"Withdrawing my GNO"}),"\n",(0,t.jsx)(n.p,{children:"Once you want to finish your staking journey, you will need to withdraw your GNO from the Gnosis Chain. This is a 2 step process of exiting the validator from the Dappnode UI and claiming the GNO from the deposit contract."}),"\n",(0,t.jsx)(n.admonition,{title:"Gnosis Chain withdrawals \u2260 Ethereum withdrawals",type:"info",children:(0,t.jsxs)(n.p,{children:["Because the native token of Gnosis Chain is xDAI (you pay fees in it), but the staking token is GNO, withdrawals work differntly than in the Ethereum chain and do not happen automatically. You must claim your withdrawn tokens from the Deposit Contract. More info ",(0,t.jsx)(n.a,{href:"https://docs.gnosischain.com/node/management/withdrawals",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"1-exit-the-validator-from-the-dappnode-ui",children:"1. Exit the validator from the Dappnode UI"}),"\n",(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Make sure that your validator have a ",(0,t.jsx)(n.code,{children:"0x01"})," type withdrawal address before exiting your validator or you will lose your funds. In the ",(0,t.jsx)(n.a,{href:"https://gnosischa.in/",children:"consensus explorer"}),", if your withdrawal address shows as an address that starts with a ",(0,t.jsx)(n.code,{children:"0x00"})," it means that your withdrawal address needs to be upgraded to a ",(0,t.jsx)(n.code,{children:"0x01"}),", please refer to the guide in the ",(0,t.jsx)(n.a,{href:"https://docs.gnosischain.com/node/management/withdrawals#how-to-change-the-withdrawal-credential",children:"Gnosis Chain documentation"}),". If your validator already shows a ",(0,t.jsx)(n.code,{children:"0x01"})," address, you DON'T need to follow these steps."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Gnosis Withdrawals",src:s(8298).Z+"",width:"1884",height:"729"})}),"\n",(0,t.jsxs)(n.p,{children:["Navigate to the Stakers > Gnosis Chain menu and click on the ",(0,t.jsx)(n.code,{children:"Upload Keystores"})," button on the Web3Signer card.\nOnce you are in the Web3Signer UI, select the validators you want to exit and click on the ",(0,t.jsx)(n.code,{children:"Exit Validator"}),' button on the top right part of the UI.\nFollow the instructions and type "I want to exit", followed by ',(0,t.jsx)(n.code,{children:"Exit"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Now the message to exit will be broadcasted to the network."}),"\n",(0,t.jsx)(n.admonition,{title:"Withdrawal queue",type:"caution",children:(0,t.jsxs)(n.p,{children:["Your validator will not exit immediately. It will be queued to exit and you can track when it's due in the ",(0,t.jsx)(n.a,{href:"https://gnosischa.in/",children:"Gnosis Beacon Chain Explorer"}),".\nEven then, you will need to claim your GNO from the deposit contract as per the next step."]})}),"\n",(0,t.jsx)(n.h3,{id:"2-claim-your-gno-from-the-deposit-contract",children:"2. Claim your GNO from the deposit contract"}),"\n",(0,t.jsx)(n.p,{children:"As soon as your withdrawal has been processed by the Beacon Chain, you will be able to claim your GNO from the deposit contract. You can claim from any of your wallets that hold xDAI to pay gas fees."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.a,{href:"https://gnosisscan.io/address/0x0b98057ea310f4d31f2a452b414647007d1645d9#writeProxyContract#F3",children:"Gnosis Chain Deposit Contract page in Gnosisscan.io"})," and navigate to the ",(0,t.jsx)(n.code,{children:"Write as Proxy"})," tab,"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Connect your wallet with the ",(0,t.jsx)(n.code,{children:"Connect to Web3"})," button and then locate the ",(0,t.jsx)(n.code,{children:"3. claimWithdrawal"})," function."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Type your withdrawal address in the field and click ",(0,t.jsx)(n.code,{children:"Write"}),". A transaction should trigger on your wallet. Approve it and wait for it to be included in a block."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Claiming from the Smart Contract",src:s(3285).Z+"",width:"1392",height:"575"})}),"\n",(0,t.jsx)(n.p,{children:"Voil\xe0! Your GNO will appear on your withdrawal address!"})]})}function c(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},3591:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnosis-wagyu1-c67da68262d9f9650ee5eb477a7b2589.png"},7642:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnosis-wagyu2-e9f88c7e6ee959624f14fcb8516753c6.png"},1342:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnosischain-staking-screenshot-7752841d13ebbf72b1256659ed68fc40.png"},8298:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnosiswithdrawals1-3319c9298d63c9bdc640b84a94bc4db3.png"},3285:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/gnosiswithdrawals2-a2f7f743a00c32f88e9b341c9f7b0e58.png"},1131:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu4-0673a83463eb844993339ecfdcc59b41.png"},5421:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu5-644261c1588e13ba1177d70aef9ecf19.png"},8058:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu6-d5538d2bbd5a01f47d94c6c5b29b3abf.png"},8613:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/wagyu7-8c346a2c9519b98a530d1005a69247f2.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>a});var t=s(7294);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);