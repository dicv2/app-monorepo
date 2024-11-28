!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="eeced5d4-6e95-4443-8b57-348de92cdff9",e._sentryDebugIdIdentifier="sentry-dbid-eeced5d4-6e95-4443-8b57-348de92cdff9")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[60848],{980342:(e,r,t)=>{t.d(r,{A:()=>s,z:()=>useDappCloseHandler});var o=t(490343),n=t(42484),a=t(831085);function useDappCloseHandler(e,r){return function(t){t?.flag!==n.nd.Confirmed&&e.reject(),"function"==typeof r&&r(t)}}const s=function DappOpenModalPage({children:e,onClose:r,dappApprove:t}){var n=useDappCloseHandler(t,r);return(0,a.jsxs)(o.Page,{scrollEnabled:!0,onClose:n,"data-sentry-element":"Page","data-sentry-component":"DappOpenModalPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/DappOpenModalPage.tsx",children:[(0,a.jsx)(o.Page.Header,{headerShown:!1,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/DAppConnection/pages/DappOpenModalPage.tsx"}),e]})}},660848:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var o=t(324586),n=t(586330),a=t(514041),s=t(654266),i=t(241440),l=t(908867),d=t(490343),p=t(547669),c=t(498356),u=t(796895),m=t(24284),f=t(334439),g=t(875998),k=t(491180),w=t(796151),_=t(980342),y=t(831085);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var parseChainId=function(e){return"number"==typeof e?e.toString():"string"==typeof e?e.startsWith("0x")?parseInt(e,16).toString():e:""};const h=function AddCustomNetwork(){var e,r,t,o,h,v,b,x,C=(0,l.A)(),E=(0,c.A)(),I=(0,s.lq)(),{state:S,networkId:T,onSuccess:M,onDeleteSuccess:j,networkName:N,rpcUrl:A,chainId:D,symbol:O,blockExplorerUrl:P}=null!=(e=I.params)?e:{},F=!!(null!=(r=I.params)?r:{}).chainId,{$sourceInfo:U,networkInfo:z}=(0,m.A)(),R=(0,u.A)({id:null!=(t=U?.id)?t:"",closeWindowAfterResolved:!0}),q=(0,d.useForm)({mode:"onBlur",defaultValues:{networkName:null!=(o=null!=N?N:z?.chainName)?o:"",rpcUrl:null!=(h=null!=A?A:z?.rpcUrls?.[0])?h:"",chainId:D?String(D):z?.chainId?parseChainId(z.chainId):"",symbol:null!=(v=null!=O?O:z?.nativeCurrency?.symbol)?v:"",blockExplorerUrl:null!=(b=null!=P?P:z?.blockExplorerUrls?.[0])?b:""}}),[$,B]=(0,a.useState)(!1),H=(0,a.useCallback)((x=(0,n.A)((function*(e){try{B(!0);var{chainId:r}=yield p.A.serviceCustomRpc.getChainIdByRpcUrl({rpcUrl:e});return r&&q.setValue("chainId",parseChainId(r)),r}catch(e){throw q.setValue("chainId",""),e}finally{B(!1)}})),function(e){return x.apply(this,arguments)}),[q]),[V,W]=(0,a.useState)(""),K=q.watch("chainId");(0,a.useEffect)((function(){function _searchChainDataFromServer(){return(_searchChainDataFromServer=(0,n.A)((function*(){var e=new i.A(K);if(e.isInteger()){var r=yield p.A.serviceCustomRpc.searchCustomNetworkByChainList({chainId:e.toString()});if(r){var t=q.getValues("symbol");r.nativeCurrency?.symbol&&r.nativeCurrency.symbol!==t&&W(C.formatMessage({id:f.ETranslations.form_symbol_recommend_text},{chainID:e.toString(),symbol:r.nativeCurrency?.symbol}))}}}))).apply(this,arguments)}!function searchChainDataFromServer(){return _searchChainDataFromServer.apply(this,arguments)}()}),[K,q,C]);var L,[Y,G]=(0,a.useState)(!1),J=(0,a.useCallback)((0,n.A)((function*(){try{if(!(yield q.trigger()))return;G(!0);var{networkName:e,rpcUrl:r,chainId:t,symbol:o,blockExplorerUrl:n}=q.getValues(),a=parseInt(t,10);try{if(!a){var s=yield H(r);s&&(a=s)}if(!a)return void d.Toast.error({title:C.formatMessage({id:f.ETranslations.form_rpc_url_invalid})})}catch(e){return void d.Toast.error({title:C.formatMessage({id:f.ETranslations.form_rpc_url_invalid})})}var i=k.A.buildCustomEvmNetworkId({chainId:a.toString()}),l=yield p.A.serviceNetwork.getNetworkSafe({networkId:i});if(l&&!l.isCustomNetwork)return void d.Toast.error({title:C.formatMessage({id:f.ETranslations.custom_network_network_exists_feedback_text})});var c={networkName:e,rpcUrl:r,chainId:a,symbol:o,blockExplorerUrl:n};yield p.A.serviceCustomRpc.upsertCustomNetwork(c);var u=yield p.A.serviceNetwork.getNetwork({networkId:i});R.resolve({result:u}),setTimeout((function(){M?.(u),g.U.account.wallet.customNetworkAdded({chainID:String(a)})}),500),d.Toast.success({title:C.formatMessage({id:F?f.ETranslations.feedback_change_saved:f.ETranslations.custom_network_add_custom_network_successfully_toast_text})}),E.pop()}catch(e){d.Toast.error({title:C.formatMessage({id:f.ETranslations.custom_network_add_custom_network_failed_toast_text})})}finally{G(!1)}})),[q,R,C,E,H,M,F]),Q=(0,a.useCallback)((0,n.A)((function*(){var e;T&&d.Dialog.show({title:C.formatMessage({id:f.ETranslations.custom_network_remove_network_dialog_title}),description:C.formatMessage({id:f.ETranslations.custom_network_remove_network_dialog_description}),showCancelButton:!0,onConfirmText:C.formatMessage({id:f.ETranslations.global_remove}),confirmButtonProps:{variant:"destructive"},onConfirm:(e=(0,n.A)((function*({close:e}){yield p.A.serviceCustomRpc.deleteCustomNetwork({networkId:T}),d.Toast.success({title:C.formatMessage({id:f.ETranslations.explore_removed_success})}),E.pop(),j?.(),yield e()})),function onConfirm(r){return e.apply(this,arguments)})})})),[T,C,E,j]),X=(0,a.useCallback)((function(){return"edit"!==S?null:(0,y.jsx)(d.IconButton,{title:C.formatMessage({id:f.ETranslations.global_remove}),icon:"DeleteOutline",variant:"tertiary",iconColor:"$iconSubdued",onPress:function(){return Q()}})}),[S,C,Q]),Z=(0,_.z)(R);return(0,y.jsxs)(d.Page,{scrollEnabled:!0,onClose:Z,"data-sentry-element":"Page","data-sentry-component":"AddCustomNetwork","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:[(0,y.jsx)(d.Page.Header,{title:C.formatMessage({id:f.ETranslations.custom_network_add_network_action_text}),headerRight:X,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"}),(0,y.jsxs)(d.Page.Body,{px:"$5",gap:"$5","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:[(0,y.jsx)(d.Alert,{icon:"ErrorOutline",type:"warning",title:C.formatMessage({id:f.ETranslations.custom_network_form_alert_text}),"data-sentry-element":"Alert","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"}),(0,y.jsxs)(d.Form,{form:q,"data-sentry-element":"Form","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:[(0,y.jsx)(d.Form.Field,{name:"networkName",label:C.formatMessage({id:f.ETranslations.form_network_name_label}),rules:{required:{value:!0,message:C.formatMessage({id:f.ETranslations.address_book_add_address_name_required})}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:(0,y.jsx)(d.Input,{size:"large",$gtMd:{size:"medium"},"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"})}),(0,y.jsx)(d.Form.Field,{name:"rpcUrl",label:"RPC URL",rules:{required:{value:!0,message:C.formatMessage({id:f.ETranslations.address_book_add_address_name_required})},validate:(L=(0,n.A)((function*(e){if(e){if(!w.Ay.parseUrl(e))return C.formatMessage({id:f.ETranslations.form_rpc_url_invalid});if(!e.startsWith("http"))return C.formatMessage({id:f.ETranslations.form_rpc_url_prefix_required});try{if(!(yield H(e)))return C.formatMessage({id:f.ETranslations.form_rpc_url_invalid})}catch(e){return C.formatMessage({id:f.ETranslations.form_rpc_url_invalid})}}})),function validate(e){return L.apply(this,arguments)})},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:(0,y.jsx)(d.Input,_objectSpread(_objectSpread({size:"large",$gtMd:{size:"medium"}},$&&{addOns:[{loading:!0}]}),{},{"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"}))}),(0,y.jsx)(d.Form.Field,{name:"chainId",label:"Chain ID",disabled:!0,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:(0,y.jsx)(d.Input,{size:"large",$gtMd:{size:"medium"},editable:!1,"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"})}),(0,y.jsx)(d.Form.Field,{name:"symbol",label:C.formatMessage({id:f.ETranslations.manage_token_custom_token_symbol}),description:V,rules:{required:{value:!0,message:C.formatMessage({id:f.ETranslations.address_book_add_address_name_required})}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:(0,y.jsx)(d.Input,{size:"large",$gtMd:{size:"medium"},"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"})}),(0,y.jsx)(d.Form.Field,{name:"blockExplorerUrl",label:C.formatMessage({id:f.ETranslations.form_block_explorer_url_label}),optional:!0,rules:{validate:function(e){if(e)return w.Ay.parseUrl(e)?e.startsWith("http")?void 0:C.formatMessage({id:f.ETranslations.form_rpc_url_prefix_required}):C.formatMessage({id:f.ETranslations.form_rpc_url_invalid})}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx",children:(0,y.jsx)(d.Input,{size:"large",$gtMd:{size:"medium"},"data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"})})]})]}),(0,y.jsx)(d.Page.Footer,{onConfirmText:C.formatMessage({id:f.ETranslations.action_save}),onCancelText:C.formatMessage({id:f.ETranslations.global_cancel}),confirmButtonProps:{loading:Y},onConfirm:function(){return q.handleSubmit(J)()},onCancel:function(){return R.reject()},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/Setting/pages/CustomNetwork/index.tsx"})]})}}}]);
//# sourceMappingURL=60848.b8e6b581cf.chunk.js.map