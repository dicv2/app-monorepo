!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61563961-a021-450a-96c1-9446c4e91643",e._sentryDebugIdIdentifier="sentry-dbid-61563961-a021-450a-96c1-9446c4e91643")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[5736],{605736:(e,t,a)=>{a.r(t),a.d(t,{default:()=>BatchCreateAccountForm});var n=a(586330),r=a(514041),o=a(908867),c=a(490343),s=a(547669),i=a(325809),l=a(498356),u=a(162616),p=a(625931),d=a(334439),m=a(193068),g=a(553083),f=a(584186),h=a(714191),k=a(15159),w=a(98807),A=a(107442),y=a(831085);function BatchCreateAccountFormPage({walletId:e,networkId:t}){var a,{activeAccount:i}=(0,u.LH)({num:0}),h=(0,l.A)(),v=(0,o.A)(),C=(0,r.useRef)(void 0),B=(0,r.useCallback)((a=(0,n.A)((function*({replace:t}){var a=C?.current?.getValues();a&&h[t?"replace":"push"](m.v3.BatchCreateAccountPreview,{walletId:e,networkId:a.networkId})})),function(e){return a.apply(this,arguments)}),[h,e]),b=(0,r.useRef)(!1);return(0,y.jsxs)(c.Page,{scrollEnabled:!0,safeAreaEnabled:!0,"data-sentry-element":"Page","data-sentry-component":"BatchCreateAccountFormPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx",children:[(0,y.jsx)(c.Page.Header,{title:v.formatMessage({id:d.ETranslations.global_bulk_add_accounts}),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx"}),(0,y.jsxs)(c.Page.Body,{p:"$4","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx",children:[(0,y.jsx)(w.N,{alwaysShowAdvancedSettings:!0,defaultNetworkId:t||(0,p.V)().onekeyall,defaultDeriveType:void 0,defaultFrom:"1",defaultCount:String(w.Bc),onNetworkChanged:function({isAllNetwork:e}){e||B({replace:!0})},formRef:C,"data-sentry-element":"BatchCreateAccountFormBase","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx"}),null]}),(0,y.jsx)(c.Page.Footer,{confirmButtonProps:{disabled:!1},onConfirm:(0,n.A)((function*(){try{var t;if(b.current)return;if(b.current=!0,Object.keys(null!=(t=C?.current?.formState?.errors)?t:{}).length)return void(b.current=!1);yield C.current?.handleSubmit((a=(0,n.A)((function*(t){var a=t?.networkId;if(g.Ay.isAllNetwork({networkId:a})){var n,r;yield s.A.servicePassword.promptPasswordVerifyByWallet({walletId:e,reason:k.a.CreateOrRemoveWallet});var o=null!=(n=t?.from)?n:"1",c=null!=(r=t?.count)?r:String(w.Bc),i=parseInt(o,10),l=parseInt(c,10),u=i-1,p=u+l-1;(0,A.g)({navigation:h,allNetworkInfo:{count:l}}),yield f.A.wait(600),yield s.A.serviceBatchCreateAccount.startBatchCreateAccountsFlowForAllNetwork({walletId:e,fromIndex:u,toIndex:p,excludedIndexes:{},saveToDb:!0,hideCheckingDeviceLoading:!0,autoHandleExitError:!0})}else yield B({replace:!1})})),function(e){return a.apply(this,arguments)}))()}finally{b.current=!1}var a})),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx"})]})}function BatchCreateAccountForm({route:e}){var t,{walletId:a,networkId:n}=null!=(t=e.params)?t:{};return(0,y.jsx)(i.b8,{enabledNum:[0],config:{sceneName:h.Zs.home,sceneUrl:""},"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-component":"BatchCreateAccountForm","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx",children:(0,y.jsx)(BatchCreateAccountFormPage,{walletId:a,networkId:n,"data-sentry-element":"BatchCreateAccountFormPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountForm.tsx"})})}},98807:(e,t,a)=>{a.d(t,{Bc:()=>u,N:()=>BatchCreateAccountFormBase});var n=a(514041),r=a(241440),o=a(908867),c=a(490343),s=a(334439),i=a(553083),l=a(831085),u=15,p=100,d=2**31,m=d+1-15;function AdvancedSettingsFormField({form:e,isAllNetwork:t,alwaysShowAdvancedSettings:a}){var i=(0,o.A)(),u=(0,c.useMedia)(),[p,d]=(0,n.useState)(!a),g=(0,n.useCallback)((function(){d((function(e){return!e}))}),[]),f=e.watch("from"),h=e.watch("count"),k=e.formState.errors.from,w=(0,n.useMemo)((function(){if(!f||!h)return"";var e=parseInt(f,10),t=e+parseInt(h,10)-1;return`${i.formatMessage({id:s.ETranslations.global_serial_number_start_desc},{from:e,to:t})}`}),[h,f,i]);return(0,l.jsxs)(c.Stack,{"data-sentry-element":"Stack","data-sentry-component":"AdvancedSettingsFormField","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx",children:[a?null:(0,l.jsxs)(c.XStack,{gap:"$3",py:"$2",ai:"center",onPress:g,children:[(0,l.jsx)(c.Stack,{children:(0,l.jsx)(c.SizableText,{size:"$bodyMdMedium",color:"$textSubdued",children:i.formatMessage({id:s.ETranslations.global_advantage_settings})})}),(0,l.jsx)(c.IconButton,{icon:p?"ChevronDownSmallOutline":"ChevronTopSmallOutline",variant:"tertiary",onPress:g})]}),(0,l.jsx)(c.Stack,{width:p?0:void 0,height:p?0:void 0,opacity:p?0:void 0,overflow:p?"hidden":void 0,"data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx",children:(0,l.jsx)(c.Stack,{mt:a?void 0:"$4","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx",children:(0,l.jsxs)(c.Form.Field,{label:i.formatMessage({id:s.ETranslations.global_serial_number_start}),name:"from",rules:{required:!0,validate:function(e){var t=new r.A(e);return!e||t.isNaN()?i.formatMessage({id:s.ETranslations.global_bulk_accounts_page_number_error}):!t.isLessThan(1)||"The minimum number of accounts is 1"},onChange:function(t){var a=(t?.target?.value||"").replace(/\D/g,""),n=new r.A(parseInt(a,10));a&&!n.isNaN()?n.isLessThan(1)?e.setValue("from","1"):n.isGreaterThanOrEqualTo(m)?e.setValue("from",m.toString()):e.setValue("from",n.toFixed()):e.setValue("from","")}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx",children:[(0,l.jsx)(c.Input,{secureTextEntry:!1,placeholder:i.formatMessage({id:s.ETranslations.global_serial_number_start}),size:u.gtMd?"medium":"large","data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx"}),k?null:(0,l.jsx)(c.Form.FieldDescription,{children:w})]})})})]})}function BatchCreateAccountFormBase({alwaysShowAdvancedSettings:e,networkReadyOnly:t,defaultCount:a,defaultDeriveType:m,defaultFrom:g,defaultNetworkId:f,onNetworkChanged:h,formRef:k}){var w=(0,o.A)(),A=(0,c.useMedia)(),y=(0,c.useForm)({values:{networkId:f,deriveType:m,from:g,count:a},mode:"onChange",reValidateMode:"onChange"});k&&(k.current=y);var v=y.watch("networkId"),C=(0,n.useMemo)((function(){return i.Ay.isAllNetwork({networkId:v})}),[v]);return(0,n.useEffect)((function(){h?.({networkId:v,isAllNetwork:C})}),[C,v,h]),(0,l.jsxs)(c.Form,{form:y,"data-sentry-element":"Form","data-sentry-component":"BatchCreateAccountFormBase","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx",children:[(0,l.jsx)(c.Form.Field,{label:w.formatMessage({id:s.ETranslations.global_generate_amount}),name:"count",rules:{required:!0,validate:function(e,t){var a=new r.A(e);if(!e||a.isNaN())return w.formatMessage({id:s.ETranslations.global_bulk_accounts_page_number_error});var n=C?u:p;if(t.from){var o=new r.A(t.from);if(!o.isNaN()){var c=d+1-o.toNumber();n=Math.min(n,c)}}return a.isGreaterThan(n)?w.formatMessage({id:s.ETranslations.global_generate_amount_information},{max:n}):!a.isLessThan(1)||"The minimum number of accounts is 1"},onChange:function(e){var t=(e?.target?.value||"").replace(/\D/g,""),a=new r.A(parseInt(t,10));t&&!a.isNaN()?a.isLessThan(1)?y.setValue("count","1"):y.setValue("count",a.toFixed()):y.setValue("count","")}},"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx",children:(0,l.jsx)(c.Input,{secureTextEntry:!1,testID:"account-generate-amount-input",placeholder:w.formatMessage({id:s.ETranslations.global_generate_amount}),size:A.gtMd?"medium":"large","data-sentry-element":"Input","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx"})}),(0,l.jsx)(AdvancedSettingsFormField,{form:y,alwaysShowAdvancedSettings:e,isAllNetwork:C,"data-sentry-element":"AdvancedSettingsFormField","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/BatchCreateAccountFormBase.tsx"})]})}},107442:(e,t,a)=>{a.d(t,{g:()=>showBatchCreateAccountProcessingDialog});var n=a(324586),r=a(839850),o=a(586330),c=a(514041),s=a(908867),i=a(490343),l=a(547669),u=a(318822),p=a(334439),d=(a(663522),a(831085)),m=["navigation","allNetworkInfo"];function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ProcessingDialogContent({navigation:e,allNetworkInfo:t}){var a,n,r,m,g=(0,s.A)(),[f,h]=(0,c.useState)(void 0),k=(0,c.useMemo)((function(){return Boolean(f&&f?.progressCurrent===f?.progressTotal)}),[f]),w=(0,c.useMemo)((function(){return Boolean(f&&!!f?.error)}),[f]),[A,y]=(0,c.useState)(!1);(0,c.useEffect)((function(){var cb=function(e){h(e)};return u.iL.on(u.Tu.BatchCreateAccount,cb),function(){u.iL.off(u.Tu.BatchCreateAccount,cb)}}),[]);var v,C=k||A||w;return(0,d.jsxs)(i.Stack,{"data-sentry-element":"Stack","data-sentry-component":"ProcessingDialogContent","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/ProcessingDialog.tsx",children:[(0,d.jsx)(i.Stack,{py:"$2.5",px:"$5",gap:"$5",flex:1,alignItems:"center",justifyContent:"center","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/ProcessingDialog.tsx",children:(0,d.jsxs)(i.Stack,{flex:1,alignItems:"center",justifyContent:"center",alignSelf:"center",w:"100%",maxWidth:"$80","data-sentry-element":"Stack","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/ProcessingDialog.tsx",children:[k?(0,d.jsx)(i.Icon,{name:"CheckRadioSolid",size:"$12",color:"$iconSuccess"}):null,!A&&!w||k?null:(0,d.jsx)(i.Icon,{name:"XCircleSolid",size:"$12",color:"$iconCritical"}),C?null:(0,d.jsx)(i.Progress,{mt:"$4",w:"100%",size:"medium",value:Math.ceil((null!=(a=f?.progressCurrent)?a:0)/(null!=(n=f?.progressTotal)?n:1)*100)}),(0,d.jsx)(i.SizableText,{mt:"$5",size:"$bodyLg",textAlign:"center","data-sentry-element":"SizableText","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/ProcessingDialog.tsx",children:g.formatMessage({id:p.ETranslations.global_bulk_accounts_loading},{amount:null!=(r=f?.progressCurrent)?r:0})}),t?(0,d.jsx)(i.SizableText,{size:"$bodyLg",textAlign:"center",children:g.formatMessage({id:p.ETranslations.global_bulk_accounts_loading_subtitle},{amount:null!=(m=t.count)?m:0})}):null,null]})}),(0,d.jsx)(i.Dialog.Footer,{showCancelButton:!1,showConfirmButton:!0,confirmButtonProps:{variant:C?"primary":"secondary",testID:"process-dialog-confirm-button"},onConfirmText:C?g.formatMessage({id:p.ETranslations.global_done}):g.formatMessage({id:p.ETranslations.global_cancel}),onConfirm:C?(0,o.A)((function*(){A||e?.popStack(),yield l.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()})):(v=(0,o.A)((function*({preventClose:e}){e(),y(!0),yield l.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()})),function(e){return v.apply(this,arguments)}),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/BatchCreateAccount/ProcessingDialog.tsx"})]})}function showBatchCreateAccountProcessingDialog(e){var{navigation:t,allNetworkInfo:a}=e,o=(0,r.A)(e,m);i.Dialog.show(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){(0,n.A)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({showExitButton:!1,dismissOnOverlayPress:!1,onCancel(){l.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()},onClose(){l.A.serviceBatchCreateAccount.cancelBatchCreateAccountsFlow()},renderContent:(0,d.jsx)(ProcessingDialogContent,{allNetworkInfo:a,navigation:t})},o))}}}]);
//# sourceMappingURL=5736.c6eced4c08.chunk.js.map