"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[120],{8386:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var t=o(5893),i=o(1151);const a={},s="DappnodeSDK",d={id:"dev/sdk/overview",title:"DappnodeSDK",description:"The DappnodeSDK dappnodesdk is a tool that makes creating and publishing new Dappnode packages as simple as possible. It helps to initialize, build, test, and publish the new package/repo to an APM tracked on the Ethereum Mainnet.",source:"@site/docs/dev/sdk/overview.md",sourceDirName:"dev/sdk",slug:"/dev/sdk/overview",permalink:"/docs/dev/sdk/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/edit/master/docs/dev/sdk/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Introduction",permalink:"/docs/dev"},next:{title:"Main commands",permalink:"/docs/dev/sdk/commands"}},r={},p=[{value:"Command-line options",id:"command-line-options",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"dappnodesdk",children:"DappnodeSDK"}),"\n",(0,t.jsxs)(n.p,{children:["The DappnodeSDK ",(0,t.jsx)(n.code,{children:"dappnodesdk"})," is a tool that makes creating and publishing new Dappnode packages as simple as possible. It helps to initialize, build, test, and publish the new package/repo to an APM tracked on the Ethereum Mainnet."]}),"\n",(0,t.jsxs)(n.p,{children:["We have deployed a public APM (Aragon Package Manager) registry in which anyone can create their own APM repository: ",(0,t.jsx)(n.a,{href:"https://etherscan.io/address/public.dappnode.eth",children:"public.dappnode.eth"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Demo GIF",src:o(4702).Z+"",width:"1049",height:"638"})}),"\n",(0,t.jsx)(n.h2,{id:"command-line-options",children:"Command-line options"}),"\n",(0,t.jsx)(n.p,{children:"DappnodeSDK is usually executed from the command line. The following are all the available commands."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["You can run ",(0,t.jsx)(n.code,{children:"dappnodesdk <command> help"})," to get more information about each command."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'Usage: dappnodesdk <command> [options]\n\nCommands:\n  build                   Build a new version (only generates the ipfs hash)\n  from_github [repoSlug]  Gets an existing DNP Github release (assets) and uploa\n                          d it to IPFS\n  increase [type]         Increases the version defined in the manifest\n  init                    Initialize a new DAppNodePackage (DNP) repository\n  next [type]             Compute the next release version from local\n  publish [type]          Publish a new version of the package in an Aragon Pack\n                          age Manager Repository\n  github-action           Github actions tooling to be run in CI. Uses a specifi\n                          c set of options for internal DAppNode use. Caution: o\n                          ptions may change without notice.\n\nOptions:\n      --dir, --directory   Change the base directory    [string] [default: "./"]\n      --compose_file_name  Compose file for docker-compose\n                                        [string] [default: "docker-compose.yml"]\n      --silent             Silence output to terminal                  [boolean]\n      --verbose, --debug   Show more output to terminal                [boolean]\n  -h, --help               Show help                                   [boolean]\n  -v, --version            Show version number                         [boolean]```\n'})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},4702:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/demo-3ae4e5dc0c026dfb372657f396712b72.gif"},1151:(e,n,o)=>{o.d(n,{Z:()=>d,a:()=>s});var t=o(7294);const i={},a=t.createContext(i);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);