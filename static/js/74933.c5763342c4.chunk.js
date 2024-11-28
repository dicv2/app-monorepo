!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a101b26c-e448-4e90-a873-b5905ca2cc23",e._sentryDebugIdIdentifier="sentry-dbid-a101b26c-e448-4e90-a873-b5905ca2cc23")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[74933],{639563:(e,t,n)=>{n.d(t,{HM:()=>c,V8:()=>l,oV:()=>d});var r,a,o,s=n(586330),i=n(117746),p=n(547669),c=(r=(0,s.A)((function*({networkId:e,address:t}){if(e&&t){var n={networkId:e,param:t,type:"address"},r=yield p.A.serviceExplorer.buildExplorerUrl(n);(0,i.GE)(r)}})),function openExplorerAddressUrl(e){return r.apply(this,arguments)}),d=(a=(0,s.A)((function*({networkId:e,txid:t}){if(e&&t){var n={networkId:e,param:t,type:"transaction"},r=yield p.A.serviceExplorer.buildExplorerUrl(n);(0,i.GE)(r)}})),function openTransactionDetailsUrl(e){return a.apply(this,arguments)}),l=(o=(0,s.A)((function*({networkId:e,tokenAddress:t}){if(e&&t){var n={networkId:e,param:t,type:"token"},r=yield p.A.serviceExplorer.buildExplorerUrl(n);(0,i.GE)(r)}})),function openTokenDetailsUrl(e){return o.apply(this,arguments)})},74933:(e,t,n)=>{n.r(t),n.d(t,{default:()=>SignatureRecord});var r=n(514041),a=n(908867),o=n(490343),s=n(880590),i=n(885127),p=n(625931),c=n(334439),d=n(586330),l=n(17617),u=n(547669),m=n(491180),g=n(567807),k=n(324586),S=n(911998),y=n(553083),x=(0,r.createContext)({});function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(n),!0).forEach((function(t){(0,k.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var groupBy=function(e){var t=e.reduce((function(e,t){var n=(0,g.Yq)(new Date(t.createdAt),{hideTimeForever:!0});return e[n]||(e[n]=[]),e[n].push(t),e}),{});return Object.entries(t).map((function([e,t]){return{title:e,data:t}}))},useGetSignatureSections=function(e){var t=(0,r.useRef)([]),n=(0,r.useRef)(e),[a,o]=(0,r.useState)({offset:0,limit:10}),{networkId:s,searchContent:i}=(0,r.useContext)(x),{result:{sections:p,ending:c}}=(0,S.yk)((0,d.A)((function*(){var e=yield n.current({networkId:s,address:i,offset:a.offset,limit:a.limit}),r=!y.Ay.isAllNetwork({networkId:s})||i;return r||t.current.splice(a.offset,a.limit,...e),{sections:groupBy(r?e:t.current),ending:e.length<a.limit}})),[s,a.limit,a.offset,i],{initResult:{sections:[],ending:!1}}),l=(0,r.useCallback)((function(){c||o((function(e){return _objectSpread(_objectSpread({},e),{},{offset:e.offset+e.limit})}))}),[c]);return(0,r.useMemo)((function(){return{sections:p,onEndReached:l}}),[p,l])},w=n(831085),getConnectedSiteTitle=function(e){try{return new URL(e).host}catch{return e}},ConnectedSiteItem=function({item:e}){return(0,w.jsx)(o.Stack,{px:"$5",pb:"$3","data-sentry-element":"Stack","data-sentry-component":"ConnectedSiteItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:(0,w.jsxs)(o.YStack,{borderWidth:l.A.hairlineWidth,borderRadius:"$3",borderColor:"$borderSubdued",overflow:"hidden","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:[(0,w.jsx)(o.XStack,{justifyContent:"space-between",pt:"$3",px:"$3",pb:"$1","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:(0,w.jsx)(o.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:(0,g.fU)(new Date(e.createdAt),{hideSeconds:!0})})}),(0,w.jsxs)(o.XStack,{p:"$3",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:[(0,w.jsxs)(o.Image,{borderRadius:"$full",overflow:"hidden",width:40,height:40,mr:"$3","data-sentry-element":"Image","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:[(0,w.jsx)(o.Image.Source,{source:{uri:e.logo},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx"}),(0,w.jsx)(o.Image.Fallback,{alignItems:"center",justifyContent:"center",bg:"$gray5",delayMs:1e3,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:(0,w.jsx)(o.Icon,{size:40,name:"GlobusOutline",color:"$iconSubdued","data-sentry-element":"Icon","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx"})})]}),(0,w.jsx)(o.SizableText,{size:"$bodyLgMedium",numberOfLines:1,flexShrink:1,"data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:`${getConnectedSiteTitle(e.url)}`})]}),(0,w.jsx)(o.YStack,{p:"$3",backgroundColor:"$bgSubdued","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx",children:e.networkIds.map((function(t,n){return(0,w.jsxs)(o.XStack,{alignItems:"center",children:[(0,w.jsx)(o.Stack,{mr:"$2",children:(0,w.jsx)(s.um,{size:16,networkId:t})}),(0,w.jsxs)(o.SizableText,{color:"$textSubdued",size:"$bodySmMedium",children:[e.networks[n].name," • ",m.A.shortenAddress({address:e.addresses[n]})]})]},t)}))})]})})},ListEmptyComponent=function(){var e=(0,a.A)();return(0,w.jsx)(o.Empty,{title:e.formatMessage({id:c.ETranslations.settings_no_connected_sites}),description:e.formatMessage({id:c.ETranslations.settings_no_connected_sites_desc}),icon:"ClockAlertOutline","data-sentry-element":"Empty","data-sentry-component":"ListEmptyComponent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx"})},keyExtractor=function(e){var t=e?.createdAt,n=e?.url;return`${n}${t}`},ConnectedSites=function(){var e,{sections:t,onEndReached:n}=useGetSignatureSections((e=(0,d.A)((function*(e){return u.A.serviceSignature.getConnectedSites(e)})),function(t){return e.apply(this,arguments)}));return(0,w.jsx)(o.SectionList,{sections:t,estimatedItemSize:154,ItemSeparatorComponent:null,SectionSeparatorComponent:null,renderSectionHeader:function({section:e}){return(0,w.jsx)(o.SectionList.SectionHeader,{title:e.title})},keyExtractor,renderItem:function({item:e}){return(0,w.jsx)(ConnectedSiteItem,{item:e})},ListEmptyComponent,onEndReached:n,onEndReachedThreshold:.3,"data-sentry-element":"SectionList","data-sentry-component":"ConnectedSites","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/ConnectedSites.tsx"})},f=n(928557),SignText_ListEmptyComponent=function(){var e=(0,a.A)();return(0,w.jsx)(o.Empty,{title:e.formatMessage({id:c.ETranslations.settings_no_signed_text}),description:e.formatMessage({id:c.ETranslations.settings_no_signed_text_desc}),icon:"ClockAlertOutline","data-sentry-element":"Empty","data-sentry-component":"ListEmptyComponent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx"})},SignTextItem=function({item:e}){var{copyText:t}=(0,o.useClipboard)(),n=(0,r.useCallback)((function(){return t(e.message)}),[e.message,t]),a=(0,S.yk)((0,d.A)((function*(){if(e.network.impl!==f._x)return null;if("json"===e.contentType)try{var t=JSON.parse(e.message);if(t.primaryType)return t.primaryType}catch{return null}return null})),[e.contentType,e.message,e.network.impl]);return(0,w.jsx)(o.Stack,{px:"$5",pb:"$3","data-sentry-element":"Stack","data-sentry-component":"SignTextItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:(0,w.jsxs)(o.YStack,{borderWidth:l.A.hairlineWidth,borderRadius:"$3",borderColor:"$borderSubdued",overflow:"hidden","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:[(0,w.jsxs)(o.XStack,{justifyContent:"space-between",pt:"$3",px:"$3",pb:"$1","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:[(0,w.jsxs)(o.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:[(0,g.fU)(new Date(e.createdAt),{hideSeconds:!0})," •"," ",e.title]}),(0,w.jsx)(o.IconButton,{variant:"tertiary",icon:"Copy3Outline",size:"small",onPress:n,"data-sentry-element":"IconButton","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx"})]}),(0,w.jsx)(o.XStack,{justifyContent:"space-between",p:"$3","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:(0,w.jsx)(o.TextArea,{maxHeight:"$24",disabled:!0,editable:!1,userSelect:"none",value:"json"===e.contentType?JSON.stringify(JSON.parse(e.message),null,2):e.message,backgroundColor:"transparent",width:"100%",borderWidth:0,"data-sentry-element":"TextArea","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx"})}),(0,w.jsxs)(o.XStack,{p:"$3",alignItems:"center",justifyContent:"space-between","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:[(0,w.jsxs)(o.XStack,{backgroundColor:"$bgSubdued",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:[(0,w.jsx)(o.Stack,{mr:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:(0,w.jsx)(s.um,{size:16,networkId:e.networkId,"data-sentry-element":"NetworkAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx"})}),(0,w.jsxs)(o.SizableText,{color:"$textSubdued",size:"$bodySmMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx",children:[e.network.name," • ",m.A.shortenAddress({address:e.address})]})]}),a.result?(0,w.jsx)(o.Badge,{badgeType:"info",badgeSize:"sm",children:a.result}):null]})]})})},SignText_keyExtractor=function(e){var t=e?.createdAt;return String(t)},SignText=function(){var e,{sections:t,onEndReached:n}=useGetSignatureSections((e=(0,d.A)((function*(e){return u.A.serviceSignature.getSignedMessages(e)})),function(t){return e.apply(this,arguments)}));return(0,w.jsx)(o.SectionList,{sections:t,keyExtractor:SignText_keyExtractor,estimatedItemSize:191,ItemSeparatorComponent:null,SectionSeparatorComponent:null,renderSectionHeader:function({section:e}){return(0,w.jsx)(o.SectionList.SectionHeader,{title:e.title})},renderItem:function({item:e}){return(0,w.jsx)(SignTextItem,{item:e})},ListEmptyComponent:SignText_ListEmptyComponent,onEndReached:n,onEndReachedThreshold:.3,"data-sentry-element":"SectionList","data-sentry-component":"SignText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/SignText.tsx"})},h=n(391944),b=n(639563),T=n(598312),v=n(465732),SendTransactionItem=function({data:e}){var t=(0,a.A)();return(0,w.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%",alignItems:"center","data-sentry-element":"XStack","data-sentry-component":"SendTransactionItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.XStack,{alignItems:"center",pr:"$2","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(h.o,{size:"lg",tokenImageUri:e.token.logoURI,"data-sentry-element":"Token","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"}),(0,w.jsx)(o.SizableText,{ml:"$3",size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:t.formatMessage({id:c.ETranslations.global_send})})]}),(0,w.jsx)(o.XStack,{flex:1,justifyContent:"flex-end","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",numberOfLines:1,formatterOptions:{tokenSymbol:`${e.token.symbol.toUpperCase()}`,showPlusMinusSigns:!0},"data-sentry-element":"NumberSizeableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:`-${e.amount}`})})]})},ApproveTransactionItem=function({data:e}){var t=(0,a.A)();return(0,w.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%",alignItems:"center","data-sentry-element":"XStack","data-sentry-component":"ApproveTransactionItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.XStack,{alignItems:"center",pr:"$2","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(h.o,{size:"lg",tokenImageUri:e.token.logoURI,"data-sentry-element":"Token","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"}),(0,w.jsx)(o.SizableText,{ml:"$3",size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:t.formatMessage({id:c.ETranslations.global_approve})})]}),e.isUnlimited?(0,w.jsx)(o.SizableText,{size:"$bodyLgMedium",children:t.formatMessage({id:c.ETranslations.swap_page_provider_approve_amount_un_limit})}):(0,w.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",numberOfLines:1,flexShrink:1,formatterOptions:{tokenSymbol:`${e.token.symbol.toUpperCase()}`,showPlusMinusSigns:!0},children:`-${e.amount}`})]})},SwapTransactionItem=function({data:e}){var t=(0,a.A)();return(0,w.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%","data-sentry-element":"XStack","data-sentry-component":"SwapTransactionItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.XStack,{alignItems:"center",pr:"$2","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.Stack,{w:40,h:40,alignItems:"flex-end",justifyContent:"flex-end",mr:"$3","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(o.Stack,{position:"absolute",left:"$0",top:"$0","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(h.o,{size:"sm",tokenImageUri:e.fromToken.logoURI,"data-sentry-element":"Token","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})}),(0,w.jsx)(o.Stack,{borderWidth:2,borderColor:"$bgApp",borderRadius:"$full",zIndex:1,"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(h.o,{size:"sm",tokenImageUri:e.toToken.logoURI,"data-sentry-element":"Token","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})})]}),(0,w.jsx)(o.SizableText,{size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:t.formatMessage({id:c.ETranslations.global_swap})})]}),(0,w.jsxs)(o.YStack,{alignItems:"flex-end","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:e.toToken.symbol.toUpperCase(),showPlusMinusSigns:!0},"data-sentry-element":"NumberSizeableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:`+${e.toAmount}`}),(0,w.jsx)(o.NumberSizeableText,{size:"$bodyMd",color:"$textSubdued",formatter:"balance",formatterOptions:{tokenSymbol:e.fromToken.symbol.toUpperCase(),showPlusMinusSigns:!0},"data-sentry-element":"NumberSizeableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:`-${e.fromAmount}`})]})]})},EarnLidoTransactionItem=function({data:e}){var t,n=(0,T.w)(),r=e.receive?{data:e.receive,symbol:"+"}:void 0,a=e.send?{data:e.send,symbol:"-"}:void 0;return!r&&a&&(r=a,a=void 0),(0,w.jsxs)(o.XStack,{justifyContent:"space-between",w:"100%","data-sentry-element":"XStack","data-sentry-component":"EarnLidoTransactionItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.XStack,{alignItems:"center",pr:"$2","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(h.o,{size:"lg",tokenImageUri:null!=(t=r?.data?.token.logoURI)?t:a?.data?.token.logoURI,"data-sentry-element":"Token","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"}),(0,w.jsx)(o.SizableText,{ml:"$3",size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:n(e.label)})]}),(0,w.jsxs)(o.YStack,{alignItems:"flex-end",justifyContent:"center","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[r?(0,w.jsx)(o.NumberSizeableText,{size:"$bodyLgMedium",formatter:"balance",formatterOptions:{tokenSymbol:r.data.token.symbol,showPlusMinusSigns:!0},children:`${r.symbol}${r.data.amount}`}):null,a?(0,w.jsx)(o.NumberSizeableText,{size:"$bodyMd",formatter:"balance",color:"$textSubdued",formatterOptions:{tokenSymbol:a.data.token.symbol,showPlusMinusSigns:!0},children:`${a.symbol}${a.data.amount}`}):null]})]})},ContractInteractionTransactionItem=function(){var e=(0,a.A)();return(0,w.jsx)(o.XStack,{justifyContent:"space-between",w:"100%",alignItems:"center","data-sentry-element":"XStack","data-sentry-component":"ContractInteractionTransactionItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsxs)(o.XStack,{alignItems:"center",pr:"$2","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(o.Image,{borderRadius:"$full",overflow:"hidden",width:40,height:40,mr:"$3","data-sentry-element":"Image","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(o.Image.Fallback,{alignItems:"center",justifyContent:"center",bg:"$gray5","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(o.Icon,{size:40,name:"GlobusOutline",color:"$iconSubdued","data-sentry-element":"Icon","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})})}),(0,w.jsx)(o.SizableText,{size:"$bodyLgMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:e.formatMessage({id:c.ETranslations.transaction__contract_interaction})})]})})},TransactionData=function({data:e}){return e.type===v.w.SEND?(0,w.jsx)(SendTransactionItem,{data:e}):e.type===v.w.APPROVE?(0,w.jsx)(ApproveTransactionItem,{data:e}):e.type===v.w.SWAP?(0,w.jsx)(SwapTransactionItem,{data:e}):e.type===v.w.EARN?(0,w.jsx)(EarnLidoTransactionItem,{data:e}):e.type===v.w.CONTRACT_INTERACTION?(0,w.jsx)(ContractInteractionTransactionItem,{}):null},TransactionItem=function({item:e}){var t=e.network,n=e.vaultSettings,i=(0,a.A)(),p=(0,r.useCallback)((function(){e.hash?(0,b.oV)({networkId:t.id,txid:e.hash}):(0,b.HM)({networkId:t.id,address:e.address})}),[e,t]);return(0,w.jsx)(o.Stack,{px:"$5",pb:"$3","data-sentry-element":"Stack","data-sentry-component":"TransactionItem","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsxs)(o.YStack,{borderWidth:l.A.hairlineWidth,borderRadius:"$3",borderColor:"$borderSubdued",overflow:"hidden","data-sentry-element":"YStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.XStack,{justifyContent:"space-between",pt:"$3",px:"$3",pb:"$1","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsxs)(o.SizableText,{size:"$bodyMd","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,g.fU)(new Date(e.createdAt),{hideSeconds:!0})," • ",e.title]}),n.hideBlockExplorer?null:(0,w.jsx)(o.IconButton,{variant:"tertiary",title:e.hash?i.formatMessage({id:c.ETranslations.settings_view_transaction_in_explorer}):i.formatMessage({id:c.ETranslations.settings_view_address_in_explorer}),icon:e.hash?"OpenOutline":"GlobusOutline",size:"small",onPress:p})]}),(0,w.jsx)(o.XStack,{p:"$3","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(o.XStack,{h:44,width:"100%",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(TransactionData,{data:e.data,"data-sentry-element":"TransactionData","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})})}),(0,w.jsxs)(o.XStack,{p:"$3",backgroundColor:"$bgSubdued",alignItems:"center","data-sentry-element":"XStack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[(0,w.jsx)(o.Stack,{mr:"$2","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:(0,w.jsx)(s.um,{size:16,networkId:e.networkId,"data-sentry-element":"NetworkAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})}),(0,w.jsxs)(o.SizableText,{color:"$textSubdued",size:"$bodySmMedium","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx",children:[e.network.name," •"," ",m.A.shortenAddress({address:e.address})]})]})]})})},Transactions_ListEmptyComponent=function(){var e=(0,a.A)();return(0,w.jsx)(o.Empty,{title:e.formatMessage({id:c.ETranslations.settings_no_signed_transactions}),description:e.formatMessage({id:c.ETranslations.settings_no_signed_transactions_desc}),icon:"ClockAlertOutline","data-sentry-element":"Empty","data-sentry-component":"ListEmptyComponent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})},Transactions_keyExtractor=function(e){var t=e?.hash,n=e?.createdAt;return t||String(n)},Transactions=function(){var e,{sections:t,onEndReached:n}=useGetSignatureSections((e=(0,d.A)((function*(e){return u.A.serviceSignature.getSignedTransactions(e)})),function(t){return e.apply(this,arguments)}));return(0,w.jsx)(o.SectionList,{sections:t,estimatedItemSize:158,ItemSeparatorComponent:null,SectionSeparatorComponent:null,renderSectionHeader:function({section:e}){return(0,w.jsx)(o.SectionList.SectionHeader,{title:e.title})},keyExtractor:Transactions_keyExtractor,renderItem:function({item:e}){return(0,w.jsx)(TransactionItem,{item:e})},ListEmptyComponent:Transactions_ListEmptyComponent,onEndReached:n,onEndReachedThreshold:.3,"data-sentry-element":"SectionList","data-sentry-component":"Transactions","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/Transactions.tsx"})},j={paddingTop:10},ListHeaderComponent=function(){var e=(0,a.A)(),{searchContent:t,setSearchContent:n}=(0,r.useContext)(x);return(0,w.jsx)(o.Stack,{px:"$4",w:"100%","data-sentry-element":"Stack","data-sentry-component":"ListHeaderComponent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx",children:(0,w.jsx)(o.SearchBar,{value:t,onChangeText:n,placeholder:e.formatMessage({id:c.ETranslations.global_search_address}),"data-sentry-element":"SearchBar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx"})})},R=(0,r.memo)((function({networkId:e,onPress:t}){return(0,w.jsx)(o.XStack,{role:"button",flexShrink:1,alignItems:"center",p:"$1",borderRadius:"$2",hoverStyle:{bg:"$bgHover"},pressStyle:{bg:"$bgActive"},focusable:!0,focusVisibleStyle:{outlineWidth:2,outlineColor:"$focusRing",outlineStyle:"solid"},userSelect:"none",onPress:t,"data-sentry-element":"XStack","data-sentry-component":"ChainSelectorCmp","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx",children:(0,w.jsx)(s.um,{size:24,networkId:e,"data-sentry-element":"NetworkAvatar","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx"})})}));const SignatureRecord=function(){var e=(0,a.A)(),[t,n]=(0,r.useState)((0,p.V)().onekeyall),[s,d]=(0,r.useState)(""),l=(0,r.useMemo)((function(){return{networkId:t,searchContent:s,setNetworkId:n,setSearchContent:d}}),[t,s,n,d]),u=(0,i.A)(),m=(0,r.useCallback)((function(){u({defaultNetworkId:t,onSelect(e){n?.(e.id)}})}),[u,t,n]),g=(0,r.useCallback)((function(){return(0,w.jsx)(R,{networkId:t,onPress:m})}),[m,t]),k=(0,r.useMemo)((function(){return[{title:e.formatMessage({id:c.ETranslations.settings_transactions}),page:Transactions},{title:e.formatMessage({id:c.ETranslations.settings_sign_text}),page:SignText},{title:e.formatMessage({id:c.ETranslations.explore_dapp_connections}),page:ConnectedSites}]}),[e]);return(0,w.jsxs)(o.Page,{"data-sentry-element":"Page","data-sentry-component":"PageView","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx",children:[(0,w.jsx)(o.Page.Header,{title:e.formatMessage({id:c.ETranslations.settings_signature_record}),headerRight:g,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx"}),(0,w.jsx)(x.Provider,{value:l,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx",children:(0,w.jsx)(o.Page.Body,{"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx",children:(0,w.jsx)(o.Tab.Page,{ListHeaderComponent:(0,w.jsx)(ListHeaderComponent,{}),data:k,contentContainerStyle:j,initialScrollIndex:0,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/SignatureRecord/index.tsx"})})})]})}},598312:(e,t,n)=>{n.d(t,{w:()=>useEarnTxLabel});var r=n(514041),a=n(908867),o=n(334439);function useEarnTxLabel(){var e=(0,a.A)();return(0,r.useCallback)((function(t){var n;return null!=(n={stake:e.formatMessage({id:o.ETranslations.earn_stake}),redeem:e.formatMessage({id:o.ETranslations.earn_redeem}),withdraw:e.formatMessage({id:o.ETranslations.global_withdraw}),claim:e.formatMessage({id:o.ETranslations.earn_claim})}[t.toLowerCase()])?n:t}),[e])}}}]);
//# sourceMappingURL=74933.c5763342c4.chunk.js.map