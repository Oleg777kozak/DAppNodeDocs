"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[8804],{4137:(e,n,o)=>{o.d(n,{Zo:()=>d,kt:()=>h});var t=o(7294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function i(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),s=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):i(i({},n),e)),o},d=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(o),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||r;return o?t.createElement(h,i(i({ref:n},d),{},{components:o})):t.createElement(h,i({ref:n},d))}));function h(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<r;s++)i[s]=o[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5900:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var t=o(7462),a=(o(7294),o(4137));const r={},i="Main commands",p={unversionedId:"dev/sdk/commands",id:"dev/sdk/commands",title:"Main commands",description:"This page covers the top three functionalities of DappnodeSDK: init, build, and publish. Each command plays a crucial role in the development and deployment process of dappnode packages (DNPs).",source:"@site/docs/dev/sdk/commands.md",sourceDirName:"dev/sdk",slug:"/dev/sdk/commands",permalink:"/docs/dev/sdk/commands",draft:!1,editUrl:"https://github.com/dappnode/DappnodeDocs/docs/dev/sdk/commands.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"DappnodeSDK",permalink:"/docs/dev/sdk/overview"},next:{title:"Docker compose file",permalink:"/docs/dev/references/docker-compose"}},l={},s=[{value:"<code>init</code>",id:"init",level:2},{value:"<code>build</code>",id:"build",level:2},{value:"<code>publish</code>",id:"publish",level:2}],d={toc:s},c="wrapper";function u(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,t.Z)({},d,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"main-commands"},"Main commands"),(0,a.kt)("p",null,"This page covers the top three functionalities of DappnodeSDK: ",(0,a.kt)("inlineCode",{parentName:"p"},"init"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"publish"),". Each command plays a crucial role in the development and deployment process of dappnode packages (DNPs)."),(0,a.kt)("h2",{id:"init"},(0,a.kt)("inlineCode",{parentName:"h2"},"init")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command allows you to initialize a new DAppNodePackage (DNP) repository. This is the first step when creating a new DNP. To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," command, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @dappnode/dappnodesdk init\n")),(0,a.kt)("p",null,"The following are all the possible ",(0,a.kt)("inlineCode",{parentName:"p"},"init")," options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Options:"},'      --dir, --directory   Change the base directory    [string] [default: "./"]\n      --compose_file_name  Compose file for docker-compose\n                                        [string] [default: "docker-compose.yml"]\n      --silent             Silence output to terminal                  [boolean]\n      --verbose, --debug   Show more output to terminal                [boolean]\n  -y, --yes                Answer yes or the default option to all initializatio\n                           n questions                                 [boolean]\n  -f, --force              Overwrite previous project if necessary     [boolean]\n  -h, --help               Show help                                   [boolean]\n  -v, --version            Show version number                         [boolean]\n')),(0,a.kt)("h2",{id:"build"},(0,a.kt)("inlineCode",{parentName:"h2"},"build")),(0,a.kt)("p",null,"The build command is used to build a new version of a DNP. It generates the IPFS hash for the package. To use the build command, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @dappnode/dappnodesdk build\n")),(0,a.kt)("p",null,"The following are all the possible ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Options:"},'      --dir, --directory   Change the base directory    [string] [default: "./"]\n      --compose_file_name  Compose file for docker-compose\n                                        [string] [default: "docker-compose.yml"]\n      --silent             Silence output to terminal                  [boolean]\n      --verbose, --debug   Show more output to terminal                [boolean]\n  -p, --provider           Specify an ipfs provider: "dappnode" (default), "infu\n                           ra", "localhost:5002"           [default: "dappnode"]\n  -t, --timeout            Overrides default build timeout: "15h", "20min 15s",\n                           "5000". Specs npmjs.com/package/timestring\n                                                              [default: "60min"]\n      --skip_save          For testing only: do not save image to disk [boolean]\n      --skip_upload        For testing only: do not upload image from disk\n                                                                       [boolean]\n  -h, --help               Show help                                   [boolean]\n  -v, --version            Show version number                         [boolean]\n')),(0,a.kt)("h2",{id:"publish"},(0,a.kt)("inlineCode",{parentName:"h2"},"publish")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," command is used to publish a new version of the DNP in an Aragon Package Manager Repository. To use the ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," command, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx @dappnode/dappnodesdk publish\n")),(0,a.kt)("p",null,"The following are all the possible ",(0,a.kt)("inlineCode",{parentName:"p"},"publish")," options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Options:"},'      --dir, --directory      Change the base directory [string] [default: "./"]\n      --compose_file_name     Compose file for docker-compose\n                                        [string] [default: "docker-compose.yml"]\n      --silent                Silence output to terminal               [boolean]\n      --verbose, --debug      Show more output to terminal             [boolean]\n      --type                  Semver update type. Can also be provided with env\n                              RELEASE_TYPE=[type] or via TRAVIS_TAG=release (pat\n                              ch), TRAVIS_TAG=release/[type]\n                                   [string] [choices: "major", "minor", "patch"]\n  -p, --provider              Specify a provider (overwrittes content_provider a\n                              nd eth_provider): "dappnode" (default), "infura",\n                              "http://localhost:8545"                   [string]\n      --eth_provider          Specify an eth provider: "dappnode" (default), "in\n                              fura", "localhost:8545"\n                                                  [string] [default: "dappnode"]\n      --content_provider      Specify an ipfs provider: "dappnode" (default), "i\n                              nfura", "http://localhost:5001"\n                                                  [string] [default: "dappnode"]\n      --upload_to             Specify where to upload the release\n                                    [choices: "ipfs", "swarm"] [default: "ipfs"]\n  -a, --developer_address     If there is no existing repo for this DNP the publ\n                              ish command needs a developer address. If it is no\n                              t provided as an option a prompt will request it\n                                                                        [string]\n  -t, --timeout               Overrides default build timeout: "15h", "20min 15s\n                              ", "5000". Specs npmjs.com/package/timestring\n                                                                        [string]\n      --github_release        Publish the release on the Github repo specified i\n                              n the manifest. Requires a GITHUB_TOKEN ENV to aut\n                              henticate                                [boolean]\n      --dappnode_team_preset  Specific set of options used for internal DAppNode\n                               releases. Caution: options may change without not\n                              ice.                                     [boolean]\n  -h, --help                  Show help                                [boolean]\n  -v, --version               Show version number                      [boolean]```\n')))}u.isMDXComponent=!0}}]);