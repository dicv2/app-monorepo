!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="3dda7cac-1266-4ec2-a74b-61a64bbdf775",e._sentryDebugIdIdentifier="sentry-dbid-3dda7cac-1266-4ec2-a74b-61a64bbdf775")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[89330],{304695:(e,t,n)=>{n.d(t,{V:()=>NetworksFilterItem});var r=n(324586),o=n(839850),a=n(17617),c=n(490343),s=n(831085),i=["networkImageUri","networkName","isSelected","tooltipContent","disabled"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function NetworksFilterItem(e){var{networkImageUri:t,networkName:n,isSelected:r,tooltipContent:d,disabled:u}=e,l=(0,o.A)(e,i),p=(0,s.jsxs)(c.XStack,_objectSpread(_objectSpread(_objectSpread(_objectSpread({justifyContent:"center",px:"$3",py:"$1.5",borderRadius:"$2",userSelect:"none",borderWidth:a.A.hairlineWidth,borderColor:r?"$borderActive":"$border"},!r&&!u&&{focusable:!0,hoverStyle:{bg:"$bgStrongHover"},pressStyle:{bg:"$bgStrongActive"},focusVisibleStyle:{outlineWidth:2,outlineStyle:"solid",outlineColor:"$focusRing"}}),u&&{opacity:.5}),l),{},{children:[t?(0,s.jsx)(c.Image,{height:"$6",width:"$6",borderRadius:"$full",$gtMd:{height:"$5",width:"$5"},children:(0,s.jsx)(c.Image.Source,{source:{uri:t}})}):null,n?(0,s.jsx)(c.SizableText,{numberOfLines:1,color:r?"$text":"$textSubdued",size:"$bodyLgMedium",$gtMd:{size:"$bodyMdMedium"},children:n}):null]}));return d?(0,s.jsx)(c.Tooltip,{renderContent:d,placement:"top",renderTrigger:p,"data-sentry-element":"Tooltip","data-sentry-component":"NetworksFilterItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/NetworksFilterItem/index.tsx"}):p}},771821:(e,t,n)=>{n.d(t,{v:()=>TokenListItem});var r=n(324586),o=n(839850),a=n(490343),c=n(791088),s=n(491180),i=n(391944),d=n(831085),u=["tokenImageSrc","networkImageSrc","tokenName","isSearch","tokenSymbol","tokenContrastAddress","balance","valueProps","disabled","titleMatchStr","moreComponent"];function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function TokenListItem(e){var t,{tokenImageSrc:n,networkImageSrc:r,tokenName:l,isSearch:p,tokenSymbol:k,tokenContrastAddress:f,balance:w,valueProps:m,disabled:S,titleMatchStr:b,moreComponent:I}=e,y=(0,o.A)(e,u);return(0,d.jsxs)(c.c,_objectSpread(_objectSpread(_objectSpread({userSelect:"none"},p&&{$md:{alignItems:"flex-start"}}),y),{},{"data-sentry-element":"ListItem","data-sentry-component":"TokenListItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/TokenListItem/index.tsx",children:[(0,d.jsx)(a.YStack,_objectSpread(_objectSpread({},S&&{opacity:.5}),{},{"data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/TokenListItem/index.tsx",children:(0,d.jsx)(i.o,{tokenImageUri:n,networkImageUri:r,"data-sentry-element":"Token","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/TokenListItem/index.tsx"})})),(0,d.jsx)(c.c.Text,_objectSpread(_objectSpread({},S&&{opacity:.5}),{},{flex:1,primary:k,primaryMatch:b,primaryTextProps:{numberOfLines:1},secondary:p?(0,d.jsxs)(a.Stack,{gap:"$0.5",$gtMd:{flexDirection:"row",gap:"$1"},children:[(0,d.jsx)(a.SizableText,{numberOfLines:1,color:"$textSubdued",size:"$bodyMd",children:l}),(0,d.jsx)(a.SizableText,{color:"$textDisabled",size:"$bodyMd",children:s.A.shortenAddress({address:f,leadingLength:8,trailingLength:6})})]}):null!=l?l:"","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/TokenListItem/index.tsx"})),(0,d.jsx)(c.c.Text,_objectSpread(_objectSpread({},S&&{opacity:.5}),{},{align:"right",primary:(0,d.jsx)(a.NumberSizeableText,{textAlign:"right",color:"$text",formatter:"balance",size:"$bodyLgMedium",children:w}),secondary:m?.value?(0,d.jsx)(a.NumberSizeableText,{textAlign:"right",size:"$bodyMd",formatter:"value",color:"$textSubdued",formatterOptions:{currency:null!=(t=m?.currency)?t:"$"},children:m.value}):null,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/components/TokenListItem/index.tsx"})),I]}))}},82506:(e,t,n)=>{n.d(t,{d:()=>useDebounce});var r=n(578104);function useDebounce(e,t,n){var[o]=(0,r.d7)(e,t,n);return o}},20322:(e,t,n)=>{n.d(t,{Gr:()=>useSwapRecipientAddressInfo,jA:()=>useSwapFromAccountNetworkSync,zf:()=>useSwapAddressInfo});var r=n(324586),o=n(586330),a=n(712784),c=n.n(a),s=n(514041),i=n(490343),d=n(153763),u=n(471169),l=n(193068),p=n(491180),k=n(619390),f=n(547669),w=n(317522),m=n(911998),S=n(162616),b=n(325529);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function useSwapFromAccountNetworkSync(){var{updateSelectedAccountNetwork:e}=(0,S.z$)().current,[t]=(0,b.NE)(),{activeAccount:n}=(0,S.LH)({num:1}),{activeAccount:r}=(0,S.LH)({num:0}),[a,p]=(0,b.rv)(),[k]=(0,b.dF)(),[,f]=(0,u.useSettingsAtom)(),[m]=(0,b.Q8)(),I=(0,s.useRef)(),y=(0,s.useRef)(),g=(0,s.useRef)(),h=(0,s.useRef)(a),v=(0,s.useRef)(n),A=(0,s.useRef)(r);v.current!==n&&(v.current=n),A.current!==r&&(A.current=r),I.current!==t&&(I.current=t),y.current!==m&&(y.current=m),h.current!==a&&(h.current=a),g.current!==k&&(g.current=k);var T,j=(0,s.useCallback)(c()((0,o.A)((function*(){I.current&&(yield e({num:0,networkId:I.current?.networkId})),y.current&&(yield e({num:1,networkId:y.current?.networkId})),I.current&&y.current&&(h.current?.networkId&&y.current?.networkId!==h.current?.networkId||!h.current?.networkId&&!v.current?.account&&v.current?.wallet||!1===g.current||!h.current.address&&v.current.account?.id!==A.current.account?.id)&&(f((function(e){return _objectSpread(_objectSpread({},e),{},{swapToAnotherAccountSwitchOn:!1})})),p((function(e){return _objectSpread(_objectSpread({},e),{},{address:void 0})})),setTimeout((function(){y.current?.networkId&&v.current.network?.id&&y.current?.networkId!==v.current.network.id&&e({num:1,networkId:y.current?.networkId})}),500))})),100),[f,e]),x=(0,i.usePageType)();(0,w.A)(l.V4.Swap,(T=(0,o.A)((function*(e,t){if(x!==i.EPageType.modal){if(t)return;e&&(yield j())}})),function(e,t){return T.apply(this,arguments)})),(0,s.useEffect)((function(){x!==i.EPageType.modal&&(0,o.A)((function*(){yield j()}))()}),[j,t?.networkId,t?.contractAddress,m?.networkId,m?.contractAddress,k,x]);var O=(0,d.E)();(0,s.useEffect)((function(){x===i.EPageType.modal&&O&&(0,o.A)((function*(){yield j()}))()}),[j,O,x,t?.networkId,t?.contractAddress,m?.networkId,m?.contractAddress,k])}function useSwapAddressInfo(e){var{activeAccount:t}=(0,S.LH)({num:e===k.En.FROM?0:1}),[{swapToAnotherAccountSwitchOn:n}]=(0,u.useSettingsAtom)(),[r]=(0,b.rv)();return(0,s.useMemo)((function(){var o={networkId:void 0,address:void 0,accountInfo:void 0,activeAccount:void 0};return e===k.En.TO&&n&&r.address&&r.networkId&&t&&t.network?.id===r.networkId?_objectSpread(_objectSpread({},o),{},{address:r.address,networkId:r.networkId,accountInfo:r.accountInfo,activeAccount:_objectSpread({},t)}):t?_objectSpread(_objectSpread({},o),{},{address:t.account?.address,networkId:t.network?.id,accountInfo:_objectSpread({},t),activeAccount:_objectSpread({},t)}):o}),[e,n,r,t])}function useSwapRecipientAddressInfo(e){var t=useSwapAddressInfo(k.En.FROM),n=useSwapAddressInfo(k.En.TO),[r]=(0,b.Zr)(),[{swapToAnotherAccountSwitchOn:a}]=(0,u.useSettingsAtom)(),[c]=(0,b.rv)(),s=(0,m.yk)((0,o.A)((function*(){return e?n.networkId&&t.accountInfo?.account?.id&&t.accountInfo?.indexedAccount?.id?yield f.A.serviceStaking.getEarnAccount({accountId:t.accountInfo?.account?.id,networkId:n.networkId,indexedAccountId:t.accountInfo?.indexedAccount?.id}):void 0:null})),[e,n.networkId,t.accountInfo?.account?.id,t.accountInfo?.indexedAccount?.id],{}),i=(0,m.yk)((0,o.A)((function*(){if(c.networkId&&c.address){var e=yield f.A.serviceAccount.getAccountNameFromAddress({networkId:c.networkId,address:c.address});if(e.length>0)return e[0]}})),[c.address,c.networkId],{});if(n.address===c.address&&a&&s?.result?.accountAddress&&s?.result?.accountAddress!==c.address&&c.networkId===r?.toTokenInfo.networkId)return{accountInfo:c.accountInfo?.account?.address===c.address?{walletName:c.accountInfo?.wallet?.name,accountName:c.accountInfo?.accountName,accountId:c.accountInfo?.account?.id}:i.result,showAddress:p.A.shortenAddress({address:c.address,leadingLength:6,trailingLength:6}),isExtAccount:c.accountInfo?.account?.address!==c.address&&!i.result}}},866063:(e,t,n)=>{n.d(t,{FI:()=>useSwapInit,GM:()=>useSwapTokenList,ZF:()=>useSwapSelectedTokenInfo});var r=n(324586),o=n(503668),a=n.n(o),c=n(586330),s=n(514041),i=n(241440),d=n(490343),u=n(153763),l=n(471169),p=n(625931),k=n(22937),f=n(193068),w=n(553083),m=n(734818),S=n(58546),b=n(619390),I=n(547669),y=n(317522),g=n(162616),h=n(325529),v=n(20322);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function useSwapInit(e){var[t,n]=(0,h.ZM)(),[r,o]=(0,h.NE)(),[i,u]=(0,h.Q8)(),[,k]=(0,l.useInAppNotificationAtom)(),{syncNetworksSort:m}=(0,h.eR)().current,A=(0,v.zf)(b.En.FROM),{updateSelectedAccountNetwork:T}=(0,g.z$)().current,[j,x]=(0,s.useState)(!0),[O,N]=(0,s.useState)(!1),P=(0,s.useRef)(),[M]=(0,h.sK)(),{swapTypeSwitchAction:$}=(0,h.eR)().current;P.current!==A&&(P.current=A);var E=(0,s.useRef)([]);E.current!==t&&(E.current=t);var _=(0,s.useRef)();_.current!==r&&(_.current=r);var R=(0,s.useRef)();R.current!==i&&(R.current=i);var C=(0,s.useCallback)((0,c.A)((function*(){if(t.length)x(!1);else{var e=yield I.A.simpleDb.swapNetworksSort.getRawData();if(e?.data?.length){var r=e?.data.every((function(e){return a()(e.supportCrossChainSwap)&&a()(e.supportSingleSwap)}));r?(e=null,I.A.simpleDb.swapNetworksSort.setRawData({data:[]})):(n(e.data),x(!1))}var o=[],c=yield I.A.serviceSwap.fetchSwapNetworks();if(o=[...c],e?.data?.length&&c?.length){var s=e.data;o=s.filter((function(e){return c.find((function(t){return t.networkId===e.networkId}))})).map((function(e){var t=c.find((function(t){return t.networkId===e.networkId}));return _objectSpread(_objectSpread({},e),t)})).concat(c.filter((function(e){return!s.find((function(t){return t.networkId===e.networkId}))})))}o.length&&(yield I.A.simpleDb.swapNetworksSort.setRawData({data:o}),e?.data?.length&&e?.data?.length===o.length||(n(o),x(!1)))}})),[n,t.length]),L=(0,s.useCallback)((function(n,r){var o=t.find((function(e){return e.networkId===n.networkId})),a=[];if(o&&(o.supportSingleSwap&&(a=[...a,b.qX.SWAP]),o.supportCrossChainSwap&&(a=[...a,b.qX.BRIDGE])),!e?.swapTabSwitchType&&r&&a.length>0&&!a.includes(M)){var c,s=a.find((function(e){return e!==M}));if(s)$(s,null!=(c=P.current?.networkId)?c:_.current?.networkId)}return a}),[e?.swapTabSwitchType,t,M,$]),D=(0,s.useCallback)((0,c.A)((function*(){if(!_.current&&!R.current)if(e?.importFromToken&&E.current.find((function(t){return t.networkId===e?.importFromToken?.networkId}))||e?.importToToken&&E.current.find((function(t){return t.networkId===e?.importToToken?.networkId}))){var t,n;if(e?.importFromToken){var r=L(e?.importFromToken);e?.swapTabSwitchType&&r.includes(e?.swapTabSwitchType)&&o(e?.importFromToken)}if(e?.importToToken){var c=L(e?.importToToken);e?.swapTabSwitchType&&c.includes(e?.swapTabSwitchType)&&u(e?.importToToken)}if(e?.importFromToken&&!e?.importToToken&&!e?.importFromToken?.isNative){var s=S.sI[e?.importFromToken.networkId];if(s){var i=L(s);e?.swapTabSwitchType&&i.includes(e?.swapTabSwitchType)&&u(s)}}m(null!=(t=null!=(n=e?.importFromToken?.networkId)?n:e?.importToToken?.networkId)?t:(0,p.V)().onekeyall)}else if(P.current?.accountInfo?.ready&&P.current?.networkId&&E.current.length&&(!e?.importNetworkId||!P.current?.networkId||e?.importNetworkId===P.current?.networkId)&&!O){var d=w.Ay.isAllNetwork({networkId:P.current?.networkId}),l=E.current.find((function(e){return e.networkId===P.current?.networkId})),k=l,f=l?.networkId;if(d){f=(0,p.V)().onekeyall;var b=S.TW[f]?.fromToken;k=E.current.find((function(e){return e.networkId===b?.networkId}))}if(k&&f&&(!a()(S.TW[f]?.fromToken)||!a()(S.TW[f]?.toToken))){var I=S.TW[f]?.fromToken,y=S.TW[f]?.toToken;I&&(o(_objectSpread(_objectSpread({},I),{},{networkLogoURI:d?I.networkLogoURI:k?.logoURI})),m(I.networkId)),y&&(u(_objectSpread(_objectSpread({},y),{},{networkLogoURI:d?y.networkLogoURI:k?.logoURI})),m(y.networkId)),I&&L(I,!0)}}})),[e?.importFromToken,e?.importToToken,e?.importNetworkId,e?.swapTabSwitchType,O,m,L,o,u]);(0,s.useEffect)((function(){(0,c.A)((function*(){yield I.A.serviceSwap.swapRecentTokenSync()}))()}),[k]),(0,s.useEffect)((function(){(0,c.A)((function*(){yield C()}))()}),[C,t.length]),(0,s.useEffect)((function(){(0,c.A)((function*(){e?.importNetworkId&&P.current?.networkId&&e?.importNetworkId!==P.current.networkId&&(yield T({num:0,networkId:e?.importNetworkId}))}))()}),[e?.importNetworkId,T]),(0,s.useEffect)((function(){(0,c.A)((function*(){yield D()}))()}),[A.accountInfo?.ready,t.length,A.networkId,e?.importFromToken,e?.importToToken,e?.importNetworkId]);var F=(0,d.usePageType)();return(0,y.A)(f.V4.Swap,(function(e,t){F!==d.EPageType.modal&&e&&N(!!t)})),{fetchLoading:j}}function useSwapTokenList(e,t,n){var[r,o]=(0,s.useState)([]),[{tokenCatch:a}]=(0,h.PQ)(),[d]=(0,h.Yb)(),[u,l]=(0,s.useState)([]),[p]=(0,h.ZM)(),[f]=(0,h.qv)(),{tokenListFetchAction:S,swapLoadAllNetworkTokenList:b}=(0,h.eR)().current,y=(0,v.zf)(e),[g]=(0,h.Hb)();(0,s.useEffect)((function(){(0,c.A)((function*(){var e,{swapSupportAccounts:t}=yield I.A.serviceSwap.getSupportSwapAllAccounts({indexedAccountId:y?.accountInfo?.indexedAccount?.id,otherWalletTypeAccountId:y?.accountInfo?.indexedAccount?.id?void 0:null!=(e=y?.accountInfo?.account?.id)?e:y?.accountInfo?.dbAccount?.id,swapSupportNetworks:p});l(t)}))()}),[y?.accountInfo?.account?.id,y?.accountInfo?.dbAccount?.id,y?.accountInfo?.indexedAccount?.id,p]);var A=(0,s.useMemo)((function(){var e=u.find((function(e){return e.networkId===t}));return y.networkId===t?{networkId:t,keywords:n,accountAddress:y?.address,accountNetworkId:y?.networkId,accountId:y?.accountInfo?.account?.id}:{networkId:t,keywords:n,accountAddress:e?.apiAddress,accountNetworkId:e?.networkId,accountId:e?.accountId}}),[t,y.networkId,y?.address,y?.accountInfo?.account?.id,u,n]),T=(0,s.useMemo)((function(){var e,t,n;return d[null!=(e=null!=(t=null!=(n=y?.accountInfo?.indexedAccount?.id)?n:y?.accountInfo?.account?.id)?t:y?.accountInfo?.dbAccount?.id)?e:"noAccountId"]}),[d,y?.accountInfo?.indexedAccount?.id,y?.accountInfo?.account?.id,y?.accountInfo?.dbAccount?.id]),j=(0,s.useCallback)((function(e){var t=e.filter((function(e){var t,n=new i.A(null!=(t=e.price)?t:"0");return!n.isNaN()&&!n.isZero()}))?.sort((function(e,t){var n,r,o=new i.A(null!=(n=e.fiatValue)?n:"0");return new i.A(null!=(r=t.fiatValue)?r:"0").comparedTo(o)})),n=e.filter((function(e){var t,n=new i.A(null!=(t=e.price)?t:"0");return n.isNaN()||n.isZero()}))?.sort((function(e,t){var n,r,o=new i.A(null!=(n=e.fiatValue)?n:"0");return new i.A(null!=(r=t.fiatValue)?r:"0").comparedTo(o)}));return[...t,...n]}),[]),x=(0,s.useCallback)((function({swapAllNetRecommend:e,swapSearchTokens:t}){var n,r;if(e?.length&&!T)return[];var o=null!=(n=T?.map((function(e){var t=p.find((function(t){return t.networkId===e.networkId}));return t?_objectSpread(_objectSpread({},e),{},{networkLogoURI:t.logoURI}):e}))?.filter((function(e){return f.find((function(t){return t.networkId===e.networkId}))})))?n:[],a=null!=(r=o?.filter((function(e){var t,n=new i.A(null!=(t=e?.balanceParsed)?t:"0");return!n.isNaN()&&!n.isZero()})))?r:[];if(e){var c,s=null!=(c=e?.filter((function(e){return!a?.find((function(t){return(0,m.BQ)({token1:{networkId:t?.networkId,contractAddress:t?.contractAddress},token2:{networkId:e?.networkId,contractAddress:e?.contractAddress}})}))}))?.filter((function(e){return f.find((function(t){return t.networkId===e.networkId}))})))?c:[],d=[...a,...s];return j(null!=d?d:[])}if(t){var u=t.map((function(e){if(f.find((function(t){return t.networkId===e.networkId}))){var t=a.find((function(t){return t?.contractAddress===e?.contractAddress&&t?.networkId===e?.networkId}));return t||e}})).filter((function(e){return e}));return j(null!=u?u:[])}return[]}),[j,T,p,f]),O=(0,k.bJ)(w.Ay.isAllNetwork({networkId:A.networkId})&&n?x({swapSearchTokens:a?.[JSON.stringify(A)]?.data||[]}):a?.[JSON.stringify(A)]?.data||[],{shouldSort:!1,keys:["symbol","contractAddress"]}),N=(0,s.useRef)(O);return N.current!==O&&(N.current=O),(0,s.useEffect)((function(){var e;A.networkId&&!n&&w.Ay.isAllNetwork({networkId:A.networkId})&&b(y?.accountInfo?.indexedAccount?.id,y?.accountInfo?.indexedAccount?.id?void 0:null!=(e=y?.accountInfo?.account?.id)?e:y?.accountInfo?.dbAccount?.id);S(A)}),[y?.accountInfo?.account?.id,y?.accountInfo?.dbAccount?.id,y?.accountInfo?.indexedAccount?.id,b,A,S,n]),(0,s.useEffect)((function(){n&&N.current?o(N.current.search(n)):o(w.Ay.isAllNetwork({networkId:A.networkId})?x({swapAllNetRecommend:a?.[JSON.stringify(A)]?.data||[]}):a?.[JSON.stringify(A)]?.data||[])}),[a,A,t,n,x]),{fetchLoading:g&&0===r.length||w.Ay.isAllNetwork({networkId:A.networkId})&&!T,currentTokens:r}}function useSwapSelectedTokenInfo({token:e,type:t}){var n=(0,v.zf)(b.En.FROM),[r,o]=(0,s.useState)(0),[{swapHistoryPendingList:a}]=(0,l.useInAppNotificationAtom)(),{loadSwapSelectTokenDetail:c}=(0,h.eR)().current,i=(0,s.useRef)(a);i.current!==a&&(i.current=a);var p=(0,s.useRef)(r);p.current!==r&&(p.current=r);var k=(0,s.useRef)(n);k.current!==n&&(k.current=n);var w=(0,u.E)(),m=(0,s.useRef)(w);m.current!==w&&(m.current=w),(0,s.useEffect)((function(){if(m.current&&a.length){var e=a.filter((function(e){return e.status===b.lr.SUCCESS})).length;e>p.current&&(c(t,k.current,!0),o(e))}}),[c,a,t]),(0,s.useEffect)((function(){c(t,k.current,!e?.reservationValue&&e?.isNative)}),[t,n,e?.networkId,e?.contractAddress,c,e?.reservationValue,e?.isNative]);var S=(0,d.usePageType)();(0,y.A)(f.V4.Swap,(function(e,n){if(S!==d.EPageType.modal&&e&&!n&&i.current.length){var r=i.current.filter((function(e){return e.status===b.lr.SUCCESS})).length;r>p.current&&(c(t,k.current,!0),o(r))}}))}},309008:(e,t,n)=>{n.d(t,{o:()=>u});var r=n(324586),o=n(514041),a=n(325529),c=n(2577),s=n(597102),i=n(829561),d=n(831085);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=(0,o.memo)((function(e){var{children:t,storeName:n}=e,r=(0,i.x6)(n),o=c.A.getOrCreateStore(r);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.H,_objectSpread({},r)),(0,d.jsx)(a.BY,{store:o,children:t})]})}));u.displayName="SwapProviderMirror"},89330:(e,t,n)=>{n.r(t),n.d(t,{default:()=>SwapTokenSelectModal});var r=n(324586),o=n(586330),a=n(514041),c=n(654266),s=n(241440),i=n(908867),d=n(490343),u=n(547669),l=n(325809),p=n(791088),k=n(771821),f=n(498356),w=n(82506),m=n(162616),S=n(325529),b=n(471169),I=n(334439),y=n(663522),g=n(628380),h=n(491180),v=n(117746),A=n(734818),T=n(714191),j=n(58546),x=n(619390),O=n(885127),N=n(812715),P=n(304695),M=n(831085);const $=(0,a.memo)((function({networks:e,selectedNetwork:t,onSelectNetwork:n,disableMoreNetworks:r,disableNetworks:o,moreNetworksCount:c,onMoreNetwork:s}){var{width:u}=(0,N.A)(),l=(0,i.A)(),p=u>380,k=(0,a.useMemo)((function(){return p?e:e.slice(0,4)}),[e,p]);return(0,M.jsxs)(d.XStack,{px:"$5",pt:"$1",pb:"$3",gap:"$2","data-sentry-element":"XStack","data-sentry-component":"SwapNetworkToggleGroup","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/components/SwapNetworkToggleGroup.tsx",children:[k.map((function(e){return(0,M.jsx)(P.V,{disabled:Boolean(o?.includes(e.networkId)),networkImageUri:e.logoURI,tooltipContent:e.isAllNetworks?l.formatMessage({id:I.ETranslations.global_all_networks}):e.name,isSelected:e?.networkId===t?.networkId,onPress:o?.includes(e.networkId)?void 0:function(){n(e)}},e.networkId)})),c&&c>0?(0,M.jsx)(P.V,{disabled:r,networkName:`${c}+`,flex:1,onPress:r?void 0:s}):null]})}));var E=n(17617);const _=(0,a.memo)((function({onSelectToken:e,selectedToken:t,tokens:n}){return(0,M.jsx)(d.XStack,{pt:"$1",pb:"$3",gap:"$1.5",flexWrap:"wrap","data-sentry-element":"XStack","data-sentry-component":"SwapPopularTokenGroup","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/components/SwapPopularTokenGroup.tsx",children:n.map((function(n){return(0,M.jsxs)(d.XStack,{role:"button",userSelect:"none",alignItems:"center",px:"$1.5",py:"$1",bg:"$bg",borderRadius:"$4",borderWidth:E.A.hairlineWidth,borderColor:"$borderSubdued",hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},focusable:!0,focusVisibleStyle:{outlineColor:"$focusRing",outlineStyle:"solid",outlineWidth:2,outlineOffset:2},disabled:!!(0,A.BQ)({token1:t,token2:n}),onPress:function(){e(n)},disabledStyle:{opacity:.5},children:[(0,M.jsx)(d.Image,{height:"$4.5",width:"$4.5",borderRadius:"$full",children:(0,M.jsx)(d.Image.Source,{source:{uri:n.logoURI}})}),(0,M.jsx)(d.SizableText,{pl:"$1",size:"$bodyLgMedium",children:n.symbol})]},n.contractAddress)}))})}));var R=n(20322),C=n(866063),L=n(309008);function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var SwapTokenSelectPage=function(){var e=(0,f.A)(),t=(0,c.lq)(),n=(0,a.useMemo)((function(){var e;return null!=(e=t.params?.type)?e:x.En.FROM}),[t.params?.type]),r=(0,i.A)(),[l,T]=(0,a.useState)(""),N=(0,w.d)(l,500),[P]=(0,S.qv)(),[E]=(0,S.qv)(),[L]=(0,S.NE)(),[D]=(0,S.sK)(),F=(0,R.zf)(x.En.FROM),z=(0,R.zf)(x.En.TO),[U]=(0,S.Q8)(),[V]=(0,b.useSettingsPersistAtom)(),{selectFromToken:K,selectToToken:W,syncNetworksSort:B}=(0,S.eR)().current,{updateSelectedAccountNetwork:X}=(0,m.z$)().current,q=(0,a.useCallback)((function(){if(n===x.En.FROM){var e,t;if(L?.networkId)return null!=(e=E.find((function(e){return e.networkId===L.networkId})))?e:E?.[0];if(U?.networkId&&D===x.qX.SWAP)return null!=(t=E.find((function(e){return e.networkId===U.networkId})))?t:E?.[0]}else{var r,o;if(U?.networkId)return null!=(r=E.find((function(e){return e.networkId===U.networkId})))?r:E?.[0];if(L?.networkId&&D===x.qX.SWAP)return null!=(o=E.find((function(e){return e.networkId===L.networkId})))?o:E?.[0]}return E?.[0]}),[L?.networkId,E,D,U?.networkId,n]),[Z,G]=(0,a.useState)(q),Y=(0,a.useRef)(null);(0,a.useEffect)((function(){var e=n===x.En.FROM?F.networkId:z.networkId;Z?.networkId&&Z?.networkId!==e&&X({num:n===x.En.FROM?0:1,networkId:Z?.networkId})}),[]);var H,Q,{fetchLoading:J,currentTokens:ee}=(0,C.GM)(n,Z?.networkId,N),te=(0,a.useMemo)((function(){return ee.findIndex((function(e){var t=e.item?e.item:e;return!t.price||new s.A(t.price).isZero()}))}),[ee]),ne=(0,a.useCallback)((H=(0,o.A)((function*(e){var t=!e.isPopular&&(!e.price||new s.A(e.price).isZero()||e.riskLevel===x.eU.SPAM||e.riskLevel===x.eU.MALICIOUS);return t?!!V.tokenRiskReminder&&!(yield u.A.serviceSetting.checkConfirmedRiskToken(`${e.networkId}_${e.contractAddress}`)):t})),function(e){return H.apply(this,arguments)}),[V.tokenRiskReminder]),re=(0,a.useCallback)((function(t){e.popStack(),n===x.En.FROM?K(t):W(t)}),[e,K,W,n]),oe=(0,a.useCallback)((Q=(0,o.A)((function*(n){(yield ne(n))?e.push(g.u.TokenRiskReminder,{storeName:t.params.storeName,token:n,onConfirm:function(){re(n)}}):re(n)})),function(e){return Q.apply(this,arguments)}),[ne,e,t.params.storeName,re]),ae=(0,a.useCallback)((function(e){G(e),Y.current?.scrollToOffset({offset:0,animated:!1})}),[]),ce=(0,a.useCallback)((function(e){return(0,A.BQ)({token1:{networkId:n===x.En.FROM?U?.networkId:L?.networkId,contractAddress:n===x.En.FROM?U?.contractAddress:L?.contractAddress},token2:{networkId:e.networkId,contractAddress:e.contractAddress}})}),[L?.contractAddress,L?.networkId,U?.contractAddress,U?.networkId,n]),{md:se}=(0,d.useMedia)(),{copyText:ie}=(0,d.useClipboard)(),de=(0,a.useMemo)((function(){var e=[],t=E.map((function(e){return e.networkId}));return D===x.qX.SWAP&&n===x.En.TO&&L&&(e=t.filter((function(e){return e!==L?.networkId}))),n===x.En.TO&&L&&D===x.qX.BRIDGE&&(e=t.filter((function(e){return e===L?.networkId}))),n===x.En.FROM&&D===x.qX.BRIDGE&&U&&(e=t.filter((function(e){return e===U?.networkId}))),e}),[L,E,D,U,n]),ue=(0,a.useCallback)((function({item:e,index:t}){var n,a,c,i,l=e.item?e.item:e,f=new s.A(null!=(n=l.balanceParsed)?n:0),w=new s.A(null!=(a=l.fiatValue)?a:0),m=se?h.A.shortenAddress({address:l.contractAddress}):l.contractAddress,S={isSearch:!!N,tokenImageSrc:l.logoURI,tokenName:l.name,tokenSymbol:l.symbol,networkImageSrc:l.networkLogoURI,tokenContrastAddress:N?m:void 0,balance:f.isZero()?void 0:l.balanceParsed,valueProps:l.fiatValue&&!w.isZero()?{value:l.fiatValue,currency:V.currencyInfo.symbol}:void 0,onPress:ce(l)||de.includes(l.networkId)?void 0:function(){return oe(l)},disabled:ce(l)||de.includes(l.networkId),titleMatchStr:e.matches?.find((function(e){return"symbol"===e.key}))};return(0,M.jsxs)(M.Fragment,{children:[te===t?(0,M.jsx)(d.Stack,{pt:"$3",pb:"$2",children:(0,M.jsx)(d.Alert,{fullBleed:!0,type:"default",title:r.formatMessage({id:I.ETranslations.token_selector_unverified_token_warning}),icon:"InfoCircleOutline"})}):null,(0,M.jsx)(k.v,_objectSpread(_objectSpread({},S),{},{moreComponent:(0,M.jsx)(d.Stack,{alignSelf:"center",children:(0,M.jsx)(d.ActionList,{title:null!=(c=S.tokenSymbol)?c:"",disabled:l.isNative,renderTrigger:(0,M.jsx)(p.c.IconButton,{icon:"DotVerSolid",variant:"tertiary"}),items:[{icon:"Copy3Outline",label:r.formatMessage({id:I.ETranslations.global_copy_token_contract}),onPress:function(){ie(l.contractAddress)},disabled:l.isNative},{icon:"OpenOutline",label:r.formatMessage({id:I.ETranslations.swap_token_selector_contract_info}),onPress:(i=(0,o.A)((function*(){var e=yield u.A.serviceExplorer.buildExplorerUrl({networkId:l.networkId,type:"token",param:l.contractAddress});(0,v.Dr)(e)})),function onPress(){return i.apply(this,arguments)}),disabled:l.isNative}]})})}))]})}),[te,ie,de,r,se,oe,ce,N,V.currencyInfo.symbol]),le=(0,a.useMemo)((function(){var e=!1,t=E.length-de.length;return se?t<=j.ck&&(e=!0):t<=j.BT&&(e=!0),e}),[de.length,se,E.length]),pe=(0,a.useMemo)((function(){var e,t=[];return E&&E.length&&(se?(t=E.length>j.ck?E.slice(0,j.ck):E,e=E.length-j.ck>0?E.length-j.ck:void 0):(t=E.length>j.BT?E.slice(0,j.BT):E,e=E.length-j.BT>0?E.length-j.BT:void 0)),{swapNetworksCommon:t,swapNetworksMoreCount:e}}),[se,E]),ke=(0,O.A)(),{bottom:fe}=(0,d.useSafeAreaInsets)(),we=(0,a.useMemo)((function(){var e;return Z?.networkId&&null!=(e=j.hm[Z?.networkId])?e:[]}),[Z?.networkId]);return(0,M.jsxs)(d.Page,{skipLoading:y.Ay.isNativeIOS,safeAreaEnabled:!1,"data-sentry-element":"Page","data-sentry-component":"SwapTokenSelectPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:[(0,M.jsx)(d.Page.Header,{title:r.formatMessage({id:I.ETranslations.token_selector_title}),headerSearchBarOptions:{placeholder:r.formatMessage({id:I.ETranslations.token_selector_search_placeholder}),onChangeText:function({nativeEvent:e}){var t=e.text.trim();T(t)}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx"}),(0,M.jsxs)(d.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:[(0,M.jsxs)(d.XStack,{px:"$5",pb:"$2","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:[(0,M.jsx)(d.SizableText,{size:"$bodyMd",color:"$textSubdued",pr:"$2","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:`${r.formatMessage({id:I.ETranslations.token_selector_network})}`}),(0,M.jsx)(d.XStack,{"data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:(0,M.jsx)(d.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:Z?.isAllNetworks?r.formatMessage({id:I.ETranslations.global_all_networks}):Z?.name})})]}),(0,M.jsx)($,{onMoreNetwork:function(){ke({defaultNetworkId:Z?.networkId,networkIds:P.filter((function(e){return!e.isAllNetworks})).filter((function(e){return!de.includes(e.networkId)})).map((function(e){return e.networkId})),grouped:!1,onSelect:function(e){if(e){var t=P.find((function(t){return t.networkId===e.id}));t&&(ae(t),B(t.networkId))}}})},networks:pe.swapNetworksCommon,moreNetworksCount:pe.swapNetworksMoreCount,selectedNetwork:Z,disableNetworks:de,disableMoreNetworks:le,onSelectNetwork:ae,"data-sentry-element":"NetworkToggleGroup","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx"}),we.length>0&&!N?(0,M.jsx)(d.Divider,{mt:"$2"}):null,(0,M.jsx)(d.YStack,{flex:1,"data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:(0,M.jsx)(d.ListView,{ref:Y,data:ee,renderItem:ue,estimatedItemSize:60,ListHeaderComponent:we.length>0&&!N?(0,M.jsxs)(d.YStack,{px:"$5",pt:"$3",gap:"$2",children:[(0,M.jsx)(d.SizableText,{size:"$bodyMd",color:"$textSubdued",pr:"$2",children:`${r.formatMessage({id:I.ETranslations.swap_token_selector_popular_token})}`}),(0,M.jsx)(_,{onSelectToken:oe,selectedToken:n===x.En.FROM?U:L,tokens:we})]}):null,ListFooterComponent:(0,M.jsx)(d.Stack,{h:fe||"$2"}),ListEmptyComponent:J?(0,M.jsx)(M.Fragment,{children:Array.from({length:5}).map((function(e,t){return(0,M.jsxs)(p.c,{children:[(0,M.jsx)(d.Skeleton,{w:"$10",h:"$10",radius:"round"}),(0,M.jsxs)(d.YStack,{children:[(0,M.jsx)(d.YStack,{py:"$1",children:(0,M.jsx)(d.Skeleton,{h:"$4",w:"$32"})}),(0,M.jsx)(d.YStack,{py:"$1",children:(0,M.jsx)(d.Skeleton,{h:"$3",w:"$24"})})]})]},t)}))}):(0,M.jsx)(d.Empty,{icon:"SearchOutline",title:r.formatMessage({id:I.ETranslations.global_no_results}),description:r.formatMessage({id:I.ETranslations.token_no_search_results_desc})}),"data-sentry-element":"ListView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx"})})]})]})},SwapTokenSelectPageWithProvider=function(){var e=(0,c.lq)(),{storeName:t}=e.params;return(0,M.jsx)(L.o,{storeName:t,"data-sentry-element":"SwapProviderMirror","data-sentry-component":"SwapTokenSelectPageWithProvider","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:(0,M.jsx)(SwapTokenSelectPage,{"data-sentry-element":"SwapTokenSelectPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx"})})};function SwapTokenSelectModal(){return(0,M.jsx)(l.b8,{config:{sceneName:T.Zs.swap},enabledNum:[0,1],"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-component":"SwapTokenSelectModal","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx",children:(0,M.jsx)(SwapTokenSelectPageWithProvider,{"data-sentry-element":"SwapTokenSelectPageWithProvider","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Swap/pages/modal/SwapTokenSelectModal.tsx"})})}}}]);
//# sourceMappingURL=89330.01943a1dd9.chunk.js.map