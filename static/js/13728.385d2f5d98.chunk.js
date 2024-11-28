!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6bdd9c54-3886-4813-bba4-ead4830caea1",e._sentryDebugIdIdentifier="sentry-dbid-6bdd9c54-3886-4813-bba4-ead4830caea1")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5.5.0 (2024112814)"},(self.webpackChunkweb=self.webpackChunkweb||[]).push([[13728],{13728:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ExportPrivateKeys});var o=r(586330),a=r(324586),n=r(839850),s=r(514041),c=r(908867),i=r(578104),p=r(490343),u=r(547669),l=r(325809),d=r(575995),y=r(498356),k=r(911998),m=r(162616),g=r(625931),f=r(319357),x=r(16853),w=r(334439),v=r(491180),b=r(482407),h=r(714191),E=r(831085);function CopyPrivateKeysDialog({defaultValue:e,rawKeyContent:t,showCheckBox:r}){var a=(0,c.A)(),[n,i]=(0,s.useState)(e),u=(0,s.useCallback)((function(e){i(!!e)}),[]),l=(0,p.useClipboard)();return(0,E.jsxs)(E.Fragment,{children:[r?(0,E.jsx)(p.Stack,{pr:"$1",children:(0,E.jsx)(p.Checkbox,{testID:"private-key-copy-check",value:n,onChange:u,label:a.formatMessage({id:w.ETranslations.global_private_key_copy_check})})}):null,(0,E.jsx)(p.Dialog.Footer,{onConfirmText:a.formatMessage({id:w.ETranslations.global_copy}),confirmButtonProps:{testID:"private-key-copy-confirm",disabled:r&&!n},onConfirm:(0,o.A)((function*(){l.copyText(t)})),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/showCopyPrivateKeysDialog.tsx"})]})}var K=["secureEntry","value","onChange"];function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var A="••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••";function SecureEntryTextArea(e){var{secureEntry:t,value:r,onChange:o}=e,a=(0,n.A)(e,K);return(0,E.jsx)(p.TextAreaInput,_objectSpread(_objectSpread({testID:"account-key-input",value:t?A:r,onChangeText:o},a),{},{"data-sentry-element":"TextAreaInput","data-sentry-component":"SecureEntryTextArea","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx"}))}function ExportPrivateKeysPage({indexedAccount:e,account:t,accountName:r,title:a,exportType:n}){var h,K,{activeAccount:P}=(0,m.LH)({num:0}),C=(0,y.A)(),S=(0,c.A)(),j=(0,p.useMedia)(),[_,T]=(0,s.useState)(!0),M=(0,p.useClipboard)(),I=(0,s.useMemo)((function(){return Boolean(t&&!e&&v.A.isImportedAccount({accountId:t?.id}))}),[t,e]),D=(0,s.useMemo)((function(){return Boolean(t&&!e&&v.A.isWatchingAccount({accountId:t?.id}))}),[t,e]),O=!!e,{result:N=[]}=(0,k.yk)((0,o.A)((function*(){return I&&t?.createAtNetwork||D&&t?.createAtNetwork?[t?.createAtNetwork]:(yield u.A.serviceNetwork.getSupportExportAccountKeyNetworks({exportType:n})).map((function(e){return e.network.id}))})),[t?.createAtNetwork,n,I,D]),$=(0,s.useMemo)((function(){return I||D?t?.createAtNetwork||(0,g.V)().btc:P?.network?.id||(0,g.V)().btc}),[t?.createAtNetwork,P?.network?.id,I,D]),B=(0,p.useForm)({values:{networkId:$,deriveType:null!=(h=P?.deriveType)?h:void 0,rawKeyContent:""},mode:"onChange",reValidateMode:"onBlur"}),F=B.watch("networkId"),V=B.watch("deriveType"),z=(0,s.useCallback)((function(){B.setValue("rawKeyContent",""),B.clearErrors("rawKeyContent"),T(!0)}),[B]),q=(0,s.useCallback)((K=(0,o.A)((function*({accountId:e,indexedAccountId:t,networkId:o,deriveType:a}){if(z(),(t||e)&&o&&(!O||a))try{var s=yield u.A.serviceAccount.exportAccountKeysByType({indexedAccountId:t,accountId:e,networkId:o,deriveType:a||void 0,exportType:n,accountName:r});s&&B.setValue("rawKeyContent",s)}catch(e){var c;throw[f.d.PasswordPromptDialogCancel].includes(e?.className)||B.setError("rawKeyContent",null!=(c=x.Ay.toPlainErrorObject(e))?c:{message:"error"}),e}})),function(e){return K.apply(this,arguments)}),[r,n,B,O,z]),Y=(0,i.YQ)(q,600),H=(0,s.useCallback)((0,o.A)((function*({noDebouncedCall:r}={}){var o=r?q:Y;yield o({accountId:t?.id,indexedAccountId:e?.id,networkId:F||"",deriveType:V})})),[t?.id,V,q,Y,e?.id,F]),L=(0,s.useMemo)((function(){return[{testID:"account-key-show-btn",iconName:_?"EyeOutline":"EyeOffOutline",onPress:(t=(0,o.A)((function*(){var e=B.getValues("rawKeyContent")||"";e&&e!==A||(yield H({noDebouncedCall:!0}));var t=!_;t?z():T(t)})),function onPress(){return t.apply(this,arguments)})},{iconName:"Copy3Outline",testID:"account-key-copy-btn",onPress:(e=(0,o.A)((function*(){var e=B.getValues("rawKeyContent")||"";e||(yield H({noDebouncedCall:!0})),e=B.getValues("rawKeyContent")||"","privateKey"===n?function showCopyPrivateKeysDialog({title:e,description:t,defaultChecked:r,rawKeyContent:o,showCheckBox:a}){return p.Dialog.show({icon:"ErrorOutline",tone:"destructive",title:e,description:t,renderContent:(0,E.jsx)(CopyPrivateKeysDialog,{rawKeyContent:o,defaultValue:r,showCheckBox:a})})}({title:S.formatMessage({id:w.ETranslations.global_private_key_copy}),description:S.formatMessage({id:w.ETranslations.global_private_key_copy_information}),showCheckBox:!0,defaultChecked:!1,rawKeyContent:e}):M.copyText(e)})),function onPress(){return e.apply(this,arguments)})}];var e,t}),[M,n,B,S,H,z,_]);(0,s.useEffect)((function(){F&&B.setValue("deriveType","")}),[B,F]),(0,s.useEffect)((function(){(0,b.Gb)(F,V),z()}),[V,F,z]);var R=(0,s.useMemo)((function(){var e="key";return"publicKey"===n&&(e=S.formatMessage({id:w.ETranslations.global_public_key})),"privateKey"===n&&(e=S.formatMessage({id:w.ETranslations.global_private_key})),e}),[n,S]);return(0,E.jsxs)(p.Page,{scrollEnabled:!0,safeAreaEnabled:!0,"data-sentry-element":"Page","data-sentry-component":"ExportPrivateKeysPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx",children:[(0,E.jsx)(p.Page.Header,{title:a,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx"}),(0,E.jsxs)(p.Page.Body,{p:"$4","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx",children:[(0,E.jsxs)(p.Form,{form:B,"data-sentry-element":"Form","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx",children:[(0,E.jsx)(p.Form.Field,{label:S.formatMessage({id:w.ETranslations.global_network}),name:"networkId",disabled:I,"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx",children:(0,E.jsx)(l.YS,{disabled:I,editable:!I,networkIds:N,"data-sentry-element":"ControlledNetworkSelectorTrigger","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx"})}),I||D?null:(0,E.jsx)(d.FB,{fieldName:"deriveType",networkId:F}),(0,E.jsx)(p.Form.Field,{label:R,name:"rawKeyContent","data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx",children:(0,E.jsx)(SecureEntryTextArea,{secureEntry:_,testID:"account-key-input",size:j.gtMd?"medium":"large",editable:!1,addOns:L,"data-sentry-element":"SecureEntryTextArea","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx"})})]}),"privateKey"===n?(0,E.jsxs)(p.Stack,{py:"$4",children:[(0,E.jsx)(p.Stack,{h:"$4"}),(0,E.jsx)(p.SizableText,{color:"$textSubdued",size:"$headingSm",children:S.formatMessage({id:w.ETranslations.faq_private_key})}),(0,E.jsx)(p.SizableText,{color:"$textSubdued",size:"$bodyMd",children:S.formatMessage({id:w.ETranslations.faq_private_key_desc})}),(0,E.jsx)(p.Stack,{h:"$4"}),(0,E.jsx)(p.SizableText,{color:"$textSubdued",size:"$headingSm",children:S.formatMessage({id:w.ETranslations.faq_private_key_keep})}),(0,E.jsx)(p.SizableText,{color:"$textSubdued",size:"$bodyMd",children:S.formatMessage({id:w.ETranslations.faq_private_key_keep_desc})})]}):null,null]}),(0,E.jsx)(p.Page.Footer,{onConfirmText:S.formatMessage({id:w.ETranslations.global_done}),confirmButtonProps:{disabled:!1},onConfirm:(0,o.A)((function*(){C.popStack()})),"data-sentry-element":"unknown","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx"})]})}function ExportPrivateKeys({route:e}){return(0,E.jsx)(l.b8,{enabledNum:[0],config:{sceneName:h.Zs.home,sceneUrl:""},"data-sentry-element":"AccountSelectorProviderMirror","data-sentry-component":"ExportPrivateKeys","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx",children:(0,E.jsx)(ExportPrivateKeysPage,_objectSpread(_objectSpread({},e.params),{},{"data-sentry-element":"ExportPrivateKeysPage","data-sentry-source-file":"/home/runner/work/app-monorepo/app-monorepo/packages/kit/src/views/AccountManagerStacks/pages/ExportKeys/ExportPrivateKeys.tsx"}))})}}}]);
//# sourceMappingURL=13728.385d2f5d98.chunk.js.map