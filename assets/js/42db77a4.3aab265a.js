"use strict";(self.webpackChunkd_app_node_docs=self.webpackChunkd_app_node_docs||[]).push([[7570],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),l=p(n),f=o,m=l["".concat(s,".").concat(f)]||l[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=l;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},1879:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],u={sidebar_position:1},s="Auto-Updates",p={unversionedId:"user-guide/ui/recommended-set-ups/auto-updates",id:"user-guide/ui/recommended-set-ups/auto-updates",title:"Auto-Updates",description:"We recommend having activated the auto-updates, at least for the System Packages. If you activate this option, when your DAppNode detect there is a new version, the update will be done after 24 hours later. This is valid for non-major updates, in which an admin intervention will always be needed.",source:"@site/docs/user-guide/ui/recommended-set-ups/auto-updates.md",sourceDirName:"user-guide/ui/recommended-set-ups",slug:"/user-guide/ui/recommended-set-ups/auto-updates",permalink:"/user-guide/ui/recommended-set-ups/auto-updates",draft:!1,editUrl:"https://github.com/dappnode/DAppNodeDocs/blob/master/docs/user-guide/ui/recommended-set-ups/auto-updates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Select a type of Client",permalink:"/user-guide/ui/initial-configurations/select-a-client"},next:{title:"Add VPN Devices",permalink:"/user-guide/ui/recommended-set-ups/add-vpn-devices"}},c={},d=[{value:"Turn off the auto-updates",id:"turn-off-the-auto-updates",level:2}],l={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auto-updates"},"Auto-Updates"),(0,a.kt)("p",null,"We recommend having activated the auto-updates, at least for the System Packages. If you activate this option, when your DAppNode detect there is a new version, the update will be done after 24 hours later. This is valid for non-major updates, in which an admin intervention will always be needed."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/system_view_auto-updates.png"})),(0,a.kt)("p",null,"The packages that are not system packages, like Prysm, geth, bitcoin, bee, etc. If there is an update of the official application, the package with this version will release for DAppNode several days later because we have to test this new version before releasing the package to the DAppStore."),(0,a.kt)("p",null,"You should go to System Auto updates and click on the button that is on the ",(0,a.kt)("strong",{parentName:"p"},"Enabled")," button on the right side."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/auto-updates-on.png"})),(0,a.kt)("h2",{id:"turn-off-the-auto-updates"},"Turn off the auto-updates"),(0,a.kt)("p",null,"In case you don't want to activate the auto-updates, you have to see something like:"),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"../../../../img/auto-updates-off.png"})))}f.isMDXComponent=!0}}]);